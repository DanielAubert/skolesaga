// Render SVG-filer til PNG for visuell QA: node render_check.mjs <svg-fil...> eller <mappe>
import { chromium } from 'playwright';
import { readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

const args = process.argv.slice(2);
let files = [];
for (const a of args) {
  const p = resolve(a);
  if (statSync(p).isDirectory()) {
    files.push(...readdirSync(p).filter(f => f.endsWith('.svg')).map(f => join(p, f)));
  } else {
    files.push(p);
  }
}
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
for (const f of files) {
  await page.goto('file://' + f);
  const out = f.replace(/\.svg$/, '.check.png');
  await page.screenshot({ path: out });
  console.log('OK', out);
}
await browser.close();
