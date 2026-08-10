// Sjekker «lengde-tell» i quiz: er fasiten (options[0]) systematisk det lengste
// alternativet? Da kan en student gjette ved å velge det lengste svaret.
// Mål: fasit-er-lengst ~25 % (tilfeldig), ikke 77 %. Se BYGGEPLAN-MAL «LENGDE-TELL».
//
// ⚠ YTTERPUNKTENE ER IKKE NOK — RANGFORDELINGEN ER MÅLET.
// Fram til 10. august 2026 målte denne fila bare «eneste lengst» og «korteste»,
// altså rang 1 og rang 4. Den er blind for alt imellom. exfac03-hark Del 6 hadde
// fasiten på lengderang 3 i 62–95 % av spørsmålene og passerte grønt: en student
// som lærte seg «kryss av det nest korteste» hadde like god uttelling som en som
// lærte seg «kryss av det lengste», og porten sa ✅.
//
// Kravet er ROTASJON, ikke retning: fasiten skal ligge på hver av de fire
// lengderangene i ca. 25 % av spørsmålene. Rotårsaken er nesten alltid at
// distraktorene og fasiten skrives i ULIK sjanger — fasiten som ferdig begrunnet
// påstand, distraktorene som bare etiketter (eller omvendt). Fiksen er å heve
// distraktorene til samme utførlighetsnivå, ALDRI å trimme fasiten: da treffer
// ingen `explanation` feil, og forklaringene slipper å rettes.
//
// Kjør:  npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs econ1210
//        (uten arg: alle quiz-data-*.ts)
//        --streng: exit 1 når en rang eller et ytterpunkt er over taket
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const DATA = path.join(REPO, 'src/lib/data');
const streng = process.argv.includes('--streng');
const arg = process.argv.slice(2).find((a) => !a.startsWith('--'));
const files = arg
  ? [`quiz-data-${arg}.ts`]
  : fs.readdirSync(DATA).filter((f) => /^quiz-data-.+\.ts$/.test(f));

// Rangtaket er romsligere enn ytterpunkttaket (35 %) fordi rang måles på færre
// spørsmål per bøtte og svinger mer. Under 12 spørsmål rapporteres rang uten å
// felle — med n=6 er 2 av 6 allerede 33 %, og det er ren støy.
const RANGTAK = 0.40;
const RANG_MIN_N = 12;
let grandTotal = 0, grandLongest = 0;
let brudd = 0;
for (const file of files) {
  const full = path.join(DATA, file);
  if (!fs.existsSync(full)) { console.log(`(hopper over ${file} — finnes ikke)`); continue; }
  const mod = await import(pathToFileURL(full).href);
  const data = mod.default ?? mod;
  let total = 0, longest = 0, strict = 0, shortest = 0;
  const worst = [];
  // Rangfordelingen regnes bare på firevalgsspørsmål — det er standarden, og en
  // bøtte som blander 3- og 4-valg er ikke sammenlignbar med sjansenivået 25 %.
  const rang = [0, 0, 0, 0];
  let rangN = 0, annetAntall = 0;
  for (const [ch, qs] of Object.entries(data)) {
    if (!Array.isArray(qs)) continue;
    for (const q of qs) {
      const opts = q.options;
      if (!Array.isArray(opts) || opts.length < 2) continue;
      total++;
      const lens = opts.map((o) => String(o).length);
      const correct = lens[0];
      const maxLen = Math.max(...lens);
      const isLongest = correct === maxLen;
      const onlyLongest = isLongest && lens.filter((l) => l === maxLen).length === 1;
      if (isLongest) longest++;
      if (onlyLongest) { strict++;
        const gap = correct - Math.max(...lens.slice(1));
        worst.push({ ch, gap, q: q.question.slice(0, 50) });
      }
      if (correct === Math.min(...lens)) shortest++;

      // Rang 1 = lengst.
      //
      // ⚠ Tie-håndteringen er ikke kosmetikk. Første utkast ga fasiten den beste
      // (laveste) rangen ved lik lengde. 21 % av alle firevalgsspørsmål i
      // katalogen har en distraktor med NØYAKTIG samme tegnlengde som fasiten,
      // så den regelen blåste opp rang 1 og tømte rang 4 — econ1210 kom ut med
      // «rang 4: 1 %», som var målefeil, ikke data.
      //
      // Riktig regel: er fasiten lik lange med k−1 andre, er den ett av k
      // alternativer som deler rangene r … r+k−1, og runtime stokker dem. Da
      // fordeles vekten 1/k på hver av de rangene.
      if (lens.length === 4) {
        const r = lens.filter((l) => l > correct).length;
        const k = lens.filter((l) => l === correct).length;
        for (let i = 0; i < k; i++) rang[r + i] += 1 / k;
        rangN++;
      } else annetAntall++;
    }
  }
  const pct = (n) => `${((100 * n) / total).toFixed(0)}%`;
  const verstRang = rangN ? Math.max(...rang) / rangN : 0;
  const rangBrudd = rangN >= RANG_MIN_N && verstRang > RANGTAK;
  const yttreBrudd = strict / total > 0.35 || shortest / total > 0.35;
  if (rangBrudd || yttreBrudd) brudd++;
  const flag = yttreBrudd ? '  ⚠️ LENGDE-TELL' : rangBrudd ? '  ⚠️ RANGKLYNGE' : '  ✅';
  console.log(`\n${file}: ${total} spørsmål${flag}`);
  console.log(`  fasit (delt) lengst: ${longest} (${pct(longest)}) · eneste lengst: ${strict} (${pct(strict)}) · korteste: ${shortest} (${pct(shortest)})`);
  if (rangN) {
    const r = rang.map((n, i) => {
      const p = `${((100 * n) / rangN).toFixed(0)}%`;
      return `rang ${i + 1}: ${p}${n / rangN > RANGTAK && rangN >= RANG_MIN_N ? ' ⚠️' : ''}`;
    });
    console.log(`  lengderang (n=${rangN}${annetAntall ? `, ${annetAntall} ikke-firevalg utelatt` : ''}): ${r.join(' · ')}`);
    if (rangBrudd) {
      console.log(`   → fasiten klumper seg på én lengderang. En student som lærer seg`);
      console.log(`     akkurat det mønsteret gjetter riktig i ${(100 * verstRang).toFixed(0)} % av spørsmålene.`);
      console.log(`     Hev distraktorene til fasitens utførlighetsnivå — ikke trim fasiten.`);
    }
  }
  if (strict / total > 0.35) {
    worst.sort((a, b) => b.gap - a.gap).slice(0, 8).forEach((w) => console.log(`   +${w.gap} [${w.ch}] «${w.q}…»`));
  }
  grandTotal += total; grandLongest += strict;
}
if (files.length > 1) console.log(`\n===== SUM: ${grandLongest}/${grandTotal} eneste-lengst (${((100 * grandLongest) / grandTotal).toFixed(0)}%) =====`);
console.log(`\n${brudd} av ${files.length} fil(er) over taket (ytterpunkt 35 %, rang ${100 * RANGTAK} %).`);
// Advarende som standard, fellende med --streng. Eksisterende kall i bokløypa
// forventer exit 0 og skal ikke begynne å feile av at rangmålingen kom til.
process.exit(streng && brudd ? 1 : 0);
