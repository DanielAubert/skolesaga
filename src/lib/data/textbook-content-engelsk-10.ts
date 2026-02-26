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
 */

import { ENGELSK_10_DEL1_CHAPTERS } from './textbook-content-engelsk-10-del1';
import { ENGELSK_10_DEL2_CHAPTERS } from './textbook-content-engelsk-10-del2';
import { ENGELSK_10_DEL3_CHAPTERS } from './textbook-content-engelsk-10-del3';
import { ENGELSK_10_DEL4_CHAPTERS } from './textbook-content-engelsk-10-del4';

// Re-eksporter individuelle kapitler
export * from './textbook-content-engelsk-10-del1';
export * from './textbook-content-engelsk-10-del2';
export * from './textbook-content-engelsk-10-del3';
export * from './textbook-content-engelsk-10-del4';

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const ENGELSK_10_CHAPTERS = [
  ...ENGELSK_10_DEL1_CHAPTERS,
  ...ENGELSK_10_DEL2_CHAPTERS,
  ...ENGELSK_10_DEL3_CHAPTERS,
  ...ENGELSK_10_DEL4_CHAPTERS,
];
