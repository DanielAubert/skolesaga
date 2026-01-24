/**
 * Tekstbok innhold for Engelsk VG1
 *
 * Følger LK20 læreplan for engelsk (ENG01-05) videregående.
 * Dekker 51 kapitler organisert i 12 seksjoner:
 *
 * - Seksjon 1: Language Learning and Communication Strategies (1.1-1.5)
 * - Seksjon 2: Oral Communication (2.1-2.4)
 * - Seksjon 3: Grammar and Text Structure (3.1-3.4)
 * - Seksjon 4: Reading and Literature (4.1-4.5)
 * - Seksjon 5: Non-fiction and Critical Reading (5.1-5.4)
 * - Seksjon 6: Writing Skills (6.1-6.5)
 * - Seksjon 7: English as a World Language (7.1-7.4)
 * - Seksjon 8: The United Kingdom (8.1-8.4)
 * - Seksjon 9: The United States (9.1-9.4)
 * - Seksjon 10: Other English-speaking Countries (10.1-10.4)
 * - Seksjon 11: Cultural Expressions (11.1-11.4)
 * - Seksjon 12: Exam Preparation (12.1-12.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import all chapter content from the four parts
import { ENGELSK_VG1_CHAPTERS_DEL1 } from './textbook-content-engelsk-vg1-del1';
import { ENGELSK_VG1_CHAPTERS_DEL2 } from './textbook-content-engelsk-vg1-del2';
import { ENGELSK_VG1_CHAPTERS_DEL3 } from './textbook-content-engelsk-vg1-del3';
import { ENGELSK_VG1_CHAPTERS_DEL4 } from './textbook-content-engelsk-vg1-del4';

// Re-export individual chapters for direct import
export * from './textbook-content-engelsk-vg1-del1';
export * from './textbook-content-engelsk-vg1-del2';
export * from './textbook-content-engelsk-vg1-del3';
export * from './textbook-content-engelsk-vg1-del4';

// Combined export of all chapters
export const ENGELSK_VG1_CHAPTERS: TextbookChapter[] = [
  ...ENGELSK_VG1_CHAPTERS_DEL1,
  ...ENGELSK_VG1_CHAPTERS_DEL2,
  ...ENGELSK_VG1_CHAPTERS_DEL3,
  ...ENGELSK_VG1_CHAPTERS_DEL4,
];

// Helper function to get chapter by ID
export function getEngelskVg1Chapter(chapterId: string): TextbookChapter | undefined {
  return ENGELSK_VG1_CHAPTERS.find(chapter => chapter.id === chapterId);
}

// Helper function to get chapters by section
export function getEngelskVg1ChaptersBySection(sectionNumber: string): TextbookChapter[] {
  return ENGELSK_VG1_CHAPTERS.filter(chapter =>
    chapter.chapterNumber.startsWith(`${sectionNumber}.`)
  );
}
