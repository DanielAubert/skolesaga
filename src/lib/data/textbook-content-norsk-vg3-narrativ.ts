/**
 * Norsk VG3 - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del9
 * Optimalisert for lesing/lytting på mobil
 */

import { NORSK_VG3_NARRATIV_DEL1_CHAPTERS } from './textbook-content-norsk-vg3-narrativ-del1';
import { NORSK_VG3_NARRATIV_DEL2_CHAPTERS } from './textbook-content-norsk-vg3-narrativ-del2';
import { NORSK_VG3_NARRATIV_DEL3_CHAPTERS } from './textbook-content-norsk-vg3-narrativ-del3';
import { NORSK_VG3_NARRATIV_DEL4_CHAPTERS } from './textbook-content-norsk-vg3-narrativ-del4';
import { NORSK_VG3_NARRATIV_DEL5_CHAPTERS } from './textbook-content-norsk-vg3-narrativ-del5';
import { NORSK_VG3_NARRATIV_DEL6_CHAPTERS } from './textbook-content-norsk-vg3-narrativ-del6';
import { NORSK_VG3_NARRATIV_DEL7_CHAPTERS } from './textbook-content-norsk-vg3-narrativ-del7';
import { NORSK_VG3_NARRATIV_DEL8_CHAPTERS } from './textbook-content-norsk-vg3-narrativ-del8';
import { NORSK_VG3_NARRATIV_DEL9_CHAPTERS } from './textbook-content-norsk-vg3-narrativ-del9';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-norsk-vg3-narrativ-del1';
export * from './textbook-content-norsk-vg3-narrativ-del2';
export * from './textbook-content-norsk-vg3-narrativ-del3';
export * from './textbook-content-norsk-vg3-narrativ-del4';
export * from './textbook-content-norsk-vg3-narrativ-del5';
export * from './textbook-content-norsk-vg3-narrativ-del6';
export * from './textbook-content-norsk-vg3-narrativ-del7';
export * from './textbook-content-norsk-vg3-narrativ-del8';
export * from './textbook-content-norsk-vg3-narrativ-del9';

/**
 * Alle narrative kapitler for Norsk VG3
 *
 * Del 1: Det moderne gjennombruddet - Brandes, Ibsen intro (1.1-1.3)
 * Del 2: Det moderne gjennombruddet - De fire store (1.4-1.8)
 * Del 3: Det moderne gjennombruddet - Naturalisme, Hamsun (1.9-1.13)
 * Del 4: Modernisme og mellomkrigstid (2.1-2.7)
 * Del 5: Etterkrigslitteratur (3.1-3.9)
 * Del 6: Lyrikk, drama og sakprosa (4.1-4.11)
 * Del 7: Språk og språkhistorie (5.1, 6.1, 6.3)
 * Del 8: Samtidsforfattere og analyse (7.1-8.4)
 * Del 9: Lyrikk og drama (9.1, 9.4)
 */
export const NORSK_VG3_NARRATIV_CHAPTERS = [
  // Del 1: Det moderne gjennombruddet - Brandes, Ibsen intro (3 kapitler)
  ...NORSK_VG3_NARRATIV_DEL1_CHAPTERS,

  // Del 2: Det moderne gjennombruddet - De fire store (5 kapitler)
  ...NORSK_VG3_NARRATIV_DEL2_CHAPTERS,

  // Del 3: Det moderne gjennombruddet - Naturalisme, Hamsun (5 kapitler)
  ...NORSK_VG3_NARRATIV_DEL3_CHAPTERS,

  // Del 4: Modernisme og mellomkrigstid (7 kapitler)
  ...NORSK_VG3_NARRATIV_DEL4_CHAPTERS,

  // Del 5: Etterkrigslitteratur (9 kapitler)
  ...NORSK_VG3_NARRATIV_DEL5_CHAPTERS,

  // Del 6: Lyrikk, drama og sakprosa (11 kapitler)
  ...NORSK_VG3_NARRATIV_DEL6_CHAPTERS,

  // Del 7: Språk og språkhistorie (3 kapitler)
  ...NORSK_VG3_NARRATIV_DEL7_CHAPTERS,

  // Del 8: Samtidsforfattere og analyse (7 kapitler)
  ...NORSK_VG3_NARRATIV_DEL8_CHAPTERS,

  // Del 9: Lyrikk og drama (2 kapitler)
  ...NORSK_VG3_NARRATIV_DEL9_CHAPTERS,
];
