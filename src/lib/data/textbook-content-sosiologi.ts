/**
 * Tekstbok innhold for Sosiologi og sosialantropologi VG3
 *
 * Følger LK20 læreplan for programfaget sosiologi og sosialantropologi.
 * 39 delkapitler fordelt på 6 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Fagenes grunnlag (1.1-1.5)
import { SOSIOLOGI_DEL1_CHAPTERS } from './textbook-content-sosiologi-del1';

// Seksjon 2: Sosialisering, identitet og kultur (2.1-2.7)
import { SOSIOLOGI_DEL2_CHAPTERS } from './textbook-content-sosiologi-del2';

// Seksjon 3: Familie, ulikhet og klasse (3.1-3.7)
import { SOSIOLOGI_DEL3_CHAPTERS } from './textbook-content-sosiologi-del3';

// Seksjon 4: Kjønn, makt og politikk (4.1-4.7)
import { SOSIOLOGI_DEL4_CHAPTERS } from './textbook-content-sosiologi-del4';

// Seksjon 5: Media, globalisering og migrasjon (5.1-5.7)
import { SOSIOLOGI_DEL5_CHAPTERS } from './textbook-content-sosiologi-del5';

// Seksjon 6: Metode og forskningsetikk (6.1-6.5)
import { SOSIOLOGI_DEL6_CHAPTERS } from './textbook-content-sosiologi-del6';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const SOSIOLOGI_CHAPTERS: TextbookChapter[] = [
  ...SOSIOLOGI_DEL1_CHAPTERS,
  ...SOSIOLOGI_DEL2_CHAPTERS,
  ...SOSIOLOGI_DEL3_CHAPTERS,
  ...SOSIOLOGI_DEL4_CHAPTERS,
  ...SOSIOLOGI_DEL5_CHAPTERS,
  ...SOSIOLOGI_DEL6_CHAPTERS,
];

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getSosiologiChapter(chapterId: string): TextbookChapter | undefined {
  return SOSIOLOGI_CHAPTERS.find(chapter => chapter.id === chapterId);
}
