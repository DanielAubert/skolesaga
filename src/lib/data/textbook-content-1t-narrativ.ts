/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON
 * Kapittel 1.3: Algebra
 * Kapittel 2.1: Grunnleggende likninger
 * Kapittel 2.2: Andregradslikninger - faktorisering
 * Kapittel 3.1: Koordinatsystemet
 * Kapittel 3.2: Lineære funksjoner
 * Kapittel 3.3: Hva er en funksjon?
 * Kapittel 3.4: Andregradsfunksjoner
 * Kapittel 3.5: Nullpunkter og fortegn
 * Kapittel 3.6: Polynomfunksjoner
 * Kapittel 2.5: Rasjonale likninger
 * Kapittel 2.3: ABC-formelen
 * Kapittel 2.4: Fullstendig kvadrat
 * Kapittel 2.6: Likninger med røtter
 * Kapittel 1.6: Rasjonale uttrykk
 * Kapittel 1.7: Mengdelære
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import { CHAPTER_1T_2_5_NARRATIV, CHAPTER_1T_2_6_NARRATIV } from './textbook-content-1t-narrativ-ch2-5-6';
import { CHAPTER_1T_3_1_NARRATIV, CHAPTER_1T_3_2_NARRATIV, CHAPTER_1T_3_3_NARRATIV } from './textbook-content-1t-narrativ-del3';
import { CHAPTER_1T_3_4_NARRATIV, CHAPTER_1T_3_5_NARRATIV, CHAPTER_1T_3_6_NARRATIV } from './textbook-content-1t-narrativ-kap3';
import { CHAPTER_1T_1_6_NARRATIV, CHAPTER_1T_1_7_NARRATIV } from './textbook-content-1t-narrativ-del6';
import { CHAPTER_1T_1_1_NARRATIV, CHAPTER_1T_1_2_NARRATIV } from './textbook-content-1t-narrativ-kap1';
import { CHAPTER_1T_1_8_NARRATIV, CHAPTER_1T_1_9_NARRATIV } from './textbook-content-1t-narrativ-del7';
import { CHAPTER_1T_2_8_NARRATIV, CHAPTER_1T_2_9_NARRATIV, CHAPTER_1T_2_10_NARRATIV } from './textbook-content-1t-narrativ-s2b';
import { CHAPTER_1T_4_1_NARRATIV, CHAPTER_1T_4_2_NARRATIV, CHAPTER_1T_4_3_NARRATIV, CHAPTER_1T_4_4_NARRATIV, CHAPTER_1T_4_5_NARRATIV } from './textbook-content-1t-narrativ-del4';
import { CHAPTER_1T_5_1_NARRATIV, CHAPTER_1T_5_2_NARRATIV, CHAPTER_1T_5_3_NARRATIV, CHAPTER_1T_5_4_NARRATIV } from './textbook-content-1t-narrativ-kap5';
import { CHAPTER_1T_5_5_NARRATIV, CHAPTER_1T_5_6_NARRATIV, CHAPTER_1T_5_7_NARRATIV, CHAPTER_1T_6_1_NARRATIV, CHAPTER_1T_6_2_NARRATIV } from './textbook-content-1t-narrativ-del5';
import { CHAPTER_1T_8_1_NARRATIV, CHAPTER_1T_8_2_NARRATIV, CHAPTER_1T_8_3_NARRATIV, CHAPTER_1T_8_4_NARRATIV, CHAPTER_1T_8_5_NARRATIV } from './textbook-content-1t-modellering-narrativ';

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
        task: 'Test deg selv på like ledd:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-3-n-quiz1-q0',
            task: 'Hva blir $5x^2 + 7x + 9 - 2x^2$?',
            options: [
              { id: 'a', text: '$3x^2 + 7x + 9$', isCorrect: true },
              { id: 'b', text: '$10x^2 + 9$', isCorrect: false },
              { id: 'c', text: '$7x^2 + 7x + 9$', isCorrect: false },
              { id: 'd', text: '$3x^2 + 16$', isCorrect: false },
            ],
            solution: 'Vi samler like ledd: $5x^2 - 2x^2 = 3x^2$. Leddet $7x$ har ingen andre $x$-ledd å slå seg sammen med, og $9$ er en konstant. Svaret er $3x^2 + 7x + 9$.',
          },
          {
            id: '1t-1-3-n-quiz1-q1',
            task: 'Hvilke av disse er like ledd?',
            options: [
              { id: 'a', text: '$3x$ og $5x^2$', isCorrect: false },
              { id: 'b', text: '$2xy$ og $7yx$', isCorrect: true },
              { id: 'c', text: '$4a$ og $4b$', isCorrect: false },
              { id: 'd', text: '$x^2$ og $x^3$', isCorrect: false },
            ],
            solution: 'Like ledd må ha nøyaktig samme bokstaver med samme eksponenter. $2xy$ og $7yx$ er like ledd fordi $xy = yx$ (rekkefølgen spiller ingen rolle). De andre parene har forskjellige variabler eller eksponenter.',
          },
          {
            id: '1t-1-3-n-quiz1-q2',
            task: 'Hva blir $4a^2b - 2ab^2 + 3a^2b + ab^2$?',
            options: [
              { id: 'a', text: '$7a^2b - ab^2$', isCorrect: true },
              { id: 'b', text: '$5a^2b^2$', isCorrect: false },
              { id: 'c', text: '$7a^2b + ab^2$', isCorrect: false },
              { id: 'd', text: '$7a^2b - 3ab^2$', isCorrect: false },
            ],
            solution: 'Vi samler like ledd: $a^2b$-leddene er $4a^2b + 3a^2b = 7a^2b$. $ab^2$-leddene er $-2ab^2 + ab^2 = -ab^2$. Svaret er $7a^2b - ab^2$.',
          },
        ],
        solution: '',
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
        task: 'Test deg selv på distributiv lov:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-3-n-quiz2-q0',
            task: 'Hva blir $-2(x^2 - 3x + 2) - x^2$?',
            options: [
              { id: 'a', text: '$-3x^2 + 6x - 4$', isCorrect: true },
              { id: 'b', text: '$-x^2 + 6x - 4$', isCorrect: false },
              { id: 'c', text: '$-3x^2 - 6x + 4$', isCorrect: false },
              { id: 'd', text: '$-2x^2 + 6x - 4$', isCorrect: false },
            ],
            solution: 'Først distribuerer vi: $-2 \\cdot x^2 = -2x^2$, $-2 \\cdot (-3x) = 6x$, $-2 \\cdot 2 = -4$. Så trekker vi fra $x^2$: $-2x^2 + 6x - 4 - x^2 = -3x^2 + 6x - 4$.',
          },
          {
            id: '1t-1-3-n-quiz2-q1',
            task: 'Hva blir $3(2a + 5)$?',
            options: [
              { id: 'a', text: '$6a + 5$', isCorrect: false },
              { id: 'b', text: '$5a + 15$', isCorrect: false },
              { id: 'c', text: '$6a + 15$', isCorrect: true },
              { id: 'd', text: '$6a + 8$', isCorrect: false },
            ],
            solution: 'Vi ganger $3$ med hvert ledd i parentesen: $3 \\cdot 2a + 3 \\cdot 5 = 6a + 15$.',
          },
          {
            id: '1t-1-3-n-quiz2-q2',
            task: 'Hva blir $-(4x - 7)$?',
            options: [
              { id: 'a', text: '$-4x - 7$', isCorrect: false },
              { id: 'b', text: '$4x + 7$', isCorrect: false },
              { id: 'c', text: '$-4x + 7$', isCorrect: true },
              { id: 'd', text: '$4x - 7$', isCorrect: false },
            ],
            solution: 'Minus foran en parentes snur fortegnet på alle ledd inni: $-(4x - 7) = -1 \\cdot 4x + (-1) \\cdot (-7) = -4x + 7$.',
          },
          {
            id: '1t-1-3-n-quiz2-q3',
            task: 'Hva blir $5a - (2a - 3b)$?',
            options: [
              { id: 'a', text: '$3a - 3b$', isCorrect: false },
              { id: 'b', text: '$3a + 3b$', isCorrect: true },
              { id: 'c', text: '$7a - 3b$', isCorrect: false },
              { id: 'd', text: '$7a + 3b$', isCorrect: false },
            ],
            solution: 'Vi løser opp parentesen og snur fortegnene: $5a - 2a + 3b = 3a + 3b$.',
          },
        ],
        solution: '',
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
        task: 'Test deg selv på distributiv lov med variabler:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-3-n-quiz3-q0',
            task: 'Hva blir $2x(x - y)$?',
            options: [
              { id: 'a', text: '$2x^2 - 2y$', isCorrect: false },
              { id: 'b', text: '$2x^2 - xy$', isCorrect: false },
              { id: 'c', text: '$2x^2 - 2xy$', isCorrect: true },
              { id: 'd', text: '$2x - 2xy$', isCorrect: false },
            ],
            solution: 'Vi bruker distributiv lov: $2x \\cdot x - 2x \\cdot y = 2x^2 - 2xy$. Husk at $2x \\cdot x = 2x^2$, ikke bare $2x$.',
          },
          {
            id: '1t-1-3-n-quiz3-q1',
            task: 'Hva blir $a^2(a + 3b)$?',
            options: [
              { id: 'a', text: '$a^3 + 3ab$', isCorrect: false },
              { id: 'b', text: '$a^3 + 3a^2b$', isCorrect: true },
              { id: 'c', text: '$a^2 + 3a^2b$', isCorrect: false },
              { id: 'd', text: '$a^4 + 3a^2b$', isCorrect: false },
            ],
            solution: 'Vi ganger $a^2$ med hvert ledd: $a^2 \\cdot a = a^{2+1} = a^3$ og $a^2 \\cdot 3b = 3a^2b$. Svaret er $a^3 + 3a^2b$.',
          },
          {
            id: '1t-1-3-n-quiz3-q2',
            task: 'Hva blir $-ab(a - 2b) + a^2b$?',
            options: [
              { id: 'a', text: '$2ab^2$', isCorrect: true },
              { id: 'b', text: '$-2a^2b + 2ab^2$', isCorrect: false },
              { id: 'c', text: '$-a^2b + 2ab^2 + a^2b$', isCorrect: false },
              { id: 'd', text: '$0$', isCorrect: false },
            ],
            solution: 'Først distribuerer vi: $-ab \\cdot a + (-ab) \\cdot (-2b) = -a^2b + 2ab^2$. Deretter legger vi til $a^2b$: $-a^2b + 2ab^2 + a^2b = 2ab^2$. $a^2b$-leddene kansellerer hverandre.',
          },
        ],
        solution: '',
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
        task: 'Test deg selv på parentes ganger parentes:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-3-n-quiz4-q0',
            task: 'Hva blir $(x + 3)(x - 2)$?',
            options: [
              { id: 'a', text: '$x^2 - 6$', isCorrect: false },
              { id: 'b', text: '$x^2 + x - 6$', isCorrect: true },
              { id: 'c', text: '$x^2 + 5x - 6$', isCorrect: false },
              { id: 'd', text: '$x^2 - x + 6$', isCorrect: false },
            ],
            solution: 'Vi ganger alle med alle: $x \\cdot x + x \\cdot (-2) + 3 \\cdot x + 3 \\cdot (-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$.',
          },
          {
            id: '1t-1-3-n-quiz4-q1',
            task: 'Hva blir $(2x - 1)(x + 4)$?',
            options: [
              { id: 'a', text: '$2x^2 + 7x - 4$', isCorrect: true },
              { id: 'b', text: '$2x^2 + 9x - 4$', isCorrect: false },
              { id: 'c', text: '$2x^2 - 7x - 4$', isCorrect: false },
              { id: 'd', text: '$2x^2 + 3x - 4$', isCorrect: false },
            ],
            solution: 'Vi ganger alle med alle: $2x \\cdot x + 2x \\cdot 4 + (-1) \\cdot x + (-1) \\cdot 4 = 2x^2 + 8x - x - 4 = 2x^2 + 7x - 4$.',
          },
          {
            id: '1t-1-3-n-quiz4-q2',
            task: 'Hva blir $-3(x + 1)(x - 2)$?',
            options: [
              { id: 'a', text: '$-3x^2 + 3x + 6$', isCorrect: false },
              { id: 'b', text: '$-3x^2 - 3x - 6$', isCorrect: false },
              { id: 'c', text: '$-3x^2 + 3x - 6$', isCorrect: false },
              { id: 'd', text: '$-3x^2 + 3x + 6$', isCorrect: true },
            ],
            solution: 'Først ganger vi parentesene: $(x + 1)(x - 2) = x^2 - 2x + x - 2 = x^2 - x - 2$. Deretter ganger vi med $-3$: $-3(x^2 - x - 2) = -3x^2 + 3x + 6$.',
          },
        ],
        solution: '',
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
        task: 'Test deg selv på tre parenteser og fradrag:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-3-n-quiz5-q0',
            task: 'Hva blir $x^2 - (x + 4)(x - 1)$?',
            options: [
              { id: 'a', text: '$-3x + 4$', isCorrect: true },
              { id: 'b', text: '$3x - 4$', isCorrect: false },
              { id: 'c', text: '$-5x + 4$', isCorrect: false },
              { id: 'd', text: '$x^2 - 3x + 4$', isCorrect: false },
            ],
            solution: 'Først ganger vi parentesene: $(x + 4)(x - 1) = x^2 - x + 4x - 4 = x^2 + 3x - 4$. Så trekker vi fra: $x^2 - (x^2 + 3x - 4) = x^2 - x^2 - 3x + 4 = -3x + 4$.',
          },
          {
            id: '1t-1-3-n-quiz5-q1',
            task: 'Hva er riktig rekkefølge når du regner ut et uttrykk med parenteser?',
            options: [
              { id: 'a', text: 'Samle like ledd, gang ut, forenkle', isCorrect: false },
              { id: 'b', text: 'Gang ut parenteser, pass på fortegn, samle like ledd', isCorrect: true },
              { id: 'c', text: 'Del på koeffisienter, gang ut, forenkle', isCorrect: false },
              { id: 'd', text: 'Ta kvadratrot, gang ut, samle like ledd', isCorrect: false },
            ],
            solution: 'Riktig rekkefølge er: (1) Gang ut parentesene med distributiv lov eller «alle med alle», (2) Pass på fortegnene, spesielt minus foran parenteser, (3) Samle like ledd og skriv svaret med høyeste potens først.',
          },
          {
            id: '1t-1-3-n-quiz5-q2',
            task: 'Hva blir $x(x + 2)(x - 3)$?',
            options: [
              { id: 'a', text: '$x^3 - x^2 - 6x$', isCorrect: true },
              { id: 'b', text: '$x^3 + x^2 - 6x$', isCorrect: false },
              { id: 'c', text: '$x^3 - x^2 + 6x$', isCorrect: false },
              { id: 'd', text: '$x^2 - x - 6$', isCorrect: false },
            ],
            solution: 'Først ganger vi $x$ med $(x + 2)$: $x^2 + 2x$. Deretter ganger vi dette med $(x - 3)$: $(x^2 + 2x)(x - 3) = x^3 - 3x^2 + 2x^2 - 6x = x^3 - x^2 - 6x$.',
          },
        ],
        solution: '',
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
// Kapittel 2.1 NARRATIV: Grunnleggende likninger
// ============================================================================

export const CHAPTER_1T_2_1_NARRATIV: TextbookChapter = {
  id: '1t-2-1-narrativ',
  courseId: '1t',
  chapterNumber: '2.1',
  title: 'Grunnleggende likninger',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om likninger som balansekunst – hvordan du finner den ukjente ved å holde begge sider i likevekt, fra enkle likninger til brøker og parenteser.',
  estimatedMinutes: 45,
  competenceGoals: ['løse lineære likninger', 'bruke regneregler for likninger'],
  linkedChapterId: '1t-2-1',
  content: [    {
      id: '1t-2-1-n-intro',
      type: 'text',
      content: `## Jakten på den ukjente

Forestill deg en gammel balanseveie som står på et bord. På venstre side ligger det noen lodd og en mystisk boks merket $x$. På høyre side ligger det andre lodd. Vekten er i perfekt balanse. Oppgaven din er å finne ut hvor mye den mystiske boksen veier, uten å åpne den.

Det er akkurat dette en **likning** er: et utsagn om at to ting er like. Likhetstegnet $=$ er selve vippepunktet på vekten. Alt vi gjør for å finne $x$ handler om én eneste grunnregel: det vi gjør på den ene siden, må vi også gjøre på den andre. Legger du til et lodd på venstre side, må du legge til det samme på høyre. Tar du bort noe fra den ene, tar du bort det samme fra den andre. Slik holder vi balansen hele veien.

I dette kapittelet skal vi begynne med de enkleste likningene og bygge oss opp steg for steg – fra addisjon og subtraksjon, gjennom multiplikasjon og divisjon, til brøker og parenteser.`,
    },
    {
      id: '1t-2-1-n-section1',
      type: 'text',
      content: `## Addisjon og subtraksjon – flytte ledd over likhetstegnet

La oss starte med den enkleste typen likning. Du har $x + 5 = 4$, og du vil finne ut hva $x$ er. Tenk på vekten igjen: boksen $x$ og et lodd på 5 ligger på venstre side, og et lodd på 4 ligger på høyre. For å få $x$ alene må vi fjerne femtallet. Vi trekker fra 5 på begge sider: $x + 5 - 5 = 4 - 5$, som gir $x = -1$. Vi skriver ofte dette kort som $x + 5 = 4 \\quad | - 5$, der den loddrette streken betyr «gjør dette på begge sider».

Hva med $x - 1 = 4$? Her er det en $-1$ som plager oss, så vi legger til 1 på begge sider: $x - 1 + 1 = 4 + 1$, altså $x = 5$.

Noen ganger er det $x$ som står på høyre side i stedet, som i $4 = x - 2$. Det er ingen grunn til å bli forvirret – vi legger bare til 2 på begge sider og får $6 = x$. Og når $6 = x$, så er jo $x = 6$.

Det blir litt mer spennende når $x$ dukker opp på begge sider av likhetstegnet. Ta $2x + 4 = x$. Her må vi samle alle $x$-ene på én side. Vi trekker fra $x$ på begge sider: $2x + 4 - x = x - x$, som gir $x + 4 = 0$. Trekker vi fra 4 får vi $x = -4$. Huskeregelen er enkel: samle $x$-leddene på én side og tallene på den andre.

Ta et litt større eksempel: $4x + 10 = 3x - 2$. Vi trekker fra $3x$ på begge sider: $x + 10 = -2$. Deretter trekker vi fra 10: $x = -12$.`,
    },
    {
      id: '1t-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på addisjon og subtraksjon i likninger:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-1-n-quiz1-q0',
            task: 'Hva er løsningen på likningen $3x + 31 = 2x$?',
            options: [
              { id: 'a', text: '$x = 31$', isCorrect: false },
              { id: 'b', text: '$x = -31$', isCorrect: true },
              { id: 'c', text: '$x = -\\frac{31}{2}$', isCorrect: false },
              { id: 'd', text: '$x = \\frac{31}{5}$', isCorrect: false },
            ],
            solution: 'Vi trekker fra $2x$ på begge sider: $3x - 2x + 31 = 0$, altså $x + 31 = 0$. Deretter trekker vi fra 31: $x = -31$.',
          },
          {
            id: '1t-2-1-n-quiz1-q1',
            task: 'Hva er løsningen på $x - 7 = 12$?',
            options: [
              { id: 'a', text: '$x = 5$', isCorrect: false },
              { id: 'b', text: '$x = -5$', isCorrect: false },
              { id: 'c', text: '$x = 19$', isCorrect: true },
              { id: 'd', text: '$x = -19$', isCorrect: false },
            ],
            solution: 'Vi legger til 7 på begge sider: $x - 7 + 7 = 12 + 7$, altså $x = 19$.',
          },
          {
            id: '1t-2-1-n-quiz1-q2',
            task: 'Hva er løsningen på $5x + 3 = 4x - 8$?',
            options: [
              { id: 'a', text: '$x = -11$', isCorrect: true },
              { id: 'b', text: '$x = 11$', isCorrect: false },
              { id: 'c', text: '$x = -5$', isCorrect: false },
              { id: 'd', text: '$x = 5$', isCorrect: false },
            ],
            solution: 'Vi trekker fra $4x$ på begge sider: $x + 3 = -8$. Deretter trekker vi fra 3: $x = -11$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-1-n-section2',
      type: 'text',
      content: `## Multiplikasjon og divisjon – når $x$ er ganget med noe

Nå som vi mestrer addisjon og subtraksjon, legger vi til et nytt verktøy. Hva gjør du når $x$ er ganget med et tall, som i $3x = 12$? Du kan tenke på det slik: tre like bokser veier til sammen 12. Hva veier én boks? Du deler selvfølgelig på 3. Vi skriver $3x = 12 \\quad | \\div 3$, og får $x = 4$.

Ofte dukker både addisjon og multiplikasjon opp i samme likning. Ta $4x - 3 = 17$. Her gjør vi det i to steg: først fjerner vi $-3$ ved å legge til 3 på begge sider ($4x = 20$), og så deler vi på 4 ($x = 5$). Rekkefølgen er viktig: fjern addisjon og subtraksjon først, del eller gang etterpå.

Hva med $x$-ledd på begge sider og multiplikasjon? Ta $8x + 15 = 3x$. Vi trekker fra $3x$ på begge sider: $5x + 15 = 0$. Deretter trekker vi fra 15: $5x = -15$. Til slutt deler vi på 5: $x = -3$.

En situasjon som lurer mange er negative koeffisienter. Hva gjør du med $-4x = 20$? Du deler på $-4$, og minus delt på minus gir pluss, men her er det $20 \\div (-4) = -5$. Altså $x = -5$. Husk: deler du et positivt tall med et negativt, blir svaret negativt.

Det finnes også likninger der $x$ er delt på et tall. For eksempel $\\frac{x}{2} = 5$. Her ganger vi begge sider med 2: $x = 10$. Eller $\\frac{x}{-3} + 2 = 6$. Først trekker vi fra 2: $\\frac{x}{-3} = 4$. Deretter ganger vi med $-3$: $x = -12$.

Hva med uttrykk som $\\frac{2x}{3} = 6$? Her ganger vi først med 3 for å fjerne nevneren: $2x = 18$. Deretter deler vi på 2: $x = 9$. Regelen er alltid den samme: gang med nevneren for å fjerne brøken, deretter del på koeffisienten foran $x$.`,
    },
    {
      id: '1t-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på multiplikasjon og divisjon i likninger:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-1-n-quiz2-q0',
            task: 'Hva er løsningen på $\\frac{5x}{2} - 4 = -9$?',
            options: [
              { id: 'a', text: '$x = -\\frac{10}{5}$', isCorrect: false },
              { id: 'b', text: '$x = 2$', isCorrect: false },
              { id: 'c', text: '$x = -2$', isCorrect: true },
              { id: 'd', text: '$x = -\\frac{5}{2}$', isCorrect: false },
            ],
            solution: 'Først legger vi til 4: $\\frac{5x}{2} = -5$. Ganger vi med 2: $5x = -10$. Deler vi på 5: $x = -2$.',
          },
          {
            id: '1t-2-1-n-quiz2-q1',
            task: 'Hva er løsningen på $-4x = 20$?',
            options: [
              { id: 'a', text: '$x = 5$', isCorrect: false },
              { id: 'b', text: '$x = -5$', isCorrect: true },
              { id: 'c', text: '$x = -80$', isCorrect: false },
              { id: 'd', text: '$x = 24$', isCorrect: false },
            ],
            solution: 'Vi deler begge sider på $-4$: $x = \\frac{20}{-4} = -5$. Positivt tall delt på negativt tall gir negativt resultat.',
          },
          {
            id: '1t-2-1-n-quiz2-q2',
            task: 'Hva er løsningen på $\\frac{x}{3} + 1 = 5$?',
            options: [
              { id: 'a', text: '$x = 2$', isCorrect: false },
              { id: 'b', text: '$x = 18$', isCorrect: false },
              { id: 'c', text: '$x = 12$', isCorrect: true },
              { id: 'd', text: '$x = 6$', isCorrect: false },
            ],
            solution: 'Først trekker vi fra 1: $\\frac{x}{3} = 4$. Deretter ganger vi med 3: $x = 12$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-1-n-section3',
      type: 'text',
      content: `## Brøklikninger – når $x$ gjemmer seg i nevneren

Nå tar vi et steg opp i vanskelighetsgrad. Hva gjør du når den ukjente $x$ befinner seg i nevneren til en brøk? For eksempel $\\frac{30}{2x} = 5$. Trikset er å gange begge sider med hele nevneren, altså $2x$. Da forsvinner brøken på venstre side: $30 = 5 \\cdot 2x = 10x$. Nå har vi en vanlig likning, og vi deler på 10: $x = 3$.

La oss prøve en litt vanskeligere variant: $\\frac{3}{x + 2} = 2$. Her er nevneren hele uttrykket $x + 2$. Vi ganger begge sider med $(x + 2)$: $3 = 2(x + 2)$. Nå ganger vi ut parentesen: $3 = 2x + 4$. Vi trekker fra 4: $-1 = 2x$, og deler på 2: $x = -\\frac{1}{2}$.

Hva med likninger der brøken inneholder $x$ i telleren? Ta $\\frac{x - 3}{2} = x + 1$. Vi ganger begge sider med 2: $x - 3 = 2(x + 1) = 2x + 2$. Trekker vi fra $x$ på begge sider: $-3 = x + 2$. Trekker fra 2: $x = -5$.

Noen ganger møter du likninger med flere brøker, som $\\frac{x}{2} + \\frac{2}{3} = 1$. Her kan du trekke fra $\\frac{2}{3}$ på begge sider: $\\frac{x}{2} = 1 - \\frac{2}{3} = \\frac{1}{3}$. Deretter ganger du med 2: $x = \\frac{2}{3}$.

Den kraftigste teknikken for flere brøker er å gange hele likningen med **fellesnevneren**. Ta $\\frac{x}{2} + \\frac{x}{3} = 1$. Fellesnevneren er 6. Vi ganger hvert ledd med 6: $\\frac{6x}{2} + \\frac{6x}{3} = 6$, altså $3x + 2x = 6$, som gir $5x = 6$ og $x = \\frac{6}{5}$.`,
    },
    {
      id: '1t-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på brøklikninger:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-1-n-quiz3-q0',
            task: 'Hva er løsningen på $\\frac{6}{x} = 2$?',
            options: [
              { id: 'a', text: '$x = 12$', isCorrect: false },
              { id: 'b', text: '$x = 4$', isCorrect: false },
              { id: 'c', text: '$x = \\frac{1}{3}$', isCorrect: false },
              { id: 'd', text: '$x = 3$', isCorrect: true },
            ],
            solution: 'Vi ganger begge sider med $x$: $6 = 2x$. Deretter deler vi på 2: $x = 3$.',
          },
          {
            id: '1t-2-1-n-quiz3-q1',
            task: 'Hva er løsningen på $\\frac{x}{2} + \\frac{x}{3} = 5$?',
            options: [
              { id: 'a', text: '$x = \\frac{5}{6}$', isCorrect: false },
              { id: 'b', text: '$x = 6$', isCorrect: true },
              { id: 'c', text: '$x = 10$', isCorrect: false },
              { id: 'd', text: '$x = 30$', isCorrect: false },
            ],
            solution: 'Vi ganger hele likningen med fellesnevneren 6: $3x + 2x = 30$, altså $5x = 30$ og $x = 6$.',
          },
          {
            id: '1t-2-1-n-quiz3-q2',
            task: 'Hva er løsningen på $\\frac{3}{x + 1} = 1$?',
            options: [
              { id: 'a', text: '$x = 3$', isCorrect: false },
              { id: 'b', text: '$x = 2$', isCorrect: true },
              { id: 'c', text: '$x = 4$', isCorrect: false },
              { id: 'd', text: '$x = 0$', isCorrect: false },
            ],
            solution: 'Vi ganger begge sider med $(x + 1)$: $3 = x + 1$. Deretter trekker vi fra 1: $x = 2$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-1-n-section4',
      type: 'text',
      content: `## Parenteslikninger – gang ut, så løs

Hva gjør du når likningen inneholder parenteser? Du ganger dem ut, selvfølgelig. Ta likningen $3(x - 2) = 4$. Først bruker vi distributiv lov: $3x - 6 = 4$. Nå er det en vanlig likning. Vi legger til 6 på begge sider: $3x = 10$, og deler på 3: $x = \\frac{10}{3}$.

La oss se på en likning med en litt mer krevende struktur: $4 - 2(x + 1) = 22$. Først trekker vi fra 4: $-2(x + 1) = 18$. Nå ganger vi ut: $-2x - 2 = 18$. Legger til 2: $-2x = 20$. Deler på $-2$: $x = -10$.

Hva med parenteser på begge sider? Ta $5(x + 1) = 2(x - 1)$. Vi ganger ut begge: $5x + 5 = 2x - 2$. Trekker fra $2x$: $3x + 5 = -2$. Trekker fra 5: $3x = -7$. Deler på 3: $x = -\\frac{7}{3}$.

Det finnes også likninger som kombinerer brøker og parenteser. Ta $\\frac{1}{2}(1 - x) = 5$. Vi ganger ut: $\\frac{1}{2} - \\frac{x}{2} = 5$. Ganger hele likningen med 2: $1 - x = 10$. Trekker fra 1: $-x = 9$. Ganger med $-1$: $x = -9$.

En enda mer krevende variant: $\\frac{3}{4}\\left(\\frac{1}{3} - x\\right) + 2x = 5$. Her ganger vi $\\frac{3}{4}$ med hvert ledd inne i parentesen: $\\frac{3}{4} \\cdot \\frac{1}{3} - \\frac{3}{4} \\cdot x + 2x = 5$, som gir $\\frac{1}{4} - \\frac{3x}{4} + 2x = 5$. Ganger vi hele likningen med 4: $1 - 3x + 8x = 20$, altså $1 + 5x = 20$. Trekker fra 1: $5x = 19$, og $x = \\frac{19}{5}$.`,
    },
    {
      id: '1t-2-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på parenteslikninger:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-1-n-quiz4-q0',
            task: 'Hva er løsningen på $2(x - 1) = 4$?',
            options: [
              { id: 'a', text: '$x = 1$', isCorrect: false },
              { id: 'b', text: '$x = 2$', isCorrect: false },
              { id: 'c', text: '$x = 3$', isCorrect: true },
              { id: 'd', text: '$x = 4$', isCorrect: false },
            ],
            solution: 'Vi ganger ut: $2x - 2 = 4$. Legger til 2 på begge sider: $2x = 6$. Deler på 2: $x = 3$.',
          },
          {
            id: '1t-2-1-n-quiz4-q1',
            task: 'Hva er løsningen på $5(x + 1) = 3(x - 1)$?',
            options: [
              { id: 'a', text: '$x = -4$', isCorrect: true },
              { id: 'b', text: '$x = 4$', isCorrect: false },
              { id: 'c', text: '$x = -1$', isCorrect: false },
              { id: 'd', text: '$x = 1$', isCorrect: false },
            ],
            solution: 'Vi ganger ut begge sider: $5x + 5 = 3x - 3$. Trekker fra $3x$: $2x + 5 = -3$. Trekker fra 5: $2x = -8$. Deler på 2: $x = -4$.',
          },
          {
            id: '1t-2-1-n-quiz4-q2',
            task: 'Hva er løsningen på $\\frac{1}{2}(4x - 6) = 5$?',
            options: [
              { id: 'a', text: '$x = 2$', isCorrect: false },
              { id: 'b', text: '$x = 4$', isCorrect: true },
              { id: 'c', text: '$x = 8$', isCorrect: false },
              { id: 'd', text: '$x = \\frac{7}{2}$', isCorrect: false },
            ],
            solution: 'Vi ganger ut: $2x - 3 = 5$. Legger til 3: $2x = 8$. Deler på 2: $x = 4$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-1-n-section5',
      type: 'text',
      content: `## Sammensatte brøklikninger – den store finalen

Nå er vi klare for de mest krevende likningene i dette kapittelet: likninger med flere brøker, uttrykk i nevneren og parenteser. Strategien er den samme som alltid, men vi trenger å kombinere alle teknikkene vi har lært.

Ta $\\frac{1}{2} - \\frac{2x - 4}{2} = 5$. Begge brøkene har nevner 2, så vi ganger hele likningen med 2: $1 - (2x - 4) = 10$. Husk parentesen! Vi løser opp: $1 - 2x + 4 = 10$, altså $5 - 2x = 10$. Trekker fra 5: $-2x = 5$. Deler på $-2$: $x = -\\frac{5}{2}$.

Et annet eksempel: $\\frac{2x}{x + 1} - \\frac{3}{2} = 2$. Her er fellesnevneren $2(x + 1)$. Vi ganger alle ledd med denne: $\\frac{2(x+1) \\cdot 2x}{x+1} - \\frac{2(x+1) \\cdot 3}{2} = 2 \\cdot 2(x+1)$, som forenkles til $4x - 3(x + 1) = 4(x + 1)$. Vi ganger ut: $4x - 3x - 3 = 4x + 4$, altså $x - 3 = 4x + 4$. Trekker fra $x$: $-3 = 3x + 4$. Trekker fra 4: $-7 = 3x$, og $x = -\\frac{7}{3}$.

Nøkkelen til å mestre disse oppgavene er å ta det steg for steg. Først identifiserer du fellesnevneren. Deretter ganger du hele likningen med den for å fjerne alle brøkene. Så ganger du ut eventuelle parenteser, samler $x$-leddene på én side og tallene på den andre, og til slutt deler du på koeffisienten foran $x$. Gjør du dette systematisk, vil selv de mest innviklede brøklikningene falle på plass.`,
    },
    {
      id: '1t-2-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på sammensatte brøklikninger:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-1-n-quiz5-q0',
            task: 'Hva er første steg for å løse $\\frac{x}{4} + \\frac{x}{3} = 1$?',
            options: [
              { id: 'a', text: 'Trekke fra $\\frac{x}{3}$ på begge sider', isCorrect: false },
              { id: 'b', text: 'Gange hele likningen med 12', isCorrect: true },
              { id: 'c', text: 'Dele begge sider på $x$', isCorrect: false },
              { id: 'd', text: 'Legge sammen brøkene til $\\frac{2x}{7}$', isCorrect: false },
            ],
            solution: 'Den mest effektive strategien er å gange hele likningen med fellesnevneren. Fellesnevneren for 4 og 3 er 12. Da får vi $3x + 4x = 12$, altså $7x = 12$ og $x = \\frac{12}{7}$.',
          },
          {
            id: '1t-2-1-n-quiz5-q1',
            task: 'Hva er løsningen på $\\frac{x}{2} - \\frac{x}{6} = 4$?',
            options: [
              { id: 'a', text: '$x = 6$', isCorrect: false },
              { id: 'b', text: '$x = 8$', isCorrect: false },
              { id: 'c', text: '$x = 12$', isCorrect: true },
              { id: 'd', text: '$x = 24$', isCorrect: false },
            ],
            solution: 'Vi ganger hele likningen med fellesnevneren 6: $3x - x = 24$, altså $2x = 24$ og $x = 12$.',
          },
          {
            id: '1t-2-1-n-quiz5-q2',
            task: 'Hva er fellesnevneren for brøkene i $\\frac{x}{3} + \\frac{2x}{5} = 7$?',
            options: [
              { id: 'a', text: '$8$', isCorrect: false },
              { id: 'b', text: '$15$', isCorrect: true },
              { id: 'c', text: '$35$', isCorrect: false },
              { id: 'd', text: '$30$', isCorrect: false },
            ],
            solution: 'Fellesnevneren for 3 og 5 er $3 \\cdot 5 = 15$. Vi ganger hele likningen med 15: $5x + 6x = 105$, altså $11x = 105$ og $x = \\frac{105}{11}$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært å løse lineære likninger ved å bruke fire hovedteknikker:

**Addisjon og subtraksjon** er det grunnleggende verktøyet. Hovedprinsippet er at vi gjør det samme på begge sider av likhetstegnet. Vi bruker dette til å flytte ledd over likhetstegnet: $x + 5 = 4$ blir $x = 4 - 5 = -1$. Når $x$ er på begge sider, samler vi $x$-leddene på én side og konstantene på den andre.

**Multiplikasjon og divisjon** brukes når $x$ er ganget med eller delt på et tall. Ved $3x = 12$ deler vi på 3. Ved $\\frac{x}{2} = 5$ ganger vi med 2. Fjern alltid addisjon og subtraksjon først, deretter del eller gang.

**Brøklikninger** løser vi ved å gange med nevneren for å fjerne brøkene. Når $x$ er i nevneren, ganger vi med hele nevneruttrykket. Når vi har flere brøker, finner vi fellesnevneren og ganger hele likningen med den.

**Parenteslikninger** krever at vi først ganger ut parentesene med distributiv lov, og deretter løser likningen som vanlig. Pass spesielt på fortegnene ved minus foran parenteser.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2 NARRATIV: Andregradslikninger - faktorisering
// ============================================================================

export const CHAPTER_1T_2_2_NARRATIV: TextbookChapter = {
  id: '1t-2-2-narrativ',
  courseId: '1t',
  chapterNumber: '2.2',
  title: 'Andregradslikninger - faktorisering',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan du knekker andregradslikninger ved å bryte dem opp i faktorer – fra nullregelen via inspeksjon til konjugatsetningen.',
  estimatedMinutes: 45,
  competenceGoals: ['løse andregradslikninger ved faktorisering'],
  linkedChapterId: '1t-2-2',
  content: [    {
      id: '1t-2-2-n-intro',
      type: 'text',
      content: `## Når likningene får en ekstra potens

Til nå har vi jobbet med likninger der $x$ bare dukker opp i første potens. Men hva skjer når $x^2$ melder sin ankomst? Vi får en **andregradslikning** -- en likning på formen $ax^2 + bx + c = 0$. Disse likningene kan ha to løsninger, én løsning eller ingen løsninger i det hele tatt.

I dette kapittelet skal vi lære en elegant metode for å løse slike likninger: **faktorisering**. Ideen er å skrive om uttrykket som et produkt av to faktorer, og deretter bruke en kraftig regel som forteller oss nøyaktig når et produkt blir null. Metoden er ofte raskere og mer elegant enn abc-formelen, spesielt når tallene er «pene».`,
    },
    {
      id: '1t-2-2-n-section1',
      type: 'text',
      content: `## Nullregelen -- nøkkelen til alt

Hele faktoriseringsmetoden hviler på én enkel, men kraftig regel som vi kaller **nullregelen**: hvis et produkt er lik null, så må minst én av faktorene være null. Med matematiske symboler: hvis $A \\cdot B = 0$, så er $A = 0$ eller $B = 0$ (eller begge).

Tenk over hvorfor dette gir mening. Kan du gange to tall og få null uten at minst ett av dem er null? Nei! $3 \\cdot 7 = 21$, $(-5) \\cdot 2 = -10$, $0{,}1 \\cdot 1000 = 100$ -- uansett hva du prøver, blir produktet aldri null med mindre du ganger med null.

Hva betyr dette for likninger? Hvis vi klarer å skrive en andregradslikning på formen $(x - r_1)(x - r_2) = 0$, så vet vi med én gang at enten $x - r_1 = 0$ (altså $x = r_1$) eller $x - r_2 = 0$ (altså $x = r_2$).

La oss prøve det med en gang. Ta likningen $(x - 3)(x + 2) = 0$. Nullregelen gir oss to muligheter: enten er $x - 3 = 0$, som betyr $x = 3$, eller så er $x + 2 = 0$, som betyr $x = -2$. Likningen har altså to løsninger: $x = 3$ og $x = -2$.

Hva med $x(x - 6) = 0$? Her er den ene faktoren bare $x$. Nullregelen gir $x = 0$ eller $x - 6 = 0$, altså $x = 0$ eller $x = 6$. Ikke glem at $x = 0$ er en helt gyldig løsning! Det er en vanlig feil å «dele bort» $x$ fra begge sider og miste denne løsningen.`,
    },
    {
      id: '1t-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på nullregelen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-2-n-quiz1-q0',
            task: 'Hva er løsningene til $(x + 4)(x - 7) = 0$?',
            options: [
              { id: 'a', text: '$x = 4$ eller $x = -7$', isCorrect: false },
              { id: 'b', text: '$x = -4$ eller $x = 7$', isCorrect: true },
              { id: 'c', text: '$x = -4$ eller $x = -7$', isCorrect: false },
              { id: 'd', text: '$x = 28$', isCorrect: false },
            ],
            solution: 'Vi bruker nullregelen. Enten er $x + 4 = 0$, som gir $x = -4$, eller $x - 7 = 0$, som gir $x = 7$.',
          },
          {
            id: '1t-2-2-n-quiz1-q1',
            task: 'Hva er løsningene til $x(x - 5) = 0$?',
            options: [
              { id: 'a', text: '$x = 5$', isCorrect: false },
              { id: 'b', text: '$x = 0$ eller $x = -5$', isCorrect: false },
              { id: 'c', text: '$x = 0$ eller $x = 5$', isCorrect: true },
              { id: 'd', text: '$x = -5$', isCorrect: false },
            ],
            solution: 'Nullregelen gir $x = 0$ eller $x - 5 = 0$, altså $x = 0$ eller $x = 5$. Ikke glem at $x = 0$ er en gyldig løsning!',
          },
          {
            id: '1t-2-2-n-quiz1-q2',
            task: 'Hva sier nullregelen?',
            options: [
              { id: 'a', text: 'Hvis $A + B = 0$, er $A = 0$ og $B = 0$', isCorrect: false },
              { id: 'b', text: 'Hvis $A \\cdot B = 0$, er $A = 0$ eller $B = 0$', isCorrect: true },
              { id: 'c', text: 'Hvis $A \\cdot B = 0$, er $A = 0$ og $B = 0$', isCorrect: false },
              { id: 'd', text: 'Hvis $A - B = 0$, er $A = 0$ eller $B = 0$', isCorrect: false },
            ],
            solution: 'Nullregelen sier at hvis et produkt er lik null, må minst én av faktorene være null. Det holder at én er null -- begge trenger ikke være det.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-2-n-section2',
      type: 'text',
      content: `## Faktorisering ved inspeksjon -- talljakt

Nullregelen er fantastisk, men den forutsetter at likningen allerede er faktorisert. Hva gjør vi når vi har et uttrykk som $x^2 - 5x + 6 = 0$? Vi må faktorisere det selv, og den enkleste metoden kalles **faktorisering ved inspeksjon**.

Metoden fungerer slik: når koeffisienten foran $x^2$ er 1 (altså $a = 1$), leter vi etter to tall $r_1$ og $r_2$ som oppfyller to krav samtidig. For det første skal **summen** av tallene være lik $-b$ (det vil si det motsatte av koeffisienten foran $x$). For det andre skal **produktet** av tallene være lik $c$ (konstantleddet). Finner du slike tall, kan du skrive $x^2 + bx + c = (x - r_1)(x - r_2)$.

La oss prøve med $x^2 - 5x + 6 = 0$. Her er $b = -5$ og $c = 6$. Vi trenger to tall med sum $-(-5) = 5$ og produkt $6$. Hvilke tall har sum 5 og produkt 6? Det er $2$ og $3$! Altså: $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$. Nullregelen gir $x = 2$ eller $x = 3$.

Her er et annet eksempel: $x^2 + 7x + 12 = 0$. Vi trenger to tall med sum $-7$ og produkt $12$. Hmm, $-3$ og $-4$ har sum $-7$ og produkt $12$. Altså $(x - (-3))(x - (-4)) = (x + 3)(x + 4) = 0$, som gir $x = -3$ eller $x = -4$.

Hva med $x^2 + 2x - 15 = 0$? Nå trenger vi sum $-2$ og produkt $-15$. Når produktet er negativt, vet vi at tallene har forskjellig fortegn. Vi prøver: $-5$ og $3$ gir sum $-2$ og produkt $-15$. Det stemmer! Altså $(x + 5)(x - 3) = 0$, som gir $x = -5$ eller $x = 3$.`,
    },
    {
      id: '1t-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering ved inspeksjon:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-2-n-quiz2-q0',
            task: 'Hvilken faktorisering er riktig for $x^2 - 9x + 20 = 0$?',
            options: [
              { id: 'a', text: '$(x + 4)(x + 5) = 0$', isCorrect: false },
              { id: 'b', text: '$(x - 4)(x + 5) = 0$', isCorrect: false },
              { id: 'c', text: '$(x - 4)(x - 5) = 0$', isCorrect: true },
              { id: 'd', text: '$(x + 4)(x - 5) = 0$', isCorrect: false },
            ],
            solution: 'Vi trenger to tall med sum $9$ og produkt $20$. Tallene $4$ og $5$ oppfyller begge kravene: $4 + 5 = 9$ og $4 \\cdot 5 = 20$. Derfor er faktoriseringen $(x - 4)(x - 5) = 0$.',
          },
          {
            id: '1t-2-2-n-quiz2-q1',
            task: 'Hva er løsningene til $x^2 + 2x - 15 = 0$?',
            options: [
              { id: 'a', text: '$x = 3$ eller $x = 5$', isCorrect: false },
              { id: 'b', text: '$x = -5$ eller $x = 3$', isCorrect: true },
              { id: 'c', text: '$x = 5$ eller $x = -3$', isCorrect: false },
              { id: 'd', text: '$x = -3$ eller $x = -5$', isCorrect: false },
            ],
            solution: 'Vi trenger to tall med sum $-2$ og produkt $-15$. Tallene $-5$ og $3$ passer: $-5 + 3 = -2$ og $(-5) \\cdot 3 = -15$. Faktoriseringen gir $(x + 5)(x - 3) = 0$, altså $x = -5$ eller $x = 3$.',
          },
          {
            id: '1t-2-2-n-quiz2-q2',
            task: 'Ved inspeksjon av $x^2 + bx + c$, hva skal summen og produktet av de to tallene $r_1$ og $r_2$ være?',
            options: [
              { id: 'a', text: 'Sum $= b$ og produkt $= c$', isCorrect: false },
              { id: 'b', text: 'Sum $= -b$ og produkt $= c$', isCorrect: true },
              { id: 'c', text: 'Sum $= c$ og produkt $= b$', isCorrect: false },
              { id: 'd', text: 'Sum $= -c$ og produkt $= -b$', isCorrect: false },
            ],
            solution: 'Ved faktorisering ved inspeksjon leter vi etter to tall $r_1$ og $r_2$ slik at summen $r_1 + r_2 = -b$ og produktet $r_1 \\cdot r_2 = c$. Da kan vi skrive $x^2 + bx + c = (x - r_1)(x - r_2)$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-2-n-section3',
      type: 'text',
      content: `## Konjugatsetningen -- en snarvei for differanser

Det finnes en spesiell type andregradsuttrykk som dukker opp overraskende ofte: **differansen mellom to kvadrater**. Uttrykk som $x^2 - 16$ eller $4x^2 - 9$ følger mønsteret $a^2 - b^2$, og for disse har vi en kjapp formel kalt **konjugatsetningen**:

$$a^2 - b^2 = (a + b)(a - b)$$

La oss bruke den på $x^2 - 16 = 0$. Vi ser at $x^2 = (x)^2$ og $16 = 4^2$, så vi har $x^2 - 4^2 = (x + 4)(x - 4) = 0$. Nullregelen gir $x = -4$ eller $x = 4$, som vi kan skrive kort som $x = \\pm 4$.

Du trenger egentlig ikke konjugatsetningen for å løse $x^2 = 16$ -- du kan bare ta kvadratroten på begge sider og huske $\\pm$-tegnet. Men konjugatsetningen er veldig nyttig når uttrykket er litt mer komplisert.

Prøv $4x^2 - 9 = 0$. Her er $4x^2 = (2x)^2$ og $9 = 3^2$. Konjugatsetningen gir $(2x + 3)(2x - 3) = 0$. Fra nullregelen: $2x + 3 = 0$ gir $x = -\\frac{3}{2}$, og $2x - 3 = 0$ gir $x = \\frac{3}{2}$. Altså $x = \\pm \\frac{3}{2}$.

Konjugatsetningen fungerer bare når vi har en differanse -- altså et minustegn mellom de to kvadratene. Uttrykket $x^2 + 16$ kan ikke faktoriseres med denne metoden, fordi en sum av to kvadrater ikke lar seg faktorisere (over de reelle tallene). Så hold øye med det minustegnet!`,
    },
    {
      id: '1t-2-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-2-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på konjugatsetningen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-2-n-quiz3-q0',
            task: 'Hva er løsningene til $x^2 - 49 = 0$?',
            options: [
              { id: 'a', text: '$x = 49$', isCorrect: false },
              { id: 'b', text: '$x = \\pm 49$', isCorrect: false },
              { id: 'c', text: '$x = \\pm 7$', isCorrect: true },
              { id: 'd', text: '$x = 7$', isCorrect: false },
            ],
            solution: 'Vi bruker konjugatsetningen: $x^2 - 49 = x^2 - 7^2 = (x + 7)(x - 7) = 0$. Nullregelen gir $x = -7$ eller $x = 7$, altså $x = \\pm 7$.',
          },
          {
            id: '1t-2-2-n-quiz3-q1',
            task: 'Hva er løsningene til $4x^2 - 9 = 0$?',
            options: [
              { id: 'a', text: '$x = \\pm \\frac{9}{4}$', isCorrect: false },
              { id: 'b', text: '$x = \\pm \\frac{3}{2}$', isCorrect: true },
              { id: 'c', text: '$x = \\pm \\frac{2}{3}$', isCorrect: false },
              { id: 'd', text: '$x = \\pm 3$', isCorrect: false },
            ],
            solution: 'Vi gjenkjenner $4x^2 - 9 = (2x)^2 - 3^2 = (2x + 3)(2x - 3) = 0$. Fra $2x + 3 = 0$ får vi $x = -\\frac{3}{2}$, og fra $2x - 3 = 0$ får vi $x = \\frac{3}{2}$.',
          },
          {
            id: '1t-2-2-n-quiz3-q2',
            task: 'Kan uttrykket $x^2 + 16$ faktoriseres med konjugatsetningen?',
            options: [
              { id: 'a', text: 'Ja, $(x + 4)(x - 4)$', isCorrect: false },
              { id: 'b', text: 'Ja, $(x + 4)^2$', isCorrect: false },
              { id: 'c', text: 'Nei, det er en sum av to kvadrater', isCorrect: true },
              { id: 'd', text: 'Ja, $(x + 16)(x - 16)$', isCorrect: false },
            ],
            solution: 'Konjugatsetningen krever en differanse $a^2 - b^2$, ikke en sum. Uttrykket $x^2 + 16$ er en sum av to kvadrater og kan ikke faktoriseres over de reelle tallene.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-2-n-section4',
      type: 'text',
      content: `## Felles faktor -- rydd opp først!

Noen ganger ser en andregradslikning uoverkommelig ut, men blir mye enklere hvis du først ser etter en **felles faktor** i alle leddene.

Ta $2x^2 - 8x = 0$. Begge leddene inneholder $x$, og begge er delelige med 2. Vi setter $2x$ utenfor en parentes: $2x(x - 4) = 0$. Nå bruker vi nullregelen: $2x = 0$ gir $x = 0$, og $x - 4 = 0$ gir $x = 4$. Løsningene er altså $x = 0$ og $x = 4$.

Legg merke til at $2$ i faktoren $2x$ aldri kan bli null. Når vi bruker nullregelen, er det bare faktorene som inneholder $x$ som gir løsninger. Men vi tar med $2x$ som helhet, og $2x = 0$ betyr selvfølgelig $x = 0$.

Et annet eksempel: $x^2 + 5x = 0$. Her er den felles faktoren bare $x$: $x(x + 5) = 0$. Vi får $x = 0$ eller $x = -5$.

Hva med $5x^2 = 15x$? Først flytter vi alt til én side: $5x^2 - 15x = 0$. Felles faktor er $5x$: $5x(x - 3) = 0$. Løsningene er $x = 0$ og $x = 3$.

Noen ganger kan du sette ut en felles tallfaktor og deretter faktorisere det som er igjen videre. For eksempel: $3x^2 - 12 = 0$. Vi setter 3 utenfor: $3(x^2 - 4) = 0$. Siden $3 \\neq 0$, må $x^2 - 4 = 0$. Og her kjenner vi igjen konjugatsetningen: $x^2 - 4 = (x + 2)(x - 2) = 0$, som gir $x = \\pm 2$.`,
    },
    {
      id: '1t-2-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-2-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på felles faktor:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-2-n-quiz4-q0',
            task: 'Hva er løsningene til $3x^2 - 12x = 0$?',
            options: [
              { id: 'a', text: '$x = 4$', isCorrect: false },
              { id: 'b', text: '$x = 0$ eller $x = 4$', isCorrect: true },
              { id: 'c', text: '$x = 0$ eller $x = -4$', isCorrect: false },
              { id: 'd', text: '$x = \\pm 4$', isCorrect: false },
            ],
            solution: 'Vi setter felles faktor $3x$ utenfor: $3x(x - 4) = 0$. Nullregelen gir $3x = 0$ (altså $x = 0$) eller $x - 4 = 0$ (altså $x = 4$).',
          },
          {
            id: '1t-2-2-n-quiz4-q1',
            task: 'Hva er løsningene til $x^2 + 7x = 0$?',
            options: [
              { id: 'a', text: '$x = -7$', isCorrect: false },
              { id: 'b', text: '$x = 7$', isCorrect: false },
              { id: 'c', text: '$x = 0$ eller $x = -7$', isCorrect: true },
              { id: 'd', text: '$x = 0$ eller $x = 7$', isCorrect: false },
            ],
            solution: 'Felles faktor er $x$: $x(x + 7) = 0$. Nullregelen gir $x = 0$ eller $x + 7 = 0$, altså $x = 0$ eller $x = -7$.',
          },
          {
            id: '1t-2-2-n-quiz4-q2',
            task: 'Hva er løsningene til $3x^2 - 12 = 0$?',
            options: [
              { id: 'a', text: '$x = \\pm 4$', isCorrect: false },
              { id: 'b', text: '$x = \\pm 2$', isCorrect: true },
              { id: 'c', text: '$x = 2$', isCorrect: false },
              { id: 'd', text: '$x = 0$ eller $x = 4$', isCorrect: false },
            ],
            solution: 'Vi setter 3 utenfor: $3(x^2 - 4) = 0$. Siden $3 \\neq 0$, må $x^2 - 4 = 0$. Konjugatsetningen gir $(x + 2)(x - 2) = 0$, altså $x = \\pm 2$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-2-n-section5',
      type: 'text',
      content: `## Kombinere teknikkene -- større utfordringer

Nå som du kan alle enkeltteknikkene, er det på tide å kombinere dem. De mest krevende oppgavene krever at du først setter en felles faktor utenfor, og deretter faktoriserer det som er igjen inne i parentesen.

Ta $2x^2 - 50 = 0$. Felles faktor er 2: $2(x^2 - 25) = 0$. Siden $2 \\neq 0$, må $x^2 - 25 = 0$. Her bruker vi konjugatsetningen: $(x + 5)(x - 5) = 0$, og vi får $x = \\pm 5$.

Hva med $3x^2 + 6x - 24 = 0$? Alle tre leddene er delelige med 3, så vi setter det utenfor: $3(x^2 + 2x - 8) = 0$. Nå skal vi faktorisere $x^2 + 2x - 8$. Vi trenger to tall med sum $-2$ og produkt $-8$. Tallene $-4$ og $2$ fungerer: $(-4) + 2 = -2$ og $(-4) \\cdot 2 = -8$. Altså $3(x + 4)(x - 2) = 0$, som gir $x = -4$ eller $x = 2$.

Et enda mer krevende eksempel: $-x^2 + 4x + 5 = 0$. Her er koeffisienten foran $x^2$ negativ. Vi setter $-1$ utenfor: $-(x^2 - 4x - 5) = 0$. Nå faktoriserer vi det som er inne i parentesen. Vi trenger to tall med sum $4$ og produkt $-5$. Det er $5$ og $-1$: $5 + (-1) = 4$ og $5 \\cdot (-1) = -5$. Altså $-(x - 5)(x + 1) = 0$, som gir $x = 5$ eller $x = -1$.

Strategien kan oppsummeres slik: se alltid etter felles faktor først. Deretter prøver du inspeksjon, konjugatsetningen eller en kombinasjon. Husk at en tallfaktor som ikke inneholder $x$ aldri kan gi en løsning, så den kan du se bort fra i nullregelen.`,
    },
    {
      id: '1t-2-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-2-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på å kombinere faktoriseringsteknikker:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-2-n-quiz5-q0',
            task: 'Hva er løsningene til $2x^2 - 14x + 24 = 0$?',
            options: [
              { id: 'a', text: '$x = -3$ eller $x = -4$', isCorrect: false },
              { id: 'b', text: '$x = 3$ eller $x = 4$', isCorrect: true },
              { id: 'c', text: '$x = 6$ eller $x = 2$', isCorrect: false },
              { id: 'd', text: '$x = -6$ eller $x = -2$', isCorrect: false },
            ],
            solution: 'Vi setter felles faktor 2 utenfor: $2(x^2 - 7x + 12) = 0$. Vi trenger to tall med sum $7$ og produkt $12$: det er $3$ og $4$. Altså $2(x - 3)(x - 4) = 0$, som gir $x = 3$ eller $x = 4$.',
          },
          {
            id: '1t-2-2-n-quiz5-q1',
            task: 'Hva er løsningene til $-x^2 + 4x + 5 = 0$?',
            options: [
              { id: 'a', text: '$x = -1$ eller $x = 5$', isCorrect: true },
              { id: 'b', text: '$x = 1$ eller $x = -5$', isCorrect: false },
              { id: 'c', text: '$x = -1$ eller $x = -5$', isCorrect: false },
              { id: 'd', text: '$x = 1$ eller $x = 5$', isCorrect: false },
            ],
            solution: 'Vi setter $-1$ utenfor: $-(x^2 - 4x - 5) = 0$. Vi trenger to tall med sum $4$ og produkt $-5$: det er $5$ og $-1$. Altså $-(x - 5)(x + 1) = 0$, som gir $x = 5$ eller $x = -1$.',
          },
          {
            id: '1t-2-2-n-quiz5-q2',
            task: 'Hva bør du alltid sjekke først når du skal faktorisere en andregradslikning?',
            options: [
              { id: 'a', text: 'Om diskriminanten er positiv', isCorrect: false },
              { id: 'b', text: 'Om det finnes en felles faktor i alle ledd', isCorrect: true },
              { id: 'c', text: 'Om koeffisienten foran $x$ er partall', isCorrect: false },
              { id: 'd', text: 'Om konstantleddet er et primtall', isCorrect: false },
            ],
            solution: 'Du bør alltid sjekke om det finnes en felles faktor i alle leddene først. Å sette den utenfor forenkler uttrykket inne i parentesen, og gjør det lettere å faktorisere videre.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært å løse andregradslikninger ved faktorisering. Metoden bygger på fire teknikker:

**Nullregelen** er fundamentet: hvis $A \\cdot B = 0$, så er $A = 0$ eller $B = 0$. Klarer vi å skrive likningen som et produkt lik null, kan vi lese av løsningene direkte.

**Faktorisering ved inspeksjon** brukes når $a = 1$. Vi leter etter to tall med riktig sum og produkt. For $x^2 + bx + c = 0$ trenger vi tall $r_1$ og $r_2$ slik at $r_1 + r_2 = -b$ og $r_1 \\cdot r_2 = c$. Da er $x^2 + bx + c = (x - r_1)(x - r_2)$.

**Konjugatsetningen** gir oss $a^2 - b^2 = (a + b)(a - b)$. Denne brukes når vi har en differanse mellom to kvadrater, for eksempel $x^2 - 16 = (x + 4)(x - 4)$.

**Felles faktor** bør alltid sjekkes først. Sett den utenfor parentesen, og faktoriser det som er igjen inne i parentesen med inspeksjon eller konjugatsetningen. Husk at en tallfaktor aldri gir en løsning, men $x$ som felles faktor gir alltid $x = 0$ som løsning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3 NARRATIV: ABC-formelen
// ============================================================================

export const CHAPTER_1T_2_3_NARRATIV: TextbookChapter = {
  id: '1t-2-3-narrativ',
  courseId: '1t',
  chapterNumber: '2.3',
  title: 'ABC-formelen',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om den berømte formelen som knekker alle andregradslikninger – fra diskriminanten som avslører antall løsninger, til nullpunktsfaktorisering og produktregelen.',
  estimatedMinutes: 40,
  competenceGoals: ['løse andregradslikninger med abc-formelen', 'faktorisere andregradsuttrykk ved nullpunktsfaktorisering'],
  linkedChapterId: '1t-2-3',
  content: [    {
      id: '1t-2-3-n-intro',
      type: 'text',
      content: `## Formelen som løser alt

Tenk deg at du står foran en andregradslikning. Kanskje du prøver å finne når en ball treffer bakken, eller når inntektene til en bedrift passerer et bestemt nivå. Uansett situasjon ender du opp med noe som ser ut som $ax^2 + bx + c = 0$. Finnes det en universaloppskrift som alltid virker? Svaret er ja, og den heter **abc-formelen** – også kalt **andregradsformelen**. I dette kapittelet skal vi lære å bruke den, forstå hva **diskriminanten** forteller oss om antall løsninger, og deretter se hvordan vi kan bruke løsningene til å **faktorisere** andregradsuttrykk med en teknikk som kalles **nullpunktsfaktorisering**. Til slutt møter vi **produktregelen**, som lar oss løse likninger der venstresiden allerede er et produkt av faktorer.`,
    },
    {
      id: '1t-2-3-n-section1',
      type: 'text',
      content: `## ABC-formelen i praksis

Når du har en likning på formen $ax^2 + bx + c = 0$, gir abc-formelen deg svaret direkte:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

Bokstavene $a$, $b$ og $c$ er koeffisientene i likningen. $a$ er tallet foran $x^2$, $b$ er tallet foran $x$, og $c$ er konstantleddet. Symbolet $\\pm$ betyr at vi regner ut to verdier: én gang med pluss og én gang med minus. Disse to verdiene kalles $x_1$ og $x_2$ – likningens to løsninger.

La oss prøve med $x^2 - 5x + 6 = 0$. Her er $a = 1$, $b = -5$ og $c = 6$. Vi setter inn i formelen: $x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4 \\cdot 1 \\cdot 6}}{2 \\cdot 1} = \\frac{5 \\pm \\sqrt{25 - 24}}{2} = \\frac{5 \\pm 1}{2}$. Det gir $x_1 = \\frac{5 - 1}{2} = 2$ og $x_2 = \\frac{5 + 1}{2} = 3$.

Et viktig poeng: likningen **må** stå på formen $ax^2 + bx + c = 0$ før du leser av koeffisientene. Får du for eksempel $2x^2 - 12x = -16$, må du først flytte $-16$ over slik at du får $2x^2 - 12x + 16 = 0$. Da er $a = 2$, $b = -12$ og $c = 16$. Setter du inn, finner du $x_1 = 4$ og $x_2 = 2$. Vær alltid nøye med fortegnene – husk at $b$ kan være negativ, og da blir $-b$ positiv.`,
    },
    {
      id: '1t-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på abc-formelen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-3-n-quiz1-q0',
            task: 'Hva er verdiene av $a$, $b$ og $c$ i likningen $3x^2 + 7x - 2 = 0$?',
            options: [
              { id: 'a', text: '$a = 3$, $b = 7$, $c = 2$', isCorrect: false },
              { id: 'b', text: '$a = 3$, $b = 7$, $c = -2$', isCorrect: true },
              { id: 'c', text: '$a = 3$, $b = -7$, $c = -2$', isCorrect: false },
              { id: 'd', text: '$a = 7$, $b = 3$, $c = -2$', isCorrect: false },
            ],
            solution: 'I likningen $3x^2 + 7x - 2 = 0$ leser vi av koeffisientene: $a$ er tallet foran $x^2$, altså $3$. $b$ er tallet foran $x$, altså $7$. $c$ er konstantleddet, altså $-2$ (husk fortegnet!).',
          },
          {
            id: '1t-2-3-n-quiz1-q1',
            task: 'I likningen $2x^2 - 10 = 3x$ -- hva må du gjøre før du bruker abc-formelen?',
            options: [
              { id: 'a', text: 'Dele på 2', isCorrect: false },
              { id: 'b', text: 'Flytte $3x$ slik at alt står på formen $ax^2 + bx + c = 0$', isCorrect: true },
              { id: 'c', text: 'Ta kvadratroten', isCorrect: false },
              { id: 'd', text: 'Sette inn $a = 2$, $b = -10$, $c = 3$', isCorrect: false },
            ],
            solution: 'Likningen må stå på formen $ax^2 + bx + c = 0$ før du leser av koeffisientene. Vi flytter $3x$: $2x^2 - 3x - 10 = 0$. Da er $a = 2$, $b = -3$ og $c = -10$.',
          },
          {
            id: '1t-2-3-n-quiz1-q2',
            task: 'Hva er løsningene til $x^2 - 5x + 6 = 0$ med abc-formelen?',
            options: [
              { id: 'a', text: '$x = 2$ eller $x = 3$', isCorrect: true },
              { id: 'b', text: '$x = -2$ eller $x = -3$', isCorrect: false },
              { id: 'c', text: '$x = 1$ eller $x = 6$', isCorrect: false },
              { id: 'd', text: '$x = -1$ eller $x = -6$', isCorrect: false },
            ],
            solution: 'Med $a = 1$, $b = -5$, $c = 6$: $x = \\frac{5 \\pm \\sqrt{25 - 24}}{2} = \\frac{5 \\pm 1}{2}$. Det gir $x_1 = \\frac{5 - 1}{2} = 2$ og $x_2 = \\frac{5 + 1}{2} = 3$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-3-n-section2',
      type: 'text',
      content: `## Diskriminanten – nøkkelen til antall løsninger

Du la kanskje merke til uttrykket $b^2 - 4ac$ som står under rottegnet i abc-formelen. Dette uttrykket har et eget navn: **diskriminanten**. Den er utrolig nyttig fordi den forteller oss, uten at vi trenger å fullføre hele utregningen, hvor mange løsninger likningen har.

Tenk på det slik: vi skal ta kvadratroten av $b^2 - 4ac$. Kvadratroten av et positivt tall gir oss et vanlig tall, og da får vi to forskjellige verdier når vi regner $\\pm$. Men hva skjer dersom $b^2 - 4ac = 0$? Da blir $\\pm\\sqrt{0} = \\pm 0$, og pluss null er det samme som minus null – vi får bare **én** løsning. Og hvis $b^2 - 4ac$ er negativt? Da skal vi ta kvadratroten av et negativt tall, noe som ikke er definert blant de reelle tallene. Likningen har da **ingen løsninger**, og vi skriver $L = \\emptyset$.

La oss se dette i praksis. For $x^2 + 10x + 25 = 0$ har vi $b^2 - 4ac = 100 - 100 = 0$. Diskriminanten er null, og vi vet med én gang at det bare finnes én løsning. Setter vi inn, finner vi $x = \\frac{-10}{2} = -5$. For $x^2 - 5x + 8 = 0$ blir diskriminanten $25 - 32 = -7$. Siden dette er negativt, finnes ingen løsninger.

Oppsummert: er diskriminanten positiv, har vi to løsninger. Er den null, har vi nøyaktig én. Er den negativ, har vi ingen. Denne raske sjekken kan spare deg for mye regnearbeid.`,
    },
    {
      id: '1t-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på diskriminanten:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-3-n-quiz2-q0',
            task: 'Likningen $x^2 - 7x + 15 = 0$ har diskriminant $b^2 - 4ac = 49 - 60 = -11$. Hvor mange løsninger har likningen?',
            options: [
              { id: 'a', text: 'To løsninger', isCorrect: false },
              { id: 'b', text: 'Én løsning', isCorrect: false },
              { id: 'c', text: 'Ingen løsninger', isCorrect: true },
              { id: 'd', text: 'Uendelig mange løsninger', isCorrect: false },
            ],
            solution: 'Diskriminanten er $-11$, altså negativ. Vi kan ikke ta kvadratroten av et negativt tall, så likningen har ingen reelle løsninger. Vi skriver $L = \\emptyset$.',
          },
          {
            id: '1t-2-3-n-quiz2-q1',
            task: 'Hva er diskriminanten til $x^2 + 10x + 25 = 0$, og hvor mange løsninger har likningen?',
            options: [
              { id: 'a', text: 'Diskriminant $= 0$, én løsning', isCorrect: true },
              { id: 'b', text: 'Diskriminant $= 100$, to løsninger', isCorrect: false },
              { id: 'c', text: 'Diskriminant $= -100$, ingen løsninger', isCorrect: false },
              { id: 'd', text: 'Diskriminant $= 25$, to løsninger', isCorrect: false },
            ],
            solution: '$b^2 - 4ac = 10^2 - 4 \\cdot 1 \\cdot 25 = 100 - 100 = 0$. Diskriminanten er null, og likningen har nøyaktig én løsning: $x = \\frac{-10}{2} = -5$.',
          },
          {
            id: '1t-2-3-n-quiz2-q2',
            task: 'Hva forteller en positiv diskriminant oss?',
            options: [
              { id: 'a', text: 'Likningen har ingen løsninger', isCorrect: false },
              { id: 'b', text: 'Likningen har nøyaktig én løsning', isCorrect: false },
              { id: 'c', text: 'Likningen har to forskjellige løsninger', isCorrect: true },
              { id: 'd', text: 'Likningen har uendelig mange løsninger', isCorrect: false },
            ],
            solution: 'Når $b^2 - 4ac > 0$, gir $\\pm\\sqrt{b^2 - 4ac}$ to forskjellige verdier, og abc-formelen gir to forskjellige løsninger $x_1$ og $x_2$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-3-n-section3',
      type: 'text',
      content: `## Nullpunktsfaktorisering – fra løsninger til faktorer

Nå skal vi snu prosessen. I stedet for å gå fra et andregradsuttrykk til løsninger, skal vi bruke løsningene til å **faktorisere** uttrykket. Denne teknikken kalles **nullpunktsfaktorisering**.

Ideen er elegant: når du har funnet at $ax^2 + bx + c = 0$ har løsningene $x_1$ og $x_2$, kan du skrive uttrykket som et produkt:

$$ax^2 + bx + c = a(x - x_1)(x - x_2)$$

Legg merke til at vi setter inn $x_1$ og $x_2$ med minustegn foran. Hvis $x_1 = 2$, skriver vi $(x - 2)$. Hvis $x_1 = -3$, skriver vi $(x - (-3)) = (x + 3)$.

La oss teste dette med $x^2 - 5x + 6$. Vi vet allerede at løsningene er $x_1 = 2$ og $x_2 = 3$ (vi fant dem med abc-formelen). Siden $a = 1$, blir faktoriseringen $1 \\cdot (x - 2)(x - 3) = (x - 2)(x - 3)$. Og sannelig: $(x - 2)(x - 3) = x^2 - 3x - 2x + 6 = x^2 - 5x + 6$. Det stemmer!

For $2x^2 - 12x + 16$ finner vi med abc-formelen at $x_1 = 2$ og $x_2 = 4$. Siden $a = 2$, blir faktoriseringen $2(x - 2)(x - 4)$. Husk at $a$-verdien alltid skal stå foran parentesene.

Hva hvis likningen bare har én løsning? Da setter vi inn den samme verdien for både $x_1$ og $x_2$. For eksempel gir $3x^2 + 18x + 27 = 0$ kun $x = -3$, og vi faktoriserer som $3(x + 3)(x + 3) = 3(x + 3)^2$.`,
    },
    {
      id: '1t-2-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-2-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på nullpunktsfaktorisering:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-3-n-quiz3-q0',
            task: 'Gitt at $x^2 + 3x - 10 = 0$ har løsningene $x_1 = -5$ og $x_2 = 2$, hva er den faktoriserte formen?',
            options: [
              { id: 'a', text: '$(x - 5)(x + 2)$', isCorrect: false },
              { id: 'b', text: '$(x + 5)(x + 2)$', isCorrect: false },
              { id: 'c', text: '$(x - 5)(x - 2)$', isCorrect: false },
              { id: 'd', text: '$(x + 5)(x - 2)$', isCorrect: true },
            ],
            solution: 'Vi bruker formelen $a(x - x_1)(x - x_2)$ med $a = 1$, $x_1 = -5$ og $x_2 = 2$. Det gir $(x - (-5))(x - 2) = (x + 5)(x - 2)$.',
          },
          {
            id: '1t-2-3-n-quiz3-q1',
            task: 'Gitt at $2x^2 - 12x + 16 = 0$ har løsningene $x_1 = 2$ og $x_2 = 4$, hva er den faktoriserte formen?',
            options: [
              { id: 'a', text: '$(x - 2)(x - 4)$', isCorrect: false },
              { id: 'b', text: '$2(x - 2)(x - 4)$', isCorrect: true },
              { id: 'c', text: '$2(x + 2)(x + 4)$', isCorrect: false },
              { id: 'd', text: '$(2x - 2)(x - 4)$', isCorrect: false },
            ],
            solution: 'Vi bruker formelen $a(x - x_1)(x - x_2)$ med $a = 2$. Det gir $2(x - 2)(x - 4)$. Husk at $a$-verdien alltid skal stå foran parentesene.',
          },
          {
            id: '1t-2-3-n-quiz3-q2',
            task: 'Hva er formelen for nullpunktsfaktorisering?',
            options: [
              { id: 'a', text: '$ax^2 + bx + c = (x - x_1)(x - x_2)$', isCorrect: false },
              { id: 'b', text: '$ax^2 + bx + c = a(x + x_1)(x + x_2)$', isCorrect: false },
              { id: 'c', text: '$ax^2 + bx + c = a(x - x_1)(x - x_2)$', isCorrect: true },
              { id: 'd', text: '$ax^2 + bx + c = (ax - x_1)(x - x_2)$', isCorrect: false },
            ],
            solution: 'Formelen er $ax^2 + bx + c = a(x - x_1)(x - x_2)$, der $x_1$ og $x_2$ er løsningene og $a$ er koeffisienten foran $x^2$. Legg merke til at $a$ alltid står foran.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-3-n-section4',
      type: 'text',
      content: `## Forkorting av brøker med faktorisering

Nullpunktsfaktorisering viser virkelig sin styrke når vi skal forkorte brøker der teller eller nevner inneholder andregradsuttrykk. Trikset er å faktorisere både teller og nevner, og deretter stryke felles faktorer.

Ta for eksempel $\\frac{x^2 + 5x + 6}{x + 3}$. Vi faktoriserer telleren: $x^2 + 5x + 6 = 0$ gir $x_1 = -2$ og $x_2 = -3$, altså $x^2 + 5x + 6 = (x + 2)(x + 3)$. Nå ser vi at $(x + 3)$ er felles i teller og nevner, og vi kan forkorte: $\\frac{(x + 2)(x + 3)}{x + 3} = x + 2$.

Et mer utfordrende eksempel er $\\frac{x^2 - 10x + 24}{x^2 - 16}$. Telleren faktoriseres med nullpunktsfaktorisering: $x^2 - 10x + 24 = (x - 4)(x - 6)$. Nevneren kjenner vi igjen som konjugatsetningen: $x^2 - 16 = (x + 4)(x - 4)$. Felles faktor er $(x - 4)$, og vi står igjen med $\\frac{x - 6}{x + 4}$.

Noen ganger må vi faktorisere ut en felles faktor før vi bruker nullpunktsfaktorisering. I $\\frac{2x^2 - 16x + 30}{4x^2 - 100}$ begynner vi med å trekke ut 2 fra telleren og 4 fra nevneren: $\\frac{2(x^2 - 8x + 15)}{4(x^2 - 25)}$. Telleren gir $(x - 3)(x - 5)$, og nevneren er $(x + 5)(x - 5)$. Etter forkorting av $(x - 5)$ og $\\frac{2}{4}$ sitter vi igjen med $\\frac{x - 3}{2(x + 5)}$. Evnen til å se felles faktorer er nøkkelen – og det krever øvelse.`,
    },
    {
      id: '1t-2-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-2-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på forkorting med faktorisering:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-3-n-quiz4-q0',
            task: 'Hva blir $\\frac{x^2 + 5x + 6}{x + 2}$ etter forkorting?',
            options: [
              { id: 'a', text: '$x + 2$', isCorrect: false },
              { id: 'b', text: '$x + 6$', isCorrect: false },
              { id: 'c', text: '$x + 3$', isCorrect: true },
              { id: 'd', text: '$\\frac{x + 6}{x + 2}$', isCorrect: false },
            ],
            solution: 'Vi faktoriserer telleren: $x^2 + 5x + 6 = (x + 2)(x + 3)$. Nevneren er $(x + 2)$. Felles faktor strykes, og vi sitter igjen med $x + 3$.',
          },
          {
            id: '1t-2-3-n-quiz4-q1',
            task: 'Hva blir $\\frac{x^2 - 16}{x + 4}$ etter forkorting?',
            options: [
              { id: 'a', text: '$x + 4$', isCorrect: false },
              { id: 'b', text: '$x - 4$', isCorrect: true },
              { id: 'c', text: '$x - 16$', isCorrect: false },
              { id: 'd', text: '$\\frac{x - 4}{x + 4}$', isCorrect: false },
            ],
            solution: 'Vi faktoriserer telleren med konjugatsetningen: $x^2 - 16 = (x + 4)(x - 4)$. Nevneren er $(x + 4)$. Etter forkorting sitter vi igjen med $x - 4$.',
          },
          {
            id: '1t-2-3-n-quiz4-q2',
            task: 'Hva er første steg for å forkorte $\\frac{x^2 - 10x + 24}{x^2 - 16}$?',
            options: [
              { id: 'a', text: 'Dele teller og nevner på $x$', isCorrect: false },
              { id: 'b', text: 'Sette inn et tall for $x$', isCorrect: false },
              { id: 'c', text: 'Faktorisere både teller og nevner', isCorrect: true },
              { id: 'd', text: 'Trekke nevneren fra telleren', isCorrect: false },
            ],
            solution: 'For å forkorte en brøk med andregradsuttrykk må vi faktorisere både teller og nevner. Telleren gir $(x - 4)(x - 6)$, nevneren gir $(x + 4)(x - 4)$. Felles faktor $(x - 4)$ strykes.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-3-n-section5',
      type: 'text',
      content: `## Produktregelen – når svaret allerede er faktorisert

Til slutt i dette kapittelet skal vi se på **produktregelen**. Den er enkel, men utrolig nyttig: dersom $a \\cdot b = 0$, så må enten $a = 0$ eller $b = 0$ (eller begge).

Tenk på det logisk: det eneste som kan gjøre et produkt lik null, er at minst én av faktorene er null. $5 \\cdot 0 = 0$, $0 \\cdot 7 = 0$, men $5 \\cdot 7 = 35 \\neq 0$.

Hvorfor er dette nyttig? Fordi vi noen ganger møter likninger der venstresiden allerede er et produkt av faktorer. Ta $(x - 4)(x + 2) = 0$. Produktregelen sier at enten $x - 4 = 0$ eller $x + 2 = 0$. Fra den første får vi $x = 4$, og fra den andre $x = -2$. Vi fant to løsninger uten å bruke abc-formelen i det hele tatt.

Produktregelen fungerer også med flere enn to faktorer. For $3\\left(x + \\frac{1}{2}\\right)(x - 0{,}3)(x - \\sqrt{5}) = 0$ sier regelen at minst én faktor må være null. Konstanten 3 kan aldri bli null, så vi sjekker de tre parentesene: $x = -\\frac{1}{2}$, $x = 0{,}3$ og $x = \\sqrt{5}$.

Legg merke til sammenhengen med nullpunktsfaktorisering. Når vi faktoriserer $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$ og deretter bruker produktregelen, får vi akkurat de samme løsningene som abc-formelen ville gitt oss. De to teknikkene er altså to sider av samme sak: abc-formelen tar oss fra uttrykk til løsninger, og produktregelen tar oss fra faktorer til løsninger.`,
    },
    {
      id: '1t-2-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-2-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på produktregelen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-3-n-quiz5-q0',
            task: 'Hva er løsningene til $(x + 7)(x - 3) = 0$?',
            options: [
              { id: 'a', text: '$x = 7$ eller $x = -3$', isCorrect: false },
              { id: 'b', text: '$x = -7$ eller $x = 3$', isCorrect: true },
              { id: 'c', text: '$x = 7$ eller $x = 3$', isCorrect: false },
              { id: 'd', text: '$x = -7$ eller $x = -3$', isCorrect: false },
            ],
            solution: 'Produktregelen sier at enten $x + 7 = 0$ eller $x - 3 = 0$. Fra den første: $x = -7$. Fra den andre: $x = 3$. Løsningene er altså $x = -7$ eller $x = 3$.',
          },
          {
            id: '1t-2-3-n-quiz5-q1',
            task: 'Hva er løsningene til $5(x - 1)(x + 4)(x - 2) = 0$?',
            options: [
              { id: 'a', text: '$x = 5$, $x = 1$, $x = -4$ eller $x = 2$', isCorrect: false },
              { id: 'b', text: '$x = 1$, $x = -4$ eller $x = 2$', isCorrect: true },
              { id: 'c', text: '$x = -1$, $x = 4$ eller $x = -2$', isCorrect: false },
              { id: 'd', text: '$x = 0$, $x = 1$, $x = -4$ eller $x = 2$', isCorrect: false },
            ],
            solution: 'Konstanten $5$ kan aldri bli null. Vi setter hver parentes lik null: $x - 1 = 0$ gir $x = 1$, $x + 4 = 0$ gir $x = -4$, $x - 2 = 0$ gir $x = 2$.',
          },
          {
            id: '1t-2-3-n-quiz5-q2',
            task: 'Hva er sammenhengen mellom abc-formelen og produktregelen?',
            options: [
              { id: 'a', text: 'De er helt uavhengige teknikker', isCorrect: false },
              { id: 'b', text: 'Abc-formelen gir løsninger fra uttrykk, produktregelen gir løsninger fra faktorer', isCorrect: true },
              { id: 'c', text: 'Produktregelen er bare en forenklet versjon av abc-formelen', isCorrect: false },
              { id: 'd', text: 'Abc-formelen brukes bare for lineære likninger', isCorrect: false },
            ],
            solution: 'Abc-formelen tar oss fra et andregradsuttrykk til løsninger, mens produktregelen tar oss fra et faktorisert uttrykk til løsninger. De er to sider av samme sak -- abc-formelen finner løsningene, som vi kan bruke til å faktorisere.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært fire sammenhengende teknikker for andregradslikninger:

**ABC-formelen** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ løser enhver andregradslikning $ax^2 + bx + c = 0$. Husk å skrive likningen på riktig form og vær nøye med fortegnene til $a$, $b$ og $c$.

**Diskriminanten** $b^2 - 4ac$ forteller oss hvor mange løsninger likningen har uten at vi trenger å fullføre utregningen. Positiv diskriminant gir to løsninger, null gir nøyaktig én, og negativ diskriminant betyr at likningen ikke har noen reelle løsninger.

**Nullpunktsfaktorisering** snur prosessen: når vi har funnet løsningene $x_1$ og $x_2$, kan vi skrive uttrykket som $a(x - x_1)(x - x_2)$. Denne teknikken er spesielt kraftig i kombinasjon med forkorting av rasjonale uttrykk, der vi faktoriserer teller og nevner og stryker felles faktorer.

**Produktregelen** sier at dersom et produkt er null, må minst én av faktorene være null. Den lar oss løse likninger som allerede er faktorisert ved å sette hver faktor lik null – en enkel og direkte vei til svaret.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4 NARRATIV: Fullstendig kvadrat
// ============================================================================

export const CHAPTER_1T_2_4_NARRATIV: TextbookChapter = {
  id: '1t-2-4-narrativ',
  courseId: '1t',
  chapterNumber: '2.4',
  title: 'Fullstendig kvadrat',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om metoden der du omformer andregradsuttrykk til perfekte kvadrater – og dermed løser likninger som ellers virker vanskelige.',
  estimatedMinutes: 40,
  competenceGoals: ['løse andregradslikninger ved å fullføre kvadratet'],
  linkedChapterId: '1t-2-4',
  content: [    {
      id: '1t-2-4-n-intro',
      type: 'text',
      content: `## En gammel teknikk i ny drakt

Du har allerede abc-formelen i verktøykassen din, og den løser enhver andregradslikning. Så hvorfor lære enda en metode? Fordi **fullstendig kvadrat** – eller «fullføre kvadratet» som det ofte kalles – gir deg noe abc-formelen ikke gir: en dyp forståelse av *hvorfor* formelen fungerer. Faktisk er det akkurat denne teknikken som brukes til å utlede abc-formelen i utgangspunktet. Dessuten er metoden uunnværlig når du senere skal finne toppunktet til en parabel eller omskrive uttrykk til en mer nyttig form. I dette kapittelet lærer vi først å gjenkjenne perfekte kvadrater, og deretter å «tvangsomforme» uttrykk som ikke er perfekte – slik at de blir det.`,
    },
    {
      id: '1t-2-4-n-section1',
      type: 'text',
      content: `## Gjenkjenne perfekte kvadrater

Grunnlaget for hele metoden er **kvadratsetningene**. Du husker dem kanskje fra algebra:

$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$

Mønsteret er alltid det samme: du har **kvadratet av det første**, pluss (eller minus) **det dobbelte produktet**, pluss **kvadratet av det andre**. Det midterste leddet – det dobbelte produktet – er nøkkelen til å gjenkjenne et fullstendig kvadrat.

Ta uttrykket $x^2 + 6x + 9$. Er dette et perfekt kvadrat? Vi sjekker: $a = x$ gir $a^2 = x^2$. Det midterste leddet er $6x = 2 \\cdot x \\cdot 3$, så $b = 3$. Da skal konstantleddet være $b^2 = 9$ – og det er det! Altså er $x^2 + 6x + 9 = (x + 3)^2$.

La oss prøve en til: $x^2 - 10x + 25$. Her er det midterste leddet $-10x = 2 \\cdot x \\cdot (-5)$, altså $b = 5$ (med minustegn i parentesen). Konstantleddet er $5^2 = 25$. Stemmer! Så $x^2 - 10x + 25 = (x - 5)^2$.

Hemmeligheten er enkel: ta koeffisienten foran $x$, del den på 2, og opphøy i andre. Hvis resultatet er lik konstantleddet, har du et perfekt kvadrat. For $x^2 + 6x + 9$: koeffisienten er 6, halvparten er 3, og $3^2 = 9$. Bingo.`,
    },
    {
      id: '1t-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på å gjenkjenne perfekte kvadrater:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-4-n-quiz1-q0',
            task: 'Hvilket av disse uttrykkene er et fullstendig kvadrat?',
            options: [
              { id: 'a', text: '$x^2 + 6x + 12$', isCorrect: false },
              { id: 'b', text: '$x^2 - 8x + 16$', isCorrect: true },
              { id: 'c', text: '$x^2 + 10x + 20$', isCorrect: false },
              { id: 'd', text: '$x^2 - 4x + 8$', isCorrect: false },
            ],
            solution: 'For $x^2 - 8x + 16$: halvparten av $-8$ er $-4$, og $(-4)^2 = 16$. Det stemmer med konstantleddet, så dette er $(x - 4)^2$. De andre har konstantledd som ikke passer.',
          },
          {
            id: '1t-2-4-n-quiz1-q1',
            task: 'Hva er $(x + 3)^2$ skrevet ut?',
            options: [
              { id: 'a', text: '$x^2 + 9$', isCorrect: false },
              { id: 'b', text: '$x^2 + 3x + 9$', isCorrect: false },
              { id: 'c', text: '$x^2 + 6x + 9$', isCorrect: true },
              { id: 'd', text: '$x^2 + 6x + 3$', isCorrect: false },
            ],
            solution: 'Vi bruker første kvadratsetning: $(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$. Det midterste leddet er det dobbelte produktet $2 \\cdot x \\cdot 3 = 6x$.',
          },
          {
            id: '1t-2-4-n-quiz1-q2',
            task: 'Hvordan sjekker du om $x^2 + bx + c$ er et perfekt kvadrat?',
            options: [
              { id: 'a', text: 'Sjekk om $b = c$', isCorrect: false },
              { id: 'b', text: 'Sjekk om $b^2 = c$', isCorrect: false },
              { id: 'c', text: 'Sjekk om $\\left(\\frac{b}{2}\\right)^2 = c$', isCorrect: true },
              { id: 'd', text: 'Sjekk om $2b = c$', isCorrect: false },
            ],
            solution: 'Ta koeffisienten foran $x$, del den på 2, og opphøy i andre. Hvis resultatet er lik konstantleddet $c$, er det et perfekt kvadrat. For eksempel: $x^2 + 6x + 9$ har $\\left(\\frac{6}{2}\\right)^2 = 9 = c$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-4-n-section2',
      type: 'text',
      content: `## Metoden: fullføre kvadratet steg for steg

Nå kommer det sentrale spørsmålet: hva gjør vi når uttrykket *ikke* er et perfekt kvadrat? Da **gjør vi det til ett** ved å legge til (og trekke fra) det som mangler.

La oss løse $x^2 + 6x - 7 = 0$ steg for steg.

**Steg 1: Flytt konstantleddet.** Vi vil ha $x$-leddene for seg selv: $x^2 + 6x = 7$.

**Steg 2: Finn det magiske tallet.** Ta halvparten av koeffisienten foran $x$, og opphøy i andre: $\\left(\\frac{6}{2}\\right)^2 = 9$.

**Steg 3: Legg til på begge sider.** Vi legger til 9 på begge sider slik at likevekten bevares: $x^2 + 6x + 9 = 7 + 9 = 16$.

**Steg 4: Skriv venstresiden som et kvadrat.** Nå er venstresiden et perfekt kvadrat: $(x + 3)^2 = 16$.

**Steg 5: Ta kvadratrot.** $x + 3 = \\pm 4$. Det gir $x = -3 + 4 = 1$ eller $x = -3 - 4 = -7$.

Metoden fungerer fordi vi «tvinger» venstresiden til å bli et fullstendig kvadrat. Det eneste vi gjør er å legge til et tall på begge sider – noe vi alltid har lov til i en likning. Deretter kan vi løse for $x$ ved å ta kvadratrot, noe som er mye enklere enn å bruke abc-formelen.`,
    },
    {
      id: '1t-2-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-2-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på å fullføre kvadratet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-4-n-quiz2-q0',
            task: 'I likningen $x^2 + 4x - 5 = 0$ flytter vi konstantleddet og får $x^2 + 4x = 5$. Hva legger vi til på begge sider for å fullføre kvadratet?',
            options: [
              { id: 'a', text: '$2$', isCorrect: false },
              { id: 'b', text: '$8$', isCorrect: false },
              { id: 'c', text: '$16$', isCorrect: false },
              { id: 'd', text: '$4$', isCorrect: true },
            ],
            solution: 'Koeffisienten foran $x$ er 4. Halvparten er 2, og $2^2 = 4$. Vi legger altså til 4 på begge sider, slik at venstresiden blir $x^2 + 4x + 4 = (x + 2)^2$.',
          },
          {
            id: '1t-2-4-n-quiz2-q1',
            task: 'Hva er løsningene til $x^2 + 6x - 7 = 0$ ved å fullføre kvadratet?',
            options: [
              { id: 'a', text: '$x = 1$ eller $x = -7$', isCorrect: true },
              { id: 'b', text: '$x = -1$ eller $x = 7$', isCorrect: false },
              { id: 'c', text: '$x = 3$ eller $x = -3$', isCorrect: false },
              { id: 'd', text: '$x = 7$ eller $x = -1$', isCorrect: false },
            ],
            solution: 'Flytt konstantleddet: $x^2 + 6x = 7$. Legg til $\\left(\\frac{6}{2}\\right)^2 = 9$: $x^2 + 6x + 9 = 16$, altså $(x + 3)^2 = 16$. Kvadratrot: $x + 3 = \\pm 4$. Da er $x = -3 + 4 = 1$ eller $x = -3 - 4 = -7$.',
          },
          {
            id: '1t-2-4-n-quiz2-q2',
            task: 'Hva er de fire stegene i metoden «fullstendig kvadrat»?',
            options: [
              { id: 'a', text: 'Gang ut, samle like ledd, del på $a$, ta kvadratrot', isCorrect: false },
              { id: 'b', text: 'Flytt konstantleddet, legg til $\\left(\\frac{b}{2}\\right)^2$, skriv som kvadrat, ta kvadratrot', isCorrect: true },
              { id: 'c', text: 'Faktoriser, bruk nullregelen, sjekk svaret, forenkle', isCorrect: false },
              { id: 'd', text: 'Finn diskriminanten, sett inn i formelen, forenkle, sjekk', isCorrect: false },
            ],
            solution: 'De fire stegene er: (1) Flytt konstantleddet til høyre side, (2) Legg til $\\left(\\frac{b}{2}\\right)^2$ på begge sider, (3) Skriv venstresiden som et perfekt kvadrat, (4) Ta kvadratrot av begge sider og løs for $x$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-4-n-section3',
      type: 'text',
      content: `## Når svaret inneholder røtter

Ikke alle andregradslikninger har «pene» heltallsløsninger. Noen ganger ender vi opp med kvadratrøtter i svaret – og det er helt greit. Metoden fungerer akkurat likt.

La oss løse $x^2 - 4x + 1 = 0$. Vi flytter konstantleddet: $x^2 - 4x = -1$. Halvparten av $-4$ er $-2$, og $(-2)^2 = 4$. Vi legger til 4 på begge sider: $x^2 - 4x + 4 = -1 + 4 = 3$. Venstresiden er nå $(x - 2)^2 = 3$.

Når vi tar kvadratrot, får vi $x - 2 = \\pm\\sqrt{3}$. Løsningene er altså $x = 2 + \\sqrt{3}$ og $x = 2 - \\sqrt{3}$. Disse er **eksakte** svar. Med kalkulator finner vi at $\\sqrt{3} \\approx 1{,}73$, altså $x \\approx 3{,}73$ eller $x \\approx 0{,}27$ – men i matematikken foretrekker vi de eksakte uttrykkene.

Et annet eksempel: $x^2 + 2x - 1 = 0$ gir oss $x^2 + 2x = 1$, så $x^2 + 2x + 1 = 2$, altså $(x + 1)^2 = 2$. Da er $x = -1 \\pm \\sqrt{2}$.

Poenget er at metoden alltid gir deg eksakte svar. Når høyresiden er et positivt tall som ikke er et perfekt kvadrat, blir svaret uttrykt med en kvadratrot. Når høyresiden er null, har vi bare én løsning. Og hvis høyresiden blir negativ, finnes det ingen reelle løsninger – akkurat som med diskriminanten i abc-formelen.`,
    },
    {
      id: '1t-2-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-2-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på løsninger med røtter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-4-n-quiz3-q0',
            task: 'Hva er løsningene til $(x - 3)^2 = 5$?',
            options: [
              { id: 'a', text: '$x = 3 + \\sqrt{5}$ eller $x = 3 - \\sqrt{5}$', isCorrect: true },
              { id: 'b', text: '$x = \\sqrt{5} + 3$ eller $x = \\sqrt{5} - 3$', isCorrect: false },
              { id: 'c', text: '$x = 5 + \\sqrt{3}$ eller $x = 5 - \\sqrt{3}$', isCorrect: false },
              { id: 'd', text: '$x = 3 + 5$ eller $x = 3 - 5$', isCorrect: false },
            ],
            solution: 'Vi tar kvadratrot av begge sider: $x - 3 = \\pm\\sqrt{5}$. Deretter legger vi til 3: $x = 3 \\pm \\sqrt{5}$. Det gir $x = 3 + \\sqrt{5}$ eller $x = 3 - \\sqrt{5}$.',
          },
          {
            id: '1t-2-4-n-quiz3-q1',
            task: 'Hva er løsningene til $x^2 + 2x - 1 = 0$ ved å fullføre kvadratet?',
            options: [
              { id: 'a', text: '$x = 1 \\pm \\sqrt{2}$', isCorrect: false },
              { id: 'b', text: '$x = -1 \\pm \\sqrt{2}$', isCorrect: true },
              { id: 'c', text: '$x = -2 \\pm \\sqrt{1}$', isCorrect: false },
              { id: 'd', text: '$x = 2 \\pm \\sqrt{1}$', isCorrect: false },
            ],
            solution: 'Vi får $x^2 + 2x = 1$, legger til $1$: $(x + 1)^2 = 2$. Kvadratrot: $x + 1 = \\pm\\sqrt{2}$, altså $x = -1 \\pm \\sqrt{2}$.',
          },
          {
            id: '1t-2-4-n-quiz3-q2',
            task: 'Hva skjer hvis høyresiden blir negativ etter å ha fullført kvadratet, f.eks. $(x + 2)^2 = -3$?',
            options: [
              { id: 'a', text: 'Vi tar kvadratroten og får $x = -2 \\pm \\sqrt{-3}$', isCorrect: false },
              { id: 'b', text: 'Vi ganger med $-1$ og får $(x + 2)^2 = 3$', isCorrect: false },
              { id: 'c', text: 'Likningen har ingen reelle løsninger', isCorrect: true },
              { id: 'd', text: 'Løsningen er $x = -2$', isCorrect: false },
            ],
            solution: 'Et kvadrat kan aldri være negativt (for reelle tall). Hvis $(x + k)^2 = d$ der $d < 0$, finnes det ingen reelle løsninger. Vi skriver $L = \\emptyset$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-4-n-section4',
      type: 'text',
      content: `## Når koeffisienten foran $x^2$ ikke er 1

Hittil har vi jobbet med likninger der koeffisienten foran $x^2$ er 1. Men hva gjør vi med $2x^2 + 8x - 10 = 0$? Her er $a = 2$, og metoden forutsetter at leddet med $x^2$ har koeffisient 1. Løsningen er enkel: **del hele likningen på $a$** som første steg.

Vi deler på 2: $x^2 + 4x - 5 = 0$. Nå er vi tilbake på kjent grunn. Vi flytter konstantleddet: $x^2 + 4x = 5$. Vi legger til $\\left(\\frac{4}{2}\\right)^2 = 4$ på begge sider: $x^2 + 4x + 4 = 9$. Vi skriver venstresiden som et kvadrat: $(x + 2)^2 = 9$. Vi tar kvadratrot: $x + 2 = \\pm 3$. Svarene er $x = 1$ eller $x = -5$.

La oss ta et eksempel til: $3x^2 + 12x - 15 = 0$. Vi deler på 3: $x^2 + 4x - 5 = 0$. Legg merke til at vi fikk samme likning som over! Når vi deler på $a$, forenkler vi likningen, og resten av prosessen er den samme.

Hva med negative koeffisienter? For $-x^2 + 6x - 5 = 0$ deler vi på $-1$ og får $x^2 - 6x + 5 = 0$. Pass på at fortegnene snur seg: alle ledd bytter fortegn. Deretter: $x^2 - 6x = -5$, legg til $9$: $(x - 3)^2 = 4$, ta kvadratrot: $x - 3 = \\pm 2$, som gir $x = 5$ eller $x = 1$.

Huskeregelen er: se alltid på koeffisienten foran $x^2$ først. Er den noe annet enn 1, del hele likningen på den. Deretter følger du de fire stegene som vanlig.`,
    },
    {
      id: '1t-2-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-2-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på fullstendig kvadrat med koeffisient:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-4-n-quiz4-q0',
            task: 'Hva er første steg for å løse $4x^2 - 8x - 12 = 0$ ved å fullføre kvadratet?',
            options: [
              { id: 'a', text: 'Flytte $-12$ til høyre side', isCorrect: false },
              { id: 'b', text: 'Legge til $4$ på begge sider', isCorrect: false },
              { id: 'c', text: 'Dele hele likningen på $4$', isCorrect: true },
              { id: 'd', text: 'Ta kvadratroten av begge sider', isCorrect: false },
            ],
            solution: 'Koeffisienten foran $x^2$ er 4, som ikke er 1. Derfor deler vi hele likningen på 4 først: $x^2 - 2x - 3 = 0$. Deretter kan vi fullføre kvadratet som vanlig.',
          },
          {
            id: '1t-2-4-n-quiz4-q1',
            task: 'Hva er løsningene til $2x^2 + 8x - 10 = 0$?',
            options: [
              { id: 'a', text: '$x = 1$ eller $x = -5$', isCorrect: true },
              { id: 'b', text: '$x = -1$ eller $x = 5$', isCorrect: false },
              { id: 'c', text: '$x = 2$ eller $x = -5$', isCorrect: false },
              { id: 'd', text: '$x = -2$ eller $x = 5$', isCorrect: false },
            ],
            solution: 'Del på 2: $x^2 + 4x - 5 = 0$. Flytt: $x^2 + 4x = 5$. Legg til $4$: $(x + 2)^2 = 9$. Kvadratrot: $x + 2 = \\pm 3$. Altså $x = 1$ eller $x = -5$.',
          },
          {
            id: '1t-2-4-n-quiz4-q2',
            task: 'Hva gjør du med $-x^2 + 6x - 5 = 0$ før du fullstendiggjør kvadratet?',
            options: [
              { id: 'a', text: 'Legger til $x^2$ på begge sider', isCorrect: false },
              { id: 'b', text: 'Deler hele likningen på $-1$', isCorrect: true },
              { id: 'c', text: 'Flytter $-5$ til høyre side', isCorrect: false },
              { id: 'd', text: 'Tar kvadratroten av alle ledd', isCorrect: false },
            ],
            solution: 'Koeffisienten foran $x^2$ er $-1$. Vi deler hele likningen på $-1$: $x^2 - 6x + 5 = 0$. Alle fortegn snur seg. Deretter fullstendiggjør vi kvadratet som vanlig.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-4-n-section5',
      type: 'text',
      content: `## Sammenhengen med abc-formelen

Nå som du mestrer metoden, er det verdt å stoppe opp og se det store bildet. Hva skjer hvis vi fullfører kvadratet på den generelle likningen $ax^2 + bx + c = 0$?

Vi deler på $a$: $x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$. Vi flytter konstantleddet: $x^2 + \\frac{b}{a}x = -\\frac{c}{a}$. Vi legger til $\\left(\\frac{b}{2a}\\right)^2$ på begge sider: $\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} - \\frac{c}{a} = \\frac{b^2 - 4ac}{4a^2}$.

Tar vi kvadratrot, får vi $x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$, og dermed $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Det er abc-formelen! Hele andregradsformelen er altså bare resultatet av å fullføre kvadratet på den generelle andregradslikningen.

Denne innsikten er viktig av to grunner. For det første viser den at metodene henger sammen – du lærte ikke to uavhengige teknikker, men to sider av samme idé. For det andre gir metoden med fullstendig kvadrat deg ofte en mer intuitiv forståelse av hva som skjer i en likning. Når du skriver $(x + 3)^2 = 16$, *ser* du at løsningen handler om å finne tall som er 4 unna $-3$ på tallinjen.

Når bør du bruke fullstendig kvadrat i stedet for abc-formelen? Det er vanskelig å gi en fast regel, men metoden er spesielt nyttig når du skal finne toppunktet til en parabel, skrive om funksjonsuttrykk, eller når du trenger å vise utledninger i bevis. I praksis velger mange elever abc-formelen for raske utregninger og fullstendig kvadrat for dypere forståelse.`,
    },
    {
      id: '1t-2-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-2-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på sammenhengen med abc-formelen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-2-4-n-quiz5-q0',
            task: 'Hva fremkommer når vi fullfører kvadratet på den generelle likningen $ax^2 + bx + c = 0$?',
            options: [
              { id: 'a', text: 'Konjugatsetningen', isCorrect: false },
              { id: 'b', text: 'Produktregelen', isCorrect: false },
              { id: 'c', text: 'Første kvadratsetning', isCorrect: false },
              { id: 'd', text: 'ABC-formelen', isCorrect: true },
            ],
            solution: 'Når vi fullfører kvadratet på $ax^2 + bx + c = 0$ med bokstaver i stedet for tall, ender vi opp med $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, som er nettopp abc-formelen.',
          },
          {
            id: '1t-2-4-n-quiz5-q1',
            task: 'Når er fullstendig kvadrat spesielt nyttig sammenlignet med abc-formelen?',
            options: [
              { id: 'a', text: 'Når tallene er store', isCorrect: false },
              { id: 'b', text: 'Når du skal finne toppunktet til en parabel', isCorrect: true },
              { id: 'c', text: 'Når diskriminanten er negativ', isCorrect: false },
              { id: 'd', text: 'Når $a = 0$', isCorrect: false },
            ],
            solution: 'Fullstendig kvadrat er spesielt nyttig når du skal finne toppunktet til en parabel eller skrive om funksjonsuttrykk. Formen $(x + k)^2 + d$ viser direkte at toppunktet er $(-k, d)$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-2-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Metoden **fullstendig kvadrat** lar deg løse andregradslikninger ved å omskrive dem til formen $(x + k)^2 = d$, som du deretter løser med kvadratrot.

Stegene er: skriv likningen på formen $x^2 + bx = -c$ (del på $a$ først hvis $a \\neq 1$). Legg til $\\left(\\frac{b}{2}\\right)^2$ på begge sider. Skriv venstresiden som $(x + \\frac{b}{2})^2$. Ta kvadratrot og løs for $x$.

**Kvadratsetningene** $(a + b)^2 = a^2 + 2ab + b^2$ og $(a - b)^2 = a^2 - 2ab + b^2$ er fundamentet for hele metoden. Det dobbelte produktet – det midterste leddet – er nøkkelen til å gjenkjenne og konstruere perfekte kvadrater.

Når svaret inneholder **irrasjonale tall** (kvadratrøtter), gir vi eksakte svar som $x = 2 \\pm \\sqrt{3}$. Metoden fungerer likt uansett om løsningene er heltall, brøker eller irrasjonale tall.

Hvis koeffisienten foran $x^2$ ikke er 1, deler vi hele likningen på denne koeffisienten som aller første steg. Deretter følger vi prosedyren som vanlig.

Til slutt er det verdt å huske at fullstendig kvadrat og abc-formelen er to uttrykk for den samme ideen – abc-formelen er nettopp det du får når du fullfører kvadratet på den generelle andregradslikningen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4 NARRATIV: Brøkregning
// ============================================================================

export const CHAPTER_1T_1_4_NARRATIV: TextbookChapter = {
  id: '1t-1-4-narrativ',
  courseId: '1t',
  chapterNumber: '1.4',
  title: 'Brøkregning',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om brøker – hvordan du ganger, deler, forkorter, utvider og finner fellesnevner når brøkene ikke vil samarbeide.',
  estimatedMinutes: 40,
  competenceGoals: ['utforske og beskrive egenskaper ved brøker og operasjoner med brøker'],
  linkedChapterId: '1t-1-4',
  content: [    {
      id: '1t-1-4-n-intro',
      type: 'text',
      content: `## Når tallene deler seg i to

Tenk deg at du og en venn bestiller en pizza. Dere deler den i åtte like store biter, og du tar tre av dem. Da har du spist $\frac{3}{8}$ av pizzaen. Tallet over brøkstreken – **telleren** – forteller hvor mange biter du tok, og tallet under – **nevneren** – forteller hvor mange biter pizzaen ble delt i.

Brøker er overalt i matematikken, og de dukker opp i alt fra algebra til sannsynlighetsregning. I dette kapittelet skal vi lære å **gange** brøker, **dele** brøker, **forkorte** og **utvide** dem, og til slutt legge dem sammen selv når nevnerne er forskjellige. Hvis du mestrer dette, har du et av de viktigste verktøyene i den matematiske verktøykassen din.`,
    },
    {
      id: '1t-1-4-n-section1',
      type: 'text',
      content: `## Å gange brøker – teller med teller, nevner med nevner

La oss starte med den enkleste operasjonen: multiplikasjon av brøker. Regelen er overraskende grei. Når du ganger to brøker med hverandre, ganger du teller med teller og nevner med nevner:

$$\frac{a}{b} \cdot \frac{c}{d} = \frac{a \cdot c}{b \cdot d}$$

La oss prøve med tall. Hva er $\frac{1}{5} \cdot \frac{3}{2}$? Vi ganger tellerne: $1 \cdot 3 = 3$. Vi ganger nevnerne: $5 \cdot 2 = 10$. Svaret er $\frac{3}{10}$.

Hva om du skal gange et heltall med en brøk? Da skriver du heltallet som en brøk med 1 i nevneren. For eksempel: $3 \cdot \frac{3}{2} = \frac{3}{1} \cdot \frac{3}{2} = \frac{9}{2}$. Heltallet 3 er det samme som $\frac{3}{1}$, og derfra bruker vi bare den vanlige regelen.

Et nyttig triks er å **forkorte underveis**. Hvis det finnes like faktorer i en teller og en nevner – selv om de tilhører forskjellige brøker – kan du stryke dem før du ganger. Se på $\frac{6}{5} \cdot \frac{15}{2}$. Her kan vi faktorisere: $\frac{6 \cdot 15}{5 \cdot 2} = \frac{2 \cdot 3 \cdot 3 \cdot 5}{5 \cdot 2}$. Både $2$ og $5$ finnes over og under brøkstreken, og vi stryker dem. Da sitter vi igjen med $\frac{3 \cdot 3}{1} = 9$. Mye enklere enn å gange ut $6 \cdot 15 = 90$ og $5 \cdot 2 = 10$ for så å forkorte $\frac{90}{10}$ etterpå – selv om begge veier gir riktig svar.`,
    },
    {
      id: '1t-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på multiplikasjon av brøker:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-4-n-quiz1-q0',
            task: 'Hva er $\\frac{3}{4} \\cdot \\frac{2}{5}$?',
            options: [
              { id: 'a', text: '$\\frac{5}{9}$', isCorrect: false },
              { id: 'b', text: '$\\frac{3}{10}$', isCorrect: true },
              { id: 'c', text: '$\\frac{6}{9}$', isCorrect: false },
              { id: 'd', text: '$\\frac{5}{20}$', isCorrect: false },
            ],
            solution: 'Vi ganger teller med teller og nevner med nevner: $\\frac{3 \\cdot 2}{4 \\cdot 5} = \\frac{6}{20}$. Deretter forkorter vi med 2: $\\frac{6}{20} = \\frac{3}{10}$.',
          },
          {
            id: '1t-1-4-n-quiz1-q1',
            task: 'Hva er $5 \\cdot \\frac{2}{3}$?',
            options: [
              { id: 'a', text: '$\\frac{7}{3}$', isCorrect: false },
              { id: 'b', text: '$\\frac{10}{15}$', isCorrect: false },
              { id: 'c', text: '$\\frac{10}{3}$', isCorrect: true },
              { id: 'd', text: '$\\frac{2}{15}$', isCorrect: false },
            ],
            solution: 'Vi skriver heltallet som brøk: $5 = \\frac{5}{1}$. Deretter ganger vi: $\\frac{5}{1} \\cdot \\frac{2}{3} = \\frac{10}{3}$.',
          },
          {
            id: '1t-1-4-n-quiz1-q2',
            task: 'Hva er $\\frac{6}{5} \\cdot \\frac{15}{2}$ forkortet underveis?',
            options: [
              { id: 'a', text: '$\\frac{90}{10}$', isCorrect: false },
              { id: 'b', text: '$9$', isCorrect: true },
              { id: 'c', text: '$\\frac{45}{5}$', isCorrect: false },
              { id: 'd', text: '$18$', isCorrect: false },
            ],
            solution: 'Vi forkorter underveis: $6$ og $2$ deler begge med $2$ (gir $3$ og $1$), og $5$ og $15$ deler begge med $5$ (gir $1$ og $3$). Da sitter vi igjen med $\\frac{3 \\cdot 3}{1 \\cdot 1} = 9$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-1-4-n-section2',
      type: 'text',
      content: `## Å forkorte brøker – finn det som er felles

Å forkorte en brøk betyr å finne en felles faktor i teller og nevner og dele begge på denne faktoren. Verdien til brøken endrer seg ikke – du skriver den bare på en enklere måte.

Ta brøken $\frac{8}{6}$. Både $8$ og $6$ er delelige med $2$. Vi kan skrive $\frac{8}{6} = \frac{4 \cdot 2}{3 \cdot 2}$. Nå stryker vi toerne og står igjen med $\frac{4}{3}$. Brøken har samme verdi, men er enklere å jobbe med.

La oss prøve en større brøk: $\frac{45}{75}$. Hva er felles? Begge er delelige med $15$: $\frac{45}{75} = \frac{3 \cdot 15}{5 \cdot 15} = \frac{3}{5}$. Du trenger ikke å finne den største felles faktoren med en gang. Hvis du bare ser at begge er delelige med $3$, kan du forkorte steg for steg: $\frac{45}{75} = \frac{15}{25} = \frac{3}{5}$, der vi først forkortet med $3$ og deretter med $5$.

Faktorisering er nøkkelen her. Når du bryter teller og nevner ned i faktorer, ser du med en gang hva som kan strykes. Husk at $\frac{a}{1} = a$ – hvis nevneren forsvinner helt, står du igjen med et heltall. For eksempel: $\frac{81}{27} = \frac{27 \cdot 3}{27} = 3$.

Forkorting er spesielt nyttig etter at du har ganget brøker, for da kan resultatet ofte forenkles. Det er derfor vi nevnte trikset med å forkorte *underveis* i forrige seksjon – det sparer deg for store tall.`,
    },
    {
      id: '1t-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på forkorting av brøker:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-4-n-quiz2-q0',
            task: 'Hva er $\\frac{12 \\cdot 20}{4 \\cdot 6}$ ferdig forkortet?',
            options: [
              { id: 'a', text: '$8$', isCorrect: false },
              { id: 'b', text: '$12$', isCorrect: false },
              { id: 'c', text: '$10$', isCorrect: true },
              { id: 'd', text: '$\\frac{20}{3}$', isCorrect: false },
            ],
            solution: 'Vi forenkler: $\\frac{12 \\cdot 20}{4 \\cdot 6} = \\frac{240}{24} = 10$. Alternativt kan vi forkorte underveis: $\\frac{12}{6} = 2$ og $\\frac{20}{4} = 5$, så $2 \\cdot 5 = 10$.',
          },
          {
            id: '1t-1-4-n-quiz2-q1',
            task: 'Hva er $\\frac{45}{75}$ forkortet?',
            options: [
              { id: 'a', text: '$\\frac{9}{15}$', isCorrect: false },
              { id: 'b', text: '$\\frac{3}{5}$', isCorrect: true },
              { id: 'c', text: '$\\frac{15}{25}$', isCorrect: false },
              { id: 'd', text: '$\\frac{5}{3}$', isCorrect: false },
            ],
            solution: 'Vi finner felles faktor: $45 = 3 \\cdot 15$ og $75 = 5 \\cdot 15$. Vi forkorter med $15$: $\\frac{45}{75} = \\frac{3}{5}$.',
          },
          {
            id: '1t-1-4-n-quiz2-q2',
            task: 'Hva betyr det å «forkorte» en brøk?',
            options: [
              { id: 'a', text: 'Gjøre telleren mindre', isCorrect: false },
              { id: 'b', text: 'Dele teller og nevner med en felles faktor', isCorrect: true },
              { id: 'c', text: 'Trekke fra samme tall i teller og nevner', isCorrect: false },
              { id: 'd', text: 'Bytte om teller og nevner', isCorrect: false },
            ],
            solution: 'Å forkorte betyr å dele BÅDE teller og nevner med den samme felles faktoren. Verdien til brøken endres ikke -- vi skriver den bare på en enklere form.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-1-4-n-section3',
      type: 'text',
      content: `## Å dele brøker – snu og gang

Divisjon av brøker høres kanskje vanskelig ut, men det er egentlig bare en forkledd multiplikasjon. Regelen er: når du deler med en brøk, **snur du den andre brøken og ganger** i stedet:

$$\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c}$$

Hvorfor fungerer dette? Å dele med $\frac{3}{2}$ er det samme som å spørre: «Hvor mange ganger går $\frac{3}{2}$ opp i dette tallet?» Og det viser seg at dette er det samme som å gange med den **omvendte brøken** $\frac{2}{3}$.

La oss ta et eksempel: $\frac{2}{7} \div \frac{3}{2} = \frac{2}{7} \cdot \frac{2}{3} = \frac{4}{21}$.

Hva med å dele et heltall med en brøk? $7 \div \frac{15}{2} = \frac{7}{1} \cdot \frac{2}{15} = \frac{14}{15}$. Eller omvendt, en brøk delt på et heltall: $\frac{3}{4} \div 9 = \frac{3}{4} \cdot \frac{1}{9} = \frac{3}{36} = \frac{1}{12}$.

Det finnes også noe som heter en **brudden brøk** – en brøk der teller eller nevner (eller begge) selv er brøker. For eksempel $\frac{\frac{2}{3}}{\frac{5}{6}}$. Dette er bare en annen måte å skrive en divisjon på: $\frac{2}{3} \div \frac{5}{6} = \frac{2}{3} \cdot \frac{6}{5} = \frac{12}{15} = \frac{4}{5}$. Her kunne vi forkorte $\frac{12}{15}$ ved å dele begge med $3$.

En alternativ metode for brudne brøker er å gange teller og nevner med den samme verdien slik at brøkene «forsvinner». Velg nevneren i den nedre brøken: gang både over og under med $6$. Telleren blir $\frac{2}{3} \cdot 6 = 4$, nevneren blir $\frac{5}{6} \cdot 6 = 5$. Svaret er $\frac{4}{5}$ – det samme som før.`,
    },
    {
      id: '1t-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på divisjon av brøker:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-4-n-quiz3-q0',
            task: 'Hva er $\\frac{5}{6} \\div 3$?',
            options: [
              { id: 'a', text: '$\\frac{15}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{5}{2}$', isCorrect: false },
              { id: 'c', text: '$\\frac{3}{6}$', isCorrect: false },
              { id: 'd', text: '$\\frac{5}{18}$', isCorrect: true },
            ],
            solution: 'Vi snur og ganger: $\\frac{5}{6} \\div 3 = \\frac{5}{6} \\cdot \\frac{1}{3} = \\frac{5}{18}$. Husk at å dele en brøk med et heltall betyr at nevneren blir større.',
          },
          {
            id: '1t-1-4-n-quiz3-q1',
            task: 'Hva er $\\frac{2}{7} \\div \\frac{3}{2}$?',
            options: [
              { id: 'a', text: '$\\frac{6}{14}$', isCorrect: false },
              { id: 'b', text: '$\\frac{4}{21}$', isCorrect: true },
              { id: 'c', text: '$\\frac{3}{7}$', isCorrect: false },
              { id: 'd', text: '$\\frac{7}{6}$', isCorrect: false },
            ],
            solution: 'Vi snur den andre brøken og ganger: $\\frac{2}{7} \\div \\frac{3}{2} = \\frac{2}{7} \\cdot \\frac{2}{3} = \\frac{4}{21}$.',
          },
          {
            id: '1t-1-4-n-quiz3-q2',
            task: 'Hva er $\\frac{\\frac{2}{3}}{\\frac{5}{6}}$?',
            options: [
              { id: 'a', text: '$\\frac{10}{18}$', isCorrect: false },
              { id: 'b', text: '$\\frac{5}{9}$', isCorrect: false },
              { id: 'c', text: '$\\frac{4}{5}$', isCorrect: true },
              { id: 'd', text: '$\\frac{12}{15}$', isCorrect: false },
            ],
            solution: 'En brudden brøk er det samme som divisjon: $\\frac{2}{3} \\div \\frac{5}{6} = \\frac{2}{3} \\cdot \\frac{6}{5} = \\frac{12}{15} = \\frac{4}{5}$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-1-4-n-section4',
      type: 'text',
      content: `## Å utvide brøker og legge sammen med lik nevner

Nå skal vi se på addisjon og subtraksjon av brøker. Det første du trenger å vite er at du bare kan legge sammen brøker som har **lik nevner**. Regelen er enkel:

$$\frac{a}{c} + \frac{b}{c} = \frac{a + b}{c}$$

Vi legger altså sammen tellerne og beholder nevneren. For eksempel: $\frac{1}{5} + \frac{2}{5} = \frac{3}{5}$. Det er som å si: én femdel pluss to femdeler er tre femdeler.

Subtraksjon fungerer på akkurat samme måte: $\frac{9}{4} - \frac{1}{4} = \frac{8}{4} = 2$. Her forkortet vi etterpå fordi $\frac{8}{4} = 2$.

Men hva gjør vi når nevnerne er *forskjellige*? Da må vi **utvide** en eller begge brøkene slik at de får samme nevner. Å utvide en brøk betyr å gange teller og nevner med det samme tallet. Verdien til brøken endrer seg ikke – vi bare skriver den med en annen nevner.

For eksempel: Utvid $\frac{5}{3}$ slik at nevneren blir $6$. Vi trenger å gange nevneren med $2$ for å gå fra $3$ til $6$, og da må vi gange telleren med $2$ også: $\frac{5}{3} = \frac{5 \cdot 2}{3 \cdot 2} = \frac{10}{6}$.

Det er viktig at du ganger BÅDE teller og nevner med det samme tallet. Ganger du bare den ene, endrer du verdien til brøken, og du ender opp med feil svar.

Utviding kan også involvere variabler. Å utvide $\frac{2}{5}$ slik at nevneren blir $10x$ krever at vi ganger med $2x$: $\frac{2}{5} = \frac{2 \cdot 2x}{5 \cdot 2x} = \frac{4x}{10x}$.`,
    },
    {
      id: '1t-1-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på addisjon og subtraksjon av brøker:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-4-n-quiz4-q0',
            task: 'Hva er $\\frac{4}{7} - \\frac{1}{14}$?',
            options: [
              { id: 'a', text: '$\\frac{3}{7}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{2}$', isCorrect: true },
              { id: 'c', text: '$\\frac{3}{14}$', isCorrect: false },
              { id: 'd', text: '$\\frac{7}{14}$', isCorrect: false },
            ],
            solution: 'Vi utvider $\\frac{4}{7}$ til nevner 14: $\\frac{4}{7} = \\frac{8}{14}$. Da blir regnestykket $\\frac{8}{14} - \\frac{1}{14} = \\frac{7}{14} = \\frac{1}{2}$.',
          },
          {
            id: '1t-1-4-n-quiz4-q1',
            task: 'Hva er $\\frac{2}{5} + \\frac{3}{5}$?',
            options: [
              { id: 'a', text: '$\\frac{5}{10}$', isCorrect: false },
              { id: 'b', text: '$1$', isCorrect: true },
              { id: 'c', text: '$\\frac{5}{5}$', isCorrect: false },
              { id: 'd', text: '$\\frac{6}{25}$', isCorrect: false },
            ],
            solution: 'Med lik nevner legger vi sammen tellerne: $\\frac{2}{5} + \\frac{3}{5} = \\frac{5}{5} = 1$.',
          },
          {
            id: '1t-1-4-n-quiz4-q2',
            task: 'Hva er $\\frac{5}{3}$ utvida til nevner $12$?',
            options: [
              { id: 'a', text: '$\\frac{60}{12}$', isCorrect: false },
              { id: 'b', text: '$\\frac{15}{12}$', isCorrect: false },
              { id: 'c', text: '$\\frac{20}{12}$', isCorrect: true },
              { id: 'd', text: '$\\frac{5}{12}$', isCorrect: false },
            ],
            solution: 'Vi ganger teller og nevner med $4$ (fordi $3 \\cdot 4 = 12$): $\\frac{5}{3} = \\frac{5 \\cdot 4}{3 \\cdot 4} = \\frac{20}{12}$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-1-4-n-section5',
      type: 'text',
      content: `## Fellesnevner – når nevnerne ikke går opp i hverandre

Noen ganger kan du ikke bare utvide én av brøkene for å få fellesnevner – du må utvide begge. En metode som alltid fungerer er å gange den første brøkens teller og nevner med nevneren i den andre brøken, og omvendt.

Ta $\frac{1}{2} + \frac{3}{7}$. Her ganger vi den første brøken med $7$ og den andre med $2$: $\frac{1 \cdot 7}{2 \cdot 7} + \frac{3 \cdot 2}{7 \cdot 2} = \frac{7}{14} + \frac{6}{14} = \frac{13}{14}$.

Denne metoden er enkel, men kan gi unødvendig store nevnere. Tenk deg at du skal legge sammen $\frac{1}{21} + \frac{1}{14}$. Ganger vi nevnerne med hverandre, får vi $21 \cdot 14 = 294$. Det fungerer, men det finnes en smartere vei.

Trikset er å lete etter **minste felles nevner**. Vi faktoriserer nevnerne: $21 = 3 \cdot 7$ og $14 = 2 \cdot 7$. Begge inneholder faktoren $7$. Den ene har en $3$-er som den andre mangler, og den andre har en $2$-er som den første mangler. Den minste felles nevneren er altså $2 \cdot 3 \cdot 7 = 42$.

Da utvider vi: $\frac{1}{3 \cdot 7} + \frac{1}{2 \cdot 7} = \frac{1 \cdot 2}{2 \cdot 3 \cdot 7} + \frac{1 \cdot 3}{3 \cdot 2 \cdot 7} = \frac{2}{42} + \frac{3}{42} = \frac{5}{42}$.

Et annet eksempel: $\frac{1}{10} + \frac{1}{15}$. Vi faktoriserer: $10 = 2 \cdot 5$ og $15 = 3 \cdot 5$. Felles faktor er $5$, og minste felles nevner blir $2 \cdot 3 \cdot 5 = 30$. Vi utvider: $\frac{3}{30} + \frac{2}{30} = \frac{5}{30} = \frac{1}{6}$.

Husk også at et heltall kan skrives som en brøk med $1$ i nevneren: $2 + \frac{3}{7} = \frac{2}{1} + \frac{3}{7} = \frac{14}{7} + \frac{3}{7} = \frac{17}{7}$. Dette er nyttig når du kombinerer heltall og brøker i samme regnestykke.`,
    },
    {
      id: '1t-1-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på fellesnevner:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-4-n-quiz5-q0',
            task: 'Hva er $\\frac{1}{6} + \\frac{1}{8}$ med minste felles nevner?',
            options: [
              { id: 'a', text: '$\\frac{2}{14}$', isCorrect: false },
              { id: 'b', text: '$\\frac{14}{48}$', isCorrect: false },
              { id: 'c', text: '$\\frac{7}{24}$', isCorrect: true },
              { id: 'd', text: '$\\frac{1}{7}$', isCorrect: false },
            ],
            solution: 'Vi faktoriserer: $6 = 2 \\cdot 3$ og $8 = 2^3$. Minste felles nevner er $2^3 \\cdot 3 = 24$. Vi utvider: $\\frac{4}{24} + \\frac{3}{24} = \\frac{7}{24}$.',
          },
          {
            id: '1t-1-4-n-quiz5-q1',
            task: 'Hva er $\\frac{1}{2} + \\frac{3}{7}$?',
            options: [
              { id: 'a', text: '$\\frac{4}{9}$', isCorrect: false },
              { id: 'b', text: '$\\frac{13}{14}$', isCorrect: true },
              { id: 'c', text: '$\\frac{7}{14}$', isCorrect: false },
              { id: 'd', text: '$\\frac{3}{14}$', isCorrect: false },
            ],
            solution: 'Fellesnevner er $14$. Vi utvider: $\\frac{7}{14} + \\frac{6}{14} = \\frac{13}{14}$.',
          },
          {
            id: '1t-1-4-n-quiz5-q2',
            task: 'Hva er $2 + \\frac{3}{5}$?',
            options: [
              { id: 'a', text: '$\\frac{5}{5}$', isCorrect: false },
              { id: 'b', text: '$\\frac{13}{5}$', isCorrect: true },
              { id: 'c', text: '$\\frac{6}{5}$', isCorrect: false },
              { id: 'd', text: '$\\frac{23}{5}$', isCorrect: false },
            ],
            solution: 'Vi skriver $2 = \\frac{10}{5}$. Da blir regnestykket $\\frac{10}{5} + \\frac{3}{5} = \\frac{13}{5}$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært de fem grunnleggende operasjonene for brøkregning.

**Multiplikasjon** er den enkleste: $\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}$. Gang teller med teller og nevner med nevner. Et heltall kan skrives som brøk med $1$ i nevneren. Forkorte underveis gjør regnestykket enklere.

**Forkorting** handler om å finne felles faktorer i teller og nevner og stryke dem. Du kan gjøre det steg for steg eller finne den største felles faktoren med en gang. Faktorisering er nøkkelen.

**Divisjon** utføres ved å snu den andre brøken og gange: $\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c}$. Brudne brøker er bare en annen måte å skrive divisjon på.

**Addisjon og subtraksjon** krever lik nevner. Med lik nevner legger vi sammen tellerne: $\frac{a}{c} + \frac{b}{c} = \frac{a+b}{c}$.

**Fellesnevner** finner vi ved å utvide brøkene. Den sikreste metoden er å gange nevnerne med hverandre. Den smarteste er å finne minste felles nevner ved å faktorisere nevnerne og legge til det som mangler. Husk: å utvide betyr å gange BÅDE teller og nevner med det samme tallet.`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_1_5_NARRATIV: TextbookChapter = {
  id: '1t-1-5-narrativ',
  courseId: '1t',
  chapterNumber: '1.5',
  title: 'Faktorisering og kvadratsetningene',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om å bryte tall og uttrykk ned i byggeklosser – og om tre kraftige formler som forenkler alt fra utvidelse til faktorisering.',
  estimatedMinutes: 40,
  competenceGoals: ['behandle og faktorisere algebraiske uttrykk'],
  linkedChapterId: '1t-1-5',
  content: [    {
      id: '1t-1-5-n-intro',
      type: 'text',
      content: `## Å se det usynlige mønsteret

Forestill deg at du har fått i oppgave å forenkle et langt, rotete algebraisk uttrykk. Det ser kaotisk ut – men bak fasaden skjuler det seg et mønster. Å finne dette mønsteret kalles **faktorisering**, og det er en av de mest nyttige ferdighetene du kan ha i matematikken.

I dette kapittelet starter vi med å faktorisere tall, helt ned til primtallene. Deretter lærer vi å faktorisere algebraiske uttrykk med flere ledd. Til slutt møter vi tre berømte formler – **kvadratsetningene** – som gir oss snarveger både for å utvide og for å faktorisere uttrykk. Disse tre setningene kommer du til å bruke igjen og igjen, i likninger, i funksjonsanalyse og langt inn i høyere matematikk.`,
    },
    {
      id: '1t-1-5-n-section1',
      type: 'text',
      content: `## Primtallsfaktorisering – tallenes grunnsteiner

La oss starte med noe du kanskje kjenner fra ungdomsskolen: **primtall**. Et primtall er et tall som bare er delelig med seg selv og $1$. De første primtallene er $2, 3, 5, 7, 11, 13, 17, 19, 23, \ldots$ Merk at $1$ ikke regnes som et primtall.

Når vi **primtallsfaktoriserer** et tall, skriver vi det som et produkt av bare primtall. Tallet $12$ kan for eksempel skrives som $4 \cdot 3$, men det er ikke en primtallsfaktorisering fordi $4$ ikke er et primtall. Vi må bryte det ned videre: $12 = 2 \cdot 2 \cdot 3$. Nå består produktet utelukkende av primtall, og vi er i mål.

Teknikken er enkel: del tallet på det minste primtallet som går opp, og gjenta til du bare har primtall igjen. La oss ta $520$: $520 = 2 \cdot 260 = 2 \cdot 2 \cdot 130 = 2 \cdot 2 \cdot 2 \cdot 65 = 2 \cdot 2 \cdot 2 \cdot 5 \cdot 13$. Ferdig.

Hvorfor bryr vi oss om dette? Fordi faktorisering er nøkkelen til å **forkorte brøker**. Når du kjenner primtallsfaktorene til teller og nevner, ser du med en gang hva som er felles og kan strykes. Ta $\frac{18}{6}$. Vi ser at $18 = 3 \cdot 6$, og da kan vi stryke $6$ over og under brøkstreken: $\frac{18}{6} = \frac{3 \cdot 6}{6} = 3$. Eller $\frac{2000}{750}$: vi forkorter først med $10$ og deretter med $25$, og ender opp med $\frac{8}{3}$.

Poenget er at faktorisering gir deg «røntgensyn» inn i tallenes struktur. Jo raskere du kan bryte tall ned i faktorer, desto lettere blir resten av matematikken.`,
    },
    {
      id: '1t-1-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på primtallsfaktorisering:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-5-n-quiz1-q0',
            task: 'Hva er primtallsfaktoriseringen av $50$?',
            options: [
              { id: 'a', text: '$5 \\cdot 10$', isCorrect: false },
              { id: 'b', text: '$2 \\cdot 5 \\cdot 5$', isCorrect: true },
              { id: 'c', text: '$2 \\cdot 25$', isCorrect: false },
              { id: 'd', text: '$1 \\cdot 2 \\cdot 5 \\cdot 5$', isCorrect: false },
            ],
            solution: 'Vi deler med det minste primtallet: $50 = 2 \\cdot 25 = 2 \\cdot 5 \\cdot 5$. Alternativene med $10$ og $25$ er ikke primtallsfaktoriseringer, og $1$ er ikke et primtall.',
          },
          {
            id: '1t-1-5-n-quiz1-q1',
            task: 'Hva er primtallsfaktoriseringen av $72$?',
            options: [
              { id: 'a', text: '$2^3 \\cdot 3^2$', isCorrect: true },
              { id: 'b', text: '$8 \\cdot 9$', isCorrect: false },
              { id: 'c', text: '$2 \\cdot 36$', isCorrect: false },
              { id: 'd', text: '$2^2 \\cdot 18$', isCorrect: false },
            ],
            solution: '$72 = 2 \\cdot 36 = 2 \\cdot 2 \\cdot 18 = 2 \\cdot 2 \\cdot 2 \\cdot 9 = 2 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 3 = 2^3 \\cdot 3^2$.',
          },
          {
            id: '1t-1-5-n-quiz1-q2',
            task: 'Hva er $\\frac{18}{6}$ forkortet ved hjelp av faktorisering?',
            options: [
              { id: 'a', text: '$2$', isCorrect: false },
              { id: 'b', text: '$3$', isCorrect: true },
              { id: 'c', text: '$\\frac{9}{3}$', isCorrect: false },
              { id: 'd', text: '$6$', isCorrect: false },
            ],
            solution: 'Vi faktoriserer: $18 = 3 \\cdot 6$. Da kan vi stryke $6$ over og under brøkstreken: $\\frac{18}{6} = \\frac{3 \\cdot 6}{6} = 3$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-1-5-n-section2',
      type: 'text',
      content: `## Faktorisering av algebraiske uttrykk – sett det felles utenfor

Nå tar vi steget fra tall til algebra. Å **faktorisere et uttrykk** betyr å finne det som er felles for alle leddene og sette det utenfor en parentes.

La oss starte med $4x + 8$. Begge leddene inneholder faktoren $4$: $4x + 8 = 4 \cdot x + 4 \cdot 2 = 4(x + 2)$. Vi har «løftet ut» den felles faktoren $4$, og det som ble igjen inne i parentesen er $x + 2$.

Hva med $6x^2 - 3x$? Her er $3x$ felles: $6x^2 - 3x = 3x \cdot 2x - 3x \cdot 1 = 3x(2x - 1)$. Legg merke til at vi faktoriserer ut både tallet $3$ og variabelen $x$, fordi begge leddene inneholder begge.

Det kan bli mer avansert. I $4x^3 - 12x^2 + 4x$ er $4x$ felles for alle tre leddene: $4x(x^2 - 3x + 1)$. Og i $15x^2y^2 - 20x^2y$ er $5x^2y$ felles: $5x^2y(3y - 4)$.

Noen ganger skal du faktorisere ut et negativt tall. For eksempel: faktoriser $-3$ fra $-3x + 9$. Vi setter $-3$ utenfor og spør oss: «hva må jeg gange $-3$ med for å få $-3x$?» Svaret er $x$. «Hva må jeg gange $-3$ med for å få $+9$?» Svaret er $-3$. Altså: $-3x + 9 = -3(x - 3)$.

En spesiell og nyttig teknikk er å faktorisere ut koeffisienten foran $x$ med høyest potens. Ta $3x + 1$: vi kan skrive $3(x + \frac{1}{3})$. Eller $\frac{1}{2}x^2 + 2x + 2 = \frac{1}{2}(x^2 + 4x + 4)$. Fordelen med å gjøre dette er at parentesuttrykket ofte kan faktoriseres videre – noe vi skal se i neste seksjon.

Et godt tips: du kan alltid **kontrollere** faktoriseringen din ved å gange ut parentesen igjen. Får du tilbake det opprinnelige uttrykket, har du gjort det riktig.`,
    },
    {
      id: '1t-1-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering av algebraiske uttrykk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-5-n-quiz2-q0',
            task: 'Hva er $15x^2 - 3xy^3$ ferdig faktorisert?',
            options: [
              { id: 'a', text: '$3(5x^2 - xy^3)$', isCorrect: false },
              { id: 'b', text: '$x(15x - 3y^3)$', isCorrect: false },
              { id: 'c', text: '$3x(5x - y^3)$', isCorrect: true },
              { id: 'd', text: '$15x(x - \\frac{1}{5}y^3)$', isCorrect: false },
            ],
            solution: 'Den største felles faktoren er $3x$. Vi faktoriserer: $15x^2 - 3xy^3 = 3x(5x - y^3)$. De andre alternativene har ikke tatt ut hele den felles faktoren.',
          },
          {
            id: '1t-1-5-n-quiz2-q1',
            task: 'Hva er $6a^2 - 3a$ faktorisert?',
            options: [
              { id: 'a', text: '$3a(2a - 1)$', isCorrect: true },
              { id: 'b', text: '$3(2a^2 - a)$', isCorrect: false },
              { id: 'c', text: '$6a(a - \\frac{1}{2})$', isCorrect: false },
              { id: 'd', text: '$a(6a - 3)$', isCorrect: false },
            ],
            solution: 'Felles faktor er $3a$: $6a^2 - 3a = 3a \\cdot 2a - 3a \\cdot 1 = 3a(2a - 1)$.',
          },
          {
            id: '1t-1-5-n-quiz2-q2',
            task: 'Hva er $-3x + 9$ faktorisert med $-3$ tatt ut?',
            options: [
              { id: 'a', text: '$-3(x + 3)$', isCorrect: false },
              { id: 'b', text: '$-3(x - 3)$', isCorrect: true },
              { id: 'c', text: '$3(-x + 3)$', isCorrect: false },
              { id: 'd', text: '$-3(-x - 3)$', isCorrect: false },
            ],
            solution: 'Vi setter $-3$ utenfor: $-3 \\cdot x = -3x$ og $-3 \\cdot (-3) = 9$. Altså $-3x + 9 = -3(x - 3)$. Kontroll: $-3(x - 3) = -3x + 9$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-1-5-n-section3',
      type: 'text',
      content: `## Første og andre kvadratsetning – hurtigreglene

Nå er det tid for de berømte **kvadratsetningene**. De virker kanskje som enkle hurtigregler for å gange ut parenteser, men de er mye mer enn det – de er nøkler til faktorisering.

**Første kvadratsetning** sier at $(a + b)^2 = a^2 + 2ab + b^2$. Beviset er rett frem: $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$.

La oss ta et eksempel. Hva er $(x + 3)^2$? Her er $a = x$ og $b = 3$: $(x + 3)^2 = x^2 + 2 \cdot x \cdot 3 + 3^2 = x^2 + 6x + 9$. Og med mer sammensatte uttrykk: $(2x + 5y)^2 = (2x)^2 + 2 \cdot 2x \cdot 5y + (5y)^2 = 4x^2 + 20xy + 25y^2$.

**Andre kvadratsetning** er nesten lik, men med minus: $(a - b)^2 = a^2 - 2ab + b^2$. Beviset: $(a - b)(a - b) = a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$. Legg merke til at $b^2$-leddet alltid er positivt, fordi minus ganger minus er pluss.

Et eksempel: $(x - 5)^2 = x^2 - 2 \cdot x \cdot 5 + 5^2 = x^2 - 10x + 25$.

Den virkelige kraften i disse setningene ligger i å bruke dem **baklengs** – altså for å faktorisere. Ser du et uttrykk på formen $x^2 + bx + c$ der $\left(\frac{b}{2}\right)^2 = c$, kan du skrive det som $(x + \frac{b}{2})^2$. For eksempel: $x^2 + 6x + 9$. Her er $b = 6$ og $\left(\frac{6}{2}\right)^2 = 9 = c$. Altså: $x^2 + 6x + 9 = (x + 3)^2$.

Hvis det står en koeffisient foran $x^2$, faktoriser den ut først: $2x^2 - 12x + 18 = 2(x^2 - 6x + 9) = 2(x - 3)^2$.`,
    },
    {
      id: '1t-1-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på kvadratsetningene:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-5-n-quiz3-q0',
            task: 'Hva er $(2x - 7)^2$?',
            options: [
              { id: 'a', text: '$4x^2 - 14x + 49$', isCorrect: false },
              { id: 'b', text: '$4x^2 + 28x + 49$', isCorrect: false },
              { id: 'c', text: '$2x^2 - 28x + 49$', isCorrect: false },
              { id: 'd', text: '$4x^2 - 28x + 49$', isCorrect: true },
            ],
            solution: 'Vi bruker andre kvadratsetning med $a = 2x$ og $b = 7$: $(2x - 7)^2 = (2x)^2 - 2 \\cdot 2x \\cdot 7 + 7^2 = 4x^2 - 28x + 49$.',
          },
          {
            id: '1t-1-5-n-quiz3-q1',
            task: 'Hva er $(x + 4)^2$?',
            options: [
              { id: 'a', text: '$x^2 + 16$', isCorrect: false },
              { id: 'b', text: '$x^2 + 4x + 16$', isCorrect: false },
              { id: 'c', text: '$x^2 + 8x + 16$', isCorrect: true },
              { id: 'd', text: '$x^2 + 8x + 4$', isCorrect: false },
            ],
            solution: 'Første kvadratsetning: $(x + 4)^2 = x^2 + 2 \\cdot x \\cdot 4 + 4^2 = x^2 + 8x + 16$. Husk det dobbelte produktet $2 \\cdot x \\cdot 4 = 8x$.',
          },
          {
            id: '1t-1-5-n-quiz3-q2',
            task: 'Hva er mønsteret i første og andre kvadratsetning?',
            options: [
              { id: 'a', text: 'Kvadrat av første, pluss produktet, pluss kvadrat av andre', isCorrect: false },
              { id: 'b', text: 'Kvadrat av første, pluss/minus det dobbelte produktet, pluss kvadrat av andre', isCorrect: true },
              { id: 'c', text: 'Summen av kvadratene pluss resten', isCorrect: false },
              { id: 'd', text: 'Første ganger andre pluss kvadratene', isCorrect: false },
            ],
            solution: 'Mønsteret er $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$: kvadratet av det første, pluss (eller minus) det dobbelte produktet, pluss kvadratet av det andre. Siste ledd er alltid positivt.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-1-5-n-section4',
      type: 'text',
      content: `## Faktorisering med kvadratsetningene baklengs

La oss dvele litt ved hvordan vi bruker første og andre kvadratsetning **i motsatt retning** – det vil si til faktorisering. Formelen lest baklengs gir oss:

$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$

Mønsteret du leter etter er: to kvadratledd og et dobbeltprodukt i midten. Sjekk: er det midterste leddet lik to ganger produktet av røttene til de to andre leddene?

Ta $x^2 + 4x + 4$. Her er $x^2$ et kvadrat av $x$, og $4 = 2^2$ er et kvadrat av $2$. Midterste ledd er $4x = 2 \cdot x \cdot 2$. Alt stemmer, og vi kan skrive $(x + 2)^2$.

Hva med $-x^2 + 10x - 25$? Her starter vi med å faktorisere ut $-1$: $-(x^2 - 10x + 25)$. Nå ser vi mønsteret: $x^2 - 10x + 25 = (x - 5)^2$ fordi $\left(\frac{10}{2}\right)^2 = 25$. Svaret er $-(x - 5)^2$.

Mer avanserte uttrykk kan kreve at vi faktoriserer ut felles faktorer først. Ta $4x^3 - 8x^2 + 4x$. Først tar vi ut $4x$: $4x(x^2 - 2x + 1)$. Nå sjekker vi parentesen: $\left(\frac{2}{2}\right)^2 = 1$. Det stemmer, og vi kan faktorisere videre: $4x(x - 1)^2$.

Noen ganger er $b$ en brøk. Uttrykket $x^2 + x + \frac{1}{4}$ har $b = \frac{1}{2}$ fordi $\left(\frac{1}{2}\right)^2 = \frac{1}{4}$ og $2 \cdot x \cdot \frac{1}{2} = x$. Altså: $x^2 + x + \frac{1}{4} = \left(x + \frac{1}{2}\right)^2$.

Denne teknikken er essensiell for å løse andregradslikninger og forenkle rasjonale uttrykk.`,
    },
    {
      id: '1t-1-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering med kvadratsetningene baklengs:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-5-n-quiz4-q0',
            task: 'Hva er $3x^2 - 18x + 27$ faktorisert?',
            options: [
              { id: 'a', text: '$3(x - 3)^2$', isCorrect: true },
              { id: 'b', text: '$(3x - 9)^2$', isCorrect: false },
              { id: 'c', text: '$3(x + 3)^2$', isCorrect: false },
              { id: 'd', text: '$3(x^2 - 6x + 9)$', isCorrect: false },
            ],
            solution: 'Først tar vi ut $3$: $3(x^2 - 6x + 9)$. Sjekk: $\\left(\\frac{6}{2}\\right)^2 = 9$. Stemmer! Svaret er $3(x - 3)^2$.',
          },
          {
            id: '1t-1-5-n-quiz4-q1',
            task: 'Hva er $x^2 + 4x + 4$ faktorisert?',
            options: [
              { id: 'a', text: '$(x + 4)^2$', isCorrect: false },
              { id: 'b', text: '$(x + 2)^2$', isCorrect: true },
              { id: 'c', text: '$(x + 1)(x + 4)$', isCorrect: false },
              { id: 'd', text: '$(x - 2)^2$', isCorrect: false },
            ],
            solution: 'Vi sjekker: $\\left(\\frac{4}{2}\\right)^2 = 4 = c$. Det er et fullstendig kvadrat! Svaret er $(x + 2)^2$.',
          },
          {
            id: '1t-1-5-n-quiz4-q2',
            task: 'Hva er $-x^2 + 10x - 25$ faktorisert?',
            options: [
              { id: 'a', text: '$(x - 5)^2$', isCorrect: false },
              { id: 'b', text: '$-(x + 5)^2$', isCorrect: false },
              { id: 'c', text: '$-(x - 5)^2$', isCorrect: true },
              { id: 'd', text: '$(5 - x)^2$', isCorrect: false },
            ],
            solution: 'Faktoriser ut $-1$: $-(x^2 - 10x + 25)$. Sjekk: $\\left(\\frac{10}{2}\\right)^2 = 25$. Stemmer! Svaret er $-(x - 5)^2$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-1-5-n-section5',
      type: 'text',
      content: `## Tredje kvadratsetning – konjugatsetningen

Den tredje og siste kvadratsetningen er kanskje den mest elegante av dem alle. Den kalles også **konjugatsetningen** og sier at:

$$(a + b)(a - b) = a^2 - b^2$$

Beviset er kort og smukt: $(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$. De to midtleddene kansellerer hverandre, og vi sitter igjen med differansen mellom to kvadrater.

Denne formelen er spesielt nyttig fordi du ser den overalt. Eksempel: $(x + 2)(x - 2) = x^2 - 4$. Eller med sammensatte uttrykk: $(x^2 + 3y)(x^2 - 3y) = x^4 - 9y^2$.

Men den virkelige magien ligger – som med de andre kvadratsetningene – i å bruke den **baklengs**. Når du ser et uttrykk på formen $a^2 - b^2$, kan du alltid faktorisere det som $(a + b)(a - b)$.

Ta $x^2 - 9$. Vi gjenkjenner dette som $x^2 - 3^2$, altså $(x + 3)(x - 3)$.

Med koeffisienter: $4x^2 - 25 = (2x)^2 - 5^2 = (2x + 5)(2x - 5)$.

Noen ganger må vi faktorisere ut en felles faktor først. Ta $12x^2 - 27 = 3(4x^2 - 9) = 3(2x + 3)(2x - 3)$.

Og med røtter: $4x^2 - 12 = 4(x^2 - 3) = 4(x + \sqrt{3})(x - \sqrt{3})$.

Avanserte uttrykk kan kreve konjugatsetningen flere ganger. Uttrykket $x^4 - y^4$ er en differanse mellom to kvadrater: $(x^2)^2 - (y^2)^2 = (x^2 + y^2)(x^2 - y^2)$. Men $x^2 - y^2$ er også en differanse mellom to kvadrater, som faktoriseres videre: $(x^2 + y^2)(x + y)(x - y)$. Legg merke til at $x^2 + y^2$ ikke kan faktoriseres videre med reelle tall – konjugatsetningen krever en *differanse*, ikke en sum.`,
    },
    {
      id: '1t-1-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på konjugatsetningen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-5-n-quiz5-q0',
            task: 'Hva er $9x^2 - 81$ ferdig faktorisert?',
            options: [
              { id: 'a', text: '$(3x + 9)(3x - 9)$', isCorrect: false },
              { id: 'b', text: '$9(x + 3)(x - 3)$', isCorrect: true },
              { id: 'c', text: '$(9x + 81)(x - 1)$', isCorrect: false },
              { id: 'd', text: '$9(x^2 - 9)$', isCorrect: false },
            ],
            solution: 'Først tar vi ut $9$: $9(x^2 - 9)$. Konjugatsetningen gir $x^2 - 9 = (x + 3)(x - 3)$. Svaret er $9(x + 3)(x - 3)$.',
          },
          {
            id: '1t-1-5-n-quiz5-q1',
            task: 'Hva er $(x + 2)(x - 2)$?',
            options: [
              { id: 'a', text: '$x^2 + 4$', isCorrect: false },
              { id: 'b', text: '$x^2 - 4$', isCorrect: true },
              { id: 'c', text: '$x^2 - 2$', isCorrect: false },
              { id: 'd', text: '$x^2 + 2x - 4$', isCorrect: false },
            ],
            solution: 'Konjugatsetningen: $(a + b)(a - b) = a^2 - b^2$. Med $a = x$ og $b = 2$: $(x + 2)(x - 2) = x^2 - 4$.',
          },
          {
            id: '1t-1-5-n-quiz5-q2',
            task: 'Hva er $x^4 - y^4$ ferdig faktorisert?',
            options: [
              { id: 'a', text: '$(x^2 + y^2)(x^2 - y^2)$', isCorrect: false },
              { id: 'b', text: '$(x + y)(x - y)(x^2 + y^2)$', isCorrect: true },
              { id: 'c', text: '$(x + y)^2(x - y)^2$', isCorrect: false },
              { id: 'd', text: '$(x^2 - y^2)^2$', isCorrect: false },
            ],
            solution: 'Først: $x^4 - y^4 = (x^2 + y^2)(x^2 - y^2)$. Deretter faktoriserer vi $x^2 - y^2 = (x + y)(x - y)$. Men $x^2 + y^2$ kan ikke faktoriseres videre. Endelig svar: $(x^2 + y^2)(x + y)(x - y)$.',
          },
          {
            id: '1t-1-5-n-quiz5-q3',
            task: 'Hva er $4x^2 - 25$ faktorisert?',
            options: [
              { id: 'a', text: '$(4x + 25)(4x - 25)$', isCorrect: false },
              { id: 'b', text: '$(2x + 5)(2x - 5)$', isCorrect: true },
              { id: 'c', text: '$(2x + 25)(2x - 1)$', isCorrect: false },
              { id: 'd', text: '$4(x + 5)(x - 5)$', isCorrect: false },
            ],
            solution: 'Vi gjenkjenner $4x^2 = (2x)^2$ og $25 = 5^2$. Konjugatsetningen gir $(2x + 5)(2x - 5)$.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-1-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært å se strukturen bak tall og uttrykk gjennom faktorisering.

**Primtallsfaktorisering** betyr å skrive et tall som et produkt av bare primtall. Teknikken er å dele gjentatte ganger med det minste primtallet som går opp. Dette er grunnlaget for å forkorte brøker effektivt.

**Faktorisering av uttrykk** handler om å finne den største felles faktoren for alle leddene og sette den utenfor en parentes. Sjekk alltid svaret ved å gange ut parentesen igjen. Husk at du også kan faktorisere ut negative tall og brøker.

**Første kvadratsetning**: $(a + b)^2 = a^2 + 2ab + b^2$. Baklengs: $a^2 + 2ab + b^2 = (a + b)^2$.

**Andre kvadratsetning**: $(a - b)^2 = a^2 - 2ab + b^2$. Baklengs: $a^2 - 2ab + b^2 = (a - b)^2$. Merk at siste ledd alltid er positivt.

**Tredje kvadratsetning (konjugatsetningen)**: $(a + b)(a - b) = a^2 - b^2$. Baklengs: $a^2 - b^2 = (a + b)(a - b)$. Denne brukes for å faktorisere differansen mellom to kvadrater. Husk: en *sum* av to kvadrater kan ikke faktoriseres med reelle tall.

Når du faktoriserer, start alltid med å ta ut felles faktorer. Deretter sjekk om det som er igjen matcher en av kvadratsetningene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// IMPORT FRA DEL-FILER
// ============================================================================

import {
  CHAPTER_1T_7_1_NARRATIV,
  CHAPTER_1T_7_2_NARRATIV,
  CHAPTER_1T_7_3_NARRATIV,
  CHAPTER_1T_7_5_NARRATIV,
  CHAPTER_1T_7_6_NARRATIV,
  CHAPTER_1T_7_7_NARRATIV,
} from './textbook-content-1t-narrativ-del2';

// ============================================================================
// Kapittel 3.7 NARRATIV: Rasjonale funksjoner
// ============================================================================

export const CHAPTER_1T_3_7_NARRATIV: TextbookChapter = {
  id: '1t-3-7-narrativ',
  courseId: '1t',
  chapterNumber: '3.7',
  title: 'Rasjonale funksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om funksjoner på brøkform – hva som skjer når nevneren nærmer seg null, og hvordan vi leser grafenes usynlige grenselinjer.',
  estimatedMinutes: 35,
  competenceGoals: ['forstå rasjonale funksjoner og asymptoter'],
  linkedChapterId: '1t-3-7',
  content: [    {
      id: '1t-3-7-n-intro',
      type: 'text',
      content: `## Brøker som lever sitt eget liv

Tenk deg at du deler en pizza mellom venner. Deler du den på fire, får hver person et greit stykke. Deler du på to, får alle mer. Men hva skjer om du prøver å dele på null? Det gir ingen mening – det er rett og slett umulig. Akkurat dette prinsippet ligger i hjertet av det vi skal utforske nå.

En **rasjonal funksjon** er en funksjon skrevet som en brøk der både teller og nevner er polynomer. Den generelle formen er $f(x) = \\frac{P(x)}{Q(x)}$, der $P(x)$ og $Q(x)$ er polynomer og $Q(x) \\neq 0$. Du har allerede jobbet mye med polynomfunksjoner – rasjonale funksjoner tar oss et steg videre ved å la polynomer dele på hverandre. Og nettopp fordi vi deler, oppstår det dramatiske ting i grafen: usynlige linjer den aldri tør krysse, og hull der funksjonen plutselig forsvinner.

I dette kapittelet skal vi lære om tre sentrale begreper: **definisjonsmengde**, **vertikale asymptoter** og **horisontale asymptoter**. Sammen gir de oss verktøyene vi trenger for å forstå og skissere rasjonale funksjoner.`,
    },
    {
      id: '1t-3-7-n-section1',
      type: 'text',
      content: `## Definisjonsmengde – hvor funksjonen finnes

Det første vi alltid må gjøre med en rasjonal funksjon er å finne **definisjonsmengden**. Det høres kanskje litt tungt ut, men spørsmålet er egentlig ganske enkelt: for hvilke $x$-verdier er funksjonen definert? Siden vi har en brøk, er det bare én ting som kan gå galt – nevneren kan bli null. Og deling på null er som kjent forbudt i matematikken.

For å finne definisjonsmengden setter vi altså nevneren lik null og løser likningen. De $x$-verdiene vi finner, er de verdiene vi må *utelukke*.

La oss ta et eksempel. Hva er definisjonsmengden til $f(x) = \\frac{x + 1}{x^2 - 4}$? Vi setter nevneren lik null: $x^2 - 4 = 0$. Vi kan faktorisere dette som $(x - 2)(x + 2) = 0$, som gir oss $x = 2$ eller $x = -2$. Altså er funksjonen udefinert i disse to punktene. Vi skriver definisjonsmengden som $D_f = \\mathbb{R} \\setminus \\{-2, 2\\}$, som betyr «alle reelle tall bortsett fra $-2$ og $2$».

Et enklere eksempel: $g(x) = \\frac{1}{x + 3}$. Nevneren er null når $x + 3 = 0$, altså $x = -3$. Definisjonsmengden er $D_g = \\mathbb{R} \\setminus \\{-3\\}$. Og for $h(x) = \\frac{x}{x^2 - 9}$ faktoriserer vi nevneren som $(x - 3)(x + 3) = 0$, slik at $x = 3$ og $x = -3$ må utelukkes. Definisjonsmengden blir $D_h = \\mathbb{R} \\setminus \\{-3, 3\\}$.

Legg merke til mønsteret: jo høyere grad nevneren har, desto flere verdier kan potensielt utelukkes. En lineær nevner gir maksimalt én utelukket verdi, en kvadratisk nevner gir maksimalt to, og så videre.`,
    },
    {
      id: '1t-3-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-3-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på definisjonsmengde:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-3-7-n-quiz1-q0',
            task: 'Hva er definisjonsmengden til $f(x) = \\frac{x + 5}{x^2 - 16}$?',
            options: [
              { id: 'a', text: '$D_f = \\mathbb{R} \\setminus \\{16\\}$', isCorrect: false },
              { id: 'b', text: '$D_f = \\mathbb{R} \\setminus \\{-4, 4\\}$', isCorrect: true },
              { id: 'c', text: '$D_f = \\mathbb{R} \\setminus \\{-5\\}$', isCorrect: false },
              { id: 'd', text: '$D_f = \\mathbb{R}$', isCorrect: false },
            ],
            solution: 'Vi setter nevneren lik null: $x^2 - 16 = 0$, som gir $(x - 4)(x + 4) = 0$, altså $x = 4$ eller $x = -4$. Definisjonsmengden er $D_f = \\mathbb{R} \\setminus \\{-4, 4\\}$.',
          },
          {
            id: '1t-3-7-n-quiz1-q1',
            task: 'Hva er definisjonsmengden til $g(x) = \\frac{1}{x + 3}$?',
            options: [
              { id: 'a', text: '$D_g = \\mathbb{R} \\setminus \\{3\\}$', isCorrect: false },
              { id: 'b', text: '$D_g = \\mathbb{R}$', isCorrect: false },
              { id: 'c', text: '$D_g = \\mathbb{R} \\setminus \\{-3\\}$', isCorrect: true },
              { id: 'd', text: '$D_g = \\mathbb{R} \\setminus \\{0\\}$', isCorrect: false },
            ],
            solution: 'Nevneren er null når $x + 3 = 0$, altså $x = -3$. Definisjonsmengden er $D_g = \\mathbb{R} \\setminus \\{-3\\}$.',
          },
          {
            id: '1t-3-7-n-quiz1-q2',
            task: 'Hvorfor er det viktig å finne definisjonsmengden til en rasjonal funksjon?',
            options: [
              { id: 'a', text: 'Fordi funksjonen alltid er lik null der', isCorrect: false },
              { id: 'b', text: 'Fordi deling på null er udefinert', isCorrect: true },
              { id: 'c', text: 'Fordi telleren er null der', isCorrect: false },
              { id: 'd', text: 'Fordi grafen alltid krysser $x$-aksen der', isCorrect: false },
            ],
            solution: 'En rasjonal funksjon har en brøk, og deling på null er udefinert. Vi må finne hvor nevneren er null og utelukke disse $x$-verdiene fra definisjonsmengden.',
          },
        ],
        solution: '',
      },
    },    {
      id: '1t-3-7-n-section2',
      type: 'text',
      content: `## Vertikale asymptoter – usynlige vegger

Nå vet vi hvor funksjonen *ikke* er definert. Men hva skjer med grafen i nærheten av disse punktene? Svaret er noe av det mest dramatiske i matematikken: grafen skyter i været – mot pluss eller minus uendelig.

En **vertikal asymptote** er en vertikal linje $x = a$ som grafen nærmer seg, men aldri faktisk treffer eller krysser. Du kan tenke på det som en usynlig vegg i koordinatsystemet. Jo nærmere grafen kommer veggen, desto brattere stiger eller synker den – men den når aldri helt frem.

Vi finner vertikale asymptoter der nevneren er null, *men bare hvis telleren ikke også er null i samme punkt*. Det siste er en viktig detalj som vi kommer tilbake til.

La oss se på $f(x) = \\frac{x + 1}{(x - 2)(x + 3)}$. Nevneren er null når $x = 2$ og $x = -3$. Vi sjekker telleren: $x + 1$ er $3$ i $x = 2$ og $-2$ i $x = -3$ – altså er telleren ikke null i noen av disse punktene. Dermed har vi to vertikale asymptoter: $x = 2$ og $x = -3$.

Et annet eksempel: $f(x) = \\frac{2}{x - 4}$. Nevneren er null når $x = 4$, og telleren er konstant lik $2$ (aldri null). Vi har en vertikal asymptote i $x = 4$. Og for $g(x) = \\frac{x}{x^2 - 1}$ faktoriserer vi nevneren som $(x - 1)(x + 1)$. Telleren $x$ er verken $1$ eller $-1$ i disse punktene, så vi har vertikale asymptoter i $x = 1$ og $x = -1$.

Hva skjer fysisk med funksjonsverdiene nær en vertikal asymptote? Hvis du setter inn $x$-verdier som er veldig nære asymptoten, blir nevneren veldig liten, og en brøk med en liten nevner gir en stor verdi. For eksempel gir $f(x) = \\frac{1}{x - 2}$ verdien $f(2{,}001) = \\frac{1}{0{,}001} = 1000$ og $f(1{,}999) = \\frac{1}{-0{,}001} = -1000$. Grafen eksploderer oppover på den ene siden og nedover på den andre.`,
    },
    { id: '1t-3-7-n-quiz2', type: 'exercise', exercise: { id: '1t-3-7-n-quiz2', number: 'Quiz 2', type: 'multiple-choice', task: 'Test deg selv på vertikale asymptoter:', options: [ { id: 'a', text: 'placeholder', isCorrect: true } ], questions: [
          {
            id: '1t-3-7-n-quiz2-q0',
            task: 'Hvilke vertikale asymptoter har $g(x) = \\frac{x + 2}{x^2 - 25}$?',
            options: [
              { id: 'a', text: '$x = 25$', isCorrect: false },
              { id: 'b', text: '$x = -2$', isCorrect: false },
              { id: 'c', text: '$x = 5$ og $x = -5$', isCorrect: true },
              { id: 'd', text: '$x = 5$', isCorrect: false },
            ],
            solution: 'Nevneren er $x^2 - 25 = (x - 5)(x + 5)$, som er null for $x = 5$ og $x = -5$. Telleren er ikke null i disse punktene. Vertikale asymptoter: $x = 5$ og $x = -5$.',
          },
          {
            id: '1t-3-7-n-quiz2-q1',
            task: 'Hva skjer med funksjonsverdien nær en vertikal asymptote?',
            options: [
              { id: 'a', text: 'Funksjonen blir lik null', isCorrect: false },
              { id: 'b', text: 'Funksjonen nærmer seg $\\pm\\infty$', isCorrect: true },
              { id: 'c', text: 'Funksjonen krysser asymptoten', isCorrect: false },
              { id: 'd', text: 'Funksjonen er konstant', isCorrect: false },
            ],
            solution: 'Nær en vertikal asymptote blir nevneren veldig liten, og brøken eksploderer mot pluss eller minus uendelig. Grafen skyter rett opp eller rett ned.',
          },
          {
            id: '1t-3-7-n-quiz2-q2',
            task: 'Funksjonen $f(x) = \\frac{2}{x - 4}$ har en vertikal asymptote i $x = 4$. Hva er $f(4{,}001)$?',
            options: [
              { id: 'a', text: '$200$', isCorrect: false },
              { id: 'b', text: '$2000$', isCorrect: true },
              { id: 'c', text: '$20$', isCorrect: false },
              { id: 'd', text: '$-2000$', isCorrect: false },
            ],
            solution: '$f(4{,}001) = \\frac{2}{4{,}001 - 4} = \\frac{2}{0{,}001} = 2000$. Jo nærmere vi kommer asymptoten, desto større blir verdien.',
          },
        ], solution: '' } },    {
      id: '1t-3-7-n-section3',
      type: 'text',
      content: `## Horisontale asymptoter – hva skjer langt borte?

Vertikale asymptoter handler om hva som skjer når $x$ nærmer seg et bestemt tall. Nå snur vi perspektivet: hva skjer med funksjonsverdien når $x$ beveger seg mot pluss eller minus uendelig? Svaret gir oss de **horisontale asymptotene**.

En horisontal asymptote er en horisontal linje $y = b$ som grafen nærmer seg når $x$ blir veldig stor (positiv eller negativ). Tenk på det som horisontlinjen du ser mot når du ser utover et flatt landskap – du nærmer deg den, men du når den aldri helt.

For å finne horisontale asymptoter sammenligner vi graden til telleren og nevneren. Det er tre tilfeller, og regelen er heldigvis ganske ryddig:

Hvis graden til telleren er *lavere* enn graden til nevneren, er den horisontale asymptoten $y = 0$. Ta for eksempel $f(x) = \\frac{3}{x + 1}$. Telleren har grad 0 og nevneren har grad 1. Når $x$ blir veldig stor, dominerer nevneren, og brøken krymper mot null. Horisontal asymptote: $y = 0$.

Hvis graden til telleren er *lik* graden til nevneren, er den horisontale asymptoten $y = \\frac{\\text{ledende koeffisient i telleren}}{\\text{ledende koeffisient i nevneren}}$. For $g(x) = \\frac{3x - 1}{x + 2}$ har begge grad 1. Ledende koeffisient i telleren er $3$, i nevneren er den $1$. Horisontal asymptote: $y = \\frac{3}{1} = 3$. Et annet eksempel: $h(x) = \\frac{2x - 5}{x + 3}$ gir $y = \\frac{2}{1} = 2$.

Hvis graden til telleren er *høyere* enn graden til nevneren, finnes det ingen horisontal asymptote. Da vokser funksjonen uten grense.`,
    },
    { id: '1t-3-7-n-quiz3', type: 'exercise', exercise: { id: '1t-3-7-n-quiz3', number: 'Quiz 3', type: 'multiple-choice', task: 'Test deg selv på horisontale asymptoter:', options: [ { id: 'a', text: 'placeholder', isCorrect: true } ], questions: [
          {
            id: '1t-3-7-n-quiz3-q0',
            task: 'Hva er den horisontale asymptoten til $f(x) = \\frac{5x + 7}{2x - 1}$?',
            options: [
              { id: 'a', text: '$y = 0$', isCorrect: false },
              { id: 'b', text: '$y = 7$', isCorrect: false },
              { id: 'c', text: '$y = \\frac{5}{2}$', isCorrect: true },
              { id: 'd', text: 'Funksjonen har ingen horisontal asymptote', isCorrect: false },
            ],
            solution: 'Teller og nevner har begge grad 1. Ledende koeffisient i telleren er $5$, i nevneren $2$. Horisontal asymptote: $y = \\frac{5}{2}$.',
          },
          {
            id: '1t-3-7-n-quiz3-q1',
            task: 'Hva er den horisontale asymptoten til $f(x) = \\frac{3}{x + 1}$?',
            options: [
              { id: 'a', text: '$y = 3$', isCorrect: false },
              { id: 'b', text: '$y = 1$', isCorrect: false },
              { id: 'c', text: '$y = 0$', isCorrect: true },
              { id: 'd', text: 'Ingen horisontal asymptote', isCorrect: false },
            ],
            solution: 'Telleren har grad 0 og nevneren grad 1. Tellergraden er lavere, altså er den horisontale asymptoten $y = 0$.',
          },
          {
            id: '1t-3-7-n-quiz3-q2',
            task: 'Når har en rasjonal funksjon INGEN horisontal asymptote?',
            options: [
              { id: 'a', text: 'Når teller og nevner har lik grad', isCorrect: false },
              { id: 'b', text: 'Når tellergraden er lavere enn nevnergraden', isCorrect: false },
              { id: 'c', text: 'Når tellergraden er høyere enn nevnergraden', isCorrect: true },
              { id: 'd', text: 'Når nevneren er lineær', isCorrect: false },
            ],
            solution: 'Når tellergraden er høyere enn nevnergraden, vokser funksjonen uten grense for store $x$-verdier, og det finnes ingen horisontal asymptote.',
          },
        ], solution: '' } },    {
      id: '1t-3-7-n-section4',
      type: 'text',
      content: `## Hull i grafen – når teller og nevner deler en faktor

Vi nevnte tidligere at en vertikal asymptote oppstår der nevneren er null, *forutsatt at telleren ikke også er null*. Men hva om begge er null i samme punkt? Da får vi noe annet – et **hull** i grafen.

Se på funksjonen $f(x) = \\frac{x^2 - 1}{x - 1}$. Nevneren er null for $x = 1$, så $x = 1$ er utelukket fra definisjonsmengden. Men la oss faktorisere telleren: $x^2 - 1 = (x - 1)(x + 1)$. Nå kan vi skrive $f(x) = \\frac{(x - 1)(x + 1)}{x - 1}$. For alle $x \\neq 1$ kan vi forkorte brøken, og vi får $f(x) = x + 1$. Grafen er altså den rette linjen $y = x + 1$, men med et hull i punktet $(1, 2)$, fordi funksjonen fremdeles er udefinert i $x = 1$.

Dette er viktig: det er *ikke* en vertikal asymptote i $x = 1$, fordi grafen ikke eksploderer. Den oppfører seg helt pent – den mangler bare ett enkelt punkt. Forskjellen mellom et hull og en vertikal asymptote er at hullet oppstår når en felles faktor i teller og nevner kansellerer hverandre.

La oss ta et eksempel til. Hva med $f(x) = \\frac{x^2 - x - 6}{x - 3}$? Vi faktoriserer telleren: $x^2 - x - 6 = (x - 3)(x + 2)$. Da blir $f(x) = \\frac{(x - 3)(x + 2)}{x - 3} = x + 2$ for $x \\neq 3$. Grafen er linjen $y = x + 2$ med et hull i $(3, 5)$.

Huskeregelen er enkel: hvis teller og nevner har en felles faktor, forkorter vi og får et hull. Hvis nevneren er null mens telleren ikke er det, får vi en vertikal asymptote.`,
    },
    { id: '1t-3-7-n-quiz4', type: 'exercise', exercise: { id: '1t-3-7-n-quiz4', number: 'Quiz 4', type: 'multiple-choice', task: 'Test deg selv på hull i grafen:', options: [ { id: 'a', text: 'placeholder', isCorrect: true } ], questions: [
          {
            id: '1t-3-7-n-quiz4-q0',
            task: 'Hva skjer med grafen til $f(x) = \\frac{x^2 - 4}{x + 2}$ i $x = -2$?',
            options: [
              { id: 'a', text: 'Det er en vertikal asymptote', isCorrect: false },
              { id: 'b', text: 'Funksjonen har verdien $0$', isCorrect: false },
              { id: 'c', text: 'Grafen krysser $x$-aksen', isCorrect: false },
              { id: 'd', text: 'Det er et hull i grafen i punktet $(-2, -4)$', isCorrect: true },
            ],
            solution: 'Vi faktoriserer: $\\frac{(x - 2)(x + 2)}{x + 2} = x - 2$ for $x \\neq -2$. Grafen er linjen $y = x - 2$ med hull i $(-2, -4)$.',
          },
          {
            id: '1t-3-7-n-quiz4-q1',
            task: 'Hva er forskjellen mellom et hull og en vertikal asymptote?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'Hull oppstår når teller og nevner har felles faktor, asymptote når de ikke har det', isCorrect: true },
              { id: 'c', text: 'Hull oppstår bare i lineære funksjoner', isCorrect: false },
              { id: 'd', text: 'Asymptote oppstår bare i nevneren', isCorrect: false },
            ],
            solution: 'Et hull oppstår når teller og nevner begge er null i samme punkt (felles faktor som kan strykes). En vertikal asymptote oppstår når bare nevneren er null -- da eksploderer funksjonen.',
          },
          {
            id: '1t-3-7-n-quiz4-q2',
            task: 'I $f(x) = \\frac{x^2 - 1}{x - 1}$: hva er koordinatene til hullet?',
            options: [
              { id: 'a', text: '$(1, 0)$', isCorrect: false },
              { id: 'b', text: '$(1, 2)$', isCorrect: true },
              { id: 'c', text: '$(-1, 0)$', isCorrect: false },
              { id: 'd', text: '$(1, 1)$', isCorrect: false },
            ],
            solution: 'Vi faktoriserer: $\\frac{(x-1)(x+1)}{x-1} = x + 1$ for $x \\neq 1$. Hullet er i $x = 1$, og $y = 1 + 1 = 2$. Koordinatene er $(1, 2)$.',
          },
        ], solution: '' } },    {
      id: '1t-3-7-n-section5',
      type: 'text',
      content: `## Å skissere rasjonale funksjoner – hele bildet

Nå har vi alle verktøyene vi trenger for å analysere en rasjonal funksjon fullstendig. La oss sette dem sammen i en systematisk fremgangsmåte gjennom et konkret eksempel: $f(x) = \\frac{x + 2}{x - 1}$.

Først finner vi **definisjonsmengden**. Nevneren er null når $x - 1 = 0$, altså $x = 1$. Definisjonsmengden er $D_f = \\mathbb{R} \\setminus \\{1\\}$.

Deretter finner vi **vertikale asymptoter**. Nevneren er null i $x = 1$, og telleren $x + 2 = 1 + 2 = 3 \\neq 0$ der. Altså har vi en vertikal asymptote $x = 1$.

Så finner vi **horisontale asymptoter**. Teller og nevner har begge grad 1. Ledende koeffisient er $1$ i begge. Horisontal asymptote: $y = \\frac{1}{1} = 1$.

Vi finner **nullpunktet** ved å sette telleren lik null: $x + 2 = 0$ gir $x = -2$. Funksjonen krysser $x$-aksen i $(-2, 0)$.

Til slutt finner vi **$y$-skjæringen** ved å sette $x = 0$: $f(0) = \\frac{0 + 2}{0 - 1} = \\frac{2}{-1} = -2$. Grafen krysser $y$-aksen i $(0, -2)$.

La oss prøve en til: $f(x) = \\frac{2x - 4}{x + 3}$. Vertikal asymptote der $x + 3 = 0$, altså $x = -3$. Horisontal asymptote: begge har grad 1, $y = \\frac{2}{1} = 2$. Nullpunkt: $2x - 4 = 0$ gir $x = 2$. $y$-skjæring: $f(0) = \\frac{-4}{3} = -\\frac{4}{3}$.

Med disse fem stegene – definisjonsmengde, vertikale asymptoter, horisontale asymptoter, nullpunkter og $y$-skjæring – kan du tegne en god skisse av enhver rasjonal funksjon du møter.`,
    },
    { id: '1t-3-7-n-quiz5', type: 'exercise', exercise: { id: '1t-3-7-n-quiz5', number: 'Quiz 5', type: 'multiple-choice', task: 'Test deg selv på å analysere rasjonale funksjoner:', options: [ { id: 'a', text: 'placeholder', isCorrect: true } ], questions: [
          {
            id: '1t-3-7-n-quiz5-q0',
            task: 'Hva er nullpunktene til $f(x) = \\frac{x^2 - 9}{x - 1}$?',
            options: [
              { id: 'a', text: '$x = 1$', isCorrect: false },
              { id: 'b', text: '$x = 3$ og $x = -3$', isCorrect: true },
              { id: 'c', text: '$x = 9$ og $x = -9$', isCorrect: false },
              { id: 'd', text: '$x = 3$', isCorrect: false },
            ],
            solution: 'Nullpunktene finner vi ved å sette telleren lik null: $x^2 - 9 = (x-3)(x+3) = 0$, altså $x = 3$ og $x = -3$. Nevneren er ikke null i disse punktene.',
          },
          {
            id: '1t-3-7-n-quiz5-q1',
            task: 'For $f(x) = \\frac{x + 2}{x - 1}$, hva er $y$-skjæringen?',
            options: [
              { id: 'a', text: '$(0, -2)$', isCorrect: true },
              { id: 'b', text: '$(0, 2)$', isCorrect: false },
              { id: 'c', text: '$(0, 1)$', isCorrect: false },
              { id: 'd', text: '$(0, -1)$', isCorrect: false },
            ],
            solution: '$y$-skjæringen finner vi ved $f(0) = \\frac{0 + 2}{0 - 1} = \\frac{2}{-1} = -2$. Punktet er $(0, -2)$.',
          },
          {
            id: '1t-3-7-n-quiz5-q2',
            task: 'Hvilke fem steg bruker vi for å analysere en rasjonal funksjon fullstendig?',
            options: [
              { id: 'a', text: 'Derivere, integrere, faktorisere, tegne, sjekke', isCorrect: false },
              { id: 'b', text: 'Definisjonsmengde, vertikale asymptoter, horisontale asymptoter, nullpunkter, $y$-skjæring', isCorrect: true },
              { id: 'c', text: 'ABC-formelen, diskriminant, nullregel, inspeksjon, konjugat', isCorrect: false },
              { id: 'd', text: 'Teller, nevner, brøk, forenkling, fortegn', isCorrect: false },
            ],
            solution: 'De fem stegene er: (1) Definisjonsmengde, (2) Vertikale asymptoter, (3) Horisontale asymptoter, (4) Nullpunkter og (5) $y$-skjæring. Sammen gir de et komplett bilde av funksjonen.',
          },
        ], solution: '' } },    {
      id: '1t-3-7-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket rasjonale funksjoner – funksjoner på formen $f(x) = \\frac{P(x)}{Q(x)}$ der teller og nevner er polynomer.

**Definisjonsmengden** er alle reelle tall bortsett fra de $x$-verdiene der nevneren er null. Vi finner dem ved å løse $Q(x) = 0$. For eksempel har $f(x) = \\frac{1}{x^2 - 4}$ definisjonsmengde $D_f = \\mathbb{R} \\setminus \\{-2, 2\\}$.

**Vertikale asymptoter** oppstår der nevneren er null og telleren ikke er null. Grafen skyter mot pluss eller minus uendelig nær disse linjene. Hvis derimot teller og nevner begge er null i samme punkt, kan vi forkorte brøken, og vi får et **hull** i grafen i stedet.

**Horisontale asymptoter** bestemmes av graden til teller og nevner: er tellergraden lavere, er asymptoten $y = 0$; er gradene like, er asymptoten $y$ lik forholdet mellom de ledende koeffisientene; er tellergraden høyere, finnes ingen horisontal asymptote.

For å analysere en rasjonal funksjon fullstendig finner du definisjonsmengde, vertikale og horisontale asymptoter, nullpunkter (teller lik null) og $y$-skjæring ($f(0)$). Sammen gir disse opplysningene deg alt du trenger for å forstå grafens form.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.8 NARRATIV: Eksponentialfunksjoner
// ============================================================================

export const CHAPTER_1T_3_8_NARRATIV: TextbookChapter = {
  id: '1t-3-8-narrativ',
  courseId: '1t',
  chapterNumber: '3.8',
  title: 'Eksponentialfunksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om tall som vokser lynraskt eller krymper sakte – fra bakterier som dobler seg til radioaktive stoffer som halveres.',
  estimatedMinutes: 35,
  competenceGoals: ['forstå eksponentialfunksjoner'],
  linkedChapterId: '1t-3-8',
  content: [    {
      id: '1t-3-8-n-intro',
      type: 'text',
      content: `## Når veksten tar av

Forestill deg at du legger et riskorn på det første feltet av et sjakkbrett, to på det neste, fire på det tredje, og fortsetter å doble for hvert felt. Hvor mye ris ender du opp med? Svaret er svimlende: mer ris enn hele verdens årlige produksjon. Det er kraften i eksponentiell vekst – den starter sakte, men tar fullstendig av.

En **eksponentialfunksjon** er en funksjon der variabelen står i eksponenten. Den generelle formen er $f(x) = a \\cdot b^x$, der $a \\neq 0$, $b > 0$ og $b \\neq 1$. Her er $a$ **startverdien** (verdien når $x = 0$, fordi $f(0) = a \\cdot b^0 = a$), og $b$ er **vekstfaktoren** som bestemmer hvor raskt funksjonen vokser eller avtar.

Eksponentialfunksjoner dukker opp overalt: i befolkningsvekst, renteberegninger, radioaktiv nedbrytning, spredning av virus, og verditap på biler. I dette kapittelet skal vi forstå hvordan disse funksjonene fungerer, hvordan vi setter dem opp fra praktiske situasjoner, og hvordan vi leser grafene deres.`,
    },
    {
      id: '1t-3-8-n-section1', type: 'text',
      content: `## Eksponentiell vekst – når ting bare blir mer og mer

La oss starte med vekst. Når **vekstfaktoren** $b$ er større enn $1$, har vi **eksponentiell vekst**. Det betyr at funksjonsverdien øker for hver enhet $x$ vokser.

Tenk deg en bakteriekultur som starter med 1000 bakterier og dobler seg hver time. Etter én time har du $1000 \\cdot 2 = 2000$. Etter to timer: $1000 \\cdot 2 \\cdot 2 = 4000$. Etter tre timer: $1000 \\cdot 2^3 = 8000$. Ser du mønsteret? Etter $t$ timer er antallet $N(t) = 1000 \\cdot 2^t$. Her er startverdien $a = 1000$ og vekstfaktoren $b = 2$.

Men vekstfaktoren trenger ikke være et helt tall. I mange situasjoner er den knyttet til en prosentvis endring. Hvis noe øker med $p\\%$ per tidsenhet, er vekstfaktoren $b = 1 + \\frac{p}{100}$. For eksempel: en populasjon på 500 individer som vokser med $8\\%$ per år har vekstfaktoren $b = 1 + 0{,}08 = 1{,}08$. Funksjonen blir $P(t) = 500 \\cdot 1{,}08^t$. Etter 10 år: $P(10) = 500 \\cdot 1{,}08^{10} \\approx 1080$ individer.

Nøkkelen er at eksponentiell vekst ikke legger til et fast beløp hver gang (det ville vært lineær vekst), men *multipliserer* med en fast faktor. Det gjør at veksten akselererer over tid – i starten virker den beskjeden, men etter hvert blir den eksplosiv.`,
    },
    { id: '1t-3-8-n-quiz1', type: 'exercise', exercise: { id: '1t-3-8-n-quiz1', number: 'Quiz 1', type: 'multiple-choice', task: 'Test deg selv på eksponentiell vekst:', options: [ { id: 'a', text: 'placeholder', isCorrect: true } ], questions: [
          {
            id: '1t-3-8-n-quiz1-q0',
            task: 'En investering på 20 000 kr vokser med 6% per år. Hvilken funksjon beskriver verdien etter $t$ år?',
            options: [
              { id: 'a', text: '$V(t) = 20\\,000 + 0{,}06t$', isCorrect: false },
              { id: 'b', text: '$V(t) = 20\\,000 \\cdot 0{,}06^t$', isCorrect: false },
              { id: 'c', text: '$V(t) = 20\\,000 \\cdot 1{,}06^t$', isCorrect: true },
              { id: 'd', text: '$V(t) = 20\\,000 \\cdot 6^t$', isCorrect: false },
            ],
            solution: 'Startverdien er $a = 20\\,000$ og vekstfaktoren er $b = 1 + 0{,}06 = 1{,}06$. Funksjonen blir $V(t) = 20\\,000 \\cdot 1{,}06^t$.',
          },
          {
            id: '1t-3-8-n-quiz1-q1',
            task: 'Hva er vekstfaktoren $b$ når noe øker med $p\\%$ per tidsenhet?',
            options: [
              { id: 'a', text: '$b = p$', isCorrect: false },
              { id: 'b', text: '$b = 1 + \\frac{p}{100}$', isCorrect: true },
              { id: 'c', text: '$b = \\frac{p}{100}$', isCorrect: false },
              { id: 'd', text: '$b = 1 - \\frac{p}{100}$', isCorrect: false },
            ],
            solution: 'Vekstfaktoren ved $p\\%$ økning er $b = 1 + \\frac{p}{100}$. For eksempel gir $8\\%$ økning $b = 1{,}08$.',
          },
          {
            id: '1t-3-8-n-quiz1-q2',
            task: 'Hva er forskjellen mellom lineær og eksponentiell vekst?',
            options: [
              { id: 'a', text: 'Lineær vekst legger til et fast beløp, eksponentiell multipliserer med en fast faktor', isCorrect: true },
              { id: 'b', text: 'De er det samme, bare skrevet forskjellig', isCorrect: false },
              { id: 'c', text: 'Eksponentiell vekst er alltid raskere', isCorrect: false },
              { id: 'd', text: 'Lineær vekst har alltid høyere startverdi', isCorrect: false },
            ],
            solution: 'Lineær vekst legger til et fast beløp hvert steg (f.eks. $+100$ per år), mens eksponentiell vekst multipliserer med en fast faktor (f.eks. $\\cdot 1{,}08$ per år). Eksponentiell vekst akselererer over tid.',
          },
        ], solution: '' } },    {
      id: '1t-3-8-n-section2', type: 'text',
      content: `## Eksponentiell nedgang – når ting krymper

Hva skjer når vekstfaktoren er mellom 0 og 1? Da har vi **eksponentiell nedgang** – funksjonen synker for hver tidsenhet. Verdien blir stadig mindre, men når aldri helt null.

Et klassisk eksempel er verditap på en bil. Tenk deg en ny bil som koster 400 000 kr og mister $15\\%$ av verdien hvert år. Vekstfaktoren blir $b = 1 - 0{,}15 = 0{,}85$. Legg merke til at vi trekker prosenten fra 1, fordi verdien *avtar*. Funksjonen er $V(t) = 400\\,000 \\cdot 0{,}85^t$. Etter 5 år: $V(5) = 400\\,000 \\cdot 0{,}85^5 \\approx 177\\,000$ kr. Bilen har altså mistet mer enn halvparten av verdien.

Generelt: hvis noe avtar med $p\\%$ per tidsenhet, er vekstfaktoren $b = 1 - \\frac{p}{100}$. En maskin som koster 200 000 kr og mister $25\\%$ per år har $b = 0{,}75$, og funksjonen $V(t) = 200\\,000 \\cdot 0{,}75^t$. Etter 4 år er verdien $V(4) = 200\\,000 \\cdot 0{,}75^4 \\approx 63\\,281$ kr.

Det som er spesielt med eksponentiell nedgang er at verdien aldri når null. Den krymper og krymper, men det er alltid litt igjen. Matematisk betyr dette at grafen har en **horisontal asymptote** i $y = 0$. Merk deg forskjellen: vekstfaktor $b > 1$ gir vekst, og $0 < b < 1$ gir nedgang. Grensen ved $b = 1$ gir en konstant funksjon.`,
    },
    { id: '1t-3-8-n-quiz2', type: 'exercise', exercise: { id: '1t-3-8-n-quiz2', number: 'Quiz 2', type: 'multiple-choice', task: 'Test deg selv på eksponentiell nedgang:', options: [ { id: 'a', text: 'placeholder', isCorrect: true } ], questions: [
          {
            id: '1t-3-8-n-quiz2-q0',
            task: 'En datamaskin koster 12 000 kr og mister 30% av verdien per år. Hva er verdien etter 3 år?',
            options: [
              { id: 'a', text: 'Ca. 1 200 kr', isCorrect: false },
              { id: 'b', text: 'Ca. 4 116 kr', isCorrect: true },
              { id: 'c', text: 'Ca. 8 400 kr', isCorrect: false },
              { id: 'd', text: 'Ca. 2 520 kr', isCorrect: false },
            ],
            solution: 'Vekstfaktoren er $b = 1 - 0{,}30 = 0{,}70$. Etter 3 år: $V(3) = 12\\,000 \\cdot 0{,}70^3 = 12\\,000 \\cdot 0{,}343 = 4\\,116$ kr.',
          },
          {
            id: '1t-3-8-n-quiz2-q1',
            task: 'Hva er vekstfaktoren når noe mister $15\\%$ per år?',
            options: [
              { id: 'a', text: '$b = 1{,}15$', isCorrect: false },
              { id: 'b', text: '$b = 0{,}15$', isCorrect: false },
              { id: 'c', text: '$b = 0{,}85$', isCorrect: true },
              { id: 'd', text: '$b = -0{,}15$', isCorrect: false },
            ],
            solution: 'Ved $15\\%$ nedgang: $b = 1 - \\frac{15}{100} = 1 - 0{,}15 = 0{,}85$. Vi trekker prosenten fra 1 fordi verdien avtar.',
          },
          {
            id: '1t-3-8-n-quiz2-q2',
            task: 'Når har vi eksponentiell nedgang?',
            options: [
              { id: 'a', text: 'Når $b > 1$', isCorrect: false },
              { id: 'b', text: 'Når $b = 1$', isCorrect: false },
              { id: 'c', text: 'Når $0 < b < 1$', isCorrect: true },
              { id: 'd', text: 'Når $b < 0$', isCorrect: false },
            ],
            solution: 'Eksponentiell nedgang skjer når vekstfaktoren $b$ er mellom 0 og 1. Da krymper verdien for hvert steg, men når aldri helt null.',
          },
        ], solution: '' } },    {
      id: '1t-3-8-n-section3', type: 'text',
      content: `## Grafens egenskaper – hva eksponentialfunksjoner ser ut som

Nå som vi forstår vekst og nedgang, la oss se på hva grafene faktisk forteller oss. Alle eksponentialfunksjoner på formen $f(x) = a \\cdot b^x$ med $a > 0$ deler noen viktige egenskaper.

For det første: $y$-skjæringen er alltid $(0, a)$, fordi $f(0) = a \\cdot b^0 = a \\cdot 1 = a$. For det andre: funksjonsverdien er *alltid positiv*. Siden $b > 0$, er $b^x > 0$ for alle $x$, og dermed er $a \\cdot b^x > 0$ når $a > 0$. Det betyr at grafen aldri krysser $x$-aksen – funksjonen har ingen nullpunkter. Linjen $y = 0$ er en **horisontal asymptote**.

Når $b > 1$, stiger grafen fra venstre mot høyre. For små $x$-verdier er den ganske flat, men for store $x$-verdier stiger den bratt. Når $0 < b < 1$, synker grafen: den er høy til venstre og krymper mot $y = 0$ til høyre.

Et fint eksempel er å sammenligne $f(x) = 2^x$ og $g(x) = \\left(\\frac{1}{2}\\right)^x$. Begge har $y$-skjæring i $(0, 1)$, men $f$ stiger mens $g$ synker. Faktisk er $\\left(\\frac{1}{2}\\right)^x = 2^{-x}$, så $g$ er bare en speiling av $f$ om $y$-aksen. Funksjonen $h(x) = 50 \\cdot 2^{-x}$ er også nedgang fordi $2^{-x} = \\left(\\frac{1}{2}\\right)^x$, altså har vi egentlig $b = 0{,}5 < 1$.`,
    },
    { id: '1t-3-8-n-quiz3', type: 'exercise', exercise: { id: '1t-3-8-n-quiz3', number: 'Quiz 3', type: 'multiple-choice', task: 'Test deg selv på grafens egenskaper:', options: [ { id: 'a', text: 'placeholder', isCorrect: true } ], questions: [
          {
            id: '1t-3-8-n-quiz3-q0',
            task: 'Hvilken av disse funksjonene viser eksponentiell nedgang?',
            options: [
              { id: 'a', text: '$f(x) = 3 \\cdot 1{,}5^x$', isCorrect: false },
              { id: 'b', text: '$g(x) = 100 \\cdot 0{,}9^x$', isCorrect: true },
              { id: 'c', text: '$h(x) = 5 \\cdot 3^x$', isCorrect: false },
              { id: 'd', text: '$k(x) = 2x + 10$', isCorrect: false },
            ],
            solution: 'Eksponentiell nedgang har vekstfaktor $0 < b < 1$. Funksjonen $g(x) = 100 \\cdot 0{,}9^x$ har $b = 0{,}9 < 1$, altså nedgang.',
          },
          {
            id: '1t-3-8-n-quiz3-q1',
            task: 'Hva er $y$-skjæringen til $f(x) = 7 \\cdot 2^x$?',
            options: [
              { id: 'a', text: '$(0, 2)$', isCorrect: false },
              { id: 'b', text: '$(0, 14)$', isCorrect: false },
              { id: 'c', text: '$(0, 7)$', isCorrect: true },
              { id: 'd', text: '$(7, 0)$', isCorrect: false },
            ],
            solution: '$f(0) = 7 \\cdot 2^0 = 7 \\cdot 1 = 7$. $y$-skjæringen er $(0, 7)$, altså startverdien $a$.',
          },
          {
            id: '1t-3-8-n-quiz3-q2',
            task: 'Har eksponentialfunksjonen $f(x) = 4 \\cdot 3^x$ noen nullpunkter?',
            options: [
              { id: 'a', text: 'Ja, i $x = 0$', isCorrect: false },
              { id: 'b', text: 'Ja, i $x = -4$', isCorrect: false },
              { id: 'c', text: 'Nei, funksjonen er alltid positiv', isCorrect: true },
              { id: 'd', text: 'Ja, i $x = -\\infty$', isCorrect: false },
            ],
            solution: 'Siden $3^x > 0$ for alle $x$, og $4 > 0$, er $f(x) = 4 \\cdot 3^x > 0$ for alle $x$. Grafen krysser aldri $x$-aksen, og $y = 0$ er en horisontal asymptote.',
          },
        ], solution: '' } },    {
      id: '1t-3-8-n-section4', type: 'text',
      content: `## Doblingstid, halveringstid og praktiske anvendelser

To begreper som dukker opp igjen og igjen i forbindelse med eksponentialfunksjoner er **doblingstid** og **halveringstid**.

**Doblingstid** er tiden det tar før verdien er dobbelt så stor. Hvis en bakteriekoloni dobler seg hvert tredje døgn, er doblingstiden $T = 3$ døgn, og vi kan skrive funksjonen som $N(t) = N_0 \\cdot 2^{t/3}$, der $N_0$ er startverdien.

**Halveringstid** er tiden det tar før verdien er halvert. Hvis et radioaktivt stoff har halveringstid 5 år og vi starter med 200 gram, skriver vi $N(t) = 200 \\cdot 0{,}5^{t/5}$. Etter 15 år: $N(15) = 200 \\cdot 0{,}5^{15/5} = 200 \\cdot 0{,}5^3 = 200 \\cdot 0{,}125 = 25$ gram.

La oss også se på et renteeksempel. Du setter 10 000 kr i banken med $3\\%$ årlig rente. Vekstfaktoren er $b = 1{,}03$, og funksjonen er $K(t) = 10\\,000 \\cdot 1{,}03^t$. Etter 20 år: $K(20) = 10\\,000 \\cdot 1{,}03^{20} \\approx 18\\,061$ kr. Du har tjent ca. 8061 kr i renter – rentes rente i praksis.

Uansett om det handler om bakterier, penger, radioaktivitet eller bilverdi – modellen er den samme: $f(x) = a \\cdot b^x$. Du trenger bare å identifisere startverdien og vekstfaktoren.`,
    },
    { id: '1t-3-8-n-quiz4', type: 'exercise', exercise: { id: '1t-3-8-n-quiz4', number: 'Quiz 4', type: 'multiple-choice', task: 'Test deg selv på doblingstid og halveringstid:', options: [ { id: 'a', text: 'placeholder', isCorrect: true } ], questions: [
          {
            id: '1t-3-8-n-quiz4-q0',
            task: 'Et radioaktivt stoff har halveringstid 8 år. Du starter med 160 gram. Hvor mye er igjen etter 24 år?',
            options: [
              { id: 'a', text: '80 gram', isCorrect: false },
              { id: 'b', text: '40 gram', isCorrect: false },
              { id: 'c', text: '20 gram', isCorrect: true },
              { id: 'd', text: '10 gram', isCorrect: false },
            ],
            solution: '$N(24) = 160 \\cdot 0{,}5^{24/8} = 160 \\cdot 0{,}5^3 = 160 \\cdot 0{,}125 = 20$ gram. Etter 24 år har stoffet halvert seg 3 ganger.',
          },
          {
            id: '1t-3-8-n-quiz4-q1',
            task: 'En bakteriekoloni dobler seg hvert 4. døgn, og starter med 500 bakterier. Hvor mange er det etter 12 døgn?',
            options: [
              { id: 'a', text: '1 500', isCorrect: false },
              { id: 'b', text: '2 000', isCorrect: false },
              { id: 'c', text: '4 000', isCorrect: true },
              { id: 'd', text: '6 000', isCorrect: false },
            ],
            solution: '$N(12) = 500 \\cdot 2^{12/4} = 500 \\cdot 2^3 = 500 \\cdot 8 = 4\\,000$ bakterier. Etter 12 døgn har kolonien doblet seg 3 ganger.',
          },
          {
            id: '1t-3-8-n-quiz4-q2',
            task: 'Hva er halveringstid?',
            options: [
              { id: 'a', text: 'Tiden det tar før verdien er null', isCorrect: false },
              { id: 'b', text: 'Tiden det tar før verdien er halvert', isCorrect: true },
              { id: 'c', text: 'Halvparten av doblingstiden', isCorrect: false },
              { id: 'd', text: 'Tiden det tar før vekstfaktoren halveres', isCorrect: false },
            ],
            solution: 'Halveringstid er tiden det tar før verdien er halvparten av hva den var. Med halveringstid $T$ er funksjonen $N(t) = N_0 \\cdot 0{,}5^{t/T}$. Verdien når aldri helt null.',
          },
        ], solution: '' } },    {
      id: '1t-3-8-n-section5', type: 'text',
      content: `## Finne $a$ og $b$ fra opplysninger

Noen ganger får du ikke oppgitt startverdien og vekstfaktoren direkte – i stedet får du to punkter som grafen går gjennom, og må finne $a$ og $b$ selv.

Anta at grafen til $f(x) = a \\cdot b^x$ går gjennom punktene $(0, 4)$ og $(2, 36)$. Fra det første punktet vet vi at $f(0) = a \\cdot b^0 = a = 4$. Nå bruker vi det andre punktet: $f(2) = 4 \\cdot b^2 = 36$. Vi løser for $b$: $b^2 = \\frac{36}{4} = 9$, som gir $b = 3$. Funksjonen er $f(x) = 4 \\cdot 3^x$.

Hvis begge punktene har $x \\neq 0$, må vi sette opp et likningssystem. For eksempel, hvis $f(1) = 6$ og $f(3) = 54$, får vi $a \\cdot b = 6$ og $a \\cdot b^3 = 54$. Vi deler: $\\frac{a \\cdot b^3}{a \\cdot b} = \\frac{54}{6}$, som gir $b^2 = 9$, altså $b = 3$. Deretter: $a \\cdot 3 = 6$, altså $a = 2$. Funksjonen er $f(x) = 2 \\cdot 3^x$.

Huskeregelen for vekstfaktorer: $p\\%$ økning gir $b = 1 + \\frac{p}{100}$, $p\\%$ nedgang gir $b = 1 - \\frac{p}{100}$, dobling gir $b = 2$, tredobling gir $b = 3$, og halvering gir $b = 0{,}5$.`,
    },
    { id: '1t-3-8-n-quiz5', type: 'exercise', exercise: { id: '1t-3-8-n-quiz5', number: 'Quiz 5', type: 'multiple-choice', task: 'Test deg selv på å finne $a$ og $b$:', options: [ { id: 'a', text: 'placeholder', isCorrect: true } ], questions: [
          {
            id: '1t-3-8-n-quiz5-q0',
            task: 'Grafen til $f(x) = a \\cdot b^x$ går gjennom $(0, 5)$ og $(2, 45)$. Hva er funksjonsuttrykket?',
            options: [
              { id: 'a', text: '$f(x) = 5 \\cdot 9^x$', isCorrect: false },
              { id: 'b', text: '$f(x) = 45 \\cdot 3^x$', isCorrect: false },
              { id: 'c', text: '$f(x) = 5 \\cdot 3^x$', isCorrect: true },
              { id: 'd', text: '$f(x) = 5 \\cdot 45^x$', isCorrect: false },
            ],
            solution: 'Fra $(0, 5)$: $a = 5$. Fra $(2, 45)$: $5 \\cdot b^2 = 45$, altså $b^2 = 9$ og $b = 3$. Funksjonen er $f(x) = 5 \\cdot 3^x$.',
          },
          {
            id: '1t-3-8-n-quiz5-q1',
            task: 'Hvis $f(0) = a \\cdot b^0$, hva er $f(0)$?',
            options: [
              { id: 'a', text: '$f(0) = 0$', isCorrect: false },
              { id: 'b', text: '$f(0) = b$', isCorrect: false },
              { id: 'c', text: '$f(0) = a$', isCorrect: true },
              { id: 'd', text: '$f(0) = ab$', isCorrect: false },
            ],
            solution: 'Siden $b^0 = 1$ for alle $b > 0$, blir $f(0) = a \\cdot 1 = a$. Startverdien $a$ kan alltid leses direkte av $y$-skjæringen.',
          },
          {
            id: '1t-3-8-n-quiz5-q2',
            task: 'Grafen til $f(x) = a \\cdot b^x$ går gjennom $(1, 6)$ og $(3, 54)$. Hva er $b$?',
            options: [
              { id: 'a', text: '$b = 9$', isCorrect: false },
              { id: 'b', text: '$b = 3$', isCorrect: true },
              { id: 'c', text: '$b = 6$', isCorrect: false },
              { id: 'd', text: '$b = 54$', isCorrect: false },
            ],
            solution: 'Vi har $ab = 6$ og $ab^3 = 54$. Vi deler: $\\frac{ab^3}{ab} = \\frac{54}{6}$, altså $b^2 = 9$ og $b = 3$.',
          },
        ], solution: '' } },    {
      id: '1t-3-8-n-summary', type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket eksponentialfunksjoner – funksjoner på formen $f(x) = a \\cdot b^x$ der $a$ er startverdien og $b$ er vekstfaktoren.

**Eksponentiell vekst** skjer når $b > 1$. Funksjonen øker for hver tidsenhet, og veksten akselererer over tid. Prosentvis økning med $p\\%$ gir vekstfaktor $b = 1 + \\frac{p}{100}$. En bakteriekultur som dobler seg har $b = 2$, en investering med $3\\%$ rente har $b = 1{,}03$.

**Eksponentiell nedgang** skjer når $0 < b < 1$. Verdien synker, men når aldri null. Prosentvis nedgang med $p\\%$ gir vekstfaktor $b = 1 - \\frac{p}{100}$. En bil som mister $15\\%$ årlig har $b = 0{,}85$.

**Grafens egenskaper** er at $y$-skjæringen er $(0, a)$, funksjonen er alltid positiv, den har ingen nullpunkter, og $y = 0$ er en horisontal asymptote. Grafen stiger for $b > 1$ og synker for $0 < b < 1$.

**Doblingstid** og **halveringstid** beskriver hvor lang tid det tar før verdien henholdsvis dobles eller halveres. Et stoff med halveringstid $T$ følger $N(t) = N_0 \\cdot 0{,}5^{t/T}$.

For å finne $a$ og $b$ fra to punkter bruker du $f(0) = a$ (hvis mulig) og løser for $b$ med det andre punktet. Har du to punkter med $x \\neq 0$, setter du opp et likningssystem og deler likningene på hverandre for å eliminere $a$.`,
    },
  ],
  exercises: [],
};


// ============================================================================
// RE-EKSPORT FRA DEL-FILER
// ============================================================================

export { CHAPTER_1T_1_1_NARRATIV, CHAPTER_1T_1_2_NARRATIV };
export { CHAPTER_1T_1_6_NARRATIV, CHAPTER_1T_1_7_NARRATIV };
export { CHAPTER_1T_1_8_NARRATIV, CHAPTER_1T_1_9_NARRATIV };
export { CHAPTER_1T_2_5_NARRATIV, CHAPTER_1T_2_6_NARRATIV };
export { CHAPTER_1T_2_8_NARRATIV, CHAPTER_1T_2_9_NARRATIV, CHAPTER_1T_2_10_NARRATIV };
export { CHAPTER_1T_3_1_NARRATIV, CHAPTER_1T_3_2_NARRATIV, CHAPTER_1T_3_3_NARRATIV };
export { CHAPTER_1T_3_4_NARRATIV, CHAPTER_1T_3_5_NARRATIV, CHAPTER_1T_3_6_NARRATIV };
export { CHAPTER_1T_4_1_NARRATIV, CHAPTER_1T_4_2_NARRATIV, CHAPTER_1T_4_3_NARRATIV, CHAPTER_1T_4_4_NARRATIV, CHAPTER_1T_4_5_NARRATIV };
export { CHAPTER_1T_5_1_NARRATIV, CHAPTER_1T_5_2_NARRATIV, CHAPTER_1T_5_3_NARRATIV, CHAPTER_1T_5_4_NARRATIV };
export { CHAPTER_1T_5_5_NARRATIV, CHAPTER_1T_5_6_NARRATIV, CHAPTER_1T_5_7_NARRATIV, CHAPTER_1T_6_1_NARRATIV, CHAPTER_1T_6_2_NARRATIV };
export {
  CHAPTER_1T_7_1_NARRATIV,
  CHAPTER_1T_7_2_NARRATIV,
  CHAPTER_1T_7_3_NARRATIV,
  CHAPTER_1T_7_5_NARRATIV,
  CHAPTER_1T_7_6_NARRATIV,
  CHAPTER_1T_7_7_NARRATIV,
};
export { CHAPTER_1T_8_1_NARRATIV, CHAPTER_1T_8_2_NARRATIV, CHAPTER_1T_8_3_NARRATIV, CHAPTER_1T_8_4_NARRATIV, CHAPTER_1T_8_5_NARRATIV };

// ============================================================================
// KOMPLETT EKSPORT-ARRAY (alle 1T narrativ-kapitler)
// ============================================================================

export const MATEMATIKK_1T_NARRATIV_CHAPTERS = [
  // Seksjon 1: Tall og algebra
  CHAPTER_1T_1_1_NARRATIV,
  CHAPTER_1T_1_2_NARRATIV,
  CHAPTER_1T_1_3_NARRATIV,
  CHAPTER_1T_1_4_NARRATIV,
  CHAPTER_1T_1_5_NARRATIV,
  CHAPTER_1T_1_6_NARRATIV,
  CHAPTER_1T_1_7_NARRATIV,
  CHAPTER_1T_1_8_NARRATIV,
  CHAPTER_1T_1_9_NARRATIV,
  // Seksjon 2: Likninger
  CHAPTER_1T_2_1_NARRATIV,
  CHAPTER_1T_2_2_NARRATIV,
  CHAPTER_1T_2_3_NARRATIV,
  CHAPTER_1T_2_4_NARRATIV,
  CHAPTER_1T_2_5_NARRATIV,
  CHAPTER_1T_2_6_NARRATIV,
  CHAPTER_1T_2_8_NARRATIV,
  CHAPTER_1T_2_9_NARRATIV,
  CHAPTER_1T_2_10_NARRATIV,
  // Seksjon 3: Funksjoner
  CHAPTER_1T_3_1_NARRATIV,
  CHAPTER_1T_3_2_NARRATIV,
  CHAPTER_1T_3_3_NARRATIV,
  CHAPTER_1T_3_4_NARRATIV,
  CHAPTER_1T_3_5_NARRATIV,
  CHAPTER_1T_3_6_NARRATIV,
  CHAPTER_1T_3_7_NARRATIV,
  CHAPTER_1T_3_8_NARRATIV,
  // Seksjon 4: Ulikheter
  CHAPTER_1T_4_1_NARRATIV,
  CHAPTER_1T_4_2_NARRATIV,
  CHAPTER_1T_4_3_NARRATIV,
  CHAPTER_1T_4_4_NARRATIV,
  CHAPTER_1T_4_5_NARRATIV,
  // Seksjon 5: Geometri
  CHAPTER_1T_5_1_NARRATIV,
  CHAPTER_1T_5_2_NARRATIV,
  CHAPTER_1T_5_3_NARRATIV,
  CHAPTER_1T_5_4_NARRATIV,
  CHAPTER_1T_5_5_NARRATIV,
  CHAPTER_1T_5_6_NARRATIV,
  CHAPTER_1T_5_7_NARRATIV,
  // Seksjon 6: Eksponentialfunksjoner
  CHAPTER_1T_6_1_NARRATIV,
  CHAPTER_1T_6_2_NARRATIV,
  // Seksjon 7: Derivasjon
  CHAPTER_1T_7_1_NARRATIV,
  CHAPTER_1T_7_2_NARRATIV,
  CHAPTER_1T_7_3_NARRATIV,
  CHAPTER_1T_7_5_NARRATIV,
  CHAPTER_1T_7_6_NARRATIV,
  CHAPTER_1T_7_7_NARRATIV,
  // Seksjon 8: Modellering
  CHAPTER_1T_8_1_NARRATIV,
  CHAPTER_1T_8_2_NARRATIV,
  CHAPTER_1T_8_3_NARRATIV,
  CHAPTER_1T_8_4_NARRATIV,
  CHAPTER_1T_8_5_NARRATIV,
];
