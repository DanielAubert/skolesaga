// Robust import-basert apply: importerer data, bytter distraktorer per global gid,
// og re-serialiserer HELE quiz-data-<emne>.ts. Format-uavhengig (single/multi-line).
import fs from 'fs';
import { pathToFileURL } from 'url';
const emne = process.argv[2];
const fixesPath = process.argv[3];
const file = `/Users/danielandreasaubert/eksamenssett/Skolesaga/src/lib/data/quiz-data-${emne}.ts`;
const raw = fs.readFileSync(file, 'utf8');
const constName = (raw.match(/const\s+(\w+)\s*:/) || [])[1];
if (!constName) { console.error('fant ikke const-navn'); process.exit(1); }
const mod = await import(pathToFileURL(file).href);
const data = mod.default ?? mod;
const fixes = JSON.parse(fs.readFileSync(fixesPath, 'utf8'));
const fixMap = new Map(fixes.map(f => [f.gid, f.distractors]));
const norm = s => String(s).trim().toLowerCase();
let gid = 0, applied = 0, skipped = 0;
for (const [ch, qs] of Object.entries(data)) {
  if (!Array.isArray(qs)) continue;
  for (const q of qs) {
    const d = fixMap.get(gid);
    gid++;
    if (!d) continue;
    if (!Array.isArray(q.options) || q.options.length !== d.length + 1) { skipped++; continue; }
    const correct = q.options[0];
    const bad = d.some(x => !x || norm(x) === norm(correct)) || new Set(d.map(norm)).size !== d.length;
    if (bad) { skipped++; continue; }
    q.options = [correct, ...d];
    applied++;
  }
}
// serialiser
function serQ(q) {
  let s = '    {\n';
  for (const [k, v] of Object.entries(q)) {
    if (Array.isArray(v)) s += `      ${k}: [${v.map(x => JSON.stringify(x)).join(', ')}],\n`;
    else s += `      ${k}: ${JSON.stringify(v)},\n`;
  }
  return s + '    },\n';
}
let out = `import type { QuizQuestion } from './quiz-data';\n\nconst ${constName}: Record<string, QuizQuestion[]> = {\n`;
for (const [ch, qs] of Object.entries(data)) {
  out += `  ${JSON.stringify(ch)}: [\n`;
  for (const q of qs) out += serQ(q);
  out += `  ],\n`;
}
out += `};\n\nexport default ${constName};\n`;
fs.writeFileSync(file, out);
console.log(`APPLY2 ${emne}: ${applied} anvendt, ${skipped} hoppet over (gid totalt ${gid})`);
