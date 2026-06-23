/**
 * Automatisk tilgjengelighetssjekk (WCAG 2.1 AA) med Playwright + axe-core.
 *
 * Kjør lokalt:
 *   1. Start appen:  PORT=3100 npm run dev   (eller npm run build && npm run start)
 *   2. Skann:        BASE=http://localhost:3100 node scripts/a11y-check.mjs
 *
 * Avslutter med exit-kode 1 hvis det finnes brudd (brukes i CI for å feile PR-er).
 * Sett A11Y_SOFT=1 for kun å rapportere uten å feile.
 */
import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const AXE = readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const BASE = process.env.BASE || 'http://localhost:3000';
const SOFT = process.env.A11Y_SOFT === '1';

// Representative ruter på tvers av offentlige flater. Dashboard krever innlogging
// (redirecter til /login uinnlogget), så vi dekker /login i stedet.
const ROUTES = [
  ['hjem', '/'],
  ['bok-oversikt', '/bok'],
  ['trinn-vg1', '/bok/trinn/vg1'],
  ['kapittel', '/bok/1t/1t-1-1'],
  ['kapittel-quiz', '/bok/1t/1t-1-1/quiz'],
  ['quiz', '/quiz/1t-1-1'],
  ['ressurser', '/ressurser'],
  ['poengkalkulator', '/poengkalkulator'],
  ['login', '/login'],
  ['personvern', '/personvern'],
  ['tilgjengelighet', '/tilgjengelighet'],
];

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

const browser = await chromium.launch();
const results = [];

for (const [name, path] of ROUTES) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  try {
    await page.goto(BASE + path, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(2000);
    await page.evaluate(AXE);
    const violations = await page.evaluate(
      async (tags) => {
        const r = await window.axe.run(document, { runOnly: { type: 'tag', values: tags } });
        return r.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          help: v.help,
          nodes: v.nodes.map((n) => n.target.join(' ')),
        }));
      },
      TAGS
    );
    results.push({ name, path, violations });
  } catch (e) {
    results.push({ name, path, error: String(e).slice(0, 160) });
  } finally {
    await page.close();
  }
}
await browser.close();

let total = 0;
let errors = 0;
console.log('\n===== Tilgjengelighetssjekk (axe-core, WCAG 2.1 AA) =====');
for (const r of results) {
  if (r.error) {
    errors++;
    console.log(`\n## ${r.name} (${r.path}) — KUNNE IKKE SKANNE: ${r.error}`);
    continue;
  }
  const count = r.violations.reduce((s, v) => s + v.nodes.length, 0);
  total += count;
  if (count === 0) {
    console.log(`\n✅ ${r.name} (${r.path})`);
  } else {
    console.log(`\n⚠️  ${r.name} (${r.path}) — ${count} elementbrudd`);
    for (const v of r.violations) {
      console.log(`   [${v.impact}] ${v.id}: ${v.help}`);
      for (const n of v.nodes.slice(0, 5)) console.log(`        → ${n}`);
    }
  }
}
console.log(`\n===== TOTALT: ${total} brudd, ${errors} skannefeil på ${results.length} ruter =====\n`);

if (!SOFT && (total > 0 || errors > 0)) process.exit(1);
