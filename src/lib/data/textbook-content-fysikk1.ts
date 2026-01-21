/**
 * Tekstbok innhold for Fysikk 1 VG2
 *
 * Dekker LK20-kompetansemål for fysikk 1 (FYS01-02)
 * 24 kapitler fordelt på 6 seksjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Fysikkens metoder og verktøyfag
import { CHAPTER_FYS1_1_1 } from './textbook-chapter-fys1-1-1';
import { CHAPTER_FYS1_1_2 } from './textbook-chapter-fys1-1-2';
import { CHAPTER_FYS1_1_3 } from './textbook-chapter-fys1-1-3';

// Seksjon 2: Klassisk mekanikk - Kinematikk
import { CHAPTER_FYS1_2_1 } from './textbook-chapter-fys1-2-1';
import { CHAPTER_FYS1_2_2 } from './textbook-chapter-fys1-2-2';
import { CHAPTER_FYS1_2_3 } from './textbook-chapter-fys1-2-3';
import { CHAPTER_FYS1_2_4 } from './textbook-chapter-fys1-2-4';

// Seksjon 3: Klassisk mekanikk - Dynamikk
import { CHAPTER_FYS1_3_1 } from './textbook-chapter-fys1-3-1';
import { CHAPTER_FYS1_3_2 } from './textbook-chapter-fys1-3-2';
import { CHAPTER_FYS1_3_3 } from './textbook-chapter-fys1-3-3';
import { CHAPTER_FYS1_3_4 } from './textbook-chapter-fys1-3-4';

// Seksjon 4: Energi og bevaring
import { CHAPTER_FYS1_4_1 } from './textbook-chapter-fys1-4-1';
import { CHAPTER_FYS1_4_2 } from './textbook-chapter-fys1-4-2';
import { CHAPTER_FYS1_4_3 } from './textbook-chapter-fys1-4-3';
import { CHAPTER_FYS1_4_4 } from './textbook-chapter-fys1-4-4';

// Seksjon 5: Varme og energi
import { CHAPTER_FYS1_5_1 } from './textbook-chapter-fys1-5-1';
import { CHAPTER_FYS1_5_2 } from './textbook-chapter-fys1-5-2';
import { CHAPTER_FYS1_5_3 } from './textbook-chapter-fys1-5-3';
import { CHAPTER_FYS1_5_4 } from './textbook-chapter-fys1-5-4';

// Seksjon 6: Elektrisitet og moderne fysikk
import { CHAPTER_FYS1_6_1 } from './textbook-chapter-fys1-6-1';
import { CHAPTER_FYS1_6_2 } from './textbook-chapter-fys1-6-2';
import { CHAPTER_FYS1_6_3 } from './textbook-chapter-fys1-6-3';
import { CHAPTER_FYS1_6_4 } from './textbook-chapter-fys1-6-4';
import { CHAPTER_FYS1_6_5 } from './textbook-chapter-fys1-6-5';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const FYSIKK1_CHAPTERS: Record<string, TextbookChapter> = {
  // Seksjon 1: Fysikkens metoder og verktøyfag
  'fys1-1-1': CHAPTER_FYS1_1_1,
  'fys1-1-2': CHAPTER_FYS1_1_2,
  'fys1-1-3': CHAPTER_FYS1_1_3,

  // Seksjon 2: Klassisk mekanikk - Kinematikk
  'fys1-2-1': CHAPTER_FYS1_2_1,
  'fys1-2-2': CHAPTER_FYS1_2_2,
  'fys1-2-3': CHAPTER_FYS1_2_3,
  'fys1-2-4': CHAPTER_FYS1_2_4,

  // Seksjon 3: Klassisk mekanikk - Dynamikk
  'fys1-3-1': CHAPTER_FYS1_3_1,
  'fys1-3-2': CHAPTER_FYS1_3_2,
  'fys1-3-3': CHAPTER_FYS1_3_3,
  'fys1-3-4': CHAPTER_FYS1_3_4,

  // Seksjon 4: Energi og bevaring
  'fys1-4-1': CHAPTER_FYS1_4_1,
  'fys1-4-2': CHAPTER_FYS1_4_2,
  'fys1-4-3': CHAPTER_FYS1_4_3,
  'fys1-4-4': CHAPTER_FYS1_4_4,

  // Seksjon 5: Varme og energi
  'fys1-5-1': CHAPTER_FYS1_5_1,
  'fys1-5-2': CHAPTER_FYS1_5_2,
  'fys1-5-3': CHAPTER_FYS1_5_3,
  'fys1-5-4': CHAPTER_FYS1_5_4,

  // Seksjon 6: Elektrisitet og moderne fysikk
  'fys1-6-1': CHAPTER_FYS1_6_1,
  'fys1-6-2': CHAPTER_FYS1_6_2,
  'fys1-6-3': CHAPTER_FYS1_6_3,
  'fys1-6-4': CHAPTER_FYS1_6_4,
  'fys1-6-5': CHAPTER_FYS1_6_5,
};

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getFysikk1Chapter(chapterId: string): TextbookChapter | undefined {
  return FYSIKK1_CHAPTERS[chapterId];
}
