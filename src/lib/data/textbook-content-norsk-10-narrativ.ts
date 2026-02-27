/**
 * Norsk 10. klasse - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del8
 * Optimalisert for lesing/lytting på mobil
 */

import { NORSK_10_NARRATIV_DEL1_CHAPTERS } from './textbook-content-norsk-10-narrativ-del1';
import { NORSK_10_NARRATIV_DEL2_CHAPTERS } from './textbook-content-norsk-10-narrativ-del2';
import { NORSK_10_NARRATIV_DEL3_CHAPTERS } from './textbook-content-norsk-10-narrativ-del3';
import { NORSK_10_NARRATIV_DEL4_CHAPTERS } from './textbook-content-norsk-10-narrativ-del4';
import { NORSK_10_NARRATIV_DEL5_CHAPTERS } from './textbook-content-norsk-10-narrativ-del5';
import { NORSK_10_NARRATIV_DEL6_CHAPTERS } from './textbook-content-norsk-10-narrativ-del6';
import { NORSK_10_NARRATIV_DEL7_CHAPTERS } from './textbook-content-norsk-10-narrativ-del7';
import { NORSK_10_NARRATIV_DEL8_CHAPTERS } from './textbook-content-norsk-10-narrativ-del8';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-norsk-10-narrativ-del1';
export * from './textbook-content-norsk-10-narrativ-del2';
export * from './textbook-content-norsk-10-narrativ-del3';
export * from './textbook-content-norsk-10-narrativ-del4';
export * from './textbook-content-norsk-10-narrativ-del5';
export * from './textbook-content-norsk-10-narrativ-del6';
export * from './textbook-content-norsk-10-narrativ-del7';
export * from './textbook-content-norsk-10-narrativ-del8';

/**
 * Alle narrative kapitler for Norsk 10. klasse
 *
 * Del 1: Litteraturhistorie og eksamen (kap 1.1-2.2)
 * Del 2: Språk og medier (kap 3.1-4.2)
 * Del 3: Sammensatte tekster og kreativ skriving (kap 5.1-5.2)
 * Del 4: Retorikk og muntlig kommunikasjon (kap 6.1-6.6)
 * Del 5: Språkhistorie og språkmangfold (kap 7.1-7.6)
 * Del 6: Medier og kritisk lesing (kap 8.1-8.6)
 * Del 7: Sammensatte tekster og digitale medier (kap 9.1-9.6)
 * Del 8: Eksamensforberedelse og skrivetrening (kap 10.1-10.6)
 */
export const NORSK_10_NARRATIV_CHAPTERS = [
  ...NORSK_10_NARRATIV_DEL1_CHAPTERS,
  ...NORSK_10_NARRATIV_DEL2_CHAPTERS,
  ...NORSK_10_NARRATIV_DEL3_CHAPTERS,
  ...NORSK_10_NARRATIV_DEL4_CHAPTERS,
  ...NORSK_10_NARRATIV_DEL5_CHAPTERS,
  ...NORSK_10_NARRATIV_DEL6_CHAPTERS,
  ...NORSK_10_NARRATIV_DEL7_CHAPTERS,
  ...NORSK_10_NARRATIV_DEL8_CHAPTERS,
];
