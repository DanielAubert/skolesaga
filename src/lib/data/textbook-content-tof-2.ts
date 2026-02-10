/**
 * Tekstbok innhold for Teknologi og forskningslære 2 VG3
 *
 * Dekker LK20-kompetansemål for ToF 2 (TOF02-01)
 * 45 delkapitler fordelt på 6 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Avansert forskningsmetode (1.1-1.7)
import { TOF_2_DEL1_CHAPTERS } from './textbook-content-tof-2-del1';

// Seksjon 2: Statistisk analyse og modellering (2.1-2.7)
import { TOF_2_DEL2_CHAPTERS } from './textbook-content-tof-2-del2';

// Seksjon 3: Nanoteknologi og materialer (3.1-3.7)
import { TOF_2_DEL3_CHAPTERS } from './textbook-content-tof-2-del3';

// Seksjon 4: Moderne teknologi (4.1-4.8)
import { TOF_2_DEL4_CHAPTERS } from './textbook-content-tof-2-del4';

// Seksjon 5: Teknologi, etikk og samfunn (5.1-5.7)
import { TOF_2_DEL5_CHAPTERS } from './textbook-content-tof-2-del5';

// Seksjon 6: Forskningsprosjekt og formidling (6.1-6.8)
import { TOF_2_DEL6_CHAPTERS } from './textbook-content-tof-2-del6';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const TOF_2_CHAPTERS: TextbookChapter[] = [
  ...TOF_2_DEL1_CHAPTERS,
  ...TOF_2_DEL2_CHAPTERS,
  ...TOF_2_DEL3_CHAPTERS,
  ...TOF_2_DEL4_CHAPTERS,
  ...TOF_2_DEL5_CHAPTERS,
  ...TOF_2_DEL6_CHAPTERS,
];

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getTof2Chapter(chapterId: string): TextbookChapter | undefined {
  return TOF_2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
