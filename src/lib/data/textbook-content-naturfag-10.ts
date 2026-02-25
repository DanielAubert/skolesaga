/**
 * Tekstbok innhold for Naturfag 10. klasse
 *
 * Dekker LK20-kompetansemål for naturfag på 10. trinn
 *
 * Innholdet er delt opp i seksjonsvis filer:
 * - kap1: Naturvitenskapelige metoder (1.1-1.5)
 * - kap2: Kjemi (2.1-2.6)
 * - kap2b: Organisk kjemi (2.7-2.8)
 * - kap3: Fysikk og energi (3.1-3.6)
 * - kap4: Biologi (4.1-4.6)
 * - kap4b: Stoffenes kretsløp og naturressurser (4.7-4.8)
 * - kap5: Kropp og helse (5.1-5.3, 5.5)
 * - kap5b: Rusmidler, legemidler og doping (5.6)
 * - kap6: Teknologi og forskning (6.1-6.5)
 * - kap7-del1: Seksuell og reproduktiv helse - Pubertet (7.1)
 * - kap7-del2: Seksuell og reproduktiv helse - Reproduksjonssystemene (7.2)
 * - kap7-del3: Seksuell og reproduktiv helse - Befruktning, graviditet og fødsel (7.3)
 * - kap7b: Seksuell og reproduktiv helse - Prevensjon og samtykke (7.4-7.5)
 * - kap4c: Evolusjon og artsdannelse (4.3b)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Seksjon 1: Naturvitenskapelige metoder
import {
  CHAPTER_NAT10_1_1,
  CHAPTER_NAT10_1_2,
  CHAPTER_NAT10_1_3,
  CHAPTER_NAT10_1_4,
  CHAPTER_NAT10_1_5,
} from './textbook-content-naturfag-10-kap1';

// Seksjon 2: Kjemi
import {
  CHAPTER_NAT10_2_1,
  CHAPTER_NAT10_2_2,
  CHAPTER_NAT10_2_3,
  CHAPTER_NAT10_2_4,
  CHAPTER_NAT10_2_5,
  CHAPTER_NAT10_2_6,
} from './textbook-content-naturfag-10-kap2';

// Seksjon 2b: Organisk kjemi
import {
  CHAPTER_NAT10_2_7,
  CHAPTER_NAT10_2_8,
} from './textbook-content-naturfag-10-kap2b';

// Seksjon 3: Fysikk og energi
import {
  CHAPTER_NAT10_3_1,
  CHAPTER_NAT10_3_2,
  CHAPTER_NAT10_3_3,
  CHAPTER_NAT10_3_4,
  CHAPTER_NAT10_3_5,
  CHAPTER_NAT10_3_6,
} from './textbook-content-naturfag-10-kap3';

// Seksjon 4: Biologi
import {
  CHAPTER_NAT10_4_1,
  CHAPTER_NAT10_4_2,
  CHAPTER_NAT10_4_3,
  CHAPTER_NAT10_4_4,
  CHAPTER_NAT10_4_5,
  CHAPTER_NAT10_4_6,
} from './textbook-content-naturfag-10-kap4';

// Seksjon 4b: Stoffenes kretsløp og naturressurser
import {
  CHAPTER_NAT10_4_7,
  CHAPTER_NAT10_4_8,
} from './textbook-content-naturfag-10-kap4b';

// Seksjon 5: Kropp og helse
import {
  CHAPTER_NAT10_5_1,
  CHAPTER_NAT10_5_2,
  CHAPTER_NAT10_5_3,
  CHAPTER_NAT10_5_5,
} from './textbook-content-naturfag-10-kap5';

// Seksjon 5b: Rusmidler, legemidler og doping
import {
  CHAPTER_NAT10_5_6,
} from './textbook-content-naturfag-10-kap5b';

// Seksjon 6: Teknologi og forskning
import {
  CHAPTER_NAT10_6_1,
  CHAPTER_NAT10_6_2,
  CHAPTER_NAT10_6_3,
  CHAPTER_NAT10_6_4,
  CHAPTER_NAT10_6_5,
} from './textbook-content-naturfag-10-kap6';

// Seksjon 7: Seksuell og reproduktiv helse (splittet ut fra tidligere kap 5.4)
import { CHAPTER_NAT10_7_1 } from './textbook-content-naturfag-10-kap7-del1';
import { CHAPTER_NAT10_7_2 } from './textbook-content-naturfag-10-kap7-del2';
import { CHAPTER_NAT10_7_3 } from './textbook-content-naturfag-10-kap7-del3';
import {
  CHAPTER_NAT10_7_4,
  CHAPTER_NAT10_7_5,
} from './textbook-content-naturfag-10-kap7b';

// Seksjon 4c: Evolusjon og artsdannelse (splittet ut fra tidligere kap 4.3)
import { CHAPTER_NAT10_4_3B } from './textbook-content-naturfag-10-kap4c';

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const NATURFAG_10_CHAPTERS: Record<string, TextbookChapter> = {
  'naturfag-10-1-1': CHAPTER_NAT10_1_1,
  'naturfag-10-1-2': CHAPTER_NAT10_1_2,
  'naturfag-10-1-3': CHAPTER_NAT10_1_3,
  'naturfag-10-1-4': CHAPTER_NAT10_1_4,
  'naturfag-10-1-5': CHAPTER_NAT10_1_5,
  'naturfag-10-2-1': CHAPTER_NAT10_2_1,
  'naturfag-10-2-2': CHAPTER_NAT10_2_2,
  'naturfag-10-2-3': CHAPTER_NAT10_2_3,
  'naturfag-10-2-4': CHAPTER_NAT10_2_4,
  'naturfag-10-2-5': CHAPTER_NAT10_2_5,
  'naturfag-10-2-6': CHAPTER_NAT10_2_6,
  'naturfag-10-2-7': CHAPTER_NAT10_2_7,
  'naturfag-10-2-8': CHAPTER_NAT10_2_8,
  'naturfag-10-3-1': CHAPTER_NAT10_3_1,
  'naturfag-10-3-2': CHAPTER_NAT10_3_2,
  'naturfag-10-3-3': CHAPTER_NAT10_3_3,
  'naturfag-10-3-4': CHAPTER_NAT10_3_4,
  'naturfag-10-3-5': CHAPTER_NAT10_3_5,
  'naturfag-10-3-6': CHAPTER_NAT10_3_6,
  'naturfag-10-4-1': CHAPTER_NAT10_4_1,
  'naturfag-10-4-2': CHAPTER_NAT10_4_2,
  'naturfag-10-4-3': CHAPTER_NAT10_4_3,
  'naturfag-10-4-3b': CHAPTER_NAT10_4_3B,
  'naturfag-10-4-4': CHAPTER_NAT10_4_4,
  'naturfag-10-4-5': CHAPTER_NAT10_4_5,
  'naturfag-10-4-6': CHAPTER_NAT10_4_6,
  'naturfag-10-4-7': CHAPTER_NAT10_4_7,
  'naturfag-10-4-8': CHAPTER_NAT10_4_8,
  'naturfag-10-5-1': CHAPTER_NAT10_5_1,
  'naturfag-10-5-2': CHAPTER_NAT10_5_2,
  'naturfag-10-5-3': CHAPTER_NAT10_5_3,
  'naturfag-10-5-5': CHAPTER_NAT10_5_5,
  'naturfag-10-5-6': CHAPTER_NAT10_5_6,
  'naturfag-10-6-1': CHAPTER_NAT10_6_1,
  'naturfag-10-6-2': CHAPTER_NAT10_6_2,
  'naturfag-10-6-3': CHAPTER_NAT10_6_3,
  'naturfag-10-6-4': CHAPTER_NAT10_6_4,
  'naturfag-10-6-5': CHAPTER_NAT10_6_5,
  'naturfag-10-7-1': CHAPTER_NAT10_7_1,
  'naturfag-10-7-2': CHAPTER_NAT10_7_2,
  'naturfag-10-7-3': CHAPTER_NAT10_7_3,
  'naturfag-10-7-4': CHAPTER_NAT10_7_4,
  'naturfag-10-7-5': CHAPTER_NAT10_7_5,
};

// ============================================================================
// Hjelpefunksjon for å hente kapittel
// ============================================================================

export function getNaturfag10Chapter(chapterId: string): TextbookChapter | undefined {
  return NATURFAG_10_CHAPTERS[chapterId];
}

export function getAllNaturfag10ChapterIds(): string[] {
  return Object.keys(NATURFAG_10_CHAPTERS);
}
