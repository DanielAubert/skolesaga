/**
 * sjekk-tabeller.mts <emne> [filmønster] — renderer markdown-tabellene med den
 * EKTE `LatexRenderer` og teller kolonner per rad.
 *
 * Hvorfor: en tom første hodecelle («| | A | B |») blir ikke til en tom `<th>` —
 * den forsvinner helt. Hodet får da to kolonner mens radene har tre, og HELE
 * tabellen forskyves ett hakk for leseren. Feilen er usynlig i JSON-en, usynlig
 * i `sjekk-latex.py` (KaTeX klager ikke), og usynlig i en `npm run build`.
 * Den ble funnet 30. juli 2026 i to tabeller i tfy4115 Del 10.
 *
 * Samme sjekk fanger en bar inne i matte i en tabellcelle: `$\left|x\right|$`
 * i en celle deler cellen i to. (Fiksen der er `\lvert`/`\rvert`.)
 *
 * Porten lager selv `.rendertest/latex-renderer.tsx` hvis den mangler: en kopi
 * av `src/components/textbook/latex-renderer.tsx` der CSS-importen av katex er
 * fjernet (tsx kan ikke laste CSS) og `@/lib/media` er gjort relativ. Kopien
 * er derfor alltid i takt med den komponenten leseren faktisk møter.
 *
 * Kjør:  npx tsx scripts/hoyskolebok/sjekk-tabeller.mts tfy4115
 *        npx tsx scripts/hoyskolebok/sjekk-tabeller.mts tfy4115 '1[01]'
 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs';
import path from 'path';

// Speil den EKTE komponenten inn i .rendertest/ før vi importerer den.
const kilde = 'src/components/textbook/latex-renderer.tsx';
const speil = '.rendertest/latex-renderer.tsx';
fs.mkdirSync(path.dirname(speil), { recursive: true });
fs.writeFileSync(
  speil,
  fs
    .readFileSync(kilde, 'utf-8')
    .replace(/^import 'katex\/dist\/katex\.min\.css';\n/m, '')
    // .tsx utenfor Next-bygget har ingen automatisk JSX-runtime her
    .replace(/^'use client';\n/m, "'use client';\nimport React from 'react';\n")
    .replace(/@\/lib\/media/g, '../src/lib/media')
    .replace(/@\//g, '../src/'),
  'utf-8',
);
const { LatexRenderer } = await import('../../.rendertest/latex-renderer');

const emne = process.argv[2];
if (!emne) {
  console.error('bruk: npx tsx scripts/hoyskolebok/sjekk-tabeller.mts <emne> [filmønster]');
  process.exit(2);
}
const monster = process.argv[3] ?? '';
const dir = 'src/lib/data/chapters';
const filer = fs
  .readdirSync(dir)
  .filter((f) => new RegExp(`^${emne}-${monster}.*\\.json$`).test(f))
  .sort();

function* strenger(n: unknown, s = ''): Generator<[string, string]> {
  if (typeof n === 'string') {
    yield [s, n];
    return;
  }
  if (Array.isArray(n)) {
    for (let i = 0; i < n.length; i++) yield* strenger(n[i], `${s}[${i}]`);
    return;
  }
  if (n && typeof n === 'object')
    for (const [k, v] of Object.entries(n)) yield* strenger(v, `${s}.${k}`);
}

let tabeller = 0;
let rader = 0;
let avvik = 0;
for (const f of filer) {
  const d = JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf-8'));
  for (const [sti, s] of strenger(d)) {
    if (!/\|/.test(s)) continue;
    const html = renderToStaticMarkup(
      React.createElement(LatexRenderer, { content: s, inline: false }),
    );
    for (const tb of html.match(/<table[\s\S]*?<\/table>/g) ?? []) {
      tabeller++;
      const hodeceller = (tb.match(/<th\b/g) ?? []).length;
      for (const tr of tb.match(/<tr>[\s\S]*?<\/tr>/g) ?? []) {
        const n = (tr.match(/<t[dh]\b/g) ?? []).length;
        rader++;
        if (n !== hodeceller) {
          avvik++;
          console.log(
            `KOLONNEAVVIK ${f}${sti}: rad har ${n} celler, hodet ${hodeceller}` +
              ` — tom celle forsvinner, og tabellen forskyves`,
          );
        }
      }
    }
    // KaTeX legger igjen den rå TeX-kilden i en usynlig <annotation>. Den er
    // ikke synlig tekst og må ut før vi leter etter bar som har lekket ut.
    const synlig = html
      .replace(/<annotation[\s\S]*?<\/annotation>/g, '')
      .replace(/<[^>]*>/g, '');
    const raa = (synlig.match(/\|/g) ?? []).length;
    if (raa) {
      avvik++;
      console.log(`RÅ BAR ${f}${sti}: ${raa} stk nådde den synlige teksten`);
    }
  }
}

console.log(`${emne}: ${tabeller} tabeller, ${rader} rader kontrollert i ${filer.length} filer`);
if (avvik) {
  console.log(`TABELLPORT AVVIK: ${avvik}`);
  process.exit(1);
}
console.log('TABELLPORT OK — ingen kolonneavvik, ingen rå bar i synlig tekst');
