/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomistyring (VG2)
 *
 * Utvidet fra 10 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { OKONOMISTYRING_DEL1_CHAPTERS } from './textbook-content-okonomistyring-del1';
import { OKONOMISTYRING_DEL2_CHAPTERS } from './textbook-content-okonomistyring-del2';
import { OKONOMISTYRING_DEL3_CHAPTERS } from './textbook-content-okonomistyring-del3';
import { OKONOMISTYRING_DEL4_CHAPTERS } from './textbook-content-okonomistyring-del4';
import { OKONOMISTYRING_DEL5_CHAPTERS } from './textbook-content-okonomistyring-del5';
import { OKONOMISTYRING_DEL6_CHAPTERS } from './textbook-content-okonomistyring-del6';
import { OKONOMISTYRING_DEL7_CHAPTERS } from './textbook-content-okonomistyring-del7';
import { OKONOMISTYRING_DEL8_CHAPTERS } from './textbook-content-okonomistyring-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const OKONOMISTYRING_CHAPTERS: TextbookChapter[] = [
  ...OKONOMISTYRING_DEL1_CHAPTERS,
  ...OKONOMISTYRING_DEL2_CHAPTERS,
  ...OKONOMISTYRING_DEL3_CHAPTERS,
  ...OKONOMISTYRING_DEL4_CHAPTERS,
  ...OKONOMISTYRING_DEL5_CHAPTERS,
  ...OKONOMISTYRING_DEL6_CHAPTERS,
  ...OKONOMISTYRING_DEL7_CHAPTERS,
  ...OKONOMISTYRING_DEL8_CHAPTERS,
];

export function getOkonomistyringChapter(chapterId: string): TextbookChapter | undefined {
  return OKONOMISTYRING_CHAPTERS.find(chapter => chapter.id === chapterId);
}
