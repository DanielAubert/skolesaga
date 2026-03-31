/**
 * Universelt lydbok-genereringsskript for 1T-kapitler.
 *
 * Bruk:
 *   npx tsx scripts/generate-1t-audio.ts docs/1t-uttaletest-kap1.4-1.9.md
 *
 * Pipeline per kapittel:
 * 1. Ekstraher tekst fra docs-filen
 * 2. Erstatt [EQ] med varierende norske formuleringer
 * 3. Kjør applyNumberFixes() for problematiske tall
 * 4. Splitt i chunks < 4900 tegn
 * 5. Send til ElevenLabs med norsk intro-prefix
 * 6. Kutt intro fra hver chunk med silencedetect
 * 7. Sett sammen chunks til master-fil
 */

import { writeFileSync, readFileSync, unlinkSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

// --- Config ---
const envPath = resolve(__dirname, '..', '.env.local');
const envContent = readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/ELEVENLABS_API_KEY="?([^"\n]+)"?/);
if (!apiKeyMatch) { console.error('Mangler ELEVENLABS_API_KEY i .env.local'); process.exit(1); }
const API_KEY = apiKeyMatch[1];

const VOICE_ID = 'TX3LPaxmHKxFdv7VOQHJ'; // Liam
const NORSK_INTRO = 'Jeg er en norsk nordmann og heter Daniel. Jeg vil gjerne fortelle deg om noe spennende.\n\n';
const MAX_CHUNK = 4900 - NORSK_INTRO.length;
const OUTPUT_DIR = resolve(__dirname, '..', 'public', 'audio', '1t');
const MASTER_DIR = resolve(OUTPUT_DIR, '_master');

// --- [EQ]-erstatning med variasjon ---

const EQ_VARIANTS = [
  ', som er lik, ',
  ', som altså er lik, ',
  ', som da blir, ',
  ', altså, ',
  ', det vil si, ',
  ', lik, ',
];

function replaceEQ(text: string): string {
  let variantIdx = 0;
  return text.replace(/\[EQ\]/g, () => {
    const variant = EQ_VARIANTS[variantIdx % EQ_VARIANTS.length];
    variantIdx++;
    return variant;
  });
}

// --- Tall-uttale ---

function numberToNorwegian(n: number): string {
  const ones = ['null', 'en', 'to', 'tre', 'fire', 'fem', 'seks', 'syv', 'åtte', 'ni'];
  const teens = ['ti', 'elleve', 'tolv', 'tretten', 'fjorten', 'femten', 'seksten', 'sytten', 'atten', 'nitten'];
  const tens = ['', '', 'tjue', 'tretti', 'førti', 'femti', 'seksti', 'sytti', 'åtti', 'nitti'];

  if (n < 10) return ones[n];
  if (n < 20) return teens[n - 10];
  if (n < 100) {
    const t = Math.floor(n / 10);
    const o = n % 10;
    return o === 0 ? tens[t] : tens[t] + (o === 1 ? 'en' : ones[o]);
  }
  if (n < 1000) {
    const h = Math.floor(n / 100);
    const rest = n % 100;
    const prefix = h === 1 ? 'hundre' : ones[h] + ' hundre';
    if (rest === 0) return prefix;
    return prefix + ' og ' + numberToNorwegian(rest);
  }
  if (n < 1000000) {
    const t = Math.floor(n / 1000);
    const rest = n % 1000;
    const prefix = t === 1 ? 'tusen' : numberToNorwegian(t) + ' tusen';
    if (rest === 0) return prefix;
    if (rest < 100) return prefix + ' og ' + numberToNorwegian(rest);
    return prefix + ' ' + numberToNorwegian(rest);
  }
  return String(n);
}

function shouldConvertNumber(n: number): boolean {
  const str = String(n);
  if (n > 100) return true;
  if (str.includes('7') || str.includes('9')) return true;
  if ([16, 21, 22].includes(n)) return true;
  return false;
}

function applyNumberFixes(text: string): string {
  return text.replace(/\b(\d+)\b/g, (match) => {
    const n = parseInt(match, 10);
    if (isNaN(n)) return match;
    if (shouldConvertNumber(n)) return numberToNorwegian(n);
    return match;
  });
}

// --- Tekst-splitting ---

function splitText(text: string, maxLen: number): string[] {
  const chunks: string[] = [];
  const paragraphs = text.split(/\n\n+/);
  let current = '';
  for (const para of paragraphs) {
    if (current.length + para.length + 2 > maxLen) {
      if (current) chunks.push(current.trim());
      current = para;
    } else {
      current += (current ? '\n\n' : '') + para;
    }
  }
  if (current) chunks.push(current.trim());
  return chunks;
}

// --- ElevenLabs API ---

async function generateSpeech(text: string): Promise<Buffer> {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: { 'xi-api-key': API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: NORSK_INTRO + text,
      model_id: 'eleven_v3',
      language_code: 'no',
      voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true },
    }),
  });
  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`ElevenLabs API-feil ${res.status}: ${errBody}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

// --- Intro-kutting ---

function findIntroEnd(chunkFile: string): number {
  const result = execSync(
    `ffmpeg -i "${chunkFile}" -af silencedetect=noise=-30dB:d=0.3 -f null - 2>&1`,
    { encoding: 'utf-8' }
  );

  const silences: Array<{ start: number; end: number; duration: number }> = [];
  let currentStart = 0;
  for (const line of result.split('\n')) {
    const mStart = line.match(/silence_start: ([\d.]+)/);
    const mEnd = line.match(/silence_end: ([\d.]+) \| silence_duration: ([\d.]+)/);
    if (mStart) currentStart = parseFloat(mStart[1]);
    if (mEnd) silences.push({ start: currentStart, end: parseFloat(mEnd[1]), duration: parseFloat(mEnd[2]) });
  }

  // Finn lengste stillhet mellom 4–12 sekunder (intro→innhold-gap)
  const candidates = silences.filter(s => s.start >= 4.0 && s.end <= 12.0);
  if (candidates.length === 0) {
    console.warn(`  ADVARSEL: Fant ingen intro-stillhet i ${chunkFile}, bruker fallback 6.5s`);
    return 6.5;
  }
  const best = candidates.reduce((a, b) => a.duration > b.duration ? a : b);
  const introEnd = best.end - 0.2;
  console.log(`  Intro-kutting: stillhet ${best.start.toFixed(2)}–${best.end.toFixed(2)}s (${best.duration.toFixed(2)}s), kutter ved ${introEnd.toFixed(2)}s`);
  return introEnd;
}

// --- Prosesser ett kapittel ---

async function processChapter(chapterTitle: string, text: string, filePrefix: string) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${chapterTitle}`);
  console.log(`${'='.repeat(60)}`);

  // Steg 1b: Erstatt [EQ]
  let processed = replaceEQ(text);
  // Steg 1c: Fiks tall-uttale
  processed = applyNumberFixes(processed);

  const chunks = splitText(processed, MAX_CHUNK);
  console.log(`Tekstlengde: ${processed.length} tegn, ${chunks.length} chunks`);

  if (!existsSync(MASTER_DIR)) mkdirSync(MASTER_DIR, { recursive: true });

  const masterPath = resolve(MASTER_DIR, `${filePrefix}-narrativ-full-master.mp3`);

  // Sjekk om master allerede finnes
  if (existsSync(masterPath)) {
    console.log(`  HOPPER OVER — master finnes allerede: ${masterPath}`);
    return masterPath;
  }

  const cleanFiles: string[] = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunkPath = resolve(OUTPUT_DIR, `_temp_${filePrefix}_chunk${i}.mp3`);
    const cleanPath = resolve(OUTPUT_DIR, `_temp_${filePrefix}_clean${i}.mp3`);

    console.log(`  Chunk ${i + 1}/${chunks.length} (${(NORSK_INTRO + chunks[i]).length} tegn)...`);

    // Rate-limiting: vent 1s mellom API-kall
    if (i > 0) await new Promise(r => setTimeout(r, 1000));

    const audio = await generateSpeech(chunks[i]);
    writeFileSync(chunkPath, audio);
    console.log(`    Generert: ${(audio.length / 1024 / 1024).toFixed(2)} MB`);

    // Kutt intro
    const introEnd = findIntroEnd(chunkPath);
    execSync(`ffmpeg -y -i "${chunkPath}" -ss ${introEnd.toFixed(3)} -c copy "${cleanPath}"`, { stdio: 'pipe' });
    cleanFiles.push(cleanPath);

    // Slett rå chunk
    unlinkSync(chunkPath);
  }

  // Sett sammen chunks til master
  if (cleanFiles.length === 1) {
    execSync(`mv "${cleanFiles[0]}" "${masterPath}"`);
  } else {
    const listFile = resolve(OUTPUT_DIR, `_concat_${filePrefix}.txt`);
    writeFileSync(listFile, cleanFiles.map(f => `file '${f}'`).join('\n'));
    execSync(`ffmpeg -y -f concat -safe 0 -i "${listFile}" -c copy "${masterPath}"`, { stdio: 'pipe' });
    for (const f of cleanFiles) unlinkSync(f);
    unlinkSync(listFile);
  }

  // Vis varighet
  const duration = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${masterPath}"`, { encoding: 'utf-8' }).trim();
  console.log(`  Master lagret: ${masterPath}`);
  console.log(`  Varighet: ${(parseFloat(duration) / 60).toFixed(1)} minutter`);

  return masterPath;
}

// --- Parsing ---

function parseChapters(mdContent: string): Array<{ title: string; prefix: string; text: string }> {
  const chapters: Array<{ title: string; prefix: string; text: string }> = [];
  const headerRegex = /^## Kapittel (\d+)\.(\d+):\s*(.+)$/gm;
  const matches: Array<{ index: number; major: string; minor: string; fullTitle: string }> = [];

  let m;
  while ((m = headerRegex.exec(mdContent)) !== null) {
    matches.push({
      index: m.index,
      major: m[1],
      minor: m[2],
      fullTitle: `Kapittel ${m[1]}.${m[2]}: ${m[3]}`,
    });
  }

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index + mdContent.slice(matches[i].index).indexOf('\n') + 1;
    const end = i + 1 < matches.length ? matches[i + 1].index : mdContent.length;
    const text = mdContent.slice(start, end)
      .replace(/^#{1,6}\s+/gm, '') // Fjern markdown headers
      .replace(/---\s*$/gm, '')     // Fjern separatorer
      .trim();

    chapters.push({
      title: matches[i].fullTitle,
      prefix: `1t-${matches[i].major}-${matches[i].minor}`,
      text,
    });
  }

  return chapters;
}

// --- Main ---

async function main() {
  const docsFile = process.argv[2];
  if (!docsFile) {
    console.error('Bruk: npx tsx scripts/generate-1t-audio.ts <docs-fil>');
    console.error('Eksempel: npx tsx scripts/generate-1t-audio.ts docs/1t-uttaletest-kap1.4-1.9.md');
    process.exit(1);
  }

  const mdPath = resolve(__dirname, '..', docsFile);
  if (!existsSync(mdPath)) {
    console.error(`Filen finnes ikke: ${mdPath}`);
    process.exit(1);
  }

  const mdContent = readFileSync(mdPath, 'utf-8');
  const chapters = parseChapters(mdContent);

  console.log(`=== Generer lydbok fra ${docsFile} ===`);
  console.log(`Fant ${chapters.length} kapitler:\n`);
  for (const ch of chapters) {
    console.log(`  ${ch.prefix}: ${ch.title}`);
  }
  console.log();

  const results: Array<{ prefix: string; title: string; masterPath: string }> = [];

  for (const ch of chapters) {
    try {
      const masterPath = await processChapter(ch.title, ch.text, ch.prefix);
      results.push({ prefix: ch.prefix, title: ch.title, masterPath });
    } catch (err) {
      console.error(`\n  FEIL for ${ch.prefix}: ${err}`);
      console.error(`  Fortsetter med neste kapittel...\n`);
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`FERDIG: ${results.length}/${chapters.length} kapitler generert`);
  console.log(`${'='.repeat(60)}`);
  for (const r of results) {
    console.log(`  ${r.prefix}: ${r.masterPath}`);
  }
}

main().catch(console.error);
