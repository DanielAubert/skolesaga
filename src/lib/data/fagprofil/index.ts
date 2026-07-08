/**
 * Fagprofil-loader (datalag for eksamenssimulatoren)
 *
 * Én JSON-fil per høyskolefag i `src/lib/data/fagprofil/<courseId>.json`,
 * ekstrahert fra fagets EKSAMENSANALYSE.md. Se docs/hoyskole-boker/FAGPROFIL-SCHEMA.md.
 *
 * Bundler-sikkerhet: denne modulen kan bli importert (transitivt) av
 * klientkomponenter. Vi laster derfor `fs`/`path` LAZY via `eval('require')`
 * — nøyaktig samme mønster som getMetaNn() i textbook-courses.ts — slik at
 * Turbopack ikke prøver å resolve node-innebygde moduler i klientbundelen.
 * JSON-filene leses fra disk ved kjøretid (server), ikke statisk importert,
 * så nye fagprofiler dukker opp uten kodeendring og uten å blåse opp bundelen.
 */

export interface FagprofilEksamensform {
  beskrivelse: string;
  varighetMinutter: number | null;
  sprak: 'norsk' | 'engelsk' | 'norsk/engelsk';
  hjelpemidler: string;
  struktur: string;
}

export interface FagprofilScoring {
  karakterskala: string;
  minuspoeng: boolean;
  minuspoengRegel: string | null;
  bestaattKrav: string | null;
  terskler: Record<string, string> | null;
}

export interface Fagprofil {
  courseId: string;
  tittel: string;
  institusjon?: string;
  arketype?: string;
  eksamensform: FagprofilEksamensform;
  scoring: FagprofilScoring;
  sensornokler: string[];
  typiskeFeil: string[];
  sjangre: string[];
  kilde?: string;
  verifiser?: string[];
}

/**
 * Fallback-profil brukt når fagets JSON-fil mangler eller ikke kan leses.
 * 60 min, ingen minuspoeng, A–F — bevisst nøytral.
 */
export function getFallbackFagprofil(courseId: string, tittel?: string): Fagprofil {
  return {
    courseId,
    tittel: tittel ?? courseId,
    eksamensform: {
      beskrivelse:
        'Eksamensformen for dette faget er ikke registrert ennå. Simulatoren bruker en standard flervalgsøkt.',
      varighetMinutter: 60,
      sprak: 'norsk',
      hjelpemidler: 'ukjent',
      struktur: 'Flervalgsspørsmål trukket på tvers av kapitlene.',
    },
    scoring: {
      karakterskala: 'A–F',
      minuspoeng: false,
      minuspoengRegel: null,
      bestaattKrav: null,
      terskler: null,
    },
    sensornokler: [],
    typiskeFeil: [],
    sjangre: ['flervalg'],
  };
}

// In-memory-cache så vi ikke leser disk på nytt for hvert kall i samme prosess.
const cache = new Map<string, Fagprofil | null>();

/**
 * Henter fagprofilen for et kurs. Returnerer `null` hvis fila ikke finnes —
 * kallere bruker getFallbackFagprofil() ved behov (eller getFagprofilOrFallback).
 * Kun serverkjøring (leser fra disk); trygg å kalle fra server-komponenter.
 */
export function getFagprofil(courseId: string): Fagprofil | null {
  if (cache.has(courseId)) return cache.get(courseId) ?? null;

  let profil: Fagprofil | null = null;
  try {
    // Lazy, server-only innlasting (se toppkommentar for hvorfor eval).
    const nodeRequire = eval('require') as NodeRequire;
    const fs = nodeRequire('fs') as typeof import('fs');
    const path = nodeRequire('path') as typeof import('path');
    const p = path.join(
      process.cwd(),
      'src',
      'lib',
      'data',
      'fagprofil',
      `${courseId}.json`,
    );
    if (fs.existsSync(p)) {
      profil = JSON.parse(fs.readFileSync(p, 'utf-8')) as Fagprofil;
    }
  } catch {
    profil = null;
  }

  cache.set(courseId, profil);
  return profil;
}

/** Som getFagprofil, men faller alltid tilbake til en fallback-profil. */
export function getFagprofilOrFallback(courseId: string, tittel?: string): Fagprofil {
  return getFagprofil(courseId) ?? getFallbackFagprofil(courseId, tittel);
}

/** Har faget en registrert (ekte) fagprofil? */
export function hasFagprofil(courseId: string): boolean {
  return getFagprofil(courseId) !== null;
}

// ----------------------------------------------------------------------------
// Scoring-hjelpere
// ----------------------------------------------------------------------------

/**
 * Utleder straffen for et FEIL svar (negativt tall) fra minuspoengRegel-teksten.
 * Riktig = +1, blankt = 0 håndteres av kalleren. Default −0,5 dersom minuspoeng
 * er slått på men regelen ikke lar seg parse.
 *
 * Eksempler den forstår: «−0,5 per feil kryss», «-1,5 per feil», «minus 1 poeng».
 */
export function feilstraffFraRegel(scoring: FagprofilScoring): number {
  if (!scoring.minuspoeng) return 0;
  const regel = scoring.minuspoengRegel ?? '';
  // Normaliser ulike minustegn og desimalkomma → punktum.
  const normalized = regel.replace(/[–—−]/g, '-').replace(/,/g, '.');
  // Finn første tall (med valgfritt minustegn) i teksten.
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  if (match) {
    const n = Math.abs(parseFloat(match[0]));
    if (!Number.isNaN(n) && n > 0) return -n;
  }
  return -0.5;
}
