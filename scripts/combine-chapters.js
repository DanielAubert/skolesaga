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
