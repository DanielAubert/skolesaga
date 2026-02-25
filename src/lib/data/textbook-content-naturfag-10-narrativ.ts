/**
 * Naturfag 10. klasse - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1a-del7
 * Optimalisert for lesing/lytting på mobil
 */

import { NATURFAG_10_NARRATIV_DEL1A_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del1a';
import { NATURFAG_10_NARRATIV_DEL1B_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del1b';
import { NATURFAG_10_NARRATIV_DEL2A_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del2a';
import { NATURFAG_10_NARRATIV_DEL2B_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del2b';
import { NATURFAG_10_NARRATIV_DEL3A_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del3a';
import { NATURFAG_10_NARRATIV_DEL3B_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del3b';
import { NATURFAG_10_NARRATIV_DEL4A_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del4a';
import { NATURFAG_10_NARRATIV_DEL4B_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del4b';
import { NATURFAG_10_NARRATIV_DEL4C_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del4c';
import { NATURFAG_10_NARRATIV_DEL5A_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del5a';
import { NATURFAG_10_NARRATIV_DEL5B_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del5b';
import { NATURFAG_10_NARRATIV_DEL6_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del6';
import { NATURFAG_10_NARRATIV_DEL7_CHAPTERS } from './textbook-content-naturfag-10-narrativ-del7';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-naturfag-10-narrativ-del1a';
export * from './textbook-content-naturfag-10-narrativ-del1b';
export * from './textbook-content-naturfag-10-narrativ-del2a';
export * from './textbook-content-naturfag-10-narrativ-del2b';
export * from './textbook-content-naturfag-10-narrativ-del3a';
export * from './textbook-content-naturfag-10-narrativ-del3b';
export * from './textbook-content-naturfag-10-narrativ-del4a';
export * from './textbook-content-naturfag-10-narrativ-del4b';
export * from './textbook-content-naturfag-10-narrativ-del4c';
export * from './textbook-content-naturfag-10-narrativ-del5a';
export * from './textbook-content-naturfag-10-narrativ-del5b';
export * from './textbook-content-naturfag-10-narrativ-del6';
export * from './textbook-content-naturfag-10-narrativ-del7';

/**
 * Alle narrative kapitler for Naturfag 10. klasse
 *
 * Del 1A: Naturvitenskapelige praksiser (kap 1.1-1.2)
 * Del 1B: Naturvitenskapelige praksiser forts. (kap 1.3-1.5)
 * Del 2A: Kjemi - grunnleggende (kap 2.1-2.4)
 * Del 2B: Kjemi - reaksjoner og løsninger (kap 2.5-2.8)
 * Del 3A: Fysikk og energi (kap 3.1-3.3)
 * Del 3B: Fysikk og energi forts. (kap 3.4-3.6)
 * Del 4A: Biologi - celler og genetikk (kap 4.1-4.3, 4.3b)
 * Del 4B: Biologi - økosystemer (kap 4.4-4.6)
 * Del 4C: Biologi - kretsløp og ressurser (kap 4.7-4.8)
 * Del 5A: Kropp og helse (kap 5.1-5.3)
 * Del 5B: Kropp og helse forts. (kap 5.5-5.6)
 * Del 6:  Teknologi og forskning (kap 6.1-6.5)
 * Del 7:  Seksuell og reproduktiv helse (kap 7.1-7.5)
 */
export const NATURFAG_10_NARRATIV_CHAPTERS = [
  ...NATURFAG_10_NARRATIV_DEL1A_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL1B_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL2A_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL2B_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL3A_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL3B_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL4A_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL4B_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL4C_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL5A_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL5B_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL6_CHAPTERS,
  ...NATURFAG_10_NARRATIV_DEL7_CHAPTERS,
];
