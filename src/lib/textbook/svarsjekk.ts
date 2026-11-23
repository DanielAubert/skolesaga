/**
 * Svarsjekk for tallsvar i lærebokoppgaver (matematikk) — ETT hjem.
 *
 * Brukes av oppgavesiden (`[courseId]/[chapterId]/oppgave/[exerciseId]/exercise-trainer.tsx`), som er stedet
 * eleven svarer på kapitteloppgaver («Løs oppgaven»). Endres sjekken, endres den her.
 * Tester: `npm run test:svarsjekk`.
 *
 * Godtar et matematisk likt svar uansett skrivemåte: desimalkomma og -punktum, brøk (`2/5`, `\frac{2}{5}`,
 * blandet tall `1 1/2`), prosent (`40 %`, `40%`), mellomrom som tusenskille (`12 500`), standardform
 * (`4,2 · 10^{-4}`), unicode-minus, en innledende «x =» og en enhet etter tallet («9 cm», «250 kr», «45°»).
 *
 * Avrunding vurderes etter det oppgaven ber om — aldri krav om ti desimaler, aldri slingringsmonn som slipper
 * gjennom et annet tall:
 *  - deloppgaven ber om n desimaler / nærmeste hele → svaret skal ha høyst n desimaler og være lik fasiten;
 *  - løsningen viser fasiten som avrundet («≈ 0,300» rett foran fasittallet) → et mer presist svar som avrundes
 *    til fasiten med den presisjonen løsningen viser;
 *  - fasiten er et rått regnet tall (minst fire desimaler eller fem gjeldende sifre, f.eks. 0,5448338644, eller en
 *    brøk som 2/13) → elevens egen riktige avrunding med minst to gjeldende sifre (høyst 1 % avvik, høyst 3 % med
 *    minst to desimaler);
 *  - ellers (fasit som 100,4, 0,25, 199) → bare eksakt verdi.
 * Når oppgaven ER en omgjøring («Skriv 7/8 som desimaltall», «Skriv 0,00042 i standardform»), godtas bare svar i den
 * formen oppgaven ber om — ellers ville avskrift av oppgaven bli godkjent.
 *
 * Daniel 23.11.2026: «Undersøk også aksentene og slikt og rett kontrolleren.» (runde 2 av klassekapitlene).
 */

export type Svarstatus = 'correct' | 'equivalent' | 'incorrect';
export type Svarform = 'desimal' | 'brok' | 'prosent' | 'standardform';

export interface TolketTall {
  verdi: number;
  /** eleven skrev %-tegn (eller «prosent») */
  prosent: boolean;
  /** eleven skrev brøk eller blandet tall */
  brok: boolean;
  /** eleven skrev standardform (a · 10^n) */
  standardform: boolean;
  /** antall desimaler eleven skrev (0 for heltall og brøk; negativt for standardform rundet til tiere o.l.) */
  desimaler: number;
  /** antall gjeldende sifre eleven skrev (Infinity for brøk) */
  sifre: number;
  /** brøken er forkortet så langt det går (bare for brok) */
  forkortet?: boolean;
}

const EPS = 1e-12;

/** Like tall: heltall eksakt, ellers relativt avvik ≤ 1e-12 (flyttallsstøy, ikke slingringsmonn). */
function samme(x: number, y: number): boolean {
  if (Number.isInteger(x) && Number.isInteger(y)) return x === y;
  return Math.abs(x - y) <= EPS * Math.max(Math.abs(x), Math.abs(y)) + 1e-300;
}

function gjeldendeSifre(siffer: string): number {
  const s = siffer.replace(/^[+-]/, '').replace(/[.,]/, '');
  const utenLedende = s.replace(/^0+/, '');
  return Math.max(utenLedende.length, 1);
}

function lesDesimaltall(s: string): { verdi: number; desimaler: number; sifre: number } | null {
  if (!/^[+-]?(\d+([.,]\d*)?|[.,]\d+)$/.test(s)) return null;
  const t = s.replace(',', '.');
  const verdi = Number(t);
  if (!Number.isFinite(verdi)) return null;
  const i = t.indexOf('.');
  const desimaler = i < 0 ? 0 : t.length - i - 1;
  // gjeldende sifre: heltall uten desimaler teller ikke avsluttende nuller (1200 → 2)
  const sifre = i < 0 ? gjeldendeSifre(t.replace(/0+$/, '') || '0') : gjeldendeSifre(t);
  return { verdi, desimaler, sifre };
}

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));

/** Enhet eller merknad etter tallet: «9 cm», «250 kr», «45°», «3 m^2», «12 m²», «5 km/t», «2 timer». */
const ENHET = /\s*(?:°|(?:[A-Za-zÆØÅæøåµΩ]{1,12}\.?(?:\s*(?:\^\s*\{?\s*[23]\s*\}?|²|³))?)(?:\s*\/\s*[A-Za-zÆØÅæøå]{1,8}\.?)?)\s*$/;

function tolkKjerne(s0: string, prosent: boolean): TolketTall | null {
  let s = s0.trim();
  if (!s) return null;

  // Blandet tall: «1 1/2», «-2 3/4»
  const blandet = s.match(/^([+-]?)(\d+)\s+(\d+)\s*\/\s*(\d+)$/);
  if (blandet) {
    const [, fortegn, hel, teller, nevner] = blandet;
    if (Number(nevner) === 0) return null;
    const v = Number(hel) + Number(teller) / Number(nevner);
    return { verdi: fortegn === '-' ? -v : v, prosent, brok: true, standardform: false, desimaler: 0, sifre: Infinity };
  }

  // Brøk: «2/5», «2 / 5», «0,5/2»
  const brok = s.match(/^([+-]?[\d.,]+)\s*\/\s*([+-]?[\d.,]+)$/);
  if (brok) {
    const t = lesDesimaltall(brok[1]);
    const n = lesDesimaltall(brok[2]);
    if (!t || !n || n.verdi === 0) return null;
    const heltall = Number.isInteger(t.verdi) && Number.isInteger(n.verdi);
    return {
      verdi: t.verdi / n.verdi, prosent, brok: true, standardform: false, desimaler: 0, sifre: Infinity,
      forkortet: heltall ? gcd(t.verdi, n.verdi) === 1 : false,
    };
  }

  // Standardform: «6,674 · 10^-11», «6,674*10^{-11}», «4,2 \cdot 10^{9}», «6,674e-11», «3,6×10^14», «4.2 * 10^(-4)»
  const std = s.match(/^([+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+))\s*(?:(?:\*|·|⋅|×|x|\\cdot|\\times)\s*10\s*\^\s*[{(]?\s*([+-]?\d+)\s*[})]?|[eE]([+-]?\d+))$/);
  if (std) {
    const m = lesDesimaltall(std[1]);
    if (!m) return null;
    const e = Number(std[2] ?? std[3]);
    const verdi = Number(`${m.verdi}e${e}`);
    if (!Number.isFinite(verdi)) return null;
    return { verdi, prosent, brok: false, standardform: true, desimaler: m.desimaler - e, sifre: gjeldendeSifre(std[1]) };
  }

  // Tusenskille med mellomrom: «12 500», «1 000 000,5»
  if (/^[+-]?\d{1,3}( \d{3})+([.,]\d+)?$/.test(s)) s = s.replace(/ /g, '');
  if (/\s/.test(s)) return null;

  const d = lesDesimaltall(s);
  if (!d) return null;
  return { verdi: d.verdi, prosent, brok: false, standardform: false, desimaler: d.desimaler, sifre: d.sifre };
}

/** Tolker elevens svar som et tall. Gir null når svaret ikke er et tall (f.eks. et algebraisk uttrykk). */
export function tolkTall(raw: string): TolketTall | null {
  let s = String(raw ?? '')
    .replace(/[    ]/g, ' ')
    .replace(/[−–—]/g, '-')
    .replace(/\$/g, '')
    .replace(/\{,\}/g, ',')
    .replace(/\\[,;!: ]/g, ' ')
    .trim();
  if (!s) return null;

  // «x = 0,4», «P(rød) = 2/5»: ett likhetstegn, og venstresiden er ett symbol (ev. med parentes) — ikke «x = 7, x = -3»
  if (s.includes('=')) {
    const deler = s.split('=');
    if (deler.length !== 2) return null;
    if (!/^\s*[A-Za-zÆØÅæøå][A-Za-zÆØÅæøå0-9_]*\s*(\([^()=]*\))?\s*$/.test(deler[0])) return null;
    s = deler[1].trim();
  }

  // «≈ 0,54», «ca. 250 kr», «kr 250»
  s = s.replace(/^(≈|~|ca\.?|cirka|omtrent)\s*/i, '').replace(/^kr\.?\s+/i, '').trim();

  let prosent = false;
  const utenProsent = s.replace(/\s*(\\?%|prosent)\s*$/i, '');
  if (utenProsent !== s) {
    prosent = true;
    s = utenProsent.trim();
  }

  // LaTeX-brøk: \frac{2}{5}, \dfrac{2}{5}, \tfrac{2}{5}, også med fortegn foran
  s = s.replace(/\\[dt]?frac\s*\{\s*([^{}]+?)\s*\}\s*\{\s*([^{}]+?)\s*\}/g, '$1/$2').trim();

  const t = tolkKjerne(s, prosent);
  if (t || prosent) return t;
  // Enhet etter tallet («9 cm», «250 kr», «45°») — bare når det som står foran, er et tall
  const utenEnhet = s.replace(ENHET, '');
  const enhet = s.slice(utenEnhet.length).trim();
  // én bokstav er en variabel («2x»), ikke en enhet — unntatt m, g, l, s, t, h
  if (/^[A-Za-z]$/.test(enhet) && !/^[mglsth]$/.test(enhet)) return null;
  if (utenEnhet !== s && /\d$/.test(utenEnhet)) return tolkKjerne(utenEnhet, false);
  return null;
}

/** Antall desimaler i fasittallet slik det er lagret (0,03125 → 5; 0,300 lagres som 0,3 → 1). */
export function fasitDesimaler(a: number): number {
  if (!Number.isFinite(a) || Number.isInteger(a)) return 0;
  let s = String(Math.abs(a));
  if (s.includes('e')) s = Math.abs(a).toFixed(20).replace(/0+$/, '');
  const i = s.indexOf('.');
  return i < 0 ? 0 : s.length - i - 1;
}

function fasitSifre(a: number): number {
  if (!Number.isFinite(a) || a === 0) return 1;
  const d = fasitDesimaler(a);
  return gjeldendeSifre(Math.abs(a).toFixed(Math.min(d, 20)));
}

const TALLORD: Record<string, number> = {
  null: 0, '0': 0, én: 1, éin: 1, en: 1, ein: 1, eitt: 1, ett: 1, '1': 1, to: 2, '2': 2, tre: 3, '3': 3, fire: 4, '4': 4,
  fem: 5, '5': 5, seks: 6, '6': 6, sju: 7, syv: 7, '7': 7, åtte: 8, '8': 8, ni: 9, '9': 9,
};

/**
 * Hvor mange desimaler oppgaven ber om, eller null når den ikke sier noe.
 * «to desimaler», «1 desimal», «nærmeste hele», «hele kroner», «nærmeste tidel/tiendedel/hundredel».
 */
export function bedtOmDesimaler(oppgavetekst: string): number | null {
  const t = (oppgavetekst || '').toLowerCase();
  const m = t.match(/(?:^|[^\d,.])(null|én|éin|en|ein|eitt|ett|to|tre|fire|fem|seks|sju|syv|åtte|ni|\d+)\s+desimal(?!tal)/);
  if (m) return /^\d+$/.test(m[1]) ? Number(m[1]) : TALLORD[m[1]] ?? null;
  // «nærmeste hele/heltall», «hele kroner/prosent» — men ikke «det minste hele tallet» (oppgaver om heltall)
  if (/n[æa]rm[ae]ste\s+(hel|heil)|\bhei?le\s+(kron|prosent|meter|minutt|centimeter|liter|gram)/.test(t)) return 0;
  if (/n[æa]rm[ae]ste\s+(tidel|tiendedel|tidels)/.test(t)) return 1;
  if (/n[æa]rm[ae]ste\s+(hundredel|hundredels)/.test(t)) return 2;
  return null;
}

/**
 * Er oppgaven en omgjøring til en bestemt form («Skriv 7/8 som desimaltall», «Gjør om til prosent», «Skriv tallet
 * i standardform»)? Da er formen selve oppgaven, og svar i en annen form er ikke godkjent.
 */
export function kreverForm(oppgavetekst: string): Svarform | null {
  const t = (oppgavetekst || '').toLowerCase();
  const former: Svarform[] = [];
  const omgjoring = /\b(skriv|skriv om|gjør om|gjer om|gjør|gjer|omgjør|uttrykk|oppgi|gi)\b/.test(t);
  if (!omgjoring) return null;
  if (/\b(som|til|i|på)\s+(en\s+|ein\s+|ei\s+)?(forkortet\s+|forkorta\s+)?brøk/.test(t)) former.push('brok');
  if (/\b(som|til|i|på)\s+(et\s+|eit\s+)?desimalta(ll|l)\b/.test(t)) former.push('desimal');
  if (/\b(som|til|i)\s+prosent\b/.test(t)) former.push('prosent');
  // «standardform» om tall — ikke «skriv likningen/funksjonen på standardform» (r2-5-6: svaret er et tall d)
  const tilStandardform = /\b(i|på)\s+standardform/.test(t) && !/(likning|likninga|likningen|linja|linjen|planet|funksjon|polynom|uttrykk)[^.]{0,40}standardform/.test(t);
  if (tilStandardform) former.push('standardform');
  if (/\b(som|til)\s+(et\s+|eit\s+)?(vanlig|vanleg)\s+tal/.test(t)) former.push('desimal');
  // «Oppgi svaret som brøk» etter en regneoppgave er en formatønske, ikke en omgjøring: bare når teksten
  // begynner med «Skriv/Gjør om», eller målformen er standardform («… og gi svaret på standardform»)
  const ekteOmgjoring = /^\s*(skriv|gjør|gjer|omgjør|uttrykk)/.test(t) || tilStandardform;
  if (!ekteOmgjoring) return null;
  return former.length === 1 ? former[0] : null;
}

/** Oppgaven ber eksplisitt om brøk (som formatønske — «Oppgi svaret som brøk»). */
export function bedtOmBrok(oppgavetekst: string): boolean {
  return /\bbrøk\b/i.test(oppgavetekst || '');
}

function bedtOmForkortet(oppgavetekst: string): boolean {
  return /forkort|enkleste form|enklaste form|laveste form|lågaste form|så enkel som mulig|så enkelt som mulig/i.test(oppgavetekst || '');
}

/** Normaliserer LaTeX i en løsningstekst for tallsøk: «0{,}300» → «0,300», «\approx» → «≈», «\%» → «%». */
function normaliserLosning(l: string): string {
  return (l || '')
    .replace(/\{,\}/g, ',')
    .replace(/\\approx/g, '≈')
    .replace(/\\%/g, '%')
    .replace(/\\(?:cdot|times)/g, '·')
    .replace(/\\[,;!: ]|~/g, ' ')
    .replace(/[   ]/g, ' ')
    .replace(/\$/g, ' ')
    .replace(/[−–]/g, '-');
}

interface Forekomst { verdi: number; desimaler: number; foranAvrundet: boolean; etterProsent: boolean }

/** Alle tall i løsningsteksten med om de står rett etter «≈» og rett før «%». */
function tallILosning(losning: string): Forekomst[] {
  const s = normaliserLosning(losning);
  const ut: Forekomst[] = [];
  const re = /-?\d{1,3}(?: \d{3})+(?:[.,]\d+)?|-?\d+(?:[.,]\d+)?/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s))) {
    const tekst = m[0];
    const d = lesDesimaltall(tekst.replace(/ /g, ''));
    if (!d) continue;
    let verdi = d.verdi;
    let desimaler = d.desimaler;
    // standardform rett etter: «3,63 · 10^{14}»
    const etter = s.slice(m.index + tekst.length);
    const std = etter.match(/^\s*·\s*10\s*\^\s*\{?\s*(-?\d+)\s*\}?/);
    if (std) {
      verdi = Number(`${d.verdi}e${Number(std[1])}`);
      desimaler = d.desimaler - Number(std[1]);
    }
    const foran = s.slice(Math.max(0, m.index - 4), m.index);
    ut.push({
      verdi, desimaler,
      foranAvrundet: /≈\s*$/.test(foran),
      etterProsent: /^\s*%/.test(std ? etter.slice(std[0].length) : etter),
    });
  }
  return ut;
}

/**
 * Oppgaven ber om svaret i prosent (fasiten står da i prosentenheter, f.eks. 25 for 25 %): løsningen skriver
 * fasittallet med %-tegn, eller oppgaveteksten spør etter prosent.
 */
export function fasitIProsent(oppgavetekst: string, losning?: string, fasit?: number): boolean {
  if (fasit !== undefined && losning && tallILosning(losning).some((f) => f.etterProsent && samme(f.verdi, fasit))) return true;
  return /\b(i|som)\s+prosent\b|hvor mange prosent|kor mange prosent|hvor stor prosent|kor stor prosent|prosentvis|prosentpoeng|prosentdel/i.test(oppgavetekst || '');
}

/** Presisjonen løsningen viser for et avrundet fasittall («≈ 0,300» → 3), eller null når fasiten ikke er merket ≈. */
export function avrundetPresisjon(losning: string | undefined, fasit: number): number | null {
  if (!losning) return null;
  let best: number | null = null;
  for (const f of tallILosning(losning)) {
    if (f.foranAvrundet && samme(f.verdi, fasit)) best = Math.max(best ?? -Infinity, f.desimaler);
  }
  return best;
}

/** Er fasiten et rått regnet tall (eller en uendelig/lang brøk), slik at elevens egen avrunding er rimelig? */
function raattTall(a: number, kildePresisjon?: number): boolean {
  if (kildePresisjon !== undefined) return false;
  return fasitDesimaler(a) >= 4 || fasitSifre(a) >= 5;
}

interface Regler {
  bedtDesimaler: number | null;
  /** fasitens avrundingspresisjon fra løsningen («≈ 0,300» → 3) */
  avrundetDes: number | null;
  /** fasiten er rå (lang) — elevens egen avrunding godtas */
  raa: boolean;
}

/** Er elevverdien v lik nok fasitverdien a, etter reglene? */
export function likNok(v: number, a: number, elev: Pick<TolketTall, 'desimaler' | 'sifre' | 'brok'>, r: Regler): boolean {
  if (!Number.isFinite(v) || !Number.isFinite(a)) return false;
  if (samme(v, a)) return true;
  const avvik = Math.abs(v - a);

  // Oppgaven ber om avrunding til n desimaler: svaret skal være avrundet (høyst n desimaler) og lik fasiten —
  // ellers ville avskrift av tallet i en avrundingsoppgave («Avrund 3,47 til én desimal» → «3,47») bli godtatt
  if (r.bedtDesimaler !== null) return false;

  // Fasiten er avrundet i løsningen: et mer presist elevsvar som avrundes til fasiten
  // (en heltallsfasit med ett eller to sifre, «≈ 2», gir ikke ±0,5 i slingringsmonn)
  if (r.avrundetDes !== null && (r.avrundetDes >= 1 || fasitSifre(a) >= 3) && (elev.brok || elev.desimaler > r.avrundetDes)) {
    if (avvik <= 0.5 * Math.pow(10, -r.avrundetDes) * (1 - 1e-6)) return true;
  }

  // Rå fasit og brøksvar: brøken avrundet til fasitens desimaler er fasiten (1/6 for 0,1667)
  if (r.raa && elev.brok) {
    const d = Math.min(fasitDesimaler(a), 12);
    const f = Math.pow(10, d);
    if (samme(Math.sign(v) * Math.floor(Math.abs(v) * f + 0.5 + 1e-9) / f, a)) return true;
  }

  // Rå fasit: elevens egen riktige avrunding (halv opp) med minst to gjeldende sifre
  if (r.raa && !elev.brok && v !== 0 && elev.sifre >= 2) {
    const k = elev.desimaler;
    const f = Math.pow(10, k);
    const avrundet = (Math.sign(a) * Math.floor(Math.abs(a) * f + 0.5 + 1e-9)) / f;
    const rel = avvik / Math.abs(a);
    if (samme(v, avrundet) && (rel <= 0.01 + EPS || (k >= 2 && rel <= 0.03 + EPS))) return true;
  }
  return false;
}

/** Fasitlisten som tall, eller null hvis fasiten ikke er tallfasit (f.eks. et ord i språkoppgaver). */
export function fasitTall(answer: number | number[] | string | undefined): number[] | null {
  if (answer === undefined || answer === null) return null;
  const liste = Array.isArray(answer) ? answer : [answer];
  const ut: number[] = [];
  for (const a of liste) {
    if (typeof a === 'number') {
      ut.push(a);
      continue;
    }
    const t = tolkTall(String(a));
    if (!t) return null;
    // tekstfasit «20 %» betyr 0,2 (sammenligningen godtar da både «20 %», «20» og «0,2»)
    ut.push(t.prosent ? t.verdi / 100 : t.verdi);
  }
  return ut.length ? ut : null;
}

export interface Tallsvaroppgave {
  task: string;
  solution?: string;
  answer?: number | number[] | string;
  expressionAnswer?: string | string[];
  /** oppgaveteksten over deloppgavene (f.eks. «Hvor mange prosent er …»), når den finnes */
  kontekst?: string;
}

function elevForm(e: TolketTall): Svarform {
  if (e.prosent) return 'prosent';
  if (e.brok) return 'brok';
  if (e.standardform) return 'standardform';
  return 'desimal';
}

/**
 * Sjekker et tallsvar mot `answer`. Gir null når fasiten ikke er et tall (da bruker kalleren sin egen sjekk).
 * `eksakt: true` (autogodkjenning mens eleven skriver): bare eksakt like desimaltall, ingen toleranse, ingen brøk.
 */
export function sjekkTallsvar(oppgave: Tallsvaroppgave, raw: string, valg: { eksakt?: boolean } = {}): Svarstatus | null {
  const fasit = fasitTall(oppgave.answer);
  if (!fasit) return null;
  const elev = tolkTall(raw);
  if (!elev) return 'incorrect';
  const form = kreverForm(oppgave.task) ?? (/\b(skriv|gjør om|gjer om)\b/i.test(oppgave.task) ? null : kreverForm(oppgave.kontekst || ''));
  if (valg.eksakt) {
    if (elev.brok || elev.prosent || elev.standardform) return 'incorrect';
    if (form && form !== 'desimal') return 'incorrect';
    return fasit.some((a) => samme(elev.verdi, a)) ? 'correct' : 'incorrect';
  }
  if (form && form !== 'prosent' && elevForm(elev) !== form) return 'incorrect';
  if (form === 'prosent' && !elev.prosent && !fasitIProsent(oppgave.task, oppgave.solution, fasit[0])) return 'incorrect';
  if (elev.brok && elev.forkortet === false && bedtOmForkortet(`${oppgave.task}\n${oppgave.kontekst || ''}`)) return 'incorrect';
  return sammenlign(oppgave, fasit, elev) ? 'correct' : 'incorrect';
}

function sammenlign(oppgave: Tallsvaroppgave, fasit: number[], elev: TolketTall): boolean {
  const kilder = Array.isArray(oppgave.answer) ? oppgave.answer : [oppgave.answer];
  // Desimalkrav leses bare fra deloppgaven selv — et krav i oppgaveteksten over kan gjelde en annen deloppgave
  const bedtDesimaler = bedtOmDesimaler(oppgave.task);
  // Har fasitlista både presise og avrundede former (0,67 og 0,7), gjelder avrundingsreglene bare den mest
  // presise — ellers ville 0,737 bli godtatt fordi det avrundes til 0,7.
  const presisjon = fasit.map((a, i) => {
    const k = kilder[i];
    const t = typeof k === 'string' ? tolkTall(k) : null;
    return t && !t.brok ? t.desimaler : fasitDesimaler(a);
  });
  const mestPresis = presisjon.indexOf(Math.max(...presisjon));
  for (let i = 0; i < fasit.length; i++) {
    const a = fasit[i];
    const kilde = kilder[i];
    const kildeProsent = typeof kilde === 'string' && /%|prosent/i.test(kilde);
    // presisjonen til en tekstfasit i desimalenheter («20 %» → 2, «1,0 × 10^-3» → 4)
    // (en tekstfasit skrevet som brøk, «2/3», har ingen endelig presisjon — den behandles som et rått tall)
    const kt = typeof kilde === 'string' ? tolkTall(kilde) : null;
    const kp = kt && !kt.brok ? kt.desimaler : undefined;
    const kildePresisjon = kp === undefined ? undefined : kildeProsent ? kp + 2 : kp;
    // Prosentkrav: fra deloppgaven, fra «<fasit> %» i løsningen, eller fra oppgaveteksten over når fasiten ikke er en
    // andel (|a| ≥ 1) — ellers ville «… i prosent» over gjøre andelen 0,3292 om til 0,3292 %
    const iProsent = kildeProsent || fasitIProsent(oppgave.task, oppgave.solution, a)
      || (Math.abs(a) >= 1 && fasitIProsent(oppgave.kontekst || ''));
    const regler = (skala: number): Regler => {
      const avr = i === mestPresis ? avrundetPresisjon(oppgave.solution, a * skala) : null;
      return {
        bedtDesimaler,
        avrundetDes: avr ?? (kildePresisjon !== undefined && i === mestPresis && /≈|\\approx/.test(oppgave.solution || '') ? kildePresisjon - Math.round(Math.log10(skala)) : null),
        raa: i === mestPresis && raattTall(a * skala, kildePresisjon),
      };
    };
    if (kildeProsent) {
      // tekstfasit «20 %» (lagret som 0,2): «20 %», «20» og «0,2» er alle riktige
      if (likNok(elev.verdi, a * 100, elev, regler(100))) return true;
      if (!elev.prosent && likNok(elev.verdi, a, elev, regler(1))) return true;
      continue;
    }
    if (elev.prosent) {
      // «40 %» er 0,4; når fasiten står i prosentenheter (oppgaven spør etter prosent), står den som 40
      if (iProsent && likNok(elev.verdi, a, elev, regler(1))) return true;
      if (likNok(elev.verdi / 100, a, { ...elev, desimaler: elev.desimaler + 2 }, regler(1))) return true;
    } else if (likNok(elev.verdi, a, elev, regler(1))) {
      return true;
    }
  }
  return false;
}

/**
 * Sjekker et svar mot `expressionAnswer` når alle fasitformene er tall eller brøker (f.eks. ['3/10']).
 * Gir null når fasiten er algebraisk — da brukes validateExpressionAnswer.
 *  - lik verdi skrevet som brøk → correct (uforkortet brøk er incorrect når oppgaven ber om forkortet form)
 *  - omgjøringsoppgave («Skriv 0,375 som brøk»): bare svar i den formen
 *  - lik verdi som desimaltall/prosent → correct, men equivalent (godkjent, gult) når oppgaven ønsker brøk
 *  - riktig avrundet desimaltall av en brøk som ikke går opp → correct når oppgaven ikke ber om brøk
 */
export function sjekkBroksvar(oppgave: Tallsvaroppgave, raw: string, valg: { eksakt?: boolean } = {}): Svarstatus | null {
  const forventet = oppgave.expressionAnswer;
  if (forventet === undefined) return null;
  const liste = Array.isArray(forventet) ? forventet : [forventet];
  const fasit: number[] = [];
  for (const f of liste) {
    const t = tolkTall(String(f));
    if (!t || t.prosent) return null;
    fasit.push(t.verdi);
  }
  if (!fasit.length) return null;
  const elev = tolkTall(raw);
  if (!elev) return 'incorrect';
  const eksakt = (v: number) => fasit.some((a) => samme(v, a));
  const formKrav = kreverForm(oppgave.task) ?? kreverForm(oppgave.kontekst || '');
  if (valg.eksakt) {
    // autogodkjenning mens eleven skriver: bare brøk i forkortet form eller eksakt desimal, aldri prefiks av en lengre brøk
    if (elev.prosent) return 'incorrect';
    if (formKrav && elevForm(elev) !== formKrav) return 'incorrect';
    return eksakt(elev.verdi) && (!elev.brok || liste.some((f) => String(f).replace(/\s/g, '') === raw.replace(/\s/g, ''))) ? 'correct' : 'incorrect';
  }
  if (formKrav && elevForm(elev) !== formKrav) return 'incorrect';
  const verdi = elev.prosent ? elev.verdi / 100 : elev.verdi;
  const vilHaBrok = bedtOmBrok(oppgave.task) || bedtOmBrok(oppgave.kontekst || '');
  if (eksakt(verdi)) {
    if (elev.brok && !elev.prosent) {
      if (elev.forkortet === false && bedtOmForkortet(`${oppgave.task}\n${oppgave.kontekst || ''}`)) return 'incorrect';
      return 'correct';
    }
    return vilHaBrok ? 'equivalent' : 'correct';
  }
  if (!elev.brok && !vilHaBrok) {
    const r: Regler = { bedtDesimaler: bedtOmDesimaler(oppgave.task), avrundetDes: null, raa: true };
    const e = elev.prosent ? { ...elev, desimaler: elev.desimaler + 2 } : elev;
    if (fasit.some((a) => likNok(verdi, a, e, r))) return 'correct';
  }
  return 'incorrect';
}
