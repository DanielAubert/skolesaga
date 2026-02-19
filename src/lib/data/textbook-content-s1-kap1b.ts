/**
 * Tekstbok kapitler for S1 - Tilleggskapitler (Algebra og Derivasjon)
 * Kapittel 1.4, 1.5, 3.6, 3.7, 3.8
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.4: Absoluttverdifunksjoner
// ============================================================================

export const CHAPTER_S1_1_4: TextbookChapter = {
  id: 's1-1-4',
  courseId: 's1',
  chapterNumber: '1.4',
  title: 'Absoluttverdifunksjoner',
  description: 'Absoluttverdifunksjoner, deres egenskaper og likninger/ulikheter med absoluttverdi.',
  estimatedMinutes: 50,
  competenceGoals: ['analysere og løse likninger med absoluttverdi'],
  content: [
    {
      id: 's1-1-4-intro',
      type: 'text',
      content: `## Absoluttverdifunksjonen

**Absoluttverdien** til et tall $x$ angir avstanden fra $x$ til 0 på tallinja:

$$|x| = \\begin{cases} x & \\text{hvis } x \\geq 0 \\\\ -x & \\text{hvis } x < 0 \\end{cases}$$

Eksempler: $|3| = 3$, $|-5| = 5$, $|0| = 0$.`,
    },
    {
      id: 's1-1-4-def',
      type: 'definition',
      title: 'Absoluttverdifunksjon',
      content: 'Funksjonen $f(x) = |x|$ har en V-formet graf med bunnpunkt i origo. Generelt gir $f(x) = |g(x)|$ en funksjon der alle negative verdier av $g(x)$ speiles om $x$-aksen.',
    },
    {
      id: 's1-1-4-regler',
      type: 'theorem',
      title: 'Regneregler for absoluttverdi',
      content: `For alle reelle tall $a$ og $b$:
1. $|a| \\geq 0$
2. $|a \\cdot b| = |a| \\cdot |b|$
3. $\\left|\\frac{a}{b}\\right| = \\frac{|a|}{|b|}$, $b \\neq 0$
4. $|a + b| \\leq |a| + |b|$ (trekantulikheten)
5. $|a|^2 = a^2$`,
    },
    {
      id: 's1-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Absoluttverdilikning',
      problem: 'Løs likningen $|2x - 3| = 5$.',
      solution: `**Tilfelle 1:** $2x - 3 = 5 \\Rightarrow x = 4$
**Tilfelle 2:** $2x - 3 = -5 \\Rightarrow x = -1$

**Svar:** $x = 4$ eller $x = -1$.`,
    },
    {
      id: 's1-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Absoluttverdifulikhet',
      problem: 'Løs ulikheten $|x + 1| < 4$.',
      solution: '$|x + 1| < 4$ gir $-4 < x + 1 < 4$, altså $-5 < x < 3$. **Svar:** $x \\in \\langle -5, 3 \\rangle$.',
    },
    {
      id: 's1-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-1-4-ex-1',
        number: '1.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene.',
        subTasks: [
          { label: 'a', task: '$|x - 2| = 7$', solution: '$x = 9$ eller $x = -5$.' },
          { label: 'b', task: '$|3x + 1| = 10$', solution: '$x = 3$ eller $x = -\\frac{11}{3}$.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-1-4-ex-2',
        number: '1.4.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs ulikhetene.',
        subTasks: [
          { label: 'a', task: '$|x| \\leq 3$', solution: '$x \\in [-3, 3]$.' },
          { label: 'b', task: '$|2x - 1| > 5$', solution: '$x > 3$ eller $x < -2$.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-1-4-ex-3',
        number: '1.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skisser grafen til $f(x) = |x^2 - 4|$.',
        subTasks: [
          { label: 'a', task: 'Finn nullpunktene til $f(x)$.', solution: '$x^2 - 4 = 0$ gir $x = \\pm 2$.' },
          { label: 'b', task: 'For hvilke $x$ er $x^2 - 4 < 0$?', solution: 'For $-2 < x < 2$.' },
          { label: 'c', task: 'Skisser grafen og begrunn formen.', solution: 'For $x \\in (-2,2)$ speiles parabelen om $x$-aksen.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-1-4-ex-4',
        number: '1.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs $|x + 2| = |3x - 4|$.',
        solution: '**Tilfelle 1:** $x + 2 = 3x - 4 \\Rightarrow x = 3$. **Tilfelle 2:** $x + 2 = -(3x - 4) \\Rightarrow x = \\frac{1}{2}$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-1-4-ex-5',
        number: '1.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs $|x - 1| + |x + 3| = 6$.',
        hints: ['Del opp i tilfeller basert på fortegnsskifte ved $x = 1$ og $x = -3$.'],
        solution: '**$x \\geq 1$:** $(x-1)+(x+3)=6 \\Rightarrow x=2$. **$-3 \\leq x < 1$:** $4=6$, ingen løsning. **$x < -3$:** $-(x-1)-(x+3)=6 \\Rightarrow x=-4$. Svar: $x=2$ eller $x=-4$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-1-4-ex-6',
        number: '1.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn alle $x$ slik at $|x^2 - 4| = 3x$.',
        hints: ['Høyre side krever $x \\geq 0$.'],
        solution: '**Tilfelle 1:** $x^2-4=3x \\Rightarrow (x-4)(x+1)=0$. Kun $x=4$. **Tilfelle 2:** $x^2-4=-3x \\Rightarrow (x+4)(x-1)=0$. Kun $x=1$. Svar: $x=1$ og $x=4$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5: Faktorisering og forenkling
// ============================================================================

export const CHAPTER_S1_1_5: TextbookChapter = {
  id: 's1-1-5',
  courseId: 's1',
  chapterNumber: '1.5',
  title: 'Faktorisering og forenkling',
  description: 'Systematisk faktorisering av rasjonale uttrykk og forenkling av brøkuttrykk.',
  estimatedMinutes: 50,
  competenceGoals: ['faktorisere og forenkle algebraiske uttrykk'],
  content: [
    {
      id: 's1-1-5-intro',
      type: 'text',
      content: `## Rasjonale uttrykk

Et **rasjonalt uttrykk** er en brøk der teller og nevner er polynomer. For å forenkle:
1. Faktoriser teller og nevner fullstendig
2. Forkort felles faktorer
3. Angi begrensninger på variabelen`,
    },
    {
      id: 's1-1-5-metoder',
      type: 'note',
      title: 'Faktoriseringsmetoder',
      content: `**Felles faktor:** $6x^2 + 9x = 3x(2x + 3)$
**Andregradsuttrykk:** $x^2 + 5x + 6 = (x+2)(x+3)$
**Konjugatsetningen:** $x^2 - 9 = (x-3)(x+3)$
**Kvadratsetningene:** $x^2 + 6x + 9 = (x+3)^2$
**Gruppering:** $x^3 + x^2 - x - 1 = x^2(x+1) - (x+1) = (x+1)(x^2-1)$`,
    },
    {
      id: 's1-1-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Forenkle rasjonalt uttrykk',
      problem: 'Forenkle $\\dfrac{x^2 - 4}{x^2 + 4x + 4}$.',
      solution: 'Teller: $(x-2)(x+2)$. Nevner: $(x+2)^2$. $$\\frac{(x-2)(x+2)}{(x+2)^2} = \\frac{x-2}{x+2}, \\quad x \\neq -2$$',
    },
    {
      id: 's1-1-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Addere rasjonale uttrykk',
      problem: 'Forenkle $\\dfrac{1}{x-1} + \\dfrac{2}{x+1}$.',
      solution: 'Fellesnevner $(x-1)(x+1)$: $$\\frac{(x+1) + 2(x-1)}{(x-1)(x+1)} = \\frac{3x-1}{x^2-1}$$',
    },
    {
      id: 's1-1-5-warning',
      type: 'warning',
      title: 'Vanlig feil',
      content: 'Man kan **bare** forkorte faktorer, ikke ledd! $\\frac{x+3}{x+5} \\neq \\frac{3}{5}$ (FEIL). Men $\\frac{x(x+3)}{x(x+5)} = \\frac{x+3}{x+5}$ er riktig.',
    },
    {
      id: 's1-1-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-1-5-ex-1',
        number: '1.5.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Faktoriser uttrykkene fullstendig.',
        subTasks: [
          { label: 'a', task: '$x^2 - 6x + 9$', solution: '$(x-3)^2$' },
          { label: 'b', task: '$2x^2 - 8$', solution: '$2(x-2)(x+2)$' },
          { label: 'c', task: '$x^3 - x$', solution: '$x(x-1)(x+1)$' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-1-5-ex-2',
        number: '1.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle de rasjonale uttrykkene.',
        subTasks: [
          { label: 'a', task: '$\\dfrac{x^2 - 9}{x^2 - 6x + 9}$', solution: '$\\frac{(x-3)(x+3)}{(x-3)^2} = \\frac{x+3}{x-3}$, $x \\neq 3$.' },
          { label: 'b', task: '$\\dfrac{x^2 + 3x}{x^2 + 5x + 6}$', solution: '$\\frac{x(x+3)}{(x+2)(x+3)} = \\frac{x}{x+2}$, $x \\neq -3$.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-1-5-ex-3',
        number: '1.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utfør regneoperasjonene og forenkle.',
        subTasks: [
          { label: 'a', task: '$\\dfrac{2}{x+1} - \\dfrac{1}{x-1}$', solution: '$\\frac{2(x-1)-(x+1)}{(x+1)(x-1)} = \\frac{x-3}{x^2-1}$' },
          { label: 'b', task: '$\\dfrac{x}{x-2} \\cdot \\dfrac{x^2-4}{x^2}$', solution: '$\\frac{x(x-2)(x+2)}{(x-2)x^2} = \\frac{x+2}{x}$, $x \\neq 2$.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-1-5-ex-4',
        number: '1.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle de sammensatte brøkuttrykkene.',
        subTasks: [
          { label: 'a', task: '$\\dfrac{\\frac{1}{x} - \\frac{1}{y}}{\\frac{1}{x} + \\frac{1}{y}}$', solution: 'Teller: $\\frac{y-x}{xy}$. Nevner: $\\frac{y+x}{xy}$. Svar: $\\frac{y-x}{y+x}$.' },
          { label: 'b', task: '$\\dfrac{1 - \\frac{4}{x^2}}{1 - \\frac{4}{x} + \\frac{4}{x^2}}$', solution: 'Gang med $x^2$: $\\frac{x^2-4}{x^2-4x+4} = \\frac{(x-2)(x+2)}{(x-2)^2} = \\frac{x+2}{x-2}$.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-1-5-ex-5',
        number: '1.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at $\\dfrac{x^3 - 8}{x^2 - 4} = \\dfrac{x^2 + 2x + 4}{x + 2}$ for $x \\neq 2$.',
        hints: ['Bruk $a^3 - b^3 = (a-b)(a^2+ab+b^2)$.'],
        solution: '$x^3-8=(x-2)(x^2+2x+4)$, $x^2-4=(x-2)(x+2)$. Forkort $(x-2)$: $\\frac{x^2+2x+4}{x+2}$. $\\square$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.6: Derivasjon av trigonometriske funksjoner
// ============================================================================

export const CHAPTER_S1_3_6: TextbookChapter = {
  id: 's1-3-6',
  courseId: 's1',
  chapterNumber: '3.6',
  title: 'Derivasjon av trigonometriske funksjoner',
  description: 'Deriver sinus, cosinus og tangent, samt sammensatte trigonometriske funksjoner.',
  estimatedMinutes: 50,
  competenceGoals: ['derivere trigonometriske funksjoner'],
  content: [
    {
      id: 's1-3-6-intro',
      type: 'text',
      content: '## Derivasjon av trigonometriske funksjoner\n\nVi bruker **radianer** ved derivasjon av trigonometriske funksjoner.',
    },
    {
      id: 's1-3-6-regler',
      type: 'theorem',
      title: 'Derivasjonsregler',
      content: '$$\\frac{d}{dx}[\\sin x] = \\cos x \\qquad \\frac{d}{dx}[\\cos x] = -\\sin x \\qquad \\frac{d}{dx}[\\tan x] = \\frac{1}{\\cos^2 x}$$\n\nMed kjerneregelen ($u = g(x)$):\n$$[\\sin(u)]\' = \\cos(u) \\cdot u\' \\qquad [\\cos(u)]\' = -\\sin(u) \\cdot u\'$$',
    },
    {
      id: 's1-3-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Kjerneregelen',
      problem: 'Deriver $f(x) = \\sin(3x)$ og $g(x) = \\cos(x^2)$.',
      solution: "$f'(x) = \\cos(3x) \\cdot 3 = 3\\cos(3x)$\n\n$g'(x) = -\\sin(x^2) \\cdot 2x = -2x\\sin(x^2)$",
    },
    {
      id: 's1-3-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Produktregel',
      problem: 'Deriver $h(x) = x^2 \\sin x$.',
      solution: "$h'(x) = 2x\\sin x + x^2\\cos x = x(2\\sin x + x\\cos x)$.",
    },
    {
      id: 's1-3-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-3-6-ex-1',
        number: '3.6.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sin(5x)$', solution: "$f'(x) = 5\\cos(5x)$" },
          { label: 'b', task: '$g(x) = \\cos(2x+1)$', solution: "$g'(x) = -2\\sin(2x+1)$" },
          { label: 'c', task: '$h(x) = 3\\tan(x)$', solution: "$h'(x) = \\frac{3}{\\cos^2 x}$" },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-3-6-ex-2',
        number: '3.6.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x\\cos x$', solution: "$f'(x) = \\cos x - x\\sin x$" },
          { label: 'b', task: '$g(x) = \\sin^2(x)$', solution: "$g'(x) = 2\\sin x \\cos x = \\sin(2x)$" },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-3-6-ex-3',
        number: '3.6.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tangentlinjen.',
        subTasks: [
          { label: 'a', task: 'Til $f(x) = \\sin x$ i $x = \\frac{\\pi}{3}$.', solution: "$f'(\\frac{\\pi}{3}) = \\frac{1}{2}$. Tangent: $y = \\frac{1}{2}(x - \\frac{\\pi}{3}) + \\frac{\\sqrt{3}}{2}$." },
          { label: 'b', task: 'Til $g(x) = \\cos(2x)$ i $x = 0$.', solution: "$g(0) = 1$, $g'(0) = 0$. Tangent: $y = 1$." },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-3-6-ex-4',
        number: '3.6.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Deriver $f(x) = \\dfrac{\\sin x}{x}$ og finn $f'(\\pi)$.",
        solution: "$f'(x) = \\frac{x\\cos x - \\sin x}{x^2}$. $f'(\\pi) = \\frac{\\pi(-1)-0}{\\pi^2} = -\\frac{1}{\\pi}$.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-3-6-ex-5',
        number: '3.6.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Finn stasjonære punkter til $f(x)=2\\sin x+\\cos(2x)$ for $x \\in [0,2\\pi]$.",
        hints: ["Bruk $\\cos(2x)=1-2\\sin^2 x$ for å skrive $f'(x)$ som uttrykk i $\\sin x$."],
        solution: "$f'(x) = 2\\cos x - 2\\sin(2x) = 2\\cos x(1-2\\sin x)=0$. $\\cos x=0$: $x=\\frac{\\pi}{2}, \\frac{3\\pi}{2}$. $\\sin x=\\frac{1}{2}$: $x=\\frac{\\pi}{6}, \\frac{5\\pi}{6}$.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.7: Implisitt derivasjon
// ============================================================================

export const CHAPTER_S1_3_7: TextbookChapter = {
  id: 's1-3-7',
  courseId: 's1',
  chapterNumber: '3.7',
  title: 'Implisitt derivasjon',
  description: 'Deriver implisitt definerte funksjoner der y ikke er uttrykt eksplisitt som funksjon av x.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke implisitt derivasjon til å finne den deriverte'],
  content: [
    {
      id: 's1-3-7-intro',
      type: 'text',
      content: '## Implisitt derivasjon\n\nNoen ganger er sammenhengen mellom $x$ og $y$ gitt ved en likning (f.eks. $x^2 + y^2 = 25$) uten at $y$ er løst ut. Vi finner $\\frac{dy}{dx}$ ved å derivere begge sider med hensyn på $x$ og bruke kjerneregelen på $y$-leddene:\n\n$$\\frac{d}{dx}[y^n] = n \\cdot y^{n-1} \\cdot \\frac{dy}{dx}$$',
    },
    {
      id: 's1-3-7-tip',
      type: 'tip',
      content: '**Fremgangsmåte:**\n1. Deriver begge sider med hensyn på $x$\n2. Hvert $y$-ledd gir en faktor $\\frac{dy}{dx}$ (kjerneregelen)\n3. Samle alle $\\frac{dy}{dx}$-ledd på en side\n4. Faktoriser ut $\\frac{dy}{dx}$ og del',
    },
    {
      id: 's1-3-7-example-1',
      type: 'example',
      title: 'Eksempel 1: Sirkel',
      problem: 'Finn $\\frac{dy}{dx}$ for $x^2 + y^2 = 25$.',
      solution: 'Deriver: $2x + 2y\\frac{dy}{dx} = 0$. Løs: $\\frac{dy}{dx} = -\\frac{x}{y}$.\n\nI $(3,4)$: $\\frac{dy}{dx} = -\\frac{3}{4}$.',
    },
    {
      id: 's1-3-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Produkt av x og y',
      problem: 'Finn $\\frac{dy}{dx}$ for $xy + y^2 = 1$.',
      solution: 'Produktregelen på $xy$: $y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$.\n\n$$\\frac{dy}{dx}(x+2y) = -y \\quad \\Rightarrow \\quad \\frac{dy}{dx} = -\\frac{y}{x+2y}$$',
    },
    {
      id: 's1-3-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-3-7-ex-1',
        number: '3.7.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn $\\frac{dy}{dx}$ ved implisitt derivasjon.',
        subTasks: [
          { label: 'a', task: '$x^2 + y^2 = 16$', solution: "$\\frac{dy}{dx} = -\\frac{x}{y}$" },
          { label: 'b', task: '$3x + 4y = 12$', solution: "$\\frac{dy}{dx} = -\\frac{3}{4}$" },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-3-7-ex-2',
        number: '3.7.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn $\\frac{dy}{dx}$.',
        subTasks: [
          { label: 'a', task: '$x^2y + xy^2 = 6$', solution: "$\\frac{dy}{dx} = -\\frac{2xy+y^2}{x^2+2xy}$" },
          { label: 'b', task: '$\\sin(y) = x$', solution: "$\\frac{dy}{dx} = \\frac{1}{\\cos y}$" },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-3-7-ex-3',
        number: '3.7.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tangentlinjen til $x^2 + xy + y^2 = 7$ i punktet $(1,2)$.',
        solution: "$2x+y+x\\frac{dy}{dx}+2y\\frac{dy}{dx}=0$. I $(1,2)$: $\\frac{dy}{dx}=-\\frac{4}{5}$. Tangent: $y = -\\frac{4}{5}x + \\frac{14}{5}$.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-3-7-ex-4',
        number: '3.7.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn $\\frac{dy}{dx}$ for $e^{xy} = x + y$.',
        hints: ['Bruk kjerneregelen og produktregelen på $xy$ i eksponenten.'],
        solution: "$e^{xy}(y+x\\frac{dy}{dx})=1+\\frac{dy}{dx}$. $\\frac{dy}{dx}(xe^{xy}-1)=1-ye^{xy}$. $\\frac{dy}{dx}=\\frac{1-ye^{xy}}{xe^{xy}-1}$.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-7-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-3-7-ex-5',
        number: '3.7.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at tangenten til ellipsen $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$ i $(x_0,y_0)$ er $\\frac{x_0 x}{a^2}+\\frac{y_0 y}{b^2}=1$.',
        solution: "$\\frac{2x}{a^2}+\\frac{2y}{b^2}\\frac{dy}{dx}=0 \\Rightarrow \\frac{dy}{dx}=-\\frac{b^2 x_0}{a^2 y_0}$. Tangent: $y-y_0=-\\frac{b^2 x_0}{a^2 y_0}(x-x_0)$. Omforming gir $\\frac{x_0 x}{a^2}+\\frac{y_0 y}{b^2}=\\frac{x_0^2}{a^2}+\\frac{y_0^2}{b^2}=1$. $\\square$",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.8: Relaterte rater
// ============================================================================

export const CHAPTER_S1_3_8: TextbookChapter = {
  id: 's1-3-8',
  courseId: 's1',
  chapterNumber: '3.8',
  title: 'Relaterte rater',
  description: 'Bruk derivasjon til å finne sammenhengen mellom endringsrater for relaterte størrelser.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke derivasjon til å løse praktiske problemer med relaterte rater'],
  content: [
    {
      id: 's1-3-8-intro',
      type: 'text',
      content: '## Relaterte rater\n\nNår størrelser endrer seg over tid og er relatert gjennom en likning, finner vi sammenhengen mellom endringsratene ved å derivere med hensyn på $t$.\n\n**Fremgangsmåte:**\n1. Identifiser variable og kjente/ukjente rater\n2. Finn en likning som relaterer størrelsene\n3. Deriver begge sider med hensyn på $t$\n4. Sett inn kjente verdier og løs',
    },
    {
      id: 's1-3-8-example-1',
      type: 'example',
      title: 'Eksempel 1: Ekspanderende sirkel',
      problem: 'Radiusen øker med $2$ cm/s. Hvor raskt øker arealet når $r = 5$ cm?',
      solution: '$A = \\pi r^2$. Deriver: $\\frac{dA}{dt} = 2\\pi r \\cdot \\frac{dr}{dt} = 2\\pi(5)(2) = 20\\pi \\approx 62{,}8$ cm$^2$/s.',
    },
    {
      id: 's1-3-8-example-2',
      type: 'example',
      title: 'Eksempel 2: Kjegleformet beholder',
      problem: 'Vann helles i en kjegle (radius 3 m, høyde 6 m) med 2 m$^3$/min. Hvor raskt stiger vannet når det er 4 m dypt?',
      solution: '$r = \\frac{h}{2}$. $V = \\frac{\\pi h^3}{12}$. $\\frac{dV}{dt} = \\frac{\\pi h^2}{4}\\frac{dh}{dt}$. $2 = \\frac{\\pi \\cdot 16}{4}\\frac{dh}{dt} \\Rightarrow \\frac{dh}{dt} = \\frac{1}{2\\pi} \\approx 0{,}16$ m/min.',
    },
    {
      id: 's1-3-8-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-3-8-ex-1',
        number: '3.8.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sidene i et kvadrat øker med 3 cm/s. Hvor raskt øker arealet når siden er 10 cm?',
        solution: "$A = s^2$. $\\frac{dA}{dt} = 2s\\frac{ds}{dt} = 2(10)(3) = 60$ cm$^2$/s.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-8-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-3-8-ex-2',
        number: '3.8.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'En ballong blåses opp slik at volumet øker med 100 cm$^3$/s.',
        subTasks: [
          { label: 'a', task: 'Hvor raskt øker radiusen når $r = 10$ cm?', solution: "$\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}$. $\\frac{dr}{dt}=\\frac{100}{400\\pi}=\\frac{1}{4\\pi} \\approx 0{,}08$ cm/s." },
          { label: 'b', task: 'Hvor raskt øker overflatearealet da?', solution: "$\\frac{dS}{dt}=8\\pi r\\frac{dr}{dt}=8\\pi(10)\\frac{1}{4\\pi}=20$ cm$^2$/s." },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-8-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-3-8-ex-3',
        number: '3.8.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En 5 m stige lener mot en vegg. Bunnen glir ut med 0,5 m/s. Hvor raskt synker toppen når bunnen er 3 m fra veggen?',
        hints: ['Bruk Pytagoras: $x^2 + y^2 = 25$.'],
        solution: "$x^2+y^2=25$. Når $x=3$: $y=4$. Deriver: $2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0$. $\\frac{dy}{dt} = -\\frac{3 \\cdot 0{,}5}{4} = -0{,}375$ m/s.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-8-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-3-8-ex-4',
        number: '3.8.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bil A kjører nordover med 60 km/t, bil B østover med 80 km/t fra samme punkt. Hvor raskt øker avstanden etter 2 timer?',
        solution: "$a=120$, $b=160$, $d=\\sqrt{120^2+160^2}=200$. $2d\\frac{dd}{dt}=2a\\frac{da}{dt}+2b\\frac{db}{dt}$. $200\\frac{dd}{dt}=120(60)+160(80)=20000$. $\\frac{dd}{dt}=100$ km/t.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-8-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-3-8-ex-5',
        number: '3.8.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En lykt står 6 m over bakken. En person (1,8 m) går bort med 1,5 m/s. Hvor raskt vokser skyggen?',
        hints: ['Bruk formlike trekanter.'],
        solution: "La $x$ = avstand, $s$ = skyggelengde. $\\frac{6}{x+s}=\\frac{1{,}8}{s}$. $s=\\frac{3}{7}x$. $\\frac{ds}{dt}=\\frac{3}{7}(1{,}5)=\\frac{9}{14}\\approx 0{,}64$ m/s.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-8-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-3-8-ex-6',
        number: '3.8.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et tau festet 4 m over vannet dras inn med 1 m/s. Hvor raskt nærmer båten seg bryggen når det er 10 m tau ute?',
        solution: "$L^2=x^2+16$. $L=10$: $x=\\sqrt{84}$. $2L\\frac{dL}{dt}=2x\\frac{dx}{dt}$. $\\frac{dx}{dt}=\\frac{10(-1)}{\\sqrt{84}}=-\\frac{10}{2\\sqrt{21}}\\approx -1{,}09$ m/s.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter
// ============================================================================

export const S1_KAP1B_CHAPTERS = [CHAPTER_S1_1_4, CHAPTER_S1_1_5, CHAPTER_S1_3_6, CHAPTER_S1_3_7, CHAPTER_S1_3_8];
