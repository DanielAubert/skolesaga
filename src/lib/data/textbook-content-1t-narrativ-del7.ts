/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T -- NARRATIV VERSJON -- Del 7
 * Kapittel 1.8: Polynomdivisjon - introduksjon
 * Kapittel 1.9: Polynomdivisjon med lineær divisor (Faktorteoremet og restteoremet)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.8 NARRATIV: Polynomdivisjon - introduksjon
// ============================================================================

export const CHAPTER_1T_1_8_NARRATIV: TextbookChapter = {
  id: '1t-1-8-narrativ',
  courseId: '1t',
  chapterNumber: '1.8',
  title: 'Polynomdivisjon - introduksjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan du deler polynomer på hverandre -- fra enkle monomdivisjoner til fullstendig lang divisjon med rest, forklart steg for steg som en naturlig forlengelse av vanlig divisjon med tall.',
  estimatedMinutes: 40,
  competenceGoals: ['forklare polynomdivisjon', 'utføre enkel polynomdivisjon'],
  linkedChapterId: '1t-1-8',
  content: [    {
      id: '1t-1-8-n-intro',
      type: 'text',
      content: `## Divisjon med bokstaver

Tenk tilbake til da du lærte lang divisjon med tall. Du satte opp dividenden, plasserte divisoren til venstre, og jobbet deg gjennom sifferne ett om gangen. Polynomdivisjon er nøyaktig det samme -- bare med algebraiske uttrykk i stedet for tall.

Når vi deler et polynom $P(x)$ på et annet polynom $D(x)$, får vi et resultat som følger en velkjent struktur:

$$P(x) = D(x) \\cdot Q(x) + R(x)$$

Her er $P(x)$ **dividenden** -- det polynomet vi deler. $D(x)$ er **divisoren** -- det vi deler på. $Q(x)$ er **kvotienten** -- svaret vårt. Og $R(x)$ er **resten**, som kan være null dersom divisjonen går opp.

Denne sammenhengen er helt lik den du kjenner fra vanlige tall. Når du deler $17$ på $5$, får du kvotienten $3$ og resten $2$, fordi $17 = 5 \\cdot 3 + 2$. Med polynomer fungerer det på akkurat samme måte -- vi bare bytter ut tallene med uttrykk som inneholder $x$. I dette kapittelet skal vi bygge opp ferdighetene steg for steg, fra de enkleste delingene til full lang divisjon.`,
    },
    {
      id: '1t-1-8-n-section1',
      type: 'text',
      content: `## Divisjon av monomer -- potensreglene i aksjon

La oss begynne med det aller enkleste: å dele ett monom på et annet. Et **monom** er et uttrykk med bare ett ledd, for eksempel $6x^3$ eller $2x$.

Når du skal dele $\\frac{6x^3}{2x}$, gjør du to ting: du deler koeffisientene ($\\frac{6}{2} = 3$) og du bruker potensregelen for divisjon på variabeldelen ($x^{3-1} = x^2$). Resultatet er $3x^2$.

Hvorfor fungerer dette? Fordi $x^3 = x \\cdot x \\cdot x$ og $x = x$. Når du deler, stryker du de felles faktorene: $\\frac{x \\cdot x \\cdot x}{x} = x \\cdot x = x^2$. Potensregelen $\\frac{x^m}{x^n} = x^{m-n}$ er bare en snarvei for denne prosessen.

La oss ta noen flere eksempler. $\\frac{8x^4}{2x} = 4x^3$ -- del koeffisientene ($8/2 = 4$) og trekk fra eksponentene ($4 - 1 = 3$). $\\frac{12x^5}{4x^2} = 3x^3$. $\\frac{15x^3}{5x^3} = 3$ -- når eksponentene er like, forsvinner $x$ helt, og vi sitter igjen med bare et tall. Og $\\frac{-10x^6}{2x^2} = -5x^4$ -- husk at fortegnsreglene gjelder som vanlig.

Det finnes også et spesialtilfelle som er verdt å merke seg: $\\frac{x^n}{x^n} = x^0 = 1$. Enhver størrelse delt på seg selv gir $1$. Denne enkle observasjonen er grunnlaget for alt som følger.`,
    },
    {
      id: '1t-1-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på monomdivisjon og potensregler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-1-8-n-quiz1-q0',
            task: 'Hva blir $\\frac{12x^5}{4x^2}$?',
            options: [
              { id: 'a', text: '$3x^3$', isCorrect: true },
              { id: 'b', text: '$3x^7$', isCorrect: false },
              { id: 'c', text: '$8x^3$', isCorrect: false },
              { id: 'd', text: '$3x^{2{,}5}$', isCorrect: false },
            ],
            solution: 'Vi deler koeffisientene: $12 / 4 = 3$. Deretter trekker vi fra eksponentene: $x^{5-2} = x^3$. Svaret er $3x^3$.',
          },
          {
            id: '1t-1-8-n-quiz1-q1',
            task: 'Hva blir $\\frac{-10x^6}{2x^2}$?',
            options: [
              { id: 'a', text: '$-5x^3$', isCorrect: false },
              { id: 'b', text: '$5x^4$', isCorrect: false },
              { id: 'c', text: '$-5x^4$', isCorrect: true },
              { id: 'd', text: '$-8x^4$', isCorrect: false },
            ],
            solution: 'Koeffisientene: $-10 / 2 = -5$. Eksponentene: $x^{6-2} = x^4$. Husk at minus delt på pluss gir minus. Svaret er $-5x^4$.',
          },
          {
            id: '1t-1-8-n-quiz1-q2',
            task: 'Hva blir $\\frac{15x^3}{5x^3}$?',
            options: [
              { id: 'a', text: '$3x$', isCorrect: false },
              { id: 'b', text: '$10$', isCorrect: false },
              { id: 'c', text: '$0$', isCorrect: false },
              { id: 'd', text: '$3$', isCorrect: true },
            ],
            solution: 'Koeffisientene: $15 / 5 = 3$. Eksponentene: $x^{3-3} = x^0 = 1$. Når eksponentene er like, forsvinner $x$ helt. Svaret er $3 \\cdot 1 = 3$.',
          },
          {
            id: '1t-1-8-n-quiz1-q3',
            task: 'Hvilken potensregel bruker vi når vi deler $x^m$ på $x^n$?',
            options: [
              { id: 'a', text: '$x^m \\cdot x^n = x^{m+n}$', isCorrect: false },
              { id: 'b', text: '$\\frac{x^m}{x^n} = x^{m \\cdot n}$', isCorrect: false },
              { id: 'c', text: '$\\frac{x^m}{x^n} = x^{m-n}$', isCorrect: true },
              { id: 'd', text: '$\\frac{x^m}{x^n} = x^{n-m}$', isCorrect: false },
            ],
            solution: 'Potensregelen for divisjon sier at $\\frac{x^m}{x^n} = x^{m-n}$. Vi trekker eksponenten i nevneren fra eksponenten i telleren. For eksempel: $\\frac{x^5}{x^2} = x^{5-2} = x^3$.',
          },
        ],
      },
    },    {
      id: '1t-1-8-n-section2',
      type: 'text',
      content: `## Dele et polynom på et monom -- ledd for ledd

Nå som vi mestrer monomdivisjon, er neste steg å dele et helt polynom på et enkelt monom. Trikset er overraskende greit: du deler **hvert ledd** i polynomet for seg.

Regelen er:

$$\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$$

Dette er det samme prinsippet som at $\\frac{10 + 5}{5} = \\frac{10}{5} + \\frac{5}{5} = 2 + 1 = 3$.

La oss prøve med $\\frac{6x^3 + 4x^2 - 2x}{2x}$. Vi deler hvert av de tre leddene på $2x$:

$$\\frac{6x^3}{2x} + \\frac{4x^2}{2x} - \\frac{2x}{2x} = 3x^2 + 2x - 1$$

Hvert ledd behandles som en selvstendig monomdivisjon. Første ledd: $6x^3 / 2x = 3x^2$. Andre ledd: $4x^2 / 2x = 2x$. Tredje ledd: $2x / 2x = 1$.

Her er et eksempel til: $\\frac{9x^3 - 6x^2 + 3x}{3x}$. Vi tar ledd for ledd: $\\frac{9x^3}{3x} = 3x^2$, $\\frac{-6x^2}{3x} = -2x$, $\\frac{3x}{3x} = 1$. Svaret er $3x^2 - 2x + 1$.

Og enda ett: $\\frac{x^4 + x^3 + x^2}{x^2}$. Her er $\\frac{x^4}{x^2} = x^2$, $\\frac{x^3}{x^2} = x$, $\\frac{x^2}{x^2} = 1$. Svaret er $x^2 + x + 1$.

Legg merke til at denne metoden alltid fungerer når divisoren er et monom. Men hva gjør vi når også divisoren har flere ledd, som for eksempel $(x + 2)$? Da trenger vi et kraftigere verktøy: **lang divisjon**.`,
    },
    {
      id: '1t-1-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på polynom delt på monom:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-1-8-n-quiz2-q0',
            task: 'Hva blir $\\frac{8x^2 + 4x}{2x}$?',
            options: [
              { id: 'a', text: '$4x^2 + 2$', isCorrect: false },
              { id: 'b', text: '$4x + 2$', isCorrect: true },
              { id: 'c', text: '$6x$', isCorrect: false },
              { id: 'd', text: '$4x + 4$', isCorrect: false },
            ],
            solution: 'Vi deler hvert ledd for seg: $\\frac{8x^2}{2x} = 4x$ og $\\frac{4x}{2x} = 2$. Svaret er $4x + 2$.',
          },
          {
            id: '1t-1-8-n-quiz2-q1',
            task: 'Hvilken regel gjør at vi kan dele hvert ledd i telleren for seg?',
            options: [
              { id: 'a', text: '$\\frac{a \\cdot b}{c} = \\frac{a}{c} \\cdot \\frac{b}{c}$', isCorrect: false },
              { id: 'b', text: '$\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$', isCorrect: true },
              { id: 'c', text: '$\\frac{a}{b + c} = \\frac{a}{b} + \\frac{a}{c}$', isCorrect: false },
              { id: 'd', text: '$\\frac{a + b}{c} = \\frac{a + b}{c}$ (kan ikke forenkles)', isCorrect: false },
            ],
            solution: 'Regelen er $\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$. Vi kan dele hvert ledd i telleren på nevneren separat. Merk at dette IKKE fungerer andre veien -- vi kan ikke splitte nevneren på samme måte.',
          },
          {
            id: '1t-1-8-n-quiz2-q2',
            task: 'Hva blir $\\frac{9x^3 - 6x^2 + 3x}{3x}$?',
            options: [
              { id: 'a', text: '$3x^2 - 2x + 1$', isCorrect: true },
              { id: 'b', text: '$3x^3 - 2x^2 + x$', isCorrect: false },
              { id: 'c', text: '$3x^2 - 6x + 3$', isCorrect: false },
              { id: 'd', text: '$3x^2 - 2x$', isCorrect: false },
            ],
            solution: 'Vi deler ledd for ledd: $\\frac{9x^3}{3x} = 3x^2$, $\\frac{-6x^2}{3x} = -2x$, $\\frac{3x}{3x} = 1$. Svaret er $3x^2 - 2x + 1$.',
          },
          {
            id: '1t-1-8-n-quiz2-q3',
            task: 'Hva blir $\\frac{x^4 + x^3 + x^2}{x^2}$?',
            options: [
              { id: 'a', text: '$x^2 + x$', isCorrect: false },
              { id: 'b', text: '$x^6 + x^5 + x^4$', isCorrect: false },
              { id: 'c', text: '$x^2 + x + 1$', isCorrect: true },
              { id: 'd', text: '$x^2 + x + x^0$', isCorrect: false },
            ],
            solution: 'Ledd for ledd: $\\frac{x^4}{x^2} = x^2$, $\\frac{x^3}{x^2} = x$, $\\frac{x^2}{x^2} = 1$. Svaret er $x^2 + x + 1$. Merk at alternativ d) skriver $x^0$ i stedet for $1$, men $x^0 = 1$ så dette er teknisk sett likt -- dog skriver vi alltid $1$, ikke $x^0$.',
          },
        ],
      },
    },    {
      id: '1t-1-8-n-section3',
      type: 'text',
      content: `## Lang divisjon av polynomer -- steg for steg

Nå er vi klare for hovedteknikken: **polynomdivisjon med lang divisjon**. Metoden ligner på vanlig lang divisjon med tall, og den følger fire steg som gjentas til vi er ferdige.

**Fremgangsmåten:**
1. Del det første leddet i dividenden på det første leddet i divisoren.
2. Gang svaret med hele divisoren.
3. Trekk fra resultatet.
4. Gjenta til graden av resten er lavere enn graden av divisoren.

La oss gå gjennom et konkret eksempel: $(x^2 + 5x + 6) : (x + 2)$.

**Steg 1:** Vi ser på det første leddet i dividenden, $x^2$, og deler det på det første leddet i divisoren, $x$. Vi får $\\frac{x^2}{x} = x$. Dette er det første leddet i kvotienten.

**Steg 2:** Vi ganger $x$ med hele divisoren $(x + 2)$: $x \\cdot (x + 2) = x^2 + 2x$.

**Steg 3:** Vi trekker fra: $(x^2 + 5x + 6) - (x^2 + 2x) = 3x + 6$. Nå jobber vi videre med $3x + 6$.

**Steg 4:** Vi deler $3x$ på $x$: $\\frac{3x}{x} = 3$. Så ganger vi $3$ med $(x + 2)$: $3x + 6$. Vi trekker fra: $(3x + 6) - (3x + 6) = 0$.

Resten er $0$, så divisjonen går opp! Svaret er $(x^2 + 5x + 6) : (x + 2) = x + 3$.

Vi kan sjekke: $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$. Stemmer! Denne kontrollen er et fantastisk verktøy -- du kan alltid sjekke svaret ditt ved å gange kvotienten med divisoren og legge til eventuell rest.`,
    },
    {
      id: '1t-1-8-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på lang divisjon av polynomer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-1-8-n-quiz3-q0',
            task: 'Hva er det første steget når du utfører $(x^2 + 7x + 12) : (x + 3)$?',
            options: [
              { id: 'a', text: 'Gang $x^2$ med $(x + 3)$', isCorrect: false },
              { id: 'b', text: 'Trekk $3$ fra $12$', isCorrect: false },
              { id: 'c', text: 'Del $x^2 + 7x$ på $x + 3$', isCorrect: false },
              { id: 'd', text: 'Del $x^2$ på $x$ og få $x$', isCorrect: true },
            ],
            solution: 'Det første steget i lang divisjon er alltid å dele det første leddet i dividenden ($x^2$) på det første leddet i divisoren ($x$). Det gir $x$, som blir det første leddet i kvotienten.',
          },
          {
            id: '1t-1-8-n-quiz3-q1',
            task: 'Hva er kvotienten når $(x^2 + 5x + 6)$ deles på $(x + 2)$?',
            options: [
              { id: 'a', text: '$x + 2$', isCorrect: false },
              { id: 'b', text: '$x + 3$', isCorrect: true },
              { id: 'c', text: '$x + 6$', isCorrect: false },
              { id: 'd', text: '$x^2 + 3$', isCorrect: false },
            ],
            solution: 'Steg 1: $x^2 / x = x$. Gang: $x(x+2) = x^2 + 2x$. Trekk fra: $(x^2+5x+6)-(x^2+2x) = 3x+6$. Steg 2: $3x / x = 3$. Gang: $3(x+2) = 3x+6$. Trekk fra: $0$. Kvotienten er $x + 3$.',
          },
          {
            id: '1t-1-8-n-quiz3-q2',
            task: 'I lang divisjon av polynomer, når stopper vi prosessen?',
            options: [
              { id: 'a', text: 'Når resten er et positivt tall', isCorrect: false },
              { id: 'b', text: 'Når vi har gjort like mange runder som graden av dividenden', isCorrect: false },
              { id: 'c', text: 'Når graden av resten er lavere enn graden av divisoren', isCorrect: true },
              { id: 'd', text: 'Når resten er $0$', isCorrect: false },
            ],
            solution: 'Vi stopper når graden av resten er lavere enn graden av divisoren. Resten $0$ er et spesialtilfelle av dette (divisjonen går opp), men vi stopper også ved en rest som $2$ eller $3x+1$, så lenge den har lavere grad enn divisoren.',
          },
          {
            id: '1t-1-8-n-quiz3-q3',
            task: 'Hvordan kontrollerer du at svaret på en polynomdivisjon er riktig?',
            options: [
              { id: 'a', text: 'Sett inn $x = 0$ i kvotienten', isCorrect: false },
              { id: 'b', text: 'Gang kvotienten med divisoren og legg til resten -- du skal få dividenden', isCorrect: true },
              { id: 'c', text: 'Divider dividenden på kvotienten -- du skal få divisoren', isCorrect: false },
              { id: 'd', text: 'Sjekk at graden av kvotienten er $1$', isCorrect: false },
            ],
            solution: 'Kontrollen baserer seg på formelen $P(x) = D(x) \\cdot Q(x) + R(x)$. Gang kvotienten med divisoren og legg til resten. Hvis du får tilbake dividenden, er svaret riktig.',
          },
        ],
      },
    },    {
      id: '1t-1-8-n-section4',
      type: 'text',
      content: `## Når divisjonen ikke går opp -- rest

Ikke alle polynomdivisjoner går opp. Akkurat som $17 : 5 = 3$ med rest $2$, kan vi få en rest også med polynomer. Når resten ikke er null, skriver vi svaret på formen:

$$\\frac{P(x)}{D(x)} = Q(x) + \\frac{R(x)}{D(x)}$$

La oss se på $(x^2 + 5x + 8) : (x + 2)$.

Vi starter som for. $\\frac{x^2}{x} = x$. Gang: $x(x + 2) = x^2 + 2x$. Trekk fra: $(x^2 + 5x + 8) - (x^2 + 2x) = 3x + 8$.

Neste runde: $\\frac{3x}{x} = 3$. Gang: $3(x + 2) = 3x + 6$. Trekk fra: $(3x + 8) - (3x + 6) = 2$.

Nå har vi en rest på $2$. Siden graden av resten ($0$, fordi $2$ er en konstant) er lavere enn graden av divisoren ($1$, fordi $x + 2$ er førstegrads), stopper vi her.

Svaret skrives: $(x^2 + 5x + 8) : (x + 2) = x + 3 + \\frac{2}{x + 2}$

La oss sjekke med formelen $P(x) = D(x) \\cdot Q(x) + R(x)$: $(x + 2)(x + 3) + 2 = x^2 + 5x + 6 + 2 = x^2 + 5x + 8$. Stemmer!

Her er et eksempel til: $(2x^2 + 5x + 1) : (x + 2)$. Første runde: $\\frac{2x^2}{x} = 2x$. Gang: $2x(x+2) = 2x^2 + 4x$. Trekk fra: $x + 1$. Andre runde: $\\frac{x}{x} = 1$. Gang: $1 \\cdot (x + 2) = x + 2$. Trekk fra: $(x + 1) - (x + 2) = -1$. Svaret er $2x + 1$ med rest $-1$.`,
    },
    {
      id: '1t-1-8-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på polynomdivisjon med rest:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-1-8-n-quiz4-q0',
            task: 'Hva er resten når $(x^2 + 4x + 5)$ deles på $(x + 1)$?',
            options: [
              { id: 'a', text: '$0$', isCorrect: false },
              { id: 'b', text: '$1$', isCorrect: false },
              { id: 'c', text: '$2$', isCorrect: true },
              { id: 'd', text: '$5$', isCorrect: false },
            ],
            solution: 'Vi utfører lang divisjon. $x^2 / x = x$. Gang: $x(x+1) = x^2 + x$. Trekk fra: $3x + 5$. Neste: $3x / x = 3$. Gang: $3(x+1) = 3x + 3$. Trekk fra: $(3x+5)-(3x+3) = 2$. Resten er $2$.',
          },
          {
            id: '1t-1-8-n-quiz4-q1',
            task: 'Hvordan skrives svaret når $(x^2 + 5x + 8)$ deles på $(x + 2)$ og resten ikke er null?',
            options: [
              { id: 'a', text: '$x + 3$ rest $2$', isCorrect: false },
              { id: 'b', text: '$x + 3 + \\frac{2}{x + 2}$', isCorrect: true },
              { id: 'c', text: '$\\frac{x + 3}{x + 2} + 2$', isCorrect: false },
              { id: 'd', text: '$(x + 3)(x + 2) + 2$', isCorrect: false },
            ],
            solution: 'Når divisjonen ikke går opp, skriver vi svaret som $Q(x) + \\frac{R(x)}{D(x)}$. Her er kvotienten $x + 3$, resten $2$, og divisoren $(x + 2)$, så svaret er $x + 3 + \\frac{2}{x + 2}$.',
          },
          {
            id: '1t-1-8-n-quiz4-q2',
            task: 'Hva er kvotienten og resten når $(2x^2 + 5x + 1)$ deles på $(x + 2)$?',
            options: [
              { id: 'a', text: 'Kvotient $2x + 1$, rest $-1$', isCorrect: true },
              { id: 'b', text: 'Kvotient $2x + 1$, rest $1$', isCorrect: false },
              { id: 'c', text: 'Kvotient $2x + 9$, rest $0$', isCorrect: false },
              { id: 'd', text: 'Kvotient $2x - 1$, rest $3$', isCorrect: false },
            ],
            solution: 'Runde 1: $2x^2 / x = 2x$. Gang: $2x(x+2) = 2x^2 + 4x$. Trekk fra: $(2x^2+5x+1)-(2x^2+4x) = x + 1$. Runde 2: $x / x = 1$. Gang: $1(x+2) = x+2$. Trekk fra: $(x+1)-(x+2) = -1$. Kvotient $2x+1$, rest $-1$.',
          },
          {
            id: '1t-1-8-n-quiz4-q3',
            task: 'Formelen $P(x) = D(x) \\cdot Q(x) + R(x)$ gir oss en kontroll. Hvis $P(x) = x^2 + 5x + 8$, $D(x) = x + 2$, $Q(x) = x + 3$ og $R(x) = 2$, hva bør $(x+2)(x+3) + 2$ bli?',
            options: [
              { id: 'a', text: '$x^2 + 5x + 6$', isCorrect: false },
              { id: 'b', text: '$x^2 + 5x + 8$', isCorrect: true },
              { id: 'c', text: '$x^2 + 5x + 10$', isCorrect: false },
              { id: 'd', text: '$x^2 + 7x + 8$', isCorrect: false },
            ],
            solution: '$(x+2)(x+3) + 2 = x^2 + 3x + 2x + 6 + 2 = x^2 + 5x + 8$. Dette er akkurat dividenden $P(x)$, så svaret stemmer. Kontrollen bekrefter at divisjonen er utført riktig.',
          },
        ],
      },
    },    {
      id: '1t-1-8-n-section5',
      type: 'text',
      content: `## Divisjon med polynomer av høyere grad

Den samme metoden fungerer også når dividenden er et tredjegrads- eller fjerdegradspolynom. Vi får bare flere runder med divisjon, men hvert steg er identisk.

La oss ta $(x^3 - 6x^2 + 11x - 6) : (x - 1)$.

**Runde 1:** $\\frac{x^3}{x} = x^2$. Gang: $x^2(x - 1) = x^3 - x^2$. Trekk fra: $(x^3 - 6x^2 + 11x - 6) - (x^3 - x^2) = -5x^2 + 11x - 6$.

**Runde 2:** $\\frac{-5x^2}{x} = -5x$. Gang: $-5x(x - 1) = -5x^2 + 5x$. Trekk fra: $(-5x^2 + 11x - 6) - (-5x^2 + 5x) = 6x - 6$.

**Runde 3:** $\\frac{6x}{x} = 6$. Gang: $6(x - 1) = 6x - 6$. Trekk fra: $(6x - 6) - (6x - 6) = 0$.

Svaret er $x^2 - 5x + 6$. Vi kan faktorisere dette videre til $(x - 2)(x - 3)$, så hele polynomet kan skrives som $(x - 1)(x - 2)(x - 3)$.

Et viktig tips: når dividenden mangler et ledd, må du **sette inn null-ledd**. For eksempel, hvis du skal dele $x^3 - 8$ på $(x - 2)$, bør du skrive dividenden som $x^3 + 0x^2 + 0x - 8$. Uten disse null-leddene er det lett å miste oversikten.

Her er et annet eksempel med tredjegradspolynom: $(x^3 + 6x^2 + 11x + 6) : (x + 1)$. Runde 1: $x^2$, gang: $x^3 + x^2$, rest: $5x^2 + 11x + 6$. Runde 2: $5x$, gang: $5x^2 + 5x$, rest: $6x + 6$. Runde 3: $6$, gang: $6x + 6$, rest: $0$. Svaret er $x^2 + 5x + 6 = (x + 2)(x + 3)$.`,
    },
    {
      id: '1t-1-8-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på divisjon med polynomer av høyere grad:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-1-8-n-quiz5-q0',
            task: 'Når du skal dele $(x^3 - 8)$ på $(x - 2)$, hvordan bør du skrive dividenden?',
            options: [
              { id: 'a', text: '$x^3 - 8$, akkurat som den er', isCorrect: false },
              { id: 'b', text: '$x^3 + 0x^2 + 0x - 8$', isCorrect: true },
              { id: 'c', text: '$(x - 2)(x^2 + 2x + 4)$', isCorrect: false },
              { id: 'd', text: '$x^3 - 2x^2 - 8$', isCorrect: false },
            ],
            solution: 'Når dividenden mangler ledd (her mangler $x^2$- og $x$-leddene), må du sette inn null-koeffisienter så du beholder oversikten: $x^3 + 0x^2 + 0x - 8$. Da unngår du å miste ledd underveis i lang divisjon.',
          },
          {
            id: '1t-1-8-n-quiz5-q1',
            task: 'Hva er kvotienten når $(x^3 - 6x^2 + 11x - 6)$ deles på $(x - 1)$?',
            options: [
              { id: 'a', text: '$x^2 + 5x + 6$', isCorrect: false },
              { id: 'b', text: '$x^2 - 5x + 6$', isCorrect: true },
              { id: 'c', text: '$x^2 - 6x + 11$', isCorrect: false },
              { id: 'd', text: '$x^2 - 7x + 6$', isCorrect: false },
            ],
            solution: 'Runde 1: $x^3 / x = x^2$. Gang: $x^2(x-1) = x^3 - x^2$. Rest: $-5x^2 + 11x - 6$. Runde 2: $-5x^2 / x = -5x$. Gang: $-5x(x-1) = -5x^2 + 5x$. Rest: $6x - 6$. Runde 3: $6x / x = 6$. Gang: $6(x-1) = 6x - 6$. Rest: $0$. Kvotienten er $x^2 - 5x + 6$.',
          },
          {
            id: '1t-1-8-n-quiz5-q2',
            task: 'Kvotienten $x^2 - 5x + 6$ kan faktoriseres videre. Hva blir resultatet?',
            options: [
              { id: 'a', text: '$(x - 1)(x - 6)$', isCorrect: false },
              { id: 'b', text: '$(x + 2)(x + 3)$', isCorrect: false },
              { id: 'c', text: '$(x - 2)(x - 3)$', isCorrect: true },
              { id: 'd', text: '$(x - 5)(x - 1)$', isCorrect: false },
            ],
            solution: 'Vi leter etter to tall som ganger til $6$ og summerer til $-5$. Det er $-2$ og $-3$: $(-2) \\cdot (-3) = 6$ og $(-2) + (-3) = -5$. Altså: $x^2 - 5x + 6 = (x - 2)(x - 3)$.',
          },
          {
            id: '1t-1-8-n-quiz5-q3',
            task: 'Hvor mange runder med divisjon trenger du når du deler et tredjegradspolynom på et førstegradspolynom (og divisjonen går opp)?',
            options: [
              { id: 'a', text: '$1$ runde', isCorrect: false },
              { id: 'b', text: '$2$ runder', isCorrect: false },
              { id: 'c', text: '$3$ runder', isCorrect: true },
              { id: 'd', text: '$4$ runder', isCorrect: false },
            ],
            solution: 'Et tredjegradspolynom delt på et førstegradspolynom gir en andregradskotient. I første runde finner vi $x^2$-leddet, i andre runde $x$-leddet, og i tredje runde konstantleddet. Det er $3$ runder -- generelt like mange runder som graden av kvotienten pluss $1$.',
          },
        ],
      },
    },    {
      id: '1t-1-8-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært å dele polynomer på hverandre, fra de enkleste tilfellene til full lang divisjon.

**Monomdivisjon** er grunnsteinen. Du deler koeffisientene og trekker fra eksponentene: $\\frac{6x^3}{2x} = 3x^2$. Potensregelen $\\frac{x^m}{x^n} = x^{m-n}$ er nøkkelen.

**Polynom delt på monom** gjøres ledd for ledd. Hvert ledd i telleren deles separat på nevneren: $\\frac{6x^3 + 4x^2 - 2x}{2x} = 3x^2 + 2x - 1$.

**Lang divisjon** brukes når divisoren har flere ledd. Metoden følger fire steg som gjentas: del førsteleddet, gang med hele divisoren, trekk fra, og gjenta. Resultatet består av en kvotient og eventuelt en rest.

**Resten** kan være null (divisjonen går opp) eller et polynom av lavere grad enn divisoren. Svaret skrives da som $Q(x) + \\frac{R(x)}{D(x)}$.

**Kontrollformelen** $P(x) = D(x) \\cdot Q(x) + R(x)$ lar deg alltid sjekke svaret ditt. Gang kvotienten med divisoren og legg til resten -- du skal få tilbake dividenden. Husk også å sette inn null-ledd når dividenden mangler potenser av $x$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.9 NARRATIV: Polynomdivisjon med lineær divisor
// ============================================================================

export const CHAPTER_1T_1_9_NARRATIV: TextbookChapter = {
  id: '1t-1-9-narrativ',
  courseId: '1t',
  chapterNumber: '1.9',
  title: 'Polynomdivisjon med lineær divisor',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om den magiske sammenhengen mellom nullpunkter og faktorer -- hvordan faktorteoremet og restteoremet lar deg knekke polynomer i små biter og forstå strukturen deres fullt ut.',
  estimatedMinutes: 40,
  competenceGoals: ['bruke polynomdivisjon til å omskrive algebraiske uttrykk', 'bruke faktorteoremet'],
  linkedChapterId: '1t-1-9',
  content: [    {
      id: '1t-1-9-n-intro',
      type: 'text',
      content: `## Nullpunkter og faktorer -- en dyp sammenheng

I forrige kapittel lærte du å utføre polynomdivisjon steg for steg. Nå skal vi oppdage noe fascinerende: det finnes en direkte kobling mellom **nullpunktene** til et polynom og **faktorene** det kan deles opp i.

Tenk deg at du har polynomet $P(x) = x^2 - 5x + 6$. Hvis du setter inn $x = 2$, får du $P(2) = 4 - 10 + 6 = 0$. Tallet $2$ er altså et **nullpunkt** -- en $x$-verdi som gjør polynomet lik null. Og det viser seg at når $2$ er et nullpunkt, så er $(x - 2)$ en **faktor** i polynomet. Faktisk er $x^2 - 5x + 6 = (x - 2)(x - 3)$.

Denne sammenhengen er ikke tilfeldig. Den er en grunnleggende egenskap ved polynomer, og den gir oss to kraftige verktøy: **faktorteoremet** og **restteoremet**. Sammen lar de oss bryte ned polynomer til sine minste bestanddeler og avgjøre om en divisjon går opp -- uten å faktisk utføre hele divisjonen. I dette kapittelet skal vi utforske begge tesetene, lære å finne nullpunkter systematisk, og mestre kunsten å faktorisere polynomer fullstendig.`,
    },
    {
      id: '1t-1-9-n-section1',
      type: 'text',
      content: `## Faktorteoremet -- fra nullpunkt til faktor

**Faktorteoremet** sier: Hvis $P(a) = 0$, så er $(x - a)$ en faktor i $P(x)$.

Med andre ord: når tallet $a$ er et nullpunkt for polynomet, går $(x - a)$ opp i $P(x)$ uten rest. La oss se hvorfor dette gir mening.

Husk fra forrige kapittel at enhver polynomdivisjon kan skrives på formen $P(x) = D(x) \\cdot Q(x) + R(x)$. Når vi deler på en lineær divisor $(x - a)$, blir resten alltid en konstant (et tall uten $x$). Hvis den resten er $0$, betyr det at $P(x) = (x - a) \\cdot Q(x)$ -- og da er $(x - a)$ en faktor.

La oss teste dette med $P(x) = x^3 - 6x^2 + 11x - 6$. Vi prøver $x = 2$:

$P(2) = 2^3 - 6 \\cdot 2^2 + 11 \\cdot 2 - 6 = 8 - 24 + 22 - 6 = 0$

Siden $P(2) = 0$, garanterer faktorteoremet at $(x - 2)$ er en faktor. Vi kan bekrefte dette med lang divisjon: $(x^3 - 6x^2 + 11x - 6) : (x - 2) = x^2 - 4x + 3$. Og $x^2 - 4x + 3 = (x - 1)(x - 3)$.

La oss også sjekke et negativt eksempel. Er $(x + 1)$ en faktor i $x^2 + 2x + 3$? Husk at $(x + 1) = (x - (-1))$, så vi setter inn $x = -1$: $P(-1) = 1 - 2 + 3 = 2 \\neq 0$. Siden $P(-1)$ ikke er null, er $(x + 1)$ *ikke* en faktor. Faktorteoremet fungerer begge veier: $P(a) = 0$ betyr at $(x - a)$ er en faktor, og $P(a) \\neq 0$ betyr at $(x - a)$ ikke er en faktor.`,
    },
    {
      id: '1t-1-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorteoremet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-1-9-n-quiz1-q0',
            task: 'Polynomet $P(x) = x^2 - 3x + 2$ har $P(1) = 0$. Hva kan vi konkludere?',
            options: [
              { id: 'a', text: '$(x + 1)$ er en faktor i $P(x)$', isCorrect: false },
              { id: 'b', text: '$(x - 1)$ er en faktor i $P(x)$', isCorrect: true },
              { id: 'c', text: 'Resten ved divisjon med $(x - 1)$ er $1$', isCorrect: false },
              { id: 'd', text: '$P(x)$ kan ikke faktoriseres', isCorrect: false },
            ],
            solution: 'Faktorteoremet sier at når $P(a) = 0$, er $(x - a)$ en faktor. Siden $P(1) = 0$, er $(x - 1)$ en faktor i $P(x)$. Vi kan bekrefte: $x^2 - 3x + 2 = (x-1)(x-2)$.',
          },
          {
            id: '1t-1-9-n-quiz1-q1',
            task: 'Hva sier faktorteoremet?',
            options: [
              { id: 'a', text: 'Hvis $P(a) = 0$, så er $(x + a)$ en faktor i $P(x)$', isCorrect: false },
              { id: 'b', text: 'Hvis $P(a) = 0$, så er $a$ en faktor i $P(x)$', isCorrect: false },
              { id: 'c', text: 'Hvis $P(a) = 0$, så er $(x - a)$ en faktor i $P(x)$', isCorrect: true },
              { id: 'd', text: 'Hvis $(x - a)$ er en faktor, så er $P(a) = a$', isCorrect: false },
            ],
            solution: 'Faktorteoremet sier: Hvis $P(a) = 0$, så er $(x - a)$ en faktor i $P(x)$. Merk at det er $(x - a)$, ikke $(x + a)$. For eksempel gir nullpunktet $a = 3$ faktoren $(x - 3)$.',
          },
          {
            id: '1t-1-9-n-quiz1-q2',
            task: 'Er $(x + 1)$ en faktor i $P(x) = x^2 + 2x + 3$?',
            options: [
              { id: 'a', text: 'Ja, fordi $P(1) = 6$', isCorrect: false },
              { id: 'b', text: 'Ja, fordi koeffisienten foran $x$ er $2$', isCorrect: false },
              { id: 'c', text: 'Nei, fordi $P(-1) = 2 \\neq 0$', isCorrect: true },
              { id: 'd', text: 'Nei, fordi polynomet har odde koeffisienter', isCorrect: false },
            ],
            solution: '$(x + 1) = (x - (-1))$, så vi må sjekke $P(-1)$. $P(-1) = (-1)^2 + 2(-1) + 3 = 1 - 2 + 3 = 2 \\neq 0$. Siden $P(-1) \\neq 0$, er $(x + 1)$ IKKE en faktor.',
          },
          {
            id: '1t-1-9-n-quiz1-q3',
            task: 'Du har $P(x) = x^3 - 6x^2 + 11x - 6$ og finner at $P(2) = 0$. Hva gir polynomdivisjonen $(x^3 - 6x^2 + 11x - 6) : (x - 2)$?',
            options: [
              { id: 'a', text: '$x^2 - 4x + 3$', isCorrect: true },
              { id: 'b', text: '$x^2 - 8x + 3$', isCorrect: false },
              { id: 'c', text: '$x^2 + 4x - 3$', isCorrect: false },
              { id: 'd', text: '$x^2 - 4x + 6$', isCorrect: false },
            ],
            solution: 'Runde 1: $x^3/x = x^2$. Gang: $x^2(x-2) = x^3 - 2x^2$. Rest: $-4x^2 + 11x - 6$. Runde 2: $-4x^2/x = -4x$. Gang: $-4x(x-2) = -4x^2 + 8x$. Rest: $3x - 6$. Runde 3: $3x/x = 3$. Gang: $3(x-2) = 3x - 6$. Rest: $0$. Kvotienten er $x^2 - 4x + 3 = (x-1)(x-3)$.',
          },
        ],
      },
    },    {
      id: '1t-1-9-n-section2',
      type: 'text',
      content: `## Å finne nullpunkter -- divisorer av konstantleddet

Faktorteoremet er fantastisk, men det krever at vi allerede *kjenner* et nullpunkt. Hvordan finner vi det? For polynomer med heltallskoeffisienter finnes det en smart strategi: **prøv divisorene av konstantleddet**.

Ideen er denne: hvis polynomet $P(x) = x^n + ... + c$ har heltallskoeffisienter og ledende koeffisient $1$, må eventuelle heltallsnullpunkter være blant divisorene av konstantleddet $c$. Det betyr at vi kan prøve $\\pm 1, \\pm 2, \\pm 3, ...$ opp til $\\pm |c|$.

La oss ta et eksempel: $P(x) = x^3 - 2x^2 - 5x + 6$. Konstantleddet er $6$, så vi prøver divisorene: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.

Vi starter med de enkleste: $P(1) = 1 - 2 - 5 + 6 = 0$. Bingo! $x = 1$ er et nullpunkt.

Nå vet vi at $(x - 1)$ er en faktor. Vi utfører polynomdivisjon: $(x^3 - 2x^2 - 5x + 6) : (x - 1) = x^2 - x - 6$. Kvotienten $x^2 - x - 6$ er et andregradspolynom, som vi kan faktorisere med kjente metoder: $x^2 - x - 6 = (x - 3)(x + 2)$.

Dermed er $P(x) = (x - 1)(x - 3)(x + 2)$. Vi har faktorisert tredjegradspolynomet fullstendig!

Et annet eksempel: $P(x) = x^3 + 6x^2 + 11x + 6$. Konstantleddet er $6$. Vi prøver $P(-1) = -1 + 6 - 11 + 6 = 0$. Så $(x + 1)$ er en faktor. Divisjon gir $x^2 + 5x + 6 = (x + 2)(x + 3)$. Altså: $P(x) = (x + 1)(x + 2)(x + 3)$. Legg merke til at alle nullpunktene ($-1, -2, -3$) er divisorer av konstantleddet $6$.`,
    },
    {
      id: '1t-1-9-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på å finne nullpunkter med divisorer av konstantleddet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-1-9-n-quiz2-q0',
            task: 'Du skal finne nullpunkter for $P(x) = x^3 - 4x^2 + x + 6$. Hvilke verdier bør du prøve først?',
            options: [
              { id: 'a', text: 'Alle desimaltall mellom $-10$ og $10$', isCorrect: false },
              { id: 'b', text: '$x = 0, 1, 2, 3, 4, 5, 6$', isCorrect: false },
              { id: 'c', text: '$x = \\pm 1, \\pm 2, \\pm 3, \\pm 6$', isCorrect: true },
              { id: 'd', text: 'Bare positive tall', isCorrect: false },
            ],
            solution: 'Vi prøver divisorene av konstantleddet. Konstantleddet er $6$, og divisorene er $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Vi må prøve både positive og negative verdier, fordi nullpunkter kan være negative.',
          },
          {
            id: '1t-1-9-n-quiz2-q1',
            task: 'For $P(x) = x^3 - 2x^2 - 5x + 6$, er $P(1) = 1 - 2 - 5 + 6 = 0$. Hva gjør vi nå?',
            options: [
              { id: 'a', text: 'Vi er ferdige -- svaret er $x = 1$', isCorrect: false },
              { id: 'b', text: 'Vi deler $P(x)$ på $(x - 1)$ for å få en andregradskvotient vi kan faktorisere videre', isCorrect: true },
              { id: 'c', text: 'Vi prøver $x = 2$ som neste nullpunkt uten å dele først', isCorrect: false },
              { id: 'd', text: 'Vi bruker abc-formelen direkte på tredjegradspolynomet', isCorrect: false },
            ],
            solution: 'Når vi har funnet et nullpunkt i et tredjegradspolynom, deler vi på den tilhørende faktoren. $(x^3 - 2x^2 - 5x + 6) : (x - 1) = x^2 - x - 6$. Denne andregradskvotienten kan vi faktorisere med kjente metoder: $(x - 3)(x + 2)$.',
          },
          {
            id: '1t-1-9-n-quiz2-q2',
            task: 'Hva er den fullstendige faktoriseringen av $P(x) = x^3 + 6x^2 + 11x + 6$ når du vet at $P(-1) = 0$?',
            options: [
              { id: 'a', text: '$(x + 1)(x + 2)(x + 3)$', isCorrect: true },
              { id: 'b', text: '$(x - 1)(x + 2)(x + 3)$', isCorrect: false },
              { id: 'c', text: '$(x + 1)(x + 6)(x + 1)$', isCorrect: false },
              { id: 'd', text: '$(x + 1)(x^2 + 6)$', isCorrect: false },
            ],
            solution: 'Siden $P(-1) = 0$, er $(x + 1)$ en faktor. Divisjon gir $(x^3 + 6x^2 + 11x + 6) : (x + 1) = x^2 + 5x + 6$. Vi faktoriserer kvotienten: to tall som ganger til $6$ og summerer til $5$ er $2$ og $3$. Altså: $x^2 + 5x + 6 = (x+2)(x+3)$. Komplett: $(x+1)(x+2)(x+3)$.',
          },
          {
            id: '1t-1-9-n-quiz2-q3',
            task: 'Konstantleddet i $P(x) = x^3 + 3x^2 - 4x - 12$ er $-12$. Hvilken av følgende er IKKE en divisor av $-12$ som vi bør prøve?',
            options: [
              { id: 'a', text: '$x = 5$', isCorrect: true },
              { id: 'b', text: '$x = -2$', isCorrect: false },
              { id: 'c', text: '$x = 4$', isCorrect: false },
              { id: 'd', text: '$x = -6$', isCorrect: false },
            ],
            solution: 'Divisorene av $-12$ er $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12$. Tallet $5$ er ikke en divisor av $12$ ($12 / 5 = 2{,}4$), så $x = 5$ trenger vi ikke prøve. De andre ($-2$, $4$, $-6$) er alle divisorer av $12$.',
          },
        ],
      },
    },    {
      id: '1t-1-9-n-section3',
      type: 'text',
      content: `## Restteoremet -- resten uten divisjon

Faktorteoremet handler om tilfellet der resten er null. Men hva når resten *ikke* er null? Her kommer **restteoremet** inn:

**Når polynomet $P(x)$ deles på $(x - a)$, er resten lik $P(a)$.**

Matematisk: $P(x) = (x - a) \\cdot Q(x) + P(a)$

Dette er et utrolig nyttig verktøy. I stedet for å utføre hele lang divisjonen for å finne resten, kan du bare **sette inn $a$ i polynomet**. Resten får du på sekunder!

La oss se på et eksempel. Hva er resten når $P(x) = x^3 + 2x^2 - x + 3$ deles på $(x - 2)$?

Ifølge restteoremet er resten $P(2) = 2^3 + 2 \\cdot 2^2 - 2 + 3 = 8 + 8 - 2 + 3 = 17$.

Vi kunne ha utført lang divisjon og fått nøyaktig samme svar, men restteoremet sparte oss for hele prosessen.

Et annet eksempel: Finn resten når $(x^2 + 3x + 5)$ deles på $(x - 1)$. Resten er $P(1) = 1 + 3 + 5 = 9$.

Og et til: Finn resten når $(x^3 - 2x + 1)$ deles på $(x + 1)$. Husk at $(x + 1) = (x - (-1))$, så $a = -1$. Resten er $P(-1) = (-1)^3 - 2(-1) + 1 = -1 + 2 + 1 = 2$.

Legg merke til hvordan faktorteoremet egentlig er et spesialtilfelle av restteoremet: når resten $P(a) = 0$, går divisjonen opp, og $(x - a)$ er en faktor. De to teoremene henger altså tett sammen.`,
    },
    {
      id: '1t-1-9-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på restteoremet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-1-9-n-quiz3-q0',
            task: 'Hva er resten når $P(x) = 2x^3 - 5x + 3$ deles på $(x + 2)$?',
            options: [
              { id: 'a', text: '$17$', isCorrect: false },
              { id: 'b', text: '$-3$', isCorrect: true },
              { id: 'c', text: '$3$', isCorrect: false },
              { id: 'd', text: '$-13$', isCorrect: false },
            ],
            solution: 'Vi bruker restteoremet. Divisoren er $(x + 2) = (x - (-2))$, så $a = -2$. Resten er $P(-2) = 2(-2)^3 - 5(-2) + 3 = 2 \\cdot (-8) + 10 + 3 = -16 + 10 + 3 = -3$.',
          },
          {
            id: '1t-1-9-n-quiz3-q1',
            task: 'Hva sier restteoremet?',
            options: [
              { id: 'a', text: 'Resten når $P(x)$ deles på $(x - a)$ er lik $P(0)$', isCorrect: false },
              { id: 'b', text: 'Resten når $P(x)$ deles på $(x - a)$ er lik $P(a)$', isCorrect: true },
              { id: 'c', text: 'Resten når $P(x)$ deles på $(x - a)$ er lik $P(-a)$', isCorrect: false },
              { id: 'd', text: 'Resten når $P(x)$ deles på $(x - a)$ er lik $a$', isCorrect: false },
            ],
            solution: 'Restteoremet sier at når $P(x)$ deles på $(x - a)$, er resten lik $P(a)$. Vi trenger altså bare å sette inn $a$ i polynomet for å finne resten -- uten å utføre hele lang divisjonen.',
          },
          {
            id: '1t-1-9-n-quiz3-q2',
            task: 'Hva er resten når $P(x) = x^2 + 3x + 5$ deles på $(x - 1)$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$7$', isCorrect: false },
              { id: 'c', text: '$9$', isCorrect: true },
              { id: 'd', text: '$1$', isCorrect: false },
            ],
            solution: 'Restteoremet gir resten som $P(1) = 1^2 + 3 \\cdot 1 + 5 = 1 + 3 + 5 = 9$.',
          },
          {
            id: '1t-1-9-n-quiz3-q3',
            task: 'Hva er resten når $(x^3 - 2x + 1)$ deles på $(x + 1)$?',
            options: [
              { id: 'a', text: '$2$', isCorrect: true },
              { id: 'b', text: '$-2$', isCorrect: false },
              { id: 'c', text: '$0$', isCorrect: false },
              { id: 'd', text: '$4$', isCorrect: false },
            ],
            solution: '$(x + 1) = (x - (-1))$, så $a = -1$. Resten er $P(-1) = (-1)^3 - 2(-1) + 1 = -1 + 2 + 1 = 2$. Husk at $(x + 1)$ betyr at vi setter inn $-1$, ikke $1$.',
          },
          {
            id: '1t-1-9-n-quiz3-q4',
            task: 'Hvordan henger faktorteoremet sammen med restteoremet?',
            options: [
              { id: 'a', text: 'De er helt uavhengige teoremer', isCorrect: false },
              { id: 'b', text: 'Restteoremet er et spesialtilfelle av faktorteoremet', isCorrect: false },
              { id: 'c', text: 'Faktorteoremet er spesialtilfellet av restteoremet der resten $P(a) = 0$', isCorrect: true },
              { id: 'd', text: 'Faktorteoremet gjelder bare for andregradspolynomer', isCorrect: false },
            ],
            solution: 'Faktorteoremet er et spesialtilfelle av restteoremet. Restteoremet sier at resten er $P(a)$. Når $P(a) = 0$ (resten er null), går divisjonen opp, og $(x - a)$ er en faktor. Det er nettopp det faktorteoremet sier.',
          },
        ],
      },
    },    {
      id: '1t-1-9-n-section4',
      type: 'text',
      content: `## Fullstendig faktorisering -- strategi

Nå har vi alle verktøyene vi trenger for å faktorisere polynomer fullstendig. Her er strategien, steg for steg:

**1.** Finn ett nullpunkt $a$ ved å prøve divisorer av konstantleddet.
**2.** Divider polynomet på $(x - a)$ med lang divisjon.
**3.** Faktoriser kvotienten videre (om mulig).
**4.** Gjenta til du ikke kan faktorisere mer.

La oss ta $P(x) = x^3 - 7x + 6$. Konstantleddet er $6$, så vi prøver: $P(1) = 1 - 7 + 6 = 0$. Flott, $x = 1$ er et nullpunkt.

Vi deler: $(x^3 - 7x + 6) : (x - 1)$. Husk å skrive dividenden som $x^3 + 0x^2 - 7x + 6$ for å inkludere null-leddet. Divisjonen gir $x^2 + x - 6$.

Nå faktoriserer vi $x^2 + x - 6$. Vi leter etter to tall som ganger til $-6$ og summerer til $1$. Det er $3$ og $-2$: $x^2 + x - 6 = (x + 3)(x - 2)$.

Endelig svar: $P(x) = (x - 1)(x + 3)(x - 2)$.

La oss ta et vanskeligere eksempel: $P(x) = x^3 + 2x^2 - x - 2$. Prøv $P(1) = 1 + 2 - 1 - 2 = 0$. $(x - 1)$ er en faktor. Divisjon gir $x^2 + 3x + 2 = (x + 1)(x + 2)$. Altså: $P(x) = (x - 1)(x + 1)(x + 2)$.

Noen ganger finner du nullpunktet på andre forsøk. For $P(x) = x^3 - 4x^2 + x + 6$ gir $P(1) = -2 \\neq 0$, men $P(-1) = -1 - 4 - 1 + 6 = 0$. Så $(x + 1)$ er en faktor. Divisjon gir $x^2 - 5x + 6 = (x - 2)(x - 3)$. Altså: $P(x) = (x + 1)(x - 2)(x - 3)$.`,
    },
    {
      id: '1t-1-9-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på fullstendig faktorisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-1-9-n-quiz4-q0',
            task: '$P(x) = x^3 - 6x^2 + 11x - 6$. Du finner at $P(1) = 0$. Hva er neste steg?',
            options: [
              { id: 'a', text: 'Faktoriser direkte til $(x-1)(x-2)(x-3)$ uten videre regning', isCorrect: false },
              { id: 'b', text: 'Prøv å finne flere nullpunkter ved å sette inn $x = 2, 3, ...$', isCorrect: false },
              { id: 'c', text: 'Del $P(x)$ på $(x - 1)$ og faktoriser kvotienten', isCorrect: true },
              { id: 'd', text: 'Bruk restteoremet til å finne resten', isCorrect: false },
            ],
            solution: 'Når du har funnet et nullpunkt, er neste steg å utføre polynomdivisjon med den tilhørende faktoren. Del $P(x)$ på $(x - 1)$ for å få en andregradskvotient, og faktoriser den videre.',
          },
          {
            id: '1t-1-9-n-quiz4-q1',
            task: 'Hva er riktig strategi for å faktorisere et tredjegradspolynom fullstendig?',
            options: [
              { id: 'a', text: 'Bruk abc-formelen direkte på tredjegradspolynomet', isCorrect: false },
              { id: 'b', text: 'Finn ett nullpunkt, divider for å få andregradspolynom, faktoriser det', isCorrect: true },
              { id: 'c', text: 'Prøv å gjette alle tre faktorene på en gang', isCorrect: false },
              { id: 'd', text: 'Trekk ut største felles faktor -- det holder alltid', isCorrect: false },
            ],
            solution: 'Strategien er: (1) Finn ett nullpunkt $a$ ved å prøve divisorer av konstantleddet. (2) Divider på $(x - a)$ for å få et andregradspolynom. (3) Faktoriser andregradspolynomet med kjente metoder (inspeksjon eller abc-formelen).',
          },
          {
            id: '1t-1-9-n-quiz4-q2',
            task: 'Faktoriser $P(x) = x^3 - 7x + 6$ fullstendig. (Hint: $P(1) = 0$.)',
            options: [
              { id: 'a', text: '$(x - 1)(x - 2)(x + 3)$', isCorrect: false },
              { id: 'b', text: '$(x - 1)(x + 2)(x - 3)$', isCorrect: false },
              { id: 'c', text: '$(x - 1)(x - 3)(x + 2)$', isCorrect: false },
              { id: 'd', text: '$(x - 1)(x + 3)(x - 2)$', isCorrect: true },
            ],
            solution: 'Siden $P(1) = 0$, deler vi: $(x^3 + 0x^2 - 7x + 6) : (x - 1) = x^2 + x - 6$. Vi faktoriserer: to tall som ganger til $-6$ og summerer til $1$ er $3$ og $-2$. Altså $x^2 + x - 6 = (x + 3)(x - 2)$. Komplett: $(x-1)(x+3)(x-2)$.',
          },
          {
            id: '1t-1-9-n-quiz4-q3',
            task: 'For $P(x) = x^3 - 4x^2 + x + 6$ gir $P(1) = 4 \\neq 0$. Hva gjør du?',
            options: [
              { id: 'a', text: 'Gir opp -- polynomet kan ikke faktoriseres', isCorrect: false },
              { id: 'b', text: 'Prøver $P(-1)$, deretter $P(2)$, $P(-2)$, osv.', isCorrect: true },
              { id: 'c', text: 'Bruker lang divisjon med $(x - 1)$ uansett', isCorrect: false },
              { id: 'd', text: 'Endrer konstantleddet til $4$', isCorrect: false },
            ],
            solution: 'Når første forsøk ikke gir null, prøver vi neste divisor. $P(-1) = -1 - 4 - 1 + 6 = 0$. Bingo! $(x + 1)$ er en faktor. Divisjon gir $x^2 - 5x + 6 = (x-2)(x-3)$. Fullstendig: $(x+1)(x-2)(x-3)$.',
          },
        ],
      },
    },    {
      id: '1t-1-9-n-section5',
      type: 'text',
      content: `## Spesialtilfeller -- kuber og fjerdepotenser

Nå skal vi se på noen spesialtilfeller som dukker opp overraskende ofte, særlig når polynomer inneholder **perfekte potenser**.

La oss starte med $x^3 - 8$. Konstantleddet er $-8$. Vi prøver $P(2) = 8 - 8 = 0$. Så $(x - 2)$ er en faktor. Husk å sette inn null-ledd: $(x^3 + 0x^2 + 0x - 8) : (x - 2)$. Divisjonen gir $x^2 + 2x + 4$. Altså: $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$.

Det vi nettopp har sett er et eksempel på **tredjegrads konjugatsetning**: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$. Her er $a = x$ og $b = 2$.

Tilsvarende: $x^3 + 27 = x^3 + 3^3$. Vi prøver $P(-3) = -27 + 27 = 0$, så $(x + 3)$ er en faktor. Divisjon gir $x^2 - 3x + 9$. Her ser vi den andre formen: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.

Hva med fjerdepotenser? Ta $P(x) = x^4 - 5x^2 + 4$. Konstantleddet er $4$. Vi prøver $P(1) = 1 - 5 + 4 = 0$. $(x-1)$ er en faktor. Divisjon gir $x^3 + x^2 - 4x - 4$. Vi prøver $P(-1)$ på kvotienten: $-1 + 1 + 4 - 4 = 0$. $(x+1)$ er en faktor. Ny divisjon gir $x^2 - 4 = (x-2)(x+2)$.

Komplett faktorisering: $x^4 - 5x^2 + 4 = (x-1)(x+1)(x-2)(x+2)$.

Et annet fjerdegradseksempel: $(x^4 - 16) : (x - 2)$. Prøv $P(2) = 16 - 16 = 0$. Divisjon gir $x^3 + 2x^2 + 4x + 8$. Denne kan faktoriseres videre: $P(-2) = -8 + 8 - 8 + 8 = 0$, så $(x+2)$ er en faktor. Divisjon gir $x^2 + 4$, som ikke har reelle nullpunkter. Altså: $x^4 - 16 = (x-2)(x+2)(x^2 + 4)$.

Og helt til slutt: $(x^4 - 1) : (x - 1) = x^3 + x^2 + x + 1$. Denne kvotienten kan faktoriseres videre: $x^3 + x^2 + x + 1 = (x + 1)(x^2 + 1)$. Så $x^4 - 1 = (x-1)(x+1)(x^2+1)$.`,
    },
    {
      id: '1t-1-9-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på spesialtilfeller med kuber og fjerdepotenser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-1-9-n-quiz5-q0',
            task: 'Hva er den fullstendige faktoriseringen av $x^4 - 10x^2 + 9$?',
            options: [
              { id: 'a', text: '$(x - 1)(x + 1)(x^2 - 9)$', isCorrect: false },
              { id: 'b', text: '$(x^2 - 1)(x^2 - 9)$', isCorrect: false },
              { id: 'c', text: '$(x - 1)(x + 1)(x - 3)(x + 3)$', isCorrect: true },
              { id: 'd', text: '$(x - 3)^2(x + 1)^2$', isCorrect: false },
            ],
            solution: 'Start med $P(1) = 1 - 10 + 9 = 0$, så $(x-1)$ er en faktor. Divisjon gir $x^3 + x^2 - 9x - 9$. Prøv $P(-1) = -1 + 1 + 9 - 9 = 0$, så $(x+1)$ er en faktor. Ny divisjon gir $x^2 - 9 = (x-3)(x+3)$. Fullstendig: $(x-1)(x+1)(x-3)(x+3)$.',
          },
          {
            id: '1t-1-9-n-quiz5-q1',
            task: 'Hva er faktoriseringen av $x^3 - 8$?',
            options: [
              { id: 'a', text: '$(x - 2)(x^2 - 2x + 4)$', isCorrect: false },
              { id: 'b', text: '$(x - 2)(x^2 + 2x + 4)$', isCorrect: true },
              { id: 'c', text: '$(x - 2)(x^2 + 4)$', isCorrect: false },
              { id: 'd', text: '$(x - 2)^3$', isCorrect: false },
            ],
            solution: '$x^3 - 8 = x^3 - 2^3$. Vi bruker formelen $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ med $a = x$ og $b = 2$: $(x - 2)(x^2 + 2x + 4)$. Merk pluss-tegnene i andregradsuttrykket -- det er lett å forveksle med $(a-b)^2$-formelen.',
          },
          {
            id: '1t-1-9-n-quiz5-q2',
            task: 'Hva er faktoriseringen av $x^3 + 27$?',
            options: [
              { id: 'a', text: '$(x + 3)(x^2 + 3x + 9)$', isCorrect: false },
              { id: 'b', text: '$(x + 3)(x^2 + 9)$', isCorrect: false },
              { id: 'c', text: '$(x + 3)(x^2 - 3x + 9)$', isCorrect: true },
              { id: 'd', text: '$(x + 3)^3$', isCorrect: false },
            ],
            solution: '$x^3 + 27 = x^3 + 3^3$. Formelen $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ gir $(x + 3)(x^2 - 3x + 9)$. Merk at fortegnene i andregradsuttrykket er motsatt av tilfellet $a^3 - b^3$: her er det minus foran $ab$-leddet.',
          },
          {
            id: '1t-1-9-n-quiz5-q3',
            task: 'Hva er faktoriseringen av $x^4 - 16$?',
            options: [
              { id: 'a', text: '$(x - 2)(x + 2)(x - 2)(x + 2)$', isCorrect: false },
              { id: 'b', text: '$(x^2 - 4)(x^2 + 4)$', isCorrect: false },
              { id: 'c', text: '$(x - 2)(x + 2)(x^2 + 4)$', isCorrect: true },
              { id: 'd', text: '$(x - 4)(x + 4)$', isCorrect: false },
            ],
            solution: 'Vi kan starte med $P(2) = 16 - 16 = 0$, så $(x - 2)$ er en faktor. Divisjon gir $x^3 + 2x^2 + 4x + 8$. Prøv $P(-2) = -8 + 8 - 8 + 8 = 0$, så $(x + 2)$ er en faktor. Ny divisjon gir $x^2 + 4$, som ikke har reelle nullpunkter. Alternativ b) er ufullstendig -- $(x^2 - 4)$ kan faktoriseres videre til $(x-2)(x+2)$.',
          },
          {
            id: '1t-1-9-n-quiz5-q4',
            task: 'Når vi faktoriserer $x^4 - 1$, får vi $(x - 1)(x + 1)(x^2 + 1)$. Hvorfor stopper vi her og faktoriserer ikke $x^2 + 1$ videre?',
            options: [
              { id: 'a', text: 'Fordi $x^2 + 1$ er et førstegradspolynom', isCorrect: false },
              { id: 'b', text: 'Fordi vi allerede har fire faktorer', isCorrect: false },
              { id: 'c', text: 'Fordi $x^2 + 1$ ikke har noen reelle nullpunkter ($x^2 + 1 > 0$ for alle reelle $x$)', isCorrect: true },
              { id: 'd', text: 'Fordi $x^2 + 1 = (x + 1)^2$ og vi allerede har $(x + 1)$', isCorrect: false },
            ],
            solution: '$x^2 + 1 = 0$ gir $x^2 = -1$, som ikke har noen reell løsning. Siden $x^2 \\geq 0$ for alle reelle $x$, er $x^2 + 1 \\geq 1 > 0$ alltid. Polynomet har ingen reelle nullpunkter og kan ikke faktoriseres videre over de reelle tallene.',
          },
        ],
      },
    },    {
      id: '1t-1-9-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi oppdaget den dype sammenhengen mellom nullpunkter og faktorer, og lært to kraftige teoremer.

**Faktorteoremet** sier at hvis $P(a) = 0$, er $(x - a)$ en faktor i $P(x)$. Det betyr at hvert nullpunkt avslører en faktor -- og omvendt. For å sjekke om $(x - a)$ er en faktor, trenger du bare å sette inn $a$ i polynomet.

**Restteoremet** er den generelle versjonen: når $P(x)$ deles på $(x - a)$, er resten lik $P(a)$. Formelt: $P(x) = (x - a) \\cdot Q(x) + P(a)$. Faktorteoremet er spesialtilfellet der resten er null.

**Strategien for å finne nullpunkter** i polynomer med heltallskoeffisienter er å prøve divisorene av konstantleddet: $\\pm 1, \\pm 2, ...$ opp til $\\pm |c|$.

**Fullstendig faktorisering** følger en klar oppskrift: finn et nullpunkt, divider, faktoriser kvotienten videre, og gjenta. For tredjegradspolynomer ender du med tre lineære faktorer (eller en lineær og en andregradsfaktor uten reelle nullpunkter). For fjerdegradspolynomer kan du få opptil fire lineære faktorer.

**Spesialtilfellene** $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ og $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ er nyttige å kjenne igjen. På samme måte kan fjerdepotenser som $x^4 - 16$ og $x^4 - 1$ brytes ned systematisk med gjentatt bruk av faktorteoremet.`,
    },
  ],
  exercises: [],
};
