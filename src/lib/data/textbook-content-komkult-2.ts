/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 2 (VG3)
 *
 * Utvidet fra 10 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { KOMKULT2_DEL1_CHAPTERS } from './textbook-content-komkult-2-del1';
import { KOMKULT2_DEL2_CHAPTERS } from './textbook-content-komkult-2-del2';
import { KOMKULT2_DEL3_CHAPTERS } from './textbook-content-komkult-2-del3';
import { KOMKULT2_DEL4_CHAPTERS } from './textbook-content-komkult-2-del4';
import { KOMKULT2_DEL5_CHAPTERS } from './textbook-content-komkult-2-del5';
import { KOMKULT2_DEL6_CHAPTERS } from './textbook-content-komkult-2-del6';
import { KOMKULT2_DEL7_CHAPTERS } from './textbook-content-komkult-2-del7';
import { KOMKULT2_DEL8_CHAPTERS } from './textbook-content-komkult-2-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const KOMKULT_2_CHAPTERS: TextbookChapter[] = [
  ...KOMKULT2_DEL1_CHAPTERS,
  ...KOMKULT2_DEL2_CHAPTERS,
  ...KOMKULT2_DEL3_CHAPTERS,
  ...KOMKULT2_DEL4_CHAPTERS,
  ...KOMKULT2_DEL5_CHAPTERS,
  ...KOMKULT2_DEL6_CHAPTERS,
  ...KOMKULT2_DEL7_CHAPTERS,
  ...KOMKULT2_DEL8_CHAPTERS,
];

export function getKomkult2Chapter(chapterId: string): TextbookChapter | undefined {
  return KOMKULT_2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
