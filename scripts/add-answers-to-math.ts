/**
 * add-answers-to-math.ts
 *
 * Leser kapitel-JSON for 8., 9. og 10. klasse matematikk,
 * parser solution-felt og legger til answer / expressionAnswer
 * på deloppgaver som mangler maskin-sjekkbare svarfelt.
 *
 * Bruk:
 *   npx tsx scripts/add-answers-to-math.ts --dry-run   # forhåndsvisning
 *   npx tsx scripts/add-answers-to-math.ts              # oppdater filer
 */

import * as fs from "fs";
import * as path from "path";

// ── CLI-flagg ──────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes("--dry-run");
const VERBOSE = process.argv.includes("--verbose");

// ── Konfigurasjon ──────────────────────────────────────────────────────

const CHAPTERS_DIR = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "data",
  "chapters"
);

// Prefiks-mønstre på oppgavenummer som hoppes over
const SKIP_NUMBER_PREFIXES = ["F", "D", "S"];

// ── Typer ──────────────────────────────────────────────────────────────

interface SubTask {
  label: string;
  task: string;
  solution?: string;
  answer?: number;
  expressionAnswer?: string;
  multipleChoiceOptions?: string[];
  [key: string]: unknown;
}

interface Exercise {
  id: string;
  number?: string;
  subTasks?: SubTask[];
  [key: string]: unknown;
}

interface ContentBlock {
  type: string;
  exercise?: Exercise;
  content?: ContentBlock[];
  [key: string]: unknown;
}

interface Chapter {
  id: string;
  content: ContentBlock[];
  [key: string]: unknown;
}

// ── Statistikk ─────────────────────────────────────────────────────────

let stats = {
  filesProcessed: 0,
  filesModified: 0,
  subtasksTotal: 0,
  subtasksSkippedExisting: 0,
  subtasksSkippedNumber: 0,
  subtasksSkippedTextOnly: 0,
  subtasksSkippedNoSolution: 0,
  answersAdded: 0,
  expressionAnswersAdded: 0,
  couldNotParse: 0,
};

const unparseable: { file: string; exercise: string; label: string; solution: string }[] = [];

// ── LaTeX-parsing ──────────────────────────────────────────────────────

/** Fjern enheter fra slutten av en allerede konvertert plain-text streng */
function stripUnitsPlain(s: string): string {
  return s
    .replace(/\s*°\s*(C|F|celsius|fahrenheit)\b/gi, "")
    .replace(/\s+(meter|cm|mm|km|kg|mg|liter|dl|cl|ml|kr|kroner|NOK|timer|min|sekunder|sek|år|dager|uker|måneder|prosent|elever|biler|epler|stykk|stk|enheter|grader)\b.*$/gi, "")
    .replace(/\s*°\s*$/, "")
    .replace(/\s*%\s*$/, "")
    .trim();
}

/** Fjern enheter fra LaTeX-streng (før konvertering) */
function stripUnitsLatex(s: string): string {
  return s
    .replace(/\s*°\s*C\b/g, "")
    .replace(/\s*\\text\s*\{[^}]*\}\s*$/g, "")
    .replace(/\s*°\s*$/, "")
    .replace(/\s*\\%\s*$/, "")
    .trim();
}

/** Konverter LaTeX-brøk \frac{a}{b} til a/b-streng */
function latexFracToString(latex: string): string {
  // Handle nested fracs from inside out
  let result = latex;
  const fracRegex = /\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/;
  let safety = 0;
  while (fracRegex.test(result) && safety++ < 10) {
    result = result.replace(fracRegex, (_, num, den) => `(${num})/(${den})`);
  }
  return result;
}

/** Konverter LaTeX til ren matte-streng */
function latexToPlain(latex: string): string {
  let s = latex;

  // Fjern $-delimitere
  s = s.replace(/\$/g, "");

  // Fjern \text{...} og \textbf{...}
  s = s.replace(/\\text(?:bf|it|rm)?\s*\{([^}]*)\}/g, "$1");

  // Brøker
  s = latexFracToString(s);

  // \cdot → *
  s = s.replace(/\\cdot/g, "*");

  // \times → *
  s = s.replace(/\\times/g, "*");

  // \div → /
  s = s.replace(/\\div/g, "/");

  // \sqrt{...}
  s = s.replace(/\\sqrt\s*\{([^}]*)\}/g, "sqrt($1)");

  // \sqrt[n]{...} (n-te rot)
  s = s.replace(/\\sqrt\s*\[([^\]]*)\]\s*\{([^}]*)\}/g, "root($1,$2)");

  // {,} → . (norsk desimalkomma i LaTeX)
  s = s.replace(/\{,\}/g, ".");

  // Erstatt komma brukt som desimalskilletegn (f.eks. "0,5")
  s = s.replace(/(\d),(\d)/g, "$1.$2");

  // \left, \right, \bigg osv.
  s = s.replace(/\\(?:left|right|bigg?|Big|Bigg)/g, "");

  // \leq, \geq, \neq, \approx
  s = s.replace(/\\leq/g, "<=");
  s = s.replace(/\\geq/g, ">=");
  s = s.replace(/\\neq/g, "!=");
  s = s.replace(/\\approx/g, "≈");

  // \pi
  s = s.replace(/\\pi/g, "pi");

  // Fjern \, \; \! \quad etc. (LaTeX spacing)
  s = s.replace(/\\[,;!\s]|\\quad|\\qquad/g, " ");

  // Fjern gjenværende backslash-kommandoer som ikke er kritiske
  // (men behold ^ for potenser)
  s = s.replace(/\\(?![\^])[a-zA-Z]+/g, "");

  // Fjern { og } som ikke er del av potenser
  s = s.replace(/[{}]/g, "");

  // Rensk mellomrom
  s = s.replace(/\s+/g, " ").trim();

  return s;
}

/**
 * Prøv å evaluere en enkel numerisk potens som 2^5 → 32.
 * Returnerer NaN hvis det ikke er en ren numerisk potens.
 */
function tryEvalPower(expr: string): number {
  const m = expr.match(/^(-?\d+(?:\.\d+)?)\^(\d+)$/);
  if (m) {
    return Math.pow(parseFloat(m[1]), parseInt(m[2]));
  }
  return NaN;
}

/**
 * Forsøk å evaluere et enkelt matematisk uttrykk (kun tall og +−×÷^).
 * Returnerer NaN hvis det inneholder variabler eller ikke kan evalueres.
 */
function tryEvalNumeric(expr: string): number {
  // Fjern whitespace
  const clean = expr.replace(/\s/g, "");

  // Avvis uttrykk med variabler (bokstaver annet enn e for eulers tall)
  if (/[a-df-zA-DF-Z]/.test(clean)) return NaN;

  // Avvis uttyrk med sqrt, root osv. som kan gi irrasjonale tall
  if (/sqrt|root|pi/i.test(clean)) return NaN;

  // Konverter ^ til **
  let evalStr = clean.replace(/\^/g, "**");

  // Bare tillat sikre tegn: tall, operatorer, parenteser, punktum
  if (/[^0-9+\-*/.()e]/.test(evalStr)) return NaN;

  try {
    // eslint-disable-next-line no-eval
    const result = Function(`"use strict"; return (${evalStr})`)();
    if (typeof result === "number" && isFinite(result)) {
      return result;
    }
  } catch {
    // Ignorer evalueringsfeil
  }
  return NaN;
}

/** Sjekk om en brøk gir terminerende desimal */
function isTerminatingDecimal(num: number, den: number): boolean {
  if (den === 0) return false;
  // Forenkle brøken
  const g = gcd(Math.abs(num), Math.abs(den));
  let d = Math.abs(den) / g;
  // Fjern faktorer av 2 og 5
  while (d % 2 === 0) d /= 2;
  while (d % 5 === 0) d /= 5;
  return d === 1;
}

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

/**
 * Sjekk om en løsning er ren tekst uten mattesvar.
 * Returnerer true for løsninger som er rent forklarende.
 */
function isTextOnlySolution(solution: string): boolean {
  // Hvis det ikke finnes noen $...$-blokker, er det ren tekst
  if (!solution.includes("$")) return true;

  // Sjekk om det er en forklarende tekst med noen mattesymboler,
  // men uten et klart "svar"
  const mathBlocks = solution.match(/\$[^$]+\$/g) || [];
  if (mathBlocks.length === 0) return true;

  // Sjekk om alle mathblocks bare er gjengivelse av oppgaven
  // (ingen = tegn, ingen svar)
  const hasEquals = mathBlocks.some((b) => b.includes("="));
  const hasAnswer = mathBlocks.some((b) => /\d/.test(b));

  // Ren tekst med et par variabel-referanser men ingen beregning
  if (!hasEquals && !hasAnswer) return true;

  return false;
}

/**
 * Sjekk om løsningen inneholder koordinatpar, funksjonsnotasjon,
 * grafer eller andre ting som ikke kan uttrykkes som et enkelt svar.
 */
function isComplexSolution(solution: string): boolean {
  // Koordinatpar (x, y)
  if (/\(\s*-?\d.*,\s*-?\d/.test(solution) && solution.includes(",")) {
    // Men ikke {,} som er norsk desimalkomma
    const withoutLatexComma = solution.replace(/\{,\}/g, "");
    if (/\(\s*-?\d.*,\s*-?\d/.test(withoutLatexComma)) return true;
  }

  // f(x) = ... funksjonsnotasjon som svar
  if (/[fghp]\s*\(.*\)\s*=/.test(solution)) return true;

  // y = mx + b (lineære funksjoner som svar)
  if (/y\s*=\s*.*x/.test(solution) && !solution.includes("\\frac")) return true;

  // Svar med "eller" (to mulige svar)
  if (/\beller\b/i.test(solution)) return true;

  // "Se tegning", "Se figur", etc.
  if (/\b(se tegning|se figur|se tabell|se graf)\b/i.test(solution)) return true;

  // "Ingen løsning" etc.
  if (/\b(ingen løsning|ingen reell|uendelig mange)\b/i.test(solution)) return true;

  // Opplistinger med flere svar (f.eks. "40°, 140°, 40°, 140°")
  // (mer enn 2 komma-separerte verdier)
  const commaCount = (solution.match(/,/g) || []).length;
  const latexCommaCount = (solution.match(/\{,\}/g) || []).length;
  if (commaCount - latexCommaCount >= 2) return true;

  // Geometriske symboler: \angle, \triangle, \vec, \overrightarrow
  if (/\\(angle|triangle|vec|overrightarrow)/.test(solution)) return true;

  // \begin{cases} (stykkevis definerte funksjoner)
  if (/\\begin\{cases\}/.test(solution)) return true;

  // \Rightarrow med tekst (bevisargumenter)
  if (/\\Rightarrow/.test(solution)) return true;

  // Ulikheter/sortering (<, >, ≤, ≥ brukt som sammenligning, ikke i utregning)
  if (/\\(leq|geq|neq)/.test(solution)) return true;
  if (/</.test(solution) && !solution.includes("\\frac")) return true;

  return false;
}

/**
 * Ekstraher det siste numeriske eller algebraiske svaret fra en løsning.
 * Returnerer { answer: number } eller { expressionAnswer: string } eller null.
 */
function extractAnswer(
  solution: string
): { answer: number } | { expressionAnswer: string } | null {
  if (!solution) return null;

  // Sjekk for ren tekst uten matte
  if (isTextOnlySolution(solution)) return null;

  // Sjekk for komplekse løsninger
  if (isComplexSolution(solution)) return null;

  // Finn alle $...$-blokker, filtrer bort rene enhets-blokker som $^3$ eller $^2$
  const allMathBlocks = solution.match(/\$([^$]+)\$/g);
  if (!allMathBlocks || allMathBlocks.length === 0) return null;

  // Filtrer bort rene enhets-superscripts som $^3$, $^{2}$ (brukt etter cm, m etc.)
  const mathBlocks = allMathBlocks.filter(
    (b) => !/^\$\s*\^\s*\{?\d\}?\s*\$$/.test(b)
  );
  if (mathBlocks.length === 0) return null;

  // Ta den siste meningsfulle math-blokken (som typisk inneholder svaret)
  const lastBlock = mathBlocks[mathBlocks.length - 1].replace(/^\$|\$$/g, "");

  // ── Strategi 1: Finn siste ledd etter = eller ≈ ──

  let answerPart = lastBlock;

  // Hvis det er ≈ (approx), ta det som er etter siste ≈ (det eksakte svaret)
  // Men prøv = først, og bruk ≈-delen bare hvis =  gir noe ubrukelig
  if (lastBlock.includes("\\approx")) {
    // Splitt på \approx og ta den approximate verdien
    const approxParts = lastBlock.split("\\approx");
    const approxVal = approxParts[approxParts.length - 1].trim();
    // Men sjekk også om det er et eksakt svar før \approx
    const exactPart = approxParts[0].trim();
    if (exactPart.includes("=")) {
      const eqParts = exactPart.split("=");
      answerPart = eqParts[eqParts.length - 1].trim();
    } else {
      answerPart = approxVal;
    }
  } else if (lastBlock.includes("=")) {
    const parts = lastBlock.split("=");
    answerPart = parts[parts.length - 1].trim();
  }

  // Fjern LaTeX-enheter (kun trygge ting som °C, \text{...}, °, \%)
  answerPart = stripUnitsLatex(answerPart);

  // Fjern trailing forklaring i parentes — kun norske/engelske ord-forklaringer
  // Må ha minst 2 bokstaver på rad for å telle som forklaring (unngår "4(2x+3)")
  answerPart = answerPart.replace(/\s*\([^)]*[a-zæøåA-ZÆØÅ]{2,}[^)]*\)\s*$/, "").trim();

  // Fjern "✓" og lignende
  answerPart = answerPart.replace(/[✓✗✔]/g, "").trim();

  if (!answerPart) return null;

  // ── Sjekk: Enkel brøk \frac{a}{b} ──

  const fracMatch = answerPart.match(
    /^\\frac\s*\{\s*(-?\d+)\s*\}\s*\{\s*(\d+)\s*\}$/
  );
  if (fracMatch) {
    const num = parseInt(fracMatch[1]);
    const den = parseInt(fracMatch[2]);
    if (den !== 0) {
      if (isTerminatingDecimal(num, den)) {
        return { answer: parseFloat((num / den).toFixed(10)) };
      } else {
        return { expressionAnswer: `${num}/${den}` };
      }
    }
  }

  // ── Sjekk: Negativ brøk -\frac{a}{b} ──

  const negFracMatch = answerPart.match(
    /^-\\frac\s*\{\s*(\d+)\s*\}\s*\{\s*(\d+)\s*\}$/
  );
  if (negFracMatch) {
    const num = -parseInt(negFracMatch[1]);
    const den = parseInt(negFracMatch[2]);
    if (den !== 0) {
      if (isTerminatingDecimal(Math.abs(num), den)) {
        return { answer: parseFloat((num / den).toFixed(10)) };
      } else {
        return { expressionAnswer: `${num}/${den}` };
      }
    }
  }

  // ── Konverter til ren streng ──

  let plain = latexToPlain(answerPart);

  // Fjern enheter etter konvertering til plain text
  plain = stripUnitsPlain(plain);

  if (!plain) return null;

  // ── Sjekk: Ren numerisk verdi ──

  const numMatch = plain.match(/^-?\d+(\.\d+)?$/);
  if (numMatch) {
    return { answer: parseFloat(plain) };
  }

  // ── Sjekk: Primtallsfaktorisering (f.eks. "2^2*3^2") ──
  // Et produkt av potenser skal beholdes som expressionAnswer,
  // fordi eleven skal skrive faktoriseringen, ikke resultatet.
  if (/^\d+\^\d+(\*\d+(\^\d+)?)+$/.test(plain.replace(/\s/g, ""))) {
    return { expressionAnswer: plain.replace(/\s/g, "") };
  }
  // Enkel form: "2*3^2*5" (noen faktorer uten potens)
  if (/^\d+(\*\d+(\^\d+)?){2,}$/.test(plain.replace(/\s/g, "")) && plain.includes("^")) {
    return { expressionAnswer: plain.replace(/\s/g, "") };
  }

  // ── Sjekk: Numerisk potens som 2^5 ──

  const powerVal = tryEvalPower(plain);
  if (!isNaN(powerVal)) {
    return { answer: powerVal };
  }

  // ── Sjekk: Evaluerbart numerisk uttrykk ──

  const evalResult = tryEvalNumeric(plain);
  if (!isNaN(evalResult)) {
    // Avrund til maks 10 desimaler for å unngå flytpunktsfeil
    const rounded = parseFloat(evalResult.toFixed(10));
    return { answer: rounded };
  }

  // ── Sjekk: Algebraisk uttrykk (inneholder variabler) ──

  if (/[a-zA-Z]/.test(plain)) {
    // Rensk uttrykket for expressionAnswer
    let expr = plain
      .replace(/\s+/g, "")
      .replace(/·/g, "*")
      .replace(/×/g, "*")
      .replace(/÷/g, "/");

    // Valider at det ser ut som et gyldig matematisk uttrykk
    if (expr.length > 0 && expr.length < 100) {
      // Sjekk at det ikke er en hel setning
      if (!/[æøåÆØÅ]/.test(expr) && !/\s{2,}/.test(expr)) {
        return { expressionAnswer: expr };
      }
    }
  }

  // ── Kunne ikke parse ──
  return null;
}

// ── Prosessering ───────────────────────────────────────────────────────

function shouldSkipExercise(exerciseNumber: string | undefined): boolean {
  if (!exerciseNumber) return false;
  const firstChar = exerciseNumber.charAt(0).toUpperCase();
  return SKIP_NUMBER_PREFIXES.includes(firstChar);
}

function processSubTask(
  subTask: SubTask,
  exerciseNumber: string | undefined,
  file: string
): boolean {
  stats.subtasksTotal++;

  // Skip if already has answer fields
  if (
    subTask.answer !== undefined ||
    subTask.expressionAnswer !== undefined ||
    subTask.multipleChoiceOptions !== undefined
  ) {
    stats.subtasksSkippedExisting++;
    return false;
  }

  // Skip if exercise number starts with F/D/S
  if (shouldSkipExercise(exerciseNumber)) {
    stats.subtasksSkippedNumber++;
    return false;
  }

  // Skip if no solution
  if (!subTask.solution) {
    stats.subtasksSkippedNoSolution++;
    return false;
  }

  const result = extractAnswer(subTask.solution);

  if (result === null) {
    // Sjekk om det er ren tekst (forventet skip)
    if (isTextOnlySolution(subTask.solution) || isComplexSolution(subTask.solution)) {
      stats.subtasksSkippedTextOnly++;
    } else {
      stats.couldNotParse++;
      unparseable.push({
        file,
        exercise: exerciseNumber || "?",
        label: subTask.label,
        solution: subTask.solution.substring(0, 120),
      });
    }
    return false;
  }

  if ("answer" in result) {
    subTask.answer = result.answer;
    stats.answersAdded++;
    if (VERBOSE) {
      console.log(
        `  ${file} | ${exerciseNumber}${subTask.label}: answer=${result.answer}`
      );
    }
  } else {
    subTask.expressionAnswer = result.expressionAnswer;
    stats.expressionAnswersAdded++;
    if (VERBOSE) {
      console.log(
        `  ${file} | ${exerciseNumber}${subTask.label}: expr="${result.expressionAnswer}"`
      );
    }
  }

  return true;
}

function processExercise(
  exercise: Exercise,
  file: string
): boolean {
  if (!exercise.subTasks || exercise.subTasks.length === 0) return false;

  let modified = false;
  for (const subTask of exercise.subTasks) {
    if (processSubTask(subTask, exercise.number, file)) {
      modified = true;
    }
  }
  return modified;
}

function processContentBlocks(
  blocks: ContentBlock[],
  file: string
): boolean {
  let modified = false;
  for (const block of blocks) {
    if (block.type === "exercise" && block.exercise) {
      if (processExercise(block.exercise, file)) {
        modified = true;
      }
    }
    if (block.type === "collapsible" && block.content) {
      if (processContentBlocks(block.content as ContentBlock[], file)) {
        modified = true;
      }
    }
  }
  return modified;
}

function processFile(filePath: string): boolean {
  const fileName = path.basename(filePath);
  const raw = fs.readFileSync(filePath, "utf-8");
  const chapter: Chapter = JSON.parse(raw);

  stats.filesProcessed++;

  const modified = processContentBlocks(chapter.content, fileName);

  if (modified) {
    stats.filesModified++;
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, JSON.stringify(chapter), "utf-8");
    }
  }

  return modified;
}

// ── Hovedkjøring ───────────────────────────────────────────────────────

function main() {
  console.log(`\n${"=".repeat(60)}`);
  console.log(
    `  add-answers-to-math.ts ${DRY_RUN ? "(DRY RUN)" : "(LIVE)"}`
  );
  console.log(`${"=".repeat(60)}\n`);

  // Finn alle relevante JSON-filer
  const allFiles = fs.readdirSync(CHAPTERS_DIR);
  const mathFiles = allFiles
    .filter((f) => /^(8|9|10)-\d+-\d+\.json$/.test(f))
    .sort((a, b) => {
      // Naturlig sortering: 8-1-1 < 8-1-2 < 8-2-1 < 9-1-1 < 10-1-1
      const partsA = a.replace(".json", "").split("-").map(Number);
      const partsB = b.replace(".json", "").split("-").map(Number);
      for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
        if ((partsA[i] || 0) !== (partsB[i] || 0))
          return (partsA[i] || 0) - (partsB[i] || 0);
      }
      return 0;
    });

  console.log(`Fant ${mathFiles.length} kapittelfiler.\n`);

  for (const file of mathFiles) {
    processFile(path.join(CHAPTERS_DIR, file));
  }

  // ── Rapport ──

  console.log(`\n${"─".repeat(60)}`);
  console.log("  RAPPORT");
  console.log(`${"─".repeat(60)}`);
  console.log(`  Filer prosessert:          ${stats.filesProcessed}`);
  console.log(`  Filer endret:              ${stats.filesModified}`);
  console.log(`  Deloppgaver totalt:        ${stats.subtasksTotal}`);
  console.log(`  ├─ Hadde allerede svar:    ${stats.subtasksSkippedExisting}`);
  console.log(`  ├─ Hoppet over (F/D/S):    ${stats.subtasksSkippedNumber}`);
  console.log(`  ├─ Hoppet over (tekst):    ${stats.subtasksSkippedTextOnly}`);
  console.log(`  ├─ Uten solution-felt:     ${stats.subtasksSkippedNoSolution}`);
  console.log(`  ├─ answer lagt til:        ${stats.answersAdded}`);
  console.log(`  ├─ expressionAnswer lagt til: ${stats.expressionAnswersAdded}`);
  console.log(`  └─ Kunne ikke parses:      ${stats.couldNotParse}`);
  console.log(`${"─".repeat(60)}`);

  if (unparseable.length > 0) {
    console.log(`\n  KUNNE IKKE PARSES (${unparseable.length} stk):`);
    console.log(`${"─".repeat(60)}`);
    for (const u of unparseable.slice(0, 50)) {
      console.log(`  ${u.file} | oppg ${u.exercise}${u.label}`);
      console.log(`    "${u.solution}"`);
    }
    if (unparseable.length > 50) {
      console.log(`  ... og ${unparseable.length - 50} til`);
    }
  }

  if (DRY_RUN) {
    console.log(`\n  ⚠  DRY RUN — ingen filer ble endret.\n`);
  } else {
    console.log(
      `\n  ✓ Ferdig. ${stats.filesModified} filer oppdatert.\n`
    );
  }
}

main();
