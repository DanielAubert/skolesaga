/**
 * Informasjonsteknologi 2 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for Informasjonsteknologi 2 (VG3)
 * 40 delkapitler fordelt på 8 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Objektorientert programmering – grunnlag (1.1-1.5)
import { IT_2_DEL1_CHAPTERS } from './textbook-content-it-2-del1';

// Seksjon 2: Avansert OOP og designmønstre (2.1-2.5)
import { IT_2_DEL2_CHAPTERS } from './textbook-content-it-2-del2';

// Seksjon 3: Algoritmer og databehandling (3.1-3.5)
import { IT_2_DEL3_CHAPTERS } from './textbook-content-it-2-del3';

// Seksjon 4: API-er og nettverksprogrammering (4.1-4.5)
import { IT_2_DEL4_CHAPTERS } from './textbook-content-it-2-del4';

// Seksjon 5: Databaser og datalagring (5.1-5.5)
import { IT_2_DEL5_CHAPTERS } from './textbook-content-it-2-del5';

// Seksjon 6: Webutvikling og brukeropplevelse (6.1-6.5)
import { IT_2_DEL6_CHAPTERS } from './textbook-content-it-2-del6';

// Seksjon 7: Sikkerhet, etikk og standarder (7.1-7.5)
import { IT_2_DEL7_CHAPTERS } from './textbook-content-it-2-del7';

// Seksjon 8: Systemutvikling og prosjekt (8.1-8.5)
import { IT_2_DEL8_CHAPTERS } from './textbook-content-it-2-del8';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const IT_2_CHAPTERS: TextbookChapter[] = [
  ...IT_2_DEL1_CHAPTERS,
  ...IT_2_DEL2_CHAPTERS,
  ...IT_2_DEL3_CHAPTERS,
  ...IT_2_DEL4_CHAPTERS,
  ...IT_2_DEL5_CHAPTERS,
  ...IT_2_DEL6_CHAPTERS,
  ...IT_2_DEL7_CHAPTERS,
  ...IT_2_DEL8_CHAPTERS,
];

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getIt2Chapter(chapterId: string): TextbookChapter | undefined {
  return IT_2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
