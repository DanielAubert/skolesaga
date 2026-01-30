/**
 * Tekstbok innhold for Norsk VG2
 *
 * Følger LK20 læreplan for norsk på videregående skole.
 * Andre år med fokus på norrøn litteratur, litteraturhistorie 1500-1850,
 * språkhistorie og retorikk.
 *
 * Dekker 35 kapitler organisert i 5 enheter:
 *
 * - Enhet 1: Norrøn tid og middelalder (1.1-1.5)
 * - Enhet 2: Fra renessanse til opplysningstid (2.1-2.10)
 * - Enhet 3: Romantikk og nasjonsbygging (3.1-3.9)
 * - Enhet 4: Språkhistorie (4.1-4.4)
 * - Enhet 5: Retorikk og fagskriving (5.1-5.7)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import all chapter content from the five parts
import { NORSK_VG2_CHAPTERS_DEL1 } from './textbook-content-norsk-vg2-del1';
import { NORSK_VG2_CHAPTERS_DEL2 } from './textbook-content-norsk-vg2-del2';
import { NORSK_VG2_CHAPTERS_DEL3 } from './textbook-content-norsk-vg2-del3';
import { NORSK_VG2_CHAPTERS_DEL4 } from './textbook-content-norsk-vg2-del4';
import { NORSK_VG2_CHAPTERS_DEL5 } from './textbook-content-norsk-vg2-del5';

// Re-export individual chapters for direct import
export * from './textbook-content-norsk-vg2-del1';
export * from './textbook-content-norsk-vg2-del2';
export * from './textbook-content-norsk-vg2-del3';
export * from './textbook-content-norsk-vg2-del4';
export * from './textbook-content-norsk-vg2-del5';

// Combined export of all chapters
export const NORSK_VG2_CHAPTERS: TextbookChapter[] = [
  ...NORSK_VG2_CHAPTERS_DEL1,
  ...NORSK_VG2_CHAPTERS_DEL2,
  ...NORSK_VG2_CHAPTERS_DEL3,
  ...NORSK_VG2_CHAPTERS_DEL4,
  ...NORSK_VG2_CHAPTERS_DEL5,
];

// Helper function to get chapter by ID
export function getNorskVg2Chapter(chapterId: string): TextbookChapter | undefined {
  return NORSK_VG2_CHAPTERS.find(chapter => chapter.id === chapterId);
}

// Helper function to get chapters by section
export function getNorskVg2ChaptersBySection(sectionNumber: string): TextbookChapter[] {
  return NORSK_VG2_CHAPTERS.filter(chapter =>
    chapter.chapterNumber.startsWith(`${sectionNumber}.`)
  );
}
