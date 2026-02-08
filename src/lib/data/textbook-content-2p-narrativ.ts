/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – NARRATIV VERSJON
 * Hovedfil som samler alle narrative kapitler for 2P
 *
 * Importerer fra del-filer:
 * - del1: Seksjon 1 – Økonomi (kap 1.1–1.4)
 * - del2: Seksjon 2 – Funksjoner i praksis (kap 2.1–2.3)
 * - del3: Seksjon 3 – Statistikk (kap 3.1–3.3)
 * - del4: Seksjon 4 – Sannsynlighet (kap 4.1–4.3)
 * - del5: Seksjon 5–6 – Geometri og Modellering (kap 5.1–6.2)
 */

import {
  CHAPTER_2P_1_1_NARRATIV,
  CHAPTER_2P_1_2_NARRATIV,
  CHAPTER_2P_1_3_NARRATIV,
  CHAPTER_2P_1_4_NARRATIV,
} from './textbook-content-2p-narrativ-del1';

import {
  CHAPTER_2P_2_1_NARRATIV,
  CHAPTER_2P_2_2_NARRATIV,
  CHAPTER_2P_2_3_NARRATIV,
} from './textbook-content-2p-narrativ-del2';

import {
  CHAPTER_2P_3_1_NARRATIV,
  CHAPTER_2P_3_2_NARRATIV,
  CHAPTER_2P_3_3_NARRATIV,
} from './textbook-content-2p-narrativ-del3';

import {
  CHAPTER_2P_4_1_NARRATIV,
  CHAPTER_2P_4_2_NARRATIV,
  CHAPTER_2P_4_3_NARRATIV,
} from './textbook-content-2p-narrativ-del4';

import {
  CHAPTER_2P_5_1_NARRATIV,
  CHAPTER_2P_5_2_NARRATIV,
  CHAPTER_2P_6_1_NARRATIV,
  CHAPTER_2P_6_2_NARRATIV,
} from './textbook-content-2p-narrativ-del5';

// ============================================================================
// EKSPORT
// ============================================================================

export const MATEMATIKK_2P_NARRATIV_CHAPTERS = [
  // Seksjon 1: Økonomi
  CHAPTER_2P_1_1_NARRATIV,
  CHAPTER_2P_1_2_NARRATIV,
  CHAPTER_2P_1_3_NARRATIV,
  CHAPTER_2P_1_4_NARRATIV,
  // Seksjon 2: Funksjoner i praksis
  CHAPTER_2P_2_1_NARRATIV,
  CHAPTER_2P_2_2_NARRATIV,
  CHAPTER_2P_2_3_NARRATIV,
  // Seksjon 3: Statistikk
  CHAPTER_2P_3_1_NARRATIV,
  CHAPTER_2P_3_2_NARRATIV,
  CHAPTER_2P_3_3_NARRATIV,
  // Seksjon 4: Sannsynlighet
  CHAPTER_2P_4_1_NARRATIV,
  CHAPTER_2P_4_2_NARRATIV,
  CHAPTER_2P_4_3_NARRATIV,
  // Seksjon 5: Geometri i praksis
  CHAPTER_2P_5_1_NARRATIV,
  CHAPTER_2P_5_2_NARRATIV,
  // Seksjon 6: Modellering
  CHAPTER_2P_6_1_NARRATIV,
  CHAPTER_2P_6_2_NARRATIV,
];
