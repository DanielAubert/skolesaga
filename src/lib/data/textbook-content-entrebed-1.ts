/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Entreprenørskap og bedriftsutvikling 1 (VG2)
 *
 * Utvidet fra 8 hovedkapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { ENTREBED_1_DEL1_CHAPTERS } from './textbook-content-entrebed-1-del1';
import { ENTREBED_1_DEL2_CHAPTERS } from './textbook-content-entrebed-1-del2';
import { ENTREBED_1_DEL3_CHAPTERS } from './textbook-content-entrebed-1-del3';
import { ENTREBED_1_DEL4_CHAPTERS } from './textbook-content-entrebed-1-del4';
import { ENTREBED_1_DEL5_CHAPTERS } from './textbook-content-entrebed-1-del5';
import { ENTREBED_1_DEL6_CHAPTERS } from './textbook-content-entrebed-1-del6';
import { ENTREBED_1_DEL7_CHAPTERS } from './textbook-content-entrebed-1-del7';
import { ENTREBED_1_DEL8_CHAPTERS } from './textbook-content-entrebed-1-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const ENTREBED_1_CHAPTERS: TextbookChapter[] = [
  ...ENTREBED_1_DEL1_CHAPTERS,
  ...ENTREBED_1_DEL2_CHAPTERS,
  ...ENTREBED_1_DEL3_CHAPTERS,
  ...ENTREBED_1_DEL4_CHAPTERS,
  ...ENTREBED_1_DEL5_CHAPTERS,
  ...ENTREBED_1_DEL6_CHAPTERS,
  ...ENTREBED_1_DEL7_CHAPTERS,
  ...ENTREBED_1_DEL8_CHAPTERS,
];

export function getEntrebed1Chapter(chapterId: string): TextbookChapter | undefined {
  return ENTREBED_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
