/**
 * Tekstbok innhold for Teknologi og forskningslære 1 VG2
 *
 * Dekker LK20-kompetansemål for ToF 1 (TOF01-01)
 * 45 delkapitler fordelt på 6 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Vitenskapelig metode (1.1-1.8)
import { TOF_1_DEL1_CHAPTERS } from './textbook-content-tof-1-del1';

// Seksjon 2: Data og analyse (2.1-2.7)
import { TOF_1_DEL2_CHAPTERS } from './textbook-content-tof-1-del2';

// Seksjon 3: Teknologi og samfunn (3.1-3.7)
import { TOF_1_DEL3_CHAPTERS } from './textbook-content-tof-1-del3';

// Seksjon 4: Elektronikk og kretser (4.1-4.8)
import { TOF_1_DEL4_CHAPTERS } from './textbook-content-tof-1-del4';

// Seksjon 5: Programmering (5.1-5.7)
import { TOF_1_DEL5_CHAPTERS } from './textbook-content-tof-1-del5';

// Seksjon 6: Energi, materialer og prosjekt (6.1-6.8)
import { TOF_1_DEL6_CHAPTERS } from './textbook-content-tof-1-del6';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const TOF_1_CHAPTERS: TextbookChapter[] = [
  ...TOF_1_DEL1_CHAPTERS,
  ...TOF_1_DEL2_CHAPTERS,
  ...TOF_1_DEL3_CHAPTERS,
  ...TOF_1_DEL4_CHAPTERS,
  ...TOF_1_DEL5_CHAPTERS,
  ...TOF_1_DEL6_CHAPTERS,
];

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getTof1Chapter(chapterId: string): TextbookChapter | undefined {
  return TOF_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
