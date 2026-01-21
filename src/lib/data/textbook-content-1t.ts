/**
 * Tekstbok kapitler for 1t
 * Autogenerert fra textbook-content.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_1T_1_1: TextbookChapter = {
  id: '1t-1-1',
  courseId: '1t',
  chapterNumber: '1.1',
  title: 'Fortegn og regnerekkefølge',
  description: 'Lær om regning med negative tall, fortegnsregler og riktig regnerekkefølge.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utføre beregninger med negative tall',
    'bruke riktig regnerekkefølge',
  ],
  content: [
    // ========== ADDISJON OG SUBTRAKSJON ==========
    {
      id: '1t-1-1-intro',
      type: 'text',
      content: `## Addisjon og subtraksjon (pluss og minus)

Når vi regner med negative tall, må vi være nøye med fortegnene. Her er noen viktige regler:

- Minus foran en parentes med negativt tall gir pluss: $a - (-b) = a + b$
- Pluss foran en parentes med negativt tall gir minus: $a + (-b) = a - b$`,
    },

    // Bilde: Fortegnsregler
    {
      id: '1t-1-1-fortegnsregler-bilde',
      type: 'image',
      src: '/textbook/1t/kap1/fortegnsregler.png',
      alt: 'Fortegnsregler: a - (-b) = a + b og a + (-b) = a - b',
      caption: 'Husk disse reglene for regning med negative tall',
    },

    // Eksempel 1: Addisjon og subtraksjon
    {
      id: '1t-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Regn ut:

a) $5 + 2$
b) $9 - 4$
c) $-5 + 17$
d) $-10 + 3$
e) $5 - (-3)$
f) $-10 - 12$
g) $5 + (-9)$
h) $9 - 8 - 16$`,
      solution: `**Løsning:**

a) $5 + 2 = 7$

b) $9 - 4 = 5$

c) $-5 + 17 = 17 - 5 = 12$

d) $-10 + 3 = 3 - 10 = -7$

e) $5 - (-3) = 5 + 3 = 8$

f) $-10 - 12 = -22$

g) $5 + (-9) = 5 - 9 = -4$

h) $9 - 8 - 16 = 1 - 16 = -15$`,
      solutionVideo: 'vHyvQ6CYZ9Q',
    },

    // Oppgave 1-1
    {
      id: '1t-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-ex-1',
        number: '1-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$9 + 8$', solution: '$9 + 8 = 17$', answer: 17 },
          { label: 'b', task: '$12 - 8$', solution: '$12 - 8 = 4$', answer: 4 },
          { label: 'c', task: '$-5 + 10$', solution: '$-5 + 10 = 5$', answer: 5 },
          { label: 'd', task: '$(-3) + 20$', solution: '$(-3) + 20 = 17$', answer: 17 },
          { label: 'e', task: '$-10 - 11$', solution: '$-10 - 11 = -21$', answer: -21 },
          { label: 'f', task: '$-4 - (-2)$', solution: '$-4 - (-2) = -4 + 2 = -2$', answer: -2 },
        ],
        solution: 'a) 17, b) 4, c) 5, d) 17, e) −21, f) −2',
        hints: ['Husk at minus foran en parentes med negativt tall gir pluss'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 1-2
    {
      id: '1t-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-ex-2',
        number: '1-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$-20 - (-8)$', solution: '$-20 - (-8) = -20 + 8 = -12$', answer: -12 },
          { label: 'b', task: '$-4 + (-2)$', solution: '$-4 + (-2) = -4 - 2 = -6$', answer: -6 },
          { label: 'c', task: '$-3 - 5 - 3$', solution: '$-3 - 5 - 3 = -11$', answer: -11 },
          { label: 'd', task: '$-7 + (-8) - (-10)$', solution: '$-7 + (-8) - (-10) = -7 - 8 + 10 = -5$', answer: -5 },
          { label: 'e', task: '$-4 - 20 + 3$', solution: '$-4 - 20 + 3 = -21$', answer: -21 },
          { label: 'f', task: '$-30 - (-20) + (-10)$', solution: '$-30 - (-20) + (-10) = -30 + 20 - 10 = -20$', answer: -20 },
        ],
        solution: 'a) −12, b) −6, c) −11, d) −5, e) −21, f) −20',
        hints: ['Ta det steg for steg og pass på fortegnene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MULTIPLIKASJON OG DIVISJON ==========
    {
      id: '1t-1-1-mult-intro',
      type: 'text',
      content: `## Multiplikasjon og divisjon (ganging og deling)

Når vi ganger og deler negative tall kan vi telle antall negative fortegn for å finne ut fortegnet på svaret:

- **Oddetall** antall minuser → svaret er **negativt**
- **Partall** antall minuser → svaret er **positivt**`,
    },

    // Bilde: Multiplikasjon med fortegn
    {
      id: '1t-1-1-mult-fortegn-bilde',
      type: 'image',
      src: '/textbook/1t/kap1/multiplikasjon-fortegn.png',
      alt: 'Multiplikasjon med fortegn: 3 · (-4) = -12 og -3 · (-4) = 12',
      caption: 'Oddetall minuser gir negativt svar, partall minuser gir positivt svar',
    },

    // Eksempel 2: Multiplikasjon
    {
      id: '1t-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Regn ut:

a) $2 \\cdot (-4)$
b) $(-3) \\cdot (-4)$
c) $-5 \\cdot (-2) \\cdot (-3)$`,
      solution: `**Løsning:**

a) $2 \\cdot (-4) = -8$ (Ett negativt fortegn (oddetall) gir negativt)

b) $(-3) \\cdot (-4) = 12$ (To negative fortegn (partall) gir positivt)

c) $-5 \\cdot (-2) \\cdot (-3) = 10 \\cdot (-3) = -30$ (Tre negative fortegn (oddetall) gir negativt)`,
      solutionVideo: 'xVbz_Aj-Kxo',
    },

    // Oppgave 2
    {
      id: '1t-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-ex-3',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$-2 \\cdot (-3)$', solution: '$-2 \\cdot (-3) = 6$', answer: 6 },
          { label: 'b', task: '$-4 \\cdot 2 \\cdot 3$', solution: '$-4 \\cdot 2 \\cdot 3 = -24$', answer: -24 },
          { label: 'c', task: '$(-3) \\cdot (-4) \\cdot (-1)$', solution: '$(-3) \\cdot (-4) \\cdot (-1) = -12$', answer: -12 },
          { label: 'd', task: '$-7 \\cdot (-2) \\cdot (-1) \\cdot (-2)$', solution: '$-7 \\cdot (-2) \\cdot (-1) \\cdot (-2) = 28$', answer: 28 },
          { label: 'e', task: '$3 \\cdot (-1{,}5) \\cdot 2$', solution: '$3 \\cdot (-1{,}5) \\cdot 2 = -9$', answer: -9 },
          { label: 'f', task: '$-3 \\cdot (-1{,}5) \\cdot (-2)$', solution: '$-3 \\cdot (-1{,}5) \\cdot (-2) = -9$', answer: -9 },
        ],
        solution: 'a) 6, b) −24, c) −12, d) 28, e) −9, f) −9',
        hints: ['Tell antall negative fortegn for å finne fortegnet på svaret'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 3: Divisjon
    {
      id: '1t-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Regn ut:

a) $20 \\div 2$

b) $(-30) \\div (-3)$

c) $\\frac{-15}{5}$

d) $\\frac{80}{-16}$`,
      solution: `**Løsning:**

a) $20 \\div 2 = 10$

b) $(-30) \\div (-3) = 10$

c) $\\frac{-15}{5} = \\frac{-1 \\cdot 5 \\cdot 3}{5 \\cdot 1} = -3$

d) $\\frac{80}{-16} = \\frac{8 \\cdot 10}{-1 \\cdot 2 \\cdot 8} = \\frac{10}{-2} = -5$`,
      solutionVideo: 'TO6m5GOZedE',
    },

    // Oppgave 3
    {
      id: '1t-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-ex-4',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$30 \\div 3$', solution: '$30 \\div 3 = 10$', answer: 10 },
          { label: 'b', task: '$-20 \\div 5$', solution: '$-20 \\div 5 = -4$', answer: -4 },
          { label: 'c', task: '$\\frac{-100}{5}$', solution: '$\\frac{-100}{5} = -20$', answer: -20 },
          { label: 'd', task: '$\\frac{100}{-5}$', solution: '$\\frac{100}{-5} = -20$', answer: -20 },
          { label: 'e', task: '$\\frac{-30}{-10}$', solution: '$\\frac{-30}{-10} = 3$', answer: 3 },
          { label: 'f', task: '$-\\frac{-15}{-5}$', solution: '$-\\frac{-15}{-5} = -\\frac{15}{5} = -3$', answer: -3 },
        ],
        solution: 'a) 10, b) −4, c) −20, d) −20, e) 3, f) −3',
        hints: ['Husk fortegnsreglene for divisjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== POTENSER OG NEGATIVE FORTEGN ==========
    {
      id: '1t-1-1-potens-intro',
      type: 'text',
      content: `## Potenser og negative fortegn

Det er viktig å skille mellom $(-2)^3$ og $-2^3$:

$(-2)^3 = (-2) \\cdot (-2) \\cdot (-2)$ → Her har vi 3 negative fortegn, så svaret blir negativt: $-8$

$-2^3 = -2 \\cdot 2 \\cdot 2$ → Her har vi kun ett negativt fortegn. Svaret blir fremdeles negativt: $-8$

Men for partallseksponenter er det forskjell:

$(-2)^4 = (-2) \\cdot (-2) \\cdot (-2) \\cdot (-2) = 16$ (positivt)

$-2^4 = -(2 \\cdot 2 \\cdot 2 \\cdot 2) = -16$ (negativt)`,
    },

    // Eksempel 4: Potenser
    {
      id: '1t-1-1-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Regn ut:

a) $(-2)^4$ (Her har vi 4 negative fortegn ganget, så svaret blir positivt)
b) $(-3) \\cdot (-2)^2$ (Her har vi 3 negative fortegn ganget, svaret blir negativt)`,
      solution: `**Løsning:**

a) $(-2)^4 = (-2) \\cdot (-2) \\cdot (-2) \\cdot (-2) = 16$

b) $(-3) \\cdot (-2)^2 = -3 \\cdot (-2) \\cdot (-2) = -3 \\cdot 4 = -12$`,
      solutionVideo: 'J_L1U-hzmJk',
    },

    // Oppgave 4
    {
      id: '1t-1-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-ex-5',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$(-5)^2$', solution: '$(-5)^2 = 25$', answer: 25 },
          { label: 'b', task: '$-4 \\cdot 3^2$', solution: '$-4 \\cdot 3^2 = -4 \\cdot 9 = -36$', answer: -36 },
          { label: 'c', task: '$(-3)^3$', solution: '$(-3)^3 = -27$', answer: -27 },
          { label: 'd', task: '$-7 \\cdot (-2)^2$', solution: '$-7 \\cdot (-2)^2 = -7 \\cdot 4 = -28$', answer: -28 },
          { label: 'e', task: '$(-5)^2 \\cdot (-2)^2$', solution: '$(-5)^2 \\cdot (-2)^2 = 25 \\cdot 4 = 100$', answer: 100 },
          { label: 'f', task: '$(-2)^3 \\cdot (-5)^2$', solution: '$(-2)^3 \\cdot (-5)^2 = -8 \\cdot 25 = -200$', answer: -200 },
        ],
        solution: 'a) 25, b) −36, c) −27, d) −28, e) 100, f) −200',
        hints: ['Tell antall negative fortegn som ganges sammen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KVADRATRØTTER ==========
    {
      id: '1t-1-1-rot-intro',
      type: 'text',
      content: `## Kvadratrøtter

Kvadratroten av et tall $a$ er det positive tallet som ganget med seg selv gir $a$.

**Viktig:** Vi kan ikke ta kvadratroten av negative tall (i de reelle tallene).`,
    },

    // Eksempel 5: Kvadratrøtter
    {
      id: '1t-1-1-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: `Regn ut:

a) $\\sqrt{9}$
b) $-\\sqrt{100}$
c) $\\sqrt{-64}$`,
      solution: `**Løsning:**

a) $\\sqrt{9} = \\sqrt{3 \\cdot 3} = \\sqrt{3^2} = 3$

b) $-\\sqrt{100} = -\\sqrt{10^2} = -10$

c) $\\sqrt{-64}$ → Ingen løsning (Vi kan ikke ta kvadratroten av negative tall)`,
      solutionVideo: '4JiJTSIM0n8',
    },

    // Oppgave 5
    {
      id: '1t-1-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-ex-6',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\sqrt{4}$', solution: '$\\sqrt{4} = 2$', answer: 2 },
          { label: 'b', task: '$\\sqrt{36}$', solution: '$\\sqrt{36} = 6$', answer: 6 },
          { label: 'c', task: '$\\sqrt{-25}$', solution: 'Ingen løsning (kan ikke ta kvadratrot av negative tall)' },
          { label: 'd', task: '$-\\sqrt{64}$', solution: '$-\\sqrt{64} = -8$', answer: -8 },
          { label: 'e', task: '$\\sqrt{\\sqrt{81}}$', solution: '$\\sqrt{\\sqrt{81}} = \\sqrt{9} = 3$', answer: 3 },
          { label: 'f', task: '$\\sqrt{\\sqrt{25} - \\sqrt{16}}$', solution: '$\\sqrt{\\sqrt{25} - \\sqrt{16}} = \\sqrt{5 - 4} = \\sqrt{1} = 1$', answer: 1 },
        ],
        solution: 'a) 2, b) 6, c) Ingen løsning, d) −8, e) 3, f) 1',
        hints: ['Husk at vi ikke kan ta kvadratroten av negative tall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== REGNEREKKEFØLGE ==========
    {
      id: '1t-1-1-rekkefolge-intro',
      type: 'text',
      content: `## Regnerekkefølge

Når vi har flere regneoperasjoner i samme uttrykk, må vi følge regnerekkefølgen:

1. **Parenteser** – Regn ut det som står i parenteser først
2. **Potenser og røtter**
3. **Multiplikasjon og divisjon** – Fra venstre mot høyre
4. **Addisjon og subtraksjon** – Fra venstre mot høyre

**Huskeregel:** "**P**lease **E**xcuse **M**y **D**ear **A**unt **S**ally" (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction)`,
    },

    // Eksempel 6: Regnerekkefølge
    {
      id: '1t-1-1-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: `Regn ut:

a) $10 - 3 \\cdot 3$
b) $20 - (3\\sqrt{4} \\div 2)$
c) $2^3 - (7 - 3)^2$`,
      solution: `**Løsning:**

a) $10 - 3 \\cdot 3 = 10 - 9 = 1$

b) $20 - (3\\sqrt{4} \\div 2) = 20 - (3 \\cdot 2 \\div 2) = 20 - (6 \\div 2) = 20 - 3 = 17$

c) $2^3 - (7 - 3)^2 = 8 - 4^2 = 8 - 16 = -8$`,
      solutionVideo: '4JiJTSIM0n8',
    },

    // Oppgave 6-1
    {
      id: '1t-1-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-ex-7',
        number: '6-1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$10 - 2 \\cdot 4$', solution: '$10 - 2 \\cdot 4 = 10 - 8 = 2$', answer: 2 },
          { label: 'b', task: '$-4 \\cdot 3 + 2$', solution: '$-4 \\cdot 3 + 2 = -12 + 2 = -10$', answer: -10 },
          { label: 'c', task: '$(-3) \\cdot \\sqrt{25} + (-10)$', solution: '$(-3) \\cdot \\sqrt{25} + (-10) = -3 \\cdot 5 - 10 = -15 - 10 = -25$', answer: -25 },
          { label: 'd', task: '$-28 \\div (-2) + (-2)^4$', solution: '$-28 \\div (-2) + (-2)^4 = 14 + 16 = 30$', answer: 30 },
          { label: 'e', task: '$(3 + \\sqrt{9} \\cdot 2)^2 - 2$', solution: '$(3 + \\sqrt{9} \\cdot 2)^2 - 2 = (3 + 3 \\cdot 2)^2 - 2 = (3 + 6)^2 - 2 = 9^2 - 2 = 81 - 2 = 79$', answer: 79 },
          { label: 'f', task: '$3^{\\sqrt{4+1}} - 2 \\cdot 5$', solution: '$3^{\\sqrt{4+1}} - 2 \\cdot 5 = 3^{\\sqrt{5}} - 10 \\approx 6{,}6 - 10 \\approx -3{,}4$' },
        ],
        solution: 'a) 2, b) −10, c) −25, d) 30, e) 79, f) ≈ −3,4',
        hints: ['Husk å følge regnerekkefølgen: parenteser, potenser/røtter, ganging/deling, pluss/minus'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6-2
    {
      id: '1t-1-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-1-1-ex-8',
        number: '6-2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$(3 - 2 \\cdot 4) \\cdot 2 - 3$', solution: '$(3 - 2 \\cdot 4) \\cdot 2 - 3 = (3 - 8) \\cdot 2 - 3 = -5 \\cdot 2 - 3 = -10 - 3 = -13$', answer: -13 },
          { label: 'b', task: '$-2 \\cdot (3 - 5)^2 + 2$', solution: '$-2 \\cdot (3 - 5)^2 + 2 = -2 \\cdot (-2)^2 + 2 = -2 \\cdot 4 + 2 = -8 + 2 = -6$', answer: -6 },
          { label: 'c', task: '$(-1) \\cdot (\\sqrt{16} - 2^3)$', solution: '$(-1) \\cdot (\\sqrt{16} - 2^3) = (-1) \\cdot (4 - 8) = (-1) \\cdot (-4) = 4$', answer: 4 },
          { label: 'd', task: '$-40 \\div (-2^3) + 3^3$', solution: '$-40 \\div (-2^3) + 3^3 = -40 \\div (-8) + 27 = 5 + 27 = 32$', answer: 32 },
          { label: 'e', task: '$(2\\sqrt{49} - 7)^2 + 1$', solution: '$(2\\sqrt{49} - 7)^2 + 1 = (2 \\cdot 7 - 7)^2 + 1 = (14 - 7)^2 + 1 = 7^2 + 1 = 49 + 1 = 50$', answer: 50 },
          { label: 'f', task: '$(5^2 - 5) \\cdot 5$', solution: '$(5^2 - 5) \\cdot 5 = (25 - 5) \\cdot 5 = 20 \\cdot 5 = 100$', answer: 100 },
        ],
        solution: 'a) −13, b) −6, c) 4, d) 32, e) 50, f) 100',
        hints: ['Start med den innerste parentesen og jobb deg utover'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TILLEGGSOPPGAVER ==========
    {
      id: '1t-1-1-tillegg',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        // Tilleggsoppgave 1
        {
          id: '1t-1-1-tillegg-1',
          type: 'exercise',
          exercise: {
            id: '1t-1-1-tillegg-ex-1',
            number: 'T1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$4 + 9$', answer: 13 },
              { label: 'b', task: '$19 - 3$', answer: 16 },
              { label: 'c', task: '$-8 + 17$', answer: 9 },
              { label: 'd', task: '$(-5) + 13$', answer: 8 },
              { label: 'e', task: '$-21 - 31$', answer: -52 },
              { label: 'f', task: '$-9 - (-10)$', answer: 1 },
            ],
            solution: 'a) 13, b) 16, c) 9, d) 8, e) −52, f) 1',
            hideInlineSolution: true,
            hints: ['Pass på fortegnene'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Tilleggsoppgave 2
        {
          id: '1t-1-1-tillegg-2',
          type: 'exercise',
          exercise: {
            id: '1t-1-1-tillegg-ex-2',
            number: 'T2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$-2 - (-18)$', answer: 16 },
              { label: 'b', task: '$-19 + (-5)$', answer: -24 },
              { label: 'c', task: '$-30 - 15 - 13$', answer: -58 },
              { label: 'd', task: '$20 + (-7) - (-30)$', answer: 43 },
              { label: 'e', task: '$-8 - 32 + 4$', answer: -36 },
              { label: 'f', task: '$-15 - (-2) + (-5)$', answer: -18 },
            ],
            solution: 'a) 16, b) −24, c) −58, d) 43, e) −36, f) −18',
            hideInlineSolution: true,
            hints: ['Ta det steg for steg'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Tilleggsoppgave 3
        {
          id: '1t-1-1-tillegg-3',
          type: 'exercise',
          exercise: {
            id: '1t-1-1-tillegg-ex-3',
            number: 'T3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$-20 \\cdot (-4)$', answer: 80 },
              { label: 'b', task: '$-2 \\cdot 7 \\cdot (-2)$', answer: 28 },
              { label: 'c', task: '$(-10) \\cdot (-2) \\cdot 4$', answer: 80 },
              { label: 'd', task: '$-2 \\cdot (-4) \\cdot (-2) \\cdot (-2)$', answer: 32 },
              { label: 'e', task: '$5 \\cdot (-3{,}5) \\cdot 2$', answer: -35 },
              { label: 'f', task: '$4 \\cdot (-1{,}5) \\cdot (-4)$', answer: 24 },
            ],
            solution: 'a) 80, b) 28, c) 80, d) 32, e) −35, f) 24',
            hideInlineSolution: true,
            hints: ['Tell antall negative fortegn'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Tilleggsoppgave 4
        {
          id: '1t-1-1-tillegg-4',
          type: 'exercise',
          exercise: {
            id: '1t-1-1-tillegg-ex-4',
            number: 'T4',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$40 \\div 8$', answer: 5 },
              { label: 'b', task: '$-30 \\div 3$', answer: -10 },
              { label: 'c', task: '$\\frac{-160}{6}$' },
              { label: 'd', task: '$\\frac{10}{-2}$', answer: -5 },
              { label: 'e', task: '$\\frac{-40}{-8}$', answer: 5 },
              { label: 'f', task: '$-\\frac{45}{-3}$', answer: -15 },
            ],
            solution: 'a) 5, b) −10, c) −26,67, d) −5, e) 5, f) −15',
            hideInlineSolution: true,
            hints: ['Pass på fortegnene ved divisjon'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Tilleggsoppgave 5
        {
          id: '1t-1-1-tillegg-5',
          type: 'exercise',
          exercise: {
            id: '1t-1-1-tillegg-ex-5',
            number: 'T5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$(-9)^2$', answer: 81 },
              { label: 'b', task: '$-2 \\cdot 6^2$', answer: -72 },
              { label: 'c', task: '$(-2)^3$', answer: -8 },
              { label: 'd', task: '$-2 \\cdot (-3)^2$', answer: -18 },
              { label: 'e', task: '$(-1)^2 \\cdot (-1)^4$', answer: 1 },
              { label: 'f', task: '$(-1)^3 \\cdot (-1)^6$', answer: -1 },
            ],
            solution: 'a) 81, b) −72, c) −8, d) −18, e) 1, f) −1',
            hideInlineSolution: true,
            hints: ['Husk forskjellen mellom $(-2)^2$ og $-2^2$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Tilleggsoppgave 6
        {
          id: '1t-1-1-tillegg-6',
          type: 'exercise',
          exercise: {
            id: '1t-1-1-tillegg-ex-6',
            number: 'T6',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut hvis mulig',
            subTasks: [
              { label: 'a', task: '$\\sqrt{49}$', answer: 7 },
              { label: 'b', task: '$\\sqrt{81}$', answer: 9 },
              { label: 'c', task: '$\\sqrt{-64}$' },
              { label: 'd', task: '$-\\sqrt{4}$', answer: -2 },
              { label: 'e', task: '$\\sqrt{\\sqrt{4^2}}$', answer: 2 },
              { label: 'f', task: '$\\sqrt{\\sqrt{100} - \\sqrt{1}}$', answer: 3 },
            ],
            solution: 'a) 7, b) 9, c) Ingen løsning, d) −2, e) 2, f) 3',
            hideInlineSolution: true,
            hints: ['Vi kan ikke ta kvadratroten av negative tall'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Tilleggsoppgave 7
        {
          id: '1t-1-1-tillegg-7',
          type: 'exercise',
          exercise: {
            id: '1t-1-1-tillegg-ex-7',
            number: 'T7',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$100 - 3 \\cdot 40$', answer: -20 },
              { label: 'b', task: '$-10 \\cdot (3 + (-2))$', answer: -10 },
              { label: 'c', task: '$(-2) \\cdot \\sqrt{16} - (-20)$', answer: 12 },
              { label: 'd', task: '$-15 \\div (-3) + (-2)^3$', answer: -3 },
              { label: 'e', task: '$2(1 + \\sqrt{9} \\cdot 3)^2 - 12$', answer: 188 },
              { label: 'f', task: '$3^{\\sqrt{1+2}} - 2 \\cdot (-2)$', answer: 31 },
            ],
            solution: 'a) −20, b) −10, c) 12, d) −3, e) 188, f) 31',
            hideInlineSolution: true,
            hints: ['Følg regnerekkefølgen nøye'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Tilleggsoppgave 8
        {
          id: '1t-1-1-tillegg-8',
          type: 'exercise',
          exercise: {
            id: '1t-1-1-tillegg-ex-8',
            number: 'T8',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$(5 - 2 \\cdot (-2)) \\cdot 2 - 10$', answer: 8 },
              { label: 'b', task: '$(1 - 4)^2 \\cdot (-2) + 4^2$', answer: -2 },
              { label: 'c', task: '$(-23) \\cdot (\\sqrt{81} - 2^3)$', answer: -23 },
              { label: 'd', task: '$-4 \\div (-1) + 2^{\\sqrt{16}}$', answer: 20 },
              { label: 'e', task: '$(2\\sqrt{25} - 9)^2 + 1$', answer: 2 },
              { label: 'f', task: '$\\sqrt{(2^2 - 10) \\cdot (-6)}$', answer: 6 },
            ],
            solution: 'a) 8, b) −2, c) −23, d) 20, e) 2, f) 6',
            hideInlineSolution: true,
            hints: ['Start med den innerste operasjonen'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_1_2: TextbookChapter = {
  id: '1t-1-2',
  courseId: '1t',
  chapterNumber: '1.2',
  title: 'Potenser',
  description: 'Lær om potenser, potensregler og regneregler for heltallseksponenter.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og beskrive egenskaper ved potenser'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '1t-1-2-intro',
      type: 'text',
      content: `Noen ganger ønsker vi å beskrive at et tall ganges med seg selv flere ganger på en enklere måte. Istedenfor å skrive $2 \\cdot 2 \\cdot 2 \\cdot 2$ så kan vi skrive $2^4$ og istedenfor $a \\cdot a \\cdot a = a^3$.`,
    },
    {
      id: '1t-1-2-def-1',
      type: 'definition',
      title: 'Potens',
      content: `Når vi skriver $x^n$, betyr det at vi ganger $x$ med seg selv $n$ ganger:

$$x^n = x \\cdot x \\cdot x \\cdot \\ldots \\cdot x \\quad (n \\text{ faktorer})$$

Vi kaller $x$ for **grunntallet** og $n$ for **eksponenten**.

For eksempel: $2^3 = 2 \\cdot 2 \\cdot 2 = 8$ (grunntall 2, eksponent 3) og $a^5 = a \\cdot a \\cdot a \\cdot a \\cdot a$.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Regn ut:\n\na) $2^4$\nb) $4 \\cdot 3^2$',
      solution: `**Løsning:**

a) $2^4 = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16$

b) $4 \\cdot 3^2 = 4 \\cdot 3 \\cdot 3 = 4 \\cdot 9 = 36$`,
      solutionVideo: 'v0cGNIaTOM0',
    },

    // ========== OPPGAVE 1 (etter Eksempel 1) ==========
    {
      id: '1t-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$2^3$', solution: '$2^3 = 8$', answer: 8 },
          { label: 'b', task: '$9^2$', solution: '$9^2 = 81$', answer: 81 },
          { label: 'c', task: '$2^2 \\cdot 5^2$', solution: '$2^2 \\cdot 5^2 = 4 \\cdot 25 = 100$', answer: 100 },
          { label: 'd', task: '$3^3 \\cdot 2$', solution: '$3^3 \\cdot 2 = 27 \\cdot 2 = 54$', answer: 54 },
          { label: 'e', task: '$7^2 \\cdot 2^2$', solution: '$7^2 \\cdot 2^2 = 49 \\cdot 4 = 196$', answer: 196 },
          { label: 'f', task: '$1^3 \\cdot 2^3 \\cdot 3^2$', solution: '$1^3 \\cdot 2^3 \\cdot 3^2 = 1 \\cdot 8 \\cdot 9 = 72$', answer: 72 },
        ],
        hints: ['Husk at $a^n = a \\cdot a \\cdot \\ldots \\cdot a$ ($n$ ganger)'],
        solution: 'a) 8, b) 81, c) 100, d) 54, e) 196, f) 72',
        solutionVideo: 'ay0y60pJvmQ',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== POTENSREGEL 1: MULTIPLIKASJON ==========
    {
      id: '1t-1-2-text-regel1',
      type: 'text',
      content: `Vi skal her lære oss å regne med potenser. Vi kan observere at:
$$x^2 \\cdot x^3 = (x \\cdot x) \\cdot (x \\cdot x \\cdot x) = x^5$$

Generelt kan vi utlede regelen:
$$x^a \\cdot x^b = x^{a+b}$$`,
    },
    {
      id: '1t-1-2-theorem-1',
      type: 'theorem',
      title: 'Potensregel: Multiplikasjon',
      content: `$$x^a \\cdot x^b = x^{a+b}$$`,
    },

    // Illustrasjon: Potensregler
    {
      id: '1t-1-2-potensregler-bilde',
      type: 'image',
      src: '/images/algebra/potensregler.svg',
      alt: 'Oversikt over potensreglene: multiplikasjon, divisjon, potens av potens',
      caption: 'De viktigste potensreglene samlet',
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Regn ut og skriv svaret som potens:\n\na) $3^4 \\cdot 3^5$\nb) $2a \\cdot 2a^4$\nc) $a^3 \\cdot b^2 \\cdot a^5 \\cdot b^3$',
      solution: `**Løsning:**

a) $3^4 \\cdot 3^5 = 3^{4+5} = 3^9$

b) $2a \\cdot 2a^4 = \\color{blue}{2 \\cdot 2 \\cdot a^1 \\cdot a^4} = 2^2 a^{1+4} = 2^2 a^5$

c) $a^3 \\cdot b^2 \\cdot a^5 \\cdot b^3 = a^3 \\cdot a^5 \\cdot b^2 \\cdot b^3 = a^{3+5} \\cdot b^{2+3} = a^8 b^5$`,
      solutionVideo: '9uP8A9JMOoM',
    },
    {
      id: '1t-1-2-tip-1',
      type: 'tip',
      content: `**Husk: Usynlig gangetegn**

$ab = a \\cdot b$

$3a = 3 \\cdot a$`,
    },

    // ========== OPPGAVE 2 (etter Eksempel 2) ==========
    {
      id: '1t-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut og skriv svaret som potens',
        subTasks: [
          { label: 'a', task: '$x^2 \\cdot x^3$', solution: '$x^2 \\cdot x^3 = x^{2+3} = x^5$', expressionAnswer: 'x^5' },
          { label: 'b', task: '$2^5 \\cdot 2^{10}$', solution: '$2^5 \\cdot 2^{10} = 2^{5+10} = 2^{15}$', expressionAnswer: '2^15' },
          { label: 'c', task: '$a^3 \\cdot a^5 \\cdot b^2$', solution: '$a^3 \\cdot a^5 \\cdot b^2 = a^{3+5} \\cdot b^2 = a^8 b^2$', expressionAnswer: 'a^8*b^2' },
          { label: 'd', task: '$x^3 y^2 \\cdot x^2 \\cdot y^6$', solution: '$x^3 y^2 \\cdot x^2 \\cdot y^6 = x^{3+2} y^{2+6} = x^5 y^8$', expressionAnswer: 'x^5*y^8' },
          { label: 'e', task: '$3x^2 \\cdot 4x$', solution: '$3x^2 \\cdot 4x = 12x^{2+1} = 12x^3$', expressionAnswer: '12x^3' },
          { label: 'f', task: '$9x^3 y^3 \\cdot x^2$', solution: '$9x^3 y^3 \\cdot x^2 = 9x^{3+2} y^3 = 9x^5 y^3$', expressionAnswer: '9x^5*y^3' },
        ],
        hints: ['Bruk regelen $x^a \\cdot x^b = x^{a+b}$'],
        solution: 'a) $x^5$, b) $2^{15}$, c) $a^8 b^2$, d) $x^5 y^8$, e) $12x^3$, f) $9x^5 y^3$',
        solutionVideo: 'iTqORB5daLU',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== POTENSREGEL 2: DIVISJON ==========
    {
      id: '1t-1-2-text-regel2',
      type: 'text',
      content: `Når vi arbeider med potenser i brøker så er det viktig å huske på at vi kan gange og dele med samme tall over og under brøkstreken. Det er også viktig å huske at vi derfor kan stryke like faktorer over og under brøkstreken imot hverandre.

Vi har for eksempel at:
$$\\frac{4^5}{4^2} = \\frac{4 \\cdot 4 \\cdot 4 \\cdot \\color{red}{4 \\cdot 4}}{\\color{red}{4 \\cdot 4}} = 4^{5-2} = 4^3$$`,
    },
    {
      id: '1t-1-2-theorem-2',
      type: 'theorem',
      title: 'Potensregel: Divisjon',
      content: `$$\\frac{x^a}{x^b} = x^{a-b}$$`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Regn ut og skriv svaret som en potens:\n\na) $\\frac{9^5}{9^2}$\n\nb) $\\frac{x^4 y^3}{x^2 y^2}$',
      solution: `**Løsning:**

a) **Alternativ 1:**
$$\\frac{9^5}{9^2} = 9^{5-2} = 9^3$$

**Alternativ 2:** (Vi faktoriserer og stryker likt imot likt)
$$\\frac{9^5}{9^2} = \\frac{9^3 \\cdot \\color{red}{9^2}}{\\color{red}{9^2}} = 9^3$$

b) **Alternativ 1:**
$$\\frac{x^4 y^3}{x^2 y^2} = \\color{blue}{\\frac{x^4}{x^2} \\cdot \\frac{y^3}{y^2}} = x^{4-2} \\cdot y^{3-2} = x^2 y$$

**Alternativ 2:** (Vi faktoriserer og stryker likt imot likt)
$$\\frac{x^4 y^3}{x^2 y^2} = \\frac{\\color{red}{x^2} \\cdot x^2 \\cdot \\color{red}{y^2} \\cdot y}{\\color{red}{x^2} \\cdot \\color{red}{y^2}} = x^2 y$$`,
      solutionVideo: 'qorkJ6UpJwI',
    },

    // ========== OPPGAVE 3 (etter Eksempel 3) ==========
    {
      id: '1t-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og skriv svaret som potens',
        subTasks: [
          { label: 'a', task: '$\\frac{7^4}{7^3}$', solution: '$\\frac{7^4}{7^3} = 7^{4-3} = 7$', expressionAnswer: '7' },
          { label: 'b', task: '$\\frac{a^7}{a^2}$', solution: '$\\frac{a^7}{a^2} = a^{7-2} = a^5$', expressionAnswer: 'a^5' },
          { label: 'c', task: '$\\frac{a^3 b^4}{ab^2}$', solution: '$\\frac{a^3 b^4}{ab^2} = a^{3-1} b^{4-2} = a^2 b^2$', expressionAnswer: 'a^2*b^2' },
          { label: 'd', task: '$\\frac{2^4 \\cdot 5^7}{2^3 \\cdot 5^4}$', solution: '$\\frac{2^4 \\cdot 5^7}{2^3 \\cdot 5^4} = 2^{4-3} \\cdot 5^{7-4} = 2 \\cdot 5^3$', expressionAnswer: '2*5^3' },
          { label: 'e', task: '$\\frac{x^4 y^2 \\cdot 2^4 \\cdot x^2}{2^2 x^3}$', solution: '$\\frac{x^4 y^2 \\cdot 2^4 \\cdot x^2}{2^2 x^3} = 2^{4-2} x^{4+2-3} y^2 = 4x^3 y^2$', expressionAnswer: '4x^3*y^2' },
          { label: 'f', task: '$\\frac{5^4 \\cdot 2^3 x^3}{2^2 x^2}$', solution: '$\\frac{5^4 \\cdot 2^3 x^3}{2^2 x^2} = 5^4 \\cdot 2^{3-2} \\cdot x^{3-2} = 2 \\cdot 5^4 x$', expressionAnswer: '2*5^4*x' },
        ],
        hints: ['Bruk regelen $\\frac{x^a}{x^b} = x^{a-b}$'],
        solution: 'a) $7$, b) $a^5$, c) $a^2 b^2$, d) $2 \\cdot 5^3$, e) $4x^3 y^2$, f) $2 \\cdot 5^4 x$',
        solutionVideo: 'eFrVTLemYTU',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NEGATIVE EKSPONENTER ==========
    {
      id: '1t-1-2-def-neg',
      type: 'definition',
      title: 'Negative eksponenter',
      content: `$$x^{-1} = \\frac{1}{x}$$

$$x^{-n} = \\frac{1}{x^n}$$`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-1-2-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Skriv uten negativ eksponent og regn ut:\n\na) $2a^{-1}$\nb) $3^{-1}x^{-2}$\nc) $3y \\cdot 2^{-3} \\cdot x^{-3}$',
      solution: `**Løsning:**

a) $2a^{-1} = 2 \\cdot \\frac{1}{a} = \\color{blue}{\\frac{2}{1} \\cdot \\frac{1}{a}} = \\frac{2}{a}$

b) $3^{-1}x^{-2} = \\frac{1}{3} \\cdot \\frac{1}{x^2} = \\frac{1}{3x^2}$

c) $3y \\cdot 2^{-3} \\cdot x^{-3} = 3y \\cdot \\frac{1}{2^3} \\cdot \\frac{1}{x^3} = \\color{blue}{\\frac{3y}{1} \\cdot \\frac{1}{2^3 x^3}} = \\frac{3y}{8x^3}$`,
      solutionVideo: 'Xy-Hhp0_TLw',
    },

    // ========== OPPGAVE 4 (etter Eksempel 4) ==========
    {
      id: '1t-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om uttrykket slik at det ikke lenger har en negativ eksponent og regn ut.',
        subTasks: [
          { label: 'a', task: '$3x^{-1}$', solution: '$3x^{-1} = \\frac{3}{x}$', expressionAnswer: '3/x' },
          { label: 'b', task: '$4a^{-2}$', solution: '$4a^{-2} = \\frac{4}{a^2}$', expressionAnswer: '4/a^2' },
          { label: 'c', task: '$2^{-2} x^{-3}$', solution: '$2^{-2} x^{-3} = \\frac{1}{4x^3}$', expressionAnswer: '1/(4x^3)' },
          { label: 'd', task: '$a^3 a^{-5}$', solution: '$a^3 a^{-5} = a^{3-5} = a^{-2} = \\frac{1}{a^2}$', expressionAnswer: '1/a^2' },
          { label: 'e', task: '$8x^{-3} \\cdot 2^{-2} x^5$', solution: '$8x^{-3} \\cdot 2^{-2} x^5 = 8 \\cdot \\frac{1}{4} \\cdot x^{-3+5} = 2x^2$', expressionAnswer: '2x^2' },
          { label: 'f', task: '$3x^3 \\cdot x^{-5} \\cdot \\frac{2}{x^4}$', solution: '$3x^3 \\cdot x^{-5} \\cdot \\frac{2}{x^4} = \\frac{6}{x^6}$', expressionAnswer: '6/x^6' },
        ],
        hints: ['$x^{-n} = \\frac{1}{x^n}$', '$a^m \\cdot a^n = a^{m+n}$'],
        solution: 'a) $\\frac{3}{x}$, b) $\\frac{4}{a^2}$, c) $\\frac{1}{4x^3}$, d) $\\frac{1}{a^2}$, e) $2x^2$, f) $\\frac{6}{x^6}$',
        solutionVideo: 'QM5R0dKdsLs',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NEGATIVE EKSPONENTER I BRØKER ==========
    {
      id: '1t-1-2-text-negbrok',
      type: 'text',
      content: `Når vi har en negativ eksponent i en brøk så kan faktoren som er opphøyd i noe negativt flyttes under brøkstreken og bli opphøyd i det samme tallet med positivt fortegn.`,
    },
    {
      id: '1t-1-2-theorem-negbrok',
      type: 'theorem',
      title: 'Negative eksponenter i brøker',
      content: `$$\\frac{a^{-n}}{b^{-m}} = \\frac{b^m}{a^n}$$`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '1t-1-2-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Flytt på potensuttrykkene slik at vi får positiv eksponent og regn ut:\n\na) $\\frac{2^{-5}}{3^{-2}}$\n\nb) $\\frac{2x^{-2}y^3}{x^2 y^{-1}}$',
      solution: `**Løsning:**

a) $\\frac{\\color{red}{2^{-5}}}{\\color{red}{3^{-2}}} = \\frac{\\color{red}{3^2}}{\\color{red}{2^5}} = \\frac{9}{32}$

b) $\\frac{2\\color{red}{x^{-2}}y^3}{x^2 \\color{red}{y^{-1}}} = \\frac{2\\color{red}{y^1} \\cdot y^3}{x^2 \\cdot \\color{red}{x^2}} = \\frac{2y^4}{x^4}$`,
      solutionVideo: 'Zro8xfuqDQ4',
    },

    // ========== OPPGAVE 5 (etter Eksempel 5) ==========
    {
      id: '1t-1-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og skriv svaret som potens',
        subTasks: [
          { label: 'a', task: '$\\frac{2^{-2}}{3^{-1}}$', solution: '$\\frac{2^{-2}}{3^{-1}} = \\frac{3}{4}$', expressionAnswer: '3/4' },
          { label: 'b', task: '$\\frac{a^{-3}}{2^{-3}}$', solution: '$\\frac{a^{-3}}{2^{-3}} = \\frac{8}{a^3}$', expressionAnswer: '8/a^3' },
          { label: 'c', task: '$\\frac{7x^{-5}}{x^2}$', solution: '$\\frac{7x^{-5}}{x^2} = \\frac{7}{x^7}$', expressionAnswer: '7/x^7' },
          { label: 'd', task: '$\\frac{2x^{-1} y^2}{x^4 y^{-4}}$', solution: '$\\frac{2x^{-1} y^2}{x^4 y^{-4}} = \\frac{2y^6}{x^5}$', expressionAnswer: '2y^6/x^5' },
          { label: 'e', task: '$\\frac{2^{-2} y^6}{3^{-2} y^{-4}}$', solution: '$\\frac{2^{-2} y^6}{3^{-2} y^{-4}} = \\frac{9y^{10}}{4}$', expressionAnswer: '9y^10/4' },
          { label: 'f', task: '$\\frac{4x^{-3}}{2x^{-4}}$', solution: '$\\frac{4x^{-3}}{2x^{-4}} = 2x$', expressionAnswer: '2x' },
        ],
        hints: ['$\\frac{a^{-n}}{b^{-m}} = \\frac{b^m}{a^n}$'],
        solution: 'a) $\\frac{3}{4}$, b) $\\frac{8}{a^3}$, c) $\\frac{7}{x^7}$, d) $\\frac{2y^6}{x^5}$, e) $\\frac{9y^{10}}{4}$, f) $2x$',
        solutionVideo: 'uakAMiw_5zw',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FLER POTENSREGLER ==========
    {
      id: '1t-1-2-theorem-produkt',
      type: 'theorem',
      title: 'Potens av produkt',
      content: `$$(a \\cdot b)^n = a^n \\cdot b^n$$`,
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: '1t-1-2-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: 'Regn ut:\n\na) $(xy)^4$\nb) $(2x)^5$',
      solution: `**Løsning:**

a) $(xy)^4 = (x \\cdot y)^4 = x^4 \\cdot y^4 = x^4 y^4$

b) $(2x)^5 = (2 \\cdot x)^5 = 2^5 \\cdot x^5 = 32 \\cdot x^5 = 32x^5$`,
      solutionVideo: 'Z3OrTkgdCR0',
    },

    // ========== OPPGAVE 6 (etter Eksempel 6) ==========
    {
      id: '1t-1-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$(3x)^2$', solution: '$(3x)^2 = 9x^2$', expressionAnswer: '9x^2' },
          { label: 'b', task: '$(ab)^2$', solution: '$(ab)^2 = a^2 b^2$', expressionAnswer: 'a^2*b^2' },
          { label: 'c', task: '$3a^4 \\cdot (2a)^3$', solution: '$3a^4 \\cdot (2a)^3 = 3a^4 \\cdot 8a^3 = 24a^7$', expressionAnswer: '24a^7' },
        ],
        hints: ['$(a \\cdot b)^n = a^n \\cdot b^n$'],
        solution: 'a) $9x^2$, b) $a^2 b^2$, c) $24a^7$',
        solutionVideo: 'BIB5cqG2RTM',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== POTENS AV BRØK ==========
    {
      id: '1t-1-2-theorem-brok',
      type: 'theorem',
      title: 'Potens av brøk',
      content: `$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$`,
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: '1t-1-2-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: 'Regn ut:\n\na) $\\left(\\frac{x}{y}\\right)^4$\n\nb) $\\left(\\frac{2}{3x}\\right)^2$',
      solution: `**Løsning:**

a) $\\left(\\frac{x}{y}\\right)^4 = \\frac{x^4}{y^4}$

b) $\\left(\\frac{2}{3x}\\right)^2 = \\frac{2^2}{(3x)^2} = \\frac{4}{3^2 x^2} = \\frac{4}{9x^2}$`,
      solutionVideo: 'Kc1oGcdzt98',
    },

    // ========== OPPGAVE 7 (etter Eksempel 7) ==========
    {
      id: '1t-1-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og skriv svaret som potens',
        subTasks: [
          { label: 'a', task: '$\\left(\\frac{a}{b}\\right)^8$', solution: '$\\left(\\frac{a}{b}\\right)^8 = \\frac{a^8}{b^8}$', expressionAnswer: 'a^8/b^8' },
          { label: 'b', task: '$\\left(\\frac{2a}{3}\\right)^2$', solution: '$\\left(\\frac{2a}{3}\\right)^2 = \\frac{4a^2}{9}$', expressionAnswer: '4a^2/9' },
          { label: 'c', task: '$\\left(\\frac{x}{5y}\\right)^2$', solution: '$\\left(\\frac{x}{5y}\\right)^2 = \\frac{x^2}{25y^2}$', expressionAnswer: 'x^2/(25y^2)' },
          { label: 'd', task: '$\\left(\\frac{x}{y}\\right)^4 \\cdot \\left(\\frac{2x}{y^2}\\right)$', solution: '$\\left(\\frac{x}{y}\\right)^4 \\cdot \\left(\\frac{2x}{y^2}\\right) = \\frac{2x^5}{y^6}$', expressionAnswer: '2x^5/y^6' },
          { label: 'e', task: '$\\left(\\frac{a}{3}\\right)^4 \\cdot 3^3 a$', solution: '$\\left(\\frac{a}{3}\\right)^4 \\cdot 3^3 a = \\frac{a^5}{3}$', expressionAnswer: 'a^5/3' },
          { label: 'f', task: '$\\left(\\frac{a}{2b}\\right)^2 \\cdot 3a^{-2} b^{-2}$', solution: '$\\left(\\frac{a}{2b}\\right)^2 \\cdot 3a^{-2} b^{-2} = \\frac{3}{4b^4}$', expressionAnswer: '3/(4b^4)' },
        ],
        hints: ['$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$'],
        solution: 'a) $\\frac{a^8}{b^8}$, b) $\\frac{4a^2}{9}$, c) $\\frac{x^2}{25y^2}$, d) $\\frac{2x^5}{y^6}$, e) $\\frac{a^5}{3}$, f) $\\frac{3}{4b^4}$',
        solutionVideo: 'WlybJzdW09s',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== POTENS AV POTENS ==========
    {
      id: '1t-1-2-theorem-potenspotens',
      type: 'theorem',
      title: 'Potens av potens',
      content: `$$(x^a)^b = x^{a \\cdot b}$$`,
    },

    // ========== EKSEMPEL 8 ==========
    {
      id: '1t-1-2-example-8',
      type: 'example',
      title: 'Eksempel 8',
      problem: 'Regn ut:\n\na) $(x^4)^3$\nb) $(2a^3)^4$\nc) $\\left(\\frac{y^2}{x}\\right)^3$',
      solution: `**Løsning:**

a) $(x^4)^3 = x^{4 \\cdot 3} = x^{12}$

b) $(2a^3)^4 = 2^4 \\cdot (a^3)^4 = 16a^{3 \\cdot 4} = 16a^{12}$

c) $\\left(\\frac{y^2}{x}\\right)^3 = \\frac{(y^2)^3}{x^3} = \\frac{y^{2 \\cdot 3}}{x^3} = \\frac{y^6}{x^3}$`,
      solutionVideo: 'sYylholvW14',
    },

    // ========== OPPGAVE 8 (etter Eksempel 8) ==========
    {
      id: '1t-1-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$(x^2)^3$', solution: '$(x^2)^3 = x^6$', expressionAnswer: 'x^6' },
          { label: 'b', task: '$(5a^2)^2$', solution: '$(5a^2)^2 = 25a^4$', expressionAnswer: '25a^4' },
          { label: 'c', task: '$\\left(\\frac{a^4}{3}\\right)^3$', solution: '$\\left(\\frac{a^4}{3}\\right)^3 = \\frac{a^{12}}{27}$', expressionAnswer: 'a^12/27' },
          { label: 'd', task: '$(ab^2)^3$', solution: '$(ab^2)^3 = a^3 b^6$', expressionAnswer: 'a^3*b^6' },
          { label: 'e', task: '$\\left(\\frac{2x^3}{y^2}\\right)^3$', solution: '$\\left(\\frac{2x^3}{y^2}\\right)^3 = \\frac{8x^9}{y^6}$', expressionAnswer: '8x^9/y^6' },
          { label: 'f', task: '$x^3 \\cdot \\left(\\frac{x^2}{y^2}\\right)^3$', solution: '$x^3 \\cdot \\left(\\frac{x^2}{y^2}\\right)^3 = \\frac{x^9}{y^6}$', expressionAnswer: 'x^9/y^6' },
          { label: 'g', task: '$\\left(\\frac{a^{-3}}{b^{-2}}\\right)^4$', solution: '$\\left(\\frac{a^{-3}}{b^{-2}}\\right)^4 = \\frac{b^8}{a^{12}}$', expressionAnswer: 'b^8/a^12' },
          { label: 'h', task: '$\\left(\\frac{2^{-1}a}{a^{-2}b^2}\\right)^2 \\cdot (a^2)^{-3}$', solution: '$\\left(\\frac{2^{-1}a}{a^{-2}b^2}\\right)^2 \\cdot (a^2)^{-3} = \\frac{1}{4b^4}$', expressionAnswer: '1/(4b^4)' },
          { label: 'i', task: '$y^3 \\left(\\frac{4^{-2}x}{x^{-2}y^2 \\cdot 2^{-3}}\\right)^3$', solution: '$y^3 \\left(\\frac{4^{-2}x}{x^{-2}y^2 \\cdot 2^{-3}}\\right)^3 = \\frac{x^9}{8y^3}$', expressionAnswer: 'x^9/(8y^3)' },
        ],
        hints: ['$(x^a)^b = x^{a \\cdot b}$', 'Kombiner flere regler'],
        solution: 'a) $x^6$, b) $25a^4$, c) $\\frac{a^{12}}{27}$, d) $a^3 b^6$, e) $\\frac{8x^9}{y^6}$, f) $\\frac{x^9}{y^6}$, g) $\\frac{b^8}{a^{12}}$, h) $\\frac{1}{4b^4}$, i) $\\frac{x^9}{8y^3}$',
        solutionVideo: 'tFwhmNDq3sw',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true,
      },
    },

    // ========== EKSPONENT 0 ==========
    {
      id: '1t-1-2-def-null',
      type: 'definition',
      title: 'Når vi har 0 som eksponent',
      content: `$$a^0 = 1, \\text{ gitt at } a \\neq 0$$

det vil si at alle tall (med unntak av 0) opphøyd i 0 vil bli 1.`,
    },
    {
      id: '1t-1-2-warning-0-0',
      type: 'warning',
      title: 'Hva med $0^0$?',
      content: `Uttrykket $0^0$ er **udefinert** i matematikken. Dette skyldes at vi får motstridende resultater avhengig av hvordan vi nærmer oss uttrykket. Derfor er det viktig å huske at regelen $a^0 = 1$ kun gjelder når $a \\neq 0$.`,
    },

    // ========== EKSEMPEL 9 ==========
    {
      id: '1t-1-2-example-9',
      type: 'example',
      title: 'Eksempel 9',
      problem: 'Regn ut:\n\na) $3^0$\nb) $(-9000)^0$\nc) $2x^0$ der $x \\neq 0$',
      solution: `**Løsning:**

a) $3^0 = 1$

b) $(-9000)^0 = 1$

c) $2x^0 = 2 \\cdot x^0 = 2 \\cdot 1 = 2$`,
      solutionVideo: 'ISv5BsDdmm8',
    },

    // ========== OPPGAVE 9 (etter Eksempel 9) ==========
    {
      id: '1t-1-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$9^0$', solution: '$9^0 = 1$', answer: 1 },
          { label: 'b', task: '$\\frac{x^5}{x^5}$', solution: '$\\frac{x^5}{x^5} = x^0 = 1$', answer: 1 },
          { label: 'c', task: '$3a^0$ der $a \\neq 0$', solution: '$3a^0 = 3 \\cdot 1 = 3$', answer: 3 },
          { label: 'd', task: '$(-3x)^0$', solution: '$(-3x)^0 = 1$', answer: 1 },
          { label: 'e', task: '$x^{-3} \\cdot x^2 \\cdot 2x$', solution: '$x^{-3} \\cdot x^2 \\cdot 2x = 2x^0 = 2$', answer: 2 },
          { label: 'f', task: '$\\frac{x^2}{x^{-2}} \\cdot y^2 x^{-4}$', solution: '$\\frac{x^2}{x^{-2}} \\cdot y^2 x^{-4} = x^4 \\cdot y^2 \\cdot x^{-4} = y^2$', expressionAnswer: 'y^2' },
        ],
        hints: ['$a^0 = 1$ for alle $a \\neq 0$'],
        solution: 'a) $1$, b) $1$, c) $3$, d) $1$, e) $2$, f) $y^2$',
        solutionVideo: 'rvOuzQ1kATw',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 10 ==========
    {
      id: '1t-1-2-example-10',
      type: 'example',
      title: 'Eksempel 10',
      problem: 'Regn ut:\n\na) $\\frac{3^5}{9^2}$\n\nb) $\\frac{16 \\cdot 36^2}{12^4}$',
      solution: `**Løsning:**

a) $\\frac{3^5}{9^2} = \\frac{3^5}{\\color{blue}{(3^2)^2}} = \\frac{3 \\cdot \\color{red}{3^4}}{\\color{red}{3^4}} = 3$

b) $\\frac{16 \\cdot 36^2}{12^4} = \\frac{\\color{blue}{2^4 \\cdot (6^2)^2}}{\\color{blue}{(2 \\cdot 6)^4}} = \\frac{\\color{red}{2^4 \\cdot 6^4} \\cdot 1}{\\color{red}{2^4 \\cdot 6^4} \\cdot 1} = 1$`,
      solutionVideo: '82d1kPqR3s0',
    },

    // ========== OPPGAVE 10 (etter Eksempel 10) ==========
    {
      id: '1t-1-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$\\frac{2^5}{8^2}$', solution: '$\\frac{2^5}{8^2} = \\frac{2^5}{(2^3)^2} = \\frac{2^5}{2^6} = 2^{-1} = \\frac{1}{2}$', answer: 0.5 },
          { label: 'b', task: '$\\frac{5^5}{25^3}$', solution: '$\\frac{5^5}{25^3} = \\frac{5^5}{(5^2)^3} = \\frac{5^5}{5^6} = \\frac{1}{5}$', answer: 0.2 },
          { label: 'c', task: '$\\frac{(3x)^2}{3 \\cdot 27x}$', solution: '$\\frac{(3x)^2}{3 \\cdot 27x} = \\frac{9x^2}{81x} = \\frac{x}{9}$', expressionAnswer: 'x/9' },
          { label: 'd', task: '$\\frac{49 \\cdot 16}{14^2}$', solution: '$\\frac{49 \\cdot 16}{14^2} = \\frac{7^2 \\cdot 4^2}{(7 \\cdot 2)^2} = \\frac{7^2 \\cdot 4^2}{7^2 \\cdot 4} = 4$', answer: 4 },
          { label: 'e', task: '$\\frac{14^2 \\cdot 6^2}{2^3 \\cdot 42}$', solution: '$\\frac{14^2 \\cdot 6^2}{2^3 \\cdot 42} = 21$', answer: 21 },
          { label: 'f', task: '$\\frac{9^2 \\cdot (2y)^3}{36^2 y^{-2}}$', solution: '$\\frac{9^2 \\cdot (2y)^3}{36^2 y^{-2}} = \\frac{y^5}{2}$', expressionAnswer: 'y^5/2' },
        ],
        hints: ['Skriv alle tall som potenser av primtall', '$8 = 2^3$, $25 = 5^2$, $27 = 3^3$, etc.'],
        solution: 'a) $\\frac{1}{2}$, b) $\\frac{1}{5}$, c) $\\frac{x}{9}$, d) $4$, e) $21$, f) $\\frac{y^5}{2}$',
        solutionVideo: '9MfGyQpv6NI',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '1t-1-2-summary',
      type: 'theorem',
      title: 'Oppsummering: Alle potensregler',
      content: `| Regel | Formel |
|-------|--------|
| Definisjon | $x^n = x \\cdot x \\cdot \\ldots \\cdot x$ ($n$ faktorer) |
| Multiplikasjon | $x^a \\cdot x^b = x^{a+b}$ |
| Divisjon | $\\frac{x^a}{x^b} = x^{a-b}$ |
| Negativ eksponent | $x^{-n} = \\frac{1}{x^n}$ |
| Potens av produkt | $(a \\cdot b)^n = a^n \\cdot b^n$ |
| Potens av brøk | $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$ |
| Potens av potens | $(x^a)^b = x^{a \\cdot b}$ |
| Null som eksponent | $a^0 = 1$ (for $a \\neq 0$) |`,
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '1t-1-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        // Repetisjonsoppgave 1
        {
          id: '1t-1-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$4^2$', answer: 16 },
              { label: 'b', task: '$2^6$', answer: 64 },
              { label: 'c', task: '$6^2 \\cdot 2$', answer: 72 },
              { label: 'd', task: '$2^3 \\cdot 10$', answer: 80 },
              { label: 'e', task: '$9^2 \\cdot 0$', answer: 0 },
              { label: 'f', task: '$2^2 \\cdot 5^2 \\cdot 3^2$', answer: 900 },
            ],
            solution: 'a) 16, b) 64, c) 72, d) 80, e) 0, f) 900',
            hideInlineSolution: true,
            hints: ['Husk at $a^n$ betyr at vi ganger $a$ med seg selv $n$ ganger.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 2
        {
          id: '1t-1-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut og skriv svaret som potens',
            subTasks: [
              { label: 'a', task: '$x^4 \\cdot x^7$', expressionAnswer: 'x^11' },
              { label: 'b', task: '$9^5 \\cdot 9^{20}$', expressionAnswer: '9^25' },
              { label: 'c', task: '$x^2 \\cdot x^2 \\cdot x^{10}$', expressionAnswer: 'x^14' },
              { label: 'd', task: '$x^4 y \\cdot x^3 y^9$', expressionAnswer: 'x^7y^10' },
              { label: 'e', task: '$10x^5 y \\cdot 6x^2 y$', expressionAnswer: '60x^7y^2' },
              { label: 'f', task: '$2x^5 y^2 \\cdot 10x^2$', expressionAnswer: '20x^7y^2' },
            ],
            solution: 'a) $x^{11}$, b) $9^{25}$, c) $x^{14}$, d) $x^7 y^{10}$, e) $60x^7 y^2$, f) $20x^7 y^2$',
            hideInlineSolution: true,
            hints: ['Bruk regelen $a^m \\cdot a^n = a^{m+n}$ for å multiplisere potenser med samme grunntall.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 3
        {
          id: '1t-1-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut og skriv svaret som potens',
            subTasks: [
              { label: 'a', task: '$\\frac{5^8}{5^3}$', expressionAnswer: '5^5' },
              { label: 'b', task: '$\\frac{x^6}{x^2}$', expressionAnswer: 'x^4' },
              { label: 'c', task: '$\\frac{x^5 y^2}{x^3 y}$', expressionAnswer: 'x^2y' },
              { label: 'd', task: '$\\frac{2^3 \\cdot 7^5}{2^3 \\cdot 7^2}$', expressionAnswer: ['7^3', '343'] },
              { label: 'e', task: '$\\frac{x^2 \\cdot 4^3 y^2}{2^2 xy}$', expressionAnswer: '16xy' },
              { label: 'f', task: '$\\frac{9^4 \\cdot 6^3 a^4}{6^2 \\cdot 9^2 a}$', expressionAnswer: '486a^3' },
            ],
            solution: 'a) $5^5$, b) $x^4$, c) $x^2 y$, d) $7^3$, e) $4^2 xy$, f) $9^2 \\cdot 6a^3$',
            hideInlineSolution: true,
            hints: ['Bruk regelen $\\frac{a^m}{a^n} = a^{m-n}$ for å dividere potenser med samme grunntall.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 4
        {
          id: '1t-1-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Skriv uten negativ eksponent og regn ut',
            subTasks: [
              { label: 'a', task: '$5a^{-1}$', expressionAnswer: '5/a' },
              { label: 'b', task: '$10b^{-2}$', expressionAnswer: '10/b^2' },
              { label: 'c', task: '$3^{-2} x^{-2}$', expressionAnswer: '1/(9x^2)' },
              { label: 'd', task: '$2a^6 a^{-9}$', expressionAnswer: '2/a^3' },
              { label: 'e', task: '$9^2 a^{-4} \\cdot 3^{-2} a^7$', expressionAnswer: '9a^3' },
              { label: 'f', task: '$\\frac{3}{x^2} x^2 \\cdot x^{-3} \\cdot \\frac{5}{x^3}$', expressionAnswer: '15/x^6' },
            ],
            solution: 'a) $\\frac{5}{a}$, b) $\\frac{10}{b^2}$, c) $\\frac{1}{9x^2}$, d) $\\frac{2}{a^3}$, e) $9a^3$, f) $\\frac{15}{x^6}$',
            hideInlineSolution: true,
            hints: ['Husk at $a^{-n} = \\frac{1}{a^n}$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 5
        {
          id: '1t-1-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$\\frac{3^{-2}}{4^{-1}}$', expressionAnswer: '4/9' },
              { label: 'b', task: '$\\frac{x^{-2}}{3^{-2}}$', expressionAnswer: '9/x^2' },
              { label: 'c', task: '$\\frac{12x^{-4}}{x^3}$', expressionAnswer: '12/x^7' },
              { label: 'd', task: '$\\frac{3x^{-4} y^{12}}{x^2 y^{-2}}$', expressionAnswer: '3y^14/x^6' },
              { label: 'e', task: '$\\frac{3^{-1} y^6 \\cdot 5^{-3}}{5^{-2} y^{-4}}$', expressionAnswer: 'y^10/15' },
              { label: 'f', task: '$\\frac{14x^{-3}}{7x^{10}}$', expressionAnswer: '2/x^13' },
            ],
            solution: 'a) $\\frac{4}{9}$, b) $\\frac{9}{x^2}$, c) $\\frac{12}{x^7}$, d) $\\frac{3y^{14}}{x^6}$, e) $\\frac{y^{10}}{15}$, f) $\\frac{2}{x^{13}}$',
            hideInlineSolution: true,
            hints: ['Ved brøk med negativ eksponent i nevner: $\\frac{1}{a^{-n}} = a^n$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 6
        {
          id: '1t-1-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$(2a)^3$', expressionAnswer: '8a^3' },
              { label: 'b', task: '$(xy)^2 \\cdot (xy)^3$', expressionAnswer: 'x^5y^5' },
              { label: 'c', task: '$2b^3 \\cdot (2b)^4$', expressionAnswer: '32b^7' },
            ],
            solution: 'a) $8a^3$, b) $x^5 y^5$, c) $32b^7$',
            hideInlineSolution: true,
            hints: ['Husk at $(ab)^n = a^n \\cdot b^n$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 7
        {
          id: '1t-1-2-rep-7',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-7',
            number: 'R7',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$\\left(\\frac{y}{x}\\right)^4$', expressionAnswer: 'y^4/x^4' },
              { label: 'b', task: '$\\left(\\frac{5a}{b}\\right)^2$', expressionAnswer: '25a^2/b^2' },
              { label: 'c', task: '$\\left(\\frac{4}{2a}\\right)^2$', expressionAnswer: '4/a^2' },
              { label: 'd', task: '$\\left(\\frac{3x}{2y}\\right)^3 \\cdot \\left(\\frac{x}{2y^3}\\right)$', expressionAnswer: '27x^4/(16y^6)' },
              { label: 'e', task: '$\\left(\\frac{a}{2}\\right)^3 \\cdot 2^5 a$', expressionAnswer: '4a^4' },
              { label: 'f', task: '$5x \\left(\\frac{x}{2x}\\right)^2 \\cdot 4y^{-2} x$', expressionAnswer: '5x^2/y^2' },
            ],
            solution: 'a) $\\frac{y^4}{x^4}$, b) $\\frac{25a^2}{b^2}$, c) $\\frac{4}{a^2}$, d) $\\frac{27x^4}{16y^6}$, e) $4a^4$, f) $\\frac{5x^2}{y^2}$',
            hideInlineSolution: true,
            hints: ['Husk at $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 8
        {
          id: '1t-1-2-rep-8',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-8',
            number: 'R8',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Regn ut og skriv svaret som potens',
            subTasks: [
              { label: 'a', task: '$(a^4)^3$', expressionAnswer: 'a^12' },
              { label: 'b', task: '$(2x)^3$', expressionAnswer: '8x^3' },
              { label: 'c', task: '$\\left(\\frac{a}{4}\\right)^2$', expressionAnswer: 'a^2/16' },
              { label: 'd', task: '$(x^2 y^3)^2$', expressionAnswer: 'x^4y^6' },
              { label: 'e', task: '$\\left(\\frac{a^3}{2y}\\right)^2$', expressionAnswer: 'a^6/(4y^2)' },
              { label: 'f', task: '$\\left(\\frac{2}{x}\\right)^2 \\cdot \\left(\\frac{x^2}{y^{-1}}\\right)^3$', expressionAnswer: '4x^4y^3' },
              { label: 'g', task: '$\\left(\\frac{a^3}{a^{-2} \\cdot a^4}\\right)^4$', expressionAnswer: 'a^4' },
              { label: 'h', task: '$\\left(\\frac{a^{-2}}{3a^2 b^{-1}}\\right)^2 \\cdot \\frac{1}{b}$', expressionAnswer: 'b/(9a^8)' },
              { label: 'i', task: '$\\left(\\frac{y^2}{3} \\cdot \\frac{y}{x}\\right)^2$', expressionAnswer: 'y^6/(9x^2)' },
            ],
            solution: 'a) $a^{12}$, b) $8x^3$, c) $\\frac{a^2}{16}$, d) $x^4 y^6$, e) $\\frac{a^6}{4y^2}$, f) $4x^4 y^3$, g) $a^4$, h) $\\frac{b}{9a^8}$, i) $\\frac{y^6}{9x^2}$',
            hideInlineSolution: true,
            hints: ['Bruk regelen $(a^m)^n = a^{m \\cdot n}$ for potens av potens.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 9
        {
          id: '1t-1-2-rep-9',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-9',
            number: 'R9',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$92^0$', answer: 1 },
              { label: 'b', task: '$\\frac{5^5}{5^5}$', answer: 1 },
              { label: 'c', task: '$3^0 a$ der $a \\neq 0$', expressionAnswer: 'a' },
            ],
            solution: 'a) 1, b) 1, c) $a$',
            hideInlineSolution: true,
            hints: ['Husk at $a^0 = 1$ for alle $a \\neq 0$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 10
        {
          id: '1t-1-2-rep-10',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-10',
            number: 'R10',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$\\frac{2^3}{4}$', answer: 2 },
              { label: 'b', task: '$\\frac{3 \\cdot 4^3}{12^2}$', expressionAnswer: '4/3' },
              { label: 'c', task: '$\\frac{(2a)^3}{8 \\cdot a}$', expressionAnswer: 'a^2' },
              { label: 'd', task: '$\\frac{6^2 \\cdot 9}{18}$', answer: 18 },
              { label: 'e', task: '$\\frac{10^2 \\cdot 5^2}{25 \\cdot 4}$', answer: 25 },
              { label: 'f', task: '$\\frac{3 \\cdot 4^3 (y^2 x)^2}{12^2 x^2 y^{-2}}$', expressionAnswer: '4y^6/3' },
            ],
            solution: 'a) 2, b) $\\frac{4}{3}$, c) $a^2$, d) 18, e) 25, f) $\\frac{4y^6}{3}$',
            hideInlineSolution: true,
            hints: ['Prøv å skrive om tallene slik at de har samme grunntall før du forenkler.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  // exercises-arrayet er nå tomt siden alle oppgaver er i content-arrayet
  exercises: [],
};

export const CHAPTER_1T_1_5: TextbookChapter = {
  id: '1t-1-5',
  courseId: '1t',
  chapterNumber: '1.5',
  title: 'Faktorisering og kvadratsetningene',
  description: 'Lær om faktorisering av tall og uttrykk, kvadratsetningene, abc-formelen og nullpunktsfaktorisering.',
  estimatedMinutes: 90,
  competenceGoals: [
    'faktorisere algebraiske uttrykk',
    'bruke kvadratsetningene til å utvide og faktorisere uttrykk',
    'løse andregradslikninger med abc-formelen',
  ],
  content: [
    // ========== FAKTORISERING ==========
    {
      id: '1t-1-5-intro',
      type: 'text',
      content: `# Faktorisering

## Enkel faktorisering

Når vi faktoriserer et tall skriver vi det som et produkt av to eller flere andre tall. Tallet **8** kan vi for eksempel faktorisere til $4 \\cdot 2$ eller alternativt kan vi skrive det som $2 \\cdot 2 \\cdot 2$.

Faktorisering er spesielt nyttig når vi arbeider med brøker fordi det kan hjelpe oss å stryke likt imot likt over og under brøkstreken.`,
    },
    {
      id: '1t-1-5-section-primtall',
      type: 'text',
      content: `## Primtallsfaktorisering

Primtall er tall som kun er delelige på seg selv og tallet 1. Tallet 1 er ikke inkludert.

Når vi primtallsfaktoriserer skriver vi tallene vi faktoriserer som et produkt av **kun** primtall. Eksempelvis så er en primtallsfaktorisering av $12 = 2 \\cdot 2 \\cdot 3$ forskjellig fra en faktorisering som $12 = 4 \\cdot 3$ eller $12 = 2 \\cdot 6$ ettersom 4 ikke er et primtall.

**Primtall:** 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 …`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-1-5-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Primtallsfaktoriser:\n\na) 6\nb) 27\nc) 74\nd) 520',
      solution: `**Løsning:**

a) $6 = 2 \\cdot 3$

b) $27 = 9 \\cdot 3 = 3 \\cdot 3 \\cdot 3$

c) $74 = 2 \\cdot 37$

d) $520 = 52 \\cdot 10 = 2 \\cdot 26 \\cdot 2 \\cdot 5 = 2 \\cdot 2 \\cdot 13 \\cdot 2 \\cdot 5 = 2 \\cdot 2 \\cdot 2 \\cdot 5 \\cdot 13$`,
      solutionVideo: 'Q7tGoA7sGz0',
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-1-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Primtallsfaktoriser tallene',
        subTasks: [
          { label: 'a', task: '4', solution: '$4 = 2 \\cdot 2$', expressionAnswer: '2*2' },
          { label: 'b', task: '10', solution: '$10 = 2 \\cdot 5$', expressionAnswer: '2*5' },
          { label: 'c', task: '50', solution: '$50 = 2 \\cdot 5 \\cdot 5$', expressionAnswer: '2*5*5' },
          { label: 'd', task: '28', solution: '$28 = 2 \\cdot 2 \\cdot 7$', expressionAnswer: '2*2*7' },
          { label: 'e', task: '390', solution: '$390 = 2 \\cdot 3 \\cdot 5 \\cdot 13$', expressionAnswer: '2*3*5*13' },
          { label: 'f', task: '1050', solution: '$1050 = 2 \\cdot 3 \\cdot 5 \\cdot 5 \\cdot 7$', expressionAnswer: '2*3*5*5*7' },
        ],
        hints: ['Del tallet på det minste primtallet som går opp. Fortsett til du bare har primtall igjen.'],
        solution: 'a) $2 \\cdot 2$, b) $2 \\cdot 5$, c) $2 \\cdot 5 \\cdot 5$, d) $2 \\cdot 2 \\cdot 7$, e) $2 \\cdot 3 \\cdot 5 \\cdot 13$, f) $2 \\cdot 3 \\cdot 5 \\cdot 5 \\cdot 7$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FORKORTE BRØKER ==========
    {
      id: '1t-1-5-section-brok',
      type: 'text',
      content: `## Å forkorte enkle brøker ved hjelp av faktorisering

Når vi skal forkorte brøker så finner vi felles faktorer over og under brøkstreken og stryker disse imot hverandre. I motsetning til primtallsfaktorisering er målet vårt å finne høyest mulig felles faktor over og under brøkstreken, på den måten kan vi forkorte raskest mulig.

Noen ganger kan det også lønne seg å faktorisere litt av gangen. Dette handler mest om erfaring.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-1-5-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Forkort brøkene:\n\na) $\\frac{18}{6}$\n\nb) $\\frac{45}{75}$\n\nc) $\\frac{2000}{750}$',
      solution: `**Løsning:**

a) $\\frac{18}{6} = \\frac{3 \\cdot {\\color{red}6}}{{\\color{red}6}} = 3$

b) $\\frac{45}{75} = \\frac{3 \\cdot {\\color{red}15}}{5 \\cdot {\\color{red}15}} = \\frac{3}{5}$

c) $\\frac{2000}{750} = \\frac{200 \\cdot {\\color{red}10}}{75 \\cdot {\\color{red}10}} = \\frac{{\\color{blue}25} \\cdot 8}{{\\color{blue}25} \\cdot 3} = \\frac{8}{3}$`,
      solutionVideo: 'FbRwwWI0ESA',
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-1-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forkort brøkene',
        subTasks: [
          { label: 'a', task: '$\\frac{22}{2}$', solution: '$\\frac{22}{2} = 11$', expressionAnswer: '11' },
          { label: 'b', task: '$\\frac{25}{10}$', solution: '$\\frac{25}{10} = \\frac{5}{2}$', expressionAnswer: '5/2' },
          { label: 'c', task: '$\\frac{9}{6}$', solution: '$\\frac{9}{6} = \\frac{3}{2}$', expressionAnswer: '3/2' },
          { label: 'd', task: '$\\frac{360}{12}$', solution: '$\\frac{360}{12} = 30$', expressionAnswer: '30' },
          { label: 'e', task: '$\\frac{108}{54}$', solution: '$\\frac{108}{54} = 2$', expressionAnswer: '2' },
          { label: 'f', task: '$\\frac{1008}{252}$', solution: '$\\frac{1008}{252} = 4$', expressionAnswer: '4' },
        ],
        hints: ['Finn den største felles faktoren for teller og nevner.'],
        solution: 'a) 11, b) $\\frac{5}{2}$, c) $\\frac{3}{2}$, d) 30, e) 2, f) 4',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FAKTORISERING AV UTTRYKK ==========
    {
      id: '1t-1-5-section-uttrykk',
      type: 'text',
      content: `## Faktorisering av uttrykk med flere ledd

Vi skal nå lære hvordan vi faktoriserer ut det som er felles i uttrykk med "flere ledd" (altså uttrykk som har + eller − som skiller leddene).`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-1-5-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Faktoriser uttrykkene:\n\na) $4x + 8$\nb) $6x^2 - 3x$\nc) $4x^3 - 12x^2 + 4x$\nd) $15x^2y^2 - 20x^2y$',
      solution: `**Løsning:**

I a) har det som er felles blitt markert {\\color{blue}blått}. Det er dette vi kan faktorisere ut.
Det som er igjen er markert med {\\color{red}rødt}. Dette skal stå igjen inne i en parentes.

a) $4x + 8 = {\\color{blue}4} \\cdot {\\color{red}x} + {\\color{blue}4} \\cdot {\\color{red}2} = 4({\\color{red}x + 2})$

b) $6x^2 - 3x = 3x \\cdot 2x - 3x \\cdot 1 = 3x(2x - 1)$

c) $4x^3 - 12x^2 + 4x = 4x(x^2 - 3x + 1)$

d) $15x^2y^2 - 20x^2y = 5x^2y(3y - 4)$

**Merk:** Når vi har faktorisert så kan vi kontrollere at vi har faktorisert riktig ved å gange ut uttrykket vi har fått.`,
      solutionVideo: '8VXXk17ODX0',
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-1-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser ut det som er felles (Skrives vanligvis kun "Faktoriser")',
        subTasks: [
          { label: 'a', task: '$2x + 4$', solution: '$2x + 4 = 2(x + 2)$', expressionAnswer: '2(x+2)' },
          { label: 'b', task: '$9y + 3$', solution: '$9y + 3 = 3(3y + 1)$', expressionAnswer: '3(3y+1)' },
          { label: 'c', task: '$8x^2 - 4x + 12$', solution: '$8x^2 - 4x + 12 = 4(2x^2 - x + 3)$', expressionAnswer: '4(2x^2-x+3)' },
          { label: 'd', task: '$16xy - 9y$', solution: '$16xy - 9y = y(16x - 9)$', expressionAnswer: 'y(16x-9)' },
          { label: 'e', task: '$15x^2 - 3xy^3$', solution: '$15x^2 - 3xy^3 = 3x(5x - y^3)$', expressionAnswer: '3x(5x-y^3)' },
          { label: 'f', task: '$14a^2b + 42b^3$', solution: '$14a^2b + 42b^3 = 14b(a^2 + 3b^2)$', expressionAnswer: '14b(a^2+3b^2)' },
        ],
        hints: ['Finn det som er felles for alle leddene og sett det utenfor en parentes.'],
        solution: 'a) $2(x + 2)$, b) $3(3y + 1)$, c) $4(2x^2 - x + 3)$, d) $y(16x - 9)$, e) $3x(5x - y^3)$, f) $14b(a^2 + 3b^2)$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-1-5-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Faktoriser ut $-3$ fra uttrykket: $-3x + 9$',
      solution: `**Løsning:**

Vi kan tenke slik:

Vi setter $-3$ utenfor en parentes. Inne i parentesen skal det stå det vi må gange $-3$ med for å få uttrykket til venstre for likhetstegnet.

$-3x + 9 = -3 \\cdot x - 3 \\cdot (-3) = -3(x - 3)$`,
      solutionVideo: 'ehI7dUoDc_0',
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '1t-1-5-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Løs oppgavene:\n\na) Faktoriser ut det som står foran $x$ (altså 3) fra $3x + 2$\n\nb) Faktoriser ut det foran x-en med høyest eksponent: $\\frac{1}{2}x^2 + 2x + 2$',
      solution: `**Løsning:**

Når vi faktoriserer ut et tall kan vi også tenke at det som skal stå igjen inne i parentesen er det originale uttrykket delt på det som faktoriseres ut.

a) $3x + 2 = 3 \\cdot x + 3 \\cdot \\frac{2}{3} = 3\\left(x + \\frac{2}{3}\\right)$

**Merk:** Fordelen med å faktorisere ut det som står foran $x$ er at vi lett kan se hva $x$ må være for at det inne i parentesen skal bli 0. I dette tilfellet kan vi se at $x = -\\frac{2}{3}$ gjør at det som står inne i parentesen blir 0. Vi kommer tilbake til dette litt senere.

b) $\\frac{1}{2}x^2 + 2x + 2 = \\frac{1}{2} \\cdot x^2 + \\frac{1}{2} \\cdot 4x + \\frac{1}{2} \\cdot 4 = \\frac{1}{2}(x^2 + 4x + 4)$`,
      solutionVideo: 'vv9P6rWranU',
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-1-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser ut det som står foran x-en med høyest potens',
        subTasks: [
          { label: 'a', task: '$-2x + 6$', solution: '$-2x + 6 = -2(x - 3)$', expressionAnswer: '-2(x-3)' },
          { label: 'b', task: '$3x + 1$', solution: '$3x + 1 = 3\\left(x + \\frac{1}{3}\\right)$', expressionAnswer: '3(x+1/3)' },
          { label: 'c', task: '$\\frac{1}{2}x - 3$', solution: '$\\frac{1}{2}x - 3 = \\frac{1}{2}(x - 6)$', expressionAnswer: '(1/2)(x-6)' },
          { label: 'd', task: '$-2x^2 + 10x - 12$', solution: '$-2x^2 + 10x - 12 = -2(x^2 - 5x + 6)$', expressionAnswer: '-2(x^2-5x+6)' },
          { label: 'e', task: '$-\\frac{1}{5}x + 4$', solution: '$-\\frac{1}{5}x + 4 = -\\frac{1}{5}(x - 20)$', expressionAnswer: '(-1/5)(x-20)' },
          { label: 'f', task: '$4x^2 + 4x + 1$', solution: '$4x^2 + 4x + 1 = 4\\left(x^2 + x + \\frac{1}{4}\\right)$', expressionAnswer: '4(x^2+x+1/4)' },
        ],
        hints: ['Del hvert ledd på koeffisienten foran x-en med høyest potens.'],
        solution: 'a) $-2(x - 3)$, b) $3\\left(x + \\frac{1}{3}\\right)$, c) $\\frac{1}{2}(x - 6)$, d) $-2(x^2 - 5x + 6)$, e) $-\\frac{1}{5}(x - 20)$, f) $4\\left(x^2 + x + \\frac{1}{4}\\right)$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '1t-1-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser ut det som står foran x-en med høyest potens og det som eventuelt er felles.',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{6}x + 1$', solution: '$\\frac{1}{6}x + 1 = \\frac{1}{6}(x + 6)$', expressionAnswer: '(1/6)(x+6)' },
          { label: 'b', task: '$\\frac{1}{3}x^2 + 2x + 3$', solution: '$\\frac{1}{3}x^2 + 2x + 3 = \\frac{1}{3}(x^2 + 6x + 9)$', expressionAnswer: '(1/3)(x^2+6x+9)' },
          { label: 'c', task: '$-2x^2 + x$', solution: '$-2x^2 + x = -x(2x - 1)$', expressionAnswer: '-x(2x-1)' },
          { label: 'd', task: '$16x^2 - 9$', solution: '$16x^2 - 9 = 16\\left(x^2 - \\frac{9}{16}\\right)$', expressionAnswer: '16(x^2-9/16)' },
          { label: 'e', task: '$-5x^2 - 3$', solution: '$-5x^2 - 3 = -5\\left(x^2 + \\frac{3}{5}\\right)$', expressionAnswer: '-5(x^2+3/5)' },
          { label: 'f', task: '$\\left(-\\frac{1}{2}\\right)x^3 - 5x$', solution: '$\\left(-\\frac{1}{2}\\right)x^3 - 5x = -\\frac{1}{2}x(x^2 + 10)$', expressionAnswer: '(-1/2)x(x^2+10)' },
        ],
        hints: ['Husk: $b \\cdot a = a \\cdot b$'],
        solution: 'a) $\\frac{1}{6}(x + 6)$, b) $\\frac{1}{3}(x^2 + 6x + 9)$, c) $-x(2x - 1)$, d) $16\\left(x^2 - \\frac{9}{16}\\right)$, e) $-5\\left(x^2 + \\frac{3}{5}\\right)$, f) $-\\frac{1}{2}x(x^2 + 10)$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KVADRATSETNINGENE ==========
    {
      id: '1t-1-5-section-kvadrat',
      type: 'text',
      content: `# Kvadratsetningene

I begynnelsen så kan kvadratsetningene virke nokså uviktige. Det virker jo bare som vi lærer en "hurtigregel" for hvordan gange sammen uttrykk som er opphøyd i 2. Men, det er bare begynnelsen på hva vi bruker kvadratsetningene til. Spesielt 3. kvadratsetning (Konjugatsetningen) er spesielt viktig å lære seg da den brukes mye i matematikken.`,
    },

    // ========== 1. KVADRATSETNING ==========
    {
      id: '1t-1-5-theorem-1',
      type: 'theorem',
      title: '1. Kvadratsetning',
      content: `$$(a + b)^2 = a^2 + 2ab + b^2$$

**Bevis:** (Det er faktisk viktig å forstå hvorfor)

$(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$

Husk: $b \\cdot a = a \\cdot b$`,
    },

    // Illustrasjon: 1. Kvadratsetning
    {
      id: '1t-1-5-kvadratsetning-1-bilde',
      type: 'image',
      src: '/images/algebra/kvadratsetning-1.svg',
      alt: 'Geometrisk visualisering av første kvadratsetning (a+b)^2',
      caption: '1. Kvadratsetning: Arealet av et kvadrat med sidelengde (a+b)',
    },

    // ========== 2. KVADRATSETNING ==========
    {
      id: '1t-1-5-theorem-2',
      type: 'theorem',
      title: '2. Kvadratsetning',
      content: `$$(a - b)^2 = a^2 - 2ab + b^2$$

**Bevis:**

$(a - b)^2 = (a - b)(a - b) = a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$`,
    },

    // Illustrasjon: 2. Kvadratsetning
    {
      id: '1t-1-5-kvadratsetning-2-bilde',
      type: 'image',
      src: '/images/algebra/kvadratsetning-2.svg',
      alt: 'Geometrisk visualisering av andre kvadratsetning (a-b)^2',
      caption: '2. Kvadratsetning: Arealet av et kvadrat med sidelengde (a-b)',
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: '1t-1-5-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: 'Regn ut ved hjelp av 1. kvadratsetning:\n\na) $(x + 3)^2$\nb) $(2x + 5y)^2$\nc) $3(x + 2)^2$',
      solution: `**Løsning:**

Vi bruker 1. kvadratsetning: $(a + b)^2 = a^2 + 2ab + b^2$

a) $(x + 3)^2$

Her er $a = x$ og $b = 3$:

$(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$

b) $(2x + 5y)^2$

Her er $a = 2x$ og $b = 5y$:

$(2x + 5y)^2 = (2x)^2 + 2 \\cdot 2x \\cdot 5y + (5y)^2 = 4x^2 + 20xy + 25y^2$

c) $3(x + 2)^2$

Her regner vi først ut $(x + 2)^2$ og ganger med 3:

$3(x + 2)^2 = 3(x^2 + 4x + 4) = 3x^2 + 12x + 12$`,
      solutionVideo: 'cFNuIcTjjeM',
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: '1t-1-5-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: 'Regn ut ved hjelp av 2. kvadratsetning:\n\na) $(x - 5)^2$\nb) $(x^2 - 2y)^2$',
      solution: `**Løsning:**

Vi bruker 2. kvadratsetning: $(a - b)^2 = a^2 - 2ab + b^2$

a) $(x - 5)^2$

Her er $a = x$ og $b = 5$:

$(x - 5)^2 = x^2 - 2 \\cdot x \\cdot 5 + 5^2 = x^2 - 10x + 25$

b) $(x^2 - 2y)^2$

Her er $a = x^2$ og $b = 2y$:

$(x^2 - 2y)^2 = (x^2)^2 - 2 \\cdot x^2 \\cdot 2y + (2y)^2 = x^4 - 4x^2y + 4y^2$`,
      solutionVideo: 'W9I2m3u7MZE',
    },

    // ========== OPPGAVE 6 ==========
    {
      id: '1t-1-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut ved hjelp av 1. eller 2. Kvadratsetning',
        subTasks: [
          { label: 'a', task: '$(x + 2)^2$', solution: '$(x + 2)^2 = x^2 + 4x + 4$', expressionAnswer: 'x^2+4x+4' },
          { label: 'b', task: '$(x - 9)^2$', solution: '$(x - 9)^2 = x^2 - 18x + 81$', expressionAnswer: 'x^2-18x+81' },
          { label: 'c', task: '$2(x + 6)^2$', solution: '$2(x + 6)^2 = 2(x^2 + 12x + 36) = 2x^2 + 24x + 72$', expressionAnswer: '2x^2+24x+72' },
          { label: 'd', task: '$-2(x - 4)^2$', solution: '$-2(x - 4)^2 = -2(x^2 - 8x + 16) = -2x^2 + 16x - 32$', expressionAnswer: '-2x^2+16x-32' },
          { label: 'e', task: '$(2x - 7)^2$', solution: '$(2x - 7)^2 = 4x^2 - 28x + 49$', expressionAnswer: '4x^2-28x+49' },
          { label: 'f', task: '$(-2a + b)^2$', solution: '$(-2a + b)^2 = 4a^2 - 4ab + b^2$', expressionAnswer: '4a^2-4ab+b^2' },
        ],
        hints: ['$(a + b)^2 = a^2 + 2ab + b^2$ og $(a - b)^2 = a^2 - 2ab + b^2$'],
        solution: 'a) $x^2 + 4x + 4$, b) $x^2 - 18x + 81$, c) $2x^2 + 24x + 72$, d) $-2x^2 + 16x - 32$, e) $4x^2 - 28x + 49$, f) $4a^2 - 4ab + b^2$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: '1t-1-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut ved hjelp av 1. eller 2. Kvadratsetning',
        subTasks: [
          { label: 'a', task: '$(3 + x)^2$', solution: '$(3 + x)^2 = 9 + 6x + x^2$', expressionAnswer: '9+6x+x^2' },
          { label: 'b', task: '$2(x - 3)^2$', solution: '$2(x - 3)^2 = 2(x^2 - 6x + 9) = 2x^2 - 12x + 18$', expressionAnswer: '2x^2-12x+18' },
          { label: 'c', task: '$5(x + 2y)^2$', solution: '$5(x + 2y)^2 = 5(x^2 + 4xy + 4y^2) = 5x^2 + 20xy + 20y^2$', expressionAnswer: '5x^2+20xy+20y^2' },
          { label: 'd', task: '$-2(3x + 5y)^2$', solution: '$-2(3x + 5y)^2 = -2(9x^2 + 30xy + 25y^2) = -18x^2 - 60xy - 50y^2$', expressionAnswer: '-18x^2-60xy-50y^2' },
          { label: 'e', task: '$\\frac{1}{2}(2x - 6y)^2$', solution: '$\\frac{1}{2}(2x - 6y)^2 = \\frac{1}{2}(4x^2 - 24xy + 36y^2) = 2x^2 - 12xy + 18y^2$', expressionAnswer: '2x^2-12xy+18y^2' },
          { label: 'f', task: '$(2x^3 - 2z^2)^2$', solution: '$(2x^3 - 2z^2)^2 = 4x^6 - 8x^3z^2 + 4z^4$', expressionAnswer: '4x^6-8x^3*z^2+4z^4' },
        ],
        hints: ['Husk å multiplisere med faktoren foran parentesen til slutt.'],
        solution: 'a) $9 + 6x + x^2$, b) $2x^2 - 12x + 18$, c) $5x^2 + 20xy + 20y^2$, d) $-18x^2 - 60xy - 50y^2$, e) $2x^2 - 12xy + 18y^2$, f) $4x^6 - 8x^3z^2 + 4z^4$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FAKTORISERING MED KVADRATSETNINGER ==========
    {
      id: '1t-1-5-section-fakt-kvadrat',
      type: 'text',
      content: `## Faktorisering ved hjelp av 1. og 2. kvadratsetning

En av de nyttigste bruksområdene for kvadratsetningene er at vi kan faktorisere enkelte andregraduttrykk om vi gjennomfører de i motsatt retning.

Om vi har en likning på formen $x^2 + b \\cdot x + c$ og $\\left(\\frac{b}{2}\\right)^2 = c$, så kan vi faktorisere ved hjelp av kvadratsetningene:

$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$`,
    },

    // ========== EKSEMPEL 8 ==========
    {
      id: '1t-1-5-example-8',
      type: 'example',
      title: 'Eksempel 8',
      problem: 'Faktoriser ved å bruke 1. og 2. kvadratsetning i motsatt retning:\n\na) $x^2 + 4x + 4$\nb) $2x^2 - 12x + 18$',
      solution: `**Løsning:**

a) Vi skal faktorisere $x^2 + 4x + 4 = (x + 2)^2$

Her ser vi at det som står foran $x$, altså $b = 4$.
Vi må nå sjekke om $\\left(\\frac{b}{2}\\right)^2 = \\left(\\frac{4}{2}\\right)^2 = 2^2 = c$.
$c = 4$ så dette vilkåret er også oppfylt. Vi kan derfor faktorisere ved hjelp av kvadratsetningen i motsatt retning.

Denne utregningen føres normalt sett ikke og vi nøyer oss med å kun føre resultatet:

$x^2 + 4x + 4 = (x + 2)^2$

b) $2x^2 - 12x + 18 = 2(x^2 - 6x + 9) = 2(x - 3)^2$`,
      solutionVideo: 'BHgPhgAUh-U',
    },

    // ========== OPPGAVE 8 ==========
    {
      id: '1t-1-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser ved hjelp av 1. og 2. Kvadratsetning.\n\n**NB:** Husk at om det står noe foran $x^2$ skal det faktoriseres ut først.',
        subTasks: [
          { label: 'a', task: '$x^2 + 6x + 9$', solution: '$x^2 + 6x + 9 = (x + 3)^2$', expressionAnswer: '(x+3)^2' },
          { label: 'b', task: '$x^2 - 16x + 64$', solution: '$x^2 - 16x + 64 = (x - 8)^2$', expressionAnswer: '(x-8)^2' },
          { label: 'c', task: '$2x^2 + 8x + 8$', solution: '$2x^2 + 8x + 8 = 2(x^2 + 4x + 4) = 2(x + 2)^2$', expressionAnswer: '2(x+2)^2' },
          { label: 'd', task: '$3x^2 - 18x + 27$', solution: '$3x^2 - 18x + 27 = 3(x^2 - 6x + 9) = 3(x - 3)^2$', expressionAnswer: '3(x-3)^2' },
          { label: 'e', task: '$-x^2 + 10x - 25$', solution: '$-x^2 + 10x - 25 = -(x^2 - 10x + 25) = -(x - 5)^2$', expressionAnswer: '-(x-5)^2' },
          { label: 'f', task: '$-4x^2 + 8x - 4$', solution: '$-4x^2 + 8x - 4 = -4(x^2 - 2x + 1) = -4(x - 1)^2$', expressionAnswer: '-4(x-1)^2' },
        ],
        hints: ['Sjekk om $\\left(\\frac{b}{2}\\right)^2 = c$ for å vite om du kan bruke kvadratsetningen.'],
        solution: 'a) $(x + 3)^2$, b) $(x - 8)^2$, c) $2(x + 2)^2$, d) $3(x - 3)^2$, e) $-(x - 5)^2$, f) $-4(x - 1)^2$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9 ==========
    {
      id: '1t-1-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser ved hjelp av 1. og 2. Kvadratsetning.\n\n**NB:** Husk at om det er noe som er felles eller som står foran $x^2$ skal det faktoriseres ut først.',
        subTasks: [
          { label: 'a', task: '$x^2 + 18x + 81$', solution: '$x^2 + 18x + 81 = (x + 9)^2$', expressionAnswer: '(x+9)^2' },
          { label: 'b', task: '$-2x^2 - 8x - 8$', solution: '$-2x^2 - 8x - 8 = -2(x^2 + 4x + 4) = -2(x + 2)^2$', expressionAnswer: '-2(x+2)^2' },
          { label: 'c', task: '$-3x^2 + 24x - 48$', solution: '$-3x^2 + 24x - 48 = -3(x^2 - 8x + 16) = -3(x - 4)^2$', expressionAnswer: '-3(x-4)^2' },
          { label: 'd', task: '$4x^3 - 8x^2 + 4x$', solution: '$4x^3 - 8x^2 + 4x = 4x(x^2 - 2x + 1) = 4x(x - 1)^2$', expressionAnswer: '4x(x-1)^2' },
          { label: 'e', task: '$-3x^3 + 30x^2 - 75x$', solution: '$-3x^3 + 30x^2 - 75x = -3x(x^2 - 10x + 25) = -3x(x - 5)^2$', expressionAnswer: '-3x(x-5)^2' },
          { label: 'f', task: '$x^2 + x + \\frac{1}{4}$', solution: '$x^2 + x + \\frac{1}{4} = \\left(x + \\frac{1}{2}\\right)^2$', expressionAnswer: '(x+1/2)^2' },
        ],
        hints: ['Faktoriser ut felles faktorer først, deretter bruk kvadratsetningen.'],
        solution: 'a) $(x + 9)^2$, b) $-2(x + 2)^2$, c) $-3(x - 4)^2$, d) $4x(x - 1)^2$, e) $-3x(x - 5)^2$, f) $\\left(x + \\frac{1}{2}\\right)^2$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== 3. KVADRATSETNING ==========
    {
      id: '1t-1-5-theorem-3',
      type: 'theorem',
      title: '3. Kvadratsetning (Konjugatsetningen)',
      content: `$$(a + b)(a - b) = a^2 - b^2$$

**Bevis:**

$(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$`,
    },

    // Illustrasjon: Konjugatsetningen
    {
      id: '1t-1-5-konjugatsetning-bilde',
      type: 'image',
      src: '/images/algebra/konjugatsetningen.svg',
      alt: 'Geometrisk visualisering av konjugatsetningen (a+b)(a-b) = a^2 - b^2',
      caption: 'Konjugatsetningen: Differansen mellom to kvadrater',
    },

    // ========== EKSEMPEL 9 ==========
    {
      id: '1t-1-5-example-9',
      type: 'example',
      title: 'Eksempel 9',
      problem: 'Regn ut ved hjelp av 3. kvadratsetning:\n\na) $(x + 2)(x - 2)$\nb) $(x^2 + 3y)(x^2 - 3y)$',
      solution: `**Løsning:**

Vi bruker konjugatsetningen (3. kvadratsetning): $(a + b)(a - b) = a^2 - b^2$

a) $(x + 2)(x - 2)$

Her er $a = x$ og $b = 2$:

$(x + 2)(x - 2) = x^2 - 2^2 = x^2 - 4$

b) $(x^2 + 3y)(x^2 - 3y)$

Her er $a = x^2$ og $b = 3y$:

$(x^2 + 3y)(x^2 - 3y) = (x^2)^2 - (3y)^2 = x^4 - 9y^2$`,
      solutionVideo: 'bjUrtCt7JiM',
    },

    // ========== OPPGAVE 10 ==========
    {
      id: '1t-1-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut ved hjelp av 3. Kvadratsetning',
        subTasks: [
          { label: 'a', task: '$(x + 3)(x - 3)$', solution: '$(x + 3)(x - 3) = x^2 - 9$', expressionAnswer: 'x^2-9' },
          { label: 'b', task: '$(x + 9)(x - 9)$', solution: '$(x + 9)(x - 9) = x^2 - 81$', expressionAnswer: 'x^2-81' },
          { label: 'c', task: '$(2x + \\sqrt{3})(2x - \\sqrt{3})$', solution: '$(2x + \\sqrt{3})(2x - \\sqrt{3}) = 4x^2 - 3$', expressionAnswer: '4x^2-3' },
          { label: 'd', task: '$(x^2 - 6)(x^2 + 6)$', solution: '$(x^2 - 6)(x^2 + 6) = x^4 - 36$', expressionAnswer: 'x^4-36' },
          { label: 'e', task: '$3(x + 4)(x - 4)$', solution: '$3(x + 4)(x - 4) = 3(x^2 - 16) = 3x^2 - 48$', expressionAnswer: '3x^2-48' },
          { label: 'f', task: '$-2(x^2 - y^2)(x^2 + y^2)$', solution: '$-2(x^2 - y^2)(x^2 + y^2) = -2(x^4 - y^4) = -2x^4 + 2y^4$', expressionAnswer: '-2x^4+2y^4' },
        ],
        hints: ['$(a + b)(a - b) = a^2 - b^2$'],
        solution: 'a) $x^2 - 9$, b) $x^2 - 81$, c) $4x^2 - 3$, d) $x^4 - 36$, e) $3x^2 - 48$, f) $-2x^4 + 2y^4$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== 3. KVADRATSETNING I MOTSATT RETNING ==========
    {
      id: '1t-1-5-section-konj-motsatt',
      type: 'text',
      content: `## 3. Kvadratsetning i motsatt retning

Vi kan også bruke konjugatsetningen til å faktorisere uttrykk på formen $a^2 - b^2$:

$$a^2 - b^2 = (a + b)(a - b)$$`,
    },

    // ========== EKSEMPEL 10 ==========
    {
      id: '1t-1-5-example-10',
      type: 'example',
      title: 'Eksempel 10',
      problem: 'Faktoriser uttrykkene ved å bruke 3. kvadratsetning i motsatt retning:\n\nAltså: $a^2 - b^2 = (a + b)(a - b)$\n\na) $x^2 - 9$\nb) $4x^2 - 25$\nc) $4x^2 - 12$',
      solution: `**Løsning:**

a) $x^2 - 9 = x^2 - 3^2 = (x + 3)(x - 3)$

b) $4x^2 - 25 = (2x)^2 - 5^2 = (2x + 5)(2x - 5)$

c) $4x^2 - 12 = 4(x^2 - 3) = 4\\left(x^2 - \\left(\\sqrt{3}\\right)^2\\right) = 4(x + \\sqrt{3})(x - \\sqrt{3})$`,
      solutionVideo: 'WexNS5C2KPU',
    },

    // ========== OPPGAVE 11 ==========
    {
      id: '1t-1-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser ved hjelp av 3. Kvadratsetning',
        subTasks: [
          { label: 'a', task: '$x^2 - 4$', solution: '$x^2 - 4 = (x + 2)(x - 2)$', expressionAnswer: '(x+2)(x-2)' },
          { label: 'b', task: '$x^2 - 81$', solution: '$x^2 - 81 = (x + 9)(x - 9)$', expressionAnswer: '(x+9)(x-9)' },
          { label: 'c', task: '$4x^2 - 9$', solution: '$4x^2 - 9 = (2x + 3)(2x - 3)$', expressionAnswer: '(2x+3)(2x-3)' },
          { label: 'd', task: '$9x^2 - 81$', solution: '$9x^2 - 81 = 9(x^2 - 9) = 9(x + 3)(x - 3)$', expressionAnswer: '9(x+3)(x-3)' },
          { label: 'e', task: '$x^4 - y^4$', solution: '$x^4 - y^4 = (x^2 + y^2)(x^2 - y^2) = (x^2 + y^2)(x + y)(x - y)$', expressionAnswer: '(x^2+y^2)(x+y)(x-y)' },
          { label: 'f', task: '$9a^4 - 16b^4$', solution: '$9a^4 - 16b^4 = (3a^2 + 4b^2)(3a^2 - 4b^2)$', expressionAnswer: '(3a^2+4b^2)(3a^2-4b^2)' },
        ],
        hints: ['Skriv hvert ledd som et kvadrat og bruk $a^2 - b^2 = (a + b)(a - b)$'],
        solution: 'a) $(x + 2)(x - 2)$, b) $(x + 9)(x - 9)$, c) $(2x + 3)(2x - 3)$, d) $9(x + 3)(x - 3)$, e) $(x^2 + y^2)(x + y)(x - y)$, f) $(3a^2 + 4b^2)(3a^2 - 4b^2)$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 12 ==========
    {
      id: '1t-1-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: '1t-1-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser ved hjelp av 3. Kvadratsetning (Husk å faktorisere ut det som er felles først)',
        subTasks: [
          { label: 'a', task: '$2x^2 - 8$', solution: '$2x^2 - 8 = 2(x^2 - 4) = 2(x + 2)(x - 2)$', expressionAnswer: '2(x+2)(x-2)' },
          { label: 'b', task: '$12x^2 - 27$', solution: '$12x^2 - 27 = 3(4x^2 - 9) = 3(2x + 3)(2x - 3)$', expressionAnswer: '3(2x+3)(2x-3)' },
          { label: 'c', task: '$4x^2 - 36y^2$', solution: '$4x^2 - 36y^2 = 4(x^2 - 9y^2) = 4(x + 3y)(x - 3y)$', expressionAnswer: '4(x+3y)(x-3y)' },
        ],
        hints: ['Faktoriser ut største felles faktor først.'],
        solution: 'a) $2(x + 2)(x - 2)$, b) $3(2x + 3)(2x - 3)$, c) $4(x + 3y)(x - 3y)$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_1_3: TextbookChapter = {
  id: '1t-1-3',
  courseId: '1t',
  chapterNumber: '1.3',
  title: 'Algebra',
  description: 'Lær om bokstavregning, parentesregning og multiplikasjon av parenteser.',
  estimatedMinutes: 60,
  competenceGoals: ['behandle og faktorisere algebraiske uttrykk'],
  content: [
    // ========== BOKSTAVREGNING ==========
    {
      id: '1t-1-3-intro',
      type: 'text',
      content: `# Bokstavregning

I algebra bruker vi bokstaver som representerer tall. Når vi regner med bokstaver, kan vi bare legge sammen eller trekke fra **like ledd** - det vil si ledd som inneholder de samme bokstavene med de samme eksponentene.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Regn ut:\n\na) $3a + 5a + a$\nb) $3a + 7a - 5b$\nc) $2x^2 - 5x + 3x + 4x^2 + 2$',
      solution: `**Løsning:**

a) $3a + 5a + a = {\\color{blue}8a + 1a} = 9a$

b) $3a + 7a - 5b = 10a - 5b$

c) $2x^2 - 5x + 3x + 4x^2 + 2 = {\\color{blue}2x^2 + 4x^2 - 5x + 3x + 2} = 6x^2 - 2x + 2$`,
      solutionVideo: 'QWyUm2QQg80',
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$5x + 2x + x$', solution: '$5x + 2x + x = 8x$', expressionAnswer: '8x' },
          { label: 'b', task: '$7x + 8x - 2y$', solution: '$7x + 8x - 2y = 15x - 2y$', expressionAnswer: '15x-2y' },
          { label: 'c', task: '$27x + 9y - 12x$', solution: '$27x + 9y - 12x = 15x + 9y$', expressionAnswer: '15x+9y' },
          { label: 'd', task: '$9x^2 + 7x^2 + 3x$', solution: '$9x^2 + 7x^2 + 3x = 16x^2 + 3x$', expressionAnswer: '16x^2+3x' },
          { label: 'e', task: '$5x^2 + 7x + 9 - 2x^2$', solution: '$5x^2 + 7x + 9 - 2x^2 = 3x^2 + 7x + 9$', expressionAnswer: '3x^2+7x+9' },
          { label: 'f', task: '$9x^3 + 8x - 2x^3 + 5$', solution: '$9x^3 + 8x - 2x^3 + 5 = 7x^3 + 8x + 5$', expressionAnswer: '7x^3+8x+5' },
        ],
        hints: ['Like ledd har samme bokstav med samme eksponent. Bare like ledd kan legges sammen.'],
        solution: 'a) $8x$, b) $15x - 2y$, c) $15x + 9y$, d) $16x^2 + 3x$, e) $3x^2 + 7x + 9$, f) $7x^3 + 8x + 5$',
        solutionVideo: '0f-MeXnuNG8',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Regn ut:\n\na) $2xy + 3yx$\nb) $2xy + 5yx + 3xz$\nc) $3x^2y + 5xy^2 - 4yx^2$',
      solution: `**Løsning:**

a) $2xy + 3{\\color{blue}yx} = 2xy + 3{\\color{blue}xy} = 5xy$

b) $2xy + 5{\\color{blue}yx} + 3xz = 2xy + 5{\\color{blue}xy} + 3xz = 7xy + 3xz$

c) $3x^2y + 5xy^2 - 4{\\color{blue}yx^2} = 3x^2y - 4{\\color{blue}x^2y} + 5xy^2 = -x^2y + 5xy^2$`,
      solutionVideo: 'tz-8hvOeXp0',
    },
    {
      id: '1t-1-2-tip-1',
      type: 'tip',
      content: `**NB: Alfabetisk rekkefølge**

Vi setter faktorene i alfabetisk rekkefølge:

$yx = y \\cdot x = x \\cdot y = xy$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$3xz + 7zx$', solution: '$3xz + 7zx = 10xz$', expressionAnswer: '10xz' },
          { label: 'b', task: '$7xy + 8xy - 2y^2$', solution: '$7xy + 8xy - 2y^2 = -2y^2 + 15xy$', expressionAnswer: '15xy-2y^2' },
          { label: 'c', task: '$2xz^2 + 9xz^2 - 12xz$', solution: '$2xz^2 + 9xz^2 - 12xz = 11xz^2 - 12xz$', expressionAnswer: '11xz^2-12xz' },
          { label: 'd', task: '$Ab - 7Ab + 3bA$', solution: '$Ab - 7Ab + 3bA = -3Ab$', expressionAnswer: '-3Ab' },
          { label: 'e', task: '$x^2y + 7x - 2x^2y$', solution: '$x^2y + 7x - 2x^2y = -x^2y + 7x$', expressionAnswer: '-x^2y+7x' },
          { label: 'f', task: '$x^2 + y^2 - 2xy^2 + 3x^2$', solution: '$x^2 + y^2 - 2xy^2 + 3x^2 = 4x^2 + y^2 - 2xy^2$', expressionAnswer: '4x^2+y^2-2xy^2' },
        ],
        hints: ['Husk at $xy = yx$ og $Ab = bA$. Sorter leddene slik at like ledd står ved siden av hverandre.'],
        solution: 'a) $10xz$, b) $-2y^2 + 15xy$, c) $11xz^2 - 12xz$, d) $-3Ab$, e) $-x^2y + 7x$, f) $4x^2 + y^2 - 2xy^2$',
        solutionVideo: 'JX-5TVE79Kc',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PARENTESREGNING ==========
    {
      id: '1t-1-3-section-parentes',
      type: 'text',
      content: `# Parentesregning

Når vi multipliserer med parenteser, bruker vi distributiv lov.`,
    },
    {
      id: '1t-1-2-theorem-1',
      type: 'theorem',
      title: 'Multiplikasjon med parenteser',
      content: `$$a \\cdot (b + c) = a \\cdot b + a \\cdot c$$

$$a \\cdot (b + c + d) = a \\cdot b + a \\cdot c + a \\cdot d$$`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Regn ut:\n\na) $2(x + 4)$\nb) $-3(2x - 2)$\nc) $x(x^2 - 3y + 2)$',
      solution: `**Løsning:**

a) $2(x + 4) = {\\color{blue}2 \\cdot (x + 4) = 2 \\cdot x + 2 \\cdot 4} = 2x + 8$

b) $-3(2x - 2) = {\\color{blue}-3 \\cdot 2x - (-3) \\cdot 2 = -6x - (-6)} = -6x + 6$

c) $x(x^2 - 3y + 2) = {\\color{blue}x \\cdot x^2 - x \\cdot 3y + x \\cdot 2} = x^3 - 3xy + 2x$`,
      solutionVideo: 'GUWJxFiV5ps',
    },
    {
      id: '1t-1-2-tip-2',
      type: 'tip',
      content: `**Potensregelen:**

$x \\cdot x^2 = x^1 \\cdot x^2 = x^{1+2} = x^3$

Generelt: $x^n \\cdot x^m = x^{n+m}$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$2(x - 3)$', solution: '$2(x - 3) = 2x - 6$', expressionAnswer: '2x-6' },
          { label: 'b', task: '$-4(-y + 3)$', solution: '$-4(-y + 3) = 4y - 12$', expressionAnswer: '4y-12' },
          { label: 'c', task: '$x(x - 3) + x$', solution: '$x(x - 3) + x = x^2 - 3x + x = x^2 - 2x$', expressionAnswer: 'x^2-2x' },
          { label: 'd', task: '$-2(x^2 - 3x + 2) - x^2$', solution: '$-2(x^2 - 3x + 2) - x^2 = -2x^2 + 6x - 4 - x^2 = -3x^2 + 6x - 4$', expressionAnswer: '-3x^2+6x-4' },
          { label: 'e', task: '$-2 - 3(x^2 - 3) - 2x$', solution: '$-2 - 3(x^2 - 3) - 2x = -2 - 3x^2 + 9 - 2x = -3x^2 - 2x + 7$', expressionAnswer: '-3x^2-2x+7' },
          { label: 'f', task: '$-y(2y^3 + x)$', solution: '$-y(2y^3 + x) = -2y^4 - xy$', expressionAnswer: '-2y^4-xy' },
        ],
        hints: ['Husk at $-a \\cdot (-b) = ab$ og $-a \\cdot b = -ab$'],
        solution: 'a) $2x - 6$, b) $4y - 12$, c) $x^2 - 2x$, d) $-3x^2 + 6x - 4$, e) $-3x^2 - 2x + 7$, f) $-2y^4 - xy$',
        solutionVideo: '9Lv8eL_s0t8',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-1-2-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Regn ut:\n\na) $2a + (2a - 3b)$\nb) $3a - (5b - 4a)$\nc) $-(-3x + 2) + 8x$',
      solution: `**Løsning:**

a) $2a + (2a - 3b) = 2a + 2a - 3b = 4a - 3b$

b) $3a - {\\color{blue}1}(5b - 4a) = 3a - 5b + 4a = 7a - 5b$

c) $\\color{blue}{-1}(-3x + 2) + 8x = 3x - 2 + 8x = 11x - 2$`,
      solutionVideo: 'F5RMjsdYm9s',
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$2x + (5x - 2)$', solution: '$2x + (5x - 2) = 2x + 5x - 2 = 7x - 2$', expressionAnswer: '7x-2' },
          { label: 'b', task: '$4y - (2y + 3)$', solution: '$4y - (2y + 3) = 4y - 2y - 3 = 2y - 3$', expressionAnswer: '2y-3' },
          { label: 'c', task: '$-(2x - 3) + 2x$', solution: '$-(2x - 3) + 2x = -2x + 3 + 2x = 3$', answer: 3 },
          { label: 'd', task: '$(2x^2 + 3) - (4x^2 + 5)$', solution: '$(2x^2 + 3) - (4x^2 + 5) = 2x^2 + 3 - 4x^2 - 5 = -2x^2 - 2$', expressionAnswer: '-2x^2-2' },
          { label: 'e', task: '$-10 + (x^2 - 3) - 2$', solution: '$-10 + (x^2 - 3) - 2 = -10 + x^2 - 3 - 2 = x^2 - 15$', expressionAnswer: 'x^2-15' },
          { label: 'f', task: '$-xy - (-3xy + 1)$', solution: '$-xy - (-3xy + 1) = -xy + 3xy - 1 = 2xy - 1$', expressionAnswer: '2xy-1' },
        ],
        hints: ['Minus foran parentes endrer fortegn på alle ledd inne i parentesen: $-(a - b) = -a + b$'],
        solution: 'a) $7x - 2$, b) $2y - 3$, c) $3$, d) $-2x^2 - 2$, e) $x^2 - 15$, f) $2xy - 1$',
        solutionVideo: 'X1CBIcgv9sk',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '1t-1-2-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Regn ut:\n\na) $xy(x^2 + y + 2)$\nb) $a^2b(a^2 - 2b)$',
      solution: `**Løsning:**

a) $xy(x^2 + y + 2) = {\\color{blue}xy \\cdot x^2 + xy \\cdot y + xy \\cdot 2} = x^3y + xy^2 + 2xy$

b) $a^2b(a^2 - 2b) = {\\color{blue}a^2b \\cdot a^2 - a^2b \\cdot 2b} = a^4b - 2a^2b^2$`,
      solutionVideo: 'H95YSX_5Mdc',
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '1t-1-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$2x(x - y)$', solution: '$2x(x - y) = 2x^2 - 2xy$', expressionAnswer: '2x^2-2xy' },
          { label: 'b', task: '$-x(-y + 3)$', solution: '$-x(-y + 3) = xy - 3x$', expressionAnswer: 'xy-3x' },
          { label: 'c', task: '$xy(x - 2)$', solution: '$xy(x - 2) = x^2y - 2xy$', expressionAnswer: 'x^2y-2xy' },
          { label: 'd', task: '$-a(b^2 - a + 4) - a^2$', solution: '$-a(b^2 - a + 4) - a^2 = -ab^2 + a^2 - 4a - a^2 = -ab^2 - 4a$', expressionAnswer: '-ab^2-4a' },
          { label: 'e', task: '$-3y(x^2 - 3x) - 2yx$', solution: '$-3y(x^2 - 3x) - 2yx = -3x^2y + 9xy - 2xy = -3x^2y + 7xy$', expressionAnswer: '-3x^2y+7xy' },
          { label: 'f', task: '$-u(v^3 + u)$', solution: '$-u(v^3 + u) = -uv^3 - u^2 = -u^2 - uv^3$', expressionAnswer: '-u^2-uv^3' },
        ],
        hints: ['Multipliser hvert ledd inne i parentesen med faktoren utenfor'],
        solution: 'a) $2x^2 - 2xy$, b) $xy - 3x$, c) $x^2y - 2xy$, d) $-ab^2 - 4a$, e) $-3x^2y + 7xy$, f) $-u^2 - uv^3$',
        solutionVideo: 'GWOCmYUrrjI',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MULTIPLIKASJON AV PARENTESER ==========
    {
      id: '1t-1-3-section-mult',
      type: 'text',
      content: `# Multiplikasjon av parenteser

Når vi multipliserer to parenteser, må hvert ledd i den første parentesen multipliseres med hvert ledd i den andre.`,
    },
    {
      id: '1t-1-2-theorem-2',
      type: 'theorem',
      title: 'Multiplikasjon av to parenteser',
      content: `$$(a + b) \\cdot (c + d) = a \\cdot c + a \\cdot d + b \\cdot c + b \\cdot d$$`,
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: '1t-1-2-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: 'Regn ut:\n\na) $(x + 2)(x + 3)$\nb) $-2(x + 3)(x - 5)$\nc) $(2x - 3)(3y - 5)$\nd) $(2x + y)(3x - 2y)$',
      solution: `**Løsning:**

a) $({\\color{red}x} + 2)({\\color{green}x} + 3) = {\\color{red}x} \\cdot {\\color{green}x} + {\\color{red}x} \\cdot 3 + 2 \\cdot {\\color{green}x} + 2 \\cdot 3 = x^2 + 3x + 2x + 6$
$= x^2 + 5x + 6$

b) $-2(x + 3)(x - 5) = {\\color{blue}-2(x \\cdot x + x \\cdot (-5) + 3 \\cdot x + 3 \\cdot (-5))}$
$= -2(x^2 - 5x + 3x - 15) = -2(x^2 - 2x - 15)$
$= -2x^2 + 4x + 30$

c) $(2x - 3)(3y - 5) = {\\color{blue}2x \\cdot 3y + 2x \\cdot (-5) - 3 \\cdot 3y - 3 \\cdot (-5)}$
$= 6xy - 10x - 9y + 15$

d) $(2x + y)(3x - 2y) = {\\color{blue}2x \\cdot 3x + 2x \\cdot (-2y) + y \\cdot 3x + y \\cdot (-2y)}$
$= 6x^2 - 4xy + 3xy - 2y^2 = 6x^2 - xy - 2y^2$`,
      solutionVideo: 'EyxGHxxOoAM',
    },

    // ========== OPPGAVE 6 ==========
    {
      id: '1t-1-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$(x + 3)(x + 4)$', solution: '$(x + 3)(x + 4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$', expressionAnswer: 'x^2+7x+12' },
          { label: 'b', task: '$(x + 3)(x - 2)$', solution: '$(x + 3)(x - 2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$', expressionAnswer: 'x^2+x-6' },
          { label: 'c', task: '$(2x + 4)(x - y)$', solution: '$(2x + 4)(x - y) = 2x^2 - 2xy + 4x - 4y$', expressionAnswer: '2x^2-2xy+4x-4y' },
          { label: 'd', task: '$-2(2x - 2)(x - 5)$', solution: '$-2(2x - 2)(x - 5) = -2(2x^2 - 10x - 2x + 10) = -2(2x^2 - 12x + 10) = -4x^2 + 24x - 20$', expressionAnswer: '-4x^2+24x-20' },
          { label: 'e', task: '$-(x + y)(x - 3)$', solution: '$-(x + y)(x - 3) = -(x^2 - 3x + xy - 3y) = -x^2 + 3x - xy + 3y$', expressionAnswer: '-x^2+3x-xy+3y' },
          { label: 'f', task: '$3(2x + 3y)(2y + x)$', solution: '$3(2x + 3y)(2y + x) = 3(4xy + 2x^2 + 6y^2 + 3xy) = 3(2x^2 + 7xy + 6y^2) = 6x^2 + 21xy + 18y^2$', expressionAnswer: '6x^2+21xy+18y^2' },
        ],
        hints: ['Multipliser hvert ledd i første parentes med hvert ledd i andre parentes'],
        solution: 'a) $x^2 + 7x + 12$, b) $x^2 + x - 6$, c) $2x^2 - 2xy + 4x - 4y$, d) $-4x^2 + 24x - 20$, e) $-x^2 + 3x - xy + 3y$, f) $6x^2 + 21xy + 18y^2$',
        solutionVideo: 'YVo4tGLs1MI',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: '1t-1-2-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: 'Regn ut:\n\na) $x^2 - (x + 2)(x + 4)$\nb) $x(x + 3)(x - 5)$\nc) $(x - 2)(x - 3)(2x - 5)$',
      solution: `**Løsning:**

a) $x^2 - (x + 2)(x + 4) = x^2 - (x^2 + 4x + 2x + 8)$
$= x^2 - x^2 - 4x - 2x - 8 = -6x - 8$

b) $x(x + 3)(x - 5) = (x^2 + 3x)(x - 5) = x^3 - 5x^2 + 3x^2 - 15x$
$= x^3 - 2x^2 - 15x$

c) $(x - 2)(x - 3)(2x - 5) = (x - 2)(2x^2 - 5x - 6x + 15)$
$= (x - 2)(2x^2 - 11x + 15) = 2x^3 - 11x^2 + 15x - 4x^2 + 22x - 30$
$= 2x^3 - 15x^2 + 37x - 30$`,
      solutionVideo: 'u6pHNWi9eMM',
    },

    // ========== OPPGAVE 7 ==========
    {
      id: '1t-1-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-1-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$x(x + 3)(x + 4)$', solution: '$x(x + 3)(x + 4) = (x^2 + 3x)(x + 4) = x^3 + 4x^2 + 3x^2 + 12x = x^3 + 7x^2 + 12x$', expressionAnswer: 'x^3+7x^2+12x' },
          { label: 'b', task: '$x^2 - (x + 4)(x - 1)$', solution: '$x^2 - (x + 4)(x - 1) = x^2 - (x^2 - x + 4x - 4) = x^2 - x^2 + x - 4x + 4 = -3x + 4$', expressionAnswer: '-3x+4' },
          { label: 'c', task: '$(x + 4)(x - 2)(x - 5)$', solution: '$(x + 4)(x - 2)(x - 5) = (x^2 + 2x - 8)(x - 5) = x^3 - 5x^2 + 2x^2 - 10x - 8x + 40 = x^3 - 3x^2 - 18x + 40$', expressionAnswer: 'x^3-3x^2-18x+40' },
          { label: 'd', task: '$(x + 3)(x - 2)(-5)$', solution: '$(x + 3)(x - 2)(-5) = -5(x^2 + x - 6) = -5x^2 - 5x + 30$', expressionAnswer: '-5x^2-5x+30' },
          { label: 'e', task: '$-x^3 - (x + 5)(x - 3)x$', solution: '$-x^3 - (x + 5)(x - 3)x = -x^3 - (x^2 + 2x - 15)x = -x^3 - x^3 - 2x^2 + 15x = -2x^3 - 2x^2 + 15x$', expressionAnswer: '-2x^3-2x^2+15x' },
          { label: 'f', task: '$x^3 - 2x - (x - 2)(x + 3)(2 + x)$', solution: '$x^3 - 2x - (x - 2)(x + 3)(2 + x) = x^3 - 2x - (x^2 + x - 6)(x + 2) = x^3 - 2x - (x^3 + 3x^2 - 4x - 12) = -3x^2 + 2x + 12$', expressionAnswer: '-3x^2+2x+12' },
        ],
        hints: ['Ta én parentes om gangen. Multipliser først to parenteser, så ganger du resultatet med den tredje.'],
        solution: 'a) $x^3 + 7x^2 + 12x$, b) $-3x + 4$, c) $x^3 - 3x^2 - 18x + 40$, d) $-5x^2 - 5x + 30$, e) $-2x^3 - 2x^2 + 15x$, f) $-3x^2 + 2x + 12$',
        solutionVideo: 'pC11xCI1nLo',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '1t-1-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        // R1
        {
          id: '1t-1-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$15x + 22x$', expressionAnswer: '37x' },
              { label: 'b', task: '$12x - 4x - 20x$', expressionAnswer: '-12x' },
              { label: 'c', task: '$7x + 3y - 13x + 3$', expressionAnswer: '-6x+3y+3' },
              { label: 'd', task: '$9a + b - 31a$', expressionAnswer: '-22a+b' },
              { label: 'e', task: '$15x + 7q + 18 - 2$', expressionAnswer: '15x+7q+16' },
              { label: 'f', task: '$-8 - 2x - 5y - 7y$', expressionAnswer: '-2x-12y-8' },
            ],
            solution: 'a) $37x$, b) $-12x$, c) $-6x + 3y + 3$, d) $-22a + b$, e) $15x + 7q + 16$, f) $-2x - 12y - 8$',
            hideInlineSolution: true,
            hints: ['Samle like ledd - ledd med samme bokstav og eksponent.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R2.1
        {
          id: '1t-1-3-rep-2-1',
          type: 'exercise',
          exercise: {
            id: '1t-1-3-rep-ex-2-1',
            number: 'R2.1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$4x^2 + 2x^2$', expressionAnswer: '6x^2' },
              { label: 'b', task: '$2x^2 + 5x^2 - 2x$', expressionAnswer: '7x^2-2x' },
              { label: 'c', task: '$7xy + 3xy - 12x$', expressionAnswer: '10xy-12x' },
              { label: 'd', task: '$2ab + 7ba + 3a$', expressionAnswer: '9ab+3a' },
              { label: 'e', task: '$5b^2 + 2a^2b - 6a^2b$', expressionAnswer: '-4a^2b+5b^2' },
              { label: 'f', task: '$-9xy + 8x^2 - 2x^2$', expressionAnswer: '6x^2-9xy' },
            ],
            solution: 'a) $6x^2$, b) $7x^2 - 2x$, c) $10xy - 12x$, d) $9ab + 3a$, e) $-4a^2b + 5b^2$, f) $6x^2 - 9xy$',
            hideInlineSolution: true,
            hints: ['Husk at $ab = ba$. Samle like ledd.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R2.2
        {
          id: '1t-1-3-rep-2-2',
          type: 'exercise',
          exercise: {
            id: '1t-1-3-rep-ex-2-2',
            number: 'R2.2',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$3x^2 + 5x - 2x^2 + 7x - 3$', expressionAnswer: 'x^2+12x-3' },
              { label: 'b', task: '$7y^2 - 8x + 3x^2 - 7x + 9y^2$', expressionAnswer: '3x^2-15x+16y^2' },
              { label: 'c', task: '$2xy + 15xy - x^2 + 3xy$', expressionAnswer: '-x^2+20xy' },
              { label: 'd', task: '$8a - 3c + 2a^2 - 15c - 6a$', expressionAnswer: '2a^2+2a-18c' },
              { label: 'e', task: '$8ba - ab + 3a^2 - 9a^2 - 18ab$', expressionAnswer: '-6a^2-11ab' },
              { label: 'f', task: '$3x^2y + 10x^2y - 5x^2 + 2y^2 - 2x^2y$', expressionAnswer: '-5x^2+11x^2y+2y^2' },
            ],
            solution: 'a) $x^2 + 12x - 3$, b) $3x^2 - 15x + 16y^2$, c) $-x^2 + 20xy$, d) $2a^2 + 2a - 18c$, e) $-6a^2 - 11ab$, f) $-5x^2 + 11x^2y + 2y^2$',
            hideInlineSolution: true,
            hints: ['Sorter leddene først, så blir det lettere å se hvilke som er like.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R3
        {
          id: '1t-1-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$5(x + 2)$', expressionAnswer: '5x+10' },
              { label: 'b', task: '$-2(y - 8)$', expressionAnswer: '-2y+16' },
              { label: 'c', task: '$2(2x - 3) + 5$', expressionAnswer: '4x-1' },
              { label: 'd', task: '$-3(x - 2) + 2x$', expressionAnswer: '-x+6' },
              { label: 'e', task: '$-5(-2x + 2) + 2(x - 1)$', expressionAnswer: '12x-12' },
              { label: 'f', task: '$(x - 3) \\cdot 3$', expressionAnswer: '3x-9' },
            ],
            solution: 'a) $5x + 10$, b) $-2y + 16$, c) $4x - 1$, d) $-x + 6$, e) $12x - 12$, f) $3x - 9$',
            hideInlineSolution: true,
            hints: ['Bruk distributiv lov: $a(b + c) = ab + ac$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R4
        {
          id: '1t-1-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$3(3x - 3 + y)$', expressionAnswer: '9x-9+3y' },
              { label: 'b', task: '$-4(2y - 2x - 5)$', expressionAnswer: '8x-8y+20' },
              { label: 'c', task: '$4(2x - 3 - 6y) + 5$', expressionAnswer: '8x-24y-7' },
            ],
            solution: 'a) $9x - 9 + 3y$, b) $8x - 8y + 20$, c) $8x - 24y - 7$',
            hideInlineSolution: true,
            hints: ['Multipliser hvert ledd inne i parentesen med faktoren utenfor.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R5
        {
          id: '1t-1-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$3x^2(y - x)$', expressionAnswer: '3x^2y-3x^3' },
              { label: 'b', task: '$-3x(-x + 3)$', expressionAnswer: '3x^2-9x' },
              { label: 'c', task: '$x^3(x^2 - 3x)$', expressionAnswer: 'x^5-3x^4' },
              { label: 'd', task: '$-3l(l^2 - 2l) - 2k$', expressionAnswer: '-3l^3+6l^2-2k' },
              { label: 'e', task: '$b(-b^2 - b + 4) - b^2$', expressionAnswer: '-b^3-2b^2+4b' },
              { label: 'f', task: '$-(x^2 - b)(x + b)$', expressionAnswer: '-x^3-bx^2+bx+b^2' },
            ],
            solution: 'a) $3x^2y - 3x^3$, b) $3x^2 - 9x$, c) $x^5 - 3x^4$, d) $-3l^3 + 6l - 2k$, e) $-b^3 - 2b^2 + 4b$, f) $-x^3 - bx^2 + bx + b^2$',
            hideInlineSolution: true,
            hints: ['Bruk potensregelen $x^a \\cdot x^b = x^{a+b}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R6
        {
          id: '1t-1-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$(x + 2)(x + 5)$', expressionAnswer: 'x^2+7x+10' },
              { label: 'b', task: '$(x - 3)(x - 4)$', expressionAnswer: 'x^2-7x+12' },
              { label: 'c', task: '$3(x + 1)(x + 2)$', expressionAnswer: '3x^2+9x+6' },
              { label: 'd', task: '$(2x + 1)(3x + 2)$', expressionAnswer: '6x^2+7x+2' },
              { label: 'e', task: '$2(2x - 2)(x + 5)$', expressionAnswer: '4x^2+16x-20' },
              { label: 'f', task: '$-(x - 3)(y - 9)$', expressionAnswer: '-xy+9x+3y-27' },
            ],
            solution: 'a) $x^2 + 7x + 10$, b) $x^2 - 7x + 12$, c) $3x^2 + 9x + 6$, d) $6x^2 + 7x + 2$, e) $4x^2 + 16x - 20$, f) $-xy + 9x + 3y - 27$',
            hideInlineSolution: true,
            hints: ['$(a + b)(c + d) = ac + ad + bc + bd$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R7
        {
          id: '1t-1-2-rep-7',
          type: 'exercise',
          exercise: {
            id: '1t-1-2-rep-ex-7',
            number: 'R7',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$x(x + 2)(x + 1)$', expressionAnswer: 'x^3+3x^2+2x' },
              { label: 'b', task: '$x^2 - (x + 2)(x + 2)$', expressionAnswer: '-4x-4' },
              { label: 'c', task: '$(x + 1)(x + 3)(x + 1)$', expressionAnswer: 'x^3+5x^2+7x+3' },
              { label: 'd', task: '$(x + 5)(x + 3) \\cdot 3$', expressionAnswer: '3x^2+24x+45' },
              { label: 'e', task: '$-2(x - 1)(3x + 6)$', expressionAnswer: '-6x^2-6x+12' },
              { label: 'f', task: '$10 - (x + 4)(y - 2)$', expressionAnswer: '-xy+2x-4y+18' },
            ],
            solution: 'a) $x^3 + 3x^2 + 2x$, b) $-4x - 4$, c) $x^3 + 5x^2 + 7x + 3$, d) $3x^2 + 24x + 45$, e) $-6x^2 - 6x + 12$, f) $-xy + 2x - 4y + 18$',
            hideInlineSolution: true,
            hints: ['Ta én parentes om gangen. Start med å multiplisere to parenteser først.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_1_4: TextbookChapter = {
  id: '1t-1-4',
  courseId: '1t',
  chapterNumber: '1.4',
  title: 'Brøkregning',
  description: 'Lær å gange, dele, forkorte og utvide brøker, samt legge sammen brøker med lik og ulik nevner.',
  estimatedMinutes: 60,
  competenceGoals: ['utforske og beskrive egenskaper ved brøker og operasjoner med brøker'],
  content: [
    // ========== Å GANGE BRØKER ==========
    {
      id: '1t-1-4-intro',
      type: 'text',
      content: `I dette kapitlet skal vi lære å regne med brøker. Vi starter med å se på hvordan vi ganger brøker sammen.`,
    },

    // Illustrasjon: Brøkregning
    {
      id: '1t-1-4-brokregning-bilde',
      type: 'image',
      src: '/images/algebra/brokregning.svg',
      alt: 'Visualisering av brøkregning med teller og nevner',
      caption: 'Brøkregning - grunnleggende prinsipper',
    },

    {
      id: '1t-1-4-theorem-mult',
      type: 'theorem',
      title: 'Å gange brøker',
      content: `$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d} = \\frac{ac}{bd}$$

Når vi skal gange to brøker med hverandre så ganger vi det over brøkstreken med det over brøkstreken og det under brøkstreken med det under brøkstreken.`,
    },
    {
      id: '1t-1-4-text-heltall',
      type: 'text',
      content: `**Å gange et heltall med en brøk:**

$$a \\cdot \\frac{b}{c} = \\frac{a}{1} \\cdot \\frac{b}{c} = \\frac{a \\cdot b}{1 \\cdot c} = \\frac{ab}{c}$$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Gang sammen brøkene:\n\na) $\\frac{1}{5} \\cdot \\frac{3}{2}$\n\nb) $3 \\cdot \\frac{3}{2}$',
      solution: `**Løsning:**

a) $\\frac{1}{5} \\cdot \\frac{3}{2} = \\frac{1 \\cdot 3}{5 \\cdot 2} = \\frac{3}{10}$

b) $3 \\cdot \\frac{3}{2} = \\frac{3}{1} \\cdot \\frac{3}{2} = \\frac{3 \\cdot 3}{1 \\cdot 2} = \\frac{9}{2}$`,
      solutionVideo: 'qsSbmOSSmo8',
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gang sammen brøkene',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{4} \\cdot \\frac{1}{7}$', solution: '$\\frac{3}{4} \\cdot \\frac{1}{7} = \\frac{3}{28}$', expressionAnswer: '3/28' },
          { label: 'b', task: '$\\frac{9}{2} \\cdot \\frac{3}{7}$', solution: '$\\frac{9}{2} \\cdot \\frac{3}{7} = \\frac{27}{14}$', expressionAnswer: '27/14' },
          { label: 'c', task: '$7 \\cdot \\frac{2}{5}$', solution: '$7 \\cdot \\frac{2}{5} = \\frac{14}{5}$', expressionAnswer: '14/5' },
          { label: 'd', task: '$\\frac{1}{3} \\cdot \\frac{2}{3} \\cdot \\frac{4}{3}$', solution: '$\\frac{1}{3} \\cdot \\frac{2}{3} \\cdot \\frac{4}{3} = \\frac{8}{27}$', expressionAnswer: '8/27' },
          { label: 'e', task: '$\\frac{5}{4} \\cdot 3$', solution: '$\\frac{5}{4} \\cdot 3 = \\frac{15}{4}$', expressionAnswer: '15/4' },
          { label: 'f', task: '$2 \\cdot \\frac{3}{7} \\cdot \\frac{1}{5}$', solution: '$2 \\cdot \\frac{3}{7} \\cdot \\frac{1}{5} = \\frac{6}{35}$', expressionAnswer: '6/35' },
        ],
        hints: ['Husk: Gang teller med teller og nevner med nevner'],
        solution: 'a) $\\frac{3}{28}$, b) $\\frac{27}{14}$, c) $\\frac{14}{5}$, d) $\\frac{8}{27}$, e) $\\frac{15}{4}$, f) $\\frac{6}{35}$',
        solutionVideo: 'bbQhT1UnfD4',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== Å FORKORTE BRØKER ==========
    {
      id: '1t-1-4-text-forkorte',
      type: 'text',
      content: `**Å forkorte brøker**

Når vi skal forkorte brøker kan det være nyttig å huske at vi kan faktorisere tall. Eksempelvis er: $8 = 4 \\cdot 2$ og $12 = 4 \\cdot 3 = 2 \\cdot 2 \\cdot 3$ eller $12 = 2 \\cdot 6$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Forkort brøkene:\n\na) $\\frac{8}{6}$\n\nb) $\\frac{45}{75}$',
      solution: `**Løsning:**

a) $\\frac{8}{6} = \\frac{4 \\cdot {\\color{red}2}}{3 \\cdot {\\color{red}2}} = \\frac{4}{3}$

b) $\\frac{45}{75} = \\frac{{\\color{red}3} \\cdot 15}{{\\color{red}3} \\cdot 25} = \\frac{3 \\cdot {\\color{red}5}}{{\\color{red}5} \\cdot 5} = \\frac{3}{5}$

**NB:** Om vi ser det kan vi også gjøre det enda enklere:
$\\frac{45}{75} = \\frac{3 \\cdot {\\color{red}15}}{5 \\cdot {\\color{red}15}} = \\frac{3}{5}$

*Begge fremgangsmåter er riktige. I begynnelsen kan du ha fokus på å forkorte det du kan. Etterhvert kan du tenke mer på hvordan du kan forkorte med så stort tall som mulig.*`,
      solutionVideo: 'w2Iskug2cuQ',
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forkort brøkene så mye som mulig. Husk at $\\frac{a}{1} = a$',
        subTasks: [
          { label: 'a', task: '$\\frac{10}{4}$', solution: '$\\frac{10}{4} = \\frac{5}{2}$', expressionAnswer: '5/2' },
          { label: 'b', task: '$\\frac{25}{10}$', solution: '$\\frac{25}{10} = \\frac{5}{2}$', expressionAnswer: '5/2' },
          { label: 'c', task: '$\\frac{10}{5}$', solution: '$\\frac{10}{5} = 2$', answer: 2 },
          { label: 'd', task: '$\\frac{81}{27}$', solution: '$\\frac{81}{27} = 3$', answer: 3 },
          { label: 'e', task: '$\\frac{2 \\cdot 4}{3 \\cdot 4}$', solution: '$\\frac{2 \\cdot 4}{3 \\cdot 4} = \\frac{2}{3}$', expressionAnswer: '2/3' },
          { label: 'f', task: '$\\frac{12 \\cdot 20}{4 \\cdot 6}$', solution: '$\\frac{12 \\cdot 20}{4 \\cdot 6} = 10$', answer: 10 },
        ],
        hints: ['Finn felles faktorer i teller og nevner'],
        solution: 'a) $\\frac{5}{2}$, b) $\\frac{5}{2}$, c) $2$, d) $3$, e) $\\frac{2}{3}$, f) $10$',
        solutionVideo: '0izwvXP6QpA',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MULTIPLISERE OG FORKORTE ==========
    {
      id: '1t-1-4-text-mult-forkort',
      type: 'text',
      content: `**Multiplisere og forkorte brøker**

Når vi ganger brøker kan vi ofte forkorte underveis for å gjøre regnestykket enklere.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-1-4-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Regn ut og forkort hvis mulig:\n\na) $\\frac{10}{5} \\cdot \\frac{3}{2}$\n\nb) $\\frac{6}{5} \\cdot \\frac{15}{2}$\n\nc) $4 \\cdot \\frac{3}{4}$',
      solution: `**Løsning:**

a) $\\frac{10}{5} \\cdot \\frac{3}{2} = \\frac{{\\color{red}10} \\cdot 3}{{\\color{red}10}} = 3$

**NB:** Legg merke til at vi ganget sammen det under brøken med en gang, men ikke det over brøken. Dette er fordi vi raskest mulig vil kunne stryke 10 over og under brøkstreken.

b) $\\frac{6}{5} \\cdot \\frac{15}{2} = \\frac{6 \\cdot 15}{5 \\cdot 2} = \\frac{{\\color{red}2} \\cdot 3 \\cdot 3 \\cdot {\\color{blue}5}}{{\\color{blue}5} \\cdot {\\color{red}2}} = 9$

c) $4 \\cdot \\frac{3}{4} = 3$ fordi $4 \\cdot \\frac{3}{4} = \\frac{4}{1} \\cdot \\frac{3}{4} = \\frac{{\\color{red}4} \\cdot 3}{1 \\cdot {\\color{red}4}} = 3$`,
      solutionVideo: '2jEju9aEXPs',
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{2}{5} \\cdot \\frac{3}{2}$', solution: '$\\frac{2}{5} \\cdot \\frac{3}{2} = \\frac{3}{5}$', expressionAnswer: '3/5' },
          { label: 'b', task: '$\\frac{12}{3} \\cdot \\frac{3}{4}$', solution: '$\\frac{12}{3} \\cdot \\frac{3}{4} = 3$', answer: 3 },
          { label: 'c', task: '$5 \\cdot \\frac{3}{4}$', solution: '$5 \\cdot \\frac{3}{4} = \\frac{15}{4}$', expressionAnswer: '15/4' },
          { label: 'd', task: '$\\frac{12}{5} \\cdot \\frac{15}{6}$', solution: '$\\frac{12}{5} \\cdot \\frac{15}{6} = 6$', answer: 6 },
          { label: 'e', task: '$\\frac{8}{30} \\cdot \\frac{15}{4}$', solution: '$\\frac{8}{30} \\cdot \\frac{15}{4} = 1$', answer: 1 },
          { label: 'f', task: '$\\frac{7}{26} \\cdot \\frac{13}{14} \\cdot 6$', solution: '$\\frac{7}{26} \\cdot \\frac{13}{14} \\cdot 6 = \\frac{3}{2}$', expressionAnswer: '3/2' },
        ],
        hints: ['Prøv å forkorte før du ganger for å få enklere tall'],
        solution: 'a) $\\frac{3}{5}$, b) $3$, c) $\\frac{15}{4}$, d) $6$, e) $1$, f) $\\frac{3}{2}$',
        solutionVideo: 'BnX4wmsLCYc',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== Å DELE BRØKER ==========
    {
      id: '1t-1-4-theorem-div',
      type: 'theorem',
      title: 'Å dele brøker',
      content: `Når vi deler en brøk på en annen brøk så kan vi:

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}$$

Et spesialtilfelle av dette er når vi deler med et heltall:

$$\\frac{a}{b} \\div c = \\frac{a}{b} \\div \\frac{c}{1} = \\frac{a}{b} \\cdot \\frac{1}{c} = \\frac{a}{b \\cdot c}$$`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-1-4-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Regn ut:\n\na) $\\frac{2}{7} \\div \\frac{3}{2}$\n\nb) $7 \\div \\frac{15}{2}$\n\nc) $\\frac{3}{4} \\div 9$',
      solution: `**Løsning:**

a) $\\frac{2}{7} \\div \\frac{3}{2} = \\frac{2}{7} \\cdot \\frac{2}{3} = \\frac{4}{21}$

b) $7 \\div \\frac{15}{2} = \\frac{7}{1} \\cdot \\frac{2}{15} = \\frac{14}{15}$

c) $\\frac{3}{4} \\div 9 = \\frac{3}{4} \\div \\frac{9}{1} = \\frac{3}{4} \\cdot \\frac{1}{9} = \\frac{3 \\cdot 1}{4 \\cdot 9} = \\frac{{\\color{red}3} \\cdot 1}{4 \\cdot {\\color{red}3} \\cdot 3} = \\frac{1}{12}$`,
      solutionVideo: '8qJoxtSMFFQ',
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utfør divisjonen og forkort brøken hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{7}{5} \\div \\frac{3}{2}$', solution: '$\\frac{7}{5} \\div \\frac{3}{2} = \\frac{14}{15}$', expressionAnswer: '14/15' },
          { label: 'b', task: '$\\frac{3}{8} \\div \\frac{5}{2}$', solution: '$\\frac{3}{8} \\div \\frac{5}{2} = \\frac{3}{20}$', expressionAnswer: '3/20' },
          { label: 'c', task: '$\\frac{10}{2} \\div \\frac{5}{2}$', solution: '$\\frac{10}{2} \\div \\frac{5}{2} = 2$', answer: 2 },
          { label: 'd', task: '$8 \\div \\frac{3}{2}$', solution: '$8 \\div \\frac{3}{2} = \\frac{16}{3}$', expressionAnswer: '16/3' },
          { label: 'e', task: '$\\frac{5}{6} \\div 3$', solution: '$\\frac{5}{6} \\div 3 = \\frac{5}{18}$', expressionAnswer: '5/18' },
          { label: 'f', task: '$3 \\cdot \\frac{1}{5} \\div \\frac{7}{2}$', solution: '$3 \\cdot \\frac{1}{5} \\div \\frac{7}{2} = \\frac{6}{35}$', expressionAnswer: '6/35' },
        ],
        hints: ['Husk: Å dele med en brøk er det samme som å gange med den omvendte brøken'],
        solution: 'a) $\\frac{14}{15}$, b) $\\frac{3}{20}$, c) $2$, d) $\\frac{16}{3}$, e) $\\frac{5}{18}$, f) $\\frac{6}{35}$',
        solutionVideo: 'k_eBSOdeOQc',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BRUDDEN BRØK ==========
    {
      id: '1t-1-4-theorem-brudden',
      type: 'theorem',
      title: 'Brudden brøk',
      content: `$$\\frac{\\frac{a}{b}}{\\frac{c}{d}} = \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c} = \\frac{ad}{bc}$$`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '1t-1-4-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Løs den brudne brøken:\n\n$$\\frac{\\frac{2}{3}}{\\frac{5}{6}}$$',
      solution: `**Løsning:**

**Alternativ 1:**
$$\\frac{\\frac{2}{3}}{\\frac{5}{6}} = \\frac{2}{3} \\div \\frac{5}{6} = \\frac{2}{3} \\cdot \\frac{6}{5} = \\frac{2 \\cdot 2 \\cdot {\\color{red}3}}{{\\color{red}3} \\cdot 5} = \\frac{4}{5}$$

**Alternativ 2:**
$$\\frac{\\frac{2}{3}}{\\frac{5}{6}} = \\frac{\\frac{2}{3} \\cdot {\\color{blue}6}}{\\frac{5}{{\\color{blue}6}} \\cdot {\\color{blue}6}} = \\frac{\\frac{2 \\cdot 6}{3}}{\\frac{5 \\cdot {\\color{red}6}}{{\\color{red}6}}} = \\frac{\\frac{2 \\cdot 2 \\cdot {\\color{red}3}}{{\\color{red}3}}}{5} = \\frac{4}{5}$$`,
      solutionVideo: 'uxetXc8Tk1Q',
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '1t-1-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utfør divisjonen og forkort brøken hvis mulig. NB: For høyest læringsutbytte anbefales å løse som alternativ 2 i eksempelet.',
        subTasks: [
          { label: 'a', task: '$\\frac{\\frac{1}{3}}{\\frac{2}{3}}$', solution: '$\\frac{\\frac{1}{3}}{\\frac{2}{3}} = \\frac{1}{2}$', expressionAnswer: '1/2' },
          { label: 'b', task: '$\\frac{\\frac{1}{4}}{\\frac{2}{12}}$', solution: '$\\frac{\\frac{1}{4}}{\\frac{2}{12}} = \\frac{3}{2}$', expressionAnswer: '3/2' },
          { label: 'c', task: '$\\frac{5}{\\frac{2}{3}}$', solution: '$\\frac{5}{\\frac{2}{3}} = \\frac{15}{2}$', expressionAnswer: '15/2' },
        ],
        hints: ['En brudden brøk kan skrives som en divisjon'],
        solution: 'a) $\\frac{1}{2}$, b) $\\frac{3}{2}$, c) $\\frac{15}{2}$',
        solutionVideo: 'Y6ny8zmkD54',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LEGGE SAMMEN BRØKER MED LIK NEVNER ==========
    {
      id: '1t-1-4-theorem-addlik',
      type: 'theorem',
      title: 'Å legge sammen brøker med lik nevner',
      content: `$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$`,
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: '1t-1-4-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: 'Trekk sammen brøkene:\n\n$$\\frac{1}{5} + \\frac{2}{5}$$',
      solution: `**Løsning:**

$$\\frac{1}{5} + \\frac{2}{5} = \\frac{1 + 2}{5} = \\frac{3}{5}$$`,
      solutionVideo: '-ax2cbE3kkw',
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: '1t-1-4-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: 'Trekk sammen brøkene og forkort hvis mulig:\n\n$$\\frac{9}{4} - \\frac{1}{4}$$',
      solution: `**Løsning:**

$$\\frac{9}{4} - \\frac{1}{4} = \\frac{9 - 1}{4} = \\frac{8}{4} = 2$$`,
      solutionVideo: '8eA_dk2bg5o',
    },

    // ========== OPPGAVE 6 ==========
    {
      id: '1t-1-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Trekk sammen brøkene og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{7} + \\frac{2}{7}$', solution: '$\\frac{3}{7} + \\frac{2}{7} = \\frac{5}{7}$', expressionAnswer: '5/7' },
          { label: 'b', task: '$\\frac{7}{3} + \\frac{8}{3}$', solution: '$\\frac{7}{3} + \\frac{8}{3} = 5$', answer: 5 },
          { label: 'c', task: '$\\frac{9}{6} - \\frac{1}{6}$', solution: '$\\frac{9}{6} - \\frac{1}{6} = \\frac{4}{3}$', expressionAnswer: '4/3' },
          { label: 'd', task: '$\\frac{7}{4} - \\frac{3}{4}$', solution: '$\\frac{7}{4} - \\frac{3}{4} = 1$', answer: 1 },
          { label: 'e', task: '$\\frac{16}{5} + \\frac{2}{5} + \\frac{7}{5}$', solution: '$\\frac{16}{5} + \\frac{2}{5} + \\frac{7}{5} = 5$', answer: 5 },
          { label: 'f', task: '$\\frac{19}{23} - \\frac{18}{23} + \\frac{4}{23}$', solution: '$\\frac{19}{23} - \\frac{18}{23} + \\frac{4}{23} = \\frac{5}{23}$', expressionAnswer: '5/23' },
        ],
        hints: ['Når nevnerne er like, adderer eller subtraherer vi bare tellerne'],
        solution: 'a) $\\frac{5}{7}$, b) $5$, c) $\\frac{4}{3}$, d) $1$, e) $5$, f) $\\frac{5}{23}$',
        solutionVideo: 'eISYgBtzgm0',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== Å UTVIDE BRØKER ==========
    {
      id: '1t-1-4-text-utvide',
      type: 'text',
      content: `**Å utvide brøker**

Noen ganger ønsker vi å utvide brøker. For å utvide en brøk må vi gange med det samme tallet over og under brøkstreken. På den måten kan vi få en ny nevner uten å endre den faktiske verdien til brøken.`,
    },
    {
      id: '1t-1-4-warning-utvide',
      type: 'warning',
      content: `**NB:** Det er viktig å huske at du må gange BÅDE over og under samtidig. Det å gange kun oppe eller kun nede vil endre verdien til brøken og du vil ende opp med galt svar.`,
    },

    // ========== EKSEMPEL 8 ==========
    {
      id: '1t-1-4-example-8',
      type: 'example',
      title: 'Eksempel 8',
      problem: 'Utvid brøkene:\n\na) Utvid brøken $\\frac{5}{3}$ slik at nevneren blir 6\n\nb) Utvid brøken $\\frac{2}{5}$ slik at nevneren blir $10x$',
      solution: `**Løsning:**

a) $\\frac{5}{3} = \\frac{5 \\cdot 2}{3 \\cdot 2} = \\frac{10}{6}$

b) $\\frac{2}{5} = \\frac{2 \\cdot 2x}{5 \\cdot 2x} = \\frac{4x}{10x}$`,
      solutionVideo: 'Va5tudGkywI',
    },

    // ========== OPPGAVE 7 ==========
    {
      id: '1t-1-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Utvid brøken',
        subTasks: [
          { label: 'a', task: '$\\frac{7}{9}$ slik at nevneren blir 18', solution: '$\\frac{7}{9} = \\frac{14}{18}$', expressionAnswer: '14/18' },
          { label: 'b', task: '$\\frac{3}{2}$ slik at nevneren blir $2x$', solution: '$\\frac{3}{2} = \\frac{3x}{2x}$', expressionAnswer: '3x/(2x)' },
          { label: 'c', task: '$\\frac{8}{3}$ slik at nevneren blir $15x$', solution: '$\\frac{8}{3} = \\frac{40x}{15x}$', expressionAnswer: '40x/(15x)' },
        ],
        hints: ['Finn hva du må gange nevneren med for å få den nye nevneren, og gang telleren med det samme'],
        solution: 'a) $\\frac{14}{18}$, b) $\\frac{3x}{2x}$, c) $\\frac{40x}{15x}$',
        solutionVideo: '7Mcn7TwkF4Q',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BRØKER MED ULIK NEVNER ==========
    {
      id: '1t-1-4-text-uliknevner',
      type: 'text',
      content: `**Brøker med ulik nevner**

Når vi møter på brøker med ulik nevner må vi utvide en eller begge brøkene slik at vi får en fellesnevner. Da ser vi først om det finnes et tall som vi kun trenger å gange med en av nevnerne slik at vi får den andre nevneren.`,
    },

    // Illustrasjon: Fellesnevner
    {
      id: '1t-1-4-fellesnevner-bilde',
      type: 'image',
      src: '/images/algebra/fellesnevner.svg',
      alt: 'Hvordan finne fellesnevner ved å utvide brøker',
      caption: 'Fellesnevner - utviding av brøker for addisjon og subtraksjon',
    },

    // ========== EKSEMPEL 9 ==========
    {
      id: '1t-1-4-example-9',
      type: 'example',
      title: 'Eksempel 9',
      problem: 'Trekk sammen brøkene:\n\n$$\\frac{1}{2} + \\frac{2}{10}$$',
      solution: `**Løsning:**

$$\\frac{1}{2} + \\frac{2}{10} = \\frac{1 \\cdot 5}{2 \\cdot 5} + \\frac{2}{10} = \\frac{5}{10} + \\frac{2}{10} = \\frac{5 + 2}{10} = \\frac{7}{10}$$`,
      solutionVideo: 'wP4OsHmRsHw',
    },

    // ========== EKSEMPEL 10 ==========
    {
      id: '1t-1-4-example-10',
      type: 'example',
      title: 'Eksempel 10',
      problem: 'Trekk sammen:\n\n$$2 + \\frac{3}{7}$$',
      solution: `**Løsning:**

$$2 + \\frac{3}{7} = \\frac{2}{1} + \\frac{3}{7} = \\frac{2 \\cdot 7}{1 \\cdot 7} + \\frac{3}{7} = \\frac{14}{7} + \\frac{3}{7} = \\frac{17}{7}$$

Husk: $n = \\frac{n}{1}$`,
      solutionVideo: '6HJA-qNweVw',
    },

    // ========== OPPGAVE 8 ==========
    {
      id: '1t-1-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Trekk sammen brøkene og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{4}{6} + \\frac{1}{3}$', solution: '$\\frac{4}{6} + \\frac{1}{3} = 1$', answer: 1 },
          { label: 'b', task: '$\\frac{4}{7} - \\frac{1}{14}$', solution: '$\\frac{4}{7} - \\frac{1}{14} = \\frac{1}{2}$', expressionAnswer: '1/2' },
          { label: 'c', task: '$\\frac{12}{8} + \\frac{1}{4}$', solution: '$\\frac{12}{8} + \\frac{1}{4} = \\frac{7}{4}$', expressionAnswer: '7/4' },
          { label: 'd', task: '$1 + \\frac{1}{5}$', solution: '$1 + \\frac{1}{5} = \\frac{6}{5}$', expressionAnswer: '6/5' },
          { label: 'e', task: '$\\frac{4}{2} - \\frac{1}{6} + 1$', solution: '$\\frac{4}{2} - \\frac{1}{6} + 1 = \\frac{17}{6}$', expressionAnswer: '17/6' },
          { label: 'f', task: '$\\frac{7}{12} + \\frac{1}{6} + 2$', solution: '$\\frac{7}{12} + \\frac{1}{6} + 2 = \\frac{11}{4}$', expressionAnswer: '11/4' },
        ],
        hints: ['Finn en fellesnevner før du legger sammen'],
        solution: 'a) $1$, b) $\\frac{1}{2}$, c) $\\frac{7}{4}$, d) $\\frac{6}{5}$, e) $\\frac{17}{6}$, f) $\\frac{11}{4}$',
        solutionVideo: 'Zw67qGw10oc',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GANGE NEVNERNE ==========
    {
      id: '1t-1-4-text-gangenevner',
      type: 'text',
      content: `**Å gange nevnerne med hverandre for å finne fellesnevner**

Når det ikke går å kun gange en av nevnerne så må vi gange begge. En metode som alltid fungerer når vi skal finne fellesnevner for to brøker er å utvide den første brøken med nevneren i den andre brøken og den andre brøken med nevneren i den første brøken.`,
    },

    // ========== EKSEMPEL 11 ==========
    {
      id: '1t-1-4-example-11',
      type: 'example',
      title: 'Eksempel 11',
      problem: 'Trekk sammen brøkene:\n\n$$\\frac{1}{2} + \\frac{3}{7}$$',
      solution: `**Løsning:**

$$\\frac{1}{2} + \\frac{3}{7} = \\frac{1 \\cdot 7}{2 \\cdot 7} + \\frac{3 \\cdot 2}{7 \\cdot 2} = \\frac{7}{14} + \\frac{6}{14} = \\frac{13}{14}$$`,
      solutionVideo: '1WmmzOBu82M',
    },

    // ========== OPPGAVE 9 ==========
    {
      id: '1t-1-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Trekk sammen brøkene og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2} + \\frac{1}{3}$', solution: '$\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$', expressionAnswer: '5/6' },
          { label: 'b', task: '$\\frac{4}{3} + \\frac{2}{7}$', solution: '$\\frac{4}{3} + \\frac{2}{7} = \\frac{34}{21}$', expressionAnswer: '34/21' },
          { label: 'c', task: '$\\frac{2}{5} - \\frac{1}{4}$', solution: '$\\frac{2}{5} - \\frac{1}{4} = \\frac{3}{20}$', expressionAnswer: '3/20' },
          { label: 'd', task: '$\\frac{3}{9} + \\frac{1}{5}$', solution: '$\\frac{3}{9} + \\frac{1}{5} = \\frac{8}{15}$', expressionAnswer: '8/15' },
          { label: 'e', task: '$\\frac{1}{2} - 3 + \\frac{1}{5}$', solution: '$\\frac{1}{2} - 3 + \\frac{1}{5} = -\\frac{23}{10}$', expressionAnswer: '-23/10' },
          { label: 'f', task: '$\\frac{7}{2} - \\frac{1}{11} - 2$', solution: '$\\frac{7}{2} - \\frac{1}{11} - 2 = \\frac{31}{22}$', expressionAnswer: '31/22' },
        ],
        hints: ['Utvid begge brøkene for å få fellesnevner'],
        solution: 'a) $\\frac{5}{6}$, b) $\\frac{34}{21}$, c) $\\frac{3}{20}$, d) $\\frac{8}{15}$, e) $-\\frac{23}{10}$, f) $\\frac{31}{22}$',
        solutionVideo: '9P-uyNKGiFo',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MINSTE FELLES NEVNER ==========
    {
      id: '1t-1-4-text-mfn',
      type: 'text',
      content: `**Å finne minste felles nevner**

Når vi bruker metoden ovenfor kan det hende at vi får en unødvendig høy fellesnevner. Om vi for eksempel skal legge sammen: $\\frac{1}{21} + \\frac{1}{14}$ vil vi få $21 \\cdot 14 = 294$ som nevner.

Dette vil skje fordi vi har felles faktorer i nevnerne våre. Vi ser vi kan faktorisere utrykket slik: $\\frac{1}{3 \\cdot 7} + \\frac{1}{2 \\cdot 7}$. Begge nevnerne inneholder altså faktoren 7, så dette er felles. Den første nevneren har en 3-er som den andre nevneren ikke har og den andre nevneren har en 2-er som den første ikke har. Da kan vi legge til det som mangler i hver av brøkene for å få en felles nevner:

$$\\frac{1}{3 \\cdot 7} + \\frac{1}{2 \\cdot 7} = \\frac{2 \\cdot 1}{2 \\cdot 3 \\cdot 7} + \\frac{3 \\cdot 1}{3 \\cdot 2 \\cdot 7} = \\frac{2}{42} + \\frac{3}{42} = \\frac{5}{42}$$`,
    },

    // ========== EKSEMPEL 12 ==========
    {
      id: '1t-1-4-example-12',
      type: 'example',
      title: 'Eksempel 12',
      problem: 'Trekk sammen brøkene:\n\n$$\\frac{1}{10} + \\frac{1}{15}$$',
      solution: `**Løsning:**

$$\\frac{1}{10} + \\frac{1}{15} = \\frac{1}{{\\color{blue}5} \\cdot 2} + \\frac{1}{{\\color{blue}5} \\cdot 3} = \\frac{1 \\cdot {\\color{green}3}}{{\\color{blue}5} \\cdot 2 \\cdot {\\color{green}3}} + \\frac{1 \\cdot {\\color{green}2}}{{\\color{blue}5} \\cdot 3 \\cdot {\\color{green}2}} = \\frac{3}{30} + \\frac{2}{30} = \\frac{{\\color{red}5}}{30} = \\frac{1}{6}$$`,
      solutionVideo: 'p027J0GO8VQ',
    },

    // ========== OPPGAVE 10 ==========
    {
      id: '1t-1-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: '1t-1-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Benytt minste felles nevner for å trekke sammen brøkene og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{6} + \\frac{1}{8}$', solution: '$\\frac{1}{6} + \\frac{1}{8} = \\frac{7}{24}$', expressionAnswer: '7/24' },
          { label: 'b', task: '$\\frac{4}{14} + \\frac{2}{10}$', solution: '$\\frac{4}{14} + \\frac{2}{10} = \\frac{17}{35}$', expressionAnswer: '17/35' },
          { label: 'c', task: '$\\frac{3}{14} - \\frac{1}{21}$', solution: '$\\frac{3}{14} - \\frac{1}{21} = \\frac{1}{6}$', expressionAnswer: '1/6' },
          { label: 'd', task: '$\\frac{1}{9} + \\frac{1}{12}$', solution: '$\\frac{1}{9} + \\frac{1}{12} = \\frac{7}{36}$', expressionAnswer: '7/36' },
          { label: 'e', task: '$\\frac{1}{20} + \\frac{1}{25}$', solution: '$\\frac{1}{20} + \\frac{1}{25} = \\frac{9}{100}$', expressionAnswer: '9/100' },
          { label: 'f', task: '$\\frac{7}{22} - \\frac{1}{33} - 1$', solution: '$\\frac{7}{22} - \\frac{1}{33} - 1 = -\\frac{47}{66}$', expressionAnswer: '-47/66' },
        ],
        hints: ['Faktoriser nevnerne for å finne felles faktorer'],
        solution: 'a) $\\frac{7}{24}$, b) $\\frac{17}{35}$, c) $\\frac{1}{6}$, d) $\\frac{7}{36}$, e) $\\frac{9}{100}$, f) $-\\frac{47}{66}$',
        solutionVideo: 'QX3Jz7NPFrA',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '1t-1-4-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        // R1
        {
          id: '1t-1-4-rep-1',
          type: 'exercise',
          exercise: {
            id: '1t-1-4-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gang sammen brøkene',
            subTasks: [
              { label: 'a', task: '$\\frac{2}{5} \\cdot \\frac{3}{7}$', expressionAnswer: '6/35' },
              { label: 'b', task: '$\\frac{11}{2} \\cdot \\frac{5}{6}$', expressionAnswer: '55/12' },
              { label: 'c', task: '$3 \\cdot \\frac{1}{8}$', expressionAnswer: '3/8' },
              { label: 'd', task: '$\\frac{3}{2} \\cdot \\frac{1}{4} \\cdot \\frac{9}{8}$', expressionAnswer: '27/64' },
              { label: 'e', task: '$\\frac{2}{13} \\cdot 9$', expressionAnswer: '18/13' },
              { label: 'f', task: '$9 \\cdot \\frac{10}{7} \\cdot \\frac{10}{7}$', expressionAnswer: '900/49' },
            ],
            solution: 'a) $\\frac{6}{35}$, b) $\\frac{55}{12}$, c) $\\frac{3}{8}$, d) $\\frac{27}{64}$, e) $\\frac{18}{13}$, f) $\\frac{900}{49}$',
            hideInlineSolution: true,
            hints: ['Gang teller med teller og nevner med nevner'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R2
        {
          id: '1t-1-4-rep-2',
          type: 'exercise',
          exercise: {
            id: '1t-1-4-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forkort brøkene så mye som mulig. Husk at $\\frac{a}{1} = a$',
            subTasks: [
              { label: 'a', task: '$\\frac{12}{3}$', answer: 4 },
              { label: 'b', task: '$\\frac{55}{22}$', expressionAnswer: '5/2' },
              { label: 'c', task: '$\\frac{200}{8}$', answer: 25 },
              { label: 'd', task: '$\\frac{125}{25}$', answer: 5 },
              { label: 'e', task: '$\\frac{25 \\cdot 40}{15 \\cdot 10}$', expressionAnswer: '20/3' },
              { label: 'f', task: '$\\frac{12 + 20}{4 \\cdot 5}$', expressionAnswer: '8/5' },
            ],
            solution: 'a) $4$, b) $\\frac{5}{2}$, c) $25$, d) $5$, e) $\\frac{20}{3}$, f) $\\frac{8}{5}$',
            hideInlineSolution: true,
            hints: ['Finn felles faktorer i teller og nevner'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R3
        {
          id: '1t-1-4-rep-3',
          type: 'exercise',
          exercise: {
            id: '1t-1-4-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut og forkort hvis mulig',
            subTasks: [
              { label: 'a', task: '$\\frac{15}{4} \\cdot \\frac{2}{3}$', expressionAnswer: '5/2' },
              { label: 'b', task: '$\\frac{2}{7} \\cdot \\frac{21}{5}$', expressionAnswer: '6/5' },
              { label: 'c', task: '$13 \\cdot \\frac{4}{13}$', answer: 4 },
              { label: 'd', task: '$\\frac{2}{9} \\cdot \\frac{5}{8}$', expressionAnswer: '5/36' },
              { label: 'e', task: '$\\frac{800}{30} \\cdot \\frac{15}{40}$', answer: 10 },
              { label: 'f', task: '$\\frac{1}{5} \\cdot \\frac{13}{4} \\cdot 15$', expressionAnswer: '39/4' },
            ],
            solution: 'a) $\\frac{5}{2}$, b) $\\frac{6}{5}$, c) $4$, d) $\\frac{5}{36}$, e) $10$, f) $\\frac{39}{4}$',
            hideInlineSolution: true,
            hints: ['Prøv å forkorte før du ganger'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R4
        {
          id: '1t-1-4-rep-4',
          type: 'exercise',
          exercise: {
            id: '1t-1-4-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Utfør divisjonen og forkort brøken hvis mulig',
            subTasks: [
              { label: 'a', task: '$\\frac{15}{2} \\div \\frac{3}{7}$', expressionAnswer: '35/2' },
              { label: 'b', task: '$\\frac{1}{3} \\div \\frac{16}{12}$', expressionAnswer: '1/4' },
              { label: 'c', task: '$\\frac{45}{25} \\div \\frac{10}{30}$', expressionAnswer: '27/5' },
              { label: 'd', task: '$70 \\div \\frac{14}{3}$', answer: 15 },
              { label: 'e', task: '$\\frac{5}{2} \\div 4$', expressionAnswer: '5/8' },
              { label: 'f', task: '$18 \\cdot \\frac{1}{20} \\div \\frac{27}{20} \\cdot 2$', expressionAnswer: '4/3' },
            ],
            solution: 'a) $\\frac{35}{2}$, b) $\\frac{1}{4}$, c) $\\frac{27}{5}$, d) $15$, e) $\\frac{5}{8}$, f) $\\frac{4}{3}$',
            hideInlineSolution: true,
            hints: ['Å dele med en brøk er det samme som å gange med den omvendte'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R5
        {
          id: '1t-1-4-rep-5',
          type: 'exercise',
          exercise: {
            id: '1t-1-4-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Utfør divisjonen og forkort brøken hvis mulig',
            subTasks: [
              { label: 'a', task: '$\\frac{\\frac{3}{8}}{\\frac{1}{4}}$', expressionAnswer: '3/2' },
              { label: 'b', task: '$\\frac{\\frac{7}{4}}{\\frac{6}{21}}$', expressionAnswer: '49/8' },
              { label: 'c', task: '$\\frac{\\frac{12}{9}}{7}$', expressionAnswer: '4/21' },
            ],
            solution: 'a) $\\frac{3}{2}$, b) $\\frac{49}{8}$, c) $\\frac{28}{3}$',
            hideInlineSolution: true,
            hints: ['En brudden brøk kan skrives som en divisjon'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R6
        {
          id: '1t-1-4-rep-6',
          type: 'exercise',
          exercise: {
            id: '1t-1-4-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'lett',
            task: 'Trekk sammen brøkene og forkort hvis mulig',
            subTasks: [
              { label: 'a', task: '$\\frac{2}{5} + \\frac{6}{5}$', expressionAnswer: '8/5' },
              { label: 'b', task: '$\\frac{10}{4} + \\frac{6}{4}$', answer: 4 },
              { label: 'c', task: '$\\frac{19}{7} - \\frac{2}{7}$', expressionAnswer: '17/7' },
              { label: 'd', task: '$\\frac{25}{22} - \\frac{8}{22}$', expressionAnswer: '17/22' },
              { label: 'e', task: '$\\frac{40}{35} + \\frac{2}{35} + \\frac{7}{35}$', expressionAnswer: '7/5' },
              { label: 'f', task: '$\\frac{22}{3} - \\frac{14}{3} + \\frac{7}{3}$', answer: 5 },
            ],
            solution: 'a) $\\frac{8}{5}$, b) $4$, c) $\\frac{17}{7}$, d) $\\frac{17}{22}$, e) $\\frac{7}{5}$, f) $5$',
            hideInlineSolution: true,
            hints: ['Når nevnerne er like, adderer eller subtraherer vi bare tellerne'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R7
        {
          id: '1t-1-4-rep-7',
          type: 'exercise',
          exercise: {
            id: '1t-1-4-rep-ex-7',
            number: 'R7',
            type: 'classic',
            difficulty: 'lett',
            task: 'Utvid brøken',
            subTasks: [
              { label: 'a', task: '$\\frac{5}{7}$ slik at nevneren blir 14', expressionAnswer: '10/14' },
              { label: 'b', task: '$\\frac{7}{5}$ slik at nevneren blir $5x$', expressionAnswer: '7x/(5x)' },
              { label: 'c', task: '$\\frac{3}{10}$ slik at nevneren blir $20x$', expressionAnswer: '6x/(20x)' },
            ],
            solution: 'a) $\\frac{10}{14}$, b) $\\frac{7x}{5x}$, c) $\\frac{6x}{20x}$',
            hideInlineSolution: true,
            hints: ['Gang både teller og nevner med samme tall'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R8
        {
          id: '1t-1-4-rep-8',
          type: 'exercise',
          exercise: {
            id: '1t-1-4-rep-ex-8',
            number: 'R8',
            type: 'classic',
            difficulty: 'medium',
            task: 'Trekk sammen brøkene og forkort hvis mulig',
            subTasks: [
              { label: 'a', task: '$\\frac{3}{8} + \\frac{1}{2}$', expressionAnswer: '7/8' },
              { label: 'b', task: '$\\frac{3}{5} - \\frac{1}{10}$', expressionAnswer: '1/2' },
              { label: 'c', task: '$\\frac{12}{13} + \\frac{1}{26}$', expressionAnswer: '25/26' },
              { label: 'd', task: '$2 + \\frac{1}{10}$', expressionAnswer: '21/10' },
              { label: 'e', task: '$\\frac{8}{20} - \\frac{1}{5} + 1$', expressionAnswer: '6/5' },
              { label: 'f', task: '$\\frac{1}{11} + \\frac{1}{66} - 1$', expressionAnswer: '-59/66' },
            ],
            solution: 'a) $\\frac{7}{8}$, b) $\\frac{1}{2}$, c) $\\frac{25}{26}$, d) $\\frac{21}{10}$, e) $\\frac{6}{5}$, f) $-\\frac{59}{66}$',
            hideInlineSolution: true,
            hints: ['Finn fellesnevner før du legger sammen'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R9
        {
          id: '1t-1-4-rep-9',
          type: 'exercise',
          exercise: {
            id: '1t-1-4-rep-ex-9',
            number: 'R9',
            type: 'classic',
            difficulty: 'medium',
            task: 'Trekk sammen brøkene og forkort hvis mulig',
            subTasks: [
              { label: 'a', task: '$\\frac{2}{5} + \\frac{2}{4}$', expressionAnswer: '9/10' },
              { label: 'b', task: '$\\frac{2}{3} - \\frac{4}{7}$', expressionAnswer: '2/21' },
              { label: 'c', task: '$\\frac{7}{5} - \\frac{5}{3}$', expressionAnswer: '-4/15' },
              { label: 'd', task: '$\\frac{30}{8} + 1$', expressionAnswer: '19/4' },
              { label: 'e', task: '$\\frac{2}{7} - 2 + \\frac{5}{2}$', expressionAnswer: '11/14' },
              { label: 'f', task: '$\\frac{7}{3} - \\frac{9}{10} + 3$', expressionAnswer: '133/30' },
            ],
            solution: 'a) $\\frac{9}{10}$, b) $\\frac{2}{21}$, c) $-\\frac{4}{15}$, d) $\\frac{19}{4}$, e) $\\frac{11}{14}$, f) $\\frac{133}{30}$',
            hideInlineSolution: true,
            hints: ['Utvid begge brøkene for å få fellesnevner'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // R10
        {
          id: '1t-1-4-rep-10',
          type: 'exercise',
          exercise: {
            id: '1t-1-4-rep-ex-10',
            number: 'R10',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Benytt minste felles nevner for å trekke sammen brøkene og forkort hvis mulig',
            subTasks: [
              { label: 'a', task: '$\\frac{1}{10} + \\frac{1}{20}$', expressionAnswer: '3/20' },
              { label: 'b', task: '$\\frac{1}{6} + \\frac{3}{8}$', expressionAnswer: '13/24' },
              { label: 'c', task: '$\\frac{30}{9} - \\frac{1}{12}$', expressionAnswer: '13/4' },
              { label: 'd', task: '$\\frac{20}{90} + \\frac{30}{180}$', expressionAnswer: '7/18' },
              { label: 'e', task: '$\\frac{40}{200} + \\frac{10}{250}$', expressionAnswer: '6/25' },
              { label: 'f', task: '$\\frac{2}{6} - \\frac{10}{33} - 2$', expressionAnswer: '-65/33' },
            ],
            solution: 'a) $\\frac{3}{20}$, b) $\\frac{13}{24}$, c) $\\frac{13}{4}$, d) $\\frac{7}{18}$, e) $\\frac{6}{25}$, f) $-\\frac{65}{33}$',
            hideInlineSolution: true,
            hints: ['Faktoriser nevnerne for å finne felles faktorer'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_1_6: TextbookChapter = {
  id: '1t-1-6',
  courseId: '1t',
  chapterNumber: '1.6',
  title: 'Rasjonale uttrykk',
  description: 'Lær å forkorte, multiplisere, dividere og trekke sammen brøker med algebraiske uttrykk, samt løse brøklikninger.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forenkle algebraiske brøkuttrykk',
    'løse likninger med brøker',
  ],
  content: [
    // ========== DEL 1: BRØKER MED ALGEBRAISKE UTTRYKK ==========
    {
      id: '1t-1-6-intro',
      type: 'text',
      content: `## Brøker med algebraiske uttrykk

**Nødvendige forkunnskaper:** Algebra og faktorisering

I dette kapitlet skal vi lære å regne med brøker som inneholder algebraiske uttrykk (bokstaver). Vi skal se på hvordan vi forkorter, multipliserer, dividerer og trekker sammen slike brøker.`,
    },

    // ========== EKSEMPEL 1: Forkorte brøker ==========
    {
      id: '1t-1-6-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Forkort brøkene:

a) $\\frac{2x}{3x}$

b) $\\frac{3x - 6}{6}$

c) $\\frac{x^2 - 5x + 6}{x^2 - 4}$`,
      solution: `**Løsning:**

a) $\\frac{2x}{3x} = \\frac{2 \\cdot x}{3 \\cdot x} = \\frac{2}{3}$

b) $\\frac{3x - 6}{6} = \\frac{3 \\cdot (x - 2)}{3 \\cdot 2} = \\frac{x - 2}{2}$

c) $\\frac{x^2 - 5x + 6}{x^2 - 4} = \\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \\frac{x - 3}{x + 2}$`,
    },

    // Oppgave 1: Forkort brøker
    {
      id: '1t-1-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forkort brøkene',
        subTasks: [
          { label: 'a', task: '$\\frac{4x}{9x}$', solution: '$\\frac{4x}{9x} = \\frac{4 \\cdot x}{9 \\cdot x} = \\frac{4}{9}$', expressionAnswer: '4/9' },
          { label: 'b', task: '$\\frac{2x}{x^2 - 2x}$', solution: '$\\frac{2x}{x^2 - 2x} = \\frac{2 \\cdot x}{x \\cdot (x - 2)} = \\frac{2}{x - 2}$', expressionAnswer: '2/(x-2)' },
          { label: 'c', task: '$\\frac{x^2 - 5x}{x - 5}$', solution: '$\\frac{x^2 - 5x}{x - 5} = \\frac{x \\cdot (x - 5)}{x - 5} = x$', expressionAnswer: 'x' },
          { label: 'd', task: '$\\frac{2x - 8}{4}$', solution: '$\\frac{2x - 8}{4} = \\frac{2 \\cdot (x - 4)}{2 \\cdot 2} = \\frac{x - 4}{2}$', expressionAnswer: '(x-4)/2' },
          { label: 'e', task: '$\\frac{x^2 - 9}{x + 3}$', solution: '$\\frac{x^2 - 9}{x + 3} = \\frac{(x - 3) \\cdot (x + 3)}{x + 3} = x - 3$', expressionAnswer: 'x-3' },
          { label: 'f', task: '$\\frac{x^2 - 7x + 12}{2x - 6}$', solution: '$\\frac{x^2 - 7x + 12}{2x - 6} = \\frac{(x - 3) \\cdot (x - 4)}{2 \\cdot (x - 3)} = \\frac{x - 4}{2}$', expressionAnswer: '(x-4)/2' },
        ],
        solution: 'a) $\\frac{4}{9}$, b) $\\frac{2}{x-2}$, c) $x$, d) $\\frac{x-4}{2}$, e) $x-3$, f) $\\frac{x-4}{2}$',
        hints: ['Faktoriser teller og nevner før du forkorter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 2: Multiplisere brøker ==========
    {
      id: '1t-1-6-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Multipliser og forkort brøkene:

a) $\\frac{2}{3x} \\cdot \\frac{x + 3}{4}$

b) $\\frac{x}{2x + 8} \\cdot \\frac{x + 4}{3x}$

c) $3x^2 \\cdot \\frac{x + 3}{3x^2 - 27}$`,
      solution: `**Løsning:**

a) $\\frac{2}{3x} \\cdot \\frac{x + 3}{4} = \\frac{2 \\cdot (x + 3)}{3x \\cdot 4} = \\frac{2 \\cdot (x + 3)}{3x \\cdot 2 \\cdot 2} = \\frac{x + 3}{6x}$

b) $\\frac{x}{2x + 8} \\cdot \\frac{x + 4}{3x} = \\frac{x \\cdot (x + 4)}{(2x + 8) \\cdot 3x} = \\frac{x \\cdot (x + 4) \\cdot 1}{2(x + 4) \\cdot 3 \\cdot x} = \\frac{1}{6}$

c) $3x^2 \\cdot \\frac{x + 3}{3x^2 - 27} = \\frac{3x^2}{1} \\cdot \\frac{x + 3}{3(x^2 - 9)} = \\frac{3 \\cdot x^2 \\cdot (x + 3)}{3 \\cdot (x + 3) \\cdot (x - 3)} = \\frac{x^2}{x - 3}$`,
    },

    // Oppgave 2: Multipliser brøker
    {
      id: '1t-1-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Multipliser og forkort (om mulig) brøkene',
        subTasks: [
          { label: 'a', task: '$\\frac{x + 5}{5x} \\cdot \\frac{5}{2x + 10}$', solution: '$\\frac{x + 5}{5x} \\cdot \\frac{5}{2x + 10} = \\frac{(x + 5) \\cdot 5}{5x \\cdot 2(x + 5)} = \\frac{5 \\cdot (x + 5)}{5 \\cdot 2 \\cdot x \\cdot (x + 5)} = \\frac{1}{2x}$', expressionAnswer: '1/(2x)' },
          { label: 'b', task: '$\\frac{2x}{3x - 12} \\cdot \\frac{x^2 - 16}{4}$', solution: '$\\frac{2x}{3x - 12} \\cdot \\frac{x^2 - 16}{4} = \\frac{2x}{3(x-4)} \\cdot \\frac{(x-4)(x+4)}{4} = \\frac{2 \\cdot x \\cdot (x-4) \\cdot (x+4)}{3 \\cdot (x-4) \\cdot 4} = \\frac{x(x+4)}{6}$', expressionAnswer: 'x(x+4)/6' },
          { label: 'c', task: '$5x \\cdot \\frac{x + 4}{4x^2 - 16x}$', solution: '$5x \\cdot \\frac{x + 4}{4x^2 - 16x} = \\frac{5x}{1} \\cdot \\frac{x + 4}{4x(x - 4)} = \\frac{5 \\cdot x \\cdot (x + 4)}{4 \\cdot x \\cdot (x - 4)} = \\frac{5(x + 4)}{4(x - 4)}$', expressionAnswer: '5(x+4)/(4(x-4))' },
        ],
        solution: 'a) $\\frac{1}{2x}$, b) $\\frac{x(x+4)}{6}$, c) $\\frac{5(x+4)}{4(x-4)}$',
        hints: ['Faktoriser først, deretter forkorter du like faktorer i teller og nevner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Dividere brøker
    {
      id: '1t-1-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Multipliser og forkort (om mulig) brøkene',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{2} \\div \\frac{2x}{3}$', solution: '$\\frac{x}{2} \\div \\frac{2x}{3} = \\frac{x}{2} \\cdot \\frac{3}{2x} = \\frac{x \\cdot 3}{2 \\cdot 2 \\cdot x} = \\frac{3}{4}$', expressionAnswer: '3/4' },
          { label: 'b', task: '$\\frac{x + 9}{2x} \\div \\frac{x^2 - 81}{2x + 8}$', solution: '$\\frac{x + 9}{2x} \\div \\frac{x^2 - 81}{2x + 8} = \\frac{x + 9}{2x} \\cdot \\frac{2x + 8}{(x-9)(x+9)} = \\frac{(x + 9) \\cdot 2(x + 4)}{2x \\cdot (x-9) \\cdot (x+9)} = \\frac{x + 4}{x(x - 9)}$', expressionAnswer: '(x+4)/(x(x-9))' },
          { label: 'c', task: '$4x \\div \\frac{x}{x^2 - 16}$', solution: '$4x \\div \\frac{x}{x^2 - 16} = \\frac{4x}{1} \\cdot \\frac{x^2 - 16}{x} = \\frac{4 \\cdot x \\cdot (x-4)(x+4)}{x} = 4(x-4)(x+4)$', expressionAnswer: '4(x-4)(x+4)' },
        ],
        solution: 'a) $\\frac{3}{4}$, b) $\\frac{x+4}{x(x-9)}$, c) $4(x-4)(x+4)$',
        hints: ['Ved divisjon: snu den andre brøken og gang'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 3: Trekke sammen brøker ==========
    {
      id: '1t-1-6-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Trekk sammen brøkene:

$\\frac{9x + 3y}{4x} - \\frac{x - 3y}{4x}$`,
      solution: `**Løsning:**

$\\frac{9x + 3y}{4x} - \\frac{x - 3y}{4x} = \\frac{9x + 3y - (x - 3y)}{4x} = \\frac{9x + 3y - x + 3y}{4x}$

$= \\frac{8x + 6y}{4x} = \\frac{2(4x + 3y)}{2 \\cdot 2x} = \\frac{4x + 3y}{2x}$`,
    },

    // Oppgave 4: Trekke sammen brøker med lik nevner
    {
      id: '1t-1-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Trekk sammen brøkene og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{2x}{4} + \\frac{3x}{4}$', solution: '$\\frac{2x}{4} + \\frac{3x}{4} = \\frac{2x + 3x}{4} = \\frac{5x}{4}$', expressionAnswer: '5x/4' },
          { label: 'b', task: '$\\frac{2x}{3} - \\frac{8x}{3}$', solution: '$\\frac{2x}{3} - \\frac{8x}{3} = \\frac{2x - 8x}{3} = \\frac{-6x}{3} = -2x$', expressionAnswer: '-2x' },
          { label: 'c', task: '$\\frac{y}{5} - \\frac{3y}{5}$', solution: '$\\frac{y}{5} - \\frac{3y}{5} = \\frac{y - 3y}{5} = \\frac{-2y}{5}$', expressionAnswer: '-2y/5' },
          { label: 'd', task: '$\\frac{2x - y}{4x} - \\frac{3x}{4x}$', solution: '$\\frac{2x - y}{4x} - \\frac{3x}{4x} = \\frac{(2x - y) - 3x}{4x} = \\frac{2x - y - 3x}{4x} = \\frac{-x - y}{4x}$', expressionAnswer: '(-x-y)/(4x)' },
          { label: 'e', task: '$\\frac{x}{3} + \\frac{2x}{3} - \\frac{3 - 6x}{3}$', solution: '$\\frac{x}{3} + \\frac{2x}{3} - \\frac{3 - 6x}{3} = \\frac{x + 2x - (3 - 6x)}{3} = \\frac{x + 2x - 3 + 6x}{3} = \\frac{9x - 3}{3} = \\frac{3(3x - 1)}{3} = 3x - 1$', expressionAnswer: '3x-1' },
          { label: 'f', task: '$\\frac{x + 6}{2x + 1} - \\frac{3x - 4}{2x + 1}$', solution: '$\\frac{x + 6}{2x + 1} - \\frac{3x - 4}{2x + 1} = \\frac{(x + 6) - (3x - 4)}{2x + 1} = \\frac{x + 6 - 3x + 4}{2x + 1} = \\frac{-2x + 10}{2x + 1}$', expressionAnswer: '(-2x+10)/(2x+1)' },
        ],
        solution: 'a) $\\frac{5x}{4}$, b) $-2x$, c) $\\frac{-2y}{5}$, d) $\\frac{-x-y}{4x}$, e) $3x-1$, f) $\\frac{-2x+10}{2x+1}$',
        hints: ['Når nevnerne er like, trekker du sammen tellerne'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 4: Utvide brøker ==========
    {
      id: '1t-1-6-theorem-utviding',
      type: 'theorem',
      title: 'Utviding av brøker',
      content: `For å trekke sammen brøker med **ulik nevner** må vi først utvide brøkene slik at de får **lik nevner** (fellesnevner).

Vi utvider en brøk ved å gange teller og nevner med samme faktor.`,
    },

    {
      id: '1t-1-6-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Utvid brøken slik at du får $x^2 - 4$ i nevner:

$\\frac{3}{x - 2}$`,
      solution: `**Løsning:**

$\\frac{3}{x - 2} = \\frac{3(x + 2)}{(x - 2)(x + 2)} = \\frac{3x + 6}{x^2 - 4}$`,
    },

    // Oppgave 5: Utvide brøker
    {
      id: '1t-1-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utvid brøken',
        subTasks: [
          { label: 'a', task: '$\\frac{9}{x - 2}$ slik at nevneren blir $2x - 4$', solution: 'Vi ser at $2x - 4 = 2(x - 2)$, så vi må gange med 2: $\\frac{9}{x - 2} = \\frac{9 \\cdot 2}{(x - 2) \\cdot 2} = \\frac{18}{2x - 4}$', expressionAnswer: '18/(2x-4)' },
          { label: 'b', task: '$\\frac{5}{x + 3}$ slik at nevneren blir $x^2 - 9$', solution: 'Vi ser at $x^2 - 9 = (x + 3)(x - 3)$, så vi må gange med $(x - 3)$: $\\frac{5}{x + 3} = \\frac{5 \\cdot (x - 3)}{(x + 3) \\cdot (x - 3)} = \\frac{5x - 15}{x^2 - 9}$', expressionAnswer: '(5x-15)/(x^2-9)' },
          { label: 'c', task: '$\\frac{3x}{x - 2}$ slik at nevneren blir $2x^2 - 8$', solution: 'Vi ser at $2x^2 - 8 = 2(x^2 - 4) = 2(x - 2)(x + 2)$, så vi må gange med $2(x + 2)$: $\\frac{3x}{x - 2} = \\frac{3x \\cdot 2(x + 2)}{(x - 2) \\cdot 2(x + 2)} = \\frac{6x(x + 2)}{2x^2 - 8}$', expressionAnswer: '6x(x+2)/(2x^2-8)' },
        ],
        solution: 'a) $\\frac{18}{2x-4}$, b) $\\frac{5x-15}{x^2-9}$, c) $\\frac{6x(x+2)}{2x^2-8}$',
        hints: ['Finn hva du må gange nevneren med for å få ønsket nevner, og gang telleren med det samme'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 5: Trekke sammen med ulik nevner ==========
    {
      id: '1t-1-6-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: `Trekk sammen brøkene:

$\\frac{5x}{2y} + \\frac{3}{2}$`,
      solution: `**Løsning:**

$\\frac{5x}{2y} + \\frac{3}{2} = \\frac{5x}{2y} + \\frac{3 \\cdot y}{2 \\cdot y} = \\frac{5x}{2y} + \\frac{3y}{2y} = \\frac{5x + 3y}{2y}$`,
    },

    // Oppgave 6: Trekke sammen med ulik nevner
    {
      id: '1t-1-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Trekk sammen brøkene og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{2} + \\frac{1}{2x}$', solution: 'Fellesnevner er $2x$: $\\frac{3}{2} + \\frac{1}{2x} = \\frac{3 \\cdot x}{2 \\cdot x} + \\frac{1}{2x} = \\frac{3x}{2x} + \\frac{1}{2x} = \\frac{3x + 1}{2x}$', expressionAnswer: '(3x+1)/(2x)' },
          { label: 'b', task: '$\\frac{4x}{2} + \\frac{2x}{5}$', solution: 'Fellesnevner er $10$: $\\frac{4x}{2} + \\frac{2x}{5} = \\frac{4x \\cdot 5}{2 \\cdot 5} + \\frac{2x \\cdot 2}{5 \\cdot 2} = \\frac{20x}{10} + \\frac{4x}{10} = \\frac{24x}{10} = \\frac{12x}{5}$', expressionAnswer: '12x/5' },
          { label: 'c', task: '$\\frac{2y}{5} - \\frac{x}{3}$', solution: 'Fellesnevner er $15$: $\\frac{2y}{5} - \\frac{x}{3} = \\frac{2y \\cdot 3}{5 \\cdot 3} - \\frac{x \\cdot 5}{3 \\cdot 5} = \\frac{6y}{15} - \\frac{5x}{15} = \\frac{6y - 5x}{15}$', expressionAnswer: '(6y-5x)/15' },
          { label: 'd', task: '$\\frac{3x}{2y} + \\frac{2y}{x}$', solution: 'Fellesnevner er $2xy$: $\\frac{3x}{2y} + \\frac{2y}{x} = \\frac{3x \\cdot x}{2y \\cdot x} + \\frac{2y \\cdot 2y}{x \\cdot 2y} = \\frac{3x^2}{2xy} + \\frac{4y^2}{2xy} = \\frac{3x^2 + 4y^2}{2xy}$', expressionAnswer: '(3x^2+4y^2)/(2xy)' },
          { label: 'e', task: '$\\frac{x}{5} - 3x$', solution: 'Skriver $3x$ som brøk med nevner $5$: $\\frac{x}{5} - 3x = \\frac{x}{5} - \\frac{3x \\cdot 5}{5} = \\frac{x}{5} - \\frac{15x}{5} = \\frac{x - 15x}{5} = \\frac{-14x}{5}$', expressionAnswer: '-14x/5' },
          { label: 'f', task: '$\\frac{2x}{11y} - \\frac{4x}{11} - 2$', solution: 'Fellesnevner er $11y$: $\\frac{2x}{11y} - \\frac{4x \\cdot y}{11 \\cdot y} - \\frac{2 \\cdot 11y}{11y} = \\frac{2x}{11y} - \\frac{4xy}{11y} - \\frac{22y}{11y} = \\frac{2x - 4xy - 22y}{11y}$', expressionAnswer: '(2x-4xy-22y)/(11y)' },
        ],
        solution: 'a) $\\frac{3x+1}{2x}$, b) $\\frac{12x}{5}$, c) $\\frac{6y-5x}{15}$, d) $\\frac{3x^2+4y^2}{2xy}$, e) $\\frac{-14x}{5}$, f) $\\frac{2x-4xy-22y}{11y}$',
        hints: ['Finn fellesnevner og utvid hver brøk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 6: Mer kompliserte sammentrekninger ==========
    {
      id: '1t-1-6-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: `Trekk sammen brøkene:

$\\frac{4}{3xy} + \\frac{3x}{2y} - 2$`,
      solution: `**Løsning:**

$\\frac{4}{3xy} + \\frac{3x}{2y} - \\frac{2}{1} = \\frac{4 \\cdot 2}{3xy \\cdot 2} + \\frac{3x \\cdot 3x}{2y \\cdot 3x} - \\frac{2 \\cdot 6xy}{1 \\cdot 6xy} = \\frac{8}{6xy} + \\frac{9x^2}{6xy} - \\frac{12xy}{6xy}$

$= \\frac{8 + 9x^2 - 12xy}{6xy} = \\frac{9x^2 - 12xy + 8}{6xy}$`,
    },

    // Oppgave 7: Mer kompliserte sammentrekninger
    {
      id: '1t-1-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Trekk sammen brøkene og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{2xy} + \\frac{1}{3x} - 1$', solution: 'Fellesnevner er $6xy$: $\\frac{3}{2xy} + \\frac{1}{3x} - 1 = \\frac{3 \\cdot 3}{2xy \\cdot 3} + \\frac{1 \\cdot 2y}{3x \\cdot 2y} - \\frac{1 \\cdot 6xy}{6xy} = \\frac{9}{6xy} + \\frac{2y}{6xy} - \\frac{6xy}{6xy} = \\frac{9 + 2y - 6xy}{6xy}$', expressionAnswer: '(9+2y-6xy)/(6xy)' },
          { label: 'b', task: '$\\frac{3}{2ab} + \\frac{1}{5}$', solution: 'Fellesnevner er $10ab$: $\\frac{3}{2ab} + \\frac{1}{5} = \\frac{3 \\cdot 5}{2ab \\cdot 5} + \\frac{1 \\cdot 2ab}{5 \\cdot 2ab} = \\frac{15}{10ab} + \\frac{2ab}{10ab} = \\frac{15 + 2ab}{10ab}$', expressionAnswer: '(15+2ab)/(10ab)' },
          { label: 'c', task: '$\\frac{2}{5x} - \\frac{1}{3y} - 1$', solution: 'Fellesnevner er $15xy$: $\\frac{2}{5x} - \\frac{1}{3y} - 1 = \\frac{2 \\cdot 3y}{5x \\cdot 3y} - \\frac{1 \\cdot 5x}{3y \\cdot 5x} - \\frac{15xy}{15xy} = \\frac{6y}{15xy} - \\frac{5x}{15xy} - \\frac{15xy}{15xy} = \\frac{6y - 5x - 15xy}{15xy}$', expressionAnswer: '(6y-5x-15xy)/(15xy)' },
        ],
        solution: 'a) $\\frac{9+2y-6xy}{6xy}$, b) $\\frac{15+2ab}{10ab}$, c) $\\frac{6y-5x-15xy}{15xy}$',
        hints: ['Finn fellesnevner for alle leddene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 7: Trekke sammen med x i nevner ==========
    {
      id: '1t-1-6-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: `Trekk sammen:

$\\frac{4}{x + 2} - 2$`,
      solution: `**Løsning:**

$\\frac{4}{x + 2} - \\frac{2}{1} = \\frac{4}{x + 2} - \\frac{2(x + 2)}{1(x + 2)} = \\frac{4}{x + 2} - \\frac{2x + 4}{x + 2} = \\frac{4 - (2x + 4)}{x + 2}$

$= \\frac{4 - 2x - 4}{x + 2} = \\frac{-2x}{x + 2}$`,
    },

    // Oppgave 8: Trekke sammen med x i nevner
    {
      id: '1t-1-6-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Trekk sammen brøkene og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{5}{x + 2} + \\frac{1}{3}$', solution: 'Fellesnevner er $3(x + 2)$: $\\frac{5}{x + 2} + \\frac{1}{3} = \\frac{5 \\cdot 3}{(x + 2) \\cdot 3} + \\frac{1 \\cdot (x + 2)}{3 \\cdot (x + 2)} = \\frac{15}{3(x + 2)} + \\frac{x + 2}{3(x + 2)} = \\frac{15 + x + 2}{3(x + 2)} = \\frac{x + 17}{3(x + 2)}$', expressionAnswer: '(x+17)/(3(x+2))' },
          { label: 'b', task: '$\\frac{2}{x + 3} - \\frac{1}{2}$', solution: 'Fellesnevner er $2(x + 3)$: $\\frac{2}{x + 3} - \\frac{1}{2} = \\frac{2 \\cdot 2}{(x + 3) \\cdot 2} - \\frac{1 \\cdot (x + 3)}{2 \\cdot (x + 3)} = \\frac{4}{2(x + 3)} - \\frac{x + 3}{2(x + 3)} = \\frac{4 - (x + 3)}{2(x + 3)} = \\frac{1 - x}{2(x + 3)}$', expressionAnswer: '(1-x)/(2(x+3))' },
          { label: 'c', task: '$2 - \\frac{x + 2}{3}$', solution: 'Skriver 2 som brøk: $2 - \\frac{x + 2}{3} = \\frac{2 \\cdot 3}{3} - \\frac{x + 2}{3} = \\frac{6}{3} - \\frac{x + 2}{3} = \\frac{6 - (x + 2)}{3} = \\frac{6 - x - 2}{3} = \\frac{4 - x}{3}$', expressionAnswer: '(4-x)/3' },
          { label: 'd', task: '$\\frac{3}{y + 1} + \\frac{4}{2(y + 1)}$', solution: 'Fellesnevner er $2(y + 1)$: $\\frac{3}{y + 1} + \\frac{4}{2(y + 1)} = \\frac{3 \\cdot 2}{(y + 1) \\cdot 2} + \\frac{4}{2(y + 1)} = \\frac{6}{2(y + 1)} + \\frac{4}{2(y + 1)} = \\frac{10}{2(y + 1)} = \\frac{5}{y + 1}$', expressionAnswer: '5/(y+1)' },
          { label: 'e', task: '$\\frac{x}{5x} - 2$', solution: 'Forkorter først: $\\frac{x}{5x} - 2 = \\frac{1}{5} - 2 = \\frac{1}{5} - \\frac{2 \\cdot 5}{5} = \\frac{1}{5} - \\frac{10}{5} = \\frac{1 - 10}{5} = \\frac{-9}{5}$', expressionAnswer: '-9/5' },
          { label: 'f', task: '$\\frac{2}{3} - \\frac{x - 3}{3x} - 2$', solution: 'Fellesnevner er $3x$: $\\frac{2}{3} - \\frac{x - 3}{3x} - 2 = \\frac{2 \\cdot x}{3 \\cdot x} - \\frac{x - 3}{3x} - \\frac{2 \\cdot 3x}{3x} = \\frac{2x}{3x} - \\frac{x - 3}{3x} - \\frac{6x}{3x} = \\frac{2x - (x - 3) - 6x}{3x} = \\frac{2x - x + 3 - 6x}{3x} = \\frac{-5x + 3}{3x}$', expressionAnswer: '(-5x+3)/(3x)' },
        ],
        solution: 'a) $\\frac{x+17}{3(x+2)}$, b) $\\frac{1-x}{2(x+3)}$, c) $\\frac{4-x}{3}$, d) $\\frac{5}{y+1}$, e) $\\frac{-9}{5}$, f) $\\frac{-5x+3}{3x}$',
        hints: ['Husk å sette parentes når du trekker fra en brøk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 8: Brøker med ulike faktoriserte nevnere ==========
    {
      id: '1t-1-6-example-8',
      type: 'example',
      title: 'Eksempel 8',
      problem: `Trekk sammen:

$\\frac{5}{x - 3} - \\frac{3}{2}$`,
      solution: `**Løsning:**

$\\frac{5}{x - 3} - \\frac{3}{2} = \\frac{2 \\cdot 5}{2(x - 3)} - \\frac{3(x - 3)}{2(x - 3)} = \\frac{10}{2x - 6} - \\frac{3x - 9}{2x - 6}$

$= \\frac{10 - (3x - 9)}{2x - 6} = \\frac{10 - 3x + 9}{2x - 6} = \\frac{-3x + 19}{2x - 6}$`,
    },

    // ========== EKSEMPEL 9: Konjugatsetning i nevner ==========
    {
      id: '1t-1-6-example-9',
      type: 'example',
      title: 'Eksempel 9',
      problem: `Trekk sammen:

$\\frac{2}{x - 4} - \\frac{1}{x + 4}$`,
      solution: `**Løsning:**

Vi ser fellesnevneren er $(x - 4)(x + 4)$

$\\frac{2}{x - 4} - \\frac{1}{x + 4} = \\frac{2(x + 4)}{(x - 4)(x + 4)} - \\frac{1(x - 4)}{(x + 4)(x - 4)}$

$= \\frac{2x + 8 - 1(x - 4)}{(x - 4)(x + 4)} = \\frac{2x + 8 - x + 4}{(x - 4)(x + 4)} = \\frac{x + 12}{x^2 - 16}$`,
    },

    // Oppgave 9: Brøker med faktoriserte nevnere
    {
      id: '1t-1-6-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Trekk sammen brøkene og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{2}{x + 2} + \\frac{3}{x - 2}$', solution: 'Fellesnevner er $(x+2)(x-2)$: $\\frac{2}{x + 2} + \\frac{3}{x - 2} = \\frac{2 \\cdot (x-2)}{(x+2)(x-2)} + \\frac{3 \\cdot (x+2)}{(x-2)(x+2)} = \\frac{2x - 4 + 3x + 6}{(x+2)(x-2)} = \\frac{5x + 2}{x^2 - 4}$', expressionAnswer: '(5x+2)/(x^2-4)' },
          { label: 'b', task: '$\\frac{2}{x + 3} - \\frac{1}{2x + 6}$', solution: 'Faktoriserer: $2x + 6 = 2(x+3)$. Fellesnevner er $2(x+3)$: $\\frac{2}{x + 3} - \\frac{1}{2(x + 3)} = \\frac{2 \\cdot 2}{(x+3) \\cdot 2} - \\frac{1}{2(x+3)} = \\frac{4}{2(x+3)} - \\frac{1}{2(x+3)} = \\frac{3}{2(x+3)}$', expressionAnswer: '3/(2(x+3))' },
          { label: 'c', task: '$3 - \\frac{x + 2}{x^2 + 2x}$', solution: 'Faktoriserer: $x^2 + 2x = x(x + 2)$. Da kan vi forkorte: $3 - \\frac{x + 2}{x(x + 2)} = 3 - \\frac{1}{x} = \\frac{3x}{x} - \\frac{1}{x} = \\frac{3x - 1}{x}$', expressionAnswer: '(3x-1)/x' },
          { label: 'd', task: '$\\frac{3}{y + 4} + \\frac{4}{2y + 8} - \\frac{1}{3}$', solution: 'Faktoriserer: $2y + 8 = 2(y + 4)$. $\\frac{3}{y + 4} + \\frac{4}{2(y + 4)} - \\frac{1}{3} = \\frac{6}{2(y+4)} + \\frac{4}{2(y+4)} - \\frac{1}{3} = \\frac{10}{2(y+4)} - \\frac{1}{3} = \\frac{5}{y+4} - \\frac{1}{3}$', expressionAnswer: '(15-y-4)/(3(y+4))' },
          { label: 'e', task: '$\\frac{1}{3x} - \\frac{2}{x + 1}$', solution: 'Fellesnevner er $3x(x+1)$: $\\frac{1}{3x} - \\frac{2}{x + 1} = \\frac{1 \\cdot (x+1)}{3x \\cdot (x+1)} - \\frac{2 \\cdot 3x}{(x+1) \\cdot 3x} = \\frac{x + 1}{3x(x+1)} - \\frac{6x}{3x(x+1)} = \\frac{x + 1 - 6x}{3x(x+1)} = \\frac{1 - 5x}{3x(x+1)}$', expressionAnswer: '(1-5x)/(3x(x+1))' },
          { label: 'f', task: '$\\frac{1}{2} - \\frac{x - 3}{x - 2} - \\frac{2}{x - 1}$', solution: 'Fellesnevner er $2(x-2)(x-1)$. Dette er en kompleks oppgave - se fullstendig løsning i fasit.' },
        ],
        solution: 'a) $\\frac{5x+2}{x^2-4}$, b) $\\frac{3}{2(x+3)}$, c) $\\frac{3x-1}{x}$, d) $\\frac{5}{y+4} - \\frac{1}{3}$, e) $\\frac{1-5x}{3x(x+1)}$, f) Se løsning',
        hints: ['Faktoriser nevnerne for å finne fellesnevner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 10: Kompleks sammentrekning ==========
    {
      id: '1t-1-6-example-10',
      type: 'example',
      title: 'Eksempel 10',
      problem: `Trekk sammen:

$\\frac{2}{x + 2} - \\frac{4}{3x - 3}$`,
      solution: `**Løsning:**

$\\frac{2}{x + 2} + \\frac{4}{3x - 3} = \\frac{2}{(x + 2)} - \\frac{4}{3(x - 1)}$

$= \\frac{3 \\cdot 2(x - 1)}{3(x - 1)(x + 2)} - \\frac{4(x + 2)}{3(x - 1)(x + 2)} = \\frac{6(x - 1) - 4(x + 2)}{3(x - 1)(x + 2)}$

$= \\frac{6x - 6 - 4x - 8}{3(x - 1)(x + 2)} = \\frac{2x - 14}{3(x - 1)(x + 2)} = \\frac{2x - 14}{3x^2 + 3x - 6}$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_1_7: TextbookChapter = {
  id: '1t-1-7',
  courseId: '1t',
  chapterNumber: '1.7',
  title: 'Mengdelære',
  description: 'Lær om mengdenotasjon, tallmengder, intervaller og absoluttverdi.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke matematisk notasjon til å beskrive mengder',
    'forstå og bruke intervallnotasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '1t-1-7-intro',
      type: 'text',
      content: `## Mengdelære

I matematikk bruker vi **mengder** til å beskrive samlinger av objekter. En mengde kan inneholde tall, punkter, eller andre matematiske objekter. Vi bruker spesielle symboler for å beskrive mengder og operasjoner på dem.`,
    },

    // Video om mengdelære
    {
      id: '1t-1-7-video-mengde',
      type: 'video',
      title: 'Video: Mengdelære, tegn og intervaller',
      youtubeId: '_nf5d5sh07s',
      description: 'En introduksjon til mengdenotasjon og intervaller.',
    },

    // ========== TALLMENGDER ==========
    {
      id: '1t-1-7-tallmengder',
      type: 'text',
      content: `## Tallmengder

Vi har fire viktige tallmengder som du må kjenne til:`,
    },

    // Video om tallmengder
    {
      id: '1t-1-7-video-tallmengder',
      type: 'video',
      title: 'Video: Tallmengder',
      youtubeId: 'OG8Sru9FXt4',
      description: 'Om de ulike tallmengdene ℕ, ℤ, ℚ og ℝ.',
    },

    {
      id: '1t-1-7-def-N',
      type: 'definition',
      title: 'Naturlige tall (ℕ)',
      content: `$\\mathbb{N} = \\{1, 2, 3, 4, 5, ...\\}$

De naturlige tallene er de positive heltallene vi bruker til å telle med.`,
    },

    {
      id: '1t-1-7-def-Z',
      type: 'definition',
      title: 'Heltall (ℤ)',
      content: `$\\mathbb{Z} = \\{..., -2, -1, 0, 1, 2, ...\\}$

Heltallene inkluderer alle naturlige tall, null, og de negative heltallene.`,
    },

    {
      id: '1t-1-7-def-Q',
      type: 'definition',
      title: 'Rasjonale tall (ℚ)',
      content: `$\\mathbb{Q} = \\left\\{ \\frac{a}{b} \\mid a \\in \\mathbb{Z}, b \\in \\mathbb{N} \\right\\}$

Rasjonale tall er alle tall som kan skrives som en brøk med heltall i telleren og et naturlig tall i nevneren.

**Eksempler:** $\\frac{1}{2}$, $-\\frac{3}{4}$, $0{,}75 = \\frac{3}{4}$, $5 = \\frac{5}{1}$`,
    },

    {
      id: '1t-1-7-def-R',
      type: 'definition',
      title: 'Reelle tall (ℝ)',
      content: `$\\mathbb{R}$ = Alle tall på tallinja

De reelle tallene inkluderer alle rasjonale tall pluss de **irrasjonale tallene** — tall som ikke kan skrives som brøk.

**Irrasjonale tall:** $\\sqrt{2}$, $\\pi$, $e$ — disse har uendelig mange desimaler uten gjentakende mønster.`,
    },

    {
      id: '1t-1-7-tallmengder-sammenheng',
      type: 'note',
      content: `**Sammenheng mellom tallmengdene:**

$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$

Alle naturlige tall er heltall, alle heltall er rasjonale, og alle rasjonale tall er reelle.`,
    },

    // ========== MENGDENOTASJON ==========
    {
      id: '1t-1-7-notasjon',
      type: 'text',
      content: `## Viktige symboler

Her er de viktigste symbolene du må kunne:`,
    },

    {
      id: '1t-1-7-symboler-tabell',
      type: 'text',
      content: `| Symbol | Betydning |
|--------|-----------|
| $\\in$ | er element i / tilhører |
| $\\notin$ | er ikke element i |
| $\\subset$ | er en delmengde av |
| $\\cup$ | union (eller) |
| $\\cap$ | snitt (og) |
| $\\setminus$ | unntatt / differanse |
| $\\emptyset$ | den tomme mengden |`,
    },

    {
      id: '1t-1-7-example-symboler',
      type: 'example',
      title: 'Eksempel: Bruk av symboler',
      problem: `Avgjør om følgende utsagn er sanne eller usanne:

a) $5 \\in \\mathbb{N}$
b) $-3 \\in \\mathbb{N}$
c) $\\frac{1}{2} \\in \\mathbb{Z}$
d) $\\sqrt{2} \\in \\mathbb{Q}$
e) $\\pi \\in \\mathbb{R}$`,
      solution: `**Løsning:**

a) $5 \\in \\mathbb{N}$ er **sant** — 5 er et naturlig tall.

b) $-3 \\in \\mathbb{N}$ er **usant** — negative tall er ikke naturlige tall.

c) $\\frac{1}{2} \\in \\mathbb{Z}$ er **usant** — heltall kan ikke ha desimaler.

d) $\\sqrt{2} \\in \\mathbb{Q}$ er **usant** — $\\sqrt{2}$ er irrasjonalt og kan ikke skrives som brøk.

e) $\\pi \\in \\mathbb{R}$ er **sant** — $\\pi$ er et reelt tall (selv om det er irrasjonalt).`,
    },

    // ========== INTERVALLER ==========
    {
      id: '1t-1-7-intervaller',
      type: 'text',
      content: `## Intervaller

Et **intervall** er en sammenhengende del av tallinja. Vi bruker parenteser og klammer for å angi om endepunktene er med eller ikke:`,
    },

    {
      id: '1t-1-7-intervall-tabell',
      type: 'text',
      content: `| Notasjon | Betydning | Ulikhet |
|----------|-----------|---------|
| $\\langle a, b \\rangle$ | fra $a$ til $b$ (begge unntatt) | $a < x < b$ |
| $[a, b]$ | fra og med $a$ til og med $b$ | $a \\leq x \\leq b$ |
| $[a, b\\rangle$ | fra og med $a$ til $b$ | $a \\leq x < b$ |
| $\\langle a, b]$ | fra $a$ til og med $b$ | $a < x \\leq b$ |
| $\\langle a, \\rightarrow \\rangle$ | alle tall større enn $a$ | $x > a$ |
| $\\langle \\leftarrow, b]$ | alle tall til og med $b$ | $x \\leq b$ |

**Merk:** $\\langle$ og $\\rangle$ kan også skrives som $($ og $)$.`,
    },

    {
      id: '1t-1-7-intervall-tips',
      type: 'tip',
      content: `**Huskeregel for parenteser:**
- **Klammer** $[$ eller $]$ betyr **med** (inkluderer endepunktet)
- **Parenteser** $\\langle$ eller $\\rangle$ betyr **uten** (ekskluderer endepunktet)

Ved uendelig ($\\infty$ eller $-\\infty$) bruker vi alltid parenteser, fordi uendelig ikke er et tall vi kan inkludere.`,
    },

    {
      id: '1t-1-7-example-intervall',
      type: 'example',
      title: 'Eksempel: Intervaller',
      problem: `Skriv følgende mengder med intervallnotasjon:

a) Alle tall fra 2 til 7 (begge inkludert)
b) Alle tall større enn 5
c) Alle tall fra og med $-3$ til $4$ (uten 4)
d) Alle tall mindre enn eller lik 10`,
      solution: `**Løsning:**

a) $[2, 7]$ — klammer på begge sider fordi begge er inkludert.

b) $\\langle 5, \\rightarrow \\rangle$ eller $\\langle 5, \\infty \\rangle$ — parenteser fordi 5 ikke er med.

c) $[-3, 4\\rangle$ — klammer til venstre (med $-3$), parenteser til høyre (uten 4).

d) $\\langle \\leftarrow, 10]$ eller $\\langle -\\infty, 10]$ — klammer til høyre fordi 10 er med.`,
    },

    // Oppgave 1
    {
      id: '1t-1-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør hvilken tallmengde hvert tall hører til. Bruk den minste mengden som passer.',
        subTasks: [
          { label: 'a', task: '$7$', solution: '$7 \\in \\mathbb{N}$ (naturlig tall)' },
          { label: 'b', task: '$-4$', solution: '$-4 \\in \\mathbb{Z}$ (heltall)' },
          { label: 'c', task: '$\\frac{2}{3}$', solution: '$\\frac{2}{3} \\in \\mathbb{Q}$ (rasjonalt tall)' },
          { label: 'd', task: '$\\sqrt{9}$', solution: '$\\sqrt{9} = 3 \\in \\mathbb{N}$ (naturlig tall)' },
          { label: 'e', task: '$\\sqrt{5}$', solution: '$\\sqrt{5} \\in \\mathbb{R}$ (irrasjonalt, altså reelt tall)' },
          { label: 'f', task: '$0$', solution: '$0 \\in \\mathbb{Z}$ (heltall, men ikke naturlig tall)' },
        ],
        solution: 'a) ℕ, b) ℤ, c) ℚ, d) ℕ, e) ℝ, f) ℤ',
        hints: ['Tenk på om tallet kan skrives som brøk, og om det har desimaler'],
      },
    },

    // Oppgave 2
    {
      id: '1t-1-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv følgende intervaller med intervallnotasjon:',
        subTasks: [
          { label: 'a', task: 'Alle tall fra 1 til 5 (begge inkludert)', solution: '$[1, 5]$' },
          { label: 'b', task: 'Alle tall større enn 3', solution: '$\\langle 3, \\rightarrow \\rangle$' },
          { label: 'c', task: 'Alle tall fra $-2$ til $4$ (uten endepunktene)', solution: '$\\langle -2, 4 \\rangle$' },
          { label: 'd', task: 'Alle tall mindre enn eller lik $-1$', solution: '$\\langle \\leftarrow, -1]$' },
        ],
        solution: 'a) [1,5], b) ⟨3,→⟩, c) ⟨−2,4⟩, d) ⟨←,−1]',
        hints: ['Bruk klammer [ ] når tallet er inkludert, parenteser ⟨ ⟩ når det ikke er det'],
      },
    },

    // ========== UNION OG SNITT ==========
    {
      id: '1t-1-7-union-snitt',
      type: 'text',
      content: `## Union og snitt

Når vi kombinerer mengder, bruker vi **union** og **snitt**:`,
    },

    {
      id: '1t-1-7-def-union',
      type: 'definition',
      title: 'Union (∪)',
      content: `$A \\cup B$ = alle elementer som er i $A$ **eller** i $B$ (eller begge).

**Eksempel:** $[1, 3] \\cup [5, 7] = \\{x \\mid 1 \\leq x \\leq 3 \\text{ eller } 5 \\leq x \\leq 7\\}$`,
    },

    {
      id: '1t-1-7-def-snitt',
      type: 'definition',
      title: 'Snitt (∩)',
      content: `$A \\cap B$ = alle elementer som er i $A$ **og** i $B$ (felles elementer).

**Eksempel:** $[1, 5] \\cap [3, 7] = [3, 5]$`,
    },

    {
      id: '1t-1-7-example-union-snitt',
      type: 'example',
      title: 'Eksempel: Union og snitt',
      problem: `La $A = [2, 6]$ og $B = [4, 9]$.

Finn:
a) $A \\cup B$
b) $A \\cap B$`,
      solution: `**Løsning:**

a) $A \\cup B = [2, 9]$

Unionen er alle tall som er i minst én av mengdene. Siden $A$ dekker fra 2 til 6 og $B$ dekker fra 4 til 9, blir unionen fra 2 til 9.

b) $A \\cap B = [4, 6]$

Snittet er alle tall som er i begge mengder. Begge mengder inneholder tallene fra 4 til 6.`,
    },

    // Oppgave 3
    {
      id: '1t-1-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'La $A = [1, 5]$ og $B = [3, 8]$. Finn:',
        subTasks: [
          { label: 'a', task: '$A \\cup B$', solution: '$A \\cup B = [1, 8]$' },
          { label: 'b', task: '$A \\cap B$', solution: '$A \\cap B = [3, 5]$' },
        ],
        solution: 'a) [1, 8], b) [3, 5]',
        hints: ['Tegn gjerne tallinjene for å visualisere'],
      },
    },

    // Oppgave 4
    {
      id: '1t-1-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'La $A = \\langle -\\infty, 3]$ og $B = \\langle 1, \\infty \\rangle$. Finn:',
        subTasks: [
          { label: 'a', task: '$A \\cup B$', solution: '$A \\cup B = \\mathbb{R}$ (alle reelle tall)' },
          { label: 'b', task: '$A \\cap B$', solution: '$A \\cap B = \\langle 1, 3]$' },
        ],
        solution: 'a) ℝ, b) ⟨1, 3]',
        hints: ['A er alle tall til og med 3, B er alle tall større enn 1'],
      },
    },

    // ========== ABSOLUTTVERDI ==========
    {
      id: '1t-1-7-absoluttverdi',
      type: 'text',
      content: `## Absoluttverdi

**Absoluttverdien** til et tall er avstanden fra tallet til 0 på tallinja. Absoluttverdien er alltid positiv (eller null).`,
    },

    // Video om absoluttverdi
    {
      id: '1t-1-7-video-abs',
      type: 'video',
      title: 'Video: Absoluttverdi',
      youtubeId: '9QqaxWMs8t0',
      description: 'Om absoluttverdi og hvordan vi regner med det.',
    },

    {
      id: '1t-1-7-def-abs',
      type: 'definition',
      title: 'Absoluttverdi',
      content: `For et tall $a > 0$:
- $|a| = a$
- $|-a| = a$

Formelt:
$$|x| = \\begin{cases} x & \\text{hvis } x \\geq 0 \\\\ -x & \\text{hvis } x < 0 \\end{cases}$$`,
    },

    {
      id: '1t-1-7-example-abs',
      type: 'example',
      title: 'Eksempel: Absoluttverdi',
      problem: `Regn ut:

a) $|5|$
b) $|-7|$
c) $|3 - 8|$
d) $|-2| + |4|$`,
      solution: `**Løsning:**

a) $|5| = 5$

b) $|-7| = 7$

c) $|3 - 8| = |-5| = 5$

d) $|-2| + |4| = 2 + 4 = 6$`,
    },

    // Oppgave 5
    {
      id: '1t-1-7-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut:',
        subTasks: [
          { label: 'a', task: '$|9|$', solution: '$|9| = 9$' },
          { label: 'b', task: '$|-12|$', solution: '$|-12| = 12$' },
          { label: 'c', task: '$|4 - 10|$', solution: '$|4 - 10| = |-6| = 6$' },
          { label: 'd', task: '$|-3| \\cdot |2|$', solution: '$|-3| \\cdot |2| = 3 \\cdot 2 = 6$' },
          { label: 'e', task: '$|5 - 8| + |-2|$', solution: '$|5 - 8| + |-2| = 3 + 2 = 5$' },
        ],
        solution: 'a) 9, b) 12, c) 6, d) 6, e) 5',
        hints: ['Absoluttverdien er alltid positiv'],
      },
    },

    // ========== MENGDESKRIVELSE MED KLAMMER ==========
    {
      id: '1t-1-7-mengdeskrivelse',
      type: 'text',
      content: `## Skrive mengder med klammer

Vi kan skrive mengder på to måter:

**1. Liste opp elementene:**
$$\\{1, 2, 3, 4, 5\\}$$

**2. Beskriv egenskapene (mengdebyggernotasjon):**
$$\\{x \\in \\mathbb{Z} \\mid x > 0 \\text{ og } x \\leq 5\\}$$

Her betyr $\\mid$ «slik at».`,
    },

    // Oppgave 6
    {
      id: '1t-1-7-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv mengdene med mengdebyggernotasjon:',
        subTasks: [
          { label: 'a', task: '$\\{2, 4, 6, 8, 10\\}$', solution: '$\\{x \\in \\mathbb{N} \\mid x \\text{ er partall og } x \\leq 10\\}$' },
          { label: 'b', task: '$\\{1, 4, 9, 16, 25\\}$', solution: '$\\{n^2 \\mid n \\in \\mathbb{N} \\text{ og } n \\leq 5\\}$' },
        ],
        solution: 'a) Partall fra 2 til 10, b) Kvadrattall for n = 1,2,3,4,5',
        hints: ['Se etter mønsteret i tallene'],
      },
    },

    // ========== FLERE OPPGAVER ==========

    // Oppgave 7 - Mer absoluttverdi
    {
      id: '1t-1-7-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut:',
        subTasks: [
          { label: 'a', task: '$|7 - 15|$', solution: '$|7 - 15| = |-8| = 8$' },
          { label: 'b', task: '$|{-4}| - |{-6}|$', solution: '$|-4| - |-6| = 4 - 6 = -2$' },
          { label: 'c', task: '$|3 - 9| + |9 - 3|$', solution: '$|3 - 9| + |9 - 3| = 6 + 6 = 12$' },
          { label: 'd', task: '$\\frac{|{-12}|}{|4|}$', solution: '$\\frac{|-12|}{|4|} = \\frac{12}{4} = 3$' },
          { label: 'e', task: '$|2 - 5| \\cdot |{-3}|$', solution: '$|2 - 5| \\cdot |-3| = 3 \\cdot 3 = 9$' },
          { label: 'f', task: '$||{-7}| - |3||$', solution: '$||-7| - |3|| = |7 - 3| = |4| = 4$' },
        ],
        solution: 'a) 8, b) -2, c) 12, d) 3, e) 9, f) 4',
        hints: ['Regn ut absoluttverdiene først, deretter utfør operasjonene'],
      },
    },

    // Oppgave 8 - Differanse av mengder
    {
      id: '1t-1-7-differanse',
      type: 'text',
      content: `### Differanse av mengder

**Differansen** $A \\setminus B$ («A minus B») er alle elementer som er i $A$ men **ikke** i $B$.

**Eksempel:** Hvis $A = [1, 7]$ og $B = [4, 10]$, så er $A \\setminus B = [1, 4\\rangle$`,
    },

    {
      id: '1t-1-7-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'La $A = [2, 8]$ og $B = [5, 12]$. Finn:',
        subTasks: [
          { label: 'a', task: '$A \\cup B$', solution: '$A \\cup B = [2, 12]$' },
          { label: 'b', task: '$A \\cap B$', solution: '$A \\cap B = [5, 8]$' },
          { label: 'c', task: '$A \\setminus B$', solution: '$A \\setminus B = [2, 5\\rangle$' },
          { label: 'd', task: '$B \\setminus A$', solution: '$B \\setminus A = \\langle 8, 12]$' },
        ],
        solution: 'a) [2,12], b) [5,8], c) [2,5⟩, d) ⟨8,12]',
        hints: ['Tegn tallinjene og marker begge intervallene'],
      },
    },

    // Oppgave 9 - Mer union og snitt
    {
      id: '1t-1-7-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'La $A = \\langle -3, 2]$ og $B = [0, 5\\rangle$. Finn:',
        subTasks: [
          { label: 'a', task: '$A \\cup B$', solution: '$A \\cup B = \\langle -3, 5\\rangle$' },
          { label: 'b', task: '$A \\cap B$', solution: '$A \\cap B = [0, 2]$' },
          { label: 'c', task: '$A \\setminus B$', solution: '$A \\setminus B = \\langle -3, 0\\rangle$' },
        ],
        solution: 'a) ⟨-3,5⟩, b) [0,2], c) ⟨-3,0⟩',
        hints: ['Pass på parenteser vs. klammer ved endepunktene'],
      },
    },

    // Oppgave 10 - Tallmengder fortsettelse
    {
      id: '1t-1-7-ex-block-10',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om utsagnene er sanne eller usanne:',
        subTasks: [
          { label: 'a', task: '$\\mathbb{N} \\subset \\mathbb{Z}$', solution: 'Sant — alle naturlige tall er heltall' },
          { label: 'b', task: '$\\mathbb{Q} \\subset \\mathbb{N}$', solution: 'Usant — f.eks. er $\\frac{1}{2} \\in \\mathbb{Q}$ men $\\frac{1}{2} \\notin \\mathbb{N}$' },
          { label: 'c', task: '$\\sqrt{4} \\in \\mathbb{N}$', solution: 'Sant — $\\sqrt{4} = 2 \\in \\mathbb{N}$' },
          { label: 'd', task: '$\\sqrt{3} \\in \\mathbb{Q}$', solution: 'Usant — $\\sqrt{3}$ er irrasjonalt' },
          { label: 'e', task: '$-\\frac{5}{2} \\in \\mathbb{Z}$', solution: 'Usant — $-\\frac{5}{2} = -2{,}5$ er ikke et heltall' },
          { label: 'f', task: '$0 \\in \\mathbb{N}$', solution: 'Usant — 0 er ikke med i de naturlige tallene (vi definerer $\\mathbb{N} = \\{1, 2, 3, ...\\}$)' },
        ],
        solution: 'a) Sant, b) Usant, c) Sant, d) Usant, e) Usant, f) Usant',
        hints: ['Husk at $\\subset$ betyr «er delmengde av»'],
      },
    },

    // Oppgave 11 - Absoluttverdi med variabler
    {
      id: '1t-1-7-ex-block-11',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle uttrykkene når du vet at $a > 0$:',
        subTasks: [
          { label: 'a', task: '$|a|$', solution: '$|a| = a$ (siden $a > 0$)' },
          { label: 'b', task: '$|{-a}|$', solution: '$|-a| = a$ (siden $-a < 0$)' },
          { label: 'c', task: '$|a| + |{-a}|$', solution: '$|a| + |-a| = a + a = 2a$' },
          { label: 'd', task: '$|a - 2a|$', solution: '$|a - 2a| = |-a| = a$' },
        ],
        solution: 'a) a, b) a, c) 2a, d) a',
        hints: ['Når $a > 0$, så er $-a < 0$'],
      },
    },

    // Oppgave 12 - Kombinert oppgave
    {
      id: '1t-1-7-ex-block-12',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'La $A = \\{x \\in \\mathbb{R} \\mid |x| < 3\\}$ og $B = \\{x \\in \\mathbb{R} \\mid |x - 2| < 2\\}$.',
        subTasks: [
          { label: 'a', task: 'Skriv $A$ som et intervall.', solution: '$A = \\langle -3, 3 \\rangle$ (alle tall med avstand mindre enn 3 fra 0)' },
          { label: 'b', task: 'Skriv $B$ som et intervall.', solution: '$B = \\langle 0, 4 \\rangle$ (alle tall med avstand mindre enn 2 fra 2)' },
          { label: 'c', task: 'Finn $A \\cap B$.', solution: '$A \\cap B = \\langle 0, 3 \\rangle$' },
        ],
        solution: 'a) ⟨-3,3⟩, b) ⟨0,4⟩, c) ⟨0,3⟩',
        hints: ['$|x| < 3$ betyr $-3 < x < 3$', '$|x - 2| < 2$ betyr at avstanden fra $x$ til 2 er mindre enn 2'],
      },
    },

    // Oppgave 13 - Disjunkte mengder
    {
      id: '1t-1-7-ex-block-13',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om mengdene er **disjunkte** (har ingen felles elementer):',
        subTasks: [
          { label: 'a', task: '$A = [1, 3]$ og $B = [5, 7]$', solution: 'Ja, disjunkte — $A \\cap B = \\emptyset$' },
          { label: 'b', task: '$A = \\langle -\\infty, 2 \\rangle$ og $B = [2, \\infty \\rangle$', solution: 'Ja, disjunkte — $A$ stopper før 2, $B$ starter på 2' },
          { label: 'c', task: '$A = [0, 4]$ og $B = [3, 6]$', solution: 'Nei, ikke disjunkte — $A \\cap B = [3, 4]$' },
          { label: 'd', task: '$\\mathbb{N}$ og $\\{x \\in \\mathbb{Z} \\mid x < 0\\}$', solution: 'Ja, disjunkte — naturlige tall og negative heltall har ingen felles elementer' },
        ],
        solution: 'a) Ja, b) Ja, c) Nei, d) Ja',
        hints: ['Mengder er disjunkte hvis snittet er den tomme mengden'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_1_8: TextbookChapter = {
  id: '1t-1-8',
  courseId: '1t',
  chapterNumber: '1.8',
  title: 'Polynomdivisjon - introduksjon',
  description: 'Lær hva polynomdivisjon er og hvordan det brukes.',
  estimatedMinutes: 30,
  competenceGoals: ['forklare polynomdivisjon', 'utføre enkel polynomdivisjon'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '1t-1-8-intro',
      type: 'text',
      content: `## Hva er polynomdivisjon?

Polynomdivisjon er en metode for å dele et polynom på et annet polynom. Det fungerer på samme måte som vanlig divisjon med tall, men vi jobber med algebraiske uttrykk i stedet.

Når vi deler et polynom $P(x)$ på et polynom $D(x)$, får vi:

$$P(x) = D(x) \\cdot Q(x) + R(x)$$

der:
- $P(x)$ er **dividenden** (det vi deler)
- $D(x)$ er **divisoren** (det vi deler på)
- $Q(x)$ er **kvotienten** (svaret)
- $R(x)$ er **resten**`,
    },

    // Illustrasjon: Polynomdivisjon
    {
      id: '1t-1-8-polynomdivisjon-bilde',
      type: 'image',
      src: '/images/algebra/polynomdivisjon.svg',
      alt: 'Illustrasjon av polynomdivisjon med lang divisjon',
      caption: 'Polynomdivisjon - steg for steg',
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-1-8-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Utfør divisjonen $\\frac{6x^3}{2x}$`,
      solution: `**Løsning:**

Vi deler koeffisientene og trekker fra eksponentene:

$$\\frac{6x^3}{2x} = \\frac{6}{2} \\cdot x^{3-1} = 3x^2$$

**Svar:** $3x^2$`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-1-8-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Utfør divisjonene',
        subTasks: [
          { label: 'a', task: '$\\frac{8x^4}{2x}$', solution: '$4x^3$' },
          { label: 'b', task: '$\\frac{12x^5}{4x^2}$', solution: '$3x^3$' },
          { label: 'c', task: '$\\frac{15x^3}{5x^3}$', solution: '$3$' },
          { label: 'd', task: '$\\frac{-10x^6}{2x^2}$', solution: '$-5x^4$' },
        ],
        solution: 'a) $4x^3$, b) $3x^3$, c) $3$, d) $-5x^4$',
        hints: ['Del koeffisientene og trekk fra eksponentene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DIVISJON MED FLERE LEDD ==========
    {
      id: '1t-1-8-text-flere-ledd',
      type: 'text',
      content: `## Divisjon av polynom med monom

Når vi deler et polynom med flere ledd på et monom, deler vi hvert ledd for seg:

$$\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-1-8-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Utfør divisjonen $\\frac{6x^3 + 4x^2 - 2x}{2x}$`,
      solution: `**Løsning:**

Vi deler hvert ledd i telleren på nevneren:

$$\\frac{6x^3 + 4x^2 - 2x}{2x} = \\frac{6x^3}{2x} + \\frac{4x^2}{2x} - \\frac{2x}{2x}$$

$$= 3x^2 + 2x - 1$$

**Svar:** $3x^2 + 2x - 1$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-1-8-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Utfør divisjonene',
        subTasks: [
          { label: 'a', task: '$\\frac{8x^2 + 4x}{2x}$', solution: '$4x + 2$' },
          { label: 'b', task: '$\\frac{9x^3 - 6x^2 + 3x}{3x}$', solution: '$3x^2 - 2x + 1$' },
          { label: 'c', task: '$\\frac{x^4 + x^3 + x^2}{x^2}$', solution: '$x^2 + x + 1$' },
          { label: 'd', task: '$\\frac{12x^5 - 8x^3 + 4x}{4x}$', solution: '$3x^4 - 2x^2 + 1$' },
        ],
        solution: 'a) $4x + 2$, b) $3x^2 - 2x + 1$, c) $x^2 + x + 1$, d) $3x^4 - 2x^2 + 1$',
        hints: ['Del hvert ledd i telleren på nevneren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LANG DIVISJON ==========
    {
      id: '1t-1-8-text-lang',
      type: 'text',
      content: `## Polynomdivisjon - lang divisjon

Når vi skal dele et polynom på et annet polynom med flere ledd, bruker vi **lang divisjon**. Dette ligner på vanlig divisjon med tall.

**Fremgangsmåte:**
1. Del det første leddet i dividenden på det første leddet i divisoren
2. Gang svaret med hele divisoren
3. Trekk fra resultatet
4. Gjenta til graden av resten er lavere enn graden av divisoren`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-1-8-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Utfør divisjonen $(x^2 + 5x + 6) : (x + 2)$`,
      solution: `**Løsning:**

Vi setter opp lang divisjon:

**Steg 1:** Del $x^2$ på $x$: $\\frac{x^2}{x} = x$

**Steg 2:** Gang $x$ med $(x + 2)$: $x \\cdot (x + 2) = x^2 + 2x$

**Steg 3:** Trekk fra: $(x^2 + 5x + 6) - (x^2 + 2x) = 3x + 6$

**Steg 4:** Del $3x$ på $x$: $\\frac{3x}{x} = 3$

**Steg 5:** Gang $3$ med $(x + 2)$: $3 \\cdot (x + 2) = 3x + 6$

**Steg 6:** Trekk fra: $(3x + 6) - (3x + 6) = 0$

Resten er 0, så $(x + 2)$ går opp i $(x^2 + 5x + 6)$.

**Svar:** $(x^2 + 5x + 6) : (x + 2) = x + 3$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-1-8-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utfør divisjonene',
        subTasks: [
          { label: 'a', task: '$(x^2 + 7x + 12) : (x + 3)$', solution: '$x + 4$' },
          { label: 'b', task: '$(x^2 + 3x - 10) : (x - 2)$', solution: '$x + 5$' },
          { label: 'c', task: '$(x^2 - 9) : (x + 3)$', solution: '$x - 3$' },
          { label: 'd', task: '$(x^2 - 4x - 5) : (x + 1)$', solution: '$x - 5$' },
        ],
        solution: 'a) $x + 4$, b) $x + 5$, c) $x - 3$, d) $x - 5$',
        hints: ['Bruk lang divisjon steg for steg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DIVISJON MED REST ==========
    {
      id: '1t-1-8-text-rest',
      type: 'text',
      content: `## Divisjon med rest

Ikke alle polynomdivisjoner går opp. Når resten ikke er null, skriver vi svaret på formen:

$$\\frac{P(x)}{D(x)} = Q(x) + \\frac{R(x)}{D(x)}$$

der $R(x)$ er resten.`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-1-8-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Utfør divisjonen $(x^2 + 5x + 8) : (x + 2)$`,
      solution: `**Løsning:**

**Steg 1:** Del $x^2$ på $x$: $\\frac{x^2}{x} = x$

**Steg 2:** Gang $x$ med $(x + 2)$: $x^2 + 2x$

**Steg 3:** Trekk fra: $(x^2 + 5x + 8) - (x^2 + 2x) = 3x + 8$

**Steg 4:** Del $3x$ på $x$: $\\frac{3x}{x} = 3$

**Steg 5:** Gang $3$ med $(x + 2)$: $3x + 6$

**Steg 6:** Trekk fra: $(3x + 8) - (3x + 6) = 2$

Resten er $2$.

**Svar:** $(x^2 + 5x + 8) : (x + 2) = x + 3 + \\frac{2}{x + 2}$`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-1-8-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utfør divisjonene og oppgi kvotient og rest',
        subTasks: [
          { label: 'a', task: '$(x^2 + 4x + 5) : (x + 1)$', solution: '$x + 3$ med rest $2$' },
          { label: 'b', task: '$(x^2 + 2x + 7) : (x + 3)$', solution: '$x - 1$ med rest $10$' },
          { label: 'c', task: '$(2x^2 + 5x + 1) : (x + 2)$', solution: '$2x + 1$ med rest $-1$' },
          { label: 'd', task: '$(x^3 + 2x^2 - x + 3) : (x + 1)$', solution: '$x^2 + x - 2$ med rest $5$' },
        ],
        solution: 'a) $x + 3$ rest $2$, b) $x - 1$ rest $10$, c) $2x + 1$ rest $-1$, d) $x^2 + x - 2$ rest $5$',
        hints: ['Fortsett divisjonen til graden av resten er mindre enn graden av divisoren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TREDJEGRADSPOLYNOM ==========
    {
      id: '1t-1-8-text-tredje',
      type: 'text',
      content: `## Divisjon med tredjegradspolynom

Samme metode brukes for polynomer av høyere grad. La oss se på et eksempel med et tredjegradspolynom.`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '1t-1-8-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: `Utfør divisjonen $(x^3 - 6x^2 + 11x - 6) : (x - 1)$`,
      solution: `**Løsning:**

**Steg 1:** $\\frac{x^3}{x} = x^2$
$x^2 \\cdot (x - 1) = x^3 - x^2$
Rest: $(x^3 - 6x^2 + 11x - 6) - (x^3 - x^2) = -5x^2 + 11x - 6$

**Steg 2:** $\\frac{-5x^2}{x} = -5x$
$-5x \\cdot (x - 1) = -5x^2 + 5x$
Rest: $(-5x^2 + 11x - 6) - (-5x^2 + 5x) = 6x - 6$

**Steg 3:** $\\frac{6x}{x} = 6$
$6 \\cdot (x - 1) = 6x - 6$
Rest: $(6x - 6) - (6x - 6) = 0$

**Svar:** $(x^3 - 6x^2 + 11x - 6) : (x - 1) = x^2 - 5x + 6$`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '1t-1-8-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-1-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfør divisjonene',
        subTasks: [
          { label: 'a', task: '$(x^3 + 6x^2 + 11x + 6) : (x + 1)$', solution: '$x^2 + 5x + 6$' },
          { label: 'b', task: '$(x^3 - 2x^2 - 5x + 6) : (x - 1)$', solution: '$x^2 - x - 6$' },
          { label: 'c', task: '$(x^3 + 4x^2 + x - 6) : (x + 2)$', solution: '$x^2 + 2x - 3$' },
          { label: 'd', task: '$(2x^3 - 3x^2 - 5x + 6) : (x - 2)$', solution: '$2x^2 + x - 3$' },
        ],
        solution: 'a) $x^2 + 5x + 6$, b) $x^2 - x - 6$, c) $x^2 + 2x - 3$, d) $2x^2 + x - 3$',
        hints: ['Ta ett ledd om gangen og vær nøye med fortegnene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMMENDRAG ==========
    {
      id: '1t-1-8-summary',
      type: 'definition',
      title: 'Oppsummering',
      content: `**Polynomdivisjon:**
- Deler et polynom på et annet polynom
- Bruker lang divisjon når divisoren har flere ledd
- Svaret består av kvotient og eventuelt rest
- $P(x) = D(x) \\cdot Q(x) + R(x)$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_1_9: TextbookChapter = {
  id: '1t-1-9',
  courseId: '1t',
  chapterNumber: '1.9',
  title: 'Polynomdivisjon med lineær divisor',
  description: 'Del polynomer med uttrykk på formen (x - a).',
  estimatedMinutes: 35,
  competenceGoals: ['bruke polynomdivisjon til å omskrive algebraiske uttrykk', 'bruke faktorteoremet'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '1t-1-9-intro',
      type: 'text',
      content: `## Polynomdivisjon med $(x - a)$

I dette kapitlet ser vi nærmere på divisjon med **lineære divisorer** på formen $(x - a)$. Dette er spesielt nyttig for å:
- Faktorisere polynomer
- Finne nullpunkter
- Forenkle uttrykk`,
    },

    // ========== FAKTORTEOREMET ==========
    {
      id: '1t-1-9-faktorteoremet',
      type: 'theorem',
      title: 'Faktorteoremet',
      content: `Hvis $P(a) = 0$, så er $(x - a)$ en faktor i $P(x)$.

Med andre ord: Hvis $a$ er et nullpunkt for polynomet $P(x)$, så går $(x - a)$ opp i $P(x)$ uten rest.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-1-9-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Vis at $(x - 2)$ er en faktor i $P(x) = x^3 - 6x^2 + 11x - 6$`,
      solution: `**Løsning:**

Vi sjekker om $x = 2$ er et nullpunkt:

$P(2) = 2^3 - 6 \\cdot 2^2 + 11 \\cdot 2 - 6$
$= 8 - 24 + 22 - 6$
$= 0$

Siden $P(2) = 0$, er $(x - 2)$ en faktor i $P(x)$ ifølge faktorteoremet.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-1-9-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sjekk om den oppgitte faktoren går opp i polynomet ved å sette inn verdien',
        subTasks: [
          { label: 'a', task: 'Er $(x - 1)$ en faktor i $x^2 - 3x + 2$?', solution: 'Ja, $P(1) = 1 - 3 + 2 = 0$' },
          { label: 'b', task: 'Er $(x + 2)$ en faktor i $x^2 + 5x + 6$?', solution: 'Ja, $P(-2) = 4 - 10 + 6 = 0$' },
          { label: 'c', task: 'Er $(x - 3)$ en faktor i $x^2 - 5x + 6$?', solution: 'Ja, $P(3) = 9 - 15 + 6 = 0$' },
          { label: 'd', task: 'Er $(x + 1)$ en faktor i $x^2 + 2x + 3$?', solution: 'Nei, $P(-1) = 1 - 2 + 3 = 2 \\neq 0$' },
        ],
        solution: 'a) Ja, b) Ja, c) Ja, d) Nei',
        hints: ['Sett inn verdien $a$ der faktoren er $(x - a)$. For $(x + 2)$ setter du inn $x = -2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FINNE NULLPUNKTER ==========
    {
      id: '1t-1-9-text-nullpunkter',
      type: 'text',
      content: `## Finne nullpunkter ved gjetting

For polynomer med heltallskoeffisienter kan vi ofte finne nullpunkter ved å prøve divisorer av konstantleddet.

**Strategi:** Hvis $P(x) = x^n + ... + c$ har heltallskoeffisienter, prøv $x = \\pm 1, \\pm 2, \\pm 3, ...$ som er divisorer av $c$.`,
    },

    // Illustrasjon: Nullpunktmetoden
    {
      id: '1t-1-9-nullpunktmetoden-bilde',
      type: 'image',
      src: '/images/algebra/nullpunktmetoden.svg',
      alt: 'Grafisk fremstilling av nullpunktmetoden for polynomer',
      caption: 'Nullpunktmetoden - finne nullpunkter ved faktorisering',
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-1-9-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Finn et nullpunkt for $P(x) = x^3 - 2x^2 - 5x + 6$ og faktoriser.`,
      solution: `**Løsning:**

Konstantleddet er $6$, så vi prøver divisorer av $6$: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$

$P(1) = 1 - 2 - 5 + 6 = 0$ ✓

Siden $P(1) = 0$, er $(x - 1)$ en faktor.

Vi utfører polynomdivisjon:
$(x^3 - 2x^2 - 5x + 6) : (x - 1) = x^2 - x - 6$

Faktoriserer videre:
$x^2 - x - 6 = (x - 3)(x + 2)$

**Svar:** $P(x) = (x - 1)(x - 3)(x + 2)$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-1-9-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn et nullpunkt og bruk polynomdivisjon til å faktorisere',
        subTasks: [
          { label: 'a', task: '$x^3 - 6x^2 + 11x - 6$', solution: '$(x - 1)(x - 2)(x - 3)$' },
          { label: 'b', task: '$x^3 + 6x^2 + 11x + 6$', solution: '$(x + 1)(x + 2)(x + 3)$' },
          { label: 'c', task: '$x^3 - 4x^2 + x + 6$', solution: '$(x + 1)(x - 2)(x - 3)$' },
        ],
        solution: 'a) $(x - 1)(x - 2)(x - 3)$, b) $(x + 1)(x + 2)(x + 3)$, c) $(x + 1)(x - 2)(x - 3)$',
        hints: ['Prøv først $x = 1$ eller $x = -1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== RESTEN VED DIVISJON ==========
    {
      id: '1t-1-9-restteoremet',
      type: 'theorem',
      title: 'Restteoremet',
      content: `Når polynomet $P(x)$ deles på $(x - a)$, er resten lik $P(a)$.

$$P(x) = (x - a) \\cdot Q(x) + P(a)$$`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-1-9-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Finn resten når $P(x) = x^3 + 2x^2 - x + 3$ deles på $(x - 2)$`,
      solution: `**Løsning:**

Ifølge restteoremet er resten lik $P(2)$:

$P(2) = 2^3 + 2 \\cdot 2^2 - 2 + 3$
$= 8 + 8 - 2 + 3$
$= 17$

**Svar:** Resten er $17$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-1-9-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk restteoremet til å finne resten',
        subTasks: [
          { label: 'a', task: '$(x^2 + 3x + 5) : (x - 1)$', solution: 'Rest $= P(1) = 1 + 3 + 5 = 9$' },
          { label: 'b', task: '$(x^3 - 2x + 1) : (x + 1)$', solution: 'Rest $= P(-1) = -1 + 2 + 1 = 2$' },
          { label: 'c', task: '$(x^3 + x^2 - x - 1) : (x - 2)$', solution: 'Rest $= P(2) = 8 + 4 - 2 - 1 = 9$' },
          { label: 'd', task: '$(2x^3 - 5x + 3) : (x + 2)$', solution: 'Rest $= P(-2) = -16 + 10 + 3 = -3$' },
        ],
        solution: 'a) 9, b) 2, c) 9, d) $-3$',
        hints: ['Sett inn verdien $a$ i $P(x)$. For $(x + 2)$ bruker du $a = -2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FULLSTENDIG FAKTORISERING ==========
    {
      id: '1t-1-9-text-fullstendig',
      type: 'text',
      content: `## Fullstendig faktorisering

For å faktorisere et polynom fullstendig:
1. Finn ett nullpunkt $a$
2. Divider på $(x - a)$
3. Faktoriser kvotienten videre (om mulig)
4. Gjenta til du ikke kan faktorisere mer`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-1-9-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Faktoriser $P(x) = x^4 - 5x^2 + 4$ fullstendig.`,
      solution: `**Løsning:**

Prøver $x = 1$:
$P(1) = 1 - 5 + 4 = 0$ ✓

$(x - 1)$ er en faktor. Vi deler:
$(x^4 - 5x^2 + 4) : (x - 1) = x^3 + x^2 - 4x - 4$

Prøver $x = -1$ i $x^3 + x^2 - 4x - 4$:
$-1 + 1 + 4 - 4 = 0$ ✓

$(x + 1)$ er en faktor. Vi deler:
$(x^3 + x^2 - 4x - 4) : (x + 1) = x^2 - 4 = (x - 2)(x + 2)$

**Svar:** $P(x) = (x - 1)(x + 1)(x - 2)(x + 2)$`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-1-9-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Faktoriser polynomene fullstendig',
        subTasks: [
          { label: 'a', task: '$x^3 - 7x + 6$', solution: '$(x - 1)(x - 2)(x + 3)$' },
          { label: 'b', task: '$x^4 - 10x^2 + 9$', solution: '$(x - 1)(x + 1)(x - 3)(x + 3)$' },
          { label: 'c', task: '$x^3 + 2x^2 - x - 2$', solution: '$(x - 1)(x + 1)(x + 2)$' },
        ],
        solution: 'a) $(x - 1)(x - 2)(x + 3)$, b) $(x - 1)(x + 1)(x - 3)(x + 3)$, c) $(x - 1)(x + 1)(x + 2)$',
        hints: ['Start med å prøve $x = 1$ eller $x = -1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '1t-1-9-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-1-9-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfør polynomdivisjonene',
        subTasks: [
          { label: 'a', task: '$(x^3 - 8) : (x - 2)$', solution: '$x^2 + 2x + 4$' },
          { label: 'b', task: '$(x^3 + 27) : (x + 3)$', solution: '$x^2 - 3x + 9$' },
          { label: 'c', task: '$(x^4 - 16) : (x - 2)$', solution: '$x^3 + 2x^2 + 4x + 8$' },
          { label: 'd', task: '$(x^4 - 1) : (x - 1)$', solution: '$x^3 + x^2 + x + 1$' },
        ],
        solution: 'a) $x^2 + 2x + 4$, b) $x^2 - 3x + 9$, c) $x^3 + 2x^2 + 4x + 8$, d) $x^3 + x^2 + x + 1$',
        hints: ['Husk å ta med ledd med koeffisient 0, f.eks. $x^3 - 8 = x^3 + 0x^2 + 0x - 8$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMMENDRAG ==========
    {
      id: '1t-1-9-summary',
      type: 'definition',
      title: 'Oppsummering',
      content: `**Faktorteoremet:** Hvis $P(a) = 0$, er $(x - a)$ en faktor i $P(x)$

**Restteoremet:** Resten ved divisjon av $P(x)$ på $(x - a)$ er lik $P(a)$

**Strategi for faktorisering:**
1. Finn nullpunkt ved å prøve divisorer av konstantleddet
2. Divider og faktoriser videre`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_2_1: TextbookChapter = {
  id: '1t-2-1',
  courseId: '1t',
  chapterNumber: '2.1',
  title: 'Grunnleggende likninger',
  description: 'Lær grunnleggende teknikker for å løse førstegradslikninger med addisjon, subtraksjon, multiplikasjon og divisjon.',
  estimatedMinutes: 90,
  competenceGoals: ['løse lineære likninger', 'bruke regneregler for likninger'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '1t-2-1-intro',
      type: 'text',
      content: `## Likninger med addisjon og subtraksjon

Før du begynner på dette kapitlet er det viktig at du har pluss og minus (med parenteser) ordentlig på plass.

Hovedprinsippet for å løse likninger er at vi alltid gjør det samme på begge sider av likhetstegnet. Når vi skriver $| - 5$ betyr det at vi trekker fra 5 på begge sider av likheten.`,
    },

    // Illustrasjon: Likningsvekt
    {
      id: '1t-2-1-likningsvekt-bilde',
      type: 'image',
      src: '/images/algebra/likningsvekt.svg',
      alt: 'En vekt som illustrerer likhetsprinsippet i likninger',
      caption: 'En likning er som en vekt - det vi gjor på den ene siden må vi også gjøre på den andre',
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Løs likningene:

a) $x + 5 = 4$

b) $x - 1 = 4$`,
      solution: `**Løsning:**

a) $x + 5 = 4 \\quad | - 5$
$x + 5 - 5 = 4 - 5$
$x = -1$

b) $x - 1 = 4 \\quad | + 1$
$x - 1 + 1 = 4 + 1$
$x = 5$`,
      solutionVideo: 'GjeHzHCMsjE',
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$x + 3 = 5$', solution: '$x = 2$', expressionAnswer: '2' },
          { label: 'b', task: '$x - 9 = 3$', solution: '$x = 12$', expressionAnswer: '12' },
          { label: 'c', task: '$x - 20 = 0$', solution: '$x = 20$', expressionAnswer: '20' },
          { label: 'd', task: '$x + 200 = -100$', solution: '$x = -300$', expressionAnswer: '-300' },
          { label: 'e', task: '$x + 22 = 10$', solution: '$x = -12$', expressionAnswer: '-12' },
          { label: 'f', task: '$x + 10 = -2$', solution: '$x = -12$', expressionAnswer: '-12' },
        ],
        solution: 'a) $x = 2$, b) $x = 12$, c) $x = 20$, d) $x = -300$, e) $x = -12$, f) $x = -12$',
        solutionVideo: 'jSDr6gLxRZ0',
        hints: ['Bruk samme operasjon på begge sider av likhetstegnet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST OM ALGEBRA ==========
    {
      id: '1t-2-1-algebra-intro',
      type: 'text',
      content: `## Likninger med variabler på begge sider

For å forstå denne delen er det viktig å forstå veldig enkel algebra.

Eksempler på det du må kunne er at:
- $2x + 3x = 5x$
- $7x - 6x = x$

Vi får heller ikke lov til å blande konstanter og variabler. $3x + 3 + 2x = 5x + 3$ - vi kan ikke legge sammen $5x$ og $3$ uten å vite hva $x$ er.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-2-1-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Løs likningene:

a) $4 = x - 2$

b) $2x + 4 = x$`,
      solution: `**Løsning:**

a) $4 = x - 2 \\quad | + 2$
$6 = x$
$x = 6$ (Når $6 = x$ så er også $x = 6$)

b) $2x + 4 = x \\quad | - 4$
$2x = x - 4 \\quad | - x$
$2x - x = x - 4 - x$
$x = -4$`,
      solutionVideo: 'gz4sl_U6zCU',
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$3 = x - 5$', solution: '$x = 8$', expressionAnswer: '8' },
          { label: 'b', task: '$4 = x + 3$', solution: '$x = 1$', expressionAnswer: '1' },
          { label: 'c', task: '$2x - 2 = x$', solution: '$x = 2$', expressionAnswer: '2' },
          { label: 'd', task: '$3x + 31 = 2x$', solution: '$x = -31$', expressionAnswer: '-31' },
          { label: 'e', task: '$x + 22 = 2x$', solution: '$x = 22$', expressionAnswer: '22' },
          { label: 'f', task: '$4x + 10 = 3x - 2$', solution: '$x = -12$', expressionAnswer: '-12' },
        ],
        solution: 'a) $x = 8$, b) $x = 1$, c) $x = 2$, d) $x = -31$, e) $x = 22$, f) $x = -12$',
        solutionVideo: '_RvoUcTQqAE',
        hints: ['Samle x-leddene på én side og konstantleddene på den andre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST OM MULTIPLIKASJON OG DIVISJON ==========
    {
      id: '1t-2-1-mult-div-intro',
      type: 'text',
      content: `## Likninger med multiplikasjon og divisjon

Når vi har likninger der $x$ er ganget med et tall, må vi dele begge sider på dette tallet for å finne $x$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-2-1-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Løs likningene:

a) $3x = 12$

b) $4x - 3 = 17$`,
      solution: `**Løsning:**

a) $3x = 12 \\quad | \\div 3$
$\\frac{3x}{3} = \\frac{12}{3}$
$x = 4$

b) $4x - 3 = 17 \\quad | + 3$
$4x = 20 \\quad | \\div 4$
$x = 5$`,
      solutionVideo: '1R2iNG1aqGE',
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$5x = 20$', solution: '$x = 4$', expressionAnswer: '4' },
          { label: 'b', task: '$4x = -12$', solution: '$x = -3$', expressionAnswer: '-3' },
          { label: 'c', task: '$5x + 10 = 15$', solution: '$x = 1$', expressionAnswer: '1' },
          { label: 'd', task: '$30x - 100 = 200$', solution: '$x = 10$', expressionAnswer: '10' },
          { label: 'e', task: '$9x - 22 = -40$', solution: '$x = -2$', expressionAnswer: '-2' },
          { label: 'f', task: '$4x + 18 = 10$', solution: '$x = -2$', expressionAnswer: '-2' },
        ],
        solution: 'a) $x = 4$, b) $x = -3$, c) $x = 1$, d) $x = 10$, e) $x = -2$, f) $x = -2$',
        solutionVideo: 'qqsX19n7UkI',
        hints: ['Isoler x-leddet først, så del på koeffisienten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-2-1-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Løs likningene:

a) $8x + 15 = 3x$

b) $4x - 5 = 2x + 11$

c) $-4x = 20$`,
      solution: `**Løsning:**

a) $8x + 15 = 3x \\quad | - 3x$
$5x + 15 = 0 \\quad | - 15$
$5x = -15 \\quad | \\div 5$
$x = -3$

b) $4x - 5 = 2x + 11 \\quad | - 2x$
$2x - 5 = 11 \\quad | + 5$
$2x = 16 \\quad | \\div 2$
$x = 8$

c) $-4x = 20 \\quad | \\div (-4)$
$\\frac{-4x}{-4} = \\frac{20}{-4}$
$x = -5$`,
      solutionVideo: 'EZ4yDYMkzCg',
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$10x - 9 = 7x$', solution: '$x = 3$', expressionAnswer: '3' },
          { label: 'b', task: '$4x + 10 = -x$', solution: '$x = -2$', expressionAnswer: '-2' },
          { label: 'c', task: '$5x + 10 = 4x + 5$', solution: '$x = -5$', expressionAnswer: '-5' },
          { label: 'd', task: '$-3x = 30$', solution: '$x = -10$', expressionAnswer: '-10' },
          { label: 'e', task: '$-7x = -10 + 3x$', solution: '$x = 1$', expressionAnswer: '1' },
          { label: 'f', task: '$-4x + 8 = 2x + 44$', solution: '$x = -6$', expressionAnswer: '-6' },
        ],
        solution: 'a) $x = 3$, b) $x = -2$, c) $x = -5$, d) $x = -10$, e) $x = 1$, f) $x = -6$',
        solutionVideo: 'zPVvFneEtEE',
        hints: ['Pass på fortegnene når du deler med negative tall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '1t-2-1-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: `Løs likningene:

a) $\\frac{x}{2} = 5$

b) $\\frac{x}{-3} + 2 = 6$`,
      solution: `**Løsning:**

a) $\\frac{x}{2} = 5 \\quad | \\cdot 2$
$\\frac{x}{2} \\cdot 2 = 5 \\cdot 2$
$x = 10$

b) $\\frac{x}{-3} + 2 = 6 \\quad | - 2$
$\\frac{x}{-3} = 4 \\quad | \\cdot (-3)$
$x = -12$`,
      solutionVideo: 'Yn_wNYbVj10',
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '1t-2-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{3} = 2$', solution: '$x = 6$', expressionAnswer: '6' },
          { label: 'b', task: '$\\frac{x}{-5} = -2$', solution: '$x = 10$', expressionAnswer: '10' },
          { label: 'c', task: '$\\frac{x}{2} + 10 = 12$', solution: '$x = 4$', expressionAnswer: '4' },
          { label: 'd', task: '$\\frac{x}{4} - 3 = -5$', solution: '$x = -8$', expressionAnswer: '-8' },
          { label: 'e', task: '$110 = \\frac{x}{8} + 10$', solution: '$x = 800$', expressionAnswer: '800' },
          { label: 'f', task: '$10 = 8 + \\frac{x}{-3}$', solution: '$x = -6$', expressionAnswer: '-6' },
        ],
        solution: 'a) $x = 6$, b) $x = 10$, c) $x = 4$, d) $x = -8$, e) $x = 800$, f) $x = -6$',
        solutionVideo: 'hUeo_AIQ7CU',
        hints: ['Gang begge sider med nevneren for å fjerne brøken'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: '1t-2-1-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: `Løs likningene:

a) $\\frac{2x}{3} = 6$

b) $\\frac{5x}{2} - 4 = -9$`,
      solution: `**Løsning:**

a) $\\frac{2x}{3} = 6 \\quad | \\cdot 3$
$2x = 18 \\quad | \\div 2$
$x = 9$

b) $\\frac{5x}{2} - 4 = -9 \\quad | + 4$
$\\frac{5x}{2} = -5 \\quad | \\cdot 2$
$5x = -10 \\quad | \\div 5$
$x = -2$`,
      solutionVideo: '35M06IctaZA',
    },

    // ========== OPPGAVE 6 ==========
    {
      id: '1t-2-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{3x}{5} = 6$', solution: '$x = 10$', expressionAnswer: '10' },
          { label: 'b', task: '$\\frac{2x}{3} = -8$', solution: '$x = -12$', expressionAnswer: '-12' },
          { label: 'c', task: '$\\frac{3x}{2} - 2 = 7$', solution: '$x = 6$', expressionAnswer: '6' },
          { label: 'd', task: '$-15 + \\frac{5x}{4} = -5$', solution: '$x = 8$', expressionAnswer: '8' },
          { label: 'e', task: '$3 = \\frac{3x}{8} + 6$', solution: '$x = -8$', expressionAnswer: '-8' },
          { label: 'f', task: '$\\frac{10x}{-30} + 8 = -2$', solution: '$x = 30$', expressionAnswer: '30' },
        ],
        solution: 'a) $x = 10$, b) $x = -12$, c) $x = 6$, d) $x = 8$, e) $x = -8$, f) $x = 30$',
        solutionVideo: 'yf9OSVFPifk',
        hints: ['Gang med nevneren først, deretter del på koeffisienten foran x'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '1t-2-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        // Repetisjonsoppgave R1
        {
          id: '1t-2-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '1t-2-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Løs likningene',
            subTasks: [
              { label: 'a', task: '$x - 5 = 2$', expressionAnswer: '7' },
              { label: 'b', task: '$x + 2 = 11$', expressionAnswer: '9' },
              { label: 'c', task: '$x - 10 = 0$', expressionAnswer: '10' },
              { label: 'd', task: '$x - 150 = 3000$', expressionAnswer: '3150' },
              { label: 'e', task: '$x + 20 = 20$', expressionAnswer: '0' },
              { label: 'f', task: '$x + 10 = -2$', expressionAnswer: '-12' },
            ],
            solution: 'a) $x = 7$, b) $x = 9$, c) $x = 10$, d) $x = 3150$, e) $x = 0$, f) $x = -12$',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave R2
        {
          id: '1t-2-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '1t-2-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Løs likningene',
            subTasks: [
              { label: 'a', task: '$x - 30 = -50$', expressionAnswer: '-20' },
              { label: 'b', task: '$x + 90 = 30$', expressionAnswer: '-60' },
              { label: 'c', task: '$x - (-20) = 300$', expressionAnswer: '280' },
              { label: 'd', task: '$x - 800 = -1000$', expressionAnswer: '-200' },
              { label: 'e', task: '$x + 3 = -1$', expressionAnswer: '-4' },
              { label: 'f', task: '$x + 10 - 20 = -9$', expressionAnswer: '1' },
            ],
            solution: 'a) $x = -20$, b) $x = -60$, c) $x = 280$, d) $x = -200$, e) $x = -4$, f) $x = 1$',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave R3
        {
          id: '1t-2-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '1t-2-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Løs likningene',
            subTasks: [
              { label: 'a', task: '$40 = x - 32$', expressionAnswer: '72' },
              { label: 'b', task: '$-4 = x + 20$', expressionAnswer: '-24' },
              { label: 'c', task: '$20x - 12 = 19x$', expressionAnswer: '12' },
              { label: 'd', task: '$2x + 31 = x$', expressionAnswer: '-31' },
              { label: 'e', task: '$x + 124 = 2x$', expressionAnswer: '124' },
              { label: 'f', task: '$5x + 1 = 4x - 2$', expressionAnswer: '-3' },
            ],
            solution: 'a) $x = 72$, b) $x = -24$, c) $x = 12$, d) $x = -31$, e) $x = 124$, f) $x = -3$',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave R4
        {
          id: '1t-2-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '1t-2-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'lett',
            task: 'Løs likningene',
            subTasks: [
              { label: 'a', task: '$5x = 20$', expressionAnswer: '4' },
              { label: 'b', task: '$4x = -20$', expressionAnswer: '-5' },
              { label: 'c', task: '$3x - 20 = 10$', expressionAnswer: '10' },
              { label: 'd', task: '$3x - 10 = 50$', expressionAnswer: '20' },
              { label: 'e', task: '$6x + 15 = -45$', expressionAnswer: '-10' },
              { label: 'f', task: '$2x + 12 = -10$', expressionAnswer: '-11' },
            ],
            solution: 'a) $x = 4$, b) $x = -5$, c) $x = 10$, d) $x = 20$, e) $x = -10$, f) $x = -11$',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave R5
        {
          id: '1t-2-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '1t-2-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs likningene',
            subTasks: [
              { label: 'a', task: '$8x + 6 = 6x$', expressionAnswer: '-3' },
              { label: 'b', task: '$-2x + 1 = -x$', expressionAnswer: '1' },
              { label: 'c', task: '$4x - 2 = x + 7$', expressionAnswer: '3' },
              { label: 'd', task: '$-5x = 10$', expressionAnswer: '-2' },
              { label: 'e', task: '$-3x + 1 = -11 + 3x$', expressionAnswer: '2' },
              { label: 'f', task: '$x + 8 = -2x + 20$', expressionAnswer: '4' },
            ],
            solution: 'a) $x = -3$, b) $x = 1$, c) $x = 3$, d) $x = -2$, e) $x = 2$, f) $x = 4$',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave R6
        {
          id: '1t-2-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '1t-2-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs likningene',
            subTasks: [
              { label: 'a', task: '$\\frac{x}{2} = -6$', expressionAnswer: '-12' },
              { label: 'b', task: '$\\frac{x}{-3} = 20$', expressionAnswer: '-60' },
              { label: 'c', task: '$\\frac{x}{-3} - 5 = 1$', expressionAnswer: '-18' },
              { label: 'd', task: '$\\frac{x}{2} - 8 = 2$', expressionAnswer: '20' },
              { label: 'e', task: '$-210 = \\frac{x}{2} + 10$', expressionAnswer: '-440' },
              { label: 'f', task: '$1 = 3 + \\frac{x}{-3}$', expressionAnswer: '6' },
            ],
            solution: 'a) $x = -12$, b) $x = -60$, c) $x = -18$, d) $x = 20$, e) $x = -110$, f) $x = 6$',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave R7
        {
          id: '1t-2-1-rep-7',
          type: 'exercise',
          exercise: {
            id: '1t-2-1-rep-ex-7',
            number: 'R7',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs likningene',
            subTasks: [
              { label: 'a', task: '$\\frac{7x}{2} = 0$', expressionAnswer: '0' },
              { label: 'b', task: '$2 = \\frac{-3x}{6}$', expressionAnswer: '-4' },
              { label: 'c', task: '$\\frac{x}{2} + 1 = 2$', expressionAnswer: '2' },
              { label: 'd', task: '$30 - \\frac{5x}{2} = 5$', expressionAnswer: '10' },
              { label: 'e', task: '$1 = \\frac{x}{7} - 3$', expressionAnswer: '28' },
              { label: 'f', task: '$\\frac{10x}{3} - 2 = 18$', expressionAnswer: '6' },
            ],
            solution: 'a) $x = 0$, b) $x = -4$, c) $x = 2$, d) $x = 10$, e) $x = 28$, f) $x = 6$',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },

    // ========== DEL 2: LIKNINGER MED BRØKER OG PARENTESER ==========
    {
      id: '1t-2-1-del2-intro',
      type: 'text',
      content: `## Grunnleggende likninger del 2
### Likninger med brøker og parenteser

Før du begynner på del to av grunnleggende likninger er det viktig at du har brøkregning ordentlig på plass.`,
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: '1t-2-1-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: `Løs likningene:

a) $\\frac{30}{2x} = 5$

b) $\\frac{3}{x + 2} = 2$`,
      solution: `**Løsning:**

a) $\\frac{30}{2x} = 5 \\quad | \\cdot 2x$
$30 = 10x$
$10x = 30 \\quad | \\div 10$
$x = 3$

b) $\\frac{3}{x + 2} = 2 \\quad | \\cdot (x + 2)$
$\\frac{3(x + 2)}{x + 2} = 2(x + 2)$
$3 = 2(x + 2)$
$3 = 2x + 4$
$2x + 4 = 3 \\quad | - 4$
$2x = -1 \\quad | \\div 2$
$x = -\\frac{1}{2}$`,
      solutionVideo: 'qU-XL6Rva2U',
    },

    // ========== OPPGAVE 7 ==========
    {
      id: '1t-2-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{6}{x} = 2$', solution: '$x = 3$', expressionAnswer: '3' },
          { label: 'b', task: '$\\frac{2}{3x} = 2$', solution: '$x = \\frac{1}{3}$', expressionAnswer: '1/3' },
          { label: 'c', task: '$\\frac{2}{x} - 2 = 7$', solution: '$x = \\frac{2}{9}$', expressionAnswer: '2/9' },
          { label: 'd', task: '$\\frac{3}{x + 2} = 1$', solution: '$x = 1$', expressionAnswer: '1' },
          { label: 'e', task: '$3 = \\frac{-2}{x - 3} + 6$', solution: '$x = \\frac{11}{3}$', expressionAnswer: '11/3' },
          { label: 'f', task: '$\\frac{2}{2x - 5} = -2$', solution: '$x = 2$', expressionAnswer: '2' },
        ],
        solution: 'a) $x = 3$, b) $x = \\frac{1}{3}$, c) $x = \\frac{2}{9}$, d) $x = 1$, e) $x = \\frac{11}{3}$, f) $x = 2$',
        solutionVideo: 'k8GDEkTgojM',
        hints: ['Gang begge sider med nevneren for å fjerne brøken'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 8 ==========
    {
      id: '1t-2-1-example-8',
      type: 'example',
      title: 'Eksempel 8',
      problem: `Løs likningene:

a) $\\frac{x - 3}{2} = x + 1$

b) $\\frac{3x + 1}{x + 3} = 2$`,
      solution: `**Løsning:**

a) $\\frac{x - 3}{2} = x + 1 \\quad | \\cdot 2$
$x - 3 = 2(x + 1)$
$x - 3 = 2x + 2 \\quad | + 3$
$x = 2x + 5 \\quad | - 2x$
$-x = 5 \\quad | \\cdot (-1)$
$x = -5$

b) $\\frac{3x + 1}{x + 3} = 2 \\quad | \\cdot (x + 3)$
$3x + 1 = 2(x + 3)$
$3x + 1 = 2x + 6 \\quad | - 1$
$3x = 2x + 5 \\quad | - 2x$
$x = 5$`,
      solutionVideo: 'QRTMT8ZLtk4',
    },

    // ========== OPPGAVE 8 ==========
    {
      id: '1t-2-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{4x - 6}{3} = x + 3$', solution: '$x = 15$', expressionAnswer: '15' },
          { label: 'b', task: '$\\frac{3x}{x + 1} = 2$', solution: '$x = 2$', expressionAnswer: '2' },
          { label: 'c', task: '$\\frac{13x + 2}{2x} = 7$', solution: '$x = 2$', expressionAnswer: '2' },
          { label: 'd', task: '$\\frac{x + 1}{4} - 15 = -5$', solution: '$x = 39$', expressionAnswer: '39' },
          { label: 'e', task: '$3 = \\frac{x - 1}{8} + 6$', solution: '$x = -23$', expressionAnswer: '-23' },
          { label: 'f', task: '$\\frac{3 - x}{x} + 8 = -2$', solution: '$x = -\\frac{1}{3}$', expressionAnswer: '-1/3' },
        ],
        solution: 'a) $x = 15$, b) $x = 2$, c) $x = 2$, d) $x = 39$, e) $x = -23$, f) $x = -\\frac{1}{3}$',
        solutionVideo: 'WMCO21lyRg4',
        hints: ['Gang begge sider med nevneren, pass på parentesene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 9 ==========
    {
      id: '1t-2-1-example-9',
      type: 'example',
      title: 'Eksempel 9',
      problem: `Løs likningene:

a) $\\frac{x}{2} + \\frac{2}{3} = 1$

b) $\\frac{2x}{3} - \\frac{2}{5} = 1$`,
      solution: `**Løsning:**

a) $\\frac{x}{2} + \\frac{2}{3} = 1 \\quad | - \\frac{2}{3}$
$\\frac{x}{2} = \\frac{3}{3} - \\frac{2}{3}$
$\\frac{x}{2} = \\frac{1}{3} \\quad | \\cdot 2$
$x = \\frac{2}{3}$

b) $\\frac{2x}{3} - \\frac{2}{5} = 1 \\quad | + \\frac{2}{5}$
$\\frac{2x}{3} = \\frac{5}{5} + \\frac{2}{5}$
$\\frac{2x}{3} = \\frac{7}{5} \\quad | \\cdot 3$
$2x = \\frac{21}{5} \\quad | \\div 2$
$x = \\frac{21}{10}$`,
      solutionVideo: 'JF6LBRzXhwE',
    },

    // ========== OPPGAVE 9 ==========
    {
      id: '1t-2-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{4} + \\frac{1}{3} = 1$', solution: '$x = \\frac{8}{3}$', expressionAnswer: '8/3' },
          { label: 'b', task: '$\\frac{2x}{3} - \\frac{2}{2} = 1$', solution: '$x = 3$', expressionAnswer: '3' },
          { label: 'c', task: '$\\frac{3x}{2} = \\frac{1}{3}$', solution: '$x = \\frac{2}{9}$', expressionAnswer: '2/9' },
          { label: 'd', task: '$\\frac{x}{10} + \\frac{3}{2} = \\frac{1}{5}$', solution: '$x = -13$', expressionAnswer: '-13' },
          { label: 'e', task: '$\\frac{3x}{2} = \\frac{1}{5} - 2$', solution: '$x = -\\frac{6}{5}$', expressionAnswer: '-6/5' },
          { label: 'f', task: '$\\frac{1}{4} = \\frac{x}{2} - 3$', solution: '$x = \\frac{13}{2}$', expressionAnswer: '13/2' },
        ],
        solution: 'a) $x = \\frac{8}{3}$, b) $x = 3$, c) $x = \\frac{2}{9}$, d) $x = -13$, e) $x = -\\frac{6}{5}$, f) $x = \\frac{13}{2}$',
        solutionVideo: 'l4lHWmEgpEw',
        hints: ['Finn fellesnevner eller gang med nevneren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 10 ==========
    {
      id: '1t-2-1-example-10',
      type: 'example',
      title: 'Eksempel 10',
      problem: `Løs likningen:

$\\frac{x}{2} + \\frac{x}{3} = 1$`,
      solution: `**Løsning alternativ 1** (finn fellesnevner):
$\\frac{x}{2} + \\frac{x}{3} = 1$
$\\frac{x \\cdot 3}{2 \\cdot 3} + \\frac{x \\cdot 2}{3 \\cdot 2} = 1$
$\\frac{3x}{6} + \\frac{2x}{6} = 1$
$\\frac{3x + 2x}{6} = 1$
$\\frac{5x}{6} = 1 \\quad | \\cdot 6$
$5x = 6 \\quad | \\div 5$
$x = \\frac{6}{5}$

**Løsning alternativ 2** (gang med fellesnevner):
$\\frac{x}{2} + \\frac{x}{3} = 1 \\quad | \\cdot 6$
$\\frac{6 \\cdot x}{2} + \\frac{6 \\cdot x}{3} = 1 \\cdot 6$
$3x + 2x = 6$
$5x = 6 \\quad | \\div 5$
$x = \\frac{6}{5}$`,
      solutionVideo: 'D8sOJCxWlwU',
    },

    // ========== OPPGAVE 10 ==========
    {
      id: '1t-2-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{4} + \\frac{x}{3} = 1$', solution: '$x = \\frac{12}{7}$', expressionAnswer: '12/7' },
          { label: 'b', task: '$\\frac{2x}{3} - \\frac{x}{2} = 1$', solution: '$x = 6$', expressionAnswer: '6' },
          { label: 'c', task: '$\\frac{3x}{2} = \\frac{x}{4}$', solution: '$x = 0$', expressionAnswer: '0' },
          { label: 'd', task: '$\\frac{2x}{5} = -\\frac{x}{2} + 10$', solution: '$x = \\frac{100}{9}$', expressionAnswer: '100/9' },
          { label: 'e', task: '$4 = \\frac{3x}{7} + x$', solution: '$x = \\frac{14}{5}$', expressionAnswer: '14/5' },
          { label: 'f', task: '$\\frac{x}{2} - \\frac{x}{6} = \\frac{x}{4} - 1$', solution: '$x = -12$', expressionAnswer: '-12' },
        ],
        solution: 'a) $x = \\frac{12}{7}$, b) $x = 6$, c) $x = 0$, d) $x = \\frac{100}{9}$, e) $x = \\frac{14}{5}$, f) $x = -12$',
        solutionVideo: '7N0iDdoHO3I',
        hints: ['Gang alle leddene med fellesnevner for å fjerne brøkene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 11 ==========
    {
      id: '1t-2-1-example-11',
      type: 'example',
      title: 'Eksempel 11',
      problem: `Løs likningene:

a) $3(x - 2) = 4$

b) $4 - 2(x + 1) = 22$`,
      solution: `**Løsning:**

a) $3(x - 2) = 4$
$3x - 6 = 4 \\quad | + 6$
$3x = 10 \\quad | \\div 3$
$x = \\frac{10}{3}$

b) $4 - 2(x + 1) = 22 \\quad | - 4$
$-2(x + 1) = 18$
$-2x - 2 = 18 \\quad | + 2$
$-2x = 20 \\quad | \\div (-2)$
$x = -10$`,
      solutionVideo: 'gPOo3GdR8CU',
    },

    // ========== OPPGAVE 11 ==========
    {
      id: '1t-2-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$2(x - 1) = 4$', solution: '$x = 3$', expressionAnswer: '3' },
          { label: 'b', task: '$5(x - 2) = 3$', solution: '$x = \\frac{13}{5}$', expressionAnswer: '13/5' },
          { label: 'c', task: '$2 + 3(x - 1) = 5$', solution: '$x = 2$', expressionAnswer: '2' },
          { label: 'd', task: '$5(x + 1) = 2(x - 1)$', solution: '$x = -\\frac{7}{3}$', expressionAnswer: '-7/3' },
          { label: 'e', task: '$6 - 3(x + 2) = x$', solution: '$x = 0$', expressionAnswer: '0' },
          { label: 'f', task: '$-2(3x - 15) = 8x - (-x)$', solution: '$x = 2$', expressionAnswer: '2' },
        ],
        solution: 'a) $x = 3$, b) $x = \\frac{13}{5}$, c) $x = 2$, d) $x = -\\frac{7}{3}$, e) $x = 0$, f) $x = 2$',
        solutionVideo: 'hPmz_2nYd5Q',
        hints: ['Multipliser ut parentesene først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 12 ==========
    {
      id: '1t-2-1-example-12',
      type: 'example',
      title: 'Eksempel 12',
      problem: `Løs likningene:

a) $\\frac{1}{2} - \\frac{2x - 4}{2} = 5$

b) $\\frac{2x}{x + 1} - \\frac{3}{2} = 2$`,
      solution: `**Løsning:**

a) $\\frac{1}{2} - \\frac{2x - 4}{2} = 5 \\quad | \\cdot 2$
$1 - (2x - 4) = 10$
$1 - 2x + 4 = 10 \\quad | - 1 - 4$
$-2x = 5 \\quad | \\div (-2)$
$x = -\\frac{5}{2}$

b) Vi ser at fellesnevner blir $2(x + 1)$. Gang med dette på begge sider:
$\\frac{2x}{x + 1} - \\frac{3}{2} = 2$
$\\frac{2 \\cdot 2x}{2(x + 1)} - \\frac{3(x + 1)}{2(x + 1)} = 2$
$\\frac{4x - 3(x + 1)}{2(x + 1)} = 2$
$\\frac{4x - 3x - 3}{2(x + 1)} = 2$
$\\frac{x - 3}{2x + 2} = 2 \\quad | \\cdot (2x + 2)$
$x - 3 = 4x + 4 \\quad | - 4x + 3$
$-3x = 7 \\quad | \\div (-3)$
$x = -\\frac{7}{3}$`,
      solutionVideo: 'Zkg-iMpR-WA',
    },

    // ========== OPPGAVE 12 ==========
    {
      id: '1t-2-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2} - \\frac{x + 1}{2} = 4$', solution: '$x = -8$', expressionAnswer: '-8' },
          { label: 'b', task: '$\\frac{1}{3} - \\frac{x - 2}{2} = 2$', solution: '$x = -\\frac{4}{3}$', expressionAnswer: '-4/3' },
          { label: 'c', task: '$\\frac{x}{x + 2} - \\frac{1}{2} = 1$', solution: '$x = -6$', expressionAnswer: '-6' },
          { label: 'd', task: '$\\frac{2x - 1}{x + 5} = -\\frac{3}{2}$', solution: '$x = -\\frac{13}{7}$', expressionAnswer: '-13/7' },
          { label: 'e', task: '$\\frac{5x - 1}{2x + 1} + \\frac{1}{2} = -\\frac{5}{2}$', solution: '$x = -\\frac{2}{11}$', expressionAnswer: '-2/11' },
          { label: 'f', task: '$\\frac{5x - 1}{-x + 1} = \\frac{1}{2} - \\frac{5}{3}$', solution: '$x = -\\frac{1}{23}$', expressionAnswer: '-1/23' },
        ],
        solution: 'a) $x = -8$, b) $x = -\\frac{4}{3}$, c) $x = -6$, d) $x = -\\frac{13}{7}$, e) $x = -\\frac{2}{11}$, f) $x = -\\frac{1}{23}$',
        solutionVideo: 'MbRlTuXfFhc',
        hints: ['Finn fellesnevner, gang og pass på fortegn i parenteser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 13 ==========
    {
      id: '1t-2-1-example-13',
      type: 'example',
      title: 'Eksempel 13',
      problem: `Løs likningen:

$\\frac{3}{4}\\left(\\frac{1}{3} - x\\right) + 2x = 5$`,
      solution: `**Løsning:**
$\\frac{3}{4}\\left(\\frac{1}{3} - x\\right) + 2x = 5$
$\\frac{3}{4} \\cdot \\frac{1}{3} - \\frac{3}{4} \\cdot x + 2x = 5$
$\\frac{1}{4} - \\frac{3x}{4} + 2x = 5 \\quad | \\cdot 4$
$1 - 3x + 8x = 20 \\quad | - 1$
$5x = 19 \\quad | \\div 5$
$x = \\frac{19}{5}$`,
      solutionVideo: 'Ykqty_V29EE',
    },

    // ========== OPPGAVE 13 ==========
    {
      id: '1t-2-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: '1t-2-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2}(1 - x) = 5$', solution: '$x = -9$', expressionAnswer: '-9' },
          { label: 'b', task: '$\\frac{1}{4}\\left(\\frac{x}{3} - 1\\right) = 1$', solution: '$x = 15$', expressionAnswer: '15' },
          { label: 'c', task: '$\\frac{3}{5}\\left(5 - \\frac{x}{3}\\right) + 2x = 2$', solution: '$x = -\\frac{5}{9}$', expressionAnswer: '-5/9' },
          { label: 'd', task: '$\\frac{3}{7}\\left(x - \\frac{1}{2}\\right) = 5 - x$', solution: '$x = \\frac{73}{20}$', expressionAnswer: '73/20' },
          { label: 'e', task: '$\\frac{5x}{4}\\left(\\frac{1}{3} - \\frac{1}{2}\\right) = \\frac{x}{2} - 1$', solution: '$x = \\frac{24}{17}$', expressionAnswer: '24/17' },
          { label: 'f', task: '$\\frac{x}{4} - 1 = x\\left(\\frac{1}{3} - 2\\right)$', solution: '$x = \\frac{12}{23}$', expressionAnswer: '12/23' },
        ],
        solution: 'a) $x = -9$, b) $x = 15$, c) $x = -\\frac{5}{9}$, d) $x = \\frac{73}{20}$, e) $x = \\frac{24}{17}$, f) $x = \\frac{12}{23}$',
        solutionVideo: 'KsXuZEdjbKA',
        hints: ['Multipliser ut parentesene, samle alle x-ledd og konstanter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_2_4: TextbookChapter = {
  id: '1t-2-3',
  courseId: '1t',
  chapterNumber: '2.3',
  title: 'ABC-formelen',
  description: 'Andregradsformelen for løsning av andregradslikninger, nullpunktsfaktorisering og produktregelen.',
  estimatedMinutes: 60,
  competenceGoals: ['løse andregradslikninger med abc-formelen', 'faktorisere andregradsuttrykk ved nullpunktsfaktorisering'],
  content: [
    // ========== ABC-FORMELEN ==========
    {
      id: 'bi-okonomi-2-2-section-abc',
      type: 'text',
      content: `# abc-formelen

For å finne nullpunktene til en andregradslikning på formen $ax^2 + bx + c = 0$ bruker vi formelen under.`,
    },
    {
      id: 'bi-okonomi-2-2-theorem-abc',
      type: 'theorem',
      title: 'abc-formelen',
      content: `$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`,
    },

    // Illustrasjon: ABC-formelen
    {
      id: 'bi-okonomi-2-2-abc-bilde',
      type: 'image',
      src: '/images/algebra/abc-formelen.svg',
      alt: 'ABC-formelen for andregradslikninger',
      caption: 'ABC-formelen brukes til å finne nullpunktene til andregradslikninger',
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bi-okonomi-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Løs likningene ved hjelp av abc-formelen:\n\na) $x^2 - 5x + 6 = 0$\nb) $2x^2 - 12x = -16$',
      solution: `**Løsning:**

a) $1x^2 - 5x + 6 = 0$ (Vi skriver vanligvis ikke 1-tallet)

Her ser vi at $a = 1$, $b = -5$ og $c = 6$

Vi setter inn i abc-formelen og løser for $x_1$ og $x_2$:

$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4 \\cdot 1 \\cdot 6}}{2 \\cdot 1}$

$= \\frac{5 \\pm \\sqrt{25 - 24}}{2} = \\frac{5 \\pm \\sqrt{1}}{2} = \\frac{5 \\pm 1}{2}$

$x_1 = \\frac{5 - 1}{2} = \\frac{4}{2} = 2$ og $x_2 = \\frac{5 + 1}{2} = \\frac{6}{2} = 3$

b) $2x^2 - 12x = -16$

Vi skriver først om til formen $ax^2 + bx + c = 0$:
$2x^2 - 12x + 16 = 0$

Vi ser at $a = 2$, $b = -12$ og $c = 16$

Vi setter inn i abc-formelen:

$x = \\frac{-(-12) \\pm \\sqrt{(-12)^2 - 4 \\cdot 2 \\cdot 16}}{2 \\cdot 2} = \\frac{12 \\pm \\sqrt{144 - 128}}{4}$

$x = \\frac{12 \\pm \\sqrt{16}}{4} = \\frac{12 \\pm 4}{4}$

$x_1 = \\frac{12 + 4}{4} = \\frac{16}{4} = 4$ og $x_2 = \\frac{12 - 4}{4} = \\frac{8}{4} = 2$`,
      solutionVideo: '4CEtTnmFeC4',
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bi-okonomi-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene ved hjelp av abc-formelen',
        subTasks: [
          { label: 'a', task: '$x^2 + 5x + 6 = 0$', solution: '$x_1 = -2$ og $x_2 = -3$' },
          { label: 'b', task: '$2x^2 - 6x + 4 = 0$', solution: '$x_1 = 1$ og $x_2 = 2$' },
          { label: 'c', task: '$-x^2 - 3x + 10 = 0$', solution: '$x_1 = 2$ og $x_2 = -5$' },
          { label: 'd', task: '$x^2 = 4x + 12$', solution: '$x_1 = 6$ og $x_2 = -2$' },
          { label: 'e', task: '$x^2 + 10 = -7x$', solution: '$x_1 = -2$ og $x_2 = -5$' },
          { label: 'f', task: '$-3x^2 = 15 - 18x$', solution: '$x_1 = 5$ og $x_2 = 1$' },
        ],
        hints: ['Skriv likningen på formen $ax^2 + bx + c = 0$ først.'],
        solution: 'a) $x = -2$ eller $x = -3$, b) $x = 1$ eller $x = 2$, c) $x = 2$ eller $x = -5$, d) $x = 6$ eller $x = -2$, e) $x = -2$ eller $x = -5$, f) $x = 5$ eller $x = 1$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SPESIALTILFELLER ==========
    {
      id: 'bi-okonomi-2-2-section-spesial',
      type: 'text',
      content: `## Spesialtilfeller

**En løsning:**
Dersom det som står under rottegnet blir null så vil vi få $\\pm 0$ i abc-formelen vår. Vi vil i dette tilfellet kun stå igjen med ett svar siden det å legge til 0 ikke er forskjellig fra å trekke fra 0.

**Ingen løsninger:**
Vi ender noen ganger opp med negative tall under rottegnet vårt. Ettersom kvadratrøtter av negative tall ikke er definert så vil vi ikke ende opp med noen svar i disse tilfellene. $L = \\emptyset$.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bi-okonomi-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Løs likningene ved hjelp av abc-formelen:\n\na) $x^2 + 10x + 25 = 0$\nb) $x^2 - 5x + 8 = 0$',
      solution: `**Løsning:**

a) $x^2 + 10x + 25 = 0$

Her ser vi at $a = 1$, $b = 10$ og $c = 25$

Vi setter inn i abc-formelen:

$x = \\frac{-10 \\pm \\sqrt{10^2 - 4 \\cdot 1 \\cdot 25}}{2 \\cdot 1} = \\frac{-10 \\pm \\sqrt{100 - 100}}{2}$

$= \\frac{-10 \\pm \\sqrt{0}}{2} = -\\frac{10}{2} = -5$

Vi har altså her kun én løsning $x = -5$

b) $x^2 - 5x + 8 = 0$

Her ser vi at $a = 1$, $b = -5$ og $c = 8$

$x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4 \\cdot 1 \\cdot 8}}{2 \\cdot 1} = \\frac{5 \\pm \\sqrt{25 - 32}}{2} = \\frac{5 \\pm \\sqrt{-7}}{2}$

Ettersom $\\sqrt{-7}$ ikke er definert så vil det heller ikke finnes noen løsninger på likningen.

**Svar:** $L = \\emptyset$`,
      solutionVideo: 'DSjsZFe57O4',
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bi-okonomi-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs om mulig likningene ved hjelp av abc-formelen',
        subTasks: [
          { label: 'a', task: '$x^2 - 10x + 25 = 0$', solution: '$x = 5$ (én løsning)' },
          { label: 'b', task: '$x^2 - 7x + 15 = 0$', solution: '$L = \\emptyset$ (ingen løsninger)' },
          { label: 'c', task: '$x^2 - 20x + 100 = 0$', solution: '$x = 10$ (én løsning)' },
          { label: 'd', task: '$2x^2 - 10x + 16 = 0$', solution: '$L = \\emptyset$ (ingen løsninger)' },
          { label: 'e', task: '$x^2 - 15x + 50 = 0$', solution: '$x_1 = 5$ og $x_2 = 10$' },
          { label: 'f', task: '$-x^2 - 2x - 1 = 0$', solution: '$x = -1$ (én løsning)' },
        ],
        hints: ['Sjekk diskriminanten $b^2 - 4ac$. Hvis den er negativ, finnes ingen løsninger.'],
        solution: 'a) $x = 5$, b) $L = \\emptyset$, c) $x = 10$, d) $L = \\emptyset$, e) $x = 5$ eller $x = 10$, f) $x = -1$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NULLPUNKTSFAKTORISERING ==========
    {
      id: 'bi-okonomi-2-2-section-nullpunkt',
      type: 'text',
      content: `## Nullpunktsfaktorisering (ved bruk av abc-formelen)

Vi kan bruke nullpunktene vi finner når vi løser likningen:

$$ax^2 + bx + c = 0$$

Svarene på denne likningen blir $x_1$ og $x_2$. Disse kan vi sette inn i formelen under for å faktorisere andregraduttrykk.

$$ax^2 + bx + c = a(x - x_1)(x - x_2)$$

**NB:** Om vi kun får én løsning på abc-formelen så setter vi inn denne løsningen for både $x_1$ og $x_2$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bi-okonomi-2-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Faktoriser uttrykkene ved å bruke nullpunktsfaktorisering:\n\na) $x^2 - 5x + 6$\nb) $2x^2 - 12x + 16$\nc) $3x^2 + 18x + 27$',
      solution: `**Løsning:**

a) Vi begynner med å løse $x^2 - 5x + 6 = 0$ med abc-formelen vil vi få $x_1 = 2$ og $x_2 = 3$. Disse løsningene kan vi nå bruke til å faktorisere uttrykket.

Vi bruker formelen for nullpunktsfaktorisering:

$ax^2 + bx + c = a(x - x_1)(x - x_2)$

$1x^2 - 5x + 6 = 1(x - 2)(x - 3)$

$x^2 - 5x + 6$ kan altså faktoriseres til $(x - 2)(x - 3)$

b) Når vi løser $2x^2 - 12x + 16 = 0$ med abc-formelen får vi $x_1 = 2$ og $x_2 = 4$.

Vi bruker formelen for nullpunktsfaktorisering:

$2x^2 - 12x + 16 = 2(x - 2)(x - 4)$

c) Når vi løser $3x^2 + 18x + 27 = 0$ bør vi først faktorisere ut 3:

$3(x^2 + 6x + 9) = 0$

Dette gir $x = -3$ (én løsning).

$3x^2 + 18x + 27 = 3(x + 3)^2$`,
      solutionVideo: 'nXhkDSFLBtM',
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bi-okonomi-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Faktoriser uttrykkene ved å bruke nullpunktsfaktorisering (NB: Husk at du må begynne med å finne $x_1$ og $x_2$ ved å bruke abc-formelen)',
        subTasks: [
          { label: 'a', task: '$x^2 + 5x + 6$', solution: '$x^2 + 5x + 6 = (x + 2)(x + 3)$' },
          { label: 'b', task: '$x^2 + 3x - 10$', solution: '$x^2 + 3x - 10 = (x + 5)(x - 2)$' },
          { label: 'c', task: '$2x^2 + 8x + 6$', solution: '$2x^2 + 8x + 6 = 2(x + 1)(x + 3)$' },
          { label: 'd', task: '$2x^2 - 10x + 12$', solution: '$2x^2 - 10x + 12 = 2(x - 2)(x - 3)$' },
          { label: 'e', task: '$3x^2 - 3x - 6$', solution: '$3x^2 - 3x - 6 = 3(x - 2)(x + 1)$' },
          { label: 'f', task: '$-x^2 - 2x - 1$', solution: '$-x^2 - 2x - 1 = -(x + 1)^2$' },
        ],
        hints: ['Finn nullpunktene først med abc-formelen, deretter bruk $a(x - x_1)(x - x_2)$'],
        solution: 'a) $(x + 2)(x + 3)$, b) $(x + 5)(x - 2)$, c) $2(x + 1)(x + 3)$, d) $2(x - 2)(x - 3)$, e) $3(x - 2)(x + 1)$, f) $-(x + 1)^2$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bi-okonomi-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Faktoriser og forkort ved hjelp av kvadratsetningene og nullpunktsfaktorisering dersom det er mulig.',
        subTasks: [
          { label: 'a', task: '$\\frac{x^2 + 5x + 6}{x + 3}$', solution: '$\\frac{x^2 + 5x + 6}{x + 3} = \\frac{(x + 2)(x + 3)}{x + 3} = x + 2$' },
          { label: 'b', task: '$\\frac{x^2 - 10x + 24}{x^2 - 16}$', solution: '$\\frac{x^2 - 10x + 24}{x^2 - 16} = \\frac{(x - 4)(x - 6)}{(x + 4)(x - 4)} = \\frac{x - 6}{x + 4}$' },
          { label: 'c', task: '$\\frac{2x^2 - 16x + 30}{4x^2 - 100}$', solution: '$\\frac{2x^2 - 16x + 30}{4x^2 - 100} = \\frac{2(x - 3)(x - 5)}{4(x + 5)(x - 5)} = \\frac{x - 3}{2(x + 5)}$' },
          { label: 'd', task: '$\\frac{-3x - 12}{3x^2 + 48}$', solution: '$\\frac{-3x - 12}{3x^2 + 48} = \\frac{-3(x + 4)}{3(x^2 + 16)} = \\frac{-(x + 4)}{x^2 + 16}$' },
          { label: 'e', task: '$\\frac{-2x^2 + 32}{3x^2 - 3x - 60}$', solution: '$\\frac{-2x^2 + 32}{3x^2 - 3x - 60} = \\frac{-2(x + 4)(x - 4)}{3(x - 5)(x + 4)} = \\frac{-2(x - 4)}{3(x - 5)}$' },
          { label: 'f', task: '$\\frac{-x^2 - 18x - 81}{-x - 9}$', solution: '$\\frac{-x^2 - 18x - 81}{-x - 9} = \\frac{-(x + 9)^2}{-(x + 9)} = x + 9$' },
        ],
        hints: ['Faktoriser både teller og nevner, deretter stryk felles faktorer.'],
        solution: 'a) $x + 2$, b) $\\frac{x - 6}{x + 4}$, c) $\\frac{x - 3}{2(x + 5)}$, d) $\\frac{-(x + 4)}{x^2 + 16}$, e) $\\frac{-2(x - 4)}{3(x - 5)}$, f) $x + 9$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRODUKTREGELEN ==========
    {
      id: 'bi-okonomi-2-2-section-produkt',
      type: 'text',
      content: `## Produktregelen

Dersom $a \\cdot b = 0$ så vil enten $a = 0$ eller $b = 0$ (eller både $a = 0$ og $b = 0$).

Av dette følger det at om vi ønsker å finne svaret på en likning med flere faktorer $(x + x_1)(x - x_2) = 0$ så vil enten $x + x_1 = 0$ altså $x = -x_1$ eller $x - x_2 = 0$ altså $x = x_2$.`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'bi-okonomi-2-2-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Løs likningene ved hjelp av produktregelen:\n\na) $2(x + 3) = 0$\nb) $(x - 4)(x + 2) = 0$\nc) $3\\left(x + \\frac{1}{2}\\right)(x - 0.3)(x - \\sqrt{5}) = 0$',
      solution: `**Løsning:**

a) $2(x + 3) = 0$

Her ser vi enkelt at dersom $x = -3$ så vil venstresiden bli lik høyresiden.
Svaret på likningen er altså $x = -3$.

b) $(x - 4)(x + 2) = 0$

Her sier produktregelen at venstresiden vil bli 0 dersom minst en av faktorene er 0. Det vil si at enten $x - 4 = 0$ eller $x + 2 = 0$.
Vi ser at $x = 4$ og $x = -2$ da er løsningene på denne likningen.

c) $3\\left(x + \\frac{1}{2}\\right)(x - 0.3)(x - \\sqrt{5}) = 0$

Nok engang holder det at en av faktorene er lik 0 for at vi skal ha en løsning. Her blir løsningene $x = -\\frac{1}{2}$, $x = 0.3$ og $x = \\sqrt{5}$`,
      solutionVideo: 'lHahuCcZBUE',
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bi-okonomi-2-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene ved hjelp av produktregelen',
        subTasks: [
          { label: 'a', task: '$2(x + 9) = 0$', solution: '$x = -9$' },
          { label: 'b', task: '$-3(x + 1) = 0$', solution: '$x = -1$' },
          { label: 'c', task: '$(x + 2)(x - 3) = 0$', solution: '$x = -2$ eller $x = 3$' },
          { label: 'd', task: '$(x - k)(x + \\sqrt{2}) = 0$', solution: '$x = k$ eller $x = -\\sqrt{2}$' },
          { label: 'e', task: '$2x + 6 = 0$', solution: '$x = -3$' },
          { label: 'f', task: '$-5x + 20 = 10$', solution: '$x = 2$' },
        ],
        hints: ['Et produkt er null hvis og bare hvis minst én av faktorene er null.'],
        solution: 'a) $x = -9$, b) $x = -1$, c) $x = -2$ eller $x = 3$, d) $x = k$ eller $x = -\\sqrt{2}$, e) $x = -3$, f) $x = 2$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TILLEGGSOPPGAVER ==========
    {
      id: 'bi-okonomi-2-2-repetisjon',
      type: 'collapsible',
      title: 'Tilleggsoppgaver',
      buttonText: 'Vis tilleggsoppgaver',
      content: [
        // Oppgave T1
        {
          id: 'bi-okonomi-2-2-tillegg-1',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-2-tillegg-ex-1',
            number: 'T1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Faktoriser ut det som er felles',
            subTasks: [
              { label: 'a', task: '$5x - 10$' },
              { label: 'b', task: '$-4x + 8$' },
              { label: 'c', task: '$3x^2 - 15x + 18$' },
              { label: 'd', task: '$2x^2 + 4x$' },
              { label: 'e', task: '$-9x^3 + 12x^2 + 6x$' },
              { label: 'f', task: '$5x^2y + 10xy$' },
            ],
            solution: 'a) $5(x - 2)$, b) $-4(x - 2)$, c) $3(x^2 - 5x + 6)$, d) $2x(x + 2)$, e) $-3x(3x^2 - 4x - 2)$, f) $5xy(x + 2)$',
            hideInlineSolution: true,
            hints: ['Finn den største felles faktoren for alle leddene.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Oppgave T2
        {
          id: 'bi-okonomi-2-2-tillegg-2',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-2-tillegg-ex-2',
            number: 'T2',
            type: 'classic',
            difficulty: 'medium',
            task: 'Faktoriser ut det som står foran x-en med høyest potens og det som er felles',
            subTasks: [
              { label: 'a', task: '$-7x + 14$' },
              { label: 'b', task: '$5x + 2$' },
              { label: 'c', task: '$3x^2 + 3$' },
              { label: 'd', task: '$3x^2 + 30x + 27$' },
              { label: 'e', task: '$25x^2 - 36$' },
              { label: 'f', task: '$\\frac{1}{5}x^2 - 2x + 3$' },
            ],
            solution: 'a) $-7(x - 2)$, b) $5\\left(x + \\frac{2}{5}\\right)$, c) $3(x^2 + 1)$, d) $3(x^2 + 10x + 9)$, e) $25\\left(x^2 - \\frac{36}{25}\\right)$, f) $\\frac{1}{5}(x^2 - 10x + 15)$',
            hideInlineSolution: true,
            hints: ['Del hvert ledd på koeffisienten som skal faktoriseres ut.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Oppgave T3
        {
          id: 'bi-okonomi-2-2-tillegg-3',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-2-tillegg-ex-3',
            number: 'T3',
            type: 'classic',
            difficulty: 'medium',
            task: 'Faktoriser ut det som står foran x-en med høyest potens',
            subTasks: [
              { label: 'a', task: '$3x + 5$' },
              { label: 'b', task: '$2x - 3$' },
              { label: 'c', task: '$\\frac{1}{2}x + 4$' },
              { label: 'd', task: '$\\frac{1}{5}x + 2$' },
              { label: 'e', task: '$\\frac{1}{10}x^2 - 2x + 1$' },
              { label: 'f', task: '$\\frac{1}{4}x^2 + 2x + 3$' },
            ],
            solution: 'a) $3\\left(x + \\frac{5}{3}\\right)$, b) $2\\left(x - \\frac{3}{2}\\right)$, c) $\\frac{1}{2}(x + 8)$, d) $\\frac{1}{5}(x + 10)$, e) $\\frac{1}{10}(x^2 - 20x + 10)$, f) $\\frac{1}{4}(x^2 + 8x + 12)$',
            hideInlineSolution: true,
            hints: ['Tenk på hva du må gange koeffisienten med for å få hvert ledd.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Oppgave T4
        {
          id: 'bi-okonomi-2-2-tillegg-4',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-2-tillegg-ex-4',
            number: 'T4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs likningene ved hjelp av produktregelen',
            subTasks: [
              { label: 'a', task: '$2(x + 9) = 0$' },
              { label: 'b', task: '$-3(x + 1) = 0$' },
              { label: 'c', task: '$(x + 2)(x - 3) = 0$' },
              { label: 'd', task: '$(x - k)(x + \\sqrt{2}) = 0$' },
              { label: 'e', task: '$2x + 6 = 0$' },
              { label: 'f', task: '$-5x + 20 = 10$' },
            ],
            solution: 'a) $x = -9$, b) $x = -1$, c) $x = -2$ eller $x = 3$, d) $x = k$ eller $x = -\\sqrt{2}$, e) $x = -3$, f) $x = 2$',
            hideInlineSolution: true,
            hints: ['Sett hver faktor lik null og løs for x.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_2_5: TextbookChapter = {
  id: '1t-2-5',
  courseId: '1t',
  chapterNumber: '2.5',
  title: 'Rasjonale likninger',
  description: 'Lær å løse likninger som inneholder brøker ved hjelp av ulike metoder.',
  estimatedMinutes: 60,
  competenceGoals: ['løse likninger med brøker', 'bruke produktregelen for brøklikninger'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '1t-2-5-intro',
      type: 'text',
      content: `## Brøklikninger

Nå skal vi lære å løse likninger som inneholder brøker. Hovedstrategien er ofte å multiplisere begge sider med nevneren for å bli kvitt brøken.`,
    },

    // ========== EKSEMPEL 1: Enkle brøklikninger ==========
    {
      id: '1t-2-5-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Regn ut:

a) $\\frac{x}{3} = 2$

b) $\\frac{2}{5} \\cdot x = 6$

c) $\\frac{6}{x} = 2$`,
      solution: `**Løsning:**

a) $\\frac{x}{3} = 2 \\quad | \\cdot 3$
$\\frac{x}{3} \\cdot 3 = 2 \\cdot 3$
$x = 6$

b) $\\frac{2}{5} \\cdot x = 6$
$\\frac{2x}{5} = 6 \\quad | \\cdot 5$
$2x = 30 \\quad | \\div 2$
$x = 15$

c) $\\frac{8}{2x} = 2 \\quad | \\cdot 2x$
$8 = 4x \\quad | \\div 4$
$2 = x$
$x = 2$`,
    },

    // Oppgave 1: Enkle brøklikninger
    {
      id: '1t-2-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{5} = 2$', solution: '$x = 10$' },
          { label: 'b', task: '$\\frac{x}{4} = 8$', solution: '$x = 32$' },
          { label: 'c', task: '$\\frac{2x}{3} = 2$', solution: '$x = 3$' },
          { label: 'd', task: '$9 = \\frac{3y}{4}$', solution: '$y = 12$' },
          { label: 'e', task: '$\\frac{4}{x} = 2$', solution: '$x = 2$' },
          { label: 'f', task: '$\\frac{28}{2x} = 7$', solution: '$x = 2$' },
        ],
        solution: 'a) $x = 10$, b) $x = 32$, c) $x = 3$, d) $y = 12$, e) $x = 2$, f) $x = 2$',
        hints: ['Gang begge sider med nevneren for å fjerne brøken'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 2: Brøk = Brøk ==========
    {
      id: '1t-2-5-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Regn ut:

a) $\\frac{x}{5} = \\frac{2}{5}$

b) $\\frac{x}{3} = \\frac{5}{4}$

c) $\\frac{3}{7x} = 1$`,
      solution: `**Løsning:**

a) $\\frac{x}{5} = \\frac{2}{5} \\quad | \\cdot 5$
$x = 2$

b) $\\frac{x}{3} = \\frac{5}{4} \\quad | \\cdot 3$
$x = \\frac{5}{4} \\cdot 3 = \\frac{15}{4}$

**Alternativ 2 (Gang med fellesnevner):**
$\\frac{x}{3} = \\frac{5}{4} \\quad | \\cdot 12$
$4x = 3 \\cdot 5$
$4x = 15 \\quad | \\div 4$
$x = \\frac{15}{4}$

c) $\\frac{3}{7x} = 1 \\quad | \\cdot 7x$
$3 = 7x \\quad | \\div 7$
$x = \\frac{3}{7}$`,
    },

    // Oppgave 2: Brøk = Brøk
    {
      id: '1t-2-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{2} = \\frac{3}{7}$', solution: '$x = \\frac{6}{7}$' },
          { label: 'b', task: '$\\frac{1}{8}x = \\frac{1}{4}$', solution: '$x = 2$' },
          { label: 'c', task: '$\\frac{x}{2} = \\frac{4}{3}$', solution: '$x = \\frac{8}{3}$' },
          { label: 'd', task: '$\\frac{3x}{2} = 9$', solution: '$x = 6$' },
          { label: 'e', task: '$\\frac{5}{4x} = 2$', solution: '$x = \\frac{5}{8}$' },
          { label: 'f', task: '$\\frac{2}{2y} = \\frac{1}{7}$', solution: '$y = 7$' },
        ],
        solution: 'a) $x = \\frac{6}{7}$, b) $x = 2$, c) $x = \\frac{8}{3}$, d) $x = 6$, e) $x = \\frac{5}{8}$, f) $y = 7$',
        hints: ['Gang med fellesnevner eller gang begge sider med nevneren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 3: Brøklikninger med flere ledd ==========
    {
      id: '1t-2-5-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Regn ut:

a) $x + \\frac{1}{2} = 2$

b) $\\frac{1}{3}x - 1 = 3$`,
      solution: `**Løsning:**

a) **Alternativ 1:**
$x + \\frac{1}{2} = 2 \\quad | - \\frac{1}{2}$
$x = 2 - \\frac{1}{2} = \\frac{4}{2} - \\frac{1}{2} = \\frac{3}{2}$

**Alternativ 2 (Gang med fellesnevner):**
$x + \\frac{1}{2} = 2 \\quad | \\cdot 2$
$2x + 1 = 4 \\quad | - 1$
$2x = 3 \\quad | \\div 2$
$x = \\frac{3}{2}$

b) **Alternativ 1:**
$\\frac{1}{3}x - 1 = 3 \\quad | + 1$
$\\frac{x}{3} = 4 \\quad | \\cdot 3$
$x = 12$`,
    },

    // Oppgave 3: Brøklikninger med flere ledd
    {
      id: '1t-2-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$x + \\frac{1}{3} = \\frac{2}{3}$', solution: '$x = \\frac{1}{3}$' },
          { label: 'b', task: '$\\frac{1}{2}x = 2$', solution: '$x = 4$' },
          { label: 'c', task: '$\\frac{1}{3}x + \\frac{x}{3} = 2$', solution: '$x = 3$' },
          { label: 'd', task: '$2x - \\frac{1}{3} = 2$', solution: '$x = \\frac{7}{6}$' },
          { label: 'e', task: '$\\frac{x}{2} - 3x = -2$', solution: '$x = \\frac{4}{5}$' },
          { label: 'f', task: '$\\frac{x}{11} = 2 + \\frac{1}{2}$', solution: '$x = \\frac{55}{2}$' },
        ],
        solution: 'a) $x = \\frac{1}{3}$, b) $x = 4$, c) $x = 3$, d) $x = \\frac{7}{6}$, e) $x = \\frac{4}{5}$, f) $x = \\frac{55}{2}$',
        hints: ['Samle x-ledd på én side, tall på den andre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4: Mer kompliserte brøklikninger
    {
      id: '1t-2-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{6} + \\frac{1}{3} = \\frac{1}{3}$', solution: '$x = 0$' },
          { label: 'b', task: '$\\frac{x}{4} + \\frac{1}{12} = \\frac{1}{3}$', solution: '$x = 1$' },
          { label: 'c', task: '$\\frac{2}{5}x + \\frac{x}{3} = 1$', solution: '$x = \\frac{15}{11}$' },
          { label: 'd', task: '$3x - \\frac{2}{5} = 0$', solution: '$x = \\frac{2}{15}$' },
          { label: 'e', task: '$\\frac{x}{2} - \\frac{3x}{5} = -2$', solution: '$x = 20$' },
          { label: 'f', task: '$\\frac{x}{13} = 2 + \\frac{1}{3}$', solution: '$x = \\frac{91}{3}$' },
        ],
        solution: 'a) $x = 0$, b) $x = 1$, c) $x = \\frac{15}{11}$, d) $x = \\frac{2}{15}$, e) $x = 20$, f) $x = \\frac{91}{3}$',
        hints: ['Finn fellesnevner og gang hele likningen med den'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 4: Likninger med flere x-brøker ==========
    {
      id: '1t-2-5-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Løs likningen:

$\\frac{2x}{3} + \\frac{x}{5} = -2$`,
      solution: `**Løsning:**

$\\frac{2x}{3} + \\frac{x}{5} = -2$

$\\frac{2x \\cdot 5}{3 \\cdot 5} + \\frac{x \\cdot 3}{5 \\cdot 3} = -2$

$\\frac{10x}{15} + \\frac{3x}{15} = -2$

$\\frac{13x}{15} = -2 \\quad | \\cdot 15$

$13x = -30 \\quad | \\div 13$

$x = -\\frac{30}{13}$

**Alternativ løsning:**
$\\frac{2x}{3} + \\frac{x}{5} = -2 \\quad | \\cdot 15$
$5 \\cdot 2x + 3x = -30$
$13x = -30$
$x = -\\frac{30}{13}$`,
    },

    // ========== EKSEMPEL 5: Divisjon med negativt tall ==========
    {
      id: '1t-2-5-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: `Løs likningen:

$-3x = \\frac{6}{7}$`,
      solution: `**Løsning:**

$-3x = \\frac{6}{7} \\quad | \\div (-3)$

$\\frac{-3x}{-3} = \\frac{6}{-3 \\cdot 7}$

$x = -\\frac{2 \\cdot 3}{3 \\cdot 7}$

$x = -\\frac{2}{7}$

**NB:** Å dele med et tall er det samme som å gange nevneren med det tallet.
Eksempel: $\\frac{3}{4} \\div 2 = \\frac{3}{4 \\cdot 2}$`,
    },

    // Oppgave 5: Mer kompliserte likninger
    {
      id: '1t-2-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$5x = \\frac{2}{3}$', solution: '$x = \\frac{2}{15}$' },
          { label: 'b', task: '$\\frac{1}{2}x + \\frac{1}{3}x = -2$', solution: '$x = -\\frac{12}{5}$' },
          { label: 'c', task: '$\\frac{1}{5}x + \\frac{x}{5} = 1$', solution: '$x = \\frac{5}{2}$' },
          { label: 'd', task: '$2x - \\frac{x}{3} = 0$', solution: '$x = 0$' },
          { label: 'e', task: '$\\frac{x}{2} = -\\frac{3}{4}$', solution: '$x = -\\frac{3}{2}$' },
          { label: 'f', task: '$\\frac{-x}{8} = 2x + \\frac{1}{2}$', solution: '$x = -\\frac{4}{17}$' },
        ],
        solution: 'a) $x = \\frac{2}{15}$, b) $x = -\\frac{12}{5}$, c) $x = \\frac{5}{2}$, d) $x = 0$, e) $x = -\\frac{3}{2}$, f) $x = -\\frac{4}{17}$',
        hints: ['Pass på fortegnene når du deler med negative tall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 6: Uttrykk i teller ==========
    {
      id: '1t-2-5-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: `Løs likningen:

$\\frac{x + 2}{2} = 4$`,
      solution: `**Løsning:**

$\\frac{x + 2}{2} = 4 \\quad | \\cdot 2$

$\\frac{x + 2}{2} \\cdot 2 = 4 \\cdot 2$

$x + 2 = 8 \\quad | - 2$

$x = 6$`,
    },

    // ========== BRØKLIKNINGER MED PRODUKTREGELEN ==========
    {
      id: '1t-2-5-theorem-produktregel',
      type: 'theorem',
      title: 'Brøklikninger med produktregelen',
      content: `Når vi skal finne ut når en brøk har verdien 0 så holder det å finne ut når **telleren** (det over brøkstreken) i brøken er lik 0.

$\\frac{0}{x} = 0$ for alle verdier av $x$ (med unntak av 0).`,
    },

    // ========== EKSEMPEL 7: Produktregelen ==========
    {
      id: '1t-2-5-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: `Løs likningen:

$\\frac{x + 1}{2} = 0$`,
      solution: `**Løsning:**

$\\frac{x + 1}{2} = 0$

Vi ser her at $x + 1 = 0$ når $x = -1$. Ettersom telleren i brøken da blir 0 så vil hele brøken da ha verdien 0 og likheten er oppfylt.

Løsningen er altså $x = -1$`,
    },

    // ========== EKSEMPEL 8: Faktorisert teller ==========
    {
      id: '1t-2-5-example-8',
      type: 'example',
      title: 'Eksempel 8',
      problem: `Løs likningen:

$\\frac{x^2 + 5x + 6}{x - 1} = 0$`,
      solution: `**Løsning:**

Vi faktoriserer telleren i brøken (for eksempel ved nullpunktsfaktorisering eller ved sum og produktmetoden):

$\\frac{(x + 2)(x + 3)}{x - 1} = 0$

Produktregelen forteller oss at det over brøkstreken er 0 når minst én av faktorene er lik 0.

Vi ser her at $x + 2 = 0$ når $x = -2$ og at $x + 3 = 0$ når $x = -3$.

Ettersom telleren i brøken i begge tilfeller blir 0 så vil hele brøken da ha verdien 0 og likheten er oppfylt.

Løsningene her er altså $x = -2$ og $x = -3$

**NB:** Det under brøkstreken er lik 0 når $x = 1$, men dette vil ikke gi oss noe nullpunkt.`,
    },

    // Oppgave 6: Brøklikninger med produktregelen
    {
      id: '1t-2-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene ved bruk av produktregelen',
        subTasks: [
          { label: 'a', task: '$\\frac{x - 5}{5} = 0$', solution: '$x = 5$' },
          { label: 'b', task: '$\\frac{x + 2}{x} = 0$', solution: '$x = -2$' },
          { label: 'c', task: '$x + \\frac{x - 1}{5} = 1$', solution: '$x = 1$' },
          { label: 'd', task: '$\\frac{x - 3}{3} - \\frac{x - 2}{3} = 0$', solution: 'Ingen løsning' },
          { label: 'e', task: '$\\frac{x - 3}{2x + 4} = -2$', solution: '$x = -\\frac{1}{5}$' },
          { label: 'f', task: '$2x - 2 - \\frac{x - 1}{3} = 0$', solution: '$x = \\frac{7}{5}$' },
        ],
        solution: 'a) $x = 5$, b) $x = -2$, c) $x = 1$, d) Ingen løsning, e) $x = -\\frac{1}{5}$, f) $x = \\frac{7}{5}$',
        hints: ['Sett telleren lik 0 og løs'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SPESIELLE TILFELLER ==========
    {
      id: '1t-2-5-section-spesielle',
      type: 'text',
      content: `### Når ingen verdier av x gir en løsning og når alle verdier av x gir en løsning`,
    },

    {
      id: '1t-2-5-example-9',
      type: 'example',
      title: 'Eksempel 9',
      problem: `Løs likningen:

$\\frac{x - 3}{3} - \\frac{x - 2}{3} = 0$`,
      solution: `**Løsning:**

$\\frac{x - 3}{3} - \\frac{x - 2}{3} = 0 \\quad | \\cdot 3$

$\\frac{3(x - 3)}{3} - \\frac{3(x - 2)}{3} = 3 \\cdot 0$

$x - 3 - (x - 2) = 0$

$x - 3 - x + 2 = 0$

$-1 = 0$

Men $-1$ er aldri lik $0$, det spiller ingen rolle hva $x$ er her. Svaret blir altså **ingen løsning**.`,
    },

    // ========== EKSEMPEL 10: Alle verdier er løsning ==========
    {
      id: '1t-2-5-example-10',
      type: 'example',
      title: 'Eksempel 10',
      problem: `Løs likningen:

$\\frac{2x + 3}{5} = \\frac{4x + 6}{10}$`,
      solution: `**Løsning:**

$\\frac{2x + 3}{5} = \\frac{4x + 6}{10} \\quad | \\cdot 10$

$\\frac{10(2x + 3)}{5} = \\frac{10(4x + 6)}{10}$

$\\frac{2 \\cdot 5(2x + 3)}{5} = 4x + 6$

$4x + 6 = 4x + 6$

Uansett hva $x$ er så vil venstresiden og høyresiden i dette uttrykket være like hverandre.

Her kan vi altså si at løsningen er **alle mulige verdier av x**. Andre måter vi kan si dette på er "alle reelle tall" eller bare alle $x \\in \\mathbb{R}$.`,
    },

    // ========== EKSEMPEL 11: Gang med uttrykk ==========
    {
      id: '1t-2-5-example-11',
      type: 'example',
      title: 'Eksempel 11',
      problem: `Å gange med flere ledd på begge sider samtidig.

$\\frac{x - 3}{2x + 4} = -2$`,
      solution: `**Løsning:**

$\\frac{x - 3}{2x + 4} = -2 \\quad | \\cdot (2x + 4)$

$\\frac{x - 3}{2x + 4} \\cdot (2x + 4) = -2 \\cdot (2x + 4)$

$\\frac{(x - 3)(2x + 4)}{(2x + 4)} = -2(2x + 4)$

$x - 3 = -4x - 8 \\quad | + (4x + 3)$

$x + 4x - 3 + 3 = -4x + 4x - 8 + 3$

$5x = -5 \\quad | \\div 5$

$x = -1$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_2_8: TextbookChapter = {
  id: '1t-2-8',
  courseId: '1t',
  chapterNumber: '2.8',
  title: 'Praktisk bruk av likninger',
  description: 'Lær å sette opp og løse likninger fra tekstoppgaver og praktiske situasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'omsetje problemstillingar til likningar',
    'tolke og bruke likningsløysingar i kontekst',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '1t-2-8-intro',
      type: 'text',
      content: `## Praktisk bruk av likninger

Matematikk handler ikke bare om å løse likninger — det handler om å bruke matematikk til å løse problemer fra virkeligheten.

I dette kapittelet lærer du å:
1. **Lese** en tekstoppgave og forstå hva du skal finne
2. **Velge** en variabel (for eksempel $x$) for det ukjente
3. **Sette opp** en likning basert på informasjonen i oppgaven
4. **Løse** likningen
5. **Sjekke** at svaret gir mening i konteksten`,
    },

    {
      id: '1t-2-8-strategi',
      type: 'tip',
      content: `**Strategi for tekstoppgaver:**

1. Les oppgaven nøye — gjerne flere ganger
2. Finn ut hva du skal finne (det ukjente)
3. La $x$ være det ukjente
4. Skriv ned hva du vet, uttrykt med $x$
5. Sett opp likningen
6. Løs likningen
7. Sjekk svaret — gir det mening?`,
    },

    // ========== DEL 1: FINN TALLET ==========
    {
      id: '1t-2-8-section-1',
      type: 'text',
      content: `## Del 1: «Finn tallet»-oppgaver

Vi starter med de enkleste tekstoppgavene — oppgaver der vi skal finne et tall basert på en beskrivelse.`,
    },

    {
      id: '1t-2-8-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Summen av et tall og 7 er 15. Finn tallet.`,
      solution: `**Løsning:**

**Steg 1:** La $x$ være tallet vi leter etter.

**Steg 2:** «Summen av et tall og 7» betyr $x + 7$.

**Steg 3:** Sett opp likningen:
$$x + 7 = 15$$

**Steg 4:** Løs likningen:
$$x + 7 = 15 \\quad | -7$$
$$x = 8$$

**Steg 5:** Sjekk: $8 + 7 = 15$ ✓

**Svar:** Tallet er 8.`,
    },

    {
      id: '1t-2-8-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett opp en likning og finn tallet.',
        subTasks: [
          { label: 'a', task: 'Summen av et tall og 12 er 20.', solution: '$x + 12 = 20 \\Rightarrow x = 8$' },
          { label: 'b', task: 'Differansen mellom et tall og 5 er 13.', solution: '$x - 5 = 13 \\Rightarrow x = 18$' },
        ],
        solution: 'a) Tallet er 8, b) Tallet er 18',
        hints: ['La x være tallet du leter etter', 'Summen betyr pluss, differansen betyr minus'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-2-8-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Det dobbelte av et tall pluss 3 er 17. Finn tallet.`,
      solution: `**Løsning:**

**Steg 1:** La $x$ være tallet.

**Steg 2:** «Det dobbelte av et tall» betyr $2x$.

**Steg 3:** Sett opp likningen:
$$2x + 3 = 17$$

**Steg 4:** Løs likningen:
$$2x + 3 = 17 \\quad | -3$$
$$2x = 14 \\quad | \\div 2$$
$$x = 7$$

**Steg 5:** Sjekk: $2 \\cdot 7 + 3 = 14 + 3 = 17$ ✓

**Svar:** Tallet er 7.`,
    },

    {
      id: '1t-2-8-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett opp en likning og finn tallet.',
        subTasks: [
          { label: 'a', task: 'Det tredobbelte av et tall er 27.', solution: '$3x = 27 \\Rightarrow x = 9$' },
          { label: 'b', task: 'Det dobbelte av et tall minus 4 er 10.', solution: '$2x - 4 = 10 \\Rightarrow x = 7$' },
        ],
        solution: 'a) Tallet er 9, b) Tallet er 7',
        hints: ['Det tredobbelte betyr 3 ganger tallet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEL 2: TO TALL ==========
    {
      id: '1t-2-8-section-2',
      type: 'text',
      content: `## Del 2: Oppgaver med to tall

Nå ser vi på oppgaver der vi skal finne to tall. Trikset er å uttrykke begge tallene ved hjelp av samme variabel.`,
    },

    {
      id: '1t-2-8-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Summen av to tall er 20. Det ene tallet er 4 mer enn det andre. Finn de to tallene.`,
      solution: `**Løsning:**

**Steg 1:** La $x$ være det minste tallet.
Da er det største tallet $x + 4$ (fordi det er 4 mer).

**Steg 2:** Summen av tallene er 20:
$$x + (x + 4) = 20$$

**Steg 3:** Løs likningen:
$$2x + 4 = 20 \\quad | -4$$
$$2x = 16 \\quad | \\div 2$$
$$x = 8$$

**Steg 4:** Finn begge tallene:
- Det minste tallet: $x = 8$
- Det største tallet: $x + 4 = 8 + 4 = 12$

**Steg 5:** Sjekk: $8 + 12 = 20$ ✓ og $12 - 8 = 4$ ✓

**Svar:** Tallene er 8 og 12.`,
    },

    {
      id: '1t-2-8-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp en likning og finn de to tallene.',
        subTasks: [
          { label: 'a', task: 'Summen av to tall er 30. Det ene tallet er 6 mer enn det andre.', solution: '$x + (x+6) = 30 \\Rightarrow x = 12$. Tallene er 12 og 18.' },
          { label: 'b', task: 'Summen av to tall er 50. Det ene tallet er dobbelt så stort som det andre.', solution: '$x + 2x = 50 \\Rightarrow x = \\frac{50}{3}$. Tallene er $\\frac{50}{3}$ og $\\frac{100}{3}$.' },
        ],
        solution: 'a) 12 og 18, b) 50/3 og 100/3',
        hints: ['La x være det minste tallet', 'Uttrykk det andre tallet ved hjelp av x'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEL 3: ALDERSOPPGAVER ==========
    {
      id: '1t-2-8-section-3',
      type: 'text',
      content: `## Del 3: Aldersoppgaver

Aldersoppgaver er klassiske tekstoppgaver. Husk at alle blir like mye eldre — hvis det går 5 år, øker alles alder med 5.`,
    },

    {
      id: '1t-2-8-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Emma er 3 ganger så gammel som Lukas. Til sammen er de 24 år. Hvor gamle er de?`,
      solution: `**Løsning:**

**Steg 1:** La $x$ være alderen til Lukas.
Da er Emma $3x$ år (3 ganger så gammel).

**Steg 2:** Til sammen er de 24 år:
$$x + 3x = 24$$

**Steg 3:** Løs likningen:
$$4x = 24 \\quad | \\div 4$$
$$x = 6$$

**Steg 4:** Finn aldrene:
- Lukas: $x = 6$ år
- Emma: $3x = 3 \\cdot 6 = 18$ år

**Steg 5:** Sjekk: $6 + 18 = 24$ ✓ og $18 = 3 \\cdot 6$ ✓

**Svar:** Lukas er 6 år og Emma er 18 år.`,
    },

    {
      id: '1t-2-8-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp en likning og finn aldrene.',
        subTasks: [
          { label: 'a', task: 'Mia er dobbelt så gammel som Noah. Til sammen er de 27 år.', solution: '$x + 2x = 27 \\Rightarrow x = 9$. Noah er 9 år, Mia er 18 år.' },
          { label: 'b', task: 'Sara er 5 år eldre enn Oskar. Til sammen er de 31 år.', solution: '$x + (x+5) = 31 \\Rightarrow x = 13$. Oskar er 13 år, Sara er 18 år.' },
        ],
        solution: 'a) Noah: 9 år, Mia: 18 år. b) Oskar: 13 år, Sara: 18 år.',
        hints: ['La x være alderen til den yngste'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-2-8-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: `En far er 30 år eldre enn sønnen sin. Om 5 år vil faren være dobbelt så gammel som sønnen. Hvor gamle er de nå?`,
      solution: `**Løsning:**

**Steg 1:** La $x$ være sønnens alder nå.
Da er farens alder $x + 30$ (30 år eldre).

**Steg 2:** Om 5 år:
- Sønnen er $x + 5$ år
- Faren er $(x + 30) + 5 = x + 35$ år

**Steg 3:** Om 5 år er faren dobbelt så gammel:
$$x + 35 = 2(x + 5)$$

**Steg 4:** Løs likningen:
$$x + 35 = 2x + 10 \\quad | -x$$
$$35 = x + 10 \\quad | -10$$
$$x = 25$$

**Steg 5:** Finn aldrene nå:
- Sønnen: 25 år
- Faren: $25 + 30 = 55$ år

**Steg 6:** Sjekk om 5 år: Sønnen er 30, faren er 60. $60 = 2 \\cdot 30$ ✓

**Svar:** Sønnen er 25 år og faren er 55 år.`,
    },

    {
      id: '1t-2-8-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett opp en likning og løs oppgaven.',
        subTasks: [
          { label: 'a', task: 'En mor er 24 år eldre enn datteren. Om 4 år vil moren være 3 ganger så gammel som datteren. Hvor gamle er de nå?', solution: '$(x+24)+4 = 3(x+4) \\Rightarrow x = 8$. Datteren er 8 år, moren er 32 år.' },
          { label: 'b', task: 'For 3 år siden var bestefar 5 ganger så gammel som barnebarnet. Nå er han 4 ganger så gammel. Hvor gamle er de nå?', solution: '$(x-3) \\cdot 5 = 4x - 3 \\Rightarrow x = 12$. Barnebarnet er 12 år, bestefar er 48 år.' },
        ],
        solution: 'a) Datteren: 8 år, moren: 32 år. b) Barnebarnet: 12 år, bestefar: 48 år.',
        hints: ['Sett opp uttrykk for aldrene på det tidspunktet oppgaven beskriver'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEL 4: PENGER OG PRISER ==========
    {
      id: '1t-2-8-section-4',
      type: 'text',
      content: `## Del 4: Penger og priser

Oppgaver om penger handler ofte om totalpris, vekslepenger, eller fordeling av penger.`,
    },

    {
      id: '1t-2-8-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: `En kinobillett koster 120 kr. Elise kjøpte billetter til seg og noen venner og betalte 600 kr. Hvor mange billetter kjøpte hun?`,
      solution: `**Løsning:**

**Steg 1:** La $x$ være antall billetter.

**Steg 2:** Totalpris = pris per billett $\\times$ antall billetter:
$$120x = 600$$

**Steg 3:** Løs likningen:
$$120x = 600 \\quad | \\div 120$$
$$x = 5$$

**Steg 4:** Sjekk: $5 \\cdot 120 = 600$ kr ✓

**Svar:** Elise kjøpte 5 billetter.`,
    },

    {
      id: '1t-2-8-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett opp en likning og løs oppgaven.',
        subTasks: [
          { label: 'a', task: 'En pizza koster 149 kr. Martin betalte 596 kr for flere pizzaer. Hvor mange pizzaer kjøpte han?', solution: '$149x = 596 \\Rightarrow x = 4$ pizzaer' },
          { label: 'b', task: 'En bok koster 89 kr. Hvor mange bøker kan du kjøpe for 445 kr?', solution: '$89x = 445 \\Rightarrow x = 5$ bøker' },
        ],
        solution: 'a) 4 pizzaer, b) 5 bøker',
        hints: ['Totalpris = pris per enhet × antall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-2-8-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: `Jonas og Ida deler 450 kr. Jonas skal ha 50 kr mer enn Ida. Hvor mye får hver?`,
      solution: `**Løsning:**

**Steg 1:** La $x$ være beløpet Ida får.
Da får Jonas $x + 50$ kr.

**Steg 2:** Til sammen er det 450 kr:
$$x + (x + 50) = 450$$

**Steg 3:** Løs likningen:
$$2x + 50 = 450 \\quad | -50$$
$$2x = 400 \\quad | \\div 2$$
$$x = 200$$

**Steg 4:** Finn beløpene:
- Ida: 200 kr
- Jonas: $200 + 50 = 250$ kr

**Steg 5:** Sjekk: $200 + 250 = 450$ ✓ og $250 - 200 = 50$ ✓

**Svar:** Ida får 200 kr og Jonas får 250 kr.`,
    },

    {
      id: '1t-2-8-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp en likning og løs oppgaven.',
        subTasks: [
          { label: 'a', task: 'Tre søsken deler 900 kr likt. Hvor mye får hver?', solution: '$3x = 900 \\Rightarrow x = 300$ kr hver' },
          { label: 'b', task: 'Emilie og Markus deler 720 kr. Emilie skal ha dobbelt så mye som Markus. Hvor mye får hver?', solution: '$x + 2x = 720 \\Rightarrow x = 240$. Markus: 240 kr, Emilie: 480 kr.' },
        ],
        solution: 'a) 300 kr hver, b) Markus: 240 kr, Emilie: 480 kr',
        hints: ['La x være det minste beløpet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEL 5: GEOMETRI ==========
    {
      id: '1t-2-8-section-5',
      type: 'text',
      content: `## Del 5: Geometri

Mange geometrioppgaver kan løses med likninger — spesielt oppgaver om omkrets og areal.`,
    },

    {
      id: '1t-2-8-formler',
      type: 'note',
      content: `**Nyttige formler:**
- Omkrets av rektangel: $O = 2l + 2b$ (eller $O = 2(l + b)$)
- Areal av rektangel: $A = l \\cdot b$
- Omkrets av trekant: $O = a + b + c$`,
    },

    {
      id: '1t-2-8-example-8',
      type: 'example',
      title: 'Eksempel 8',
      problem: `Et rektangel har omkrets 36 cm. Lengden er 3 cm mer enn bredden. Finn lengden og bredden.`,
      solution: `**Løsning:**

**Steg 1:** La $x$ være bredden.
Da er lengden $x + 3$ cm.

**Steg 2:** Omkretsen er 36 cm:
$$2x + 2(x + 3) = 36$$

**Steg 3:** Løs likningen:
$$2x + 2x + 6 = 36$$
$$4x + 6 = 36 \\quad | -6$$
$$4x = 30 \\quad | \\div 4$$
$$x = 7{,}5$$

**Steg 4:** Finn målene:
- Bredde: 7,5 cm
- Lengde: $7{,}5 + 3 = 10{,}5$ cm

**Steg 5:** Sjekk: $2 \\cdot 7{,}5 + 2 \\cdot 10{,}5 = 15 + 21 = 36$ cm ✓

**Svar:** Bredden er 7,5 cm og lengden er 10,5 cm.`,
    },

    {
      id: '1t-2-8-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp en likning og finn målene.',
        subTasks: [
          { label: 'a', task: 'Et rektangel har omkrets 40 cm. Lengden er dobbelt så stor som bredden. Finn lengden og bredden.', solution: '$2x + 2(2x) = 40 \\Rightarrow 6x = 40 \\Rightarrow x = \\frac{20}{3}$. Bredde: $\\frac{20}{3}$ cm, lengde: $\\frac{40}{3}$ cm.' },
          { label: 'b', task: 'Et rektangel har omkrets 56 cm. Lengden er 4 cm mer enn bredden. Finn lengden og bredden.', solution: '$2x + 2(x+4) = 56 \\Rightarrow x = 12$. Bredde: 12 cm, lengde: 16 cm.' },
        ],
        solution: 'a) Bredde: 20/3 cm ≈ 6,67 cm, lengde: 40/3 cm ≈ 13,33 cm. b) Bredde: 12 cm, lengde: 16 cm.',
        hints: ['Bruk formelen for omkrets: O = 2·lengde + 2·bredde'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-2-8-example-9',
      type: 'example',
      title: 'Eksempel 9',
      problem: `En likebeint trekant har omkrets 32 cm. De to like sidene er hver 5 cm lengre enn grunnlinjen. Finn lengden av sidene.`,
      solution: `**Løsning:**

**Steg 1:** La $x$ være lengden av grunnlinjen.
De to like sidene er da $x + 5$ cm hver.

**Steg 2:** Omkretsen er summen av alle sidene:
$$x + (x + 5) + (x + 5) = 32$$

**Steg 3:** Løs likningen:
$$x + x + 5 + x + 5 = 32$$
$$3x + 10 = 32 \\quad | -10$$
$$3x = 22 \\quad | \\div 3$$
$$x = \\frac{22}{3} \\approx 7{,}33$$

**Steg 4:** Finn sidene:
- Grunnlinjen: $\\frac{22}{3}$ cm $\\approx 7{,}33$ cm
- De like sidene: $\\frac{22}{3} + 5 = \\frac{37}{3}$ cm $\\approx 12{,}33$ cm

**Steg 5:** Sjekk: $\\frac{22}{3} + \\frac{37}{3} + \\frac{37}{3} = \\frac{96}{3} = 32$ cm ✓

**Svar:** Grunnlinjen er $\\frac{22}{3}$ cm og de like sidene er $\\frac{37}{3}$ cm.`,
    },

    {
      id: '1t-2-8-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett opp en likning og finn sidene.',
        subTasks: [
          { label: 'a', task: 'En likesidet trekant har omkrets 45 cm. Finn lengden av hver side.', solution: '$3x = 45 \\Rightarrow x = 15$ cm' },
          { label: 'b', task: 'En likebeint trekant har omkrets 50 cm. Grunnlinjen er 8 cm kortere enn hver av de like sidene. Finn alle sidene.', solution: '$x + (x-8) + (x-8) = 50 \\Rightarrow 3x - 16 = 50 \\Rightarrow x = 22$. De like sidene: 22 cm, grunnlinjen: 14 cm.' },
        ],
        solution: 'a) 15 cm. b) De like sidene: 22 cm, grunnlinjen: 14 cm.',
        hints: ['Omkrets av trekant = summen av alle tre sidene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEL 6: FART, TID OG STREKNING ==========
    {
      id: '1t-2-8-section-6',
      type: 'text',
      content: `## Del 6: Fart, tid og strekning

Sammenhengen mellom fart, tid og strekning er grunnleggende i mange praktiske oppgaver.`,
    },

    {
      id: '1t-2-8-formel-fart',
      type: 'formula',
      title: 'Sammenhengen mellom fart, tid og strekning',
      latex: '\\text{Strekning} = \\text{Fart} \\times \\text{Tid} \\quad \\text{eller} \\quad s = v \\cdot t',
      description: 'Derav følger: $v = \\frac{s}{t}$ og $t = \\frac{s}{v}$',
    },

    {
      id: '1t-2-8-example-10',
      type: 'example',
      title: 'Eksempel 10',
      problem: `En bil kjører med 80 km/t. Hvor lang tid tar det å kjøre 200 km?`,
      solution: `**Løsning:**

**Steg 1:** La $t$ være tiden i timer.

**Steg 2:** Vi bruker formelen $s = v \\cdot t$:
$$200 = 80 \\cdot t$$

**Steg 3:** Løs likningen:
$$200 = 80t \\quad | \\div 80$$
$$t = \\frac{200}{80} = 2{,}5$$

**Svar:** Det tar 2,5 timer (2 timer og 30 minutter).`,
    },

    {
      id: '1t-2-8-ex-block-10',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk formelen s = v · t til å løse oppgavene.',
        subTasks: [
          { label: 'a', task: 'En syklist sykler med 25 km/t. Hvor langt kommer hun på 3 timer?', solution: '$s = 25 \\cdot 3 = 75$ km' },
          { label: 'b', task: 'Et tog kjører 450 km på 5 timer. Hva er gjennomsnittsfarten?', solution: '$v = \\frac{450}{5} = 90$ km/t' },
        ],
        solution: 'a) 75 km, b) 90 km/t',
        hints: ['s = strekning, v = fart, t = tid'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-2-8-example-11',
      type: 'example',
      title: 'Eksempel 11',
      problem: `To biler starter fra samme sted og kjører i motsatt retning. Den ene kjører med 70 km/t og den andre med 90 km/t. Etter hvor lang tid er de 400 km fra hverandre?`,
      solution: `**Løsning:**

**Steg 1:** La $t$ være tiden i timer.

**Steg 2:**
- Bil 1 kjører strekningen $70t$ km
- Bil 2 kjører strekningen $90t$ km
- Samlet avstand: $70t + 90t$

**Steg 3:** Sett opp likningen:
$$70t + 90t = 400$$

**Steg 4:** Løs likningen:
$$160t = 400 \\quad | \\div 160$$
$$t = 2{,}5$$

**Steg 5:** Sjekk: $70 \\cdot 2{,}5 + 90 \\cdot 2{,}5 = 175 + 225 = 400$ km ✓

**Svar:** Etter 2,5 timer er bilene 400 km fra hverandre.`,
    },

    {
      id: '1t-2-8-ex-block-11',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett opp en likning og løs oppgaven.',
        subTasks: [
          { label: 'a', task: 'To syklister starter samtidig fra samme sted og sykler i motsatt retning. Den ene sykler med 20 km/t og den andre med 25 km/t. Etter hvor lang tid er de 90 km fra hverandre?', solution: '$20t + 25t = 90 \\Rightarrow 45t = 90 \\Rightarrow t = 2$ timer' },
          { label: 'b', task: 'En bil kjører fra A til B med 60 km/t. Tilbake kjører den med 40 km/t. Hele turen tar 5 timer. Hvor langt er det fra A til B?', solution: '$\\frac{s}{60} + \\frac{s}{40} = 5 \\Rightarrow s = 120$ km' },
        ],
        solution: 'a) 2 timer, b) 120 km',
        hints: ['Tenk på hva som skjer med tiden og avstanden for hver bil/syklist'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '1t-2-8-summary',
      type: 'note',
      content: `## Oppsummering

**Fremgangsmåte for tekstoppgaver:**
1. Les nøye og forstå hva du skal finne
2. Velg variabel ($x$) for det ukjente
3. Uttrykk andre størrelser ved hjelp av $x$
4. Sett opp likningen basert på informasjonen
5. Løs likningen
6. Sjekk at svaret gir mening

**Vanlige oppgavetyper:**
- «Finn tallet»-oppgaver
- Aldersoppgaver
- Penger og fordeling
- Geometri (omkrets, areal)
- Fart, tid og strekning`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_2_2: TextbookChapter = {
  id: '1t-2-2',
  courseId: '1t',
  chapterNumber: '2.2',
  title: 'Andregradslikninger - faktorisering',
  description: 'Løs andregradslikninger ved faktorisering.',
  estimatedMinutes: 30,
  competenceGoals: ['løse andregradslikninger ved faktorisering'],
  content: [
    // ========== INTRO ==========
    {
      id: '1t-2-2-intro',
      type: 'text',
      content: `# Andregradslikninger ved faktorisering

En **andregradslikning** har formen $ax^2 + bx + c = 0$.

I dette kapitlet lærer du å løse slike likninger ved **faktorisering** - en metode som ofte er raskere enn abc-formelen når uttrykkene lar seg faktorisere pent.`,
    },

    // ========== NULLREGELEN ==========
    {
      id: '1t-2-2-nullregel',
      type: 'theorem',
      title: 'Nullregelen',
      content: `Hvis $A \\cdot B = 0$, så er $A = 0$ eller $B = 0$ (eller begge).

Dette betyr at hvis vi kan skrive en andregradslikning på formen
$$(x - r_1)(x - r_2) = 0$$
så er løsningene $x = r_1$ eller $x = r_2$.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Løs likningen $(x - 3)(x + 2) = 0$',
      solution: `**Løsning:**

Likningen er allerede faktorisert. Vi bruker nullregelen:

$(x - 3)(x + 2) = 0$

$x - 3 = 0 \\quad$ eller $\\quad x + 2 = 0$

$x = 3 \\quad$ eller $\\quad x = -2$

**Svar:** $x = 3$ eller $x = -2$`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$(x - 5)(x + 1) = 0$', solution: '$x = 5$ eller $x = -1$' },
          { label: 'b', task: '$(x + 4)(x - 7) = 0$', solution: '$x = -4$ eller $x = 7$' },
          { label: 'c', task: '$x(x - 6) = 0$', solution: '$x = 0$ eller $x = 6$' },
          { label: 'd', task: '$(2x - 1)(x + 3) = 0$', solution: '$x = \\frac{1}{2}$ eller $x = -3$' },
        ],
        hints: ['Bruk nullregelen: Sett hver faktor lik null.'],
        solution: 'a) $x = 5$ eller $x = -1$, b) $x = -4$ eller $x = 7$, c) $x = 0$ eller $x = 6$, d) $x = \\frac{1}{2}$ eller $x = -3$',
        allowsUpload: true,
      },
    },

    // ========== FAKTORISERING VED INSPEKSJON ==========
    {
      id: '1t-2-2-section-inspeksjon',
      type: 'text',
      content: `## Faktorisering ved inspeksjon

Når $a = 1$ har vi $x^2 + bx + c = 0$. Vi leter etter to tall $r_1$ og $r_2$ slik at:
- $r_1 + r_2 = -b$ (summen er minus $b$)
- $r_1 \\cdot r_2 = c$ (produktet er $c$)

Da kan vi skrive $x^2 + bx + c = (x - r_1)(x - r_2)$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Løs likningen $x^2 - 5x + 6 = 0$ ved faktorisering.',
      solution: `**Løsning:**

Vi skal finne to tall med:
- Sum: $-(-5) = 5$
- Produkt: $6$

Tallene $2$ og $3$ har sum $5$ og produkt $6$.

Altså: $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$

$x = 2 \\quad$ eller $\\quad x = 3$

**Svar:** $x = 2$ eller $x = 3$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser og løs likningene',
        subTasks: [
          { label: 'a', task: '$x^2 + 7x + 12 = 0$', solution: '$(x + 3)(x + 4) = 0$, $x = -3$ eller $x = -4$' },
          { label: 'b', task: '$x^2 - x - 12 = 0$', solution: '$(x - 4)(x + 3) = 0$, $x = 4$ eller $x = -3$' },
          { label: 'c', task: '$x^2 - 9x + 20 = 0$', solution: '$(x - 4)(x - 5) = 0$, $x = 4$ eller $x = 5$' },
          { label: 'd', task: '$x^2 + 2x - 15 = 0$', solution: '$(x + 5)(x - 3) = 0$, $x = -5$ eller $x = 3$' },
        ],
        hints: ['Finn to tall med riktig sum og produkt.'],
        solution: 'a) $x = -3$ eller $x = -4$, b) $x = 4$ eller $x = -3$, c) $x = 4$ eller $x = 5$, d) $x = -5$ eller $x = 3$',
        allowsUpload: true,
      },
    },

    // ========== KONJUGATSETNINGEN ==========
    {
      id: '1t-2-2-section-konjugat',
      type: 'text',
      content: `## Konjugatsetningen

Noen andregradsuttrykk kan faktoriseres med konjugatsetningen:

$$a^2 - b^2 = (a + b)(a - b)$$

Dette gir oss en rask metode for likninger på formen $x^2 = k$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-2-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Løs likningen $x^2 - 16 = 0$',
      solution: `**Løsning:**

Vi bruker konjugatsetningen:

$x^2 - 16 = x^2 - 4^2 = (x + 4)(x - 4) = 0$

$x = -4 \\quad$ eller $\\quad x = 4$

**Alternativt:** $x^2 = 16 \\Rightarrow x = \\pm 4$

**Svar:** $x = \\pm 4$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene ved å bruke konjugatsetningen',
        subTasks: [
          { label: 'a', task: '$x^2 - 25 = 0$', solution: '$x = \\pm 5$' },
          { label: 'b', task: '$x^2 - 49 = 0$', solution: '$x = \\pm 7$' },
          { label: 'c', task: '$4x^2 - 9 = 0$', solution: '$(2x)^2 - 3^2 = 0$, $x = \\pm \\frac{3}{2}$' },
          { label: 'd', task: '$x^2 = 81$', solution: '$x = \\pm 9$' },
        ],
        hints: ['Bruk at $a^2 - b^2 = (a+b)(a-b)$.'],
        solution: 'a) $x = \\pm 5$, b) $x = \\pm 7$, c) $x = \\pm \\frac{3}{2}$, d) $x = \\pm 9$',
        allowsUpload: true,
      },
    },

    // ========== FELLES FAKTOR ==========
    {
      id: '1t-2-2-section-felles',
      type: 'text',
      content: `## Felles faktor

Hvis alle ledd har en felles faktor, sett denne utenfor parentesen først.`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-2-2-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Løs likningen $2x^2 - 8x = 0$',
      solution: `**Løsning:**

Vi setter $2x$ utenfor parentes:

$2x^2 - 8x = 2x(x - 4) = 0$

$2x = 0 \\quad$ eller $\\quad x - 4 = 0$

$x = 0 \\quad$ eller $\\quad x = 4$

**Svar:** $x = 0$ eller $x = 4$`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene ved å sette felles faktor utenfor',
        subTasks: [
          { label: 'a', task: '$3x^2 - 12x = 0$', solution: '$3x(x - 4) = 0$, $x = 0$ eller $x = 4$' },
          { label: 'b', task: '$x^2 + 5x = 0$', solution: '$x(x + 5) = 0$, $x = 0$ eller $x = -5$' },
          { label: 'c', task: '$-2x^2 + 10x = 0$', solution: '$-2x(x - 5) = 0$, $x = 0$ eller $x = 5$' },
          { label: 'd', task: '$5x^2 = 15x$', solution: '$5x(x - 3) = 0$, $x = 0$ eller $x = 3$' },
        ],
        hints: ['Se etter felles faktor i alle ledd.'],
        solution: 'a) $x = 0$ eller $x = 4$, b) $x = 0$ eller $x = -5$, c) $x = 0$ eller $x = 5$, d) $x = 0$ eller $x = 3$',
        allowsUpload: true,
      },
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '1t-2-2-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Løs likningen $3x^2 - 12 = 0$',
      solution: `**Løsning:**

Vi setter 3 utenfor parentes:

$3x^2 - 12 = 3(x^2 - 4) = 3(x + 2)(x - 2) = 0$

Siden $3 \\neq 0$, må $(x + 2)(x - 2) = 0$

$x = -2 \\quad$ eller $\\quad x = 2$

**Svar:** $x = \\pm 2$`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '1t-2-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$2x^2 - 50 = 0$', solution: '$2(x^2 - 25) = 0$, $x = \\pm 5$' },
          { label: 'b', task: '$3x^2 + 6x - 24 = 0$', solution: '$3(x^2 + 2x - 8) = 3(x + 4)(x - 2) = 0$, $x = -4$ eller $x = 2$' },
          { label: 'c', task: '$2x^2 - 14x + 24 = 0$', solution: '$2(x^2 - 7x + 12) = 2(x - 3)(x - 4) = 0$, $x = 3$ eller $x = 4$' },
          { label: 'd', task: '$-x^2 + 4x + 5 = 0$', solution: '$-(x^2 - 4x - 5) = -(x - 5)(x + 1) = 0$, $x = 5$ eller $x = -1$' },
        ],
        hints: ['Sett felles faktor utenfor, deretter faktoriser videre.'],
        solution: 'a) $x = \\pm 5$, b) $x = -4$ eller $x = 2$, c) $x = 3$ eller $x = 4$, d) $x = 5$ eller $x = -1$',
        allowsUpload: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '1t-2-2-summary',
      type: 'definition',
      title: 'Oppsummering',
      content: `**Nullregelen:** $A \\cdot B = 0 \\Rightarrow A = 0$ eller $B = 0$

**Faktorisering ved inspeksjon:** Finn to tall med riktig sum og produkt

**Konjugatsetningen:** $a^2 - b^2 = (a + b)(a - b)$

**Felles faktor:** Sett alltid felles faktor utenfor først`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_2_4_FULLSTENDIG: TextbookChapter = {
  id: '1t-2-4',
  courseId: '1t',
  chapterNumber: '2.4',
  title: 'Fullstendig kvadrat',
  description: 'Løs andregradslikninger ved å fullføre kvadratet.',
  estimatedMinutes: 30,
  competenceGoals: ['løse andregradslikninger ved å fullføre kvadratet'],
  content: [
    // ========== INTRO ==========
    {
      id: '1t-2-4-intro',
      type: 'text',
      content: `# Fullføre kvadratet

Metoden **fullstendig kvadrat** (eller «fullføre kvadratet») er en teknikk for å løse andregradslikninger ved å omskrive uttrykket til en perfekt kvadratform.

Denne metoden er spesielt nyttig når:
- Du vil forstå hvor abc-formelen kommer fra
- Du skal finne toppunktet til en parabel
- Faktorisering ikke gir «pene» tall`,
    },

    // ========== KVADRATSETNINGEN ==========
    {
      id: '1t-2-4-theorem',
      type: 'theorem',
      title: 'Første kvadratsetning',
      content: `$$(a + b)^2 = a^2 + 2ab + b^2$$

$$(a - b)^2 = a^2 - 2ab + b^2$$

Mønsteret: Det midterste leddet er **dobbelt produkt** av $a$ og $b$.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Skriv $x^2 + 6x + 9$ som et kvadrat.',
      solution: `**Løsning:**

Vi sammenligner med $(a + b)^2 = a^2 + 2ab + b^2$:

- $a^2 = x^2 \\Rightarrow a = x$
- $2ab = 6x \\Rightarrow 2 \\cdot x \\cdot b = 6x \\Rightarrow b = 3$
- $b^2 = 3^2 = 9$ ✓

**Svar:** $x^2 + 6x + 9 = (x + 3)^2$`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv uttrykkene som fullstendige kvadrater',
        subTasks: [
          { label: 'a', task: '$x^2 + 4x + 4$', solution: '$(x + 2)^2$' },
          { label: 'b', task: '$x^2 - 10x + 25$', solution: '$(x - 5)^2$' },
          { label: 'c', task: '$x^2 + 2x + 1$', solution: '$(x + 1)^2$' },
          { label: 'd', task: '$x^2 - 8x + 16$', solution: '$(x - 4)^2$' },
        ],
        hints: ['Sjekk at konstantleddet er halvparten av $x$-koeffisienten i andre.'],
        solution: 'a) $(x + 2)^2$, b) $(x - 5)^2$, c) $(x + 1)^2$, d) $(x - 4)^2$',
        allowsUpload: true,
      },
    },

    // ========== FULLFØRE KVADRATET ==========
    {
      id: '1t-2-4-section-metode',
      type: 'text',
      content: `## Metoden: Fullføre kvadratet

For å løse $x^2 + bx + c = 0$:

1. Flytt konstantleddet: $x^2 + bx = -c$
2. Legg til $\\left(\\frac{b}{2}\\right)^2$ på begge sider
3. Venstre side blir nå $(x + \\frac{b}{2})^2$
4. Løs ved å ta kvadratrot`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-2-4-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Løs $x^2 + 6x - 7 = 0$ ved å fullføre kvadratet.',
      solution: `**Løsning:**

**Steg 1:** Flytt konstantleddet
$x^2 + 6x = 7$

**Steg 2:** Legg til $\\left(\\frac{6}{2}\\right)^2 = 9$ på begge sider
$x^2 + 6x + 9 = 7 + 9$
$x^2 + 6x + 9 = 16$

**Steg 3:** Skriv venstre side som kvadrat
$(x + 3)^2 = 16$

**Steg 4:** Ta kvadratrot
$x + 3 = \\pm 4$

$x = -3 + 4 = 1 \\quad$ eller $\\quad x = -3 - 4 = -7$

**Svar:** $x = 1$ eller $x = -7$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene ved å fullføre kvadratet',
        subTasks: [
          { label: 'a', task: '$x^2 + 4x - 5 = 0$', solution: '$(x + 2)^2 = 9$, $x = 1$ eller $x = -5$' },
          { label: 'b', task: '$x^2 - 2x - 8 = 0$', solution: '$(x - 1)^2 = 9$, $x = 4$ eller $x = -2$' },
          { label: 'c', task: '$x^2 + 8x + 7 = 0$', solution: '$(x + 4)^2 = 9$, $x = -1$ eller $x = -7$' },
          { label: 'd', task: '$x^2 - 6x + 5 = 0$', solution: '$(x - 3)^2 = 4$, $x = 5$ eller $x = 1$' },
        ],
        hints: ['Husk å legge til $(b/2)^2$ på begge sider.'],
        solution: 'a) $x = 1$ eller $x = -5$, b) $x = 4$ eller $x = -2$, c) $x = -1$ eller $x = -7$, d) $x = 5$ eller $x = 1$',
        allowsUpload: true,
      },
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-2-4-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Løs $x^2 - 4x + 1 = 0$ ved å fullføre kvadratet.',
      solution: `**Løsning:**

$x^2 - 4x = -1$

$x^2 - 4x + 4 = -1 + 4$

$(x - 2)^2 = 3$

$x - 2 = \\pm\\sqrt{3}$

$x = 2 \\pm \\sqrt{3}$

**Svar:** $x = 2 + \\sqrt{3}$ eller $x = 2 - \\sqrt{3}$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene og gi eksakt svar',
        subTasks: [
          { label: 'a', task: '$x^2 + 2x - 1 = 0$', solution: '$x = -1 \\pm \\sqrt{2}$' },
          { label: 'b', task: '$x^2 - 6x + 4 = 0$', solution: '$x = 3 \\pm \\sqrt{5}$' },
          { label: 'c', task: '$x^2 + 4x - 1 = 0$', solution: '$x = -2 \\pm \\sqrt{5}$' },
          { label: 'd', task: '$x^2 - 10x + 20 = 0$', solution: '$x = 5 \\pm \\sqrt{5}$' },
        ],
        hints: ['Løsningene inneholder kvadratrøtter.'],
        solution: 'a) $x = -1 \\pm \\sqrt{2}$, b) $x = 3 \\pm \\sqrt{5}$, c) $x = -2 \\pm \\sqrt{5}$, d) $x = 5 \\pm \\sqrt{5}$',
        allowsUpload: true,
      },
    },

    // ========== NÅR a ≠ 1 ==========
    {
      id: '1t-2-4-section-a-ikke-1',
      type: 'text',
      content: `## Når koeffisienten foran $x^2$ ikke er 1

Hvis likningen har formen $ax^2 + bx + c = 0$ der $a \\neq 1$:

1. Del hele likningen på $a$
2. Fullør kvadratet som vanlig`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-2-4-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Løs $2x^2 + 8x - 10 = 0$ ved å fullføre kvadratet.',
      solution: `**Løsning:**

**Del på 2:**
$x^2 + 4x - 5 = 0$

**Flytt konstantleddet:**
$x^2 + 4x = 5$

**Legg til $\\left(\\frac{4}{2}\\right)^2 = 4$:**
$x^2 + 4x + 4 = 5 + 4$
$(x + 2)^2 = 9$

**Ta kvadratrot:**
$x + 2 = \\pm 3$
$x = -2 + 3 = 1 \\quad$ eller $\\quad x = -2 - 3 = -5$

**Svar:** $x = 1$ eller $x = -5$`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene ved å fullføre kvadratet',
        subTasks: [
          { label: 'a', task: '$2x^2 - 4x - 6 = 0$', solution: '$x = 3$ eller $x = -1$' },
          { label: 'b', task: '$3x^2 + 12x - 15 = 0$', solution: '$x = 1$ eller $x = -5$' },
          { label: 'c', task: '$-x^2 + 6x - 5 = 0$', solution: '$x = 1$ eller $x = 5$' },
          { label: 'd', task: '$4x^2 - 8x - 12 = 0$', solution: '$x = 3$ eller $x = -1$' },
        ],
        hints: ['Del på koeffisienten foran $x^2$ først.'],
        solution: 'a) $x = 3$ eller $x = -1$, b) $x = 1$ eller $x = -5$, c) $x = 1$ eller $x = 5$, d) $x = 3$ eller $x = -1$',
        allowsUpload: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '1t-2-4-summary',
      type: 'definition',
      title: 'Oppsummering',
      content: `**Metoden fullstendig kvadrat:**

1. Skriv likningen på formen $x^2 + bx = -c$
2. Legg til $\\left(\\frac{b}{2}\\right)^2$ på begge sider
3. Skriv venstre side som $(x + \\frac{b}{2})^2$
4. Ta kvadratrot og løs for $x$

Husk: Hvis $a \\neq 1$, del på $a$ først.`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_2_6: TextbookChapter = {
  id: '1t-2-6',
  courseId: '1t',
  chapterNumber: '2.6',
  title: 'Likninger med røtter',
  description: 'Løs likninger som inneholder kvadratrøtter.',
  estimatedMinutes: 30,
  competenceGoals: ['løse likninger med kvadratrøtter'],
  content: [
    // ========== INTRO ==========
    {
      id: '1t-2-6-intro',
      type: 'text',
      content: `# Likninger med røtter

I dette kapitlet lærer du å løse likninger der den ukjente står under et rottegn, for eksempel $\\sqrt{x + 3} = 5$.

**Viktig:** Når vi kvadrerer begge sider av en likning, kan vi introdusere **falske løsninger**. Derfor må vi alltid kontrollere svarene!`,
    },

    // ========== DEFINISJON ==========
    {
      id: '1t-2-6-def',
      type: 'definition',
      title: 'Kvadratrot',
      content: `$\\sqrt{a}$ er det **positive** tallet som opphøyd i andre gir $a$.

Det betyr at $\\sqrt{a} \\geq 0$ for alle $a \\geq 0$.

For eksempel: $\\sqrt{9} = 3$ (ikke $-3$)`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-2-6-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Løs likningen $\\sqrt{x} = 4$',
      solution: `**Løsning:**

Vi kvadrerer begge sider:
$(\\sqrt{x})^2 = 4^2$
$x = 16$

**Kontroll:** $\\sqrt{16} = 4$ ✓

**Svar:** $x = 16$`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-2-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-2-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\sqrt{x} = 5$', solution: '$x = 25$' },
          { label: 'b', task: '$\\sqrt{x} = 7$', solution: '$x = 49$' },
          { label: 'c', task: '$\\sqrt{x} = 10$', solution: '$x = 100$' },
          { label: 'd', task: '$\\sqrt{x} = 0$', solution: '$x = 0$' },
        ],
        hints: ['Kvadrer begge sider.'],
        solution: 'a) $x = 25$, b) $x = 49$, c) $x = 100$, d) $x = 0$',
        allowsUpload: true,
      },
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-2-6-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Løs likningen $\\sqrt{x + 5} = 3$',
      solution: `**Løsning:**

Vi kvadrerer begge sider:
$(\\sqrt{x + 5})^2 = 3^2$
$x + 5 = 9$
$x = 4$

**Kontroll:** $\\sqrt{4 + 5} = \\sqrt{9} = 3$ ✓

**Svar:** $x = 4$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-2-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-2-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene og kontroller svaret',
        subTasks: [
          { label: 'a', task: '$\\sqrt{x - 1} = 4$', solution: '$x = 17$' },
          { label: 'b', task: '$\\sqrt{x + 7} = 5$', solution: '$x = 18$' },
          { label: 'c', task: '$\\sqrt{2x + 1} = 3$', solution: '$x = 4$' },
          { label: 'd', task: '$\\sqrt{3x - 5} = 4$', solution: '$x = 7$' },
        ],
        hints: ['Kvadrer begge sider, løs for $x$, og kontroller.'],
        solution: 'a) $x = 17$, b) $x = 18$, c) $x = 4$, d) $x = 7$',
        allowsUpload: true,
      },
    },

    // ========== FALSKE LØSNINGER ==========
    {
      id: '1t-2-6-section-falske',
      type: 'text',
      content: `## Falske løsninger

Når vi kvadrerer en likning, kan vi få **falske løsninger** som ikke stemmer med den opprinnelige likningen. Dette skjer fordi kvadrering «glemmer» fortegnet.

**Eksempel på hvorfor kontroll er viktig:**
- Anta at $\\sqrt{x} = -3$ (som ikke har løsning)
- Hvis vi kvadrerer: $x = 9$
- Men $\\sqrt{9} = 3 \\neq -3$

Derfor: **Kontroller alltid svaret i den opprinnelige likningen!**`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-2-6-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Løs likningen $\\sqrt{x + 2} = x$',
      solution: `**Løsning:**

Vi kvadrerer begge sider:
$x + 2 = x^2$
$x^2 - x - 2 = 0$
$(x - 2)(x + 1) = 0$
$x = 2$ eller $x = -1$

**Kontroll:**
- $x = 2$: $\\sqrt{2 + 2} = \\sqrt{4} = 2$ ✓
- $x = -1$: $\\sqrt{-1 + 2} = \\sqrt{1} = 1 \\neq -1$ ✗

**Svar:** $x = 2$ (kun én løsning)`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-2-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-2-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene og forkast eventuelle falske løsninger',
        subTasks: [
          { label: 'a', task: '$\\sqrt{x - 3} = x - 5$', solution: '$x = 7$ (forkaster $x = 4$)' },
          { label: 'b', task: '$\\sqrt{x + 3} = x + 1$', solution: '$x = 1$ (forkaster $x = -2$)' },
          { label: 'c', task: '$\\sqrt{2x + 3} = x$', solution: '$x = 3$ (forkaster $x = -1$)' },
          { label: 'd', task: '$\\sqrt{x} + 1 = x - 1$', solution: '$x = 4$ (forkaster $x = 1$)' },
        ],
        hints: ['Husk å kontrollere alle kandidatløsninger i den opprinnelige likningen.'],
        solution: 'a) $x = 7$, b) $x = 1$, c) $x = 3$, d) $x = 4$',
        allowsUpload: true,
      },
    },

    // ========== ISOLER ROTEN ==========
    {
      id: '1t-2-6-section-isoler',
      type: 'text',
      content: `## Isoler roten først

Hvis rotuttrykket ikke står alene, må du isolere det før du kvadrerer.`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-2-6-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Løs likningen $\\sqrt{x + 1} + 3 = 7$',
      solution: `**Løsning:**

**Isoler roten:**
$\\sqrt{x + 1} = 7 - 3 = 4$

**Kvadrer:**
$x + 1 = 16$
$x = 15$

**Kontroll:** $\\sqrt{15 + 1} + 3 = \\sqrt{16} + 3 = 4 + 3 = 7$ ✓

**Svar:** $x = 15$`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-2-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-2-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\sqrt{x} - 2 = 3$', solution: '$x = 25$' },
          { label: 'b', task: '$2\\sqrt{x} = 6$', solution: '$x = 9$' },
          { label: 'c', task: '$\\sqrt{x - 4} + 1 = 6$', solution: '$x = 29$' },
          { label: 'd', task: '$3\\sqrt{x + 2} = 12$', solution: '$x = 14$' },
        ],
        hints: ['Isoler rotuttrykket først, deretter kvadrer.'],
        solution: 'a) $x = 25$, b) $x = 9$, c) $x = 29$, d) $x = 14$',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '1t-2-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-2-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\sqrt{x} = -2$', solution: 'Ingen løsning ($\\sqrt{x} \\geq 0$)' },
          { label: 'b', task: '$\\sqrt{x^2} = 4$', solution: '$x = \\pm 4$' },
          { label: 'c', task: '$\\sqrt{x - 1} = \\sqrt{2x - 5}$', solution: '$x = 4$' },
          { label: 'd', task: '$\\sqrt{x + 5} - \\sqrt{x} = 1$', solution: '$x = 4$' },
        ],
        hints: ['a) Husk at kvadratroten alltid er $\\geq 0$. c) og d) Kvadrer begge sider.'],
        solution: 'a) Ingen løsning, b) $x = \\pm 4$, c) $x = 4$, d) $x = 4$',
        allowsUpload: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '1t-2-6-summary',
      type: 'definition',
      title: 'Oppsummering',
      content: `**Metode for rotlikninger:**

1. Isoler rotuttrykket på én side
2. Kvadrer begge sider
3. Løs likningen
4. **Kontroller alltid svaret!**

**Husk:** $\\sqrt{a} \\geq 0$ for alle $a \\geq 0$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_2_9: TextbookChapter = {
  id: '1t-2-9',
  courseId: '1t',
  chapterNumber: '2.9',
  title: 'Praktisk bruk av andregradslikninger',
  description: 'Bruk andregradslikninger til å løse praktiske problemer.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke andregradslikninger i praktiske situasjoner', 'tolke løsninger i kontekst'],
  content: [
    // ========== INTRO ==========
    {
      id: '1t-2-9-intro',
      type: 'text',
      content: `# Praktisk bruk av andregradslikninger

Andregradslikninger dukker opp i mange praktiske sammenhenger:
- **Arealproblemer** (rektangler, trekanter)
- **Kastebevegelse** (ball, prosjektil)
- **Økonomi** (profitt, kostnader)
- **Geometri** (Pytagoras)

I dette kapitlet lærer du å sette opp og løse slike problemer.`,
    },

    // ========== AREALPROBLEMER ==========
    {
      id: '1t-2-9-section-areal',
      type: 'text',
      content: `## Arealproblemer

Når vi jobber med areal av rektangler eller andre figurer, får vi ofte andregradslikninger fordi areal = lengde × bredde.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-2-9-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Et rektangel har omkrets 28 cm og areal 48 cm². Finn lengden og bredden.',
      solution: `**Løsning:**

La lengden være $x$ og bredden være $y$.

**Fra omkretsen:** $2x + 2y = 28 \\Rightarrow x + y = 14 \\Rightarrow y = 14 - x$

**Fra arealet:** $x \\cdot y = 48$

**Setter inn for $y$:**
$x(14 - x) = 48$
$14x - x^2 = 48$
$x^2 - 14x + 48 = 0$

**Faktoriserer:** $(x - 6)(x - 8) = 0$

$x = 6$ eller $x = 8$

Hvis $x = 8$, så er $y = 14 - 8 = 6$.

**Svar:** Lengde 8 cm og bredde 6 cm.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-2-9-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-2-9-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs arealproblemet',
        subTasks: [
          { label: 'a', task: 'Et rektangel har omkrets 20 cm og areal 24 cm². Finn sidene.', solution: '6 cm og 4 cm' },
          { label: 'b', task: 'Et rektangel har omkrets 34 cm og areal 60 cm². Finn sidene.', solution: '12 cm og 5 cm' },
        ],
        hints: ['Sett opp to likninger: én for omkrets og én for areal.'],
        solution: 'a) 6 cm og 4 cm, b) 12 cm og 5 cm',
        allowsUpload: true,
      },
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-2-9-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'En hage er 5 meter lengre enn den er bred. Arealet er 150 m². Finn dimensjonene.',
      solution: `**Løsning:**

La bredden være $x$ meter. Da er lengden $(x + 5)$ meter.

**Areal:**
$x(x + 5) = 150$
$x^2 + 5x - 150 = 0$

**ABC-formelen:**
$x = \\frac{-5 \\pm \\sqrt{25 + 600}}{2} = \\frac{-5 \\pm 25}{2}$

$x = 10$ eller $x = -15$ (forkastes)

**Svar:** Bredde 10 m, lengde 15 m.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-2-9-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-2-9-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs problemene',
        subTasks: [
          { label: 'a', task: 'En tomt er 3 m bredere enn den er lang. Arealet er 180 m². Finn dimensjonene.', solution: 'Lengde 12 m, bredde 15 m' },
          { label: 'b', task: 'Lengden av et rektangel er dobbelt så stor som bredden. Arealet er 72 cm². Finn sidene.', solution: 'Bredde 6 cm, lengde 12 cm' },
        ],
        hints: ['Uttrykk begge dimensjonene ved hjelp av én variabel.'],
        solution: 'a) 12 m × 15 m, b) 6 cm × 12 cm',
        allowsUpload: true,
      },
    },

    // ========== KASTEBEVEGELSE ==========
    {
      id: '1t-2-9-section-kast',
      type: 'text',
      content: `## Kastebevegelse

Høyden til en gjenstand som kastes opp kan ofte beskrives med en andregradsfunksjon:

$$h(t) = -\\frac{1}{2}gt^2 + v_0 t + h_0$$

der:
- $g \\approx 10$ m/s² (tyngdeakselerasjonen)
- $v_0$ er starthastigheten
- $h_0$ er starthøyden`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-2-9-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'En ball kastes rett opp fra bakken med fart 20 m/s. Høyden er gitt ved $h(t) = -5t^2 + 20t$. Når er ballen 15 meter over bakken?',
      solution: `**Løsning:**

Vi setter $h(t) = 15$:
$-5t^2 + 20t = 15$
$-5t^2 + 20t - 15 = 0$

**Deler på $-5$:**
$t^2 - 4t + 3 = 0$
$(t - 1)(t - 3) = 0$
$t = 1$ eller $t = 3$

**Tolkning:** Ballen er 15 m over bakken to ganger:
- På vei opp etter 1 sekund
- På vei ned etter 3 sekunder

**Svar:** Etter 1 s og etter 3 s.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-2-9-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-2-9-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En ball kastes opp med $h(t) = -5t^2 + 30t$ meter.',
        subTasks: [
          { label: 'a', task: 'Når er ballen 40 m over bakken?', solution: '$t = 2$ s eller $t = 4$ s' },
          { label: 'b', task: 'Når treffer ballen bakken igjen?', solution: '$t = 6$ s' },
          { label: 'c', task: 'Hva er maksimal høyde? (Hint: Finn toppunktet)', solution: '45 m (ved $t = 3$ s)' },
        ],
        hints: ['a) og b) Sett opp andregradslikninger. c) Toppunktet er ved $t = -b/(2a)$.'],
        solution: 'a) 2 s og 4 s, b) 6 s, c) 45 m',
        allowsUpload: true,
      },
    },

    // ========== PYTAGORAS ==========
    {
      id: '1t-2-9-section-pytagoras',
      type: 'text',
      content: `## Pytagoras

I rettvinklede trekanter gir Pytagoras' setning ofte andregradslikninger:

$$a^2 + b^2 = c^2$$`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-2-9-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'I en rettvinklet trekant er den ene kateten 2 cm lengre enn den andre. Hypotenusen er 10 cm. Finn katetene.',
      solution: `**Løsning:**

La den korteste kateten være $x$. Den andre er $(x + 2)$.

**Pytagoras:**
$x^2 + (x + 2)^2 = 10^2$
$x^2 + x^2 + 4x + 4 = 100$
$2x^2 + 4x - 96 = 0$
$x^2 + 2x - 48 = 0$
$(x + 8)(x - 6) = 0$
$x = 6$ (forkaster $x = -8$)

**Svar:** Katetene er 6 cm og 8 cm.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-2-9-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-2-9-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs trekantproblemene',
        subTasks: [
          { label: 'a', task: 'I en rettvinklet trekant er den ene kateten 7 cm lengre enn den andre. Hypotenusen er 13 cm. Finn katetene.', solution: '5 cm og 12 cm' },
          { label: 'b', task: 'En stige på 5 m står mot en vegg. Bunnen av stigen er 1 m lengre fra veggen enn toppen er opp på veggen. Hvor høyt opp på veggen når stigen?', solution: '4 m (bunnen er 3 m fra veggen)' },
        ],
        hints: ['Bruk Pytagoras\' setning.'],
        solution: 'a) 5 cm og 12 cm, b) 4 m',
        allowsUpload: true,
      },
    },

    // ========== TALLGÅTER ==========
    {
      id: '1t-2-9-section-tall',
      type: 'text',
      content: `## Tallproblemer

Andregradslikninger kan også brukes til å løse tallgåter.`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '1t-2-9-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Produktet av to påfølgende positive hele tall er 132. Finn tallene.',
      solution: `**Løsning:**

La det første tallet være $n$. Det neste er $(n + 1)$.

$n(n + 1) = 132$
$n^2 + n - 132 = 0$
$(n + 12)(n - 11) = 0$
$n = 11$ (forkaster $n = -12$)

**Svar:** Tallene er 11 og 12.`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '1t-2-9-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-2-9-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs tallproblemene',
        subTasks: [
          { label: 'a', task: 'Produktet av to påfølgende positive hele tall er 240. Finn tallene.', solution: '15 og 16' },
          { label: 'b', task: 'Summen av et tall og kvadratet av tallet er 72. Finn tallet (positivt).', solution: '8' },
          { label: 'c', task: 'Produktet av to påfølgende partall er 168. Finn tallene.', solution: '12 og 14' },
        ],
        hints: ['Sett opp en andregradslikning basert på beskrivelsen.'],
        solution: 'a) 15 og 16, b) 8, c) 12 og 14',
        allowsUpload: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '1t-2-9-summary',
      type: 'definition',
      title: 'Oppsummering',
      content: `**Fremgangsmåte:**
1. Les oppgaven nøye
2. Innfør variabel(er) for det ukjente
3. Sett opp andregradslikning basert på informasjonen
4. Løs likningen
5. Forkast løsninger som ikke gir mening i konteksten
6. Svar med riktig enhet

**Vanlige problemtyper:**
- Areal (lengde × bredde)
- Kastebevegelse ($h = -5t^2 + v_0 t + h_0$)
- Pytagoras ($a^2 + b^2 = c^2$)
- Tallgåter`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_2_10: TextbookChapter = {
  id: '1t-2-10',
  courseId: '1t',
  chapterNumber: '2.10',
  title: 'Polynomdivisjon og likningsløsning',
  description: 'Bruk polynomdivisjon til å løse polynomlikninger.',
  estimatedMinutes: 35,
  competenceGoals: ['bruke polynomdivisjon til å løse likninger'],
  content: [
    // ========== INTRO ==========
    {
      id: '1t-2-10-intro',
      type: 'text',
      content: `# Polynomdivisjon og likningsløsning

I kapittel 1.8-1.9 lærte du polynomdivisjon og faktorteoremet. Nå skal vi bruke disse verktøyene til å **løse polynomlikninger** av høyere grad.

**Strategi for å løse $P(x) = 0$:**
1. Finn ett nullpunkt $x = a$ (ved å prøve)
2. Divider $P(x)$ på $(x - a)$
3. Løs den enklere likningen du får`,
    },

    // ========== REPETISJON ==========
    {
      id: '1t-2-10-repetisjon',
      type: 'theorem',
      title: 'Faktorteoremet (repetisjon)',
      content: `Hvis $P(a) = 0$, så er $(x - a)$ en faktor i $P(x)$.

Det betyr: $P(x) = (x - a) \\cdot Q(x)$ for et polynom $Q(x)$.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-2-10-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Løs likningen $x^3 - 6x^2 + 11x - 6 = 0$',
      solution: `**Løsning:**

**Steg 1: Finn et nullpunkt**
Prøver divisorer av konstantleddet 6: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$

$P(1) = 1 - 6 + 11 - 6 = 0$ ✓

**Steg 2: Polynomdivisjon**
$(x^3 - 6x^2 + 11x - 6) : (x - 1) = x^2 - 5x + 6$

**Steg 3: Faktoriser kvotienten**
$x^2 - 5x + 6 = (x - 2)(x - 3)$

**Komplett faktorisering:**
$x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3) = 0$

**Svar:** $x = 1$, $x = 2$ eller $x = 3$`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-2-10-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-2-10-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle løsninger',
        subTasks: [
          { label: 'a', task: '$x^3 - 2x^2 - 5x + 6 = 0$', solution: '$x = 1, x = -2, x = 3$' },
          { label: 'b', task: '$x^3 + 6x^2 + 11x + 6 = 0$', solution: '$x = -1, x = -2, x = -3$' },
        ],
        hints: ['Prøv divisorer av konstantleddet for å finne første nullpunkt.'],
        solution: 'a) $x = 1, -2, 3$, b) $x = -1, -2, -3$',
        allowsUpload: true,
      },
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-2-10-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Løs likningen $x^3 - 4x^2 + x + 6 = 0$',
      solution: `**Løsning:**

**Finn nullpunkt:**
$P(-1) = -1 - 4 - 1 + 6 = 0$ ✓

**Polynomdivisjon:**
$(x^3 - 4x^2 + x + 6) : (x + 1) = x^2 - 5x + 6$

**Faktoriser:**
$x^2 - 5x + 6 = (x - 2)(x - 3)$

**Svar:** $x = -1$, $x = 2$ eller $x = 3$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-2-10-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-2-10-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$x^3 - 7x + 6 = 0$', solution: '$x = 1, x = 2, x = -3$' },
          { label: 'b', task: '$x^3 + 2x^2 - x - 2 = 0$', solution: '$x = 1, x = -1, x = -2$' },
          { label: 'c', task: '$x^3 - 3x^2 - 4x + 12 = 0$', solution: '$x = 2, x = -2, x = 3$' },
        ],
        hints: ['Start med å prøve $x = \\pm 1, \\pm 2, \\pm 3$.'],
        solution: 'a) $x = 1, 2, -3$, b) $x = 1, -1, -2$, c) $x = 2, -2, 3$',
        allowsUpload: true,
      },
    },

    // ========== FJERDEGRADSLIKNINGER ==========
    {
      id: '1t-2-10-section-fjerde',
      type: 'text',
      content: `## Fjerdegradslikninger

For fjerdegradslikninger må vi ofte gjenta prosessen:
1. Finn ett nullpunkt
2. Divider for å få tredjegradspolynom
3. Finn ett nullpunkt til
4. Divider for å få andregradspolynom
5. Løs andregradslikningen`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-2-10-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Løs likningen $x^4 - 5x^2 + 4 = 0$',
      solution: `**Løsning:**

**Metode 1: Substitusjon**
Sett $u = x^2$:
$u^2 - 5u + 4 = 0$
$(u - 1)(u - 4) = 0$
$u = 1$ eller $u = 4$

Tilbake til $x$:
- $x^2 = 1 \\Rightarrow x = \\pm 1$
- $x^2 = 4 \\Rightarrow x = \\pm 2$

**Svar:** $x = -2, -1, 1, 2$

**Metode 2: Faktorisering**
$x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4) = (x-1)(x+1)(x-2)(x+2)$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-2-10-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-2-10-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$x^4 - 10x^2 + 9 = 0$', solution: '$x = \\pm 1, \\pm 3$' },
          { label: 'b', task: '$x^4 - 13x^2 + 36 = 0$', solution: '$x = \\pm 2, \\pm 3$' },
          { label: 'c', task: '$x^4 - 5x^2 - 36 = 0$', solution: '$x = \\pm 3$ (de andre er komplekse)' },
        ],
        hints: ['Bruk substitusjon $u = x^2$.'],
        solution: 'a) $x = \\pm 1, \\pm 3$, b) $x = \\pm 2, \\pm 3$, c) $x = \\pm 3$',
        allowsUpload: true,
      },
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-2-10-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Løs likningen $x^3 - 8 = 0$',
      solution: `**Løsning:**

**Metode 1: Direkte**
$x^3 = 8$
$x = \\sqrt[3]{8} = 2$

**Metode 2: Med faktorisering (for oversikt)**
Vi vet at $x = 2$ er et nullpunkt.

$(x^3 - 8) : (x - 2) = x^2 + 2x + 4$

Diskriminanten til $x^2 + 2x + 4$:
$\\Delta = 4 - 16 = -12 < 0$

Ingen reelle løsninger fra denne faktoren.

**Svar:** $x = 2$ (eneste reelle løsning)`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-2-10-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-2-10-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle reelle løsninger',
        subTasks: [
          { label: 'a', task: '$x^3 - 27 = 0$', solution: '$x = 3$' },
          { label: 'b', task: '$x^3 + 8 = 0$', solution: '$x = -2$' },
          { label: 'c', task: '$x^4 - 16 = 0$', solution: '$x = \\pm 2$' },
          { label: 'd', task: '$x^4 - 81 = 0$', solution: '$x = \\pm 3$' },
        ],
        hints: ['Bruk at $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$.'],
        solution: 'a) $x = 3$, b) $x = -2$, c) $x = \\pm 2$, d) $x = \\pm 3$',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '1t-2-10-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-2-10-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene ved polynomdivisjon',
        subTasks: [
          { label: 'a', task: '$x^3 + x^2 - 4x - 4 = 0$', solution: '$x = -1, x = 2, x = -2$' },
          { label: 'b', task: '$2x^3 - 3x^2 - 11x + 6 = 0$', solution: '$x = 3, x = -2, x = \\frac{1}{2}$' },
          { label: 'c', task: '$x^4 - 4x^3 + 4x^2 = 0$', solution: '$x = 0$ (dobbel), $x = 2$ (dobbel)' },
        ],
        hints: ['Faktoriser ut felles faktor hvis mulig. Prøv heltallsløsninger først.'],
        solution: 'a) $x = -1, 2, -2$, b) $x = 3, -2, \\frac{1}{2}$, c) $x = 0, 2$ (begge doble)',
        allowsUpload: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '1t-2-10-summary',
      type: 'definition',
      title: 'Oppsummering',
      content: `**Metode for polynomlikninger:**
1. Prøv divisorer av konstantleddet for å finne nullpunkt
2. Bruk faktorteoremet: $(x - a)$ er faktor hvis $P(a) = 0$
3. Utfør polynomdivisjon
4. Fortsett til du har andregradslikninger

**Tips:**
- $x^4 - a = 0$: Løsninger $x = \\pm \\sqrt[4]{a}$
- $x^3 - a = 0$: Løsning $x = \\sqrt[3]{a}$
- Substitusjon $u = x^2$ for biquadratiske likninger`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_4_1: TextbookChapter = {
  id: '1t-5-1',
  courseId: '1t',
  chapterNumber: '5.1',
  title: 'Vinkler og trekanter',
  description: 'Repetisjon av vinkler og trekantegenskaper.',
  estimatedMinutes: 25,
  competenceGoals: ['utforske geometriske egenskaper ved trekanter', 'beregne vinkler i geometriske figurer'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '1t-5-1-intro',
      type: 'text',
      content: `## Vinkler

En **vinkel** dannes når to linjer eller linjestykker møtes i et punkt. Vi måler vinkler i grader (°).

### Typer vinkler
- **Spiss vinkel:** Mindre enn 90°
- **Rett vinkel:** Nøyaktig 90°
- **Stump vinkel:** Mellom 90° og 180°
- **Rett linje:** Nøyaktig 180°
- **Refleks vinkel:** Mellom 180° og 360°`,
    },

    // ========== FIGUR: VINKELTYPER ==========
    {
      id: '1t-5-1-img-vinkler',
      type: 'image',
      src: '/images/geometry/spiss-rett-stump-vinkel.svg',
      alt: 'Illustrasjon av spiss vinkel (45°), rett vinkel (90°) og stump vinkel (135°)',
      caption: 'De tre hovedtypene vinkler: spiss, rett og stump',
    },

    // ========== DEFINISJON: VINKLER ==========
    {
      id: '1t-5-1-def-vinkler',
      type: 'definition',
      title: 'Nærliggende og toppvinkler',
      content: `**Nærliggende vinkler** er to vinkler som ligger ved siden av hverandre og til sammen utgjør 180°.

**Toppvinkler** er de motstående vinklene når to linjer krysser hverandre. Toppvinkler er alltid like store.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `To vinkler er nærliggende. Den ene vinkelen er 65°. Hvor stor er den andre vinkelen?`,
      solution: `**Løsning:**

Nærliggende vinkler er til sammen 180°.

La den ukjente vinkelen være $v$.

$65° + v = 180°$
$v = 180° - 65°$
$v = 115°$

**Svar:** Den andre vinkelen er 115°.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den ukjente vinkelen når vinklene er nærliggende',
        subTasks: [
          { label: 'a', task: 'Den ene vinkelen er 45°', solution: '$v = 135°$' },
          { label: 'b', task: 'Den ene vinkelen er 90°', solution: '$v = 90°$' },
          { label: 'c', task: 'Den ene vinkelen er 120°', solution: '$v = 60°$' },
          { label: 'd', task: 'Den ene vinkelen er 37°', solution: '$v = 143°$' },
        ],
        solution: 'a) 135°, b) 90°, c) 60°, d) 143°',
        hints: ['Nærliggende vinkler er til sammen 180°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST OM TREKANTER ==========
    {
      id: '1t-5-1-trekanter-intro',
      type: 'text',
      content: `## Trekanter

En trekant er en figur med tre sider og tre vinkler.

### Vinkelsum i en trekant
Summen av alle vinklene i en trekant er alltid **180°**.

$$\\angle A + \\angle B + \\angle C = 180°$$`,
    },

    // ========== FIGUR: VINKELSUM I TREKANT ==========
    {
      id: '1t-5-1-img-vinkelsum',
      type: 'image',
      src: '/images/geometry/trekant-vinkelsum.svg',
      alt: 'Trekant med vinklene A, B og C markert, som viser at A + B + C = 180°',
      caption: 'Vinkelsummen i en trekant er alltid 180°',
    },

    // ========== SETNING: VINKELSUM ==========
    {
      id: '1t-5-1-theorem-vinkelsum',
      type: 'theorem',
      title: 'Vinkelsum i trekant',
      content: `Summen av de tre vinklene i en trekant er alltid 180°:

$$\\angle A + \\angle B + \\angle C = 180°$$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `I en trekant er to av vinklene 50° og 70°. Finn den tredje vinkelen.`,
      solution: `**Løsning:**

Vinkelsummen i en trekant er 180°.

La den tredje vinkelen være $v$.

$50° + 70° + v = 180°$
$120° + v = 180°$
$v = 180° - 120°$
$v = 60°$

**Svar:** Den tredje vinkelen er 60°.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den tredje vinkelen i trekanten',
        subTasks: [
          { label: 'a', task: 'De to andre vinklene er 60° og 60°', solution: '$v = 60°$' },
          { label: 'b', task: 'De to andre vinklene er 90° og 45°', solution: '$v = 45°$' },
          { label: 'c', task: 'De to andre vinklene er 30° og 100°', solution: '$v = 50°$' },
          { label: 'd', task: 'De to andre vinklene er 55° og 75°', solution: '$v = 50°$' },
        ],
        solution: 'a) 60°, b) 45°, c) 50°, d) 50°',
        hints: ['Vinkelsummen i en trekant er alltid 180°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: TREKANTTYPER ==========
    {
      id: '1t-5-1-def-trekanttyper',
      type: 'definition',
      title: 'Trekanttyper etter vinkler',
      content: `**Spissvinlet trekant:** Alle vinklene er mindre enn 90°.

**Rettvinklet trekant:** Én vinkel er nøyaktig 90°.

**Stumpvinklet trekant:** Én vinkel er større enn 90°.`,
    },

    // ========== DEFINISJON: TREKANTTYPER ETTER SIDER ==========
    {
      id: '1t-5-1-def-trekanttyper-sider',
      type: 'definition',
      title: 'Trekanttyper etter sider',
      content: `**Likesidet trekant:** Alle tre sidene er like lange. Alle vinklene er 60°.

**Likebeint trekant:** To av sidene er like lange. Vinklene mot de like sidene er like store.

**Ulikesidet trekant:** Alle sidene er forskjellige.`,
    },

    // ========== FIGUR: TREKANTTYPER ==========
    {
      id: '1t-5-1-img-trekanttyper',
      type: 'image',
      src: '/images/geometry/trekanttyper.svg',
      alt: 'Illustrasjon av likebeint, likesidet og rettvinklet trekant',
      caption: 'Tre vanlige trekanttyper: likebeint, likesidet og rettvinklet',
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-5-1-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `En likebeint trekant har en toppvinkel på 40°. Finn de to andre vinklene.`,
      solution: `**Løsning:**

I en likebeint trekant er grunnvinklene like store.

La grunnvinklene være $v$.

$40° + v + v = 180°$
$40° + 2v = 180°$
$2v = 140°$
$v = 70°$

**Svar:** De to grunnvinklene er begge 70°.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn de ukjente vinklene i den likebeinte trekanten',
        subTasks: [
          { label: 'a', task: 'Toppvinkelen er 80°', solution: 'Grunnvinklene er $50°$ hver' },
          { label: 'b', task: 'Toppvinkelen er 100°', solution: 'Grunnvinklene er $40°$ hver' },
          { label: 'c', task: 'En grunnvinkel er 65°', solution: 'Toppvinkelen er $50°$, andre grunnvinkelen er $65°$' },
          { label: 'd', task: 'En grunnvinkel er 72°', solution: 'Toppvinkelen er $36°$, andre grunnvinkelen er $72°$' },
        ],
        solution: 'a) 50° og 50°, b) 40° og 40°, c) 50° og 65°, d) 36° og 72°',
        hints: ['I en likebeint trekant er de to grunnvinklene like store'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST OM PARALLELLE LINJER ==========
    {
      id: '1t-5-1-parallelle-intro',
      type: 'text',
      content: `## Vinkler ved parallelle linjer

Når en linje krysser to parallelle linjer, dannes det flere vinkler.

### Viktige vinkelpar:
- **Samsvarende vinkler:** Vinkler på samme side av transversalen i samme posisjon. De er like store.
- **Vekselvinkler:** Vinkler på motsatt side av transversalen mellom de parallelle linjene. De er like store.`,
    },

    // ========== FIGUR: PARALLELLE LINJER ==========
    {
      id: '1t-5-1-img-parallelle',
      type: 'image',
      src: '/images/geometry/parallelle-linjer-toppvinkler.svg',
      alt: 'To parallelle linjer krysset av en transversal med toppvinkler markert',
      caption: 'Toppvinkler og samsvarende vinkler ved parallelle linjer',
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-5-1-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `To parallelle linjer krysses av en transversal. En av vinklene er 70°. Finn alle de andre vinklene.`,
      solution: `**Løsning:**

Ved hvert krysspunkt dannes fire vinkler.

**Ved første krysspunkt:**
- Vinkelen er 70°
- Nærliggende vinkel: $180° - 70° = 110°$
- Toppvinkler: 70° og 110°

**Ved andre krysspunkt (samsvarende vinkler):**
- Samme vinkler: 70° og 110°

**Svar:** Vinklene er 70°, 110°, 70°, 110° ved hvert krysspunkt.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-5-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'To parallelle linjer krysses av en transversal. Finn den ukjente vinkelen',
        subTasks: [
          { label: 'a', task: 'En vinkel er 55°. Finn samsvarende vinkel', solution: '$55°$' },
          { label: 'b', task: 'En vinkel er 55°. Finn vekselvinkelen', solution: '$55°$' },
          { label: 'c', task: 'En vinkel er 55°. Finn nærliggende vinkel', solution: '$125°$' },
          { label: 'd', task: 'En vinkel er 130°. Finn vekselvinkelen', solution: '$130°$' },
        ],
        solution: 'a) 55°, b) 55°, c) 125°, d) 130°',
        hints: ['Samsvarende vinkler og vekselvinkler er like store ved parallelle linjer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5-8 ==========
    {
      id: '1t-5-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bestem hvilken type trekant det er (etter vinkler)',
        subTasks: [
          { label: 'a', task: 'Vinklene er 60°, 60° og 60°', solution: 'Spissvinlet (og likesidet)' },
          { label: 'b', task: 'Vinklene er 30°, 60° og 90°', solution: 'Rettvinklet' },
          { label: 'c', task: 'Vinklene er 40°, 50° og 90°', solution: 'Rettvinklet' },
          { label: 'd', task: 'Vinklene er 20°, 30° og 130°', solution: 'Stumpvinklet' },
        ],
        solution: 'a) Spissvinlet, b) Rettvinklet, c) Rettvinklet, d) Stumpvinklet',
        hints: ['Rettvinklet = én vinkel på 90°, Stumpvinklet = én vinkel over 90°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-5-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn vinkelen $x$ i figuren',
        subTasks: [
          { label: 'a', task: 'Trekant med vinkler $x$, $2x$ og $3x$', solution: '$x = 30°$' },
          { label: 'b', task: 'Trekant med vinkler $x$, $x + 20°$ og $x + 40°$', solution: '$x = 40°$' },
          { label: 'c', task: 'Trekant med vinkler $2x - 10°$, $x + 30°$ og $x$', solution: '$x = 40°$' },
        ],
        solution: 'a) $x = 30°$, b) $x = 40°$, c) $x = 40°$',
        hints: ['Sett opp likning: summen av vinklene = 180°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-5-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En yttervinkel i en trekant er summen av de to ikke-nærliggende indre vinklene. Finn vinkelen $v$',
        subTasks: [
          { label: 'a', task: 'Yttervinkelen er 120°, en indre vinkel er 50°', solution: '$v = 70°$' },
          { label: 'b', task: 'Yttervinkelen er 140°, en indre vinkel er 65°', solution: '$v = 75°$' },
        ],
        solution: 'a) $v = 70°$, b) $v = 75°$',
        hints: ['Yttervinkel = sum av de to ikke-nærliggende indre vinklene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-5-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver med vinkler',
        subTasks: [
          { label: 'a', task: 'I en likebeint trekant er toppvinkelen dobbelt så stor som grunnvinkelen. Finn alle vinklene.', solution: 'Grunnvinkler: $45°$, Toppvinkel: $90°$' },
          { label: 'b', task: 'I en trekant er den største vinkelen 3 ganger så stor som den minste, og den mellomste er 20° større enn den minste. Finn alle vinklene.', solution: '$32°$, $52°$, $96°$' },
        ],
        solution: 'a) 45°, 45°, 90°; b) 32°, 52°, 96°',
        hints: ['Sett opp likninger basert på forholdene og vinkelsummen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_4_2: TextbookChapter = {
  id: '1t-5-2',
  courseId: '1t',
  chapterNumber: '5.2',
  title: 'Kongruens og formlikhet',
  description: 'Kongruente og formlike figurer.',
  estimatedMinutes: 30,
  competenceGoals: ['identifisere og anvende kongruens og formlikhet', 'bruke formlikhet til å beregne ukjente sidelengder'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '1t-5-2-intro',
      type: 'text',
      content: `## Kongruens

To figurer er **kongruente** når de har nøyaktig samme form og størrelse. De er identiske kopier av hverandre.

Kongruente figurer har:
- Like store sider
- Like store vinkler
- Samme areal`,
    },

    // ========== DEFINISJON: KONGRUENS ==========
    {
      id: '1t-5-2-def-kongruens',
      type: 'definition',
      title: 'Kongruente trekanter',
      content: `To trekanter er kongruente hvis de oppfyller ett av følgende kriterier:

**SSS (side-side-side):** Alle tre sidene er parvis like lange.

**SAS (side-vinkel-side):** To sider og vinkelen mellom dem er like.

**ASA (vinkel-side-vinkel):** To vinkler og siden mellom dem er like.

**SSA (side-side-vinkel):** To sider og én vinkel er like (med visse betingelser).`,
    },

    // ========== FIGUR: KONGRUENTE TREKANTER ==========
    {
      id: '1t-5-2-img-kongruens',
      type: 'image',
      src: '/images/geometry/kongruente-trekanter.svg',
      alt: 'To kongruente trekanter ABC og DEF med like sider markert',
      caption: 'Kongruente trekanter har samme form og størrelse',
    },

    // ========== FIGUR: KONGRUENSSETNINGER ==========
    {
      id: '1t-5-2-img-kongruenssetninger',
      type: 'image',
      src: '/images/geometry/kongruenssetninger.svg',
      alt: 'Illustrasjon av kongruenssetningene SSS, SAS, ASA og SSA',
      caption: 'De fire kongruenssetningene for trekanter',
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '1t-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Trekant ABC har sidene AB = 5 cm, BC = 7 cm og AC = 6 cm.
Trekant DEF har sidene DE = 5 cm, EF = 7 cm og DF = 6 cm.
Er trekantene kongruente?`,
      solution: `**Løsning:**

Vi sjekker SSS-kriteriet (side-side-side):
- AB = DE = 5 cm ✓
- BC = EF = 7 cm ✓
- AC = DF = 6 cm ✓

Alle tre sidene er parvis like lange.

**Svar:** Ja, trekantene er kongruente etter SSS-kriteriet.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '1t-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om trekantene er kongruente og oppgi hvilket kriterium som brukes',
        subTasks: [
          { label: 'a', task: 'Trekant 1: sider 3, 4, 5. Trekant 2: sider 3, 4, 5.', solution: 'Ja, SSS' },
          { label: 'b', task: 'Trekant 1: sider 6, 8, 10. Trekant 2: sider 6, 8, 11.', solution: 'Nei' },
          { label: 'c', task: 'Begge har sider 4 og 5, og vinkelen mellom er 60°', solution: 'Ja, SAS' },
          { label: 'd', task: 'Begge har vinkler 50° og 70°, og siden mellom er 8 cm', solution: 'Ja, ASA' },
        ],
        solution: 'a) Ja (SSS), b) Nei, c) Ja (SAS), d) Ja (ASA)',
        hints: ['Sjekk om noen av kongruenskriteriene SSS, SAS eller ASA er oppfylt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST OM FORMLIKHET ==========
    {
      id: '1t-5-2-formlikhet-intro',
      type: 'text',
      content: `## Formlikhet

To figurer er **formlike** når de har samme form, men ikke nødvendigvis samme størrelse. Den ene figuren er en forstørret eller forminsket versjon av den andre.

Formlike figurer har:
- Like store vinkler
- Samsvarende sider med samme forhold (forholdstall)`,
    },

    // ========== DEFINISJON: FORMLIKHET ==========
    {
      id: '1t-5-2-def-formlikhet',
      type: 'definition',
      title: 'Formlike trekanter',
      content: `To trekanter er formlike hvis de oppfyller ett av følgende kriterier:

**AA (vinkel-vinkel):** To vinkler er parvis like store.

**SSS (forhold):** Alle tre sidene har samme forholdstall.

**SAS (forhold):** To sider har samme forholdstall og vinkelen mellom dem er lik.

Forholdstallet mellom samsvarende sider kalles **skaleringsfaktoren** eller **forstørrelsesfaktoren**.`,
    },

    // ========== FIGUR: FORMLIKE TREKANTER ==========
    {
      id: '1t-5-2-img-formlikhet',
      type: 'image',
      src: '/images/geometry/formlike-trekanter.svg',
      alt: 'To formlike trekanter med forstørrelsesfaktor 2, med like vinkler markert',
      caption: 'Formlike trekanter har samme form, men forskjellig størrelse',
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '1t-5-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Trekant ABC har sidene 3 cm, 4 cm og 5 cm.
Trekant DEF har sidene 6 cm, 8 cm og 10 cm.
Er trekantene formlike? Finn i så fall forstørrelsesfaktoren.`,
      solution: `**Løsning:**

Vi sjekker forholdene mellom samsvarende sider:
- $\\frac{6}{3} = 2$
- $\\frac{8}{4} = 2$
- $\\frac{10}{5} = 2$

Alle forholdene er like, så trekantene er formlike.

**Forstørrelsesfaktoren er 2.**

Trekant DEF er dobbelt så stor som trekant ABC.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '1t-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om trekantene er formlike og finn forstørrelsesfaktoren',
        subTasks: [
          { label: 'a', task: 'Trekant 1: sider 2, 3, 4. Trekant 2: sider 4, 6, 8.', solution: 'Ja, faktor 2' },
          { label: 'b', task: 'Trekant 1: sider 5, 10, 15. Trekant 2: sider 1, 2, 3.', solution: 'Ja, faktor $\\frac{1}{5}$' },
          { label: 'c', task: 'Trekant 1: sider 3, 4, 5. Trekant 2: sider 6, 7, 10.', solution: 'Nei' },
          { label: 'd', task: 'Trekant 1: sider 6, 9, 12. Trekant 2: sider 2, 3, 4.', solution: 'Ja, faktor $\\frac{1}{3}$' },
        ],
        solution: 'a) Ja, faktor 2; b) Ja, faktor 1/5; c) Nei; d) Ja, faktor 1/3',
        hints: ['Divider samsvarende sider og sjekk om forholdene er like'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '1t-5-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `To trekanter er formlike med forstørrelsesfaktor 3.
Den lille trekanten har sider 4 cm, 5 cm og 7 cm.
Finn sidene i den store trekanten.`,
      solution: `**Løsning:**

Vi multipliserer alle sidene med forstørrelsesfaktoren 3:
- $4 \\cdot 3 = 12$ cm
- $5 \\cdot 3 = 15$ cm
- $7 \\cdot 3 = 21$ cm

**Svar:** Den store trekanten har sider 12 cm, 15 cm og 21 cm.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '1t-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn de ukjente sidene i den formlike trekanten',
        subTasks: [
          { label: 'a', task: 'Liten trekant: 3, 4, 5. Forstørrelsesfaktor: 4', solution: '12, 16, 20' },
          { label: 'b', task: 'Stor trekant: 15, 20, 25. Forminskingsfaktor: $\\frac{1}{5}$', solution: '3, 4, 5' },
          { label: 'c', task: 'Liten trekant: 2, 3, 4. Forstørrelsesfaktor: 2,5', solution: '5, 7.5, 10' },
        ],
        solution: 'a) 12, 16, 20; b) 3, 4, 5; c) 5, 7.5, 10',
        hints: ['Multipliser alle sidene med forstørrelsesfaktoren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST OM MÅLESTOKK ==========
    {
      id: '1t-5-2-malestokk-intro',
      type: 'text',
      content: `## Målestokk

**Målestokk** er forholdet mellom en avstand på en tegning/kart og den virkelige avstanden.

$$\\text{Målestokk} = \\frac{\\text{Avstand på kart}}{\\text{Virkelig avstand}}$$

For eksempel betyr målestokk **1:100** at 1 cm på tegningen tilsvarer 100 cm (1 m) i virkeligheten.`,
    },

    // ========== FIGUR: MÅLESTOKK ==========
    {
      id: '1t-5-2-img-malestokk',
      type: 'image',
      src: '/images/geometry/malestokk-eksempel.svg',
      alt: 'Illustrasjon av målestokk 1:100 som viser at 5 cm på tegningen tilsvarer 5 m i virkeligheten',
      caption: 'Målestokk 1:100 - tegningen er 100 ganger mindre enn virkeligheten',
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '1t-5-2-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Et kart har målestokk 1:50 000.
Avstanden mellom to byer er 8 cm på kartet.
Hvor lang er den virkelige avstanden?`,
      solution: `**Løsning:**

Målestokk 1:50 000 betyr at 1 cm på kartet = 50 000 cm i virkeligheten.

Virkelig avstand = Avstand på kart × 50 000
$= 8 \\cdot 50 000$ cm
$= 400 000$ cm
$= 4000$ m
$= 4$ km

**Svar:** Den virkelige avstanden er 4 km.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '1t-5-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut med målestokk',
        subTasks: [
          { label: 'a', task: 'Målestokk 1:100. 5 cm på tegning. Finn virkelig lengde.', solution: '5 m' },
          { label: 'b', task: 'Målestokk 1:25 000. 6 cm på kart. Finn virkelig avstand.', solution: '1,5 km' },
          { label: 'c', task: 'Målestokk 1:500. Virkelig lengde 30 m. Finn lengde på tegning.', solution: '6 cm' },
          { label: 'd', task: 'Målestokk 1:200. Et rom er 8 cm × 5 cm på tegningen. Finn virkelig størrelse.', solution: '16 m × 10 m' },
        ],
        solution: 'a) 5 m, b) 1,5 km, c) 6 cm, d) 16 m × 10 m',
        hints: ['Målestokk 1:n betyr at 1 enhet på tegning = n enheter i virkeligheten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '1t-5-2-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: `To formlike trekanter har en ukjent side. Den lille trekanten har sider 3 cm, 4 cm og $x$ cm.
Den store trekanten har sider 9 cm, 12 cm og 18 cm. Finn $x$.`,
      solution: `**Løsning:**

Først finner vi forstørrelsesfaktoren ved å sammenligne kjente sider:
$\\frac{9}{3} = 3$ og $\\frac{12}{4} = 3$

Faktoren er 3, så:
$x \\cdot 3 = 18$
$x = 6$ cm

**Svar:** $x = 6$ cm`,
    },

    // ========== OPPGAVE 5-10 ==========
    {
      id: '1t-5-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den ukjente siden i de formlike trekantene',
        subTasks: [
          { label: 'a', task: 'Trekant 1: 2, 3, x. Trekant 2: 8, 12, 16.', solution: '$x = 4$' },
          { label: 'b', task: 'Trekant 1: 5, x, 10. Trekant 2: 15, 21, 30.', solution: '$x = 7$' },
          { label: 'c', task: 'Trekant 1: x, 6, 8. Trekant 2: 12, 18, 24.', solution: '$x = 4$' },
        ],
        solution: 'a) $x = 4$, b) $x = 7$, c) $x = 4$',
        hints: ['Finn først forstørrelsesfaktoren fra de kjente sidene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-5-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bestem målestokken',
        subTasks: [
          { label: 'a', task: 'En modell av et hus er 20 cm høy. Huset er 10 m høyt.', solution: '1:50' },
          { label: 'b', task: 'Avstanden mellom to byer er 5 cm på kartet og 25 km i virkeligheten.', solution: '1:500 000' },
          { label: 'c', task: 'En plantegning viser et rom som 4 cm × 3 cm. Rommet er 8 m × 6 m.', solution: '1:200' },
        ],
        solution: 'a) 1:50, b) 1:500 000, c) 1:200',
        hints: ['Målestokk = Tegning / Virkelighet (med samme enhet)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-5-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Areal ved formlikhet',
        subTasks: [
          { label: 'a', task: 'To formlike trekanter har forstørrelsesfaktor 3. Den lille har areal 4 cm². Finn arealet til den store.', solution: '$36$ cm²' },
          { label: 'b', task: 'To formlike rektangler. Det lille er 2 cm × 3 cm. Det store er 6 cm × 9 cm. Sammenlign arealene.', solution: 'Stort areal er 9 ganger større' },
        ],
        solution: 'a) 36 cm², b) 9 ganger større (forstørrelsesfaktor² = 3² = 9)',
        hints: ['Arealforholdet = forstørrelsesfaktor²'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-5-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktiske oppgaver med formlikhet',
        subTasks: [
          { label: 'a', task: 'Et tre kaster en skygge på 12 m. Samtidig kaster en 2 m høy stolpe en skygge på 3 m. Hvor høyt er treet?', solution: '8 m' },
          { label: 'b', task: 'Et foto er 10 cm × 15 cm. Det skal forstørres slik at den lange siden blir 45 cm. Hvor lang blir den korte siden?', solution: '30 cm' },
        ],
        solution: 'a) 8 m, b) 30 cm',
        hints: ['Bruk formlikhet mellom skyggene og høydene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-5-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bevis at trekantene er formlike og finn ukjente mål',
        subTasks: [
          { label: 'a', task: 'Trekant ABC har vinkler 30°, 60°, 90°. Trekant DEF har vinkler 30°, 60°, 90°. Begrunn at de er formlike.', solution: 'AA-kriteriet: to vinkler er like' },
          { label: 'b', task: 'I oppgave a), hvis AB = 4 og DE = 12, hva er forstørrelsesfaktoren?', solution: '3' },
        ],
        solution: 'a) AA-kriteriet, b) Forstørrelsesfaktor = 3',
        hints: ['To trekanter med to like vinkler er alltid formlike'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-5-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver',
        subTasks: [
          { label: 'a', task: 'En arkitekt tegner et hus i målestokk 1:50. Taket på tegningen har sider 6 cm, 6 cm og 8 cm. Hva er de virkelige målene?', solution: '3 m, 3 m, 4 m' },
          { label: 'b', task: 'To formlike trekanter. Den ene har omkrets 24 cm, den andre 36 cm. Hva er forstørrelsesfaktoren?', solution: '1,5' },
        ],
        solution: 'a) 3 m, 3 m, 4 m; b) 1,5',
        hints: ['Omkretsen øker med samme faktor som sidene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_3_1: TextbookChapter = {
  id: '1t-3-1',
  courseId: '1t',
  chapterNumber: '3.1',
  title: 'Koordinatsystemet',
  description: 'Introduksjon til koordinatsystemet, punkter, akser og å tolke grafer.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forstå og bruke koordinatsystemet',
    'markere og lese av punkter i koordinatsystemet',
    'tolke og lese informasjon fra grafer',
  ],
  content: [
    // ========== KOORDINATSYSTEMET ==========
    {
      id: '1t-3-1-intro',
      type: 'text',
      content: `## Koordinatsystemet

Et **koordinatsystem** er et system for å beskrive posisjoner i et plan ved hjelp av tall.

- Den horisontale (vannrette) aksen kalles **$x$-aksen** eller **førsteaksen**
- Den vertikale (loddrette) aksen kalles **$y$-aksen** eller **andreaksen**
- Punktet der aksene krysser hverandre kalles **origo** og har koordinatene $(0, 0)$

Et punkt i koordinatsystemet skrives som $(x, y)$ der $x$ er avstanden langs $x$-aksen og $y$ er avstanden langs $y$-aksen.`,
    },

    // Illustrasjon: Koordinatsystem intro
    {
      id: '1t-3-1-koordinatsystem-bilde',
      type: 'image',
      src: '/images/functions/koordinatsystem-intro.svg',
      alt: 'Koordinatsystem med x-akse, y-akse og origo markert',
      caption: 'Koordinatsystemet med aksene og origo',
    },

    // GeoGebra: Koordinatsystem med punkt
    {
      id: '1t-3-1-geogebra-intro',
      type: 'geogebra',
      title: 'Koordinatsystemet',
      description: 'Et koordinatsystem med punktet $(-2, 4)$ markert. Den blå stiplede linjen viser $x = -2$ og den grønne viser $y = 4$.',
      appType: 'graphing',
      commands: [
        'A = (-2, 4)',
        'SetCaption(A, "(-2, 4)")',
        'SetLabelMode(A, 1)',
        'l1: x = -2',
        'l2: y = 4',
        'SetColor(l1, "Blue")',
        'SetColor(l2, "Green")',
        'SetLineStyle(l1, 2)',
        'SetLineStyle(l2, 2)',
      ],
    },

    {
      id: '1t-3-1-text-linjer',
      type: 'text',
      content: `### Vertikale og horisontale linjer

- Linjen $x = -2$ (blå i figuren over) markerer alle punkter der $x$-verdien er $-2$
- Linjen $y = 4$ (grønn i figuren) markerer alle punkter der $y$-verdien er $4$
- Punktet $(-2, 4)$ er skjæringspunktet mellom disse linjene`,
    },

    // Eksempel 1
    {
      id: '1t-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `a) Tegn et koordinatsystem med $x$- og $y$-verdier fra $-5$ til $5$.

b) Marker punktene $(2, 5)$, $(-1, 3)$, $(-3, -1)$ og $(0, -2)$

c) Tegn linjen $x = 2$ (alle punkter som har $2$ som $x$-verdi)

d) Tegn linjen $y = -1$ (alle punkter som har $-1$ som $y$-verdi)`,
      solution: `**Løsning:**

a) Vi tegner et koordinatsystem med $x$-verdier fra $-5$ til $5$ og $y$-verdier fra $-5$ til $5$.

b) Vi markerer hvert punkt ved å gå langs $x$-aksen til riktig $x$-verdi, og deretter opp eller ned til riktig $y$-verdi:
   - $(2, 5)$: Gå til $x = 2$, deretter opp til $y = 5$
   - $(-1, 3)$: Gå til $x = -1$, deretter opp til $y = 3$
   - $(-3, -1)$: Gå til $x = -3$, deretter ned til $y = -1$
   - $(0, -2)$: Bli på $x = 0$ (y-aksen), gå ned til $y = -2$

c) Linjen $x = 2$ er en vertikal (loddrett) linje som går gjennom alle punkter der $x = 2$.

d) Linjen $y = -1$ er en horisontal (vannrett) linje som går gjennom alle punkter der $y = -1$.`,
    },

    // GeoGebra for eksempel 1
    {
      id: '1t-3-1-geogebra-ex1',
      type: 'geogebra',
      title: 'Eksempel 1: Punkter og linjer',
      description: 'Koordinatsystem med punktene og linjene fra eksempel 1.',
      appType: 'graphing',
      commands: [
        'A = (2, 5)',
        'B = (-1, 3)',
        'C = (-3, -1)',
        'D = (0, -2)',
        'SetCaption(A, "(2, 5)")',
        'SetCaption(B, "(-1, 3)")',
        'SetCaption(C, "(-3, -1)")',
        'SetCaption(D, "(0, -2)")',
        'l1: x = 2',
        'l2: y = -1',
        'SetColor(l1, "Red")',
        'SetColor(l2, "Blue")',
        'SetLineStyle(l1, 2)',
        'SetLineStyle(l2, 2)',
      ],
    },

    // Oppgave 1-1
    {
      id: '1t-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tegn et koordinatsystem fra $-5$ til $5$ på $x$- og $y$-aksen.',
        subTasks: [
          { label: 'a', task: 'Marker punktene $(1, 4)$, $(2, -3)$, $(-4, 1)$ og $(0, 5)$', solution: 'Punktene markeres ved å gå langs x-aksen til riktig x-verdi, deretter opp/ned til y-verdien.' },
          { label: 'b', task: 'Tegn linjen $x = -3$ og linjen $y = 1$ inn i koordinatsystemet.', solution: '$x = -3$ er en vertikal linje gjennom $x = -3$. $y = 1$ er en horisontal linje gjennom $y = 1$.' },
          { label: 'c', task: 'Hvilket punkt skjærer linjene hverandre i?', solution: 'Linjene $x = -3$ og $y = 1$ skjærer hverandre i punktet $(-3, 1)$.' },
        ],
        solution: 'a) Se figur, b) Se figur, c) Skjæringspunkt: $(-3, 1)$',
        hints: ['Gå langs x-aksen først, deretter opp eller ned til y-verdien', 'Linjen x = a er alltid vertikal', 'Linjen y = b er alltid horisontal'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 1-2: Finn koordinater
    {
      id: '1t-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-3-1-ex-2',
        number: '2',
        type: 'interactive',
        difficulty: 'lett',
        task: 'Finn koordinatene til punktene A, B, C og D som er markert i koordinatsystemet.',
        tool: 'geogebra-graph',
        geogebraAppType: 'graphing',
        initialCommands: [
          'A = (1, 4)',
          'B = (-2, 3)',
          'C = (2, -2)',
          'D = (-1, 0)',
          'SetCaption(A, "A")',
          'SetCaption(B, "B")',
          'SetCaption(C, "C")',
          'SetCaption(D, "D")',
        ],
        subTasks: [
          { label: 'a', task: 'Punkt A', solution: '$A = (1, 4)$' },
          { label: 'b', task: 'Punkt B', solution: '$B = (-2, 3)$' },
          { label: 'c', task: 'Punkt C', solution: '$C = (2, -2)$' },
          { label: 'd', task: 'Punkt D', solution: '$D = (-1, 0)$' },
        ],
        solution: 'A = (1, 4), B = (-2, 3), C = (2, -2), D = (-1, 0)',
        hints: ['Les av x-verdien først (horisontalt)', 'Les deretter av y-verdien (vertikalt)'],
      },
    },

    // ========== Å TOLKE EN GRAF ==========
    {
      id: '1t-3-1-section-tolke',
      type: 'text',
      content: `## Å tolke en graf

En graf gir oss visuell informasjon om sammenhengen mellom to størrelser. Ved å lese av grafen kan vi finne verdier og svare på spørsmål.`,
    },

    // Eksempel 2: Taxitur
    {
      id: '1t-3-1-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Grafen under viser prisen for en taxitur avhengig av hvor lang taxituren er (i km).

a) Bruk grafen til å finne ut hvor mye du må betale for en 12 km lang tur.

b) Du har 400 kroner å bruke på taxi. Bruk grafen til å finne ut hvor langt du maksimalt kan reise for disse pengene.

c) Hva er startprisen til taxiselskapet? (Hvor mye står taksameteret på like etter du har startet taxituren?)`,
      solution: `**Løsning:**

a) Vi finner $x = 12$ km på $x$-aksen og går rett opp til grafen. Vi leser av at prisen er **240 kroner**.

b) Vi finner 400 kroner på $y$-aksen og går rett bort til høyre til vi treffer grafen. Vi leser av at $x$-verdien er 28. Du kan altså reise maksimalt **28 km** for 400 kroner.

c) Startprisen finner vi der $x = 0$ (altså 0 km kjørt). Vi leser av at grafen starter på $y = 120$. Startprisen er altså **120 kroner**.`,
    },

    // GeoGebra for taxitur
    {
      id: '1t-3-1-geogebra-taxi',
      type: 'geogebra',
      title: 'Taxitur: Pris avhengig av avstand',
      description: 'Grafen viser prisen for en taxitur basert på kjørt distanse.',
      appType: 'graphing',
      commands: [
        'f(x) = 10x + 120',
        'SetCaption(f, "Pris")',
        'SetAxisLabels(1, "avstand (km)", "pris (kr)")',
        'P1 = (12, f(12))',
        'P2 = (28, f(28))',
        'P3 = (0, f(0))',
        'SetCaption(P1, "12 km: 240 kr")',
        'SetCaption(P2, "28 km: 400 kr")',
        'SetCaption(P3, "Startpris: 120 kr")',
      ],
    },

    // Oppgave 2: Feriepenger
    {
      id: '1t-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-3-1-ex-3',
        number: '3',
        type: 'interactive',
        difficulty: 'medium',
        task: 'Grafen under viser hvor mye penger Gry har igjen på konto etter å ha vært $x$ antall dager på ferie.',
        tool: 'geogebra-graph',
        geogebraAppType: 'graphing',
        initialCommands: [
          'g(x) = -1000x + 8000',
          'SetCaption(g, "Kroner på konto")',
        ],
        subTasks: [
          { label: 'a', task: 'Hvor mye hadde hun igjen etter å ha vært 2 dager på ferie?', solution: 'Vi finner $x = 2$ på grafen: $g(2) = -1000 \\cdot 2 + 8000 = 6000$ kr' },
          { label: 'b', task: 'Hvor mange dager hadde hun vært på ferie da hun hadde 2000 kroner igjen?', solution: 'Vi finner $y = 2000$ på grafen: $-1000x + 8000 = 2000 \\Rightarrow x = 6$ dager' },
          { label: 'c', task: 'Hvor mye hadde hun da hun dro på ferie?', solution: 'Ved $x = 0$: $g(0) = 8000$ kr' },
        ],
        solution: 'a) 6000 kr, b) 6 dager, c) 8000 kr',
        hints: ['Finn verdien på x-aksen først, gå deretter opp/ned til grafen', 'For å finne x når du kjenner y: finn y-verdien på y-aksen og gå bort til grafen'],
      },
    },

    // Tips om grafavlesning
    {
      id: '1t-3-1-tip-avlesning',
      type: 'tip',
      content: `**Tips for grafavlesning**

- **For å finne $y$ når du kjenner $x$:** Finn $x$-verdien på $x$-aksen, gå rett opp (eller ned) til du treffer grafen, les av $y$-verdien.

- **For å finne $x$ når du kjenner $y$:** Finn $y$-verdien på $y$-aksen, gå rett bort til du treffer grafen, les av $x$-verdien.

- **Startverdi:** Der grafen krysser $y$-aksen (altså når $x = 0$).`,
    },

    // Ekstra oppgave
    {
      id: '1t-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En graf viser temperaturen i grader Celsius utendørs i løpet av et døgn, der $x$ er antall timer etter midnatt.',
        subTasks: [
          { label: 'a', task: 'Hva forteller punktet $(6, 2)$ oss?', solution: 'Klokken 06:00 (6 timer etter midnatt) var temperaturen 2°C.' },
          { label: 'b', task: 'Hva forteller punktet $(14, 18)$ oss?', solution: 'Klokken 14:00 (14 timer etter midnatt) var temperaturen 18°C.' },
          { label: 'c', task: 'Hvis vi vet at temperaturen ved midnatt var 5°C, hvilket punkt representerer dette?', solution: 'Punktet $(0, 5)$ — ved $x = 0$ (midnatt) er $y = 5$°C.' },
        ],
        solution: 'a) Kl. 06:00: 2°C, b) Kl. 14:00: 18°C, c) (0, 5)',
        hints: ['x-verdien forteller oss tidspunktet (timer etter midnatt)', 'y-verdien forteller oss temperaturen'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_3_2: TextbookChapter = {
  id: '1t-3-2',
  courseId: '1t',
  chapterNumber: '3.2',
  title: 'Lineære funksjoner',
  description: 'Rette linjer, stigningstall, konstantledd og graftegning.',
  estimatedMinutes: 45,
  competenceGoals: [
    'sette inn verdier i uttrykk og funksjoner',
    'forstå sammenhengen mellom y = ax + b og grafen',
    'bestemme stigningstall og konstantledd fra en graf',
    'tegne lineære funksjoner',
  ],
  content: [
    // ========== ENKEL INNSETTING ==========
    {
      id: '1t-3-2-intro',
      type: 'text',
      content: `## Enkel innsetting

Når vi har et matematisk uttrykk, for eksempel $2x + 1$, så sier vi ofte at $x$ er en **variabel**. Det er fordi $x$ kan være mange forskjellige verdier (den varierer).

Du kan velge hvilket tall du vil erstatte $x$ med — dette kalles å **sette inn** en verdi for $x$.`,
    },

    // Eksempel 3
    {
      id: '1t-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Sett inn $x = 3$ i uttrykkene nedenfor og regn ut hvilken verdi du får.

a) $4x + 1$

b) $-2x + 4$`,
      solution: `**Løsning:**

a) Uttrykket er $4 \\cdot x + 1$. Vi skal sette inn $x = 3$, det vil si at vi erstatter $x$ med **3**:
$$4 \\cdot 3 + 1 = 12 + 1 = 13$$

b) Vi erstatter $x$ med **3** og regner ut:
$$-2x + 4 = -2 \\cdot 3 + 4 = -6 + 4 = -2$$`,
    },

    // Oppgave 3
    {
      id: '1t-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett inn $x = 2$ i uttrykkene nedenfor og regn ut hvilken verdi du får.',
        subTasks: [
          { label: 'a', task: '$x + 3$', solution: '$2 + 3 = 5$' },
          { label: 'b', task: '$3x - 1$', solution: '$3 \\cdot 2 - 1 = 6 - 1 = 5$' },
          { label: 'c', task: '$-4x + 10$', solution: '$-4 \\cdot 2 + 10 = -8 + 10 = 2$' },
        ],
        solution: 'a) 5, b) 5, c) 2',
        hints: ['Erstatt alle x-er med 2', 'Husk regnerekkefølgen: multiplikasjon før addisjon'],
      },
    },

    // ========== AVHENGIG OG UAVHENGIG VARIABEL ==========
    {
      id: '1t-3-2-section-avhengig',
      type: 'text',
      content: `## Avhengig og uavhengig variabel

Noen ganger er verdien til en variabel (ofte $y$) **avhengig** av verdien til en annen variabel (ofte $x$).

- $x$ kalles den **uavhengige variabelen** — den kan vi velge fritt
- $y$ kalles den **avhengige variabelen** — verdien bestemmes av $x$

**Eksempel:** I uttrykket $y = 2x - 3$ ser vi at:
- Når $x = 4$: $y = 2 \\cdot 4 - 3 = 8 - 3 = 5$
- Når $x = 1$: $y = 2 \\cdot 1 - 3 = 2 - 3 = -1$

Verdien til $y$ er altså avhengig av hva verdien til $x$ er.`,
    },

    // Eksempel 4
    {
      id: '1t-3-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Sett inn $x = -2$ i uttrykkene nedenfor og regn ut verdien til $y$.

a) $y = 2x - 1$

b) $y = -x + 4$`,
      solution: `**Løsning:**

a) Vi setter $-2$ inn for $x$ i uttrykket og regner ut:
$$y = 2 \\cdot x - 1 = 2 \\cdot (-2) - 1 = -4 - 1 = -5$$

b) Vi setter $-2$ inn for $x$ i uttrykket og regner ut:
$$y = -x + 4 = -(-2) + 4 = 2 + 4 = 6$$`,
    },

    // Oppgave 4
    {
      id: '1t-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett inn $x = -3$ i uttrykkene nedenfor og regn ut hvilken verdi $y$ får.',
        subTasks: [
          { label: 'a', task: '$y = x + 5$', solution: '$y = -3 + 5 = 2$' },
          { label: 'b', task: '$y = 2x - 1$', solution: '$y = 2 \\cdot (-3) - 1 = -6 - 1 = -7$' },
          { label: 'c', task: '$y = -4x + 1$', solution: '$y = -4 \\cdot (-3) + 1 = 12 + 1 = 13$' },
        ],
        solution: 'a) 2, b) −7, c) 13',
        hints: ['Pass på fortegn når du setter inn negative tall', 'Husk at $-4 \\cdot (-3) = 12$'],
      },
    },

    // ========== LINJER OG ENKEL INNSETTING ==========
    {
      id: '1t-3-2-section-linjer',
      type: 'text',
      content: `## Linjer og enkel innsetting

En linje i koordinatsystemet kan beskrives med en «regel» som $y = 2x$.

Alle punkter på linjen følger denne regelen:
- Når $x = 1$: $y = 2 \\cdot 1 = 2$ → punktet $(1, 2)$
- Når $x = 3$: $y = 2 \\cdot 3 = 6$ → punktet $(3, 6)$
- Når $x = -2$: $y = 2 \\cdot (-2) = -4$ → punktet $(-2, -4)$

For å tegne en linje kan vi:
1. Velge noen $x$-verdier (f.eks. 3 verdier spredt utover)
2. Beregne tilhørende $y$-verdier
3. Markere punktene i koordinatsystemet
4. Tegne en rett linje gjennom punktene`,
    },

    // GeoGebra: y = 2x
    {
      id: '1t-3-2-geogebra-linje',
      type: 'geogebra',
      title: 'Linjen $y = 2x$',
      description: 'Linjen $y = 2x$ med noen punkter markert.',
      appType: 'graphing',
      commands: [
        'f(x) = 2x',
        'A = (1, 2)',
        'B = (3, 6)',
        'C = (-2, -4)',
        'SetCaption(A, "(1, 2)")',
        'SetCaption(B, "(3, 6)")',
        'SetCaption(C, "(-2, -4)")',
      ],
    },

    // Eksempel 5
    {
      id: '1t-3-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Tegn linjen som følger «regelen» $y = 2x - 2$ i et koordinatsystem fra $x = -4$ til $x = 5$.`,
      solution: `**Løsning:**

Vi begynner med å finne 3 punkter som følger regelen $y = 2x - 2$.

Jeg velger $x = -3$, $x = 0$ og $x = 4$ (spredt utover).

**For $x = -3$:**
$$y = 2 \\cdot (-3) - 2 = -6 - 2 = -8$$
Første punkt: $(-3, -8)$

**For $x = 0$:**
$$y = 2 \\cdot 0 - 2 = 0 - 2 = -2$$
Andre punkt: $(0, -2)$

**For $x = 4$:**
$$y = 2 \\cdot 4 - 2 = 8 - 2 = 6$$
Tredje punkt: $(4, 6)$

Vi markerer punktene i koordinatsystemet og tegner en rett linje gjennom dem.`,
    },

    // GeoGebra for eksempel 5
    {
      id: '1t-3-2-geogebra-ex3',
      type: 'geogebra',
      title: 'Eksempel 3: $y = 2x - 2$',
      description: 'Linjen $y = 2x - 2$ med de beregnede punktene.',
      appType: 'graphing',
      commands: [
        'f(x) = 2x - 2',
        'A = (-3, -8)',
        'B = (0, -2)',
        'C = (4, 6)',
        'SetCaption(A, "(-3, -8)")',
        'SetCaption(B, "(0, -2)")',
        'SetCaption(C, "(4, 6)")',
      ],
    },

    // Tips om valg av x-verdier
    {
      id: '1t-3-2-tip-xverdier',
      type: 'tip',
      content: `**Tips: Valg av $x$-verdier**

Vi kan velge hvilke $x$-verdier vi vil, men for å tegne en best mulig linje er det lurt å velge $x$-verdier som er **spredt utover** koordinatsystemet.

God praksis:
- Velg én negativ verdi (f.eks. $x = -3$)
- Velg $x = 0$ (gir skjæringspunktet med $y$-aksen)
- Velg én positiv verdi (f.eks. $x = 4$)`,
    },

    // Oppgave 5
    {
      id: '1t-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn et koordinatsystem og bruk metoden i eksempelet ovenfor til å tegne grafene til:',
        subTasks: [
          { label: 'a', task: '$y = 2x + 1$', solution: 'Finn 3 punkter, f.eks. $(-2, -3)$, $(0, 1)$, $(2, 5)$, og tegn linjen.' },
          { label: 'b', task: '$y = x - 2$', solution: 'Finn 3 punkter, f.eks. $(-2, -4)$, $(0, -2)$, $(2, 0)$, og tegn linjen.' },
          { label: 'c', task: '$y = -2x + 3$', solution: 'Finn 3 punkter, f.eks. $(-1, 5)$, $(0, 3)$, $(2, -1)$, og tegn linjen.' },
        ],
        solution: 'Tegn punktene og forbind dem med en rett linje.',
        hints: ['Velg 3 x-verdier som er spredt', 'Bruk gjerne x = 0 som en av verdiene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== STIGNINGSTALL OG KONSTANTLEDD ==========
    {
      id: '1t-3-2-section-stigning',
      type: 'text',
      content: `## Stigningstall og konstantledd

Linjer i koordinatsystemet beskrives ofte på formen:

$$y = ax + b$$

Her kaller vi:
- $a$ for **stigningstallet**
- $b$ for **konstantleddet**

**Eksempel:** I linjen $y = 2x + 1$ er stigningstallet $a = 2$ og konstantleddet $b = 1$.`,
    },

    // Definisjon: Konstantledd
    {
      id: '1t-3-2-def-konstantledd',
      type: 'definition',
      title: 'Konstantleddet',
      content: `**Konstantleddet** $b$ forteller oss hvor linjen skjærer $y$-aksen.

Når grafen skjærer $y$-aksen er $x = 0$. Da får vi:
$$y = a \\cdot 0 + b = b$$

Skjæringspunktet med $y$-aksen er altså $(0, b)$.`,
    },

    // Definisjon: Stigningstallet
    {
      id: '1t-3-2-def-stigning',
      type: 'definition',
      title: 'Stigningstallet',
      content: `**Stigningstallet** $a$ beskriver hvor mye $y$-verdien øker (eller minker) når $x$-verdien øker med 1.

- Hvis $a > 0$: Linjen stiger (går oppover mot høyre)
- Hvis $a < 0$: Linjen synker (går nedover mot høyre)
- Hvis $a = 0$: Linjen er horisontal`,
    },

    // Illustrasjon: Stigningstall
    {
      id: '1t-3-2-stigningstall-bilde',
      type: 'image',
      src: '/images/functions/stigningstall.svg',
      alt: 'Visualisering av stigningstall: hvor mye y oker når x oker med 1',
      caption: 'Stigningstallet viser hvor bratt linjen er',
    },

    // Illustrasjon: Lineær funksjon
    {
      id: '1t-3-2-lineaer-bilde',
      type: 'image',
      src: '/images/functions/lineaer-funksjon.svg',
      alt: 'Graf av en lineær funksjon y = ax + b',
      caption: 'En lineær funksjon med stigningstall a og konstantledd b',
    },

    // GeoGebra: y = 2x + 1 med stigningstall
    {
      id: '1t-3-2-geogebra-stigning',
      type: 'geogebra',
      title: 'Stigningstall og konstantledd',
      description: 'Linjen $y = 2x + 1$ med stigningstall $a = 2$ og konstantledd $b = 1$.',
      appType: 'graphing',
      commands: [
        'f(x) = 2x + 1',
        'B = (0, 1)',
        'SetCaption(B, "Konstantledd b = 1")',
        'P1 = (0, 1)',
        'P2 = (1, 3)',
        'Segment(P1, (1, 1))',
        'Segment((1, 1), P2)',
      ],
    },

    {
      id: '1t-3-2-text-stigning-forklaring',
      type: 'text',
      content: `### Hvordan lese av stigningstallet fra grafen

For linjen $y = 2x + 1$:
- Start i et punkt på linjen, f.eks. $(0, 1)$
- Gå 1 enhet til høyre (langs $x$-aksen)
- Se hvor mye du må gå opp/ned for å treffe linjen igjen

I dette tilfellet må vi gå **2 opp** → stigningstallet er $a = 2$.

Bruker vi uttrykket $y = 2x + 1$ ser vi at dersom $x$ øker med 1, så øker $y$ med 2:
- $x = 0$: $y = 2 \\cdot 0 + 1 = 1$
- $x = 1$: $y = 2 \\cdot 1 + 1 = 3$ (økning på 2)`,
    },

    // Eksempel 6
    {
      id: '1t-3-2-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Tegn grafen til linjen $y = -3x + 4$

Her er stigningstallet $a = -3$ og konstantleddet $b = 4$.`,
      solution: `**Løsning:**

**Skritt 1:** Tegn koordinatsystemet og marker et punkt med konstantleddet på $y$-aksen.

I dette tilfellet er konstantleddet $b = 4$, så vi markerer punktet $(0, 4)$.

**Skritt 2:** Beveg deg 1 til høyre og opp/ned stigningstallet.

Stigningstallet er $a = -3$, så vi beveger oss **1 til høyre** og **3 ned**. Vi får punktet $(1, 1)$.

**Skritt 3:** Ta frem en linjal og tegn linjen som går gjennom de 2 punktene.

Du har nå tegnet linjen $y = -3x + 4$.`,
    },

    // GeoGebra for eksempel 6
    {
      id: '1t-3-2-geogebra-ex4',
      type: 'geogebra',
      title: 'Eksempel 4: $y = -3x + 4$',
      description: 'Linjen $y = -3x + 4$ tegnet ved hjelp av konstantledd og stigningstall.',
      appType: 'graphing',
      commands: [
        'f(x) = -3x + 4',
        'A = (0, 4)',
        'B = (1, 1)',
        'SetCaption(A, "Konstantledd (0, 4)")',
        'SetCaption(B, "(1, 1)")',
        'Segment(A, (1, 4))',
        'Segment((1, 4), B)',
      ],
    },

    // Oppgave 6-1
    {
      id: '1t-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn et koordinatsystem og bruk metoden i eksempelet ovenfor til å tegne grafene til:',
        subTasks: [
          { label: 'a', task: '$y = 3x + 1$', solution: 'Konstantledd $b = 1$, stigningstall $a = 3$. Start i $(0, 1)$, gå 1 til høyre og 3 opp til $(1, 4)$.' },
          { label: 'b', task: '$y = x - 2$', solution: 'Konstantledd $b = -2$, stigningstall $a = 1$. Start i $(0, -2)$, gå 1 til høyre og 1 opp til $(1, -1)$.' },
          { label: 'c', task: '$y = -x + 1$', solution: 'Konstantledd $b = 1$, stigningstall $a = -1$. Start i $(0, 1)$, gå 1 til høyre og 1 ned til $(1, 0)$.' },
        ],
        solution: 'Marker konstantleddet på y-aksen, bruk stigningstallet for å finne neste punkt, tegn linjen.',
        hints: ['Marker først konstantleddet på y-aksen', 'Gå 1 til høyre, deretter opp/ned etter stigningstallet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6-2: Finn a og b fra graf
    {
      id: '1t-3-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-ex-5',
        number: '5',
        type: 'interactive',
        difficulty: 'medium',
        task: 'Se på grafene og bestem konstantleddet $b$ og stigningstallet $a$. Skriv deretter funksjonsuttrykket $y = ax + b$.',
        tool: 'geogebra-graph',
        geogebraAppType: 'graphing',
        initialCommands: [
          'f(x) = 2x - 3',
          'SetColor(f, "Blue")',
          'SetCaption(f, "Graf 1")',
        ],
        subTasks: [
          { label: 'a', task: 'Graf 1 (blå)', solution: 'Skjærer $y$-aksen i $(0, -3)$ så $b = -3$. Stigningstall: $a = 2$. Svar: $y = 2x - 3$' },
        ],
        solution: 'Graf 1: $y = 2x - 3$',
        hints: ['Finn først hvor grafen skjærer y-aksen (det er b)', 'Gå 1 til høyre fra et punkt på linjen og se hvor mye du går opp/ned (det er a)'],
      },
    },

    // Ekstra oppgave med flere grafer
    {
      id: '1t-3-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-ex-6',
        number: '6',
        type: 'interactive',
        difficulty: 'medium',
        task: 'Bestem stigningstall $a$ og konstantledd $b$ for hver av grafene under. Skriv funksjonsuttrykket $y = ax + b$.',
        tool: 'geogebra-graph',
        geogebraAppType: 'graphing',
        initialCommands: [
          'f(x) = x + 2',
          'g(x) = -2x + 4',
          'h(x) = 0.5x - 1',
          'SetColor(f, "Blue")',
          'SetColor(g, "Red")',
          'SetColor(h, "Green")',
          'SetCaption(f, "f (blå)")',
          'SetCaption(g, "g (rød)")',
          'SetCaption(h, "h (grønn)")',
        ],
        subTasks: [
          { label: 'a', task: 'Blå graf $f$', solution: '$b = 2$, $a = 1$. Svar: $y = x + 2$' },
          { label: 'b', task: 'Rød graf $g$', solution: '$b = 4$, $a = -2$. Svar: $y = -2x + 4$' },
          { label: 'c', task: 'Grønn graf $h$', solution: '$b = -1$, $a = 0{,}5$. Svar: $y = 0{,}5x - 1$' },
        ],
        solution: 'a) $y = x + 2$, b) $y = -2x + 4$, c) $y = 0{,}5x - 1$',
        hints: ['Les av hvor hver graf skjærer y-aksen', 'Tell hvor mye y endrer seg når x øker med 1'],
      },
    },

    // Oppsummering
    {
      id: '1t-3-2-summary',
      type: 'text',
      content: `## Oppsummering

For en lineær funksjon $y = ax + b$:

| Begrep | Betydning | Hvordan finne fra graf |
|--------|-----------|----------------------|
| **Konstantledd** $b$ | Skjæring med $y$-aksen | Les av $y$-verdien der linjen krysser $y$-aksen |
| **Stigningstall** $a$ | Hvor mye $y$ endres når $x$ øker med 1 | Gå 1 til høyre, tell opp/ned til linjen |

**Huskeregel:**
- $a > 0$: Linjen stiger (oppover mot høyre)
- $a < 0$: Linjen synker (nedover mot høyre)
- $a = 0$: Horisontal linje`,
    },

    // Blandede oppgaver
    {
      id: '1t-3-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver om lineære funksjoner.',
        subTasks: [
          { label: 'a', task: 'Hva er stigningstallet og konstantleddet til $y = 5x - 2$?', solution: 'Stigningstall $a = 5$, konstantledd $b = -2$' },
          { label: 'b', task: 'Hva er stigningstallet og konstantleddet til $y = -x + 7$?', solution: 'Stigningstall $a = -1$, konstantledd $b = 7$' },
          { label: 'c', task: 'En linje har stigningstall 3 og konstantledd $-4$. Skriv funksjonsuttrykket.', solution: '$y = 3x - 4$' },
          { label: 'd', task: 'En linje går gjennom $(0, 5)$ og $(1, 2)$. Finn stigningstallet og skriv funksjonsuttrykket.', solution: 'Stigningstall: $a = 2 - 5 = -3$. Konstantledd: $b = 5$. Svar: $y = -3x + 5$' },
        ],
        solution: 'a) $a = 5$, $b = -2$, b) $a = -1$, $b = 7$, c) $y = 3x - 4$, d) $y = -3x + 5$',
        hints: ['I $y = ax + b$ er $a$ tallet foran $x$', 'Konstantleddet er tallet som står alene'],
      },
    },

    // Ekstra utfordring
    {
      id: '1t-3-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver.',
        subTasks: [
          { label: 'a', task: 'En linje går gjennom punktene $(2, 7)$ og $(4, 13)$. Finn stigningstallet.', solution: 'Stigningstall $a = \\frac{13 - 7}{4 - 2} = \\frac{6}{2} = 3$' },
          { label: 'b', task: 'Bruk svaret fra a) til å finne konstantleddet. (Hint: Sett inn et av punktene)', solution: '$7 = 3 \\cdot 2 + b \\Rightarrow 7 = 6 + b \\Rightarrow b = 1$' },
          { label: 'c', task: 'Skriv funksjonsuttrykket for linjen.', solution: '$y = 3x + 1$' },
        ],
        solution: 'a) $a = 3$, b) $b = 1$, c) $y = 3x + 1$',
        hints: ['Stigningstallet er endring i y delt på endring i x', 'Sett inn et kjent punkt for å finne b'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_3_3_FUNKSJON: TextbookChapter = {
  id: '1t-3-3',
  courseId: '1t',
  chapterNumber: '3.3',
  title: 'Hva er en funksjon?',
  description: 'Lær om matematiske modeller, funksjonsnotasjon, verditabeller og graftegning.',
  estimatedMinutes: 60,
  competenceGoals: [
    'sette opp og bruke matematiske modeller',
    'forstå og bruke funksjonsnotasjon f(x)',
    'lage verditabeller og tegne grafer',
    'finne nullpunkter til funksjoner',
    'finne skjæringspunkter mellom funksjoner',
  ],
  content: [
    // ========== MATEMATISKE MODELLER ==========
    {
      id: '1t-3-3-intro',
      type: 'text',
      content: `## Å erstatte x med et tall (Matematiske modeller)

Noen ganger har vi matematiske uttrykk som inneholder en ukjent (for eksempel en $x$). Et enkelt eksempel kan være dersom vi ønsker å beskrive en inntekt. Kari tjener 200 kroner per time hun jobber. I løpet av en dag jobber hun $x$ (altså et ukjent antall) timer.

Hvor mye tjener hun? Hun vil altså tjene $200 \\cdot x$ kroner der $x$ er antallet timer hun jobber.

Dersom vi finner ut at hun mandag jobber 6 timer så kan vi nå enkelt erstatte $x$ i formelen vår med 6. Vi får nå $200\\text{ kr} \\cdot 6 = 1200\\text{ kr}$.

Vi har nå brukt den matematiske modellen $200x$ (som beskriver inntekten til Kari) til å finne ut hvor mye Kari vil tjene etter 6 timer. Legg her spesielt merke til at matematiske modeller ofte er mer kompliserte og at det enkle eksempelet kun er for illustrasjonsformål.`,
    },

    // Eksempel 1
    {
      id: '1t-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Vi har uttrykket $x^2 + 4x$

Hvilken verdi vil uttrykket få dersom:
a) $x = 3$
b) $x = -2$`,
      solution: `**Løsning:**

a) Vi erstatter x-ene i uttrykket $x^2 + 4x$ med **3** og får dermed:
$$3^2 + 4 \\cdot 3 = 9 + 12 = 21$$

b) Vi erstatter x-ene i uttrykket $x^2 + 4x$ med **−2** og får dermed:
$$(-2)^2 + 4 \\cdot (-2) = 4 - 8 = -4$$`,
    },

    // Oppgave 1-1
    {
      id: '1t-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Vi har uttrykket $x^2 - 2x + 3$. Hvilken verdi vil uttrykket ha dersom:',
        subTasks: [
          { label: 'a', task: '$x = 2$', solution: '$2^2 - 2 \\cdot 2 + 3 = 4 - 4 + 3 = 3$' },
          { label: 'b', task: '$x = -1$', solution: '$(-1)^2 - 2 \\cdot (-1) + 3 = 1 + 2 + 3 = 6$' },
          { label: 'c', task: '$x = 0$', solution: '$0^2 - 2 \\cdot 0 + 3 = 0 - 0 + 3 = 3$' },
        ],
        solution: 'a) 3, b) 6, c) 3',
        hints: ['Husk å erstatte alle x-er med verdien', 'Pass på fortegn når du setter inn negative tall'],
      },
    },

    // Oppgave 1-2
    {
      id: '1t-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Vi har uttrykket $2x^2 - 5x - 2$. Hvilken verdi vil uttrykket ha dersom:',
        subTasks: [
          { label: 'a', task: '$x = 4$', solution: '$2 \\cdot 4^2 - 5 \\cdot 4 - 2 = 32 - 20 - 2 = 10$' },
          { label: 'b', task: '$x = -3$', solution: '$2 \\cdot (-3)^2 - 5 \\cdot (-3) - 2 = 18 + 15 - 2 = 31$' },
          { label: 'c', task: '$x = 0$', solution: '$2 \\cdot 0^2 - 5 \\cdot 0 - 2 = -2$' },
        ],
        solution: 'a) 10, b) 31, c) −2',
        hints: ['Husk at $(-3)^2 = 9$, ikke $-9$'],
      },
    },

    // ========== EGNE MATEMATISKE MODELLER ==========
    {
      id: '1t-3-3-section-modeller',
      type: 'text',
      content: `## Egne matematiske modeller

Noen ganger ønsker vi å kunne sette opp egne matematiske modeller for å beskrive ting som skjer i virkeligheten. Vi vil da la $x$ representere en tilfeldig variabel som for eksempel et antall enheter eller et antall minutter eller timer.`,
    },

    // Eksempel 2
    {
      id: '1t-3-3-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Axel skal ut på en lang joggetur, han jogger i 8 km/time jevnt igjennom hele turen.

a) Hvor langt har han kommet etter:
   1) 2 timer
   2) 5 timer

b) Sett opp et uttrykk med $x$ som ukjent som beskriver hvor langt han har kommet etter $x$ timer. (En matematisk modell)`,
      solution: `**Løsning:**

a) 1) Han har kommet $8 \\text{ km/time} \\cdot 2 \\text{ time(r)} = 16 \\text{ km}$
   2) Han har kommet $8 \\text{ km/time} \\cdot 5 \\text{ time(r)} = 40 \\text{ km}$

b) Han har kommet $8 \\text{ km/time} \\cdot x \\text{ time} = 8x \\text{ km}$ eller bare $8x$.`,
    },

    // Eksempel 3
    {
      id: '1t-3-3-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Per har 20 000 kroner stående på konto og tjener og sparer 1 000 kroner hver arbeidsdag.

a) Hvor mye har han på konto etter 15 arbeidsdager? Etter 20?
b) Sett opp et uttrykk som beskriver hvor mye Per har på konto.`,
      solution: `**Løsning:**

a) Etter 15 arbeidsdager har han:
$$1000 \\text{ kr} \\cdot 15 + 20000 \\text{ kr} = 15000 \\text{ kr} + 20000 \\text{ kr} = 35000 \\text{ kr}$$

Etter 20 arbeidsdager har han:
$$1000 \\text{ kr} \\cdot 20 + 20000 \\text{ kr} = 20000 \\text{ kr} + 20000 \\text{ kr} = 40000 \\text{ kr}$$

b) $1000 \\text{ kr} \\cdot x + 20000 \\text{ kr}$ eller bare $1000x + 20000$`,
    },

    // Oppgave 3
    {
      id: '1t-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Line selger pølser på en fotballkamp til 30 kroner per stykk.',
        subTasks: [
          { label: 'a', task: 'Hvor mye har Line i inntekt dersom hun selger:\n1) 10 pølser\n2) 20 pølser', solution: '1) $30 \\cdot 10 = 300$ kr\n2) $30 \\cdot 20 = 600$ kr' },
          { label: 'b', task: 'Sett opp en matematisk modell som beskriver inntekten til Line.', solution: '$I(x) = 30x$ der $x$ er antall pølser solgt' },
        ],
        solution: 'a) 1) 300 kr, 2) 600 kr, b) I(x) = 30x',
        hints: ['Inntekt = pris per enhet × antall enheter'],
      },
    },

    // ========== f(x) - FUNKSJONSNOTASJON ==========
    {
      id: '1t-3-3-section-funksjon',
      type: 'text',
      content: `## $f(x)$ - Matematiske funksjoner

Vi har nå lært hvordan vi kan lage og bruke matematiske modeller (/uttrykk) som beskriver enkle hendelser. Vi hørte om Kari som tjente 200 kroner per time hun jobbet. Vi fant ut at da vil hun tjene $200 \\cdot x$ kroner avhengig av $x$ altså antall timer hun jobber.

Vi ønsker nå å lage en **funksjon** ved hjelp av dette uttrykket. Det er egentlig ikke så vanskelig (men det kan se veldig komplisert ut om du ikke er vant med skrivemåten). Det vi prøver å beskrive er en inntekt som er avhengig av antall timer hun jobber, bokstavene vi bruker i funksjonen blir derfor $I$ (for inntekt) og $t$ (for tid).

Vi skriver funksjonsuttrykket $I(t)$ altså inntekten avhengig av antall timer $t$ hun har jobbet. Vi får da:
$$I(t) = 200t$$

Inntekten Kari får når hun jobber i 5 timer blir:
$$I(5) = 200 \\cdot 5 = 1000$$

Om hun jobber i 7 timer vil hun få:
$$I(7) = 200 \\cdot 7 = 1400$$`,
    },

    {
      id: '1t-3-3-def-funksjon',
      type: 'definition',
      title: 'Funksjon',
      content: `En **funksjon** er en regel som til hver verdi av den uavhengige variabelen (ofte $x$) gir nøyaktig én verdi av den avhengige variabelen (ofte $y$ eller $f(x)$).

Notasjonen $f(x)$ betyr "funksjonen $f$ evaluert ved verdien $x$".`,
    },

    // Eksempel 4
    {
      id: '1t-3-3-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Finn $f(3)$ og $f(-2)$ når:
a) $f(x) = 3x + 1$
b) $f(x) = x^2 - 3x$`,
      solution: `**Løsning:**

**a) $f(x) = 3x + 1$**

Vi begynner med å finne $f(3)$ — vi erstatter altså $x$ i $f(x)$ med **3**.
$$f(3) = 3 \\cdot 3 + 1 = 9 + 1 = 10$$

Når vi skal finne $f(-2)$ erstatter vi $x$ i funksjonen ovenfor med **−2**:
$$f(-2) = 3 \\cdot (-2) + 1 = -6 + 1 = -5$$

**b) $f(x) = x^2 - 3x$**

Vi finner først $f(3)$:
$$f(3) = 3^2 - 3 \\cdot 3 = 9 - 9 = 0$$

Så finner vi $f(-2)$:
$$f(-2) = (-2)^2 - 3 \\cdot (-2) = 4 + 6 = 10$$`,
    },

    // Oppgave 4
    {
      id: '1t-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Mohammed skal selge is. For hver is han selger har han tjent 10 kroner (etter å ha trukket fra utgifter ved innkjøp av isen). Han leier også en fryser til 200 kroner per dag.',
        subTasks: [
          { label: 'a', task: 'Hvor mye får Mohammed i overskudd dersom han en dag selger:\n1) 30 is\n2) 100 is', solution: '1) $10 \\cdot 30 - 200 = 300 - 200 = 100$ kr\n2) $10 \\cdot 100 - 200 = 1000 - 200 = 800$ kr' },
          { label: 'b', task: 'Sett opp en matematisk modell (en formel) som beskriver inntekten til Mohammed.', solution: '$O(x) = 10x - 200$ der $x$ er antall is solgt' },
        ],
        solution: 'a) 1) 100 kr, 2) 800 kr, b) O(x) = 10x − 200',
        hints: ['Overskudd = inntekt - utgifter', 'Utgiften til fryseren er fast (200 kr)'],
      },
    },

    // Oppgave 5
    {
      id: '1t-3-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn $f(-2)$ når:',
        subTasks: [
          { label: 'a', task: '$f(x) = 4x + 1$', solution: '$f(-2) = 4 \\cdot (-2) + 1 = -8 + 1 = -7$' },
          { label: 'b', task: '$f(x) = x^2 + x$', solution: '$f(-2) = (-2)^2 + (-2) = 4 - 2 = 2$' },
          { label: 'c', task: '$f(x) = -3x^2$', solution: '$f(-2) = -3 \\cdot (-2)^2 = -3 \\cdot 4 = -12$' },
        ],
        solution: 'a) −7, b) 2, c) −12',
        hints: ['Husk at $(-2)^2 = 4$'],
      },
    },

    // ========== VERDITABELLER ==========
    {
      id: '1t-3-3-section-verditabell',
      type: 'text',
      content: `## Verditabeller

En **verditabell** er en tabell som viser sammenhengen mellom $x$-verdier og tilhørende funksjonsverdier $f(x)$. Verditabeller er nyttige når vi skal tegne grafen til en funksjon.`,
    },

    // Eksempel 5
    {
      id: '1t-3-3-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: `La $f(x) = -2x^2 + 3$.

Finn $f(-2)$, $f(-1)$, $f(0)$, $f(1)$ og $f(2)$.

Bruk svarene til å sette opp en verditabell.`,
      solution: `**Løsning:**

$f(x) = -2x^2 + 3$

$f(-2) = -2 \\cdot (-2)^2 + 3 = -2 \\cdot 4 + 3 = -8 + 3 = -5$
$f(-1) = -2 \\cdot (-1)^2 + 3 = -2 \\cdot 1 + 3 = -2 + 3 = 1$
$f(0) = -2 \\cdot 0^2 + 3 = -2 \\cdot 0 + 3 = 0 + 3 = 3$
$f(1) = -2 \\cdot 1^2 + 3 = -2 \\cdot 1 + 3 = -2 + 3 = 1$
$f(2) = -2 \\cdot 2^2 + 3 = -2 \\cdot 4 + 3 = -8 + 3 = -5$

**Verditabell:**

| $x$ | $f(x)$ | Punkt $(x, f(x))$ |
|-----|--------|-------------------|
| −2 | −5 | (−2, −5) |
| −1 | 1 | (−1, 1) |
| 0 | 3 | (0, 3) |
| 1 | 1 | (1, 1) |
| 2 | −5 | (2, −5) |`,
    },

    // Oppgave 6
    {
      id: '1t-3-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut $f(-2)$, $f(-1)$, $f(0)$, $f(1)$ og $f(2)$ og sett opp en verditabell som i eksempelet over.\n\n**NB:** Du skal bruke verditabellene du lager i denne oppgaven i en senere oppgave.',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x - 3$', solution: 'Verditabell: (−2, −7), (−1, −5), (0, −3), (1, −1), (2, 1)' },
          { label: 'b', task: '$f(x) = x^2 - 4$', solution: 'Verditabell: (−2, 0), (−1, −3), (0, −4), (1, −3), (2, 0)' },
          { label: 'c', task: '$f(x) = -2x^2 + 3x - 1$', solution: 'Verditabell: (−2, −15), (−1, −6), (0, −1), (1, 0), (2, −3)' },
        ],
        solution: 'Se deloppgavene for verditabeller',
        hints: ['Sett inn hver x-verdi i funksjonsuttrykket', 'Husk å følge regnerekkefølgen'],
      },
    },

    // ========== GRAFTEGNING ==========
    {
      id: '1t-3-3-section-graftegning',
      type: 'text',
      content: `## Å tegne egne grafer

I eksempelet under viser vi hvordan du kan tegne din egen graf ved å finne punkter og plotte dem i et koordinatsystem.`,
    },

    // Eksempel 6 med graf
    {
      id: '1t-3-3-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: `Tegn grafen til funksjonen $f(x) = -2x^2 + 3$.`,
      solution: `**Løsning:**

Vi har verditabellen fra forrige eksempel:

| $x$ | $f(x)$ | Punkt $(x, f(x))$ |
|-----|--------|-------------------|
| −2 | −5 | (−2, −5) |
| −1 | 1 | (−1, 1) |
| 0 | 3 | (0, 3) |
| 1 | 1 | (1, 1) |
| 2 | −5 | (2, −5) |

Vi kan bruke punktene i denne verditabellen og tegne dem inn i et koordinatsystem. Vi tegner deretter en krummet linje igjennom punktene vi får.`,
    },

    // GeoGebra for grafen f(x) = -2x² + 3
    {
      id: '1t-3-3-geogebra-1',
      type: 'geogebra',
      title: 'Graf: $f(x) = -2x^2 + 3$',
      description: 'Grafen til funksjonen $f(x) = -2x^2 + 3$ med de beregnede punktene.',
      appType: 'graphing',
      commands: [
        'f(x) = -2x^2 + 3',
        'A = (-2, f(-2))',
        'B = (-1, f(-1))',
        'C = (0, f(0))',
        'D = (1, f(1))',
        'E = (2, f(2))',
      ],
    },

    // Oppgave 7
    {
      id: '1t-3-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk verditabellene fra forrige oppgave for å tegne grafene til funksjonene under (for hånd). Grafen skal tegnes for x-verdier fra −3 til 3. Om du mangler noen punkter for å få en fin graf, finn disse punktene ved regning.',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x - 3$', solution: 'Rett linje som går gjennom (0, −3) med stigningstall 2' },
          { label: 'b', task: '$f(x) = x^2 - 4$', solution: 'Parabel med bunnpunkt i (0, −4) og nullpunkter i x = −2 og x = 2' },
          { label: 'c', task: '$f(x) = -2x^2 + 3x - 1$', solution: 'Parabel som åpner nedover' },
        ],
        solution: 'Tegn punktene fra verditabellen og forbind dem med en linje/kurve',
        hints: ['For lineære funksjoner holder det med 2-3 punkter', 'For andregradsfunksjoner trenger du flere punkter for å få en fin kurve'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 7
    {
      id: '1t-3-3-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: `Tegn grafen til funksjonen $f(x) = 2x + 3$ og $g(x) = x^2 + x - 3$ i samme koordinatsystem. Tegn det for x-verdier mellom −5 og 5.`,
      solution: `**Løsning:**

For en lineær funksjon så er det egentlig kun nødvendig å regne ut to punkter, det sagt om vi skal tegne den inn selv så er det kjekt å ha med et ekstra punkt for godt mål.

**For $f(x) = 2x + 3$:**

| $x$ | $f(x)$ | Punkt |
|-----|--------|-------|
| −5 | $2 \\cdot (-5) + 3 = -7$ | (−5, −7) |
| 0 | $2 \\cdot 0 + 3 = 3$ | (0, 3) |
| 5 | $2 \\cdot 5 + 3 = 13$ | (5, 13) |

**For $g(x) = x^2 + x - 3$:**

| $x$ | $g(x)$ | Punkt |
|-----|--------|-------|
| −5 | $(-5)^2 + (-5) - 3 = 17$ | (−5, 17) |
| −3 | $(-3)^2 + (-3) - 3 = 3$ | (−3, 3) |
| −1 | $(-1)^2 + (-1) - 3 = -3$ | (−1, −3) |
| 0 | $0^2 + 0 - 3 = -3$ | (0, −3) |
| 1 | $1^2 + 1 - 3 = -1$ | (1, −1) |
| 3 | $3^2 + 3 - 3 = 9$ | (3, 9) |
| 5 | $5^2 + 5 - 3 = 27$ | (5, 27) |`,
    },

    // GeoGebra for eksempel 7
    {
      id: '1t-3-3-geogebra-2',
      type: 'geogebra',
      title: 'To funksjoner i samme koordinatsystem',
      description: 'Grafene til $f(x) = 2x + 3$ og $g(x) = x^2 + x - 3$.',
      appType: 'graphing',
      commands: [
        'f(x) = 2x + 3',
        'g(x) = x^2 + x - 3',
      ],
    },

    // Tips om valg av x og y verdier
    {
      id: '1t-3-3-tip-verdier',
      type: 'tip',
      content: `**Å velge egne x-verdier og y-verdier når du tegner koordinatsystem**

**x-verdier:** Når du skal velge verdier for $x$ så er det ønskelig at du velger punkter som er representative for grafen:
1. I og nært $x = 0$
2. I og nært nullpunktene til funksjonen (der funksjonsverdien er lik 0)
3. I og nært funksjonens maksimums- og minimumsverdier
4. Der tekstoppgaver gir logiske antagelser (f.eks. kun positive verdier for antall solgte varer)

**y-verdier:** Regn først ut den høyeste og laveste verdien til funksjonen for x-verdiene du har med i din verditabell. Koordinatsystemet bør minst inkludere disse verdiene.`,
    },

    // Oppgave 8
    {
      id: '1t-3-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn grafene til funksjonene under for x-verdier fra −4 til 4.',
        subTasks: [
          { label: 'a', task: '$f(x) = -x + 3$', solution: 'Rett linje med stigningstall −1 og y-skjæring i (0, 3)' },
          { label: 'b', task: '$f(x) = x^2 - x - 12$', solution: 'Parabel med nullpunkter i x = −3 og x = 4' },
          { label: 'c', task: '$f(x) = x^2 + x - 6$', solution: 'Parabel med nullpunkter i x = −3 og x = 2' },
        ],
        solution: 'Lag verditabeller og tegn grafene',
        hints: ['Start med å lage en verditabell for hver funksjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NULLPUNKTER ==========
    {
      id: '1t-3-3-section-nullpunkt',
      type: 'text',
      content: `## Å finne nullpunktene til en funksjon

**Nullpunktene** til en funksjon har vi der grafen til funksjonen skjærer x-aksen. Når grafen skjærer x-aksen vet vi at funksjonsverdien er lik 0. Vi finner nullpunktene til en funksjon $f(x)$ ved å sette $f(x) = 0$ og løse likningen.`,
    },

    {
      id: '1t-3-3-def-nullpunkt',
      type: 'definition',
      title: 'Nullpunkt',
      content: `Et **nullpunkt** til en funksjon $f$ er en x-verdi der $f(x) = 0$.

Grafisk er dette punktene der grafen krysser x-aksen.`,
    },

    // Eksempel 9
    {
      id: '1t-3-3-example-9',
      type: 'example',
      title: 'Eksempel 9',
      problem: `La $f(x) = 3x - 12$.

Finn nullpunktet til funksjonen.`,
      solution: `**Løsning:**

Vi setter $f(x) = 0$ og løser likningen.

$$f(x) = 0$$
$$3x - 12 = 0 \\quad | + 12$$
$$3x = 12 \\quad | \\div 3$$
$$x = 4$$

Funksjonen har altså nullpunkt i $(4, 0)$.

**Merk:** Når vi finner nullpunkt oppgir vi ofte kun x-verdiene som svar. Altså $x = 4$.`,
    },

    // GeoGebra for nullpunkt
    {
      id: '1t-3-3-geogebra-3',
      type: 'geogebra',
      title: 'Nullpunkt for lineær funksjon',
      description: 'Grafen til $f(x) = 3x - 12$ med nullpunktet markert.',
      appType: 'graphing',
      commands: [
        'f(x) = 3x - 12',
        'N = Root(f)',
        'SetCaption(N, "Nullpunkt")',
      ],
    },

    // Oppgave 9
    {
      id: '1t-3-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Per tjener 200 kroner per time han jobber. Han jobber x timer i løpet av en sommer. På forhånd har han 4000 kroner i banken.',
        subTasks: [
          { label: 'a', task: 'Sett opp en funksjon $P(x)$ som forteller hvor mye penger Per har etter å ha jobbet i x timer.', solution: '$P(x) = 200x + 4000$' },
          { label: 'b', task: 'Tegn grafen til funksjonen.', solution: 'Rett linje som starter i (0, 4000) med stigningstall 200' },
        ],
        solution: 'a) P(x) = 200x + 4000, b) Se graf',
        hints: ['Han starter med 4000 kr, så det er konstantleddet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: '1t-3-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn nullpunktene til funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x - 8$', solution: '$2x - 8 = 0 \\Rightarrow x = 4$' },
          { label: 'b', task: '$f(x) = x - 4$', solution: '$x - 4 = 0 \\Rightarrow x = 4$' },
          { label: 'c', task: '$f(x) = 3x - 4$', solution: '$3x - 4 = 0 \\Rightarrow x = \\frac{4}{3}$' },
        ],
        solution: 'a) x = 4, b) x = 4, c) x = 4/3',
        hints: ['Sett f(x) = 0 og løs likningen'],
      },
    },

    // Eksempel 10 - nullpunkter for andregradsfunksjon
    {
      id: '1t-3-3-example-10',
      type: 'example',
      title: 'Eksempel 10',
      problem: `La $f(x) = 2x^2 - 4x$.

Finn nullpunktene til funksjonen.`,
      solution: `**Løsning:**

Vi setter $f(x) = 0$ og løser likningen.

$$f(x) = 0$$
$$2x^2 - 4x = 0$$
$$2x \\cdot (x - 2) = 0$$

Vi bruker produktregelen og ser at:
$$2x = 0 \\quad \\vee \\quad x - 2 = 0$$
$$x = 0 \\quad \\vee \\quad x = 2$$

Funksjonen har altså nullpunkt der $x = 0$ og der $x = 2$, altså i $(0, 0)$ og i $(2, 0)$.`,
    },

    // GeoGebra for nullpunkter andregradsfunksjon
    {
      id: '1t-3-3-geogebra-4',
      type: 'geogebra',
      title: 'Nullpunkter for andregradsfunksjon',
      description: 'Grafen til $f(x) = 2x^2 - 4x$ med nullpunktene markert.',
      appType: 'graphing',
      commands: [
        'f(x) = 2x^2 - 4x',
        'N1 = Root(f, -1, 1)',
        'N2 = Root(f, 1, 3)',
        'SetCaption(N1, "Nullpunkt₁")',
        'SetCaption(N2, "Nullpunkt₂")',
      ],
    },

    // Oppgave 11
    {
      id: '1t-3-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nullpunktene til funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 9$', solution: '$x^2 - 9 = 0 \\Rightarrow x^2 = 9 \\Rightarrow x = \\pm 3$' },
          { label: 'b', task: '$f(x) = x^2 + 5x + 6$', solution: '$(x + 2)(x + 3) = 0 \\Rightarrow x = -2 \\vee x = -3$' },
          { label: 'c', task: '$f(x) = 2x^2 - 6x + 4$', solution: '$2(x - 1)(x - 2) = 0 \\Rightarrow x = 1 \\vee x = 2$' },
        ],
        solution: 'a) x = −3 og x = 3, b) x = −2 og x = −3, c) x = 1 og x = 2',
        hints: ['Prøv å faktorisere uttrykket', 'Du kan også bruke abc-formelen'],
      },
    },

    // ========== SKJÆRINGSPUNKTER ==========
    {
      id: '1t-3-3-section-skjaering',
      type: 'text',
      content: `## Å finne der to funksjoner skjærer hverandre

Når to grafer skjærer hverandre, har funksjonene samme funksjonsverdi for den x-verdien. For å finne skjæringspunktene setter vi funksjonene lik hverandre og løser for $x$.`,
    },

    // GeoGebra for skjæringspunkter
    {
      id: '1t-3-3-geogebra-5',
      type: 'geogebra',
      title: 'Skjæringspunkter mellom to funksjoner',
      description: 'Grafene til $f(x) = x^2 - 1$ og $g(x) = x + 1$ skjærer hverandre i punktene A og B.',
      appType: 'graphing',
      commands: [
        'f(x) = x^2 - 1',
        'g(x) = x + 1',
        'A = Intersect(f, g, -2, 0)',
        'B = Intersect(f, g, 0, 3)',
      ],
    },

    {
      id: '1t-3-3-text-skjaering',
      type: 'text',
      content: `Over ser vi grafene til funksjonene $f(x) = x^2 - 1$ og $g(x) = x + 1$. Vi ser de skjærer hverandre i punktene $A = (-1, 0)$ og $B = (2, 3)$. Vi skal nå gå igjennom hvordan vi kunne funnet disse skjæringspunktene for hånd.

Vi ønsker altså å finne ut hvilke x-verdier som gjør at y-verdiene til funksjonene er like. Vi kan løse denne problemstillingen ved å sette funksjonene lik hverandre og løse for $x$.

$$f(x) = g(x)$$
$$x^2 - 1 = x + 1$$
$$x^2 - x - 2 = 0$$

Vi løser likningen over (for eksempel med abc-formelen eller sum og produktregelen):
$$(x - 2)(x + 1) = 0$$
$$x_1 = 2 \\quad \\vee \\quad x_2 = -1$$

Ettersom funksjonene er like hverandre når $x = -1$ og når $x = 2$ så vil vi ha at grafene til funksjonene også skjærer hverandre når $x = -1$ og $x = 2$.

Videre kan vi bli bedt om å finne koordinatene til de faktiske skjæringspunktene. Vi har allerede x-koordinatene. Når vi skal finne y-koordinatene i punktene så bruker vi x-koordinatene samt enten $f(x)$ eller $g(x)$ for å finne dem. Vi velger selvsagt den enkleste funksjonen:

$$g(-1) = -1 + 1 = 0$$
$$g(2) = 2 + 1 = 3$$

Vi får da punktene $(-1, 0)$ og $(2, 3)$.`,
    },

    // Eksempel 11
    {
      id: '1t-3-3-example-11',
      type: 'example',
      title: 'Eksempel 11',
      problem: `La $f(x) = -x^2 + 4$ og $g(x) = -5x + 10$.

Finn skjæringspunktene til $f$ og $g$.
a) Ved å tegne grafene og lese av punktene.
b) Ved regning.`,
      solution: `**Løsning:**

**a) Grafisk løsning:**
Se GeoGebra-applet under for å se grafene og skjæringspunktene.

**b) Ved regning:**
Vi setter $f(x) = g(x)$:
$$-x^2 + 4 = -5x + 10$$
$$-x^2 + 5x + 4 - 10 = 0$$
$$-x^2 + 5x - 6 = 0$$
$$x^2 - 5x + 6 = 0$$
$$(x - 2)(x - 3) = 0$$
$$x = 2 \\quad \\vee \\quad x = 3$$

Vi finner y-koordinatene ved å sette inn i $g(x)$:
$$g(2) = -5 \\cdot 2 + 10 = 0$$
$$g(3) = -5 \\cdot 3 + 10 = -5$$

Skjæringspunktene er $(2, 0)$ og $(3, -5)$.`,
    },

    // GeoGebra for eksempel 11
    {
      id: '1t-3-3-geogebra-6',
      type: 'geogebra',
      title: 'Skjæringspunkter: $f(x) = -x^2 + 4$ og $g(x) = -5x + 10$',
      appType: 'graphing',
      commands: [
        'f(x) = -x^2 + 4',
        'g(x) = -5x + 10',
        'A = Intersect(f, g)',
      ],
    },

    // Oppgave 12
    {
      id: '1t-3-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn x-verdiene der grafene skjærer hverandre, og bruk disse til å finne koordinatene til skjæringspunktene.',
        subTasks: [
          { label: '1)', task: '$f(x) = x - 3$ og $g(x) = -2x + 3$', solution: '$x - 3 = -2x + 3 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. Punkt: $(2, -1)$' },
          { label: '2)', task: '$f(x) = x^2 - 4$ og $g(x) = -5x - 8$', solution: '$x^2 - 4 = -5x - 8 \\Rightarrow x^2 + 5x + 4 = 0 \\Rightarrow x = -1 \\vee x = -4$. Punkter: $(-1, -3)$ og $(-4, 12)$' },
          { label: '3)', task: '$f(x) = -x^2 + x - 1$ og $g(x) = -2x^2 + 2x + 11$', solution: '$-x^2 + x - 1 = -2x^2 + 2x + 11 \\Rightarrow x^2 - x - 12 = 0 \\Rightarrow x = 4 \\vee x = -3$. Punkter: $(4, -13)$ og $(-3, -13)$' },
        ],
        solution: '1) (2, −1), 2) (−1, −3) og (−4, 12), 3) (4, −13) og (−3, −13)',
        hints: ['Sett f(x) = g(x) og løs likningen', 'Bruk den enkleste funksjonen for å finne y-koordinatene'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_3_4: TextbookChapter = {
  id: '1t-3-4',
  courseId: '1t',
  chapterNumber: '3.4',
  title: 'Andregradsfunksjoner',
  description: 'Parabeler, toppunkt/bunnpunkt og symmetrilinje.',
  estimatedMinutes: 40,
  competenceGoals: ['forstå og analysere andregradsfunksjoner'],
  content: [
    {
      id: '1t-3-4-intro',
      type: 'text',
      content: `En **andregradsfunksjon** er en funksjon på formen $f(x) = ax^2 + bx + c$ der $a \\neq 0$.

Grafen til en andregradsfunksjon kalles en **parabel**.

I dette kapitlet lærer du:
- Hvordan parabeler ser ut
- Å finne toppunkt eller bunnpunkt
- Å finne symmetrilinje
- Å tegne parabeler`,
    },

    // Illustrasjon: Andregradsfunksjon
    {
      id: '1t-3-4-andregradsfunksjon-bilde',
      type: 'image',
      src: '/images/functions/andregradsfunksjon.svg',
      alt: 'Graf av en andregradsfunksjon (parabel) med toppunkt/bunnpunkt markert',
      caption: 'En andregradsfunksjon - parabelen viser topp- eller bunnpunkt',
    },

    // Illustrasjon: Diskriminanten
    {
      id: '1t-3-4-diskriminant-bilde',
      type: 'image',
      src: '/images/functions/diskriminanten.svg',
      alt: 'Diskriminanten bestemmer antall nullpunkter for en andregradsfunksjon',
      caption: 'Diskriminanten avgjor om parabelen har 0, 1 eller 2 nullpunkter',
    },

    {
      id: '1t-3-4-def-andregrads',
      type: 'definition',
      title: 'Andregradsfunksjon',
      content: `En **andregradsfunksjon** har formen:
$$f(x) = ax^2 + bx + c$$

der $a$, $b$ og $c$ er konstanter og $a \\neq 0$.

- $a$ kalles **ledende koeffisient**
- $b$ er koeffisienten foran $x$
- $c$ er konstantleddet (og $y$-koordinaten til skjæringspunktet med $y$-aksen)`,
    },
    {
      id: '1t-3-4-text-parabel',
      type: 'text',
      content: `## Parabelens form

Fortegnet til $a$ bestemmer om parabelen er **smilende** eller **sur**:

- **$a > 0$:** Parabelen åpner oppover (har bunnpunkt)
- **$a < 0$:** Parabelen åpner nedover (har toppunkt)

Jo større $|a|$ er, desto **smalere** er parabelen.
Jo mindre $|a|$ er, desto **bredere** er parabelen.`,
    },
    {
      id: '1t-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Beskriv grafen til $f(x) = 2x^2 - 4x + 1$.',
      solution: `Vi har $a = 2$, $b = -4$ og $c = 1$.

**Form:** Siden $a = 2 > 0$, åpner parabelen oppover (har bunnpunkt).

**Skjæring med y-aksen:** $f(0) = 1$, så grafen skjærer $y$-aksen i $(0, 1)$.

**Parabelen er relativt smal** fordi $|a| = 2 > 1$.`,
    },
    {
      id: '1t-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om funksjonene har toppunkt eller bunnpunkt, og om parabelen er smal eller bred:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 + 2x - 3$', solution: 'Bunnpunkt ($a = 1 > 0$), normal bredde' },
          { label: 'b', task: '$g(x) = -3x^2 + 6x$', solution: 'Toppunkt ($a = -3 < 0$), smal' },
          { label: 'c', task: '$h(x) = -\\frac{1}{2}x^2 - 4x + 5$', solution: 'Toppunkt ($a = -\\frac{1}{2} < 0$), bred' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-4-theorem-symmetri',
      type: 'theorem',
      title: 'Symmetrilinje og toppunkt/bunnpunkt',
      content: `For andregradsfunksjonen $f(x) = ax^2 + bx + c$ gjelder:

**Symmetrilinje:** $x = -\\frac{b}{2a}$

**Toppunkt/bunnpunkt:** $\\left(-\\frac{b}{2a}, f\\left(-\\frac{b}{2a}\\right)\\right)$

Parabelen er symmetrisk om den vertikale linjen $x = -\\frac{b}{2a}$.`,
    },
    {
      id: '1t-3-4-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Finn symmetrilinje og bunnpunkt for $f(x) = x^2 - 6x + 5$.',
      solution: `Vi har $a = 1$, $b = -6$ og $c = 5$.

**Symmetrilinje:**
$$x = -\\frac{b}{2a} = -\\frac{-6}{2 \\cdot 1} = \\frac{6}{2} = 3$$

**Bunnpunktets x-koordinat:** $x = 3$

**Bunnpunktets y-koordinat:**
$$f(3) = 3^2 - 6 \\cdot 3 + 5 = 9 - 18 + 5 = -4$$

**Bunnpunkt:** $(3, -4)$

Siden $a = 1 > 0$, har funksjonen bunnpunkt (ikke toppunkt).`,
    },
    {
      id: '1t-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn symmetrilinje og bunnpunkt for funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 8x + 12$', solution: 'Symmetrilinje: $x = 4$. Bunnpunkt: $(4, -4)$' },
          { label: 'b', task: '$g(x) = x^2 + 4x + 1$', solution: 'Symmetrilinje: $x = -2$. Bunnpunkt: $(-2, -3)$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-4-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Finn toppunkt for $f(x) = -2x^2 + 8x - 3$.',
      solution: `Vi har $a = -2$, $b = 8$ og $c = -3$.

Siden $a = -2 < 0$, har funksjonen et toppunkt.

**Symmetrilinje:**
$$x = -\\frac{b}{2a} = -\\frac{8}{2 \\cdot (-2)} = -\\frac{8}{-4} = 2$$

**Toppunktets y-koordinat:**
$$f(2) = -2 \\cdot 2^2 + 8 \\cdot 2 - 3 = -8 + 16 - 3 = 5$$

**Toppunkt:** $(2, 5)$`,
    },
    {
      id: '1t-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn toppunkt eller bunnpunkt for funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = -x^2 + 2x + 8$', solution: 'Toppunkt: $(1, 9)$' },
          { label: 'b', task: '$g(x) = 2x^2 - 8x + 5$', solution: 'Bunnpunkt: $(2, -3)$' },
          { label: 'c', task: '$h(x) = -3x^2 - 6x + 1$', solution: 'Toppunkt: $(-1, 4)$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-4-text-fullstendig',
      type: 'text',
      content: `## Fullstendig kvadrats metode

Vi kan skrive $f(x) = ax^2 + bx + c$ på **toppunktform**:

$$f(x) = a(x - h)^2 + k$$

der $(h, k)$ er toppunktet/bunnpunktet.

For å finne denne formen bruker vi **fullstendig kvadrats metode**.`,
    },
    {
      id: '1t-3-4-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Skriv $f(x) = x^2 - 4x + 7$ på toppunktform.',
      solution: `**Steg 1:** Grupper $x$-leddene:
$$f(x) = (x^2 - 4x) + 7$$

**Steg 2:** Fullfør kvadratet. Ta halvparten av koeffisienten foran $x$ og kvadrer:
$\\left(\\frac{-4}{2}\\right)^2 = (-2)^2 = 4$

**Steg 3:** Legg til og trekk fra dette tallet:
$$f(x) = (x^2 - 4x + 4) - 4 + 7$$
$$f(x) = (x - 2)^2 + 3$$

**Toppunktform:** $f(x) = (x - 2)^2 + 3$

**Bunnpunkt:** $(2, 3)$`,
    },
    {
      id: '1t-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv funksjonene på toppunktform $f(x) = a(x - h)^2 + k$:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 + 6x + 5$', solution: '$f(x) = (x + 3)^2 - 4$' },
          { label: 'b', task: '$g(x) = x^2 - 2x - 8$', solution: '$g(x) = (x - 1)^2 - 9$' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Bruk fullstendig kvadrats metode'],
      },
    },
    {
      id: '1t-3-4-note-tegne',
      type: 'note',
      content: `**Å tegne en parabel**

1. Finn fortegnet til $a$ (åpner opp eller ned?)
2. Finn skjæring med $y$-aksen: $(0, c)$
3. Finn symmetrilinje: $x = -\\frac{b}{2a}$
4. Finn toppunkt/bunnpunkt
5. Finn eventuelle nullpunkter (skjæring med $x$-aksen)
6. Tegn en jevn kurve gjennom punktene`,
    },
    {
      id: '1t-3-4-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'En ball kastes opp fra bakken. Høyden etter $t$ sekunder er $h(t) = -5t^2 + 20t$ meter. Finn når ballen er på sitt høyeste og hvor høyt den når.',
      solution: `Vi har $a = -5$, $b = 20$ og $c = 0$.

Siden $a < 0$, har funksjonen et toppunkt (maksimum).

**Tid for maksimal høyde:**
$$t = -\\frac{b}{2a} = -\\frac{20}{2 \\cdot (-5)} = -\\frac{20}{-10} = 2$$

**Maksimal høyde:**
$$h(2) = -5 \\cdot 2^2 + 20 \\cdot 2 = -20 + 40 = 20$$

**Svar:** Ballen når sin maksimale høyde på 20 meter etter 2 sekunder.`,
    },
    {
      id: '1t-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-3-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En rakett skytes opp. Høyden etter $t$ sekunder er $h(t) = -4t^2 + 32t + 5$ meter. Finn når raketten er på sitt høyeste og hvor høyt den når.',
        solution: '$t = -\\frac{32}{-8} = 4$ sek. $h(4) = -64 + 128 + 5 = 69$ m. Raketten når 69 meter etter 4 sekunder.',
        hints: ['Finn toppunktet til andregradsfunksjonen'],
      },
    },
    {
      id: '1t-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-3-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn den største verdien av $f(x) = -2x^2 + 12x - 10$ og ved hvilken $x$-verdi den oppnås.',
        solution: '$x = -\\frac{12}{-4} = 3$. $f(3) = -18 + 36 - 10 = 8$. Største verdi er 8 når $x = 3$.',
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_3_5: TextbookChapter = {
  id: '1t-3-5',
  courseId: '1t',
  chapterNumber: '3.5',
  title: 'Nullpunkter og fortegn',
  description: 'Finn nullpunktene til andregradsfunksjoner og bestem fortegnet.',
  estimatedMinutes: 35,
  competenceGoals: ['finne nullpunkter til andregradsfunksjoner', 'analysere fortegn'],
  content: [
    {
      id: '1t-3-5-intro',
      type: 'text',
      content: `**Nullpunktene** til en funksjon er $x$-verdiene der $f(x) = 0$. For andregradsfunksjoner finner vi nullpunktene ved å løse andregradslikningen $ax^2 + bx + c = 0$.

I dette kapitlet lærer du:
- Å finne nullpunkter ved faktorisering
- Å bruke abc-formelen
- Å analysere fortegnet til en andregradsfunksjon`,
    },
    {
      id: '1t-3-5-text-faktorisering',
      type: 'text',
      content: `## Faktorisering

Hvis vi kan faktorisere uttrykket $ax^2 + bx + c$, kan vi finne nullpunktene direkte.

**Metode:** Finn to tall som:
- Ganget gir $a \\cdot c$
- Addert gir $b$`,
    },
    {
      id: '1t-3-5-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Finn nullpunktene til $f(x) = x^2 - 5x + 6$ ved faktorisering.',
      solution: `Vi leter etter to tall som ganget gir 6 og addert gir $-5$.

$(-2) \\cdot (-3) = 6$ og $(-2) + (-3) = -5$ ✓

$$f(x) = (x - 2)(x - 3)$$

Nullpunkter: $f(x) = 0$ når $(x-2)(x-3) = 0$

**Nullpunkter:** $x = 2$ og $x = 3$`,
    },
    {
      id: '1t-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-3-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn nullpunktene ved faktorisering:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 7x + 12$', solution: '$x = 3$ og $x = 4$' },
          { label: 'b', task: '$g(x) = x^2 + 2x - 15$', solution: '$x = -5$ og $x = 3$' },
          { label: 'c', task: '$h(x) = x^2 - 9$', solution: '$x = -3$ og $x = 3$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-5-theorem-abc',
      type: 'theorem',
      title: 'Abc-formelen',
      content: `Løsningene til $ax^2 + bx + c = 0$ er:
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Diskriminanten** $D = b^2 - 4ac$ bestemmer antall løsninger:
- $D > 0$: To ulike nullpunkter
- $D = 0$: Ett nullpunkt (dobbeltrot)
- $D < 0$: Ingen nullpunkter`,
    },
    {
      id: '1t-3-5-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Finn nullpunktene til $f(x) = 2x^2 + 4x - 6$ med abc-formelen.',
      solution: `$a = 2$, $b = 4$, $c = -6$

**Diskriminanten:**
$$D = b^2 - 4ac = 16 - 4 \\cdot 2 \\cdot (-6) = 16 + 48 = 64$$

**Nullpunktene:**
$$x = \\frac{-4 \\pm \\sqrt{64}}{2 \\cdot 2} = \\frac{-4 \\pm 8}{4}$$

$x = \\frac{-4 + 8}{4} = 1$ eller $x = \\frac{-4 - 8}{4} = -3$

**Nullpunkter:** $x = 1$ og $x = -3$`,
    },
    {
      id: '1t-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-3-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nullpunktene med abc-formelen:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 4x + 1$', solution: '$x = 2 \\pm \\sqrt{3}$' },
          { label: 'b', task: '$g(x) = 2x^2 - 6x + 3$', solution: '$x = \\frac{3 \\pm \\sqrt{3}}{2}$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-5-def-faktorisert',
      type: 'definition',
      title: 'Faktorisert form',
      content: `Når en andregradsfunksjon har nullpunkter $x_1$ og $x_2$, kan den skrives på **faktorisert form**:
$$f(x) = a(x - x_1)(x - x_2)$$

Nullpunktene leses direkte fra den faktoriserte formen.`,
    },
    {
      id: '1t-3-5-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Skriv $f(x) = 2x^2 - 8x + 6$ på faktorisert form.',
      solution: `**Steg 1:** Finn nullpunktene med abc-formelen:
$a = 2$, $b = -8$, $c = 6$

$$x = \\frac{8 \\pm \\sqrt{64 - 48}}{4} = \\frac{8 \\pm 4}{4}$$

$x = 3$ eller $x = 1$

**Steg 2:** Skriv på faktorisert form:
$$f(x) = 2(x - 1)(x - 3)$$

**Kontroll:** $2(x-1)(x-3) = 2(x^2 - 4x + 3) = 2x^2 - 8x + 6$ ✓`,
    },
    {
      id: '1t-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-3-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv funksjonene på faktorisert form:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 6x + 8$', solution: '$f(x) = (x - 2)(x - 4)$' },
          { label: 'b', task: '$g(x) = -x^2 + 4x + 5$', solution: '$g(x) = -(x + 1)(x - 5)$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-5-text-fortegn',
      type: 'text',
      content: `## Fortegnsanalyse

Når vi kjenner nullpunktene, kan vi bestemme fortegnet til $f(x)$ i ulike intervaller.

**Metode:**
1. Finn nullpunktene
2. Del tallinja i intervaller ved nullpunktene
3. Test en $x$-verdi i hvert intervall
4. Tegn fortegnslinje`,
    },
    {
      id: '1t-3-5-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Lag fortegnslinje for $f(x) = x^2 - 4$.',
      solution: `**Nullpunkter:** $x^2 = 4 \\Rightarrow x = \\pm 2$

**Intervaller:** $(-\\infty, -2)$, $(-2, 2)$, $(2, \\infty)$

**Test:**
- $x = -3$: $f(-3) = 9 - 4 = 5 > 0$
- $x = 0$: $f(0) = 0 - 4 = -4 < 0$
- $x = 3$: $f(3) = 9 - 4 = 5 > 0$

**Fortegnslinje:**

| | $x < -2$ | $x = -2$ | $-2 < x < 2$ | $x = 2$ | $x > 2$ |
|---|---|---|---|---|---|
| $f(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |

Siden $a = 1 > 0$, er $f(x) > 0$ utenfor nullpunktene og $f(x) < 0$ mellom dem.`,
    },
    {
      id: '1t-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag fortegnslinje for funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 9$', solution: 'Nullpunkter: $x = \\pm 3$. $+$ for $x < -3$, $-$ for $-3 < x < 3$, $+$ for $x > 3$' },
          { label: 'b', task: '$g(x) = -x^2 + 4x - 3$', solution: 'Nullpunkter: $x = 1, 3$. $-$ for $x < 1$, $+$ for $1 < x < 3$, $-$ for $x > 3$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-5-note-fortegn',
      type: 'note',
      content: `**Huskeregel for fortegn**

For $f(x) = ax^2 + bx + c$ med to nullpunkter $x_1 < x_2$:

- Hvis $a > 0$: $f(x) > 0$ når $x < x_1$ eller $x > x_2$
- Hvis $a < 0$: $f(x) > 0$ når $x_1 < x < x_2$

**Parabelen er over x-aksen der $f(x) > 0$**`,
    },
    {
      id: '1t-3-5-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Løs ulikheten $x^2 - 3x - 10 > 0$.',
      solution: `**Steg 1:** Finn nullpunktene
$(x - 5)(x + 2) = 0 \\Rightarrow x = 5$ eller $x = -2$

**Steg 2:** Fortegnsanalyse
Siden $a = 1 > 0$, er parabelen positiv utenfor nullpunktene.

**Løsning:** $x < -2$ eller $x > 5$

Intervallnotasjon: $x \\in (-\\infty, -2) \\cup (5, \\infty)$`,
    },
    {
      id: '1t-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs ulikhetene:',
        subTasks: [
          { label: 'a', task: '$x^2 - 4x - 5 > 0$', solution: '$x < -1$ eller $x > 5$' },
          { label: 'b', task: '$x^2 - 6x + 8 \\leq 0$', solution: '$2 \\leq x \\leq 4$' },
          { label: 'c', task: '$-x^2 + 2x + 3 > 0$', solution: '$-1 < x < 3$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-3-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'For hvilke verdier av $k$ har $f(x) = x^2 - 4x + k$ to ulike nullpunkter?',
        solution: 'To nullpunkter krever $D > 0$: $16 - 4k > 0 \\Rightarrow k < 4$',
        hints: ['Sett opp kravet $D > 0$'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_3_6: TextbookChapter = {
  id: '1t-3-6',
  courseId: '1t',
  chapterNumber: '3.6',
  title: 'Polynomfunksjoner',
  description: 'Funksjoner med grad høyere enn 2.',
  estimatedMinutes: 35,
  competenceGoals: ['analysere polynomfunksjoner av høyere grad'],
  content: [
    {
      id: '1t-3-6-intro',
      type: 'text',
      content: `Et **polynom** er et uttrykk med flere ledd der variabelen har hele, ikke-negative eksponenter. Polynomfunksjoner inkluderer lineære funksjoner (grad 1), andregradsfunksjoner (grad 2), og funksjoner av høyere grad.

I dette kapitlet lærer du:
- Grad og ledende koeffisient
- Nullpunkter og faktorisering
- Grafenes oppførsel`,
    },
    {
      id: '1t-3-6-def-polynom',
      type: 'definition',
      title: 'Polynomfunksjon',
      content: `En **polynomfunksjon** av grad $n$ har formen:
$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$$

der $a_n \\neq 0$.

- **Grad:** Den høyeste eksponenten, $n$
- **Ledende koeffisient:** $a_n$
- **Konstantledd:** $a_0$`,
    },
    {
      id: '1t-3-6-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Finn grad og ledende koeffisient for $f(x) = 3x^4 - 2x^2 + x - 5$.',
      solution: `Vi ser på hvert ledd:
- $3x^4$: eksponent 4
- $-2x^2$: eksponent 2
- $x$: eksponent 1
- $-5$: konstantledd

**Grad:** 4 (den høyeste eksponenten)
**Ledende koeffisient:** 3 (koeffisienten foran $x^4$)
**Konstantledd:** $-5$`,
    },
    {
      id: '1t-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-3-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn grad og ledende koeffisient:',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x^5 - x^3 + 1$', solution: 'Grad 5, ledende koeffisient 2' },
          { label: 'b', task: '$g(x) = -x^3 + x^2 - x$', solution: 'Grad 3, ledende koeffisient $-1$' },
          { label: 'c', task: '$h(x) = 2x - 7x^4 + x^2$', solution: 'Grad 4, ledende koeffisient $-7$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-6-text-grad',
      type: 'text',
      content: `## Grafenes oppførsel

**Ledende koeffisient** og **grad** bestemmer hva som skjer med grafen for store $|x|$:

**Partall grad:**
- $a_n > 0$: Begge ender oppover
- $a_n < 0$: Begge ender nedover

**Oddetall grad:**
- $a_n > 0$: Nedre venstre til øvre høyre
- $a_n < 0$: Øvre venstre til nedre høyre`,
    },
    {
      id: '1t-3-6-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Beskriv oppførselen til $f(x) = -x^3 + 4x$ for store $|x|$.',
      solution: `**Grad:** 3 (oddetall)
**Ledende koeffisient:** $-1 < 0$

For store $|x|$ dominerer $-x^3$-leddet:
- Når $x \\to +\\infty$: $f(x) \\to -\\infty$ (går nedover)
- Når $x \\to -\\infty$: $f(x) \\to +\\infty$ (går oppover)

Grafen går fra øvre venstre til nedre høyre.`,
    },
    {
      id: '1t-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-3-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv endenes oppførsel:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^3 - 2x$', solution: 'Nedre venstre til øvre høyre (grad 3, $a > 0$)' },
          { label: 'b', task: '$g(x) = -x^4 + 3x^2$', solution: 'Begge ender nedover (grad 4, $a < 0$)' },
          { label: 'c', task: '$h(x) = 2x^5 - x$', solution: 'Nedre venstre til øvre høyre (grad 5, $a > 0$)' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-6-theorem-nullpunkter',
      type: 'theorem',
      title: 'Antall nullpunkter',
      content: `Et polynom av grad $n$ har **høyst $n$ nullpunkter**.

Hvis $x = r$ er et nullpunkt, er $(x - r)$ en faktor i polynomet.`,
    },
    {
      id: '1t-3-6-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Finn nullpunktene til $f(x) = x^3 - 4x^2 + 3x$.',
      solution: `**Faktoriser:** Trekk ut $x$:
$$f(x) = x(x^2 - 4x + 3)$$

Faktoriser andregradsuttrykket:
$$f(x) = x(x - 1)(x - 3)$$

**Nullpunkter:** $f(x) = 0$ når en av faktorene er 0.

$x = 0$, $x = 1$, eller $x = 3$`,
    },
    {
      id: '1t-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-3-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nullpunktene:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^3 - 9x$', solution: '$x = 0, \\pm 3$' },
          { label: 'b', task: '$g(x) = x^3 - x^2 - 6x$', solution: '$x = 0, -2, 3$' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Trekk ut $x$ først'],
      },
    },
    {
      id: '1t-3-6-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Finn nullpunktene til $f(x) = x^4 - 5x^2 + 4$.',
      solution: `Sett $u = x^2$ (substitusjon):
$$f(x) = u^2 - 5u + 4 = (u - 1)(u - 4)$$

Tilbake til $x$:
$$f(x) = (x^2 - 1)(x^2 - 4)$$

Faktoriser videre:
$$f(x) = (x-1)(x+1)(x-2)(x+2)$$

**Nullpunkter:** $x = -2, -1, 1, 2$`,
    },
    {
      id: '1t-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-3-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nullpunktene (bruk substitusjon $u = x^2$):',
        subTasks: [
          { label: 'a', task: '$f(x) = x^4 - 10x^2 + 9$', solution: '$x = \\pm 1, \\pm 3$' },
          { label: 'b', task: '$g(x) = x^4 - 13x^2 + 36$', solution: '$x = \\pm 2, \\pm 3$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-6-note-skisse',
      type: 'note',
      content: `**Skissere polynomgrafer**

1. Finn graden og avgjør endenes oppførsel
2. Finn nullpunktene (løs $f(x) = 0$)
3. Finn $y$-skjæringen ($f(0)$)
4. Tegn en jevn kurve gjennom punktene`,
    },
    {
      id: '1t-3-6-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Et polynom av grad 3 har nullpunkter $x = -2, 1, 3$ og $f(0) = 6$. Finn $f(x)$.',
      solution: `**Steg 1:** Skriv polynomet med ukjent koeffisient:
$$f(x) = a(x + 2)(x - 1)(x - 3)$$

**Steg 2:** Bruk at $f(0) = 6$:
$$f(0) = a(2)(-1)(-3) = 6a = 6$$
$$a = 1$$

**Svar:** $f(x) = (x + 2)(x - 1)(x - 3)$`,
    },
    {
      id: '1t-3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-3-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et polynom av grad 3 har nullpunkter $x = -1, 2, 4$ og $f(0) = 8$. Finn $f(x)$.',
        solution: '$f(x) = a(x+1)(x-2)(x-4)$. $f(0) = a \\cdot 1 \\cdot (-2) \\cdot (-4) = 8a = 8$, så $a = 1$. $f(x) = (x+1)(x-2)(x-4)$.',
        hints: ['Skriv $f(x) = a(x+1)(x-2)(x-4)$ og bruk $f(0) = 8$'],
      },
    },
    {
      id: '1t-3-6-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-3-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningen $x^3 - 7x + 6 = 0$. Hint: Prøv $x = 1$.',
        solution: '$f(1) = 1 - 7 + 6 = 0$, så $(x-1)$ er en faktor. Polynomdivisjon gir $x^3-7x+6 = (x-1)(x^2+x-6) = (x-1)(x+3)(x-2)$. Løsninger: $x = 1, -3, 2$.',
        hints: ['Når $x = 1$ er løsning, er $(x-1)$ en faktor'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_3_7: TextbookChapter = {
  id: '1t-3-7',
  courseId: '1t',
  chapterNumber: '3.7',
  title: 'Rasjonale funksjoner',
  description: 'Funksjoner på brøkform med polynomer.',
  estimatedMinutes: 35,
  competenceGoals: ['analysere rasjonale funksjoner og deres egenskaper'],
  content: [
    {
      id: '1t-3-7-intro',
      type: 'text',
      content: `En **rasjonal funksjon** er en brøk der både teller og nevner er polynomer. Disse funksjonene har spesielle egenskaper som asymptoter og hull i grafen.

I dette kapitlet lærer du:
- Definisjonsmengde
- Vertikale asymptoter
- Horisontale asymptoter`,
    },
    {
      id: '1t-3-7-def-rasjonal',
      type: 'definition',
      title: 'Rasjonal funksjon',
      content: `En **rasjonal funksjon** har formen:
$$f(x) = \\frac{P(x)}{Q(x)}$$

der $P(x)$ og $Q(x)$ er polynomer og $Q(x) \\neq 0$.

**Definisjonsmengden** $D_f$ er alle $x$-verdier der nevneren ikke er null.`,
    },
    {
      id: '1t-3-7-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Finn definisjonsmengden til $f(x) = \\frac{x + 1}{x^2 - 4}$.',
      solution: `Nevneren er null når:
$$x^2 - 4 = 0$$
$$(x - 2)(x + 2) = 0$$
$$x = 2 \\text{ eller } x = -2$$

**Definisjonsmengde:** $D_f = \\mathbb{R} \\setminus \\{-2, 2\\}$

Alle reelle tall unntatt $x = -2$ og $x = 2$.`,
    },
    {
      id: '1t-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-3-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn definisjonsmengden:',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{1}{x + 3}$', solution: '$D_f = \\mathbb{R} \\setminus \\{-3\\}$' },
          { label: 'b', task: '$g(x) = \\frac{x}{x^2 - 9}$', solution: '$D_g = \\mathbb{R} \\setminus \\{-3, 3\\}$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-7-def-vertikal',
      type: 'definition',
      title: 'Vertikal asymptote',
      content: `En **vertikal asymptote** er en vertikal linje $x = a$ som grafen nærmer seg, men aldri krysser.

Vertikale asymptoter finnes der nevneren er null (og telleren ikke er null i samme punkt).`,
    },
    {
      id: '1t-3-7-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Finn vertikale asymptoter for $f(x) = \\frac{x + 1}{(x - 2)(x + 3)}$.',
      solution: `Nevneren er null når $(x - 2)(x + 3) = 0$.

$x - 2 = 0 \\Rightarrow x = 2$
$x + 3 = 0 \\Rightarrow x = -3$

Telleren $x + 1$ er ikke null i disse punktene.

**Vertikale asymptoter:** $x = 2$ og $x = -3$`,
    },
    {
      id: '1t-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-3-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn vertikale asymptoter:',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{2}{x - 4}$', solution: '$x = 4$' },
          { label: 'b', task: '$g(x) = \\frac{x}{x^2 - 1}$', solution: '$x = 1$ og $x = -1$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-7-def-horisontal',
      type: 'definition',
      title: 'Horisontal asymptote',
      content: `En **horisontal asymptote** er en horisontal linje $y = b$ som grafen nærmer seg når $x \\to \\pm \\infty$.

For $f(x) = \\frac{P(x)}{Q(x)}$:
- Hvis grad$(P) <$ grad$(Q)$: $y = 0$
- Hvis grad$(P) =$ grad$(Q)$: $y = \\frac{\\text{ledende koeff. i } P}{\\text{ledende koeff. i } Q}$
- Hvis grad$(P) >$ grad$(Q)$: Ingen horisontal asymptote`,
    },
    {
      id: '1t-3-7-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Finn horisontal asymptote for $f(x) = \\frac{3x - 1}{x + 2}$.',
      solution: `Teller har grad 1, nevner har grad 1.
Gradene er like.

$$y = \\frac{\\text{ledende koeff. i teller}}{\\text{ledende koeff. i nevner}} = \\frac{3}{1} = 3$$

**Horisontal asymptote:** $y = 3$`,
    },
    {
      id: '1t-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-3-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn horisontale asymptoter:',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{3}{x + 1}$', solution: '$y = 0$ (grad teller < grad nevner)' },
          { label: 'b', task: '$g(x) = \\frac{2x - 5}{x + 3}$', solution: '$y = 2$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-3-7-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Analyser $f(x) = \\frac{x^2 - 1}{x - 1}$.',
      solution: `**Faktoriser telleren:**
$$f(x) = \\frac{(x-1)(x+1)}{x-1}$$

For $x \\neq 1$:
$$f(x) = x + 1$$

**Viktig:** $f(1)$ er udefinert!

Grafen er linjen $y = x + 1$ med et **hull** i punktet $(1, 2)$.

Dette er ikke en vertikal asymptote fordi telleren også er null i $x = 1$.`,
    },
    {
      id: '1t-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-3-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle og finn hull i grafen: $f(x) = \\frac{x^2 - x - 6}{x - 3}$',
        solution: '$f(x) = \\frac{(x-3)(x+2)}{x-3} = x + 2$ for $x \\neq 3$. Hull i $(3, 5)$.',
        hints: ['Faktoriser telleren'],
      },
    },
    {
      id: '1t-3-7-note-skisse',
      type: 'note',
      content: `**Å skissere rasjonale funksjoner**

1. Finn definisjonsmengden
2. Finn vertikale asymptoter
3. Finn horisontale asymptoter
4. Finn nullpunkter ($f(x) = 0$)
5. Finn $y$-skjæring ($f(0)$)`,
    },
    {
      id: '1t-3-7-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Finn alle asymptoter og nullpunkter for $f(x) = \\frac{x + 2}{x - 1}$.',
      solution: `**Vertikal asymptote:** Nevner null når $x = 1$. Asymptote: $x = 1$

**Horisontal asymptote:** Grad teller = grad nevner = 1.
$y = \\frac{1}{1} = 1$. Asymptote: $y = 1$

**Nullpunkt:** Teller null når $x + 2 = 0 \\Rightarrow x = -2$

**$y$-skjæring:** $f(0) = \\frac{2}{-1} = -2$`,
    },
    {
      id: '1t-3-7-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-3-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn alle asymptoter, nullpunkter og $y$-skjæring for $f(x) = \\frac{2x - 4}{x + 3}$.',
        solution: 'Vertikal: $x = -3$. Horisontal: $y = 2$. Nullpunkt: $x = 2$. $y$-skjæring: $f(0) = -\\frac{4}{3}$.',
      },
    },
    {
      id: '1t-3-7-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-3-7-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn nullpunktene til $f(x) = \\frac{x^2 - 9}{x - 1}$.',
        solution: 'Teller null: $x^2 - 9 = 0 \\Rightarrow x = \\pm 3$. Nullpunkter: $x = 3$ og $x = -3$.',
        hints: ['Sett telleren lik null'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_3_8: TextbookChapter = {
  id: '1t-3-8',
  courseId: '1t',
  chapterNumber: '3.8',
  title: 'Eksponentialfunksjoner',
  description: 'Funksjoner med variabel i eksponenten.',
  estimatedMinutes: 30,
  competenceGoals: ['forstå eksponentiell vekst og nedgang'],
  content: [
    {
      id: '1t-3-8-intro',
      type: 'text',
      content: `En **eksponentialfunksjon** har variabelen i eksponenten. Disse funksjonene modellerer vekst og nedgang i naturen, økonomi og andre områder.

I dette kapitlet lærer du:
- Eksponentiell vekst og nedgang
- Vekstfaktor
- Å tegne eksponentialfunksjoner
- Praktiske anvendelser`,
    },
    {
      id: '1t-3-8-def-eksponential',
      type: 'definition',
      title: 'Eksponentialfunksjon',
      content: `En **eksponentialfunksjon** har formen:
$$f(x) = a \\cdot b^x$$

der $a \\neq 0$, $b > 0$ og $b \\neq 1$.

- $a$ er **startverdien** ($f(0) = a$)
- $b$ er **vekstfaktoren**

**Spesialtilfelle:** $f(x) = e^x$ der $e \\approx 2{,}718$ (Eulers tall)`,
    },
    {
      id: '1t-3-8-text-vekst',
      type: 'text',
      content: `## Vekst og nedgang

Vekstfaktoren $b$ bestemmer om funksjonen vokser eller avtar:

- **$b > 1$:** Eksponentiell vekst
- **$0 < b < 1$:** Eksponentiell nedgang

**Prosentvis vekst:** Hvis noe øker med $p\\%$ per enhet:
$$b = 1 + \\frac{p}{100}$$

**Prosentvis nedgang:** Hvis noe avtar med $p\\%$ per enhet:
$$b = 1 - \\frac{p}{100}$$`,
    },
    {
      id: '1t-3-8-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'En bakteriekultur starter med 1000 bakterier og dobler seg hver time. Sett opp en funksjon for antall bakterier etter $t$ timer.',
      solution: `**Startverdi:** $a = 1000$
**Vekstfaktor:** $b = 2$ (dobling)

$$N(t) = 1000 \\cdot 2^t$$

**Sjekk:**
- $N(0) = 1000 \\cdot 2^0 = 1000$ ✓
- $N(1) = 1000 \\cdot 2^1 = 2000$ ✓
- $N(2) = 1000 \\cdot 2^2 = 4000$ ✓`,
    },
    // Oppgave 1: Lignende vekstoppgave
    {
      id: '1t-3-8-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-3-8-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'En populasjon på 500 individer vokser med 8% per år. Sett opp en funksjon og finn populasjonen etter 10 år.',
        solution: '**Startverdi:** $a = 500$. **Vekstfaktor:** $b = 1{,}08$ (8% økning). Funksjonen blir $P(t) = 500 \\cdot 1{,}08^t$. Etter 10 år: $P(10) = 500 \\cdot 1{,}08^{10} \\approx 1080$ individer.',
      },
    },
    // Eksempel 2: Eksponentiell nedgang (bil)
    {
      id: '1t-3-8-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'En bil mister 15% av verdien hvert år. Den koster 400 000 kr ny. Sett opp en funksjon for bilens verdi etter $t$ år.',
      solution: `**Startverdi:** $a = 400\\,000$
**Nedgang:** $15\\%$
**Vekstfaktor:** $b = 1 - 0{,}15 = 0{,}85$

$$V(t) = 400\\,000 \\cdot 0{,}85^t$$

**Verdi etter 5 år:**
$$V(5) = 400\\,000 \\cdot 0{,}85^5 \\approx 177\\,000 \\text{ kr}$$`,
    },
    // Oppgave 2: Lignende nedgangsoppgave
    {
      id: '1t-3-8-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-3-8-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En maskin koster 200 000 kr og mister 25% av verdien hvert år. Sett opp en funksjon og finn verdien etter 4 år.',
        solution: '**Startverdi:** $a = 200\\,000$. **Vekstfaktor:** $b = 1 - 0{,}25 = 0{,}75$. Funksjonen blir $V(t) = 200\\,000 \\cdot 0{,}75^t$. Etter 4 år: $V(4) = 200\\,000 \\cdot 0{,}75^4 \\approx 63\\,281$ kr.',
      },
    },
    // Teori: Grafens egenskaper
    {
      id: '1t-3-8-text-graf',
      type: 'text',
      content: `## Grafens egenskaper

For $f(x) = a \\cdot b^x$ med $a > 0$:

**Alltid:**
- $f(0) = a$ ($y$-skjæring)
- $f(x) > 0$ for alle $x$ (aldri negativ)
- Ingen nullpunkter
- Horisontal asymptote $y = 0$

**Hvis $b > 1$:**
- Grafen stiger
- Bratt vekst for store $x$

**Hvis $0 < b < 1$:**
- Grafen synker
- Nærmer seg 0 for store $x$`,
    },
    {
      id: '1t-3-8-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Sammenlign grafene til $f(x) = 2^x$ og $g(x) = \\left(\\frac{1}{2}\\right)^x$.',
      solution: `**$f(x) = 2^x$:**
- Vekst ($b = 2 > 1$)
- Stiger fra venstre mot høyre
- $f(0) = 1$

**$g(x) = \\left(\\frac{1}{2}\\right)^x = 2^{-x}$:**
- Nedgang ($b = 0{,}5 < 1$)
- Synker fra venstre mot høyre
- $g(0) = 1$

De to grafene er speilinger av hverandre om $y$-aksen.`,
    },
    // Oppgave 3: Identifisere vekst/nedgang fra funksjonsuttrykk
    {
      id: '1t-3-8-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-3-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om funksjonene viser vekst eller nedgang:',
        subTasks: [
          { label: 'a', task: '$f(x) = 3 \\cdot 1{,}5^x$', solution: 'Vekst ($b = 1{,}5 > 1$)' },
          { label: 'b', task: '$g(x) = 100 \\cdot 0{,}9^x$', solution: 'Nedgang ($b = 0{,}9 < 1$)' },
          { label: 'c', task: '$h(x) = 50 \\cdot 2^{-x}$', solution: 'Nedgang (kan skrives $50 \\cdot 0{,}5^x$)' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    // Note: Doblingstid og halveringstid
    {
      id: '1t-3-8-note-dobling',
      type: 'note',
      content: `**Doblingstid og halveringstid**

**Doblingstid:** Tiden det tar før verdien er doblet.
For $f(x) = a \\cdot 2^{x/T}$ er doblingstiden $T$.

**Halveringstid:** Tiden det tar før verdien er halvert.
For $f(x) = a \\cdot \\left(\\frac{1}{2}\\right)^{x/T}$ er halveringstiden $T$.

**Eksempel:** Radioaktivt stoff med halveringstid 10 år: $N(t) = N_0 \\cdot 0{,}5^{t/10}$`,
    },
    {
      id: '1t-3-8-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Du setter 10 000 kr i banken med 3% årlig rente. Hvor mye har du etter 20 år?',
      solution: `**Startverdi:** $a = 10\\,000$
**Vekstfaktor:** $b = 1 + 0{,}03 = 1{,}03$

$$K(t) = 10\\,000 \\cdot 1{,}03^t$$

**Etter 20 år:**
$$K(20) = 10\\,000 \\cdot 1{,}03^{20} \\approx 18\\,061 \\text{ kr}$$

Du har tjent ca. 8061 kr i renter.`,
    },
    // Oppgave 4: Finn vekstfaktor fra prosent
    {
      id: '1t-3-8-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-3-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vekstfaktoren:',
        subTasks: [
          { label: 'a', task: '5% økning per år', solution: '$b = 1 + 0{,}05 = 1{,}05$' },
          { label: 'b', task: '20% nedgang per time', solution: '$b = 1 - 0{,}20 = 0{,}8$' },
          { label: 'c', task: 'Tredobling per uke', solution: '$b = 3$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    // Oppgave 5: Finn a og b fra punkter (vanskelig)
    {
      id: '1t-3-8-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-3-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Grafen til $f(x) = a \\cdot b^x$ går gjennom punktene $(0, 4)$ og $(2, 36)$. Finn $a$ og $b$.',
        solution: 'Fra $(0, 4)$: $f(0) = a \\cdot b^0 = a = 4$. Fra $(2, 36)$: $4 \\cdot b^2 = 36 \\Rightarrow b^2 = 9 \\Rightarrow b = 3$ (siden $b > 0$). Funksjonen er $f(x) = 4 \\cdot 3^x$.',
        hints: ['Bruk at $f(0) = a$ for å finne $a$ først'],
      },
    },
    // Oppgave 6: Halveringstid (vanskelig)
    {
      id: '1t-3-8-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-3-8-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et radioaktivt stoff har halveringstid 5 år. Du starter med 200 gram. Sett opp en funksjon og finn hvor mye som er igjen etter 15 år.',
        solution: 'Halveringstid 5 år betyr at stoffet halveres for hver 5. år. Funksjonen blir $N(t) = 200 \\cdot 0{,}5^{t/5}$. Etter 15 år: $N(15) = 200 \\cdot 0{,}5^{15/5} = 200 \\cdot 0{,}5^3 = 200 \\cdot 0{,}125 = 25$ gram.',
        hints: ['Bruk $N(t) = N_0 \\cdot 0{,}5^{t/T}$ der $T$ er halveringstiden'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_4_1_LIKNINGSSETT: TextbookChapter = {
  id: '1t-4-1',
  courseId: '1t',
  chapterNumber: '4.1',
  title: 'Likningssett',
  description: 'Lær å løse likningssett med to eller tre ukjente ved grafisk løsning, innsettingsmetoden og addisjonsmetoden.',
  estimatedMinutes: 90,
  competenceGoals: [
    'løse likningssett med to ukjente grafisk og algebraisk',
    'anvende innsettingsmetoden og addisjonsmetoden',
    'sette opp og løse likningssett fra praktiske situasjoner',
  ],
  content: [
    // Introduksjon
    {
      id: '1t-4-1-intro',
      type: 'text',
      content: `Vi skal nå løse **likningssett** – et sett med flere likninger som skal være oppfylt samtidig.

I hver likning har vi to eller flere ukjente, og vi skal finne verdiene som gjør at **alle likningene stemmer samtidig**.

**Forkunnskaper:** Grunnleggende likninger og lineære funksjoner.

For å skille på likningene er det nyttig å nummerere dem med romertall. $I$ refererer til likning én og $II$ til likning to.`,
    },

    // ==================== GRAFISK LØSNING ====================
    {
      id: '1t-4-1-section-grafisk',
      type: 'text',
      content: `## Grafisk løsning av likningssett

Den enkleste måten å forstå likningssett på er å tegne begge likningene som linjer i et koordinatsystem. **Løsningen er punktet der linjene krysser hverandre**.`,
    },

    // Illustrasjon: Grafisk løsning
    {
      id: '1t-4-1-grafisk-losning-bilde',
      type: 'image',
      src: '/images/functions/grafisk-losning.svg',
      alt: 'Grafisk losning av likningssett - to linjer som krysser i et punkt',
      caption: 'Grafisk losning: skjæringspunktet mellom to linjer er losningen',
    },

    // Illustrasjon: Parallelle linjer
    {
      id: '1t-4-1-parallelle-linjer-bilde',
      type: 'image',
      src: '/images/functions/parallelle-linjer.svg',
      alt: 'Parallelle linjer har samme stigningstall og krysser aldri',
      caption: 'Parallelle linjer: samme stigningstall, ingen losning',
    },

    // Illustrasjon: Vinkelrette linjer
    {
      id: '1t-4-1-vinkelrette-linjer-bilde',
      type: 'image',
      src: '/images/functions/vinkelrette-linjer.svg',
      alt: 'Vinkelrette linjer star 90 grader på hverandre',
      caption: 'Vinkelrette linjer: produktet av stigningstallene er -1',
    },

    {
      id: '1t-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Grafisk løsning',
      problem: 'Finn grafisk $x$ og $y$ slik at begge likningene er oppfylt samtidig:\n\n$I$: $y + 4 = 2x$\n\n$II$: $2y - 1 = x$',
      solution: `Vi omformer likningene til formen $y = ax + b$ og tegner dem inn i et koordinatsystem.

**Likning I:**
$$y + 4 = 2x \\quad | -4$$
$$y = 2x - 4$$

**Likning II:**
$$2y - 1 = x \\quad | +1$$
$$2y = x + 1 \\quad | \\div 2$$
$$y = \\frac{1}{2}x + \\frac{1}{2}$$

Vi ser at linjene skjærer i punktet $(3, 2)$, altså der $x = 3$ og $y = 2$.

**Prøve:** Setter vi inn $x = 3$ og $y = 2$ i det originale likningssettet:
- $I$: $2 + 4 = 2 \\cdot 3$ → $6 = 6$ ✓
- $II$: $2 \\cdot 2 - 1 = 3$ → $3 = 3$ ✓

**Løsning:** $x = 3$ og $y = 2$`,
    },
    {
      id: '1t-4-1-geogebra-1',
      type: 'geogebra',
      title: 'Utforsk grafisk løsning',
      description: 'Prøv å tegne inn andre likningssett og finn skjæringspunktet.',
      appType: 'graphing',
      commands: ['y = 2x - 4', 'y = 0.5x + 0.5', 'A = Intersect(y = 2x - 4, y = 0.5x + 0.5)'],
    },
    {
      id: '1t-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn grafisk $x$ og $y$ slik at begge likningene er oppfylt samtidig. Tegn begge grafene for hånd og finn skjæringspunktet.',
        subTasks: [
          { label: 'a', task: '$I$: $y = x - 3$\n$II$: $y = -2x + 3$', solution: '$x = 2$, $y = -1$' },
          { label: 'b', task: '$y + 3 = -x + 4$\n$2y = 4x + 2$', solution: '$x = 0$, $y = 1$' },
          { label: 'c', task: '$2x - y = x + 3$\n$5 - x + y = 2y$', solution: '$x = 4$, $y = 1$' },
        ],
        solution: 'a) $x = 2$, $y = -1$, b) $x = 0$, $y = 1$, c) $x = 4$, $y = 1$',
        hints: ['Omform til $y = ax + b$ først', 'Finn skjæringspunktet der linjene krysser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Ingen løsninger og uendelig mange
    {
      id: '1t-4-1-section-spesielle',
      type: 'text',
      content: `## Ingen løsninger og uendelig mange løsninger

Ikke alle likningssett har én løsning:

- **Ingen løsninger:** Dersom to linjer er **parallelle** (og ikke sammenfallende), vil de aldri møte hverandre. Eksempelvis vil $y = 2x - 2$ og $y = 2x + 3$ alltid ha en avstand på 5 når de har samme $x$-verdi.

- **Uendelig mange løsninger:** Dersom linjene er **sammenfallende** (beskriver samme linje), har de uendelig mange felles punkter.`,
    },

    // ==================== INNSETTINGSMETODEN ====================
    {
      id: '1t-4-1-section-innsetting',
      type: 'text',
      content: `## Innsettingsmetoden

**Innsetting** betyr å erstatte en variabel med en verdi eller et uttrykk. Vi kan bruke dette til å løse likningssett.`,
    },
    {
      id: '1t-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Innsetting av tall',
      problem: 'La $x = -3$. Bruk innsetting og løs likningene for $y$.\n\na) $y + x = 2$\n\nb) $2x - y = 8$\n\nc) $x(y - 2) = 6$',
      solution: `**a)** $y + x = 2$
$$y + (-3) = 2$$
$$y - 3 = 2 \\quad | +3$$
$$y = 5$$

**b)** $2x - y = 8$
$$2 \\cdot (-3) - y = 8$$
$$-6 - y = 8 \\quad | +6$$
$$-y = 14 \\quad | \\cdot (-1)$$
$$y = -14$$

**c)** $x(y - 2) = 6$
$$-3(y - 2) = 6$$
$$-3y + 6 = 6 \\quad | -6$$
$$-3y = 0 \\quad | \\div (-3)$$
$$y = 0$$`,
    },
    {
      id: '1t-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $x = -2$. Bruk dette til å finne verdien av $y$.',
        subTasks: [
          { label: 'a', task: '$y = x - 3$', solution: '$y = -5$' },
          { label: 'b', task: '$y = -x + 3$', solution: '$y = 5$' },
          { label: 'c', task: '$y = 3x - 2$', solution: '$y = -8$' },
          { label: 'd', task: '$y - 4 = x$', solution: '$y = 2$' },
          { label: 'e', task: '$2y + 4x = 10$', solution: '$y = 9$' },
          { label: 'f', task: '$x(y + 3) = 6$', solution: '$y = -6$' },
        ],
        solution: 'a) $y = -5$, b) $y = 5$, c) $y = -8$, d) $y = 2$, e) $y = 9$, f) $y = -6$',
        hints: ['Sett inn $x = -2$ overalt der du ser $x$'],
      },
    },

    // Innsetting av uttrykk
    {
      id: '1t-4-1-section-innsetting-uttrykk',
      type: 'text',
      content: `## Innsetting av variabler og uttrykk

Vi kan også erstatte variabler med hele **uttrykk** istedenfor kun tall. Dette er nøkkelen til å løse likningssett.`,
    },
    {
      id: '1t-4-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Innsetting av uttrykk',
      problem: 'Løs likningssettet ved hjelp av innsettingsmetoden:\n\n$I$: $x = 5y$\n\n$II$: $2x - 8y = 8$',
      solution: `**Likning $I$ sier at $x = 5y$. Vi kan derfor erstatte $x$ i likning $II$ med $5y$.**

$I \\to II$:
$$2 \\cdot 5y - 8y = 8$$
$$10y - 8y = 8$$
$$2y = 8 \\quad | \\div 2$$
$$y = 4$$

**Vi har nå funnet $y = 4$. Dette setter vi inn i likning $I$:**

$$x = 5 \\cdot y$$
$$x = 5 \\cdot 4$$
$$x = 20$$

**Løsning:** $x = 20$ og $y = 4$`,
    },
    {
      id: '1t-4-1-note-notation',
      type: 'note',
      content: `**Notasjon:**
- $I \\to II$ betyr at vi bruker informasjon fra likning $I$ i likning $II$.
- $II^*$ betyr den omformede likning $II$.`,
    },
    {
      id: '1t-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningssettene (finn verdien av $x$ og av $y$) ved hjelp av innsettingsmetoden.',
        subTasks: [
          { label: 'a', task: '$x = 2y$\n$3x + y = 14$', solution: '$x = 4$, $y = 2$' },
          { label: 'b', task: '$x = y + 3$\n$2x + 4y = 12$', solution: '$x = 4$, $y = 1$' },
          { label: 'c', task: '$2x = 6y$\n$x + 7y = 40$', solution: '$x = 12$, $y = 4$' },
        ],
        solution: 'a) $x = 4$, $y = 2$, b) $x = 4$, $y = 1$, c) $x = 12$, $y = 4$',
        hints: ['En av likningene er allerede løst for én variabel', 'Sett inn uttrykket for denne variabelen i den andre likningen'],
      },
    },

    // Fullstendig innsettingsmetode
    {
      id: '1t-4-1-section-fullstendig',
      type: 'text',
      content: `## Likningssett løst ved hjelp av innsettingsmetoden

I vanlige likningssett med 2 ukjente bruker vi enten $I$ eller $II$ og løser for enten $x$ eller $y$. Hvilken av likningene vi velger å bruke og hvilken variabel vi løser for kommer an på hva vi tenker blir **enklest** å gjennomføre.`,
    },
    {
      id: '1t-4-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Innsettingsmetoden',
      problem: 'Løs likningssettet ved hjelp av innsettingsmetoden:\n\n$I$: $x + 3y = 8$\n\n$II$: $2x - 2y = 8$',
      solution: `**Steg 1:** Vi løser likning $I$ for $x$ (enklest):
$$x + 3y = 8 \\quad | -3y$$
$$x = -3y + 8$$

**Steg 2:** Setter dette inn i likning $II$:
$$2(-3y + 8) - 2y = 8$$
$$-6y + 16 - 2y = 8 \\quad | -16$$
$$-8y = -8 \\quad | \\div (-8)$$
$$y = 1$$

**Steg 3:** Setter $y = 1$ inn i uttrykket for $x$:
$$x = -3 \\cdot 1 + 8 = -3 + 8 = 5$$

**Løsning:** $x = 5$ og $y = 1$`,
    },
    {
      id: '1t-4-1-tip-enklest',
      type: 'tip',
      content: `**Tips:** Velg alltid å løse for den variabelen som gir det **enkleste uttrykket**. Hvis en variabel allerede har koeffisient 1 (som $x$ i likning $I$ over), er det som regel lurt å løse for denne.`,
    },
    {
      id: '1t-4-1-example-4b',
      type: 'example',
      title: 'Eksempel 5: Innsettingsmetoden (fortsatt)',
      problem: 'Løs likningssettet:\n\n$I$: $2x + 5y = 9$\n\n$II$: $3x - y = 5$',
      solution: `Her er det enklest å løse likning $II$ for $y$ (koeffisient $-1$):

$$3x - y = 5 \\quad | +y - 5$$
$$3x - 5 = y$$

Setter inn i likning $I$:
$$2x + 5(3x - 5) = 9$$
$$2x + 15x - 25 = 9 \\quad | +25$$
$$17x = 34 \\quad | \\div 17$$
$$x = 2$$

Finner $y$:
$$y = 3 \\cdot 2 - 5 = 6 - 5 = 1$$

**Løsning:** $x = 2$ og $y = 1$`,
    },
    {
      id: '1t-4-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningssettene ved hjelp av innsettingsmetoden.',
        subTasks: [
          { label: 'a', task: '$2x - y = 8$\n$x - 3y = -1$', solution: '$x = 5$, $y = 2$' },
          { label: 'b', task: '$3x - y = 0$\n$6x + y = 9$', solution: '$x = 1$, $y = 3$' },
          { label: 'c', task: '$x + 2y = 7$\n$3x - y = 7$', solution: '$x = 3$, $y = 2$' },
          { label: 'd', task: '$5x - 3y = 1$\n$x - y = -1$', solution: '$x = 2$, $y = 3$' },
          { label: 'e', task: '$x - 2y = 5$\n$3x - 3y = 9$', solution: '$x = 1$, $y = -2$' },
          { label: 'f', task: '$2a - 4b + 2 = 0$\n$7a - b = 6$', solution: '$a = 1$, $b = 1$' },
        ],
        solution: 'a) $x = 5$, $y = 2$, b) $x = 1$, $y = 3$, c) $x = 3$, $y = 2$, d) $x = 2$, $y = 3$, e) $x = 1$, $y = -2$, f) $a = 1$, $b = 1$',
        hints: ['Velg den likningen der det er enklest å isolere én variabel', 'Se etter koeffisient 1 eller -1'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1t-4-1-ex-block-4b',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-4b',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningssettene ved hjelp av innsettingsmetoden.',
        subTasks: [
          { label: 'a', task: '$3x + 4y = 2$\n$4x + 2y - 6 = 0$', solution: '$x = 2$, $y = -1$' },
          { label: 'b', task: '$2x + 4y - 8 = 0$\n$3x + 2y = 8$', solution: '$x = 2$, $y = 1$' },
        ],
        solution: 'a) $x = 2$, $y = -1$, b) $x = 2$, $y = 1$',
      },
    },

    // ==================== ADDISJONSMETODEN ====================
    {
      id: '1t-4-1-section-addisjon',
      type: 'text',
      content: `## Addisjonsmetoden

I et likningssett vil alltid begge likningene gjelde samtidig. Det vil også si at dersom vi **legger sammen venstresidene** i $I$ og $II$, så vil summen av disse være lik **summen av høyresidene**.

Dette kan vi bruke til å **fjerne** $x$ eller $y$ i en av likningene slik at vi kun står igjen med én ukjent.`,
    },
    {
      id: '1t-4-1-example-5',
      type: 'example',
      title: 'Eksempel 6: Addisjonsmetoden (enkel)',
      problem: 'Løs likningssettet ved hjelp av addisjonsmetoden:\n\n$I$: $2x + 4y = 14$\n\n$II$: $-2x - 2y = -8$',
      solution: `Vi legger sammen likning $I$ og $II$:

$$I + II: \\quad (2x + 4y) + (-2x - 2y) = 14 + (-8)$$
$$2x + 4y - 2x - 2y = 14 - 8$$
$$2y = 6$$
$$y = 3$$

Setter $y = 3$ inn i likning $I$:
$$2x + 4 \\cdot 3 = 14$$
$$2x + 12 = 14 \\quad | -12$$
$$2x = 2 \\quad | \\div 2$$
$$x = 1$$

**Løsning:** $x = 1$ og $y = 3$`,
    },
    {
      id: '1t-4-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-5',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningssettene ved å bruke addisjonsmetoden.',
        subTasks: [
          { label: 'a', task: '$-x - y = 6$\n$x + 2y = -9$', solution: '$x = -3$, $y = -3$' },
          { label: 'b', task: '$2x - y = 6$\n$-2x + 2y = -4$', solution: '$x = 4$, $y = 2$' },
          { label: 'c', task: '$3x + y = 6$\n$2x - y = -4$', solution: '$x = \\frac{2}{5}$, $y = \\frac{24}{5}$' },
        ],
        solution: 'a) $x = -3$, $y = -3$, b) $x = 4$, $y = 2$, c) $x = \\frac{2}{5}$, $y = \\frac{24}{5}$',
        hints: ['Se om variablene allerede har motsatte fortegn', 'Legg sammen likningene for å eliminere én variabel'],
      },
    },

    // Multiplisere før addisjon
    {
      id: '1t-4-1-text-mult',
      type: 'text',
      content: `Som du kanskje har tenkt, er det ikke alltid slik at en av variablene forsvinner bare du legger sammen likning $I$ og $II$.

For å løse dette **multipliserer vi én eller begge likningene** slik at de får en lik konstant (med motsatt fortegn) foran enten $x$ eller $y$.`,
    },
    {
      id: '1t-4-1-example-6',
      type: 'example',
      title: 'Eksempel 7: Addisjonsmetoden med multiplikasjon',
      problem: 'Løs likningssettet ved hjelp av addisjonsmetoden:\n\n$I$: $x + 3y = 8$\n\n$II$: $2x - 2y = 8$',
      solution: `For å fjerne $x$ ganger vi likning $I$ med $(-2)$:

$$-2 \\cdot I: \\quad -2x - 6y = -16$$

Nå legger vi sammen med $II$:
$$II + (-2 \\cdot I): \\quad 2x - 2y + (-2x - 6y) = 8 + (-16)$$
$$-8y = -8 \\quad | \\div (-8)$$
$$y = 1$$

Setter $y = 1$ inn i likning $I$:
$$x + 3 \\cdot 1 = 8$$
$$x = 8 - 3 = 5$$

**Løsning:** $x = 5$ og $y = 1$`,
    },
    {
      id: '1t-4-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-6',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningssettene ved hjelp av addisjonsmetoden.',
        subTasks: [
          { label: 'a', task: '$2x + 3y = 8$\n$4x + 2y = 8$', solution: '$x = 1$, $y = 2$' },
          { label: 'b', task: '$x + 3y = 8$\n$3x - y = 4$', solution: '$x = 2$, $y = 2$' },
          { label: 'c', task: '$-2x + 3y = 7$\n$x - 5y = -14$', solution: '$x = 1$, $y = 3$' },
          { label: 'd', task: '$x - 3y = -5$\n$-2x + 3y = 7$', solution: '$x = -2$, $y = 1$' },
        ],
        solution: 'a) $x = 1$, $y = 2$, b) $x = 2$, $y = 2$, c) $x = 1$, $y = 3$, d) $x = -2$, $y = 1$',
        hints: ['Multipliser én av likningene slik at koeffisientene for én variabel blir like med motsatt fortegn'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1t-4-1-example-7',
      type: 'example',
      title: 'Eksempel 8: Addisjonsmetoden (begge multipliseres)',
      problem: 'Løs likningssettet ved hjelp av addisjonsmetoden:\n\n$I$: $3x + 5y = 2$\n\n$II$: $2x - 2y = -4$',
      solution: `Vi ganger opp **begge** likningene slik at vi får like mange av enten $x$ eller $y$. Vi velger å få $6x$ i begge:

$$2 \\cdot I: \\quad 6x + 10y = 4$$
$$3 \\cdot II: \\quad 6x - 6y = -12$$

Nå trekker vi den ene fra den andre:
$$2I - 3II: \\quad 16y = 16 \\quad | \\div 16$$
$$y = 1$$

Setter $y = 1$ inn i likning $II$:
$$2x - 2 \\cdot 1 = -4 \\quad | +2$$
$$2x = -2 \\quad | \\div 2$$
$$x = -1$$

**Løsning:** $x = -1$ og $y = 1$`,
    },
    {
      id: '1t-4-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-7',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningssettene ved hjelp av addisjonsmetoden.',
        subTasks: [
          { label: 'a', task: '$x + 3y = 5$\n$4x + 2y = 10$', solution: '$x = 2$, $y = 1$' },
          { label: 'b', task: '$2x + 3y = 5$\n$3x - 2y = -12$', solution: '$x = -2$, $y = 3$' },
          { label: 'c', task: '$-2x + 3y = -8$\n$5x - 5y = 10$', solution: '$x = -2$, $y = -4$' },
          { label: 'd', task: '$-3x - 4y = -14$\n$-2x + 3y = 19$', solution: '$x = -2$, $y = 5$' },
        ],
        solution: 'a) $x = 2$, $y = 1$, b) $x = -2$, $y = 3$, c) $x = -2$, $y = -4$, d) $x = -2$, $y = 5$',
        hints: ['Finn minste felles multiplum for koeffisientene', 'Multipliser begge likningene for å få like koeffisienter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ==================== TRE UKJENTE ====================
    {
      id: '1t-4-1-section-tre',
      type: 'text',
      content: `## Likningssett med 3 ukjente

Metoden kan utvides til likningssett med **tre ukjente** ($x$, $y$ og $z$). Vi trenger da tre likninger.

**Strategi:**
1. Bruk én likning til å uttrykke én variabel
2. Sett dette uttrykket inn i de to andre likningene
3. Nå har du to likninger med to ukjente (som du kan løse som før)
4. Sett tilbake for å finne alle tre variablene`,
    },
    {
      id: '1t-4-1-example-8',
      type: 'example',
      title: 'Eksempel 9: Tre ukjente',
      problem: 'Løs likningssettet ved hjelp av innsettingsmetoden:\n\n$I$: $x + 3y + z = 4$\n\n$II$: $2x - 2y - z = 1$\n\n$III$: $2x - y + 2z = -6$',
      solution: `**Steg 1:** Løs likning $I$ for $x$:
$$x = 4 - 3y - z$$

**Steg 2:** Sett inn i likning $II$:
$$2(4 - 3y - z) - 2y - z = 1$$
$$8 - 6y - 2z - 2y - z = 1$$
$$-8y - 3z = -7 \\quad (II^*)$$

**Steg 3:** Sett inn i likning $III$:
$$2(4 - 3y - z) - y + 2z = -6$$
$$8 - 6y - 2z - y + 2z = -6$$
$$-7y = -14$$
$$y = 2 \\quad (III^*)$$

**Steg 4:** Sett $y = 2$ inn i $(II^*)$:
$$-8 \\cdot 2 - 3z = -7$$
$$-16 - 3z = -7 \\quad | +16$$
$$-3z = 9$$
$$z = -3$$

**Steg 5:** Sett $y = 2$ og $z = -3$ inn i uttrykket for $x$:
$$x = 4 - 3 \\cdot 2 - (-3) = 4 - 6 + 3 = 1$$

**Løsning:** $x = 1$, $y = 2$ og $z = -3$`,
    },
    {
      id: '1t-4-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-8',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningssettene ved hjelp av innsettingsmetoden.',
        subTasks: [
          { label: 'a', task: '$2x - 3y - 3z = 8$\n$x - 2y - 2z = 5$\n$x - y + z = 7$', solution: '$x = 1$, $y = -4$, $z = 2$' },
          { label: 'b', task: '$x + 5y + 2z = -5$\n$x - y - 2z = -3$\n$4x - 3y + z = 21$', solution: '$x = 2$, $y = -3$, $z = 4$' },
        ],
        solution: 'a) $x = 1$, $y = -4$, $z = 2$, b) $x = 2$, $y = -3$, $z = 4$',
        hints: ['Begynn med å løse én likning for den variabelen som er enklest å isolere', 'Etter innsetting får du to likninger med to ukjente'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1t-4-1-ex-block-8b',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-8b',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningssettene ved hjelp av innsettingsmetoden.',
        subTasks: [
          { label: 'a', task: '$x + 2y + z = 1$\n$x - 2y + 3z = 15$\n$3x - 3y + 2z = 18$', solution: '$x = 2$, $y = -2$, $z = 3$' },
          { label: 'b', task: '$x - 3y + 3z = -4$\n$5x - y - 2z = -15$\n$x - y + 2z = 1$', solution: '$x = -1$, $y = 4$, $z = 3$' },
          { label: 'c', task: '$2x + y + z = 0$\n$x - 2y + 2z = 2$\n$3x - 2y + 2z = -2$', solution: '$x = -2$, $y = 1$, $z = 3$' },
          { label: 'd', task: '$2x + 5y + z = 6$\n$x - 3y - 2z = 6$\n$x - 3y + z = 9$', solution: '$x = 5$, $y = -1$, $z = 1$' },
        ],
        solution: 'a) $x = 2$, $y = -2$, $z = 3$, b) $x = -1$, $y = 4$, $z = 3$, c) $x = -2$, $y = 1$, $z = 3$, d) $x = 5$, $y = -1$, $z = 1$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ==================== PRAKTISKE OPPGAVER ====================
    {
      id: '1t-4-1-section-praktisk',
      type: 'text',
      content: `## Å sette opp og løse likningssett fra reelle situasjoner

Likningssett er veldig nyttige for å løse praktiske problemer der vi har **flere ukjente størrelser** og **flere betingelser** som skal oppfylles.`,
    },
    {
      id: '1t-4-1-example-praktisk',
      type: 'example',
      title: 'Eksempel 10: Praktisk oppgave',
      problem: 'Mor sender Mari i butikken på to forskjellige anledninger. Prisene i butikken er den samme ved begge besøkene.\n\nVed første besøk kjøpte Mari 5 kg poteter og 2 kg gulrøtter og betalte 58 kroner.\nVed andre besøk kjøpte Mari 3 kg poteter og 5 kg gulrøtter og betalte 50 kroner.\n\na) Sett opp et likningssett som beskriver situasjonen.\nb) Løs likningssettet og finn prisen per kg for poteter og gulrøtter.',
      solution: `La $x$ være prisen per kg poteter og $y$ være prisen per kg gulrøtter.

**a) Likningssettet:**
$$I: \\quad 5x + 2y = 58$$
$$II: \\quad 3x + 5y = 50$$

**b) Løsning med addisjonsmetoden:**

Multipliser $I$ med 5 og $II$ med $(-2)$:
$$5I: \\quad 25x + 10y = 290$$
$$-2 \\cdot II: \\quad -6x - 10y = -100$$

Legger sammen:
$$19x = 190$$
$$x = 10$$

Setter inn i $I$:
$$5 \\cdot 10 + 2y = 58$$
$$50 + 2y = 58$$
$$2y = 8$$
$$y = 4$$

**Svar:** Poteter koster **10 kr/kg** og gulrøtter koster **4 kr/kg**.`,
    },
    {
      id: '1t-4-1-ex-block-praktisk1',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-praktisk1',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et år har et taxiselskap en fast oppstartsgebyr i tillegg til en fastpris per km kjørt. Kåre har brukt taxiselskapet i januar og i februar.\n\nI januar brukte han taxiselskapet 2 ganger og kjørte til sammen 30 km, han betalte sammenlagt 700 kroner.\nI februar brukte han taxi 3 ganger og kjørte til sammen 60 km, i februar betalte han sammenlagt 1350 kroner.\n\nSett opp et likningssett og regn ut oppstartsgebyret og fastprisen per km til taxiselskapet.',
        solution: 'La $x$ være oppstartsgebyr og $y$ være pris per km.\n$I$: $2x + 30y = 700$\n$II$: $3x + 60y = 1350$\n\nLøsning: $x = 50$ kr (oppstartsgebyr), $y = 20$ kr/km',
        hints: ['La $x$ være oppstartsgebyret og $y$ være prisen per km', 'Januar: 2 oppstarter + 30 km = 700 kr'],
        allowsUpload: true,
      },
    },
    {
      id: '1t-4-1-ex-block-praktisk2',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-ex-praktisk2',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'På et offentlig arrangement er prisen 100 kroner for voksne og 50 kroner for barn. Dersom en familie ønsker mat inkludert koster det 30 kroner ekstra per barn og 50 kroner ekstra per voksen.\n\nFamiliene Storhaug og Kronsteen betaler til sammen 650 kroner for showet og 350 kroner for mat (til alle).\n\nHvor mange voksne og hvor mange barn var det til sammen i de to familiene?',
        solution: 'La $v$ være antall voksne og $b$ være antall barn.\n$I$: $100v + 50b = 650$\n$II$: $50v + 30b = 350$\n\nLøsning: $v = 4$ voksne og $b = 5$ barn',
        hints: ['Sett opp to likninger: én for billettpris, én for mat', 'La $v$ være antall voksne og $b$ antall barn'],
        allowsUpload: true,
      },
    },

    // ==================== OPPSUMMERING ====================
    {
      id: '1t-4-1-summary',
      type: 'definition',
      title: 'Oppsummering: Metoder for å løse likningssett',
      content: `**Grafisk løsning:** Tegn begge likningene som linjer og finn skjæringspunktet.

**Innsettingsmetoden:**
1. Løs én likning for én variabel
2. Sett uttrykket inn i den andre likningen
3. Løs for den gjenværende variabelen
4. Sett tilbake for å finne den første

**Addisjonsmetoden:**
1. Multipliser likningene slik at én variabel har like koeffisienter med motsatt fortegn
2. Legg sammen likningene for å eliminere variabelen
3. Løs for den gjenværende variabelen
4. Sett tilbake for å finne den første`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_4_2_ULIKHETER: TextbookChapter = {
  id: '1t-4-2',
  courseId: '1t',
  chapterNumber: '4.2',
  title: 'Lineære ulikheter',
  description: 'Lær å løse førstegradsulikheter og når du må snu ulikhetstegnet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'løyse ulikskapar av første grad',
    'bruke intervallnotasjon for å beskrive løsningsmengder',
  ],
  content: [
    {
      id: '1t-4-2-intro',
      type: 'text',
      content: `## Ulikheter av første grad

Vi løser førstegradsulikheter på samme måte som vi løser førstegradslikninger. **Unntaket** er dersom vi må gange eller dele med et negativt tall i ulikheten.

> **Viktig regel:** Når vi ganger eller deler med et negativt tall på begge sider av en ulikhet, **må vi snu ulikhetstegnet**.

### Ulikhetstegnene
- $<$ betyr "mindre enn"
- $>$ betyr "større enn"
- $\\leq$ betyr "mindre enn eller lik"
- $\\geq$ betyr "større enn eller lik"

### Intervallnotasjon
Løsningen på en ulikhet kan skrives som et intervall:
- $x < 3$ skrives som $x \\in \\langle \\leftarrow, 3 \\rangle$ eller $x \\in (-\\infty, 3)$
- $x \\geq 5$ skrives som $x \\in [5, \\rightarrow \\rangle$ eller $x \\in [5, \\infty)$

**Notasjon:**
- Hakeparentes $[$ eller $]$ betyr at endepunktet er **med**
- Vinkelparentes $\\langle$ eller $\\rangle$ betyr at endepunktet er **ikke med**`,
    },

    // Eksempel 1: Grunnleggende ulikheter
    {
      id: '1t-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Løs ulikhetene:

a) $3x + 9 < 12$

b) $\\dfrac{2x - 2}{3} \\geq 4$`,
      solution: `**Løsning:**

**a)** $3x + 9 < 12$

Vi løser som en vanlig likning (vi ganger/deler ikke med negative tall):
$$3x + 9 < 12 \\quad | -9$$
$$3x < 3 \\quad | \\div 3$$
$$x < 1$$

**Løsningsmengde:** $L = \\langle \\leftarrow, 1 \\rangle$

---

**b)** $\\dfrac{2x - 2}{3} \\geq 4$

$$\\frac{2x - 2}{3} \\geq 4 \\quad | \\cdot 3$$
$$2x - 2 \\geq 12 \\quad | +2$$
$$2x \\geq 14 \\quad | \\div 2$$
$$x \\geq 7$$

**Løsningsmengde:** $L = [7, \\rightarrow \\rangle$`,
    },

    // Oppgave 1
    {
      id: '1t-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs ulikhetene',
        subTasks: [
          { label: 'a', task: '$2x < 8$', solution: '$2x < 8 \\Rightarrow x < 4$. Løsningsmengde: $L = \\langle \\leftarrow, 4 \\rangle$' },
          { label: 'b', task: '$3x - 6 > 18$', solution: '$3x - 6 > 18 \\Rightarrow 3x > 24 \\Rightarrow x > 8$. Løsningsmengde: $L = \\langle 8, \\rightarrow \\rangle$' },
          { label: 'c', task: '$\\dfrac{x}{2} < 4$', solution: '$\\frac{x}{2} < 4 \\Rightarrow x < 8$. Løsningsmengde: $L = \\langle \\leftarrow, 8 \\rangle$' },
          { label: 'd', task: '$\\dfrac{x}{5} + 3 > 7$', solution: '$\\frac{x}{5} + 3 > 7 \\Rightarrow \\frac{x}{5} > 4 \\Rightarrow x > 20$. Løsningsmengde: $L = \\langle 20, \\rightarrow \\rangle$' },
          { label: 'e', task: '$\\dfrac{2x}{3} - 6 \\leq 2$', solution: '$\\frac{2x}{3} - 6 \\leq 2 \\Rightarrow \\frac{2x}{3} \\leq 8 \\Rightarrow 2x \\leq 24 \\Rightarrow x \\leq 12$. Løsningsmengde: $L = \\langle \\leftarrow, 12]$' },
          { label: 'f', task: '$\\dfrac{3x - 2}{3} \\geq 1$', solution: '$\\frac{3x - 2}{3} \\geq 1 \\Rightarrow 3x - 2 \\geq 3 \\Rightarrow 3x \\geq 5 \\Rightarrow x \\geq \\frac{5}{3}$. Løsningsmengde: $L = [\\frac{5}{3}, \\rightarrow \\rangle$' },
        ],
        solution: 'a) x < 4, b) x > 8, c) x < 8, d) x > 20, e) x ≤ 12, f) x ≥ 5/3',
        hints: ['Løs som en vanlig likning', 'Husk å skrive løsningsmengden som et intervall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Teori: Negative tall
    {
      id: '1t-4-2-negative-intro',
      type: 'text',
      content: `## Ulikheter der vi må gange eller dele med negative tall

Når vi ganger eller deler med et **negativt tall** på begge sider av en ulikhet, må vi **snu ulikhetstegnet**.

**Hvorfor?** Tenk på tallinjen: Når vi ganger med $-1$, bytter tallene side. For eksempel er $2 < 5$, men $-2 > -5$.

> **Husk:** $x$ kan være både positiv og negativ. Derfor er det **ikke lov** å gange med eller dele på $x$ på begge sider av en ulikhet (med mindre vi vet fortegnet til $x$).`,
    },

    // Eksempel 2: Negative tall
    {
      id: '1t-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Løs ulikhetene:

a) $-5x > 20$

b) $-\\dfrac{x - 2}{5} \\geq 3$`,
      solution: `**Løsning:**

**a)** $-5x > 20$

Vi må dele med $-5$ (negativt tall), så vi **snur ulikhetstegnet**:
$$-5x > 20 \\quad | \\div (-5)$$
$$x < -4$$

**Løsningsmengde:** $L = \\langle \\leftarrow, -4 \\rangle$

---

**b)** $-\\dfrac{x - 2}{5} \\geq 3$

Vi ganger med $-1$ (negativt tall), så vi **snur ulikhetstegnet**:
$$-\\frac{x - 2}{5} \\geq 3 \\quad | \\cdot (-1)$$
$$\\frac{x - 2}{5} \\leq -3 \\quad | \\cdot 5$$
$$x - 2 \\leq -15 \\quad | +2$$
$$x \\leq -13$$

**Løsningsmengde:** $L = \\langle \\leftarrow, -13]$`,
    },

    // Oppgave 2
    {
      id: '1t-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs ulikhetene',
        subTasks: [
          { label: 'a', task: '$-10x < 50$', solution: '$-10x < 50 \\Rightarrow x > -5$ (snur ulikhetstegnet). Løsningsmengde: $L = \\langle -5, \\rightarrow \\rangle$' },
          { label: 'b', task: '$-3x - 1 > 2x + 4$', solution: '$-3x - 1 > 2x + 4 \\Rightarrow -5x > 5 \\Rightarrow x < -1$. Løsningsmengde: $L = \\langle \\leftarrow, -1 \\rangle$' },
          { label: 'c', task: '$\\dfrac{x}{3} + 1 < 4$', solution: '$\\frac{x}{3} + 1 < 4 \\Rightarrow \\frac{x}{3} < 3 \\Rightarrow x < 9$. Løsningsmengde: $L = \\langle \\leftarrow, 9 \\rangle$' },
          { label: 'd', task: '$\\dfrac{x}{2} - 1 > \\dfrac{x}{3} + 2$', solution: '$\\frac{x}{2} - 1 > \\frac{x}{3} + 2 \\Rightarrow \\frac{x}{6} > 3 \\Rightarrow x > 18$. Løsningsmengde: $L = \\langle 18, \\rightarrow \\rangle$' },
          { label: 'e', task: '$\\dfrac{x}{2} - 5x \\leq 18$', solution: '$\\frac{x}{2} - 5x \\leq 18 \\Rightarrow -\\frac{9x}{2} \\leq 18 \\Rightarrow x \\geq -4$. Løsningsmengde: $L = [-4, \\rightarrow \\rangle$' },
          { label: 'f', task: '$\\dfrac{-x - 2}{2} \\geq \\dfrac{x + 3}{4}$', solution: '$\\frac{-x - 2}{2} \\geq \\frac{x + 3}{4} \\Rightarrow -2x - 4 \\geq x + 3 \\Rightarrow -3x \\geq 7 \\Rightarrow x \\leq -\\frac{7}{3}$. Løsningsmengde: $L = \\langle \\leftarrow, -\\frac{7}{3}]$' },
        ],
        solution: 'a) x > −5, b) x < −1, c) x < 9, d) x > 18, e) x ≥ −4, f) x ≤ −7/3',
        hints: ['Pass på å snu ulikhetstegnet når du ganger eller deler med negative tall', 'Samle alle x-ledd på én side'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_4_3_FORTEGNSLINJER: TextbookChapter = {
  id: '1t-4-3',
  courseId: '1t',
  chapterNumber: '4.3',
  title: 'Fortegnslinjer',
  description: 'Lær å bruke fortegnslinjer og fortegnsskjema til å analysere uttrykk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke fortegnsskjema til å løyse ulikskapar',
    'lage fortegnslinjer til polynomuttrykk',
  ],
  content: [
    {
      id: '1t-4-3-intro',
      type: 'text',
      content: `## Fortegnslinjer i fortegnsskjema

En **fortegnslinje** beskriver fortegnet til et uttrykk for alle mulige verdier av $x$.

### Slik tegner vi en fortegnslinje

For uttrykket $(x + 3)$:
- Finn nullpunktet: $x + 3 = 0 \\Rightarrow x = -3$
- For $x < -3$: uttrykket er **negativt** (stiplet linje)
- For $x = -3$: uttrykket er **null** (markeres med 0)
- For $x > -3$: uttrykket er **positivt** (heltrukket linje)

### Fortegnslinjer for ulike uttrykk

| Uttrykk | Fortegnslinje |
|---------|---------------|
| $x$ | Negativ for $x < 0$, null ved $x = 0$, positiv for $x > 0$ |
| $-x$ | Positiv for $x < 0$, null ved $x = 0$, negativ for $x > 0$ |
| $-2$ (konstant) | Alltid negativ |
| $3$ (konstant) | Alltid positiv |`,
    },

    // Eksempel 3
    {
      id: '1t-4-3-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Lag fortegnslinjene til tallet $-3$ og til funksjonen $(x - 6)$.

Bruk deretter disse fortegnslinjene til å lage fortegnslinjen til $f(x) = -3 \\cdot (x - 6)$.`,
      solution: `**Løsning:**

Vi setter opp fortegnslinjene:

**For $-3$:** En negativ konstant er alltid negativ.

**For $(x - 6)$:**
- Nullpunkt: $x - 6 = 0 \\Rightarrow x = 6$
- For $x < 6$: uttrykket er negativt
- For $x > 6$: uttrykket er positivt

**For $-3 \\cdot (x - 6)$:** Vi multipliserer fortegnslinjene i et **fortegnsskjema**:`,
    },

    // Fortegnsskjema for Eksempel 3
    {
      id: '1t-4-3-sign-diagram-3',
      type: 'sign-diagram',
      criticalPoints: ['6'],
      factors: [
        { label: '-3', signs: '---' },
        { label: '(x-6)', signs: '-0+' },
      ],
      resultLabel: '-3(x-6)',
    },

    {
      id: '1t-4-3-example-3-explanation',
      type: 'text',
      content: `**Forklaring:**
- Når $x < 6$: $(-) \\cdot (-) = +$
- Når $x = 6$: $(-) \\cdot 0 = 0$
- Når $x > 6$: $(-) \\cdot (+) = -$`,
    },

    // Oppgave 3
    {
      id: '1t-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag fortegnslinjer til uttrykkene',
        subTasks: [
          { label: 'a', task: '$-2$', solution: 'Konstanten $-2$ er alltid negativ. Fortegnslinjen er stiplet (negativ) over hele tallinjen.' },
          { label: 'b', task: '$(x + 3)$', solution: 'Nullpunkt ved $x = -3$. Negativ for $x < -3$, positiv for $x > -3$.' },
          { label: 'c', task: '$-2(x + 3)$', solution: 'Kombinerer: $(-)\\cdot(-) = +$ for $x < -3$, $(-)\\cdot 0 = 0$ ved $x = -3$, $(-)\\cdot(+) = -$ for $x > -3$. Altså positiv for $x < -3$, negativ for $x > -3$.' },
        ],
        solution: 'a) Alltid negativ, b) Negativ for x < −3, positiv for x > −3, c) Positiv for x < −3, negativ for x > −3',
        hints: ['Konstanter har samme fortegn for alle x-verdier', 'Finn nullpunktet først for lineære uttrykk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: '1t-4-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag fortegnslinjer til uttrykkene (husk å faktorisere først i oppgave c)',
        subTasks: [
          { label: 'a', task: '$(x - 2)$', solution: 'Nullpunkt ved $x = 2$. Negativ for $x < 2$, positiv for $x > 2$.' },
          { label: 'b', task: '$-3(x - 2)$', solution: 'Positiv for $x < 2$, null ved $x = 2$, negativ for $x > 2$.' },
          { label: 'c', task: '$-2x + 12$', solution: 'Faktoriserer: $-2x + 12 = -2(x - 6)$. Positiv for $x < 6$, null ved $x = 6$, negativ for $x > 6$.' },
        ],
        solution: 'a) Negativ for x < 2, positiv for x > 2, b) Positiv for x < 2, negativ for x > 2, c) Positiv for x < 6, negativ for x > 6',
        hints: ['Faktoriser uttrykket først', 'Husk at minus foran et positivt uttrykk gir negativt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 4: Løse ulikheter med fortegnsskjema
    {
      id: '1t-4-3-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Bruk fortegnsskjema til å løse ulikhetene:

a) $-5x - 10 < 0$

b) $-5x - 10 \\geq 0$`,
      solution: `**Løsning:**

Vi faktoriserer først: $-5x - 10 = -5(x + 2)$

**Fortegnsskjema:**`,
    },

    // Fortegnsskjema for Eksempel 4
    {
      id: '1t-4-3-sign-diagram-4',
      type: 'sign-diagram',
      criticalPoints: ['-2'],
      factors: [
        { label: '-5', signs: '---' },
        { label: '(x+2)', signs: '-0+' },
      ],
      resultLabel: '-5(x+2)',
    },

    {
      id: '1t-4-3-example-4-conclusion',
      type: 'text',
      content: `**a)** Vi ønsker å finne når $-5(x + 2) < 0$ (negativt).

Fra fortegnsskjemaet ser vi at uttrykket er negativt når $x > -2$.

**Løsning:** $x > -2$, eller $x \\in \\langle -2, \\infty \\rangle$

---

**b)** Vi ønsker å finne når $-5(x + 2) \\geq 0$ (større enn eller lik null).

Fra fortegnsskjemaet ser vi at uttrykket er positivt når $x < -2$, og null når $x = -2$.

**Løsning:** $x \\leq -2$, eller $x \\in \\langle -\\infty, -2]$`,
    },

    // Oppgave 5
    {
      id: '1t-4-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk fortegnsskjema til å løse ulikhetene',
        subTasks: [
          { label: 'a', task: '$(x + 4) < 0$', solution: 'Nullpunkt ved $x = -4$. Uttrykket er negativt for $x < -4$. Løsning: $x \\in \\langle -\\infty, -4 \\rangle$' },
          { label: 'b', task: '$-2(x + 1) > 0$', solution: 'Nullpunkt ved $x = -1$. Uttrykket er positivt for $x < -1$. Løsning: $x \\in \\langle -\\infty, -1 \\rangle$' },
          { label: 'c', task: '$5x - 10 \\leq 0$', solution: '$5(x - 2) \\leq 0$. Nullpunkt ved $x = 2$. Uttrykket er negativt eller null for $x \\leq 2$. Løsning: $x \\in \\langle -\\infty, 2]$' },
          { label: 'd', task: '$0 \\leq -2x - 4$', solution: '$-2(x + 2) \\geq 0$. Uttrykket er positivt eller null for $x \\leq -2$. Løsning: $x \\in \\langle -\\infty, -2]$' },
          { label: 'e', task: '$-7x + 14 < 21$', solution: '$-7(x - 2) < 21 \\Rightarrow -7x + 14 < 21 \\Rightarrow -7x < 7 \\Rightarrow x > -1$. Løsning: $x \\in \\langle -1, \\infty \\rangle$' },
          { label: 'f', task: '$-2x + 3 \\leq 2x - 1$', solution: '$-4x \\leq -4 \\Rightarrow x \\geq 1$. Løsning: $x \\in [1, \\infty \\rangle$' },
        ],
        solution: 'a) x < −4, b) x < −1, c) x ≤ 2, d) x ≤ −2, e) x > −1, f) x ≥ 1',
        hints: ['Faktoriser uttrykket først', 'Sett opp fortegnsskjema og les av svaret'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_4_4_ANDREGRADS: TextbookChapter = {
  id: '1t-4-4',
  courseId: '1t',
  chapterNumber: '4.4',
  title: 'Andregradsulikheter',
  description: 'Lær å løse andregradsulikheter ved hjelp av faktorisering og fortegnsskjema.',
  estimatedMinutes: 45,
  competenceGoals: [
    'løyse ulikskapar av andre grad',
    'bruke nullpunktsfaktorisering',
  ],
  content: [
    {
      id: '1t-4-4-intro',
      type: 'text',
      content: `## Ulikheter av annen grad

For å løse andregradsulikheter bruker vi **nullpunktsfaktorisering** og **fortegnsskjema**.

### Fremgangsmåte
1. **Faktoriser** andregradsuttrykket ved hjelp av nullpunktsfaktorisering eller sum/produkt-metoden
2. **Sett opp fortegnsskjema** med en linje for hver faktor
3. **Multipliser** fortegnslinjene for å finne fortegnet til produktet
4. **Les av svaret** fra fortegnsskjemaet

### Nullpunktsfaktorisering
$$ax^2 + bx + c = a(x - x_1)(x - x_2)$$

der $x_1$ og $x_2$ er løsningene på $ax^2 + bx + c = 0$ (funnet med abc-formelen eller faktorisering).`,
    },

    // Eksempel 5 (Eksempel 4 i PDF)
    {
      id: '1t-4-4-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: `Løs ulikhetene:

a) $x^2 - 12x + 35 < 0$

b) $-2x^2 + 10x - 12 \\geq 0$`,
      solution: `**Løsning:**

**a)** $x^2 - 12x + 35 < 0$

Vi faktoriserer (sum/produkt: to tall med sum 12 og produkt 35 → 5 og 7):
$$x^2 - 12x + 35 = (x - 5)(x - 7)$$

**Fortegnsskjema:**`,
    },

    // Fortegnsskjema for Eksempel 5a
    {
      id: '1t-4-4-sign-diagram-5a',
      type: 'sign-diagram',
      criticalPoints: ['5', '7'],
      factors: [
        { label: '(x-5)', signs: '-0+++' },
        { label: '(x-7)', signs: '---0+' },
      ],
      resultLabel: '(x-5)(x-7)',
    },

    {
      id: '1t-4-4-example-5a-conclusion',
      type: 'text',
      content: `Vi ønsker å finne når $(x-5)(x-7) < 0$ (negativt).

**Løsning:** $5 < x < 7$, eller $x \\in \\langle 5, 7 \\rangle$

---

**b)** $-2x^2 + 10x - 12 \\geq 0$

Vi faktoriserer:
$$-2x^2 + 10x - 12 = -2(x^2 - 5x + 6) = -2(x - 2)(x - 3)$$

**Fortegnsskjema:**`,
    },

    // Fortegnsskjema for Eksempel 5b
    {
      id: '1t-4-4-sign-diagram-5b',
      type: 'sign-diagram',
      criticalPoints: ['2', '3'],
      factors: [
        { label: '-2', signs: '-----' },
        { label: '(x-2)', signs: '-0+++' },
        { label: '(x-3)', signs: '---0+' },
      ],
      resultLabel: '-2(x-2)(x-3)',
    },

    {
      id: '1t-4-4-example-5b-conclusion',
      type: 'text',
      content: `Vi ønsker å finne når $-2(x-2)(x-3) \\geq 0$ (positivt eller null).

**Løsning:** $2 \\leq x \\leq 3$, eller $x \\in [2, 3]$`,
    },

    // Oppgave 6
    {
      id: '1t-4-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1t-4-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk fortegnsskjema til å løse ulikhetene',
        subTasks: [
          { label: 'a', task: '$(x - 2)(x + 3) > 0$', solution: 'Nullpunkter: $x = 2$ og $x = -3$. Produktet er positivt når $x < -3$ eller $x > 2$. Løsning: $x \\in \\langle -\\infty, -3 \\rangle \\cup \\langle 2, \\infty \\rangle$' },
          { label: 'b', task: '$-2(x - 1)(x + 4) < 0$', solution: 'Nullpunkter: $x = 1$ og $x = -4$. Produktet er negativt når $-4 < x < 1$. Løsning: $x \\in \\langle -4, 1 \\rangle$' },
          { label: 'c', task: '$x^2 - 4 \\leq 0$', solution: '$(x-2)(x+2) \\leq 0$. Løsning: $x \\in [-2, 2]$' },
          { label: 'd', task: '$x^2 - 4 \\geq 0$', solution: '$(x-2)(x+2) \\geq 0$. Løsning: $x \\in \\langle -\\infty, -2] \\cup [2, \\infty \\rangle$' },
        ],
        solution: 'a) x < −3 eller x > 2, b) −4 < x < 1, c) −2 ≤ x ≤ 2, d) x ≤ −2 eller x ≥ 2',
        hints: ['Finn nullpunktene til hver faktor', 'Sett opp fortegnsskjema med én linje per faktor'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: '1t-4-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '1t-4-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk fortegnsskjema til å løse ulikhetene',
        subTasks: [
          { label: 'a', task: '$x^2 + 3x + 2 \\geq 0$', solution: '$(x+1)(x+2) \\geq 0$. Nullpunkter: $x = -1$ og $x = -2$. Løsning: $x \\in \\langle -\\infty, -2] \\cup [-1, \\infty \\rangle$' },
          { label: 'b', task: '$x(x - 4)(x + 2) < 0$', solution: 'Nullpunkter: $x = 0$, $x = 4$, $x = -2$. Produktet er negativt når $x < -2$ eller $0 < x < 4$. Løsning: $x \\in \\langle -\\infty, -2 \\rangle \\cup \\langle 0, 4 \\rangle$' },
          { label: 'c', task: '$x^2 - 4x > 12$', solution: '$x^2 - 4x - 12 > 0 \\Rightarrow (x-6)(x+2) > 0$. Løsning: $x \\in \\langle -\\infty, -2 \\rangle \\cup \\langle 6, \\infty \\rangle$' },
          { label: 'd', task: '$-2x^2 + 16x - 30 < 0$', solution: '$-2(x^2 - 8x + 15) < 0 \\Rightarrow -2(x-3)(x-5) < 0$. Løsning: $x \\in \\langle -\\infty, 3 \\rangle \\cup \\langle 5, \\infty \\rangle$' },
        ],
        solution: 'a) x ≤ −2 eller x ≥ −1, b) x < −2 eller 0 < x < 4, c) x < −2 eller x > 6, d) x < 3 eller x > 5',
        hints: ['Flytt alt til én side først', 'Faktoriser ved nullpunktsfaktorisering eller sum/produkt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_4_5_RASJONALE: TextbookChapter = {
  id: '1t-4-5',
  courseId: '1t',
  chapterNumber: '4.5',
  title: 'Rasjonale ulikheter',
  description: 'Lær å løse ulikheter med brøker som inneholder variabler i nevneren.',
  estimatedMinutes: 50,
  competenceGoals: [
    'løyse rasjonale ulikskapar',
    'finne definisjonsmengda til rasjonale uttrykk',
  ],
  content: [
    {
      id: '1t-4-5-intro',
      type: 'text',
      content: `## Rasjonale ulikheter

Når vi har $x$ under brøkstreken, kan vi **ikke** behandle ulikheten som en vanlig likning.

> **Viktig:** Det er **ikke lov** å gange på begge sider av en ulikhet med ukjente uttrykk (som $x$ eller $x + 3$). Dette er fordi vi ikke vet om uttrykket er positivt eller negativt.

### Fremgangsmåte
1. **Flytt alt til én side** slik at du får $\\frac{\\text{noe}}{\\text{noe}} \\gtrless 0$
2. **Faktoriser** teller og nevner
3. **Sett opp fortegnsskjema** med én linje for hver faktor
4. **Husk:** Der nevneren er null, er uttrykket **udefinert** (markeres med $\\not\\exists$ eller hull)

### Fortegnslinje for $\\frac{1}{x}$

Uttrykket $\\frac{1}{x}$ er:
- **Negativt** for $x < 0$
- **Udefinert** ved $x = 0$
- **Positivt** for $x > 0$`,
    },

    // Eksempel 6 (Eksempel 5 i PDF)
    {
      id: '1t-4-5-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: `Lag fortegnslinjen til:

a) $\\dfrac{4}{x}$

b) $\\dfrac{-3}{x - 2}$

c) $\\dfrac{-2x + 4}{x + 1}$`,
      solution: '',
      solutionContent: [
        {
          type: 'text',
          content: `**Løsning:**

**a)** $\\dfrac{4}{x} = 4 \\cdot \\dfrac{1}{x}$`,
        },
        {
          type: 'sign-diagram',
          criticalPoints: ['0'],
          factors: [
            { label: '4', signs: '+++' },
            { label: '\\frac{1}{x}', signs: '-u+' },
          ],
          resultLabel: '\\frac{4}{x}',
        },
        {
          type: 'text',
          content: `---

**b)** $\\dfrac{-3}{x - 2} = -3 \\cdot \\dfrac{1}{x - 2}$`,
        },
        {
          type: 'sign-diagram',
          criticalPoints: ['2'],
          factors: [
            { label: '-3', signs: '---' },
            { label: '\\frac{1}{x-2}', signs: '-u+' },
          ],
          resultLabel: '\\frac{-3}{x-2}',
        },
        {
          type: 'text',
          content: `---

**c)** $\\dfrac{-2x + 4}{x + 1} = \\dfrac{-2(x - 2)}{x + 1} = -2 \\cdot (x - 2) \\cdot \\dfrac{1}{x + 1}$`,
        },
        {
          type: 'sign-diagram',
          criticalPoints: ['-1', '2'],
          factors: [
            { label: '-2', signs: '-----' },
            { label: '(x-2)', signs: '---0+' },
            { label: '\\frac{1}{x+1}', signs: '-u+++' },
          ],
          resultLabel: '\\text{Produkt}',
        },
      ],
    },

    // Oppgave 8 (hører til Eksempel 6)
    {
      id: '1t-4-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '1t-4-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag fortegnsskjema til uttrykkene',
        subTasks: [
          { label: 'a', task: '$\\dfrac{7}{x}$', solution: 'Positiv for $x > 0$, udefinert ved $x = 0$, negativ for $x < 0$.' },
          { label: 'b', task: '$\\dfrac{2}{x + 1}$', solution: 'Positiv for $x > -1$, udefinert ved $x = -1$, negativ for $x < -1$.' },
          { label: 'c', task: '$\\dfrac{-5}{x - 2}$', solution: 'Negativ for $x > 2$, udefinert ved $x = 2$, positiv for $x < 2$.' },
          { label: 'd', task: '$\\dfrac{x - 2}{x + 4}$', solution: 'Nullpunkt ved $x = 2$, udefinert ved $x = -4$. Positiv for $x < -4$ og $x > 2$, negativ for $-4 < x < 2$.' },
          { label: 'e', task: '$\\dfrac{-2(x + 1)}{(x - 6)(x - 1)}$', solution: 'Nullpunkt ved $x = -1$, udefinert ved $x = 1$ og $x = 6$. Sett opp fortegnsskjema med fire linjer.' },
          { label: 'f', task: '$\\dfrac{-3x + 12}{x^2 - 4x + 3}$', solution: 'Faktoriser: $\\frac{-3(x-4)}{(x-1)(x-3)}$. Nullpunkt ved $x = 4$, udefinert ved $x = 1$ og $x = 3$.' },
        ],
        solution: 'Se løsningsforslag for detaljerte fortegnsskjemaer',
        hints: ['Faktoriser teller og nevner først', 'Husk at uttrykket er udefinert der nevneren er null'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 7 (Eksempel 6 i PDF)
    {
      id: '1t-4-5-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: `Løs ulikhetene:

a) $\\dfrac{x - 3}{x} \\geq 0$

b) $\\dfrac{-3}{(x + 2)(x - 1)} \\geq 0$`,
      solution: '',
      solutionContent: [
        {
          type: 'text',
          content: `**Løsning:**

**a)** $\\dfrac{x - 3}{x} \\geq 0$

Vi skriver om: $(x - 3) \\cdot \\dfrac{1}{x} \\geq 0$`,
        },
        {
          type: 'sign-diagram',
          criticalPoints: ['0', '3'],
          factors: [
            { label: '(x-3)', signs: '---0+' },
            { label: '\\frac{1}{x}', signs: '-u+++' },
          ],
          resultLabel: '\\frac{x-3}{x}',
        },
        {
          type: 'text',
          content: `Vi ser at $\\frac{x-3}{x} \\geq 0$ når $x < 0$ eller $x \\geq 3$.

**Merk:** Ved $x = 0$ er uttrykket udefinert, så vi inkluderer ikke dette punktet.

**Løsning:** $x \\in \\langle -\\infty, 0 \\rangle \\cup [3, \\infty \\rangle$

---

**b)** $\\dfrac{-3}{(x + 2)(x - 1)} \\geq 0$

Vi skriver om: $-3 \\cdot \\dfrac{1}{x + 2} \\cdot \\dfrac{1}{x - 1} \\geq 0$`,
        },
        {
          type: 'sign-diagram',
          criticalPoints: ['-2', '1'],
          factors: [
            { label: '-3', signs: '-----' },
            { label: '\\frac{1}{x+2}', signs: '-u+++' },
            { label: '\\frac{1}{x-1}', signs: '---u+' },
          ],
          resultLabel: '\\text{Produkt}',
        },
        {
          type: 'text',
          content: `Vi ser at uttrykket er $\\geq 0$ når $-2 < x < 1$.

**Merk:** Uttrykket er aldri lik 0 (telleren er konstant $-3$), så vi bruker streng ulikhet ved endepunktene.

**Løsning:** $x \\in \\langle -2, 1 \\rangle$`,
        },
      ],
    },

    // Oppgave 9 (hører til Eksempel 7)
    {
      id: '1t-4-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '1t-4-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs ulikhetene ved hjelp av fortegnsskjema',
        subTasks: [
          { label: 'a', task: '$\\dfrac{-3}{x} < 0$', solution: 'Løsning: $x > 0$, eller $x \\in \\langle 0, \\infty \\rangle$' },
          { label: 'b', task: '$\\dfrac{5}{x - 3} \\leq 0$', solution: 'Uttrykket er aldri null. Negativt for $x < 3$. Løsning: $x \\in \\langle -\\infty, 3 \\rangle$' },
          { label: 'c', task: '$\\dfrac{3}{2x - 10} > 0$', solution: '$\\frac{3}{2(x-5)} > 0$. Positivt for $x > 5$. Løsning: $x \\in \\langle 5, \\infty \\rangle$' },
          { label: 'd', task: '$\\dfrac{3x + 6}{x - 5} \\leq 0$', solution: '$\\frac{3(x+2)}{x-5} \\leq 0$. Løsning: $x \\in [-2, 5 \\rangle$' },
          { label: 'e', task: '$\\dfrac{-2x - 6}{(x + 2)(x - 10)} < 0$', solution: '$\\frac{-2(x+3)}{(x+2)(x-10)} < 0$. Løsning: $x \\in \\langle -3, -2 \\rangle \\cup \\langle 10, \\infty \\rangle$' },
          { label: 'f', task: '$\\dfrac{x + 12}{x^2 - 4} \\leq 0$', solution: '$\\frac{x+12}{(x-2)(x+2)} \\leq 0$. Løsning: $x \\in [-12, -2 \\rangle \\cup \\langle 2, \\infty \\rangle$... Vent, la meg sjekke: Negativ for $x < -12$, $-2 < x < 2$, positiv for $-12 < x < -2$ og $x > 2$. Løsning: $x \\in \\langle -\\infty, -12] \\cup \\langle -2, 2 \\rangle$' },
        ],
        solution: 'a) x > 0, b) x < 3, c) x > 5, d) −2 ≤ x < 5, e) −3 < x < −2 eller x > 10, f) x ≤ −12 eller −2 < x < 2',
        hints: ['Flytt alt til én side slik at du får brøk ≷ 0', 'Faktoriser teller og nevner', 'Husk at løsningen ikke kan inkludere verdier der nevneren er null'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 8 (Eksempel 7 i PDF)
    {
      id: '1t-4-5-example-8',
      type: 'example',
      title: 'Eksempel 8',
      problem: `Løs ulikhetene:

a) $\\dfrac{8}{x} < 4$

b) $\\dfrac{2}{x - 4} + 2 \\leq 0$`,
      solution: '',
      solutionContent: [
        {
          type: 'text',
          content: `**Løsning:**

**a)** $\\dfrac{8}{x} < 4$

Vi flytter alt til én side:
$$\\frac{8}{x} - 4 < 0$$
$$\\frac{8}{x} - \\frac{4x}{x} < 0$$
$$\\frac{8 - 4x}{x} < 0$$
$$\\frac{-4(x - 2)}{x} < 0$$`,
        },
        {
          type: 'sign-diagram',
          criticalPoints: ['0', '2'],
          factors: [
            { label: '-4', signs: '-----' },
            { label: '(x-2)', signs: '---0+' },
            { label: '\\frac{1}{x}', signs: '-u+++' },
          ],
          resultLabel: '\\text{Produkt}',
        },
        {
          type: 'text',
          content: `Vi ønsker å finne når produktet er negativt ($< 0$).

**Løsning:** $x \\in \\langle -\\infty, 0 \\rangle \\cup \\langle 2, \\infty \\rangle$

---

**b)** $\\dfrac{2}{x - 4} + 2 \\leq 0$

Vi skriver om med felles nevner:
$$\\frac{2}{x - 4} + \\frac{2(x - 4)}{x - 4} \\leq 0$$
$$\\frac{2 + 2x - 8}{x - 4} \\leq 0$$
$$\\frac{2x - 6}{x - 4} \\leq 0$$
$$\\frac{2(x - 3)}{x - 4} \\leq 0$$`,
        },
        {
          type: 'sign-diagram',
          criticalPoints: ['3', '4'],
          factors: [
            { label: '2', signs: '+++++' },
            { label: '(x-3)', signs: '-0+++' },
            { label: '\\frac{1}{x-4}', signs: '---u+' },
          ],
          resultLabel: '\\text{Produkt}',
        },
        {
          type: 'text',
          content: `Vi ønsker å finne når produktet er $\\leq 0$.

**Løsning:** $x \\in [3, 4 \\rangle$`,
        },
      ],
    },

    // Oppgave 10 (hører til Eksempel 8)
    {
      id: '1t-4-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: '1t-4-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs ulikhetene (flytt alt til én side først)',
        subTasks: [
          { label: 'a', task: '$\\dfrac{6}{x} < 3$', solution: '$\\frac{6-3x}{x} < 0 \\Rightarrow \\frac{-3(x-2)}{x} < 0$. Løsning: $x \\in \\langle -\\infty, 0 \\rangle \\cup \\langle 2, \\infty \\rangle$' },
          { label: 'b', task: '$\\dfrac{5}{x - 2} + \\dfrac{1}{x} \\leq 0$', solution: 'Felles nevner: $\\frac{5x + (x-2)}{x(x-2)} = \\frac{6x-2}{x(x-2)} \\leq 0$. Løsning: $x \\in \\langle 0, \\frac{1}{3}] \\cup \\langle 2, \\infty \\rangle$... Vent, $6x - 2 = 0$ gir $x = 1/3$. Løsning: $x \\in \\langle -\\infty, 0 \\rangle \\cup [\\frac{1}{3}, 2 \\rangle$' },
          { label: 'c', task: '$\\dfrac{3}{2x - 10} > 0$', solution: '$\\frac{3}{2(x-5)} > 0$. Positivt for $x > 5$. Løsning: $x \\in \\langle 5, \\infty \\rangle$' },
          { label: 'd', task: '$\\dfrac{3x + 6}{x - 5} \\leq 0$', solution: '$\\frac{3(x+2)}{x-5} \\leq 0$. Løsning: $x \\in [-2, 5 \\rangle$' },
          { label: 'e', task: '$\\dfrac{-2x - 6}{(x + 2)(x - 10)} < 0$', solution: '$\\frac{-2(x+3)}{(x+2)(x-10)} < 0$. Løsning: $x \\in \\langle -\\infty, -3 \\rangle \\cup \\langle -2, 10 \\rangle$' },
          { label: 'f', task: '$\\dfrac{x + 12}{x^2 - 4} \\leq 0$', solution: '$\\frac{x+12}{(x-2)(x+2)} \\leq 0$. Løsning: $x \\in \\langle -\\infty, -12] \\cup \\langle -2, 2 \\rangle$' },
        ],
        solution: 'a) x < 0 eller x > 2, b) x < 0 eller 1/3 ≤ x < 2, c) x > 5, d) −2 ≤ x < 5, e) x < −3 eller −2 < x < 10, f) x ≤ −12 eller −2 < x < 2',
        hints: ['Skriv om slik at du får én brøk på venstre side og 0 på høyre side', 'Bruk felles nevner når du har flere brøker'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_7_1_VEKSTFART: TextbookChapter = {
  id: '1t-7-1',
  courseId: '1t',
  chapterNumber: '7.1',
  title: 'Gjennomsnittlig vekstfart',
  description: 'Forstå og beregne gjennomsnittlig vekstfart mellom to punkter på en graf.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forstå begrepet gjennomsnittlig vekstfart',
    'beregne gjennomsnittlig vekstfart for en funksjon i et intervall',
    'tolke gjennomsnittlig vekstfart grafisk som stigningstallet til en sekant',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '1t-7-1-intro',
      type: 'text',
      content: `## Stigningstall og vekstfart

Før vi ser på vekstfart, må vi forstå **stigningstall**. Stigningstallet forteller oss hvor bratt en linje er.

$\\Delta$ (delta) betyr *endring* i matematikken:
- $\\Delta x$ betyr endringen i $x$-verdien
- $\\Delta y$ betyr endringen i $y$-verdien`,
    },

    // Definisjon: Stigningstall
    {
      id: '1t-7-1-def-stigningstall',
      type: 'definition',
      title: 'Stigningstall',
      content: `Når vi har to punkter $P_1 = (x_1, y_1)$ og $P_2 = (x_2, y_2)$ på en linje, er stigningstallet $a$ gitt ved:

$$a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$

Stigningstallet forteller hvor mye $y$-verdien endres når $x$-verdien øker med 1.`,
    },

    // Eksempel 1: Stigningstall
    {
      id: '1t-7-1-ex1',
      type: 'example',
      title: 'Eksempel 1: Finn stigningstallet',
      problem: 'Finn stigningstallet til linjen som går gjennom punktene $(1, 3)$ og $(3, 9)$.',
      solution: `**Løsning:**

Vi velger $P_1 = (1, 3)$ og $P_2 = (3, 9)$.

Fra $P_1$ ser vi at $x_1 = 1$ og $y_1 = 3$.
Fra $P_2$ ser vi at $x_2 = 3$ og $y_2 = 9$.

$$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 3}{3 - 1} = \\frac{6}{2} = 3$$

Stigningstallet er $a = 3$, som betyr at $y$-verdien øker med 3 når $x$-verdien øker med 1.`,
    },

    // Oppgave 1: Stigningstall
    {
      id: '1t-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-7-1-oppg-1',
        number: '7.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn stigningstallet til en linje som går gjennom punktene',
        subTasks: [
          { label: 'a', task: '$P_1 = (1, 3)$ og $P_2 = (4, 9)$', solution: '$a = \\frac{9-3}{4-1} = \\frac{6}{3} = 2$' },
          { label: 'b', task: '$(-1, -2)$ og $(1, -4)$', solution: '$a = \\frac{-4-(-2)}{1-(-1)} = \\frac{-2}{2} = -1$' },
          { label: 'c', task: '$(2, 5)$ og $(-1, -4)$', solution: '$a = \\frac{-4-5}{-1-2} = \\frac{-9}{-3} = 3$' },
          { label: 'd', task: '$(1, 3)$ og $(5, 5)$', solution: '$a = \\frac{5-3}{5-1} = \\frac{2}{4} = 0.5$' },
        ],
        solution: 'a) 2, b) −1, c) 3, d) 0.5',
        hints: ['Bruk formelen $a = \\frac{y_2 - y_1}{x_2 - x_1}$', 'Vær nøye med fortegnene når du regner med negative tall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Ettpunktsformelen
    {
      id: '1t-7-1-ettpunktsformel',
      type: 'text',
      content: `## Ettpunktsformelen

Ettpunktsformelen bruker ett punkt på linjen og stigningstallet til å finne likningen for hele linjen.`,
    },

    {
      id: '1t-7-1-def-ettpunkt',
      type: 'definition',
      title: 'Ettpunktsformelen',
      content: `Om en linje har stigningstall $a$ og går gjennom punktet $(x_0, y_0)$, kan vi bruke:

$$y - y_0 = a(x - x_0)$$

til å finne likningen for linjen.`,
    },

    // Illustrasjon: Ettpunktsformelen
    {
      id: '1t-7-1-ettpunktsformel-bilde',
      type: 'image',
      src: '/images/functions/ettpunktsformel.svg',
      alt: 'Ettpunktsformelen: finn likningen til en linje fra et punkt og stigningstall',
      caption: 'Ettpunktsformelen bruker et punkt og stigningstallet',
    },

    // Eksempel 2: Ettpunktsformelen
    {
      id: '1t-7-1-ex2',
      type: 'example',
      title: 'Eksempel 2: Bruk ettpunktsformelen',
      problem: 'Finn likningen til en linje som går gjennom punktet $(1, 2)$ og har stigningstallet 3.',
      solution: `**Løsning:**

Her ser vi at $(x_0, y_0) = (1, 2)$, altså $x_0 = 1$, $y_0 = 2$ og stigningstallet $a = 3$.

Vi setter inn i ettpunktsformelen:
$$y - y_0 = a(x - x_0)$$
$$y - 2 = 3(x - 1)$$
$$y - 2 = 3x - 3$$
$$y = 3x - 1$$`,
    },

    // Oppgave 2: Ettpunktsformelen
    {
      id: '1t-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-7-1-oppg-2',
        number: '7.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn likningen for linjen som',
        subTasks: [
          { label: 'a', task: 'går gjennom punktet $(x_0, y_0) = (1, 0)$ og har stigningstall $a = 3$', solution: '$y - 0 = 3(x - 1) \\Rightarrow y = 3x - 3$' },
          { label: 'b', task: 'går gjennom punktet $(2, -3)$ og har stigningstallet $a = -2$', solution: '$y - (-3) = -2(x - 2) \\Rightarrow y + 3 = -2x + 4 \\Rightarrow y = -2x + 1$' },
          { label: 'c', task: 'går gjennom punktet $(1, 3)$ og har stigningstallet $a = 0$', solution: '$y - 3 = 0(x - 1) \\Rightarrow y = 3$' },
        ],
        solution: 'a) $y = 3x - 3$, b) $y = -2x + 1$, c) $y = 3$',
        hints: ['Sett inn verdiene i formelen $y - y_0 = a(x - x_0)$', 'Løs for $y$ for å få likningen på formen $y = ax + b$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Illustrasjon: To-punkts-formelen
    {
      id: '1t-7-1-topunktsformel-bilde',
      type: 'image',
      src: '/images/functions/to-punkts-formel.svg',
      alt: 'To-punkts-formelen: finn likningen til en linje gjennom to punkter',
      caption: 'Med to punkter kan vi finne stigningstallet og deretter likningen',
    },

    // Eksempel 3: Linje gjennom to punkter
    {
      id: '1t-7-1-ex3',
      type: 'example',
      title: 'Eksempel 3: Linje gjennom to punkter',
      problem: 'Finn likningen til en linje som går gjennom punktene $(1, 5)$ og $(3, 9)$.',
      solution: `**Løsning:**

Vi finner først stigningstallet til linjen gjennom de 2 punktene:
$$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 5}{3 - 1} = \\frac{4}{2} = 2$$

Vi velger $(1, 5)$ som $(x_0, y_0)$ og bruker ettpunktsformelen:
$$y - y_0 = a(x - x_0)$$
$$y - 5 = 2(x - 1)$$
$$y - 5 = 2x - 2$$
$$y = 2x + 3$$`,
    },

    // Oppgave 3
    {
      id: '1t-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-7-1-oppg-3',
        number: '7.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn likningen til en linje som går gjennom punktene',
        subTasks: [
          { label: 'a', task: '$(1, 3)$ og $(5, 7)$', solution: '$a = \\frac{7-3}{5-1} = 1$, så $y - 3 = 1(x-1) \\Rightarrow y = x + 2$' },
          { label: 'b', task: '$(0, 3)$ og $(5, 13)$', solution: '$a = \\frac{13-3}{5-0} = 2$, så $y - 3 = 2(x-0) \\Rightarrow y = 2x + 3$' },
          { label: 'c', task: '$(1, -2)$ og $(3, -4)$', solution: '$a = \\frac{-4-(-2)}{3-1} = -1$, så $y - (-2) = -1(x-1) \\Rightarrow y = -x - 1$' },
          { label: 'd', task: '$(2, 5)$ og $(4, 5)$', solution: '$a = \\frac{5-5}{4-2} = 0$, så $y = 5$' },
        ],
        solution: 'a) $y = x + 2$, b) $y = 2x + 3$, c) $y = -x - 1$, d) $y = 5$',
        hints: ['Finn først stigningstallet mellom de to punktene', 'Bruk så ettpunktsformelen med ett av punktene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Gjennomsnittlig vekstfart
    {
      id: '1t-7-1-gj-vekstfart',
      type: 'text',
      content: `## Gjennomsnittlig vekstfart

Nå som vi kan finne stigningstall, kan vi se på **gjennomsnittlig vekstfart** for en funksjon.

Gjennomsnittlig vekstfart beskriver hvor mye funksjonsverdien i gjennomsnitt endrer seg per enhet $x$ i et gitt intervall. Grafisk er dette stigningstallet til **sekanten** (linjen som skjærer grafen i to punkter).`,
    },

    {
      id: '1t-7-1-def-gjvekst',
      type: 'definition',
      title: 'Gjennomsnittlig vekstfart',
      content: `Den gjennomsnittlige vekstfarten til en funksjon $f$ i intervallet $[x_1, x_2]$ er stigningstallet til linjen (sekanten) gjennom punktene $(x_1, f(x_1))$ og $(x_2, f(x_2))$:

$$\\text{Gjennomsnittlig vekstfart} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$$`,
    },

    // GeoGebra for visualisering
    {
      id: '1t-7-1-geogebra',
      type: 'geogebra',
      title: 'Utforsk gjennomsnittlig vekstfart',
      description: 'Prøv å tegne en funksjon og en sekant. Bruk kommandoen Stigning(linje) for å finne stigningstallet til sekanten.',
      appType: 'graphing',
      commands: [
        'f(x) = x^2 - 1',
        'A = (-1, f(-1))',
        'B = (2, f(2))',
        'sekant = Linje(A, B)',
      ],
    },

    // Eksempel 4: Gjennomsnittlig vekstfart
    {
      id: '1t-7-1-ex4',
      type: 'example',
      title: 'Eksempel 4: Gjennomsnittlig vekstfart',
      problem: 'La $f(x) = x^2 - 1$. Finn gjennomsnittlig vekstfart når $x \\in [-2, 1]$.',
      solution: `**Løsning:**

Vi trenger å finne stigningstallet til linjen som går gjennom punktene $A = (-2, f(-2))$ og $B = (1, f(1))$.

Vi begynner med å finne $f(-2)$ og $f(1)$:
$$f(-2) = (-2)^2 - 1 = 4 - 1 = 3$$
$$f(1) = 1^2 - 1 = 1 - 1 = 0$$

Vi har nå altså punktene $A = (-2, 3)$ og $B = (1, 0)$.

$$\\text{Gjennomsnittlig vekstfart} = \\frac{f(1) - f(-2)}{1 - (-2)} = \\frac{0 - 3}{1 + 2} = \\frac{-3}{3} = -1$$

Den gjennomsnittlige vekstfarten til $f(x)$ i intervallet $x \\in [-2, 1]$ er altså lik $-1$.`,
    },

    // Oppgave 4
    {
      id: '1t-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-7-1-oppg-4',
        number: '7.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'La $f(x) = x^2 - 3x + 2$. Finn den gjennomsnittlige vekstfarten i intervallene:',
        subTasks: [
          { label: 'a', task: '$x \\in [1, 5]$', solution: '$f(1) = 0$, $f(5) = 12$. Vekstfart $= \\frac{12-0}{5-1} = \\frac{12}{4} = 3$' },
          { label: 'b', task: '$x \\in [-2, 2]$', solution: '$f(-2) = 12$, $f(2) = 0$. Vekstfart $= \\frac{0-12}{2-(-2)} = \\frac{-12}{4} = -3$' },
          { label: 'c', task: '$x \\in [1, 2]$', solution: '$f(1) = 0$, $f(2) = 0$. Vekstfart $= \\frac{0-0}{2-1} = 0$' },
        ],
        solution: 'a) 3, b) −3, c) 0',
        hints: ['Regn først ut $f(x_1)$ og $f(x_2)$', 'Bruk formelen for gjennomsnittlig vekstfart'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5: Praktisk anvendelse
    {
      id: '1t-7-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-7-1-oppg-5',
        number: '7.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: `En ball kastes opp i luften. Høyden $h$ (i meter) over bakken etter $t$ sekunder er gitt ved:
$$h(t) = -5t^2 + 20t + 1$$

Finn den gjennomsnittlige hastigheten (vekstfarten) til ballen i de gitte tidsintervallene:`,
        subTasks: [
          { label: 'a', task: '$t \\in [0, 1]$', solution: '$h(0) = 1$, $h(1) = 16$. Gjennomsnittlig hastighet $= \\frac{16-1}{1-0} = 15$ m/s' },
          { label: 'b', task: '$t \\in [1, 2]$', solution: '$h(1) = 16$, $h(2) = 21$. Gjennomsnittlig hastighet $= \\frac{21-16}{2-1} = 5$ m/s' },
          { label: 'c', task: '$t \\in [2, 3]$', solution: '$h(2) = 21$, $h(3) = 16$. Gjennomsnittlig hastighet $= \\frac{16-21}{3-2} = -5$ m/s' },
        ],
        solution: 'a) 15 m/s, b) 5 m/s, c) −5 m/s (negativ betyr at ballen er på vei ned)',
        hints: ['Gjennomsnittlig hastighet er det samme som gjennomsnittlig vekstfart for høydefunksjonen', 'Negativ hastighet betyr at ballen beveger seg nedover'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: '1t-7-1-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Stigningstallet til en linje gjennom to punkter er $a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$
- Ettpunktsformelen: $y - y_0 = a(x - x_0)$
- Gjennomsnittlig vekstfart i intervallet $[x_1, x_2]$: $\\frac{f(x_2) - f(x_1)}{x_2 - x_1}$
- Grafisk er gjennomsnittlig vekstfart stigningstallet til sekanten`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_7_2_MOMENTAN: TextbookChapter = {
  id: '1t-7-2',
  courseId: '1t',
  chapterNumber: '7.2',
  title: 'Momentan vekstfart',
  description: 'Forstå begrepet momentan vekstfart og sammenhengen med tangenten til en graf.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forstå begrepet momentan vekstfart',
    'se sammenhengen mellom momentan vekstfart og tangent',
    'bruke tangenten til å finne momentan vekstfart grafisk',
  ],
  content: [
    // Introduksjon
    {
      id: '1t-7-2-intro',
      type: 'text',
      content: `## Fra gjennomsnittlig til momentan vekstfart

I forrige kapittel så vi på gjennomsnittlig vekstfart mellom to punkter. Men hva om vi vil vite vekstfarten i ett *spesifikt* punkt på grafen?

Tenk deg at du kjører bil. Speedometeret viser ikke gjennomsnittsfarten din over en time – det viser farten *akkurat nå*. Dette kalles **momentan vekstfart** eller **øyeblikkelig vekstfart**.`,
    },

    // Definisjon
    {
      id: '1t-7-2-def',
      type: 'definition',
      title: 'Momentan vekstfart',
      content: `Den **momentane vekstfarten** til en funksjon $f$ i et punkt $x = a$ er stigningstallet til **tangenten** til grafen i punktet $(a, f(a))$.

Tangenten er den rette linjen som bare berører grafen i ett punkt og har samme retning som grafen i det punktet.`,
    },

    {
      id: '1t-7-2-text1',
      type: 'text',
      content: `## Finne momentan vekstfart grafisk

Hvis vi har en graf, kan vi finne den momentane vekstfarten ved å:
1. Tegne tangenten til grafen i det aktuelle punktet
2. Finne stigningstallet til tangenten

For å finne stigningstallet, trenger vi to punkter på tangentlinjen.`,
    },

    // GeoGebra for å visualisere tangent
    {
      id: '1t-7-2-geogebra',
      type: 'geogebra',
      title: 'Utforsk tangent og momentan vekstfart',
      description: 'Flytt punkt A langs grafen og se hvordan tangenten og dens stigningstall endres.',
      appType: 'graphing',
      commands: [
        'f(x) = x^2 - 1',
        'A = (2, f(2))',
        't = Tangent(A, f)',
        'stigning = Stigning(t)',
      ],
    },

    // Eksempel 1
    {
      id: '1t-7-2-ex1',
      type: 'example',
      title: 'Eksempel 1: Momentan vekstfart fra graf',
      problem: 'Funksjonen $f(x) = x^2 - 1$ har en tangent i punktet $(2, 3)$ som også går gjennom punktet $(3, 7)$. Finn den momentane vekstfarten når $x = 2$.',
      solution: `**Løsning:**

Tangenten til $f(x)$ når $x = 2$ går gjennom punktene $(2, 3)$ og $(3, 7)$.

Vi finner stigningstallet til tangentlinjen:
$$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - 3}{3 - 2} = \\frac{4}{1} = 4$$

Stigningstallet til tangenten er $4$, som betyr at den **momentane vekstfarten** til funksjonen er $4$ når $x = 2$.`,
    },

    // Note om sammenhengen
    {
      id: '1t-7-2-note',
      type: 'note',
      content: `**Viktig sammenheng:**
- Gjennomsnittlig vekstfart → Stigningstallet til **sekanten** (linje gjennom to punkter på grafen)
- Momentan vekstfart → Stigningstallet til **tangenten** (linje som berører grafen i ett punkt)

Når vi lar de to punktene på sekanten nærme seg hverandre, vil sekanten nærme seg tangenten!`,
    },

    // Tekst om grenseverdi-intuisjon
    {
      id: '1t-7-2-grense',
      type: 'text',
      content: `## Fra sekant til tangent

Tenk deg at vi har to punkter på grafen: $A = (a, f(a))$ og $B = (a + h, f(a + h))$.

Gjennomsnittlig vekstfart mellom disse er:
$$\\frac{f(a + h) - f(a)}{h}$$

Når vi lar $h$ bli mindre og mindre (nærme seg 0), vil punktet $B$ nærme seg $A$, og sekanten vil nærme seg tangenten. Den momentane vekstfarten er grenseverdien av dette uttrykket når $h \\to 0$.`,
    },

    // Oppgave 1
    {
      id: '1t-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-7-2-oppg-1',
        number: '7.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: `Funksjonen $g(x) = x^2 + 2x$ har en tangent i punktet $x = 1$.

a) Finn funksjonsverdien $g(1)$.
b) Bruk GeoGebra til å tegne tangenten og finn stigningstallet.
c) Hva er den momentane vekstfarten til $g(x)$ når $x = 1$?`,
        solution: `a) $g(1) = 1^2 + 2 \\cdot 1 = 3$, så punktet er $(1, 3)$.
b) I GeoGebra: Tangent((1, g(1)), g) gir tangenten. Stigning(tangent) gir 4.
c) Momentan vekstfart = stigningstallet til tangenten = 4`,
        hints: ['Bruk GeoGebra-kommandoen Tangent(punkt, funksjon)', 'Stigningstallet til tangenten ER den momentane vekstfarten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: '1t-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-7-2-oppg-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: `Grafen til funksjonen $f$ har en tangent i punktet $P = (3, 5)$. Tangenten går også gjennom punktet $Q = (5, 11)$.

a) Finn stigningstallet til tangenten.
b) Hva er den momentane vekstfarten til $f$ når $x = 3$?
c) Skriv opp likningen for tangenten.`,
        subTasks: [
          { label: 'a', task: 'Finn stigningstallet til tangenten', solution: '$a = \\frac{11-5}{5-3} = \\frac{6}{2} = 3$' },
          { label: 'b', task: 'Hva er den momentane vekstfarten til $f$ når $x = 3$?', solution: 'Momentan vekstfart = stigningstallet = 3' },
          { label: 'c', task: 'Skriv opp likningen for tangenten', solution: '$y - 5 = 3(x - 3) \\Rightarrow y = 3x - 4$' },
        ],
        solution: 'a) 3, b) 3, c) $y = 3x - 4$',
        hints: ['Stigningstallet finner du med formelen for stigningstall', 'Momentan vekstfart = stigningstallet til tangenten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Praktisk
    {
      id: '1t-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-7-2-oppg-3',
        number: '7.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: `En bil kjører langs en rett vei. Avstanden $s$ (i km) fra startpunktet etter $t$ timer er gitt ved $s(t) = t^2 + 4t$.

a) Finn avstanden etter 2 timer.
b) Finn gjennomsnittsfarten mellom $t = 1$ og $t = 3$ timer.
c) Bruk GeoGebra til å finne momentanfarten (øyeblikkelig fart) når $t = 2$.`,
        solution: `a) $s(2) = 4 + 8 = 12$ km
b) Gjennomsnittsfart $= \\frac{s(3) - s(1)}{3-1} = \\frac{21 - 5}{2} = 8$ km/t
c) Momentanfart når $t = 2$ er stigningstallet til tangenten = 8 km/t`,
        hints: ['Gjennomsnittsfart = gjennomsnittlig vekstfart for avstandsfunksjonen', 'Momentanfart = momentan vekstfart = stigningstallet til tangenten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: '1t-7-2-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- **Momentan vekstfart** er vekstfarten i et *bestemt punkt*
- Grafisk er dette stigningstallet til **tangenten** i punktet
- Tangenten berører grafen i bare ett punkt og har samme retning som grafen der
- Momentan vekstfart er grenseverdien av gjennomsnittlig vekstfart når intervallet krymper mot null`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_7_3_DERIVERT: TextbookChapter = {
  id: '1t-7-3',
  courseId: '1t',
  chapterNumber: '7.3',
  title: 'Den deriverte',
  description: 'Introduksjon til den deriverte som funksjon og derivasjon av lineære funksjoner og polynomer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå den deriverte som funksjon for momentan vekstfart',
    'derivere konstante og lineære funksjoner',
    'bruke potensregelen til å derivere polynomfunksjoner',
  ],
  content: [
    // Introduksjon
    {
      id: '1t-7-3-intro',
      type: 'text',
      content: `## Den deriverte funksjonen

I forrige kapittel fant vi momentan vekstfart i *ett* punkt. Men hva om vi vil ha en formel for momentan vekstfart i *alle* punkter?

Det er akkurat det **den deriverte** gir oss! Den deriverte er en ny funksjon som forteller oss stigningstallet til tangenten (momentan vekstfart) for enhver $x$-verdi.`,
    },

    {
      id: '1t-7-3-def',
      type: 'definition',
      title: 'Den deriverte',
      content: `Den deriverte av funksjonen $f(x)$ skrives $f'(x)$ (leses "f derivert av x").

$f'(x)$ gir oss **stigningstallet til tangenten** til $f$ i punktet $(x, f(x))$.

Med andre ord: $f'(a)$ er den momentane vekstfarten til $f$ når $x = a$.`,
    },

    {
      id: '1t-7-3-viktig',
      type: 'warning',
      title: 'Viktig å huske',
      content: `Den deriverte funksjonen $f'(x)$ beskriver det **momentane stigningstallet** til den originale funksjonen $f(x)$.

- Når $f'(x) > 0$: $f$ er stigende
- Når $f'(x) < 0$: $f$ er synkende
- Når $f'(x) = 0$: $f$ har et topp- eller bunnpunkt (eller vendepunkt)`,
    },

    // Derivasjon av konstante funksjoner
    {
      id: '1t-7-3-konstant',
      type: 'text',
      content: `## Derivasjon av konstante funksjoner

En konstant funksjon $f(x) = a$ er en horisontal linje. Stigningstallet til en horisontal linje er alltid 0.`,
    },

    {
      id: '1t-7-3-regel-konstant',
      type: 'formula',
      title: 'Konstant funksjon',
      latex: 'f(x) = a \\quad \\Rightarrow \\quad f\'(x) = 0',
      description: 'Den deriverte av en konstant er alltid 0.',
    },

    // Derivasjon av lineære funksjoner
    {
      id: '1t-7-3-linear',
      type: 'text',
      content: `## Derivasjon av lineære funksjoner

En lineær funksjon $f(x) = ax + b$ har konstant stigningstall lik $a$. Tangenten i et hvilket som helst punkt er selve linjen, med stigningstall $a$.`,
    },

    {
      id: '1t-7-3-regel-linear',
      type: 'formula',
      title: 'Lineær funksjon',
      latex: 'f(x) = ax + b \\quad \\Rightarrow \\quad f\'(x) = a',
      description: 'Den deriverte av en lineær funksjon er stigningstallet.',
    },

    // Eksempel 1
    {
      id: '1t-7-3-ex1',
      type: 'example',
      title: 'Eksempel 1: Derivasjon av lineære funksjoner',
      problem: `Deriver funksjonene:
a) $f(x) = 3$
b) $f(x) = 4x - 2$
c) $f(x) = x + 9$`,
      solution: `**Løsning:**

a) $f(x) = 3$ er en konstant, så:
$$f'(x) = 0$$

b) $f(x) = 4x - 2$ er lineær med stigningstall $4$, så:
$$f'(x) = 4$$

c) $f(x) = x + 9 = 1 \\cdot x + 9$ er lineær med stigningstall $1$, så:
$$f'(x) = 1$$`,
    },

    // Oppgave 1
    {
      id: '1t-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-7-3-oppg-1',
        number: '7.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = 4$', solution: '$f\'(x) = 0$' },
          { label: 'b', task: '$f(x) = 3x$', solution: '$f\'(x) = 3$' },
          { label: 'c', task: '$f(x) = -7x + 10$', solution: '$f\'(x) = -7$' },
          { label: 'd', task: '$f(x) = \\pi x - 3$', solution: '$f\'(x) = \\pi$' },
          { label: 'e', task: '$f(a) = 3a + 2$', solution: '$f\'(a) = 3$' },
          { label: 'f', task: '$f(x) = -(x + 3) = -x - 3$', solution: '$f\'(x) = -1$' },
        ],
        solution: 'a) 0, b) 3, c) −7, d) π, e) 3, f) −1',
        hints: ['Konstanter har derivert lik 0', 'Lineære funksjoner har derivert lik stigningstallet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Potensregelen
    {
      id: '1t-7-3-potens',
      type: 'text',
      content: `## Potensregelen for derivasjon

For å derivere funksjoner som $x^2$, $x^3$ osv., bruker vi **potensregelen**:`,
    },

    {
      id: '1t-7-3-regel-potens',
      type: 'formula',
      title: 'Potensregelen',
      latex: 'f(x) = x^n \\quad \\Rightarrow \\quad f\'(x) = n \\cdot x^{n-1}',
      description: 'Flytt eksponenten ned som koeffisient og reduser eksponenten med 1.',
    },

    {
      id: '1t-7-3-tip',
      type: 'tip',
      content: `**Huskeregel:** "Ta ned og trekk fra én"
- Ta eksponenten *ned* foran som koeffisient
- Trekk fra *én* fra eksponenten

Eksempel: $x^5$ → $5x^{5-1} = 5x^4$`,
    },

    // Eksempel 2
    {
      id: '1t-7-3-ex2',
      type: 'example',
      title: 'Eksempel 2: Potensregelen',
      problem: `Deriver funksjonene:
a) $f(x) = x^5$
b) $f(x) = 3x^4 - 2x + 5$
c) $f(x) = \\frac{2}{x^3}$`,
      solution: `**Løsning:**

a) $f(x) = x^5$
$$f'(x) = 5 \\cdot x^{5-1} = 5x^4$$

b) $f(x) = 3x^4 - 2x + 5$

Vi deriverer ledd for ledd:
$$f'(x) = 3 \\cdot 4 \\cdot x^{4-1} - 2 = 12x^3 - 2$$

c) $f(x) = \\frac{2}{x^3} = 2x^{-3}$

$$f'(x) = 2 \\cdot (-3) \\cdot x^{-3-1} = -6x^{-4} = -\\frac{6}{x^4}$$`,
    },

    // Oppgave 2
    {
      id: '1t-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-7-3-oppg-2',
        number: '7.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^3$', solution: '$f\'(x) = 3x^2$' },
          { label: 'b', task: '$f(x) = x^2 + 2x - 3$', solution: '$f\'(x) = 2x + 2$' },
          { label: 'c', task: '$f(x) = -7x^3 + 10$', solution: '$f\'(x) = -21x^2$' },
          { label: 'd', task: '$f(x) = x^5 + 3x^2$', solution: '$f\'(x) = 5x^4 + 6x$' },
          { label: 'e', task: '$f(a) = -3a^7 + 2a$', solution: '$f\'(a) = -21a^6 + 2$' },
          { label: 'f', task: '$f(x) = ax^4 - bx$', solution: '$f\'(x) = 4ax^3 - b$' },
        ],
        solution: 'a) $3x^2$, b) $2x + 2$, c) $-21x^2$, d) $5x^4 + 6x$, e) $-21a^6 + 2$, f) $4ax^3 - b$',
        hints: ['Bruk potensregelen på hvert ledd', 'Husk at konstanter forsvinner ved derivasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 3: Finne f'(a)
    {
      id: '1t-7-3-ex3',
      type: 'example',
      title: 'Eksempel 3: Finne verdien av den deriverte',
      problem: `La $f(x) = 2x^2 - 5x$.
a) Finn $f(3)$
b) Finn $f(-2)$
c) Finn $f'(-2)$`,
      solution: `**Løsning:**

a) $f(3) = 2 \\cdot 3^2 - 5 \\cdot 3 = 2 \\cdot 9 - 15 = 18 - 15 = 3$

b) $f(-2) = 2 \\cdot (-2)^2 - 5 \\cdot (-2) = 2 \\cdot 4 + 10 = 8 + 10 = 18$

c) Vi finner først $f'(x)$:
$$f'(x) = 4x - 5$$

Deretter setter vi inn $x = -2$:
$$f'(-2) = 4 \\cdot (-2) - 5 = -8 - 5 = -13$$`,
    },

    // Oppgave 3
    {
      id: '1t-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-7-3-oppg-3',
        number: '7.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn $f\'(2)$ for hver funksjon:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 3$', solution: '$f\'(x) = 2x$, så $f\'(2) = 2 \\cdot 2 = 4$' },
          { label: 'b', task: '$f(x) = \\frac{7}{2}x^2 - 5x$', solution: '$f\'(x) = 7x - 5$, så $f\'(2) = 14 - 5 = 9$' },
          { label: 'c', task: '$f(x) = x^{-2} + x$', solution: '$f\'(x) = -2x^{-3} + 1$, så $f\'(2) = -\\frac{2}{8} + 1 = \\frac{3}{4}$' },
        ],
        solution: 'a) 4, b) 9, c) 3/4',
        hints: ['Finn først $f\'(x)$ ved å derivere', 'Sett deretter inn verdien for $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: '1t-7-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-7-3-oppg-4',
        number: '7.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn $f\'(-3)$ for hver funksjon:',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x^2 - 3x$', solution: '$f\'(x) = 4x - 3$, så $f\'(-3) = -12 - 3 = -15$' },
          { label: 'b', task: '$f(x) = \\frac{1}{3}x^3 - x$', solution: '$f\'(x) = x^2 - 1$, så $f\'(-3) = 9 - 1 = 8$' },
          { label: 'c', task: '$f(x) = 4x$', solution: '$f\'(x) = 4$, så $f\'(-3) = 4$' },
        ],
        solution: 'a) −15, b) 8, c) 4',
        hints: ['Derivert av en lineær funksjon er konstant'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // GeoGebra
    {
      id: '1t-7-3-geogebra',
      type: 'geogebra',
      title: 'Utforsk derivasjon i GeoGebra',
      description: 'Prøv kommandoen Derivert(f) for å se den deriverte funksjonen.',
      appType: 'graphing',
      commands: [
        'f(x) = x^3 - 3x',
        'g(x) = Derivert(f)',
      ],
    },

    // Oppgave 5: Praktisk
    {
      id: '1t-7-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1t-7-3-oppg-5',
        number: '7.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Høyden $h$ (i meter) til en ball som kastes rett opp er gitt ved:
$$h(t) = -5t^2 + 20t + 1$$
der $t$ er tiden i sekunder.

a) Finn $h'(t)$ (den deriverte av høydefunksjonen).
b) Hva representerer $h'(t)$ fysisk?
c) Finn $h'(2)$ og tolk svaret.
d) Når er $h'(t) = 0$? Hva skjer da?`,
        solution: `a) $h'(t) = -10t + 20$
b) $h'(t)$ er den momentane farten til ballen (vertikal hastighet)
c) $h'(2) = -10 \\cdot 2 + 20 = 0$. Ballen har fart 0 når $t = 2$, altså er den på sitt høyeste punkt.
d) $h'(t) = 0$ når $t = 2$. Da er ballen på toppen av banen sin.`,
        hints: ['Derivert av posisjon gir hastighet', '$h\'(t) = 0$ betyr at farten er null'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: '1t-7-3-oppsummering',
      type: 'definition',
      title: 'Oppsummering: Derivasjonsregler',
      content: `**Konstantregel:** $f(x) = a \\quad \\Rightarrow \\quad f'(x) = 0$

**Lineær funksjon:** $f(x) = ax + b \\quad \\Rightarrow \\quad f'(x) = a$

**Potensregel:** $f(x) = x^n \\quad \\Rightarrow \\quad f'(x) = n \\cdot x^{n-1}$

**Konstantmultiplikasjon:** $(k \\cdot f)'(x) = k \\cdot f'(x)$

**Sumregel:** $(f + g)'(x) = f'(x) + g'(x)$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_7_4_GEOGEBRA: TextbookChapter = {
  id: '1t-7-4',
  courseId: '1t',
  chapterNumber: '7.4',
  title: 'Derivasjon i GeoGebra',
  description: 'Bruk GeoGebra til å utforske derivasjon grafisk og algebraisk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke GeoGebra til å finne den deriverte av en funksjon',
    'tegne tangenter og finne stigningstall i GeoGebra',
    'visualisere sammenhengen mellom en funksjon og dens deriverte',
  ],
  content: [
    {
      id: '1t-7-4-intro',
      type: 'text',
      content: `## Derivasjon i GeoGebra

GeoGebra er et kraftig verktøy for å utforske derivasjon. Vi kan bruke det til å:
- Finne den deriverte funksjonen algebraisk
- Tegne tangenter til grafer
- Finne stigningstallet til tangenten i et punkt
- Visualisere sammenhengen mellom en funksjon og dens deriverte

I dette kapittelet lærer du de viktigste kommandoene for derivasjon i GeoGebra.`,
    },

    {
      id: '1t-7-4-derivert-kommando',
      type: 'definition',
      title: 'Kommando: Derivert()',
      content: `For å finne den deriverte av en funksjon i GeoGebra, bruker du kommandoen:

\`\`\`
Derivert(f)
\`\`\`

der \`f\` er funksjonsuttrykket eller navnet på en funksjon du har definert.

**Eksempler:**
- \`Derivert(x^2 - 3x + 1)\` gir \`2x - 3\`
- \`Derivert(f)\` der \`f(x) = x^3\` gir \`3x^2\``,
    },

    {
      id: '1t-7-4-geogebra-1',
      type: 'geogebra',
      title: 'Prøv: Derivert-kommandoen',
      description: 'Skriv inn kommandoene under for å se den deriverte.',
      appType: 'graphing',
      commands: [
        'f(x) = x^3 - 3x',
        'g(x) = Derivert(f)',
      ],
    },

    {
      id: '1t-7-4-ex1',
      type: 'example',
      title: 'Eksempel 1: Finn den deriverte i GeoGebra',
      problem: 'Bruk GeoGebra til å finne den deriverte av $f(x) = x^4 - 2x^2 + x$.',
      solution: `**Løsning:**

Skriv inn i GeoGebra:
\`\`\`
f(x) = x^4 - 2x^2 + x
g(x) = Derivert(f)
\`\`\`

GeoGebra gir oss:
$$g(x) = 4x^3 - 4x + 1$$

Dette stemmer med det vi får ved å derivere for hånd:
$$f'(x) = 4x^3 - 4x + 1$$`,
    },

    {
      id: '1t-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-7-4-oppg-1',
        number: '7.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk GeoGebra til å finne den deriverte. Kontroller svaret ved å derivere for hånd.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^3 + 2x$', solution: '$f\'(x) = 3x^2 + 2$' },
          { label: 'b', task: '$f(x) = x^5 - x^3 + 4$', solution: '$f\'(x) = 5x^4 - 3x^2$' },
          { label: 'c', task: '$f(x) = 2x^4 - 3x^2 + x - 7$', solution: '$f\'(x) = 8x^3 - 6x + 1$' },
        ],
        solution: 'a) $3x^2 + 2$, b) $5x^4 - 3x^2$, c) $8x^3 - 6x + 1$',
        hints: ['Skriv Derivert(f) etter å ha definert f(x)', 'Sammenlign med potensregelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-4-tangent',
      type: 'text',
      content: `## Tegne tangenter i GeoGebra

En **tangent** er en rett linje som berører grafen i ett punkt og har samme stigningstall som grafen i det punktet.

For å tegne en tangent i GeoGebra, bruker vi kommandoen:

\`\`\`
Tangent(punkt, funksjon)
\`\`\``,
    },

    {
      id: '1t-7-4-tangent-def',
      type: 'definition',
      title: 'Kommando: Tangent()',
      content: `For å tegne tangenten til en funksjon i et punkt:

\`\`\`
Tangent(A, f)
\`\`\`

der \`A\` er et punkt på grafen og \`f\` er funksjonen.

**Alternativt:**
\`\`\`
Tangent((2, f(2)), f)
\`\`\`

tegner tangenten i punktet der $x = 2$.`,
    },

    {
      id: '1t-7-4-geogebra-2',
      type: 'geogebra',
      title: 'Prøv: Tegn tangent',
      description: 'Flytt punkt A langs grafen og se hvordan tangenten endres.',
      appType: 'graphing',
      commands: [
        'f(x) = x^2 - 2x',
        'A = (2, f(2))',
        't = Tangent(A, f)',
      ],
    },

    {
      id: '1t-7-4-stigning',
      type: 'text',
      content: `## Finne stigningstallet til tangenten

For å finne stigningstallet til en linje (inkludert tangenten), bruker vi:

\`\`\`
Stigning(linje)
\`\`\`

Dette gir oss stigningstallet, som er det samme som den deriverte i det punktet.`,
    },

    {
      id: '1t-7-4-ex2',
      type: 'example',
      title: 'Eksempel 2: Finn stigningstallet til tangenten',
      problem: 'La $f(x) = x^2 - 4x + 3$. Bruk GeoGebra til å finne stigningstallet til tangenten når $x = 3$.',
      solution: `**Løsning i GeoGebra:**

Skriv inn:
\`\`\`
f(x) = x^2 - 4x + 3
A = (3, f(3))
t = Tangent(A, f)
a = Stigning(t)
\`\`\`

GeoGebra gir $a = 2$.

**Kontroll:** $f'(x) = 2x - 4$, så $f'(3) = 2 \\cdot 3 - 4 = 2$ ✓`,
    },

    {
      id: '1t-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-7-4-oppg-2',
        number: '7.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk GeoGebra til å finne stigningstallet til tangenten i det gitte punktet.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 + 2x$ når $x = 1$', solution: 'Stigning = $f\'(1) = 2 \\cdot 1 + 2 = 4$' },
          { label: 'b', task: '$f(x) = x^3 - 3x$ når $x = 2$', solution: 'Stigning = $f\'(2) = 3 \\cdot 4 - 3 = 9$' },
          { label: 'c', task: '$f(x) = -x^2 + 4x$ når $x = 0$', solution: 'Stigning = $f\'(0) = -2 \\cdot 0 + 4 = 4$' },
        ],
        solution: 'a) 4, b) 9, c) 4',
        hints: ['Bruk Tangent(punkt, f) og deretter Stigning(t)', 'Stigningstallet = f\'(x) i punktet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-4-visualisering',
      type: 'text',
      content: `## Visualisere sammenhengen

Det er nyttig å se grafen til både $f(x)$ og $f'(x)$ samtidig:
- Der $f$ er stigende, er $f' > 0$
- Der $f$ er synkende, er $f' < 0$
- Der $f$ har topp- eller bunnpunkt, er $f' = 0$`,
    },

    {
      id: '1t-7-4-geogebra-3',
      type: 'geogebra',
      title: 'Utforsk: Funksjon og derivert',
      description: 'Se sammenhengen mellom f(x) (blå) og f\'(x) (grønn).',
      appType: 'graphing',
      commands: [
        'f(x) = x^3 - 3x',
        'g(x) = Derivert(f)',
        'A = Ekstrempunkt(f)',
      ],
    },

    {
      id: '1t-7-4-ex3',
      type: 'example',
      title: 'Eksempel 3: Analysere funksjon med derivert',
      problem: 'Bruk GeoGebra til å analysere $f(x) = x^3 - 3x$. Finn hvor funksjonen er stigende og synkende.',
      solution: `**Løsning i GeoGebra:**

Skriv inn:
\`\`\`
f(x) = x^3 - 3x
g(x) = Derivert(f)
Nullpunkt(g)
\`\`\`

GeoGebra viser at $g(x) = 3x^2 - 3$ har nullpunkter i $x = -1$ og $x = 1$.

**Analyse:**
- Når $x < -1$: $g(x) > 0$, så $f$ er **stigende**
- Når $-1 < x < 1$: $g(x) < 0$, så $f$ er **synkende**
- Når $x > 1$: $g(x) > 0$, så $f$ er **stigende**

Altså har $f$ et toppunkt ved $x = -1$ og et bunnpunkt ved $x = 1$.`,
    },

    {
      id: '1t-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-7-4-oppg-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk GeoGebra til å tegne både $f(x)$ og $f\'(x)$. Besvar spørsmålene.',
        subTasks: [
          { label: 'a', task: 'La $f(x) = x^3 - 6x^2 + 9x$. For hvilke $x$-verdier er $f\'(x) = 0$?', solution: '$f\'(x) = 3x^2 - 12x + 9 = 0$ gir $x = 1$ og $x = 3$' },
          { label: 'b', task: 'For hvilke $x$-verdier er $f$ stigende?', solution: '$f$ er stigende når $f\' > 0$, dvs. $x < 1$ eller $x > 3$' },
          { label: 'c', task: 'Har $f$ en topp eller bunn når $x = 1$? Når $x = 3$?', solution: '$x = 1$: toppunkt, $x = 3$: bunnpunkt' },
        ],
        solution: 'a) x = 1 og x = 3, b) x < 1 eller x > 3, c) topp ved x = 1, bunn ved x = 3',
        hints: ['Bruk Nullpunkt(g) for å finne hvor f\' = 0', 'Se på fortegnet til f\' for å avgjøre stigende/synkende'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-4-kommandooversikt',
      type: 'definition',
      title: 'Oppsummering: GeoGebra-kommandoer for derivasjon',
      content: `| Kommando | Beskrivelse |
|----------|-------------|
| \`Derivert(f)\` | Returnerer den deriverte av f |
| \`Tangent(A, f)\` | Tegner tangenten til f i punkt A |
| \`Stigning(linje)\` | Gir stigningstallet til en linje |
| \`Nullpunkt(f)\` | Finner nullpunktene til f |
| \`Ekstrempunkt(f)\` | Finner topp- og bunnpunkter |`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_7_5_DEFINISJON: TextbookChapter = {
  id: '1t-7-5',
  courseId: '1t',
  chapterNumber: '7.5',
  title: 'Definisjonen av derivasjon og numerisk derivasjon',
  description: 'Den formelle definisjonen av den deriverte som grenseverdi, og numerisk tilnærming til derivasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå definisjonen av den deriverte som en grenseverdi',
    'bruke definisjonen til å derivere enkle funksjoner',
    'forstå numerisk derivasjon og Newton-kvotienten',
  ],
  content: [
    {
      id: '1t-7-5-intro',
      type: 'text',
      content: `## Fra sekant til tangent

Vi har sett at den **momentane vekstfarten** er stigningstallet til tangenten. Men hvordan finner vi egentlig tangenten matematisk?

Ideen er å starte med en **sekant** (linje gjennom to punkter på grafen) og la de to punktene komme nærmere og nærmere hverandre. Når avstanden blir uendelig liten, blir sekanten til en tangent.`,
    },

    {
      id: '1t-7-5-newton-kvotient',
      type: 'text',
      content: `## Newton-kvotienten

La $f$ være en funksjon og la $h$ være en liten positiv verdi (avstanden mellom to $x$-verdier).

**Gjennomsnittlig vekstfart** fra $x$ til $x + h$:
$$\\frac{f(x + h) - f(x)}{h}$$

Dette kalles **Newton-kvotienten** eller **differanskvotienten**.`,
    },

    {
      id: '1t-7-5-def-newton',
      type: 'definition',
      title: 'Newton-kvotienten',
      content: `Newton-kvotienten for en funksjon $f$ i punktet $x$ med steglengde $h$ er:

$$\\frac{f(x + h) - f(x)}{h}$$

Dette er stigningstallet til sekanten gjennom punktene $(x, f(x))$ og $(x + h, f(x + h))$.`,
    },

    {
      id: '1t-7-5-ex1',
      type: 'example',
      title: 'Eksempel 1: Newton-kvotienten',
      problem: 'La $f(x) = x^2$. Finn Newton-kvotienten når $x = 2$ og $h = 0{,}1$.',
      solution: `**Løsning:**

Vi setter inn i formelen:
$$\\frac{f(2 + 0{,}1) - f(2)}{0{,}1} = \\frac{f(2{,}1) - f(2)}{0{,}1}$$

Vi beregner funksjonsverdiene:
- $f(2{,}1) = 2{,}1^2 = 4{,}41$
- $f(2) = 2^2 = 4$

$$\\frac{4{,}41 - 4}{0{,}1} = \\frac{0{,}41}{0{,}1} = 4{,}1$$

Newton-kvotienten er $4{,}1$.

**Merk:** Den eksakte deriverte er $f'(2) = 2 \\cdot 2 = 4$, så $4{,}1$ er en god tilnærming!`,
    },

    {
      id: '1t-7-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-7-5-oppg-1',
        number: '7.5.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn Newton-kvotienten for de gitte verdiene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2$, $x = 3$, $h = 0{,}1$', solution: '$\\frac{3{,}1^2 - 9}{0{,}1} = \\frac{9{,}61 - 9}{0{,}1} = 6{,}1$' },
          { label: 'b', task: '$f(x) = x^2$, $x = 3$, $h = 0{,}01$', solution: '$\\frac{3{,}01^2 - 9}{0{,}01} = \\frac{9{,}0601 - 9}{0{,}01} = 6{,}01$' },
          { label: 'c', task: '$f(x) = x^3$, $x = 2$, $h = 0{,}1$', solution: '$\\frac{2{,}1^3 - 8}{0{,}1} = \\frac{9{,}261 - 8}{0{,}1} = 12{,}61$' },
        ],
        solution: 'a) 6,1, b) 6,01, c) 12,61',
        hints: ['Beregn f(x + h) og f(x) først', 'Når h blir mindre, nærmer svaret seg f\'(x)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-5-grenseverdi',
      type: 'text',
      content: `## Definisjonen av den deriverte

Når vi lar $h$ gå mot 0, nærmer Newton-kvotienten seg den deriverte. Dette skriver vi som en **grenseverdi**:`,
    },

    {
      id: '1t-7-5-def-derivert',
      type: 'definition',
      title: 'Definisjonen av den deriverte',
      content: `Den deriverte av $f$ i punktet $x$ er definert som:

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$

Les: "grenseverdien av Newton-kvotienten når $h$ går mot null".

Grenseverdien eksisterer når Newton-kvotienten stabiliserer seg på én verdi når $h$ blir mindre og mindre.`,
    },

    {
      id: '1t-7-5-ex2',
      type: 'example',
      title: 'Eksempel 2: Derivere fra definisjonen',
      problem: 'Bruk definisjonen til å vise at $f\'(x) = 2x$ når $f(x) = x^2$.',
      solution: `**Løsning:**

Vi starter med Newton-kvotienten:
$$\\frac{f(x + h) - f(x)}{h} = \\frac{(x + h)^2 - x^2}{h}$$

Vi utvider $(x + h)^2$:
$$= \\frac{x^2 + 2xh + h^2 - x^2}{h}$$

Vi forenkler:
$$= \\frac{2xh + h^2}{h} = \\frac{h(2x + h)}{h} = 2x + h$$

Når $h \\to 0$:
$$f'(x) = \\lim_{h \\to 0} (2x + h) = 2x$$

Dette bekrefter at den deriverte av $x^2$ er $2x$.`,
    },

    {
      id: '1t-7-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-7-5-oppg-2',
        number: '7.5.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk definisjonen av den deriverte til å finne $f\'(x)$.',
        subTasks: [
          { label: 'a', task: '$f(x) = 3x$', solution: '$\\frac{3(x+h) - 3x}{h} = \\frac{3h}{h} = 3$, så $f\'(x) = 3$' },
          { label: 'b', task: '$f(x) = x^2 + 1$', solution: '$\\frac{(x+h)^2 + 1 - x^2 - 1}{h} = \\frac{2xh + h^2}{h} = 2x + h \\to 2x$' },
          { label: 'c', task: '$f(x) = 2x^2 - x$', solution: '$\\frac{2(x+h)^2 - (x+h) - 2x^2 + x}{h} = 4x - 1 + 2h \\to 4x - 1$' },
        ],
        solution: 'a) $f\'(x) = 3$, b) $f\'(x) = 2x$, c) $f\'(x) = 4x - 1$',
        hints: ['Utvid $(x + h)^2$ til $x^2 + 2xh + h^2$', 'Faktoriser og forenkle før du tar grenseverdien'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-5-numerisk',
      type: 'text',
      content: `## Numerisk derivasjon

Ofte er det vanskelig å beregne den eksakte deriverte. Da kan vi bruke **numerisk derivasjon**, som gir en tilnærmet verdi.

**Framoverdifferansen** (den vi har brukt):
$$f'(x) \\approx \\frac{f(x + h) - f(x)}{h}$$

**Sentraldifferansen** (mer nøyaktig):
$$f'(x) \\approx \\frac{f(x + h) - f(x - h)}{2h}$$`,
    },

    {
      id: '1t-7-5-geogebra',
      type: 'geogebra',
      title: 'Utforsk: Newton-kvotienten',
      description: 'Se hvordan Newton-kvotienten nærmer seg den deriverte når h blir mindre.',
      appType: 'graphing',
      commands: [
        'f(x) = x^2',
        'h = 0.5',
        'a = 2',
        'newton = (f(a + h) - f(a)) / h',
        'derivert = 2a',
      ],
    },

    {
      id: '1t-7-5-ex3',
      type: 'example',
      title: 'Eksempel 3: Sentraldifferansen',
      problem: 'La $f(x) = x^2$. Bruk sentraldifferansen til å finne en tilnærming til $f\'(3)$ med $h = 0{,}1$.',
      solution: `**Løsning:**

Sentraldifferansen er:
$$f'(x) \\approx \\frac{f(x + h) - f(x - h)}{2h}$$

Med $x = 3$ og $h = 0{,}1$:
$$f'(3) \\approx \\frac{f(3{,}1) - f(2{,}9)}{2 \\cdot 0{,}1} = \\frac{3{,}1^2 - 2{,}9^2}{0{,}2}$$

$$= \\frac{9{,}61 - 8{,}41}{0{,}2} = \\frac{1{,}2}{0{,}2} = 6$$

**Kontroll:** Den eksakte verdien er $f'(3) = 2 \\cdot 3 = 6$. Sentraldifferansen ga eksakt svar her!`,
    },

    {
      id: '1t-7-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-7-5-oppg-3',
        number: '7.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk sentraldifferansen $\\frac{f(x+h) - f(x-h)}{2h}$ med $h = 0{,}1$.',
        subTasks: [
          { label: 'a', task: 'Finn en tilnærming til $f\'(2)$ når $f(x) = x^3$', solution: '$\\frac{2{,}1^3 - 1{,}9^3}{0{,}2} = \\frac{9{,}261 - 6{,}859}{0{,}2} = 12{,}01 \\approx 12$' },
          { label: 'b', task: 'Sammenlign med den eksakte verdien $f\'(2) = 3 \\cdot 2^2 = 12$', solution: 'Tilnærmingen 12,01 er svært nær den eksakte verdien 12' },
        ],
        solution: 'a) 12,01, b) Feilen er kun 0,01',
        hints: ['Sentraldifferansen er ofte mer nøyaktig enn framoverdifferansen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-5-oppsummering',
      type: 'note',
      content: `**Oppsummering:**

- **Newton-kvotienten** $\\frac{f(x+h) - f(x)}{h}$ gir gjennomsnittlig vekstfart
- **Definisjonen av den deriverte:** $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$
- **Numerisk derivasjon** gir tilnærmede verdier for $f'(x)$
- **Sentraldifferansen** $\\frac{f(x+h) - f(x-h)}{2h}$ er mer nøyaktig enn framoverdifferansen`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_7_6_POLYNOMER: TextbookChapter = {
  id: '1t-7-6',
  courseId: '1t',
  chapterNumber: '7.6',
  title: 'Derivasjon av polynomfunksjoner',
  description: 'Derivasjonsregler for polynomfunksjoner: potensregelen, konstantregelen og sumregelen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke potensregelen til å derivere',
    'derivere summer og differanser av funksjoner',
    'derivere polynomer med vilkårlige koeffisienter',
  ],
  content: [
    {
      id: '1t-7-6-intro',
      type: 'text',
      content: `## Derivasjonsregler for polynomer

I kapittel 7.3 introduserte vi potensregelen. Nå skal vi se nærmere på alle reglene vi trenger for å derivere polynomfunksjoner effektivt.

Et **polynom** er en sum av potenser av $x$ med koeffisienter:
$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$$`,
    },

    {
      id: '1t-7-6-potensregel',
      type: 'formula',
      title: 'Potensregelen',
      latex: 'f(x) = x^n \\quad \\Rightarrow \\quad f\'(x) = n \\cdot x^{n-1}',
      description: 'Flytt eksponenten ned som koeffisient og reduser eksponenten med 1.',
    },

    {
      id: '1t-7-6-konstantregel',
      type: 'formula',
      title: 'Konstantregelen',
      latex: 'f(x) = c \\quad \\Rightarrow \\quad f\'(x) = 0',
      description: 'Den deriverte av en konstant er alltid 0.',
    },

    {
      id: '1t-7-6-konstantmult',
      type: 'formula',
      title: 'Konstantmultiplikasjon',
      latex: '(c \\cdot f(x))\' = c \\cdot f\'(x)',
      description: 'Konstanter kan flyttes utenfor derivasjonen.',
    },

    {
      id: '1t-7-6-sumregel',
      type: 'formula',
      title: 'Sumregelen',
      latex: '(f(x) + g(x))\' = f\'(x) + g\'(x)',
      description: 'Derivasjon av en sum er summen av de deriverte.',
    },

    {
      id: '1t-7-6-ex1',
      type: 'example',
      title: 'Eksempel 1: Derivere polynomer',
      problem: `Deriver:
a) $f(x) = 5x^4$
b) $f(x) = x^3 + x^2 - 7x + 3$
c) $f(x) = 2x^5 - \\frac{1}{2}x^4 + 3x$`,
      solution: `**Løsning:**

a) $f(x) = 5x^4$

Konstantmultiplikasjon + potensregel:
$$f'(x) = 5 \\cdot 4x^{4-1} = 20x^3$$

b) $f(x) = x^3 + x^2 - 7x + 3$

Vi deriverer ledd for ledd (sumregelen):
$$f'(x) = 3x^2 + 2x - 7$$

c) $f(x) = 2x^5 - \\frac{1}{2}x^4 + 3x$

$$f'(x) = 2 \\cdot 5x^4 - \\frac{1}{2} \\cdot 4x^3 + 3 = 10x^4 - 2x^3 + 3$$`,
    },

    {
      id: '1t-7-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-7-6-oppg-1',
        number: '7.6.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = 4x^3$', solution: '$f\'(x) = 12x^2$' },
          { label: 'b', task: '$f(x) = -2x^5$', solution: '$f\'(x) = -10x^4$' },
          { label: 'c', task: '$f(x) = \\frac{1}{3}x^6$', solution: '$f\'(x) = 2x^5$' },
          { label: 'd', task: '$f(x) = x^2 + 5x - 1$', solution: '$f\'(x) = 2x + 5$' },
          { label: 'e', task: '$f(x) = 3x^4 - 2x^3 + x$', solution: '$f\'(x) = 12x^3 - 6x^2 + 1$' },
          { label: 'f', task: '$f(x) = -x^3 + 4x^2 - 6$', solution: '$f\'(x) = -3x^2 + 8x$' },
        ],
        solution: 'a) $12x^2$, b) $-10x^4$, c) $2x^5$, d) $2x + 5$, e) $12x^3 - 6x^2 + 1$, f) $-3x^2 + 8x$',
        hints: ['Bruk konstantmultiplikasjon: $(cf)\' = c \\cdot f\'$', 'Deriver hvert ledd for seg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-6-negative',
      type: 'text',
      content: `## Negative og brøk-eksponenter

Potensregelen fungerer også for negative eksponenter og brøk-eksponenter:

$$f(x) = x^{-2} = \\frac{1}{x^2} \\quad \\Rightarrow \\quad f'(x) = -2x^{-3} = -\\frac{2}{x^3}$$

$$f(x) = x^{1/2} = \\sqrt{x} \\quad \\Rightarrow \\quad f'(x) = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$$`,
    },

    {
      id: '1t-7-6-ex2',
      type: 'example',
      title: 'Eksempel 2: Negative eksponenter',
      problem: `Deriver:
a) $f(x) = \\frac{3}{x^2}$
b) $f(x) = \\frac{1}{x} + 2x$`,
      solution: `**Løsning:**

a) Vi skriver om til potensform: $f(x) = 3x^{-2}$
$$f'(x) = 3 \\cdot (-2) \\cdot x^{-3} = -6x^{-3} = -\\frac{6}{x^3}$$

b) Vi skriver om: $f(x) = x^{-1} + 2x$
$$f'(x) = -1 \\cdot x^{-2} + 2 = -\\frac{1}{x^2} + 2$$`,
    },

    {
      id: '1t-7-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-7-6-oppg-2',
        number: '7.6.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om til potensform og deriver:',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{5}{x^3}$', solution: '$f(x) = 5x^{-3}$, $f\'(x) = -15x^{-4} = -\\frac{15}{x^4}$' },
          { label: 'b', task: '$f(x) = \\frac{2}{x} - \\frac{1}{x^2}$', solution: '$f(x) = 2x^{-1} - x^{-2}$, $f\'(x) = -\\frac{2}{x^2} + \\frac{2}{x^3}$' },
          { label: 'c', task: '$f(x) = x^2 + \\frac{4}{x}$', solution: '$f\'(x) = 2x - \\frac{4}{x^2}$' },
        ],
        solution: 'a) $-\\frac{15}{x^4}$, b) $-\\frac{2}{x^2} + \\frac{2}{x^3}$, c) $2x - \\frac{4}{x^2}$',
        hints: ['Skriv $\\frac{a}{x^n}$ som $ax^{-n}$', 'Bruk så potensregelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-6-andrederiverte',
      type: 'text',
      content: `## Andrederiverte

Vi kan derivere den deriverte for å få **andrederiverte**, som skrives $f''(x)$ (leses "f tostreket av x").

$$f(x) \\xrightarrow{\\text{deriverer}} f'(x) \\xrightarrow{\\text{deriverer igjen}} f''(x)$$

Andrederiverte brukes blant annet til å avgjøre om et punkt er et maksimum eller minimum.`,
    },

    {
      id: '1t-7-6-ex3',
      type: 'example',
      title: 'Eksempel 3: Finne andrederiverte',
      problem: 'La $f(x) = x^4 - 3x^2 + 2x$. Finn $f\'(x)$ og $f\'\'(x)$.',
      solution: `**Løsning:**

Først finner vi $f'(x)$:
$$f'(x) = 4x^3 - 6x + 2$$

Så deriverer vi $f'(x)$ for å finne $f''(x)$:
$$f''(x) = 12x^2 - 6$$`,
    },

    {
      id: '1t-7-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-7-6-oppg-3',
        number: '7.6.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn $f\'(x)$ og $f\'\'(x)$:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^3 - 2x$', solution: '$f\'(x) = 3x^2 - 2$, $f\'\'(x) = 6x$' },
          { label: 'b', task: '$f(x) = 2x^4 + x^2 - 5$', solution: '$f\'(x) = 8x^3 + 2x$, $f\'\'(x) = 24x^2 + 2$' },
          { label: 'c', task: '$f(x) = -x^5 + 3x^3$', solution: '$f\'(x) = -5x^4 + 9x^2$, $f\'\'(x) = -20x^3 + 18x$' },
        ],
        solution: 'a) $f\' = 3x^2 - 2$, $f\'\' = 6x$; b) $f\' = 8x^3 + 2x$, $f\'\' = 24x^2 + 2$; c) $f\' = -5x^4 + 9x^2$, $f\'\' = -20x^3 + 18x$',
        hints: ['Deriver først for å finne f\'(x)', 'Deriver f\'(x) for å finne f\'\'(x)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-6-ex4',
      type: 'example',
      title: 'Eksempel 4: Beregne derivert i et punkt',
      problem: 'La $f(x) = x^3 - 2x^2 + x$. Finn $f\'(2)$ og $f\'\'(2)$.',
      solution: `**Løsning:**

**Steg 1:** Finn den generelle deriverte $f'(x)$:
$$f'(x) = 3x^2 - 4x + 1$$

**Steg 2:** Sett inn $x = 2$:
$$f'(2) = 3(2)^2 - 4(2) + 1 = 12 - 8 + 1 = 5$$

**Steg 3:** Finn andrederiverte $f''(x)$:
$$f''(x) = 6x - 4$$

**Steg 4:** Sett inn $x = 2$:
$$f''(2) = 6(2) - 4 = 12 - 4 = 8$$

**Svar:** $f'(2) = 5$ og $f''(2) = 8$`,
    },

    {
      id: '1t-7-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-7-6-oppg-4',
        number: '7.6.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn verdien av den deriverte i det gitte punktet:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^4 - 2x^3$. Finn $f\'(1)$ og $f\'\'(1)$', solution: '$f\'(x) = 4x^3 - 6x^2$, $f\'(1) = -2$. $f\'\'(x) = 12x^2 - 12x$, $f\'\'(1) = 0$' },
          { label: 'b', task: '$f(x) = \\frac{1}{3}x^3 - x^2 + x$. Finn $f\'(3)$ og $f\'\'(3)$', solution: '$f\'(x) = x^2 - 2x + 1$, $f\'(3) = 4$. $f\'\'(x) = 2x - 2$, $f\'\'(3) = 4$' },
        ],
        solution: 'a) $f\'(1) = -2$, $f\'\'(1) = 0$; b) $f\'(3) = 4$, $f\'\'(3) = 4$',
        hints: ['Finn de generelle uttrykkene først, sett så inn verdien'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-6-oppsummering',
      type: 'definition',
      title: 'Oppsummering: Derivasjonsregler',
      content: `| Regel | Formel |
|-------|--------|
| Potensregel | $(x^n)' = nx^{n-1}$ |
| Konstantregel | $(c)' = 0$ |
| Konstantmultiplikasjon | $(c \\cdot f)' = c \\cdot f'$ |
| Sumregel | $(f + g)' = f' + g'$ |
| Differansregel | $(f - g)' = f' - g'$ |

**Andrederiverte:** $f''(x) = (f'(x))'$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_7_7_PRAKTISK: TextbookChapter = {
  id: '1t-7-7',
  courseId: '1t',
  chapterNumber: '7.7',
  title: 'Praktisk bruk av derivasjon',
  description: 'Bruk derivasjon til å løse praktiske problemer med optimering, fart og akselerasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke derivasjon til å finne ekstremalpunkt',
    'løse optimeringsproblemer',
    'tolke derivasjon i praktiske sammenhenger som fart og akselerasjon',
  ],
  content: [
    {
      id: '1t-7-7-intro',
      type: 'text',
      content: `## Praktiske anvendelser av derivasjon

Derivasjon har mange praktiske bruksområder:
- **Optimering**: Finne maksimum og minimum (f.eks. maksimal profitt, minste kostnad)
- **Fart og akselerasjon**: Analysere bevegelse
- **Vekstrater**: Beskrive hvordan ting endrer seg over tid

I dette kapittelet ser vi på hvordan vi bruker derivasjon til å løse slike problemer.`,
    },

    {
      id: '1t-7-7-ekstremalpunkt',
      type: 'text',
      content: `## Topp- og bunnpunkt (ekstremalpunkt)

Vi har sett at $f'(x) = 0$ i punkter der grafen har horisontal tangent. Dette er kandidater for topp- eller bunnpunkt.

**Fremgangsmåte:**
1. Finn $f'(x)$
2. Løs $f'(x) = 0$
3. Bruk fortegnsskjema eller andrederiverte for å avgjøre om det er topp eller bunn`,
    },

    {
      id: '1t-7-7-def-ekstrem',
      type: 'definition',
      title: 'Topp- og bunnpunkt',
      content: `La $f'(a) = 0$. Da er $(a, f(a))$ et kandidat for ekstremalpunkt.

**Metode 1: Fortegnsanalyse av $f'$**
- Hvis $f'$ går fra $+$ til $-$ ved $x = a$: **Toppunkt**
- Hvis $f'$ går fra $-$ til $+$ ved $x = a$: **Bunnpunkt**

**Metode 2: Andrederiverte**
- Hvis $f''(a) < 0$: **Toppunkt** (grafen er konkav, bøyer nedover)
- Hvis $f''(a) > 0$: **Bunnpunkt** (grafen er konveks, bøyer oppover)`,
    },

    {
      id: '1t-7-7-ex1',
      type: 'example',
      title: 'Eksempel 1: Finne ekstremalpunkt',
      problem: 'Finn eventuelle topp- og bunnpunkt for $f(x) = x^3 - 3x$.',
      solution: `**Løsning:**

**Steg 1:** Finn $f'(x)$:
$$f'(x) = 3x^2 - 3$$

**Steg 2:** Løs $f'(x) = 0$:
$$3x^2 - 3 = 0$$
$$3x^2 = 3$$
$$x^2 = 1$$
$$x = \\pm 1$$

**Steg 3:** Bruk andrederiverte:
$$f''(x) = 6x$$
$$f''(-1) = -6 < 0 \\quad \\Rightarrow \\text{toppunkt}$$
$$f''(1) = 6 > 0 \\quad \\Rightarrow \\text{bunnpunkt}$$

**Steg 4:** Finn funksjonsverdiene:
$$f(-1) = (-1)^3 - 3(-1) = -1 + 3 = 2$$
$$f(1) = 1^3 - 3 \\cdot 1 = 1 - 3 = -2$$

**Svar:** Toppunkt $(-1, 2)$ og bunnpunkt $(1, -2)$.`,
    },

    {
      id: '1t-7-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-7-7-oppg-1',
        number: '7.7.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn topp- og/eller bunnpunkt for funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 4x + 3$', solution: '$f\'(x) = 2x - 4 = 0$ gir $x = 2$. $f\'\'(2) = 2 > 0$: bunnpunkt $(2, -1)$' },
          { label: 'b', task: '$f(x) = -x^2 + 6x - 5$', solution: '$f\'(x) = -2x + 6 = 0$ gir $x = 3$. $f\'\'(3) = -2 < 0$: toppunkt $(3, 4)$' },
          { label: 'c', task: '$f(x) = x^3 - 12x$', solution: '$f\'(x) = 3x^2 - 12 = 0$ gir $x = \\pm 2$. Topp $(-2, 16)$, bunn $(2, -16)$' },
        ],
        solution: 'a) bunn $(2, -1)$, b) topp $(3, 4)$, c) topp $(-2, 16)$, bunn $(2, -16)$',
        hints: ['Sett f\'(x) = 0 og løs for x', 'Bruk f\'\'(x) for å avgjøre topp/bunn'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-7-optimering',
      type: 'text',
      content: `## Optimeringsproblemer

Mange praktiske problemer handler om å finne den beste løsningen – den som gir størst profitt, minst avfall, kortest tid, osv.

**Fremgangsmåte for optimering:**
1. Les problemet nøye og identifiser hva som skal maksimeres/minimeres
2. Sett opp en funksjon som beskriver dette
3. Finn $f'(x) = 0$ og løs for $x$
4. Sjekk om løsningen gir maksimum eller minimum
5. Kontroller at løsningen er innenfor eventuelle begrensninger`,
    },

    {
      id: '1t-7-7-ex2',
      type: 'example',
      title: 'Eksempel 2: Optimeringsproblem',
      problem: `En bonde skal lage et rektangulært innhegnet område ved en elv. Han har 100 meter gjerde og trenger ikke gjerde langs elven.

Hva er de optimale dimensjonene for å få størst mulig areal?`,
      solution: `**Løsning:**

La $x$ være lengden på sidene vinkelrett på elven, og $y$ være lengden parallelt med elven.

**Begrensning (gjerdelengde):**
$$2x + y = 100 \\quad \\Rightarrow \\quad y = 100 - 2x$$

**Areal som skal maksimeres:**
$$A(x) = x \\cdot y = x(100 - 2x) = 100x - 2x^2$$

**Finn maksimum:**
$$A'(x) = 100 - 4x = 0$$
$$4x = 100$$
$$x = 25$$

Da er $y = 100 - 2(25) = 50$.

**Kontroll:** $A''(x) = -4 < 0$, så dette er et maksimum.

**Svar:** Sidene vinkelrett på elven skal være 25 m, og siden langs elven 50 m. Arealet blir $25 \\cdot 50 = 1250 \\text{ m}^2$.`,
    },

    {
      id: '1t-7-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-7-7-oppg-2',
        number: '7.7.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs optimeringsproblemene:',
        subTasks: [
          { label: 'a', task: 'Summen av to positive tall er 20. Finn tallene slik at produktet blir størst mulig.', solution: 'La tallene være $x$ og $20-x$. $P(x) = x(20-x) = 20x - x^2$. $P\'(x) = 20 - 2x = 0$ gir $x = 10$. Tallene er 10 og 10.' },
          { label: 'b', task: 'En ball kastes opp. Høyden er $h(t) = -5t^2 + 30t + 2$ meter. Finn maksimal høyde.', solution: '$h\'(t) = -10t + 30 = 0$ gir $t = 3$. $h(3) = -45 + 90 + 2 = 47$ meter.' },
        ],
        solution: 'a) Begge tallene er 10, b) Maksimal høyde er 47 meter (ved t = 3 s)',
        hints: ['Sett opp funksjonen som skal optimeres', 'Finn der f\'(x) = 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-7-bevegelse',
      type: 'text',
      content: `## Fart og akselerasjon

Hvis $s(t)$ beskriver posisjonen til et objekt som funksjon av tid $t$, så er:
- **Fart (hastighet):** $v(t) = s'(t)$ (deriverte av posisjon)
- **Akselerasjon:** $a(t) = v'(t) = s''(t)$ (deriverte av fart)`,
    },

    {
      id: '1t-7-7-def-bevegelse',
      type: 'definition',
      title: 'Posisjon, fart og akselerasjon',
      content: `Hvis $s(t)$ er posisjonen ved tid $t$:

| Størrelse | Symbol | Sammenheng |
|-----------|--------|------------|
| Posisjon | $s(t)$ | Gitt funksjon |
| Fart | $v(t)$ | $v(t) = s'(t)$ |
| Akselerasjon | $a(t)$ | $a(t) = s''(t)$ |

- Positiv fart: beveger seg i positiv retning
- Negativ fart: beveger seg i negativ retning
- Positiv akselerasjon: farten øker
- Negativ akselerasjon: farten minker`,
    },

    {
      id: '1t-7-7-ex3',
      type: 'example',
      title: 'Eksempel 3: Bevegelse',
      problem: `En partikkel beveger seg langs en linje. Posisjonen er gitt ved:
$$s(t) = t^3 - 6t^2 + 9t$$
der $s$ er i meter og $t$ er i sekunder.

a) Finn farten $v(t)$
b) Finn akselerasjonen $a(t)$
c) Når er partikkelen i ro?
d) Når beveger partikkelen seg mot høyre?`,
      solution: `**Løsning:**

a) **Fart:**
$$v(t) = s'(t) = 3t^2 - 12t + 9$$

b) **Akselerasjon:**
$$a(t) = v'(t) = 6t - 12$$

c) **I ro når $v(t) = 0$:**
$$3t^2 - 12t + 9 = 0$$
$$t^2 - 4t + 3 = 0$$
$$(t-1)(t-3) = 0$$
$$t = 1 \\text{ s eller } t = 3 \\text{ s}$$

d) **Mot høyre når $v(t) > 0$:**
$v(t) = 3(t-1)(t-3)$

Fra fortegnsanalyse: $v(t) > 0$ når $t < 1$ eller $t > 3$.`,
    },

    {
      id: '1t-7-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-7-7-oppg-3',
        number: '7.7.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En ball kastes rett opp. Høyden (i meter) etter $t$ sekunder er $h(t) = -5t^2 + 20t + 1$.',
        subTasks: [
          { label: 'a', task: 'Finn farten (den deriverte) som funksjon av $t$', solution: '$v(t) = h\'(t) = -10t + 20$' },
          { label: 'b', task: 'Hva er starthastigheten (farten når $t = 0$)?', solution: '$v(0) = 20$ m/s' },
          { label: 'c', task: 'Når er ballen på vei ned (negativ fart)?', solution: '$v(t) < 0$ når $-10t + 20 < 0$, dvs. $t > 2$' },
          { label: 'd', task: 'Hva er akselerasjonen?', solution: '$a(t) = v\'(t) = -10$ m/s² (konstant, pga. tyngdekraften)' },
        ],
        solution: 'a) $v(t) = -10t + 20$, b) 20 m/s, c) $t > 2$ s, d) $-10$ m/s²',
        hints: ['Derivert av posisjon gir fart', 'Akselerasjon er konstant for kast i tyngdefelt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-7-ex4',
      type: 'example',
      title: 'Eksempel 4: Profittmaksimering',
      problem: `En bedrift produserer en vare. Profittfunksjonen (i kroner) er gitt ved:
$$P(x) = -x^2 + 40x - 300$$
der $x$ er antall enheter produsert per dag.

Hvor mange enheter bør bedriften produsere for å maksimere profitten?`,
      solution: `**Løsning:**

**Steg 1:** Finn $P'(x)$:
$$P'(x) = -2x + 40$$

**Steg 2:** Sett $P'(x) = 0$:
$$-2x + 40 = 0$$
$$x = 20$$

**Steg 3:** Kontroller at dette er et maksimum med $P''(x)$:
$$P''(x) = -2$$

Siden $P''(x) = -2 < 0$, er $x = 20$ et toppunkt (maksimum).

**Steg 4:** Finn maksimal profitt:
$$P(20) = -(20)^2 + 40(20) - 300 = -400 + 800 - 300 = 100$$

**Svar:** Bedriften bør produsere 20 enheter per dag for å oppnå maksimal profitt på 100 kr.`,
    },

    {
      id: '1t-7-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1t-7-7-oppg-4',
        number: '7.7.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs optimeringsproblemene ved hjelp av derivasjon:',
        subTasks: [
          { label: 'a', task: 'Et rektangel har omkrets 24 cm. Finn sidelengdene som gir størst areal.', solution: 'La sidene være $x$ og $12-x$. $A(x) = x(12-x)$. $A\'(x) = 12 - 2x = 0$ gir $x = 6$. Sidene er 6 cm og 6 cm (kvadrat).' },
          { label: 'b', task: 'Profittfunksjonen til en bedrift er $P(x) = -2x^2 + 100x - 800$ kr, der $x$ er antall solgte enheter. Finn antall enheter som gir maksimal profitt.', solution: '$P\'(x) = -4x + 100 = 0$ gir $x = 25$ enheter. Maks profitt: $P(25) = 450$ kr.' },
        ],
        solution: 'a) Begge sidene er 6 cm (kvadrat), b) 25 enheter gir maks profitt på 450 kr',
        hints: ['Sett opp funksjonen basert på oppgaveteksten', 'Bruk derivasjon for å finne ekstremalpunkt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-7-7-oppsummering',
      type: 'note',
      content: `**Oppsummering: Praktisk bruk av derivasjon**

**Ekstremalpunkt:**
- Finn $f'(x) = 0$
- Bruk $f''(x)$ til å avgjøre topp (f'' < 0) eller bunn (f'' > 0)

**Optimering:**
1. Sett opp funksjonen som skal optimeres
2. Finn $f'(x) = 0$
3. Kontroller at løsningen er et maksimum/minimum
4. Sjekk eventuelle begrensninger

**Bevegelse:**
- Fart: $v(t) = s'(t)$
- Akselerasjon: $a(t) = s''(t)$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_2_11_GEOGEBRA: TextbookChapter = {
  id: '1t-2-11',
  courseId: '1t',
  chapterNumber: '2.11',
  title: 'Polynomdivisjon i GeoGebra',
  description: 'Bruk GeoGebra CAS til polynomdivisjon.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke GeoGebra CAS til å utføre polynomdivisjon',
    'kontrollere polynomdivisjon med digitale verktøy',
  ],
  content: [
    {
      id: '1t-2-11-intro',
      type: 'text',
      content: `## Polynomdivisjon i GeoGebra

GeoGebra CAS kan utføre polynomdivisjon for oss. Dette er nyttig for å:
- Kontrollere svar vi har regnet ut for hånd
- Utføre vanskelige polynomdivisjoner raskt
- Faktorisere polynomer ved hjelp av divisjon`,
    },

    {
      id: '1t-2-11-kommando',
      type: 'definition',
      title: 'Kommando: Div() og Rest()',
      content: `GeoGebra CAS har to kommandoer for polynomdivisjon:

**Div(polynom, divisor)** – Gir kvotienten (svaret uten rest)
\`\`\`
Div(x^3 - 2x^2 + 5x - 6, x - 1)
\`\`\`
gir \`x² - x + 4\`

**Rest(polynom, divisor)** – Gir resten
\`\`\`
Rest(x^3 - 2x^2 + 5x - 6, x - 1)
\`\`\`
gir \`-2\`

Alternativt kan du bare skrive brøken, så forenkler GeoGebra:
\`\`\`
(x^3 - 2x^2 + 5x - 6) / (x - 1)
\`\`\``,
    },

    {
      id: '1t-2-11-ex1',
      type: 'example',
      title: 'Eksempel 1: Polynomdivisjon med GeoGebra',
      problem: 'Bruk GeoGebra CAS til å utføre divisjonen $(x^3 + 2x^2 - 5x - 6) : (x + 3)$.',
      solution: `**Løsning i GeoGebra CAS:**

Metode 1: Bruk Div-kommandoen:
\`\`\`
Div(x^3 + 2x^2 - 5x - 6, x + 3)
\`\`\`
→ \`x² - x - 2\`

\`\`\`
Rest(x^3 + 2x^2 - 5x - 6, x + 3)
\`\`\`
→ \`0\`

Metode 2: Skriv som brøk:
\`\`\`
(x^3 + 2x^2 - 5x - 6) / (x + 3)
\`\`\`
→ \`x² - x - 2\`

Siden resten er 0, går divisjonen opp og vi har:
$$x^3 + 2x^2 - 5x - 6 = (x + 3)(x^2 - x - 2)$$`,
    },

    {
      id: '1t-2-11-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-2-11-oppg-1',
        number: '2.11.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk GeoGebra CAS til å utføre polynomdivisjonene:',
        subTasks: [
          { label: 'a', task: '$(x^2 + 5x + 6) : (x + 2)$', solution: 'Kvotient: $x + 3$, Rest: $0$' },
          { label: 'b', task: '$(x^3 - 8) : (x - 2)$', solution: 'Kvotient: $x^2 + 2x + 4$, Rest: $0$' },
          { label: 'c', task: '$(x^2 + 3x + 5) : (x + 1)$', solution: 'Kvotient: $x + 2$, Rest: $3$' },
        ],
        solution: 'a) $x + 3$, b) $x^2 + 2x + 4$, c) $x + 2$ med rest $3$',
        hints: ['Bruk Div() for kvotienten og Rest() for resten', 'Hvis resten er 0, går divisjonen opp'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-2-11-faktorisering',
      type: 'text',
      content: `## Bruke polynomdivisjon til faktorisering

Når vi vet et nullpunkt $x = a$ for et polynom, vet vi at $(x - a)$ er en faktor.

Vi kan bruke GeoGebra til å:
1. Finne nullpunktene med **Nullpunkt()** eller **Løs()**
2. Dele på $(x - a)$ for å finne den andre faktoren`,
    },

    {
      id: '1t-2-11-ex2',
      type: 'example',
      title: 'Eksempel 2: Faktorisere ved hjelp av divisjon',
      problem: 'Faktoriser $f(x) = x^3 - 6x^2 + 11x - 6$ ved hjelp av GeoGebra.',
      solution: `**Løsning:**

Steg 1: Finn nullpunktene:
\`\`\`
Nullpunkt(x^3 - 6x^2 + 11x - 6)
\`\`\`
→ \`{(1, 0), (2, 0), (3, 0)}\`

Nullpunktene er $x = 1, 2, 3$.

Steg 2: Vi vet da at $(x-1)$, $(x-2)$ og $(x-3)$ er faktorer.

Kontroll med faktorisering:
\`\`\`
Faktoriser(x^3 - 6x^2 + 11x - 6)
\`\`\`
→ \`(x - 1)(x - 2)(x - 3)\``,
    },

    {
      id: '1t-2-11-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-2-11-oppg-2',
        number: '2.11.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk GeoGebra til å faktorisere polynomene fullstendig:',
        subTasks: [
          { label: 'a', task: '$x^3 - 3x^2 - 4x + 12$', solution: '$(x - 2)(x + 2)(x - 3)$' },
          { label: 'b', task: '$x^3 + x^2 - 5x + 3$', solution: '$(x - 1)^2(x + 3)$' },
          { label: 'c', task: '$x^4 - 5x^2 + 4$', solution: '$(x - 1)(x + 1)(x - 2)(x + 2)$' },
        ],
        solution: 'a) $(x-2)(x+2)(x-3)$, b) $(x-1)^2(x+3)$, c) $(x-1)(x+1)(x-2)(x+2)$',
        hints: ['Bruk Faktoriser() direkte, eller finn nullpunkt først', 'Kontroller ved å gange ut'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-2-11-geogebra',
      type: 'geogebra',
      title: 'Prøv: Polynomdivisjon i CAS',
      description: 'Åpne CAS og prøv polynomdivisjon.',
      appType: 'cas',
      commands: [
        'Div(x^3 - 1, x - 1)',
        'Rest(x^3 - 1, x - 1)',
        'Faktoriser(x^3 - 1)',
      ],
    },

    {
      id: '1t-2-11-oppsummering',
      type: 'note',
      content: `**Oppsummering:**

| Kommando | Beskrivelse |
|----------|-------------|
| \`Div(p, d)\` | Gir kvotienten ved divisjon av p med d |
| \`Rest(p, d)\` | Gir resten ved divisjon |
| \`Faktoriser(p)\` | Faktoriserer polynomet fullstendig |
| \`Nullpunkt(p)\` | Finner nullpunktene til polynomet |`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_3_9_GEOGEBRA: TextbookChapter = {
  id: '1t-3-9',
  courseId: '1t',
  chapterNumber: '3.9',
  title: 'Funksjonsdrøfting i GeoGebra',
  description: 'Bruk GeoGebra til å analysere funksjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke GeoGebra til å tegne funksjonsgrafer',
    'finne nullpunkter, topp- og bunnpunkter med GeoGebra',
    'analysere funksjonsverdier og løse likninger grafisk',
  ],
  content: [
    {
      id: '1t-3-9-intro',
      type: 'text',
      content: `## Funksjonsdrøfting i GeoGebra

GeoGebra er et kraftig verktøy for å analysere funksjoner. Du kan:
- Tegne grafer og se hvordan de ser ut
- Finne nullpunkter (der grafen krysser x-aksen)
- Finne topp- og bunnpunkter (ekstremalpunkter)
- Finne skjæringspunkter mellom grafer
- Analysere funksjonsfortegn og stigningsforhold`,
    },

    {
      id: '1t-3-9-tegne',
      type: 'text',
      content: `## Tegne grafer

For å tegne grafen til en funksjon, skriv funksjonsuttrykket i inntastingsfeltet:

\`\`\`
f(x) = x^2 - 4x + 3
\`\`\`

Du kan zoome inn/ut med scrollhjulet og dra for å flytte visningen.`,
    },

    {
      id: '1t-3-9-nullpunkt',
      type: 'definition',
      title: 'Finne nullpunkter',
      content: `For å finne nullpunktene (der $f(x) = 0$), bruk:

\`\`\`
Nullpunkt(f)
\`\`\`

GeoGebra markerer nullpunktene på grafen og viser koordinatene.

**Alternativt i CAS:**
\`\`\`
Løs(f(x) = 0)
\`\`\``,
    },

    {
      id: '1t-3-9-geogebra-1',
      type: 'geogebra',
      title: 'Prøv: Finn nullpunkter',
      description: 'Nullpunktene vises som punkt A og B.',
      appType: 'graphing',
      commands: [
        'f(x) = x^2 - 4x + 3',
        'Nullpunkt(f)',
      ],
    },

    {
      id: '1t-3-9-ekstrem',
      type: 'definition',
      title: 'Finne ekstremalpunkter',
      content: `For å finne topp- og bunnpunkter, bruk:

\`\`\`
Ekstrempunkt(f)
\`\`\`

GeoGebra finner alle lokale maksimums- og minimumspunkter.

Du kan også bruke:
- \`Maks(f, a, b)\` – finner maksimum i intervallet [a, b]
- \`Min(f, a, b)\` – finner minimum i intervallet [a, b]`,
    },

    {
      id: '1t-3-9-ex1',
      type: 'example',
      title: 'Eksempel 1: Analysere en andregradsfunksjon',
      problem: 'Bruk GeoGebra til å finne nullpunktene og bunnpunktet til $f(x) = x^2 - 2x - 3$.',
      solution: `**Løsning i GeoGebra:**

Skriv inn:
\`\`\`
f(x) = x^2 - 2x - 3
A = Nullpunkt(f)
B = Ekstrempunkt(f)
\`\`\`

GeoGebra viser:
- Nullpunkter: $(-1, 0)$ og $(3, 0)$
- Bunnpunkt: $(1, -4)$

Vi kan verifisere:
- $f(-1) = 1 + 2 - 3 = 0$ ✓
- $f(3) = 9 - 6 - 3 = 0$ ✓
- $f(1) = 1 - 2 - 3 = -4$ ✓`,
    },

    {
      id: '1t-3-9-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-3-9-oppg-1',
        number: '3.9.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk GeoGebra til å finne nullpunktene og eventuelle ekstremalpunkter:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 4$', solution: 'Nullpunkter: $(-2, 0)$ og $(2, 0)$. Bunnpunkt: $(0, -4)$' },
          { label: 'b', task: '$f(x) = -x^2 + 6x - 5$', solution: 'Nullpunkter: $(1, 0)$ og $(5, 0)$. Toppunkt: $(3, 4)$' },
          { label: 'c', task: '$f(x) = x^3 - 3x$', solution: 'Nullpunkter: $(-\\sqrt{3}, 0)$, $(0, 0)$, $(\\sqrt{3}, 0)$. Topp: $(-1, 2)$, Bunn: $(1, -2)$' },
        ],
        solution: 'a) null: ±2, bunn: (0,-4), b) null: 1,5, topp: (3,4), c) null: 0,±√3, topp/bunn: (±1, ∓2)',
        hints: ['Bruk Nullpunkt(f) og Ekstrempunkt(f)', 'Les av koordinatene i algebrafeltet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-3-9-skjering',
      type: 'text',
      content: `## Finne skjæringspunkter

For å finne hvor to grafer krysser hverandre, bruk:

\`\`\`
Skjæring(f, g)
\`\`\`

Dette finner alle punkter der $f(x) = g(x)$.`,
    },

    {
      id: '1t-3-9-ex2',
      type: 'example',
      title: 'Eksempel 2: Skjæring mellom grafer',
      problem: 'Finn skjæringspunktene mellom $f(x) = x^2$ og $g(x) = 2x + 3$.',
      solution: `**Løsning i GeoGebra:**

\`\`\`
f(x) = x^2
g(x) = 2x + 3
Skjæring(f, g)
\`\`\`

GeoGebra finner skjæringspunktene: $(-1, 1)$ og $(3, 9)$.

**Kontroll:** Løs $x^2 = 2x + 3$:
$x^2 - 2x - 3 = 0$
$(x + 1)(x - 3) = 0$
$x = -1$ eller $x = 3$ ✓`,
    },

    {
      id: '1t-3-9-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-3-9-oppg-2',
        number: '3.9.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk GeoGebra til å finne skjæringspunktene:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 1$ og $g(x) = x + 1$', solution: 'Skjæringspunkter: $(-1, 0)$ og $(2, 3)$' },
          { label: 'b', task: '$f(x) = x^3$ og $g(x) = 4x$', solution: 'Skjæringspunkter: $(-2, -8)$, $(0, 0)$, $(2, 8)$' },
          { label: 'c', task: '$f(x) = 2^x$ og $g(x) = x + 2$', solution: 'Skjæringspunkter: ca. $(0, 1)$ (eksakt) og ca. $(2.7, 4.7)$' },
        ],
        solution: 'a) (-1,0) og (2,3), b) (±2, ±8) og (0,0), c) (0,1) og ca. (2.7, 4.7)',
        hints: ['Bruk Skjæring(f, g)', 'Tegn begge grafene først for å se omtrent hvor de krysser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-3-9-funksjonsverdier',
      type: 'text',
      content: `## Analysere funksjonsverdier

For å finne funksjonsverdien i et bestemt punkt:
\`\`\`
f(3)
\`\`\`
gir verdien av $f(3)$.

For å tegne et punkt på grafen:
\`\`\`
A = (3, f(3))
\`\`\``,
    },

    {
      id: '1t-3-9-geogebra-2',
      type: 'geogebra',
      title: 'Utforsk: Funksjonsdrøfting',
      description: 'Tegn grafen og analyser den.',
      appType: 'graphing',
      commands: [
        'f(x) = x^3 - 3x^2 - 9x + 27',
        'Nullpunkt(f)',
        'Ekstrempunkt(f)',
      ],
    },

    {
      id: '1t-3-9-ex3',
      type: 'example',
      title: 'Eksempel 3: Fullstendig funksjonsdrøfting',
      problem: 'Bruk GeoGebra til å drøfte $f(x) = x^3 - 3x^2 - 9x + 27$ fullstendig.',
      solution: `**Løsning i GeoGebra:**

Skriv inn:
\`\`\`
f(x) = x^3 - 3x^2 - 9x + 27
Nullpunkt(f)
Ekstrempunkt(f)
\`\`\`

**Nullpunkter:** GeoGebra viser $x = -3$ og $x = 3$ (dobbelt nullpunkt).

**Ekstremalpunkter:**
- Toppunkt: $(-1, 32)$
- Bunnpunkt: $(3, 0)$

**Fortegn:**
- $f(x) > 0$ når $x > -3$ (unntatt $x = 3$)
- $f(x) < 0$ når $x < -3$

**Stigende/synkende:**
- Stigende når $x < -1$ eller $x > 3$
- Synkende når $-1 < x < 3$`,
    },

    {
      id: '1t-3-9-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1t-3-9-oppg-3',
        number: '3.9.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk GeoGebra til å drøfte funksjonen $f(x) = x^3 - 6x^2 + 9x$:',
        subTasks: [
          { label: 'a', task: 'Finn nullpunktene', solution: 'Nullpunkter: $x = 0$ og $x = 3$ (dobbelt)' },
          { label: 'b', task: 'Finn eventuelle topp- og bunnpunkter', solution: 'Toppunkt: $(1, 4)$, Bunnpunkt: $(3, 0)$' },
          { label: 'c', task: 'For hvilke $x$-verdier er $f(x) > 0$?', solution: '$f(x) > 0$ når $x < 0$ eller $0 < x < 3$ eller (her er det et bunnpunkt ved x=3)' },
        ],
        solution: 'a) x = 0, x = 3, b) topp (1, 4), bunn (3, 0), c) x < 0',
        hints: ['Bruk Nullpunkt(f) og Ekstrempunkt(f)', 'Se på grafen for å avgjøre fortegn'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-3-9-oppsummering',
      type: 'definition',
      title: 'Oppsummering: GeoGebra-kommandoer for funksjonsdrøfting',
      content: `| Kommando | Beskrivelse |
|----------|-------------|
| \`f(x) = ...\` | Definerer en funksjon |
| \`Nullpunkt(f)\` | Finner nullpunktene |
| \`Ekstrempunkt(f)\` | Finner topp- og bunnpunkter |
| \`Skjæring(f, g)\` | Finner skjæringspunkter |
| \`Maks(f, a, b)\` | Finner maks i intervall |
| \`Min(f, a, b)\` | Finner min i intervall |
| \`f(a)\` | Beregner funksjonsverdien |`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_5_8_GEOGEBRA: TextbookChapter = {
  id: '1t-5-8',
  courseId: '1t',
  chapterNumber: '5.8',
  title: 'Geometri og trigonometri i GeoGebra',
  description: 'Konstruer og utforsk geometri og trigonometri i GeoGebra.',
  estimatedMinutes: 45,
  competenceGoals: [
    'konstruere geometriske figurer i GeoGebra',
    'bruke GeoGebra til trigonometriske beregninger',
    'løse trekantproblemer med digitale verktøy',
  ],
  content: [
    {
      id: '1t-5-8-intro',
      type: 'text',
      content: `## Geometri og trigonometri i GeoGebra

GeoGebra er et utmerket verktøy for å:
- Konstruere geometriske figurer nøyaktig
- Måle vinkler, lengder og arealer
- Utføre trigonometriske beregninger
- Visualisere geometriske sammenhenger`,
    },

    {
      id: '1t-5-8-konstruksjoner',
      type: 'text',
      content: `## Grunnleggende konstruksjoner

**Punkter:**
- Klikk i grafikkfeltet, eller skriv koordinater: \`A = (2, 3)\`

**Linjestykker:**
- \`Linjestykke(A, B)\` – lager et linjestykke mellom A og B

**Sirkler:**
- \`Sirkel(A, 5)\` – sirkel med sentrum A og radius 5
- \`Sirkel(A, B)\` – sirkel med sentrum A gjennom B`,
    },

    {
      id: '1t-5-8-trekanter',
      type: 'definition',
      title: 'Konstruere trekanter',
      content: `For å konstruere en trekant:
1. Plasser tre punkter A, B, C
2. Tegn linjestykker mellom dem:
\`\`\`
Linjestykke(A, B)
Linjestykke(B, C)
Linjestykke(C, A)
\`\`\`

Eller bruk:
\`\`\`
Mangekant(A, B, C)
\`\`\``,
    },

    {
      id: '1t-5-8-male',
      type: 'text',
      content: `## Måle lengder, vinkler og areal

**Lengde:**
\`\`\`
Lengde(a)
\`\`\`
der a er et linjestykke, eller:
\`\`\`
Avstand(A, B)
\`\`\`

**Vinkel:**
\`\`\`
Vinkel(A, B, C)
\`\`\`
måler vinkelen ∠ABC (vinkelen ved B).

**Areal:**
\`\`\`
Areal(mangekant)
\`\`\``,
    },

    {
      id: '1t-5-8-geogebra-1',
      type: 'geogebra',
      title: 'Prøv: Konstruer en trekant',
      description: 'Konstruer en trekant og mål sidene og vinklene.',
      appType: 'geometry',
      commands: [
        'A = (0, 0)',
        'B = (4, 0)',
        'C = (2, 3)',
        't = Mangekant(A, B, C)',
        'Vinkel(A, B, C)',
        'Vinkel(B, C, A)',
        'Vinkel(C, A, B)',
      ],
    },

    {
      id: '1t-5-8-ex1',
      type: 'example',
      title: 'Eksempel 1: Analysere en trekant',
      problem: 'Konstruer en trekant med hjørner i $A = (0, 0)$, $B = (5, 0)$ og $C = (2, 4)$. Finn alle sidelengder og vinkler.',
      solution: `**Løsning i GeoGebra:**

\`\`\`
A = (0, 0)
B = (5, 0)
C = (2, 4)
Mangekant(A, B, C)
\`\`\`

**Sidelengder:**
- \`Avstand(A, B)\` = 5
- \`Avstand(B, C)\` = $\\sqrt{9 + 16} = 5$
- \`Avstand(C, A)\` = $\\sqrt{4 + 16} \\approx 4{,}47$

**Vinkler:**
- \`Vinkel(C, A, B)\` ≈ 63,4°
- \`Vinkel(A, B, C)\` ≈ 53,1°
- \`Vinkel(B, C, A)\` ≈ 63,4°

Summen av vinklene er 180°, som forventet.`,
    },

    {
      id: '1t-5-8-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1t-5-8-oppg-1',
        number: '5.8.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk GeoGebra til å konstruere og analysere trekantene:',
        subTasks: [
          { label: 'a', task: 'Trekant med hjørner $(0,0)$, $(6,0)$, $(3,4)$. Finn alle sidelengder.', solution: 'AB = 6, BC = 5, CA = 5. Likebeint trekant.' },
          { label: 'b', task: 'Trekant med hjørner $(0,0)$, $(4,0)$, $(4,3)$. Finn alle vinkler.', solution: 'Vinkel A ≈ 36,9°, vinkel B = 90°, vinkel C ≈ 53,1°' },
        ],
        solution: 'a) 6, 5, 5 (likebeint), b) ≈37°, 90°, ≈53°',
        hints: ['Bruk Avstand(A, B) for lengder', 'Bruk Vinkel(A, B, C) for vinkelen ved B'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-5-8-trigonometri',
      type: 'text',
      content: `## Trigonometriske beregninger i GeoGebra

GeoGebra kan beregne trigonometriske verdier direkte:

\`\`\`
sin(30°)
cos(60°)
tan(45°)
\`\`\`

**Merk:** GeoGebra bruker grader som standard. For radianer, bruk \`sin(π/6)\`.

For inverse funksjoner:
\`\`\`
asin(0.5)
acos(0.5)
atan(1)
\`\`\``,
    },

    {
      id: '1t-5-8-ex2',
      type: 'example',
      title: 'Eksempel 2: Løse trekant med sinussetningen',
      problem: 'I en trekant er $A = 40°$, $B = 60°$ og $a = 5$. Finn side $b$.',
      solution: `**Løsning i GeoGebra CAS:**

Vi bruker sinussetningen: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$

\`\`\`
a = 5
A = 40°
B = 60°
b = a * sin(B) / sin(A)
\`\`\`

GeoGebra gir: $b \\approx 6{,}74$

**Kontroll:**
$$b = \\frac{5 \\cdot \\sin(60°)}{\\sin(40°)} = \\frac{5 \\cdot 0{,}866}{0{,}643} \\approx 6{,}74$$`,
    },

    {
      id: '1t-5-8-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1t-5-8-oppg-2',
        number: '5.8.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk GeoGebra til å løse trekantene:',
        subTasks: [
          { label: 'a', task: '$A = 30°$, $B = 70°$, $a = 4$. Finn $b$.', solution: '$b = 4 \\cdot \\sin(70°) / \\sin(30°) \\approx 7{,}52$' },
          { label: 'b', task: '$a = 7$, $b = 5$, $C = 50°$. Finn $c$ (bruk cosinussetningen).', solution: '$c = \\sqrt{49 + 25 - 70\\cos(50°)} \\approx 5{,}42$' },
        ],
        solution: 'a) ≈ 7,52, b) ≈ 5,42',
        hints: ['Sinussetningen: a/sin(A) = b/sin(B)', 'Cosinussetningen: c² = a² + b² - 2ab·cos(C)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '1t-5-8-geogebra-2',
      type: 'geogebra',
      title: 'Utforsk: Sinussetningen',
      description: 'Flytt punktene og se hvordan forholdene endres.',
      appType: 'geometry',
      commands: [
        'A = (0, 0)',
        'B = (5, 0)',
        'C = (3, 4)',
        'Mangekant(A, B, C)',
        'a = Avstand(B, C)',
        'b = Avstand(C, A)',
        'vinkelA = Vinkel(B, A, C)',
        'vinkelB = Vinkel(C, B, A)',
        'forhold1 = a / sin(vinkelA)',
        'forhold2 = b / sin(vinkelB)',
      ],
    },

    {
      id: '1t-5-8-oppsummering',
      type: 'definition',
      title: 'Oppsummering: GeoGebra-kommandoer for geometri',
      content: `| Kommando | Beskrivelse |
|----------|-------------|
| \`Linjestykke(A, B)\` | Linjestykke mellom A og B |
| \`Mangekant(A, B, C)\` | Trekant med hjørner A, B, C |
| \`Sirkel(A, r)\` | Sirkel med sentrum A, radius r |
| \`Avstand(A, B)\` | Avstand mellom punkter |
| \`Vinkel(A, B, C)\` | Vinkel ved B |
| \`Areal(figur)\` | Areal av en figur |
| \`sin(v)\`, \`cos(v)\`, \`tan(v)\` | Trigonometriske funksjoner |`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_5_3: TextbookChapter = {
  id: '1t-5-3',
  courseId: '1t',
  chapterNumber: '5.3',
  title: 'Pytagoras\' setning',
  description: 'Repetisjon og utvidelse av Pytagoras\' setning.',
  estimatedMinutes: 25,
  competenceGoals: ['bruke Pytagoras\' setning til å beregne sider i rettvinklede trekanter'],
  content: [
    {
      id: '1t-5-3-intro',
      type: 'text',
      content: `## Pytagoras' setning

Pytagoras' setning er en av de mest kjente setningene i matematikken. Den beskriver sammenhengen mellom sidene i en **rettvinklet trekant**.

I en rettvinklet trekant kaller vi:
- De to sidene som danner den rette vinkelen for **kateter** (a og b)
- Siden som ligger overfor den rette vinkelen for **hypotenus** (c)

Hypotenusen er alltid den **lengste siden** i en rettvinklet trekant.`,
    },
    {
      id: '1t-5-3-figur-345',
      type: 'image',
      src: '/images/textbook/1t/kap5/pytagoras-345.svg',
      alt: 'Rettvinklet trekant med kateter 3 og 4, og hypotenus 5',
      caption: 'Den klassiske 3-4-5 trekanten: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$',
    },
    {
      id: '1t-5-3-theorem',
      type: 'theorem',
      title: 'Pytagoras\' setning',
      content: `I en rettvinklet trekant med kateter $a$ og $b$ og hypotenus $c$ gjelder:

$$a^2 + b^2 = c^2$$

Setningen kan også skrives som:
- $c = \\sqrt{a^2 + b^2}$ (for å finne hypotenusen)
- $a = \\sqrt{c^2 - b^2}$ (for å finne en katet)`,
    },
    {
      id: '1t-5-3-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'En rettvinklet trekant har kateter 3 cm og 4 cm. Finn hypotenusen.',
      solution: `Vi bruker Pytagoras' setning:

$c^2 = a^2 + b^2$
$c^2 = 3^2 + 4^2$
$c^2 = 9 + 16$
$c^2 = 25$
$c = \\sqrt{25} = 5$

**Hypotenusen er 5 cm.**`,
    },
    {
      id: '1t-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'En rettvinklet trekant har hypotenus 13 cm og én katet på 5 cm. Finn den andre kateten.',
      solution: `Vi løser for den ukjente kateten $b$:

$a^2 + b^2 = c^2$
$5^2 + b^2 = 13^2$
$25 + b^2 = 169$
$b^2 = 169 - 25 = 144$
$b = \\sqrt{144} = 12$

**Den andre kateten er 12 cm.**`,
    },
    {
      id: '1t-5-3-def-trippel',
      type: 'definition',
      title: 'Pytagoreiske tripler',
      content: `Et **pytagoreisk trippel** er tre positive heltall $(a, b, c)$ som oppfyller $a^2 + b^2 = c^2$.

Vanlige pytagoreiske tripler:
- $(3, 4, 5)$ - det enkleste
- $(5, 12, 13)$
- $(8, 15, 17)$
- $(7, 24, 25)$

Alle multipler av et pytagoreisk trippel er også et pytagoreisk trippel. For eksempel er $(6, 8, 10)$ en dobling av $(3, 4, 5)$.`,
    },
    {
      id: '1t-5-3-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'En stige på 5 meter lener mot en vegg. Foten av stigen står 3 meter fra veggen. Hvor høyt opp på veggen når stigen?',
      solution: `La $h$ være høyden på veggen der stigen treffer.

Stigen, veggen og bakken danner en rettvinklet trekant der stigen er hypotenusen.

$h^2 + 3^2 = 5^2$
$h^2 + 9 = 25$
$h^2 = 16$
$h = 4$

**Stigen når 4 meter opp på veggen.**`,
    },
    {
      id: '1t-5-3-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Finn diagonalen i et rektangel med sider 6 cm og 8 cm.',
      solution: `Diagonalen i et rektangel deler det i to rettvinklede trekanter.

$d^2 = 6^2 + 8^2$
$d^2 = 36 + 64$
$d^2 = 100$
$d = 10$

**Diagonalen er 10 cm.**`,
    },
    {
      id: '1t-5-3-text-omvendt',
      type: 'text',
      content: `### Den omvendte setningen

Pytagoras' setning gjelder også omvendt: Hvis $a^2 + b^2 = c^2$ for sidene i en trekant, da er trekanten rettvinklet med den rette vinkelen ved hypotenusen $c$.

Dette er nyttig for å **sjekke om en trekant er rettvinklet**.`,
    },
    {
      id: '1t-5-3-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Sjekk om en trekant med sider 9, 12 og 15 er rettvinklet.',
      solution: `Vi sjekker om $a^2 + b^2 = c^2$ der $c$ er den lengste siden:

$9^2 + 12^2 = 81 + 144 = 225$
$15^2 = 225$

Siden $9^2 + 12^2 = 15^2$, **er trekanten rettvinklet**.`,
    },
    {
      id: '1t-5-3-summary',
      type: 'note',
      content: `**Oppsummering**

**Pytagoras' setning:** $a^2 + b^2 = c^2$ i rettvinklede trekanter

**Bruk:**
- Finn hypotenusen: $c = \\sqrt{a^2 + b^2}$
- Finn en katet: $a = \\sqrt{c^2 - b^2}$
- Sjekk om en trekant er rettvinklet`,
    },
    {
      id: '1t-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn hypotenusen i rettvinklede trekanter med følgende kateter:',
        subTasks: [
          { label: 'a', task: 'Kateter 6 og 8', solution: '$c = \\sqrt{36+64} = \\sqrt{100} = 10$' },
          { label: 'b', task: 'Kateter 5 og 12', solution: '$c = \\sqrt{25+144} = \\sqrt{169} = 13$' },
          { label: 'c', task: 'Kateter 8 og 15', solution: '$c = \\sqrt{64+225} = \\sqrt{289} = 17$' },
        ],
        solution: 'a) 10, b) 13, c) 17',
      },
    },
    {
      id: '1t-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den ukjente kateten:',
        subTasks: [
          { label: 'a', task: 'Hypotenus 10, katet 6', solution: '$b = \\sqrt{100-36} = \\sqrt{64} = 8$' },
          { label: 'b', task: 'Hypotenus 17, katet 15', solution: '$a = \\sqrt{289-225} = \\sqrt{64} = 8$' },
          { label: 'c', task: 'Hypotenus 25, katet 7', solution: '$b = \\sqrt{625-49} = \\sqrt{576} = 24$' },
        ],
        solution: 'a) 8, b) 8, c) 24',
      },
    },
    {
      id: '1t-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om følgende er rettvinklede trekanter:',
        subTasks: [
          { label: 'a', task: 'Sider 5, 12, 13', solution: '$5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✓ Ja' },
          { label: 'b', task: 'Sider 4, 5, 6', solution: '$4^2 + 5^2 = 16 + 25 = 41 \\neq 36 = 6^2$ Nei' },
          { label: 'c', task: 'Sider 9, 40, 41', solution: '$9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ ✓ Ja' },
        ],
        solution: 'a) Ja, b) Nei, c) Ja',
      },
    },
    {
      id: '1t-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En fotballbane er 100 m lang og 70 m bred. Hvor lang er diagonalen?',
        solution: '$d = \\sqrt{100^2 + 70^2} = \\sqrt{10000 + 4900} = \\sqrt{14900} \\approx 122{,}1$ m',
        hints: ['Bruk Pytagoras med lengde og bredde som kateter'],
      },
    },
    {
      id: '1t-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et telt har form som et prisme. Teltduken på kortsiden er en likebent trekant med grunnlinje 4 m og høyde 2 m. Hvor langt er det fra midten av grunnlinjen til toppen langs teltduken?',
        solution: 'Høyden fra toppen til midten av grunnlinjen er 2 m. Avstanden fra midten til hjørnet er 2 m. Men vi trenger skråsiden: $s = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2} \\approx 2{,}83$ m',
        hints: ['Tegn trekanten og del den i to rettvinklede trekanter'],
      },
    },
    {
      id: '1t-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En stige er 6 m lang. Hvor langt fra veggen må foten stå for at toppen skal nå 5 m opp?',
        solution: '$x = \\sqrt{6^2 - 5^2} = \\sqrt{36 - 25} = \\sqrt{11} \\approx 3{,}32$ m',
        hints: ['Stigen er hypotenusen'],
      },
    },
    {
      id: '1t-5-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn høyden i en likesidet trekant med sider 10 cm.',
        solution: 'Høyden deler grunnlinjen i to. $h = \\sqrt{10^2 - 5^2} = \\sqrt{100 - 25} = \\sqrt{75} = 5\\sqrt{3} \\approx 8{,}66$ cm',
        hints: ['Høyden deler den likesidede trekanten i to like rettvinklede trekanter'],
      },
    },
    // ========== NYE OPPGAVER MED ILLUSTRASJONER ==========
    {
      id: '1t-5-3-ill-pytagoras',
      type: 'image',
      src: '/images/geometry/pytagoras.svg',
      alt: 'Pytagoras setning illustrasjon med rettvinklet trekant og formler',
      caption: 'Pytagoras\' setning: $a^2 + b^2 = c^2$',
    },
    {
      id: '1t-5-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk figuren over til å løse oppgaven. I en rettvinklet trekant er katet $a = 9$ cm og katet $b = 12$ cm. Bruk Pytagoras\' setning til å finne hypotenusen $c$.',
        image: '/images/geometry/pytagoras.svg',
        solution: `Vi bruker formelen fra figuren: $c^2 = a^2 + b^2$

$c^2 = 9^2 + 12^2 = 81 + 144 = 225$
$c = \\sqrt{225} = 15$ cm

**Hypotenusen er 15 cm.** (Dette er det pytagoreiske trippelet 9-12-15, som er 3 ganger 3-4-5.)`,
        hints: ['Bruk formelen $c = \\sqrt{a^2 + b^2}$ fra figuren'],
      },
    },
    {
      id: '1t-5-3-ex-9',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Studer figuren for Pytagoras\' setning. En rettvinklet trekant har hypotenus $c = 20$ cm og én katet $b = 16$ cm. Finn den andre kateten $a$.',
        image: '/images/geometry/pytagoras.svg',
        solution: `Fra figuren ser vi at vi kan omforme formelen til å finne en katet:
$a = \\sqrt{c^2 - b^2}$

$a^2 = c^2 - b^2$
$a^2 = 20^2 - 16^2 = 400 - 256 = 144$
$a = \\sqrt{144} = 12$ cm

**Den andre kateten er 12 cm.**`,
        hints: ['Bruk formelen $a = \\sqrt{c^2 - b^2}$ som er vist i figuren'],
      },
    },
    {
      id: '1t-5-3-ex-10',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Se på figuren. En TV-skjerm oppgis i tommer diagonalt. En 55-tommers TV har bredde 48 tommer. Hvor høy er skjermen? (Bruk at diagonalen deler rektangelet i to rettvinklede trekanter der diagonalen er hypotenusen.)',
        image: '/images/geometry/pytagoras.svg',
        solution: `Diagonalen er hypotenusen ($c = 55$), bredden er én katet ($b = 48$).

$a = \\sqrt{c^2 - b^2} = \\sqrt{55^2 - 48^2}$
$a = \\sqrt{3025 - 2304} = \\sqrt{721} \\approx 26{,}9$ tommer

**Skjermen er cirka 27 tommer høy.**`,
        hints: ['Diagonalen er hypotenusen, bredden er én katet'],
      },
    },
    // ========== OPPGAVER MED FIGURER ==========
    {
      id: '1t-5-3-figur-oppgave-intro',
      type: 'text',
      content: `### Oppgaver med figurer

I oppgavene nedenfor skal du bruke Pytagoras' setning til å finne ukjente sider. Studer figuren nøye før du løser oppgaven.`,
    },
    {
      id: '1t-5-3-ex-11',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk figuren til å finne den ukjente siden. Trekanten er rettvinklet.',
        image: '/images/textbook/1t/kap5/oppgave-pytagoras-1.svg',
        solution: `Fra figuren ser vi at de to katetene er 6 og 8. Vi skal finne hypotenusen.

$c = \\sqrt{a^2 + b^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$

**Den ukjente siden er 10.**

(Dette er det pytagoreiske trippelet 6-8-10, som er en dobling av 3-4-5.)`,
        hints: ['Bruk formelen $c = \\sqrt{a^2 + b^2}$'],
      },
    },
    {
      id: '1t-5-3-ex-12',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Studer figuren nedenfor. Finn den ukjente kateten $x$.',
        image: '/images/textbook/1t/kap5/pytagoras-ukjent-katet.svg',
        solution: `Fra figuren ser vi at hypotenusen er 13 og én katet er 12. Vi skal finne den andre kateten $x$.

$x^2 + 12^2 = 13^2$
$x^2 + 144 = 169$
$x^2 = 169 - 144 = 25$
$x = \\sqrt{25} = 5$

**Den ukjente kateten er 5.**

(Dette er det pytagoreiske trippelet 5-12-13.)`,
        hints: ['Bruk formelen $a = \\sqrt{c^2 - b^2}$ for å finne en katet'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_5_4: TextbookChapter = {
  id: '1t-5-4',
  courseId: '1t',
  chapterNumber: '5.4',
  title: 'Trigonometri i rettvinklede trekanter',
  description: 'Sinus, cosinus og tangens i rettvinklede trekanter.',
  estimatedMinutes: 30,
  competenceGoals: ['gjøre rede for definisjonene av sinus, cosinus og tangens'],
  content: [
    {
      id: '1t-5-4-intro',
      type: 'text',
      content: `## Trigonometri

**Trigonometri** betyr «trekantmåling» og handler om sammenhengen mellom vinkler og sider i trekanter.

I en rettvinklet trekant definerer vi tre viktige forhold mellom sidene:
- **Sinus** (sin)
- **Cosinus** (cos)
- **Tangens** (tan)

Disse defineres i forhold til en **spiss vinkel** i trekanten.`,
    },
    {
      id: '1t-5-4-def-sider',
      type: 'definition',
      title: 'Sider i forhold til en vinkel',
      content: `Når vi ser på en spiss vinkel $v$ i en rettvinklet trekant:

- **Hosliggende katet:** Kateten som ligger inntil vinkelen $v$
- **Motstående katet:** Kateten som ligger overfor vinkelen $v$
- **Hypotenus:** Den lengste siden (overfor den rette vinkelen)`,
    },
    {
      id: '1t-5-4-theorem',
      type: 'theorem',
      title: 'Definisjon av sin, cos og tan',
      content: `For en spiss vinkel $v$ i en rettvinklet trekant:

$$\\sin v = \\frac{\\text{motstående katet}}{\\text{hypotenus}}$$

$$\\cos v = \\frac{\\text{hosliggende katet}}{\\text{hypotenus}}$$

$$\\tan v = \\frac{\\text{motstående katet}}{\\text{hosliggende katet}}$$

**Huskeregel:** SOH-CAH-TOA
- **S**in = **O**pposite / **H**ypotenuse
- **C**os = **A**djacent / **H**ypotenuse
- **T**an = **O**pposite / **A**djacent`,
    },
    {
      id: '1t-5-4-sincos-trekant-bilde',
      type: 'image',
      src: '/images/trigonometry/sincos-trekant.svg',
      alt: 'Rettvinklet trekant med sinus, cosinus og tangens markert',
      caption: 'De trigonometriske forholdene i en rettvinklet trekant',
    },
    {
      id: '1t-5-4-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'I en rettvinklet trekant er vinkelen $v = 30°$, og hypotenusen er 10 cm. Finn motstående katet.',
      solution: `Vi bruker sinus fordi vi skal finne motstående katet når vi kjenner hypotenusen:

$\\sin 30° = \\frac{\\text{motstående}}{\\text{hypotenus}}$

$\\sin 30° = \\frac{x}{10}$

$x = 10 \\cdot \\sin 30° = 10 \\cdot 0{,}5 = 5$

**Motstående katet er 5 cm.**`,
    },
    {
      id: '1t-5-4-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'I en rettvinklet trekant er vinkelen $v = 45°$, og hosliggende katet er 8 cm. Finn hypotenusen.',
      solution: `Vi bruker cosinus:

$\\cos 45° = \\frac{\\text{hosliggende}}{\\text{hypotenus}}$

$\\cos 45° = \\frac{8}{c}$

$c = \\frac{8}{\\cos 45°} = \\frac{8}{0{,}707...} \\approx 11{,}3$

**Hypotenusen er cirka 11,3 cm.**`,
    },
    {
      id: '1t-5-4-text-finne-vinkel',
      type: 'text',
      content: `### Finne vinkler

Når vi kjenner sidene og skal finne en vinkel, bruker vi **inverse trigonometriske funksjoner**:

- $v = \\arcsin\\left(\\frac{\\text{motstående}}{\\text{hypotenus}}\\right)$ eller $v = \\sin^{-1}(...)$
- $v = \\arccos\\left(\\frac{\\text{hosliggende}}{\\text{hypotenus}}\\right)$ eller $v = \\cos^{-1}(...)$
- $v = \\arctan\\left(\\frac{\\text{motstående}}{\\text{hosliggende}}\\right)$ eller $v = \\tan^{-1}(...)$

På kalkulatoren finner du disse som «sin⁻¹», «cos⁻¹» og «tan⁻¹».`,
    },
    {
      id: '1t-5-4-spesielle-vinkler-bilde',
      type: 'image',
      src: '/images/trigonometry/spesielle-vinkler.svg',
      alt: 'Tabelloversikt over trigonometriske verdier for 30, 45 og 60 grader',
      caption: 'Eksakte verdier for sinus, cosinus og tangens for spesielle vinkler',
    },
    {
      id: '1t-5-4-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'I en rettvinklet trekant er katetene 3 cm og 4 cm. Finn den minste spisse vinkelen.',
      solution: `Den minste vinkelen ligger overfor den korteste kateten (3 cm).

La $v$ være denne vinkelen. Da er 3 cm motstående og 4 cm hosliggende.

$\\tan v = \\frac{3}{4} = 0{,}75$

$v = \\tan^{-1}(0{,}75) \\approx 36{,}9°$

**Den minste vinkelen er cirka 36,9°.**`,
    },
    {
      id: '1t-5-4-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'En rampe skal ha en stigning på 8°. Hvor lang må rampen være for å nå en høyde på 1,2 m?',
      solution: `Høyden (1,2 m) er motstående katet, rampen er hypotenusen.

$\\sin 8° = \\frac{1{,}2}{L}$

$L = \\frac{1{,}2}{\\sin 8°} = \\frac{1{,}2}{0{,}139...} \\approx 8{,}6$

**Rampen må være cirka 8,6 m lang.**`,
    },
    {
      id: '1t-5-4-info-spesielle',
      type: 'note',
      content: `**Spesielle vinkler**

Verdiene for 30°, 45° og 60° er nyttige å kjenne:

| Vinkel | sin | cos | tan |
|--------|-----|-----|-----|
| 30° | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}}$ |
| 45° | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | 1 |
| 60° | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |`,
    },
    {
      id: '1t-5-4-summary',
      type: 'note',
      content: `**Oppsummering**

**Velg riktig funksjon:**
- Kjent hypotenus + vil finne motstående → sin
- Kjent hypotenus + vil finne hosliggende → cos
- Kjent én katet + vil finne den andre → tan
- Skal finne vinkel → bruk invers (sin⁻¹, cos⁻¹, tan⁻¹)`,
    },
    {
      id: '1t-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den ukjente siden $x$:',
        subTasks: [
          { label: 'a', task: 'Vinkel 30°, hypotenus 12, finn motstående', solution: '$x = 12 \\cdot \\sin 30° = 12 \\cdot 0{,}5 = 6$' },
          { label: 'b', task: 'Vinkel 60°, hypotenus 10, finn hosliggende', solution: '$x = 10 \\cdot \\cos 60° = 10 \\cdot 0{,}5 = 5$' },
          { label: 'c', task: 'Vinkel 45°, hosliggende 7, finn motstående', solution: '$x = 7 \\cdot \\tan 45° = 7 \\cdot 1 = 7$' },
        ],
        solution: 'a) 6, b) 5, c) 7',
      },
    },
    {
      id: '1t-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vinkelen $v$:',
        subTasks: [
          { label: 'a', task: 'Motstående 5, hypotenus 10', solution: '$v = \\sin^{-1}(0{,}5) = 30°$' },
          { label: 'b', task: 'Hosliggende 6, hypotenus 12', solution: '$v = \\cos^{-1}(0{,}5) = 60°$' },
          { label: 'c', task: 'Motstående 8, hosliggende 8', solution: '$v = \\tan^{-1}(1) = 45°$' },
        ],
        solution: 'a) 30°, b) 60°, c) 45°',
      },
    },
    {
      id: '1t-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et tre kaster en skygge på 15 m når solens vinkel over horisonten er 35°. Hvor høyt er treet?',
        solution: '$h = 15 \\cdot \\tan 35° = 15 \\cdot 0{,}700... \\approx 10{,}5$ m',
        hints: ['Treets høyde er motstående, skyggen er hosliggende'],
      },
    },
    {
      id: '1t-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En helikopterpilot ser ned på et skip med en vinkel på 25° under horisontalt. Helikopteret er 800 m over havet. Hva er den horisontale avstanden til skipet?',
        solution: '$d = \\frac{800}{\\tan 25°} = \\frac{800}{0{,}466...} \\approx 1716$ m',
        hints: ['Tegn figuren og finn hvilken side som er motstående og hosliggende'],
      },
    },
    {
      id: '1t-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En sti går rett opp en bakke. Etter 200 m har du steget 50 m i høyden. Hva er stigningsvinkelen?',
        solution: '$v = \\sin^{-1}\\left(\\frac{50}{200}\\right) = \\sin^{-1}(0{,}25) \\approx 14{,}5°$',
        hints: ['Stien er hypotenusen, høyden er motstående'],
      },
    },
    {
      id: '1t-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et fly tar av med en vinkel på 12° over horisonten. Etter å ha fløyet 3 km (langs flybanen), hvor høyt og langt horisontalt er det fra startpunktet?',
        subTasks: [
          { label: 'a', task: 'Finn høyden', solution: '$h = 3000 \\cdot \\sin 12° \\approx 624$ m' },
          { label: 'b', task: 'Finn horisontal avstand', solution: '$d = 3000 \\cdot \\cos 12° \\approx 2934$ m' },
        ],
        solution: 'Høyde ≈ 624 m, horisontal avstand ≈ 2934 m',
        hints: ['Flybanen er hypotenusen'],
      },
    },
    // ========== NYE OPPGAVER MED ILLUSTRASJONER ==========
    {
      id: '1t-5-4-ill-trig',
      type: 'image',
      src: '/images/trigonometry/sincos-trekant.svg',
      alt: 'Trigonometri i rettvinklet trekant med sinus, cosinus og tangens',
      caption: 'Trigonometriske forhold i en rettvinklet trekant',
    },
    {
      id: '1t-5-4-ex-7',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Studer figuren over som viser de trigonometriske forholdene. I en rettvinklet trekant er vinkelen $v = 40°$ og hypotenusen $c = 15$ cm. Bruk definisjonene fra figuren til å finne motstående katet $a$ og hosliggende katet $b$.',
        image: '/images/trigonometry/sincos-trekant.svg',
        subTasks: [
          { label: 'a', task: 'Finn motstående katet $a$', solution: '$a = c \\cdot \\sin v = 15 \\cdot \\sin 40° \\approx 9{,}64$ cm' },
          { label: 'b', task: 'Finn hosliggende katet $b$', solution: '$b = c \\cdot \\cos v = 15 \\cdot \\cos 40° \\approx 11{,}49$ cm' },
        ],
        solution: 'a) ca. 9,64 cm, b) ca. 11,49 cm',
        hints: ['Fra figuren: $\\sin v = a/c$ og $\\cos v = b/c$. Omform for å finne $a$ og $b$.'],
      },
    },
    {
      id: '1t-5-4-ex-8',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Se på figuren for trigonometri. I trekanten er hosliggende katet $b = 8$ cm og motstående katet $a = 6$ cm. Bruk tangens fra figuren til å finne vinkelen $v$.',
        image: '/images/trigonometry/sincos-trekant.svg',
        solution: `Fra figuren ser vi at $\\tan v = a/b$ (motstående/hosliggende).

$\\tan v = \\frac{6}{8} = 0{,}75$
$v = \\tan^{-1}(0{,}75) \\approx 36{,}9°$

**Vinkelen er cirka 36,9°.**`,
        hints: ['Bruk definisjonen $\\tan v = a/b$ fra figuren'],
      },
    },
    {
      id: '1t-5-4-ex-9',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk huskeregelen SOH-CAH-TOA fra figuren. En fyrlykt er 35 m høy. Fra et punkt på bakken ser man toppen av fyrlykten med en elevasjonsvinkel på 28°. Hvor langt unna fyrlykten står man?',
        image: '/images/trigonometry/sincos-trekant.svg',
        solution: `Fyrlykthøyden er motstående katet, avstanden er hosliggende katet.

$\\tan 28° = \\frac{\\text{motstående}}{\\text{hosliggende}} = \\frac{35}{d}$

$d = \\frac{35}{\\tan 28°} = \\frac{35}{0{,}532} \\approx 65{,}8$ m

**Man står cirka 66 m fra fyrlykten.**`,
        hints: ['Tegn situasjonen og identifiser motstående og hosliggende sider i forhold til vinkelen'],
      },
    },
    // ========== OPPGAVER MED FIGURER ==========
    {
      id: '1t-5-4-figur-oppgave-intro',
      type: 'text',
      content: `### Oppgaver med figurer

I oppgavene nedenfor skal du bruke trigonometri til å finne ukjente sider eller vinkler. Studer figuren nøye og identifiser hvilke sider som er hosliggende, motstående og hypotenus i forhold til den gitte vinkelen.`,
    },
    {
      id: '1t-5-4-figur-trig',
      type: 'image',
      src: '/images/textbook/1t/kap5/trig-rettvinklet.svg',
      alt: 'Rettvinklet trekant med hosliggende, motstående og hypotenus markert',
      caption: 'Huskeregel: $\\sin v = \\frac{\\text{motstående}}{\\text{hypotenus}}$, $\\cos v = \\frac{\\text{hosliggende}}{\\text{hypotenus}}$, $\\tan v = \\frac{\\text{motstående}}{\\text{hosliggende}}$',
    },
    {
      id: '1t-5-4-ex-10',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk figuren til å finne den ukjente siden. Trekanten har en vinkel på 35° og hypotenus 10.',
        image: '/images/textbook/1t/kap5/trig-oppgave1.svg',
        solution: `Fra figuren ser vi at vi skal finne hosliggende katet $x$ når vi kjenner hypotenusen og vinkelen.

Vi bruker cosinus:
$\\cos 35° = \\frac{x}{10}$
$x = 10 \\cdot \\cos 35° = 10 \\cdot 0{,}819 \\approx 8{,}2$

**Den hosliggende kateten er cirka 8,2.**

For motstående katet $y$:
$\\sin 35° = \\frac{y}{10}$
$y = 10 \\cdot \\sin 35° = 10 \\cdot 0{,}574 \\approx 5{,}7$

**Den motstående kateten er cirka 5,7.**`,
        hints: ['Bruk cosinus for å finne hosliggende katet når du kjenner hypotenusen'],
      },
    },
    {
      id: '1t-5-4-ex-11',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'I figuren nedenfor er hypotenusen 12 og vinkelen er 40°. Finn den hosliggende kateten.',
        image: '/images/textbook/1t/kap5/oppgave-trig-1.svg',
        solution: `Vi skal finne hosliggende katet når vi kjenner hypotenusen og vinkelen.

Vi bruker cosinus:
$\\cos 40° = \\frac{\\text{hosliggende}}{\\text{hypotenus}} = \\frac{x}{12}$

$x = 12 \\cdot \\cos 40° = 12 \\cdot 0{,}766 \\approx 9{,}2$

**Den hosliggende kateten er cirka 9,2.**`,
        hints: ['Cosinus brukes når du skal finne hosliggende katet og kjenner hypotenusen'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_5_5: TextbookChapter = {
  id: '1t-5-5',
  courseId: '1t',
  chapterNumber: '5.5',
  title: 'Areal av trekanter',
  description: 'Ulike formler for areal av trekanter.',
  estimatedMinutes: 30,
  competenceGoals: ['beregne areal av trekanter med ulike metoder'],
  content: [
    {
      id: '1t-5-5-intro',
      type: 'text',
      content: `## Areal av trekanter

Det finnes flere måter å beregne arealet av en trekant på. Hvilken formel vi bruker, avhenger av hva vi vet om trekanten.`,
    },
    {
      id: '1t-5-5-theorem-1',
      type: 'theorem',
      title: 'Grunnformel for areal',
      content: `$$A = \\frac{1}{2} \\cdot g \\cdot h$$

der $g$ er grunnlinjen og $h$ er høyden (vinkelrett avstand fra grunnlinjen til motstående hjørne).

Denne formelen fungerer for **alle** trekanter.`,
    },
    {
      id: '1t-5-5-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Finn arealet av en trekant med grunnlinje 8 cm og høyde 5 cm.',
      solution: `$A = \\frac{1}{2} \\cdot g \\cdot h = \\frac{1}{2} \\cdot 8 \\cdot 5 = 20$ cm²`,
    },
    {
      id: '1t-5-5-theorem-2',
      type: 'theorem',
      title: 'Arealsetningen',
      content: `Når vi kjenner to sider og vinkelen mellom dem:

$$A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$$

der $a$ og $b$ er to sider, og $C$ er vinkelen mellom dem.`,
    },
    {
      id: '1t-5-5-arealsetningen-bilde',
      type: 'image',
      src: '/images/trigonometry/arealsetningen.svg',
      alt: 'Trekant med to sider a og b og vinkelen C mellom dem',
      caption: 'Arealsetningen bruker to sider og vinkelen mellom dem',
    },
    {
      id: '1t-5-5-text-bevis',
      type: 'text',
      content: `### Begrunnelse for arealsetningen

I en trekant der vi kjenner sidene $a$ og $b$ og vinkelen $C$ mellom dem:

Høyden $h$ fra side $a$ ned til side $b$ er: $h = a \\cdot \\sin C$

Da blir arealet:
$A = \\frac{1}{2} \\cdot b \\cdot h = \\frac{1}{2} \\cdot b \\cdot a \\cdot \\sin C = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$`,
    },
    {
      id: '1t-5-5-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'En trekant har sider 7 cm og 9 cm, og vinkelen mellom dem er 50°. Finn arealet.',
      solution: `$A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$
$A = \\frac{1}{2} \\cdot 7 \\cdot 9 \\cdot \\sin 50°$
$A = \\frac{1}{2} \\cdot 7 \\cdot 9 \\cdot 0{,}766...$
$A \\approx 24{,}1$ cm²`,
    },
    {
      id: '1t-5-5-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Finn arealet av en likesidet trekant med side 6 cm.',
      solution: `I en likesidet trekant er alle vinkler 60°.

$A = \\frac{1}{2} \\cdot 6 \\cdot 6 \\cdot \\sin 60°$
$A = \\frac{1}{2} \\cdot 36 \\cdot \\frac{\\sqrt{3}}{2}$
$A = 9\\sqrt{3} \\approx 15{,}6$ cm²`,
    },
    {
      id: '1t-5-5-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'To sider i en trekant er 8 m og 10 m. Vinkelen mellom dem er ukjent, men arealet er 32 m². Finn vinkelen.',
      solution: `$A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$
$32 = \\frac{1}{2} \\cdot 8 \\cdot 10 \\cdot \\sin C$
$32 = 40 \\cdot \\sin C$
$\\sin C = \\frac{32}{40} = 0{,}8$
$C = \\sin^{-1}(0{,}8) \\approx 53{,}1°$

**Vinkelen er cirka 53,1°** (eller 126,9° hvis vinkelen er stump).`,
    },
    {
      id: '1t-5-5-info-herons',
      type: 'note',
      content: `**Herons formel (tilleggsstoff)**

Når vi bare kjenner de tre sidene $a$, $b$ og $c$:

$$s = \\frac{a + b + c}{2}$$ (halve omkretsen)

$$A = \\sqrt{s(s-a)(s-b)(s-c)}$$

Dette kalles **Herons formel**.`,
    },
    {
      id: '1t-5-5-summary',
      type: 'note',
      content: `**Velg riktig formel**

- **Grunnlinje og høyde kjent:** $A = \\frac{1}{2} \\cdot g \\cdot h$
- **To sider og vinkelen mellom:** $A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$
- **Bare sidene kjent:** Herons formel`,
    },
    {
      id: '1t-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av trekanter med:',
        subTasks: [
          { label: 'a', task: 'Grunnlinje 10 cm, høyde 6 cm', solution: '$A = \\frac{1}{2} \\cdot 10 \\cdot 6 = 30$ cm²' },
          { label: 'b', task: 'Grunnlinje 12 cm, høyde 8 cm', solution: '$A = \\frac{1}{2} \\cdot 12 \\cdot 8 = 48$ cm²' },
          { label: 'c', task: 'Grunnlinje 15 cm, høyde 4 cm', solution: '$A = \\frac{1}{2} \\cdot 15 \\cdot 4 = 30$ cm²' },
        ],
        solution: 'a) 30 cm², b) 48 cm², c) 30 cm²',
      },
    },
    {
      id: '1t-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk arealsetningen til å finne arealet:',
        subTasks: [
          { label: 'a', task: 'Sider 5 og 8, vinkel 30° mellom', solution: '$A = \\frac{1}{2} \\cdot 5 \\cdot 8 \\cdot \\sin 30° = 10$ cm²' },
          { label: 'b', task: 'Sider 6 og 6, vinkel 60° mellom', solution: '$A = \\frac{1}{2} \\cdot 6 \\cdot 6 \\cdot \\sin 60° = 9\\sqrt{3} \\approx 15{,}6$ cm²' },
          { label: 'c', task: 'Sider 10 og 12, vinkel 90° mellom', solution: '$A = \\frac{1}{2} \\cdot 10 \\cdot 12 \\cdot \\sin 90° = 60$ cm²' },
        ],
        solution: 'a) 10 cm², b) 15,6 cm², c) 60 cm²',
      },
    },
    {
      id: '1t-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En parallellogram har sider 8 cm og 12 cm, og en vinkel på 70°. Finn arealet.',
        solution: 'Parallellogrammet deles i to kongruente trekanter. Areal = $8 \\cdot 12 \\cdot \\sin 70° \\approx 90{,}2$ cm²',
        hints: ['Arealet av en parallellogram er $a \\cdot b \\cdot \\sin C$'],
      },
    },
    {
      id: '1t-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et tomt har form som en trekant. To sider er 40 m og 55 m, og vinkelen mellom dem er 65°. Finn arealet i m².',
        solution: '$A = \\frac{1}{2} \\cdot 40 \\cdot 55 \\cdot \\sin 65° \\approx 997$ m²',
      },
    },
    {
      id: '1t-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En trekant har sider 7 m og 11 m. Vinkelen mellom dem gjør at arealet blir maksimalt. Finn dette arealet.',
        solution: 'Arealet er maksimalt når $\\sin C = 1$, altså $C = 90°$. $A_{max} = \\frac{1}{2} \\cdot 7 \\cdot 11 = 38{,}5$ m²',
        hints: ['Når er $\\sin C$ størst?'],
      },
    },
    // ========== NYE OPPGAVER MED ILLUSTRASJONER ==========
    {
      id: '1t-5-5-ill-areal',
      type: 'image',
      src: '/images/geometry/areal-trekant.svg',
      alt: 'Areal av trekant med grunnlinje og høyde',
      caption: 'Arealformelen for trekant: $A = \\frac{g \\cdot h}{2}$',
    },
    {
      id: '1t-5-5-ill-areal-parallellogram',
      type: 'image',
      src: '/images/geometry/areal-parallellogram.svg',
      alt: 'Areal av parallellogram med grunnlinje og hoyde',
      caption: 'Arealformelen for parallellogram: $A = g \\cdot h$',
    },
    {
      id: '1t-5-5-ill-areal-trapes',
      type: 'image',
      src: '/images/geometry/areal-trapes.svg',
      alt: 'Areal av trapes med parallelle sider og hoyde',
      caption: 'Arealformelen for trapes: $A = \\frac{(a + b) \\cdot h}{2}$',
    },
    {
      id: '1t-5-5-ill-areal-sirkel',
      type: 'image',
      src: '/images/geometry/areal-sirkel.svg',
      alt: 'Areal av sirkel med radius',
      caption: 'Arealformelen for sirkel: $A = \\pi r^2$',
    },
    {
      id: '1t-5-5-ill-omkrets-sirkel',
      type: 'image',
      src: '/images/geometry/omkrets-sirkel.svg',
      alt: 'Omkrets av sirkel med radius',
      caption: 'Omkretsen til en sirkel: $O = 2\\pi r$',
    },
    {
      id: '1t-5-5-ill-volum-sylinder',
      type: 'image',
      src: '/images/geometry/volum-sylinder.svg',
      alt: 'Volum av sylinder med radius og hoyde',
      caption: 'Volumformelen for sylinder: $V = \\pi r^2 h$',
    },
    {
      id: '1t-5-5-ill-volum-kjegle',
      type: 'image',
      src: '/images/geometry/volum-kjegle.svg',
      alt: 'Volum av kjegle med radius og hoyde',
      caption: 'Volumformelen for kjegle: $V = \\frac{1}{3}\\pi r^2 h$',
    },
    {
      id: '1t-5-5-ill-volum-kule',
      type: 'image',
      src: '/images/geometry/volum-kule.svg',
      alt: 'Volum av kule med radius',
      caption: 'Volumformelen for kule: $V = \\frac{4}{3}\\pi r^3$',
    },
    {
      id: '1t-5-5-ill-overflate-kube',
      type: 'image',
      src: '/images/geometry/overflate-kube.svg',
      alt: 'Overflate av kube med sidelengde',
      caption: 'Overflaten til en kube: $O = 6s^2$',
    },
    {
      id: '1t-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Studer figuren over som viser hvordan arealet av en trekant beregnes. En trekant har grunnlinje $g = 14$ cm og høyde $h = 9$ cm. Beregn arealet.',
        image: '/images/geometry/areal-trekant.svg',
        solution: `Fra figuren ser vi formelen $A = \\frac{g \\cdot h}{2}$

$A = \\frac{14 \\cdot 9}{2} = \\frac{126}{2} = 63$ cm²

**Arealet er 63 cm².**`,
        hints: ['Bruk formelen fra figuren: $A = \\frac{g \\cdot h}{2}$'],
      },
    },
    {
      id: '1t-5-5-ex-7',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Se på figuren for areal av trekant. Et trekantet skilt har areal 180 cm² og grunnlinje 24 cm. Hvor høyt er skiltet? (Finn høyden $h$.)',
        image: '/images/geometry/areal-trekant.svg',
        solution: `Vi løser arealformelen for $h$:
$A = \\frac{g \\cdot h}{2}$
$180 = \\frac{24 \\cdot h}{2}$
$180 = 12h$
$h = 15$ cm

**Høyden er 15 cm.**`,
        hints: ['Løs formelen $A = \\frac{g \\cdot h}{2}$ for $h$'],
      },
    },
    {
      id: '1t-5-5-ill-formlike',
      type: 'image',
      src: '/images/geometry/formlike-trekanter.svg',
      alt: 'Formlike trekanter med forholdstall k = 2',
      caption: 'Formlike trekanter har samme vinkler og proporsjonale sider',
    },
    {
      id: '1t-5-5-ex-8',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Studer figuren for formlike trekanter. Den lille trekanten har sider 3, 4 og 5, mens den store har sider 6, 8 og 10 (forholdstallet $k = 2$). Hva er forholdet mellom arealene til de to trekantene?',
        image: '/images/geometry/formlike-trekanter.svg',
        solution: `Liten trekant: $A_1 = \\frac{4 \\cdot 3}{2} = 6$ (med 4 som grunnlinje og 3 som høyde i en 3-4-5 trekant)

Stor trekant: $A_2 = \\frac{8 \\cdot 6}{2} = 24$

Forholdet: $\\frac{A_2}{A_1} = \\frac{24}{6} = 4 = k^2$

**Arealforholdet er 4, som er kvadratet av forholdstallet ($k^2 = 2^2 = 4$).**

Dette er en generell regel: Når sidene i en trekant ganges med $k$, ganges arealet med $k^2$.`,
        hints: ['Beregn arealet av begge trekanter og sammenlign. Hva er sammenhengen med forholdstallet $k$?'],
      },
    },
    // ========== OPPGAVER MED FIGURER ==========
    {
      id: '1t-5-5-figur-oppgave-intro',
      type: 'text',
      content: `### Oppgaver med figurer

I oppgavene nedenfor skal du beregne arealet av trekanter. Studer figuren og velg riktig formel basert på informasjonen som er gitt.`,
    },
    {
      id: '1t-5-5-figur-grunnlinje-hoyde',
      type: 'image',
      src: '/images/textbook/1t/kap5/areal-grunnlinje-hoyde.svg',
      alt: 'Trekant med grunnlinje g og høyde h markert',
      caption: 'Areal med grunnlinje og høyde: $A = \\frac{g \\cdot h}{2}$',
    },
    {
      id: '1t-5-5-ex-9',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk figuren til å finne arealet av trekanten. Grunnlinjen er 8 og høyden er 5.',
        image: '/images/textbook/1t/kap5/oppgave-areal-1.svg',
        solution: `Vi bruker formelen for areal med grunnlinje og høyde:

$A = \\frac{g \\cdot h}{2} = \\frac{8 \\cdot 5}{2} = \\frac{40}{2} = 20$

**Arealet av trekanten er 20.**`,
        hints: ['Bruk formelen $A = \\frac{g \\cdot h}{2}$'],
      },
    },
    {
      id: '1t-5-5-figur-to-sider-vinkel',
      type: 'image',
      src: '/images/textbook/1t/kap5/areal-to-sider-vinkel.svg',
      alt: 'Trekant med to sider a og b og mellomliggende vinkel C',
      caption: 'Areal med to sider og mellomliggende vinkel: $A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$',
    },
    {
      id: '1t-5-5-ex-10',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'I figuren nedenfor har trekanten to sider på 6 og 8, og vinkelen mellom dem er 60°. Finn arealet.',
        image: '/images/textbook/1t/kap5/oppgave-areal-vinkel.svg',
        solution: `Vi bruker formelen for areal med to sider og mellomliggende vinkel:

$A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$

$A = \\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot \\sin 60°$

$A = \\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot \\frac{\\sqrt{3}}{2}$

$A = 24 \\cdot \\frac{\\sqrt{3}}{2} = 12\\sqrt{3} \\approx 20{,}8$

**Arealet av trekanten er cirka 20,8.**`,
        hints: ['Bruk formelen $A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$ når du kjenner to sider og vinkelen mellom dem'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_5_6: TextbookChapter = {
  id: '1t-5-6',
  courseId: '1t',
  chapterNumber: '5.6',
  title: 'Sinussetningen',
  description: 'Sinussetningen med bevis og anvendelser.',
  estimatedMinutes: 35,
  competenceGoals: ['begrunne sinussetningen', 'bruke sinussetningen til å løse trekanter'],
  content: [
    {
      id: '1t-5-6-intro',
      type: 'text',
      content: `## Sinussetningen

**Sinussetningen** er en formel som gjelder for **alle** trekanter, ikke bare rettvinklede. Den gir oss en sammenheng mellom sider og vinkler.`,
    },
    {
      id: '1t-5-6-theorem',
      type: 'theorem',
      title: 'Sinussetningen',
      content: `I en trekant med sider $a$, $b$, $c$ og motstående vinkler $A$, $B$, $C$ gjelder:

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

eller ekvivalent:

$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$$`,
    },
    {
      id: '1t-5-6-sinussetningen-bilde',
      type: 'image',
      src: '/images/trigonometry/sinussetningen.svg',
      alt: 'Trekant med sider a, b, c og motstående vinkler A, B, C',
      caption: 'Sinussetningen gir sammenheng mellom sider og motstående vinkler',
    },
    {
      id: '1t-5-6-text-bevis',
      type: 'text',
      content: `### Begrunnelse

La $h$ være høyden fra $C$ ned til siden $c$.

Fra den ene rettvinklede trekanten: $\\sin A = \\frac{h}{b}$, så $h = b \\cdot \\sin A$

Fra den andre rettvinklede trekanten: $\\sin B = \\frac{h}{a}$, så $h = a \\cdot \\sin B$

Siden begge uttrykk er lik $h$:
$$b \\cdot \\sin A = a \\cdot \\sin B$$
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$$

Ved å gjenta med høyde fra et annet hjørne får vi hele sinussetningen.`,
    },
    {
      id: '1t-5-6-info-bruk',
      type: 'note',
      content: `**Når bruker vi sinussetningen?**

Sinussetningen brukes når vi kjenner:
- **To vinkler og én side** (VSV eller VVS)
- **To sider og én vinkel overfor en av sidene** (SVS der vinkelen er overfor)

**Merk:** Hvis vi kjenner to sider og vinkelen mellom dem, bruker vi cosinussetningen i stedet.`,
    },
    {
      id: '1t-5-6-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'I trekant ABC er $A = 40°$, $B = 75°$ og $a = 10$. Finn side $b$.',
      solution: `Vi bruker sinussetningen:
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$$

$$\\frac{10}{\\sin 40°} = \\frac{b}{\\sin 75°}$$

$$b = \\frac{10 \\cdot \\sin 75°}{\\sin 40°} = \\frac{10 \\cdot 0{,}966}{0{,}643} \\approx 15{,}0$$

**Side $b \\approx 15{,}0$**`,
    },
    {
      id: '1t-5-6-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'I trekant ABC er $a = 8$, $b = 12$ og $A = 35°$. Finn vinkel $B$.',
      solution: `Vi bruker sinussetningen:
$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b}$$

$$\\frac{\\sin 35°}{8} = \\frac{\\sin B}{12}$$

$$\\sin B = \\frac{12 \\cdot \\sin 35°}{8} = \\frac{12 \\cdot 0{,}574}{8} \\approx 0{,}861$$

$$B = \\sin^{-1}(0{,}861) \\approx 59{,}4°$$

**Vinkel $B \\approx 59{,}4°$**`,
    },
    {
      id: '1t-5-6-warning',
      type: 'warning',
      title: 'Det tvetydige tilfellet',
      content: `Når vi skal finne en vinkel med sinussetningen, kan det være **to mulige løsninger** fordi $\\sin v = \\sin(180° - v)$.

For eksempel: Hvis $\\sin B = 0{,}5$, kan $B = 30°$ eller $B = 150°$.

Du må sjekke hvilken verdi som gir mening ved å kontrollere at vinkelsummen blir 180°.`,
    },
    {
      id: '1t-5-6-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'I trekant ABC er $a = 7$, $b = 9$ og $A = 30°$. Finn alle mulige verdier for vinkel $B$.',
      solution: `$$\\sin B = \\frac{b \\cdot \\sin A}{a} = \\frac{9 \\cdot \\sin 30°}{7} = \\frac{9 \\cdot 0{,}5}{7} \\approx 0{,}643$$

$B_1 = \\sin^{-1}(0{,}643) \\approx 40°$
$B_2 = 180° - 40° = 140°$

Sjekk:
- Hvis $B = 40°$: $C = 180° - 30° - 40° = 110°$ ✓
- Hvis $B = 140°$: $C = 180° - 30° - 140° = 10°$ ✓

**Begge løsningene er mulige:** $B \\approx 40°$ eller $B \\approx 140°$`,
    },
    {
      id: '1t-5-6-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Et tårn og en bygning står 50 m fra hverandre. Fra toppen av bygningen ser man toppen av tårnet med en vinkel på 35° over horisontalt, og bunnen av tårnet med en vinkel på 20° under horisontalt. Hvor høyt er tårnet?',
      solution: `La $h_b$ være bygningens høyde og $h_t$ tårnets høyde.

Først finner vi avstanden langs synslinjen til bunnen av tårnet:
$\\tan 20° = \\frac{h_b}{50}$ gir at vi trenger mer info.

Alternativt: La $x$ være hvor mye høyere tårnet er.
$\\tan 35° = \\frac{x}{50}$
$x = 50 \\cdot \\tan 35° \\approx 35{,}0$ m

Så $h_b$ (fra $\\tan 20°$): $h_b = 50 \\cdot \\tan 20° \\approx 18{,}2$ m

Tårnets høyde: $h_t = h_b + x \\approx 18{,}2 + 35{,}0 = 53{,}2$ m`,
    },
    {
      id: '1t-5-6-summary',
      type: 'note',
      content: `**Oppsummering**

**Sinussetningen:** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$

**Bruk til å:**
- Finne ukjent side når du kjenner to vinkler og én side
- Finne ukjent vinkel når du kjenner to sider og én motstående vinkel

**Husk:** Sjekk alltid for tvetydig tilfelle når du finner vinkler!`,
    },
    {
      id: '1t-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-5-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den ukjente siden:',
        subTasks: [
          { label: 'a', task: '$A = 50°$, $B = 70°$, $a = 15$. Finn $b$.', solution: '$b = \\frac{15 \\cdot \\sin 70°}{\\sin 50°} \\approx 18{,}4$' },
          { label: 'b', task: '$A = 45°$, $C = 80°$, $c = 20$. Finn $a$.', solution: '$a = \\frac{20 \\cdot \\sin 45°}{\\sin 80°} \\approx 14{,}4$' },
        ],
        solution: 'a) 18,4; b) 14,4',
      },
    },
    {
      id: '1t-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-5-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den ukjente vinkelen:',
        subTasks: [
          { label: 'a', task: '$a = 10$, $b = 14$, $A = 40°$. Finn $B$.', solution: '$\\sin B = \\frac{14 \\cdot \\sin 40°}{10} \\approx 0{,}90$, $B \\approx 64°$' },
          { label: 'b', task: '$a = 8$, $c = 11$, $A = 35°$. Finn $C$.', solution: '$\\sin C = \\frac{11 \\cdot \\sin 35°}{8} \\approx 0{,}79$, $C \\approx 52°$' },
        ],
        solution: 'a) ≈ 64°; b) ≈ 52°',
      },
    },
    {
      id: '1t-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-5-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en trekant er $A = 55°$, $B = 65°$ og $c = 12$. Finn alle sider.',
        solution: '$C = 180° - 55° - 65° = 60°$. $a = \\frac{12 \\cdot \\sin 55°}{\\sin 60°} \\approx 11{,}4$. $b = \\frac{12 \\cdot \\sin 65°}{\\sin 60°} \\approx 12{,}6$',
        hints: ['Finn først vinkel C'],
      },
    },
    {
      id: '1t-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-5-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I en trekant er $a = 5$, $b = 8$ og $A = 25°$. Vis at det finnes to ulike trekanter, og finn begge verdier for $B$.',
        solution: '$\\sin B = \\frac{8 \\cdot \\sin 25°}{5} \\approx 0{,}676$. $B_1 \\approx 42{,}5°$ og $B_2 \\approx 137{,}5°$. Begge gir $C > 0$, så begge trekanter finnes.',
        hints: ['Sjekk om begge verdier gir en gyldig tredje vinkel'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_5_7: TextbookChapter = {
  id: '1t-5-7',
  courseId: '1t',
  chapterNumber: '5.7',
  title: 'Cosinussetningen',
  description: 'Cosinussetningen med bevis og anvendelser.',
  estimatedMinutes: 35,
  competenceGoals: ['begrunne cosinussetningen', 'bruke cosinussetningen til å løse trekanter'],
  content: [
    {
      id: '1t-5-7-intro',
      type: 'text',
      content: `## Cosinussetningen

**Cosinussetningen** er en generalisering av Pytagoras' setning som gjelder for **alle** trekanter.`,
    },
    {
      id: '1t-5-7-theorem',
      type: 'theorem',
      title: 'Cosinussetningen',
      content: `I en trekant med sider $a$, $b$, $c$ og motstående vinkler $A$, $B$, $C$ gjelder:

$$a^2 = b^2 + c^2 - 2bc \\cos A$$
$$b^2 = a^2 + c^2 - 2ac \\cos B$$
$$c^2 = a^2 + b^2 - 2ab \\cos C$$

**Merk:** Når $C = 90°$ blir $\\cos C = 0$, og vi får Pytagoras: $c^2 = a^2 + b^2$.`,
    },
    {
      id: '1t-5-7-cosinussetningen-bilde',
      type: 'image',
      src: '/images/trigonometry/cosinussetningen.svg',
      alt: 'Trekant med alle tre sider og vinkler markert for cosinussetningen',
      caption: 'Cosinussetningen utvider Pytagoras til alle trekanter',
    },
    {
      id: '1t-5-7-text-bevis',
      type: 'text',
      content: `### Begrunnelse

Plasser trekanten i et koordinatsystem med $C$ i origo, side $b$ langs $x$-aksen.

Da er $A = (b, 0)$ og $B = (a \\cos C, a \\sin C)$.

Avstanden $c$ fra $A$ til $B$:
$$c^2 = (a \\cos C - b)^2 + (a \\sin C)^2$$
$$c^2 = a^2 \\cos^2 C - 2ab \\cos C + b^2 + a^2 \\sin^2 C$$
$$c^2 = a^2(\\cos^2 C + \\sin^2 C) + b^2 - 2ab \\cos C$$
$$c^2 = a^2 + b^2 - 2ab \\cos C$$`,
    },
    {
      id: '1t-5-7-info-bruk',
      type: 'note',
      content: `**Når bruker vi cosinussetningen?**

**Finn ukjent side:** Når du kjenner to sider og vinkelen mellom dem (SVS).

**Finn ukjent vinkel:** Når du kjenner alle tre sidene (SSS).

Omskrevet for å finne vinkel:
$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$`,
    },
    {
      id: '1t-5-7-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'I trekant ABC er $b = 7$, $c = 10$ og $A = 60°$. Finn side $a$.',
      solution: `$$a^2 = b^2 + c^2 - 2bc \\cos A$$
$$a^2 = 7^2 + 10^2 - 2 \\cdot 7 \\cdot 10 \\cdot \\cos 60°$$
$$a^2 = 49 + 100 - 140 \\cdot 0{,}5$$
$$a^2 = 149 - 70 = 79$$
$$a = \\sqrt{79} \\approx 8{,}9$$

**Side $a \\approx 8{,}9$**`,
    },
    {
      id: '1t-5-7-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'I trekant ABC er $a = 5$, $b = 7$ og $c = 9$. Finn vinkel $C$.',
      solution: `$$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$
$$\\cos C = \\frac{5^2 + 7^2 - 9^2}{2 \\cdot 5 \\cdot 7}$$
$$\\cos C = \\frac{25 + 49 - 81}{70} = \\frac{-7}{70} = -0{,}1$$
$$C = \\cos^{-1}(-0{,}1) \\approx 95{,}7°$$

**Vinkel $C \\approx 95{,}7°$** (stump vinkel fordi cosinus er negativ)`,
    },
    {
      id: '1t-5-7-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'To skip starter fra samme havn. Skip A seiler 30 km mot nord, skip B seiler 40 km i retning 70° øst for nord. Hvor langt fra hverandre er skipene?',
      solution: `Vinkelen mellom rutene er 70°.

$$d^2 = 30^2 + 40^2 - 2 \\cdot 30 \\cdot 40 \\cdot \\cos 70°$$
$$d^2 = 900 + 1600 - 2400 \\cdot 0{,}342$$
$$d^2 = 2500 - 820{,}8 = 1679{,}2$$
$$d = \\sqrt{1679{,}2} \\approx 41{,}0$$

**Skipene er cirka 41 km fra hverandre.**`,
    },
    {
      id: '1t-5-7-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'En parallellogram har sider 8 cm og 12 cm, og den ene diagonalen er 15 cm. Finn vinklene i parallellogrammet.',
      solution: `La $A$ være vinkelen ved den korte siden.

$$15^2 = 8^2 + 12^2 - 2 \\cdot 8 \\cdot 12 \\cdot \\cos A$$
$$225 = 64 + 144 - 192 \\cos A$$
$$225 = 208 - 192 \\cos A$$
$$\\cos A = \\frac{208 - 225}{192} = \\frac{-17}{192} \\approx -0{,}089$$
$$A \\approx 95{,}1°$$

Den andre vinkelen er $180° - 95{,}1° = 84{,}9°$`,
    },
    {
      id: '1t-5-7-summary',
      type: 'note',
      content: `**Oppsummering**

**Cosinussetningen:**
- Finn side: $a^2 = b^2 + c^2 - 2bc \\cos A$
- Finn vinkel: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$

**Bruk:**
- SVS (to sider og vinkelen mellom) → finn tredje side
- SSS (alle sider) → finn vinkler

**Tips:** Positiv cosinus = spiss vinkel, negativ cosinus = stump vinkel`,
    },
    {
      id: '1t-5-7-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den ukjente siden:',
        subTasks: [
          { label: 'a', task: '$b = 5$, $c = 8$, $A = 45°$. Finn $a$.', solution: '$a = \\sqrt{25 + 64 - 80 \\cos 45°} = \\sqrt{89 - 56{,}6} \\approx 5{,}7$' },
          { label: 'b', task: '$a = 6$, $c = 10$, $B = 120°$. Finn $b$.', solution: '$b = \\sqrt{36 + 100 - 120 \\cos 120°} = \\sqrt{136 + 60} = 14$' },
        ],
        solution: 'a) ≈ 5,7; b) 14',
      },
    },
    {
      id: '1t-5-7-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vinklene i trekanter med sider:',
        subTasks: [
          { label: 'a', task: '$a = 3$, $b = 4$, $c = 5$. Finn $C$.', solution: '$\\cos C = \\frac{9+16-25}{24} = 0$, så $C = 90°$' },
          { label: 'b', task: '$a = 7$, $b = 8$, $c = 9$. Finn $C$.', solution: '$\\cos C = \\frac{49+64-81}{112} \\approx 0{,}286$, $C \\approx 73°$' },
        ],
        solution: 'a) 90°; b) ≈ 73°',
      },
    },
    {
      id: '1t-5-7-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et tomt har form som en firkant. Fra et hjørne måler du at de to sidene er 25 m og 35 m, og vinkelen mellom dem er 110°. Hvor lang er diagonalen mellom de to andre hjørnene?',
        solution: '$d = \\sqrt{25^2 + 35^2 - 2 \\cdot 25 \\cdot 35 \\cdot \\cos 110°} = \\sqrt{625 + 1225 + 598} \\approx 49{,}5$ m',
        hints: ['Bruk cosinussetningen med den gitte vinkelen'],
      },
    },
    {
      id: '1t-5-7-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et fly flyr 200 km mot øst, snur 50° mot venstre (mot nord), og flyr 150 km til. Hvor langt er flyet fra startpunktet?',
        solution: 'Vinkelen i trekanten er $180° - 50° = 130°$. $d = \\sqrt{200^2 + 150^2 - 2 \\cdot 200 \\cdot 150 \\cdot \\cos 130°} \\approx 316$ km',
        hints: ['Tegn figuren og finn vinkelen i trekanten'],
      },
    },
    {
      id: '1t-5-7-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En trekant har sider 10, 12 og 14. Finn alle tre vinkler.',
        solution: '$\\cos A = \\frac{144+196-100}{336} = 0{,}714$, $A \\approx 44°$. $\\cos B = \\frac{100+196-144}{280} = 0{,}543$, $B \\approx 57°$. $C = 180° - 44° - 57° = 79°$',
        hints: ['Bruk cosinussetningen tre ganger, eller finn to vinkler og bruk at summen er 180°'],
      },
    },
    {
      id: '1t-5-7-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En likebent trekant har to sider på 10 cm og en grunnlinje på 12 cm. Finn toppvinkelen.',
        solution: '$\\cos C = \\frac{100+100-144}{200} = \\frac{56}{200} = 0{,}28$, $C \\approx 73{,}7°$',
        hints: ['Toppvinkelen er vinkelen mellom de to like sidene'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_6_1: TextbookChapter = {
  id: '1t-6-1',
  courseId: '1t',
  chapterNumber: '6.1',
  title: 'Matematisk argumentasjon',
  description: 'Hvordan bygge et matematisk argument og begrunne løsninger.',
  estimatedMinutes: 35,
  competenceGoals: ['argumentere for tenkemåtene sine'],
  content: [
    {
      id: '1t-6-1-intro',
      type: 'text',
      content: `I matematikk er det ikke nok å finne riktig svar – vi må også kunne **begrunne** hvorfor svaret er riktig. Matematisk argumentasjon handler om å bygge logiske resonnementer som overbeviser andre om at konklusjonen vår er korrekt.

I dette kapitlet lærer du:
- Hva som kjennetegner et godt matematisk argument
- Hvordan bruke kjente regler og setninger i begrunnelser
- Forskjellen på å vise et eksempel og å bevise noe generelt`,
    },
    {
      id: '1t-6-1-def-argument',
      type: 'definition',
      title: 'Matematisk argument',
      content: `Et **matematisk argument** er en logisk rekkefølge av påstander som leder fra noe vi vet er sant (premisser) til en konklusjon.

Hvert steg i argumentet må være begrunnet med:
- Kjente definisjoner
- Aksiomer (grunnleggende antakelser)
- Tidligere beviste setninger
- Logiske slutninger`,
    },
    {
      id: '1t-6-1-text-struktur',
      type: 'text',
      content: `## Strukturen i et matematisk argument

Et godt matematisk argument har tre deler:

**1. Forutsetninger (hva vi vet)**
Hva er gitt? Hva antar vi?

**2. Resonnement (steg for steg)**
Hvert steg må følge logisk fra det forrige.

**3. Konklusjon (hva vi viser)**
Hva har vi bevist eller vist?`,
    },
    {
      id: '1t-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Vis at summen av to partall alltid er et partall.',
      solution: `**Forutsetninger:** La $a$ og $b$ være to partall.

**Resonnement:**
Et partall kan skrives som $2k$ der $k$ er et helt tall.

Så vi kan skrive:
- $a = 2m$ for et helt tall $m$
- $b = 2n$ for et helt tall $n$

Summen blir:
$$a + b = 2m + 2n = 2(m + n)$$

Siden $m + n$ er et helt tall, er $2(m + n)$ på formen $2k$, altså et partall.

**Konklusjon:** Summen av to partall er alltid et partall.`,
    },
    {
      id: '1t-6-1-note-eksempel-vs-bevis',
      type: 'note',
      content: `**Eksempel vs. bevis**

- Et **eksempel** viser at noe *kan* være sant: "$2 + 4 = 6$ er partall"
- Et **bevis** viser at noe *alltid* er sant for alle tilfeller

Selv om vi sjekker 1000 eksempler, har vi ikke bevist at noe gjelder generelt. Bevis bruker generelle symboler (som $a$, $b$, $n$) for å dekke alle mulige tilfeller samtidig.`,
    },
    {
      id: '1t-6-1-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Begrunn at produktet av to oddetall alltid er et oddetall.',
      solution: `**Forutsetninger:** La $a$ og $b$ være to oddetall.

**Resonnement:**
Et oddetall kan skrives som $2k + 1$ der $k$ er et helt tall.

Så vi kan skrive:
- $a = 2m + 1$ for et helt tall $m$
- $b = 2n + 1$ for et helt tall $n$

Produktet blir:
$$a \\cdot b = (2m + 1)(2n + 1)$$
$$= 4mn + 2m + 2n + 1$$
$$= 2(2mn + m + n) + 1$$

Dette er på formen $2k + 1$ der $k = 2mn + m + n$, altså et oddetall.

**Konklusjon:** Produktet av to oddetall er alltid et oddetall.`,
    },
    {
      id: '1t-6-1-text-logikk',
      type: 'text',
      content: `## Logiske slutninger

I matematisk argumentasjon bruker vi ofte følgende logiske strukturer:

**Hvis-så (implikasjon):**
"Hvis $P$ er sant, så er $Q$ sant" skrives $P \\Rightarrow Q$

**Eksempel:** Hvis $n$ er delelig med 4, så er $n$ delelig med 2.

**Motsatt implikasjon:**
$P \\Rightarrow Q$ er IKKE det samme som $Q \\Rightarrow P$

**Eksempel:** At et tall er delelig med 2 betyr IKKE at det er delelig med 4.`,
    },
    {
      id: '1t-6-1-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Begrunn at hvis $n^2$ er partall, så er $n$ partall.',
      solution: `Vi bruker **motsatt bevis** (kontrapositivt bevis):

I stedet for å vise "$n^2$ partall $\\Rightarrow$ $n$ partall", viser vi det **logisk ekvivalente** utsagnet:

"$n$ oddetall $\\Rightarrow$ $n^2$ oddetall"

**Bevis:**
La $n$ være et oddetall, altså $n = 2k + 1$ for et helt tall $k$.

$$n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$$

Dette er på formen $2m + 1$, altså et oddetall.

**Konklusjon:** Siden $n$ oddetall gir $n^2$ oddetall, må det motsatte også gjelde: $n^2$ partall gir $n$ partall.`,
    },
    {
      id: '1t-6-1-def-kontraposisjon',
      type: 'definition',
      title: 'Kontraposisjon',
      content: `Utsagnet "$P \\Rightarrow Q$" er **logisk ekvivalent** med "ikke $Q \\Rightarrow$ ikke $P$".

Dette kalles **kontraposisjon** og er nyttig når det er lettere å bevise den motsatte retningen.

**Eksempel:**
- Original: "Hvis det regner, er bakken våt"
- Kontraposisjon: "Hvis bakken ikke er våt, regner det ikke"`,
    },
    {
      id: '1t-6-1-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Vis at $\\sqrt{2}$ er et irrasjonalt tall.',
      solution: `Vi bruker **motbevis** (bevis ved selvmotsigelse):

**Anta det motsatte:** Anta at $\\sqrt{2}$ er rasjonalt.

Da kan $\\sqrt{2} = \\frac{p}{q}$ der $p$ og $q$ er hele tall uten felles faktorer.

$$\\sqrt{2} = \\frac{p}{q} \\Rightarrow 2 = \\frac{p^2}{q^2} \\Rightarrow p^2 = 2q^2$$

Så $p^2$ er partall, som betyr at $p$ er partall (vist i eksempel 3).

La $p = 2k$:
$$p^2 = 4k^2 = 2q^2 \\Rightarrow q^2 = 2k^2$$

Så $q^2$ er partall, som betyr at $q$ er partall.

**Selvmotsigelse:** Både $p$ og $q$ er partall, men vi antok at de ikke hadde felles faktorer!

**Konklusjon:** Antagelsen var feil, så $\\sqrt{2}$ må være irrasjonalt.`,
    },
    {
      id: '1t-6-1-note-summary',
      type: 'note',
      content: `**Oppsummering av bevismetoder**

| Metode | Når brukes den |
|--------|----------------|
| Direkte bevis | Vis at $P \\Rightarrow Q$ direkte |
| Kontraposisjon | Vis at ikke $Q \\Rightarrow$ ikke $P$ |
| Motbevis | Anta det motsatte og finn en selvmotsigelse |`,
    },
    {
      id: '1t-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Begrunn følgende påstander:',
        subTasks: [
          { label: 'a', task: 'Summen av et partall og et oddetall er alltid et oddetall.', solution: 'La $a = 2m$ (partall) og $b = 2n+1$ (oddetall). Da er $a + b = 2m + 2n + 1 = 2(m+n) + 1$, som er oddetall.' },
          { label: 'b', task: 'Produktet av et partall og et vilkårlig helt tall er alltid et partall.', solution: 'La $a = 2m$ (partall) og $b$ et helt tall. Da er $a \\cdot b = 2m \\cdot b = 2(mb)$, som er partall.' },
          { label: 'c', task: 'Differansen mellom to oddetall er alltid et partall.', solution: 'La $a = 2m+1$ og $b = 2n+1$ (oddetall). Da er $a - b = 2m + 1 - 2n - 1 = 2(m-n)$, som er partall.' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vis at kvadratet av et oddetall alltid er på formen $8k + 1$ der $k$ er et helt tall.',
        solution: 'La $n = 2m + 1$ være et oddetall. Da er $n^2 = 4m^2 + 4m + 1 = 4m(m+1) + 1$. Siden $m(m+1)$ er produktet av to påfølgende tall, er det alltid partall, så $m(m+1) = 2j$. Da blir $n^2 = 8j + 1$.',
        hints: ['Skriv oddetallet som $2m + 1$', 'Merk at $m(m+1)$ alltid er partall'],
      },
    },
    {
      id: '1t-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Begrunn at for alle reelle tall $a$ og $b$ gjelder: $|a + b| \\leq |a| + |b|$ (trekantulikheten).',
        solution: 'For hvert tall gjelder $-|x| \\leq x \\leq |x|$. Adderer vi $-|a| \\leq a \\leq |a|$ og $-|b| \\leq b \\leq |b|$, får vi $-(|a|+|b|) \\leq a+b \\leq |a|+|b|$, som betyr $|a+b| \\leq |a|+|b|$.',
        hints: ['Bruk at $-|x| \\leq x \\leq |x|$ for alle $x$'],
      },
    },
    {
      id: '1t-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor følgende "bevis" er feil: "La $a = b$. Da er $a^2 = ab$, så $a^2 - b^2 = ab - b^2$, altså $(a+b)(a-b) = b(a-b)$. Deler vi på $(a-b)$ får vi $a + b = b$, så $2b = b$, altså $2 = 1$."',
        solution: 'Feilen er å dele på $(a-b)$. Siden $a = b$, er $a - b = 0$, og vi kan ikke dele på null.',
        hints: ['Se på hva $a - b$ er når $a = b$'],
      },
    },
    {
      id: '1t-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk motbevis til å vise at det finnes uendelig mange primtall.',
        solution: 'Anta at det bare finnes endelig mange primtall: $p_1, p_2, ..., p_n$. Se på tallet $N = p_1 \\cdot p_2 \\cdot ... \\cdot p_n + 1$. Dette tallet er ikke delelig med noen av primtallene (gir alltid rest 1). Enten er $N$ selv et primtall, eller det har en primfaktor som ikke er i listen. Begge muligheter motsier at listen inneholder alle primtall. Altså finnes uendelig mange primtall.',
        hints: ['Anta at det bare finnes $n$ primtall', 'Konstruer et tall som ikke kan deles på noen av dem'],
      },
    },
    {
      id: '1t-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at summen av tre påfølgende hele tall alltid er delelig med 3.',
        solution: 'La de tre påfølgende tallene være $n$, $n+1$ og $n+2$. Summen er $n + (n+1) + (n+2) = 3n + 3 = 3(n+1)$, som er delelig med 3.',
        hints: ['Kall det første tallet $n$'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_1T_6_2: TextbookChapter = {
  id: '1t-6-2',
  courseId: '1t',
  chapterNumber: '6.2',
  title: 'Lese og forstå bevis',
  description: 'Lær å lese, forstå og utvikle enkle matematiske bevis.',
  estimatedMinutes: 35,
  competenceGoals: ['lese og forstå matematiske bevis', 'utforske og utvikle bevis'],
  content: [
    {
      id: '1t-6-2-intro',
      type: 'text',
      content: `I dette kapitlet lærer du å lese og forstå matematiske bevis. Et bevis er en fullstendig logisk begrunnelse for hvorfor en matematisk påstand er sann.

Du skal lære:
- Strukturen i et matematisk bevis
- Ulike typer bevis (direkte, indirekte, induksjon)
- Hvordan lese og analysere bevis fra læreboka
- Hvordan utvikle egne enkle bevis`,
    },
    {
      id: '1t-6-2-def-bevis',
      type: 'definition',
      title: 'Matematisk bevis',
      content: `Et **matematisk bevis** er en kjede av logiske argumenter som viser at en påstand (teorem) følger fra aksimer, definisjoner og tidligere beviste resultater.

**Viktige begreper:**
- **Teorem/setning:** En påstand som kan bevises
- **Lemma:** En hjelpesetning som brukes i et større bevis
- **Korollar:** En enkel følge av et teorem`,
    },
    {
      id: '1t-6-2-text-lese',
      type: 'text',
      content: `## Hvordan lese et bevis

Når du leser et bevis, bør du:

1. **Forstå påstanden:** Hva skal bevises? Hva betyr alle begrepene?

2. **Identifiser strukturen:** Er det et direkte bevis, motbevis, eller induksjon?

3. **Følg hvert steg:** Hvorfor følger dette steget fra det forrige?

4. **Se det store bildet:** Hva er hovedideen i beviset?

5. **Prøv selv:** Kan du gjenskape beviset uten å se på løsningen?`,
    },
    {
      id: '1t-6-2-theorem-kvadrat',
      type: 'theorem',
      title: '1. kvadratsetning',
      content: `For alle tall $a$ og $b$ gjelder:
$$(a + b)^2 = a^2 + 2ab + b^2$$`,
    },
    {
      id: '1t-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Bevis av 1. kvadratsetning',
      problem: 'Bevis at $(a + b)^2 = a^2 + 2ab + b^2$.',
      solution: `**Bevis (algebraisk):**

$(a + b)^2 = (a + b)(a + b)$

Ved å gange ut parentesene:
$= a \\cdot a + a \\cdot b + b \\cdot a + b \\cdot b$
$= a^2 + ab + ab + b^2$
$= a^2 + 2ab + b^2$ ∎

**Bevis (geometrisk):**

Et kvadrat med side $(a + b)$ har areal $(a + b)^2$.

Dette kvadratet kan deles inn i:
- Et kvadrat med side $a$ (areal $a^2$)
- Et kvadrat med side $b$ (areal $b^2$)
- To rektangler med sider $a$ og $b$ (areal $ab$ hver)

Totalt areal: $a^2 + b^2 + 2ab = a^2 + 2ab + b^2$ ∎`,
    },
    {
      id: '1t-6-2-text-direkte',
      type: 'text',
      content: `## Direkte bevis

I et **direkte bevis** starter vi med det vi vet (premissene) og arbeider oss logisk frem til konklusjonen.

**Struktur:**
1. Anta at premissen $P$ er sann
2. Bruk definisjoner, setninger og logikk
3. Vis at konklusjonen $Q$ følger

**Eksempel på direkte bevis:** Vis at summen av to partall er partall.`,
    },
    {
      id: '1t-6-2-theorem-pytagoras',
      type: 'theorem',
      title: 'Pytagoras\' setning',
      content: `I en rettvinklet trekant med kateter $a$ og $b$ og hypotenus $c$ gjelder:
$$a^2 + b^2 = c^2$$`,
    },
    {
      id: '1t-6-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Et geometrisk bevis',
      problem: 'Bevis Pytagoras\' setning.',
      solution: `**Bevis (med areal):**

Tegn et stort kvadrat med side $a + b$.

**Metode 1:** Del opp i fire rettvinklede trekanter og et lite kvadrat i midten.
- Fire trekanter med areal $\\frac{1}{2}ab$ hver: totalt $2ab$
- Kvadrat i midten har side $c$ (hypotenusene): areal $c^2$
- Totalt areal: $2ab + c^2$

**Metode 2:** Del opp i to rektangler og to kvadrater.
- To kvadrater med sider $a$ og $b$: areal $a^2 + b^2$
- To rektangler med sider $a$ og $b$: areal $2ab$
- Totalt areal: $a^2 + b^2 + 2ab$

**Sammenlignet:**
$$2ab + c^2 = a^2 + b^2 + 2ab$$
$$c^2 = a^2 + b^2$$ ∎`,
    },
    {
      id: '1t-6-2-text-indirekte',
      type: 'text',
      content: `## Indirekte bevis

I et **indirekte bevis** (motbevis) antar vi at påstanden er usann og viser at dette fører til en selvmotsigelse.

**Struktur:**
1. Anta at konklusjonen $Q$ er usann
2. Utled logiske konsekvenser
3. Finn en selvmotsigelse
4. Konkluder at $Q$ må være sann

**Når brukes det:** Når det er vanskelig å bevise noe direkte, eller når påstanden involverer "det finnes ikke" eller "uendelig mange".`,
    },
    {
      id: '1t-6-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Indirekte bevis',
      problem: 'Vis at $\\sqrt{3}$ er irrasjonalt.',
      solution: `**Bevis ved selvmotsigelse:**

**Anta det motsatte:** $\\sqrt{3}$ er rasjonalt.

Da kan vi skrive $\\sqrt{3} = \\frac{p}{q}$ der $p$ og $q$ er hele tall uten felles faktorer (brøken er maksimalt forkortet).

$$\\sqrt{3} = \\frac{p}{q} \\Rightarrow 3 = \\frac{p^2}{q^2} \\Rightarrow p^2 = 3q^2$$

Så $p^2$ er delelig med 3, som betyr at $p$ er delelig med 3.

La $p = 3k$:
$$p^2 = 9k^2 = 3q^2 \\Rightarrow q^2 = 3k^2$$

Så $q^2$ er delelig med 3, som betyr at $q$ er delelig med 3.

**Selvmotsigelse:** Både $p$ og $q$ er delelig med 3, men vi antok at brøken var maksimalt forkortet!

**Konklusjon:** $\\sqrt{3}$ er irrasjonalt. ∎`,
    },
    {
      id: '1t-6-2-text-induksjon',
      type: 'text',
      content: `## Bevis ved induksjon

**Matematisk induksjon** brukes til å bevise påstander som gjelder for alle naturlige tall.

**Struktur:**
1. **Grunntilfelle:** Vis at påstanden er sann for $n = 1$ (eller et annet startpunkt)
2. **Induksjonsantagelse:** Anta at påstanden er sann for $n = k$
3. **Induksjonssteg:** Vis at påstanden da også er sann for $n = k + 1$

**Analogi:** Som dominobrikker – hvis den første faller, og hver brikke slår ned den neste, så faller alle.`,
    },
    {
      id: '1t-6-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Bevis ved induksjon',
      problem: 'Vis at $1 + 2 + 3 + ... + n = \\frac{n(n+1)}{2}$ for alle $n \\geq 1$.',
      solution: `**Bevis ved induksjon:**

**Grunntilfelle ($n = 1$):**
Venstre side: $1$
Høyre side: $\\frac{1 \\cdot 2}{2} = 1$ ✓

**Induksjonsantagelse:**
Anta at formelen stemmer for $n = k$:
$$1 + 2 + ... + k = \\frac{k(k+1)}{2}$$

**Induksjonssteg (vis for $n = k + 1$):**
$$1 + 2 + ... + k + (k + 1)$$
$$= \\frac{k(k+1)}{2} + (k + 1) \\text{ (bruker antagelsen)}$$
$$= \\frac{k(k+1) + 2(k+1)}{2}$$
$$= \\frac{(k+1)(k+2)}{2}$$
$$= \\frac{(k+1)((k+1)+1)}{2}$$

Dette er formelen med $n = k + 1$. ✓

**Konklusjon:** Formelen gjelder for alle $n \\geq 1$. ∎`,
    },
    {
      id: '1t-6-2-note-summary',
      type: 'note',
      content: `**Oppsummering av bevistyper**

| Bevistype | Når brukes det | Struktur |
|-----------|----------------|----------|
| Direkte | Standard tilnærming | $P \\Rightarrow Q$ direkte |
| Kontraposisjon | Når konklusjonen er "negativ" | $\\neg Q \\Rightarrow \\neg P$ |
| Motbevis | Når direkte er vanskelig | Anta $\\neg Q$, finn selvmotsigelse |
| Induksjon | For påstander om alle $n$ | Grunntilfelle + induksjonssteg |`,
    },
    {
      id: '1t-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les beviset for 1. kvadratsetning i eksempel 1. Bevis deretter 2. og 3. kvadratsetning på samme måte.',
        subTasks: [
          { label: 'a', task: '2. kvadratsetning: $(a - b)^2 = a^2 - 2ab + b^2$', solution: '$(a-b)^2 = (a-b)(a-b) = a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$' },
          { label: 'b', task: '3. kvadratsetning: $(a + b)(a - b) = a^2 - b^2$', solution: '$(a+b)(a-b) = a^2 - ab + ab - b^2 = a^2 - b^2$' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk induksjon til å bevise at $1 + 3 + 5 + ... + (2n - 1) = n^2$ for alle $n \\geq 1$.',
        solution: 'Grunntilfelle: $n=1$ gir $1 = 1^2$ ✓. Anta sann for $k$: $1+3+...+(2k-1) = k^2$. For $k+1$: $1+3+...+(2k-1)+(2k+1) = k^2 + 2k + 1 = (k+1)^2$ ✓',
        hints: ['Grunntilfelle: sjekk $n = 1$', 'Summen av de første $n$ oddetallene er $n^2$'],
      },
    },
    {
      id: '1t-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vis ved motbevis at $\\sqrt{5}$ er irrasjonalt.',
        solution: 'Anta $\\sqrt{5} = \\frac{p}{q}$ forkortet. Da er $5q^2 = p^2$, så $p$ er delelig med 5. La $p = 5k$, da er $q^2 = 5k^2$, så $q$ er delelig med 5. Selvmotsigelse med at brøken var forkortet.',
        hints: ['Følg samme struktur som beviset for $\\sqrt{3}$'],
      },
    },
    {
      id: '1t-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk induksjon til å bevise at $n^3 - n$ er delelig med 6 for alle $n \\geq 1$.',
        solution: 'Grunntilfelle: $n=1$ gir $1-1=0$, delelig med 6 ✓. Anta $k^3-k = 6m$. Da er $(k+1)^3-(k+1) = k^3+3k^2+3k+1-k-1 = (k^3-k)+3k^2+3k = 6m + 3k(k+1)$. Siden $k(k+1)$ er partall, er $3k(k+1)$ delelig med 6, så summen er delelig med 6 ✓',
        hints: ['Faktoriser: $n^3 - n = n(n-1)(n+1)$', 'Tre påfølgende tall inneholder alltid et tall delelig med 2 og et delelig med 3'],
      },
    },
    {
      id: '1t-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bevis geometrisk at arealet av en sirkel er $A = \\pi r^2$ ved å dele sirkelen i mange tynne "kakestykker" og omorganisere dem.',
        solution: 'Del sirkelen i $n$ like sektorer. Legg sektorene annenhver vei oppå hverandre. Når $n \\to \\infty$, blir figuren et rektangel med høyde $r$ og bredde lik halve omkretsen $\\frac{2\\pi r}{2} = \\pi r$. Arealet blir $r \\cdot \\pi r = \\pi r^2$.',
        hints: ['Halve omkretsen blir "lengden" av rektangelet', 'Radius blir "høyden"'],
      },
    },
    {
      id: '1t-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis ved induksjon at $1^2 + 2^2 + 3^2 + ... + n^2 = \\frac{n(n+1)(2n+1)}{6}$ for alle $n \\geq 1$.',
        solution: 'Grunntilfelle: $n=1$ gir $1 = \\frac{1 \\cdot 2 \\cdot 3}{6} = 1$ ✓. Anta sann for $k$. For $k+1$: $\\sum_{i=1}^{k+1} i^2 = \\frac{k(k+1)(2k+1)}{6} + (k+1)^2 = \\frac{(k+1)[k(2k+1)+6(k+1)]}{6} = \\frac{(k+1)(2k^2+7k+6)}{6} = \\frac{(k+1)(k+2)(2k+3)}{6}$ ✓',
        hints: ['Grunntilfelle: sjekk $n = 1$', 'Faktoriser telleren i induksjonssteget'],
      },
    },
  ],
  exercises: [],
};

// Eksporter alle kapitler som et objekt
export const CHAPTERS_1T: Record<string, TextbookChapter> = {
  '1t-1-1': CHAPTER_1T_1_1,
  '1t-1-2': CHAPTER_1T_1_2,
  '1t-1-3': CHAPTER_1T_1_3,
  '1t-1-4': CHAPTER_1T_1_4,
  '1t-1-5': CHAPTER_1T_1_5,
  '1t-1-6': CHAPTER_1T_1_6,
  '1t-1-7': CHAPTER_1T_1_7,
  '1t-1-8': CHAPTER_1T_1_8,
  '1t-1-9': CHAPTER_1T_1_9,
  '1t-2-1': CHAPTER_1T_2_1,
  '1t-2-3': CHAPTER_1T_2_4,
  '1t-2-5': CHAPTER_1T_2_5,
  '1t-2-8': CHAPTER_1T_2_8,
  '1t-2-2': CHAPTER_1T_2_2,
  '1t-2-4': CHAPTER_1T_2_4_FULLSTENDIG,
  '1t-2-6': CHAPTER_1T_2_6,
  '1t-2-9': CHAPTER_1T_2_9,
  '1t-2-10': CHAPTER_1T_2_10,
  '1t-5-1': CHAPTER_1T_4_1,
  '1t-5-2': CHAPTER_1T_4_2,
  '1t-3-1': CHAPTER_1T_3_1,
  '1t-3-2': CHAPTER_1T_3_2,
  '1t-3-3': CHAPTER_1T_3_3_FUNKSJON,
  '1t-3-4': CHAPTER_1T_3_4,
  '1t-3-5': CHAPTER_1T_3_5,
  '1t-3-6': CHAPTER_1T_3_6,
  '1t-3-7': CHAPTER_1T_3_7,
  '1t-3-8': CHAPTER_1T_3_8,
  '1t-4-1': CHAPTER_1T_4_1_LIKNINGSSETT,
  '1t-4-2': CHAPTER_1T_4_2_ULIKHETER,
  '1t-4-3': CHAPTER_1T_4_3_FORTEGNSLINJER,
  '1t-4-4': CHAPTER_1T_4_4_ANDREGRADS,
  '1t-4-5': CHAPTER_1T_4_5_RASJONALE,
  '1t-7-1': CHAPTER_1T_7_1_VEKSTFART,
  '1t-7-2': CHAPTER_1T_7_2_MOMENTAN,
  '1t-7-3': CHAPTER_1T_7_3_DERIVERT,
  '1t-7-4': CHAPTER_1T_7_4_GEOGEBRA,
  '1t-7-5': CHAPTER_1T_7_5_DEFINISJON,
  '1t-7-6': CHAPTER_1T_7_6_POLYNOMER,
  '1t-7-7': CHAPTER_1T_7_7_PRAKTISK,
  '1t-2-11': CHAPTER_1T_2_11_GEOGEBRA,
  '1t-3-9': CHAPTER_1T_3_9_GEOGEBRA,
  '1t-5-8': CHAPTER_1T_5_8_GEOGEBRA,
  '1t-5-3': CHAPTER_1T_5_3,
  '1t-5-4': CHAPTER_1T_5_4,
  '1t-5-5': CHAPTER_1T_5_5,
  '1t-5-6': CHAPTER_1T_5_6,
  '1t-5-7': CHAPTER_1T_5_7,
  '1t-6-1': CHAPTER_1T_6_1,
  '1t-6-2': CHAPTER_1T_6_2,
};
