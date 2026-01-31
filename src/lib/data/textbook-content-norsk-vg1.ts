/**
 * Tekstbok innhold for Norsk VG1
 *
 * Følger LK20 læreplan for norsk på videregående skole.
 * Dekker 34 delkapitler organisert i 8 hovedkapitler:
 *
 * - Kapittel 1: Retorikk og sakprosa (1.1-1.4)
 * - Kapittel 2: Skjønnlitteratur (2.1-2.4)
 * - Kapittel 3: Litteraturhistorie (3.1-3.7)
 * - Kapittel 4: Språk og identitet (4.1-4.5)
 * - Kapittel 5: Skriving og kommunikasjon (5.1-5.4)
 * - Kapittel 6: Sammensatte tekster og medier (6.1-6.3)
 * - Kapittel 7: Samisk språk og kultur (7.1-7.3)
 * - Kapittel 8: Grammatikk og rettskriving (8.1-8.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import all chapter content from the five parts
import { NORSK_VG1_CHAPTERS_DEL1 } from './textbook-content-norsk-vg1-del1';
import { NORSK_VG1_CHAPTERS_DEL2 } from './textbook-content-norsk-vg1-del2';
import { NORSK_VG1_CHAPTERS_DEL3 } from './textbook-content-norsk-vg1-del3';
import { NORSK_VG1_CHAPTERS_DEL4 } from './textbook-content-norsk-vg1-del4';
import { NORSK_VG1_CHAPTERS_DEL5 } from './textbook-content-norsk-vg1-del5';

// Re-export individual chapters for direct import
export * from './textbook-content-norsk-vg1-del1';
export * from './textbook-content-norsk-vg1-del2';
export * from './textbook-content-norsk-vg1-del3';
export * from './textbook-content-norsk-vg1-del4';
export * from './textbook-content-norsk-vg1-del5';

// Combined export of all chapters
export const NORSK_VG1_CHAPTERS: TextbookChapter[] = [
  ...NORSK_VG1_CHAPTERS_DEL1,
  ...NORSK_VG1_CHAPTERS_DEL2,
  ...NORSK_VG1_CHAPTERS_DEL3,
  ...NORSK_VG1_CHAPTERS_DEL4,
  ...NORSK_VG1_CHAPTERS_DEL5,
];

// Helper function to get chapter by ID
export function getNorskVg1Chapter(chapterId: string): TextbookChapter | undefined {
  return NORSK_VG1_CHAPTERS.find(chapter => chapter.id === chapterId);
}

// Helper function to get chapters by section
export function getNorskVg1ChaptersBySection(sectionNumber: string): TextbookChapter[] {
  return NORSK_VG1_CHAPTERS.filter(chapter =>
    chapter.chapterNumber.startsWith(`${sectionNumber}.`)
  );
}
