// æøå-porten for skript som skriver til content_data (Daniel 06.11.2026: «automatisk æøå sjekk hver gang det blir
// skrevet nytt materialet»). Sjekker bare strenger som er NYE i `ny` i forhold til `gammel`, med scripts/aeoa/sjekk.py.
// Ved funn: skriv dem ut og stopp (exit 1). AEOA_OK="<grunn>" foran kommandoen slipper gjennom (f.eks. navn som flagges).
//   import { aeoaPort } from '../aeoa/port.mjs';  aeoaPort(gammelData, nyData, 'kurs/type');
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const SJEKK = path.join(path.dirname(new URL(import.meta.url).pathname), 'sjekk.py');

function strenger(o, ut = []) {
  if (typeof o === 'string') ut.push(o);
  else if (Array.isArray(o)) o.forEach((x) => strenger(x, ut));
  else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) if (!/^(id|slug|url|href|src|image|path|type)$|Id$|Slug$/.test(k)) strenger(v, ut);
  return ut;
}

export function aeoaPort(gammel, ny, navn = '') {
  const før = new Set(strenger(gammel ?? null));
  const nye = [...new Set(strenger(ny))].filter((s) => !før.has(s));
  if (!nye.length) return [];
  const p = spawnSync('python3', [SJEKK, '--stdin', '--json'], { input: JSON.stringify(nye), encoding: 'utf8', timeout: 300000 });
  if (p.status === null) { console.error('æøå-porten: sjekk.py svarte ikke (', p.error?.message, ') — fortsetter uten'); return []; }
  let funn = [];
  try { funn = JSON.parse(p.stdout || '[]'); } catch { return []; }
  if (!funn.length) return [];
  console.error(`æøå-porten: ${funn.length} mistenkte æøå-feil i ny tekst${navn ? ` (${navn})` : ''}:`);
  for (const f of funn.slice(0, 40)) console.error(`  «${f.ord}» → «${f.forslag}» (${f.grunn}): …${f.ctx}…`);
  if (process.env.AEOA_OK) { console.error(`  slapp gjennom: AEOA_OK="${process.env.AEOA_OK}"`); return funn; }
  console.error('Rett teksten (bare tegnene) og kjør på nytt. Er ordene riktige (navn, nynorsk, sitat): legg dem i\n' +
    'scripts/aeoa/kjente-riktige.json, eller kjør med AEOA_OK="<grunn>" foran kommandoen.');
  process.exit(1);
}
