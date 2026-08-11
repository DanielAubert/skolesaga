/**
 * Henter ned Supabase-bøtter som eksamenssett eier, og som IKKE finnes noe
 * annet sted.
 *
 * ── HVORFOR ─────────────────────────────────────────────────────────────────
 * Målt 11. august 2026 var eksamenssett godt dekket på nesten alt: 2 433 av
 * 2 460 filer under `public/` ligger i git og dermed på GitHub, og de 1 501
 * høyskole-eksamenene i `educational-assets` kan gjenskapes fra kildearkivet
 * `~/Desktop/Eksamner`, som er iCloud-synkronisert.
 *
 * Men `online-exam-archive` (2 003 filer, 0,40 GB) finnes BARE i Supabase.
 * Den inneholder blant annet KI-generert lyd til de nettbaserte eksamenene
 * (`audio_001_ai.mp3` osv.), som verken ligger lokalt eller i git — og som
 * ville kostet ElevenLabs-kall å lage på nytt.
 *
 * Kjør:  npx tsx scripts/backup-eksamenssett-storage.ts
 *
 * Skriptet er inkrementelt: filer som alt finnes med samme størrelse hoppes
 * over, så gjentatte kjøringer er billige og bruker nesten ingen egress.
 */
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

const BØTTER = ['online-exam-archive'];
const SAMTIDIGE = 8;
const ROOT = path.join(__dirname, '..');
const DEST = process.env.MEDIA_BACKUP_DIR
  || path.join(os.homedir(), 'Desktop', 'Skolesaga-mediebackup');

for (const l of fs.readFileSync(path.join(ROOT, '.env.local'), 'utf-8').split('\n')) {
  const m = l.match(/^([A-Z_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
}
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function liste(b: string, p = '', d = 0, ut: { f: string; s: number }[] = []) {
  const { data } = await sb.storage.from(b).list(p, { limit: 1000 });
  for (const o of data ?? []) {
    const f = p ? `${p}/${o.name}` : o.name;
    const s = (o.metadata as { size?: number } | null)?.size;
    if (s !== undefined) ut.push({ f, s });
    else if (d < 6) await liste(b, f, d + 1, ut);
  }
  return ut;
}

async function main() {
  for (const bøtte of BØTTER) {
    const filer = await liste(bøtte);
    const utRot = path.join(DEST, 'eksamenssett', bøtte);
    console.log(`${bøtte}: ${filer.length} filer i Storage`);

    let hentet = 0, hoppet = 0, feil = 0, bytes = 0;
    const kø = [...filer];
    async function arbeider() {
      for (;;) {
        const e = kø.shift();
        if (!e) return;
        const mål = path.join(utRot, e.f);
        // Inkrementelt: samme størrelse ⇒ allerede hentet.
        if (fs.existsSync(mål) && fs.statSync(mål).size === e.s) { hoppet++; continue; }
        const { data, error } = await sb.storage.from(bøtte).download(e.f);
        if (error || !data) { feil++; continue; }
        fs.mkdirSync(path.dirname(mål), { recursive: true });
        const buf = Buffer.from(await data.arrayBuffer());
        fs.writeFileSync(mål, buf);
        hentet++; bytes += buf.length;
        if (hentet % 200 === 0) console.log(`   ${hentet} hentet …`);
      }
    }
    await Promise.all(Array.from({ length: SAMTIDIGE }, arbeider));
    console.log(`   hentet ${hentet} (${(bytes / 1048576).toFixed(0)} MB)`
      + ` · hoppet over ${hoppet} · feilet ${feil}`);
  }
}

main();
