/**
 * Matematikk 8. klasse - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del12
 * Optimalisert for lesing/lytting på mobil
 */

import { MATEMATIKK_8_NARRATIV_DEL1_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del1';
import { MATEMATIKK_8_NARRATIV_DEL2_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del2';
import { MATEMATIKK_8_NARRATIV_DEL3_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del3';
import { MATEMATIKK_8_NARRATIV_DEL4_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del4';
import { MATEMATIKK_8_NARRATIV_DEL5_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del5';
import { MATEMATIKK_8_NARRATIV_DEL6_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del6';
import { MATEMATIKK_8_NARRATIV_DEL7_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del7';
import { MATEMATIKK_8_NARRATIV_DEL8_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del8';
import { MATEMATIKK_8_NARRATIV_DEL9_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del9';
import { MATEMATIKK_8_NARRATIV_DEL10_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del10';
import { MATEMATIKK_8_NARRATIV_DEL11_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del11';
import { MATEMATIKK_8_NARRATIV_DEL12_CHAPTERS } from './textbook-content-matematikk-8-narrativ-del12';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-matematikk-8-narrativ-del1';
export * from './textbook-content-matematikk-8-narrativ-del2';
export * from './textbook-content-matematikk-8-narrativ-del3';
export * from './textbook-content-matematikk-8-narrativ-del4';
export * from './textbook-content-matematikk-8-narrativ-del5';
export * from './textbook-content-matematikk-8-narrativ-del6';
export * from './textbook-content-matematikk-8-narrativ-del7';
export * from './textbook-content-matematikk-8-narrativ-del8';
export * from './textbook-content-matematikk-8-narrativ-del9';
export * from './textbook-content-matematikk-8-narrativ-del10';
export * from './textbook-content-matematikk-8-narrativ-del11';
export * from './textbook-content-matematikk-8-narrativ-del12';

/**
 * Alle narrative kapitler for Matematikk 8. klasse
 *
 * Del 1: Tall og tallforståelse (kap 1.1-1.5)
 * Del 2: Algebra (kap 2.1-2.3)
 * Del 3: Geometri del 1 (kap 3.1-3.3)
 * Del 4: Geometri del 2 (kap 3.4-3.6)
 * Del 5: Funksjoner og grafer (kap 4.1-4.3)
 * Del 6: Statistikk og sannsynlighet (kap 5.1-5.3)
 * Del 7: Hoderegning og tallforståelse (kap 6.1-6.3)
 * Del 8: Primtall og faktorisering (kap 7.1-7.4)
 * Del 9: Mønstre og generalisering (kap 8.1-8.3)
 * Del 10: Sammensatte måleenheter (kap 9.1-9.4)
 * Del 11: Funksjoner og representasjoner (kap 10.1-10.3)
 * Del 12: Programmering og algoritmer (kap 11.1-11.3)
 */
export const MATEMATIKK_8_NARRATIV_CHAPTERS = [
  ...MATEMATIKK_8_NARRATIV_DEL1_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL2_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL3_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL4_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL5_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL6_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL7_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL8_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL9_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL10_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL11_CHAPTERS,
  ...MATEMATIKK_8_NARRATIV_DEL12_CHAPTERS,
];
