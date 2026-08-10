// rangmaal.mjs — arbeidsverktøy for å rette RANGKLYNGE i én quiz-data-fil.
//
// quiz-lengdesjekk.mjs SIER at en fil er skjev. Denne SIER HVILKE SPØRSMÅL som
// må endres, og hvilken vei — ellers gjetter man, og gjetting her betyr at man
// omskriver distraktorer som allerede var i orden.
//
// Kjør:  npx tsx scripts/hoyskolebok/rangmaal.mjs econ1310
//        npx tsx scripts/hoyskolebok/rangmaal.mjs econ1310 --liste
//
// Bakgrunn: fasitens LENGDERANG (1 = lengst av de fire) skal fordele seg jevnt,
// ca. 25 % på hver rang. Ligger den på samme rang i 87 % av spørsmålene, kan en
// student som lærer seg mønsteret krysse riktig uten å kunne faget — selv om
// ytterpunktmålingen (lengst/kortest) er grønn.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const emne = process.argv[2];
const visListe = process.argv.includes('--liste');
if (!emne) { console.error('bruk: rangmaal.mjs <emne> [--liste]'); process.exit(2); }

const fil = path.join(REPO, 'src/lib/data', `quiz-data-${emne}.ts`);
if (!fs.existsSync(fil)) { console.error(`finnes ikke: ${fil}`); process.exit(2); }
const mod = await import(pathToFileURL(fil).href);
const data = mod.default ?? mod;

// Rang med NØYTRAL tie-håndtering: deler fasiten lengde med k−1 andre, kan den
// havne på k ulike ranger etter stokking, og vekten fordeles 1/k. Uten dette
// blåses rang 1 opp — 21 % av katalogens firevalgsspørsmål har en slik likhet.
function rangOf(lens) {
  const c = lens[0];
  return { r: lens.filter((l) => l > c).length, k: lens.filter((l) => l === c).length };
}

const rang = [0, 0, 0, 0];
const alle = [];
for (const [kap, qs] of Object.entries(data)) {
  if (!Array.isArray(qs)) continue;
  qs.forEach((q, i) => {
    const o = q.options;
    if (!Array.isArray(o) || o.length !== 4) return;
    const lens = o.map((x) => String(x).length);
    const { r, k } = rangOf(lens);
    for (let j = 0; j < k; j++) rang[r + j] += 1 / k;
    const kortest = Math.min(...lens);
    const stubbe = kortest < 0.5 * ((lens.reduce((a, b) => a + b, 0) - kortest) / 3);
    alle.push({ kap, i, rang: r + 1, delt: k > 1, lens, stubbe, q: q.question, o });
  });
}
const N = alle.length;
if (!N) { console.log('ingen firevalgsspørsmål'); process.exit(0); }

const pct = (x) => `${((100 * x) / N).toFixed(0)}%`;
console.log(`\n${emne}: ${N} firevalgsspørsmål`);
console.log(`rang  ${rang.map((x, i) => `${i + 1}: ${pct(x)}`).join(' · ')}`);
const verst = rang.indexOf(Math.max(...rang)) + 1;
const overtall = Math.round(Math.max(...rang) - N * 0.25);
console.log(`stubber: ${alle.filter((a) => a.stubbe).length}`);

if (Math.max(...rang) / N <= 0.35) {
  console.log('\n✅ ingen rang over 35 % — filen er i mål');
  process.exit(0);
}

console.log(`\n⚠ rang ${verst} er overrepresentert. Flytt ca. ${overtall} spørsmål`
  + ` VEKK fra rang ${verst} for å nå ~25 % på hver rang.`);

// Rang r betyr «r−1 distraktorer er lengre enn fasiten». Målt 10. august 2026
// har HVER skjev fil sitt eget faste antall — econ1310 har nøyaktig én lengre i
// 89 % av spørsmålene, sosiologi-full nøyaktig to i 82 %. Det er en
// forfattervane per bok, ikke én feiende feil, og det er den vanen som skal
// brytes: antallet lengre distraktorer skal variere fritt mellom 0 og 3.
const lengre = [0, 0, 0, 0];
for (const a of alle) lengre[a.lens.slice(1).filter((l) => l > a.lens[0]).length]++;
console.log(`\ndistraktorer LENGRE enn fasiten — det er dette tallet som sitter fast:`);
console.log(`  ${lengre.map((x, i) => `${i} lengre: ${pct(x)}`).join(' · ')}   (mål: ~25 % hver)`);
console.log('\nSlik flytter du ett spørsmål, uten å røre fasiten:');
console.log(`  fasiten skal FÅ LAVERE rangtall (bli relativt lengre)`
  + ` → KORT NED en distraktor som er lengre enn fasiten`);
console.log(`  fasiten skal FÅ HØYERE rangtall (bli relativt kortere)`
  + ` → SKRIV UT en distraktor som er kortere enn fasiten`);
console.log('  ⚠ nedkorting må aldri lage en stubbe (< halvparten av snittet til de tre andre).');
console.log('  ⚠ oppskriving skal gjøre påstanden mer SPESIFIKK, ikke legge på fyllord.');

if (visListe) {
  const kandidater = alle.filter((a) => a.rang === verst);
  console.log(`\n${kandidater.length} spørsmål ligger på rang ${verst}:`);
  for (const a of kandidater.slice(0, 400)) {
    console.log(`\n[${a.kap} #${a.i + 1}]  lengder ${a.lens.join('/')}${a.delt ? '  (delt rang)' : ''}`);
    console.log(`  Q: ${a.q.slice(0, 100)}`);
    a.o.forEach((x, j) => console.log(`  ${j === 0 ? 'FASIT' : `  [${j}]`} (${String(x).length}) ${String(x).slice(0, 110)}`));
  }
  if (kandidater.length > 400) console.log(`\n… og ${kandidater.length - 400} til (vis dem med et høyere tak).`);
}
