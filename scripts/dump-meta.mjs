#!/usr/bin/env node
/**
 * Dumpar chapterMeta (nav-titlar) til JSON så omsetjings-pipelinen kan lese utan TS-bygg.
 * Les alle textbook-courses-*.ts, evaluerer kvar `export const COURSE_* = {...}`-literal
 * (string-aware brace-match) og samlar chapter-metadata per chapterId.
 * Køyr: node scripts/dump-meta.mjs
 * Skriv: src/lib/data/meta/_all.json      = { <chapterId>: {title, subtitle?, description?, topics?} }
 *        src/lib/data/meta/_registry.json = { chapterIds: [...] }
 *
 * Omsettbare felt: title, subtitle, description, topics[]. (competenceGoals = bokmål, IKKJE med.)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'src', 'lib', 'data');
const OUT_DIR = path.join(DATA, 'meta');

const files = fs.readdirSync(DATA).filter((f) => /^textbook-courses-.+\.ts$/.test(f));

function extractObject(text, fromIdx) {
  let i = text.indexOf('{', fromIdx);
  if (i < 0) return null;
  const start = i;
  let depth = 0, q = null, esc = false;
  for (; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (esc) { esc = false; continue; }
      if (c === '\\') { esc = true; continue; }
      if (c === q) q = null;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') { q = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return text.slice(start, i + 1); }
  }
  return null;
}

// Finn alle `export const NAME ...= {` i fila og eval kvar.
function evalCourses(file, text) {
  const out = [];
  const re = /export\s+const\s+[A-Za-z0-9_]+\s*(?::\s*[^=]+?)?\s*=\s*\{/g;
  let m;
  while ((m = re.exec(text))) {
    const objText = extractObject(text, m.index);
    if (!objText) continue;
    try {
      // eslint-disable-next-line no-new-func
      const obj = new Function(`return (${objText});`)();
      out.push(obj);
    } catch (e) {
      console.warn(`  ${file}: klarte ikkje evaluere eitt COURSE-objekt: ${e.message}`);
    }
    re.lastIndex = m.index + objText.length;
  }
  return out;
}

const all = {};
let chapters = 0;
for (const f of files) {
  const courses = evalCourses(f, fs.readFileSync(path.join(DATA, f), 'utf-8'));
  for (const course of courses) {
    if (!course || !Array.isArray(course.chapters)) continue;
    for (const ch of course.chapters) {
      if (!ch || !ch.id) continue;
      const entry = {};
      if (typeof ch.title === 'string') entry.title = ch.title;
      if (typeof ch.subtitle === 'string') entry.subtitle = ch.subtitle;
      if (typeof ch.description === 'string') entry.description = ch.description;
      if (Array.isArray(ch.topics)) entry.topics = ch.topics;
      all[ch.id] = entry; // siste vinn
      chapters++;
    }
  }
}

const ids = Object.keys(all).sort();
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, '_all.json'), JSON.stringify(all));
fs.writeFileSync(path.join(OUT_DIR, '_registry.json'), JSON.stringify({ chapterIds: ids }, null, 1));
console.log(`Dumpa ${files.length} filer -> ${ids.length} unike chapterMeta (av ${chapters} oppføringar).`);
