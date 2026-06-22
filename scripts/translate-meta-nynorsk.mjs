#!/usr/bin/env node
/**
 * Omset chapterMeta (nav-titlar) frå bokmål til nynorsk — extract/apply, INGEN betalt API.
 * Kjelde: src/lib/data/meta/_all.json  (dump frå dump-meta.mjs)
 * Sidecar: src/lib/data/meta/nn/<chapterId>.json = { meta:{title?,subtitle?,description?,topics?}, _meta:{tm,...} }
 * Omsettbart: title, subtitle, description, topics[].
 *
 * Bruk:
 *   node scripts/translate-meta-nynorsk.mjs --extract <id...> --out /tmp/m-todo.json
 *   node scripts/translate-meta-nynorsk.mjs --apply /tmp/m-done.json
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const META_DIR = path.join(ROOT, 'src', 'lib', 'data', 'meta');
const NN_DIR = path.join(META_DIR, 'nn');

const sha = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 16);

let ALL = null;
function getAll() {
  if (!ALL) ALL = JSON.parse(fs.readFileSync(path.join(META_DIR, '_all.json'), 'utf-8'));
  return ALL;
}

function worthTranslating(s) {
  if (typeof s !== 'string' || s.trim().length === 0) return false;
  if (!/[a-zæøåA-ZÆØÅ]/.test(s)) return false;
  return true;
}

function collectRefs(meta) {
  const refs = [];
  for (const k of ['title', 'subtitle', 'description']) {
    if (typeof meta[k] === 'string' && worthTranslating(meta[k]))
      refs.push({ get: () => meta[k], set: (v) => { meta[k] = v; } });
  }
  if (Array.isArray(meta.topics)) {
    for (let i = 0; i < meta.topics.length; i++) {
      if (worthTranslating(meta.topics[i]))
        refs.push({ get: () => meta.topics[i], set: (v) => { meta.topics[i] = v; } });
    }
  }
  return refs;
}

function srcFor(id) {
  const all = getAll();
  if (!(id in all)) return null;
  const raw = JSON.stringify(all[id]);
  return { raw, srcHash: sha(raw), meta: JSON.parse(raw) };
}

function loadTm(id) {
  const p = path.join(NN_DIR, id + '.json');
  if (fs.existsSync(p)) {
    try { return JSON.parse(fs.readFileSync(p, 'utf-8'))._meta?.tm || {}; } catch { /* */ }
  }
  return {};
}

function extractOne(id, { force = false } = {}) {
  const c = srcFor(id);
  if (!c) return { id, status: 'missing-src', need: [] };
  const nnPath = path.join(NN_DIR, id + '.json');
  if (!force && fs.existsSync(nnPath)) {
    try {
      const ex = JSON.parse(fs.readFileSync(nnPath, 'utf-8'));
      if (ex._meta?.sourceHash === c.srcHash) return { id, status: 'up-to-date', need: [] };
    } catch { /* */ }
  }
  const tm = force ? {} : loadTm(id);
  const refs = collectRefs(c.meta);
  const seen = new Set();
  const need = [];
  for (const ref of refs) {
    const s = ref.get();
    const h = sha(s);
    if (h in tm || seen.has(h)) continue;
    seen.add(h);
    need.push(s);
  }
  return { id, status: need.length ? 'needs' : 'cached', need };
}

function applyOne(id, provided, { force = false } = {}) {
  const c = srcFor(id);
  if (!c) return { id, status: 'missing-src' };
  const tm = force ? {} : loadTm(id);
  const refs = collectRefs(c.meta);
  const seen = new Set();
  const order = [];
  for (const ref of refs) {
    const s = ref.get();
    const h = sha(s);
    if (h in tm || seen.has(h)) continue;
    seen.add(h);
    order.push(h);
  }
  if (provided.length !== order.length)
    return { id, status: 'error', error: `lengdemismatch: fekk ${provided.length}, venta ${order.length}` };
  const newTm = { ...tm };
  order.forEach((h, i) => { newTm[h] = provided[i]; });

  const finalTm = {};
  for (const ref of refs) {
    const s = ref.get();
    const h = sha(s);
    finalTm[h] = newTm[h] ?? s;
    ref.set(finalTm[h]);
  }
  const out = {
    meta: c.meta,
    _meta: { sourceHash: c.srcHash, translatedAt: new Date().toISOString(), model: 'claude-code-agent', strings: refs.length, tm: finalTm },
  };
  fs.mkdirSync(NN_DIR, { recursive: true });
  fs.writeFileSync(path.join(NN_DIR, id + '.json'), JSON.stringify(out));
  return { id, status: 'applied', strings: refs.length };
}

const argv = process.argv.slice(2);
const opts = { ids: [], extract: false, apply: null, out: null, force: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--extract') opts.extract = true;
  else if (a === '--apply') opts.apply = argv[++i];
  else if (a === '--out') opts.out = argv[++i];
  else if (a === '--force') opts.force = true;
  else opts.ids.push(a);
}

if (opts.apply) {
  const done = JSON.parse(fs.readFileSync(opts.apply, 'utf-8'));
  const tally = {};
  for (const [id, provided] of Object.entries(done)) {
    const r = applyOne(id, provided, { force: opts.force });
    tally[r.status] = (tally[r.status] || 0) + 1;
    if (r.status === 'error') console.log(`  ${id}: ${r.error}`);
  }
  console.log('Apply ferdig:', tally);
} else if (opts.extract) {
  const todo = {};
  let total = 0; const tally = {};
  for (const id of opts.ids) {
    const r = extractOne(id, { force: opts.force });
    tally[r.status] = (tally[r.status] || 0) + 1;
    if (r.need.length) { todo[id] = r.need; total += r.need.length; }
  }
  const outPath = opts.out || path.join(ROOT, 'tmp-m-todo.json');
  fs.writeFileSync(outPath, JSON.stringify(todo, null, 1));
  console.log(`Extract: ${Object.keys(todo).length} kapittel, ${total} strenger -> ${outPath}`);
  console.log('Status:', tally);
} else {
  console.error('Bruk --extract <id...> --out fil  ELLER  --apply done-fil');
  process.exit(2);
}
