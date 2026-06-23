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

// 'sme' (nordsamisk) er foreløpig et ADMIN-ONLY review-språk. Det er bevisst
// IKKE en gyldig cookie-verdi (se isMalform i i18n/malform.ts), så det kan ikke
// velges fra den offentlige målform-toggelen — kun lastes eksplisitt i admin-ruta.
export type Malform = 'nb' | 'nn' | 'sme';

type AllData = {
  chapters: Record<string, TextbookChapter>;
  aliases: Record<string, string>;
};

let allData: AllData | null = null;
let allDataNn: AllData | null = null;
let allDataSme: AllData | null = null;

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

function getDataSme(): AllData {
  if (!allDataSme) {
    const jsonPath = path.join(process.cwd(), 'src', 'lib', 'data', 'chapters', '_all.sme.json');
    try {
      allDataSme = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    } catch {
      allDataSme = { chapters: {}, aliases: {} };
    }
  }
  return allDataSme!;
}

// ============================================================================
// Hjelpefunksjoner (samme API som før)
// ============================================================================

export function getChapterContent(
  chapterId: string,
  malform: Malform = 'nb',
): TextbookChapter | undefined {
  if (malform === 'sme') {
    const { chapters, aliases } = getDataSme();
    const sme = chapters[chapterId] ?? chapters[aliases[chapterId]];
    if (sme) return sme;
    // Fall tilbake til bokmål hvis nordsamisk-versjon ikke finnes ennå
  }
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

/** Finnes det en nordsamisk (review) versjon av dette kapittelet? */
export function hasSmeVersion(chapterId: string): boolean {
  const { chapters, aliases } = getDataSme();
  return chapterId in chapters || (aliases[chapterId] != null && aliases[chapterId] in chapters);
}

export function getAllChapterIds(): string[] {
  return Object.keys(getData().chapters);
}

export function isChapterImplemented(chapterId: string): boolean {
  const { chapters, aliases } = getData();
  return chapterId in chapters || chapterId in aliases;
}
