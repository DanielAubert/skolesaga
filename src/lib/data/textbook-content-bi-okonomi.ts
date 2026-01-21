/**
 * Tekstbok kapitler for bi-okonomi
 * Autogenerert fra textbook-content.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BI_OKONOMI_1_1: TextbookChapter = {
  id: 'bi-okonomi-1-1',
  courseId: 'bi-okonomi',
  chapterNumber: '1.1',
  title: 'Potenser',
  description: 'Lær om potenser, potensregler og regneregler for heltallseksponenter.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og beskrive egenskaper ved potenser'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bi-okonomi-1-1-intro',
      type: 'text',
      content: `Noen ganger ønsker vi å beskrive at et tall ganges med seg selv flere ganger på en enklere måte. Istedenfor å skrive $2 \\cdot 2 \\cdot 2 \\cdot 2$ så kan vi skrive $2^4$ og istedenfor $a \\cdot a \\cdot a = a^3$.`,
    },
    {
      id: 'bi-okonomi-1-1-def-1',
      type: 'definition',
      title: 'Potens',
      content: `Når vi skriver $x^n$, betyr det at vi ganger $x$ med seg selv $n$ ganger:

$$x^n = x \\cdot x \\cdot x \\cdot \\ldots \\cdot x \\quad (n \\text{ faktorer})$$

Vi kaller $x$ for **grunntallet** og $n$ for **eksponenten**.

For eksempel: $2^3 = 2 \\cdot 2 \\cdot 2 = 8$ (grunntall 2, eksponent 3) og $a^5 = a \\cdot a \\cdot a \\cdot a \\cdot a$.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bi-okonomi-1-1-example-1',
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
      id: 'bi-okonomi-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-1-ex-1',
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
      id: 'bi-okonomi-1-1-text-regel1',
      type: 'text',
      content: `Vi skal her lære oss å regne med potenser. Vi kan observere at:
$$x^2 \\cdot x^3 = (x \\cdot x) \\cdot (x \\cdot x \\cdot x) = x^5$$

Generelt kan vi utlede regelen:
$$x^a \\cdot x^b = x^{a+b}$$`,
    },
    {
      id: 'bi-okonomi-1-1-theorem-1',
      type: 'theorem',
      title: 'Potensregel: Multiplikasjon',
      content: `$$x^a \\cdot x^b = x^{a+b}$$`,
    },

    // Illustrasjon: Potensregler
    {
      id: 'bi-okonomi-1-1-potensregler-bilde',
      type: 'image',
      src: '/images/algebra/potensregler.svg',
      alt: 'Oversikt over potensreglene: multiplikasjon, divisjon, potens av potens',
      caption: 'De viktigste potensreglene samlet',
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bi-okonomi-1-1-example-2',
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
      id: 'bi-okonomi-1-1-tip-1',
      type: 'tip',
      content: `**Husk: Usynlig gangetegn**

$ab = a \\cdot b$

$3a = 3 \\cdot a$`,
    },

    // ========== OPPGAVE 2 (etter Eksempel 2) ==========
    {
      id: 'bi-okonomi-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-1-ex-2',
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
      id: 'bi-okonomi-1-1-text-regel2',
      type: 'text',
      content: `Når vi arbeider med potenser i brøker så er det viktig å huske på at vi kan gange og dele med samme tall over og under brøkstreken. Det er også viktig å huske at vi derfor kan stryke like faktorer over og under brøkstreken imot hverandre.

Vi har for eksempel at:
$$\\frac{4^5}{4^2} = \\frac{4 \\cdot 4 \\cdot 4 \\cdot \\color{red}{4 \\cdot 4}}{\\color{red}{4 \\cdot 4}} = 4^{5-2} = 4^3$$`,
    },
    {
      id: 'bi-okonomi-1-1-theorem-2',
      type: 'theorem',
      title: 'Potensregel: Divisjon',
      content: `$$\\frac{x^a}{x^b} = x^{a-b}$$`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bi-okonomi-1-1-example-3',
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
      id: 'bi-okonomi-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-1-ex-3',
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
      id: 'bi-okonomi-1-1-def-neg',
      type: 'definition',
      title: 'Negative eksponenter',
      content: `$$x^{-1} = \\frac{1}{x}$$

$$x^{-n} = \\frac{1}{x^n}$$`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'bi-okonomi-1-1-example-4',
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
      id: 'bi-okonomi-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-1-ex-4',
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
      id: 'bi-okonomi-1-1-text-negbrok',
      type: 'text',
      content: `Når vi har en negativ eksponent i en brøk så kan faktoren som er opphøyd i noe negativt flyttes under brøkstreken og bli opphøyd i det samme tallet med positivt fortegn.`,
    },
    {
      id: 'bi-okonomi-1-1-theorem-negbrok',
      type: 'theorem',
      title: 'Negative eksponenter i brøker',
      content: `$$\\frac{a^{-n}}{b^{-m}} = \\frac{b^m}{a^n}$$`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: 'bi-okonomi-1-1-example-5',
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
      id: 'bi-okonomi-1-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-1-ex-5',
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
      id: 'bi-okonomi-1-1-theorem-produkt',
      type: 'theorem',
      title: 'Potens av produkt',
      content: `$$(a \\cdot b)^n = a^n \\cdot b^n$$`,
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: 'bi-okonomi-1-1-example-6',
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
      id: 'bi-okonomi-1-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-1-ex-6',
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
      id: 'bi-okonomi-1-1-theorem-brok',
      type: 'theorem',
      title: 'Potens av brøk',
      content: `$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$`,
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: 'bi-okonomi-1-1-example-7',
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
      id: 'bi-okonomi-1-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-1-ex-7',
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
      id: 'bi-okonomi-1-1-theorem-potenspotens',
      type: 'theorem',
      title: 'Potens av potens',
      content: `$$(x^a)^b = x^{a \\cdot b}$$`,
    },

    // ========== EKSEMPEL 8 ==========
    {
      id: 'bi-okonomi-1-1-example-8',
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
      id: 'bi-okonomi-1-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-1-ex-8',
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
      id: 'bi-okonomi-1-1-def-null',
      type: 'definition',
      title: 'Når vi har 0 som eksponent',
      content: `$$a^0 = 1, \\text{ gitt at } a \\neq 0$$

det vil si at alle tall (med unntak av 0) opphøyd i 0 vil bli 1.`,
    },
    {
      id: 'bi-okonomi-1-1-warning-0-0',
      type: 'warning',
      title: 'Hva med $0^0$?',
      content: `Uttrykket $0^0$ er **udefinert** i matematikken. Dette skyldes at vi får motstridende resultater avhengig av hvordan vi nærmer oss uttrykket. Derfor er det viktig å huske at regelen $a^0 = 1$ kun gjelder når $a \\neq 0$.`,
    },

    // ========== EKSEMPEL 9 ==========
    {
      id: 'bi-okonomi-1-1-example-9',
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
      id: 'bi-okonomi-1-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-1-ex-9',
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
      id: 'bi-okonomi-1-1-example-10',
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
      id: 'bi-okonomi-1-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-1-ex-10',
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
      id: 'bi-okonomi-1-1-summary',
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
      id: 'bi-okonomi-1-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        // Repetisjonsoppgave 1
        {
          id: 'bi-okonomi-1-1-rep-1',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-1-rep-ex-1',
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
          id: 'bi-okonomi-1-1-rep-2',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-1-rep-ex-2',
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
          id: 'bi-okonomi-1-1-rep-3',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-1-rep-ex-3',
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
          id: 'bi-okonomi-1-1-rep-4',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-1-rep-ex-4',
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
          id: 'bi-okonomi-1-1-rep-5',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-1-rep-ex-5',
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
          id: 'bi-okonomi-1-1-rep-6',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-1-rep-ex-6',
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
          id: 'bi-okonomi-1-1-rep-7',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-1-rep-ex-7',
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
          id: 'bi-okonomi-1-1-rep-8',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-1-rep-ex-8',
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
          id: 'bi-okonomi-1-1-rep-9',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-1-rep-ex-9',
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
          id: 'bi-okonomi-1-1-rep-10',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-1-rep-ex-10',
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

export const CHAPTER_BI_OKONOMI_1_2: TextbookChapter = {
  id: 'bi-okonomi-1-2',
  courseId: 'bi-okonomi',
  chapterNumber: '1.2',
  title: 'Algebra',
  description: 'Lær om bokstavregning, parentesregning og multiplikasjon av parenteser.',
  estimatedMinutes: 60,
  competenceGoals: ['behandle og faktorisere algebraiske uttrykk'],
  content: [
    // ========== BOKSTAVREGNING ==========
    {
      id: 'bi-okonomi-1-2-intro',
      type: 'text',
      content: `# Bokstavregning

I algebra bruker vi bokstaver som representerer tall. Når vi regner med bokstaver, kan vi bare legge sammen eller trekke fra **like ledd** - det vil si ledd som inneholder de samme bokstavene med de samme eksponentene.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bi-okonomi-1-2-example-1',
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
      id: 'bi-okonomi-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-2-ex-1',
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
      id: 'bi-okonomi-1-2-example-2',
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
      id: 'bi-okonomi-1-2-tip-1',
      type: 'tip',
      content: `**NB: Alfabetisk rekkefølge**

Vi setter faktorene i alfabetisk rekkefølge:

$yx = y \\cdot x = x \\cdot y = xy$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bi-okonomi-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-2-ex-2',
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
      id: 'bi-okonomi-1-2-section-parentes',
      type: 'text',
      content: `# Parentesregning

Når vi multipliserer med parenteser, bruker vi distributiv lov.`,
    },
    {
      id: 'bi-okonomi-1-2-theorem-1',
      type: 'theorem',
      title: 'Multiplikasjon med parenteser',
      content: `$$a \\cdot (b + c) = a \\cdot b + a \\cdot c$$

$$a \\cdot (b + c + d) = a \\cdot b + a \\cdot c + a \\cdot d$$`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bi-okonomi-1-2-example-3',
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
      id: 'bi-okonomi-1-2-tip-2',
      type: 'tip',
      content: `**Potensregelen:**

$x \\cdot x^2 = x^1 \\cdot x^2 = x^{1+2} = x^3$

Generelt: $x^n \\cdot x^m = x^{n+m}$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bi-okonomi-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-2-ex-3',
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
      id: 'bi-okonomi-1-2-example-4',
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
      id: 'bi-okonomi-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-2-ex-4',
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
      id: 'bi-okonomi-1-2-example-5',
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
      id: 'bi-okonomi-1-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-2-ex-5',
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
      id: 'bi-okonomi-1-2-section-mult',
      type: 'text',
      content: `# Multiplikasjon av parenteser

Når vi multipliserer to parenteser, må hvert ledd i den første parentesen multipliseres med hvert ledd i den andre.`,
    },
    {
      id: 'bi-okonomi-1-2-theorem-2',
      type: 'theorem',
      title: 'Multiplikasjon av to parenteser',
      content: `$$(a + b) \\cdot (c + d) = a \\cdot c + a \\cdot d + b \\cdot c + b \\cdot d$$`,
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: 'bi-okonomi-1-2-example-6',
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
      id: 'bi-okonomi-1-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-2-ex-6',
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
      id: 'bi-okonomi-1-2-example-7',
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
      id: 'bi-okonomi-1-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-2-ex-7',
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
      id: 'bi-okonomi-1-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        // R1
        {
          id: 'bi-okonomi-1-2-rep-1',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-2-rep-ex-1',
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
          id: 'bi-okonomi-1-2-rep-2-1',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-2-rep-ex-2-1',
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
          id: 'bi-okonomi-1-2-rep-2-2',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-2-rep-ex-2-2',
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
          id: 'bi-okonomi-1-2-rep-3',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-2-rep-ex-3',
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
          id: 'bi-okonomi-1-2-rep-4',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-2-rep-ex-4',
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
          id: 'bi-okonomi-1-2-rep-5',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-2-rep-ex-5',
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
          id: 'bi-okonomi-1-2-rep-6',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-2-rep-ex-6',
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
          id: 'bi-okonomi-1-2-rep-7',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-2-rep-ex-7',
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

export const CHAPTER_BI_OKONOMI_1_3: TextbookChapter = {
  id: 'bi-okonomi-1-3',
  courseId: 'bi-okonomi',
  chapterNumber: '1.3',
  title: 'Brøkregning',
  description: 'Lær å gange, dele, forkorte og utvide brøker, samt legge sammen brøker med lik og ulik nevner.',
  estimatedMinutes: 60,
  competenceGoals: ['utforske og beskrive egenskaper ved brøker og operasjoner med brøker'],
  content: [
    // ========== Å GANGE BRØKER ==========
    {
      id: 'bi-okonomi-1-3-intro',
      type: 'text',
      content: `I dette kapitlet skal vi lære å regne med brøker. Vi starter med å se på hvordan vi ganger brøker sammen.`,
    },

    // Illustrasjon: Brøkregning
    {
      id: 'bi-okonomi-1-3-brokregning-bilde',
      type: 'image',
      src: '/images/algebra/brokregning.svg',
      alt: 'Visualisering av brøkregning med teller og nevner',
      caption: 'Brøkregning - grunnleggende prinsipper',
    },

    {
      id: 'bi-okonomi-1-3-theorem-mult',
      type: 'theorem',
      title: 'Å gange brøker',
      content: `$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d} = \\frac{ac}{bd}$$

Når vi skal gange to brøker med hverandre så ganger vi det over brøkstreken med det over brøkstreken og det under brøkstreken med det under brøkstreken.`,
    },
    {
      id: 'bi-okonomi-1-3-text-heltall',
      type: 'text',
      content: `**Å gange et heltall med en brøk:**

$$a \\cdot \\frac{b}{c} = \\frac{a}{1} \\cdot \\frac{b}{c} = \\frac{a \\cdot b}{1 \\cdot c} = \\frac{ab}{c}$$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bi-okonomi-1-3-example-1',
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
      id: 'bi-okonomi-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-3-ex-1',
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
      id: 'bi-okonomi-1-3-text-forkorte',
      type: 'text',
      content: `**Å forkorte brøker**

Når vi skal forkorte brøker kan det være nyttig å huske at vi kan faktorisere tall. Eksempelvis er: $8 = 4 \\cdot 2$ og $12 = 4 \\cdot 3 = 2 \\cdot 2 \\cdot 3$ eller $12 = 2 \\cdot 6$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bi-okonomi-1-3-example-2',
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
      id: 'bi-okonomi-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-3-ex-2',
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
      id: 'bi-okonomi-1-3-text-mult-forkort',
      type: 'text',
      content: `**Multiplisere og forkorte brøker**

Når vi ganger brøker kan vi ofte forkorte underveis for å gjøre regnestykket enklere.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bi-okonomi-1-3-example-3',
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
      id: 'bi-okonomi-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-3-ex-3',
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
      id: 'bi-okonomi-1-3-theorem-div',
      type: 'theorem',
      title: 'Å dele brøker',
      content: `Når vi deler en brøk på en annen brøk så kan vi:

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}$$

Et spesialtilfelle av dette er når vi deler med et heltall:

$$\\frac{a}{b} \\div c = \\frac{a}{b} \\div \\frac{c}{1} = \\frac{a}{b} \\cdot \\frac{1}{c} = \\frac{a}{b \\cdot c}$$`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'bi-okonomi-1-3-example-4',
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
      id: 'bi-okonomi-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-3-ex-4',
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
      id: 'bi-okonomi-1-3-theorem-brudden',
      type: 'theorem',
      title: 'Brudden brøk',
      content: `$$\\frac{\\frac{a}{b}}{\\frac{c}{d}} = \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c} = \\frac{ad}{bc}$$`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: 'bi-okonomi-1-3-example-5',
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
      id: 'bi-okonomi-1-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-3-ex-5',
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
      id: 'bi-okonomi-1-3-theorem-addlik',
      type: 'theorem',
      title: 'Å legge sammen brøker med lik nevner',
      content: `$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$`,
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: 'bi-okonomi-1-3-example-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: 'Trekk sammen brøkene:\n\n$$\\frac{1}{5} + \\frac{2}{5}$$',
      solution: `**Løsning:**

$$\\frac{1}{5} + \\frac{2}{5} = \\frac{1 + 2}{5} = \\frac{3}{5}$$`,
      solutionVideo: '-ax2cbE3kkw',
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: 'bi-okonomi-1-3-example-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: 'Trekk sammen brøkene og forkort hvis mulig:\n\n$$\\frac{9}{4} - \\frac{1}{4}$$',
      solution: `**Løsning:**

$$\\frac{9}{4} - \\frac{1}{4} = \\frac{9 - 1}{4} = \\frac{8}{4} = 2$$`,
      solutionVideo: '8eA_dk2bg5o',
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'bi-okonomi-1-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-3-ex-6',
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
      id: 'bi-okonomi-1-3-text-utvide',
      type: 'text',
      content: `**Å utvide brøker**

Noen ganger ønsker vi å utvide brøker. For å utvide en brøk må vi gange med det samme tallet over og under brøkstreken. På den måten kan vi få en ny nevner uten å endre den faktiske verdien til brøken.`,
    },
    {
      id: 'bi-okonomi-1-3-warning-utvide',
      type: 'warning',
      content: `**NB:** Det er viktig å huske at du må gange BÅDE over og under samtidig. Det å gange kun oppe eller kun nede vil endre verdien til brøken og du vil ende opp med galt svar.`,
    },

    // ========== EKSEMPEL 8 ==========
    {
      id: 'bi-okonomi-1-3-example-8',
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
      id: 'bi-okonomi-1-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-3-ex-7',
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
      id: 'bi-okonomi-1-3-text-uliknevner',
      type: 'text',
      content: `**Brøker med ulik nevner**

Når vi møter på brøker med ulik nevner må vi utvide en eller begge brøkene slik at vi får en fellesnevner. Da ser vi først om det finnes et tall som vi kun trenger å gange med en av nevnerne slik at vi får den andre nevneren.`,
    },

    // Illustrasjon: Fellesnevner
    {
      id: 'bi-okonomi-1-3-fellesnevner-bilde',
      type: 'image',
      src: '/images/algebra/fellesnevner.svg',
      alt: 'Hvordan finne fellesnevner ved å utvide brøker',
      caption: 'Fellesnevner - utviding av brøker for addisjon og subtraksjon',
    },

    // ========== EKSEMPEL 9 ==========
    {
      id: 'bi-okonomi-1-3-example-9',
      type: 'example',
      title: 'Eksempel 9',
      problem: 'Trekk sammen brøkene:\n\n$$\\frac{1}{2} + \\frac{2}{10}$$',
      solution: `**Løsning:**

$$\\frac{1}{2} + \\frac{2}{10} = \\frac{1 \\cdot 5}{2 \\cdot 5} + \\frac{2}{10} = \\frac{5}{10} + \\frac{2}{10} = \\frac{5 + 2}{10} = \\frac{7}{10}$$`,
      solutionVideo: 'wP4OsHmRsHw',
    },

    // ========== EKSEMPEL 10 ==========
    {
      id: 'bi-okonomi-1-3-example-10',
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
      id: 'bi-okonomi-1-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-3-ex-8',
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
      id: 'bi-okonomi-1-3-text-gangenevner',
      type: 'text',
      content: `**Å gange nevnerne med hverandre for å finne fellesnevner**

Når det ikke går å kun gange en av nevnerne så må vi gange begge. En metode som alltid fungerer når vi skal finne fellesnevner for to brøker er å utvide den første brøken med nevneren i den andre brøken og den andre brøken med nevneren i den første brøken.`,
    },

    // ========== EKSEMPEL 11 ==========
    {
      id: 'bi-okonomi-1-3-example-11',
      type: 'example',
      title: 'Eksempel 11',
      problem: 'Trekk sammen brøkene:\n\n$$\\frac{1}{2} + \\frac{3}{7}$$',
      solution: `**Løsning:**

$$\\frac{1}{2} + \\frac{3}{7} = \\frac{1 \\cdot 7}{2 \\cdot 7} + \\frac{3 \\cdot 2}{7 \\cdot 2} = \\frac{7}{14} + \\frac{6}{14} = \\frac{13}{14}$$`,
      solutionVideo: '1WmmzOBu82M',
    },

    // ========== OPPGAVE 9 ==========
    {
      id: 'bi-okonomi-1-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-3-ex-9',
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
      id: 'bi-okonomi-1-3-text-mfn',
      type: 'text',
      content: `**Å finne minste felles nevner**

Når vi bruker metoden ovenfor kan det hende at vi får en unødvendig høy fellesnevner. Om vi for eksempel skal legge sammen: $\\frac{1}{21} + \\frac{1}{14}$ vil vi få $21 \\cdot 14 = 294$ som nevner.

Dette vil skje fordi vi har felles faktorer i nevnerne våre. Vi ser vi kan faktorisere utrykket slik: $\\frac{1}{3 \\cdot 7} + \\frac{1}{2 \\cdot 7}$. Begge nevnerne inneholder altså faktoren 7, så dette er felles. Den første nevneren har en 3-er som den andre nevneren ikke har og den andre nevneren har en 2-er som den første ikke har. Da kan vi legge til det som mangler i hver av brøkene for å få en felles nevner:

$$\\frac{1}{3 \\cdot 7} + \\frac{1}{2 \\cdot 7} = \\frac{2 \\cdot 1}{2 \\cdot 3 \\cdot 7} + \\frac{3 \\cdot 1}{3 \\cdot 2 \\cdot 7} = \\frac{2}{42} + \\frac{3}{42} = \\frac{5}{42}$$`,
    },

    // ========== EKSEMPEL 12 ==========
    {
      id: 'bi-okonomi-1-3-example-12',
      type: 'example',
      title: 'Eksempel 12',
      problem: 'Trekk sammen brøkene:\n\n$$\\frac{1}{10} + \\frac{1}{15}$$',
      solution: `**Løsning:**

$$\\frac{1}{10} + \\frac{1}{15} = \\frac{1}{{\\color{blue}5} \\cdot 2} + \\frac{1}{{\\color{blue}5} \\cdot 3} = \\frac{1 \\cdot {\\color{green}3}}{{\\color{blue}5} \\cdot 2 \\cdot {\\color{green}3}} + \\frac{1 \\cdot {\\color{green}2}}{{\\color{blue}5} \\cdot 3 \\cdot {\\color{green}2}} = \\frac{3}{30} + \\frac{2}{30} = \\frac{{\\color{red}5}}{30} = \\frac{1}{6}$$`,
      solutionVideo: 'p027J0GO8VQ',
    },

    // ========== OPPGAVE 10 ==========
    {
      id: 'bi-okonomi-1-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-3-ex-10',
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
      id: 'bi-okonomi-1-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        // R1
        {
          id: 'bi-okonomi-1-3-rep-1',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-3-rep-ex-1',
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
          id: 'bi-okonomi-1-3-rep-2',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-3-rep-ex-2',
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
          id: 'bi-okonomi-1-3-rep-3',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-3-rep-ex-3',
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
          id: 'bi-okonomi-1-3-rep-4',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-3-rep-ex-4',
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
          id: 'bi-okonomi-1-3-rep-5',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-3-rep-ex-5',
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
          id: 'bi-okonomi-1-3-rep-6',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-3-rep-ex-6',
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
          id: 'bi-okonomi-1-3-rep-7',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-3-rep-ex-7',
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
          id: 'bi-okonomi-1-3-rep-8',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-3-rep-ex-8',
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
          id: 'bi-okonomi-1-3-rep-9',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-3-rep-ex-9',
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
          id: 'bi-okonomi-1-3-rep-10',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-3-rep-ex-10',
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

export const CHAPTER_BI_OKONOMI_1_4: TextbookChapter = {
  id: 'bi-okonomi-1-4',
  courseId: 'bi-okonomi',
  chapterNumber: '1.4',
  title: 'Prosentregning',
  description: 'Lær om prosent, prosentpoeng, vekstfaktor og gjentatt prosentvis endring.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne prosentvis endring',
    'bruke vekstfaktorer i økonomiske beregninger',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bi-okonomi-1-4-intro',
      type: 'text',
      content: `Prosentregning er helt sentralt i økonomi. Vi bruker prosent til å beskrive renter, avkastning, rabatter, skatter, prisendringer og mye mer. I dette kapittelet lærer du de viktigste teknikkene for å regne med prosent.`,
    },

    // ========== GRUNNLEGGENDE PROSENT ==========
    {
      id: 'bi-okonomi-1-4-def-prosent',
      type: 'definition',
      title: 'Prosent',
      content: `**Prosent** betyr «per hundre» og skrives med tegnet %.

$$1\\% = \\frac{1}{100} = 0{,}01$$

For å finne $p\\%$ av et tall $G$, regner vi:

$$p\\% \\cdot G = \\frac{p}{100} \\cdot G$$

**Eksempel:** $25\\%$ av $200$ er $\\frac{25}{100} \\cdot 200 = 0{,}25 \\cdot 200 = 50$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bi-okonomi-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Regn ut:\n\na) $15\\%$ av $800$ kr\nb) $7{,}5\\%$ av $12\\,000$ kr\nc) Hvor mange prosent er $45$ av $180$?',
      solution: `**Løsning:**

a) $15\\% \\cdot 800 = 0{,}15 \\cdot 800 = 120$ kr

b) $7{,}5\\% \\cdot 12\\,000 = 0{,}075 \\cdot 12\\,000 = 900$ kr

c) $\\frac{45}{180} = 0{,}25 = 25\\%$`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bi-okonomi-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$20\\%$ av $500$ kr', solution: '$0{,}20 \\cdot 500 = 100$ kr', answer: 100 },
          { label: 'b', task: '$8\\%$ av $2\\,500$ kr', solution: '$0{,}08 \\cdot 2500 = 200$ kr', answer: 200 },
          { label: 'c', task: '$12{,}5\\%$ av $4\\,000$ kr', solution: '$0{,}125 \\cdot 4000 = 500$ kr', answer: 500 },
          { label: 'd', task: 'Hvor mange prosent er $36$ av $120$?', solution: '$\\frac{36}{120} = 0{,}30 = 30\\%$', answer: 30 },
          { label: 'e', task: 'Hvor mange prosent er $156$ av $1\\,200$?', solution: '$\\frac{156}{1200} = 0{,}13 = 13\\%$', answer: 13 },
        ],
        hints: ['$p\\% = \\frac{p}{100}$', 'For å finne hvor mange prosent: del delen på helheten'],
        solution: 'a) 100 kr, b) 200 kr, c) 500 kr, d) 30%, e) 13%',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PROSENTVIS ENDRING ==========
    {
      id: 'bi-okonomi-1-4-def-endring',
      type: 'definition',
      title: 'Prosentvis endring',
      content: `Når en størrelse endrer seg fra en **gammel verdi** til en **ny verdi**, kan vi beregne den prosentvise endringen:

$$\\text{Prosentvis endring} = \\frac{\\text{ny verdi} - \\text{gammel verdi}}{\\text{gammel verdi}} \\cdot 100\\%$$

**Positiv verdi** = økning (vekst)
**Negativ verdi** = nedgang (reduksjon)`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bi-okonomi-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'En aksje steg fra 80 kr til 92 kr. Hva var den prosentvise økningen?',
      solution: `**Løsning:**

$$\\text{Prosentvis endring} = \\frac{92 - 80}{80} \\cdot 100\\% = \\frac{12}{80} \\cdot 100\\% = 0{,}15 \\cdot 100\\% = 15\\%$$

Aksjen steg med $15\\%$.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bi-okonomi-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn prosentvis endring',
        subTasks: [
          { label: 'a', task: 'Fra 200 kr til 230 kr', solution: '$\\frac{230-200}{200} = 0{,}15 = 15\\%$ økning', answer: 15 },
          { label: 'b', task: 'Fra 500 kr til 450 kr', solution: '$\\frac{450-500}{500} = -0{,}10 = -10\\%$ (10% nedgang)', answer: -10 },
          { label: 'c', task: 'Fra 1200 kr til 1500 kr', solution: '$\\frac{1500-1200}{1200} = 0{,}25 = 25\\%$ økning', answer: 25 },
          { label: 'd', task: 'Fra 80 kr til 60 kr', solution: '$\\frac{60-80}{80} = -0{,}25 = -25\\%$ (25% nedgang)', answer: -25 },
        ],
        hints: ['Bruk formelen: $\\frac{\\text{ny} - \\text{gammel}}{\\text{gammel}} \\cdot 100\\%$'],
        solution: 'a) 15% økning, b) 10% nedgang, c) 25% økning, d) 25% nedgang',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VEKSTFAKTOR ==========
    {
      id: 'bi-okonomi-1-4-def-vekstfaktor',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `En **vekstfaktor** er tallet vi ganger med for å få ny verdi fra gammel verdi.

$$\\text{Ny verdi} = \\text{Gammel verdi} \\cdot \\text{Vekstfaktor}$$

Sammenhengen mellom prosentvis endring og vekstfaktor:

| Endring | Vekstfaktor |
|---------|-------------|
| Økning på $p\\%$ | $1 + \\frac{p}{100}$ |
| Nedgang på $p\\%$ | $1 - \\frac{p}{100}$ |

**Eksempler:**
- Økning på $20\\%$: Vekstfaktor $= 1 + 0{,}20 = 1{,}20$
- Nedgang på $15\\%$: Vekstfaktor $= 1 - 0{,}15 = 0{,}85$`,
    },

    // ========== TIP ==========
    {
      id: 'bi-okonomi-1-4-tip-1',
      type: 'tip',
      content: `**Vekstfaktor er praktisk!**

Istedenfor å regne: $500 + 20\\% \\cdot 500 = 500 + 100 = 600$

Kan vi regne: $500 \\cdot 1{,}20 = 600$

Dette er spesielt nyttig ved gjentatte endringer.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bi-okonomi-1-4-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'En vare koster 800 kr.\n\na) Hva blir prisen etter 25% rabatt?\nb) Hva blir prisen etter 8% prisøkning?',
      solution: `**Løsning:**

a) Rabatt på $25\\%$ gir vekstfaktor $1 - 0{,}25 = 0{,}75$
$$800 \\cdot 0{,}75 = 600 \\text{ kr}$$

b) Økning på $8\\%$ gir vekstfaktor $1 + 0{,}08 = 1{,}08$
$$800 \\cdot 1{,}08 = 864 \\text{ kr}$$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bi-okonomi-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk vekstfaktor til å beregne',
        subTasks: [
          { label: 'a', task: '1000 kr øker med 12%', solution: '$1000 \\cdot 1{,}12 = 1120$ kr', answer: 1120 },
          { label: 'b', task: '2500 kr reduseres med 20%', solution: '$2500 \\cdot 0{,}80 = 2000$ kr', answer: 2000 },
          { label: 'c', task: '450 kr øker med 30%', solution: '$450 \\cdot 1{,}30 = 585$ kr', answer: 585 },
          { label: 'd', task: '1800 kr reduseres med 5%', solution: '$1800 \\cdot 0{,}95 = 1710$ kr', answer: 1710 },
          { label: 'e', task: 'Finn vekstfaktoren når noe øker fra 400 til 500', solution: '$\\frac{500}{400} = 1{,}25$', answer: 1.25 },
        ],
        hints: ['Økning: vekstfaktor $> 1$', 'Nedgang: vekstfaktor $< 1$'],
        solution: 'a) 1120 kr, b) 2000 kr, c) 585 kr, d) 1710 kr, e) 1,25',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GJENTATT PROSENTVIS ENDRING ==========
    {
      id: 'bi-okonomi-1-4-def-gjentatt',
      type: 'theorem',
      title: 'Gjentatt prosentvis endring',
      content: `Når en størrelse endres med samme prosent flere ganger, bruker vi potenser:

$$K_n = K_0 \\cdot v^n$$

der:
- $K_0$ = startverdi
- $v$ = vekstfaktor
- $n$ = antall perioder
- $K_n$ = sluttverdi etter $n$ perioder

**Dette er grunnlaget for renteberegninger!**`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'bi-okonomi-1-4-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Du setter 10 000 kr i banken med 5% årlig rente. Hvor mye har du etter 3 år?',
      solution: `**Løsning:**

Vekstfaktor: $v = 1 + 0{,}05 = 1{,}05$

$$K_3 = 10\\,000 \\cdot 1{,}05^3 = 10\\,000 \\cdot 1{,}157625 = 11\\,576{,}25 \\text{ kr}$$

Du har 11 576,25 kr etter 3 år.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bi-okonomi-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk formelen $K_n = K_0 \\cdot v^n$',
        subTasks: [
          { label: 'a', task: '$K_0 = 5000$, årlig økning $8\\%$, $n = 4$ år', solution: '$5000 \\cdot 1{,}08^4 = 6802{,}44$ kr', answer: 6802.44 },
          { label: 'b', task: '$K_0 = 20000$, årlig nedgang $10\\%$, $n = 3$ år', solution: '$20000 \\cdot 0{,}90^3 = 14580$ kr', answer: 14580 },
          { label: 'c', task: 'En bil verdt 300 000 kr synker 15% i verdi hvert år. Hva er den verdt etter 5 år?', solution: '$300000 \\cdot 0{,}85^5 = 133\\,105{,}59$ kr', answer: 133105.59 },
        ],
        hints: ['Husk: økning gir $v > 1$, nedgang gir $v < 1$'],
        solution: 'a) 6802,44 kr, b) 14 580 kr, c) 133 105,59 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PROSENTPOENG ==========
    {
      id: 'bi-okonomi-1-4-def-prosentpoeng',
      type: 'definition',
      title: 'Prosentpoeng vs prosent',
      content: `**Prosentpoeng** brukes når vi snakker om endring i prosenttall.

**Eksempel:** Renten stiger fra $3\\%$ til $5\\%$.
- Endring i **prosentpoeng**: $5 - 3 = 2$ prosentpoeng
- Endring i **prosent**: $\\frac{5-3}{3} \\cdot 100\\% = 66{,}7\\%$

**Husk:**
- «Renten økte med 2 prosentpoeng» betyr at den gikk fra f.eks. 3% til 5%
- «Renten økte med 2%» betyr at den gikk fra f.eks. 3% til $3\\% \\cdot 1{,}02 = 3{,}06\\%$`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bi-okonomi-1-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosentpoeng og prosent',
        subTasks: [
          { label: 'a', task: 'Arbeidsledigheten gikk fra $4\\%$ til $5\\%$. Hvor mange prosentpoeng økte den?', solution: '$5 - 4 = 1$ prosentpoeng', answer: 1 },
          { label: 'b', task: 'Arbeidsledigheten gikk fra $4\\%$ til $5\\%$. Hvor mange prosent økte den?', solution: '$\\frac{5-4}{4} \\cdot 100\\% = 25\\%$', answer: 25 },
          { label: 'c', task: 'Renten er $6\\%$ og øker med $0{,}5$ prosentpoeng. Hva blir ny rente?', solution: '$6 + 0{,}5 = 6{,}5\\%$', answer: 6.5 },
          { label: 'd', task: 'Markedsandelen falt fra $25\\%$ til $20\\%$. Hvor mange prosentpoeng falt den?', solution: '$20 - 25 = -5$ prosentpoeng (5 pp nedgang)', answer: -5 },
        ],
        hints: ['Prosentpoeng = differansen mellom to prosenttall'],
        solution: 'a) 1 prosentpoeng, b) 25%, c) 6,5%, d) 5 prosentpoeng nedgang',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bi-okonomi-1-4-summary',
      type: 'theorem',
      title: 'Oppsummering: Prosentregning',
      content: `| Begrep | Formel / Forklaring |
|--------|---------------------|
| Prosent av tall | $p\\% \\cdot G = \\frac{p}{100} \\cdot G$ |
| Prosentvis endring | $\\frac{\\text{ny} - \\text{gammel}}{\\text{gammel}} \\cdot 100\\%$ |
| Vekstfaktor (økning) | $v = 1 + \\frac{p}{100}$ |
| Vekstfaktor (nedgang) | $v = 1 - \\frac{p}{100}$ |
| Gjentatt endring | $K_n = K_0 \\cdot v^n$ |
| Prosentpoeng | Differanse mellom to prosenttall |`,
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: 'bi-okonomi-1-4-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: 'bi-okonomi-1-4-rep-1',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-4-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut',
            subTasks: [
              { label: 'a', task: '$35\\%$ av $2000$ kr', answer: 700 },
              { label: 'b', task: 'Prosentvis endring fra $80$ til $100$', answer: 25 },
              { label: 'c', task: 'Vekstfaktor ved $18\\%$ økning', answer: 1.18 },
              { label: 'd', task: '$15\\,000 \\cdot 1{,}06^5$', answer: 20073.38 },
            ],
            solution: 'a) 700 kr, b) 25%, c) 1,18, d) 20 073,38 kr',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: 'bi-okonomi-1-4-rep-2',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-1-4-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Løs oppgavene',
            subTasks: [
              { label: 'a', task: 'En investering på 50 000 kr gir 7% årlig avkastning. Hvor mye er den verdt etter 10 år?', answer: 98357.57 },
              { label: 'b', task: 'En maskin verdt 200 000 kr avskrives med 12% per år. Hva er verdien etter 6 år?', answer: 92953.48 },
              { label: 'c', task: 'Renten økte fra 2,5% til 4%. Hvor mange prosentpoeng økte den?', answer: 1.5 },
            ],
            solution: 'a) 98 357,57 kr, b) 92 953,48 kr, c) 1,5 prosentpoeng',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_2_1: TextbookChapter = {
  id: 'bi-okonomi-2-1',
  courseId: 'bi-okonomi',
  chapterNumber: '2.1',
  title: 'Grunnleggende likninger',
  description: 'Lær grunnleggende teknikker for å løse førstegradslikninger med addisjon, subtraksjon, multiplikasjon og divisjon.',
  estimatedMinutes: 90,
  competenceGoals: ['løse lineære likninger', 'bruke regneregler for likninger'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bi-okonomi-2-1-intro',
      type: 'text',
      content: `## Likninger med addisjon og subtraksjon

Før du begynner på dette kapitlet er det viktig at du har pluss og minus (med parenteser) ordentlig på plass.

Hovedprinsippet for å løse likninger er at vi alltid gjør det samme på begge sider av likhetstegnet. Når vi skriver $| - 5$ betyr det at vi trekker fra 5 på begge sider av likheten.`,
    },

    // Illustrasjon: Likningsvekt
    {
      id: 'bi-okonomi-2-1-likningsvekt-bilde',
      type: 'image',
      src: '/images/algebra/likningsvekt.svg',
      alt: 'En vekt som illustrerer likhetsprinsippet i likninger',
      caption: 'En likning er som en vekt - det vi gjor på den ene siden må vi også gjøre på den andre',
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bi-okonomi-2-1-example-1',
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
      id: 'bi-okonomi-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-1',
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
      id: 'bi-okonomi-2-1-algebra-intro',
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
      id: 'bi-okonomi-2-1-example-2',
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
      id: 'bi-okonomi-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-2',
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
      id: 'bi-okonomi-2-1-mult-div-intro',
      type: 'text',
      content: `## Likninger med multiplikasjon og divisjon

Når vi har likninger der $x$ er ganget med et tall, må vi dele begge sider på dette tallet for å finne $x$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bi-okonomi-2-1-example-3',
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
      id: 'bi-okonomi-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-3',
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
      id: 'bi-okonomi-2-1-example-4',
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
      id: 'bi-okonomi-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-4',
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
      id: 'bi-okonomi-2-1-example-5',
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
      id: 'bi-okonomi-2-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-5',
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
      id: 'bi-okonomi-2-1-example-6',
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
      id: 'bi-okonomi-2-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-6',
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
      id: 'bi-okonomi-2-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        // Repetisjonsoppgave R1
        {
          id: 'bi-okonomi-2-1-rep-1',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-1-rep-ex-1',
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
          id: 'bi-okonomi-2-1-rep-2',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-1-rep-ex-2',
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
          id: 'bi-okonomi-2-1-rep-3',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-1-rep-ex-3',
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
          id: 'bi-okonomi-2-1-rep-4',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-1-rep-ex-4',
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
          id: 'bi-okonomi-2-1-rep-5',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-1-rep-ex-5',
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
          id: 'bi-okonomi-2-1-rep-6',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-1-rep-ex-6',
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
          id: 'bi-okonomi-2-1-rep-7',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-2-1-rep-ex-7',
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
      id: 'bi-okonomi-2-1-del2-intro',
      type: 'text',
      content: `## Grunnleggende likninger del 2
### Likninger med brøker og parenteser

Før du begynner på del to av grunnleggende likninger er det viktig at du har brøkregning ordentlig på plass.`,
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: 'bi-okonomi-2-1-example-7',
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
      id: 'bi-okonomi-2-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-7',
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
      id: 'bi-okonomi-2-1-example-8',
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
      id: 'bi-okonomi-2-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-8',
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
      id: 'bi-okonomi-2-1-example-9',
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
      id: 'bi-okonomi-2-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-9',
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
      id: 'bi-okonomi-2-1-example-10',
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
      id: 'bi-okonomi-2-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-10',
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
      id: 'bi-okonomi-2-1-example-11',
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
      id: 'bi-okonomi-2-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-11',
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
      id: 'bi-okonomi-2-1-example-12',
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
      id: 'bi-okonomi-2-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-12',
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
      id: 'bi-okonomi-2-1-example-13',
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
      id: 'bi-okonomi-2-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-1-ex-13',
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

export const CHAPTER_BI_OKONOMI_2_2: TextbookChapter = {
  id: 'bi-okonomi-2-2',
  courseId: 'bi-okonomi',
  chapterNumber: '2.2',
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

export const CHAPTER_BI_OKONOMI_2_3: TextbookChapter = {
  id: 'bi-okonomi-2-3',
  courseId: 'bi-okonomi',
  chapterNumber: '2.3',
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
      id: 'bi-okonomi-2-3-intro',
      type: 'text',
      content: `Vi skal nå løse **likningssett** – et sett med flere likninger som skal være oppfylt samtidig.

I hver likning har vi to eller flere ukjente, og vi skal finne verdiene som gjør at **alle likningene stemmer samtidig**.

**Forkunnskaper:** Grunnleggende likninger og lineære funksjoner.

For å skille på likningene er det nyttig å nummerere dem med romertall. $I$ refererer til likning én og $II$ til likning to.`,
    },

    // ==================== GRAFISK LØSNING ====================
    {
      id: 'bi-okonomi-2-3-section-grafisk',
      type: 'text',
      content: `## Grafisk løsning av likningssett

Den enkleste måten å forstå likningssett på er å tegne begge likningene som linjer i et koordinatsystem. **Løsningen er punktet der linjene krysser hverandre**.`,
    },

    // Illustrasjon: Grafisk løsning
    {
      id: 'bi-okonomi-2-3-grafisk-losning-bilde',
      type: 'image',
      src: '/images/functions/grafisk-losning.svg',
      alt: 'Grafisk losning av likningssett - to linjer som krysser i et punkt',
      caption: 'Grafisk losning: skjæringspunktet mellom to linjer er losningen',
    },

    // Illustrasjon: Parallelle linjer
    {
      id: 'bi-okonomi-2-3-parallelle-linjer-bilde',
      type: 'image',
      src: '/images/functions/parallelle-linjer.svg',
      alt: 'Parallelle linjer har samme stigningstall og krysser aldri',
      caption: 'Parallelle linjer: samme stigningstall, ingen losning',
    },

    // Illustrasjon: Vinkelrette linjer
    {
      id: 'bi-okonomi-2-3-vinkelrette-linjer-bilde',
      type: 'image',
      src: '/images/functions/vinkelrette-linjer.svg',
      alt: 'Vinkelrette linjer star 90 grader på hverandre',
      caption: 'Vinkelrette linjer: produktet av stigningstallene er -1',
    },

    {
      id: 'bi-okonomi-2-3-example-1',
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
      id: 'bi-okonomi-2-3-geogebra-1',
      type: 'geogebra',
      title: 'Utforsk grafisk løsning',
      description: 'Prøv å tegne inn andre likningssett og finn skjæringspunktet.',
      appType: 'graphing',
      commands: ['y = 2x - 4', 'y = 0.5x + 0.5', 'A = Intersect(y = 2x - 4, y = 0.5x + 0.5)'],
    },
    {
      id: 'bi-okonomi-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-1',
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
      id: 'bi-okonomi-2-3-section-spesielle',
      type: 'text',
      content: `## Ingen løsninger og uendelig mange løsninger

Ikke alle likningssett har én løsning:

- **Ingen løsninger:** Dersom to linjer er **parallelle** (og ikke sammenfallende), vil de aldri møte hverandre. Eksempelvis vil $y = 2x - 2$ og $y = 2x + 3$ alltid ha en avstand på 5 når de har samme $x$-verdi.

- **Uendelig mange løsninger:** Dersom linjene er **sammenfallende** (beskriver samme linje), har de uendelig mange felles punkter.`,
    },

    // ==================== INNSETTINGSMETODEN ====================
    {
      id: 'bi-okonomi-2-3-section-innsetting',
      type: 'text',
      content: `## Innsettingsmetoden

**Innsetting** betyr å erstatte en variabel med en verdi eller et uttrykk. Vi kan bruke dette til å løse likningssett.`,
    },
    {
      id: 'bi-okonomi-2-3-example-2',
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
      id: 'bi-okonomi-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-2',
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
      id: 'bi-okonomi-2-3-section-innsetting-uttrykk',
      type: 'text',
      content: `## Innsetting av variabler og uttrykk

Vi kan også erstatte variabler med hele **uttrykk** istedenfor kun tall. Dette er nøkkelen til å løse likningssett.`,
    },
    {
      id: 'bi-okonomi-2-3-example-3',
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
      id: 'bi-okonomi-2-3-note-notation',
      type: 'note',
      content: `**Notasjon:**
- $I \\to II$ betyr at vi bruker informasjon fra likning $I$ i likning $II$.
- $II^*$ betyr den omformede likning $II$.`,
    },
    {
      id: 'bi-okonomi-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-3',
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
      id: 'bi-okonomi-2-3-section-fullstendig',
      type: 'text',
      content: `## Likningssett løst ved hjelp av innsettingsmetoden

I vanlige likningssett med 2 ukjente bruker vi enten $I$ eller $II$ og løser for enten $x$ eller $y$. Hvilken av likningene vi velger å bruke og hvilken variabel vi løser for kommer an på hva vi tenker blir **enklest** å gjennomføre.`,
    },
    {
      id: 'bi-okonomi-2-3-example-4',
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
      id: 'bi-okonomi-2-3-tip-enklest',
      type: 'tip',
      content: `**Tips:** Velg alltid å løse for den variabelen som gir det **enkleste uttrykket**. Hvis en variabel allerede har koeffisient 1 (som $x$ i likning $I$ over), er det som regel lurt å løse for denne.`,
    },
    {
      id: 'bi-okonomi-2-3-example-4b',
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
      id: 'bi-okonomi-2-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-4',
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
      id: 'bi-okonomi-2-3-ex-block-4b',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-4b',
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
      id: 'bi-okonomi-2-3-section-addisjon',
      type: 'text',
      content: `## Addisjonsmetoden

I et likningssett vil alltid begge likningene gjelde samtidig. Det vil også si at dersom vi **legger sammen venstresidene** i $I$ og $II$, så vil summen av disse være lik **summen av høyresidene**.

Dette kan vi bruke til å **fjerne** $x$ eller $y$ i en av likningene slik at vi kun står igjen med én ukjent.`,
    },
    {
      id: 'bi-okonomi-2-3-example-5',
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
      id: 'bi-okonomi-2-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-5',
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
      id: 'bi-okonomi-2-3-text-mult',
      type: 'text',
      content: `Som du kanskje har tenkt, er det ikke alltid slik at en av variablene forsvinner bare du legger sammen likning $I$ og $II$.

For å løse dette **multipliserer vi én eller begge likningene** slik at de får en lik konstant (med motsatt fortegn) foran enten $x$ eller $y$.`,
    },
    {
      id: 'bi-okonomi-2-3-example-6',
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
      id: 'bi-okonomi-2-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-6',
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
      id: 'bi-okonomi-2-3-example-7',
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
      id: 'bi-okonomi-2-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-7',
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
      id: 'bi-okonomi-2-3-section-tre',
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
      id: 'bi-okonomi-2-3-example-8',
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
      id: 'bi-okonomi-2-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-8',
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
      id: 'bi-okonomi-2-3-ex-block-8b',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-8b',
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
      id: 'bi-okonomi-2-3-section-praktisk',
      type: 'text',
      content: `## Å sette opp og løse likningssett fra reelle situasjoner

Likningssett er veldig nyttige for å løse praktiske problemer der vi har **flere ukjente størrelser** og **flere betingelser** som skal oppfylles.`,
    },
    {
      id: 'bi-okonomi-2-3-example-praktisk',
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
      id: 'bi-okonomi-2-3-ex-block-praktisk1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-praktisk1',
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
      id: 'bi-okonomi-2-3-ex-block-praktisk2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-3-ex-praktisk2',
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
      id: 'bi-okonomi-2-3-summary',
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

export const CHAPTER_BI_OKONOMI_2_4: TextbookChapter = {
  id: 'bi-okonomi-2-4',
  courseId: 'bi-okonomi',
  chapterNumber: '2.4',
  title: 'Lineære ulikheter',
  description: 'Lær å løse førstegradsulikheter og når du må snu ulikhetstegnet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'løyse ulikskapar av første grad',
    'bruke intervallnotasjon for å beskrive løsningsmengder',
  ],
  content: [
    {
      id: 'bi-okonomi-2-4-intro',
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
      id: 'bi-okonomi-2-4-example-1',
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
      id: 'bi-okonomi-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-4-ex-1',
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
      id: 'bi-okonomi-2-4-negative-intro',
      type: 'text',
      content: `## Ulikheter der vi må gange eller dele med negative tall

Når vi ganger eller deler med et **negativt tall** på begge sider av en ulikhet, må vi **snu ulikhetstegnet**.

**Hvorfor?** Tenk på tallinjen: Når vi ganger med $-1$, bytter tallene side. For eksempel er $2 < 5$, men $-2 > -5$.

> **Husk:** $x$ kan være både positiv og negativ. Derfor er det **ikke lov** å gange med eller dele på $x$ på begge sider av en ulikhet (med mindre vi vet fortegnet til $x$).`,
    },

    // Eksempel 2: Negative tall
    {
      id: 'bi-okonomi-2-4-example-2',
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
      id: 'bi-okonomi-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-4-ex-2',
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

export const CHAPTER_BI_OKONOMI_3_1: TextbookChapter = {
  id: 'bi-okonomi-3-1',
  courseId: 'bi-okonomi',
  chapterNumber: '3.1',
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
      id: 'bi-okonomi-3-1-intro',
      type: 'text',
      content: `## Enkel innsetting

Når vi har et matematisk uttrykk, for eksempel $2x + 1$, så sier vi ofte at $x$ er en **variabel**. Det er fordi $x$ kan være mange forskjellige verdier (den varierer).

Du kan velge hvilket tall du vil erstatte $x$ med — dette kalles å **sette inn** en verdi for $x$.`,
    },

    // Eksempel 3
    {
      id: 'bi-okonomi-3-1-example-1',
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
      id: 'bi-okonomi-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-1-ex-1',
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
      id: 'bi-okonomi-3-1-section-avhengig',
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
      id: 'bi-okonomi-3-1-example-2',
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
      id: 'bi-okonomi-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-1-ex-2',
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
      id: 'bi-okonomi-3-1-section-linjer',
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
      id: 'bi-okonomi-3-1-geogebra-linje',
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
      id: 'bi-okonomi-3-1-example-3',
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
      id: 'bi-okonomi-3-1-geogebra-ex3',
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
      id: 'bi-okonomi-3-1-tip-xverdier',
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
      id: 'bi-okonomi-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-1-ex-3',
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
      id: 'bi-okonomi-3-1-section-stigning',
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
      id: 'bi-okonomi-3-1-def-konstantledd',
      type: 'definition',
      title: 'Konstantleddet',
      content: `**Konstantleddet** $b$ forteller oss hvor linjen skjærer $y$-aksen.

Når grafen skjærer $y$-aksen er $x = 0$. Da får vi:
$$y = a \\cdot 0 + b = b$$

Skjæringspunktet med $y$-aksen er altså $(0, b)$.`,
    },

    // Definisjon: Stigningstallet
    {
      id: 'bi-okonomi-3-1-def-stigning',
      type: 'definition',
      title: 'Stigningstallet',
      content: `**Stigningstallet** $a$ beskriver hvor mye $y$-verdien øker (eller minker) når $x$-verdien øker med 1.

- Hvis $a > 0$: Linjen stiger (går oppover mot høyre)
- Hvis $a < 0$: Linjen synker (går nedover mot høyre)
- Hvis $a = 0$: Linjen er horisontal`,
    },

    // Illustrasjon: Stigningstall
    {
      id: 'bi-okonomi-3-1-stigningstall-bilde',
      type: 'image',
      src: '/images/functions/stigningstall.svg',
      alt: 'Visualisering av stigningstall: hvor mye y oker når x oker med 1',
      caption: 'Stigningstallet viser hvor bratt linjen er',
    },

    // Illustrasjon: Lineær funksjon
    {
      id: 'bi-okonomi-3-1-lineaer-bilde',
      type: 'image',
      src: '/images/functions/lineaer-funksjon.svg',
      alt: 'Graf av en lineær funksjon y = ax + b',
      caption: 'En lineær funksjon med stigningstall a og konstantledd b',
    },

    // GeoGebra: y = 2x + 1 med stigningstall
    {
      id: 'bi-okonomi-3-1-geogebra-stigning',
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
      id: 'bi-okonomi-3-1-text-stigning-forklaring',
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
      id: 'bi-okonomi-3-1-example-4',
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
      id: 'bi-okonomi-3-1-geogebra-ex4',
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
      id: 'bi-okonomi-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-1-ex-4',
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
      id: 'bi-okonomi-3-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-1-ex-5',
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
      id: 'bi-okonomi-3-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-1-ex-6',
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
      id: 'bi-okonomi-3-1-summary',
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
      id: 'bi-okonomi-3-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-1-ex-7',
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
      id: 'bi-okonomi-3-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-1-ex-8',
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

export const CHAPTER_BI_OKONOMI_3_2: TextbookChapter = {
  id: 'bi-okonomi-3-2',
  courseId: 'bi-okonomi',
  chapterNumber: '3.2',
  title: 'Andregradsfunksjoner',
  description: 'Parabeler, toppunkt/bunnpunkt og symmetrilinje.',
  estimatedMinutes: 40,
  competenceGoals: ['forstå og analysere andregradsfunksjoner'],
  content: [
    {
      id: 'bi-okonomi-3-2-intro',
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
      id: 'bi-okonomi-3-2-andregradsfunksjon-bilde',
      type: 'image',
      src: '/images/functions/andregradsfunksjon.svg',
      alt: 'Graf av en andregradsfunksjon (parabel) med toppunkt/bunnpunkt markert',
      caption: 'En andregradsfunksjon - parabelen viser topp- eller bunnpunkt',
    },

    // Illustrasjon: Diskriminanten
    {
      id: 'bi-okonomi-3-2-diskriminant-bilde',
      type: 'image',
      src: '/images/functions/diskriminanten.svg',
      alt: 'Diskriminanten bestemmer antall nullpunkter for en andregradsfunksjon',
      caption: 'Diskriminanten avgjor om parabelen har 0, 1 eller 2 nullpunkter',
    },

    {
      id: 'bi-okonomi-3-2-def-andregrads',
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
      id: 'bi-okonomi-3-2-text-parabel',
      type: 'text',
      content: `## Parabelens form

Fortegnet til $a$ bestemmer om parabelen er **smilende** eller **sur**:

- **$a > 0$:** Parabelen åpner oppover (har bunnpunkt)
- **$a < 0$:** Parabelen åpner nedover (har toppunkt)

Jo større $|a|$ er, desto **smalere** er parabelen.
Jo mindre $|a|$ er, desto **bredere** er parabelen.`,
    },
    {
      id: 'bi-okonomi-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Beskriv grafen til $f(x) = 2x^2 - 4x + 1$.',
      solution: `Vi har $a = 2$, $b = -4$ og $c = 1$.

**Form:** Siden $a = 2 > 0$, åpner parabelen oppover (har bunnpunkt).

**Skjæring med y-aksen:** $f(0) = 1$, så grafen skjærer $y$-aksen i $(0, 1)$.

**Parabelen er relativt smal** fordi $|a| = 2 > 1$.`,
    },
    {
      id: 'bi-okonomi-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-2-ex-1',
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
      id: 'bi-okonomi-3-2-theorem-symmetri',
      type: 'theorem',
      title: 'Symmetrilinje og toppunkt/bunnpunkt',
      content: `For andregradsfunksjonen $f(x) = ax^2 + bx + c$ gjelder:

**Symmetrilinje:** $x = -\\frac{b}{2a}$

**Toppunkt/bunnpunkt:** $\\left(-\\frac{b}{2a}, f\\left(-\\frac{b}{2a}\\right)\\right)$

Parabelen er symmetrisk om den vertikale linjen $x = -\\frac{b}{2a}$.`,
    },
    {
      id: 'bi-okonomi-3-2-example-2',
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
      id: 'bi-okonomi-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-2-ex-2',
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
      id: 'bi-okonomi-3-2-example-3',
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
      id: 'bi-okonomi-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-2-ex-3',
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
      id: 'bi-okonomi-3-2-text-fullstendig',
      type: 'text',
      content: `## Fullstendig kvadrats metode

Vi kan skrive $f(x) = ax^2 + bx + c$ på **toppunktform**:

$$f(x) = a(x - h)^2 + k$$

der $(h, k)$ er toppunktet/bunnpunktet.

For å finne denne formen bruker vi **fullstendig kvadrats metode**.`,
    },
    {
      id: 'bi-okonomi-3-2-example-4',
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
      id: 'bi-okonomi-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-2-ex-4',
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
      id: 'bi-okonomi-3-2-note-tegne',
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
      id: 'bi-okonomi-3-2-example-5',
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
      id: 'bi-okonomi-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En rakett skytes opp. Høyden etter $t$ sekunder er $h(t) = -4t^2 + 32t + 5$ meter. Finn når raketten er på sitt høyeste og hvor høyt den når.',
        solution: '$t = -\\frac{32}{-8} = 4$ sek. $h(4) = -64 + 128 + 5 = 69$ m. Raketten når 69 meter etter 4 sekunder.',
        hints: ['Finn toppunktet til andregradsfunksjonen'],
      },
    },
    {
      id: 'bi-okonomi-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-2-ex-6',
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

export const CHAPTER_BI_OKONOMI_3_3: TextbookChapter = {
  id: 'bi-okonomi-3-3',
  courseId: 'bi-okonomi',
  chapterNumber: '3.3',
  title: 'Eksponentialfunksjoner',
  description: 'Funksjoner med variabel i eksponenten.',
  estimatedMinutes: 30,
  competenceGoals: ['forstå eksponentiell vekst og nedgang'],
  content: [
    {
      id: 'bi-okonomi-3-3-intro',
      type: 'text',
      content: `En **eksponentialfunksjon** har variabelen i eksponenten. Disse funksjonene modellerer vekst og nedgang i naturen, økonomi og andre områder.

I dette kapitlet lærer du:
- Eksponentiell vekst og nedgang
- Vekstfaktor
- Å tegne eksponentialfunksjoner
- Praktiske anvendelser`,
    },
    {
      id: 'bi-okonomi-3-3-def-eksponential',
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
      id: 'bi-okonomi-3-3-text-vekst',
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
      id: 'bi-okonomi-3-3-example-1',
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
      id: 'bi-okonomi-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'En populasjon på 500 individer vokser med 8% per år. Sett opp en funksjon og finn populasjonen etter 10 år.',
        solution: '**Startverdi:** $a = 500$. **Vekstfaktor:** $b = 1{,}08$ (8% økning). Funksjonen blir $P(t) = 500 \\cdot 1{,}08^t$. Etter 10 år: $P(10) = 500 \\cdot 1{,}08^{10} \\approx 1080$ individer.',
      },
    },
    // Eksempel 2: Eksponentiell nedgang (bil)
    {
      id: 'bi-okonomi-3-3-example-2',
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
      id: 'bi-okonomi-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En maskin koster 200 000 kr og mister 25% av verdien hvert år. Sett opp en funksjon og finn verdien etter 4 år.',
        solution: '**Startverdi:** $a = 200\\,000$. **Vekstfaktor:** $b = 1 - 0{,}25 = 0{,}75$. Funksjonen blir $V(t) = 200\\,000 \\cdot 0{,}75^t$. Etter 4 år: $V(4) = 200\\,000 \\cdot 0{,}75^4 \\approx 63\\,281$ kr.',
      },
    },
    // Teori: Grafens egenskaper
    {
      id: 'bi-okonomi-3-3-text-graf',
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
      id: 'bi-okonomi-3-3-example-3',
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
      id: 'bi-okonomi-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-3-ex-3',
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
      id: 'bi-okonomi-3-3-note-dobling',
      type: 'note',
      content: `**Doblingstid og halveringstid**

**Doblingstid:** Tiden det tar før verdien er doblet.
For $f(x) = a \\cdot 2^{x/T}$ er doblingstiden $T$.

**Halveringstid:** Tiden det tar før verdien er halvert.
For $f(x) = a \\cdot \\left(\\frac{1}{2}\\right)^{x/T}$ er halveringstiden $T$.

**Eksempel:** Radioaktivt stoff med halveringstid 10 år: $N(t) = N_0 \\cdot 0{,}5^{t/10}$`,
    },
    {
      id: 'bi-okonomi-3-3-example-4',
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
      id: 'bi-okonomi-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-3-ex-4',
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
      id: 'bi-okonomi-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-3-ex-5',
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
      id: 'bi-okonomi-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-3-ex-6',
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

export const CHAPTER_BI_OKONOMI_3_4: TextbookChapter = {
  id: 'bi-okonomi-3-4',
  courseId: 'bi-okonomi',
  chapterNumber: '3.4',
  title: 'Logaritmer',
  description: 'Lær om logaritmebegrepet, logaritmeregler og løsning av eksponentiallikninger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke logaritmereglene',
    'løse eksponentiallikninger med logaritmer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bi-okonomi-3-4-intro',
      type: 'text',
      content: `Logaritmer er det motsatte av potenser. I økonomi bruker vi logaritmer til å finne ut hvor lang tid det tar før en investering når en viss verdi, eller til å løse likninger der den ukjente står i eksponenten.`,
    },

    // ========== DEFINISJON ==========
    {
      id: 'bi-okonomi-3-4-def-log',
      type: 'definition',
      title: 'Logaritme',
      content: `Logaritmen til et tall $x$ med grunntall $a$ er eksponenten vi må opphøye $a$ i for å få $x$:

$$\\log_a x = y \\quad \\Leftrightarrow \\quad a^y = x$$

**Eksempler:**
- $\\log_2 8 = 3$ fordi $2^3 = 8$
- $\\log_{10} 100 = 2$ fordi $10^2 = 100$
- $\\log_5 25 = 2$ fordi $5^2 = 25$`,
    },

    // ========== BRIGGSKE OG NATURLIGE LOGARITMER ==========
    {
      id: 'bi-okonomi-3-4-def-logtyper',
      type: 'definition',
      title: 'Briggske og naturlige logaritmer',
      content: `**Briggske logaritmer** (tierlogaritmer) har grunntall 10:
$$\\log x = \\log_{10} x$$

**Naturlige logaritmer** har grunntall $e \\approx 2{,}718$:
$$\\ln x = \\log_e x$$

Tallet $e$ er et viktig matematisk konstant som dukker opp naturlig i vekstmodeller.

**På kalkulatoren:**
- «log»-knappen gir $\\log_{10}$
- «ln»-knappen gir $\\log_e$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bi-okonomi-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Regn ut uten kalkulator:\n\na) $\\log_2 16$\nb) $\\log_3 27$\nc) $\\log 1000$\nd) $\\ln e^5$',
      solution: `**Løsning:**

a) $\\log_2 16 = 4$ fordi $2^4 = 16$

b) $\\log_3 27 = 3$ fordi $3^3 = 27$

c) $\\log 1000 = 3$ fordi $10^3 = 1000$

d) $\\ln e^5 = 5$ fordi $e^5 = e^5$`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bi-okonomi-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut uten kalkulator',
        subTasks: [
          { label: 'a', task: '$\\log_2 32$', solution: '$\\log_2 32 = 5$ fordi $2^5 = 32$', answer: 5 },
          { label: 'b', task: '$\\log_4 64$', solution: '$\\log_4 64 = 3$ fordi $4^3 = 64$', answer: 3 },
          { label: 'c', task: '$\\log 10\\,000$', solution: '$\\log 10000 = 4$ fordi $10^4 = 10000$', answer: 4 },
          { label: 'd', task: '$\\ln e^2$', solution: '$\\ln e^2 = 2$', answer: 2 },
          { label: 'e', task: '$\\log_5 125$', solution: '$\\log_5 125 = 3$ fordi $5^3 = 125$', answer: 3 },
          { label: 'f', task: '$\\log_2 \\frac{1}{8}$', solution: '$\\log_2 \\frac{1}{8} = -3$ fordi $2^{-3} = \\frac{1}{8}$', answer: -3 },
        ],
        hints: ['Spør deg selv: «Hva må eksponenten være?»'],
        solution: 'a) 5, b) 3, c) 4, d) 2, e) 3, f) -3',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LOGARITMEREGLER ==========
    {
      id: 'bi-okonomi-3-4-theorem-regler',
      type: 'theorem',
      title: 'Logaritmeregler',
      content: `For positive tall $x$ og $y$, og vilkårlig grunntall $a > 0$, $a \\neq 1$:

| Regel | Formel |
|-------|--------|
| Produktregelen | $\\log_a(x \\cdot y) = \\log_a x + \\log_a y$ |
| Kvotientregelen | $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$ |
| Potensregelen | $\\log_a(x^n) = n \\cdot \\log_a x$ |
| Logaritme av 1 | $\\log_a 1 = 0$ |
| Logaritme av grunntall | $\\log_a a = 1$ |`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bi-okonomi-3-4-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Skriv som én logaritme:\n\na) $\\log 5 + \\log 4$\nb) $\\ln 12 - \\ln 3$\nc) $3 \\log 2$',
      solution: `**Løsning:**

a) $\\log 5 + \\log 4 = \\log(5 \\cdot 4) = \\log 20$

b) $\\ln 12 - \\ln 3 = \\ln\\left(\\frac{12}{3}\\right) = \\ln 4$

c) $3 \\log 2 = \\log 2^3 = \\log 8$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bi-okonomi-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv som én logaritme',
        subTasks: [
          { label: 'a', task: '$\\log 8 + \\log 5$', solution: '$\\log(8 \\cdot 5) = \\log 40$', expressionAnswer: 'log(40)' },
          { label: 'b', task: '$\\ln 20 - \\ln 4$', solution: '$\\ln\\left(\\frac{20}{4}\\right) = \\ln 5$', expressionAnswer: 'ln(5)' },
          { label: 'c', task: '$2 \\log 5$', solution: '$\\log 5^2 = \\log 25$', expressionAnswer: 'log(25)' },
          { label: 'd', task: '$\\log 6 + \\log 3 - \\log 2$', solution: '$\\log\\left(\\frac{6 \\cdot 3}{2}\\right) = \\log 9$', expressionAnswer: 'log(9)' },
          { label: 'e', task: '$\\frac{1}{2}\\ln 16$', solution: '$\\ln 16^{1/2} = \\ln 4$', expressionAnswer: 'ln(4)' },
        ],
        hints: ['Produktregel: $\\log a + \\log b = \\log(ab)$', 'Kvotientregel: $\\log a - \\log b = \\log(a/b)$'],
        solution: 'a) log 40, b) ln 5, c) log 25, d) log 9, e) ln 4',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LØSE EKSPONENTIALLIKNINGER ==========
    {
      id: 'bi-okonomi-3-4-text-ekspeq',
      type: 'text',
      content: `## Løse eksponentiallikninger

Når den ukjente står i eksponenten, tar vi logaritmen på begge sider:

$$a^x = b \\quad \\Rightarrow \\quad x = \\frac{\\ln b}{\\ln a}$$

Dette følger fra potensregelen: $\\ln(a^x) = x \\cdot \\ln a$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bi-okonomi-3-4-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Løs likningen $2^x = 10$',
      solution: `**Løsning:**

Vi tar den naturlige logaritmen på begge sider:
$$\\ln(2^x) = \\ln 10$$

Bruker potensregelen:
$$x \\cdot \\ln 2 = \\ln 10$$

Løser for $x$:
$$x = \\frac{\\ln 10}{\\ln 2} = \\frac{2{,}303}{0{,}693} \\approx 3{,}32$$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bi-okonomi-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs eksponentiallikningene (bruk kalkulator)',
        subTasks: [
          { label: 'a', task: '$3^x = 20$', solution: '$x = \\frac{\\ln 20}{\\ln 3} \\approx 2{,}73$', answer: 2.73 },
          { label: 'b', task: '$5^x = 100$', solution: '$x = \\frac{\\ln 100}{\\ln 5} \\approx 2{,}86$', answer: 2.86 },
          { label: 'c', task: '$1{,}05^x = 2$', solution: '$x = \\frac{\\ln 2}{\\ln 1{,}05} \\approx 14{,}21$', answer: 14.21 },
          { label: 'd', task: '$e^x = 50$', solution: '$x = \\ln 50 \\approx 3{,}91$', answer: 3.91 },
        ],
        hints: ['Ta ln på begge sider', 'Bruk $x = \\frac{\\ln b}{\\ln a}$'],
        solution: 'a) 2,73, b) 2,86, c) 14,21, d) 3,91',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ØKONOMISK ANVENDELSE ==========
    {
      id: 'bi-okonomi-3-4-text-okonomi',
      type: 'text',
      content: `## Anvendelse i økonomi

**Eksempel: Doblingstid**

Hvor lang tid tar det før en investering dobles med $r\\%$ årlig rente?

Vi løser $K_0 \\cdot (1+r)^t = 2K_0$:
$$(1+r)^t = 2$$
$$t = \\frac{\\ln 2}{\\ln(1+r)}$$

**Tommelfingerregel:** Doblingstid $\\approx \\frac{72}{r}$ (der $r$ er rentesatsen i prosent)`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'bi-okonomi-3-4-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Du investerer 50 000 kr med 6% årlig avkastning. Hvor lang tid tar det før investeringen er verdt 80 000 kr?',
      solution: `**Løsning:**

Vi løser: $50\\,000 \\cdot 1{,}06^t = 80\\,000$

$$1{,}06^t = \\frac{80\\,000}{50\\,000} = 1{,}6$$

$$t = \\frac{\\ln 1{,}6}{\\ln 1{,}06} = \\frac{0{,}470}{0{,}058} \\approx 8{,}1 \\text{ år}$$

Det tar ca. 8 år og 1 måned.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bi-okonomi-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs de økonomiske problemene',
        subTasks: [
          { label: 'a', task: 'Hvor lang tid tar det å doble en investering med 5% årlig rente?', solution: '$t = \\frac{\\ln 2}{\\ln 1{,}05} \\approx 14{,}2$ år', answer: 14.2 },
          { label: 'b', task: 'En investering på 100 000 kr skal vokse til 150 000 kr med 8% årlig avkastning. Hvor lang tid tar det?', solution: '$t = \\frac{\\ln 1{,}5}{\\ln 1{,}08} \\approx 5{,}3$ år', answer: 5.3 },
          { label: 'c', task: 'En bil faller 12% i verdi per år. Hvor lang tid tar det før verdien er halvert?', solution: '$t = \\frac{\\ln 0{,}5}{\\ln 0{,}88} \\approx 5{,}4$ år', answer: 5.4 },
          { label: 'd', task: 'Du vil ha 1 000 000 kr om 20 år. Med 7% årlig avkastning, hvor mye må du investere nå?', solution: '$K_0 = \\frac{1\\,000\\,000}{1{,}07^{20}} \\approx 258\\,419$ kr', answer: 258419 },
        ],
        hints: ['Bruk $t = \\frac{\\ln(\\text{vekstforhold})}{\\ln(\\text{vekstfaktor})}$'],
        solution: 'a) 14,2 år, b) 5,3 år, c) 5,4 år, d) 258 419 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SKIFTE AV GRUNNTALL ==========
    {
      id: 'bi-okonomi-3-4-theorem-skifte',
      type: 'theorem',
      title: 'Skifte av grunntall',
      content: `Vi kan skrive om logaritmer fra ett grunntall til et annet:

$$\\log_a x = \\frac{\\ln x}{\\ln a} = \\frac{\\log x}{\\log a}$$

Dette er nyttig når kalkulatoren bare har $\\ln$ og $\\log$.`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bi-okonomi-3-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut med kalkulator',
        subTasks: [
          { label: 'a', task: '$\\log_2 50$', solution: '$\\frac{\\ln 50}{\\ln 2} \\approx 5{,}64$', answer: 5.64 },
          { label: 'b', task: '$\\log_3 100$', solution: '$\\frac{\\ln 100}{\\ln 3} \\approx 4{,}19$', answer: 4.19 },
          { label: 'c', task: '$\\log_5 1000$', solution: '$\\frac{\\ln 1000}{\\ln 5} \\approx 4{,}29$', answer: 4.29 },
        ],
        hints: ['Bruk $\\log_a x = \\frac{\\ln x}{\\ln a}$'],
        solution: 'a) 5,64, b) 4,19, c) 4,29',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bi-okonomi-3-4-summary',
      type: 'theorem',
      title: 'Oppsummering: Logaritmer',
      content: `| Begrep/Regel | Formel |
|--------------|--------|
| Definisjon | $\\log_a x = y \\Leftrightarrow a^y = x$ |
| Briggsk logaritme | $\\log x = \\log_{10} x$ |
| Naturlig logaritme | $\\ln x = \\log_e x$ |
| Produktregel | $\\log(xy) = \\log x + \\log y$ |
| Kvotientregel | $\\log(x/y) = \\log x - \\log y$ |
| Potensregel | $\\log(x^n) = n \\cdot \\log x$ |
| Løse $a^x = b$ | $x = \\frac{\\ln b}{\\ln a}$ |
| Skifte grunntall | $\\log_a x = \\frac{\\ln x}{\\ln a}$ |`,
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: 'bi-okonomi-3-4-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: 'bi-okonomi-3-4-rep-1',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-3-4-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut uten kalkulator',
            subTasks: [
              { label: 'a', task: '$\\log_2 64$', answer: 6 },
              { label: 'b', task: '$\\log 0{,}01$', answer: -2 },
              { label: 'c', task: '$\\ln e^{-3}$', answer: -3 },
              { label: 'd', task: '$\\log_4 1$', answer: 0 },
            ],
            solution: 'a) 6, b) -2, c) -3, d) 0',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: 'bi-okonomi-3-4-rep-2',
          type: 'exercise',
          exercise: {
            id: 'bi-okonomi-3-4-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Løs likningene',
            subTasks: [
              { label: 'a', task: '$4^x = 50$', answer: 2.82 },
              { label: 'b', task: '$1{,}08^x = 3$', answer: 14.27 },
              { label: 'c', task: 'Hvor lang tid tar det å tredoble en investering med 10% årlig avkastning?', answer: 11.53 },
            ],
            solution: 'a) 2,82, b) 14,27, c) 11,53 år',
            hideInlineSolution: true,
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_4_1: TextbookChapter = {
  id: 'bi-okonomi-4-1',
  courseId: 'bi-okonomi',
  chapterNumber: '4.1',
  title: 'Renter og renteberegning',
  description: 'Lær om enkel rente, rentes rente, effektiv rente og periodiske renteberegninger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne fremtidsverdi med ulike rentemodeller',
    'forstå forskjellen mellom nominell og effektiv rente',
  ],
  content: [
    // Introduksjon
    {
      id: 'bi-4-1-intro',
      type: 'text',
      content: `## Renter og renteberegning

Renter er prisen på å låne penger – eller avkastningen du får når du sparer. Som økonom er det essensielt å forstå hvordan renter beregnes, ettersom de påvirker alt fra personlig økonomi til bedriftsinvesteringer og makroøkonomisk politikk.

I dette kapittelet lærer du:
- Forskjellen mellom enkel rente og rentes rente
- Hvordan beregne fremtidsverdi
- Hva nominell og effektiv rente betyr
- Hvordan konvertere mellom ulike renteperioder`,
    },

    // Enkel rente
    {
      id: 'bi-4-1-enkel-rente',
      type: 'definition',
      title: 'Enkel rente',
      content: `Ved **enkel rente** beregnes renten kun av startkapitalen (ikke av opptjente renter).

$$K_n = K_0 \\cdot (1 + r \\cdot n)$$

der:
- $K_0$ = startkapital (investert beløp)
- $r$ = årlig rentesats (som desimaltall)
- $n$ = antall år
- $K_n$ = sluttverdi etter $n$ år

**Merk:** Enkel rente brukes sjelden i praksis, men er viktig å forstå som utgangspunkt.`,
    },

    {
      id: 'bi-4-1-example-enkel',
      type: 'example',
      title: 'Eksempel: Enkel rente',
      problem: `Du setter inn 10 000 kr i en sparekonto med 5% enkel rente. Hvor mye har du etter 3 år?`,
      solution: `**Gitt:**
- $K_0 = 10\\,000$ kr
- $r = 0{,}05$ (5%)
- $n = 3$ år

**Løsning:**
$$K_3 = K_0 \\cdot (1 + r \\cdot n) = 10\\,000 \\cdot (1 + 0{,}05 \\cdot 3)$$
$$K_3 = 10\\,000 \\cdot 1{,}15 = 11\\,500 \\text{ kr}$$

Du har tjent $1\\,500$ kr i renter (500 kr per år).`,
    },

    // Rentes rente
    {
      id: 'bi-4-1-rentes-rente-intro',
      type: 'text',
      content: `## Rentes rente (sammensatt rente)

I virkeligheten bruker nesten alle banker og finansinstitusjoner **rentes rente**. Dette betyr at renten legges til kapitalen, og neste periode beregnes renten av den nye, større summen.

Dette gir en eksponentiell vekst som over tid gir betydelig høyere avkastning enn enkel rente.`,
    },

    {
      id: 'bi-4-1-rentes-rente-def',
      type: 'definition',
      title: 'Rentes rente',
      content: `Ved **rentes rente** beregnes renten av kapitalen inkludert tidligere opptjente renter.

$$K_n = K_0 \\cdot (1 + r)^n$$

der:
- $K_0$ = startkapital
- $r$ = årlig rentesats (som desimaltall)
- $n$ = antall år
- $K_n$ = sluttverdi etter $n$ år

Faktoren $(1 + r)$ kalles **vekstfaktoren** eller **rentefaktoren**.`,
    },

    {
      id: 'bi-4-1-example-rentes-rente',
      type: 'example',
      title: 'Eksempel: Rentes rente',
      problem: `Du setter inn 10 000 kr i en sparekonto med 5% årlig rente (rentes rente). Hvor mye har du etter 3 år?`,
      solution: `**Gitt:**
- $K_0 = 10\\,000$ kr
- $r = 0{,}05$ (5%)
- $n = 3$ år

**Løsning:**
$$K_3 = K_0 \\cdot (1 + r)^n = 10\\,000 \\cdot (1{,}05)^3$$
$$K_3 = 10\\,000 \\cdot 1{,}157625 = 11\\,576{,}25 \\text{ kr}$$

Du har tjent $1\\,576{,}25$ kr i renter.

**Sammenligning med enkel rente:**
- Enkel rente: 11 500 kr
- Rentes rente: 11 576,25 kr
- Forskjell: 76,25 kr ekstra

Forskjellen vokser eksponentielt med tiden!`,
    },

    {
      id: 'bi-4-1-note-albert',
      type: 'note',
      title: 'Albert Einsteins (påståtte) sitat',
      content: `"Rentes rente er verdens åttende underverk. Den som forstår det, tjener det; den som ikke gjør det, betaler det."

Uansett om Einstein sa dette eller ikke, illustrerer det kraften i eksponentiell vekst over tid.`,
    },

    // Oppgave 1
    {
      id: 'bi-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende renteberegninger',
        subTasks: [
          { label: 'a', task: 'Du setter inn 50 000 kr til 4% årlig rente. Hva er beløpet etter 5 år?', solution: '$K_5 = 50\\,000 \\cdot (1{,}04)^5 = 50\\,000 \\cdot 1{,}2167 = 60\\,833$ kr', answer: 60833 },
          { label: 'b', task: 'Du låner 100 000 kr til 6% årlig rente. Hva skylder du etter 2 år hvis du ikke betaler noe?', solution: '$K_2 = 100\\,000 \\cdot (1{,}06)^2 = 100\\,000 \\cdot 1{,}1236 = 112\\,360$ kr', answer: 112360 },
          { label: 'c', task: 'En investering på 25 000 kr har vokst til 32 000 kr på 4 år. Hva var den årlige renten?', solution: '$32\\,000 = 25\\,000 \\cdot (1+r)^4 \\Rightarrow (1+r)^4 = 1{,}28 \\Rightarrow 1+r = 1{,}28^{0{,}25} = 1{,}0635 \\Rightarrow r = 6{,}35\\%$' },
        ],
        hints: ['Bruk formelen $K_n = K_0 \\cdot (1+r)^n$', 'For å finne renten, løs likningen for $r$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Periodisk rente
    {
      id: 'bi-4-1-periodisk-intro',
      type: 'text',
      content: `## Periodisk renteberegning

I praksis beregnes ofte renter flere ganger per år – månedlig, kvartalsvis, eller til og med daglig. Da bruker vi **periodisk rente**.`,
    },

    {
      id: 'bi-4-1-periodisk-def',
      type: 'definition',
      title: 'Periodisk renteberegning',
      content: `Når renten beregnes $m$ ganger per år:

$$K_n = K_0 \\cdot \\left(1 + \\frac{r}{m}\\right)^{m \\cdot n}$$

der:
- $r$ = **nominell årlig rente** (oppgitt rente)
- $m$ = antall renteperioder per år
- $n$ = antall år

**Vanlige verdier for $m$:**
- Årlig: $m = 1$
- Halvårlig: $m = 2$
- Kvartalsvis: $m = 4$
- Månedlig: $m = 12$
- Daglig: $m = 365$`,
    },

    {
      id: 'bi-4-1-example-periodisk',
      type: 'example',
      title: 'Eksempel: Månedlig rente',
      problem: `Du setter inn 100 000 kr på en konto med 6% nominell årlig rente, der renten beregnes månedlig. Hvor mye har du etter 2 år?`,
      solution: `**Gitt:**
- $K_0 = 100\\,000$ kr
- $r = 0{,}06$ (6% nominell)
- $m = 12$ (månedlig)
- $n = 2$ år

**Løsning:**
$$K_2 = 100\\,000 \\cdot \\left(1 + \\frac{0{,}06}{12}\\right)^{12 \\cdot 2}$$
$$K_2 = 100\\,000 \\cdot (1{,}005)^{24}$$
$$K_2 = 100\\,000 \\cdot 1{,}12716 = 112\\,716 \\text{ kr}$$

**Sammenligning:** Med årlig renteberegning ville du fått:
$$100\\,000 \\cdot (1{,}06)^2 = 112\\,360 \\text{ kr}$$

Månedlig renteberegning gir 356 kr mer!`,
    },

    // Effektiv rente
    {
      id: 'bi-4-1-effektiv-intro',
      type: 'text',
      content: `## Effektiv rente

Når renter beregnes oftere enn årlig, blir den faktiske årlige avkastningen høyere enn den nominelle renten. Den **effektive renten** viser hva du faktisk tjener (eller betaler) per år.`,
    },

    {
      id: 'bi-4-1-effektiv-def',
      type: 'definition',
      title: 'Effektiv årlig rente',
      content: `Den **effektive årlige renten** (EAR) er:

$$r_{eff} = \\left(1 + \\frac{r_{nom}}{m}\\right)^m - 1$$

der:
- $r_{nom}$ = nominell årlig rente
- $m$ = antall renteperioder per år

Den effektive renten er alltid **høyere** enn den nominelle renten (når $m > 1$).`,
    },

    {
      id: 'bi-4-1-example-effektiv',
      type: 'example',
      title: 'Eksempel: Beregne effektiv rente',
      problem: `En bank tilbyr 6% nominell årlig rente med månedlig renteberegning. Hva er den effektive årlige renten?`,
      solution: `**Gitt:**
- $r_{nom} = 0{,}06$ (6%)
- $m = 12$ (månedlig)

**Løsning:**
$$r_{eff} = \\left(1 + \\frac{0{,}06}{12}\\right)^{12} - 1$$
$$r_{eff} = (1{,}005)^{12} - 1$$
$$r_{eff} = 1{,}06168 - 1 = 0{,}06168$$

Den effektive årlige renten er **6,168%**.

Dette betyr at du faktisk tjener 6,168% per år, ikke 6%.`,
    },

    {
      id: 'bi-4-1-tip-sammenligning',
      type: 'tip',
      title: 'Sammenligning av lånetilbud',
      content: `Når du sammenligner lånetilbud eller spareprodukter, bruk alltid den **effektive renten** for å få et rettferdig sammenligningsgrunnlag.

Banker er pålagt å oppgi effektiv rente, men pass på at alle gebyrer er inkludert!`,
    },

    // Oppgave 2
    {
      id: 'bi-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Periodisk rente og effektiv rente',
        subTasks: [
          { label: 'a', task: 'En bank tilbyr 8% nominell årlig rente med kvartalsvis renteberegning. Finn den effektive årlige renten.', solution: '$r_{eff} = (1 + 0{,}08/4)^4 - 1 = (1{,}02)^4 - 1 = 1{,}0824 - 1 = 8{,}24\\%$' },
          { label: 'b', task: 'Du setter inn 200 000 kr til 5% nominell rente med månedlig renteberegning. Hva har du etter 3 år?', solution: '$K_3 = 200\\,000 \\cdot (1 + 0{,}05/12)^{36} = 200\\,000 \\cdot 1{,}1614 = 232\\,284$ kr', answer: 232284 },
          { label: 'c', task: 'Bank A tilbyr 5,9% med årlig renteberegning. Bank B tilbyr 5,8% med månedlig renteberegning. Hvilken bank gir best avkastning?', solution: 'Bank A: $r_{eff} = 5{,}9\\%$. Bank B: $r_{eff} = (1 + 0{,}058/12)^{12} - 1 = 5{,}96\\%$. Bank B er best med 5,96% effektiv rente.' },
        ],
        hints: ['Bruk formelen for effektiv rente', 'Sammenlign alltid effektive renter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Kontinuerlig rente (valgfritt)
    {
      id: 'bi-4-1-kontinuerlig',
      type: 'collapsible',
      title: 'Kontinuerlig renteberegning (for spesielt interesserte)',
      content: [
        {
          id: 'bi-4-1-kontinuerlig-text',
          type: 'text',
          content: `Når antall renteperioder $m \\to \\infty$, får vi **kontinuerlig renteberegning**:

$$K_n = K_0 \\cdot e^{r \\cdot n}$$

der $e \\approx 2{,}71828$ er Eulers tall.

Dette brukes i avansert finansteori og derivatprising.`,
        },
      ],
    },

    // Vekstfaktor og prosentvis endring
    {
      id: 'bi-4-1-vekstfaktor',
      type: 'text',
      content: `## Vekstfaktor og prosentvis endring

I økonomi er det nyttig å tenke på renter som **vekstfaktorer**.`,
    },

    {
      id: 'bi-4-1-vekstfaktor-def',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `**Vekstfaktoren** $V$ viser forholdet mellom ny og gammel verdi:

$$V = 1 + r$$

der $r$ er rentesatsen (som desimaltall).

**Eksempler:**
- 5% økning: $V = 1{,}05$
- 3% nedgang: $V = 0{,}97$
- Dobling: $V = 2{,}00$ (100% økning)
- Halvering: $V = 0{,}50$ (50% nedgang)

**Sammenhengen:**
$$\\text{Prosentvis endring} = (V - 1) \\cdot 100\\%$$`,
    },

    {
      id: 'bi-4-1-example-vekstfaktor',
      type: 'example',
      title: 'Eksempel: Flere vekstperioder',
      problem: `En aksje stiger 10% det første året, faller 5% det andre året, og stiger 15% det tredje året. Hva er den totale prosentvise endringen?`,
      solution: `**Vekstfaktorer:**
- År 1: $V_1 = 1{,}10$
- År 2: $V_2 = 0{,}95$
- År 3: $V_3 = 1{,}15$

**Total vekstfaktor:**
$$V_{total} = V_1 \\cdot V_2 \\cdot V_3 = 1{,}10 \\cdot 0{,}95 \\cdot 1{,}15 = 1{,}20175$$

**Total prosentvis endring:**
$$(1{,}20175 - 1) \\cdot 100\\% = 20{,}175\\%$$

Aksjen har steget 20,175% totalt over de tre årene.`,
    },

    // Oppgave 3
    {
      id: 'bi-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vekstfaktorer',
        subTasks: [
          { label: 'a', task: 'Hva er vekstfaktoren for en 12% økning?', solution: '$V = 1 + 0{,}12 = 1{,}12$' },
          { label: 'b', task: 'Hva er vekstfaktoren for en 8% nedgang?', solution: '$V = 1 - 0{,}08 = 0{,}92$' },
          { label: 'c', task: 'En pris øker med 20% og deretter med 25%. Hva er den totale prosentvise økningen?', solution: '$V_{total} = 1{,}20 \\cdot 1{,}25 = 1{,}50$. Total økning: 50%' },
          { label: 'd', task: 'BNP vokser med 3% per år. Hvor mange år tar det før BNP er doblet?', solution: '$2 = (1{,}03)^n \\Rightarrow n = \\frac{\\ln 2}{\\ln 1{,}03} = \\frac{0{,}693}{0{,}0296} \\approx 23{,}4$ år' },
        ],
        hints: ['Vekstfaktor = 1 + prosentvis endring som desimaltall', 'For å finne antall perioder, bruk logaritmer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Tommelfingerregler
    {
      id: 'bi-4-1-tommelfingerregler',
      type: 'theorem',
      title: '72-regelen',
      content: `**72-regelen** er en tommelfingerregel for å estimere doblingstid:

$$\\text{Doblingstid} \\approx \\frac{72}{r \\cdot 100}$$

der $r$ er rentesatsen som prosent.

**Eksempler:**
- 6% rente: Doblingstid ≈ 72/6 = 12 år
- 8% rente: Doblingstid ≈ 72/8 = 9 år
- 12% rente: Doblingstid ≈ 72/12 = 6 år

Tilsvarende for halvering ved nedgang.`,
    },

    // Flere oppgaver
    {
      id: 'bi-4-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver',
        subTasks: [
          { label: 'a', task: 'Du vil ha 500 000 kr om 10 år. Hvor mye må du sette inn i dag hvis renten er 4% årlig?', solution: '$K_0 = \\frac{500\\,000}{(1{,}04)^{10}} = \\frac{500\\,000}{1{,}4802} = 337\\,833$ kr', answer: 337833 },
          { label: 'b', task: 'Et billån på 300 000 kr har 7% nominell rente med månedlig renteberegning. Hva er den effektive årlige renten?', solution: '$r_{eff} = (1 + 0{,}07/12)^{12} - 1 = (1{,}00583)^{12} - 1 = 7{,}23\\%$' },
          { label: 'c', task: 'Bruk 72-regelen: Omtrent hvor lang tid tar det å doble en investering med 9% årlig rente?', solution: 'Doblingstid ≈ 72/9 = 8 år' },
        ],
        hints: ['For å finne startkapital, løs $K_n = K_0 \\cdot (1+r)^n$ for $K_0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Realrente
    {
      id: 'bi-4-1-realrente',
      type: 'text',
      content: `## Realrente og inflasjon

Den **nominelle renten** tar ikke hensyn til inflasjon. For å finne den faktiske kjøpekraftsøkningen, må vi beregne **realrenten**.`,
    },

    {
      id: 'bi-4-1-realrente-def',
      type: 'definition',
      title: 'Realrente (Fishers ligning)',
      content: `**Realrenten** viser den faktiske økningen i kjøpekraft:

$$r_{real} = \\frac{1 + r_{nom}}{1 + \\pi} - 1$$

der:
- $r_{nom}$ = nominell rente
- $\\pi$ = inflasjonsrate

**Forenklet tilnærming** (når rentene er små):
$$r_{real} \\approx r_{nom} - \\pi$$`,
    },

    {
      id: 'bi-4-1-example-realrente',
      type: 'example',
      title: 'Eksempel: Realrente',
      problem: `Sparekontoen din gir 4% nominell rente. Inflasjonen er 2,5%. Hva er realrenten?`,
      solution: `**Eksakt beregning:**
$$r_{real} = \\frac{1{,}04}{1{,}025} - 1 = 1{,}0146 - 1 = 1{,}46\\%$$

**Forenklet:**
$$r_{real} \\approx 4\\% - 2{,}5\\% = 1{,}5\\%$$

Din kjøpekraft øker med ca. 1,5% per år.`,
    },

    // Oppgave 5
    {
      id: 'bi-4-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-4-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Realrente og inflasjon',
        subTasks: [
          { label: 'a', task: 'Nominell rente er 6% og inflasjon er 3%. Beregn realrenten eksakt.', solution: '$r_{real} = \\frac{1{,}06}{1{,}03} - 1 = 1{,}0291 - 1 = 2{,}91\\%$' },
          { label: 'b', task: 'Du ønsker en realrente på 2%. Inflasjonen er 4%. Hvilken nominell rente trenger du?', solution: '$1 + r_{nom} = (1 + 0{,}02)(1 + 0{,}04) = 1{,}0608$. Du trenger 6,08% nominell rente.' },
          { label: 'c', task: 'En obligasjon gir 5% nominell rente over 10 år. Inflasjonen er 2,5% per år. Hva er 100 000 kr verdt i dag kjøpekraft etter 10 år?', solution: 'Realrente ≈ 2,5%. Realverdi = $100\\,000 \\cdot (1{,}025)^{10} = 128\\,008$ kr i dagens kjøpekraft.' },
        ],
        hints: ['Bruk Fishers ligning for eksakt beregning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'bi-4-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Viktige formler:**

| Konsept | Formel |
|---------|--------|
| Rentes rente | $K_n = K_0 \\cdot (1 + r)^n$ |
| Periodisk rente | $K_n = K_0 \\cdot (1 + r/m)^{mn}$ |
| Effektiv rente | $r_{eff} = (1 + r_{nom}/m)^m - 1$ |
| Realrente | $r_{real} = \\frac{1 + r_{nom}}{1 + \\pi} - 1$ |
| 72-regelen | Doblingstid ≈ 72 / (rente i %) |

**Husk:**
- Effektiv rente > nominell rente (når m > 1)
- Bruk alltid effektiv rente for sammenligning
- Realrente = nominell rente justert for inflasjon`,
    },

    // Repetisjonsoppgaver
    {
      id: 'bi-4-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-4-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Repetisjonsoppgaver',
        subTasks: [
          { label: 'a', task: 'Beregn sluttverdien av 80 000 kr etter 5 år med 3,5% årlig rente.', solution: '$K_5 = 80\\,000 \\cdot (1{,}035)^5 = 95\\,073$ kr', answer: 95073 },
          { label: 'b', task: 'Hvor mye må du sette inn for å ha 1 000 000 kr om 20 år med 5% rente?', solution: '$K_0 = \\frac{1\\,000\\,000}{(1{,}05)^{20}} = 376\\,889$ kr', answer: 376889 },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bi-4-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske anvendelser',
        subTasks: [
          { label: 'a', task: 'Et kredittkort har 20% nominell årlig rente med daglig renteberegning. Hva er den effektive årlige renten?', solution: '$r_{eff} = (1 + 0{,}20/365)^{365} - 1 = 22{,}13\\%$' },
          { label: 'b', task: 'Du investerer i et fond som har gitt 8% årlig avkastning historisk. Hvor lang tid tar det å tredoble investeringen?', solution: '$3 = (1{,}08)^n \\Rightarrow n = \\frac{\\ln 3}{\\ln 1{,}08} = 14{,}3$ år' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'bi-4-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: 'Du har valget mellom 9,5% rente med halvårlig renteberegning eller 9,4% med månedlig renteberegning. Hvilken er best?', solution: '9,5% halvårlig: $r_{eff} = (1{,}0475)^2 - 1 = 9{,}73\\%$. 9,4% månedlig: $r_{eff} = (1{,}00783)^{12} - 1 = 9{,}82\\%$. Månedlig er best.' },
          { label: 'b', task: 'Sentralbanken setter opp renten fra 2% til 3%. Med hvor mange prosent øker rentebelastningen på et lån (relativt)?', solution: 'Relativ økning: $(3 - 2) / 2 = 50\\%$ økning i rentebelastning' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_4_2: TextbookChapter = {
  id: 'bi-okonomi-4-2',
  courseId: 'bi-okonomi',
  chapterNumber: '4.2',
  title: 'Nåverdi og fremtidsverdi',
  description: 'Lær om tidsverdien av penger, diskontering og beregning av nåverdi.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne nåverdi og fremtidsverdi',
    'forstå tidsverdien av penger',
  ],
  content: [
    {
      id: 'bi-4-2-intro',
      type: 'text',
      content: `## Nåverdi og fremtidsverdi

Et av de viktigste konseptene i finans er at penger har en **tidsverdi**. 1000 kr i dag er mer verdt enn 1000 kr om ett år, fordi du kan investere pengene og tjene renter.

Dette kapittelet handler om å:
- Beregne hva fremtidige beløp er verdt i dag (**nåverdi**)
- Beregne hva et beløp i dag blir til i fremtiden (**fremtidsverdi**)
- Sammenligne kontantstrømmer på ulike tidspunkter`,
    },

    {
      id: 'bi-4-2-tidslinje',
      type: 'note',
      title: 'Tidslinje',
      content: `I finansmatematikk er det nyttig å tegne en **tidslinje** for å visualisere kontantstrømmer:

\`\`\`
     Nåverdi          Fremtidsverdi
        ↓                   ↓
    ─────┼───────────────────┼─────→ tid
         0                   n
\`\`\`

- Tidspunkt 0 = i dag (nåtid)
- Tidspunkt n = n perioder frem i tid`,
    },

    {
      id: 'bi-4-2-fremtidsverdi-def',
      type: 'definition',
      title: 'Fremtidsverdi (FV)',
      content: `**Fremtidsverdien** (Future Value, FV) er verdien av et beløp på et fremtidig tidspunkt:

$$FV = PV \\cdot (1 + r)^n$$

der:
- $PV$ = nåverdi (Present Value)
- $r$ = diskonteringsrente per periode
- $n$ = antall perioder
- $FV$ = fremtidsverdi`,
    },

    {
      id: 'bi-4-2-naaverdi-def',
      type: 'definition',
      title: 'Nåverdi (PV)',
      content: `**Nåverdien** (Present Value, PV) er dagens verdi av et fremtidig beløp:

$$PV = \\frac{FV}{(1 + r)^n}$$

Dette kalles også **diskontering** – vi "diskonterer" fremtidige beløp tilbake til i dag.

Faktoren $\\frac{1}{(1+r)^n}$ kalles **diskonteringsfaktoren**.`,
    },

    {
      id: 'bi-4-2-example-naaverdi',
      type: 'example',
      title: 'Eksempel: Nåverdi av enkeltbeløp',
      problem: `Du skal motta 100 000 kr om 5 år. Diskonteringsrenten er 6%. Hva er nåverdien av dette beløpet?`,
      solution: `**Gitt:**
- $FV = 100\\,000$ kr
- $r = 0{,}06$ (6%)
- $n = 5$ år

**Løsning:**
$$PV = \\frac{FV}{(1 + r)^n} = \\frac{100\\,000}{(1{,}06)^5}$$
$$PV = \\frac{100\\,000}{1{,}3382} = 74\\,726 \\text{ kr}$$

**Tolkning:** 100 000 kr om 5 år tilsvarer 74 726 kr i dag.

Med andre ord: Hvis du investerer 74 726 kr til 6% rente i dag, vil du ha 100 000 kr om 5 år.`,
    },

    {
      id: 'bi-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende nåverdi',
        subTasks: [
          { label: 'a', task: 'Finn nåverdien av 50 000 kr som mottas om 3 år. Renten er 5%.', solution: '$PV = \\frac{50\\,000}{(1{,}05)^3} = \\frac{50\\,000}{1{,}1576} = 43\\,192$ kr', answer: 43192 },
          { label: 'b', task: 'Finn nåverdien av 200 000 kr som mottas om 10 år. Renten er 8%.', solution: '$PV = \\frac{200\\,000}{(1{,}08)^{10}} = \\frac{200\\,000}{2{,}1589} = 92\\,640$ kr', answer: 92640 },
          { label: 'c', task: 'Hva er 1 000 000 kr verdt i dag hvis du mottar dem om 20 år med 4% rente?', solution: '$PV = \\frac{1\\,000\\,000}{(1{,}04)^{20}} = 456\\,387$ kr', answer: 456387 },
        ],
        hints: ['Bruk formelen $PV = FV / (1+r)^n$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-2-diskontering',
      type: 'text',
      content: `## Diskonteringsrenten

**Diskonteringsrenten** representerer alternativkostnaden ved å binde kapital. Den reflekterer:

- Risikofri rente (f.eks. statsobligasjoner)
- Risikopremie (kompensasjon for usikkerhet)
- Inflasjonsforventninger

Jo høyere diskonteringsrente, jo lavere nåverdi.`,
    },

    {
      id: 'bi-4-2-example-ulike-renter',
      type: 'example',
      title: 'Eksempel: Effekten av ulike diskonteringsrenter',
      problem: `Finn nåverdien av 100 000 kr om 10 år med henholdsvis 4%, 8% og 12% diskonteringsrente.`,
      solution: `**Med 4% rente:**
$$PV = \\frac{100\\,000}{(1{,}04)^{10}} = \\frac{100\\,000}{1{,}4802} = 67\\,556 \\text{ kr}$$

**Med 8% rente:**
$$PV = \\frac{100\\,000}{(1{,}08)^{10}} = \\frac{100\\,000}{2{,}1589} = 46\\,319 \\text{ kr}$$

**Med 12% rente:**
$$PV = \\frac{100\\,000}{(1{,}12)^{10}} = \\frac{100\\,000}{3{,}1058} = 32\\,197 \\text{ kr}$$

**Observasjon:** Høyere rente gir betydelig lavere nåverdi!`,
    },

    {
      id: 'bi-4-2-kontantstrom',
      type: 'text',
      content: `## Nåverdi av flere kontantstrømmer

Ofte har vi ikke bare ett enkelt beløp, men flere beløp på ulike tidspunkter. Da beregner vi nåverdien av hver kontantstrøm og summerer.`,
    },

    {
      id: 'bi-4-2-kontantstrom-def',
      type: 'definition',
      title: 'Nåverdi av kontantstrøm',
      content: `For en serie kontantstrømmer $C_1, C_2, ..., C_n$ på tidspunkt $1, 2, ..., n$:

$$PV = \\sum_{t=1}^{n} \\frac{C_t}{(1 + r)^t} = \\frac{C_1}{(1+r)^1} + \\frac{C_2}{(1+r)^2} + ... + \\frac{C_n}{(1+r)^n}$$`,
    },

    {
      id: 'bi-4-2-example-kontantstrom',
      type: 'example',
      title: 'Eksempel: Nåverdi av kontantstrøm',
      problem: `Et prosjekt gir følgende kontantstrøm:
- År 1: 30 000 kr
- År 2: 40 000 kr
- År 3: 50 000 kr

Finn nåverdien med 7% diskonteringsrente.`,
      solution: `**Beregning:**
$$PV = \\frac{30\\,000}{(1{,}07)^1} + \\frac{40\\,000}{(1{,}07)^2} + \\frac{50\\,000}{(1{,}07)^3}$$

$$PV = \\frac{30\\,000}{1{,}07} + \\frac{40\\,000}{1{,}1449} + \\frac{50\\,000}{1{,}2250}$$

$$PV = 28\\,037 + 34\\,938 + 40\\,816 = 103\\,791 \\text{ kr}$$

**Tolkning:** Den totale nåverdien av disse tre utbetalingene er 103 791 kr.`,
    },

    {
      id: 'bi-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nåverdi av kontantstrømmer',
        subTasks: [
          { label: 'a', task: 'Finn nåverdien av 20 000 kr per år i 3 år med 5% rente.', solution: '$PV = \\frac{20000}{1{,}05} + \\frac{20000}{1{,}1025} + \\frac{20000}{1{,}1576} = 19048 + 18141 + 17277 = 54\\,466$ kr' },
          { label: 'b', task: 'Et prosjekt gir 10 000 kr i år 1, 15 000 kr i år 2, og 25 000 kr i år 3. Renten er 6%. Finn nåverdien.', solution: '$PV = \\frac{10000}{1{,}06} + \\frac{15000}{1{,}1236} + \\frac{25000}{1{,}191} = 9434 + 13350 + 20991 = 43\\,775$ kr' },
        ],
        hints: ['Beregn nåverdien av hvert beløp separat, og summer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-2-netto-naaverdi',
      type: 'text',
      content: `## Netto nåverdi (NPV)

I investeringsanalyse trekker vi ofte fra den initiale investeringen for å finne **netto nåverdi** (Net Present Value, NPV).`,
    },

    {
      id: 'bi-4-2-npv-def',
      type: 'definition',
      title: 'Netto nåverdi (NPV)',
      content: `**Netto nåverdi** er nåverdien av alle kontantstrømmer minus den initiale investeringen:

$$NPV = -I_0 + \\sum_{t=1}^{n} \\frac{C_t}{(1 + r)^t}$$

der $I_0$ er den initiale investeringen (på tidspunkt 0).

**Beslutningsregel:**
- $NPV > 0$: Investeringen er lønnsom
- $NPV = 0$: Investeringen gir akkurat avkastningskravet
- $NPV < 0$: Investeringen er ulønnsom`,
    },

    {
      id: 'bi-4-2-example-npv',
      type: 'example',
      title: 'Eksempel: NPV-beregning',
      problem: `En maskin koster 100 000 kr og forventes å gi følgende kontantstrøm:
- År 1: 35 000 kr
- År 2: 40 000 kr
- År 3: 45 000 kr

Avkastningskravet er 10%. Bør du investere?`,
      solution: `**NPV-beregning:**
$$NPV = -100\\,000 + \\frac{35\\,000}{1{,}10} + \\frac{40\\,000}{1{,}21} + \\frac{45\\,000}{1{,}331}$$

$$NPV = -100\\,000 + 31\\,818 + 33\\,058 + 33\\,808$$

$$NPV = -100\\,000 + 98\\,684 = -1\\,316 \\text{ kr}$$

**Konklusjon:** NPV er negativ (-1 316 kr), så investeringen bør **ikke** gjennomføres med et avkastningskrav på 10%.`,
    },

    {
      id: 'bi-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'NPV-beregninger',
        subTasks: [
          { label: 'a', task: 'Investeringskostnad: 50 000 kr. Kontantstrøm: 20 000 kr/år i 3 år. Rente: 8%. Beregn NPV.', solution: '$NPV = -50000 + \\frac{20000}{1{,}08} + \\frac{20000}{1{,}1664} + \\frac{20000}{1{,}2597} = -50000 + 18519 + 17147 + 15877 = 1\\,543$ kr. Lønnsom!' },
          { label: 'b', task: 'Ved hvilken rente blir NPV i oppgave a) lik null?', solution: 'Dette er internrenten (IRR). Løs $-50000 + \\frac{20000}{(1+r)} + \\frac{20000}{(1+r)^2} + \\frac{20000}{(1+r)^3} = 0$. IRR ≈ 9,7%.' },
        ],
        hints: ['NPV = 0 når renten = internrenten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Viktige formler:**

| Konsept | Formel |
|---------|--------|
| Fremtidsverdi | $FV = PV \\cdot (1 + r)^n$ |
| Nåverdi | $PV = \\frac{FV}{(1 + r)^n}$ |
| Nåverdi av kontantstrøm | $PV = \\sum_{t=1}^{n} \\frac{C_t}{(1+r)^t}$ |
| Netto nåverdi | $NPV = -I_0 + \\sum_{t=1}^{n} \\frac{C_t}{(1+r)^t}$ |

**Nøkkelpunkter:**
- Penger har tidsverdi – 1 kr i dag er mer verdt enn 1 kr i fremtiden
- Høyere diskonteringsrente → lavere nåverdi
- NPV > 0 betyr lønnsom investering`,
    },

    {
      id: 'bi-4-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: 'Du kan velge mellom 80 000 kr nå eller 100 000 kr om 3 år. Hva er break-even renten?', solution: '$80000 = \\frac{100000}{(1+r)^3} \\Rightarrow (1+r)^3 = 1{,}25 \\Rightarrow r = 7{,}72\\%$. Ved renter over 7,72% velger du 80 000 nå.' },
          { label: 'b', task: 'Et prosjekt koster 200 000 kr og gir 60 000 kr/år i 5 år. Finn NPV med 12% rente.', solution: '$NPV = -200000 + 60000 \\cdot \\frac{1 - (1{,}12)^{-5}}{0{,}12} = -200000 + 60000 \\cdot 3{,}6048 = 16\\,288$ kr' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_4_3: TextbookChapter = {
  id: 'bi-okonomi-4-3',
  courseId: 'bi-okonomi',
  chapterNumber: '4.3',
  title: 'Annuiteter',
  description: 'Lær om annuiteter, periodiske innbetalinger og utbetalinger.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beregne nåverdi og sluttverdi av annuiteter',
    'bruke annuitetsformler i praktiske situasjoner',
  ],
  content: [
    {
      id: 'bi-4-3-intro',
      type: 'text',
      content: `## Annuiteter

En **annuitet** er en serie like store betalinger som skjer med jevne mellomrom. Annuiteter er svært vanlige i finans:

- Månedlige lønnsutbetalinger
- Leieinntekter
- Pensjonssparing
- Avdrag på lån
- Forsikringspremier`,
    },

    {
      id: 'bi-4-3-typer',
      type: 'note',
      title: 'Typer annuiteter',
      content: `**Ordinær annuitet (etterskudd):**
Betalinger skjer på slutten av hver periode.
Eksempel: Lønn utbetales på slutten av måneden.

**Annuitet forskudd:**
Betalinger skjer på begynnelsen av hver periode.
Eksempel: Husleie betales i begynnelsen av måneden.`,
    },

    {
      id: 'bi-4-3-naaverdi-def',
      type: 'definition',
      title: 'Nåverdi av ordinær annuitet',
      content: `For en annuitet med beløp $A$ per periode i $n$ perioder:

$$PV = A \\cdot \\frac{1 - (1 + r)^{-n}}{r}$$

Faktoren $\\frac{1 - (1 + r)^{-n}}{r}$ kalles **annuitetsfaktoren** eller **nåverdifaktoren**.`,
    },

    {
      id: 'bi-4-3-sluttverdi-def',
      type: 'definition',
      title: 'Sluttverdi av ordinær annuitet',
      content: `Sluttverdien (fremtidsverdien) av en annuitet:

$$FV = A \\cdot \\frac{(1 + r)^n - 1}{r}$$

Faktoren $\\frac{(1 + r)^n - 1}{r}$ kalles **sluttverdifaktoren**.`,
    },

    {
      id: 'bi-4-3-example-sparing',
      type: 'example',
      title: 'Eksempel: Månedlig sparing',
      problem: `Du sparer 2 000 kr i måneden i 10 år. Renten er 6% årlig (0,5% per måned). Hvor mye har du til slutt?`,
      solution: `**Gitt:**
- $A = 2\\,000$ kr/måned
- $r = 0{,}005$ (0,5% per måned)
- $n = 120$ måneder (10 år)

**Løsning:**
$$FV = A \\cdot \\frac{(1 + r)^n - 1}{r} = 2\\,000 \\cdot \\frac{(1{,}005)^{120} - 1}{0{,}005}$$

$$FV = 2\\,000 \\cdot \\frac{1{,}8194 - 1}{0{,}005} = 2\\,000 \\cdot \\frac{0{,}8194}{0{,}005}$$

$$FV = 2\\,000 \\cdot 163{,}88 = 327\\,760 \\text{ kr}$$

Du har spart inn totalt $2\\,000 \\cdot 120 = 240\\,000$ kr, men har 327 760 kr takket være rentes rente!`,
    },

    {
      id: 'bi-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sluttverdi av annuitet',
        subTasks: [
          { label: 'a', task: 'Du sparer 5 000 kr/år i 20 år til 4% rente. Hva er sluttverdien?', solution: '$FV = 5000 \\cdot \\frac{(1{,}04)^{20} - 1}{0{,}04} = 5000 \\cdot 29{,}78 = 148\\,900$ kr' },
          { label: 'b', task: 'Du sparer 1 000 kr/måned i 5 år til 6% årlig rente (0,5%/mnd). Hva er sluttverdien?', solution: '$FV = 1000 \\cdot \\frac{(1{,}005)^{60} - 1}{0{,}005} = 1000 \\cdot 69{,}77 = 69\\,770$ kr' },
        ],
        hints: ['Bruk formelen for sluttverdi av annuitet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-3-example-pensjon',
      type: 'example',
      title: 'Eksempel: Pensjonssparing',
      problem: `Du ønsker å ha 3 000 000 kr når du går av med pensjon om 30 år. Renten er 5% årlig. Hvor mye må du spare per år?`,
      solution: `**Vi løser for $A$:**
$$FV = A \\cdot \\frac{(1 + r)^n - 1}{r}$$

$$A = \\frac{FV \\cdot r}{(1 + r)^n - 1}$$

**Beregning:**
$$A = \\frac{3\\,000\\,000 \\cdot 0{,}05}{(1{,}05)^{30} - 1} = \\frac{150\\,000}{4{,}3219 - 1}$$

$$A = \\frac{150\\,000}{3{,}3219} = 45\\,153 \\text{ kr/år}$$

Du må spare ca. 45 000 kr per år, eller ca. 3 760 kr per måned.`,
    },

    {
      id: 'bi-4-3-naaverdi-annuitet',
      type: 'text',
      content: `## Nåverdi av annuitet

Nåverdien er nyttig når vi skal vurdere verdien av fremtidige utbetalinger i dag.`,
    },

    {
      id: 'bi-4-3-example-naaverdi',
      type: 'example',
      title: 'Eksempel: Nåverdi av leieinntekter',
      problem: `Du vurderer å kjøpe en utleiebolig som gir 10 000 kr i månedlig leieinntekt i 15 år. Avkastningskravet er 6% årlig (0,5% per måned). Hva er nåverdien av leieinntektene?`,
      solution: `**Gitt:**
- $A = 10\\,000$ kr/måned
- $r = 0{,}005$ (0,5% per måned)
- $n = 180$ måneder (15 år)

**Løsning:**
$$PV = A \\cdot \\frac{1 - (1 + r)^{-n}}{r} = 10\\,000 \\cdot \\frac{1 - (1{,}005)^{-180}}{0{,}005}$$

$$PV = 10\\,000 \\cdot \\frac{1 - 0{,}4074}{0{,}005} = 10\\,000 \\cdot \\frac{0{,}5926}{0{,}005}$$

$$PV = 10\\,000 \\cdot 118{,}52 = 1\\,185\\,200 \\text{ kr}$$

Nåverdien av leieinntektene er ca. 1,19 millioner kr.`,
    },

    {
      id: 'bi-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nåverdi av annuitet',
        subTasks: [
          { label: 'a', task: 'Finn nåverdien av 50 000 kr/år i 10 år med 8% rente.', solution: '$PV = 50000 \\cdot \\frac{1 - (1{,}08)^{-10}}{0{,}08} = 50000 \\cdot 6{,}71 = 335\\,500$ kr' },
          { label: 'b', task: 'En pensjon utbetaler 25 000 kr/måned i 20 år. Renten er 4% årlig. Hva er nåverdien?', solution: 'Månedlig rente = 4%/12 = 0,333%. $PV = 25000 \\cdot \\frac{1 - (1{,}00333)^{-240}}{0{,}00333} = 25000 \\cdot 165{,}02 = 4\\,125\\,500$ kr' },
        ],
        hints: ['Husk å bruke riktig periodisk rente'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-3-forskudd',
      type: 'text',
      content: `## Annuitet forskudd

Ved annuitet forskudd skjer betalingene i begynnelsen av hver periode. Formlene justeres ved å multiplisere med $(1 + r)$.`,
    },

    {
      id: 'bi-4-3-forskudd-formler',
      type: 'definition',
      title: 'Annuitet forskudd',
      content: `**Nåverdi av annuitet forskudd:**
$$PV_{forskudd} = A \\cdot \\frac{1 - (1 + r)^{-n}}{r} \\cdot (1 + r)$$

**Sluttverdi av annuitet forskudd:**
$$FV_{forskudd} = A \\cdot \\frac{(1 + r)^n - 1}{r} \\cdot (1 + r)$$

Annuitet forskudd gir alltid høyere verdi enn ordinær annuitet (fordi pengene investeres én periode tidligere).`,
    },

    {
      id: 'bi-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Annuitet forskudd vs. etterskudd',
        subTasks: [
          { label: 'a', task: 'Sammenlign sluttverdien av 1 000 kr/måned i 5 år til 6% (0,5%/mnd) for både etterskudd og forskudd.', solution: 'Etterskudd: $FV = 1000 \\cdot 69{,}77 = 69\\,770$ kr. Forskudd: $FV = 69\\,770 \\cdot 1{,}005 = 70\\,119$ kr. Forskjell: 349 kr.' },
          { label: 'b', task: 'Husleie på 15 000 kr/måned betales forskuddsvis i 3 år. Hva er nåverdien med 5% årlig rente?', solution: '$PV = 15000 \\cdot \\frac{1 - (1{,}00417)^{-36}}{0{,}00417} \\cdot 1{,}00417 = 15000 \\cdot 33{,}28 \\cdot 1{,}00417 = 501\\,300$ kr' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-3-terminbelop',
      type: 'text',
      content: `## Beregning av terminbeløp

Ofte vet vi hvor mye vi ønsker å oppnå (sluttverdi) eller hvor mye vi kan låne (nåverdi), og må finne terminbeløpet.`,
    },

    {
      id: 'bi-4-3-terminbelop-formler',
      type: 'definition',
      title: 'Beregning av terminbeløp',
      content: `**Fra ønsket sluttverdi:**
$$A = \\frac{FV \\cdot r}{(1 + r)^n - 1}$$

**Fra kjent nåverdi (f.eks. lån):**
$$A = \\frac{PV \\cdot r}{1 - (1 + r)^{-n}}$$

Den siste formelen brukes til å beregne terminbeløp på lån!`,
    },

    {
      id: 'bi-4-3-example-laan',
      type: 'example',
      title: 'Eksempel: Månedlig terminbeløp på lån',
      problem: `Du tar opp et boliglån på 3 000 000 kr med 4% årlig rente og 25 års nedbetalingstid. Hva blir det månedlige terminbeløpet?`,
      solution: `**Gitt:**
- $PV = 3\\,000\\,000$ kr
- Årlig rente = 4%, månedlig rente $r = 0{,}04/12 = 0{,}00333$
- $n = 25 \\cdot 12 = 300$ måneder

**Løsning:**
$$A = \\frac{PV \\cdot r}{1 - (1 + r)^{-n}} = \\frac{3\\,000\\,000 \\cdot 0{,}00333}{1 - (1{,}00333)^{-300}}$$

$$A = \\frac{10\\,000}{1 - 0{,}3689} = \\frac{10\\,000}{0{,}6311} = 15\\,847 \\text{ kr/måned}$$

Det månedlige terminbeløpet er ca. 15 850 kr.`,
    },

    {
      id: 'bi-4-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Terminbeløp',
        subTasks: [
          { label: 'a', task: 'Billån på 400 000 kr, 5% rente, 5 års nedbetaling. Finn månedlig terminbeløp.', solution: '$A = \\frac{400000 \\cdot 0{,}00417}{1 - (1{,}00417)^{-60}} = \\frac{1668}{0{,}2209} = 7\\,549$ kr/mnd' },
          { label: 'b', task: 'Du vil spare opp 500 000 kr på 15 år med 5% rente. Hvor mye må du spare årlig?', solution: '$A = \\frac{500000 \\cdot 0{,}05}{(1{,}05)^{15} - 1} = \\frac{25000}{1{,}0789} = 23\\,173$ kr/år' },
        ],
        hints: ['Husk å konvertere til riktig periode (årlig vs. månedlig)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Annuitetsformler (ordinær annuitet):**

| Konsept | Formel |
|---------|--------|
| Nåverdi | $PV = A \\cdot \\frac{1 - (1+r)^{-n}}{r}$ |
| Sluttverdi | $FV = A \\cdot \\frac{(1+r)^n - 1}{r}$ |
| Terminbeløp fra PV | $A = \\frac{PV \\cdot r}{1 - (1+r)^{-n}}$ |
| Terminbeløp fra FV | $A = \\frac{FV \\cdot r}{(1+r)^n - 1}$ |

**For annuitet forskudd:** Multipliser med $(1 + r)$`,
    },

    {
      id: 'bi-4-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: 'Du starter å spare 3 000 kr/mnd fra du er 25 til du er 67 (42 år). Med 6% årlig rente, hvor mye har du ved pensjon?', solution: '$FV = 3000 \\cdot \\frac{(1{,}005)^{504} - 1}{0{,}005} = 3000 \\cdot 2442{,}8 = 7\\,328\\,400$ kr' },
          { label: 'b', task: 'Hvor mye kan du ta ut månedlig i 25 år med pensjonsbeholdningen fra a) og 4% rente?', solution: '$A = \\frac{7328400 \\cdot 0{,}00333}{1 - (1{,}00333)^{-300}} = \\frac{24427}{0{,}6311} = 38\\,708$ kr/mnd' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_4_4: TextbookChapter = {
  id: 'bi-okonomi-4-4',
  courseId: 'bi-okonomi',
  chapterNumber: '4.4',
  title: 'Lån og nedbetaling',
  description: 'Lær om annuitetslån, serielån og nedbetalingsplaner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'sette opp nedbetalingsplaner',
    'sammenligne ulike lånetyper',
  ],
  content: [
    {
      id: 'bi-4-4-intro',
      type: 'text',
      content: `## Lån og nedbetaling

De fleste store kjøp finansieres med lån – bolig, bil, utdanning. Det finnes ulike lånetyper med forskjellige nedbetalingsstrukturer:

- **Annuitetslån**: Like store terminbeløp
- **Serielån**: Like store avdrag
- **Avdragsfrie lån**: Kun rentebetaling i en periode`,
    },

    {
      id: 'bi-4-4-terminologi',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**Terminbeløp** = Avdrag + Renter

- **Avdrag**: Den delen som reduserer gjelden
- **Renter**: Kostnaden for å låne
- **Restgjeld**: Gjenstående lånebeløp
- **Løpetid**: Total nedbetalingstid
- **Termin**: Betalingsperiode (måned, kvartal, år)`,
    },

    {
      id: 'bi-4-4-annuitet',
      type: 'text',
      content: `## Annuitetslån

Ved annuitetslån er **terminbeløpet konstant** gjennom hele løpetiden. I starten går mesteparten til renter, men etter hvert går mer og mer til avdrag.`,
    },

    {
      id: 'bi-4-4-annuitet-formel',
      type: 'definition',
      title: 'Annuitetslån',
      content: `**Terminbeløp (månedlig):**
$$A = \\frac{L \\cdot r}{1 - (1 + r)^{-n}}$$

der:
- $L$ = lånebeløp
- $r$ = månedlig rente
- $n$ = antall terminer

**For hver termin:**
- Rentedel = Restgjeld × $r$
- Avdrag = Terminbeløp − Rentedel
- Ny restgjeld = Gammel restgjeld − Avdrag`,
    },

    {
      id: 'bi-4-4-example-annuitet',
      type: 'example',
      title: 'Eksempel: Annuitetslån',
      problem: `Du tar opp et lån på 500 000 kr med 6% årlig rente og 5 års løpetid. Sett opp nedbetalingsplanen for de første 3 terminene (årlige terminer).`,
      solution: `**Beregn terminbeløpet:**
$$A = \\frac{500\\,000 \\cdot 0{,}06}{1 - (1{,}06)^{-5}} = \\frac{30\\,000}{0{,}2527} = 118\\,698 \\text{ kr}$$

**Nedbetalingsplan:**

| Termin | Restgjeld start | Renter | Avdrag | Terminbeløp | Restgjeld slutt |
|--------|-----------------|--------|--------|-------------|-----------------|
| 1 | 500 000 | 30 000 | 88 698 | 118 698 | 411 302 |
| 2 | 411 302 | 24 678 | 94 020 | 118 698 | 317 282 |
| 3 | 317 282 | 19 037 | 99 661 | 118 698 | 217 621 |

**Observasjon:** Terminbeløpet er konstant, men avdragene øker og rentene synker.`,
    },

    {
      id: 'bi-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Annuitetslån',
        subTasks: [
          { label: 'a', task: 'Lån: 200 000 kr, 8% årlig rente, 4 år. Beregn årlig terminbeløp.', solution: '$A = \\frac{200000 \\cdot 0{,}08}{1 - (1{,}08)^{-4}} = \\frac{16000}{0{,}2645} = 60\\,482$ kr' },
          { label: 'b', task: 'For lånet i a): Hvor mye betales i renter første år?', solution: 'Renter år 1 = $200\\,000 \\cdot 0{,}08 = 16\\,000$ kr' },
          { label: 'c', task: 'For lånet i a): Hva er restgjelden etter 1. termin?', solution: 'Avdrag = $60\\,482 - 16\\,000 = 44\\,482$ kr. Restgjeld = $200\\,000 - 44\\,482 = 155\\,518$ kr' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-4-serielaan',
      type: 'text',
      content: `## Serielån

Ved serielån er **avdraget konstant** gjennom hele løpetiden. Terminbeløpet starter høyt og synker gradvis etter hvert som rentene avtar.`,
    },

    {
      id: 'bi-4-4-serielaan-formel',
      type: 'definition',
      title: 'Serielån',
      content: `**Avdrag per termin:**
$$\\text{Avdrag} = \\frac{L}{n}$$

**Terminbeløp i termin $t$:**
$$A_t = \\text{Avdrag} + \\text{Renter}_t$$

der rentene beregnes av restgjelden:
$$\\text{Renter}_t = (L - (t-1) \\cdot \\text{Avdrag}) \\cdot r$$`,
    },

    {
      id: 'bi-4-4-example-serie',
      type: 'example',
      title: 'Eksempel: Serielån',
      problem: `Du tar opp et lån på 500 000 kr med 6% årlig rente og 5 års løpetid (serielån). Sett opp nedbetalingsplanen for de første 3 terminene.`,
      solution: `**Beregn avdraget:**
$$\\text{Avdrag} = \\frac{500\\,000}{5} = 100\\,000 \\text{ kr/år}$$

**Nedbetalingsplan:**

| Termin | Restgjeld start | Renter | Avdrag | Terminbeløp | Restgjeld slutt |
|--------|-----------------|--------|--------|-------------|-----------------|
| 1 | 500 000 | 30 000 | 100 000 | 130 000 | 400 000 |
| 2 | 400 000 | 24 000 | 100 000 | 124 000 | 300 000 |
| 3 | 300 000 | 18 000 | 100 000 | 118 000 | 200 000 |

**Observasjon:** Avdragene er konstante, men terminbeløpet synker.`,
    },

    {
      id: 'bi-4-4-sammenligning',
      type: 'text',
      content: `## Sammenligning: Annuitetslån vs. Serielån`,
    },

    {
      id: 'bi-4-4-sammenligning-tabell',
      type: 'note',
      title: 'Annuitetslån vs. Serielån',
      content: `| Egenskap | Annuitetslån | Serielån |
|----------|--------------|----------|
| Terminbeløp | Konstant | Synkende |
| Avdrag | Økende | Konstant |
| Total rentekostnad | Høyere | Lavere |
| Likviditet i starten | Bedre | Mer krevende |
| Vanligst brukt | Boliglån | Bedriftslån |

**Tommelfingerregel:** Serielån gir lavere total rentekostnad, men krever høyere betalingsevne i starten.`,
    },

    {
      id: 'bi-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenligning av lånetyper',
        subTasks: [
          { label: 'a', task: 'Lån: 1 000 000 kr, 5% rente, 10 år. Beregn første terminbeløp for annuitets- og serielån.', solution: 'Annuitet: $A = \\frac{1000000 \\cdot 0{,}05}{1 - (1{,}05)^{-10}} = 129\\,505$ kr. Serielån: $100\\,000 + 50\\,000 = 150\\,000$ kr.' },
          { label: 'b', task: 'Samme lån: Beregn siste terminbeløp for begge låntyper.', solution: 'Annuitet: 129 505 kr (uendret). Serielån: $100\\,000 + 5\\,000 = 105\\,000$ kr.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-4-restgjeld',
      type: 'text',
      content: `## Beregning av restgjeld

For å finne restgjelden på et annuitetslån etter $k$ terminer, kan vi bruke:`,
    },

    {
      id: 'bi-4-4-restgjeld-formel',
      type: 'definition',
      title: 'Restgjeld etter k terminer (annuitetslån)',
      content: `$$R_k = L \\cdot \\frac{(1+r)^n - (1+r)^k}{(1+r)^n - 1}$$

Alternativt kan restgjelden beregnes som nåverdien av gjenværende terminbeløp:

$$R_k = A \\cdot \\frac{1 - (1+r)^{-(n-k)}}{r}$$`,
    },

    {
      id: 'bi-4-4-example-restgjeld',
      type: 'example',
      title: 'Eksempel: Restgjeld',
      problem: `Et lån på 2 000 000 kr med 4% rente og 20 års løpetid. Hva er restgjelden etter 10 år?`,
      solution: `**Beregn først terminbeløpet:**
$$A = \\frac{2\\,000\\,000 \\cdot 0{,}04}{1 - (1{,}04)^{-20}} = \\frac{80\\,000}{0{,}5434} = 147\\,214 \\text{ kr}$$

**Restgjeld etter 10 år (10 terminer gjenstår):**
$$R_{10} = 147\\,214 \\cdot \\frac{1 - (1{,}04)^{-10}}{0{,}04}$$
$$R_{10} = 147\\,214 \\cdot 8{,}1109 = 1\\,194\\,050 \\text{ kr}$$

Etter 10 år har du fortsatt ca. 1,19 millioner i gjeld.`,
    },

    {
      id: 'bi-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Restgjeld og innfrielse',
        subTasks: [
          { label: 'a', task: 'Boliglån: 3 000 000 kr, 3,5% rente, 25 år. Hva er restgjelden etter 5 år?', solution: 'Månedlig terminbeløp: 15 006 kr. Restgjeld etter 60 mnd: ca. 2 627 000 kr.' },
          { label: 'b', task: 'Du ønsker å betale ekstra 100 000 kr etter 5 år. Hvor mye kortere blir løpetiden?', solution: 'Med ny restgjeld 2 527 000 kr og samme terminbeløp: ny løpetid ≈ 222 mnd = 18,5 år (vs. opprinnelig 20 år). Sparer 1,5 år.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-4-effektiv-rente',
      type: 'text',
      content: `## Effektiv rente på lån

Den effektive renten inkluderer alle kostnader knyttet til lånet – ikke bare renten, men også gebyrer og provisjoner. Banker er pålagt å oppgi effektiv rente.`,
    },

    {
      id: 'bi-4-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Annuitetslån:**
- Konstant terminbeløp
- Avdrag øker, renter synker
- Mest vanlig for boliglån

**Serielån:**
- Konstant avdrag
- Terminbeløp synker
- Lavere total rentekostnad

**Viktige formler:**
- Terminbeløp: $A = \\frac{L \\cdot r}{1 - (1+r)^{-n}}$
- Restgjeld: $R_k = A \\cdot \\frac{1 - (1+r)^{-(n-k)}}{r}$`,
    },

    {
      id: 'bi-4-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-4-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktiske lånescenarioer',
        subTasks: [
          { label: 'a', task: 'Billån: 350 000 kr, 7% rente, 5 år med månedlige terminer. Finn månedlig terminbeløp og total rentekostnad.', solution: 'Terminbeløp: $350000 \\cdot 0{,}00583 / (1 - 1{,}00583^{-60}) = 6\\,931$ kr. Total: $60 \\cdot 6931 = 415\\,860$ kr. Rentekostnad: 65 860 kr.' },
          { label: 'b', task: 'Du refinansierer boliglånet ditt fra 4,5% til 3,5% rente. Lånet er 2 500 000 kr med 20 år igjen. Hvor mye sparer du per måned?', solution: 'Ved 4,5%: 15 827 kr/mnd. Ved 3,5%: 14 493 kr/mnd. Besparelse: 1 334 kr/mnd.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_4_5: TextbookChapter = {
  id: 'bi-okonomi-4-5',
  courseId: 'bi-okonomi',
  chapterNumber: '4.5',
  title: 'Investeringsanalyse',
  description: 'Lær om NPV, IRR og andre metoder for å vurdere investeringer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne og tolke NPV og IRR',
    'vurdere lønnsomheten av investeringer',
  ],
  content: [
    {
      id: 'bi-4-5-intro',
      type: 'text',
      content: `## Investeringsanalyse

Når en bedrift vurderer å investere i et prosjekt, må den analysere om investeringen er lønnsom. De viktigste metodene er:

- **Netto nåverdi (NPV)** – Net Present Value
- **Internrente (IRR)** – Internal Rate of Return
- **Tilbakebetalingstid** – Payback Period

Disse metodene hjelper med å sammenligne ulike investeringsalternativer og ta gode beslutninger.`,
    },

    {
      id: 'bi-4-5-npv-def',
      type: 'definition',
      title: 'Netto nåverdi (NPV)',
      content: `**NPV** er summen av nåverdiene av alle kontantstrømmer, inkludert den initiale investeringen:

$$NPV = -I_0 + \\sum_{t=1}^{n} \\frac{CF_t}{(1 + r)^t}$$

der:
- $I_0$ = initial investering (tidspunkt 0)
- $CF_t$ = kontantstrøm i periode $t$
- $r$ = avkastningskravet (diskonteringsrenten)
- $n$ = prosjektets levetid

**Beslutningsregel:**
- $NPV > 0$: Investeringen skaper verdi → **Aksepter**
- $NPV < 0$: Investeringen ødelegger verdi → **Avvis**
- $NPV = 0$: Investeringen gir akkurat avkastningskravet`,
    },

    {
      id: 'bi-4-5-example-npv',
      type: 'example',
      title: 'Eksempel: NPV-analyse',
      problem: `En bedrift vurderer å kjøpe en maskin for 500 000 kr. Maskinen forventes å gi følgende årlige kontantstrømmer:
- År 1: 150 000 kr
- År 2: 200 000 kr
- År 3: 200 000 kr
- År 4: 150 000 kr

Avkastningskravet er 10%. Bør bedriften investere?`,
      solution: `**NPV-beregning:**
$$NPV = -500\\,000 + \\frac{150\\,000}{1{,}10} + \\frac{200\\,000}{1{,}21} + \\frac{200\\,000}{1{,}331} + \\frac{150\\,000}{1{,}4641}$$

$$NPV = -500\\,000 + 136\\,364 + 165\\,289 + 150\\,263 + 102\\,452$$

$$NPV = -500\\,000 + 554\\,368 = 54\\,368 \\text{ kr}$$

**Konklusjon:** NPV er positiv (54 368 kr), så investeringen bør **gjennomføres**.

Investeringen skaper 54 368 kr i verdi utover avkastningskravet på 10%.`,
    },

    {
      id: 'bi-4-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-4-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'NPV-beregninger',
        subTasks: [
          { label: 'a', task: 'Investering: 300 000 kr. Kontantstrøm: 100 000 kr/år i 4 år. Avkastningskrav: 8%. Beregn NPV.', solution: '$NPV = -300000 + 100000 \\cdot 3{,}312 = 31\\,200$ kr. Lønnsomt!' },
          { label: 'b', task: 'Investering: 1 000 000 kr. Kontantstrøm: År 1: 400 000, År 2: 500 000, År 3: 300 000. Rente: 12%. NPV?', solution: '$NPV = -1000000 + \\frac{400000}{1{,}12} + \\frac{500000}{1{,}2544} + \\frac{300000}{1{,}4049} = -1000000 + 357143 + 398597 + 213509 = -30\\,751$ kr. Ulønnsomt!' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-5-irr',
      type: 'text',
      content: `## Internrente (IRR)

**Internrenten** er den diskonteringsrenten som gir NPV = 0. Den representerer prosjektets faktiske avkastning.`,
    },

    {
      id: 'bi-4-5-irr-def',
      type: 'definition',
      title: 'Internrente (IRR)',
      content: `IRR er renten $r$ som løser:

$$NPV = -I_0 + \\sum_{t=1}^{n} \\frac{CF_t}{(1 + r)^t} = 0$$

**Beslutningsregel:**
- $IRR > \\text{avkastningskravet}$: **Aksepter**
- $IRR < \\text{avkastningskravet}$: **Avvis**

**Merk:** IRR må ofte beregnes numerisk (prøving og feiling, eller kalkulator/Excel).`,
    },

    {
      id: 'bi-4-5-example-irr',
      type: 'example',
      title: 'Eksempel: IRR-beregning',
      problem: `En investering på 100 000 kr gir 60 000 kr etter 1 år og 60 000 kr etter 2 år. Finn internrenten.`,
      solution: `**Vi løser for $r$ der NPV = 0:**
$$0 = -100\\,000 + \\frac{60\\,000}{1+r} + \\frac{60\\,000}{(1+r)^2}$$

**Prøving:**
- $r = 10\\%$: NPV = $-100000 + 54545 + 49587 = 4\\,132$ (for høy)
- $r = 15\\%$: NPV = $-100000 + 52174 + 45369 = -2\\,457$ (for lav)
- $r = 13\\%$: NPV = $-100000 + 53097 + 46989 = 86$ (nesten!)

**IRR ≈ 13,1%**

Hvis avkastningskravet er 10%, bør investeringen aksepteres (IRR > 10%).`,
    },

    {
      id: 'bi-4-5-tip-excel',
      type: 'tip',
      title: 'Beregning i Excel',
      content: `I Excel brukes funksjonen **=IR(kontantstrømmer)** for å beregne IRR.

Eksempel: Hvis kontantstrømmene er i cellene A1:A5 med initial investering som negativt tall:
\`=IR(A1:A5)\`

For NPV: **=NNV(rente; kontantstrømmer) + initial_investering**`,
    },

    {
      id: 'bi-4-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-4-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'IRR-beregninger',
        subTasks: [
          { label: 'a', task: 'Investering: 200 000 kr. Kontantstrøm: 250 000 kr etter 2 år. Finn IRR.', solution: '$200000 = \\frac{250000}{(1+r)^2} \\Rightarrow (1+r)^2 = 1{,}25 \\Rightarrow r = 11{,}8\\%$' },
          { label: 'b', task: 'Ved hvilken rente er NPV = 0 for: -100 000 kr nå, +40 000 kr/år i 3 år?', solution: 'Prøving gir IRR ≈ 9,7%.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-5-tilbakebetaling',
      type: 'text',
      content: `## Tilbakebetalingstid

**Tilbakebetalingstiden** er tiden det tar før den kumulative kontantstrømmen blir positiv – altså før investeringen er "tjent inn".`,
    },

    {
      id: 'bi-4-5-tilbake-def',
      type: 'definition',
      title: 'Tilbakebetalingstid',
      content: `**Enkel tilbakebetalingstid:**
$$\\text{Tilbakebetalingstid} = \\frac{I_0}{\\text{Årlig kontantstrøm}}$$
(Gjelder kun ved like årlige kontantstrømmer)

**Diskontert tilbakebetalingstid:**
Tar hensyn til tidsverdien av penger ved å diskontere kontantstrømmene først.

**Ulempe:** Metoden ignorerer kontantstrømmer etter tilbakebetalingstidspunktet.`,
    },

    {
      id: 'bi-4-5-example-payback',
      type: 'example',
      title: 'Eksempel: Tilbakebetalingstid',
      problem: `En investering på 400 000 kr gir 120 000 kr årlig. Hva er tilbakebetalingstiden?`,
      solution: `**Enkel tilbakebetalingstid:**
$$\\text{Tilbakebetalingstid} = \\frac{400\\,000}{120\\,000} = 3{,}33 \\text{ år}$$

Det tar ca. 3 år og 4 måneder å tjene inn investeringen.`,
    },

    {
      id: 'bi-4-5-sammenligning',
      type: 'note',
      title: 'Sammenligning av metoder',
      content: `| Metode | Fordeler | Ulemper |
|--------|----------|---------|
| NPV | Tar hensyn til tidsverdien av penger, gir verdiskapning i kroner | Krever valg av diskonteringsrente |
| IRR | Lett å forstå (prosent), ingen renteantagelse | Kan gi flere løsninger, problemer med gjensidig utelukkende prosjekter |
| Tilbakebetalingstid | Enkel, fokus på likviditet | Ignorerer kontantstrømmer etter tilbakebetaling, ignorerer tidsverdi |

**Anbefaling:** Bruk NPV som hovedregel, men IRR og tilbakebetalingstid som supplerende informasjon.`,
    },

    {
      id: 'bi-4-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-4-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenligning av prosjekter',
        subTasks: [
          { label: 'a', task: 'Prosjekt A: Invest 500 000, CF 150 000/år i 5 år. Prosjekt B: Invest 500 000, CF 100 000/år i 8 år. Avkastningskrav 10%. Hvilket er best basert på NPV?', solution: 'A: NPV = $-500000 + 150000 \\cdot 3{,}791 = 68\\,650$ kr. B: NPV = $-500000 + 100000 \\cdot 5{,}335 = 33\\,500$ kr. A er best.' },
          { label: 'b', task: 'Beregn tilbakebetalingstiden for begge prosjektene.', solution: 'A: 500000/150000 = 3,33 år. B: 500000/100000 = 5 år. A er også best her.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'bi-4-5-sensitivitet',
      type: 'text',
      content: `## Sensitivitetsanalyse

I praksis er fremtidige kontantstrømmer usikre. **Sensitivitetsanalyse** undersøker hvordan NPV endres når forutsetningene endres:

- Hva skjer hvis kontantstrømmene blir 10% lavere?
- Hva skjer hvis renten øker med 2 prosentpoeng?
- Hva er break-even for salgsvolum?`,
    },

    {
      id: 'bi-4-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Netto nåverdi (NPV):**
$$NPV = -I_0 + \\sum_{t=1}^{n} \\frac{CF_t}{(1+r)^t}$$
- NPV > 0: Aksepter

**Internrente (IRR):**
- Renten der NPV = 0
- IRR > avkastningskrav: Aksepter

**Tilbakebetalingstid:**
- Enkel: $I_0 / \\text{årlig CF}$
- Ignorerer tidsverdi

**Husk:** NPV er den teoretisk beste metoden!`,
    },

    {
      id: 'bi-4-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-4-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Helhetlig investeringsanalyse',
        subTasks: [
          { label: 'a', task: 'En ny produksjonslinje koster 2 000 000 kr og gir 500 000 kr/år i 6 år. Avkastningskrav: 8%. Beregn NPV, IRR og tilbakebetalingstid.', solution: 'NPV: $-2000000 + 500000 \\cdot 4{,}623 = 311\\,500$ kr. Tilbakebetalingstid: 4 år. IRR: ca. 13%.' },
          { label: 'b', task: 'Hva må den årlige kontantstrømmen minst være for at prosjektet skal være lønnsomt?', solution: 'Ved NPV = 0: $A = \\frac{2000000}{4{,}623} = 432\\,700$ kr/år' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_5_1: TextbookChapter = {
  id: 'bi-okonomi-5-1',
  courseId: 'bi-okonomi',
  chapterNumber: '5.1',
  title: 'Gjennomsnittlig og momentan vekstfart',
  description: 'Gjennomsnittlig vekstfart, sekanter, tangenter og grenseverdibegrepet.',
  estimatedMinutes: 45,
  content: [
    {
      id: 'bi-5-1-intro',
      type: 'text',
      content: `I økonomiske sammenhenger er vi ofte interessert i **hvor raskt** noe endrer seg. Hvor fort stiger kostnadene når produksjonen øker? Hvor raskt vokser en investering? I dette kapittelet lærer vi om **vekstfart** - et begrep som leder oss til derivasjon.`,
    },
    {
      id: 'bi-5-1-def-gj-vekst',
      type: 'definition',
      title: 'Gjennomsnittlig vekstfart',
      content: `For en funksjon $f(x)$ er den **gjennomsnittlige vekstfarten** fra $x = a$ til $x = b$ gitt ved:

$$\\text{Gjennomsnittlig vekstfart} = \\frac{f(b) - f(a)}{b - a}$$

Dette er **stigningstallet til sekanten** mellom punktene $(a, f(a))$ og $(b, f(b))$.`,
    },
    {
      id: 'bi-5-1-ex1',
      type: 'example',
      title: 'Kostnadsvekst',
      problem: 'En bedrift har kostnadsfunksjon $K(x) = 0{,}1x^2 + 10x + 500$ der $x$ er antall enheter. Finn gjennomsnittlig kostnadsvekst fra $x = 50$ til $x = 100$.',
      solution: `Vi beregner $K(50)$ og $K(100)$:

$K(50) = 0{,}1 \\cdot 50^2 + 10 \\cdot 50 + 500 = 250 + 500 + 500 = 1250$

$K(100) = 0{,}1 \\cdot 100^2 + 10 \\cdot 100 + 500 = 1000 + 1000 + 500 = 2500$

Gjennomsnittlig vekstfart:
$$\\frac{K(100) - K(50)}{100 - 50} = \\frac{2500 - 1250}{50} = \\frac{1250}{50} = 25$$

**Tolkning:** Kostnadene øker i gjennomsnitt med 25 kr per enhet når produksjonen går fra 50 til 100 enheter.`,
    },
    {
      id: 'bi-5-1-text2',
      type: 'text',
      content: `Gjennomsnittlig vekstfart gir et overordnet bilde, men forteller ikke hva som skjer i et **bestemt punkt**. For å finne vekstfarten akkurat når $x = 50$, trenger vi **momentan vekstfart**.`,
    },
    {
      id: 'bi-5-1-def-mom-vekst',
      type: 'definition',
      title: 'Momentan vekstfart (den deriverte)',
      content: `Den **momentane vekstfarten** til $f$ i punktet $x = a$ er definert som grenseverdien:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

Dette kalles **den deriverte** av $f$ i $x = a$, og er **stigningstallet til tangenten** i dette punktet.`,
    },
    {
      id: 'bi-5-1-note-tangent',
      type: 'note',
      title: 'Sekant og tangent',
      content: `- **Sekanten** er en rett linje gjennom to punkter på grafen
- **Tangenten** er en rett linje som berører grafen i ett punkt
- Når de to punktene på sekanten nærmer seg hverandre, nærmer sekanten seg tangenten`,
    },
    {
      id: 'bi-5-1-ex2',
      type: 'example',
      title: 'Finne momentan vekstfart fra definisjonen',
      problem: 'Finn $f\'(2)$ for $f(x) = x^2$ ved å bruke definisjonen.',
      solution: `Vi setter inn i definisjonen:

$$f'(2) = \\lim_{h \\to 0} \\frac{f(2 + h) - f(2)}{h} = \\lim_{h \\to 0} \\frac{(2+h)^2 - 4}{h}$$

Vi utvider $(2+h)^2 = 4 + 4h + h^2$:

$$= \\lim_{h \\to 0} \\frac{4 + 4h + h^2 - 4}{h} = \\lim_{h \\to 0} \\frac{4h + h^2}{h} = \\lim_{h \\to 0} \\frac{h(4 + h)}{h}$$

$$= \\lim_{h \\to 0} (4 + h) = 4$$

Altså er $f'(2) = 4$. Tangentens stigningstall i $x = 2$ er 4.`,
    },
    {
      id: 'bi-5-1-tip',
      type: 'tip',
      title: 'Økonomisk tolkning',
      content: `I økonomi har den deriverte viktige tolkninger:
- $K'(x)$ = **grensekostnad** (kostnad for én enhet til)
- $I'(x)$ = **grenseinntekt** (inntekt fra én enhet til)
- $O'(x)$ = **grenseoverskudd** (økning i overskudd per enhet)`,
    },
    {
      id: 'bi-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En investering har verdi $V(t) = 10000 \\cdot 1{,}05^t$ kr etter $t$ år.',
        subTasks: [
          { label: 'a', task: 'Finn gjennomsnittlig vekstfart fra $t = 0$ til $t = 5$.', answer: 552.56 },
          { label: 'b', task: 'Finn gjennomsnittlig vekstfart fra $t = 5$ til $t = 10$.', answer: 705.35 },
          { label: 'c', task: 'Hvorfor er vekstfarten større i del b)?', solution: 'Eksponentiell vekst gir økende vekstfart over tid.' },
        ],
        hints: ['Bruk formelen for gjennomsnittlig vekstfart', 'Beregn $V(0)$, $V(5)$ og $V(10)$ først'],
      },
    },
    {
      id: 'bi-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift har kostnadsfunksjon $K(x) = 2x^2 + 50x + 1000$.',
        subTasks: [
          { label: 'a', task: 'Finn gjennomsnittlig kostnadsvekst fra $x = 10$ til $x = 20$.', answer: 110 },
          { label: 'b', task: 'Bruk definisjonen til å finne $K\'(10)$.', answer: 90 },
          { label: 'c', task: 'Hva forteller $K\'(10)$ oss økonomisk?', solution: 'Grensekostnaden ved 10 enheter er 90 kr. Det koster ca. 90 kr å produsere den 11. enheten.' },
        ],
      },
    },
    {
      id: 'bi-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk definisjonen til å derivere $f(x) = 3x^2 - 2x + 1$.',
        solution: `$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$

$= \\lim_{h \\to 0} \\frac{3(x+h)^2 - 2(x+h) + 1 - (3x^2 - 2x + 1)}{h}$

$= \\lim_{h \\to 0} \\frac{3x^2 + 6xh + 3h^2 - 2x - 2h + 1 - 3x^2 + 2x - 1}{h}$

$= \\lim_{h \\to 0} \\frac{6xh + 3h^2 - 2h}{h} = \\lim_{h \\to 0} (6x + 3h - 2) = 6x - 2$`,
        hints: ['Utvid $(x+h)^2$ først', 'Forenkle og del på $h$'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_5_2: TextbookChapter = {
  id: 'bi-okonomi-5-2',
  courseId: 'bi-okonomi',
  chapterNumber: '5.2',
  title: 'Derivasjonsregler',
  description: 'Potensregelen, sumregelen, produktregelen, kvotientregelen og kjerneregelen.',
  estimatedMinutes: 60,
  content: [
    {
      id: 'bi-5-2-intro',
      type: 'text',
      content: `I stedet for å bruke definisjonen hver gang, bruker vi **derivasjonsregler** som gjør arbeidet mye enklere. Disse reglene er utledet fra definisjonen.`,
    },
    {
      id: 'bi-5-2-def-potens',
      type: 'definition',
      title: 'Potensregelen',
      content: `For $f(x) = x^n$ der $n$ er et reelt tall:
$$f'(x) = n \\cdot x^{n-1}$$`,
    },
    {
      id: 'bi-5-2-def-konst',
      type: 'definition',
      title: 'Konstantregelen',
      content: `For $f(x) = c$ (en konstant):
$$f'(x) = 0$$

For $f(x) = c \\cdot g(x)$:
$$f'(x) = c \\cdot g'(x)$$`,
    },
    {
      id: 'bi-5-2-def-sum',
      type: 'definition',
      title: 'Sumregelen',
      content: `For $f(x) = g(x) + h(x)$:
$$f'(x) = g'(x) + h'(x)$$`,
    },
    {
      id: 'bi-5-2-ex1',
      type: 'example',
      title: 'Derivere polynomer',
      problem: 'Deriver $f(x) = 3x^4 - 5x^2 + 2x - 7$.',
      solution: `Vi bruker potensregelen, konstantregelen og sumregelen:

$f'(x) = 3 \\cdot 4x^3 - 5 \\cdot 2x + 2 \\cdot 1 - 0 = 12x^3 - 10x + 2$`,
    },
    {
      id: 'bi-5-2-def-produkt',
      type: 'definition',
      title: 'Produktregelen',
      content: `For $f(x) = g(x) \\cdot h(x)$:
$$f'(x) = g'(x) \\cdot h(x) + g(x) \\cdot h'(x)$$

Huskeregel: «Derivert av første ganger andre pluss første ganger derivert av andre»`,
    },
    {
      id: 'bi-5-2-ex2',
      type: 'example',
      title: 'Produktregelen',
      problem: 'Deriver $f(x) = (2x+1)(x^2-3)$.',
      solution: `La $g(x) = 2x+1$ og $h(x) = x^2-3$.

$g'(x) = 2$ og $h'(x) = 2x$

$f'(x) = 2 \\cdot (x^2-3) + (2x+1) \\cdot 2x$
$= 2x^2 - 6 + 4x^2 + 2x = 6x^2 + 2x - 6$`,
    },
    {
      id: 'bi-5-2-def-kvotient',
      type: 'definition',
      title: 'Kvotientregelen',
      content: `For $f(x) = \\frac{g(x)}{h(x)}$:
$$f'(x) = \\frac{g'(x) \\cdot h(x) - g(x) \\cdot h'(x)}{(h(x))^2}$$`,
    },
    {
      id: 'bi-5-2-ex3',
      type: 'example',
      title: 'Gjennomsnittskostnad',
      problem: 'Kostnadsfunksjonen er $K(x) = x^2 + 100x + 2000$. Gjennomsnittskostnaden er $\\bar{K}(x) = \\frac{K(x)}{x}$. Finn $\\bar{K}\'(x)$.',
      solution: `$\\bar{K}(x) = \\frac{x^2 + 100x + 2000}{x}$

Med kvotientregelen der $g(x) = x^2 + 100x + 2000$ og $h(x) = x$:

$\\bar{K}'(x) = \\frac{(2x + 100) \\cdot x - (x^2 + 100x + 2000) \\cdot 1}{x^2}$

$= \\frac{2x^2 + 100x - x^2 - 100x - 2000}{x^2} = \\frac{x^2 - 2000}{x^2} = 1 - \\frac{2000}{x^2}$`,
    },
    {
      id: 'bi-5-2-def-kjerne',
      type: 'definition',
      title: 'Kjerneregelen',
      content: `For $f(x) = g(u(x))$ (sammensatt funksjon):
$$f'(x) = g'(u(x)) \\cdot u'(x)$$

Huskeregel: «Deriver ytterst, behold kjernen, gang med den deriverte av kjernen»`,
    },
    {
      id: 'bi-5-2-ex4',
      type: 'example',
      title: 'Kjerneregelen',
      problem: 'Deriver $f(x) = (3x^2 + 1)^5$.',
      solution: `Kjernen er $u = 3x^2 + 1$ og ytre funksjon er $g(u) = u^5$.

$g'(u) = 5u^4$ og $u'(x) = 6x$

$f'(x) = 5(3x^2 + 1)^4 \\cdot 6x = 30x(3x^2 + 1)^4$`,
    },
    {
      id: 'bi-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = 4x^3 - 2x^2 + 5x - 1$', expressionAnswer: '12x^2 - 4x + 5' },
          { label: 'b', task: '$g(x) = \\frac{1}{x^2} = x^{-2}$', expressionAnswer: '-2x^{-3}' },
          { label: 'c', task: '$h(x) = \\sqrt{x} = x^{1/2}$', expressionAnswer: '(1/2)x^{-1/2}' },
        ],
      },
    },
    {
      id: 'bi-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk produktregelen:',
        subTasks: [
          { label: 'a', task: '$f(x) = (x^2 + 1)(x - 3)$', solution: '$f\'(x) = 2x(x-3) + (x^2+1) \\cdot 1 = 3x^2 - 6x + 1$' },
          { label: 'b', task: '$g(x) = x^3(2x + 5)$', solution: '$g\'(x) = 3x^2(2x+5) + x^3 \\cdot 2 = 8x^3 + 15x^2$' },
        ],
      },
    },
    {
      id: 'bi-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk kvotientregelen:',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{x^2}{x+1}$', solution: '$f\'(x) = \\frac{2x(x+1) - x^2}{(x+1)^2} = \\frac{x^2 + 2x}{(x+1)^2}$' },
          { label: 'b', task: '$g(x) = \\frac{2x+3}{x-1}$', solution: '$g\'(x) = \\frac{2(x-1) - (2x+3)}{(x-1)^2} = \\frac{-5}{(x-1)^2}$' },
        ],
      },
    },
    {
      id: 'bi-5-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk kjerneregelen:',
        subTasks: [
          { label: 'a', task: '$f(x) = (2x-1)^4$', solution: '$f\'(x) = 4(2x-1)^3 \\cdot 2 = 8(2x-1)^3$' },
          { label: 'b', task: '$g(x) = \\sqrt{x^2 + 4}$', solution: '$g\'(x) = \\frac{1}{2\\sqrt{x^2+4}} \\cdot 2x = \\frac{x}{\\sqrt{x^2+4}}$' },
        ],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_5_3: TextbookChapter = {
  id: 'bi-okonomi-5-3',
  courseId: 'bi-okonomi',
  chapterNumber: '5.3',
  title: 'Derivasjon av spesielle funksjoner',
  description: 'Derivasjon av eksponentialfunksjoner, logaritmefunksjoner og sammensatte funksjoner.',
  estimatedMinutes: 45,
  content: [
    {
      id: 'bi-5-3-intro',
      type: 'text',
      content: `Eksponentialfunksjoner og logaritmer er sentrale i økonomi for å modellere vekst, renter og avskrivning. Her lærer vi å derivere disse funksjonene.`,
    },
    {
      id: 'bi-5-3-def-exp',
      type: 'definition',
      title: 'Derivasjon av eksponentialfunksjoner',
      content: `$$\\frac{d}{dx}(e^x) = e^x$$

$$\\frac{d}{dx}(a^x) = a^x \\cdot \\ln a$$

Med kjerneregelen: $\\frac{d}{dx}(e^{u(x)}) = e^{u(x)} \\cdot u'(x)$`,
    },
    {
      id: 'bi-5-3-note-e',
      type: 'note',
      title: 'Hvorfor e?',
      content: `Tallet $e \\approx 2{,}718$ er spesielt fordi $e^x$ er sin egen deriverte. Dette gjør det naturlig i modeller med kontinuerlig vekst.`,
    },
    {
      id: 'bi-5-3-ex1',
      type: 'example',
      title: 'Kontinuerlig rente',
      problem: 'En investering vokser etter $V(t) = 10000 \\cdot e^{0{,}05t}$. Finn $V\'(t)$ og tolk resultatet.',
      solution: `Med kjerneregelen der $u = 0{,}05t$:

$V'(t) = 10000 \\cdot e^{0{,}05t} \\cdot 0{,}05 = 500 \\cdot e^{0{,}05t}$

**Tolkning:** Vekstfarten øker over tid. Ved $t=0$: $V'(0) = 500$ kr/år.`,
    },
    {
      id: 'bi-5-3-def-ln',
      type: 'definition',
      title: 'Derivasjon av logaritmer',
      content: `$$\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$$

$$\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\cdot \\ln a}$$

Med kjerneregelen: $\\frac{d}{dx}(\\ln u(x)) = \\frac{u'(x)}{u(x)}$`,
    },
    {
      id: 'bi-5-3-ex2',
      type: 'example',
      title: 'Derivasjon av ln',
      problem: 'Deriver $f(x) = \\ln(x^2 + 1)$.',
      solution: `Kjernen er $u = x^2 + 1$ med $u' = 2x$.

$f'(x) = \\frac{2x}{x^2 + 1}$`,
    },
    {
      id: 'bi-5-3-ex3',
      type: 'example',
      title: 'Kombinert funksjon',
      problem: 'Deriver $f(x) = x^2 \\cdot e^{-x}$.',
      solution: `Produktregelen med $g = x^2$ og $h = e^{-x}$:

$g' = 2x$ og $h' = -e^{-x}$

$f'(x) = 2x \\cdot e^{-x} + x^2 \\cdot (-e^{-x}) = e^{-x}(2x - x^2) = xe^{-x}(2 - x)$`,
    },
    {
      id: 'bi-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver:',
        subTasks: [
          { label: 'a', task: '$f(x) = 3e^x$', solution: '$f\'(x) = 3e^x$' },
          { label: 'b', task: '$g(x) = e^{2x}$', solution: '$g\'(x) = 2e^{2x}$' },
          { label: 'c', task: '$h(x) = 5 \\cdot 2^x$', solution: '$h\'(x) = 5 \\cdot 2^x \\cdot \\ln 2$' },
        ],
      },
    },
    {
      id: 'bi-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver:',
        subTasks: [
          { label: 'a', task: '$f(x) = \\ln(3x)$', solution: '$f\'(x) = \\frac{3}{3x} = \\frac{1}{x}$' },
          { label: 'b', task: '$g(x) = \\ln(x^3)$', solution: '$g\'(x) = \\frac{3x^2}{x^3} = \\frac{3}{x}$' },
          { label: 'c', task: '$h(x) = x \\ln x$', solution: '$h\'(x) = \\ln x + 1$' },
        ],
      },
    },
    {
      id: 'bi-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En befolkning vokser etter $P(t) = 5000 \\cdot e^{0{,}03t}$.',
        subTasks: [
          { label: 'a', task: 'Finn $P\'(t)$.', solution: '$P\'(t) = 150e^{0{,}03t}$' },
          { label: 'b', task: 'Hvor stor er veksten etter 10 år?', answer: 202.0 },
          { label: 'c', task: 'Når er veksten 300 per år?', solution: '$150e^{0{,}03t} = 300 \\Rightarrow t = \\frac{\\ln 2}{0{,}03} \\approx 23{,}1$ år' },
        ],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_5_4: TextbookChapter = {
  id: 'bi-okonomi-5-4',
  courseId: 'bi-okonomi',
  chapterNumber: '5.4',
  title: 'Funksjonsdrøfting',
  description: 'Stigende og synkende funksjoner, ekstremalpunkter, vendepunkter og grafskisse.',
  estimatedMinutes: 55,
  content: [
    {
      id: 'bi-5-4-intro',
      type: 'text',
      content: `Ved å analysere den deriverte kan vi forstå en funksjons oppførsel: Når stiger den? Når synker den? Hvor har den maksimum og minimum?`,
    },
    {
      id: 'bi-5-4-def-stigende',
      type: 'definition',
      title: 'Stigende og synkende',
      content: `For en funksjon $f$ på et intervall:
- $f$ er **stigende** når $f'(x) > 0$
- $f$ er **synkende** når $f'(x) < 0$
- $f$ er **konstant** når $f'(x) = 0$`,
    },
    {
      id: 'bi-5-4-def-ekstrem',
      type: 'definition',
      title: 'Ekstremalpunkter',
      content: `Et **ekstremalpunkt** er et lokalt maksimum eller minimum.

**Nødvendig betingelse:** $f'(x) = 0$ (stasjonært punkt)

**Klassifisering med fortegnsskjema:** Se på fortegnet til $f'(x)$
- Maks: $f'$ går fra $+$ til $-$
- Min: $f'$ går fra $-$ til $+$`,
    },
    {
      id: 'bi-5-4-ex1',
      type: 'example',
      title: 'Finn ekstremalpunkter',
      problem: 'Finn ekstremalpunktene til $f(x) = x^3 - 3x^2 - 9x + 5$.',
      solution: `**Steg 1:** Finn $f'(x)$:
$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$

**Steg 2:** Løs $f'(x) = 0$:
$x = 3$ eller $x = -1$

**Steg 3:** Fortegnsskjema for $f'(x)$:

| $x$ | $-\\infty$ | $-1$ | $3$ | $\\infty$ |
|-----|---------|------|-----|---------|
| $f'(x)$ | $+$ | $0$ | $0$ | $+$ |
| | ↗ | maks | min | ↗ |

**Steg 4:** Beregn funksjonsverdier:
$f(-1) = -1 - 3 + 9 + 5 = 10$ (lokalt maks)
$f(3) = 27 - 27 - 27 + 5 = -22$ (lokalt min)`,
    },
    {
      id: 'bi-5-4-def-vende',
      type: 'definition',
      title: 'Vendepunkt',
      content: `Et **vendepunkt** er der funksjonen skifter fra å være konkav til konveks (eller omvendt).

**Nødvendig betingelse:** $f''(x) = 0$

Vendepunkt når $f''$ skifter fortegn.`,
    },
    {
      id: 'bi-5-4-tip',
      type: 'tip',
      title: 'Andrederiverten og økonomisk tolkning',
      content: `- $f'' > 0$: Funksjonen er **konveks** (smiler ∪), veksten øker
- $f'' < 0$: Funksjonen er **konkav** (surt ∩), veksten avtar

I økonomi: Hvis $K''(x) > 0$, øker grensekostnaden (stordriftsulemper).`,
    },
    {
      id: 'bi-5-4-ex2',
      type: 'example',
      title: 'Fullstendig drøfting av overskuddsfunksjon',
      problem: 'En bedrift har overskudd $O(x) = -x^3 + 12x^2 - 36x$ der $x$ er i tusen enheter. Drøft funksjonen.',
      solution: `**Derivasjon:**
$O'(x) = -3x^2 + 24x - 36 = -3(x^2 - 8x + 12) = -3(x-2)(x-6)$
$O''(x) = -6x + 24$

**Stasjonære punkter:** $x = 2$ og $x = 6$

**Klassifisering:**
$O''(2) = -12 + 24 = 12 > 0$ → min
$O''(6) = -36 + 24 = -12 < 0$ → maks

**Vendepunkt:** $O''(x) = 0 \\Rightarrow x = 4$

**Funksjonsverdier:**
$O(2) = -8 + 48 - 72 = -32$
$O(6) = -216 + 432 - 216 = 0$

**Konklusjon:** Maksimalt overskudd er 0 ved 6000 enheter.`,
    },
    {
      id: 'bi-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn ekstremalpunktene til $f(x) = x^3 - 6x^2 + 9x + 2$.',
        solution: '$f\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$. Maks ved $x=1$ ($f(1)=6$), min ved $x=3$ ($f(3)=2$).',
        hints: ['Deriver og sett lik null', 'Faktoriser den deriverte'],
      },
    },
    {
      id: 'bi-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kostnadsfunksjon er $K(x) = 0{,}01x^3 - 0{,}6x^2 + 12x + 100$.',
        subTasks: [
          { label: 'a', task: 'Finn grensekostnaden $K\'(x)$.', solution: '$K\'(x) = 0{,}03x^2 - 1{,}2x + 12$' },
          { label: 'b', task: 'Ved hvilken produksjon er grensekostnaden lavest?', answer: 20 },
          { label: 'c', task: 'Hva er den laveste grensekostnaden?', answer: 0 },
        ],
        hints: ['Grensekostnaden er lavest der $K\'\'(x) = 0$'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_5_5: TextbookChapter = {
  id: 'bi-okonomi-5-5',
  courseId: 'bi-okonomi',
  chapterNumber: '5.5',
  title: 'Optimering',
  description: 'Praktiske optimeringsproblemer, maksimum og minimum i økonomiske sammenhenger.',
  estimatedMinutes: 60,
  content: [
    {
      id: 'bi-5-5-intro',
      type: 'text',
      content: `Optimering handler om å finne beste mulige løsning - maksimal profitt, minimal kostnad, optimal produksjon. Vi bruker derivasjon som verktøy.`,
    },
    {
      id: 'bi-5-5-def-metode',
      type: 'definition',
      title: 'Fremgangsmåte for optimering',
      content: `1. **Modeller** problemet med en funksjon
2. **Deriver** funksjonen
3. **Løs** $f'(x) = 0$
4. **Klassifiser** løsningene (maks/min)
5. **Sjekk randverdier** hvis det er begrensninger
6. **Tolk** resultatet i kontekst`,
    },
    {
      id: 'bi-5-5-ex1',
      type: 'example',
      title: 'Profittmaksimering',
      problem: 'Pris-etterspørsel: $p = 100 - 2x$. Kostnad: $K(x) = 20x + 100$. Finn produksjon som maksimerer profitt.',
      solution: `**Inntekt:** $I(x) = p \\cdot x = (100 - 2x)x = 100x - 2x^2$

**Profitt:** $\\pi(x) = I(x) - K(x) = 100x - 2x^2 - 20x - 100 = -2x^2 + 80x - 100$

**Deriverer:** $\\pi'(x) = -4x + 80$

**Setter lik null:** $-4x + 80 = 0 \\Rightarrow x = 20$

**Sjekker:** $\\pi''(x) = -4 < 0$ → maksimum

**Svar:** Produser 20 enheter. Maksimal profitt: $\\pi(20) = -800 + 1600 - 100 = 700$`,
    },
    {
      id: 'bi-5-5-ex2',
      type: 'example',
      title: 'Kostnadsminimering',
      problem: 'Gjennomsnittskostnad: $\\bar{K}(x) = x + \\frac{100}{x} + 10$. Finn produksjon som minimerer gjennomsnittskostnad.',
      solution: `**Deriverer:** $\\bar{K}'(x) = 1 - \\frac{100}{x^2}$

**Setter lik null:** $1 - \\frac{100}{x^2} = 0 \\Rightarrow x^2 = 100 \\Rightarrow x = 10$

**Sjekker:** $\\bar{K}''(x) = \\frac{200}{x^3}$, og $\\bar{K}''(10) = 0{,}2 > 0$ → minimum

**Svar:** Produser 10 enheter. Laveste gjennomsnittskostnad: $\\bar{K}(10) = 10 + 10 + 10 = 30$`,
    },
    {
      id: 'bi-5-5-note',
      type: 'note',
      title: 'Randverdier',
      content: `I virkeligheten er det ofte begrensninger: $0 \\leq x \\leq x_{\\max}$. Da må vi også sjekke endepunktene og velge det beste av ekstremalpunkt og randverdier.`,
    },
    {
      id: 'bi-5-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-5-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Etterspørsel: $x = 50 - p$. Kostnad: $K = 10x + 50$. Finn pris som maksimerer profitt.',
        solution: '$I = px = p(50-p) = 50p - p^2$, $K = 10(50-p) + 50 = 550 - 10p$. $\\pi = 50p - p^2 - 550 + 10p = -p^2 + 60p - 550$. $\\pi\' = -2p + 60 = 0 \\Rightarrow p = 30$.',
        hints: ['Uttrykk alt som funksjon av $p$'],
      },
    },
    {
      id: 'bi-5-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-5-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En fabrikk kan produsere maks 100 enheter. Profitt: $\\pi(x) = -0{,}1x^2 + 15x - 200$ for $0 \\leq x \\leq 100$.',
        subTasks: [
          { label: 'a', task: 'Finn $x$ som gir maksimal profitt.', answer: 75 },
          { label: 'b', task: 'Hva er maksimal profitt?', answer: 362.5 },
          { label: 'c', task: 'Ved hvilke produksjonsvolum går bedriften i null?', solution: '$-0{,}1x^2 + 15x - 200 = 0 \\Rightarrow x = 16{,}4$ eller $x = 133{,}6$. Gitt begrensningen: break-even ved ca. 17 enheter.' },
        ],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_6_1: TextbookChapter = {
  id: 'bi-okonomi-6-1',
  courseId: 'bi-okonomi',
  chapterNumber: '6.1',
  title: 'Kostnadsfunksjoner',
  description: 'Faste og variable kostnader, totalkostnad, gjennomsnittskostnad og enhetskostnad.',
  estimatedMinutes: 50,
  content: [
    {
      id: 'bi-6-1-intro',
      type: 'text',
      content: `I bedriftsøkonomi er det essensielt å forstå hvordan kostnader oppfører seg. En **kostnadsfunksjon** $K(x)$ beskriver totalkostnaden ved å produsere $x$ enheter.`,
    },
    {
      id: 'bi-6-1-def-kostnader',
      type: 'definition',
      title: 'Faste og variable kostnader',
      content: `**Faste kostnader** ($FK$): Uavhengig av produksjonsmengde (husleie, forsikring)

**Variable kostnader** ($VK$): Avhenger av produksjonsmengde (råvarer, strøm)

$$K(x) = FK + VK(x)$$`,
    },
    {
      id: 'bi-6-1-ex1',
      type: 'example',
      title: 'Typisk kostnadsfunksjon',
      problem: 'En bedrift har faste kostnader på 5000 kr og variable kostnader på 20 kr per enhet. Sett opp kostnadsfunksjonen.',
      solution: `$K(x) = 5000 + 20x$

Dette er en **lineær kostnadsfunksjon**. De variable kostnadene per enhet er konstante.`,
    },
    {
      id: 'bi-6-1-def-gj',
      type: 'definition',
      title: 'Gjennomsnittskostnad',
      content: `**Gjennomsnittskostnad** (enhetskostnad):
$$\\bar{K}(x) = \\frac{K(x)}{x}$$

Dette er kostnaden per produsert enhet.`,
    },
    {
      id: 'bi-6-1-ex2',
      type: 'example',
      title: 'Gjennomsnittskostnad',
      problem: 'Med $K(x) = 5000 + 20x$, finn gjennomsnittskostnaden ved 100 og 500 enheter.',
      solution: `$\\bar{K}(100) = \\frac{5000 + 2000}{100} = \\frac{7000}{100} = 70$ kr/enhet

$\\bar{K}(500) = \\frac{5000 + 10000}{500} = \\frac{15000}{500} = 30$ kr/enhet

**Stordriftsfordeler:** Gjennomsnittskostnaden synker når produksjonen øker fordi de faste kostnadene fordeles på flere enheter.`,
    },
    {
      id: 'bi-6-1-note',
      type: 'note',
      title: 'Ikke-lineære kostnadsfunksjoner',
      content: `I praksis er kostnadsfunksjoner ofte polynomer:
$$K(x) = ax^3 + bx^2 + cx + d$$

- $d$ = faste kostnader
- Leddene med $x$ representerer variable kostnader
- Tredjegradsledd kan fange opp stordrifts(u)fordeler`,
    },
    {
      id: 'bi-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En bedrift har $K(x) = 3000 + 15x$.',
        subTasks: [
          { label: 'a', task: 'Hva er de faste kostnadene?', answer: 3000 },
          { label: 'b', task: 'Hva er variable kostnader per enhet?', answer: 15 },
          { label: 'c', task: 'Finn $K(200)$.', answer: 6000 },
          { label: 'd', task: 'Finn $\\bar{K}(200)$.', answer: 30 },
        ],
      },
    },
    {
      id: 'bi-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift har $K(x) = 0{,}01x^2 + 10x + 2000$.',
        subTasks: [
          { label: 'a', task: 'Finn gjennomsnittskostnaden $\\bar{K}(x)$.', solution: '$\\bar{K}(x) = 0{,}01x + 10 + \\frac{2000}{x}$' },
          { label: 'b', task: 'Ved hvilken produksjon er gjennomsnittskostnaden lavest?', solution: '$\\bar{K}\'(x) = 0{,}01 - \\frac{2000}{x^2} = 0 \\Rightarrow x = \\sqrt{200000} \\approx 447$' },
        ],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_6_2: TextbookChapter = {
  id: 'bi-okonomi-6-2',
  courseId: 'bi-okonomi',
  chapterNumber: '6.2',
  title: 'Inntekts- og overskuddsfunksjoner',
  description: 'Inntektsfunksjon, overskuddsfunksjon, break-even og profittanalyse.',
  estimatedMinutes: 45,
  content: [
    {
      id: 'bi-6-2-intro',
      type: 'text',
      content: `For å analysere lønnsomhet trenger vi både kostnader og inntekter. Sammen gir de oss **overskuddet**.`,
    },
    {
      id: 'bi-6-2-def-inntekt',
      type: 'definition',
      title: 'Inntektsfunksjon',
      content: `**Inntektsfunksjon:**
$$I(x) = p \\cdot x$$

der $p$ er pris per enhet og $x$ er antall solgte enheter.

Hvis prisen varierer med mengden (etterspørselsfunksjon): $I(x) = p(x) \\cdot x$`,
    },
    {
      id: 'bi-6-2-def-overskudd',
      type: 'definition',
      title: 'Overskuddsfunksjon',
      content: `**Overskudd (profitt):**
$$O(x) = I(x) - K(x)$$

- $O(x) > 0$: Bedriften går med overskudd
- $O(x) < 0$: Bedriften går med underskudd
- $O(x) = 0$: **Break-even** (null-punkt)`,
    },
    {
      id: 'bi-6-2-ex1',
      type: 'example',
      title: 'Break-even analyse',
      problem: 'Pris: 50 kr/enhet. Kostnad: $K(x) = 2000 + 30x$. Finn break-even.',
      solution: `**Inntekt:** $I(x) = 50x$

**Overskudd:** $O(x) = 50x - (2000 + 30x) = 20x - 2000$

**Break-even:** $O(x) = 0$
$20x - 2000 = 0$
$x = 100$

**Svar:** Bedriften må selge 100 enheter for å gå i null.`,
    },
    {
      id: 'bi-6-2-ex2',
      type: 'example',
      title: 'Variabel pris',
      problem: 'Etterspørsel: $p = 100 - 0{,}5x$. Kostnad: $K(x) = 500 + 20x$. Finn maksimalt overskudd.',
      solution: `**Inntekt:** $I(x) = (100 - 0{,}5x) \\cdot x = 100x - 0{,}5x^2$

**Overskudd:** $O(x) = 100x - 0{,}5x^2 - 500 - 20x = -0{,}5x^2 + 80x - 500$

**Deriverer:** $O'(x) = -x + 80 = 0 \\Rightarrow x = 80$

**Maksimalt overskudd:** $O(80) = -0{,}5 \\cdot 6400 + 6400 - 500 = 2700$ kr`,
    },
    {
      id: 'bi-6-2-tip',
      type: 'tip',
      title: 'Grafisk tolkning',
      content: `I et diagram med $K(x)$ og $I(x)$:
- Break-even er der grafene krysser
- Overskudd er avstanden mellom $I(x)$ og $K(x)$ når $I > K$
- Underskudd er avstanden når $K > I$`,
    },
    {
      id: 'bi-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Pris: 40 kr. Kostnad: $K(x) = 1500 + 25x$.',
        subTasks: [
          { label: 'a', task: 'Sett opp overskuddsfunksjonen $O(x)$.', solution: '$O(x) = 40x - 1500 - 25x = 15x - 1500$' },
          { label: 'b', task: 'Finn break-even.', answer: 100 },
          { label: 'c', task: 'Hva er overskuddet ved salg av 200 enheter?', answer: 1500 },
        ],
      },
    },
    {
      id: 'bi-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Etterspørsel: $x = 200 - 2p$. Kostnad: $K(x) = 1000 + 10x$.',
        subTasks: [
          { label: 'a', task: 'Uttrykk pris som funksjon av $x$.', solution: '$p = 100 - 0{,}5x$' },
          { label: 'b', task: 'Finn overskuddsfunksjonen.', solution: '$O(x) = (100 - 0{,}5x)x - 1000 - 10x = -0{,}5x^2 + 90x - 1000$' },
          { label: 'c', task: 'Finn produksjon som maksimerer overskudd.', answer: 90 },
        ],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_6_3: TextbookChapter = {
  id: 'bi-okonomi-6-3',
  courseId: 'bi-okonomi',
  chapterNumber: '6.3',
  title: 'Grensekostnad og grenseinntekt',
  description: 'Marginalkostnad, marginalinntekt, optimalt produksjonsvolum og profittmaksimering.',
  estimatedMinutes: 55,
  content: [
    {
      id: 'bi-6-3-intro',
      type: 'text',
      content: `**Marginalanalyse** bruker derivasjon til å analysere hva som skjer når vi endrer produksjonen med én enhet. Dette er sentralt for økonomiske beslutninger.`,
    },
    {
      id: 'bi-6-3-def-grensekostnad',
      type: 'definition',
      title: 'Grensekostnad',
      content: `**Grensekostnad** er den deriverte av kostnadsfunksjonen:
$$K'(x) = \\frac{dK}{dx}$$

**Tolkning:** $K'(x)$ er tilnærmet lik kostnaden ved å produsere én enhet ekstra.`,
    },
    {
      id: 'bi-6-3-def-grenseinntekt',
      type: 'definition',
      title: 'Grenseinntekt',
      content: `**Grenseinntekt** er den deriverte av inntektsfunksjonen:
$$I'(x) = \\frac{dI}{dx}$$

**Tolkning:** $I'(x)$ er tilnærmet lik inntekten fra å selge én enhet ekstra.`,
    },
    {
      id: 'bi-6-3-theorem',
      type: 'theorem',
      title: 'Betingelse for maksimalt overskudd',
      content: `Overskuddet er maksimalt når:
$$K'(x) = I'(x)$$

Det vil si: Produser til grensekostnad = grenseinntekt.`,
    },
    {
      id: 'bi-6-3-ex1',
      type: 'example',
      title: 'Optimal produksjon',
      problem: '$K(x) = 0{,}1x^2 + 10x + 500$ og $I(x) = 50x$. Finn optimalt produksjonsvolum.',
      solution: `**Grensekostnad:** $K'(x) = 0{,}2x + 10$
**Grenseinntekt:** $I'(x) = 50$

**Setter lik:**
$0{,}2x + 10 = 50$
$0{,}2x = 40$
$x = 200$

**Sjekk:** $O''(x) = I''(x) - K''(x) = 0 - 0{,}2 = -0{,}2 < 0$ → maksimum

**Svar:** Produser 200 enheter for maksimalt overskudd.`,
    },
    {
      id: 'bi-6-3-note',
      type: 'note',
      title: 'Økonomisk intuisjon',
      content: `- Hvis $I'(x) > K'(x)$: Produser mer (inntekten fra én til er større enn kostnaden)
- Hvis $I'(x) < K'(x)$: Produser mindre (kostnaden er større enn inntekten)
- Ved $I'(x) = K'(x)$: Optimal produksjon`,
    },
    {
      id: 'bi-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: '$K(x) = x^2 + 20x + 100$ og $I(x) = 80x$.',
        subTasks: [
          { label: 'a', task: 'Finn grensekostnad og grenseinntekt.', solution: '$K\'(x) = 2x + 20$, $I\'(x) = 80$' },
          { label: 'b', task: 'Finn optimal produksjon.', answer: 30 },
          { label: 'c', task: 'Hva er maksimalt overskudd?', answer: 800 },
        ],
      },
    },
    {
      id: 'bi-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Etterspørsel: $p = 120 - 0{,}4x$. Kostnad: $K(x) = 0{,}1x^2 + 20x + 1000$.',
        subTasks: [
          { label: 'a', task: 'Finn inntektsfunksjonen $I(x)$.', solution: '$I(x) = 120x - 0{,}4x^2$' },
          { label: 'b', task: 'Finn grenseinntekten $I\'(x)$.', solution: '$I\'(x) = 120 - 0{,}8x$' },
          { label: 'c', task: 'Finn optimal produksjon ($K\' = I\'$).', answer: 100 },
        ],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_6_4: TextbookChapter = {
  id: 'bi-okonomi-6-4',
  courseId: 'bi-okonomi',
  chapterNumber: '6.4',
  title: 'Etterspørsel og priselastisitet',
  description: 'Etterspørselsfunksjoner, priselastisitet, elastisk og uelastisk etterspørsel.',
  estimatedMinutes: 55,
  content: [
    {
      id: 'bi-6-4-intro',
      type: 'text',
      content: `**Priselastisitet** måler hvor følsom etterspørselen er for prisendringer. Dette er avgjørende for prissetting og inntektsoptimering.`,
    },
    {
      id: 'bi-6-4-def-elastisitet',
      type: 'definition',
      title: 'Priselastisitet',
      content: `**Priselastisitet** for etterspørsel $D(p)$:
$$E_p = \\frac{p}{D(p)} \\cdot D'(p)$$

Ofte brukes absoluttverdien: $|E_p|$

**Tolkning:** Prosentvis endring i etterspørsel per prosent prisøkning.`,
    },
    {
      id: 'bi-6-4-def-typer',
      type: 'definition',
      title: 'Elastisitetstyper',
      content: `- $|E_p| > 1$: **Elastisk** (følsom for pris)
- $|E_p| < 1$: **Uelastisk** (lite følsom)
- $|E_p| = 1$: **Enhets-elastisk**`,
    },
    {
      id: 'bi-6-4-ex1',
      type: 'example',
      title: 'Beregne elastisitet',
      problem: 'Etterspørsel: $D(p) = 100 - 2p$. Finn elastisiteten ved $p = 20$.',
      solution: `$D(20) = 100 - 40 = 60$
$D'(p) = -2$

$E_p = \\frac{20}{60} \\cdot (-2) = -\\frac{2}{3}$

$|E_p| = \\frac{2}{3} < 1$ → Uelastisk ved $p = 20$

Øker prisen med 1%, synker etterspørselen med ca. 0,67%.`,
    },
    {
      id: 'bi-6-4-theorem',
      type: 'theorem',
      title: 'Elastisitet og inntekt',
      content: `- $|E_p| > 1$: Prisøkning gir lavere inntekt
- $|E_p| < 1$: Prisøkning gir høyere inntekt
- $|E_p| = 1$: Inntekten er maksimal`,
    },
    {
      id: 'bi-6-4-ex2',
      type: 'example',
      title: 'Maksimal inntekt',
      problem: 'Etterspørsel: $D(p) = 200 - 4p$. Ved hvilken pris er inntekten maksimal?',
      solution: `**Inntekt:** $I = p \\cdot D(p) = p(200 - 4p) = 200p - 4p^2$

**Deriverer:** $I'(p) = 200 - 8p = 0 \\Rightarrow p = 25$

**Sjekk elastisitet:** $E_p = \\frac{25}{100} \\cdot (-4) = -1$

Ved $p = 25$ er $|E_p| = 1$, og inntekten er maksimal.`,
    },
    {
      id: 'bi-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-6-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Etterspørsel: $D(p) = 80 - 0{,}5p$.',
        subTasks: [
          { label: 'a', task: 'Finn elastisiteten ved $p = 40$.', solution: '$D(40) = 60$, $E_p = \\frac{40}{60} \\cdot (-0{,}5) = -\\frac{1}{3}$' },
          { label: 'b', task: 'Er etterspørselen elastisk eller uelastisk?', solution: 'Uelastisk ($|E_p| < 1$)' },
          { label: 'c', task: 'Ved hvilken pris er $|E_p| = 1$?', answer: 80 },
        ],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_6_5: TextbookChapter = {
  id: 'bi-okonomi-6-5',
  courseId: 'bi-okonomi',
  chapterNumber: '6.5',
  title: 'Markedslikevekt',
  description: 'Tilbud og etterspørsel, likevektspris, konsumentoverskudd og produsentoverskudd.',
  estimatedMinutes: 45,
  content: [
    {
      id: 'bi-6-5-intro',
      type: 'text',
      content: `I et fritt marked bestemmes pris og mengde av samspillet mellom **tilbud** og **etterspørsel**. Der de møtes, finner vi **markedslikevekt**.`,
    },
    {
      id: 'bi-6-5-def-funksjoner',
      type: 'definition',
      title: 'Tilbud og etterspørsel',
      content: `**Etterspørselsfunksjon** $D(p)$: Mengde konsumenter vil kjøpe ved pris $p$ (synkende)

**Tilbudsfunksjon** $S(p)$: Mengde produsenter vil selge ved pris $p$ (stigende)`,
    },
    {
      id: 'bi-6-5-def-likevekt',
      type: 'definition',
      title: 'Markedslikevekt',
      content: `**Likevekt** oppstår når tilbud = etterspørsel:
$$D(p^*) = S(p^*)$$

$p^*$ er **likevektsprisen**, $x^* = D(p^*)$ er **likevektsmengden**.`,
    },
    {
      id: 'bi-6-5-ex1',
      type: 'example',
      title: 'Finn likevekt',
      problem: 'Etterspørsel: $D(p) = 100 - 2p$. Tilbud: $S(p) = 20 + 3p$. Finn likevekt.',
      solution: `**Setter lik:**
$100 - 2p = 20 + 3p$
$80 = 5p$
$p^* = 16$

**Likevektsmengde:**
$x^* = D(16) = 100 - 32 = 68$

**Svar:** Likevektspris er 16 kr, mengde er 68 enheter.`,
    },
    {
      id: 'bi-6-5-def-overskudd',
      type: 'definition',
      title: 'Konsument- og produsentoverskudd',
      content: `**Konsumentoverskudd (KO):** Forskjellen mellom hva konsumenter er villige til å betale og hva de faktisk betaler.

**Produsentoverskudd (PO):** Forskjellen mellom hva produsenter får betalt og minimumsprisen de ville akseptert.

Beregnes som arealer i tilbud/etterspørselsdiagrammet.`,
    },
    {
      id: 'bi-6-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-6-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Etterspørsel: $D(p) = 50 - p$. Tilbud: $S(p) = 2p - 10$.',
        subTasks: [
          { label: 'a', task: 'Finn likevektspris.', answer: 20 },
          { label: 'b', task: 'Finn likevektsmengde.', answer: 30 },
          { label: 'c', task: 'Hva skjer hvis prisen settes til 25 kr?', solution: '$D(25) = 25$, $S(25) = 40$. Overskuddstilbud på 15 enheter.' },
        ],
      },
    },
    {
      id: 'bi-6-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-6-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Etterspørsel: $p = 80 - x$. Tilbud: $p = 20 + 0{,}5x$.',
        subTasks: [
          { label: 'a', task: 'Finn likevekt.', solution: '$80 - x = 20 + 0{,}5x \\Rightarrow x = 40, p = 40$' },
          { label: 'b', task: 'Tegn et diagram og marker KO og PO.', solution: 'KO: trekant over likevektspris, under etterspørselskurve. PO: trekant under likevektspris, over tilbudskurve.' },
          { label: 'c', task: 'Beregn konsumentoverskudd.', solution: '$KO = \\frac{1}{2} \\cdot 40 \\cdot (80-40) = 800$' },
        ],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_BI_OKONOMI_1_5: TextbookChapter = {
  id: 'bi-okonomi-1-5',
  courseId: 'bi-okonomi',
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
      id: 'bi-okonomi-1-5-intro',
      type: 'text',
      content: `# Faktorisering

## Enkel faktorisering

Når vi faktoriserer et tall skriver vi det som et produkt av to eller flere andre tall. Tallet **8** kan vi for eksempel faktorisere til $4 \\cdot 2$ eller alternativt kan vi skrive det som $2 \\cdot 2 \\cdot 2$.

Faktorisering er spesielt nyttig når vi arbeider med brøker fordi det kan hjelpe oss å stryke likt imot likt over og under brøkstreken.`,
    },
    {
      id: 'bi-okonomi-1-5-section-primtall',
      type: 'text',
      content: `## Primtallsfaktorisering

Primtall er tall som kun er delelige på seg selv og tallet 1. Tallet 1 er ikke inkludert.

Når vi primtallsfaktoriserer skriver vi tallene vi faktoriserer som et produkt av **kun** primtall. Eksempelvis så er en primtallsfaktorisering av $12 = 2 \\cdot 2 \\cdot 3$ forskjellig fra en faktorisering som $12 = 4 \\cdot 3$ eller $12 = 2 \\cdot 6$ ettersom 4 ikke er et primtall.

**Primtall:** 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 …`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bi-okonomi-1-5-example-1',
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
      id: 'bi-okonomi-1-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-1',
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
      id: 'bi-okonomi-1-5-section-brok',
      type: 'text',
      content: `## Å forkorte enkle brøker ved hjelp av faktorisering

Når vi skal forkorte brøker så finner vi felles faktorer over og under brøkstreken og stryker disse imot hverandre. I motsetning til primtallsfaktorisering er målet vårt å finne høyest mulig felles faktor over og under brøkstreken, på den måten kan vi forkorte raskest mulig.

Noen ganger kan det også lønne seg å faktorisere litt av gangen. Dette handler mest om erfaring.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bi-okonomi-1-5-example-2',
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
      id: 'bi-okonomi-1-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-2',
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
      id: 'bi-okonomi-1-5-section-uttrykk',
      type: 'text',
      content: `## Faktorisering av uttrykk med flere ledd

Vi skal nå lære hvordan vi faktoriserer ut det som er felles i uttrykk med "flere ledd" (altså uttrykk som har + eller − som skiller leddene).`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bi-okonomi-1-5-example-3',
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
      id: 'bi-okonomi-1-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-3',
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
      id: 'bi-okonomi-1-5-example-4',
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
      id: 'bi-okonomi-1-5-example-5',
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
      id: 'bi-okonomi-1-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-4',
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
      id: 'bi-okonomi-1-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-5',
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
      id: 'bi-okonomi-1-5-section-kvadrat',
      type: 'text',
      content: `# Kvadratsetningene

I begynnelsen så kan kvadratsetningene virke nokså uviktige. Det virker jo bare som vi lærer en "hurtigregel" for hvordan gange sammen uttrykk som er opphøyd i 2. Men, det er bare begynnelsen på hva vi bruker kvadratsetningene til. Spesielt 3. kvadratsetning (Konjugatsetningen) er spesielt viktig å lære seg da den brukes mye i matematikken.`,
    },

    // ========== 1. KVADRATSETNING ==========
    {
      id: 'bi-okonomi-1-5-theorem-1',
      type: 'theorem',
      title: '1. Kvadratsetning',
      content: `$$(a + b)^2 = a^2 + 2ab + b^2$$

**Bevis:** (Det er faktisk viktig å forstå hvorfor)

$(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$

Husk: $b \\cdot a = a \\cdot b$`,
    },

    // Illustrasjon: 1. Kvadratsetning
    {
      id: 'bi-okonomi-1-5-kvadratsetning-1-bilde',
      type: 'image',
      src: '/images/algebra/kvadratsetning-1.svg',
      alt: 'Geometrisk visualisering av første kvadratsetning (a+b)^2',
      caption: '1. Kvadratsetning: Arealet av et kvadrat med sidelengde (a+b)',
    },

    // ========== 2. KVADRATSETNING ==========
    {
      id: 'bi-okonomi-1-5-theorem-2',
      type: 'theorem',
      title: '2. Kvadratsetning',
      content: `$$(a - b)^2 = a^2 - 2ab + b^2$$

**Bevis:**

$(a - b)^2 = (a - b)(a - b) = a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$`,
    },

    // Illustrasjon: 2. Kvadratsetning
    {
      id: 'bi-okonomi-1-5-kvadratsetning-2-bilde',
      type: 'image',
      src: '/images/algebra/kvadratsetning-2.svg',
      alt: 'Geometrisk visualisering av andre kvadratsetning (a-b)^2',
      caption: '2. Kvadratsetning: Arealet av et kvadrat med sidelengde (a-b)',
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: 'bi-okonomi-1-5-example-6',
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
      id: 'bi-okonomi-1-5-example-7',
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
      id: 'bi-okonomi-1-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-6',
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
      id: 'bi-okonomi-1-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-7',
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
      id: 'bi-okonomi-1-5-section-fakt-kvadrat',
      type: 'text',
      content: `## Faktorisering ved hjelp av 1. og 2. kvadratsetning

En av de nyttigste bruksområdene for kvadratsetningene er at vi kan faktorisere enkelte andregraduttrykk om vi gjennomfører de i motsatt retning.

Om vi har en likning på formen $x^2 + b \\cdot x + c$ og $\\left(\\frac{b}{2}\\right)^2 = c$, så kan vi faktorisere ved hjelp av kvadratsetningene:

$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$`,
    },

    // ========== EKSEMPEL 8 ==========
    {
      id: 'bi-okonomi-1-5-example-8',
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
      id: 'bi-okonomi-1-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-8',
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
      id: 'bi-okonomi-1-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-9',
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
      id: 'bi-okonomi-1-5-theorem-3',
      type: 'theorem',
      title: '3. Kvadratsetning (Konjugatsetningen)',
      content: `$$(a + b)(a - b) = a^2 - b^2$$

**Bevis:**

$(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$`,
    },

    // Illustrasjon: Konjugatsetningen
    {
      id: 'bi-okonomi-1-5-konjugatsetning-bilde',
      type: 'image',
      src: '/images/algebra/konjugatsetningen.svg',
      alt: 'Geometrisk visualisering av konjugatsetningen (a+b)(a-b) = a^2 - b^2',
      caption: 'Konjugatsetningen: Differansen mellom to kvadrater',
    },

    // ========== EKSEMPEL 9 ==========
    {
      id: 'bi-okonomi-1-5-example-9',
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
      id: 'bi-okonomi-1-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-10',
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
      id: 'bi-okonomi-1-5-section-konj-motsatt',
      type: 'text',
      content: `## 3. Kvadratsetning i motsatt retning

Vi kan også bruke konjugatsetningen til å faktorisere uttrykk på formen $a^2 - b^2$:

$$a^2 - b^2 = (a + b)(a - b)$$`,
    },

    // ========== EKSEMPEL 10 ==========
    {
      id: 'bi-okonomi-1-5-example-10',
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
      id: 'bi-okonomi-1-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-11',
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
      id: 'bi-okonomi-1-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-5-ex-12',
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
}

export const CHAPTER_BI_OKONOMI_1_6: TextbookChapter = {
  id: 'bi-okonomi-1-6',
  courseId: 'bi-okonomi',
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
      id: 'bi-okonomi-1-6-intro',
      type: 'text',
      content: `## Brøker med algebraiske uttrykk

**Nødvendige forkunnskaper:** Algebra og faktorisering

I dette kapitlet skal vi lære å regne med brøker som inneholder algebraiske uttrykk (bokstaver). Vi skal se på hvordan vi forkorter, multipliserer, dividerer og trekker sammen slike brøker.`,
    },

    // ========== EKSEMPEL 1: Forkorte brøker ==========
    {
      id: 'bi-okonomi-1-6-example-1',
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
      id: 'bi-okonomi-1-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-6-ex-1',
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
      id: 'bi-okonomi-1-6-example-2',
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
      id: 'bi-okonomi-1-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-6-ex-2',
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
      id: 'bi-okonomi-1-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-6-ex-3',
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
      id: 'bi-okonomi-1-6-example-3',
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
      id: 'bi-okonomi-1-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-6-ex-4',
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
      id: 'bi-okonomi-1-6-theorem-utviding',
      type: 'theorem',
      title: 'Utviding av brøker',
      content: `For å trekke sammen brøker med **ulik nevner** må vi først utvide brøkene slik at de får **lik nevner** (fellesnevner).

Vi utvider en brøk ved å gange teller og nevner med samme faktor.`,
    },

    {
      id: 'bi-okonomi-1-6-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Utvid brøken slik at du får $x^2 - 4$ i nevner:

$\\frac{3}{x - 2}$`,
      solution: `**Løsning:**

$\\frac{3}{x - 2} = \\frac{3(x + 2)}{(x - 2)(x + 2)} = \\frac{3x + 6}{x^2 - 4}$`,
    },

    // Oppgave 5: Utvide brøker
    {
      id: 'bi-okonomi-1-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-6-ex-5',
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
      id: 'bi-okonomi-1-6-example-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: `Trekk sammen brøkene:

$\\frac{5x}{2y} + \\frac{3}{2}$`,
      solution: `**Løsning:**

$\\frac{5x}{2y} + \\frac{3}{2} = \\frac{5x}{2y} + \\frac{3 \\cdot y}{2 \\cdot y} = \\frac{5x}{2y} + \\frac{3y}{2y} = \\frac{5x + 3y}{2y}$`,
    },

    // Oppgave 6: Trekke sammen med ulik nevner
    {
      id: 'bi-okonomi-1-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-6-ex-6',
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
      id: 'bi-okonomi-1-6-example-6',
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
      id: 'bi-okonomi-1-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-6-ex-7',
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
      id: 'bi-okonomi-1-6-example-7',
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
      id: 'bi-okonomi-1-6-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-6-ex-8',
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
      id: 'bi-okonomi-1-6-example-8',
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
      id: 'bi-okonomi-1-6-example-9',
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
      id: 'bi-okonomi-1-6-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-1-6-ex-9',
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
      id: 'bi-okonomi-1-6-example-10',
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
}

export const CHAPTER_BI_OKONOMI_2_5: TextbookChapter = {
  id: 'bi-okonomi-2-5',
  courseId: 'bi-okonomi',
  chapterNumber: '2.5',
  title: 'Rasjonale likninger',
  description: 'Lær å løse likninger som inneholder brøker ved hjelp av ulike metoder.',
  estimatedMinutes: 60,
  competenceGoals: ['løse likninger med brøker', 'bruke produktregelen for brøklikninger'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bi-okonomi-2-5-intro',
      type: 'text',
      content: `## Brøklikninger

Nå skal vi lære å løse likninger som inneholder brøker. Hovedstrategien er ofte å multiplisere begge sider med nevneren for å bli kvitt brøken.`,
    },

    // ========== EKSEMPEL 1: Enkle brøklikninger ==========
    {
      id: 'bi-okonomi-2-5-example-1',
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
      id: 'bi-okonomi-2-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-5-ex-1',
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
      id: 'bi-okonomi-2-5-example-2',
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
      id: 'bi-okonomi-2-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-5-ex-2',
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
      id: 'bi-okonomi-2-5-example-3',
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
      id: 'bi-okonomi-2-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-5-ex-3',
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
      id: 'bi-okonomi-2-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-5-ex-4',
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
      id: 'bi-okonomi-2-5-example-4',
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
      id: 'bi-okonomi-2-5-example-5',
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
      id: 'bi-okonomi-2-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-5-ex-5',
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
      id: 'bi-okonomi-2-5-example-6',
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
      id: 'bi-okonomi-2-5-theorem-produktregel',
      type: 'theorem',
      title: 'Brøklikninger med produktregelen',
      content: `Når vi skal finne ut når en brøk har verdien 0 så holder det å finne ut når **telleren** (det over brøkstreken) i brøken er lik 0.

$\\frac{0}{x} = 0$ for alle verdier av $x$ (med unntak av 0).`,
    },

    // ========== EKSEMPEL 7: Produktregelen ==========
    {
      id: 'bi-okonomi-2-5-example-7',
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
      id: 'bi-okonomi-2-5-example-8',
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
      id: 'bi-okonomi-2-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-5-ex-6',
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
      id: 'bi-okonomi-2-5-section-spesielle',
      type: 'text',
      content: `### Når ingen verdier av x gir en løsning og når alle verdier av x gir en løsning`,
    },

    {
      id: 'bi-okonomi-2-5-example-9',
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
      id: 'bi-okonomi-2-5-example-10',
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
      id: 'bi-okonomi-2-5-example-11',
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
}

export const CHAPTER_BI_OKONOMI_2_6: TextbookChapter = {
  id: 'bi-okonomi-2-6',
  courseId: 'bi-okonomi',
  chapterNumber: '2.6',
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
      id: 'bi-okonomi-2-6-intro',
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
      id: 'bi-okonomi-2-6-strategi',
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
      id: 'bi-okonomi-2-6-section-1',
      type: 'text',
      content: `## Del 1: «Finn tallet»-oppgaver

Vi starter med de enkleste tekstoppgavene — oppgaver der vi skal finne et tall basert på en beskrivelse.`,
    },

    {
      id: 'bi-okonomi-2-6-example-1',
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
      id: 'bi-okonomi-2-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-1',
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
      id: 'bi-okonomi-2-6-example-2',
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
      id: 'bi-okonomi-2-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-2',
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
      id: 'bi-okonomi-2-6-section-2',
      type: 'text',
      content: `## Del 2: Oppgaver med to tall

Nå ser vi på oppgaver der vi skal finne to tall. Trikset er å uttrykke begge tallene ved hjelp av samme variabel.`,
    },

    {
      id: 'bi-okonomi-2-6-example-3',
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
      id: 'bi-okonomi-2-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-3',
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
      id: 'bi-okonomi-2-6-section-3',
      type: 'text',
      content: `## Del 3: Aldersoppgaver

Aldersoppgaver er klassiske tekstoppgaver. Husk at alle blir like mye eldre — hvis det går 5 år, øker alles alder med 5.`,
    },

    {
      id: 'bi-okonomi-2-6-example-4',
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
      id: 'bi-okonomi-2-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-4',
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
      id: 'bi-okonomi-2-6-example-5',
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
      id: 'bi-okonomi-2-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-5',
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
      id: 'bi-okonomi-2-6-section-4',
      type: 'text',
      content: `## Del 4: Penger og priser

Oppgaver om penger handler ofte om totalpris, vekslepenger, eller fordeling av penger.`,
    },

    {
      id: 'bi-okonomi-2-6-example-6',
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
      id: 'bi-okonomi-2-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-6',
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
      id: 'bi-okonomi-2-6-example-7',
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
      id: 'bi-okonomi-2-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-7',
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
      id: 'bi-okonomi-2-6-section-5',
      type: 'text',
      content: `## Del 5: Geometri

Mange geometrioppgaver kan løses med likninger — spesielt oppgaver om omkrets og areal.`,
    },

    {
      id: 'bi-okonomi-2-6-formler',
      type: 'note',
      content: `**Nyttige formler:**
- Omkrets av rektangel: $O = 2l + 2b$ (eller $O = 2(l + b)$)
- Areal av rektangel: $A = l \\cdot b$
- Omkrets av trekant: $O = a + b + c$`,
    },

    {
      id: 'bi-okonomi-2-6-example-8',
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
      id: 'bi-okonomi-2-6-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-8',
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
      id: 'bi-okonomi-2-6-example-9',
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
      id: 'bi-okonomi-2-6-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-9',
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
      id: 'bi-okonomi-2-6-section-6',
      type: 'text',
      content: `## Del 6: Fart, tid og strekning

Sammenhengen mellom fart, tid og strekning er grunnleggende i mange praktiske oppgaver.`,
    },

    {
      id: 'bi-okonomi-2-6-formel-fart',
      type: 'formula',
      title: 'Sammenhengen mellom fart, tid og strekning',
      latex: '\\text{Strekning} = \\text{Fart} \\times \\text{Tid} \\quad \\text{eller} \\quad s = v \\cdot t',
      description: 'Derav følger: $v = \\frac{s}{t}$ og $t = \\frac{s}{v}$',
    },

    {
      id: 'bi-okonomi-2-6-example-10',
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
      id: 'bi-okonomi-2-6-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-10',
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
      id: 'bi-okonomi-2-6-example-11',
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
      id: 'bi-okonomi-2-6-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-6-ex-11',
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
      id: 'bi-okonomi-2-6-summary',
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
}

export const CHAPTER_BI_OKONOMI_2_7: TextbookChapter = {
  id: 'bi-okonomi-2-7',
  courseId: 'bi-okonomi',
  chapterNumber: '2.7',
  title: 'Praktisk bruk av andregradslikninger',
  description: 'Bruk andregradslikninger til å løse praktiske problemer.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke andregradslikninger i praktiske situasjoner', 'tolke løsninger i kontekst'],
  content: [
    // ========== INTRO ==========
    {
      id: 'bi-okonomi-2-7-intro',
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
      id: 'bi-okonomi-2-7-section-areal',
      type: 'text',
      content: `## Arealproblemer

Når vi jobber med areal av rektangler eller andre figurer, får vi ofte andregradslikninger fordi areal = lengde × bredde.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bi-okonomi-2-7-example-1',
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
      id: 'bi-okonomi-2-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-7-ex-1',
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
      id: 'bi-okonomi-2-7-example-2',
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
      id: 'bi-okonomi-2-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-7-ex-2',
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
      id: 'bi-okonomi-2-7-section-kast',
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
      id: 'bi-okonomi-2-7-example-3',
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
      id: 'bi-okonomi-2-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-7-ex-3',
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
      id: 'bi-okonomi-2-7-section-pytagoras',
      type: 'text',
      content: `## Pytagoras

I rettvinklede trekanter gir Pytagoras' setning ofte andregradslikninger:

$$a^2 + b^2 = c^2$$`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'bi-okonomi-2-7-example-4',
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
      id: 'bi-okonomi-2-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-7-ex-4',
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
      id: 'bi-okonomi-2-7-section-tall',
      type: 'text',
      content: `## Tallproblemer

Andregradslikninger kan også brukes til å løse tallgåter.`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: 'bi-okonomi-2-7-example-5',
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
      id: 'bi-okonomi-2-7-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-2-7-ex-5',
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
      id: 'bi-okonomi-2-7-summary',
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
}

export const CHAPTER_BI_OKONOMI_3_5: TextbookChapter = {
  id: 'bi-okonomi-3-5',
  courseId: 'bi-okonomi',
  chapterNumber: '3.5',
  title: 'Nullpunkter og fortegn',
  description: 'Finn nullpunktene til andregradsfunksjoner og bestem fortegnet.',
  estimatedMinutes: 35,
  competenceGoals: ['finne nullpunkter til andregradsfunksjoner', 'analysere fortegn'],
  content: [
    {
      id: 'bi-okonomi-3-5-intro',
      type: 'text',
      content: `**Nullpunktene** til en funksjon er $x$-verdiene der $f(x) = 0$. For andregradsfunksjoner finner vi nullpunktene ved å løse andregradslikningen $ax^2 + bx + c = 0$.

I dette kapitlet lærer du:
- Å finne nullpunkter ved faktorisering
- Å bruke abc-formelen
- Å analysere fortegnet til en andregradsfunksjon`,
    },
    {
      id: 'bi-okonomi-3-5-text-faktorisering',
      type: 'text',
      content: `## Faktorisering

Hvis vi kan faktorisere uttrykket $ax^2 + bx + c$, kan vi finne nullpunktene direkte.

**Metode:** Finn to tall som:
- Ganget gir $a \\cdot c$
- Addert gir $b$`,
    },
    {
      id: 'bi-okonomi-3-5-example-1',
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
      id: 'bi-okonomi-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-5-ex-1',
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
      id: 'bi-okonomi-3-5-theorem-abc',
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
      id: 'bi-okonomi-3-5-example-2',
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
      id: 'bi-okonomi-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-5-ex-2',
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
      id: 'bi-okonomi-3-5-def-faktorisert',
      type: 'definition',
      title: 'Faktorisert form',
      content: `Når en andregradsfunksjon har nullpunkter $x_1$ og $x_2$, kan den skrives på **faktorisert form**:
$$f(x) = a(x - x_1)(x - x_2)$$

Nullpunktene leses direkte fra den faktoriserte formen.`,
    },
    {
      id: 'bi-okonomi-3-5-example-3',
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
      id: 'bi-okonomi-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-5-ex-3',
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
      id: 'bi-okonomi-3-5-text-fortegn',
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
      id: 'bi-okonomi-3-5-example-4',
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
      id: 'bi-okonomi-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-5-ex-4',
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
      id: 'bi-okonomi-3-5-note-fortegn',
      type: 'note',
      content: `**Huskeregel for fortegn**

For $f(x) = ax^2 + bx + c$ med to nullpunkter $x_1 < x_2$:

- Hvis $a > 0$: $f(x) > 0$ når $x < x_1$ eller $x > x_2$
- Hvis $a < 0$: $f(x) > 0$ når $x_1 < x < x_2$

**Parabelen er over x-aksen der $f(x) > 0$**`,
    },
    {
      id: 'bi-okonomi-3-5-example-5',
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
      id: 'bi-okonomi-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-5-ex-5',
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
      id: 'bi-okonomi-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-5-ex-6',
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
}

export const CHAPTER_BI_OKONOMI_3_6: TextbookChapter = {
  id: 'bi-okonomi-3-6',
  courseId: 'bi-okonomi',
  chapterNumber: '3.6',
  title: 'Rasjonale funksjoner',
  description: 'Funksjoner på brøkform med polynomer.',
  estimatedMinutes: 35,
  competenceGoals: ['analysere rasjonale funksjoner og deres egenskaper'],
  content: [
    {
      id: 'bi-okonomi-3-6-intro',
      type: 'text',
      content: `En **rasjonal funksjon** er en brøk der både teller og nevner er polynomer. Disse funksjonene har spesielle egenskaper som asymptoter og hull i grafen.

I dette kapitlet lærer du:
- Definisjonsmengde
- Vertikale asymptoter
- Horisontale asymptoter`,
    },
    {
      id: 'bi-okonomi-3-6-def-rasjonal',
      type: 'definition',
      title: 'Rasjonal funksjon',
      content: `En **rasjonal funksjon** har formen:
$$f(x) = \\frac{P(x)}{Q(x)}$$

der $P(x)$ og $Q(x)$ er polynomer og $Q(x) \\neq 0$.

**Definisjonsmengden** $D_f$ er alle $x$-verdier der nevneren ikke er null.`,
    },
    {
      id: 'bi-okonomi-3-6-example-1',
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
      id: 'bi-okonomi-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-6-ex-1',
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
      id: 'bi-okonomi-3-6-def-vertikal',
      type: 'definition',
      title: 'Vertikal asymptote',
      content: `En **vertikal asymptote** er en vertikal linje $x = a$ som grafen nærmer seg, men aldri krysser.

Vertikale asymptoter finnes der nevneren er null (og telleren ikke er null i samme punkt).`,
    },
    {
      id: 'bi-okonomi-3-6-example-2',
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
      id: 'bi-okonomi-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-6-ex-2',
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
      id: 'bi-okonomi-3-6-def-horisontal',
      type: 'definition',
      title: 'Horisontal asymptote',
      content: `En **horisontal asymptote** er en horisontal linje $y = b$ som grafen nærmer seg når $x \\to \\pm \\infty$.

For $f(x) = \\frac{P(x)}{Q(x)}$:
- Hvis grad$(P) <$ grad$(Q)$: $y = 0$
- Hvis grad$(P) =$ grad$(Q)$: $y = \\frac{\\text{ledende koeff. i } P}{\\text{ledende koeff. i } Q}$
- Hvis grad$(P) >$ grad$(Q)$: Ingen horisontal asymptote`,
    },
    {
      id: 'bi-okonomi-3-6-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Finn horisontal asymptote for $f(x) = \\frac{3x - 1}{x + 2}$.',
      solution: `Teller har grad 1, nevner har grad 1.
Gradene er like.

$$y = \\frac{\\text{ledende koeff. i teller}}{\\text{ledende koeff. i nevner}} = \\frac{3}{1} = 3$$

**Horisontal asymptote:** $y = 3$`,
    },
    {
      id: 'bi-okonomi-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-6-ex-3',
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
      id: 'bi-okonomi-3-6-example-4',
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
      id: 'bi-okonomi-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle og finn hull i grafen: $f(x) = \\frac{x^2 - x - 6}{x - 3}$',
        solution: '$f(x) = \\frac{(x-3)(x+2)}{x-3} = x + 2$ for $x \\neq 3$. Hull i $(3, 5)$.',
        hints: ['Faktoriser telleren'],
      },
    },
    {
      id: 'bi-okonomi-3-6-note-skisse',
      type: 'note',
      content: `**Å skissere rasjonale funksjoner**

1. Finn definisjonsmengden
2. Finn vertikale asymptoter
3. Finn horisontale asymptoter
4. Finn nullpunkter ($f(x) = 0$)
5. Finn $y$-skjæring ($f(0)$)`,
    },
    {
      id: 'bi-okonomi-3-6-example-5',
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
      id: 'bi-okonomi-3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn alle asymptoter, nullpunkter og $y$-skjæring for $f(x) = \\frac{2x - 4}{x + 3}$.',
        solution: 'Vertikal: $x = -3$. Horisontal: $y = 2$. Nullpunkt: $x = 2$. $y$-skjæring: $f(0) = -\\frac{4}{3}$.',
      },
    },
    {
      id: 'bi-okonomi-3-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bi-okonomi-3-6-ex-6',
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
}

// Eksporter alle kapitler som et objekt
export const CHAPTERS_BI_OKONOMI: Record<string, TextbookChapter> = {
  'bi-okonomi-1-1': CHAPTER_BI_OKONOMI_1_1,
  'bi-okonomi-1-2': CHAPTER_BI_OKONOMI_1_2,
  'bi-okonomi-1-3': CHAPTER_BI_OKONOMI_1_3,
  'bi-okonomi-1-4': CHAPTER_BI_OKONOMI_1_4,
  'bi-okonomi-2-1': CHAPTER_BI_OKONOMI_2_1,
  'bi-okonomi-2-2': CHAPTER_BI_OKONOMI_2_2,
  'bi-okonomi-2-3': CHAPTER_BI_OKONOMI_2_3,
  'bi-okonomi-2-4': CHAPTER_BI_OKONOMI_2_4,
  'bi-okonomi-3-1': CHAPTER_BI_OKONOMI_3_1,
  'bi-okonomi-3-2': CHAPTER_BI_OKONOMI_3_2,
  'bi-okonomi-3-3': CHAPTER_BI_OKONOMI_3_3,
  'bi-okonomi-3-4': CHAPTER_BI_OKONOMI_3_4,
  'bi-okonomi-4-1': CHAPTER_BI_OKONOMI_4_1,
  'bi-okonomi-4-2': CHAPTER_BI_OKONOMI_4_2,
  'bi-okonomi-4-3': CHAPTER_BI_OKONOMI_4_3,
  'bi-okonomi-4-4': CHAPTER_BI_OKONOMI_4_4,
  'bi-okonomi-4-5': CHAPTER_BI_OKONOMI_4_5,
  'bi-okonomi-5-1': CHAPTER_BI_OKONOMI_5_1,
  'bi-okonomi-5-2': CHAPTER_BI_OKONOMI_5_2,
  'bi-okonomi-5-3': CHAPTER_BI_OKONOMI_5_3,
  'bi-okonomi-5-4': CHAPTER_BI_OKONOMI_5_4,
  'bi-okonomi-5-5': CHAPTER_BI_OKONOMI_5_5,
  'bi-okonomi-6-1': CHAPTER_BI_OKONOMI_6_1,
  'bi-okonomi-6-2': CHAPTER_BI_OKONOMI_6_2,
  'bi-okonomi-6-3': CHAPTER_BI_OKONOMI_6_3,
  'bi-okonomi-6-4': CHAPTER_BI_OKONOMI_6_4,
  'bi-okonomi-6-5': CHAPTER_BI_OKONOMI_6_5,
  'bi-okonomi-1-5': CHAPTER_BI_OKONOMI_1_5,
  'bi-okonomi-1-6': CHAPTER_BI_OKONOMI_1_6,
  'bi-okonomi-2-5': CHAPTER_BI_OKONOMI_2_5,
  'bi-okonomi-2-6': CHAPTER_BI_OKONOMI_2_6,
  'bi-okonomi-2-7': CHAPTER_BI_OKONOMI_2_7,
  'bi-okonomi-3-5': CHAPTER_BI_OKONOMI_3_5,
  'bi-okonomi-3-6': CHAPTER_BI_OKONOMI_3_6,
};
