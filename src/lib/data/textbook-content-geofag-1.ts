/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2
 *
 * Dekker LK20-kompetansemål for geofag 1 (GEO01-01)
 * Utvidet fra 10 hovedkapitler til 47 delkapitler
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer alle del-filer
import { GEOFAG_1_DEL1_CHAPTERS } from './textbook-content-geofag-1-del1';
import { GEOFAG_1_DEL2_CHAPTERS } from './textbook-content-geofag-1-del2';
import { GEOFAG_1_DEL3_CHAPTERS } from './textbook-content-geofag-1-del3';
import { GEOFAG_1_DEL4_CHAPTERS } from './textbook-content-geofag-1-del4';
import { GEOFAG_1_DEL5_CHAPTERS } from './textbook-content-geofag-1-del5';
import { GEOFAG_1_DEL6_CHAPTERS } from './textbook-content-geofag-1-del6';
import { GEOFAG_1_DEL7_CHAPTERS } from './textbook-content-geofag-1-del7';
import { GEOFAG_1_DEL8_CHAPTERS } from './textbook-content-geofag-1-del8';
import { GEOFAG_1_DEL9_CHAPTERS } from './textbook-content-geofag-1-del9';
import { GEOFAG_1_DEL10_CHAPTERS } from './textbook-content-geofag-1-del10';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const GEOFAG_1_CHAPTERS: TextbookChapter[] = [
  ...GEOFAG_1_DEL1_CHAPTERS,
  ...GEOFAG_1_DEL2_CHAPTERS,
  ...GEOFAG_1_DEL3_CHAPTERS,
  ...GEOFAG_1_DEL4_CHAPTERS,
  ...GEOFAG_1_DEL5_CHAPTERS,
  ...GEOFAG_1_DEL6_CHAPTERS,
  ...GEOFAG_1_DEL7_CHAPTERS,
  ...GEOFAG_1_DEL8_CHAPTERS,
  ...GEOFAG_1_DEL9_CHAPTERS,
  ...GEOFAG_1_DEL10_CHAPTERS,
];

export function getGeofag1Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
