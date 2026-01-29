/**
 * Tekstbok innhold for Norsk VG1
 *
 * Følger LK20 læreplan for norsk på videregående skole.
 * Dekker 34 kapitler organisert i 17 seksjoner:
 *
 * - Seksjon 1: Retorikk og argumentasjon (1.1-1.2)
 * - Seksjon 2: Skjønnlitteratur (2.1-2.2)
 * - Seksjon 3: Muntlig kommunikasjon og kreativ skriving (3.1-3.2)
 * - Seksjon 4: Språk og identitet (4.1-4.2)
 * - Seksjon 5: Litteraturhistorie (5.1-5.2)
 * - Seksjon 6: Språkhistorie (6.1-6.2)
 * - Seksjon 7: Språklig mangfold (7.1-7.2)
 * - Seksjon 8: Debatt og argumentasjon (8.1-8.2)
 * - Seksjon 9: Drama (9.1-9.2)
 * - Seksjon 10: Romantikken og realismen (10.1-10.2)
 * - Seksjon 11: Nyrealisme og modernisme (11.1-11.2)
 * - Seksjon 12: Sammensatte tekster (12.1-12.2)
 * - Seksjon 13: Film og medier (13.1)
 * - Seksjon 14: Samisk språk og kultur (14.1-14.3)
 * - Seksjon 15: Grammatikk og setningsanalyse (15.1-15.2)
 * - Seksjon 16: Rettskriving og språknorm (16.1-16.2)
 * - Seksjon 17: Kulturmøter i litteratur (17.1-17.2)
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
