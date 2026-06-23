/**
 * Automatisk språksjekk av et nordsamisk kapittel mot Divvun/Giellatekno
 * sin stavekontroll (api-giellalt.uit.no/speller/se).
 *
 * Fanger ORTOGRAFISK/MORFOLOGISK UMULIGE ord (typisk KI-oppdiktede ord, som
 * «bijjem»). Fanger IKKE «gyldig form, feil ord» (f.eks. gardojuvvon) — det
 * krever grammatikksjekk/FST-analyse/menneske. Resultatet er derfor en
 * førstelinje-flagging, ikke en fasit.
 *
 * Skriver <id>.flags.json ved siden av kapittelet.
 * Kjør:  node scripts/sme-validate.mjs 1t-1-1
 */
import fs from 'fs';
import path from 'path';

const id = process.argv[2];
if (!id) { console.error('Bruk: node scripts/sme-validate.mjs <kapittel-id>'); process.exit(1); }

const dir = path.join(process.cwd(), 'src', 'lib', 'data', 'chapters', 'sme');
const chapter = JSON.parse(fs.readFileSync(path.join(dir, `${id}.json`), 'utf-8'));
const API = 'https://api-giellalt.uit.no/speller/se';

// Samle (tekst, blokk-id) for alle oversatte tekstfelt
const TEXT_FIELDS = ['title', 'description', 'content', 'problem', 'solution', 'task', 'buttonText'];
const segments = []; // {blockId, text}

function pushText(blockId, v) {
  if (typeof v === 'string' && v.trim()) segments.push({ blockId, text: v });
}
function walk(node, blockId) {
  if (Array.isArray(node)) { node.forEach((n) => walk(n, blockId)); return; }
  if (node && typeof node === 'object') {
    const bid = node.id || blockId;
    for (const [k, v] of Object.entries(node)) {
      if (TEXT_FIELDS.includes(k)) pushText(bid, v);
      else if (k === 'hints' && Array.isArray(v)) v.forEach((h) => pushText(bid, h));
      else walk(v, bid);
    }
  }
}
walk(chapter.content, chapter.id);
chapter.competenceGoals?.forEach((g) => pushText('competenceGoals', g));
pushText('title', chapter.title);
pushText('description', chapter.description);

// Rens bort matte/LaTeX og markdown-tegn før stavekontroll
function clean(t) {
  return t
    .replace(/\$[^$]*\$/g, ' ')          // inline-matte
    .replace(/\\[a-zA-Z]+/g, ' ')        // latex-kommandoer
    .replace(/[#*_>`{}()[\]|]/g, ' ')    // markdown/symboler
    .replace(/[0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function speller(text) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error(`speller HTTP ${res.status}`);
  return (await res.json()).results || [];
}

const GRAMMAR_API = 'https://api-giellalt.uit.no/grammar/se';
async function grammar(text) {
  const res = await fetch(GRAMMAR_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error(`grammar HTTP ${res.status}`);
  return (await res.json()).errs || [];
}

const flags = {}; // word -> {suggestions, count, blocks:Set}
const grammarErrs = []; // {blockId, error, suggestions}
let checkedWords = 0;

for (const seg of segments) {
  const text = clean(seg.text);
  if (!text) continue;
  // 1) Stavekontroll (ord ikke i ordbok)
  try {
    const results = await speller(text);
    for (const r of results) {
      checkedWords++;
      if (r.is_correct) continue;
      const w = r.word;
      if (!flags[w]) flags[w] = { word: w, suggestions: (r.suggestions || []).slice(0, 5).map((s) => s.value), count: 0, blocks: new Set() };
      flags[w].count++;
      flags[w].blocks.add(seg.blockId);
    }
  } catch (e) { console.error(`  speller-feil blokk ${seg.blockId}: ${e.message}`); }
  // 2) Grammatikksjekk (GramDivvun) – kongruens/bøyning i kontekst
  try {
    const errs = await grammar(text);
    for (const e of errs) {
      // Divvun-format: [form, beg, end, type, msg, [forslag...]]
      const form = Array.isArray(e) ? e[0] : (e.error_text ?? JSON.stringify(e));
      const sug = Array.isArray(e) ? (e[5] || []) : (e.suggestions || []);
      const norm = (s) => String(s).replace(/\s+/g, '');
      // Hopp over rene mellomrom-/tegnsettingsartefakter (fra rensing av fasit-
      // strenger som «a) 17, b) 4») og merknader uten bokstaver.
      const spacingOnly = sug.length && norm(form) === norm(sug[0]);
      // Hopp over fremmedord (engelsk huskeregel o.l.) som allerede er fanget av
      // stavekontrollen — de er ikke ekte grammatikkfeil i samisk.
      const firstTok = String(form).split(/\s+/)[0].replace(/[^\wáčđŋšŧžÁČĐŊŠŦŽ]+$/u, '');
      if (spacingOnly || flags[firstTok] || !/[a-zA-ZáčđŋšŧžÁČĐŊŠŦŽ]{2,}/.test(form)) continue;
      grammarErrs.push({ blockId: seg.blockId, error: form, suggestions: sug });
    }
  } catch (e) { console.error(`  grammar-feil blokk ${seg.blockId}: ${e.message}`); }
  await new Promise((r) => setTimeout(r, 120)); // høflig pause
}

const out = Object.values(flags)
  .map((f) => ({ ...f, blocks: [...f.blocks] }))
  .sort((a, b) => b.count - a.count);

fs.writeFileSync(path.join(dir, `${id}.flags.json`), JSON.stringify({ chapterId: id, checkedAt: new Date().toISOString().slice(0, 10), checkedWords, flagged: out, grammar: grammarErrs }, null, 2));

console.log(`Sjekket ~${checkedWords} ord i ${segments.length} segmenter.`);
console.log(`Ukjente ord (ikke i nordsamisk ordbok): ${out.length}`);
for (const f of out) console.log(`  ${f.word}  (${f.count}x)  → forslag: ${f.suggestions.join(', ') || '—'}`);
console.log(`Grammatikk-merknader: ${grammarErrs.length}`);
for (const g of grammarErrs) console.log(`  [${g.blockId}] ${g.error} → ${(g.suggestions || []).join(', ') || '—'}`);
