/* eslint-disable */
// @ts-nocheck
/**
 * Spansk niva 2 - Tekstbokinnhold
 *
 * Dekker LK20 laereplan for fremmedsprak niva 2
 * Videregaende spansk for elever som har fullfort niva 1
 *
 * Innholdet er delt opp i 4 filer:
 * - textbook-content-spansk-2-kap1-3.ts (Fortidsformer, Konjunktiv, Vilkar/Fremtid)
 * - textbook-content-spansk-2-kap4-6.ts (Pronomen, Litteratur, Kultur)
 * - textbook-content-spansk-2-kap7-8.ts (Arbeidsliv, Miljo)
 * - textbook-content-spansk-2-kap9-10.ts (Historie, Kommunikasjon)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import kapitler fra separate filer
import { SPANSK_2_CHAPTERS_1_3 } from './textbook-content-spansk-2-kap1-3';
import { SPANSK_2_CHAPTERS_4_6 } from './textbook-content-spansk-2-kap4-6';
import { SPANSK_2_CHAPTERS_7_8 } from './textbook-content-spansk-2-kap7-8';
import { SPANSK_2_CHAPTERS_9_10 } from './textbook-content-spansk-2-kap9-10';

// Re-eksporter individuelle kapitler for bakoverkompatibilitet
export {
  CHAPTER_SPANSK_2_1_1,
  CHAPTER_SPANSK_2_1_2,
  CHAPTER_SPANSK_2_1_3,
  CHAPTER_SPANSK_2_1_4,
  CHAPTER_SPANSK_2_2_1,
  CHAPTER_SPANSK_2_2_2,
  CHAPTER_SPANSK_2_2_3,
  CHAPTER_SPANSK_2_2_4,
  CHAPTER_SPANSK_2_3_1,
  CHAPTER_SPANSK_2_3_2,
  CHAPTER_SPANSK_2_3_3,
  CHAPTER_SPANSK_2_3_4,
} from './textbook-content-spansk-2-kap1-3';

export {
  CHAPTER_SPANSK_2_4_1,
  CHAPTER_SPANSK_2_4_2,
  CHAPTER_SPANSK_2_4_3,
  CHAPTER_SPANSK_2_4_4,
  CHAPTER_SPANSK_2_5_1,
  CHAPTER_SPANSK_2_5_2,
  CHAPTER_SPANSK_2_5_3,
  CHAPTER_SPANSK_2_5_4,
  CHAPTER_SPANSK_2_6_1,
  CHAPTER_SPANSK_2_6_2,
  CHAPTER_SPANSK_2_6_3,
  CHAPTER_SPANSK_2_6_4,
} from './textbook-content-spansk-2-kap4-6';

export {
  CHAPTER_SPANSK_2_7_1,
  CHAPTER_SPANSK_2_7_2,
  CHAPTER_SPANSK_2_7_3,
  CHAPTER_SPANSK_2_7_4,
  CHAPTER_SPANSK_2_8_1,
  CHAPTER_SPANSK_2_8_2,
  CHAPTER_SPANSK_2_8_3,
  CHAPTER_SPANSK_2_8_4,
} from './textbook-content-spansk-2-kap7-8';

export {
  CHAPTER_SPANSK_2_9_1,
  CHAPTER_SPANSK_2_9_2,
  CHAPTER_SPANSK_2_9_3,
  CHAPTER_SPANSK_2_9_4,
  CHAPTER_SPANSK_2_10_1,
  CHAPTER_SPANSK_2_10_2,
  CHAPTER_SPANSK_2_10_3,
  CHAPTER_SPANSK_2_10_4,
} from './textbook-content-spansk-2-kap9-10';

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const SPANSK_2_CHAPTERS: TextbookChapter[] = [
  ...SPANSK_2_CHAPTERS_1_3,
  ...SPANSK_2_CHAPTERS_4_6,
  ...SPANSK_2_CHAPTERS_7_8,
  ...SPANSK_2_CHAPTERS_9_10,
];
