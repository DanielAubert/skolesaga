/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON
 * Kapittel 1.3: Algebra
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.3 NARRATIV: Algebra
// ============================================================================

export const CHAPTER_1T_1_3_NARRATIV: TextbookChapter = {
  id: '1t-1-3-narrativ',
  courseId: '1t',
  chapterNumber: '1.3',
  title: 'Algebra',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om bokstaver som oppfører seg som tall – hvordan du forenkler uttrykk, løser opp parenteser og mestrer algebraens grunnregler.',
  estimatedMinutes: 40,
  competenceGoals: ['behandle og faktorisere algebraiske uttrykk'],
  linkedChapterId: '1t-1-3',
  content: [
    {
      id: '1t-1-3-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-3-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-1-3-n-intro',
      type: 'text',
      content: `## Bokstaver som oppfører seg som tall

Tenk deg at du handler i en butikk der prisene ikke er bestemt ennå. En brus koster $x$ kroner, og en sjokolade koster $y$ kroner. Du kjøper tre brus og to sjokolader – totalt betaler du $3x + 2y$ kroner. Du vet ikke nøyaktig hva du betalte, men du har et uttrykk som fungerer uansett hva prisene blir.

Velkommen til algebra – kunsten å regne med bokstaver. I dette kapittelet skal vi lære tre viktige ferdigheter: å forenkle uttrykk ved å samle **like ledd**, å løse opp parenteser med **distributiv lov**, og å multiplisere to parenteser med hverandre. Disse teknikkene er selve grunnmuren i matematikken du møter videre – fra likninger til funksjoner.`,
    },
    {
      id: '1t-1-3-n-section1',
      type: 'text',
      content: `## Like ledd – rydde opp i rotet

Det første vi må kunne er å **forenkle** algebraiske uttrykk. Prinsippet er enkelt: du kan bare legge sammen eller trekke fra ledd som inneholder de *samme* bokstavene med de *samme* eksponentene. Slike ledd kaller vi **like ledd**.

Tenk på det som frukt i en kurv. Tre epler pluss fem epler er åtte epler. Men tre epler pluss fem bananer? Det kan du ikke slå sammen – du har bare tre epler og fem bananer. Akkurat slik er det med algebra: $3a + 5a = 8a$, men $3a + 5b$ kan ikke forenkles.

La oss ta et eksempel med flere ledd. Hva blir $2x^2 - 5x + 3x + 4x^2 + 2$? Her sorterer vi: leddene med $x^2$ er $2x^2$ og $4x^2$, som gir $6x^2$. Leddene med $x$ er $-5x$ og $3x$, som gir $-2x$. Tallet $2$ står alene. Svaret blir $6x^2 - 2x + 2$.

En viktig detalj: rekkefølgen på bokstavene spiller ingen rolle. $xy$ og $yx$ er det samme, akkurat som $3 \\cdot 5$ og $5 \\cdot 3$ begge er 15. Så $2xy + 3yx = 2xy + 3xy = 5xy$. Vi pleier å skrive bokstavene i alfabetisk rekkefølge for å holde det ryddig.

Hva med $3x^2y + 5xy^2 - 4yx^2$? Her er $3x^2y$ og $-4yx^2$ like ledd (begge har $x^2y$), mens $5xy^2$ er noe annet (den har $xy^2$). Resultatet blir $3x^2y - 4x^2y + 5xy^2 = -x^2y + 5xy^2$.`,
    },
    {
      id: '1t-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva blir $5x^2 + 7x + 9 - 2x^2$?',
        options: [
          { id: 'a', text: '$3x^2 + 7x + 9$', isCorrect: true },
          { id: 'b', text: '$10x^2 + 9$', isCorrect: false },
          { id: 'c', text: '$7x^2 + 7x + 9$', isCorrect: false },
          { id: 'd', text: '$3x^2 + 16$', isCorrect: false },
        ],
        solution: 'Vi samler like ledd: $5x^2 - 2x^2 = 3x^2$. Leddet $7x$ har ingen andre $x$-ledd å slå seg sammen med, og $9$ er en konstant. Svaret er $3x^2 + 7x + 9$.',
      },
    },
    {
      id: '1t-1-3-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-3-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-3-n-section2',
      type: 'text',
      content: `## Distributiv lov – å løse opp parenteser

Nå kommer en av de viktigste reglene i algebra: **distributiv lov**. Den forteller oss hvordan vi multipliserer noe med en parentes.

Regelen er: $a \\cdot (b + c) = a \\cdot b + a \\cdot c$

Du ganger faktoren utenfor med *hvert* ledd inne i parentesen. Tenk på det som å dele ut kort – alle rundt bordet skal ha ett.

La oss starte enkelt. Hva blir $2(x + 4)$? Vi ganger $2$ med $x$ og $2$ med $4$: $2 \\cdot x + 2 \\cdot 4 = 2x + 8$.

Hva med $-3(2x - 2)$? Her må vi passe på fortegnene. Vi ganger $-3$ med $2x$, som gir $-6x$. Så ganger vi $-3$ med $-2$, og minus ganger minus gir pluss, altså $+6$. Svaret er $-6x + 6$.

Det fungerer også med flere ledd inne i parentesen: $x(x^2 - 3y + 2) = x \\cdot x^2 - x \\cdot 3y + x \\cdot 2 = x^3 - 3xy + 2x$. Legg merke til at $x \\cdot x^2 = x^3$ fordi vi legger sammen eksponentene: $x^1 \\cdot x^2 = x^{1+2} = x^3$.

Noen ganger har vi en parentes uten noen synlig faktor foran, bare et minustegn: $-(2x - 3)$. Det betyr egentlig $-1 \\cdot (2x - 3) = -2x + 3$. Minustegn foran en parentes *snur* fortegnet på alle leddene inni.

Et annet viktig tilfelle er når du har noe *pluss* en parentes: $3a - (5b - 4a)$. Her er det en usynlig $-1$ foran parentesen: $3a - 1 \\cdot (5b - 4a) = 3a - 5b + 4a = 7a - 5b$.`,
    },
    {
      id: '1t-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva blir $-2(x^2 - 3x + 2) - x^2$?',
        options: [
          { id: 'a', text: '$-3x^2 + 6x - 4$', isCorrect: true },
          { id: 'b', text: '$-x^2 + 6x - 4$', isCorrect: false },
          { id: 'c', text: '$-3x^2 - 6x + 4$', isCorrect: false },
          { id: 'd', text: '$-2x^2 + 6x - 4$', isCorrect: false },
        ],
        solution: 'Først distribuerer vi: $-2 \\cdot x^2 = -2x^2$, $-2 \\cdot (-3x) = 6x$, $-2 \\cdot 2 = -4$. Så trekker vi fra $x^2$: $-2x^2 + 6x - 4 - x^2 = -3x^2 + 6x - 4$.',
      },
    },
    {
      id: '1t-1-3-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-3-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-3-n-section3',
      type: 'text',
      content: `## Når bokstavene også er utenfor parentesen

Distributiv lov blir enda kraftigere når faktoren utenfor parentesen selv inneholder variabler. For eksempel: $xy(x^2 + y + 2)$. Her ganger vi $xy$ med hvert ledd: $xy \\cdot x^2 + xy \\cdot y + xy \\cdot 2 = x^3y + xy^2 + 2xy$.

Legg merke til potensregelen igjen: $xy \\cdot x^2 = x^{1+2} \\cdot y = x^3y$, og $xy \\cdot y = x \\cdot y^{1+1} = xy^2$.

Et annet eksempel: $a^2b(a^2 - 2b) = a^2b \\cdot a^2 - a^2b \\cdot 2b = a^4b - 2a^2b^2$. Her bruker vi at $a^2 \\cdot a^2 = a^4$ og $b \\cdot b = b^2$.

Det kan se komplisert ut, men teknikken er alltid den samme: gang faktoren med *hvert eneste* ledd inne i parentesen, og bruk potensreglene for å forenkle. Pass spesielt på fortegnene – det er der de fleste feilene skjer.

Her er noe som er verdt å merke seg: etter at du har løst opp parentesen, sjekk alltid om du kan forenkle ved å samle like ledd etterpå. For eksempel: $-a(b^2 - a + 4) - a^2 = -ab^2 + a^2 - 4a - a^2 = -ab^2 - 4a$. De to $a^2$-leddene kansellerer hverandre.`,
    },
    {
      id: '1t-1-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva blir $2x(x - y)$?',
        options: [
          { id: 'a', text: '$2x^2 - 2y$', isCorrect: false },
          { id: 'b', text: '$2x^2 - xy$', isCorrect: false },
          { id: 'c', text: '$2x^2 - 2xy$', isCorrect: true },
          { id: 'd', text: '$2x - 2xy$', isCorrect: false },
        ],
        solution: 'Vi bruker distributiv lov: $2x \\cdot x - 2x \\cdot y = 2x^2 - 2xy$. Husk at $2x \\cdot x = 2x^2$, ikke bare $2x$.',
      },
    },
    {
      id: '1t-1-3-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-3-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-3-n-section4',
      type: 'text',
      content: `## Parentes ganger parentes

Nå tar vi steget videre: hva skjer når to parenteser skal ganges med hverandre? Regelen er at **hvert** ledd i den første parentesen skal ganges med **hvert** ledd i den andre. Formelt:

$$(a + b)(c + d) = ac + ad + bc + bd$$

La oss ta et eksempel: $(x + 2)(x + 3)$. Vi tar $x$ fra første parentes og ganger med begge leddene i andre parentes: $x \\cdot x + x \\cdot 3 = x^2 + 3x$. Så tar vi $2$ fra første parentes og gjør det samme: $2 \\cdot x + 2 \\cdot 3 = 2x + 6$. Til slutt legger vi alt sammen: $x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.

Noen kaller dette «alle med alle» eller «FOIL-metoden» (First, Outer, Inner, Last). Uansett hva du kaller det – poenget er at ingen ledd skal glemmes.

La oss prøve med noe vanskeligere: $(2x - 3)(3y - 5)$. Her ganger vi $2x$ med $3y$ og $-5$, og $-3$ med $3y$ og $-5$: $6xy - 10x - 9y + 15$. Legg merke til at $(-3) \\cdot (-5) = +15$.

Og med koeffisienter og to variabler: $(2x + y)(3x - 2y) = 6x^2 - 4xy + 3xy - 2y^2 = 6x^2 - xy - 2y^2$. Her kunne vi samle de to leddene med $xy$: $-4xy + 3xy = -xy$.

Noen ganger har vi en faktor foran hele uttrykket: $-2(x + 3)(x - 5)$. Da ganger vi først parentesene: $(x + 3)(x - 5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15$. Deretter ganger vi med $-2$: $-2x^2 + 4x + 30$.`,
    },
    {
      id: '1t-1-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva blir $(x + 3)(x - 2)$?',
        options: [
          { id: 'a', text: '$x^2 - 6$', isCorrect: false },
          { id: 'b', text: '$x^2 + x - 6$', isCorrect: true },
          { id: 'c', text: '$x^2 + 5x - 6$', isCorrect: false },
          { id: 'd', text: '$x^2 - x + 6$', isCorrect: false },
        ],
        solution: 'Vi ganger alle med alle: $x \\cdot x + x \\cdot (-2) + 3 \\cdot x + 3 \\cdot (-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$.',
      },
    },
    {
      id: '1t-1-3-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-3-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-3-n-section5',
      type: 'text',
      content: `## Tre parenteser og uttrykk med fradrag

Hva gjør du når det er *tre* parenteser som skal ganges? Svaret er: ta det steg for steg. Gang først to av parentesene, og gang deretter resultatet med den tredje.

La oss prøve $x(x + 3)(x - 5)$. Først ganger vi $x$ med $(x + 3)$: $x^2 + 3x$. Deretter ganger vi dette resultatet med $(x - 5)$: $(x^2 + 3x)(x - 5) = x^3 - 5x^2 + 3x^2 - 15x = x^3 - 2x^2 - 15x$.

Et annet vanlig tilfelle er uttrykk der du *trekker fra* et parentesprodukt: $x^2 - (x + 2)(x + 4)$. Her må vi først finne produktet: $(x + 2)(x + 4) = x^2 + 4x + 2x + 8 = x^2 + 6x + 8$. Deretter trekker vi fra: $x^2 - (x^2 + 6x + 8) = x^2 - x^2 - 6x - 8 = -6x - 8$. Legg merke til at $x^2$-leddene kansellerer hverandre!

Poenget er at uansett hvor komplisert et uttrykk ser ut, bryter du det ned i små steg: gang to faktorer om gangen, løs opp parenteser, samle like ledd, og forenkle. Algebra handler om å holde hodet kaldt og ta det systematisk.

Her er en sjekkliste du kan bruke:
1. Gang ut parentesene (distributiv lov / «alle med alle»)
2. Pass på fortegnene – spesielt minus foran parenteser
3. Samle like ledd
4. Skriv svaret med høyeste potens først`,
    },
    {
      id: '1t-1-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva blir $x^2 - (x + 4)(x - 1)$?',
        options: [
          { id: 'a', text: '$-3x + 4$', isCorrect: true },
          { id: 'b', text: '$3x - 4$', isCorrect: false },
          { id: 'c', text: '$-5x + 4$', isCorrect: false },
          { id: 'd', text: '$x^2 - 3x + 4$', isCorrect: false },
        ],
        solution: 'Først ganger vi parentesene: $(x + 4)(x - 1) = x^2 - x + 4x - 4 = x^2 + 3x - 4$. Så trekker vi fra: $x^2 - (x^2 + 3x - 4) = x^2 - x^2 - 3x + 4 = -3x + 4$.',
      },
    },
    {
      id: '1t-1-3-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-1-3-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært de tre grunnpilarene i algebraisk regning:

**Like ledd** kan slås sammen – de må ha nøyaktig samme bokstaver med samme eksponenter. For eksempel er $3x^2$ og $5x^2$ like ledd, mens $3x^2$ og $5x$ ikke er det. Husk at rekkefølgen på bokstavene ikke spiller noen rolle: $xy = yx$.

**Distributiv lov** brukes til å løse opp parenteser: $a(b + c) = ab + ac$. Faktoren utenfor ganges med *hvert* ledd inne i parentesen. Minus foran en parentes snur fortegnet på alle ledd inni. Når faktoren selv inneholder variabler, bruk potensregelen $x^n \\cdot x^m = x^{n+m}$.

**Multiplikasjon av parenteser** følger regelen $(a + b)(c + d) = ac + ad + bc + bd$ – hvert ledd i første parentes ganges med hvert ledd i andre parentes. Ved tre parenteser: gang to av dem først, og gang resultatet med den tredje. Husk alltid å forenkle ved å samle like ledd til slutt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const MATEMATIKK_1T_NARRATIV_CHAPTERS = [
  CHAPTER_1T_1_3_NARRATIV,
];
