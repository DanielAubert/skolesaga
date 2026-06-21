#!/usr/bin/env node
/**
 * Lagar slice-filer for ein quiz-omsetjingsbølge.
 * Reknar gjenståande = registry minus eksisterande quiz/nn-filer.
 * Default ekskluderer språkbøker; --lang inkluderer berre språkbøker.
 * Bruk: node scripts/quiz-make-wave.mjs [--per 10] [--agents 8] [--prefix qN] [--lang]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUIZ = path.join(ROOT, 'src', 'lib', 'data', 'quiz');
const NN = path.join(QUIZ, 'nn');
const SLICES = '/tmp/q-slices';

const LANG = ['fransk', 'spansk', 'tysk', 'engelsk', 'int-engelsk', 'samf-engelsk'];

const args = process.argv.slice(2);
const get = (f, d) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : d; };
const PER = parseInt(get('--per', '10'), 10);
const AGENTS = parseInt(get('--agents', '8'), 10);
const PREFIX = get('--prefix', 'q');
const LANG_ONLY = args.includes('--lang');

const reg = JSON.parse(fs.readFileSync(path.join(QUIZ, '_registry.json'), 'utf-8')).chapterIds;
fs.mkdirSync(NN, { recursive: true });
const have = new Set(fs.readdirSync(NN).filter((f) => f.endsWith('.json')).map((f) => f.slice(0, -5)));
const isLang = (id) => LANG.some((b) => id === b || id.startsWith(b + '-'));
const remaining = LANG_ONLY
  ? reg.filter((id) => !have.has(id) && isLang(id))
  : reg.filter((id) => !have.has(id) && !isLang(id));
const langRemaining = reg.filter((id) => !have.has(id) && isLang(id));

fs.mkdirSync(SLICES, { recursive: true });
for (const f of fs.readdirSync(SLICES)) if (f.startsWith(PREFIX + '-a')) fs.unlinkSync(path.join(SLICES, f));

const take = remaining.slice(0, PER * AGENTS);
let made = 0;
for (let i = 0; i < AGENTS; i++) {
  const ids = take.slice(i * PER, (i + 1) * PER);
  if (ids.length === 0) break;
  fs.writeFileSync(path.join(SLICES, `${PREFIX}-a${i + 1}.txt`), ids.join(' '));
  made++;
}
console.log(JSON.stringify({
  remainingNonLang: remaining.length,
  remainingLang: langRemaining.length,
  slicesMade: made,
  chaptersThisWave: take.length,
}));
