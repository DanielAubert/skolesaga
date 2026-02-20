/* eslint-disable */
// @ts-nocheck
/**
 * Fransk nivå 2 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 2
 * Videregående fransk med utvidet grammatikk og kultur
 *
 * Innholdet er delt opp i 6 filer:
 * - textbook-content-fransk-2-kap1-3.ts (Fortidsformer, Futur/Kondisjonalis, Pronomen)
 * - textbook-content-fransk-2-kap4-6.ts (Reise/Kultur, Helse, Subjonctif)
 * - textbook-content-fransk-2-kap7-8.ts (Litteratur/Media, Samfunn)
 * - textbook-content-fransk-2-kap9-10.ts (Skriving/Kommunikasjon, Grammatikkrepetisjon)
 * - textbook-content-fransk-2-kap11-13.ts (Frankofoni, Teknologi, Autentiske tekster)
 * - textbook-content-fransk-2-kap14-16.ts (Historie/Politikk, Muntlig kommunikasjon, Eksamensforberedelse)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import kapitler fra separate filer
import { FRANSK_2_CHAPTERS_1_3 } from './textbook-content-fransk-2-kap1-3';
import { FRANSK_2_CHAPTERS_4_6 } from './textbook-content-fransk-2-kap4-6';
import { FRANSK_2_CHAPTERS_7_8 } from './textbook-content-fransk-2-kap7-8';
import { FRANSK_2_CHAPTERS_9_10 } from './textbook-content-fransk-2-kap9-10';
import { FRANSK_2_CHAPTERS_11_13 } from './textbook-content-fransk-2-kap11-13';
import { FRANSK_2_CHAPTERS_14_16 } from './textbook-content-fransk-2-kap14-16';

// Re-eksporter individuelle kapitler for bakoverkompatibilitet
export {
  CHAPTER_FRANSK_2_1_1,
  CHAPTER_FRANSK_2_1_2,
  CHAPTER_FRANSK_2_1_3,
  CHAPTER_FRANSK_2_1_4,
  CHAPTER_FRANSK_2_2_1,
  CHAPTER_FRANSK_2_2_2,
  CHAPTER_FRANSK_2_2_3,
  CHAPTER_FRANSK_2_2_4,
  CHAPTER_FRANSK_2_3_1,
  CHAPTER_FRANSK_2_3_2,
  CHAPTER_FRANSK_2_3_3,
  CHAPTER_FRANSK_2_3_4,
} from './textbook-content-fransk-2-kap1-3';

export {
  CHAPTER_FRANSK_2_4_1,
  CHAPTER_FRANSK_2_4_2,
  CHAPTER_FRANSK_2_4_3,
  CHAPTER_FRANSK_2_4_4,
  CHAPTER_FRANSK_2_5_1,
  CHAPTER_FRANSK_2_5_2,
  CHAPTER_FRANSK_2_5_3,
  CHAPTER_FRANSK_2_5_4,
  CHAPTER_FRANSK_2_6_1,
  CHAPTER_FRANSK_2_6_2,
  CHAPTER_FRANSK_2_6_3,
  CHAPTER_FRANSK_2_6_4,
} from './textbook-content-fransk-2-kap4-6';

export {
  CHAPTER_FRANSK_2_7_1,
  CHAPTER_FRANSK_2_7_2,
  CHAPTER_FRANSK_2_7_3,
  CHAPTER_FRANSK_2_7_4,
  CHAPTER_FRANSK_2_8_1,
  CHAPTER_FRANSK_2_8_2,
  CHAPTER_FRANSK_2_8_3,
  CHAPTER_FRANSK_2_8_4,
} from './textbook-content-fransk-2-kap7-8';

export {
  CHAPTER_FRANSK_2_9_1,
  CHAPTER_FRANSK_2_9_2,
  CHAPTER_FRANSK_2_9_3,
  CHAPTER_FRANSK_2_9_4,
  CHAPTER_FRANSK_2_10_1,
  CHAPTER_FRANSK_2_10_2,
  CHAPTER_FRANSK_2_10_3,
  CHAPTER_FRANSK_2_10_4,
} from './textbook-content-fransk-2-kap9-10';

export {
  CHAPTER_FRANSK_2_11_1,
  CHAPTER_FRANSK_2_11_2,
  CHAPTER_FRANSK_2_11_3,
  CHAPTER_FRANSK_2_11_4,
  CHAPTER_FRANSK_2_12_1,
  CHAPTER_FRANSK_2_12_2,
  CHAPTER_FRANSK_2_12_3,
  CHAPTER_FRANSK_2_12_4,
  CHAPTER_FRANSK_2_13_1,
  CHAPTER_FRANSK_2_13_2,
  CHAPTER_FRANSK_2_13_3,
  CHAPTER_FRANSK_2_13_4,
} from './textbook-content-fransk-2-kap11-13';

export {
  CHAPTER_FRANSK_2_14_1,
  CHAPTER_FRANSK_2_14_2,
  CHAPTER_FRANSK_2_14_3,
  CHAPTER_FRANSK_2_14_4,
  CHAPTER_FRANSK_2_15_1,
  CHAPTER_FRANSK_2_15_2,
  CHAPTER_FRANSK_2_15_3,
  CHAPTER_FRANSK_2_15_4,
  CHAPTER_FRANSK_2_16_1,
  CHAPTER_FRANSK_2_16_2,
  CHAPTER_FRANSK_2_16_3,
  CHAPTER_FRANSK_2_16_4,
} from './textbook-content-fransk-2-kap14-16';

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const FRANSK_2_CHAPTERS: TextbookChapter[] = [
  ...FRANSK_2_CHAPTERS_1_3,
  ...FRANSK_2_CHAPTERS_4_6,
  ...FRANSK_2_CHAPTERS_7_8,
  ...FRANSK_2_CHAPTERS_9_10,
  ...FRANSK_2_CHAPTERS_11_13,
  ...FRANSK_2_CHAPTERS_14_16,
];
