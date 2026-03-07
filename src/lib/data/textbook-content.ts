/**
 * Tekstbok kapittelinnhold - hovedfil
 *
 * Laster all kapitteldata fra én samlet JSON-fil (_all.json).
 * Filen lastes og parses ved første oppslag, deretter holdes i minnet.
 */

import * as fs from 'fs';
import * as path from 'path';
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Lazy-loaded data fra _all.json
// ============================================================================

let allData: {
  chapters: Record<string, TextbookChapter>;
  aliases: Record<string, string>;
} | null = null;

function getData() {
  if (!allData) {
    const jsonPath = path.join(process.cwd(), 'src', 'lib', 'data', 'chapters', '_all.json');
    allData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  }
  return allData!;
}

// ============================================================================
// Hjelpefunksjoner (samme API som før)
// ============================================================================

export function getChapterContent(chapterId: string): TextbookChapter | undefined {
  const { chapters, aliases } = getData();
  return chapters[chapterId] ?? chapters[aliases[chapterId]];
}

export function getAllChapterIds(): string[] {
  return Object.keys(getData().chapters);
}

export function isChapterImplemented(chapterId: string): boolean {
  const { chapters, aliases } = getData();
  return chapterId in chapters || chapterId in aliases;
}
