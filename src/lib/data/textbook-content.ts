/**
 * Tekstbok kapittelinnhold - hovedfil
 *
 * Laster kapitteldata fra individuelle JSON-filer (generert av scripts/convert-chapters-to-json.ts).
 * JSON-filene er ferdig normalisert (legacy sections → content adapter er allerede kjørt).
 */

import * as fs from 'fs';
import * as path from 'path';
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Registry: liten JSON-fil med alle kapittel-IDer og alias-mapping
// ============================================================================

import registry from './chapters/_registry.json';

const CHAPTER_IDS = new Set<string>(registry.chapterIds);
const CHAPTER_ID_ALIASES: Record<string, string> = registry.aliases;

// ============================================================================
// In-memory cache for lastede kapitler
// ============================================================================

const chapterCache = new Map<string, TextbookChapter>();

// Beregn stien til chapters-mappen én gang
// Bruker process.cwd() som er pålitelig i Next.js (både dev og produksjon)
const chaptersDir = path.join(process.cwd(), 'src', 'lib', 'data', 'chapters');

// ============================================================================
// Hjelpefunksjoner (samme API som før)
// ============================================================================

export function getChapterContent(chapterId: string): TextbookChapter | undefined {
  // Sjekk alias først
  const resolvedId = CHAPTER_IDS.has(chapterId) ? chapterId : CHAPTER_ID_ALIASES[chapterId];
  if (!resolvedId) return undefined;

  // Sjekk cache
  const cached = chapterCache.get(resolvedId);
  if (cached) return cached;

  // Last fra disk
  const jsonPath = path.join(chaptersDir, `${resolvedId}.json`);
  try {
    const raw = fs.readFileSync(jsonPath, 'utf-8');
    const chapter: TextbookChapter = JSON.parse(raw);
    chapterCache.set(resolvedId, chapter);
    return chapter;
  } catch {
    return undefined;
  }
}

export function getAllChapterIds(): string[] {
  return registry.chapterIds;
}

export function isChapterImplemented(chapterId: string): boolean {
  return CHAPTER_IDS.has(chapterId) || chapterId in CHAPTER_ID_ALIASES;
}
