/**
 * SM-2 Spaced Repetition-algoritme for flashcards
 *
 * Basert på SuperMemo SM-2 med tre vurderingsnivåer:
 * - hard: kort intervall, redusert ease
 * - ok: standard progresjon
 * - easy: akselerert progresjon, økt ease
 */

import type { FlashcardDefinition } from '@/lib/data/flashcard-definitions';

export type FlashcardRating = 'hard' | 'ok' | 'easy';

export interface FlashcardProgress {
  definitionId: string;
  intervalDays: number;
  easeFactor: number;
  repetitions: number;
  nextReviewAt: string; // ISO timestamp
  lastReviewedAt: string | null;
  totalReviews: number;
  easyCount: number;
  okCount: number;
  hardCount: number;
}

interface ReviewResult {
  intervalDays: number;
  easeFactor: number;
  repetitions: number;
  nextReviewAt: string;
}

const MIN_EASE = 1.3;
const DEFAULT_EASE = 2.5;

/**
 * Beregner neste gjennomgangstidspunkt basert på SM-2-algoritmen.
 */
export function computeNextReview(
  current: Pick<FlashcardProgress, 'intervalDays' | 'easeFactor' | 'repetitions'> | null,
  rating: FlashcardRating
): ReviewResult {
  const prev = current ?? {
    intervalDays: 0,
    easeFactor: DEFAULT_EASE,
    repetitions: 0,
  };

  let { intervalDays, easeFactor, repetitions } = prev;

  switch (rating) {
    case 'hard':
      // Tilbakestill til kort intervall, reduser ease
      intervalDays = 1;
      easeFactor = Math.max(MIN_EASE, easeFactor - 0.2);
      repetitions = 0;
      break;

    case 'ok':
      // Standard progresjon
      if (repetitions === 0) {
        intervalDays = 1;
      } else if (repetitions === 1) {
        intervalDays = 3;
      } else {
        intervalDays = Math.round(intervalDays * easeFactor * 0.6);
      }
      repetitions += 1;
      break;

    case 'easy':
      // Akselerert progresjon, økt ease
      if (repetitions === 0) {
        intervalDays = 4;
      } else {
        intervalDays = Math.round(intervalDays * easeFactor);
      }
      easeFactor = easeFactor + 0.1;
      repetitions += 1;
      break;
  }

  // Sørg for minimum 1 dag intervall
  intervalDays = Math.max(1, intervalDays);

  const now = new Date();
  const nextReview = new Date(now.getTime() + intervalDays * 24 * 60 * 60 * 1000);

  return {
    intervalDays,
    easeFactor,
    repetitions,
    nextReviewAt: nextReview.toISOString(),
  };
}

/**
 * Bygger en øktdeck med maks `max` kort.
 * Prioriterer forfalte kort, deretter nye, og shuffler resultatet.
 */
export function buildSessionDeck(
  definitions: FlashcardDefinition[],
  progressMap: Map<string, FlashcardProgress>,
  max: number = 20
): FlashcardDefinition[] {
  const now = new Date();

  // Del opp i forfalte (har progress og forfalt) og nye (ingen progress)
  const due: FlashcardDefinition[] = [];
  const fresh: FlashcardDefinition[] = [];

  for (const def of definitions) {
    const progress = progressMap.get(def.id);
    if (!progress) {
      fresh.push(def);
    } else if (new Date(progress.nextReviewAt) <= now) {
      due.push(def);
    }
  }

  // Fyll deck: forfalte først, deretter nye
  const deck: FlashcardDefinition[] = [];

  // Shuffle forfalte
  const shuffledDue = shuffleArray(due);
  for (const card of shuffledDue) {
    if (deck.length >= max) break;
    deck.push(card);
  }

  // Fyll med nye
  const shuffledFresh = shuffleArray(fresh);
  for (const card of shuffledFresh) {
    if (deck.length >= max) break;
    deck.push(card);
  }

  // Shuffle hele decket
  return shuffleArray(deck);
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
