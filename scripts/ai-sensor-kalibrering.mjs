/**
 * KI-sensor kalibreringsdemo (studentpanel-krav, toppjegeren):
 * «Vis at sensoren scorer bokas B-besvarelse til B og C-besvarelsen til C —
 * én slik demo, og jeg kjøper klipp.»
 *
 * Kjører bokas EGNE modellbesvarelser (A/B/C-nivå fra modellbesvarelses-
 * kapitlene) gjennom sensoren og sammenligner dommen med fasit-nivået.
 * Kjører hver besvarelse TO ganger for å måle konsistens (temperature 0.2
 * i API-ruta skal gi samme karakter begge ganger).
 *
 * NB: Gjør EKTE API-kall (via den lokale API-ruta) og koster tokens —
 * kjør kun med eksplisitt samtykke fra produkteier.
 *
 * Bruk:
 *   1. Start appen med sensoren på:
 *      AI_SENSOR_ENABLED=true NEXT_PUBLIC_AI_SENSOR_ENABLED=true PORT=3100 npm run dev
 *   2. Lag en testfil (JSON) med besvarelser:
 *      [{ "navn": "stv1100 Modell 1 A-besvarelse", "courseId": "stv1100",
 *         "chapterId": "stv1100-4-4", "question": "<oppgaveteksten>",
 *         "answer": "<besvarelsesteksten>", "forventet": "A" }, ...]
 *   3. BASE=http://localhost:3100 node scripts/ai-sensor-kalibrering.mjs testfil.json
 *
 * Output: tabell per besvarelse (forventet vs. faktisk × 2 kjøringer) +
 * samlet kalibrerings- og konsistens-score. Egner seg som grunnlag for en
 * publiserbar kalibreringsrapport (backlog: revisjonsrapporter per bok).
 */
import { readFileSync } from 'fs';

const BASE = process.env.BASE || 'http://localhost:3100';
const fil = process.argv[2];
if (!fil) {
  console.error('Bruk: BASE=http://localhost:3100 node scripts/ai-sensor-kalibrering.mjs <testfil.json>');
  process.exit(1);
}
const tester = JSON.parse(readFileSync(fil, 'utf8'));

async function vurder(t) {
  const res = await fetch(`${BASE}/api/ai-sensor`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      courseId: t.courseId,
      chapterId: t.chapterId,
      question: t.question,
      answer: t.answer,
      tier: 1,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data.verdict?.karakterBokstav || data.verdict?.karakter || '?';
}

let treff = 0;
let konsistente = 0;
console.log('\n===== KI-sensor kalibreringsdemo =====\n');
for (const t of tester) {
  try {
    const a = await vurder(t);
    const b = await vurder(t);
    const kalibrert = a === t.forventet;
    const konsistent = a === b;
    if (kalibrert) treff++;
    if (konsistent) konsistente++;
    console.log(
      `${kalibrert ? '✅' : '❌'} ${t.navn}: forventet ${t.forventet}, fikk ${a}` +
        (konsistent ? '' : ` ⚠️ INKONSISTENT (kjøring 2: ${b})`)
    );
  } catch (e) {
    console.log(`💥 ${t.navn}: ${String(e).slice(0, 120)}`);
  }
}
console.log(
  `\nKalibrering: ${treff}/${tester.length} traff forventet nivå · Konsistens: ${konsistente}/${tester.length} ga samme dom to ganger\n`
);
process.exit(treff === tester.length && konsistente === tester.length ? 0 : 1);
