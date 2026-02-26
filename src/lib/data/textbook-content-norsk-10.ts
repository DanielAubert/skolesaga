/**
 * Tekstbok innhold for Norsk 10. klasse
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Avsluttende år med fokus på eksamensforberedelse og avanserte ferdigheter.
 *
 * Innholdet er delt opp i del-filer:
 * - del1: Litteratur og eksamen (kap 1.1, 1.2, 2.1, 2.2)
 * - del2: Språk og medier (kap 3.1, 3.2, 4.1, 4.2)
 * - del3: Sammensatte tekster og kreativ skriving (kap 5.1, 5.2)
 */

import { NORSK_10_DEL1_CHAPTERS } from './textbook-content-norsk-10-del1';
import { NORSK_10_DEL2_CHAPTERS } from './textbook-content-norsk-10-del2';
import { NORSK_10_DEL3_CHAPTERS } from './textbook-content-norsk-10-del3';

// Re-eksporter individuelle kapitler
export * from './textbook-content-norsk-10-del1';
export * from './textbook-content-norsk-10-del2';
export * from './textbook-content-norsk-10-del3';

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const NORSK_10_CHAPTERS = [
  ...NORSK_10_DEL1_CHAPTERS,
  ...NORSK_10_DEL2_CHAPTERS,
  ...NORSK_10_DEL3_CHAPTERS,
];
