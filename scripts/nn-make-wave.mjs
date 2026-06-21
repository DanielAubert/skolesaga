#!/usr/bin/env node
/**
 * Lager slice-filer for ein oversetjingsbølge.
 * Reknar ut gjenståande kapittel (registry minus eksisterande nn/-filer),
 * hoppar over språkbøker (treng spesialhandsaming), og deler i N slices.
 *
 * Bruk: node scripts/nn-make-wave.mjs [--per 10] [--agents 8] [--prefix cur]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CH = path.join(ROOT, 'src', 'lib', 'data', 'chapters');
const NN = path.join(CH, 'nn');
const SLICES = '/tmp/nn-slices';

const LANG = ['fransk', 'spansk', 'tysk', 'engelsk', 'int-engelsk', 'samf-engelsk']; // språk/engelskspråklege bøker — tas seinare

const args = process.argv.slice(2);
const get = (f, d) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : d; };
const PER = parseInt(get('--per', '10'), 10);
const AGENTS = parseInt(get('--agents', '8'), 10);
const PREFIX = get('--prefix', 'cur');
const LANG_ONLY = args.includes('--lang'); // berre språkbøker (krev spesialhandsaming)

const reg = JSON.parse(fs.readFileSync(path.join(CH, '_registry.json'), 'utf-8')).chapterIds;
const have = new Set(fs.readdirSync(NN).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5)));
const isLang = (id) => LANG.some(b => id === b || id.startsWith(b + '-'));
const remaining = LANG_ONLY
  ? reg.filter(id => !have.has(id) && isLang(id))
  : reg.filter(id => !have.has(id) && !isLang(id));
const langRemaining = reg.filter(id => !have.has(id) && isLang(id));

fs.mkdirSync(SLICES, { recursive: true });
// rydd gamle cur-slices
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
