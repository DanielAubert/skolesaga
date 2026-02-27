/**
 * Tekstbok innhold for Samfunnsfag 10. klasse
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 * Avsluttende år med fokus på eksamensforberedelse og aktuelle samfunnstemaer.
 *
 * Innholdet er delt opp i del-filer:
 * - del1: Demokrati, rettigheter og globalisering (kap 1-4)
 * - del2: Konflikter, politikk og økonomi (kap 5-7)
 * - del3: Medier, identitet og eksamen (kap 8-10)
 * - del4: Geografi og ressurser (kap 11-16)
 * - del5: Historie — Fra 1900 til i dag (kap 17-22)
 * - del6: Personlig økonomi og arbeidsliv (kap 23-28)
 * - del7: Urfolk, mangfold og livsmestring (kap 29-34)
 * - del8: Samfunnsfaglig metode og eksamen (kap 35-40)
 */

import { SAMFUNNSFAG_10_DEL1_CHAPTERS } from './textbook-content-samfunnsfag-10-del1';
import { SAMFUNNSFAG_10_DEL2_CHAPTERS } from './textbook-content-samfunnsfag-10-del2';
import { SAMFUNNSFAG_10_DEL3_CHAPTERS } from './textbook-content-samfunnsfag-10-del3';
import { SAMFUNNSFAG_10_DEL4_CHAPTERS } from './textbook-content-samfunnsfag-10-del4';
import { SAMFUNNSFAG_10_DEL5_CHAPTERS } from './textbook-content-samfunnsfag-10-del5';
import { SAMFUNNSFAG_10_DEL6_CHAPTERS } from './textbook-content-samfunnsfag-10-del6';
import { SAMFUNNSFAG_10_DEL7_CHAPTERS } from './textbook-content-samfunnsfag-10-del7';
import { SAMFUNNSFAG_10_DEL8_CHAPTERS } from './textbook-content-samfunnsfag-10-del8';

// Re-eksporter individuelle kapitler
export * from './textbook-content-samfunnsfag-10-del1';
export * from './textbook-content-samfunnsfag-10-del2';
export * from './textbook-content-samfunnsfag-10-del3';
export * from './textbook-content-samfunnsfag-10-del4';
export * from './textbook-content-samfunnsfag-10-del5';
export * from './textbook-content-samfunnsfag-10-del6';
export * from './textbook-content-samfunnsfag-10-del7';
export * from './textbook-content-samfunnsfag-10-del8';

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SAMFUNNSFAG_10_CHAPTERS = [
  ...SAMFUNNSFAG_10_DEL1_CHAPTERS,
  ...SAMFUNNSFAG_10_DEL2_CHAPTERS,
  ...SAMFUNNSFAG_10_DEL3_CHAPTERS,
  ...SAMFUNNSFAG_10_DEL4_CHAPTERS,
  ...SAMFUNNSFAG_10_DEL5_CHAPTERS,
  ...SAMFUNNSFAG_10_DEL6_CHAPTERS,
  ...SAMFUNNSFAG_10_DEL7_CHAPTERS,
  ...SAMFUNNSFAG_10_DEL8_CHAPTERS,
];
