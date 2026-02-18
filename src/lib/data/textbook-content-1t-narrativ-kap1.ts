/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON
 * Kapittel 1.1: Fortegn og regnerekkefølge
 * Kapittel 1.2: Potenser med heltallseksponenter
 *
 * Disse versjonene er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1 NARRATIV: Fortegn og regnerekkefølge
// ============================================================================

export const CHAPTER_1T_1_1_NARRATIV: TextbookChapter = {
  id: '1t-1-1-narrativ',
  courseId: '1t',
  chapterNumber: '1.1',
  title: 'Fortegn og regnerekkefølge',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om negative tall, fortegnsregler og den viktige avtalen vi har om hvilken rekkefølge vi regner i.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utføre beregninger med negative tall',
    'bruke riktig regnerekkefølge',
  ],
  linkedChapterId: '1t-1-1',
  content: [    {
      id: '1t-1-1-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-1-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-1-1-n-intro',
      type: 'text',
      content: `## Hva skjer når tallene går under null?

Tenk deg at du står ute en kald januarmorgen. Termometeret viser $-12$ grader. Værmeldingen sier at temperaturen skal stige med $5$ grader i løpet av dagen. Hva blir temperaturen da? Du regner: $-12 + 5 = -7$ grader. Fremdeles kaldt, men litt bedre.

Nå tenk deg det motsatte: det er $3$ grader, og temperaturen skal synke med $8$ grader i natt. Da får du $3 - 8 = -5$ grader. Temperaturen krysser nullpunktet og fortsetter nedover.

Negative tall dukker opp overalt – i temperaturer, på bankkontoen din, i kjelleren under bakkenivå, i historiske årstall «før Kristus». Og i matematikken er de helt uunnværlige. Men de krever at vi er *nøye* med fortegnene. I dette kapittelet skal vi gå systematisk gjennom hvordan vi regner med negative tall: addisjon og subtraksjon, multiplikasjon og divisjon, potenser, kvadratrøtter, og til slutt den viktige **regnerekkefølgen** som sikrer at alle får det samme svaret.`,
    },
    {
      id: '1t-1-1-n-section1',
      type: 'text',
      content: `## Addisjon og subtraksjon med negative tall

La oss starte med det grunnleggende. Når du legger sammen eller trekker fra negative tall, handler det om å forstå hva som skjer med fortegnene. De to viktigste reglene er:

$a - (-b) = a + b$ og $a + (-b) = a - b$

Hvorfor fungerer dette? Tenk på det slik: å trekke fra et negativt tall er som å fjerne en gjeld. Hvis du skylder noen 300 kroner og den gjelden plutselig slettes, så har du i praksis *fått* 300 kroner. Minus og minus blir pluss. På samme måte, hvis du legger til noe negativt – for eksempel en ny regning – er det det samme som å trekke fra.

La oss se på noen konkrete eksempler. Hva er $5 - (-3)$? Vi bruker regelen: minus foran en parentes med negativt tall gir pluss, så $5 - (-3) = 5 + 3 = 8$. Og $5 + (-9)$? Pluss foran en parentes med negativt tall gir minus: $5 + (-9) = 5 - 9 = -4$.

Det blir litt mer krevende med flere ledd. Ta $-7 + (-8) - (-10)$. Vi tar det steg for steg: $-7 + (-8)$ gir $-7 - 8 = -15$. Så har vi $-15 - (-10) = -15 + 10 = -5$. Nøkkelen er å ta det rolig og behandle ett fortegn om gangen.

En god huskeregel: tenk på tallinjen. Pluss betyr at du går til *høyre*, minus betyr at du går til *venstre*. Negativt av negativt snur retningen, altså til høyre igjen.`,
    },
    {
      id: '1t-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på addisjon og subtraksjon med negative tall:',
        options: [{ id: 'a', text: '$-20$', isCorrect: true }],
        questions: [
          {
            id: '1t-1-1-n-quiz1-q0',
            task: 'Hva blir $8 - (-5)$?',
            options: [
              { id: 'a', text: '$3$', isCorrect: false },
              { id: 'b', text: '$13$', isCorrect: true },
              { id: 'c', text: '$-13$', isCorrect: false },
              { id: 'd', text: '$-3$', isCorrect: false },
            ],
            solution: '$8 - (-5) = 8 + 5 = 13$. Minus foran negativt tall gir pluss.',
          },
          {
            id: '1t-1-1-n-quiz1-q1',
            task: 'Hva blir $4 + (-11)$?',
            options: [
              { id: 'a', text: '$15$', isCorrect: false },
              { id: 'b', text: '$-15$', isCorrect: false },
              { id: 'c', text: '$7$', isCorrect: false },
              { id: 'd', text: '$-7$', isCorrect: true },
            ],
            solution: '$4 + (-11) = 4 - 11 = -7$. Pluss foran negativt tall gir minus.',
          },
          {
            id: '1t-1-1-n-quiz1-q2',
            task: 'Hva blir $-30 - (-20) + (-10)$?',
            options: [
              { id: 'a', text: '$-40$', isCorrect: false },
              { id: 'b', text: '$-20$', isCorrect: true },
              { id: 'c', text: '$0$', isCorrect: false },
              { id: 'd', text: '$-60$', isCorrect: false },
            ],
            solution: 'Vi tar det steg for steg: $-30 - (-20) = -30 + 20 = -10$. Deretter: $-10 + (-10) = -10 - 10 = -20$.',
          },
        ],
      },
    },    {
      id: '1t-1-1-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-1-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-1-n-section2',
      type: 'text',
      content: `## Multiplikasjon og divisjon – tell minustegnene

Nå beveger vi oss over til ganging og deling med negative tall. Her finnes det en elegant regel som gjør livet mye enklere: du teller antall negative fortegn og sjekker om det er et oddetall eller et partall.

Har du et **oddetall** negative fortegn, blir svaret **negativt**. Har du et **partall** negative fortegn, blir svaret **positivt**.

Hvorfor? Tenk på det slik. Minus ganger minus er pluss – de to minustegnene «kansellerer» hverandre. Så når du har to negative tall som ganges, for eksempel $(-3) \\cdot (-4)$, blir resultatet positivt: $12$. Men legg til enda et negativt tall, $-5 \\cdot (-2) \\cdot (-3)$, og du har tre negative fortegn. To av dem kansellerer hverandre, men det tredje står igjen, og svaret blir negativt: $-30$.

Det fungerer på nøyaktig samme måte med divisjon. $\\frac{-15}{5} = -3$ fordi vi har ett negativt fortegn (oddetall, altså negativt). $\\frac{-30}{-3} = 10$ fordi vi har to negative fortegn (partall, altså positivt). Og $-\\frac{-15}{-5} = -3$ fordi vi har tre negative fortegn totalt.

Et praktisk tips: når du har et langt uttrykk med mange faktorer, tell opp alle minustegnene *først*, bestem fortegnet på svaret, og regn deretter ut tallverdien uten å tenke på fortegn. Til slutt setter du på det riktige fortegnet.`,
    },
    {
      id: '1t-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på multiplikasjon og divisjon med negative tall:',
        options: [{ id: 'a', text: '$28$', isCorrect: true }],
        questions: [
          {
            id: '1t-1-1-n-quiz2-q0',
            task: 'Hva blir $(-3) \\cdot (-4)$?',
            options: [
              { id: 'a', text: '$-12$', isCorrect: false },
              { id: 'b', text: '$12$', isCorrect: true },
              { id: 'c', text: '$-7$', isCorrect: false },
              { id: 'd', text: '$7$', isCorrect: false },
            ],
            solution: 'To negative fortegn (partall) gir positivt svar: $(-3) \\cdot (-4) = 12$.',
          },
          {
            id: '1t-1-1-n-quiz2-q1',
            task: 'Hva blir $\\frac{-30}{-3}$?',
            options: [
              { id: 'a', text: '$-10$', isCorrect: false },
              { id: 'b', text: '$-33$', isCorrect: false },
              { id: 'c', text: '$10$', isCorrect: true },
              { id: 'd', text: '$33$', isCorrect: false },
            ],
            solution: 'To negative fortegn (partall) gir positivt: $\\frac{-30}{-3} = 10$.',
          },
          {
            id: '1t-1-1-n-quiz2-q2',
            task: 'Hva blir $-7 \\cdot (-2) \\cdot (-1) \\cdot (-2)$?',
            options: [
              { id: 'a', text: '$-28$', isCorrect: false },
              { id: 'b', text: '$14$', isCorrect: false },
              { id: 'c', text: '$28$', isCorrect: true },
              { id: 'd', text: '$-14$', isCorrect: false },
            ],
            solution: 'Vi teller fire negative fortegn. Fire er et partall, så svaret er positivt. Tallverdien: $7 \\cdot 2 \\cdot 1 \\cdot 2 = 28$. Svaret er $28$.',
          },
        ],
      },
    },    {
      id: '1t-1-1-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-1-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-1-n-section3',
      type: 'text',
      content: `## Potenser og negative fortegn – parentesen avgjør alt

Her kommer en felle som mange går i, og det er helt avgjørende at du forstår forskjellen mellom $(-2)^4$ og $-2^4$.

Når minustegnet er *innenfor* parentesen, som i $(-2)^4$, betyr det at vi ganger $-2$ med seg selv fire ganger: $(-2) \\cdot (-2) \\cdot (-2) \\cdot (-2)$. Vi har fire negative fortegn, som er et partall, og svaret blir $16$ – positivt.

Men når minustegnet er *utenfor* potensuttrykket, som i $-2^4$, da er det bare $2$ som opphøyes i fjerde. Minustegnet henger igjen foran: $-(2 \\cdot 2 \\cdot 2 \\cdot 2) = -16$ – negativt. Det er en *enorm* forskjell!

For oddetallseksponenter får vi riktignok det samme svaret begge veier. $(-2)^3 = (-2) \\cdot (-2) \\cdot (-2) = -8$, og $-2^3 = -(2 \\cdot 2 \\cdot 2) = -8$. Tre negative fortegn (oddetall) gir negativt, og minustegnet foran gir også negativt. Men for partallseksponenter er forskjellen dramatisk.

La oss se på et kombinert eksempel: $(-3) \\cdot (-2)^2$. Først regner vi ut potensen: $(-2)^2 = 4$. Så ganger vi med $-3$: $-3 \\cdot 4 = -12$. Vi kan tenke på det som tre negative fortegn totalt ($-3$ har ett, og $(-2)^2$ gir to som kansellerer hverandre, så det gjenstår ett), men det er tryggere å ta det steg for steg.

Regelen er enkel: se nøye på om minustegnet er *inne i* eller *utenfor* parentesen. Parentesen avgjør alt.`,
    },
    {
      id: '1t-1-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på potenser med negative fortegn:',
        options: [{ id: 'a', text: '$(-5)^2 = 25$ og $-5^2 = -25$', isCorrect: true }],
        questions: [
          {
            id: '1t-1-1-n-quiz3-q0',
            task: 'Hva blir $(-3)^4$?',
            options: [
              { id: 'a', text: '$81$', isCorrect: true },
              { id: 'b', text: '$-81$', isCorrect: false },
              { id: 'c', text: '$-12$', isCorrect: false },
              { id: 'd', text: '$12$', isCorrect: false },
            ],
            solution: '$(-3)^4 = (-3) \\cdot (-3) \\cdot (-3) \\cdot (-3)$. Fire negative fortegn (partall) gir positivt: $81$.',
          },
          {
            id: '1t-1-1-n-quiz3-q1',
            task: 'Hva er forskjellen mellom $(-5)^2$ og $-5^2$?',
            options: [
              { id: 'a', text: 'Begge gir $25$', isCorrect: false },
              { id: 'b', text: 'Begge gir $-25$', isCorrect: false },
              { id: 'c', text: '$(-5)^2 = -25$ og $-5^2 = 25$', isCorrect: false },
              { id: 'd', text: '$(-5)^2 = 25$ og $-5^2 = -25$', isCorrect: true },
            ],
            solution: '$(-5)^2 = (-5) \\cdot (-5) = 25$ fordi minustegnet er innenfor parentesen. $-5^2 = -(5 \\cdot 5) = -25$ fordi minustegnet er utenfor.',
          },
          {
            id: '1t-1-1-n-quiz3-q2',
            task: 'Hva blir $(-3) \\cdot (-2)^2$?',
            options: [
              { id: 'a', text: '$12$', isCorrect: false },
              { id: 'b', text: '$-12$', isCorrect: true },
              { id: 'c', text: '$36$', isCorrect: false },
              { id: 'd', text: '$-36$', isCorrect: false },
            ],
            solution: 'Først potensen: $(-2)^2 = 4$. Så multiplikasjonen: $(-3) \\cdot 4 = -12$. Parentesen avgjør at $(-2)^2$ er positivt, men $-3$ gjør produktet negativt.',
          },
        ],
      },
    },    {
      id: '1t-1-1-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-1-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-1-n-section4',
      type: 'text',
      content: `## Kvadratrøtter – tallenes opphav

**Kvadratroten** av et tall $a$ er det positive tallet som, ganget med seg selv, gir $a$. Vi skriver det som $\\sqrt{a}$. For eksempel er $\\sqrt{9} = 3$ fordi $3 \\cdot 3 = 9$, og $\\sqrt{100} = 10$ fordi $10 \\cdot 10 = 100$.

Men hva med $\\sqrt{-64}$? Finnes det et tall som ganget med seg selv gir $-64$? Hvis tallet er positivt, blir produktet positivt. Hvis tallet er negativt, gir minus ganger minus pluss – også positivt. Det finnes altså *intet* reelt tall som ganget med seg selv gir noe negativt. Derfor sier vi at **vi kan ikke ta kvadratroten av negative tall** (i hvert fall ikke innenfor de reelle tallene som vi jobber med nå).

Vær oppmerksom på forskjellen mellom $\\sqrt{-64}$, som ikke har noen løsning, og $-\\sqrt{64}$, som er noe helt annet. $-\\sqrt{64} = -8$: vi tar først kvadratroten av $64$, som er $8$, og setter deretter på minustegnet. Det er fullt mulig å ha et negativt *resultat* – det er bare under selve rottegnet vi ikke kan ha et negativt tall.

Noen ganger møter du sammensatte uttrykk med kvadratrøtter. For eksempel $\\sqrt{\\sqrt{81}}$: først finner vi $\\sqrt{81} = 9$, og deretter $\\sqrt{9} = 3$. Eller $\\sqrt{\\sqrt{25} - \\sqrt{16}} = \\sqrt{5 - 4} = \\sqrt{1} = 1$. Her er det viktig å jobbe innenfra og ut, akkurat som med parenteser.`,
    },
    {
      id: '1t-1-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på kvadratrøtter:',
        options: [{ id: 'a', text: '$\\sqrt{-25}$', isCorrect: true }],
        questions: [
          {
            id: '1t-1-1-n-quiz4-q0',
            task: 'Hva er $-\\sqrt{64}$?',
            options: [
              { id: 'a', text: 'Har ingen løsning', isCorrect: false },
              { id: 'b', text: '$8$', isCorrect: false },
              { id: 'c', text: '$-8$', isCorrect: true },
              { id: 'd', text: '$\\pm 8$', isCorrect: false },
            ],
            solution: '$-\\sqrt{64} = -8$. Vi tar først roten av $64$, som er $8$, og setter på minustegnet. Minustegnet er *utenfor* roten, så dette er gyldig.',
          },
          {
            id: '1t-1-1-n-quiz4-q1',
            task: 'Hvilket av disse uttrykkene har *ingen* løsning blant de reelle tallene?',
            options: [
              { id: 'a', text: '$-\\sqrt{49}$', isCorrect: false },
              { id: 'b', text: '$\\sqrt{\\sqrt{16}}$', isCorrect: false },
              { id: 'c', text: '$\\sqrt{-25}$', isCorrect: true },
              { id: 'd', text: '$\\sqrt{0}$', isCorrect: false },
            ],
            solution: '$\\sqrt{-25}$ har ingen løsning fordi vi ikke kan ta kvadratroten av et negativt tall. $-\\sqrt{49} = -7$ er gyldig. $\\sqrt{\\sqrt{16}} = \\sqrt{4} = 2$. $\\sqrt{0} = 0$.',
          },
          {
            id: '1t-1-1-n-quiz4-q2',
            task: 'Hva blir $\\sqrt{\\sqrt{25} - \\sqrt{16}}$?',
            options: [
              { id: 'a', text: '$3$', isCorrect: false },
              { id: 'b', text: '$1$', isCorrect: true },
              { id: 'c', text: '$9$', isCorrect: false },
              { id: 'd', text: '$0$', isCorrect: false },
            ],
            solution: 'Vi jobber innenfra og ut: $\\sqrt{25} = 5$ og $\\sqrt{16} = 4$. Deretter: $\\sqrt{5 - 4} = \\sqrt{1} = 1$.',
          },
        ],
      },
    },    {
      id: '1t-1-1-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-1-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-1-n-section5',
      type: 'text',
      content: `## Regnerekkefølgen – matematikkens trafikklov

Tenk deg at to venner regner ut $10 - 3 \\cdot 3$. Den ene sier: «$10 - 3 = 7$, og $7 \\cdot 3 = 21$.» Den andre sier: «$3 \\cdot 3 = 9$, og $10 - 9 = 1$.» Hvem har rett? Den *andre* har rett, fordi multiplikasjon skal utføres *før* subtraksjon. Og det er derfor vi trenger en felles avtale om **regnerekkefølge** – en slags trafikklov for matematikken.

Rekkefølgen er slik: Først regner vi ut det som står i **parenteser**. Deretter tar vi **potenser og røtter**. Så utfører vi **multiplikasjon og divisjon** (fra venstre mot høyre). Til slutt tar vi **addisjon og subtraksjon** (også fra venstre mot høyre). En kjent huskeregel er «**P**lease **E**xcuse **M**y **D**ear **A**unt **S**ally», som står for Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.

La oss se hvordan dette fungerer i praksis. $20 - (3\\sqrt{4} \\div 2)$: Vi starter med parentesen. Inne i parentesen finner vi først roten: $\\sqrt{4} = 2$. Deretter ganger vi: $3 \\cdot 2 = 6$. Så deler vi: $6 \\div 2 = 3$. Nå har vi $20 - 3 = 17$.

Et annet eksempel: $2^3 - (7 - 3)^2$. Parentesen først: $7 - 3 = 4$. Potensene: $2^3 = 8$ og $4^2 = 16$. Til slutt subtraksjonen: $8 - 16 = -8$. Legg merke til at svaret ble negativt fordi vi trakk fra et større tall.

Et siste eksempel som kombinerer alt: $(3 - 2 \\cdot 4) \\cdot 2 - 3$. Inne i parentesen må vi gange før vi trekker fra: $2 \\cdot 4 = 8$, deretter $3 - 8 = -5$. Så ganger vi: $-5 \\cdot 2 = -10$. Til slutt: $-10 - 3 = -13$.`,
    },
    {
      id: '1t-1-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på regnerekkefølgen:',
        options: [{ id: 'a', text: '$-6$', isCorrect: true }],
        questions: [
          {
            id: '1t-1-1-n-quiz5-q0',
            task: 'Hva blir $10 - 3 \\cdot 3$?',
            options: [
              { id: 'a', text: '$21$', isCorrect: false },
              { id: 'b', text: '$1$', isCorrect: true },
              { id: 'c', text: '$0$', isCorrect: false },
              { id: 'd', text: '$-1$', isCorrect: false },
            ],
            solution: 'Multiplikasjon før subtraksjon: $3 \\cdot 3 = 9$, deretter $10 - 9 = 1$. Ikke $10 - 3 = 7$ først!',
          },
          {
            id: '1t-1-1-n-quiz5-q1',
            task: 'Hva blir $2^3 - (7 - 3)^2$?',
            options: [
              { id: 'a', text: '$-8$', isCorrect: true },
              { id: 'b', text: '$0$', isCorrect: false },
              { id: 'c', text: '$8$', isCorrect: false },
              { id: 'd', text: '$48$', isCorrect: false },
            ],
            solution: 'Parentesen først: $7 - 3 = 4$. Potensene: $2^3 = 8$ og $4^2 = 16$. Til slutt: $8 - 16 = -8$.',
          },
          {
            id: '1t-1-1-n-quiz5-q2',
            task: 'Hva blir $-2 \\cdot (3 - 5)^2 + 2$?',
            options: [
              { id: 'a', text: '$-10$', isCorrect: false },
              { id: 'b', text: '$10$', isCorrect: false },
              { id: 'c', text: '$-6$', isCorrect: true },
              { id: 'd', text: '$6$', isCorrect: false },
            ],
            solution: 'Parentesen først: $3 - 5 = -2$. Potensen: $(-2)^2 = 4$. Multiplikasjonen: $-2 \\cdot 4 = -8$. Til slutt addisjonen: $-8 + 2 = -6$.',
          },
        ],
      },
    },    {
      id: '1t-1-1-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-1-1-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi bygget et solid fundament for regning med negative tall og regnerekkefølge.

**Addisjon og subtraksjon** med negative tall følger to nøkkelregler: $a - (-b) = a + b$ (minus og minus gir pluss) og $a + (-b) = a - b$ (pluss foran negativt gir minus). Tenk på tallinjen: pluss er til høyre, minus er til venstre, og dobbelt minus snur retningen.

**Multiplikasjon og divisjon** bestemmes av antall negative fortegn. Et oddetall negative fortegn gir negativt svar, et partall gir positivt. Denne regelen gjelder uansett hvor mange faktorer du har.

**Potenser med negative tall** krever at du leser nøye. $(-2)^4 = 16$ fordi minustegnet er innenfor parentesen og opphøyes sammen med tallet. $-2^4 = -16$ fordi minustegnet er utenfor og bare $2$ opphøyes. Forskjellen er avgjørende for partallseksponenter.

**Kvadratrøtter** av negative tall finnes ikke blant de reelle tallene. Husk at $-\\sqrt{a}$ (negativt fortegn utenfor roten) er noe helt annet enn $\\sqrt{-a}$ (negativt tall under roten).

**Regnerekkefølgen** er vår felles avtale: parenteser, potenser og røtter, multiplikasjon og divisjon, addisjon og subtraksjon. Følger du denne rekkefølgen, får du alltid riktig svar.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2 NARRATIV: Potenser med heltallseksponenter
// ============================================================================

export const CHAPTER_1T_1_2_NARRATIV: TextbookChapter = {
  id: '1t-1-2-narrativ',
  courseId: '1t',
  chapterNumber: '1.2',
  title: 'Potenser',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om potensens kraft – hvordan gjentatt ganging ble til en elegant notasjon, og hvorfor potensreglene fungerer som de gjør.',
  estimatedMinutes: 40,
  competenceGoals: ['utforske og beskrive egenskaper ved potenser'],
  linkedChapterId: '1t-1-2',
  content: [    {
      id: '1t-1-2-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-2-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-1-2-n-intro',
      type: 'text',
      content: `## Gjentatt ganging – og behovet for en snarvei

Forestill deg at du legger et ark papir i to og bretter det. Etter ett brett har du $2$ lag. Etter to brett har du $2 \\cdot 2 = 4$ lag. Etter tre brett: $2 \\cdot 2 \\cdot 2 = 8$ lag. Etter ti brett? Da har du $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 1024$ lag – og det er ganske slitsomt å skrive ut. Heldigvis har matematikerne funnet en snarvei: vi skriver $2^{10}$ og sier «to opphøyd i tiende».

Denne snarveien kalles en **potens**. Når vi skriver $x^n$, betyr det at vi ganger **grunntallet** $x$ med seg selv $n$ ganger. Tallet $n$ kalles **eksponenten**. For eksempel er $2^3 = 2 \\cdot 2 \\cdot 2 = 8$, og $a^5 = a \\cdot a \\cdot a \\cdot a \\cdot a$.

Potenser dukker opp overalt i virkeligheten. Bakterier som deler seg dobler antallet for hver generasjon – det er $2^n$. Rentesrente på sparekontoen din bygger på potenser. Og i dataverdenen er alt bygget på potenser av $2$: $2^{10} = 1024$ er omtrent en kilobyte.

I dette kapittelet skal vi ikke bare lære å *beregne* potenser, men å *regne med* dem. Vi skal oppdage regler som lar oss multiplisere, dividere og opphøye potenser i hverandre – elegante snarveier som gjør kompliserte uttrykk mye enklere.`,
    },
    {
      id: '1t-1-2-n-section1',
      type: 'text',
      content: `## Multiplikasjon av potenser – legg sammen eksponentene

Hva skjer når vi ganger to potenser med *samme* grunntall? La oss se på et konkret eksempel: $x^2 \\cdot x^3$. Hvis vi skriver det ut, får vi $(x \\cdot x) \\cdot (x \\cdot x \\cdot x)$. Teller vi opp: det er fem $x$-er ganget sammen, altså $x^5$. Vi la rett og slett eksponentene $2$ og $3$ sammen og fikk $5$.

Dette er vår første potensregel: $x^a \\cdot x^b = x^{a+b}$. Når du ganger potenser med *samme grunntall*, legger du sammen eksponentene.

La oss prøve med tall: $3^4 \\cdot 3^5 = 3^{4+5} = 3^9$. Vi slipper å regne ut at $3^4 = 81$ og $3^5 = 243$ og deretter gange dem – vi kan gå rett til $3^9$.

Det fungerer også med bokstaver og koeffisienter. Hva blir $2a \\cdot 2a^4$? Vi samler tallene for seg og bokstavene for seg: $2 \\cdot 2 = 4$ og $a^1 \\cdot a^4 = a^{1+4} = a^5$. Totalt: $4a^5$.

Når vi har flere variabler, bruker vi regelen på hver variabel for seg. For eksempel: $a^3 \\cdot b^2 \\cdot a^5 \\cdot b^3$. Vi sorterer: $a$-ene for seg og $b$-ene for seg. $a^3 \\cdot a^5 = a^8$ og $b^2 \\cdot b^3 = b^5$. Svaret er $a^8 b^5$.

En viktig detalj: regelen gjelder bare når grunntallene er *like*. $2^3 \\cdot 3^4$ kan *ikke* forenkles med denne regelen, fordi grunntallene er forskjellige. Husk også at $3x^2 \\cdot 4x = 12x^3$ – vi ganger tallene ($3 \\cdot 4 = 12$) og legger sammen eksponentene ($2 + 1 = 3$), der den «usynlige» eksponenten på $x$ er $1$.`,
    },
    {
      id: '1t-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på multiplikasjon av potenser:',
        options: [
          { id: 'a', text: '$12x^5$', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-2-n-quiz1-q0',
            task: 'Hva blir $3x^2 \\cdot 4x^3$?',
            options: [
              { id: 'a', text: '$7x^5$', isCorrect: false },
              { id: 'b', text: '$12x^5$', isCorrect: true },
              { id: 'c', text: '$12x^6$', isCorrect: false },
              { id: 'd', text: '$7x^6$', isCorrect: false },
            ],
            solution: 'Vi ganger koeffisientene: $3 \\cdot 4 = 12$. Vi legger sammen eksponentene: $x^2 \\cdot x^3 = x^{2+3} = x^5$. Svaret er $12x^5$.',
          },
          {
            id: '1t-1-2-n-quiz1-q1',
            task: 'Hva blir $x^4 \\cdot x^7$?',
            options: [
              { id: 'a', text: '$x^{28}$', isCorrect: false },
              { id: 'b', text: '$x^{11}$', isCorrect: true },
              { id: 'c', text: '$x^3$', isCorrect: false },
              { id: 'd', text: '$2x^{11}$', isCorrect: false },
            ],
            solution: 'Vi legger sammen eksponentene: $x^4 \\cdot x^7 = x^{4+7} = x^{11}$.',
          },
          {
            id: '1t-1-2-n-quiz1-q2',
            task: 'Forenkle $a^3 \\cdot b^2 \\cdot a^5 \\cdot b$.',
            options: [
              { id: 'a', text: '$a^8 b^3$', isCorrect: true },
              { id: 'b', text: '$a^{15} b^2$', isCorrect: false },
              { id: 'c', text: '$a^8 b^2$', isCorrect: false },
              { id: 'd', text: '$(ab)^{11}$', isCorrect: false },
            ],
            solution: 'Vi samler like grunntall: $a^3 \\cdot a^5 = a^{3+5} = a^8$ og $b^2 \\cdot b^1 = b^{2+1} = b^3$. Svaret er $a^8 b^3$.',
          },
        ],
      },
    },    {
      id: '1t-1-2-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-2-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-2-n-section2',
      type: 'text',
      content: `## Divisjon av potenser – trekk fra eksponentene

Nå som vi vet hva som skjer med eksponentene ved multiplikasjon, er det naturlig å spørre: hva skjer ved divisjon?

La oss starte med et eksempel: $\\frac{4^5}{4^2}$. Skriver vi det ut, får vi $\\frac{4 \\cdot 4 \\cdot 4 \\cdot 4 \\cdot 4}{4 \\cdot 4}$. De to firerne i nevneren kan strykes mot to av firerne i telleren, og vi sitter igjen med $4 \\cdot 4 \\cdot 4 = 4^3$. Vi trakk eksponenten i nevneren ($2$) fra eksponenten i telleren ($5$) og fikk $5 - 2 = 3$.

Regelen er: $\\frac{x^a}{x^b} = x^{a-b}$. Ved divisjon av potenser med samme grunntall trekker vi fra eksponentene.

Dette åpner for en interessant mulighet. Hva om eksponenten i nevneren er *større* enn i telleren? $\\frac{2^3}{2^5} = 2^{3-5} = 2^{-2}$. Vi får en *negativ eksponent*! Og det leder oss til en viktig definisjon: $x^{-n} = \\frac{1}{x^n}$. Altså er $2^{-2} = \\frac{1}{2^2} = \\frac{1}{4}$. En negativ eksponent betyr at potensen flytter seg fra teller til nevner (eller omvendt).

La oss se et eksempel med flere variabler: $\\frac{x^4 y^3}{x^2 y^2}$. Vi behandler hver variabel for seg: $\\frac{x^4}{x^2} = x^{4-2} = x^2$ og $\\frac{y^3}{y^2} = y^{3-2} = y$. Svaret er $x^2 y$.

Negative eksponenter i brøker følger en nyttig snarvei: en faktor med negativ eksponent i telleren kan flyttes ned i nevneren med positiv eksponent, og omvendt. Formelt: $\\frac{a^{-n}}{b^{-m}} = \\frac{b^m}{a^n}$. For eksempel: $\\frac{2^{-5}}{3^{-2}} = \\frac{3^2}{2^5} = \\frac{9}{32}$.`,
    },
    {
      id: '1t-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på divisjon og negative eksponenter:',
        options: [
          { id: 'a', text: '$\\frac{4}{a^2}$', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-2-n-quiz2-q0',
            task: 'Hva er $4a^{-2}$ skrevet uten negativ eksponent?',
            options: [
              { id: 'a', text: '$\\frac{1}{4a^2}$', isCorrect: false },
              { id: 'b', text: '$\\frac{4}{a^2}$', isCorrect: true },
              { id: 'c', text: '$-4a^2$', isCorrect: false },
              { id: 'd', text: '$\\frac{a^2}{4}$', isCorrect: false },
            ],
            solution: '$4a^{-2} = 4 \\cdot \\frac{1}{a^2} = \\frac{4}{a^2}$. Det er bare $a$ som har negativ eksponent, ikke $4$. Koeffisienten $4$ blir stående i telleren.',
          },
          {
            id: '1t-1-2-n-quiz2-q1',
            task: 'Hva blir $\\frac{x^5}{x^2}$?',
            options: [
              { id: 'a', text: '$x^{10}$', isCorrect: false },
              { id: 'b', text: '$x^7$', isCorrect: false },
              { id: 'c', text: '$x^3$', isCorrect: true },
              { id: 'd', text: '$x^{2.5}$', isCorrect: false },
            ],
            solution: 'Vi trekker fra eksponentene: $\\frac{x^5}{x^2} = x^{5-2} = x^3$.',
          },
          {
            id: '1t-1-2-n-quiz2-q2',
            task: 'Hva er $2^{-3}$?',
            options: [
              { id: 'a', text: '$-8$', isCorrect: false },
              { id: 'b', text: '$-6$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{8}$', isCorrect: true },
              { id: 'd', text: '$\\frac{1}{6}$', isCorrect: false },
            ],
            solution: '$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. Negativ eksponent betyr at vi flytter potensen til nevneren.',
          },
          {
            id: '1t-1-2-n-quiz2-q3',
            task: 'Forenkle $\\frac{x^4 y^3}{x^2 y^2}$.',
            options: [
              { id: 'a', text: '$x^2 y$', isCorrect: true },
              { id: 'b', text: '$x^2 y^5$', isCorrect: false },
              { id: 'c', text: '$x^6 y^5$', isCorrect: false },
              { id: 'd', text: '$\\frac{x^2}{y}$', isCorrect: false },
            ],
            solution: 'Vi behandler hver variabel for seg: $\\frac{x^4}{x^2} = x^{4-2} = x^2$ og $\\frac{y^3}{y^2} = y^{3-2} = y^1 = y$. Svaret er $x^2 y$.',
          },
          {
            id: '1t-1-2-n-quiz2-q4',
            task: 'Skriv $\\frac{2^{-5}}{3^{-2}}$ uten negative eksponenter.',
            options: [
              { id: 'a', text: '$\\frac{3^2}{2^5} = \\frac{9}{32}$', isCorrect: true },
              { id: 'b', text: '$\\frac{2^5}{3^2} = \\frac{32}{9}$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{2^5 \\cdot 3^2}$', isCorrect: false },
              { id: 'd', text: '$6^{-3}$', isCorrect: false },
            ],
            solution: 'Faktorer med negativ eksponent bytter plass: $\\frac{2^{-5}}{3^{-2}} = \\frac{3^2}{2^5} = \\frac{9}{32}$. $2^{-5}$ flyttes ned i nevneren som $2^5$, og $3^{-2}$ flyttes opp i telleren som $3^2$.',
          },
        ],
      },
    },    {
      id: '1t-1-2-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-2-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-2-n-section3',
      type: 'text',
      content: `## Potens av et produkt og en brøk – eksponenten sprer seg

Hva skjer når vi opphøyer et *produkt* i en potens? La oss se på $(xy)^4$. Det betyr $xy \\cdot xy \\cdot xy \\cdot xy$. Hvis vi sorterer alle $x$-ene og $y$-ene, får vi $x \\cdot x \\cdot x \\cdot x \\cdot y \\cdot y \\cdot y \\cdot y = x^4 y^4$. Eksponenten «spredde seg» til begge faktorene inne i parentesen.

Regelen er: $(a \\cdot b)^n = a^n \\cdot b^n$. Når du opphøyer et produkt i en eksponent, får *hver faktor* denne eksponenten.

For eksempel: $(2x)^5 = 2^5 \\cdot x^5 = 32x^5$. Og $(3x)^2 = 3^2 \\cdot x^2 = 9x^2$. En vanlig feil er å glemme å opphøye koeffisienten – husk at $(3x)^2$ *ikke* er $3x^2$, men $9x^2$.

Denne regelen fungerer også kombinert med de andre. Ta $3a^4 \\cdot (2a)^3$. Først løser vi opp potensen av produktet: $(2a)^3 = 2^3 \\cdot a^3 = 8a^3$. Så ganger vi: $3a^4 \\cdot 8a^3 = 24a^{4+3} = 24a^7$.

Helt analogt fungerer det for brøker. $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$. Eksponenten fordeles til *både* teller og nevner. For eksempel: $\\left(\\frac{2}{3x}\\right)^2 = \\frac{2^2}{(3x)^2} = \\frac{4}{9x^2}$. Legg merke til at $(3x)^2 = 9x^2$, ikke $3x^2$ – vi opphøyer hele nevneren.

Disse to reglene – potens av produkt og potens av brøk – er spesielt nyttige når du skal forenkle uttrykk der det er parenteser med flere faktorer inni.`,
    },
    {
      id: '1t-1-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på potens av produkt og brøk:',
        options: [
          { id: 'a', text: '$9x^2$', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-2-n-quiz3-q0',
            task: 'Hva blir $(3x)^2$?',
            options: [
              { id: 'a', text: '$3x^2$', isCorrect: false },
              { id: 'b', text: '$6x^2$', isCorrect: false },
              { id: 'c', text: '$9x^2$', isCorrect: true },
              { id: 'd', text: '$9x$', isCorrect: false },
            ],
            solution: '$(3x)^2 = 3^2 \\cdot x^2 = 9x^2$. Eksponenten fordeles til begge faktorene inne i parentesen: både $3$ og $x$ opphøyes i andre.',
          },
          {
            id: '1t-1-2-n-quiz3-q1',
            task: 'Hva blir $(2a)^3$?',
            options: [
              { id: 'a', text: '$2a^3$', isCorrect: false },
              { id: 'b', text: '$6a^3$', isCorrect: false },
              { id: 'c', text: '$8a^3$', isCorrect: true },
              { id: 'd', text: '$8a$', isCorrect: false },
            ],
            solution: '$(2a)^3 = 2^3 \\cdot a^3 = 8a^3$. Husk at koeffisienten $2$ også må opphøyes: $2^3 = 8$.',
          },
          {
            id: '1t-1-2-n-quiz3-q2',
            task: 'Hva blir $\\left(\\frac{x}{y}\\right)^3$?',
            options: [
              { id: 'a', text: '$\\frac{x^3}{y}$', isCorrect: false },
              { id: 'b', text: '$\\frac{x}{y^3}$', isCorrect: false },
              { id: 'c', text: '$\\frac{x^3}{y^3}$', isCorrect: true },
              { id: 'd', text: '$\\frac{3x}{3y}$', isCorrect: false },
            ],
            solution: '$\\left(\\frac{x}{y}\\right)^3 = \\frac{x^3}{y^3}$. Eksponenten fordeles til både teller og nevner i brøken.',
          },
          {
            id: '1t-1-2-n-quiz3-q3',
            task: 'Forenkle $3a^4 \\cdot (2a)^3$.',
            options: [
              { id: 'a', text: '$6a^7$', isCorrect: false },
              { id: 'b', text: '$24a^7$', isCorrect: true },
              { id: 'c', text: '$24a^{12}$', isCorrect: false },
              { id: 'd', text: '$6a^{12}$', isCorrect: false },
            ],
            solution: 'Først løser vi opp potensen: $(2a)^3 = 2^3 \\cdot a^3 = 8a^3$. Så ganger vi: $3a^4 \\cdot 8a^3 = 24a^{4+3} = 24a^7$. Her kombinerer vi potens av produkt med multiplikasjonsregelen.',
          },
        ],
      },
    },    {
      id: '1t-1-2-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-2-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-2-n-section4',
      type: 'text',
      content: `## Potens av potens – gang eksponentene

Her kommer kanskje den mest elegante regelen av dem alle. Hva skjer når vi opphøyer en potens i en *ny* potens? La oss undersøke $(x^4)^3$. Det betyr $x^4 \\cdot x^4 \\cdot x^4$. Nå bruker vi multiplikasjonsregelen: $x^{4+4+4} = x^{12}$. Og $4 \\cdot 3 = 12$. Vi *ganget* eksponentene.

Regelen er: $(x^a)^b = x^{a \\cdot b}$. Når du opphøyer en potens i en eksponent, ganger du eksponentene med hverandre.

La oss se et eksempel med koeffisienter: $(2a^3)^4$. Først bruker vi potens-av-produkt-regelen: $2^4 \\cdot (a^3)^4$. Så potens-av-potens: $16 \\cdot a^{3 \\cdot 4} = 16a^{12}$.

Det fungerer også for brøker. $\\left(\\frac{y^2}{x}\\right)^3 = \\frac{(y^2)^3}{x^3} = \\frac{y^{2 \\cdot 3}}{x^3} = \\frac{y^6}{x^3}$.

Her er et mer avansert eksempel der vi kombinerer flere regler: $\\left(\\frac{2x^3}{y^2}\\right)^3 = \\frac{2^3 \\cdot (x^3)^3}{(y^2)^3} = \\frac{8x^9}{y^6}$. Vi brukte potens av brøk, potens av produkt *og* potens av potens – alt i ett steg.

Denne regelen fungerer også med negative eksponenter. For eksempel: $\\left(\\frac{a^{-3}}{b^{-2}}\\right)^4 = \\frac{(a^{-3})^4}{(b^{-2})^4} = \\frac{a^{-12}}{b^{-8}} = \\frac{b^8}{a^{12}}$. I det siste steget flyttet vi faktorene med negative eksponenter.`,
    },
    {
      id: '1t-1-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på potens av potens:',
        options: [
          { id: 'a', text: '$25a^4$', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-2-n-quiz4-q0',
            task: 'Hva blir $(5a^2)^2$?',
            options: [
              { id: 'a', text: '$5a^4$', isCorrect: false },
              { id: 'b', text: '$10a^4$', isCorrect: false },
              { id: 'c', text: '$25a^4$', isCorrect: true },
              { id: 'd', text: '$25a^2$', isCorrect: false },
            ],
            solution: '$(5a^2)^2 = 5^2 \\cdot (a^2)^2 = 25 \\cdot a^{2 \\cdot 2} = 25a^4$. Vi brukte først potens av produkt ($5^2 = 25$), deretter potens av potens ($a^{2 \\cdot 2} = a^4$).',
          },
          {
            id: '1t-1-2-n-quiz4-q1',
            task: 'Hva blir $(x^3)^4$?',
            options: [
              { id: 'a', text: '$x^7$', isCorrect: false },
              { id: 'b', text: '$x^{12}$', isCorrect: true },
              { id: 'c', text: '$x^{34}$', isCorrect: false },
              { id: 'd', text: '$4x^3$', isCorrect: false },
            ],
            solution: '$(x^3)^4 = x^{3 \\cdot 4} = x^{12}$. Ved potens av potens ganger vi eksponentene.',
          },
          {
            id: '1t-1-2-n-quiz4-q2',
            task: 'Forenkle $(2a^3)^4$.',
            options: [
              { id: 'a', text: '$2a^{12}$', isCorrect: false },
              { id: 'b', text: '$8a^{12}$', isCorrect: false },
              { id: 'c', text: '$16a^{12}$', isCorrect: true },
              { id: 'd', text: '$16a^7$', isCorrect: false },
            ],
            solution: '$(2a^3)^4 = 2^4 \\cdot (a^3)^4 = 16 \\cdot a^{3 \\cdot 4} = 16a^{12}$. Husk å opphøye koeffisienten også: $2^4 = 16$.',
          },
          {
            id: '1t-1-2-n-quiz4-q3',
            task: 'Forenkle $\\left(\\frac{y^2}{x}\\right)^3$.',
            options: [
              { id: 'a', text: '$\\frac{y^6}{x^3}$', isCorrect: true },
              { id: 'b', text: '$\\frac{y^5}{x^3}$', isCorrect: false },
              { id: 'c', text: '$\\frac{y^8}{x^3}$', isCorrect: false },
              { id: 'd', text: '$\\frac{y^6}{x}$', isCorrect: false },
            ],
            solution: '$\\left(\\frac{y^2}{x}\\right)^3 = \\frac{(y^2)^3}{x^3} = \\frac{y^{2 \\cdot 3}}{x^3} = \\frac{y^6}{x^3}$. Vi brukte potens av brøk og potens av potens.',
          },
        ],
      },
    },    {
      id: '1t-1-2-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-1-2-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-1-2-n-section5',
      type: 'text',
      content: `## Eksponent null og en opprydding i verktøykassen

Vi har enda en viktig ting å ta opp: hva betyr $a^0$? La oss bruke divisjonsregelen til å finne ut. Vi vet at $\\frac{x^5}{x^5} = 1$ (ethvert tall delt på seg selv er $1$). Men divisjonsregelen gir oss $x^{5-5} = x^0$. Altså må $x^0 = 1$. Denne regelen gjelder for *alle* tall unntatt $0$ – uttrykket $0^0$ er **udefinert** fordi det gir motstridende resultater.

Noen eksempler: $3^0 = 1$. $(-9000)^0 = 1$. Men vær forsiktig med $2x^0$: her er det bare $x$ som har eksponenten $0$, ikke hele uttrykket. Altså: $2x^0 = 2 \\cdot x^0 = 2 \\cdot 1 = 2$. Sammenlikn med $(2x)^0 = 1$, der hele produktet $2x$ er opphøyd i null.

Nå har vi en komplett verktøykasse for potenser. La oss ta en opprydding og se alle reglene samlet. **Multiplikasjon**: $x^a \\cdot x^b = x^{a+b}$ – legg sammen eksponentene. **Divisjon**: $\\frac{x^a}{x^b} = x^{a-b}$ – trekk fra eksponentene. **Negativ eksponent**: $x^{-n} = \\frac{1}{x^n}$ – flytt til andre siden av brøkstreken. **Potens av produkt**: $(ab)^n = a^n b^n$ – fordel eksponenten. **Potens av brøk**: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$ – fordel til teller og nevner. **Potens av potens**: $(x^a)^b = x^{ab}$ – gang eksponentene. **Null som eksponent**: $a^0 = 1$ for $a \\neq 0$.

En god strategi for sammensatte oppgaver er å *omskrive alt til primtallspotenser*. For eksempel: $\\frac{3^5}{9^2} = \\frac{3^5}{(3^2)^2} = \\frac{3^5}{3^4} = 3^{5-4} = 3$. Ved å skrive $9$ som $3^2$ kunne vi bruke potensreglene rett frem.`,
    },
    {
      id: '1t-1-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på null-eksponent og sammensatte uttrykk:',
        options: [
          { id: 'a', text: '$\\frac{1}{2}$', isCorrect: true },
        ],
        questions: [
          {
            id: '1t-1-2-n-quiz5-q0',
            task: 'Hva blir $\\frac{2^5}{8^2}$?',
            options: [
              { id: 'a', text: '$4$', isCorrect: false },
              { id: 'b', text: '$2$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{2}$', isCorrect: true },
              { id: 'd', text: '$1$', isCorrect: false },
            ],
            solution: 'Vi skriver $8$ som $2^3$: $\\frac{2^5}{8^2} = \\frac{2^5}{(2^3)^2} = \\frac{2^5}{2^6} = 2^{5-6} = 2^{-1} = \\frac{1}{2}$.',
          },
          {
            id: '1t-1-2-n-quiz5-q1',
            task: 'Hva er verdien av $2x^0$?',
            options: [
              { id: 'a', text: '$0$', isCorrect: false },
              { id: 'b', text: '$1$', isCorrect: false },
              { id: 'c', text: '$2$', isCorrect: true },
              { id: 'd', text: '$2x$', isCorrect: false },
            ],
            solution: '$2x^0 = 2 \\cdot x^0 = 2 \\cdot 1 = 2$. Bare $x$ har eksponenten $0$, ikke hele uttrykket. Sammenlikn med $(2x)^0 = 1$.',
          },
          {
            id: '1t-1-2-n-quiz5-q2',
            task: 'Forenkle $\\frac{4^5}{16^2}$.',
            options: [
              { id: 'a', text: '$4$', isCorrect: true },
              { id: 'b', text: '$16$', isCorrect: false },
              { id: 'c', text: '$1$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{4}$', isCorrect: false },
            ],
            solution: 'Vi skriver $16$ som $4^2$: $\\frac{4^5}{16^2} = \\frac{4^5}{(4^2)^2} = \\frac{4^5}{4^4} = 4^{5-4} = 4^1 = 4$.',
          },
          {
            id: '1t-1-2-n-quiz5-q3',
            task: 'Forenkle $\\frac{(3x^2)^3}{9x^4}$.',
            options: [
              { id: 'a', text: '$3x^2$', isCorrect: true },
              { id: 'b', text: '$3x^{10}$', isCorrect: false },
              { id: 'c', text: '$27x^2$', isCorrect: false },
              { id: 'd', text: '$x^2$', isCorrect: false },
            ],
            solution: 'Telleren: $(3x^2)^3 = 3^3 \\cdot (x^2)^3 = 27x^6$. Så: $\\frac{27x^6}{9x^4} = \\frac{27}{9} \\cdot x^{6-4} = 3x^2$. Her brukte vi potens av produkt, potens av potens og divisjon.',
          },
        ],
      },
    },    {
      id: '1t-1-2-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-1-2-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket potensens verden – fra den enkle ideen om gjentatt ganging til et sett med kraftige regneregler.

**Potensnotasjonen** $x^n$ betyr at grunntallet $x$ ganges med seg selv $n$ ganger. Det er en kompakt og elegant måte å uttrykke gjentatt multiplikasjon på.

**Multiplikasjon** av potenser med likt grunntall: $x^a \\cdot x^b = x^{a+b}$. Vi legger sammen eksponentene. **Divisjon**: $\\frac{x^a}{x^b} = x^{a-b}$. Vi trekker fra eksponentene. Disse to reglene er grunnsteinen som de andre bygger på.

**Negative eksponenter** betyr at potensen hører hjemme på den andre siden av brøkstreken: $x^{-n} = \\frac{1}{x^n}$. I brøker kan faktorer med negativ eksponent flyttes opp eller ned ved å bytte fortegn: $\\frac{a^{-n}}{b^{-m}} = \\frac{b^m}{a^n}$.

**Potens av et produkt** og **potens av en brøk** lar eksponenten fordele seg: $(ab)^n = a^n b^n$ og $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$. **Potens av potens** ganger eksponentene: $(x^a)^b = x^{ab}$.

**Null som eksponent** gir alltid $1$, så lenge grunntallet ikke er null: $a^0 = 1$ for $a \\neq 0$.

Med disse reglene i verktøykassen kan du forenkle selv de mest innviklede potensuttrykk – steg for steg, regel for regel.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const MATEMATIKK_1T_NARRATIV_KAP1_CHAPTERS = [
  CHAPTER_1T_1_1_NARRATIV,
  CHAPTER_1T_1_2_NARRATIV,
];
