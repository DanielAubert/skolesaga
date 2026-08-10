// sjekk-tvilling.mjs — finner TVILLINGDISTRAKTORER i quizbankene.
//
// En tvilling er to alternativer i samme spørsmål som sier det SAMME, der det
// ene som regel er en avkortet utgave av det andre:
//     «Cirka 24 minutter»
//     «Cirka 24 minutter, tilsvarende den minste av de tre delvektene»
// Begge må være gale (bare ett alternativ kan være riktig), så en student som
// ser dubletten kan stryke begge. Spørsmålet er i praksis TOVALG: gjetteren går
// fra 25 % til 50 %. Er tvillingen derimot fasiten selv, er spørsmålet ødelagt.
//
// Kjør:  npx tsx scripts/hoyskolebok/sjekk-tvilling.mjs                 # alle
//        npx tsx scripts/hoyskolebok/sjekk-tvilling.mjs econ1210 --vis  # med parene
//        npx tsx scripts/hoyskolebok/sjekk-tvilling.mjs --streng        # exit 1 ved funn
//
// ── HVORFOR TO ENKLERE FORSØK IKKE HOLDT (målt 10. august 2026) ────────────
// 1. ORDOVERLAPP alene overtalte grovt (8 % av katalogen). Den kan ikke skille
//    «etterspurt mengde når PRISEN er null» fra «PRISEN der etterspurt mengde
//    blir null» — samme ord, motsatt betydning. Den slapp også «Cirka 24
//    minutter» mot «Cirka 96 minutter» gjennom med 100 % overlapp.
// 2. REN PREFIKSTEST var presis, men fanget bare 2 av 4 kjente tvillinger
//    (2 % av katalogen). «Smitte via insekter» mot «Smitte som spres av
//    insekter som mygg og flått» er en ekte tvilling uten å være et prefiks.
//
// Verktøyet bruker derfor tre skillekriterier i tillegg til innholdsdekning:
//    · TALL må stemme       — ulike tall betyr ulike påstander
//    · REKKEFØLGE bevares   — felles ord må komme i samme orden (fanger «snudd»)
//    · NEKTELSE må stemme   — «ikke/aldri/uten» på én side gjør dem ulike
// ── HVA VERKTØYET IKKE FINNER (målt i felt 10. august 2026) ───────────────
// En agent som ryddet historie/rettslære/norsk fant ~60 ekte tvillinger per fem
// filer som dette skriptet slipper gjennom. Tre klasser, alle utenfor rekkevidde
// for leksikalsk sammenligning:
//
//   1. ETT ORD BYTTET:  «Den drev handel …» / «Den bygde handel …»
//      Et bytte er per definisjon ikke en avkorting, og regelen som avviser
//      bytter er den samme som holder falske positive ute. Kan ikke løsnes uten
//      å slippe inn «under» mot «på».
//   2. SYNONYMER:  «Norden» / «de nordiske landene»
//      Ingen felles ord i det hele tatt. Krever betydningsforståelse.
//   3. KORTE PAR:  «21 virkedager» / «21 virkedager (om lag fire uker)»
//      Under minstekravet på 3 tokens, og fanges dessuten av mengdevakten
//      («fire» er et nytt tallord). Begge grensene er der for å holde
//      falske positive ute.
//
// Verktøyet er altså et GULV, ikke en fasit: det du får er ekte, men det finnes
// mer. Bruk `--vis` og les — en agent som leser finner omtrent like mange til.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const DATA = path.join(REPO, 'src/lib/data');
const argv = process.argv.slice(2);
const streng = argv.includes('--streng');
const vis = argv.includes('--vis');
const emne = argv.find((a) => !a.startsWith('--'));

// ⚠ IKKE FILTRER BORT KORTE ORD, OG IKKE STRIPP OPERATORER.
// Første utkast gjorde begge deler, og meldte 4 840 «sikre» tvillinger der de
// ti verste filene var mattebøker — alle falske. Grunnen: filteret kastet
// nøyaktig de tegnene som BÆRER forskjellen, og beholdt likheten.
//     «$\operatorname{rang}[A|b] = \operatorname{rang}A$»
//     «$\operatorname{rang}[A|b] > \operatorname{rang}A$»   ← «=» mot «>» strippet
//     «... bare nuller UNDER hoveddiagonalen» / «... bare nuller PÅ ...»
//                                              ← «på» er 2 bokstaver, filtrert bort
//     «To frie variabler» / «Fire frie variabler»  ← «To» filtrert bort
// Alle tokens beholdes nå, operatorer inkludert.
const OPS = ['=', '≠', '>', '<', '≥', '≤', '≈', '+', '-', '·', '/'];
const tokens = (s) => String(s).toLowerCase()
  .replace(/\\operatorname|\\mathbf|\\mid|\\cdot|[${}\\]/g, ' ')
  .replace(/([=≠><≥≤≈+·])/g, ' $1 ')
  .replace(/[^a-zæøå0-9=≠><≥≤≈+·\- ]/g, ' ')
  .replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);

// Tokens som FLIPPER betydning. Er multimengden av dem ulik, er påstandene
// ulike — uansett hvor mye annet som er felles.
const TALLORD = ['null','en','ett','to','tre','fire','fem','seks','sju','syv','åtte','ni','ti',
  'første','andre','tredje','fjerde','femte','halv','dobbel','alle','ingen'];
const RETNING = ['på','under','over','i','mot','fra','til','uten','med','ved','av','før','etter',
  'innenfor','utenfor','opp','ned','økt','økte','redusert','synker','stiger','høy','høyere','lav','lavere'];
const NEKTORD = ['ikke','aldri','uten','ingen','verken','hverken','sjelden','alltid'];
// ⚠ SKILL MELLOM ERSTATTET OG TILFØYD.
// Et forsøk som krevde IDENTISKE diskriminanter avviste alle ekte tvillinger:
// «Cirka 24 minutter» mot «Cirka 24 minutter, tilsvarende den minste av de TRE
// delvektene» falt fordi den lange LEGGER TIL et tallord som aldri erstattet
// noe. Det er tilføyelse, ikke bytte.
//
// Nektelser og operatorer må derimot være identiske: å legge til «ikke» er ikke
// en utdypning, det snur påstanden.
const HARD = new Set([...NEKTORD, ...OPS]);              // må være LIKE
const MYK = new Set([...TALLORD, ...RETNING]);           // den kortes må gjenfinnes
const hardeSett = (t) => t.filter((w) => HARD.has(w)).sort().join('|');
const mykeSett = (t) => t.filter((w) => MYK.has(w) || /^\d+(?:[.,]\d+)?$/.test(w)).sort();
const inneholder = (liten, stor) => {
  const rest = [...stor];
  return liten.every((w) => { const k = rest.indexOf(w); if (k < 0) return false; rest.splice(k, 1); return true; });
};

// Lengste felles delsekvens — måler at ordene kommer i SAMME REKKEFØLGE, ikke
// bare at de finnes. Det er dette som skiller en avkortet tvilling fra en
// setning der de samme leddene er byttet om.
function lcs(a, b) {
  const m = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      m[i][j] = a[i - 1] === b[j - 1] ? m[i - 1][j - 1] + 1 : Math.max(m[i - 1][j], m[i][j - 1]);
  return m[a.length][b.length];
}

// ⚠ DETTE ER ET PROSAVERKTØY. FORMLER, KODE OG LITERALER HOPPES OVER.
//
// Ordanalyse bryter sammen på notasjon, og gjør det STILLE — den finner likhet
// der det er forskjell. To målte runder viste det:
//   · stk1100: 134 «sikre», 83 med fasiten involvert — alle falske.
//     «$P(A \cap B)/P(B)$» mot «$P(A)\cdot P(B)$» er to helt ulike formler, men
//     strippet for $, \cap og \cdot blir de «p a b p b» mot «p a p b», og den
//     korte er en delsekvens av den lange.
//   · in1900: «`[0, 1, 2, 3]`» mot «`[0, 1, 2, 3, 4]`». Den korte ER en
//     delsekvens — men det betyr ULIK VERDI, ikke samme påstand kortere sagt.
//
// Meningen ligger i symbolene, ikke i ordene rundt dem. Et verktøy som ikke kan
// bedømme notasjon skal SI det, ikke gjette. Par der minst ett alternativ ikke
// er prosa, telles som «ikke vurdert» og rapporteres for seg.
const NOTASJON = /[$\\`]|^\s*[[{(]/;
// Kompleksitetsnotasjon har verken $ eller backtick, men er notasjon: «O(log n)»
// mot «O(n log n)» er to ULIKE kompleksiteter, ikke to formuleringer av samme.
// Funnet i `it` av en agent som prøvde å bryte paret og endte med å lage en
// stubbe av `O(n)` — å røre notasjonen mer enn det endrer faglig innhold.
const KOMPLEKSITET = /\b[OΘΩo]\s*\([^)]*\)/;
const erProsa = (s) => {
  const t = String(s).trim();
  if (!t) return false;
  if (NOTASJON.test(t)) return false;               // formel, kode eller literal
  if (KOMPLEKSITET.test(t)) return false;           // O(n), Θ(n log n) …
  const bokstaver = (t.match(/[a-zæøåA-ZÆØÅ]/g) ?? []).length;
  return bokstaver / t.length >= 0.6;               // ellers er det tall/tegn, ikke språk
};

// ⚠ OPPLISTINGER ER IKKE TVILLINGER — ET LEDD TIL ER EN ANNEN PÅSTAND.
// Funnet i stv1400: fasit «Norge, Island og Liechtenstein» mot distraktor
// «Norge, Island, Sveits og Liechtenstein». Den korte ER en delsekvens av den
// lange, men Sveits er den klassiske EFTA-fella — to ulike påstander, ikke to
// formuleringer av samme. Samme feil som kodeliteralene («[0,1,2,3]» mot
// «[0,1,2,3,4]»), bare i prosaform.
//
// En opplisting er en rekke korte ledd skilt av komma/«og», uten verb. Er BEGGE
// alternativene opplistinger og antall ledd er ulikt, er de ikke tvillinger.
const LEDD = /,\s*|\s+og\s+/;
const erOpplisting = (s) => {
  const t = String(s).trim();
  if (!/,|\sog\s/.test(t)) return false;
  const ledd = t.split(LEDD).filter(Boolean);
  return ledd.length >= 2 && ledd.every((x) => x.trim().split(/\s+/).length <= 3);
};

// Returnerer null, 'sikker', 'mulig' eller 'matte' (ikke vurdert).
//
// SIKKER krever at det korte alternativet er en FULLSTENDIG delsekvens av det
// lange — hvert eneste token gjenfinnes, i samme rekkefølge. Da har det lange
// bare LAGT TIL stoff. Mangler ett token, er noe BYTTET UT, og et bytte er
// nettopp det som skiller to påstander fra hverandre.
//
// MULIG tillater litt omskriving, men krever at diskriminantene er identiske og
// at lengdeforskjellen er reell — ellers slipper ombyttinger som
// «rad i i A mot kolonne j i B» / «kolonne i i A mot rad j i B» gjennom.
function tvilling(x, y) {
  if (!erProsa(x) || !erProsa(y)) return 'matte';
  if (erOpplisting(x) && erOpplisting(y)
      && String(x).split(LEDD).filter(Boolean).length !== String(y).split(LEDD).filter(Boolean).length)
    return null;
  const a = tokens(x), b = tokens(y);
  const [kort, lang] = a.length <= b.length ? [a, b] : [b, a];
  if (kort.length < 3) return null;                       // for kort til å avgjøre
  if (lang.length <= kort.length) return null;            // ingen avkorting → ikke tvillingmønsteret
  if (hardeSett(a) !== hardeSett(b)) return null;         // nektelse/operator byttet → ulik påstand
  // ⚠ KORTE MENGDEUTTRYKK: et tallord TIL endrer verdien, ikke fylden.
  // Funnet i stv1200: fasit «En halv enhet tekstil» mot «En OG EN halv enhet
  // tekstil» — 0,5 mot 1,5. Den korte er en delsekvens, men mengden er en annen.
  // Regelen gjelder bare når BEGGE er korte (≤6 tokens); ellers ville den avvist
  // ekte tvillinger der den lange tilfeldigvis nevner et tall i en bisetning
  // («Cirka 24 minutter» mot «… de TRE delvektene»).
  if (kort.length <= 6 && lang.length <= 6) {
    const t = (arr) => arr.filter((w) => TALLORD.includes(w) || /^\d/.test(w)).sort().join('|');
    if (t(kort) && t(kort) !== t(lang)) return null;
  }
  if (!inneholder(mykeSett(kort), mykeSett(lang))) return null;  // et tall-/retningsord er ERSTATTET

  const felles = lcs(kort, lang);
  if (felles === kort.length) return 'sikker';
  if (felles / kort.length >= 0.9 && lang.length - kort.length >= 3) return 'mulig';
  return null;
}

const filer = emne ? [`quiz-data-${emne}.ts`]
  : fs.readdirSync(DATA).filter((f) => /^quiz-data-.+\.ts$/.test(f));

let tot = 0, sikre = 0, mulige = 0, iFasit = 0, ikkeVurdert = 0;
const perFil = {};
for (const f of filer) {
  const full = path.join(DATA, f);
  if (!fs.existsSync(full)) { console.log(`(hopper over ${f} — finnes ikke)`); continue; }
  const mod = await import(pathToFileURL(full).href);
  const data = mod.default ?? mod;
  const navn = f.replace(/^quiz-data-|\.ts$/g, '');
  const funn = [];
  for (const [kap, qs] of Object.entries(data)) {
    if (!Array.isArray(qs)) continue;
    qs.forEach((q, i) => {
      const o = q?.options;
      if (!Array.isArray(o) || o.length !== 4) return;
      tot++;
      for (let x = 0; x < 4; x++) for (let y = x + 1; y < 4; y++) {
        const t = tvilling(o[x], o[y]);
        if (!t) continue;
        if (t === 'matte') { ikkeVurdert++; continue; }
        const fasitInvolvert = x === 0 || y === 0;
        funn.push({ kap, i, x, y, t, fasitInvolvert, a: o[x], b: o[y], q: q.question });
        if (t === 'sikker') sikre++; else mulige++;
        if (fasitInvolvert) iFasit++;
      }
    });
  }
  if (funn.length) perFil[navn] = funn;
}

const rader = Object.entries(perFil).sort((a, b) => b[1].length - a[1].length);
console.log(`\n${tot} firevalgsspørsmål · ${sikre} sikre tvillingpar · ${mulige} mulige`
  + ` · ${iFasit} der FASITEN er den ene halvdelen`);
console.log(`${ikkeVurdert} par ikke vurdert (formel, kode eller literal i minst ett alternativ)`
  + ` — dette er et prosaverktøy.`);
if (!rader.length) { console.log('ingen tvillinger funnet'); process.exit(0); }

console.log('\nfil                     sikre  mulige  m/fasit');
for (const [navn, funn] of rader.slice(0, vis ? rader.length : 15)) {
  const s = funn.filter((x) => x.t === 'sikker').length;
  const m = funn.length - s;
  const fa = funn.filter((x) => x.fasitInvolvert).length;
  console.log(`  ${navn.padEnd(22)} ${String(s).padStart(4)}  ${String(m).padStart(6)}  ${String(fa).padStart(7)}`);
}

if (vis) {
  for (const [navn, funn] of rader) {
    console.log(`\n═══════ ${navn}`);
    for (const f of funn) {
      console.log(`\n[${f.kap} #${f.i + 1}] ${f.t.toUpperCase()}`
        + (f.fasitInvolvert ? '  ⚠ FASITEN ER DEN ENE' : ''));
      console.log(`  Q: ${f.q.slice(0, 95)}`);
      console.log(`  [${f.x}]${f.x === 0 ? '←FASIT' : '      '} ${f.a}`);
      console.log(`  [${f.y}]${f.y === 0 ? '←FASIT' : '      '} ${f.b}`);
    }
  }
} else if (rader.length > 15) {
  console.log(`\n… og ${rader.length - 15} filer til. Kjør med --vis for alle, eller oppgi emne.`);
}

// ⚠ FASIT-TILFELLENE FØRST. Er fasiten den ene halvdelen av et tvillingpar, er
// spørsmålet ikke bare lettere — det har to alternativer som begge kan forsvares
// som riktige. Det er en annen og alvorligere feil enn to gale tvillinger.
if (iFasit) console.log(`\n⚠ ${iFasit} par involverer FASITEN — de bør rettes først.`);
process.exit(streng && (sikre || iFasit) ? 1 : 0);
