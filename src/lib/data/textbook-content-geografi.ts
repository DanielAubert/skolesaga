/**
 * Tekstbok innhold for Geografi VG1
 *
 * Følger LK20 læreplan for geografi.
 * Dekker naturgeografi, samfunnsgeografi og bærekraftig utvikling.
 *
 * Organisert i 50 delkapitler fordelt på 8 seksjoner:
 * - Del 1: Geografiens verktøy (1.1-1.6)
 * - Del 2: Geologi og landformer (2.1-2.7)
 * - Del 3: Vær, klima og klimaendringer (3.1-3.7)
 * - Del 4: Økosystemer og naturressurser (4.1-4.6)
 * - Del 5: Befolkning og migrasjon (5.1-5.6)
 * - Del 6: Byer og urbanisering (6.1-6.6)
 * - Del 7: Globalisering og utvikling (7.1-7.6)
 * - Del 8: Geopolitikk og konflikter (8.1-8.6)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import all chapter content from the eight parts
import { GEOGRAFI_DEL1_CHAPTERS } from './textbook-content-geografi-del1';
import { GEOGRAFI_DEL2_CHAPTERS } from './textbook-content-geografi-del2';
import { GEOGRAFI_DEL3_CHAPTERS } from './textbook-content-geografi-del3';
import { GEOGRAFI_DEL4_CHAPTERS } from './textbook-content-geografi-del4';
import { GEOGRAFI_DEL5_CHAPTERS } from './textbook-content-geografi-del5';
import { GEOGRAFI_DEL6_CHAPTERS } from './textbook-content-geografi-del6';
import { GEOGRAFI_DEL7_CHAPTERS } from './textbook-content-geografi-del7';
import { GEOGRAFI_DEL8_CHAPTERS } from './textbook-content-geografi-del8';

// Re-export individual chapters for direct import
export * from './textbook-content-geografi-del1';
export * from './textbook-content-geografi-del2';
export * from './textbook-content-geografi-del3';
export * from './textbook-content-geografi-del4';
export * from './textbook-content-geografi-del5';
export * from './textbook-content-geografi-del6';
export * from './textbook-content-geografi-del7';
export * from './textbook-content-geografi-del8';

// Combined export of all chapters
export const GEOGRAFI_CHAPTERS: TextbookChapter[] = [
  ...GEOGRAFI_DEL1_CHAPTERS,
  ...GEOGRAFI_DEL2_CHAPTERS,
  ...GEOGRAFI_DEL3_CHAPTERS,
  ...GEOGRAFI_DEL4_CHAPTERS,
  ...GEOGRAFI_DEL5_CHAPTERS,
  ...GEOGRAFI_DEL6_CHAPTERS,
  ...GEOGRAFI_DEL7_CHAPTERS,
  ...GEOGRAFI_DEL8_CHAPTERS,
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
