/**
 * Informasjonsteknologi 1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for Informasjonsteknologi 1 (VG2)
 * 41 delkapitler fordelt på 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Digital kompetanse og samfunn (1.1-1.5)
import { IT_1_DEL1_CHAPTERS } from './textbook-content-it-1-del1';

// Seksjon 2: Grunnleggende programmering (2.1-2.6)
import { IT_1_DEL2_CHAPTERS } from './textbook-content-it-1-del2';

// Seksjon 3: Algoritmer og problemløsning (3.1-3.5)
import { IT_1_DEL3_CHAPTERS } from './textbook-content-it-1-del3';

// Seksjon 4: Webteknologi – HTML og CSS (4.1-4.5)
import { IT_1_DEL4_CHAPTERS } from './textbook-content-it-1-del4';

// Seksjon 5: JavaScript og interaktivitet (5.1-5.5)
import { IT_1_DEL5_CHAPTERS } from './textbook-content-it-1-del5';

// Seksjon 6: Databaser (6.1-6.5)
import { IT_1_DEL6_CHAPTERS } from './textbook-content-it-1-del6';

// Seksjon 7: Nettverk, sikkerhet og personvern (7.1-7.5)
import { IT_1_DEL7_CHAPTERS } from './textbook-content-it-1-del7';

// Seksjon 8: Design, prosjekt og dokumentasjon (8.1-8.5)
import { IT_1_DEL8_CHAPTERS } from './textbook-content-it-1-del8';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const IT_1_CHAPTERS: TextbookChapter[] = [
  ...IT_1_DEL1_CHAPTERS,
  ...IT_1_DEL2_CHAPTERS,
  ...IT_1_DEL3_CHAPTERS,
  ...IT_1_DEL4_CHAPTERS,
  ...IT_1_DEL5_CHAPTERS,
  ...IT_1_DEL6_CHAPTERS,
  ...IT_1_DEL7_CHAPTERS,
  ...IT_1_DEL8_CHAPTERS,
];

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getIt1Chapter(chapterId: string): TextbookChapter | undefined {
  return IT_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
