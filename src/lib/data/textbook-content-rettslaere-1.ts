/**
 * Tekstbok innhold for Rettslære 1 VG2
 *
 * Dekker LK20-kompetansemål for Rettslære 1 (REL01-01)
 * 43 delkapitler fordelt på 6 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Rettssystemet (1.1-1.7)
import { RETTSLAERE_1_DEL1_CHAPTERS } from './textbook-content-rettslaere-1-del1';

// Seksjon 2: Avtale- og forbrukerrett (2.1-2.8)
import { RETTSLAERE_1_DEL2_CHAPTERS } from './textbook-content-rettslaere-1-del2';

// Seksjon 3: Erstatningsrett (3.1-3.6)
import { RETTSLAERE_1_DEL3_CHAPTERS } from './textbook-content-rettslaere-1-del3';

// Seksjon 4: Strafferett (4.1-4.7)
import { RETTSLAERE_1_DEL4_CHAPTERS } from './textbook-content-rettslaere-1-del4';

// Seksjon 5: Arbeids-, familie- og arverett (5.1-5.8)
import { RETTSLAERE_1_DEL5_CHAPTERS } from './textbook-content-rettslaere-1-del5';

// Seksjon 6: Rettsprosess og konfliktløsning (6.1-6.7)
import { RETTSLAERE_1_DEL6_CHAPTERS } from './textbook-content-rettslaere-1-del6';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const RETTSLAERE_1_CHAPTERS: TextbookChapter[] = [
  ...RETTSLAERE_1_DEL1_CHAPTERS,
  ...RETTSLAERE_1_DEL2_CHAPTERS,
  ...RETTSLAERE_1_DEL3_CHAPTERS,
  ...RETTSLAERE_1_DEL4_CHAPTERS,
  ...RETTSLAERE_1_DEL5_CHAPTERS,
  ...RETTSLAERE_1_DEL6_CHAPTERS,
];

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getRettslaere1Chapter(chapterId: string): TextbookChapter | undefined {
  return RETTSLAERE_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
