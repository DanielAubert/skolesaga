/**
 * Tekstbok innhold for Geografi VG1
 *
 * Følger LK20 læreplan for geografi.
 * Dekker naturgeografi, samfunnsgeografi og bærekraftig utvikling.
 *
 * Organisert i 25 kapitler fordelt på 5 deler:
 * - Del 1: Naturgeografi grunnlag (kap 1-5)
 * - Del 2: Samfunnsgeografi grunnlag (kap 6-10)
 * - Del 3: Naturgeografi fordypning (kap 11-15)
 * - Del 4: Samfunnsgeografi fordypning (kap 16-20)
 * - Del 5: Globalisering, geopolitikk og metode (kap 21-25)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import all chapter content from the five parts
import { GEOGRAFI_CHAPTERS_DEL1 } from './textbook-content-geografi-del1';
import { GEOGRAFI_CHAPTERS_DEL2 } from './textbook-content-geografi-del2';
import { GEOGRAFI_CHAPTERS_DEL3 } from './textbook-content-geografi-del3';
import { GEOGRAFI_CHAPTERS_DEL4 } from './textbook-content-geografi-del4';
import { GEOGRAFI_CHAPTERS_DEL5 } from './textbook-content-geografi-del5';

// Re-export individual chapters for direct import
export * from './textbook-content-geografi-del1';
export * from './textbook-content-geografi-del2';
export * from './textbook-content-geografi-del3';
export * from './textbook-content-geografi-del4';
export * from './textbook-content-geografi-del5';

// Combined export of all chapters
export const GEOGRAFI_CHAPTERS: TextbookChapter[] = [
  ...GEOGRAFI_CHAPTERS_DEL1,
  ...GEOGRAFI_CHAPTERS_DEL2,
  ...GEOGRAFI_CHAPTERS_DEL3,
  ...GEOGRAFI_CHAPTERS_DEL4,
  ...GEOGRAFI_CHAPTERS_DEL5,
];

// Helper function to get chapter by ID
export function getGeografiChapter(chapterId: string): TextbookChapter | undefined {
  return GEOGRAFI_CHAPTERS.find(chapter => chapter.id === chapterId);
}

// Helper function to get chapters by section
export function getGeografiChaptersBySection(sectionNumber: string): TextbookChapter[] {
  return GEOGRAFI_CHAPTERS.filter(chapter =>
    chapter.chapterNumber.startsWith(`${sectionNumber}.`)
  );
}
