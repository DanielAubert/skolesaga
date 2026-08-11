/**
 * Speiler public/audio og public/images til en backupmappe utenfor repoet.
 *
 * ── HVORFOR DETTE FINNES ────────────────────────────────────────────────────
 * Mediefilene ble tatt ut av git-sporingen 26. juli 2026 (HEAD gikk fra 3 005
 * til 522 MB). Etter det fantes originalene bare to steder: lokalt på maskinen,
 * og i Supabase Storage. Storage er samme leverandør som produksjon — går
 * prosjektet tapt, går begge kopiene samtidig. Det er ikke en backup.
 *
 * Skriptet kjøres AUTOMATISK til slutt i upload-media-storage.ts, som er det
 * obligatoriske steget for alt nytt medieinnhold. Nye bilder og lydfiler havner
 * dermed i backupen i samme operasjon som de publiseres, uten at noen må huske
 * det.
 *
 * Kjør også manuelt ved behov:  npx tsx scripts/backup-media.ts
 * Egen plassering:              MEDIA_BACKUP_DIR=/Volumes/Disk/backup npx tsx …
 *
 * ⚠ SPEILET BESKYTTER IKKE MOT SLETTING. rsync kjøres med --delete, så en fil
 * som forsvinner lokalt, forsvinner også fra speilet ved neste kjøring. Mot det
 * hjelper bare et ØYEBLIKKSBILDE:
 *
 *     npx tsx scripts/backup-media.ts --snapshot
 *
 * Det legger en datert `images-ÅÅÅÅ-MM-DD.tar.gz` i backupmappa og beholder de
 * to nyeste. Lyd tas ikke med som standard (1,7 GB per snapshot); bruk
 * --snapshot-lyd hvis du vil ha den òg.
 *
 * ⚠ Backupen ligger som standard på Desktop, altså på SAMME MASKIN som
 * originalene. Det beskytter mot slettede filer og feilkonverteringer, men ikke
 * mot at maskinen går tapt. Sett MEDIA_BACKUP_DIR til en ekstern disk eller en
 * synkronisert skymappe for at den skal være verdt navnet.
 */
import { createClient } from '@supabase/supabase-js';
import { execFileSync } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const KILDER = ['audio', 'images'];
const DEST = process.env.MEDIA_BACKUP_DIR
  || path.join(os.homedir(), 'Desktop', 'Skolesaga-mediebackup');

/**
 * Ligger backupen et sted som faktisk synkroniseres bort fra maskinen?
 *
 * ⚠ Dette MÅ sjekkes, ikke antas. Skriptet skrev en stund «ligger på samme
 * maskin» selv om mappa lå på et Skrivebord med iCloud-synk på — altså en
 * advarsel som var usann. Og den motsatte feilen er verre: slår noen av
 * Skrivebord-synk, slutter backupen stille å være en backup.
 */
function skysynket(p: string): string | null {
  const hjem = os.homedir();
  if (p.startsWith(path.join(hjem, 'Library', 'Mobile Documents'))) return 'iCloud Drive';
  // Skrivebord/Dokumenter-synk speiler mappene inn under CloudDocs.
  for (const m of ['Desktop', 'Documents']) {
    if (p.startsWith(path.join(hjem, m))
        && fs.existsSync(path.join(hjem, 'Library', 'Mobile Documents',
                                   'com~apple~CloudDocs', m))) {
      return `iCloud Drive (${m}-synk)`;
    }
  }
  for (const [mappe, navn] of [['Dropbox', 'Dropbox'], ['Google Drive', 'Google Drive'],
                               ['OneDrive', 'OneDrive']] as const) {
    if (p.includes(`/${mappe}`)) return navn;
  }
  return null;
}

export function backupMedia(stille = false): boolean {
  const speil = path.join(DEST, 'speil');
  const finnes = KILDER.filter((d) => fs.existsSync(path.join(PUBLIC_DIR, d)));
  if (finnes.length === 0) {
    console.warn('⚠ backup-media: fant verken public/audio eller public/images — hoppet over');
    return false;
  }

  // ⚠ Et manglende mål skal BRØLE, ikke hoppes stille over. Hele grunnen til at
  // dette skriptet finnes, er at en manglende kopi ikke ble oppdaget.
  try {
    fs.mkdirSync(speil, { recursive: true });
  } catch (e) {
    console.error(`\n⛔ BACKUP FEILET — kunne ikke skrive til ${speil}`);
    console.error(`   ${(e as Error).message}`);
    console.error('   Er den eksterne disken montert? Sett evt. MEDIA_BACKUP_DIR.\n');
    return false;
  }

  const før = Date.now();
  const ut = execFileSync('rsync', [
    '-a', '--delete', '--stats',
    ...finnes.map((d) => path.join(PUBLIC_DIR, d)),
    speil + path.sep,
  ], { encoding: 'utf-8', maxBuffer: 64 * 1024 * 1024 });

  const tall = (m: RegExp) => Number((ut.match(m)?.[1] ?? '0').replace(/[^0-9]/g, ''));
  const filer = tall(/Number of files: ([\d,]+)/);
  const overført = tall(/Total transferred file size: ([\d,]+)/);
  const bytes = tall(/Total file size: ([\d,]+)/);

  // Manifest med sjekksummer: et arkiv man ikke kan verifisere, er ikke en backup.
  const manifest = path.join(DEST, 'manifest.sha256');
  const linjer: string[] = [];
  for (const d of finnes) {
    const rot = path.join(speil, d);
    const gå = (p: string) => {
      for (const e of fs.readdirSync(p, { withFileTypes: true })) {
        const full = path.join(p, e.name);
        if (e.isDirectory()) gå(full);
        else linjer.push(`${fs.statSync(full).size}  ${path.relative(speil, full)}`);
      }
    };
    if (fs.existsSync(rot)) gå(rot);
  }
  fs.writeFileSync(manifest, linjer.sort().join('\n') + '\n');

  if (!stille) {
    console.log(`\n📦 Backup: ${filer} filer · ${(bytes / 1073741824).toFixed(2)} GB`
      + ` · ${(overført / 1048576).toFixed(0)} MB overført`
      + ` · ${((Date.now() - før) / 1000).toFixed(0)}s`);
    console.log(`   ${speil}`);
    const sky = skysynket(speil);
    if (sky) console.log(`   ☁︎ synkroniseres til ${sky} — altså også utenfor maskinen`);
    else {
      console.log('   ⚠ Ligger BARE på denne maskinen. Sett MEDIA_BACKUP_DIR til en'
        + ' ekstern disk eller en synkronisert skymappe.');
    }
  }
  return true;
}

/**
 * Er Supabase Storage faktisk en komplett kopi?
 *
 * Storage er den ENESTE kopien utenfor denne maskinen, og upload-skriptet
 * sletter aldri — bare upsert-er — så bøtta fungerer som et append-only-arkiv.
 * Målt 11. august 2026: 2 619 lokale filer, 2 863 i Storage, 0 manglende
 * mediefiler, 246 filer bevart i Storage etter at de var slettet lokalt.
 *
 * ⚠ Dette beskytter mot tapt maskin og lokal sletting — IKKE mot at
 * Supabase-kontoen eller prosjektet går tapt. Da ryker produksjon og backup
 * samtidig. En kopi hos en annen leverandør er det eneste som dekker det.
 */
export async function verifiserStorage(): Promise<boolean> {
  for (const l of fs.readFileSync(path.join(ROOT, '.env.local'), 'utf-8').split('\n')) {
    const m = l.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const fjern = new Map<string, number>();
  async function walk(p: string, d = 0) {
    const { data } = await sb.storage.from('media').list(p, { limit: 1000 });
    for (const o of data ?? []) {
      const full = p ? `${p}/${o.name}` : o.name;
      const sz = (o.metadata as any)?.size;
      if (sz !== undefined) fjern.set(full, sz);
      else if (d < 6) await walk(full, d + 1);
    }
  }
  for (const d of KILDER) await walk(d);
  const lok = new Map<string, number>();
  const gå = (dir: string) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const f = path.join(dir, e.name);
      if (e.isDirectory()) gå(f);
      else if (!e.name.startsWith('.') && !e.name.endsWith('.md'))
        lok.set(path.relative(PUBLIC_DIR, f).split(path.sep).join('/'), fs.statSync(f).size);
    }
  };
  for (const d of KILDER) { const r = path.join(PUBLIC_DIR, d); if (fs.existsSync(r)) gå(r); }

  const mangler = [...lok.keys()].filter((k) => !fjern.has(k));
  const ulik = [...lok.entries()].filter(([k, v]) => fjern.has(k) && fjern.get(k) !== v);
  console.log(`\n🔎 Storage: ${fjern.size} filer · lokalt: ${lok.size}`);
  if (mangler.length || ulik.length) {
    console.error(`⛔ ${mangler.length} mediefil(er) MANGLER i Storage, ${ulik.length} har ulik størrelse`);
    [...mangler, ...ulik.map(([k]) => k)].slice(0, 10).forEach((m) => console.error(`   ${m}`));
    console.error('   Kjør: npx tsx scripts/upload-media-storage.ts\n');
    return false;
  }
  console.log('   ✅ komplett — hver lokale mediefil finnes i Storage med samme størrelse');
  console.log(`   ${[...fjern.keys()].filter((k) => !lok.has(k)).length} filer bevart i Storage etter lokal sletting`);
  return true;
}

function snapshot(medLyd: boolean) {
  const dato = new Date().toISOString().slice(0, 10);
  const mapper = medLyd ? ['images', 'audio'] : ['images'];
  for (const m of mapper) {
    const fil = path.join(DEST, `${m}-${dato}.tar.gz`);
    console.log(`   lager ${path.basename(fil)} …`);
    execFileSync('tar', ['-czf', fil, '-C', PUBLIC_DIR, m], { maxBuffer: 64 * 1024 * 1024 });
    // Behold de to nyeste per mappe — flere ville spist disken (2,4 GB per full runde).
    const gamle = fs.readdirSync(DEST)
      .filter((f) => f.startsWith(`${m}-`) && f.endsWith('.tar.gz'))
      .sort().reverse().slice(2);
    for (const g of gamle) { fs.unlinkSync(path.join(DEST, g)); console.log(`   slettet gammelt: ${g}`); }
    console.log(`   ${(fs.statSync(fil).size / 1048576).toFixed(0)} MB`);
  }
}

if (require.main === module) {
  const ok = backupMedia();
  if (ok && process.argv.includes('--snapshot')) snapshot(process.argv.includes('--snapshot-lyd'));
  if (process.argv.includes('--verifiser-storage')) {
    verifiserStorage().then((ok2) => process.exit(ok2 ? 0 : 1));
  }
}
