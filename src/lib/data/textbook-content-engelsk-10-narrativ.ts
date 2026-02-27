/**
 * Engelsk 10. klasse - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del9
 * Optimalisert for lesing/lytting på mobil
 */

import { ENGELSK_10_NARRATIV_DEL1_CHAPTERS } from './textbook-content-engelsk-10-narrativ-del1';
import { ENGELSK_10_NARRATIV_DEL2_CHAPTERS } from './textbook-content-engelsk-10-narrativ-del2';
import { ENGELSK_10_NARRATIV_DEL3_CHAPTERS } from './textbook-content-engelsk-10-narrativ-del3';
import { ENGELSK_10_NARRATIV_DEL4_CHAPTERS } from './textbook-content-engelsk-10-narrativ-del4';
import { ENGELSK_10_NARRATIV_DEL5_CHAPTERS } from './textbook-content-engelsk-10-narrativ-del5';
import { ENGELSK_10_NARRATIV_DEL6_CHAPTERS } from './textbook-content-engelsk-10-narrativ-del6';
import { ENGELSK_10_NARRATIV_DEL7_CHAPTERS } from './textbook-content-engelsk-10-narrativ-del7';
import { ENGELSK_10_NARRATIV_DEL8_CHAPTERS } from './textbook-content-engelsk-10-narrativ-del8';
import { ENGELSK_10_NARRATIV_DEL9_CHAPTERS } from './textbook-content-engelsk-10-narrativ-del9';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-engelsk-10-narrativ-del1';
export * from './textbook-content-engelsk-10-narrativ-del2';
export * from './textbook-content-engelsk-10-narrativ-del3';
export * from './textbook-content-engelsk-10-narrativ-del4';
export * from './textbook-content-engelsk-10-narrativ-del5';
export * from './textbook-content-engelsk-10-narrativ-del6';
export * from './textbook-content-engelsk-10-narrativ-del7';
export * from './textbook-content-engelsk-10-narrativ-del8';
export * from './textbook-content-engelsk-10-narrativ-del9';

/**
 * Alle narrative kapitler for Engelsk 10. klasse
 *
 * Del 1: Eksamen og analyse (kap 1-4)
 * Del 2: Kommunikasjon og argumentasjon (kap 5-7)
 * Del 3: Globale utfordringer og identitet (kap 8-9)
 * Del 4: Kritisk lesing (kap 10)
 * Del 5: Language and Grammar Mastery (kap 11-16)
 * Del 6: Literature and Cultural Understanding (kap 17-22)
 * Del 7: Society, Media and Global Issues (kap 23-28)
 * Del 8: Exam Preparation and Advanced Skills (kap 29-34)
 * Del 9: Film, Language and History (kap 35-40)
 */
export const ENGELSK_10_NARRATIV_CHAPTERS = [
  ...ENGELSK_10_NARRATIV_DEL1_CHAPTERS,
  ...ENGELSK_10_NARRATIV_DEL2_CHAPTERS,
  ...ENGELSK_10_NARRATIV_DEL3_CHAPTERS,
  ...ENGELSK_10_NARRATIV_DEL4_CHAPTERS,
  ...ENGELSK_10_NARRATIV_DEL5_CHAPTERS,
  ...ENGELSK_10_NARRATIV_DEL6_CHAPTERS,
  ...ENGELSK_10_NARRATIV_DEL7_CHAPTERS,
  ...ENGELSK_10_NARRATIV_DEL8_CHAPTERS,
  ...ENGELSK_10_NARRATIV_DEL9_CHAPTERS,
];
