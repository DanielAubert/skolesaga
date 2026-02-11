/**
 * Tekstbok kapitler for r2
 * Importerer fra per-kapittel filer og re-eksporterer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Re-eksporter individuelle kapitler
export {
  CHAPTER_R2_1_1,
  CHAPTER_R2_1_2,
  CHAPTER_R2_1_3,
  CHAPTER_R2_1_4,
  CHAPTER_R2_1_5,
  CHAPTER_R2_1_6,
  CHAPTER_R2_1_7,
} from './textbook-content-r2-kap1';

export {
  CHAPTER_R2_2_1,
  CHAPTER_R2_2_2,
  CHAPTER_R2_2_3,
  CHAPTER_R2_2_4,
  CHAPTER_R2_2_5,
  CHAPTER_R2_2_6,
  CHAPTER_R2_2_7,
} from './textbook-content-r2-kap2';

export {
  CHAPTER_R2_3_1,
  CHAPTER_R2_3_2,
  CHAPTER_R2_3_3,
  CHAPTER_R2_3_4,
  CHAPTER_R2_3_5,
  CHAPTER_R2_3_6,
  CHAPTER_R2_3_7,
} from './textbook-content-r2-kap3';

export {
  CHAPTER_R2_4_1,
  CHAPTER_R2_4_2,
  CHAPTER_R2_4_3,
  CHAPTER_R2_4_4,
  CHAPTER_R2_4_5,
  CHAPTER_R2_4_6,
  CHAPTER_R2_4_7,
  CHAPTER_R2_4_8,
  CHAPTER_R2_4_9,
} from './textbook-content-r2-kap4';

export {
  CHAPTER_R2_5_1,
  CHAPTER_R2_5_2,
  CHAPTER_R2_5_3,
  CHAPTER_R2_5_4,
  CHAPTER_R2_5_5,
  CHAPTER_R2_5_6,
  CHAPTER_R2_5_7,
  CHAPTER_R2_5_8,
} from './textbook-content-r2-kap5';

export {
  CHAPTER_R2_6_1,
  CHAPTER_R2_6_2,
  CHAPTER_R2_6_3,
  CHAPTER_R2_6_4,
  CHAPTER_R2_6_5,
  CHAPTER_R2_6_6,
} from './textbook-content-r2-kap6';

// Importer for bruk i CHAPTERS_R2 record
import {
  CHAPTER_R2_1_1,
  CHAPTER_R2_1_2,
  CHAPTER_R2_1_3,
  CHAPTER_R2_1_4,
  CHAPTER_R2_1_5,
  CHAPTER_R2_1_6,
  CHAPTER_R2_1_7,
} from './textbook-content-r2-kap1';

import {
  CHAPTER_R2_2_1,
  CHAPTER_R2_2_2,
  CHAPTER_R2_2_3,
  CHAPTER_R2_2_4,
  CHAPTER_R2_2_5,
  CHAPTER_R2_2_6,
  CHAPTER_R2_2_7,
} from './textbook-content-r2-kap2';

import {
  CHAPTER_R2_3_1,
  CHAPTER_R2_3_2,
  CHAPTER_R2_3_3,
  CHAPTER_R2_3_4,
  CHAPTER_R2_3_5,
  CHAPTER_R2_3_6,
  CHAPTER_R2_3_7,
} from './textbook-content-r2-kap3';

import {
  CHAPTER_R2_4_1,
  CHAPTER_R2_4_2,
  CHAPTER_R2_4_3,
  CHAPTER_R2_4_4,
  CHAPTER_R2_4_5,
  CHAPTER_R2_4_6,
  CHAPTER_R2_4_7,
  CHAPTER_R2_4_8,
  CHAPTER_R2_4_9,
} from './textbook-content-r2-kap4';

import {
  CHAPTER_R2_5_1,
  CHAPTER_R2_5_2,
  CHAPTER_R2_5_3,
  CHAPTER_R2_5_4,
  CHAPTER_R2_5_5,
  CHAPTER_R2_5_6,
  CHAPTER_R2_5_7,
  CHAPTER_R2_5_8,
} from './textbook-content-r2-kap5';

import {
  CHAPTER_R2_6_1,
  CHAPTER_R2_6_2,
  CHAPTER_R2_6_3,
  CHAPTER_R2_6_4,
  CHAPTER_R2_6_5,
  CHAPTER_R2_6_6,
} from './textbook-content-r2-kap6';

// Eksporter alle kapitler som et objekt
export const CHAPTERS_R2: Record<string, TextbookChapter> = {
  'r2-1-1': CHAPTER_R2_1_1,
  'r2-1-2': CHAPTER_R2_1_2,
  'r2-1-3': CHAPTER_R2_1_3,
  'r2-1-4': CHAPTER_R2_1_4,
  'r2-1-5': CHAPTER_R2_1_5,
  'r2-1-6': CHAPTER_R2_1_6,
  'r2-1-7': CHAPTER_R2_1_7,
  'r2-2-1': CHAPTER_R2_2_1,
  'r2-2-2': CHAPTER_R2_2_2,
  'r2-2-3': CHAPTER_R2_2_3,
  'r2-2-4': CHAPTER_R2_2_4,
  'r2-2-5': CHAPTER_R2_2_5,
  'r2-2-6': CHAPTER_R2_2_6,
  'r2-2-7': CHAPTER_R2_2_7,
  'r2-3-1': CHAPTER_R2_3_1,
  'r2-3-2': CHAPTER_R2_3_2,
  'r2-3-3': CHAPTER_R2_3_3,
  'r2-3-4': CHAPTER_R2_3_4,
  'r2-3-5': CHAPTER_R2_3_5,
  'r2-3-6': CHAPTER_R2_3_6,
  'r2-3-7': CHAPTER_R2_3_7,
  'r2-4-1': CHAPTER_R2_4_1,
  'r2-4-2': CHAPTER_R2_4_2,
  'r2-4-3': CHAPTER_R2_4_3,
  'r2-4-4': CHAPTER_R2_4_4,
  'r2-4-5': CHAPTER_R2_4_5,
  'r2-4-6': CHAPTER_R2_4_6,
  'r2-4-7': CHAPTER_R2_4_7,
  'r2-4-8': CHAPTER_R2_4_8,
  'r2-4-9': CHAPTER_R2_4_9,
  'r2-5-1': CHAPTER_R2_5_1,
  'r2-5-2': CHAPTER_R2_5_2,
  'r2-5-3': CHAPTER_R2_5_3,
  'r2-5-4': CHAPTER_R2_5_4,
  'r2-5-5': CHAPTER_R2_5_5,
  'r2-5-6': CHAPTER_R2_5_6,
  'r2-5-7': CHAPTER_R2_5_7,
  'r2-5-8': CHAPTER_R2_5_8,
  'r2-6-1': CHAPTER_R2_6_1,
  'r2-6-2': CHAPTER_R2_6_2,
  'r2-6-3': CHAPTER_R2_6_3,
  'r2-6-4': CHAPTER_R2_6_4,
  'r2-6-5': CHAPTER_R2_6_5,
  'r2-6-6': CHAPTER_R2_6_6,
};
