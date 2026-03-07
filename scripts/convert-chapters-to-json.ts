/**
 * Konverteringsscript: TypeScript data-filer → JSON
 *
 * Importerer ALL_CHAPTERS og CHAPTER_ID_ALIASES fra textbook-content.ts,
 * kjører legacy-adapteren (sections → content), og skriver:
 *   - src/lib/data/chapters/{chapterId}.json  (ett per kapittel)
 *   - src/lib/data/chapters/_registry.json     (IDer + alias-mapping)
 *
 * Kjør med: npx tsx scripts/convert-chapters-to-json.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// Importere ALL_CHAPTERS og getChapterContent fra eksisterende kode
// Vi trenger ALL_CHAPTERS for å iterere, og getChapterContent for å kjøre legacy-adapteren
import { ALL_CHAPTERS, getChapterContent } from '../src/lib/data/textbook-content';

// Vi trenger CHAPTER_ID_ALIASES, men den er ikke eksportert.
// Vi leser filen direkte og parser ut alias-mappingen.
const textbookContentPath = path.join(__dirname, '../src/lib/data/textbook-content.ts');
const fileContent = fs.readFileSync(textbookContentPath, 'utf-8');

// Ekstraher CHAPTER_ID_ALIASES fra filen
function extractAliases(source: string): Record<string, string> {
  const aliasMatch = source.match(/const CHAPTER_ID_ALIASES:\s*Record<string,\s*string>\s*=\s*\{([\s\S]*?)\n\};/);
  if (!aliasMatch) {
    console.warn('Fant ikke CHAPTER_ID_ALIASES i textbook-content.ts');
    return {};
  }
  const aliasBlock = aliasMatch[1];
  const aliases: Record<string, string> = {};
  const lineRegex = /'([^']+)':\s*'([^']+)'/g;
  let match;
  while ((match = lineRegex.exec(aliasBlock)) !== null) {
    aliases[match[1]] = match[2];
  }
  return aliases;
}

const CHAPTER_ID_ALIASES = extractAliases(fileContent);

const outDir = path.join(__dirname, '../src/lib/data/chapters');

// Opprett output-mappen
fs.mkdirSync(outDir, { recursive: true });

// Teller
let written = 0;
let skipped = 0;
const allIds: string[] = [];

for (const chapterId of Object.keys(ALL_CHAPTERS)) {
  // Kjør legacy-adapteren via getChapterContent
  const chapter = getChapterContent(chapterId);
  if (!chapter) {
    console.warn(`Hopper over ${chapterId}: getChapterContent returnerte undefined`);
    skipped++;
    continue;
  }

  allIds.push(chapterId);

  const jsonPath = path.join(outDir, `${chapterId}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(chapter), 'utf-8');
  written++;
}

// Skriv registry
const registry = {
  chapterIds: allIds,
  aliases: CHAPTER_ID_ALIASES,
};

fs.writeFileSync(
  path.join(outDir, '_registry.json'),
  JSON.stringify(registry, null, 2),
  'utf-8'
);

console.log(`Ferdig! Skrev ${written} kapittel-JSON-filer, ${skipped} hoppet over.`);
console.log(`Alias-mapping: ${Object.keys(CHAPTER_ID_ALIASES).length} aliaser`);
console.log(`Registry skrevet til ${path.join(outDir, '_registry.json')}`);
