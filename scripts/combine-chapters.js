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
