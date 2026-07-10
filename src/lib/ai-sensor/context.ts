/**
 * AI-sensor: kontekstbygger (server-side)
 *
 * Bygger vurderingsgrunnlaget for KI-sensoren: oppgaveteksten, pensum
 * gjennomgått SÅ LANGT i boka (kapitler t.o.m. gjeldende kapittel — aldri
 * senere stoff), teorien i gjeldende kapittel, og fagets sensornøkler/
 * typiske feil fra fagprofilen. Alt komprimert til et stramt token-budsjett
 * slik at hver vurdering kan kjøres på en billig modell.
 *
 * Prinsipp (fra produkteier): besvarelsen skal vurderes mot spørsmålet og
 * pensum gjennomgått så langt i boken — ikke mot stoff leseren ikke har møtt.
 */

import { getCourse } from '@/lib/data/textbook-courses';
import { getChapterContent } from '@/lib/data/textbook-content';
import { getFagprofilOrFallback } from '@/lib/data/fagprofil';
import type {
  TextbookContentBlock,
  TextbookExercise,
} from '@/lib/types/textbook';

const MAX_THEORY_CHARS = 6000; // teori fra gjeldende kapittel
const MAX_PENSUM_LINES = 120; // kapitler-så-langt-listen
const MAX_BLOCK_CHARS = 350; // per teoriblokk

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return s.slice(0, max - 1).trimEnd() + '…';
}

/** Finn en oppgave (også inne i collapsible-blokker) i et kapittel. */
export function findExercise(
  content: TextbookContentBlock[],
  exerciseId: string
): TextbookExercise | null {
  for (const block of content) {
    if (block.type === 'exercise' && block.exercise?.id === exerciseId) {
      return block.exercise;
    }
    if (block.type === 'collapsible' && block.content) {
      const found = findExercise(block.content, exerciseId);
      if (found) return found;
    }
  }
  return null;
}

/** Full oppgavetekst inkl. deloppgaver, som ren tekst. */
export function exerciseToText(exercise: TextbookExercise): string {
  const parts: string[] = [exercise.task];
  for (const st of exercise.subTasks ?? []) {
    parts.push(`${st.label}) ${st.task}`);
  }
  return parts.join('\n');
}

/** Kompakt teoriutdrag fra gjeldende kapittel (definisjoner/teoremer/tekst). */
function extractChapterTheory(content: TextbookContentBlock[]): string {
  const lines: string[] = [];
  let used = 0;
  const push = (line: string) => {
    if (used + line.length > MAX_THEORY_CHARS) return false;
    lines.push(line);
    used += line.length;
    return true;
  };
  for (const block of content) {
    let line: string | null = null;
    if (block.type === 'definition' || block.type === 'theorem') {
      line = `- ${block.title}: ${truncate(block.content, MAX_BLOCK_CHARS)}`;
    } else if (block.type === 'text' && typeof block.content === 'string') {
      // Ta med korte tekstblokker (bindetekst hoppes over via lengdefilter)
      const t = block.content.trim();
      if (t.length > 80) line = `- ${truncate(t, MAX_BLOCK_CHARS)}`;
    }
    if (line && !push(line)) break;
  }
  return lines.join('\n');
}

export interface SensorContext {
  courseTitle: string;
  chapterLabel: string;
  pensumSaaLangt: string; // kapittelliste t.o.m. gjeldende
  chapterTheory: string; // teoriutdrag fra gjeldende kapittel
  question: string;
  karakterskala: string;
  sensornokler: string[];
  typiskeFeil: string[];
}

/**
 * Bygg sensor-kontekst. Returnerer null hvis kurs/kapittel/oppgave ikke finnes.
 * `question` kan overstyres (f.eks. for prøver); ellers hentes den fra exerciseId.
 */
export function buildSensorContext(opts: {
  courseId: string;
  chapterId: string;
  exerciseId?: string;
  questionOverride?: string;
}): SensorContext | null {
  const { courseId, chapterId, exerciseId, questionOverride } = opts;

  const course = getCourse(courseId);
  const chapter = getChapterContent(chapterId);
  if (!course || !chapter) return null;

  // Spørsmålet
  let question = questionOverride?.trim() || '';
  if (!question && exerciseId) {
    const ex =
      findExercise(chapter.content, exerciseId) ??
      chapter.exercises?.find((e) => e.id === exerciseId) ??
      null;
    if (!ex) return null;
    question = exerciseToText(ex);
  }
  if (!question) return null;

  // Pensum så langt: kapitler i kursrekkefølge t.o.m. gjeldende kapittel.
  // Hopper over narrativ-versjoner og prøvekapitler (de er ikke nytt pensum).
  const idx = course.chapters.findIndex((c) => c.id === chapterId);
  const upto = idx >= 0 ? course.chapters.slice(0, idx + 1) : course.chapters;
  const pensumLines: string[] = [];
  for (const c of upto) {
    if (c.isNarrativeVersion) continue;
    if (c.id.endsWith('-prove')) continue;
    const topics = c.topics?.length ? ` (${c.topics.slice(0, 6).join(', ')})` : '';
    pensumLines.push(`${c.number} ${c.title}${topics}`);
    if (pensumLines.length >= MAX_PENSUM_LINES) break;
  }

  const meta = course.chapters[idx];
  const profil = getFagprofilOrFallback(courseId, course.title);

  return {
    courseTitle: course.title,
    chapterLabel: meta ? `${meta.number} ${meta.title}` : chapter.title,
    pensumSaaLangt: pensumLines.join('\n'),
    chapterTheory: extractChapterTheory(chapter.content),
    question,
    karakterskala: profil.scoring.karakterskala || 'A–F',
    sensornokler: profil.sensornokler ?? [],
    typiskeFeil: profil.typiskeFeil ?? [],
  };
}

/** Systemprompt + brukermelding for vurderingen. Tier styrer dybden:
 * 1 «Karakter + hvorfor» (standard): siterer studentens formuleringer, kobler
 *   til sensornøkler/typiske feil.
 * 2 «Ditt avsnitt til A» (premium): + A-stresstest-rubrikk, omskriver ETT
 *   avsnitt til toppnivå, anbefaler neste øvelse. */
export function buildSensorPrompt(
  ctx: SensorContext,
  answer: string,
  tier: 1 | 2 = 1
): {
  system: string;
  user: string;
} {
  // Bestått/ikke bestått-fag (f.eks. JUS1111): bokstavkarakter er feil skala —
  // gi en bestått-gradering i stedet (studentpanel-krav, 2 uavhengige).
  const bestattFag = ctx.karakterskala.toLowerCase().includes('bestått');
  const karakterInstruks = bestattFag
    ? 'Dette faget vurderes BESTÅTT/IKKE BESTÅTT. Feltet karakterBokstav skal være TOM streng (""). Feltet karakter skal være NØYAKTIG ett av: «Bestått med god margin», «Bestått», «Bestått på marginen», «Ikke bestått (på grensen)», «Ikke bestått».'
    : 'Feltet karakterBokstav skal være NØYAKTIG én bokstav: A, B, C, D, E eller F.';

  const felles = [
    'Du er en erfaren, rettferdig norsk sensor som vurderer en students besvarelse.',
    'Vurder KUN mot pensum studenten har møtt så langt (listen under) og teorien i gjeldende kapittel — aldri trekk for at senere stoff ikke er brukt, og ikke krev begreper utenfor listen.',
    'Vær konkret og konstruktiv, på norsk bokmål. Ikke skriv fasit-besvarelsen for studenten; pek på hva som mangler og hvordan de kan forbedre seg.',
    'Kalibrer karakteren KONSERVATIVT — heller ett hakk streng enn snill.',
    karakterInstruks,
    'SITER studentens egne formuleringer (korte, ordrette utdrag i anførselstegn) der du påpeker styrker og mangler.',
    'Der fagets SENSORNØKLER og TYPISKE FEIL er oppgitt under, skal du referere dem EKSPLISITT i mangler-listen — med kode/formulering der den finnes (f.eks. «#8 — du lister argumentene i stedet for å veie dem»). Aldri generiske råd («god struktur») når en fagspesifikk kobling finnes.',
    'Er besvarelsen svak (E/F eller ikke bestått): vær ekstra konkret om de 2–3 første grepene videre, og finn alltid minst én reell styrke — aldri nedlatende. Dommen skal være til å handle på, ikke til å gi opp av.',
  ];
  const tierEkstra =
    tier === 2
      ? [
          'I tillegg (premium-vurdering):',
          '- Fyll "rubrikk" med en A-stresstest — svar kort på: (i) er den sterkeste innvendingen/motargumentet med? (ii) er betingelsen som ville snudd konklusjonen navngitt? (iii) gjør drøftingen/subsumsjonen faktisk arbeid, eller listes det bare? (iv) er konklusjonen en posisjon eller en balanseøvelse?',
          '- Fyll "omskriving": velg avsnittet i studentens svar med størst forbedringspotensial og skriv det om til toppnivå (A) — behold studentens innhold og stemme, vis grepet.',
          '- Fyll "nesteOvelse": anbefal én konkret neste øvelse (helst et kapittel/en oppgavetype fra pensumlisten over, ellers en presis egentreningsøvelse).',
        ]
      : [];
  const jsonFelter =
    tier === 2
      ? '{"karakterBokstav": "<A-F, én bokstav>", "karakter": "<kort vurdering, f.eks. «C, på grensen til B»>", "kortDom": "<1-2 setninger>", "styrker": ["..."], "mangler": ["..."], "forbedring": "<konkret råd, 2-4 setninger>", "rubrikk": ["<(i)>", "<(ii)>", "<(iii)>", "<(iv)>"], "omskriving": "<svakeste avsnitt omskrevet til A-nivå>", "nesteOvelse": "<én konkret anbefaling>"}'
      : '{"karakterBokstav": "<A-F, én bokstav>", "karakter": "<kort vurdering, f.eks. «C, på grensen til B»>", "kortDom": "<1-2 setninger>", "styrker": ["..."], "mangler": ["..."], "forbedring": "<konkret råd, 2-4 setninger>"}';

  const system = [
    ...felles,
    ...tierEkstra,
    'Svar UTELUKKENDE med gyldig JSON (ingen markdown rundt) med feltene:',
    jsonFelter,
  ].join('\n');

  const user = [
    `FAG: ${ctx.courseTitle}`,
    `KAPITTEL: ${ctx.chapterLabel}`,
    `KARAKTERSKALA: ${ctx.karakterskala}`,
    '',
    'PENSUM GJENNOMGÅTT SÅ LANGT (kapitler t.o.m. gjeldende):',
    ctx.pensumSaaLangt,
    '',
    ctx.chapterTheory
      ? `TEORI I GJELDENDE KAPITTEL (utdrag):\n${ctx.chapterTheory}\n`
      : '',
    ctx.sensornokler.length
      ? `SENSORNØKLER FOR FAGET (hva sensor belønner):\n${ctx.sensornokler.map((s) => `- ${s}`).join('\n')}\n`
      : '',
    ctx.typiskeFeil.length
      ? `TYPISKE FEIL I FAGET (se etter disse):\n${ctx.typiskeFeil.map((s) => `- ${s}`).join('\n')}\n`
      : '',
    'OPPGAVEN:',
    ctx.question,
    '',
    'STUDENTENS BESVARELSE:',
    answer,
  ]
    .filter(Boolean)
    .join('\n');

  return { system, user };
}
