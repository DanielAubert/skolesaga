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
 * - del4: Retorikk og muntlig kommunikasjon (kap 6.1-6.6)
 * - del5: Språkhistorie og språkmangfold (kap 7.1-7.6)
 * - del6: Medier og kritisk lesing (kap 8.1-8.6)
 * - del7: Sammensatte tekster og digitale medier (kap 9.1-9.6)
 * - del8: Eksamensforberedelse og skrivetrening (kap 10.1-10.6)
 */

import { NORSK_10_DEL1_CHAPTERS } from './textbook-content-norsk-10-del1';
import { NORSK_10_DEL2_CHAPTERS } from './textbook-content-norsk-10-del2';
import { NORSK_10_DEL3_CHAPTERS } from './textbook-content-norsk-10-del3';
import { NORSK_10_DEL4_CHAPTERS } from './textbook-content-norsk-10-del4';
import { NORSK_10_DEL5_CHAPTERS } from './textbook-content-norsk-10-del5';
import { NORSK_10_DEL6_CHAPTERS } from './textbook-content-norsk-10-del6';
import { NORSK_10_DEL7_CHAPTERS } from './textbook-content-norsk-10-del7';
import { NORSK_10_DEL8_CHAPTERS } from './textbook-content-norsk-10-del8';

// Re-eksporter individuelle kapitler
export * from './textbook-content-norsk-10-del1';
export * from './textbook-content-norsk-10-del2';
export * from './textbook-content-norsk-10-del3';
export * from './textbook-content-norsk-10-del4';
export * from './textbook-content-norsk-10-del5';
export * from './textbook-content-norsk-10-del6';
export * from './textbook-content-norsk-10-del7';
export * from './textbook-content-norsk-10-del8';

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const NORSK_10_CHAPTERS = [
  ...NORSK_10_DEL1_CHAPTERS,
  ...NORSK_10_DEL2_CHAPTERS,
  ...NORSK_10_DEL3_CHAPTERS,
  ...NORSK_10_DEL4_CHAPTERS,
  ...NORSK_10_DEL5_CHAPTERS,
  ...NORSK_10_DEL6_CHAPTERS,
  ...NORSK_10_DEL7_CHAPTERS,
  ...NORSK_10_DEL8_CHAPTERS,
];
