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

// 17.9.2026: _all.json (234 MB, 12 500 kapitler) ble parset ved hver kald instans → sekunder per sidevisning.
// Nå: _index.json (kapittel → kurs, aliaser) + _kurs/<kurs>.json lastes lat og caches per kurs.
const CHAPTER_DIR = path.join(process.cwd(), 'src', 'lib', 'data', 'chapters');
interface Index { kurs: Record<string, string>; aliases: Record<string, string> }
let index: Index | null = null;
const kursCache = new Map<string, Record<string, TextbookChapter>>();

function getIndex(): Index {
  if (!index) index = JSON.parse(fs.readFileSync(path.join(CHAPTER_DIR, '_index.json'), 'utf-8'));
  return index!;
}

function getKurs(kurs: string): Record<string, TextbookChapter> {
  let k = kursCache.get(kurs);
  if (!k) {
    try {
      k = JSON.parse(fs.readFileSync(path.join(CHAPTER_DIR, '_kurs', kurs + '.json'), 'utf-8'));
    } catch {
      k = {};
    }
    kursCache.set(kurs, k!);
  }
  return k!;
}

/** Slår opp ett kapittel (med alias) uten å laste andre kurs. */
function slaaOpp(chapterId: string): TextbookChapter | undefined {
  const ix = getIndex();
  const id = ix.aliases[chapterId] || chapterId;
  const kurs = ix.kurs[id];
  return kurs ? getKurs(kurs)[id] : undefined;
}

/** Bare for kall som trenger ALT (sitemap o.l.) — laster alle kursbunter. */
function getData(): AllData {
  const ix = getIndex();
  const chapters: Record<string, TextbookChapter> = {};
  for (const kurs of new Set(Object.values(ix.kurs))) Object.assign(chapters, getKurs(kurs));
  return { chapters, aliases: ix.aliases };
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
  return slaaOpp(chapterId);
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

/** Alle kapittel-id-er som har en nordsamisk (review) versjon, i vilkårlig rekkefølge. */
export async function getSmeChapterIds(): Promise<string[]> {
  const { chapters } = await getRemote('sme');
  return Object.keys(chapters);
}

export function getAllChapterIds(): string[] {
  return Object.keys(getIndex().kurs);
}

export function isChapterImplemented(chapterId: string): boolean {
  const ix = getIndex();
  return chapterId in ix.kurs || chapterId in ix.aliases;
}
