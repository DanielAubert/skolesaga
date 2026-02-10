/**
 * Tekstbok innhold for Politikk og menneskerettigheter (VG2/VG3 valgfag)
 *
 * Følger LK20 læreplan for politikk og menneskerettigheter.
 * 35 delkapitler fordelt på 6 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Politikkens grunnlag (1.1-1.6)
import { POLITIKK_MENNESKERETT_DEL1_CHAPTERS } from './textbook-content-politikk-menneskerett-del1';

// Seksjon 2: Styreformer og politiske systemer (2.1-2.6)
import { POLITIKK_MENNESKERETT_DEL2_CHAPTERS } from './textbook-content-politikk-menneskerett-del2';

// Seksjon 3: Ideologier og partier (3.1-3.6)
import { POLITIKK_MENNESKERETT_DEL3_CHAPTERS } from './textbook-content-politikk-menneskerett-del3';

// Seksjon 4: Menneskerettigheter (4.1-4.6)
import { POLITIKK_MENNESKERETT_DEL4_CHAPTERS } from './textbook-content-politikk-menneskerett-del4';

// Seksjon 5: Internasjonal politikk (5.1-5.6)
import { POLITIKK_MENNESKERETT_DEL5_CHAPTERS } from './textbook-content-politikk-menneskerett-del5';

// Seksjon 6: Globale utfordringer og aktivisme (6.1-6.5)
import { POLITIKK_MENNESKERETT_DEL6_CHAPTERS } from './textbook-content-politikk-menneskerett-del6';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const POLITIKK_MENNESKERETT_CHAPTERS: TextbookChapter[] = [
  ...POLITIKK_MENNESKERETT_DEL1_CHAPTERS,
  ...POLITIKK_MENNESKERETT_DEL2_CHAPTERS,
  ...POLITIKK_MENNESKERETT_DEL3_CHAPTERS,
  ...POLITIKK_MENNESKERETT_DEL4_CHAPTERS,
  ...POLITIKK_MENNESKERETT_DEL5_CHAPTERS,
  ...POLITIKK_MENNESKERETT_DEL6_CHAPTERS,
];

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getPolitikkMenneskerettChapter(chapterId: string): TextbookChapter | undefined {
  return POLITIKK_MENNESKERETT_CHAPTERS.find(chapter => chapter.id === chapterId);
}
