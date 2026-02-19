/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Niva 1 - Kapittel 11-13
 *
 * Kapittel 11: Die deutschsprachige Welt (Den tysktalende verden)
 * Kapittel 12: Kunst und Kultur (Kunst og kultur)
 * Kapittel 13: Authentische Texte (Autentiske tekster)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 11.1: Die DACH-Lander - DACH-landene
// ============================================================================

export const CHAPTER_TYSK_1_11_1: TextbookChapter = {
  id: 'tysk-1-11-1',
  courseId: 'tysk-1',
  chapterNumber: '11.1',
  title: 'Die DACH-Lander',
  subtitle: 'DACH-landene',
  description: 'Laer om de tysktalende landene: Tyskland, Osterrike, Sveits og flere.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske geografi og levemater i tysktalende omrader',
    'navngi de tysktalende landene og hovedstedene deres',
  ],
  content: [
    {
      id: 'tysk-1-11-1-intro',
      type: 'text',
      content: `## Die DACH-Lander

DACH er en forkortelse for de tre store tysktalende landene: **D**eutschland (Tyskland), **A**usterreich (Osterrike) og die **CH** (Sveits - CH star for Confoederatio Helvetica). I tillegg snakkes tysk i Liechtenstein, Luxembourg og deler av Belgia og Italia.

Til sammen har de tysktalende landene over 100 millioner innbyggere, og tysk er det mest talte morsmalet i Europa.`,
    },
    {
      id: 'tysk-1-11-1-def-1',
      type: 'definition',
      title: 'DACH-landene og fakta',
      content: `**Die DACH-Lander** (DACH-landene) er en samlebetegnelse for de tre hovedlandene der tysk er offisielt sprak.

| Land | Tysk navn | Hovedstad | Innbyggere |
|------|-----------|-----------|------------|
| Tyskland | Deutschland | Berlin | ca. 83 millioner |
| Osterrike | Osterreich | Wien | ca. 9 millioner |
| Sveits | die Schweiz | Bern | ca. 8,7 millioner |
| Liechtenstein | Liechtenstein | Vaduz | ca. 39 000 |
| Luxembourg | Luxemburg | Luxemburg | ca. 650 000 |`,
    },
    {
      id: 'tysk-1-11-1-text-1',
      type: 'text',
      content: `## Deutschland - Tyskland

Tyskland er det storste tysktalende landet med rundt 83 millioner innbyggere. Landet ligger midt i Europa og grenser til ni andre land. Hovedstaden er **Berlin**, og andre viktige byer er **Munchen**, **Hamburg**, **Frankfurt** og **Koln**.

Tyskland er kjent for sin industri, sine biler (BMW, Mercedes, Volkswagen), og for sin rike historie og kultur. Landet er delt inn i 16 delstater (Bundeslander).

| Tysk | Norsk |
|------|-------|
| die Bundesrepublik Deutschland | Forbundsrepublikken Tyskland |
| die Hauptstadt | hovedstaden |
| das Bundesland (pl. Bundeslander) | delstaten |
| die Grenze | grensen |
| der Einwohner | innbyggeren |`,
    },
    {
      id: 'tysk-1-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Landene og hovedstedene',
      problem: `Koble riktig land med riktig hovedstad:
a) Deutschland - ?
b) Osterreich - ?
c) die Schweiz - ?
d) Liechtenstein - ?`,
      solution: `a) Deutschland - **Berlin**
b) Osterreich - **Wien**
c) die Schweiz - **Bern**
d) Liechtenstein - **Vaduz**

Tips: Wien heter Vienna pa engelsk, og Bern er bare hovedstad administrativt - den storste byen i Sveits er Zurich.`,
    },
    {
      id: 'tysk-1-11-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva star DACH for?',
        options: [
          { id: 'a', text: 'Deutschland, Austria, China', isCorrect: false },
          { id: 'b', text: 'Deutschland, Osterreich, Confoederatio Helvetica (Schweiz)', isCorrect: true },
          { id: 'c', text: 'Danmark, Austria, Croatia', isCorrect: false },
          { id: 'd', text: 'Deutschland, Amsterdam, Helsinki', isCorrect: false },
        ],
        solution: 'DACH star for Deutschland (D), Osterreich/Austria (A), og Confoederatio Helvetica/Schweiz (CH).',
      },
    },
    {
      id: 'tysk-1-11-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Omtrent hvor mange innbyggere har Tyskland?',
        options: [
          { id: 'a', text: 'Ca. 9 millioner', isCorrect: false },
          { id: 'b', text: 'Ca. 45 millioner', isCorrect: false },
          { id: 'c', text: 'Ca. 83 millioner', isCorrect: true },
          { id: 'd', text: 'Ca. 120 millioner', isCorrect: false },
        ],
        solution: 'Tyskland har ca. 83 millioner innbyggere og er det mest folkerike landet i EU.',
      },
    },
    {
      id: 'tysk-1-11-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk. Bruk ordlisten i kapittelet.',
        subTasks: [
          { label: 'a', task: 'hovedstaden', solution: 'die Hauptstadt' },
          { label: 'b', task: 'delstaten', solution: 'das Bundesland' },
          { label: 'c', task: 'grensen', solution: 'die Grenze' },
          { label: 'd', task: 'innbyggeren', solution: 'der Einwohner' },
        ],
        solution: 'a) die Hauptstadt, b) das Bundesland, c) die Grenze, d) der Einwohner',
      },
    },
    {
      id: 'tysk-1-11-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre setninger pa tysk om Tyskland. Bruk ordene: Deutschland, Hauptstadt, Einwohner.',
        solution: 'Eksempel:\n- Deutschland liegt in Europa.\n- Die Hauptstadt von Deutschland ist Berlin.\n- Deutschland hat ungefahr 83 Millionen Einwohner.',
        hints: ['Bruk "liegt in" (ligger i)', 'Bruk "Die Hauptstadt von ... ist ..."'],
      },
    },
    {
      id: 'tysk-1-11-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (5-6 setninger) der du sammenligner to DACH-land. Nevn hovedstad, innbyggertall og noe landene er kjent for.',
        solution: 'Eksempel:\nDeutschland ist das grosste DACH-Land. Die Hauptstadt ist Berlin und das Land hat ungefahr 83 Millionen Einwohner. Deutschland ist bekannt fur Autos wie BMW und Mercedes. Die Schweiz ist viel kleiner. Die Hauptstadt ist Bern und das Land hat ungefahr 8,7 Millionen Einwohner. Die Schweiz ist bekannt fur Schokolade und Uhren.',
        hints: ['Bruk "ist bekannt fur" (er kjent for)', 'Bruk "viel kleiner" (mye mindre)'],
      },
    },
    {
      id: 'tysk-1-11-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **DACH** star for Deutschland, Osterreich og die Schweiz (Confoederatio Helvetica).
- Tyskland er det storste tysktalende landet med ca. 83 millioner innbyggere og hovedstad Berlin.
- Osterrike har ca. 9 millioner innbyggere med hovedstad Wien.
- Sveits har ca. 8,7 millioner innbyggere med hovedstad Bern.
- Tysk er det mest talte morsmalet i Europa med over 100 millioner morsmalstalere.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die DACH-Lander', definition: 'DACH-landene (Tyskland, Osterrike, Sveits)' },
    { term: 'die Hauptstadt', definition: 'hovedstaden' },
    { term: 'das Bundesland', definition: 'delstaten' },
    { term: 'der Einwohner', definition: 'innbyggeren' },
    { term: 'die Grenze', definition: 'grensen' },
  ],
};

// ============================================================================
// Kapittel 11.2: Osterreich - Osterrike
// ============================================================================

export const CHAPTER_TYSK_1_11_2: TextbookChapter = {
  id: 'tysk-1-11-2',
  courseId: 'tysk-1',
  chapterNumber: '11.2',
  title: 'Osterreich',
  subtitle: 'Osterrike',
  description: 'Laer om Osterrike - landet med Alpene, Wien, Salzburg og Wiener Schnitzel.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive osterriksk kultur og geografi pa tysk',
    'kjenne til viktige byer og tradisjoner i Osterrike',
  ],
  content: [
    {
      id: 'tysk-1-11-2-intro',
      type: 'text',
      content: `## Osterreich - landet i Alpene

Osterrike (Osterreich) er et vakkert land i hjertet av Europa. Landet er kjent for sine imponerende fjell (die Alpen), sin klassiske musikk og sin deilige mat. Med rundt 9 millioner innbyggere er Osterrike mye mindre enn Tyskland, men har en rik kultur og historie.

Hovedstaden **Wien** (Vienna) er en av Europas mest kulturelle byer, kjent for operaen, kaffehusene og Schonbrunn-slottet.`,
    },
    {
      id: 'tysk-1-11-2-def-1',
      type: 'definition',
      title: 'Viktige ord om Osterrike',
      content: `| Tysk | Norsk |
|------|-------|
| Osterreich | Osterrike |
| Wien | Wien (Vienna) |
| Salzburg | Salzburg |
| die Alpen | Alpene |
| das Kaffeehaus | kaffehuset |
| das Schloss | slottet |
| das Wiener Schnitzel | wienerschnitzel |
| der Apfelstrudel | eplestrudel |
| die Oper | operaen |
| der Walzer | valsen |`,
    },
    {
      id: 'tysk-1-11-2-text-1',
      type: 'text',
      content: `## Wien - Osterrikes hovedstad

Wien er en av Europas eldste og mest kulturelle byer. Byen er kjent for:

- **Musikk**: Wien var hjemby for Mozart, Beethoven, Schubert og Strauss. Wiener Philharmonikerne er et av verdens mest kjente orkestre.
- **Kaffehuskultur**: Wiens kaffehus er pa UNESCOs verdensarvliste. Her sitter folk i timevis og nyter kaffe og kaker.
- **Arkitektur**: Schonbrunn-slottet, Stephansdom (Stefansdomen) og Ringstrasse er imponerende severdigheter.

## Salzburg - Mozarts fodeby

Salzburg ligger ved foten av Alpene og er kjent som Mozarts fodeby. Byen er ogsa kjent for Salzburg-festivalen, en arlig musikk- og teaterfestival.`,
    },
    {
      id: 'tysk-1-11-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Snakke om Osterrike',
      problem: `Oversett til norsk:
a) Wien ist die Hauptstadt von Osterreich.
b) Mozart wurde in Salzburg geboren.
c) Die Alpen sind sehr schon.`,
      solution: `a) Wien er hovedstaden i Osterrike.
b) Mozart ble fodt i Salzburg.
c) Alpene er veldig vakre.

**wurde geboren** = ble fodt (preteritum av "werden geboren")`,
    },
    {
      id: 'tysk-1-11-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedstaden i Osterrike?',
        options: [
          { id: 'a', text: 'Salzburg', isCorrect: false },
          { id: 'b', text: 'Wien', isCorrect: true },
          { id: 'c', text: 'Graz', isCorrect: false },
          { id: 'd', text: 'Innsbruck', isCorrect: false },
        ],
        solution: 'Wien (Vienna) er hovedstaden i Osterrike.',
      },
    },
    {
      id: 'tysk-1-11-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken beremt komponist ble fodt i Salzburg?',
        options: [
          { id: 'a', text: 'Beethoven', isCorrect: false },
          { id: 'b', text: 'Bach', isCorrect: false },
          { id: 'c', text: 'Mozart', isCorrect: true },
          { id: 'd', text: 'Brahms', isCorrect: false },
        ],
        solution: 'Wolfgang Amadeus Mozart ble fodt i Salzburg i 1756.',
      },
    },
    {
      id: 'tysk-1-11-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'Alpene', solution: 'die Alpen' },
          { label: 'b', task: 'slottet', solution: 'das Schloss' },
          { label: 'c', task: 'kaffehuset', solution: 'das Kaffeehaus' },
          { label: 'd', task: 'operaen', solution: 'die Oper' },
        ],
        solution: 'a) die Alpen, b) das Schloss, c) das Kaffeehaus, d) die Oper',
      },
    },
    {
      id: 'tysk-1-11-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre setninger pa tysk om Wien. Bruk ordene: Hauptstadt, Musik, Kaffeehaus.',
        solution: 'Eksempel:\n- Wien ist die Hauptstadt von Osterreich.\n- Wien ist bekannt fur klassische Musik.\n- In Wien gibt es viele schone Kaffeehauser.',
        hints: ['Bruk "ist bekannt fur" (er kjent for)', 'Bruk "es gibt" (det finnes)'],
      },
    },
    {
      id: 'tysk-1-11-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (4-5 setninger) der du later som du er pa ferie i Osterrike. Fortell hva du ser og gjor.',
        solution: 'Eksempel:\nIch bin in Wien. Die Stadt ist sehr schon. Ich besuche das Schloss Schonbrunn. Dann gehe ich in ein Kaffeehaus und trinke Kaffee mit Apfelstrudel. Die Musik in Wien ist wunderbar!',
        hints: ['Bruk "Ich bin in ..." (Jeg er i ...)', 'Bruk "Ich besuche ..." (Jeg besoker ...)'],
      },
    },
    {
      id: 'tysk-1-11-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Osterrike har ca. 9 millioner innbyggere med Wien som hovedstad.
- Wien er kjent for klassisk musikk, kaffehuskultur og vakker arkitektur.
- Salzburg er Mozarts fodeby og huser en beremt musikkfestival.
- Osterriksk mat inkluderer Wiener Schnitzel og Apfelstrudel.
- Alpene dekker store deler av Osterrike og tiltrekker mange turister.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Osterreich', definition: 'Osterrike' },
    { term: 'die Alpen', definition: 'Alpene' },
    { term: 'das Kaffeehaus', definition: 'kaffehuset' },
    { term: 'das Schloss', definition: 'slottet' },
    { term: 'das Wiener Schnitzel', definition: 'wienerschnitzel' },
    { term: 'der Apfelstrudel', definition: 'eplestrudel' },
  ],
};

// ============================================================================
// Kapittel 11.3: Die Schweiz - Sveits
// ============================================================================

export const CHAPTER_TYSK_1_11_3: TextbookChapter = {
  id: 'tysk-1-11-3',
  courseId: 'tysk-1',
  chapterNumber: '11.3',
  title: 'Die Schweiz',
  subtitle: 'Sveits',
  description: 'Laer om Sveits - landet med fire sprak, sjokolade, ost og noytralitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive sveitsisk kultur og sprakmangfold',
    'kjenne til viktige fakta om Sveits',
  ],
  content: [
    {
      id: 'tysk-1-11-3-intro',
      type: 'text',
      content: `## Die Schweiz - landet med fire sprak

Sveits (die Schweiz) er et unikt land i Europa. Selv om landet bare har ca. 8,7 millioner innbyggere, har det fire offisielle sprak: **Deutsch** (tysk), **Franzosisch** (fransk), **Italienisch** (italiensk) og **Ratoromanisch** (retoromansk).

Omtrent 63 % av befolkningen snakker tysk, 23 % snakker fransk, 8 % snakker italiensk og under 1 % snakker retoromansk. Hovedstaden er **Bern**, men den storste byen er **Zurich**.`,
    },
    {
      id: 'tysk-1-11-3-def-1',
      type: 'definition',
      title: 'Viktige ord om Sveits',
      content: `| Tysk | Norsk |
|------|-------|
| die Schweiz | Sveits |
| die Schokolade | sjokoladen |
| der Kase | osten |
| die Uhr (pl. Uhren) | klokken (klokkene) |
| der Berg (pl. Berge) | fjellet |
| die Neutralitat | noytraliteten |
| der Kanton | kantonen (delstaten) |
| die Sprache | spraket |
| viersprachig | firespraklig |
| das Matterhorn | Matterhorn |`,
    },
    {
      id: 'tysk-1-11-3-text-1',
      type: 'text',
      content: `## Sveits er kjent for...

**Sjokolade (die Schokolade):** Sveits er verdensberemt for sin sjokolade. Merker som Lindt, Toblerone og Nestle kommer fra Sveits.

**Ost (der Kase):** Sveitsisk ost, spesielt Emmentaler og Gruyere, er kjent over hele verden.

**Klokker (die Uhren):** Sveitsiske klokker fra merker som Rolex, Omega og Swatch er kjent for sin kvalitet.

**Noytralitet (die Neutralitat):** Sveits har vaert noytral siden 1815 og er ikke medlem av EU. Mange internasjonale organisasjoner har hovedkvarter i Sveits, blant annet Rode Kors og FN-kontoret i Geneve.

**Fjell (die Berge):** Alpene dekker omtrent 60 % av Sveits. Matterhorn er et av verdens mest kjente fjell.`,
    },
    {
      id: 'tysk-1-11-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Fakta om Sveits',
      problem: `Oversett til norsk:
a) Die Schweiz hat vier offizielle Sprachen.
b) Schokolade aus der Schweiz ist sehr gut.
c) Die Schweiz ist neutral.`,
      solution: `a) Sveits har fire offisielle sprak.
b) Sjokolade fra Sveits er veldig god.
c) Sveits er noytral.

Merk: "aus der Schweiz" = fra Sveits. Vi bruker "der" fordi "die Schweiz" er hunkjonn, og "aus" krever dativ.`,
    },
    {
      id: 'tysk-1-11-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange offisielle sprak har Sveits?',
        options: [
          { id: 'a', text: '2', isCorrect: false },
          { id: 'b', text: '3', isCorrect: false },
          { id: 'c', text: '4', isCorrect: true },
          { id: 'd', text: '5', isCorrect: false },
        ],
        solution: 'Sveits har fire offisielle sprak: tysk, fransk, italiensk og retoromansk.',
      },
    },
    {
      id: 'tysk-1-11-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedstaden i Sveits?',
        options: [
          { id: 'a', text: 'Zurich', isCorrect: false },
          { id: 'b', text: 'Genf (Geneve)', isCorrect: false },
          { id: 'c', text: 'Basel', isCorrect: false },
          { id: 'd', text: 'Bern', isCorrect: true },
        ],
        solution: 'Bern er hovedstaden i Sveits. Zurich er den storste byen, men ikke hovedstaden.',
      },
    },
    {
      id: 'tysk-1-11-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk. Husk artikkel!',
        subTasks: [
          { label: 'a', task: 'sjokoladen', solution: 'die Schokolade' },
          { label: 'b', task: 'osten', solution: 'der Kase' },
          { label: 'c', task: 'klokken', solution: 'die Uhr' },
          { label: 'd', task: 'fjellet', solution: 'der Berg' },
        ],
        solution: 'a) die Schokolade, b) der Kase, c) die Uhr, d) der Berg',
      },
    },
    {
      id: 'tysk-1-11-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre ting Sveits er kjent for pa tysk. Bruk "Die Schweiz ist bekannt fur ..."',
        solution: 'Eksempel:\n- Die Schweiz ist bekannt fur Schokolade.\n- Die Schweiz ist bekannt fur Uhren.\n- Die Schweiz ist bekannt fur die Berge.',
        hints: ['bekannt fur = kjent for', 'Schokolade, Kase, Uhren, Berge, Neutralitat'],
      },
    },
    {
      id: 'tysk-1-11-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Sveits og Norge. Skriv 4-5 setninger pa tysk. Tenk pa: storrelse, sprak, fjell, noytralitet.',
        solution: 'Eksempel:\nDie Schweiz und Norwegen sind beide kleine Lander in Europa. Norwegen hat ungefahr 5,5 Millionen Einwohner und die Schweiz hat ungefahr 8,7 Millionen. Beide Lander haben viele Berge. Die Schweiz hat vier Sprachen, aber Norwegen hat zwei (Bokmal und Nynorsk). Die Schweiz ist neutral, aber Norwegen ist Mitglied der NATO.',
        hints: ['beide = begge', 'Mitglied = medlem'],
      },
    },
    {
      id: 'tysk-1-11-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Sveits har fire offisielle sprak: tysk, fransk, italiensk og retoromansk.
- Hovedstaden er Bern, men den storste byen er Zurich.
- Sveits er kjent for sjokolade, ost, klokker og noytralitet.
- Alpene dekker ca. 60 % av landet, med Matterhorn som det mest kjente fjellet.
- Sveits er delt inn i 26 kantoner (Kantone).`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Schweiz', definition: 'Sveits' },
    { term: 'die Schokolade', definition: 'sjokoladen' },
    { term: 'der Kase', definition: 'osten' },
    { term: 'die Uhr', definition: 'klokken' },
    { term: 'die Neutralitat', definition: 'noytraliteten' },
    { term: 'viersprachig', definition: 'firespraklig' },
  ],
};

// ============================================================================
// Kapittel 11.4: Dialekte und Varietaten - Dialekter og varianter
// ============================================================================

export const CHAPTER_TYSK_1_11_4: TextbookChapter = {
  id: 'tysk-1-11-4',
  courseId: 'tysk-1',
  chapterNumber: '11.4',
  title: 'Dialekte und Varietaten',
  subtitle: 'Dialekter og varianter',
  description: 'Laer om forskjellene mellom Hochdeutsch, osterriksk tysk og sveitsisk tysk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til at tysk har mange dialekter og varianter',
    'gjenkjenne typiske osterrikske og sveitsiske ord',
  ],
  content: [
    {
      id: 'tysk-1-11-4-intro',
      type: 'text',
      content: `## Hochdeutsch og dialekter

Pa skolen laerer du **Hochdeutsch** (standardtysk), som er det offisielle skriftspraket i alle tysktalende land. Men i dagliglivet snakker mange mennesker dialekt, spesielt i Sor-Tyskland, Osterrike og Sveits.

Akkurat som vi i Norge har bokmal, nynorsk og mange dialekter, har tysk et enormt mangfold av dialekter. En person fra Hamburg snakker helt annerledes enn en person fra Munchen eller Zurich.`,
    },
    {
      id: 'tysk-1-11-4-def-1',
      type: 'definition',
      title: 'Hilsener i ulike regioner',
      content: `Hilsener varierer mye i de tysktalende landene:

| Region | Hilsen | Betyr |
|--------|--------|-------|
| Nord-Tyskland | **Moin!** | Hei! |
| Sor-Tyskland / Osterrike | **Servus!** | Hei! / Ha det! |
| Sveits | **Gruezi!** | God dag! |
| Standard (Hochdeutsch) | **Guten Tag!** | God dag! |
| Osterrike (uformelt) | **Gruss Gott!** | Guds hilsen! |
| Ungdom overalt | **Hallo!** | Hei! |`,
    },
    {
      id: 'tysk-1-11-4-text-1',
      type: 'text',
      content: `## Ordforskjeller mellom landene

Selv om alle snakker tysk, bruker de ulike land forskjellige ord for samme ting. Her er noen eksempler:

| Hochdeutsch (standard) | Osterriksk | Sveitsisk | Norsk |
|------------------------|------------|-----------|-------|
| die Kartoffel | der Erdapfel | der Hardopfel | poteten |
| die Tomate | der Paradeiser | die Tomate | tomaten |
| das Brötchen | die Semmel | das Brötli | rundstykket |
| der Aufzug | der Lift | der Lift | heisen |
| die Treppe | die Stiege | die Treppe | trappen |
| das Fahrrad | das Rad | das Velo | sykkelen |
| lecker | gut | fein | deilig/godt |
| dieses Jahr | heuer | heuer | i ar |

Dette er litt som at vi pa norsk sier "brunost" mens noen sier "mysost", eller at nordmenn sier "pinnekjott" mens noen sier det pa andre mater.`,
    },
    {
      id: 'tysk-1-11-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Gjenkjenne varianter',
      problem: `Hvilken region horer disse hilsenene til?
a) Moin!
b) Gruezi!
c) Servus!`,
      solution: `a) **Moin!** - Nord-Tyskland (spesielt Hamburg og omegn)
b) **Gruezi!** - Sveits (fra "Gott grueze" = Gud hilse)
c) **Servus!** - Sor-Tyskland og Osterrike (fra latin "servus" = tjener)

Alle tre betyr omtrent "hei" eller "god dag", men brukes i ulike regioner.`,
    },
    {
      id: 'tysk-1-11-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken hilsen er typisk for Sveits?',
        options: [
          { id: 'a', text: 'Moin!', isCorrect: false },
          { id: 'b', text: 'Servus!', isCorrect: false },
          { id: 'c', text: 'Gruezi!', isCorrect: true },
          { id: 'd', text: 'Tschuss!', isCorrect: false },
        ],
        solution: 'Gruezi er den typiske hilsenen i den tysktalende delen av Sveits.',
      },
    },
    {
      id: 'tysk-1-11-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva heter "potet" pa osterriksk tysk?',
        options: [
          { id: 'a', text: 'die Kartoffel', isCorrect: false },
          { id: 'b', text: 'der Erdapfel', isCorrect: true },
          { id: 'c', text: 'der Hardopfel', isCorrect: false },
          { id: 'd', text: 'die Tomate', isCorrect: false },
        ],
        solution: 'I Osterrike sier man "der Erdapfel" (jord-eple) for potet, mens standardtysk er "die Kartoffel".',
      },
    },
    {
      id: 'tysk-1-11-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble det osterrikske/sveitsiske ordet med Hochdeutsch-varianten.',
        subTasks: [
          { label: 'a', task: 'die Semmel (osterriksk) = ?', solution: 'das Brotchen' },
          { label: 'b', task: 'das Velo (sveitsisk) = ?', solution: 'das Fahrrad' },
          { label: 'c', task: 'der Paradeiser (osterriksk) = ?', solution: 'die Tomate' },
          { label: 'd', task: 'der Lift (osterriksk/sveitsisk) = ?', solution: 'der Aufzug' },
        ],
        solution: 'a) das Brotchen, b) das Fahrrad, c) die Tomate, d) der Aufzug',
      },
    },
    {
      id: 'tysk-1-11-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign med norsk: Skriv ned tre eksempler pa norske dialektforskjeller som ligner pa de tyske forskjellene mellom Hochdeutsch og dialekt.',
        solution: 'Eksempel:\n- Bokmal: "ikke" vs. dialekt: "ikkje" / "itte" / "itj" (som Hochdeutsch "nicht" vs. dialekter)\n- Bokmal: "jeg" vs. dialekt: "eg" / "ae" / "jae" (som "ich" vs. dialekt "ick" / "i")\n- Bokmal: "sykkel" vs. dialekt: noen sier "travelur" (som Fahrrad vs. Velo)',
        hints: ['Tenk pa hvordan norske dialekter har ulike ord for samme ting'],
      },
    },
    {
      id: 'tysk-1-11-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-11-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort dialog (6-8 setninger) der en person fra Nord-Tyskland (bruker "Moin") moter en person fra Osterrike (bruker "Servus"). De diskuterer hva de skal spise, men bruker ulike ord (f.eks. Kartoffel vs. Erdapfel).',
        solution: 'Eksempel:\nPerson A: Moin! Wie gehts?\nPerson B: Servus! Mir gehts gut, danke!\nPerson A: Mochtest du Kartoffeln zum Mittagessen?\nPerson B: Kartoffeln? Ach, du meinst Erdapfel! Ja, gerne.\nPerson A: Und dazu ein Brotchen?\nPerson B: Bei uns sagt man Semmel! Aber ja, bitte.\nPerson A: Ihr Osterreicher habt lustige Worter!\nPerson B: Das sagen wir auch uber euch!',
        hints: ['Bruk "Moin" og "Servus" som hilsener', 'Bruk Kartoffel/Erdapfel og Brotchen/Semmel'],
      },
    },
    {
      id: 'tysk-1-11-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Hochdeutsch** er standardspraket som brukes i skrift og formelle sammenhenger.
- Hilsener varierer: **Moin** (nord), **Guten Tag** (standard), **Servus/Gruss Gott** (sor/Osterrike), **Gruezi** (Sveits).
- Mange dagligdagse ord er forskjellige i Tyskland, Osterrike og Sveits (f.eks. Kartoffel/Erdapfel/Hardopfel).
- Dialektmangfoldet i tysk ligner pa det vi har i norsk.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Hochdeutsch', definition: 'standardtysk / hoytidelig tysk' },
    { term: 'der Dialekt', definition: 'dialekten' },
    { term: 'die Varietat', definition: 'varianten (av et sprak)' },
    { term: 'Gruezi', definition: 'hei (sveitsisk)' },
    { term: 'Servus', definition: 'hei / ha det (osterriksk/sor-tysk)' },
    { term: 'Moin', definition: 'hei (nord-tysk)' },
  ],
};

// ============================================================================
// Kapittel 12.1: Deutsche Musik - Tysk musikk
// ============================================================================

export const CHAPTER_TYSK_1_12_1: TextbookChapter = {
  id: 'tysk-1-12-1',
  courseId: 'tysk-1',
  chapterNumber: '12.1',
  title: 'Deutsche Musik',
  subtitle: 'Tysk musikk',
  description: 'Laer om beremt tysk musikk - fra Beethoven og Bach til Rammstein og Nena.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til viktige tyske komponister og musikere',
    'kunne snakke om musikk pa tysk',
  ],
  content: [
    {
      id: 'tysk-1-12-1-intro',
      type: 'text',
      content: `## Deutsche Musik - fra klassisk til moderne

Tyskland har en utrolig rik musikktradisjon. Fra de store klassiske komponistene som Bach og Beethoven til moderne artister som Rammstein og Nena, har tysk musikk pavirket hele verden.

I dette kapittelet laerer du om viktige tyske musikere og ord som brukes nar vi snakker om musikk.`,
    },
    {
      id: 'tysk-1-12-1-def-1',
      type: 'definition',
      title: 'Musikkord pa tysk',
      content: `| Tysk | Norsk |
|------|-------|
| die Musik | musikken |
| das Lied (pl. Lieder) | sangen |
| der Komponist | komponisten |
| der Sanger / die Sangerin | sangeren |
| die Band | bandet |
| das Klavier | pianoet |
| die Geige | fiolinen |
| das Orchester | orkesteret |
| die Oper | operaen |
| beruhmt | beremt |`,
    },
    {
      id: 'tysk-1-12-1-text-1',
      type: 'text',
      content: `## Klassiske komponister

**Ludwig van Beethoven (1770-1827):** Fodt i Bonn, Tyskland. Skrev ni symfonier, inkludert den beremte femte symfonien (da-da-da-DAAA). Han ble dov mot slutten av livet, men fortsatte a komponere. EUs hymne er fra hans niende symfoni ("Ode an die Freude" - Ode til gleden).

**Johann Sebastian Bach (1685-1750):** Fodt i Eisenach, Tyskland. Regnes som en av historiens storste komponister. Kjent for orgelmusikk, kantater og "Die Brandenburgischen Konzerte".

## Moderne musikk

**Nena:** Tysk popsangerinne, verdenskjent for hiten **"99 Luftballons"** (1983), en sang om 99 ballonger som utloser krig.

**Rammstein:** Tysk industrirock-band fra Berlin, dannet i 1994. Kjent for kraftig musikk og spektakulaere liveshow med pyroteknikk.

**Kraftwerk:** Elektronisk musikkband fra Dusseldorf, dannet i 1970. Regnes som pionerer innen elektronisk musikk og har pavirket sjangre som techno og synthpop.`,
    },
    {
      id: 'tysk-1-12-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Snakke om musikk',
      problem: `Oversett til norsk:
a) Beethoven ist ein beruhmter Komponist.
b) Ich hore gern deutsche Musik.
c) "99 Luftballons" ist ein bekanntes Lied.`,
      solution: `a) Beethoven er en beremt komponist.
b) Jeg liker a hore pa tysk musikk.
c) "99 Luftballons" er en kjent sang.

**Ich hore gern** = Jeg liker a hore pa (gern = gjerne)
**bekannt** = kjent`,
    },
    {
      id: 'tysk-1-12-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem komponerte "Ode an die Freude" som brukes som EUs hymne?',
        options: [
          { id: 'a', text: 'Bach', isCorrect: false },
          { id: 'b', text: 'Mozart', isCorrect: false },
          { id: 'c', text: 'Beethoven', isCorrect: true },
          { id: 'd', text: 'Nena', isCorrect: false },
        ],
        solution: '"Ode an die Freude" er fra Beethovens niende symfoni og brukes som EUs hymne.',
      },
    },
    {
      id: 'tysk-1-12-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket band regnes som pionerer innen elektronisk musikk?',
        options: [
          { id: 'a', text: 'Rammstein', isCorrect: false },
          { id: 'b', text: 'Kraftwerk', isCorrect: true },
          { id: 'c', text: 'Nena', isCorrect: false },
          { id: 'd', text: 'Die Toten Hosen', isCorrect: false },
        ],
        solution: 'Kraftwerk fra Dusseldorf regnes som pionerer innen elektronisk musikk.',
      },
    },
    {
      id: 'tysk-1-12-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk. Husk artikkel!',
        subTasks: [
          { label: 'a', task: 'sangen', solution: 'das Lied' },
          { label: 'b', task: 'komponisten', solution: 'der Komponist' },
          { label: 'c', task: 'pianoet', solution: 'das Klavier' },
          { label: 'd', task: 'orkesteret', solution: 'das Orchester' },
        ],
        solution: 'a) das Lied, b) der Komponist, c) das Klavier, d) das Orchester',
      },
    },
    {
      id: 'tysk-1-12-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre setninger pa tysk om din favorittmusikk. Bruk ordene: Musik, Lied, gern horen.',
        solution: 'Eksempel:\n- Ich hore gern Popmusik.\n- Mein Lieblingslied ist "99 Luftballons".\n- Ich spiele Klavier und hore gern Beethoven.',
        hints: ['Ich hore gern ... = Jeg liker a hore pa ...', 'Mein Lieblingslied = Min favorittsang'],
      },
    },
    {
      id: 'tysk-1-12-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en tysk artist eller komponist og skriv en kort presentasjon (5-6 setninger) pa tysk. Inkluder: navn, fodested, sjanger, og hvorfor de er beremte.',
        solution: 'Eksempel:\nLudwig van Beethoven wurde 1770 in Bonn geboren. Er war ein beruhmter Komponist. Er schrieb neun Sinfonien. Die funfte Sinfonie ist sehr bekannt. Beethoven wurde taub, aber er komponierte weiter. Die "Ode an die Freude" ist die Hymne der EU.',
        hints: ['wurde ... geboren = ble fodt', 'Er war = han var', 'Er schrieb = han skrev'],
      },
    },
    {
      id: 'tysk-1-12-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Tyskland har en rik musikktradisjon fra klassisk til moderne.
- **Beethoven** og **Bach** er blant historiens storste komponister.
- **Nena** ble verdenskjent med "99 Luftballons" (1983).
- **Rammstein** er kjent for industrirock og spektakulaere liveshow.
- **Kraftwerk** var pionerer innen elektronisk musikk.
- Viktige musikkord: das Lied, der Komponist, das Klavier, die Musik.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Musik', definition: 'musikken' },
    { term: 'das Lied', definition: 'sangen' },
    { term: 'der Komponist', definition: 'komponisten' },
    { term: 'beruhmt', definition: 'beremt' },
    { term: 'das Klavier', definition: 'pianoet' },
    { term: 'das Orchester', definition: 'orkesteret' },
  ],
};

// ============================================================================
// Kapittel 12.2: Deutsches Kino - Tysk film
// ============================================================================

export const CHAPTER_TYSK_1_12_2: TextbookChapter = {
  id: 'tysk-1-12-2',
  courseId: 'tysk-1',
  chapterNumber: '12.2',
  title: 'Deutsches Kino',
  subtitle: 'Tysk film',
  description: 'Laer om beremte tyske filmer og filmhistorie - fra Fritz Lang til moderne klassikere.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til viktige tyske filmer og regissorer',
    'kunne snakke om filmer pa tysk',
  ],
  content: [
    {
      id: 'tysk-1-12-2-intro',
      type: 'text',
      content: `## Deutsches Kino - tysk filmhistorie

Tyskland har en lang og imponerende filmtradisjon. Fra de tidlige stummfilmene pa 1920-tallet til moderne prisbelemte filmer, har tysk kino pavirket verdens filmkunst.

I dette kapittelet laerer du om viktige tyske filmer og ord du trenger for a snakke om film pa tysk.`,
    },
    {
      id: 'tysk-1-12-2-def-1',
      type: 'definition',
      title: 'Filmord pa tysk',
      content: `| Tysk | Norsk |
|------|-------|
| der Film | filmen |
| das Kino | kinoen |
| der Regisseur | regissoren |
| der Schauspieler / die Schauspielerin | skuespilleren |
| der Stummfilm | stumfilmen |
| der Spielfilm | spillefilmen |
| die Handlung | handlingen |
| die Szene | scenen |
| der Preis | prisen |
| spannend | spennende |`,
    },
    {
      id: 'tysk-1-12-2-text-1',
      type: 'text',
      content: `## Beremte tyske filmer

**Fritz Lang - Metropolis (1927):** En av de forste og viktigste science fiction-filmene noensinne. Fritz Lang var en osterriksk-tysk regissor som ogsa laget "M" (1931) med Peter Lorre.

**Das Boot (1981):** En intens krigsfilm om en tysk ubatbesetning under andre verdenskrig. Regissert av Wolfgang Petersen. Filmen er kjent for sin realistiske framstilling.

**Good Bye, Lenin! (2003):** En komedie-drama om en ung mann i Ost-Berlin som prover a skjule gjenforeningen av Tyskland for sin syke mor. Filmen gir et morsomt og rornde bilde av livet i DDR.

**Das Leben der Anderen (2006):** "De andres liv" handler om Stasi-overvaking i Ost-Berlin for Berlinmurens fall. Filmen vant Oscar for beste fremmedspraklige film.`,
    },
    {
      id: 'tysk-1-12-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Snakke om film',
      problem: `Oversett til norsk:
a) "Das Boot" ist ein spannender Film.
b) Der Regisseur heisst Wolfgang Petersen.
c) Ich gehe gern ins Kino.`,
      solution: `a) "Das Boot" er en spennende film.
b) Regissoren heter Wolfgang Petersen.
c) Jeg liker a ga pa kino.

**ins Kino** = pa kino (in + das = ins i akkusativ)
**gern** = gjerne (liker a ...)`,
    },
    {
      id: 'tysk-1-12-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken tysk film vant Oscar for beste fremmedspraklige film i 2007?',
        options: [
          { id: 'a', text: 'Das Boot', isCorrect: false },
          { id: 'b', text: 'Good Bye, Lenin!', isCorrect: false },
          { id: 'c', text: 'Das Leben der Anderen', isCorrect: true },
          { id: 'd', text: 'Metropolis', isCorrect: false },
        ],
        solution: '"Das Leben der Anderen" (De andres liv) vant Oscar for beste fremmedspraklige film.',
      },
    },
    {
      id: 'tysk-1-12-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvem regisserte "Metropolis" (1927)?',
        options: [
          { id: 'a', text: 'Wolfgang Petersen', isCorrect: false },
          { id: 'b', text: 'Fritz Lang', isCorrect: true },
          { id: 'c', text: 'Wim Wenders', isCorrect: false },
          { id: 'd', text: 'Werner Herzog', isCorrect: false },
        ],
        solution: 'Fritz Lang regisserte "Metropolis" i 1927. Det er en av filmhistoriens viktigste science fiction-filmer.',
      },
    },
    {
      id: 'tysk-1-12-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk. Husk artikkel!',
        subTasks: [
          { label: 'a', task: 'filmen', solution: 'der Film' },
          { label: 'b', task: 'kinoen', solution: 'das Kino' },
          { label: 'c', task: 'regissoren', solution: 'der Regisseur' },
          { label: 'd', task: 'skuespilleren (mann)', solution: 'der Schauspieler' },
        ],
        solution: 'a) der Film, b) das Kino, c) der Regisseur, d) der Schauspieler',
      },
    },
    {
      id: 'tysk-1-12-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre setninger pa tysk om en film du liker. Bruk ordene: Film, spannend/lustig, Schauspieler.',
        solution: 'Eksempel:\n- Mein Lieblingsfilm ist "Good Bye, Lenin!".\n- Der Film ist lustig und traurig.\n- Die Schauspieler sind sehr gut.',
        hints: ['Mein Lieblingsfilm = Min favorittfilm', 'lustig = morsom, traurig = trist'],
      },
    },
    {
      id: 'tysk-1-12-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en av filmene fra kapittelet og skriv en kort anmeldelse (5-6 setninger) pa tysk. Fortell hva filmen handler om og hva du synes.',
        solution: 'Eksempel:\n"Good Bye, Lenin!" ist ein deutscher Film aus dem Jahr 2003. Die Handlung spielt in Berlin nach dem Fall der Berliner Mauer. Ein junger Mann will seiner kranken Mutter nicht sagen, dass die DDR nicht mehr existiert. Der Film ist lustig und traurig gleichzeitig. Die Schauspieler sind sehr gut. Ich empfehle den Film!',
        hints: ['Die Handlung spielt in ... = Handlingen foregaar i ...', 'Ich empfehle = Jeg anbefaler'],
      },
    },
    {
      id: 'tysk-1-12-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Tysk film har en lang tradisjon fra Fritz Langs **Metropolis** (1927).
- **Das Boot** (1981) er en beremt krigsfilm om en ubat.
- **Good Bye, Lenin!** (2003) er en komedie om gjenforeningen av Tyskland.
- **Das Leben der Anderen** (2006) vant Oscar og handler om Stasi-overvaking.
- Viktige filmord: der Film, das Kino, der Regisseur, der Schauspieler, spannend.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Film', definition: 'filmen' },
    { term: 'das Kino', definition: 'kinoen' },
    { term: 'der Regisseur', definition: 'regissoren' },
    { term: 'der Schauspieler', definition: 'skuespilleren' },
    { term: 'spannend', definition: 'spennende' },
    { term: 'die Handlung', definition: 'handlingen' },
  ],
};

// ============================================================================
// Kapittel 12.3: Comics und Literatur - Tegneserier og litteratur
// ============================================================================

export const CHAPTER_TYSK_1_12_3: TextbookChapter = {
  id: 'tysk-1-12-3',
  courseId: 'tysk-1',
  chapterNumber: '12.3',
  title: 'Comics und Literatur',
  subtitle: 'Tegneserier og litteratur',
  description: 'Laer om tysk tegneserietradisjon og litteratur - fra Grimms eventyr til Werner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til viktige tyske forfattere og tegneserier',
    'kunne snakke om boker og lesing pa tysk',
  ],
  content: [
    {
      id: 'tysk-1-12-3-intro',
      type: 'text',
      content: `## Comics und Literatur

Tyskland har en rik litteraturtradisjon og en overraskende levende tegneseriekultur. Fra brodre Grimms eventyr som alle kjenner, til morsomme tegneserier som Werner, finnes det mye spennende a utforske.

I dette kapittelet laerer du om viktige tyske boker, tegneserier og forfattere, og ord som brukes nar vi snakker om litteratur.`,
    },
    {
      id: 'tysk-1-12-3-def-1',
      type: 'definition',
      title: 'Litteraturord pa tysk',
      content: `| Tysk | Norsk |
|------|-------|
| das Buch (pl. Bucher) | boken |
| der Comic | tegneserien |
| das Marchen | eventyret |
| der Autor / die Autorin | forfatteren |
| die Geschichte | historien/fortellingen |
| der Held / die Heldin | helten/heltinnen |
| das Gedicht | diktet |
| lesen (liest, las, gelesen) | a lese |
| die Buchhandlung | bokhandelen |
| die Bibliothek | biblioteket |`,
    },
    {
      id: 'tysk-1-12-3-text-1',
      type: 'text',
      content: `## Grimms Marchen - Grimms eventyr

**Bruder Grimm** (Jacob og Wilhelm Grimm) samlet inn tyske folkeeventyr pa 1800-tallet. Mange av eventyrene vi kjenner godt, kommer fra deres samling:

- **Rotkappchen** = Rodhette
- **Schneewittchen** = Snohvit
- **Hansel und Gretel** = Hans og Grete
- **Dornroschen** = Tornerose
- **Aschenputtel** = Askepott
- **Der Froschkonig** = Froskekongen

## Der Struwwelpeter

**Der Struwwelpeter** (1845) av Heinrich Hoffmann er en beremt tysk barnebok med moralske historier. Den handler om barn som ikke oppforer seg - for eksempel "Suppenkaspar" som ikke vil spise suppen sin, og "Der Daumenlutscher" som suger pa tommelen.

## Werner

**Werner** er en populaer tysk tegneserie av Brotsel (Rötger Feldmann). Den handler om Werner, en rorleggerlaerling fra Nord-Tyskland, og hans morsomme eventyr med motorsykler, ol og venner. Tegneserien er veldig populaer i Tyskland og har ogsa blitt til flere filmer.`,
    },
    {
      id: 'tysk-1-12-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Eventyr pa tysk',
      problem: `Koble det tyske eventyrnavnet med det norske:
a) Rotkappchen
b) Schneewittchen
c) Aschenputtel`,
      solution: `a) Rotkappchen = **Rodhette** (Rot = rod, Kappchen = liten hette)
b) Schneewittchen = **Snohvit** (Schnee = sno, wittchen = hvitchen)
c) Aschenputtel = **Askepott** (Asche = aske, Puttel = en som roter i asken)

Disse eventyrene ble samlet av brodre Grimm og er kjent over hele verden.`,
    },
    {
      id: 'tysk-1-12-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem samlet inn de beremte tyske folkeeventyrene?',
        options: [
          { id: 'a', text: 'Heinrich Hoffmann', isCorrect: false },
          { id: 'b', text: 'Brodre Grimm (Bruder Grimm)', isCorrect: true },
          { id: 'c', text: 'Brotsel (Rotger Feldmann)', isCorrect: false },
          { id: 'd', text: 'Johann Wolfgang von Goethe', isCorrect: false },
        ],
        solution: 'Brodre Grimm (Jacob og Wilhelm Grimm) samlet inn tyske folkeeventyr pa 1800-tallet.',
      },
    },
    {
      id: 'tysk-1-12-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "Schneewittchen" pa norsk?',
        options: [
          { id: 'a', text: 'Rodhette', isCorrect: false },
          { id: 'b', text: 'Askepott', isCorrect: false },
          { id: 'c', text: 'Snohvit', isCorrect: true },
          { id: 'd', text: 'Tornerose', isCorrect: false },
        ],
        solution: 'Schneewittchen = Snohvit. "Schnee" betyr sno og "wittchen" betyr liten hvit.',
      },
    },
    {
      id: 'tysk-1-12-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett eventyrtitlene til norsk.',
        subTasks: [
          { label: 'a', task: 'Rotkappchen', solution: 'Rodhette' },
          { label: 'b', task: 'Hansel und Gretel', solution: 'Hans og Grete' },
          { label: 'c', task: 'Dornroschen', solution: 'Tornerose' },
          { label: 'd', task: 'Der Froschkonig', solution: 'Froskekongen' },
        ],
        solution: 'a) Rodhette, b) Hans og Grete, c) Tornerose, d) Froskekongen',
      },
    },
    {
      id: 'tysk-1-12-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk. Husk artikkel!',
        subTasks: [
          { label: 'a', task: 'boken', solution: 'das Buch' },
          { label: 'b', task: 'eventyret', solution: 'das Marchen' },
          { label: 'c', task: 'tegneserien', solution: 'der Comic' },
          { label: 'd', task: 'forfatteren (mann)', solution: 'der Autor' },
        ],
        solution: 'a) das Buch, b) das Marchen, c) der Comic, d) der Autor',
      },
    },
    {
      id: 'tysk-1-12-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort gjenfortelling av et Grimm-eventyr pa tysk (5-6 setninger). Velg for eksempel Rotkappchen (Rodhette).',
        solution: 'Eksempel (Rotkappchen):\nEs war einmal ein Madchen namens Rotkappchen. Ihre Mutter sagte: "Geh zu deiner Grossmutter!" Rotkappchen ging in den Wald. Dort traf sie den bosen Wolf. Der Wolf ging zuerst zur Grossmutter und frass sie. Dann kam Rotkappchen und der Jager rettete sie.',
        hints: ['Es war einmal = Det var en gang', 'der bose Wolf = den slemme ulven', 'der Jager = jegeren', 'rettete = reddet'],
      },
    },
    {
      id: 'tysk-1-12-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Brodre Grimm** samlet inn beremte folkeeventyr som Rotkappchen, Schneewittchen og Hansel und Gretel.
- **Der Struwwelpeter** er en klassisk tysk barnebok med moralske historier.
- **Werner** er en populaer tysk tegneserie om en rorleggerlaerling.
- Viktige litteraturord: das Buch, das Marchen, der Comic, der Autor, die Geschichte.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Buch', definition: 'boken' },
    { term: 'das Marchen', definition: 'eventyret' },
    { term: 'der Comic', definition: 'tegneserien' },
    { term: 'der Autor', definition: 'forfatteren' },
    { term: 'die Geschichte', definition: 'historien/fortellingen' },
    { term: 'lesen', definition: 'a lese' },
  ],
};

// ============================================================================
// Kapittel 12.4: Feste und Traditionen - Hoytider og tradisjoner
// ============================================================================

export const CHAPTER_TYSK_1_12_4: TextbookChapter = {
  id: 'tysk-1-12-4',
  courseId: 'tysk-1',
  chapterNumber: '12.4',
  title: 'Feste und Traditionen',
  subtitle: 'Hoytider og tradisjoner',
  description: 'Laer om tyske hoytider og tradisjoner - Oktoberfest, jul, karneval og mer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til viktige tyske hoytider og tradisjoner',
    'kunne beskrive tyske hoytider pa tysk',
  ],
  content: [
    {
      id: 'tysk-1-12-4-intro',
      type: 'text',
      content: `## Feste und Traditionen in Deutschland

Tyskland har mange spennende hoytider og tradisjoner, noen ganske forskjellige fra det vi er vant til i Norge. Fra det enorme Oktoberfest i Munchen til fargerike karnevaler og koselige julemarkeder, er det alltid noe a feire.

I dette kapittelet laerer du om de viktigste tyske hoytidene og tradisjonene.`,
    },
    {
      id: 'tysk-1-12-4-def-1',
      type: 'definition',
      title: 'Hoytidsord pa tysk',
      content: `| Tysk | Norsk |
|------|-------|
| das Fest (pl. Feste) | festen/hoytiden |
| die Tradition | tradisjonen |
| Weihnachten | jul |
| Ostern | paske |
| der Karneval | karneval |
| das Oktoberfest | Oktoberfest |
| der Nikolaustag | Nikolausdagen (6. desember) |
| der Weihnachtsmarkt | julemarkedet |
| der Adventskranz | adventskransen |
| feiern | a feire |`,
    },
    {
      id: 'tysk-1-12-4-text-1',
      type: 'text',
      content: `## Oktoberfest

**Oktoberfest** i Munchen er verdens storste folkefest. Det varer i omtrent to uker fra slutten av september til begynnelsen av oktober. Over 6 millioner mennesker besoker festivalen hvert ar. Folk kler seg i tradisjonelle klier: **Lederhosen** (skinbukser) for menn og **Dirndl** (tradisjonell kjole) for kvinner.

## Weihnachten - Jul

Tysk jul har mange fine tradisjoner:
- **Nikolaustag (6. desember):** Barna setter skoene utenfor doren, og St. Nikolaus fyller dem med godteri og smaa gaver.
- **Adventskranz:** En krans med fire lys - ett lys tennes hver sondag i advent.
- **Weihnachtsmarkt:** Julemarkeder finnes i nesten alle tyske byer. Her selges det glogg (Gluhwein), pepperkaker (Lebkuchen) og julepynt.
- **Heiligabend (24. desember):** Julaften, den viktigste juledagen i Tyskland.

## Karneval

Karneval feires spesielt i Koln, Dusseldorf og Mainz. Hoydepunktet er **Rosenmontag** (mandag for askeonsdagen). Folk kler seg ut, det er parader, musikk og mye moro.

## Ostern - Paske

Tysk paske har mange likheter med norsk paske, men ogsa noen egne tradisjoner. **Der Osterhase** (paskekaninen) gjemmer fargede egg som barna leter etter. Paskemandager er fri i Tyskland.`,
    },
    {
      id: 'tysk-1-12-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Snakke om hoytider',
      problem: `Oversett til norsk:
a) Das Oktoberfest findet in Munchen statt.
b) An Weihnachten besuchen wir den Weihnachtsmarkt.
c) Karneval ist sehr lustig.`,
      solution: `a) Oktoberfest finner sted i Munchen.
b) I jula besoker vi julemarkedet.
c) Karneval er veldig morsomt.

**findet ... statt** = finner sted (separabelt verb: stattfinden)
**an Weihnachten** = i jula`,
    },
    {
      id: 'tysk-1-12-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I hvilken by holdes Oktoberfest?',
        options: [
          { id: 'a', text: 'Berlin', isCorrect: false },
          { id: 'b', text: 'Hamburg', isCorrect: false },
          { id: 'c', text: 'Munchen', isCorrect: true },
          { id: 'd', text: 'Koln', isCorrect: false },
        ],
        solution: 'Oktoberfest holdes i Munchen (Munchen) i Bayern, sor i Tyskland.',
      },
    },
    {
      id: 'tysk-1-12-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer pa Nikolaustag (6. desember) i Tyskland?',
        options: [
          { id: 'a', text: 'Man pynter juletreet', isCorrect: false },
          { id: 'b', text: 'Barna setter ut sko og far godteri av St. Nikolaus', isCorrect: true },
          { id: 'c', text: 'Man feirer karneval', isCorrect: false },
          { id: 'd', text: 'Man pakker opp julegaver', isCorrect: false },
        ],
        solution: 'Pa Nikolaustag (6. desember) setter barna skoene utenfor doren, og St. Nikolaus fyller dem med godteri og smaa gaver.',
      },
    },
    {
      id: 'tysk-1-12-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'jul', solution: 'Weihnachten' },
          { label: 'b', task: 'paske', solution: 'Ostern' },
          { label: 'c', task: 'julemarkedet', solution: 'der Weihnachtsmarkt' },
          { label: 'd', task: 'a feire', solution: 'feiern' },
        ],
        solution: 'a) Weihnachten, b) Ostern, c) der Weihnachtsmarkt, d) feiern',
      },
    },
    {
      id: 'tysk-1-12-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign tysk og norsk jul. Skriv 3-4 setninger pa tysk om likheter og forskjeller.',
        solution: 'Eksempel:\nIn Deutschland und Norwegen feiert man Weihnachten am 24. Dezember. In Deutschland gibt es Weihnachtsmarkte, aber in Norwegen nicht so viele. In Deutschland bringt der Weihnachtsmann oder das Christkind die Geschenke. In Norwegen bringt der "Julenisse" die Geschenke.',
        hints: ['man feiert = man feirer', 'die Geschenke = gavene', 'es gibt = det finnes'],
      },
    },
    {
      id: 'tysk-1-12-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-12-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en tysk hoytid (Oktoberfest, Weihnachten, Karneval eller Ostern) og skriv en kort tekst (5-6 setninger) pa tysk der du beskriver hoytiden. Inkluder: nar den feires, hvor, og hva folk gjor.',
        solution: 'Eksempel (Karneval):\nKarneval ist ein grosses Fest in Deutschland. Man feiert Karneval vor allem in Koln, Dusseldorf und Mainz. Der wichtigste Tag ist Rosenmontag. Die Menschen verkleiden sich und es gibt grosse Umzuge in den Strassen. Alle tanzen, singen und haben Spass. Karneval ist bunt und lustig!',
        hints: ['sich verkleiden = a kle seg ut', 'der Umzug = paraden', 'bunt = fargerik', 'Spass haben = ha det goy'],
      },
    },
    {
      id: 'tysk-1-12-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Oktoberfest** i Munchen er verdens storste folkefest med over 6 millioner besokende.
- **Weihnachten** (jul) har mange tradisjoner: Nikolaustag, Adventskranz, Weihnachtsmarkt og Heiligabend.
- **Karneval** feires spesielt i Koln med kostymer, parader og musikk.
- **Ostern** (paske) har tradisjonen med Osterhase (paskekaninen) og fargede egg.
- Viktige hoytidsord: das Fest, feiern, die Tradition, der Weihnachtsmarkt.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Fest', definition: 'festen/hoytiden' },
    { term: 'Weihnachten', definition: 'jul' },
    { term: 'Ostern', definition: 'paske' },
    { term: 'der Karneval', definition: 'karneval' },
    { term: 'das Oktoberfest', definition: 'Oktoberfest' },
    { term: 'feiern', definition: 'a feire' },
    { term: 'der Weihnachtsmarkt', definition: 'julemarkedet' },
  ],
};

// ============================================================================
// Kapittel 13.1: Speisekarten lesen - Lese menyer
// ============================================================================

export const CHAPTER_TYSK_1_13_1: TextbookChapter = {
  id: 'tysk-1-13-1',
  courseId: 'tysk-1',
  chapterNumber: '13.1',
  title: 'Speisekarten lesen',
  subtitle: 'Lese menyer',
  description: 'Laer a lese tyske restaurantmenyer - fra Vorspeise til Nachspeise, med viktig matvokabular.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forsta oppbyggingen av en tysk meny',
    'kjenne til viktige mat- og drikkeord pa tysk',
  ],
  content: [
    {
      id: 'tysk-1-13-1-intro',
      type: 'text',
      content: `## Speisekarten lesen - a lese menyer

Nar du besoker en restaurant i Tyskland, Osterrike eller Sveits, far du en **Speisekarte** (meny). Tyske menyer er vanligvis delt inn i flere kategorier: forrett, hovedrett, dessert, tilbehor og drikke.

A forsta en meny er en nyttig ferdighet - bade for reiser og for a laere matord pa tysk. I dette kapittelet laerer du a lese og forsta en ekte tysk meny.`,
    },
    {
      id: 'tysk-1-13-1-def-1',
      type: 'definition',
      title: 'Menyord pa tysk',
      content: `| Tysk | Norsk |
|------|-------|
| die Speisekarte | menyen |
| die Vorspeise | forretten |
| das Hauptgericht | hovedretten |
| die Nachspeise / das Dessert | desserten |
| die Beilage | tilbehoret |
| das Getrank (pl. Getranke) | drikken |
| die Tagessuppe | dagens suppe |
| der Preis | prisen |
| bestellen | a bestille |
| die Rechnung | regningen |`,
    },
    {
      id: 'tysk-1-13-1-text-1',
      type: 'text',
      content: `## En typisk tysk meny

Her er et eksempel pa en meny fra en tysk restaurant:

---

**Gasthof zum Goldenen Adler**

**Vorspeisen** (Forretter)
- Tagessuppe .......................... 4,50 EUR
- Gemischter Salat ................... 6,90 EUR
- Bruschetta mit Tomaten ............ 7,50 EUR

**Hauptgerichte** (Hovedretter)
- Wiener Schnitzel mit Pommes ....... 14,90 EUR
- Bratwurst mit Sauerkraut .......... 11,50 EUR
- Schweinebraten mit Knodel ......... 15,90 EUR
- Rindergulasch mit Brot ............. 13,50 EUR
- Gebratener Lachs mit Reis ......... 16,90 EUR

**Beilagen** (Tilbehor)
- Pommes frites ....................... 3,50 EUR
- Kartoffelsalat ...................... 3,90 EUR
- Reis ................................. 2,90 EUR

**Nachspeisen** (Desserter)
- Apfelstrudel mit Sahne ............. 6,50 EUR
- Schokoladenkuchen .................. 5,90 EUR
- Eis (3 Kugeln) ..................... 4,50 EUR

**Getranke** (Drikke)
- Mineralwasser (0,3 l) .............. 2,50 EUR
- Apfelsaft (0,3 l) .................. 3,20 EUR
- Cola (0,3 l) ........................ 3,00 EUR
- Bier vom Fass (0,5 l) .............. 4,50 EUR
- Kaffee ............................... 2,90 EUR

---

Legg merke til at prisene er i euro (EUR) og at porsjonsstorrelse ofte star i parentes.`,
    },
    {
      id: 'tysk-1-13-1-def-2',
      type: 'definition',
      title: 'Viktige matord fra menyen',
      content: `| Tysk | Norsk |
|------|-------|
| das Schnitzel | schnitzelen |
| die Bratwurst | stekt polse |
| das Sauerkraut | surkalen |
| der Schweinebraten | svinestek |
| der Knodel | potetball/knoedel |
| der Lachs | laksen |
| der Reis | risen |
| die Pommes (frites) | pommes frites |
| die Sahne | floten |
| das Eis | isen (iskrem) |
| das Mineralwasser | mineralvann |
| der Apfelsaft | eplejuice |`,
    },
    {
      id: 'tysk-1-13-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Forsta menyen',
      problem: `Se pa menyen ovenfor og svar:
a) Hva koster Wiener Schnitzel mit Pommes?
b) Hvilke desserter tilbys?
c) Hva betyr "Gemischter Salat"?`,
      solution: `a) Wiener Schnitzel mit Pommes koster **14,90 EUR**.
b) Dessertene er: **Apfelstrudel mit Sahne** (6,50 EUR), **Schokoladenkuchen** (5,90 EUR) og **Eis** med 3 kuler (4,50 EUR).
c) "Gemischter Salat" betyr **blandet salat** (gemischt = blandet, der Salat = salaten).`,
    },
    {
      id: 'tysk-1-13-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "die Vorspeise" pa norsk?',
        options: [
          { id: 'a', text: 'Hovedrett', isCorrect: false },
          { id: 'b', text: 'Forrett', isCorrect: true },
          { id: 'c', text: 'Dessert', isCorrect: false },
          { id: 'd', text: 'Tilbehor', isCorrect: false },
        ],
        solution: '"Die Vorspeise" betyr forrett. "Vor" betyr for, og "Speise" betyr mat/rett.',
      },
    },
    {
      id: 'tysk-1-13-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Pa menyen ovenfor: Hva er den dyreste hovedretten?',
        options: [
          { id: 'a', text: 'Bratwurst mit Sauerkraut (11,50 EUR)', isCorrect: false },
          { id: 'b', text: 'Wiener Schnitzel mit Pommes (14,90 EUR)', isCorrect: false },
          { id: 'c', text: 'Gebratener Lachs mit Reis (16,90 EUR)', isCorrect: true },
          { id: 'd', text: 'Schweinebraten mit Knodel (15,90 EUR)', isCorrect: false },
        ],
        solution: 'Gebratener Lachs mit Reis (stekt laks med ris) er den dyreste hovedretten til 16,90 EUR.',
      },
    },
    {
      id: 'tysk-1-13-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett menykategoriene til tysk.',
        subTasks: [
          { label: 'a', task: 'forretter', solution: 'Vorspeisen' },
          { label: 'b', task: 'hovedretter', solution: 'Hauptgerichte' },
          { label: 'c', task: 'desserter', solution: 'Nachspeisen' },
          { label: 'd', task: 'drikke', solution: 'Getranke' },
          { label: 'e', task: 'tilbehor', solution: 'Beilagen' },
        ],
        solution: 'a) Vorspeisen, b) Hauptgerichte, c) Nachspeisen, d) Getranke, e) Beilagen',
      },
    },
    {
      id: 'tysk-1-13-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du er pa restaurant. Regn ut totalprisen for dette maltider: Tagessuppe, Schweinebraten mit Knodel, Schokoladenkuchen og en Apfelsaft. Skriv bestillingen pa tysk: "Ich mochte bitte ..."',
        solution: 'Tagessuppe (4,50) + Schweinebraten mit Knodel (15,90) + Schokoladenkuchen (5,90) + Apfelsaft (3,20) = **29,50 EUR**\n\n"Ich mochte bitte eine Tagessuppe, dann den Schweinebraten mit Knodel, einen Schokoladenkuchen und einen Apfelsaft."',
        hints: ['Ich mochte bitte ... = Jeg vil gjerne ha ...', 'Husk a legge sammen prisene'],
      },
    },
    {
      id: 'tysk-1-13-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag din egen lille meny pa tysk med minst 2 forretter, 3 hovedretter, 2 desserter og 3 drikker. Gi restauranten et tysk navn og sett priser i euro.',
        solution: 'Eksempel:\n\n**Restaurant Zum Baren**\n\nVorspeisen:\n- Tomatensuppe .......... 5,00 EUR\n- Brot mit Butter ....... 3,50 EUR\n\nHauptgerichte:\n- Hamburger mit Pommes .. 12,90 EUR\n- Pizza Margherita ...... 10,50 EUR\n- Hahnchen mit Reis ..... 13,90 EUR\n\nNachspeisen:\n- Vanilleeis ............ 4,00 EUR\n- Obstsalat ............. 5,50 EUR\n\nGetranke:\n- Wasser ................ 2,00 EUR\n- Orangensaft ........... 3,50 EUR\n- Kaffee ................ 2,90 EUR',
        hints: ['Bruk ordene du har laert', 'Se pa eksempelmenyen for inspirasjon'],
      },
    },
    {
      id: 'tysk-1-13-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- En tysk **Speisekarte** (meny) er delt inn i: **Vorspeisen** (forretter), **Hauptgerichte** (hovedretter), **Nachspeisen** (desserter), **Beilagen** (tilbehor) og **Getranke** (drikke).
- Typiske tyske retter inkluderer Wiener Schnitzel, Bratwurst, Schweinebraten og Apfelstrudel.
- For a bestille sier du: **"Ich mochte bitte ..."** (Jeg vil gjerne ha ...).
- For a be om regningen: **"Die Rechnung, bitte!"** (Regningen, takk!).`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Speisekarte', definition: 'menyen' },
    { term: 'die Vorspeise', definition: 'forretten' },
    { term: 'das Hauptgericht', definition: 'hovedretten' },
    { term: 'die Nachspeise', definition: 'desserten' },
    { term: 'die Beilage', definition: 'tilbehoret' },
    { term: 'das Getrank', definition: 'drikken' },
    { term: 'bestellen', definition: 'a bestille' },
    { term: 'die Rechnung', definition: 'regningen' },
  ],
};

// ============================================================================
// Kapittel 13.2: Fahrplane lesen - Lese rutetabeller
// ============================================================================

export const CHAPTER_TYSK_1_13_2: TextbookChapter = {
  id: 'tysk-1-13-2',
  courseId: 'tysk-1',
  chapterNumber: '13.2',
  title: 'Fahrplane lesen',
  subtitle: 'Lese rutetabeller',
  description: 'Laer a lese tyske togrutetabeller - Deutsche Bahn, avganger, ankomster og togtyper.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forsta en tysk rutetabell for tog',
    'kjenne til viktige reiseord knyttet til tog og offentlig transport',
  ],
  content: [
    {
      id: 'tysk-1-13-2-intro',
      type: 'text',
      content: `## Fahrplane lesen - a lese rutetabeller

I Tyskland er toget et av de viktigste transportmidlene. **Deutsche Bahn** (DB) er det tyske jernbaneselskapet, og det har et enormt nettverk av tog som dekker hele landet. Nar du reiser med tog i Tyskland, ma du kunne lese en **Fahrplan** (rutetabell).

I dette kapittelet laerer du a forsta avgangstider, ankomsttider, spornumre og togtyper.`,
    },
    {
      id: 'tysk-1-13-2-def-1',
      type: 'definition',
      title: 'Togord pa tysk',
      content: `| Tysk | Norsk |
|------|-------|
| der Fahrplan | rutetabellen |
| die Abfahrt | avgangen |
| die Ankunft | ankomsten |
| das Gleis | sporet/plattformen |
| der Zug | toget |
| der Bahnhof | togstasjonen |
| der Hauptbahnhof (Hbf) | hovedjernbanestasjonen |
| umsteigen | a bytte (tog) |
| die Fahrkarte | togbilletten |
| die Verspatung | forsinkelsen |`,
    },
    {
      id: 'tysk-1-13-2-text-1',
      type: 'text',
      content: `## Togtyper i Tyskland

Deutsche Bahn har flere typer tog:

| Forkortelse | Fullt navn | Beskrivelse |
|-------------|-----------|-------------|
| **ICE** | InterCity Express | Hoyhastighets fjerntoget (opp til 300 km/t) |
| **IC** | InterCity | Fjerntoget mellom store byer |
| **RE** | Regional-Express | Regionalt hurtigtog |
| **RB** | Regionalbahn | Regionalt tog (stopper oftere) |
| **S** | S-Bahn | Forstadstog i storre byer |

## Eksempel pa en rutetabell

Her er en rutetabell for togreisen **Berlin Hbf til Munchen Hbf**:

| Tog | Abfahrt | Ankunft | Dauer | Umsteigen | Gleis |
|-----|---------|---------|-------|-----------|-------|
| ICE 1001 | 06:15 | 10:22 | 4t 07min | 0 | 8 |
| ICE 1505 | 08:30 | 12:45 | 4t 15min | 0 | 11 |
| IC 2067 / RE 340 | 09:00 | 14:35 | 5t 35min | 1 (Nurnberg) | 5 |
| ICE 1209 | 12:00 | 16:12 | 4t 12min | 0 | 14 |

**Dauer** = varighet, **Umsteigen** = antall bytter`,
    },
    {
      id: 'tysk-1-13-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese rutetabellen',
      problem: `Bruk rutetabellen ovenfor til a svare:
a) Nar gar det forste toget fra Berlin til Munchen?
b) Hvilket tog er raskest?
c) Hvilket tog krever bytte, og hvor ma du bytte?`,
      solution: `a) Det forste toget gar kl. **06:15** (ICE 1001).
b) Det raskeste toget er **ICE 1001** med en reisetid pa 4 timer og 7 minutter.
c) **IC 2067 / RE 340** krever ett bytte i **Nurnberg**. Reisetiden er 5 timer og 35 minutter.

Tips: Direkte tog (0 Umsteigen) er vanligvis raskere, men kan vaere dyrere.`,
    },
    {
      id: 'tysk-1-13-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "die Abfahrt"?',
        options: [
          { id: 'a', text: 'Ankomsten', isCorrect: false },
          { id: 'b', text: 'Avgangen', isCorrect: true },
          { id: 'c', text: 'Sporet', isCorrect: false },
          { id: 'd', text: 'Billetten', isCorrect: false },
        ],
        solution: '"Die Abfahrt" betyr avgangen. "Ab" betyr bort/fra, og "Fahrt" betyr tur/reise.',
      },
    },
    {
      id: 'tysk-1-13-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er et ICE-tog?',
        options: [
          { id: 'a', text: 'Et forstadstog i byene', isCorrect: false },
          { id: 'b', text: 'Et regionalt tog som stopper ofte', isCorrect: false },
          { id: 'c', text: 'Et hoyhastighets fjerntog', isCorrect: true },
          { id: 'd', text: 'Et nattog', isCorrect: false },
        ],
        solution: 'ICE (InterCity Express) er Tysklands hoyhastighets fjerntog som kan kjore opp til 300 km/t.',
      },
    },
    {
      id: 'tysk-1-13-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'rutetabellen', solution: 'der Fahrplan' },
          { label: 'b', task: 'togstasjonen', solution: 'der Bahnhof' },
          { label: 'c', task: 'sporet', solution: 'das Gleis' },
          { label: 'd', task: 'a bytte (tog)', solution: 'umsteigen' },
          { label: 'e', task: 'forsinkelsen', solution: 'die Verspatung' },
        ],
        solution: 'a) der Fahrplan, b) der Bahnhof, c) das Gleis, d) umsteigen, e) die Verspatung',
      },
    },
    {
      id: 'tysk-1-13-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Se pa rutetabellen i kapittelet. Du vil komme til Munchen for kl. 13:00. Hvilket tog bor du ta? Skriv svaret som en hel setning pa tysk: "Ich nehme den ... um ... Uhr."',
        solution: 'Jeg ma ta ICE 1001 (avgang 06:15, ankomst 10:22) eller ICE 1505 (avgang 08:30, ankomst 12:45).\n\n"Ich nehme den ICE 1505 um 08:30 Uhr. Er kommt um 12:45 Uhr in Munchen an."',
        hints: ['Ich nehme den ... = Jeg tar ...', 'ankommen = a ankomme (separabelt verb)'],
      },
    },
    {
      id: 'tysk-1-13-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en dialog (6-8 setninger) pa tysk mellom en reisende og en person i billettluken (am Schalter). Den reisende vil kjope en billett fra Hamburg til Berlin. Bruk ordene: Fahrkarte, Abfahrt, Gleis, ICE.',
        solution: 'Eksempel:\nReisender: Guten Tag! Ich mochte eine Fahrkarte nach Berlin, bitte.\nAngestellter: Gern! Wann mochten Sie fahren?\nReisender: Heute Nachmittag, bitte.\nAngestellter: Es gibt einen ICE um 14:30 Uhr. Die Ankunft in Berlin ist um 16:15 Uhr.\nReisender: Gut. Von welchem Gleis fahrt der Zug ab?\nAngestellter: Der Zug fahrt von Gleis 7 ab.\nReisender: Was kostet die Fahrkarte?\nAngestellter: 59 Euro. Hier bitte, gute Reise!',
        hints: ['am Schalter = i luken', 'Wann mochten Sie fahren? = Nar onsker De a reise?', 'gute Reise = god reise'],
      },
    },
    {
      id: 'tysk-1-13-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Deutsche Bahn (DB)** er det tyske jernbaneselskapet med togtyper som ICE, IC, RE, RB og S-Bahn.
- En **Fahrplan** (rutetabell) viser Abfahrt (avgang), Ankunft (ankomst), Gleis (spor) og Umsteigen (bytter).
- **ICE** er det raskeste toget, mens **RB** stopper ved flest stasjoner.
- Pa stasjonen kjoper du en **Fahrkarte** (billett) og sjekker hvilket **Gleis** (spor) toget gar fra.
- **Hbf** er forkortelsen for **Hauptbahnhof** (hovedjernbanestasjon).`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Fahrplan', definition: 'rutetabellen' },
    { term: 'die Abfahrt', definition: 'avgangen' },
    { term: 'die Ankunft', definition: 'ankomsten' },
    { term: 'das Gleis', definition: 'sporet/plattformen' },
    { term: 'umsteigen', definition: 'a bytte (tog)' },
    { term: 'die Fahrkarte', definition: 'togbilletten' },
    { term: 'der Hauptbahnhof', definition: 'hovedjernbanestasjonen' },
  ],
};

// ============================================================================
// Kapittel 13.3: Kleinanzeigen - Smaannonser
// ============================================================================

export const CHAPTER_TYSK_1_13_3: TextbookChapter = {
  id: 'tysk-1-13-3',
  courseId: 'tysk-1',
  chapterNumber: '13.3',
  title: 'Kleinanzeigen',
  subtitle: 'Smaannonser',
  description: 'Laer a lese tyske smaannonser - bolig, jobb og kjop/salg med typiske forkortelser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forsta oppbyggingen av tyske smaannonser',
    'kjenne til vanlige forkortelser i tyske annonser',
  ],
  content: [
    {
      id: 'tysk-1-13-3-intro',
      type: 'text',
      content: `## Kleinanzeigen - smaannonser

**Kleinanzeigen** (smaannonser) er korte annonser der folk tilbyr eller soker etter boliger, jobber, ting til salgs og mye mer. I Tyskland er **eBay Kleinanzeigen** (na "Kleinanzeigen") en av de mest populaere plattformene.

Tyske smaannonser bruker mange **forkortelser** (Abkurzungen) for a spare plass. I dette kapittelet laerer du a lese og forsta disse annonsene.`,
    },
    {
      id: 'tysk-1-13-3-def-1',
      type: 'definition',
      title: 'Viktige annonseord og forkortelser',
      content: `**Boligannonser:**

| Forkortelse / Ord | Fullt ord | Norsk |
|-------------------|-----------|-------|
| die Wohnung (Whg.) | die Wohnung | leiligheten |
| das Zimmer (Zi.) | das Zimmer | rommet |
| die Miete | die Miete | husleien |
| die Kaution (KT) | die Kaution | depositumet |
| die Nebenkosten (NK) | die Nebenkosten | tilleggskostnadene |
| Kaltmiete (KM) | Kaltmiete | husleie uten strom/varme |
| Warmmiete (WM) | Warmmiete | husleie inkludert strom/varme |
| qm / m² | Quadratmeter | kvadratmeter |
| EG / OG / DG | Erdgeschoss / Obergeschoss / Dachgeschoss | 1. etasje / overetasje / loftsetasje |
| mobliert (mobl.) | mobliert | mobert |
| ab sofort | ab sofort | fra umiddelbart |

**Kjop/salg:**

| Tysk | Norsk |
|------|-------|
| verkaufen (VB) | selge (forhandlingsbar) |
| kaufen | kjope |
| der Preis | prisen |
| Verhandlungsbasis (VB) | forhandlingsbasis |
| gebraucht | brukt |
| neu | ny |`,
    },
    {
      id: 'tysk-1-13-3-text-1',
      type: 'text',
      content: `## Eksempler pa smaannonser

**Boligannonse:**

> **2-Zi.-Whg. in Berlin-Kreuzberg**
> Schone 2-Zimmer-Wohnung, 55 qm, 3. OG, Balkon, Einbaukuche. KM 650 EUR + NK 150 EUR. KT 1.950 EUR. Ab 01.04. Kontakt: Herr Muller, Tel. 030-12345678.

Oversatt: Pen 2-roms leilighet, 55 kvm, 3. etasje, balkong, integrert kjokken. Husleie 650 EUR + tilleggskostnader 150 EUR. Depositum 1.950 EUR. Fra 1. april.

**Jobbannonse:**

> **Kellner/in gesucht!**
> Restaurant "Zum Baren" sucht Kellner/in fur Teilzeitarbeit. 20 Std./Woche, Erfahrung erwunscht. Bewerbung an: info@zumbaeren.de

Oversatt: Servitor/servitrse sokes! Restaurant "Zum Baren" soker servitor for deltidsarbeid. 20 timer i uken, erfaring onsket.

**Salgsannonse:**

> **Fahrrad zu verkaufen**
> Damenfahrrad, 28 Zoll, blau, gebraucht aber gut. Preis: 120 EUR VB. Abholung in Munchen. Tel. 0176-98765432.

Oversatt: Damesykkel, 28 tommer, bla, brukt men god. Pris: 120 EUR forhandlingsbar. Henting i Munchen.`,
    },
    {
      id: 'tysk-1-13-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Tolke en boligannonse',
      problem: `Les annonsen og svar pa sporsmalene:

"3-Zi.-Whg., 72 qm, EG, mobl., KM 800 EUR + NK 200 EUR, ab sofort"

a) Hvor mange rom har leiligheten?
b) Hvor stor er den?
c) Hva er total manedlig husleie (KM + NK)?`,
      solution: `a) Leiligheten har **3 rom** (3-Zi. = 3 Zimmer).
b) Den er **72 kvadratmeter** (72 qm).
c) Total manedlig husleie er **800 + 200 = 1.000 EUR** (KM 800 + NK 200).

Ekstra info: "EG" betyr Erdgeschoss (1. etasje), "mobl." betyr mobliert (mobert), og "ab sofort" betyr fra umiddelbart (ledig na).`,
    },
    {
      id: 'tysk-1-13-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr forkortelsen "Whg."?',
        options: [
          { id: 'a', text: 'Waschmaschine (vaskemaskin)', isCorrect: false },
          { id: 'b', text: 'Wohnung (leilighet)', isCorrect: true },
          { id: 'c', text: 'Wohngemeinschaft (bokollektiv)', isCorrect: false },
          { id: 'd', text: 'Wohnhaus (boligblokk)', isCorrect: false },
        ],
        solution: '"Whg." er forkortelsen for "Wohnung" som betyr leilighet.',
      },
    },
    {
      id: 'tysk-1-13-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom Kaltmiete (KM) og Warmmiete (WM)?',
        options: [
          { id: 'a', text: 'KM er for store leiligheter, WM er for smaa', isCorrect: false },
          { id: 'b', text: 'KM er husleie uten tilleggskostnader, WM inkluderer tillegg', isCorrect: true },
          { id: 'c', text: 'KM er manedsleie, WM er arsleie', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
        ],
        solution: 'Kaltmiete (KM) er den "kalde" husleien uten strom, varme og vann. Warmmiete (WM) er den "varme" husleien der alt er inkludert.',
      },
    },
    {
      id: 'tysk-1-13-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett forkortelsene til fullt tysk ord og norsk oversettelse.',
        subTasks: [
          { label: 'a', task: 'Zi.', solution: 'Zimmer = rom' },
          { label: 'b', task: 'NK', solution: 'Nebenkosten = tilleggskostnader' },
          { label: 'c', task: 'EG', solution: 'Erdgeschoss = 1. etasje' },
          { label: 'd', task: 'VB', solution: 'Verhandlungsbasis = forhandlingsbasis' },
        ],
        solution: 'a) Zimmer = rom, b) Nebenkosten = tilleggskostnader, c) Erdgeschoss = 1. etasje, d) Verhandlungsbasis = forhandlingsbasis',
      },
    },
    {
      id: 'tysk-1-13-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les denne annonsen og svar pa sporsmalene pa tysk:\n\n"Fahrrad zu verkaufen. Herrenrad, schwarz, gebraucht, 2 Jahre alt. Preis: 200 EUR VB. Kontakt: 0151-11223344."\n\na) Was wird verkauft? (Hva selges?)\nb) Welche Farbe hat es? (Hvilken farge?)\nc) Wie viel kostet es? (Hvor mye koster det?)',
        solution: 'a) Ein Herrenrad wird verkauft. (En herresykkel selges.)\nb) Es ist schwarz. (Den er svart.)\nc) Es kostet 200 EUR Verhandlungsbasis. (Den koster 200 EUR, forhandlingsbar.)',
        hints: ['Was = hva, Welche Farbe = hvilken farge, Wie viel = hvor mye'],
      },
    },
    {
      id: 'tysk-1-13-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv din egen smaannonse pa tysk. Velg en av disse: a) Du vil leie ut et rom i leiligheten din, b) Du vil selge en gjenstand (telefon, sykkel, osv.), c) Du soker en deltidsjobb. Bruk forkortelser der det passer.',
        solution: 'Eksempel (selge telefon):\n\n"iPhone 14 zu verkaufen\nGebraucht, 1 Jahr alt, 128 GB, schwarz, sehr guter Zustand. Originalverpackung und Ladekabel dabei. Preis: 450 EUR VB. Abholung in Berlin oder Versand moglich. Kontakt: 0170-55566677."',
        hints: ['zu verkaufen = til salgs', 'gebraucht = brukt', 'der Zustand = tilstanden', 'Abholung = henting', 'Versand = forsendelse'],
      },
    },
    {
      id: 'tysk-1-13-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Kleinanzeigen** (smaannonser) brukes til a selge, kjope, leie bolig og soke jobb i Tyskland.
- Boligannonser bruker forkortelser: **Zi.** (rom), **KM** (kaldleie), **NK** (tillegg), **qm** (kvm), **EG/OG/DG** (etasje).
- **VB** (Verhandlungsbasis) betyr at prisen er forhandlingsbar.
- **Kaltmiete** er husleie uten tillegg, **Warmmiete** inkluderer strom, varme og vann.
- For a forsta annonser ma du kjenne til forkortelsene og typisk annonsestruktur.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Kleinanzeige', definition: 'smaannonsen' },
    { term: 'die Wohnung', definition: 'leiligheten' },
    { term: 'die Miete', definition: 'husleien' },
    { term: 'verkaufen', definition: 'a selge' },
    { term: 'kaufen', definition: 'a kjope' },
    { term: 'gebraucht', definition: 'brukt' },
    { term: 'die Kaution', definition: 'depositumet' },
    { term: 'die Nebenkosten', definition: 'tilleggskostnadene' },
  ],
};

// ============================================================================
// Kapittel 13.4: Gedichte und Lieder - Dikt og sanger
// ============================================================================

export const CHAPTER_TYSK_1_13_4: TextbookChapter = {
  id: 'tysk-1-13-4',
  courseId: 'tysk-1',
  chapterNumber: '13.4',
  title: 'Gedichte und Lieder',
  subtitle: 'Dikt og sanger',
  description: 'Laer om enkle tyske dikt og sanger, diminutiver med -chen/-lein, og Goethes "Heidenroslein".',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forsta enkle tyske dikt',
    'kjenne til diminutivene -chen og -lein i tysk',
  ],
  content: [
    {
      id: 'tysk-1-13-4-intro',
      type: 'text',
      content: `## Gedichte und Lieder - dikt og sanger

Tyskland har en lang tradisjon for poesi og sang. Beremte diktere som **Goethe**, **Schiller** og **Heine** har skrevet noen av verdenslitteraturens mest kjente dikt. Mange tyske dikt har ogsa blitt til sanger.

I dette kapittelet leser vi enkle tyske dikt, laerer om diminutiver (-chen/-lein), og ser pa Goethes beremte dikt "Heidenroslein".`,
    },
    {
      id: 'tysk-1-13-4-def-1',
      type: 'definition',
      title: 'Diktord pa tysk',
      content: `| Tysk | Norsk |
|------|-------|
| das Gedicht (pl. Gedichte) | diktet |
| das Lied (pl. Lieder) | sangen |
| der Dichter / die Dichterin | dikteren |
| der Vers | verset |
| der Reim | rimet |
| die Strophe | strofen |
| sich reimen | a rime |
| die Bedeutung | betydningen |
| das Volkslied | folkesangen |
| die Poesie | poesien |`,
    },
    {
      id: 'tysk-1-13-4-text-1',
      type: 'text',
      content: `## Diminutiver: -chen og -lein

I tysk kan du gjore noe lite og sodt ved a legge til **-chen** eller **-lein** pa slutten av et substantiv. Dette kalles **diminutiv** (forminskelsesform). Alle diminutiver er **intetkjonn (das)**.

| Grunnord | Med -chen | Med -lein | Norsk |
|----------|-----------|-----------|-------|
| die Blume (blomsten) | das Blumchen | das Blumlein | den lille blomsten |
| das Haus (huset) | das Hauschen | das Hauslein | det lille huset |
| der Vogel (fuglen) | das Vogelchen | das Voglein | den lille fuglen |
| die Rose (rosen) | das Roschen | das Roslein | den lille rosen |
| das Brot (brodet) | das Brotchen | - | rundstykket (det lille brodet) |
| das Kind (barnet) | das Kindchen | das Kindlein | det lille barnet |

**Regler:**
- Diminutiver far ofte omlyd (a -> a, o -> o, u -> u): Haus -> Hauschen
- Alle diminutiver er **das** (intetkjonn), uansett opprinnelig kjonn
- **-chen** er mest brukt i dagligtale, **-lein** er mer poetisk/gammeldags
- Noen diminutiver brukes som egne ord: das Brotchen (rundstykke), das Madchen (jente)`,
    },
    {
      id: 'tysk-1-13-4-text-2',
      type: 'text',
      content: `## Goethes "Heidenroslein"

Johann Wolfgang von Goethe (1749-1832) er Tysklands mest beremte dikter. Her er hans kjente dikt "Heidenroslein" (Den lille lyng-rosen):

---

**Heidenroslein** (1799)
*av Johann Wolfgang von Goethe*

Sah ein Knab ein Roslein stehn,
Roslein auf der Heiden,
War so jung und morgenschon,
Lief er schnell, es nah zu sehn,
Sahs mit vielen Freuden.
Roslein, Roslein, Roslein rot,
Roslein auf der Heiden.

---

**Oversettelse av forste strofe:**

En gutt sa en liten rose sta,
liten rose pa heden (lyngen),
den var sa ung og vakker som morgen,
han lop raskt for a se den naerme,
sa den med stor glede.
Lille rose, lille rose, lille rose rod,
lille rose pa heden.

**Ordforklaring:**
- **Sah** = sa (preteritum av "sehen")
- **der Knab(e)** = gutten
- **das Roslein** = den lille rosen (diminutiv av Rose)
- **die Heiden** = heden/lyngen
- **morgenschon** = vakker som morgenen
- **lief** = lop (preteritum av "laufen")
- **die Freude** = gleden`,
    },
    {
      id: 'tysk-1-13-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Lag diminutiver',
      problem: `Lag diminutiver med -chen av disse ordene:
a) der Hund (hunden)
b) die Katze (katten)
c) das Buch (boken)`,
      solution: `a) der Hund -> **das Hundchen** (den lille hunden)
b) die Katze -> **das Katzchen** (den lille katten)
c) das Buch -> **das Buchchen** (den lille boken)

Merk: Alle far artikkelen **das** fordi diminutiver alltid er intetkjonn. "Buch" far omlyd: u -> u (Buchchen).`,
    },
    {
      id: 'tysk-1-13-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket kjonn far alle diminutiver (-chen / -lein) pa tysk?',
        options: [
          { id: 'a', text: 'Hankjonn (der)', isCorrect: false },
          { id: 'b', text: 'Hunkjonn (die)', isCorrect: false },
          { id: 'c', text: 'Intetkjonn (das)', isCorrect: true },
          { id: 'd', text: 'Det kommer an pa grunnordet', isCorrect: false },
        ],
        solution: 'Alle diminutiver er intetkjonn (das), uansett hvilket kjonn grunnordet har. Eksempel: die Rose (hunkjonn) -> das Roslein (intetkjonn).',
      },
    },
    {
      id: 'tysk-1-13-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem skrev diktet "Heidenroslein"?',
        options: [
          { id: 'a', text: 'Friedrich Schiller', isCorrect: false },
          { id: 'b', text: 'Heinrich Heine', isCorrect: false },
          { id: 'c', text: 'Johann Wolfgang von Goethe', isCorrect: true },
          { id: 'd', text: 'Brodre Grimm', isCorrect: false },
        ],
        solution: 'Johann Wolfgang von Goethe (1749-1832) skrev "Heidenroslein". Goethe er Tysklands mest beremte dikter.',
      },
    },
    {
      id: 'tysk-1-13-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag diminutiver med -chen. Husk at artikkelen alltid blir "das".',
        subTasks: [
          { label: 'a', task: 'der Tisch (bordet)', solution: 'das Tischchen' },
          { label: 'b', task: 'die Blume (blomsten)', solution: 'das Blumchen' },
          { label: 'c', task: 'der Stern (stjernen)', solution: 'das Sternchen' },
          { label: 'd', task: 'das Haus (huset)', solution: 'das Hauschen' },
        ],
        solution: 'a) das Tischchen, b) das Blumchen, c) das Sternchen, d) das Hauschen',
      },
    },
    {
      id: 'tysk-1-13-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les forste strofe av "Heidenroslein" og svar pa sporsmalene pa norsk:\na) Hva sa gutten (der Knabe)?\nb) Hvor sto rosen?\nc) Hvordan reagerte gutten da han sa rosen?',
        solution: 'a) Gutten sa en liten rose (ein Roslein).\nb) Rosen sto pa heden/lyngen (auf der Heiden).\nc) Han lop raskt bort for a se den naermere og sa den med stor glede (mit vielen Freuden).',
        hints: ['Sah = sa', 'die Heiden = heden/lyngen', 'Freude = glede'],
      },
    },
    {
      id: 'tysk-1-13-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-13-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort dikt pa tysk (4-6 linjer). Det trenger ikke rime perfekt, men prov a bruke minst ett diminutiv (-chen eller -lein) og enkle ord du har laert. Tema: natur, dyr eller arstider.',
        solution: 'Eksempel:\n\nEin Vogelchen singt im Baum,\ndie Sonne scheint so schon.\nEin Blumchen wachst im Garten,\nder Fruhling ist zu sehn.\nDas Hundchen spielt im Gras,\nwie schon die Welt doch ist!\n\n(En liten fugl synger i treet, solen skinner sa vakkert. En liten blomst vokser i hagen, varen er a se. Den lille hunden leker i gresset, hvor vakker verden er!)',
        hints: ['Bruk enkle setninger', 'singt = synger, scheint = skinner', 'wachst = vokser'],
      },
    },
    {
      id: 'tysk-1-13-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Diminutiver** lages med **-chen** (vanlig) eller **-lein** (poetisk) og er alltid **das** (intetkjonn).
- Diminutiver far ofte omlyd: Haus -> Hauschen, Vogel -> Vogelchen.
- Noen diminutiver er egne ord: **das Brotchen** (rundstykke), **das Madchen** (jente).
- **Johann Wolfgang von Goethe** (1749-1832) er Tysklands storste dikter.
- **"Heidenroslein"** er et beremt Goethe-dikt om en gutt som ser en liten rose pa heden.
- Viktige diktord: das Gedicht, der Vers, die Strophe, der Reim, der Dichter.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Gedicht', definition: 'diktet' },
    { term: 'das Lied', definition: 'sangen' },
    { term: 'der Dichter', definition: 'dikteren' },
    { term: '-chen / -lein', definition: 'diminutivendelser (forminskelsesform)' },
    { term: 'das Roslein', definition: 'den lille rosen (diminutiv)' },
    { term: 'der Reim', definition: 'rimet' },
    { term: 'die Strophe', definition: 'strofen' },
  ],
};

// ============================================================================
// Eksport: Alle kapitler 11-13
// ============================================================================

export const TYSK_1_CHAPTERS_11_13: TextbookChapter[] = [
  CHAPTER_TYSK_1_11_1, CHAPTER_TYSK_1_11_2, CHAPTER_TYSK_1_11_3, CHAPTER_TYSK_1_11_4,
  CHAPTER_TYSK_1_12_1, CHAPTER_TYSK_1_12_2, CHAPTER_TYSK_1_12_3, CHAPTER_TYSK_1_12_4,
  CHAPTER_TYSK_1_13_1, CHAPTER_TYSK_1_13_2, CHAPTER_TYSK_1_13_3, CHAPTER_TYSK_1_13_4,
];
