/**
 * Tekstbok kapittelinnhold - hovedfil
 *
 * BOKMÅL (_all.json) bundles inn i serverless-funksjonen og leses synkront.
 * NYNORSK (_all.nn.json) og NORDSAMISK (_all.sme.json) er for store til å bunde
 * (136 MB + 137 MB > Vercels 250 MB-grense per funksjon), så de lastes fra
 * Supabase Storage (bucket "chapter-data") ved kjøretid og caches i minnet.
 * Build-steget (scripts/combine-chapters.js) laster dem opp ved hver deploy.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
import type { TextbookChapter } from '@/lib/types/textbook';

export type Malform = 'nb' | 'nn' | 'sme';

type AllData = {
  chapters: Record<string, TextbookChapter>;
  aliases: Record<string, string>;
};

const EMPTY: AllData = { chapters: {}, aliases: {} };

// ============================================================================
// Bokmål: bundlet på disk, synkron lasting
// ============================================================================

let allData: AllData | null = null;

function getData(): AllData {
  if (!allData) {
    const jsonPath = path.join(process.cwd(), 'src', 'lib', 'data', 'chapters', '_all.json');
    allData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  }
  return allData!;
}

// ============================================================================
// Nynorsk/nordsamisk: hentes fra Supabase Storage, caches per språk
// ============================================================================

const STORAGE_BASE = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/chapter-data`
  : '';

const remoteCache: Partial<Record<Malform, Promise<AllData>>> = {};

// Filene ligger gzippet i Storage (rå JSON > 50 MB sprenger Storage-grensa).
async function fetchRemote(file: string): Promise<AllData> {
  if (!STORAGE_BASE) return EMPTY;
  try {
    // Egen modul-cache (remoteCache) dedupliserer per instans; Next sin fetch-cache
    // lagrer uansett ikke svar > 2 MB, så vi styrer cachingen selv.
    const res = await fetch(`${STORAGE_BASE}/${file}`, { cache: 'no-store' });
    if (!res.ok) return EMPTY;
    const gz = Buffer.from(await res.arrayBuffer());
    const json = zlib.gunzipSync(gz).toString('utf-8');
    return JSON.parse(json) as AllData;
  } catch {
    return EMPTY;
  }
}

function getRemote(malform: 'nn' | 'sme'): Promise<AllData> {
  const file = malform === 'nn' ? '_all.nn.json.gz' : '_all.sme.json.gz';
  return (remoteCache[malform] ??= fetchRemote(file));
}

// ============================================================================
// API
// ============================================================================

/**
 * Synkront bokmålsoppslag. Brukes av kallsteder som kun trenger bokmål
 * (oppgave-/treningssider, API-ruter, quiz-/flashcard-generering).
 */
export function getChapterContent(chapterId: string): TextbookChapter | undefined {
  const { chapters, aliases } = getData();
  return chapters[chapterId] ?? chapters[aliases[chapterId]];
}

/**
 * Språkbevisst (asynkront) oppslag. Brukes av sidene som faktisk kan vise
 * nynorsk/nordsamisk (kapittel-, quiz- og admin-review-sidene). Faller tilbake
 * til bokmål når en oversatt versjon ikke finnes.
 */
export async function getChapterContentLocalized(
  chapterId: string,
  malform: Malform = 'nb',
): Promise<TextbookChapter | undefined> {
  if (malform === 'nn' || malform === 'sme') {
    const { chapters, aliases } = await getRemote(malform);
    const localized = chapters[chapterId] ?? chapters[aliases[chapterId]];
    if (localized) return localized;
    // Fall tilbake til bokmål hvis oversatt versjon ikke finnes ennå
  }
  return getChapterContent(chapterId);
}

/** Finnes det en nynorsk-versjon av dette kapittelet? */
export async function hasNynorskVersion(chapterId: string): Promise<boolean> {
  const { chapters, aliases } = await getRemote('nn');
  return chapterId in chapters || (aliases[chapterId] != null && aliases[chapterId] in chapters);
}

/** Finnes det en nordsamisk (review) versjon av dette kapittelet? */
export async function hasSmeVersion(chapterId: string): Promise<boolean> {
  const { chapters, aliases } = await getRemote('sme');
  return chapterId in chapters || (aliases[chapterId] != null && aliases[chapterId] in chapters);
}

export function getAllChapterIds(): string[] {
  return Object.keys(getData().chapters);
}

export function isChapterImplemented(chapterId: string): boolean {
  const { chapters, aliases } = getData();
  return chapterId in chapters || chapterId in aliases;
}
