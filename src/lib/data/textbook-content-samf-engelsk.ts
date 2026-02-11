/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Samfunnsfaglig engelsk (VG2/VG3)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { SAMF_ENGELSK_DEL1_CHAPTERS } from './textbook-content-samf-engelsk-del1';
import { SAMF_ENGELSK_DEL2_CHAPTERS } from './textbook-content-samf-engelsk-del2';
import { SAMF_ENGELSK_DEL3_CHAPTERS } from './textbook-content-samf-engelsk-del3';
import { SAMF_ENGELSK_DEL4_CHAPTERS } from './textbook-content-samf-engelsk-del4';
import { SAMF_ENGELSK_DEL5_CHAPTERS } from './textbook-content-samf-engelsk-del5';
import { SAMF_ENGELSK_DEL6_CHAPTERS } from './textbook-content-samf-engelsk-del6';
import { SAMF_ENGELSK_DEL7_CHAPTERS } from './textbook-content-samf-engelsk-del7';
import { SAMF_ENGELSK_DEL8_CHAPTERS } from './textbook-content-samf-engelsk-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const SAMF_ENGELSK_CHAPTERS: TextbookChapter[] = [
  ...SAMF_ENGELSK_DEL1_CHAPTERS,
  ...SAMF_ENGELSK_DEL2_CHAPTERS,
  ...SAMF_ENGELSK_DEL3_CHAPTERS,
  ...SAMF_ENGELSK_DEL4_CHAPTERS,
  ...SAMF_ENGELSK_DEL5_CHAPTERS,
  ...SAMF_ENGELSK_DEL6_CHAPTERS,
  ...SAMF_ENGELSK_DEL7_CHAPTERS,
  ...SAMF_ENGELSK_DEL8_CHAPTERS,
];

export function getSamfEngelskChapter(chapterId: string): TextbookChapter | undefined {
  return SAMF_ENGELSK_CHAPTERS.find(chapter => chapter.id === chapterId);
}
