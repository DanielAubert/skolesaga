// Genererer src/lib/data/losning-index.json: en kort, stabil kode per
// oppgave-løsning og prøve-/øvingseksamen-fasit. Både web-ruta
// /losning/[code] og PDF-generatoren leser denne JSON-en — én kilde til
// sannhet. Koden er en ren funksjon av mål-id-en (sha1 → base32), med
// kollisjonssjekk. Kjør: node scripts/hoyskolebok/gen-losning-index.mjs [emne]
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const REPO = '/Users/danielandreasaubert/eksamenssett/Skolesaga';
const CH = path.join(REPO, 'src/lib/data/chapters');
const OUT = path.join(REPO, 'src/lib/data/losning-index.json');
const emne = process.argv[2] || 'econ1210';

const ALPHABET = '0123456789abcdefghjkmnpqrstvwxyz'; // 32 tegn, uten i/l/o/u
function codeFor(id, len = 6) {
  const h = crypto.createHash('sha1').update(id).digest();
  let code = '';
  for (let i = 0; i < len; i++) code += ALPHABET[h[i] & 31];
  return code;
}

// Er en collapsible et LØSNINGSforslag (skal flyttes ut), ikke innhold?
function erLosningColl(title) {
  const t = (title || '').trim();
  return t === 'Fasit og momentliste' || t.startsWith('Løsningsforslag');
}

// Samle alle løsningsmål i kapittelrekkefølgen
const targets = []; // { chapterId, targetId, kind, label }
function walk(blocks, chapterId) {
  for (const b of blocks) {
    if (b.type === 'exercise' && b.exercise?.solution) {
      targets.push({ chapterId, targetId: b.exercise.id, kind: 'exercise',
        label: `Oppgave ${b.exercise.number || ''}`.trim() });
    }
    if (b.type === 'collapsible') {
      if (erLosningColl(b.title)) {
        targets.push({ chapterId, targetId: b.id, kind: 'losning', label: b.title });
      } else if (Array.isArray(b.content)) {
        walk(b.content, chapterId); // f.eks. Repetisjonsoppgaver / Prøve-wrapper
      }
    }
  }
}

const files = fs.readdirSync(CH)
  .filter((f) => f.startsWith(`${emne}-`) && f.endsWith('.json') && !f.includes('narrativ'))
  .sort();
for (const f of files) {
  const d = JSON.parse(fs.readFileSync(path.join(CH, f), 'utf8'));
  walk(d.content, d.id);
}

// Bygg indeks med kollisjonssjekk (utvid koden ved kollisjon)
const index = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
// fjern gamle oppføringer for dette emnet (idempotent regenerering)
for (const c of Object.keys(index)) if (index[c].courseId === emne) delete index[c];
const byCode = index;
let collisions = 0;
for (const t of targets) {
  let len = 6, code = codeFor(t.targetId, len);
  while (byCode[code] && byCode[code].targetId !== t.targetId) { len++; code = codeFor(t.targetId, len); collisions++; }
  byCode[code] = { courseId: emne, chapterId: t.chapterId, targetId: t.targetId, kind: t.kind };
}

fs.writeFileSync(OUT, JSON.stringify(index, null, 0) + '\n');
console.log(`losning-index: ${targets.length} mål for ${emne} (${collisions} kollisjoner utvidet), totalt ${Object.keys(index).length} koder i indeksen`);
