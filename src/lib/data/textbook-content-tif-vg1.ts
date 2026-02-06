/* eslint-disable */
// @ts-nocheck
/**
 * Teknologi- og industrifag VG1 - Aggregator
 *
 * Samler alle kapitler fra del-filene.
 * Dekker LK20 læreplan for Teknologi- og industrifag på VG1
 *
 * Struktur:
 * - Modul 1: Materiallære (1.1-1.7) - del1
 * - Modul 2: Sveising og sammenføyning (2.1-2.7) - del2
 * - Modul 3: Maskinering (3.1-3.7) - del3
 * - Modul 4: Tegning og dokumentasjon (4.1-4.6) - del4
 * - Modul 5: Elektro, hydraulikk og pneumatikk (5.1-5.8) - del5
 * - Modul 6: HMS og sikkerhet (6.1-6.7) - del6
 * - Modul 7: Produksjon og kvalitet (7.1-7.7) - del7
 * - Modul 8: Yrkesliv og bærekraft (8.1-8.6) - del8
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import kapittelgrupper fra del-filer
import { TIF_VG1_DEL1_CHAPTERS } from './textbook-content-tif-vg1-del1';
import { TIF_VG1_DEL2_CHAPTERS } from './textbook-content-tif-vg1-del2';
import { TIF_VG1_DEL3_CHAPTERS } from './textbook-content-tif-vg1-del3';
import { TIF_VG1_DEL4_CHAPTERS } from './textbook-content-tif-vg1-del4';
import { TIF_VG1_DEL5_CHAPTERS } from './textbook-content-tif-vg1-del5';
import { TIF_VG1_DEL6_CHAPTERS } from './textbook-content-tif-vg1-del6';
import { TIF_VG1_DEL7_CHAPTERS } from './textbook-content-tif-vg1-del7';
import { TIF_VG1_DEL8_CHAPTERS } from './textbook-content-tif-vg1-del8';

// Eksporter alle kapitler som én samlet array
export const TIF_VG1_CHAPTERS: TextbookChapter[] = [
  ...TIF_VG1_DEL1_CHAPTERS, // Kap 1.1-1.7: Materiallære
  ...TIF_VG1_DEL2_CHAPTERS, // Kap 2.1-2.7: Sveising og sammenføyning
  ...TIF_VG1_DEL3_CHAPTERS, // Kap 3.1-3.7: Maskinering
  ...TIF_VG1_DEL4_CHAPTERS, // Kap 4.1-4.6: Tegning og dokumentasjon
  ...TIF_VG1_DEL5_CHAPTERS, // Kap 5.1-5.8: Elektro, hydraulikk, pneumatikk
  ...TIF_VG1_DEL6_CHAPTERS, // Kap 6.1-6.7: HMS og sikkerhet
  ...TIF_VG1_DEL7_CHAPTERS, // Kap 7.1-7.7: Produksjon og kvalitet
  ...TIF_VG1_DEL8_CHAPTERS, // Kap 8.1-8.6: Yrkesliv og bærekraft
];

// Alias for bakoverkompatibilitet med textbook-content.ts
export const CHAPTERS_TIF_VG1_PART1 = TIF_VG1_CHAPTERS;

// Re-eksporter del-arrays for direkte import
export { TIF_VG1_DEL1_CHAPTERS } from './textbook-content-tif-vg1-del1';
export { TIF_VG1_DEL2_CHAPTERS } from './textbook-content-tif-vg1-del2';
export { TIF_VG1_DEL3_CHAPTERS } from './textbook-content-tif-vg1-del3';
export { TIF_VG1_DEL4_CHAPTERS } from './textbook-content-tif-vg1-del4';
export { TIF_VG1_DEL5_CHAPTERS } from './textbook-content-tif-vg1-del5';
export { TIF_VG1_DEL6_CHAPTERS } from './textbook-content-tif-vg1-del6';
export { TIF_VG1_DEL7_CHAPTERS } from './textbook-content-tif-vg1-del7';
export { TIF_VG1_DEL8_CHAPTERS } from './textbook-content-tif-vg1-del8';
