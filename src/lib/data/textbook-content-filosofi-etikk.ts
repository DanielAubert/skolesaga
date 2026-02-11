/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Filosofi og etikk (VG2/VG3)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { FILOSOFI_ETIKK_DEL1_CHAPTERS } from './textbook-content-filosofi-etikk-del1';
import { FILOSOFI_ETIKK_DEL2_CHAPTERS } from './textbook-content-filosofi-etikk-del2';
import { FILOSOFI_ETIKK_DEL3_CHAPTERS } from './textbook-content-filosofi-etikk-del3';
import { FILOSOFI_ETIKK_DEL4_CHAPTERS } from './textbook-content-filosofi-etikk-del4';
import { FILOSOFI_ETIKK_DEL5_CHAPTERS } from './textbook-content-filosofi-etikk-del5';
import { FILOSOFI_ETIKK_DEL6_CHAPTERS } from './textbook-content-filosofi-etikk-del6';
import { FILOSOFI_ETIKK_DEL7_CHAPTERS } from './textbook-content-filosofi-etikk-del7';
import { FILOSOFI_ETIKK_DEL8_CHAPTERS } from './textbook-content-filosofi-etikk-del8';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const FILOSOFI_ETIKK_CHAPTERS: TextbookChapter[] = [
  ...FILOSOFI_ETIKK_DEL1_CHAPTERS,
  ...FILOSOFI_ETIKK_DEL2_CHAPTERS,
  ...FILOSOFI_ETIKK_DEL3_CHAPTERS,
  ...FILOSOFI_ETIKK_DEL4_CHAPTERS,
  ...FILOSOFI_ETIKK_DEL5_CHAPTERS,
  ...FILOSOFI_ETIKK_DEL6_CHAPTERS,
  ...FILOSOFI_ETIKK_DEL7_CHAPTERS,
  ...FILOSOFI_ETIKK_DEL8_CHAPTERS,
];

export function getFilosofiEtikkChapter(chapterId: string): TextbookChapter | undefined {
  return FILOSOFI_ETIKK_CHAPTERS.find(chapter => chapter.id === chapterId);
}
