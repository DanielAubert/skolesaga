/* eslint-disable */
// @ts-nocheck
/**
 * Fransk nivå 3 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 3
 * Avansert fransk med litteratur, kultur og samfunn
 *
 * Innholdet er delt opp i 4 filer:
 * - textbook-content-fransk-3-kap1-3.ts (Avanserte tider, Subjonctif/Passiv, Diskurs/Argumentasjon)
 * - textbook-content-fransk-3-kap4-6.ts (Stilistikk/Retorikk, Litteratur, Film/Kunst)
 * - textbook-content-fransk-3-kap7-8.ts (Politikk/Samfunn, Økonomi/Arbeidsliv)
 * - textbook-content-fransk-3-kap9-10.ts (Frankofoni, Eksamensforberedelse)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import kapitler fra separate filer
import { FRANSK_3_CHAPTERS_1_3 } from './textbook-content-fransk-3-kap1-3';
import { FRANSK_3_CHAPTERS_4_6 } from './textbook-content-fransk-3-kap4-6';
import { FRANSK_3_CHAPTERS_7_8 } from './textbook-content-fransk-3-kap7-8';
import { FRANSK_3_CHAPTERS_9_10 } from './textbook-content-fransk-3-kap9-10';

// Re-eksporter individuelle kapitler for bakoverkompatibilitet
export {
  CHAPTER_FRANSK_3_1_1,
  CHAPTER_FRANSK_3_1_2,
  CHAPTER_FRANSK_3_1_3,
  CHAPTER_FRANSK_3_1_4,
  CHAPTER_FRANSK_3_2_1,
  CHAPTER_FRANSK_3_2_2,
  CHAPTER_FRANSK_3_2_3,
  CHAPTER_FRANSK_3_2_4,
  CHAPTER_FRANSK_3_3_1,
  CHAPTER_FRANSK_3_3_2,
  CHAPTER_FRANSK_3_3_3,
  CHAPTER_FRANSK_3_3_4,
} from './textbook-content-fransk-3-kap1-3';

export {
  CHAPTER_FRANSK_3_4_1,
  CHAPTER_FRANSK_3_4_2,
  CHAPTER_FRANSK_3_4_3,
  CHAPTER_FRANSK_3_4_4,
  CHAPTER_FRANSK_3_5_1,
  CHAPTER_FRANSK_3_5_2,
  CHAPTER_FRANSK_3_5_3,
  CHAPTER_FRANSK_3_5_4,
  CHAPTER_FRANSK_3_6_1,
  CHAPTER_FRANSK_3_6_2,
  CHAPTER_FRANSK_3_6_3,
  CHAPTER_FRANSK_3_6_4,
} from './textbook-content-fransk-3-kap4-6';

export {
  CHAPTER_FRANSK_3_7_1,
  CHAPTER_FRANSK_3_7_2,
  CHAPTER_FRANSK_3_7_3,
  CHAPTER_FRANSK_3_7_4,
  CHAPTER_FRANSK_3_8_1,
  CHAPTER_FRANSK_3_8_2,
  CHAPTER_FRANSK_3_8_3,
  CHAPTER_FRANSK_3_8_4,
} from './textbook-content-fransk-3-kap7-8';

export {
  CHAPTER_FRANSK_3_9_1,
  CHAPTER_FRANSK_3_9_2,
  CHAPTER_FRANSK_3_9_3,
  CHAPTER_FRANSK_3_9_4,
  CHAPTER_FRANSK_3_10_1,
  CHAPTER_FRANSK_3_10_2,
  CHAPTER_FRANSK_3_10_3,
  CHAPTER_FRANSK_3_10_4,
} from './textbook-content-fransk-3-kap9-10';

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const FRANSK_3_CHAPTERS: TextbookChapter[] = [
  ...FRANSK_3_CHAPTERS_1_3,
  ...FRANSK_3_CHAPTERS_4_6,
  ...FRANSK_3_CHAPTERS_7_8,
  ...FRANSK_3_CHAPTERS_9_10,
];
