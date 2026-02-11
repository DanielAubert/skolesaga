/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og ledelse (VG2)
 *
 * Utvidet fra 8 hovedkapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { OKONOMI_LEDELSE_DEL1_CHAPTERS } from './textbook-content-okonomi-ledelse-del1';
import { OKONOMI_LEDELSE_DEL2_CHAPTERS } from './textbook-content-okonomi-ledelse-del2';
import { OKONOMI_LEDELSE_DEL3_CHAPTERS } from './textbook-content-okonomi-ledelse-del3';
import { OKONOMI_LEDELSE_DEL4_CHAPTERS } from './textbook-content-okonomi-ledelse-del4';
import { OKONOMI_LEDELSE_DEL5_CHAPTERS } from './textbook-content-okonomi-ledelse-del5';
import { OKONOMI_LEDELSE_DEL6_CHAPTERS } from './textbook-content-okonomi-ledelse-del6';
import { OKONOMI_LEDELSE_DEL7_CHAPTERS } from './textbook-content-okonomi-ledelse-del7';
import { OKONOMI_LEDELSE_DEL8_CHAPTERS } from './textbook-content-okonomi-ledelse-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const OKONOMI_LEDELSE_CHAPTERS: TextbookChapter[] = [
  ...OKONOMI_LEDELSE_DEL1_CHAPTERS,
  ...OKONOMI_LEDELSE_DEL2_CHAPTERS,
  ...OKONOMI_LEDELSE_DEL3_CHAPTERS,
  ...OKONOMI_LEDELSE_DEL4_CHAPTERS,
  ...OKONOMI_LEDELSE_DEL5_CHAPTERS,
  ...OKONOMI_LEDELSE_DEL6_CHAPTERS,
  ...OKONOMI_LEDELSE_DEL7_CHAPTERS,
  ...OKONOMI_LEDELSE_DEL8_CHAPTERS,
];

export function getOkonomiLedelseChapter(chapterId: string): TextbookChapter | undefined {
  return OKONOMI_LEDELSE_CHAPTERS.find(chapter => chapter.id === chapterId);
}
