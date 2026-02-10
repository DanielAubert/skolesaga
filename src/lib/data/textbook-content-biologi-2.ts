/**
 * Tekstbok innhold for Biologi 2 VG3
 *
 * Dekker LK20-kompetansemål for Biologi 2 (BIO02-02)
 * 45 delkapitler fordelt på 6 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Molekylærbiologi og genetikk (1.1-1.8)
import { BIOLOGI_2_DEL1_CHAPTERS } from './textbook-content-biologi-2-del1';

// Seksjon 2: Fysiologi I – Sirkulasjon, respirasjon og fordøyelse (2.1-2.7)
import { BIOLOGI_2_DEL2_CHAPTERS } from './textbook-content-biologi-2-del2';

// Seksjon 3: Fysiologi II – Nervesystem og hormoner (3.1-3.7)
import { BIOLOGI_2_DEL3_CHAPTERS } from './textbook-content-biologi-2-del3';

// Seksjon 4: Reproduksjon, utvikling og atferd (4.1-4.6)
import { BIOLOGI_2_DEL4_CHAPTERS } from './textbook-content-biologi-2-del4';

// Seksjon 5: Økologi og populasjonsbiologi (5.1-5.7)
import { BIOLOGI_2_DEL5_CHAPTERS } from './textbook-content-biologi-2-del5';

// Seksjon 6: Bioteknologi og metode (6.1-6.8)
import { BIOLOGI_2_DEL6_CHAPTERS } from './textbook-content-biologi-2-del6';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const BIOLOGI_2_CHAPTERS: TextbookChapter[] = [
  ...BIOLOGI_2_DEL1_CHAPTERS,
  ...BIOLOGI_2_DEL2_CHAPTERS,
  ...BIOLOGI_2_DEL3_CHAPTERS,
  ...BIOLOGI_2_DEL4_CHAPTERS,
  ...BIOLOGI_2_DEL5_CHAPTERS,
  ...BIOLOGI_2_DEL6_CHAPTERS,
];

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getBiologi2Chapter(chapterId: string): TextbookChapter | undefined {
  return BIOLOGI_2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
