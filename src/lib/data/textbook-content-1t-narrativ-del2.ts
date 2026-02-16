/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON – Del 2
 * Kapittel 7.1: Gjennomsnittlig vekstfart
 * Kapittel 7.2: Momentan vekstfart
 * Kapittel 7.3: Den deriverte
 * Kapittel 7.5: Definisjonen av derivasjon og numerisk derivasjon
 * Kapittel 7.6: Derivasjon av polynomfunksjoner
 * Kapittel 7.7: Praktisk bruk av derivasjon
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1 NARRATIV: Gjennomsnittlig vekstfart
// ============================================================================

export const CHAPTER_1T_7_1_NARRATIV: TextbookChapter = {
  id: '1t-7-1-narrativ',
  courseId: '1t',
  chapterNumber: '7.1',
  title: 'Gjennomsnittlig vekstfart',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om stigningstall, sekanter og gjennomsnittlig vekstfart – hvordan du måler endring mellom to punkter på en graf.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forstå begrepet gjennomsnittlig vekstfart',
    'beregne gjennomsnittlig vekstfart for en funksjon i et intervall',
    'tolke gjennomsnittlig vekstfart grafisk som stigningstallet til en sekant',
  ],
  linkedChapterId: '1t-7-1',
  content: [
    {
      id: '1t-7-1-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-1-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-7-1-n-intro',
      type: 'text',
      content: `## Hvor bratt er det egentlig?

Forestill deg at du står ved foten av en bakke og lurer på hvor bratt den er. Du kan peke på bakken og si «den er ganske bratt», men i matematikken vil vi ha noe mer presist enn det. Vi vil ha et tall som forteller oss nøyaktig hvor bratt noe er – og det er her **stigningstall** kommer inn.

I dette kapittelet skal vi starte med å forstå stigningstall, som er noe du kanskje har møtt før. Deretter bruker vi det til å introdusere et nytt begrep: **gjennomsnittlig vekstfart**. Det handler om å måle hvor fort noe endrer seg mellom to punkter. Underveis skal vi også bli kjent med **ettpunktsformelen** og begrepet **sekant**. Alt henger sammen, og vi tar det steg for steg.`,
    },
    {
      id: '1t-7-1-n-section1',
      type: 'text',
      content: `## Stigningstall – brattheten til en linje

La oss starte med det grunnleggende. Når du har en rett linje i et koordinatsystem, forteller **stigningstallet** deg hvor mye $y$-verdien endrer seg når $x$-verdien øker med 1. Vi bruker bokstaven $a$ for stigningstallet.

For å finne stigningstallet trenger du to punkter på linjen. La oss si at du har $P_1 = (x_1, y_1)$ og $P_2 = (x_2, y_2)$. Da er stigningstallet gitt ved formelen:

$$a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$

Her betyr $\\Delta$ (den greske bokstaven delta) rett og slett *endring*. Så $\\Delta y$ er endringen i $y$, og $\\Delta x$ er endringen i $x$. Du tar altså forskjellen i $y$-verdier og deler på forskjellen i $x$-verdier.

La oss prøve et eksempel. Tenk deg at linjen går gjennom punktene $(1, 3)$ og $(3, 9)$. Da blir stigningstallet $a = \\frac{9 - 3}{3 - 1} = \\frac{6}{2} = 3$. Det betyr at for hver gang $x$ øker med 1, så øker $y$ med 3. Linjen stiger altså ganske bratt oppover.

Hvis stigningstallet er negativt, betyr det at linjen synker. Og hvis stigningstallet er 0, er linjen helt flat – horisontal.`,
    },
    {
      id: '1t-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er stigningstallet til linjen gjennom punktene $(-1, -2)$ og $(1, -4)$?',
        options: [
          { id: 'a', text: '$1$', isCorrect: false },
          { id: 'b', text: '$-1$', isCorrect: true },
          { id: 'c', text: '$3$', isCorrect: false },
          { id: 'd', text: '$-3$', isCorrect: false },
        ],
        solution: 'Vi bruker formelen: $a = \\frac{-4 - (-2)}{1 - (-1)} = \\frac{-4 + 2}{1 + 1} = \\frac{-2}{2} = -1$. Stigningstallet er $-1$, som betyr at linjen synker.',
      },
    },
    {
      id: '1t-7-1-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-1-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-1-n-section2',
      type: 'text',
      content: `## Ettpunktsformelen – fra punkt og stigning til likning

Nå som vi kan finne stigningstall, skal vi lære en elegant formel som lar oss finne likningen til en linje når vi kjenner stigningstallet og ett punkt på linjen. Den heter **ettpunktsformelen** og ser slik ut:

$$y - y_0 = a(x - x_0)$$

Her er $(x_0, y_0)$ punktet vi kjenner, og $a$ er stigningstallet. Formelen sier egentlig noe intuitivt: forskjellen i $y$-verdi fra det kjente punktet er lik stigningstallet ganget med forskjellen i $x$-verdi.

La oss bruke den. Hvis vi vet at en linje har stigningstall $3$ og går gjennom punktet $(1, 2)$, setter vi inn: $y - 2 = 3(x - 1)$. Vi løser opp: $y - 2 = 3x - 3$, altså $y = 3x - 1$. Der har vi likningen til linjen.

Ettpunktsformelen er spesielt nyttig når vi har to punkter. Da finner vi først stigningstallet, og så bruker vi ett av punktene i ettpunktsformelen. For eksempel: punktene $(1, 5)$ og $(3, 9)$ gir stigningstall $a = \\frac{9 - 5}{3 - 1} = 2$. Med punktet $(1, 5)$ i ettpunktsformelen: $y - 5 = 2(x - 1)$, som gir $y = 2x + 3$.`,
    },
    {
      id: '1t-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er likningen til linjen som går gjennom punktet $(2, -3)$ med stigningstall $a = -2$?',
        options: [
          { id: 'a', text: '$y = -2x - 3$', isCorrect: false },
          { id: 'b', text: '$y = 2x + 1$', isCorrect: false },
          { id: 'c', text: '$y = -2x + 1$', isCorrect: true },
          { id: 'd', text: '$y = -2x + 7$', isCorrect: false },
        ],
        solution: 'Vi setter inn i ettpunktsformelen: $y - (-3) = -2(x - 2)$, altså $y + 3 = -2x + 4$, som gir $y = -2x + 1$.',
      },
    },
    {
      id: '1t-7-1-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-1-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-1-n-section3',
      type: 'text',
      content: `## Gjennomsnittlig vekstfart – stigningstall for funksjoner

Nå tar vi steget fra rette linjer til funksjoner som kurver. Tenk deg at du ser på grafen til $f(x) = x^2 - 1$. Denne grafen er ikke en rett linje – den buer. Men vi kan fortsatt snakke om hvor fort funksjonen endrer seg i et bestemt intervall.

**Gjennomsnittlig vekstfart** beskriver hvor mye funksjonsverdien i gjennomsnitt endrer seg per enhet $x$ i et gitt intervall. Formelt er det definert som:

$$\\text{Gjennomsnittlig vekstfart} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$$

Legg merke til at dette er nøyaktig den samme formelen som for stigningstall! Og det er ikke tilfeldig. Grafisk svarer den gjennomsnittlige vekstfarten til stigningstallet til linjen som går gjennom de to punktene $(x_1, f(x_1))$ og $(x_2, f(x_2))$ på grafen. Denne linjen har et eget navn – vi kaller den en **sekant**.

En sekant er altså en rett linje som skjærer grafen i to punkter. Stigningstallet til sekanten gir oss den gjennomsnittlige vekstfarten mellom disse to punktene.`,
    },
    {
      id: '1t-7-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-7-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kalles linjen som skjærer grafen til en funksjon i to punkter?',
        options: [
          { id: 'a', text: 'Tangent', isCorrect: false },
          { id: 'b', text: 'Normal', isCorrect: false },
          { id: 'c', text: 'Asymptote', isCorrect: false },
          { id: 'd', text: 'Sekant', isCorrect: true },
        ],
        solution: 'En **sekant** er en rett linje som skjærer grafen til en funksjon i to punkter. Stigningstallet til sekanten gir den gjennomsnittlige vekstfarten mellom de to punktene.',
      },
    },
    {
      id: '1t-7-1-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-1-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-1-n-section4',
      type: 'text',
      content: `## Regneeksempel – gjennomsnittlig vekstfart i praksis

La oss ta et konkret eksempel. Vi har funksjonen $f(x) = x^2 - 1$ og vil finne den gjennomsnittlige vekstfarten i intervallet $[-2, 1]$.

Vi trenger funksjonsverdiene i endepunktene. Først $f(-2) = (-2)^2 - 1 = 4 - 1 = 3$. Deretter $f(1) = 1^2 - 1 = 0$. Så vi har punktene $A = (-2, 3)$ og $B = (1, 0)$.

Nå setter vi inn i formelen: $\\frac{f(1) - f(-2)}{1 - (-2)} = \\frac{0 - 3}{1 + 2} = \\frac{-3}{3} = -1$.

Den gjennomsnittlige vekstfarten er altså $-1$. Det betyr at i gjennomsnitt synker funksjonen med 1 enhet for hver enhet $x$ øker i dette intervallet. Grafisk ser vi at sekanten gjennom $A$ og $B$ har negativt stigningstall – den peker nedover fra venstre mot høyre.

Det er viktig å forstå at dette er et *gjennomsnitt*. Funksjonen $x^2 - 1$ synker først og stiger deretter i dette intervallet, men totalt sett – fra $A$ til $B$ – er nettobevegelsen nedover.`,
    },
    {
      id: '1t-7-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-7-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'La $f(x) = x^2 - 3x + 2$. Hva er den gjennomsnittlige vekstfarten i intervallet $[1, 5]$?',
        options: [
          { id: 'a', text: '$3$', isCorrect: true },
          { id: 'b', text: '$0$', isCorrect: false },
          { id: 'c', text: '$-3$', isCorrect: false },
          { id: 'd', text: '$6$', isCorrect: false },
        ],
        solution: 'Vi finner $f(1) = 1 - 3 + 2 = 0$ og $f(5) = 25 - 15 + 2 = 12$. Gjennomsnittlig vekstfart $= \\frac{12 - 0}{5 - 1} = \\frac{12}{4} = 3$.',
      },
    },
    {
      id: '1t-7-1-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-1-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-1-n-section5',
      type: 'text',
      content: `## Vekstfart i virkeligheten – en ball i luften

Gjennomsnittlig vekstfart er ikke bare et abstrakt matematisk begrep – det dukker opp hele tiden i den virkelige verden. Tenk for eksempel på en ball som kastes opp i luften. Høyden $h$ over bakken etter $t$ sekunder kan beskrives med funksjonen $h(t) = -5t^2 + 20t + 1$.

Hva er gjennomsnittlig hastighet i det første sekundet, altså i intervallet $[0, 1]$? Vi regner: $h(0) = 1$ meter og $h(1) = -5 + 20 + 1 = 16$ meter. Gjennomsnittlig hastighet er $\\frac{16 - 1}{1 - 0} = 15$ m/s. Ballen beveger seg i snitt 15 meter per sekund oppover.

Hva med intervallet $[2, 3]$? Her er $h(2) = -20 + 40 + 1 = 21$ meter og $h(3) = -45 + 60 + 1 = 16$ meter. Gjennomsnittlig hastighet er $\\frac{16 - 21}{3 - 2} = -5$ m/s. Det negative fortegnet forteller oss at ballen er på vei ned i dette intervallet.

Gjennomsnittlig hastighet er faktisk bare et annet ord for gjennomsnittlig vekstfart når vi snakker om bevegelse. Og legg merke til noe interessant: vi kan få forskjellige svar for ulike intervaller, selv for den samme funksjonen. Det er fordi vi måler gjennomsnittlig endring, og den avhenger av *hvor* på grafen vi befinner oss.`,
    },
    {
      id: '1t-7-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-7-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'En ball har høydefunksjon $h(t) = -5t^2 + 20t + 1$. Hva er gjennomsnittlig hastighet i intervallet $[1, 2]$?',
        options: [
          { id: 'a', text: '$15$ m/s', isCorrect: false },
          { id: 'b', text: '$5$ m/s', isCorrect: true },
          { id: 'c', text: '$-5$ m/s', isCorrect: false },
          { id: 'd', text: '$10$ m/s', isCorrect: false },
        ],
        solution: 'Vi finner $h(1) = -5 + 20 + 1 = 16$ og $h(2) = -20 + 40 + 1 = 21$. Gjennomsnittlig hastighet $= \\frac{21 - 16}{2 - 1} = \\frac{5}{1} = 5$ m/s.',
      },
    },
    {
      id: '1t-7-1-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-7-1-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-7-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi bygget opp forståelsen steg for steg. Vi startet med **stigningstall**, som forteller hvor bratt en linje er. Formelen er $a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$, og den gir oss endringen i $y$ per enhet endring i $x$.

Deretter lærte vi **ettpunktsformelen** $y - y_0 = a(x - x_0)$, som lar oss finne likningen til en linje når vi kjenner stigningstallet og ett punkt. Denne formelen er spesielt nyttig når vi først beregner stigningstallet mellom to punkter og deretter setter opp likningen.

Til slutt introduserte vi **gjennomsnittlig vekstfart**, som er stigningstallet til **sekanten** mellom to punkter på en funksjons graf. Formelen $\\frac{f(x_2) - f(x_1)}{x_2 - x_1}$ gir oss gjennomsnittlig endring i funksjonsverdi per enhet endring i $x$. I praktiske sammenhenger, som bevegelse, tilsvarer dette gjennomsnittshastigheten. Gjennomsnittlig vekstfart avhenger av hvilket intervall vi ser på, fordi funksjonen kan oppføre seg ulikt i forskjellige deler av definisjonsområdet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2 NARRATIV: Momentan vekstfart
// ============================================================================

export const CHAPTER_1T_7_2_NARRATIV: TextbookChapter = {
  id: '1t-7-2-narrativ',
  courseId: '1t',
  chapterNumber: '7.2',
  title: 'Momentan vekstfart',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om øyeblikkelig endring – hvordan tangenten avslører vekstfarten i et enkelt punkt på grafen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forstå begrepet momentan vekstfart',
    'se sammenhengen mellom momentan vekstfart og tangent',
    'bruke tangenten til å finne momentan vekstfart grafisk',
  ],
  linkedChapterId: '1t-7-2',
  content: [
    {
      id: '1t-7-2-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-2-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-7-2-n-intro',
      type: 'text',
      content: `## Farten akkurat nå

I forrige kapittel lærte vi å måle gjennomsnittlig vekstfart mellom to punkter på en graf. Men tenk deg at du sitter i en bil og ser på speedometeret. Det viser ikke gjennomsnittsfarten din over den siste timen – det viser farten din *akkurat nå*, i dette øyeblikket.

Denne ideen – å måle vekstfart i et *enkelt punkt* i stedet for over et intervall – er en av de mest kraftfulle ideene i matematikken. Vi kaller det **momentan vekstfart**, og det er dette kapittelet handler om. For å forstå momentan vekstfart trenger vi et nytt begrep: **tangenten** til en graf.`,
    },
    {
      id: '1t-7-2-n-section1',
      type: 'text',
      content: `## Tangenten – linjen som bare berører

En **tangent** er en rett linje som berører grafen til en funksjon i ett punkt og har *samme retning* som grafen i det punktet. Forestill deg at du legger en linjal langs kurven akkurat i ett punkt – linjalen skal ligge slik at den «følger» kurven i det punktet uten å kutte gjennom den.

Stigningstallet til denne tangentlinjen er det vi kaller den **momentane vekstfarten** til funksjonen i det punktet. Så mens gjennomsnittlig vekstfart handler om stigningstallet til en *sekant* (linje gjennom to punkter), handler momentan vekstfart om stigningstallet til en *tangent* (linje som berører i ett punkt).

For å finne den momentane vekstfarten grafisk gjør du altså to ting: først tegner du tangenten til grafen i det aktuelle punktet, og deretter finner du stigningstallet til denne tangentlinjen. For å finne stigningstallet trenger du to punkter på tangentlinjen – og da bruker du den vanlige formelen $a = \\frac{y_2 - y_1}{x_2 - x_1}$.

La oss ta et eksempel. Funksjonen $f(x) = x^2 - 1$ har en tangent i punktet $(2, 3)$. Denne tangenten går også gjennom punktet $(3, 7)$. Stigningstallet blir $a = \\frac{7 - 3}{3 - 2} = 4$. Altså er den momentane vekstfarten til $f$ når $x = 2$ lik $4$.`,
    },
    {
      id: '1t-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Grafen til en funksjon $f$ har en tangent i punktet $(3, 5)$. Tangenten går også gjennom $(5, 11)$. Hva er den momentane vekstfarten til $f$ når $x = 3$?',
        options: [
          { id: 'a', text: '$2$', isCorrect: false },
          { id: 'b', text: '$3$', isCorrect: true },
          { id: 'c', text: '$4$', isCorrect: false },
          { id: 'd', text: '$6$', isCorrect: false },
        ],
        solution: 'Stigningstallet til tangenten er $a = \\frac{11 - 5}{5 - 3} = \\frac{6}{2} = 3$. Momentan vekstfart er stigningstallet til tangenten, altså $3$.',
      },
    },
    {
      id: '1t-7-2-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-2-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-2-n-section2',
      type: 'text',
      content: `## Sekant og tangent – en viktig sammenheng

Det er en dyp sammenheng mellom sekanten og tangenten som er verdt å forstå ordentlig. Vi vet at en sekant går gjennom to punkter på grafen, og at stigningstallet til sekanten gir gjennomsnittlig vekstfart. Men hva skjer hvis vi lar de to punktene nærme seg hverandre?

Forestill deg at du har to punkter på grafen: $A = (a, f(a))$ og $B = (a + h, f(a + h))$, der $h$ er avstanden mellom $x$-verdiene. Gjennomsnittlig vekstfart mellom disse to punktene er:

$$\\frac{f(a + h) - f(a)}{h}$$

Nå lar vi $h$ bli mindre og mindre. Punkt $B$ kryper nærmere og nærmere punkt $A$. Sekanten begynner å dreie seg, og den nærmer seg tangenten. Når $h$ er uendelig liten – altså når $h$ *går mot null* – faller sekanten sammen med tangenten. Det er dette vi kaller en **grenseverdi**.

Den momentane vekstfarten er altså grenseverdien av den gjennomsnittlige vekstfarten når intervallet krymper til null. Denne tanken – å la noe bli uendelig lite – er grunnlaget for hele den grenen av matematikk som kalles *kalkulus* eller *analyse*.`,
    },
    {
      id: '1t-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva skjer med sekanten når de to punktene på grafen nærmer seg hverandre?',
        options: [
          { id: 'a', text: 'Sekanten forsvinner', isCorrect: false },
          { id: 'b', text: 'Sekanten blir en vertikal linje', isCorrect: false },
          { id: 'c', text: 'Sekanten nærmer seg tangenten', isCorrect: true },
          { id: 'd', text: 'Sekanten blir horisontal', isCorrect: false },
        ],
        solution: 'Når de to punktene på grafen nærmer seg hverandre, vil sekanten nærme seg tangenten. I grensen – når de to punktene «smelter sammen» – blir sekanten til tangenten.',
      },
    },
    {
      id: '1t-7-2-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-2-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-2-n-section3',
      type: 'text',
      content: `## Grafisk bestemmelse av momentan vekstfart

I praksis kan du finne momentan vekstfart grafisk ved å tegne tangenten til grafen i det aktuelle punktet og deretter lese av stigningstallet. Metoden fungerer slik:

Først finner du punktet på grafen der du vil vite vekstfarten. Så tegner du tangenten – altså den rette linjen som berører grafen i dette punktet og følger kurvens retning. Til slutt velger du to punkter på tangentlinjen og beregner stigningstallet.

La oss si at du har funksjonen $g(x) = x^2 + 2x$ og vil finne momentan vekstfart når $x = 1$. Funksjonsverdien er $g(1) = 1 + 2 = 3$, så punktet er $(1, 3)$. Hvis du tegner tangenten i GeoGebra, kan du bruke kommandoen Tangent og deretter finne stigningstallet. Svaret viser seg å være $4$.

Det er nyttig å vite at du også kan bruke digitale verktøy som GeoGebra for å gjøre dette raskt og presist. Kommandoen Tangent(punkt, f) tegner tangenten, og Stigning(linje) gir deg stigningstallet direkte.`,
    },
    {
      id: '1t-7-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-7-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva representerer stigningstallet til tangenten i et punkt på grafen?',
        options: [
          { id: 'a', text: 'Funksjonsverdien i det punktet', isCorrect: false },
          { id: 'b', text: 'Gjennomsnittlig vekstfart over hele definisjonsområdet', isCorrect: false },
          { id: 'c', text: 'Nullpunktet til funksjonen', isCorrect: false },
          { id: 'd', text: 'Den momentane vekstfarten til funksjonen i det punktet', isCorrect: true },
        ],
        solution: 'Stigningstallet til tangenten i et punkt er den momentane vekstfarten til funksjonen i det punktet. Det forteller oss hvor fort funksjonen endrer seg akkurat der.',
      },
    },
    {
      id: '1t-7-2-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-2-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-2-n-section4',
      type: 'text',
      content: `## Tangentlikning – fra berøringspunkt til formel

Når du vet den momentane vekstfarten i et punkt, kan du også skrive opp likningen for tangenten. Du bruker ganske enkelt ettpunktsformelen fra forrige kapittel.

Si at funksjonen $f$ har momentan vekstfart $3$ i punktet $(3, 5)$. Da er tangentlikningen $y - 5 = 3(x - 3)$, altså $y = 3x - 4$. Det fine er at alt vi har lært om stigningstall og ettpunktsformelen kobles direkte inn her.

La oss ta et fullstendig eksempel med en bil. Avstanden $s$ (i km) fra startpunktet etter $t$ timer er $s(t) = t^2 + 4t$. Vi vil finne momentanfarten etter $2$ timer. Avstanden etter $2$ timer er $s(2) = 4 + 8 = 12$ km. For å finne momentanfarten trenger vi stigningstallet til tangenten i dette punktet, som vi kan finne med GeoGebra. Svaret er $8$ km/t. Vi kan også beregne gjennomsnittsfarten mellom $t = 1$ og $t = 3$: $\\frac{s(3) - s(1)}{3 - 1} = \\frac{21 - 5}{2} = 8$ km/t. I dette tilfellet er gjennomsnittsfarten tilfeldigvis lik momentanfarten, men det er ikke alltid slik.`,
    },
    {
      id: '1t-7-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-7-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Funksjonen $f$ har momentan vekstfart $5$ i punktet $(2, 7)$. Hva er likningen for tangenten?',
        options: [
          { id: 'a', text: '$y = 5x + 7$', isCorrect: false },
          { id: 'b', text: '$y = 5x - 3$', isCorrect: true },
          { id: 'c', text: '$y = 2x + 3$', isCorrect: false },
          { id: 'd', text: '$y = 7x - 5$', isCorrect: false },
        ],
        solution: 'Vi bruker ettpunktsformelen med stigningstall $5$ og punkt $(2, 7)$: $y - 7 = 5(x - 2)$, altså $y - 7 = 5x - 10$, som gir $y = 5x - 3$.',
      },
    },
    {
      id: '1t-7-2-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-2-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-2-n-section5',
      type: 'text',
      content: `## Fra speedometer til matematikk – tolkning av momentan vekstfart

La oss dvele ved hva momentan vekstfart egentlig betyr i forskjellige sammenhenger. Vi har allerede nevnt speedometeret i bilen, men det finnes mange andre eksempler.

Hvis $f(t)$ beskriver temperaturen i grader Celsius som funksjon av tid i timer, forteller den momentane vekstfarten oss hvor mange grader temperaturen endrer seg per time akkurat i det øyeblikket. En momentan vekstfart på $2$ betyr at temperaturen stiger med $2$ grader per time akkurat nå.

Hvis $f(t)$ beskriver antall bakterier i en petriskål etter $t$ timer, forteller den momentane vekstfarten oss hvor fort bakteriepopulasjonen vokser i et bestemt øyeblikk.

Nøkkelforskjellen mellom gjennomsnittlig og momentan vekstfart kan oppsummeres slik: gjennomsnittlig vekstfart gir oss den gjennomsnittlige endringen over et intervall, mens momentan vekstfart gir oss den presise endringen i et enkelt øyeblikk. Gjennomsnittlig vekstfart svarer til stigningstallet til en **sekant**, mens momentan vekstfart svarer til stigningstallet til en **tangent**. Tangenten er det vi får når sekantens to punkter smelter sammen til ett.`,
    },
    {
      id: '1t-7-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-7-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Gjennomsnittlig vekstfart svarer til stigningstallet til en sekant. Hva svarer momentan vekstfart til?',
        options: [
          { id: 'a', text: 'Stigningstallet til en tangent', isCorrect: true },
          { id: 'b', text: 'Stigningstallet til en sekant', isCorrect: false },
          { id: 'c', text: 'Nullpunktet til funksjonen', isCorrect: false },
          { id: 'd', text: 'Arealet under grafen', isCorrect: false },
        ],
        solution: 'Momentan vekstfart er stigningstallet til **tangenten** til grafen i det aktuelle punktet. Tangenten berører grafen i bare ett punkt og har samme retning som grafen der.',
      },
    },
    {
      id: '1t-7-2-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-7-2-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-7-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi gått fra gjennomsnittlig vekstfart til **momentan vekstfart** – vekstfarten i et enkelt punkt. Grafisk er momentan vekstfart stigningstallet til **tangenten** i punktet, altså den rette linjen som berører grafen og følger dens retning akkurat der.

Vi har sett den viktige sammenhengen mellom sekant og tangent: når de to punktene på sekanten nærmer seg hverandre og avstanden $h$ går mot null, nærmer sekanten seg tangenten. Momentan vekstfart er dermed **grenseverdien** av gjennomsnittlig vekstfart når intervallet krymper mot null.

For å finne momentan vekstfart grafisk tegner vi tangenten og beregner stigningstallet. Vi kan bruke ettpunktsformelen til å skrive opp tangentlikningen. I praktiske sammenhenger tilsvarer momentan vekstfart for eksempel øyeblikkelig hastighet – det speedometeret viser, ikke gjennomsnittsfarten over hele turen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3 NARRATIV: Den deriverte
// ============================================================================

export const CHAPTER_1T_7_3_NARRATIV: TextbookChapter = {
  id: '1t-7-3-narrativ',
  courseId: '1t',
  chapterNumber: '7.3',
  title: 'Den deriverte',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om den deriverte funksjonen – hvordan potensregelen, konstantregelen og sumregelen lar deg finne momentan vekstfart overalt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå den deriverte som funksjon for momentan vekstfart',
    'derivere konstante og lineære funksjoner',
    'bruke potensregelen til å derivere polynomfunksjoner',
  ],
  linkedChapterId: '1t-7-3',
  content: [
    {
      id: '1t-7-3-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-3-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-7-3-n-intro',
      type: 'text',
      content: `## En formel for vekstfart overalt

I de to foregående kapitlene har vi funnet vekstfart i enkeltpunkter – enten grafisk ved å tegne tangenter, eller ved å beregne stigningstall. Men hva om vi kunne ha en *formel* som gir oss den momentane vekstfarten for *alle* verdier av $x$ på én gang?

Det er nettopp det **den deriverte** gir oss. Den deriverte av en funksjon $f(x)$ er en helt ny funksjon, som vi skriver $f'(x)$ (leses «f derivert av x»). Denne nye funksjonen forteller oss stigningstallet til tangenten – altså den momentane vekstfarten – for enhver $x$-verdi. I dette kapittelet skal vi lære regler som lar oss finne $f'(x)$ raskt og effektivt.`,
    },
    {
      id: '1t-7-3-n-section1',
      type: 'text',
      content: `## Hva den deriverte forteller oss

Før vi begynner å regne, la oss forstå hva den deriverte egentlig betyr. Hvis du har en funksjon $f(x)$ og dens deriverte $f'(x)$, så gir $f'(a)$ deg stigningstallet til tangenten til grafen av $f$ i punktet $(a, f(a))$. Med andre ord: $f'(a)$ er den momentane vekstfarten til $f$ når $x = a$.

Men den deriverte forteller oss enda mer. Fortegnet til $f'(x)$ avslører om funksjonen stiger eller synker. Når $f'(x) > 0$, er funksjonen $f$ **stigende** – grafen peker oppover. Når $f'(x) < 0$, er funksjonen **synkende** – grafen peker nedover. Og når $f'(x) = 0$, har grafen en horisontal tangent. Det betyr at vi er ved et **toppunkt**, et **bunnpunkt**, eller et vendepunkt.

Tenk deg at du kjører bil langs en vei som svinger opp og ned. Den deriverte er som et instrument som forteller deg om veien peker oppover, nedover, eller om du er på toppen av en bakke akkurat nå. Det er et ekstremt nyttig verktøy.`,
    },
    {
      id: '1t-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva betyr det at $f\'(x) < 0$ i et punkt?',
        options: [
          { id: 'a', text: 'Funksjonen er stigende', isCorrect: false },
          { id: 'b', text: 'Funksjonen har et toppunkt', isCorrect: false },
          { id: 'c', text: 'Funksjonen er synkende', isCorrect: true },
          { id: 'd', text: 'Funksjonen har verdi 0', isCorrect: false },
        ],
        solution: 'Når $f\'(x) < 0$, er den momentane vekstfarten negativ. Det betyr at funksjonen $f$ er **synkende** i det punktet – grafen peker nedover.',
      },
    },
    {
      id: '1t-7-3-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-3-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-3-n-section2',
      type: 'text',
      content: `## Konstantregelen og lineære funksjoner

La oss starte med de enkleste funksjonene. Hva er den deriverte av en **konstant funksjon** $f(x) = a$, for eksempel $f(x) = 5$? Grafen er en horisontal linje. Stigningstallet til en horisontal linje er alltid $0$, uansett hvor du befinner deg. Derfor er $f'(x) = 0$.

Det gir mening intuitivt: en konstant funksjon endrer seg aldri, så vekstfarten er null overalt. Denne regelen kalles **konstantregelen**.

Hva med en **lineær funksjon** $f(x) = ax + b$? Grafen er en rett linje med stigningstall $a$. Tangenten i ethvert punkt er selve linjen, og stigningstallet er $a$ overalt. Derfor er $f'(x) = a$.

For eksempel: $f(x) = 4x - 2$ gir $f'(x) = 4$. Funksjonen $f(x) = x + 9$ (som er det samme som $1 \\cdot x + 9$) gir $f'(x) = 1$. Og $f(x) = 3$ gir $f'(x) = 0$, fordi det er en konstant.

Disse to reglene er utgangspunktet, og de er lette å huske: konstanter forsvinner, og stigningstallet til en lineær funksjon er den deriverte.`,
    },
    {
      id: '1t-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er $f\'(x)$ når $f(x) = -7x + 10$?',
        options: [
          { id: 'a', text: '$10$', isCorrect: false },
          { id: 'b', text: '$-7$', isCorrect: true },
          { id: 'c', text: '$-7x$', isCorrect: false },
          { id: 'd', text: '$0$', isCorrect: false },
        ],
        solution: '$f(x) = -7x + 10$ er en lineær funksjon med stigningstall $-7$. Den deriverte av en lineær funksjon er stigningstallet, så $f\'(x) = -7$.',
      },
    },
    {
      id: '1t-7-3-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-3-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-3-n-section3',
      type: 'text',
      content: `## Potensregelen – den viktigste derivasjonsregelen

Nå kommer vi til regelen som virkelig åpner dørene: **potensregelen**. Den forteller oss hvordan vi deriverer funksjoner som $x^2$, $x^3$, $x^5$ og så videre. Regelen er:

$$f(x) = x^n \\quad \\Rightarrow \\quad f'(x) = n \\cdot x^{n-1}$$

En enkel huskeregel er «ta ned og trekk fra én»: ta eksponenten *ned* foran som koeffisient, og trekk fra *én* fra eksponenten. For eksempel: $f(x) = x^5$ gir $f'(x) = 5x^4$. Eksponenten $5$ flyttes ned, og den nye eksponenten blir $5 - 1 = 4$.

La oss prøve med $f(x) = x^2$. Da er $f'(x) = 2x^{2-1} = 2x$. Det betyr at den momentane vekstfarten til $x^2$ i et punkt er $2x$. Når $x = 3$, er vekstfarten $2 \\cdot 3 = 6$. Når $x = -1$, er vekstfarten $2 \\cdot (-1) = -2$.

Hva med koeffisienter foran? Hvis $f(x) = 3x^4$, ganger vi koeffisienten med eksponenten: $f'(x) = 3 \\cdot 4 \\cdot x^3 = 12x^3$. Konstanten «henger med» gjennom derivasjonen.`,
    },
    {
      id: '1t-7-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-7-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er $f\'(x)$ når $f(x) = x^3$?',
        options: [
          { id: 'a', text: '$x^2$', isCorrect: false },
          { id: 'b', text: '$3x$', isCorrect: false },
          { id: 'c', text: '$3x^2$', isCorrect: true },
          { id: 'd', text: '$3x^3$', isCorrect: false },
        ],
        solution: 'Med potensregelen: $f(x) = x^3$ gir $f\'(x) = 3 \\cdot x^{3-1} = 3x^2$. Vi tar eksponenten 3 ned som koeffisient og reduserer eksponenten med 1.',
      },
    },
    {
      id: '1t-7-3-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-3-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-3-n-section4',
      type: 'text',
      content: `## Sumregelen – derivere ledd for ledd

Når funksjonen vår er en sum av flere ledd, bruker vi **sumregelen**: vi deriverer hvert ledd for seg. Formelt: $(f + g)'(x) = f'(x) + g'(x)$. Tilsvarende for differanser: $(f - g)'(x) = f'(x) - g'(x)$.

La oss bruke dette på et polynom. Ta $f(x) = 3x^4 - 2x + 5$. Vi deriverer ledd for ledd: $3x^4$ gir $3 \\cdot 4x^3 = 12x^3$. Leddet $-2x$ er lineært med stigningstall $-2$, så det gir $-2$. Og konstanten $5$ gir $0$. Til sammen: $f'(x) = 12x^3 - 2$.

Her er et viktig poeng: konstanter «forsvinner» ved derivasjon. Om funksjonen din er $x^2 + 100$ eller $x^2 - 7$, blir den deriverte $2x$ i begge tilfeller. Det er fordi konstanter ikke bidrar til endring – de bare løfter eller senker hele grafen uten å endre brattheten.

La oss ta enda et eksempel. Vi har $f(x) = 2x^2 - 5x$ og vil finne $f'(-2)$. Først deriverer vi: $f'(x) = 4x - 5$. Deretter setter vi inn $x = -2$: $f'(-2) = 4 \\cdot (-2) - 5 = -8 - 5 = -13$. Den momentane vekstfarten er altså $-13$ når $x = -2$, som betyr at funksjonen synker raskt.`,
    },
    {
      id: '1t-7-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-7-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'La $f(x) = x^2 + 2x - 3$. Hva er $f\'(x)$?',
        options: [
          { id: 'a', text: '$2x + 2$', isCorrect: true },
          { id: 'b', text: '$x^2 + 2$', isCorrect: false },
          { id: 'c', text: '$2x$', isCorrect: false },
          { id: 'd', text: '$2x + 2 - 3$', isCorrect: false },
        ],
        solution: 'Vi deriverer ledd for ledd: $x^2$ gir $2x$, leddet $2x$ gir $2$, og konstanten $-3$ gir $0$. Til sammen: $f\'(x) = 2x + 2$.',
      },
    },
    {
      id: '1t-7-3-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-3-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-3-n-section5',
      type: 'text',
      content: `## Den deriverte i praksis – ballen igjen

La oss vende tilbake til ballen som kastes opp i luften. Høydefunksjonen er $h(t) = -5t^2 + 20t + 1$. Vi kan nå finne den deriverte: $h'(t) = -10t + 20$.

Hva betyr denne deriverte fysisk? Den gir oss **farten** til ballen som funksjon av tid. Farten $h'(t) = -10t + 20$ forteller oss hvor fort ballen beveger seg oppover (eller nedover) i ethvert øyeblikk.

Når $t = 0$: $h'(0) = 20$ m/s. Ballen starter med fart 20 meter per sekund oppover. Når $t = 2$: $h'(2) = -10 \\cdot 2 + 20 = 0$ m/s. Farten er null! Ballen er på sitt høyeste punkt og er i ferd med å snu. Når $t = 3$: $h'(3) = -10 \\cdot 3 + 20 = -10$ m/s. Farten er $-10$ m/s, altså beveger ballen seg 10 meter per sekund nedover.

Vi kan også finne *når* ballen er på toppen ved å sette $h'(t) = 0$: $-10t + 20 = 0$, som gir $t = 2$ sekunder. Deretter finner vi *høyden* på toppen: $h(2) = -20 + 40 + 1 = 21$ meter. Derivasjon gir oss altså et kraftig verktøy for å analysere bevegelse.`,
    },
    {
      id: '1t-7-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-7-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'La $f(x) = \\frac{7}{2}x^2 - 5x$. Hva er $f\'(2)$?',
        options: [
          { id: 'a', text: '$4$', isCorrect: false },
          { id: 'b', text: '$9$', isCorrect: true },
          { id: 'c', text: '$7$', isCorrect: false },
          { id: 'd', text: '$12$', isCorrect: false },
        ],
        solution: 'Vi deriverer: $f\'(x) = \\frac{7}{2} \\cdot 2x - 5 = 7x - 5$. Deretter setter vi inn $x = 2$: $f\'(2) = 7 \\cdot 2 - 5 = 14 - 5 = 9$.',
      },
    },
    {
      id: '1t-7-3-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-7-3-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-7-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært at **den deriverte** $f'(x)$ er en ny funksjon som gir oss den momentane vekstfarten – stigningstallet til tangenten – for enhver $x$-verdi. Vi har tre grunnleggende regler for derivasjon.

**Konstantregelen** sier at den deriverte av en konstant er $0$: konstanter endrer seg ikke, så vekstfarten er null. **Lineære funksjoner** $f(x) = ax + b$ har derivert lik stigningstallet $a$, fordi en rett linje har konstant stigningstall overalt.

**Potensregelen** er nøkkelen til å derivere de fleste uttrykkene vi møter: $f(x) = x^n$ gir $f'(x) = n \\cdot x^{n-1}$. Husk «ta ned og trekk fra én». Med **sumregelen** deriverer vi summer ledd for ledd. Konstantmultiplikasjon betyr at koeffisienter «henger med» gjennom derivasjonen.

Fortegnet til den deriverte forteller oss om funksjonen stiger ($f' > 0$), synker ($f' < 0$), eller har en horisontal tangent ($f' = 0$). I praktiske sammenhenger gir den deriverte av posisjon oss fart, og $f'(a)$ gir den momentane vekstfarten i punktet $x = a$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5 NARRATIV: Definisjonen av derivasjon og numerisk derivasjon
// ============================================================================

export const CHAPTER_1T_7_5_NARRATIV: TextbookChapter = {
  id: '1t-7-5-narrativ',
  courseId: '1t',
  chapterNumber: '7.5',
  title: 'Definisjonen av derivasjon og numerisk derivasjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om grenseverdier og den formelle definisjonen av den deriverte – og hvordan numerisk derivasjon gir tilnærmede svar.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå definisjonen av den deriverte som en grenseverdi',
    'bruke definisjonen til å derivere enkle funksjoner',
    'forstå numerisk derivasjon og Newton-kvotienten',
  ],
  linkedChapterId: '1t-7-5',
  content: [
    {
      id: '1t-7-5-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-5-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-7-5-n-intro',
      type: 'text',
      content: `## Bak kulissene i derivasjon

Vi har nå lært å derivere med potensregelen, sumregelen og konstantregelen. Men har du lurt på *hvorfor* disse reglene fungerer? Hva er det egentlig som skjer matematisk når vi deriverer?

I dette kapittelet går vi bak kulissene og ser på **den formelle definisjonen** av den deriverte. Vi skal forstå hva en **grenseverdi** er, bli kjent med **Newton-kvotienten** (også kalt **differanskvotienten**), og lære om **numerisk derivasjon** – en metode for å finne tilnærmede verdier av den deriverte. Selv om de konkrete reglene vi har lært er raske og praktiske, er det verdifullt å forstå fundamentet de hviler på.`,
    },
    {
      id: '1t-7-5-n-section1',
      type: 'text',
      content: `## Newton-kvotienten – gjennomsnittlig vekstfart i ny drakt

Vi begynner med noe kjent. Husk at gjennomsnittlig vekstfart mellom to punkter er $\\frac{f(x_2) - f(x_1)}{x_2 - x_1}$. Nå skriver vi det på en litt annen måte. La oss si at vi starter i punktet $x$ og beveger oss en liten avstand $h$ til høyre, slik at det andre punktet er $x + h$. Da blir gjennomsnittlig vekstfart:

$$\\frac{f(x + h) - f(x)}{h}$$

Denne brøken kalles **Newton-kvotienten** eller **differanskvotienten**. Den gir stigningstallet til sekanten mellom punktene $(x, f(x))$ og $(x + h, f(x + h))$.

La oss ta et eksempel. Med $f(x) = x^2$, $x = 2$ og $h = 0{,}1$ får vi: $\\frac{f(2{,}1) - f(2)}{0{,}1} = \\frac{4{,}41 - 4}{0{,}1} = \\frac{0{,}41}{0{,}1} = 4{,}1$. Vi vet at den eksakte deriverte er $f'(2) = 2 \\cdot 2 = 4$, så $4{,}1$ er en god tilnærming – ganske nær, men ikke helt nøyaktig.

Hva skjer hvis vi gjør $h$ enda mindre? Med $h = 0{,}01$: $\\frac{f(2{,}01) - f(2)}{0{,}01} = \\frac{4{,}0401 - 4}{0{,}01} = 4{,}01$. Enda nærmere! Jo mindre $h$, desto bedre tilnærming.`,
    },
    {
      id: '1t-7-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-7-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva kalles brøken $\\frac{f(x + h) - f(x)}{h}$?',
        options: [
          { id: 'a', text: 'Potensregelen', isCorrect: false },
          { id: 'b', text: 'Tangentlikningen', isCorrect: false },
          { id: 'c', text: 'Stigningstallet', isCorrect: false },
          { id: 'd', text: 'Newton-kvotienten', isCorrect: true },
        ],
        solution: 'Brøken $\\frac{f(x + h) - f(x)}{h}$ kalles **Newton-kvotienten** (eller differanskvotienten). Den gir den gjennomsnittlige vekstfarten mellom $x$ og $x + h$.',
      },
    },
    {
      id: '1t-7-5-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-5-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-5-n-section2',
      type: 'text',
      content: `## Definisjonen av den deriverte – grenseverdien

Vi har sett at Newton-kvotienten gir bedre og bedre tilnærminger til den deriverte jo mindre $h$ vi velger. Den formelle definisjonen sier at den deriverte er det Newton-kvotienten *stabiliserer seg på* når $h$ går mot null. Vi skriver det med grenseverdi-symbolet:

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$

Les dette som: «grenseverdien av Newton-kvotienten når $h$ går mot null». Merk at vi ikke kan sette $h = 0$ direkte, for da ville vi delt på null. I stedet lar vi $h$ bli *vilkårlig nær* null og ser hva brøken nærmer seg.

La oss bevise at den deriverte av $x^2$ er $2x$ ved å bruke definisjonen. Vi starter med Newton-kvotienten: $\\frac{(x + h)^2 - x^2}{h}$. Vi utvider $(x + h)^2 = x^2 + 2xh + h^2$. Da får vi $\\frac{x^2 + 2xh + h^2 - x^2}{h} = \\frac{2xh + h^2}{h} = \\frac{h(2x + h)}{h} = 2x + h$. Når $h \\to 0$, forsvinner $h$-leddet, og vi sitter igjen med $f'(x) = 2x$.

Dette er altså *grunnen* til at potensregelen fungerer for $x^2$. Lignende utregninger kan gjøres for høyere potenser, og de gir alltid potensregelen.`,
    },
    {
      id: '1t-7-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-7-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er den formelle definisjonen av den deriverte?',
        options: [
          { id: 'a', text: '$f\'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$', isCorrect: true },
          { id: 'b', text: '$f\'(x) = n \\cdot x^{n-1}$', isCorrect: false },
          { id: 'c', text: '$f\'(x) = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$', isCorrect: false },
          { id: 'd', text: '$f\'(x) = f(x + 1) - f(x)$', isCorrect: false },
        ],
        solution: 'Den formelle definisjonen er $f\'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$. Det er grenseverdien av Newton-kvotienten når steglengden $h$ går mot null.',
      },
    },
    {
      id: '1t-7-5-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-5-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-5-n-section3',
      type: 'text',
      content: `## Derivasjon fra definisjonen – flere eksempler

La oss bruke definisjonen på noen flere funksjoner for å få trening. Ta $f(x) = 3x$. Newton-kvotienten blir $\\frac{3(x + h) - 3x}{h} = \\frac{3x + 3h - 3x}{h} = \\frac{3h}{h} = 3$. Når $h \\to 0$, er svaret fortsatt $3$. Altså er $f'(x) = 3$. Det stemmer – den deriverte av en lineær funksjon er stigningstallet.

Nå et litt vanskeligere eksempel: $f(x) = x^2 + 1$. Newton-kvotienten er $\\frac{(x + h)^2 + 1 - x^2 - 1}{h} = \\frac{x^2 + 2xh + h^2 + 1 - x^2 - 1}{h} = \\frac{2xh + h^2}{h} = 2x + h$. Når $h \\to 0$, får vi $f'(x) = 2x$. Legg merke til at konstanten $+1$ ikke påvirker den deriverte – den «forsvant» i utregningen.

Et tredje eksempel: $f(x) = 2x^2 - x$. Newton-kvotienten gir $\\frac{2(x+h)^2 - (x+h) - 2x^2 + x}{h}$. Vi utvider og forenkler: $\\frac{2x^2 + 4xh + 2h^2 - x - h - 2x^2 + x}{h} = \\frac{4xh + 2h^2 - h}{h} = 4x + 2h - 1$. Grenseverdien når $h \\to 0$ gir $f'(x) = 4x - 1$.`,
    },
    {
      id: '1t-7-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-7-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Bruk definisjonen av den deriverte på $f(x) = x^2 + 1$. Hva er $f\'(x)$?',
        options: [
          { id: 'a', text: '$x^2$', isCorrect: false },
          { id: 'b', text: '$2x + 1$', isCorrect: false },
          { id: 'c', text: '$2x$', isCorrect: true },
          { id: 'd', text: '$x$', isCorrect: false },
        ],
        solution: 'Newton-kvotienten gir $\\frac{(x+h)^2 + 1 - x^2 - 1}{h} = \\frac{2xh + h^2}{h} = 2x + h$. Når $h \\to 0$ sitter vi igjen med $f\'(x) = 2x$. Konstanten $+1$ påvirker ikke den deriverte.',
      },
    },
    {
      id: '1t-7-5-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-5-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-5-n-section4',
      type: 'text',
      content: `## Numerisk derivasjon – tilnærminger i praksis

Noen ganger er det vanskelig eller umulig å finne den eksakte deriverte. Kanskje funksjonen er for komplisert, eller kanskje du bare har en tabell med tallverdier og ingen formel. Da bruker vi **numerisk derivasjon**, som gir en tilnærmet verdi.

Den enkleste metoden er å bruke Newton-kvotienten direkte med en liten verdi av $h$: $f'(x) \\approx \\frac{f(x + h) - f(x)}{h}$. Dette kalles **framoverdifferansen** fordi vi ser «fremover» fra $x$ til $x + h$.

Men det finnes en bedre metode: **sentraldifferansen**. I stedet for å se bare fremover, ser vi litt til begge sider:

$$f'(x) \\approx \\frac{f(x + h) - f(x - h)}{2h}$$

Sentraldifferansen er mer nøyaktig fordi den balanserer feilen på begge sider av punktet. La oss prøve: $f(x) = x^2$, $x = 3$, $h = 0{,}1$. Sentraldifferansen gir $\\frac{f(3{,}1) - f(2{,}9)}{0{,}2} = \\frac{9{,}61 - 8{,}41}{0{,}2} = \\frac{1{,}2}{0{,}2} = 6$. Den eksakte verdien er $f'(3) = 6$, så sentraldifferansen traff eksakt her!`,
    },
    {
      id: '1t-7-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-7-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilken metode for numerisk derivasjon er generelt mest nøyaktig?',
        options: [
          { id: 'a', text: 'Framoverdifferansen', isCorrect: false },
          { id: 'b', text: 'Bakoverdifferansen', isCorrect: false },
          { id: 'c', text: 'Sentraldifferansen', isCorrect: true },
          { id: 'd', text: 'De er alle like nøyaktige', isCorrect: false },
        ],
        solution: '**Sentraldifferansen** $\\frac{f(x+h) - f(x-h)}{2h}$ er generelt mer nøyaktig enn framoverdifferansen fordi den balanserer feilen symmetrisk rundt punktet $x$.',
      },
    },
    {
      id: '1t-7-5-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-5-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-5-n-section5',
      type: 'text',
      content: `## Sammenhengen mellom alt vi har lært

La oss stoppe opp og se det store bildet. Vi har nå tre måter å tenke på den deriverte:

Den **grafiske** tilnærmingen: den deriverte er stigningstallet til tangenten. Vi kan tegne tangenten og lese av stigningstallet. Denne metoden gir god intuisjon, men er ikke alltid nøyaktig.

Den **algebraiske** tilnærmingen: vi bruker derivasjonsreglene (potensregelen, sumregelen osv.) til å finne et eksakt uttrykk for $f'(x)$. Denne metoden er rask og gir nøyaktige svar for funksjoner vi kjenner reglene for.

Den **numeriske** tilnærmingen: vi bruker Newton-kvotienten eller sentraldifferansen med en liten $h$ for å tilnærme $f'(x)$. Denne metoden fungerer selv når vi ikke har en formel for funksjonen, bare datapunkter.

Alle tre tilnærmingene er nyttige i ulike situasjoner. Derivasjonsreglene er det du bruker mest til daglig, men den formelle definisjonen forklarer *hvorfor* reglene virker, og numerisk derivasjon er uvurderlig når du jobber med data fra virkeligheten.`,
    },
    {
      id: '1t-7-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-7-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'La $f(x) = x^2$. Bruk framoverdifferansen med $x = 3$ og $h = 0{,}1$. Hva får du?',
        options: [
          { id: 'a', text: '$6{,}1$', isCorrect: true },
          { id: 'b', text: '$6$', isCorrect: false },
          { id: 'c', text: '$5{,}9$', isCorrect: false },
          { id: 'd', text: '$6{,}01$', isCorrect: false },
        ],
        solution: 'Framoverdifferansen: $\\frac{f(3{,}1) - f(3)}{0{,}1} = \\frac{9{,}61 - 9}{0{,}1} = \\frac{0{,}61}{0{,}1} = 6{,}1$. Den eksakte verdien er $f\'(3) = 6$, så $6{,}1$ er en god tilnærming.',
      },
    },
    {
      id: '1t-7-5-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-7-5-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-7-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett hva som ligger under derivasjonsreglene vi allerede har lært. **Newton-kvotienten** $\\frac{f(x+h) - f(x)}{h}$ gir gjennomsnittlig vekstfart mellom $x$ og $x + h$, og den er stigningstallet til sekanten mellom disse to punktene.

**Definisjonen av den deriverte** sier at $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$ – det er grenseverdien av Newton-kvotienten når steglengden $h$ går mot null. Denne definisjonen forklarer hvorfor potensregelen og de andre reglene fungerer, og den kan brukes til å derivere funksjoner fra bunnen av.

**Numerisk derivasjon** gir tilnærmede verdier av den deriverte. **Framoverdifferansen** bruker Newton-kvotienten med en liten $h$, mens **sentraldifferansen** $\\frac{f(x+h) - f(x-h)}{2h}$ er mer nøyaktig fordi den ser symmetrisk til begge sider. Numerisk derivasjon er spesielt nyttig når vi ikke har en formel for funksjonen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.6 NARRATIV: Derivasjon av polynomfunksjoner
// ============================================================================

export const CHAPTER_1T_7_6_NARRATIV: TextbookChapter = {
  id: '1t-7-6-narrativ',
  courseId: '1t',
  chapterNumber: '7.6',
  title: 'Derivasjon av polynomfunksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om effektiv derivasjon av polynomer – potensregelen, konstantregelen, sumregelen, negative eksponenter og andrederiverte.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke potensregelen til å derivere',
    'derivere summer og differanser av funksjoner',
    'derivere polynomer med vilkårlige koeffisienter',
  ],
  linkedChapterId: '1t-7-6',
  content: [
    {
      id: '1t-7-6-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-6-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-7-6-n-intro',
      type: 'text',
      content: `## Verktøykassen for derivasjon

I de foregående kapitlene har vi møtt derivasjonsreglene litt etter litt. Nå er det tid for å samle dem og bruke dem systematisk på **polynomfunksjoner** – den store familien av funksjoner som er bygget opp av potenser av $x$ med koeffisienter.

Et polynom ser generelt slik ut: $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$. For eksempel er $3x^4 - 2x^3 + x - 7$ et polynom av grad 4. I dette kapittelet skal vi bli eksperter på å derivere slike funksjoner – raskt og sikkert. Vi skal også se på negative og brøk-eksponenter, og lære om **andrederiverte**.`,
    },
    {
      id: '1t-7-6-n-section1',
      type: 'text',
      content: `## Reglene samlet – potens, konstant, sum

La oss starte med å ha alle reglene klart for oss. **Potensregelen** sier at $f(x) = x^n$ gir $f'(x) = n \\cdot x^{n-1}$. **Konstantregelen** sier at en konstant har derivert lik null. **Konstantmultiplikasjon** betyr at $(c \\cdot f)'(x) = c \\cdot f'(x)$ – koeffisienter kan flyttes utenfor derivasjonen. Og **sumregelen** lar oss derivere ledd for ledd: $(f + g)' = f' + g'$.

Når vi kombinerer disse reglene, kan vi derivere ethvert polynom. Teknikken er alltid den samme: gå gjennom hvert ledd, bruk potensregelen (med koeffisienten), og sett sammen.

La oss ta $f(x) = 5x^4$. Koeffisienten $5$ multipliseres med eksponenten $4$: $f'(x) = 5 \\cdot 4 \\cdot x^3 = 20x^3$.

Et mer sammensatt eksempel: $f(x) = x^3 + x^2 - 7x + 3$. Vi deriverer ledd for ledd: $x^3$ gir $3x^2$, $x^2$ gir $2x$, $-7x$ gir $-7$, og konstanten $3$ gir $0$. Resultatet er $f'(x) = 3x^2 + 2x - 7$.

Og ett til: $f(x) = 2x^5 - \\frac{1}{2}x^4 + 3x$. Her får vi $f'(x) = 10x^4 - 2x^3 + 3$. Merk at $\\frac{1}{2} \\cdot 4 = 2$.`,
    },
    {
      id: '1t-7-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-7-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er $f\'(x)$ når $f(x) = 3x^4 - 2x^3 + x$?',
        options: [
          { id: 'a', text: '$12x^3 - 6x^2 + 1$', isCorrect: true },
          { id: 'b', text: '$12x^3 - 6x^2$', isCorrect: false },
          { id: 'c', text: '$12x^4 - 6x^3 + x$', isCorrect: false },
          { id: 'd', text: '$3x^3 - 2x^2 + 1$', isCorrect: false },
        ],
        solution: 'Vi deriverer ledd for ledd: $3 \\cdot 4x^3 = 12x^3$, $-2 \\cdot 3x^2 = -6x^2$, og $x$ gir $1$. Til sammen: $f\'(x) = 12x^3 - 6x^2 + 1$.',
      },
    },
    {
      id: '1t-7-6-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-6-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-6-n-section2',
      type: 'text',
      content: `## Negative og brøk-eksponenter

Potensregelen fungerer ikke bare for positive heltall – den gjelder for *alle* eksponenter, inkludert negative tall og brøker. Det betyr at vi kan derivere funksjoner som inneholder brøker med $x$ i nevneren.

Nøkkelen er å skrive om brøkene til potensform. For eksempel er $\\frac{1}{x^2} = x^{-2}$, og $\\frac{3}{x^3} = 3x^{-3}$. Når vi har potensform, bruker vi potensregelen som vanlig.

La oss derivere $f(x) = \\frac{3}{x^2} = 3x^{-2}$. Med potensregelen: $f'(x) = 3 \\cdot (-2) \\cdot x^{-3} = -6x^{-3} = -\\frac{6}{x^3}$. Legg merke til at eksponenten $-2$ flyttes ned som koeffisient (og multipliseres med 3), og den nye eksponenten er $-2 - 1 = -3$.

Et annet eksempel: $f(x) = \\frac{1}{x} + 2x = x^{-1} + 2x$. Vi deriverer: $f'(x) = -1 \\cdot x^{-2} + 2 = -\\frac{1}{x^2} + 2$. Du kan også skrive det som $f'(x) = 2 - \\frac{1}{x^2}$.

Tilsvarende gir $\\sqrt{x} = x^{1/2}$ den deriverte $\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Brøk-eksponenter følger nøyaktig samme regel.`,
    },
    {
      id: '1t-7-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-7-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er $f\'(x)$ når $f(x) = \\frac{5}{x^3}$?',
        options: [
          { id: 'a', text: '$\\frac{5}{3x^2}$', isCorrect: false },
          { id: 'b', text: '$\\frac{15}{x^4}$', isCorrect: false },
          { id: 'c', text: '$-\\frac{5}{x^4}$', isCorrect: false },
          { id: 'd', text: '$-\\frac{15}{x^4}$', isCorrect: true },
        ],
        solution: 'Vi skriver om: $f(x) = 5x^{-3}$. Med potensregelen: $f\'(x) = 5 \\cdot (-3) \\cdot x^{-4} = -15x^{-4} = -\\frac{15}{x^4}$.',
      },
    },
    {
      id: '1t-7-6-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-6-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-6-n-section3',
      type: 'text',
      content: `## Andrederiverte – å derivere den deriverte

Hva skjer hvis vi deriverer den deriverte? Da får vi en ny funksjon som kalles **andrederiverte**, og den skrives $f''(x)$ (leses «f tostreket av x»). Prosessen er enkel: vi deriverer $f(x)$ for å få $f'(x)$, og deriverer deretter $f'(x)$ for å få $f''(x)$.

La oss ta $f(x) = x^4 - 3x^2 + 2x$. Først finner vi $f'(x) = 4x^3 - 6x + 2$. Deretter deriverer vi $f'(x)$: $f''(x) = 12x^2 - 6$.

Andrederiverte har en viktig fysisk tolkning. Hvis $f(x)$ er posisjon, er $f'(x)$ fart og $f''(x)$ akselerasjon. Andrederiverte er også avgjørende for å bestemme om et punkt der $f'(x) = 0$ er et toppunkt eller bunnpunkt – noe vi utforsker grundig i neste kapittel.

La oss ta et fullstendig eksempel. For $f(x) = x^3 - 2x^2 + x$ finner vi $f'(x) = 3x^2 - 4x + 1$ og $f''(x) = 6x - 4$. Vi kan nå beregne verdier: $f'(2) = 12 - 8 + 1 = 5$ og $f''(2) = 12 - 4 = 8$. Den momentane vekstfarten i $x = 2$ er $5$, og akselerasjonen (endringen i vekstfart) er $8$.`,
    },
    {
      id: '1t-7-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-7-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'La $f(x) = x^3 - 2x$. Hva er $f\'\'(x)$?',
        options: [
          { id: 'a', text: '$6x$', isCorrect: true },
          { id: 'b', text: '$3x^2 - 2$', isCorrect: false },
          { id: 'c', text: '$6$', isCorrect: false },
          { id: 'd', text: '$3x - 2$', isCorrect: false },
        ],
        solution: 'Først: $f\'(x) = 3x^2 - 2$. Deretter deriverer vi igjen: $f\'\'(x) = 6x$. Merk at $-2$ er en konstant og forsvinner ved andre derivasjon.',
      },
    },
    {
      id: '1t-7-6-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-6-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-6-n-section4',
      type: 'text',
      content: `## Beregne derivert i et punkt

En vanlig oppgave er å finne verdien av den deriverte (eller andrederiverte) i et bestemt punkt. Fremgangsmåten er alltid den samme: først finner du det generelle uttrykket for $f'(x)$, og så setter du inn verdien for $x$.

La oss prøve med $f(x) = x^4 - 2x^3$. Deriverer vi, får vi $f'(x) = 4x^3 - 6x^2$. For å finne $f'(1)$ setter vi inn: $f'(1) = 4 \\cdot 1 - 6 \\cdot 1 = 4 - 6 = -2$. Altså er den momentane vekstfarten $-2$ når $x = 1$.

Andrederiverte er $f''(x) = 12x^2 - 12x$. Vi setter inn $x = 1$: $f''(1) = 12 - 12 = 0$. Andrederiverte er null i dette punktet, noe som kan tyde på et vendepunkt.

La oss også prøve $f(x) = \\frac{1}{3}x^3 - x^2 + x$. Den deriverte er $f'(x) = x^2 - 2x + 1$. Vi setter inn $x = 3$: $f'(3) = 9 - 6 + 1 = 4$. Andrederiverte er $f''(x) = 2x - 2$, og $f''(3) = 6 - 2 = 4$. Begge gir verdien $4$ her, men det er bare tilfeldigheter – de to verdiene betyr forskjellige ting.`,
    },
    {
      id: '1t-7-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-7-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'La $f(x) = 2x^4 + x^2 - 5$. Hva er $f\'\'(x)$?',
        options: [
          { id: 'a', text: '$8x^3 + 2x$', isCorrect: false },
          { id: 'b', text: '$8x^2 + 2$', isCorrect: false },
          { id: 'c', text: '$24x^2 + 2$', isCorrect: true },
          { id: 'd', text: '$24x + 2$', isCorrect: false },
        ],
        solution: 'Først: $f\'(x) = 8x^3 + 2x$. Deretter: $f\'\'(x) = 24x^2 + 2$. Vi deriverer hvert ledd i $f\'(x)$: $8 \\cdot 3x^2 = 24x^2$ og $2x$ gir $2$.',
      },
    },
    {
      id: '1t-7-6-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-6-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-6-n-section5',
      type: 'text',
      content: `## Systematisk polynomderivasjon – steg for steg

La oss avslutte med å oppsummere den systematiske fremgangsmåten for å derivere et polynom. Det er en mekanisk prosess som alltid fungerer.

For hvert ledd i polynomet gjør du følgende: multipliser koeffisienten med eksponenten, og reduser eksponenten med 1. Konstantledd forsvinner. For eksempel: $-x^3 + 4x^2 - 6$ gir $f'(x) = -3x^2 + 8x$. Her er $-1 \\cdot 3 = -3$ for første ledd, $4 \\cdot 2 = 8$ for andre ledd, og $-6$ forsvinner.

Hvis du støter på brøker i nevneren, skriv dem om til negative eksponenter først. For eksempel: $x^2 + \\frac{4}{x} = x^2 + 4x^{-1}$ gir $f'(x) = 2x + 4 \\cdot (-1) \\cdot x^{-2} = 2x - \\frac{4}{x^2}$.

For andrederiverte gjentar du prosessen på den deriverte. Sjekk alltid svaret ditt ved å verifisere med GeoGebra, eller ved å kontrollere at dimensjonene (gradene) gir mening. Den deriverte av et polynom av grad $n$ er alltid et polynom av grad $n - 1$.`,
    },
    {
      id: '1t-7-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-7-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er $f\'(x)$ når $f(x) = -x^3 + 4x^2 - 6$?',
        options: [
          { id: 'a', text: '$-3x^2 + 8x - 6$', isCorrect: false },
          { id: 'b', text: '$-3x^2 + 4x$', isCorrect: false },
          { id: 'c', text: '$-x^2 + 8x$', isCorrect: false },
          { id: 'd', text: '$-3x^2 + 8x$', isCorrect: true },
        ],
        solution: 'Vi deriverer ledd for ledd: $-1 \\cdot 3x^2 = -3x^2$, $4 \\cdot 2x = 8x$, og konstanten $-6$ gir $0$. Svaret er $f\'(x) = -3x^2 + 8x$.',
      },
    },
    {
      id: '1t-7-6-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-7-6-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-7-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi samlet og utvidet verktøykassen for derivasjon av polynomer. De fire grunnreglene er **potensregelen** $(x^n)' = nx^{n-1}$, **konstantregelen** $(c)' = 0$, **konstantmultiplikasjon** $(c \\cdot f)' = c \\cdot f'$, og **sumregelen** $(f + g)' = f' + g'$.

Vi har sett at potensregelen fungerer også for **negative eksponenter**. For å derivere brøker som $\\frac{a}{x^n}$, skriver vi dem om til $a \\cdot x^{-n}$ og bruker potensregelen direkte. Det samme gjelder for brøk-eksponenter som $\\sqrt{x} = x^{1/2}$.

**Andrederiverte** $f''(x)$ finner vi ved å derivere $f'(x)$ en gang til. Andrederiverte forteller oss om endringshastigheten selv endrer seg – i fysikken svarer dette til akselerasjon. For å beregne den deriverte i et bestemt punkt finner vi først det generelle uttrykket og setter deretter inn verdien for $x$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.7 NARRATIV: Praktisk bruk av derivasjon
// ============================================================================

export const CHAPTER_1T_7_7_NARRATIV: TextbookChapter = {
  id: '1t-7-7-narrativ',
  courseId: '1t',
  chapterNumber: '7.7',
  title: 'Praktisk bruk av derivasjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om optimering, fart og akselerasjon – hvordan derivasjon løser virkelige problemer med maksimum, minimum og bevegelse.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke derivasjon til å finne ekstremalpunkt',
    'løse optimeringsproblemer',
    'tolke derivasjon i praktiske sammenhenger som fart og akselerasjon',
  ],
  linkedChapterId: '1t-7-7',
  content: [
    {
      id: '1t-7-7-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-7-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-7-7-n-intro',
      type: 'text',
      content: `## Matematikk med formål

Hittil har vi lært *hva* derivasjon er og *hvordan* vi gjør det. Nå er det tid for det mest spennende spørsmålet: *hva kan vi bruke det til?* Svaret er overraskende mye.

Derivasjon lar oss finne **toppunkter** og **bunnpunkter** på en graf, noe som betyr at vi kan løse **optimeringsproblemer** – for eksempel å finne den prisen som gir mest profitt, eller de dimensjonene som gir størst areal. Vi kan også analysere **bevegelse** ved å koble derivasjon til fart og akselerasjon. I dette kapittelet ser vi på disse praktiske anvendelsene gjennom konkrete eksempler.`,
    },
    {
      id: '1t-7-7-n-section1',
      type: 'text',
      content: `## Topp- og bunnpunkt – der grafen snur

Vi har allerede lært at $f'(x) = 0$ i punkter der grafen har en horisontal tangent. Disse punktene er kandidater for **toppunkt** (lokalt maksimum) eller **bunnpunkt** (lokalt minimum), og vi kaller dem **ekstremalpunkt**.

Fremgangsmåten er systematisk. Først finner du $f'(x)$. Deretter løser du likningen $f'(x) = 0$ for å finne kandidatene. Til slutt bruker du **andrederiverte** for å avgjøre hva slags punkt det er: hvis $f''(a) < 0$, er $(a, f(a))$ et toppunkt (grafen bøyer nedover), og hvis $f''(a) > 0$, er det et bunnpunkt (grafen bøyer oppover).

La oss prøve med $f(x) = x^3 - 3x$. Først: $f'(x) = 3x^2 - 3$. Vi setter $f'(x) = 0$: $3x^2 - 3 = 0$, altså $x^2 = 1$, som gir $x = -1$ eller $x = 1$. Andrederiverte er $f''(x) = 6x$. Vi sjekker: $f''(-1) = -6 < 0$, altså er $x = -1$ et toppunkt. $f''(1) = 6 > 0$, altså er $x = 1$ et bunnpunkt. Funksjonsverdiene er $f(-1) = 2$ og $f(1) = -2$. Vi har toppunkt $(-1, 2)$ og bunnpunkt $(1, -2)$.`,
    },
    {
      id: '1t-7-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-7-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'La $f(x) = x^2 - 4x + 3$. Hva slags ekstremalpunkt har $f$, og hvor?',
        options: [
          { id: 'a', text: 'Toppunkt i $x = 2$', isCorrect: false },
          { id: 'b', text: 'Bunnpunkt i $x = 2$', isCorrect: true },
          { id: 'c', text: 'Toppunkt i $x = -2$', isCorrect: false },
          { id: 'd', text: 'Bunnpunkt i $x = 4$', isCorrect: false },
        ],
        solution: '$f\'(x) = 2x - 4 = 0$ gir $x = 2$. $f\'\'(x) = 2 > 0$, altså er det et bunnpunkt. Funksjonsverdien er $f(2) = 4 - 8 + 3 = -1$, så bunnpunktet er $(2, -1)$.',
      },
    },
    {
      id: '1t-7-7-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-7-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-7-n-section2',
      type: 'text',
      content: `## Optimering – å finne det beste svaret

Mange problemer i virkeligheten handler om å finne den *beste* løsningen. En bonde vil ha størst mulig innhegning med en gitt mengde gjerde. En bedrift vil maksimere profitten. En ingeniør vil minimere materialbruk. Alt dette er **optimeringsproblemer**, og derivasjon er verktøyet som løser dem.

Fremgangsmåten følger alltid samme mønster. Først leser du problemet og identifiserer hva som skal maksimeres eller minimeres. Deretter setter du opp en funksjon som beskriver dette. Så finner du $f'(x) = 0$ og løser for $x$. Til slutt kontrollerer du at løsningen virkelig gir det du ønsker (et maksimum eller minimum), og at den er realistisk.

Her er et klassisk eksempel. En bonde har 100 meter gjerde og vil lage et rektangulært innhegnet område langs en elv. Siden elven fungerer som den ene veggen, trenger han bare gjerde langs tre sider. La $x$ være bredden (sidene vinkelrett på elven) og $y$ lengden (parallelt med elven). Gjerdet gir begrensningen $2x + y = 100$, altså $y = 100 - 2x$. Arealet er $A(x) = x \\cdot y = x(100 - 2x) = 100x - 2x^2$.

Vi deriverer: $A'(x) = 100 - 4x$. Vi setter $A'(x) = 0$: $x = 25$. Da er $y = 50$ og arealet er $1250 \\text{ m}^2$. Sjekk: $A''(x) = -4 < 0$, altså er dette et maksimum.`,
    },
    {
      id: '1t-7-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-7-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Summen av to positive tall er 20. Hva er det største mulige produktet?',
        options: [
          { id: 'a', text: '$80$', isCorrect: false },
          { id: 'b', text: '$50$', isCorrect: false },
          { id: 'c', text: '$200$', isCorrect: false },
          { id: 'd', text: '$100$', isCorrect: true },
        ],
        solution: 'La tallene være $x$ og $20 - x$. Produktet er $P(x) = x(20-x) = 20x - x^2$. $P\'(x) = 20 - 2x = 0$ gir $x = 10$. Produktet er $10 \\cdot 10 = 100$. $P\'\'(x) = -2 < 0$ bekrefter at det er et maksimum.',
      },
    },
    {
      id: '1t-7-7-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-7-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-7-n-section3',
      type: 'text',
      content: `## Fart og akselerasjon – derivasjon beskriver bevegelse

En av de mest naturlige anvendelsene av derivasjon er å analysere bevegelse. Hvis $s(t)$ beskriver posisjonen til et objekt som funksjon av tid $t$, gir den deriverte $s'(t) = v(t)$ oss **farten** (hastigheten). Deriverer vi enda en gang, gir andrederiverte $s''(t) = v'(t) = a(t)$ oss **akselerasjonen**.

La oss se på en partikkel som beveger seg med posisjonsfunksjon $s(t) = t^3 - 6t^2 + 9t$, der $s$ er i meter og $t$ i sekunder. Farten er $v(t) = s'(t) = 3t^2 - 12t + 9$, og akselerasjonen er $a(t) = v'(t) = 6t - 12$.

Når er partikkelen i ro? Det skjer når $v(t) = 0$: $3t^2 - 12t + 9 = 0$, altså $t^2 - 4t + 3 = 0$, som gir $(t - 1)(t - 3) = 0$. Partikkelen er i ro ved $t = 1$ sekund og $t = 3$ sekunder.

Positiv fart betyr at partikkelen beveger seg i positiv retning, negativ fart betyr den motsatte retningen. Vi kan skrive $v(t) = 3(t-1)(t-3)$ og lese av fortegnene: farten er positiv når $t < 1$ eller $t > 3$, og negativ mellom $t = 1$ og $t = 3$.`,
    },
    {
      id: '1t-7-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-7-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'En ball kastes opp med $h(t) = -5t^2 + 20t + 1$. Hva er starthastigheten (farten når $t = 0$)?',
        options: [
          { id: 'a', text: '$1$ m/s', isCorrect: false },
          { id: 'b', text: '$-10$ m/s', isCorrect: false },
          { id: 'c', text: '$20$ m/s', isCorrect: true },
          { id: 'd', text: '$15$ m/s', isCorrect: false },
        ],
        solution: 'Farten er $v(t) = h\'(t) = -10t + 20$. Ved $t = 0$: $v(0) = -10 \\cdot 0 + 20 = 20$ m/s. Ballen starter med en hastighet på 20 m/s oppover.',
      },
    },
    {
      id: '1t-7-7-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-7-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-7-n-section4',
      type: 'text',
      content: `## Profittmaksimering – økonomi møter matematikk

Optimering er spesielt viktig i økonomi. Tenk deg en bedrift som produserer en vare. Profittfunksjonen er $P(x) = -x^2 + 40x - 300$ kroner, der $x$ er antall enheter produsert per dag.

Hvor mange enheter bør bedriften produsere for å maksimere profitten? Vi deriverer: $P'(x) = -2x + 40$. Vi setter $P'(x) = 0$: $-2x + 40 = 0$, altså $x = 20$. Andrederiverte er $P''(x) = -2 < 0$, som bekrefter at dette er et toppunkt (maksimum). Maksimal profitt er $P(20) = -400 + 800 - 300 = 100$ kroner per dag.

Et annet eksempel: profittfunksjonen er $P(x) = -2x^2 + 100x - 800$. Vi får $P'(x) = -4x + 100 = 0$, altså $x = 25$ enheter. Maksimal profitt er $P(25) = -2 \\cdot 625 + 2500 - 800 = -1250 + 2500 - 800 = 450$ kroner.

Legg merke til at profittfunksjonen alltid har negativ koeffisient foran $x^2$, noe som betyr at grafen er en nedovervendt parabel. Det garanterer at det finnes et maksimum. Dette er typisk for mange økonomiske modeller.`,
    },
    {
      id: '1t-7-7-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-7-7-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'En ball kastes opp med $h(t) = -5t^2 + 30t + 2$. Hva er den maksimale høyden?',
        options: [
          { id: 'a', text: '$47$ meter', isCorrect: true },
          { id: 'b', text: '$45$ meter', isCorrect: false },
          { id: 'c', text: '$32$ meter', isCorrect: false },
          { id: 'd', text: '$52$ meter', isCorrect: false },
        ],
        solution: '$h\'(t) = -10t + 30 = 0$ gir $t = 3$. Maksimal høyde: $h(3) = -5 \\cdot 9 + 30 \\cdot 3 + 2 = -45 + 90 + 2 = 47$ meter.',
      },
    },
    {
      id: '1t-7-7-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-7-7-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-7-7-n-section5',
      type: 'text',
      content: `## Geometrisk optimering – rektangler og former

La oss avslutte med enda en type optimeringsproblem: geometrisk optimering. Disse oppgavene handler om å finne de dimensjonene som gir størst areal, minst omkrets, eller lignende.

Et klassisk problem: et rektangel har omkrets 24 cm. Hvilke sidelengder gir størst areal? La de to sidelengdene være $x$ og $y$. Omkretsen gir begrensningen $2x + 2y = 24$, altså $y = 12 - x$. Arealet er $A(x) = x \\cdot y = x(12 - x) = 12x - x^2$.

Vi deriverer: $A'(x) = 12 - 2x$. Vi setter $A'(x) = 0$: $x = 6$. Da er $y = 12 - 6 = 6$. Rektangelet med størst areal har altså sidelengder $6$ cm og $6$ cm – det er et **kvadrat**! Arealet er $36 \\text{ cm}^2$.

Dette er faktisk et generelt resultat: blant alle rektangler med en gitt omkrets, er det kvadratet som har størst areal. Derivasjon ga oss dette elegante svaret med bare noen få regnesteg.

Mønsteret i alle optimeringsproblemer er det samme: sett opp funksjonen, finn der den deriverte er null, sjekk at det er riktig type ekstremalpunkt, og tolk svaret i konteksten av problemet.`,
    },
    {
      id: '1t-7-7-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-7-7-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Et rektangel har omkrets 24 cm. Hvilket areal gir de optimale sidelengdene?',
        options: [
          { id: 'a', text: '$24 \\text{ cm}^2$', isCorrect: false },
          { id: 'b', text: '$36 \\text{ cm}^2$', isCorrect: true },
          { id: 'c', text: '$48 \\text{ cm}^2$', isCorrect: false },
          { id: 'd', text: '$32 \\text{ cm}^2$', isCorrect: false },
        ],
        solution: 'Optimale sidelengder er $6$ cm og $6$ cm (et kvadrat). Arealet er $6 \\cdot 6 = 36 \\text{ cm}^2$. Vi fant dette ved å sette $A\'(x) = 12 - 2x = 0$, som gir $x = 6$.',
      },
    },
    {
      id: '1t-7-7-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-7-7-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-7-7-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett derivasjon i aksjon gjennom praktiske problemer.

For å finne **ekstremalpunkt** (topp- og bunnpunkt) setter vi $f'(x) = 0$ og løser for $x$. Vi bruker **andrederiverte** for å avgjøre type: $f''(a) < 0$ betyr toppunkt og $f''(a) > 0$ betyr bunnpunkt.

**Optimeringsproblemer** løses i fire steg: sett opp funksjonen som skal optimeres, finn der $f'(x) = 0$, kontroller at det er riktig type ekstremalpunkt, og sjekk at løsningen er realistisk. Vi har sett eksempler med gjerdeproblem, profittmaksimering og geometrisk optimering.

For **bevegelse** gjelder at derivert av posisjon gir fart ($v(t) = s'(t)$), og derivert av fart gir akselerasjon ($a(t) = s''(t)$). Farten er null når objektet er i ro, positiv fart betyr bevegelse i positiv retning, og negativ fart betyr motsatt retning. Akselerasjonen forteller om farten øker eller minker.`,
    },
  ],
  exercises: [],
};
