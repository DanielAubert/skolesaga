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
