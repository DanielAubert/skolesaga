/**
 * Tekstbok kapitler for R1 - Kapittel 1.4-1.5 (Algebra utvidelse) og 9.1-9.2 (Bevisfoering)
 * Seksjon 1 utvidelser: Rasjonale uttrykk, Ulikheter og absoluttverdier
 * Seksjon 9: Bevis og bevisstrategier, Matematisk argumentasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.4: Rasjonale uttrykk
// ============================================================================

export const CHAPTER_R1_1_4: TextbookChapter = {
  id: 'r1-1-4',
  courseId: 'r1',
  chapterNumber: '1.4',
  title: 'Rasjonale uttrykk',
  description: 'Laer om forkorting, fellesnevner, addisjon, subtraksjon, multiplikasjon og divisjon av algebraiske broeker.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forkorte rasjonale uttrykk ved faktorisering',
    'finne fellesnevner for algebraiske broeker',
    'addere og subtrahere rasjonale uttrykk',
    'multiplisere og dividere rasjonale uttrykk',
    'bestemme definisjonsmengden til rasjonale uttrykk',
  ],
  content: [
    {
      id: 'r1-1-4-intro',
      type: 'text',
      content: `## Rasjonale uttrykk

Et rasjonalt uttrykk er en broek der teller og nevner er polynomer. Du kjenner allerede til vanlig broekregning med tall -- naa skal vi utvide dette til algebraiske uttrykk.

Prinsippene er de samme: vi forkorter ved aa dele paa felles faktorer, og vi finner fellesnevner naar vi skal addere eller subtrahere. Forskjellen er at vi naa maa faktorisere polynomer i stedet for aa finne primfaktorer av tall.`,
    },
    {
      id: 'r1-1-4-def-rasjonalt',
      type: 'definition',
      title: 'Rasjonalt uttrykk',
      content: `Et **rasjonalt uttrykk** er et uttrykk paa formen:

$$\\frac{P(x)}{Q(x)}$$

der $P(x)$ og $Q(x)$ er polynomer og $Q(x) \\neq 0$.

**Definisjonsmengden** er mengden av alle $x$-verdier der nevneren ikke er null:

$$D = \\{ x \\in \\mathbb{R} \\mid Q(x) \\neq 0 \\}$$`,
    },
    {
      id: 'r1-1-4-example-defmengde',
      type: 'example',
      title: 'Eksempel 1: Definisjonsmengde',
      problem: `Finn definisjonsmengden til uttrykkene:
a) $\\frac{x+3}{x-2}$
b) $\\frac{x^2}{x^2-4}$
c) $\\frac{1}{x^2+1}$`,
      solution: `**Loesning:**

a) Nevneren er null naar $x - 2 = 0$, dvs. $x = 2$. $D = \\mathbb{R} \\setminus \\{2\\}$

b) $x^2 - 4 = (x-2)(x+2) = 0$ gir $x = 2$ eller $x = -2$. $D = \\mathbb{R} \\setminus \\{-2, 2\\}$

c) $x^2 + 1 \\geq 1 > 0$ for alle reelle $x$. $D = \\mathbb{R}$`,
    },
    {
      id: 'r1-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn definisjonsmengden til de rasjonale uttrykkene.',
        subTasks: [
          { label: 'a', task: '$\\frac{5}{x+1}$', solution: '$x + 1 \\neq 0$, dvs. $D = \\mathbb{R} \\setminus \\{-1\\}$' },
          { label: 'b', task: '$\\frac{x}{x^2 - 9}$', solution: '$(x-3)(x+3) \\neq 0$, dvs. $D = \\mathbb{R} \\setminus \\{-3, 3\\}$' },
          { label: 'c', task: '$\\frac{x+2}{x^2 + 5x + 6}$', solution: '$(x+2)(x+3) \\neq 0$, dvs. $D = \\mathbb{R} \\setminus \\{-3, -2\\}$' },
        ],
        hints: ['Sett nevneren lik null og loes likningen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-forkorting-intro',
      type: 'text',
      content: `## Forkorting av rasjonale uttrykk

For aa forkorte et rasjonalt uttrykk faktoriserer vi teller og nevner, og deler deretter ut felles faktorer.

**Fremgangsmaate:**
1. Faktoriser telleren $P(x)$
2. Faktoriser nevneren $Q(x)$
3. Del ut felles faktorer

Vi kan bare forkorte **faktorer**, aldri enkeltledd.`,
    },
    {
      id: 'r1-1-4-warning-forkorting',
      type: 'warning',
      title: 'Vanlig feil ved forkorting',
      content: `Vi kan **ikke** forkorte enkeltledd i teller og nevner:

$$\\frac{x^2 + 1}{x} \\neq x + 1 \\quad \\text{(FEIL!)}$$

Vi kan bare forkorte naar hele teller og nevner er faktorisert:

$$\\frac{x(x + 1)}{x} = x + 1 \\quad \\text{(for } x \\neq 0\\text{)}$$`,
    },
    {
      id: 'r1-1-4-example-forkorting',
      type: 'example',
      title: 'Eksempel 2: Forkorting av rasjonale uttrykk',
      problem: `Forkort uttrykkene:
a) $\\frac{x^2 - 4}{x^2 + 4x + 4}$
b) $\\frac{x^2 - 5x + 6}{x^2 - 4x + 4}$`,
      solution: `**Loesning:**

a) $\\frac{x^2 - 4}{x^2 + 4x + 4} = \\frac{(x-2)(x+2)}{(x+2)^2} = \\frac{x-2}{x+2}$, for $x \\neq -2$

b) $\\frac{x^2 - 5x + 6}{x^2 - 4x + 4} = \\frac{(x-2)(x-3)}{(x-2)^2} = \\frac{x-3}{x-2}$, for $x \\neq 2$`,
    },
    {
      id: 'r1-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forkort de rasjonale uttrykkene.',
        subTasks: [
          { label: 'a', task: '$\\frac{6x^2}{3x}$', solution: '$2x$, for $x \\neq 0$' },
          { label: 'b', task: '$\\frac{x^2 - 1}{x + 1}$', solution: '$\\frac{(x-1)(x+1)}{x+1} = x - 1$, for $x \\neq -1$' },
          { label: 'c', task: '$\\frac{x^2 + 3x}{x^2 + 5x + 6}$', solution: '$\\frac{x(x+3)}{(x+2)(x+3)} = \\frac{x}{x+2}$, for $x \\neq -3$' },
        ],
        hints: ['Faktoriser teller og nevner hver for seg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forkort de rasjonale uttrykkene.',
        subTasks: [
          { label: 'a', task: '$\\frac{2x^2 - 8}{x^2 - 4x + 4}$', solution: '$\\frac{2(x-2)(x+2)}{(x-2)^2} = \\frac{2(x+2)}{x-2}$, for $x \\neq 2$' },
          { label: 'b', task: '$\\frac{x^3 - x}{x^2 - 1}$', solution: '$\\frac{x(x^2-1)}{x^2-1} = x$, for $x \\neq \\pm 1$' },
          { label: 'c', task: '$\\frac{x^2 - 6x + 9}{x^2 - 9}$', solution: '$\\frac{(x-3)^2}{(x-3)(x+3)} = \\frac{x-3}{x+3}$, for $x \\neq 3$' },
        ],
        hints: ['Se etter konjugatsetningen, kvadratsetningene og fellesfaktor'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-theorem-multdiv',
      type: 'theorem',
      title: 'Multiplikasjon og divisjon av rasjonale uttrykk',
      content: `**Multiplikasjon:** $\\frac{P(x)}{Q(x)} \\cdot \\frac{R(x)}{S(x)} = \\frac{P(x) \\cdot R(x)}{Q(x) \\cdot S(x)}$

**Divisjon:** $\\frac{P(x)}{Q(x)} \\div \\frac{R(x)}{S(x)} = \\frac{P(x)}{Q(x)} \\cdot \\frac{S(x)}{R(x)}$

**Tips:** Faktoriser og forkort **foer** du ganger ut.`,
    },
    {
      id: 'r1-1-4-example-mult',
      type: 'example',
      title: 'Eksempel 3: Multiplikasjon',
      problem: `Regn ut og forkort: $\\frac{x^2 - 1}{x + 3} \\cdot \\frac{x^2 + 3x}{x^2 + x}$`,
      solution: `**Loesning:**

$$\\frac{(x-1)(x+1)}{x+3} \\cdot \\frac{x(x+3)}{x(x+1)} = x - 1$$

for $x \\neq 0, -1, -3$.`,
    },
    {
      id: 'r1-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forkort.',
        subTasks: [
          { label: 'a', task: '$\\frac{x+2}{x-1} \\cdot \\frac{x-1}{x+2}$', solution: '$1$, for $x \\neq 1, -2$' },
          { label: 'b', task: '$\\frac{x^2 - 4}{x} \\cdot \\frac{x^2}{x + 2}$', solution: '$x(x-2) = x^2 - 2x$, for $x \\neq 0, -2$' },
          { label: 'c', task: '$\\frac{x^2 + 2x + 1}{x^2 - 9} \\cdot \\frac{x - 3}{x + 1}$', solution: '$\\frac{(x+1)^2(x-3)}{(x-3)(x+3)(x+1)} = \\frac{x+1}{x+3}$, for $x \\neq 3, -1$' },
        ],
        hints: ['Faktoriser foer du ganger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forkort.',
        subTasks: [
          { label: 'a', task: '$\\frac{x^2 - 1}{x + 3} \\div \\frac{x - 1}{x^2 - 9}$', solution: '$(x+1)(x-3) = x^2 - 2x - 3$' },
          { label: 'b', task: '$\\frac{4x^2 - 1}{2x + 3} \\div \\frac{2x - 1}{4x + 6}$', solution: '$2(2x+1) = 4x + 2$' },
        ],
        hints: ['Ved divisjon: gang med den omvendte broeken'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-addsub-intro',
      type: 'text',
      content: `## Addisjon og subtraksjon

For aa addere eller subtrahere rasjonale uttrykk trenger vi felles nevner.

**Fremgangsmaate:**
1. Faktoriser alle nevnerne
2. Finn minste felles nevner
3. Utvid hver broek
4. Adder eller subtraher tellerne
5. Forkort om mulig`,
    },
    {
      id: 'r1-1-4-example-add',
      type: 'example',
      title: 'Eksempel 4: Addisjon med ulik nevner',
      problem: `Regn ut: $\\frac{2}{x-1} + \\frac{3}{x+2}$`,
      solution: `**Loesning:**

Fellesnevneren er $(x-1)(x+2)$:

$$\\frac{2(x+2) + 3(x-1)}{(x-1)(x+2)} = \\frac{5x + 1}{(x-1)(x+2)}$$`,
    },
    {
      id: 'r1-1-4-example-sub',
      type: 'example',
      title: 'Eksempel 5: Subtraksjon med faktorisering',
      problem: `Regn ut: $\\frac{x}{x^2 - 4} - \\frac{1}{x + 2}$`,
      solution: `**Loesning:**

Faktoriser: $\\frac{x}{(x-2)(x+2)} - \\frac{1}{x+2}$. Fellesnevner $(x-2)(x+2)$:

$$\\frac{x - (x-2)}{(x-2)(x+2)} = \\frac{2}{(x-2)(x+2)}$$`,
    },
    {
      id: 'r1-1-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut og forkort.',
        subTasks: [
          { label: 'a', task: '$\\frac{3x}{x-2} + \\frac{4}{x-2}$', solution: '$\\frac{3x + 4}{x-2}$' },
          { label: 'b', task: '$\\frac{x+1}{x} - \\frac{1}{x}$', solution: '$1$, for $x \\neq 0$' },
          { label: 'c', task: '$\\frac{5}{x+3} + \\frac{2}{x-1}$', solution: '$\\frac{7x+1}{(x+3)(x-1)}$' },
        ],
        hints: ['Like nevnere: adder tellerne direkte'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forkort.',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{x-1} - \\frac{1}{x+1}$', solution: '$\\frac{2}{x^2-1}$' },
          { label: 'b', task: '$\\frac{x}{x+2} + \\frac{x}{x-2}$', solution: '$\\frac{2x^2}{x^2-4}$' },
          { label: 'c', task: '$\\frac{2}{x^2-1} + \\frac{1}{x+1}$', solution: '$\\frac{1}{x-1}$, for $x \\neq -1$' },
        ],
        hints: ['Faktoriser nevnerne foerst'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forkort.',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{x-3} - \\frac{3}{x-3} + 1$', solution: '$2$, for $x \\neq 3$' },
          { label: 'b', task: '$\\frac{1}{x} + \\frac{1}{x+1} + \\frac{1}{x+2}$', solution: '$\\frac{3x^2+6x+2}{x(x+1)(x+2)}$' },
        ],
        hints: ['Skriv heltall som broek med felles nevner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-example-sammensatt',
      type: 'example',
      title: 'Eksempel 6: Sammensatt broek',
      problem: `Forenkle: $\\frac{\\frac{1}{x} + \\frac{1}{y}}{\\frac{1}{x} - \\frac{1}{y}}$`,
      solution: `**Loesning:**

Gang teller og nevner med $xy$: $\\frac{y + x}{y - x} = \\frac{x+y}{y-x}$`,
    },
    {
      id: 'r1-1-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle de sammensatte broekene.',
        subTasks: [
          { label: 'a', task: '$\\frac{\\frac{1}{x} + 1}{\\frac{1}{x} - 1}$', solution: '$\\frac{1 + x}{1 - x}$, for $x \\neq 0, 1$' },
          { label: 'b', task: '$\\frac{1 - \\frac{1}{x^2}}{1 - \\frac{1}{x}}$', solution: '$\\frac{x+1}{x}$, for $x \\neq 0, 1$' },
        ],
        hints: ['Finn fellesnevneren til de indre broekene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-example-likning',
      type: 'example',
      title: 'Eksempel 7: Likning med rasjonale uttrykk',
      problem: `Loes: $\\frac{2}{x-1} + \\frac{3}{x+1} = \\frac{5}{x^2-1}$`,
      solution: `**Loesning:**

Fellesnevner $(x-1)(x+1)$. Gang begge sider:

$$2(x+1) + 3(x-1) = 5 \\quad \\Rightarrow \\quad 5x - 1 = 5 \\quad \\Rightarrow \\quad x = \\frac{6}{5}$$

Sjekk: gyldig (ingen null i nevner).`,
    },
    {
      id: 'r1-1-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Loes likningene.',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{x} = \\frac{1}{x-2}$', solution: '$3(x-2) = x$, $x = 3$. Gyldig.' },
          { label: 'b', task: '$\\frac{x}{x+1} = \\frac{2}{x-1}$', solution: '$x^2 - 3x - 2 = 0$. $x = \\frac{3 \\pm \\sqrt{17}}{2}$.' },
          { label: 'c', task: '$\\frac{1}{x-2} + \\frac{1}{x+2} = \\frac{4}{x^2-4}$', solution: '$2x = 4$, $x = 2$. Men $x=2$ gir null i nevner. **Ingen loesning.**' },
        ],
        hints: ['Gang med fellesnevneren', 'Sjekk alltid gyldighet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Loes likningene.',
        subTasks: [
          { label: 'a', task: '$\\frac{x+1}{x-2} - \\frac{x-1}{x+2} = \\frac{8}{x^2-4}$', solution: '$6x = 8$, $x = \\frac{4}{3}$. Gyldig.' },
          { label: 'b', task: '$\\frac{2x}{x^2+x} = \\frac{1}{x} + \\frac{1}{x+1}$', solution: '$2x = 2x+1$, $0 = 1$. **Ingen loesning.**' },
        ],
        hints: ['Faktoriser nevnerne foerst'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut og forkort.',
        subTasks: [
          { label: 'a', task: '$\\frac{x^2 - 4}{x^2 + x - 6} \\cdot \\frac{x^2 - 9}{x^2 - x - 2}$', solution: '$\\frac{(x+2)(x-3)}{(x-2)(x+1)}$' },
          { label: 'b', task: '$\\frac{x}{x^2-x-2} + \\frac{1}{x^2-4}$', solution: '$\\frac{x^2+3x+1}{(x-2)(x+1)(x+2)}$' },
        ],
        hints: ['Faktoriser alle polynomene fullstendig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at $\\frac{1}{(x-1)(x-2)} + \\frac{1}{(x-2)(x-3)} + \\frac{1}{(x-3)(x-4)}$ kan skrives som $\\frac{A}{(x-1)(x-4)}$. Finn $A$.',
        solution: 'Bruk teleskopering: summen blir $\\frac{1}{x-4} - \\frac{1}{x-1} = \\frac{3}{(x-1)(x-4)}$. Altsa $A = 3$.',
        hints: ['Bruk delbroekoppspalting'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-1-4-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et roer fyller et basseng paa $a$ timer. Et annet roer fyller det paa $b$ timer. a) Skriv opp et uttrykk for andelen som fylles per time naar begge roerene er aapne. b) Hvis $a = 3$ og $b = 6$, hvor lang tid tar det?',
        solution: 'a) $\\frac{1}{a} + \\frac{1}{b} = \\frac{a+b}{ab}$ per time. b) $\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}$. Det tar $2$ timer.',
        hints: ['Tenk paa andel per time for hvert roer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Rasjonalt uttrykk:** $\\frac{P(x)}{Q(x)}$ der $P$ og $Q$ er polynomer.

**Definisjonsmengde:** Alle $x$ der $Q(x) \\neq 0$.

**Forkorting:** Faktoriser teller og nevner, del ut felles faktorer.

**Multiplikasjon:** $\\frac{P}{Q} \\cdot \\frac{R}{S} = \\frac{PR}{QS}$ -- faktoriser og forkort foerst.

**Divisjon:** $\\frac{P}{Q} \\div \\frac{R}{S} = \\frac{P}{Q} \\cdot \\frac{S}{R}$.

**Addisjon/subtraksjon:** Finn fellesnevner, utvid, adder/subtraher tellerne.

**Likninger:** Gang med fellesnevner. Sjekk alltid at loesningen ikke gir null i nevneren.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5: Ulikheter og absoluttverdier
// ============================================================================

export const CHAPTER_R1_1_5: TextbookChapter = {
  id: 'r1-1-5',
  courseId: 'r1',
  chapterNumber: '1.5',
  title: 'Ulikheter og absoluttverdier',
  description: 'Laer om lineaere og kvadratiske ulikheter, fortegnslinje, absoluttverdier og intervallnotasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'loese lineaere ulikheter og angi loesningen med intervallnotasjon',
    'loese kvadratiske ulikheter ved hjelp av fortegnslinje',
    'forstaa definisjonen av absoluttverdi og loese likninger og ulikheter med absoluttverdi',
    'bruke intervallnotasjon og mengdenotasjon',
  ],
  content: [
    {
      id: 'r1-1-5-intro',
      type: 'text',
      content: `## Ulikheter og absoluttverdier

En **ulikhet** er et utsagn om at et uttrykk er stoerre enn, mindre enn, eller ulikt et annet. I motsetning til likninger, der loesningen ofte er enkeltpunkter, er loesningen paa en ulikhet vanligvis et **intervall** eller en forening av intervaller.`,
    },
    {
      id: 'r1-1-5-def-intervaller',
      type: 'definition',
      title: 'Intervallnotasjon',
      content: `| Notasjon | Mengde | Beskrivelse |
|----------|--------|-------------|
| $(a, b)$ | $\\{x \\mid a < x < b\\}$ | Aapent intervall |
| $[a, b]$ | $\\{x \\mid a \\leq x \\leq b\\}$ | Lukket intervall |
| $[a, b)$ | $\\{x \\mid a \\leq x < b\\}$ | Halvaapent |
| $(a, \\infty)$ | $\\{x \\mid x > a\\}$ | Alt stoerre enn $a$ |
| $(-\\infty, b]$ | $\\{x \\mid x \\leq b\\}$ | Alt opp til og med $b$ |

**Merk:** Alltid rund parentes mot $\\pm \\infty$.`,
    },
    {
      id: 'r1-1-5-theorem-regler',
      type: 'theorem',
      title: 'Regneregler for ulikheter',
      content: `For alle reelle tall $a$, $b$ og $c$:

1. **Addisjon:** Hvis $a < b$, saa er $a + c < b + c$
2. **Positivt tall:** Hvis $a < b$ og $c > 0$, saa er $ac < bc$
3. **Negativt tall:** Hvis $a < b$ og $c < 0$, saa er $ac > bc$ (tegnet **snur**)`,
    },
    {
      id: 'r1-1-5-example-lineaer',
      type: 'example',
      title: 'Eksempel 1: Lineaere ulikheter',
      problem: `Loes:\na) $3x - 7 < 2x + 5$\nb) $-2x + 3 \\geq 7$`,
      solution: `**Loesning:**

a) $x < 12$. Svar: $(-\\infty, 12)$.

b) $-2x \\geq 4$. Deler med $-2$ og **snur**: $x \\leq -2$. Svar: $(-\\infty, -2]$.`,
    },
    {
      id: 'r1-1-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Loes ulikhetene og oppgi svaret med intervallnotasjon.',
        subTasks: [
          { label: 'a', task: '$2x + 1 > 5$', solution: '$x > 2$. Svar: $(2, \\infty)$' },
          { label: 'b', task: '$4 - 3x \\leq 10$', solution: '$x \\geq -2$. Svar: $[-2, \\infty)$' },
          { label: 'c', task: '$5x - 2 < 3x + 8$', solution: '$x < 5$. Svar: $(-\\infty, 5)$' },
          { label: 'd', task: '$-x + 4 \\geq 2x - 5$', solution: '$x \\leq 3$. Svar: $(-\\infty, 3]$' },
        ],
        hints: ['Husk aa snu ulikhetstegnet naar du deler med negativt tall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-example-dobbel',
      type: 'example',
      title: 'Eksempel 2: Dobbel ulikhet',
      problem: `Loes $-1 \\leq 2x - 3 < 5$.`,
      solution: `**Loesning:**

Legg til $3$: $2 \\leq 2x < 8$. Del med $2$: $1 \\leq x < 4$. Svar: $[1, 4)$.`,
    },
    {
      id: 'r1-1-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Loes de doble ulikhetene.',
        subTasks: [
          { label: 'a', task: '$0 < 3x + 6 \\leq 12$', solution: '$-2 < x \\leq 2$. Svar: $(-2, 2]$' },
          { label: 'b', task: '$-4 \\leq 1 - x < 3$', solution: '$-2 < x \\leq 5$. Svar: $(-2, 5]$' },
        ],
        hints: ['Utfoer samme operasjon paa alle tre delene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-kvadratisk-intro',
      type: 'text',
      content: `## Kvadratiske ulikheter

For aa loese kvadratiske ulikheter bruker vi **fortegnslinje**. Metoden bygger paa at et produkt av faktorer skifter fortegn ved nullpunktene.

**Fremgangsmaate:**
1. Flytt alt over paa en side: $f(x) > 0$
2. Faktoriser $f(x)$
3. Finn nullpunktene
4. Tegn fortegnslinje
5. Les av loesningen`,
    },
    {
      id: 'r1-1-5-example-kvadratisk',
      type: 'example',
      title: 'Eksempel 3: Kvadratisk ulikhet',
      problem: `Loes $x^2 - x - 6 > 0$.`,
      solution: `**Loesning:**

Faktoriser: $(x-3)(x+2) > 0$. Nullpunkter: $x = -2$ og $x = 3$.

Fortegnslinje:

| | $x < -2$ | $-2 < x < 3$ | $x > 3$ |
|---|:---:|:---:|:---:|
| $(x+2)$ | $-$ | $+$ | $+$ |
| $(x-3)$ | $-$ | $-$ | $+$ |
| **Produkt** | $+$ | $-$ | $+$ |

Svar: $x \\in (-\\infty, -2) \\cup (3, \\infty)$`,
    },
    {
      id: 'r1-1-5-sign-diagram-1',
      type: 'sign-diagram',
      title: 'Fortegnsskjema for (x+2)(x-3)',
      criticalPoints: ['-2', '3'],
      factors: [
        { label: '(x+2)', signs: '- 0 + +' },
        { label: '(x-3)', signs: '- - - 0 +' },
      ],
      resultLabel: '(x+2)(x-3)',
    },
    {
      id: 'r1-1-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Loes ulikhetene ved hjelp av fortegnslinje.',
        subTasks: [
          { label: 'a', task: '$x^2 - 4 \\leq 0$', solution: 'Svar: $[-2, 2]$' },
          { label: 'b', task: '$x^2 + x - 12 > 0$', solution: 'Svar: $(-\\infty, -4) \\cup (3, \\infty)$' },
          { label: 'c', task: '$2x^2 - 5x - 3 \\geq 0$', solution: 'Svar: $(-\\infty, -\\frac{1}{2}] \\cup [3, \\infty)$' },
        ],
        hints: ['Faktoriser og tegn fortegnslinje'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Loes ulikhetene.',
        subTasks: [
          { label: 'a', task: '$x^2 < 9$', solution: '$(x-3)(x+3) < 0$. Svar: $(-3, 3)$' },
          { label: 'b', task: '$x^2 \\geq 2x + 3$', solution: '$(x-3)(x+1) \\geq 0$. Svar: $(-\\infty, -1] \\cup [3, \\infty)$' },
          { label: 'c', task: '$x^2 + 2x + 1 > 0$', solution: '$(x+1)^2 > 0$. Svar: $\\mathbb{R} \\setminus \\{-1\\}$' },
        ],
        hints: ['Flytt alt over paa en side'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-warning-brok',
      type: 'warning',
      title: 'Viktig ved broek-ulikheter',
      content: `Aldri gang begge sider med et uttrykk som kan vaere negativt. Bruk alltid fortegnslinje i stedet.`,
    },
    {
      id: 'r1-1-5-example-rasjonell',
      type: 'example',
      title: 'Eksempel 4: Rasjonell ulikhet',
      problem: `Loes $\\frac{x-1}{x+3} \\geq 0$.`,
      solution: `**Loesning:**

Nullpunkter: $x = 1$ (teller), $x = -3$ (nevner, udef.).

Fortegnslinje gir: $x \\in (-\\infty, -3) \\cup [1, \\infty)$.`,
    },
    {
      id: 'r1-1-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Loes ulikhetene.',
        subTasks: [
          { label: 'a', task: '$\\frac{x+2}{x-1} > 0$', solution: '$x \\in (-\\infty, -2) \\cup (1, \\infty)$' },
          { label: 'b', task: '$\\frac{x}{x+4} \\leq 0$', solution: '$x \\in (-4, 0]$' },
          { label: 'c', task: '$\\frac{x^2 - 1}{x + 2} < 0$', solution: '$x \\in (-\\infty, -2) \\cup (-1, 1)$' },
        ],
        hints: ['Bruk fortegnslinje', 'Nevner $= 0$ gir hull'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-def-abs',
      type: 'definition',
      title: 'Absoluttverdi',
      content: `Absoluttverdien til et reelt tall $a$:

$$|a| = \\begin{cases} a & \\text{hvis } a \\geq 0 \\\\ -a & \\text{hvis } a < 0 \\end{cases}$$

**Geometrisk:** $|a|$ er avstanden fra $a$ til $0$. $|a-b|$ er avstanden mellom $a$ og $b$.`,
    },
    {
      id: 'r1-1-5-note-egenskaper',
      type: 'note',
      title: 'Egenskaper for absoluttverdier',
      content: `1. $|a| \\geq 0$ og $|a| = 0 \\Leftrightarrow a = 0$
2. $|-a| = |a|$
3. $|ab| = |a| \\cdot |b|$
4. $\\left|\\frac{a}{b}\\right| = \\frac{|a|}{|b|}$ for $b \\neq 0$
5. **Trekantulikheten:** $|a + b| \\leq |a| + |b|$`,
    },
    {
      id: 'r1-1-5-example-abs-likn',
      type: 'example',
      title: 'Eksempel 5: Likning med absoluttverdi',
      problem: `Loes $|2x - 3| = 7$.`,
      solution: `**Loesning:**

$2x - 3 = 7$ gir $x = 5$. $2x - 3 = -7$ gir $x = -2$.

Loesninger: $x = 5$ og $x = -2$.`,
    },
    {
      id: 'r1-1-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Loes likningene.',
        subTasks: [
          { label: 'a', task: '$|x| = 4$', solution: '$x = 4$ eller $x = -4$' },
          { label: 'b', task: '$|x + 1| = 3$', solution: '$x = 2$ eller $x = -4$' },
          { label: 'c', task: '$|3x - 6| = 0$', solution: '$x = 2$' },
          { label: 'd', task: '$|x - 5| = -2$', solution: 'Ingen loesning ($|\\cdot| \\geq 0$)' },
        ],
        hints: ['$|A| = B$ gir $A = B$ eller $A = -B$ (forutsatt $B \\geq 0$)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-theorem-abs-ulik',
      type: 'theorem',
      title: 'Ulikheter med absoluttverdi',
      content: `For $c > 0$:

**Innenfor:** $|f(x)| < c \;\\Leftrightarrow\; -c < f(x) < c$

**Utenfor:** $|f(x)| > c \;\\Leftrightarrow\; f(x) < -c$ eller $f(x) > c$

**Geometrisk:** $|x - a| < c$ betyr at $x$ er naermere $a$ enn $c$.`,
    },
    {
      id: 'r1-1-5-example-abs-ulik',
      type: 'example',
      title: 'Eksempel 6: Ulikheter med absoluttverdi',
      problem: `Loes:\na) $|x - 2| < 5$\nb) $|2x + 1| \\geq 3$`,
      solution: `**Loesning:**

a) $-3 < x < 7$. Svar: $(-3, 7)$.

b) $x \\leq -2$ eller $x \\geq 1$. Svar: $(-\\infty, -2] \\cup [1, \\infty)$.`,
    },
    {
      id: 'r1-1-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Loes ulikhetene.',
        subTasks: [
          { label: 'a', task: '$|x| \\leq 3$', solution: '$x \\in [-3, 3]$' },
          { label: 'b', task: '$|x - 4| > 2$', solution: '$x \\in (-\\infty, 2) \\cup (6, \\infty)$' },
          { label: 'c', task: '$|3x + 2| \\leq 8$', solution: '$x \\in [-\\frac{10}{3}, 2]$' },
          { label: 'd', task: '$|1 - 2x| > 5$', solution: '$x \\in (-\\infty, -2) \\cup (3, \\infty)$' },
        ],
        hints: ['$|A| < c$ gir $-c < A < c$', '$|A| > c$ gir $A < -c$ eller $A > c$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Loes likningene med absoluttverdi.',
        subTasks: [
          { label: 'a', task: '$|x - 1| = |x + 3|$', solution: 'Kvadrer: $(x-1)^2 = (x+3)^2$, $-8x = 8$, $x = -1$.' },
          { label: 'b', task: '$|2x - 1| = x + 2$', solution: '$x = 3$ eller $x = -\\frac{1}{3}$. Begge gyldige.' },
        ],
        hints: ['Du kan kvadrere begge sider av $|A| = |B|$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Loes ulikhetene.',
        subTasks: [
          { label: 'a', task: '$\\frac{x+1}{x-2} \\geq 1$', solution: '$\\frac{3}{x-2} \\geq 0$. Altsaa $x > 2$. Svar: $(2, \\infty)$' },
          { label: 'b', task: '$\\frac{x^2-4}{x+1} \\leq 0$', solution: 'Fortegnslinje: $x \\in (-\\infty, -2] \\cup (-1, 2]$' },
        ],
        hints: ['Flytt alt over paa en side og bruk fortegnslinje'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Loes ulikhetene.',
        subTasks: [
          { label: 'a', task: '$x^3 - 4x > 0$', solution: '$x(x-2)(x+2) > 0$. Svar: $(-2, 0) \\cup (2, \\infty)$' },
          { label: 'b', task: '$|x^2 - 1| < 3$', solution: '$-3 < x^2-1 < 3$, dvs. $x^2 < 4$. Svar: $(-2, 2)$' },
        ],
        hints: ['For a): faktoriser ut $x$', 'For b): skriv om som dobbel ulikhet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv mengdene med intervallnotasjon.',
        subTasks: [
          { label: 'a', task: '$\\{x \\in \\mathbb{R} \\mid x \\geq -1\\}$', solution: '$[-1, \\infty)$' },
          { label: 'b', task: '$\\{x \\in \\mathbb{R} \\mid -3 < x \\leq 5\\}$', solution: '$(-3, 5]$' },
          { label: 'c', task: '$\\{x \\in \\mathbb{R} \\mid x < 2 \\text{ eller } x > 7\\}$', solution: '$(-\\infty, 2) \\cup (7, \\infty)$' },
        ],
        hints: ['Rund parentes for streng ulikhet, hakeparentes for $\\leq / \\geq$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv ulikhetene som absoluttverdier.',
        subTasks: [
          { label: 'a', task: '$-5 < x < 5$', solution: '$|x| < 5$' },
          { label: 'b', task: '$1 < x < 7$', solution: '$|x - 4| < 3$' },
          { label: 'c', task: '$x < -3$ eller $x > 3$', solution: '$|x| > 3$' },
        ],
        hints: ['Finn midtpunktet og radiusen til intervallet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis trekantulikheten $|a + b| \\leq |a| + |b|$ for alle reelle tall $a$ og $b$.',
        solution: '$-|a| \\leq a \\leq |a|$ og $-|b| \\leq b \\leq |b|$. Adder: $-(|a|+|b|) \\leq a+b \\leq |a|+|b|$, altsaa $|a+b| \\leq |a|+|b|$. $\\square$',
        hints: ['Bruk at $-|a| \\leq a \\leq |a|$ for alle $a$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et rektangels lengde er $(10 \\pm 0{,}2)$ cm og bredde er $(5 \\pm 0{,}1)$ cm. a) Skriv usikkerheten som absoluttverdi. b) Finn minste og stoerste mulige areal.',
        solution: 'a) $|l - 10| \\leq 0{,}2$. b) Minste: $9{,}8 \\cdot 4{,}9 = 48{,}02$ cm$^2$. Stoerste: $10{,}2 \\cdot 5{,}1 = 52{,}02$ cm$^2$.',
        hints: ['$(a \\pm c)$ betyr $|\\text{verdi} - a| \\leq c$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Loes $|x - 3| + |x + 1| \\leq 8$.',
        solution: 'Del inn etter $x = -1$ og $x = 3$. Tilfelle $x<-1$: $-2x+2 \\leq 8$, $x \\geq -3$. Tilfelle $-1 \\leq x \\leq 3$: $4 \\leq 8$ (alltid). Tilfelle $x>3$: $2x-2 \\leq 8$, $x \\leq 5$. Samlet: $x \\in [-3, 5]$.',
        hints: ['Del opp der uttrykkene inni absoluttverdiene skifter fortegn'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r1-1-5-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'medium',
        task: 'For hvilke verdier av $x$ er uttrykket $\\frac{x+1}{x^2-4}$ definert og positivt?',
        solution: 'Definert: $x \\neq \\pm 2$. Positivt: $\\frac{x+1}{(x-2)(x+2)} > 0$. Nullpunkter: $-2, -1, 2$. Fortegnslinje gir: $x \\in (-2, -1) \\cup (2, \\infty)$.',
        hints: ['Kombiner definisjonsmengde og fortegnslinje'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Lineaere ulikheter:** Loeses som likninger, men snu tegnet ved multiplikasjon/divisjon med negativt tall.

**Kvadratiske ulikheter:** Faktoriser og bruk fortegnslinje.

**Rasjonale ulikheter:** Flytt alt over paa en side, bruk fortegnslinje. Aldri gang med nevneren.

**Absoluttverdi:** $|a|$ er avstanden fra $a$ til $0$.
- $|f(x)| < c \\Leftrightarrow -c < f(x) < c$
- $|f(x)| > c \\Leftrightarrow f(x) < -c$ eller $f(x) > c$

**Intervallnotasjon:** Rund parentes for $<$/$>$, hakeparentes for $\\leq$/$\\geq$. Alltid rund parentes mot $\\pm \\infty$.`,
    },
  ],
  exercises: [],
};
