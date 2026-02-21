/**
 * Naturfag VG1 - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del6b
 * Optimalisert for lesing/lytting på mobil
 */

import { NAT_VG1_NARRATIV_DEL1_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del1';
import { NAT_VG1_NARRATIV_DEL1B_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del1b';
import { NAT_VG1_NARRATIV_DEL2A_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del2a';
import { NAT_VG1_NARRATIV_DEL2B_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del2b';
import { NAT_VG1_NARRATIV_DEL3A_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del3a';
import { NAT_VG1_NARRATIV_DEL3B_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del3b';
import { NAT_VG1_NARRATIV_DEL4A_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del4a';
import { NAT_VG1_NARRATIV_DEL4B_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del4b';
import { NAT_VG1_NARRATIV_DEL5A_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del5a';
import { NAT_VG1_NARRATIV_DEL5B_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del5b';
import { NAT_VG1_NARRATIV_DEL6A_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del6a';
import { NAT_VG1_NARRATIV_DEL6B_CHAPTERS } from './textbook-content-nat-vg1-narrativ-del6b';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-nat-vg1-narrativ-del1';
export * from './textbook-content-nat-vg1-narrativ-del1b';
export * from './textbook-content-nat-vg1-narrativ-del2a';
export * from './textbook-content-nat-vg1-narrativ-del2b';
export * from './textbook-content-nat-vg1-narrativ-del3a';
export * from './textbook-content-nat-vg1-narrativ-del3b';
export * from './textbook-content-nat-vg1-narrativ-del4a';
export * from './textbook-content-nat-vg1-narrativ-del4b';
export * from './textbook-content-nat-vg1-narrativ-del5a';
export * from './textbook-content-nat-vg1-narrativ-del5b';
export * from './textbook-content-nat-vg1-narrativ-del6a';
export * from './textbook-content-nat-vg1-narrativ-del6b';

/**
 * Alle narrative kapitler for Naturfag VG1
 *
 * Del 1:  Naturvitenskapens tenkemåte (kap 1.1-1.3)
 * Del 1B: Naturvitenskapens tenkemåte forts. (kap 1.4-1.5)
 * Del 2A: Bølger og stråling (kap 2.1-2.3)
 * Del 2B: Bølger og stråling forts. (kap 2.4-2.7)
 * Del 3A: Universet (kap 3.1-3.4)
 * Del 3B: Kjemi - atomet og bindinger (kap 4.1-4.5)
 * Del 4A: Organisk kjemi (kap 5.1-5.6)
 * Del 4B: Økologi og miljø (kap 6.1-6.5)
 * Del 5A: Ernæring og helse (kap 7.1-7.6)
 * Del 5B: Genetikk og evolusjon (kap 8.1-8.5)
 * Del 6A: Bioteknologi (kap 9.1-9.5)
 * Del 6B: Teknologi, energi og bærekraft (kap 10.1-10.7)
 */
export const NAT_VG1_NARRATIV_CHAPTERS = [
  ...NAT_VG1_NARRATIV_DEL1_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL1B_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL2A_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL2B_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL3A_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL3B_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL4A_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL4B_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL5A_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL5B_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL6A_CHAPTERS,
  ...NAT_VG1_NARRATIV_DEL6B_CHAPTERS,
];
