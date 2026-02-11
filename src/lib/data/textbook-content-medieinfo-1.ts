/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 1 (VG2)
 *
 * Utvidet fra 10 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { MEDIEINFO_1_DEL1_CHAPTERS } from './textbook-content-medieinfo-1-del1';
import { MEDIEINFO_1_DEL2_CHAPTERS } from './textbook-content-medieinfo-1-del2';
import { MEDIEINFO_1_DEL3_CHAPTERS } from './textbook-content-medieinfo-1-del3';
import { MEDIEINFO_1_DEL4_CHAPTERS } from './textbook-content-medieinfo-1-del4';
import { MEDIEINFO_1_DEL5_CHAPTERS } from './textbook-content-medieinfo-1-del5';
import { MEDIEINFO_1_DEL6_CHAPTERS } from './textbook-content-medieinfo-1-del6';
import { MEDIEINFO_1_DEL7_CHAPTERS } from './textbook-content-medieinfo-1-del7';
import { MEDIEINFO_1_DEL8_CHAPTERS } from './textbook-content-medieinfo-1-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const MEDIEINFO_1_CHAPTERS: TextbookChapter[] = [
  ...MEDIEINFO_1_DEL1_CHAPTERS,
  ...MEDIEINFO_1_DEL2_CHAPTERS,
  ...MEDIEINFO_1_DEL3_CHAPTERS,
  ...MEDIEINFO_1_DEL4_CHAPTERS,
  ...MEDIEINFO_1_DEL5_CHAPTERS,
  ...MEDIEINFO_1_DEL6_CHAPTERS,
  ...MEDIEINFO_1_DEL7_CHAPTERS,
  ...MEDIEINFO_1_DEL8_CHAPTERS,
];

export function getMedieinfo1Chapter(chapterId: string): TextbookChapter | undefined {
  return MEDIEINFO_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
