/**
 * Generer test-lyd for tall-uttale med SIFFER (ikke ord).
 * Sammenlign med ord-versjonen for å finne hva som funker best.
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
const OUTPUT_DIR = resolve(__dirname, '..', 'public', 'audio', '1t');
const MASTER_DIR = resolve(OUTPUT_DIR, '_master');

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

async function main() {
  console.log('=== Generer test-lyd for tall som SIFFER ===\n');

  const text = `Her er en test av hvordan tall uttales som siffer.

0. 1. 2. 3. 4. 5. 6. 7. 8. 9. 10.

11. 12. 13. 14. 15. 16. 17. 18. 19.

20. 21. 22.

30. 31.

40. 41.

50. 51.

60. 61.

70. 71.

80. 81.

90. 91.

100. 101. 124.

700. 7000.`;

  console.log(`Tekst: ${text.length} tegn`);
  console.log(`---`);
  console.log(text);
  console.log(`---\n`);

  if (!existsSync(MASTER_DIR)) mkdirSync(MASTER_DIR, { recursive: true });

  const chunkPath = resolve(OUTPUT_DIR, '_temp_tallsiffer_chunk.mp3');
  const cleanPath = resolve(OUTPUT_DIR, '_temp_tallsiffer_clean.mp3');
  const masterPath = resolve(MASTER_DIR, 'tall-siffer-test.mp3');

  console.log(`Genererer lyd (${(NORSK_INTRO + text).length} tegn)...`);
  const audio = await generateSpeech(text);
  writeFileSync(chunkPath, audio);
  console.log(`  Generert: ${(audio.length / 1024 / 1024).toFixed(2)} MB`);

  const introEnd = findIntroEnd(chunkPath);
  execSync(`ffmpeg -y -i "${chunkPath}" -ss ${introEnd.toFixed(3)} -c copy "${cleanPath}"`, { stdio: 'pipe' });
  execSync(`mv "${cleanPath}" "${masterPath}"`);
  unlinkSync(chunkPath);

  const duration = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${masterPath}"`, { encoding: 'utf-8' }).trim();
  console.log(`\nMaster lagret: ${masterPath}`);
  console.log(`Varighet: ${(parseFloat(duration) / 60).toFixed(1)} minutter`);
}

main().catch(console.error);
