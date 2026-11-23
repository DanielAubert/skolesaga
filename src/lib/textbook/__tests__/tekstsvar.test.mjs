// Tester for tekstsvarsjekken i språkoppgavene (src/lib/textbook/tekstsvar.ts).
// Kjør: npm run test:tekstsvar   (node --test; Node ≥ 22.6 stripper TypeScript-typene)
// Daniel 23.11.2026: «Undersøk også aksentene og slikt og rett kontrolleren.»
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sjekkTekstsvar, erTekstfasit, fasitFormer, utenTegn, langForKurs, TEGNRAD } from '../tekstsvar.ts';

const st = (fasit, svar, lang) => sjekkTekstsvar(fasit, svar, lang).status;

test('erTekstfasit: tekst ja, tall nei', () => {
  assert.equal(erTekstfasit('médecin'), true);
  assert.equal(erTekstfasit(['un médecin', 'médecin']), true);
  assert.equal(erTekstfasit('Ich heiße Anna.'), true);
  assert.equal(erTekstfasit(42), false);
  assert.equal(erTekstfasit('3,5'), false);
  assert.equal(erTekstfasit('2/5'), false);
  assert.equal(erTekstfasit('40 %'), false);
  assert.equal(erTekstfasit('x = 3'), false);
  assert.equal(erTekstfasit(undefined), false);
});

test('riktig svar godkjennes — med aksent (før: aldri godkjent)', () => {
  assert.equal(st('médecin', 'médecin', 'fr'), 'correct');
  assert.equal(st('garçons', 'garçons', 'fr'), 'correct');
  assert.equal(st('Straße', 'Straße', 'de'), 'correct');
  assert.equal(st('mañana', 'mañana', 'es'), 'correct');
});

test('stor/liten forbokstav og avsluttende tegnsetting feller ikke', () => {
  assert.equal(st('Je suis fatigué.', 'je suis fatigué', 'fr'), 'correct');
  assert.equal(st('médecin', 'Médecin!', 'fr'), 'correct');
  assert.equal(st('Où est la gare ?', 'où est la gare', 'fr'), 'correct');
  assert.equal(st("C'est l'été", 'C’est l’été', 'fr'), 'correct');       // typografisk apostrof
  assert.equal(st('à gauche', '  à   gauche ', 'fr'), 'correct');
  assert.equal(st('«Bonjour»', 'Bonjour', 'fr'), 'correct');
});

test('mangler aksent → nesten med tegnene, aldri bare feil', () => {
  const r = sjekkTekstsvar('médecin', 'medecin', 'fr');
  assert.equal(r.status, 'nesten');
  assert.deepEqual(r.tegn, ['é']);
  assert.match(r.melding, /é/);
  assert.equal(st('garçons', 'garcons', 'fr'), 'nesten');
  assert.equal(st('à gauche', 'a gauche', 'fr'), 'nesten');
  assert.equal(st('Straße', 'Strasse', 'de'), 'nesten');
  assert.deepEqual(sjekkTekstsvar('Straße', 'Strasse', 'de').tegn, ['ß']);
  assert.equal(st('müde', 'mude', 'de'), 'nesten');
  assert.equal(st('sœur', 'soeur', 'fr'), 'nesten');
  assert.equal(st('mañana', 'manana', 'es'), 'nesten');
  assert.equal(st('på', 'pa', 'nb'), 'nesten');
  assert.equal(st('lærer', 'laerer', 'nb'), 'nesten');
});

test('feil aksent → nesten', () => {
  assert.equal(st('élève', 'éléve', 'fr'), 'nesten');
  assert.equal(st('père', 'pére', 'fr'), 'nesten');
});

test('feil ord er feil', () => {
  assert.equal(st('médecin', 'infirmier', 'fr'), 'incorrect');
  assert.equal(st('müde', 'mode', 'de'), 'incorrect');
  assert.equal(st('médecin', '', 'fr'), 'incorrect');
});

test('tysk: substantiv med liten forbokstav → nesten (ikke feil, ikke riktig)', () => {
  const r = sjekkTekstsvar('Ich habe einen Hund.', 'ich habe einen hund', 'de');
  assert.equal(r.status, 'nesten');
  assert.match(r.melding, /stor forbokstav: Hund/);
  assert.equal(st('Ich habe einen Hund.', 'ich habe einen Hund', 'de'), 'correct');   // bare første bokstav
  assert.equal(st('Haus', 'haus', 'de'), 'correct');                                  // ett ord: forbokstav fritt
});

test('spansk ¿ ¡ mangler → nesten', () => {
  assert.equal(st('¿Cómo te llamas?', '¿Cómo te llamas?', 'es'), 'correct');
  const r = sjekkTekstsvar('¿Cómo te llamas?', 'Cómo te llamas?', 'es');
  assert.equal(r.status, 'nesten');
  assert.match(r.melding, /¿/);
  assert.equal(st('¿Cómo te llamas?', 'Como te llamas?', 'es'), 'nesten');
});

test('flere godkjente former: liste, «/» og (e)-endinger', () => {
  assert.deepEqual(fasitFormer('au centre / au milieu'), ['au centre', 'au milieu']);
  assert.equal(st('au centre / au milieu', 'au milieu', 'fr'), 'correct');
  assert.equal(st(['un médecin', 'médecin'], 'médecin', 'fr'), 'correct');
  assert.equal(st('fatigué(e)', 'fatiguée', 'fr'), 'correct');
  assert.equal(st('fatigué(e)', 'fatigué', 'fr'), 'correct');
  assert.equal(st('fatigué(e)', 'fatigue', 'fr'), 'nesten');
});

test('hjelpere', () => {
  assert.equal(utenTegn('Größe garçon sœur Æøå'), 'Grosse garcon soeur Aeoa');
  assert.equal(langForKurs('fransk-2'), 'fr');
  assert.equal(langForKurs('tysk-1'), 'de');
  assert.equal(langForKurs('spansk-3'), 'es');
  assert.equal(langForKurs('engelsk-8'), 'en');
  assert.ok(TEGNRAD.es.includes('¿') && TEGNRAD.es.includes('ñ'));
  assert.ok(TEGNRAD.de.includes('ß') && TEGNRAD.fr.includes('ç') && TEGNRAD.fr.includes('œ'));
});
