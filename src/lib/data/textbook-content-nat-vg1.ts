/**
 * Tekstbok innhold for Naturfag VG1
 *
 * Følger LK20 læreplan for naturfag (NAT01-04) studieforberedende.
 * Dekker 48 kapitler organisert i 9 seksjoner:
 *
 * - Seksjon 1: Naturvitenskapens tenkemåte (1.1-1.5)
 * - Seksjon 2: Bølger, stråling og radioaktivitet (2.1-2.7)
 * - Seksjon 3: Universet (3.1-3.4)
 * - Seksjon 4: Kjemi – stoffer og bindinger (4.1-4.5)
 * - Seksjon 5: Karbonforbindelser og organisk kjemi (5.1-5.6)
 * - Seksjon 6: Miljø og bærekraft (6.1-6.5)
 * - Seksjon 7: Ernæring, helse og livsstil (7.1-7.6)
 * - Seksjon 8: Arv og evolusjon (8.1-8.5)
 * - Seksjon 9: Bioteknologi (9.1-9.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import all chapter content from the five parts
import { NAT_VG1_CHAPTERS_DEL1 } from './textbook-content-nat-vg1-del1';
import { NAT_VG1_CHAPTERS_DEL2 } from './textbook-content-nat-vg1-del2';
import { NAT_VG1_CHAPTERS_DEL3 } from './textbook-content-nat-vg1-del3';
import { NAT_VG1_CHAPTERS_DEL4 } from './textbook-content-nat-vg1-del4';
import { NAT_VG1_CHAPTERS_DEL5 } from './textbook-content-nat-vg1-del5';

// Re-export individual chapters for direct import
export * from './textbook-content-nat-vg1-del1';
export * from './textbook-content-nat-vg1-del2';
export * from './textbook-content-nat-vg1-del3';
export * from './textbook-content-nat-vg1-del4';
export * from './textbook-content-nat-vg1-del5';

// Combined export of all chapters as array
export const NAT_VG1_CHAPTERS: TextbookChapter[] = [
  ...NAT_VG1_CHAPTERS_DEL1,
  ...NAT_VG1_CHAPTERS_DEL2,
  ...NAT_VG1_CHAPTERS_DEL3,
  ...NAT_VG1_CHAPTERS_DEL4,
  ...NAT_VG1_CHAPTERS_DEL5,
];

// Backward compatibility - as Record (used by textbook-content.ts)
export const CHAPTERS_NAT_VG1: Record<string, TextbookChapter> = Object.fromEntries(
  NAT_VG1_CHAPTERS.map(chapter => [chapter.id, chapter])
);

// Helper function to get chapter by ID
export function getNatVg1Chapter(chapterId: string): TextbookChapter | undefined {
  return NAT_VG1_CHAPTERS.find(chapter => chapter.id === chapterId);
}

// Helper function to get chapters by section
export function getNatVg1ChaptersBySection(sectionNumber: string): TextbookChapter[] {
  return NAT_VG1_CHAPTERS.filter(chapter =>
    chapter.chapterNumber.startsWith(`${sectionNumber}.`)
  );
}
