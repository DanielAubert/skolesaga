/**
 * Trekker ut et ledende «sjanger-/drill-prefiks» i parentes fra en oppgavetekst,
 * slik at det kan vises som en liten badge i stedet for i brødteksten.
 *
 * Eksempler på prefikser som fanges:
 *   «(Eksamenssjanger RED — Pettit, gjenganger 5/8 sett. …) Definer …»
 *   «(Sjanger D — parametertolkning …) Forklar …»
 *   «(Kravsanalyse-drill — …) Les …»
 *   «(Typetilfelle: avtalebinding — …) …»
 *   «(Skjult delspørsmål-drill: § 4 (2).) …»   ← nestede parenteser
 *   «(Kontrollspørsmål — …) …»
 *
 * Ikke alle oppgaver som starter med «(» er sjanger-prefiks (f.eks. en oppgave
 * som starter med et matematisk uttrykk i parentes), derfor gate på nøkkelord.
 */

export interface GenreTag {
  /** Kort tekst til badgen, f.eks. «RED», «Sjanger D», «Kravsanalyse-drill». */
  label: string;
  /** Hele parentes-innholdet (uten ytterparentesene) – vises som tooltip. */
  tooltip: string;
  /** Oppgaveteksten uten prefikset (trimmet). */
  rest: string;
}

/**
 * Nøkkelord-gate: innholdet i den ledende parentesen må matche ett av disse
 * mønstrene for at det skal regnes som et sjanger-prefiks. Ellers lar vi
 * teksten stå urørt (returnerer null).
 */
const GATE =
  /^(Eksamenssjanger|Sjanger\s|[A-ZÆØÅ«»][\wÆØÅæøå«»\-. ]*?drill\b|Typetilfelle|Kontrollspørsmål|Trener[\s:]|Eksamensnivå|Eksamensstil|(Fullt )?[Mm]inipraktikum|Faktumvariant|Variant\s|Feilvaksine|Kalibrering|Metodepoeng|Fra kap\.|Skjult delspørsmål|Avvisningsøvelse|Begrepskontroll|Feilfinning|Feil dom|Rettskilde|Tolkning\b|Uklarhetsregelen|Ugyldighet|Grunnvilkår|Grunnsteget|Medvirkning\b|Kollisjon\b|To spor|Hevingssperren|Vesentlighetsvurdering|Tilknytningsvilkåret|Adekvans|Kravssubjekt|Affeksjonsverdi|Tapsbegrensning|Lemping|«[^»]+»|§\s?\d)/u;

const MAX_LABEL = 24;

/**
 * Finner lengden på en ledende, balansert parentes-gruppe.
 * Returnerer indeksen RETT ETTER den avsluttende «)», eller -1 hvis teksten
 * ikke starter med en balansert parentes.
 * Håndterer nestede parenteser, f.eks. «(Skjult delspørsmål-drill: § 4 (2).)».
 */
function balancedParenEnd(s: string): number {
  if (s[0] !== '(') return -1;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(') depth++;
    else if (ch === ')') {
      depth--;
      if (depth === 0) return i + 1;
    }
  }
  return -1; // ubalansert
}

/**
 * Lager en kort badge-etikett fra parentes-innholdet.
 * Regel: teksten før første « — » eller «:», med «Eksamenssjanger »-prefikset
 * strippet; maks ~24 tegn, ellers kutt ved ordgrense.
 */
function makeLabel(inner: string): string {
  // Del ved første « — » (em-dash med mellomrom) eller «:».
  let head = inner;
  const dashIdx = head.indexOf(' — ');
  const colonIdx = head.indexOf(':');
  let cut = -1;
  if (dashIdx !== -1) cut = dashIdx;
  if (colonIdx !== -1 && (cut === -1 || colonIdx < cut)) cut = colonIdx;
  if (cut !== -1) head = head.slice(0, cut);

  head = head.trim();

  // Strip «Eksamenssjanger »-prefikset: «Eksamenssjanger RED» → «RED».
  head = head.replace(/^Eksamenssjanger\s+/, '');

  // Fjern eventuell avsluttende punktum.
  head = head.replace(/\.$/, '').trim();

  if (head.length <= MAX_LABEL) return head;

  // Kutt ved ordgrense innenfor maks-lengden.
  const clipped = head.slice(0, MAX_LABEL);
  const lastSpace = clipped.lastIndexOf(' ');
  const base = lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped;
  return base.trimEnd() + '…';
}


/**
 * Ordliste: hva sjangerkodene faktisk BETYR, per bok. Vises øverst i tooltipen
 * slik at badgen forklarer seg selv (produkteier-krav: «RED» alene sier ingenting).
 * Tekstene er destillert fra bøkenes egne sjangerkapitler (Del 0).
 */
const GENRE_GLOSSARY: Record<string, Record<string, string>> = {
  stv1100: {
    RED: 'RED = Redegjørelse. Oppgaven ber deg forklare en teori eller et begrep. Si kort hvem tenkeren er og hvilket spørsmål det handler om, og forklar så standpunktet steg for steg med de viktigste begrepene fra pensum.',
    SIT: 'SIT = Sitattolkning. Du får et sitat og skal forklare med egne ord hva det sier, hvilken rolle det spiller i argumentet (premiss, innvending eller konklusjon), og hvilken tenker og hvilket begrep det hører til.',
    SAM: 'SAM = Sammenligning. Sett to tenkere eller begreper opp mot hverandre: forklar hver av dem kort, og pek tydelig på hva som er likt og hva som er forskjellig.',
    ANV: 'ANV = Anvendelse. Bruk teorien på et konkret eksempel: finn begrepet som passer, og vis hva tenkeren ville sagt om akkurat denne situasjonen.',
    HYB: 'HYB = Drøftingshybrid. Forklar først teorien grundig (det teller mest), og løft deretter én til to innvendinger med en kort egen vurdering.',
  },
  exphil03: {
    S1: 'S1 = Redegjørelse. Kunnskapsdelen (a/b): gjør rede for en tenker eller et begrep — plasser det, og forklar posisjonen presist med pensumbegrepene.',
    S2: 'S2 = Sitattolkning. Du får et utdrag og skal forklare med egne ord hva det sier, hvilken rolle det spiller i argumentet, og hvilken tenker det hører til. (Den vanligste sjangeren fra 2021.)',
    S3: 'S3 = Sammenlign to tenkere. Forklar hver posisjon kort og presist, og pek tydelig på likhetene og forskjellene.',
    S4: 'S4 = Drøfting. Drøftingsdelen (c/d): vei argumenter for og mot mot hverandre og land et begrunnet standpunkt.',
    S5: 'S5 = Anvendelse. Bruk teorien på et konkret case eller tankeeksperiment: finn begrepet som passer, og vis hva tenkeren ville sagt.',
    S6: 'S6 = Kortsvar. Kort, presist svar på ett avgrenset spørsmål.',
    S7: 'S7 = Semesteroppgave. Den lengre seminarvarianten (800–1000 ord) med krav til struktur og referanser.',
  },
  econ1310: {
    C: 'Sjanger C = Telleregelen. Kort oppgave der du skal plassere eller telle poster riktig etter nasjonalregnskapets definisjoner.',
    D: 'Sjanger D = Parametertolkning. Forklar med vanlige ord hva en parameter i modellen betyr økonomisk.',
    E: 'Sjanger E = Komparativ statikk. Vis matematisk hva som skjer med en størrelse i modellen når noe utenfor modellen endres.',
    L: 'Sjanger L = Teoridrøfting. Ren tekstoppgave uten matematikk der du drøfter et økonomisk spørsmål.',
    M: 'Sjanger M = Rollecase. Du er økonomisk rådgiver og skal anbefale og begrunne et politikkvalg.',
  },
}

/** Slår opp forklaring for en badge-etikett («RED», «Sjanger D») i ordlista. */
function glossaryFor(label: string, courseId?: string): string | null {
  if (!courseId) return null;
  const book = GENRE_GLOSSARY[courseId];
  if (!book) return null;
  const key = label.replace(/^Sjanger\s+/, '').trim();
  return book[key] ?? null;
}

/**
 * Regel 2 + 3 (speiler PDF-generatoren, jf. BYGGEPLAN-MAL «Oppgave-estetikk»):
 *  - Fjern en ledende, redundant vanskelighets-parentes («(krevende)» osv.) —
 *    vanskelighetsgraden vises allerede i oppgavehodet.
 *  - Sett inline-nummerering «(1) … (2) … (3) …» (≥3 påfølgende fra (1)) på egne
 *    linjer med tynt fete tall, med ledeteksten som egen setning.
 * Matte-spenn ($…$, $$…$$) beskyttes så vi aldri rører LaTeX. Bold-/kursiv-
 * formaterte punkter («**(1) …**») er forfatterens valg og står urørt.
 */
const DIFF_PREFIX = /^\s*\((krevende|vanskelig|lett|middels)\)\s*/i;

function protectMath(s: string): { text: string; spans: string[] } {
  const spans: string[] = [];
  let t = s.replace(/\$\$[\s\S]*?\$\$/g, (m) => {
    spans.push(m);
    return `${spans.length - 1}`;
  });
  t = t.replace(/\$[^$\n]+?\$/g, (m) => {
    spans.push(m);
    return `${spans.length - 1}`;
  });
  return { text: t, spans };
}
function restoreMath(s: string, spans: string[]): string {
  return s.replace(/(\d+)/g, (_, i) => spans[Number(i)]);
}

function layoutInlineEnum(para: string): string | null {
  const marks = [...para.matchAll(/\((\d+)\)\s/g)];
  const first = marks.findIndex((m) => Number(m[1]) === 1);
  if (first === -1) return null;
  const run = [marks[first]];
  for (let i = first + 1; i < marks.length; i++) {
    if (Number(marks[i][1]) === run.length + 1) run.push(marks[i]);
    else break;
  }
  if (run.length < 3) return null;
  // La bold-/kursivformaterte opplistinger stå — forfatterens bevisste valg.
  if (run.some((m) => /[*_]$/.test(para.slice(0, m.index!)))) return null;
  const leadRaw = para.slice(0, run[0].index!);
  // Vern mot falske positiver: en ekte opplisting introduseres med kolon
  // («… følgende: (1) …»). Uten kolon i ledeteksten er «(1)(2)(3)» som oftest
  // ord-/mattemarkører inne i løpende tekst — la dem stå.
  if (!leadRaw.includes(':')) return null;
  const lead = leadRaw.trim();
  const items = run.map((m, i) => {
    const s = m.index! + m[0].length;
    const e = i + 1 < run.length ? run[i + 1].index! : para.length;
    return { n: m[1], text: para.slice(s, e).trim().replace(/[;,]\s*$/, '') };
  });
  const lines = items.map((it) => `<span class="font-semibold">(${it.n})</span> ${it.text}`);
  return (lead ? lead + '\n' : '') + lines.join('\n');
}

/** Rydder oppgaveteksten: fjerner redundant vanskelighets-parentes og setter
 *  inline-nummerering på egne linjer. Ren funksjon — trygg i render. */
export function formatTaskText(task: string): string {
  if (!task) return task;
  const { text, spans } = protectMath(task);
  const stripped = text.replace(DIFF_PREFIX, '');
  const out = stripped
    .split(/\n\n+/)
    .map((para) => (/\n/.test(para) ? para : layoutInlineEnum(para) ?? para))
    .join('\n\n');
  return restoreMath(out, spans);
}

export function extractGenreTag(task: string, courseId?: string): GenreTag | null {
  if (!task) return null;
  const trimmed = task.trimStart();
  if (trimmed[0] !== '(') return null;

  const end = balancedParenEnd(trimmed);
  if (end === -1) return null;

  const inner = trimmed.slice(1, end - 1); // uten ytterparentesene
  if (!GATE.test(inner.trimStart())) return null;

  const rest = trimmed.slice(end).trim();
  const label = makeLabel(inner.trimStart());
  if (!label) return null;

  // Bygg tooltip: forklaring fra ordlista først, deretter oppgavens egen
  // forankring — men bare hvis den tilfører noe utover selve etiketten
  // (unngå tautologier som «Eksamenssjanger RED.»).
  const annotation = inner.trim();
  const explanation = glossaryFor(label, courseId);
  const stripped = annotation
    .replace(/^Eksamenssjanger\s+/i, '')
    .replace(/^Sjanger\s+/i, '')
    .replace(label.replace('…', ''), '')
    .replace(/^[\s.—:-]+|[\s.—:-]+$/g, '');
  const annotationAddsInfo = stripped.length > 8;

  // Når vi har en forklaring, er «Eksamenssjanger RED —»-delen av annotasjonen
  // overflødig — vis bare det oppgavespesifikke, tydelig merket.
  const specific = annotation
    .replace(/^(Eksamenssjanger|Sjanger)\s+[A-ZÆØÅ]+\s*[—:.-]?\s*/i, '')
    .trim();

  let tooltip: string;
  if (explanation && annotationAddsInfo && specific)
    tooltip = explanation + '\n\nOm denne oppgaven: ' + specific;
  else if (explanation) tooltip = explanation;
  else tooltip = annotation;

  return { label, tooltip, rest };
}
