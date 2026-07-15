// Sjekker «lengde-tell» i quiz: er fasiten (options[0]) systematisk det lengste
// alternativet? Da kan en student gjette ved å velge det lengste svaret.
// Mål: fasit-er-lengst ~25 % (tilfeldig), ikke 77 %. Se BYGGEPLAN-MAL «LENGDE-TELL».
//
// Kjør:  npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs econ1210
//        (uten arg: alle quiz-data-*.ts)
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const DATA = path.join(REPO, 'src/lib/data');
const arg = process.argv[2];
const files = arg
  ? [`quiz-data-${arg}.ts`]
  : fs.readdirSync(DATA).filter((f) => /^quiz-data-.+\.ts$/.test(f));

let grandTotal = 0, grandLongest = 0;
for (const file of files) {
  const full = path.join(DATA, file);
  if (!fs.existsSync(full)) { console.log(`(hopper over ${file} — finnes ikke)`); continue; }
  const mod = await import(pathToFileURL(full).href);
  const data = mod.default ?? mod;
  let total = 0, longest = 0, strict = 0, shortest = 0;
  const worst = [];
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
    }
  }
  const pct = (n) => `${((100 * n) / total).toFixed(0)}%`;
  const flag = strict / total > 0.35 ? '  ⚠️ LENGDE-TELL' : '  ✅';
  console.log(`\n${file}: ${total} spørsmål${flag}`);
  console.log(`  fasit (delt) lengst: ${longest} (${pct(longest)}) · eneste lengst: ${strict} (${pct(strict)}) · korteste: ${shortest} (${pct(shortest)})`);
  if (strict / total > 0.35) {
    worst.sort((a, b) => b.gap - a.gap).slice(0, 8).forEach((w) => console.log(`   +${w.gap} [${w.ch}] «${w.q}…»`));
  }
  grandTotal += total; grandLongest += strict;
}
if (files.length > 1) console.log(`\n===== SUM: ${grandLongest}/${grandTotal} eneste-lengst (${((100 * grandLongest) / grandTotal).toFixed(0)}%) =====`);
process.exit(0);
