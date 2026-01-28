/**
 * Generer lydbok-segmenter for Historie 1.2 Narrativ (Kilder og kildekritikk)
 * Bruker ElevenLabs v3 med Liam-stemmen og norsk språkkode.
 *
 * Genererer ett MP3-segment per tekstdel mellom quiz-oppgavene.
 *
 * Kjør: npx tsx scripts/generate-audiobook.ts
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

// ---------------------------------------------------------------------------
// 1. Last API-nøkkel fra .env.local
// ---------------------------------------------------------------------------
const envPath = resolve(__dirname, '..', '.env.local');
const envContent = readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/ELEVENLABS_API_KEY="?([^"\n]+)"?/);
if (!apiKeyMatch) {
  console.error('ELEVENLABS_API_KEY ikke funnet i .env.local');
  process.exit(1);
}
const API_KEY = apiKeyMatch[1];

// ---------------------------------------------------------------------------
// 2. Importer narrativt kapittel 1.2
// ---------------------------------------------------------------------------
import { CHAPTER_HISTORIE_1_2_NARRATIV } from '../src/lib/data/textbook-content-historie-narrativ';

// ---------------------------------------------------------------------------
// 3. Tekstekstraksjon og markdown-stripping
// ---------------------------------------------------------------------------

function stripMarkdown(text: string): string {
  return (
    text
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/^\d+\.\s+/gm, '')
      .replace(/^[-•]\s+/gm, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  );
}

interface Segment {
  index: number;
  text: string;
}

/**
 * Deler kapittelet i segmenter ved quiz-oppgaver (exercise-blokker).
 * Hver quiz er en skillelinje – tekst før/mellom/etter quizer utgjør segmentene.
 */
function extractSegments(): Segment[] {
  const segments: Segment[] = [];
  let currentParts: string[] = [];
  let segmentIndex = 1;

  for (const block of CHAPTER_HISTORIE_1_2_NARRATIV.content) {
    if (block.type === 'exercise') {
      // Quiz funnet – avslutt gjeldende segment
      if (currentParts.length > 0) {
        segments.push({
          index: segmentIndex,
          text: currentParts.join('\n\n'),
        });
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
    // Hopp over audio, video, image, geogebra osv.
  }

  // Siste segment (etter siste quiz)
  if (currentParts.length > 0) {
    segments.push({
      index: segmentIndex,
      text: currentParts.join('\n\n'),
    });
  }

  return segments;
}

// ---------------------------------------------------------------------------
// 4. ElevenLabs API-kall
// ---------------------------------------------------------------------------

const ELEVENLABS_BASE = 'https://api.elevenlabs.io/v1';
const VOICE_ID = 'TX3LPaxmHKxFdv7VOQHJ'; // Liam
const VOICE_NAME = 'Liam';

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
    throw new Error(`ElevenLabs API-feil: ${res.status} ${res.statusText}\n${errorBody}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// ---------------------------------------------------------------------------
// 5. Hovedprogram
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== Lydbok-generator: Historie 1.2 Narrativ (segmentert) ===');
  console.log(`Stemme: ${VOICE_NAME} (${VOICE_ID})\n`);

  const segments = extractSegments();
  console.log(`Fant ${segments.length} segmenter:\n`);

  for (const seg of segments) {
    console.log(`  Del ${seg.index}: ${seg.text.substring(0, 60).replace(/\n/g, ' ')}... (${seg.text.length} tegn)`);
  }
  console.log('');

  // Sørg for output-mappe
  const outputDir = resolve(__dirname, '..', 'public', 'audio', 'historie');
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Generer hvert segment sekvensielt
  for (const seg of segments) {
    const filename = `historie-1-2-narrativ-del${seg.index}.mp3`;
    const outputPath = resolve(outputDir, filename);

    console.log(`--- Del ${seg.index}/${segments.length} ---`);
    console.log(`Tekst: ${seg.text.length} tegn`);

    const audioBuffer = await generateSpeech(seg.text);
    writeFileSync(outputPath, audioBuffer);

    const sizeMB = (audioBuffer.length / 1024 / 1024).toFixed(2);
    console.log(`Lagret: ${filename} (${sizeMB} MB)\n`);
  }

  console.log('=== Ferdig! ===');
  console.log(`Generert ${segments.length} lydfiler i ${outputDir}`);
}

main().catch((err) => {
  console.error('Feil:', err);
  process.exit(1);
});
