/**
 * Tekstbok innhold for Engelsk 10. klasse
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Avsluttende år med fokus på eksamensforberedelse og avanserte ferdigheter.
 *
 * Innholdet er delt opp i del-filer:
 * - del1: Eksamen og analyse (kap 1-4)
 * - del2: Kommunikasjon og argumentasjon (kap 5-7)
 * - del3: Globale utfordringer og identitet (kap 8-9)
 * - del4: Kritisk lesing (kap 10)
 * - del5: Language and Grammar Mastery (kap 11-16)
 * - del6: Literature and Cultural Understanding (kap 17-22)
 * - del7: Society, Media and Global Issues (kap 23-28)
 * - del8: Exam Preparation and Advanced Skills (kap 29-34)
 * - del9: Film, Language and History (kap 35-40)
 */

import { ENGELSK_10_DEL1_CHAPTERS } from './textbook-content-engelsk-10-del1';
import { ENGELSK_10_DEL2_CHAPTERS } from './textbook-content-engelsk-10-del2';
import { ENGELSK_10_DEL3_CHAPTERS } from './textbook-content-engelsk-10-del3';
import { ENGELSK_10_DEL4_CHAPTERS } from './textbook-content-engelsk-10-del4';
import { ENGELSK_10_DEL5_CHAPTERS } from './textbook-content-engelsk-10-del5';
import { ENGELSK_10_DEL6_CHAPTERS } from './textbook-content-engelsk-10-del6';
import { ENGELSK_10_DEL7_CHAPTERS } from './textbook-content-engelsk-10-del7';
import { ENGELSK_10_DEL8_CHAPTERS } from './textbook-content-engelsk-10-del8';
import { ENGELSK_10_DEL9_CHAPTERS } from './textbook-content-engelsk-10-del9';

// Re-eksporter individuelle kapitler
export * from './textbook-content-engelsk-10-del1';
export * from './textbook-content-engelsk-10-del2';
export * from './textbook-content-engelsk-10-del3';
export * from './textbook-content-engelsk-10-del4';
export * from './textbook-content-engelsk-10-del5';
export * from './textbook-content-engelsk-10-del6';
export * from './textbook-content-engelsk-10-del7';
export * from './textbook-content-engelsk-10-del8';
export * from './textbook-content-engelsk-10-del9';

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const ENGELSK_10_CHAPTERS = [
  ...ENGELSK_10_DEL1_CHAPTERS,
  ...ENGELSK_10_DEL2_CHAPTERS,
  ...ENGELSK_10_DEL3_CHAPTERS,
  ...ENGELSK_10_DEL4_CHAPTERS,
  ...ENGELSK_10_DEL5_CHAPTERS,
  ...ENGELSK_10_DEL6_CHAPTERS,
  ...ENGELSK_10_DEL7_CHAPTERS,
  ...ENGELSK_10_DEL8_CHAPTERS,
  ...ENGELSK_10_DEL9_CHAPTERS,
];
