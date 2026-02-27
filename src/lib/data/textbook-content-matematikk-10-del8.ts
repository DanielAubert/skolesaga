/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Del 8: Polynomer og algebraiske uttrykk
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Del 8 dekker:
 *   8.1 Multiplikasjon av polynomer
 *   8.2 Kvadratsetningene
 *   8.3 Algebraisk divisjon og rasjonale uttrykk
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Multiplikasjon av polynomer
// LK20: utforske og generalisere multiplikasjon av polynom algebraisk og geometrisk
// ============================================================================

export const CHAPTER_10_8_1: TextbookChapter = {
  id: '10-8-1',
  courseId: '10',
  chapterNumber: '8.1',
  title: 'Multiplikasjon av polynomer',
  description: 'Lær å multiplisere monomier, binomier og polynomer ved hjelp av distributiv lov, FOIL-metoden og arealmodellen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og generalisere multiplikasjon av polynom algebraisk og geometrisk',
  ],
  keyTerms: [
    { term: 'Monom', definition: 'Et algebraisk uttrykk med bare ett ledd, for eksempel $3x^2$.' },
    { term: 'Binom', definition: 'Et algebraisk uttrykk med to ledd, for eksempel $x + 3$.' },
    { term: 'Polynom', definition: 'Et algebraisk uttrykk med ett eller flere ledd, for eksempel $2x^2 + 3x - 5$.' },
    { term: 'Distributiv lov', definition: 'Regelen $a(b + c) = ab + ac$, som lar oss multiplisere et ledd med en parentes.' },
    { term: 'FOIL-metoden', definition: 'En huskeregel for å multiplisere to binomier: First, Outer, Inner, Last.' },
    { term: 'Arealmodellen', definition: 'En geometrisk framstilling der polynom-multiplikasjon tolkes som areal av et rektangel.' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-8-1-intro',
      type: 'text',
      content: `## Multiplikasjon av polynomer

Når vi regner med algebra, trenger vi ofte å multiplisere uttrykk med hverandre. Kanskje du skal finne arealet av et rektangel med sider $(x + 3)$ og $(x + 5)$, eller forenkle et uttrykk i en likning. Da må vi vite hvordan vi multipliserer polynomer.

I dette kapittelet skal du lære:
- Hvordan du multipliserer et monom med et polynom
- Hvordan du multipliserer to binomier med FOIL-metoden
- Hvordan du multipliserer vilkårlige polynomer
- Hvordan arealmodellen gir en geometrisk forståelse av multiplikasjonen`,
    },

    // ========== BLOKK 1: Monom ganger polynom ==========
    {
      id: '10-8-1-def-1',
      type: 'definition',
      title: 'Monom ganget med polynom (distributiv lov)',
      content: `Når vi multipliserer et monom med et polynom, bruker vi den **distributive loven**:

$$a(b + c) = ab + ac$$

Vi multipliserer monomet med hvert ledd i polynomet, ett om gangen.

**Generelt:** Hvis $a$ er et monom og $(b_1 + b_2 + \\ldots + b_n)$ er et polynom, da er:

$$a(b_1 + b_2 + \\ldots + b_n) = ab_1 + ab_2 + \\ldots + ab_n$$`,
    },
    {
      id: '10-8-1-ex-1',
      type: 'example',
      title: 'Eksempel: Monom ganget med binom',
      problem: 'Utvid og forenkle $3x(2x + 5)$.',
      solution: `Vi bruker distributiv lov og multipliserer $3x$ med hvert ledd i parentesen:

$$3x(2x + 5) = 3x \\cdot 2x + 3x \\cdot 5 = 6x^2 + 15x$$

**Svar:** $3x(2x + 5) = 6x^2 + 15x$`,
    },
    {
      id: '10-8-1-example-2',
      type: 'example',
      title: 'Eksempel: Monom ganget med trinom',
      problem: 'Utvid og forenkle $-2x^2(3x^2 - 4x + 1)$.',
      solution: `Vi multipliserer $-2x^2$ med hvert ledd:

$$-2x^2(3x^2 - 4x + 1) = -2x^2 \\cdot 3x^2 + (-2x^2) \\cdot (-4x) + (-2x^2) \\cdot 1$$

$$= -6x^4 + 8x^3 - 2x^2$$

**Svar:** $-2x^2(3x^2 - 4x + 1) = -6x^4 + 8x^3 - 2x^2$`,
    },
    {
      id: '10-8-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-8-1-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Utvid og forenkle uttrykkene:',
        subTasks: [
          { label: 'a', task: '$4(x + 3)$', solution: '$4(x + 3) = 4x + 12$', expressionAnswer: '4x+12' },
          { label: 'b', task: '$2x(3x - 1)$', solution: '$2x(3x - 1) = 6x^2 - 2x$', expressionAnswer: '6x^2-2x' },
          { label: 'c', task: '$-3x(x + 7)$', solution: '$-3x(x + 7) = -3x^2 - 21x$', expressionAnswer: '-3x^2-21x' },
          { label: 'd', task: '$5x^2(2x - 3)$', solution: '$5x^2(2x - 3) = 10x^3 - 15x^2$', expressionAnswer: '10x^3-15x^2' },
        ],
        solution: 'Bruk distributiv lov: multipliser monomet med hvert ledd i parentesen.',
        hints: ['Husk at $x \\cdot x = x^2$ og $x^2 \\cdot x = x^3$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 2: Binom ganger binom (FOIL) ==========
    {
      id: '10-8-1-def-2',
      type: 'definition',
      title: 'Multiplikasjon av to binomier (FOIL-metoden)',
      content: `Når vi multipliserer to binomier $(a + b)(c + d)$, multipliserer vi hvert ledd i den første parentesen med hvert ledd i den andre.

En huskeregel er **FOIL**:
- **F**irst (første ledd): $a \\cdot c$
- **O**uter (ytre ledd): $a \\cdot d$
- **I**nner (indre ledd): $b \\cdot c$
- **L**ast (siste ledd): $b \\cdot d$

$$(a + b)(c + d) = ac + ad + bc + bd$$

Etter utvidelsen samler vi like ledd.`,
    },
    {
      id: '10-8-1-example-3',
      type: 'example',
      title: 'Eksempel: FOIL-metoden',
      problem: 'Utvid og forenkle $(x + 3)(x + 5)$.',
      solution: `Vi bruker FOIL-metoden:

- **F:** $x \\cdot x = x^2$
- **O:** $x \\cdot 5 = 5x$
- **I:** $3 \\cdot x = 3x$
- **L:** $3 \\cdot 5 = 15$

$$= x^2 + 5x + 3x + 15 = x^2 + 8x + 15$$

**Svar:** $(x + 3)(x + 5) = x^2 + 8x + 15$`,
    },
    {
      id: '10-8-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-8-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk FOIL-metoden til å utvide og forenkle:',
        subTasks: [
          { label: 'a', task: '$(x + 2)(x + 4)$', solution: '$(x+2)(x+4) = x^2 + 4x + 2x + 8 = x^2 + 6x + 8$', expressionAnswer: 'x^2+6x+8' },
          { label: 'b', task: '$(x + 1)(x + 6)$', solution: '$(x+1)(x+6) = x^2 + 6x + x + 6 = x^2 + 7x + 6$', expressionAnswer: 'x^2+7x+6' },
          { label: 'c', task: '$(x - 3)(x + 2)$', solution: '$(x-3)(x+2) = x^2 + 2x - 3x - 6 = x^2 - x - 6$', expressionAnswer: 'x^2-x-6' },
          { label: 'd', task: '$(x - 4)(x - 5)$', solution: '$(x-4)(x-5) = x^2 - 5x - 4x + 20 = x^2 - 9x + 20$', expressionAnswer: 'x^2-9x+20' },
        ],
        solution: 'Multipliser hvert ledd i den første parentesen med hvert ledd i den andre, og samle like ledd.',
        hints: ['Husk fortegnene! Minus ganger minus gir pluss, og minus ganger pluss gir minus.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-8-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-8-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utvid og forenkle:',
        subTasks: [
          { label: 'a', task: '$(2x + 3)(x + 4)$', solution: '$(2x+3)(x+4) = 2x^2 + 8x + 3x + 12 = 2x^2 + 11x + 12$', expressionAnswer: '2x^2+11x+12' },
          { label: 'b', task: '$(3x - 1)(2x + 5)$', solution: '$(3x-1)(2x+5) = 6x^2 + 15x - 2x - 5 = 6x^2 + 13x - 5$', expressionAnswer: '6x^2+13x-5' },
          { label: 'c', task: '$(4x + 1)(4x - 1)$', solution: '$(4x+1)(4x-1) = 16x^2 - 4x + 4x - 1 = 16x^2 - 1$', expressionAnswer: '16x^2-1' },
        ],
        solution: 'Bruk FOIL og vær nøye med koeffisientene. Samle like ledd til slutt.',
        hints: ['Husk å multiplisere koeffisientene: $2x \\cdot x = 2x^2$, ikke $2x^2$ bare fordi det er to $x$-er.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 3: Arealmodellen ==========
    {
      id: '10-8-1-def-3',
      type: 'definition',
      title: 'Arealmodellen for polynom-multiplikasjon',
      content: `**Arealmodellen** gir en geometrisk tolkning av polynom-multiplikasjon.

Tenk deg et rektangel med sider $(a + b)$ og $(c + d)$. Arealet av rektangelet er $(a + b)(c + d)$.

Vi kan dele rektangelet i fire mindre rektangler:

| | $c$ | $d$ |
|---|---|---|
| $a$ | $ac$ | $ad$ |
| $b$ | $bc$ | $bd$ |

Totalt areal: $ac + ad + bc + bd$

Denne modellen viser at multiplikasjonen av to binomier gir summen av fire delprodukter — nøyaktig det samme som FOIL-metoden.`,
    },
    {
      id: '10-8-1-example-4',
      type: 'example',
      title: 'Eksempel: Arealmodellen',
      problem: 'Bruk arealmodellen til å multiplisere $(x + 3)(x + 5)$.',
      solution: `Vi tegner et rektangel med sider $x + 3$ og $x + 5$, og deler det i fire deler:

| | $x$ | $5$ |
|---|---|---|
| $x$ | $x \\cdot x = x^2$ | $x \\cdot 5 = 5x$ |
| $3$ | $3 \\cdot x = 3x$ | $3 \\cdot 5 = 15$ |

Totalt areal:

$$x^2 + 5x + 3x + 15 = x^2 + 8x + 15$$

Vi får det samme svaret som med FOIL. Arealmodellen gir oss en visuell forståelse av hvorfor formelen fungerer.`,
    },
    {
      id: '10-8-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-8-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk arealmodellen (tegn et rektangel delt i fire deler) til å multiplisere $(x + 2)(x + 7)$. Skriv opp alle fire delarealer og finn det totale arealet.',
        solution: `Vi deler rektangelet:\n\n| | $x$ | $7$ |\n|---|---|---|\n| $x$ | $x^2$ | $7x$ |\n| $2$ | $2x$ | $14$ |\n\nTotalt areal: $x^2 + 7x + 2x + 14 = x^2 + 9x + 14$`,
        hints: ['Tegn et rektangel. Del den ene siden i $x$ og $2$, og den andre i $x$ og $7$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 4: Polynom ganger polynom ==========
    {
      id: '10-8-1-def-4',
      type: 'definition',
      title: 'Multiplikasjon av vilkårlige polynomer',
      content: `Når vi multipliserer to polynomer med flere ledd, bruker vi samme prinsipp som distributiv lov: **hvert ledd i det første polynomet multipliseres med hvert ledd i det andre**.

$$(a + b + c)(d + e) = ad + ae + bd + be + cd + ce$$

Vi kan organisere dette systematisk ved å ta ett ledd om gangen fra den første parentesen og multiplisere med hele den andre parentesen.`,
    },
    {
      id: '10-8-1-example-5',
      type: 'example',
      title: 'Eksempel: Trinom ganget med binom',
      problem: 'Utvid og forenkle $(x^2 + 3x + 2)(x + 4)$.',
      solution: `Vi tar hvert ledd i den første parentesen og multipliserer med $(x + 4)$:

$$x^2(x + 4) + 3x(x + 4) + 2(x + 4)$$

$$= x^3 + 4x^2 + 3x^2 + 12x + 2x + 8$$

Vi samler like ledd:

$$= x^3 + 7x^2 + 14x + 8$$

**Svar:** $(x^2 + 3x + 2)(x + 4) = x^3 + 7x^2 + 14x + 8$`,
    },
    {
      id: '10-8-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-8-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utvid og forenkle:',
        subTasks: [
          { label: 'a', task: '$(x^2 + 2x + 1)(x + 3)$', solution: '$x^2(x+3) + 2x(x+3) + 1(x+3) = x^3 + 3x^2 + 2x^2 + 6x + x + 3 = x^3 + 5x^2 + 7x + 3$', expressionAnswer: 'x^3+5x^2+7x+3' },
          { label: 'b', task: '$(x + 1)(x^2 - x + 1)$', solution: '$x(x^2-x+1) + 1(x^2-x+1) = x^3 - x^2 + x + x^2 - x + 1 = x^3 + 1$', expressionAnswer: 'x^3+1' },
        ],
        solution: 'Multipliser hvert ledd i den ene parentesen med hele den andre parentesen. Samle like ledd.',
        hints: ['Ta det steg for steg: begynn med det første leddet i den første parentesen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-8-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `Vi har lært tre viktige teknikker for polynom-multiplikasjon:

1. **Monom ganger polynom:** Bruk distributiv lov — $a(b + c) = ab + ac$
2. **Binom ganger binom (FOIL):** $(a + b)(c + d) = ac + ad + bc + bd$
3. **Arealmodellen:** En geometrisk tolkning som viser at multiplikasjonen tilsvarer summen av delarealer i et rektangel
4. **Polynom ganger polynom:** Hvert ledd i den ene faktoren multipliseres med hvert ledd i den andre

Husk alltid å **samle like ledd** etter at du har utvidet uttrykket!`,
    },

    // --- Samleoppgaver ---
    {
      id: '10-8-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-8-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et rektangulært rom har lengde $(2x + 3)$ meter og bredde $(x + 4)$ meter. Finn et uttrykk for arealet av rommet, og beregn arealet når $x = 5$.',
        solution: `Areal $= (2x + 3)(x + 4)$\n\nVi utvider med FOIL:\n$= 2x^2 + 8x + 3x + 12 = 2x^2 + 11x + 12$\n\nFor $x = 5$:\n$= 2 \\cdot 25 + 11 \\cdot 5 + 12 = 50 + 55 + 12 = 117$ m$^2$`,
        hints: ['Areal av rektangel = lengde · bredde. Sett inn $x = 5$ i det forenklede uttrykket.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-8-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-8-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utvid og forenkle $(x + 2)(x - 3)(x + 1)$.',
        solution: `Vi multipliserer to og to parenteser.\n\nFørst: $(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6$\n\nSå: $(x^2 - x - 6)(x + 1)$\n$= x^2(x+1) - x(x+1) - 6(x+1)$\n$= x^3 + x^2 - x^2 - x - 6x - 6$\n$= x^3 - 7x - 6$`,
        hints: ['Start med å multiplisere to av parentesene først. Bruk resultatet til å multiplisere med den tredje.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-8-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-8-1-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at $(x + a)(x + b) = x^2 + (a + b)x + ab$ for alle verdier av $x$, $a$ og $b$. Bruk dette til å multiplisere $(x + 7)(x - 3)$ uten å bruke FOIL direkte.',
        solution: `**Bevis:**\n$(x + a)(x + b) = x \\cdot x + x \\cdot b + a \\cdot x + a \\cdot b = x^2 + bx + ax + ab = x^2 + (a + b)x + ab$ \\checkmark\n\n**Anvendelse:**\nHer er $a = 7$ og $b = -3$.\n$a + b = 7 + (-3) = 4$\n$ab = 7 \\cdot (-3) = -21$\n\n$(x + 7)(x - 3) = x^2 + 4x - 21$`,
        hints: ['Bruk FOIL til beviset. I den andre delen setter du bare inn verdiene for $a$ og $b$ i formelen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Kvadratsetningene
// LK20: utforske og generalisere multiplikasjon av polynom algebraisk og geometrisk
// ============================================================================

export const CHAPTER_10_8_2: TextbookChapter = {
  id: '10-8-2',
  courseId: '10',
  chapterNumber: '8.2',
  title: 'Kvadratsetningene',
  description: 'Lær de tre kvadratsetningene — første og andre kvadratsetning og konjugatsetningen — med algebraiske og geometriske bevis.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske og generalisere multiplikasjon av polynom algebraisk og geometrisk',
  ],
  keyTerms: [
    { term: 'Første kvadratsetning', definition: '$(a + b)^2 = a^2 + 2ab + b^2$' },
    { term: 'Andre kvadratsetning', definition: '$(a - b)^2 = a^2 - 2ab + b^2$' },
    { term: 'Konjugatsetningen', definition: '$(a + b)(a - b) = a^2 - b^2$. Også kalt tredje kvadratsetning.' },
    { term: 'Konjugerte uttrykk', definition: 'To binomier på formen $(a + b)$ og $(a - b)$ kalles konjugerte.' },
    { term: 'Fullstendig kvadrat', definition: 'Et uttrykk på formen $a^2 + 2ab + b^2 = (a + b)^2$ eller $a^2 - 2ab + b^2 = (a - b)^2$.' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-8-2-intro',
      type: 'text',
      content: `## Kvadratsetningene

Når vi multipliserer polynomer, dukker det opp noen spesielle mønstre som går igjen. De tre **kvadratsetningene** er slike mønstre — de lar oss utvide og faktorisere uttrykk raskt uten å bruke FOIL hver gang.

Disse setningene er blant de viktigste verktøyene i algebra, og du vil bruke dem i mange sammenhenger: likningsteknikk, funksjonsanalyse, og videre i matematikken.

I dette kapittelet skal du lære:
- Første kvadratsetning: $(a + b)^2$
- Andre kvadratsetning: $(a - b)^2$
- Konjugatsetningen (tredje kvadratsetning): $(a + b)(a - b)$
- Geometriske bevis for alle tre setningene`,
    },

    // ========== BLOKK 1: Første kvadratsetning ==========
    {
      id: '10-8-2-def-1',
      type: 'definition',
      title: 'Første kvadratsetning',
      content: `**Første kvadratsetning:**

$$(a + b)^2 = a^2 + 2ab + b^2$$

Denne setningen sier at kvadratet av en sum er lik summen av kvadratene pluss det dobbelte av produktet.

**Algebraisk bevis:**

$$(a + b)^2 = (a + b)(a + b)$$

Vi bruker FOIL:

$$= a^2 + ab + ab + b^2 = a^2 + 2ab + b^2 \\quad \\checkmark$$`,
    },
    {
      id: '10-8-2-note-1',
      type: 'note',
      title: 'Geometrisk bevis for første kvadratsetning',
      content: `Tenk deg et kvadrat med side $a + b$. Arealet av hele kvadratet er $(a + b)^2$.

Vi kan dele dette kvadratet i fire deler:

| | $a$ | $b$ |
|---|---|---|
| $a$ | $a^2$ | $ab$ |
| $b$ | $ab$ | $b^2$ |

- Øverst til venstre: et kvadrat med side $a$, areal $a^2$
- Øverst til høyre: et rektangel med sider $a$ og $b$, areal $ab$
- Nederst til venstre: et rektangel med sider $b$ og $a$, areal $ab$
- Nederst til høyre: et kvadrat med side $b$, areal $b^2$

Totalt areal: $a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$

Denne geometriske modellen viser tydelig hvorfor det dobbelte produktet $2ab$ dukker opp: vi får to like rektangler.`,
    },
    {
      id: '10-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Første kvadratsetning',
      problem: 'Utvid $(x + 4)^2$.',
      solution: `Vi bruker første kvadratsetning med $a = x$ og $b = 4$:

$$(x + 4)^2 = x^2 + 2 \\cdot x \\cdot 4 + 4^2 = x^2 + 8x + 16$$

**Svar:** $(x + 4)^2 = x^2 + 8x + 16$`,
    },
    {
      id: '10-8-2-warning-1',
      type: 'warning',
      title: 'Vanlig feil!',
      content: `Mange skriver feilaktig:

$$(a + b)^2 = a^2 + b^2 \\quad \\text{FEIL!}$$

Du glemmer det dobbelte produktet $2ab$. Riktig er:

$$(a + b)^2 = a^2 + 2ab + b^2$$

En rask sjekk: $(3 + 4)^2 = 7^2 = 49$, men $3^2 + 4^2 = 9 + 16 = 25 \\neq 49$.`,
    },
    {
      id: '10-8-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-8-2-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk første kvadratsetning til å utvide:',
        subTasks: [
          { label: 'a', task: '$(x + 3)^2$', solution: '$(x+3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$', expressionAnswer: 'x^2+6x+9' },
          { label: 'b', task: '$(x + 5)^2$', solution: '$(x+5)^2 = x^2 + 2 \\cdot x \\cdot 5 + 5^2 = x^2 + 10x + 25$', expressionAnswer: 'x^2+10x+25' },
          { label: 'c', task: '$(2x + 1)^2$', solution: '$(2x+1)^2 = (2x)^2 + 2 \\cdot 2x \\cdot 1 + 1^2 = 4x^2 + 4x + 1$', expressionAnswer: '4x^2+4x+1' },
          { label: 'd', task: '$(3x + 2)^2$', solution: '$(3x+2)^2 = (3x)^2 + 2 \\cdot 3x \\cdot 2 + 2^2 = 9x^2 + 12x + 4$', expressionAnswer: '9x^2+12x+4' },
        ],
        solution: 'Bruk formelen $(a+b)^2 = a^2 + 2ab + b^2$.',
        hints: ['Identifiser $a$ og $b$ i hvert uttrykk. Husk at i c) er $a = 2x$, så $a^2 = 4x^2$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 2: Andre kvadratsetning ==========
    {
      id: '10-8-2-def-2',
      type: 'definition',
      title: 'Andre kvadratsetning',
      content: `**Andre kvadratsetning:**

$$(a - b)^2 = a^2 - 2ab + b^2$$

Denne setningen sier at kvadratet av en differanse er lik summen av kvadratene *minus* det dobbelte av produktet.

**Algebraisk bevis:**

$$(a - b)^2 = (a - b)(a - b)$$

Vi bruker FOIL:

$$= a^2 - ab - ab + b^2 = a^2 - 2ab + b^2 \\quad \\checkmark$$

Legg merke til at $b^2$ alltid er positivt, siden $(-b)(-b) = b^2$.`,
    },
    {
      id: '10-8-2-note-2',
      type: 'note',
      title: 'Geometrisk bevis for andre kvadratsetning',
      content: `Tenk deg et stort kvadrat med side $a$. Vi trekker fra en stripe med bredde $b$ langs to sider.

Start med det store kvadratet med areal $a^2$.

Vi fjerner to rektangler med areal $ab$ hver (langs høyre side og bunnen). Men da har vi fjernet hjørnekvdratet med areal $b^2$ to ganger, så vi legger det til én gang.

$$a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$$

Det gjenværende arealet er nettopp $(a - b)^2$, altså arealet av et kvadrat med side $(a - b)$.

Dermed er $(a - b)^2 = a^2 - 2ab + b^2$.`,
    },
    {
      id: '10-8-2-example-2',
      type: 'example',
      title: 'Eksempel: Andre kvadratsetning',
      problem: 'Utvid $(x - 6)^2$.',
      solution: `Vi bruker andre kvadratsetning med $a = x$ og $b = 6$:

$$(x - 6)^2 = x^2 - 2 \\cdot x \\cdot 6 + 6^2 = x^2 - 12x + 36$$

**Svar:** $(x - 6)^2 = x^2 - 12x + 36$`,
    },
    {
      id: '10-8-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-8-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk andre kvadratsetning til å utvide:',
        subTasks: [
          { label: 'a', task: '$(x - 2)^2$', solution: '$(x-2)^2 = x^2 - 2 \\cdot x \\cdot 2 + 2^2 = x^2 - 4x + 4$', expressionAnswer: 'x^2-4x+4' },
          { label: 'b', task: '$(x - 7)^2$', solution: '$(x-7)^2 = x^2 - 2 \\cdot x \\cdot 7 + 7^2 = x^2 - 14x + 49$', expressionAnswer: 'x^2-14x+49' },
          { label: 'c', task: '$(3x - 4)^2$', solution: '$(3x-4)^2 = (3x)^2 - 2 \\cdot 3x \\cdot 4 + 4^2 = 9x^2 - 24x + 16$', expressionAnswer: '9x^2-24x+16' },
          { label: 'd', task: '$(5x - 1)^2$', solution: '$(5x-1)^2 = (5x)^2 - 2 \\cdot 5x \\cdot 1 + 1^2 = 25x^2 - 10x + 1$', expressionAnswer: '25x^2-10x+1' },
        ],
        solution: 'Bruk formelen $(a-b)^2 = a^2 - 2ab + b^2$.',
        hints: ['Husk at det siste leddet $b^2$ alltid er *positivt*, selv om vi har minus foran $b$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-8-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-8-2-oppg-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse uttrykkene er lik $(x - 3)^2$?',
        options: [
          { id: 'a', text: '$x^2 - 6x + 9$', isCorrect: true },
          { id: 'b', text: '$x^2 - 9$', isCorrect: false },
          { id: 'c', text: '$x^2 + 6x + 9$', isCorrect: false },
          { id: 'd', text: '$x^2 - 3x + 9$', isCorrect: false },
        ],
        solution: '$(x-3)^2 = x^2 - 2 \\cdot x \\cdot 3 + 3^2 = x^2 - 6x + 9$. Alternativ b) er $(x+3)(x-3)$ (konjugatsetningen), c) er $(x+3)^2$, og d) mangler faktoren 2 foran $3x$.',
      },
    },

    // ========== BLOKK 3: Konjugatsetningen ==========
    {
      id: '10-8-2-def-3',
      type: 'definition',
      title: 'Konjugatsetningen (tredje kvadratsetning)',
      content: `**Konjugatsetningen:**

$$(a + b)(a - b) = a^2 - b^2$$

Produktet av to konjugerte binomier er lik differansen av kvadratene.

**Algebraisk bevis:**

$$(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2 \\quad \\checkmark$$

De to midtleddene $-ab$ og $+ab$ slår hverandre ut, slik at vi bare sitter igjen med $a^2 - b^2$.`,
    },
    {
      id: '10-8-2-note-3',
      type: 'note',
      title: 'Geometrisk bevis for konjugatsetningen',
      content: `Tenk deg et stort kvadrat med side $a$ og areal $a^2$. Fra hjørnet klipper vi bort et lite kvadrat med side $b$ og areal $b^2$.

Det gjenværende arealet er $a^2 - b^2$. Denne L-formede figuren kan vi klippe opp og sette sammen til et rektangel:

- Vi klipper langs den vannrette linjen som skiller det store og lille kvadratet.
- Vi får to deler: et rektangel med sider $(a + b)$ og $(a - b)$.

Arealet av rektangelet er $(a + b)(a - b)$.

Siden arealet er det samme som det vi startet med, har vi vist at:

$$(a + b)(a - b) = a^2 - b^2$$`,
    },
    {
      id: '10-8-2-example-3',
      type: 'example',
      title: 'Eksempel: Konjugatsetningen',
      problem: 'Utvid $(x + 8)(x - 8)$.',
      solution: `Vi bruker konjugatsetningen med $a = x$ og $b = 8$:

$$(x + 8)(x - 8) = x^2 - 8^2 = x^2 - 64$$

**Svar:** $(x + 8)(x - 8) = x^2 - 64$`,
    },
    {
      id: '10-8-2-example-4',
      type: 'example',
      title: 'Eksempel: Hoderegning med konjugatsetningen',
      problem: 'Regn ut $47 \\cdot 53$ i hodet.',
      solution: `Vi skriver om tallene:

$$47 \\cdot 53 = (50 - 3)(50 + 3)$$

Nå bruker vi konjugatsetningen med $a = 50$ og $b = 3$:

$$= 50^2 - 3^2 = 2500 - 9 = 2491$$

**Svar:** $47 \\cdot 53 = 2491$

Konjugatsetningen er nyttig for å gjøre multiplikasjoner enklere!`,
    },
    {
      id: '10-8-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-8-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk konjugatsetningen til å utvide:',
        subTasks: [
          { label: 'a', task: '$(x + 5)(x - 5)$', solution: '$(x+5)(x-5) = x^2 - 25$', expressionAnswer: 'x^2-25' },
          { label: 'b', task: '$(2x + 3)(2x - 3)$', solution: '$(2x+3)(2x-3) = (2x)^2 - 3^2 = 4x^2 - 9$', expressionAnswer: '4x^2-9' },
          { label: 'c', task: '$(x + 10)(x - 10)$', solution: '$(x+10)(x-10) = x^2 - 100$', expressionAnswer: 'x^2-100' },
          { label: 'd', task: '$(4x + 7)(4x - 7)$', solution: '$(4x+7)(4x-7) = 16x^2 - 49$', expressionAnswer: '16x^2-49' },
        ],
        solution: 'Bruk formelen $(a+b)(a-b) = a^2 - b^2$.',
        hints: ['Identifiser $a$ og $b$. Husk at $a$ og $b$ kan være hele uttrykk som $2x$ og $3$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-8-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-8-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk konjugatsetningen til å regne ut i hodet:',
        subTasks: [
          { label: 'a', task: '$28 \\cdot 32$', solution: '$28 \\cdot 32 = (30 - 2)(30 + 2) = 900 - 4 = 896$', answer: 896 },
          { label: 'b', task: '$99 \\cdot 101$', solution: '$99 \\cdot 101 = (100 - 1)(100 + 1) = 10000 - 1 = 9999$', answer: 9999 },
          { label: 'c', task: '$43 \\cdot 37$', solution: '$43 \\cdot 37 = (40 + 3)(40 - 3) = 1600 - 9 = 1591$', answer: 1591 },
        ],
        solution: 'Skriv tallene som $(a + b)(a - b)$ der $a$ er et rundt tall.',
        hints: ['Finn gjennomsnittet av de to tallene — det er din $a$-verdi. Forskjellen fra $a$ er $b$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-8-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `De tre kvadratsetningene er:

| Setning | Formel |
|---|---|
| Første kvadratsetning | $(a + b)^2 = a^2 + 2ab + b^2$ |
| Andre kvadratsetning | $(a - b)^2 = a^2 - 2ab + b^2$ |
| Konjugatsetningen | $(a + b)(a - b) = a^2 - b^2$ |

**Tips for å huske:**
- I de to første setningene er det **tre ledd** i svaret — ikke glem midtleddet $\\pm 2ab$!
- I konjugatsetningen er det bare **to ledd** — midtleddene slår hverandre ut.
- Det siste leddet i første og andre kvadratsetning er **alltid positivt** ($b^2$).
- Alle tre kan vises geometrisk med arealer av kvadrater og rektangler.`,
    },

    // --- Samleoppgaver ---
    {
      id: '10-8-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-8-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør hvilken kvadratsetning som passer, og utvid:',
        subTasks: [
          { label: 'a', task: '$(x + 9)^2$', solution: 'Første kvadratsetning: $(x+9)^2 = x^2 + 18x + 81$', expressionAnswer: 'x^2+18x+81' },
          { label: 'b', task: '$(x - 11)(x + 11)$', solution: 'Konjugatsetningen: $(x-11)(x+11) = x^2 - 121$', expressionAnswer: 'x^2-121' },
          { label: 'c', task: '$(2x - 5)^2$', solution: 'Andre kvadratsetning: $(2x-5)^2 = 4x^2 - 20x + 25$', expressionAnswer: '4x^2-20x+25' },
          { label: 'd', task: '$(3x + 4)(3x - 4)$', solution: 'Konjugatsetningen: $(3x+4)(3x-4) = 9x^2 - 16$', expressionAnswer: '9x^2-16' },
          { label: 'e', task: '$(x + 0{,}5)^2$', solution: 'Første kvadratsetning: $(x+0{,}5)^2 = x^2 + x + 0{,}25$', expressionAnswer: 'x^2+x+0.25' },
        ],
        solution: 'Gjenkjenn mønsteret: sum i andre = 1. kv.setn., differanse i andre = 2. kv.setn., sum ganger differanse = konjugat.',
        hints: ['Se på formen til uttrykket: Er det noe opphøyd i andre? Eller er det et produkt av to parenteser med ulike fortegn?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-8-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-8-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle uttrykkene ved å bruke kvadratsetningene:',
        subTasks: [
          { label: 'a', task: '$(x + 3)^2 - (x - 3)^2$', solution: '$(x+3)^2 - (x-3)^2 = (x^2 + 6x + 9) - (x^2 - 6x + 9) = x^2 + 6x + 9 - x^2 + 6x - 9 = 12x$', expressionAnswer: '12x' },
          { label: 'b', task: '$(x + 4)^2 - (x + 4)(x - 4)$', solution: '$(x+4)^2 - (x+4)(x-4) = (x^2 + 8x + 16) - (x^2 - 16) = x^2 + 8x + 16 - x^2 + 16 = 8x + 32$', expressionAnswer: '8x+32' },
        ],
        solution: 'Utvid hvert uttrykk for seg, og trekk fra ledd for ledd. Husk parentesen rundt det du trekker fra.',
        hints: ['Pass på fortegnene! Når du trekker fra en parentes, skifter alle ledd inni fortegn.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-8-2-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-8-2-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et kvadratisk hagebed har side $x$ meter. Eieren utvider bedet med $3$ meter i begge retninger (lengde og bredde). Bruk en kvadratsetning til å finne uttrykket for det nye arealet. Hvor mye økte arealet med?',
        solution: `Ny side: $x + 3$ meter. Nytt areal: $(x + 3)^2$.

Vi bruker første kvadratsetning:
$$(x + 3)^2 = x^2 + 6x + 9$$

Gammelt areal: $x^2$

Arealørkning: $(x^2 + 6x + 9) - x^2 = 6x + 9$

**Svar:** Det nye arealet er $x^2 + 6x + 9$ m$^2$, og arealet økte med $6x + 9$ m$^2$.

Geometrisk tolkning: Økningen $6x + 9$ tilsvarer to rektangler med areal $3x$ hver (langs sidene) og ett lite kvadrat med areal $9$ i hjørnet — nøyaktig de tre ekstra delene fra arealmodellen.`,
        hints: ['Det nye arealet er $(x + 3)^2$. Utvid dette med første kvadratsetning og trekk fra det gamle arealet $x^2$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Algebraisk divisjon og rasjonale uttrykk
// LK20: bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar
// ============================================================================

export const CHAPTER_10_8_3: TextbookChapter = {
  id: '10-8-3',
  courseId: '10',
  chapterNumber: '8.3',
  title: 'Algebraisk divisjon og rasjonale uttrykk',
  description: 'Lær å dividere polynomer med monomier, forkorte algebraiske brøker og utføre de fire regneartene med rasjonale uttrykk.',
  estimatedMinutes: 65,
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  keyTerms: [
    { term: 'Rasjonalt uttrykk', definition: 'En brøk der teller og/eller nevner inneholder polynomer, for eksempel $\\frac{x + 3}{x - 1}$.' },
    { term: 'Forkorting', definition: 'Å dele teller og nevner med en felles faktor slik at brøken blir enklere.' },
    { term: 'Fellesnevner', definition: 'En felles nevner for to eller flere brøker, som vi trenger for å addere eller subtrahere.' },
    { term: 'Polynomdivisjon', definition: 'Divisjon av et polynom med et monom, der vi deler hvert ledd i polynomets teller med nevneren.' },
    { term: 'Definisjonsmengde', definition: 'De verdiene av variabelen som gjør uttrykket gyldig — vi kan ikke dele på null.' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-8-3-intro',
      type: 'text',
      content: `## Algebraisk divisjon og rasjonale uttrykk

I de forrige kapitlene lærte du å multiplisere polynomer. Nå skal vi gjøre det motsatte: dele polynomer og arbeide med algebraiske brøker.

Algebraiske brøker (rasjonale uttrykk) dukker opp i mange sammenhenger — for eksempel i formler for fart, konsentrasjon og økonomi.

I dette kapittelet skal du lære:
- Å dividere et polynom med et monom
- Å forkorte algebraiske brøker
- Å addere og subtrahere algebraiske brøker
- Å multiplisere og dividere algebraiske brøker`,
    },

    // ========== BLOKK 1: Dividere polynom med monom ==========
    {
      id: '10-8-3-def-1',
      type: 'definition',
      title: 'Divisjon av polynom med monom',
      content: `Når vi deler et polynom med et monom, deler vi **hvert ledd i polynomet** med monomet.

$$\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$$

**Generelt:**

$$\\frac{a_1 + a_2 + \\ldots + a_n}{m} = \\frac{a_1}{m} + \\frac{a_2}{m} + \\ldots + \\frac{a_n}{m}$$

Vi bruker potensreglene til å forenkle hvert ledd.`,
    },
    {
      id: '10-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Dividere polynom med monom',
      problem: 'Forenkle $\\frac{6x^3 + 9x^2 - 3x}{3x}$.',
      solution: `Vi deler hvert ledd i telleren med $3x$:

$$\\frac{6x^3 + 9x^2 - 3x}{3x} = \\frac{6x^3}{3x} + \\frac{9x^2}{3x} - \\frac{3x}{3x}$$

$$= 2x^2 + 3x - 1$$

**Svar:** $\\frac{6x^3 + 9x^2 - 3x}{3x} = 2x^2 + 3x - 1 \\quad (x \\neq 0)$

Merk at vi må kreve $x \\neq 0$ siden vi ikke kan dele på null.`,
    },
    {
      id: '10-8-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-8-3-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forenkle uttrykkene:',
        subTasks: [
          { label: 'a', task: '$\\frac{8x^2 + 4x}{2x}$', solution: '$\\frac{8x^2}{2x} + \\frac{4x}{2x} = 4x + 2$', expressionAnswer: '4x+2' },
          { label: 'b', task: '$\\frac{12x^3 - 6x^2}{3x}$', solution: '$\\frac{12x^3}{3x} - \\frac{6x^2}{3x} = 4x^2 - 2x$', expressionAnswer: '4x^2-2x' },
          { label: 'c', task: '$\\frac{10x^4 + 15x^2 - 5x}{5x}$', solution: '$\\frac{10x^4}{5x} + \\frac{15x^2}{5x} - \\frac{5x}{5x} = 2x^3 + 3x - 1$', expressionAnswer: '2x^3+3x-1' },
          { label: 'd', task: '$\\frac{-9x^3 + 6x^2}{-3x^2}$', solution: '$\\frac{-9x^3}{-3x^2} + \\frac{6x^2}{-3x^2} = 3x - 2$', expressionAnswer: '3x-2' },
        ],
        solution: 'Del hvert ledd i telleren med nevneren. Bruk potensreglene: $\\frac{x^a}{x^b} = x^{a-b}$.',
        hints: ['Del koeffisientene (tallene) for seg, og bruk regelen $\\frac{x^n}{x^m} = x^{n-m}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 2: Forkorte algebraiske brøker ==========
    {
      id: '10-8-3-def-2',
      type: 'definition',
      title: 'Forkorting av algebraiske brøker',
      content: `For å forkorte en algebraisk brøk:

1. **Faktoriser** teller og nevner så mye som mulig.
2. **Stryk** felles faktorer i teller og nevner.

$$\\frac{a \\cdot c}{b \\cdot c} = \\frac{a}{b} \\quad \\text{(når } c \\neq 0\\text{)}$$

**Viktig:** Vi kan bare forkorte **faktorer**, ikke enkeltstående ledd!

$$\\frac{x + 3}{x} \\neq 3 \\quad \\text{FEIL! } x \\text{ er ikke en faktor i telleren.}$$`,
    },
    {
      id: '10-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Forkorte algebraisk brøk',
      problem: 'Forkort $\\frac{x^2 - 9}{x + 3}$.',
      solution: `Vi faktoriserer telleren. Gjenkjenner vi $x^2 - 9$? Det er $x^2 - 3^2$, altså en differanse av kvadrater (konjugatsetningen!):

$$x^2 - 9 = (x + 3)(x - 3)$$

Dermed:

$$\\frac{x^2 - 9}{x + 3} = \\frac{(x + 3)(x - 3)}{x + 3} = x - 3 \\quad (x \\neq -3)$$

**Svar:** $\\frac{x^2 - 9}{x + 3} = x - 3$, for $x \\neq -3$.`,
    },
    {
      id: '10-8-3-example-3',
      type: 'example',
      title: 'Eksempel: Forkorte med faktorisering',
      problem: 'Forkort $\\frac{2x^2 + 6x}{4x}$.',
      solution: `Vi faktoriserer telleren:

$$2x^2 + 6x = 2x(x + 3)$$

Dermed:

$$\\frac{2x^2 + 6x}{4x} = \\frac{2x(x + 3)}{4x} = \\frac{x + 3}{2} \\quad (x \\neq 0)$$

Vi forkortet med $2x$ (felles faktor i teller og nevner).

**Svar:** $\\frac{2x^2 + 6x}{4x} = \\frac{x + 3}{2}$`,
    },
    {
      id: '10-8-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-8-3-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forkort brøkene:',
        subTasks: [
          { label: 'a', task: '$\\frac{3x^2}{6x}$', solution: '$\\frac{3x^2}{6x} = \\frac{x}{2}$' },
          { label: 'b', task: '$\\frac{x^2 + 5x}{x}$', solution: '$\\frac{x^2 + 5x}{x} = \\frac{x(x + 5)}{x} = x + 5$' },
          { label: 'c', task: '$\\frac{x^2 - 4}{x - 2}$', solution: '$\\frac{x^2 - 4}{x - 2} = \\frac{(x+2)(x-2)}{x-2} = x + 2 \\quad (x \\neq 2)$' },
          { label: 'd', task: '$\\frac{x^2 - 25}{x + 5}$', solution: '$\\frac{x^2 - 25}{x + 5} = \\frac{(x+5)(x-5)}{x+5} = x - 5 \\quad (x \\neq -5)$' },
        ],
        solution: 'Faktoriser teller og nevner, og forkort felles faktorer.',
        hints: ['Kjenn igjen konjugatsetningen baklengs: $x^2 - a^2 = (x + a)(x - a)$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 3: Addisjon og subtraksjon av algebraiske brøker ==========
    {
      id: '10-8-3-def-3',
      type: 'definition',
      title: 'Addisjon og subtraksjon av algebraiske brøker',
      content: `For å addere eller subtrahere algebraiske brøker, trenger vi **fellesnevner** — akkurat som med vanlige brøker.

**Lik nevner:**
$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$

**Ulik nevner:** Finn fellesnevneren og utvid begge brøkene:

$$\\frac{a}{c} + \\frac{b}{d} = \\frac{a \\cdot d}{c \\cdot d} + \\frac{b \\cdot c}{c \\cdot d} = \\frac{ad + bc}{cd}$$

Etter addisjonen bør du alltid sjekke om svaret kan forkortes.`,
    },
    {
      id: '10-8-3-example-4',
      type: 'example',
      title: 'Eksempel: Addere algebraiske brøker',
      problem: 'Forenkle $\\frac{2}{x} + \\frac{3}{x + 1}$.',
      solution: `Nevnerne er $x$ og $x + 1$. Fellesnevneren er $x(x + 1)$.

Vi utvider hver brøk:

$$\\frac{2}{x} \\cdot \\frac{x + 1}{x + 1} + \\frac{3}{x + 1} \\cdot \\frac{x}{x} = \\frac{2(x + 1)}{x(x + 1)} + \\frac{3x}{x(x + 1)}$$

$$= \\frac{2(x + 1) + 3x}{x(x + 1)} = \\frac{2x + 2 + 3x}{x(x + 1)} = \\frac{5x + 2}{x(x + 1)}$$

**Svar:** $\\frac{2}{x} + \\frac{3}{x + 1} = \\frac{5x + 2}{x(x + 1)}$ der $x \\neq 0$ og $x \\neq -1$.`,
    },
    {
      id: '10-8-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-8-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle uttrykkene:',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{x} + \\frac{5}{x}$', solution: '$\\frac{3}{x} + \\frac{5}{x} = \\frac{3 + 5}{x} = \\frac{8}{x}$' },
          { label: 'b', task: '$\\frac{x + 1}{2x} + \\frac{x - 1}{2x}$', solution: '$\\frac{(x+1)+(x-1)}{2x} = \\frac{2x}{2x} = 1$' },
          { label: 'c', task: '$\\frac{1}{x} + \\frac{1}{x + 2}$', solution: 'Fellesnevner $x(x+2)$: $\\frac{x+2}{x(x+2)} + \\frac{x}{x(x+2)} = \\frac{2x + 2}{x(x + 2)}$' },
          { label: 'd', task: '$\\frac{3}{x - 1} - \\frac{2}{x + 1}$', solution: 'Fellesnevner $(x-1)(x+1)$: $\\frac{3(x+1) - 2(x-1)}{(x-1)(x+1)} = \\frac{3x + 3 - 2x + 2}{x^2 - 1} = \\frac{x + 5}{x^2 - 1}$' },
        ],
        solution: 'Finn fellesnevner og utvid brøkene. Forenkle telleren.',
        hints: ['Ved lik nevner: legg bare sammen tellerne. Ved ulik nevner: multipliser kryssvis.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 4: Multiplikasjon og divisjon av algebraiske brøker ==========
    {
      id: '10-8-3-def-4',
      type: 'definition',
      title: 'Multiplikasjon og divisjon av algebraiske brøker',
      content: `**Multiplikasjon:** Multipliser teller med teller og nevner med nevner:

$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$$

**Divisjon:** Snu den andre brøken og multipliser:

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}$$

**Tips:** Faktoriser og forkort *før* du multipliserer — det gjør regningen enklere.`,
    },
    {
      id: '10-8-3-example-5',
      type: 'example',
      title: 'Eksempel: Multiplisere algebraiske brøker',
      problem: 'Forenkle $\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x + 1}{x - 2}$.',
      solution: `Først faktoriserer vi $x^2 - 4 = (x + 2)(x - 2)$.

$$\\frac{(x + 2)(x - 2)}{x + 1} \\cdot \\frac{x + 1}{x - 2}$$

Vi forkorter $(x + 1)$ og $(x - 2)$:

$$= \\frac{(x + 2) \\cancel{(x - 2)}}{\\cancel{x + 1}} \\cdot \\frac{\\cancel{x + 1}}{\\cancel{x - 2}} = x + 2$$

**Svar:** $\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x + 1}{x - 2} = x + 2$ der $x \\neq -1$ og $x \\neq 2$.`,
    },
    {
      id: '10-8-3-example-6',
      type: 'example',
      title: 'Eksempel: Dividere algebraiske brøker',
      problem: 'Forenkle $\\frac{x}{x + 3} \\div \\frac{2x}{x^2 - 9}$.',
      solution: `Vi snur den andre brøken og multipliserer. Vi faktoriserer $x^2 - 9 = (x + 3)(x - 3)$.

$$\\frac{x}{x + 3} \\cdot \\frac{(x + 3)(x - 3)}{2x}$$

Vi forkorter $x$ og $(x + 3)$:

$$= \\frac{\\cancel{x}}{\\cancel{x + 3}} \\cdot \\frac{\\cancel{(x + 3)}(x - 3)}{2\\cancel{x}} = \\frac{x - 3}{2}$$

**Svar:** $\\frac{x}{x + 3} \\div \\frac{2x}{x^2 - 9} = \\frac{x - 3}{2}$ der $x \\neq 0$, $x \\neq -3$ og $x \\neq 3$.`,
    },
    {
      id: '10-8-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-8-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle:',
        subTasks: [
          { label: 'a', task: '$\\frac{3x}{4} \\cdot \\frac{8}{x^2}$', solution: '$\\frac{3x \\cdot 8}{4 \\cdot x^2} = \\frac{24x}{4x^2} = \\frac{6}{x}$' },
          { label: 'b', task: '$\\frac{x + 2}{x} \\cdot \\frac{x^2}{x^2 - 4}$', solution: '$\\frac{x + 2}{x} \\cdot \\frac{x^2}{(x+2)(x-2)} = \\frac{x}{x - 2}$' },
          { label: 'c', task: '$\\frac{x^2}{x + 5} \\div \\frac{x}{x^2 - 25}$', solution: '$\\frac{x^2}{x + 5} \\cdot \\frac{(x+5)(x-5)}{x} = x(x - 5) = x^2 - 5x$' },
        ],
        solution: 'Faktoriser, forkort felles faktorer, og multipliser det som gjenstår.',
        hints: ['Ved divisjon: snu den andre brøken og multipliser. Faktoriser alltid først!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-8-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `I dette kapittelet har vi lært å regne med algebraiske brøker (rasjonale uttrykk):

1. **Dividere polynom med monom:** Del hvert ledd for seg: $\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$
2. **Forkorte:** Faktoriser teller og nevner, og stryk felles faktorer
3. **Addere/subtrahere:** Finn fellesnevner, utvid brøkene, og legg sammen tellerne
4. **Multiplisere:** Multipliser teller med teller og nevner med nevner — forkort gjerne underveis
5. **Dividere:** Snu den andre brøken og multipliser

**Viktige påminnelser:**
- Vi kan bare forkorte **faktorer**, ikke ledd
- Vi kan aldri dele på null — sjekk alltid definisjonsmengden
- Bruk kvadratsetningene (spesielt konjugatsetningen $a^2 - b^2 = (a+b)(a-b)$) aktivt for å faktorisere`,
    },

    // --- Samleoppgaver ---
    {
      id: '10-8-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-8-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Per og Lisa regner på brøken $\\frac{x^2 + 3x}{x}$. Per sier svaret er $x + 3$, Lisa sier svaret er $x^2 + 3$. Hvem har rett? Begrunn svaret ditt.',
        solution: `Per har rett.\n\nVi faktoriserer telleren: $x^2 + 3x = x(x + 3)$.\n\n$$\\frac{x^2 + 3x}{x} = \\frac{x(x + 3)}{x} = x + 3$$\n\nLisa har gjort feilen å forkorte $x$ bare med det første leddet: $\\frac{x^2}{x} + 3x = x + 3x$. Men det er feil — man må forkorte med *hele* telleren, som betyr at begge ledd deles på $x$.`,
        hints: ['Faktoriser telleren. Husk at vi bare kan forkorte faktorer, ikke enkeltstående ledd.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-8-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-8-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle uttrykket $\\frac{x^2 - 1}{x^2 + 2x + 1}$.',
        solution: `Vi faktoriserer teller og nevner:\n\nTeller: $x^2 - 1 = (x + 1)(x - 1)$ (konjugatsetningen)\n\nNevner: $x^2 + 2x + 1 = (x + 1)^2$ (første kvadratsetning)\n\n$$\\frac{(x + 1)(x - 1)}{(x + 1)^2} = \\frac{(x + 1)(x - 1)}{(x + 1)(x + 1)} = \\frac{x - 1}{x + 1}$$\n\n**Svar:** $\\frac{x^2 - 1}{x^2 + 2x + 1} = \\frac{x - 1}{x + 1}$ der $x \\neq -1$.`,
        hints: ['Gjenkjenn $x^2 - 1$ som en differanse av kvadrater og $x^2 + 2x + 1$ som et fullstendig kvadrat.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-8-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-8-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle $\\frac{1}{x - 2} + \\frac{1}{x + 2} - \\frac{4}{x^2 - 4}$.',
        solution: `Vi faktoriserer $x^2 - 4 = (x - 2)(x + 2)$. Fellesnevneren er $(x - 2)(x + 2)$.

$$\\frac{x + 2}{(x-2)(x+2)} + \\frac{x - 2}{(x-2)(x+2)} - \\frac{4}{(x-2)(x+2)}$$

$$= \\frac{(x + 2) + (x - 2) - 4}{(x-2)(x+2)} = \\frac{2x - 4}{(x - 2)(x + 2)}$$

Vi faktoriserer telleren: $2x - 4 = 2(x - 2)$.

$$= \\frac{2(x - 2)}{(x - 2)(x + 2)} = \\frac{2}{x + 2}$$

**Svar:** $\\frac{2}{x + 2}$ der $x \\neq 2$ og $x \\neq -2$.`,
        hints: ['Nevneren $x^2 - 4$ kan faktoriseres. Da får alle tre brøkene samme nevner.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-8-3-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-8-3-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bil kjører strekningen $d$ km. Den kjører første halvpart med fart $v_1$ km/t og andre halvpart med fart $v_2$ km/t. Vis at gjennomsnittsfarten for hele turen er $\\frac{2v_1 v_2}{v_1 + v_2}$ km/t.',
        solution: `Strekningen for hver halvpart er $\\frac{d}{2}$ km.

Tid for første halvpart: $t_1 = \\frac{d/2}{v_1} = \\frac{d}{2v_1}$

Tid for andre halvpart: $t_2 = \\frac{d/2}{v_2} = \\frac{d}{2v_2}$

Total tid: $t = t_1 + t_2 = \\frac{d}{2v_1} + \\frac{d}{2v_2}$

Vi adderer brøkene med fellesnevner $2v_1 v_2$:

$$t = \\frac{d \\cdot v_2}{2v_1 v_2} + \\frac{d \\cdot v_1}{2v_1 v_2} = \\frac{d(v_1 + v_2)}{2v_1 v_2}$$

Gjennomsnittsfart $= \\frac{\\text{total strekning}}{\\text{total tid}} = \\frac{d}{\\frac{d(v_1 + v_2)}{2v_1 v_2}} = d \\cdot \\frac{2v_1 v_2}{d(v_1 + v_2)} = \\frac{2v_1 v_2}{v_1 + v_2}$ \\checkmark`,
        hints: [
          'Tid = strekning delt på fart.',
          'Gjennomsnittsfart = total strekning delt på total tid.',
          'Bruk fellesnevner for å legge sammen tidene.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_10_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_10_8_1,
  CHAPTER_10_8_2,
  CHAPTER_10_8_3,
];
