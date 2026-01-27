/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 1
 * Grunnleggende spansk for nybegynnere
 *
 * Innholdet er delt opp i 4 filer:
 * - textbook-content-spansk-1-kap1-3.ts (Hilsener, Tall, Familie)
 * - textbook-content-spansk-1-kap4-6.ts (Tid, Mat, Hjem)
 * - textbook-content-spansk-1-kap7-8.ts (Klær, Skole)
 * - textbook-content-spansk-1-kap9-10.ts (Reise, Grammatikk)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import kapitler fra separate filer
import { SPANSK_1_CHAPTERS_1_3 } from './textbook-content-spansk-1-kap1-3';
import { SPANSK_1_CHAPTERS_4_6 } from './textbook-content-spansk-1-kap4-6';
import { SPANSK_1_CHAPTERS_7_8 } from './textbook-content-spansk-1-kap7-8';
import { SPANSK_1_CHAPTERS_9_10 } from './textbook-content-spansk-1-kap9-10';

// Re-eksporter individuelle kapitler for bakoverkompatibilitet
export {
  CHAPTER_SPANSK_1_1_1,
  CHAPTER_SPANSK_1_1_2,
  CHAPTER_SPANSK_1_1_3,
  CHAPTER_SPANSK_1_1_4,
  CHAPTER_SPANSK_1_2_1,
  CHAPTER_SPANSK_1_2_2,
  CHAPTER_SPANSK_1_2_3,
  CHAPTER_SPANSK_1_2_4,
  CHAPTER_SPANSK_1_3_1,
  CHAPTER_SPANSK_1_3_2,
  CHAPTER_SPANSK_1_3_3,
  CHAPTER_SPANSK_1_3_4,
} from './textbook-content-spansk-1-kap1-3';

export {
  CHAPTER_SPANSK_1_4_1,
  CHAPTER_SPANSK_1_4_2,
  CHAPTER_SPANSK_1_4_3,
  CHAPTER_SPANSK_1_4_4,
  CHAPTER_SPANSK_1_5_1,
  CHAPTER_SPANSK_1_5_2,
  CHAPTER_SPANSK_1_5_3,
  CHAPTER_SPANSK_1_5_4,
  CHAPTER_SPANSK_1_6_1,
  CHAPTER_SPANSK_1_6_2,
  CHAPTER_SPANSK_1_6_3,
  CHAPTER_SPANSK_1_6_4,
} from './textbook-content-spansk-1-kap4-6';

export {
  CHAPTER_SPANSK_1_7_1,
  CHAPTER_SPANSK_1_7_2,
  CHAPTER_SPANSK_1_7_3,
  CHAPTER_SPANSK_1_7_4,
  CHAPTER_SPANSK_1_8_1,
  CHAPTER_SPANSK_1_8_2,
  CHAPTER_SPANSK_1_8_3,
  CHAPTER_SPANSK_1_8_4,
} from './textbook-content-spansk-1-kap7-8';

export {
  CHAPTER_SPANSK_1_9_1,
  CHAPTER_SPANSK_1_9_2,
  CHAPTER_SPANSK_1_9_3,
  CHAPTER_SPANSK_1_9_4,
  CHAPTER_SPANSK_1_10_1,
  CHAPTER_SPANSK_1_10_2,
  CHAPTER_SPANSK_1_10_3,
  CHAPTER_SPANSK_1_10_4,
} from './textbook-content-spansk-1-kap9-10';

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const SPANSK_1_CHAPTERS: TextbookChapter[] = [
  ...SPANSK_1_CHAPTERS_1_3,
  ...SPANSK_1_CHAPTERS_4_6,
  ...SPANSK_1_CHAPTERS_7_8,
  ...SPANSK_1_CHAPTERS_9_10,
];
