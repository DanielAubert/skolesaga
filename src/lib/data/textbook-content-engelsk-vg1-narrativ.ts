/**
 * Engelsk VG1 - Narrative versjoner
 *
 * Aggregatorfil som samler alle narrative kapitler fra del1-del5
 * Optimalisert for lesing/lytting på mobil
 */

import { ENGELSK_VG1_NARRATIV_DEL1_CHAPTERS } from './textbook-content-engelsk-vg1-narrativ-del1';
import { ENGELSK_VG1_NARRATIV_DEL2_CHAPTERS } from './textbook-content-engelsk-vg1-narrativ-del2';
import { ENGELSK_VG1_NARRATIV_DEL3_CHAPTERS } from './textbook-content-engelsk-vg1-narrativ-del3';
import { ENGELSK_VG1_NARRATIV_DEL4_CHAPTERS } from './textbook-content-engelsk-vg1-narrativ-del4';
import { ENGELSK_VG1_NARRATIV_DEL5_CHAPTERS } from './textbook-content-engelsk-vg1-narrativ-del5';

// Re-eksporter individuelle kapitler for direkte import
export * from './textbook-content-engelsk-vg1-narrativ-del1';
export * from './textbook-content-engelsk-vg1-narrativ-del2';
export * from './textbook-content-engelsk-vg1-narrativ-del3';
export * from './textbook-content-engelsk-vg1-narrativ-del4';
export * from './textbook-content-engelsk-vg1-narrativ-del5';

/**
 * Alle narrative kapitler for Engelsk VG1
 *
 * Seksjon 1: Language Learning and Communication Strategies (1.1-1.5)
 * Seksjon 2: Oral Communication (2.1-2.4)
 * Seksjon 3: Grammar and Text Structure (3.1-3.4)
 * Seksjon 4: Reading and Literature (4.1-4.5)
 * Seksjon 5: Non-fiction and Critical Reading (5.1-5.4)
 * Seksjon 6: Writing Skills (6.1-6.5)
 * Seksjon 7: English as a World Language (7.1-7.4)
 * Seksjon 8: The United Kingdom (8.1-8.4)
 * Seksjon 9: The United States (9.1-9.4)
 * Seksjon 10: Other English-speaking Countries (10.1-10.4)
 * Seksjon 11: Cultural Expressions (11.1-11.4)
 * Seksjon 12: Exam Preparation (12.1-12.4)
 *
 * Totalt: 51 kapitler
 */
export const ENGELSK_VG1_NARRATIV_CHAPTERS = [
  // Seksjon 1-2: Language Learning and Oral Communication (9 kapitler)
  ...ENGELSK_VG1_NARRATIV_DEL1_CHAPTERS,

  // Seksjon 3-4: Grammar and Literature (9 kapitler)
  ...ENGELSK_VG1_NARRATIV_DEL2_CHAPTERS,

  // Seksjon 5-7: Non-fiction, Writing, World Englishes (13 kapitler)
  ...ENGELSK_VG1_NARRATIV_DEL3_CHAPTERS,

  // Seksjon 8-10: UK, USA, Other Countries (12 kapitler)
  ...ENGELSK_VG1_NARRATIV_DEL4_CHAPTERS,

  // Seksjon 11-12: Cultural Expressions and Exam Prep (8 kapitler)
  ...ENGELSK_VG1_NARRATIV_DEL5_CHAPTERS,
];
