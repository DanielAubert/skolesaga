/**
 * Tekstbok kapitler for s1
 * Autogenerert fra textbook-content.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_S1_1_1: TextbookChapter = {
  id: 's1-1-1',
  courseId: 's1',
  chapterNumber: '1.1',
  title: 'Polynomer',
  description: 'Lær om polynomdivisjon og faktorisering av polynomer.',
  estimatedMinutes: 55,
  competenceGoals: ['faktorisere polynom ved hjelp av polynomdivisjon'],
  content: [
    {
      id: 's1-1-1-intro',
      type: 'text',
      content: `## Hva er et polynom?

Et **polynom** er et uttrykk som består av ledd med variabler opphøyd i ikke-negative heltall, multiplisert med koeffisienter.

**Generelt polynom av grad $n$:**
$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0$$

der $a_n \\neq 0$ og $n$ er et ikke-negativt heltall.

**Eksempler:**
- $P(x) = 2x^3 - 5x^2 + 3x - 1$ er et tredjegradspolynom
- $Q(x) = x^2 - 4$ er et andregradspolynom
- $R(x) = 5x + 2$ er et førstegradspolynom`,
    },

    {
      id: 's1-1-1-def-polynom',
      type: 'definition',
      title: 'Polynom',
      content: `Et **polynom** $P(x)$ av grad $n$ er et uttrykk på formen:
$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0$$

der:
- $a_n, a_{n-1}, \\ldots, a_0$ er koeffisienter (reelle tall)
- $a_n \\neq 0$ (den ledende koeffisienten)
- $n$ er graden til polynomet
- $a_0$ er konstantleddet`,
    },

    {
      id: 's1-1-1-polynomdivisjon',
      type: 'text',
      content: `## Polynomdivisjon

Polynomdivisjon fungerer på samme måte som lang divisjon med tall. Vi kan dele et polynom $P(x)$ på et polynom $D(x)$ og få:

$$P(x) = D(x) \\cdot Q(x) + R(x)$$

der:
- $P(x)$ er dividenden (det vi deler)
- $D(x)$ er divisoren (det vi deler på)
- $Q(x)$ er kvotienten (svaret)
- $R(x)$ er resten (grad mindre enn $D(x)$)`,
    },

    {
      id: 's1-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Polynomdivisjon',
      problem: `Del $P(x) = x^3 + 2x^2 - 5x - 6$ på $D(x) = x + 3$.`,
      solution: `**Løsning:**

Vi setter opp polynomdivisjon:

\`\`\`
        x² - x - 2
       ____________
x + 3 | x³ + 2x² - 5x - 6
        x³ + 3x²
       -----------
           - x² - 5x
           - x² - 3x
           ----------
                -2x - 6
                -2x - 6
                -------
                     0
\`\`\`

**Steg for steg:**
1. $x^3 \\div x = x^2$, så $x^2 \\cdot (x+3) = x^3 + 3x^2$
2. $(x^3 + 2x^2) - (x^3 + 3x^2) = -x^2$
3. $-x^2 \\div x = -x$, så $-x \\cdot (x+3) = -x^2 - 3x$
4. $(-x^2 - 5x) - (-x^2 - 3x) = -2x$
5. $-2x \\div x = -2$, så $-2 \\cdot (x+3) = -2x - 6$
6. $(-2x - 6) - (-2x - 6) = 0$

**Svar:** $x^3 + 2x^2 - 5x - 6 = (x + 3)(x^2 - x - 2)$

Resten er 0, så $(x+3)$ er en faktor i $P(x)$.`,
    },

    {
      id: 's1-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Utfør polynomdivisjon: $(x^3 - 7x + 6) \\div (x - 2)$`,
        solution: `Vi utfører polynomdivisjon:

$x^3 + 0x^2 - 7x + 6$ delt på $x - 2$

1. $x^3 \\div x = x^2$
2. $x^2(x-2) = x^3 - 2x^2$
3. $(x^3 + 0x^2) - (x^3 - 2x^2) = 2x^2$
4. $2x^2 \\div x = 2x$
5. $2x(x-2) = 2x^2 - 4x$
6. $(2x^2 - 7x) - (2x^2 - 4x) = -3x$
7. $-3x \\div x = -3$
8. $-3(x-2) = -3x + 6$
9. $(-3x + 6) - (-3x + 6) = 0$

**Svar:** $x^3 - 7x + 6 = (x - 2)(x^2 + 2x - 3)$`,
        hints: ['Husk å inkludere $0x^2$-leddet når du setter opp divisjonen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Utfør polynomdivisjon: $(2x^3 + 5x^2 - x - 6) \\div (x + 2)$`,
        solution: `Vi utfører polynomdivisjon:

1. $2x^3 \\div x = 2x^2$
2. $2x^2(x+2) = 2x^3 + 4x^2$
3. $(2x^3 + 5x^2) - (2x^3 + 4x^2) = x^2$
4. $x^2 \\div x = x$
5. $x(x+2) = x^2 + 2x$
6. $(x^2 - x) - (x^2 + 2x) = -3x$
7. $-3x \\div x = -3$
8. $-3(x+2) = -3x - 6$
9. $(-3x - 6) - (-3x - 6) = 0$

**Svar:** $2x^3 + 5x^2 - x - 6 = (x + 2)(2x^2 + x - 3)$`,
        hints: ['Start med å dele det ledende leddet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-faktorsetningen',
      type: 'theorem',
      title: 'Faktorsetningen',
      content: `Hvis $P(a) = 0$ for et polynom $P(x)$, så er $(x - a)$ en faktor i $P(x)$.

Ekvivalent: Hvis $(x - a)$ er en faktor i $P(x)$, så er $P(a) = 0$.

**Konsekvens:** For å finne faktorer kan vi:
1. Gjette nullpunkter (ofte heltall som deler konstantleddet)
2. Verifisere ved å sette inn i polynomet
3. Bruke polynomdivisjon til å finne resten av faktorene`,
    },

    {
      id: 's1-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruke faktorsetningen',
      problem: `Faktoriser $P(x) = x^3 - 6x^2 + 11x - 6$ fullstendig.`,
      solution: `**Løsning:**

**Steg 1:** Finn kandidater til nullpunkter
Konstantleddet er $-6$, så vi prøver divisorene av 6: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$

**Steg 2:** Test kandidatene
- $P(1) = 1 - 6 + 11 - 6 = 0$ ✓

Så $(x - 1)$ er en faktor!

**Steg 3:** Polynomdivisjon
$(x^3 - 6x^2 + 11x - 6) \\div (x - 1) = x^2 - 5x + 6$

**Steg 4:** Faktoriser resten
$x^2 - 5x + 6 = (x - 2)(x - 3)$

**Svar:** $P(x) = (x - 1)(x - 2)(x - 3)$

Nullpunktene er $x = 1$, $x = 2$ og $x = 3$.`,
    },

    {
      id: 's1-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk faktorsetningen til å faktorisere $P(x) = x^3 - 2x^2 - 5x + 6$ fullstendig.`,
        solution: `**Steg 1:** Prøv divisorer av 6: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$

$P(1) = 1 - 2 - 5 + 6 = 0$ ✓

Så $(x - 1)$ er en faktor.

**Steg 2:** Polynomdivisjon gir:
$(x^3 - 2x^2 - 5x + 6) \\div (x - 1) = x^2 - x - 6$

**Steg 3:** Faktoriser:
$x^2 - x - 6 = (x - 3)(x + 2)$

**Svar:** $P(x) = (x - 1)(x - 3)(x + 2)$`,
        hints: ['Prøv først $x = 1, -1, 2, -2, 3, -3$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Faktoriser $P(x) = x^3 + 6x^2 + 11x + 6$ fullstendig.`,
        solution: `**Steg 1:** Prøv divisorer av 6
$P(-1) = -1 + 6 - 11 + 6 = 0$ ✓

Så $(x + 1)$ er en faktor.

**Steg 2:** Polynomdivisjon:
$(x^3 + 6x^2 + 11x + 6) \\div (x + 1) = x^2 + 5x + 6$

**Steg 3:** Faktoriser:
$x^2 + 5x + 6 = (x + 2)(x + 3)$

**Svar:** $P(x) = (x + 1)(x + 2)(x + 3)$`,
        hints: ['Prøv negative verdier siden alle koeffisienter er positive'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Faktoriser $P(x) = 2x^3 - 3x^2 - 8x + 12$ fullstendig.`,
        solution: `**Steg 1:** Prøv verdier
$P(2) = 16 - 12 - 16 + 12 = 0$ ✓

Så $(x - 2)$ er en faktor.

**Steg 2:** Polynomdivisjon:
$(2x^3 - 3x^2 - 8x + 12) \\div (x - 2) = 2x^2 + x - 6$

**Steg 3:** Faktoriser:
$2x^2 + x - 6 = (2x - 3)(x + 2)$

**Svar:** $P(x) = (x - 2)(2x - 3)(x + 2)$

Nullpunktene er $x = 2$, $x = \\frac{3}{2}$ og $x = -2$.`,
        hints: ['Kandidater for nullpunkter inkluderer $\\pm\\frac{p}{q}$ der $p$ deler 12 og $q$ deler 2'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Gitt at $x = -1$ er et nullpunkt for $P(x) = x^4 + x^3 - 7x^2 - x + 6$. Faktoriser polynomet fullstendig.`,
        solution: `**Steg 1:** Siden $x = -1$ er nullpunkt, er $(x + 1)$ en faktor.

$(x^4 + x^3 - 7x^2 - x + 6) \\div (x + 1) = x^3 - 7x + 6$

**Steg 2:** Finn nullpunkter i $x^3 - 7x + 6$
$P(1) = 1 - 7 + 6 = 0$ ✓

$(x^3 - 7x + 6) \\div (x - 1) = x^2 + x - 6$

**Steg 3:** Faktoriser $x^2 + x - 6 = (x + 3)(x - 2)$

**Svar:** $P(x) = (x + 1)(x - 1)(x + 3)(x - 2)$`,
        hints: ['Start med å dele på $(x + 1)$, deretter gjenta prosessen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Vis at $P(x) = x^3 - 3x + 2$ har et dobbelt nullpunkt, og finn alle nullpunkter.`,
        solution: `**Steg 1:** Finn nullpunkter
$P(1) = 1 - 3 + 2 = 0$ ✓

**Steg 2:** Del på $(x - 1)$:
$(x^3 - 3x + 2) \\div (x - 1) = x^2 + x - 2$

**Steg 3:** Faktoriser resten:
$x^2 + x - 2 = (x + 2)(x - 1)$

**Steg 4:** Full faktorisering:
$P(x) = (x - 1)(x + 2)(x - 1) = (x - 1)^2(x + 2)$

$x = 1$ er et **dobbelt nullpunkt** (multiplisitet 2).
$x = -2$ er et enkelt nullpunkt.`,
        hints: ['Etter første divisjon, sjekk om $x = 1$ også er nullpunkt i kvotienten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Finn polynomet $P(x)$ av grad 3 med ledende koeffisient 1 som har nullpunkter $x = -2$, $x = 1$ og $x = 3$.`,
        solution: `Et polynom med nullpunkter $x = a$, $x = b$, $x = c$ kan skrives:
$$P(x) = k(x - a)(x - b)(x - c)$$

Med ledende koeffisient 1 og nullpunkter $-2$, $1$, $3$:
$$P(x) = (x - (-2))(x - 1)(x - 3)$$
$$P(x) = (x + 2)(x - 1)(x - 3)$$

Utvider:
$(x + 2)(x - 1) = x^2 + x - 2$
$(x^2 + x - 2)(x - 3) = x^3 - 3x^2 + x^2 - 3x - 2x + 6$
$= x^3 - 2x^2 - 5x + 6$

**Svar:** $P(x) = x^3 - 2x^2 - 5x + 6$`,
        hints: ['Bruk at $(x - a)$ er en faktor når $a$ er et nullpunkt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Bestem verdien av $k$ slik at $(x + 2)$ er en faktor i $P(x) = x^3 + kx^2 - x - 6$.`,
        solution: `Hvis $(x + 2)$ er en faktor, så må $P(-2) = 0$ ifølge faktorsetningen.

$P(-2) = (-2)^3 + k(-2)^2 - (-2) - 6$
$= -8 + 4k + 2 - 6$
$= 4k - 12$

For at $P(-2) = 0$:
$4k - 12 = 0$
$k = 3$

**Verifisering:**
$P(x) = x^3 + 3x^2 - x - 6$
$P(-2) = -8 + 12 + 2 - 6 = 0$ ✓

**Svar:** $k = 3$`,
        hints: ['Bruk faktorsetningen: $P(-2) = 0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et polynom $P(x)$ av grad 3 med ledende koeffisient 2 har nullpunkter $x = 1$ og $x = -\\frac{1}{2}$. Det tredje nullpunktet er dobbelt så stort som det første. Finn $P(x)$.`,
        solution: `Gitt:
- Ledende koeffisient: 2
- Nullpunkt 1: $x = 1$
- Nullpunkt 2: $x = -\\frac{1}{2}$
- Nullpunkt 3: $x = 2 \\cdot 1 = 2$

Polynomet:
$P(x) = 2(x - 1)(x + \\frac{1}{2})(x - 2)$
$= 2(x - 1) \\cdot \\frac{1}{2}(2x + 1) \\cdot (x - 2)$
$= (x - 1)(2x + 1)(x - 2)$

Utvider:
$(x - 1)(2x + 1) = 2x^2 - x - 1$
$(2x^2 - x - 1)(x - 2) = 2x^3 - 4x^2 - x^2 + 2x - x + 2$
$= 2x^3 - 5x^2 + x + 2$

**Svar:** $P(x) = 2x^3 - 5x^2 + x + 2$`,
        hints: ['Husk at $2(x + \\frac{1}{2}) = 2x + 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Utfør divisjonen $(x^4 - 1) \\div (x - 1)$ og bruk resultatet til å faktorisere $x^4 - 1$ fullstendig.`,
        solution: `**Steg 1:** Polynomdivisjon
$(x^4 - 1) \\div (x - 1) = x^3 + x^2 + x + 1$

Så $x^4 - 1 = (x - 1)(x^3 + x^2 + x + 1)$

**Steg 2:** Faktoriser $x^3 + x^2 + x + 1$
$= x^2(x + 1) + 1(x + 1)$
$= (x + 1)(x^2 + 1)$

**Steg 3:** Full faktorisering over de reelle tall:
$x^4 - 1 = (x - 1)(x + 1)(x^2 + 1)$

Alternativt kan vi bruke konjugatsetningen direkte:
$x^4 - 1 = (x^2)^2 - 1^2 = (x^2 - 1)(x^2 + 1) = (x-1)(x+1)(x^2+1)$

**Merk:** $x^2 + 1$ kan ikke faktoriseres videre over de reelle tall.`,
        hints: ['Du kan også bruke at $x^4 - 1 = (x^2 - 1)(x^2 + 1)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-1-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Del $P(x) = x^4 + 2x^3 - 3x^2 + 4x - 4$ på $D(x) = x^2 + x - 2$ og uttrykk $P(x)$ på formen $P(x) = D(x) \\cdot Q(x) + R(x)$.`,
        solution: `Vi utfører polynomdivisjon med divisor av grad 2.

\`\`\`
           x² + x - 2
          _______________
x²+x-2 | x⁴ + 2x³ - 3x² + 4x - 4
         x⁴ +  x³ - 2x²
         _______________
               x³ - x² + 4x
               x³ + x² - 2x
               ___________
                  -2x² + 6x - 4
                  -2x² - 2x + 4
                  ___________
                        8x - 8
\`\`\`

**Kvotient:** $Q(x) = x^2 + x - 2$
**Rest:** $R(x) = 8x - 8$

**Svar:**
$$P(x) = (x^2 + x - 2)(x^2 + x - 2) + 8x - 8$$
$$P(x) = (x^2 + x - 2)^2 + 8(x - 1)$$`,
        hints: ['Ved divisjon på grad 2 polynom, trekk fra et helt ledd av gangen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-1-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Polynomdivisjon:**
$$P(x) = D(x) \\cdot Q(x) + R(x)$$

**Faktorsetningen:**
$P(a) = 0 \\Leftrightarrow (x - a)$ er faktor i $P(x)$

**Fremgangsmåte for faktorisering:**
1. Gjett nullpunkter (divisorer av konstantleddet)
2. Verifiser ved innsetting
3. Del polynomet på $(x - a)$
4. Gjenta til polynomet er fullstendig faktorisert`,
    },
  ],
  exercises: [],
};

export const CHAPTER_S1_1_2: TextbookChapter = {
  id: 's1-1-2',
  courseId: 's1',
  chapterNumber: '1.2',
  title: 'Rasjonale uttrykk',
  description: 'Lær å forenkle, multiplisere og dividere rasjonale uttrykk.',
  estimatedMinutes: 50,
  competenceGoals: ['rekne med rasjonale uttrykk'],
  content: [
    {
      id: 's1-1-2-intro',
      type: 'text',
      content: `## Hva er et rasjonalt uttrykk?

Et **rasjonalt uttrykk** er en brøk der teller og nevner er polynomer.

**Eksempler:**
- $\\frac{x + 2}{x - 3}$
- $\\frac{x^2 - 4}{x^2 + 2x + 1}$
- $\\frac{2x}{x^2 - 1}$

Rasjonale uttrykk følger de samme reglene som vanlige brøker, men vi må være oppmerksomme på definisjonsmengden.`,
    },

    {
      id: 's1-1-2-def',
      type: 'definition',
      title: 'Rasjonalt uttrykk',
      content: `Et **rasjonalt uttrykk** er på formen:
$$\\frac{P(x)}{Q(x)}$$

der $P(x)$ og $Q(x)$ er polynomer og $Q(x) \\neq 0$.

**Definisjonsmengde:** Alle verdier av $x$ der $Q(x) \\neq 0$.`,
    },

    {
      id: 's1-1-2-forkorting',
      type: 'text',
      content: `## Forkorting av rasjonale uttrykk

For å forkorte et rasjonalt uttrykk:
1. Faktoriser teller og nevner
2. Stryk felles faktorer

**Viktig:** Vi kan bare forkorte **faktorer**, ikke ledd!`,
    },

    {
      id: 's1-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Forkorting',
      problem: `Forkort $\\frac{x^2 - 4}{x^2 + 4x + 4}$.`,
      solution: `**Løsning:**

**Steg 1:** Faktoriser teller og nevner

Teller: $x^2 - 4 = (x-2)(x+2)$ (konjugatsetningen)

Nevner: $x^2 + 4x + 4 = (x+2)^2$ (fullstendig kvadrat)

**Steg 2:** Forkort
$$\\frac{(x-2)(x+2)}{(x+2)^2} = \\frac{x-2}{x+2}$$

**Definisjonsmengde:** $x \\neq -2$

**Svar:** $\\frac{x-2}{x+2}$, $x \\neq -2$`,
    },

    {
      id: 's1-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Forkort $\\frac{x^2 - 9}{x + 3}$.`,
        solution: `**Faktorisering:**
$x^2 - 9 = (x-3)(x+3)$

**Forkorting:**
$$\\frac{(x-3)(x+3)}{x+3} = x - 3$$

**Svar:** $x - 3$, $x \\neq -3$`,
        hints: ['Bruk konjugatsetningen på telleren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Forkort $\\frac{x^2 + 5x + 6}{x^2 + 2x}$.`,
        solution: `**Faktorisering:**
Teller: $x^2 + 5x + 6 = (x+2)(x+3)$
Nevner: $x^2 + 2x = x(x+2)$

**Forkorting:**
$$\\frac{(x+2)(x+3)}{x(x+2)} = \\frac{x+3}{x}$$

**Svar:** $\\frac{x+3}{x}$, $x \\neq 0, -2$`,
        hints: ['Faktoriser begge polynomene først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Forkort $\\frac{x^3 - x}{x^2 - 1}$.`,
        solution: `**Faktorisering:**
Teller: $x^3 - x = x(x^2 - 1) = x(x-1)(x+1)$
Nevner: $x^2 - 1 = (x-1)(x+1)$

**Forkorting:**
$$\\frac{x(x-1)(x+1)}{(x-1)(x+1)} = x$$

**Svar:** $x$, $x \\neq \\pm 1$`,
        hints: ['Faktoriser ut $x$ fra telleren først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-multiplikasjon',
      type: 'text',
      content: `## Multiplikasjon av rasjonale uttrykk

For å multiplisere rasjonale uttrykk:
$$\\frac{P(x)}{Q(x)} \\cdot \\frac{R(x)}{S(x)} = \\frac{P(x) \\cdot R(x)}{Q(x) \\cdot S(x)}$$

**Tips:** Faktoriser først, så kan du forkorte før du multipliserer.`,
    },

    {
      id: 's1-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Multiplikasjon',
      problem: `Regn ut $\\frac{x^2 - 1}{x + 3} \\cdot \\frac{x + 3}{x - 1}$.`,
      solution: `**Løsning:**

**Steg 1:** Faktoriser
$x^2 - 1 = (x-1)(x+1)$

**Steg 2:** Skriv opp og forkort
$$\\frac{(x-1)(x+1)}{x+3} \\cdot \\frac{x+3}{x-1}$$
$$= \\frac{(x-1)(x+1)(x+3)}{(x+3)(x-1)}$$
$$= x + 1$$

**Svar:** $x + 1$, $x \\neq -3, 1$`,
    },

    {
      id: 's1-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Regn ut $\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x^2 - 1}{x - 2}$.`,
        solution: `**Faktorisering:**
$x^2 - 4 = (x-2)(x+2)$
$x^2 - 1 = (x-1)(x+1)$

**Utregning:**
$$\\frac{(x-2)(x+2)}{x+1} \\cdot \\frac{(x-1)(x+1)}{x-2}$$
$$= \\frac{(x-2)(x+2)(x-1)(x+1)}{(x+1)(x-2)}$$
$$= (x+2)(x-1)$$
$$= x^2 + x - 2$$

**Svar:** $x^2 + x - 2$, $x \\neq -1, 2$`,
        hints: ['Faktoriser begge brøkene før du multipliserer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-divisjon',
      type: 'text',
      content: `## Divisjon av rasjonale uttrykk

For å dividere rasjonale uttrykk, multipliserer vi med den omvendte brøken:
$$\\frac{P(x)}{Q(x)} \\div \\frac{R(x)}{S(x)} = \\frac{P(x)}{Q(x)} \\cdot \\frac{S(x)}{R(x)}$$`,
    },

    {
      id: 's1-1-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Regn ut $\\frac{x^2 - 9}{x} \\div \\frac{x + 3}{x^2}$.`,
        solution: `**Divisjon blir multiplikasjon:**
$$\\frac{x^2 - 9}{x} \\cdot \\frac{x^2}{x + 3}$$

**Faktorisering:**
$x^2 - 9 = (x-3)(x+3)$

**Utregning:**
$$= \\frac{(x-3)(x+3)}{x} \\cdot \\frac{x^2}{x+3}$$
$$= \\frac{(x-3)(x+3) \\cdot x^2}{x(x+3)}$$
$$= \\frac{(x-3) \\cdot x}{1}$$
$$= x(x-3) = x^2 - 3x$$

**Svar:** $x^2 - 3x$, $x \\neq 0, -3$`,
        hints: ['Snu den andre brøken og multipliser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-addisjon',
      type: 'text',
      content: `## Addisjon og subtraksjon

For å addere eller subtrahere rasjonale uttrykk trenger vi **fellesnevner**.

$$\\frac{P(x)}{Q(x)} + \\frac{R(x)}{S(x)} = \\frac{P(x) \\cdot S(x) + R(x) \\cdot Q(x)}{Q(x) \\cdot S(x)}$$`,
    },

    {
      id: 's1-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Addisjon',
      problem: `Regn ut $\\frac{2}{x-1} + \\frac{3}{x+1}$.`,
      solution: `**Løsning:**

**Fellesnevner:** $(x-1)(x+1) = x^2 - 1$

**Utvider brøkene:**
$$\\frac{2(x+1)}{(x-1)(x+1)} + \\frac{3(x-1)}{(x-1)(x+1)}$$

**Adderer tellerne:**
$$= \\frac{2(x+1) + 3(x-1)}{x^2 - 1}$$
$$= \\frac{2x + 2 + 3x - 3}{x^2 - 1}$$
$$= \\frac{5x - 1}{x^2 - 1}$$

**Svar:** $\\frac{5x - 1}{x^2 - 1}$, $x \\neq \\pm 1$`,
    },

    {
      id: 's1-1-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Regn ut $\\frac{1}{x} + \\frac{2}{x+1}$.`,
        solution: `**Fellesnevner:** $x(x+1)$

**Utvider:**
$$\\frac{x+1}{x(x+1)} + \\frac{2x}{x(x+1)}$$

**Adderer:**
$$= \\frac{x+1 + 2x}{x(x+1)} = \\frac{3x+1}{x(x+1)}$$

**Svar:** $\\frac{3x+1}{x(x+1)}$, $x \\neq 0, -1$`,
        hints: ['Finn fellesnevner først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `Regn ut $\\frac{x}{x-2} - \\frac{2}{x+2}$.`,
        solution: `**Fellesnevner:** $(x-2)(x+2) = x^2 - 4$

**Utvider:**
$$\\frac{x(x+2)}{x^2-4} - \\frac{2(x-2)}{x^2-4}$$

**Subtraherer:**
$$= \\frac{x(x+2) - 2(x-2)}{x^2-4}$$
$$= \\frac{x^2 + 2x - 2x + 4}{x^2-4}$$
$$= \\frac{x^2 + 4}{x^2 - 4}$$

**Svar:** $\\frac{x^2 + 4}{x^2 - 4}$, $x \\neq \\pm 2$`,
        hints: ['Vær nøye med fortegnene ved subtraksjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forenkle $\\frac{1}{x-1} + \\frac{1}{x} - \\frac{2x-1}{x^2-x}$.`,
        solution: `**Merk:** $x^2 - x = x(x-1)$

**Fellesnevner:** $x(x-1)$

**Utvider:**
$$\\frac{x}{x(x-1)} + \\frac{x-1}{x(x-1)} - \\frac{2x-1}{x(x-1)}$$

**Kombinerer:**
$$= \\frac{x + (x-1) - (2x-1)}{x(x-1)}$$
$$= \\frac{x + x - 1 - 2x + 1}{x(x-1)}$$
$$= \\frac{0}{x(x-1)} = 0$$

**Svar:** $0$, $x \\neq 0, 1$`,
        hints: ['Legg merke til at $x^2 - x = x(x-1)$ er fellesnevneren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forenkle $\\frac{x^2}{x^2-1} - \\frac{x}{x-1}$.`,
        solution: `**Faktorisering:** $x^2 - 1 = (x-1)(x+1)$

**Fellesnevner:** $(x-1)(x+1)$

**Utvider andre brøk:**
$$\\frac{x^2}{(x-1)(x+1)} - \\frac{x(x+1)}{(x-1)(x+1)}$$

**Subtraherer:**
$$= \\frac{x^2 - x(x+1)}{(x-1)(x+1)}$$
$$= \\frac{x^2 - x^2 - x}{x^2-1}$$
$$= \\frac{-x}{x^2-1}$$

**Svar:** $\\frac{-x}{x^2-1}$ eller $-\\frac{x}{x^2-1}$, $x \\neq \\pm 1$`,
        hints: ['Faktoriser $x^2 - 1$ for å finne fellesnevner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forenkle $\\frac{\\frac{1}{x} + \\frac{1}{y}}{\\frac{1}{x} - \\frac{1}{y}}$.`,
        solution: `**Telleren:**
$\\frac{1}{x} + \\frac{1}{y} = \\frac{y + x}{xy}$

**Nevneren:**
$\\frac{1}{x} - \\frac{1}{y} = \\frac{y - x}{xy}$

**Divisjon:**
$$\\frac{\\frac{y+x}{xy}}{\\frac{y-x}{xy}} = \\frac{y+x}{xy} \\cdot \\frac{xy}{y-x} = \\frac{y+x}{y-x}$$

**Svar:** $\\frac{x+y}{y-x}$ eller $-\\frac{x+y}{x-y}$, $x \\neq y$`,
        hints: ['Regn ut teller og nevner hver for seg først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forenkle $\\frac{x^2 - 4}{x^2 + x - 2} \\cdot \\frac{x^2 - 1}{x^2 - 4x + 4}$.`,
        solution: `**Faktorisering:**
- $x^2 - 4 = (x-2)(x+2)$
- $x^2 + x - 2 = (x+2)(x-1)$
- $x^2 - 1 = (x-1)(x+1)$
- $x^2 - 4x + 4 = (x-2)^2$

**Utregning:**
$$\\frac{(x-2)(x+2)}{(x+2)(x-1)} \\cdot \\frac{(x-1)(x+1)}{(x-2)^2}$$
$$= \\frac{(x-2)(x+2)(x-1)(x+1)}{(x+2)(x-1)(x-2)^2}$$
$$= \\frac{x+1}{x-2}$$

**Svar:** $\\frac{x+1}{x-2}$, $x \\neq -2, 1, 2$`,
        hints: ['Faktoriser alle fire polynomene før du forkorter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-1-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Vis at $\\frac{x^3 - 1}{x - 1} = x^2 + x + 1$ for $x \\neq 1$.`,
        solution: `**Metode 1: Polynomdivisjon**
$(x^3 - 1) \\div (x - 1)$

Divisjonen gir kvotient $x^2 + x + 1$ og rest $0$.

**Metode 2: Faktorisering**
Vi bruker formelen for differansen mellom terningtal:
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

Med $a = x$ og $b = 1$:
$$x^3 - 1 = (x - 1)(x^2 + x + 1)$$

Derfor:
$$\\frac{x^3 - 1}{x - 1} = \\frac{(x-1)(x^2 + x + 1)}{x - 1} = x^2 + x + 1$$

**Q.E.D.** (Quod erat demonstrandum - Det som skulle bevises)`,
        hints: ['Bruk enten polynomdivisjon eller formelen $a^3 - b^3 = (a-b)(a^2+ab+b^2)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-2-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Rasjonalt uttrykk:** $\\frac{P(x)}{Q(x)}$ der $P$ og $Q$ er polynomer

**Forkorting:** Faktoriser og stryk felles faktorer

**Multiplikasjon:** $\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{AC}{BD}$

**Divisjon:** $\\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}$

**Addisjon/Subtraksjon:** Finn fellesnevner

**Husk definisjonsmengden!**`,
    },
  ],
  exercises: [],
};

export const CHAPTER_S1_1_3: TextbookChapter = {
  id: 's1-1-3',
  courseId: 's1',
  chapterNumber: '1.3',
  title: 'Likninger og ulikheter',
  description: 'Lær å løse polynomlikninger og ulikheter med rasjonale uttrykk.',
  estimatedMinutes: 60,
  competenceGoals: ['løyse likningar og ulikskapar med polynomuttrykk'],
  content: [
    {
      id: 's1-1-3-intro',
      type: 'text',
      content: `## Polynomlikninger

En **polynomlikning** har formen $P(x) = 0$ der $P(x)$ er et polynom.

**Løsningsmetoder:**
1. Faktorisering (ved hjelp av nullpunktene)
2. Polynomdivisjon (når ett nullpunkt er kjent)
3. ABC-formelen (for andregradslikninger)`,
    },

    {
      id: 's1-1-3-def',
      type: 'definition',
      title: 'Nullpunktsmetoden',
      content: `Hvis $P(x) = (x - a_1)(x - a_2) \\cdots (x - a_n) = 0$, så er løsningene $x = a_1, a_2, \\ldots, a_n$.

**Prinsipp:** Et produkt er null hvis og bare hvis minst én faktor er null.`,
    },

    {
      id: 's1-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Tredjegradslikning',
      problem: `Løs likningen $x^3 - 2x^2 - 5x + 6 = 0$.`,
      solution: `**Løsning:**

**Steg 1:** Finn ett nullpunkt ved å prøve divisorer av 6
$P(1) = 1 - 2 - 5 + 6 = 0$ ✓

**Steg 2:** Polynomdivisjon
$(x^3 - 2x^2 - 5x + 6) \\div (x - 1) = x^2 - x - 6$

**Steg 3:** Faktoriser resten
$x^2 - x - 6 = (x - 3)(x + 2)$

**Steg 4:** Fullstendig faktorisering
$x^3 - 2x^2 - 5x + 6 = (x - 1)(x - 3)(x + 2) = 0$

**Løsninger:** $x = 1$, $x = 3$, $x = -2$`,
    },

    {
      id: 's1-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Løs likningen $x^3 + 2x^2 - x - 2 = 0$.`,
        solution: `**Prøv divisorer av 2:**
$P(1) = 1 + 2 - 1 - 2 = 0$ ✓

**Polynomdivisjon:**
$(x^3 + 2x^2 - x - 2) \\div (x - 1) = x^2 + 3x + 2$

**Faktoriser:**
$x^2 + 3x + 2 = (x + 1)(x + 2)$

**Løsninger:** $x = 1$, $x = -1$, $x = -2$`,
        hints: ['Start med å prøve $x = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Løs likningen $x^3 - 6x^2 + 11x - 6 = 0$.`,
        solution: `**Prøv divisorer av 6:**
$P(1) = 1 - 6 + 11 - 6 = 0$ ✓

**Polynomdivisjon:**
$(x^3 - 6x^2 + 11x - 6) \\div (x - 1) = x^2 - 5x + 6$

**Faktoriser:**
$x^2 - 5x + 6 = (x - 2)(x - 3)$

**Løsninger:** $x = 1$, $x = 2$, $x = 3$`,
        hints: ['Alle tre løsningene er positive heltall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Løs likningen $2x^3 - x^2 - 5x - 2 = 0$.`,
        solution: `**Prøv verdier:**
$P(2) = 16 - 4 - 10 - 2 = 0$ ✓

**Polynomdivisjon:**
$(2x^3 - x^2 - 5x - 2) \\div (x - 2) = 2x^2 + 3x + 1$

**Faktoriser:**
$2x^2 + 3x + 1 = (2x + 1)(x + 1)$

**Løsninger:** $x = 2$, $x = -\\frac{1}{2}$, $x = -1$`,
        hints: ['Kandidater inkluderer $\\pm\\frac{1}{2}, \\pm 1, \\pm 2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-rasjonale',
      type: 'text',
      content: `## Rasjonale likninger

En **rasjonal likning** inneholder rasjonale uttrykk.

**Løsningsmetode:**
1. Finn fellesnevner
2. Multipliser hele likningen med fellesnevneren
3. Løs polynomlikningen
4. **Sjekk** at løsningene ikke gir null i nevneren`,
    },

    {
      id: 's1-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Rasjonal likning',
      problem: `Løs likningen $\\frac{1}{x} + \\frac{2}{x-1} = 3$.`,
      solution: `**Løsning:**

**Fellesnevner:** $x(x-1)$

**Multipliser med fellesnevner:**
$\\frac{x(x-1)}{x} + \\frac{2x(x-1)}{x-1} = 3x(x-1)$
$(x-1) + 2x = 3x(x-1)$
$3x - 1 = 3x^2 - 3x$
$0 = 3x^2 - 6x + 1$

**ABC-formelen:**
$x = \\frac{6 \\pm \\sqrt{36 - 12}}{6} = \\frac{6 \\pm \\sqrt{24}}{6} = \\frac{6 \\pm 2\\sqrt{6}}{6} = 1 \\pm \\frac{\\sqrt{6}}{3}$

**Sjekk:** Ingen av løsningene gir $x = 0$ eller $x = 1$.

**Løsninger:** $x = 1 + \\frac{\\sqrt{6}}{3}$ og $x = 1 - \\frac{\\sqrt{6}}{3}$`,
    },

    {
      id: 's1-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Løs likningen $\\frac{3}{x-2} = \\frac{x}{x-2} + 1$.`,
        solution: `**Fellesnevner:** $x - 2$

**Multipliser:**
$3 = x + (x-2)$
$3 = x + x - 2$
$3 = 2x - 2$
$5 = 2x$
$x = \\frac{5}{2}$

**Sjekk:** $x = \\frac{5}{2} \\neq 2$ ✓

**Løsning:** $x = \\frac{5}{2}$`,
        hints: ['Multipliser begge sider med $(x-2)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Løs likningen $\\frac{2}{x+1} - \\frac{1}{x-1} = 0$.`,
        solution: `**Fellesnevner:** $(x+1)(x-1) = x^2 - 1$

**Multipliser:**
$2(x-1) - 1(x+1) = 0$
$2x - 2 - x - 1 = 0$
$x - 3 = 0$
$x = 3$

**Sjekk:** $x = 3 \\neq \\pm 1$ ✓

**Løsning:** $x = 3$`,
        hints: ['Flytt den ene brøken til høyre side og finn fellesnevner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Løs likningen $\\frac{x}{x-3} = \\frac{3}{x-3} + 2$.`,
        solution: `**Fellesnevner:** $x - 3$

**Multipliser:**
$x = 3 + 2(x-3)$
$x = 3 + 2x - 6$
$x = 2x - 3$
$-x = -3$
$x = 3$

**Sjekk:** $x = 3$ gir null i nevner!

**Ingen løsning** (likningen har ingen gyldige løsninger)`,
        hints: ['Husk å sjekke at løsningen ikke gir null i nevner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-ulikheter',
      type: 'text',
      content: `## Ulikheter med polynomer

For å løse polynomuliheter bruker vi **fortegnsskjema** (fortegnslinje).

**Metode:**
1. Flytt alt til én side slik at høyre side blir 0
2. Faktoriser venstre side
3. Finn nullpunktene
4. Tegn fortegnslinje for hver faktor
5. Kombiner fortegnene`,
    },

    {
      id: 's1-1-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Polynomulıkhet',
      problem: `Løs ulikheten $(x - 1)(x + 2) > 0$.`,
      solution: `**Løsning:**

**Nullpunkter:** $x = 1$ og $x = -2$

**Fortegnslinje:**
\`\`\`
          -2        1
    ────────┼────────┼────────
x - 1:   -    -    -  |  +
x + 2:   -    |    +    +
────────────────────────────
Produkt: +    |    -  |  +
\`\`\`

**Analyse:**
- For $x < -2$: $(-)(-) = +$ (positiv)
- For $-2 < x < 1$: $(-)(+) = -$ (negativ)
- For $x > 1$: $(+)(+) = +$ (positiv)

**Løsning:** $x < -2$ eller $x > 1$

I intervallnotasjon: $(-\\infty, -2) \\cup (1, \\infty)$`,
    },

    {
      id: 's1-1-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `Løs ulikheten $x^2 - 4x + 3 < 0$.`,
        solution: `**Faktoriser:** $x^2 - 4x + 3 = (x-1)(x-3)$

**Nullpunkter:** $x = 1$ og $x = 3$

**Fortegnslinje:**
\`\`\`
          1        3
    ──────┼────────┼────────
x - 1:  -   |   +     +
x - 3:  -       -   |   +
────────────────────────────
Produkt: +  |   -   |  +
\`\`\`

**Løsning:** $1 < x < 3$ eller $(1, 3)$`,
        hints: ['Faktoriser først, deretter bruk fortegnslinje'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `Løs ulikheten $x^2 - 2x - 8 \\geq 0$.`,
        solution: `**Faktoriser:** $x^2 - 2x - 8 = (x-4)(x+2)$

**Nullpunkter:** $x = 4$ og $x = -2$

**Fortegnslinje:**
\`\`\`
         -2        4
    ──────┼────────┼────────
x - 4:  -    -    -  |  +
x + 2:  -    |    +     +
────────────────────────────
Produkt: +  |   -   |  +
\`\`\`

Siden vi søker $\\geq 0$, inkluderer vi nullpunktene.

**Løsning:** $x \\leq -2$ eller $x \\geq 4$

I intervallnotasjon: $(-\\infty, -2] \\cup [4, \\infty)$`,
        hints: ['Husk å inkludere nullpunktene når vi har $\\geq$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-rasjonale-ulikheter',
      type: 'text',
      content: `## Rasjonale ulikheter

For rasjonale ulikheter må vi også ta hensyn til hvor nevneren er null.

**Viktig:** Vi kan **ikke** multiplisere med et uttrykk som kan være negativt uten å snu ulikhetstegnet!`,
    },

    {
      id: 's1-1-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Rasjonal ulikhet',
      problem: `Løs ulikheten $\\frac{x + 1}{x - 2} > 0$.`,
      solution: `**Løsning:**

**Kritiske punkter:**
- Teller = 0: $x = -1$
- Nevner = 0: $x = 2$ (ikke definert)

**Fortegnslinje:**
\`\`\`
         -1        2
    ──────┼────────┼────────
x + 1:  -    |    +     +
x - 2:  -        -   |   +
────────────────────────────
Brøk:   +   |    -   |   +
\`\`\`

Brøken er positiv når teller og nevner har samme fortegn.

**Løsning:** $x < -1$ eller $x > 2$

I intervallnotasjon: $(-\\infty, -1) \\cup (2, \\infty)$`,
    },

    {
      id: 's1-1-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Løs ulikheten $\\frac{x - 3}{x + 1} \\leq 0$.`,
        solution: `**Kritiske punkter:**
- Teller = 0: $x = 3$
- Nevner = 0: $x = -1$ (ikke definert)

**Fortegnslinje:**
\`\`\`
         -1        3
    ──────┼────────┼────────
x - 3:  -    -    -  |  +
x + 1:  -    |    +     +
────────────────────────────
Brøk:   +  | !   -   |  +
\`\`\`

Brøken er $\\leq 0$ når den er negativ eller null.
- Negativ: $-1 < x < 3$
- Null: $x = 3$

**Løsning:** $-1 < x \\leq 3$ eller $(-1, 3]$`,
        hints: ['$x = -1$ kan ikke være løsning siden nevneren blir null der'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Løs ulikheten $\\frac{2x - 1}{x + 3} \\geq 1$.`,
        solution: `**Omform:**
$\\frac{2x - 1}{x + 3} - 1 \\geq 0$
$\\frac{2x - 1 - (x + 3)}{x + 3} \\geq 0$
$\\frac{x - 4}{x + 3} \\geq 0$

**Kritiske punkter:** $x = 4$ (teller = 0), $x = -3$ (udefinert)

**Fortegnslinje:**
\`\`\`
         -3        4
    ──────┼────────┼────────
x - 4:  -    -    -  |  +
x + 3:  -    |    +     +
────────────────────────────
Brøk:   +  |     -   |  +
\`\`\`

**Løsning:** $x < -3$ eller $x \\geq 4$

I intervallnotasjon: $(-\\infty, -3) \\cup [4, \\infty)$`,
        hints: ['Trekk fra 1 fra begge sider og få alt på én brøk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Løs ulikheten $\\frac{x^2 - 1}{x} > 0$.`,
        solution: `**Faktoriser teller:** $x^2 - 1 = (x-1)(x+1)$

**Kritiske punkter:** $x = -1$, $x = 0$ (udefinert), $x = 1$

**Fortegnslinje:**
\`\`\`
         -1    0    1
    ──────┼────┼────┼────────
x - 1:  -    -    -  |  +
x + 1:  -    |    +    +    +
  x  :  -        -  |   +
────────────────────────────
Brøk:   -  |  +  |  -  |  +
\`\`\`

**Løsning:** $-1 < x < 0$ eller $x > 1$

I intervallnotasjon: $(-1, 0) \\cup (1, \\infty)$`,
        hints: ['Brøken har tre faktorer: $(x-1)$, $(x+1)$ og $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-1-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Finn alle heltallsløsninger til ulikheten $\\frac{(x-2)(x+3)}{(x-1)(x+1)} < 0$.`,
        solution: `**Kritiske punkter:** $x = -3, -1, 1, 2$

$x = -1$ og $x = 1$ er udefinert.

**Fortegnslinje:**
\`\`\`
      -3    -1     1     2
    ───┼─────┼─────┼─────┼────
x-2:  -     -     -     -  | +
x+3:  - |   +     +     +    +
x-1:  -     -     -   |  +   +
x+1:  -     - |   +      +   +
──────────────────────────────
Brøk: + |  -  |  +  |  -  | +
\`\`\`

**Intervaller der brøken er negativ:**
$-3 < x < -1$ og $1 < x < 2$

**Heltall i disse intervallene:**
- I $(-3, -1)$: $x = -2$
- I $(1, 2)$: ingen heltall

**Løsning:** $x = -2$`,
        hints: ['Bruk fortegnslinje med fire kritiske punkter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 's1-1-3-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Polynomlikninger:**
1. Faktoriser polynomet
2. Bruk nullpunktsmetoden

**Rasjonale likninger:**
1. Finn fellesnevner
2. Multipliser og løs
3. **Sjekk løsningene!**

**Ulikheter:**
1. Flytt alt til venstre side
2. Faktoriser
3. Bruk fortegnslinje
4. Husk å ekskludere punkter der nevner = 0`,
    },
  ],
  exercises: [],
};

export const CHAPTER_S1_2_1: TextbookChapter = {
  id: 's1-2-1',
  courseId: 's1',
  chapterNumber: '2.1',
  title: 'Polynomfunksjoner',
  description: 'Lær om polynomfunksjoner, deres egenskaper og grafiske fremstilling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke ulike funksjonstyper',
    'bruke funksjoner i modellering'
  ],
  content: [
    {
      id: 's1-2-1-intro',
      type: 'text',
      content: `## Hva er en polynomfunksjon?

En **polynomfunksjon** er en funksjon som kan skrives på formen:

$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0$$

der $a_n, a_{n-1}, \\ldots, a_0$ er konstanter og $a_n \\neq 0$.

**Graden** til polynomfunksjonen er den høyeste potensen av $x$, altså $n$.`
    },
    {
      id: 's1-2-1-def-polynom',
      type: 'definition',
      title: 'Polynomfunksjon',
      content: `En **polynomfunksjon av grad $n$** er en funksjon på formen:
$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0$$
der $a_n \\neq 0$ og $n$ er et ikke-negativt heltall.

Koeffisienten $a_n$ kalles **ledende koeffisient** og $a_0$ kalles **konstantledd**.`
    },
    {
      id: 's1-2-1-types',
      type: 'text',
      content: `## Ulike polynomfunksjoner

| Grad | Navn | Generell form |
|------|------|---------------|
| 0 | Konstant funksjon | $f(x) = a_0$ |
| 1 | Lineær funksjon | $f(x) = ax + b$ |
| 2 | Kvadratisk funksjon | $f(x) = ax^2 + bx + c$ |
| 3 | Kubisk funksjon | $f(x) = ax^3 + bx^2 + cx + d$ |
| 4 | Kvartisk funksjon | $f(x) = ax^4 + bx^3 + cx^2 + dx + e$ |`
    },
    {
      id: 's1-2-1-example-1',
      type: 'example',
      title: 'Identifisere polynomfunksjoner',
      problem: `Avgjør om følgende funksjoner er polynomfunksjoner, og angi eventuelt graden:

a) $f(x) = 3x^4 - 2x^2 + 5x - 1$
b) $g(x) = \\frac{1}{x} + x$
c) $h(x) = \\sqrt{x}$
d) $p(x) = 7$`,
      solution: `a) $f(x) = 3x^4 - 2x^2 + 5x - 1$ er en polynomfunksjon av grad 4 (kvartisk).

b) $g(x) = \\frac{1}{x} + x = x^{-1} + x$ er **ikke** en polynomfunksjon fordi $x^{-1}$ har negativ eksponent.

c) $h(x) = \\sqrt{x} = x^{1/2}$ er **ikke** en polynomfunksjon fordi eksponenten ikke er et heltall.

d) $p(x) = 7$ er en polynomfunksjon av grad 0 (konstant funksjon).`
    },
    {
      id: 's1-2-1-nullpunkter',
      type: 'text',
      content: `## Nullpunkter

Et **nullpunkt** til en funksjon $f$ er en $x$-verdi der $f(x) = 0$.

For polynomfunksjoner gjelder:
- En polynomfunksjon av grad $n$ har **høyst $n$ nullpunkter**
- Nullpunktene kan finnes ved faktorisering eller ved numeriske metoder`
    },
    {
      id: 's1-2-1-theorem-nullpunkter',
      type: 'theorem',
      title: 'Faktorteoremet',
      content: `Hvis $x = a$ er et nullpunkt for polynomfunksjonen $f(x)$, så er $(x - a)$ en faktor i $f(x)$.

Det vil si: $f(a) = 0 \\Leftrightarrow f(x) = (x - a) \\cdot q(x)$ for en polynomfunksjon $q(x)$.`
    },
    {
      id: 's1-2-1-example-2',
      type: 'example',
      title: 'Finne nullpunkter',
      problem: `Finn nullpunktene til $f(x) = x^3 - 6x^2 + 11x - 6$.`,
      solution: `Vi prøver først å finne ett nullpunkt ved å teste noen verdier:
- $f(1) = 1 - 6 + 11 - 6 = 0$ ✓

Siden $x = 1$ er et nullpunkt, er $(x - 1)$ en faktor. Vi utfører polynomdivisjon:

$$x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$$

Vi faktoriserer videre:
$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

Dermed:
$$f(x) = (x - 1)(x - 2)(x - 3)$$

**Nullpunktene er $x = 1$, $x = 2$ og $x = 3$.**`
    },
    {
      id: 's1-2-1-grafisk',
      type: 'text',
      content: `## Grafiske egenskaper

### Endeoppførsel
For store verdier av $|x|$ dominerer leddet med høyest potens:

- **Partallsgrad** ($n = 2, 4, 6, \\ldots$):
  - $a_n > 0$: Grafen går mot $+\\infty$ for $x \\to \\pm\\infty$
  - $a_n < 0$: Grafen går mot $-\\infty$ for $x \\to \\pm\\infty$

- **Oddetallsgrad** ($n = 1, 3, 5, \\ldots$):
  - $a_n > 0$: Grafen går mot $-\\infty$ for $x \\to -\\infty$ og $+\\infty$ for $x \\to +\\infty$
  - $a_n < 0$: Grafen går mot $+\\infty$ for $x \\to -\\infty$ og $-\\infty$ for $x \\to +\\infty$`
    },
    {
      id: 's1-2-1-example-3',
      type: 'example',
      title: 'Skissere graf',
      problem: `Skisser grafen til $f(x) = -x^3 + 3x$ ved å finne nullpunkter og bestemme endeoppførsel.`,
      solution: `**Nullpunkter:**
$$-x^3 + 3x = 0$$
$$-x(x^2 - 3) = 0$$
$$x = 0 \\text{ eller } x = \\pm\\sqrt{3}$$

Nullpunktene er $x = -\\sqrt{3} \\approx -1{,}73$, $x = 0$ og $x = \\sqrt{3} \\approx 1{,}73$.

**Endeoppførsel:**
Dette er en polynomfunksjon av grad 3 (oddetallsgrad) med negativ ledende koeffisient ($-1$).
- For $x \\to -\\infty$: $f(x) \\to +\\infty$
- For $x \\to +\\infty$: $f(x) \\to -\\infty$

**Tilleggspunkter:**
- $f(-1) = -(-1) + 3(-1) = 1 - 3 = -2$
- $f(1) = -1 + 3 = 2$

Grafen starter oppe til venstre, krysser $x$-aksen ved $x = -\\sqrt{3}$, når et toppunkt rundt $x = -1$, krysser i $x = 0$, når et bunnpunkt rundt $x = 1$, og fortsetter nedover mot høyre.`
    },
    {
      id: 's1-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken grad har polynomfunksjonen $f(x) = 2x^5 - 3x^3 + x - 7$?',
            solution: 'Graden er 5 (den høyeste potensen av $x$).'
          },
          {
            label: 'b',
            task: 'Hva er den ledende koeffisienten og konstantleddet?',
            solution: 'Ledende koeffisient: $2$. Konstantledd: $-7$.'
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Er $f(x) = x^2 + \\frac{1}{x}$ en polynomfunksjon?',
            solution: 'Nei, fordi $\\frac{1}{x} = x^{-1}$ har negativ eksponent.'
          },
          {
            label: 'b',
            task: 'Er $g(x) = x^3 - \\sqrt{2}x + 1$ en polynomfunksjon?',
            solution: 'Ja, dette er en polynomfunksjon av grad 3. Koeffisientene trenger ikke være heltall.'
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn nullpunktene til $f(x) = x^2 - 5x + 6$.',
            solution: '$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$ gir $x = 2$ og $x = 3$.'
          },
          {
            label: 'b',
            task: 'Finn nullpunktene til $g(x) = x^2 - 4$.',
            solution: '$x^2 - 4 = (x - 2)(x + 2) = 0$ gir $x = 2$ og $x = -2$.'
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at $x = 2$ er et nullpunkt for $f(x) = x^3 - 2x^2 - x + 2$.',
            solution: '$f(2) = 8 - 8 - 2 + 2 = 0$ ✓'
          },
          {
            label: 'b',
            task: 'Bruk faktorteoremet til å faktorisere $f(x)$ fullstendig og finn alle nullpunkter.',
            solution: `Siden $x = 2$ er nullpunkt, er $(x-2)$ en faktor.
Polynomdivisjon: $f(x) = (x-2)(x^2 - 1) = (x-2)(x-1)(x+1)$
Nullpunktene er $x = -1$, $x = 1$ og $x = 2$.`
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn nullpunktene til $f(x) = x^3 - x$ ved faktorisering.',
            solution: '$f(x) = x(x^2 - 1) = x(x-1)(x+1)$. Nullpunktene er $x = -1$, $x = 0$ og $x = 1$.'
          },
          {
            label: 'b',
            task: 'Beskriv endeoppførselen til $f(x)$.',
            solution: 'Grad 3 med positiv ledende koeffisient: $f(x) \\to -\\infty$ når $x \\to -\\infty$ og $f(x) \\to +\\infty$ når $x \\to +\\infty$.'
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn alle nullpunktene til $f(x) = x^4 - 5x^2 + 4$.',
            solution: `La $u = x^2$. Da blir $u^2 - 5u + 4 = 0$.
$(u - 1)(u - 4) = 0$ gir $u = 1$ eller $u = 4$.
$x^2 = 1$ gir $x = \\pm 1$
$x^2 = 4$ gir $x = \\pm 2$
Nullpunktene er $x = -2, -1, 1, 2$.`
          },
          {
            label: 'b',
            task: 'Beskriv endeoppførselen til $f(x)$.',
            solution: 'Grad 4 (partall) med positiv ledende koeffisient: $f(x) \\to +\\infty$ når $x \\to \\pm\\infty$.'
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En polynomfunksjon har nullpunkter $x = -1$, $x = 2$ og $x = 3$. Skriv opp en mulig funksjonsuttrykk.',
            solution: '$f(x) = (x + 1)(x - 2)(x - 3) = x^3 - 4x^2 + x + 6$'
          },
          {
            label: 'b',
            task: 'Hvis funksjonen i tillegg skal gå gjennom punktet $(0, 12)$, hva blir funksjonsuttrykket?',
            solution: `$f(0) = a(1)(-2)(-3) = 6a = 12$ gir $a = 2$.
$f(x) = 2(x + 1)(x - 2)(x - 3) = 2x^3 - 8x^2 + 2x + 12$`
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at $x = -1$ er et nullpunkt for $f(x) = x^3 + 3x^2 + 3x + 1$.',
            solution: '$f(-1) = -1 + 3 - 3 + 1 = 0$ ✓'
          },
          {
            label: 'b',
            task: 'Faktoriser $f(x)$ fullstendig.',
            solution: `$f(x) = (x+1)(x^2 + 2x + 1) = (x+1)(x+1)^2 = (x+1)^3$
Dette er faktisk $(x+1)^3$, altså et trippelt nullpunkt.`
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange nullpunkter kan en polynomfunksjon av grad 5 ha? Forklar.',
            solution: 'En polynomfunksjon av grad 5 kan ha 1, 3 eller 5 reelle nullpunkter. Den må ha minst ett (oddetallsgrad), og komplekse nullpunkter kommer i par.'
          },
          {
            label: 'b',
            task: 'Gi et eksempel på en polynomfunksjon av grad 5 med nøyaktig tre nullpunkter.',
            solution: '$f(x) = x(x^2+1)(x-1)(x-2)$ har grad 5 og nullpunkter $x = 0, 1, 2$ (faktorene $x^2+1$ gir komplekse røtter).'
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $k$ slik at $x = 3$ er et nullpunkt for $f(x) = x^3 - kx^2 + 2x - 6$.',
            solution: '$f(3) = 27 - 9k + 6 - 6 = 0$ gir $27 - 9k = 0$, altså $k = 3$.'
          },
          {
            label: 'b',
            task: 'Med verdien av $k$ fra oppgave a, finn alle nullpunktene til $f(x)$.',
            solution: `$f(x) = x^3 - 3x^2 + 2x - 6 = (x-3)(x^2 + 2)$
$x^2 + 2 = 0$ har ingen reelle løsninger.
Det eneste reelle nullpunktet er $x = 3$.`
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En kubisk funksjon $f(x) = ax^3 + bx^2 + cx + d$ har nullpunkter i $x = -2$, $x = 1$ og $x = 4$, og $f(0) = -8$. Bestem $a$, $b$, $c$ og $d$.',
            solution: `$f(x) = a(x+2)(x-1)(x-4)$
$f(0) = a(2)(-1)(-4) = 8a = -8$ gir $a = -1$
$f(x) = -(x+2)(x-1)(x-4) = -(x^3 - 3x^2 - 6x + 8) = -x^3 + 3x^2 + 6x - 8$
$a = -1$, $b = 3$, $c = 6$, $d = -8$`
          }
        ]
      }
    },
    {
      id: 's1-2-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-2-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Skisser grafen til $f(x) = x^4 - 4x^3$ ved å finne nullpunkter, fortegn og endeoppførsel.',
            solution: `**Nullpunkter:** $x^4 - 4x^3 = x^3(x - 4) = 0$ gir $x = 0$ (trippelt) og $x = 4$
**Endeoppførsel:** Grad 4 med positiv ledende koeff. $\\Rightarrow f(x) \\to +\\infty$ når $x \\to \\pm\\infty$
**Fortegn:**
- $x < 0$: $f(x) > 0$ (negativ kubikk ganger negativ)
- $0 < x < 4$: $f(x) < 0$
- $x > 4$: $f(x) > 0$

Grafen tangerer $x$-aksen i $x = 0$ (trippelt nullpunkt) og krysser i $x = 4$.`
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S1_2_2: TextbookChapter = {
  id: 's1-2-2',
  courseId: 's1',
  chapterNumber: '2.2',
  title: 'Rasjonale funksjoner',
  description: 'Lær om rasjonale funksjoner, asymptoter og deres grafiske egenskaper.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke ulike funksjonstyper',
    'bruke funksjoner i modellering'
  ],
  content: [
    {
      id: 's1-2-2-intro',
      type: 'text',
      content: `## Hva er en rasjonal funksjon?

En **rasjonal funksjon** er en funksjon som kan skrives som en brøk der teller og nevner er polynomer:

$$f(x) = \\frac{P(x)}{Q(x)}$$

der $P(x)$ og $Q(x)$ er polynomfunksjoner og $Q(x) \\neq 0$.`
    },
    {
      id: 's1-2-2-def-rasjonal',
      type: 'definition',
      title: 'Rasjonal funksjon',
      content: `En **rasjonal funksjon** er en funksjon på formen:
$$f(x) = \\frac{P(x)}{Q(x)}$$
der $P(x)$ og $Q(x)$ er polynomfunksjoner.

**Definisjonsmengden** er alle $x$-verdier der $Q(x) \\neq 0$.`
    },
    {
      id: 's1-2-2-eksempler',
      type: 'text',
      content: `## Eksempler på rasjonale funksjoner

- $f(x) = \\frac{1}{x}$ (den enkleste rasjonale funksjonen)
- $g(x) = \\frac{x + 1}{x - 2}$
- $h(x) = \\frac{x^2 - 1}{x^2 + 1}$
- $p(x) = \\frac{2x^3 - 5x + 1}{x^2 - 4}$`
    },
    {
      id: 's1-2-2-asymptoter',
      type: 'text',
      content: `## Asymptoter

### Vertikale asymptoter
En **vertikal asymptote** er en vertikal linje $x = a$ der funksjonen går mot $\\pm\\infty$.

Vertikale asymptoter oppstår der nevneren er null, men telleren er ulik null.

### Horisontale asymptoter
En **horisontal asymptote** er en horisontal linje $y = b$ som grafen nærmer seg for store verdier av $|x|$.

For å finne horisontale asymptoter ser vi på graden til teller og nevner:
- **Grad teller < grad nevner**: $y = 0$
- **Grad teller = grad nevner**: $y = \\frac{\\text{ledende koeff. teller}}{\\text{ledende koeff. nevner}}$
- **Grad teller > grad nevner**: Ingen horisontal asymptote`
    },
    {
      id: 's1-2-2-example-1',
      type: 'example',
      title: 'Finne asymptoter',
      problem: `Finn asymptotene til $f(x) = \\frac{2x + 1}{x - 3}$.`,
      solution: `**Vertikal asymptote:**
Nevner lik null: $x - 3 = 0 \\Rightarrow x = 3$
Vertikal asymptote: $x = 3$

**Horisontal asymptote:**
Grad teller = grad nevner = 1
$$y = \\frac{2}{1} = 2$$
Horisontal asymptote: $y = 2$`
    },
    {
      id: 's1-2-2-def-nullpunkt',
      type: 'text',
      content: `## Nullpunkter

Nullpunktene til en rasjonal funksjon $f(x) = \\frac{P(x)}{Q(x)}$ er verdiene der $P(x) = 0$ og $Q(x) \\neq 0$.

Med andre ord: telleren er null, men nevneren er ikke null.`
    },
    {
      id: 's1-2-2-example-2',
      type: 'example',
      title: 'Finne nullpunkter',
      problem: `Finn nullpunktene til $f(x) = \\frac{x^2 - 4}{x^2 - 1}$.`,
      solution: `**Teller lik null:**
$$x^2 - 4 = 0$$
$$(x - 2)(x + 2) = 0$$
$$x = 2 \\text{ eller } x = -2$$

**Sjekk at nevner ikke er null:**
- $x = 2$: $2^2 - 1 = 3 \\neq 0$ ✓
- $x = -2$: $(-2)^2 - 1 = 3 \\neq 0$ ✓

**Nullpunktene er $x = -2$ og $x = 2$.**`
    },
    {
      id: 's1-2-2-skra-asymptote',
      type: 'text',
      content: `## Skrå asymptoter

Når graden til telleren er nøyaktig én mer enn graden til nevneren, har funksjonen en **skrå asymptote**.

Den skrå asymptoten finnes ved polynomdivisjon:
$$f(x) = \\frac{P(x)}{Q(x)} = ax + b + \\frac{R(x)}{Q(x)}$$

der $ax + b$ er den skrå asymptoten.`
    },
    {
      id: 's1-2-2-example-3',
      type: 'example',
      title: 'Skrå asymptote',
      problem: `Finn den skrå asymptoten til $f(x) = \\frac{x^2 + 2x - 3}{x - 1}$.`,
      solution: `Vi utfører polynomdivisjon:

$$\\frac{x^2 + 2x - 3}{x - 1} = x + 3 + \\frac{0}{x - 1} = x + 3$$

Merk: I dette tilfellet går divisjonen opp! Det betyr at $f(x) = x + 3$ for alle $x \\neq 1$.

La oss verifisere: $x^2 + 2x - 3 = (x-1)(x+3)$, så
$$f(x) = \\frac{(x-1)(x+3)}{x-1} = x + 3 \\text{ for } x \\neq 1$$

Grafen er altså en rett linje med et "hull" ved $x = 1$.`
    },
    {
      id: 's1-2-2-tip',
      type: 'tip',
      title: 'Forenkle rasjonale funksjoner',
      content: `Husk å alltid sjekke om teller og nevner har felles faktorer som kan forkortes. Dette kan avsløre "hull" i grafen og forenkle analysen.

For eksempel: $\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x + 2$ for $x \\neq 2$`
    },
    {
      id: 's1-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn definisjonsmengden til $f(x) = \\frac{x + 1}{x - 4}$.',
            solution: '$D_f = \\{x \\in \\mathbb{R} : x \\neq 4\\}$ eller $D_f = \\mathbb{R} \\setminus \\{4\\}$'
          },
          {
            label: 'b',
            task: 'Finn definisjonsmengden til $g(x) = \\frac{3}{x^2 - 9}$.',
            solution: '$x^2 - 9 = 0$ når $x = \\pm 3$. $D_g = \\{x \\in \\mathbb{R} : x \\neq -3 \\text{ og } x \\neq 3\\}$'
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn vertikal asymptote til $f(x) = \\frac{1}{x + 2}$.',
            solution: 'Vertikal asymptote: $x = -2$'
          },
          {
            label: 'b',
            task: 'Finn horisontal asymptote til $f(x) = \\frac{1}{x + 2}$.',
            solution: 'Grad teller (0) < grad nevner (1), så horisontal asymptote er $y = 0$.'
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn nullpunktet til $f(x) = \\frac{x - 3}{x + 1}$.',
            solution: 'Teller = 0: $x - 3 = 0 \\Rightarrow x = 3$. Sjekk: $3 + 1 \\neq 0$ ✓. Nullpunkt: $x = 3$'
          },
          {
            label: 'b',
            task: 'Finn nullpunktene til $g(x) = \\frac{x^2 - 9}{x + 2}$.',
            solution: '$x^2 - 9 = 0 \\Rightarrow x = \\pm 3$. Begge gir nevner $\\neq 0$. Nullpunkter: $x = -3$ og $x = 3$'
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn alle asymptoter til $f(x) = \\frac{3x - 6}{x + 4}$.',
            solution: `Vertikal: $x = -4$
Horisontal: Grad teller = grad nevner, så $y = \\frac{3}{1} = 3$`
          },
          {
            label: 'b',
            task: 'Finn nullpunktet.',
            solution: '$3x - 6 = 0 \\Rightarrow x = 2$. Sjekk: $2 + 4 = 6 \\neq 0$ ✓'
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn alle asymptoter til $f(x) = \\frac{x^2 + 1}{x^2 - 4}$.',
            solution: `Vertikale: $x^2 - 4 = 0 \\Rightarrow x = \\pm 2$
Horisontal: Grad teller = grad nevner = 2, så $y = \\frac{1}{1} = 1$`
          },
          {
            label: 'b',
            task: 'Har funksjonen noen nullpunkter?',
            solution: '$x^2 + 1 = 0$ har ingen reelle løsninger. Funksjonen har ingen nullpunkter.'
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Forenkle $f(x) = \\frac{x^2 - 1}{x + 1}$ og finn eventuelle "hull".',
            solution: `$f(x) = \\frac{(x-1)(x+1)}{x+1} = x - 1$ for $x \\neq -1$
Det er et "hull" ved $x = -1$ (punktet $(-1, -2)$).`
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den skrå asymptoten til $f(x) = \\frac{x^2 - 1}{x}$.',
            solution: `Polynomdivisjon: $\\frac{x^2 - 1}{x} = x - \\frac{1}{x}$
Skrå asymptote: $y = x$`
          },
          {
            label: 'b',
            task: 'Finn nullpunktene og vertikal asymptote.',
            solution: `Nullpunkter: $x^2 - 1 = 0 \\Rightarrow x = \\pm 1$
Vertikal asymptote: $x = 0$`
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn alle asymptoter til $f(x) = \\frac{2x^2 + x - 1}{x + 1}$.',
            solution: `Vertikal: $x = -1$
Polynomdivisjon: $\\frac{2x^2 + x - 1}{x + 1} = 2x - 1 + \\frac{0}{x+1} = 2x - 1$ for $x \\neq -1$
Egentlig forenkles dette: $2x^2 + x - 1 = (x+1)(2x-1)$
Skrå asymptote: $y = 2x - 1$ (men dette er hele funksjonen bortsett fra hullet)`
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $k$ slik at grafen til $f(x) = \\frac{kx + 3}{x - 2}$ går gjennom punktet $(1, -2)$.',
            solution: `$f(1) = \\frac{k + 3}{1 - 2} = \\frac{k + 3}{-1} = -2$
$k + 3 = 2$
$k = -1$`
          },
          {
            label: 'b',
            task: 'Med denne verdien av $k$, finn alle asymptoter.',
            solution: `$f(x) = \\frac{-x + 3}{x - 2}$
Vertikal asymptote: $x = 2$
Horisontal asymptote: $y = \\frac{-1}{1} = -1$`
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Løs ulikheten $\\frac{x + 1}{x - 2} > 0$.',
            solution: `Kritiske verdier: $x = -1$ (nullpunkt) og $x = 2$ (vertikal asymptote)
Fortegnsskjema:
- $x < -1$: $\\frac{(-)}{(-)} = (+) > 0$ ✓
- $-1 < x < 2$: $\\frac{(+)}{(-)} = (-) < 0$
- $x > 2$: $\\frac{(+)}{(+)} = (+) > 0$ ✓

Løsning: $x < -1$ eller $x > 2$`
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en rasjonal funksjon som har vertikale asymptoter i $x = 1$ og $x = -2$, horisontal asymptote $y = 3$, og nullpunkt i $x = 0$.',
            solution: `For å få vertikale asymptoter i $x = 1$ og $x = -2$: nevner må ha $(x-1)(x+2)$
For nullpunkt i $x = 0$: teller må ha faktor $x$
For horisontal asymptote $y = 3$ med grad 2 i nevner: teller må ha grad 2 med ledende koeff. 3

$f(x) = \\frac{3x^2}{(x-1)(x+2)} = \\frac{3x^2}{x^2 + x - 2}$`
          }
        ]
      }
    },
    {
      id: 's1-2-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-2-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Analyser og skisser grafen til $f(x) = \\frac{x^2 - 4}{x^2 - x - 2}$. Finn nullpunkter, asymptoter og eventuelle hull.',
            solution: `Faktorisering:
Teller: $x^2 - 4 = (x-2)(x+2)$
Nevner: $x^2 - x - 2 = (x-2)(x+1)$

$f(x) = \\frac{(x-2)(x+2)}{(x-2)(x+1)} = \\frac{x+2}{x+1}$ for $x \\neq 2$

Nullpunkt: $x = -2$
Hull: $(2, \\frac{4}{3})$
Vertikal asymptote: $x = -1$
Horisontal asymptote: $y = 1$`
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S1_2_3: TextbookChapter = {
  id: 's1-2-3',
  courseId: 's1',
  chapterNumber: '2.3',
  title: 'Eksponentialfunksjoner',
  description: 'Lær om eksponentialfunksjoner og deres anvendelser i vekst og modellering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke ulike funksjonstyper',
    'bruke funksjoner i modellering',
    'bruke digitale verktøy i utforskning og problemløsning'
  ],
  content: [
    {
      id: 's1-2-3-intro',
      type: 'text',
      content: `## Hva er en eksponentialfunksjon?

En **eksponentialfunksjon** er en funksjon der variabelen står i eksponenten:

$$f(x) = a \\cdot b^x$$

der $a \\neq 0$, $b > 0$ og $b \\neq 1$.

Eksponentialfunksjoner brukes til å modellere situasjoner med **konstant prosentvis vekst eller nedgang**, for eksempel befolkningsvekst, radioaktivt forfall og rentesregning.`
    },
    {
      id: 's1-2-3-def-eksponential',
      type: 'definition',
      title: 'Eksponentialfunksjon',
      content: `En **eksponentialfunksjon** er en funksjon på formen:
$$f(x) = a \\cdot b^x$$

- $a$ er **startverdien** (verdien når $x = 0$)
- $b$ er **vekstfaktoren**
  - $b > 1$: eksponentiell vekst
  - $0 < b < 1$: eksponentiell nedgang (avtagende)`
    },
    {
      id: 's1-2-3-vekstfaktor',
      type: 'text',
      content: `## Vekstfaktor og prosentvis endring

Vekstfaktoren $b$ er knyttet til prosentvis endring $p$ per tidsenhet:

$$b = 1 + \\frac{p}{100}$$

**Eksempler:**
- 5% økning: $b = 1 + 0{,}05 = 1{,}05$
- 3% nedgang: $b = 1 - 0{,}03 = 0{,}97$
- 12% økning: $b = 1 + 0{,}12 = 1{,}12$`
    },
    {
      id: 's1-2-3-example-1',
      type: 'example',
      title: 'Befolkningsvekst',
      problem: `En by har 50 000 innbyggere og vokser med 2% per år.
a) Sett opp en eksponentialfunksjon som beskriver befolkningen.
b) Hvor mange innbyggere vil byen ha etter 10 år?`,
      solution: `a) Startverdi $a = 50000$
Vekstfaktor $b = 1 + 0{,}02 = 1{,}02$

$$P(t) = 50000 \\cdot 1{,}02^t$$

der $t$ er antall år.

b) Etter 10 år:
$$P(10) = 50000 \\cdot 1{,}02^{10} = 50000 \\cdot 1{,}219 \\approx 60950$$

Byen vil ha omtrent **60 950 innbyggere**.`
    },
    {
      id: 's1-2-3-naturlig',
      type: 'text',
      content: `## Den naturlige eksponentialfunksjonen

Den **naturlige eksponentialfunksjonen** har grunntall $e \\approx 2{,}718$:

$$f(x) = e^x$$

Tallet $e$ er definert som:
$$e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\approx 2{,}71828$$

Denne funksjonen er spesielt viktig fordi den er sin egen deriverte: $(e^x)' = e^x$`
    },
    {
      id: 's1-2-3-example-2',
      type: 'example',
      title: 'Radioaktivt forfall',
      problem: `Et radioaktivt stoff har halveringstid på 5 år. Hvis vi starter med 100 gram, hvor mye er igjen etter 15 år?`,
      solution: `Ved halveringstid halveres mengden, så vekstfaktoren per halvering er $0{,}5$.

Etter $n$ halveringer: $m = 100 \\cdot 0{,}5^n$

Etter 15 år har det gått $\\frac{15}{5} = 3$ halveringstider:

$$m = 100 \\cdot 0{,}5^3 = 100 \\cdot 0{,}125 = 12{,}5 \\text{ gram}$$

**Alternativ metode:**
Per år er vekstfaktoren $b = 0{,}5^{1/5} = 0{,}5^{0{,}2} \\approx 0{,}871$

$$m(t) = 100 \\cdot 0{,}871^t$$
$$m(15) = 100 \\cdot 0{,}871^{15} \\approx 12{,}5 \\text{ gram}$$`
    },
    {
      id: 's1-2-3-grafisk',
      type: 'text',
      content: `## Grafiske egenskaper

Alle eksponentialfunksjoner $f(x) = a \\cdot b^x$ med $a > 0$ har:
- **Definisjonsmengde**: alle reelle tall
- **Verdimengde**: $(0, \\infty)$ (alltid positive verdier)
- **Skjæring med $y$-aksen**: $(0, a)$
- **Ingen nullpunkter** (grafen krysser aldri $x$-aksen)
- **Horisontal asymptote**: $y = 0$

For $b > 1$: Grafen er stigende
For $0 < b < 1$: Grafen er synkende`
    },
    {
      id: 's1-2-3-example-3',
      type: 'example',
      title: 'Skissere grafer',
      problem: `Skisser grafene til $f(x) = 2^x$ og $g(x) = \\left(\\frac{1}{2}\\right)^x$ i samme koordinatsystem.`,
      solution: `**For $f(x) = 2^x$:**
- $f(-2) = 2^{-2} = \\frac{1}{4}$
- $f(-1) = 2^{-1} = \\frac{1}{2}$
- $f(0) = 2^0 = 1$
- $f(1) = 2^1 = 2$
- $f(2) = 2^2 = 4$

Stigende graf med horisontal asymptote $y = 0$ mot venstre.

**For $g(x) = \\left(\\frac{1}{2}\\right)^x = 2^{-x}$:**
Dette er speilbildet av $f(x)$ om $y$-aksen.
- $g(-2) = 4$
- $g(-1) = 2$
- $g(0) = 1$
- $g(1) = \\frac{1}{2}$
- $g(2) = \\frac{1}{4}$

Synkende graf med horisontal asymptote $y = 0$ mot høyre.

Begge grafene går gjennom punktet $(0, 1)$.`
    },
    {
      id: 's1-2-3-kontinuerlig',
      type: 'text',
      content: `## Kontinuerlig vekst

For kontinuerlig vekst med veksthastighet $k$ bruker vi:
$$f(t) = a \\cdot e^{kt}$$

- $k > 0$: vekst
- $k < 0$: nedgang

Sammenhengen med diskret vekstfaktor $b$:
$$b = e^k \\quad \\text{eller} \\quad k = \\ln(b)$$`
    },
    {
      id: 's1-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn vekstfaktoren når noe øker med 8% per tidsenhet.',
            solution: '$b = 1 + 0{,}08 = 1{,}08$'
          },
          {
            label: 'b',
            task: 'Finn vekstfaktoren når noe minker med 15% per tidsenhet.',
            solution: '$b = 1 - 0{,}15 = 0{,}85$'
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $f(0)$ og $f(3)$ for $f(x) = 5 \\cdot 2^x$.',
            solution: '$f(0) = 5 \\cdot 2^0 = 5$, $f(3) = 5 \\cdot 2^3 = 5 \\cdot 8 = 40$'
          },
          {
            label: 'b',
            task: 'Finn $g(0)$ og $g(2)$ for $g(x) = 100 \\cdot 0{,}5^x$.',
            solution: '$g(0) = 100 \\cdot 0{,}5^0 = 100$, $g(2) = 100 \\cdot 0{,}25 = 25$'
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Et beløp på 10 000 kr settes i banken med 3% rente. Sett opp en funksjon for beløpet etter $t$ år.',
            solution: '$B(t) = 10000 \\cdot 1{,}03^t$'
          },
          {
            label: 'b',
            task: 'Hvor mye er beløpet etter 5 år?',
            solution: '$B(5) = 10000 \\cdot 1{,}03^5 \\approx 10000 \\cdot 1{,}159 = 11590$ kr'
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En bakteriekultur dobler seg hver time. Hvis det er 1000 bakterier nå, hvor mange er det etter 6 timer?',
            solution: '$N(t) = 1000 \\cdot 2^t$, $N(6) = 1000 \\cdot 64 = 64000$ bakterier'
          },
          {
            label: 'b',
            task: 'Etter hvor mange timer er det over 1 million bakterier?',
            solution: '$1000 \\cdot 2^t > 1000000 \\Rightarrow 2^t > 1000 \\Rightarrow t > \\log_2(1000) \\approx 9{,}97$. Etter 10 timer.'
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En bil mister 12% av verdien hvert år. Bilen kostet 400 000 kr ny. Sett opp en funksjon for verdien.',
            solution: '$V(t) = 400000 \\cdot 0{,}88^t$'
          },
          {
            label: 'b',
            task: 'Hva er bilen verdt etter 5 år?',
            solution: '$V(5) = 400000 \\cdot 0{,}88^5 \\approx 400000 \\cdot 0{,}528 \\approx 211000$ kr'
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Grafen til en eksponentialfunksjon $f(x) = a \\cdot b^x$ går gjennom $(0, 4)$ og $(2, 16)$. Finn $a$ og $b$.',
            solution: `Fra $(0, 4)$: $f(0) = a \\cdot b^0 = a = 4$
Fra $(2, 16)$: $4 \\cdot b^2 = 16 \\Rightarrow b^2 = 4 \\Rightarrow b = 2$
$f(x) = 4 \\cdot 2^x$`
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Et radioaktivt stoff har halveringstid 10 dager. Finn vekstfaktoren per dag.',
            solution: `Per 10 dager: $b^{10} = 0{,}5$
Per dag: $b = 0{,}5^{1/10} = 0{,}5^{0{,}1} \\approx 0{,}933$`
          },
          {
            label: 'b',
            task: 'Hvis vi starter med 200 mg, hvor mye er igjen etter 25 dager?',
            solution: '$m(25) = 200 \\cdot 0{,}933^{25} \\approx 200 \\cdot 0{,}177 \\approx 35{,}4$ mg'
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Løs likningen $3^x = 81$.',
            solution: '$3^x = 3^4 \\Rightarrow x = 4$'
          },
          {
            label: 'b',
            task: 'Løs likningen $2^{x+1} = 32$.',
            solution: '$2^{x+1} = 2^5 \\Rightarrow x + 1 = 5 \\Rightarrow x = 4$'
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En investering vokser fra 50 000 kr til 80 000 kr på 8 år. Finn årlig rente (konstant prosentvis vekst).',
            solution: `$50000 \\cdot b^8 = 80000$
$b^8 = 1{,}6$
$b = 1{,}6^{1/8} \\approx 1{,}0605$
Årlig rente: ca. 6,05%`
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor $2^x > 0$ for alle $x$.',
            solution: 'For positive grunntall er enhver potens positiv. $2^n > 0$ for heltall $n$, og dette utvides kontinuerlig til alle reelle $x$.'
          },
          {
            label: 'b',
            task: 'Har likningen $2^x = -1$ noen løsning?',
            solution: 'Nei, fordi $2^x > 0$ for alle $x$, så den kan aldri bli negativ.'
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at $e^{\\ln 2 \\cdot x} = 2^x$.',
            solution: `$e^{\\ln 2 \\cdot x} = (e^{\\ln 2})^x = 2^x$ (siden $e^{\\ln 2} = 2$)`
          },
          {
            label: 'b',
            task: 'Skriv om $5^x$ på formen $e^{kx}$.',
            solution: '$5^x = e^{\\ln 5 \\cdot x} = e^{1{,}609x}$'
          }
        ]
      }
    },
    {
      id: 's1-2-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-2-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En befolkning vokser eksponentielt. I 2020 var den 100 000, og i 2025 var den 115 000. Sett opp en modell og estimer befolkningen i 2030.',
            solution: `La $t$ være år etter 2020.
$100000 \\cdot b^5 = 115000$
$b^5 = 1{,}15$
$b = 1{,}15^{0{,}2} \\approx 1{,}0283$

$P(t) = 100000 \\cdot 1{,}0283^t$
$P(10) = 100000 \\cdot 1{,}0283^{10} \\approx 132250$

Befolkningen i 2030: ca. 132 250`
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S1_2_4: TextbookChapter = {
  id: 's1-2-4',
  courseId: 's1',
  chapterNumber: '2.4',
  title: 'Logaritmefunksjoner',
  description: 'Lær om logaritmefunksjoner som den inverse til eksponentialfunksjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke ulike funksjonstyper',
    'bruke funksjoner i modellering'
  ],
  content: [
    {
      id: 's1-2-4-intro',
      type: 'text',
      content: `## Hva er en logaritme?

**Logaritmen** er den inverse operasjonen til eksponentiering:

$$\\log_b(x) = y \\quad \\Leftrightarrow \\quad b^y = x$$

Med andre ord: Logaritmen $\\log_b(x)$ svarer på spørsmålet "Hvilken potens må vi opphøye $b$ i for å få $x$?"`
    },
    {
      id: 's1-2-4-def-logaritme',
      type: 'definition',
      title: 'Logaritme',
      content: `**Logaritmen med grunntall $b$** av et tall $x > 0$ er det tallet $y$ slik at $b^y = x$:
$$\\log_b(x) = y \\quad \\Leftrightarrow \\quad b^y = x$$

Der $b > 0$, $b \\neq 1$ og $x > 0$.

**Spesielle logaritmer:**
- $\\lg(x) = \\log_{10}(x)$: Tierlogaritmen (Briggs' logaritme)
- $\\ln(x) = \\log_e(x)$: Den naturlige logaritmen`
    },
    {
      id: 's1-2-4-example-1',
      type: 'example',
      title: 'Beregne logaritmer',
      problem: `Finn verdien av:
a) $\\log_2(8)$
b) $\\log_3(81)$
c) $\\lg(1000)$`,
      solution: `a) $\\log_2(8) = ?$ betyr $2^? = 8 = 2^3$, så $\\log_2(8) = 3$

b) $\\log_3(81) = ?$ betyr $3^? = 81 = 3^4$, så $\\log_3(81) = 4$

c) $\\lg(1000) = ?$ betyr $10^? = 1000 = 10^3$, så $\\lg(1000) = 3$`
    },
    {
      id: 's1-2-4-regneregler',
      type: 'theorem',
      title: 'Logaritmeregler',
      content: `For $a, b > 0$, $a \\neq 1$ og $x, y > 0$:

**Produktregel:** $\\log_a(x \\cdot y) = \\log_a(x) + \\log_a(y)$

**Kvotientregel:** $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$

**Potensregel:** $\\log_a(x^n) = n \\cdot \\log_a(x)$

**Spesielle verdier:**
- $\\log_a(1) = 0$ (fordi $a^0 = 1$)
- $\\log_a(a) = 1$ (fordi $a^1 = a$)`
    },
    {
      id: 's1-2-4-example-2',
      type: 'example',
      title: 'Bruke logaritmeregler',
      problem: `Forenkle uttrykkene:
a) $\\log_2(8) + \\log_2(4)$
b) $\\lg(100) - \\lg(10)$
c) $\\log_3(9^5)$`,
      solution: `a) $\\log_2(8) + \\log_2(4) = \\log_2(8 \\cdot 4) = \\log_2(32) = \\log_2(2^5) = 5$

b) $\\lg(100) - \\lg(10) = \\lg\\left(\\frac{100}{10}\\right) = \\lg(10) = 1$

c) $\\log_3(9^5) = 5 \\cdot \\log_3(9) = 5 \\cdot \\log_3(3^2) = 5 \\cdot 2 = 10$`
    },
    {
      id: 's1-2-4-grafisk',
      type: 'text',
      content: `## Logaritmefunksjonen grafisk

Logaritmefunksjonen $f(x) = \\log_b(x)$ er den inverse funksjonen til $g(x) = b^x$.

**Egenskaper:**
- **Definisjonsmengde:** $(0, \\infty)$ - bare positive tall
- **Verdimengde:** $\\mathbb{R}$ - alle reelle tall
- **Skjæring med $x$-aksen:** $(1, 0)$
- **Vertikal asymptote:** $x = 0$

For $b > 1$: Funksjonen er stigende
For $0 < b < 1$: Funksjonen er synkende`
    },
    {
      id: 's1-2-4-grunntallsskifte',
      type: 'theorem',
      title: 'Grunntallsskifte',
      content: `For å omskrive logaritmer fra ett grunntall til et annet:

$$\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)} = \\frac{\\ln(x)}{\\ln(a)} = \\frac{\\lg(x)}{\\lg(a)}$$

Dette er nyttig for å beregne logaritmer med kalkulator.`
    },
    {
      id: 's1-2-4-example-3',
      type: 'example',
      title: 'Løse eksponentiallikninger',
      problem: `Løs likningen $5^x = 200$.`,
      solution: `Vi tar logaritmen på begge sider:
$$\\lg(5^x) = \\lg(200)$$
$$x \\cdot \\lg(5) = \\lg(200)$$
$$x = \\frac{\\lg(200)}{\\lg(5)} = \\frac{2{,}301}{0{,}699} \\approx 3{,}29$$

**Sjekk:** $5^{3{,}29} \\approx 200$ ✓`
    },
    {
      id: 's1-2-4-anvendelse',
      type: 'text',
      content: `## Anvendelser av logaritmer

Logaritmer brukes til å:
- Løse eksponentiallikninger
- Finne tid for dobling/halvering
- Linearisere eksponentielle sammenhenger
- Skalaer som pH, desibel og Richter

**Eksempel - Doblingstid:**
For $N(t) = N_0 \\cdot b^t$ er doblingstiden:
$$T_d = \\frac{\\ln(2)}{\\ln(b)} = \\frac{\\lg(2)}{\\lg(b)}$$`
    },
    {
      id: 's1-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $\\log_2(16)$.',
            solution: '$\\log_2(16) = \\log_2(2^4) = 4$'
          },
          {
            label: 'b',
            task: 'Finn $\\log_5(125)$.',
            solution: '$\\log_5(125) = \\log_5(5^3) = 3$'
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $\\lg(10000)$.',
            solution: '$\\lg(10000) = \\lg(10^4) = 4$'
          },
          {
            label: 'b',
            task: 'Finn $\\lg(0{,}01)$.',
            solution: '$\\lg(0{,}01) = \\lg(10^{-2}) = -2$'
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv om $\\log_4(64)$ som en potens og finn verdien.',
            solution: '$\\log_4(64) = \\log_4(4^3) = 3$'
          },
          {
            label: 'b',
            task: 'Finn $\\log_9(3)$.',
            solution: '$\\log_9(3) = \\log_9(9^{1/2}) = \\frac{1}{2}$'
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Forenkle $\\lg(50) + \\lg(20)$.',
            solution: '$\\lg(50) + \\lg(20) = \\lg(50 \\cdot 20) = \\lg(1000) = 3$'
          },
          {
            label: 'b',
            task: 'Forenkle $\\ln(e^3) - \\ln(e)$.',
            solution: '$\\ln(e^3) - \\ln(e) = 3 - 1 = 2$ eller $\\ln\\left(\\frac{e^3}{e}\\right) = \\ln(e^2) = 2$'
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Forenkle $2\\lg(5) + \\lg(4)$.',
            solution: '$2\\lg(5) + \\lg(4) = \\lg(5^2) + \\lg(4) = \\lg(25 \\cdot 4) = \\lg(100) = 2$'
          },
          {
            label: 'b',
            task: 'Forenkle $\\log_2(8) + 3\\log_2(2) - \\log_2(4)$.',
            solution: '$3 + 3 \\cdot 1 - 2 = 3 + 3 - 2 = 4$'
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Løs likningen $3^x = 20$.',
            solution: `$x = \\log_3(20) = \\frac{\\lg(20)}{\\lg(3)} = \\frac{1{,}301}{0{,}477} \\approx 2{,}73$`
          },
          {
            label: 'b',
            task: 'Løs likningen $e^x = 10$.',
            solution: '$x = \\ln(10) \\approx 2{,}30$'
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Løs likningen $2^{2x} = 64$.',
            solution: '$2^{2x} = 2^6 \\Rightarrow 2x = 6 \\Rightarrow x = 3$'
          },
          {
            label: 'b',
            task: 'Løs likningen $5 \\cdot 3^x = 135$.',
            solution: '$3^x = 27 = 3^3 \\Rightarrow x = 3$'
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En investering på 50 000 kr vokser med 4% per år. Etter hvor mange år er investeringen verdt 100 000 kr?',
            solution: `$50000 \\cdot 1{,}04^t = 100000$
$1{,}04^t = 2$
$t = \\frac{\\lg(2)}{\\lg(1{,}04)} = \\frac{0{,}301}{0{,}017} \\approx 17{,}7$ år`
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Løs likningen $\\lg(x) + \\lg(x-3) = 1$.',
            solution: `$\\lg(x(x-3)) = 1$
$x(x-3) = 10$
$x^2 - 3x - 10 = 0$
$(x-5)(x+2) = 0$
$x = 5$ (forkast $x = -2$ siden argumentet må være positivt)
Sjekk: $\\lg(5) + \\lg(2) = \\lg(10) = 1$ ✓`
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at $\\log_a(b) \\cdot \\log_b(a) = 1$.',
            solution: `La $\\log_a(b) = x$ og $\\log_b(a) = y$.
Da er $a^x = b$ og $b^y = a$.
$(a^x)^y = b^y = a$
$a^{xy} = a^1$
$xy = 1$
Altså: $\\log_a(b) \\cdot \\log_b(a) = 1$`
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Løs likningen $4^x - 6 \\cdot 2^x + 8 = 0$.',
            solution: `Sett $u = 2^x$. Da er $4^x = (2^2)^x = (2^x)^2 = u^2$.
$u^2 - 6u + 8 = 0$
$(u-2)(u-4) = 0$
$u = 2$ eller $u = 4$
$2^x = 2 \\Rightarrow x = 1$
$2^x = 4 \\Rightarrow x = 2$
Løsninger: $x = 1$ og $x = 2$`
          }
        ]
      }
    },
    {
      id: 's1-2-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-2-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Decibel-skalaen for lydstyrke er definert ved $L = 10 \\cdot \\lg\\left(\\frac{I}{I_0}\\right)$ der $I$ er lydintensitet. Hvor mange ganger sterkere er 80 dB sammenlignet med 50 dB?',
            solution: `$80 = 10 \\cdot \\lg\\left(\\frac{I_1}{I_0}\\right) \\Rightarrow \\lg\\left(\\frac{I_1}{I_0}\\right) = 8$
$50 = 10 \\cdot \\lg\\left(\\frac{I_2}{I_0}\\right) \\Rightarrow \\lg\\left(\\frac{I_2}{I_0}\\right) = 5$

$\\lg\\left(\\frac{I_1}{I_2}\\right) = 8 - 5 = 3$
$\\frac{I_1}{I_2} = 10^3 = 1000$

80 dB er 1000 ganger sterkere enn 50 dB.`
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S1_2_5: TextbookChapter = {
  id: 's1-2-5',
  courseId: 's1',
  chapterNumber: '2.5',
  title: 'Omvendte funksjoner',
  description: 'Lær om inverse funksjoner og sammenhengen mellom en funksjon og dens inverse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og tolke ulike funksjonstyper',
    'bruke funksjoner i modellering'
  ],
  content: [
    {
      id: 's1-2-5-intro',
      type: 'text',
      content: `## Hva er en invers funksjon?

En **invers funksjon** (omvendt funksjon) "reverserer" virkningen av en funksjon. Hvis $f$ tar $x$ til $y$, tar den inverse funksjonen $f^{-1}$ $y$ tilbake til $x$.

$$f(x) = y \\quad \\Leftrightarrow \\quad f^{-1}(y) = x$$

**Merk:** Notasjonen $f^{-1}$ betyr "den inverse funksjonen til $f$", **ikke** $\\frac{1}{f}$.`
    },
    {
      id: 's1-2-5-def-invers',
      type: 'definition',
      title: 'Invers funksjon',
      content: `To funksjoner $f$ og $g$ er **inverse av hverandre** hvis:
$$f(g(x)) = x \\quad \\text{og} \\quad g(f(x)) = x$$

for alle $x$ i passende definisjonsmengder.

Vi skriver $g = f^{-1}$.

**En funksjon har en invers** hvis og bare hvis den er **en-til-en** (injektiv), det vil si at forskjellige $x$-verdier alltid gir forskjellige $y$-verdier.`
    },
    {
      id: 's1-2-5-finn-invers',
      type: 'text',
      content: `## Hvordan finne den inverse funksjonen

For å finne $f^{-1}$ algebraisk:
1. Skriv $y = f(x)$
2. Løs likningen for $x$ (få $x$ alene på venstre side)
3. Bytt om $x$ og $y$

Det resulterende uttrykket er $f^{-1}(x)$.`
    },
    {
      id: 's1-2-5-example-1',
      type: 'example',
      title: 'Finne invers funksjon',
      problem: `Finn den inverse funksjonen til $f(x) = 3x - 5$.`,
      solution: `**Steg 1:** $y = 3x - 5$

**Steg 2:** Løs for $x$:
$$y + 5 = 3x$$
$$x = \\frac{y + 5}{3}$$

**Steg 3:** Bytt $x$ og $y$:
$$f^{-1}(x) = \\frac{x + 5}{3}$$

**Sjekk:**
$$f(f^{-1}(x)) = 3 \\cdot \\frac{x+5}{3} - 5 = x + 5 - 5 = x \\checkmark$$
$$f^{-1}(f(x)) = \\frac{(3x-5)+5}{3} = \\frac{3x}{3} = x \\checkmark$$`
    },
    {
      id: 's1-2-5-grafisk',
      type: 'text',
      content: `## Grafisk sammenheng

Grafen til $f^{-1}$ er **speilbildet** av grafen til $f$ om linjen $y = x$.

Hvis punktet $(a, b)$ ligger på grafen til $f$, så ligger punktet $(b, a)$ på grafen til $f^{-1}$.

**Domenene og verdimengdene byttes:**
- Definisjonsmengden til $f^{-1}$ = Verdimengden til $f$
- Verdimengden til $f^{-1}$ = Definisjonsmengden til $f$`
    },
    {
      id: 's1-2-5-example-2',
      type: 'example',
      title: 'Eksponential og logaritme',
      problem: `Vis at $f(x) = e^x$ og $g(x) = \\ln(x)$ er inverse av hverandre.`,
      solution: `**Sjekk 1:** $f(g(x)) = e^{\\ln(x)} = x$ for $x > 0$ ✓

**Sjekk 2:** $g(f(x)) = \\ln(e^x) = x$ for alle $x$ ✓

Altså er $f$ og $g$ inverse av hverandre.

**Grafisk:** Grafene til $y = e^x$ og $y = \\ln(x)$ er speilbilder om linjen $y = x$.`
    },
    {
      id: 's1-2-5-begrensninger',
      type: 'text',
      content: `## Når eksisterer den inverse?

Ikke alle funksjoner har en invers. En funksjon må være **en-til-en** (injektiv) for å ha en invers.

**Eksempel:** $f(x) = x^2$ har ikke en invers fordi $f(2) = f(-2) = 4$.

**Løsning:** Vi kan begrense definisjonsmengden. For $f(x) = x^2$ med $x \\geq 0$ er den inverse $f^{-1}(x) = \\sqrt{x}$.`
    },
    {
      id: 's1-2-5-example-3',
      type: 'example',
      title: 'Begrense definisjonsmengden',
      problem: `Finn den inverse funksjonen til $f(x) = x^2 + 1$ for $x \\geq 0$.`,
      solution: `**Steg 1:** $y = x^2 + 1$

**Steg 2:** Løs for $x$:
$$y - 1 = x^2$$
$$x = \\sqrt{y - 1}$$ (velger positiv rot siden $x \\geq 0$)

**Steg 3:** Bytt $x$ og $y$:
$$f^{-1}(x) = \\sqrt{x - 1}$$

**Definisjonsmengde for $f^{-1}$:** $x \\geq 1$ (verdimengden til $f$)`
    },
    {
      id: 's1-2-5-tip',
      type: 'tip',
      title: 'Horisontal linjetest',
      content: `En funksjon har en invers hvis og bare hvis hver horisontal linje skjærer grafen **høyst én gang**. Dette kalles den horisontale linjetesten.`
    },
    {
      id: 's1-2-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den inverse funksjonen til $f(x) = x + 7$.',
            solution: '$y = x + 7 \\Rightarrow x = y - 7$. $f^{-1}(x) = x - 7$'
          },
          {
            label: 'b',
            task: 'Finn den inverse funksjonen til $g(x) = 2x$.',
            solution: '$y = 2x \\Rightarrow x = \\frac{y}{2}$. $g^{-1}(x) = \\frac{x}{2}$'
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den inverse funksjonen til $f(x) = 4x - 3$.',
            solution: '$y = 4x - 3 \\Rightarrow x = \\frac{y+3}{4}$. $f^{-1}(x) = \\frac{x+3}{4}$'
          },
          {
            label: 'b',
            task: 'Sjekk at $f(f^{-1}(x)) = x$.',
            solution: '$f\\left(\\frac{x+3}{4}\\right) = 4 \\cdot \\frac{x+3}{4} - 3 = x + 3 - 3 = x$ ✓'
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $f^{-1}(5)$ hvis $f(3) = 5$.',
            solution: 'Siden $f(3) = 5$, er $f^{-1}(5) = 3$.'
          },
          {
            label: 'b',
            task: 'Hvis $(2, 7)$ ligger på grafen til $f$, hvilket punkt ligger på grafen til $f^{-1}$?',
            solution: '$(7, 2)$ ligger på grafen til $f^{-1}$.'
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den inverse funksjonen til $f(x) = \\frac{x-1}{2}$.',
            solution: '$y = \\frac{x-1}{2} \\Rightarrow 2y = x - 1 \\Rightarrow x = 2y + 1$. $f^{-1}(x) = 2x + 1$'
          },
          {
            label: 'b',
            task: 'Verifiser at $f^{-1}(f(x)) = x$.',
            solution: '$f^{-1}\\left(\\frac{x-1}{2}\\right) = 2 \\cdot \\frac{x-1}{2} + 1 = x - 1 + 1 = x$ ✓'
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den inverse funksjonen til $f(x) = \\sqrt{x + 4}$ for $x \\geq -4$.',
            solution: '$y = \\sqrt{x+4} \\Rightarrow y^2 = x + 4 \\Rightarrow x = y^2 - 4$. $f^{-1}(x) = x^2 - 4$ for $x \\geq 0$'
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den inverse funksjonen til $f(x) = 3^x$.',
            solution: '$y = 3^x \\Rightarrow x = \\log_3(y)$. $f^{-1}(x) = \\log_3(x)$'
          },
          {
            label: 'b',
            task: 'Hva er definisjonsmengden til $f^{-1}$?',
            solution: 'Definisjonsmengden til $f^{-1}$ er $(0, \\infty)$ (verdimengden til $f$).'
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den inverse funksjonen til $f(x) = \\frac{1}{x}$ for $x \\neq 0$.',
            solution: '$y = \\frac{1}{x} \\Rightarrow x = \\frac{1}{y}$. $f^{-1}(x) = \\frac{1}{x}$. Funksjonen er sin egen inverse!'
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den inverse funksjonen til $f(x) = \\frac{x+1}{x-1}$ for $x \\neq 1$.',
            solution: `$y = \\frac{x+1}{x-1}$
$y(x-1) = x + 1$
$yx - y = x + 1$
$yx - x = y + 1$
$x(y-1) = y + 1$
$x = \\frac{y+1}{y-1}$
$f^{-1}(x) = \\frac{x+1}{x-1}$ for $x \\neq 1$
Merk: $f$ er sin egen inverse!`
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den inverse funksjonen til $f(x) = (x-2)^3 + 1$.',
            solution: `$y = (x-2)^3 + 1$
$y - 1 = (x-2)^3$
$\\sqrt[3]{y-1} = x - 2$
$x = \\sqrt[3]{y-1} + 2$
$f^{-1}(x) = \\sqrt[3]{x-1} + 2$`
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Avgjør om $f(x) = x^3 - x$ har en invers funksjon.',
            solution: `Nei, $f$ har ikke en invers fordi den ikke er en-til-en.
For eksempel: $f(-1) = -1 + 1 = 0$ og $f(0) = 0$ og $f(1) = 1 - 1 = 0$.
Tre forskjellige $x$-verdier gir samme $y$-verdi.`
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den inverse funksjonen til $f(x) = 2^{x-3} + 1$.',
            solution: `$y = 2^{x-3} + 1$
$y - 1 = 2^{x-3}$
$\\log_2(y-1) = x - 3$
$x = \\log_2(y-1) + 3$
$f^{-1}(x) = \\log_2(x-1) + 3$ for $x > 1$`
          }
        ]
      }
    },
    {
      id: 's1-2-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-2-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at hvis $f$ er en-til-en og har invers $f^{-1}$, så er også $f^{-1}$ en-til-en med invers $f$.',
            solution: `Anta at $f^{-1}(a) = f^{-1}(b)$.
Sett $f^{-1}(a) = c$. Da er $f(c) = a$ og $f(c) = b$ (siden $f^{-1}(b) = c$ også).
Altså $a = b$, som viser at $f^{-1}$ er en-til-en.

For å vise at $(f^{-1})^{-1} = f$:
$(f^{-1})^{-1}(x) = y$ betyr $f^{-1}(y) = x$, som betyr $f(x) = y$.
Altså $(f^{-1})^{-1}(x) = f(x)$.`
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S1_3_1: TextbookChapter = {
  id: 's1-3-1',
  courseId: 's1',
  chapterNumber: '3.1',
  title: 'Den deriverte',
  description: 'Lær om den deriverte som grenseverdi og momentan vekstfart.',
  estimatedMinutes: 55,
  competenceGoals: [
    'derivere polynomfunksjoner, potens-, eksponential- og logaritmefunksjoner',
    'bruke den deriverte til å analysere funksjoner'
  ],
  content: [
    {
      id: 's1-3-1-intro',
      type: 'text',
      content: `## Hva er den deriverte?

Den **deriverte** til en funksjon beskriver hvor raskt funksjonen endrer seg. Den deriverte er:
- Stigningstallet til tangenten til grafen i et punkt
- Den momentane veksthastigheten

Vi skriver den deriverte til $f$ som $f'(x)$ eller $\\frac{df}{dx}$.`
    },
    {
      id: 's1-3-1-def-derivert',
      type: 'definition',
      title: 'Den deriverte',
      content: `Den **deriverte** av $f$ i punktet $x$ er definert som:
$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

hvis denne grenseverdien eksisterer.

Brøken $\\frac{f(x+h) - f(x)}{h}$ kalles **differansekvotienten** og representerer stigningstallet til en sekant gjennom to punkter på grafen.`
    },
    {
      id: 's1-3-1-geometri',
      type: 'text',
      content: `## Geometrisk tolkning

Når $h \\to 0$, nærmer sekanten seg **tangenten** til kurven.

Den deriverte $f'(a)$ er altså stigningstallet til tangenten til grafen $y = f(x)$ i punktet $(a, f(a))$.

**Tangentens likning** i punktet $(a, f(a))$:
$$y - f(a) = f'(a)(x - a)$$`
    },
    {
      id: 's1-3-1-example-1',
      type: 'example',
      title: 'Derivere fra definisjonen',
      problem: `Bruk definisjonen til å derivere $f(x) = x^2$.`,
      solution: `$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$= \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h}$$

$$= \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h}$$

$$= \\lim_{h \\to 0} \\frac{2xh + h^2}{h}$$

$$= \\lim_{h \\to 0} (2x + h)$$

$$= 2x$$

Altså er $f'(x) = 2x$.`
    },
    {
      id: 's1-3-1-vekstfart',
      type: 'text',
      content: `## Veksthastighet

Den deriverte gir oss den **momentane veksthastigheten**:

- **Gjennomsnittlig veksthastighet** fra $x$ til $x + h$: $\\frac{f(x+h) - f(x)}{h}$
- **Momentan veksthastighet** i $x$: $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$

**Anvendelser:**
- Hvis $s(t)$ er posisjon ved tid $t$, er $v(t) = s'(t)$ hastigheten
- Hvis $N(t)$ er antall, er $N'(t)$ veksthastigheten`
    },
    {
      id: 's1-3-1-example-2',
      type: 'example',
      title: 'Hastighet',
      problem: `En ball kastes rett opp. Høyden er gitt ved $h(t) = 20t - 5t^2$ meter etter $t$ sekunder. Finn hastigheten etter 2 sekunder.`,
      solution: `Vi deriverer for å finne hastigheten $v(t) = h'(t)$:

$$h'(t) = 20 - 10t$$

Hastigheten etter 2 sekunder:
$$v(2) = h'(2) = 20 - 10 \\cdot 2 = 0 \\text{ m/s}$$

Ballen er på toppen (hastigheten er null) etter 2 sekunder.`
    },
    {
      id: 's1-3-1-note',
      type: 'note',
      title: 'Notasjon',
      content: `Flere notasjoner for den deriverte:
- **Lagranges notasjon:** $f'(x)$, $y'$
- **Leibniz' notasjon:** $\\frac{df}{dx}$, $\\frac{dy}{dx}$
- **Andre deriverte:** $f''(x) = \\frac{d^2f}{dx^2}$ (deriverte av den deriverte)`
    },
    {
      id: 's1-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Bruk definisjonen til å derivere $f(x) = 3x$.',
            solution: `$f'(x) = \\lim_{h \\to 0} \\frac{3(x+h) - 3x}{h} = \\lim_{h \\to 0} \\frac{3h}{h} = 3$`
          },
          {
            label: 'b',
            task: 'Bruk definisjonen til å derivere $g(x) = 5$.',
            solution: `$g'(x) = \\lim_{h \\to 0} \\frac{5 - 5}{h} = \\lim_{h \\to 0} 0 = 0$`
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn stigningstallet til tangenten til $f(x) = x^2$ i punktet der $x = 3$.',
            solution: '$f\'(x) = 2x$, så $f\'(3) = 6$. Stigningstallet er 6.'
          },
          {
            label: 'b',
            task: 'Skriv opp tangentens likning.',
            solution: '$f(3) = 9$. Tangent: $y - 9 = 6(x - 3) \\Rightarrow y = 6x - 9$'
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $f\'(2)$ for $f(x) = x^2 + 4x$ ved å bruke $f\'(x) = 2x + 4$.',
            solution: '$f\'(2) = 2 \\cdot 2 + 4 = 8$'
          },
          {
            label: 'b',
            task: 'Skriv opp tangentens likning til $f$ i $x = 2$.',
            solution: '$f(2) = 4 + 8 = 12$. Tangent: $y - 12 = 8(x - 2) \\Rightarrow y = 8x - 4$'
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Bruk definisjonen til å derivere $f(x) = x^3$.',
            solution: `$f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^3 - x^3}{h}$
$= \\lim_{h \\to 0} \\frac{x^3 + 3x^2h + 3xh^2 + h^3 - x^3}{h}$
$= \\lim_{h \\to 0} (3x^2 + 3xh + h^2) = 3x^2$`
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn gjennomsnittlig veksthastighet for $f(x) = x^2$ fra $x = 1$ til $x = 3$.',
            solution: `$\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = 4$`
          },
          {
            label: 'b',
            task: 'Finn momentan veksthastighet i $x = 2$.',
            solution: '$f\'(2) = 2 \\cdot 2 = 4$'
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Høyden til en ball er $h(t) = 30t - 5t^2$ meter. Finn hastigheten når $t = 1$.',
            solution: '$h\'(t) = 30 - 10t$. $h\'(1) = 20$ m/s'
          },
          {
            label: 'b',
            task: 'Når er ballen på toppen?',
            solution: 'Toppen: $h\'(t) = 0 \\Rightarrow 30 - 10t = 0 \\Rightarrow t = 3$ s'
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'For hvilken $x$-verdi er tangenten til $f(x) = x^2 - 4x$ horisontal?',
            solution: '$f\'(x) = 2x - 4 = 0 \\Rightarrow x = 2$'
          },
          {
            label: 'b',
            task: 'Hva er funksjonsverdi i dette punktet?',
            solution: '$f(2) = 4 - 8 = -4$'
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Bruk definisjonen til å derivere $f(x) = \\frac{1}{x}$.',
            solution: `$f'(x) = \\lim_{h \\to 0} \\frac{\\frac{1}{x+h} - \\frac{1}{x}}{h}$
$= \\lim_{h \\to 0} \\frac{x - (x+h)}{h \\cdot x(x+h)}$
$= \\lim_{h \\to 0} \\frac{-h}{h \\cdot x(x+h)}$
$= \\lim_{h \\to 0} \\frac{-1}{x(x+h)} = -\\frac{1}{x^2}$`
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $a$ slik at tangenten til $f(x) = x^2$ i $x = a$ går gjennom origo.',
            solution: `Tangent i $x = a$: $y - a^2 = 2a(x - a)$
Går gjennom $(0, 0)$: $-a^2 = 2a(0 - a) = -2a^2$
$-a^2 = -2a^2 \\Rightarrow a^2 = 0 \\Rightarrow a = 0$
(Merk: Tangenten i $x = 0$ er $y = 0$, som går gjennom origo.)`
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn ligningen til tangenten til $f(x) = x^2 - 2x + 3$ som har stigningstall 4.',
            solution: `$f'(x) = 2x - 2 = 4 \\Rightarrow x = 3$
$f(3) = 9 - 6 + 3 = 6$
Tangent: $y - 6 = 4(x - 3) \\Rightarrow y = 4x - 6$`
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Posisjon er $s(t) = t^3 - 6t^2 + 9t$ m. Finn når partikkelen er i ro.',
            solution: `$v(t) = s'(t) = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t-1)(t-3)$
I ro når $v(t) = 0$: $t = 1$ s og $t = 3$ s`
          },
          {
            label: 'b',
            task: 'Finn akselerasjonen når $t = 2$.',
            solution: '$a(t) = v\'(t) = 6t - 12$. $a(2) = 12 - 12 = 0$ m/s²'
          }
        ]
      }
    },
    {
      id: 's1-3-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-3-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at tangenene til $f(x) = x^2$ i punktene $(-1, 1)$ og $(2, 4)$ skjærer hverandre på $y$-aksen.',
            solution: `Tangent i $(-1, 1)$: $f'(-1) = -2$, $y - 1 = -2(x + 1) \\Rightarrow y = -2x - 1$
Tangent i $(2, 4)$: $f'(2) = 4$, $y - 4 = 4(x - 2) \\Rightarrow y = 4x - 4$

Skjæring: $-2x - 1 = 4x - 4 \\Rightarrow 3 = 6x \\Rightarrow x = 0{,}5$
Hmm, dette er ikke på $y$-aksen. La oss sjekke oppgaven...

Skjæring med $y$-aksen ($x = 0$):
Tangent 1: $y = -1$
Tangent 2: $y = -4$

Tangentene skjærer $y$-aksen i forskjellige punkter. Påstanden stemmer ikke.`
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S1_3_2: TextbookChapter = {
  id: 's1-3-2',
  courseId: 's1',
  chapterNumber: '3.2',
  title: 'Derivasjonsregler',
  description: 'Lær de grunnleggende reglene for derivasjon av funksjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'derivere polynomfunksjoner, potens-, eksponential- og logaritmefunksjoner',
    'bruke den deriverte til å analysere funksjoner'
  ],
  content: [
    {
      id: 's1-3-2-intro',
      type: 'text',
      content: `## Grunnleggende derivasjonsregler

I stedet for å bruke definisjonen hver gang, bruker vi derivasjonsregler som gjør arbeidet mye enklere.`
    },
    {
      id: 's1-3-2-theorem-grunn',
      type: 'theorem',
      title: 'Grunnleggende derivasjonsregler',
      content: `**Konstant:** $(c)' = 0$

**Potensregelen:** $(x^n)' = n \\cdot x^{n-1}$

**Konstantmultiplikasjon:** $(c \\cdot f(x))' = c \\cdot f'(x)$

**Summeregel:** $(f(x) + g(x))' = f'(x) + g'(x)$

**Differanseregel:** $(f(x) - g(x))' = f'(x) - g'(x)$`
    },
    {
      id: 's1-3-2-example-1',
      type: 'example',
      title: 'Derivere polynom',
      problem: `Deriver $f(x) = 3x^4 - 5x^2 + 2x - 7$.`,
      solution: `Vi bruker potensregelen på hvert ledd:

$$f'(x) = 3 \\cdot 4x^3 - 5 \\cdot 2x + 2 - 0$$
$$= 12x^3 - 10x + 2$$`
    },
    {
      id: 's1-3-2-theorem-prod',
      type: 'theorem',
      title: 'Produktregelen',
      content: `Hvis $f(x) = u(x) \\cdot v(x)$, så er:
$$f'(x) = u'(x) \\cdot v(x) + u(x) \\cdot v'(x)$$

Huskeregel: "derivert av første ganger andre pluss første ganger derivert av andre"`
    },
    {
      id: 's1-3-2-example-2',
      type: 'example',
      title: 'Produktregelen',
      problem: `Deriver $f(x) = (x^2 + 1)(x^3 - 2x)$.`,
      solution: `La $u = x^2 + 1$ og $v = x^3 - 2x$.
$u' = 2x$ og $v' = 3x^2 - 2$.

$$f'(x) = u'v + uv'$$
$$= 2x(x^3 - 2x) + (x^2 + 1)(3x^2 - 2)$$
$$= 2x^4 - 4x^2 + 3x^4 - 2x^2 + 3x^2 - 2$$
$$= 5x^4 - 3x^2 - 2$$`
    },
    {
      id: 's1-3-2-theorem-kvot',
      type: 'theorem',
      title: 'Kvotientregelen',
      content: `Hvis $f(x) = \\frac{u(x)}{v(x)}$, så er:
$$f'(x) = \\frac{u'(x) \\cdot v(x) - u(x) \\cdot v'(x)}{[v(x)]^2}$$

Huskeregel: "derivert av teller ganger nevner minus teller ganger derivert av nevner, delt på nevner i andre"`
    },
    {
      id: 's1-3-2-example-3',
      type: 'example',
      title: 'Kvotientregelen',
      problem: `Deriver $f(x) = \\frac{x^2 - 1}{x + 2}$.`,
      solution: `La $u = x^2 - 1$ og $v = x + 2$.
$u' = 2x$ og $v' = 1$.

$$f'(x) = \\frac{u'v - uv'}{v^2}$$
$$= \\frac{2x(x + 2) - (x^2 - 1) \\cdot 1}{(x + 2)^2}$$
$$= \\frac{2x^2 + 4x - x^2 + 1}{(x + 2)^2}$$
$$= \\frac{x^2 + 4x + 1}{(x + 2)^2}$$`
    },
    {
      id: 's1-3-2-theorem-eksp',
      type: 'theorem',
      title: 'Eksponential- og logaritmefunksjoner',
      content: `**Naturlig eksponential:** $(e^x)' = e^x$

**Generell eksponential:** $(a^x)' = a^x \\cdot \\ln(a)$

**Naturlig logaritme:** $(\\ln x)' = \\frac{1}{x}$

**Generell logaritme:** $(\\log_a x)' = \\frac{1}{x \\cdot \\ln(a)}$`
    },
    {
      id: 's1-3-2-example-4',
      type: 'example',
      title: 'Eksponential- og logaritmefunksjoner',
      problem: `Deriver:
a) $f(x) = 3e^x + 2\\ln x$
b) $g(x) = 5^x$`,
      solution: `a) $f'(x) = 3e^x + \\frac{2}{x}$

b) $g'(x) = 5^x \\cdot \\ln(5) \\approx 1{,}61 \\cdot 5^x$`
    },
    {
      id: 's1-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = x^5$.',
            solution: '$f\'(x) = 5x^4$'
          },
          {
            label: 'b',
            task: 'Deriver $g(x) = x^{-2}$.',
            solution: '$g\'(x) = -2x^{-3} = -\\frac{2}{x^3}$'
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = 4x^3 - 2x + 5$.',
            solution: '$f\'(x) = 12x^2 - 2$'
          },
          {
            label: 'b',
            task: 'Deriver $g(x) = \\frac{1}{2}x^6 - 3x^2$.',
            solution: '$g\'(x) = 3x^5 - 6x$'
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = \\sqrt{x} = x^{1/2}$.',
            solution: '$f\'(x) = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$'
          },
          {
            label: 'b',
            task: 'Deriver $g(x) = \\frac{1}{\\sqrt{x}} = x^{-1/2}$.',
            solution: '$g\'(x) = -\\frac{1}{2}x^{-3/2} = -\\frac{1}{2x\\sqrt{x}}$'
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = 2e^x - 5\\ln x$.',
            solution: '$f\'(x) = 2e^x - \\frac{5}{x}$'
          },
          {
            label: 'b',
            task: 'Deriver $g(x) = 3 \\cdot 2^x$.',
            solution: '$g\'(x) = 3 \\cdot 2^x \\cdot \\ln 2 \\approx 2{,}08 \\cdot 2^x$'
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Bruk produktregelen til å derivere $f(x) = x^2 \\cdot e^x$.',
            solution: '$f\'(x) = 2x \\cdot e^x + x^2 \\cdot e^x = e^x(2x + x^2) = xe^x(2 + x)$'
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Bruk produktregelen til å derivere $f(x) = (x + 1)(x^2 - 3)$.',
            solution: `$f'(x) = 1 \\cdot (x^2 - 3) + (x + 1) \\cdot 2x$
$= x^2 - 3 + 2x^2 + 2x = 3x^2 + 2x - 3$`
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Bruk kvotientregelen til å derivere $f(x) = \\frac{x}{x + 1}$.',
            solution: `$f'(x) = \\frac{1 \\cdot (x+1) - x \\cdot 1}{(x+1)^2} = \\frac{1}{(x+1)^2}$`
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Bruk kvotientregelen til å derivere $f(x) = \\frac{e^x}{x}$.',
            solution: `$f'(x) = \\frac{e^x \\cdot x - e^x \\cdot 1}{x^2} = \\frac{e^x(x - 1)}{x^2}$`
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = x \\cdot \\ln x$.',
            solution: '$f\'(x) = 1 \\cdot \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$'
          },
          {
            label: 'b',
            task: 'Finn $f\'(e)$.',
            solution: '$f\'(e) = \\ln e + 1 = 1 + 1 = 2$'
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = \\frac{x^2 + 2x}{x - 1}$.',
            solution: `$f'(x) = \\frac{(2x + 2)(x - 1) - (x^2 + 2x) \\cdot 1}{(x-1)^2}$
$= \\frac{2x^2 - 2x + 2x - 2 - x^2 - 2x}{(x-1)^2}$
$= \\frac{x^2 - 2x - 2}{(x-1)^2}$`
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at $(x^n)\'=nx^{n-1}$ ved å bruke produktregelen for $f(x) = x \\cdot x^{n-1}$.',
            solution: `$f(x) = x \\cdot x^{n-1}$
$f'(x) = 1 \\cdot x^{n-1} + x \\cdot (n-1)x^{n-2}$
$= x^{n-1} + (n-1)x^{n-1}$
$= nx^{n-1}$ ✓`
          }
        ]
      }
    },
    {
      id: 's1-3-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-3-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $f\'(x)$ og $f\'\'(x)$ for $f(x) = x^3e^x$.',
            solution: `$f'(x) = 3x^2e^x + x^3e^x = e^x(3x^2 + x^3) = x^2e^x(3 + x)$

$f''(x) = (6x + 3x^2)e^x + (3x^2 + x^3)e^x$
$= e^x(6x + 3x^2 + 3x^2 + x^3)$
$= e^x(x^3 + 6x^2 + 6x)$
$= xe^x(x^2 + 6x + 6)$`
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S1_3_3: TextbookChapter = {
  id: 's1-3-3',
  courseId: 's1',
  chapterNumber: '3.3',
  title: 'Kjerneregelen',
  description: 'Lær å derivere sammensatte funksjoner ved hjelp av kjerneregelen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'derivere polynomfunksjoner, potens-, eksponential- og logaritmefunksjoner',
    'bruke den deriverte til å analysere funksjoner'
  ],
  content: [
    {
      id: 's1-3-3-intro',
      type: 'text',
      content: `## Sammensatte funksjoner

En **sammensatt funksjon** er en funksjon inni en annen funksjon, for eksempel $f(x) = (2x + 3)^4$ eller $g(x) = e^{x^2}$.

For å derivere slike funksjoner bruker vi **kjerneregelen** (også kalt kjederegelen).`
    },
    {
      id: 's1-3-3-theorem',
      type: 'theorem',
      title: 'Kjerneregelen',
      content: `Hvis $f(x) = g(u(x))$ er en sammensatt funksjon der $u(x)$ er den **indre funksjonen** (kjernen), så er:
$$f'(x) = g'(u(x)) \\cdot u'(x)$$

Med andre ord: **Derivér den ytre funksjonen og multipliser med den deriverte av kjernen**.

I Leibniz' notasjon: $\\frac{df}{dx} = \\frac{df}{du} \\cdot \\frac{du}{dx}$`
    },
    {
      id: 's1-3-3-example-1',
      type: 'example',
      title: 'Potens av lineært uttrykk',
      problem: `Deriver $f(x) = (3x + 1)^5$.`,
      solution: `La $u = 3x + 1$ (kjernen).
Da er $f(x) = u^5$.

Ytre funksjon derivert: $(u^5)' = 5u^4$
Kjernen derivert: $u' = 3$

$$f'(x) = 5(3x + 1)^4 \\cdot 3 = 15(3x + 1)^4$$`
    },
    {
      id: 's1-3-3-example-2',
      type: 'example',
      title: 'Eksponentialfunksjon med kjerne',
      problem: `Deriver $f(x) = e^{2x+1}$.`,
      solution: `La $u = 2x + 1$ (kjernen).
Da er $f(x) = e^u$.

Ytre funksjon derivert: $(e^u)' = e^u$
Kjernen derivert: $u' = 2$

$$f'(x) = e^{2x+1} \\cdot 2 = 2e^{2x+1}$$`
    },
    {
      id: 's1-3-3-example-3',
      type: 'example',
      title: 'Logaritme med kjerne',
      problem: `Deriver $f(x) = \\ln(x^2 + 1)$.`,
      solution: `La $u = x^2 + 1$ (kjernen).
Da er $f(x) = \\ln(u)$.

Ytre funksjon derivert: $(\\ln u)' = \\frac{1}{u}$
Kjernen derivert: $u' = 2x$

$$f'(x) = \\frac{1}{x^2 + 1} \\cdot 2x = \\frac{2x}{x^2 + 1}$$`
    },
    {
      id: 's1-3-3-vanlige',
      type: 'text',
      content: `## Vanlige tilfeller med kjerneregelen

| Funksjon | Derivert |
|----------|----------|
| $[u(x)]^n$ | $n[u(x)]^{n-1} \\cdot u'(x)$ |
| $e^{u(x)}$ | $e^{u(x)} \\cdot u'(x)$ |
| $a^{u(x)}$ | $a^{u(x)} \\cdot \\ln(a) \\cdot u'(x)$ |
| $\\ln(u(x))$ | $\\frac{u'(x)}{u(x)}$ |`
    },
    {
      id: 's1-3-3-example-4',
      type: 'example',
      title: 'Kvadratrot',
      problem: `Deriver $f(x) = \\sqrt{x^2 - 4x}$.`,
      solution: `Skriv om: $f(x) = (x^2 - 4x)^{1/2}$

La $u = x^2 - 4x$ (kjernen).
$u' = 2x - 4$

$$f'(x) = \\frac{1}{2}(x^2 - 4x)^{-1/2} \\cdot (2x - 4)$$
$$= \\frac{2x - 4}{2\\sqrt{x^2 - 4x}}$$
$$= \\frac{x - 2}{\\sqrt{x^2 - 4x}}$$`
    },
    {
      id: 's1-3-3-tip',
      type: 'tip',
      title: 'Strategi for kjerneregelen',
      content: `1. Identifiser den **ytre funksjonen** og **kjernen** (indre funksjon)
2. Derivér den ytre funksjonen (behold kjernen uendret)
3. Multipliser med den deriverte av kjernen
4. Forenkle hvis mulig`
    },
    {
      id: 's1-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = (x + 2)^3$.',
            solution: '$f\'(x) = 3(x + 2)^2 \\cdot 1 = 3(x + 2)^2$'
          },
          {
            label: 'b',
            task: 'Deriver $g(x) = (2x - 1)^4$.',
            solution: '$g\'(x) = 4(2x - 1)^3 \\cdot 2 = 8(2x - 1)^3$'
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = e^{3x}$.',
            solution: '$f\'(x) = e^{3x} \\cdot 3 = 3e^{3x}$'
          },
          {
            label: 'b',
            task: 'Deriver $g(x) = e^{-x}$.',
            solution: '$g\'(x) = e^{-x} \\cdot (-1) = -e^{-x}$'
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = \\ln(2x)$.',
            solution: '$f\'(x) = \\frac{2}{2x} = \\frac{1}{x}$'
          },
          {
            label: 'b',
            task: 'Deriver $g(x) = \\ln(x + 5)$.',
            solution: '$g\'(x) = \\frac{1}{x + 5}$'
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = (x^2 + 3)^4$.',
            solution: '$f\'(x) = 4(x^2 + 3)^3 \\cdot 2x = 8x(x^2 + 3)^3$'
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = e^{x^2}$.',
            solution: '$f\'(x) = e^{x^2} \\cdot 2x = 2xe^{x^2}$'
          },
          {
            label: 'b',
            task: 'Deriver $g(x) = e^{-x^2}$.',
            solution: '$g\'(x) = e^{-x^2} \\cdot (-2x) = -2xe^{-x^2}$'
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = \\ln(x^2 - 1)$.',
            solution: '$f\'(x) = \\frac{2x}{x^2 - 1}$'
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = \\sqrt{2x + 5}$.',
            solution: '$f(x) = (2x + 5)^{1/2}$, $f\'(x) = \\frac{1}{2}(2x + 5)^{-1/2} \\cdot 2 = \\frac{1}{\\sqrt{2x + 5}}$'
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = (3x^2 - 2x + 1)^5$.',
            solution: '$f\'(x) = 5(3x^2 - 2x + 1)^4 \\cdot (6x - 2) = (30x - 10)(3x^2 - 2x + 1)^4$'
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = \\frac{1}{(x^2 + 1)^2} = (x^2 + 1)^{-2}$.',
            solution: '$f\'(x) = -2(x^2 + 1)^{-3} \\cdot 2x = \\frac{-4x}{(x^2 + 1)^3}$'
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = e^{\\sqrt{x}}$.',
            solution: `$u = \\sqrt{x} = x^{1/2}$, $u' = \\frac{1}{2\\sqrt{x}}$
$f'(x) = e^{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$`
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = \\ln(\\ln x)$.',
            solution: `La $u = \\ln x$. Da er $f(x) = \\ln(u)$.
$f'(x) = \\frac{1}{\\ln x} \\cdot \\frac{1}{x} = \\frac{1}{x \\ln x}$`
          }
        ]
      }
    },
    {
      id: 's1-3-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-3-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Deriver $f(x) = \\sqrt{e^x + e^{-x}}$.',
            solution: `$f(x) = (e^x + e^{-x})^{1/2}$
$f'(x) = \\frac{1}{2}(e^x + e^{-x})^{-1/2} \\cdot (e^x - e^{-x})$
$= \\frac{e^x - e^{-x}}{2\\sqrt{e^x + e^{-x}}}$`
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S1_3_4: TextbookChapter = {
  id: 's1-3-4',
  courseId: 's1',
  chapterNumber: '3.4',
  title: 'Funksjonsdrøfting',
  description: 'Lær å analysere funksjoner systematisk ved hjelp av derivasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke den deriverte til å analysere funksjoner',
    'drøfte funksjoner og tolke resultater'
  ],
  content: [
    {
      id: 's1-3-4-intro',
      type: 'text',
      content: `## Hva er funksjonsdrøfting?

**Funksjonsdrøfting** er en systematisk analyse av en funksjon for å forstå dens egenskaper:
- Definisjonsmengde og verdimengde
- Nullpunkter
- Stigning og synking
- Topp- og bunnpunkter
- Eventuelle asymptoter
- Grafens form`
    },
    {
      id: 's1-3-4-def-stigning',
      type: 'definition',
      title: 'Stigning og synking',
      content: `En funksjon $f$ er:
- **Stigende** på et intervall der $f'(x) > 0$
- **Synkende** på et intervall der $f'(x) < 0$
- **Stasjonær** der $f'(x) = 0$

Et punkt der $f'(x) = 0$ kalles et **stasjonært punkt** (eller kritisk punkt).`
    },
    {
      id: 's1-3-4-def-ekstrem',
      type: 'definition',
      title: 'Topp- og bunnpunkter',
      content: `Et **toppunkt** (lokalt maksimum) er et punkt der:
- $f'(x) = 0$ og $f'$ skifter fra positiv til negativ

Et **bunnpunkt** (lokalt minimum) er et punkt der:
- $f'(x) = 0$ og $f'$ skifter fra negativ til positiv

Et **terrassepunkt** (vendepunkt) er der $f'(x) = 0$ men fortegnet ikke skifter.`
    },
    {
      id: 's1-3-4-example-1',
      type: 'example',
      title: 'Fullstendig funksjonsdrøfting',
      problem: `Gjennomfør en fullstendig drøfting av $f(x) = x^3 - 3x^2$.`,
      solution: `**1. Definisjonsmengde:** $D_f = \\mathbb{R}$

**2. Nullpunkter:** $x^3 - 3x^2 = x^2(x - 3) = 0$
$x = 0$ (dobbelt) og $x = 3$

**3. Derivasjon:** $f'(x) = 3x^2 - 6x = 3x(x - 2)$

**4. Stasjonære punkter:** $f'(x) = 0$ når $x = 0$ eller $x = 2$

**5. Fortegnslinje for $f'$:**
- $x < 0$: $f'(x) > 0$ (stigende)
- $0 < x < 2$: $f'(x) < 0$ (synkende)
- $x > 2$: $f'(x) > 0$ (stigende)

**6. Ekstrempunkter:**
- $x = 0$: Toppunkt, $f(0) = 0$
- $x = 2$: Bunnpunkt, $f(2) = 8 - 12 = -4$

**7. Grenseverdier:**
- $x \\to -\\infty$: $f(x) \\to -\\infty$
- $x \\to +\\infty$: $f(x) \\to +\\infty$`
    },
    {
      id: 's1-3-4-andrederivert',
      type: 'theorem',
      title: 'Andrederivattesten',
      content: `Hvis $f'(a) = 0$:
- $f''(a) < 0 \\Rightarrow$ toppunkt i $x = a$
- $f''(a) > 0 \\Rightarrow$ bunnunkt i $x = a$
- $f''(a) = 0 \\Rightarrow$ testen gir ikke svar (bruk fortegnslinje)`
    },
    {
      id: 's1-3-4-example-2',
      type: 'example',
      title: 'Bruke andrederivattesten',
      problem: `Finn og klassifiser de stasjonære punktene til $f(x) = x^4 - 4x^3 + 4x^2$.`,
      solution: `$f'(x) = 4x^3 - 12x^2 + 8x = 4x(x^2 - 3x + 2) = 4x(x-1)(x-2)$

Stasjonære punkter: $x = 0$, $x = 1$, $x = 2$

$f''(x) = 12x^2 - 24x + 8$

- $f''(0) = 8 > 0$ → Bunnpunkt i $(0, 0)$
- $f''(1) = 12 - 24 + 8 = -4 < 0$ → Toppunkt i $(1, 1)$
- $f''(2) = 48 - 48 + 8 = 8 > 0$ → Bunnpunkt i $(2, 0)$`
    },
    {
      id: 's1-3-4-vendepunkt',
      type: 'definition',
      title: 'Vendepunkt',
      content: `Et **vendepunkt** er et punkt der grafens krumning skifter retning (fra konkav til konveks eller omvendt).

I et vendepunkt gjelder $f''(x) = 0$ og $f''$ skifter fortegn.`
    },
    {
      id: 's1-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn de stasjonære punktene til $f(x) = x^2 - 6x + 5$.',
            solution: '$f\'(x) = 2x - 6 = 0 \\Rightarrow x = 3$. Stasjonært punkt i $x = 3$.'
          },
          {
            label: 'b',
            task: 'Avgjør om det er et topp- eller bunnpunkt.',
            solution: '$f\'\'(x) = 2 > 0$. Bunnpunkt i $(3, -4)$.'
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn intervallene der $f(x) = x^3 - 12x$ er stigende.',
            solution: `$f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2)$
$f'(x) > 0$ når $x < -2$ eller $x > 2$.`
          },
          {
            label: 'b',
            task: 'Finn intervallene der $f$ er synkende.',
            solution: '$f\'(x) < 0$ når $-2 < x < 2$.'
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn nullpunktene til $f(x) = x^3 - 4x$.',
            solution: '$x^3 - 4x = x(x^2 - 4) = x(x-2)(x+2) = 0$. Nullpunkter: $x = -2, 0, 2$'
          },
          {
            label: 'b',
            task: 'Finn de stasjonære punktene.',
            solution: `$f'(x) = 3x^2 - 4 = 0 \\Rightarrow x = \\pm\\frac{2}{\\sqrt{3}} = \\pm\\frac{2\\sqrt{3}}{3}$`
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Gjennomfør en fullstendig drøfting av $f(x) = x^3 - 3x + 2$.',
            solution: `Nullpunkter: $f(1) = 0$, så $(x-1)$ er faktor. $f(x) = (x-1)(x^2+x-2) = (x-1)^2(x+2)$
Nullpunkter: $x = 1$ (dobbelt), $x = -2$
$f'(x) = 3x^2 - 3 = 3(x-1)(x+1) = 0$ gir $x = \\pm 1$
$f(-1) = -1 + 3 + 2 = 4$ (topp), $f(1) = 0$ (bunn)
Stigende for $x < -1$ og $x > 1$, synkende for $-1 < x < 1$`
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn topp- og bunnpunkter for $f(x) = xe^{-x}$.',
            solution: `$f'(x) = e^{-x} - xe^{-x} = e^{-x}(1-x) = 0$ gir $x = 1$
$f''(x) = -e^{-x} - e^{-x}(1-x) = e^{-x}(x-2)$
$f''(1) = e^{-1}(-1) < 0$, så toppunkt i $(1, e^{-1})$`
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn vendepunktet til $f(x) = x^3 - 6x^2 + 9x$.',
            solution: `$f'(x) = 3x^2 - 12x + 9$
$f''(x) = 6x - 12 = 0 \\Rightarrow x = 2$
$f(2) = 8 - 24 + 18 = 2$
Vendepunkt: $(2, 2)$`
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Drøft $f(x) = \\ln x - x$ for $x > 0$.',
            solution: `$f'(x) = \\frac{1}{x} - 1 = 0 \\Rightarrow x = 1$
$f''(x) = -\\frac{1}{x^2} < 0$ for alle $x > 0$
Toppunkt i $(1, -1)$
$f(x) \\to -\\infty$ når $x \\to 0^+$ og $x \\to +\\infty$`
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Drøft $f(x) = \\frac{x^2}{x-1}$ fullstendig.',
            solution: `Definisjonsmengde: $x \\neq 1$
Nullpunkt: $x = 0$
$f'(x) = \\frac{2x(x-1) - x^2}{(x-1)^2} = \\frac{x^2 - 2x}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2}$
Stasjonære: $x = 0$ (topp), $x = 2$ (bunn)
Vertikal asymptote: $x = 1$
Skrå asymptote: $y = x + 1$ (ved polynomdivisjon)`
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $a$ slik at $f(x) = x^3 + ax^2 + 3x$ har nøyaktig ett stasjonært punkt.',
            solution: `$f'(x) = 3x^2 + 2ax + 3 = 0$
Nøyaktig ett stasjonært punkt betyr diskriminant = 0:
$(2a)^2 - 4 \\cdot 3 \\cdot 3 = 0$
$4a^2 = 36$
$a = \\pm 3$`
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Drøft $f(x) = x^2 e^{-x}$ fullstendig.',
            solution: `$f'(x) = 2xe^{-x} - x^2e^{-x} = xe^{-x}(2-x)$
Stasjonære: $x = 0$ (bunn), $x = 2$ (topp med $f(2) = 4e^{-2}$)
$f(x) \\to 0$ når $x \\to +\\infty$ (eksponentiell dominerer)
$f(x) \\to +\\infty$ når $x \\to -\\infty$
$f''(x) = e^{-x}(x^2 - 4x + 2)$, vendepunkter ved $x = 2 \\pm \\sqrt{2}$`
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at $f(x) = x^4 - 4x^3 + 6x^2 - 4x + 1$ har bare ett stasjonært punkt.',
            solution: `Merk at $f(x) = (x-1)^4$.
$f'(x) = 4(x-1)^3 = 0$ kun når $x = 1$.
Ett stasjonært punkt i $(1, 0)$.
$f''(x) = 12(x-1)^2$, $f''(1) = 0$, men $f'''(1) = 24 \\neq 0$.
Dette er et terrassepunkt (bunnpunkt med horisontal tangent).`
          }
        ]
      }
    },
    {
      id: 's1-3-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-3-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En funksjon er gitt ved $f(x) = ax^3 + bx^2 + cx$ der $f(1) = 0$, $f\'(1) = 0$ og $f\'\'(1) = 0$. Finn $a$, $b$ og $c$.',
            solution: `$f(1) = a + b + c = 0$
$f'(x) = 3ax^2 + 2bx + c$, $f'(1) = 3a + 2b + c = 0$
$f''(x) = 6ax + 2b$, $f''(1) = 6a + 2b = 0 \\Rightarrow b = -3a$

Fra $f(1)$: $a - 3a + c = 0 \\Rightarrow c = 2a$
Sjekk $f'(1)$: $3a - 6a + 2a = -a = 0 \\Rightarrow a = 0$

Men da er $b = c = 0$, og $f(x) = 0$ for alle $x$.
Oppgaven har ikke en ikke-triviell løsning.`
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S1_3_5: TextbookChapter = {
  id: 's1-3-5',
  courseId: 's1',
  chapterNumber: '3.5',
  title: 'Maksimums- og minimumsproblemer',
  description: 'Lær å løse praktiske optimaliseringsproblemer ved hjelp av derivasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke den deriverte til å analysere funksjoner',
    'løse praktiske problemer med optimalisering'
  ],
  content: [
    {
      id: 's1-3-5-intro',
      type: 'text',
      content: `## Optimaliseringsproblemer

Mange praktiske problemer handler om å finne den **beste** løsningen:
- Maksimere fortjeneste eller areal
- Minimere kostnader eller materialbruk
- Finne den mest effektive løsningen

Derivasjon gir oss et kraftig verktøy for å løse slike problemer.`
    },
    {
      id: 's1-3-5-metode',
      type: 'text',
      content: `## Fremgangsmåte

1. **Les problemet** og identifiser hva som skal optimaliseres (mål-funksjonen)
2. **Definer variabler** og sett opp en funksjon for målet
3. **Finn eventuelle betingelser** som begrenser variablene
4. **Uttrykk målfunksjonen** med én variabel ved å bruke betingelsene
5. **Derivér** og finn stasjonære punkter
6. **Avgjør** om det er maksimum eller minimum (bruk andrederivat eller sjekk endepunkter)
7. **Svar** på spørsmålet i oppgaven`
    },
    {
      id: 's1-3-5-example-1',
      type: 'example',
      title: 'Maksimalt areal',
      problem: `Du har 40 meter gjerde og skal lage et rektangulært innhegning mot en vegg (veggen er den ene siden). Hvilke dimensjoner gir størst areal?`,
      solution: `**Variabler:** La $x$ være bredden (parallell med veggen) og $y$ være dybden.

**Betingelse:** Gjerdelengden er $x + 2y = 40$ (tre sider)
Dermed: $x = 40 - 2y$

**Målfunksjon:** Arealet $A = x \\cdot y = (40 - 2y)y = 40y - 2y^2$

**Derivasjon:** $A'(y) = 40 - 4y = 0$ gir $y = 10$

**Sjekk:** $A''(y) = -4 < 0$, så dette er et maksimum.

**Svar:** $y = 10$ m og $x = 40 - 20 = 20$ m.
Dimensjonene er **20 m × 10 m** med maksimalt areal **200 m²**.`
    },
    {
      id: 's1-3-5-example-2',
      type: 'example',
      title: 'Minst materialbruk',
      problem: `En boks uten lokk skal ha volum 32 dm³. Bunnen er kvadratisk. Hvilke dimensjoner gir minst materialbruk?`,
      solution: `**Variabler:** La $x$ være sidelengden i bunnen og $h$ være høyden.

**Betingelse:** Volum $V = x^2 \\cdot h = 32$, så $h = \\frac{32}{x^2}$

**Målfunksjon:** Overflate $S = x^2 + 4xh = x^2 + 4x \\cdot \\frac{32}{x^2} = x^2 + \\frac{128}{x}$

**Derivasjon:** $S'(x) = 2x - \\frac{128}{x^2} = 0$
$2x^3 = 128$
$x^3 = 64$
$x = 4$

**Høyde:** $h = \\frac{32}{16} = 2$

**Sjekk:** $S''(x) = 2 + \\frac{256}{x^3} > 0$ for alle $x > 0$, så minimum.

**Svar:** Dimensjonene er **4 dm × 4 dm × 2 dm**.`
    },
    {
      id: 's1-3-5-tip',
      type: 'tip',
      title: 'Tips for optimaliseringsproblemer',
      content: `- Tegn en skisse av situasjonen
- Velg variabler fornuftig og definer dem tydelig
- Sjekk at svaret gir mening i konteksten
- Husk å sjekke endepunktene hvis funksjonen er definert på et lukket intervall`
    },
    {
      id: 's1-3-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Summen av to positive tall er 20. Finn tallene som gir maksimalt produkt.',
            solution: `La tallene være $x$ og $20-x$. Produkt: $P = x(20-x) = 20x - x^2$
$P'(x) = 20 - 2x = 0 \\Rightarrow x = 10$
Tallene er 10 og 10, produkt = 100.`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn det tallet som er minst mulig større enn kvadratet sitt. (Finn minimum for $f(x) = x - x^2$)',
            solution: `$f'(x) = 1 - 2x = 0 \\Rightarrow x = 0{,}5$
$f(0{,}5) = 0{,}5 - 0{,}25 = 0{,}25$
Tallet 0,5 er størst (0,25) større enn kvadratet sitt.`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Et rektangel har omkrets 24 cm. Finn dimensjonene som gir størst areal.',
            solution: `$2x + 2y = 24 \\Rightarrow y = 12 - x$
$A = xy = x(12-x) = 12x - x^2$
$A'(x) = 12 - 2x = 0 \\Rightarrow x = 6$
Dimensjoner: 6 cm × 6 cm (et kvadrat). Areal = 36 cm².`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En ball kastes rett opp med høyde $h(t) = 20t - 5t^2$ meter. Finn maksimal høyde.',
            solution: `$h'(t) = 20 - 10t = 0 \\Rightarrow t = 2$
$h(2) = 40 - 20 = 20$ meter
Maksimal høyde er 20 meter (etter 2 sekunder).`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En bonde skal gjerde inn et rektangulært område på 600 m². Hva er minste gjerdelengde?',
            solution: `$xy = 600 \\Rightarrow y = \\frac{600}{x}$
Omkrets: $L = 2x + 2y = 2x + \\frac{1200}{x}$
$L'(x) = 2 - \\frac{1200}{x^2} = 0 \\Rightarrow x^2 = 600 \\Rightarrow x = \\sqrt{600} \\approx 24{,}5$
$y = \\frac{600}{\\sqrt{600}} = \\sqrt{600} \\approx 24{,}5$
Minste omkrets: $4\\sqrt{600} \\approx 98$ m (et kvadrat)`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En sylinder skal ha volum 1 liter = 1000 cm³. Finn radius og høyde som gir minst overflate.',
            solution: `$V = \\pi r^2 h = 1000 \\Rightarrow h = \\frac{1000}{\\pi r^2}$
$S = 2\\pi r^2 + 2\\pi rh = 2\\pi r^2 + \\frac{2000}{r}$
$S'(r) = 4\\pi r - \\frac{2000}{r^2} = 0$
$r^3 = \\frac{500}{\\pi} \\Rightarrow r \\approx 5{,}42$ cm
$h = \\frac{1000}{\\pi \\cdot 5{,}42^2} \\approx 10{,}84$ cm`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Fortjeneste ved salg av $x$ enheter er $F(x) = -0{,}1x^2 + 50x - 2000$ kr. Finn antall enheter som gir maksimal fortjeneste.',
            solution: `$F'(x) = -0{,}2x + 50 = 0 \\Rightarrow x = 250$
$F''(x) = -0{,}2 < 0$, så maksimum.
$F(250) = -0{,}1 \\cdot 62500 + 12500 - 2000 = 4250$ kr
Maksimal fortjeneste: 4250 kr ved 250 enheter.`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Et vindu har form som et rektangel med en halvsirkel på toppen. Omkretsen er 6 m. Finn dimensjonene som gir maksimalt lysareal.',
            solution: `La $x$ være bredden (diameter av halvsirkelen) og $h$ rektangelets høyde.
Omkrets: $x + 2h + \\frac{\\pi x}{2} = 6 \\Rightarrow h = \\frac{6 - x(1 + \\frac{\\pi}{2})}{2}$
Areal: $A = xh + \\frac{\\pi(x/2)^2}{2} = xh + \\frac{\\pi x^2}{8}$
Derivér og sett lik null for å finne $x \\approx 1{,}68$ m.`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Et A4-ark (21 × 29,7 cm) skal brettes til en eske uten lokk ved å kutte like store kvadrater fra hjørnene. Finn størrelsen på kvadratene for maksimalt volum.',
            solution: `La $x$ være sidelengden på de avkuttede kvadratene.
$V = x(21 - 2x)(29{,}7 - 2x)$
$V = x(623{,}7 - 42x - 59{,}4x + 4x^2) = 4x^3 - 101{,}4x^2 + 623{,}7x$
$V'(x) = 12x^2 - 202{,}8x + 623{,}7 = 0$
$x \\approx 4{,}0$ cm (den minste positive løsningen)
Maks volum ≈ 1128 cm³`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn punktet på parabelen $y = x^2$ som ligger nærmest punktet $(0, 1)$.',
            solution: `Avstand fra $(x, x^2)$ til $(0, 1)$: $d^2 = x^2 + (x^2 - 1)^2$
La $f(x) = x^2 + (x^2 - 1)^2 = x^2 + x^4 - 2x^2 + 1 = x^4 - x^2 + 1$
$f'(x) = 4x^3 - 2x = 2x(2x^2 - 1) = 0$
$x = 0$ eller $x = \\pm\\frac{1}{\\sqrt{2}}$
$f(0) = 1$, $f(\\pm\\frac{1}{\\sqrt{2}}) = \\frac{1}{4} - \\frac{1}{2} + 1 = \\frac{3}{4}$
Nærmest: $(\\pm\\frac{1}{\\sqrt{2}}, \\frac{1}{2})$ med avstand $\\frac{\\sqrt{3}}{2}$`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En kjegle skal omslutteg en kule med radius $R$. Finn forholdet mellom høyde og grunnflateradius som gir minst volum på kjeglen.',
            solution: `Kulen tangerer sidene og bunnen. Med kjeglens høyde $h$ og radius $r$:
Kulen har sentrum i høyde $R$ over bunnen.
Tangentbetingelsen gir $r = \\frac{Rh}{\\sqrt{h^2-2Rh}}$ (komplisert geometri).
Ved derivasjon finner man $h = 4R$ og $r = R\\sqrt{2}$.`
          }
        ]
      }
    },
    {
      id: 's1-3-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-3-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Et firma selger $x$ enheter til pris $p = 200 - 2x$ kr per enhet. Kostnadene er $K(x) = 20x + 500$. Finn antall enheter som gir maksimal fortjeneste.',
            solution: `Inntekt: $I(x) = px = x(200 - 2x) = 200x - 2x^2$
Fortjeneste: $F(x) = I(x) - K(x) = 200x - 2x^2 - 20x - 500$
$F(x) = -2x^2 + 180x - 500$
$F'(x) = -4x + 180 = 0 \\Rightarrow x = 45$
$F(45) = -2 \\cdot 2025 + 8100 - 500 = 3550$ kr
Maksimal fortjeneste: 3550 kr ved 45 enheter.`
          }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S1_4_1: TextbookChapter = {
  id: 's1-4-1',
  courseId: 's1',
  chapterNumber: '4.1',
  title: 'Kostnad, inntekt og overskudd',
  description: 'Lær om økonomiske funksjoner som kostnad, inntekt og overskudd, og hvordan de henger sammen.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke funksjonar til å modellere økonomiske samanhengar'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-4-1-intro',
      type: 'text',
      content: `# Økonomiske funksjoner

I økonomien bruker matematikk til å analysere bedrifters kostnader, inntekter og overskudd. Ved å uttrykke disse som funksjoner av produksjonsmengden $x$, kan vi finne optimal produksjon og gjøre økonomiske beslutninger basert på matematisk analyse.

## Kostnadsfunksjonen

En bedrift har kostnader knyttet til produksjonen. Disse kan deles inn i to typer:

- **Faste kostnader**: Kostnader som ikke avhenger av produksjonsmengden (husleie, forsikring, lønn til fast ansatte)
- **Variable kostnader**: Kostnader som øker med produksjonsmengden (råvarer, strøm til produksjon)`,
    },

    // ========== DEFINISJON: KOSTNADSFUNKSJON ==========
    {
      id: 's1-4-1-def-kostnad',
      type: 'definition',
      title: 'Kostnadsfunksjon',
      content: `**Kostnadsfunksjonen** $K(x)$ beskriver de totale kostnadene ved å produsere $x$ enheter av en vare.

$$K(x) = \\text{Faste kostnader} + \\text{Variable kostnader}$$

Kostnadsfunksjonen kan ofte skrives som et polynom:
$$K(x) = ax^2 + bx + c$$

der $c$ representerer de faste kostnadene (konstantleddet).`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 's1-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Kostnadsfunksjon',
      problem: `En bedrift produserer sykler. Kostnadene kan beskrives med funksjonen:

$$K(x) = 0{,}1x^2 + 200x + 50000$$

der $x$ er antall sykler som produseres, og $K(x)$ er kostnadene i kroner.

a) Hva er de faste kostnadene?
b) Hva koster det å produsere 100 sykler?
c) Hva koster det å øke produksjonen fra 100 til 101 sykler?`,
      solution: `**Løsning:**

a) De faste kostnadene er konstantleddet i kostnadsfunksjonen:
$$\\text{Faste kostnader} = 50000 \\text{ kr}$$

b) Vi setter inn $x = 100$:
$$K(100) = 0{,}1 \\cdot 100^2 + 200 \\cdot 100 + 50000$$
$$K(100) = 0{,}1 \\cdot 10000 + 20000 + 50000$$
$$K(100) = 1000 + 20000 + 50000 = 71000 \\text{ kr}$$

c) Vi finner først $K(101)$:
$$K(101) = 0{,}1 \\cdot 101^2 + 200 \\cdot 101 + 50000$$
$$K(101) = 0{,}1 \\cdot 10201 + 20200 + 50000$$
$$K(101) = 1020{,}1 + 20200 + 50000 = 71220{,}1 \\text{ kr}$$

Kostnaden ved å øke produksjonen fra 100 til 101 sykler:
$$K(101) - K(100) = 71220{,}1 - 71000 = 220{,}1 \\text{ kr}$$`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 's1-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `En møbelbedrift har kostnadsfunksjonen $K(x) = 0{,}05x^2 + 150x + 30000$ der $x$ er antall stoler produsert og $K(x)$ er kostnadene i kroner.`,
        subTasks: [
          { label: 'a', task: 'Hva er de faste kostnadene?', solution: 'De faste kostnadene er konstantleddet: $30000$ kr', answer: 30000 },
          { label: 'b', task: 'Finn kostnadene ved å produsere 200 stoler.', solution: '$K(200) = 0{,}05 \\cdot 200^2 + 150 \\cdot 200 + 30000 = 2000 + 30000 + 30000 = 62000$ kr', answer: 62000 },
          { label: 'c', task: 'Finn kostnadene ved å produsere 201 stoler.', solution: '$K(201) = 0{,}05 \\cdot 201^2 + 150 \\cdot 201 + 30000 = 2020{,}05 + 30150 + 30000 = 62170{,}05$ kr', answer: 62170.05 },
          { label: 'd', task: 'Hva koster det å øke produksjonen fra 200 til 201 stoler?', solution: '$K(201) - K(200) = 62170{,}05 - 62000 = 170{,}05$ kr', answer: 170.05 },
        ],
        hints: ['De faste kostnadene er kostnadene når $x = 0$, altså konstantleddet.'],
        solution: 'a) $30000$ kr, b) $62000$ kr, c) $62170{,}05$ kr, d) $170{,}05$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== INNTEKTSFUNKSJON ==========
    {
      id: 's1-4-1-section-inntekt',
      type: 'text',
      content: `## Inntektsfunksjonen

Når bedriften selger varene sine, får den inntekter. Dersom prisen per enhet er konstant, blir inntektsfunksjonen lineær.`,
    },

    // ========== DEFINISJON: INNTEKTSFUNKSJON ==========
    {
      id: 's1-4-1-def-inntekt',
      type: 'definition',
      title: 'Inntektsfunksjon',
      content: `**Inntektsfunksjonen** $I(x)$ beskriver de totale inntektene ved å selge $x$ enheter.

Når prisen per enhet er $p$ kroner:
$$I(x) = p \\cdot x$$

Inntektsfunksjonen er lineær og går gjennom origo.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 's1-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Inntektsfunksjon',
      problem: `Sykkelbedriften fra eksempel 1 selger syklene for 3500 kr per stykk.

a) Sett opp inntektsfunksjonen $I(x)$.
b) Hva blir inntektene ved salg av 100 sykler?
c) Hvor mange sykler må selges for å få 700 000 kr i inntekt?`,
      solution: `**Løsning:**

a) Prisen er $p = 3500$ kr per sykkel. Inntektsfunksjonen blir:
$$I(x) = 3500x$$

b) Vi setter inn $x = 100$:
$$I(100) = 3500 \\cdot 100 = 350000 \\text{ kr}$$

c) Vi løser likningen $I(x) = 700000$:
$$3500x = 700000$$
$$x = \\frac{700000}{3500} = 200$$

Det må selges **200 sykler**.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 's1-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Møbelbedriften fra oppgave 1 selger stolene for 800 kr per stykk.`,
        subTasks: [
          { label: 'a', task: 'Sett opp inntektsfunksjonen $I(x)$.', solution: '$I(x) = 800x$', expressionAnswer: '800x' },
          { label: 'b', task: 'Finn inntektene ved salg av 200 stoler.', solution: '$I(200) = 800 \\cdot 200 = 160000$ kr', answer: 160000 },
          { label: 'c', task: 'Hvor mange stoler må selges for å få 240 000 kr i inntekt?', solution: '$800x = 240000 \\Rightarrow x = 300$ stoler', answer: 300 },
        ],
        hints: ['Inntekt = pris per enhet $\\cdot$ antall enheter'],
        solution: 'a) $I(x) = 800x$, b) $160000$ kr, c) $300$ stoler',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OVERSKUDDSFUNKSJON ==========
    {
      id: 's1-4-1-section-overskudd',
      type: 'text',
      content: `## Overskuddsfunksjonen

Overskuddet er differansen mellom inntektene og kostnadene. Dette er det bedriften sitter igjen med etter at alle kostnader er betalt.`,
    },

    // ========== DEFINISJON: OVERSKUDDSFUNKSJON ==========
    {
      id: 's1-4-1-def-overskudd',
      type: 'definition',
      title: 'Overskuddsfunksjon',
      content: `**Overskuddsfunksjonen** $O(x)$ beskriver overskuddet ved å produsere og selge $x$ enheter:

$$O(x) = I(x) - K(x)$$

- $O(x) > 0$: Bedriften går med **overskudd** (profitt)
- $O(x) < 0$: Bedriften går med **underskudd** (tap)
- $O(x) = 0$: Bedriften går i **null** (nullpunkt/break-even)`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 's1-4-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Overskuddsfunksjon',
      problem: `Bruk sykkelbedriften fra eksempel 1 og 2:
- $K(x) = 0{,}1x^2 + 200x + 50000$
- $I(x) = 3500x$

a) Finn overskuddsfunksjonen $O(x)$.
b) Finn overskuddet ved produksjon og salg av 100 sykler.
c) Ved hvilken produksjonsmengde går bedriften i null?`,
      solution: `**Løsning:**

a) Overskuddsfunksjonen:
$$O(x) = I(x) - K(x)$$
$$O(x) = 3500x - (0{,}1x^2 + 200x + 50000)$$
$$O(x) = 3500x - 0{,}1x^2 - 200x - 50000$$
$$O(x) = -0{,}1x^2 + 3300x - 50000$$

b) Vi setter inn $x = 100$:
$$O(100) = -0{,}1 \\cdot 100^2 + 3300 \\cdot 100 - 50000$$
$$O(100) = -1000 + 330000 - 50000 = 279000 \\text{ kr}$$

c) Nullpunkt: $O(x) = 0$
$$-0{,}1x^2 + 3300x - 50000 = 0$$

Vi ganger med $-10$:
$$x^2 - 33000x + 500000 = 0$$

ABC-formelen:
$$x = \\frac{33000 \\pm \\sqrt{33000^2 - 4 \\cdot 500000}}{2}$$
$$x = \\frac{33000 \\pm \\sqrt{1089000000 - 2000000}}{2}$$
$$x = \\frac{33000 \\pm \\sqrt{1087000000}}{2}$$
$$x = \\frac{33000 \\pm 32970}{2}$$

$$x_1 = \\frac{33000 - 32970}{2} = 15 \\quad \\text{eller} \\quad x_2 = \\frac{33000 + 32970}{2} = 32985$$

Bedriften går i null ved produksjon av **15 sykler** eller **32985 sykler**.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 's1-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk møbelbedriften fra oppgave 1 og 2:
- $K(x) = 0{,}05x^2 + 150x + 30000$
- $I(x) = 800x$`,
        subTasks: [
          { label: 'a', task: 'Finn overskuddsfunksjonen $O(x)$.', solution: '$O(x) = 800x - (0{,}05x^2 + 150x + 30000) = -0{,}05x^2 + 650x - 30000$', expressionAnswer: '-0.05x^2+650x-30000' },
          { label: 'b', task: 'Finn overskuddet ved produksjon og salg av 200 stoler.', solution: '$O(200) = -0{,}05 \\cdot 200^2 + 650 \\cdot 200 - 30000 = -2000 + 130000 - 30000 = 98000$ kr', answer: 98000 },
          { label: 'c', task: 'Finn nullpunktene til overskuddsfunksjonen (avrund til nærmeste hele tall).', solution: '$-0{,}05x^2 + 650x - 30000 = 0$ gir $x \\approx 47$ eller $x \\approx 12953$' },
        ],
        hints: ['$O(x) = I(x) - K(x)$. Husk å sette parentes rundt hele kostnadsfunksjonen.'],
        solution: 'a) $O(x) = -0{,}05x^2 + 650x - 30000$, b) $98000$ kr, c) $x \\approx 47$ eller $x \\approx 12953$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ENHETSKOSTNAD ==========
    {
      id: 's1-4-1-section-enhetskostnad',
      type: 'text',
      content: `## Enhetskostnad

Enhetskostnaden forteller oss hvor mye det i gjennomsnitt koster å produsere én vare. Denne er viktig for prissetting og lønnsomhetsvurderinger.`,
    },

    // ========== DEFINISJON: ENHETSKOSTNAD ==========
    {
      id: 's1-4-1-def-enhetskostnad',
      type: 'definition',
      title: 'Enhetskostnad',
      content: `**Enhetskostnaden** (eller gjennomsnittskostnaden) $E(x)$ er den gjennomsnittlige kostnaden per produsert enhet:

$$E(x) = \\frac{K(x)}{x}$$

Enhetskostnaden avtar ofte når produksjonen øker (stordriftsfordeler), fordi de faste kostnadene fordeles på flere enheter.`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 's1-4-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Enhetskostnad',
      problem: `Sykkelbedriften har $K(x) = 0{,}1x^2 + 200x + 50000$.

a) Finn enhetskostnaden $E(x)$.
b) Finn enhetskostnaden ved produksjon av 100 sykler.
c) Finn enhetskostnaden ved produksjon av 500 sykler.
d) Hva skjer med enhetskostnaden når produksjonen øker?`,
      solution: `**Løsning:**

a) Enhetskostnaden:
$$E(x) = \\frac{K(x)}{x} = \\frac{0{,}1x^2 + 200x + 50000}{x}$$
$$E(x) = 0{,}1x + 200 + \\frac{50000}{x}$$

b) For $x = 100$:
$$E(100) = 0{,}1 \\cdot 100 + 200 + \\frac{50000}{100}$$
$$E(100) = 10 + 200 + 500 = 710 \\text{ kr per sykkel}$$

c) For $x = 500$:
$$E(500) = 0{,}1 \\cdot 500 + 200 + \\frac{50000}{500}$$
$$E(500) = 50 + 200 + 100 = 350 \\text{ kr per sykkel}$$

d) Når produksjonen øker, synker leddet $\\frac{50000}{x}$ (de faste kostnadene per enhet). Samtidig øker leddet $0{,}1x$ (som representerer økende variable kostnader per enhet). For denne bedriften synker enhetskostnaden først, men vil etter hvert øke igjen på grunn av $0{,}1x$-leddet.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 's1-4-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}02x^2 + 80x + 20000$.`,
        subTasks: [
          { label: 'a', task: 'Finn enhetskostnaden $E(x)$.', solution: '$E(x) = \\frac{K(x)}{x} = 0{,}02x + 80 + \\frac{20000}{x}$' },
          { label: 'b', task: 'Finn enhetskostnaden ved produksjon av 100 enheter.', solution: '$E(100) = 0{,}02 \\cdot 100 + 80 + \\frac{20000}{100} = 2 + 80 + 200 = 282$ kr', answer: 282 },
          { label: 'c', task: 'Finn enhetskostnaden ved produksjon av 1000 enheter.', solution: '$E(1000) = 0{,}02 \\cdot 1000 + 80 + \\frac{20000}{1000} = 20 + 80 + 20 = 120$ kr', answer: 120 },
        ],
        hints: ['Del hvert ledd i kostnadsfunksjonen på $x$.'],
        solution: 'a) $E(x) = 0{,}02x + 80 + \\frac{20000}{x}$, b) $282$ kr, c) $120$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NOTE: SAMMENHENG ==========
    {
      id: 's1-4-1-note-sammenheng',
      type: 'note',
      content: `**Sammenheng mellom funksjonene:**

| Funksjon | Formel | Beskriver |
|----------|--------|-----------|
| $K(x)$ | Kostnadsfunksjon | Totale kostnader |
| $I(x)$ | $p \\cdot x$ | Totale inntekter |
| $O(x)$ | $I(x) - K(x)$ | Overskudd/profitt |
| $E(x)$ | $\\frac{K(x)}{x}$ | Gjennomsnittskostnad |`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 's1-4-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift produserer lamper. Kostnadsfunksjonen er $K(x) = 0{,}005x^2 + 50x + 10000$ kroner, og salgsprisen er 150 kr per lampe.`,
        subTasks: [
          { label: 'a', task: 'Sett opp inntektsfunksjonen.', solution: '$I(x) = 150x$', expressionAnswer: '150x' },
          { label: 'b', task: 'Sett opp overskuddsfunksjonen.', solution: '$O(x) = 150x - (0{,}005x^2 + 50x + 10000) = -0{,}005x^2 + 100x - 10000$' },
          { label: 'c', task: 'Finn overskuddet ved produksjon og salg av 2000 lamper.', solution: '$O(2000) = -0{,}005 \\cdot 2000^2 + 100 \\cdot 2000 - 10000 = -20000 + 200000 - 10000 = 170000$ kr', answer: 170000 },
          { label: 'd', task: 'Finn enhetskostnaden ved produksjon av 2000 lamper.', solution: '$E(2000) = \\frac{K(2000)}{2000} = \\frac{0{,}005 \\cdot 2000^2 + 50 \\cdot 2000 + 10000}{2000} = \\frac{20000 + 100000 + 10000}{2000} = 65$ kr', answer: 65 },
        ],
        hints: ['Bruk formlene for de ulike funksjonene.'],
        solution: 'a) $I(x) = 150x$, b) $O(x) = -0{,}005x^2 + 100x - 10000$, c) $170000$ kr, d) $65$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 's1-4-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `En kafé har faste kostnader på 15 000 kr i måneden og variable kostnader på 25 kr per kopp kaffe. De selger kaffe for 55 kr per kopp.`,
        subTasks: [
          { label: 'a', task: 'Sett opp kostnadsfunksjonen $K(x)$ der $x$ er antall kopper kaffe.', solution: '$K(x) = 25x + 15000$', expressionAnswer: '25x+15000' },
          { label: 'b', task: 'Sett opp inntektsfunksjonen $I(x)$.', solution: '$I(x) = 55x$', expressionAnswer: '55x' },
          { label: 'c', task: 'Sett opp overskuddsfunksjonen $O(x)$.', solution: '$O(x) = 55x - (25x + 15000) = 30x - 15000$', expressionAnswer: '30x-15000' },
          { label: 'd', task: 'Hvor mange kopper kaffe må selges for at kaféen skal gå i null?', solution: '$30x - 15000 = 0 \\Rightarrow x = 500$ kopper', answer: 500 },
          { label: 'e', task: 'Hva blir overskuddet hvis de selger 1000 kopper kaffe?', solution: '$O(1000) = 30 \\cdot 1000 - 15000 = 15000$ kr', answer: 15000 },
        ],
        hints: ['De variable kostnadene er lineære (25 kr per kopp), så kostnadsfunksjonen blir et førstegradspolynom.'],
        solution: 'a) $K(x) = 25x + 15000$, b) $I(x) = 55x$, c) $O(x) = 30x - 15000$, d) $500$ kopper, e) $15000$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 's1-4-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En teknologibedrift har kostnadsfunksjonen $K(x) = 0{,}001x^3 - 0{,}5x^2 + 100x + 40000$ der $x$ er antall produkter. Salgsprisen er 300 kr per produkt.`,
        subTasks: [
          { label: 'a', task: 'Sett opp overskuddsfunksjonen $O(x)$.', solution: '$O(x) = 300x - (0{,}001x^3 - 0{,}5x^2 + 100x + 40000) = -0{,}001x^3 + 0{,}5x^2 + 200x - 40000$' },
          { label: 'b', task: 'Finn overskuddet ved produksjon og salg av 100 produkter.', solution: '$O(100) = -0{,}001 \\cdot 100^3 + 0{,}5 \\cdot 100^2 + 200 \\cdot 100 - 40000 = -100 + 5000 + 20000 - 40000 = -15100$ kr (underskudd)', answer: -15100 },
          { label: 'c', task: 'Finn overskuddet ved produksjon og salg av 200 produkter.', solution: '$O(200) = -0{,}001 \\cdot 200^3 + 0{,}5 \\cdot 200^2 + 200 \\cdot 200 - 40000 = -8000 + 20000 + 40000 - 40000 = 12000$ kr', answer: 12000 },
        ],
        hints: ['Husk at $x^3$-leddet har koeffisient $0{,}001$.'],
        solution: 'a) $O(x) = -0{,}001x^3 + 0{,}5x^2 + 200x - 40000$, b) $-15100$ kr, c) $12000$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 's1-4-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}04x^2 + 60x + 8000$.`,
        subTasks: [
          { label: 'a', task: 'Finn enhetskostnaden $E(x)$.', solution: '$E(x) = \\frac{K(x)}{x} = 0{,}04x + 60 + \\frac{8000}{x}$' },
          { label: 'b', task: 'Beregn enhetskostnaden for $x = 50, 100, 200, 400$.', solution: '$E(50) = 222$ kr, $E(100) = 164$ kr, $E(200) = 148$ kr, $E(400) = 96$ kr' },
          { label: 'c', task: 'Ved hvilken produksjonsmengde er enhetskostnaden lavest? (Bruk derivasjon)', solution: '$E\'(x) = 0{,}04 - \\frac{8000}{x^2} = 0 \\Rightarrow x^2 = 200000 \\Rightarrow x \\approx 447$ enheter' },
        ],
        hints: ['For å finne minimum av $E(x)$, sett $E\'(x) = 0$.'],
        solution: 'a) $E(x) = 0{,}04x + 60 + \\frac{8000}{x}$, b) Se deloppgaven, c) $x \\approx 447$ enheter',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9 ==========
    {
      id: 's1-4-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bedrift har faste kostnader på 50 000 kr og variable kostnader som kan beskrives med $V(x) = 0{,}02x^2 + 30x$ der $x$ er produksjonsmengden. Salgsprisen er 100 kr per enhet.`,
        subTasks: [
          { label: 'a', task: 'Sett opp den totale kostnadsfunksjonen $K(x)$.', solution: '$K(x) = 0{,}02x^2 + 30x + 50000$', expressionAnswer: '0.02x^2+30x+50000' },
          { label: 'b', task: 'Sett opp overskuddsfunksjonen $O(x)$.', solution: '$O(x) = 100x - (0{,}02x^2 + 30x + 50000) = -0{,}02x^2 + 70x - 50000$' },
          { label: 'c', task: 'Finn de to produksjonsmengdene der bedriften går i null.', solution: '$-0{,}02x^2 + 70x - 50000 = 0$ gir $x^2 - 3500x + 2500000 = 0$, som gir $x \\approx 893$ eller $x \\approx 2607$' },
          { label: 'd', task: 'For hvilke produksjonsmengder går bedriften med overskudd?', solution: 'Bedriften går med overskudd for $893 < x < 2607$' },
        ],
        hints: ['$K(x) = V(x) + \\text{faste kostnader}$'],
        solution: 'a) $K(x) = 0{,}02x^2 + 30x + 50000$, b) $O(x) = -0{,}02x^2 + 70x - 50000$, c) $x \\approx 893$ eller $x \\approx 2607$, d) $893 < x < 2607$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 10 ==========
    {
      id: 's1-4-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et bakeri har kostnadsfunksjonen $K(x) = 0{,}01x^2 + 20x + 5000$ og selger brød for 50 kr per stykk.`,
        subTasks: [
          { label: 'a', task: 'Finn overskuddsfunksjonen.', solution: '$O(x) = 50x - (0{,}01x^2 + 20x + 5000) = -0{,}01x^2 + 30x - 5000$' },
          { label: 'b', task: 'Bestem ved hvilken produksjonsmengde overskuddet er størst. (Bruk derivasjon)', solution: '$O\'(x) = -0{,}02x + 30 = 0 \\Rightarrow x = 1500$ brød' },
          { label: 'c', task: 'Finn det maksimale overskuddet.', solution: '$O(1500) = -0{,}01 \\cdot 1500^2 + 30 \\cdot 1500 - 5000 = -22500 + 45000 - 5000 = 17500$ kr', answer: 17500 },
        ],
        hints: ['Overskuddet er maksimalt når $O\'(x) = 0$.'],
        solution: 'a) $O(x) = -0{,}01x^2 + 30x - 5000$, b) $x = 1500$ brød, c) $17500$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 11 ==========
    {
      id: 's1-4-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift produserer T-skjorter. Tabellen viser kostnader og inntekter for ulike produksjonsmengder:

| $x$ | $K(x)$ | $I(x)$ |
|-----|--------|--------|
| 0 | 10000 | 0 |
| 100 | 15000 | 12000 |
| 200 | 22000 | 24000 |
| 300 | 31000 | 36000 |
| 400 | 42000 | 48000 |`,
        subTasks: [
          { label: 'a', task: 'Hva er de faste kostnadene?', solution: 'De faste kostnadene er $K(0) = 10000$ kr', answer: 10000 },
          { label: 'b', task: 'Hva er salgsprisen per T-skjorte?', solution: 'Pris $= \\frac{I(100)}{100} = \\frac{12000}{100} = 120$ kr', answer: 120 },
          { label: 'c', task: 'Beregn overskuddet for hver produksjonsmengde i tabellen.', solution: '$O(0) = -10000$, $O(100) = -3000$, $O(200) = 2000$, $O(300) = 5000$, $O(400) = 6000$' },
          { label: 'd', task: 'Mellom hvilke produksjonsmengder går bedriften i null?', solution: 'Bedriften går i null mellom $x = 100$ og $x = 200$ (skifter fra underskudd til overskudd)' },
        ],
        hints: ['$O(x) = I(x) - K(x)$'],
        solution: 'a) $10000$ kr, b) $120$ kr, c) Se deloppgaven, d) Mellom 100 og 200',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 12 ==========
    {
      id: 's1-4-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-4-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bedrift vurderer to ulike produksjonsmetoder:

**Metode A**: $K_A(x) = 0{,}1x^2 + 50x + 20000$
**Metode B**: $K_B(x) = 0{,}05x^2 + 100x + 10000$`,
        subTasks: [
          { label: 'a', task: 'Hvilken metode har lavest faste kostnader?', solution: 'Metode B har lavest faste kostnader (10000 kr mot 20000 kr)', expressionAnswer: 'B' },
          { label: 'b', task: 'Ved hvilken produksjonsmengde er kostnadene like for begge metodene?', solution: '$K_A(x) = K_B(x) \\Rightarrow 0{,}1x^2 + 50x + 20000 = 0{,}05x^2 + 100x + 10000 \\Rightarrow 0{,}05x^2 - 50x + 10000 = 0 \\Rightarrow x^2 - 1000x + 200000 = 0 \\Rightarrow x = 276$ eller $x = 724$' },
          { label: 'c', task: 'Hvilken metode er billigst ved produksjon av 500 enheter?', solution: '$K_A(500) = 0{,}1 \\cdot 500^2 + 50 \\cdot 500 + 20000 = 70000$ kr, $K_B(500) = 0{,}05 \\cdot 500^2 + 100 \\cdot 500 + 10000 = 72500$ kr. Metode A er billigst.', expressionAnswer: 'A' },
        ],
        hints: ['Sett $K_A(x) = K_B(x)$ og løs likningen.'],
        solution: 'a) Metode B, b) $x = 276$ eller $x = 724$, c) Metode A',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_S1_4_2: TextbookChapter = {
  id: 's1-4-2',
  courseId: 's1',
  chapterNumber: '4.2',
  title: 'Grensekostnader og grenseinntekter',
  description: 'Lær om den deriverte i økonomiske sammenhenger: grensekostnad, grenseinntekt og optimal produksjonsmengde.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke funksjonar til å modellere økonomiske samanhengar', 'bruke derivasjon til å analysere funksjoner'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-4-2-intro',
      type: 'text',
      content: `# Grensekostnader og grenseinntekter

I forrige kapittel så vi på kostnadene ved å øke produksjonen med én enhet ved å beregne $K(x+1) - K(x)$. Denne tilnærmingen gir oss den faktiske merkostnaden, men kan være tungvint å beregne.

Ved hjelp av derivasjon kan vi finne en tilnærming til denne merkostnaden som er mye enklere å arbeide med. Vi kaller dette **grensekostnaden**.`,
    },

    // ========== DEFINISJON: GRENSEKOSTNAD ==========
    {
      id: 's1-4-2-def-grensekostnad',
      type: 'definition',
      title: 'Grensekostnad',
      content: `**Grensekostnaden** $K'(x)$ er den deriverte av kostnadsfunksjonen.

$$K'(x) = \\frac{dK}{dx}$$

Grensekostnaden angir tilnærmet hvor mye kostnadene øker når produksjonen øker med én enhet.

$$K'(x) \\approx K(x+1) - K(x)$$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 's1-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Grensekostnad',
      problem: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}05x^2 + 100x + 20000$.

a) Finn grensekostnaden $K'(x)$.
b) Finn grensekostnaden ved produksjon av 200 enheter.
c) Sammenlign med den faktiske kostnadsøkningen $K(201) - K(200)$.`,
      solution: `**Løsning:**

a) Vi deriverer kostnadsfunksjonen:
$$K'(x) = 0{,}1x + 100$$

b) Grensekostnaden ved $x = 200$:
$$K'(200) = 0{,}1 \\cdot 200 + 100 = 20 + 100 = 120 \\text{ kr}$$

c) Den faktiske kostnadsøkningen:
$$K(201) = 0{,}05 \\cdot 201^2 + 100 \\cdot 201 + 20000 = 2020{,}05 + 20100 + 20000 = 42120{,}05$$
$$K(200) = 0{,}05 \\cdot 200^2 + 100 \\cdot 200 + 20000 = 2000 + 20000 + 20000 = 42000$$
$$K(201) - K(200) = 42120{,}05 - 42000 = 120{,}05 \\text{ kr}$$

Grensekostnaden $K'(200) = 120$ kr er en god tilnærming til den faktiske kostnadsøkningen på $120{,}05$ kr.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 's1-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}02x^2 + 80x + 15000$.`,
        subTasks: [
          { label: 'a', task: 'Finn grensekostnaden $K\'(x)$.', solution: '$K\'(x) = 0{,}04x + 80$', expressionAnswer: '0.04x+80' },
          { label: 'b', task: 'Finn grensekostnaden ved produksjon av 100 enheter.', solution: '$K\'(100) = 0{,}04 \\cdot 100 + 80 = 84$ kr', answer: 84 },
          { label: 'c', task: 'Finn grensekostnaden ved produksjon av 500 enheter.', solution: '$K\'(500) = 0{,}04 \\cdot 500 + 80 = 100$ kr', answer: 100 },
          { label: 'd', task: 'Hva skjer med grensekostnaden når produksjonen øker?', solution: 'Grensekostnaden øker lineært med produksjonen (koeffisienten $0{,}04$ er positiv)' },
        ],
        hints: ['Deriver kostnadsfunksjonen ledd for ledd.'],
        solution: 'a) $K\'(x) = 0{,}04x + 80$, b) $84$ kr, c) $100$ kr, d) Øker lineært',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GRENSEINNTEKT ==========
    {
      id: 's1-4-2-section-grenseinntekt',
      type: 'text',
      content: `## Grenseinntekt

På samme måte som grensekostnaden kan vi definere grenseinntekten som den deriverte av inntektsfunksjonen.`,
    },

    // ========== DEFINISJON: GRENSEINNTEKT ==========
    {
      id: 's1-4-2-def-grenseinntekt',
      type: 'definition',
      title: 'Grenseinntekt',
      content: `**Grenseinntekten** $I'(x)$ er den deriverte av inntektsfunksjonen.

$$I'(x) = \\frac{dI}{dx}$$

Når prisen $p$ er konstant og $I(x) = p \\cdot x$, får vi:
$$I'(x) = p$$

Grenseinntekten er da lik prisen per enhet.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 's1-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Grenseinntekt',
      problem: `En bedrift selger produkter for 150 kr per stykk.

a) Sett opp inntektsfunksjonen.
b) Finn grenseinntekten.
c) Tolk resultatet.`,
      solution: `**Løsning:**

a) Inntektsfunksjonen:
$$I(x) = 150x$$

b) Grenseinntekten:
$$I'(x) = 150$$

c) Tolkning: Grenseinntekten er konstant og lik prisen. For hver ekstra enhet som selges, øker inntektene med 150 kr.

Dette gir mening: Når prisen er fast, får bedriften alltid like mye ekstra inntekt for hver ny enhet de selger.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 's1-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `En butikk selger varer for 250 kr per stykk.`,
        subTasks: [
          { label: 'a', task: 'Sett opp inntektsfunksjonen $I(x)$.', solution: '$I(x) = 250x$', expressionAnswer: '250x' },
          { label: 'b', task: 'Finn grenseinntekten $I\'(x)$.', solution: '$I\'(x) = 250$', answer: 250 },
          { label: 'c', task: 'Hva betyr resultatet i praksis?', solution: 'For hver ekstra vare som selges, øker inntektene med 250 kr.' },
        ],
        hints: ['Grenseinntekten er den deriverte av inntektsfunksjonen.'],
        solution: 'a) $I(x) = 250x$, b) $I\'(x) = 250$, c) Inntekten øker med 250 kr per ekstra vare',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GRENSEOVERSKUDD ==========
    {
      id: 's1-4-2-section-grenseoverskudd',
      type: 'text',
      content: `## Grenseoverskudd og optimal produksjon

Grenseoverskuddet forteller oss hvor mye overskuddet endres når produksjonen øker med én enhet.`,
    },

    // ========== DEFINISJON: GRENSEOVERSKUDD ==========
    {
      id: 's1-4-2-def-grenseoverskudd',
      type: 'definition',
      title: 'Grenseoverskudd',
      content: `**Grenseoverskuddet** $O'(x)$ er den deriverte av overskuddsfunksjonen:

$$O'(x) = I'(x) - K'(x)$$

- $O'(x) > 0$: Overskuddet øker ved økt produksjon
- $O'(x) < 0$: Overskuddet synker ved økt produksjon
- $O'(x) = 0$: Mulig maksimum eller minimum for overskuddet`,
    },

    // ========== TEOREM: OPTIMAL PRODUKSJON ==========
    {
      id: 's1-4-2-theorem-optimal',
      type: 'theorem',
      title: 'Optimal produksjon',
      content: `**Overskuddet er maksimalt når grenseinntekten er lik grensekostnaden:**

$$I'(x) = K'(x)$$

Dette betyr at den siste enheten som produseres, gir like mye i ekstra inntekt som den koster å produsere.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 's1-4-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Optimal produksjonsmengde',
      problem: `En bedrift har:
- Kostnadsfunksjon: $K(x) = 0{,}01x^2 + 40x + 10000$
- Salgspris: 120 kr per enhet

Finn den produksjonsmengden som gir maksimalt overskudd.`,
      solution: `**Løsning:**

**Metode 1: Bruk av overskuddsfunksjonen**

Inntektsfunksjon: $I(x) = 120x$

Overskuddsfunksjon:
$$O(x) = I(x) - K(x) = 120x - (0{,}01x^2 + 40x + 10000)$$
$$O(x) = -0{,}01x^2 + 80x - 10000$$

For maksimum setter vi $O'(x) = 0$:
$$O'(x) = -0{,}02x + 80 = 0$$
$$x = \\frac{80}{0{,}02} = 4000$$

**Metode 2: Grenseinntekt = Grensekostnad**

Grenseinntekt: $I'(x) = 120$
Grensekostnad: $K'(x) = 0{,}02x + 40$

Setter $I'(x) = K'(x)$:
$$120 = 0{,}02x + 40$$
$$80 = 0{,}02x$$
$$x = 4000$$

**Svar:** Optimal produksjonsmengde er **4000 enheter**.

Maksimalt overskudd: $O(4000) = -0{,}01 \\cdot 4000^2 + 80 \\cdot 4000 - 10000 = 150000$ kr`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 's1-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}005x^2 + 50x + 20000$ og selger produktene for 100 kr per stykk.`,
        subTasks: [
          { label: 'a', task: 'Finn grensekostnaden $K\'(x)$.', solution: '$K\'(x) = 0{,}01x + 50$', expressionAnswer: '0.01x+50' },
          { label: 'b', task: 'Finn grenseinntekten $I\'(x)$.', solution: '$I\'(x) = 100$', answer: 100 },
          { label: 'c', task: 'Finn produksjonsmengden som gir maksimalt overskudd.', solution: '$I\'(x) = K\'(x) \\Rightarrow 100 = 0{,}01x + 50 \\Rightarrow x = 5000$ enheter', answer: 5000 },
          { label: 'd', task: 'Beregn det maksimale overskuddet.', solution: '$O(5000) = 100 \\cdot 5000 - (0{,}005 \\cdot 5000^2 + 50 \\cdot 5000 + 20000) = 500000 - (125000 + 250000 + 20000) = 105000$ kr', answer: 105000 },
        ],
        hints: ['Optimal produksjon: $I\'(x) = K\'(x)$'],
        solution: 'a) $K\'(x) = 0{,}01x + 50$, b) $I\'(x) = 100$, c) $5000$ enheter, d) $105000$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 's1-4-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift produserer mobiltelefondeksler med kostnadsfunksjonen $K(x) = 0{,}002x^2 + 15x + 8000$ og salgspris 45 kr per stykk.`,
        subTasks: [
          { label: 'a', task: 'Sett opp overskuddsfunksjonen $O(x)$.', solution: '$O(x) = 45x - (0{,}002x^2 + 15x + 8000) = -0{,}002x^2 + 30x - 8000$' },
          { label: 'b', task: 'Finn $O\'(x)$.', solution: '$O\'(x) = -0{,}004x + 30$', expressionAnswer: '-0.004x+30' },
          { label: 'c', task: 'Finn optimal produksjonsmengde.', solution: '$O\'(x) = 0 \\Rightarrow -0{,}004x + 30 = 0 \\Rightarrow x = 7500$ enheter', answer: 7500 },
          { label: 'd', task: 'Finn maksimalt overskudd.', solution: '$O(7500) = -0{,}002 \\cdot 7500^2 + 30 \\cdot 7500 - 8000 = 104500$ kr', answer: 104500 },
        ],
        hints: ['Alternativt: Sett $I\'(x) = K\'(x)$'],
        solution: 'a) $O(x) = -0{,}002x^2 + 30x - 8000$, b) $O\'(x) = -0{,}004x + 30$, c) $7500$ enheter, d) $104500$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NOTE: TOLKNING ==========
    {
      id: 's1-4-2-note-tolkning',
      type: 'note',
      content: `**Økonomisk tolkning:**

- **Grensekostnad $K'(x)$**: Kostnaden ved å produsere én enhet til
- **Grenseinntekt $I'(x)$**: Inntekten ved å selge én enhet til
- **Grenseoverskudd $O'(x)$**: Endring i overskudd ved én enhet ekstra

Så lenge $I'(x) > K'(x)$, lønner det seg å øke produksjonen fordi hver ny enhet gir mer inntekt enn den koster.`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 's1-4-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}04x^2 + 60x + 5000$.`,
        subTasks: [
          { label: 'a', task: 'Finn grensekostnaden ved produksjon av 50 enheter.', solution: '$K\'(x) = 0{,}08x + 60$, $K\'(50) = 0{,}08 \\cdot 50 + 60 = 64$ kr', answer: 64 },
          { label: 'b', task: 'Beregn den faktiske kostnadsøkningen $K(51) - K(50)$.', solution: '$K(51) - K(50) = (0{,}04 \\cdot 51^2 + 60 \\cdot 51 + 5000) - (0{,}04 \\cdot 50^2 + 60 \\cdot 50 + 5000) = 8164{,}04 - 8100 = 64{,}04$ kr', answer: 64.04 },
          { label: 'c', task: 'Hvor stor er avviket mellom grensekostnaden og den faktiske kostnadsøkningen?', solution: 'Avvik: $64{,}04 - 64 = 0{,}04$ kr', answer: 0.04 },
        ],
        hints: ['$K\'(x)$ er en tilnærming til $K(x+1) - K(x)$.'],
        solution: 'a) $64$ kr, b) $64{,}04$ kr, c) $0{,}04$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 's1-4-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}001x^3 - 0{,}15x^2 + 30x + 5000$ og salgspris 60 kr per enhet.`,
        subTasks: [
          { label: 'a', task: 'Finn grensekostnaden $K\'(x)$.', solution: '$K\'(x) = 0{,}003x^2 - 0{,}3x + 30$' },
          { label: 'b', task: 'Finn optimal produksjonsmengde.', solution: '$I\'(x) = K\'(x) \\Rightarrow 60 = 0{,}003x^2 - 0{,}3x + 30 \\Rightarrow 0{,}003x^2 - 0{,}3x - 30 = 0 \\Rightarrow x^2 - 100x - 10000 = 0 \\Rightarrow x \\approx 182{,}3$ enheter' },
          { label: 'c', task: 'Beregn grensekostnaden ved optimal produksjon.', solution: '$K\'(182) = 0{,}003 \\cdot 182^2 - 0{,}3 \\cdot 182 + 30 \\approx 60$ kr (lik grenseinntekten)', answer: 60 },
        ],
        hints: ['Bruk abc-formelen for å løse andregradslikningen.'],
        solution: 'a) $K\'(x) = 0{,}003x^2 - 0{,}3x + 30$, b) $x \\approx 182$ enheter, c) $60$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 's1-4-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har grensekostnaden $K'(x) = 0{,}06x + 40$.`,
        subTasks: [
          { label: 'a', task: 'Hvis bedriften øker produksjonen fra 100 til 101 enheter, omtrent hvor mye øker kostnadene?', solution: '$K\'(100) = 0{,}06 \\cdot 100 + 40 = 46$ kr', answer: 46 },
          { label: 'b', task: 'Ved hvilken produksjonsmengde er grensekostnaden 100 kr?', solution: '$0{,}06x + 40 = 100 \\Rightarrow x = 1000$ enheter', answer: 1000 },
          { label: 'c', task: 'Hvis salgsprisen er 70 kr, ved hvilken produksjonsmengde er overskuddet maksimalt?', solution: '$I\'(x) = K\'(x) \\Rightarrow 70 = 0{,}06x + 40 \\Rightarrow x = 500$ enheter', answer: 500 },
        ],
        hints: ['Grensekostnaden gir tilnærmet kostnadsøkning ved én enhet ekstra.'],
        solution: 'a) $46$ kr, b) $1000$ enheter, c) $500$ enheter',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 's1-4-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bedrift produserer varer med kostnadsfunksjonen $K(x) = 0{,}008x^2 + 25x + 12000$.`,
        subTasks: [
          { label: 'a', task: 'Finn enhetskostnaden $E(x)$.', solution: '$E(x) = \\frac{K(x)}{x} = 0{,}008x + 25 + \\frac{12000}{x}$' },
          { label: 'b', task: 'Finn den deriverte av enhetskostnaden $E\'(x)$.', solution: '$E\'(x) = 0{,}008 - \\frac{12000}{x^2}$' },
          { label: 'c', task: 'Ved hvilken produksjonsmengde er enhetskostnaden lavest?', solution: '$E\'(x) = 0 \\Rightarrow 0{,}008 = \\frac{12000}{x^2} \\Rightarrow x^2 = 1500000 \\Rightarrow x \\approx 1225$ enheter' },
          { label: 'd', task: 'Vis at ved denne produksjonsmengden er enhetskostnaden lik grensekostnaden.', solution: '$E(1225) = 0{,}008 \\cdot 1225 + 25 + \\frac{12000}{1225} \\approx 9{,}8 + 25 + 9{,}8 = 44{,}6$ kr. $K\'(1225) = 0{,}016 \\cdot 1225 + 25 \\approx 44{,}6$ kr. Disse er (tilnærmet) like!' },
        ],
        hints: ['Deriver $E(x) = 0{,}008x + 25 + 12000x^{-1}$'],
        solution: 'a) $E(x) = 0{,}008x + 25 + \\frac{12000}{x}$, b) $E\'(x) = 0{,}008 - \\frac{12000}{x^2}$, c) $x \\approx 1225$ enheter, d) $E(1225) \\approx K\'(1225) \\approx 44{,}6$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9 ==========
    {
      id: 's1-4-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har overskuddsfunksjonen $O(x) = -0{,}02x^2 + 100x - 30000$.`,
        subTasks: [
          { label: 'a', task: 'Finn grenseoverskuddet $O\'(x)$.', solution: '$O\'(x) = -0{,}04x + 100$', expressionAnswer: '-0.04x+100' },
          { label: 'b', task: 'Ved hvilken produksjonsmengde er grenseoverskuddet null?', solution: '$-0{,}04x + 100 = 0 \\Rightarrow x = 2500$ enheter', answer: 2500 },
          { label: 'c', task: 'Er dette et maksimumspunkt? Begrunn svaret.', solution: 'Ja, fordi $O\'\'(x) = -0{,}04 < 0$, så funksjonen er konkav og punktet er et maksimum.' },
          { label: 'd', task: 'Finn det maksimale overskuddet.', solution: '$O(2500) = -0{,}02 \\cdot 2500^2 + 100 \\cdot 2500 - 30000 = 95000$ kr', answer: 95000 },
        ],
        hints: ['Bruk andrederiverten for å sjekke om det er maksimum.'],
        solution: 'a) $O\'(x) = -0{,}04x + 100$, b) $2500$ enheter, c) Ja, $O\'\'(x) < 0$, d) $95000$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 10 ==========
    {
      id: 's1-4-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bedrift vurderer å produsere en ny vare. Markedsanalysen gir følgende:
- Faste kostnader: 80 000 kr
- Variable kostnader per enhet: $20 + 0{,}01x$ kr (øker med produksjonen)
- Salgspris: 100 kr per enhet`,
        subTasks: [
          { label: 'a', task: 'Sett opp kostnadsfunksjonen $K(x)$.', solution: '$K(x) = (20 + 0{,}01x) \\cdot x + 80000 = 0{,}01x^2 + 20x + 80000$' },
          { label: 'b', task: 'Finn grensekostnaden.', solution: '$K\'(x) = 0{,}02x + 20$', expressionAnswer: '0.02x+20' },
          { label: 'c', task: 'Finn optimal produksjonsmengde.', solution: '$100 = 0{,}02x + 20 \\Rightarrow x = 4000$ enheter', answer: 4000 },
          { label: 'd', task: 'Beregn maksimalt overskudd.', solution: '$O(4000) = 100 \\cdot 4000 - (0{,}01 \\cdot 4000^2 + 20 \\cdot 4000 + 80000) = 400000 - 240000 = 160000$ kr', answer: 160000 },
        ],
        hints: ['Variable kostnader = kostnad per enhet $\\cdot$ antall enheter.'],
        solution: 'a) $K(x) = 0{,}01x^2 + 20x + 80000$, b) $K\'(x) = 0{,}02x + 20$, c) $4000$ enheter, d) $160000$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 11 ==========
    {
      id: 's1-4-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Tabellen viser grensekostnaden for ulike produksjonsmengder:

| $x$ | 0 | 100 | 200 | 300 | 400 | 500 |
|-----|---|-----|-----|-----|-----|-----|
| $K'(x)$ | 50 | 54 | 58 | 62 | 66 | 70 |`,
        subTasks: [
          { label: 'a', task: 'Vis at grensekostnaden er lineær, og finn uttrykket for $K\'(x)$.', solution: 'Differansen er konstant 4 per 100 enheter, så $K\'(x) = 0{,}04x + 50$', expressionAnswer: '0.04x+50' },
          { label: 'b', task: 'Hvis salgsprisen er 66 kr, ved hvilken produksjonsmengde er overskuddet maksimalt?', solution: '$66 = 0{,}04x + 50 \\Rightarrow x = 400$ enheter', answer: 400 },
          { label: 'c', task: 'Finn kostnadsfunksjonen $K(x)$ hvis de faste kostnadene er 10 000 kr.', solution: 'Integrasjon gir $K(x) = 0{,}02x^2 + 50x + C$. Med $K(0) = 10000$ får vi $K(x) = 0{,}02x^2 + 50x + 10000$' },
        ],
        hints: ['Grensekostnaden er den deriverte av kostnadsfunksjonen.'],
        solution: 'a) $K\'(x) = 0{,}04x + 50$, b) $400$ enheter, c) $K(x) = 0{,}02x^2 + 50x + 10000$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 12 ==========
    {
      id: 's1-4-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-4-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}015x^2 + 30x + 25000$ og selger til prisen $p$ kroner per enhet.`,
        subTasks: [
          { label: 'a', task: 'Finn et uttrykk for optimal produksjonsmengde som funksjon av prisen $p$.', solution: '$I\'(x) = K\'(x) \\Rightarrow p = 0{,}03x + 30 \\Rightarrow x = \\frac{p - 30}{0{,}03} = \\frac{100(p-30)}{3}$' },
          { label: 'b', task: 'Hva må prisen minst være for at det skal lønne seg å produsere?', solution: 'For $x > 0$: $p > 30$ kr. Prisen må være over 30 kr.' },
          { label: 'c', task: 'Finn optimal produksjonsmengde når prisen er 90 kr.', solution: '$x = \\frac{100(90-30)}{3} = \\frac{6000}{3} = 2000$ enheter', answer: 2000 },
          { label: 'd', task: 'Hva er grensekostnaden ved optimal produksjon når $p = 90$ kr?', solution: '$K\'(2000) = 0{,}03 \\cdot 2000 + 30 = 90$ kr (lik prisen!)', answer: 90 },
        ],
        hints: ['Ved optimal produksjon er grensekostnad = grenseinntekt = pris.'],
        solution: 'a) $x = \\frac{100(p-30)}{3}$, b) $p > 30$ kr, c) $2000$ enheter, d) $90$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_S1_4_3: TextbookChapter = {
  id: 's1-4-3',
  courseId: 's1',
  chapterNumber: '4.3',
  title: 'Etterspørsel og elastisitet',
  description: 'Lær om etterspørselsfunksjoner, sammenhengen mellom pris og etterspørsel, og priselastisitet.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke funksjonar til å modellere økonomiske samanhengar', 'tolke betydningen av den deriverte i ulike sammenhenger'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-4-3-intro',
      type: 'text',
      content: `# Etterspørsel og elastisitet

Så langt har vi antatt at bedriften kan selge så mange enheter den vil til en fast pris. I praksis vil ofte prisen påvirke hvor mange enheter som etterspørres. Når prisen går opp, synker vanligvis etterspørselen.

I dette kapittelet skal vi se på **etterspørselsfunksjoner** og et viktig begrep kalt **priselastisitet**.`,
    },

    // ========== ETTERSPØRSELSFUNKSJON ==========
    {
      id: 's1-4-3-section-ettersporsel',
      type: 'text',
      content: `## Etterspørselsfunksjonen

Etterspørselsfunksjonen beskriver sammenhengen mellom prisen på en vare og hvor mange enheter som etterspørres i markedet.`,
    },

    // ========== DEFINISJON: ETTERSPØRSELSFUNKSJON ==========
    {
      id: 's1-4-3-def-ettersporsel',
      type: 'definition',
      title: 'Etterspørselsfunksjon',
      content: `**Etterspørselsfunksjonen** $x(p)$ angir hvor mange enheter som etterspørres når prisen er $p$.

Alternativt kan vi uttrykke prisen som funksjon av mengden: $p(x)$ angir prisen som gir etterspørsel lik $x$.

Typisk egenskaper:
- $x'(p) < 0$: Etterspørselen synker når prisen øker
- $p'(x) < 0$: Prisen må senkes for å øke etterspørselen`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 's1-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Etterspørselsfunksjon',
      problem: `En bedrift har funnet at etterspørselen etter produktet deres kan beskrives med funksjonen:

$$x(p) = 1000 - 5p$$

der $p$ er prisen i kroner og $x$ er antall enheter.

a) Hvor mange enheter etterspørres når prisen er 100 kr?
b) Hvilken pris gir etterspørsel på 500 enheter?
c) Hva er maksimal pris bedriften kan ta?`,
      solution: `**Løsning:**

a) Vi setter inn $p = 100$:
$$x(100) = 1000 - 5 \\cdot 100 = 1000 - 500 = 500 \\text{ enheter}$$

b) Vi løser $x(p) = 500$:
$$1000 - 5p = 500$$
$$-5p = -500$$
$$p = 100 \\text{ kr}$$

c) Maksimal pris er når etterspørselen er 0:
$$x(p) = 0$$
$$1000 - 5p = 0$$
$$p = 200 \\text{ kr}$$

Ved pris over 200 kr vil ingen kjøpe produktet.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 's1-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `En bedrift har etterspørselsfunksjonen $x(p) = 800 - 4p$.`,
        subTasks: [
          { label: 'a', task: 'Hvor mange enheter etterspørres når prisen er 50 kr?', solution: '$x(50) = 800 - 4 \\cdot 50 = 600$ enheter', answer: 600 },
          { label: 'b', task: 'Hvilken pris gir etterspørsel på 400 enheter?', solution: '$800 - 4p = 400 \\Rightarrow p = 100$ kr', answer: 100 },
          { label: 'c', task: 'Hva er maksimal pris før etterspørselen blir null?', solution: '$800 - 4p = 0 \\Rightarrow p = 200$ kr', answer: 200 },
          { label: 'd', task: 'Hvor mange enheter etterspørres når varen er gratis?', solution: '$x(0) = 800 - 4 \\cdot 0 = 800$ enheter', answer: 800 },
        ],
        hints: ['Sett inn verdier eller løs likningen for den ukjente.'],
        solution: 'a) $600$ enheter, b) $100$ kr, c) $200$ kr, d) $800$ enheter',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== INNTEKT MED ETTERSPØRSEL ==========
    {
      id: 's1-4-3-section-inntekt',
      type: 'text',
      content: `## Inntekt med etterspørselsfunksjon

Når prisen påvirker etterspørselen, blir inntektsfunksjonen mer komplisert. Inntekten blir pris ganger mengde, der mengden avhenger av prisen.`,
    },

    // ========== DEFINISJON: INNTEKTSFUNKSJON MED ETTERSPØRSEL ==========
    {
      id: 's1-4-3-def-inntekt-ettersporsel',
      type: 'definition',
      title: 'Inntektsfunksjon med etterspørsel',
      content: `Når etterspørselen er $x(p) = a - bp$, blir inntekten som funksjon av pris:

$$I(p) = p \\cdot x(p) = p(a - bp) = ap - bp^2$$

Alternativt, hvis vi har $p(x)$, blir inntekten som funksjon av mengde:

$$I(x) = p(x) \\cdot x$$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 's1-4-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Inntekt med etterspørselsfunksjon',
      problem: `Etterspørselsfunksjonen er $x(p) = 1000 - 5p$.

a) Finn inntektsfunksjonen $I(p)$.
b) Ved hvilken pris er inntekten maksimal?
c) Hva er maksimal inntekt?`,
      solution: `**Løsning:**

a) Inntektsfunksjonen:
$$I(p) = p \\cdot x(p) = p(1000 - 5p) = 1000p - 5p^2$$

b) For maksimum setter vi $I'(p) = 0$:
$$I'(p) = 1000 - 10p = 0$$
$$p = 100 \\text{ kr}$$

c) Maksimal inntekt:
$$I(100) = 1000 \\cdot 100 - 5 \\cdot 100^2 = 100000 - 50000 = 50000 \\text{ kr}$$

Ved pris 100 kr selges $x(100) = 500$ enheter, og inntekten blir 50 000 kr.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 's1-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har etterspørselsfunksjonen $x(p) = 600 - 3p$.`,
        subTasks: [
          { label: 'a', task: 'Finn inntektsfunksjonen $I(p)$.', solution: '$I(p) = p \\cdot (600 - 3p) = 600p - 3p^2$' },
          { label: 'b', task: 'Finn $I\'(p)$.', solution: '$I\'(p) = 600 - 6p$', expressionAnswer: '600-6p' },
          { label: 'c', task: 'Ved hvilken pris er inntekten maksimal?', solution: '$I\'(p) = 0 \\Rightarrow 600 - 6p = 0 \\Rightarrow p = 100$ kr', answer: 100 },
          { label: 'd', task: 'Finn maksimal inntekt.', solution: '$I(100) = 600 \\cdot 100 - 3 \\cdot 100^2 = 30000$ kr', answer: 30000 },
        ],
        hints: ['$I(p) = p \\cdot x(p)$'],
        solution: 'a) $I(p) = 600p - 3p^2$, b) $I\'(p) = 600 - 6p$, c) $100$ kr, d) $30000$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRISELASTISITET ==========
    {
      id: 's1-4-3-section-elastisitet',
      type: 'text',
      content: `## Priselastisitet

Priselastisiteten forteller oss hvor følsom etterspørselen er for prisendringer. Den måler den prosentvise endringen i etterspørsel i forhold til den prosentvise endringen i pris.`,
    },

    // ========== DEFINISJON: PRISELASTISITET ==========
    {
      id: 's1-4-3-def-elastisitet',
      type: 'definition',
      title: 'Priselastisitet',
      content: `**Priselastisiteten** $e$ er definert som:

$$e = \\frac{\\text{prosentvis endring i etterspørsel}}{\\text{prosentvis endring i pris}} = \\frac{\\frac{\\Delta x}{x}}{\\frac{\\Delta p}{p}} = \\frac{p}{x} \\cdot \\frac{\\Delta x}{\\Delta p}$$

Ved bruk av derivasjon:
$$e = \\frac{p}{x} \\cdot \\frac{dx}{dp} = \\frac{p}{x(p)} \\cdot x'(p)$$

Eller hvis vi har $p(x)$:
$$e = \\frac{p(x)}{x} \\cdot \\frac{1}{p'(x)}$$`,
    },

    // ========== NOTE: TOLKNING ==========
    {
      id: 's1-4-3-note-elastisitet',
      type: 'note',
      content: `**Tolkning av priselastisitet:**

| Verdi | Betegnelse | Betydning |
|-------|------------|-----------|
| $|e| > 1$ | Elastisk | Etterspørselen er følsom for prisendringer |
| $|e| = 1$ | Enhetselastisk | Proporsjonal endring |
| $|e| < 1$ | Uelastisk | Etterspørselen er lite følsom for pris |

Merk: $e$ er vanligvis negativ (etterspørselen synker når prisen øker), men vi bruker ofte $|e|$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 's1-4-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Beregning av priselastisitet',
      problem: `Etterspørselsfunksjonen er $x(p) = 1000 - 5p$.

a) Finn et generelt uttrykk for priselastisiteten $e$.
b) Beregn priselastisiteten når $p = 50$ kr.
c) Beregn priselastisiteten når $p = 100$ kr.
d) Ved hvilken pris er etterspørselen enhetselastisk?`,
      solution: `**Løsning:**

a) Vi har $x(p) = 1000 - 5p$ og $x'(p) = -5$.

Priselastisiteten:
$$e = \\frac{p}{x(p)} \\cdot x'(p) = \\frac{p}{1000 - 5p} \\cdot (-5) = \\frac{-5p}{1000 - 5p}$$

b) For $p = 50$:
$$e = \\frac{-5 \\cdot 50}{1000 - 5 \\cdot 50} = \\frac{-250}{750} = -\\frac{1}{3} \\approx -0{,}33$$

$|e| < 1$: Etterspørselen er uelastisk. En prisøkning på 1% gir ca. 0,33% nedgang i etterspørsel.

c) For $p = 100$:
$$e = \\frac{-5 \\cdot 100}{1000 - 5 \\cdot 100} = \\frac{-500}{500} = -1$$

$|e| = 1$: Etterspørselen er enhetselastisk.

d) Enhetselastisk når $e = -1$:
$$\\frac{-5p}{1000 - 5p} = -1$$
$$5p = 1000 - 5p$$
$$10p = 1000$$
$$p = 100 \\text{ kr}$$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 's1-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har etterspørselsfunksjonen $x(p) = 800 - 4p$.`,
        subTasks: [
          { label: 'a', task: 'Finn $x\'(p)$.', solution: '$x\'(p) = -4$', answer: -4 },
          { label: 'b', task: 'Finn et uttrykk for priselastisiteten $e$.', solution: '$e = \\frac{p}{x(p)} \\cdot x\'(p) = \\frac{p}{800-4p} \\cdot (-4) = \\frac{-4p}{800-4p}$' },
          { label: 'c', task: 'Beregn priselastisiteten når $p = 50$ kr.', solution: '$e = \\frac{-4 \\cdot 50}{800 - 4 \\cdot 50} = \\frac{-200}{600} = -\\frac{1}{3}$' },
          { label: 'd', task: 'Ved hvilken pris er etterspørselen enhetselastisk?', solution: '$e = -1 \\Rightarrow \\frac{-4p}{800-4p} = -1 \\Rightarrow 4p = 800 - 4p \\Rightarrow p = 100$ kr', answer: 100 },
        ],
        hints: ['$e = \\frac{p}{x(p)} \\cdot x\'(p)$'],
        solution: 'a) $-4$, b) $e = \\frac{-4p}{800-4p}$, c) $-\\frac{1}{3}$, d) $100$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEOREM: ELASTISITET OG INNTEKT ==========
    {
      id: 's1-4-3-theorem-elastisitet-inntekt',
      type: 'theorem',
      title: 'Sammenheng mellom elastisitet og inntekt',
      content: `Priselastisiteten ved inntektsmaksimum er alltid $e = -1$ (enhetselastisk).

- Når $|e| > 1$ (elastisk): Prisreduksjon øker inntekten
- Når $|e| < 1$ (uelastisk): Prisøkning øker inntekten
- Når $|e| = 1$ (enhetselastisk): Inntekten er maksimal`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 's1-4-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Etterspørselsfunksjonen er $x(p) = 500 - 2p$.`,
        subTasks: [
          { label: 'a', task: 'Finn inntektsfunksjonen $I(p)$.', solution: '$I(p) = p(500 - 2p) = 500p - 2p^2$' },
          { label: 'b', task: 'Ved hvilken pris er inntekten maksimal?', solution: '$I\'(p) = 500 - 4p = 0 \\Rightarrow p = 125$ kr', answer: 125 },
          { label: 'c', task: 'Beregn priselastisiteten ved denne prisen.', solution: '$e = \\frac{p}{x(p)} \\cdot (-2) = \\frac{125}{500 - 2 \\cdot 125} \\cdot (-2) = \\frac{125}{250} \\cdot (-2) = -1$' },
          { label: 'd', task: 'Bekreft at $|e| = 1$ ved inntektsmaksimum.', solution: 'Vi fikk $e = -1$, så $|e| = 1$. Dette stemmer med teoremet!' },
        ],
        hints: ['Ved inntektsmaksimum er $|e| = 1$.'],
        solution: 'a) $I(p) = 500p - 2p^2$, b) $125$ kr, c) $e = -1$, d) Bekreftet',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 's1-4-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift selger et produkt der prisen kan uttrykkes som funksjon av mengden: $p(x) = 200 - 0{,}5x$.`,
        subTasks: [
          { label: 'a', task: 'Finn etterspørselen når prisen er 100 kr.', solution: '$100 = 200 - 0{,}5x \\Rightarrow x = 200$ enheter', answer: 200 },
          { label: 'b', task: 'Finn inntektsfunksjonen $I(x) = p(x) \\cdot x$.', solution: '$I(x) = (200 - 0{,}5x) \\cdot x = 200x - 0{,}5x^2$' },
          { label: 'c', task: 'Ved hvilken mengde er inntekten maksimal?', solution: '$I\'(x) = 200 - x = 0 \\Rightarrow x = 200$ enheter', answer: 200 },
          { label: 'd', task: 'Hva er prisen ved maksimal inntekt?', solution: '$p(200) = 200 - 0{,}5 \\cdot 200 = 100$ kr', answer: 100 },
        ],
        hints: ['Her er prisen gitt som funksjon av mengden, ikke omvendt.'],
        solution: 'a) $200$ enheter, b) $I(x) = 200x - 0{,}5x^2$, c) $200$ enheter, d) $100$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 's1-4-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `En dagligvarebutikk har funnet at etterspørselen etter melk kan beskrives med $x(p) = 2000 - 100p$ der $p$ er prisen i kroner per liter.`,
        subTasks: [
          { label: 'a', task: 'Beregn priselastisiteten når prisen er 10 kr.', solution: '$e = \\frac{p}{x(p)} \\cdot x\'(p) = \\frac{10}{2000 - 100 \\cdot 10} \\cdot (-100) = \\frac{10}{1000} \\cdot (-100) = -1$' },
          { label: 'b', task: 'Er etterspørselen elastisk eller uelastisk ved denne prisen?', solution: '$|e| = 1$, så etterspørselen er enhetselastisk.' },
          { label: 'c', task: 'Hvis prisen økes til 15 kr, hva blir elastisiteten?', solution: '$e = \\frac{15}{2000 - 1500} \\cdot (-100) = \\frac{15}{500} \\cdot (-100) = -3$. $|e| > 1$, elastisk.' },
          { label: 'd', task: 'Hva vil skje med inntekten hvis prisen økes fra 10 kr til 15 kr?', solution: 'Ved $p = 10$: $|e| = 1$, maksimal inntekt. Ved $p = 15$: $|e| = 3 > 1$, så prisøkning reduserer inntekten.' },
        ],
        hints: ['Bruk formelen $e = \\frac{p}{x(p)} \\cdot x\'(p)$'],
        solution: 'a) $e = -1$, b) Enhetselastisk, c) $e = -3$, elastisk, d) Inntekten reduseres',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 's1-4-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}02x^2 + 20x + 5000$ og etterspørselsfunksjonen $p(x) = 120 - 0{,}1x$ der $p$ er prisen og $x$ er mengden.`,
        subTasks: [
          { label: 'a', task: 'Finn inntektsfunksjonen $I(x)$.', solution: '$I(x) = p(x) \\cdot x = (120 - 0{,}1x) \\cdot x = 120x - 0{,}1x^2$' },
          { label: 'b', task: 'Finn overskuddsfunksjonen $O(x)$.', solution: '$O(x) = I(x) - K(x) = 120x - 0{,}1x^2 - (0{,}02x^2 + 20x + 5000) = -0{,}12x^2 + 100x - 5000$' },
          { label: 'c', task: 'Finn mengden som gir maksimalt overskudd.', solution: '$O\'(x) = -0{,}24x + 100 = 0 \\Rightarrow x \\approx 417$ enheter' },
          { label: 'd', task: 'Hvilken pris bør bedriften sette?', solution: '$p(417) = 120 - 0{,}1 \\cdot 417 = 78{,}3$ kr' },
        ],
        hints: ['Her er prisen avhengig av mengden, så inntekten blir $I(x) = p(x) \\cdot x$.'],
        solution: 'a) $I(x) = 120x - 0{,}1x^2$, b) $O(x) = -0{,}12x^2 + 100x - 5000$, c) $x \\approx 417$ enheter, d) $\\approx 78{,}3$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 's1-4-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `Priselastisiteten for et produkt er målt til $e = -2$ når prisen er 80 kr.`,
        subTasks: [
          { label: 'a', task: 'Hva betyr dette for etterspørselen?', solution: 'Etterspørselen er elastisk. En 1% prisøkning gir ca. 2% nedgang i etterspørsel.' },
          { label: 'b', task: 'Hvis prisen økes med 5%, omtrent hvor mye endres etterspørselen?', solution: 'Endring i etterspørsel $\\approx e \\cdot$ prisendring $= -2 \\cdot 5\\% = -10\\%$. Etterspørselen synker ca. 10%.' },
          { label: 'c', task: 'Bør bedriften øke eller senke prisen for å øke inntekten?', solution: 'Siden $|e| > 1$ (elastisk), bør bedriften senke prisen for å øke inntekten.' },
        ],
        hints: ['$|e| > 1$ betyr at etterspørselen er følsom for prisendringer.'],
        solution: 'a) Elastisk etterspørsel, b) Ca. 10% nedgang, c) Senke prisen',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9 ==========
    {
      id: 's1-4-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bedrift har etterspørselsfunksjonen $x(p) = \\frac{10000}{p}$ (konstantelastisk etterspørsel).`,
        subTasks: [
          { label: 'a', task: 'Finn $x\'(p)$.', solution: '$x\'(p) = -\\frac{10000}{p^2}$' },
          { label: 'b', task: 'Finn et uttrykk for priselastisiteten.', solution: '$e = \\frac{p}{x(p)} \\cdot x\'(p) = \\frac{p}{\\frac{10000}{p}} \\cdot \\left(-\\frac{10000}{p^2}\\right) = \\frac{p^2}{10000} \\cdot \\left(-\\frac{10000}{p^2}\\right) = -1$' },
          { label: 'c', task: 'Hva er spesielt med denne etterspørselsfunksjonen?', solution: 'Elastisiteten er konstant lik $-1$ for alle priser. Inntekten er den samme uansett pris!' },
          { label: 'd', task: 'Bekreft at inntekten er konstant.', solution: '$I(p) = p \\cdot x(p) = p \\cdot \\frac{10000}{p} = 10000$ kr. Konstant inntekt!' },
        ],
        hints: ['Deriver $x(p) = 10000 \\cdot p^{-1}$'],
        solution: 'a) $x\'(p) = -\\frac{10000}{p^2}$, b) $e = -1$, c) Konstant elastisitet, d) $I = 10000$ kr (konstant)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 10 ==========
    {
      id: 's1-4-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bedrift har kostnadsfunksjonen $K(x) = 10x + 1000$ og prisfunksjonen $p(x) = 50 - 0{,}2x$.`,
        subTasks: [
          { label: 'a', task: 'Finn inntektsfunksjonen og overskuddsfunksjonen.', solution: '$I(x) = (50 - 0{,}2x)x = 50x - 0{,}2x^2$, $O(x) = 50x - 0{,}2x^2 - 10x - 1000 = -0{,}2x^2 + 40x - 1000$' },
          { label: 'b', task: 'Finn grenseinntekten $I\'(x)$ og grensekostnaden $K\'(x)$.', solution: '$I\'(x) = 50 - 0{,}4x$, $K\'(x) = 10$' },
          { label: 'c', task: 'Finn optimal produksjonsmengde ved å sette $I\'(x) = K\'(x)$.', solution: '$50 - 0{,}4x = 10 \\Rightarrow x = 100$ enheter', answer: 100 },
          { label: 'd', task: 'Finn optimal pris og maksimalt overskudd.', solution: '$p(100) = 50 - 0{,}2 \\cdot 100 = 30$ kr, $O(100) = -0{,}2 \\cdot 100^2 + 40 \\cdot 100 - 1000 = 1000$ kr' },
        ],
        hints: ['Når prisen avhenger av mengden, er grenseinntekten $I\'(x) \\neq p$.'],
        solution: 'a) $I(x) = 50x - 0{,}2x^2$, $O(x) = -0{,}2x^2 + 40x - 1000$, b) $I\'(x) = 50 - 0{,}4x$, $K\'(x) = 10$, c) $100$ enheter, d) $30$ kr, $1000$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 11 ==========
    {
      id: 's1-4-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: `To produkter har følgende etterspørselsfunksjoner:
- Produkt A: $x_A(p) = 1000 - 10p$
- Produkt B: $x_B(p) = 500 - 2p$`,
        subTasks: [
          { label: 'a', task: 'Beregn priselastisiteten for begge produkter når prisen er 20 kr.', solution: 'A: $e_A = \\frac{20}{1000 - 200} \\cdot (-10) = -0{,}25$. B: $e_B = \\frac{20}{500 - 40} \\cdot (-2) = -0{,}087$' },
          { label: 'b', task: 'Hvilket produkt har mest elastisk etterspørsel ved denne prisen?', solution: '$|e_A| = 0{,}25 > |e_B| = 0{,}087$, så produkt A har mest elastisk etterspørsel.' },
          { label: 'c', task: 'For hvilket produkt vil en prisøkning ha størst effekt på etterspørselen?', solution: 'Produkt A. En prisøkning vil gi relativt større nedgang i etterspørselen for A enn for B.' },
        ],
        hints: ['Sammenlign absoluttverdien av elastisitetene.'],
        solution: 'a) $e_A = -0{,}25$, $e_B \\approx -0{,}087$, b) Produkt A, c) Produkt A',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 12 ==========
    {
      id: 's1-4-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-4-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En monopolist har kostnadsfunksjonen $K(x) = 0{,}5x^2 + 10x + 500$ og etterspørselsfunksjonen $x(p) = 200 - 2p$.`,
        subTasks: [
          { label: 'a', task: 'Uttrykk prisen som funksjon av mengden.', solution: '$x = 200 - 2p \\Rightarrow 2p = 200 - x \\Rightarrow p(x) = 100 - 0{,}5x$' },
          { label: 'b', task: 'Finn inntektsfunksjonen $I(x)$.', solution: '$I(x) = p(x) \\cdot x = (100 - 0{,}5x)x = 100x - 0{,}5x^2$' },
          { label: 'c', task: 'Finn overskuddsfunksjonen og optimal produksjonsmengde.', solution: '$O(x) = 100x - 0{,}5x^2 - 0{,}5x^2 - 10x - 500 = -x^2 + 90x - 500$. $O\'(x) = -2x + 90 = 0 \\Rightarrow x = 45$ enheter' },
          { label: 'd', task: 'Finn monopolprisen og maksimalt overskudd.', solution: '$p(45) = 100 - 0{,}5 \\cdot 45 = 77{,}5$ kr, $O(45) = -45^2 + 90 \\cdot 45 - 500 = 1525$ kr' },
        ],
        hints: ['Løs etterspørselsfunksjonen for $p$.'],
        solution: 'a) $p(x) = 100 - 0{,}5x$, b) $I(x) = 100x - 0{,}5x^2$, c) $O(x) = -x^2 + 90x - 500$, $x = 45$, d) $p = 77{,}5$ kr, $O = 1525$ kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_S1_5_1: TextbookChapter = {
  id: 's1-5-1',
  courseId: 's1',
  chapterNumber: '5.1',
  title: 'Kombinatorikk',
  description: 'Lær systematisk telling med multiplikasjonsprinsippet, permutasjoner og kombinasjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke kombinatorikk til å berekne sannsyn',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-5-1-intro',
      type: 'text',
      content: `## Hva er kombinatorikk?

Kombinatorikk handler om systematisk telling. Vi skal lære metoder for å telle antall mulige utfall uten å liste opp alle sammen.

**Eksempel:** Hvor mange forskjellige PIN-koder med 4 siffer finnes det? Å liste opp alle er upraktisk, men med kombinatorikk kan vi beregne dette raskt.

I dette kapittelet skal vi se på:
- Multiplikasjonsprinsippet
- Permutasjoner (ordnede utvalg)
- Kombinasjoner (uordnede utvalg)`,
    },

    {
      id: 's1-5-1-valgtre-bilde',
      type: 'image',
      src: '/images/s1/kombinatorikk-valgtre.svg',
      alt: 'Illustrasjon av et valgtre for systematisk telling',
      caption: 'Valgtre - visualisering av multiplikasjonsprinsippet',
    },

    {
      id: 's1-5-1-venn-bilde',
      type: 'image',
      src: '/images/s1/sannsynlighet-venn.svg',
      alt: 'Venn-diagram for sannsynlighet og hendelser',
      caption: 'Venn-diagram - visualisering av hendelser og sannsynlighet',
    },

    // ========== MULTIPLIKASJONSPRINSIPPET ==========
    {
      id: 's1-5-1-mult-prinsipp',
      type: 'text',
      content: `## Multiplikasjonsprinsippet

Multiplikasjonsprinsippet er grunnlaget for all kombinatorikk:

> Hvis en prosess kan gjennomfores i $k$ trinn, der trinn 1 kan gjores pa $n_1$ mater, trinn 2 kan gjores pa $n_2$ mater (uavhengig av trinn 1), osv., sa er totalt antall mater a gjennomfore hele prosessen:
> $$n_1 \\cdot n_2 \\cdot n_3 \\cdot \\ldots \\cdot n_k$$`,
    },

    {
      id: 's1-5-1-mult-def',
      type: 'definition',
      title: 'Multiplikasjonsprinsippet',
      content: `Hvis vi skal gjore $k$ uavhengige valg, og det forste valget kan gjores pa $n_1$ mater, det andre pa $n_2$ mater, osv., er totalt antall muligheter:

$$n_1 \\cdot n_2 \\cdot n_3 \\cdot \\ldots \\cdot n_k$$`,
    },

    // Eksempel 1: Multiplikasjonsprinsippet
    {
      id: 's1-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Antrekk',
      problem: `En person har 4 forskjellige skjorter og 3 forskjellige bukser. Hvor mange forskjellige antrekk kan personen velge?`,
      solution: `**Losning:**

Vi bruker multiplikasjonsprinsippet:

- Valg av skjorte: 4 muligheter
- Valg av bukse: 3 muligheter

Totalt antall antrekk = $4 \\cdot 3 = 12$

**Trediagram:**
\`\`\`
Skjorte 1 ─┬─ Bukse 1 → Antrekk 1
           ├─ Bukse 2 → Antrekk 2
           └─ Bukse 3 → Antrekk 3

Skjorte 2 ─┬─ Bukse 1 → Antrekk 4
           ├─ Bukse 2 → Antrekk 5
           └─ Bukse 3 → Antrekk 6

Skjorte 3 ─┬─ Bukse 1 → Antrekk 7
           ├─ Bukse 2 → Antrekk 8
           └─ Bukse 3 → Antrekk 9

Skjorte 4 ─┬─ Bukse 1 → Antrekk 10
           ├─ Bukse 2 → Antrekk 11
           └─ Bukse 3 → Antrekk 12
\`\`\`

Svaret er **12 antrekk**.`,
    },

    // Eksempel 2: PIN-kode
    {
      id: 's1-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2: PIN-koder',
      problem: `Hvor mange forskjellige 4-sifrede PIN-koder finnes det?`,
      solution: `**Losning:**

En PIN-kode bestar av 4 siffer, der hvert siffer kan vaere fra 0 til 9.

For hvert siffer har vi 10 muligheter (0, 1, 2, ..., 9).

Multiplikasjonsprinsippet gir:

$$10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10\\,000$$

Det finnes **10 000 forskjellige PIN-koder**.`,
    },

    // Oppgave 1
    {
      id: 's1-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-1',
        number: '5.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et spisested tilbyr 3 forretter, 5 hovedretter og 4 desserter. Hvor mange forskjellige treretters menyer kan man sette sammen?',
        solution: `Vi bruker multiplikasjonsprinsippet:

Antall menyer = $3 \\cdot 5 \\cdot 4 = 60$

Det finnes **60 forskjellige menyer**.`,
        hints: ['Bruk multiplikasjonsprinsippet: antall valg for forrett ganger antall valg for hovedrett ganger antall valg for dessert'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 's1-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et passord skal besta av 3 bokstaver (fra A til Z) etterfulgt av 2 siffer (fra 0 til 9). Hvor mange forskjellige passord kan lages?',
        solution: `Vi bruker multiplikasjonsprinsippet:

- Bokstav 1: 26 muligheter
- Bokstav 2: 26 muligheter
- Bokstav 3: 26 muligheter
- Siffer 1: 10 muligheter
- Siffer 2: 10 muligheter

Totalt: $26 \\cdot 26 \\cdot 26 \\cdot 10 \\cdot 10 = 26^3 \\cdot 10^2 = 17\\,576 \\cdot 100 = 1\\,757\\,600$

Det finnes **1 757 600 forskjellige passord**.`,
        hints: ['Det er 26 bokstaver i det engelske alfabetet og 10 siffer (0-9)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FAKULTET ==========
    {
      id: 's1-5-1-fakultet',
      type: 'text',
      content: `## Fakultet

Nar vi skal ordne $n$ objekter i rekkefolge, bruker vi fakultet.`,
    },

    {
      id: 's1-5-1-fakultet-def',
      type: 'definition',
      title: 'Fakultet',
      content: `For et positivt heltall $n$ er $n$ fakultet definert som:

$$n! = n \\cdot (n-1) \\cdot (n-2) \\cdot \\ldots \\cdot 2 \\cdot 1$$

Spesielt er $0! = 1$ (per definisjon).

**Eksempler:**
- $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$
- $4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$
- $3! = 3 \\cdot 2 \\cdot 1 = 6$`,
    },

    // Eksempel 3: Fakultet
    {
      id: 's1-5-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Rekkefolge av personer',
      problem: `Pa hvor mange mater kan 5 personer stille seg i ko?`,
      solution: `**Losning:**

Vi skal ordne 5 personer i rekkefolge.

- Forste plass: 5 muligheter
- Andre plass: 4 muligheter (en person er brukt)
- Tredje plass: 3 muligheter
- Fjerde plass: 2 muligheter
- Femte plass: 1 mulighet

Totalt: $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$

Det er **120 mater** a stille 5 personer i ko.`,
    },

    // Oppgave 3
    {
      id: 's1-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut folgende:',
        subTasks: [
          { label: 'a', task: '$6!$', solution: '$6! = 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720$' },
          { label: 'b', task: '$\\frac{8!}{6!}$', solution: '$\\frac{8!}{6!} = \\frac{8 \\cdot 7 \\cdot 6!}{6!} = 8 \\cdot 7 = 56$' },
          { label: 'c', task: '$\\frac{10!}{8! \\cdot 2!}$', solution: '$\\frac{10!}{8! \\cdot 2!} = \\frac{10 \\cdot 9 \\cdot 8!}{8! \\cdot 2} = \\frac{10 \\cdot 9}{2} = 45$' },
        ],
        solution: 'a) 720, b) 56, c) 45',
        hints: ['Husk at du kan forkorte fakultet: $\\frac{n!}{(n-k)!} = n \\cdot (n-1) \\cdot \\ldots \\cdot (n-k+1)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PERMUTASJONER ==========
    {
      id: 's1-5-1-perm',
      type: 'text',
      content: `## Permutasjoner

En permutasjon er et ordnet utvalg der rekkefolgen har betydning.`,
    },

    {
      id: 's1-5-1-perm-def',
      type: 'definition',
      title: 'Permutasjoner',
      content: `Antall mater a velge $r$ objekter fra $n$ forskjellige objekter nar **rekkefolgen har betydning** (ordnet utvalg):

$$P(n,r) = \\frac{n!}{(n-r)!} = n \\cdot (n-1) \\cdot (n-2) \\cdot \\ldots \\cdot (n-r+1)$$

**Spesialtilfelle:** Nar vi ordner alle $n$ objekter, far vi $P(n,n) = n!$`,
    },

    // Eksempel 4: Permutasjoner
    {
      id: 's1-5-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Pallplasser',
      problem: `I et lokalt lop deltar 8 personer. Pa hvor mange mater kan gull, solv og bronse fordeles?`,
      solution: `**Losning:**

Vi skal velge 3 personer fra 8, der rekkefolgen har betydning (gull ≠ solv ≠ bronse).

$$P(8,3) = \\frac{8!}{(8-3)!} = \\frac{8!}{5!} = 8 \\cdot 7 \\cdot 6 = 336$$

Alternativt:
- Gull: 8 muligheter
- Solv: 7 muligheter
- Bronse: 6 muligheter

Totalt: $8 \\cdot 7 \\cdot 6 = 336$

Det er **336 mater** a fordele pallplassene.`,
    },

    // Oppgave 4
    {
      id: 's1-5-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En klubb med 12 medlemmer skal velge president, visepresident og sekretaer. Pa hvor mange mater kan dette gjores?',
        solution: `Vi bruker permutasjoner fordi rekkefolgen (hvilken posisjon hver person far) har betydning:

$$P(12,3) = \\frac{12!}{(12-3)!} = \\frac{12!}{9!} = 12 \\cdot 11 \\cdot 10 = 1\\,320$$

Det er **1 320 mater** a velge styret.`,
        hints: ['Her har rekkefolgen betydning - president er ikke det samme som sekretaer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 's1-5-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et bibliotek har 7 forskjellige boker som skal plasseres pa en hylle. Pa hvor mange mater kan bokene ordnes?',
        solution: `Vi skal ordne alle 7 boker i rekkefolge:

$$P(7,7) = 7! = 7 \\cdot 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 5\\,040$$

Det er **5 040 mater** a ordne bokene.`,
        hints: ['Nar vi ordner alle objekter, bruker vi $n!$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KOMBINASJONER ==========
    {
      id: 's1-5-1-komb',
      type: 'text',
      content: `## Kombinasjoner

En kombinasjon er et uordnet utvalg der rekkefolgen **ikke** har betydning.`,
    },

    {
      id: 's1-5-1-komb-def',
      type: 'definition',
      title: 'Kombinasjoner',
      content: `Antall mater a velge $r$ objekter fra $n$ forskjellige objekter nar **rekkefolgen ikke har betydning** (uordnet utvalg):

$$C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$

Dette kalles ogsa "n over r" eller binomialkoeffisienten.

**Sammenheng med permutasjoner:**
$$C(n,r) = \\frac{P(n,r)}{r!}$$

Vi deler pa $r!$ fordi vi ikke bryr oss om rekkefolgen innad i utvalget.`,
    },

    // Eksempel 5: Kombinasjoner
    {
      id: 's1-5-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Lottotrekning',
      problem: `I en forenklet lottotrekning skal 6 tall trekkes fra tallene 1 til 34. Hvor mange forskjellige kombinasjoner finnes?`,
      solution: `**Losning:**

Her er rekkefolgen uviktig - det spiller ingen rolle om 7 trekkes for eller etter 23.

$$C(34,6) = \\binom{34}{6} = \\frac{34!}{6!(34-6)!} = \\frac{34!}{6! \\cdot 28!}$$

Vi regner:
$$= \\frac{34 \\cdot 33 \\cdot 32 \\cdot 31 \\cdot 30 \\cdot 29}{6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1}$$

$$= \\frac{34 \\cdot 33 \\cdot 32 \\cdot 31 \\cdot 30 \\cdot 29}{720}$$

$$= \\frac{968\\,330\\,880}{720} = 1\\,344\\,904$$

Det finnes **1 344 904 forskjellige kombinasjoner**.`,
    },

    // Eksempel 6: Kombinasjoner i praksis
    {
      id: 's1-5-1-example-6',
      type: 'example',
      title: 'Eksempel 6: Komitevalg',
      problem: `Fra en gruppe pa 10 studenter skal det velges en komite pa 4 personer. Pa hvor mange mater kan komiteen velges?`,
      solution: `**Losning:**

Her har rekkefolgen ingen betydning - alle komitemedlemmer er likeverdige.

$$C(10,4) = \\binom{10}{4} = \\frac{10!}{4! \\cdot 6!} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{5040}{24} = 210$$

Det er **210 mater** a velge komiteen.`,
    },

    // Oppgave 6
    {
      id: 's1-5-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-6',
        number: '5.1.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut folgende:',
        subTasks: [
          { label: 'a', task: '$\\binom{7}{3}$', solution: '$\\binom{7}{3} = \\frac{7!}{3! \\cdot 4!} = \\frac{7 \\cdot 6 \\cdot 5}{3 \\cdot 2 \\cdot 1} = \\frac{210}{6} = 35$' },
          { label: 'b', task: '$\\binom{8}{2}$', solution: '$\\binom{8}{2} = \\frac{8!}{2! \\cdot 6!} = \\frac{8 \\cdot 7}{2 \\cdot 1} = \\frac{56}{2} = 28$' },
          { label: 'c', task: '$\\binom{6}{6}$', solution: '$\\binom{6}{6} = \\frac{6!}{6! \\cdot 0!} = \\frac{1}{1} = 1$' },
          { label: 'd', task: '$\\binom{5}{0}$', solution: '$\\binom{5}{0} = \\frac{5!}{0! \\cdot 5!} = \\frac{1}{1} = 1$' },
        ],
        solution: 'a) 35, b) 28, c) 1, d) 1',
        hints: ['Bruk formelen $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$', 'Husk at $0! = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 's1-5-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-7',
        number: '5.1.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En handballklubb har 15 spillere. Treneren skal velge ut 7 spillere til en kamp. Pa hvor mange mater kan laget velges?',
        solution: `Rekkefolgen har ikke betydning - det er kun hvem som er med som teller.

$$C(15,7) = \\binom{15}{7} = \\frac{15!}{7! \\cdot 8!} = \\frac{15 \\cdot 14 \\cdot 13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{7!}$$

$$= \\frac{32\\,432\\,400}{5040} = 6\\,435$$

Det er **6 435 mater** a velge laget.`,
        hints: ['Her velger vi 7 fra 15 uten at rekkefolgen har betydning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PERMUTASJON VS KOMBINASJON ==========
    {
      id: 's1-5-1-sammenligning',
      type: 'text',
      content: `## Nar bruker vi hva?

| Situasjon | Formel | Eksempel |
|-----------|--------|----------|
| **Rekkefolgen teller** | $P(n,r) = \\frac{n!}{(n-r)!}$ | Pallplasser, PIN-koder |
| **Rekkefolgen teller ikke** | $C(n,r) = \\frac{n!}{r!(n-r)!}$ | Lotteri, velge lag |

**Huskeregel:**
- Permutasjon: "Posisjon matters" (P)
- Kombinasjon: "Collection only" (C)`,
    },

    // Oppgave 8
    {
      id: 's1-5-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-8',
        number: '5.1.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjor om det er permutasjon eller kombinasjon, og beregn antallet:',
        subTasks: [
          {
            label: 'a',
            task: 'Velge 3 representanter fra en gruppe pa 10 personer',
            solution: 'Kombinasjon: $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$'
          },
          {
            label: 'b',
            task: 'Dele ut forste-, andre- og tredjepremie til 3 av 10 deltakere',
            solution: 'Permutasjon: $P(10,3) = 10 \\cdot 9 \\cdot 8 = 720$'
          },
          {
            label: 'c',
            task: 'Velge 2 kort fra en kortstokk med 52 kort',
            solution: 'Kombinasjon: $\\binom{52}{2} = \\frac{52 \\cdot 51}{2} = 1\\,326$'
          },
        ],
        solution: 'a) 120 (kombinasjon), b) 720 (permutasjon), c) 1 326 (kombinasjon)',
        hints: ['Spor deg selv: Har det noe a si hvilken rekkefolge vi velger i?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KOMBINATORIKK OG SANNSYNLIGHET ==========
    {
      id: 's1-5-1-sannsynlighet',
      type: 'text',
      content: `## Kombinatorikk og sannsynlighet

Kombinatorikk er grunnlaget for a beregne sannsynligheter i situasjoner med like sannsynlige utfall:

$$P(A) = \\frac{\\text{Antall gunstige utfall}}{\\text{Antall mulige utfall}}$$

Ved a bruke kombinatorikk kan vi telle bade teller og nevner systematisk.`,
    },

    {
      id: 's1-5-1-kortstokk-info',
      type: 'tip',
      title: 'Om kortstokken',
      content: `En standard kortstokk har **52 kort** fordelt på **4 farger**:

| Farge | Symbol | Farge på kortet |
|-------|--------|-----------------|
| **Hjerter** | ♥ | Rød |
| **Ruter** | ♦ | Rød |
| **Spar** | ♠ | Sort |
| **Kløver** | ♣ | Sort |

Hver farge har **13 kort**: Ess (1), 2, 3, 4, 5, 6, 7, 8, 9, 10, Knekt, Dame, Konge.

**Nyttige tall:**
- Totalt: 52 kort
- Hver farge: 13 kort
- Røde kort: 26 (hjerter + ruter)
- Sorte kort: 26 (spar + kløver)
- Ess: 4 (ett i hver farge)
- Bildekort (knekt, dame, konge): 12 (3 per farge)`,
    },

    // Eksempel 7: Sannsynlighet med kombinatorikk
    {
      id: 's1-5-1-example-7',
      type: 'example',
      title: 'Eksempel 7: Pokerhender',
      problem: `Fra en kortstokk med 52 kort trekkes 5 kort tilfeldig. Hva er sannsynligheten for a fa noyaktig 3 ess?`,
      solution: `**Losning:**

**Antall mulige utfall:**
Vi velger 5 kort fra 52:
$$\\binom{52}{5} = \\frac{52!}{5! \\cdot 47!} = 2\\,598\\,960$$

**Antall gunstige utfall:**
- Velge 3 ess fra 4: $\\binom{4}{3} = 4$
- Velge 2 andre kort fra de 48 gjenvaerende: $\\binom{48}{2} = \\frac{48 \\cdot 47}{2} = 1\\,128$

Antall gunstige = $4 \\cdot 1\\,128 = 4\\,512$

**Sannsynlighet:**
$$P(3 \\text{ ess}) = \\frac{4\\,512}{2\\,598\\,960} \\approx 0{,}00174 \\approx 0{,}17\\%$$

Sannsynligheten for noyaktig 3 ess er ca. **0,17%**.`,
    },

    // Oppgave 9
    {
      id: 's1-5-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-9',
        number: '5.1.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En klasse har 12 jenter og 8 gutter. Det skal trekkes en gruppe pa 5 elever tilfeldig. Hva er sannsynligheten for at gruppen bestar av noyaktig 3 jenter og 2 gutter?',
        solution: `**Antall mulige utfall:**
$$\\binom{20}{5} = \\frac{20!}{5! \\cdot 15!} = \\frac{20 \\cdot 19 \\cdot 18 \\cdot 17 \\cdot 16}{120} = 15\\,504$$

**Antall gunstige utfall:**
- Velge 3 jenter fra 12: $\\binom{12}{3} = \\frac{12 \\cdot 11 \\cdot 10}{6} = 220$
- Velge 2 gutter fra 8: $\\binom{8}{2} = \\frac{8 \\cdot 7}{2} = 28$

Antall gunstige = $220 \\cdot 28 = 6\\,160$

**Sannsynlighet:**
$$P = \\frac{6\\,160}{15\\,504} = \\frac{385}{969} \\approx 0{,}397 \\approx 39{,}7\\%$$`,
        hints: ['Bruk multiplikasjonsprinsippet for a finne antall gunstige: velg jenter OG velg gutter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 's1-5-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-10',
        number: '5.1.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En veske inneholder 6 rode og 4 bla kuler. Det trekkes 3 kuler tilfeldig uten tilbakelegging. Finn sannsynligheten for at:',
        subTasks: [
          {
            label: 'a',
            task: 'Alle tre kulene er rode',
            solution: `$P = \\frac{\\binom{6}{3}}{\\binom{10}{3}} = \\frac{20}{120} = \\frac{1}{6} \\approx 16{,}7\\%$`
          },
          {
            label: 'b',
            task: 'Noyaktig 2 kuler er rode',
            solution: `$P = \\frac{\\binom{6}{2} \\cdot \\binom{4}{1}}{\\binom{10}{3}} = \\frac{15 \\cdot 4}{120} = \\frac{60}{120} = \\frac{1}{2} = 50\\%$`
          },
          {
            label: 'c',
            task: 'Minst 1 kule er bla',
            solution: `$P(\\text{minst 1 bla}) = 1 - P(\\text{ingen bla}) = 1 - \\frac{\\binom{6}{3}}{\\binom{10}{3}} = 1 - \\frac{20}{120} = \\frac{100}{120} = \\frac{5}{6} \\approx 83{,}3\\%$`
          },
        ],
        solution: 'a) 1/6, b) 1/2, c) 5/6',
        hints: ['Totalt antall mater a velge 3 kuler fra 10 er $\\binom{10}{3}$', 'For c) er det lettere a bruke komplementet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 's1-5-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-11',
        number: '5.1.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et sykehus har 5 leger og 8 sykepleiere. Det skal dannes et team pa 4 personer som ma inneholde minst 1 lege. Pa hvor mange mater kan teamet settes sammen?',
        solution: `**Metode 1: Dele opp i tilfeller**

- 1 lege og 3 sykepleiere: $\\binom{5}{1} \\cdot \\binom{8}{3} = 5 \\cdot 56 = 280$
- 2 leger og 2 sykepleiere: $\\binom{5}{2} \\cdot \\binom{8}{2} = 10 \\cdot 28 = 280$
- 3 leger og 1 sykepleier: $\\binom{5}{3} \\cdot \\binom{8}{1} = 10 \\cdot 8 = 80$
- 4 leger og 0 sykepleiere: $\\binom{5}{4} \\cdot \\binom{8}{0} = 5 \\cdot 1 = 5$

Totalt: $280 + 280 + 80 + 5 = 645$

**Metode 2: Bruke komplementet**

Alle team minus team uten leger:
$$\\binom{13}{4} - \\binom{8}{4} = 715 - 70 = 645$$

Det er **645 mater** a sette sammen teamet.`,
        hints: ['Du kan enten dele opp i tilfeller (1 lege, 2 leger, osv.) eller bruke komplementet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 's1-5-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-5-1-ex-12',
        number: '5.1.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I Lotto velges 7 tall fra tallene 1-34. Det trekkes ogsa 3 tilleggstall. Hva er sannsynligheten for a fa 4 rette pluss 1 tilleggstall?',
        solution: `**Antall mulige utfall:**
$$\\binom{34}{7} = 5\\,379\\,616$$

**Antall gunstige utfall:**

For 4 rette + 1 tilleggstall:
- Velge 4 av de 7 vinnertallene: $\\binom{7}{4} = 35$
- Velge 1 av de 3 tilleggstallene: $\\binom{3}{1} = 3$
- Velge 2 av de 24 tapertallene (ikke vinnertall, ikke tilleggstall): $\\binom{24}{2} = 276$

Antall gunstige = $35 \\cdot 3 \\cdot 276 = 28\\,980$

**Sannsynlighet:**
$$P = \\frac{28\\,980}{5\\,379\\,616} \\approx 0{,}00539 \\approx 0{,}54\\%$$

Sannsynligheten er ca. **0,54%** eller omtrent 1 av 186.`,
        hints: ['Del opp: velg vinnertall, velg tilleggstall, velg "tapere"', 'Det er 34 - 7 - 3 = 24 "tapere"'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 's1-5-1-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Multiplikasjonsprinsippet:**
$n_1 \\cdot n_2 \\cdot \\ldots \\cdot n_k$ for uavhengige valg

**Fakultet:**
$n! = n \\cdot (n-1) \\cdot \\ldots \\cdot 2 \\cdot 1$

**Permutasjoner (ordnet utvalg):**
$P(n,r) = \\frac{n!}{(n-r)!}$

**Kombinasjoner (uordnet utvalg):**
$C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$

**Sannsynlighet:**
$P(A) = \\frac{\\text{gunstige}}{\\text{mulige}}$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_S1_5_2: TextbookChapter = {
  id: 's1-5-2',
  courseId: 's1',
  chapterNumber: '5.2',
  title: 'Betinget sannsynlighet',
  description: 'Lær om betinget sannsynlighet, uavhengige hendelser og produktregelen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke kombinatorikk til å berekne sannsyn',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-5-2-intro',
      type: 'text',
      content: `## Betinget sannsynlighet

Ofte onsker vi a finne sannsynligheten for at en hendelse A inntreffer, gitt at vi allerede vet at en annen hendelse B har inntruffet. Dette kalles **betinget sannsynlighet**.

**Eksempel:** Hva er sannsynligheten for at en tilfeldig valgt student bestar eksamen, gitt at studenten har gjort alle obliger?

Notasjon: $P(A|B)$ leses "sannsynligheten for A gitt B".`,
    },

    {
      id: 's1-5-2-betinget-bilde',
      type: 'image',
      src: '/images/s1/betinget-sannsynlighet.svg',
      alt: 'Illustrasjon av betinget sannsynlighet med Venn-diagram',
      caption: 'Betinget sannsynlighet - sannsynlighet for A gitt at B har inntruffet',
    },

    // ========== DEFINISJON ==========
    {
      id: 's1-5-2-def',
      type: 'definition',
      title: 'Betinget sannsynlighet',
      content: `La $A$ og $B$ vaere to hendelser der $P(B) > 0$. Den **betingede sannsynligheten** for $A$ gitt $B$ er:

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

der $P(A \\cap B)$ er sannsynligheten for at bade $A$ og $B$ inntreffer.`,
    },

    {
      id: 's1-5-2-forklaring',
      type: 'text',
      content: `### Intuisjon bak formelen

Nar vi vet at $B$ har inntruffet, begrenser vi oss til utfall i $B$. Da blir $B$ var nye "totalmengde", og vi ser pa hvor stor del av $B$ som ogsa tilhorer $A$.

**Venndiagram-tolkning:**

\`\`\`
    ┌─────────────────────────────┐
    │           S                 │
    │   ┌───────┬───────┐         │
    │   │   A   │A ∩ B  │   B     │
    │   │       │       │         │
    │   └───────┴───────┘         │
    │                             │
    └─────────────────────────────┘
\`\`\`

$P(A|B)$ er forholdet mellom snittet $A \\cap B$ og hele $B$.`,
    },

    // Eksempel 1
    {
      id: 's1-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Korttrekning',
      problem: `Fra en kortstokk trekkes ett kort. Gitt at kortet er et bildekort (knekt, dame eller konge), hva er sannsynligheten for at det er hjerter?`,
      solution: `**Losning:**

La:
- $A$ = kortet er hjerter
- $B$ = kortet er et bildekort

En kortstokk har 52 kort, 12 bildekort (3 i hver farge), og 3 hjerter-bildekort.

**Metode 1: Bruk formelen**
$$P(B) = \\frac{12}{52} = \\frac{3}{13}$$
$$P(A \\cap B) = \\frac{3}{52} \\quad \\text{(3 hjerter-bildekort)}$$
$$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{3/52}{12/52} = \\frac{3}{12} = \\frac{1}{4}$$

**Metode 2: Direkte tenkning**

Gitt at vi har et bildekort, er det 12 mulige kort.
Av disse er 3 hjerter.
$$P(A|B) = \\frac{3}{12} = \\frac{1}{4} = 25\\%$$

Sannsynligheten er **25%** eller **1/4**.`,
    },

    // Oppgave 1
    {
      id: 's1-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-1',
        number: '5.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'I en klasse med 30 elever spiller 18 fotball og 12 handball. 6 elever spiller bade fotball og handball. En tilfeldig elev velges. Gitt at eleven spiller fotball, hva er sannsynligheten for at eleven ogsa spiller handball?',
        solution: `La:
- $A$ = spiller handball
- $B$ = spiller fotball

Vi har:
- $P(B) = \\frac{18}{30} = \\frac{3}{5}$
- $P(A \\cap B) = \\frac{6}{30} = \\frac{1}{5}$

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{1/5}{3/5} = \\frac{1}{3} \\approx 33{,}3\\%$$

Alternativt: Av de 18 som spiller fotball, spiller 6 ogsa handball.
$$P(A|B) = \\frac{6}{18} = \\frac{1}{3}$$`,
        hints: ['Bruk formelen $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 's1-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'To terninger kastes. Gitt at summen er minst 10, hva er sannsynligheten for at minst en terning viser 6?',
        solution: `La:
- $A$ = minst en terning viser 6
- $B$ = summen er minst 10

**Utfall med sum ≥ 10:**
(4,6), (5,5), (5,6), (6,4), (6,5), (6,6) - 6 utfall

**Av disse, hvilke har minst en 6:**
(4,6), (5,6), (6,4), (6,5), (6,6) - 5 utfall

$$P(A|B) = \\frac{5}{6} \\approx 83{,}3\\%$$`,
        hints: ['List opp alle utfall der summen er minst 10, og tell hvor mange som har minst en sekser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRODUKTREGELEN ==========
    {
      id: 's1-5-2-produkt',
      type: 'text',
      content: `## Produktregelen

Fra definisjonen av betinget sannsynlighet kan vi utlede produktregelen:`,
    },

    {
      id: 's1-5-2-produkt-def',
      type: 'theorem',
      title: 'Produktregelen',
      content: `For to hendelser $A$ og $B$:

$$P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$$

For tre hendelser:
$$P(A \\cap B \\cap C) = P(A) \\cdot P(B|A) \\cdot P(C|A \\cap B)$$`,
    },

    // Eksempel 2
    {
      id: 's1-5-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Trekning uten tilbakelegging',
      problem: `En veske inneholder 5 rode og 3 bla kuler. Det trekkes to kuler uten tilbakelegging. Hva er sannsynligheten for at begge kulene er rode?`,
      solution: `**Losning med trediagram:**

\`\`\`
                    Forste trekning
                         │
            ┌────────────┴────────────┐
            │                         │
         Rod (5/8)               Bla (3/8)
            │                         │
   ┌────────┴────────┐       ┌────────┴────────┐
   │                 │       │                 │
Rod (4/7)       Bla (3/7)  Rod (5/7)      Bla (2/7)
   │                 │       │                 │
  RR               RB       BR              BB
\`\`\`

La:
- $A$ = forste kule er rod
- $B$ = andre kule er rod

$$P(A) = \\frac{5}{8}$$
$$P(B|A) = \\frac{4}{7} \\quad \\text{(4 rode igjen av 7 kuler)}$$

Produktregelen:
$$P(A \\cap B) = P(A) \\cdot P(B|A) = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14} \\approx 35{,}7\\%$$`,
    },

    // Oppgave 3
    {
      id: 's1-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En kortstokk har 52 kort. Det trekkes to kort uten tilbakelegging. Hva er sannsynligheten for at begge kortene er ess?',
        solution: `La:
- $A$ = forste kort er ess
- $B$ = andre kort er ess

$$P(A) = \\frac{4}{52} = \\frac{1}{13}$$

Gitt at forste kort er ess, er det 3 ess igjen av 51 kort:
$$P(B|A) = \\frac{3}{51} = \\frac{1}{17}$$

Produktregelen:
$$P(A \\cap B) = P(A) \\cdot P(B|A) = \\frac{1}{13} \\cdot \\frac{1}{17} = \\frac{1}{221} \\approx 0{,}45\\%$$

Alternativt med kombinatorikk:
$$P = \\frac{\\binom{4}{2}}{\\binom{52}{2}} = \\frac{6}{1326} = \\frac{1}{221}$$`,
        hints: ['Bruk produktregelen: $P(A \\cap B) = P(A) \\cdot P(B|A)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 's1-5-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En skuff inneholder 10 sorte og 6 hvite sokker. Du trekker 2 sokker tilfeldig i morket (uten tilbakelegging). Hva er sannsynligheten for at du far et matchende par?',
        solution: `Et matchende par betyr enten to sorte eller to hvite.

**To sorte:**
$$P(SS) = \\frac{10}{16} \\cdot \\frac{9}{15} = \\frac{90}{240} = \\frac{3}{8}$$

**To hvite:**
$$P(HH) = \\frac{6}{16} \\cdot \\frac{5}{15} = \\frac{30}{240} = \\frac{1}{8}$$

**Matchende par (enten-eller):**
$$P(\\text{match}) = P(SS) + P(HH) = \\frac{3}{8} + \\frac{1}{8} = \\frac{4}{8} = \\frac{1}{2} = 50\\%$$`,
        hints: ['Match kan skje pa to mater: to sorte ELLER to hvite'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== UAVHENGIGE HENDELSER ==========
    {
      id: 's1-5-2-uavh',
      type: 'text',
      content: `## Uavhengige hendelser

To hendelser er uavhengige hvis det at den ene inntreffer ikke pavirker sannsynligheten for den andre.`,
    },

    {
      id: 's1-5-2-uavh-def',
      type: 'definition',
      title: 'Uavhengige hendelser',
      content: `To hendelser $A$ og $B$ er **uavhengige** hvis og bare hvis:

$$P(A \\cap B) = P(A) \\cdot P(B)$$

Ekvivalent: $P(A|B) = P(A)$ og $P(B|A) = P(B)$

**Eksempler pa uavhengige hendelser:**
- To terningkast
- Myntkast og terningkast
- Trekning med tilbakelegging`,
    },

    {
      id: 's1-5-2-uavh-advarsel',
      type: 'warning',
      title: 'Viktig om uavhengighet',
      content: `Uavhengighet er **ikke** det samme som disjunkte hendelser!

- **Disjunkte hendelser** ($A \\cap B = \\emptyset$): Kan ikke inntreffe samtidig
- **Uavhengige hendelser**: En hendelse pavirker ikke sannsynligheten for den andre

Disjunkte hendelser med positiv sannsynlighet er faktisk **avhengige**: Hvis $A$ inntreffer, vet vi at $B$ ikke kan inntreffe.`,
    },

    // Eksempel 3
    {
      id: 's1-5-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Uavhengige hendelser',
      problem: `En mynt kastes og en terning kastes. Hva er sannsynligheten for a fa kron og 6?`,
      solution: `**Losning:**

La:
- $A$ = mynt viser kron
- $B$ = terning viser 6

Disse hendelsene er uavhengige (myntkastet pavirker ikke terningkastet).

$$P(A) = \\frac{1}{2}, \\quad P(B) = \\frac{1}{6}$$

For uavhengige hendelser:
$$P(A \\cap B) = P(A) \\cdot P(B) = \\frac{1}{2} \\cdot \\frac{1}{6} = \\frac{1}{12} \\approx 8{,}3\\%$$`,
    },

    // Eksempel 4
    {
      id: 's1-5-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Teste for uavhengighet',
      problem: `I en undersokelse av 100 studenter fikk man folgende data:

|  | Bestar | Stryker | Sum |
|--|--------|---------|-----|
| Gjor obliger | 54 | 6 | 60 |
| Gjor ikke obliger | 24 | 16 | 40 |
| **Sum** | 78 | 22 | 100 |

Er hendelsene "gjor obliger" og "bestar" uavhengige?`,
      solution: `**Losning:**

La:
- $A$ = studenten bestar
- $B$ = studenten gjor obliger

Vi sjekker om $P(A \\cap B) = P(A) \\cdot P(B)$:

$$P(A) = \\frac{78}{100} = 0{,}78$$
$$P(B) = \\frac{60}{100} = 0{,}60$$
$$P(A) \\cdot P(B) = 0{,}78 \\cdot 0{,}60 = 0{,}468$$

$$P(A \\cap B) = \\frac{54}{100} = 0{,}54$$

Siden $0{,}54 \\neq 0{,}468$, er hendelsene **ikke uavhengige**.

Vi kan ogsa se at:
$$P(A|B) = \\frac{54}{60} = 0{,}90 \\neq P(A) = 0{,}78$$

Studenter som gjor obliger har hoyere sannsynlighet for a besta.`,
    },

    // Oppgave 5
    {
      id: 's1-5-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'En terning kastes tre ganger. Hva er sannsynligheten for a fa 6 alle tre gangene?',
        solution: `Kastene er uavhengige.

La $A_i$ = kast $i$ viser 6, for $i = 1, 2, 3$.

$$P(A_1 \\cap A_2 \\cap A_3) = P(A_1) \\cdot P(A_2) \\cdot P(A_3) = \\frac{1}{6} \\cdot \\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{216} \\approx 0{,}46\\%$$`,
        hints: ['Ved uavhengige hendelser ganger vi sannsynlighetene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 's1-5-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-6',
        number: '5.2.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En maskin produserer deler der 5% er defekte. Tre deler velges tilfeldig og uavhengig. Hva er sannsynligheten for at:',
        subTasks: [
          {
            label: 'a',
            task: 'Alle tre er defekte',
            solution: '$P = 0{,}05^3 = 0{,}000125 = 0{,}0125\\%$'
          },
          {
            label: 'b',
            task: 'Ingen er defekte',
            solution: '$P = 0{,}95^3 = 0{,}857375 \\approx 85{,}7\\%$'
          },
          {
            label: 'c',
            task: 'Minst en er defekt',
            solution: '$P = 1 - 0{,}95^3 = 1 - 0{,}857375 = 0{,}142625 \\approx 14{,}3\\%$'
          },
        ],
        solution: 'a) 0,0125%, b) 85,7%, c) 14,3%',
        hints: ['For c) bruk komplementet: $P(\\text{minst en}) = 1 - P(\\text{ingen})$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 's1-5-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-7',
        number: '5.2.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En test for en sykdom har folgende egenskaper: 95% av de syke tester positivt (sensitivitet) og 90% av de friske tester negativt (spesifisitet). I befolkningen er 1% smittet. Hva er sannsynligheten for at en tilfeldig person tester positivt?',
        solution: `La:
- $S$ = syk
- $F$ = frisk
- $+$ = tester positivt

Vi har:
- $P(S) = 0{,}01$, $P(F) = 0{,}99$
- $P(+|S) = 0{,}95$
- $P(+|F) = 1 - 0{,}90 = 0{,}10$ (falsk positiv)

**Totalsetningen:**
$$P(+) = P(+|S) \\cdot P(S) + P(+|F) \\cdot P(F)$$
$$P(+) = 0{,}95 \\cdot 0{,}01 + 0{,}10 \\cdot 0{,}99$$
$$P(+) = 0{,}0095 + 0{,}099 = 0{,}1085 \\approx 10{,}9\\%$$`,
        hints: ['Bruk totalsetningen: $P(+) = P(+|S) \\cdot P(S) + P(+|F) \\cdot P(F)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TOTALSETNINGEN ==========
    {
      id: 's1-5-2-total',
      type: 'text',
      content: `## Totalsetningen (setningen om total sannsynlighet)

Totalsetningen lar oss beregne sannsynligheten for en hendelse ved a dele opp i gjensidig utelukkende tilfeller.`,
    },

    {
      id: 's1-5-2-total-def',
      type: 'theorem',
      title: 'Totalsetningen',
      content: `La $B_1, B_2, \\ldots, B_n$ vaere gjensidig utelukkende hendelser som dekker hele utfallsrommet (en partisjon). Da er:

$$P(A) = P(A|B_1) \\cdot P(B_1) + P(A|B_2) \\cdot P(B_2) + \\ldots + P(A|B_n) \\cdot P(B_n)$$

Ofte brukt med to tilfeller ($B$ og $\\overline{B}$):
$$P(A) = P(A|B) \\cdot P(B) + P(A|\\overline{B}) \\cdot P(\\overline{B})$$`,
    },

    // Eksempel 5
    {
      id: 's1-5-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Totalsetningen med trediagram',
      problem: `En fabrikk har to maskiner, M1 og M2. M1 produserer 60% av alle deler og M2 produserer 40%. Av delene fra M1 er 2% defekte, mens 5% av delene fra M2 er defekte. Hva er sannsynligheten for at en tilfeldig valgt del er defekt?`,
      solution: `**Trediagram:**

\`\`\`
                      Start
                        │
         ┌──────────────┴──────────────┐
         │                             │
      M1 (0,60)                    M2 (0,40)
         │                             │
    ┌────┴────┐                   ┌────┴────┐
    │         │                   │         │
Defekt    OK                  Defekt    OK
(0,02)   (0,98)              (0,05)   (0,95)
\`\`\`

La:
- $D$ = defekt del
- $M_1$ = del fra maskin 1
- $M_2$ = del fra maskin 2

**Totalsetningen:**
$$P(D) = P(D|M_1) \\cdot P(M_1) + P(D|M_2) \\cdot P(M_2)$$
$$P(D) = 0{,}02 \\cdot 0{,}60 + 0{,}05 \\cdot 0{,}40$$
$$P(D) = 0{,}012 + 0{,}020 = 0{,}032 = 3{,}2\\%$$

Sannsynligheten for en defekt del er **3,2%**.`,
    },

    // Oppgave 8
    {
      id: 's1-5-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-8',
        number: '5.2.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'En veske inneholder 3 rode og 2 bla kuler. En kule trekkes tilfeldig. Hvis kulen er rod, legges den tilbake og 2 rode kuler legges til. Hvis kulen er bla, legges ingen kuler tilbake. Deretter trekkes en ny kule. Hva er sannsynligheten for at den andre kulen er rod?',
        solution: `**Trediagram:**

\`\`\`
                    1. trekning
                        │
         ┌──────────────┴──────────────┐
         │                             │
      Rod (3/5)                   Bla (2/5)
         │                             │
    Vesken har                   Vesken har
    5 rode, 2 bla               3 rode, 1 bla
         │                             │
    ┌────┴────┐                   ┌────┴────┐
Rod (5/7)   Bla (2/7)        Rod (3/4)   Bla (1/4)
\`\`\`

La $R_2$ = andre kule er rod.

**Totalsetningen:**
$$P(R_2) = P(R_2|R_1) \\cdot P(R_1) + P(R_2|B_1) \\cdot P(B_1)$$
$$P(R_2) = \\frac{5}{7} \\cdot \\frac{3}{5} + \\frac{3}{4} \\cdot \\frac{2}{5}$$
$$P(R_2) = \\frac{15}{35} + \\frac{6}{20} = \\frac{3}{7} + \\frac{3}{10}$$
$$P(R_2) = \\frac{30}{70} + \\frac{21}{70} = \\frac{51}{70} \\approx 72{,}9\\%$$`,
        hints: ['Tegn et trediagram der forste forgrening er 1. trekning og andre er 2. trekning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 's1-5-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-9',
        number: '5.2.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I en by er 70% av innbyggerne kvinner og 30% menn. 40% av kvinnene og 30% av mennene bruker kollektivtransport.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er sannsynligheten for at en tilfeldig innbygger bruker kollektivtransport?',
            solution: '$P(K) = 0{,}40 \\cdot 0{,}70 + 0{,}30 \\cdot 0{,}30 = 0{,}28 + 0{,}09 = 0{,}37 = 37\\%$'
          },
          {
            label: 'b',
            task: 'Gitt at en person bruker kollektivtransport, hva er sannsynligheten for at personen er kvinne?',
            solution: '$P(\\text{kvinne}|K) = \\frac{0{,}40 \\cdot 0{,}70}{0{,}37} = \\frac{0{,}28}{0{,}37} \\approx 0{,}757 \\approx 75{,}7\\%$'
          },
        ],
        solution: 'a) 37%, b) 75,7%',
        hints: ['For b) bruk Bayes setning eller definisjonen av betinget sannsynlighet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 's1-5-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-10',
        number: '5.2.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et firma har tre avdelinger: A, B og C. Avdeling A har 50 ansatte, B har 30 og C har 20. I avdeling A er 40% kvinner, i B er 60% kvinner, og i C er 50% kvinner. En ansatt velges tilfeldig. Gitt at personen er kvinne, hva er sannsynligheten for at hun jobber i avdeling B?',
        solution: `Totalt 100 ansatte. La $K$ = kvinne.

**Antall kvinner per avdeling:**
- A: $50 \\cdot 0{,}40 = 20$ kvinner
- B: $30 \\cdot 0{,}60 = 18$ kvinner
- C: $20 \\cdot 0{,}50 = 10$ kvinner

Totalt: 48 kvinner

**Med betinget sannsynlighet:**
$$P(B|K) = \\frac{P(K|B) \\cdot P(B)}{P(K)}$$

$$P(B) = \\frac{30}{100} = 0{,}30$$
$$P(K|B) = 0{,}60$$
$$P(K) = \\frac{48}{100} = 0{,}48$$

$$P(B|K) = \\frac{0{,}60 \\cdot 0{,}30}{0{,}48} = \\frac{0{,}18}{0{,}48} = \\frac{18}{48} = \\frac{3}{8} = 37{,}5\\%$$`,
        hints: ['Finn forst totalt antall kvinner, deretter bruk Bayes setning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 's1-5-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-11',
        number: '5.2.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En mynt er enten rettferdig (50% kron) eller skjev (70% kron). Det er 60% sannsynlig at mynten er rettferdig. Mynten kastes og viser kron. Hva er den oppdaterte sannsynligheten for at mynten er rettferdig?',
        solution: `La:
- $R$ = rettferdig mynt
- $S$ = skjev mynt
- $K$ = kron

Gitt:
- $P(R) = 0{,}60$, $P(S) = 0{,}40$
- $P(K|R) = 0{,}50$, $P(K|S) = 0{,}70$

**Totalsetningen:**
$$P(K) = P(K|R) \\cdot P(R) + P(K|S) \\cdot P(S)$$
$$P(K) = 0{,}50 \\cdot 0{,}60 + 0{,}70 \\cdot 0{,}40 = 0{,}30 + 0{,}28 = 0{,}58$$

**Bayes setning:**
$$P(R|K) = \\frac{P(K|R) \\cdot P(R)}{P(K)} = \\frac{0{,}50 \\cdot 0{,}60}{0{,}58} = \\frac{0{,}30}{0{,}58} \\approx 0{,}517$$

Den oppdaterte sannsynligheten for rettferdig mynt er ca. **51,7%** (ned fra 60%).`,
        hints: ['Bruk Bayes setning for a oppdatere sannsynligheten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 's1-5-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-5-2-ex-12',
        number: '5.2.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I et spill kastes en terning forst. Hvis terningen viser 1 eller 2, trekkes et kort fra en bunke med 3 rode og 2 svarte kort. Ellers trekkes fra en bunke med 2 rode og 4 svarte kort. Hva er sannsynligheten for a trekke et rodt kort? Gitt at kortet er rodt, hva er sannsynligheten for at terningen viste 1 eller 2?',
        solution: `La:
- $T_1$ = terning viser 1 eller 2, $P(T_1) = \\frac{2}{6} = \\frac{1}{3}$
- $T_2$ = terning viser 3-6, $P(T_2) = \\frac{4}{6} = \\frac{2}{3}$
- $R$ = rodt kort

**Totalsetningen for $P(R)$:**
$$P(R) = P(R|T_1) \\cdot P(T_1) + P(R|T_2) \\cdot P(T_2)$$
$$P(R) = \\frac{3}{5} \\cdot \\frac{1}{3} + \\frac{2}{6} \\cdot \\frac{2}{3}$$
$$P(R) = \\frac{3}{15} + \\frac{4}{18} = \\frac{1}{5} + \\frac{2}{9} = \\frac{9}{45} + \\frac{10}{45} = \\frac{19}{45} \\approx 42{,}2\\%$$

**Bayes setning for $P(T_1|R)$:**
$$P(T_1|R) = \\frac{P(R|T_1) \\cdot P(T_1)}{P(R)} = \\frac{\\frac{3}{5} \\cdot \\frac{1}{3}}{\\frac{19}{45}}$$
$$P(T_1|R) = \\frac{\\frac{1}{5}}{\\frac{19}{45}} = \\frac{1}{5} \\cdot \\frac{45}{19} = \\frac{9}{19} \\approx 47{,}4\\%$$`,
        hints: ['Bruk totalsetningen for forste del, Bayes setning for andre del'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 's1-5-2-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Betinget sannsynlighet:**
$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

**Produktregelen:**
$$P(A \\cap B) = P(B) \\cdot P(A|B)$$

**Uavhengige hendelser:**
$$P(A \\cap B) = P(A) \\cdot P(B)$$

**Totalsetningen:**
$$P(A) = \\sum_i P(A|B_i) \\cdot P(B_i)$$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_S1_5_3: TextbookChapter = {
  id: 's1-5-3',
  courseId: 's1',
  chapterNumber: '5.3',
  title: 'Bayes\' setning',
  description: 'Lær a bruke Bayes\' setning til a oppdatere sannsynligheter basert pa ny informasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke kombinatorikk til å berekne sannsyn',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-5-3-intro',
      type: 'text',
      content: `## Hva er Bayes' setning?

Bayes' setning lar oss "snu" betingede sannsynligheter. Hvis vi kjenner $P(B|A)$, kan vi beregne $P(A|B)$.

**Praktisk betydning:** Vi starter med en **forhandsantakelse** (prior) om sannsynligheten for noe, far ny informasjon, og oppdaterer til en **etterantakelse** (posterior).

**Eksempler:**
- En pasient tester positivt for en sykdom. Hva er sannsynligheten for at pasienten faktisk er syk?
- Et produkt er defekt. Hvilken maskin produserte det mest sannsynlig?
- En e-post inneholder ordet "gratis". Er det spam?`,
    },

    // ========== UTLEDNING ==========
    {
      id: 's1-5-3-utledning',
      type: 'text',
      content: `## Utledning av Bayes' setning

Fra definisjonen av betinget sannsynlighet har vi:

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

Vi vet ogsa at $P(A \\cap B) = P(B|A) \\cdot P(A)$

Ved a sette dette inn far vi Bayes' setning:`,
    },

    {
      id: 's1-5-3-def',
      type: 'theorem',
      title: 'Bayes\' setning',
      content: `$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$

Der:
- $P(A)$ = **Prior** (forhands-sannsynlighet for A)
- $P(A|B)$ = **Posterior** (etterantakelse, oppdatert sannsynlighet)
- $P(B|A)$ = **Likelihood** (sannsynligheten for a observere B gitt A)
- $P(B)$ = **Marginal** (total sannsynlighet for B)

**Med totalsetningen:**
$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B|A) \\cdot P(A) + P(B|\\overline{A}) \\cdot P(\\overline{A})}$$`,
    },

    // ========== DIAGNOSTISKE TESTER ==========
    {
      id: 's1-5-3-diagnostikk',
      type: 'text',
      content: `## Diagnostiske tester

Et viktig bruksomrade for Bayes' setning er medisinsk diagnostikk.

**Viktige begreper:**
- **Sensitivitet**: $P(+|\\text{syk})$ - andel syke som tester positivt
- **Spesifisitet**: $P(-|\\text{frisk})$ - andel friske som tester negativt
- **Prevalens**: $P(\\text{syk})$ - andel av befolkningen som er syk
- **Positiv prediktiv verdi (PPV)**: $P(\\text{syk}|+)$ - sannsynlighet for a vaere syk gitt positiv test`,
    },

    // Eksempel 1: Medisinsk test
    {
      id: 's1-5-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Medisinsk test',
      problem: `En test for en sjelden sykdom har folgende egenskaper:
- Sensitivitet: 99% (99% av syke tester positivt)
- Spesifisitet: 95% (95% av friske tester negativt)
- Prevalens: 0,1% av befolkningen har sykdommen

En tilfeldig person tester positivt. Hva er sannsynligheten for at personen faktisk er syk?`,
      solution: `**Losning:**

La:
- $S$ = syk
- $+$ = positiv test

Gitt:
- $P(S) = 0{,}001$ (prevalens)
- $P(+|S) = 0{,}99$ (sensitivitet)
- $P(+|\\overline{S}) = 1 - 0{,}95 = 0{,}05$ (falsk positiv rate)

**Trediagram:**
\`\`\`
                    Befolkning
                        │
         ┌──────────────┴──────────────┐
         │                             │
     Syk (0,001)               Frisk (0,999)
         │                             │
    ┌────┴────┐                   ┌────┴────┐
    │         │                   │         │
 + (0,99)  - (0,01)           + (0,05)  - (0,95)
\`\`\`

**Totalsetningen for $P(+)$:**
$$P(+) = P(+|S) \\cdot P(S) + P(+|\\overline{S}) \\cdot P(\\overline{S})$$
$$P(+) = 0{,}99 \\cdot 0{,}001 + 0{,}05 \\cdot 0{,}999$$
$$P(+) = 0{,}00099 + 0{,}04995 = 0{,}05094$$

**Bayes' setning:**
$$P(S|+) = \\frac{P(+|S) \\cdot P(S)}{P(+)} = \\frac{0{,}99 \\cdot 0{,}001}{0{,}05094}$$
$$P(S|+) = \\frac{0{,}00099}{0{,}05094} \\approx 0{,}0194 \\approx 1{,}9\\%$$

**Overraskende resultat:** Selv med en positiv test er det bare ca. 2% sjanse for a vaere syk!

Dette skyldes at sykdommen er sa sjelden at antall falske positive (fra de mange friske) overstiger antall sanne positive.`,
    },

    {
      id: 's1-5-3-paradoks',
      type: 'warning',
      title: 'Base rate fallacy',
      content: `Eksempelet over illustrerer et viktig fenomen: **base rate fallacy** (grunnsats-feilen).

Intuisjonen sier at en 99% noyaktig test burde gi hoye sannsynligheter for a vaere syk ved positiv test. Men nar sykdommen er sjelden (lav prevalens), dominerer falske positive.

**Hovedregel:** Ved sjeldne tilstander ma selv svart gode tester ofte bekreftes med tilleggstester.`,
    },

    // Oppgave 1
    {
      id: 's1-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-1',
        number: '5.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'En test for en sykdom har sensitivitet 95% og spesifisitet 90%. I en populasjon er 5% smittet. Hva er sannsynligheten for at en person som tester positivt faktisk er syk?',
        solution: `La $S$ = syk, $+$ = positiv test.

$P(S) = 0{,}05$, $P(+|S) = 0{,}95$, $P(+|\\overline{S}) = 0{,}10$

**Totalsetningen:**
$$P(+) = 0{,}95 \\cdot 0{,}05 + 0{,}10 \\cdot 0{,}95 = 0{,}0475 + 0{,}095 = 0{,}1425$$

**Bayes:**
$$P(S|+) = \\frac{0{,}95 \\cdot 0{,}05}{0{,}1425} = \\frac{0{,}0475}{0{,}1425} \\approx 0{,}333 \\approx 33{,}3\\%$$

Med hoyere prevalens (5% vs 0,1%) far vi mye hoyere PPV.`,
        hints: ['Bruk samme metode som i eksempel 1'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 's1-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'I oppgave 5.3.1, hva er sannsynligheten for at en person som tester **negativt** faktisk er **frisk**? (Negativ prediktiv verdi)',
        solution: `Vi trenger $P(\\overline{S}|-)$.

**Sannsynlighet for negativ test:**
$$P(-) = P(-|S) \\cdot P(S) + P(-|\\overline{S}) \\cdot P(\\overline{S})$$
$$P(-) = 0{,}05 \\cdot 0{,}05 + 0{,}90 \\cdot 0{,}95 = 0{,}0025 + 0{,}855 = 0{,}8575$$

**Bayes:**
$$P(\\overline{S}|-) = \\frac{P(-|\\overline{S}) \\cdot P(\\overline{S})}{P(-)} = \\frac{0{,}90 \\cdot 0{,}95}{0{,}8575}$$
$$P(\\overline{S}|-) = \\frac{0{,}855}{0{,}8575} \\approx 0{,}997 \\approx 99{,}7\\%$$

Negativ prediktiv verdi er svart hoy - en negativ test er ganske palitelig.`,
        hints: ['Bytt ut + med - og S med ikke-S i Bayes-formelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KVALITETSKONTROLL ==========
    {
      id: 's1-5-3-kvalitet',
      type: 'text',
      content: `## Kvalitetskontroll i produksjon

Bayes' setning brukes ogsa i kvalitetskontroll for a identifisere kilden til defekte produkter.`,
    },

    // Eksempel 2
    {
      id: 's1-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Produksjonsfeil',
      problem: `En fabrikk har tre maskiner som produserer elektroniske komponenter:
- Maskin A: 50% av produksjonen, 2% defektrate
- Maskin B: 30% av produksjonen, 3% defektrate
- Maskin C: 20% av produksjonen, 4% defektrate

En tilfeldig valgt komponent er defekt. Hvilken maskin produserte den mest sannsynlig?`,
      solution: `**Losning:**

La $D$ = defekt, og $M_A$, $M_B$, $M_C$ = produsert av maskin A, B, C.

Gitt:
- $P(M_A) = 0{,}50$, $P(D|M_A) = 0{,}02$
- $P(M_B) = 0{,}30$, $P(D|M_B) = 0{,}03$
- $P(M_C) = 0{,}20$, $P(D|M_C) = 0{,}04$

**Totalsetningen for $P(D)$:**
$$P(D) = 0{,}02 \\cdot 0{,}50 + 0{,}03 \\cdot 0{,}30 + 0{,}04 \\cdot 0{,}20$$
$$P(D) = 0{,}01 + 0{,}009 + 0{,}008 = 0{,}027$$

**Bayes for hver maskin:**
$$P(M_A|D) = \\frac{0{,}02 \\cdot 0{,}50}{0{,}027} = \\frac{0{,}01}{0{,}027} \\approx 0{,}370 = 37{,}0\\%$$

$$P(M_B|D) = \\frac{0{,}03 \\cdot 0{,}30}{0{,}027} = \\frac{0{,}009}{0{,}027} \\approx 0{,}333 = 33{,}3\\%$$

$$P(M_C|D) = \\frac{0{,}04 \\cdot 0{,}20}{0{,}027} = \\frac{0{,}008}{0{,}027} \\approx 0{,}296 = 29{,}6\\%$$

**Maskin A** er mest sannsynlig kilde til den defekte komponenten, selv om den har lavest defektrate. Dette skyldes at A produserer mest.

Kontroll: $37{,}0\\% + 33{,}3\\% + 29{,}6\\% \\approx 100\\%$ ✓`,
    },

    // Oppgave 3
    {
      id: 's1-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift har to leverandorer. Leverandor X leverer 60% av varene med 5% defektrate. Leverandor Y leverer 40% med 8% defektrate. Et tilfeldig valgt produkt er defekt. Hva er sannsynligheten for at det kom fra leverandor X?',
        solution: `La $D$ = defekt, $X$ = fra leverandor X, $Y$ = fra leverandor Y.

$P(X) = 0{,}60$, $P(D|X) = 0{,}05$
$P(Y) = 0{,}40$, $P(D|Y) = 0{,}08$

**Totalsetningen:**
$$P(D) = 0{,}05 \\cdot 0{,}60 + 0{,}08 \\cdot 0{,}40 = 0{,}03 + 0{,}032 = 0{,}062$$

**Bayes:**
$$P(X|D) = \\frac{0{,}05 \\cdot 0{,}60}{0{,}062} = \\frac{0{,}03}{0{,}062} \\approx 0{,}484 \\approx 48{,}4\\%$$

Sannsynligheten for leverandor X er ca. **48,4%**.`,
        hints: ['Folg samme fremgangsmte som i eksempel 2'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 's1-5-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'I oppgave 5.3.3, hvis bedriften skal redusere defektraten, hvilken leverandor bor de fokusere pa forst? Begrunn svaret.',
        solution: `Vi ser pa bidraget til total defektrate:

**Fra leverandor X:**
$$P(D|X) \\cdot P(X) = 0{,}05 \\cdot 0{,}60 = 0{,}030$$

**Fra leverandor Y:**
$$P(D|Y) \\cdot P(Y) = 0{,}08 \\cdot 0{,}40 = 0{,}032$$

Leverandor Y bidrar litt mer til defektraten (0,032 vs 0,030), selv om de leverer mindre.

**Analyse:**
- Y har hoyere defektrate (8% vs 5%)
- Y's bidrag til total defektrate er storre

**Konklusjon:** Bedriften bor fokusere pa **leverandor Y** forst, enten ved a:
1. Kreve bedre kvalitet fra Y
2. Bytte til en annen leverandor
3. Redusere andelen kjopt fra Y`,
        hints: ['Sammenlign hvor mye hver leverandor bidrar til den totale defektraten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPDATERING AV SANNSYNLIGHETER ==========
    {
      id: 's1-5-3-oppdatering',
      type: 'text',
      content: `## Sekvensiell oppdatering

Bayes' setning kan brukes gjentatte ganger for a oppdatere sannsynligheter etter hvert som ny informasjon kommer inn.

**Prosessen:**
1. Start med prior $P(A)$
2. Observerer $B_1$, oppdaterer til $P(A|B_1)$
3. Observerer $B_2$, oppdaterer til $P(A|B_1 \\cap B_2)$
4. Osv.`,
    },

    // Eksempel 3
    {
      id: 's1-5-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Sekvensiell oppdatering',
      problem: `En eske inneholder enten 3 rode og 1 bla kule (type R) eller 1 rod og 3 bla kuler (type B). Det er 50% sjanse for hver type. En kule trekkes tilfeldig og er rod. Kulen legges tilbake. En ny kule trekkes og er ogsa rod. Hva er sannsynligheten for at esken er av type R?`,
      solution: `**Losning:**

La $R$ = eske av type R (3 rode, 1 bla).

**Utgangspunkt (prior):**
$$P(R) = 0{,}5, \\quad P(B) = 0{,}5$$

**Forste trekning (rod kule):**
$$P(\\text{rod}|R) = \\frac{3}{4}, \\quad P(\\text{rod}|B) = \\frac{1}{4}$$

Totalsetning:
$$P(\\text{rod}) = \\frac{3}{4} \\cdot 0{,}5 + \\frac{1}{4} \\cdot 0{,}5 = \\frac{3}{8} + \\frac{1}{8} = \\frac{1}{2}$$

Bayes etter 1. trekning:
$$P(R|\\text{1 rod}) = \\frac{\\frac{3}{4} \\cdot 0{,}5}{0{,}5} = \\frac{3}{4} = 75\\%$$

**Andre trekning (ogsa rod):**

Ny prior: $P(R) = 0{,}75$, $P(B) = 0{,}25$

Totalsetning:
$$P(\\text{rod}) = \\frac{3}{4} \\cdot 0{,}75 + \\frac{1}{4} \\cdot 0{,}25 = \\frac{9}{16} + \\frac{1}{16} = \\frac{10}{16} = \\frac{5}{8}$$

Bayes etter 2. trekning:
$$P(R|\\text{2 rode}) = \\frac{\\frac{3}{4} \\cdot 0{,}75}{\\frac{5}{8}} = \\frac{\\frac{9}{16}}{\\frac{5}{8}} = \\frac{9}{16} \\cdot \\frac{8}{5} = \\frac{9}{10} = 90\\%$$

Etter to rode kuler er sannsynligheten for type R **90%**.`,
    },

    // Oppgave 5
    {
      id: 's1-5-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I eksempel 3, hva ville sannsynligheten for type R vaert hvis tredje trekning ogsa var rod?',
        solution: `Ny prior: $P(R) = 0{,}90$, $P(B) = 0{,}10$

**Tredje trekning (rod):**

Totalsetning:
$$P(\\text{rod}) = \\frac{3}{4} \\cdot 0{,}90 + \\frac{1}{4} \\cdot 0{,}10 = 0{,}675 + 0{,}025 = 0{,}70$$

Bayes:
$$P(R|\\text{3 rode}) = \\frac{\\frac{3}{4} \\cdot 0{,}90}{0{,}70} = \\frac{0{,}675}{0{,}70} \\approx 0{,}964 = 96{,}4\\%$$

Etter tre rode kuler er sannsynligheten for type R ca. **96,4%**.`,
        hints: ['Bruk den oppdaterte prioren fra eksempel 3 som utgangspunkt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 's1-5-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-6',
        number: '5.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En mynt er enten rettferdig (50% kron) eller falsk (80% kron). Startantakelsen er 70% sjanse for rettferdig mynt. Mynten kastes to ganger og viser kron begge ganger. Hva er den oppdaterte sannsynligheten for at mynten er rettferdig?',
        solution: `La $R$ = rettferdig mynt.

**Prior:** $P(R) = 0{,}70$

$P(KK|R) = 0{,}5 \\cdot 0{,}5 = 0{,}25$
$P(KK|\\text{falsk}) = 0{,}8 \\cdot 0{,}8 = 0{,}64$

**Totalsetningen:**
$$P(KK) = 0{,}25 \\cdot 0{,}70 + 0{,}64 \\cdot 0{,}30 = 0{,}175 + 0{,}192 = 0{,}367$$

**Bayes:**
$$P(R|KK) = \\frac{0{,}25 \\cdot 0{,}70}{0{,}367} = \\frac{0{,}175}{0{,}367} \\approx 0{,}477 \\approx 47{,}7\\%$$

Sannsynligheten for rettferdig mynt synker fra 70% til ca. **47,7%** etter to kron.`,
        hints: ['Behandl de to kastene samlet: $P(KK|R) = 0{,}5 \\cdot 0{,}5$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FLERE ANVENDELSER ==========
    {
      id: 's1-5-3-anvendelser',
      type: 'text',
      content: `## Flere anvendelser av Bayes' setning

Bayes' setning brukes i mange felt:

**Medisin:**
- Tolkningav testresultater
- Vurdering av risikofaktorer

**Spamfiltre:**
- Klassifisere e-post basert pa ordbruk

**Juss:**
- Vurdere bevis i rettssaker

**Maskinlaering:**
- Naive Bayes klassifiserere
- Bayesiansk inferens`,
    },

    // Oppgave 7
    {
      id: 's1-5-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-7',
        number: '5.3.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et spamfilter vet at 30% av alle e-poster er spam. Ordet "gratis" forekommer i 80% av spam-meldinger og 10% av legitime meldinger. En e-post inneholder "gratis". Hva er sannsynligheten for at det er spam?',
        solution: `La $S$ = spam, $G$ = inneholder "gratis".

$P(S) = 0{,}30$, $P(G|S) = 0{,}80$, $P(G|\\overline{S}) = 0{,}10$

**Totalsetningen:**
$$P(G) = 0{,}80 \\cdot 0{,}30 + 0{,}10 \\cdot 0{,}70 = 0{,}24 + 0{,}07 = 0{,}31$$

**Bayes:**
$$P(S|G) = \\frac{0{,}80 \\cdot 0{,}30}{0{,}31} = \\frac{0{,}24}{0{,}31} \\approx 0{,}774 \\approx 77{,}4\\%$$

Sannsynligheten for spam er ca. **77,4%**.`,
        hints: ['Bruk standard Bayes-formel'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 's1-5-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-8',
        number: '5.3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En DNA-test i en kriminalsak gir "match" med den mistenkte. Testen har 99,9% sensitivitet (finner riktig person) og 99,99% spesifisitet (avviser uskyldige). I en by med 1 million innbyggere er en person skyldig.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er sannsynligheten for at den mistenkte er skyldig gitt DNA-match?',
            solution: `$P(S) = \\frac{1}{1\\,000\\,000} = 10^{-6}$
$P(+|S) = 0{,}999$, $P(+|\\overline{S}) = 0{,}0001$

$P(+) = 0{,}999 \\cdot 10^{-6} + 0{,}0001 \\cdot (1-10^{-6})$
$P(+) \\approx 0{,}000001 + 0{,}0001 \\approx 0{,}000101$

$P(S|+) = \\frac{0{,}999 \\cdot 10^{-6}}{0{,}000101} \\approx \\frac{0{,}000001}{0{,}000101} \\approx 0{,}0099 \\approx 1\\%$`
          },
          {
            label: 'b',
            task: 'Kommen terer resultatet. Er DNA-beviset sterkt nok alene?',
            solution: 'Selv med en svart noyaktig test (99,9%/99,99%) er det bare ca. 1% sjanse for skyld gitt match. Dette skyldes at det finnes ca. 100 uskyldige som ogsa matcher (1 million * 0,0001). DNA-bevis alene er ikke tilstrekkelig - man trenger tilleggsbevis.'
          },
        ],
        solution: 'a) ca. 1%, b) DNA-bevis alene er utilstrekkelig pa grunn av base rate',
        hints: ['Prevalensen (prior) er ekstremt lav: 1 av 1 million'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 's1-5-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-9',
        number: '5.3.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et forsikringsselskap vet at 10% av forere er "hoyrisikoforere" som har 20% arlig ulykkessannsynlighet. De resterende 90% er "lavrisikoforere" med 5% ulykkessannsynlighet. En ny kunde har en ulykke forste ar. Hva er sannsynligheten for at kunden er hoyrisiko? Hva er sannsynligheten for ulykke neste ar?',
        solution: `**Del 1: Er kunden hoyrisiko?**

La $H$ = hoyrisiko, $U$ = ulykke.

$P(H) = 0{,}10$, $P(U|H) = 0{,}20$, $P(U|\\overline{H}) = 0{,}05$

$P(U) = 0{,}20 \\cdot 0{,}10 + 0{,}05 \\cdot 0{,}90 = 0{,}02 + 0{,}045 = 0{,}065$

$P(H|U) = \\frac{0{,}20 \\cdot 0{,}10}{0{,}065} = \\frac{0{,}02}{0{,}065} \\approx 0{,}308 \\approx 30{,}8\\%$

**Del 2: Sannsynlighet for ulykke neste ar**

Med oppdatert prior: $P(H) = 0{,}308$

$P(U_{\\text{neste}}) = 0{,}20 \\cdot 0{,}308 + 0{,}05 \\cdot 0{,}692$
$P(U_{\\text{neste}}) = 0{,}0616 + 0{,}0346 = 0{,}0962 \\approx 9{,}6\\%$

Sannsynligheten oker fra 6,5% (generelt) til 9,6% for denne kunden.`,
        hints: ['Del 2: Bruk den oppdaterte sannsynligheten for hoyrisiko som ny prior'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 's1-5-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-10',
        number: '5.3.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En elev gjetter pa en flervalgsoppgave med 4 alternativer. 60% av elevene kan stoffet og svarer riktig 90% av gangene. De resterende 40% gjetter tilfeldig. En elev svarer riktig. Hva er sannsynligheten for at eleven faktisk kan stoffet?',
        solution: `La $K$ = kan stoffet, $R$ = riktig svar.

$P(K) = 0{,}60$, $P(R|K) = 0{,}90$
$P(\\overline{K}) = 0{,}40$, $P(R|\\overline{K}) = \\frac{1}{4} = 0{,}25$ (tilfeldig gjetting)

**Totalsetningen:**
$P(R) = 0{,}90 \\cdot 0{,}60 + 0{,}25 \\cdot 0{,}40 = 0{,}54 + 0{,}10 = 0{,}64$

**Bayes:**
$P(K|R) = \\frac{0{,}90 \\cdot 0{,}60}{0{,}64} = \\frac{0{,}54}{0{,}64} = 0{,}84375 \\approx 84{,}4\\%$

Sannsynligheten for at eleven kan stoffet er ca. **84,4%**.`,
        hints: ['Elever som gjetter har 1/4 sjanse for riktig svar'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 's1-5-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-11',
        number: '5.3.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tre bokser ser like ut. Boks A inneholder 2 gullmynter. Boks B inneholder 1 gullmynt og 1 solvmynt. Boks C inneholder 2 solvmynter. En boks velges tilfeldig, og en mynt trekkes tilfeldig fra boksen. Mynten er gull. Hva er sannsynligheten for at den andre mynten i boksen ogsa er gull?',
        solution: `**Dette er det klassiske "Bertrand's box paradox".**

La oss tenke pa mynter, ikke bokser. Det er 6 mynter totalt: 2 gull i A, 1 gull og 1 solv i B, 2 solv i C.

De 3 gullmyntene er:
- Gull 1 i boks A (partner: gull)
- Gull 2 i boks A (partner: gull)
- Gull i boks B (partner: solv)

Nar vi trekker en gullmynt tilfeldig, er det 3 like sannsynlige muligheter.

Av disse har 2 en gullmynt som partner.

$$P(\\text{andre er gull}|\\text{forste er gull}) = \\frac{2}{3} \\approx 66{,}7\\%$$

**Alternativ losning med Bayes:**

$P(A|\\text{gull}) = \\frac{P(\\text{gull}|A) \\cdot P(A)}{P(\\text{gull})} = \\frac{1 \\cdot \\frac{1}{3}}{\\frac{1}{2}} = \\frac{2}{3}$

Siden boks A gir garantert gull for andre mynt, er svaret $\\frac{2}{3}$.`,
        hints: ['Tenk pa de individuelle myntene, ikke boksene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 's1-5-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-5-3-ex-12',
        number: '5.3.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En vaermelding sier at det er 40% sjanse for regn i morgen. Historisk sett stemmer vmeldingen 80% av gangene (bade nar den sier regn og nar den sier ikke regn). I dette omradet regner det generelt 30% av dagene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er den faktiske sannsynligheten for regn i morgen, gitt vmeldingen?',
            solution: `La $R$ = regn, $V$ = vmeldingen sier regn.

Vi har: $P(V) = 0{,}40$ (vmeldingen sier regn), $P(R) = 0{,}30$ (generell regnfrekvens)

Vmeldingen stemmer 80%:
- $P(V|R) = 0{,}80$ (sier regn nar det regner)
- $P(\\overline{V}|\\overline{R}) = 0{,}80$ (sier ikke regn nar det ikke regner)
- Dermed: $P(V|\\overline{R}) = 0{,}20$

$P(V) = P(V|R) \\cdot P(R) + P(V|\\overline{R}) \\cdot P(\\overline{R})$
$P(V) = 0{,}80 \\cdot 0{,}30 + 0{,}20 \\cdot 0{,}70 = 0{,}24 + 0{,}14 = 0{,}38$

(Merk: dette er nesten lik de oppgitte 40%)

$P(R|V) = \\frac{0{,}80 \\cdot 0{,}30}{0{,}38} = \\frac{0{,}24}{0{,}38} \\approx 0{,}632 \\approx 63{,}2\\%$`
          },
          {
            label: 'b',
            task: 'Burde du ta med paraply?',
            solution: 'Med 63,2% sjanse for regn (opp fra 30% uten vmeldingen), er det lurt a ta med paraply. Vmeldingen har oppdatert var tro pa regn betydelig.'
          },
        ],
        solution: 'a) ca. 63%, b) Ja, ta med paraply',
        hints: ['Vr forsiktig med a tolke oppgaven - 80% noyaktighet betyr $P(\\text{riktig melding}|\\text{faktisk vr})$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 's1-5-3-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Bayes' setning:**
$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$

**Tolkning:**
- **Prior** $P(A)$: Det vi tror for vi far ny info
- **Posterior** $P(A|B)$: Oppdatert tro etter ny info
- **Likelihood** $P(B|A)$: Hvor typisk er B gitt A

**Viktige anvendelser:**
- Medisinsk diagnostikk (tolke testresultater)
- Kvalitetskontroll (finne feilkilder)
- Spamfiltrering
- Forsikring og risiko

**Hovedinnsikt:** Nar noe er sjeldent (lav prior), ma bevisene vaere svart sterke for a gi hoy posterior.`,
    },
  ],
  exercises: [],
};

// Eksporter alle kapitler som et objekt
export const CHAPTERS_S1: Record<string, TextbookChapter> = {
  's1-1-1': CHAPTER_S1_1_1,
  's1-1-2': CHAPTER_S1_1_2,
  's1-1-3': CHAPTER_S1_1_3,
  's1-2-1': CHAPTER_S1_2_1,
  's1-2-2': CHAPTER_S1_2_2,
  's1-2-3': CHAPTER_S1_2_3,
  's1-2-4': CHAPTER_S1_2_4,
  's1-2-5': CHAPTER_S1_2_5,
  's1-3-1': CHAPTER_S1_3_1,
  's1-3-2': CHAPTER_S1_3_2,
  's1-3-3': CHAPTER_S1_3_3,
  's1-3-4': CHAPTER_S1_3_4,
  's1-3-5': CHAPTER_S1_3_5,
  's1-4-1': CHAPTER_S1_4_1,
  's1-4-2': CHAPTER_S1_4_2,
  's1-4-3': CHAPTER_S1_4_3,
  's1-5-1': CHAPTER_S1_5_1,
  's1-5-2': CHAPTER_S1_5_2,
  's1-5-3': CHAPTER_S1_5_3,
};
