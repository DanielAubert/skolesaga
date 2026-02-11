/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 1 (VG2)
 *
 * Utvidet fra 8 hovedkapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { KOMKULT_1_DEL1_CHAPTERS } from './textbook-content-komkult-1-del1';
import { KOMKULT_1_DEL2_CHAPTERS } from './textbook-content-komkult-1-del2';
import { KOMKULT_1_DEL3_CHAPTERS } from './textbook-content-komkult-1-del3';
import { KOMKULT_1_DEL4_CHAPTERS } from './textbook-content-komkult-1-del4';
import { KOMKULT_1_DEL5_CHAPTERS } from './textbook-content-komkult-1-del5';
import { KOMKULT_1_DEL6_CHAPTERS } from './textbook-content-komkult-1-del6';
import { KOMKULT_1_DEL7_CHAPTERS } from './textbook-content-komkult-1-del7';
import { KOMKULT_1_DEL8_CHAPTERS } from './textbook-content-komkult-1-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const ALL_KOMKULT_1_CHAPTERS: TextbookChapter[] = [
  ...KOMKULT_1_DEL1_CHAPTERS,
  ...KOMKULT_1_DEL2_CHAPTERS,
  ...KOMKULT_1_DEL3_CHAPTERS,
  ...KOMKULT_1_DEL4_CHAPTERS,
  ...KOMKULT_1_DEL5_CHAPTERS,
  ...KOMKULT_1_DEL6_CHAPTERS,
  ...KOMKULT_1_DEL7_CHAPTERS,
  ...KOMKULT_1_DEL8_CHAPTERS,
];

export function getKomkult1Chapter(chapterId: string): TextbookChapter | undefined {
  return ALL_KOMKULT_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
