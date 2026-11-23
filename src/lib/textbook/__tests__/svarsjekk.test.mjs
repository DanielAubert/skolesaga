// Tester for svarsjekken i matematikkoppgavene (src/lib/textbook/svarsjekk.ts).
// Kjør: npm run test:svarsjekk   (node --test; Node ≥ 22.6 stripper TypeScript-typene)
// Grensetilfellene fra den blinde kodekontrollen 23.11.2026 (K7) står som egne tester nederst.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tolkTall, sjekkTallsvar, sjekkBroksvar, bedtOmDesimaler, fasitDesimaler, kreverForm } from '../svarsjekk.ts';

const tall = (task, answer, solution, kontekst) => (raw) => sjekkTallsvar({ task, answer, solution, kontekst }, raw);
const brok = (task, expressionAnswer, kontekst) => (raw) => sjekkBroksvar({ task, expressionAnswer, kontekst }, raw);
const alle = (f, liste, forventet) => { for (const r of liste) assert.equal(f(r), forventet, r); };

test('tolkTall: skrivemåter', () => {
  assert.equal(tolkTall('0,4').verdi, 0.4);
  assert.equal(tolkTall('0.4').verdi, 0.4);
  assert.equal(tolkTall(',5').verdi, 0.5);
  assert.equal(tolkTall('2/5').verdi, 0.4);
  assert.equal(tolkTall(' 2 / 5 ').verdi, 0.4);
  assert.equal(tolkTall('\\frac{2}{5}').verdi, 0.4);
  assert.equal(tolkTall('$\\dfrac{2}{5}$').verdi, 0.4);
  assert.equal(tolkTall('-\\frac{3}{4}').verdi, -0.75);
  assert.equal(tolkTall('1 1/2').verdi, 1.5);
  assert.equal(tolkTall('12 500').verdi, 12500);
  assert.equal(tolkTall('1 000 000,5').verdi, 1000000.5);
  assert.equal(tolkTall('12 500').verdi, 12500);
  assert.equal(tolkTall('−3').verdi, -3);
  const p = tolkTall('40 %');
  assert.equal(p.verdi, 40);
  assert.equal(p.prosent, true);
  assert.equal(tolkTall('40%').prosent, true);
  assert.equal(tolkTall('40 prosent').prosent, true);
  assert.equal(tolkTall('x = 0,4').verdi, 0.4);
  assert.equal(tolkTall('P(rød) = 2/5').verdi, 0.4);
  assert.equal(tolkTall('0,03125').desimaler, 5);
  assert.equal(tolkTall('6,674 · 10^{-11}').verdi, 6.674e-11);
  assert.equal(tolkTall('6,674*10^-11').verdi, 6.674e-11);
  assert.equal(tolkTall('4,2 \\cdot 10^{9}').verdi, 4.2e9);
  assert.equal(tolkTall('3,6288×10^14').verdi, 3.6288e14);
  assert.equal(tolkTall('6.674e-11').verdi, 6.674e-11);
  assert.equal(tolkTall('4.2 * 10^(-4)').verdi, 0.00042);
  assert.equal(tolkTall('9 cm').verdi, 9);
  assert.equal(tolkTall('250 kr').verdi, 250);
  assert.equal(tolkTall('kr 250').verdi, 250);
  assert.equal(tolkTall('45°').verdi, 45);
  assert.equal(tolkTall('17,5 m').verdi, 17.5);
  assert.equal(tolkTall('3 m^2').verdi, 3);
  assert.equal(tolkTall('12 m²').verdi, 12);
  assert.equal(tolkTall('≈ 0,54').verdi, 0.54);
  assert.equal(tolkTall('3/12').forkortet, false);
  assert.equal(tolkTall('1/4').forkortet, true);
});

test('tolkTall: ikke tall', () => {
  for (const s of ['', ' ', 'x^2', '2x', '1/0', '12 3', '1,2,3', 'abc', '2 = 2', '0,4 0,5', '1.000,5', 'x = 7, x = -3', 'a = 3, b = 5', 'x^2-1']) {
    assert.equal(tolkTall(s), null, s);
  }
});

test('desimaler og form: oppgaveteksten og fasiten', () => {
  assert.equal(bedtOmDesimaler('Rund av til to desimaler.'), 2);
  assert.equal(bedtOmDesimaler('Svar med én desimal'), 1);
  assert.equal(bedtOmDesimaler('Rund av til 3 desimaler'), 3);
  assert.equal(bedtOmDesimaler('Rund av til seks desimaler'), 6);
  assert.equal(bedtOmDesimaler('Rund av til nærmeste hele krone'), 0);
  assert.equal(bedtOmDesimaler('Avrund til hele prosent'), 0);
  assert.equal(bedtOmDesimaler('Rund av til to desimalar.'), 2);
  assert.equal(bedtOmDesimaler('Finn P(to seksere)'), null);
  assert.equal(bedtOmDesimaler('Skriv to desimaltall mellom 1 og 2'), null);
  assert.equal(bedtOmDesimaler('Hva er det minste hele tallet som passer?'), null);
  assert.equal(bedtOmDesimaler('Etter hvor mange hele år er beløpet over 2400 kr?'), null);
  assert.equal(bedtOmDesimaler('Til nærmeste heltall.'), 0);
  assert.equal(bedtOmDesimaler('Finn $\\sqrt{2}$ med 10 desimaler.'), 10);
  assert.equal(fasitDesimaler(0.5448338644), 10);
  assert.equal(fasitDesimaler(25), 0);
  assert.equal(fasitDesimaler(1e-7), 7);
  assert.equal(kreverForm('Skriv $\\frac{7}{8}$ som desimaltall.'), 'desimal');
  assert.equal(kreverForm('Skriv $35\\%$ som desimaltall.'), 'desimal');
  assert.equal(kreverForm('Skriv $0{,}375$ som brøk'), 'brok');
  assert.equal(kreverForm('Skriv tallet $0{,}00042$ i standardform.'), 'standardform');
  assert.equal(kreverForm('Skriv 0,35 som prosent'), 'prosent');
  assert.equal(kreverForm('Trekke en rød kule. Oppgi svaret som brøk.'), null);
  assert.equal(kreverForm('Finn sannsynligheten.'), null);
});

test('tallfasit: brøk, prosent, komma og punktum godtas når verdien er lik', () => {
  const s = tall('Finn sannsynligheten.', 0.4);
  alle(s, ['0,4', '0.4', '0,40', '2/5', '4/10', '\\frac{2}{5}', '40 %', '40%', 'P = 0,4', '≈ 0,4'], 'correct');
  alle(s, ['0,5', '4', '40', '0,04', '2/3', '4 %', '0,41', '0,4 %', 'x+1', ''], 'incorrect');
});

test('tallfasit i prosent (oppgaven ber om prosent, fasit 25)', () => {
  const s = tall('Kast 2 terninger. Finn P(begge større enn 3). Oppgi svaret i prosent.', 25);
  alle(s, ['25', '25 %', '25%', '25,0 %'], 'correct');
  alle(s, ['0,25', '1/4', '2,5 %', '26 %', '24'], 'incorrect');
});

test('lang fasit (ti desimaler): avrundet svar med minst to gjeldende sifre godtas', () => {
  const s = tall('Trekk 3 kort med tilbakelegging. Finn P(minst ett bildekort)', 0.5448338644);
  alle(s, ['0,5448338644', '0,54', '0,545', '0,5448', '54,5 %', '54 %'], 'correct');
  alle(s, ['0,5', '0,55', '0,53', '0,544', '0,6', '1/2', '5 %'], 'incorrect');
});

test('rå kort fasit (fem desimaler): egen avrunding med to gjeldende sifre', () => {
  const s = tall('Kast mynt 5 ganger. Finn P(fem kron).', 0.03125);
  alle(s, ['0,03125', '1/32', '0,031', '3,125 %', '3,1 %'], 'correct');
  alle(s, ['0,03', '0,032', '0,04', '0,0', '0,3125', '1/31', '3 %'], 'incorrect');
});

test('kort eksakt fasit: bare eksakt verdi (ingen egen avrunding)', () => {
  const h = tall('Finn halvparten.', 0.25);
  alle(h, ['0,25', '1/4', '25 %'], 'correct');
  alle(h, ['0,254', '0,26', '0,2', '0,3'], 'incorrect');
  alle(tall('Regn ut.', 100.4), ['100', '1004'], 'incorrect');
  alle(tall('Regn ut.', 12.04), ['12'], 'incorrect');
  alle(tall('Regn ut.', 1.009), ['1', '1,01'], 'incorrect');
  alle(tall('Regn ut.', 0.048), ['0,05'], 'incorrect');
  alle(tall('Regn ut.', 0.00104), ['0,001', '0,0010'], 'incorrect');
  alle(tall('Regn ut.', 199), ['2 · 10^2', '2e2', '1,99 · 10^1'], 'incorrect');
  assert.equal(tall('Regn ut.', 199)('199'), 'correct');
  assert.equal(tall('Regn ut.', 199)('1,99 · 10^2'), 'correct');
});

test('oppgaven ber om antall desimaler', () => {
  const r = tall('Bruk kalkulatoren til å finne $\\sqrt{2}$ med 10 desimaler.', 1.4142135624);
  assert.equal(r('1,4142135624'), 'correct');
  alle(r, ['1,41', '1,5556', '1,4142135625'], 'incorrect');
  const s = tall('Regn ut 2/3. Rund av til to desimaler.', 0.67);
  alle(s, ['0,67', '0,670'], 'correct');
  alle(s, ['0,7', '0,66', '0,68', '0,6', '0,667', '0,666', '0,6749', '2/3'], 'incorrect');
  const kr = tall('Hva koster det? Rund av til nærmeste hele krone.', 1235);
  alle(kr, ['1235', '1 235', '1235 kr'], 'correct');
  alle(kr, ['1234', '1236', '1234,4', '1234,6', '1235,4'], 'incorrect');
});

test('avrundet fasit: presisjonen leses fra «≈» rett foran fasittallet i løsningen', () => {
  const s = tall('Hvor mange prosent økte prisen?', 33.3, 'Økningen er $\\frac{1}{3} \\approx 33{,}3\\,\\%$.');
  alle(s, ['33,3', '33,33', '33,333 %', '33,3 %'], 'correct');
  alle(s, ['33', '32', '34', '33,4', '33,2', '3,33'], 'incorrect');
  // ≈ bare i et mellomsteg → ingen slingringsmonn (K7 M3, stat-7-3)
  const m = tall('Hva ville 99 %-intervallet blitt?', 0.3, 'Margin: $2{,}576 \\cdot 0{,}0194 \\approx 0{,}050$. Intervall: $[0{,}300,\\ 0{,}400]$.');
  alle(m, ['0,3', '0,300'], 'correct');
  alle(m, ['0,33', '0,31'], 'incorrect');
  // «≈ 0,030»: presisjon tre desimaler (K7 M3, s1-6-4)
  const n = tall('Beregn sannsynligheten.', 0.03, 'Tilnærmet: $\\approx 0{,}030$');
  alle(n, ['0,03', '0,030', '0,0304'], 'correct');
  alle(n, ['0,033', '0,031'], 'incorrect');
  // π ≈ 3,14 i oppgaven slår ikke på regelen
  alle(tall('Bruk π ≈ 3,14. Finn arealet.', 25.12), ['25'], 'incorrect');
  // heltallsfasit «≈ 2» gir ikke ±0,5
  const v = tall('Hva er vekstfaktoren omtrent?', 2, 'Vekstfaktoren er $\\approx 2$.');
  assert.equal(v('2'), 'correct');
  assert.equal(v('2,2'), 'incorrect');
});

test('fasitliste med avrundede former: mer presist svar må stemme med den mest presise', () => {
  const s = tall('Hvor mange prosent endres reallønnen hans?', [0.67, 0.7], 'Reallønnen synker med om lag $0{,}7\\,\\%$ ($\\approx 0{,}67$).');
  alle(s, ['0,67', '0,7', '0,671', '0,67 %'], 'correct');
  alle(s, ['0,737', '0,74', '0,6'], 'incorrect');
  const f = tall('Hvor mye veier ett mol?', '1,0 × 10^-3', '$\\approx 1{,}0 \\times 10^{-3}$ kg');
  alle(f, ['1,0 · 10^{-3}', '0,001', '0,00100534', '0,001 kg'], 'correct');
  alle(f, ['0,0011', '1,1 · 10^{-3}'], 'incorrect');
});

test('standardform og store tall', () => {
  const g = tall('Hva er gravitasjonskonstanten?', 6.674e-11);
  alle(g, ['6,674 · 10^{-11}', '6,674*10^-11', '6.674e-11', '0,00000000006674'], 'correct');
  alle(g, ['6,674 · 10^{-10}', '6,67 · 10^{-12}'], 'incorrect');
  const d = tall('Hvor mange beregninger gjør den på ett døgn?', 362879999999999.94, '$\\approx 3{,}63 \\cdot 10^{14}$');
  alle(d, ['3,6288 · 10^{14}', '362 880 000 000 000', '3,63 · 10^14'], 'correct');
  alle(d, ['3,6 · 10^{13}', '3,7 · 10^14'], 'incorrect');
  const stor = tall('Skriv tallet med siffer.', 920000000000);
  alle(stor, ['920 000 000 000', '9,2 · 10^{11}'], 'correct');
  alle(stor, ['920 000 000 001'], 'incorrect');
});

test('heltallsoppgaver: ingen slingringsmonn', () => {
  alle(tall('Hva er det minste hele tallet som passer?', 5), ['5,4', '4,6', '6'], 'incorrect');
  assert.equal(tall('Etter hvor mange hele år er beløpet for første gang over 2400 kr?', 4)('4,4'), 'incorrect');
  const s = tall('Hvor mange forsøk trenger du i verste fall?', 10000);
  alle(s, ['10000', '10 000', '10000,0'], 'correct');
  alle(s, ['9999', '10001', '1000', '10 000 %'], 'incorrect');
  const a = tall('Avrund 0,0456 til to desimaler', 0.05);
  assert.equal(a('0,05'), 'correct');
  alle(a, ['0,055', '0,04'], 'incorrect');
});

test('tekstfasit som er tall («2/3», «20 %», «4.2 * 10^(-4)»)', () => {
  const b = tall('Regn ut.', '2/3');
  alle(b, ['2/3', '4/6', '0,67', '0,667'], 'correct');
  alle(b, ['2', '0,6', '3/2'], 'incorrect');
  const p = tall('Hvor stor er rabatten?', '20 %');
  alle(p, ['20 %', '20%', '20', '0,2', '1/5'], 'correct');
  alle(p, ['2 %', '0,02', '200'], 'incorrect');
  const q = tall('Regn ut.', '4.2 * 10^(-4)');
  alle(q, ['0,00042', '4,2 · 10^{-4}'], 'correct');
});

test('flere godkjente fasiter og negative tall', () => {
  const s = tall('Løs likningen.', [-2, 3]);
  alle(s, ['-2', '−2', '3', 'x = 3'], 'correct');
  alle(s, ['2', '-3', '1', 'x = 7, x = 3'], 'incorrect');
});

test('tekstfasit (språkoppgaver o.l.) er ikke tallfasit', () => {
  assert.equal(sjekkTallsvar({ task: 'Oversett', answer: 'bonjour' }, 'bonjour'), null);
  assert.equal(sjekkTallsvar({ task: 'Svar ja eller nei', answer: 'ja' }, 'ja'), null);
  assert.equal(sjekkTallsvar({ task: 'Løs ulikheten', answer: 'x > 5' }, 'x > 5'), null);
  assert.equal(sjekkTallsvar({ task: 'x', answer: undefined }, '1'), null);
});

test('brøkfasit (expressionAnswer): brøk riktig, desimal/prosent godkjent gult når oppgaven ønsker brøk', () => {
  const s = brok('Trekke en rød kule fra en pose med 3 røde og 7 blå kuler. Oppgi svaret som brøk.', ['3/10']);
  alle(s, ['3/10', '6/20', '\\frac{3}{10}'], 'correct');
  alle(s, ['0,3', '0.3', '30 %', '30%'], 'equivalent');
  alle(s, ['3/7', '0,33', '1/3', '30', '7/10', ''], 'incorrect');
  const uten = brok('Kortstokk: Finn P(ess eller konge)', '2/13');
  alle(uten, ['2/13', '0,1538', '0,15', '15,4 %', '0,154'], 'correct');
  alle(uten, ['0,2', '0,16', '0,153'], 'incorrect');
  const tredel = brok('Finn sannsynligheten. Oppgi svaret som brøk.', ['1/3']);
  alle(tredel, ['0,33', '0,333', '0,3'], 'incorrect');
});

test('algebraisk fasit overlates til uttrykkssjekken', () => {
  assert.equal(sjekkBroksvar({ task: 'Forenkle', expressionAnswer: 'x^2-1' }, 'x^2-1'), null);
  assert.equal(sjekkBroksvar({ task: 'Forenkle', expressionAnswer: ['2x', '2*x'] }, '2x'), null);
});

// ---- Grensetilfeller fra den blinde kodekontrollen K7 (23.11.2026) ----

test('K7 M1: svar med enhet godtas igjen', () => {
  alle(tall('Hvor lang er siden?', 9), ['9 cm', '9cm'], 'correct');
  alle(tall('Hva koster det?', 250), ['250 kr', 'kr 250'], 'correct');
  alle(tall('Hvor stor er vinkelen?', 45), ['45°', '45 grader'], 'correct');
  alle(tall('Finn arealet.', 3), ['3 m^2', '3 m²'], 'correct');
  alle(tall('Hvor lang er siden?', 9), ['8 cm', '9 x'], 'incorrect');
});

test('K7 M2: omgjøringsoppgaver godtar ikke avskrift av oppgaven', () => {
  const d = tall('Skriv $\\frac{7}{8}$ som desimaltall.', 0.875);
  assert.equal(d('0,875'), 'correct');
  alle(d, ['7/8', '87,5 %'], 'incorrect');
  const p = tall('Skriv $35\\%$ som desimaltall.', 0.35);
  assert.equal(p('0,35'), 'correct');
  assert.equal(p('35%'), 'incorrect');
  const k = tall('40%', 0.4, undefined, 'Skriv som desimaltall:');
  assert.equal(k('0,4'), 'correct');
  assert.equal(k('40 %'), 'incorrect');
  const s = tall('Skriv tallet $0{,}00042$ i standardform.', '4.2 * 10^(-4)');
  assert.equal(s('4,2 · 10^{-4}'), 'correct');
  assert.equal(s('0,00042'), 'incorrect');
  const b = tall('Skriv $0{,}035$ som brøk.', '7/200');
  assert.equal(b('7/200'), 'correct');
  assert.equal(b('0,035'), 'incorrect');
  const bb = brok('Skriv $0{,}375$ som brøk', ['3/8']);
  assert.equal(bb('3/8'), 'correct');
  assert.equal(bb('0,375'), 'incorrect');
});

test('K7 M4: prosent i oppgaveteksten over deloppgaven eller i løsningen', () => {
  const k = tall('18 av 90', 20, undefined, 'Hvor mange prosent er …?');
  alle(k, ['20 %', '20'], 'correct');
  const l = tall('Finn den årlige renten.', 14, 'Renten er $14\\,\\%$.');
  alle(l, ['14 %', '14'], 'correct');
});

test('K7 M5/B5: brøkønske og forkortet form', () => {
  const s = brok('Skriv $0{,}\\overline{3}$ som brøk', ['1/3']);
  alle(s, ['0,33', '0,333333'], 'incorrect');
  assert.equal(s('1/3'), 'correct');
  const f = brok('Skriv 0,25 som brøk (forkortet).', ['1/4']);
  assert.equal(f('1/4'), 'correct');
  assert.equal(f('3/12'), 'incorrect');
});

test('K7 B3: autogodkjenning mens eleven skriver er bare eksakt', () => {
  const e = (task, answer, raw) => sjekkTallsvar({ task, answer }, raw, { eksakt: true });
  assert.equal(e('Regn ut.', 100.4, '100'), 'incorrect');
  assert.equal(e('Regn ut.', 100.4, '100,4'), 'correct');
  assert.equal(e('Regn ut.', 0.5, '1/2'), 'incorrect');
  assert.equal(e('Regn ut.', 0.5448338644, '0,54'), 'incorrect');
  const eb = (x, raw) => sjekkBroksvar({ task: 'Finn P.', expressionAnswer: x }, raw, { eksakt: true });
  assert.equal(eb(['1/4'], '1/4'), 'correct');
  assert.equal(eb(['1/45'], '1/4'), 'incorrect');
});

test('K7 B6: prosenttegn på en andel', () => {
  const s = tall('Prisen settes ned med 12 %. Finn vekstfaktoren.', 0.88);
  assert.equal(s('0,88 %'), 'incorrect');
  assert.equal(s('0,88'), 'correct');
});

// ---- Grensetilfeller fra etterkontrollen E3 (23.11.2026) ----

test('E3 MÅ2: autogodkjenning hopper ikke over formkravet', () => {
  const e = (o, raw) => sjekkTallsvar(o, raw, { eksakt: true });
  assert.equal(e({ task: 'Skriv $0{,}035$ som brøk.', answer: '7/200' }, '0,035'), 'incorrect');
  assert.equal(e({ task: 'Skriv tallet $0{,}00042$ i standardform.', answer: '4.2 * 10^(-4)' }, '0,00042'), 'incorrect');
  assert.equal(e({ task: '$56\\,000$', answer: '5,6 × 10^4', kontekst: 'Skriv tallene på standardform.' }, '56000'), 'incorrect');
  assert.equal(sjekkBroksvar({ task: 'Skriv 0,375 som brøk', expressionAnswer: '3/8' }, '0,375', { eksakt: true }), 'incorrect');
  assert.equal(e({ task: 'Skriv $\\frac{7}{8}$ som desimaltall.', answer: 0.875 }, '0,875'), 'correct');
});

test('E3 MÅ3: avrundingsoppgaver godtar ikke det uavrundede tallet', () => {
  alle(tall('Avrund 3,47 til én desimal', 3.5), ['3,47', '3,4', '3,6'], 'incorrect');
  assert.equal(tall('Avrund 3,47 til én desimal', 3.5)('3,5'), 'correct');
  alle(tall('Avrund 0,0456 til to desimaler', 0.05), ['0,0456', '0,046', '0,054'], 'incorrect');
  alle(tall('Avrund 99,999 til én desimal', 100), ['99,999'], 'incorrect');
  assert.equal(tall('Avrund 99,999 til én desimal', 100)('100,0'), 'correct');
  const k = tall('Til nærmeste heltall.', 5, undefined, 'Rund av tallet 4,7528.');
  alle(k, ['4,7528', '5,4'], 'incorrect');
  assert.equal(k('5'), 'correct');
});

test('E3 MÅ4: krav i oppgaveteksten over lekker ikke til andre deloppgaver', () => {
  alle(tall('Hvor stor andel er sukker?', 0.0139, undefined, 'Svar i hele gram.'), ['0', '0,4', '0,139'], 'incorrect');
  alle(tall('Beregn renten per dag.', 0.0052609, undefined, 'Rund av til to desimaler, og oppgi renter med fire desimaler.'), ['0,005', '0,00052609'], 'incorrect');
  const p = tall('Finn andelen.', 0.3292, undefined, 'Rund av til én desimal i prosent.');
  assert.equal(p('32,9 %'), 'correct');
  alle(p, ['0,3', '0,35'], 'incorrect');
  alle(tall('Finn fordoblingstiden.', 7.3, undefined, '(Avrund til nærmeste hele egg.)'), ['7', '7,2', '7,4'], 'incorrect');
});

test('E3 MÅ5: «Skriv svaret som vanlig tall» krever ikke standardform', () => {
  const s = tall('$(3 \\cdot 10^5) \\cdot 2$', 600000, undefined, 'Regn med standardform. Skriv svaret som vanlig tall.');
  assert.equal(s('600000'), 'correct');
  assert.equal(s('600 000'), 'correct');
  assert.equal(kreverForm('Regn ut og gi svaret på standardform.'), 'standardform');
  assert.equal(tall('Skriv likningen på standardform $x + 2z = d$, og finn $d$.', 7)('7'), 'correct');
});

test('E3 BØR: laveste form, brøk mot rå fasit, éin desimal', () => {
  const f = tall('Skriv $0{,}375$ som brøk i laveste form', '3/8');
  assert.equal(f('3/8'), 'correct');
  assert.equal(f('6/16'), 'incorrect');
  assert.equal(tall('Finn sannsynligheten.', 0.1667)('1/6'), 'correct');
  assert.equal(bedtOmDesimaler('Rund av til éin desimal.'), 1);
});
