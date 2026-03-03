/**
 * Matematikk 9. klasse - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del12
 * Optimalisert for lesing/lytting på mobil
 */

import { MATEMATIKK_9_NARRATIV_DEL1_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del1';
import { MATEMATIKK_9_NARRATIV_DEL2_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del2';
import { MATEMATIKK_9_NARRATIV_DEL3_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del3';
import { MATEMATIKK_9_NARRATIV_DEL4_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del4';
import { MATEMATIKK_9_NARRATIV_DEL5_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del5';
import { MATEMATIKK_9_NARRATIV_DEL6_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del6';
import { MATEMATIKK_9_NARRATIV_DEL7_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del7';
import { MATEMATIKK_9_NARRATIV_DEL8_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del8';
import { MATEMATIKK_9_NARRATIV_DEL9_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del9';
import { MATEMATIKK_9_NARRATIV_DEL10_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del10';
import { MATEMATIKK_9_NARRATIV_DEL11_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del11';
import { MATEMATIKK_9_NARRATIV_DEL12_CHAPTERS } from './textbook-content-matematikk-9-narrativ-del12';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-matematikk-9-narrativ-del1';
export * from './textbook-content-matematikk-9-narrativ-del2';
export * from './textbook-content-matematikk-9-narrativ-del3';
export * from './textbook-content-matematikk-9-narrativ-del4';
export * from './textbook-content-matematikk-9-narrativ-del5';
export * from './textbook-content-matematikk-9-narrativ-del6';
export * from './textbook-content-matematikk-9-narrativ-del7';
export * from './textbook-content-matematikk-9-narrativ-del8';
export * from './textbook-content-matematikk-9-narrativ-del9';
export * from './textbook-content-matematikk-9-narrativ-del10';
export * from './textbook-content-matematikk-9-narrativ-del11';
export * from './textbook-content-matematikk-9-narrativ-del12';

/**
 * Alle narrative kapitler for Matematikk 9. klasse
 *
 * Del 1: Tall og algebra (kap 1.1-1.4)
 * Del 2: Algebra (kap 2.1-2.4)
 * Del 3: Funksjoner (kap 3.1-3.3)
 * Del 4: Geometri (kap 4.1-4.4)
 * Del 5: Økonomi (kap 5.1-5.3)
 * Del 6: Statistikk og sannsynlighet (kap 6.1-6.3)
 * Del 7: Mønster og generalisering (kap 7.1-7.4)
 * Del 8: Polygoner og kongruens (kap 8.1-8.3)
 * Del 9: Romgeometri (kap 9.1-9.3)
 * Del 10: Kritisk statistikk og data (kap 10.1-10.3)
 * Del 11: Programmering og simulering (kap 11.1-11.3)
 * Del 12: Problemløsning og tentamen (kap 12.1-12.3)
 */
export const MATEMATIKK_9_NARRATIV_CHAPTERS = [
  ...MATEMATIKK_9_NARRATIV_DEL1_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL2_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL3_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL4_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL5_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL6_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL7_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL8_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL9_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL10_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL11_CHAPTERS,
  ...MATEMATIKK_9_NARRATIV_DEL12_CHAPTERS,
];
