/**
 * Smart repetisjon (SRS) — SM-2-lett planlegging med localStorage
 *
 * Egen, klient-side lagring for «Smart repetisjon»-modus på flashcards-siden.
 * Uavhengig av det innloggingsbaserte backend-laget i `spaced-repetition.ts`
 * (som API-et bruker), slik at anonyme brukere også får spaced repetition
 * som lagres lokalt mellom økter.
 *
 * Vurderingsnivåer (4-trinns SM-2):
 * - again: glemt — nullstill, kort forfaller straks igjen
 * - hard:  vanskelig — kort intervall, redusert ease
 * - good:  bra — standard progresjon
 * - easy:  lett — akselerert progresjon, økt ease
 */

import type { FlashcardDefinition } from '@/lib/data/flashcard-definitions';

export type SrsRating = 'again' | 'hard' | 'good' | 'easy';

export interface SrsCardState {
  /** Ease-faktor, 1.3–2.5+ */
  ease: number;
  /** Intervall i dager frem til neste forfall */
  intervalDays: number;
  /** Neste forfallsdato (ISO-timestamp) */
  dueAt: string;
  /** Antall vellykkede repetisjoner på rad */
  repetitions: number;
  /** Sist vurdert (ISO-timestamp) — null hvis aldri sett */
  lastReviewedAt: string | null;
}

/** Lagringsformat i localStorage: kort-id → tilstand */
export type SrsStore = Record<string, SrsCardState>;

// ---------------------------------------------------------------------------
// Konstanter (juster her ved behov)
// ---------------------------------------------------------------------------

const MIN_EASE = 1.3;
const DEFAULT_EASE = 2.5;

/** Antall nye (aldri sett) kort som introduseres per økt */
export const NEW_CARDS_PER_SESSION = 10;

/** Maks antall forfalte kort som tas med i én økt */
export const MAX_DUE_PER_SESSION = 60;

const STORAGE_PREFIX = 'srs:';
const STORAGE_VERSION = 1;

function storageKey(courseId: string): string {
  return `${STORAGE_PREFIX}${courseId}`;
}

// ---------------------------------------------------------------------------
// Planlegging (SM-2-lett)
// ---------------------------------------------------------------------------

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Beregner ny korttilstand ut fra en vurdering.
 * Rene funksjoner — tar `now` for testbarhet.
 */
export function schedule(
  prev: SrsCardState | null,
  rating: SrsRating,
  now: Date = new Date()
): SrsCardState {
  const base = prev ?? {
    ease: DEFAULT_EASE,
    intervalDays: 0,
    dueAt: now.toISOString(),
    repetitions: 0,
    lastReviewedAt: null,
  };

  let ease = base.ease;
  let intervalDays = base.intervalDays;
  let repetitions = base.repetitions;

  switch (rating) {
    case 'again':
      // Glemt — nullstill progresjon, forfaller på nytt straks (samme økt)
      ease = Math.max(MIN_EASE, ease - 0.2);
      repetitions = 0;
      intervalDays = 0;
      break;

    case 'hard':
      ease = Math.max(MIN_EASE, ease - 0.15);
      if (repetitions === 0) {
        intervalDays = 1;
      } else {
        intervalDays = Math.max(1, Math.round(intervalDays * 1.2));
      }
      repetitions += 1;
      break;

    case 'good':
      if (repetitions === 0) {
        intervalDays = 1;
      } else if (repetitions === 1) {
        intervalDays = 3;
      } else {
        intervalDays = Math.round(intervalDays * ease);
      }
      repetitions += 1;
      break;

    case 'easy':
      ease = ease + 0.15;
      if (repetitions === 0) {
        intervalDays = 4;
      } else {
        intervalDays = Math.round(intervalDays * ease * 1.3);
      }
      repetitions += 1;
      break;
  }

  // «Again» holder kortet forfalt i samme økt (0 dager). Ellers min. 1 dag.
  const dueAt =
    intervalDays <= 0
      ? new Date(now.getTime()).toISOString()
      : new Date(now.getTime() + intervalDays * DAY_MS).toISOString();

  return {
    ease,
    intervalDays,
    dueAt,
    repetitions,
    lastReviewedAt: now.toISOString(),
  };
}

/** Er kortet forfalt (skal repeteres) på tidspunktet `now`? */
export function isDue(state: SrsCardState, now: Date = new Date()): boolean {
  return new Date(state.dueAt).getTime() <= now.getTime();
}

// ---------------------------------------------------------------------------
// localStorage-lag (SSR-trygt: bruk kun i 'use client')
// ---------------------------------------------------------------------------

export function loadStore(courseId: string): SrsStore {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(storageKey(courseId));
    if (!raw) return {};
    const parsed = JSON.parse(raw) as { version?: number; cards?: SrsStore };
    if (parsed && typeof parsed === 'object' && parsed.cards) {
      return parsed.cards;
    }
    return {};
  } catch {
    return {};
  }
}

export function saveStore(courseId: string, store: SrsStore): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(
      storageKey(courseId),
      JSON.stringify({ version: STORAGE_VERSION, cards: store })
    );
  } catch {
    // Ignorer (f.eks. full/blokkert storage) — SRS er beste-innsats.
  }
}

// ---------------------------------------------------------------------------
// Øktbygging
// ---------------------------------------------------------------------------

export interface SessionStats {
  /** Antall forfalte kort (sett før, forfaller i dag) */
  dueCount: number;
  /** Antall aldri-sette kort totalt tilgjengelig */
  newAvailable: number;
  /** Antall nye kort som faktisk tas med i økten */
  newInSession: number;
}

/**
 * Beregner statistikk uten å bygge selve decket (til fanevisning).
 */
export function computeStats(
  definitions: FlashcardDefinition[],
  store: SrsStore,
  now: Date = new Date(),
  newPerSession: number = NEW_CARDS_PER_SESSION
): SessionStats {
  let dueCount = 0;
  let newAvailable = 0;

  for (const def of definitions) {
    const state = store[def.id];
    if (!state) {
      newAvailable += 1;
    } else if (isDue(state, now)) {
      dueCount += 1;
    }
  }

  return {
    dueCount,
    newAvailable,
    newInSession: Math.min(newAvailable, newPerSession),
  };
}

/**
 * Bygger et øktdeck: forfalte kort først (opptil MAX_DUE_PER_SESSION),
 * deretter en liten bunke nye (aldri sette) kort. Rekkefølgen bevares
 * (forfalt → nye) slik at repetisjon prioriteres foran ny læring.
 */
export function buildSrsSession(
  definitions: FlashcardDefinition[],
  store: SrsStore,
  now: Date = new Date(),
  newPerSession: number = NEW_CARDS_PER_SESSION
): FlashcardDefinition[] {
  const due: FlashcardDefinition[] = [];
  const fresh: FlashcardDefinition[] = [];

  for (const def of definitions) {
    const state = store[def.id];
    if (!state) {
      fresh.push(def);
    } else if (isDue(state, now)) {
      due.push(def);
    }
  }

  // Forfalte: eldst forfall først (mest overmoden repetisjon)
  due.sort((a, b) => {
    const da = new Date(store[a.id].dueAt).getTime();
    const db = new Date(store[b.id].dueAt).getTime();
    return da - db;
  });

  const deck = [
    ...due.slice(0, MAX_DUE_PER_SESSION),
    ...fresh.slice(0, newPerSession),
  ];

  return deck;
}
