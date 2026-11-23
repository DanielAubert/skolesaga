/**
 * Svarsjekk for TEKSTSVAR i lærebokoppgaver (språkfag: fransk, tysk, spansk, engelsk, norsk) — ETT hjem.
 *
 * Tallsvar og algebra sjekkes i `svarsjekk.ts` (matematikk). Denne fila sammenligner skrevne ord og setninger:
 * deloppgaver med tekstfasit (`answer: "médecin"`), som oppgavesiden (`…/oppgave/[exerciseId]/exercise-trainer.tsx`)
 * bruker. Daniel 23.11.2026: «Undersøk også aksentene og slikt og rett kontrolleren.» Før dette slapp tekstfeltet
 * bare inn tall, og tekstfasit ble sammenlignet som tall — ingen tekstsvar kunne bli godkjent.
 *
 * Regler (pedagogisk begrunnet):
 *  - Stor/liten forbokstav, mellomrom, apostroftype og avsluttende tegnsetting (. ! ? …) og anførselstegn feller aldri.
 *  - Tysk: substantiv skrives med stor forbokstav — liten forbokstav midt i svaret gir «nesten», ikke «feil».
 *  - Mangler eller feil aksent/omlyd/ß/ñ/ç/œ/æøå (alt annet likt): «nesten», med tegnene som mangler — aldri bare «feil».
 *    Eleven skal lære rettskrivningen, så svaret godkjennes ikke før tegnene er riktige.
 *  - Spansk ¿ ¡ foran spørsmål/utrop: mangler de, er svaret «nesten».
 *  - Flere godkjente svar: liste, eller «x / y» i fasit. «(e)»-endinger (fatigué(e)) godtar begge former.
 */

export type Tekststatus = 'correct' | 'nesten' | 'incorrect';

export interface Tekstresultat {
  status: Tekststatus;
  /** Kort melding til eleven ved «nesten» (norsk bokmål; visningen setter «Nesten!» foran). */
  melding?: string;
  /** Tegnene som mangler eller er feil (é, ß, ¿ …). */
  tegn?: string[];
}

export type Lang = 'fr' | 'de' | 'es' | 'en' | 'nb';

/** Språket for et kurs-id (fransk-1 → fr). */
export function langForKurs(courseId: string): Lang {
  if (/^fransk/.test(courseId)) return 'fr';
  if (/^tysk/.test(courseId)) return 'de';
  if (/^spansk/.test(courseId)) return 'es';
  if (/engelsk/.test(courseId)) return 'en';
  return 'nb';
}

/** Tegnene eleven kan trenge og ikke alltid har på tastaturet (tegnraden under svarfeltet). */
export const TEGNRAD: Record<Lang, string[]> = {
  fr: ['é', 'è', 'ê', 'à', 'â', 'ç', 'î', 'ï', 'ô', 'ù', 'û', 'ë', 'œ'],
  de: ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'],
  es: ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'],
  en: [],
  nb: ['æ', 'ø', 'å'],
};

/** Er fasiten tekst (ikke tall/brøk/prosent)? Bare da brukes tekstsjekken. */
export function erTekstfasit(answer: unknown): boolean {
  const liste = Array.isArray(answer) ? answer : [answer];
  if (liste.length === 0) return false;
  return liste.every((a) => typeof a === 'string' && /\p{L}/u.test(a) && !/^[\s\d.,/%+\-−−x=·:]*$/i.test(a)) &&
    liste.some((a) => typeof a === 'string' && /\p{L}{2,}/u.test(a));
}

const UTEN_TEGN: Record<string, string> = { 'ß': 'ss', 'œ': 'oe', 'Œ': 'Oe', 'æ': 'ae', 'Æ': 'Ae', 'ø': 'o', 'Ø': 'O' };

/** Tar bort aksenter, omlyd, ring (å), ß/œ/æ/ø — «nesten»-sammenligningen. */
export function utenTegn(s: string): string {
  return s
    .replace(/[ßœŒæÆøØ]/g, (c) => UTEN_TEGN[c])
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

/** Felles normalisering: NFC, apostrof, mellomrom, anførsel og avsluttende tegnsetting bort. */
function vask(s: string): string {
  return s
    .normalize('NFC')
    .replace(/[’‘`´]/g, "'")
    .replace(/[«»"“”„]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([,;:])\s*/g, '$1 ')
    .trim()
    .replace(/[\s.!?…]+$/u, '')
    .trim();
}

/** Alle godkjente former av fasiten: liste, «x / y», og «(e)»/«(s)»-endinger med og uten. */
export function fasitFormer(answer: unknown): string[] {
  const liste = (Array.isArray(answer) ? answer : [answer]).filter((a): a is string => typeof a === 'string');
  const ut = new Set<string>();
  for (const a of liste) {
    const deler = a.includes(' / ') || /^[^/]+\/[^/]+$/.test(a) && !/\d\/\d/.test(a) ? a.split('/') : [a];
    for (const d of deler) {
      const v = vask(d);
      if (!v) continue;
      ut.add(v);
      if (/\([^)]{1,3}\)/.test(v)) {
        ut.add(vask(v.replace(/\(([^)]{1,3})\)/g, '')));
        ut.add(vask(v.replace(/\(([^)]{1,3})\)/g, '$1')));
      }
    }
  }
  return [...ut];
}

function tegnSomMangler(fasit: string, svar: string): string[] {
  const ut = new Set<string>();
  const f = [...fasit.normalize('NFC')];
  const s = [...svar.normalize('NFC')];
  if (f.length === s.length) {
    f.forEach((c, i) => { if (c.toLowerCase() !== s[i]?.toLowerCase()) ut.add(c); });
  } else {
    for (const c of f) if (/[^\x00-\x7F]/.test(c) && !s.includes(c)) ut.add(c);
  }
  return [...ut].filter((c) => /[^\x00-\x7F]/.test(c) || c === 'ß');
}

/** Sjekker et skrevet svar mot tekstfasit. */
export function sjekkTekstsvar(answer: unknown, raw: string, lang: Lang = 'nb'): Tekstresultat {
  const svar = vask(raw);
  if (!svar) return { status: 'incorrect' };
  const former = fasitFormer(answer);
  let nesten: Tekstresultat | null = null;
  for (const fasit of former) {
    // Spansk ¿ ¡: vurderes for seg (fasit med, svar uten → nesten)
    const fUtenSp = fasit.replace(/^[¿¡]\s*/, '');
    const sUtenSp = svar.replace(/^[¿¡]\s*/, '');
    const manglerSp = fasit !== fUtenSp && svar === sUtenSp;
    if (fUtenSp === sUtenSp || fUtenSp.toLowerCase() === sUtenSp.toLowerCase()) {
      const bareFørste = fUtenSp.slice(1) === sUtenSp.slice(1);
      if (lang === 'de' && fUtenSp !== sUtenSp && !bareFørste) {
        const ord = fUtenSp.split(' ').filter((w, i) => i > 0 && /^\p{Lu}/u.test(w) && sUtenSp.split(' ')[i] !== w);
        nesten = nesten ?? { status: 'nesten', melding: `Tyske substantiv skrives med stor forbokstav: ${ord.join(', ')}`, tegn: [] };
        continue;
      }
      if (manglerSp) {
        nesten = nesten ?? { status: 'nesten', melding: `Spanske spørsmål og utrop starter med ${fasit[0]}`, tegn: [fasit[0]] };
        continue;
      }
      return { status: 'correct' };
    }
    if (utenTegn(fUtenSp).toLowerCase() === utenTegn(sUtenSp).toLowerCase()) {
      const tegn = tegnSomMangler(fUtenSp.toLowerCase(), sUtenSp.toLowerCase());
      if (manglerSp) tegn.unshift(fasit[0]);
      nesten = nesten ?? {
        status: 'nesten',
        melding: tegn.length ? `Sjekk tegnene: ${tegn.join(' ')}` : 'Sjekk aksentene.',
        tegn,
      };
    }
  }
  return nesten ?? { status: 'incorrect' };
}
