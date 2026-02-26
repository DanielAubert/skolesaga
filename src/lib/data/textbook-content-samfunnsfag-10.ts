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
 */

import { SAMFUNNSFAG_10_DEL1_CHAPTERS } from './textbook-content-samfunnsfag-10-del1';
import { SAMFUNNSFAG_10_DEL2_CHAPTERS } from './textbook-content-samfunnsfag-10-del2';
import { SAMFUNNSFAG_10_DEL3_CHAPTERS } from './textbook-content-samfunnsfag-10-del3';

// Re-eksporter individuelle kapitler
export * from './textbook-content-samfunnsfag-10-del1';
export * from './textbook-content-samfunnsfag-10-del2';
export * from './textbook-content-samfunnsfag-10-del3';

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SAMFUNNSFAG_10_CHAPTERS = [
  ...SAMFUNNSFAG_10_DEL1_CHAPTERS,
  ...SAMFUNNSFAG_10_DEL2_CHAPTERS,
  ...SAMFUNNSFAG_10_DEL3_CHAPTERS,
];
