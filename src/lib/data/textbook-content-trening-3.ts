/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 3 (VG3)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

import { TRENING_3_DEL1_CHAPTERS } from './textbook-content-trening-3-del1';
import { TRENING_3_DEL2_CHAPTERS } from './textbook-content-trening-3-del2';
import { TRENING_3_DEL3_CHAPTERS } from './textbook-content-trening-3-del3';
import { TRENING_3_DEL4_CHAPTERS } from './textbook-content-trening-3-del4';
import { TRENING_3_DEL5_CHAPTERS } from './textbook-content-trening-3-del5';
import { TRENING_3_DEL6_CHAPTERS } from './textbook-content-trening-3-del6';
import { TRENING_3_DEL7_CHAPTERS } from './textbook-content-trening-3-del7';
import { TRENING_3_DEL8_CHAPTERS } from './textbook-content-trening-3-del8';

export const TRENING_3_CHAPTERS: TextbookChapter[] = [
  ...TRENING_3_DEL1_CHAPTERS,
  ...TRENING_3_DEL2_CHAPTERS,
  ...TRENING_3_DEL3_CHAPTERS,
  ...TRENING_3_DEL4_CHAPTERS,
  ...TRENING_3_DEL5_CHAPTERS,
  ...TRENING_3_DEL6_CHAPTERS,
  ...TRENING_3_DEL7_CHAPTERS,
  ...TRENING_3_DEL8_CHAPTERS,
];
