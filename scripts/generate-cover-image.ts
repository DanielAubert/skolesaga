/**
 * Generer forsidebilder til lærebokkapitler via Gemini Image Generation API.
 *
 * Enkeltbilde:
 *   npx tsx scripts/generate-cover-image.ts \
 *     --prompt "Lag et illustrert forsidebilde..." \
 *     --output public/images/subjects/fysikk-hero.png
 *
 * Med valgfri størrelse:
 *   npx tsx scripts/generate-cover-image.ts \
 *     --prompt "Lag et illustrert forsidebilde..." \
 *     --output public/images/subjects/fysikk-hero.png \
 *     --aspect-ratio 16:9 --size 2K
 *
 * Batch fra promptfil:
 *   npx tsx scripts/generate-cover-image.ts \
 *     --batch prompts.txt \
 *     --output-dir public/images/subjects/
 *
 * Kjør: npx tsx scripts/generate-cover-image.ts --help
 */

import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { GoogleGenAI } from '@google/genai';

// ---------------------------------------------------------------------------
// 1. Hjelpetekst
// ---------------------------------------------------------------------------
const HELP_TEXT = `
Bruk:
  npx tsx scripts/generate-cover-image.ts [opsjoner]

Enkeltbilde:
  --prompt, -p       Bildeprompt (påkrevd i enkeltmodus)
  --output, -o       Filsti for output-bilde (påkrevd i enkeltmodus)

Batch:
  --batch, -b        Sti til promptfil (annenhver linje: filnavn, prompt)
  --output-dir       Mappe for batchresultater (default: ./generated_images)

Felles:
  --aspect-ratio, -a Størrelsesforhold (default: 16:9)
  --size, -s         Oppløsning: 1K, 2K, 4K (default: 2K)
  --delay, -d        Forsinkelse i sekunder mellom batch-kall (default: 3)
  --help, -h         Vis denne hjelpeteksten

Miljøvariabler:
  GEMINI_API_KEY     Sett i .env.local
`.trim();

// ---------------------------------------------------------------------------
// 2. Parse CLI-argumenter
// ---------------------------------------------------------------------------
interface CliArgs {
  help: boolean;
  prompt?: string;
  output?: string;
  batch?: string;
  outputDir: string;
  aspectRatio: string;
  size: string;
  delay: number;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    help: false,
    outputDir: './generated_images',
    aspectRatio: '16:9',
    size: '2K',
    delay: 3,
  };

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case '--help':
      case '-h':
        args.help = true;
        break;
      case '--prompt':
      case '-p':
        args.prompt = argv[++i];
        break;
      case '--output':
      case '-o':
        args.output = argv[++i];
        break;
      case '--batch':
      case '-b':
        args.batch = argv[++i];
        break;
      case '--output-dir':
        args.outputDir = argv[++i];
        break;
      case '--aspect-ratio':
      case '-a':
        args.aspectRatio = argv[++i];
        break;
      case '--size':
      case '-s':
        args.size = argv[++i];
        break;
      case '--delay':
      case '-d':
        args.delay = Number(argv[++i]);
        break;
      default:
        console.error(`Ukjent argument: ${arg}`);
        console.error('Bruk --help for å se tilgjengelige opsjoner.');
        process.exit(1);
    }
  }

  return args;
}

// ---------------------------------------------------------------------------
// 3. Last API-nøkkel fra .env.local
// ---------------------------------------------------------------------------
function loadApiKey(): string {
  const envPath = resolve(__dirname, '..', '.env.local');
  if (!existsSync(envPath)) {
    console.error('Feil: .env.local ikke funnet.');
    console.error(`Forventet sti: ${envPath}`);
    console.error('Opprett filen og legg til: GEMINI_API_KEY=din-nøkkel-her');
    process.exit(1);
  }

  const envContent = readFileSync(envPath, 'utf-8');
  // ⚠ Forankret til linjestart og med «ikke #» foran: uten det plukket regexen
  // den FØRSTE forekomsten i fila — også en utkommentert, død nøkkel. Nesten
  // brukt 30. juli 2026, da en ugyldig nøkkel lå parkert i samme fil.
  const match = envContent.match(/^[ \t]*GEMINI_API_KEY="?([^"\n]+?)"?[ \t]*$/m);
  if (!match) {
    console.error('Feil: GEMINI_API_KEY ikke funnet i .env.local');
    console.error('Legg til linjen: GEMINI_API_KEY=din-nøkkel-her');
    process.exit(1);
  }

  return match[1].trim();
}

// ---------------------------------------------------------------------------
// 4. Valider parametere
// ---------------------------------------------------------------------------
const VALID_SIZES = ['1K', '2K', '4K'];
const VALID_ASPECT_RATIOS = ['1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9', '21:9'];

function validateParams(size: string, aspectRatio: string): void {
  if (!VALID_SIZES.includes(size)) {
    console.error(`Ugyldig størrelse: ${size}. Bruk: ${VALID_SIZES.join(', ')}`);
    process.exit(1);
  }
  if (!VALID_ASPECT_RATIOS.includes(aspectRatio)) {
    console.error(`Ugyldig aspect-ratio: ${aspectRatio}. Bruk: ${VALID_ASPECT_RATIOS.join(', ')}`);
    process.exit(1);
  }
}

// ---------------------------------------------------------------------------
// 5. Generer ett bilde
// ---------------------------------------------------------------------------
async function generateImage(
  client: GoogleGenAI,
  prompt: string,
  outputPath: string,
  size: string,
  aspectRatio: string,
): Promise<void> {
  const absPath = resolve(outputPath);
  const dir = dirname(absPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  console.log(`\nGenererer bilde...`);
  console.log(`  Prompt: ${prompt.substring(0, 100)}${prompt.length > 100 ? '...' : ''}`);
  console.log(`  Størrelse: ${size}, Aspect ratio: ${aspectRatio}`);
  console.log(`  Output: ${absPath}`);

  const response = await client.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ],
    config: {
      responseModalities: ['TEXT', 'IMAGE'],
      imageConfig: {
        imageSize: size,
        aspectRatio: aspectRatio,
      },
    },
  });

  // Finn bilde i respons
  const parts = response.candidates?.[0]?.content?.parts;
  if (!parts) {
    throw new Error('Ingen respons fra API-et.');
  }

  let imageFound = false;
  for (const part of parts) {
    if (part.inlineData?.data) {
      const buffer = Buffer.from(part.inlineData.data, 'base64');
      writeFileSync(absPath, buffer);
      console.log(`  Lagret: ${absPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
      imageFound = true;
      break;
    }
  }

  if (!imageFound) {
    // Logg eventuell tekst fra API-et for debugging
    for (const part of parts) {
      if (part.text) {
        console.error(`  API-tekst: ${part.text}`);
      }
    }
    throw new Error('API-et returnerte ikke et bilde. Se tekst ovenfor for detaljer.');
  }
}

// ---------------------------------------------------------------------------
// 6. Parse batchfil
// ---------------------------------------------------------------------------
function parseBatchFile(filePath: string): Array<{ filename: string; prompt: string }> {
  const absPath = resolve(filePath);
  if (!existsSync(absPath)) {
    console.error(`Feil: Batchfil ikke funnet: ${absPath}`);
    process.exit(1);
  }

  const content = readFileSync(absPath, 'utf-8');
  const lines = content
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith('#'));

  if (lines.length % 2 !== 0) {
    console.error('Feil: Batchfilen må ha et partall antall linjer (filnavn + prompt parvis).');
    console.error(`Fant ${lines.length} ikke-tomme linjer.`);
    process.exit(1);
  }

  const entries: Array<{ filename: string; prompt: string }> = [];
  for (let i = 0; i < lines.length; i += 2) {
    entries.push({
      filename: lines[i],
      prompt: lines[i + 1],
    });
  }

  return entries;
}

// ---------------------------------------------------------------------------
// 7. Sleep-hjelper
// ---------------------------------------------------------------------------
function sleep(seconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, seconds * 1000));
}

// ---------------------------------------------------------------------------
// 8. Hovedfunksjon
// ---------------------------------------------------------------------------
async function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    console.log(HELP_TEXT);
    process.exit(0);
  }

  // Valider modus
  const isSingle = !!(args.prompt || args.output);
  const isBatch = !!args.batch;

  if (!isSingle && !isBatch) {
    console.error('Feil: Du må oppgi enten --prompt/--output (enkeltmodus) eller --batch (batchmodus).');
    console.error('Bruk --help for å se tilgjengelige opsjoner.');
    process.exit(1);
  }

  if (isSingle && isBatch) {
    console.error('Feil: Kan ikke bruke --prompt/--output og --batch samtidig.');
    process.exit(1);
  }

  if (isSingle) {
    if (!args.prompt) {
      console.error('Feil: --prompt er påkrevd i enkeltmodus.');
      process.exit(1);
    }
    if (!args.output) {
      console.error('Feil: --output er påkrevd i enkeltmodus.');
      process.exit(1);
    }
  }

  // Last API-nøkkel og opprett klient
  const apiKey = loadApiKey();
  const client = new GoogleGenAI({ apiKey });
  validateParams(args.size, args.aspectRatio);

  if (isSingle) {
    // Enkeltmodus
    await generateImage(client, args.prompt!, args.output!, args.size, args.aspectRatio);
    console.log('\nFerdig!');
  } else {
    // Batchmodus
    const entries = parseBatchFile(args.batch!);
    console.log(`Fant ${entries.length} bilder å generere.\n`);

    let success = 0;
    let failed = 0;

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const outputPath = resolve(args.outputDir, entry.filename);

      console.log(`--- [${i + 1}/${entries.length}] ${entry.filename} ---`);

      try {
        await generateImage(client, entry.prompt, outputPath, args.size, args.aspectRatio);
        success++;
      } catch (err) {
        console.error(`  FEIL: ${err instanceof Error ? err.message : err}`);
        failed++;
      }

      // Vent mellom kall (unntatt etter siste)
      if (i < entries.length - 1) {
        console.log(`  Venter ${args.delay}s før neste...`);
        await sleep(args.delay);
      }
    }

    console.log(`\nFerdig! ${success} vellykket, ${failed} feilet.`);
  }
}

main().catch((err) => {
  console.error('Uventet feil:', err);
  process.exit(1);
});
