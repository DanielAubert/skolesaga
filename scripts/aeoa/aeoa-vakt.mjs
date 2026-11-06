#!/usr/bin/env node
// æøå-vakten (PostToolUse på Write/Edit/MultiEdit, gjelder også underagenter). Daniel 06.11.2026: «vi burde ha en automatisk
// æøå sjekk hver gang det blir skrevet nytt materialet». Kjører scripts/aeoa/sjekk.py på den NYE teksten i innholdsfiler
// (.json/.jsonl/.html/.ts/.tsx) og melder funn tilbake til modellen (exit 2), så feilen rettes før teksten går videre.
// Markdown (logger med ordrette sitater), testfiler og selve æøå-verktøyet sjekkes ikke.
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

// Reporoten er nærmeste mappe oppover med scripts/aeoa/sjekk.py (eksamenssett: .github/hooks, Skolesaga: scripts/aeoa).
let ROT = path.dirname(new URL(import.meta.url).pathname);
while (!existsSync(path.join(ROT, 'scripts/aeoa/sjekk.py')) && path.dirname(ROT) !== ROT) ROT = path.dirname(ROT);
const HOPP = /(\/node_modules\/|\/scripts\/aeoa\/|\/fremdrift\/aeoa-sveip-[^/]*\/|\/__tests__\/|\.test\.|\/\.next\/|\/dump\/|\/audits\/|package(-lock)?\.json$|tsconfig|\/\.claude\/|\/sme\/|\/kursbunter\/)/; // sme = nordsamisk, kursbunter = generert

let inn;
try { inn = JSON.parse(readFileSync(0, 'utf8')); } catch { process.exit(0); }
const ti = inn.tool_input ?? {};
const fil = ti.file_path ?? '';
if (!/\.(json|jsonl|html|ts|tsx)$/.test(fil) || HOPP.test(fil)) process.exit(0);
const tekst = ti.content ?? ti.new_string ?? (ti.edits ?? []).map((e) => e.new_string).join('\n');
if (!tekst || !/[a-zæøå]{3}/i.test(tekst)) process.exit(0);

const ext = path.extname(fil);
// Biter av JSON/TS sjekkes som ren tekst; hele JSON-filer som JSON, så nøkler og id-er hoppes over.
const p = spawnSync('python3', [path.join(ROT, 'scripts/aeoa/sjekk.py'), '--stdin', '--json'],
  { input: ext === '.ts' || ext === '.tsx' ? tsStrenger(tekst) : tekst, encoding: 'utf8', timeout: 60000 });
if (p.status === null || !p.stdout) process.exit(0);
let funn;
try { funn = JSON.parse(p.stdout); } catch { process.exit(0); }
if (!funn.length) process.exit(0);
const linjer = funn.slice(0, 25).map((f) => `  «${f.ord}» → «${f.forslag}» (${f.grunn}): …${f.ctx}…`);
process.stderr.write(`æøå-vakten: ${funn.length} mistenkte æøå-feil i ${path.relative(ROT, fil)}:\n${linjer.join('\n')}\n` +
  (funn.length > 25 ? `  … og ${funn.length - 25} til\n` : '') +
  'Rett dem i fila nå (bare tegnene). Er et ord riktig (navn, nynorsk, sitat), legg det i scripts/aeoa/kjente-riktige.json.\n');
process.exit(2);

function tsStrenger(kode) {
  const ut = [];
  for (const m of kode.matchAll(/'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"|`((?:[^`\\]|\\.)*)`/g)) {
    const s = m[1] ?? m[2] ?? m[3];
    if (s.includes(' ') || /[æøåÆØÅ]/.test(s)) ut.push(s);
  }
  return ut.join('\n');
}
