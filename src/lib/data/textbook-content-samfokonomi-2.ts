/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Samfunnsøkonomi 2 (VG3)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

import { SAMFOKONOMI_2_DEL1_CHAPTERS } from './textbook-content-samfokonomi-2-del1';
import { SAMFOKONOMI_2_DEL2_CHAPTERS } from './textbook-content-samfokonomi-2-del2';
import { SAMFOKONOMI_2_DEL3_CHAPTERS } from './textbook-content-samfokonomi-2-del3';
import { SAMFOKONOMI_2_DEL4_CHAPTERS } from './textbook-content-samfokonomi-2-del4';
import { SAMFOKONOMI_2_DEL5_CHAPTERS } from './textbook-content-samfokonomi-2-del5';
import { SAMFOKONOMI_2_DEL6_CHAPTERS } from './textbook-content-samfokonomi-2-del6';
import { SAMFOKONOMI_2_DEL7_CHAPTERS } from './textbook-content-samfokonomi-2-del7';
import { SAMFOKONOMI_2_DEL8_CHAPTERS } from './textbook-content-samfokonomi-2-del8';

export const SAMFOKONOMI_2_CHAPTERS: TextbookChapter[] = [
  ...SAMFOKONOMI_2_DEL1_CHAPTERS,
  ...SAMFOKONOMI_2_DEL2_CHAPTERS,
  ...SAMFOKONOMI_2_DEL3_CHAPTERS,
  ...SAMFOKONOMI_2_DEL4_CHAPTERS,
  ...SAMFOKONOMI_2_DEL5_CHAPTERS,
  ...SAMFOKONOMI_2_DEL6_CHAPTERS,
  ...SAMFOKONOMI_2_DEL7_CHAPTERS,
  ...SAMFOKONOMI_2_DEL8_CHAPTERS,
];
