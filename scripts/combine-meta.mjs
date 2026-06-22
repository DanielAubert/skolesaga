#!/usr/bin/env node
/** Byggjer src/lib/data/meta/_all.nn.json frå meta/nn/<id>.json. = { <chapterId>: {title?,subtitle?,description?,topics?} } */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const NN_DIR = path.join(ROOT, 'src', 'lib', 'data', 'meta', 'nn');
const OUT = path.join(ROOT, 'src', 'lib', 'data', 'meta', '_all.nn.json');

const out = {};
if (fs.existsSync(NN_DIR)) {
  for (const f of fs.readdirSync(NN_DIR).filter((f) => f.endsWith('.json'))) {
    const id = f.slice(0, -5);
    try {
      const data = JSON.parse(fs.readFileSync(path.join(NN_DIR, f), 'utf-8'));
      if (data.meta && typeof data.meta === 'object') out[id] = data.meta;
    } catch (e) { console.warn(`  hopp over ${f}: ${e.message}`); }
  }
}
fs.writeFileSync(OUT, JSON.stringify(out));
console.log(`Bygde meta/_all.nn.json: ${Object.keys(out).length} kapittel`);
