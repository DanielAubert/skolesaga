/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 3 (VG3)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { KOMKULT3_DEL1_CHAPTERS } from './textbook-content-komkult-3-del1';
import { KOMKULT3_DEL2_CHAPTERS } from './textbook-content-komkult-3-del2';
import { KOMKULT3_DEL3_CHAPTERS } from './textbook-content-komkult-3-del3';
import { KOMKULT3_DEL4_CHAPTERS } from './textbook-content-komkult-3-del4';
import { KOMKULT3_DEL5_CHAPTERS } from './textbook-content-komkult-3-del5';
import { KOMKULT3_DEL6_CHAPTERS } from './textbook-content-komkult-3-del6';
import { KOMKULT3_DEL7_CHAPTERS } from './textbook-content-komkult-3-del7';
import { KOMKULT3_DEL8_CHAPTERS } from './textbook-content-komkult-3-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const KOMKULT3_CHAPTERS: TextbookChapter[] = [
  ...KOMKULT3_DEL1_CHAPTERS,
  ...KOMKULT3_DEL2_CHAPTERS,
  ...KOMKULT3_DEL3_CHAPTERS,
  ...KOMKULT3_DEL4_CHAPTERS,
  ...KOMKULT3_DEL5_CHAPTERS,
  ...KOMKULT3_DEL6_CHAPTERS,
  ...KOMKULT3_DEL7_CHAPTERS,
  ...KOMKULT3_DEL8_CHAPTERS,
];

export function getKomkult3Chapter(chapterId: string): TextbookChapter | undefined {
  return KOMKULT3_CHAPTERS.find(chapter => chapter.id === chapterId);
}
