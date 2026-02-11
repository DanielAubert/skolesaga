/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Regnskap og revisjon (VG3)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { REGNSKAP_REVISJON_DEL1_CHAPTERS } from './textbook-content-regnskap-revisjon-del1';
import { REGNSKAP_REVISJON_DEL2_CHAPTERS } from './textbook-content-regnskap-revisjon-del2';
import { REGNSKAP_REVISJON_DEL3_CHAPTERS } from './textbook-content-regnskap-revisjon-del3';
import { REGNSKAP_REVISJON_DEL4_CHAPTERS } from './textbook-content-regnskap-revisjon-del4';
import { REGNSKAP_REVISJON_DEL5_CHAPTERS } from './textbook-content-regnskap-revisjon-del5';
import { REGNSKAP_REVISJON_DEL6_CHAPTERS } from './textbook-content-regnskap-revisjon-del6';
import { REGNSKAP_REVISJON_DEL7_CHAPTERS } from './textbook-content-regnskap-revisjon-del7';
import { REGNSKAP_REVISJON_DEL8_CHAPTERS } from './textbook-content-regnskap-revisjon-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const REGNSKAP_REVISJON_CHAPTERS: TextbookChapter[] = [
  ...REGNSKAP_REVISJON_DEL1_CHAPTERS,
  ...REGNSKAP_REVISJON_DEL2_CHAPTERS,
  ...REGNSKAP_REVISJON_DEL3_CHAPTERS,
  ...REGNSKAP_REVISJON_DEL4_CHAPTERS,
  ...REGNSKAP_REVISJON_DEL5_CHAPTERS,
  ...REGNSKAP_REVISJON_DEL6_CHAPTERS,
  ...REGNSKAP_REVISJON_DEL7_CHAPTERS,
  ...REGNSKAP_REVISJON_DEL8_CHAPTERS,
];

export function getRegnskapRevisjonChapter(chapterId: string): TextbookChapter | undefined {
  return REGNSKAP_REVISJON_CHAPTERS.find(chapter => chapter.id === chapterId);
}
