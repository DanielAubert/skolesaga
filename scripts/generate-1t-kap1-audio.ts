/**
 * Generer lydbok for 1T kapittel 1.1 og 1.2 (narrativ).
 *
 * Full pipeline:
 * 1. Les ferdig konvertert tale-tekst fra docs/1t-uttaletest-kap1-2.md
 * 2. Generer audio chunks via ElevenLabs (med norsk intro-prefix)
 * 3. Kutt intro fra hver chunk med silencedetect
 * 4. Sett sammen rene chunks til master-fil
 * 5. Lagre master i _master/
 */

import { writeFileSync, readFileSync, unlinkSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

// --- Config ---
const envPath = resolve(__dirname, '..', '.env.local');
const envContent = readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/ELEVENLABS_API_KEY="?([^"\n]+)"?/);
if (!apiKeyMatch) { console.error('Mangler ELEVENLABS_API_KEY'); process.exit(1); }
const API_KEY = apiKeyMatch[1];

const VOICE_ID = 'TX3LPaxmHKxFdv7VOQHJ'; // Liam
const NORSK_INTRO = 'Jeg er en norsk nordmann og heter Daniel. Jeg vil gjerne fortelle deg om noe spennende.\n\n';
const MAX_CHUNK = 4900 - NORSK_INTRO.length;
const OUTPUT_DIR = resolve(__dirname, '..', 'public', 'audio', '1t');
const MASTER_DIR = resolve(OUTPUT_DIR, '_master');

// --- Hjelpefunksjoner ---

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
  if (!res.ok) throw new Error(`API-feil: ${res.status}\n${await res.text()}`);
  return Buffer.from(await res.arrayBuffer());
}

function findIntroEnd(chunkFile: string): number {
  // Bruk silencedetect for å finne pausen mellom intro og innhold
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

  // Finn den lengste stillheten mellom 4 og 12 sekunder — dette er intro→innhold-gapet
  const candidates = silences.filter(s => s.start >= 4.0 && s.end <= 12.0);
  if (candidates.length === 0) {
    console.warn(`  ADVARSEL: Fant ingen intro-stillhet i ${chunkFile}, bruker fallback 6.5s`);
    return 6.5;
  }
  const best = candidates.reduce((a, b) => a.duration > b.duration ? a : b);
  const introEnd = best.end - 0.2; // silence_end - 0.2s buffer
  console.log(`  Intro-kutting: stillhet ${best.start.toFixed(2)}–${best.end.toFixed(2)}s (${best.duration.toFixed(2)}s), kutter ved ${introEnd.toFixed(2)}s`);
  return introEnd;
}

// --- Hovedlogikk ---

async function processChapter(chapterName: string, text: string, filePrefix: string) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${chapterName}`);
  console.log(`${'='.repeat(60)}`);

  const chunks = splitText(text, MAX_CHUNK);
  console.log(`Tekstlengde: ${text.length} tegn, ${chunks.length} chunks\n`);

  if (!existsSync(MASTER_DIR)) mkdirSync(MASTER_DIR, { recursive: true });

  const cleanFiles: string[] = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunkPath = resolve(OUTPUT_DIR, `_temp_${filePrefix}_chunk${i}.mp3`);
    const cleanPath = resolve(OUTPUT_DIR, `_temp_${filePrefix}_clean${i}.mp3`);

    // Generer lyd
    console.log(`Chunk ${i + 1}/${chunks.length} (${(NORSK_INTRO + chunks[i]).length} tegn)...`);
    const audio = await generateSpeech(chunks[i]);
    writeFileSync(chunkPath, audio);
    console.log(`  Generert: ${(audio.length / 1024 / 1024).toFixed(2)} MB`);

    // Kutt intro
    const introEnd = findIntroEnd(chunkPath);
    execSync(`ffmpeg -y -i "${chunkPath}" -ss ${introEnd.toFixed(3)} -c copy "${cleanPath}"`, { stdio: 'pipe' });
    cleanFiles.push(cleanPath);

    // Slett rå chunk
    unlinkSync(chunkPath);
  }

  // Sett sammen rene chunks til master
  const masterPath = resolve(MASTER_DIR, `${filePrefix}-narrativ-full-master.mp3`);
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
  console.log(`\nMaster lagret: ${masterPath}`);
  console.log(`Varighet: ${(parseFloat(duration) / 60).toFixed(1)} minutter`);

  return masterPath;
}

// --- Ekstraher tekst fra md ---
const mdPath = resolve(__dirname, '..', 'docs', '1t-uttaletest-kap1-2.md');
const mdContent = readFileSync(mdPath, 'utf-8');

function extractChapter(chapterHeader: string, nextChapterHeader: string): string {
  const startIdx = mdContent.indexOf(chapterHeader);
  if (startIdx === -1) throw new Error(`Fant ikke '${chapterHeader}'`);
  const endIdx = nextChapterHeader ? mdContent.indexOf(nextChapterHeader, startIdx + chapterHeader.length) : mdContent.length;
  return mdContent.slice(startIdx + chapterHeader.length, endIdx === -1 ? mdContent.length : endIdx)
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/---\s*$/gm, '')
    .trim();
}

async function main() {
  console.log('=== Generer lydbok: 1T Kapittel 1.1 og 1.2 ===\n');

  const ch11 = extractChapter('## Kapittel 1.1: Fortegn og regnerekkefølge', '## Kapittel 1.2:');
  const ch12 = extractChapter('## Kapittel 1.2: Potenser med heltallseksponenter', '## Kapittel 1.4:');

  await processChapter('Kapittel 1.1: Fortegn og regnerekkefølge', ch11, '1t-1-1');
  await processChapter('Kapittel 1.2: Potenser med heltallseksponenter', ch12, '1t-1-2');

  console.log('\n=== Steg 1 ferdig: Master-filer generert ===');
  console.log('Kjør neste steg (segmentering) med:');
  console.log('  python3 scripts/segment-1t-kap1.py');
}

main().catch(console.error);
