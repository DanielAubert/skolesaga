/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Internasjonal engelsk (VG2/VG3)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { INT_ENGELSK_DEL1_CHAPTERS } from './textbook-content-int-engelsk-del1';
import { INT_ENGELSK_DEL2_CHAPTERS } from './textbook-content-int-engelsk-del2';
import { INT_ENGELSK_DEL3_CHAPTERS } from './textbook-content-int-engelsk-del3';
import { INT_ENGELSK_DEL4_CHAPTERS } from './textbook-content-int-engelsk-del4';
import { INT_ENGELSK_DEL5_CHAPTERS } from './textbook-content-int-engelsk-del5';
import { INT_ENGELSK_DEL6_CHAPTERS } from './textbook-content-int-engelsk-del6';
import { INT_ENGELSK_DEL7_CHAPTERS } from './textbook-content-int-engelsk-del7';
import { INT_ENGELSK_DEL8_CHAPTERS } from './textbook-content-int-engelsk-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const INT_ENGELSK_CHAPTERS: TextbookChapter[] = [
  ...INT_ENGELSK_DEL1_CHAPTERS,
  ...INT_ENGELSK_DEL2_CHAPTERS,
  ...INT_ENGELSK_DEL3_CHAPTERS,
  ...INT_ENGELSK_DEL4_CHAPTERS,
  ...INT_ENGELSK_DEL5_CHAPTERS,
  ...INT_ENGELSK_DEL6_CHAPTERS,
  ...INT_ENGELSK_DEL7_CHAPTERS,
  ...INT_ENGELSK_DEL8_CHAPTERS,
];

export function getIntEngelskChapter(chapterId: string): TextbookChapter | undefined {
  return INT_ENGELSK_CHAPTERS.find(chapter => chapter.id === chapterId);
}
