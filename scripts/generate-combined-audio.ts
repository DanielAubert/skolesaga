/**
 * Generer én kombinert lydfil for segmenter 2, 3 og 5.
 * Legger til markører mellom segmentene for enklere splitting.
 */

import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';

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

function extractSegments(): Map<number, string> {
  const segments = new Map<number, string>();
  let currentParts: string[] = [];
  let segmentIndex = 1;

  for (const block of CHAPTER_HISTORIE_1_2_NARRATIV.content) {
    if (block.type === 'exercise') {
      if (currentParts.length > 0) {
        segments.set(segmentIndex, currentParts.join('\n\n'));
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
    segments.set(segmentIndex, currentParts.join('\n\n'));
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
  const segments = extractSegments();
  const segmentsToGenerate = [2, 3, 5];

  // Kombiner tekst med tydelige markører
  const combinedParts: string[] = [];
  for (const segNum of segmentsToGenerate) {
    const text = segments.get(segNum);
    if (text) {
      // Legg til markør før hvert segment (vil bli uttalt)
      combinedParts.push(`Segment ${segNum}. ${text}`);
    }
  }

  const combinedText = combinedParts.join('\n\n... Pause. ...\n\n');

  console.log('=== Genererer kombinert lydfil ===\n');
  console.log(`Segmenter: ${segmentsToGenerate.join(', ')}`);
  console.log(`Total tekstlengde: ${combinedText.length} tegn\n`);
  console.log('Tekst-preview:');
  console.log(combinedText.substring(0, 300) + '...\n');

  const audioBuffer = await generateSpeech(combinedText);

  const outputPath = resolve(__dirname, '..', 'public', 'audio', 'historie', 'historie-1-2-combined-2-3-5.mp3');
  writeFileSync(outputPath, audioBuffer);

  console.log(`Lagret: ${outputPath}`);
  console.log(`Størrelse: ${(audioBuffer.length / 1024 / 1024).toFixed(2)} MB`);
  console.log('\nKjør nå Whisper for å finne tidsstempler.');
}

main().catch(console.error);
