// KaTeX-port for auditverktøyet. Leser JSON-linjer {i, tex, display} på stdin og skriver én JSON-linje per uttrykk
// som IKKE kan rendres: {i, feil}. Samme innstillinger som LatexRenderer (trust: true; inline med \frac får
// \displaystyle foran), men throwOnError: true, så feilen blir synlig her i stedet for som rød tekst hos eleven.
// Bruk: node katex_port.cjs [<sti til node_modules/katex>] < uttrykk.jsonl
const path = require('path');
const katexSti = process.argv[2] || process.env.KATEX_STI || path.join(__dirname, '..', '..', 'node_modules', 'katex');
const katex = require(katexSti);
let varsler = 0;
console.warn = () => { varsler++; };
const rl = require('readline').createInterface({ input: process.stdin });
let n = 0, feil = 0;
rl.on('line', (linje) => {
  if (!linje.trim()) return;
  const { i, tex, display } = JSON.parse(linje);
  n++;
  let t = tex.trim();
  if (!display && t.includes('\\frac')) t = '\\displaystyle ' + t;
  try {
    katex.renderToString(t, { displayMode: !!display, throwOnError: true, trust: true, strict: 'ignore' });
  } catch (e) {
    feil++;
    process.stdout.write(JSON.stringify({ i, feil: String(e.message).replace(/^KaTeX parse error: /, '').slice(0, 160) }) + '\n');
  }
});
rl.on('close', () => process.stderr.write(`katex: ${n} uttrykk, ${feil} feil, ${varsler} fontvarsler\n`));
