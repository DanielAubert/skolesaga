/**
 * Samfunnskunnskap VG1/VG2 - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del8
 * Optimalisert for lesing/lytting på mobil
 */

import { SAMFUNNSKUNNSKAP_NARRATIV_DEL1_CHAPTERS } from './textbook-content-samfunnskunnskap-narrativ-del1';
import { SAMFUNNSKUNNSKAP_NARRATIV_DEL2_CHAPTERS } from './textbook-content-samfunnskunnskap-narrativ-del2';
import { SAMFUNNSKUNNSKAP_NARRATIV_DEL3_CHAPTERS } from './textbook-content-samfunnskunnskap-narrativ-del3';
import { SAMFUNNSKUNNSKAP_NARRATIV_DEL4_CHAPTERS } from './textbook-content-samfunnskunnskap-narrativ-del4';
import { SAMFUNNSKUNNSKAP_NARRATIV_DEL5_CHAPTERS } from './textbook-content-samfunnskunnskap-narrativ-del5';
import { SAMFUNNSKUNNSKAP_NARRATIV_DEL6_CHAPTERS } from './textbook-content-samfunnskunnskap-narrativ-del6';
import { SAMFUNNSKUNNSKAP_NARRATIV_DEL7_CHAPTERS } from './textbook-content-samfunnskunnskap-narrativ-del7';
import { SAMFUNNSKUNNSKAP_NARRATIV_DEL8_CHAPTERS } from './textbook-content-samfunnskunnskap-narrativ-del8';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-samfunnskunnskap-narrativ-del1';
export * from './textbook-content-samfunnskunnskap-narrativ-del2';
export * from './textbook-content-samfunnskunnskap-narrativ-del3';
export * from './textbook-content-samfunnskunnskap-narrativ-del4';
export * from './textbook-content-samfunnskunnskap-narrativ-del5';
export * from './textbook-content-samfunnskunnskap-narrativ-del6';
export * from './textbook-content-samfunnskunnskap-narrativ-del7';
export * from './textbook-content-samfunnskunnskap-narrativ-del8';

/**
 * Alle narrative kapitler for Samfunnskunnskap
 *
 * Del 1: Individ og samfunn (kap 1.1-1.8)
 * Del 2: Identitet og mangfold (kap 2.1-2.7)
 * Del 3: Arbeidsliv og rettigheter (kap 3.1-3.7)
 * Del 4: Demokrati (kap 4.1-4.7)
 * Del 5: Politikk og det norske systemet (kap 5.1-5.12)
 * Del 6: Menneskerettigheter (kap 6.1-6.7)
 * Del 7: Medier og ytringsfrihet (kap 7.1-7.7)
 * Del 8: Økonomi og velferdsstat (kap 8.1-8.8)
 */
export const SAMFUNNSKUNNSKAP_NARRATIV_CHAPTERS = [
  ...SAMFUNNSKUNNSKAP_NARRATIV_DEL1_CHAPTERS,
  ...SAMFUNNSKUNNSKAP_NARRATIV_DEL2_CHAPTERS,
  ...SAMFUNNSKUNNSKAP_NARRATIV_DEL3_CHAPTERS,
  ...SAMFUNNSKUNNSKAP_NARRATIV_DEL4_CHAPTERS,
  ...SAMFUNNSKUNNSKAP_NARRATIV_DEL5_CHAPTERS,
  ...SAMFUNNSKUNNSKAP_NARRATIV_DEL6_CHAPTERS,
  ...SAMFUNNSKUNNSKAP_NARRATIV_DEL7_CHAPTERS,
  ...SAMFUNNSKUNNSKAP_NARRATIV_DEL8_CHAPTERS,
];
