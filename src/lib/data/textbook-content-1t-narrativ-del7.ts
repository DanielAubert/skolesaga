/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T -- NARRATIV VERSJON -- Del 7
 * Kapittel 1.8: Polynomdivisjon - introduksjon
 * Kapittel 1.9: Polynomdivisjon med lineaer divisor (Faktorteoremet og restteoremet)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
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
  competenceGoals: ['forklare polynomdivisjon', 'utfore enkel polynomdivisjon'],
  linkedChapterId: '1t-1-8',
  content: [
    { id: '1t-1-8-n-audio-1', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-8-narrativ-del1.mp3', description: 'Lydfil som leser opp teksten frem til forste quiz.' },
    {
      id: '1t-1-8-n-intro',
      type: 'text',
      content: `## Divisjon med bokstaver

Tenk tilbake til da du laerte lang divisjon med tall. Du satte opp dividenden, plasserte divisoren til venstre, og jobbet deg gjennom sifferne ett om gangen. Polynomdivisjon er noyaktig det samme -- bare med algebraiske uttrykk i stedet for tall.

Naar vi deler et polynom $P(x)$ paa et annet polynom $D(x)$, faar vi et resultat som folger en velkjent struktur:

$$P(x) = D(x) \\cdot Q(x) + R(x)$$

Her er $P(x)$ **dividenden** -- det polynomet vi deler. $D(x)$ er **divisoren** -- det vi deler paa. $Q(x)$ er **kvotienten** -- svaret vaart. Og $R(x)$ er **resten**, som kan vaere null dersom divisjonen gaar opp.

Denne sammenhengen er helt lik den du kjenner fra vanlige tall. Naar du deler $17$ paa $5$, faar du kvotienten $3$ og resten $2$, fordi $17 = 5 \\cdot 3 + 2$. Med polynomer fungerer det paa akkurat samme maate -- vi bare bytter ut tallene med uttrykk som inneholder $x$. I dette kapittelet skal vi bygge opp ferdighetene steg for steg, fra de enkleste delingene til full lang divisjon.`,
    },
    {
      id: '1t-1-8-n-section1',
      type: 'text',
      content: `## Divisjon av monomer -- potensreglene i aksjon

La oss begynne med det aller enkleste: aa dele ett monom paa et annet. Et **monom** er et uttrykk med bare ett ledd, for eksempel $6x^3$ eller $2x$.

Naar du skal dele $\\frac{6x^3}{2x}$, gjor du to ting: du deler koeffisientene ($\\frac{6}{2} = 3$) og du bruker potensregelen for divisjon paa variabeldelen ($x^{3-1} = x^2$). Resultatet er $3x^2$.

Hvorfor fungerer dette? Fordi $x^3 = x \\cdot x \\cdot x$ og $x = x$. Naar du deler, stryker du de felles faktorene: $\\frac{x \\cdot x \\cdot x}{x} = x \\cdot x = x^2$. Potensregelen $\\frac{x^m}{x^n} = x^{m-n}$ er bare en snarvei for denne prosessen.

La oss ta noen flere eksempler. $\\frac{8x^4}{2x} = 4x^3$ -- del koeffisientene ($8/2 = 4$) og trekk fra eksponentene ($4 - 1 = 3$). $\\frac{12x^5}{4x^2} = 3x^3$. $\\frac{15x^3}{5x^3} = 3$ -- naar eksponentene er like, forsvinner $x$ helt, og vi sitter igjen med bare et tall. Og $\\frac{-10x^6}{2x^2} = -5x^4$ -- husk at fortegnsreglene gjelder som vanlig.

Det finnes ogsaa et spesialtilfelle som er verdt aa merke seg: $\\frac{x^n}{x^n} = x^0 = 1$. Enhver storrelse delt paa seg selv gir $1$. Denne enkle observasjonen er grunnlaget for alt som folger.`,
    },
    {
      id: '1t-1-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva blir $\\frac{12x^5}{4x^2}$?',
        options: [
          { id: 'a', text: '$3x^3$', isCorrect: true },
          { id: 'b', text: '$3x^7$', isCorrect: false },
          { id: 'c', text: '$8x^3$', isCorrect: false },
          { id: 'd', text: '$3x^{2{,}5}$', isCorrect: false },
        ],
        solution: 'Vi deler koeffisientene: $12 / 4 = 3$. Deretter trekker vi fra eksponentene: $x^{5-2} = x^3$. Svaret er $3x^3$.',
      },
    },
    { id: '1t-1-8-n-audio-2', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-8-narrativ-del2.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-8-n-section2',
      type: 'text',
      content: `## Dele et polynom paa et monom -- ledd for ledd

Naa som vi mestrer monomdivisjon, er neste steg aa dele et helt polynom paa et enkelt monom. Trikset er overraskende greit: du deler **hvert ledd** i polynomet for seg.

Regelen er:

$$\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$$

Dette er det samme prinsippet som at $\\frac{10 + 5}{5} = \\frac{10}{5} + \\frac{5}{5} = 2 + 1 = 3$.

La oss proeve med $\\frac{6x^3 + 4x^2 - 2x}{2x}$. Vi deler hvert av de tre leddene paa $2x$:

$$\\frac{6x^3}{2x} + \\frac{4x^2}{2x} - \\frac{2x}{2x} = 3x^2 + 2x - 1$$

Hvert ledd behandles som en selvstendig monomdivisjon. Foerste ledd: $6x^3 / 2x = 3x^2$. Andre ledd: $4x^2 / 2x = 2x$. Tredje ledd: $2x / 2x = 1$.

Her er et eksempel til: $\\frac{9x^3 - 6x^2 + 3x}{3x}$. Vi tar ledd for ledd: $\\frac{9x^3}{3x} = 3x^2$, $\\frac{-6x^2}{3x} = -2x$, $\\frac{3x}{3x} = 1$. Svaret er $3x^2 - 2x + 1$.

Og enda ett: $\\frac{x^4 + x^3 + x^2}{x^2}$. Her er $\\frac{x^4}{x^2} = x^2$, $\\frac{x^3}{x^2} = x$, $\\frac{x^2}{x^2} = 1$. Svaret er $x^2 + x + 1$.

Legg merke til at denne metoden alltid fungerer naar divisoren er et monom. Men hva gjor vi naar ogsaa divisoren har flere ledd, som for eksempel $(x + 2)$? Da trenger vi et kraftigere verktoy: **lang divisjon**.`,
    },
    {
      id: '1t-1-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva blir $\\frac{8x^2 + 4x}{2x}$?',
        options: [
          { id: 'a', text: '$4x^2 + 2$', isCorrect: false },
          { id: 'b', text: '$4x + 2$', isCorrect: true },
          { id: 'c', text: '$6x$', isCorrect: false },
          { id: 'd', text: '$4x + 4$', isCorrect: false },
        ],
        solution: 'Vi deler hvert ledd for seg: $\\frac{8x^2}{2x} = 4x$ og $\\frac{4x}{2x} = 2$. Svaret er $4x + 2$.',
      },
    },
    { id: '1t-1-8-n-audio-3', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-8-narrativ-del3.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-8-n-section3',
      type: 'text',
      content: `## Lang divisjon av polynomer -- steg for steg

Naa er vi klare for hovedteknikken: **polynomdivisjon med lang divisjon**. Metoden ligner paa vanlig lang divisjon med tall, og den folger fire steg som gjentas til vi er ferdige.

**Fremgangsmaaten:**
1. Del det forste leddet i dividenden paa det forste leddet i divisoren.
2. Gang svaret med hele divisoren.
3. Trekk fra resultatet.
4. Gjenta til graden av resten er lavere enn graden av divisoren.

La oss gaa gjennom et konkret eksempel: $(x^2 + 5x + 6) : (x + 2)$.

**Steg 1:** Vi ser paa det forste leddet i dividenden, $x^2$, og deler det paa det forste leddet i divisoren, $x$. Vi faar $\\frac{x^2}{x} = x$. Dette er det forste leddet i kvotienten.

**Steg 2:** Vi ganger $x$ med hele divisoren $(x + 2)$: $x \\cdot (x + 2) = x^2 + 2x$.

**Steg 3:** Vi trekker fra: $(x^2 + 5x + 6) - (x^2 + 2x) = 3x + 6$. Naa jobber vi videre med $3x + 6$.

**Steg 4:** Vi deler $3x$ paa $x$: $\\frac{3x}{x} = 3$. Saa ganger vi $3$ med $(x + 2)$: $3x + 6$. Vi trekker fra: $(3x + 6) - (3x + 6) = 0$.

Resten er $0$, saa divisjonen gaar opp! Svaret er $(x^2 + 5x + 6) : (x + 2) = x + 3$.

Vi kan sjekke: $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$. Stemmer! Denne kontrollen er et fantastisk verktoy -- du kan alltid sjekke svaret ditt ved aa gange kvotienten med divisoren og legge til eventuell rest.`,
    },
    {
      id: '1t-1-8-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er det forste steget naar du utforer $(x^2 + 7x + 12) : (x + 3)$?',
        options: [
          { id: 'a', text: 'Gang $x^2$ med $(x + 3)$', isCorrect: false },
          { id: 'b', text: 'Trekk $3$ fra $12$', isCorrect: false },
          { id: 'c', text: 'Del $x^2 + 7x$ paa $x + 3$', isCorrect: false },
          { id: 'd', text: 'Del $x^2$ paa $x$ og faa $x$', isCorrect: true },
        ],
        solution: 'Det forste steget i lang divisjon er alltid aa dele det forste leddet i dividenden ($x^2$) paa det forste leddet i divisoren ($x$). Det gir $x$, som blir det forste leddet i kvotienten.',
      },
    },
    { id: '1t-1-8-n-audio-4', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-8-narrativ-del4.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-8-n-section4',
      type: 'text',
      content: `## Naar divisjonen ikke gaar opp -- rest

Ikke alle polynomdivisjoner gaar opp. Akkurat som $17 : 5 = 3$ med rest $2$, kan vi faa en rest ogsaa med polynomer. Naar resten ikke er null, skriver vi svaret paa formen:

$$\\frac{P(x)}{D(x)} = Q(x) + \\frac{R(x)}{D(x)}$$

La oss se paa $(x^2 + 5x + 8) : (x + 2)$.

Vi starter som for. $\\frac{x^2}{x} = x$. Gang: $x(x + 2) = x^2 + 2x$. Trekk fra: $(x^2 + 5x + 8) - (x^2 + 2x) = 3x + 8$.

Neste runde: $\\frac{3x}{x} = 3$. Gang: $3(x + 2) = 3x + 6$. Trekk fra: $(3x + 8) - (3x + 6) = 2$.

Naa har vi en rest paa $2$. Siden graden av resten ($0$, fordi $2$ er en konstant) er lavere enn graden av divisoren ($1$, fordi $x + 2$ er foerstegrads), stopper vi her.

Svaret skrives: $(x^2 + 5x + 8) : (x + 2) = x + 3 + \\frac{2}{x + 2}$

La oss sjekke med formelen $P(x) = D(x) \\cdot Q(x) + R(x)$: $(x + 2)(x + 3) + 2 = x^2 + 5x + 6 + 2 = x^2 + 5x + 8$. Stemmer!

Her er et eksempel til: $(2x^2 + 5x + 1) : (x + 2)$. Forste runde: $\\frac{2x^2}{x} = 2x$. Gang: $2x(x+2) = 2x^2 + 4x$. Trekk fra: $x + 1$. Andre runde: $\\frac{x}{x} = 1$. Gang: $1 \\cdot (x + 2) = x + 2$. Trekk fra: $(x + 1) - (x + 2) = -1$. Svaret er $2x + 1$ med rest $-1$.`,
    },
    {
      id: '1t-1-8-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er resten naar $(x^2 + 4x + 5)$ deles paa $(x + 1)$?',
        options: [
          { id: 'a', text: '$0$', isCorrect: false },
          { id: 'b', text: '$1$', isCorrect: false },
          { id: 'c', text: '$2$', isCorrect: true },
          { id: 'd', text: '$5$', isCorrect: false },
        ],
        solution: 'Vi utforer lang divisjon. $x^2 / x = x$. Gang: $x(x+1) = x^2 + x$. Trekk fra: $3x + 5$. Neste: $3x / x = 3$. Gang: $3(x+1) = 3x + 3$. Trekk fra: $(3x+5)-(3x+3) = 2$. Resten er $2$.',
      },
    },
    { id: '1t-1-8-n-audio-5', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-8-narrativ-del5.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-8-n-section5',
      type: 'text',
      content: `## Divisjon med polynomer av hoyere grad

Den samme metoden fungerer ogsaa naar dividenden er et tredjegrads- eller fjerdegradspolynom. Vi faar bare flere runder med divisjon, men hvert steg er identisk.

La oss ta $(x^3 - 6x^2 + 11x - 6) : (x - 1)$.

**Runde 1:** $\\frac{x^3}{x} = x^2$. Gang: $x^2(x - 1) = x^3 - x^2$. Trekk fra: $(x^3 - 6x^2 + 11x - 6) - (x^3 - x^2) = -5x^2 + 11x - 6$.

**Runde 2:** $\\frac{-5x^2}{x} = -5x$. Gang: $-5x(x - 1) = -5x^2 + 5x$. Trekk fra: $(-5x^2 + 11x - 6) - (-5x^2 + 5x) = 6x - 6$.

**Runde 3:** $\\frac{6x}{x} = 6$. Gang: $6(x - 1) = 6x - 6$. Trekk fra: $(6x - 6) - (6x - 6) = 0$.

Svaret er $x^2 - 5x + 6$. Vi kan faktorisere dette videre til $(x - 2)(x - 3)$, saa hele polynomet kan skrives som $(x - 1)(x - 2)(x - 3)$.

Et viktig tips: naar dividenden mangler et ledd, maa du **sette inn null-ledd**. For eksempel, hvis du skal dele $x^3 - 8$ paa $(x - 2)$, boer du skrive dividenden som $x^3 + 0x^2 + 0x - 8$. Uten disse null-leddene er det lett aa miste oversikten.

Her er et annet eksempel med tredjegradspolynom: $(x^3 + 6x^2 + 11x + 6) : (x + 1)$. Runde 1: $x^2$, gang: $x^3 + x^2$, rest: $5x^2 + 11x + 6$. Runde 2: $5x$, gang: $5x^2 + 5x$, rest: $6x + 6$. Runde 3: $6$, gang: $6x + 6$, rest: $0$. Svaret er $x^2 + 5x + 6 = (x + 2)(x + 3)$.`,
    },
    {
      id: '1t-1-8-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Naar du skal dele $(x^3 - 8)$ paa $(x - 2)$, hvordan boer du skrive dividenden?',
        options: [
          { id: 'a', text: '$x^3 - 8$, akkurat som den er', isCorrect: false },
          { id: 'b', text: '$x^3 + 0x^2 + 0x - 8$', isCorrect: true },
          { id: 'c', text: '$(x - 2)(x^2 + 2x + 4)$', isCorrect: false },
          { id: 'd', text: '$x^3 - 2x^2 - 8$', isCorrect: false },
        ],
        solution: 'Naar dividenden mangler ledd (her mangler $x^2$- og $x$-leddene), maa du sette inn null-koeffisienter saa du beholder oversikten: $x^3 + 0x^2 + 0x - 8$. Da unngaar du aa miste ledd underveis i lang divisjon.',
      },
    },
    { id: '1t-1-8-n-audio-6', type: 'audio', title: 'Lytt til oppsummeringen', src: '/audio/1t/1t-1-8-narrativ-del6.mp3', description: 'Lydfil som leser opp oppsummeringen.' },
    {
      id: '1t-1-8-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert aa dele polynomer paa hverandre, fra de enkleste tilfellene til full lang divisjon.

**Monomdivisjon** er grunnsteinen. Du deler koeffisientene og trekker fra eksponentene: $\\frac{6x^3}{2x} = 3x^2$. Potensregelen $\\frac{x^m}{x^n} = x^{m-n}$ er noekkelen.

**Polynom delt paa monom** gjores ledd for ledd. Hvert ledd i telleren deles separat paa nevneren: $\\frac{6x^3 + 4x^2 - 2x}{2x} = 3x^2 + 2x - 1$.

**Lang divisjon** brukes naar divisoren har flere ledd. Metoden folger fire steg som gjentas: del foersteleddet, gang med hele divisoren, trekk fra, og gjenta. Resultatet bestar av en kvotient og eventuelt en rest.

**Resten** kan vaere null (divisjonen gaar opp) eller et polynom av lavere grad enn divisoren. Svaret skrives da som $Q(x) + \\frac{R(x)}{D(x)}$.

**Kontrollformelen** $P(x) = D(x) \\cdot Q(x) + R(x)$ lar deg alltid sjekke svaret ditt. Gang kvotienten med divisoren og legg til resten -- du skal faa tilbake dividenden. Husk ogsaa aa sette inn null-ledd naar dividenden mangler potenser av $x$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.9 NARRATIV: Polynomdivisjon med lineaer divisor
// ============================================================================

export const CHAPTER_1T_1_9_NARRATIV: TextbookChapter = {
  id: '1t-1-9-narrativ',
  courseId: '1t',
  chapterNumber: '1.9',
  title: 'Polynomdivisjon med lineaer divisor',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om den magiske sammenhengen mellom nullpunkter og faktorer -- hvordan faktorteoremet og restteoremet lar deg knekke polynomer i smaa biter og forstaa strukturen deres fullt ut.',
  estimatedMinutes: 40,
  competenceGoals: ['bruke polynomdivisjon til aa omskrive algebraiske uttrykk', 'bruke faktorteoremet'],
  linkedChapterId: '1t-1-9',
  content: [
    { id: '1t-1-9-n-audio-1', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-9-narrativ-del1.mp3', description: 'Lydfil som leser opp teksten frem til forste quiz.' },
    {
      id: '1t-1-9-n-intro',
      type: 'text',
      content: `## Nullpunkter og faktorer -- en dyp sammenheng

I forrige kapittel laerte du aa utfore polynomdivisjon steg for steg. Naa skal vi oppdage noe fascinerende: det finnes en direkte kobling mellom **nullpunktene** til et polynom og **faktorene** det kan deles opp i.

Tenk deg at du har polynomet $P(x) = x^2 - 5x + 6$. Hvis du setter inn $x = 2$, faar du $P(2) = 4 - 10 + 6 = 0$. Tallet $2$ er altsaa et **nullpunkt** -- en $x$-verdi som gjor polynomet lik null. Og det viser seg at naar $2$ er et nullpunkt, saa er $(x - 2)$ en **faktor** i polynomet. Faktisk er $x^2 - 5x + 6 = (x - 2)(x - 3)$.

Denne sammenhengen er ikke tilfeldig. Den er en grunnleggende egenskap ved polynomer, og den gir oss to kraftige verktoy: **faktorteoremet** og **restteoremet**. Sammen lar de oss bryte ned polynomer til sine minste bestanddeler og avgjore om en divisjon gaar opp -- uten aa faktisk utfore hele divisjonen. I dette kapittelet skal vi utforske begge tesetene, laere aa finne nullpunkter systematisk, og mestre kunsten aa faktorisere polynomer fullstendig.`,
    },
    {
      id: '1t-1-9-n-section1',
      type: 'text',
      content: `## Faktorteoremet -- fra nullpunkt til faktor

**Faktorteoremet** sier: Hvis $P(a) = 0$, saa er $(x - a)$ en faktor i $P(x)$.

Med andre ord: naar tallet $a$ er et nullpunkt for polynomet, gaar $(x - a)$ opp i $P(x)$ uten rest. La oss se hvorfor dette gir mening.

Husk fra forrige kapittel at enhver polynomdivisjon kan skrives paa formen $P(x) = D(x) \\cdot Q(x) + R(x)$. Naar vi deler paa en lineaer divisor $(x - a)$, blir resten alltid en konstant (et tall uten $x$). Hvis den resten er $0$, betyr det at $P(x) = (x - a) \\cdot Q(x)$ -- og da er $(x - a)$ en faktor.

La oss teste dette med $P(x) = x^3 - 6x^2 + 11x - 6$. Vi proever $x = 2$:

$P(2) = 2^3 - 6 \\cdot 2^2 + 11 \\cdot 2 - 6 = 8 - 24 + 22 - 6 = 0$

Siden $P(2) = 0$, garanterer faktorteoremet at $(x - 2)$ er en faktor. Vi kan bekrefte dette med lang divisjon: $(x^3 - 6x^2 + 11x - 6) : (x - 2) = x^2 - 4x + 3$. Og $x^2 - 4x + 3 = (x - 1)(x - 3)$.

La oss ogsaa sjekke et negativt eksempel. Er $(x + 1)$ en faktor i $x^2 + 2x + 3$? Husk at $(x + 1) = (x - (-1))$, saa vi setter inn $x = -1$: $P(-1) = 1 - 2 + 3 = 2 \\neq 0$. Siden $P(-1)$ ikke er null, er $(x + 1)$ *ikke* en faktor. Faktorteoremet fungerer begge veier: $P(a) = 0$ betyr at $(x - a)$ er en faktor, og $P(a) \\neq 0$ betyr at $(x - a)$ ikke er en faktor.`,
    },
    {
      id: '1t-1-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Polynomet $P(x) = x^2 - 3x + 2$ har $P(1) = 0$. Hva kan vi konkludere?',
        options: [
          { id: 'a', text: '$(x + 1)$ er en faktor i $P(x)$', isCorrect: false },
          { id: 'b', text: '$(x - 1)$ er en faktor i $P(x)$', isCorrect: true },
          { id: 'c', text: 'Resten ved divisjon med $(x - 1)$ er $1$', isCorrect: false },
          { id: 'd', text: '$P(x)$ kan ikke faktoriseres', isCorrect: false },
        ],
        solution: 'Faktorteoremet sier at naar $P(a) = 0$, er $(x - a)$ en faktor. Siden $P(1) = 0$, er $(x - 1)$ en faktor i $P(x)$. Vi kan bekrefte: $x^2 - 3x + 2 = (x-1)(x-2)$.',
      },
    },
    { id: '1t-1-9-n-audio-2', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-9-narrativ-del2.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-9-n-section2',
      type: 'text',
      content: `## Aa finne nullpunkter -- divisorer av konstantleddet

Faktorteoremet er fantastisk, men det krever at vi allerede *kjenner* et nullpunkt. Hvordan finner vi det? For polynomer med heltallskoeffisienter finnes det en smart strategi: **prov divisorene av konstantleddet**.

Ideen er denne: hvis polynomet $P(x) = x^n + ... + c$ har heltallskoeffisienter og ledende koeffisient $1$, maa eventuelle heltallsnullpunkter vaere blant divisorene av konstantleddet $c$. Det betyr at vi kan proeve $\\pm 1, \\pm 2, \\pm 3, ...$ opp til $\\pm |c|$.

La oss ta et eksempel: $P(x) = x^3 - 2x^2 - 5x + 6$. Konstantleddet er $6$, saa vi proever divisorene: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.

Vi starter med de enkleste: $P(1) = 1 - 2 - 5 + 6 = 0$. Bingo! $x = 1$ er et nullpunkt.

Naa vet vi at $(x - 1)$ er en faktor. Vi utforer polynomdivisjon: $(x^3 - 2x^2 - 5x + 6) : (x - 1) = x^2 - x - 6$. Kvotienten $x^2 - x - 6$ er et andregradspolynom, som vi kan faktorisere med kjente metoder: $x^2 - x - 6 = (x - 3)(x + 2)$.

Dermed er $P(x) = (x - 1)(x - 3)(x + 2)$. Vi har faktorisert tredjegradspolynomet fullstendig!

Et annet eksempel: $P(x) = x^3 + 6x^2 + 11x + 6$. Konstantleddet er $6$. Vi proever $P(-1) = -1 + 6 - 11 + 6 = 0$. Saa $(x + 1)$ er en faktor. Divisjon gir $x^2 + 5x + 6 = (x + 2)(x + 3)$. Altsaa: $P(x) = (x + 1)(x + 2)(x + 3)$. Legg merke til at alle nullpunktene ($-1, -2, -3$) er divisorer av konstantleddet $6$.`,
    },
    {
      id: '1t-1-9-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Du skal finne nullpunkter for $P(x) = x^3 - 4x^2 + x + 6$. Hvilke verdier boer du proeve forst?',
        options: [
          { id: 'a', text: 'Alle desimaltall mellom $-10$ og $10$', isCorrect: false },
          { id: 'b', text: '$x = 0, 1, 2, 3, 4, 5, 6$', isCorrect: false },
          { id: 'c', text: '$x = \\pm 1, \\pm 2, \\pm 3, \\pm 6$', isCorrect: true },
          { id: 'd', text: 'Bare positive tall', isCorrect: false },
        ],
        solution: 'Vi proever divisorene av konstantleddet. Konstantleddet er $6$, og divisorene er $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Vi maa proeve baade positive og negative verdier, fordi nullpunkter kan vaere negative.',
      },
    },
    { id: '1t-1-9-n-audio-3', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-9-narrativ-del3.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-9-n-section3',
      type: 'text',
      content: `## Restteoremet -- resten uten divisjon

Faktorteoremet handler om tilfellet der resten er null. Men hva naar resten *ikke* er null? Her kommer **restteoremet** inn:

**Naar polynomet $P(x)$ deles paa $(x - a)$, er resten lik $P(a)$.**

Matematisk: $P(x) = (x - a) \\cdot Q(x) + P(a)$

Dette er et utrolig nyttig verktoy. I stedet for aa utfore hele lang divisjonen for aa finne resten, kan du bare **sette inn $a$ i polynomet**. Resten faar du paa sekunder!

La oss se paa et eksempel. Hva er resten naar $P(x) = x^3 + 2x^2 - x + 3$ deles paa $(x - 2)$?

Ifoolge restteoremet er resten $P(2) = 2^3 + 2 \\cdot 2^2 - 2 + 3 = 8 + 8 - 2 + 3 = 17$.

Vi kunne ha utfort lang divisjon og faatt noyaktig samme svar, men restteoremet sparte oss for hele prosessen.

Et annet eksempel: Finn resten naar $(x^2 + 3x + 5)$ deles paa $(x - 1)$. Resten er $P(1) = 1 + 3 + 5 = 9$.

Og et til: Finn resten naar $(x^3 - 2x + 1)$ deles paa $(x + 1)$. Husk at $(x + 1) = (x - (-1))$, saa $a = -1$. Resten er $P(-1) = (-1)^3 - 2(-1) + 1 = -1 + 2 + 1 = 2$.

Legg merke til hvordan faktorteoremet egentlig er et spesialtilfelle av restteoremet: naar resten $P(a) = 0$, gaar divisjonen opp, og $(x - a)$ er en faktor. De to teoremene haenger altsaa tett sammen.`,
    },
    {
      id: '1t-1-9-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er resten naar $P(x) = 2x^3 - 5x + 3$ deles paa $(x + 2)$?',
        options: [
          { id: 'a', text: '$17$', isCorrect: false },
          { id: 'b', text: '$-3$', isCorrect: true },
          { id: 'c', text: '$3$', isCorrect: false },
          { id: 'd', text: '$-13$', isCorrect: false },
        ],
        solution: 'Vi bruker restteoremet. Divisoren er $(x + 2) = (x - (-2))$, saa $a = -2$. Resten er $P(-2) = 2(-2)^3 - 5(-2) + 3 = 2 \\cdot (-8) + 10 + 3 = -16 + 10 + 3 = -3$.',
      },
    },
    { id: '1t-1-9-n-audio-4', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-9-narrativ-del4.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-9-n-section4',
      type: 'text',
      content: `## Fullstendig faktorisering -- strategi

Naa har vi alle verktoyene vi trenger for aa faktorisere polynomer fullstendig. Her er strategien, steg for steg:

**1.** Finn ett nullpunkt $a$ ved aa proeve divisorer av konstantleddet.
**2.** Divider polynomet paa $(x - a)$ med lang divisjon.
**3.** Faktoriser kvotienten videre (om mulig).
**4.** Gjenta til du ikke kan faktorisere mer.

La oss ta $P(x) = x^3 - 7x + 6$. Konstantleddet er $6$, saa vi proever: $P(1) = 1 - 7 + 6 = 0$. Flott, $x = 1$ er et nullpunkt.

Vi deler: $(x^3 - 7x + 6) : (x - 1)$. Husk aa skrive dividenden som $x^3 + 0x^2 - 7x + 6$ for aa inkludere null-leddet. Divisjonen gir $x^2 + x - 6$.

Naa faktoriserer vi $x^2 + x - 6$. Vi leter etter to tall som ganger til $-6$ og summerer til $1$. Det er $3$ og $-2$: $x^2 + x - 6 = (x + 3)(x - 2)$.

Endelig svar: $P(x) = (x - 1)(x + 3)(x - 2)$.

La oss ta et vanskeligere eksempel: $P(x) = x^3 + 2x^2 - x - 2$. Proev $P(1) = 1 + 2 - 1 - 2 = 0$. $(x - 1)$ er en faktor. Divisjon gir $x^2 + 3x + 2 = (x + 1)(x + 2)$. Altsaa: $P(x) = (x - 1)(x + 1)(x + 2)$.

Noen ganger finner du nullpunktet paa andre forsok. For $P(x) = x^3 - 4x^2 + x + 6$ gir $P(1) = -2 \\neq 0$, men $P(-1) = -1 - 4 - 1 + 6 = 0$. Saa $(x + 1)$ er en faktor. Divisjon gir $x^2 - 5x + 6 = (x - 2)(x - 3)$. Altsaa: $P(x) = (x + 1)(x - 2)(x - 3)$.`,
    },
    {
      id: '1t-1-9-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: '$P(x) = x^3 - 6x^2 + 11x - 6$. Du finner at $P(1) = 0$. Hva er neste steg?',
        options: [
          { id: 'a', text: 'Faktoriser direkte til $(x-1)(x-2)(x-3)$ uten videre regning', isCorrect: false },
          { id: 'b', text: 'Proev aa finne flere nullpunkter ved aa sette inn $x = 2, 3, ...$', isCorrect: false },
          { id: 'c', text: 'Del $P(x)$ paa $(x - 1)$ og faktoriser kvotienten', isCorrect: true },
          { id: 'd', text: 'Bruk restteoremet til aa finne resten', isCorrect: false },
        ],
        solution: 'Naar du har funnet et nullpunkt, er neste steg aa utfore polynomdivisjon med den tilhorende faktoren. Del $P(x)$ paa $(x - 1)$ for aa faa en andregradskvotient, og faktoriser den videre.',
      },
    },
    { id: '1t-1-9-n-audio-5', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-9-narrativ-del5.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-9-n-section5',
      type: 'text',
      content: `## Spesialtilfeller -- kuber og fjerdepotenser

Naa skal vi se paa noen spesialtilfeller som dukker opp overraskende ofte, saerlig naar polynomer inneholder **perfekte potenser**.

La oss starte med $x^3 - 8$. Konstantleddet er $-8$. Vi proever $P(2) = 8 - 8 = 0$. Saa $(x - 2)$ er en faktor. Husk aa sette inn null-ledd: $(x^3 + 0x^2 + 0x - 8) : (x - 2)$. Divisjonen gir $x^2 + 2x + 4$. Altsaa: $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$.

Det vi nettopp har sett er et eksempel paa **tredjegrads konjugatsetning**: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$. Her er $a = x$ og $b = 2$.

Tilsvarende: $x^3 + 27 = x^3 + 3^3$. Vi proever $P(-3) = -27 + 27 = 0$, saa $(x + 3)$ er en faktor. Divisjon gir $x^2 - 3x + 9$. Her ser vi den andre formen: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.

Hva med fjerdepotenser? Ta $P(x) = x^4 - 5x^2 + 4$. Konstantleddet er $4$. Vi proever $P(1) = 1 - 5 + 4 = 0$. $(x-1)$ er en faktor. Divisjon gir $x^3 + x^2 - 4x - 4$. Vi proever $P(-1)$ paa kvotienten: $-1 + 1 + 4 - 4 = 0$. $(x+1)$ er en faktor. Ny divisjon gir $x^2 - 4 = (x-2)(x+2)$.

Komplett faktorisering: $x^4 - 5x^2 + 4 = (x-1)(x+1)(x-2)(x+2)$.

Et annet fjerdegradseksempel: $(x^4 - 16) : (x - 2)$. Proev $P(2) = 16 - 16 = 0$. Divisjon gir $x^3 + 2x^2 + 4x + 8$. Denne kan faktoriseres videre: $P(-2) = -8 + 8 - 8 + 8 = 0$, saa $(x+2)$ er en faktor. Divisjon gir $x^2 + 4$, som ikke har reelle nullpunkter. Altsaa: $x^4 - 16 = (x-2)(x+2)(x^2 + 4)$.

Og helt til slutt: $(x^4 - 1) : (x - 1) = x^3 + x^2 + x + 1$. Denne kvotienten kan faktoriseres videre: $x^3 + x^2 + x + 1 = (x + 1)(x^2 + 1)$. Saa $x^4 - 1 = (x-1)(x+1)(x^2+1)$.`,
    },
    {
      id: '1t-1-9-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er den fullstendige faktoriseringen av $x^4 - 10x^2 + 9$?',
        options: [
          { id: 'a', text: '$(x - 1)(x + 1)(x^2 - 9)$', isCorrect: false },
          { id: 'b', text: '$(x^2 - 1)(x^2 - 9)$', isCorrect: false },
          { id: 'c', text: '$(x - 1)(x + 1)(x - 3)(x + 3)$', isCorrect: true },
          { id: 'd', text: '$(x - 3)^2(x + 1)^2$', isCorrect: false },
        ],
        solution: 'Start med $P(1) = 1 - 10 + 9 = 0$, saa $(x-1)$ er en faktor. Divisjon gir $x^3 + x^2 - 9x - 9$. Proev $P(-1) = -1 + 1 + 9 - 9 = 0$, saa $(x+1)$ er en faktor. Ny divisjon gir $x^2 - 9 = (x-3)(x+3)$. Fullstendig: $(x-1)(x+1)(x-3)(x+3)$.',
      },
    },
    { id: '1t-1-9-n-audio-6', type: 'audio', title: 'Lytt til oppsummeringen', src: '/audio/1t/1t-1-9-narrativ-del6.mp3', description: 'Lydfil som leser opp oppsummeringen.' },
    {
      id: '1t-1-9-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi oppdaget den dype sammenhengen mellom nullpunkter og faktorer, og laert to kraftige teoremer.

**Faktorteoremet** sier at hvis $P(a) = 0$, er $(x - a)$ en faktor i $P(x)$. Det betyr at hvert nullpunkt avslorer en faktor -- og omvendt. For aa sjekke om $(x - a)$ er en faktor, trenger du bare aa sette inn $a$ i polynomet.

**Restteoremet** er den generelle versjonen: naar $P(x)$ deles paa $(x - a)$, er resten lik $P(a)$. Formelt: $P(x) = (x - a) \\cdot Q(x) + P(a)$. Faktorteoremet er spesialtilfellet der resten er null.

**Strategien for aa finne nullpunkter** i polynomer med heltallskoeffisienter er aa proeve divisorene av konstantleddet: $\\pm 1, \\pm 2, ...$ opp til $\\pm |c|$.

**Fullstendig faktorisering** folger en klar oppskrift: finn et nullpunkt, divider, faktoriser kvotienten videre, og gjenta. For tredjegradspolynomer ender du med tre lineaere faktorer (eller en lineaer og en andregradsfaktor uten reelle nullpunkter). For fjerdegradspolynomer kan du faa opptil fire lineaere faktorer.

**Spesialtilfellene** $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ og $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ er nyttige aa kjenne igjen. Paa samme maate kan fjerdepotenser som $x^4 - 16$ og $x^4 - 1$ brytes ned systematisk med gjentatt bruk av faktorteoremet.`,
    },
  ],
  exercises: [],
};
