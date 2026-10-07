/**
 * Laster opp BARE de oppgitte filene (relative til public/) til Supabase Storage (bucket media),
 * med samme nøkkel, cache og manifest som upload-media-storage.ts. Brukes når andre sesjoner har
 * uferdige filer i public/ som ikke skal ut ennå (7.10.2026).
 * Kjør: npx tsx scripts/upload-media-liste.ts <liste.txt>
 */
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
for (const line of fs.readFileSync(path.join(ROOT, '.env.local'), 'utf-8').split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
}
const TYPER: Record<string, string> = { '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg' };
async function main() {
  const liste = fs.readFileSync(process.argv[2], 'utf-8').split('\n').map((s) => s.trim()).filter(Boolean);
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const manifestPath = path.join(ROOT, 'scripts', '.upload-media-manifest.json');
  const manifest: Record<string, number> = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf-8')) : {};
  let ok = 0, feil = 0;
  for (const key of liste) {
    const fil = path.join(PUBLIC_DIR, key);
    const body = fs.readFileSync(fil);
    if (body.length > 500 * 1024) { console.log('FOR TUNG (over 500 kB):', key); feil++; continue; }
    const { error } = await sb.storage.from('media').upload(key, body, { contentType: TYPER[path.extname(key)] ?? 'application/octet-stream', cacheControl: '604800', upsert: true });
    if (error) { console.log('FEIL', key, error.message); feil++; } else { manifest[key] = body.length; ok++; }
  }
  fs.writeFileSync(manifestPath, JSON.stringify(manifest));
  console.log(`Ferdig: ${ok} lastet opp, ${feil} feilet`);
}
main();
