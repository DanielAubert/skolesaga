/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Sikkerhetsfag (VG2)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

import { SIKKERHETSFAG_DEL1_CHAPTERS } from './textbook-content-sikkerhetsfag-del1';
import { SIKKERHETSFAG_DEL2_CHAPTERS } from './textbook-content-sikkerhetsfag-del2';
import { SIKKERHETSFAG_DEL3_CHAPTERS } from './textbook-content-sikkerhetsfag-del3';
import { SIKKERHETSFAG_DEL4_CHAPTERS } from './textbook-content-sikkerhetsfag-del4';
import { SIKKERHETSFAG_DEL5_CHAPTERS } from './textbook-content-sikkerhetsfag-del5';
import { SIKKERHETSFAG_DEL6_CHAPTERS } from './textbook-content-sikkerhetsfag-del6';
import { SIKKERHETSFAG_DEL7_CHAPTERS } from './textbook-content-sikkerhetsfag-del7';
import { SIKKERHETSFAG_DEL8_CHAPTERS } from './textbook-content-sikkerhetsfag-del8';

export const SIKKERHETSFAG_CHAPTERS: TextbookChapter[] = [
  ...SIKKERHETSFAG_DEL1_CHAPTERS,
  ...SIKKERHETSFAG_DEL2_CHAPTERS,
  ...SIKKERHETSFAG_DEL3_CHAPTERS,
  ...SIKKERHETSFAG_DEL4_CHAPTERS,
  ...SIKKERHETSFAG_DEL5_CHAPTERS,
  ...SIKKERHETSFAG_DEL6_CHAPTERS,
  ...SIKKERHETSFAG_DEL7_CHAPTERS,
  ...SIKKERHETSFAG_DEL8_CHAPTERS,
];
