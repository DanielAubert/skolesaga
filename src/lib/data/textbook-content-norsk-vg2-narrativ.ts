/**
 * Norsk VG2 - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del5
 * Optimalisert for lesing/lytting på mobil
 */

import { NORSK_VG2_NARRATIV_DEL1_CHAPTERS } from './textbook-content-norsk-vg2-narrativ-del1';
import { NORSK_VG2_NARRATIV_DEL2_CHAPTERS } from './textbook-content-norsk-vg2-narrativ-del2';
import { NORSK_VG2_NARRATIV_DEL3_CHAPTERS } from './textbook-content-norsk-vg2-narrativ-del3';
import { NORSK_VG2_NARRATIV_DEL4_CHAPTERS } from './textbook-content-norsk-vg2-narrativ-del4';
import { NORSK_VG2_NARRATIV_DEL5_CHAPTERS } from './textbook-content-norsk-vg2-narrativ-del5';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-norsk-vg2-narrativ-del1';
export * from './textbook-content-norsk-vg2-narrativ-del2';
export * from './textbook-content-norsk-vg2-narrativ-del3';
export * from './textbook-content-norsk-vg2-narrativ-del4';
export * from './textbook-content-norsk-vg2-narrativ-del5';

/**
 * Alle narrative kapitler for Norsk VG2
 *
 * Enhet 1: Norrøn tid og middelalder (1.1-1.5)
 * Enhet 2: 1500-1850 - Humanisme, barokk, opplysningstid (2.1-2.11)
 * Enhet 3: Romantikken og nasjonalromantikken (3.1-3.12)
 * Enhet 4: Språkhistorie (4.1-4.5)
 * Enhet 5: Retorikk og skriving (5.1-5.9)
 *
 * Totalt: 42 kapitler
 */
export const NORSK_VG2_NARRATIV_CHAPTERS = [
  // Enhet 1: Norrøn tid og middelalder (5 kapitler)
  ...NORSK_VG2_NARRATIV_DEL1_CHAPTERS,

  // Enhet 2: 1500-1850 (11 kapitler)
  ...NORSK_VG2_NARRATIV_DEL2_CHAPTERS,

  // Enhet 3: Romantikken og nasjonalromantikken (12 kapitler)
  ...NORSK_VG2_NARRATIV_DEL3_CHAPTERS,

  // Enhet 4: Språkhistorie (5 kapitler)
  ...NORSK_VG2_NARRATIV_DEL4_CHAPTERS,

  // Enhet 5: Retorikk og skriving (9 kapitler)
  ...NORSK_VG2_NARRATIV_DEL5_CHAPTERS,
];
