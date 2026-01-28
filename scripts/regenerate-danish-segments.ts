/**
 * Regenerer segmenter som ble på dansk.
 * Bruker samme oppsett, men kjører flere forsøk per segment.
 */

import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';

const envPath = resolve(__dirname, '..', '.env.local');
const envContent = readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/ELEVENLABS_API_KEY="?([^"\n]+)"?/);
if (!apiKeyMatch) {
  console.error('ELEVENLABS_API_KEY ikke funnet');
  process.exit(1);
}
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

interface Segment {
  index: number;
  text: string;
}

function extractSegments(): Segment[] {
  const segments: Segment[] = [];
  let currentParts: string[] = [];
  let segmentIndex = 1;

  for (const block of CHAPTER_HISTORIE_1_2_NARRATIV.content) {
    if (block.type === 'exercise') {
      if (currentParts.length > 0) {
        segments.push({ index: segmentIndex, text: currentParts.join('\n\n') });
        segmentIndex++;
        currentParts = [];
      }
    } else if (block.type === 'text') {
      currentParts.push(stripMarkdown(block.content));
    } else if (block.type === 'definition') {
      currentParts.push(`Definisjon: ${stripMarkdown(block.title)}. ${stripMarkdown(block.content)}`);
    } else if (block.type === 'example') {
      const parts: string[] = [];
      if (block.title) parts.push(stripMarkdown(block.title));
      if (block.problem) parts.push(stripMarkdown(block.problem));
      if (block.solution) parts.push(stripMarkdown(block.solution));
      currentParts.push(`Eksempel: ${parts.join('. ')}`);
    }
  }

  if (currentParts.length > 0) {
    segments.push({ index: segmentIndex, text: currentParts.join('\n\n') });
  }

  return segments;
}

const ELEVENLABS_BASE = 'https://api.elevenlabs.io/v1';
const VOICE_ID = 'TX3LPaxmHKxFdv7VOQHJ'; // Liam

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
  // Segmenter som ble på dansk og må regenereres
  const danishSegments = [2, 3, 5];

  console.log('=== Regenererer danske segmenter ===\n');
  console.log(`Segmenter å regenerere: ${danishSegments.join(', ')}\n`);

  const allSegments = extractSegments();
  const outputDir = resolve(__dirname, '..', 'public', 'audio', 'historie');

  for (const segNum of danishSegments) {
    const seg = allSegments.find(s => s.index === segNum);
    if (!seg) {
      console.log(`Segment ${segNum} ikke funnet!`);
      continue;
    }

    const filename = `historie-1-2-narrativ-del${segNum}.mp3`;
    const outputPath = resolve(outputDir, filename);

    console.log(`--- Regenererer del ${segNum} ---`);
    console.log(`Tekst: ${seg.text.length} tegn`);
    console.log(`Første ord: "${seg.text.substring(0, 50)}..."`);

    const audioBuffer = await generateSpeech(seg.text);
    writeFileSync(outputPath, audioBuffer);

    const sizeMB = (audioBuffer.length / 1024 / 1024).toFixed(2);
    console.log(`Lagret: ${filename} (${sizeMB} MB)\n`);
  }

  console.log('=== Ferdig! Lytt og verifiser at de nå er på norsk ===');
}

main().catch((err) => {
  console.error('Feil:', err);
  process.exit(1);
});
