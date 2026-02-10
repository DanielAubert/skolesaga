/**
 * Tekstbok innhold for Religion og etikk VG3
 *
 * Følger LK20 læreplan for religion og etikk.
 * 35 delkapitler fordelt på 6 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Religionsvitenskap – metode og begreper (1.1-1.5)
import { RELIGION_ETIKK_DEL1_CHAPTERS } from './textbook-content-religion-etikk-del1';

// Seksjon 2: Kristendom og islam (2.1-2.7)
import { RELIGION_ETIKK_DEL2_CHAPTERS } from './textbook-content-religion-etikk-del2';

// Seksjon 3: Østlige religioner og jødedom (3.1-3.6)
import { RELIGION_ETIKK_DEL3_CHAPTERS } from './textbook-content-religion-etikk-del3';

// Seksjon 4: Etikk og moralfilosofi (4.1-4.7)
import { RELIGION_ETIKK_DEL4_CHAPTERS } from './textbook-content-religion-etikk-del4';

// Seksjon 5: Livssyn og menneskerettigheter (5.1-5.6)
import { RELIGION_ETIKK_DEL5_CHAPTERS } from './textbook-content-religion-etikk-del5';

// Seksjon 6: Dialog, mangfold og eksistensielle spørsmål (6.1-6.5)
import { RELIGION_ETIKK_DEL6_CHAPTERS } from './textbook-content-religion-etikk-del6';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const RELIGION_ETIKK_CHAPTERS: TextbookChapter[] = [
  ...RELIGION_ETIKK_DEL1_CHAPTERS,
  ...RELIGION_ETIKK_DEL2_CHAPTERS,
  ...RELIGION_ETIKK_DEL3_CHAPTERS,
  ...RELIGION_ETIKK_DEL4_CHAPTERS,
  ...RELIGION_ETIKK_DEL5_CHAPTERS,
  ...RELIGION_ETIKK_DEL6_CHAPTERS,
];

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getReligionEtikkChapter(chapterId: string): TextbookChapter | undefined {
  return RELIGION_ETIKK_CHAPTERS.find(chapter => chapter.id === chapterId);
}
