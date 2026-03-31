/**
 * Legg til audio-blokker i alle 1T narrative JSON-filer som mangler dem.
 *
 * Bruk: npx tsx scripts/add-audio-blocks.ts
 *
 * Plassering:
 * - audio-1 → FØR intro
 * - audio-2 → FØR section2
 * - audio-3 → FØR section3
 * - audio-4 → FØR section4
 * - audio-5 → FØR section5
 * - audio-6 → FØR summary
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, join } from 'path';

const CHAPTERS_DIR = resolve(__dirname, '..', 'src', 'lib', 'data', 'chapters');

interface AudioBlock {
  id: string;
  type: 'audio';
  title: string;
  src: string;
  description: string;
}

function createAudioBlock(prefix: string, delNum: number, totalDeler: number): AudioBlock {
  return {
    id: `${prefix}-n-audio-${delNum}`,
    type: 'audio',
    title: delNum === totalDeler ? 'Lytt til oppsummeringen' : 'Lytt til denne delen',
    src: `/audio/1t/${prefix}-narrativ-del${delNum}.mp3`,
    description: delNum === 1
      ? 'Lydfil som leser opp teksten frem til første quiz.'
      : delNum === totalDeler
        ? 'Lydfil som leser opp oppsummeringen.'
        : 'Lydfil som leser opp teksten frem til neste quiz.',
  };
}

function processFile(filePath: string, fileName: string): boolean {
  const content = readFileSync(filePath, 'utf-8');
  const chapter = JSON.parse(content);

  // Hopp over filer som allerede har audio
  const hasAudio = chapter.content.some((item: any) => item.type === 'audio');
  if (hasAudio) {
    console.log(`  HOPPER OVER ${fileName} — har allerede audio`);
    return false;
  }

  // Finn prefix fra id (e.g., "1t-1-4" fra "1t-1-4-narrativ")
  const prefix = chapter.id.replace('-narrativ', '');
  const totalDeler = 6;

  // Finn posisjonene for innsetning (bakfra for å unngå indeks-forskyvning)
  const insertions: Array<{ index: number; block: AudioBlock }> = [];

  for (let i = 0; i < chapter.content.length; i++) {
    const item = chapter.content[i];
    const itemId = item.id || '';

    if (itemId.endsWith('-n-intro') || itemId.endsWith('-intro')) {
      insertions.push({ index: i, block: createAudioBlock(prefix, 1, totalDeler) });
    } else if (itemId.endsWith('-n-section2') || itemId.endsWith('-section2')) {
      insertions.push({ index: i, block: createAudioBlock(prefix, 2, totalDeler) });
    } else if (itemId.endsWith('-n-section3') || itemId.endsWith('-section3')) {
      insertions.push({ index: i, block: createAudioBlock(prefix, 3, totalDeler) });
    } else if (itemId.endsWith('-n-section4') || itemId.endsWith('-section4')) {
      insertions.push({ index: i, block: createAudioBlock(prefix, 4, totalDeler) });
    } else if (itemId.endsWith('-n-section5') || itemId.endsWith('-section5')) {
      insertions.push({ index: i, block: createAudioBlock(prefix, 5, totalDeler) });
    } else if (itemId.endsWith('-n-summary') || itemId.endsWith('-summary')) {
      insertions.push({ index: i, block: createAudioBlock(prefix, 6, totalDeler) });
    }
  }

  if (insertions.length === 0) {
    console.log(`  ADVARSEL: Ingen innsetningspunkter funnet i ${fileName}`);
    return false;
  }

  // Sett inn bakfra for å beholde riktige indekser
  insertions.sort((a, b) => b.index - a.index);
  for (const ins of insertions) {
    chapter.content.splice(ins.index, 0, ins.block);
  }

  // Skriv tilbake
  writeFileSync(filePath, JSON.stringify(chapter));
  console.log(`  ${fileName}: La til ${insertions.length} audio-blokker`);
  return true;
}

function main() {
  const files = readdirSync(CHAPTERS_DIR)
    .filter(f => f.startsWith('1t-') && f.endsWith('-narrativ.json'))
    .sort();

  console.log(`=== Legger til audio-blokker i ${files.length} narrative kapitler ===\n`);

  let updated = 0;
  for (const file of files) {
    const filePath = join(CHAPTERS_DIR, file);
    if (processFile(filePath, file)) {
      updated++;
    }
  }

  console.log(`\n=== Ferdig! ${updated} filer oppdatert ===`);
}

main();
