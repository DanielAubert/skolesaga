/**
 * Generer uttaletest-lydfiler for 1T kapittel 1.1 og 1.2.
 * Leser ferdig konvertert tale-tekst fra docs/1t-uttaletest-kap1-2.md
 * og sender til ElevenLabs.
 */

import { writeFileSync, readFileSync, unlinkSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

// Les API-nøkkel
const envPath = resolve(__dirname, '..', '.env.local');
const envContent = readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/ELEVENLABS_API_KEY="?([^"\n]+)"?/);
if (!apiKeyMatch) { console.error('Mangler ELEVENLABS_API_KEY i .env.local'); process.exit(1); }
const API_KEY = apiKeyMatch[1];

// Les tale-teksten
const mdPath = resolve(__dirname, '..', 'docs', '1t-uttaletest-kap1-2.md');
const mdContent = readFileSync(mdPath, 'utf-8');

// Ekstraher kapittel 1.1 og 1.2 fra markdown
function extractChapter(content: string, chapterHeader: string, nextChapterHeader: string): string {
  const startIdx = content.indexOf(chapterHeader);
  if (startIdx === -1) throw new Error(`Fant ikke '${chapterHeader}'`);
  const endIdx = nextChapterHeader ? content.indexOf(nextChapterHeader, startIdx + chapterHeader.length) : content.length;
  const text = content.slice(startIdx + chapterHeader.length, endIdx === -1 ? content.length : endIdx).trim();
  // Fjern markdown-headings (### Del X: ...)
  return text
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/---\s*$/gm, '')
    .trim();
}

const chapter11 = extractChapter(mdContent, '## Kapittel 1.1: Fortegn og regnerekkefølge', '## Kapittel 1.2:');
const chapter12 = extractChapter(mdContent, '## Kapittel 1.2: Potenser med heltallseksponenter', '## Kapittel 1.4:');

// ElevenLabs config
const ELEVENLABS_BASE = 'https://api.elevenlabs.io/v1';
const VOICE_ID = 'TX3LPaxmHKxFdv7VOQHJ'; // Liam
const NORSK_INTRO = 'Jeg er en norsk nordmann og heter Daniel. Jeg vil gjerne fortelle deg om noe spennende.\n\n';
const MAX_CHUNK = 4900; // Litt under 5000 for å gi margin med intro

// Del tekst i chunks under maxLen tegn, ved naturlige brudd
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
  const res = await fetch(`${ELEVENLABS_BASE}/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: NORSK_INTRO + text,
      model_id: 'eleven_v3',
      language_code: 'no',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.0,
        use_speaker_boost: true,
      },
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`API-feil: ${res.status}\n${errorBody}`);
  }

  return Buffer.from(await res.arrayBuffer());
}

async function generateChapter(name: string, text: string, outputFilename: string) {
  const chunks = splitText(text, MAX_CHUNK - NORSK_INTRO.length);
  const outputDir = resolve(__dirname, '..', 'public', 'audio', '1t');

  if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

  console.log(`\n=== ${name} ===`);
  console.log(`Tekstlengde: ${text.length} tegn`);
  console.log(`Delt i ${chunks.length} chunks\n`);

  const tempFiles: string[] = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunkWithIntro = NORSK_INTRO + chunks[i];
    console.log(`  Chunk ${i + 1}/${chunks.length} (${chunkWithIntro.length} tegn totalt)...`);
    const audio = await generateSpeech(chunks[i]);
    const tempPath = resolve(outputDir, `_temp_uttaletest_${outputFilename}_${i}.mp3`);
    writeFileSync(tempPath, audio);
    tempFiles.push(tempPath);
    console.log(`    Generert: ${(audio.length / 1024 / 1024).toFixed(2)} MB`);
  }

  if (tempFiles.length === 1) {
    // Bare én chunk — bare rename
    const outputPath = resolve(outputDir, `${outputFilename}.mp3`);
    execSync(`mv "${tempFiles[0]}" "${outputPath}"`);
    console.log(`\nLagret: ${outputPath}`);
    return outputPath;
  }

  // Sett sammen med ffmpeg
  const listFile = resolve(outputDir, `_concat_${outputFilename}.txt`);
  writeFileSync(listFile, tempFiles.map(f => `file '${f}'`).join('\n'));

  const outputPath = resolve(outputDir, `${outputFilename}.mp3`);
  console.log('\nSetter sammen med ffmpeg...');
  execSync(`ffmpeg -y -f concat -safe 0 -i "${listFile}" -c copy "${outputPath}"`, { stdio: 'inherit' });

  // Rydd opp temp-filer
  for (const f of tempFiles) unlinkSync(f);
  unlinkSync(listFile);

  console.log(`Lagret: ${outputPath}`);
  return outputPath;
}

async function main() {
  console.log('=== Uttaletest: 1T Kapittel 1.1 og 1.2 ===');
  console.log('Sender ferdig konvertert tale-tekst til ElevenLabs...\n');

  await generateChapter(
    'Kapittel 1.1: Fortegn og regnerekkefølge',
    chapter11,
    'uttaletest-1t-1-1'
  );

  await generateChapter(
    'Kapittel 1.2: Potenser med heltallseksponenter',
    chapter12,
    'uttaletest-1t-1-2'
  );

  console.log('\n=== Ferdig! ===');
  console.log('Lytt gjennom filene og noter eventuelle uttalefeil i /texttovoicemath skillen.');
}

main().catch(console.error);
