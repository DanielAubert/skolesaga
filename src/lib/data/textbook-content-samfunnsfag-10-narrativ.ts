/**
 * Samfunnsfag 10. klasse - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del8
 * Optimalisert for lesing/lytting på mobil
 */

import { SAMFUNNSFAG_10_NARRATIV_DEL1_CHAPTERS } from './textbook-content-samfunnsfag-10-narrativ-del1';
import { SAMFUNNSFAG_10_NARRATIV_DEL2_CHAPTERS } from './textbook-content-samfunnsfag-10-narrativ-del2';
import { SAMFUNNSFAG_10_NARRATIV_DEL3_CHAPTERS } from './textbook-content-samfunnsfag-10-narrativ-del3';
import { SAMFUNNSFAG_10_NARRATIV_DEL4_CHAPTERS } from './textbook-content-samfunnsfag-10-narrativ-del4';
import { SAMFUNNSFAG_10_NARRATIV_DEL5_CHAPTERS } from './textbook-content-samfunnsfag-10-narrativ-del5';
import { SAMFUNNSFAG_10_NARRATIV_DEL6_CHAPTERS } from './textbook-content-samfunnsfag-10-narrativ-del6';
import { SAMFUNNSFAG_10_NARRATIV_DEL7_CHAPTERS } from './textbook-content-samfunnsfag-10-narrativ-del7';
import { SAMFUNNSFAG_10_NARRATIV_DEL8_CHAPTERS } from './textbook-content-samfunnsfag-10-narrativ-del8';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-samfunnsfag-10-narrativ-del1';
export * from './textbook-content-samfunnsfag-10-narrativ-del2';
export * from './textbook-content-samfunnsfag-10-narrativ-del3';
export * from './textbook-content-samfunnsfag-10-narrativ-del4';
export * from './textbook-content-samfunnsfag-10-narrativ-del5';
export * from './textbook-content-samfunnsfag-10-narrativ-del6';
export * from './textbook-content-samfunnsfag-10-narrativ-del7';
export * from './textbook-content-samfunnsfag-10-narrativ-del8';

/**
 * Alle narrative kapitler for Samfunnsfag 10. klasse
 *
 * Del 1: Demokrati og globalisering (kap 1-4)
 * Del 2: Konflikter, politikk og økonomi (kap 5-7)
 * Del 3: Medier, identitet og eksamen (kap 8-10)
 * Del 4: Geografi og ressurser (kap 11-16)
 * Del 5: Historie — Fra 1900 til i dag (kap 17-22)
 * Del 6: Personlig økonomi og arbeidsliv (kap 23-28)
 * Del 7: Urfolk, mangfold og livsmestring (kap 29-34)
 * Del 8: Samfunnsfaglig metode og eksamen (kap 35-40)
 */
export const SAMFUNNSFAG_10_NARRATIV_CHAPTERS = [
  ...SAMFUNNSFAG_10_NARRATIV_DEL1_CHAPTERS,
  ...SAMFUNNSFAG_10_NARRATIV_DEL2_CHAPTERS,
  ...SAMFUNNSFAG_10_NARRATIV_DEL3_CHAPTERS,
  ...SAMFUNNSFAG_10_NARRATIV_DEL4_CHAPTERS,
  ...SAMFUNNSFAG_10_NARRATIV_DEL5_CHAPTERS,
  ...SAMFUNNSFAG_10_NARRATIV_DEL6_CHAPTERS,
  ...SAMFUNNSFAG_10_NARRATIV_DEL7_CHAPTERS,
  ...SAMFUNNSFAG_10_NARRATIV_DEL8_CHAPTERS,
];
