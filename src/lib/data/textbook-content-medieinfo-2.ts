/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 2 (VG3)
 *
 * Utvidet fra 10 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { MEDIEINFO_2_DEL1_CHAPTERS } from './textbook-content-medieinfo-2-del1';
import { MEDIEINFO_2_DEL2_CHAPTERS } from './textbook-content-medieinfo-2-del2';
import { MEDIEINFO_2_DEL3_CHAPTERS } from './textbook-content-medieinfo-2-del3';
import { MEDIEINFO_2_DEL4_CHAPTERS } from './textbook-content-medieinfo-2-del4';
import { MEDIEINFO_2_DEL5_CHAPTERS } from './textbook-content-medieinfo-2-del5';
import { MEDIEINFO_2_DEL6_CHAPTERS } from './textbook-content-medieinfo-2-del6';
import { MEDIEINFO_2_DEL7_CHAPTERS } from './textbook-content-medieinfo-2-del7';
import { MEDIEINFO_2_DEL8_CHAPTERS } from './textbook-content-medieinfo-2-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const MEDIEINFO_2_CHAPTERS: TextbookChapter[] = [
  ...MEDIEINFO_2_DEL1_CHAPTERS,
  ...MEDIEINFO_2_DEL2_CHAPTERS,
  ...MEDIEINFO_2_DEL3_CHAPTERS,
  ...MEDIEINFO_2_DEL4_CHAPTERS,
  ...MEDIEINFO_2_DEL5_CHAPTERS,
  ...MEDIEINFO_2_DEL6_CHAPTERS,
  ...MEDIEINFO_2_DEL7_CHAPTERS,
  ...MEDIEINFO_2_DEL8_CHAPTERS,
];

export function getMedieinfo2Chapter(chapterId: string): TextbookChapter | undefined {
  return MEDIEINFO_2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
