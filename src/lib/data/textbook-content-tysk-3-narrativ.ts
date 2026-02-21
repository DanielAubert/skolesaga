/* eslint-disable */
// @ts-nocheck
/**
 * Tysk nivå 3 - Narrative versjoner (kap 11-16)
 *
 * Aggregatorfil som samler alle narrative kapitler
 * Optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

import { TYSK_3_NARRATIV_KAP11_13_CHAPTERS } from './textbook-content-tysk-3-narrativ-kap11-13';
import { TYSK_3_NARRATIV_KAP14_16_CHAPTERS } from './textbook-content-tysk-3-narrativ-kap14-16';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-tysk-3-narrativ-kap11-13';
export * from './textbook-content-tysk-3-narrativ-kap14-16';

/**
 * Alle narrative kapitler for Tysk nivå 3
 *
 * Kap 11: Geschichte und Erinnerungskultur (11.1-11.4)
 * Kap 12: Umwelt und Nachhaltigkeit (12.1-12.4)
 * Kap 13: Kunst, Musik und Film (13.1-13.4)
 * Kap 14: Übersetzung und Sprachvermittlung (14.1-14.4)
 * Kap 15: Interkulturelle Kommunikation (15.1-15.4)
 * Kap 16: Prüfungsvorbereitung und Wiederholung (16.1-16.4)
 */
export const TYSK_3_NARRATIV_CHAPTERS: TextbookChapter[] = [
  ...TYSK_3_NARRATIV_KAP11_13_CHAPTERS,
  ...TYSK_3_NARRATIV_KAP14_16_CHAPTERS,
];
