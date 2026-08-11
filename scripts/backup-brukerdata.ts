/**
 * Krypterte dumper av BRUKERTABELLENE — det eneste innholdet som ikke finnes
 * noe annet sted enn i Supabase.
 *
 * ── HVORFOR ─────────────────────────────────────────────────────────────────
 * Den daglige GitHub-jobben sikrer `content_data` (lærebokinnholdet), men ikke
 * brukerne. Målt 11. august 2026: 1 139 brukere, 185 kjøpte kurs, 203
 * klippekortsaldoer, 182 lærerabonnement. Går Supabase-prosjektet tapt, går
 * kundenes kjøp og fremdrift med — og det kan ikke gjenskapes fra noe.
 *
 * ── ⚠ DETTE ER PERSONDATA ───────────────────────────────────────────────────
 * Dumpen inneholder e-postadresser og kjøpshistorikk. Den skrives derfor ALDRI
 * i klartekst: filen krypteres med AES-256 før den forlater prosessen, og
 * skriptet nekter å kjøre uten nøkkel. Konsekvenser:
 *
 *   · Nøkkelen (`BACKUP_ENCRYPTION_KEY`) hører hjemme i en passordhvelv —
 *     ikke i git, ikke i .env.local som synkroniseres, ikke i iCloud ved siden
 *     av dumpen. Mister du nøkkelen, er backupen verdiløs.
 *   · Backupen skal med i databehandleroversikten. Se docs/juridisk-todo.md.
 *   · Slettes en bruker etter GDPR-krav, ligger vedkommende fortsatt i gamle
 *     dumper til de roterer ut. Oppbevaringstiden under er derfor kort med
 *     vilje, og bør begrunnes i personvernerklæringen.
 *
 * ── BRUK ────────────────────────────────────────────────────────────────────
 *   BACKUP_ENCRYPTION_KEY='…' npx tsx scripts/backup-brukerdata.ts
 *   npx tsx scripts/backup-brukerdata.ts --gjenopprett fil.json.gz.enc   # dekrypter
 */
import { createClient } from '@supabase/supabase-js';
import { execFileSync } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as zlib from 'zlib';

const ROOT = path.join(__dirname, '..');
const DEST = process.env.MEDIA_BACKUP_DIR
  || path.join(os.homedir(), 'Desktop', 'Skolesaga-mediebackup');
const OPPBEVARING_DAGER = 30;

// Tabellene som IKKE kan gjenskapes fra git eller innholdsdumpen.
const TABELLER = [
  'users', 'unlocked_courses', 'user_credits', 'teacher_subscriptions',
  'quiz_results', 'classes', 'class_memberships', 'organizations',
  'challenges', 'challenge_players', 'geogebra_progress', 'user_saved_items',
];

/**
 * Nøkkelen hentes fra macOS-nøkkelringen når den ikke er satt i miljøet.
 * Det er det som gjør automatisk kjøring mulig UTEN å legge hemmeligheten i en
 * plist, i git eller i .env.local (som synkroniseres til iCloud sammen med
 * dumpen — nøkkel og lås i samme konvolutt).
 *
 * Legg den inn én gang:
 *   security add-generic-password -a "$USER" -s skolesaga-backup -w '<nøkkel>'
 */
function nøkkelFraNøkkelring(): string | null {
  try {
    return execFileSync('security', ['find-generic-password', '-a', os.userInfo().username,
      '-s', 'skolesaga-backup', '-w'], { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  } catch { return null; }
}

function lastEnv() {
  const p = path.join(ROOT, '.env.local');
  if (!fs.existsSync(p)) return;
  for (const l of fs.readFileSync(p, 'utf-8').split('\n')) {
    const m = l.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
}

async function dump() {
  lastEnv();
  if (!process.env.BACKUP_ENCRYPTION_KEY) {
    const fraRing = nøkkelFraNøkkelring();
    if (fraRing) process.env.BACKUP_ENCRYPTION_KEY = fraRing;
  }
  const nøkkel = process.env.BACKUP_ENCRYPTION_KEY;
  if (!nøkkel || nøkkel.length < 16) {
    console.error('\n⛔ BACKUP_ENCRYPTION_KEY mangler (eller er under 16 tegn).');
    console.error('   Dumpen inneholder e-postadresser og kjøpshistorikk og skrives');
    console.error('   aldri ukryptert. Lag en nøkkel, legg den i en passordhvelv, og');
    console.error('   kjør:  BACKUP_ENCRYPTION_KEY=\'…\' npx tsx scripts/backup-brukerdata.ts\n');
    process.exit(1);
  }

  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!);

  const data: Record<string, unknown[]> = {};
  for (const t of TABELLER) {
    // Paginering: Supabase returnerer maks 1 000 rader per kall.
    const rader: unknown[] = [];
    for (let fra = 0; ; fra += 1000) {
      const { data: d, error } = await sb.from(t).select('*').range(fra, fra + 999);
      if (error) { console.warn(`   ⚠ ${t}: ${error.message}`); break; }
      rader.push(...(d ?? []));
      if (!d || d.length < 1000) break;
    }
    data[t] = rader;
    console.log(`   ${String(rader.length).padStart(6)}  ${t}`);
  }

  const sum = Object.values(data).reduce((n, r) => n + r.length, 0);
  // ⚠ Nekt å skrive en tom eller halv dump over en god én. Samme vern som
  // content_data-jobben har, og av samme grunn: en stille tom backup er verre
  // enn ingen, fordi den ser ut som om alt er i orden.
  if (sum < 100) {
    console.error(`\n⛔ Bare ${sum} rader totalt — forventet tusenvis. Avbryter.`);
    process.exit(1);
  }

  const dato = new Date().toISOString().slice(0, 10);
  const mappe = path.join(DEST, 'brukerdata');
  fs.mkdirSync(mappe, { recursive: true });
  const fil = path.join(mappe, `brukerdata-${dato}.json.gz.enc`);

  const rå = zlib.gzipSync(Buffer.from(JSON.stringify(data)));
  execFileSync('openssl', ['enc', '-aes-256-cbc', '-pbkdf2', '-iter', '200000',
    '-salt', '-out', fil, '-pass', 'env:BACKUP_ENCRYPTION_KEY'], { input: rå });

  console.log(`\n🔐 ${sum} rader · ${(fs.statSync(fil).size / 1024).toFixed(0)} KB kryptert`);
  console.log(`   ${fil}`);

  const gamle = fs.readdirSync(mappe).filter((f) => f.endsWith('.enc')).sort().reverse()
    .slice(OPPBEVARING_DAGER);
  for (const g of gamle) { fs.unlinkSync(path.join(mappe, g)); console.log(`   rotert ut: ${g}`); }
}

function gjenopprett(fil: string) {
  lastEnv();
  if (!process.env.BACKUP_ENCRYPTION_KEY) {
    const fraRing = nøkkelFraNøkkelring();
    if (fraRing) process.env.BACKUP_ENCRYPTION_KEY = fraRing;
  }
  if (!process.env.BACKUP_ENCRYPTION_KEY) { console.error('⛔ BACKUP_ENCRYPTION_KEY mangler'); process.exit(1); }
  let data: Record<string, unknown[]>;
  try {
    const ut = execFileSync('openssl', ['enc', '-d', '-aes-256-cbc', '-pbkdf2', '-iter', '200000',
      '-in', fil, '-pass', 'env:BACKUP_ENCRYPTION_KEY'],
      { maxBuffer: 512 * 1024 * 1024, stdio: ['pipe', 'pipe', 'pipe'] });
    data = JSON.parse(zlib.gunzipSync(ut).toString());
  } catch {
    // ⚠ Feil nøkkel MÅ si fra tydelig. Første utkast lot openssl feile stille,
    // og da så en mislykket gjenoppretting ut som ingenting.
    console.error('\n⛔ Kunne ikke dekryptere. Feil BACKUP_ENCRYPTION_KEY, eller fila er skadet.\n');
    process.exit(1);
  }
  for (const [t, r] of Object.entries(data)) console.log(`   ${String((r as unknown[]).length).padStart(6)}  ${t}`);
  // ⚠ ALDRI skriv klartekst tilbake i backupmappa. Første utkast gjorde det, og
  // la 3,8 MB brukerdata ukryptert i en iCloud-synket mappe — altså nøyaktig
  // den eksponeringen krypteringen skulle hindre. Klartekst havner nå i
  // arbeidskatalogen, utenfor alt som synkroniseres, og bare når du ber om det.
  const mål = process.env.GJENOPPRETT_TIL
    || path.join(process.cwd(), `brukerdata-gjenopprettet-${Date.now()}.json`);
  if (mål.startsWith(DEST)) {
    console.error('\n⛔ Nekter å skrive klartekst inn i backupmappa. Velg et annet mål.\n');
    process.exit(1);
  }
  fs.writeFileSync(mål, JSON.stringify(data, null, 2), { mode: 0o600 });
  console.log(`\n   ⚠ KLARTEKST med persondata skrevet til:`);
  console.log(`     ${mål}`);
  console.log(`     SLETT den så snart du er ferdig:  rm '${mål}'`);
}

const i = process.argv.indexOf('--gjenopprett');
if (i >= 0) gjenopprett(process.argv[i + 1]);
else dump();
