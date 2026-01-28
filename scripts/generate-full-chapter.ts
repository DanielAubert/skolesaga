/**
 * Generer hele kapittel 1.2 narrativ som én lydfil.
 * Deler teksten i chunks under 5000 tegn, genererer hver del,
 * og setter sammen med ffmpeg.
 */

import { writeFileSync, readFileSync, unlinkSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

const envPath = resolve(__dirname, '..', '.env.local');
const envContent = readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/ELEVENLABS_API_KEY="?([^"\n]+)"?/);
if (!apiKeyMatch) process.exit(1);
const API_KEY = apiKeyMatch[1];

import { CHAPTER_HISTORIE_1_2_NARRATIV } from '../src/lib/data/textbook-content-historie-narrativ';

function stripMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/^[-•]\s+/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function extractFullText(): string {
  const parts: string[] = [];
  let segmentNum = 1;

  for (const block of CHAPTER_HISTORIE_1_2_NARRATIV.content) {
    if (block.type === 'exercise') {
      parts.push(`\n... Slutt på del ${segmentNum}. ...\n`);
      segmentNum++;
    } else if (block.type === 'text') {
      parts.push(stripMarkdown(block.content));
    } else if (block.type === 'definition') {
      parts.push(`Definisjon: ${stripMarkdown(block.title)}. ${stripMarkdown(block.content)}`);
    } else if (block.type === 'example') {
      const p: string[] = [];
      if (block.title) p.push(stripMarkdown(block.title));
      if (block.problem) p.push(stripMarkdown(block.problem));
      if (block.solution) p.push(stripMarkdown(block.solution));
      parts.push(`Eksempel: ${p.join('. ')}`);
    }
  }

  return parts.join('\n\n');
}

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

const ELEVENLABS_BASE = 'https://api.elevenlabs.io/v1';
const VOICE_ID = 'TX3LPaxmHKxFdv7VOQHJ';

async function generateSpeech(text: string): Promise<Buffer> {
  const res = await fetch(`${ELEVENLABS_BASE}/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
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

async function main() {
  const fullText = extractFullText();
  const chunks = splitText(fullText, 4800);

  console.log('=== Genererer hele kapittel 1.2 narrativ ===\n');
  console.log(`Total tekstlengde: ${fullText.length} tegn`);
  console.log(`Delt i ${chunks.length} deler\n`);

  const outputDir = resolve(__dirname, '..', 'public', 'audio', 'historie');
  const tempFiles: string[] = [];

  for (let i = 0; i < chunks.length; i++) {
    console.log(`--- Del ${i + 1}/${chunks.length} (${chunks[i].length} tegn) ---`);
    const audio = await generateSpeech(chunks[i]);
    const tempPath = resolve(outputDir, `_temp_chunk_${i}.mp3`);
    writeFileSync(tempPath, audio);
    tempFiles.push(tempPath);
    console.log(`Generert: ${(audio.length / 1024 / 1024).toFixed(2)} MB\n`);
  }

  // Sett sammen med ffmpeg
  const listFile = resolve(outputDir, '_concat_list.txt');
  writeFileSync(listFile, tempFiles.map(f => `file '${f}'`).join('\n'));

  const outputPath = resolve(outputDir, 'historie-1-2-narrativ-full.mp3');
  console.log('Setter sammen med ffmpeg...');
  execSync(`ffmpeg -y -f concat -safe 0 -i "${listFile}" -c copy "${outputPath}"`, { stdio: 'inherit' });

  // Rydd opp temp-filer
  for (const f of tempFiles) unlinkSync(f);
  unlinkSync(listFile);

  console.log(`\nLagret: ${outputPath}`);
}

main().catch(console.error);
