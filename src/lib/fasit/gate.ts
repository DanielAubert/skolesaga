/**
 * Fasit-mur (Pluss): målt tilgang til løsningsforslag.
 *
 * SKJULT BAK FEATURE-FLAGG: NEXT_PUBLIC_FASIT_MUR_ENABLED=true for å aktivere.
 * AV som standard — muren er IKKE ute på siden.
 *
 * Forretningsmodell (docs/LANSERING-TODO.md + minne «forretningsmodell»):
 * - Auto-retting (riktig/galt) er ALLTID gratis — den skaper frustrasjons-
 *   øyeblikket som konverterer.
 * - Fullstendige løsningsforslag: GRATIS_PER_UKE visninger per uke for
 *   gratisbrukere (målt mur), ubegrenset for Pluss-abonnenter (49 kr/mnd).
 *
 * Kredittstubb: `hasPlusAccess` kobles til ekte abonnementsdata (Supabase)
 * før lansering — nå alltid false (flagget er uansett av). Meteret er
 * localStorage-basert (klient) i V1; server-side håndheving kommer sammen
 * med betalingsløsningen.
 */

export const GRATIS_PER_UKE = 3;

export function fasitMurEnabled(): boolean {
  return process.env.NEXT_PUBLIC_FASIT_MUR_ENABLED === 'true';
}

// STUBB: erstattes med ekte abonnementssjekk (Supabase-profil) før lansering.
export function hasPlusAccess(): boolean {
  return false;
}

/** ISO-ukenøkkel, f.eks. "2026-W28" — meteret nullstilles hver mandag. */
function weekKey(now = new Date()): string {
  const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day); // torsdagen i samme ISO-uke
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

const STORAGE_KEY = 'fasit-meter';

interface MeterState {
  week: string;
  used: string[]; // exercise-id-er brukt denne uka (samme oppgave teller én gang)
}

function readMeter(): MeterState {
  if (typeof window === 'undefined') return { week: weekKey(), used: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const s = JSON.parse(raw) as MeterState;
      if (s.week === weekKey() && Array.isArray(s.used)) return s;
    }
  } catch {
    /* korrupt state → nullstill */
  }
  return { week: weekKey(), used: [] };
}

function writeMeter(s: MeterState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* private mode e.l. — feil her skal aldri blokkere */
  }
}

/** Antall gratis visninger igjen denne uka. */
export function remainingFreeViews(): number {
  return Math.max(0, GRATIS_PER_UKE - readMeter().used.length);
}

/** Har denne oppgaven allerede blitt "kjøpt" med en gratis visning denne uka? */
export function alreadyUnlocked(exerciseId: string): boolean {
  return readMeter().used.includes(exerciseId);
}

/**
 * Bruk én gratis visning på en oppgave. Returnerer true hvis tillatt
 * (allerede låst opp, eller det var visninger igjen).
 */
export function consumeFreeView(exerciseId: string): boolean {
  const s = readMeter();
  if (s.used.includes(exerciseId)) return true;
  if (s.used.length >= GRATIS_PER_UKE) return false;
  s.used.push(exerciseId);
  writeMeter(s);
  return true;
}
