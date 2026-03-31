/**
 * Generer test-lyd for alle unike matematiske mønstre i 1T.
 * Formål: La brukeren lytte gjennom og sjekke at konverteringen høres riktig ut.
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

  const candidates = silences.filter(s => s.start >= 4.0 && s.end <= 12.0);
  if (candidates.length === 0) {
    console.warn(`  ADVARSEL: Fant ingen intro-stillhet, bruker fallback 6.5s`);
    return 6.5;
  }
  const best = candidates.reduce((a, b) => a.duration > b.duration ? a : b);
  const introEnd = best.end - 0.2;
  console.log(`  Intro-kutting: stillhet ${best.start.toFixed(2)}–${best.end.toFixed(2)}s (${best.duration.toFixed(2)}s), kutter ved ${introEnd.toFixed(2)}s`);
  return introEnd;
}

// --- Hovedlogikk ---

async function main() {
  console.log('=== Generer test-lyd for alle unike mattemønstre ===\n');

  // Les dokumentet
  const mdPath = resolve(__dirname, '..', 'docs', '1t-alle-unike-mattemonstre.md');
  let text = readFileSync(mdPath, 'utf-8');

  // Fjern markdown-overskrifter og metadata
  text = text
    .replace(/^#.*$/gm, '')          // Fjern overskrifter
    .replace(/^\s*$/gm, '')           // Fjern tomme linjer
    .replace(/\n{3,}/g, '\n\n')       // Maks to linjeskift
    .trim();

  // Erstatt [EQ]-plassholdere med varierende formuleringer
  const eqVariants = [
    ', som er lik, ',
    ', som da blir, ',
    ', altså, ',
    ', lik, ',
    ', som er lik, ',
    ', det vil si, ',
  ];
  let eqIndex = 0;
  text = text.replace(/\[EQ\]/g, () => {
    const variant = eqVariants[eqIndex % eqVariants.length];
    eqIndex++;
    return variant;
  });

  // Legg til seksjonsnavn som pause-markører for lytteren
  text = text
    .replace(/^(Likhetstegn og relasjoner)$/m, 'Kategori 1: Allerede dekket.\n\nLikhetstegn og relasjoner.')
    .replace(/^(Mengdenotasjon)$/m, '\n\nKategori 2: Nye mønstre som trenger regler.\n\nMengdenotasjon.');

  console.log(`Tekst: ${text.length} tegn`);
  console.log(`---`);
  console.log(text.substring(0, 500));
  console.log(`---\n`);

  const chunks = splitText(text, MAX_CHUNK);
  console.log(`${chunks.length} chunk(s)\n`);

  if (!existsSync(MASTER_DIR)) mkdirSync(MASTER_DIR, { recursive: true });

  const cleanFiles: string[] = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunkPath = resolve(OUTPUT_DIR, `_temp_monstre_chunk${i}.mp3`);
    const cleanPath = resolve(OUTPUT_DIR, `_temp_monstre_clean${i}.mp3`);

    console.log(`Chunk ${i + 1}/${chunks.length} (${(NORSK_INTRO + chunks[i]).length} tegn)...`);
    const audio = await generateSpeech(chunks[i]);
    writeFileSync(chunkPath, audio);
    console.log(`  Generert: ${(audio.length / 1024 / 1024).toFixed(2)} MB`);

    const introEnd = findIntroEnd(chunkPath);
    execSync(`ffmpeg -y -i "${chunkPath}" -ss ${introEnd.toFixed(3)} -c copy "${cleanPath}"`, { stdio: 'pipe' });
    cleanFiles.push(cleanPath);
    unlinkSync(chunkPath);
  }

  // Sett sammen
  const masterPath = resolve(MASTER_DIR, 'mattemonstre-test.mp3');
  if (cleanFiles.length === 1) {
    execSync(`mv "${cleanFiles[0]}" "${masterPath}"`);
  } else {
    const listFile = resolve(OUTPUT_DIR, '_concat_monstre.txt');
    writeFileSync(listFile, cleanFiles.map(f => `file '${f}'`).join('\n'));
    execSync(`ffmpeg -y -f concat -safe 0 -i "${listFile}" -c copy "${masterPath}"`, { stdio: 'pipe' });
    for (const f of cleanFiles) unlinkSync(f);
    unlinkSync(listFile);
  }

  const duration = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${masterPath}"`, { encoding: 'utf-8' }).trim();
  console.log(`\nMaster lagret: ${masterPath}`);
  console.log(`Varighet: ${(parseFloat(duration) / 60).toFixed(1)} minutter`);
  console.log(`\nÅpne med: open "${masterPath}"`);
}

main().catch(console.error);
