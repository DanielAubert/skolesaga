/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON – Kapittel 3 funksjoner
 * Kapittel 3.4: Andregradsfunksjoner
 * Kapittel 3.5: Nullpunkter og fortegn
 * Kapittel 3.6: Polynomfunksjoner
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.4 NARRATIV: Andregradsfunksjoner
// ============================================================================

export const CHAPTER_1T_3_4_NARRATIV: TextbookChapter = {
  id: '1t-3-4-narrativ',
  courseId: '1t',
  chapterNumber: '3.4',
  title: 'Andregradsfunksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om parabeler som svinger seg elegant gjennom koordinatsystemet – hvordan du finner toppunkt, bunnpunkt og symmetrilinje.',
  estimatedMinutes: 40,
  competenceGoals: ['forstå og tegne andregradsfunksjoner'],
  linkedChapterId: '1t-3-4',
  content: [    { id: '1t-3-4-n-intro', type: 'text', content: `## Kurven som forandrer retning

Tenk deg at du kaster en ball rett opp i lufta. Den stiger, bremser ned, stopper et øyeblikk helt øverst, og faller så tilbake ned igjen. Banen ballen følger er ikke en rett linje – den er en buet kurve som matematikere kaller en **parabel**. Parabelen er grafen til en **andregradsfunksjon**, og den dukker opp overalt: i brokonstruksjoner, i lyskasterne på bilen din, og til og med i parabolantenner.

En andregradsfunksjon har formen $f(x) = ax^2 + bx + c$, der $a$, $b$ og $c$ er konstanter og $a \\neq 0$. Det er $x^2$-leddet som gir kurven sin karakteristiske buede form. I dette kapittelet skal vi utforske hvordan parabelen oppfører seg, hvordan du finner dens høyeste eller laveste punkt, og hvordan du kan tegne den nøyaktig ut fra funksjonsuttrykket.` },
    { id: '1t-3-4-n-section1', type: 'text', content: `## Smilende eller sur – fortegnet til $a$

Det aller første du bør se på når du møter en andregradsfunksjon, er koeffisienten $a$ – tallet foran $x^2$. Denne koeffisienten kalles den **ledende koeffisienten**, og den avgjør om parabelen åpner oppover eller nedover.

Hvis $a > 0$, altså positiv, ser parabelen ut som en smilefjes – den åpner oppover og har et laveste punkt som vi kaller **bunnpunktet**. Tenk deg en skål: den holder ting inne, og funksjonsverdiene kan ikke bli lavere enn bunnpunktet.

Hvis $a < 0$, altså negativ, snur parabelen seg og åpner nedover. Da ligner den mer på et fjell eller en regnbue – den har et høyeste punkt som vi kaller **toppunktet**. Funksjonen kan aldri nå høyere enn dette punktet.

Men $a$ bestemmer mer enn bare retningen. Størrelsen til $|a|$ påvirker hvor **smal** eller **bred** parabelen er. Når $|a|$ er stor, for eksempel $a = 3$, presses parabelen sammen og blir smal. Når $|a|$ er liten, for eksempel $a = 0{,}5$, brer parabelen seg ut og blir flatere. Så $f(x) = 3x^2$ er mye smalere enn $f(x) = 0{,}5x^2$, men begge åpner oppover fordi $a > 0$.

La oss ta et eksempel: $f(x) = 2x^2 - 4x + 1$. Her er $a = 2$, $b = -4$ og $c = 1$. Siden $a = 2 > 0$, vet vi at parabelen åpner oppover og har et bunnpunkt. Og siden $|a| = 2 > 1$, er parabelen relativt smal. Konstantleddet $c = 1$ forteller oss at grafen skjærer $y$-aksen i punktet $(0, 1)$, fordi $f(0) = 1$.` },
    { id: '1t-3-4-n-quiz1', type: 'exercise', exercise: { id: '1t-3-4-n-quiz1', number: 'Quiz 1', type: 'multiple-choice', task: 'Test deg selv på fortegn, bredde og y-skjæring:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-4-n-quiz1-q0',
        task: 'Funksjonen $g(x) = -3x^2 + 6x$ har:',
        options: [ { id: 'a', text: 'Bunnpunkt og er smal', isCorrect: false }, { id: 'b', text: 'Toppunkt og er bred', isCorrect: false }, { id: 'c', text: 'Toppunkt og er smal', isCorrect: true }, { id: 'd', text: 'Bunnpunkt og er bred', isCorrect: false } ],
        solution: 'Her er $a = -3$. Siden $a < 0$, åpner parabelen nedover og har et toppunkt. Siden $|a| = 3 > 1$, er parabelen smal.',
      },
      {
        id: '1t-3-4-n-quiz1-q1',
        task: 'Hvilken av disse parablene åpner oppover?',
        options: [ { id: 'a', text: '$f(x) = -2x^2 + x$', isCorrect: false }, { id: 'b', text: '$f(x) = -0{,}5x^2 + 3$', isCorrect: false }, { id: 'c', text: '$f(x) = 4x^2 - x + 1$', isCorrect: true }, { id: 'd', text: '$f(x) = -x^2 + 7x - 2$', isCorrect: false } ],
        solution: 'En parabel åpner oppover når $a > 0$. Bare $f(x) = 4x^2 - x + 1$ har $a = 4 > 0$. De andre har negativ $a$.',
      },
      {
        id: '1t-3-4-n-quiz1-q2',
        task: 'Hvilken parabel er bredest?',
        options: [ { id: 'a', text: '$f(x) = 5x^2$', isCorrect: false }, { id: 'b', text: '$f(x) = 0{,}2x^2$', isCorrect: true }, { id: 'c', text: '$f(x) = 2x^2$', isCorrect: false }, { id: 'd', text: '$f(x) = x^2$', isCorrect: false } ],
        solution: 'Jo mindre $|a|$ er, desto bredere er parabelen. Her er $|a| = 0{,}2$ den minste verdien, så $f(x) = 0{,}2x^2$ er bredest.',
      },
      {
        id: '1t-3-4-n-quiz1-q3',
        task: 'Hva er $y$-skjæringen til $f(x) = 2x^2 - 4x + 1$?',
        options: [ { id: 'a', text: '$(0, 2)$', isCorrect: false }, { id: 'b', text: '$(0, -4)$', isCorrect: false }, { id: 'c', text: '$(1, 0)$', isCorrect: false }, { id: 'd', text: '$(0, 1)$', isCorrect: true } ],
        solution: '$y$-skjæringen finner vi ved å sette $x = 0$: $f(0) = 2 \\cdot 0 - 4 \\cdot 0 + 1 = 1$. Konstantleddet $c = 1$ gir $y$-skjæringen $(0, 1)$.',
      },
    ] } },    { id: '1t-3-4-n-section2', type: 'text', content: `## Symmetrilinjen – parabelens speil

En av de vakreste egenskapene til parabelen er at den er perfekt **symmetrisk**. Hvis du tenker deg en vertikal linje som deler parabelen i to like halvdeler, så er denne linjen **symmetrilinjen**. Alt som skjer på venstre side av denne linjen, skjer speilt på høyre side.

For funksjonen $f(x) = ax^2 + bx + c$ er symmetrilinjen gitt ved formelen:

$$x = -\\frac{b}{2a}$$

Denne formelen er verdt å huske godt, for den gir deg $x$-koordinaten til topp- eller bunnpunktet med én gang. Når du har funnet denne $x$-verdien, setter du den inn i funksjonsuttrykket for å finne $y$-koordinaten.

La oss prøve med $f(x) = x^2 - 6x + 5$. Her er $a = 1$, $b = -6$ og $c = 5$. Symmetrilinjen er $x = -\\frac{-6}{2 \\cdot 1} = \\frac{6}{2} = 3$. Nå vet vi at $x$-koordinaten til bunnpunktet er $3$. For å finne $y$-koordinaten regner vi ut $f(3) = 3^2 - 6 \\cdot 3 + 5 = 9 - 18 + 5 = -4$. Bunnpunktet er altså $(3, -4)$.

Legg merke til hvor mye informasjon vi har fått fra denne ene formelen: vi vet at parabelen har et bunnpunkt (fordi $a = 1 > 0$), vi vet nøyaktig hvor bunnpunktet er, og vi vet at parabelen er symmetrisk om linjen $x = 3$. Det betyr for eksempel at $f(2) = f(4)$, fordi $2$ og $4$ ligger like langt fra symmetrilinjen $x = 3$.` },
    { id: '1t-3-4-n-quiz2', type: 'exercise', exercise: { id: '1t-3-4-n-quiz2', number: 'Quiz 2', type: 'multiple-choice', task: 'Test deg selv på symmetrilinjen:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-4-n-quiz2-q0',
        task: 'Hva er symmetrilinjen til $f(x) = x^2 + 4x + 1$?',
        options: [ { id: 'a', text: '$x = 4$', isCorrect: false }, { id: 'b', text: '$x = -2$', isCorrect: true }, { id: 'c', text: '$x = 2$', isCorrect: false }, { id: 'd', text: '$x = -4$', isCorrect: false } ],
        solution: 'Vi bruker formelen $x = -\\frac{b}{2a} = -\\frac{4}{2 \\cdot 1} = -\\frac{4}{2} = -2$. Symmetrilinjen er $x = -2$.',
      },
      {
        id: '1t-3-4-n-quiz2-q1',
        task: 'Hva er formelen for symmetrilinjen til $f(x) = ax^2 + bx + c$?',
        options: [ { id: 'a', text: '$x = \\frac{b}{2a}$', isCorrect: false }, { id: 'b', text: '$x = -\\frac{c}{2a}$', isCorrect: false }, { id: 'c', text: '$x = -\\frac{b}{2a}$', isCorrect: true }, { id: 'd', text: '$x = \\frac{-b}{a}$', isCorrect: false } ],
        solution: 'Symmetrilinjen til en andregradsfunksjon er gitt ved $x = -\\frac{b}{2a}$. Denne formelen gir $x$-koordinaten til topp- eller bunnpunktet.',
      },
      {
        id: '1t-3-4-n-quiz2-q2',
        task: 'For $f(x) = x^2 - 6x + 5$ med symmetrilinje $x = 3$: hva er $f(2)$ sammenlignet med $f(4)$?',
        options: [ { id: 'a', text: '$f(2) > f(4)$', isCorrect: false }, { id: 'b', text: '$f(2) < f(4)$', isCorrect: false }, { id: 'c', text: '$f(2) = f(4)$', isCorrect: true }, { id: 'd', text: 'Kan ikke avgjøres uten utregning', isCorrect: false } ],
        solution: 'Siden $2$ og $4$ ligger like langt fra symmetrilinjen $x = 3$ (begge har avstand $1$), og parabelen er symmetrisk, må $f(2) = f(4)$. Vi kan sjekke: $f(2) = 4 - 12 + 5 = -3$ og $f(4) = 16 - 24 + 5 = -3$.',
      },
      {
        id: '1t-3-4-n-quiz2-q3',
        task: 'Hva er symmetrilinjen til $f(x) = 3x^2 + 12x - 7$?',
        options: [ { id: 'a', text: '$x = 2$', isCorrect: false }, { id: 'b', text: '$x = -4$', isCorrect: false }, { id: 'c', text: '$x = 4$', isCorrect: false }, { id: 'd', text: '$x = -2$', isCorrect: true } ],
        solution: 'Vi bruker $x = -\\frac{b}{2a} = -\\frac{12}{2 \\cdot 3} = -\\frac{12}{6} = -2$. Symmetrilinjen er $x = -2$.',
      },
    ] } },    { id: '1t-3-4-n-section3', type: 'text', content: `## Å finne toppunkt og bunnpunkt

Nå som vi kan finne symmetrilinjen, er det rett frem å finne selve topp- eller bunnpunktet. Metoden er alltid den samme: finn $x$-koordinaten med formelen $x = -\\frac{b}{2a}$, og sett så denne verdien inn i $f(x)$ for å finne $y$-koordinaten. Resultatet er punktet $\\left(-\\frac{b}{2a},\\; f\\left(-\\frac{b}{2a}\\right)\\right)$.

La oss ta funksjonen $f(x) = -2x^2 + 8x - 3$. Siden $a = -2 < 0$, vet vi at denne parabelen åpner nedover og har et toppunkt. Vi regner ut $x$-koordinaten: $x = -\\frac{8}{2 \\cdot (-2)} = -\\frac{8}{-4} = 2$. Deretter setter vi inn: $f(2) = -2 \\cdot 4 + 8 \\cdot 2 - 3 = -8 + 16 - 3 = 5$. Toppunktet er $(2, 5)$.

Hva betyr dette i praksis? Det betyr at den største verdien funksjonen kan ta er $5$, og den oppnås når $x = 2$. For alle andre $x$-verdier vil $f(x)$ være mindre enn $5$.

La oss ta et eksempel til: $g(x) = 2x^2 - 8x + 5$. Her er $a = 2 > 0$, så vi leter etter et bunnpunkt. Symmetrilinjen er $x = -\\frac{-8}{2 \\cdot 2} = \\frac{8}{4} = 2$. Bunnpunktets $y$-koordinat: $g(2) = 2 \\cdot 4 - 8 \\cdot 2 + 5 = 8 - 16 + 5 = -3$. Bunnpunktet er $(2, -3)$, og den minste verdien funksjonen kan ta er $-3$.

Denne teknikken er ekstremt nyttig i praktiske oppgaver. Tenk deg at du kaster en ball som følger banen $h(t) = -5t^2 + 20t$ meter etter $t$ sekunder. Når når ballen sitt høyeste punkt? Vi finner toppunktet: $t = -\\frac{20}{2 \\cdot (-5)} = 2$ sekunder, og $h(2) = -20 + 40 = 20$ meter. Ballen når altså 20 meter etter 2 sekunder.` },
    { id: '1t-3-4-n-quiz3', type: 'exercise', exercise: { id: '1t-3-4-n-quiz3', number: 'Quiz 3', type: 'multiple-choice', task: 'Test deg selv på topp- og bunnpunkt:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-4-n-quiz3-q0',
        task: 'Hva er toppunktet til $f(x) = -x^2 + 2x + 8$?',
        options: [ { id: 'a', text: '$(-1, 5)$', isCorrect: false }, { id: 'b', text: '$(2, 8)$', isCorrect: false }, { id: 'c', text: '$(1, 9)$', isCorrect: true }, { id: 'd', text: '$(1, 7)$', isCorrect: false } ],
        solution: 'Her er $a = -1$, $b = 2$. Symmetrilinjen er $x = -\\frac{2}{2 \\cdot (-1)} = 1$. Vi setter inn: $f(1) = -1 + 2 + 8 = 9$. Toppunktet er $(1, 9)$.',
      },
      {
        id: '1t-3-4-n-quiz3-q1',
        task: 'Funksjonen $g(x) = 2x^2 - 8x + 5$ har et bunnpunkt. Hva er den minste verdien funksjonen kan ta?',
        options: [ { id: 'a', text: '$5$', isCorrect: false }, { id: 'b', text: '$-3$', isCorrect: true }, { id: 'c', text: '$2$', isCorrect: false }, { id: 'd', text: '$-8$', isCorrect: false } ],
        solution: 'Symmetrilinjen: $x = -\\frac{-8}{2 \\cdot 2} = 2$. Bunnpunktets $y$-verdi: $g(2) = 2 \\cdot 4 - 8 \\cdot 2 + 5 = 8 - 16 + 5 = -3$. Den minste verdien er $-3$.',
      },
      {
        id: '1t-3-4-n-quiz3-q2',
        task: 'En ball kastes og følger banen $h(t) = -5t^2 + 20t$ meter. Når når ballen sitt høyeste punkt?',
        options: [ { id: 'a', text: 'Etter $4$ sekunder', isCorrect: false }, { id: 'b', text: 'Etter $1$ sekund', isCorrect: false }, { id: 'c', text: 'Etter $2$ sekunder', isCorrect: true }, { id: 'd', text: 'Etter $5$ sekunder', isCorrect: false } ],
        solution: 'Tiden for toppunktet: $t = -\\frac{20}{2 \\cdot (-5)} = -\\frac{20}{-10} = 2$ sekunder. Ballen når sitt høyeste punkt etter $2$ sekunder.',
      },
      {
        id: '1t-3-4-n-quiz3-q3',
        task: 'Har funksjonen $f(x) = 3x^2 - 12x + 7$ et toppunkt eller bunnpunkt?',
        options: [ { id: 'a', text: 'Toppunkt, fordi $b < 0$', isCorrect: false }, { id: 'b', text: 'Bunnpunkt, fordi $a > 0$', isCorrect: true }, { id: 'c', text: 'Toppunkt, fordi $a > 0$', isCorrect: false }, { id: 'd', text: 'Verken toppunkt eller bunnpunkt', isCorrect: false } ],
        solution: 'Det er $a = 3 > 0$ som avgjør. Positiv $a$ betyr at parabelen åpner oppover og har et bunnpunkt. Fortegnet til $b$ spiller ingen rolle for om det er topp- eller bunnpunkt.',
      },
    ] } },    { id: '1t-3-4-n-section4', type: 'text', content: `## Toppunktform og fullstendig kvadrats metode

Det finnes en annen måte å skrive andregradsfunksjoner på som gjør topp- eller bunnpunktet synlig med en gang. Den kalles **toppunktform**:

$$f(x) = a(x - h)^2 + k$$

Her er $(h, k)$ toppunktet eller bunnpunktet. Fordelen er åpenbar: du leser av topp- eller bunnpunktet direkte. For eksempel betyr $f(x) = 2(x - 3)^2 + 1$ at bunnpunktet er $(3, 1)$, fordi $a = 2 > 0$.

Men hvordan gjør vi om fra standardform $ax^2 + bx + c$ til toppunktform? Vi bruker **fullstendig kvadrats metode**. La oss ta $f(x) = x^2 - 4x + 7$ som eksempel.

Først grupperer vi $x$-leddene: $f(x) = (x^2 - 4x) + 7$. Deretter tar vi halvparten av koeffisienten foran $x$, som er $-4$, og kvadrerer: $\\left(\\frac{-4}{2}\\right)^2 = 4$. Vi legger til og trekker fra dette tallet inne i uttrykket: $f(x) = (x^2 - 4x + 4) - 4 + 7$. Nå kjenner vi igjen et fullstendig kvadrat: $x^2 - 4x + 4 = (x - 2)^2$. Dermed er $f(x) = (x - 2)^2 + 3$.

Fra toppunktformen leser vi at bunnpunktet er $(2, 3)$. Vi kan sjekke med formelen: $x = -\\frac{-4}{2} = 2$ og $f(2) = 4 - 8 + 7 = 3$. Stemmer perfekt!

La oss ta ett eksempel til: $g(x) = x^2 + 6x + 5$. Halvparten av $6$ er $3$, og $3^2 = 9$. Så $g(x) = (x^2 + 6x + 9) - 9 + 5 = (x + 3)^2 - 4$. Bunnpunktet er $(-3, -4)$.` },
    { id: '1t-3-4-n-quiz4', type: 'exercise', exercise: { id: '1t-3-4-n-quiz4', number: 'Quiz 4', type: 'multiple-choice', task: 'Test deg selv på toppunktform og fullstendig kvadrat:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-4-n-quiz4-q0',
        task: 'Hva er toppunktformen til $f(x) = x^2 - 2x - 8$?',
        options: [ { id: 'a', text: '$f(x) = (x - 2)^2 - 8$', isCorrect: false }, { id: 'b', text: '$f(x) = (x + 1)^2 - 9$', isCorrect: false }, { id: 'c', text: '$f(x) = (x - 1)^2 + 9$', isCorrect: false }, { id: 'd', text: '$f(x) = (x - 1)^2 - 9$', isCorrect: true } ],
        solution: 'Halvparten av $-2$ er $-1$, og $(-1)^2 = 1$. Dermed: $f(x) = (x^2 - 2x + 1) - 1 - 8 = (x - 1)^2 - 9$.',
      },
      {
        id: '1t-3-4-n-quiz4-q1',
        task: 'Hva er bunnpunktet til $f(x) = 2(x - 3)^2 + 1$?',
        options: [ { id: 'a', text: '$(3, 1)$', isCorrect: true }, { id: 'b', text: '$(-3, 1)$', isCorrect: false }, { id: 'c', text: '$(3, -1)$', isCorrect: false }, { id: 'd', text: '$(2, 1)$', isCorrect: false } ],
        solution: 'Toppunktformen er $f(x) = a(x - h)^2 + k$ der $(h, k)$ er topp-/bunnpunktet. Her leser vi direkte av at $h = 3$ og $k = 1$, så bunnpunktet er $(3, 1)$.',
      },
      {
        id: '1t-3-4-n-quiz4-q2',
        task: 'I fullstendig kvadrats metode for $f(x) = x^2 + 6x + 5$: hvilket tall legger vi til og trekker fra?',
        options: [ { id: 'a', text: '$6$', isCorrect: false }, { id: 'b', text: '$36$', isCorrect: false }, { id: 'c', text: '$9$', isCorrect: true }, { id: 'd', text: '$3$', isCorrect: false } ],
        solution: 'Vi tar halvparten av koeffisienten foran $x$: $\\frac{6}{2} = 3$. Deretter kvadrerer vi: $3^2 = 9$. Vi legger til og trekker fra $9$.',
      },
      {
        id: '1t-3-4-n-quiz4-q3',
        task: 'Hva er bunnpunktet til $g(x) = x^2 + 6x + 5$?',
        options: [ { id: 'a', text: '$(3, -4)$', isCorrect: false }, { id: 'b', text: '$(-3, 4)$', isCorrect: false }, { id: 'c', text: '$(-3, -4)$', isCorrect: true }, { id: 'd', text: '$(6, 5)$', isCorrect: false } ],
        solution: 'Med fullstendig kvadrat: $g(x) = (x^2 + 6x + 9) - 9 + 5 = (x + 3)^2 - 4$. Bunnpunktet er $(-3, -4)$.',
      },
    ] } },    { id: '1t-3-4-n-section5', type: 'text', content: `## Å tegne en parabel steg for steg

Nå har vi alle verktøyene vi trenger for å tegne en parabel for hånd. La oss sette det hele sammen i en systematisk fremgangsmåte og bruke den på et konkret eksempel.

Vi tegner $f(x) = -2x^2 + 12x - 10$. Første steg er å se på fortegnet til $a$. Her er $a = -2 < 0$, så parabelen åpner nedover og har et toppunkt. Andre steg er å finne skjæringen med $y$-aksen. Vi regner ut $f(0) = -10$, så grafen går gjennom punktet $(0, -10)$.

Tredje steg er å finne symmetrilinjen: $x = -\\frac{12}{2 \\cdot (-2)} = -\\frac{12}{-4} = 3$. Fjerde steg er å finne toppunktet: $f(3) = -2 \\cdot 9 + 12 \\cdot 3 - 10 = -18 + 36 - 10 = 8$. Toppunktet er $(3, 8)$.

Femte steg er å finne eventuelle nullpunkter, altså der grafen krysser $x$-aksen. Det tar vi mer i dybden i neste kapittel, men vi kan nevne at denne funksjonen har nullpunkter i $x = 1$ og $x = 5$ (sjekk gjerne: $f(1) = -2 + 12 - 10 = 0$ og $f(5) = -50 + 60 - 10 = 0$).

Sjette og siste steg er å tegne en jevn kurve gjennom alle disse punktene. Start med toppunktet $(3, 8)$ øverst, gå gjennom nullpunktene $(1, 0)$ og $(5, 0)$, og ned gjennom $y$-skjæringen $(0, -10)$. Husk at kurven er symmetrisk om linjen $x = 3$.

Denne oppskriften fungerer for alle andregradsfunksjoner. Og den største verdien til denne funksjonen? Det er $8$, som oppnås når $x = 3$ – nøyaktig i toppunktet.` },
    { id: '1t-3-4-n-quiz5', type: 'exercise', exercise: { id: '1t-3-4-n-quiz5', number: 'Quiz 5', type: 'multiple-choice', task: 'Test deg selv på å tegne og analysere parabeler:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-4-n-quiz5-q0',
        task: 'En rakett har høyden $h(t) = -4t^2 + 32t + 5$ meter etter $t$ sekunder. Hva er den maksimale høyden?',
        options: [ { id: 'a', text: '$64$ meter', isCorrect: false }, { id: 'b', text: '$69$ meter', isCorrect: true }, { id: 'c', text: '$72$ meter', isCorrect: false }, { id: 'd', text: '$37$ meter', isCorrect: false } ],
        solution: 'Tid for toppunktet: $t = -\\frac{32}{2 \\cdot (-4)} = -\\frac{32}{-8} = 4$ sekunder. Maksimal høyde: $h(4) = -4 \\cdot 16 + 32 \\cdot 4 + 5 = -64 + 128 + 5 = 69$ meter.',
      },
      {
        id: '1t-3-4-n-quiz5-q1',
        task: 'Hva er $y$-skjæringen til $f(x) = -2x^2 + 12x - 10$?',
        options: [ { id: 'a', text: '$(0, 12)$', isCorrect: false }, { id: 'b', text: '$(0, -2)$', isCorrect: false }, { id: 'c', text: '$(0, -10)$', isCorrect: true }, { id: 'd', text: '$(0, 10)$', isCorrect: false } ],
        solution: '$y$-skjæringen er $f(0) = -2 \\cdot 0 + 12 \\cdot 0 - 10 = -10$. Punktet er $(0, -10)$.',
      },
      {
        id: '1t-3-4-n-quiz5-q2',
        task: 'For $f(x) = -2x^2 + 12x - 10$: hva er toppunktet?',
        options: [ { id: 'a', text: '$(3, 8)$', isCorrect: true }, { id: 'b', text: '$(-3, 8)$', isCorrect: false }, { id: 'c', text: '$(6, -10)$', isCorrect: false }, { id: 'd', text: '$(3, -8)$', isCorrect: false } ],
        solution: 'Symmetrilinjen: $x = -\\frac{12}{2 \\cdot (-2)} = 3$. Toppunktet: $f(3) = -2 \\cdot 9 + 12 \\cdot 3 - 10 = -18 + 36 - 10 = 8$. Toppunktet er $(3, 8)$.',
      },
      {
        id: '1t-3-4-n-quiz5-q3',
        task: 'Hva er den største verdien $f(x) = -2x^2 + 12x - 10$ kan ta?',
        options: [ { id: 'a', text: '$12$', isCorrect: false }, { id: 'b', text: '$-10$', isCorrect: false }, { id: 'c', text: '$3$', isCorrect: false }, { id: 'd', text: '$8$', isCorrect: true } ],
        solution: 'Siden $a = -2 < 0$, åpner parabelen nedover og har et toppunkt. Toppunktets $y$-verdi er $8$ (fra forrige oppgave), og dette er den største verdien funksjonen kan ta.',
      },
      {
        id: '1t-3-4-n-quiz5-q4',
        task: 'Hva er det første steget når du skal tegne en parabel?',
        options: [ { id: 'a', text: 'Finne nullpunktene', isCorrect: false }, { id: 'b', text: 'Sjekke fortegnet til $a$', isCorrect: true }, { id: 'c', text: 'Beregne $y$-skjæringen', isCorrect: false }, { id: 'd', text: 'Finne symmetrilinjen', isCorrect: false } ],
        solution: 'Det første steget er å sjekke fortegnet til $a$. Dette forteller deg om parabelen åpner oppover ($a > 0$) eller nedover ($a < 0$), og dermed om du leter etter et bunn- eller toppunkt.',
      },
    ] } },    { id: '1t-3-4-n-summary', type: 'text', content: `## Oppsummering

I dette kapittelet har vi blitt kjent med **andregradsfunksjoner** på formen $f(x) = ax^2 + bx + c$ og grafene deres – **parablene**.

Den **ledende koeffisienten** $a$ bestemmer om parabelen åpner oppover ($a > 0$, bunnpunkt) eller nedover ($a < 0$, toppunkt). Størrelsen $|a|$ avgjør bredden: stor $|a|$ gir smal parabel, liten $|a|$ gir bred parabel.

**Symmetrilinjen** $x = -\\frac{b}{2a}$ deler parabelen i to like halvdeler. Ved å sette denne $x$-verdien inn i funksjonen finner du topp- eller bunnpunktet: $\\left(-\\frac{b}{2a},\\; f\\left(-\\frac{b}{2a}\\right)\\right)$.

Med **fullstendig kvadrats metode** kan du skrive funksjonen på **toppunktform** $f(x) = a(x - h)^2 + k$, der $(h, k)$ er topp- eller bunnpunktet. Metoden går ut på å ta halvparten av koeffisienten foran $x$, kvadrere den, og legge til og trekke fra dette tallet.

For å tegne en parabel: sjekk fortegnet til $a$, finn $y$-skjæringen $f(0) = c$, beregn symmetrilinjen, finn topp-/bunnpunktet, og tegn en jevn, symmetrisk kurve.` },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5 NARRATIV: Nullpunkter og fortegn
// ============================================================================

export const CHAPTER_1T_3_5_NARRATIV: TextbookChapter = {
  id: '1t-3-5-narrativ',
  courseId: '1t',
  chapterNumber: '3.5',
  title: 'Nullpunkter og fortegn',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om der parabelen møter x-aksen – abc-formelen, faktorisering og hvordan du leser fortegnet til en andregradsfunksjon.',
  estimatedMinutes: 35,
  competenceGoals: ['finne nullpunkter til andregradsfunksjoner'],
  linkedChapterId: '1t-3-5',
  content: [    { id: '1t-3-5-n-intro', type: 'text', content: `## Der parabelen krysser x-aksen

I forrige kapittel lærte du å finne topp- og bunnpunkt til parabeler. Men det er ett spørsmål vi ikke har besvart: hvor krysser parabelen $x$-aksen? Disse krysningspunktene kalles **nullpunkter**, fordi det er der $f(x) = 0$. Å finne nullpunktene er en av de viktigste ferdighetene i hele matematikken – det handler om å løse andregradslikningen $ax^2 + bx + c = 0$.

I dette kapittelet skal vi lære to kraftige metoder for å finne nullpunkter: **faktorisering** og **abc-formelen**. Vi skal også lære å skrive funksjonen på **faktorisert form** og å analysere **fortegnet** til funksjonen, altså å finne ut hvor $f(x)$ er positiv og hvor den er negativ.` },
    { id: '1t-3-5-n-section1', type: 'text', content: `## Faktorisering – den elegante veien

Den enkleste måten å finne nullpunkter på er ved **faktorisering**. Ideen er å skrive uttrykket $ax^2 + bx + c$ som et produkt av to faktorer. Når et produkt er null, må minst én av faktorene være null – det er nullregelen.

La oss ta $f(x) = x^2 - 5x + 6$. Vi leter etter to tall som ganget gir $6$ (konstantleddet) og addert gir $-5$ (koeffisienten foran $x$). Hva med $-2$ og $-3$? Sjekk: $(-2) \\cdot (-3) = 6$ og $(-2) + (-3) = -5$. Perfekt! Da kan vi skrive $f(x) = (x - 2)(x - 3)$.

Nå setter vi $f(x) = 0$: $(x - 2)(x - 3) = 0$. Nullregelen sier at enten er $x - 2 = 0$ eller $x - 3 = 0$, altså $x = 2$ eller $x = 3$. Det er nullpunktene.

La oss prøve med $g(x) = x^2 + 2x - 15$. Vi trenger to tall som ganget gir $-15$ og addert gir $2$. Hva med $5$ og $-3$? Sjekk: $5 \\cdot (-3) = -15$ og $5 + (-3) = 2$. Ja! Da er $g(x) = (x + 5)(x - 3)$, og nullpunktene er $x = -5$ og $x = 3$.

Et spesielt tilfelle er konjugatsetningen: $x^2 - 9 = (x - 3)(x + 3)$, som gir nullpunktene $x = \\pm 3$. Generelt er $x^2 - k^2 = (x - k)(x + k)$.

Faktorisering er elegant og rask, men den fungerer bare når tallene «går pent opp». Heldigvis finnes det en metode som alltid fungerer.` },
    { id: '1t-3-5-n-quiz1', type: 'exercise', exercise: { id: '1t-3-5-n-quiz1', number: 'Quiz 1', type: 'multiple-choice', task: 'Test deg selv på faktorisering og nullpunkter:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-5-n-quiz1-q0',
        task: 'Hva er nullpunktene til $f(x) = x^2 - 7x + 12$?',
        options: [ { id: 'a', text: '$x = -3$ og $x = -4$', isCorrect: false }, { id: 'b', text: '$x = 2$ og $x = 6$', isCorrect: false }, { id: 'c', text: '$x = 3$ og $x = 4$', isCorrect: true }, { id: 'd', text: '$x = -3$ og $x = 4$', isCorrect: false } ],
        solution: 'Vi trenger to tall som ganget gir $12$ og addert gir $-7$. Det er $-3$ og $-4$: $(-3) \\cdot (-4) = 12$ og $(-3) + (-4) = -7$. Så $f(x) = (x - 3)(x - 4)$ og nullpunktene er $x = 3$ og $x = 4$.',
      },
      {
        id: '1t-3-5-n-quiz1-q1',
        task: 'Hva er den faktoriserte formen til $g(x) = x^2 + 2x - 15$?',
        options: [ { id: 'a', text: '$(x + 3)(x - 5)$', isCorrect: false }, { id: 'b', text: '$(x - 3)(x + 5)$', isCorrect: false }, { id: 'c', text: '$(x + 5)(x - 3)$', isCorrect: true }, { id: 'd', text: '$(x - 5)(x - 3)$', isCorrect: false } ],
        solution: 'Vi trenger to tall som ganget gir $-15$ og addert gir $2$. Det er $5$ og $-3$: $5 \\cdot (-3) = -15$ og $5 + (-3) = 2$. Dermed $g(x) = (x + 5)(x - 3)$.',
      },
      {
        id: '1t-3-5-n-quiz1-q2',
        task: 'Hva er nullpunktene til $h(x) = x^2 - 16$?',
        options: [ { id: 'a', text: '$x = 8$ og $x = -8$', isCorrect: false }, { id: 'b', text: '$x = 4$ og $x = -4$', isCorrect: true }, { id: 'c', text: '$x = 16$ og $x = -16$', isCorrect: false }, { id: 'd', text: '$x = 2$ og $x = -2$', isCorrect: false } ],
        solution: 'Vi bruker konjugatsetningen: $x^2 - 16 = x^2 - 4^2 = (x - 4)(x + 4)$. Nullpunktene er $x = 4$ og $x = -4$.',
      },
      {
        id: '1t-3-5-n-quiz1-q3',
        task: 'Hva sier nullregelen?',
        options: [ { id: 'a', text: 'Summen av to tall er null bare hvis begge er null', isCorrect: false }, { id: 'b', text: 'Produktet av to tall er null bare hvis minst én faktor er null', isCorrect: true }, { id: 'c', text: 'Et tall ganger null er alltid positivt', isCorrect: false }, { id: 'd', text: 'Null delt på et tall er alltid udefinert', isCorrect: false } ],
        solution: 'Nullregelen sier at et produkt er null hvis og bare hvis minst én av faktorene er null. Derfor kan vi finne nullpunktene ved å sette hver faktor lik null separat.',
      },
    ] } },    { id: '1t-3-5-n-section2', type: 'text', content: `## Abc-formelen – det universelle verktøyet

Når faktorisering ikke lykkes, trekker vi frem det kraftigste verktøyet vi har: **abc-formelen**. Den løser enhver andregradslikning $ax^2 + bx + c = 0$:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

Det lille symbolet $\\pm$ betyr at du får to svar: ett med pluss og ett med minus. Uttrykket under rottegnet, $D = b^2 - 4ac$, kalles **diskriminanten**, og den forteller deg alt om hvor mange nullpunkter funksjonen har.

Hvis $D > 0$, finnes det to ulike nullpunkter – parabelen krysser $x$-aksen to ganger. Hvis $D = 0$, er det nøyaktig ett nullpunkt, en **dobbeltrot** – parabelen berører $x$-aksen i ett punkt. Og hvis $D < 0$, finnes det ingen nullpunkter – parabelen krysser aldri $x$-aksen.

La oss bruke formelen på $f(x) = 2x^2 + 4x - 6$. Her er $a = 2$, $b = 4$, $c = -6$. Diskriminanten er $D = 16 - 4 \\cdot 2 \\cdot (-6) = 16 + 48 = 64$. Siden $D = 64 > 0$, har vi to nullpunkter. Vi regner videre: $x = \\frac{-4 \\pm \\sqrt{64}}{4} = \\frac{-4 \\pm 8}{4}$. Det gir $x = \\frac{4}{4} = 1$ eller $x = \\frac{-12}{4} = -3$. Nullpunktene er $x = 1$ og $x = -3$.

Abc-formelen fungerer alltid, uansett om tallene er «pene» eller ikke. For eksempel gir $f(x) = x^2 - 4x + 1$ diskriminanten $D = 16 - 4 = 12$, og nullpunktene $x = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$. Svaret inneholder en rot, men det er helt legitimt.` },
    { id: '1t-3-5-n-quiz2', type: 'exercise', exercise: { id: '1t-3-5-n-quiz2', number: 'Quiz 2', type: 'multiple-choice', task: 'Test deg selv på abc-formelen og diskriminanten:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-5-n-quiz2-q0',
        task: 'Hva er diskriminanten til $f(x) = x^2 + 6x + 9$, og hva betyr den?',
        options: [ { id: 'a', text: '$D = 0$, funksjonen har én dobbeltrot', isCorrect: true }, { id: 'b', text: '$D = 36$, funksjonen har to nullpunkter', isCorrect: false }, { id: 'c', text: '$D = -36$, funksjonen har ingen nullpunkter', isCorrect: false }, { id: 'd', text: '$D = 72$, funksjonen har to nullpunkter', isCorrect: false } ],
        solution: '$D = b^2 - 4ac = 36 - 4 \\cdot 1 \\cdot 9 = 36 - 36 = 0$. Når $D = 0$, har funksjonen nøyaktig ett nullpunkt (dobbeltrot). Her er $x = \\frac{-6}{2} = -3$, og $f(x) = (x + 3)^2$.',
      },
      {
        id: '1t-3-5-n-quiz2-q1',
        task: 'Hva er abc-formelen for $ax^2 + bx + c = 0$?',
        options: [ { id: 'a', text: '$x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$', isCorrect: false }, { id: 'b', text: '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$', isCorrect: true }, { id: 'c', text: '$x = \\frac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}$', isCorrect: false }, { id: 'd', text: '$x = \\frac{-b \\pm \\sqrt{b - 4ac}}{2a}$', isCorrect: false } ],
        solution: 'Abc-formelen er $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Pass på minustegnet foran $b$ og at det er $b^2 - 4ac$ under rottegnet.',
      },
      {
        id: '1t-3-5-n-quiz2-q2',
        task: 'Hva er diskriminanten til $f(x) = 2x^2 + 4x - 6$?',
        options: [ { id: 'a', text: '$D = -32$', isCorrect: false }, { id: 'b', text: '$D = 64$', isCorrect: true }, { id: 'c', text: '$D = 16$', isCorrect: false }, { id: 'd', text: '$D = 40$', isCorrect: false } ],
        solution: '$D = b^2 - 4ac = 4^2 - 4 \\cdot 2 \\cdot (-6) = 16 + 48 = 64$. Siden $D = 64 > 0$, har funksjonen to ulike nullpunkter.',
      },
      {
        id: '1t-3-5-n-quiz2-q3',
        task: 'Funksjonen $f(x) = x^2 + 2x + 5$ har $D = 4 - 20 = -16$. Hva betyr det?',
        options: [ { id: 'a', text: 'Funksjonen har to nullpunkter', isCorrect: false }, { id: 'b', text: 'Funksjonen har én dobbeltrot', isCorrect: false }, { id: 'c', text: 'Funksjonen har ingen nullpunkter', isCorrect: true }, { id: 'd', text: 'Funksjonen har uendelig mange nullpunkter', isCorrect: false } ],
        solution: 'Når $D < 0$, kan vi ikke ta kvadratroten av et negativt tall (i de reelle tallene). Parabelen krysser aldri $x$-aksen, og funksjonen har ingen nullpunkter.',
      },
      {
        id: '1t-3-5-n-quiz2-q4',
        task: 'Hva er nullpunktene til $f(x) = 2x^2 + 4x - 6$?',
        options: [ { id: 'a', text: '$x = 2$ og $x = -3$', isCorrect: false }, { id: 'b', text: '$x = -1$ og $x = 3$', isCorrect: false }, { id: 'c', text: '$x = 1$ og $x = -3$', isCorrect: true }, { id: 'd', text: '$x = 3$ og $x = -1$', isCorrect: false } ],
        solution: 'Med $D = 64$: $x = \\frac{-4 \\pm \\sqrt{64}}{2 \\cdot 2} = \\frac{-4 \\pm 8}{4}$. Det gir $x = \\frac{4}{4} = 1$ eller $x = \\frac{-12}{4} = -3$.',
      },
    ] } },    { id: '1t-3-5-n-section3', type: 'text', content: `## Faktorisert form – nullpunktene i front

Når du har funnet nullpunktene $x_1$ og $x_2$ til en andregradsfunksjon, kan du skrive den på **faktorisert form**:

$$f(x) = a(x - x_1)(x - x_2)$$

Her er $a$ den ledende koeffisienten, og nullpunktene leses direkte fra uttrykket. Denne formen er utrolig nyttig fordi den gir deg nullpunktene med et blikk.

La oss skrive $f(x) = 2x^2 - 8x + 6$ på faktorisert form. Først finner vi nullpunktene med abc-formelen: $a = 2$, $b = -8$, $c = 6$. Diskriminanten er $D = 64 - 48 = 16$. Nullpunktene er $x = \\frac{8 \\pm 4}{4}$, altså $x = 3$ eller $x = 1$. Faktorisert form: $f(x) = 2(x - 1)(x - 3)$.

Vi kan kontrollere ved å gange ut: $2(x - 1)(x - 3) = 2(x^2 - 4x + 3) = 2x^2 - 8x + 6$. Stemmer!

Et annet eksempel: $g(x) = -x^2 + 4x + 5$. Her er $a = -1$, $b = 4$, $c = 5$. Diskriminanten: $D = 16 + 20 = 36$. Nullpunktene: $x = \\frac{-4 \\pm 6}{-2}$. Det gir $x = \\frac{-4 + 6}{-2} = -1$ eller $x = \\frac{-4 - 6}{-2} = 5$. Faktorisert form: $g(x) = -(x + 1)(x - 5)$.

Legg merke til minustegnet foran – det er den ledende koeffisienten $a = -1$. Kontrollen: $-(x + 1)(x - 5) = -(x^2 - 4x - 5) = -x^2 + 4x + 5$. Perfekt!` },
    { id: '1t-3-5-n-quiz3', type: 'exercise', exercise: { id: '1t-3-5-n-quiz3', number: 'Quiz 3', type: 'multiple-choice', task: 'Test deg selv på faktorisert form:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-5-n-quiz3-q0',
        task: 'Hva er faktorisert form for $f(x) = x^2 - 6x + 8$?',
        options: [ { id: 'a', text: '$f(x) = (x + 2)(x + 4)$', isCorrect: false }, { id: 'b', text: '$f(x) = (x - 2)(x - 4)$', isCorrect: true }, { id: 'c', text: '$f(x) = (x - 2)(x + 4)$', isCorrect: false }, { id: 'd', text: '$f(x) = (x + 2)(x - 4)$', isCorrect: false } ],
        solution: 'Vi trenger to tall som ganget gir $8$ og addert gir $-6$. Det er $-2$ og $-4$. Altså $f(x) = (x - 2)(x - 4)$. Kontroll: $(x - 2)(x - 4) = x^2 - 6x + 8$.',
      },
      {
        id: '1t-3-5-n-quiz3-q1',
        task: 'Funksjonen $f(x) = 2x^2 - 8x + 6$ har nullpunkter $x = 1$ og $x = 3$. Hva er faktorisert form?',
        options: [ { id: 'a', text: '$f(x) = (x - 1)(x - 3)$', isCorrect: false }, { id: 'b', text: '$f(x) = 2(x - 1)(x - 3)$', isCorrect: true }, { id: 'c', text: '$f(x) = 2(x + 1)(x + 3)$', isCorrect: false }, { id: 'd', text: '$f(x) = -2(x - 1)(x - 3)$', isCorrect: false } ],
        solution: 'Faktorisert form er $f(x) = a(x - x_1)(x - x_2)$. Her er $a = 2$, $x_1 = 1$, $x_2 = 3$. Dermed $f(x) = 2(x - 1)(x - 3)$. Vi må huske den ledende koeffisienten $a$!',
      },
      {
        id: '1t-3-5-n-quiz3-q2',
        task: 'Hva er faktorisert form for $g(x) = -x^2 + 4x + 5$ med nullpunkter $x = -1$ og $x = 5$?',
        options: [ { id: 'a', text: '$g(x) = (x + 1)(x - 5)$', isCorrect: false }, { id: 'b', text: '$g(x) = -(x - 1)(x + 5)$', isCorrect: false }, { id: 'c', text: '$g(x) = -(x + 1)(x - 5)$', isCorrect: true }, { id: 'd', text: '$g(x) = -x(x + 1)(x - 5)$', isCorrect: false } ],
        solution: 'Faktorisert form: $g(x) = a(x - x_1)(x - x_2) = -1 \\cdot (x - (-1))(x - 5) = -(x + 1)(x - 5)$. Minustegnet foran er den ledende koeffisienten $a = -1$.',
      },
    ] } },    { id: '1t-3-5-n-section4', type: 'text', content: `## Fortegnsanalyse – over eller under x-aksen?

Nå som vi kan finne nullpunktene, åpner det seg et nytt spørsmål: i hvilke intervaller er $f(x)$ positiv, og i hvilke er den negativ? Å besvare dette kalles **fortegnsanalyse**, og resultatet viser vi gjerne i en **fortegnslinje**.

Metoden er enkel. Først finner du nullpunktene – de deler tallinjen i intervaller. Deretter tester du én $x$-verdi i hvert intervall for å se om $f(x)$ er positiv eller negativ.

La oss gjøre dette for $f(x) = x^2 - 4$. Nullpunktene er $x = -2$ og $x = 2$ (konjugatsetningen: $x^2 - 4 = (x - 2)(x + 2)$). Tallinjen deles i tre intervaller: $x < -2$, $-2 < x < 2$, og $x > 2$.

Vi tester: for $x = -3$ får vi $f(-3) = 9 - 4 = 5 > 0$. For $x = 0$ får vi $f(0) = -4 < 0$. For $x = 3$ får vi $f(3) = 9 - 4 = 5 > 0$. Fortegnslinjen viser altså pluss, null, minus, null, pluss.

Det finnes en huskeregel som sparer deg for mye regning. Når $a > 0$ (parabelen åpner oppover), er $f(x) > 0$ *utenfor* nullpunktene og $f(x) < 0$ *mellom* dem. Når $a < 0$ (parabelen åpner nedover), er det omvendt: $f(x) > 0$ *mellom* nullpunktene og $f(x) < 0$ *utenfor* dem.

Tenk på det visuelt: en «smilende» parabel ($a > 0$) er over $x$-aksen på utsidene og under mellom nullpunktene. En «sur» parabel ($a < 0$) er over $x$-aksen mellom nullpunktene og under på utsidene.` },
    { id: '1t-3-5-n-quiz4', type: 'exercise', exercise: { id: '1t-3-5-n-quiz4', number: 'Quiz 4', type: 'multiple-choice', task: 'Test deg selv på fortegnsanalyse:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-5-n-quiz4-q0',
        task: 'For $g(x) = -x^2 + 4x - 3$ med nullpunkter $x = 1$ og $x = 3$: hvor er $g(x) > 0$?',
        options: [ { id: 'a', text: '$x < 1$ eller $x > 3$', isCorrect: false }, { id: 'b', text: 'For alle $x$', isCorrect: false }, { id: 'c', text: '$1 < x < 3$', isCorrect: true }, { id: 'd', text: 'Aldri', isCorrect: false } ],
        solution: 'Siden $a = -1 < 0$, åpner parabelen nedover. Da er $g(x) > 0$ *mellom* nullpunktene, altså for $1 < x < 3$.',
      },
      {
        id: '1t-3-5-n-quiz4-q1',
        task: 'For $f(x) = x^2 - 4$ med nullpunkter $x = -2$ og $x = 2$: hvor er $f(x) < 0$?',
        options: [ { id: 'a', text: '$x < -2$ eller $x > 2$', isCorrect: false }, { id: 'b', text: '$-2 < x < 2$', isCorrect: true }, { id: 'c', text: 'For alle $x$', isCorrect: false }, { id: 'd', text: 'Aldri', isCorrect: false } ],
        solution: 'Siden $a = 1 > 0$, åpner parabelen oppover. Da er $f(x) < 0$ *mellom* nullpunktene, altså for $-2 < x < 2$.',
      },
      {
        id: '1t-3-5-n-quiz4-q2',
        task: 'Parabelen $f(x) = 2x^2 - 10x + 12$ har $a > 0$ og nullpunkter $x = 2$ og $x = 3$. Hvor er $f(x) > 0$?',
        options: [ { id: 'a', text: '$2 < x < 3$', isCorrect: false }, { id: 'b', text: 'Bare for $x > 3$', isCorrect: false }, { id: 'c', text: '$x < 2$ eller $x > 3$', isCorrect: true }, { id: 'd', text: 'For alle $x$', isCorrect: false } ],
        solution: 'Med $a > 0$ åpner parabelen oppover. Funksjonen er positiv *utenfor* nullpunktene: $x < 2$ eller $x > 3$. Mellom nullpunktene ($2 < x < 3$) er den negativ.',
      },
      {
        id: '1t-3-5-n-quiz4-q3',
        task: 'Hva er verdien av $f(0)$ for $f(x) = x^2 - 4$?',
        options: [ { id: 'a', text: '$4$', isCorrect: false }, { id: 'b', text: '$0$', isCorrect: false }, { id: 'c', text: '$-4$', isCorrect: true }, { id: 'd', text: '$-2$', isCorrect: false } ],
        solution: '$f(0) = 0^2 - 4 = -4$. Denne negative verdien bekrefter at funksjonen er negativ mellom nullpunktene ($x = 0$ ligger mellom $-2$ og $2$).',
      },
    ] } },    { id: '1t-3-5-n-section5', type: 'text', content: `## Andregradsulikheter – når er funksjonen positiv eller negativ?

Fortegnsanalyse er ikke bare teori – den lar oss løse **ulikheter** med andregradsfunksjoner. Spørsmål som «for hvilke $x$ er $x^2 - 3x - 10 > 0$?» besvares ved å finne nullpunktene og bruke fortegnsanalyse.

La oss løse $x^2 - 3x - 10 > 0$. Først faktoriserer vi: vi trenger to tall som ganget gir $-10$ og addert gir $-3$. Det er $-5$ og $2$: $(x - 5)(x + 2) = 0$ gir nullpunktene $x = 5$ og $x = -2$. Siden $a = 1 > 0$, er parabelen positiv utenfor nullpunktene. Løsningen er $x < -2$ eller $x > 5$.

Hva med en ulikhet der vi ser etter den negative delen? La oss løse $x^2 - 6x + 8 \\leq 0$. Faktorisering: $(x - 2)(x - 4) = 0$ gir $x = 2$ og $x = 4$. Siden $a = 1 > 0$, er $f(x) \\leq 0$ mellom nullpunktene (inkludert nullpunktene selv, fordi vi har $\\leq$). Løsningen er $2 \\leq x \\leq 4$.

Og med negativ ledende koeffisient? La oss løse $-x^2 + 2x + 3 > 0$. Nullpunkter: $x^2 - 2x - 3 = 0$ gir $(x - 3)(x + 1) = 0$, altså $x = 3$ og $x = -1$. Siden $a = -1 < 0$, er funksjonen positiv *mellom* nullpunktene. Løsningen er $-1 < x < 3$.

Et siste spennende spørsmål: for hvilke verdier av $k$ har $f(x) = x^2 - 4x + k$ to ulike nullpunkter? Vi trenger $D > 0$: $(-4)^2 - 4 \\cdot 1 \\cdot k > 0$, altså $16 - 4k > 0$, som gir $k < 4$. Her bestemmer diskriminanten ikke bare *om* det finnes nullpunkter, men *betingelsen* for at de skal eksistere.` },
    { id: '1t-3-5-n-quiz5', type: 'exercise', exercise: { id: '1t-3-5-n-quiz5', number: 'Quiz 5', type: 'multiple-choice', task: 'Test deg selv på andregradsulikheter:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-5-n-quiz5-q0',
        task: 'Hva er løsningen til ulikheten $x^2 - 4x - 5 > 0$?',
        options: [ { id: 'a', text: '$-1 < x < 5$', isCorrect: false }, { id: 'b', text: '$x < -5$ eller $x > 1$', isCorrect: false }, { id: 'c', text: '$x \\leq -1$ eller $x \\geq 5$', isCorrect: false }, { id: 'd', text: '$x < -1$ eller $x > 5$', isCorrect: true } ],
        solution: 'Faktorisering: $(x - 5)(x + 1) = 0$ gir nullpunkter $x = 5$ og $x = -1$. Siden $a = 1 > 0$, er funksjonen positiv *utenfor* nullpunktene: $x < -1$ eller $x > 5$.',
      },
      {
        id: '1t-3-5-n-quiz5-q1',
        task: 'Hva er løsningen til $x^2 - 6x + 8 \\leq 0$?',
        options: [ { id: 'a', text: '$x < 2$ eller $x > 4$', isCorrect: false }, { id: 'b', text: '$2 \\leq x \\leq 4$', isCorrect: true }, { id: 'c', text: '$2 < x < 4$', isCorrect: false }, { id: 'd', text: '$x \\leq 2$ eller $x \\geq 4$', isCorrect: false } ],
        solution: 'Faktorisering: $(x - 2)(x - 4) = 0$ gir $x = 2$ og $x = 4$. Siden $a = 1 > 0$, er $f(x) \\leq 0$ *mellom* nullpunktene. Med $\\leq$ inkluderes nullpunktene: $2 \\leq x \\leq 4$.',
      },
      {
        id: '1t-3-5-n-quiz5-q2',
        task: 'Hva er løsningen til $-x^2 + 2x + 3 > 0$?',
        options: [ { id: 'a', text: '$x < -1$ eller $x > 3$', isCorrect: false }, { id: 'b', text: '$-1 < x < 3$', isCorrect: true }, { id: 'c', text: '$-3 < x < 1$', isCorrect: false }, { id: 'd', text: 'Ingen løsning', isCorrect: false } ],
        solution: 'Nullpunkter for $x^2 - 2x - 3 = 0$: $(x - 3)(x + 1) = 0$ gir $x = 3$ og $x = -1$. Siden $a = -1 < 0$, er funksjonen positiv *mellom* nullpunktene: $-1 < x < 3$.',
      },
      {
        id: '1t-3-5-n-quiz5-q3',
        task: 'For hvilke verdier av $k$ har $f(x) = x^2 - 4x + k$ to ulike nullpunkter?',
        options: [ { id: 'a', text: '$k > 4$', isCorrect: false }, { id: 'b', text: '$k = 4$', isCorrect: false }, { id: 'c', text: '$k < 4$', isCorrect: true }, { id: 'd', text: '$k < 0$', isCorrect: false } ],
        solution: 'Vi trenger $D > 0$: $(-4)^2 - 4 \\cdot 1 \\cdot k > 0$, altså $16 - 4k > 0$, som gir $4k < 16$, altså $k < 4$.',
      },
    ] } },    { id: '1t-3-5-n-summary', type: 'text', content: `## Oppsummering

I dette kapittelet har vi lært å finne **nullpunktene** til andregradsfunksjoner – punktene der $f(x) = 0$.

**Faktorisering** er den raskeste metoden: finn to tall som ganget gir $a \\cdot c$ og addert gir $b$, og skriv uttrykket som et produkt. Husk spesialtilfellet $x^2 - k^2 = (x - k)(x + k)$.

**Abc-formelen** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ fungerer alltid. **Diskriminanten** $D = b^2 - 4ac$ forteller deg antall nullpunkter: $D > 0$ gir to, $D = 0$ gir ett (dobbeltrot), $D < 0$ gir ingen.

Når du kjenner nullpunktene $x_1$ og $x_2$, kan du skrive funksjonen på **faktorisert form**: $f(x) = a(x - x_1)(x - x_2)$.

**Fortegnsanalyse** viser hvor $f(x)$ er positiv og negativ. For $a > 0$ er funksjonen positiv utenfor nullpunktene, for $a < 0$ er den positiv mellom dem. Denne kunnskapen lar deg løse **andregradsulikheter**.` },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.6 NARRATIV: Polynomfunksjoner
// ============================================================================

export const CHAPTER_1T_3_6_NARRATIV: TextbookChapter = {
  id: '1t-3-6-narrativ',
  courseId: '1t',
  chapterNumber: '3.6',
  title: 'Polynomfunksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om polynomer av høyere grad – hvordan graden og ledende koeffisient styrer grafens oppførsel, og hvordan du finner nullpunktene.',
  estimatedMinutes: 35,
  competenceGoals: ['forstå og bruke polynomfunksjoner'],
  linkedChapterId: '1t-3-6',
  content: [    { id: '1t-3-6-n-intro', type: 'text', content: `## Utover parabelen

Til nå har vi jobbet med lineære funksjoner (grad 1) og andregradsfunksjoner (grad 2). Men hva skjer når eksponentene blir enda større? Da er vi inne i verden til **polynomfunksjoner** – en familie av funksjoner som inkluderer alt fra rette linjer til ville svingete kurver.

Et **polynom** er et uttrykk der variabelen har hele, ikke-negative eksponenter. Vi har allerede møtt $3x + 2$ (grad 1) og $x^2 - 5x + 6$ (grad 2). Nå utvider vi horisonten til tredjegrads-, fjerdegrads- og enda høyere polynomer. Disse funksjonene kan svinge opp og ned flere ganger, ha mange nullpunkter, og oppføre seg svært forskjellig i ulike deler av tallinjen. I dette kapittelet skal vi lære å forstå og temme dem.` },
    { id: '1t-3-6-n-section1', type: 'text', content: `## Grad og ledende koeffisient

Hvert polynom har to nøkkelegenskaper som forteller deg mye om hvordan det oppfører seg: **graden** og den **ledende koeffisienten**.

**Graden** til et polynom er den høyeste eksponenten. For $f(x) = 3x^4 - 2x^2 + x - 5$ er graden $4$, fordi $x^4$ er leddet med høyest eksponent. Den **ledende koeffisienten** er koeffisienten foran leddet med høyest eksponent – i dette tilfellet $3$. **Konstantleddet** er tallet uten $x$, altså $-5$.

Det er viktig å forstå at et polynom ikke trenger å ha alle eksponentene representert. I uttrykket $3x^4 - 2x^2 + x - 5$ mangler $x^3$-leddet, men graden er likevel $4$. Det er den høyeste eksponenten som teller, ikke om alle leddene er med.

Pass også på at leddene ikke alltid står i rekkefølge. Hvis noen gir deg $h(x) = 2x - 7x^4 + x^2$, kan det se litt forvirrende ut. Men vi ordner leddene etter synkende eksponent: $h(x) = -7x^4 + x^2 + 2x$. Nå ser vi tydelig at graden er $4$ og den ledende koeffisienten er $-7$.

En ting til: et polynom av grad $1$ er en lineær funksjon, grad $2$ gir en andregradsfunksjon, grad $3$ gir en **tredjegradsfunksjon**, og så videre. Det vi lærte om parabeler i de forrige kapitlene er altså et spesialtilfelle av polynomteori.` },
    { id: '1t-3-6-n-quiz1', type: 'exercise', exercise: { id: '1t-3-6-n-quiz1', number: 'Quiz 1', type: 'multiple-choice', task: 'Test deg selv på grad og ledende koeffisient:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-6-n-quiz1-q0',
        task: 'Hva er graden og den ledende koeffisienten til $g(x) = -x^3 + x^2 - x$?',
        options: [ { id: 'a', text: 'Grad 2, ledende koeffisient $1$', isCorrect: false }, { id: 'b', text: 'Grad 3, ledende koeffisient $-1$', isCorrect: true }, { id: 'c', text: 'Grad 3, ledende koeffisient $1$', isCorrect: false }, { id: 'd', text: 'Grad 1, ledende koeffisient $-1$', isCorrect: false } ],
        solution: 'Den høyeste eksponenten er $3$ (fra leddet $-x^3$), så graden er $3$. Koeffisienten foran $x^3$ er $-1$, så den ledende koeffisienten er $-1$.',
      },
      {
        id: '1t-3-6-n-quiz1-q1',
        task: 'Hva er graden til $h(x) = 2x - 7x^4 + x^2$?',
        options: [ { id: 'a', text: 'Grad $1$', isCorrect: false }, { id: 'b', text: 'Grad $2$', isCorrect: false }, { id: 'c', text: 'Grad $4$', isCorrect: true }, { id: 'd', text: 'Grad $7$', isCorrect: false } ],
        solution: 'Selv om leddene ikke står i rekkefølge, er den høyeste eksponenten $4$ (fra leddet $-7x^4$). Graden er $4$.',
      },
      {
        id: '1t-3-6-n-quiz1-q2',
        task: 'Hva er konstantleddet til $f(x) = 3x^4 - 2x^2 + x - 5$?',
        options: [ { id: 'a', text: '$3$', isCorrect: false }, { id: 'b', text: '$1$', isCorrect: false }, { id: 'c', text: '$-2$', isCorrect: false }, { id: 'd', text: '$-5$', isCorrect: true } ],
        solution: 'Konstantleddet er tallet uten $x$, altså $-5$. Det er verdien av $f(0) = 0 - 0 + 0 - 5 = -5$.',
      },
      {
        id: '1t-3-6-n-quiz1-q3',
        task: 'Hva er den ledende koeffisienten til $p(x) = 5 - 3x + 2x^3 - x^2$?',
        options: [ { id: 'a', text: '$5$', isCorrect: false }, { id: 'b', text: '$-3$', isCorrect: false }, { id: 'c', text: '$2$', isCorrect: true }, { id: 'd', text: '$-1$', isCorrect: false } ],
        solution: 'Vi ordner etter synkende eksponent: $p(x) = 2x^3 - x^2 - 3x + 5$. Leddet med høyest eksponent er $2x^3$, så den ledende koeffisienten er $2$.',
      },
    ] } },    { id: '1t-3-6-n-section2', type: 'text', content: `## Endenes oppførsel – hva skjer langt ute?

Når $x$ blir veldig stor (positiv eller negativ), er det leddet med høyest eksponent som dominerer totalt. De andre leddene blir ubetydelige i sammenligning. Derfor bestemmer **graden** og den **ledende koeffisienten** hva som skjer med grafen «i ytterkantene» – det vi kaller **endenes oppførsel**.

Reglene er overraskende enkle, og de handler om to ting: er graden et partall eller et oddetall, og er den ledende koeffisienten positiv eller negativ?

For **partallsgrad** (2, 4, 6, ...) oppfører begge endene seg likt. Hvis den ledende koeffisienten $a_n > 0$, peker begge ender oppover – tenk på en bred smilefjes. Hvis $a_n < 0$, peker begge ender nedover – som et fjell.

For **oddetallsgrad** (1, 3, 5, ...) går endene i motsatte retninger. Hvis $a_n > 0$, går grafen fra nedre venstre til øvre høyre – som en stigende S-kurve. Hvis $a_n < 0$, går den fra øvre venstre til nedre høyre.

La oss ta $f(x) = -x^3 + 4x$. Graden er $3$ (oddetall) og den ledende koeffisienten er $-1$ (negativ). Det betyr at grafen går fra øvre venstre til nedre høyre. Mer presist: når $x \\to -\\infty$, går $f(x) \\to +\\infty$, og når $x \\to +\\infty$, går $f(x) \\to -\\infty$.

Et annet eksempel: $g(x) = -x^4 + 3x^2$. Graden er $4$ (partall) og den ledende koeffisienten er $-1$ (negativ). Begge ender peker nedover: $g(x) \\to -\\infty$ for store $|x|$.` },
    { id: '1t-3-6-n-quiz2', type: 'exercise', exercise: { id: '1t-3-6-n-quiz2', number: 'Quiz 2', type: 'multiple-choice', task: 'Test deg selv på endenes oppførsel:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-6-n-quiz2-q0',
        task: 'Hvordan oppfører endene til $h(x) = 2x^5 - x$ seg?',
        options: [ { id: 'a', text: 'Begge ender peker oppover', isCorrect: false }, { id: 'b', text: 'Begge ender peker nedover', isCorrect: false }, { id: 'c', text: 'Fra øvre venstre til nedre høyre', isCorrect: false }, { id: 'd', text: 'Fra nedre venstre til øvre høyre', isCorrect: true } ],
        solution: 'Graden er $5$ (oddetall) og den ledende koeffisienten er $2 > 0$. Oddetallsgrad med positiv ledende koeffisient gir en graf som går fra nedre venstre til øvre høyre.',
      },
      {
        id: '1t-3-6-n-quiz2-q1',
        task: 'Hvordan oppfører endene til $f(x) = -x^4 + 3x^2$ seg?',
        options: [ { id: 'a', text: 'Begge ender peker oppover', isCorrect: false }, { id: 'b', text: 'Begge ender peker nedover', isCorrect: true }, { id: 'c', text: 'Fra nedre venstre til øvre høyre', isCorrect: false }, { id: 'd', text: 'Fra øvre venstre til nedre høyre', isCorrect: false } ],
        solution: 'Graden er $4$ (partall) og den ledende koeffisienten er $-1 < 0$. Partallsgrad med negativ ledende koeffisient betyr at begge ender peker nedover.',
      },
      {
        id: '1t-3-6-n-quiz2-q2',
        task: 'For $f(x) = -x^3 + 4x$: hva skjer når $x \\to +\\infty$?',
        options: [ { id: 'a', text: '$f(x) \\to +\\infty$', isCorrect: false }, { id: 'b', text: '$f(x) \\to 0$', isCorrect: false }, { id: 'c', text: '$f(x) \\to -\\infty$', isCorrect: true }, { id: 'd', text: '$f(x) \\to 4$', isCorrect: false } ],
        solution: 'Graden er $3$ (oddetall) og $a = -1 < 0$. For oddetallsgrad med negativ ledende koeffisient: når $x \\to +\\infty$, går $f(x) \\to -\\infty$ (grafen peker nedover til høyre).',
      },
      {
        id: '1t-3-6-n-quiz2-q3',
        task: 'Hvilken funksjon har ender som peker i *samme* retning?',
        options: [ { id: 'a', text: '$f(x) = x^3 - 2x$', isCorrect: false }, { id: 'b', text: '$f(x) = -x^5 + 1$', isCorrect: false }, { id: 'c', text: '$f(x) = 3x^4 - x^2 + 2$', isCorrect: true }, { id: 'd', text: '$f(x) = 2x^3 + x$', isCorrect: false } ],
        solution: 'Bare partallsgrad gir ender som peker i samme retning. Av alternativene er det bare $f(x) = 3x^4 - x^2 + 2$ som har partallsgrad ($4$). De andre har oddetallsgrad ($3$ eller $5$).',
      },
    ] } },    { id: '1t-3-6-n-section3', type: 'text', content: `## Nullpunkter ved faktorisering

Et polynom av grad $n$ kan ha **høyst $n$ nullpunkter**. En tredjegradsfunksjon kan altså ha opptil tre nullpunkter, en fjerdegradsfunksjon opptil fire, og så videre. Den viktige sammenhengen er: hvis $x = r$ er et nullpunkt for polynomet, så er $(x - r)$ en faktor.

For å finne nullpunktene til polynomer av høyere grad bruker vi ofte **faktorisering**. Det vanligste første steget er å trekke ut en felles faktor.

La oss ta $f(x) = x^3 - 4x^2 + 3x$. Alle tre leddene inneholder $x$, så vi trekker ut: $f(x) = x(x^2 - 4x + 3)$. Nå har vi et andregradsuttrykk i parentesen, som vi kan faktorisere videre. Vi trenger to tall som ganget gir $3$ og addert gir $-4$: det er $-1$ og $-3$. Dermed er $f(x) = x(x - 1)(x - 3)$.

Nullpunktene finner vi ved å sette hver faktor lik null: $x = 0$, $x = 1$, eller $x = 3$. Tre nullpunkter for en tredjegradsfunksjon – det maksimale antallet.

Et annet eksempel: $g(x) = x^3 - 9x$. Trekk ut $x$: $g(x) = x(x^2 - 9)$. Vi kjenner igjen konjugatsetningen: $x^2 - 9 = (x - 3)(x + 3)$. Så $g(x) = x(x - 3)(x + 3)$, og nullpunktene er $x = 0$, $x = 3$, og $x = -3$.

Nøkkelen er å alltid se etter en felles faktor først, og deretter bruke teknikkene du allerede kan – faktorisering av andregradsuttrykk, konjugatsetningen, og abc-formelen.` },
    { id: '1t-3-6-n-quiz3', type: 'exercise', exercise: { id: '1t-3-6-n-quiz3', number: 'Quiz 3', type: 'multiple-choice', task: 'Test deg selv på nullpunkter ved faktorisering:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-6-n-quiz3-q0',
        task: 'Hva er nullpunktene til $f(x) = x^3 - x^2 - 6x$?',
        options: [ { id: 'a', text: '$x = 0, 2, 3$', isCorrect: false }, { id: 'b', text: '$x = 0, -2, 3$', isCorrect: true }, { id: 'c', text: '$x = 0, 2, -3$', isCorrect: false }, { id: 'd', text: '$x = 1, -2, 3$', isCorrect: false } ],
        solution: 'Trekk ut $x$: $f(x) = x(x^2 - x - 6)$. Faktoriser andregradsuttrykket: to tall som ganget gir $-6$ og addert gir $-1$ er $-3$ og $2$. Altså $f(x) = x(x - 3)(x + 2)$. Nullpunktene er $x = 0$, $x = 3$ og $x = -2$.',
      },
      {
        id: '1t-3-6-n-quiz3-q1',
        task: 'Hva er det første steget for å faktorisere $g(x) = x^3 - 9x$?',
        options: [ { id: 'a', text: 'Bruke abc-formelen', isCorrect: false }, { id: 'b', text: 'Trekke ut felles faktor $x$', isCorrect: true }, { id: 'c', text: 'Bruke konjugatsetningen direkte', isCorrect: false }, { id: 'd', text: 'Prøve $x = 1$ som nullpunkt', isCorrect: false } ],
        solution: 'Alle leddene inneholder $x$, så vi trekker ut: $g(x) = x(x^2 - 9)$. Deretter kan vi bruke konjugatsetningen: $g(x) = x(x - 3)(x + 3)$.',
      },
      {
        id: '1t-3-6-n-quiz3-q2',
        task: 'Hvor mange nullpunkter kan en tredjegradsfunksjon ha, som mest?',
        options: [ { id: 'a', text: '$2$', isCorrect: false }, { id: 'b', text: '$3$', isCorrect: true }, { id: 'c', text: '$4$', isCorrect: false }, { id: 'd', text: 'Uendelig mange', isCorrect: false } ],
        solution: 'Et polynom av grad $n$ kan ha høyst $n$ nullpunkter. En tredjegradsfunksjon har altså maksimalt $3$ nullpunkter.',
      },
      {
        id: '1t-3-6-n-quiz3-q3',
        task: 'Hva er nullpunktene til $g(x) = x^3 - 9x$?',
        options: [ { id: 'a', text: '$x = 0$ og $x = 9$', isCorrect: false }, { id: 'b', text: '$x = 0$ og $x = 3$', isCorrect: false }, { id: 'c', text: '$x = -3, 0, 3$', isCorrect: true }, { id: 'd', text: '$x = -9, 0, 9$', isCorrect: false } ],
        solution: '$g(x) = x(x^2 - 9) = x(x - 3)(x + 3)$. Nullpunktene er $x = 0$, $x = 3$ og $x = -3$.',
      },
    ] } },    { id: '1t-3-6-n-section4', type: 'text', content: `## Substitusjon – et triks for fjerdegradspolynomer

Noen ganger møter du polynomer som ser vanskelige ut, men som kan løses med et elegant triks: **substitusjon**. Dette fungerer spesielt godt for fjerdegradspolynomer der bare partallspotenser opptrer.

Ta for eksempel $f(x) = x^4 - 5x^2 + 4$. Her er det bare $x^4$ og $x^2$ (ingen $x^3$ eller $x$). Trikset er å innføre en ny variabel $u = x^2$. Da blir $x^4 = u^2$, og polynomet forvandles til $u^2 - 5u + 4$.

Nå har vi et vanlig andregradsuttrykk i $u$! Vi faktoriserer: $(u - 1)(u - 4) = 0$, som gir $u = 1$ eller $u = 4$. Men vi er ikke ferdige – vi må tilbake til $x$. Siden $u = x^2$, har vi $x^2 = 1$ eller $x^2 = 4$, som gir $x = \\pm 1$ eller $x = \\pm 2$.

Vi kan også skrive hele faktoriseringen: $f(x) = (x^2 - 1)(x^2 - 4) = (x - 1)(x + 1)(x - 2)(x + 2)$. Fire nullpunkter for en fjerdegradsfunksjon – det maksimale antallet.

La oss prøve med $g(x) = x^4 - 10x^2 + 9$. Med $u = x^2$ får vi $u^2 - 10u + 9 = (u - 1)(u - 9)$. Tilbake: $x^2 = 1$ gir $x = \\pm 1$, og $x^2 = 9$ gir $x = \\pm 3$. Nullpunktene er $x = -3, -1, 1, 3$.

Merk at dette trikset ikke fungerer for alle polynomer, men det er gull verdt når du ser at bare partallspotenser er involvert.` },
    { id: '1t-3-6-n-quiz4', type: 'exercise', exercise: { id: '1t-3-6-n-quiz4', number: 'Quiz 4', type: 'multiple-choice', task: 'Test deg selv på substitusjon:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-6-n-quiz4-q0',
        task: 'Hva er nullpunktene til $f(x) = x^4 - 13x^2 + 36$?',
        options: [ { id: 'a', text: '$x = \\pm 2, \\pm 3$', isCorrect: true }, { id: 'b', text: '$x = \\pm 4, \\pm 9$', isCorrect: false }, { id: 'c', text: '$x = \\pm 6, \\pm 1$', isCorrect: false }, { id: 'd', text: '$x = 2, 3, 6$', isCorrect: false } ],
        solution: 'Med $u = x^2$: $u^2 - 13u + 36 = (u - 4)(u - 9)$. Tilbake: $x^2 = 4$ gir $x = \\pm 2$, og $x^2 = 9$ gir $x = \\pm 3$. Nullpunktene er $x = \\pm 2$ og $x = \\pm 3$.',
      },
      {
        id: '1t-3-6-n-quiz4-q1',
        task: 'Hvilken substitusjon bruker vi for $f(x) = x^4 - 5x^2 + 4$?',
        options: [ { id: 'a', text: '$u = x$', isCorrect: false }, { id: 'b', text: '$u = x^4$', isCorrect: false }, { id: 'c', text: '$u = x^2$', isCorrect: true }, { id: 'd', text: '$u = x^3$', isCorrect: false } ],
        solution: 'Når bare partallspotenser ($x^4$ og $x^2$) opptrer, setter vi $u = x^2$. Da blir $x^4 = u^2$, og polynomet $u^2 - 5u + 4$ er et vanlig andregradsuttrykk.',
      },
      {
        id: '1t-3-6-n-quiz4-q2',
        task: 'Med $u = x^2$ og $u^2 - 5u + 4 = 0$: hva er verdiene av $u$?',
        options: [ { id: 'a', text: '$u = 5$ og $u = 4$', isCorrect: false }, { id: 'b', text: '$u = -1$ og $u = -4$', isCorrect: false }, { id: 'c', text: '$u = 1$ og $u = 4$', isCorrect: true }, { id: 'd', text: '$u = 2$ og $u = 2$', isCorrect: false } ],
        solution: 'Faktorisering: $(u - 1)(u - 4) = 0$ gir $u = 1$ eller $u = 4$. Vi må deretter sette tilbake $u = x^2$ for å finne $x$-verdiene.',
      },
      {
        id: '1t-3-6-n-quiz4-q3',
        task: 'Hvor mange nullpunkter kan en fjerdegradsfunksjon ha, som mest?',
        options: [ { id: 'a', text: '$2$', isCorrect: false }, { id: 'b', text: '$3$', isCorrect: false }, { id: 'c', text: '$4$', isCorrect: true }, { id: 'd', text: '$8$', isCorrect: false } ],
        solution: 'Et polynom av grad $n$ kan ha høyst $n$ nullpunkter. En fjerdegradsfunksjon har altså maksimalt $4$ nullpunkter. Substitusjon med $u = x^2$ kan gi opptil $2$ verdier for $u$, og hver kan gi $2$ verdier for $x$ ($\\pm$), totalt $4$.',
      },
    ] } },    { id: '1t-3-6-n-section5', type: 'text', content: `## Å finne polynomet fra nullpunktene

Noen ganger jobber vi den andre veien: vi kjenner nullpunktene og skal finne funksjonsuttrykket. Hvis vi vet at et polynom av grad $n$ har nullpunkter $x_1, x_2, \\ldots, x_n$, kan vi skrive det som $f(x) = a(x - x_1)(x - x_2) \\cdots (x - x_n)$, der $a$ er en ukjent koeffisient som vi må bestemme med tilleggsinformasjon.

La oss ta et konkret eksempel. Et polynom av grad 3 har nullpunkter $x = -2$, $x = 1$ og $x = 3$, og vi vet at $f(0) = 6$. Vi skriver opp: $f(x) = a(x + 2)(x - 1)(x - 3)$. For å finne $a$ bruker vi at $f(0) = 6$: $a \\cdot 2 \\cdot (-1) \\cdot (-3) = 6a = 6$, altså $a = 1$. Svaret er $f(x) = (x + 2)(x - 1)(x - 3)$.

En annen nyttig teknikk er å gjenkjenne at en bestemt verdi er et nullpunkt, og deretter bruke **polynomdivisjon** eller inspeksjon for å faktorisere videre. For eksempel: løs $x^3 - 7x + 6 = 0$. Et hint er å prøve $x = 1$: $1 - 7 + 6 = 0$. Bingo! Siden $x = 1$ er en løsning, er $(x - 1)$ en faktor. Vi deler polynomet på $(x - 1)$ og finner $x^3 - 7x + 6 = (x - 1)(x^2 + x - 6)$. Andregradsuttrykket faktoriseres: $(x + 3)(x - 2)$. Alle løsningene er $x = 1, -3, 2$.

Å skissere grafen til et polynom handler om å kombinere alt vi har lært: finn graden (for endenes oppførsel), finn nullpunktene (for krysningspunktene med $x$-aksen), finn $y$-skjæringen $f(0)$, og tegn en jevn kurve gjennom punktene.` },
    { id: '1t-3-6-n-quiz5', type: 'exercise', exercise: { id: '1t-3-6-n-quiz5', number: 'Quiz 5', type: 'multiple-choice', task: 'Test deg selv på å finne og rekonstruere polynomer:', options: [{ id: 'a', text: 'placeholder', isCorrect: true }], questions: [
      {
        id: '1t-3-6-n-quiz5-q0',
        task: 'Et polynom av grad 3 har nullpunkter $x = -1, 2, 4$ og $f(0) = 8$. Hva er $a$?',
        options: [ { id: 'a', text: '$a = -1$', isCorrect: false }, { id: 'b', text: '$a = 2$', isCorrect: false }, { id: 'c', text: '$a = 1$', isCorrect: true }, { id: 'd', text: '$a = -2$', isCorrect: false } ],
        solution: '$f(x) = a(x + 1)(x - 2)(x - 4)$. Vi setter inn $x = 0$: $f(0) = a \\cdot 1 \\cdot (-2) \\cdot (-4) = 8a$. Siden $f(0) = 8$, får vi $8a = 8$, altså $a = 1$.',
      },
      {
        id: '1t-3-6-n-quiz5-q1',
        task: 'Hvis $x = 1$ er et nullpunkt for $f(x)$, hva vet vi om faktoriseringen?',
        options: [ { id: 'a', text: '$(x + 1)$ er en faktor', isCorrect: false }, { id: 'b', text: '$(x - 1)$ er en faktor', isCorrect: true }, { id: 'c', text: '$x$ er en faktor', isCorrect: false }, { id: 'd', text: '$(x^2 - 1)$ må være en faktor', isCorrect: false } ],
        solution: 'Sammenhengen er: hvis $x = r$ er et nullpunkt, så er $(x - r)$ en faktor. Altså: $x = 1$ betyr at $(x - 1)$ er en faktor i polynomet.',
      },
      {
        id: '1t-3-6-n-quiz5-q2',
        task: 'Vi vet at $x = 1$ er et nullpunkt for $x^3 - 7x + 6$. Hva er de andre nullpunktene?',
        options: [ { id: 'a', text: '$x = 2$ og $x = 3$', isCorrect: false }, { id: 'b', text: '$x = -3$ og $x = 2$', isCorrect: true }, { id: 'c', text: '$x = -2$ og $x = 3$', isCorrect: false }, { id: 'd', text: '$x = -1$ og $x = 6$', isCorrect: false } ],
        solution: 'Siden $x = 1$ er nullpunkt, er $(x - 1)$ en faktor. Vi finner $x^3 - 7x + 6 = (x - 1)(x^2 + x - 6) = (x - 1)(x + 3)(x - 2)$. De andre nullpunktene er $x = -3$ og $x = 2$.',
      },
      {
        id: '1t-3-6-n-quiz5-q3',
        task: 'Hva er $y$-skjæringen til et polynom?',
        options: [ { id: 'a', text: 'Verdien av den ledende koeffisienten', isCorrect: false }, { id: 'b', text: 'Det største nullpunktet', isCorrect: false }, { id: 'c', text: 'Verdien $f(0)$, altså konstantleddet', isCorrect: true }, { id: 'd', text: 'Graden til polynomet', isCorrect: false } ],
        solution: '$y$-skjæringen er der grafen krysser $y$-aksen, altså for $x = 0$. Da forsvinner alle ledd med $x$, og vi sitter igjen med konstantleddet: $f(0) = c$.',
      },
      {
        id: '1t-3-6-n-quiz5-q4',
        task: 'For å skissere grafen til et polynom: hva bestemmer endenes oppførsel?',
        options: [ { id: 'a', text: 'Konstantleddet og antall nullpunkter', isCorrect: false }, { id: 'b', text: 'Graden og den ledende koeffisienten', isCorrect: true }, { id: 'c', text: 'Bare graden alene', isCorrect: false }, { id: 'd', text: 'Nullpunktene og $y$-skjæringen', isCorrect: false } ],
        solution: 'Endenes oppførsel bestemmes av to ting: graden (partall eller oddetall) og den ledende koeffisienten (positiv eller negativ). Sammen forteller de om endene peker samme vei eller motsatt, og i hvilken retning.',
      },
    ] } },    { id: '1t-3-6-n-summary', type: 'text', content: `## Oppsummering

I dette kapittelet har vi utvidet horisonten til **polynomfunksjoner** av vilkårlig grad.

**Graden** til et polynom er den høyeste eksponenten, og den **ledende koeffisienten** er koeffisienten foran dette leddet. Sammen bestemmer de grafens **endenes oppførsel**: partallsgrad gir ender som peker samme vei, oddetallsgrad gir ender som peker motsatt vei. Positiv ledende koeffisient gir oppoverpekende ender (høyre side), negativ gir nedoverpekende.

Et polynom av grad $n$ har **høyst $n$ nullpunkter**. Vi finner nullpunktene ved **faktorisering** – først trekker vi ut eventuelle fellesfaktorer, og deretter bruker vi kjente teknikker som konjugatsetningen og abc-formelen på andregradsuttrykkene som gjenstår.

For fjerdegradspolynomer med bare partallspotenser kan vi bruke **substitusjon** $u = x^2$ for å redusere problemet til et andregradsuttrykk.

Kjenner vi nullpunktene, kan vi rekonstruere polynomet: $f(x) = a(x - x_1)(x - x_2) \\cdots (x - x_n)$, der $a$ bestemmes fra en kjent funksjonsverdi.` },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const MATEMATIKK_1T_NARRATIV_KAP3_CHAPTERS = [
  CHAPTER_1T_3_4_NARRATIV,
  CHAPTER_1T_3_5_NARRATIV,
  CHAPTER_1T_3_6_NARRATIV,
];
