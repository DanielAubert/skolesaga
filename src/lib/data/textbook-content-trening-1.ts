/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 1 (VG2)
 *
 * Utvidet fra 8 hovedkapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { TRENING_1_DEL1_CHAPTERS } from './textbook-content-trening-1-del1';
import { TRENING_1_DEL2_CHAPTERS } from './textbook-content-trening-1-del2';
import { TRENING_1_DEL3_CHAPTERS } from './textbook-content-trening-1-del3';
import { TRENING_1_DEL4_CHAPTERS } from './textbook-content-trening-1-del4';
import { TRENING_1_DEL5_CHAPTERS } from './textbook-content-trening-1-del5';
import { TRENING_1_DEL6_CHAPTERS } from './textbook-content-trening-1-del6';
import { TRENING_1_DEL7_CHAPTERS } from './textbook-content-trening-1-del7';
import { TRENING_1_DEL8_CHAPTERS } from './textbook-content-trening-1-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const TRENING_1_CHAPTERS: TextbookChapter[] = [
  ...TRENING_1_DEL1_CHAPTERS,
  ...TRENING_1_DEL2_CHAPTERS,
  ...TRENING_1_DEL3_CHAPTERS,
  ...TRENING_1_DEL4_CHAPTERS,
  ...TRENING_1_DEL5_CHAPTERS,
  ...TRENING_1_DEL6_CHAPTERS,
  ...TRENING_1_DEL7_CHAPTERS,
  ...TRENING_1_DEL8_CHAPTERS,
];

export function getTrening1Chapter(chapterId: string): TextbookChapter | undefined {
  return TRENING_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
