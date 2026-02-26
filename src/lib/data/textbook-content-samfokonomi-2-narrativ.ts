/**
 * Samfunnsøkonomi 2 (VG3) - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del8
 * Optimalisert for lesing/lytting på mobil
 */

import { SAMFOKONOMI_2_NARRATIV_DEL1_CHAPTERS } from './textbook-content-samfokonomi-2-narrativ-del1';
import { SAMFOKONOMI_2_NARRATIV_DEL2_CHAPTERS } from './textbook-content-samfokonomi-2-narrativ-del2';
import { SAMFOKONOMI_2_NARRATIV_DEL3_CHAPTERS } from './textbook-content-samfokonomi-2-narrativ-del3';
import { SAMFOKONOMI_2_NARRATIV_DEL4_CHAPTERS } from './textbook-content-samfokonomi-2-narrativ-del4';
import { SAMFOKONOMI_2_NARRATIV_DEL5_CHAPTERS } from './textbook-content-samfokonomi-2-narrativ-del5';
import { SAMFOKONOMI_2_NARRATIV_DEL6_CHAPTERS } from './textbook-content-samfokonomi-2-narrativ-del6';
import { SAMFOKONOMI_2_NARRATIV_DEL7_CHAPTERS } from './textbook-content-samfokonomi-2-narrativ-del7';
import { SAMFOKONOMI_2_NARRATIV_DEL8_CHAPTERS } from './textbook-content-samfokonomi-2-narrativ-del8';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-samfokonomi-2-narrativ-del1';
export * from './textbook-content-samfokonomi-2-narrativ-del2';
export * from './textbook-content-samfokonomi-2-narrativ-del3';
export * from './textbook-content-samfokonomi-2-narrativ-del4';
export * from './textbook-content-samfokonomi-2-narrativ-del5';
export * from './textbook-content-samfokonomi-2-narrativ-del6';
export * from './textbook-content-samfokonomi-2-narrativ-del7';
export * from './textbook-content-samfokonomi-2-narrativ-del8';

/**
 * Alle narrative kapitler for Samfunnsøkonomi 2
 *
 * Del 1: Makroøkonomiske modeller (kap 1.1-1.5)
 * Del 2: Penge- og finanspolitikk (kap 2.1-2.5)
 * Del 3: Internasjonal handel og valuta (kap 3.1-3.5)
 * Del 4: Arbeidsmarked og sysselsetting (kap 4.1-4.5)
 * Del 5: Fordeling og velferd (kap 5.1-5.5)
 * Del 6: Miljøøkonomi og bærekraft (kap 6.1-6.5)
 * Del 7: Internasjonal økonomi (kap 7.1-7.5)
 * Del 8: Aktuelle økonomiske debatter (kap 8.1-8.5)
 */
export const SAMFOKONOMI_2_NARRATIV_CHAPTERS = [
  ...SAMFOKONOMI_2_NARRATIV_DEL1_CHAPTERS,
  ...SAMFOKONOMI_2_NARRATIV_DEL2_CHAPTERS,
  ...SAMFOKONOMI_2_NARRATIV_DEL3_CHAPTERS,
  ...SAMFOKONOMI_2_NARRATIV_DEL4_CHAPTERS,
  ...SAMFOKONOMI_2_NARRATIV_DEL5_CHAPTERS,
  ...SAMFOKONOMI_2_NARRATIV_DEL6_CHAPTERS,
  ...SAMFOKONOMI_2_NARRATIV_DEL7_CHAPTERS,
  ...SAMFOKONOMI_2_NARRATIV_DEL8_CHAPTERS,
];
