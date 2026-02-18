/* eslint-disable */
// @ts-nocheck
/**
 * Fransk nivå 1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 1
 * Grunnleggende fransk for nybegynnere
 *
 * Innholdet er delt opp i 6 filer:
 * - textbook-content-fransk-1-kap1-3.ts (Hilsener, Tall, Familie)
 * - textbook-content-fransk-1-kap4-6.ts (Tid, Mat, Hjem)
 * - textbook-content-fransk-1-kap7-8.ts (Klær, Skole)
 * - textbook-content-fransk-1-kap9-10.ts (Reise, Grammatikk)
 * - textbook-content-fransk-1-kap11-13.ts (Frankofoni, Kultur, Autentiske tekster)
 * - textbook-content-fransk-1-kap14-16.ts (Muntlig, Skriftlig, Grammatikk og strategier)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import kapitler fra separate filer
import { FRANSK_1_CHAPTERS_1_3 } from './textbook-content-fransk-1-kap1-3';
import { FRANSK_1_CHAPTERS_4_6 } from './textbook-content-fransk-1-kap4-6';
import { FRANSK_1_CHAPTERS_7_8 } from './textbook-content-fransk-1-kap7-8';
import { FRANSK_1_CHAPTERS_9_10 } from './textbook-content-fransk-1-kap9-10';
import { FRANSK_1_CHAPTERS_11_13 } from './textbook-content-fransk-1-kap11-13';
import { FRANSK_1_CHAPTERS_14_16 } from './textbook-content-fransk-1-kap14-16';

// Re-eksporter individuelle kapitler for bakoverkompatibilitet
export {
  CHAPTER_FRANSK_1_1_1,
  CHAPTER_FRANSK_1_1_2,
  CHAPTER_FRANSK_1_1_3,
  CHAPTER_FRANSK_1_1_4,
  CHAPTER_FRANSK_1_2_1,
  CHAPTER_FRANSK_1_2_2,
  CHAPTER_FRANSK_1_2_3,
  CHAPTER_FRANSK_1_2_4,
  CHAPTER_FRANSK_1_3_1,
  CHAPTER_FRANSK_1_3_2,
  CHAPTER_FRANSK_1_3_3,
  CHAPTER_FRANSK_1_3_4,
} from './textbook-content-fransk-1-kap1-3';

export {
  CHAPTER_FRANSK_1_4_1,
  CHAPTER_FRANSK_1_4_2,
  CHAPTER_FRANSK_1_4_3,
  CHAPTER_FRANSK_1_4_4,
  CHAPTER_FRANSK_1_5_1,
  CHAPTER_FRANSK_1_5_2,
  CHAPTER_FRANSK_1_5_3,
  CHAPTER_FRANSK_1_5_4,
  CHAPTER_FRANSK_1_6_1,
  CHAPTER_FRANSK_1_6_2,
  CHAPTER_FRANSK_1_6_3,
  CHAPTER_FRANSK_1_6_4,
} from './textbook-content-fransk-1-kap4-6';

export {
  CHAPTER_FRANSK_1_7_1,
  CHAPTER_FRANSK_1_7_2,
  CHAPTER_FRANSK_1_7_3,
  CHAPTER_FRANSK_1_7_4,
  CHAPTER_FRANSK_1_8_1,
  CHAPTER_FRANSK_1_8_2,
  CHAPTER_FRANSK_1_8_3,
  CHAPTER_FRANSK_1_8_4,
} from './textbook-content-fransk-1-kap7-8';

export {
  CHAPTER_FRANSK_1_9_1,
  CHAPTER_FRANSK_1_9_2,
  CHAPTER_FRANSK_1_9_3,
  CHAPTER_FRANSK_1_9_4,
  CHAPTER_FRANSK_1_10_1,
  CHAPTER_FRANSK_1_10_2,
  CHAPTER_FRANSK_1_10_3,
  CHAPTER_FRANSK_1_10_4,
} from './textbook-content-fransk-1-kap9-10';

export {
  CHAPTER_FRANSK_1_11_1,
  CHAPTER_FRANSK_1_11_2,
  CHAPTER_FRANSK_1_11_3,
  CHAPTER_FRANSK_1_11_4,
  CHAPTER_FRANSK_1_12_1,
  CHAPTER_FRANSK_1_12_2,
  CHAPTER_FRANSK_1_12_3,
  CHAPTER_FRANSK_1_12_4,
  CHAPTER_FRANSK_1_13_1,
  CHAPTER_FRANSK_1_13_2,
  CHAPTER_FRANSK_1_13_3,
  CHAPTER_FRANSK_1_13_4,
} from './textbook-content-fransk-1-kap11-13';

export {
  CHAPTER_FRANSK_1_14_1,
  CHAPTER_FRANSK_1_14_2,
  CHAPTER_FRANSK_1_14_3,
  CHAPTER_FRANSK_1_14_4,
  CHAPTER_FRANSK_1_15_1,
  CHAPTER_FRANSK_1_15_2,
  CHAPTER_FRANSK_1_15_3,
  CHAPTER_FRANSK_1_15_4,
  CHAPTER_FRANSK_1_16_1,
  CHAPTER_FRANSK_1_16_2,
  CHAPTER_FRANSK_1_16_3,
  CHAPTER_FRANSK_1_16_4,
} from './textbook-content-fransk-1-kap14-16';

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const FRANSK_1_CHAPTERS: TextbookChapter[] = [
  ...FRANSK_1_CHAPTERS_1_3,
  ...FRANSK_1_CHAPTERS_4_6,
  ...FRANSK_1_CHAPTERS_7_8,
  ...FRANSK_1_CHAPTERS_9_10,
  ...FRANSK_1_CHAPTERS_11_13,
  ...FRANSK_1_CHAPTERS_14_16,
];
