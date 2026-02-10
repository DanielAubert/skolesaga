/**
 * Psykologi 2 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for Psykologi 2 (VG3)
 * 40 delkapitler fordelt på 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Sosial påvirkning og grupper (1.1-1.5)
import { PSYKOLOGI_2_DEL1_CHAPTERS } from './textbook-content-psykologi-2-del1';

// Seksjon 2: Kommunikasjon og konflikter (2.1-2.5)
import { PSYKOLOGI_2_DEL2_CHAPTERS } from './textbook-content-psykologi-2-del2';

// Seksjon 3: Sosial kompetanse og utenforskap (3.1-3.5)
import { PSYKOLOGI_2_DEL3_CHAPTERS } from './textbook-content-psykologi-2-del3';

// Seksjon 4: Psykisk helse – normalitet og avvik (4.1-4.5)
import { PSYKOLOGI_2_DEL4_CHAPTERS } from './textbook-content-psykologi-2-del4';

// Seksjon 5: Behandling av psykiske lidelser (5.1-5.5)
import { PSYKOLOGI_2_DEL5_CHAPTERS } from './textbook-content-psykologi-2-del5';

// Seksjon 6: Biologisk, psykologisk og sosial helse (6.1-6.5)
import { PSYKOLOGI_2_DEL6_CHAPTERS } from './textbook-content-psykologi-2-del6';

// Seksjon 7: Forskningsmetode og vitenskapelig tilnærming (7.1-7.5)
import { PSYKOLOGI_2_DEL7_CHAPTERS } from './textbook-content-psykologi-2-del7';

// Seksjon 8: Perspektiver og anvendelser (8.1-8.5)
import { PSYKOLOGI_2_DEL8_CHAPTERS } from './textbook-content-psykologi-2-del8';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const PSYKOLOGI_2_CHAPTERS: TextbookChapter[] = [
  ...PSYKOLOGI_2_DEL1_CHAPTERS,
  ...PSYKOLOGI_2_DEL2_CHAPTERS,
  ...PSYKOLOGI_2_DEL3_CHAPTERS,
  ...PSYKOLOGI_2_DEL4_CHAPTERS,
  ...PSYKOLOGI_2_DEL5_CHAPTERS,
  ...PSYKOLOGI_2_DEL6_CHAPTERS,
  ...PSYKOLOGI_2_DEL7_CHAPTERS,
  ...PSYKOLOGI_2_DEL8_CHAPTERS,
];

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getPsykologi2Chapter(chapterId: string): TextbookChapter | undefined {
  return PSYKOLOGI_2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
