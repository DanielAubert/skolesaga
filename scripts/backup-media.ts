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
import { execFileSync } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const KILDER = ['audio', 'images'];
const DEST = process.env.MEDIA_BACKUP_DIR
  || path.join(os.homedir(), 'Desktop', 'Skolesaga-mediebackup');

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
    if (!process.env.MEDIA_BACKUP_DIR) {
      console.log('   ⚠ Ligger på samme maskin som originalene. Sett MEDIA_BACKUP_DIR'
        + ' til ekstern disk eller skymappe for ekte sikkerhet.');
    }
  }
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
}
