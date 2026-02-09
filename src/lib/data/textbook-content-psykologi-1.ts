/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Psykologi 1 (VG2/VG3 valgfag)
 *
 * Foelger LK20 laereplan for psykologi 1 (PSY01-03).
 * Dekker grunnleggende psykologi, biologisk psykologi, kognisjon,
 * laering, motivasjon, utvikling, personlighet, sosialpsykologi,
 * psykisk helse og anvendt psykologi.
 *
 * Organisert i 50 delkapitler fordelt paa 10 seksjoner:
 * - Del 1: Psykologiens grunnlag (1.1-1.5)
 * - Del 2: Biologisk psykologi (2.1-2.5)
 * - Del 3: Kognisjon og persepsjon (3.1-3.5)
 * - Del 4: Laering (4.1-4.5)
 * - Del 5: Motivasjon og emosjoner (5.1-5.5)
 * - Del 6: Utvikling (6.1-6.5)
 * - Del 7: Personlighet (7.1-7.5)
 * - Del 8: Sosialpsykologi (8.1-8.5)
 * - Del 9: Psykisk helse (9.1-9.5)
 * - Del 10: Anvendt psykologi (10.1-10.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import all chapter content from the ten parts
import { PSYKOLOGI_1_DEL1_CHAPTERS } from './textbook-content-psykologi-1-del1';
import { PSYKOLOGI_1_DEL2_CHAPTERS } from './textbook-content-psykologi-1-del2';
import { PSYKOLOGI_1_DEL3_CHAPTERS } from './textbook-content-psykologi-1-del3';
import { PSYKOLOGI_1_DEL4_CHAPTERS } from './textbook-content-psykologi-1-del4';
import { PSYKOLOGI_1_DEL5_CHAPTERS } from './textbook-content-psykologi-1-del5';
import { PSYKOLOGI_1_DEL6_CHAPTERS } from './textbook-content-psykologi-1-del6';
import { PSYKOLOGI_1_DEL7_CHAPTERS } from './textbook-content-psykologi-1-del7';
import { PSYKOLOGI_1_DEL8_CHAPTERS } from './textbook-content-psykologi-1-del8';
import { PSYKOLOGI_1_DEL9_CHAPTERS } from './textbook-content-psykologi-1-del9';
import { PSYKOLOGI_1_DEL10_CHAPTERS } from './textbook-content-psykologi-1-del10';

// Re-export individual chapters for direct import
export * from './textbook-content-psykologi-1-del1';
export * from './textbook-content-psykologi-1-del2';
export * from './textbook-content-psykologi-1-del3';
export * from './textbook-content-psykologi-1-del4';
export * from './textbook-content-psykologi-1-del5';
export * from './textbook-content-psykologi-1-del6';
export * from './textbook-content-psykologi-1-del7';
export * from './textbook-content-psykologi-1-del8';
export * from './textbook-content-psykologi-1-del9';
export * from './textbook-content-psykologi-1-del10';

// Combined export of all chapters
export const PSYKOLOGI_1_CHAPTERS: TextbookChapter[] = [
  ...PSYKOLOGI_1_DEL1_CHAPTERS,
  ...PSYKOLOGI_1_DEL2_CHAPTERS,
  ...PSYKOLOGI_1_DEL3_CHAPTERS,
  ...PSYKOLOGI_1_DEL4_CHAPTERS,
  ...PSYKOLOGI_1_DEL5_CHAPTERS,
  ...PSYKOLOGI_1_DEL6_CHAPTERS,
  ...PSYKOLOGI_1_DEL7_CHAPTERS,
  ...PSYKOLOGI_1_DEL8_CHAPTERS,
  ...PSYKOLOGI_1_DEL9_CHAPTERS,
  ...PSYKOLOGI_1_DEL10_CHAPTERS,
];

// Helper function to get chapter by ID
export function getPsykologi1Chapter(chapterId: string): TextbookChapter | undefined {
  return PSYKOLOGI_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}

// Helper function to get chapters by section
export function getPsykologi1ChaptersBySection(sectionNumber: string): TextbookChapter[] {
  return PSYKOLOGI_1_CHAPTERS.filter(chapter =>
    chapter.chapterNumber.startsWith(`${sectionNumber}.`)
  );
}
