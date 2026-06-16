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

export type Malform = 'nb' | 'nn';

type AllData = {
  chapters: Record<string, TextbookChapter>;
  aliases: Record<string, string>;
};

let allData: AllData | null = null;
let allDataNn: AllData | null = null;

function getData() {
  if (!allData) {
    const jsonPath = path.join(process.cwd(), 'src', 'lib', 'data', 'chapters', '_all.json');
    allData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  }
  return allData!;
}

function getDataNn(): AllData {
  if (!allDataNn) {
    const jsonPath = path.join(process.cwd(), 'src', 'lib', 'data', 'chapters', '_all.nn.json');
    try {
      allDataNn = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    } catch {
      allDataNn = { chapters: {}, aliases: {} };
    }
  }
  return allDataNn!;
}

// ============================================================================
// Hjelpefunksjoner (samme API som før)
// ============================================================================

export function getChapterContent(
  chapterId: string,
  malform: Malform = 'nb',
): TextbookChapter | undefined {
  if (malform === 'nn') {
    const { chapters, aliases } = getDataNn();
    const nn = chapters[chapterId] ?? chapters[aliases[chapterId]];
    if (nn) return nn;
    // Fall tilbake til bokmål hvis nynorsk-versjon ikke finnes ennå
  }
  const { chapters, aliases } = getData();
  return chapters[chapterId] ?? chapters[aliases[chapterId]];
}

/** Finnes det en nynorsk-versjon av dette kapittelet? */
export function hasNynorskVersion(chapterId: string): boolean {
  const { chapters, aliases } = getDataNn();
  return chapterId in chapters || (aliases[chapterId] != null && aliases[chapterId] in chapters);
}

export function getAllChapterIds(): string[] {
  return Object.keys(getData().chapters);
}

export function isChapterImplemented(chapterId: string): boolean {
  const { chapters, aliases } = getData();
  return chapterId in chapters || chapterId in aliases;
}
