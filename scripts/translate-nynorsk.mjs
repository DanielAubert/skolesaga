#!/usr/bin/env node
/**
 * Oversetter lærebok-kapitler fra bokmål til nynorsk.
 *
 * Strategi:
 *  - Sidecar-filer: chapters/nn/<id>.json (full speilet struktur, brukes av rendereren).
 *  - Translation-memory (TM) i hver nn-fil: _tm map fra sha256(kildestreng) -> oversatt streng.
 *    => inkrementell synk: bare endrede/nye strenger sendes til API; uendrede gjenbrukes.
 *  - Felt-whitelist: kun kjente prosatekst-felter oversettes. id/type/LaTeX/kode/URL bevares.
 *
 * Bruk:
 *   node scripts/translate-nynorsk.mjs --all              # alle kapitler (resumerbar)
 *   node scripts/translate-nynorsk.mjs <id> [<id> ...]    # spesifikke kapitler
 *   node scripts/translate-nynorsk.mjs --staged           # kun git-staged kapittelfiler
 *   node scripts/translate-nynorsk.mjs --limit 20         # begrens antall (test)
 *   node scripts/translate-nynorsk.mjs --concurrency 6
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CHAPTERS_DIR = path.join(ROOT, 'src', 'lib', 'data', 'chapters');
const NN_DIR = path.join(CHAPTERS_DIR, 'nn');

const MODEL = process.env.NN_MODEL || 'claude-haiku-4-5-20251001';

// ---------------------------------------------------------------------------
// Felt-whitelist: nøkler hvis string-verdi skal oversettes
// ---------------------------------------------------------------------------
const TRANSLATE_KEYS = new Set([
  'title', 'subtitle', 'description', 'content', 'problem', 'solution',
  'task', 'caption', 'alt', 'explanation', 'hint', 'feedback', 'term',
  'definition', 'buttonText', 'question', 'text',
]);
// Array-felter med rene strenger som skal oversettes element-for-element
const TRANSLATE_STRING_ARRAYS = new Set([
  'competenceGoals', 'topics', 'steps', 'hints',
]);
// Nøkler som ALDRI røres (IDer, kode, math, media, struktur)
const SKIP_KEYS = new Set([
  'id', 'type', 'src', 'latex', 'code', 'svgContent', 'svgPath',
  'materialId', 'youtubeId', 'expression', 'color', 'style',
  'illustrationId', 'calculatorType', 'exerciseType', 'interactiveType',
  'courseId', 'chapterNumber', 'number', 'linkedChapterId', 'nextChapter',
  'prevChapter', 'prerequisites', 'tool', 'geogebraAppType', 'appType',
  'answer', 'correctAnswer', 'commands', 'initialCommands', 'initialCode',
  'label', 'xLabel', 'yLabel', 'resultLabel', 'key', 'image', 'coverImage',
  'auraColor', 'difficulty', 'criticalPoints', 'signs', 'factors',
]);

const sha = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 16);

// En streng er "oversettbar" hvis den inneholder bokstaver (ikke ren math/tall/URL)
function worthTranslating(s) {
  if (typeof s !== 'string' || s.trim().length === 0) return false;
  if (!/[a-zæøåA-ZÆØÅ]/.test(s)) return false;          // ingen bokstaver
  if (/^https?:\/\/\S+$/.test(s.trim())) return false;   // ren URL
  return true;
}

// ---------------------------------------------------------------------------
// Samle inn oversettbare strenger (returnerer liste av {get,set} via path-refs)
// ---------------------------------------------------------------------------
function collectStrings(node, keyHint, out) {
  if (Array.isArray(node)) {
    const isStringArr = TRANSLATE_STRING_ARRAYS.has(keyHint);
    for (let i = 0; i < node.length; i++) {
      if (isStringArr && typeof node[i] === 'string') {
        if (worthTranslating(node[i])) {
          out.push({ get: () => node[i], set: (v) => { node[i] = v; } });
        }
      } else {
        collectStrings(node[i], keyHint, out);
      }
    }
    return;
  }
  if (node && typeof node === 'object') {
    for (const k of Object.keys(node)) {
      if (SKIP_KEYS.has(k)) continue;
      const val = node[k];
      if (typeof val === 'string') {
        if (TRANSLATE_KEYS.has(k) && worthTranslating(val)) {
          out.push({ get: () => node[k], set: (v) => { node[k] = v; } });
        }
      } else {
        collectStrings(val, k, out);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Anthropic API
// ---------------------------------------------------------------------------
const SYSTEM_PROMPT = `Du er ein profesjonell omsetjar frå norsk bokmål til norsk nynorsk for digitale lærebøker.

Du får ein JSON-array med tekstbitar. Omset KVAR streng frå bokmål til korrekt, naturleg nynorsk og returner KUN ein JSON-array med same lengd og rekkjefølgje.

VIKTIGE REGLAR:
- OMSET TETT på originalen. Ikkje omskriv, parafraser, forklar eller forenkl. Same meining, same setningsstruktur, berre nynorsk form.
- Bruk korrekt nynorsk: eg/meg, ho/han, dei, ikkje, kva, korleis, nokon, mykje, berre, frå, etter kvart. Unngå bokmålsformer.
- Bruk a-infinitiv konsekvent (å kaste, å lese) ELLER hald deg til hovudregelen; ver konsekvent innan kvar streng.
- Omset faguttrykk korrekt og konsekvent, t.d.: kilde -> kjelde, kildekritikk -> kjeldekritikk, sikkerhet -> tryggleik, mulighet -> moglegheit, virkning -> verknad, løsning -> løysing, spørsmål -> spørsmål, viktig -> viktig, øvelse -> øving, brytes ned -> brytast ned.
- BEVAR ALT av formatering nøyaktig: Markdown (##, **, *, -, lister, lenkjer), LaTeX ($...$, $$...$$, \\(...\\), \\[...\\]), kodeblokkar (\`\`\`), inline-kode, HTML-taggar, URL-ar og emoji. Ikkje omset innhald inni matematikk, kode eller URL.
- BEVAR tal, formlar, variabelnamn, eigennamn og faguttrykk som ikkje har eigen nynorskform.
- Ikkje legg til, fjern eller slå saman strengar. Ikkje forklar. Ikkje pakk inn i markdown.
- Behald innleiande/avsluttande mellomrom og linjeskift slik dei er.

Returner berre den rå JSON-arrayen.`;

async function callAnthropic(strings, apiKey, attempt = 1) {
  const body = {
    model: MODEL,
    max_tokens: 8192,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: JSON.stringify(strings) }],
  };
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const txt = await res.text();
    if ((res.status === 429 || res.status >= 500) && attempt <= 5) {
      const wait = Math.min(2000 * 2 ** (attempt - 1), 30000);
      await new Promise((r) => setTimeout(r, wait));
      return callAnthropic(strings, apiKey, attempt + 1);
    }
    throw new Error(`API ${res.status}: ${txt.slice(0, 300)}`);
  }
  const data = await res.json();
  let text = (data.content || []).map((b) => b.text || '').join('').trim();
  // Strip evt. ```json fence
  text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  const arr = JSON.parse(text);
  if (!Array.isArray(arr) || arr.length !== strings.length) {
    if (attempt <= 3) return callAnthropic(strings, apiKey, attempt + 1);
    throw new Error(`Lengdemismatch: fekk ${arr.length}, venta ${strings.length}`);
  }
  return arr;
}

// Del opp i bolkar så vi ikkje sprenger max_tokens
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// ---------------------------------------------------------------------------
// Oversett ett kapittel
// ---------------------------------------------------------------------------
async function translateChapter(id, apiKey, { force = false } = {}) {
  const srcPath = path.join(CHAPTERS_DIR, id + '.json');
  if (!fs.existsSync(srcPath)) return { id, status: 'missing-src' };

  const srcRaw = fs.readFileSync(srcPath, 'utf-8');
  const srcHash = sha(srcRaw);
  const nnPath = path.join(NN_DIR, id + '.json');

  // Eksisterande TM
  let tm = {};
  if (fs.existsSync(nnPath)) {
    try {
      const existing = JSON.parse(fs.readFileSync(nnPath, 'utf-8'));
      if (!force && existing._meta?.sourceHash === srcHash) {
        return { id, status: 'up-to-date' };
      }
      if (!force) tm = existing._meta?.tm || {};
    } catch { /* ignorer korrupt nn-fil, byggjer på nytt */ }
  }

  const translated = JSON.parse(srcRaw);
  const refs = [];
  collectStrings(translated, null, refs);

  // Finn strenger som manglar i TM
  const need = [];
  for (const ref of refs) {
    const s = ref.get();
    const h = sha(s);
    if (!(h in tm)) need.push({ h, s });
  }

  // Oversett manglande (i bolkar på 40)
  const newTm = {};
  let translatedCount = 0;
  if (need.length > 0) {
    for (const part of chunk(need, 40)) {
      const out = await callAnthropic(part.map((p) => p.s), apiKey);
      part.forEach((p, i) => { newTm[p.h] = out[i]; });
      translatedCount += part.length;
    }
  }

  // Bygg ny TM avgrensa til strenger som faktisk finst i kjelda (prune)
  const finalTm = {};
  for (const ref of refs) {
    const s = ref.get();
    const h = sha(s);
    finalTm[h] = (h in newTm) ? newTm[h] : (tm[h] ?? s);
    ref.set(finalTm[h]);
  }

  translated._meta = {
    sourceHash: srcHash,
    translatedAt: new Date().toISOString(),
    model: MODEL,
    strings: refs.length,
    tm: finalTm,
  };

  fs.mkdirSync(NN_DIR, { recursive: true });
  fs.writeFileSync(nnPath, JSON.stringify(translated));
  return { id, status: translatedCount > 0 ? 'translated' : 'rebuilt', translatedCount, strings: refs.length };
}

// ---------------------------------------------------------------------------
// Concurrency-pool
// ---------------------------------------------------------------------------
async function runPool(ids, worker, concurrency) {
  const results = [];
  let idx = 0;
  let done = 0;
  async function next() {
    while (idx < ids.length) {
      const my = idx++;
      try {
        const r = await worker(ids[my]);
        results[my] = r;
      } catch (e) {
        results[my] = { id: ids[my], status: 'error', error: e.message };
      }
      done++;
      const r = results[my];
      const tag = r.status === 'error' ? `❌ ${r.error}` : r.status;
      process.stdout.write(`[${done}/${ids.length}] ${ids[my]} — ${tag}\n`);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, next));
  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function loadEnv() {
  const envPath = path.join(ROOT, '.env.local');
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
      const m = line.match(/^([A-Z_]+)=(.*)$/);
      if (m && !process.env[m[1]]) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
      }
    }
  }
}

function parseArgs(argv) {
  const opts = { ids: [], all: false, staged: false, limit: 0, concurrency: 6, force: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--all') opts.all = true;
    else if (a === '--staged') opts.staged = true;
    else if (a === '--force') opts.force = true;
    else if (a === '--limit') opts.limit = parseInt(argv[++i], 10);
    else if (a === '--concurrency') opts.concurrency = parseInt(argv[++i], 10);
    else opts.ids.push(a);
  }
  return opts;
}

async function main() {
  loadEnv();
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) { console.error('Manglar ANTHROPIC_API_KEY'); process.exit(1); }

  const opts = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(path.join(CHAPTERS_DIR, '_registry.json'), 'utf-8'));

  let ids;
  if (opts.all) {
    ids = registry.chapterIds.slice();
  } else if (opts.staged) {
    const out = execSync('git diff --cached --name-only', { cwd: ROOT }).toString();
    ids = out.split('\n')
      .filter((f) => /src\/lib\/data\/chapters\/[^/]+\.json$/.test(f) && !f.includes('/nn/') && !f.startsWith('src/lib/data/chapters/_'))
      .map((f) => path.basename(f, '.json'));
  } else {
    ids = opts.ids;
  }
  if (opts.limit > 0) ids = ids.slice(0, opts.limit);
  if (ids.length === 0) { console.log('Ingen kapitler å oversette.'); return; }

  console.log(`Oversetter ${ids.length} kapitler (modell: ${MODEL}, samtidige: ${opts.concurrency})`);
  const t0 = Date.now();
  const results = await runPool(ids, (id) => translateChapter(id, apiKey, { force: opts.force }), opts.concurrency);

  const tally = {};
  for (const r of results) tally[r.status] = (tally[r.status] || 0) + 1;
  console.log(`\nFerdig på ${((Date.now() - t0) / 1000).toFixed(0)}s:`, tally);
  const errs = results.filter((r) => r.status === 'error');
  if (errs.length) {
    console.log('Feil:');
    for (const e of errs.slice(0, 20)) console.log(`  ${e.id}: ${e.error}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
