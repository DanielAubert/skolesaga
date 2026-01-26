/**
 * Tekstbok kapitler for r1
 * Autogenerert fra textbook-content.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_R1_1_1: TextbookChapter = {
  id: 'r1-1-1',
  courseId: 'r1',
  chapterNumber: '1.1',
  title: 'Polynomer og polynomdivisjon',
  description: 'Lær om polynomer, polynomdivisjon, faktorteoremet og hvordan du finner nullpunkter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå hva et polynom er og kunne identifisere grad og koeffisienter',
    'beherske polynomdivisjon',
    'bruke faktorteoremet til å faktorisere polynomer',
    'finne nullpunkter til polynomer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-1-1-intro',
      type: 'text',
      content: `## Hva er et polynom?

Et polynom er et uttrykk som består av ledd med variabler opphøyd i ikke-negative heltall, multiplisert med konstanter (koeffisienter). Polynomer er grunnleggende i matematikk og dukker opp i mange sammenhenger.`,
    },
    {
      id: 'r1-1-1-polynomfunksjon-bilde',
      type: 'image',
      src: '/images/r1/polynomfunksjon.svg',
      alt: 'Graf av en polynomfunksjon med nullpunkter og ekstremalpunkter',
      caption: 'Polynomfunksjoner - form og egenskaper',
    },

    // Definisjon: Polynom
    {
      id: 'r1-1-1-def-polynom',
      type: 'definition',
      title: 'Polynom',
      content: `Et **polynom** i variabelen $x$ er et uttrykk på formen:

$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0$$

der $a_n, a_{n-1}, \\ldots, a_1, a_0$ er reelle tall (koeffisienter) og $n$ er et ikke-negativt heltall.

- $a_n$ kalles **ledende koeffisient** (forutsatt at $a_n \\neq 0$)
- $n$ kalles **graden** til polynomet
- $a_0$ kalles **konstantleddet**`,
    },

    // Eksempler på polynomer
    {
      id: 'r1-1-1-example-polynomer',
      type: 'example',
      title: 'Eksempel 1: Polynomer',
      problem: `Identifiser graden, ledende koeffisient og konstantledd for følgende polynomer:

a) $P(x) = 3x^4 - 2x^2 + 5x - 1$
b) $Q(x) = -2x^3 + x$
c) $R(x) = 7$`,
      solution: `**Løsning:**

a) $P(x) = 3x^4 - 2x^2 + 5x - 1$
   - Grad: $4$ (høyeste potens av $x$)
   - Ledende koeffisient: $3$
   - Konstantledd: $-1$

b) $Q(x) = -2x^3 + x$
   - Grad: $3$
   - Ledende koeffisient: $-2$
   - Konstantledd: $0$ (ingen konstantledd)

c) $R(x) = 7$
   - Grad: $0$ (konstant polynom)
   - Ledende koeffisient: $7$
   - Konstantledd: $7$`,
    },

    // Oppgave 1
    {
      id: 'r1-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn graden, ledende koeffisient og konstantledd for hvert polynom.',
        subTasks: [
          { label: 'a', task: '$P(x) = 2x^5 - 3x^3 + x - 4$', solution: 'Grad: $5$, ledende koeffisient: $2$, konstantledd: $-4$' },
          { label: 'b', task: '$Q(x) = -x^2 + 6x + 9$', solution: 'Grad: $2$, ledende koeffisient: $-1$, konstantledd: $9$' },
          { label: 'c', task: '$R(x) = 4x^3 - x^2$', solution: 'Grad: $3$, ledende koeffisient: $4$, konstantledd: $0$' },
          { label: 'd', task: '$S(x) = -5$', solution: 'Grad: $0$, ledende koeffisient: $-5$, konstantledd: $-5$' },
        ],
        hints: ['Den høyeste potensen av $x$ bestemmer graden', 'Konstantleddet er det leddet som ikke inneholder $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== POLYNOMREGNING ==========
    {
      id: 'r1-1-1-regning-intro',
      type: 'text',
      content: `## Regning med polynomer

Vi kan addere, subtrahere og multiplisere polynomer ved å bruke kjente regneregler.

**Addisjon og subtraksjon:** Kombiner like ledd (ledd med samme potens av $x$).

**Multiplikasjon:** Bruk distributiv lov – gang hvert ledd i det ene polynomet med hvert ledd i det andre.`,
    },

    // Eksempel: Polynomregning
    {
      id: 'r1-1-1-example-regning',
      type: 'example',
      title: 'Eksempel 2: Polynomregning',
      problem: `La $P(x) = 2x^2 + 3x - 1$ og $Q(x) = x^2 - 2x + 4$.

Regn ut:
a) $P(x) + Q(x)$
b) $P(x) - Q(x)$
c) $P(x) \\cdot Q(x)$`,
      solution: `**Løsning:**

a) $P(x) + Q(x) = (2x^2 + 3x - 1) + (x^2 - 2x + 4)$
   $= 2x^2 + x^2 + 3x - 2x - 1 + 4$
   $= 3x^2 + x + 3$

b) $P(x) - Q(x) = (2x^2 + 3x - 1) - (x^2 - 2x + 4)$
   $= 2x^2 - x^2 + 3x + 2x - 1 - 4$
   $= x^2 + 5x - 5$

c) $P(x) \\cdot Q(x) = (2x^2 + 3x - 1)(x^2 - 2x + 4)$
   $= 2x^2(x^2 - 2x + 4) + 3x(x^2 - 2x + 4) - 1(x^2 - 2x + 4)$
   $= 2x^4 - 4x^3 + 8x^2 + 3x^3 - 6x^2 + 12x - x^2 + 2x - 4$
   $= 2x^4 - x^3 + x^2 + 14x - 4$`,
    },

    // Oppgave 2
    {
      id: 'r1-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $P(x) = x^2 + 2x - 3$ og $Q(x) = 2x^2 - x + 1$. Regn ut:',
        subTasks: [
          { label: 'a', task: '$P(x) + Q(x)$', solution: '$P(x) + Q(x) = 3x^2 + x - 2$' },
          { label: 'b', task: '$P(x) - Q(x)$', solution: '$P(x) - Q(x) = -x^2 + 3x - 4$' },
          { label: 'c', task: '$2P(x) + 3Q(x)$', solution: '$2P(x) + 3Q(x) = 2(x^2 + 2x - 3) + 3(2x^2 - x + 1) = 2x^2 + 4x - 6 + 6x^2 - 3x + 3 = 8x^2 + x - 3$' },
        ],
        hints: ['Kombiner like ledd'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3 - Multiplikasjon
    {
      id: 'r1-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Multipliser polynomene og skriv svaret på standardform.',
        subTasks: [
          { label: 'a', task: '$(x + 2)(x^2 - 3x + 1)$', solution: '$(x + 2)(x^2 - 3x + 1) = x^3 - 3x^2 + x + 2x^2 - 6x + 2 = x^3 - x^2 - 5x + 2$' },
          { label: 'b', task: '$(x - 1)(x + 1)(x + 2)$', solution: '$(x - 1)(x + 1)(x + 2) = (x^2 - 1)(x + 2) = x^3 + 2x^2 - x - 2$' },
          { label: 'c', task: '$(2x - 3)^2$', solution: '$(2x - 3)^2 = 4x^2 - 12x + 9$' },
          { label: 'd', task: '$(x + 1)^3$', solution: '$(x + 1)^3 = x^3 + 3x^2 + 3x + 1$' },
        ],
        hints: ['Bruk distributiv lov', 'Husk konjugatsetningen: $(a-b)(a+b) = a^2 - b^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== POLYNOMDIVISJON ==========
    {
      id: 'r1-1-1-divisjon-intro',
      type: 'text',
      content: `## Polynomdivisjon

Polynomdivisjon fungerer på samme måte som vanlig divisjon av tall. Vi deler et polynom (dividenden) på et annet polynom (divisoren) og får en kvotient og eventuelt en rest.

$$\\frac{P(x)}{D(x)} = Q(x) + \\frac{R(x)}{D(x)}$$

eller ekvivalent:

$$P(x) = D(x) \\cdot Q(x) + R(x)$$

der graden til $R(x)$ er lavere enn graden til $D(x)$.`,
    },

    // Teorem: Divisjonsalgoritmen
    {
      id: 'r1-1-1-theorem-divisjon',
      type: 'theorem',
      title: 'Divisjonsalgoritmen for polynomer',
      content: `For ethvert polynom $P(x)$ og divisor $D(x)$ med $D(x) \\neq 0$, finnes det unike polynomer $Q(x)$ (kvotienten) og $R(x)$ (resten) slik at:

$$P(x) = D(x) \\cdot Q(x) + R(x)$$

der $\\text{grad}(R) < \\text{grad}(D)$ eller $R(x) = 0$.`,
    },

    // Eksempel: Polynomdivisjon
    {
      id: 'r1-1-1-example-divisjon',
      type: 'example',
      title: 'Eksempel 3: Polynomdivisjon',
      problem: `Utfør polynomdivisjonen:

$$\\frac{x^3 - 2x^2 + 5x - 3}{x - 1}$$`,
      solution: `**Løsning:**

Vi setter opp polynomdivisjonen:

$$\\begin{array}{r|rrrr}
  & x^3 & -2x^2 & +5x & -3 \\\\
x-1 & & & & \\\\
\\hline
\\end{array}$$

**Steg 1:** $x^3 \\div x = x^2$. Gang $x^2$ med $(x-1)$: $x^3 - x^2$

**Steg 2:** Trekk fra: $(x^3 - 2x^2) - (x^3 - x^2) = -x^2$

**Steg 3:** Ta ned neste ledd: $-x^2 + 5x$

**Steg 4:** $-x^2 \\div x = -x$. Gang $-x$ med $(x-1)$: $-x^2 + x$

**Steg 5:** Trekk fra: $(-x^2 + 5x) - (-x^2 + x) = 4x$

**Steg 6:** Ta ned neste ledd: $4x - 3$

**Steg 7:** $4x \\div x = 4$. Gang $4$ med $(x-1)$: $4x - 4$

**Steg 8:** Trekk fra: $(4x - 3) - (4x - 4) = 1$

**Svar:**
$$\\frac{x^3 - 2x^2 + 5x - 3}{x - 1} = x^2 - x + 4 + \\frac{1}{x-1}$$

Kvotient: $Q(x) = x^2 - x + 4$, Rest: $R = 1$`,
    },

    // Tips for polynomdivisjon
    {
      id: 'r1-1-1-tip-divisjon',
      type: 'tip',
      content: `**Tips for polynomdivisjon:**
- Skriv alltid polynomene i synkende potensrekkefølge
- Husk å sette inn $0$ som koeffisient for manglende potenser
- Kontroller svaret ved å gange kvotienten med divisoren og legge til resten`,
    },

    // Oppgave 4 - Polynomdivisjon
    {
      id: 'r1-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utfør polynomdivisjonen. Oppgi kvotient og rest.',
        subTasks: [
          { label: 'a', task: '$\\frac{x^2 + 5x + 6}{x + 2}$', solution: 'Kvotient: $x + 3$, Rest: $0$' },
          { label: 'b', task: '$\\frac{x^3 - 8}{x - 2}$', solution: 'Kvotient: $x^2 + 2x + 4$, Rest: $0$' },
          { label: 'c', task: '$\\frac{2x^3 + 3x^2 - 5x + 1}{x + 2}$', solution: 'Kvotient: $2x^2 - x - 3$, Rest: $7$' },
          { label: 'd', task: '$\\frac{x^4 - 1}{x - 1}$', solution: 'Kvotient: $x^3 + x^2 + x + 1$, Rest: $0$' },
        ],
        hints: ['Del ledende ledd i dividenden på ledende ledd i divisoren', 'Kontroller: dividende = divisor · kvotient + rest'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FAKTORTEOREMET ==========
    {
      id: 'r1-1-1-faktor-intro',
      type: 'text',
      content: `## Faktorteoremet

Faktorteoremet gir oss en sammenheng mellom nullpunkter og faktorer i et polynom. Dette er et av de viktigste verktøyene for å faktorisere polynomer.`,
    },

    // Teorem: Faktorteoremet
    {
      id: 'r1-1-1-theorem-faktor',
      type: 'theorem',
      title: 'Faktorteoremet',
      content: `Et polynom $P(x)$ har $(x - a)$ som faktor hvis og bare hvis $P(a) = 0$.

Med andre ord: $x = a$ er et nullpunkt for $P(x)$ $\\Leftrightarrow$ $(x - a)$ er en faktor i $P(x)$.`,
    },

    // Note om faktorteoremet
    {
      id: 'r1-1-1-note-faktor',
      type: 'note',
      content: `**Praktisk bruk av faktorteoremet:**

1. Gjett et nullpunkt $x = a$ (prøv ofte $\\pm 1, \\pm 2, \\pm 3, \\ldots$)
2. Sjekk at $P(a) = 0$
3. Divider $P(x)$ på $(x - a)$ for å finne den andre faktoren
4. Gjenta prosessen med den reduserte faktoren`,
    },

    // Eksempel: Faktorteoremet
    {
      id: 'r1-1-1-example-faktor',
      type: 'example',
      title: 'Eksempel 4: Faktorisering med faktorteoremet',
      problem: `Faktoriser polynomet $P(x) = x^3 - 6x^2 + 11x - 6$ fullstendig.`,
      solution: `**Løsning:**

**Steg 1:** Vi prøver å finne et nullpunkt ved å teste enkle verdier.

$P(1) = 1 - 6 + 11 - 6 = 0$ ✓

Siden $P(1) = 0$, er $(x - 1)$ en faktor ifølge faktorteoremet.

**Steg 2:** Vi utfører polynomdivisjon:

$$\\frac{x^3 - 6x^2 + 11x - 6}{x - 1} = x^2 - 5x + 6$$

**Steg 3:** Vi faktoriserer $x^2 - 5x + 6$:

$x^2 - 5x + 6 = (x - 2)(x - 3)$

**Svar:**
$$P(x) = (x - 1)(x - 2)(x - 3)$$

Nullpunktene er $x = 1$, $x = 2$ og $x = 3$.`,
    },

    // GeoGebra: Visualisering av polynomgraf
    {
      id: 'r1-1-1-geogebra-graf',
      type: 'geogebra',
      title: 'Polynom med nullpunkter',
      description: 'Grafen til $P(x) = (x-1)(x-2)(x-3)$ med nullpunktene markert.',
      appType: 'graphing',
      commands: [
        'P(x) = (x-1)(x-2)(x-3)',
        'A = (1, 0)',
        'B = (2, 0)',
        'C = (3, 0)',
        'SetCaption(A, "x = 1")',
        'SetCaption(B, "x = 2")',
        'SetCaption(C, "x = 3")',
        'SetColor(A, "Blue")',
        'SetColor(B, "Blue")',
        'SetColor(C, "Blue")',
        'SetPointSize(A, 5)',
        'SetPointSize(B, 5)',
        'SetPointSize(C, 5)',
      ],
    },

    // Oppgave 5 - Faktorteoremet
    {
      id: 'r1-1-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk faktorteoremet til å faktorisere polynomene fullstendig.',
        subTasks: [
          { label: 'a', task: '$P(x) = x^3 - 7x + 6$', solution: '$P(1) = 0$, så $(x-1)$ er faktor. Divisjon gir $x^2 + x - 6 = (x+3)(x-2)$. Svar: $P(x) = (x-1)(x-2)(x+3)$' },
          { label: 'b', task: '$Q(x) = x^3 + 2x^2 - 5x - 6$', solution: '$Q(-1) = 0$, så $(x+1)$ er faktor. Divisjon gir $x^2 + x - 6 = (x+3)(x-2)$. Svar: $Q(x) = (x+1)(x-2)(x+3)$' },
          { label: 'c', task: '$R(x) = x^3 - 3x^2 - 4x + 12$', solution: '$R(2) = 0$, så $(x-2)$ er faktor. Divisjon gir $x^2 - x - 6 = (x-3)(x+2)$. Svar: $R(x) = (x-2)(x-3)(x+2)$' },
        ],
        hints: ['Prøv $x = \\pm 1, \\pm 2, \\pm 3$ for å finne et nullpunkt', 'Når du har funnet ett nullpunkt, bruk polynomdivisjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== RASJONALE RØTTER ==========
    {
      id: 'r1-1-1-rasjonale-intro',
      type: 'text',
      content: `## Metode for å finne rasjonale nullpunkter

Når vi leter etter nullpunkter, kan vi bruke en systematisk metode basert på koeffisientene i polynomet.`,
    },

    // Teorem: Rasjonale røtter
    {
      id: 'r1-1-1-theorem-rasjonale',
      type: 'theorem',
      title: 'Teoremet om rasjonale røtter',
      content: `Hvis et polynom $P(x) = a_n x^n + \\ldots + a_1 x + a_0$ med heltallskoeffisienter har en rasjonalt nullpunkt $\\frac{p}{q}$ (på forkortet form), så er:

- $p$ en divisor i konstantleddet $a_0$
- $q$ en divisor i den ledende koeffisienten $a_n$`,
    },

    // Eksempel: Rasjonale røtter
    {
      id: 'r1-1-1-example-rasjonale',
      type: 'example',
      title: 'Eksempel 5: Finne rasjonale nullpunkter',
      problem: `Finn alle nullpunkter til $P(x) = 2x^3 - 3x^2 - 3x + 2$.`,
      solution: `**Løsning:**

Mulige rasjonale nullpunkter er $\\frac{p}{q}$ der:
- $p$ deler konstantleddet $2$: $p \\in \\{\\pm 1, \\pm 2\\}$
- $q$ deler ledende koeffisient $2$: $q \\in \\{1, 2\\}$

Mulige kandidater: $\\pm 1, \\pm 2, \\pm \\frac{1}{2}$

**Test:**
- $P(1) = 2 - 3 - 3 + 2 = -2 \\neq 0$
- $P(-1) = -2 - 3 + 3 + 2 = 0$ ✓
- $P(2) = 16 - 12 - 6 + 2 = 0$ ✓

Vi har funnet to nullpunkter: $x = -1$ og $x = 2$.

Polynomdivisjon gir:
$$\\frac{2x^3 - 3x^2 - 3x + 2}{(x+1)(x-2)} = \\frac{2x^3 - 3x^2 - 3x + 2}{x^2 - x - 2} = 2x - 1$$

Det siste nullpunktet: $2x - 1 = 0 \\Rightarrow x = \\frac{1}{2}$

**Svar:** Nullpunktene er $x = -1$, $x = \\frac{1}{2}$ og $x = 2$.`,
    },

    // Oppgave 6
    {
      id: 'r1-1-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-1-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn alle nullpunkter til polynomene.',
        subTasks: [
          { label: 'a', task: '$P(x) = x^3 - 4x^2 + x + 6$', solution: 'Mulige: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. $P(-1) = 0$. Divisjon: $x^2 - 5x + 6 = (x-2)(x-3)$. Nullpunkter: $x = -1, 2, 3$' },
          { label: 'b', task: '$Q(x) = 2x^3 + x^2 - 5x + 2$', solution: 'Mulige: $\\pm 1, \\pm 2, \\pm \\frac{1}{2}$. $Q(1) = 0$. Divisjon: $2x^2 + 3x - 2 = (2x-1)(x+2)$. Nullpunkter: $x = 1, \\frac{1}{2}, -2$' },
          { label: 'c', task: '$R(x) = x^4 - 5x^2 + 4$', solution: 'Substitusjon $u = x^2$: $u^2 - 5u + 4 = (u-1)(u-4)$. Altså $x^2 = 1$ eller $x^2 = 4$. Nullpunkter: $x = \\pm 1, \\pm 2$' },
        ],
        hints: ['List opp alle mulige rasjonale kandidater først', 'Test systematisk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Polynomer:**
- Et polynom har formen $P(x) = a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_0$
- Graden er den høyeste potensen av $x$

**Polynomdivisjon:**
- Brukes til å dele et polynom på et annet
- $P(x) = D(x) \\cdot Q(x) + R(x)$

**Faktorteoremet:**
- $(x - a)$ er faktor i $P(x)$ $\\Leftrightarrow$ $P(a) = 0$

**Teoremet om rasjonale røtter:**
- Mulige rasjonale nullpunkter er $\\frac{p}{q}$ der $p$ deler konstantleddet og $q$ deler ledende koeffisient`,
    },

    // Ekstraoppgaver
    {
      id: 'r1-1-1-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r1-1-1-ex-block-7',
          type: 'exercise',
          exercise: {
            id: 'r1-1-1-ex-7',
            number: 'E1',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver',
            subTasks: [
              { label: 'a', task: 'Finn $k$ slik at $x + 2$ er en faktor i $P(x) = x^3 + kx^2 - x + 6$.', solution: '$P(-2) = 0 \\Rightarrow -8 + 4k + 2 + 6 = 0 \\Rightarrow 4k = 0 \\Rightarrow k = 0$' },
              { label: 'b', task: 'Faktoriser $P(x) = x^4 - 6x^3 + 11x^2 - 6x$ fullstendig.', solution: '$P(x) = x(x^3 - 6x^2 + 11x - 6) = x(x-1)(x-2)(x-3)$' },
              { label: 'c', task: 'Vis at $x^3 + y^3 = (x + y)(x^2 - xy + y^2)$.', solution: 'Multipliser ut høyre side: $(x+y)(x^2 - xy + y^2) = x^3 - x^2y + xy^2 + x^2y - xy^2 + y^3 = x^3 + y^3$ ✓' },
            ],
            hints: ['For a): Sett $P(-2) = 0$ og løs for $k$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_1_2: TextbookChapter = {
  id: 'r1-1-2',
  courseId: 'r1',
  chapterNumber: '1.2',
  title: 'Potenser og logaritmer',
  description: 'Lær regneregler for potenser og logaritmer, inkludert naturlig logaritme og briggske logaritmer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og forstå regneregler for potenser og logaritmer',
  ],
  content: [
    // ========== POTENSER ==========
    {
      id: 'r1-1-2-intro',
      type: 'text',
      content: `## Potenser

Potenser er en forkortet skrivemåte for gjentatt multiplikasjon. I R1 utvider vi potensreglene til å gjelde for alle reelle eksponenter.`,
    },

    // Definisjon: Potens
    {
      id: 'r1-1-2-def-potens',
      type: 'definition',
      title: 'Potens med rasjonale og reelle eksponenter',
      content: `For $a > 0$ og alle reelle tall $r$:

$$a^r = e^{r \\ln a}$$

Spesielt gjelder:
- $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$ for $a > 0$ og $n \\in \\mathbb{N}$
- $a^0 = 1$ for $a \\neq 0$
- $a^{-r} = \\frac{1}{a^r}$ for $a \\neq 0$`,
    },

    // Teorem: Potensregler
    {
      id: 'r1-1-2-theorem-potens',
      type: 'theorem',
      title: 'Potensregler',
      content: `For $a, b > 0$ og alle reelle tall $r$ og $s$:

$$a^r \\cdot a^s = a^{r+s}$$
$$\\frac{a^r}{a^s} = a^{r-s}$$
$$(a^r)^s = a^{r \\cdot s}$$
$$(ab)^r = a^r \\cdot b^r$$
$$\\left(\\frac{a}{b}\\right)^r = \\frac{a^r}{b^r}$$`,
    },

    // Eksempel: Potensregler
    {
      id: 'r1-1-2-example-potens',
      type: 'example',
      title: 'Eksempel 1: Potensregning',
      problem: `Forenkle uttrykkene:

a) $2^3 \\cdot 2^5$
b) $\\frac{3^7}{3^4}$
c) $(2^3)^4$
d) $8^{\\frac{2}{3}}$
e) $27^{-\\frac{1}{3}}$`,
      solution: `**Løsning:**

a) $2^3 \\cdot 2^5 = 2^{3+5} = 2^8 = 256$

b) $\\frac{3^7}{3^4} = 3^{7-4} = 3^3 = 27$

c) $(2^3)^4 = 2^{3 \\cdot 4} = 2^{12} = 4096$

d) $8^{\\frac{2}{3}} = \\sqrt[3]{8^2} = \\sqrt[3]{64} = 4$
   Alternativt: $8^{\\frac{2}{3}} = (8^{\\frac{1}{3}})^2 = 2^2 = 4$

e) $27^{-\\frac{1}{3}} = \\frac{1}{27^{\\frac{1}{3}}} = \\frac{1}{\\sqrt[3]{27}} = \\frac{1}{3}$`,
    },

    // Oppgave 1
    {
      id: 'r1-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forenkle uttrykkene.',
        subTasks: [
          { label: 'a', task: '$5^2 \\cdot 5^3$', solution: '$5^2 \\cdot 5^3 = 5^5 = 3125$' },
          { label: 'b', task: '$\\frac{2^{10}}{2^6}$', solution: '$\\frac{2^{10}}{2^6} = 2^4 = 16$' },
          { label: 'c', task: '$(3^2)^3$', solution: '$(3^2)^3 = 3^6 = 729$' },
          { label: 'd', task: '$16^{\\frac{3}{4}}$', solution: '$16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$' },
          { label: 'e', task: '$81^{-\\frac{1}{2}}$', solution: '$81^{-\\frac{1}{2}} = \\frac{1}{\\sqrt{81}} = \\frac{1}{9}$' },
          { label: 'f', task: '$\\left(\\frac{4}{9}\\right)^{\\frac{3}{2}}$', solution: '$\\left(\\frac{4}{9}\\right)^{\\frac{3}{2}} = \\frac{4^{\\frac{3}{2}}}{9^{\\frac{3}{2}}} = \\frac{8}{27}$' },
        ],
        hints: ['Bruk potensreglene systematisk', 'Husk at $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LOGARITMER ==========
    {
      id: 'r1-1-2-log-intro',
      type: 'text',
      content: `## Logaritmer

Logaritmen er den omvendte operasjonen til eksponentiering. Hvis $a^x = b$, så er $x = \\log_a b$ (logaritmen av $b$ med grunntall $a$).`,
    },

    // Definisjon: Logaritme
    {
      id: 'r1-1-2-def-log',
      type: 'definition',
      title: 'Logaritme',
      content: `For $a > 0$, $a \\neq 1$ og $b > 0$:

$$\\log_a b = x \\quad \\Leftrightarrow \\quad a^x = b$$

**Spesielle logaritmer:**
- **Naturlig logaritme**: $\\ln x = \\log_e x$ der $e \\approx 2{,}718$
- **Briggsk logaritme (tierlogaritme)**: $\\lg x = \\log_{10} x$`,
    },

    // Note om logaritmer
    {
      id: 'r1-1-2-note-log',
      type: 'note',
      content: `**Viktige verdier å huske:**

- $\\ln 1 = 0$ og $\\lg 1 = 0$ (fordi $a^0 = 1$)
- $\\ln e = 1$ og $\\lg 10 = 1$ (fordi $a^1 = a$)
- $\\ln e^x = x$ og $e^{\\ln x} = x$ (invers-sammenheng)`,
    },

    // Teorem: Logaritmeregler
    {
      id: 'r1-1-2-theorem-log',
      type: 'theorem',
      title: 'Logaritmeregler',
      content: `For $a > 0$, $a \\neq 1$ og $x, y > 0$:

$$\\log_a(xy) = \\log_a x + \\log_a y$$
$$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$$
$$\\log_a(x^r) = r \\cdot \\log_a x$$

**Skifte av grunntall:**
$$\\log_a x = \\frac{\\ln x}{\\ln a} = \\frac{\\lg x}{\\lg a}$$`,
    },

    // Eksempel: Logaritmeregler
    {
      id: 'r1-1-2-example-log',
      type: 'example',
      title: 'Eksempel 2: Logaritmeregning',
      problem: `Forenkle uttrykkene:

a) $\\ln(e^5)$
b) $\\lg 100 + \\lg 10$
c) $\\ln 8 - \\ln 2$
d) $2\\ln 3 + \\ln 4$
e) $\\log_2 32$`,
      solution: `**Løsning:**

a) $\\ln(e^5) = 5$ (logaritme av eksponentialfunksjon med samme grunntall)

b) $\\lg 100 + \\lg 10 = \\lg(100 \\cdot 10) = \\lg 1000 = 3$
   Alternativt: $\\lg 100 + \\lg 10 = 2 + 1 = 3$

c) $\\ln 8 - \\ln 2 = \\ln\\frac{8}{2} = \\ln 4$

d) $2\\ln 3 + \\ln 4 = \\ln 3^2 + \\ln 4 = \\ln 9 + \\ln 4 = \\ln 36$

e) $\\log_2 32 = \\log_2 2^5 = 5$`,
    },

    // GeoGebra: Logaritmefunksjoner
    {
      id: 'r1-1-2-geogebra-log',
      type: 'geogebra',
      title: 'Logaritmefunksjoner',
      description: 'Sammenligning av $\\ln x$, $\\lg x$ og $\\log_2 x$.',
      appType: 'graphing',
      commands: [
        'f(x) = ln(x)',
        'g(x) = log(x)',
        'h(x) = log(2, x)',
        'SetColor(f, "Blue")',
        'SetColor(g, "Red")',
        'SetColor(h, "Green")',
        'SetCaption(f, "ln(x)")',
        'SetCaption(g, "lg(x)")',
        'SetCaption(h, "log₂(x)")',
        'A = (1, 0)',
        'SetPointSize(A, 4)',
        'SetCaption(A, "Felles punkt (1, 0)")',
      ],
    },

    // Oppgave 2
    {
      id: 'r1-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut uten kalkulator.',
        subTasks: [
          { label: 'a', task: '$\\lg 1000$', solution: '$\\lg 1000 = \\lg 10^3 = 3$' },
          { label: 'b', task: '$\\ln e^4$', solution: '$\\ln e^4 = 4$' },
          { label: 'c', task: '$\\log_3 81$', solution: '$\\log_3 81 = \\log_3 3^4 = 4$' },
          { label: 'd', task: '$\\log_5 \\frac{1}{25}$', solution: '$\\log_5 \\frac{1}{25} = \\log_5 5^{-2} = -2$' },
          { label: 'e', task: '$\\log_4 2$', solution: '$\\log_4 2 = \\log_4 4^{\\frac{1}{2}} = \\frac{1}{2}$' },
          { label: 'f', task: '$e^{\\ln 7}$', solution: '$e^{\\ln 7} = 7$' },
        ],
        hints: ['Skriv om tallet som en potens av grunntallet', 'Husk at $\\log_a a^x = x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3 - Logaritmeregler
    {
      id: 'r1-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv som én logaritme.',
        subTasks: [
          { label: 'a', task: '$\\ln 5 + \\ln 3$', solution: '$\\ln 5 + \\ln 3 = \\ln(5 \\cdot 3) = \\ln 15$' },
          { label: 'b', task: '$\\lg 50 - \\lg 5$', solution: '$\\lg 50 - \\lg 5 = \\lg \\frac{50}{5} = \\lg 10 = 1$' },
          { label: 'c', task: '$3\\ln 2$', solution: '$3\\ln 2 = \\ln 2^3 = \\ln 8$' },
          { label: 'd', task: '$2\\ln 5 - \\ln 25$', solution: '$2\\ln 5 - \\ln 25 = \\ln 25 - \\ln 25 = 0$' },
          { label: 'e', task: '$\\frac{1}{2}\\ln 16 + \\ln 3$', solution: '$\\frac{1}{2}\\ln 16 + \\ln 3 = \\ln 4 + \\ln 3 = \\ln 12$' },
          { label: 'f', task: '$\\ln a + 2\\ln b - 3\\ln c$', solution: '$\\ln a + 2\\ln b - 3\\ln c = \\ln \\frac{ab^2}{c^3}$' },
        ],
        hints: ['Bruk $\\log(xy) = \\log x + \\log y$', 'Bruk $r \\cdot \\log x = \\log x^r$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SKIFTE AV GRUNNTALL ==========
    {
      id: 'r1-1-2-skifte-intro',
      type: 'text',
      content: `## Skifte av grunntall

Ofte trenger vi å skrive om en logaritme fra ett grunntall til et annet. Dette er spesielt nyttig når vi skal bruke kalkulator (som vanligvis bare har $\\ln$ og $\\lg$).`,
    },

    // Eksempel: Skifte av grunntall
    {
      id: 'r1-1-2-example-skifte',
      type: 'example',
      title: 'Eksempel 3: Skifte av grunntall',
      problem: `a) Skriv om $\\log_5 7$ med naturlig logaritme.
b) Regn ut $\\log_3 20$ med kalkulator.`,
      solution: `**Løsning:**

a) $\\log_5 7 = \\frac{\\ln 7}{\\ln 5}$

b) $\\log_3 20 = \\frac{\\ln 20}{\\ln 3} \\approx \\frac{2{,}996}{1{,}099} \\approx 2{,}73$

**Kontroll:** $3^{2{,}73} \\approx 20$ ✓`,
    },

    // Oppgave 4
    {
      id: 'r1-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om med naturlig logaritme og regn ut med kalkulator.',
        subTasks: [
          { label: 'a', task: '$\\log_2 10$', solution: '$\\log_2 10 = \\frac{\\ln 10}{\\ln 2} \\approx 3{,}32$' },
          { label: 'b', task: '$\\log_7 50$', solution: '$\\log_7 50 = \\frac{\\ln 50}{\\ln 7} \\approx 2{,}01$' },
          { label: 'c', task: '$\\log_{0{,}5} 8$', solution: '$\\log_{0{,}5} 8 = \\frac{\\ln 8}{\\ln 0{,}5} = \\frac{\\ln 8}{-\\ln 2} = -3$' },
          { label: 'd', task: '$\\log_4 \\sqrt{2}$', solution: '$\\log_4 \\sqrt{2} = \\frac{\\ln \\sqrt{2}}{\\ln 4} = \\frac{\\frac{1}{2}\\ln 2}{2\\ln 2} = \\frac{1}{4}$' },
        ],
        hints: ['Bruk $\\log_a x = \\frac{\\ln x}{\\ln a}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMMENHENG POTENS OG LOGARITME ==========
    {
      id: 'r1-1-2-sammenheng',
      type: 'text',
      content: `## Sammenheng mellom potenser og logaritmer

Potens- og logaritmefunksjoner er inverse av hverandre. Dette betyr at de "opphever" hverandre.`,
    },

    // Teorem: Invers-sammenheng
    {
      id: 'r1-1-2-theorem-invers',
      type: 'theorem',
      title: 'Invers-sammenhengen',
      content: `For $a > 0$, $a \\neq 1$:

$$a^{\\log_a x} = x \\quad \\text{for } x > 0$$
$$\\log_a(a^x) = x \\quad \\text{for alle } x$$

**Spesielt:**
- $e^{\\ln x} = x$ og $\\ln(e^x) = x$
- $10^{\\lg x} = x$ og $\\lg(10^x) = x$`,
    },

    // Oppgave 5
    {
      id: 'r1-1-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle uttrykkene.',
        subTasks: [
          { label: 'a', task: '$e^{2\\ln 3}$', solution: '$e^{2\\ln 3} = e^{\\ln 3^2} = e^{\\ln 9} = 9$' },
          { label: 'b', task: '$\\ln(e^{x+1})$', solution: '$\\ln(e^{x+1}) = x + 1$' },
          { label: 'c', task: '$10^{2\\lg 5}$', solution: '$10^{2\\lg 5} = 10^{\\lg 25} = 25$' },
          { label: 'd', task: '$e^{\\ln x + \\ln y}$', solution: '$e^{\\ln x + \\ln y} = e^{\\ln(xy)} = xy$' },
          { label: 'e', task: '$\\ln\\left(\\frac{e^a}{e^b}\\right)$', solution: '$\\ln\\left(\\frac{e^a}{e^b}\\right) = \\ln(e^{a-b}) = a - b$' },
        ],
        hints: ['Bruk at $e^{\\ln x} = x$ og $\\ln(e^x) = x$', 'Forenkle eksponenten først ved hjelp av logaritmeregler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Potensregler:** For $a, b > 0$:
- $a^r \\cdot a^s = a^{r+s}$
- $\\frac{a^r}{a^s} = a^{r-s}$
- $(a^r)^s = a^{rs}$

**Logaritmeregler:** For $x, y > 0$:
- $\\log_a(xy) = \\log_a x + \\log_a y$
- $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$
- $\\log_a(x^r) = r \\cdot \\log_a x$

**Skifte av grunntall:**
$$\\log_a x = \\frac{\\ln x}{\\ln a}$$

**Invers-sammenheng:**
$$a^{\\log_a x} = x \\quad \\text{og} \\quad \\log_a(a^x) = x$$`,
    },

    // Ekstraoppgaver
    {
      id: 'r1-1-2-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r1-1-2-ex-block-6',
          type: 'exercise',
          exercise: {
            id: 'r1-1-2-ex-6',
            number: 'E1',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver',
            subTasks: [
              { label: 'a', task: 'Vis at $\\log_a b \\cdot \\log_b a = 1$', solution: '$\\log_a b \\cdot \\log_b a = \\frac{\\ln b}{\\ln a} \\cdot \\frac{\\ln a}{\\ln b} = 1$' },
              { label: 'b', task: 'Forenkle $\\log_2 3 \\cdot \\log_3 4 \\cdot \\log_4 8$', solution: '$\\frac{\\ln 3}{\\ln 2} \\cdot \\frac{\\ln 4}{\\ln 3} \\cdot \\frac{\\ln 8}{\\ln 4} = \\frac{\\ln 8}{\\ln 2} = \\log_2 8 = 3$' },
              { label: 'c', task: 'Løs $\\log_x 8 = 3$', solution: '$x^3 = 8 \\Rightarrow x = 2$' },
              { label: 'd', task: 'Vis at $\\ln(1+x) \\approx x$ for små verdier av $x$', solution: 'Taylor-rekken gir $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\ldots \\approx x$ for $|x| \\ll 1$' },
            ],
            hints: ['Bruk formelen for skifte av grunntall'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_1_3: TextbookChapter = {
  id: 'r1-1-3',
  courseId: 'r1',
  chapterNumber: '1.3',
  title: 'Eksponential- og logaritmeligninger',
  description: 'Lær å løse eksponentialligninger og logaritmeligninger, med anvendelser på halveringstid og doblingstid.',
  estimatedMinutes: 60,
  competenceGoals: [
    'løse eksponentialligninger ved å ta logaritmen på begge sider',
    'løse logaritmeligninger ved å bruke definisjonen',
    'anvende eksponential- og logaritmefunksjoner på praktiske problemer',
  ],
  content: [
    // ========== EKSPONENTIALLIGNINGER ==========
    {
      id: 'r1-1-3-intro',
      type: 'text',
      content: `## Eksponentialligninger

En eksponentialligning er en ligning der den ukjente står i eksponenten. For å løse slike ligninger bruker vi logaritmer.`,
    },

    // Definisjon: Eksponentialligning
    {
      id: 'r1-1-3-def-eksp',
      type: 'definition',
      title: 'Eksponentialligning',
      content: `En **eksponentialligning** er en ligning på formen:

$$a^{f(x)} = b$$

der $a > 0$, $a \\neq 1$, $b > 0$, og $f(x)$ er et uttrykk som inneholder $x$.

**Løsningsmetode:** Ta logaritmen på begge sider:
$$f(x) = \\log_a b = \\frac{\\ln b}{\\ln a}$$`,
    },

    // Eksempel 1: Enkel eksponentialligning
    {
      id: 'r1-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkle eksponentialligninger',
      problem: `Løs ligningene:

a) $2^x = 16$
b) $3^x = 50$
c) $5^{2x} = 125$`,
      solution: `**Løsning:**

a) $2^x = 16$

   Vi ser at $16 = 2^4$, så $2^x = 2^4$, altså $x = 4$.

   Alternativt med logaritme: $x = \\log_2 16 = \\frac{\\ln 16}{\\ln 2} = 4$

b) $3^x = 50$

   Her må vi bruke logaritme:
   $$x = \\log_3 50 = \\frac{\\ln 50}{\\ln 3} \\approx \\frac{3{,}912}{1{,}099} \\approx 3{,}56$$

c) $5^{2x} = 125$

   Vi har $125 = 5^3$, så $5^{2x} = 5^3$
   $$2x = 3 \\quad \\Rightarrow \\quad x = \\frac{3}{2} = 1{,}5$$`,
    },

    // Oppgave 1
    {
      id: 'r1-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs eksponentialligningene.',
        subTasks: [
          { label: 'a', task: '$2^x = 32$', solution: '$2^x = 2^5 \\Rightarrow x = 5$' },
          { label: 'b', task: '$3^x = 81$', solution: '$3^x = 3^4 \\Rightarrow x = 4$' },
          { label: 'c', task: '$5^x = 20$', solution: '$x = \\log_5 20 = \\frac{\\ln 20}{\\ln 5} \\approx 1{,}86$' },
          { label: 'd', task: '$10^x = 500$', solution: '$x = \\lg 500 \\approx 2{,}70$' },
          { label: 'e', task: '$4^{x-1} = 16$', solution: '$4^{x-1} = 4^2 \\Rightarrow x - 1 = 2 \\Rightarrow x = 3$' },
          { label: 'f', task: '$e^x = 10$', solution: '$x = \\ln 10 \\approx 2{,}30$' },
        ],
        hints: ['Prøv å skrive høyre side som en potens av grunntallet', 'Bruk $\\log_a b = \\frac{\\ln b}{\\ln a}$ når det ikke går opp'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 2: Mer kompliserte eksponentialligninger
    {
      id: 'r1-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Ligninger med ukjent på begge sider',
      problem: `Løs ligningen $2^{x+1} = 5^{x-2}$.`,
      solution: `**Løsning:**

Vi tar den naturlige logaritmen på begge sider:
$$\\ln(2^{x+1}) = \\ln(5^{x-2})$$
$$(x+1)\\ln 2 = (x-2)\\ln 5$$

Vi utvider:
$$x \\ln 2 + \\ln 2 = x \\ln 5 - 2\\ln 5$$

Samler $x$-leddene på én side:
$$x \\ln 2 - x \\ln 5 = -2\\ln 5 - \\ln 2$$
$$x(\\ln 2 - \\ln 5) = -2\\ln 5 - \\ln 2$$
$$x = \\frac{-2\\ln 5 - \\ln 2}{\\ln 2 - \\ln 5} = \\frac{2\\ln 5 + \\ln 2}{\\ln 5 - \\ln 2}$$

Med kalkulator:
$$x = \\frac{2 \\cdot 1{,}609 + 0{,}693}{1{,}609 - 0{,}693} = \\frac{3{,}911}{0{,}916} \\approx 4{,}27$$`,
    },

    // Oppgave 2
    {
      id: 'r1-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs eksponentialligningene.',
        subTasks: [
          { label: 'a', task: '$2 \\cdot 3^x = 54$', solution: '$3^x = 27 = 3^3 \\Rightarrow x = 3$' },
          { label: 'b', task: '$5 \\cdot 2^{x+1} = 80$', solution: '$2^{x+1} = 16 = 2^4 \\Rightarrow x + 1 = 4 \\Rightarrow x = 3$' },
          { label: 'c', task: '$3^{2x} = 7^x$', solution: 'Ta $\\ln$: $2x \\ln 3 = x \\ln 7 \\Rightarrow x(2\\ln 3 - \\ln 7) = 0 \\Rightarrow x = 0$' },
          { label: 'd', task: '$2^{x+3} = 3^{x-1}$', solution: '$(x+3)\\ln 2 = (x-1)\\ln 3 \\Rightarrow x = \\frac{3\\ln 2 + \\ln 3}{\\ln 3 - \\ln 2} \\approx 7{,}23$' },
        ],
        hints: ['Isoler potensleddet først', 'Ta logaritmen på begge sider'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LOGARITMELIGNINGER ==========
    {
      id: 'r1-1-3-log-intro',
      type: 'text',
      content: `## Logaritmeligninger

En logaritmeligning er en ligning der den ukjente står inne i en logaritme. Vi løser slike ligninger ved å bruke definisjonen av logaritme.`,
    },

    // Definisjon: Logaritmeligning
    {
      id: 'r1-1-3-def-log',
      type: 'definition',
      title: 'Logaritmeligning',
      content: `En **logaritmeligning** er en ligning som inneholder $\\log_a(f(x))$ der $f(x)$ er et uttrykk med $x$.

**Løsningsmetode:** Bruk definisjonen $\\log_a b = c \\Leftrightarrow a^c = b$

**Viktig:** Husk å sjekke at løsningen gir positivt argument til logaritmen!`,
    },

    // Eksempel 3: Logaritmeligninger
    {
      id: 'r1-1-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Logaritmeligninger',
      problem: `Løs ligningene:

a) $\\ln x = 3$
b) $\\lg(2x + 1) = 2$
c) $\\ln(x - 1) + \\ln(x + 1) = \\ln 8$`,
      solution: `**Løsning:**

a) $\\ln x = 3$

   Ved definisjonen: $x = e^3 \\approx 20{,}09$

b) $\\lg(2x + 1) = 2$

   Ved definisjonen: $2x + 1 = 10^2 = 100$
   $$2x = 99 \\quad \\Rightarrow \\quad x = 49{,}5$$

   Sjekk: $2 \\cdot 49{,}5 + 1 = 100 > 0$ ✓

c) $\\ln(x - 1) + \\ln(x + 1) = \\ln 8$

   Bruker produktregelen:
   $$\\ln[(x-1)(x+1)] = \\ln 8$$
   $$(x-1)(x+1) = 8$$
   $$x^2 - 1 = 8$$
   $$x^2 = 9$$
   $$x = \\pm 3$$

   Sjekk: For $x = 3$: $\\ln 2 + \\ln 4 = \\ln 8$ ✓
   For $x = -3$: $\\ln(-4)$ er udefinert ✗

   **Svar:** $x = 3$`,
    },

    // Oppgave 3
    {
      id: 'r1-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs logaritmeligningene. Husk å sjekke løsningen!',
        subTasks: [
          { label: 'a', task: '$\\ln x = 5$', solution: '$x = e^5 \\approx 148{,}4$' },
          { label: 'b', task: '$\\lg x = -1$', solution: '$x = 10^{-1} = 0{,}1$' },
          { label: 'c', task: '$\\ln(3x - 2) = 0$', solution: '$3x - 2 = e^0 = 1 \\Rightarrow x = 1$. Sjekk: $3 \\cdot 1 - 2 = 1 > 0$ ✓' },
          { label: 'd', task: '$\\lg(x^2) = 4$', solution: '$x^2 = 10^4 \\Rightarrow x = \\pm 100$. Begge løsninger gir $x^2 > 0$ ✓' },
          { label: 'e', task: '$\\ln x + \\ln(x + 2) = \\ln 3$', solution: '$\\ln[x(x+2)] = \\ln 3 \\Rightarrow x^2 + 2x = 3 \\Rightarrow x = 1$ eller $x = -3$. Bare $x = 1$ er gyldig.' },
        ],
        hints: ['Bruk $\\log_a b = c \\Leftrightarrow a^c = b$', 'Sjekk alltid at argumentet til logaritmen blir positivt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 4: Logaritmeligning med to logaritmer
    {
      id: 'r1-1-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Ligninger med logaritmer på begge sider',
      problem: `Løs ligningen $\\log_2(x + 3) = \\log_2(2x - 1) + 1$.`,
      solution: `**Løsning:**

Vi skriver om høyre side:
$$\\log_2(x + 3) = \\log_2(2x - 1) + \\log_2 2$$
$$\\log_2(x + 3) = \\log_2[2(2x - 1)]$$
$$\\log_2(x + 3) = \\log_2(4x - 2)$$

Siden logaritmene er like:
$$x + 3 = 4x - 2$$
$$5 = 3x$$
$$x = \\frac{5}{3}$$

**Sjekk:**
- $x + 3 = \\frac{5}{3} + 3 = \\frac{14}{3} > 0$ ✓
- $2x - 1 = \\frac{10}{3} - 1 = \\frac{7}{3} > 0$ ✓

**Svar:** $x = \\frac{5}{3}$`,
    },

    // ========== PRAKTISKE ANVENDELSER ==========
    {
      id: 'r1-1-3-anvendelser',
      type: 'text',
      content: `## Praktiske anvendelser

Eksponentialligninger dukker ofte opp i praktiske sammenhenger, spesielt i modeller for vekst og nedbryting.`,
    },

    // Definisjon: Halveringstid og doblingstid
    {
      id: 'r1-1-3-def-halv',
      type: 'definition',
      title: 'Halveringstid og doblingstid',
      content: `For en eksponentiell vekstmodell $N(t) = N_0 \\cdot a^t$:

**Doblingstid** $T_2$: Tiden det tar for mengden å dobles.
$$N_0 \\cdot a^{T_2} = 2N_0 \\quad \\Rightarrow \\quad T_2 = \\frac{\\ln 2}{\\ln a}$$

**Halveringstid** $T_{1/2}$: Tiden det tar for mengden å halveres.
$$N_0 \\cdot a^{T_{1/2}} = \\frac{N_0}{2} \\quad \\Rightarrow \\quad T_{1/2} = \\frac{\\ln(1/2)}{\\ln a} = -\\frac{\\ln 2}{\\ln a}$$`,
    },

    // Eksempel 5: Halveringstid
    {
      id: 'r1-1-3-example-5',
      type: 'example',
      title: 'Eksempel 5: Radioaktiv nedbryting',
      problem: `Karbon-14 har en halveringstid på 5730 år. Et arkeologisk funn inneholder 35% av den opprinnelige mengden karbon-14. Hvor gammelt er funnet?`,
      solution: `**Løsning:**

Med halveringstid $T_{1/2} = 5730$ år har vi vekstmodellen:
$$N(t) = N_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/5730}$$

Vi skal finne $t$ når $N(t) = 0{,}35 N_0$:
$$0{,}35 N_0 = N_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/5730}$$
$$0{,}35 = \\left(\\frac{1}{2}\\right)^{t/5730}$$

Tar logaritmen på begge sider:
$$\\ln 0{,}35 = \\frac{t}{5730} \\cdot \\ln\\frac{1}{2}$$
$$t = \\frac{5730 \\cdot \\ln 0{,}35}{\\ln 0{,}5}$$
$$t = \\frac{5730 \\cdot (-1{,}050)}{-0{,}693} \\approx 8680 \\text{ år}$$

**Svar:** Funnet er omtrent 8680 år gammelt.`,
    },

    // Eksempel 6: Doblingstid
    {
      id: 'r1-1-3-example-6',
      type: 'example',
      title: 'Eksempel 6: Bakterievekst',
      problem: `En bakteriekultur dobler seg hver 3. time.

a) Finn en modell for antall bakterier $N(t)$ etter $t$ timer, gitt at det er 1000 bakterier ved $t = 0$.
b) Hvor lang tid tar det før det er 50 000 bakterier?`,
      solution: `**Løsning:**

a) Doblingstid $T_2 = 3$ timer gir:
$$N(t) = N_0 \\cdot 2^{t/3} = 1000 \\cdot 2^{t/3}$$

b) Vi løser $1000 \\cdot 2^{t/3} = 50000$:
$$2^{t/3} = 50$$
$$\\frac{t}{3} = \\log_2 50 = \\frac{\\ln 50}{\\ln 2} \\approx 5{,}64$$
$$t \\approx 16{,}9 \\text{ timer}$$

**Svar:** Det tar omtrent 17 timer.`,
    },

    // Oppgave 4
    {
      id: 'r1-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene.',
        subTasks: [
          { label: 'a', task: 'En bakteriekultur vokser med 15% per time. Finn doblingstiden.', solution: '$1{,}15^{T_2} = 2 \\Rightarrow T_2 = \\frac{\\ln 2}{\\ln 1{,}15} \\approx 4{,}96$ timer' },
          { label: 'b', task: 'Et radioaktivt stoff har halveringstid 10 dager. Hvor stor andel er igjen etter 25 dager?', solution: '$N(25) = N_0 \\cdot (0{,}5)^{25/10} = N_0 \\cdot 0{,}5^{2{,}5} \\approx 0{,}177 N_0$, altså ca. 17,7%' },
          { label: 'c', task: 'En investering vokser med 5% årlig rente. Hvor lang tid tar det å tredoble investeringen?', solution: '$1{,}05^t = 3 \\Rightarrow t = \\frac{\\ln 3}{\\ln 1{,}05} \\approx 22{,}5$ år' },
        ],
        hints: ['Bruk formlene for doblingstid og halveringstid', 'Sett opp ligningen og ta logaritmen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-1-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs de sammensatte oppgavene.',
        subTasks: [
          { label: 'a', task: 'Løs $e^{2x} - 5e^x + 6 = 0$', solution: 'Sett $u = e^x$: $u^2 - 5u + 6 = 0 \\Rightarrow (u-2)(u-3) = 0$. $e^x = 2 \\Rightarrow x = \\ln 2$ eller $e^x = 3 \\Rightarrow x = \\ln 3$' },
          { label: 'b', task: 'Løs $2^x + 2^{-x} = 3$', solution: 'Sett $u = 2^x$: $u + \\frac{1}{u} = 3 \\Rightarrow u^2 - 3u + 1 = 0 \\Rightarrow u = \\frac{3 \\pm \\sqrt{5}}{2}$. $x = \\log_2\\left(\\frac{3+\\sqrt{5}}{2}\\right) \\approx 0{,}69$ eller $x \\approx -0{,}69$' },
          { label: 'c', task: 'Løs $\\ln(\\ln x) = 0$', solution: '$\\ln x = e^0 = 1 \\Rightarrow x = e$' },
        ],
        hints: ['Prøv substitusjon $u = e^x$ eller $u = 2^x$', 'Bruk andregradsformelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // GeoGebra: Eksponential vs logaritme
    {
      id: 'r1-1-3-geogebra',
      type: 'geogebra',
      title: 'Løsning av eksponentialligning grafisk',
      description: 'Finn skjæringspunktet mellom $y = 2^x$ og $y = 5$.',
      appType: 'graphing',
      commands: [
        'f(x) = 2^x',
        'g(x) = 5',
        'A = Intersect(f, g)',
        'SetColor(f, "Blue")',
        'SetColor(g, "Red")',
        'SetPointSize(A, 5)',
        'SetCaption(A, "Løsning")',
      ],
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Eksponentialligninger:**
- $a^{f(x)} = b$ løses ved $f(x) = \\log_a b = \\frac{\\ln b}{\\ln a}$
- Ta logaritmen på begge sider når ukjent er i eksponenten

**Logaritmeligninger:**
- $\\log_a f(x) = c$ løses ved $f(x) = a^c$
- Husk å sjekke at løsningen gir positivt argument

**Praktiske anvendelser:**
- Doblingstid: $T_2 = \\frac{\\ln 2}{\\ln a}$
- Halveringstid: $T_{1/2} = -\\frac{\\ln 2}{\\ln a}$`,
    },

    // Ekstraoppgaver
    {
      id: 'r1-1-3-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r1-1-3-ex-block-6',
          type: 'exercise',
          exercise: {
            id: 'r1-1-3-ex-6',
            number: 'E1',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver',
            subTasks: [
              { label: 'a', task: 'Løs $4^x - 3 \\cdot 2^x - 4 = 0$', solution: 'Sett $u = 2^x$: $u^2 - 3u - 4 = 0 \\Rightarrow (u-4)(u+1) = 0$. Bare $u = 4$ gir løsning: $x = 2$' },
              { label: 'b', task: 'Løs $\\log_2(x-1) + \\log_2(x+1) = 3$', solution: '$\\log_2[(x-1)(x+1)] = 3 \\Rightarrow x^2 - 1 = 8 \\Rightarrow x = 3$ (forkast $x = -3$)' },
              { label: 'c', task: 'Et legemiddel i blodet halveres hver 4. time. Etter hvor lang tid er det mindre enn 10% igjen?', solution: '$(0{,}5)^{t/4} < 0{,}1 \\Rightarrow \\frac{t}{4} > \\log_{0{,}5} 0{,}1 \\Rightarrow t > \\frac{4 \\ln 0{,}1}{\\ln 0{,}5} \\approx 13{,}3$ timer' },
            ],
            hints: ['Bruk substitusjon for ligninger med $4^x$ og $2^x$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_2_1: TextbookChapter = {
  id: 'r1-2-1',
  courseId: 'r1',
  chapterNumber: '2.1',
  title: 'Funksjonstyper og egenskaper',
  description: 'Lær om polynomfunksjoner, rasjonale funksjoner, eksponentialfunksjoner, samt egenskaper som definisjonsmengde, verdimengde og symmetri.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjenkjenne og beskrive ulike funksjonstyper',
    'finne definisjonsmengde og verdimengde',
    'avgjøre om en funksjon er odde eller like',
    'finne nullpunkter og analysere fortegn',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-2-1-intro',
      type: 'text',
      content: `## Funksjonstyper

I R1 arbeider vi med ulike typer funksjoner. Det er viktig å kunne gjenkjenne dem og forstå deres egenskaper.`,
    },

    // Definisjon: Funksjonstyper
    {
      id: 'r1-2-1-def-typer',
      type: 'definition',
      title: 'Viktige funksjonstyper',
      content: `**Polynomfunksjoner:**
$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0$$

**Rasjonale funksjoner:**
$$R(x) = \\frac{P(x)}{Q(x)}$$
der $P$ og $Q$ er polynomer.

**Eksponentialfunksjoner:**
$$f(x) = a \\cdot b^x \\quad \\text{eller} \\quad f(x) = a \\cdot e^{kx}$$

**Logaritmefunksjoner:**
$$f(x) = \\log_a x \\quad \\text{eller} \\quad f(x) = \\ln x$$

**Potensefunksjoner:**
$$f(x) = x^r \\quad \\text{der } r \\text{ er en konstant}$$`,
    },

    // Eksempel 1: Identifisere funksjonstyper
    {
      id: 'r1-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifisere funksjonstyper',
      problem: `Klassifiser funksjonene:

a) $f(x) = 3x^4 - 2x^2 + 1$
b) $g(x) = \\frac{x^2 - 1}{x + 3}$
c) $h(x) = 2 \\cdot 3^x$
d) $k(x) = \\sqrt{x}$`,
      solution: `**Løsning:**

a) $f(x) = 3x^4 - 2x^2 + 1$ er en **polynomfunksjon** av grad 4.

b) $g(x) = \\frac{x^2 - 1}{x + 3}$ er en **rasjonale funksjon** (brøk av polynomer).

c) $h(x) = 2 \\cdot 3^x$ er en **eksponentialfunksjon** med grunntall 3.

d) $k(x) = \\sqrt{x} = x^{1/2}$ er en **potensefunksjon** med eksponent $\\frac{1}{2}$.`,
    },

    // ========== DEFINISJONSMENGDE OG VERDIMENGDE ==========
    {
      id: 'r1-2-1-dm-intro',
      type: 'text',
      content: `## Definisjonsmengde og verdimengde

**Definisjonsmengden** $D_f$ er mengden av alle $x$-verdier der funksjonen er definert.

**Verdimengden** $V_f$ er mengden av alle $y$-verdier funksjonen kan anta.`,
    },

    // Teorem: Definisjonsmengde
    {
      id: 'r1-2-1-theorem-dm',
      type: 'theorem',
      title: 'Regler for definisjonsmengde',
      content: `**Begrensninger på definisjonsmengden:**

1. **Divisjon med null:** $\\frac{P(x)}{Q(x)}$ er udefinert når $Q(x) = 0$

2. **Kvadratrot av negativt tall:** $\\sqrt{f(x)}$ krever $f(x) \\geq 0$

3. **Logaritme av ikke-positivt tall:** $\\ln f(x)$ krever $f(x) > 0$`,
    },

    // Eksempel 2: Finne definisjonsmengde
    {
      id: 'r1-2-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne definisjonsmengde',
      problem: `Finn definisjonsmengden til:

a) $f(x) = \\frac{1}{x - 2}$
b) $g(x) = \\sqrt{4 - x^2}$
c) $h(x) = \\ln(x - 1)$
d) $k(x) = \\frac{\\sqrt{x}}{x - 4}$`,
      solution: `**Løsning:**

a) $f(x) = \\frac{1}{x - 2}$

   Nevneren kan ikke være null: $x - 2 \\neq 0 \\Rightarrow x \\neq 2$

   $D_f = \\mathbb{R} \\setminus \\{2\\}$ eller $D_f = \\langle -\\infty, 2 \\rangle \\cup \\langle 2, \\infty \\rangle$

b) $g(x) = \\sqrt{4 - x^2}$

   Må ha: $4 - x^2 \\geq 0 \\Rightarrow x^2 \\leq 4 \\Rightarrow -2 \\leq x \\leq 2$

   $D_g = [-2, 2]$

c) $h(x) = \\ln(x - 1)$

   Må ha: $x - 1 > 0 \\Rightarrow x > 1$

   $D_h = \\langle 1, \\infty \\rangle$

d) $k(x) = \\frac{\\sqrt{x}}{x - 4}$

   To krav: $x \\geq 0$ og $x \\neq 4$

   $D_k = [0, 4\\rangle \\cup \\langle 4, \\infty \\rangle$`,
    },

    // Oppgave 1
    {
      id: 'r1-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn definisjonsmengden til funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{2x}{x^2 - 9}$', solution: '$x^2 - 9 \\neq 0 \\Rightarrow x \\neq \\pm 3$. $D_f = \\mathbb{R} \\setminus \\{-3, 3\\}$' },
          { label: 'b', task: '$g(x) = \\sqrt{x - 3}$', solution: '$x - 3 \\geq 0 \\Rightarrow x \\geq 3$. $D_g = [3, \\infty \\rangle$' },
          { label: 'c', task: '$h(x) = \\ln(2x + 4)$', solution: '$2x + 4 > 0 \\Rightarrow x > -2$. $D_h = \\langle -2, \\infty \\rangle$' },
          { label: 'd', task: '$k(x) = \\frac{1}{\\sqrt{x-1}}$', solution: '$x - 1 > 0 \\Rightarrow x > 1$. $D_k = \\langle 1, \\infty \\rangle$' },
          { label: 'e', task: '$m(x) = \\sqrt{x} + \\ln x$', solution: '$x > 0$ og $x \\geq 0 \\Rightarrow x > 0$. $D_m = \\langle 0, \\infty \\rangle$' },
        ],
        hints: ['Identifiser hvilke begrensninger som gjelder', 'Løs ulikhetene for $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 3: Verdimengde
    {
      id: 'r1-2-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Finne verdimengde',
      problem: `Finn verdimengden til:

a) $f(x) = x^2$
b) $g(x) = e^x$
c) $h(x) = \\frac{1}{x}$ for $x > 0$`,
      solution: `**Løsning:**

a) $f(x) = x^2$

   Kvadratet er alltid $\\geq 0$, og kan bli vilkårlig stort.

   $V_f = [0, \\infty \\rangle$

b) $g(x) = e^x$

   Eksponentialfunksjonen er alltid positiv og kan bli vilkårlig stor eller liten (men aldri 0).

   $V_g = \\langle 0, \\infty \\rangle$

c) $h(x) = \\frac{1}{x}$ for $x > 0$

   Når $x \\to 0^+$, går $h(x) \\to \\infty$.
   Når $x \\to \\infty$, går $h(x) \\to 0^+$.

   $V_h = \\langle 0, \\infty \\rangle$`,
    },

    // Oppgave 2
    {
      id: 'r1-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn verdimengden til funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 + 1$', solution: '$x^2 \\geq 0$, så $f(x) \\geq 1$. $V_f = [1, \\infty \\rangle$' },
          { label: 'b', task: '$g(x) = -x^2 + 4$', solution: '$-x^2 \\leq 0$, så $g(x) \\leq 4$. $V_g = \\langle -\\infty, 4]$' },
          { label: 'c', task: '$h(x) = 2^x - 1$', solution: '$2^x > 0$, så $h(x) > -1$. $V_h = \\langle -1, \\infty \\rangle$' },
          { label: 'd', task: '$k(x) = |x|$', solution: '$|x| \\geq 0$ for alle $x$. $V_k = [0, \\infty \\rangle$' },
        ],
        hints: ['Tenk på hvilke verdier funksjonsuttrykket kan gi', 'Bruk egenskapene til de ulike funksjonene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SYMMETRI ==========
    {
      id: 'r1-2-1-symmetri-intro',
      type: 'text',
      content: `## Symmetri: Like og odde funksjoner

En funksjon kan ha spesiell symmetri som gjør det enklere å forstå og tegne grafen.`,
    },

    // Definisjon: Like og odde funksjoner
    {
      id: 'r1-2-1-def-symmetri',
      type: 'definition',
      title: 'Like og odde funksjoner',
      content: `**Like funksjon:** $f(-x) = f(x)$ for alle $x$ i definisjonsmengden.
- Grafen er symmetrisk om $y$-aksen.
- Eksempler: $x^2$, $\\cos x$, $|x|$

**Odde funksjon:** $f(-x) = -f(x)$ for alle $x$ i definisjonsmengden.
- Grafen er symmetrisk om origo (punktsymmetri).
- Eksempler: $x^3$, $\\sin x$, $\\frac{1}{x}$`,
    },

    // Eksempel 4: Symmetri
    {
      id: 'r1-2-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Avgjøre symmetri',
      problem: `Avgjør om funksjonene er like, odde eller ingen av delene:

a) $f(x) = x^4 - 3x^2 + 1$
b) $g(x) = x^3 - x$
c) $h(x) = x^2 + x$`,
      solution: `**Løsning:**

a) $f(x) = x^4 - 3x^2 + 1$

   $f(-x) = (-x)^4 - 3(-x)^2 + 1 = x^4 - 3x^2 + 1 = f(x)$

   **Like funksjon** (symmetrisk om $y$-aksen)

b) $g(x) = x^3 - x$

   $g(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -g(x)$

   **Odde funksjon** (punktsymmetrisk om origo)

c) $h(x) = x^2 + x$

   $h(-x) = (-x)^2 + (-x) = x^2 - x$

   $h(-x) \\neq h(x)$ og $h(-x) \\neq -h(x)$

   **Verken like eller odde**`,
    },

    // GeoGebra: Symmetri
    {
      id: 'r1-2-1-geogebra-symmetri',
      type: 'geogebra',
      title: 'Like og odde funksjoner',
      description: 'Sammenlign en like funksjon ($x^2$) og en odde funksjon ($x^3$).',
      appType: 'graphing',
      commands: [
        'f(x) = x^2',
        'g(x) = x^3',
        'SetColor(f, "Blue")',
        'SetColor(g, "Red")',
        'SetCaption(f, "Like: f(x) = x²")',
        'SetCaption(g, "Odde: g(x) = x³")',
      ],
    },

    // Oppgave 3
    {
      id: 'r1-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om funksjonene er like, odde eller ingen av delene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^6 + x^2$', solution: '$f(-x) = x^6 + x^2 = f(x)$. Like funksjon.' },
          { label: 'b', task: '$g(x) = x^5 - 2x^3$', solution: '$g(-x) = -x^5 + 2x^3 = -g(x)$. Odde funksjon.' },
          { label: 'c', task: '$h(x) = e^x$', solution: '$h(-x) = e^{-x} \\neq h(x)$ og $\\neq -h(x)$. Ingen av delene.' },
          { label: 'd', task: '$k(x) = \\frac{x}{x^2 + 1}$', solution: '$k(-x) = \\frac{-x}{x^2+1} = -k(x)$. Odde funksjon.' },
          { label: 'e', task: '$m(x) = x^2 \\cdot e^x$', solution: '$m(-x) = x^2 \\cdot e^{-x} \\neq m(x)$ og $\\neq -m(x)$. Ingen av delene.' },
        ],
        hints: ['Regn ut $f(-x)$ og sammenlign med $f(x)$ og $-f(x)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NULLPUNKTER OG FORTEGN ==========
    {
      id: 'r1-2-1-nullpunkt-intro',
      type: 'text',
      content: `## Nullpunkter og fortegn

**Nullpunkter** er $x$-verdiene der $f(x) = 0$. Disse punktene deler $x$-aksen i intervaller der funksjonen har konstant fortegn.`,
    },

    // Eksempel 5: Nullpunkter og fortegn
    {
      id: 'r1-2-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Nullpunkter og fortegnsanalyse',
      problem: `Finn nullpunktene til $f(x) = x^3 - 4x$ og bestem fortegnet til $f(x)$ på hvert intervall.`,
      solution: `**Løsning:**

**Nullpunkter:**
$$f(x) = x^3 - 4x = x(x^2 - 4) = x(x-2)(x+2) = 0$$
$$x = 0, \\quad x = 2, \\quad x = -2$$

**Fortegnsanalyse:**
Vi tester ett punkt i hvert intervall:

| Intervall | Testpunkt | Fortegn av $f(x)$ |
|-----------|-----------|-------------------|
| $x < -2$ | $x = -3$ | $(-)(-)(-) = -$ |
| $-2 < x < 0$ | $x = -1$ | $(-)(-)(-) = +$ |
| $0 < x < 2$ | $x = 1$ | $(+)(-)(-) = -$ |
| $x > 2$ | $x = 3$ | $(+)(+)(+) = +$ |

**Fortegnslinje:**
$$\\begin{array}{c|ccccccc}
x & & -2 & & 0 & & 2 & \\\\
\\hline
f(x) & - & 0 & + & 0 & - & 0 & +
\\end{array}$$`,
    },

    // Oppgave 4
    {
      id: 'r1-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nullpunktene og lag fortegnsskjema.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 4x + 3$', solution: 'Nullpunkter: $x = 1$ og $x = 3$. Fortegn: $+$ for $x < 1$, $-$ for $1 < x < 3$, $+$ for $x > 3$.' },
          { label: 'b', task: '$g(x) = (x-1)(x+2)(x-3)$', solution: 'Nullpunkter: $x = -2, 1, 3$. Fortegn: $-,+,-,+$ for intervallene.' },
          { label: 'c', task: '$h(x) = \\frac{x-2}{x+1}$', solution: 'Nullpunkt: $x = 2$. Udefinert for $x = -1$. Fortegn: $+,-,+$ for $x < -1$, $-1 < x < 2$, $x > 2$.' },
        ],
        hints: ['Faktoriser for å finne nullpunktene', 'Test ett punkt i hvert intervall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-2-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver om funksjonsegenskaper.',
        subTasks: [
          { label: 'a', task: 'Finn $D_f$ og $V_f$ for $f(x) = \\sqrt{9 - x^2}$.', solution: '$D_f = [-3, 3]$. $V_f = [0, 3]$ (halvsirkel med radius 3).' },
          { label: 'b', task: 'Vis at $f(x) = \\frac{x^3}{x^2 + 1}$ er en odde funksjon.', solution: '$f(-x) = \\frac{(-x)^3}{(-x)^2 + 1} = \\frac{-x^3}{x^2 + 1} = -f(x)$ ✓' },
          { label: 'c', task: 'For hvilke verdier av $k$ er $f(x) = x^4 + kx^2 + 4$ en like funksjon?', solution: '$f(-x) = x^4 + kx^2 + 4 = f(x)$ for alle $k$. Funksjonen er alltid like.' },
        ],
        hints: ['For verdimengde, tenk på hva funksjonsuttrykket kan gi'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Funksjonstyper:**
- Polynomfunksjoner, rasjonale funksjoner, eksponentialfunksjoner, logaritmefunksjoner, potensefunksjoner

**Definisjonsmengde:**
- Unngå divisjon med null, kvadratrot av negativt, logaritme av ikke-positivt

**Symmetri:**
- Like funksjon: $f(-x) = f(x)$ (symmetri om $y$-aksen)
- Odde funksjon: $f(-x) = -f(x)$ (punktsymmetri om origo)

**Nullpunkter og fortegn:**
- Nullpunkter deler tallinja i intervaller med konstant fortegn`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_2_2: TextbookChapter = {
  id: 'r1-2-2',
  courseId: 'r1',
  chapterNumber: '2.2',
  title: 'Omvendte funksjoner',
  description: 'Lær om inverse (omvendte) funksjoner, hvordan du finner dem, og sammenhengen mellom en funksjon og dens inverse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå begrepet omvendt (invers) funksjon',
    'avgjøre når en funksjon har en omvendt funksjon',
    'finne omvendt funksjon algebraisk',
    'forstå sammenhengen mellom grafene til $f$ og $f^{-1}$',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-2-2-intro',
      type: 'text',
      content: `## Omvendte funksjoner

Noen funksjoner kan "reverseres" - vi kan gå tilbake fra $y$-verdien til $x$-verdien. En slik reversert funksjon kalles den **omvendte** eller **inverse** funksjonen.`,
    },

    // Definisjon: Omvendt funksjon
    {
      id: 'r1-2-2-def-invers',
      type: 'definition',
      title: 'Omvendt funksjon',
      content: `La $f$ være en funksjon. Den **omvendte funksjonen** $f^{-1}$ er definert ved:

$$f^{-1}(y) = x \\quad \\Leftrightarrow \\quad f(x) = y$$

Med andre ord: $f^{-1}$ "angrer" det $f$ gjør.

**Viktige sammenhenger:**
- $(f^{-1} \\circ f)(x) = f^{-1}(f(x)) = x$
- $(f \\circ f^{-1})(y) = f(f^{-1}(y)) = y$

**Merk:** $f^{-1}$ betyr IKKE $\\frac{1}{f}$. Det er notasjon for den omvendte funksjonen.`,
    },

    // Note om injektive funksjoner
    {
      id: 'r1-2-2-note-injektiv',
      type: 'note',
      content: `**Krav for at omvendt funksjon eksisterer:**

En funksjon $f$ har en omvendt funksjon hvis og bare hvis $f$ er **en-til-en** (injektiv):

$$f(x_1) = f(x_2) \\quad \\Rightarrow \\quad x_1 = x_2$$

Grafisk: Hver horisontal linje skjærer grafen i høyst ett punkt.

Eksempel: $f(x) = x^2$ er IKKE en-til-en fordi $f(-2) = f(2) = 4$. Men $f(x) = x^2$ for $x \\geq 0$ ER en-til-en.`,
    },

    // Eksempel 1: Sjekke om funksjon er en-til-en
    {
      id: 'r1-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Avgjøre om omvendt funksjon eksisterer',
      problem: `Avgjør om følgende funksjoner har en omvendt funksjon:

a) $f(x) = 2x + 3$
b) $g(x) = x^2$
c) $h(x) = e^x$`,
      solution: `**Løsning:**

a) $f(x) = 2x + 3$

   Hvis $f(x_1) = f(x_2)$:
   $2x_1 + 3 = 2x_2 + 3 \\Rightarrow x_1 = x_2$ ✓

   **Ja**, $f$ er en-til-en og har omvendt funksjon.

b) $g(x) = x^2$

   $g(-2) = g(2) = 4$, men $-2 \\neq 2$.

   **Nei**, $g$ er ikke en-til-en på hele $\\mathbb{R}$.
   (Men den har omvendt funksjon hvis vi begrenser til $x \\geq 0$.)

c) $h(x) = e^x$

   Eksponentialfunksjonen er strengt voksende, så den er en-til-en.

   **Ja**, $h$ har omvendt funksjon (som er $h^{-1}(x) = \\ln x$).`,
    },

    // Oppgave 1
    {
      id: 'r1-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om funksjonene har en omvendt funksjon. Begrunn svaret.',
        subTasks: [
          { label: 'a', task: '$f(x) = 3x - 5$', solution: 'Ja, lineær funksjon med stigning $\\neq 0$ er en-til-en.' },
          { label: 'b', task: '$g(x) = x^3$', solution: 'Ja, $x^3$ er strengt voksende og dermed en-til-en.' },
          { label: 'c', task: '$h(x) = |x|$', solution: 'Nei, $h(-1) = h(1) = 1$, ikke en-til-en.' },
          { label: 'd', task: '$k(x) = \\frac{1}{x}$ for $x > 0$', solution: 'Ja, strengt avtagende på $\\langle 0, \\infty \\rangle$, dermed en-til-en.' },
        ],
        hints: ['Sjekk om ulike $x$-verdier kan gi samme $y$-verdi'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FINNE OMVENDT FUNKSJON ==========
    {
      id: 'r1-2-2-finne-intro',
      type: 'text',
      content: `## Finne omvendt funksjon algebraisk

For å finne $f^{-1}$, løser vi ligningen $y = f(x)$ med hensyn på $x$.`,
    },

    // Teorem: Fremgangsmåte
    {
      id: 'r1-2-2-theorem-metode',
      type: 'theorem',
      title: 'Fremgangsmåte for å finne omvendt funksjon',
      content: `1. Skriv $y = f(x)$
2. Løs ligningen for $x$ (uttrykk $x$ ved hjelp av $y$)
3. Bytt om $x$ og $y$ for å få $y = f^{-1}(x)$

**Alternativ notasjon:** Noen skriver direkte $x = f^{-1}(y)$ uten å bytte om.`,
    },

    // Eksempel 2: Finne omvendt funksjon
    {
      id: 'r1-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne omvendt funksjon',
      problem: `Finn den omvendte funksjonen til:

a) $f(x) = 2x + 3$
b) $g(x) = x^3 - 1$
c) $h(x) = \\frac{x + 1}{x - 2}$ for $x \\neq 2$`,
      solution: `**Løsning:**

a) $f(x) = 2x + 3$

   $y = 2x + 3$
   $y - 3 = 2x$
   $x = \\frac{y - 3}{2}$

   Bytter $x$ og $y$: $f^{-1}(x) = \\frac{x - 3}{2}$

b) $g(x) = x^3 - 1$

   $y = x^3 - 1$
   $y + 1 = x^3$
   $x = \\sqrt[3]{y + 1}$

   $g^{-1}(x) = \\sqrt[3]{x + 1}$

c) $h(x) = \\frac{x + 1}{x - 2}$

   $y = \\frac{x + 1}{x - 2}$
   $y(x - 2) = x + 1$
   $xy - 2y = x + 1$
   $xy - x = 2y + 1$
   $x(y - 1) = 2y + 1$
   $x = \\frac{2y + 1}{y - 1}$

   $h^{-1}(x) = \\frac{2x + 1}{x - 1}$ for $x \\neq 1$`,
    },

    // Eksempel 3: Eksponential og logaritme
    {
      id: 'r1-2-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Eksponential- og logaritmefunksjoner',
      problem: `Finn den omvendte funksjonen til:

a) $f(x) = e^{2x}$
b) $g(x) = \\ln(x - 1) + 2$`,
      solution: `**Løsning:**

a) $f(x) = e^{2x}$

   $y = e^{2x}$
   $\\ln y = 2x$
   $x = \\frac{\\ln y}{2}$

   $f^{-1}(x) = \\frac{\\ln x}{2} = \\frac{1}{2}\\ln x$

   Definisjonsmengde: $D_{f^{-1}} = \\langle 0, \\infty \\rangle$

b) $g(x) = \\ln(x - 1) + 2$

   $y = \\ln(x - 1) + 2$
   $y - 2 = \\ln(x - 1)$
   $e^{y-2} = x - 1$
   $x = e^{y-2} + 1$

   $g^{-1}(x) = e^{x-2} + 1$`,
    },

    // Oppgave 2
    {
      id: 'r1-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den omvendte funksjonen.',
        subTasks: [
          { label: 'a', task: '$f(x) = 5x - 2$', solution: '$f^{-1}(x) = \\frac{x + 2}{5}$' },
          { label: 'b', task: '$g(x) = \\sqrt{x} + 3$ for $x \\geq 0$', solution: '$g^{-1}(x) = (x - 3)^2$ for $x \\geq 3$' },
          { label: 'c', task: '$h(x) = 2^x$', solution: '$h^{-1}(x) = \\log_2 x$' },
          { label: 'd', task: '$k(x) = \\frac{3x}{x + 1}$ for $x \\neq -1$', solution: '$k^{-1}(x) = \\frac{x}{3 - x}$ for $x \\neq 3$' },
          { label: 'e', task: '$m(x) = e^x + 1$', solution: '$m^{-1}(x) = \\ln(x - 1)$ for $x > 1$' },
        ],
        hints: ['Løs $y = f(x)$ for $x$', 'Bytt deretter $x$ og $y$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GRAFISK SAMMENHENG ==========
    {
      id: 'r1-2-2-graf-intro',
      type: 'text',
      content: `## Grafisk sammenheng

Grafene til $f$ og $f^{-1}$ har en spesiell geometrisk sammenheng.`,
    },

    // Teorem: Speiling om y = x
    {
      id: 'r1-2-2-theorem-speiling',
      type: 'theorem',
      title: 'Speiling om linjen $y = x$',
      content: `Grafen til $f^{-1}$ er speilbildet av grafen til $f$ om linjen $y = x$.

**Begrunnelse:** Hvis punktet $(a, b)$ ligger på grafen til $f$ (dvs. $f(a) = b$), så ligger punktet $(b, a)$ på grafen til $f^{-1}$ (fordi $f^{-1}(b) = a$).

Å bytte om $x$- og $y$-koordinatene tilsvarer speiling om linjen $y = x$.`,
    },

    // GeoGebra: Speiling
    {
      id: 'r1-2-2-geogebra-speiling',
      type: 'geogebra',
      title: 'Funksjon og omvendt funksjon',
      description: 'Grafen til $f(x) = e^x$ og $f^{-1}(x) = \\ln x$ er speilinger om $y = x$.',
      appType: 'graphing',
      commands: [
        'f(x) = e^x',
        'g(x) = ln(x)',
        'h(x) = x',
        'SetColor(f, "Blue")',
        'SetColor(g, "Red")',
        'SetColor(h, "Gray")',
        'SetLineStyle(h, 1)',
        'SetCaption(f, "f(x) = eˣ")',
        'SetCaption(g, "f⁻¹(x) = ln(x)")',
        'SetCaption(h, "y = x")',
        'A = (1, e)',
        'B = (e, 1)',
        'SetPointSize(A, 4)',
        'SetPointSize(B, 4)',
        'Segment(A, B)',
      ],
    },

    // Oppgave 3
    {
      id: 'r1-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk sammenhengen mellom grafer.',
        subTasks: [
          { label: 'a', task: 'Grafen til $f$ går gjennom punktet $(2, 5)$. Hvilket punkt ligger på grafen til $f^{-1}$?', solution: '$(5, 2)$ ligger på grafen til $f^{-1}$.' },
          { label: 'b', task: 'Grafen til $g$ går gjennom $(0, 1)$ og $(1, 3)$. Finn to punkter på grafen til $g^{-1}$.', solution: '$(1, 0)$ og $(3, 1)$ ligger på grafen til $g^{-1}$.' },
          { label: 'c', task: 'Skisser grafene til $f(x) = 2x + 1$ og $f^{-1}(x)$ i samme koordinatsystem.', solution: '$f^{-1}(x) = \\frac{x-1}{2}$. Begge er rette linjer som er speilbilder om $y = x$.' },
        ],
        hints: ['$(a, b)$ på $f$ gir $(b, a)$ på $f^{-1}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJONSMENGDE OG VERDIMENGDE ==========
    {
      id: 'r1-2-2-dm-intro',
      type: 'text',
      content: `## Definisjonsmengde og verdimengde for omvendt funksjon`,
    },

    // Teorem: Bytting av mengder
    {
      id: 'r1-2-2-theorem-mengder',
      type: 'theorem',
      title: 'Definisjonsmengde og verdimengde',
      content: `For en funksjon $f$ og dens omvendte $f^{-1}$ gjelder:

$$D_{f^{-1}} = V_f$$
$$V_{f^{-1}} = D_f$$

Definisjonsmengden til $f^{-1}$ er lik verdimengden til $f$, og omvendt.`,
    },

    // Eksempel 4
    {
      id: 'r1-2-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Definisjonsmengder',
      problem: `La $f(x) = \\sqrt{x}$ for $x \\geq 0$. Finn $f^{-1}$ og bestem $D_{f^{-1}}$ og $V_{f^{-1}}$.`,
      solution: `**Løsning:**

For $f(x) = \\sqrt{x}$ har vi:
- $D_f = [0, \\infty \\rangle$
- $V_f = [0, \\infty \\rangle$ (kvadratroten gir ikke-negative verdier)

Finner $f^{-1}$:
$y = \\sqrt{x} \\Rightarrow x = y^2$

$f^{-1}(x) = x^2$

Men vi må begrense til verdimengden til $f$:
- $D_{f^{-1}} = V_f = [0, \\infty \\rangle$
- $V_{f^{-1}} = D_f = [0, \\infty \\rangle$

Altså: $f^{-1}(x) = x^2$ for $x \\geq 0$.`,
    },

    // Oppgave 4
    {
      id: 'r1-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn omvendt funksjon med riktig definisjonsmengde.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2$ for $x \\leq 0$', solution: '$f^{-1}(x) = -\\sqrt{x}$ for $x \\geq 0$' },
          { label: 'b', task: '$g(x) = e^x - 2$', solution: '$g^{-1}(x) = \\ln(x + 2)$ for $x > -2$' },
          { label: 'c', task: '$h(x) = \\ln(x + 3)$', solution: '$h^{-1}(x) = e^x - 3$ for alle $x$' },
        ],
        hints: ['Husk at $D_{f^{-1}} = V_f$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-2-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver.',
        subTasks: [
          { label: 'a', task: 'Vis at $f(x) = \\frac{x+1}{x-1}$ er sin egen omvendte funksjon.', solution: '$f(f(x)) = \\frac{\\frac{x+1}{x-1}+1}{\\frac{x+1}{x-1}-1} = \\frac{x+1+x-1}{x+1-x+1} = \\frac{2x}{2} = x$ ✓' },
          { label: 'b', task: 'Finn $f^{-1}$ for $f(x) = \\frac{e^x - e^{-x}}{2}$.', solution: '$y = \\frac{e^x - e^{-x}}{2}$. Sett $u = e^x$: $2y = u - \\frac{1}{u} \\Rightarrow u^2 - 2yu - 1 = 0 \\Rightarrow u = y + \\sqrt{y^2 + 1}$. $f^{-1}(x) = \\ln(x + \\sqrt{x^2 + 1})$' },
          { label: 'c', task: 'Hvis $f(2) = 5$ og $f(5) = 8$, finn $(f^{-1} \\circ f^{-1})(8)$.', solution: '$f^{-1}(8) = 5$ og $f^{-1}(5) = 2$. Så $(f^{-1} \\circ f^{-1})(8) = f^{-1}(f^{-1}(8)) = f^{-1}(5) = 2$' },
        ],
        hints: ['For a), regn ut $f(f(x))$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Omvendt funksjon:**
- $f^{-1}(y) = x \\Leftrightarrow f(x) = y$
- Eksisterer bare for en-til-en (injektive) funksjoner

**Finne omvendt funksjon:**
1. Skriv $y = f(x)$
2. Løs for $x$
3. Bytt $x$ og $y$

**Grafisk sammenheng:**
- $f$ og $f^{-1}$ er speilbilder om $y = x$

**Mengder:**
- $D_{f^{-1}} = V_f$ og $V_{f^{-1}} = D_f$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_2_3: TextbookChapter = {
  id: 'r1-2-3',
  courseId: 'r1',
  chapterNumber: '2.3',
  title: 'Sammensatte funksjoner',
  description: 'Lær om komposisjon av funksjoner, indre og ytre funksjon, og hvordan dette danner grunnlag for kjerneregelen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå begrepet sammensatt funksjon (komposisjon)',
    'identifisere indre og ytre funksjon',
    'beregne $(f \\circ g)(x)$ og $(g \\circ f)(x)$',
    'forstå at rekkefølgen betyr noe',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-2-3-intro',
      type: 'text',
      content: `## Sammensatte funksjoner

Når vi setter én funksjon inn i en annen, får vi en **sammensatt funksjon** (også kalt komposisjon). Dette er et viktig begrep som danner grunnlag for kjerneregelen i derivasjon.`,
    },

    // Definisjon: Komposisjon
    {
      id: 'r1-2-3-def-komp',
      type: 'definition',
      title: 'Komposisjon av funksjoner',
      content: `La $f$ og $g$ være funksjoner. **Komposisjonen** $f \\circ g$ er definert ved:

$$(f \\circ g)(x) = f(g(x))$$

Vi leser dette som "$f$ av $g$ av $x$" eller "$f$ komponert med $g$".

I uttrykket $f(g(x))$:
- $g$ kalles den **indre funksjonen**
- $f$ kalles den **ytre funksjonen**
- Vi regner ut $g(x)$ først, deretter setter vi resultatet inn i $f$`,
    },

    // Eksempel 1: Enkel komposisjon
    {
      id: 'r1-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne komposisjon',
      problem: `La $f(x) = x^2$ og $g(x) = x + 3$.

Finn:
a) $(f \\circ g)(x)$
b) $(g \\circ f)(x)$
c) $(f \\circ g)(2)$`,
      solution: `**Løsning:**

a) $(f \\circ g)(x) = f(g(x)) = f(x + 3) = (x + 3)^2 = x^2 + 6x + 9$

   Her er $g(x) = x + 3$ den indre funksjonen og $f(x) = x^2$ den ytre.

b) $(g \\circ f)(x) = g(f(x)) = g(x^2) = x^2 + 3$

   Her er $f(x) = x^2$ den indre funksjonen og $g(x) = x + 3$ den ytre.

c) $(f \\circ g)(2) = f(g(2)) = f(2 + 3) = f(5) = 5^2 = 25$

   Alternativt: $(f \\circ g)(2) = (2 + 3)^2 = 25$`,
    },

    // Note om rekkefølge
    {
      id: 'r1-2-3-note-rekkefolge',
      type: 'note',
      content: `**Viktig: Rekkefølgen betyr noe!**

Generelt er $f \\circ g \\neq g \\circ f$.

Fra eksemplet over:
- $(f \\circ g)(x) = x^2 + 6x + 9$
- $(g \\circ f)(x) = x^2 + 3$

Disse er ulike funksjoner!`,
    },

    // Oppgave 1
    {
      id: 'r1-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $f(x) = 2x$ og $g(x) = x - 1$. Finn:',
        subTasks: [
          { label: 'a', task: '$(f \\circ g)(x)$', solution: '$(f \\circ g)(x) = f(g(x)) = f(x-1) = 2(x-1) = 2x - 2$' },
          { label: 'b', task: '$(g \\circ f)(x)$', solution: '$(g \\circ f)(x) = g(f(x)) = g(2x) = 2x - 1$' },
          { label: 'c', task: '$(f \\circ f)(x)$', solution: '$(f \\circ f)(x) = f(f(x)) = f(2x) = 2(2x) = 4x$' },
          { label: 'd', task: '$(g \\circ g)(x)$', solution: '$(g \\circ g)(x) = g(g(x)) = g(x-1) = (x-1) - 1 = x - 2$' },
        ],
        hints: ['Regn ut den indre funksjonen først', 'Sett deretter resultatet inn i den ytre funksjonen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 2: Med flere funksjonstyper
    {
      id: 'r1-2-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Komposisjon med ulike funksjonstyper',
      problem: `La $f(x) = e^x$ og $g(x) = 2x + 1$.

Finn $(f \\circ g)(x)$ og $(g \\circ f)(x)$.`,
      solution: `**Løsning:**

$(f \\circ g)(x) = f(g(x)) = f(2x + 1) = e^{2x+1}$

Her er:
- Indre funksjon: $g(x) = 2x + 1$
- Ytre funksjon: $f(x) = e^x$

$(g \\circ f)(x) = g(f(x)) = g(e^x) = 2e^x + 1$

Her er:
- Indre funksjon: $f(x) = e^x$
- Ytre funksjon: $g(x) = 2x + 1$`,
    },

    // Oppgave 2
    {
      id: 'r1-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn $(f \\circ g)(x)$ og $(g \\circ f)(x)$.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sqrt{x}$, $g(x) = x + 4$', solution: '$(f \\circ g)(x) = \\sqrt{x + 4}$, $(g \\circ f)(x) = \\sqrt{x} + 4$' },
          { label: 'b', task: '$f(x) = \\ln x$, $g(x) = x^2$', solution: '$(f \\circ g)(x) = \\ln(x^2) = 2\\ln|x|$, $(g \\circ f)(x) = (\\ln x)^2$' },
          { label: 'c', task: '$f(x) = \\frac{1}{x}$, $g(x) = x + 1$', solution: '$(f \\circ g)(x) = \\frac{1}{x+1}$, $(g \\circ f)(x) = \\frac{1}{x} + 1$' },
          { label: 'd', task: '$f(x) = x^3$, $g(x) = \\cos x$', solution: '$(f \\circ g)(x) = \\cos^3 x$, $(g \\circ f)(x) = \\cos(x^3)$' },
        ],
        hints: ['Identifiser hvilken funksjon som er indre og hvilken som er ytre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== IDENTIFISERE INDRE OG YTRE FUNKSJON ==========
    {
      id: 'r1-2-3-identifisere',
      type: 'text',
      content: `## Identifisere indre og ytre funksjon

Når vi har et sammensatt uttrykk, må vi kunne "se" hvilke funksjoner som er satt sammen. Dette er viktig for derivasjon med kjerneregelen.`,
    },

    // Eksempel 3: Identifisere funksjoner
    {
      id: 'r1-2-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Identifisere indre og ytre funksjon',
      problem: `Skriv følgende som $f(g(x))$ og identifiser indre og ytre funksjon:

a) $h(x) = (3x - 2)^5$
b) $k(x) = e^{x^2}$
c) $m(x) = \\ln(\\sin x)$
d) $n(x) = \\sqrt{1 - x^2}$`,
      solution: `**Løsning:**

a) $h(x) = (3x - 2)^5$
   - Indre: $g(x) = 3x - 2$
   - Ytre: $f(u) = u^5$
   - $h(x) = f(g(x))$ der $f(u) = u^5$, $g(x) = 3x - 2$

b) $k(x) = e^{x^2}$
   - Indre: $g(x) = x^2$
   - Ytre: $f(u) = e^u$
   - $k(x) = f(g(x))$

c) $m(x) = \\ln(\\sin x)$
   - Indre: $g(x) = \\sin x$
   - Ytre: $f(u) = \\ln u$
   - $m(x) = f(g(x))$

d) $n(x) = \\sqrt{1 - x^2}$
   - Indre: $g(x) = 1 - x^2$
   - Ytre: $f(u) = \\sqrt{u}$
   - $n(x) = f(g(x))$`,
    },

    // Tip for identifisering
    {
      id: 'r1-2-3-tip',
      type: 'tip',
      content: `**Tips for å identifisere indre og ytre funksjon:**

Spør deg selv: "Hva er det ytterste jeg gjør med $x$?"

- I $(3x-2)^5$: Det ytterste er å opphøye i 5. Det indre er $3x-2$.
- I $e^{x^2}$: Det ytterste er $e$-funksjonen. Det indre er $x^2$.
- I $\\ln(\\sin x)$: Det ytterste er $\\ln$. Det indre er $\\sin x$.`,
    },

    // Oppgave 3
    {
      id: 'r1-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser indre og ytre funksjon.',
        subTasks: [
          { label: 'a', task: '$h(x) = (x^2 + 1)^4$', solution: 'Indre: $g(x) = x^2 + 1$, Ytre: $f(u) = u^4$' },
          { label: 'b', task: '$k(x) = \\sin(3x)$', solution: 'Indre: $g(x) = 3x$, Ytre: $f(u) = \\sin u$' },
          { label: 'c', task: '$m(x) = e^{\\sqrt{x}}$', solution: 'Indre: $g(x) = \\sqrt{x}$, Ytre: $f(u) = e^u$' },
          { label: 'd', task: '$n(x) = \\frac{1}{(2x-3)^2}$', solution: 'Indre: $g(x) = 2x - 3$, Ytre: $f(u) = \\frac{1}{u^2} = u^{-2}$' },
          { label: 'e', task: '$p(x) = \\ln(x^3 + 1)$', solution: 'Indre: $g(x) = x^3 + 1$, Ytre: $f(u) = \\ln u$' },
        ],
        hints: ['Tenk på hva som er "det ytterste" du gjør med $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TRIPPEL KOMPOSISJON ==========
    {
      id: 'r1-2-3-trippel',
      type: 'text',
      content: `## Flere enn to funksjoner

Vi kan også sette sammen tre eller flere funksjoner:

$$(f \\circ g \\circ h)(x) = f(g(h(x)))$$

Her regner vi fra innsiden og ut: først $h(x)$, så $g$, så $f$.`,
    },

    // Eksempel 4: Trippel komposisjon
    {
      id: 'r1-2-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Trippel komposisjon',
      problem: `La $f(x) = x^2$, $g(x) = x + 1$ og $h(x) = 2x$.

Finn $(f \\circ g \\circ h)(x)$.`,
      solution: `**Løsning:**

$(f \\circ g \\circ h)(x) = f(g(h(x)))$

Steg 1: $h(x) = 2x$

Steg 2: $g(h(x)) = g(2x) = 2x + 1$

Steg 3: $f(g(h(x))) = f(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$

**Svar:** $(f \\circ g \\circ h)(x) = 4x^2 + 4x + 1$`,
    },

    // Oppgave 4
    {
      id: 'r1-2-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn de sammensatte funksjonene.',
        subTasks: [
          { label: 'a', task: 'La $f(x) = \\sqrt{x}$, $g(x) = x + 4$, $h(x) = x^2$. Finn $(f \\circ g \\circ h)(x)$.', solution: '$(f \\circ g \\circ h)(x) = f(g(h(x))) = f(g(x^2)) = f(x^2 + 4) = \\sqrt{x^2 + 4}$' },
          { label: 'b', task: 'La $f(x) = e^x$, $g(x) = 2x$, $h(x) = x + 1$. Finn $(f \\circ g \\circ h)(x)$.', solution: '$(f \\circ g \\circ h)(x) = f(g(x+1)) = f(2(x+1)) = f(2x+2) = e^{2x+2}$' },
          { label: 'c', task: 'Skriv $\\sin^2(3x)$ som $(f \\circ g \\circ h)(x)$.', solution: '$h(x) = 3x$, $g(u) = \\sin u$, $f(v) = v^2$. Da er $(f \\circ g \\circ h)(x) = (\\sin(3x))^2$' },
        ],
        hints: ['Jobb deg fra innsiden og ut'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FORBINDELSE TIL KJERNEREGELEN ==========
    {
      id: 'r1-2-3-kjerne',
      type: 'text',
      content: `## Forbindelse til kjerneregelen

Når vi skal derivere sammensatte funksjoner, bruker vi **kjerneregelen**:

$$(f(g(x)))' = f'(g(x)) \\cdot g'(x)$$

- $g(x)$ kalles **kjernen**
- Vi deriverer den ytre funksjonen $f$ og setter inn kjernen $g(x)$
- Vi ganger med den deriverte av kjernen $g'(x)$`,
    },

    // Eksempel 5: Forsmak på kjerneregelen
    {
      id: 'r1-2-3-example-5',
      type: 'example',
      title: 'Eksempel 5: Forsmak på kjerneregelen',
      problem: `La $h(x) = (2x + 1)^3$. Identifiser indre og ytre funksjon og tenk over hvordan du ville derivert.`,
      solution: `**Løsning:**

Indre funksjon (kjernen): $g(x) = 2x + 1$
Ytre funksjon: $f(u) = u^3$

Derivert av ytre: $f'(u) = 3u^2$
Derivert av indre: $g'(x) = 2$

Med kjerneregelen:
$$h'(x) = f'(g(x)) \\cdot g'(x) = 3(2x+1)^2 \\cdot 2 = 6(2x+1)^2$$

Kjerneregelen vil bli grundig behandlet i kapittel 3.`,
    },

    // Oppgave 5
    {
      id: 'r1-2-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver.',
        subTasks: [
          { label: 'a', task: 'La $f(x) = x^2 - 1$ og $g(x) = \\frac{1}{x}$. Vis at $(f \\circ g)(x) = \\frac{1-x^2}{x^2}$.', solution: '$(f \\circ g)(x) = f(g(x)) = f\\left(\\frac{1}{x}\\right) = \\left(\\frac{1}{x}\\right)^2 - 1 = \\frac{1}{x^2} - 1 = \\frac{1-x^2}{x^2}$ ✓' },
          { label: 'b', task: 'Finn funksjoner $f$ og $g$ slik at $(f \\circ g)(x) = \\sqrt{x^2 + 1}$.', solution: 'For eksempel: $g(x) = x^2 + 1$ og $f(u) = \\sqrt{u}$' },
          { label: 'c', task: 'Finn funksjoner $f$ og $g$ slik at $(f \\circ g)(x) = e^{\\sin x}$.', solution: 'For eksempel: $g(x) = \\sin x$ og $f(u) = e^u$' },
          { label: 'd', task: 'Hvis $f(x) = 2x + 1$ og $(f \\circ g)(x) = 4x - 1$, finn $g(x)$.', solution: '$f(g(x)) = 2g(x) + 1 = 4x - 1 \\Rightarrow 2g(x) = 4x - 2 \\Rightarrow g(x) = 2x - 1$' },
        ],
        hints: ['For b) og c), tenk på hva som er ytterste og innerste operasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // GeoGebra: Visualisering
    {
      id: 'r1-2-3-geogebra',
      type: 'geogebra',
      title: 'Sammensatte funksjoner',
      description: 'Visualisering av $f(x) = x^2$, $g(x) = x + 2$ og $(f \\circ g)(x) = (x+2)^2$.',
      appType: 'graphing',
      commands: [
        'f(x) = x^2',
        'g(x) = x + 2',
        'h(x) = (x + 2)^2',
        'SetColor(f, "Blue")',
        'SetColor(g, "Green")',
        'SetColor(h, "Red")',
        'SetCaption(f, "f(x) = x²")',
        'SetCaption(g, "g(x) = x + 2")',
        'SetCaption(h, "(f∘g)(x) = (x+2)²")',
      ],
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Komposisjon:**
$$(f \\circ g)(x) = f(g(x))$$

**Indre og ytre funksjon:**
- I $f(g(x))$ er $g$ indre og $f$ ytre
- Den indre funksjonen regnes ut først

**Viktig:**
- Generelt er $f \\circ g \\neq g \\circ f$
- Komposisjon er grunnlaget for kjerneregelen i derivasjon

**Identifisering:**
Spør: "Hva er det ytterste jeg gjør med $x$?" for å finne ytre funksjon.`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_3_1: TextbookChapter = {
  id: 'r1-3-1',
  courseId: 'r1',
  chapterNumber: '3.1',
  title: 'Grenseverdi',
  description: 'Lær om grenseverdier, hvordan vi beregner dem, ensidige grenseverdier og grenseverdier i uendelig.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå begrepet grenseverdi intuitivt og formelt',
    'beregne grenseverdier ved innsetting, faktorisering og konjugering',
    'forstå og beregne ensidige grenseverdier',
    'beregne grenseverdier når $x \\to \\pm\\infty$',
    'bruke regneregler for grenseverdier',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-3-1-intro',
      type: 'text',
      content: `## Hva er en grenseverdi?

Grenseverdier er et av de mest fundamentale begrepene i matematisk analyse. De beskriver hva som skjer med en funksjon når variabelen nærmer seg en bestemt verdi, uten nødvendigvis å nå den.

Tenk på funksjonen $f(x) = \\frac{x^2 - 1}{x - 1}$. Vi kan ikke sette inn $x = 1$ direkte fordi vi da får $\\frac{0}{0}$. Men vi kan undersøke hva som skjer når $x$ kommer *veldig nær* 1.`,
    },
    {
      id: 'r1-3-1-grenseverdi-bilde',
      type: 'image',
      src: '/images/r1/derivasjon-grenseverdi.svg',
      alt: 'Illustrasjon av grenseverdi og sekantlinje som narmer seg tangent',
      caption: 'Grenseverdi - grunnlaget for derivasjon',
    },

    // Eksempel: Motivasjon
    {
      id: 'r1-3-1-motivasjon',
      type: 'example',
      title: 'Eksempel 1: Tilnærming til en verdi',
      problem: `Undersøk verdiene til $f(x) = \\frac{x^2 - 1}{x - 1}$ når $x$ nærmer seg 1.`,
      solution: `**Løsning:**

La oss beregne noen verdier:

| $x$ | $f(x)$ |
|-----|--------|
| 0.9 | 1.9 |
| 0.99 | 1.99 |
| 0.999 | 1.999 |
| 1.001 | 2.001 |
| 1.01 | 2.01 |
| 1.1 | 2.1 |

Vi ser at når $x$ kommer nærmere og nærmere 1, så kommer $f(x)$ nærmere og nærmere 2.

**Algebraisk forklaring:**
$$f(x) = \\frac{x^2 - 1}{x - 1} = \\frac{(x-1)(x+1)}{x-1} = x + 1 \\quad \\text{for } x \\neq 1$$

Når $x \\to 1$, får vi $x + 1 \\to 2$.`,
    },

    // Definisjon: Grenseverdi
    {
      id: 'r1-3-1-def-grenseverdi',
      type: 'definition',
      title: 'Grenseverdi',
      content: `Vi skriver
$$\\lim_{x \\to a} f(x) = L$$
og leser dette som "grenseverdien av $f(x)$ når $x$ går mot $a$ er lik $L$".

Dette betyr at $f(x)$ kan gjøres vilkårlig nær $L$ ved å velge $x$ tilstrekkelig nær $a$ (men $x \\neq a$).

**Intuitivt:** Når $x$ kommer nærmere og nærmere $a$, kommer $f(x)$ nærmere og nærmere $L$.`,
    },

    // Note om grenseverdi
    {
      id: 'r1-3-1-note-1',
      type: 'note',
      content: `**Viktig:** Grenseverdien $\\lim_{x \\to a} f(x)$ avhenger bare av verdiene til $f(x)$ *nær* $a$, ikke av verdien $f(a)$ selv. Funksjonen trenger ikke engang å være definert i $x = a$.`,
    },

    // GeoGebra: Visualisering av grenseverdi
    {
      id: 'r1-3-1-geogebra-intro',
      type: 'geogebra',
      title: 'Grenseverdi - visualisering',
      description: 'Grafen til $f(x) = \\frac{x^2 - 1}{x - 1}$ med et hull i $x = 1$. Grenseverdien er 2.',
      appType: 'graphing',
      commands: [
        'f(x) = If(x != 1, (x^2 - 1)/(x - 1))',
        'A = (1, 2)',
        'SetPointStyle(A, 4)',
        'SetColor(A, "Blue")',
        'SetCaption(A, "Grenseverdi = 2")',
      ],
    },

    // Oppgave 1
    {
      id: 'r1-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn grenseverdien ved direkte innsetting.',
        subTasks: [
          { label: 'a', task: '$\\lim_{x \\to 2} (x^2 + 1)$', solution: '$\\lim_{x \\to 2} (x^2 + 1) = 2^2 + 1 = 5$' },
          { label: 'b', task: '$\\lim_{x \\to 3} (2x - 1)$', solution: '$\\lim_{x \\to 3} (2x - 1) = 2 \\cdot 3 - 1 = 5$' },
          { label: 'c', task: '$\\lim_{x \\to -1} (x^3 + x)$', solution: '$\\lim_{x \\to -1} (x^3 + x) = (-1)^3 + (-1) = -1 - 1 = -2$' },
          { label: 'd', task: '$\\lim_{x \\to 4} \\sqrt{x + 5}$', solution: '$\\lim_{x \\to 4} \\sqrt{x + 5} = \\sqrt{4 + 5} = \\sqrt{9} = 3$' },
        ],
        hints: ['Når funksjonen er kontinuerlig i punktet, kan vi bare sette inn verdien direkte'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== REGNEREGLER ==========
    {
      id: 'r1-3-1-regneregler-intro',
      type: 'text',
      content: `## Regneregler for grenseverdier

Hvis $\\lim_{x \\to a} f(x) = L$ og $\\lim_{x \\to a} g(x) = M$, så gjelder følgende regneregler:`,
    },

    // Teorem: Regneregler
    {
      id: 'r1-3-1-theorem-regler',
      type: 'theorem',
      title: 'Regneregler for grenseverdier',
      content: `La $\\lim_{x \\to a} f(x) = L$ og $\\lim_{x \\to a} g(x) = M$. Da gjelder:

**Sum:** $\\lim_{x \\to a} [f(x) + g(x)] = L + M$

**Differanse:** $\\lim_{x \\to a} [f(x) - g(x)] = L - M$

**Produkt:** $\\lim_{x \\to a} [f(x) \\cdot g(x)] = L \\cdot M$

**Kvotient:** $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{L}{M}$, dersom $M \\neq 0$

**Konstant:** $\\lim_{x \\to a} c = c$ for en konstant $c$

**Konstant ganger funksjon:** $\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot L$

**Potens:** $\\lim_{x \\to a} [f(x)]^n = L^n$ for $n \\in \\mathbb{N}$`,
    },

    // Eksempel: Regneregler
    {
      id: 'r1-3-1-example-regler',
      type: 'example',
      title: 'Eksempel 2: Bruk av regneregler',
      problem: `Beregn grenseverdiene:

a) $\\lim_{x \\to 2} (3x^2 - 2x + 1)$

b) $\\lim_{x \\to 1} \\frac{x^2 + 1}{x + 2}$`,
      solution: `**Løsning:**

a) $\\lim_{x \\to 2} (3x^2 - 2x + 1)$

Ved å bruke reglene for sum, produkt og konstant:
$$= 3 \\cdot \\lim_{x \\to 2} x^2 - 2 \\cdot \\lim_{x \\to 2} x + \\lim_{x \\to 2} 1$$
$$= 3 \\cdot 4 - 2 \\cdot 2 + 1 = 12 - 4 + 1 = 9$$

b) $\\lim_{x \\to 1} \\frac{x^2 + 1}{x + 2}$

Siden nevneren ikke er null for $x = 1$:
$$= \\frac{\\lim_{x \\to 1}(x^2 + 1)}{\\lim_{x \\to 1}(x + 2)} = \\frac{1 + 1}{1 + 2} = \\frac{2}{3}$$`,
    },

    // Oppgave 2
    {
      id: 'r1-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk regnereglene til å finne grenseverdiene.',
        subTasks: [
          { label: 'a', task: '$\\lim_{x \\to 3} (x^2 + 2x - 5)$', solution: '$\\lim_{x \\to 3} (x^2 + 2x - 5) = 9 + 6 - 5 = 10$' },
          { label: 'b', task: '$\\lim_{x \\to -2} (x^3 - 3x)$', solution: '$\\lim_{x \\to -2} (x^3 - 3x) = (-8) - (-6) = -8 + 6 = -2$' },
          { label: 'c', task: '$\\lim_{x \\to 4} \\frac{x + 1}{x - 1}$', solution: '$\\lim_{x \\to 4} \\frac{x + 1}{x - 1} = \\frac{5}{3}$' },
          { label: 'd', task: '$\\lim_{x \\to 2} \\frac{x^2 - 1}{x^2 + 1}$', solution: '$\\lim_{x \\to 2} \\frac{x^2 - 1}{x^2 + 1} = \\frac{4 - 1}{4 + 1} = \\frac{3}{5}$' },
        ],
        hints: ['Sjekk først om du kan sette inn direkte', 'Bruk regnereglene systematisk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== UBESTEMTE FORMER ==========
    {
      id: 'r1-3-1-ubestemt-intro',
      type: 'text',
      content: `## Ubestemte former

Noen ganger gir direkte innsetting formen $\\frac{0}{0}$ eller $\\frac{\\infty}{\\infty}$. Dette kalles **ubestemte former** og krever algebraisk manipulasjon før vi kan finne grenseverdien.`,
    },

    // Warning: Ubestemt form
    {
      id: 'r1-3-1-warning-ubestemt',
      type: 'warning',
      title: 'Ubestemt form',
      content: `Uttrykk som $\\frac{0}{0}$ er **ikke** et tall - det er en *ubestemt form*. Vi må bruke algebraiske teknikker for å finne den faktiske grenseverdien.

Vanlige teknikker:
- **Faktorisering** (for polynomer)
- **Konjugering** (for uttrykk med røtter)
- **Forlengelse** (for brøker)`,
    },

    // Eksempel: Faktorisering
    {
      id: 'r1-3-1-example-faktorisering',
      type: 'example',
      title: 'Eksempel 3: Faktorisering',
      problem: `Finn $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$`,
      solution: `**Løsning:**

Direkte innsetting gir $\\frac{9 - 9}{3 - 3} = \\frac{0}{0}$ (ubestemt form).

Vi faktoriserer telleren:
$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x - 3}$$

For $x \\neq 3$ kan vi forkorte:
$$= \\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$$

**Svar:** $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = 6$`,
    },

    // Eksempel: Konjugering
    {
      id: 'r1-3-1-example-konjugat',
      type: 'example',
      title: 'Eksempel 4: Konjugering',
      problem: `Finn $\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$`,
      solution: `**Løsning:**

Direkte innsetting gir $\\frac{\\sqrt{4} - 2}{0} = \\frac{0}{0}$ (ubestemt form).

Vi ganger med konjugatet:
$$\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x} \\cdot \\frac{\\sqrt{x + 4} + 2}{\\sqrt{x + 4} + 2}$$

$$= \\lim_{x \\to 0} \\frac{(x + 4) - 4}{x(\\sqrt{x + 4} + 2)}$$

$$= \\lim_{x \\to 0} \\frac{x}{x(\\sqrt{x + 4} + 2)}$$

$$= \\lim_{x \\to 0} \\frac{1}{\\sqrt{x + 4} + 2}$$

$$= \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{4}$$

**Svar:** $\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x} = \\frac{1}{4}$`,
    },

    // Tips
    {
      id: 'r1-3-1-tip-konjugat',
      type: 'tip',
      content: `**Tips for konjugering:**

Konjugatet til $\\sqrt{a} - b$ er $\\sqrt{a} + b$.

Når vi ganger med konjugatet, bruker vi at:
$$(\\sqrt{a} - b)(\\sqrt{a} + b) = a - b^2$$

Dette fjerner rotuttrykket og lar oss ofte forkorte.`,
    },

    // Oppgave 3
    {
      id: 'r1-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn grenseverdiene ved faktorisering eller konjugering.',
        subTasks: [
          { label: 'a', task: '$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$', solution: 'Faktoriser: $\\frac{(x-2)(x+2)}{x-2} = x + 2 \\to 4$' },
          { label: 'b', task: '$\\lim_{x \\to -1} \\frac{x^2 - 1}{x + 1}$', solution: 'Faktoriser: $\\frac{(x-1)(x+1)}{x+1} = x - 1 \\to -2$' },
          { label: 'c', task: '$\\lim_{x \\to 5} \\frac{x^2 - 25}{x^2 - 4x - 5}$', solution: 'Faktoriser: $\\frac{(x-5)(x+5)}{(x-5)(x+1)} = \\frac{x+5}{x+1} \\to \\frac{10}{6} = \\frac{5}{3}$' },
          { label: 'd', task: '$\\lim_{x \\to 0} \\frac{\\sqrt{x + 1} - 1}{x}$', solution: 'Konjuger: $\\frac{(x+1) - 1}{x(\\sqrt{x+1} + 1)} = \\frac{1}{\\sqrt{x+1} + 1} \\to \\frac{1}{2}$' },
        ],
        hints: ['Sjekk først om direkte innsetting gir $\\frac{0}{0}$', 'For rotuttrykk, prøv å gange med konjugatet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ENSIDIGE GRENSEVERDIER ==========
    {
      id: 'r1-3-1-ensidig-intro',
      type: 'text',
      content: `## Ensidige grenseverdier

Noen ganger oppfører en funksjon seg forskjellig når vi nærmer oss et punkt fra venstre (mindre verdier) og fra høyre (større verdier). Da trenger vi ensidige grenseverdier.`,
    },

    // Definisjon: Ensidige grenseverdier
    {
      id: 'r1-3-1-def-ensidig',
      type: 'definition',
      title: 'Ensidige grenseverdier',
      content: `**Venstresidig grenseverdi:**
$$\\lim_{x \\to a^-} f(x) = L$$
betyr at $f(x) \\to L$ når $x$ nærmer seg $a$ fra venstre (altså $x < a$).

**Høyresidig grenseverdi:**
$$\\lim_{x \\to a^+} f(x) = L$$
betyr at $f(x) \\to L$ når $x$ nærmer seg $a$ fra høyre (altså $x > a$).

**Sammenheng:**
$$\\lim_{x \\to a} f(x) = L \\quad \\Leftrightarrow \\quad \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L$$`,
    },

    // Eksempel: Ensidige grenseverdier
    {
      id: 'r1-3-1-example-ensidig',
      type: 'example',
      title: 'Eksempel 5: Ensidige grenseverdier',
      problem: `La $f(x) = \\frac{|x|}{x}$. Finn de ensidige grenseverdiene når $x \\to 0$.`,
      solution: `**Løsning:**

For $x > 0$: $|x| = x$, så $f(x) = \\frac{x}{x} = 1$

For $x < 0$: $|x| = -x$, så $f(x) = \\frac{-x}{x} = -1$

Dermed:
$$\\lim_{x \\to 0^+} f(x) = 1$$
$$\\lim_{x \\to 0^-} f(x) = -1$$

Siden de ensidige grenseverdiene er forskjellige, eksisterer ikke $\\lim_{x \\to 0} f(x)$.`,
    },

    // GeoGebra: Ensidig grenseverdi
    {
      id: 'r1-3-1-geogebra-ensidig',
      type: 'geogebra',
      title: 'Fortegnsfunksjonen',
      description: 'Grafen til $f(x) = \\frac{|x|}{x}$ med sprang i $x = 0$.',
      appType: 'graphing',
      commands: [
        'f(x) = If(x > 0, 1, If(x < 0, -1, undefined))',
        'A = (0, 1)',
        'B = (0, -1)',
        'SetPointStyle(A, 4)',
        'SetPointStyle(B, 4)',
        'SetColor(A, "Blue")',
        'SetColor(B, "Red")',
      ],
    },

    // Oppgave 4
    {
      id: 'r1-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn de ensidige grenseverdiene.',
        subTasks: [
          { label: 'a', task: '$\\lim_{x \\to 0^+} \\frac{1}{x}$', solution: 'Når $x \\to 0^+$, er $x$ liten og positiv, så $\\frac{1}{x} \\to +\\infty$' },
          { label: 'b', task: '$\\lim_{x \\to 0^-} \\frac{1}{x}$', solution: 'Når $x \\to 0^-$, er $x$ liten og negativ, så $\\frac{1}{x} \\to -\\infty$' },
          { label: 'c', task: '$\\lim_{x \\to 2^+} \\frac{1}{x - 2}$', solution: 'Når $x \\to 2^+$, er $(x-2)$ liten og positiv, så $\\frac{1}{x-2} \\to +\\infty$' },
          { label: 'd', task: '$\\lim_{x \\to 2^-} \\frac{1}{x - 2}$', solution: 'Når $x \\to 2^-$, er $(x-2)$ liten og negativ, så $\\frac{1}{x-2} \\to -\\infty$' },
        ],
        hints: ['Tenk på fortegnet til nevneren når $x$ nærmer seg fra hver side', 'Husk: positivt/lite positivt $\\to +\\infty$, positivt/lite negativt $\\to -\\infty$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GRENSEVERDIER I UENDELIG ==========
    {
      id: 'r1-3-1-uendelig-intro',
      type: 'text',
      content: `## Grenseverdier i uendelig

Vi kan også undersøke hva som skjer med en funksjon når $x$ blir veldig stor (positiv eller negativ). Dette kalles grenseverdier i uendelig.`,
    },

    // Definisjon: Grenseverdi i uendelig
    {
      id: 'r1-3-1-def-uendelig',
      type: 'definition',
      title: 'Grenseverdi i uendelig',
      content: `Vi skriver
$$\\lim_{x \\to \\infty} f(x) = L$$
dersom $f(x)$ kommer vilkårlig nær $L$ når $x$ blir tilstrekkelig stor.

Tilsvarende:
$$\\lim_{x \\to -\\infty} f(x) = L$$
dersom $f(x) \\to L$ når $x \\to -\\infty$.

Hvis grenseverdien er et endelig tall $L$, sier vi at $y = L$ er en **horisontal asymptote**.`,
    },

    // Teorem: Grenseverdier for 1/x^n
    {
      id: 'r1-3-1-theorem-1xn',
      type: 'theorem',
      title: 'Grunnleggende grenseverdier i uendelig',
      content: `For $n > 0$:
$$\\lim_{x \\to \\infty} \\frac{1}{x^n} = 0$$

$$\\lim_{x \\to -\\infty} \\frac{1}{x^n} = 0$$

**Intuisjon:** Når $x$ blir veldig stor, blir $\\frac{1}{x^n}$ veldig liten.`,
    },

    // Eksempel: Rasjonale funksjoner
    {
      id: 'r1-3-1-example-rasjonal',
      type: 'example',
      title: 'Eksempel 6: Rasjonale funksjoner i uendelig',
      problem: `Finn:

a) $\\lim_{x \\to \\infty} \\frac{3x^2 - 2x + 1}{x^2 + 5}$

b) $\\lim_{x \\to \\infty} \\frac{x + 1}{x^2 - 1}$`,
      solution: `**Løsning:**

**Metode:** Del på høyeste potens av $x$ i nevneren.

a) $\\lim_{x \\to \\infty} \\frac{3x^2 - 2x + 1}{x^2 + 5}$

Vi deler teller og nevner på $x^2$:
$$= \\lim_{x \\to \\infty} \\frac{3 - \\frac{2}{x} + \\frac{1}{x^2}}{1 + \\frac{5}{x^2}}$$

Når $x \\to \\infty$: $\\frac{2}{x} \\to 0$, $\\frac{1}{x^2} \\to 0$, $\\frac{5}{x^2} \\to 0$

$$= \\frac{3 - 0 + 0}{1 + 0} = 3$$

b) $\\lim_{x \\to \\infty} \\frac{x + 1}{x^2 - 1}$

Vi deler på $x^2$:
$$= \\lim_{x \\to \\infty} \\frac{\\frac{1}{x} + \\frac{1}{x^2}}{1 - \\frac{1}{x^2}} = \\frac{0 + 0}{1 - 0} = 0$$`,
    },

    // Tips for rasjonale funksjoner
    {
      id: 'r1-3-1-tip-rasjonal',
      type: 'tip',
      content: `**Tommelfingerregel for rasjonale funksjoner:**

La $f(x) = \\frac{a_n x^n + \\ldots}{b_m x^m + \\ldots}$

- Hvis $n < m$: $\\lim_{x \\to \\pm\\infty} f(x) = 0$
- Hvis $n = m$: $\\lim_{x \\to \\pm\\infty} f(x) = \\frac{a_n}{b_m}$
- Hvis $n > m$: Grenseverdien er $\\pm\\infty$ (avhenger av fortegn)`,
    },

    // Oppgave 5
    {
      id: 'r1-3-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn grenseverdiene når $x \\to \\infty$.',
        subTasks: [
          { label: 'a', task: '$\\lim_{x \\to \\infty} \\frac{2x + 3}{x - 1}$', solution: 'Del på $x$: $\\frac{2 + \\frac{3}{x}}{1 - \\frac{1}{x}} \\to \\frac{2}{1} = 2$' },
          { label: 'b', task: '$\\lim_{x \\to \\infty} \\frac{x^2 - 1}{2x^2 + 3x}$', solution: 'Del på $x^2$: $\\frac{1 - \\frac{1}{x^2}}{2 + \\frac{3}{x}} \\to \\frac{1}{2}$' },
          { label: 'c', task: '$\\lim_{x \\to \\infty} \\frac{5}{x^2 + 1}$', solution: '$\\frac{5}{x^2 + 1} \\to \\frac{5}{\\infty} = 0$' },
          { label: 'd', task: '$\\lim_{x \\to -\\infty} \\frac{3x - 2}{x + 4}$', solution: 'Del på $x$: $\\frac{3 - \\frac{2}{x}}{1 + \\frac{4}{x}} \\to \\frac{3}{1} = 3$' },
        ],
        hints: ['Del teller og nevner på den høyeste potensen av $x$ i nevneren', 'Husk at $\\frac{c}{x^n} \\to 0$ når $x \\to \\pm\\infty$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // GeoGebra: Horisontal asymptote
    {
      id: 'r1-3-1-geogebra-asymptote',
      type: 'geogebra',
      title: 'Horisontal asymptote',
      description: 'Grafen til $f(x) = \\frac{2x + 3}{x - 1}$ med horisontal asymptote $y = 2$.',
      appType: 'graphing',
      commands: [
        'f(x) = (2x + 3)/(x - 1)',
        'y = 2',
        'SetColor(f, "Blue")',
        'SetLineStyle(y = 2, 2)',
        'SetColor(y = 2, "Red")',
      ],
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Grenseverdi:**
$$\\lim_{x \\to a} f(x) = L$$
betyr at $f(x) \\to L$ når $x \\to a$.

**Regneregler:** Sum, differanse, produkt, kvotient og potens av grenseverdier følger intuitive regler.

**Ubestemte former ($\\frac{0}{0}$):** Bruk faktorisering, konjugering eller andre algebraiske teknikker.

**Ensidige grenseverdier:**
- $\\lim_{x \\to a^-}$: fra venstre ($x < a$)
- $\\lim_{x \\to a^+}$: fra høyre ($x > a$)
- Grenseverdien eksisterer bare hvis begge er like

**Grenseverdier i uendelig:**
- For rasjonale funksjoner: del på høyeste potens av $x$
- Horisontal asymptote når grenseverdien er et endelig tall`,
    },

    // Ekstraoppgaver
    {
      id: 'r1-3-1-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r1-3-1-ex-block-6',
          type: 'exercise',
          exercise: {
            id: 'r1-3-1-ex-6',
            number: 'E1',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver med grenseverdier.',
            subTasks: [
              { label: 'a', task: '$\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 - 1}$', solution: 'Faktoriser: $\\frac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \\frac{x^2+x+1}{x+1} \\to \\frac{3}{2}$' },
              { label: 'b', task: '$\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$', solution: 'Konjuger: $\\frac{1}{\\sqrt{x} + 2} \\to \\frac{1}{4}$' },
              { label: 'c', task: '$\\lim_{x \\to 0} \\frac{\\sqrt{1+x} - \\sqrt{1-x}}{x}$', solution: 'Konjuger begge: $\\frac{(1+x)-(1-x)}{x(\\sqrt{1+x}+\\sqrt{1-x})} = \\frac{2}{\\sqrt{1+x}+\\sqrt{1-x}} \\to 1$' },
              { label: 'd', task: '$\\lim_{x \\to \\infty} (\\sqrt{x^2 + x} - x)$', solution: 'Gang med konjugat: $\\frac{x^2+x-x^2}{\\sqrt{x^2+x}+x} = \\frac{x}{\\sqrt{x^2+x}+x} = \\frac{1}{\\sqrt{1+\\frac{1}{x}}+1} \\to \\frac{1}{2}$' },
            ],
            hints: ['For c), bruk konjugatet til hele uttrykket i telleren', 'For d), gang og del med konjugatet $\\sqrt{x^2+x} + x$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: 'r1-3-1-ex-block-7',
          type: 'exercise',
          exercise: {
            id: 'r1-3-1-ex-7',
            number: 'E2',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Bestem verdien av konstanten slik at grenseverdien eksisterer.',
            subTasks: [
              { label: 'a', task: 'Finn $k$ slik at $\\lim_{x \\to 2} \\frac{x^2 + kx - 6}{x - 2}$ eksisterer (og er endelig).', solution: 'For at grenseverdien skal eksistere, må telleren ha $(x-2)$ som faktor. $x^2 + kx - 6 = (x-2)(x+3)$ gir $k = 1$. Da er grenseverdien $2 + 3 = 5$.' },
              { label: 'b', task: 'Finn $a$ og $b$ slik at $\\lim_{x \\to 1} \\frac{x^2 + ax + b}{x - 1} = 3$.', solution: 'Telleren må ha $(x-1)$ som faktor og kvotienten etter forkortning må gi 3 for $x=1$. La $x^2+ax+b = (x-1)(x+c)$. Da $x+c \\to 1+c = 3 \\Rightarrow c = 2$. Altså $(x-1)(x+2) = x^2+x-2$, så $a = 1$, $b = -2$.' },
            ],
            hints: ['Hvis $\\frac{0}{0}$ skal gi en endelig grenseverdi, må telleren ha samme faktor som nevneren'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_3_2: TextbookChapter = {
  id: 'r1-3-2',
  courseId: 'r1',
  chapterNumber: '3.2',
  title: 'Kontinuitet',
  description: 'Lær om kontinuitet og diskontinuitet i funksjoner, de tre kravene for kontinuitet, og hvordan du identifiserer ulike typer diskontinuitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå definisjonen av kontinuitet i et punkt',
    'kunne sjekke de tre kravene for kontinuitet',
    'identifisere og klassifisere ulike typer diskontinuitet',
    'forstå sammenhengen mellom kontinuitet og grenseverdier',
    'beskrive asymptotisk oppførsel til funksjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-3-2-intro',
      type: 'text',
      content: `## Hva er kontinuitet?

Intuitivt tenker vi på en kontinuerlig funksjon som en funksjon der grafen kan tegnes uten å løfte pennen fra papiret. Funksjonen har ingen "hopp", "hull" eller "brudd".

I dette kapitlet skal vi gi en presis matematisk definisjon av kontinuitet og lære å identifisere ulike typer diskontinuitet.`,
    },

    // Motiverende eksempel
    {
      id: 'r1-3-2-motivasjon',
      type: 'example',
      title: 'Motiverende eksempel',
      problem: `Betrakt følgende funksjoner:

1. $f(x) = x^2$ (polynomfunksjon)
2. $g(x) = \\frac{1}{x}$ (rasjonell funksjon)
3. $h(x) = \\begin{cases} 1 & \\text{hvis } x \\geq 0 \\\\ -1 & \\text{hvis } x < 0 \\end{cases}$ (fortegnsfunksjon)

Hvilke av disse er kontinuerlige?`,
      solution: `**Løsning:**

1. $f(x) = x^2$ er kontinuerlig for alle $x \\in \\mathbb{R}$. Grafen er en parabel uten brudd.

2. $g(x) = \\frac{1}{x}$ er kontinuerlig for alle $x \\neq 0$. I $x = 0$ er funksjonen ikke definert, så den har en diskontinuitet der (vertikal asymptote).

3. $h(x)$ har et hopp i $x = 0$. Grenseverdiene fra venstre ($-1$) og høyre ($1$) er forskjellige, så funksjonen er diskontinuerlig i $x = 0$.`,
    },

    // ========== DEFINISJON AV KONTINUITET ==========
    {
      id: 'r1-3-2-def-section',
      type: 'text',
      content: `## Definisjon av kontinuitet`,
    },

    // Definisjon: Kontinuitet i et punkt
    {
      id: 'r1-3-2-def-kontinuitet',
      type: 'definition',
      title: 'Kontinuitet i et punkt',
      content: `En funksjon $f$ er **kontinuerlig i punktet $x = a$** dersom følgende tre krav er oppfylt:

1. **$f(a)$ eksisterer** (funksjonen er definert i $a$)

2. **$\\lim_{x \\to a} f(x)$ eksisterer** (grenseverdien eksisterer)

3. **$\\lim_{x \\to a} f(x) = f(a)$** (grenseverdien er lik funksjonsverdien)

Hvis ett eller flere av disse kravene ikke er oppfylt, sier vi at $f$ er **diskontinuerlig** i $x = a$.`,
    },

    // Visuell forklaring
    {
      id: 'r1-3-2-note-krav',
      type: 'note',
      content: `**De tre kravene i praksis:**

**Krav 1:** Sjekk at $a$ er i definisjonsmengden til $f$.

**Krav 2:** Sjekk at $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x)$ (ensidige grenseverdier er like).

**Krav 3:** Sjekk at grenseverdien fra krav 2 er lik funksjonsverdien $f(a)$.`,
    },

    // Eksempel 1: Sjekke kontinuitet
    {
      id: 'r1-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Sjekke kontinuitet',
      problem: `Undersøk om $f(x) = \\frac{x^2 - 4}{x - 2}$ er kontinuerlig i $x = 2$.`,
      solution: `**Løsning:**

Vi sjekker de tre kravene:

**Krav 1:** Er $f(2)$ definert?

$f(2) = \\frac{2^2 - 4}{2 - 2} = \\frac{0}{0}$ er udefinert.

Siden krav 1 ikke er oppfylt, er $f$ **diskontinuerlig i $x = 2$**.

**Merk:** Vi kan forenkle uttrykket:
$$f(x) = \\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x + 2, \\quad x \\neq 2$$

Grenseverdien $\\lim_{x \\to 2} f(x) = 4$ eksisterer, men funksjonen er ikke definert i $x = 2$. Dette er en **fjernbar diskontinuitet**.`,
    },

    // Eksempel 2: Kontinuerlig funksjon
    {
      id: 'r1-3-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Verifisere kontinuitet',
      problem: `Vis at $f(x) = x^3 - 2x + 1$ er kontinuerlig i $x = 1$.`,
      solution: `**Løsning:**

Vi sjekker de tre kravene:

**Krav 1:** $f(1) = 1^3 - 2 \\cdot 1 + 1 = 0$ ✓ (eksisterer)

**Krav 2:** $\\lim_{x \\to 1} (x^3 - 2x + 1) = 1 - 2 + 1 = 0$ ✓ (eksisterer)

**Krav 3:** $\\lim_{x \\to 1} f(x) = 0 = f(1)$ ✓ (like)

Alle tre krav er oppfylt, så $f$ er **kontinuerlig i $x = 1$**.

**Generelt:** Polynomfunksjoner er kontinuerlige overalt i $\\mathbb{R}$.`,
    },

    // Oppgave 1
    {
      id: 'r1-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Undersøk om funksjonen er kontinuerlig i det angitte punktet ved å sjekke de tre kravene.',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x + 3$ i $x = 1$', solution: 'Krav 1: $f(1) = 5$ ✓. Krav 2: $\\lim_{x \\to 1}(2x+3) = 5$ ✓. Krav 3: $5 = 5$ ✓. Kontinuerlig.' },
          { label: 'b', task: '$g(x) = \\frac{x^2 - 1}{x - 1}$ i $x = 1$', solution: 'Krav 1: $g(1) = \\frac{0}{0}$ udefinert. Diskontinuerlig (fjernbar).' },
          { label: 'c', task: '$h(x) = |x|$ i $x = 0$', solution: 'Krav 1: $h(0) = 0$ ✓. Krav 2: $\\lim_{x \\to 0}|x| = 0$ ✓. Krav 3: $0 = 0$ ✓. Kontinuerlig.' },
          { label: 'd', task: '$k(x) = \\sqrt{x}$ i $x = 4$', solution: 'Krav 1: $k(4) = 2$ ✓. Krav 2: $\\lim_{x \\to 4}\\sqrt{x} = 2$ ✓. Krav 3: $2 = 2$ ✓. Kontinuerlig.' },
        ],
        hints: ['Sjekk først om funksjonsverdien eksisterer', 'For brudduttrykk, prøv å forenkle for å finne grenseverdien'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TYPER DISKONTINUITET ==========
    {
      id: 'r1-3-2-diskont-section',
      type: 'text',
      content: `## Typer diskontinuitet

Når en funksjon er diskontinuerlig i et punkt, kan vi klassifisere hvilken type diskontinuitet det er basert på hva som går galt med de tre kravene.`,
    },

    // Definisjon: Fjernbar diskontinuitet
    {
      id: 'r1-3-2-def-fjernbar',
      type: 'definition',
      title: 'Fjernbar diskontinuitet',
      content: `En funksjon $f$ har **fjernbar diskontinuitet** (hull) i $x = a$ dersom:

- Grenseverdien $\\lim_{x \\to a} f(x) = L$ eksisterer
- Men enten $f(a)$ ikke eksisterer, eller $f(a) \\neq L$

Diskontinuiteten kan "fjernes" ved å definere (eller omdefinere) $f(a) = L$.

**Eksempel:** $f(x) = \\frac{x^2 - 1}{x - 1}$ har fjernbar diskontinuitet i $x = 1$.`,
    },

    // Definisjon: Hoppunkt
    {
      id: 'r1-3-2-def-hopp',
      type: 'definition',
      title: 'Hoppunkt (sprangdiskontinuitet)',
      content: `En funksjon $f$ har et **hoppunkt** (sprangdiskontinuitet) i $x = a$ dersom:

$$\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$$

De ensidige grenseverdiene eksisterer, men er forskjellige. Funksjonen "hopper" fra én verdi til en annen.

**Eksempel:** Fortegnsfunksjonen $\\text{sgn}(x)$ har hoppunkt i $x = 0$.`,
    },

    // Definisjon: Pol (uendelig diskontinuitet)
    {
      id: 'r1-3-2-def-pol',
      type: 'definition',
      title: 'Pol (uendelig diskontinuitet)',
      content: `En funksjon $f$ har en **pol** (uendelig diskontinuitet) i $x = a$ dersom:

$$\\lim_{x \\to a^-} f(x) = \\pm\\infty \\quad \\text{eller} \\quad \\lim_{x \\to a^+} f(x) = \\pm\\infty$$

(eller begge). Funksjonsverdiene går mot uendelig når $x$ nærmer seg $a$.

**Eksempel:** $f(x) = \\frac{1}{x}$ har en pol i $x = 0$.`,
    },

    // GeoGebra: Typer diskontinuitet
    {
      id: 'r1-3-2-geogebra-1',
      type: 'geogebra',
      title: 'Typer diskontinuitet',
      description: 'Sammenligning av fjernbar diskontinuitet, hoppunkt og pol.',
      appType: 'graphing',
      commands: [
        'f(x) = If(x != 1, (x^2 - 1)/(x - 1))',
        'g(x) = If(x < 0, -1, 1)',
        'h(x) = 1/x',
        'A = (1, 2)',
        'SetPointStyle(A, 4)',
        'SetColor(f, "Blue")',
        'SetColor(g, "Green")',
        'SetColor(h, "Red")',
        'SetCaption(f, "Fjernbar diskontinuitet")',
        'SetCaption(g, "Hoppunkt")',
        'SetCaption(h, "Pol")',
      ],
    },

    // Eksempel 3: Klassifisere diskontinuitet
    {
      id: 'r1-3-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Klassifisere diskontinuitet',
      problem: `Klassifiser diskontinuiteten til følgende funksjoner:

a) $f(x) = \\frac{x^2 - 9}{x - 3}$ i $x = 3$

b) $g(x) = \\begin{cases} x^2 & \\text{hvis } x < 2 \\\\ 5 & \\text{hvis } x \\geq 2 \\end{cases}$ i $x = 2$

c) $h(x) = \\frac{1}{(x-1)^2}$ i $x = 1$`,
      solution: `**Løsning:**

a) $f(x) = \\frac{x^2 - 9}{x - 3} = \\frac{(x-3)(x+3)}{x-3} = x + 3$ for $x \\neq 3$

   $\\lim_{x \\to 3} f(x) = 6$, men $f(3)$ er udefinert.

   **Fjernbar diskontinuitet** (hull i $x = 3$, $y = 6$).

b) $\\lim_{x \\to 2^-} g(x) = \\lim_{x \\to 2^-} x^2 = 4$

   $\\lim_{x \\to 2^+} g(x) = 5$

   De ensidige grenseverdiene er forskjellige ($4 \\neq 5$).

   **Hoppunkt** med hopp $5 - 4 = 1$.

c) $\\lim_{x \\to 1} \\frac{1}{(x-1)^2} = +\\infty$

   Funksjonen går mot uendelig når $x \\to 1$.

   **Pol** (vertikal asymptote $x = 1$).`,
    },

    // Oppgave 2
    {
      id: 'r1-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Klassifiser diskontinuiteten som fjernbar diskontinuitet, hoppunkt eller pol.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{x^3 - 8}{x - 2}$ i $x = 2$', solution: '$f(x) = \\frac{(x-2)(x^2+2x+4)}{x-2} = x^2 + 2x + 4$ for $x \\neq 2$. Grenseverdi: $12$. **Fjernbar diskontinuitet**.' },
          { label: 'b', task: '$g(x) = \\frac{1}{x - 3}$ i $x = 3$', solution: '$\\lim_{x \\to 3^-} = -\\infty$, $\\lim_{x \\to 3^+} = +\\infty$. **Pol**.' },
          { label: 'c', task: '$h(x) = \\begin{cases} 2x & \\text{hvis } x < 1 \\\\ 3 - x & \\text{hvis } x \\geq 1 \\end{cases}$ i $x = 1$', solution: '$\\lim_{x \\to 1^-} = 2$, $\\lim_{x \\to 1^+} = 2$, $h(1) = 2$. **Kontinuerlig** (ikke diskontinuitet!).' },
          { label: 'd', task: '$k(x) = \\lfloor x \\rfloor$ (gulvfunksjon) i $x = 2$', solution: '$\\lim_{x \\to 2^-} = 1$, $\\lim_{x \\to 2^+} = 2$. **Hoppunkt**.' },
        ],
        hints: ['Beregn de ensidige grenseverdiene', 'Sammenlign med funksjonsverdien hvis den eksisterer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KONTINUITET PÅ INTERVALL ==========
    {
      id: 'r1-3-2-intervall-section',
      type: 'text',
      content: `## Kontinuitet på et intervall

En funksjon kan være kontinuerlig på hele definisjonsmengden sin, eller bare på deler av den.`,
    },

    // Definisjon: Kontinuitet på intervall
    {
      id: 'r1-3-2-def-intervall',
      type: 'definition',
      title: 'Kontinuitet på et intervall',
      content: `En funksjon $f$ er **kontinuerlig på et åpent intervall** $(a, b)$ dersom $f$ er kontinuerlig i hvert punkt $x \\in (a, b)$.

En funksjon $f$ er **kontinuerlig på et lukket intervall** $[a, b]$ dersom:
- $f$ er kontinuerlig på $(a, b)$
- $\\lim_{x \\to a^+} f(x) = f(a)$ (høyre-kontinuitet i $a$)
- $\\lim_{x \\to b^-} f(x) = f(b)$ (venstre-kontinuitet i $b$)`,
    },

    // Teorem: Kontinuerlige funksjoner
    {
      id: 'r1-3-2-theorem-standard',
      type: 'theorem',
      title: 'Standardfunksjoner og kontinuitet',
      content: `Følgende funksjoner er kontinuerlige på hele sin naturlige definisjonsmengde:

- **Polynomfunksjoner:** $P(x) = a_n x^n + \\ldots + a_0$ (kontinuerlig for alle $x \\in \\mathbb{R}$)
- **Rasjonale funksjoner:** $\\frac{P(x)}{Q(x)}$ (kontinuerlig der $Q(x) \\neq 0$)
- **Eksponentialfunksjoner:** $a^x$, $e^x$ (kontinuerlig for alle $x \\in \\mathbb{R}$)
- **Logaritmefunksjoner:** $\\ln x$, $\\log_a x$ (kontinuerlig for $x > 0$)
- **Rotfunksjoner:** $\\sqrt[n]{x}$ (kontinuerlig på definisjonsmengden)
- **Trigonometriske funksjoner:** $\\sin x$, $\\cos x$ (kontinuerlig for alle $x \\in \\mathbb{R}$)`,
    },

    // Teorem: Regneregler
    {
      id: 'r1-3-2-theorem-regler',
      type: 'theorem',
      title: 'Regneregler for kontinuitet',
      content: `Hvis $f$ og $g$ er kontinuerlige i $x = a$, så er også følgende funksjoner kontinuerlige i $x = a$:

- $f + g$ (sum)
- $f - g$ (differanse)
- $f \\cdot g$ (produkt)
- $\\frac{f}{g}$ (kvotient, forutsatt $g(a) \\neq 0$)
- $f \\circ g$ (komposisjon, forutsatt at $g(a)$ er i definisjonsmengden til $f$)`,
    },

    // Eksempel 4
    {
      id: 'r1-3-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Finne diskontinuitetspunkter',
      problem: `Finn alle punkter der følgende funksjoner er diskontinuerlige:

a) $f(x) = \\frac{x + 1}{x^2 - 4}$

b) $g(x) = \\ln(x^2 - 1)$`,
      solution: `**Løsning:**

a) $f(x) = \\frac{x + 1}{x^2 - 4} = \\frac{x + 1}{(x-2)(x+2)}$

   Funksjonen er udefinert (og diskontinuerlig) der nevneren er null:
   $x^2 - 4 = 0 \\Rightarrow x = \\pm 2$

   **Diskontinuerlig i $x = -2$ og $x = 2$** (begge er poler).

b) $g(x) = \\ln(x^2 - 1)$

   Logaritmen krever positivt argument: $x^2 - 1 > 0$
   $(x-1)(x+1) > 0 \\Rightarrow x < -1$ eller $x > 1$

   Definisjonsmengde: $D_g = (-\\infty, -1) \\cup (1, \\infty)$

   **Diskontinuerlig i $x = -1$ og $x = 1$** (logaritmen går mot $-\\infty$).`,
    },

    // Oppgave 3
    {
      id: 'r1-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle punkter der funksjonen er diskontinuerlig, og klassifiser diskontinuiteten.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{2x}{x^2 - 9}$', solution: 'Diskontinuerlig i $x = -3$ og $x = 3$ (poler, vertikale asymptoter).' },
          { label: 'b', task: '$g(x) = \\frac{x^2 - 4}{x + 2}$', solution: 'Diskontinuerlig kun i $x = -2$. $g(x) = x - 2$ for $x \\neq -2$. Fjernbar diskontinuitet.' },
          { label: 'c', task: '$h(x) = \\sqrt{4 - x^2}$', solution: 'Definert for $-2 \\leq x \\leq 2$. Kontinuerlig på hele definisjonsmengden $[-2, 2]$.' },
          { label: 'd', task: '$k(x) = \\tan x$ på $[0, 2\\pi]$', solution: 'Diskontinuerlig i $x = \\frac{\\pi}{2}$ og $x = \\frac{3\\pi}{2}$ (poler).' },
        ],
        hints: ['Finn definisjonsmengden først', 'Se etter nullpunkter i nevnere'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ASYMPTOTISK OPPFØRSEL ==========
    {
      id: 'r1-3-2-asymptote-section',
      type: 'text',
      content: `## Asymptotisk oppførsel

Asymptoter beskriver hvordan en funksjon oppfører seg når $x$ nærmer seg visse verdier eller går mot uendelig.`,
    },

    // Definisjon: Vertikal asymptote
    {
      id: 'r1-3-2-def-vertikal',
      type: 'definition',
      title: 'Vertikal asymptote',
      content: `Linjen $x = a$ er en **vertikal asymptote** for $f$ dersom minst én av følgende gjelder:

$$\\lim_{x \\to a^-} f(x) = \\pm\\infty \\quad \\text{eller} \\quad \\lim_{x \\to a^+} f(x) = \\pm\\infty$$

Vertikale asymptoter oppstår typisk der nevneren i en brøk går mot null mens telleren ikke gjør det.`,
    },

    // Definisjon: Horisontal asymptote
    {
      id: 'r1-3-2-def-horisontal',
      type: 'definition',
      title: 'Horisontal asymptote',
      content: `Linjen $y = L$ er en **horisontal asymptote** for $f$ dersom:

$$\\lim_{x \\to \\infty} f(x) = L \\quad \\text{eller} \\quad \\lim_{x \\to -\\infty} f(x) = L$$

En funksjon kan ha forskjellige horisontale asymptoter når $x \\to \\infty$ og $x \\to -\\infty$, eller ingen i det hele tatt.`,
    },

    // Eksempel 5: Asymptoter
    {
      id: 'r1-3-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Finne asymptoter',
      problem: `Finn alle asymptoter til $f(x) = \\frac{2x + 1}{x - 3}$.`,
      solution: `**Løsning:**

**Vertikal asymptote:**
Nevneren er null når $x - 3 = 0$, altså $x = 3$.
Telleren i $x = 3$: $2(3) + 1 = 7 \\neq 0$.

$\\lim_{x \\to 3^-} f(x) = -\\infty$ og $\\lim_{x \\to 3^+} f(x) = +\\infty$

**Vertikal asymptote: $x = 3$**

**Horisontal asymptote:**
$$\\lim_{x \\to \\infty} \\frac{2x + 1}{x - 3} = \\lim_{x \\to \\infty} \\frac{2 + \\frac{1}{x}}{1 - \\frac{3}{x}} = \\frac{2 + 0}{1 - 0} = 2$$

Tilsvarende: $\\lim_{x \\to -\\infty} f(x) = 2$

**Horisontal asymptote: $y = 2$**`,
    },

    // Tip for asymptoter
    {
      id: 'r1-3-2-tip-asymptote',
      type: 'tip',
      content: `**Tips for å finne asymptoter til rasjonale funksjoner $\\frac{P(x)}{Q(x)}$:**

**Vertikale asymptoter:** Løs $Q(x) = 0$. Sjekk at $P(x) \\neq 0$ i disse punktene.

**Horisontale asymptoter:** Sammenlign gradene til $P$ og $Q$:
- Hvis $\\text{grad}(P) < \\text{grad}(Q)$: Horisontal asymptote $y = 0$
- Hvis $\\text{grad}(P) = \\text{grad}(Q)$: Horisontal asymptote $y = \\frac{\\text{ledende koeff. i } P}{\\text{ledende koeff. i } Q}$
- Hvis $\\text{grad}(P) > \\text{grad}(Q)$: Ingen horisontal asymptote`,
    },

    // GeoGebra: Asymptoter
    {
      id: 'r1-3-2-geogebra-2',
      type: 'geogebra',
      title: 'Asymptoter',
      description: 'Visualisering av $f(x) = \\frac{2x+1}{x-3}$ med asymptoter.',
      appType: 'graphing',
      commands: [
        'f(x) = (2x + 1)/(x - 3)',
        'v: x = 3',
        'h: y = 2',
        'SetColor(f, "Blue")',
        'SetColor(v, "Red")',
        'SetColor(h, "Green")',
        'SetLineStyle(v, 1)',
        'SetLineStyle(h, 1)',
        'SetCaption(v, "Vertikal asymptote x = 3")',
        'SetCaption(h, "Horisontal asymptote y = 2")',
      ],
    },

    // Oppgave 4
    {
      id: 'r1-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle vertikale og horisontale asymptoter.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{3}{x + 2}$', solution: 'Vertikal: $x = -2$. Horisontal: $y = 0$ (grad teller < grad nevner).' },
          { label: 'b', task: '$g(x) = \\frac{x - 1}{x + 4}$', solution: 'Vertikal: $x = -4$. Horisontal: $y = 1$ (grad teller = grad nevner, koeff. $1/1 = 1$).' },
          { label: 'c', task: '$h(x) = \\frac{x^2}{x^2 - 1}$', solution: 'Vertikale: $x = -1$ og $x = 1$. Horisontal: $y = 1$.' },
          { label: 'd', task: '$k(x) = \\frac{2x^2 + 1}{x - 1}$', solution: 'Vertikal: $x = 1$. Ingen horisontal (grad teller > grad nevner).' },
        ],
        hints: ['Faktoriser nevneren for å finne vertikale asymptoter', 'Sammenlign gradene for horisontale asymptoter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ANVENDELSER ==========
    {
      id: 'r1-3-2-anvendelser-section',
      type: 'text',
      content: `## Anvendelser av diskontinuerlige funksjoner

Diskontinuerlige funksjoner er ikke bare teoretiske konstruksjoner - de modellerer mange virkelige fenomener.`,
    },

    // Eksempel 6: Praktisk anvendelse
    {
      id: 'r1-3-2-example-6',
      type: 'example',
      title: 'Eksempel 6: Porto og trappefunksjoner',
      problem: `Portoen for et brev avhenger av vekten:

$$P(x) = \\begin{cases} 17 & \\text{hvis } 0 < x \\leq 50 \\\\ 27 & \\text{hvis } 50 < x \\leq 100 \\\\ 42 & \\text{hvis } 100 < x \\leq 350 \\end{cases}$$

der $x$ er vekten i gram og $P(x)$ er portoen i kroner.

a) Tegn grafen til $P$.
b) Hvor er $P$ diskontinuerlig?`,
      solution: `**Løsning:**

a) Grafen er en trappefunksjon med tre "trinn":
   - $P = 17$ kr for $0 < x \\leq 50$ g
   - $P = 27$ kr for $50 < x \\leq 100$ g
   - $P = 42$ kr for $100 < x \\leq 350$ g

b) $P$ er diskontinuerlig i $x = 50$ og $x = 100$ g.

   - I $x = 50$: $\\lim_{x \\to 50^-} P(x) = 17$, $\\lim_{x \\to 50^+} P(x) = 27$ (hoppunkt)
   - I $x = 100$: $\\lim_{x \\to 100^-} P(x) = 27$, $\\lim_{x \\to 100^+} P(x) = 42$ (hoppunkt)

Slike trappefunksjoner er naturlige i mange prismodeller, skattesatser og avgifter.`,
    },

    // Oppgave 5 - Vanskelig
    {
      id: 'r1-3-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver om kontinuitet.',
        subTasks: [
          { label: 'a', task: 'Finn verdien av $k$ slik at $f(x) = \\begin{cases} x^2 + k & \\text{hvis } x < 2 \\\\ 3x & \\text{hvis } x \\geq 2 \\end{cases}$ er kontinuerlig i $x = 2$.', solution: 'For kontinuitet: $\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x) = f(2)$. $4 + k = 6 \\Rightarrow k = 2$.' },
          { label: 'b', task: 'La $g(x) = \\frac{\\sin x}{x}$ for $x \\neq 0$. Hvordan må $g(0)$ defineres for at $g$ skal være kontinuerlig i $x = 0$?', solution: '$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, så vi må definere $g(0) = 1$.' },
          { label: 'c', task: 'Vis at $h(x) = x \\cdot \\sin\\frac{1}{x}$ for $x \\neq 0$ kan utvides til en kontinuerlig funksjon ved å sette $h(0) = 0$.', solution: '$|x \\sin\\frac{1}{x}| \\leq |x|$ (siden $|\\sin u| \\leq 1$). Når $x \\to 0$: $|x| \\to 0$. Altså $\\lim_{x \\to 0} x\\sin\\frac{1}{x} = 0 = h(0)$.' },
        ],
        hints: ['For å være kontinuerlig må ensidige grenseverdier være like og lik funksjonsverdien', 'Bruk kjente grenseverdier som $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Kontinuitet i et punkt:**
En funksjon $f$ er kontinuerlig i $x = a$ hvis:
1. $f(a)$ eksisterer
2. $\\lim_{x \\to a} f(x)$ eksisterer
3. $\\lim_{x \\to a} f(x) = f(a)$

**Typer diskontinuitet:**
- **Fjernbar:** Grenseverdien eksisterer, men $f(a)$ mangler eller er feil
- **Hoppunkt:** Ensidige grenseverdier er forskjellige
- **Pol:** Funksjonen går mot $\\pm\\infty$

**Asymptoter:**
- **Vertikal asymptote $x = a$:** $\\lim_{x \\to a} f(x) = \\pm\\infty$
- **Horisontal asymptote $y = L$:** $\\lim_{x \\to \\pm\\infty} f(x) = L$

**Standardfunksjoner:**
Polynomer, eksponentialfunksjoner, trigonometriske funksjoner og logaritmer er kontinuerlige på sin naturlige definisjonsmengde.`,
    },

    // Ekstraoppgaver
    {
      id: 'r1-3-2-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r1-3-2-ex-block-6',
          type: 'exercise',
          exercise: {
            id: 'r1-3-2-ex-6',
            number: 'E1',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver om kontinuitet og asymptoter.',
            subTasks: [
              { label: 'a', task: 'Finn alle verdier av $a$ og $b$ slik at $f(x) = \\begin{cases} ax + b & \\text{hvis } x < 1 \\\\ x^2 & \\text{hvis } x \\geq 1 \\end{cases}$ er kontinuerlig og har kontinuerlig derivert i $x = 1$.', solution: 'Kontinuitet: $a + b = 1$. Kontinuerlig derivert: $a = 2(1) = 2$. Altså $a = 2$, $b = -1$.' },
              { label: 'b', task: 'Bestem alle asymptoter til $g(x) = \\frac{x^2 - 4}{x^2 - x - 2}$.', solution: '$g(x) = \\frac{(x-2)(x+2)}{(x-2)(x+1)} = \\frac{x+2}{x+1}$ for $x \\neq 2$. Vertikal: $x = -1$ (pol). Fjernbar disk. i $x = 2$. Horisontal: $y = 1$.' },
              { label: 'c', task: 'Skissér en funksjon som er kontinuerlig på $(-\\infty, 0) \\cup (0, 2) \\cup (2, \\infty)$, har hoppunkt i $x = 0$ og pol i $x = 2$.', solution: 'For eksempel: $f(x) = \\begin{cases} 1 & \\text{hvis } x < 0 \\\\ \\frac{1}{x-2} + 2 & \\text{hvis } x > 0, x \\neq 2 \\end{cases}$' },
            ],
            hints: ['For kontinuerlig derivert må også de deriverte fra hver side være like'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_3_3: TextbookChapter = {
  id: 'r1-3-3',
  courseId: 'r1',
  chapterNumber: '3.3',
  title: 'Derivasjonens definisjon',
  description: 'Laer om derivasjonens definisjon gjennom grenseverdibegrepet, fra gjennomsnittlig til momentan vekstfart.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forsta sammenhengen mellom sekant og tangent',
    'beherske derivasjonens definisjon som en grenseverdi',
    'kunne derivere enkle funksjoner ved hjelp av definisjonen',
    'forsta den geometriske tolkningen av den deriverte',
    'kunne bruke numerisk derivasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-3-3-intro',
      type: 'text',
      content: `## Fra vekstfart til derivasjon

I dette kapittelet skal vi utvikle den matematiske definisjonen av den deriverte. Vi starter med det intuitive begrepet **vekstfart** og ser hvordan vi kan gjore dette presist ved hjelp av **grenseverdier**.

Tenk på en bil som kjorer langs en vei. Hvis bilen tilbakelegger 100 km på 2 timer, er **gjennomsnittsfarten** $\\frac{100}{2} = 50$ km/t. Men hva er farten akkurat i et gitt oyeblikk? Dette er et sporsmal om **momentan vekstfart**, og svaret ligger i derivasjonens definisjon.`,
    },
    {
      id: 'r1-3-3-tangent-bilde',
      type: 'image',
      src: '/images/r1/derivasjon-tangent.svg',
      alt: 'Sekantlinje som narmer seg tangentlinje',
      caption: 'Den deriverte er stigningstallet til tangentlinjen',
    },

    // ========== GJENNOMSNITTLIG VEKSTFART ==========
    {
      id: 'r1-3-3-gjennomsnitt',
      type: 'text',
      content: `## Gjennomsnittlig vekstfart

Nar vi har en funksjon $f(x)$, kan vi beregne hvor mye funksjonsverdien endrer seg i gjennomsnitt mellom to punkter.`,
    },

    // Definisjon: Gjennomsnittlig vekstfart
    {
      id: 'r1-3-3-def-gjennomsnitt',
      type: 'definition',
      title: 'Gjennomsnittlig vekstfart',
      content: `Den **gjennomsnittlige vekstfarten** til en funksjon $f$ i intervallet $[a, b]$ er:

$$\\frac{f(b) - f(a)}{b - a}$$

Dette er stigningstallet til **sekanten** gjennom punktene $(a, f(a))$ og $(b, f(b))$.`,
    },

    // Sekant-illustrasjon
    {
      id: 'r1-3-3-sekant-forklaring',
      type: 'text',
      content: `**Geometrisk tolkning:**

En **sekant** er en rett linje som skjaerer grafen i to punkter. Stigningstallet til sekanten forteller oss hvor bratt funksjonen stiger (eller synker) i gjennomsnitt mellom disse to punktene.

Hvis vi setter $b = a + h$, der $h$ er avstanden mellom $x$-verdiene, far vi den alternative formen:

$$\\frac{f(a + h) - f(a)}{h}$$

Dette kalles **differansekvotienten** eller **Newton-kvotienten**.`,
    },

    // Eksempel 1: Gjennomsnittlig vekstfart
    {
      id: 'r1-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Gjennomsnittlig vekstfart',
      problem: `La $f(x) = x^2$. Finn den gjennomsnittlige vekstfarten i intervallet $[1, 3]$.`,
      solution: `**Løsning:**

Vi bruker formelen for gjennomsnittlig vekstfart:

$$\\frac{f(3) - f(1)}{3 - 1} = \\frac{3^2 - 1^2}{3 - 1} = \\frac{9 - 1}{2} = \\frac{8}{2} = 4$$

**Svar:** Den gjennomsnittlige vekstfarten er $4$.

Dette betyr at sekanten gjennom $(1, 1)$ og $(3, 9)$ har stigningstall $4$.`,
    },

    // GeoGebra: Sekant
    {
      id: 'r1-3-3-geogebra-sekant',
      type: 'geogebra',
      title: 'Sekant til f(x) = x^2',
      description: 'Visualisering av sekanten mellom to punkter på parabelen.',
      appType: 'graphing',
      commands: [
        'f(x) = x^2',
        'A = (1, f(1))',
        'B = (3, f(3))',
        'sekant = Line(A, B)',
        'SetColor(f, "Blue")',
        'SetColor(sekant, "Red")',
        'SetCaption(A, "A = (1, 1)")',
        'SetCaption(B, "B = (3, 9)")',
        'SetPointSize(A, 5)',
        'SetPointSize(B, 5)',
      ],
    },

    // Oppgave 1
    {
      id: 'r1-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den gjennomsnittlige vekstfarten for funksjonen i det oppgitte intervallet.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2$ i intervallet $[2, 4]$', solution: '$\\frac{f(4) - f(2)}{4 - 2} = \\frac{16 - 4}{2} = \\frac{12}{2} = 6$' },
          { label: 'b', task: '$f(x) = x^3$ i intervallet $[1, 2]$', solution: '$\\frac{f(2) - f(1)}{2 - 1} = \\frac{8 - 1}{1} = 7$' },
          { label: 'c', task: '$f(x) = \\frac{1}{x}$ i intervallet $[1, 4]$', solution: '$\\frac{f(4) - f(1)}{4 - 1} = \\frac{\\frac{1}{4} - 1}{3} = \\frac{-\\frac{3}{4}}{3} = -\\frac{1}{4}$' },
          { label: 'd', task: '$f(x) = \\sqrt{x}$ i intervallet $[4, 9]$', solution: '$\\frac{f(9) - f(4)}{9 - 4} = \\frac{3 - 2}{5} = \\frac{1}{5}$' },
        ],
        hints: ['Bruk formelen $\\frac{f(b) - f(a)}{b - a}$', 'Husk å beregne funksjonsverdiene forst'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MOMENTAN VEKSTFART ==========
    {
      id: 'r1-3-3-momentan-intro',
      type: 'text',
      content: `## Momentan vekstfart

Hva skjer hvis vi lar de to punktene komme naermere og naermere hverandre? Sekanten vil da naerme seg en **tangent** - en linje som bare berorer grafen i ett punkt.

Den momentane vekstfarten i et punkt er stigningstallet til tangenten i det punktet.`,
    },

    // Illustrasjon av grenseprosessen
    {
      id: 'r1-3-3-grense-illustrasjon',
      type: 'text',
      content: `**Fra sekant til tangent:**

Tenk på at vi har funksjonen $f(x) = x^2$ og vil finne den momentane vekstfarten i punktet $x = 2$.

Vi beregner den gjennomsnittlige vekstfarten fra $x = 2$ til $x = 2 + h$ for stadig mindre verdier av $h$:

| $h$ | Gjennomsnittlig vekstfart |
|-----|---------------------------|
| $1$ | $\\frac{(2+1)^2 - 2^2}{1} = \\frac{9-4}{1} = 5$ |
| $0{,}5$ | $\\frac{(2{,}5)^2 - 4}{0{,}5} = \\frac{6{,}25-4}{0{,}5} = 4{,}5$ |
| $0{,}1$ | $\\frac{(2{,}1)^2 - 4}{0{,}1} = \\frac{4{,}41-4}{0{,}1} = 4{,}1$ |
| $0{,}01$ | $\\frac{(2{,}01)^2 - 4}{0{,}01} = \\frac{4{,}0401-4}{0{,}01} = 4{,}01$ |

Vi ser at nar $h \\to 0$, naermer den gjennomsnittlige vekstfarten seg $4$.`,
    },

    // GeoGebra: Sekant til tangent
    {
      id: 'r1-3-3-geogebra-tangent',
      type: 'geogebra',
      title: 'Fra sekant til tangent',
      description: 'Bruk glidebryteren til a se hvordan sekanten naermer seg tangenten nar h gar mot 0.',
      appType: 'graphing',
      commands: [
        'f(x) = x^2',
        'a = 2',
        'h = Slider(0.01, 2, 0.01)',
        'A = (a, f(a))',
        'B = (a + h, f(a + h))',
        'sekant = Line(A, B)',
        'tangent = Tangent(A, f)',
        'SetColor(f, "Blue")',
        'SetColor(sekant, "Orange")',
        'SetColor(tangent, "Green")',
        'SetLineStyle(tangent, 1)',
        'SetCaption(sekant, "Sekant")',
        'SetCaption(tangent, "Tangent")',
      ],
    },

    // Oppgave 2
    {
      id: 'r1-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk en tabell til a estimere den momentane vekstfarten.',
        subTasks: [
          { label: 'a', task: 'La $f(x) = x^2$. Beregn $\\frac{f(3+h) - f(3)}{h}$ for $h = 0{,}1$, $h = 0{,}01$ og $h = 0{,}001$. Hva naermer verdiene seg?', solution: 'For $h=0{,}1$: $\\frac{9{,}61-9}{0{,}1} = 6{,}1$. For $h=0{,}01$: $\\frac{9{,}0601-9}{0{,}01} = 6{,}01$. For $h=0{,}001$: $6{,}001$. Verdiene naermer seg $6$.' },
          { label: 'b', task: 'La $g(x) = x^3$. Beregn $\\frac{g(2+h) - g(2)}{h}$ for $h = 0{,}1$, $h = 0{,}01$ og $h = 0{,}001$. Hva naermer verdiene seg?', solution: 'For $h=0{,}1$: $\\frac{9{,}261-8}{0{,}1} = 12{,}61$. For $h=0{,}01$: $12{,}0601$. For $h=0{,}001$: $12{,}006001$. Verdiene naermer seg $12$.' },
        ],
        hints: ['Sett inn verdiene og regn ut', 'Se etter et monster nar $h$ blir mindre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DERIVASJONENS DEFINISJON ==========
    {
      id: 'r1-3-3-definisjon-intro',
      type: 'text',
      content: `## Derivasjonens definisjon

Na er vi klare til a gi den presise matematiske definisjonen av den deriverte. Den deriverte er grenseverdien av differansekvotienten nar $h$ gar mot $0$.`,
    },

    // Hovedteorem: Derivasjonens definisjon
    {
      id: 'r1-3-3-def-derivert',
      type: 'theorem',
      title: 'Derivasjonens definisjon',
      content: `Den **deriverte** av funksjonen $f$ i punktet $x = a$ er definert som:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$

forutsatt at denne grenseverdien eksisterer.

**Alternativ form:** Ved a sette $x = a + h$ (slik at $h = x - a$) far vi:

$$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$`,
    },

    // Note om notasjon
    {
      id: 'r1-3-3-note-notasjon',
      type: 'note',
      content: `**Notasjon for den deriverte:**

Vi bruker flere ulike notasjoner for den deriverte:

- $f'(x)$ - Lagranges notasjon (mest brukt i Norge)
- $\\frac{df}{dx}$ eller $\\frac{dy}{dx}$ - Leibniz' notasjon
- $Df(x)$ - Operatornotasjon

Alle disse betyr det samme: den deriverte av $f$ med hensyn på $x$.`,
    },

    // Eksempel 2: Derivasjon fra definisjonen
    {
      id: 'r1-3-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Derivasjon fra definisjonen',
      problem: `Bruk definisjonen til å finne $f'(x)$ nar $f(x) = x^2$.`,
      solution: `**Løsning:**

Vi bruker definisjonen:
$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

**Steg 1:** Beregn $f(x+h)$:
$$f(x+h) = (x+h)^2 = x^2 + 2xh + h^2$$

**Steg 2:** Beregn differansen $f(x+h) - f(x)$:
$$f(x+h) - f(x) = x^2 + 2xh + h^2 - x^2 = 2xh + h^2$$

**Steg 3:** Del på $h$:
$$\\frac{f(x+h) - f(x)}{h} = \\frac{2xh + h^2}{h} = \\frac{h(2x + h)}{h} = 2x + h$$

**Steg 4:** Ta grenseverdien nar $h \\to 0$:
$$f'(x) = \\lim_{h \\to 0} (2x + h) = 2x$$

**Svar:** $f'(x) = 2x$

Dette bekrefter at den deriverte av $x^2$ er $2x$.`,
    },

    // Eksempel 3: Mer komplisert derivasjon
    {
      id: 'r1-3-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Derivasjon av $f(x) = x^3$',
      problem: `Bruk definisjonen til å finne $f'(x)$ nar $f(x) = x^3$.`,
      solution: `**Løsning:**

**Steg 1:** Beregn $f(x+h)$:
$$f(x+h) = (x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$$

(Vi bruker tredje kvadratsetning: $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$)

**Steg 2:** Beregn differansen:
$$f(x+h) - f(x) = x^3 + 3x^2h + 3xh^2 + h^3 - x^3 = 3x^2h + 3xh^2 + h^3$$

**Steg 3:** Del på $h$:
$$\\frac{f(x+h) - f(x)}{h} = \\frac{3x^2h + 3xh^2 + h^3}{h} = \\frac{h(3x^2 + 3xh + h^2)}{h} = 3x^2 + 3xh + h^2$$

**Steg 4:** Ta grenseverdien:
$$f'(x) = \\lim_{h \\to 0} (3x^2 + 3xh + h^2) = 3x^2$$

**Svar:** $f'(x) = 3x^2$`,
    },

    // Oppgave 3: Derivasjon fra definisjonen
    {
      id: 'r1-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk definisjonen til å finne den deriverte.',
        subTasks: [
          { label: 'a', task: '$f(x) = 3x$', solution: '$f\'(x) = \\lim_{h \\to 0} \\frac{3(x+h) - 3x}{h} = \\lim_{h \\to 0} \\frac{3h}{h} = 3$' },
          { label: 'b', task: '$f(x) = x^2 + 2x$', solution: '$f(x+h) - f(x) = (x+h)^2 + 2(x+h) - x^2 - 2x = 2xh + h^2 + 2h$. Delt på $h$: $2x + h + 2$. Grense: $f\'(x) = 2x + 2$' },
          { label: 'c', task: '$f(x) = 5$', solution: '$f\'(x) = \\lim_{h \\to 0} \\frac{5 - 5}{h} = \\lim_{h \\to 0} 0 = 0$' },
          { label: 'd', task: '$f(x) = x^2 - 3x + 1$', solution: '$f(x+h) - f(x) = 2xh + h^2 - 3h$. Delt på $h$: $2x + h - 3$. Grense: $f\'(x) = 2x - 3$' },
        ],
        hints: ['Folg de fire stegene: beregn $f(x+h)$, finn differansen, del på $h$, ta grenseverdien', 'Forenkle uttrykket for du tar grenseverdien'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 4: Derivasjon av 1/x
    {
      id: 'r1-3-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Derivasjon av $f(x) = \\frac{1}{x}$',
      problem: `Bruk definisjonen til å finne $f'(x)$ nar $f(x) = \\frac{1}{x}$.`,
      solution: `**Løsning:**

**Steg 1:** Beregn $f(x+h) - f(x)$:
$$f(x+h) - f(x) = \\frac{1}{x+h} - \\frac{1}{x}$$

**Steg 2:** Finn fellesnevner:
$$= \\frac{x - (x+h)}{x(x+h)} = \\frac{x - x - h}{x(x+h)} = \\frac{-h}{x(x+h)}$$

**Steg 3:** Del på $h$:
$$\\frac{f(x+h) - f(x)}{h} = \\frac{-h}{h \\cdot x(x+h)} = \\frac{-1}{x(x+h)}$$

**Steg 4:** Ta grenseverdien:
$$f'(x) = \\lim_{h \\to 0} \\frac{-1}{x(x+h)} = \\frac{-1}{x \\cdot x} = -\\frac{1}{x^2}$$

**Svar:** $f'(x) = -\\frac{1}{x^2}$`,
    },

    // Eksempel 5: Derivasjon av sqrt(x)
    {
      id: 'r1-3-3-example-5',
      type: 'example',
      title: 'Eksempel 5: Derivasjon av $f(x) = \\sqrt{x}$',
      problem: `Bruk definisjonen til å finne $f'(x)$ nar $f(x) = \\sqrt{x}$ for $x > 0$.`,
      solution: `**Løsning:**

**Steg 1:** Sett opp differansekvotienten:
$$\\frac{f(x+h) - f(x)}{h} = \\frac{\\sqrt{x+h} - \\sqrt{x}}{h}$$

**Steg 2:** Utvid med konjugatet:
$$= \\frac{\\sqrt{x+h} - \\sqrt{x}}{h} \\cdot \\frac{\\sqrt{x+h} + \\sqrt{x}}{\\sqrt{x+h} + \\sqrt{x}}$$

$$= \\frac{(x+h) - x}{h(\\sqrt{x+h} + \\sqrt{x})} = \\frac{h}{h(\\sqrt{x+h} + \\sqrt{x})}$$

**Steg 3:** Forenkle:
$$= \\frac{1}{\\sqrt{x+h} + \\sqrt{x}}$$

**Steg 4:** Ta grenseverdien:
$$f'(x) = \\lim_{h \\to 0} \\frac{1}{\\sqrt{x+h} + \\sqrt{x}} = \\frac{1}{\\sqrt{x} + \\sqrt{x}} = \\frac{1}{2\\sqrt{x}}$$

**Svar:** $f'(x) = \\frac{1}{2\\sqrt{x}}$`,
    },

    // Tip om konjugat
    {
      id: 'r1-3-3-tip-konjugat',
      type: 'tip',
      content: `**Tips: Konjugatmetoden**

Nar differansekvotienten inneholder rottuttrykk, er det ofte nyttig a utvide med konjugatet:

$$\\frac{\\sqrt{a} - \\sqrt{b}}{h} \\cdot \\frac{\\sqrt{a} + \\sqrt{b}}{\\sqrt{a} + \\sqrt{b}} = \\frac{a - b}{h(\\sqrt{a} + \\sqrt{b})}$$

Dette eliminerer rottene i telleren.`,
    },

    // Oppgave 4: Mer krevende derivasjon
    {
      id: 'r1-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk definisjonen til å finne den deriverte. Vis alle mellomregninger.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{2}{x}$', solution: '$f\'(x) = \\lim_{h \\to 0} \\frac{\\frac{2}{x+h} - \\frac{2}{x}}{h} = \\lim_{h \\to 0} \\frac{-2h}{hx(x+h)} = \\lim_{h \\to 0} \\frac{-2}{x(x+h)} = -\\frac{2}{x^2}$' },
          { label: 'b', task: '$f(x) = \\frac{1}{x^2}$', solution: '$f(x+h) - f(x) = \\frac{1}{(x+h)^2} - \\frac{1}{x^2} = \\frac{x^2 - (x+h)^2}{x^2(x+h)^2} = \\frac{-2xh - h^2}{x^2(x+h)^2}$. Delt på $h$: $\\frac{-2x-h}{x^2(x+h)^2}$. Grense: $f\'(x) = -\\frac{2x}{x^4} = -\\frac{2}{x^3}$' },
          { label: 'c', task: '$f(x) = \\sqrt{2x}$', solution: 'Bruk konjugatmetoden: $f\'(x) = \\lim_{h \\to 0} \\frac{\\sqrt{2(x+h)} - \\sqrt{2x}}{h} = \\frac{2}{\\sqrt{2x} + \\sqrt{2x}} \\cdot \\frac{1}{1} = \\frac{1}{\\sqrt{2x}}$' },
        ],
        hints: ['For brokfunksjoner: finn fellesnevner', 'For rottuttrykk: bruk konjugatmetoden'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GEOMETRISK TOLKNING ==========
    {
      id: 'r1-3-3-geometri',
      type: 'text',
      content: `## Geometrisk tolkning

Den deriverte $f'(a)$ har en viktig geometrisk betydning: den er stigningstallet til **tangentlinjen** til grafen i punktet $(a, f(a))$.`,
    },

    // Teorem: Tangentens ligning
    {
      id: 'r1-3-3-theorem-tangent',
      type: 'theorem',
      title: 'Tangentens ligning',
      content: `Tangenten til grafen til $f$ i punktet $(a, f(a))$ har ligningen:

$$y - f(a) = f'(a)(x - a)$$

eller på formen $y = mx + c$:

$$y = f'(a) \\cdot x + (f(a) - a \\cdot f'(a))$$`,
    },

    // Eksempel 6: Tangentligning
    {
      id: 'r1-3-3-example-6',
      type: 'example',
      title: 'Eksempel 6: Finn tangentens ligning',
      problem: `La $f(x) = x^2$. Finn ligningen for tangenten til grafen i punktet der $x = 3$.`,
      solution: `**Løsning:**

**Steg 1:** Finn $f(3)$:
$$f(3) = 3^2 = 9$$

Berorningspunktet er $(3, 9)$.

**Steg 2:** Finn $f'(x)$:
Vi vet fra for at $f'(x) = 2x$.

**Steg 3:** Finn stigningstallet $f'(3)$:
$$f'(3) = 2 \\cdot 3 = 6$$

**Steg 4:** Sett opp tangentligningen:
$$y - 9 = 6(x - 3)$$
$$y = 6x - 18 + 9$$
$$y = 6x - 9$$

**Svar:** Tangentens ligning er $y = 6x - 9$.`,
    },

    // GeoGebra: Tangent
    {
      id: 'r1-3-3-geogebra-tangentlinje',
      type: 'geogebra',
      title: 'Tangent til f(x) = x^2 i x = 3',
      description: 'Grafen til $f(x) = x^2$ med tangenten i punktet $(3, 9)$.',
      appType: 'graphing',
      commands: [
        'f(x) = x^2',
        'A = (3, f(3))',
        't(x) = 6x - 9',
        'SetColor(f, "Blue")',
        'SetColor(t, "Red")',
        'SetCaption(A, "Berorningspunkt (3, 9)")',
        'SetPointSize(A, 5)',
        'SetCaption(t, "y = 6x - 9")',
      ],
    },

    // Oppgave 5: Tangentligninger
    {
      id: 'r1-3-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn ligningen for tangenten til grafen i det oppgitte punktet.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2$ i $x = 2$', solution: '$f(2) = 4$, $f\'(x) = 2x$, $f\'(2) = 4$. Tangent: $y - 4 = 4(x-2) \\Rightarrow y = 4x - 4$' },
          { label: 'b', task: '$f(x) = x^3$ i $x = 1$', solution: '$f(1) = 1$, $f\'(x) = 3x^2$, $f\'(1) = 3$. Tangent: $y - 1 = 3(x-1) \\Rightarrow y = 3x - 2$' },
          { label: 'c', task: '$f(x) = \\frac{1}{x}$ i $x = 2$', solution: '$f(2) = \\frac{1}{2}$, $f\'(x) = -\\frac{1}{x^2}$, $f\'(2) = -\\frac{1}{4}$. Tangent: $y - \\frac{1}{2} = -\\frac{1}{4}(x-2) \\Rightarrow y = -\\frac{1}{4}x + 1$' },
          { label: 'd', task: '$f(x) = \\sqrt{x}$ i $x = 4$', solution: '$f(4) = 2$, $f\'(x) = \\frac{1}{2\\sqrt{x}}$, $f\'(4) = \\frac{1}{4}$. Tangent: $y - 2 = \\frac{1}{4}(x-4) \\Rightarrow y = \\frac{1}{4}x + 1$' },
        ],
        hints: ['Bruk formelen $y - f(a) = f\'(a)(x - a)$', 'Husk å finne bade $f(a)$ og $f\'(a)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NUMERISK DERIVASJON ==========
    {
      id: 'r1-3-3-numerisk',
      type: 'text',
      content: `## Numerisk derivasjon

Noen ganger er det vanskelig eller umulig å finne den deriverte analytisk. Da kan vi tilnaerme den deriverte **numerisk** ved a velge en liten verdi for $h$.`,
    },

    // Definisjon: Numerisk derivasjon
    {
      id: 'r1-3-3-def-numerisk',
      type: 'definition',
      title: 'Numeriske tilnaerminger',
      content: `**Framoverdifferanse:**
$$f'(a) \\approx \\frac{f(a+h) - f(a)}{h}$$

**Bakoverdifferanse:**
$$f'(a) \\approx \\frac{f(a) - f(a-h)}{h}$$

**Sentral differanse (mest noyaktig):**
$$f'(a) \\approx \\frac{f(a+h) - f(a-h)}{2h}$$

Typisk velges $h$ til en liten verdi som $0{,}001$ eller $0{,}0001$.`,
    },

    // Note om sentral differanse
    {
      id: 'r1-3-3-note-sentral',
      type: 'note',
      content: `**Hvorfor er sentral differanse mer noyaktig?**

Sentral differanse bruker informasjon fra begge sider av punktet $a$, noe som gir en bedre tilnaerming. Feilen i sentral differanse er proporsjonal med $h^2$, mens feilen i framover/bakover-differanse er proporsjonal med $h$.

For $h = 0{,}01$: Sentral differanse har feil $\\sim 0{,}0001$, mens de andre har feil $\\sim 0{,}01$.`,
    },

    // Eksempel 7: Numerisk derivasjon
    {
      id: 'r1-3-3-example-7',
      type: 'example',
      title: 'Eksempel 7: Numerisk derivasjon',
      problem: `La $f(x) = \\sin(x)$. Bruk sentral differanse med $h = 0{,}01$ til a tilnaerme $f'\\left(\\frac{\\pi}{4}\\right)$.`,
      solution: `**Løsning:**

Vi bruker formelen for sentral differanse:
$$f'\\left(\\frac{\\pi}{4}\\right) \\approx \\frac{f\\left(\\frac{\\pi}{4} + 0{,}01\\right) - f\\left(\\frac{\\pi}{4} - 0{,}01\\right)}{2 \\cdot 0{,}01}$$

Beregner:
- $\\frac{\\pi}{4} \\approx 0{,}7854$
- $\\sin(0{,}7954) \\approx 0{,}7141$
- $\\sin(0{,}7754) \\approx 0{,}7000$

$$f'\\left(\\frac{\\pi}{4}\\right) \\approx \\frac{0{,}7141 - 0{,}7000}{0{,}02} = \\frac{0{,}0141}{0{,}02} \\approx 0{,}707$$

**Sammenligning:** Den eksakte verdien er $f'(x) = \\cos(x)$, sa $f'\\left(\\frac{\\pi}{4}\\right) = \\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2} \\approx 0{,}7071$.

Tilnaermingen var svaert god!`,
    },

    // Oppgave 6: Numerisk derivasjon
    {
      id: 'r1-3-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-3-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk numerisk derivasjon til a tilnaerme den deriverte.',
        subTasks: [
          { label: 'a', task: 'Bruk sentral differanse med $h = 0{,}01$ til a tilnaerme $f\'(2)$ for $f(x) = x^3$. Sammenlign med eksakt svar.', solution: 'Sentral: $\\frac{f(2{,}01) - f(1{,}99)}{0{,}02} = \\frac{8{,}120601 - 7{,}880599}{0{,}02} \\approx 12{,}0001$. Eksakt: $f\'(2) = 3 \\cdot 2^2 = 12$. Svaert god tilnaerming!' },
          { label: 'b', task: 'Bruk framoverdifferanse med $h = 0{,}001$ til a tilnaerme $f\'(1)$ for $f(x) = e^x$. Sammenlign med eksakt svar.', solution: 'Framover: $\\frac{e^{1{,}001} - e^1}{0{,}001} \\approx \\frac{2{,}7210 - 2{,}7183}{0{,}001} \\approx 2{,}72$. Eksakt: $f\'(1) = e^1 \\approx 2{,}7183$.' },
          { label: 'c', task: 'Bruk sentral differanse med $h = 0{,}01$ til a tilnaerme $f\'(0)$ for $f(x) = \\cos(x)$.', solution: 'Sentral: $\\frac{\\cos(0{,}01) - \\cos(-0{,}01)}{0{,}02} = \\frac{0{,}99995 - 0{,}99995}{0{,}02} = 0$. Eksakt: $f\'(0) = -\\sin(0) = 0$. Perfekt!' },
        ],
        hints: ['Bruk kalkulator eller datamaskin', 'Husk at vinkler ma være i radianer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NAR ER EN FUNKSJON DERIVERBAR? ==========
    {
      id: 'r1-3-3-deriverbarhet',
      type: 'text',
      content: `## Nar er en funksjon deriverbar?

En funksjon er deriverbar i et punkt hvis grenseverdien i derivasjonens definisjon eksisterer. Men ikke alle funksjoner er deriverbare overalt.`,
    },

    // Teorem: Deriverbarhet og kontinuitet
    {
      id: 'r1-3-3-theorem-kont',
      type: 'theorem',
      title: 'Deriverbarhet og kontinuitet',
      content: `Hvis $f$ er deriverbar i $x = a$, så er $f$ kontinuerlig i $x = a$.

**Merk:** Det motsatte gjelder **ikke**! En funksjon kan være kontinuerlig uten a være deriverbar.`,
    },

    // Eksempler på ikke-deriverbare funksjoner
    {
      id: 'r1-3-3-ikke-deriverbar',
      type: 'text',
      content: `**Tilfeller der en funksjon ikke er deriverbar:**

1. **Spisse hjorner**: Funksjonen $f(x) = |x|$ er ikke deriverbar i $x = 0$ fordi venstre- og hoyresidige grenseverdier er ulike.

2. **Vertikale tangenter**: Funksjonen $f(x) = \\sqrt[3]{x}$ har vertikal tangent i $x = 0$ (grenseverdien blir uendelig).

3. **Diskontinuiteter**: Hvis funksjonen har et hopp eller et hull, er den ikke deriverbar der.`,
    },

    // GeoGebra: Absoluttverdifunksjonen
    {
      id: 'r1-3-3-geogebra-abs',
      type: 'geogebra',
      title: 'Absoluttverdifunksjonen',
      description: 'Grafen til $f(x) = |x|$ har et spisst hjorne i $x = 0$ og er derfor ikke deriverbar der.',
      appType: 'graphing',
      commands: [
        'f(x) = abs(x)',
        'A = (0, 0)',
        'SetColor(f, "Blue")',
        'SetCaption(A, "Ikke deriverbar her")',
        'SetPointSize(A, 5)',
        'SetColor(A, "Red")',
      ],
    },

    // Eksempel 8: Vis at |x| ikke er deriverbar i 0
    {
      id: 'r1-3-3-example-8',
      type: 'example',
      title: 'Eksempel 8: $f(x) = |x|$ er ikke deriverbar i $x = 0$',
      problem: `Vis at $f(x) = |x|$ ikke er deriverbar i $x = 0$.`,
      solution: `**Løsning:**

Vi undersoker grenseverdien fra hoyre og venstre:

**Fra hoyre ($h > 0$):**
$$\\lim_{h \\to 0^+} \\frac{|0+h| - |0|}{h} = \\lim_{h \\to 0^+} \\frac{h}{h} = 1$$

**Fra venstre ($h < 0$):**
$$\\lim_{h \\to 0^-} \\frac{|0+h| - |0|}{h} = \\lim_{h \\to 0^-} \\frac{-h}{h} = -1$$

Siden $1 \\neq -1$, eksisterer ikke grenseverdien $\\lim_{h \\to 0} \\frac{|h|}{h}$.

**Konklusjon:** $f(x) = |x|$ er ikke deriverbar i $x = 0$.

Geometrisk: Grafen har et spisst hjorne i origo, sa det finnes ingen entydig tangent.`,
    },

    // Oppgave 7: Deriverbarhet
    {
      id: 'r1-3-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-3-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Undersok om funksjonen er deriverbar i det oppgitte punktet.',
        subTasks: [
          { label: 'a', task: '$f(x) = |x - 2|$ i $x = 2$', solution: 'Fra hoyre: grenseverdi $= 1$. Fra venstre: grenseverdi $= -1$. Ikke deriverbar i $x = 2$.' },
          { label: 'b', task: '$f(x) = x|x|$ i $x = 0$', solution: '$f(x) = x^2$ for $x \\geq 0$ og $f(x) = -x^2$ for $x < 0$. Fra hoyre: $\\lim_{h \\to 0^+} \\frac{h^2}{h} = 0$. Fra venstre: $\\lim_{h \\to 0^-} \\frac{-h^2}{h} = 0$. Begge er $0$, sa $f\'(0) = 0$. Deriverbar!' },
          { label: 'c', task: '$f(x) = \\sqrt{|x|}$ i $x = 0$', solution: 'Fra hoyre: $\\lim_{h \\to 0^+} \\frac{\\sqrt{h}}{h} = \\lim_{h \\to 0^+} \\frac{1}{\\sqrt{h}} = +\\infty$. Grenseverdien eksisterer ikke (uendelig). Ikke deriverbar.' },
        ],
        hints: ['Undersok grenseverdien fra begge sider', 'Tegn grafen for a fa intuisjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Gjennomsnittlig vekstfart (sekant):**
$$\\frac{f(b) - f(a)}{b - a} = \\frac{f(a+h) - f(a)}{h}$$

**Derivasjonens definisjon:**
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$

**Alternativ form:**
$$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$

**Geometrisk tolkning:** $f'(a)$ er stigningstallet til tangenten i $(a, f(a))$.

**Tangentens ligning:** $y - f(a) = f'(a)(x - a)$

**Numerisk derivasjon (sentral differanse):**
$$f'(a) \\approx \\frac{f(a+h) - f(a-h)}{2h}$$

**Deriverbarhet:** En funksjon er deriverbar i et punkt hvis grenseverdien i definisjonen eksisterer. Deriverbarhet impliserer kontinuitet, men ikke omvendt.`,
    },

    // Ekstraoppgaver
    {
      id: 'r1-3-3-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r1-3-3-ex-block-8',
          type: 'exercise',
          exercise: {
            id: 'r1-3-3-ex-8',
            number: 'E1',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver',
            subTasks: [
              { label: 'a', task: 'Bruk definisjonen til a vise at hvis $f(x) = x^n$, så er $f\'(x) = nx^{n-1}$ for $n = 4$.', solution: '$f(x+h) = (x+h)^4 = x^4 + 4x^3h + 6x^2h^2 + 4xh^3 + h^4$. Differanse: $4x^3h + 6x^2h^2 + 4xh^3 + h^4$. Del på $h$: $4x^3 + 6x^2h + 4xh^2 + h^3$. Grense: $f\'(x) = 4x^3$.' },
              { label: 'b', task: 'Finn $f\'(x)$ fra definisjonen nar $f(x) = \\frac{x}{x+1}$.', solution: 'Differanse: $\\frac{x+h}{x+h+1} - \\frac{x}{x+1} = \\frac{(x+h)(x+1) - x(x+h+1)}{(x+h+1)(x+1)} = \\frac{h}{(x+h+1)(x+1)}$. Del på $h$ og ta grense: $f\'(x) = \\frac{1}{(x+1)^2}$.' },
              { label: 'c', task: 'La $f(x) = x^2$ og $g(x) = 2x$. Vis fra definisjonen at $(f + g)\'(x) = f\'(x) + g\'(x)$.', solution: '$(f+g)(x) = x^2 + 2x$. Fra definisjonen: $(f+g)\'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 + 2(x+h) - x^2 - 2x}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2 + 2h}{h} = 2x + 2$. Dette er lik $f\'(x) + g\'(x) = 2x + 2$. $\\checkmark$' },
              { label: 'd', task: 'Finn alle verdier av $a$ slik at $f(x) = \\begin{cases} x^2 & \\text{for } x \\leq 1 \\\\ ax + b & \\text{for } x > 1 \\end{cases}$ er deriverbar i $x = 1$. (Anta at $f$ er kontinuerlig.)', solution: 'Kontinuitet: $1 = a + b$. Fra venstre: $f\'(1^-) = 2 \\cdot 1 = 2$. Fra hoyre: $f\'(1^+) = a$. For deriverbarhet: $a = 2$. Da er $b = 1 - 2 = -1$. Svar: $a = 2$, $b = -1$.' },
            ],
            hints: ['For a): bruk binomialformelen', 'For d): krev at grenseverdiene fra begge sider er like'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: 'r1-3-3-ex-block-9',
          type: 'exercise',
          exercise: {
            id: 'r1-3-3-ex-9',
            number: 'E2',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Flere utfordringsoppgaver',
            subTasks: [
              { label: 'a', task: 'Bruk numerisk derivasjon (sentral differanse med $h = 0{,}001$) til a lage en tabell over $f\'(x)$ for $f(x) = 2^x$ i punktene $x = 0, 1, 2, 3$. Hva ser du?', solution: '$f\'(0) \\approx 0{,}693$, $f\'(1) \\approx 1{,}386$, $f\'(2) \\approx 2{,}773$, $f\'(3) \\approx 5{,}545$. Monsteret: $f\'(x) \\approx 0{,}693 \\cdot 2^x$. (Den eksakte formelen er $f\'(x) = 2^x \\ln 2$.)' },
              { label: 'b', task: 'Vis at for $f(x) = \\sin(x)$ er $f\'(0) = 1$ ved a bruke at $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$.', solution: '$f\'(0) = \\lim_{h \\to 0} \\frac{\\sin(0+h) - \\sin(0)}{h} = \\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$.' },
            ],
            hints: ['For a): Se etter et monster i forholdstallene', 'For b): Bruk den oppgitte grenseverdien direkte'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: L'Hôpitals regel
// ============================================================================

export const CHAPTER_R1_3_4: TextbookChapter = {
  id: 'r1-3-4',
  courseId: 'r1',
  chapterNumber: '3.4',
  title: "L'Hôpitals regel",
  description: "Lær å beregne grenseverdier av ubestemte former som 0/0 og ∞/∞ ved hjelp av L'Hôpitals regel.",
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike strategier for å utforske og bestemme grenseverdier til funksjoner',
  ],
  content: [
    {
      id: 'r1-3-4-intro',
      type: 'text',
      content: `## Ubestemte former

Når vi skal beregne grenseverdier, møter vi noen ganger **ubestemte former** – uttrykk der vanlige regneregler ikke gir oss svaret direkte.

**De vanligste ubestemte formene:**
- $\\frac{0}{0}$ – både teller og nevner går mot 0
- $\\frac{\\infty}{\\infty}$ – både teller og nevner går mot uendelig

**Eksempel på ubestemt form:**
$$\\lim_{x \\to 0} \\frac{\\sin x}{x}$$

Når $x \\to 0$: Teller $\\sin x \\to 0$ og nevner $x \\to 0$. Vi får $\\frac{0}{0}$, som er ubestemt.

**L'Hôpitals regel** gir oss et kraftig verktøy for å løse slike grenseverdier.`,
    },
    {
      id: 'r1-3-4-def-1',
      type: 'definition',
      title: "L'Hôpitals regel",
      content: `Hvis $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ gir en ubestemt form $\\frac{0}{0}$ eller $\\frac{\\infty}{\\infty}$, og hvis $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$ eksisterer, så er:

$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$

**Viktig:** Vi deriverer teller og nevner **hver for seg**, ikke som en brøk!

Regelen gjelder også for $x \\to \\pm\\infty$.`,
    },
    {
      id: 'r1-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Klassisk grenseverdi',
      problem: `Beregn $\\lim_{x \\to 0} \\frac{\\sin x}{x}$`,
      solution: `**Sjekk ubestemt form:**
- Teller: $\\sin 0 = 0$
- Nevner: $0$
- Form: $\\frac{0}{0}$ ✓

**Bruk L'Hôpitals regel:**
$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = \\lim_{x \\to 0} \\frac{(\\sin x)'}{(x)'} = \\lim_{x \\to 0} \\frac{\\cos x}{1} = \\cos 0 = 1$$

**Svar:** $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$`,
    },
    {
      id: 'r1-3-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Eksponentialfunksjon',
      problem: `Beregn $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$`,
      solution: `**Sjekk ubestemt form:**
- Teller: $e^0 - 1 = 0$
- Nevner: $0$
- Form: $\\frac{0}{0}$ ✓

**Bruk L'Hôpitals regel:**
$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = \\lim_{x \\to 0} \\frac{(e^x - 1)'}{(x)'} = \\lim_{x \\to 0} \\frac{e^x}{1} = e^0 = 1$$

**Svar:** $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$`,
    },
    {
      id: 'r1-3-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Uendelig/uendelig',
      problem: `Beregn $\\lim_{x \\to \\infty} \\frac{x^2}{e^x}$`,
      solution: `**Sjekk ubestemt form:**
- Teller: $x^2 \\to \\infty$
- Nevner: $e^x \\to \\infty$
- Form: $\\frac{\\infty}{\\infty}$ ✓

**Første anvendelse av L'Hôpitals regel:**
$$\\lim_{x \\to \\infty} \\frac{x^2}{e^x} = \\lim_{x \\to \\infty} \\frac{2x}{e^x}$$

Fortsatt $\\frac{\\infty}{\\infty}$, så vi bruker regelen igjen:

**Andre anvendelse:**
$$\\lim_{x \\to \\infty} \\frac{2x}{e^x} = \\lim_{x \\to \\infty} \\frac{2}{e^x} = 0$$

**Svar:** $\\lim_{x \\to \\infty} \\frac{x^2}{e^x} = 0$

**Tolkning:** Eksponentialfunksjonen vokser raskere enn ethvert polynom.`,
    },
    {
      id: 'r1-3-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Logaritme',
      problem: `Beregn $\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$`,
      solution: `**Sjekk ubestemt form:**
- Teller: $\\ln x \\to \\infty$
- Nevner: $x \\to \\infty$
- Form: $\\frac{\\infty}{\\infty}$ ✓

**Bruk L'Hôpitals regel:**
$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = \\lim_{x \\to \\infty} \\frac{1/x}{1} = \\lim_{x \\to \\infty} \\frac{1}{x} = 0$$

**Svar:** $\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = 0$

**Tolkning:** Logaritmen vokser langsommere enn lineære funksjoner.`,
    },
    {
      id: 'r1-3-4-advarsel',
      type: 'definition',
      title: 'Viktige advarsler',
      content: `**Når kan du IKKE bruke L'Hôpitals regel:**

1. **Ikke ubestemt form:** Hvis grenseverdien ikke er $\\frac{0}{0}$ eller $\\frac{\\infty}{\\infty}$, gir regelen feil svar!

2. **Derivert eksisterer ikke:** Hvis $f'(x)$ eller $g'(x)$ ikke eksisterer nær $a$.

3. **Grenseverdien av deriverte eksisterer ikke:** Selv om regelen kan brukes, må $\\lim \\frac{f'}{g'}$ eksistere.

**Eksempel på feil bruk:**
$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$

Dette er $\\frac{0}{0}$, men det er enklere å faktorisere:
$\\frac{(x-1)(x+1)}{x-1} = x + 1 \\to 2$`,
    },
    {
      id: 'r1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r1-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: "Bruk L'Hôpitals regel til å beregne følgende grenseverdier.",
        subTasks: [
          { label: 'a', task: '$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$', solution: "Ubestemt form $\\frac{0}{0}$. L'Hôpital: $\\frac{\\sin x}{2x}$, fortsatt $\\frac{0}{0}$. Igjen: $\\frac{\\cos x}{2} = \\frac{1}{2}$" },
          { label: 'b', task: '$\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$', solution: "Ubestemt $\\frac{0}{0}$. L'Hôpital: $\\frac{e^x - 1}{2x}$, fortsatt $\\frac{0}{0}$. Igjen: $\\frac{e^x}{2} = \\frac{1}{2}$" },
          { label: 'c', task: '$\\lim_{x \\to 0} \\frac{\\tan x - x}{x^3}$', solution: "Bruk L'Hôpital tre ganger: $\\frac{\\sec^2 x - 1}{3x^2} = \\frac{\\tan^2 x}{3x^2}$, deretter $\\frac{2\\tan x \\sec^2 x}{6x}$, osv. Svar: $\\frac{1}{3}$" },
        ],
        hints: ["Sjekk alltid at du har ubestemt form før du bruker L'Hôpitals regel"],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r1-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beregn grenseverdiene.',
        subTasks: [
          { label: 'a', task: '$\\lim_{x \\to \\infty} \\frac{x^3}{e^x}$', solution: "Bruk L'Hôpital tre ganger: $\\frac{3x^2}{e^x} \\to \\frac{6x}{e^x} \\to \\frac{6}{e^x} = 0$" },
          { label: 'b', task: '$\\lim_{x \\to 0^+} x \\ln x$', solution: "Skriv som $\\frac{\\ln x}{1/x}$, form $\\frac{-\\infty}{\\infty}$. L'Hôpital: $\\frac{1/x}{-1/x^2} = -x \\to 0$" },
          { label: 'c', task: '$\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}}$', solution: "Form $\\frac{\\infty}{\\infty}$. L'Hôpital: $\\frac{1/x}{1/(2\\sqrt{x})} = \\frac{2\\sqrt{x}}{x} = \\frac{2}{\\sqrt{x}} \\to 0$" },
        ],
        hints: ['For b), omform produktet til en brøk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**L'Hôpitals regel:**
Hvis $\\lim \\frac{f(x)}{g(x)}$ gir $\\frac{0}{0}$ eller $\\frac{\\infty}{\\infty}$:
$$\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}$$

**Fremgangsmåte:**
1. Sjekk at du har ubestemt form
2. Deriver teller og nevner hver for seg
3. Beregn den nye grenseverdien
4. Gjenta om nødvendig

**Veksthastighet:**
$$\\ln x \\ll x^a \\ll e^x \\quad \\text{for alle } a > 0$$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: Newtons metode
// ============================================================================

export const CHAPTER_R1_3_5: TextbookChapter = {
  id: 'r1-3-5',
  courseId: 'r1',
  chapterNumber: '3.5',
  title: 'Newtons metode',
  description: 'Lær å finne tilnærmede løsninger av ligninger ved hjelp av Newtons iterasjonsmetode.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bestemme den deriverte i et punkt geometrisk, algebraisk og ved numeriske metoder',
  ],
  content: [
    {
      id: 'r1-3-5-intro',
      type: 'text',
      content: `## Numerisk løsning av ligninger

Mange ligninger kan ikke løses eksakt med algebraiske metoder. For eksempel:
- $x^5 - 3x + 1 = 0$
- $e^x = 3x$
- $\\cos x = x$

**Newtons metode** gir oss en måte å finne tilnærmede løsninger med høy presisjon.

**Ideen:** Start med en gjetning, og forbedre den iterativt ved å følge tangentlinjen.`,
    },
    {
      id: 'r1-3-5-def-1',
      type: 'definition',
      title: 'Newtons metode',
      content: `For å finne nullpunkter til $f(x) = 0$:

1. **Velg en startverdi** $x_0$ nær løsningen
2. **Iterer** med formelen:
$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

**Geometrisk tolkning:**
- Tegn tangenten til $f$ i punktet $(x_n, f(x_n))$
- Finn hvor tangenten krysser $x$-aksen
- Dette gir $x_{n+1}$

Prosessen gjentas til ønsket nøyaktighet er oppnådd.`,
    },
    {
      id: 'r1-3-5-utledning',
      type: 'text',
      content: `## Utledning av formelen

Tangentlinjen til $f$ i $(x_n, f(x_n))$ har likning:
$$y - f(x_n) = f'(x_n)(x - x_n)$$

Vi finner hvor tangenten krysser $x$-aksen ($y = 0$):
$$0 - f(x_n) = f'(x_n)(x - x_n)$$
$$x = x_n - \\frac{f(x_n)}{f'(x_n)}$$

Dette gir oss $x_{n+1}$.`,
    },
    {
      id: 'r1-3-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Finne kvadratroten av 2',
      problem: `Bruk Newtons metode til å finne $\\sqrt{2}$ ved å løse $x^2 - 2 = 0$.`,
      solution: `**Sett opp:**
- $f(x) = x^2 - 2$
- $f'(x) = 2x$
- Iterasjonsformel: $x_{n+1} = x_n - \\frac{x_n^2 - 2}{2x_n} = \\frac{x_n^2 + 2}{2x_n} = \\frac{x_n}{2} + \\frac{1}{x_n}$

**Startverdi:** $x_0 = 1$

**Iterasjoner:**
| $n$ | $x_n$ |
|-----|-------|
| 0 | 1 |
| 1 | $\\frac{1}{2} + \\frac{1}{1} = 1{,}5$ |
| 2 | $\\frac{1{,}5}{2} + \\frac{1}{1{,}5} = 1{,}4167$ |
| 3 | $1{,}4142$ |

**Svar:** $\\sqrt{2} \\approx 1{,}4142$ (etter bare 3 iterasjoner!)`,
    },
    {
      id: 'r1-3-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Løse en transcendent ligning',
      problem: `Finn en løsning av $\\cos x = x$ med Newtons metode.`,
      solution: `**Omform til nullpunktsproblem:**
$f(x) = \\cos x - x = 0$

**Derivert:**
$f'(x) = -\\sin x - 1$

**Iterasjonsformel:**
$$x_{n+1} = x_n - \\frac{\\cos x_n - x_n}{-\\sin x_n - 1}$$

**Startverdi:** $x_0 = 0{,}5$ (fra grafisk inspeksjon)

**Iterasjoner:**
| $n$ | $x_n$ | $f(x_n)$ |
|-----|-------|----------|
| 0 | 0,5 | 0,378 |
| 1 | 0,7552 | 0,0235 |
| 2 | 0,7391 | 0,00005 |

**Svar:** $x \\approx 0{,}7391$ er løsningen av $\\cos x = x$.`,
    },
    {
      id: 'r1-3-5-konvergens',
      type: 'definition',
      title: 'Konvergens og problemer',
      content: `**Når fungerer Newtons metode godt?**
- Startverdien er nær løsningen
- $f'(x) \\neq 0$ nær løsningen
- $f$ er "pent" oppførende (kontinuerlig, deriverbar)

**Når kan det gå galt?**
- $f'(x_n) = 0$ (divisjon med null)
- Dårlig startverdi (kan gi divergens eller feil løsning)
- Flere løsninger (kan lande på "feil" løsning)

**Konvergenshastighet:**
Når metoden fungerer, dobles vanligvis antall korrekte siffer for hver iterasjon (kvadratisk konvergens).`,
    },
    {
      id: 'r1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r1-3-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Bruk Newtons metode med 3 iterasjoner.',
        subTasks: [
          { label: 'a', task: 'Finn $\\sqrt{5}$ ved å løse $x^2 - 5 = 0$ med $x_0 = 2$.', solution: '$x_1 = 2{,}25$, $x_2 = 2{,}2361$, $x_3 = 2{,}2361$. Svar: $\\sqrt{5} \\approx 2{,}2361$' },
          { label: 'b', task: 'Finn $\\sqrt[3]{10}$ ved å løse $x^3 - 10 = 0$ med $x_0 = 2$.', solution: 'Formel: $x_{n+1} = x_n - \\frac{x_n^3-10}{3x_n^2}$. $x_1 = 2{,}167$, $x_2 = 2{,}1545$, $x_3 = 2{,}1544$' },
          { label: 'c', task: 'Løs $e^x = 3x$ med $x_0 = 2$.', solution: '$f(x) = e^x - 3x$, $f\'(x) = e^x - 3$. $x_1 = 1{,}857$, $x_2 = 1{,}8571$. Svar: $x \\approx 1{,}857$' },
        ],
        hints: ['Husk å sette opp $f(x)$ og $f\'(x)$ først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r1-3-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Ligningen $x^3 - 2x - 5 = 0$ har én reell løsning.',
        subTasks: [
          { label: 'a', task: 'Vis at løsningen ligger mellom 2 og 3.', solution: '$f(2) = 8 - 4 - 5 = -1 < 0$ og $f(3) = 27 - 6 - 5 = 16 > 0$. Fortegnskifte betyr nullpunkt.' },
          { label: 'b', task: 'Bruk Newtons metode med $x_0 = 2$ til å finne løsningen med 4 desimalers nøyaktighet.', solution: '$f\'(x) = 3x^2 - 2$. $x_1 = 2{,}1$, $x_2 = 2{,}0946$, $x_3 = 2{,}0946$. Svar: $x \\approx 2{,}0946$' },
        ],
        hints: ['Bruk skjæringssetningen for å vise at det finnes en løsning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Newtons metode:**
$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

**Fremgangsmåte:**
1. Omform ligningen til $f(x) = 0$
2. Finn $f'(x)$
3. Velg en god startverdi $x_0$
4. Iterer til ønsket nøyaktighet

**Fordeler:**
- Rask konvergens (dobler presisjon per steg)
- Fungerer for de fleste funksjoner

**Ulemper:**
- Krever god startverdi
- Krever at $f'(x) \\neq 0$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_4_1: TextbookChapter = {
  id: 'r1-4-1',
  courseId: 'r1',
  chapterNumber: '4.1',
  title: 'Derivasjonsregler',
  description: 'Lær de grunnleggende derivasjonsreglene: potensregelen, sumregelen, konstantregelen og konstant faktor.',
  estimatedMinutes: 55,
  competenceGoals: [
    'derivere konstanter',
    'bruke potensregelen til å derivere potenser av x',
    'bruke konstantfaktoren til å derivere funksjoner multiplisert med en konstant',
    'bruke sumregelen og differanseregelen til å derivere summer og differanser',
    'derivere polynomer',
    'derivere funksjoner med negative og rasjonale eksponenter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-4-1-intro',
      type: 'text',
      content: `## Innledning

I dette kapitlet skal vi lære de grunnleggende reglene for derivasjon. Disse reglene gjør det mulig å derivere funksjoner uten å måtte gå via definisjonen med grenseverdier hver gang.

Derivasjon er et sentralt verktøy i matematikk og naturvitenskap. Det brukes til å finne:
- Vekstfart og endringsrate
- Stigningstall til tangenter
- Maksimums- og minimumsverdier
- Optimalisering i økonomi og fysikk

Vi starter med de enkleste reglene og bygger opp til mer komplekse derivasjoner.`,
    },
    {
      id: 'r1-4-1-derivasjonsregler-bilde',
      type: 'image',
      src: '/images/r1/derivasjonsregler.svg',
      alt: 'Oversikt over de viktigste derivasjonsreglene',
      caption: 'De grunnleggende derivasjonsreglene',
    },

    // ========== DERIVASJON AV KONSTANTER ==========
    {
      id: 'r1-4-1-konstant-intro',
      type: 'text',
      content: `## Derivasjon av konstanter

En konstant funksjon har samme verdi for alle verdier av $x$. Grafen til en konstant funksjon er en horisontal linje, som har stigningstall 0 overalt.`,
    },

    // Teorem: Konstantregelen
    {
      id: 'r1-4-1-theorem-konstant',
      type: 'theorem',
      title: 'Konstantregelen',
      content: `Hvis $f(x) = c$ der $c$ er en konstant, så er:

$$f'(x) = 0$$

Med Lagranges notasjon: $(c)' = 0$`,
    },

    // Bevis for konstantregelen
    {
      id: 'r1-4-1-bevis-konstant',
      type: 'collapsible',
      title: 'Bevis for konstantregelen',
      buttonText: 'Vis bevis',
      content: [
        {
          id: 'r1-4-1-bevis-konstant-tekst',
          type: 'text',
          content: `**Bevis:**

Vi bruker definisjonen av den deriverte:

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

Siden $f(x) = c$ for alle $x$, har vi $f(x+h) = c$ og $f(x) = c$:

$$f'(x) = \\lim_{h \\to 0} \\frac{c - c}{h} = \\lim_{h \\to 0} \\frac{0}{h} = \\lim_{h \\to 0} 0 = 0$$

$\\square$`,
        },
      ],
    },

    // Note om intuisjon
    {
      id: 'r1-4-1-note-konstant',
      type: 'note',
      content: `**Intuisjon:** En konstant funksjon endrer seg ikke. Siden den deriverte måler endringsraten, må den deriverte av en konstant være 0.`,
    },

    // Eksempel: Derivasjon av konstanter
    {
      id: 'r1-4-1-example-konstant',
      type: 'example',
      title: 'Eksempel 1: Derivasjon av konstanter',
      problem: `Deriver funksjonene:

a) $f(x) = 5$
b) $g(x) = -3$
c) $h(x) = \\pi$
d) $k(x) = \\sqrt{2}$`,
      solution: `**Løsning:**

Alle disse funksjonene er konstanter, så den deriverte er 0 for alle:

a) $f'(x) = 0$

b) $g'(x) = 0$

c) $h'(x) = 0$

d) $k'(x) = 0$

Merk at $\\pi$ og $\\sqrt{2}$ er konstanter selv om de ikke er heltall.`,
    },

    // ========== POTENSREGELEN ==========
    {
      id: 'r1-4-1-potens-intro',
      type: 'text',
      content: `## Potensregelen

Potensregelen er den viktigste regelen for derivasjon av polynomer og mange andre funksjoner. Den forteller oss hvordan vi deriverer $x$ opphøyd i en potens.`,
    },

    // Teorem: Potensregelen
    {
      id: 'r1-4-1-theorem-potens',
      type: 'theorem',
      title: 'Potensregelen',
      content: `For $f(x) = x^n$ der $n$ er et reelt tall, er:

$$f'(x) = n \\cdot x^{n-1}$$

Med Lagranges notasjon: $(x^n)' = n \\cdot x^{n-1}$

**Eksponenten flyttes ned foran og reduseres med 1.**`,
    },

    // Bevis for potensregelen (heltall)
    {
      id: 'r1-4-1-bevis-potens',
      type: 'collapsible',
      title: 'Bevis for potensregelen (for positive heltall)',
      buttonText: 'Vis bevis',
      content: [
        {
          id: 'r1-4-1-bevis-potens-tekst',
          type: 'text',
          content: `**Bevis for $n \\in \\mathbb{N}$:**

Vi bruker definisjonen av den deriverte:

$$f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^n - x^n}{h}$$

Vi bruker binomialteoremet til å utvide $(x+h)^n$:

$$(x+h)^n = x^n + nx^{n-1}h + \\binom{n}{2}x^{n-2}h^2 + \\ldots + h^n$$

Da blir:

$$f'(x) = \\lim_{h \\to 0} \\frac{x^n + nx^{n-1}h + \\binom{n}{2}x^{n-2}h^2 + \\ldots + h^n - x^n}{h}$$

$$= \\lim_{h \\to 0} \\frac{nx^{n-1}h + \\binom{n}{2}x^{n-2}h^2 + \\ldots + h^n}{h}$$

$$= \\lim_{h \\to 0} \\left(nx^{n-1} + \\binom{n}{2}x^{n-2}h + \\ldots + h^{n-1}\\right)$$

$$= nx^{n-1}$$

$\\square$`,
        },
      ],
    },

    // Eksempel: Potensregelen grunnleggende
    {
      id: 'r1-4-1-example-potens-1',
      type: 'example',
      title: 'Eksempel 2: Potensregelen med positive eksponenter',
      problem: `Deriver funksjonene:

a) $f(x) = x^5$
b) $g(x) = x^3$
c) $h(x) = x^{10}$
d) $k(x) = x$`,
      solution: `**Løsning:**

a) $f(x) = x^5$
   $f'(x) = 5x^{5-1} = 5x^4$

b) $g(x) = x^3$
   $g'(x) = 3x^{3-1} = 3x^2$

c) $h(x) = x^{10}$
   $h'(x) = 10x^{10-1} = 10x^9$

d) $k(x) = x = x^1$
   $k'(x) = 1 \\cdot x^{1-1} = 1 \\cdot x^0 = 1$

Merk at $(x)' = 1$, noe som gir mening siden grafen til $y = x$ har stigningstall 1.`,
    },

    // Tip om x
    {
      id: 'r1-4-1-tip-x',
      type: 'tip',
      content: `**Nyttig å huske:**
- $(x)' = 1$
- $(x^2)' = 2x$
- $(x^3)' = 3x^2$

Disse dukker opp svært ofte!`,
    },

    // Oppgave 1: Grunnleggende potensregelen
    {
      id: 'r1-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene ved å bruke potensregelen.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^4$', solution: '$f\'(x) = 4x^3$' },
          { label: 'b', task: '$f(x) = x^6$', solution: '$f\'(x) = 6x^5$' },
          { label: 'c', task: '$f(x) = x^7$', solution: '$f\'(x) = 7x^6$' },
          { label: 'd', task: '$f(x) = x^{12}$', solution: '$f\'(x) = 12x^{11}$' },
          { label: 'e', task: '$f(x) = x^{100}$', solution: '$f\'(x) = 100x^{99}$' },
          { label: 'f', task: '$f(x) = x^2$', solution: '$f\'(x) = 2x$' },
        ],
        hints: ['Bruk potensregelen: $(x^n)\' = nx^{n-1}$', 'Eksponenten flyttes ned foran og reduseres med 1'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KONSTANT FAKTOR ==========
    {
      id: 'r1-4-1-konstfaktor-intro',
      type: 'text',
      content: `## Konstant faktor

Hva skjer når vi ganger en funksjon med en konstant? Regelen er enkel: konstanten "følger med" gjennom derivasjonen.`,
    },

    // Teorem: Konstant faktor
    {
      id: 'r1-4-1-theorem-konstfaktor',
      type: 'theorem',
      title: 'Regelen for konstant faktor',
      content: `Hvis $c$ er en konstant og $f$ er en deriverbar funksjon, så er:

$$(c \\cdot f(x))' = c \\cdot f'(x)$$

**Konstanten kan "flyttes ut" av derivasjonen.**`,
    },

    // Bevis for konstant faktor
    {
      id: 'r1-4-1-bevis-konstfaktor',
      type: 'collapsible',
      title: 'Bevis for konstant faktor',
      buttonText: 'Vis bevis',
      content: [
        {
          id: 'r1-4-1-bevis-konstfaktor-tekst',
          type: 'text',
          content: `**Bevis:**

La $g(x) = c \\cdot f(x)$. Da:

$$g'(x) = \\lim_{h \\to 0} \\frac{g(x+h) - g(x)}{h}$$

$$= \\lim_{h \\to 0} \\frac{c \\cdot f(x+h) - c \\cdot f(x)}{h}$$

$$= \\lim_{h \\to 0} \\frac{c \\cdot (f(x+h) - f(x))}{h}$$

$$= c \\cdot \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$= c \\cdot f'(x)$$

$\\square$`,
        },
      ],
    },

    // Eksempel: Konstant faktor
    {
      id: 'r1-4-1-example-konstfaktor',
      type: 'example',
      title: 'Eksempel 3: Derivasjon med konstant faktor',
      problem: `Deriver funksjonene:

a) $f(x) = 3x^4$
b) $g(x) = -2x^5$
c) $h(x) = \\frac{1}{2}x^6$
d) $k(x) = 5x$`,
      solution: `**Løsning:**

a) $f(x) = 3x^4$
   $f'(x) = 3 \\cdot 4x^3 = 12x^3$

b) $g(x) = -2x^5$
   $g'(x) = -2 \\cdot 5x^4 = -10x^4$

c) $h(x) = \\frac{1}{2}x^6$
   $h'(x) = \\frac{1}{2} \\cdot 6x^5 = 3x^5$

d) $k(x) = 5x = 5x^1$
   $k'(x) = 5 \\cdot 1 \\cdot x^0 = 5$`,
    },

    // Oppgave 2: Konstant faktor
    {
      id: 'r1-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = 4x^3$', solution: '$f\'(x) = 4 \\cdot 3x^2 = 12x^2$' },
          { label: 'b', task: '$f(x) = -3x^5$', solution: '$f\'(x) = -3 \\cdot 5x^4 = -15x^4$' },
          { label: 'c', task: '$f(x) = 7x^2$', solution: '$f\'(x) = 7 \\cdot 2x = 14x$' },
          { label: 'd', task: '$f(x) = \\frac{1}{3}x^9$', solution: '$f\'(x) = \\frac{1}{3} \\cdot 9x^8 = 3x^8$' },
          { label: 'e', task: '$f(x) = -x^4$', solution: '$f\'(x) = -1 \\cdot 4x^3 = -4x^3$' },
          { label: 'f', task: '$f(x) = 10x$', solution: '$f\'(x) = 10$' },
        ],
        hints: ['Konstanten "følger med" gjennom derivasjonen', 'Husk at $-x^4 = -1 \\cdot x^4$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SUMREGELEN OG DIFFERANSEREGELEN ==========
    {
      id: 'r1-4-1-sum-intro',
      type: 'text',
      content: `## Sumregelen og differanseregelen

Når vi har en sum eller differanse av funksjoner, kan vi derivere hvert ledd for seg.`,
    },

    // Teorem: Sumregelen
    {
      id: 'r1-4-1-theorem-sum',
      type: 'theorem',
      title: 'Sumregelen og differanseregelen',
      content: `Hvis $f$ og $g$ er deriverbare funksjoner, så er:

**Sumregelen:**
$$(f(x) + g(x))' = f'(x) + g'(x)$$

**Differanseregelen:**
$$(f(x) - g(x))' = f'(x) - g'(x)$$

**Den deriverte av en sum er summen av de deriverte.**`,
    },

    // Bevis for sumregelen
    {
      id: 'r1-4-1-bevis-sum',
      type: 'collapsible',
      title: 'Bevis for sumregelen',
      buttonText: 'Vis bevis',
      content: [
        {
          id: 'r1-4-1-bevis-sum-tekst',
          type: 'text',
          content: `**Bevis:**

La $s(x) = f(x) + g(x)$. Da:

$$s'(x) = \\lim_{h \\to 0} \\frac{s(x+h) - s(x)}{h}$$

$$= \\lim_{h \\to 0} \\frac{[f(x+h) + g(x+h)] - [f(x) + g(x)]}{h}$$

$$= \\lim_{h \\to 0} \\frac{[f(x+h) - f(x)] + [g(x+h) - g(x)]}{h}$$

$$= \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} + \\lim_{h \\to 0} \\frac{g(x+h) - g(x)}{h}$$

$$= f'(x) + g'(x)$$

$\\square$

Beviset for differanseregelen er helt analogt.`,
        },
      ],
    },

    // Eksempel: Sumregel
    {
      id: 'r1-4-1-example-sum',
      type: 'example',
      title: 'Eksempel 4: Derivasjon av summer og differanser',
      problem: `Deriver funksjonene:

a) $f(x) = x^3 + x^2$
b) $g(x) = 4x^5 - 3x^2$
c) $h(x) = x^4 + 2x^3 - 5x + 7$`,
      solution: `**Løsning:**

a) $f(x) = x^3 + x^2$
   $f'(x) = 3x^2 + 2x$

b) $g(x) = 4x^5 - 3x^2$
   $g'(x) = 4 \\cdot 5x^4 - 3 \\cdot 2x = 20x^4 - 6x$

c) $h(x) = x^4 + 2x^3 - 5x + 7$
   $h'(x) = 4x^3 + 2 \\cdot 3x^2 - 5 \\cdot 1 + 0$
   $h'(x) = 4x^3 + 6x^2 - 5$`,
    },

    // Oppgave 3: Polynomer
    {
      id: 'r1-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^4 + 3x^2$', solution: '$f\'(x) = 4x^3 + 6x$' },
          { label: 'b', task: '$f(x) = 2x^5 - x^3 + 4$', solution: '$f\'(x) = 10x^4 - 3x^2$' },
          { label: 'c', task: '$f(x) = -x^3 + 5x^2 - 2x + 1$', solution: '$f\'(x) = -3x^2 + 10x - 2$' },
          { label: 'd', task: '$f(x) = \\frac{1}{2}x^4 - \\frac{1}{3}x^3 + x$', solution: '$f\'(x) = 2x^3 - x^2 + 1$' },
        ],
        hints: ['Deriver hvert ledd for seg', 'Husk at den deriverte av en konstant er 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DERIVASJON AV POLYNOMER ==========
    {
      id: 'r1-4-1-polynom-intro',
      type: 'text',
      content: `## Derivasjon av polynomer

Ved å kombinere potensregelen, konstantfaktoren og sumregelen kan vi derivere ethvert polynom. Vi deriverer rett og slett hvert ledd for seg.`,
    },

    // Definisjon: Polynom
    {
      id: 'r1-4-1-def-polynom',
      type: 'definition',
      title: 'Derivasjon av et generelt polynom',
      content: `Et polynom på formen:

$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0$$

har den deriverte:

$$P'(x) = n \\cdot a_n x^{n-1} + (n-1) \\cdot a_{n-1} x^{n-2} + \\ldots + a_1$$

Merk at konstantleddet $a_0$ forsvinner (gir 0).`,
    },

    // Eksempel: Polynom
    {
      id: 'r1-4-1-example-polynom',
      type: 'example',
      title: 'Eksempel 5: Derivasjon av polynomer',
      problem: `Deriver polynomene:

a) $P(x) = 3x^4 - 2x^3 + 5x^2 - x + 4$
b) $Q(x) = x^5 + \\frac{1}{2}x^2 - 3$`,
      solution: `**Løsning:**

a) $P(x) = 3x^4 - 2x^3 + 5x^2 - x + 4$

   Vi deriverer hvert ledd:
   - $(3x^4)' = 12x^3$
   - $(-2x^3)' = -6x^2$
   - $(5x^2)' = 10x$
   - $(-x)' = -1$
   - $(4)' = 0$

   $P'(x) = 12x^3 - 6x^2 + 10x - 1$

b) $Q(x) = x^5 + \\frac{1}{2}x^2 - 3$

   $Q'(x) = 5x^4 + \\frac{1}{2} \\cdot 2x - 0 = 5x^4 + x$`,
    },

    // GeoGebra: Polynom og derivert
    {
      id: 'r1-4-1-geogebra-polynom',
      type: 'geogebra',
      title: 'Polynom og den deriverte',
      description: 'Grafen til $f(x) = x^3 - 3x$ (blå) og den deriverte $f\'(x) = 3x^2 - 3$ (rød). Legg merke til at $f\'(x) = 0$ der $f(x)$ har topp- og bunnpunkt.',
      appType: 'graphing',
      commands: [
        'f(x) = x^3 - 3x',
        'g(x) = 3x^2 - 3',
        'SetColor(f, "Blue")',
        'SetColor(g, "Red")',
        'A = (-1, f(-1))',
        'B = (1, f(1))',
        'SetCaption(A, "Toppunkt")',
        'SetCaption(B, "Bunnpunkt")',
        'SetPointSize(A, 5)',
        'SetPointSize(B, 5)',
      ],
    },

    // Oppgave 4: Mer polynom
    {
      id: 'r1-4-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver polynomene.',
        subTasks: [
          { label: 'a', task: '$P(x) = x^6 - 4x^4 + 2x^2 - 1$', solution: '$P\'(x) = 6x^5 - 16x^3 + 4x$' },
          { label: 'b', task: '$P(x) = 5x^3 - \\frac{3}{2}x^2 + 4x - 7$', solution: '$P\'(x) = 15x^2 - 3x + 4$' },
          { label: 'c', task: '$P(x) = -2x^5 + x^4 - 3x^3 + x - 8$', solution: '$P\'(x) = -10x^4 + 4x^3 - 9x^2 + 1$' },
          { label: 'd', task: '$P(x) = \\frac{1}{4}x^4 + \\frac{1}{3}x^3 - \\frac{1}{2}x^2$', solution: '$P\'(x) = x^3 + x^2 - x$' },
        ],
        hints: ['Deriver hvert ledd systematisk', 'Konstantleddet forsvinner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NEGATIVE EKSPONENTER ==========
    {
      id: 'r1-4-1-negativ-intro',
      type: 'text',
      content: `## Negative eksponenter

Potensregelen gjelder også for negative eksponenter. Husk at $x^{-n} = \\frac{1}{x^n}$.`,
    },

    // Note om negative eksponenter
    {
      id: 'r1-4-1-note-negativ',
      type: 'note',
      content: `**Viktig sammenheng:**

$$\\frac{1}{x^n} = x^{-n}$$

For eksempel:
- $\\frac{1}{x} = x^{-1}$
- $\\frac{1}{x^2} = x^{-2}$
- $\\frac{1}{x^3} = x^{-3}$`,
    },

    // Eksempel: Negative eksponenter
    {
      id: 'r1-4-1-example-negativ',
      type: 'example',
      title: 'Eksempel 6: Derivasjon med negative eksponenter',
      problem: `Deriver funksjonene:

a) $f(x) = x^{-2}$
b) $g(x) = \\frac{1}{x}$
c) $h(x) = \\frac{3}{x^4}$
d) $k(x) = x^2 - \\frac{2}{x^3}$`,
      solution: `**Løsning:**

a) $f(x) = x^{-2}$
   $f'(x) = -2x^{-2-1} = -2x^{-3} = -\\frac{2}{x^3}$

b) $g(x) = \\frac{1}{x} = x^{-1}$
   $g'(x) = -1 \\cdot x^{-1-1} = -x^{-2} = -\\frac{1}{x^2}$

c) $h(x) = \\frac{3}{x^4} = 3x^{-4}$
   $h'(x) = 3 \\cdot (-4)x^{-5} = -12x^{-5} = -\\frac{12}{x^5}$

d) $k(x) = x^2 - \\frac{2}{x^3} = x^2 - 2x^{-3}$
   $k'(x) = 2x - 2 \\cdot (-3)x^{-4} = 2x + 6x^{-4} = 2x + \\frac{6}{x^4}$`,
    },

    // Tip om å skrive om
    {
      id: 'r1-4-1-tip-omskriving',
      type: 'tip',
      content: `**Strategi:** Skriv om brøker med $x$ i nevneren til negative eksponenter før du deriverer. Dette gjør det enklere å bruke potensregelen.

$$\\frac{1}{x^n} \\rightarrow x^{-n} \\rightarrow \\text{deriver} \\rightarrow -n \\cdot x^{-n-1}$$`,
    },

    // Oppgave 5: Negative eksponenter
    {
      id: 'r1-4-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-4-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene. Skriv svaret både med negative eksponenter og som brøk.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^{-3}$', solution: '$f\'(x) = -3x^{-4} = -\\frac{3}{x^4}$' },
          { label: 'b', task: '$f(x) = \\frac{1}{x^2}$', solution: '$f(x) = x^{-2}$, så $f\'(x) = -2x^{-3} = -\\frac{2}{x^3}$' },
          { label: 'c', task: '$f(x) = \\frac{5}{x}$', solution: '$f(x) = 5x^{-1}$, så $f\'(x) = -5x^{-2} = -\\frac{5}{x^2}$' },
          { label: 'd', task: '$f(x) = \\frac{4}{x^3}$', solution: '$f(x) = 4x^{-3}$, så $f\'(x) = -12x^{-4} = -\\frac{12}{x^4}$' },
          { label: 'e', task: '$f(x) = x^3 + \\frac{1}{x}$', solution: '$f(x) = x^3 + x^{-1}$, så $f\'(x) = 3x^2 - x^{-2} = 3x^2 - \\frac{1}{x^2}$' },
          { label: 'f', task: '$f(x) = 2x^2 - \\frac{3}{x^2} + 1$', solution: '$f(x) = 2x^2 - 3x^{-2} + 1$, så $f\'(x) = 4x + 6x^{-3} = 4x + \\frac{6}{x^3}$' },
        ],
        hints: ['Skriv først om til eksponentform: $\\frac{1}{x^n} = x^{-n}$', 'Bruk potensregelen som vanlig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== RASJONALE EKSPONENTER ==========
    {
      id: 'r1-4-1-rasjonal-intro',
      type: 'text',
      content: `## Rasjonale eksponenter

Potensregelen gjelder også for brøkeksponenter (rasjonale eksponenter). Husk sammenhengen mellom røtter og brøkeksponenter.`,
    },

    // Note om røtter
    {
      id: 'r1-4-1-note-rot',
      type: 'note',
      content: `**Viktig sammenheng:**

$$\\sqrt{x} = x^{1/2}$$

$$\\sqrt[n]{x} = x^{1/n}$$

$$\\sqrt[n]{x^m} = x^{m/n}$$

For eksempel:
- $\\sqrt{x} = x^{1/2}$
- $\\sqrt[3]{x} = x^{1/3}$
- $\\sqrt{x^3} = x^{3/2}$`,
    },

    // Eksempel: Rasjonale eksponenter
    {
      id: 'r1-4-1-example-rasjonal',
      type: 'example',
      title: 'Eksempel 7: Derivasjon med rasjonale eksponenter',
      problem: `Deriver funksjonene:

a) $f(x) = \\sqrt{x}$
b) $g(x) = \\sqrt[3]{x}$
c) $h(x) = x^{3/2}$
d) $k(x) = \\frac{1}{\\sqrt{x}}$`,
      solution: `**Løsning:**

a) $f(x) = \\sqrt{x} = x^{1/2}$
   $f'(x) = \\frac{1}{2}x^{1/2-1} = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$

b) $g(x) = \\sqrt[3]{x} = x^{1/3}$
   $g'(x) = \\frac{1}{3}x^{1/3-1} = \\frac{1}{3}x^{-2/3} = \\frac{1}{3\\sqrt[3]{x^2}}$

c) $h(x) = x^{3/2}$
   $h'(x) = \\frac{3}{2}x^{3/2-1} = \\frac{3}{2}x^{1/2} = \\frac{3\\sqrt{x}}{2}$

d) $k(x) = \\frac{1}{\\sqrt{x}} = x^{-1/2}$
   $k'(x) = -\\frac{1}{2}x^{-1/2-1} = -\\frac{1}{2}x^{-3/2} = -\\frac{1}{2\\sqrt{x^3}}$`,
    },

    // Viktig resultat
    {
      id: 'r1-4-1-viktig-rot',
      type: 'tip',
      content: `**Nyttig å huske:**

$$(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$$

Dette resultatet brukes ofte!`,
    },

    // GeoGebra: Rotfunksjon
    {
      id: 'r1-4-1-geogebra-rot',
      type: 'geogebra',
      title: 'Rotfunksjonen og den deriverte',
      description: 'Grafen til $f(x) = \\sqrt{x}$ (blå) og den deriverte $f\'(x) = \\frac{1}{2\\sqrt{x}}$ (rød).',
      appType: 'graphing',
      commands: [
        'f(x) = sqrt(x)',
        'g(x) = 1/(2*sqrt(x))',
        'SetColor(f, "Blue")',
        'SetColor(g, "Red")',
        'SetCaption(f, "f(x) = sqrt(x)")',
        'SetCaption(g, "f\'(x) = 1/(2sqrt(x))")',
      ],
    },

    // Oppgave 6: Rasjonale eksponenter
    {
      id: 'r1-4-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-4-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Deriver funksjonene. Skriv om til eksponentform først.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sqrt{x}$', solution: '$f(x) = x^{1/2}$, så $f\'(x) = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$' },
          { label: 'b', task: '$f(x) = \\sqrt[4]{x}$', solution: '$f(x) = x^{1/4}$, så $f\'(x) = \\frac{1}{4}x^{-3/4} = \\frac{1}{4\\sqrt[4]{x^3}}$' },
          { label: 'c', task: '$f(x) = x^{2/3}$', solution: '$f\'(x) = \\frac{2}{3}x^{-1/3} = \\frac{2}{3\\sqrt[3]{x}}$' },
          { label: 'd', task: '$f(x) = 3\\sqrt{x}$', solution: '$f(x) = 3x^{1/2}$, så $f\'(x) = \\frac{3}{2}x^{-1/2} = \\frac{3}{2\\sqrt{x}}$' },
          { label: 'e', task: '$f(x) = x^2 + 2\\sqrt{x}$', solution: '$f(x) = x^2 + 2x^{1/2}$, så $f\'(x) = 2x + x^{-1/2} = 2x + \\frac{1}{\\sqrt{x}}$' },
          { label: 'f', task: '$f(x) = \\frac{6}{\\sqrt{x}}$', solution: '$f(x) = 6x^{-1/2}$, så $f\'(x) = -3x^{-3/2} = -\\frac{3}{\\sqrt{x^3}}$' },
        ],
        hints: ['Skriv om røtter til eksponentform', 'Husk: $\\sqrt[n]{x} = x^{1/n}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING AV REGLER ==========
    {
      id: 'r1-4-1-oppsummering-regler',
      type: 'text',
      content: `## Oppsummering av derivasjonsregler

La oss oppsummere alle reglene vi har lært i dette kapitlet:`,
    },

    // Oppsummering i tabell-form
    {
      id: 'r1-4-1-tabell',
      type: 'definition',
      title: 'Derivasjonsregler',
      content: `| Regel | Formel |
|-------|--------|
| **Konstantregelen** | $(c)' = 0$ |
| **Potensregelen** | $(x^n)' = n \\cdot x^{n-1}$ |
| **Konstant faktor** | $(c \\cdot f)' = c \\cdot f'$ |
| **Sumregelen** | $(f + g)' = f' + g'$ |
| **Differanseregelen** | $(f - g)' = f' - g'$ |

**Spesialtilfeller:**
- $(x)' = 1$
- $(x^2)' = 2x$
- $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$`,
    },

    // Oppgave 7: Blandede oppgaver
    {
      id: 'r1-4-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-4-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Deriver funksjonene. Skriv om til standardform først hvis nødvendig.',
        subTasks: [
          { label: 'a', task: '$f(x) = 3x^4 - 2x^2 + \\frac{5}{x}$', solution: '$f(x) = 3x^4 - 2x^2 + 5x^{-1}$, så $f\'(x) = 12x^3 - 4x - 5x^{-2} = 12x^3 - 4x - \\frac{5}{x^2}$' },
          { label: 'b', task: '$f(x) = \\sqrt{x} + \\frac{1}{\\sqrt{x}}$', solution: '$f(x) = x^{1/2} + x^{-1/2}$, så $f\'(x) = \\frac{1}{2}x^{-1/2} - \\frac{1}{2}x^{-3/2} = \\frac{1}{2\\sqrt{x}} - \\frac{1}{2\\sqrt{x^3}}$' },
          { label: 'c', task: '$f(x) = \\frac{x^3 - 2x + 1}{x}$', solution: '$f(x) = x^2 - 2 + x^{-1}$, så $f\'(x) = 2x - x^{-2} = 2x - \\frac{1}{x^2}$' },
          { label: 'd', task: '$f(x) = (x + 1)(x - 2)$', solution: '$f(x) = x^2 - x - 2$, så $f\'(x) = 2x - 1$' },
        ],
        hints: ['Skriv om til standardform med eksponenter', 'Multipliser ut parenteser før derivasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ANVENDELSE: TANGENT ==========
    {
      id: 'r1-4-1-tangent-intro',
      type: 'text',
      content: `## Anvendelse: Tangenter til grafer

Den deriverte $f'(a)$ gir stigningstallet til tangenten til grafen av $f$ i punktet $(a, f(a))$.`,
    },

    // Eksempel: Tangent
    {
      id: 'r1-4-1-example-tangent',
      type: 'example',
      title: 'Eksempel 8: Finne tangent til en kurve',
      problem: `La $f(x) = x^3 - 2x + 1$. Finn likningen for tangenten til grafen i punktet der $x = 2$.`,
      solution: `**Løsning:**

**Steg 1:** Finn $y$-verdien når $x = 2$:
$$f(2) = 2^3 - 2 \\cdot 2 + 1 = 8 - 4 + 1 = 5$$
Berøringspunktet er $(2, 5)$.

**Steg 2:** Finn stigningstallet (den deriverte i $x = 2$):
$$f'(x) = 3x^2 - 2$$
$$f'(2) = 3 \\cdot 2^2 - 2 = 12 - 2 = 10$$

**Steg 3:** Bruk ettpunktsformelen for en rett linje:
$$y - y_1 = a(x - x_1)$$
$$y - 5 = 10(x - 2)$$
$$y = 10x - 20 + 5$$
$$y = 10x - 15$$

**Svar:** Tangentens likning er $y = 10x - 15$.`,
    },

    // Oppgave 8: Tangenter
    {
      id: 'r1-4-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-4-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn likningen for tangenten til grafen i det oppgitte punktet.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2$ i $x = 3$', solution: '$f(3) = 9$, $f\'(x) = 2x$, $f\'(3) = 6$. Tangent: $y - 9 = 6(x - 3)$, altså $y = 6x - 9$' },
          { label: 'b', task: '$f(x) = x^3 - x$ i $x = 1$', solution: '$f(1) = 0$, $f\'(x) = 3x^2 - 1$, $f\'(1) = 2$. Tangent: $y = 2(x - 1) = 2x - 2$' },
          { label: 'c', task: '$f(x) = \\sqrt{x}$ i $x = 4$', solution: '$f(4) = 2$, $f\'(x) = \\frac{1}{2\\sqrt{x}}$, $f\'(4) = \\frac{1}{4}$. Tangent: $y - 2 = \\frac{1}{4}(x - 4)$, altså $y = \\frac{1}{4}x + 1$' },
          { label: 'd', task: '$f(x) = x^2 - 4x + 5$ i $x = 2$', solution: '$f(2) = 1$, $f\'(x) = 2x - 4$, $f\'(2) = 0$. Tangent: $y = 1$ (horisontal tangent)' },
        ],
        hints: ['Finn først $y$-verdien: $f(a)$', 'Finn stigningstallet: $f\'(a)$', 'Bruk ettpunktsformelen: $y - y_1 = a(x - x_1)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-4-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapitlet har vi lært de grunnleggende derivasjonsreglene:

**Konstantregelen:** $(c)' = 0$
- Den deriverte av en konstant er alltid 0.

**Potensregelen:** $(x^n)' = n \\cdot x^{n-1}$
- Eksponenten flyttes ned foran og reduseres med 1.
- Gjelder for alle reelle eksponenter.

**Konstant faktor:** $(c \\cdot f)' = c \\cdot f'$
- Konstanten kan "flyttes ut" av derivasjonen.

**Sumregelen:** $(f + g)' = f' + g'$
- Den deriverte av en sum er summen av de deriverte.

**Differanseregelen:** $(f - g)' = f' - g'$
- Den deriverte av en differanse er differansen av de deriverte.

**Viktige spesialtilfeller:**
- $(x)' = 1$
- $(x^2)' = 2x$
- $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$
- $(\\frac{1}{x})' = -\\frac{1}{x^2}$`,
    },

    // Ekstraoppgaver
    {
      id: 'r1-4-1-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r1-4-1-ex-block-e1',
          type: 'exercise',
          exercise: {
            id: 'r1-4-1-ex-e1',
            number: 'E1',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver',
            subTasks: [
              { label: 'a', task: 'Finn $f\'\'(x)$ (den andrederiverte) når $f(x) = x^4 - 3x^2 + 2x$.', solution: '$f\'(x) = 4x^3 - 6x + 2$, $f\'\'(x) = 12x^2 - 6$' },
              { label: 'b', task: 'For hvilken verdi av $x$ er tangenten til $f(x) = x^2 - 4x$ horisontal?', solution: '$f\'(x) = 2x - 4 = 0$ gir $x = 2$. Tangenten er horisontal der $x = 2$.' },
              { label: 'c', task: 'Finn $a$ slik at $f(x) = x^3 + ax$ har tangent med stigningstall 10 i $x = 1$.', solution: '$f\'(x) = 3x^2 + a$. $f\'(1) = 3 + a = 10$ gir $a = 7$.' },
              { label: 'd', task: 'For hvilke verdier av $x$ er $f\'(x) > 0$ når $f(x) = x^3 - 3x$?', solution: '$f\'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$. $f\'(x) > 0$ når $x < -1$ eller $x > 1$.' },
            ],
            hints: ['Den andrederiverte er den deriverte av den deriverte', 'Horisontal tangent betyr $f\'(x) = 0$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_4_2: TextbookChapter = {
  id: 'r1-4-2',
  courseId: 'r1',
  chapterNumber: '4.2',
  title: 'Derivasjon av eksponential- og logaritmefunksjoner',
  description: 'Lær å derivere eksponentialfunksjoner (e^x, a^x) og logaritmefunksjoner (ln x, log_a x).',
  estimatedMinutes: 50,
  competenceGoals: [
    'kunne derivere $e^x$',
    'kunne derivere $a^x$ for vilkårlig grunntall $a > 0$',
    'kunne derivere $\\ln x$',
    'kunne derivere logaritmer med vilkårlig grunntall',
    'forstå sammenhengen mellom eksponential- og logaritmefunksjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-4-2-intro',
      type: 'text',
      content: `## Derivasjon av eksponential- og logaritmefunksjoner

Eksponentialfunksjoner og logaritmefunksjoner har spesielle derivasjonsregler. I dette kapittelet skal vi se hvorfor $e^x$ er så spesiell – den er sin egen deriverte!`,
    },
    {
      id: 'r1-4-2-logaritme-bilde',
      type: 'image',
      src: '/images/r1/logaritme-graf.svg',
      alt: 'Graf av logaritmefunksjoner med ulike grunntall',
      caption: 'Logaritmefunksjoner og deres egenskaper',
    },

    // ========== DERIVASJON AV e^x ==========
    {
      id: 'r1-4-2-ex-intro',
      type: 'text',
      content: `## Den naturlige eksponentialfunksjonen

Funksjonen $f(x) = e^x$ har en helt unik egenskap: den er lik sin egen deriverte. Tallet $e \\approx 2{,}718$ er definert nettopp slik at dette skal stemme.`,
    },

    {
      id: 'r1-4-2-theorem-ex',
      type: 'theorem',
      title: 'Derivasjon av $e^x$',
      content: `Hvis $f(x) = e^x$, så er

$$f'(x) = e^x$$

**Med ord:** $e^x$ er sin egen deriverte.`,
    },

    {
      id: 'r1-4-2-note-ex',
      type: 'note',
      content: `**Hvorfor er dette spesielt?**

$e^x$ er den *eneste* funksjonen (bortsett fra $f(x) = 0$) som er lik sin egen deriverte. Dette gjør eksponentialfunksjonen sentral i matematikk, fysikk og økonomi – spesielt i modeller for vekst og forfall.`,
    },

    {
      id: 'r1-4-2-example-ex',
      type: 'example',
      title: 'Eksempel 1: Derivasjon av $e^x$',
      problem: `Deriver følgende funksjoner:

a) $f(x) = e^x$
b) $g(x) = 3e^x$
c) $h(x) = e^x + x^2$`,
      solution: `**Løsning:**

a) $f(x) = e^x$
   $f'(x) = e^x$

b) $g(x) = 3e^x$
   $g'(x) = 3 \\cdot e^x = 3e^x$  (konstant faktor-regelen)

c) $h(x) = e^x + x^2$
   $h'(x) = e^x + 2x$  (sumregelen)`,
    },

    // ========== DERIVASJON AV a^x ==========
    {
      id: 'r1-4-2-ax-intro',
      type: 'text',
      content: `## Eksponentialfunksjoner med andre grunntall

Hva om grunntallet ikke er $e$? For eksempel $2^x$ eller $10^x$? Da må vi bruke en litt annen formel.`,
    },

    {
      id: 'r1-4-2-theorem-ax',
      type: 'theorem',
      title: 'Derivasjon av $a^x$',
      content: `Hvis $f(x) = a^x$ der $a > 0$ og $a \\neq 1$, så er

$$f'(x) = a^x \\cdot \\ln a$$

**Spesialtilfelle:** Når $a = e$, får vi $\\ln e = 1$, så $(e^x)' = e^x \\cdot 1 = e^x$.`,
    },

    {
      id: 'r1-4-2-proof-ax',
      type: 'collapsible',
      title: 'Bevis for formelen',
      buttonText: 'Vis begrunnelse',
      content: [
        {
          id: 'r1-4-2-proof-ax-text',
          type: 'text',
          content: `Vi skriver om $a^x$ ved hjelp av $e$:

$$a^x = e^{x \\ln a}$$

Dette følger fordi $e^{\\ln a} = a$, så $e^{x \\ln a} = (e^{\\ln a})^x = a^x$.

Ved å derivere (vi bruker kjerneregelen som kommer i neste kapittel):
$$(a^x)' = (e^{x \\ln a})' = e^{x \\ln a} \\cdot \\ln a = a^x \\cdot \\ln a$$`,
        },
      ],
    },

    {
      id: 'r1-4-2-example-ax',
      type: 'example',
      title: 'Eksempel 2: Derivasjon av $a^x$',
      problem: `Deriver følgende funksjoner:

a) $f(x) = 2^x$
b) $g(x) = 10^x$
c) $h(x) = 3 \\cdot 5^x$`,
      solution: `**Løsning:**

a) $f(x) = 2^x$
   $f'(x) = 2^x \\cdot \\ln 2$

b) $g(x) = 10^x$
   $g'(x) = 10^x \\cdot \\ln 10$

c) $h(x) = 3 \\cdot 5^x$
   $h'(x) = 3 \\cdot 5^x \\cdot \\ln 5$`,
    },

    // Oppgave 1
    {
      id: 'r1-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver følgende eksponentialfunksjoner.',
        subTasks: [
          { label: 'a', task: '$f(x) = e^x$', solution: '$f\'(x) = e^x$' },
          { label: 'b', task: '$g(x) = 5e^x$', solution: '$g\'(x) = 5e^x$' },
          { label: 'c', task: '$h(x) = 3^x$', solution: '$h\'(x) = 3^x \\cdot \\ln 3$' },
          { label: 'd', task: '$p(x) = 2 \\cdot 4^x$', solution: '$p\'(x) = 2 \\cdot 4^x \\cdot \\ln 4 = 2 \\ln 4 \\cdot 4^x$' },
        ],
        hints: ['$(e^x)\' = e^x$', '$(a^x)\' = a^x \\cdot \\ln a$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DERIVASJON AV ln x ==========
    {
      id: 'r1-4-2-ln-intro',
      type: 'text',
      content: `## Den naturlige logaritmen

Den naturlige logaritmen $\\ln x$ er den inverse funksjonen til $e^x$. Det viser seg at den deriverte av $\\ln x$ har en overraskende enkel form.`,
    },

    {
      id: 'r1-4-2-theorem-ln',
      type: 'theorem',
      title: 'Derivasjon av $\\ln x$',
      content: `Hvis $f(x) = \\ln x$ der $x > 0$, så er

$$f'(x) = \\frac{1}{x}$$`,
    },

    {
      id: 'r1-4-2-proof-ln',
      type: 'collapsible',
      title: 'Bevis for formelen',
      buttonText: 'Vis begrunnelse',
      content: [
        {
          id: 'r1-4-2-proof-ln-text',
          type: 'text',
          content: `Vi bruker at $\\ln x$ og $e^x$ er inverse funksjoner. Hvis $y = \\ln x$, så er $e^y = x$.

Deriverer vi begge sider med hensyn på $x$:
$$e^y \\cdot \\frac{dy}{dx} = 1$$

Løser for $\\frac{dy}{dx}$:
$$\\frac{dy}{dx} = \\frac{1}{e^y} = \\frac{1}{x}$$

Altså: $(\\ln x)' = \\frac{1}{x}$`,
        },
      ],
    },

    {
      id: 'r1-4-2-example-ln',
      type: 'example',
      title: 'Eksempel 3: Derivasjon av $\\ln x$',
      problem: `Deriver følgende funksjoner:

a) $f(x) = \\ln x$
b) $g(x) = 5 \\ln x$
c) $h(x) = x^2 + \\ln x$`,
      solution: `**Løsning:**

a) $f(x) = \\ln x$
   $f'(x) = \\frac{1}{x}$

b) $g(x) = 5 \\ln x$
   $g'(x) = 5 \\cdot \\frac{1}{x} = \\frac{5}{x}$

c) $h(x) = x^2 + \\ln x$
   $h'(x) = 2x + \\frac{1}{x}$`,
    },

    // ========== DERIVASJON AV log_a x ==========
    {
      id: 'r1-4-2-loga-intro',
      type: 'text',
      content: `## Logaritmer med andre grunntall

For logaritmer med andre grunntall enn $e$ bruker vi sammenhengen med den naturlige logaritmen.`,
    },

    {
      id: 'r1-4-2-theorem-loga',
      type: 'theorem',
      title: 'Derivasjon av $\\log_a x$',
      content: `Hvis $f(x) = \\log_a x$ der $a > 0$, $a \\neq 1$ og $x > 0$, så er

$$f'(x) = \\frac{1}{x \\cdot \\ln a}$$

**Huskeregel:** Formelen følger fra at $\\log_a x = \\frac{\\ln x}{\\ln a}$.`,
    },

    {
      id: 'r1-4-2-example-loga',
      type: 'example',
      title: 'Eksempel 4: Derivasjon av $\\log_a x$',
      problem: `Deriver følgende funksjoner:

a) $f(x) = \\log_2 x$
b) $g(x) = \\log_{10} x = \\lg x$
c) $h(x) = 3 \\log_5 x$`,
      solution: `**Løsning:**

a) $f(x) = \\log_2 x$
   $f'(x) = \\frac{1}{x \\cdot \\ln 2}$

b) $g(x) = \\log_{10} x$
   $g'(x) = \\frac{1}{x \\cdot \\ln 10}$

c) $h(x) = 3 \\log_5 x$
   $h'(x) = 3 \\cdot \\frac{1}{x \\cdot \\ln 5} = \\frac{3}{x \\ln 5}$`,
    },

    // Oppgave 2
    {
      id: 'r1-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver følgende logaritmefunksjoner.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\ln x$', solution: '$f\'(x) = \\frac{1}{x}$' },
          { label: 'b', task: '$g(x) = 4 \\ln x$', solution: '$g\'(x) = \\frac{4}{x}$' },
          { label: 'c', task: '$h(x) = \\log_3 x$', solution: '$h\'(x) = \\frac{1}{x \\ln 3}$' },
          { label: 'd', task: '$p(x) = 2 \\log_{10} x$', solution: '$p\'(x) = \\frac{2}{x \\ln 10}$' },
        ],
        hints: ['$(\\ln x)\' = \\frac{1}{x}$', '$(\\log_a x)\' = \\frac{1}{x \\ln a}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r1-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver følgende funksjoner.',
        subTasks: [
          { label: 'a', task: '$f(x) = e^x + \\ln x$', solution: '$f\'(x) = e^x + \\frac{1}{x}$' },
          { label: 'b', task: '$g(x) = x^3 - 2e^x$', solution: '$g\'(x) = 3x^2 - 2e^x$' },
          { label: 'c', task: '$h(x) = 2^x + 3\\ln x$', solution: '$h\'(x) = 2^x \\ln 2 + \\frac{3}{x}$' },
          { label: 'd', task: '$p(x) = 5^x - \\log_5 x$', solution: '$p\'(x) = 5^x \\ln 5 - \\frac{1}{x \\ln 5}$' },
        ],
        hints: ['Bruk sumregelen og kombiner reglene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-4-2-example-combined',
      type: 'example',
      title: 'Eksempel 5: Kombinerte funksjoner',
      problem: `Deriver funksjonen $f(x) = x^2 + 3e^x - 2\\ln x$.`,
      solution: `**Løsning:**

Vi deriverer hvert ledd for seg:
$$f'(x) = (x^2)' + (3e^x)' - (2\\ln x)'$$

$$f'(x) = 2x + 3e^x - \\frac{2}{x}$$`,
    },

    {
      id: 'r1-4-2-example-tangent',
      type: 'example',
      title: 'Eksempel 6: Tangent til eksponentialfunksjon',
      problem: `Finn tangentens likning til $f(x) = e^x$ i punktet $(0, 1)$.`,
      solution: `**Løsning:**

Vi har $f(x) = e^x$ og $f'(x) = e^x$.

I punktet $x = 0$:
- $f(0) = e^0 = 1$ ✓
- $f'(0) = e^0 = 1$

Tangentens stigningstall er $a = 1$.

Tangentens likning (ettpunktsformelen):
$$y - 1 = 1(x - 0)$$
$$y = x + 1$$`,
    },

    // Oppgave 4
    {
      id: 'r1-4-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tangentens likning i det angitte punktet.',
        subTasks: [
          { label: 'a', task: '$f(x) = e^x$ i punktet $(1, e)$', solution: '$f\'(x) = e^x$, $f\'(1) = e$. Tangent: $y - e = e(x - 1)$, dvs. $y = ex$' },
          { label: 'b', task: '$f(x) = \\ln x$ i punktet $(1, 0)$', solution: '$f\'(x) = \\frac{1}{x}$, $f\'(1) = 1$. Tangent: $y - 0 = 1(x - 1)$, dvs. $y = x - 1$' },
          { label: 'c', task: '$f(x) = \\ln x$ i punktet $(e, 1)$', solution: '$f\'(x) = \\frac{1}{x}$, $f\'(e) = \\frac{1}{e}$. Tangent: $y - 1 = \\frac{1}{e}(x - e)$, dvs. $y = \\frac{x}{e}$' },
        ],
        hints: ['Husk: tangentens stigningstall = $f\'(x_0)$', 'Bruk ettpunktsformelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-4-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs følgende oppgaver.',
        subTasks: [
          { label: 'a', task: 'For hvilken $x$-verdi har tangenten til $f(x) = e^x$ stigningstall $3$?', solution: '$f\'(x) = e^x = 3 \\Rightarrow x = \\ln 3$' },
          { label: 'b', task: 'For hvilken $x$-verdi har tangenten til $f(x) = \\ln x$ stigningstall $\\frac{1}{2}$?', solution: '$f\'(x) = \\frac{1}{x} = \\frac{1}{2} \\Rightarrow x = 2$' },
          { label: 'c', task: 'Vis at $f(x) = e^x - x$ har et minimum for $x = 0$.', solution: '$f\'(x) = e^x - 1 = 0 \\Rightarrow e^x = 1 \\Rightarrow x = 0$. $f\'\'(x) = e^x > 0$ for alle $x$, så $x = 0$ er et minimumspunkt.' },
        ],
        hints: ['Sett $f\'(x)$ lik ønsket stigningstall', 'For c): Husk at minimum krever $f\'(x) = 0$ og $f\'\'(x) > 0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r1-4-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn den andrederiverte $f\'\'(x)$.',
        subTasks: [
          { label: 'a', task: '$f(x) = e^x + x^2$', solution: '$f\'(x) = e^x + 2x$. $f\'\'(x) = e^x + 2$' },
          { label: 'b', task: '$f(x) = 3\\ln x$', solution: '$f\'(x) = \\frac{3}{x} = 3x^{-1}$. $f\'\'(x) = -3x^{-2} = -\\frac{3}{x^2}$' },
          { label: 'c', task: '$f(x) = 2^x$', solution: '$f\'(x) = 2^x \\ln 2$. $f\'\'(x) = 2^x (\\ln 2)^2$' },
        ],
        hints: ['Deriver den deriverte én gang til'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-4-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Eksponentialfunksjoner:**
- $(e^x)' = e^x$
- $(a^x)' = a^x \\cdot \\ln a$

**Logaritmefunksjoner:**
- $(\\ln x)' = \\frac{1}{x}$
- $(\\log_a x)' = \\frac{1}{x \\cdot \\ln a}$

**Nyttige sammenhenger:**
- $e^x$ og $\\ln x$ er inverse funksjoner
- $a^x = e^{x \\ln a}$
- $\\log_a x = \\frac{\\ln x}{\\ln a}$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_4_3: TextbookChapter = {
  id: 'r1-4-3',
  courseId: 'r1',
  chapterNumber: '4.3',
  title: 'Kjerneregelen',
  description: 'Lær kjerneregelen for å derivere sammensatte funksjoner som e^(2x), ln(x^2+1) og (x^2+1)^5.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå hva en sammensatt funksjon er',
    'beherske kjerneregelen for derivasjon',
    'kunne identifisere ytre og indre funksjon',
    'kunne kombinere kjerneregelen med andre derivasjonsregler',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-4-3-intro',
      type: 'text',
      content: `## Sammensatte funksjoner og kjerneregelen

Mange funksjoner er bygget opp av flere funksjoner satt inn i hverandre. For eksempel er $f(x) = e^{2x}$ en sammensatt funksjon – vi har $e^u$ der $u = 2x$.

Kjerneregelen (også kalt kjederegelen) forteller oss hvordan vi deriverer slike funksjoner.`,
    },

    // ========== SAMMENSATTE FUNKSJONER ==========
    {
      id: 'r1-4-3-sammensatt-intro',
      type: 'text',
      content: `## Hva er en sammensatt funksjon?

En sammensatt funksjon er en funksjon der vi først bruker én funksjon, og deretter en annen funksjon på resultatet.`,
    },

    {
      id: 'r1-4-3-def-sammensatt',
      type: 'definition',
      title: 'Sammensatt funksjon',
      content: `En **sammensatt funksjon** $f(g(x))$ består av:

- En **ytre funksjon** $f(u)$
- En **indre funksjon** (eller **kjerne**) $g(x)$

Vi setter den indre funksjonen inn i den ytre: $f(g(x))$.

**Eksempel:** I $e^{2x}$ er:
- Ytre funksjon: $e^u$
- Indre funksjon (kjerne): $u = 2x$`,
    },

    {
      id: 'r1-4-3-example-identifiser',
      type: 'example',
      title: 'Eksempel 1: Identifisere ytre og indre funksjon',
      problem: `Bestem ytre og indre funksjon i:

a) $f(x) = (x^2 + 1)^5$
b) $g(x) = \\ln(3x)$
c) $h(x) = e^{x^2}$
d) $p(x) = \\sqrt{x^3 - 2}$`,
      solution: `**Løsning:**

a) $f(x) = (x^2 + 1)^5$
   - Ytre funksjon: $u^5$
   - Indre funksjon: $u = x^2 + 1$

b) $g(x) = \\ln(3x)$
   - Ytre funksjon: $\\ln u$
   - Indre funksjon: $u = 3x$

c) $h(x) = e^{x^2}$
   - Ytre funksjon: $e^u$
   - Indre funksjon: $u = x^2$

d) $p(x) = \\sqrt{x^3 - 2} = (x^3 - 2)^{1/2}$
   - Ytre funksjon: $u^{1/2}$
   - Indre funksjon: $u = x^3 - 2$`,
    },

    // ========== KJERNEREGELEN ==========
    {
      id: 'r1-4-3-kjerneregel-intro',
      type: 'text',
      content: `## Kjerneregelen

Når vi deriverer en sammensatt funksjon, må vi ta hensyn til både den ytre og den indre funksjonen.`,
    },

    {
      id: 'r1-4-3-theorem-kjerne',
      type: 'theorem',
      title: 'Kjerneregelen',
      content: `Hvis $f(x) = h(g(x))$ er en sammensatt funksjon, så er

$$f'(x) = h'(g(x)) \\cdot g'(x)$$

**Med ord:** Ytre derivert ganger indre derivert.

**Alternativ notasjon:** Hvis $y = f(u)$ og $u = g(x)$, så er
$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$`,
    },

    {
      id: 'r1-4-3-note-kjerne',
      type: 'note',
      content: `**Fremgangsmåte for kjerneregelen:**

1. Identifiser den ytre funksjonen og kjernen (den indre funksjonen)
2. Deriver den ytre funksjonen (behold kjernen uendret)
3. Multipliser med den deriverte av kjernen

$$\\text{(ytre derivert)} \\cdot \\text{(indre derivert)}$$`,
    },

    // ========== EKSEMPLER MED POTENSER ==========
    {
      id: 'r1-4-3-potens-intro',
      type: 'text',
      content: `## Kjerneregelen med potensfunksjoner

En vanlig type sammensatt funksjon er $(\\text{noe})^n$, der "noe" er en funksjon av $x$.`,
    },

    {
      id: 'r1-4-3-theorem-potens-kjerne',
      type: 'theorem',
      title: 'Generalisert potensregel',
      content: `Hvis $f(x) = (g(x))^n$, så er

$$f'(x) = n \\cdot (g(x))^{n-1} \\cdot g'(x)$$`,
    },

    {
      id: 'r1-4-3-example-potens',
      type: 'example',
      title: 'Eksempel 2: Kjerneregelen med potenser',
      problem: `Deriver $f(x) = (x^2 + 1)^5$.`,
      solution: `**Løsning:**

Vi identifiserer:
- Ytre funksjon: $u^5$, med derivert $5u^4$
- Indre funksjon (kjerne): $u = x^2 + 1$, med derivert $2x$

Kjerneregelen gir:
$$f'(x) = 5(x^2 + 1)^4 \\cdot 2x = 10x(x^2 + 1)^4$$

**Steg for steg:**
1. Ytre derivert: $5(x^2 + 1)^4$  (vi beholder kjernen)
2. Indre derivert: $2x$
3. Ganger sammen: $5(x^2 + 1)^4 \\cdot 2x = 10x(x^2 + 1)^4$`,
    },

    {
      id: 'r1-4-3-example-potens2',
      type: 'example',
      title: 'Eksempel 3: Flere potenseksempler',
      problem: `Deriver følgende funksjoner:

a) $f(x) = (3x - 2)^4$
b) $g(x) = \\sqrt{x^2 + 4} = (x^2 + 4)^{1/2}$
c) $h(x) = \\frac{1}{(2x + 1)^3} = (2x + 1)^{-3}$`,
      solution: `**Løsning:**

a) $f(x) = (3x - 2)^4$
   - Kjerne: $u = 3x - 2$, $u' = 3$
   $$f'(x) = 4(3x - 2)^3 \\cdot 3 = 12(3x - 2)^3$$

b) $g(x) = (x^2 + 4)^{1/2}$
   - Kjerne: $u = x^2 + 4$, $u' = 2x$
   $$g'(x) = \\frac{1}{2}(x^2 + 4)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2 + 4}}$$

c) $h(x) = (2x + 1)^{-3}$
   - Kjerne: $u = 2x + 1$, $u' = 2$
   $$h'(x) = -3(2x + 1)^{-4} \\cdot 2 = -\\frac{6}{(2x + 1)^4}$$`,
    },

    // Oppgave 1
    {
      id: 'r1-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver følgende funksjoner ved å bruke kjerneregelen.',
        subTasks: [
          { label: 'a', task: '$f(x) = (x + 3)^6$', solution: '$f\'(x) = 6(x + 3)^5 \\cdot 1 = 6(x + 3)^5$' },
          { label: 'b', task: '$g(x) = (2x - 1)^5$', solution: '$g\'(x) = 5(2x - 1)^4 \\cdot 2 = 10(2x - 1)^4$' },
          { label: 'c', task: '$h(x) = (x^2 - 3x)^4$', solution: '$h\'(x) = 4(x^2 - 3x)^3 \\cdot (2x - 3)$' },
          { label: 'd', task: '$p(x) = (x^3 + 2)^2$', solution: '$p\'(x) = 2(x^3 + 2) \\cdot 3x^2 = 6x^2(x^3 + 2)$' },
        ],
        hints: ['Identifiser kjernen først', 'Ytre derivert $\\cdot$ indre derivert'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPLER MED e^u ==========
    {
      id: 'r1-4-3-exp-intro',
      type: 'text',
      content: `## Kjerneregelen med $e^{g(x)}$

Når vi deriverer $e^{\\text{noe}}$ der "noe" er en funksjon av $x$, bruker vi at $(e^u)' = e^u$ sammen med kjerneregelen.`,
    },

    {
      id: 'r1-4-3-theorem-exp-kjerne',
      type: 'theorem',
      title: 'Derivasjon av $e^{g(x)}$',
      content: `Hvis $f(x) = e^{g(x)}$, så er

$$f'(x) = e^{g(x)} \\cdot g'(x)$$`,
    },

    {
      id: 'r1-4-3-example-exp',
      type: 'example',
      title: 'Eksempel 4: Kjerneregelen med $e^x$',
      problem: `Deriver følgende funksjoner:

a) $f(x) = e^{2x}$
b) $g(x) = e^{x^2}$
c) $h(x) = e^{-x}$`,
      solution: `**Løsning:**

a) $f(x) = e^{2x}$
   - Kjerne: $u = 2x$, $u' = 2$
   $$f'(x) = e^{2x} \\cdot 2 = 2e^{2x}$$

b) $g(x) = e^{x^2}$
   - Kjerne: $u = x^2$, $u' = 2x$
   $$g'(x) = e^{x^2} \\cdot 2x = 2xe^{x^2}$$

c) $h(x) = e^{-x}$
   - Kjerne: $u = -x$, $u' = -1$
   $$h'(x) = e^{-x} \\cdot (-1) = -e^{-x}$$`,
    },

    // Oppgave 2
    {
      id: 'r1-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver følgende eksponentialfunksjoner.',
        subTasks: [
          { label: 'a', task: '$f(x) = e^{3x}$', solution: '$f\'(x) = 3e^{3x}$' },
          { label: 'b', task: '$g(x) = e^{-2x}$', solution: '$g\'(x) = -2e^{-2x}$' },
          { label: 'c', task: '$h(x) = e^{x^2 + 1}$', solution: '$h\'(x) = 2x \\cdot e^{x^2 + 1}$' },
          { label: 'd', task: '$p(x) = 3e^{4x}$', solution: '$p\'(x) = 3 \\cdot 4e^{4x} = 12e^{4x}$' },
        ],
        hints: ['$(e^{g(x)})\' = e^{g(x)} \\cdot g\'(x)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPLER MED ln u ==========
    {
      id: 'r1-4-3-ln-intro',
      type: 'text',
      content: `## Kjerneregelen med $\\ln(g(x))$

Når vi deriverer $\\ln(\\text{noe})$ der "noe" er en funksjon av $x$, bruker vi at $(\\ln u)' = \\frac{1}{u}$ sammen med kjerneregelen.`,
    },

    {
      id: 'r1-4-3-theorem-ln-kjerne',
      type: 'theorem',
      title: 'Derivasjon av $\\ln(g(x))$',
      content: `Hvis $f(x) = \\ln(g(x))$ der $g(x) > 0$, så er

$$f'(x) = \\frac{g'(x)}{g(x)}$$`,
    },

    {
      id: 'r1-4-3-example-ln',
      type: 'example',
      title: 'Eksempel 5: Kjerneregelen med $\\ln x$',
      problem: `Deriver følgende funksjoner:

a) $f(x) = \\ln(2x)$
b) $g(x) = \\ln(x^2 + 1)$
c) $h(x) = \\ln(3x^2)$`,
      solution: `**Løsning:**

a) $f(x) = \\ln(2x)$
   - Kjerne: $u = 2x$, $u' = 2$
   $$f'(x) = \\frac{2}{2x} = \\frac{1}{x}$$

b) $g(x) = \\ln(x^2 + 1)$
   - Kjerne: $u = x^2 + 1$, $u' = 2x$
   $$g'(x) = \\frac{2x}{x^2 + 1}$$

c) $h(x) = \\ln(3x^2)$
   - Kjerne: $u = 3x^2$, $u' = 6x$
   $$h'(x) = \\frac{6x}{3x^2} = \\frac{2}{x}$$

**Merk:** I a) og c) kunne vi også brukt logaritmeregler først:
- $\\ln(2x) = \\ln 2 + \\ln x$, så $(\\ln(2x))' = 0 + \\frac{1}{x} = \\frac{1}{x}$`,
    },

    // Oppgave 3
    {
      id: 'r1-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver følgende logaritmefunksjoner.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\ln(5x)$', solution: '$f\'(x) = \\frac{5}{5x} = \\frac{1}{x}$' },
          { label: 'b', task: '$g(x) = \\ln(x^3)$', solution: '$g\'(x) = \\frac{3x^2}{x^3} = \\frac{3}{x}$' },
          { label: 'c', task: '$h(x) = \\ln(x^2 - 4)$', solution: '$h\'(x) = \\frac{2x}{x^2 - 4}$' },
          { label: 'd', task: '$p(x) = \\ln(e^x + 1)$', solution: '$p\'(x) = \\frac{e^x}{e^x + 1}$' },
        ],
        hints: ['$(\\ln(g(x)))\' = \\frac{g\'(x)}{g(x)}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KOMBINERTE EKSEMPLER ==========
    {
      id: 'r1-4-3-kombinert-intro',
      type: 'text',
      content: `## Kombinasjon med andre regler

Ofte må vi kombinere kjerneregelen med sumregelen og konstantregelen.`,
    },

    {
      id: 'r1-4-3-example-kombinert',
      type: 'example',
      title: 'Eksempel 6: Kombinerte funksjoner',
      problem: `Deriver $f(x) = x^2 + e^{3x} - \\ln(x + 1)$.`,
      solution: `**Løsning:**

Vi deriverer hvert ledd for seg:

1. $(x^2)' = 2x$

2. $(e^{3x})' = e^{3x} \\cdot 3 = 3e^{3x}$  (kjerneregelen)

3. $(\\ln(x + 1))' = \\frac{1}{x + 1}$  (kjerneregelen, $u' = 1$)

**Svar:**
$$f'(x) = 2x + 3e^{3x} - \\frac{1}{x + 1}$$`,
    },

    {
      id: 'r1-4-3-example-kombinert2',
      type: 'example',
      title: 'Eksempel 7: Dobbel bruk av kjerneregelen',
      problem: `Deriver $f(x) = e^{(x^2 + 1)^3}$.`,
      solution: `**Løsning:**

Her har vi en "dobbelt sammensatt" funksjon:
- Ytre: $e^v$
- Mellom: $v = u^3$ der $u = x^2 + 1$
- Indre: $u = x^2 + 1$

Vi kan tenke trinnvis:
1. $(e^{g(x)})' = e^{g(x)} \\cdot g'(x)$ der $g(x) = (x^2 + 1)^3$
2. $g'(x) = 3(x^2 + 1)^2 \\cdot 2x = 6x(x^2 + 1)^2$

**Svar:**
$$f'(x) = e^{(x^2 + 1)^3} \\cdot 6x(x^2 + 1)^2$$`,
    },

    // Oppgave 4
    {
      id: 'r1-4-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver følgende funksjoner.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^3 + e^{2x}$', solution: '$f\'(x) = 3x^2 + 2e^{2x}$' },
          { label: 'b', task: '$g(x) = (x^2 + 1)^3 - \\ln(2x)$', solution: '$g\'(x) = 6x(x^2 + 1)^2 - \\frac{1}{x}$' },
          { label: 'c', task: '$h(x) = 2e^{-x} + 3\\sqrt{x + 1}$', solution: '$h\'(x) = -2e^{-x} + \\frac{3}{2\\sqrt{x + 1}}$' },
          { label: 'd', task: '$p(x) = \\ln(x^2) + e^{x^2}$', solution: '$p\'(x) = \\frac{2}{x} + 2xe^{x^2}$' },
        ],
        hints: ['Deriver ledd for ledd', 'Bruk kjerneregelen der det trengs'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-4-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Deriver funksjonene og forenkle svaret.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sqrt{1 - x^2}$', solution: '$f(x) = (1 - x^2)^{1/2}$. $f\'(x) = \\frac{1}{2}(1 - x^2)^{-1/2} \\cdot (-2x) = \\frac{-x}{\\sqrt{1 - x^2}}$' },
          { label: 'b', task: '$g(x) = \\frac{1}{\\sqrt{x^2 + 1}}$', solution: '$g(x) = (x^2 + 1)^{-1/2}$. $g\'(x) = -\\frac{1}{2}(x^2 + 1)^{-3/2} \\cdot 2x = \\frac{-x}{(x^2 + 1)^{3/2}}$' },
          { label: 'c', task: '$h(x) = e^{\\sqrt{x}}$', solution: '$h\'(x) = e^{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$' },
          { label: 'd', task: '$p(x) = \\ln(\\ln x)$', solution: '$p\'(x) = \\frac{1}{\\ln x} \\cdot \\frac{1}{x} = \\frac{1}{x \\ln x}$' },
        ],
        hints: ['Skriv om røtter og brøker til potenser', 'Bruk kjerneregelen trinnvis'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r1-4-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-4-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn tangentens likning i det angitte punktet.',
        subTasks: [
          { label: 'a', task: '$f(x) = e^{2x}$ i punktet $(0, 1)$', solution: '$f\'(x) = 2e^{2x}$, $f\'(0) = 2$. Tangent: $y - 1 = 2(x - 0)$, dvs. $y = 2x + 1$' },
          { label: 'b', task: '$f(x) = \\ln(x + 1)$ i punktet $(0, 0)$', solution: '$f\'(x) = \\frac{1}{x + 1}$, $f\'(0) = 1$. Tangent: $y - 0 = 1(x - 0)$, dvs. $y = x$' },
          { label: 'c', task: '$f(x) = (x - 1)^3$ i punktet $(2, 1)$', solution: '$f\'(x) = 3(x - 1)^2$, $f\'(2) = 3$. Tangent: $y - 1 = 3(x - 2)$, dvs. $y = 3x - 5$' },
        ],
        hints: ['Finn $f\'(x)$ først', 'Bruk ettpunktsformelen for tangenten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-4-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-4-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs følgende oppgaver.',
        subTasks: [
          { label: 'a', task: 'Finn $f\'\'(x)$ når $f(x) = e^{2x}$.', solution: '$f\'(x) = 2e^{2x}$. $f\'\'(x) = 2 \\cdot 2e^{2x} = 4e^{2x}$' },
          { label: 'b', task: 'Vis at $f(x) = e^{-x^2}$ har et maksimum for $x = 0$.', solution: '$f\'(x) = e^{-x^2} \\cdot (-2x) = -2xe^{-x^2}$. $f\'(x) = 0$ når $x = 0$. $f\'\'(x) = -2e^{-x^2} + 4x^2 e^{-x^2}$, $f\'\'(0) = -2 < 0$, så $x = 0$ er maksimum.' },
          { label: 'c', task: 'For hvilken $x$-verdi har tangenten til $f(x) = \\ln(2x)$ stigningstall $\\frac{1}{4}$?', solution: '$f\'(x) = \\frac{1}{x}$. $\\frac{1}{x} = \\frac{1}{4} \\Rightarrow x = 4$' },
        ],
        hints: ['For b): Bruk andrederiverttesten for å bestemme type ekstremalpunkt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-4-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Kjerneregelen:**
$$\\big(f(g(x))\\big)' = f'(g(x)) \\cdot g'(x)$$

**Viktige spesialtilfeller:**

| Funksjon | Derivert |
|----------|----------|
| $(g(x))^n$ | $n \\cdot (g(x))^{n-1} \\cdot g'(x)$ |
| $e^{g(x)}$ | $e^{g(x)} \\cdot g'(x)$ |
| $\\ln(g(x))$ | $\\frac{g'(x)}{g(x)}$ |
| $a^{g(x)}$ | $a^{g(x)} \\cdot \\ln a \\cdot g'(x)$ |

**Huskeregel:** Ytre derivert $\\times$ indre derivert`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_4_4: TextbookChapter = {
  id: 'r1-4-4',
  courseId: 'r1',
  chapterNumber: '4.4',
  title: 'Produktregelen og kvotientregelen',
  description: 'Lær å derivere produkter og brøker av funksjoner ved hjelp av produktregelen og kvotientregelen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beherske produktregelen for derivasjon av produkter',
    'beherske kvotientregelen for derivasjon av brøker',
    'kunne kombinere produkt-/kvotientregelen med kjerneregelen',
    'vite når man skal bruke hvilken derivasjonsregel',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-4-4-intro',
      type: 'text',
      content: `## Derivasjon av sammensatte funksjoner

Når vi har funksjoner som er produkter eller brøker av andre funksjoner, kan vi ikke bare derivere hver faktor for seg. Vi trenger spesielle regler: **produktregelen** og **kvotientregelen**.

I dette kapittelet lærer du:
- Hvordan derivere et produkt av to funksjoner
- Hvordan derivere en brøk av to funksjoner
- Hvordan kombinere disse reglene med kjerneregelen`,
    },

    // ========== PRODUKTREGELEN ==========
    {
      id: 'r1-4-4-produkt-intro',
      type: 'text',
      content: `## Produktregelen

Hvis $h(x) = f(x) \\cdot g(x)$, kan vi ikke derivere ved å gange de deriverte: $h'(x) \\neq f'(x) \\cdot g'(x)$.

For eksempel: La $h(x) = x \\cdot x = x^2$. Da er $h'(x) = 2x$.
Men $f(x) = x$ og $g(x) = x$ gir $f'(x) \\cdot g'(x) = 1 \\cdot 1 = 1 \\neq 2x$.

Vi trenger produktregelen!`,
    },

    // Teorem: Produktregelen
    {
      id: 'r1-4-4-theorem-produkt',
      type: 'theorem',
      title: 'Produktregelen',
      content: `Hvis $f$ og $g$ er deriverbare funksjoner, så er produktet $h(x) = f(x) \\cdot g(x)$ også deriverbart, og

$$(f \\cdot g)'(x) = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$

Kort skrevet: $(f \\cdot g)' = f' \\cdot g + f \\cdot g'$

**Huskeregel:** «Derivert av første ganger andre, pluss første ganger derivert av andre»`,
    },

    // Eksempel 1: Enkel produktregel
    {
      id: 'r1-4-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Produktregelen',
      problem: `Deriver $h(x) = x^2 \\cdot e^x$.`,
      solution: `**Løsning:**

Vi identifiserer faktorene:
- $f(x) = x^2 \\Rightarrow f'(x) = 2x$
- $g(x) = e^x \\Rightarrow g'(x) = e^x$

Produktregelen gir:
$$h'(x) = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$
$$h'(x) = 2x \\cdot e^x + x^2 \\cdot e^x$$

Vi faktoriserer ut $e^x$:
$$h'(x) = e^x(2x + x^2) = e^x \\cdot x(2 + x)$$

**Svar:** $h'(x) = (x^2 + 2x)e^x$`,
    },

    // Eksempel 2: Produktregel med trigonometri
    {
      id: 'r1-4-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Produkt med trigonometriske funksjoner',
      problem: `Deriver $h(x) = x \\cdot \\sin x$.`,
      solution: `**Løsning:**

Vi identifiserer faktorene:
- $f(x) = x \\Rightarrow f'(x) = 1$
- $g(x) = \\sin x \\Rightarrow g'(x) = \\cos x$

Produktregelen gir:
$$h'(x) = 1 \\cdot \\sin x + x \\cdot \\cos x$$

**Svar:** $h'(x) = \\sin x + x \\cos x$`,
    },

    // Eksempel 3: Produktregel med tre faktorer
    {
      id: 'r1-4-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Produkt av tre funksjoner',
      problem: `Deriver $h(x) = x^2 \\cdot e^x \\cdot \\ln x$.`,
      solution: `**Løsning:**

For tre faktorer $f \\cdot g \\cdot k$ kan vi bruke produktregelen to ganger:
$$(f \\cdot g \\cdot k)' = f' \\cdot g \\cdot k + f \\cdot g' \\cdot k + f \\cdot g \\cdot k'$$

Med $f(x) = x^2$, $g(x) = e^x$, $k(x) = \\ln x$:
- $f'(x) = 2x$
- $g'(x) = e^x$
- $k'(x) = \\frac{1}{x}$

$$h'(x) = 2x \\cdot e^x \\cdot \\ln x + x^2 \\cdot e^x \\cdot \\ln x + x^2 \\cdot e^x \\cdot \\frac{1}{x}$$

$$h'(x) = x e^x \\left(2\\ln x + x \\ln x + 1\\right)$$

**Svar:** $h'(x) = xe^x(2\\ln x + x\\ln x + 1)$`,
    },

    // Oppgave 1: Produktregelen
    {
      id: 'r1-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene ved hjelp av produktregelen.',
        subTasks: [
          { label: 'a', task: '$f(x) = x \\cdot e^x$', solution: '$f\'(x) = 1 \\cdot e^x + x \\cdot e^x = e^x(1 + x)$' },
          { label: 'b', task: '$g(x) = x^3 \\cdot \\ln x$', solution: '$g\'(x) = 3x^2 \\cdot \\ln x + x^3 \\cdot \\frac{1}{x} = 3x^2 \\ln x + x^2 = x^2(3\\ln x + 1)$' },
          { label: 'c', task: '$h(x) = (x+1) \\cdot \\sin x$', solution: '$h\'(x) = 1 \\cdot \\sin x + (x+1) \\cdot \\cos x = \\sin x + (x+1)\\cos x$' },
          { label: 'd', task: '$k(x) = e^x \\cdot \\cos x$', solution: '$k\'(x) = e^x \\cdot \\cos x + e^x \\cdot (-\\sin x) = e^x(\\cos x - \\sin x)$' },
        ],
        hints: ['Identifiser $f$ og $g$ først', 'Husk: $(f \\cdot g)\' = f\' \\cdot g + f \\cdot g\'$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KVOTIENTREGELEN ==========
    {
      id: 'r1-4-4-kvotient-intro',
      type: 'text',
      content: `## Kvotientregelen

Når vi skal derivere en brøk $h(x) = \\frac{f(x)}{g(x)}$, bruker vi kvotientregelen. Denne regelen er litt mer komplisert enn produktregelen, men følger et lignende mønster.`,
    },

    // Teorem: Kvotientregelen
    {
      id: 'r1-4-4-theorem-kvotient',
      type: 'theorem',
      title: 'Kvotientregelen',
      content: `Hvis $f$ og $g$ er deriverbare funksjoner og $g(x) \\neq 0$, så er brøken $h(x) = \\frac{f(x)}{g(x)}$ deriverbar, og

$$\\left(\\frac{f}{g}\\right)'(x) = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$

Kort skrevet: $\\left(\\frac{f}{g}\\right)' = \\frac{f' \\cdot g - f \\cdot g'}{g^2}$

**Huskeregel:** «Derivert av teller ganger nevner, minus teller ganger derivert av nevner, delt på nevner i andre»`,
    },

    // Note om fortegn
    {
      id: 'r1-4-4-note-fortegn',
      type: 'note',
      content: `**Viktig:** I kvotientregelen er det **minus** i telleren, ikke pluss som i produktregelen. Pass på rekkefølgen: det er $f' \\cdot g - f \\cdot g'$, ikke omvendt!`,
    },

    // Eksempel 4: Enkel kvotientregel
    {
      id: 'r1-4-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Kvotientregelen',
      problem: `Deriver $h(x) = \\frac{x^2}{e^x}$.`,
      solution: `**Løsning:**

Vi identifiserer teller og nevner:
- $f(x) = x^2 \\Rightarrow f'(x) = 2x$
- $g(x) = e^x \\Rightarrow g'(x) = e^x$

Kvotientregelen gir:
$$h'(x) = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$

$$h'(x) = \\frac{2x \\cdot e^x - x^2 \\cdot e^x}{(e^x)^2}$$

$$h'(x) = \\frac{e^x(2x - x^2)}{e^{2x}} = \\frac{2x - x^2}{e^x}$$

**Svar:** $h'(x) = \\frac{x(2-x)}{e^x}$`,
    },

    // Eksempel 5: Kvotientregel med trigonometri
    {
      id: 'r1-4-4-example-5',
      type: 'example',
      title: 'Eksempel 5: Derivasjon av tan x',
      problem: `Vis at $\\frac{d}{dx}(\\tan x) = \\frac{1}{\\cos^2 x}$.`,
      solution: `**Løsning:**

Vi skriver $\\tan x = \\frac{\\sin x}{\\cos x}$ og bruker kvotientregelen:
- $f(x) = \\sin x \\Rightarrow f'(x) = \\cos x$
- $g(x) = \\cos x \\Rightarrow g'(x) = -\\sin x$

$$\\frac{d}{dx}(\\tan x) = \\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x}$$

$$= \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}$$

Siden $\\cos^2 x + \\sin^2 x = 1$:

$$= \\frac{1}{\\cos^2 x}$$

**Svar:** $(\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$`,
    },

    // Oppgave 2: Kvotientregelen
    {
      id: 'r1-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene ved hjelp av kvotientregelen.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{x}{x+1}$', solution: '$f\'(x) = \\frac{1 \\cdot (x+1) - x \\cdot 1}{(x+1)^2} = \\frac{1}{(x+1)^2}$' },
          { label: 'b', task: '$g(x) = \\frac{e^x}{x}$', solution: '$g\'(x) = \\frac{e^x \\cdot x - e^x \\cdot 1}{x^2} = \\frac{e^x(x-1)}{x^2}$' },
          { label: 'c', task: '$h(x) = \\frac{\\sin x}{x}$', solution: '$h\'(x) = \\frac{\\cos x \\cdot x - \\sin x \\cdot 1}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$' },
          { label: 'd', task: '$k(x) = \\frac{x^2 - 1}{x^2 + 1}$', solution: '$k\'(x) = \\frac{2x(x^2+1) - (x^2-1) \\cdot 2x}{(x^2+1)^2} = \\frac{2x(x^2+1-x^2+1)}{(x^2+1)^2} = \\frac{4x}{(x^2+1)^2}$' },
        ],
        hints: ['Skriv teller $= f$ og nevner $= g$', 'Husk minustegnet i telleren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KOMBINASJON MED KJERNEREGELEN ==========
    {
      id: 'r1-4-4-kombinasjon-intro',
      type: 'text',
      content: `## Kombinasjon med kjerneregelen

Ofte må vi kombinere produktregelen eller kvotientregelen med kjerneregelen. Dette skjer når en av faktorene selv er en sammensatt funksjon.

**Kjerneregelen:** $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$`,
    },

    // Eksempel 6: Kombinasjon
    {
      id: 'r1-4-4-example-6',
      type: 'example',
      title: 'Eksempel 6: Produktregel + kjerneregel',
      problem: `Deriver $h(x) = x^2 \\cdot e^{3x}$.`,
      solution: `**Løsning:**

Vi har et produkt der den ene faktoren er sammensatt:
- $f(x) = x^2 \\Rightarrow f'(x) = 2x$
- $g(x) = e^{3x}$ (sammensatt funksjon)

For $g(x) = e^{3x}$ bruker vi kjerneregelen:
- Ytre funksjon: $e^u$ med derivert $e^u$
- Indre funksjon: $u = 3x$ med derivert $3$
- $g'(x) = e^{3x} \\cdot 3 = 3e^{3x}$

Produktregelen gir:
$$h'(x) = 2x \\cdot e^{3x} + x^2 \\cdot 3e^{3x}$$
$$h'(x) = e^{3x}(2x + 3x^2)$$

**Svar:** $h'(x) = xe^{3x}(2 + 3x)$`,
    },

    // Eksempel 7: Kvotient med kjerne
    {
      id: 'r1-4-4-example-7',
      type: 'example',
      title: 'Eksempel 7: Kvotientregel + kjerneregel',
      problem: `Deriver $h(x) = \\frac{\\ln(x^2 + 1)}{x}$.`,
      solution: `**Løsning:**

La $f(x) = \\ln(x^2 + 1)$ og $g(x) = x$.

For $f(x)$ bruker vi kjerneregelen:
$$f'(x) = \\frac{1}{x^2 + 1} \\cdot 2x = \\frac{2x}{x^2 + 1}$$

$g'(x) = 1$

Kvotientregelen gir:
$$h'(x) = \\frac{\\frac{2x}{x^2+1} \\cdot x - \\ln(x^2+1) \\cdot 1}{x^2}$$

$$h'(x) = \\frac{\\frac{2x^2}{x^2+1} - \\ln(x^2+1)}{x^2}$$

$$h'(x) = \\frac{2x^2 - (x^2+1)\\ln(x^2+1)}{x^2(x^2+1)}$$

**Svar:** $h'(x) = \\frac{2x^2 - (x^2+1)\\ln(x^2+1)}{x^2(x^2+1)}$`,
    },

    // Oppgave 3: Kombinasjon
    {
      id: 'r1-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver ved å kombinere reglene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x \\cdot e^{2x}$', solution: '$f\'(x) = 1 \\cdot e^{2x} + x \\cdot 2e^{2x} = e^{2x}(1 + 2x)$' },
          { label: 'b', task: '$g(x) = (x^2 + 1) \\cdot \\sin(2x)$', solution: '$g\'(x) = 2x \\cdot \\sin(2x) + (x^2+1) \\cdot 2\\cos(2x) = 2x\\sin(2x) + 2(x^2+1)\\cos(2x)$' },
          { label: 'c', task: '$h(x) = \\frac{e^{2x}}{x+1}$', solution: '$h\'(x) = \\frac{2e^{2x}(x+1) - e^{2x} \\cdot 1}{(x+1)^2} = \\frac{e^{2x}(2x+2-1)}{(x+1)^2} = \\frac{e^{2x}(2x+1)}{(x+1)^2}$' },
        ],
        hints: ['Identifiser sammensatte funksjoner og bruk kjerneregelen på disse', 'Ta ett steg om gangen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NÅR BRUKE HVILKEN REGEL? ==========
    {
      id: 'r1-4-4-valg-intro',
      type: 'text',
      content: `## Når bruke hvilken regel?

Det kan være forvirrende å vite hvilken derivasjonsregel man skal bruke. Her er en enkel sjekkliste:`,
    },

    // Tips for valg av regel
    {
      id: 'r1-4-4-tip-valg',
      type: 'tip',
      content: `**Sjekkliste for derivasjon:**

1. **Enkle funksjoner**: Bruk standardregler direkte
   - $x^n$, $e^x$, $\\ln x$, $\\sin x$, $\\cos x$, osv.

2. **Sammensatt funksjon** (funksjon av funksjon): Bruk **kjerneregelen**
   - Eksempel: $e^{x^2}$, $\\sin(3x)$, $\\ln(x^2+1)$

3. **Produkt av to funksjoner**: Bruk **produktregelen**
   - Eksempel: $x \\cdot e^x$, $x^2 \\cdot \\sin x$

4. **Brøk av to funksjoner**: Bruk **kvotientregelen**
   - Eksempel: $\\frac{x}{e^x}$, $\\frac{\\sin x}{x}$

**Tips:** Noen ganger kan du omskrive uttrykket for å gjøre det enklere:
- $\\frac{1}{x^2} = x^{-2}$ (potensregel)
- $\\frac{e^x}{e^{2x}} = e^{-x}$ (forenkle først)`,
    },

    // Oppgave 4: Velg riktig metode
    {
      id: 'r1-4-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-4-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene. Velg selv riktig metode.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sqrt{x} \\cdot \\ln x$', solution: 'Produktregel: $f\'(x) = \\frac{1}{2\\sqrt{x}} \\cdot \\ln x + \\sqrt{x} \\cdot \\frac{1}{x} = \\frac{\\ln x}{2\\sqrt{x}} + \\frac{1}{\\sqrt{x}} = \\frac{\\ln x + 2}{2\\sqrt{x}}$' },
          { label: 'b', task: '$g(x) = \\frac{x^2}{\\ln x}$', solution: 'Kvotientregel: $g\'(x) = \\frac{2x \\cdot \\ln x - x^2 \\cdot \\frac{1}{x}}{(\\ln x)^2} = \\frac{2x\\ln x - x}{(\\ln x)^2} = \\frac{x(2\\ln x - 1)}{(\\ln x)^2}$' },
          { label: 'c', task: '$h(x) = e^x \\cdot \\sin x \\cdot \\cos x$', solution: 'Skriv om: $h(x) = e^x \\cdot \\frac{1}{2}\\sin(2x)$. Produktregel: $h\'(x) = \\frac{1}{2}(e^x \\sin(2x) + e^x \\cdot 2\\cos(2x)) = \\frac{e^x}{2}(\\sin(2x) + 2\\cos(2x))$' },
        ],
        hints: ['Se på strukturen i uttrykket', 'Vurder om du kan forenkle først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5: Utfordring
    {
      id: 'r1-4-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-4-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver.',
        subTasks: [
          { label: 'a', task: 'Deriver $f(x) = \\frac{x \\cdot e^x}{x + 1}$', solution: 'Kombinasjon av produkt og kvotient. La teller $= xe^x$, nevner $= x+1$. Teller derivert: $e^x + xe^x = e^x(1+x)$. Kvotientregel: $f\'(x) = \\frac{e^x(1+x)(x+1) - xe^x \\cdot 1}{(x+1)^2} = \\frac{e^x((1+x)^2 - x)}{(x+1)^2} = \\frac{e^x(x^2+x+1)}{(x+1)^2}$' },
          { label: 'b', task: 'Deriver $g(x) = \\frac{\\sin x - x\\cos x}{\\sin^2 x}$', solution: 'Kvotientregel: Teller derivert: $\\cos x - (\\cos x - x\\sin x) = x\\sin x$. Nevner derivert: $2\\sin x \\cos x$. $g\'(x) = \\frac{x\\sin x \\cdot \\sin^2 x - (\\sin x - x\\cos x) \\cdot 2\\sin x \\cos x}{\\sin^4 x}$. Forenklet: $g\'(x) = \\frac{x\\sin x - 2\\cos x(\\sin x - x\\cos x)}{\\sin^3 x}$' },
        ],
        hints: ['Del opp i steg', 'Deriver teller først hvis du har en kompleks brøk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6: Anvendelse
    {
      id: 'r1-4-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-4-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tangentens likning i det gitte punktet.',
        subTasks: [
          { label: 'a', task: '$f(x) = x \\cdot e^x$ i punktet $(0, 0)$', solution: '$f\'(x) = e^x(1+x)$. $f\'(0) = e^0(1+0) = 1$. Tangent: $y - 0 = 1(x - 0)$, altså $y = x$' },
          { label: 'b', task: '$g(x) = \\frac{x}{x+1}$ i punktet $(1, \\frac{1}{2})$', solution: '$g\'(x) = \\frac{1}{(x+1)^2}$. $g\'(1) = \\frac{1}{4}$. Tangent: $y - \\frac{1}{2} = \\frac{1}{4}(x - 1)$, altså $y = \\frac{1}{4}x + \\frac{1}{4}$' },
        ],
        hints: ['Finn først $f\'(x)$, deretter stigningstallet $f\'(x_0)$', 'Bruk ettpunktsformelen: $y - y_0 = a(x - x_0)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-4-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Produktregelen:**
$$(f \\cdot g)' = f' \\cdot g + f \\cdot g'$$

**Kvotientregelen:**
$$\\left(\\frac{f}{g}\\right)' = \\frac{f' \\cdot g - f \\cdot g'}{g^2}$$

**Viktige poenger:**
- I produktregelen adderer vi to ledd
- I kvotientregelen har vi minus i telleren (pass på rekkefølgen!)
- Kombiner med kjerneregelen når faktorene er sammensatte funksjoner
- Vurder alltid om du kan forenkle uttrykket før du deriverer`,
    },

    // GeoGebra: Visualisering
    {
      id: 'r1-4-4-geogebra',
      type: 'geogebra',
      title: 'Produktregel visualisert',
      description: 'Grafen til $f(x) = x \\cdot e^x$ og dens deriverte.',
      appType: 'graphing',
      commands: [
        'f(x) = x * exp(x)',
        'g(x) = Derivative(f)',
        'SetColor(f, "Blue")',
        'SetColor(g, "Red")',
        'SetCaption(f, "f(x) = x·eˣ")',
        'SetCaption(g, "f\'(x)")',
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_4_5: TextbookChapter = {
  id: 'r1-4-5',
  courseId: 'r1',
  chapterNumber: '4.5',
  title: 'Derivasjon av omvendte funksjoner',
  description: 'Lær sammenhengen mellom den deriverte til en funksjon og dens omvendte, og få en introduksjon til implisitt derivasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå sammenhengen mellom derivasjon av f og f⁻¹',
    'kunne bruke formelen for derivasjon av omvendte funksjoner',
    'derivere arctan x og arcsin x',
    'forstå grunnprinsippet bak implisitt derivasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-4-5-intro',
      type: 'text',
      content: `## Omvendte funksjoner og derivasjon

Hvis $f$ er en inverterbar funksjon med omvendt funksjon $f^{-1}$, hvordan finner vi den deriverte til $f^{-1}$?

For eksempel vet vi at $e^x$ og $\\ln x$ er omvendte funksjoner. Vi kjenner $(e^x)' = e^x$, men hva er $(\\ln x)'$?

I dette kapittelet utleder vi en generell formel for derivasjon av omvendte funksjoner.`,
    },

    // ========== SAMMENHENGEN MELLOM f OG f⁻¹ ==========
    {
      id: 'r1-4-5-sammenheng',
      type: 'text',
      content: `## Sammenhengen mellom $f$ og $f^{-1}$

Husk at $f$ og $f^{-1}$ er omvendte funksjoner betyr at:
- $f(f^{-1}(x)) = x$ for alle $x$ i definisjonsmengden til $f^{-1}$
- $f^{-1}(f(x)) = x$ for alle $x$ i definisjonsmengden til $f$

Grafisk er $y = f^{-1}(x)$ en speiling av $y = f(x)$ om linjen $y = x$.`,
    },

    // Teorem: Derivasjon av omvendt funksjon
    {
      id: 'r1-4-5-theorem-omvendt',
      type: 'theorem',
      title: 'Derivasjon av omvendt funksjon',
      content: `La $f$ være en deriverbar funksjon med omvendt funksjon $f^{-1}$. Hvis $f'(f^{-1}(x)) \\neq 0$, så er $f^{-1}$ deriverbar og

$$(f^{-1})'(x) = \\frac{1}{f'(f^{-1}(x))}$$

Eller ekvivalent, hvis $y = f(x)$:

$$(f^{-1})'(y) = \\frac{1}{f'(x)}$$`,
    },

    // Bevis/utledning
    {
      id: 'r1-4-5-bevis',
      type: 'text',
      content: `### Utledning av formelen

Vi starter med likheten $f(f^{-1}(x)) = x$.

Deriverer vi begge sider med hensyn på $x$ og bruker kjerneregelen:

$$f'(f^{-1}(x)) \\cdot (f^{-1})'(x) = 1$$

Løser vi for $(f^{-1})'(x)$:

$$(f^{-1})'(x) = \\frac{1}{f'(f^{-1}(x))}$$`,
    },

    // Eksempel 1: Derivasjon av ln x
    {
      id: 'r1-4-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Derivasjon av ln x',
      problem: `Bruk formelen for omvendte funksjoner til å utlede at $(\\ln x)' = \\frac{1}{x}$.`,
      solution: `**Løsning:**

Vi vet at $\\ln x$ er den omvendte funksjonen til $e^x$.

La $f(x) = e^x$, slik at $f^{-1}(x) = \\ln x$.

Vi har $f'(x) = e^x$.

Formelen gir:
$$(\\ln x)' = (f^{-1})'(x) = \\frac{1}{f'(f^{-1}(x))} = \\frac{1}{e^{\\ln x}} = \\frac{1}{x}$$

**Svar:** $(\\ln x)' = \\frac{1}{x}$`,
    },

    // Eksempel 2: Derivasjon av arctan
    {
      id: 'r1-4-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Derivasjon av arctan x',
      problem: `Finn $(\\arctan x)'$.`,
      solution: `**Løsning:**

$\\arctan x$ er den omvendte funksjonen til $\\tan x$ (på intervallet $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$).

La $f(x) = \\tan x$, slik at $f^{-1}(x) = \\arctan x$.

Vi har $f'(x) = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$.

La $y = \\arctan x$, slik at $\\tan y = x$.

Formelen gir:
$$(\\arctan x)' = \\frac{1}{f'(\\arctan x)} = \\frac{1}{1 + \\tan^2(\\arctan x)} = \\frac{1}{1 + x^2}$$

**Svar:** $(\\arctan x)' = \\frac{1}{1 + x^2}$`,
    },

    // Eksempel 3: Derivasjon av arcsin
    {
      id: 'r1-4-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Derivasjon av arcsin x',
      problem: `Finn $(\\arcsin x)'$.`,
      solution: `**Løsning:**

$\\arcsin x$ er den omvendte funksjonen til $\\sin x$ (på intervallet $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$).

La $f(x) = \\sin x$, slik at $f^{-1}(x) = \\arcsin x$.

Vi har $f'(x) = \\cos x$.

La $y = \\arcsin x$, slik at $\\sin y = x$ og $y \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.

Da er $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$ (positiv fordi $y$ er i første eller fjerde kvadrant).

Formelen gir:
$$(\\arcsin x)' = \\frac{1}{\\cos(\\arcsin x)} = \\frac{1}{\\sqrt{1 - x^2}}$$

**Svar:** $(\\arcsin x)' = \\frac{1}{\\sqrt{1 - x^2}}$ for $|x| < 1$`,
    },

    // Viktige deriverte
    {
      id: 'r1-4-5-viktige',
      type: 'definition',
      title: 'Deriverte av inverse trigonometriske funksjoner',
      content: `$$\\frac{d}{dx}(\\arcsin x) = \\frac{1}{\\sqrt{1-x^2}}, \\quad |x| < 1$$

$$\\frac{d}{dx}(\\arccos x) = -\\frac{1}{\\sqrt{1-x^2}}, \\quad |x| < 1$$

$$\\frac{d}{dx}(\\arctan x) = \\frac{1}{1+x^2}$$`,
    },

    // Oppgave 1
    {
      id: 'r1-4-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-4-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\arctan(2x)$', solution: 'Kjerneregel: $f\'(x) = \\frac{1}{1+(2x)^2} \\cdot 2 = \\frac{2}{1+4x^2}$' },
          { label: 'b', task: '$g(x) = \\arcsin(x^2)$', solution: 'Kjerneregel: $g\'(x) = \\frac{1}{\\sqrt{1-(x^2)^2}} \\cdot 2x = \\frac{2x}{\\sqrt{1-x^4}}$' },
          { label: 'c', task: '$h(x) = x \\cdot \\arctan x$', solution: 'Produktregel: $h\'(x) = 1 \\cdot \\arctan x + x \\cdot \\frac{1}{1+x^2} = \\arctan x + \\frac{x}{1+x^2}$' },
        ],
        hints: ['Bruk kjerneregelen sammen med formlene for arctan og arcsin', 'Husk produktregelen når du har et produkt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== IMPLISITT DERIVASJON ==========
    {
      id: 'r1-4-5-implisitt-intro',
      type: 'text',
      content: `## Implisitt derivasjon (introduksjon)

Noen ganger er $y$ gitt implisitt som funksjon av $x$ gjennom en likning, uten at vi kan løse eksplisitt for $y$.

**Eksempel:** $x^2 + y^2 = 1$ definerer $y$ implisitt som funksjon av $x$.

**Implisitt derivasjon** lar oss finne $\\frac{dy}{dx}$ uten å løse for $y$ først.`,
    },

    // Metode
    {
      id: 'r1-4-5-metode',
      type: 'note',
      content: `**Metode for implisitt derivasjon:**

1. Deriver begge sider av likningen med hensyn på $x$
2. Husk at $y$ er en funksjon av $x$, så bruk kjerneregelen: $\\frac{d}{dx}(y^n) = ny^{n-1} \\cdot \\frac{dy}{dx}$
3. Samle alle ledd med $\\frac{dy}{dx}$ på én side
4. Løs for $\\frac{dy}{dx}$`,
    },

    // Eksempel 4: Implisitt derivasjon
    {
      id: 'r1-4-5-example-4',
      type: 'example',
      title: 'Eksempel 4: Implisitt derivasjon av sirkel',
      problem: `Gitt $x^2 + y^2 = 1$, finn $\\frac{dy}{dx}$ ved implisitt derivasjon.`,
      solution: `**Løsning:**

Vi deriverer begge sider med hensyn på $x$:

$$\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(1)$$

$$2x + 2y \\cdot \\frac{dy}{dx} = 0$$

Løser for $\\frac{dy}{dx}$:

$$2y \\cdot \\frac{dy}{dx} = -2x$$

$$\\frac{dy}{dx} = -\\frac{x}{y}$$

**Svar:** $\\frac{dy}{dx} = -\\frac{x}{y}$ (der $y \\neq 0$)

**Tolkning:** I punktet $(\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$ på sirkelen er stigningstallet $-\\frac{1/2}{\\sqrt{3}/2} = -\\frac{1}{\\sqrt{3}}$.`,
    },

    // Eksempel 5
    {
      id: 'r1-4-5-example-5',
      type: 'example',
      title: 'Eksempel 5: Implisitt derivasjon med produkt',
      problem: `Gitt $xy + y^2 = 1$, finn $\\frac{dy}{dx}$.`,
      solution: `**Løsning:**

Vi deriverer begge sider med hensyn på $x$:

For leddet $xy$ bruker vi produktregelen:
$$\\frac{d}{dx}(xy) = 1 \\cdot y + x \\cdot \\frac{dy}{dx} = y + x\\frac{dy}{dx}$$

For leddet $y^2$:
$$\\frac{d}{dx}(y^2) = 2y \\cdot \\frac{dy}{dx}$$

Så vi får:
$$y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$$

Samler ledd med $\\frac{dy}{dx}$:
$$(x + 2y)\\frac{dy}{dx} = -y$$

$$\\frac{dy}{dx} = -\\frac{y}{x + 2y}$$

**Svar:** $\\frac{dy}{dx} = -\\frac{y}{x + 2y}$ (der $x + 2y \\neq 0$)`,
    },

    // Oppgave 2
    {
      id: 'r1-4-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-4-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk implisitt derivasjon til å finne $\\frac{dy}{dx}$.',
        subTasks: [
          { label: 'a', task: '$x^2 - y^2 = 4$', solution: '$2x - 2y\\frac{dy}{dx} = 0$, så $\\frac{dy}{dx} = \\frac{x}{y}$' },
          { label: 'b', task: '$x^3 + y^3 = 6xy$', solution: '$3x^2 + 3y^2\\frac{dy}{dx} = 6y + 6x\\frac{dy}{dx}$. $(3y^2 - 6x)\\frac{dy}{dx} = 6y - 3x^2$. $\\frac{dy}{dx} = \\frac{6y - 3x^2}{3y^2 - 6x} = \\frac{2y - x^2}{y^2 - 2x}$' },
          { label: 'c', task: '$\\sin(xy) = x$', solution: '$\\cos(xy) \\cdot (y + x\\frac{dy}{dx}) = 1$. $y\\cos(xy) + x\\cos(xy)\\frac{dy}{dx} = 1$. $\\frac{dy}{dx} = \\frac{1 - y\\cos(xy)}{x\\cos(xy)}$' },
        ],
        hints: ['Husk at $y$ er en funksjon av $x$', 'Bruk produktregelen når $x$ og $y$ multipliseres'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r1-4-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-4-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tangentens likning til kurven i det gitte punktet.',
        subTasks: [
          { label: 'a', task: '$x^2 + y^2 = 25$ i punktet $(3, 4)$', solution: '$\\frac{dy}{dx} = -\\frac{x}{y} = -\\frac{3}{4}$. Tangent: $y - 4 = -\\frac{3}{4}(x - 3)$, altså $y = -\\frac{3}{4}x + \\frac{25}{4}$ eller $3x + 4y = 25$' },
          { label: 'b', task: '$xy = 6$ i punktet $(2, 3)$', solution: '$y + x\\frac{dy}{dx} = 0$, så $\\frac{dy}{dx} = -\\frac{y}{x} = -\\frac{3}{2}$. Tangent: $y - 3 = -\\frac{3}{2}(x - 2)$, altså $y = -\\frac{3}{2}x + 6$' },
        ],
        hints: ['Finn først $\\frac{dy}{dx}$ ved implisitt derivasjon', 'Sett inn koordinatene for å finne stigningstallet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4: Utfordring
    {
      id: 'r1-4-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-4-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver med inverse funksjoner.',
        subTasks: [
          { label: 'a', task: 'La $f(x) = x^3 + x$. Vis at $f$ har en omvendt funksjon, og finn $(f^{-1})\'(2)$.', solution: '$f\'(x) = 3x^2 + 1 > 0$ for alle $x$, så $f$ er strengt voksende og har omvendt funksjon. $f(1) = 2$, så $f^{-1}(2) = 1$. $(f^{-1})\'(2) = \\frac{1}{f\'(f^{-1}(2))} = \\frac{1}{f\'(1)} = \\frac{1}{4}$' },
          { label: 'b', task: 'Deriver $f(x) = \\arctan(e^x)$', solution: '$f\'(x) = \\frac{1}{1+(e^x)^2} \\cdot e^x = \\frac{e^x}{1+e^{2x}}$' },
        ],
        hints: ['For (a): Finn først $f\'(x)$ og vis at den alltid er positiv', 'For å finne $(f^{-1})\'(y)$, finn først $x$ slik at $f(x) = y$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-4-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-4-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\arccos(2x)$', solution: '$f\'(x) = -\\frac{1}{\\sqrt{1-(2x)^2}} \\cdot 2 = -\\frac{2}{\\sqrt{1-4x^2}}$' },
          { label: 'b', task: '$g(x) = \\arctan(\\ln x)$', solution: '$g\'(x) = \\frac{1}{1+(\\ln x)^2} \\cdot \\frac{1}{x} = \\frac{1}{x(1+(\\ln x)^2)}$' },
          { label: 'c', task: '$h(x) = \\arcsin(\\sin x)$', solution: 'For $x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$: $h(x) = x$, så $h\'(x) = 1$. Generelt: $h\'(x) = \\frac{\\cos x}{|\\cos x|}$ (med unntak der $\\cos x = 0$)' },
        ],
        hints: ['Bruk kjerneregelen', 'Husk de deriverte for arcsin, arccos og arctan'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-4-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Derivasjon av omvendt funksjon:**
$$(f^{-1})'(x) = \\frac{1}{f'(f^{-1}(x))}$$

**Viktige deriverte:**
- $(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}}$
- $(\\arccos x)' = -\\frac{1}{\\sqrt{1-x^2}}$
- $(\\arctan x)' = \\frac{1}{1+x^2}$

**Implisitt derivasjon:**
- Deriver begge sider av likningen med hensyn på $x$
- Husk at $\\frac{d}{dx}(y) = \\frac{dy}{dx}$ (kjerneregel)
- Løs for $\\frac{dy}{dx}$`,
    },

    // GeoGebra
    {
      id: 'r1-4-5-geogebra',
      type: 'geogebra',
      title: 'Omvendte funksjoner',
      description: 'Grafen til $f(x) = e^x$ og $f^{-1}(x) = \\ln x$, speilet om $y = x$.',
      appType: 'graphing',
      commands: [
        'f(x) = exp(x)',
        'g(x) = ln(x)',
        'h(x) = x',
        'SetColor(f, "Blue")',
        'SetColor(g, "Red")',
        'SetColor(h, "Gray")',
        'SetLineStyle(h, 1)',
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_4_6: TextbookChapter = {
  id: 'r1-4-6',
  courseId: 'r1',
  chapterNumber: '4.6',
  title: 'Funksjonsdrøfting',
  description: 'Lær å analysere funksjoner fullstendig: monotoniegenskaper, ekstremalpunkter, vendepunkter og asymptoter.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bestemme monotoniegenskaper ved hjelp av den deriverte',
    'finne og klassifisere ekstremalpunkter',
    'finne vendepunkter ved hjelp av andrederiverte',
    'bestemme asymptoter (vertikale, horisontale og skrå)',
    'utføre fullstendig funksjonsdrøfting',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-4-6-intro',
      type: 'text',
      content: `## Hva er funksjonsdrøfting?

Funksjonsdrøfting handler om å analysere en funksjon systematisk for å forstå dens oppførsel. Vi undersøker:

1. **Definisjonsmengde** - Hvor er funksjonen definert?
2. **Nullpunkter** - Hvor krysser grafen $x$-aksen?
3. **Monotoniegenskaper** - Hvor er funksjonen voksende/avtagende?
4. **Ekstremalpunkter** - Hvor har funksjonen topp- og bunnpunkter?
5. **Vendepunkter** - Hvor endrer grafen krumning?
6. **Asymptoter** - Hvordan oppfører funksjonen seg mot grensene?

Med denne informasjonen kan vi tegne en nøyaktig skisse av grafen.`,
    },
    {
      id: 'r1-4-6-ekstremalpunkt-bilde',
      type: 'image',
      src: '/images/r1/ekstremalpunkt.svg',
      alt: 'Illustrasjon av ekstremalpunkter - maksimum og minimum',
      caption: 'Ekstremalpunkter - topp- og bunnpunkter pa en graf',
    },
    {
      id: 'r1-4-6-vendepunkt-bilde',
      type: 'image',
      src: '/images/r1/vendepunkt.svg',
      alt: 'Illustrasjon av vendepunkt der krumningen endrer retning',
      caption: 'Vendepunkt - grafen endrer krumning',
    },

    // ========== MONOTONIEGENSKAPER ==========
    {
      id: 'r1-4-6-monotoni-intro',
      type: 'text',
      content: `## Monotoniegenskaper

Den deriverte $f'(x)$ forteller oss om funksjonen er voksende eller avtagende.`,
    },

    // Teorem: Monotoni
    {
      id: 'r1-4-6-theorem-monotoni',
      type: 'theorem',
      title: 'Monotoniteoremet',
      content: `La $f$ være en deriverbar funksjon på et intervall $I$.

- Hvis $f'(x) > 0$ for alle $x$ i $I$, så er $f$ **strengt voksende** på $I$
- Hvis $f'(x) < 0$ for alle $x$ i $I$, så er $f$ **strengt avtagende** på $I$
- Hvis $f'(x) = 0$ for alle $x$ i $I$, så er $f$ **konstant** på $I$`,
    },

    // Metode
    {
      id: 'r1-4-6-metode-monotoni',
      type: 'note',
      content: `**Metode for å finne monotoniintervaller:**

1. Finn $f'(x)$
2. Løs $f'(x) = 0$ for å finne stasjonære punkter
3. Sett opp et fortegnsskjema for $f'(x)$
4. Les av intervallene hvor $f'(x) > 0$ (voksende) og $f'(x) < 0$ (avtagende)`,
    },

    // Eksempel 1
    {
      id: 'r1-4-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Monotoniegenskaper',
      problem: `Finn monotoniintervallene til $f(x) = x^3 - 3x$.`,
      solution: `**Løsning:**

**Steg 1:** Finn den deriverte
$$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$$

**Steg 2:** Løs $f'(x) = 0$
$$3(x-1)(x+1) = 0$$
$$x = -1 \\quad \\text{eller} \\quad x = 1$$

**Steg 3:** Fortegnsskjema

| $x$ | $(-\\infty, -1)$ | $-1$ | $(-1, 1)$ | $1$ | $(1, \\infty)$ |
|-----|-----------------|------|-----------|-----|----------------|
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f$ | $\\nearrow$ | | $\\searrow$ | | $\\nearrow$ |

**Svar:**
- $f$ er strengt voksende på $(-\\infty, -1)$ og $(1, \\infty)$
- $f$ er strengt avtagende på $(-1, 1)$`,
    },

    // ========== EKSTREMALPUNKTER ==========
    {
      id: 'r1-4-6-ekstrem-intro',
      type: 'text',
      content: `## Ekstremalpunkter

Et **ekstremalpunkt** er et punkt der funksjonen har en lokal maksimum- eller minimumsverdi.`,
    },

    // Teorem: Ekstremalpunkter
    {
      id: 'r1-4-6-theorem-ekstrem',
      type: 'theorem',
      title: 'Første derivasjonstest',
      content: `La $c$ være et stasjonært punkt for $f$ (dvs. $f'(c) = 0$).

- Hvis $f'(x)$ skifter fra positiv til negativ i $x = c$, har $f$ et **lokalt maksimum** i $c$
- Hvis $f'(x)$ skifter fra negativ til positiv i $x = c$, har $f$ et **lokalt minimum** i $c$
- Hvis $f'(x)$ ikke skifter fortegn i $x = c$, har $f$ **ikke ekstremalpunkt** i $c$ (terrassepunkt)`,
    },

    // Andre derivasjonstest
    {
      id: 'r1-4-6-theorem-andre',
      type: 'theorem',
      title: 'Andre derivasjonstest',
      content: `La $c$ være et stasjonært punkt for $f$ (dvs. $f'(c) = 0$).

- Hvis $f''(c) < 0$, har $f$ et **lokalt maksimum** i $c$
- Hvis $f''(c) > 0$, har $f$ et **lokalt minimum** i $c$
- Hvis $f''(c) = 0$, gir testen ingen konklusjon (bruk første derivasjonstest)`,
    },

    // Eksempel 2
    {
      id: 'r1-4-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Ekstremalpunkter',
      problem: `Finn ekstremalpunktene til $f(x) = x^3 - 3x$ fra forrige eksempel.`,
      solution: `**Løsning:**

Fra forrige eksempel har vi $f'(x) = 3x^2 - 3$ med nullpunkter $x = -1$ og $x = 1$.

**Metode 1: Fortegnsskjema**
Fra fortegnsskjemaet ser vi at:
- $f'(x)$ skifter fra $+$ til $-$ i $x = -1$ → lokalt maksimum
- $f'(x)$ skifter fra $-$ til $+$ i $x = 1$ → lokalt minimum

**Metode 2: Andre derivasjonstest**
$$f''(x) = 6x$$
- $f''(-1) = -6 < 0$ → lokalt maksimum i $x = -1$
- $f''(1) = 6 > 0$ → lokalt minimum i $x = 1$

**Ekstremalpunktene:**
- Lokalt maksimum: $(-1, f(-1)) = (-1, 2)$
- Lokalt minimum: $(1, f(1)) = (1, -2)$`,
    },

    // Oppgave 1
    {
      id: 'r1-4-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-4-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn monotoniintervaller og ekstremalpunkter.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 4x + 3$', solution: '$f\'(x) = 2x - 4 = 0 \\Rightarrow x = 2$. $f\' < 0$ for $x < 2$, $f\' > 0$ for $x > 2$. Avtagende på $(-\\infty, 2)$, voksende på $(2, \\infty)$. Lokalt minimum i $(2, -1)$.' },
          { label: 'b', task: '$g(x) = x^3 - 12x$', solution: '$g\'(x) = 3x^2 - 12 = 0 \\Rightarrow x = \\pm 2$. Voksende på $(-\\infty, -2)$ og $(2, \\infty)$, avtagende på $(-2, 2)$. Lokalt maksimum i $(-2, 16)$, lokalt minimum i $(2, -16)$.' },
          { label: 'c', task: '$h(x) = x^4 - 8x^2$', solution: '$h\'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 0 \\Rightarrow x = 0, \\pm 2$. Lokalt maksimum i $(0, 0)$, lokale minima i $(\\pm 2, -16)$.' },
        ],
        hints: ['Finn først $f\'(x) = 0$', 'Sett opp fortegnsskjema'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VENDEPUNKTER ==========
    {
      id: 'r1-4-6-vende-intro',
      type: 'text',
      content: `## Vendepunkter

Et **vendepunkt** er et punkt der grafen endrer krumning - fra konkav (buet nedover) til konveks (buet oppover), eller omvendt.`,
    },

    // Teorem: Vendepunkter
    {
      id: 'r1-4-6-theorem-vende',
      type: 'theorem',
      title: 'Vendepunkter',
      content: `La $f$ være to ganger deriverbar.

Et punkt $(c, f(c))$ er et **vendepunkt** for $f$ hvis $f''(c) = 0$ og $f''(x)$ skifter fortegn i $x = c$.

**Krumning:**
- Hvis $f''(x) > 0$, er grafen **konveks** (buet oppover, smiler)
- Hvis $f''(x) < 0$, er grafen **konkav** (buet nedover, sur)`,
    },

    // Eksempel 3
    {
      id: 'r1-4-6-example-3',
      type: 'example',
      title: 'Eksempel 3: Vendepunkter',
      problem: `Finn vendepunktene til $f(x) = x^3 - 3x$.`,
      solution: `**Løsning:**

**Steg 1:** Finn andrederiverte
$$f'(x) = 3x^2 - 3$$
$$f''(x) = 6x$$

**Steg 2:** Løs $f''(x) = 0$
$$6x = 0 \\Rightarrow x = 0$$

**Steg 3:** Sjekk fortegnskifte
- For $x < 0$: $f''(x) = 6x < 0$ (konkav)
- For $x > 0$: $f''(x) = 6x > 0$ (konveks)

$f''(x)$ skifter fortegn i $x = 0$, så dette er et vendepunkt.

**Steg 4:** Finn koordinatene
$$f(0) = 0^3 - 3 \\cdot 0 = 0$$

**Svar:** Vendepunkt i $(0, 0)$.`,
    },

    // Oppgave 2
    {
      id: 'r1-4-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-4-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn vendepunktene til funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^3 - 6x^2 + 9x$', solution: '$f\'(x) = 3x^2 - 12x + 9$, $f\'\'(x) = 6x - 12 = 0 \\Rightarrow x = 2$. $f(2) = 2$. Vendepunkt i $(2, 2)$.' },
          { label: 'b', task: '$g(x) = x^4 - 6x^2$', solution: '$g\'(x) = 4x^3 - 12x$, $g\'\'(x) = 12x^2 - 12 = 0 \\Rightarrow x = \\pm 1$. $g(\\pm 1) = -5$. Vendepunkter i $(1, -5)$ og $(-1, -5)$.' },
          { label: 'c', task: '$h(x) = e^{-x^2}$', solution: '$h\'(x) = -2xe^{-x^2}$, $h\'\'(x) = (4x^2 - 2)e^{-x^2} = 0 \\Rightarrow x = \\pm \\frac{1}{\\sqrt{2}}$. Vendepunkter i $(\\pm \\frac{1}{\\sqrt{2}}, e^{-1/2})$.' },
        ],
        hints: ['Finn $f\'\'(x)$ og løs $f\'\'(x) = 0$', 'Sjekk at $f\'\'(x)$ faktisk skifter fortegn'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ASYMPTOTER ==========
    {
      id: 'r1-4-6-asymp-intro',
      type: 'text',
      content: `## Asymptoter

En **asymptote** er en linje som grafen nærmer seg mer og mer, uten nødvendigvis å krysse den.`,
    },

    // Definisjon: Asymptoter
    {
      id: 'r1-4-6-def-asymp',
      type: 'definition',
      title: 'Typer asymptoter',
      content: `**Vertikal asymptote** $x = a$:
$$\\lim_{x \\to a^+} f(x) = \\pm \\infty \\quad \\text{eller} \\quad \\lim_{x \\to a^-} f(x) = \\pm \\infty$$

**Horisontal asymptote** $y = b$:
$$\\lim_{x \\to \\infty} f(x) = b \\quad \\text{eller} \\quad \\lim_{x \\to -\\infty} f(x) = b$$

**Skrå asymptote** $y = ax + b$ (der $a \\neq 0$):
$$\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$$`,
    },

    // Metode for skrå asymptote
    {
      id: 'r1-4-6-metode-skraa',
      type: 'note',
      content: `**Finne skrå asymptote $y = ax + b$:**

1. $a = \\lim_{x \\to \\infty} \\frac{f(x)}{x}$
2. $b = \\lim_{x \\to \\infty} [f(x) - ax]$

Hvis $a = 0$, har vi en horisontal asymptote $y = b$.
Hvis grensene ikke eksisterer, har vi ingen asymptote i den retningen.`,
    },

    // Eksempel 4
    {
      id: 'r1-4-6-example-4',
      type: 'example',
      title: 'Eksempel 4: Asymptoter',
      problem: `Finn asymptotene til $f(x) = \\frac{x^2 - 1}{x - 2}$.`,
      solution: `**Løsning:**

**Vertikal asymptote:**
Nevneren er null når $x = 2$.
$$\\lim_{x \\to 2^+} \\frac{x^2 - 1}{x - 2} = \\frac{3}{0^+} = +\\infty$$

Vertikal asymptote: $x = 2$

**Skrå asymptote:**
Vi utfører polynomdivisjon:
$$\\frac{x^2 - 1}{x - 2} = x + 2 + \\frac{3}{x - 2}$$

Når $x \\to \\pm\\infty$: $\\frac{3}{x-2} \\to 0$

Skrå asymptote: $y = x + 2$

**Svar:**
- Vertikal asymptote: $x = 2$
- Skrå asymptote: $y = x + 2$`,
    },

    // Eksempel 5
    {
      id: 'r1-4-6-example-5',
      type: 'example',
      title: 'Eksempel 5: Horisontal asymptote',
      problem: `Finn asymptotene til $f(x) = \\frac{2x + 1}{x - 1}$.`,
      solution: `**Løsning:**

**Vertikal asymptote:**
Nevneren er null når $x = 1$.
$$\\lim_{x \\to 1} \\frac{2x + 1}{x - 1} = \\frac{3}{0}$$

Vertikal asymptote: $x = 1$

**Horisontal asymptote:**
$$\\lim_{x \\to \\infty} \\frac{2x + 1}{x - 1} = \\lim_{x \\to \\infty} \\frac{2 + \\frac{1}{x}}{1 - \\frac{1}{x}} = \\frac{2}{1} = 2$$

Horisontal asymptote: $y = 2$

**Svar:**
- Vertikal asymptote: $x = 1$
- Horisontal asymptote: $y = 2$`,
    },

    // Oppgave 3
    {
      id: 'r1-4-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-4-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn asymptotene til funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{1}{x - 3}$', solution: 'Vertikal asymptote: $x = 3$. Horisontal asymptote: $y = 0$.' },
          { label: 'b', task: '$g(x) = \\frac{x + 2}{x - 1}$', solution: 'Vertikal asymptote: $x = 1$. Horisontal asymptote: $y = 1$ (samme grad i teller og nevner).' },
          { label: 'c', task: '$h(x) = \\frac{x^2}{x + 1}$', solution: 'Vertikal asymptote: $x = -1$. Skrå asymptote: $y = x - 1$ (polynomdivisjon gir $h(x) = x - 1 + \\frac{1}{x+1}$).' },
        ],
        hints: ['Vertikale asymptoter: Hvor blir nevneren null?', 'Sammenlign gradene i teller og nevner for horisontale/skrå asymptoter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FULLSTENDIG FUNKSJONSDRØFTING ==========
    {
      id: 'r1-4-6-fullstendig-intro',
      type: 'text',
      content: `## Fullstendig funksjonsdrøfting

Nå skal vi sette alt sammen i en systematisk analyse av en funksjon.`,
    },

    // Sjekkliste
    {
      id: 'r1-4-6-sjekkliste',
      type: 'tip',
      content: `**Sjekkliste for fullstendig funksjonsdrøfting:**

1. **Definisjonsmengde** - Hvor er $f$ definert?
2. **Symmetri** - Er $f$ partall eller oddetall?
3. **Nullpunkter** - Løs $f(x) = 0$
4. **Asymptoter** - Vertikale, horisontale, skrå
5. **Førstederiverte** - Finn $f'(x)$
6. **Stasjonære punkter** - Løs $f'(x) = 0$
7. **Monotoni** - Fortegnsskjema for $f'(x)$
8. **Ekstremalpunkter** - Klassifiser stasjonære punkter
9. **Andrederiverte** - Finn $f''(x)$
10. **Vendepunkter** - Løs $f''(x) = 0$, sjekk fortegnskifte
11. **Skisse** - Tegn grafen med all informasjon`,
    },

    // Eksempel 6: Fullstendig drøfting
    {
      id: 'r1-4-6-example-6',
      type: 'example',
      title: 'Eksempel 6: Fullstendig funksjonsdrøfting',
      problem: `Utfør fullstendig drøfting av $f(x) = \\frac{x^2}{x - 1}$.`,
      solution: `**Løsning:**

**1. Definisjonsmengde:** $D_f = \\mathbb{R} \\setminus \\{1\\}$

**2. Symmetri:** $f(-x) = \\frac{x^2}{-x-1} \\neq f(x)$ og $\\neq -f(x)$. Ingen symmetri.

**3. Nullpunkter:** $f(x) = 0 \\Rightarrow x^2 = 0 \\Rightarrow x = 0$

**4. Asymptoter:**
- Vertikal: $x = 1$ (nevner $= 0$)
- Skrå: $f(x) = x + 1 + \\frac{1}{x-1}$, så $y = x + 1$

**5. Førstederiverte:**
$$f'(x) = \\frac{2x(x-1) - x^2 \\cdot 1}{(x-1)^2} = \\frac{x^2 - 2x}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2}$$

**6. Stasjonære punkter:** $f'(x) = 0 \\Rightarrow x = 0$ eller $x = 2$

**7. Monotoni:** $f'(x) > 0$ for $x < 0$ og $x > 2$, $f'(x) < 0$ for $0 < x < 2$ (unntatt $x = 1$)

**8. Ekstremalpunkter:**
- Lokalt maksimum i $(0, 0)$
- Lokalt minimum i $(2, 4)$

**9. Andrederiverte:**
$$f''(x) = \\frac{2}{(x-1)^3}$$

**10. Vendepunkter:** $f''(x) \\neq 0$ for alle $x \\neq 1$. Ingen vendepunkter.

**Skisse:** Grafen har en vertikal asymptote ved $x = 1$, en skrå asymptote $y = x + 1$, et lokalt maksimum i origo, og et lokalt minimum i $(2, 4)$.`,
    },

    // Oppgave 4
    {
      id: 'r1-4-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-4-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfør fullstendig funksjonsdrøfting.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^3 - 3x^2$', solution: 'Nullpunkter: $x = 0, 3$. $f\'(x) = 3x^2 - 6x = 3x(x-2)$. Lokalt maks i $(0,0)$, lokalt min i $(2,-4)$. $f\'\'(x) = 6x - 6$. Vendepunkt i $(1, -2)$.' },
          { label: 'b', task: '$g(x) = xe^{-x}$', solution: '$g\'(x) = e^{-x}(1-x)$. Lokalt maks i $(1, e^{-1})$. $g\'\'(x) = e^{-x}(x-2)$. Vendepunkt i $(2, 2e^{-2})$. Horisontal asymptote $y = 0$ når $x \\to \\infty$.' },
        ],
        hints: ['Følg sjekklisten systematisk', 'Bruk GeoGebra til å verifisere skissen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-4-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-4-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fullstendig funksjonsdrøfting med rasjonale funksjoner.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{x}{x^2 + 1}$', solution: 'Nullpunkt: $x = 0$. Ingen vertikale asymptoter. Horisontal asymptote $y = 0$. $f\'(x) = \\frac{1-x^2}{(x^2+1)^2}$. Lokalt maks i $(1, \\frac{1}{2})$, lokalt min i $(-1, -\\frac{1}{2})$. Odde funksjon, symmetrisk om origo.' },
          { label: 'b', task: '$g(x) = \\frac{x^2 - 4}{x^2 - 1}$', solution: 'Nullpunkter: $x = \\pm 2$. Vertikale asymptoter: $x = \\pm 1$. Horisontal asymptote: $y = 1$. Partall funksjon. Lokalt maks i $(0, 4)$.' },
        ],
        hints: ['Sjekk symmetri først - det kan forenkle arbeidet', 'Husk å sjekke grenseverdier mot asymptotene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r1-4-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-4-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk GeoGebra til å verifisere svarene dine fra oppgave 4 og 5. Sammenlign din skisse med GeoGebra-grafen.',
        subTasks: [
          { label: 'a', task: 'Tegn $f(x) = x^3 - 3x^2$ i GeoGebra. Marker nullpunkter, ekstremalpunkter og vendepunkt.', solution: 'Bruk kommandoene: f(x) = x^3 - 3x^2, Roots(f), Extremum(f), InflectionPoint(f)' },
          { label: 'b', task: 'Tegn $g(x) = xe^{-x}$ i GeoGebra. Finn ekstremalpunkt og vendepunkt numerisk.', solution: 'Bruk kommandoene: g(x) = x*exp(-x), Extremum(g), InflectionPoint(g). Maks ca. (1, 0.368), vendepunkt ca. (2, 0.271)' },
        ],
        hints: ['I GeoGebra kan du bruke Derivative(f) for å se den deriverte', 'Zoom inn på interessante områder'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-4-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-4-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver.',
        subTasks: [
          { label: 'a', task: 'Finn $a$ og $b$ slik at $f(x) = ax^3 + bx^2$ har et vendepunkt i $(1, 2)$.', solution: '$f(1) = a + b = 2$ og $f\'\'(x) = 6ax + 2b$, $f\'\'(1) = 6a + 2b = 0$. Fra andre likning: $b = -3a$. Innsatt: $a - 3a = -2a = 2$, så $a = -1$, $b = 3$.' },
          { label: 'b', task: 'Vis at grafen til $f(x) = x^3 - 3x$ alltid passerer gjennom sitt vendepunkt med stigningstall $-3$.', solution: 'Vendepunkt i $(0, 0)$. $f\'(0) = 3 \\cdot 0^2 - 3 = -3$. Tangenten i vendepunktet: $y = -3x$, som stemmer med at $f(0) = 0$ og $f\'(0) = -3$.' },
        ],
        hints: ['For (a): Bruk at vendepunktet er på grafen og at $f\'\'(1) = 0$', 'For (b): Finn vendepunktet og beregn stigningstallet der'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-4-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Monotoni:**
- $f'(x) > 0$ → $f$ voksende
- $f'(x) < 0$ → $f$ avtagende

**Ekstremalpunkter:**
- $f'(c) = 0$ og fortegnskifte → ekstremalpunkt
- $f''(c) > 0$ → minimum, $f''(c) < 0$ → maksimum

**Vendepunkter:**
- $f''(c) = 0$ og fortegnskifte i $f''$ → vendepunkt
- $f''(x) > 0$ → konveks, $f''(x) < 0$ → konkav

**Asymptoter:**
- Vertikal: der nevneren blir null
- Horisontal: $\\lim_{x \\to \\pm\\infty} f(x)$
- Skrå: $y = ax + b$ der $a = \\lim \\frac{f(x)}{x}$, $b = \\lim(f(x) - ax)$`,
    },

    // GeoGebra
    {
      id: 'r1-4-6-geogebra',
      type: 'geogebra',
      title: 'Funksjonsdrøfting visualisert',
      description: 'Grafen til $f(x) = x^3 - 3x$ med ekstremalpunkter og vendepunkt.',
      appType: 'graphing',
      commands: [
        'f(x) = x^3 - 3x',
        'f1(x) = Derivative(f)',
        'f2(x) = Derivative(f1)',
        'A = Extremum(f)',
        'B = InflectionPoint(f)',
        'SetColor(f, "Blue")',
        'SetColor(f1, "Red")',
        'SetColor(f2, "Green")',
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.7: Relaterte rater
// ============================================================================

export const CHAPTER_R1_4_7: TextbookChapter = {
  id: 'r1-4-7',
  courseId: 'r1',
  chapterNumber: '4.7',
  title: 'Relaterte rater',
  description: 'Lær å bruke derivasjon til å løse problemer der flere størrelser endrer seg samtidig.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå begrepene vekstfart, grenseverdi, derivasjon og kontinuitet, og bruke disse for å løse praktiske problemer',
  ],
  content: [
    {
      id: 'r1-4-7-intro',
      type: 'text',
      content: `## Hva er relaterte rater?

**Relaterte rater** er problemer der flere størrelser endrer seg med tiden, og disse størrelsene er knyttet sammen gjennom en ligning.

**Typiske problemer:**
- En ballong blåses opp – hvordan endres radiusen når volumet øker?
- En stige sklir ned en vegg – hvor fort beveger toppen seg?
- Vann fylles i en tank – hvor fort stiger vannstanden?

**Nøkkelidé:** Vi deriverer en ligning med hensyn på tid $t$ for å finne sammenhengen mellom endringsratene.`,
    },
    {
      id: 'r1-4-7-def-1',
      type: 'definition',
      title: 'Fremgangsmåte for relaterte rater',
      content: `**Steg 1:** Tegn en figur og definer variabler.

**Steg 2:** Skriv ned det som er gitt og det du skal finne (med $\\frac{d}{dt}$-notasjon).

**Steg 3:** Finn en ligning som knytter variablene sammen.

**Steg 4:** Deriver ligningen implisitt med hensyn på $t$.

**Steg 5:** Sett inn kjente verdier og løs for den ukjente raten.`,
    },
    {
      id: 'r1-4-7-example-1',
      type: 'example',
      title: 'Eksempel 1: Ballongen',
      problem: `En kuleformet ballong blåses opp slik at volumet øker med $100 \\text{ cm}^3/\\text{s}$. Hvor fort øker radiusen når radiusen er $25$ cm?`,
      solution: `**Steg 1-2: Definer variabler**
- $V$ = volum av kule, $r$ = radius
- Gitt: $\\frac{dV}{dt} = 100$ cm³/s
- Finn: $\\frac{dr}{dt}$ når $r = 25$ cm

**Steg 3: Ligning som knytter $V$ og $r$**
$$V = \\frac{4}{3}\\pi r^3$$

**Steg 4: Deriver med hensyn på $t$**
$$\\frac{dV}{dt} = \\frac{4}{3}\\pi \\cdot 3r^2 \\cdot \\frac{dr}{dt} = 4\\pi r^2 \\frac{dr}{dt}$$

**Steg 5: Sett inn og løs**
$$100 = 4\\pi (25)^2 \\frac{dr}{dt}$$
$$\\frac{dr}{dt} = \\frac{100}{4\\pi \\cdot 625} = \\frac{1}{25\\pi} \\approx 0{,}013 \\text{ cm/s}$$

**Svar:** Radiusen øker med ca. $0{,}013$ cm/s.`,
    },
    {
      id: 'r1-4-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Stigen',
      problem: `En 5 meter lang stige står mot en vegg. Bunnen av stigen sklir utover med $0{,}5$ m/s. Hvor fort synker toppen av stigen når bunnen er 3 meter fra veggen?`,
      solution: `**Steg 1-2: Definer variabler**
- $x$ = avstand fra vegg til bunnen av stigen
- $y$ = høyde av stigens topp
- Gitt: $\\frac{dx}{dt} = 0{,}5$ m/s
- Finn: $\\frac{dy}{dt}$ når $x = 3$ m

**Steg 3: Ligning (Pytagoras)**
$$x^2 + y^2 = 25$$

Når $x = 3$: $y = \\sqrt{25 - 9} = 4$ m

**Steg 4: Deriver med hensyn på $t$**
$$2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$$

**Steg 5: Sett inn og løs**
$$2(3)(0{,}5) + 2(4)\\frac{dy}{dt} = 0$$
$$3 + 8\\frac{dy}{dt} = 0$$
$$\\frac{dy}{dt} = -\\frac{3}{8} = -0{,}375 \\text{ m/s}$$

**Svar:** Toppen synker med $0{,}375$ m/s (negativt fortegn = synker).`,
    },
    {
      id: 'r1-4-7-example-3',
      type: 'example',
      title: 'Eksempel 3: Kjegleformet tank',
      problem: `Vann renner inn i en kjegleformet tank med rate $2 \\text{ m}^3/\\text{min}$. Kjeglen har høyde 6 m og radius 3 m på toppen. Hvor fort stiger vannstanden når vannet er 2 m dypt?`,
      solution: `**Steg 1-2: Definer variabler**
- $h$ = vannhøyde, $r$ = vannradius
- Gitt: $\\frac{dV}{dt} = 2$ m³/min
- Finn: $\\frac{dh}{dt}$ når $h = 2$ m

**Steg 3: Ligninger**
Fra likedannede trekanter: $\\frac{r}{h} = \\frac{3}{6} = \\frac{1}{2}$, så $r = \\frac{h}{2}$

Volum av kjegle: $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{h}{2}\\right)^2 h = \\frac{\\pi h^3}{12}$

**Steg 4: Deriver med hensyn på $t$**
$$\\frac{dV}{dt} = \\frac{\\pi}{12} \\cdot 3h^2 \\frac{dh}{dt} = \\frac{\\pi h^2}{4} \\frac{dh}{dt}$$

**Steg 5: Sett inn og løs**
$$2 = \\frac{\\pi (2)^2}{4} \\frac{dh}{dt} = \\pi \\frac{dh}{dt}$$
$$\\frac{dh}{dt} = \\frac{2}{\\pi} \\approx 0{,}64 \\text{ m/min}$$

**Svar:** Vannstanden stiger med ca. $0{,}64$ m/min.`,
    },
    {
      id: 'r1-4-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r1-4-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Løs følgende relaterte rater-problemer.',
        subTasks: [
          { label: 'a', task: 'En sirkulær oljelekkasje på havet utvider seg slik at arealet øker med $10 \\text{ m}^2/\\text{s}$. Hvor fort øker radiusen når radiusen er 20 m?', solution: '$A = \\pi r^2$, $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$. $10 = 2\\pi(20)\\frac{dr}{dt}$. $\\frac{dr}{dt} = \\frac{1}{4\\pi} \\approx 0{,}08$ m/s' },
          { label: 'b', task: 'En kube utvider seg slik at kantlengden øker med 2 cm/s. Hvor fort øker volumet når kantlengden er 10 cm?', solution: '$V = s^3$, $\\frac{dV}{dt} = 3s^2\\frac{ds}{dt} = 3(100)(2) = 600$ cm³/s' },
        ],
        hints: ['Identifiser ligningen som knytter variablene sammen', 'Husk kjerneregelen når du deriverer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-4-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r1-4-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En person 1,8 m høy går bort fra en gatelykt som er 6 m høy, med hastighet 1,5 m/s.',
        subTasks: [
          { label: 'a', task: 'Tegn figuren og finn en ligning som knytter personens avstand fra lykten ($x$) til skyggens lengde ($s$).', solution: 'Fra likedannede trekanter: $\\frac{6}{x+s} = \\frac{1{,}8}{s}$. Gir $6s = 1{,}8x + 1{,}8s$, altså $s = \\frac{3x}{7}$.' },
          { label: 'b', task: 'Hvor fort beveger skyggens spiss seg?', solution: 'Spissens posisjon er $x + s = x + \\frac{3x}{7} = \\frac{10x}{7}$. $\\frac{d(x+s)}{dt} = \\frac{10}{7}\\frac{dx}{dt} = \\frac{10}{7}(1{,}5) \\approx 2{,}14$ m/s.' },
        ],
        hints: ['Bruk likedannede trekanter for å finne sammenhengen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-4-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Relaterte rater:**
Problemer der flere variable endrer seg med tiden og er knyttet sammen.

**Fremgangsmåte:**
1. Tegn figur og definer variabler
2. Skriv ned gitt informasjon med $\\frac{d}{dt}$-notasjon
3. Finn ligning som kobler variablene
4. Deriver implisitt med hensyn på $t$
5. Sett inn verdier og løs

**Vanlige formler:**
- Sirkel: $A = \\pi r^2$
- Kule: $V = \\frac{4}{3}\\pi r^3$
- Kjegle: $V = \\frac{1}{3}\\pi r^2 h$
- Pytagoras: $a^2 + b^2 = c^2$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.8: Globale ekstremalpunkter
// ============================================================================

export const CHAPTER_R1_4_8: TextbookChapter = {
  id: 'r1-4-8',
  courseId: 'r1',
  chapterNumber: '4.8',
  title: 'Globale ekstremalpunkter',
  description: 'Lær å finne absolutte maksimums- og minimumsverdier på lukkede intervaller.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og tolke ulike funksjoner ved å bruke derivasjon',
    'forstå begrepene vekstfart, grenseverdi, derivasjon og kontinuitet, og bruke disse for å løse praktiske problemer',
  ],
  content: [
    {
      id: 'r1-4-8-intro',
      type: 'text',
      content: `## Lokale vs. globale ekstremalpunkter

**Lokalt ekstremalpunkt:** Høyeste/laveste verdi i et lite område rundt punktet.

**Globalt (absolutt) ekstremalpunkt:** Høyeste/laveste verdi i hele definisjonsområdet.

**Viktig:** Et lokalt maksimum trenger ikke være et globalt maksimum!

**Eksempel:** For $f(x) = x^3 - 3x$ på $[-2, 3]$:
- Lokalt maksimum i $x = -1$: $f(-1) = 2$
- Lokalt minimum i $x = 1$: $f(1) = -2$
- Men hva er det globale maksimum?`,
    },
    {
      id: 'r1-4-8-def-1',
      type: 'definition',
      title: 'Ekstremalverdisetningen',
      content: `Hvis $f$ er **kontinuerlig** på et **lukket intervall** $[a, b]$, så har $f$ både et globalt maksimum og et globalt minimum på dette intervallet.

**Hvor kan ekstremalpunktene ligge?**
1. I **stasjonære punkter** (der $f'(x) = 0$)
2. I **endepunktene** ($x = a$ eller $x = b$)
3. Der $f'(x)$ **ikke eksisterer**

**Merk:** På åpne intervaller eller for diskontinuerlige funksjoner trenger ikke globale ekstremalpunkter å eksistere!`,
    },
    {
      id: 'r1-4-8-metode',
      type: 'definition',
      title: 'Metode for å finne globale ekstremalpunkter',
      content: `**For en kontinuerlig funksjon $f$ på $[a, b]$:**

**Steg 1:** Finn alle kritiske punkter
- Løs $f'(x) = 0$
- Finn der $f'(x)$ ikke eksisterer

**Steg 2:** Regn ut $f(x)$ i alle kandidatpunkter
- I hvert kritiske punkt innenfor $(a, b)$
- I endepunktene $x = a$ og $x = b$

**Steg 3:** Sammenlign verdiene
- Størst verdi = globalt maksimum
- Minst verdi = globalt minimum`,
    },
    {
      id: 'r1-4-8-example-1',
      type: 'example',
      title: 'Eksempel 1: Polynom på lukket intervall',
      problem: `Finn globalt maksimum og minimum for $f(x) = x^3 - 3x + 1$ på $[-2, 2]$.`,
      solution: `**Steg 1: Finn kritiske punkter**
$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$
$f'(x) = 0$ når $x = -1$ eller $x = 1$

Begge er innenfor $(-2, 2)$ ✓

**Steg 2: Beregn funksjonsverdier**
| $x$ | $f(x) = x^3 - 3x + 1$ |
|-----|----------------------|
| $-2$ (endepunkt) | $-8 + 6 + 1 = -1$ |
| $-1$ (kritisk) | $-1 + 3 + 1 = 3$ |
| $1$ (kritisk) | $1 - 3 + 1 = -1$ |
| $2$ (endepunkt) | $8 - 6 + 1 = 3$ |

**Steg 3: Sammenlign**
- Globalt maksimum: $f(-1) = f(2) = 3$
- Globalt minimum: $f(-2) = f(1) = -1$

**Svar:** Globalt maks er 3 (i $x = -1$ og $x = 2$), globalt min er $-1$ (i $x = -2$ og $x = 1$).`,
    },
    {
      id: 'r1-4-8-example-2',
      type: 'example',
      title: 'Eksempel 2: Optimeringsproblem',
      problem: `En bonde har 200 meter gjerde og vil lage et rektangulært innhegning mot en elv (trenger ikke gjerde langs elven). Hva er det største arealet han kan få?`,
      solution: `**Sett opp problemet:**
La $x$ = lengde parallelt med elven, $y$ = bredde.

Begrensning: $x + 2y = 200$ (gjerde på tre sider)
Så $x = 200 - 2y$

Areal: $A = xy = (200 - 2y)y = 200y - 2y^2$

**Hva er definisjonsområdet?**
$y > 0$ og $x > 0$, så $y < 100$
Definisjonsområde: $y \\in [0, 100]$

**Finn kritiske punkter:**
$A'(y) = 200 - 4y = 0$
$y = 50$ m

**Beregn funksjonsverdier:**
| $y$ | $A(y)$ |
|-----|--------|
| $0$ | $0$ |
| $50$ | $200(50) - 2(2500) = 5000$ |
| $100$ | $0$ |

**Svar:** Maksimalt areal er $5000 \\text{ m}^2$ når $y = 50$ m og $x = 100$ m.`,
    },
    {
      id: 'r1-4-8-example-3',
      type: 'example',
      title: 'Eksempel 3: Funksjon med ikke-deriverbart punkt',
      problem: `Finn globale ekstremalpunkter for $f(x) = |x - 1| + 2x$ på $[-1, 3]$.`,
      solution: `**Skriv om funksjonen:**
$f(x) = \\begin{cases} -(x-1) + 2x = x + 1 & \\text{hvis } x < 1 \\\\ (x-1) + 2x = 3x - 1 & \\text{hvis } x \\geq 1 \\end{cases}$

**Kritiske punkter:**
- For $x < 1$: $f'(x) = 1 \\neq 0$ (ingen stasjonære punkter)
- For $x > 1$: $f'(x) = 3 \\neq 0$ (ingen stasjonære punkter)
- I $x = 1$: $f'(x)$ eksisterer ikke (knekk)

**Kandidatpunkter:** $x = -1, 1, 3$

**Beregn funksjonsverdier:**
| $x$ | $f(x)$ |
|-----|--------|
| $-1$ | $2 + (-2) = 0$ |
| $1$ | $0 + 2 = 2$ |
| $3$ | $2 + 6 = 8$ |

**Svar:** Globalt minimum er $0$ i $x = -1$. Globalt maksimum er $8$ i $x = 3$.`,
    },
    {
      id: 'r1-4-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r1-4-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Finn globalt maksimum og minimum.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 4x + 3$ på $[0, 4]$', solution: "$f'(x) = 2x - 4 = 0$ gir $x = 2$. $f(0) = 3$, $f(2) = -1$, $f(4) = 3$. Globalt maks: 3 (i $x=0$ og $x=4$), globalt min: $-1$ (i $x=2$)." },
          { label: 'b', task: '$f(x) = x^3 - 6x^2 + 9x$ på $[0, 4]$', solution: "$f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3) = 0$. $f(0) = 0$, $f(1) = 4$, $f(3) = 0$, $f(4) = 4$. Globalt maks: 4, globalt min: 0." },
          { label: 'c', task: '$f(x) = \\frac{x}{x^2 + 1}$ på $[-2, 2]$', solution: "$f'(x) = \\frac{1-x^2}{(x^2+1)^2} = 0$ når $x = \\pm 1$. $f(-2) = -0{,}4$, $f(-1) = -0{,}5$, $f(1) = 0{,}5$, $f(2) = 0{,}4$. Globalt maks: $0{,}5$ i $x=1$, min: $-0{,}5$ i $x=-1$." },
        ],
        hints: ['Husk å sjekke endepunktene!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-4-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r1-4-8-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Optimeringsproblemer.',
        subTasks: [
          { label: 'a', task: 'En åpen boks skal lages av et 12×12 cm ark ved å klippe like kvadrater fra hjørnene og brette opp. Hva er det maksimale volumet?', solution: 'Klipper $x$ cm fra hvert hjørne. $V = x(12-2x)^2$. $V\' = 12(x-2)(3x-6) = 0$ gir $x = 2$. Sjekk $x \\in [0, 6]$. $V(2) = 2(8)^2 = 128$ cm³.' },
          { label: 'b', task: 'Finn det punktet på kurven $y = \\sqrt{x}$ som ligger nærmest punktet $(3, 0)$.', solution: 'Avstand $d^2 = (x-3)^2 + x$. $\\frac{d(d^2)}{dx} = 2(x-3) + 1 = 0$ gir $x = 2{,}5$. Punktet er $(2{,}5, \\sqrt{2{,}5})$.' },
        ],
        hints: ['Sett opp funksjonen som skal optimeres og finn definisjonsområdet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-4-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Ekstremalverdisetningen:**
Kontinuerlig funksjon på lukket intervall har alltid globalt maks og min.

**Metode:**
1. Finn kritiske punkter ($f'(x) = 0$ eller $f'$ eksisterer ikke)
2. Beregn $f$ i kritiske punkter og endepunkter
3. Sammenlign verdiene

**Kandidatpunkter:**
- Stasjonære punkter
- Knekkpunkter
- Endepunkter

**Optimeringsproblemer:**
1. Sett opp funksjonen
2. Finn naturlig definisjonsområde
3. Bruk metoden over`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_5_1: TextbookChapter = {
  id: 'r1-5-1',
  courseId: 'r1',
  chapterNumber: '5.1',
  title: 'Eksponentiell vekst',
  description: 'Lær om eksponentiell vekst, vekstfaktor, doblingstid og halveringstid med praktiske anvendelser.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forstå og bruke eksponentielle vekstmodeller',
    'beregne vekstfaktor og vekstrate',
    'beregne doblingstid og halveringstid',
    'derivere eksponentiell vekst',
    'anvende modellene på praktiske problemer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-5-1-intro',
      type: 'text',
      content: `## Hva er eksponentiell vekst?

Eksponentiell vekst oppstår når en størrelse vokser med en fast prosent per tidsenhet. Dette er fundamentalt forskjellig fra lineær vekst, der størrelsen vokser med et fast beløp.

Eksponentiell vekst finnes overalt:
- Befolkningsvekst i land med høy fødselsrate
- Rentes rente på bankinnskudd
- Bakterievekst under ideelle forhold
- Spredning av virusinfeksjoner i tidlig fase

I dette kapitlet skal vi lære å modellere slik vekst matematisk og bruke modellene til å gjøre prediksjoner.`,
    },

    // ========== EKSPONENTIELL VEKSTMODELL ==========
    {
      id: 'r1-5-1-modell-intro',
      type: 'text',
      content: `## Den eksponentielle vekstmodellen

Det finnes to vanlige måter å skrive eksponentiell vekst på, avhengig av om vi bruker **vekstfaktor** eller **kontinuerlig vekstrate**.`,
    },

    // Definisjon: Eksponentiell vekst med vekstfaktor
    {
      id: 'r1-5-1-def-vekstfaktor',
      type: 'definition',
      title: 'Eksponentiell vekst med vekstfaktor',
      content: `En størrelse $N(t)$ følger **eksponentiell vekst** hvis:

$$N(t) = N_0 \\cdot a^t$$

der:
- $N_0$ er startverdien (verdien når $t = 0$)
- $a$ er **vekstfaktoren** per tidsenhet
- $t$ er tiden

**Tolkning av vekstfaktoren:**
- $a > 1$: Vekst (størrelsen øker)
- $0 < a < 1$: Nedgang (størrelsen minker)
- $a = 1$: Konstant (ingen endring)`,
    },

    // Definisjon: Eksponentiell vekst med kontinuerlig vekstrate
    {
      id: 'r1-5-1-def-kontinuerlig',
      type: 'definition',
      title: 'Eksponentiell vekst med kontinuerlig vekstrate',
      content: `En alternativ form for eksponentiell vekst er:

$$N(t) = N_0 \\cdot e^{kt}$$

der:
- $N_0$ er startverdien
- $k$ er den **kontinuerlige vekstraten**
- $e \\approx 2{,}718$ er Eulers tall
- $t$ er tiden

**Tolkning av vekstraten:**
- $k > 0$: Vekst
- $k < 0$: Nedgang (ofte kalt **eksponentiell avtagning**)
- $k = 0$: Konstant`,
    },

    // Note: Sammenheng mellom formene
    {
      id: 'r1-5-1-note-sammenheng',
      type: 'note',
      content: `**Sammenheng mellom de to formene:**

De to formene er ekvivalente med sammenhengen:
$$a = e^k \\quad \\text{eller} \\quad k = \\ln a$$

Hvis vekstfaktoren er $a = 1{,}05$ (5% vekst per år), er den kontinuerlige vekstraten:
$$k = \\ln(1{,}05) \\approx 0{,}0488 \\approx 4{,}88\\%$$`,
    },

    // Eksempel 1: Befolkningsvekst
    {
      id: 'r1-5-1-example-befolkning',
      type: 'example',
      title: 'Eksempel 1: Befolkningsvekst',
      problem: `I 2020 hadde et land 10 millioner innbyggere. Befolkningen vokser med 2% per år.

a) Sett opp en modell for befolkningen $N(t)$ der $t$ er antall år etter 2020.
b) Hva blir befolkningen i 2030?
c) Skriv modellen på formen $N(t) = N_0 \\cdot e^{kt}$.`,
      solution: `**Løsning:**

a) Med 2% vekst per år er vekstfaktoren $a = 1 + 0{,}02 = 1{,}02$.

$$N(t) = 10 \\cdot 1{,}02^t \\text{ millioner}$$

b) I 2030 er $t = 10$:
$$N(10) = 10 \\cdot 1{,}02^{10} \\approx 10 \\cdot 1{,}219 \\approx 12{,}2 \\text{ millioner}$$

c) Vi finner $k$:
$$k = \\ln(1{,}02) \\approx 0{,}0198$$

Modellen blir:
$$N(t) = 10 \\cdot e^{0{,}0198t}$$`,
    },

    // ========== VEKSTFAKTOR OG VEKSTRATE ==========
    {
      id: 'r1-5-1-vekstrate-intro',
      type: 'text',
      content: `## Vekstfaktor og prosentvis vekst

Når vi snakker om prosentvis vekst, er det viktig å skille mellom **vekstrate** (prosenten) og **vekstfaktor** (det vi ganger med).`,
    },

    // Teorem: Sammenheng vekstfaktor og vekstrate
    {
      id: 'r1-5-1-theorem-vekst',
      type: 'theorem',
      title: 'Vekstfaktor og vekstrate',
      content: `Hvis en størrelse vokser med $p\\%$ per tidsenhet, er:

**Vekstraten:** $r = \\frac{p}{100}$

**Vekstfaktoren:** $a = 1 + r = 1 + \\frac{p}{100}$

**Eksempler:**
- 5% vekst: $a = 1{,}05$
- 3% nedgang: $a = 1 - 0{,}03 = 0{,}97$
- 12% vekst: $a = 1{,}12$`,
    },

    // Eksempel 2: Fra prosent til vekstfaktor
    {
      id: 'r1-5-1-example-prosent',
      type: 'example',
      title: 'Eksempel 2: Vekstfaktor og prosent',
      problem: `a) Et innskudd gir 3,5% rente per år. Hva er vekstfaktoren?
b) En bilverdi synker med 15% per år. Hva er vekstfaktoren?
c) En vekstfaktor er $a = 1{,}08$. Hva er den prosentvise veksten?`,
      solution: `**Løsning:**

a) 3,5% vekst gir vekstfaktor:
$$a = 1 + 0{,}035 = 1{,}035$$

b) 15% nedgang gir vekstfaktor:
$$a = 1 - 0{,}15 = 0{,}85$$

c) Fra $a = 1{,}08 = 1 + 0{,}08$ får vi:
$$p = 0{,}08 \\cdot 100 = 8\\%$$

Den prosentvise veksten er 8%.`,
    },

    // Oppgave 1
    {
      id: 'r1-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vekstfaktoren $a$ for hver situasjon.',
        subTasks: [
          { label: 'a', task: '4% vekst per år', solution: '$a = 1 + 0{,}04 = 1{,}04$' },
          { label: 'b', task: '7% nedgang per år', solution: '$a = 1 - 0{,}07 = 0{,}93$' },
          { label: 'c', task: 'Dobling hvert år', solution: '$a = 2$ (100% vekst)' },
          { label: 'd', task: '0,5% vekst per måned', solution: '$a = 1{,}005$' },
          { label: 'e', task: 'Halvering hvert år', solution: '$a = 0{,}5$ (50% nedgang)' },
        ],
        hints: ['Vekst: $a = 1 + r$', 'Nedgang: $a = 1 - r$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r1-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett opp en eksponentiell modell $N(t) = N_0 \\cdot a^t$ for hver situasjon.',
        subTasks: [
          { label: 'a', task: 'Et innskudd på 50 000 kr med 4% rente per år. $t$ = år.', solution: '$N(t) = 50\\,000 \\cdot 1{,}04^t$ kroner' },
          { label: 'b', task: 'En by med 100 000 innbyggere og 1,5% årlig vekst. $t$ = år.', solution: '$N(t) = 100\\,000 \\cdot 1{,}015^t$ innbyggere' },
          { label: 'c', task: 'En bakteriekultur starter med 1000 bakterier og dobles hver time. $t$ = timer.', solution: '$N(t) = 1000 \\cdot 2^t$ bakterier' },
          { label: 'd', task: 'En bil til 400 000 kr som synker 12% i verdi per år. $t$ = år.', solution: '$N(t) = 400\\,000 \\cdot 0{,}88^t$ kroner' },
        ],
        hints: ['Finn først vekstfaktoren fra prosenten', 'Startverdien $N_0$ er verdien når $t = 0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DOBLINGSTID ==========
    {
      id: 'r1-5-1-doblingstid-intro',
      type: 'text',
      content: `## Doblingstid

Et viktig kjennetegn ved eksponentiell vekst er at **doblingstiden er konstant**. Uansett når vi starter, tar det like lang tid for størrelsen å doble seg.`,
    },

    // Teorem: Doblingstid
    {
      id: 'r1-5-1-theorem-dobling',
      type: 'theorem',
      title: 'Formel for doblingstid',
      content: `For eksponentiell vekst $N(t) = N_0 \\cdot e^{kt}$ med $k > 0$ er **doblingstiden**:

$$t_2 = \\frac{\\ln 2}{k}$$

Med vekstfaktor $a$ per tidsenhet:
$$t_2 = \\frac{\\ln 2}{\\ln a}$$

**Merk:** $\\ln 2 \\approx 0{,}693$`,
    },

    // Bevis for doblingstid
    {
      id: 'r1-5-1-proof-dobling',
      type: 'proof',
      title: 'Utledning av doblingstidsformelen',
      content: `Vi vil finne tiden $t_2$ det tar før $N(t_2) = 2 \\cdot N_0$.

$$N_0 \\cdot e^{kt_2} = 2 \\cdot N_0$$
$$e^{kt_2} = 2$$
$$kt_2 = \\ln 2$$
$$t_2 = \\frac{\\ln 2}{k}$$`,
    },

    // Eksempel 3: Doblingstid
    {
      id: 'r1-5-1-example-dobling',
      type: 'example',
      title: 'Eksempel 3: Beregne doblingstid',
      problem: `En befolkning vokser med 3% per år.

a) Hva er doblingstiden?
b) Hvor mange ganger vil befolkningen doble seg på 100 år?`,
      solution: `**Løsning:**

a) Vekstfaktoren er $a = 1{,}03$, så $k = \\ln(1{,}03) \\approx 0{,}0296$.

$$t_2 = \\frac{\\ln 2}{k} = \\frac{0{,}693}{0{,}0296} \\approx 23{,}4 \\text{ år}$$

Doblingstiden er ca. 23 år.

b) På 100 år:
$$\\frac{100}{23{,}4} \\approx 4{,}3$$

Befolkningen vil doble seg omtrent 4 ganger, altså bli ca. $2^4 = 16$ ganger så stor.

**Kontroll:** $1{,}03^{100} \\approx 19{,}2$ ✓`,
    },

    // Tip: Tommelfingerregel
    {
      id: 'r1-5-1-tip-regel',
      type: 'tip',
      content: `**Tommelfingerregel for doblingstid (72-regelen):**

For små vekstrater gir denne tilnærmingen et godt estimat:

$$t_2 \\approx \\frac{72}{p}$$

der $p$ er vekstraten i prosent.

**Eksempel:** 6% vekst gir doblingstid ca. $\\frac{72}{6} = 12$ år.

Denne regelen er spesielt populær i økonomi og finans.`,
    },

    // Oppgave 3
    {
      id: 'r1-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn doblingstiden.',
        subTasks: [
          { label: 'a', task: 'Årlig vekst på 5%', solution: '$k = \\ln(1{,}05) \\approx 0{,}0488$. $t_2 = \\frac{\\ln 2}{0{,}0488} \\approx 14{,}2$ år' },
          { label: 'b', task: 'Kontinuerlig vekstrate $k = 0{,}02$', solution: '$t_2 = \\frac{\\ln 2}{0{,}02} = \\frac{0{,}693}{0{,}02} \\approx 34{,}7$ tidsenheter' },
          { label: 'c', task: 'Bakteriekultur som tredobles på 4 timer', solution: 'Vekstfaktor per time: $a = 3^{1/4} \\approx 1{,}316$. $t_2 = \\frac{\\ln 2}{\\ln 1{,}316} \\approx 2{,}52$ timer' },
          { label: 'd', task: 'En størrelse som vokser fra 100 til 400 på 10 år', solution: '$400 = 100 \\cdot a^{10} \\Rightarrow a = 4^{0{,}1} \\approx 1{,}149$. $t_2 = \\frac{\\ln 2}{\\ln 1{,}149} \\approx 5$ år' },
        ],
        hints: ['Bruk $t_2 = \\frac{\\ln 2}{k}$ eller $t_2 = \\frac{\\ln 2}{\\ln a}$', 'Finn først vekstfaktoren hvis den ikke er gitt direkte'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== HALVERINGSTID ==========
    {
      id: 'r1-5-1-halveringstid-intro',
      type: 'text',
      content: `## Halveringstid

Når vi har eksponentiell avtagning ($k < 0$), snakker vi om **halveringstid** i stedet for doblingstid. Dette er spesielt viktig i radioaktiv nedbrytning.`,
    },

    // Teorem: Halveringstid
    {
      id: 'r1-5-1-theorem-halvering',
      type: 'theorem',
      title: 'Formel for halveringstid',
      content: `For eksponentiell avtagning $N(t) = N_0 \\cdot e^{-|k|t}$ er **halveringstiden**:

$$t_{1/2} = \\frac{\\ln 2}{|k|}$$

**Merk:** Formelen er identisk med doblingstid, men brukes når $k < 0$.`,
    },

    // Eksempel 4: Radioaktiv nedbrytning
    {
      id: 'r1-5-1-example-radioaktiv',
      type: 'example',
      title: 'Eksempel 4: Radioaktiv nedbrytning',
      problem: `Karbon-14 har halveringstid på 5730 år og brukes til å datere arkeologiske funn.

a) Finn den kontinuerlige nedbrytningsraten $k$.
b) Et funn inneholder 25% av den opprinnelige mengden C-14. Hvor gammelt er funnet?
c) Sett opp en formel for mengden C-14 som funksjon av tid.`,
      solution: `**Løsning:**

a) Fra halveringstidsformelen:
$$t_{1/2} = \\frac{\\ln 2}{|k|} \\Rightarrow |k| = \\frac{\\ln 2}{t_{1/2}} = \\frac{0{,}693}{5730} \\approx 0{,}000121$$

Siden det er nedbrytning: $k \\approx -0{,}000121$ per år.

b) Vi løser $N(t) = 0{,}25 \\cdot N_0$:
$$N_0 \\cdot e^{kt} = 0{,}25 \\cdot N_0$$
$$e^{kt} = 0{,}25$$
$$kt = \\ln(0{,}25) = \\ln\\left(\\frac{1}{4}\\right) = -\\ln 4$$
$$t = \\frac{-\\ln 4}{k} = \\frac{\\ln 4}{0{,}000121} \\approx 11\\,460 \\text{ år}$$

**Alternativt:** 25% = $(\\frac{1}{2})^2$, så det har gått 2 halveringstider: $2 \\cdot 5730 = 11\\,460$ år.

c) Modellen blir:
$$N(t) = N_0 \\cdot e^{-0{,}000121t}$$
eller
$$N(t) = N_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/5730}$$`,
    },

    // Oppgave 4
    {
      id: 'r1-5-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene om halveringstid.',
        subTasks: [
          { label: 'a', task: 'Et radioaktivt stoff har halveringstid 10 dager. Finn nedbrytningsraten $k$.', solution: '$|k| = \\frac{\\ln 2}{10} \\approx 0{,}0693$ per dag, så $k \\approx -0{,}0693$' },
          { label: 'b', task: 'Hvor mye er igjen av stoffet i a) etter 30 dager?', solution: 'Etter 30 dager = 3 halveringstider: $(\\frac{1}{2})^3 = \\frac{1}{8} = 12{,}5\\%$' },
          { label: 'c', task: 'Jod-131 har halveringstid 8 dager. Hvor lang tid tar det før kun 10% er igjen?', solution: '$0{,}1 = (\\frac{1}{2})^{t/8} \\Rightarrow \\ln(0{,}1) = \\frac{t}{8} \\cdot \\ln(0{,}5) \\Rightarrow t = \\frac{8 \\cdot \\ln(0{,}1)}{\\ln(0{,}5)} \\approx 26{,}6$ dager' },
          { label: 'd', task: 'En medisin har halveringstid 4 timer. Du tar 400 mg. Hvor mye er i kroppen etter 10 timer?', solution: '$N(10) = 400 \\cdot (\\frac{1}{2})^{10/4} = 400 \\cdot (\\frac{1}{2})^{2{,}5} \\approx 70{,}7$ mg' },
        ],
        hints: ['Halveringstid: $t_{1/2} = \\frac{\\ln 2}{|k|}$', 'Antall halveringstider: $n = \\frac{t}{t_{1/2}}$, gjenværende: $(\\frac{1}{2})^n$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DERIVASJON AV EKSPONENTIELL VEKST ==========
    {
      id: 'r1-5-1-derivasjon-intro',
      type: 'text',
      content: `## Derivasjon av eksponentiell vekst

En viktig egenskap ved eksponentiell vekst er at **den deriverte er proporsjonal med funksjonen selv**. Dette er nettopp det som kjennetegner eksponentiell vekst!`,
    },

    // Teorem: Derivasjon
    {
      id: 'r1-5-1-theorem-derivasjon',
      type: 'theorem',
      title: 'Derivasjon av eksponentiell funksjon',
      content: `For $N(t) = N_0 \\cdot e^{kt}$ gjelder:

$$N'(t) = k \\cdot N_0 \\cdot e^{kt} = k \\cdot N(t)$$

**Tolkning:** Veksthastigheten $N'(t)$ er alltid en fast andel $k$ av nåværende verdi $N(t)$.

For $f(t) = N_0 \\cdot a^t$:
$$f'(t) = N_0 \\cdot a^t \\cdot \\ln a = f(t) \\cdot \\ln a$$`,
    },

    // Eksempel 5: Derivasjon
    {
      id: 'r1-5-1-example-derivasjon',
      type: 'example',
      title: 'Eksempel 5: Veksthastighet',
      problem: `Befolkningen i et land modelleres med $N(t) = 5 \\cdot e^{0{,}02t}$ millioner, der $t$ er år etter 2020.

a) Finn $N'(t)$ og forklar hva den representerer.
b) Hvor raskt vokser befolkningen i 2025?
c) Hvor stor prosentandel av befolkningen er den årlige veksten?`,
      solution: `**Løsning:**

a) $$N'(t) = 0{,}02 \\cdot 5 \\cdot e^{0{,}02t} = 0{,}1 \\cdot e^{0{,}02t}$$

$N'(t)$ representerer veksthastigheten, altså hvor mange millioner mennesker befolkningen øker med per år.

b) I 2025 er $t = 5$:
$$N'(5) = 0{,}1 \\cdot e^{0{,}02 \\cdot 5} = 0{,}1 \\cdot e^{0{,}1} \\approx 0{,}1 \\cdot 1{,}105 \\approx 0{,}11$$

Befolkningen vokser med ca. 110 000 mennesker per år i 2025.

c) Den relative veksthastigheten er:
$$\\frac{N'(t)}{N(t)} = \\frac{0{,}02 \\cdot N(t)}{N(t)} = 0{,}02 = 2\\%$$

Den årlige veksten er alltid 2% av befolkningen (dette er konstant for eksponentiell vekst).`,
    },

    // Oppgave 5
    {
      id: 'r1-5-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene og finn veksthastigheten ved angitt tidspunkt.',
        subTasks: [
          { label: 'a', task: '$N(t) = 1000 \\cdot e^{0{,}05t}$. Finn $N\'(t)$ og $N\'(10)$.', solution: '$N\'(t) = 50 \\cdot e^{0{,}05t}$. $N\'(10) = 50 \\cdot e^{0{,}5} \\approx 82{,}4$' },
          { label: 'b', task: '$P(t) = 200 \\cdot 1{,}03^t$. Finn $P\'(t)$ og $P\'(5)$.', solution: '$P\'(t) = 200 \\cdot 1{,}03^t \\cdot \\ln(1{,}03) \\approx 5{,}91 \\cdot 1{,}03^t$. $P\'(5) \\approx 6{,}85$' },
          { label: 'c', task: '$A(t) = 500 \\cdot e^{-0{,}1t}$ (nedbrytning). Finn $A\'(t)$ og $A\'(0)$.', solution: '$A\'(t) = -50 \\cdot e^{-0{,}1t}$. $A\'(0) = -50$ (negativt = nedgang)' },
        ],
        hints: ['$(e^{kt})\' = k \\cdot e^{kt}$', '$(a^t)\' = a^t \\cdot \\ln a$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GEOGEBRA: EKSPONENTIELL VEKST ==========
    {
      id: 'r1-5-1-geogebra-vekst',
      type: 'geogebra',
      title: 'Eksponentiell vekst',
      description: 'Utforsk eksponentiell vekst. Bruk glidebryterne til å endre startverdien $N_0$ og vekstraten $k$.',
      appType: 'graphing',
      commands: [
        'N0 = Slider(1, 100, 1, 1, 150, false, true, false, false)',
        'k = Slider(-0.5, 0.5, 0.01, 1, 150, false, true, false, false)',
        'SetValue(N0, 10)',
        'SetValue(k, 0.1)',
        'N(t) = N0 * exp(k * t)',
        'SetColor(N, "Blue")',
        'SetLineThickness(N, 3)',
        'A = (0, N0)',
        'SetPointSize(A, 5)',
        'SetColor(A, "Red")',
        'SetCaption(A, "Startpunkt")',
        'dobling = ln(2) / k',
        'B = (dobling, 2 * N0)',
        'SetPointSize(B, 4)',
        'SetColor(B, "Green")',
        'SetCaption(B, "Dobling")',
        'ZoomIn(-2, -10, 25, 110)',
      ],
    },

    // ========== PRAKTISK ANVENDELSE ==========
    {
      id: 'r1-5-1-anvendelse-intro',
      type: 'text',
      content: `## Praktiske anvendelser

Eksponentiell vekst brukes i mange praktiske sammenhenger. La oss se på noen viktige eksempler.`,
    },

    // Eksempel 6: Rentes rente
    {
      id: 'r1-5-1-example-rente',
      type: 'example',
      title: 'Eksempel 6: Rentes rente',
      problem: `Du setter inn 100 000 kr i en sparekonto med 5% årlig rente.

a) Hvor mye har du etter 20 år?
b) Hvor lang tid tar det før innskuddet er doblet?
c) Sammenlign med et innskudd med 3% rente. Hvor mye mer får du med 5% etter 30 år?`,
      solution: `**Løsning:**

a) Med vekstfaktor $a = 1{,}05$:
$$N(20) = 100\\,000 \\cdot 1{,}05^{20} \\approx 100\\,000 \\cdot 2{,}653 \\approx 265\\,300 \\text{ kr}$$

b) Doblingstid:
$$t_2 = \\frac{\\ln 2}{\\ln(1{,}05)} = \\frac{0{,}693}{0{,}0488} \\approx 14{,}2 \\text{ år}$$

c) Med 5% etter 30 år: $100\\,000 \\cdot 1{,}05^{30} \\approx 432\\,200$ kr

Med 3% etter 30 år: $100\\,000 \\cdot 1{,}03^{30} \\approx 242\\,700$ kr

Differanse: $432\\,200 - 242\\,700 = 189\\,500$ kr

**Konklusjon:** 2 prosentpoeng høyere rente gir nesten dobbelt så mye etter 30 år!`,
    },

    // Oppgave 6
    {
      id: 'r1-5-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-5-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs de praktiske oppgavene.',
        subTasks: [
          { label: 'a', task: 'Du låner 500 000 kr med 6% rente. Hvor mye skylder du etter 5 år uten nedbetaling?', solution: '$N(5) = 500\\,000 \\cdot 1{,}06^5 \\approx 669\\,100$ kr' },
          { label: 'b', task: 'En bakteriekultur dobles hver 20. minutt. Starter med 100 bakterier. Hvor mange etter 2 timer?', solution: '2 timer = 120 min = 6 doblinger. $N = 100 \\cdot 2^6 = 6400$ bakterier' },
          { label: 'c', task: 'Verdensbefolkningen var 6 milliarder i 2000 og vokser ca. 1,1% per år. Når passerer vi 10 milliarder?', solution: '$10 = 6 \\cdot 1{,}011^t \\Rightarrow t = \\frac{\\ln(10/6)}{\\ln(1{,}011)} \\approx 46{,}7$ år, altså rundt 2047' },
          { label: 'd', task: 'Et legemiddel har halveringstid 6 timer. Du tar 200 mg. Når er det mindre enn 10 mg igjen?', solution: '$10 = 200 \\cdot (0{,}5)^{t/6} \\Rightarrow t = 6 \\cdot \\frac{\\ln(0{,}05)}{\\ln(0{,}5)} \\approx 25{,}9$ timer' },
        ],
        hints: ['Bruk $N(t) = N_0 \\cdot a^t$', 'Løs ligninger med logaritmer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-5-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Eksponentiell vekstmodell:**
$$N(t) = N_0 \\cdot a^t = N_0 \\cdot e^{kt}$$

der $a = e^k$ og $k = \\ln a$.

**Vekstfaktor:** $a = 1 + r$ for vekstrate $r$ (fra $p\\%$: $r = p/100$)

**Doblingstid:** $t_2 = \\frac{\\ln 2}{k} = \\frac{\\ln 2}{\\ln a}$

**Halveringstid:** $t_{1/2} = \\frac{\\ln 2}{|k|}$ (for $k < 0$)

**Derivasjon:** $(N_0 \\cdot e^{kt})' = k \\cdot N_0 \\cdot e^{kt}$

**Viktig egenskap:** $N'(t) = k \\cdot N(t)$ - veksthastigheten er proporsjonal med verdien`,
    },

    // Ekstraoppgaver
    {
      id: 'r1-5-1-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r1-5-1-ex-block-7',
          type: 'exercise',
          exercise: {
            id: 'r1-5-1-ex-7',
            number: 'E1',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver',
            subTasks: [
              { label: 'a', task: 'Vis at doblingstiden er uavhengig av startverdien $N_0$.', solution: 'Fra $N_0 \\cdot e^{kt_2} = 2N_0$ får vi $e^{kt_2} = 2$, som gir $t_2 = \\frac{\\ln 2}{k}$. Startverdien $N_0$ forsvinner fra ligningen.' },
              { label: 'b', task: 'Et innskudd vokser fra 10 000 til 18 000 på 12 år. Finn årlig rente.', solution: '$18000 = 10000 \\cdot a^{12} \\Rightarrow a = 1{,}8^{1/12} \\approx 1{,}050$, altså ca. 5,0% rente' },
              { label: 'c', task: 'En populasjon følger $N(t) = 500 \\cdot e^{0{,}03t}$. Når er veksthastigheten 30 individer per år?', solution: '$N\'(t) = 15e^{0{,}03t} = 30 \\Rightarrow e^{0{,}03t} = 2 \\Rightarrow t = \\frac{\\ln 2}{0{,}03} \\approx 23{,}1$ år' },
              { label: 'd', task: 'To stoffer har halveringstid 10 og 20 dager. Starter med like mengder. Når er det dobbelt så mye av det langsomme?', solution: 'La $A(t) = A_0 \\cdot 2^{-t/10}$ og $B(t) = A_0 \\cdot 2^{-t/20}$. $B = 2A$ gir $2^{-t/20} = 2 \\cdot 2^{-t/10} = 2^{1-t/10}$. $-t/20 = 1 - t/10 \\Rightarrow t = 20$ dager' },
            ],
            hints: ['Bruk logaritmer til å løse eksponentligninger'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_5_2: TextbookChapter = {
  id: 'r1-5-2',
  courseId: 'r1',
  chapterNumber: '5.2',
  title: 'Logistisk vekst',
  description: 'Lær om logistisk vekst, bærekapasitet, vendepunkt og S-kurven for modellering av begrenset vekst.',
  estimatedMinutes: 65,
  competenceGoals: [
    'forstå begrensninger i eksponentiell vekst',
    'bruke logistisk modell med bærekapasitet',
    'finne og tolke vendepunktet',
    'derivere logistisk funksjon',
    'anvende modellen på praktiske problemer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-5-2-intro',
      type: 'text',
      content: `## Begrensninger i eksponentiell vekst

I forrige kapittel så vi at eksponentiell vekst fører til svært raske økninger over tid. Men i virkeligheten kan ingenting vokse eksponentielt for alltid!

**Hva begrenser vekst?**
- Mat og næring (for populasjoner)
- Plass og ressurser
- Konkurranse
- Metning av marked (for produkter)

Når veksten møter slike begrensninger, får vi ofte **logistisk vekst** i stedet.`,
    },

    // Bilde/tekst om S-kurven
    {
      id: 'r1-5-2-s-kurve-intro',
      type: 'text',
      content: `## S-kurven

Den logistiske vekstkurven har en karakteristisk S-form:

1. **Tidlig fase:** Veksten ligner eksponentiell (få begrensninger)
2. **Midtfase:** Veksten avtar når ressursene blir knappe
3. **Sen fase:** Veksten flater ut mot en øvre grense

Denne øvre grensen kalles **bærekapasiteten**.`,
    },

    // ========== LOGISTISK MODELL ==========
    {
      id: 'r1-5-2-modell-intro',
      type: 'text',
      content: `## Den logistiske modellen

Den logistiske modellen tar hensyn til at vekstraten avtar når populasjonen nærmer seg bærekapasiteten.`,
    },

    // Definisjon: Logistisk vekst
    {
      id: 'r1-5-2-def-logistisk',
      type: 'definition',
      title: 'Logistisk vekstmodell',
      content: `En størrelse $N(t)$ følger **logistisk vekst** hvis:

$$N(t) = \\frac{K}{1 + Ce^{-rt}}$$

der:
- $K$ er **bærekapasiteten** (øvre grense)
- $r > 0$ er vekstraten (initiell)
- $C = \\frac{K - N_0}{N_0}$ er en konstant bestemt av startverdien $N_0$
- $t$ er tiden

**Egenskaper:**
- $N(0) = \\frac{K}{1+C} = N_0$ (startverdi)
- $\\lim_{t \\to \\infty} N(t) = K$ (går mot bærekapasiteten)`,
    },

    // Note om parametere
    {
      id: 'r1-5-2-note-parametere',
      type: 'note',
      content: `**Forstå parameterne:**

- **$K$ (bærekapasitet):** Den maksimale bærekraftige størrelsen. Populasjonen kan aldri overstige $K$ i lengden.

- **$r$ (vekstrate):** Hvor raskt veksten skjer. Høyere $r$ betyr brattere S-kurve.

- **$C$:** Bestemmes av hvor langt fra $K$ vi starter. Hvis $N_0$ er liten sammenlignet med $K$, er $C$ stor.`,
    },

    // Eksempel 1: Enkel logistisk modell
    {
      id: 'r1-5-2-example-enkel',
      type: 'example',
      title: 'Eksempel 1: Logistisk vekst',
      problem: `En fiskedam kan maksimalt romme 10 000 fisk. Vi setter ut 500 fisk, og vekstraten er $r = 0{,}5$ per år.

a) Finn konstanten $C$.
b) Sett opp den logistiske modellen.
c) Hvor mange fisk er det etter 5 år? Etter 10 år? Etter 20 år?`,
      solution: `**Løsning:**

a) Vi har $K = 10\\,000$, $N_0 = 500$ og $r = 0{,}5$.

$$C = \\frac{K - N_0}{N_0} = \\frac{10\\,000 - 500}{500} = \\frac{9500}{500} = 19$$

b) Den logistiske modellen blir:

$$N(t) = \\frac{10\\,000}{1 + 19 \\cdot e^{-0{,}5t}}$$

c) Vi regner ut:

$t = 5$: $N(5) = \\frac{10\\,000}{1 + 19 \\cdot e^{-2{,}5}} \\approx \\frac{10\\,000}{1 + 1{,}56} \\approx 3\\,900$ fisk

$t = 10$: $N(10) = \\frac{10\\,000}{1 + 19 \\cdot e^{-5}} \\approx \\frac{10\\,000}{1 + 0{,}128} \\approx 8\\,900$ fisk

$t = 20$: $N(20) = \\frac{10\\,000}{1 + 19 \\cdot e^{-10}} \\approx \\frac{10\\,000}{1 + 0{,}00086} \\approx 9\\,990$ fisk

Populasjonen nærmer seg bærekapasiteten 10 000.`,
    },

    // Oppgave 1
    {
      id: 'r1-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett opp logistisk modell for hver situasjon.',
        subTasks: [
          { label: 'a', task: '$K = 1000$, $N_0 = 100$, $r = 0{,}2$', solution: '$C = \\frac{1000-100}{100} = 9$. $N(t) = \\frac{1000}{1 + 9e^{-0{,}2t}}$' },
          { label: 'b', task: '$K = 5000$, $N_0 = 500$, $r = 0{,}3$', solution: '$C = \\frac{5000-500}{500} = 9$. $N(t) = \\frac{5000}{1 + 9e^{-0{,}3t}}$' },
          { label: 'c', task: '$K = 200$, $N_0 = 10$, $r = 0{,}5$', solution: '$C = \\frac{200-10}{10} = 19$. $N(t) = \\frac{200}{1 + 19e^{-0{,}5t}}$' },
          { label: 'd', task: '$K = 800$, $N_0 = 200$, $r = 0{,}1$', solution: '$C = \\frac{800-200}{200} = 3$. $N(t) = \\frac{800}{1 + 3e^{-0{,}1t}}$' },
        ],
        hints: ['Bruk $C = \\frac{K - N_0}{N_0}$', 'Sett inn i $N(t) = \\frac{K}{1 + Ce^{-rt}}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r1-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk den logistiske modellen til å beregne.',
        subTasks: [
          { label: 'a', task: 'For $N(t) = \\frac{1000}{1 + 9e^{-0{,}2t}}$, finn $N(0)$, $N(10)$ og $N(30)$.', solution: '$N(0) = \\frac{1000}{10} = 100$. $N(10) = \\frac{1000}{1+9e^{-2}} \\approx 450$. $N(30) = \\frac{1000}{1+9e^{-6}} \\approx 978$' },
          { label: 'b', task: 'For modellen i a), når er $N(t) = 500$?', solution: '$500 = \\frac{1000}{1+9e^{-0{,}2t}} \\Rightarrow 1+9e^{-0{,}2t} = 2 \\Rightarrow e^{-0{,}2t} = \\frac{1}{9} \\Rightarrow t = \\frac{\\ln 9}{0{,}2} \\approx 11$ år' },
          { label: 'c', task: 'For $N(t) = \\frac{500}{1 + 4e^{-0{,}3t}}$, hva er bærekapasiteten og startverdien?', solution: '$K = 500$ (teller). $N_0 = N(0) = \\frac{500}{1+4} = 100$' },
        ],
        hints: ['$N(0)$: sett $t=0$ og bruk at $e^0 = 1$', 'Løs likninger ved å ta logaritme'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VENDEPUNKTET ==========
    {
      id: 'r1-5-2-vendepunkt-intro',
      type: 'text',
      content: `## Vendepunktet og maksimal veksthastighet

En viktig egenskap ved logistisk vekst er at veksthastigheten først øker, så avtar. Punktet der veksthastigheten er størst kalles **vendepunktet**.`,
    },

    // Teorem: Vendepunkt
    {
      id: 'r1-5-2-theorem-vendepunkt',
      type: 'theorem',
      title: 'Vendepunktet for logistisk vekst',
      content: `For $N(t) = \\frac{K}{1 + Ce^{-rt}}$ inntreffer vendepunktet når:

$$N = \\frac{K}{2}$$

Tidspunktet for vendepunktet er:
$$t_v = \\frac{\\ln C}{r}$$

**Maksimal veksthastighet** i vendepunktet:
$$N'(t_v) = \\frac{rK}{4}$$`,
    },

    // Eksempel 2: Vendepunkt
    {
      id: 'r1-5-2-example-vendepunkt',
      type: 'example',
      title: 'Eksempel 2: Finne vendepunktet',
      problem: `For fiskedammen fra eksempel 1 med $N(t) = \\frac{10\\,000}{1 + 19e^{-0{,}5t}}$:

a) Finn tidspunktet for vendepunktet.
b) Hva er populasjonen i vendepunktet?
c) Hva er den maksimale veksthastigheten?`,
      solution: `**Løsning:**

a) Med $C = 19$ og $r = 0{,}5$:
$$t_v = \\frac{\\ln C}{r} = \\frac{\\ln 19}{0{,}5} = \\frac{2{,}944}{0{,}5} \\approx 5{,}9 \\text{ år}$$

b) I vendepunktet er populasjonen alltid halvparten av bærekapasiteten:
$$N(t_v) = \\frac{K}{2} = \\frac{10\\,000}{2} = 5\\,000 \\text{ fisk}$$

c) Maksimal veksthastighet:
$$N'(t_v) = \\frac{rK}{4} = \\frac{0{,}5 \\cdot 10\\,000}{4} = 1\\,250 \\text{ fisk per år}$$

**Tolkning:** Rundt år 6 vokser populasjonen raskest, med ca. 1250 nye fisk per år.`,
    },

    // Oppgave 3
    {
      id: 'r1-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn vendepunktet for hver logistiske modell.',
        subTasks: [
          { label: 'a', task: '$N(t) = \\frac{1000}{1 + 9e^{-0{,}2t}}$', solution: '$t_v = \\frac{\\ln 9}{0{,}2} \\approx 11{,}0$ år. $N(t_v) = 500$. $N\'(t_v) = \\frac{0{,}2 \\cdot 1000}{4} = 50$ per år' },
          { label: 'b', task: '$N(t) = \\frac{500}{1 + 49e^{-0{,}4t}}$', solution: '$t_v = \\frac{\\ln 49}{0{,}4} \\approx 9{,}7$. $N(t_v) = 250$. $N\'(t_v) = \\frac{0{,}4 \\cdot 500}{4} = 50$ per tidsenhet' },
          { label: 'c', task: 'En populasjon følger logistisk vekst med $K = 2000$ og vendepunkt ved $t = 8$ år. $C = 15$. Finn $r$.', solution: '$t_v = \\frac{\\ln C}{r} \\Rightarrow r = \\frac{\\ln 15}{8} \\approx 0{,}34$ per år' },
        ],
        hints: ['Vendepunkt: $t_v = \\frac{\\ln C}{r}$', 'I vendepunktet: $N = K/2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DERIVASJON AV LOGISTISK FUNKSJON ==========
    {
      id: 'r1-5-2-derivasjon-intro',
      type: 'text',
      content: `## Derivasjon av logistisk funksjon

For å analysere veksthastigheten trenger vi den deriverte av den logistiske funksjonen.`,
    },

    // Teorem: Derivasjon
    {
      id: 'r1-5-2-theorem-derivasjon',
      type: 'theorem',
      title: 'Den deriverte av logistisk funksjon',
      content: `For $N(t) = \\frac{K}{1 + Ce^{-rt}}$ er den deriverte:

$$N'(t) = \\frac{rKCe^{-rt}}{(1 + Ce^{-rt})^2}$$

Denne kan også skrives som:
$$N'(t) = rN(t)\\left(1 - \\frac{N(t)}{K}\\right)$$

**Tolkning:** Veksthastigheten avhenger av:
- Nåværende populasjon $N(t)$
- Hvor mye "ledig kapasitet" det er: $1 - \\frac{N(t)}{K}$`,
    },

    // Note om differensiallikning
    {
      id: 'r1-5-2-note-diff',
      type: 'note',
      content: `**Den logistiske differensiallikningen:**

Den logistiske modellen kommer fra differensiallikningen:

$$\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)$$

Denne sier at veksthastigheten er:
- Proporsjonal med $N$ (som eksponentiell vekst)
- Multiplisert med en "bremsefaktor" $(1 - N/K)$ som blir mindre når $N$ nærmer seg $K$`,
    },

    // Eksempel 3: Derivasjon
    {
      id: 'r1-5-2-example-derivasjon',
      type: 'example',
      title: 'Eksempel 3: Veksthastighet i logistisk modell',
      problem: `For modellen $N(t) = \\frac{1000}{1 + 9e^{-0{,}2t}}$:

a) Finn $N'(t)$.
b) Beregn veksthastigheten når $N = 200$, $N = 500$ og $N = 800$.
c) Når er veksthastigheten størst?`,
      solution: `**Løsning:**

a) Med $K = 1000$, $r = 0{,}2$, $C = 9$:

$$N'(t) = \\frac{0{,}2 \\cdot 1000 \\cdot 9 \\cdot e^{-0{,}2t}}{(1 + 9e^{-0{,}2t})^2} = \\frac{1800e^{-0{,}2t}}{(1 + 9e^{-0{,}2t})^2}$$

Alternativt:
$$N'(t) = 0{,}2 \\cdot N(t) \\cdot \\left(1 - \\frac{N(t)}{1000}\\right)$$

b) Bruker alternativ form:

$N = 200$: $N' = 0{,}2 \\cdot 200 \\cdot (1 - 0{,}2) = 40 \\cdot 0{,}8 = 32$

$N = 500$: $N' = 0{,}2 \\cdot 500 \\cdot (1 - 0{,}5) = 100 \\cdot 0{,}5 = 50$ (maksimal)

$N = 800$: $N' = 0{,}2 \\cdot 800 \\cdot (1 - 0{,}8) = 160 \\cdot 0{,}2 = 32$

c) Veksthastigheten er størst når $N = K/2 = 500$, som bekrefter at vendepunktet er ved $N = 500$.`,
    },

    // Oppgave 4
    {
      id: 'r1-5-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn veksthastigheten.',
        subTasks: [
          { label: 'a', task: 'For $N(t) = \\frac{500}{1 + 4e^{-0{,}3t}}$, bruk $N\' = rN(1 - N/K)$ til å finne $N\'$ når $N = 100$.', solution: '$N\' = 0{,}3 \\cdot 100 \\cdot (1 - 100/500) = 30 \\cdot 0{,}8 = 24$ per tidsenhet' },
          { label: 'b', task: 'For samme modell, finn $N\'$ når $N = 250$ og $N = 400$.', solution: '$N\'(250) = 0{,}3 \\cdot 250 \\cdot 0{,}5 = 37{,}5$. $N\'(400) = 0{,}3 \\cdot 400 \\cdot 0{,}2 = 24$' },
          { label: 'c', task: 'En populasjon følger $N\' = 0{,}1N(1 - N/2000)$. Finn maksimal veksthastighet.', solution: 'Maks når $N = K/2 = 1000$: $N\'_{max} = 0{,}1 \\cdot 1000 \\cdot 0{,}5 = 50$ per tidsenhet' },
        ],
        hints: ['$N\'(t) = rN(1 - N/K)$', 'Maksimal veksthastighet ved $N = K/2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRAKTISKE EKSEMPLER ==========
    {
      id: 'r1-5-2-praktisk-intro',
      type: 'text',
      content: `## Praktiske anvendelser

Logistisk vekst beskriver mange fenomener i virkeligheten bedre enn eksponentiell vekst.`,
    },

    // Eksempel 4: Smittespredning
    {
      id: 'r1-5-2-example-smitte',
      type: 'example',
      title: 'Eksempel 4: Smittespredning',
      problem: `I en by med 100 000 innbyggere spres en sykdom. Spredningen følger logistisk vekst med $r = 0{,}3$ per dag. Dag 0 er 100 personer smittet.

a) Sett opp modellen for antall smittede $N(t)$.
b) Hvor mange er smittet etter 20 dager? Etter 40 dager?
c) Når er spredningen raskest, og hvor mange smittes da per dag?
d) Når er halvparten av befolkningen smittet?`,
      solution: `**Løsning:**

a) $K = 100\\,000$, $N_0 = 100$, $r = 0{,}3$

$$C = \\frac{100\\,000 - 100}{100} = 999$$

$$N(t) = \\frac{100\\,000}{1 + 999 \\cdot e^{-0{,}3t}}$$

b) $N(20) = \\frac{100\\,000}{1 + 999 \\cdot e^{-6}} \\approx \\frac{100\\,000}{1 + 2{,}47} \\approx 28\\,800$ smittede

$N(40) = \\frac{100\\,000}{1 + 999 \\cdot e^{-12}} \\approx 99\\,400$ smittede

c) Vendepunktet: $t_v = \\frac{\\ln 999}{0{,}3} \\approx 23$ dager

Maksimal smittehastighet: $N'(t_v) = \\frac{0{,}3 \\cdot 100\\,000}{4} = 7\\,500$ per dag

d) Halvparten ($50\\,000$) smittes ved vendepunktet, altså etter ca. 23 dager.`,
    },

    // Eksempel 5: Teknologiadopsjon
    {
      id: 'r1-5-2-example-teknologi',
      type: 'example',
      title: 'Eksempel 5: Spredning av ny teknologi',
      problem: `Et land med 5 millioner husstander innfører en ny strømmetjeneste. Etter 2 år har 500 000 abonnert. Modellen er logistisk med bærekapasitet 4 millioner.

a) Finn $C$ og $r$.
b) Når vil 2 millioner ha abonnert?`,
      solution: `**Løsning:**

a) Vi har $K = 4\\,000\\,000$, $N_0 = 50\\,000$ (antatt startverdi), $N(2) = 500\\,000$.

La oss anta $N_0 = 50\\,000$ (tidlig adopsjon):
$$C = \\frac{4\\,000\\,000 - 50\\,000}{50\\,000} = 79$$

Fra $N(2) = 500\\,000$:
$$500\\,000 = \\frac{4\\,000\\,000}{1 + 79e^{-2r}}$$
$$1 + 79e^{-2r} = 8$$
$$e^{-2r} = \\frac{7}{79} \\approx 0{,}0886$$
$$r = \\frac{-\\ln(0{,}0886)}{2} \\approx 1{,}21$$

b) Vi løser $N(t) = 2\\,000\\,000$:
$$2\\,000\\,000 = \\frac{4\\,000\\,000}{1 + 79e^{-1{,}21t}}$$
$$1 + 79e^{-1{,}21t} = 2$$
$$e^{-1{,}21t} = \\frac{1}{79}$$
$$t = \\frac{\\ln 79}{1{,}21} \\approx 3{,}6 \\text{ år}$$`,
    },

    // Oppgave 5
    {
      id: 'r1-5-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs de praktiske oppgavene.',
        subTasks: [
          { label: 'a', task: 'En innsjø kan ha maks 2000 fisk. 200 fisk settes ut, og $r = 0{,}4$. Når er det 1500 fisk?', solution: '$C = 9$. $1500 = \\frac{2000}{1+9e^{-0{,}4t}} \\Rightarrow e^{-0{,}4t} = \\frac{1}{27} \\Rightarrow t = \\frac{\\ln 27}{0{,}4} \\approx 8{,}2$ år' },
          { label: 'b', task: 'Et rykte spres på en skole med 800 elever. Etter 1 dag vet 50 om det. Etter 3 dager vet 400. Finn $r$.', solution: 'Fra $N(3) = 400 = K/2$: vendepunkt ved $t = 3$. $C = \\frac{800-50}{50} = 15$. $r = \\frac{\\ln 15}{3} \\approx 0{,}90$ per dag' },
          { label: 'c', task: 'En plante sprer seg i et område på 1000 m². Starter med 10 m², $r = 0{,}5$ per år. Når dekker den 900 m²?', solution: '$C = 99$. $900 = \\frac{1000}{1+99e^{-0{,}5t}} \\Rightarrow e^{-0{,}5t} = \\frac{1}{891} \\Rightarrow t = \\frac{\\ln 891}{0{,}5} \\approx 13{,}6$ år' },
        ],
        hints: ['Sett opp likningen og løs med logaritmer', 'Husk at vendepunkt inntreffer ved $N = K/2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GEOGEBRA: SAMMENLIGNING ==========
    {
      id: 'r1-5-2-geogebra-sammenlign',
      type: 'geogebra',
      title: 'Eksponentiell vs. logistisk vekst',
      description: 'Sammenlign eksponentiell og logistisk vekst. Juster parameterne for å se forskjellene.',
      appType: 'graphing',
      commands: [
        'K = Slider(100, 1000, 10, 1, 150, false, true, false, false)',
        'N0 = Slider(1, 100, 1, 1, 150, false, true, false, false)',
        'r = Slider(0.1, 1, 0.05, 1, 150, false, true, false, false)',
        'SetValue(K, 500)',
        'SetValue(N0, 10)',
        'SetValue(r, 0.3)',
        'C = (K - N0) / N0',
        'eksponentiell(t) = N0 * exp(r * t)',
        'logistisk(t) = K / (1 + C * exp(-r * t))',
        'SetColor(eksponentiell, "Red")',
        'SetColor(logistisk, "Blue")',
        'SetLineThickness(eksponentiell, 2)',
        'SetLineThickness(logistisk, 3)',
        'SetCaption(eksponentiell, "Eksponentiell")',
        'SetCaption(logistisk, "Logistisk")',
        'kapasitet = Line((0, K), (30, K))',
        'SetColor(kapasitet, "Gray")',
        'SetLineStyle(kapasitet, 1)',
        'SetCaption(kapasitet, "K (bærekapasitet)")',
        'ZoomIn(-1, -50, 30, 600)',
      ],
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-5-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Logistisk vekstmodell:**
$$N(t) = \\frac{K}{1 + Ce^{-rt}}$$

der $C = \\frac{K - N_0}{N_0}$

**Bærekapasitet $K$:** Øvre grense som $N(t)$ nærmer seg

**Vendepunkt:**
- Tidspunkt: $t_v = \\frac{\\ln C}{r}$
- Populasjon: $N(t_v) = \\frac{K}{2}$
- Maksimal veksthastighet: $N'(t_v) = \\frac{rK}{4}$

**Derivasjon:**
$$N'(t) = rN(t)\\left(1 - \\frac{N(t)}{K}\\right)$$

**Forskjell fra eksponentiell:**
- Eksponentiell: Ubegrenset vekst
- Logistisk: Begrenset av bærekapasitet, S-formet kurve`,
    },

    // Ekstraoppgaver
    {
      id: 'r1-5-2-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r1-5-2-ex-block-6',
          type: 'exercise',
          exercise: {
            id: 'r1-5-2-ex-6',
            number: 'E1',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver',
            subTasks: [
              { label: 'a', task: 'Vis at $N\'(K/2) = \\frac{rK}{4}$ ved å sette $N = K/2$ inn i $N\' = rN(1 - N/K)$.', solution: '$N\' = r \\cdot \\frac{K}{2} \\cdot (1 - \\frac{K/2}{K}) = \\frac{rK}{2} \\cdot \\frac{1}{2} = \\frac{rK}{4}$ ✓' },
              { label: 'b', task: 'En populasjon følger logistisk vekst. Ved $t = 5$ er $N = 200$ og $N\' = 40$. Ved $t = 10$ er $N = 600$. Finn $K$ og $r$.', solution: 'Fra $N\' = rN(1-N/K)$: $40 = r \\cdot 200 \\cdot (1 - 200/K)$. Trenger en likning til. Avansert problem som krever numerisk løsning.' },
              { label: 'c', task: 'Vis at den logistiske kurven er symmetrisk om vendepunktet (når $K$ er konstant).', solution: 'La $u = t - t_v$. Da blir $N(t_v + u) + N(t_v - u) = K$. Bevis ved innsetting og forenkling.' },
              { label: 'd', task: 'Deriver $N(t) = \\frac{K}{1 + Ce^{-rt}}$ ved brøkderivering og vis at du får $N\' = rN(1-N/K)$.', solution: 'Bruk kvotientregelen: $N\' = \\frac{0 \\cdot (1+Ce^{-rt}) - K \\cdot (-r)Ce^{-rt}}{(1+Ce^{-rt})^2} = \\frac{rKCe^{-rt}}{(1+Ce^{-rt})^2}$. Vis at dette = $rN(1-N/K)$.' },
            ],
            hints: ['Bruk algebraisk manipulasjon', 'Husk at $N = \\frac{K}{1+Ce^{-rt}}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_5_3: TextbookChapter = {
  id: 'r1-5-3',
  courseId: 'r1',
  chapterNumber: '5.3',
  title: 'Modellering med reelle datasett',
  description: 'Lær å velge riktig modell, utføre regresjonsanalyse og vurdere modellers gyldighet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'vurdere hvilken modell som passer til et datasett',
    'utføre eksponentiell og logistisk regresjon',
    'vurdere modellens gyldighet og begrensninger',
    'presentere og tolke resultater fra modellering',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-5-3-intro',
      type: 'text',
      content: `## Fra teori til praksis

I de forrige kapitlene har vi lært om eksponentiell og logistisk vekst som teoretiske modeller. Nå skal vi bruke disse modellene på **virkelige data**.

**Utfordringer med reelle data:**
- Data inneholder alltid noe tilfeldig variasjon (støy)
- Vi kjenner ikke parameterne ($K$, $r$, osv.) på forhånd
- Flere modeller kan passe rimelig bra
- Modeller har alltid begrensninger

I dette kapitlet lærer vi å:
1. Velge riktig modell basert på dataenes form
2. Finne parametere ved regresjonsanalyse
3. Vurdere hvor god modellen er
4. Tolke og presentere resultatene`,
    },

    // ========== HVORDAN VELGE MODELL ==========
    {
      id: 'r1-5-3-valg-intro',
      type: 'text',
      content: `## Hvordan velge modell?

Før vi tilpasser en modell, må vi velge hvilken type modell som passer. Dette gjør vi ved å se på **formen** på dataene.`,
    },

    // Tip: Kjennetegn på modelltyper
    {
      id: 'r1-5-3-tip-kjennetegn',
      type: 'tip',
      content: `**Kjennetegn på ulike veksttyper:**

**Lineær vekst:**
- Konstant økning per tidsenhet
- Rett linje i vanlig diagram
- Eksempel: Fast lønnstillegg hvert år

**Eksponentiell vekst:**
- Konstant prosentvis økning
- Kurve som blir stadig brattere
- Rett linje i semilogaritmisk diagram
- Eksempel: Rentes rente, tidlig fase av epidemi

**Logistisk vekst:**
- S-formet kurve
- Flater ut mot en øvre grense
- Eksempel: Spredning av produkt, epidemi i befolkning

**Polynomisk vekst:**
- Vekst som øker, men ikke så raskt som eksponentiell
- Eksempel: Areal som funksjon av radius`,
    },

    // Eksempel 1: Velge modell
    {
      id: 'r1-5-3-example-velge',
      type: 'example',
      title: 'Eksempel 1: Hvilken modell passer?',
      problem: `Se på følgende datasett og vurder hvilken modelltype som passer best:

**Datasett A:** Antall brukere av en ny app
| Uke | 1 | 2 | 3 | 4 | 5 | 6 |
|-----|---|---|---|---|---|---|
| Brukere (tusen) | 2 | 6 | 18 | 50 | 120 | 200 |

**Datasett B:** Gjennomsnittlig månedstemperatur
| Måned | Jan | Feb | Mar | Apr | Mai | Jun |
|-------|-----|-----|-----|-----|-----|-----|
| Temp (°C) | -3 | -1 | 4 | 9 | 14 | 18 |`,
      solution: `**Løsning:**

**Datasett A (App-brukere):**
- Fra uke 1-3: vekst er ca. 3x per uke (eksponentiell-lignende)
- Fra uke 4-6: veksten bremser (50→120→200)
- Kurven ser ut til å flate ut

**Konklusjon:** Logistisk modell passer sannsynligvis best. Veksten starter raskt og bremser, typisk for spredning av app/produkt.

**Datasett B (Temperatur):**
- Økning per måned: +2, +5, +5, +5, +4
- Relativt jevn økning, lineær-lignende
- Men temperaturer følger ofte en sinuskurve over hele året

**Konklusjon:** Lineær modell for denne perioden (vår), men en sinusmodell ville vært bedre for hele året.`,
    },

    // ========== REGRESJONSANALYSE ==========
    {
      id: 'r1-5-3-regresjon-intro',
      type: 'text',
      content: `## Regresjonsanalyse

**Regresjon** er en metode for å finne den modellen som best tilpasses dataene. Vi bruker ofte **minste kvadraters metode**, som minimerer summen av kvadrerte avvik mellom data og modell.

I praksis bruker vi digitale verktøy som GeoGebra, Excel eller kalkulator til å utføre regresjon.`,
    },

    // Definisjon: R²
    {
      id: 'r1-5-3-def-r2',
      type: 'definition',
      title: 'Forklaringsgrad (R²)',
      content: `**Forklaringsgraden $R^2$** (R-squared) måler hvor godt modellen forklarer variasjonen i dataene.

$$R^2 = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2}$$

**Tolkning:**
- $R^2 = 1$: Perfekt tilpasning (alle punkter på kurven)
- $R^2 = 0$: Modellen forklarer ingenting
- $R^2 \\geq 0{,}9$: Svært god tilpasning
- $R^2 \\geq 0{,}7$: God tilpasning
- $R^2 < 0{,}5$: Svak tilpasning`,
    },

    // Note om regresjon
    {
      id: 'r1-5-3-note-regresjon',
      type: 'note',
      content: `**Viktig om regresjonsanalyse:**

1. **Høy $R^2$ betyr ikke at modellen er riktig.** En komplisert modell kan gi høy $R^2$ uten å fange den virkelige sammenhengen.

2. **Ekstrapolering er risikabelt.** Modellen er bare pålitelig innenfor dataområdet. Å forutsi langt utenfor kan gi feil.

3. **Korrelasjon er ikke kausalitet.** Selv om dataene passer en modell, betyr det ikke at x forårsaker y.

4. **Sjekk residualene.** Se om avvikene er tilfeldig fordelt eller har mønster.`,
    },

    // ========== EKSPONENTIELL REGRESJON ==========
    {
      id: 'r1-5-3-ekspregresjon-intro',
      type: 'text',
      content: `## Eksponentiell regresjon

Når dataene ser ut til å følge eksponentiell vekst, tilpasser vi modellen:
$$y = a \\cdot b^x$$

eller ekvivalent:
$$y = a \\cdot e^{kx}$$

der $b = e^k$.`,
    },

    // Eksempel 2: Eksponentiell regresjon
    {
      id: 'r1-5-3-example-ekspregresjon',
      type: 'example',
      title: 'Eksempel 2: Eksponentiell regresjon',
      problem: `Befolkningen i en by (i tusen):

| År etter 2000 | 0 | 5 | 10 | 15 | 20 |
|---------------|---|---|----|----|---|
| Befolkning | 50 | 58 | 67 | 78 | 90 |

a) Utfør eksponentiell regresjon og finn modellen $N(t) = a \\cdot b^t$.
b) Hva er den årlige vekstraten?
c) Hva forutsier modellen for 2030?`,
      solution: `**Løsning:**

a) Vi bruker GeoGebra eller kalkulator til eksponentiell regresjon.

Dataene gir omtrent:
$$N(t) = 50{,}0 \\cdot 1{,}030^t$$

$R^2 \\approx 0{,}998$ (svært god tilpasning)

b) Vekstfaktoren er $b = 1{,}030$, som betyr:
$$\\text{Årlig vekstrate} = 1{,}030 - 1 = 0{,}030 = 3{,}0\\%$$

c) For 2030 er $t = 30$:
$$N(30) = 50{,}0 \\cdot 1{,}030^{30} \\approx 50 \\cdot 2{,}43 \\approx 121 \\text{ tusen}$$

**OBS:** Dette forutsetter at veksten fortsetter eksponentielt, noe som sjelden skjer i praksis.`,
    },

    // GeoGebra: Eksponentiell regresjon
    {
      id: 'r1-5-3-geogebra-ekspregresjon',
      type: 'geogebra',
      title: 'Eksponentiell regresjon',
      description: 'Skriv inn datapunktene som en liste og bruk FitExp-kommandoen.',
      appType: 'graphing',
      commands: [
        'data = {(0, 50), (5, 58), (10, 67), (15, 78), (20, 90)}',
        'regresjon = FitExp(data)',
        'SetColor(regresjon, "Blue")',
        'SetLineThickness(regresjon, 2)',
        'ZoomIn(-2, 40, 25, 100)',
      ],
    },

    // Oppgave 1
    {
      id: 'r1-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utfør eksponentiell regresjon på datasettene.',
        subTasks: [
          { label: 'a', task: 'Et innskudd over tid: År 0: 10000, År 3: 11600, År 6: 13400, År 9: 15500. Finn modellen og renten.', solution: 'Regresjon gir ca. $N(t) = 10000 \\cdot 1{,}05^t$. Årlig rente ca. 5%.' },
          { label: 'b', task: 'Bakterievekst: Time 0: 100, Time 2: 400, Time 4: 1600, Time 6: 6400. Finn modellen.', solution: 'Regresjon gir $N(t) = 100 \\cdot 2^t$. Fordobles hver time.' },
          { label: 'c', task: 'For dataene i b), finn doblingstiden ved formelen $t_2 = \\frac{\\ln 2}{\\ln a}$.', solution: '$t_2 = \\frac{\\ln 2}{\\ln 2} = 1$ time. Stemmer med at $a = 2$.' },
        ],
        hints: ['Bruk FitExp i GeoGebra eller eksponentiell regresjon på kalkulator', 'Vekstfaktor $a$ forteller prosentvis vekst: $(a-1) \\cdot 100\\%$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LOGISTISK REGRESJON ==========
    {
      id: 'r1-5-3-logregresjon-intro',
      type: 'text',
      content: `## Logistisk regresjon

Når dataene flater ut mot en øvre grense, bruker vi logistisk regresjon:
$$y = \\frac{L}{1 + ae^{-bx}}$$

der $L$ er bærekapasiteten (asymptoten).`,
    },

    // Eksempel 3: Logistisk regresjon
    {
      id: 'r1-5-3-example-logregresjon',
      type: 'example',
      title: 'Eksempel 3: Logistisk regresjon på COVID-data',
      problem: `Kumulativt antall COVID-tilfeller i et land (i tusen):

| Dag | 0 | 10 | 20 | 30 | 40 | 50 | 60 |
|-----|---|----|----|----|----|----|----|
| Tilfeller | 1 | 5 | 25 | 100 | 250 | 400 | 480 |

a) Forklar hvorfor logistisk modell passer.
b) Bruk regresjon til å finne modellen.
c) Estimer bærekapasiteten (totalt antall tilfeller).`,
      solution: `**Løsning:**

a) Dataene viser typisk logistisk mønster:
- Tidlig: Rask, nesten eksponentiell vekst (1→5→25)
- Midtfase: Høy vekst (100→250)
- Senfase: Veksten bremser (400→480)

Kurven flater ut, noe som tyder på at vi nærmer oss bærekapasiteten.

b) Logistisk regresjon i GeoGebra (FitLogistic) gir omtrent:
$$N(t) = \\frac{500}{1 + 499 \\cdot e^{-0{,}12t}}$$

$R^2 \\approx 0{,}996$

c) Bærekapasiteten er $L = 500$ tusen.

**Tolkning:** Modellen forutsier at totalt ca. 500 000 vil bli smittet i denne bølgen.

**Forsiktighet:** Bærekapasiteten i smittemodeller avhenger av tiltak og atferdsendringer, så den kan endre seg!`,
    },

    // Oppgave 2
    {
      id: 'r1-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Arbeid med logistisk regresjon.',
        subTasks: [
          { label: 'a', task: 'Salg av et nytt produkt (tusen): Måned 1: 5, Måned 3: 40, Måned 6: 150, Måned 9: 280, Måned 12: 350. Tilpass logistisk modell.', solution: 'FitLogistic gir ca. $N(t) = \\frac{380}{1 + 75e^{-0{,}5t}}$. Bærekapasitet ca. 380 tusen.' },
          { label: 'b', task: 'For modellen i a), finn vendepunktet og maksimal salgshastighet.', solution: '$t_v = \\frac{\\ln 75}{0{,}5} \\approx 8{,}6$ måneder. $N\'_{max} = \\frac{0{,}5 \\cdot 380}{4} \\approx 47{,}5$ tusen per måned.' },
          { label: 'c', task: 'Når vil 90% av bærekapasiteten være nådd?', solution: '$0{,}9 \\cdot 380 = 342 = \\frac{380}{1+75e^{-0{,}5t}} \\Rightarrow t \\approx 13$ måneder' },
        ],
        hints: ['Bruk FitLogistic i GeoGebra', 'Vendepunkt: $t_v = \\frac{\\ln C}{r}$ der $C$ og $r$ er fra modellen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VURDERE MODELLENS GYLDIGHET ==========
    {
      id: 'r1-5-3-gyldighet-intro',
      type: 'text',
      content: `## Vurdere modellens gyldighet

En god modell skal:
1. Passe godt til dataene (høy $R^2$)
2. Ha rimelige parameterverdier
3. Gi fornuftige prediksjoner
4. Ha tilfeldig fordelte residualer`,
    },

    // Warning om modellbegrensninger
    {
      id: 'r1-5-3-warning-begrensninger',
      type: 'warning',
      title: 'Vanlige feil i modellering',
      content: `**Unngå disse fallgruvene:**

1. **Overfitting:** Å bruke for komplisert modell som følger støy i dataene.

2. **Ekstrapolering:** Å forutsi langt utenfor dataområdet. En modell som passer godt i dag, kan gi helt feil prediksjoner for fremtiden.

3. **Ignorere kontekst:** Matematisk god tilpasning er ikke nok. Modellen må gi mening i den virkelige situasjonen.

4. **Anta konstante forhold:** Vekstrater og bærekapasitet kan endre seg over tid.`,
    },

    // Eksempel 4: Kritisk vurdering
    {
      id: 'r1-5-3-example-kritisk',
      type: 'example',
      title: 'Eksempel 4: Kritisk vurdering av modell',
      problem: `En eksponentiell modell $N(t) = 1000 \\cdot 1{,}1^t$ beskriver veksten i et selskap fra år 0 til år 10.

a) Hva forutsier modellen for år 50?
b) Diskuter hvorfor denne prediksjonen sannsynligvis er feil.
c) Hvilken modell ville vært mer realistisk?`,
      solution: `**Løsning:**

a) $N(50) = 1000 \\cdot 1{,}1^{50} \\approx 1000 \\cdot 117 = 117\\,000$

Modellen forutsier 117 ganger startverdi etter 50 år.

b) **Problemer med prediksjonen:**

1. **Markedsbegrensninger:** Intet marked er uendelig. Etterspørselen vil nå et tak.

2. **Konkurranse:** Andre aktører vil komme inn hvis markedet er attraktivt.

3. **Ressurser:** Selskapet vil møte begrensninger i kapasitet, ansatte, kapital.

4. **Historisk erfaring:** Få selskaper vokser eksponentielt i 50 år.

c) **Mer realistisk modell:**

En **logistisk modell** med bærekapasitet ville vært mer realistisk:
$$N(t) = \\frac{K}{1 + Ce^{-rt}}$$

der $K$ representerer markedets størrelse eller selskapets maksimale kapasitet.`,
    },

    // Oppgave 3
    {
      id: 'r1-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vurder modellenes gyldighet.',
        subTasks: [
          { label: 'a', task: 'En lineær modell $T(t) = 15 + 0{,}5t$ beskriver global temperatur fra 1900 til 2000. Hva forutsier den for år 2200? Diskuter rimelighet.', solution: '$T(300) = 15 + 150 = 165°C$. Helt urealistisk! Lineær modell er ikke egnet for langsiktig klimaprediksjon.' },
          { label: 'b', task: 'En logistisk modell for verdens befolkning har $K = 11$ milliarder. Hvilke faktorer kan endre $K$?', solution: 'Teknologi (matproduksjon), ressurser (vann, energi), politikk (familieplanlegging), klimaendringer, epidemier.' },
          { label: 'c', task: 'Et datasett har $R^2 = 0{,}99$ for eksponentiell modell og $R^2 = 0{,}98$ for logistisk. Hvilken bør du velge?', solution: 'Avhenger av kontekst! Hvis det er naturlige begrensninger, velg logistisk. Høy $R^2$ alene er ikke tilstrekkelig grunnlag.' },
        ],
        hints: ['Tenk på hva som begrenser vekst i virkeligheten', '$R^2$ alene avgjør ikke hvilken modell som er riktig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRESENTERE RESULTATER ==========
    {
      id: 'r1-5-3-presentere-intro',
      type: 'text',
      content: `## Presentere og tolke resultater

Når du presenterer modellering, bør du inkludere:

1. **Beskrivelse av dataene:** Hva måles? Hvor kommer dataene fra?
2. **Begrunnelse for modellvalg:** Hvorfor valgte du denne modellen?
3. **Modellen med parametere:** Vis formelen med tall
4. **Tilpasningsmål:** $R^2$ eller annen kvalitetsmåling
5. **Tolkning:** Hva betyr parameterne? Hva sier modellen?
6. **Begrensninger:** Når gjelder modellen? Hva kan den ikke si?
7. **Konklusjon:** Svar på spørsmålet som ble stilt`,
    },

    // Eksempel 5: Full modelleringsrapport
    {
      id: 'r1-5-3-example-rapport',
      type: 'example',
      title: 'Eksempel 5: Modelleringsrapport',
      problem: `Skriv en kort modelleringsrapport for følgende data:

Antall registrerte el-biler i Norge (tusen):
| År | 2015 | 2017 | 2019 | 2021 | 2023 |
|----|------|------|------|------|------|
| Antall | 70 | 140 | 260 | 450 | 700 |`,
      solution: `**Modelleringsrapport: El-bil-utbredelse i Norge**

**1. Data:**
Antall registrerte el-biler i Norge fra 2015 til 2023. Kilde: Statistisk sentralbyrå.

**2. Modellvalg:**
Dataene viser S-formet vekst som tyder på logistisk modell. Veksten bremser etter hvert som markedet nærmer seg metning.

**3. Modell:**
Logistisk regresjon gir:
$$N(t) = \\frac{1200}{1 + 16 \\cdot e^{-0{,}35(t-2015)}}$$

**4. Tilpasning:**
$R^2 = 0{,}997$ (svært god)

**5. Tolkning:**
- **Bærekapasitet:** Ca. 1,2 millioner el-biler
- **Vekstrate:** $r = 0{,}35$ per år
- **Vendepunkt:** Ca. 2023, da veksten var raskest

**6. Begrensninger:**
- Bærekapasiteten kan endre seg med infrastruktur og politikk
- Modellen tar ikke hensyn til økonomiske kriser eller teknologiske gjennombrudd

**7. Konklusjon:**
El-bil-markedet i Norge nærmer seg metning rundt 1,2 millioner. Veksten vil fortsette, men bremse de neste årene.`,
    },

    // Oppgave 4
    {
      id: 'r1-5-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en modelleringsrapport for datasettet.',
        subTasks: [
          { label: 'a', task: 'Strømmeabonnenter i en tjeneste (millioner): 2018: 5, 2019: 12, 2020: 30, 2021: 55, 2022: 75, 2023: 88. Velg modell og tilpass.', solution: 'Logistisk modell passer. $N(t) \\approx \\frac{100}{1 + 19e^{-0{,}8(t-2018)}}$. Bærekapasitet ca. 100 millioner.' },
          { label: 'b', task: 'Forklar valget av modell og tolk parameterne.', solution: 'Logistisk valgt pga. S-form og naturlig metning i markedet. $K=100$ mill er maks abonnenter. $r=0{,}8$ viser rask vekst.' },
          { label: 'c', task: 'Forutsi antall abonnenter i 2025. Diskuter usikkerheten.', solution: 'Modellen gir ca. 97 millioner. Usikkerhet: Konkurranse, prisendringer, markedsutvikling kan påvirke. Prediksjonen er rimelig men ikke sikker.' },
        ],
        hints: ['Følg strukturen fra eksempel 5', 'Diskuter alltid begrensninger og usikkerhet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // GeoGebra: Samlet modelleringsverktøy
    {
      id: 'r1-5-3-geogebra-modellering',
      type: 'geogebra',
      title: 'Sammenlign modeller',
      description: 'Skriv inn dine egne datapunkter og sammenlign lineær, eksponentiell og logistisk tilpasning.',
      appType: 'graphing',
      commands: [
        'data = {(0, 10), (2, 25), (4, 55), (6, 100), (8, 150), (10, 180)}',
        'linreg = FitLine(data)',
        'expreg = FitExp(data)',
        'logreg = FitLogistic(data)',
        'SetColor(linreg, "Red")',
        'SetColor(expreg, "Green")',
        'SetColor(logreg, "Blue")',
        'SetCaption(linreg, "Lineær")',
        'SetCaption(expreg, "Eksponentiell")',
        'SetCaption(logreg, "Logistisk")',
        'ZoomIn(-1, 0, 15, 250)',
      ],
    },

    // Oppgave 5: Åpen oppgave
    {
      id: 'r1-5-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Åpne modelleringsoppgaver.',
        subTasks: [
          { label: 'a', task: 'Finn et datasett på SSB.no eller en annen kilde. Velg data som kan modelleres med eksponentiell eller logistisk vekst.', solution: 'Vurdering: Er dataene troverdige? Er modellvalget begrunnet? Er tolkningen rimelig?' },
          { label: 'b', task: 'Tilpass en passende modell og beregn $R^2$.', solution: 'Vurdering: Er modellen riktig implementert? Er $R^2$ rimelig?' },
          { label: 'c', task: 'Skriv en kort rapport (ca. 200 ord) der du tolker resultatene og diskuterer begrensninger.', solution: 'Vurdering: Er rapporten strukturert? Er tolkningene fornuftige? Er begrensninger diskutert?' },
        ],
        hints: ['SSB har data om befolkning, økonomi, helse osv.', 'Husk å oppgi kilde for dataene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-5-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Velge modell:**
- Lineær: Konstant økning
- Eksponentiell: Konstant prosentvis økning
- Logistisk: S-kurve med øvre grense

**Regresjonsanalyse:**
- FitLine, FitExp, FitLogistic i GeoGebra
- $R^2$ måler tilpasningskvalitet

**Kritisk vurdering:**
- Høy $R^2$ betyr ikke nødvendigvis god modell
- Ekstrapolering er risikabelt
- Kontekst og rimelighet er viktig

**Presentasjon:**
- Beskriv data og modellvalg
- Vis modell med parametere og $R^2$
- Tolk resultater og diskuter begrensninger`,
    },

    // Ekstraoppgaver
    {
      id: 'r1-5-3-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r1-5-3-ex-block-6',
          type: 'exercise',
          exercise: {
            id: 'r1-5-3-ex-6',
            number: 'E1',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver',
            subTasks: [
              { label: 'a', task: 'Forklar hvorfor man kan bruke lineær regresjon på $\\ln(y)$ vs $x$ for å finne eksponentiell modell $y = ae^{bx}$.', solution: '$\\ln(y) = \\ln(a) + bx$ er lineær i $x$. Lineær regresjon på $(x, \\ln y)$ gir $b$ som stigningstall og $\\ln(a)$ som konstantledd.' },
              { label: 'b', task: 'Et datasett har $R^2 = 0{,}95$ for eksponentiell og $R^2 = 0{,}93$ for lineær modell. Residualene for eksponentiell viser systematisk mønster. Hvilken modell bør velges?', solution: 'Lineær! Selv om $R^2$ er lavere, tyder systematiske residualer på at eksponentiell modell ikke fanger den virkelige sammenhengen.' },
              { label: 'c', task: 'Diskuter etiske aspekter ved å bruke vekstmodeller for å forutsi spredning av sykdom.', solution: 'Modeller kan informere tiltak, men bør brukes med forsiktighet. Usikkerhet må kommuniseres. Feilaktige prediksjoner kan skape unødig frykt eller falsk trygghet.' },
            ],
            hints: ['Tenk på hva residualer forteller om modelltilpasning', 'Etikk: Hvordan påvirker prediksjonene beslutninger?'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_6_1: TextbookChapter = {
  id: 'r1-6-1',
  courseId: 'r1',
  chapterNumber: '6.1',
  title: 'Vektorer i planet',
  description: 'Lær om vektorbegrepet, komponentform, vektoraddisjon og skalar multiplikasjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå hva en vektor er og skille mellom størrelse og retning',
    'skrive vektorer på komponentform',
    'utføre vektoraddisjon og subtraksjon',
    'beherske skalar multiplikasjon av vektorer',
    'bruke GeoGebra til å visualisere vektorer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-6-1-intro',
      type: 'text',
      content: `## Hva er en vektor?

I matematikk og fysikk trenger vi ofte å beskrive størrelser som har både **størrelse** (lengde) og **retning**. Eksempler er kraft, hastighet, forskyvning og akselerasjon.

En slik størrelse kalles en **vektor**. I motsetning til vanlige tall (skalarer), som bare har en verdi, har vektorer altså to egenskaper: hvor lang de er, og hvilken retning de peker.`,
    },
    {
      id: 'r1-6-1-vektor2d-bilde',
      type: 'image',
      src: '/images/r1/vektorer-2d.svg',
      alt: 'Vektorer i planet med komponentform',
      caption: 'Vektorer i planet - storrelse og retning',
    },
    {
      id: 'r1-6-1-vektoraddisjon-bilde',
      type: 'image',
      src: '/images/r1/vektorer-addisjon.svg',
      alt: 'Vektoraddisjon med trekantregelen',
      caption: 'Vektoraddisjon - summen av to vektorer',
    },

    // Definisjon: Vektor
    {
      id: 'r1-6-1-def-vektor',
      type: 'definition',
      title: 'Vektor',
      content: `En **vektor** er en størrelse som har både lengde (størrelse) og retning.

Vi skriver vektorer på forskjellige måter:
- $\\vec{v}$ (pil over bokstaven)
- $\\bar{v}$ (strek over bokstaven)
- $\\mathbf{v}$ (fet skrift)

To vektorer er **like** hvis de har samme lengde og samme retning, uansett hvor de er plassert i planet.`,
    },

    // Bilde: Vektor illustrasjon
    {
      id: 'r1-6-1-vektor-bilde',
      type: 'text',
      content: `### Grafisk framstilling

En vektor tegnes som en pil fra ett punkt (startpunktet) til et annet (sluttpunktet). Pilens lengde viser vektorens størrelse, og pilens retning viser vektorens retning.

Vektorer som har samme lengde og peker i samme retning, regnes som like vektorer selv om de starter fra forskjellige punkter.`,
    },

    // GeoGebra: Visualisere vektorer
    {
      id: 'r1-6-1-geogebra-intro',
      type: 'geogebra',
      title: 'Vektorer i planet',
      description: 'Utforsk vektorer grafisk. Du kan dra i punktene for å se hvordan vektorene endrer seg.',
      appType: 'geometry',
      commands: [
        'A = (1, 1)',
        'B = (4, 3)',
        'v = Vector(A, B)',
        'C = (2, 4)',
        'D = (5, 6)',
        'u = Vector(C, D)',
        'SetColor(v, "Blue")',
        'SetColor(u, "Red")',
        'SetCaption(v, "v")',
        'SetCaption(u, "u")',
      ],
    },

    // ========== KOMPONENTFORM ==========
    {
      id: 'r1-6-1-komponent-intro',
      type: 'text',
      content: `## Komponentform

For å regne med vektorer bruker vi et koordinatsystem. En vektor $\\vec{v}$ kan da skrives ved hjelp av sine **komponenter** langs $x$-aksen og $y$-aksen.`,
    },

    // Definisjon: Komponentform
    {
      id: 'r1-6-1-def-komponent',
      type: 'definition',
      title: 'Komponentform',
      content: `En vektor $\\vec{v}$ i planet skrives på **komponentform** som:

$$\\vec{v} = [a, b] \\quad \\text{eller} \\quad \\vec{v} = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$$

der $a$ er komponenten i $x$-retning og $b$ er komponenten i $y$-retning.

Hvis $\\vec{v}$ går fra punkt $A = (x_1, y_1)$ til punkt $B = (x_2, y_2)$, så er:

$$\\vec{AB} = [x_2 - x_1, y_2 - y_1]$$`,
    },

    // Definisjon: Enhetsvektorer
    {
      id: 'r1-6-1-def-enhetsvektor',
      type: 'definition',
      title: 'Enhetsvektorene i og j',
      content: `**Enhetsvektorene** $\\vec{i}$ og $\\vec{j}$ er vektorer med lengde 1 langs aksene:

$$\\vec{i} = [1, 0] \\quad \\text{og} \\quad \\vec{j} = [0, 1]$$

Enhver vektor kan skrives som en kombinasjon av disse:

$$\\vec{v} = [a, b] = a\\vec{i} + b\\vec{j}$$`,
    },

    // Eksempel 1: Komponentform
    {
      id: 'r1-6-1-example-komponent',
      type: 'example',
      title: 'Eksempel 1: Finne komponentform',
      problem: `Finn vektoren $\\vec{AB}$ på komponentform når:

a) $A = (2, 3)$ og $B = (5, 7)$
b) $A = (-1, 4)$ og $B = (3, -2)$
c) $A = (0, 0)$ og $B = (-3, 5)$`,
      solution: `**Løsning:**

Vi bruker formelen $\\vec{AB} = [x_2 - x_1, y_2 - y_1]$:

a) $\\vec{AB} = [5 - 2, 7 - 3] = [3, 4]$

b) $\\vec{AB} = [3 - (-1), -2 - 4] = [4, -6]$

c) $\\vec{AB} = [-3 - 0, 5 - 0] = [-3, 5]$`,
    },

    // Oppgave 1
    {
      id: 'r1-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vektoren $\\vec{AB}$ på komponentform.',
        subTasks: [
          { label: 'a', task: '$A = (1, 2)$ og $B = (4, 6)$', solution: '$\\vec{AB} = [4-1, 6-2] = [3, 4]$' },
          { label: 'b', task: '$A = (3, -1)$ og $B = (-2, 4)$', solution: '$\\vec{AB} = [-2-3, 4-(-1)] = [-5, 5]$' },
          { label: 'c', task: '$A = (-2, -3)$ og $B = (1, 0)$', solution: '$\\vec{AB} = [1-(-2), 0-(-3)] = [3, 3]$' },
          { label: 'd', task: '$A = (5, 0)$ og $B = (0, 5)$', solution: '$\\vec{AB} = [0-5, 5-0] = [-5, 5]$' },
        ],
        hints: ['Bruk formelen $\\vec{AB} = [x_B - x_A, y_B - y_A]$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== STEDVEKTOR OG FORSKYVNINGSVEKTOR ==========
    {
      id: 'r1-6-1-stedvektor-intro',
      type: 'text',
      content: `## Stedvektor og forskyvningsvektor

Det finnes to viktige typer vektorer som brukes mye:`,
    },

    // Definisjon: Stedvektor
    {
      id: 'r1-6-1-def-stedvektor',
      type: 'definition',
      title: 'Stedvektor',
      content: `**Stedvektoren** til et punkt $P = (a, b)$ er vektoren fra origo til punktet:

$$\\vec{OP} = [a, b]$$

Stedvektoren beskriver altså posisjonen til et punkt i koordinatsystemet.`,
    },

    // Definisjon: Forskyvningsvektor
    {
      id: 'r1-6-1-def-forskyvning',
      type: 'definition',
      title: 'Forskyvningsvektor',
      content: `En **forskyvningsvektor** beskriver bevegelsen fra ett punkt til et annet.

Forskyvningsvektoren fra $A$ til $B$ er:
$$\\vec{AB} = \\vec{OB} - \\vec{OA}$$

der $\\vec{OA}$ og $\\vec{OB}$ er stedvektorene til $A$ og $B$.`,
    },

    // Eksempel 2: Stedvektor og forskyvning
    {
      id: 'r1-6-1-example-stedvektor',
      type: 'example',
      title: 'Eksempel 2: Stedvektor og forskyvningsvektor',
      problem: `Et punkt $P = (3, 4)$ flyttes til punkt $Q = (7, 1)$.

a) Finn stedvektoren til $P$.
b) Finn stedvektoren til $Q$.
c) Finn forskyvningsvektoren fra $P$ til $Q$.`,
      solution: `**Løsning:**

a) Stedvektoren til $P$:
$$\\vec{OP} = [3, 4]$$

b) Stedvektoren til $Q$:
$$\\vec{OQ} = [7, 1]$$

c) Forskyvningsvektoren fra $P$ til $Q$:
$$\\vec{PQ} = \\vec{OQ} - \\vec{OP} = [7, 1] - [3, 4] = [7-3, 1-4] = [4, -3]$$`,
    },

    // ========== VEKTORADDISJON ==========
    {
      id: 'r1-6-1-addisjon-intro',
      type: 'text',
      content: `## Vektoraddisjon

Når vi legger sammen to vektorer, får vi en ny vektor som kalles **summen** eller **resultanten**.`,
    },

    // Definisjon: Vektoraddisjon
    {
      id: 'r1-6-1-def-addisjon',
      type: 'definition',
      title: 'Vektoraddisjon',
      content: `For to vektorer $\\vec{u} = [a_1, b_1]$ og $\\vec{v} = [a_2, b_2]$ er summen:

$$\\vec{u} + \\vec{v} = [a_1 + a_2, b_1 + b_2]$$

**Grafisk konstruksjon:**
- **Trekantregelen:** Plasser startpunktet til $\\vec{v}$ i sluttpunktet til $\\vec{u}$. Summen går fra startpunktet til $\\vec{u}$ til sluttpunktet til $\\vec{v}$.
- **Parallellogramregelen:** Tegn begge vektorer fra samme punkt. Summen er diagonalen i parallellogrammet de spenner ut.`,
    },

    // GeoGebra: Vektoraddisjon
    {
      id: 'r1-6-1-geogebra-addisjon',
      type: 'geogebra',
      title: 'Vektoraddisjon: Trekantregelen',
      description: 'Dra i punktene for å se hvordan sumvektoren endrer seg.',
      appType: 'geometry',
      commands: [
        'O = (0, 0)',
        'A = (3, 1)',
        'B = (1, 3)',
        'u = Vector(O, A)',
        'v = Vector(A, A + (B - O))',
        'sum = Vector(O, A + (B - O))',
        'SetColor(u, "Blue")',
        'SetColor(v, "Green")',
        'SetColor(sum, "Red")',
        'SetCaption(u, "u")',
        'SetCaption(v, "v")',
        'SetCaption(sum, "u + v")',
        'SetLineThickness(sum, 3)',
      ],
    },

    // Eksempel 3: Vektoraddisjon
    {
      id: 'r1-6-1-example-addisjon',
      type: 'example',
      title: 'Eksempel 3: Vektoraddisjon',
      problem: `La $\\vec{u} = [3, 2]$ og $\\vec{v} = [-1, 4]$.

Regn ut:
a) $\\vec{u} + \\vec{v}$
b) $\\vec{v} + \\vec{u}$
c) $(\\vec{u} + \\vec{v}) + \\vec{w}$ der $\\vec{w} = [2, -3]$`,
      solution: `**Løsning:**

a) $\\vec{u} + \\vec{v} = [3, 2] + [-1, 4] = [3 + (-1), 2 + 4] = [2, 6]$

b) $\\vec{v} + \\vec{u} = [-1, 4] + [3, 2] = [-1 + 3, 4 + 2] = [2, 6]$

Vi ser at $\\vec{u} + \\vec{v} = \\vec{v} + \\vec{u}$ (vektoraddisjon er kommutativ).

c) $(\\vec{u} + \\vec{v}) + \\vec{w} = [2, 6] + [2, -3] = [2 + 2, 6 + (-3)] = [4, 3]$`,
    },

    // Oppgave 2
    {
      id: 'r1-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $\\vec{a} = [2, 5]$, $\\vec{b} = [-3, 1]$ og $\\vec{c} = [4, -2]$. Regn ut:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} + \\vec{b}$', solution: '$\\vec{a} + \\vec{b} = [2 + (-3), 5 + 1] = [-1, 6]$' },
          { label: 'b', task: '$\\vec{b} + \\vec{c}$', solution: '$\\vec{b} + \\vec{c} = [-3 + 4, 1 + (-2)] = [1, -1]$' },
          { label: 'c', task: '$\\vec{a} + \\vec{b} + \\vec{c}$', solution: '$\\vec{a} + \\vec{b} + \\vec{c} = [2 - 3 + 4, 5 + 1 - 2] = [3, 4]$' },
          { label: 'd', task: '$\\vec{a} + \\vec{c}$', solution: '$\\vec{a} + \\vec{c} = [2 + 4, 5 + (-2)] = [6, 3]$' },
        ],
        hints: ['Legg sammen komponent for komponent'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SKALAR MULTIPLIKASJON ==========
    {
      id: 'r1-6-1-skalar-intro',
      type: 'text',
      content: `## Skalar multiplikasjon

Når vi ganger en vektor med et tall (en skalar), endrer vi vektorens lengde.`,
    },

    // Definisjon: Skalar multiplikasjon
    {
      id: 'r1-6-1-def-skalar',
      type: 'definition',
      title: 'Skalar multiplikasjon',
      content: `For en vektor $\\vec{v} = [a, b]$ og et tall $k$ (en skalar) er:

$$k \\cdot \\vec{v} = [ka, kb]$$

**Egenskaper:**
- $|k \\cdot \\vec{v}| = |k| \\cdot |\\vec{v}|$ (lengden skaleres)
- Hvis $k > 0$: vektoren beholder retning
- Hvis $k < 0$: vektoren snur retning
- Hvis $k = 0$: vi får nullvektoren`,
    },

    // Definisjon: Motsatt vektor
    {
      id: 'r1-6-1-def-motsatt',
      type: 'definition',
      title: 'Motsatt vektor og nullvektor',
      content: `**Motsatt vektor:** Den motsatte vektoren til $\\vec{v} = [a, b]$ er:
$$-\\vec{v} = [-a, -b]$$

Den har samme lengde som $\\vec{v}$, men motsatt retning.

**Nullvektoren:** Nullvektoren er $\\vec{0} = [0, 0]$. Den har lengde 0 og ingen definert retning.

For alle vektorer gjelder: $\\vec{v} + (-\\vec{v}) = \\vec{0}$`,
    },

    // Eksempel 4: Skalar multiplikasjon
    {
      id: 'r1-6-1-example-skalar',
      type: 'example',
      title: 'Eksempel 4: Skalar multiplikasjon',
      problem: `La $\\vec{v} = [2, -3]$.

Regn ut:
a) $3\\vec{v}$
b) $-2\\vec{v}$
c) $\\frac{1}{2}\\vec{v}$
d) $-\\vec{v}$`,
      solution: `**Løsning:**

a) $3\\vec{v} = 3 \\cdot [2, -3] = [3 \\cdot 2, 3 \\cdot (-3)] = [6, -9]$

b) $-2\\vec{v} = -2 \\cdot [2, -3] = [(-2) \\cdot 2, (-2) \\cdot (-3)] = [-4, 6]$

c) $\\frac{1}{2}\\vec{v} = \\frac{1}{2} \\cdot [2, -3] = [\\frac{1}{2} \\cdot 2, \\frac{1}{2} \\cdot (-3)] = [1, -\\frac{3}{2}]$

d) $-\\vec{v} = -1 \\cdot [2, -3] = [-2, 3]$`,
    },

    // Oppgave 3
    {
      id: 'r1-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $\\vec{u} = [4, -2]$ og $\\vec{v} = [-1, 3]$. Regn ut:',
        subTasks: [
          { label: 'a', task: '$2\\vec{u}$', solution: '$2\\vec{u} = [8, -4]$' },
          { label: 'b', task: '$-3\\vec{v}$', solution: '$-3\\vec{v} = [3, -9]$' },
          { label: 'c', task: '$2\\vec{u} + 3\\vec{v}$', solution: '$2\\vec{u} + 3\\vec{v} = [8, -4] + [-3, 9] = [5, 5]$' },
          { label: 'd', task: '$\\vec{u} - 2\\vec{v}$', solution: '$\\vec{u} - 2\\vec{v} = [4, -2] - [-2, 6] = [4 - (-2), -2 - 6] = [6, -8]$' },
        ],
        hints: ['Husk at $\\vec{u} - 2\\vec{v} = \\vec{u} + (-2)\\vec{v}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SUBTRAKSJON ==========
    {
      id: 'r1-6-1-subtraksjon-intro',
      type: 'text',
      content: `## Vektorsubtraksjon

Subtraksjon av vektorer defineres ved hjelp av addisjon og motsatt vektor.`,
    },

    // Definisjon: Vektorsubtraksjon
    {
      id: 'r1-6-1-def-subtraksjon',
      type: 'definition',
      title: 'Vektorsubtraksjon',
      content: `For to vektorer $\\vec{u} = [a_1, b_1]$ og $\\vec{v} = [a_2, b_2]$ er differansen:

$$\\vec{u} - \\vec{v} = \\vec{u} + (-\\vec{v}) = [a_1 - a_2, b_1 - b_2]$$

Grafisk: $\\vec{u} - \\vec{v}$ går fra sluttpunktet til $\\vec{v}$ til sluttpunktet til $\\vec{u}$ (når begge starter fra samme punkt).`,
    },

    // Eksempel 5: Kombinerte operasjoner
    {
      id: 'r1-6-1-example-kombinert',
      type: 'example',
      title: 'Eksempel 5: Kombinerte operasjoner',
      problem: `La $\\vec{a} = [1, 4]$, $\\vec{b} = [3, -2]$ og $\\vec{c} = [-2, 1]$.

Regn ut:
a) $2\\vec{a} - \\vec{b}$
b) $\\vec{a} + 2\\vec{b} - 3\\vec{c}$
c) $-\\vec{a} + \\vec{b} + \\vec{c}$`,
      solution: `**Løsning:**

a) $2\\vec{a} - \\vec{b} = 2[1, 4] - [3, -2] = [2, 8] - [3, -2] = [2 - 3, 8 - (-2)] = [-1, 10]$

b) $\\vec{a} + 2\\vec{b} - 3\\vec{c} = [1, 4] + 2[3, -2] - 3[-2, 1]$
$= [1, 4] + [6, -4] - [-6, 3]$
$= [1 + 6 - (-6), 4 + (-4) - 3]$
$= [13, -3]$

c) $-\\vec{a} + \\vec{b} + \\vec{c} = -[1, 4] + [3, -2] + [-2, 1]$
$= [-1, -4] + [3, -2] + [-2, 1]$
$= [-1 + 3 + (-2), -4 + (-2) + 1]$
$= [0, -5]$`,
    },

    // Oppgave 4
    {
      id: 'r1-6-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'La $\\vec{p} = [2, 1]$, $\\vec{q} = [-1, 3]$ og $\\vec{r} = [3, -4]$. Regn ut:',
        subTasks: [
          { label: 'a', task: '$\\vec{p} - \\vec{q}$', solution: '$\\vec{p} - \\vec{q} = [2 - (-1), 1 - 3] = [3, -2]$' },
          { label: 'b', task: '$3\\vec{p} + 2\\vec{q}$', solution: '$3\\vec{p} + 2\\vec{q} = [6, 3] + [-2, 6] = [4, 9]$' },
          { label: 'c', task: '$\\vec{p} - \\vec{q} + \\vec{r}$', solution: '$\\vec{p} - \\vec{q} + \\vec{r} = [3, -2] + [3, -4] = [6, -6]$' },
          { label: 'd', task: '$2\\vec{p} - 3\\vec{q} + \\vec{r}$', solution: '$2\\vec{p} - 3\\vec{q} + \\vec{r} = [4, 2] - [-3, 9] + [3, -4] = [4 + 3 + 3, 2 - 9 - 4] = [10, -11]$' },
        ],
        hints: ['Ta det steg for steg: beregn skalarmultiplikasjonene først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PARALLELLE VEKTORER ==========
    {
      id: 'r1-6-1-parallell-intro',
      type: 'text',
      content: `## Parallelle vektorer

To vektorer kan ha samme eller motsatt retning. Da sier vi at de er parallelle.`,
    },

    // Definisjon: Parallelle vektorer
    {
      id: 'r1-6-1-def-parallell',
      type: 'definition',
      title: 'Parallelle vektorer',
      content: `To vektorer $\\vec{u}$ og $\\vec{v}$ er **parallelle** hvis den ene er et skalart multiplum av den andre:

$$\\vec{u} = k \\cdot \\vec{v} \\quad \\text{for et tall } k \\neq 0$$

Skrivemåte: $\\vec{u} \\parallel \\vec{v}$

Dersom $k > 0$, har vektorene samme retning.
Dersom $k < 0$, har vektorene motsatt retning.`,
    },

    // Eksempel 6: Parallelle vektorer
    {
      id: 'r1-6-1-example-parallell',
      type: 'example',
      title: 'Eksempel 6: Parallelle vektorer',
      problem: `Avgjør om vektorene er parallelle:

a) $\\vec{u} = [2, 6]$ og $\\vec{v} = [1, 3]$
b) $\\vec{a} = [3, -2]$ og $\\vec{b} = [-6, 4]$
c) $\\vec{p} = [1, 2]$ og $\\vec{q} = [3, 5]$`,
      solution: `**Løsning:**

a) Vi undersøker om $\\vec{u} = k \\cdot \\vec{v}$:
$[2, 6] = k \\cdot [1, 3]$ gir $2 = k \\cdot 1$ og $6 = k \\cdot 3$
Fra første ligning: $k = 2$. Sjekk: $2 \\cdot 3 = 6$ ✓
Altså er $\\vec{u} = 2\\vec{v}$, så $\\vec{u} \\parallel \\vec{v}$. **Parallelle.**

b) Vi undersøker om $\\vec{a} = k \\cdot \\vec{b}$:
$[3, -2] = k \\cdot [-6, 4]$ gir $3 = -6k$ og $-2 = 4k$
Fra første ligning: $k = -\\frac{1}{2}$. Fra andre ligning: $k = -\\frac{1}{2}$ ✓
Altså er $\\vec{a} = -\\frac{1}{2}\\vec{b}$, så $\\vec{a} \\parallel \\vec{b}$. **Parallelle.**

c) Vi undersøker om $\\vec{p} = k \\cdot \\vec{q}$:
$[1, 2] = k \\cdot [3, 5]$ gir $1 = 3k$ og $2 = 5k$
Fra første ligning: $k = \\frac{1}{3}$. Fra andre ligning: $k = \\frac{2}{5}$.
Siden $\\frac{1}{3} \\neq \\frac{2}{5}$, er de **ikke parallelle**.`,
    },

    // Oppgave 5
    {
      id: 'r1-6-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om vektorparene er parallelle. Begrunn svaret.',
        subTasks: [
          { label: 'a', task: '$\\vec{u} = [4, 8]$ og $\\vec{v} = [2, 4]$', solution: '$\\vec{u} = 2\\vec{v}$ siden $[4, 8] = 2[2, 4]$. **Parallelle.**' },
          { label: 'b', task: '$\\vec{a} = [3, 1]$ og $\\vec{b} = [6, 3]$', solution: '$6/3 = 2$ men $3/1 = 3$. Ulike $k$-verdier. **Ikke parallelle.**' },
          { label: 'c', task: '$\\vec{p} = [-2, 5]$ og $\\vec{q} = [4, -10]$', solution: '$\\vec{q} = -2\\vec{p}$ siden $[4, -10] = -2[-2, 5]$. **Parallelle.**' },
          { label: 'd', task: '$\\vec{r} = [1, 0]$ og $\\vec{s} = [0, 1]$', solution: 'Ingen skalar $k$ slik at $[1, 0] = k[0, 1]$. **Ikke parallelle.**' },
        ],
        hints: ['Sjekk om $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$ (pass på divisjon med null)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ANVENDELSER ==========
    {
      id: 'r1-6-1-anvendelse-intro',
      type: 'text',
      content: `## Anvendelser av vektorer

Vektorer brukes i mange sammenhenger, spesielt i fysikk og geometri.`,
    },

    // Eksempel 7: Midtpunkt
    {
      id: 'r1-6-1-example-midtpunkt',
      type: 'example',
      title: 'Eksempel 7: Midtpunkt mellom to punkter',
      problem: `Finn midtpunktet $M$ på linjestykket mellom $A = (1, 3)$ og $B = (5, 7)$ ved hjelp av vektorer.`,
      solution: `**Løsning:**

La $\\vec{a} = \\vec{OA} = [1, 3]$ og $\\vec{b} = \\vec{OB} = [5, 7]$ være stedvektorene.

Stedvektoren til midtpunktet er gjennomsnittet av stedvektorene:

$$\\vec{OM} = \\frac{1}{2}(\\vec{a} + \\vec{b}) = \\frac{1}{2}([1, 3] + [5, 7]) = \\frac{1}{2}[6, 10] = [3, 5]$$

Altså er $M = (3, 5)$.

**Alternativ metode:** Midtpunktsformelen gir direkte:
$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) = \\left(\\frac{1 + 5}{2}, \\frac{3 + 7}{2}\\right) = (3, 5)$$`,
    },

    // Oppgave 6
    {
      id: 'r1-6-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-6-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk vektorer til å løse oppgavene.',
        subTasks: [
          { label: 'a', task: 'Finn midtpunktet mellom $A = (2, -4)$ og $B = (8, 6)$.', solution: '$M = \\frac{1}{2}([2, -4] + [8, 6]) = \\frac{1}{2}[10, 2] = [5, 1]$, så $M = (5, 1)$' },
          { label: 'b', task: 'Punktet $A = (1, 2)$ flyttes med vektor $\\vec{v} = [3, -1]$. Hvor havner punktet?', solution: 'Nytt punkt: $(1 + 3, 2 + (-1)) = (4, 1)$' },
          { label: 'c', task: 'Finn vektoren som fører punktet $(3, 5)$ til punktet $(-1, 2)$.', solution: '$\\vec{v} = [-1 - 3, 2 - 5] = [-4, -3]$' },
        ],
        hints: ['For midtpunkt: bruk $\\frac{1}{2}(\\vec{a} + \\vec{b})$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-6-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-6-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver med vektorer.',
        subTasks: [
          { label: 'a', task: 'I en trekant er $A = (0, 0)$, $B = (6, 0)$ og $C = (2, 4)$. Finn midtpunktene på alle tre sider.', solution: '$M_{AB} = (3, 0)$, $M_{BC} = (4, 2)$, $M_{AC} = (1, 2)$' },
          { label: 'b', task: 'Vis at vektoren fra $A$ til midtpunktet på $BC$ er $\\vec{v} = [4, 2]$.', solution: '$\\vec{AM_{BC}} = [4 - 0, 2 - 0] = [4, 2]$ ✓' },
          { label: 'c', task: 'Finn koordinatene til tyngdepunktet $T$ i trekanten. (Hint: $T$ deler medianen fra $A$ i forholdet $2:1$)', solution: 'Tyngdepunktet: $T = \\frac{1}{3}(A + B + C) = \\frac{1}{3}(0 + 6 + 2, 0 + 0 + 4) = (\\frac{8}{3}, \\frac{4}{3})$' },
        ],
        hints: ['Tyngdepunktet ligger $\\frac{2}{3}$ av veien fra et hjørne til midtpunktet på motsatt side'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-6-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Vektor:**
- En størrelse med både lengde og retning
- Skrives som $\\vec{v}$, $\\bar{v}$ eller $\\mathbf{v}$

**Komponentform:**
- $\\vec{v} = [a, b]$ der $a$ og $b$ er komponentene
- $\\vec{AB} = [x_2 - x_1, y_2 - y_1]$

**Vektoroperasjoner:**
- Addisjon: $[a_1, b_1] + [a_2, b_2] = [a_1 + a_2, b_1 + b_2]$
- Skalar multiplikasjon: $k[a, b] = [ka, kb]$
- Subtraksjon: $\\vec{u} - \\vec{v} = \\vec{u} + (-\\vec{v})$

**Spesielle vektorer:**
- Nullvektor: $\\vec{0} = [0, 0]$
- Enhetsvektorer: $\\vec{i} = [1, 0]$, $\\vec{j} = [0, 1]$

**Parallelle vektorer:**
- $\\vec{u} \\parallel \\vec{v}$ hvis $\\vec{u} = k\\vec{v}$ for en skalar $k \\neq 0$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_6_2: TextbookChapter = {
  id: 'r1-6-2',
  courseId: 'r1',
  chapterNumber: '6.2',
  title: 'Vektorregning',
  description: 'Lær om lengde av vektor, skalarprodukt, vinkel mellom vektorer og projeksjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beregne lengden til en vektor',
    'finne enhetsvektorer',
    'beregne skalarproduktet av to vektorer',
    'finne vinkelen mellom to vektorer',
    'forstå og bruke ortogonalitet',
    'beregne projeksjonen av en vektor på en annen',
  ],
  content: [
    // ========== LENGDE AV VEKTOR ==========
    {
      id: 'r1-6-2-intro',
      type: 'text',
      content: `## Lengde av en vektor

Lengden (eller normen) til en vektor er avstanden fra startpunktet til sluttpunktet. Vi bruker Pytagoras' setning til å beregne denne.`,
    },
    {
      id: 'r1-6-2-skalarprodukt-bilde',
      type: 'image',
      src: '/images/r1/vektorer-skalarprodukt.svg',
      alt: 'Skalarprodukt mellom to vektorer',
      caption: 'Skalarproduktet - sammenheng med vinkelen mellom vektorene',
    },

    // Definisjon: Lengde
    {
      id: 'r1-6-2-def-lengde',
      type: 'definition',
      title: 'Lengde av vektor',
      content: `**Lengden** (eller **normen**) til en vektor $\\vec{v} = [a, b]$ er:

$$|\\vec{v}| = \\sqrt{a^2 + b^2}$$

Lengden skrives med vertikale streker rundt vektoren: $|\\vec{v}|$.

**Merk:** Lengden er alltid et ikke-negativt tall.`,
    },

    // Eksempel 1: Lengde av vektor
    {
      id: 'r1-6-2-example-lengde',
      type: 'example',
      title: 'Eksempel 1: Lengde av vektor',
      problem: `Finn lengden til vektorene:

a) $\\vec{u} = [3, 4]$
b) $\\vec{v} = [-5, 12]$
c) $\\vec{w} = [2, -2]$`,
      solution: `**Løsning:**

a) $|\\vec{u}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$

b) $|\\vec{v}| = \\sqrt{(-5)^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$

c) $|\\vec{w}| = \\sqrt{2^2 + (-2)^2} = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$`,
    },

    // Oppgave 1
    {
      id: 'r1-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn lengden til vektorene.',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [6, 8]$', solution: '$|\\vec{a}| = \\sqrt{36 + 64} = \\sqrt{100} = 10$' },
          { label: 'b', task: '$\\vec{b} = [5, -12]$', solution: '$|\\vec{b}| = \\sqrt{25 + 144} = \\sqrt{169} = 13$' },
          { label: 'c', task: '$\\vec{c} = [-1, 1]$', solution: '$|\\vec{c}| = \\sqrt{1 + 1} = \\sqrt{2}$' },
          { label: 'd', task: '$\\vec{d} = [0, 7]$', solution: '$|\\vec{d}| = \\sqrt{0 + 49} = 7$' },
        ],
        hints: ['Bruk formelen $|\\vec{v}| = \\sqrt{a^2 + b^2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ENHETSVEKTOR ==========
    {
      id: 'r1-6-2-enhetsvektor-intro',
      type: 'text',
      content: `## Enhetsvektor

Noen ganger trenger vi en vektor med lengde 1 som peker i en bestemt retning.`,
    },

    // Definisjon: Enhetsvektor
    {
      id: 'r1-6-2-def-enhetsvektor',
      type: 'definition',
      title: 'Enhetsvektor',
      content: `En **enhetsvektor** er en vektor med lengde 1.

For å finne enhetsvektoren $\\hat{v}$ i samme retning som $\\vec{v}$, deler vi $\\vec{v}$ på sin egen lengde:

$$\\hat{v} = \\frac{\\vec{v}}{|\\vec{v}|} = \\frac{1}{|\\vec{v}|}\\vec{v}$$

Merk: Vi bruker ofte "hatt"-notasjon ($\\hat{v}$) for enhetsvektorer.`,
    },

    // Eksempel 2: Enhetsvektor
    {
      id: 'r1-6-2-example-enhetsvektor',
      type: 'example',
      title: 'Eksempel 2: Enhetsvektor',
      problem: `Finn enhetsvektoren i samme retning som $\\vec{v} = [3, 4]$.`,
      solution: `**Løsning:**

Først finner vi lengden:
$$|\\vec{v}| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$$

Enhetsvektoren blir:
$$\\hat{v} = \\frac{1}{5}[3, 4] = \\left[\\frac{3}{5}, \\frac{4}{5}\\right]$$

**Kontroll:** $|\\hat{v}| = \\sqrt{\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{4}{5}\\right)^2} = \\sqrt{\\frac{9}{25} + \\frac{16}{25}} = \\sqrt{\\frac{25}{25}} = 1$ ✓`,
    },

    // Oppgave 2
    {
      id: 'r1-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn enhetsvektoren i samme retning som den gitte vektoren.',
        subTasks: [
          { label: 'a', task: '$\\vec{u} = [5, 12]$', solution: '$|\\vec{u}| = 13$, så $\\hat{u} = [\\frac{5}{13}, \\frac{12}{13}]$' },
          { label: 'b', task: '$\\vec{v} = [1, 1]$', solution: '$|\\vec{v}| = \\sqrt{2}$, så $\\hat{v} = [\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}] = [\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}]$' },
          { label: 'c', task: '$\\vec{w} = [-4, 3]$', solution: '$|\\vec{w}| = 5$, så $\\hat{w} = [-\\frac{4}{5}, \\frac{3}{5}]$' },
        ],
        hints: ['Finn lengden først, deretter del vektoren på lengden'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SKALARPRODUKT ==========
    {
      id: 'r1-6-2-skalarprodukt-intro',
      type: 'text',
      content: `## Skalarproduktet

Skalarproduktet (også kalt prikkproduktet eller det indre produktet) er en operasjon mellom to vektorer som gir et tall (en skalar).`,
    },

    // Definisjon: Skalarprodukt
    {
      id: 'r1-6-2-def-skalarprodukt',
      type: 'definition',
      title: 'Skalarprodukt',
      content: `**Skalarproduktet** av to vektorer $\\vec{u} = [a_1, b_1]$ og $\\vec{v} = [a_2, b_2]$ er:

$$\\vec{u} \\cdot \\vec{v} = a_1 \\cdot a_2 + b_1 \\cdot b_2$$

Skalarproduktet er et **tall**, ikke en vektor.

**Regneregler:**
- $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$ (kommutativ)
- $\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = \\vec{u} \\cdot \\vec{v} + \\vec{u} \\cdot \\vec{w}$ (distributiv)
- $(k\\vec{u}) \\cdot \\vec{v} = k(\\vec{u} \\cdot \\vec{v})$
- $\\vec{v} \\cdot \\vec{v} = |\\vec{v}|^2$`,
    },

    // Eksempel 3: Skalarprodukt
    {
      id: 'r1-6-2-example-skalarprodukt',
      type: 'example',
      title: 'Eksempel 3: Skalarprodukt',
      problem: `La $\\vec{u} = [2, 3]$ og $\\vec{v} = [4, -1]$.

Regn ut:
a) $\\vec{u} \\cdot \\vec{v}$
b) $\\vec{v} \\cdot \\vec{u}$
c) $\\vec{u} \\cdot \\vec{u}$
d) $|\\vec{u}|^2$`,
      solution: `**Løsning:**

a) $\\vec{u} \\cdot \\vec{v} = 2 \\cdot 4 + 3 \\cdot (-1) = 8 - 3 = 5$

b) $\\vec{v} \\cdot \\vec{u} = 4 \\cdot 2 + (-1) \\cdot 3 = 8 - 3 = 5$

Vi ser at $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$.

c) $\\vec{u} \\cdot \\vec{u} = 2 \\cdot 2 + 3 \\cdot 3 = 4 + 9 = 13$

d) $|\\vec{u}|^2 = (\\sqrt{2^2 + 3^2})^2 = 2^2 + 3^2 = 13$

Vi bekrefter at $\\vec{u} \\cdot \\vec{u} = |\\vec{u}|^2$.`,
    },

    // Oppgave 3
    {
      id: 'r1-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $\\vec{a} = [3, -2]$ og $\\vec{b} = [1, 4]$. Regn ut:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} \\cdot \\vec{b}$', solution: '$\\vec{a} \\cdot \\vec{b} = 3 \\cdot 1 + (-2) \\cdot 4 = 3 - 8 = -5$' },
          { label: 'b', task: '$\\vec{a} \\cdot \\vec{a}$', solution: '$\\vec{a} \\cdot \\vec{a} = 3^2 + (-2)^2 = 9 + 4 = 13$' },
          { label: 'c', task: '$\\vec{b} \\cdot \\vec{b}$', solution: '$\\vec{b} \\cdot \\vec{b} = 1^2 + 4^2 = 1 + 16 = 17$' },
          { label: 'd', task: '$(\\vec{a} + \\vec{b}) \\cdot \\vec{a}$', solution: '$\\vec{a} + \\vec{b} = [4, 2]$. $(\\vec{a} + \\vec{b}) \\cdot \\vec{a} = 4 \\cdot 3 + 2 \\cdot (-2) = 12 - 4 = 8$' },
        ],
        hints: ['Multipliser tilsvarende komponenter og summer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VINKEL MELLOM VEKTORER ==========
    {
      id: 'r1-6-2-vinkel-intro',
      type: 'text',
      content: `## Vinkel mellom vektorer

Skalarproduktet har en viktig geometrisk tolkning: det forteller oss om vinkelen mellom to vektorer.`,
    },

    // Teorem: Vinkelformel
    {
      id: 'r1-6-2-theorem-vinkel',
      type: 'theorem',
      title: 'Vinkel mellom vektorer',
      content: `Vinkelen $\\theta$ mellom to vektorer $\\vec{u}$ og $\\vec{v}$ er gitt ved:

$$\\cos \\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$$

eller ekvivalent:

$$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos \\theta$$

Vinkelen $\\theta$ er alltid mellom $0°$ og $180°$.`,
    },

    // GeoGebra: Vinkel mellom vektorer
    {
      id: 'r1-6-2-geogebra-vinkel',
      type: 'geogebra',
      title: 'Vinkel mellom vektorer',
      description: 'Dra i punktene for å endre vektorene og se hvordan vinkelen og skalarproduktet endrer seg.',
      appType: 'geometry',
      commands: [
        'O = (0, 0)',
        'A = (3, 1)',
        'B = (1, 3)',
        'u = Vector(O, A)',
        'v = Vector(O, B)',
        'theta = Angle(u, v)',
        'SetColor(u, "Blue")',
        'SetColor(v, "Green")',
        'SetCaption(u, "u")',
        'SetCaption(v, "v")',
        'tekst = Text("u · v = " + (x(A)*x(B) + y(A)*y(B)), (4, 3))',
      ],
    },

    // Eksempel 4: Vinkel mellom vektorer
    {
      id: 'r1-6-2-example-vinkel',
      type: 'example',
      title: 'Eksempel 4: Vinkel mellom vektorer',
      problem: `Finn vinkelen mellom $\\vec{u} = [1, \\sqrt{3}]$ og $\\vec{v} = [\\sqrt{3}, 1]$.`,
      solution: `**Løsning:**

**Steg 1:** Beregn skalarproduktet:
$$\\vec{u} \\cdot \\vec{v} = 1 \\cdot \\sqrt{3} + \\sqrt{3} \\cdot 1 = \\sqrt{3} + \\sqrt{3} = 2\\sqrt{3}$$

**Steg 2:** Beregn lengdene:
$$|\\vec{u}| = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$$
$$|\\vec{v}| = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3 + 1} = 2$$

**Steg 3:** Bruk vinkelformelen:
$$\\cos \\theta = \\frac{2\\sqrt{3}}{2 \\cdot 2} = \\frac{2\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2}$$

**Steg 4:** Finn vinkelen:
$$\\theta = \\arccos\\left(\\frac{\\sqrt{3}}{2}\\right) = 30°$$

Vinkelen mellom vektorene er $30°$.`,
    },

    // Oppgave 4
    {
      id: 'r1-6-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn vinkelen mellom vektorparene.',
        subTasks: [
          { label: 'a', task: '$\\vec{u} = [1, 0]$ og $\\vec{v} = [1, 1]$', solution: '$\\cos \\theta = \\frac{1}{1 \\cdot \\sqrt{2}} = \\frac{1}{\\sqrt{2}}$, så $\\theta = 45°$' },
          { label: 'b', task: '$\\vec{a} = [3, 4]$ og $\\vec{b} = [4, -3]$', solution: '$\\vec{a} \\cdot \\vec{b} = 12 - 12 = 0$, så $\\theta = 90°$' },
          { label: 'c', task: '$\\vec{p} = [2, 2]$ og $\\vec{q} = [-1, 1]$', solution: '$\\vec{p} \\cdot \\vec{q} = -2 + 2 = 0$, så $\\theta = 90°$' },
          { label: 'd', task: '$\\vec{r} = [1, 1]$ og $\\vec{s} = [-1, -1]$', solution: '$\\cos \\theta = \\frac{-2}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{-2}{2} = -1$, så $\\theta = 180°$' },
        ],
        hints: ['Bruk formelen $\\cos \\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ORTOGONALE VEKTORER ==========
    {
      id: 'r1-6-2-ortogonal-intro',
      type: 'text',
      content: `## Ortogonale vektorer

Når to vektorer står vinkelrett på hverandre, sier vi at de er ortogonale.`,
    },

    // Definisjon: Ortogonale vektorer
    {
      id: 'r1-6-2-def-ortogonal',
      type: 'definition',
      title: 'Ortogonale vektorer',
      content: `To vektorer $\\vec{u}$ og $\\vec{v}$ er **ortogonale** (vinkelrette) hvis og bare hvis:

$$\\vec{u} \\cdot \\vec{v} = 0$$

Skrivemåte: $\\vec{u} \\perp \\vec{v}$

**Merk:** Dette følger fra vinkelformelen: Hvis $\\theta = 90°$, så er $\\cos 90° = 0$, og dermed $\\vec{u} \\cdot \\vec{v} = 0$.`,
    },

    // Eksempel 5: Ortogonale vektorer
    {
      id: 'r1-6-2-example-ortogonal',
      type: 'example',
      title: 'Eksempel 5: Ortogonale vektorer',
      problem: `a) Avgjør om $\\vec{u} = [2, 3]$ og $\\vec{v} = [3, -2]$ er ortogonale.

b) Finn en vektor som er ortogonal på $\\vec{w} = [4, 5]$.`,
      solution: `**Løsning:**

a) Vi beregner skalarproduktet:
$$\\vec{u} \\cdot \\vec{v} = 2 \\cdot 3 + 3 \\cdot (-2) = 6 - 6 = 0$$

Siden $\\vec{u} \\cdot \\vec{v} = 0$, er $\\vec{u} \\perp \\vec{v}$. **Ja, de er ortogonale.**

b) La $\\vec{n} = [a, b]$ være ortogonal på $\\vec{w} = [4, 5]$.

Da må $\\vec{w} \\cdot \\vec{n} = 0$:
$$4a + 5b = 0$$

Velger vi $a = 5$, får vi $b = -4$.

**Svar:** $\\vec{n} = [5, -4]$ er ortogonal på $\\vec{w}$.

**Generelt tips:** For $\\vec{v} = [a, b]$ er $[-b, a]$ og $[b, -a]$ alltid ortogonale på $\\vec{v}$.`,
    },

    // Oppgave 5
    {
      id: 'r1-6-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Arbeid med ortogonale vektorer.',
        subTasks: [
          { label: 'a', task: 'Avgjør om $\\vec{a} = [5, 2]$ og $\\vec{b} = [2, -5]$ er ortogonale.', solution: '$\\vec{a} \\cdot \\vec{b} = 10 - 10 = 0$. **Ja, ortogonale.**' },
          { label: 'b', task: 'Finn en vektor ortogonal på $\\vec{u} = [3, -1]$.', solution: 'En mulighet: $\\vec{n} = [1, 3]$ (sjekk: $3 \\cdot 1 + (-1) \\cdot 3 = 0$)' },
          { label: 'c', task: 'Finn alle vektorer med lengde 5 som er ortogonale på $\\vec{v} = [3, 4]$.', solution: 'Ortogonale: $[4, -3]$ eller $[-4, 3]$. Begge har lengde 5. **Svar: $[4, -3]$ og $[-4, 3]$**' },
        ],
        hints: ['For c): Finn først en ortogonal vektor, normaliser, og skaler til lengde 5'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PROJEKSJON ==========
    {
      id: 'r1-6-2-projeksjon-intro',
      type: 'text',
      content: `## Projeksjon av vektor

Projeksjonen av en vektor på en annen er "skyggen" av den første vektoren langs den andre.`,
    },

    // Definisjon: Projeksjon
    {
      id: 'r1-6-2-def-projeksjon',
      type: 'definition',
      title: 'Projeksjon',
      content: `**Projeksjonen** av $\\vec{u}$ på $\\vec{v}$ er vektoren:

$$\\text{proj}_{\\vec{v}} \\vec{u} = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2} \\vec{v} = \\frac{\\vec{u} \\cdot \\vec{v}}{\\vec{v} \\cdot \\vec{v}} \\vec{v}$$

**Lengden** av projeksjonen (skalarprojeksjonen) er:
$$|\\text{proj}_{\\vec{v}} \\vec{u}| = \\frac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{v}|}$$`,
    },

    // GeoGebra: Projeksjon
    {
      id: 'r1-6-2-geogebra-proj',
      type: 'geogebra',
      title: 'Projeksjon av vektor',
      description: 'Se hvordan projeksjonen av $\\vec{u}$ på $\\vec{v}$ varierer når du endrer vektorene.',
      appType: 'geometry',
      commands: [
        'O = (0, 0)',
        'A = (4, 3)',
        'B = (5, 0)',
        'u = Vector(O, A)',
        'v = Vector(O, B)',
        'proj = ((x(A)*x(B) + y(A)*y(B))/(x(B)^2 + y(B)^2)) * v',
        'SetColor(u, "Blue")',
        'SetColor(v, "Green")',
        'SetColor(proj, "Red")',
        'SetCaption(u, "u")',
        'SetCaption(v, "v")',
        'SetCaption(proj, "proj")',
      ],
    },

    // Eksempel 6: Projeksjon
    {
      id: 'r1-6-2-example-projeksjon',
      type: 'example',
      title: 'Eksempel 6: Projeksjon',
      problem: `Finn projeksjonen av $\\vec{u} = [4, 3]$ på $\\vec{v} = [5, 0]$.`,
      solution: `**Løsning:**

**Steg 1:** Beregn skalarproduktet $\\vec{u} \\cdot \\vec{v}$:
$$\\vec{u} \\cdot \\vec{v} = 4 \\cdot 5 + 3 \\cdot 0 = 20$$

**Steg 2:** Beregn $|\\vec{v}|^2$:
$$|\\vec{v}|^2 = 5^2 + 0^2 = 25$$

**Steg 3:** Beregn projeksjonen:
$$\\text{proj}_{\\vec{v}} \\vec{u} = \\frac{20}{25} [5, 0] = \\frac{4}{5} [5, 0] = [4, 0]$$

**Tolkning:** Projeksjonen av $\\vec{u}$ på den horisontale vektoren $\\vec{v}$ er den horisontale komponenten av $\\vec{u}$.`,
    },

    // Oppgave 6
    {
      id: 'r1-6-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-6-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn projeksjonen av den første vektoren på den andre.',
        subTasks: [
          { label: 'a', task: '$\\vec{u} = [3, 4]$ på $\\vec{v} = [1, 0]$', solution: '$\\text{proj} = \\frac{3}{1}[1, 0] = [3, 0]$' },
          { label: 'b', task: '$\\vec{a} = [2, 6]$ på $\\vec{b} = [3, 4]$', solution: '$\\vec{a} \\cdot \\vec{b} = 30$, $|\\vec{b}|^2 = 25$. $\\text{proj} = \\frac{30}{25}[3, 4] = [\\frac{18}{5}, \\frac{24}{5}]$' },
          { label: 'c', task: '$\\vec{p} = [1, 2]$ på $\\vec{q} = [2, 1]$', solution: '$\\vec{p} \\cdot \\vec{q} = 4$, $|\\vec{q}|^2 = 5$. $\\text{proj} = \\frac{4}{5}[2, 1] = [\\frac{8}{5}, \\frac{4}{5}]$' },
        ],
        hints: ['Bruk formelen $\\text{proj}_{\\vec{v}} \\vec{u} = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2} \\vec{v}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ANVENDELSER ==========
    {
      id: 'r1-6-2-anvendelse-intro',
      type: 'text',
      content: `## Anvendelser

Skalarprodukt og projeksjon har mange praktiske anvendelser.`,
    },

    // Eksempel 7: Arbeid i fysikk
    {
      id: 'r1-6-2-example-arbeid',
      type: 'example',
      title: 'Eksempel 7: Arbeid i fysikk',
      problem: `En kraft $\\vec{F} = [30, 40]$ N virker på en gjenstand som flyttes langs vektoren $\\vec{s} = [5, 0]$ m. Beregn arbeidet som utføres.`,
      solution: `**Løsning:**

I fysikk er arbeid definert som:
$$W = \\vec{F} \\cdot \\vec{s}$$

Vi beregner skalarproduktet:
$$W = [30, 40] \\cdot [5, 0] = 30 \\cdot 5 + 40 \\cdot 0 = 150 \\text{ J}$$

Arbeidet er 150 joule.

**Tolkning:** Bare kraftkomponenten i bevegelsesretningen (30 N) bidrar til arbeidet. Den vertikale kraftkomponenten (40 N) gjør ikke noe arbeid når bevegelsen er horisontal.`,
    },

    // Oppgave 7
    {
      id: 'r1-6-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-6-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Anvendelsesoppgaver med skalarprodukt.',
        subTasks: [
          { label: 'a', task: 'En kraft $\\vec{F} = [20, 15]$ N virker på en gjenstand som flyttes $\\vec{s} = [4, 3]$ m. Finn arbeidet.', solution: '$W = \\vec{F} \\cdot \\vec{s} = 80 + 45 = 125$ J' },
          { label: 'b', task: 'Finn vinkelen mellom kraften og forskyvningen i oppgave a.', solution: '$|\\vec{F}| = 25$, $|\\vec{s}| = 5$. $\\cos \\theta = \\frac{125}{125} = 1$, så $\\theta = 0°$.' },
          { label: 'c', task: 'En kraft $\\vec{F} = [0, 50]$ N virker på en gjenstand som flyttes $\\vec{s} = [10, 0]$ m. Finn arbeidet og forklar resultatet.', solution: '$W = 0 \\cdot 10 + 50 \\cdot 0 = 0$ J. Kraften står vinkelrett på bevegelsen, så den utfører ikke noe arbeid.' },
        ],
        hints: ['Arbeid $W = \\vec{F} \\cdot \\vec{s}$', 'Når kraft og bevegelse er vinkelrette, er arbeidet null'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Lengde av vektor:**
$$|\\vec{v}| = \\sqrt{a^2 + b^2}$$

**Enhetsvektor:**
$$\\hat{v} = \\frac{\\vec{v}}{|\\vec{v}|}$$

**Skalarprodukt:**
$$\\vec{u} \\cdot \\vec{v} = a_1 a_2 + b_1 b_2$$

**Vinkel mellom vektorer:**
$$\\cos \\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$$

**Ortogonale vektorer:**
$$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$$

**Projeksjon:**
$$\\text{proj}_{\\vec{v}} \\vec{u} = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2} \\vec{v}$$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R1_6_3: TextbookChapter = {
  id: 'r1-6-3',
  courseId: 'r1',
  chapterNumber: '6.3',
  title: 'Parameterframstilling',
  description: 'Lær om parameterframstilling av linjer, kurver og anvendelser i bevegelse.',
  estimatedMinutes: 60,
  competenceGoals: [
    'sette opp parameterframstilling for en linje',
    'finne skjæringspunkt mellom linjer gitt ved parameterframstilling',
    'sette opp parameterframstilling for sirkler og andre kurver',
    'forstå sammenhengen mellom parameterframstilling og bevegelse',
    'bruke GeoGebra til å animere parameterframstillinger',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-6-3-intro',
      type: 'text',
      content: `## Hva er parameterframstilling?

Til nå har vi beskrevet kurver med ligninger som $y = 2x + 3$ eller $x^2 + y^2 = 25$. En alternativ måte er å uttrykke både $x$ og $y$ som funksjoner av en tredje variabel, kalt en **parameter**.

Dette gir oss større fleksibilitet og er spesielt nyttig for å beskrive bevegelse, der parameteren ofte representerer tid.`,
    },

    // Definisjon: Parameterframstilling
    {
      id: 'r1-6-3-def-param',
      type: 'definition',
      title: 'Parameterframstilling',
      content: `En **parameterframstilling** av en kurve er et sett av ligninger:

$$\\begin{cases} x = x(t) \\\\ y = y(t) \\end{cases}$$

der $t$ er parameteren, og $x(t)$ og $y(t)$ er funksjoner av $t$.

Når $t$ varierer, tegner punktet $(x(t), y(t))$ opp kurven.`,
    },

    // ========== PARAMETERFRAMSTILLING AV LINJE ==========
    {
      id: 'r1-6-3-linje-intro',
      type: 'text',
      content: `## Parameterframstilling av linje

En linje kan beskrives ved et startpunkt og en retningsvektor.`,
    },

    // Definisjon: Linje
    {
      id: 'r1-6-3-def-linje',
      type: 'definition',
      title: 'Parameterframstilling av linje',
      content: `En linje gjennom punktet $P = (x_0, y_0)$ med retningsvektor $\\vec{v} = [a, b]$ har parameterframstilling:

$$\\vec{r}(t) = \\vec{p} + t \\cdot \\vec{v}$$

eller på komponentform:
$$\\begin{cases} x(t) = x_0 + t \\cdot a \\\\ y(t) = y_0 + t \\cdot b \\end{cases}$$

Her er $\\vec{p} = [x_0, y_0]$ stedvektoren til startpunktet.`,
    },

    // Eksempel 1: Parameterframstilling av linje
    {
      id: 'r1-6-3-example-linje',
      type: 'example',
      title: 'Eksempel 1: Parameterframstilling av linje',
      problem: `Finn parameterframstillingen for linjen gjennom $A = (1, 2)$ og $B = (4, 6)$.`,
      solution: `**Løsning:**

**Steg 1:** Velg et startpunkt. Vi bruker $A = (1, 2)$.

**Steg 2:** Finn retningsvektoren:
$$\\vec{AB} = [4 - 1, 6 - 2] = [3, 4]$$

**Steg 3:** Sett opp parameterframstillingen:
$$\\vec{r}(t) = [1, 2] + t[3, 4]$$

På komponentform:
$$\\begin{cases} x(t) = 1 + 3t \\\\ y(t) = 2 + 4t \\end{cases}$$

**Sjekk:**
- For $t = 0$: $(x, y) = (1, 2) = A$ ✓
- For $t = 1$: $(x, y) = (1 + 3, 2 + 4) = (4, 6) = B$ ✓`,
    },

    // GeoGebra: Linje
    {
      id: 'r1-6-3-geogebra-linje',
      type: 'geogebra',
      title: 'Linje med parameterframstilling',
      description: 'Bruk glidebryteren for å se hvordan punktet beveger seg langs linjen når $t$ endres.',
      appType: 'geometry',
      commands: [
        't_1 = Slider(-3, 5, 0.1)',
        'A = (1, 2)',
        'v = Vector((0, 0), (3, 4))',
        'P = A + t_1 * (3, 4)',
        'linje = Line(A, A + (3, 4))',
        'SetColor(P, "Red")',
        'SetPointSize(P, 5)',
        'SetCaption(P, "P(t)")',
      ],
    },

    // Oppgave 1
    {
      id: 'r1-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn parameterframstillingen for linjen gjennom de gitte punktene.',
        subTasks: [
          { label: 'a', task: '$A = (0, 0)$ og $B = (2, 3)$', solution: '$\\vec{r}(t) = t[2, 3]$, altså $x = 2t, y = 3t$' },
          { label: 'b', task: '$A = (2, 1)$ og $B = (5, 4)$', solution: '$\\vec{r}(t) = [2, 1] + t[3, 3]$, altså $x = 2 + 3t, y = 1 + 3t$' },
          { label: 'c', task: '$A = (3, -1)$ og $B = (1, 5)$', solution: '$\\vec{r}(t) = [3, -1] + t[-2, 6]$, altså $x = 3 - 2t, y = -1 + 6t$' },
          { label: 'd', task: '$A = (-2, 4)$ og $B = (6, 0)$', solution: '$\\vec{r}(t) = [-2, 4] + t[8, -4]$, altså $x = -2 + 8t, y = 4 - 4t$' },
        ],
        hints: ['Retningsvektoren er $\\vec{AB} = B - A$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FRA PARAMETERFORM TIL KARTESISK ==========
    {
      id: 'r1-6-3-kartesisk-intro',
      type: 'text',
      content: `## Fra parameterframstilling til kartesisk ligning

Noen ganger vil vi finne den vanlige ligningen $y = ax + b$ fra en parameterframstilling.`,
    },

    // Eksempel 2: Til kartesisk form
    {
      id: 'r1-6-3-example-kartesisk',
      type: 'example',
      title: 'Eksempel 2: Fra parameter til kartesisk form',
      problem: `Finn den kartesiske ligningen for linjen med parameterframstilling:
$$\\begin{cases} x = 1 + 2t \\\\ y = 3 + 4t \\end{cases}$$`,
      solution: `**Løsning:**

**Steg 1:** Løs den første ligningen for $t$:
$$x = 1 + 2t \\Rightarrow t = \\frac{x - 1}{2}$$

**Steg 2:** Sett inn i den andre ligningen:
$$y = 3 + 4 \\cdot \\frac{x - 1}{2} = 3 + 2(x - 1) = 3 + 2x - 2 = 2x + 1$$

**Svar:** Den kartesiske ligningen er $y = 2x + 1$.

**Kontroll:** Fra parameterframstillingen ser vi at retningsvektoren er $[2, 4]$, så stigningstallet er $\\frac{4}{2} = 2$ ✓`,
    },

    // Oppgave 2
    {
      id: 'r1-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den kartesiske ligningen for linjen.',
        subTasks: [
          { label: 'a', task: '$x = 2 + t, y = 1 + 3t$', solution: '$t = x - 2$, så $y = 1 + 3(x - 2) = 3x - 5$' },
          { label: 'b', task: '$x = 3t, y = -1 + 2t$', solution: '$t = x/3$, så $y = -1 + \\frac{2x}{3}$, altså $y = \\frac{2}{3}x - 1$' },
          { label: 'c', task: '$x = 4 - 2t, y = 3 + t$', solution: '$t = y - 3$, så $x = 4 - 2(y - 3) = 10 - 2y$, altså $y = 5 - \\frac{x}{2}$' },
        ],
        hints: ['Løs en av ligningene for $t$ og sett inn i den andre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SKJÆRINGSPUNKT ==========
    {
      id: 'r1-6-3-skjaering-intro',
      type: 'text',
      content: `## Skjæringspunkt mellom linjer

For å finne skjæringspunktet mellom to linjer gitt ved parameterframstilling, setter vi ligningene lik hverandre.`,
    },

    // Eksempel 3: Skjæringspunkt
    {
      id: 'r1-6-3-example-skjaering',
      type: 'example',
      title: 'Eksempel 3: Skjæringspunkt',
      problem: `Finn skjæringspunktet mellom linjene:

Linje 1: $\\begin{cases} x = 1 + 2t \\\\ y = 3 + t \\end{cases}$

Linje 2: $\\begin{cases} x = 4 + s \\\\ y = 1 + 2s \\end{cases}$`,
      solution: `**Løsning:**

**Viktig:** Vi må bruke **forskjellige** parameternavn for de to linjene ($t$ og $s$).

I skjæringspunktet er $x$- og $y$-koordinatene like:

$$1 + 2t = 4 + s \\quad \\text{(1)}$$
$$3 + t = 1 + 2s \\quad \\text{(2)}$$

Fra (1): $s = 2t - 3$

Sett inn i (2):
$$3 + t = 1 + 2(2t - 3)$$
$$3 + t = 1 + 4t - 6$$
$$3 + t = 4t - 5$$
$$8 = 3t$$
$$t = \\frac{8}{3}$$

Finn koordinatene:
$$x = 1 + 2 \\cdot \\frac{8}{3} = 1 + \\frac{16}{3} = \\frac{19}{3}$$
$$y = 3 + \\frac{8}{3} = \\frac{17}{3}$$

**Svar:** Skjæringspunktet er $\\left(\\frac{19}{3}, \\frac{17}{3}\\right)$.`,
    },

    // Oppgave 3
    {
      id: 'r1-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn skjæringspunktet mellom linjene.',
        subTasks: [
          { label: 'a', task: '$\\ell_1: x = t, y = 2t$ og $\\ell_2: x = 3 - s, y = s$', solution: '$t = 3 - s$ og $2t = s$ gir $2(3 - s) = s$, så $s = 2, t = 1$. Skjæring: $(1, 2)$' },
          { label: 'b', task: '$\\ell_1: x = 2 + t, y = 1 + t$ og $\\ell_2: x = 1 + 2s, y = 3 - s$', solution: '$2 + t = 1 + 2s$ og $1 + t = 3 - s$ gir $t = 2, s = 1$. Skjæring: $(4, 3)$' },
          { label: 'c', task: '$\\ell_1: x = 1 + 3t, y = 2t$ og $\\ell_2: x = 2s, y = 1 + s$', solution: '$1 + 3t = 2s$ og $2t = 1 + s$ gir $t = 1, s = 2$. Skjæring: $(4, 2)$' },
        ],
        hints: ['Bruk forskjellige parameternavn', 'Sett opp to ligninger med to ukjente'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SIRKEL OG KURVER ==========
    {
      id: 'r1-6-3-sirkel-intro',
      type: 'text',
      content: `## Parameterframstilling av sirkel

Parameterframstilling er spesielt nyttig for kurver som ikke er funksjoner.`,
    },

    // Definisjon: Sirkel
    {
      id: 'r1-6-3-def-sirkel',
      type: 'definition',
      title: 'Sirkel med parameterframstilling',
      content: `En sirkel med sentrum $(h, k)$ og radius $r$ har parameterframstilling:

$$\\begin{cases} x(t) = h + r\\cos t \\\\ y(t) = k + r\\sin t \\end{cases}$$

der $t \\in [0, 2\\pi)$.

For en sirkel med sentrum i origo og radius $r$:
$$\\begin{cases} x(t) = r\\cos t \\\\ y(t) = r\\sin t \\end{cases}$$`,
    },

    // GeoGebra: Sirkel
    {
      id: 'r1-6-3-geogebra-sirkel',
      type: 'geogebra',
      title: 'Sirkel med parameterframstilling',
      description: 'Se hvordan punktet beveger seg rundt sirkelen når parameteren $t$ endres.',
      appType: 'geometry',
      commands: [
        't_1 = Slider(0, 2*pi, 0.1)',
        'r = 3',
        'P = (r*cos(t_1), r*sin(t_1))',
        'sirkel = Circle((0, 0), r)',
        'SetColor(P, "Red")',
        'SetPointSize(P, 5)',
        'radius = Segment((0, 0), P)',
        'SetColor(radius, "Blue")',
      ],
    },

    // Eksempel 4: Sirkel
    {
      id: 'r1-6-3-example-sirkel',
      type: 'example',
      title: 'Eksempel 4: Sirkel',
      problem: `En sirkel har sentrum i $(2, 3)$ og radius 4.

a) Skriv parameterframstillingen.
b) Finn punktet på sirkelen for $t = \\frac{\\pi}{3}$.
c) Verifiser at punktet ligger på sirkelen.`,
      solution: `**Løsning:**

a) Parameterframstilling:
$$\\begin{cases} x(t) = 2 + 4\\cos t \\\\ y(t) = 3 + 4\\sin t \\end{cases}$$

b) For $t = \\frac{\\pi}{3}$:
$$x = 2 + 4\\cos\\frac{\\pi}{3} = 2 + 4 \\cdot \\frac{1}{2} = 2 + 2 = 4$$
$$y = 3 + 4\\sin\\frac{\\pi}{3} = 3 + 4 \\cdot \\frac{\\sqrt{3}}{2} = 3 + 2\\sqrt{3}$$

Punktet er $(4, 3 + 2\\sqrt{3})$.

c) Verifisering - avstanden fra sentrum til punktet:
$$d = \\sqrt{(4-2)^2 + (3 + 2\\sqrt{3} - 3)^2} = \\sqrt{4 + 12} = \\sqrt{16} = 4 = r \\checkmark$$`,
    },

    // Oppgave 4
    {
      id: 'r1-6-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Arbeid med parameterframstilling av sirkler.',
        subTasks: [
          { label: 'a', task: 'Skriv parameterframstillingen for sirkelen med sentrum i origo og radius 5.', solution: '$x = 5\\cos t, y = 5\\sin t$' },
          { label: 'b', task: 'Finn punktet på sirkelen $x = 3\\cos t, y = 3\\sin t$ for $t = \\frac{\\pi}{2}$.', solution: '$x = 0, y = 3$. Punktet er $(0, 3)$.' },
          { label: 'c', task: 'Skriv parameterframstillingen for sirkelen med sentrum $(-1, 2)$ og radius 3.', solution: '$x = -1 + 3\\cos t, y = 2 + 3\\sin t$' },
        ],
        hints: ['For sirkel: bruk $\\cos$ og $\\sin$ med riktig amplitude og senterforskyvning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ANDRE KURVER ==========
    {
      id: 'r1-6-3-kurver-intro',
      type: 'text',
      content: `## Andre kurver

Mange interessante kurver kan beskrives med parameterframstilling.`,
    },

    // Eksempel 5: Ellipse og andre kurver
    {
      id: 'r1-6-3-example-kurver',
      type: 'example',
      title: 'Eksempel 5: Ellipse',
      problem: `En ellipse har ligningen $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$.

Finn parameterframstillingen.`,
      solution: `**Løsning:**

For en ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ er parameterframstillingen:
$$\\begin{cases} x(t) = a\\cos t \\\\ y(t) = b\\sin t \\end{cases}$$

Her er $a = 3$ og $b = 2$.

**Svar:**
$$\\begin{cases} x(t) = 3\\cos t \\\\ y(t) = 2\\sin t \\end{cases}$$

**Verifisering:**
$$\\frac{x^2}{9} + \\frac{y^2}{4} = \\frac{9\\cos^2 t}{9} + \\frac{4\\sin^2 t}{4} = \\cos^2 t + \\sin^2 t = 1 \\checkmark$$`,
    },

    // ========== BEVEGELSE ==========
    {
      id: 'r1-6-3-bevegelse-intro',
      type: 'text',
      content: `## Bevegelse og hastighetsvektor

Parameterframstilling er naturlig for å beskrive bevegelse, der parameteren $t$ ofte representerer tid.`,
    },

    // Definisjon: Hastighetsvektor
    {
      id: 'r1-6-3-def-hastighet',
      type: 'definition',
      title: 'Hastighetsvektor',
      content: `Hvis et punkt beveger seg langs kurven $\\vec{r}(t) = [x(t), y(t)]$, er **hastighetsvektoren**:

$$\\vec{v}(t) = \\vec{r}'(t) = [x'(t), y'(t)]$$

Hastighetsvektoren er tangent til kurven og peker i bevegelsesretningen.

**Farten** (hastighetens størrelse) er:
$$|\\vec{v}(t)| = \\sqrt{(x'(t))^2 + (y'(t))^2}$$`,
    },

    // Eksempel 6: Bevegelse
    {
      id: 'r1-6-3-example-bevegelse',
      type: 'example',
      title: 'Eksempel 6: Bevegelse langs en linje',
      problem: `En partikkel beveger seg langs banen $\\vec{r}(t) = [1 + 2t, 3 + 4t]$ der $t$ er tid i sekunder og posisjon i meter.

a) Finn hastighetsvektoren.
b) Finn farten.
c) Hvor er partikkelen etter 3 sekunder?`,
      solution: `**Løsning:**

a) Hastighetsvektoren:
$$\\vec{v}(t) = \\vec{r}'(t) = [\\frac{d}{dt}(1 + 2t), \\frac{d}{dt}(3 + 4t)] = [2, 4]$$

Hastighetsvektoren er konstant (rettlinjet bevegelse med konstant hastighet).

b) Farten:
$$|\\vec{v}| = \\sqrt{2^2 + 4^2} = \\sqrt{20} = 2\\sqrt{5} \\approx 4{,}47 \\text{ m/s}$$

c) Posisjon etter 3 sekunder:
$$\\vec{r}(3) = [1 + 2 \\cdot 3, 3 + 4 \\cdot 3] = [7, 15]$$

Partikkelen er i punktet $(7, 15)$.`,
    },

    // Eksempel 7: Sirkelbevegelse
    {
      id: 'r1-6-3-example-sirkel-bevegelse',
      type: 'example',
      title: 'Eksempel 7: Sirkelbevegelse',
      problem: `En partikkel beveger seg langs sirkelen $\\vec{r}(t) = [5\\cos t, 5\\sin t]$.

a) Finn hastighetsvektoren.
b) Vis at hastighetsvektoren alltid er ortogonal på posisjonsvektoren.
c) Finn farten.`,
      solution: `**Løsning:**

a) Hastighetsvektoren:
$$\\vec{v}(t) = \\vec{r}'(t) = [-5\\sin t, 5\\cos t]$$

b) Vi beregner skalarproduktet $\\vec{r}(t) \\cdot \\vec{v}(t)$:
$$\\vec{r} \\cdot \\vec{v} = (5\\cos t)(-5\\sin t) + (5\\sin t)(5\\cos t)$$
$$= -25\\cos t \\sin t + 25\\sin t \\cos t = 0$$

Siden $\\vec{r} \\cdot \\vec{v} = 0$, er $\\vec{v} \\perp \\vec{r}$. Hastighetsvektoren er tangent til sirkelen.

c) Farten:
$$|\\vec{v}| = \\sqrt{(-5\\sin t)^2 + (5\\cos t)^2} = \\sqrt{25\\sin^2 t + 25\\cos^2 t} = \\sqrt{25} = 5$$

Farten er konstant og lik 5 (lik sirkelens radius, siden vinkelhastigheten er 1 rad/s).`,
    },

    // Oppgave 5
    {
      id: 'r1-6-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En partikkel beveger seg langs banen $\\vec{r}(t) = [3t, 4t - t^2]$ der $t \\geq 0$.',
        subTasks: [
          { label: 'a', task: 'Finn hastighetsvektoren $\\vec{v}(t)$.', solution: '$\\vec{v}(t) = [3, 4 - 2t]$' },
          { label: 'b', task: 'Finn farten ved $t = 0$ og $t = 2$.', solution: '$|\\vec{v}(0)| = \\sqrt{9 + 16} = 5$. $|\\vec{v}(2)| = \\sqrt{9 + 0} = 3$.' },
          { label: 'c', task: 'Når er hastigheten horisontal (parallell med $x$-aksen)?', solution: 'Når $y$-komponenten er null: $4 - 2t = 0$, altså $t = 2$.' },
        ],
        hints: ['Deriver komponent for komponent'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r1-6-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-6-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Anvendt oppgave med sirkelbevegelse.',
        subTasks: [
          { label: 'a', task: 'En partikkel beveger seg langs $\\vec{r}(t) = [4\\cos(2t), 4\\sin(2t)]$. Finn hastighetsvektoren.', solution: '$\\vec{v}(t) = [-8\\sin(2t), 8\\cos(2t)]$' },
          { label: 'b', task: 'Finn farten. Sammenlign med forrige eksempel og forklar forskjellen.', solution: '$|\\vec{v}| = \\sqrt{64\\sin^2(2t) + 64\\cos^2(2t)} = 8$. Dobbelt så rask fordi vinkelhastigheten er 2 rad/s.' },
          { label: 'c', task: 'Finn akselerasjonsvektoren $\\vec{a}(t) = \\vec{v}\'(t)$ og vis at den peker mot sentrum.', solution: '$\\vec{a} = [-16\\cos(2t), -16\\sin(2t)] = -4\\vec{r}(t)$. Peker mot sentrum (sentripetalakselerasjon).' },
        ],
        hints: ['Akselerasjonen er den deriverte av hastigheten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-6-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-6-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktiske anvendelser.',
        subTasks: [
          { label: 'a', task: 'Et fly flyr langs banen $\\vec{r}(t) = [200t, 100t - 5t^2]$ (i meter). Finn maksimal høyde.', solution: 'Maks når $y\'(t) = 100 - 10t = 0$, så $t = 10$ s. $y_{max} = 100 \\cdot 10 - 5 \\cdot 100 = 500$ m.' },
          { label: 'b', task: 'Når og hvor lander flyet (når $y = 0$ igjen)?', solution: '$100t - 5t^2 = 0$ gir $t = 0$ eller $t = 20$ s. Posisjon: $(4000, 0)$.' },
          { label: 'c', task: 'Finn farten ved landing.', solution: '$\\vec{v}(20) = [200, 100 - 200] = [200, -100]$. $|\\vec{v}| = \\sqrt{40000 + 10000} = 100\\sqrt{5} \\approx 224$ m/s.' },
        ],
        hints: ['Dette er et skrått kast (parabel)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r1-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Parameterframstilling:**
- Kurve: $\\begin{cases} x = x(t) \\\\ y = y(t) \\end{cases}$
- Vektor: $\\vec{r}(t) = [x(t), y(t)]$

**Linje:**
$$\\vec{r}(t) = \\vec{p} + t\\vec{v}$$

**Sirkel** (sentrum $(h, k)$, radius $r$):
$$\\begin{cases} x = h + r\\cos t \\\\ y = k + r\\sin t \\end{cases}$$

**Bevegelse:**
- Hastighetsvektor: $\\vec{v}(t) = \\vec{r}'(t)$
- Fart: $|\\vec{v}(t)| = \\sqrt{(x')^2 + (y')^2}$
- Akselerasjon: $\\vec{a}(t) = \\vec{v}'(t)$

**Skjæringspunkt:** Sett ligningene lik hverandre med forskjellige parameternavn.`,
    },
  ],
  exercises: [],
};

// Eksporter alle kapitler som et objekt
export const CHAPTERS_R1: Record<string, TextbookChapter> = {
  'r1-1-1': CHAPTER_R1_1_1,
  'r1-1-2': CHAPTER_R1_1_2,
  'r1-1-3': CHAPTER_R1_1_3,
  'r1-2-1': CHAPTER_R1_2_1,
  'r1-2-2': CHAPTER_R1_2_2,
  'r1-2-3': CHAPTER_R1_2_3,
  'r1-3-1': CHAPTER_R1_3_1,
  'r1-3-2': CHAPTER_R1_3_2,
  'r1-3-3': CHAPTER_R1_3_3,
  'r1-3-4': CHAPTER_R1_3_4,
  'r1-3-5': CHAPTER_R1_3_5,
  'r1-4-1': CHAPTER_R1_4_1,
  'r1-4-2': CHAPTER_R1_4_2,
  'r1-4-3': CHAPTER_R1_4_3,
  'r1-4-4': CHAPTER_R1_4_4,
  'r1-4-5': CHAPTER_R1_4_5,
  'r1-4-6': CHAPTER_R1_4_6,
  'r1-4-7': CHAPTER_R1_4_7,
  'r1-4-8': CHAPTER_R1_4_8,
  'r1-5-1': CHAPTER_R1_5_1,
  'r1-5-2': CHAPTER_R1_5_2,
  'r1-5-3': CHAPTER_R1_5_3,
  'r1-6-1': CHAPTER_R1_6_1,
  'r1-6-2': CHAPTER_R1_6_2,
  'r1-6-3': CHAPTER_R1_6_3,
};
