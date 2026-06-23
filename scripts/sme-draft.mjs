/**
 * sme-draft.mjs — KI-FØRSTEUTKAST nordsamisk (davvisámegiella) av et matte-kapittel.
 *
 * Kjører LOKALT mot Ollama (ingen betalt API). Modellen er NorMistral-11B
 * (norallm/normistral-11b-warm), som er trent på bokmål/nynorsk/nordsamisk og
 * har åpne vekter (Apache-2.0). Se scripts/sme-draft-README.md for oppsett.
 *
 * Pipeline-plass: dette er STEG 1 (maskinutkast). Etterpå:
 *   2) node scripts/sme-validate.mjs <id>     → flagger oppdiktede ord (Divvun)
 *   3) korrekturminne (Supabase) + menneskelig revisor retter
 *   4) glossary_auto.json (godkjente term-/staverettinger) anvendes automatisk
 *
 * Utkastet er ALDRI publiseringsklart alene — _meta.status settes til
 * 'draft-needs-human-review'. Terminologi forankres i den offisielle termbasen
 * (scripts/sme-termbase.json), few-shot hentes fra korrekturminnet.
 *
 * Bruk:
 *   node scripts/sme-draft.mjs 1t-1-2
 *   OLLAMA_URL=http://localhost:11434 SME_MODEL=normistral node scripts/sme-draft.mjs 1t-1-2
 *
 * Miljøvariabler:
 *   OLLAMA_URL   (default http://localhost:11434)
 *   SME_MODEL    (default 'normistral')  — navnet du ga modellen i `ollama create`
 *   SME_CORR_DIR (default scripts/sme-corrections) — fewshot.jsonl + glossary_auto.json
 *                 fra `corrections_pull.py` (korrekturminnet). Valgfritt.
 *   SME_OVERWRITE=1 — overskriv et eksisterende chapters/sme/<id>.json
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const id = process.argv[2];
if (!id) { console.error('Bruk: node scripts/sme-draft.mjs <kapittel-id>'); process.exit(1); }

const OLLAMA_URL = (process.env.OLLAMA_URL || 'http://localhost:11434').replace(/\/$/, '');
const MODEL = process.env.SME_MODEL || 'normistral';
const CORR_DIR = process.env.SME_CORR_DIR || path.join(process.cwd(), 'scripts', 'sme-corrections');

const chaptersDir = path.join(process.cwd(), 'src', 'lib', 'data', 'chapters');
const smeDir = path.join(chaptersDir, 'sme');
const outPath = path.join(smeDir, `${id}.json`);

if (fs.existsSync(outPath) && process.env.SME_OVERWRITE !== '1') {
  console.error(`✋ ${outPath} finnes allerede. Sett SME_OVERWRITE=1 for å overskrive.`);
  process.exit(1);
}

// --- Kilde (bokmål) ---------------------------------------------------------
const srcPath = path.join(chaptersDir, `${id}.json`);
if (!fs.existsSync(srcPath)) { console.error(`Fant ikke bokmål-kilde: ${srcPath}`); process.exit(1); }
const src = JSON.parse(fs.readFileSync(srcPath, 'utf-8'));

// --- Termbase (offisiell fasit for fagord) ----------------------------------
const termbase = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts', 'sme-termbase.json'), 'utf-8')).terms;
// Sortér norske oppslagsord lengst-først (så «kvadratrot» matcher før «rot»)
const termKeys = Object.keys(termbase).sort((a, b) => b.length - a.length);

// --- Korrekturminne (valgfritt) ---------------------------------------------
let glossaryAuto = {};
let fewshot = [];
try {
  glossaryAuto = JSON.parse(fs.readFileSync(path.join(CORR_DIR, 'glossary_auto.json'), 'utf-8'));
} catch { /* ingen godkjente globale rettinger ennå */ }
try {
  fewshot = fs.readFileSync(path.join(CORR_DIR, 'fewshot.jsonl'), 'utf-8')
    .split('\n').filter(Boolean).map((l) => JSON.parse(l))
    .filter((ex) => ex.no && ex.sme);
} catch { /* ingen verifiserte setningspar ennå */ }

// --- Hvilke felt skal oversettes --------------------------------------------
const TEXT_FIELDS = new Set(['title', 'description', 'content', 'problem', 'solution', 'task', 'buttonText']);
const WORD = '[^\\W\\d_]';

// Et felt som ikke inneholder noen bokstaver utenom LaTeX trenger ikke oversettes
function stripMath(t) {
  return t.replace(/\$[^$]*\$/g, ' ').replace(/\\[a-zA-Z]+/g, ' ');
}
function hasProse(t) {
  return /[a-zA-ZæøåÆØÅ]{2,}/.test(stripMath(t));
}

// Finn relevante termer i en tekst (for å bygge et lite, presist glossar i prompten)
function relevantTerms(text) {
  const found = new Map();
  const low = text.toLowerCase();
  for (const no of termKeys) {
    if (found.size >= 24) break;
    if (no.length < 3) continue;
    const re = new RegExp(`(?<!${WORD})${no.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?!${WORD})`, 'iu');
    if (re.test(low)) {
      const t = termbase[no];
      found.set(no, t.sme + (t.syn ? ` (synonym: ${t.syn})` : ''));
    }
  }
  return found;
}

function buildPrompt(text) {
  const terms = relevantTerms(text);
  const glossLines = [...terms.entries()].map(([no, sme]) => `  ${no} = ${sme}`).join('\n');
  const fs2 = fewshot.slice(0, 6).map((ex) => `Bokmål: ${ex.no}\nNordsamisk: ${ex.sme}`).join('\n\n');
  return `Du er ein røynd omsetjar som omset matematikk-lærebøker frå norsk bokmål til nordsamisk (davvisámegiella).

Reglar:
- Behald ALL matematikk ($...$, tal, symbol som +, −, ·, ÷, √, ^, =) NØYAKTIG uendra.
- Behald markdown-formatering nøyaktig: ##, **, bindestrek-lister, linjeskift, mellomrom.
- Bruk den offisielle terminologien under (mattesatnelistu). Ikkje finn opp nye fagord.
- Omset berre teksten. Inga forklaring, ingen kommentar. Svar KUN med den nordsamiske teksten.
${glossLines ? `\nTerminologi:\n${glossLines}\n` : ''}${fs2 ? `\nDøme på godkjende omsetjingar:\n\n${fs2}\n` : ''}
Bokmål: ${text}
Nordsamisk:`;
}

async function translate(text) {
  if (!text || !text.trim() || !hasProse(text)) return text; // ren matte/tom → behold
  const res = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      prompt: buildPrompt(text),
      stream: false,
      options: { temperature: 0.2, top_p: 0.9, num_predict: 1024, stop: ['\nBokmål:', '\nNordsamisk:'] },
    }),
  });
  if (!res.ok) throw new Error(`Ollama HTTP ${res.status} — kjører modellen «${MODEL}»? (ollama list)`);
  const out = (await res.json()).response ?? '';
  return out.trim() || text;
}

// --- Auto-glossar (godkjente term-/staverettinger) etter generering ---------
const autoPatterns = Object.fromEntries(
  Object.keys(glossaryAuto).map((w) => [w, new RegExp(`(?<!${WORD})${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?!${WORD})`, 'gu')])
);
let autoHits = 0;
function applyAuto(s) {
  for (const [w, c] of Object.entries(glossaryAuto)) {
    s = s.replace(autoPatterns[w], () => { autoHits++; return c; });
  }
  return s;
}

// --- Walk: oversett hvert tekstfelt in-place --------------------------------
let n = 0;
async function walk(node) {
  if (Array.isArray(node)) { for (const x of node) await walk(x); return; }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (TEXT_FIELDS.has(k) && typeof v === 'string') {
        node[k] = applyAuto(await translate(v)); n++;
        process.stdout.write(`\r  oversatt ${n} felt …`);
      } else if (k === 'hints' && Array.isArray(v)) {
        for (let i = 0; i < v.length; i++) if (typeof v[i] === 'string') { v[i] = applyAuto(await translate(v[i])); n++; }
      } else if (k === 'competenceGoals' && Array.isArray(v)) {
        for (let i = 0; i < v.length; i++) if (typeof v[i] === 'string') { v[i] = applyAuto(await translate(v[i])); n++; }
      } else {
        await walk(v);
      }
    }
  }
}

const sourceHash = crypto.createHash('sha256').update(fs.readFileSync(srcPath)).digest('hex').slice(0, 16);
console.log(`Lager nordsamisk utkast for ${id} via Ollama (${MODEL}) @ ${OLLAMA_URL}`);
console.log(`  termbase: ${termKeys.length} fagord · few-shot: ${fewshot.length} par · auto-glossar: ${Object.keys(glossaryAuto).length} ord`);

// Oversett toppnivå-felt + innhold
if (typeof src.title === 'string') { src.title = applyAuto(await translate(src.title)); n++; }
if (typeof src.description === 'string') { src.description = applyAuto(await translate(src.description)); n++; }
await walk(src.competenceGoals);
await walk(src.content);

src._meta = {
  malform: 'sme',
  status: 'draft-needs-human-review',
  sourceHash,
  translatedBy: `normistral-local (${MODEL})`,
  note: 'PILOT: KI-førsteutkast (NorMistral lokalt). Terminologi forankret i mattesatnelistu. Setningsgrammatikk, kasus og konstruerte sammensetninger MÅ verifiseres av nordsamisktalende revisor før publisering. Kjør deretter scripts/sme-validate.mjs.',
};

fs.mkdirSync(smeDir, { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(src));
process.stdout.write('\n');
console.log(`✓ Skrev ${outPath} (${n} felt oversatt, ${autoHits} auto-glossar-treff).`);
console.log(`Neste: node scripts/sme-validate.mjs ${id}`);
