/**
 * Laster opp public/audio og public/images til Supabase Storage (bucket: media).
 *
 * Brukes både for engangsmigrering og inkrementelt etter at nye lydfiler/bilder
 * er generert (texttovoice, forsidebilder osv.): skriptet hopper over filer som
 * allerede finnes med samme størrelse, og laster opp resten med upsert.
 *
 * Kjør: npx tsx scripts/upload-media-storage.ts
 */
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const SOURCE_DIRS = ['audio', 'images'];
const BUCKET = 'media';
const CONCURRENCY = 8;

const CONTENT_TYPES: Record<string, string> = {
  '.mp3': 'audio/mpeg',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
};

// Les .env.local manuelt (dotenv er ikke installert som avhengighet)
function loadEnv() {
  const envPath = path.join(ROOT, '.env.local');
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const match = line.match(/^([A-Z_]+)=(.*)$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, '');
    }
  }
}

function collectFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectFiles(full));
    else if (CONTENT_TYPES[path.extname(entry.name).toLowerCase()]) out.push(full);
  }
  return out;
}

async function main() {
  loadEnv();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const files = SOURCE_DIRS.flatMap((d) => {
    const dir = path.join(PUBLIC_DIR, d);
    return fs.existsSync(dir) ? collectFiles(dir) : [];
  });
  console.log(`Fant ${files.length} mediefiler`);

  // Manifest fra forrige kjøring: filer med uendret størrelse hoppes over,
  // resten lastes opp med upsert. Gjør skriptet trygt å kjøre på nytt.
  const manifestPath = path.join(ROOT, 'scripts', '.upload-media-manifest.json');
  let manifest: Record<string, number> = {};
  if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  }

  let uploaded = 0;
  let skipped = 0;
  let failed = 0;
  const failures: string[] = [];
  const queue = [...files];

  async function worker() {
    for (;;) {
      const file = queue.shift();
      if (!file) return;
      const key = path.relative(PUBLIC_DIR, file).split(path.sep).join('/');
      const size = fs.statSync(file).size;
      if (manifest[key] === size) {
        skipped++;
        continue;
      }
      const contentType = CONTENT_TYPES[path.extname(file).toLowerCase()];
      const body = fs.readFileSync(file);
      // Lyd er i praksis uforanderlig (30 dager); forsidebilder kan regenereres (7 dager)
      const cacheControl = key.startsWith('audio/') ? '2592000' : '604800';
      const { error } = await supabase.storage.from(BUCKET).upload(key, body, {
        contentType,
        cacheControl,
        upsert: true,
      });
      if (error) {
        failed++;
        failures.push(`${key}: ${error.message}`);
      } else {
        uploaded++;
        manifest[key] = size;
        if (uploaded % 100 === 0) {
          console.log(`Lastet opp ${uploaded} (${skipped} hoppet over, ${failed} feilet)`);
          fs.writeFileSync(manifestPath, JSON.stringify(manifest));
        }
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  fs.writeFileSync(manifestPath, JSON.stringify(manifest));

  console.log(`\nFerdig: ${uploaded} lastet opp, ${skipped} hoppet over, ${failed} feilet`);
  if (failures.length > 0) {
    console.log('Feilede filer:');
    failures.slice(0, 20).forEach((f) => console.log(`  ${f}`));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
