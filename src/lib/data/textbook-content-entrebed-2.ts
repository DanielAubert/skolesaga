/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Entreprenørskap og bedriftsutvikling 2 (VG3)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { ENTREBED_2_DEL1_CHAPTERS } from './textbook-content-entrebed-2-del1';
import { ENTREBED_2_DEL2_CHAPTERS } from './textbook-content-entrebed-2-del2';
import { ENTREBED_2_DEL3_CHAPTERS } from './textbook-content-entrebed-2-del3';
import { ENTREBED_2_DEL4_CHAPTERS } from './textbook-content-entrebed-2-del4';
import { ENTREBED_2_DEL5_CHAPTERS } from './textbook-content-entrebed-2-del5';
import { ENTREBED_2_DEL6_CHAPTERS } from './textbook-content-entrebed-2-del6';
import { ENTREBED_2_DEL7_CHAPTERS } from './textbook-content-entrebed-2-del7';
import { ENTREBED_2_DEL8_CHAPTERS } from './textbook-content-entrebed-2-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const ENTREBED_2_CHAPTERS: TextbookChapter[] = [
  ...ENTREBED_2_DEL1_CHAPTERS,
  ...ENTREBED_2_DEL2_CHAPTERS,
  ...ENTREBED_2_DEL3_CHAPTERS,
  ...ENTREBED_2_DEL4_CHAPTERS,
  ...ENTREBED_2_DEL5_CHAPTERS,
  ...ENTREBED_2_DEL6_CHAPTERS,
  ...ENTREBED_2_DEL7_CHAPTERS,
  ...ENTREBED_2_DEL8_CHAPTERS,
];

export function getEntrebed2Chapter(chapterId: string): TextbookChapter | undefined {
  return ENTREBED_2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
