/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 2 (VG3)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

import { TRENING_2_DEL1_CHAPTERS } from './textbook-content-trening-2-del1';
import { TRENING_2_DEL2_CHAPTERS } from './textbook-content-trening-2-del2';
import { TRENING_2_DEL3_CHAPTERS } from './textbook-content-trening-2-del3';
import { TRENING_2_DEL4_CHAPTERS } from './textbook-content-trening-2-del4';
import { TRENING_2_DEL5_CHAPTERS } from './textbook-content-trening-2-del5';
import { TRENING_2_DEL6_CHAPTERS } from './textbook-content-trening-2-del6';
import { TRENING_2_DEL7_CHAPTERS } from './textbook-content-trening-2-del7';
import { TRENING_2_DEL8_CHAPTERS } from './textbook-content-trening-2-del8';

export const TRENING_2_CHAPTERS: TextbookChapter[] = [
  ...TRENING_2_DEL1_CHAPTERS,
  ...TRENING_2_DEL2_CHAPTERS,
  ...TRENING_2_DEL3_CHAPTERS,
  ...TRENING_2_DEL4_CHAPTERS,
  ...TRENING_2_DEL5_CHAPTERS,
  ...TRENING_2_DEL6_CHAPTERS,
  ...TRENING_2_DEL7_CHAPTERS,
  ...TRENING_2_DEL8_CHAPTERS,
];
