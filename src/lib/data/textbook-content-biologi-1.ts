/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2
 *
 * Denne filen samler alle delkapitler fra separate filer.
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer delkapitler fra separate filer
import { BIOLOGI_1_DEL1_CHAPTERS } from './textbook-content-biologi-1-del1';
import { BIOLOGI_1_DEL2_CHAPTERS } from './textbook-content-biologi-1-del2';
import { BIOLOGI_1_DEL3_CHAPTERS } from './textbook-content-biologi-1-del3';
import { BIOLOGI_1_DEL4_CHAPTERS } from './textbook-content-biologi-1-del4';
import { BIOLOGI_1_DEL5_CHAPTERS } from './textbook-content-biologi-1-del5';
import { BIOLOGI_1_DEL6_CHAPTERS } from './textbook-content-biologi-1-del6';
import { BIOLOGI_1_DEL7_CHAPTERS } from './textbook-content-biologi-1-del7';
import { BIOLOGI_1_DEL8_CHAPTERS } from './textbook-content-biologi-1-del8';
import { BIOLOGI_1_DEL9_CHAPTERS } from './textbook-content-biologi-1-del9';
import { BIOLOGI_1_DEL10_CHAPTERS } from './textbook-content-biologi-1-del10';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const BIOLOGI_1_CHAPTERS: TextbookChapter[] = [
  // Kapittel 1: Cellebiologi (1.1-1.6)
  ...BIOLOGI_1_DEL1_CHAPTERS,
  // Kapittel 2: Energi i celler (2.1-2.5)
  ...BIOLOGI_1_DEL2_CHAPTERS,
  // Kapittel 3: Anatomi og fysiologi (3.1-3.5)
  ...BIOLOGI_1_DEL3_CHAPTERS,
  // Kapittel 4: Celledeling (4.1-4.4)
  ...BIOLOGI_1_DEL4_CHAPTERS,
  // Kapittel 5: Homeostase og regulering (5.1-5.5)
  ...BIOLOGI_1_DEL5_CHAPTERS,
  // Kapittel 6: Mikroorganismer og smittevern (6.1-6.5)
  ...BIOLOGI_1_DEL6_CHAPTERS,
  // Kapittel 7: Økologi (7.1-7.5)
  ...BIOLOGI_1_DEL7_CHAPTERS,
  // Kapittel 8: Biodiversitet (8.1-8.5)
  ...BIOLOGI_1_DEL8_CHAPTERS,
  // Kapittel 9: Vitenskapelig metode (9.1-9.5)
  ...BIOLOGI_1_DEL9_CHAPTERS,
  // Kapittel 10: Kropp og helse (10.1-10.5)
  ...BIOLOGI_1_DEL10_CHAPTERS,
];

export function getBiologi1Chapter(chapterId: string): TextbookChapter | undefined {
  return BIOLOGI_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
