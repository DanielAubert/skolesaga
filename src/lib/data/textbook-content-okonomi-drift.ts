/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og driftsledelse (VG3)
 *
 * Utvidet fra 8 flate kapitler til 40 delkapitler i 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

import { OKONOMI_DRIFT_DEL1_CHAPTERS } from './textbook-content-okonomi-drift-del1';
import { OKONOMI_DRIFT_DEL2_CHAPTERS } from './textbook-content-okonomi-drift-del2';
import { OKONOMI_DRIFT_DEL3_CHAPTERS } from './textbook-content-okonomi-drift-del3';
import { OKONOMI_DRIFT_DEL4_CHAPTERS } from './textbook-content-okonomi-drift-del4';
import { OKONOMI_DRIFT_DEL5_CHAPTERS } from './textbook-content-okonomi-drift-del5';
import { OKONOMI_DRIFT_DEL6_CHAPTERS } from './textbook-content-okonomi-drift-del6';
import { OKONOMI_DRIFT_DEL7_CHAPTERS } from './textbook-content-okonomi-drift-del7';
import { OKONOMI_DRIFT_DEL8_CHAPTERS } from './textbook-content-okonomi-drift-del8';

export const OKONOMI_DRIFT_CHAPTERS: TextbookChapter[] = [
  ...OKONOMI_DRIFT_DEL1_CHAPTERS,
  ...OKONOMI_DRIFT_DEL2_CHAPTERS,
  ...OKONOMI_DRIFT_DEL3_CHAPTERS,
  ...OKONOMI_DRIFT_DEL4_CHAPTERS,
  ...OKONOMI_DRIFT_DEL5_CHAPTERS,
  ...OKONOMI_DRIFT_DEL6_CHAPTERS,
  ...OKONOMI_DRIFT_DEL7_CHAPTERS,
  ...OKONOMI_DRIFT_DEL8_CHAPTERS,
];
