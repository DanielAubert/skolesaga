#!/usr/bin/env node
/**
 * Dumpar all bokmål-quiz til JSON så omsetjings-pipelinen kan lese han utan TS-bygg.
 * Les kvar quiz-data-*.ts + chemistry-quiz-data.ts + samfunnskunnskap-quiz-data.ts
 * (reine dataliteralar) og evaluerer `const ... = { ... }`-objektet direkte.
 * Køyr: node scripts/dump-quiz.mjs
 * Skriv: src/lib/data/quiz/_all.json      = { <chapterId>: QuizQuestion[] }
 *        src/lib/data/quiz/_registry.json = { chapterIds: [...] }
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'src', 'lib', 'data');
const OUT_DIR = path.join(DATA, 'quiz');

// Berre quiz-data-*.ts. chemistry-/samfunnskunnskap-quiz-data.ts er fallback-duplikat
// (alle id-ane finst alt i quiz-data-kjemi*/quiz-data-samfunnskunnskap*), så vi hoppar dei over.
const files = fs.readdirSync(DATA).filter((f) => /^quiz-data-.+\.ts$/.test(f));

// String-aware brace-match: returner substring av fyrste { ... } balanserte blokk frå idx.
function extractObject(text, fromIdx) {
  let i = text.indexOf('{', fromIdx);
  if (i < 0) return null;
  const start = i;
  let depth = 0, q = null, esc = false;
  for (; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (esc) { esc = false; continue; }
      if (c === '\\') { esc = true; continue; }
      if (c === q) q = null;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') { q = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return text.slice(start, i + 1); }
  }
  return null;
}

function evalLiteral(file, text) {
  // Finn fyrste const-deklarasjon av eit Record-objekt (quizData_* eller quizData)
  const m = text.match(/const\s+[A-Za-z0-9_]+\s*(?::\s*[^=]+?)?\s*=\s*\{/);
  if (!m) throw new Error(`fann ikkje const-objekt i ${file}`);
  const objText = extractObject(text, m.index);
  if (!objText) throw new Error(`klarte ikkje balansere braces i ${file}`);
  // eslint-disable-next-line no-new-func
  return new Function(`return (${objText});`)();
}

const all = {};
let collisions = 0;
for (const f of files) {
  const obj = evalLiteral(f, fs.readFileSync(path.join(DATA, f), 'utf-8'));
  if (!obj || typeof obj !== 'object') { console.warn(`  hopp over ${f} (tomt)`); continue; }
  for (const [id, arr] of Object.entries(obj)) {
    if (id in all) collisions++;
    all[id] = arr;
  }
}

const ids = Object.keys(all).sort();
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, '_all.json'), JSON.stringify(all));
fs.writeFileSync(path.join(OUT_DIR, '_registry.json'), JSON.stringify({ chapterIds: ids }, null, 1));

let q = 0;
for (const id of ids) q += Array.isArray(all[id]) ? all[id].length : 0;
console.log(`Dumpa ${files.length} filer -> ${ids.length} kapittel, ${q} spørsmål. Kollisjonar: ${collisions}`);
