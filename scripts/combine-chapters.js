/**
 * Kombinerer individuelle kapittel-JSON-filer til én _all.json.
 * Kjøres som prebuild-steg for å minimere file tracing på Vercel.
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'lib', 'data', 'chapters');
const registry = JSON.parse(fs.readFileSync(path.join(dir, '_registry.json'), 'utf-8'));

const chapters = {};
for (const id of registry.chapterIds) {
  chapters[id] = JSON.parse(fs.readFileSync(path.join(dir, id + '.json'), 'utf-8'));
}

fs.writeFileSync(
  path.join(dir, '_all.json'),
  JSON.stringify({ chapters, aliases: registry.aliases })
);

console.log(`Kombinerte ${registry.chapterIds.length} kapitler til _all.json`);

// ---------------------------------------------------------------------------
// _dates.json — endringstidspunkt per kapittel, til <lastmod> i sitemapet.
//
// Dette MÅ forhåndsberegnes her, ikke slås opp i sitemap.ts. Gjorde vi det
// siste, ble deployen avvist 26. juli 2026:
//
//   The Vercel Function "sitemap.xml.rsc" is 597.12mb uncompressed which
//   exceeds the maximum uncompressed size limit of 250mb.
//
// Årsaken var et dynamisk fs-oppslag — `fs.statSync(dir + `${stem}.json`)`.
// Turbopack klarer ikke se hvilken fil et interpolert navn peker på, så den
// pakker HELE mønsteret inn i funksjonen: «matches 43670 files». Ett statisk
// import av denne ene fila (~0,5 MB) koster ingenting.
//
// Kilder, i prioritert rekkefølge:
//   1. git commit-tid — stabil på tvers av bygg, endrer seg aldri i ettertid
//   2. filas mtime — når git mangler (shallow clone, ingen .git i byggemiljøet)
//   3. utelates — sitemap.ts faller da tilbake til byggetidspunktet
const { execFileSync } = require('child_process');

const relChapterDir = path.join('src', 'lib', 'data', 'chapters');
const gitTimes = new Map();
try {
  const out = execFileSync(
    'git',
    ['log', '--pretty=format:%ct', '--name-only', '--no-renames', '--', relChapterDir],
    { cwd: path.join(__dirname, '..'), encoding: 'utf-8',
      maxBuffer: 256 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] },
  );
  let ts = 0;
  const prefix = relChapterDir + path.sep;
  for (const line of out.split('\n')) {
    if (!line) continue;
    if (/^\d{9,11}$/.test(line)) { ts = Number(line) * 1000; continue; }
    if (!line.startsWith(prefix) || !line.endsWith('.json')) continue;
    // git log er nyeste-først, så første treff per fil er siste endring.
    const stem = line.slice(prefix.length, -'.json'.length);
    if (!gitTimes.has(stem)) gitTimes.set(stem, ts);
  }
} catch {
  // Ingen git tilgjengelig — vi faller tilbake til mtime under.
}

const dates = {};
let fraGit = 0, fraMtime = 0;
for (const id of registry.chapterIds) {
  const stem = (registry.aliases && registry.aliases[id]) || id;
  const git = gitTimes.get(stem) || gitTimes.get(id);
  if (git) {
    dates[id] = new Date(git).toISOString();
    fraGit++;
  } else {
    try {
      dates[id] = fs.statSync(path.join(dir, stem + '.json')).mtime.toISOString();
      fraMtime++;
    } catch { /* utelates; sitemap.ts bruker byggetidspunkt */ }
  }
}

fs.writeFileSync(path.join(dir, '_dates.json'), JSON.stringify(dates));
console.log(
  `Datoer for ${Object.keys(dates).length} kapitler til _dates.json ` +
  `(${fraGit} fra git, ${fraMtime} fra mtime)`
);

// Nynorsk-versjoner (sidecar): bunt til _all.nn.json. Kun de som faktisk er oversatt.
// _meta.tm (translation memory) strippes — rendereren trenger bare det oversatte innholdet.
const nnDir = path.join(dir, 'nn');
const nnChapters = {};
let nnCount = 0;
if (fs.existsSync(nnDir)) {
  for (const file of fs.readdirSync(nnDir)) {
    if (!file.endsWith('.json')) continue;
    const id = file.slice(0, -5);
    const ch = JSON.parse(fs.readFileSync(path.join(nnDir, file), 'utf-8'));
    delete ch._meta;
    nnChapters[id] = ch;
    nnCount++;
  }
}
fs.writeFileSync(
  path.join(dir, '_all.nn.json'),
  JSON.stringify({ chapters: nnChapters, aliases: registry.aliases })
);
console.log(`Kombinerte ${nnCount} nynorsk-kapitler til _all.nn.json`);

// Nordsamisk (sme) sidecar — ADMIN-ONLY review-språk. Samme mønster som nynorsk.
const smeDir = path.join(dir, 'sme');
const smeChapters = {};
let smeCount = 0;
if (fs.existsSync(smeDir)) {
  for (const file of fs.readdirSync(smeDir)) {
    if (!file.endsWith('.json')) continue;
    if (file.endsWith('.flags.json')) continue; // språksjekk-sidecar, ikke et kapittel
    const id = file.slice(0, -5);
    const ch = JSON.parse(fs.readFileSync(path.join(smeDir, file), 'utf-8'));
    delete ch._meta;
    smeChapters[id] = ch;
    smeCount++;
  }
}
fs.writeFileSync(
  path.join(dir, '_all.sme.json'),
  JSON.stringify({ chapters: smeChapters, aliases: registry.aliases })
);
console.log(`Kombinerte ${smeCount} nordsamiske kapitler til _all.sme.json`);

// Last nynorsk/nordsamisk opp til Supabase Storage (gzippet), siden de er for
// store til å bundle i serverless-funksjonen. Runtime henter dem derfra.
// Hopper over hvis service-role-nøkkel mangler (f.eks. lokal dev uten env).
async function uploadSidecars() {
  const zlib = require('zlib');
  const SUPA_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SRK = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPA_URL || !SRK) {
    console.log('⚠ Hopper over Storage-opplasting (mangler NEXT_PUBLIC_SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY)');
    return;
  }
  for (const file of ['_all.nn.json', '_all.sme.json']) {
    const gz = zlib.gzipSync(fs.readFileSync(path.join(dir, file)), { level: 9 });
    const res = await fetch(`${SUPA_URL}/storage/v1/object/chapter-data/${file}.gz`, {
      method: 'POST',
      headers: {
        apikey: SRK,
        Authorization: `Bearer ${SRK}`,
        'x-upsert': 'true',
        'Content-Type': 'application/gzip',
      },
      body: gz,
    });
    console.log(`Storage-opplasting ${file}.gz: HTTP ${res.status} (${(gz.length / 1048576).toFixed(1)} MB)`);
    if (!res.ok) throw new Error(`Storage-opplasting feilet for ${file}.gz: HTTP ${res.status}`);
  }
}

uploadSidecars().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
