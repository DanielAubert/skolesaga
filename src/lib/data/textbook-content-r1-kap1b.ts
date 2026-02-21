/**
 * Tekstbok kapitler for R1 - Kapittel 1.4-1.5 (Algebra utvidelse) og 9.1-9.2 (Bevisfoering)
 * Seksjon 1 utvidelser: Rasjonale uttrykk, Ulikheter og absoluttverdier
 * Seksjon 9: Direkte bevis og moteksempler, Induksjon
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
  description: 'Lær om forkorting, fellesnevner, addisjon, subtraksjon, multiplikasjon og divisjon av algebraiske brøker.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forkorte rasjonale uttrykk ved faktorisering',
    'finne fellesnevner for algebraiske brøker',
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

Prinsippene er de samme: vi forkorter ved å dele på felles faktorer, og vi finner fellesnevner når vi skal addere eller subtrahere. Forskjellen er at vi naa må faktorisere polynomer i stedet for å finne primfaktorer av tall.`,
    },
    {
      id: 'r1-1-4-def-rasjonalt',
      type: 'definition',
      title: 'Rasjonalt uttrykk',
      content: `Et **rasjonalt uttrykk** er et uttrykk på formen:

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
      solution: `**Løsning:**

a) Nevneren er null når $x - 2 = 0$, dvs. $x = 2$. $D = \\mathbb{R} \\setminus \\{2\\}$

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

For å forkorte et rasjonalt uttrykk faktoriserer vi teller og nevner, og deler deretter ut felles faktorer.

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

Vi kan bare forkorte når hele teller og nevner er faktorisert:

$$\\frac{x(x + 1)}{x} = x + 1 \\quad \\text{(for } x \\neq 0\\text{)}$$`,
    },
    {
      id: 'r1-1-4-example-forkorting',
      type: 'example',
      title: 'Eksempel 2: Forkorting av rasjonale uttrykk',
      problem: `Forkort uttrykkene:
a) $\\frac{x^2 - 4}{x^2 + 4x + 4}$
b) $\\frac{x^2 - 5x + 6}{x^2 - 4x + 4}$`,
      solution: `**Løsning:**

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

**Tips:** Faktoriser og forkort **før** du ganger ut.`,
    },
    {
      id: 'r1-1-4-example-mult',
      type: 'example',
      title: 'Eksempel 3: Multiplikasjon',
      problem: `Regn ut og forkort: $\\frac{x^2 - 1}{x + 3} \\cdot \\frac{x^2 + 3x}{x^2 + x}$`,
      solution: `**Løsning:**

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
        hints: ['Faktoriser før du ganger'],
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
        hints: ['Ved divisjon: gang med den omvendte brøken'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-addsub-intro',
      type: 'text',
      content: `## Addisjon og subtraksjon

For å addere eller subtrahere rasjonale uttrykk trenger vi felles nevner.

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
      solution: `**Løsning:**

Fellesnevneren er $(x-1)(x+2)$:

$$\\frac{2(x+2) + 3(x-1)}{(x-1)(x+2)} = \\frac{5x + 1}{(x-1)(x+2)}$$`,
    },
    {
      id: 'r1-1-4-example-sub',
      type: 'example',
      title: 'Eksempel 5: Subtraksjon med faktorisering',
      problem: `Regn ut: $\\frac{x}{x^2 - 4} - \\frac{1}{x + 2}$`,
      solution: `**Løsning:**

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
        hints: ['Faktoriser nevnerne først'],
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
      solution: `**Løsning:**

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
        task: 'Forenkle de sammensatte brøkene.',
        subTasks: [
          { label: 'a', task: '$\\frac{\\frac{1}{x} + 1}{\\frac{1}{x} - 1}$', solution: '$\\frac{1 + x}{1 - x}$, for $x \\neq 0, 1$' },
          { label: 'b', task: '$\\frac{1 - \\frac{1}{x^2}}{1 - \\frac{1}{x}}$', solution: '$\\frac{x+1}{x}$, for $x \\neq 0, 1$' },
        ],
        hints: ['Finn fellesnevneren til de indre brøkene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-4-example-likning',
      type: 'example',
      title: 'Eksempel 7: Likning med rasjonale uttrykk',
      problem: `Loes: $\\frac{2}{x-1} + \\frac{3}{x+1} = \\frac{5}{x^2-1}$`,
      solution: `**Løsning:**

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
          { label: 'c', task: '$\\frac{1}{x-2} + \\frac{1}{x+2} = \\frac{4}{x^2-4}$', solution: '$2x = 4$, $x = 2$. Men $x=2$ gir null i nevner. **Ingen løsning.**' },
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
          { label: 'b', task: '$\\frac{2x}{x^2+x} = \\frac{1}{x} + \\frac{1}{x+1}$', solution: '$2x = 2x+1$, $0 = 1$. **Ingen løsning.**' },
        ],
        hints: ['Faktoriser nevnerne først'],
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
        task: 'Et roer fyller et basseng på $a$ timer. Et annet roer fyller det på $b$ timer. a) Skriv opp et uttrykk for andelen som fylles per time når begge roerene er åpne. b) Hvis $a = 3$ og $b = 6$, hvor lang tid tar det?',
        solution: 'a) $\\frac{1}{a} + \\frac{1}{b} = \\frac{a+b}{ab}$ per time. b) $\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}$. Det tar $2$ timer.',
        hints: ['Tenk på andel per time for hvert roer'],
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

**Multiplikasjon:** $\\frac{P}{Q} \\cdot \\frac{R}{S} = \\frac{PR}{QS}$ -- faktoriser og forkort først.

**Divisjon:** $\\frac{P}{Q} \\div \\frac{R}{S} = \\frac{P}{Q} \\cdot \\frac{S}{R}$.

**Addisjon/subtraksjon:** Finn fellesnevner, utvid, adder/subtraher tellerne.

**Likninger:** Gang med fellesnevner. Sjekk alltid at løsningen ikke gir null i nevneren.`,
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
  description: 'Lær om lineære og kvadratiske ulikheter, fortegnslinje, absoluttverdier og intervallnotasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'løse lineære ulikheter og angi løsningen med intervallnotasjon',
    'løse kvadratiske ulikheter ved hjelp av fortegnslinje',
    'forstaa definisjonen av absoluttverdi og løse likninger og ulikheter med absoluttverdi',
    'bruke intervallnotasjon og mengdenotasjon',
  ],
  content: [
    {
      id: 'r1-1-5-intro',
      type: 'text',
      content: `## Ulikheter og absoluttverdier

En **ulikhet** er et utsagn om at et uttrykk er større enn, mindre enn, eller ulikt et annet. I motsetning til likninger, der løsningen ofte er enkeltpunkter, er løsningen på en ulikhet vanligvis et **intervall** eller en forening av intervaller.`,
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
| $(a, \\infty)$ | $\\{x \\mid x > a\\}$ | Alt større enn $a$ |
| $(-\\infty, b]$ | $\\{x \\mid x \\leq b\\}$ | Alt opp til og med $b$ |

**Merk:** Alltid rund parentes mot $\\pm \\infty$.`,
    },
    {
      id: 'r1-1-5-theorem-regler',
      type: 'theorem',
      title: 'Regneregler for ulikheter',
      content: `For alle reelle tall $a$, $b$ og $c$:

1. **Addisjon:** Hvis $a < b$, så er $a + c < b + c$
2. **Positivt tall:** Hvis $a < b$ og $c > 0$, så er $ac < bc$
3. **Negativt tall:** Hvis $a < b$ og $c < 0$, så er $ac > bc$ (tegnet **snur**)`,
    },
    {
      id: 'r1-1-5-example-lineær',
      type: 'example',
      title: 'Eksempel 1: Lineære ulikheter',
      problem: `Loes:\na) $3x - 7 < 2x + 5$\nb) $-2x + 3 \\geq 7$`,
      solution: `**Løsning:**

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
        hints: ['Husk å snu ulikhetstegnet når du deler med negativt tall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-example-dobbel',
      type: 'example',
      title: 'Eksempel 2: Dobbel ulikhet',
      problem: `Loes $-1 \\leq 2x - 3 < 5$.`,
      solution: `**Løsning:**

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
        hints: ['Utfør samme operasjon på alle tre delene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-kvadratisk-intro',
      type: 'text',
      content: `## Kvadratiske ulikheter

For å løse kvadratiske ulikheter bruker vi **fortegnslinje**. Metoden bygger på at et produkt av faktorer skifter fortegn ved nullpunktene.

**Fremgangsmaate:**
1. Flytt alt over på en side: $f(x) > 0$
2. Faktoriser $f(x)$
3. Finn nullpunktene
4. Tegn fortegnslinje
5. Les av løsningen`,
    },
    {
      id: 'r1-1-5-example-kvadratisk',
      type: 'example',
      title: 'Eksempel 3: Kvadratisk ulikhet',
      problem: `Loes $x^2 - x - 6 > 0$.`,
      solution: `**Løsning:**

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
        hints: ['Flytt alt over på en side'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-1-5-warning-brok',
      type: 'warning',
      title: 'Viktig ved broek-ulikheter',
      content: `Aldri gang begge sider med et uttrykk som kan være negativt. Bruk alltid fortegnslinje i stedet.`,
    },
    {
      id: 'r1-1-5-example-rasjonell',
      type: 'example',
      title: 'Eksempel 4: Rasjonell ulikhet',
      problem: `Loes $\\frac{x-1}{x+3} \\geq 0$.`,
      solution: `**Løsning:**

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
      solution: `**Løsning:**

$2x - 3 = 7$ gir $x = 5$. $2x - 3 = -7$ gir $x = -2$.

Løsninger: $x = 5$ og $x = -2$.`,
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
          { label: 'd', task: '$|x - 5| = -2$', solution: 'Ingen løsning ($|\\cdot| \\geq 0$)' },
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

**Geometrisk:** $|x - a| < c$ betyr at $x$ er nærmere $a$ enn $c$.`,
    },
    {
      id: 'r1-1-5-example-abs-ulik',
      type: 'example',
      title: 'Eksempel 6: Ulikheter med absoluttverdi',
      problem: `Loes:\na) $|x - 2| < 5$\nb) $|2x + 1| \\geq 3$`,
      solution: `**Løsning:**

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
          { label: 'a', task: '$\\frac{x+1}{x-2} \\geq 1$', solution: '$\\frac{3}{x-2} \\geq 0$. Altså $x > 2$. Svar: $(2, \\infty)$' },
          { label: 'b', task: '$\\frac{x^2-4}{x+1} \\leq 0$', solution: 'Fortegnslinje: $x \\in (-\\infty, -2] \\cup (-1, 2]$' },
        ],
        hints: ['Flytt alt over på en side og bruk fortegnslinje'],
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
        solution: '$-|a| \\leq a \\leq |a|$ og $-|b| \\leq b \\leq |b|$. Adder: $-(|a|+|b|) \\leq a+b \\leq |a|+|b|$, altså $|a+b| \\leq |a|+|b|$. $\\square$',
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
        task: 'Et rektangels lengde er $(10 \\pm 0{,}2)$ cm og bredde er $(5 \\pm 0{,}1)$ cm. a) Skriv usikkerheten som absoluttverdi. b) Finn minste og største mulige areal.',
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

**Lineære ulikheter:** Løses som likninger, men snu tegnet ved multiplikasjon/divisjon med negativt tall.

**Kvadratiske ulikheter:** Faktoriser og bruk fortegnslinje.

**Rasjonale ulikheter:** Flytt alt over på en side, bruk fortegnslinje. Aldri gang med nevneren.

**Absoluttverdi:** $|a|$ er avstanden fra $a$ til $0$.
- $|f(x)| < c \\Leftrightarrow -c < f(x) < c$
- $|f(x)| > c \\Leftrightarrow f(x) < -c$ eller $f(x) > c$

**Intervallnotasjon:** Rund parentes for $<$/$>$, hakeparentes for $\\leq$/$\\geq$. Alltid rund parentes mot $\\pm \\infty$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.1: Direkte bevis og moteksempler
// ============================================================================

export const CHAPTER_R1_9_1: TextbookChapter = {
  id: 'r1-9-1',
  courseId: 'r1',
  chapterNumber: '9.1',
  title: 'Direkte bevis og moteksempler',
  description: 'Direkte bevisfoering, bruk av moteksempler og logisk argumentasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utføre og presentere bevis og argumentere for framgangsmaatar',
  ],
  content: [
    {
      id: 'r1-9-1-intro',
      type: 'text',
      content: `## Hvorfor bevise?

I matematikk noeyer vi oss ikke med å observere moenstre eller sjekke eksempler -- vi krever **bevis**. Et bevis er en logisk argumentrekke som viser at en paastand er sann i alle tilfeller, ikke bare i de eksemplene vi har sjekket.

Tenk deg at du har sjekket at $1 + 3 = 4$, $1 + 3 + 5 = 9$, $1 + 3 + 5 + 7 = 16$ og legger merke til at svarene er kvadrattall. Er det alltid slik? Selv om du sjekker tusen eksempler, vet du ikke om det gjelder for alle. Et bevis gir deg denne sikkerheten.

I dette kapittelet lærer du to grunnleggende teknikker: **direkte bevis** og **moteksempler**.`,
    },
    {
      id: 'r1-9-1-def-implikasjon',
      type: 'definition',
      title: 'Implikasjon og ekvivalens',
      content: `En **implikasjon** er en paastand på formen "hvis $P$, så $Q$", skrevet $P \\Rightarrow Q$.

- $P$ kalles **forutsetningen** (hypotesen)
- $Q$ kalles **konklusjonen**

En **ekvivalens** betyr at både $P \\Rightarrow Q$ og $Q \\Rightarrow P$ gjelder. Vi skriver $P \\Leftrightarrow Q$ og sier "$P$ hvis og bare hvis $Q$".

**Eksempel:** "Hvis $n$ er delelig med $4$, så er $n$ delelig med $2$" er en implikasjon. Den omvendte gjelder ikke: $6$ er delelig med $2$ men ikke med $4$.`,
    },
    {
      id: 'r1-9-1-note-logikk',
      type: 'note',
      title: 'Logiske begreper',
      content: `**Kontrapositiv:** Den kontrapositive av $P \\Rightarrow Q$ er $\\neg Q \\Rightarrow \\neg P$. Disse er logisk ekvivalente.

**Eksempel:** "Hvis det regner, er bakken vaat" har kontrapositiv: "Hvis bakken ikke er vaat, regner det ikke."

**Nødvendig og tilstrekkelig:**
- "$P$ er **tilstrekkelig** for $Q$" betyr $P \\Rightarrow Q$
- "$Q$ er **nødvendig** for $P$" betyr også $P \\Rightarrow Q$`,
    },
    {
      id: 'r1-9-1-direkte-intro',
      type: 'text',
      content: `## Direkte bevis

I et **direkte bevis** starter vi med forutsetningen $P$ og utleder konklusjonen $Q$ gjennom en rekke logiske steg. Hvert steg må være begrunnet med en definisjon, en kjent setning, eller en algebraisk omforming.

**Oppskrift for direkte bevis:**
1. Skriv forutsetningen tydelig
2. Bruk definisjoner til å omformulere
3. Utfør algebraiske manipulasjoner
4. Vis at konklusjonen følger`,
    },
    {
      id: 'r1-9-1-def-partall',
      type: 'definition',
      title: 'Partall og oddetall',
      content: `Et heltall $n$ er et **partall** hvis det finnes et heltall $k$ slik at $n = 2k$.

Et heltall $n$ er et **oddetall** hvis det finnes et heltall $k$ slik at $n = 2k + 1$.

Disse definisjonene er utgangspunktet for mange bevis om heltall. Vi bruker dem til å "oversette" fra ord til algebra.`,
    },
    {
      id: 'r1-9-1-example-partall',
      type: 'example',
      title: 'Eksempel 1: Summen av to partall',
      problem: `Vis at summen av to partall er et partall.`,
      solution: `**Bevis:**

La $a$ og $b$ være partall. Da finnes heltall $m$ og $n$ slik at $a = 2m$ og $b = 2n$.

$$a + b = 2m + 2n = 2(m + n)$$

Siden $m + n$ er et heltall, er $a + b = 2(m+n)$ et partall. $\\square$`,
    },
    {
      id: 'r1-9-1-example-oddetall',
      type: 'example',
      title: 'Eksempel 2: Produktet av to oddetall',
      problem: `Vis at produktet av to oddetall er et oddetall.`,
      solution: `**Bevis:**

La $a$ og $b$ være oddetall. Da er $a = 2m + 1$ og $b = 2n + 1$ for heltall $m$ og $n$.

$$a \\cdot b = (2m+1)(2n+1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1$$

Siden $2mn + m + n$ er et heltall, er $a \\cdot b$ på formen $2k + 1$, altså et oddetall. $\\square$`,
    },
    {
      id: 'r1-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r1-9-1-ex-1',
        number: '1',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Vis at summen av et partall og et oddetall er et oddetall.',
        hints: ['Skriv partallet som $2m$ og oddetallet som $2n + 1$'],
        solution: 'La $a = 2m$ (partall) og $b = 2n+1$ (oddetall). Da er $a + b = 2m + 2n + 1 = 2(m+n) + 1$. Siden $m+n$ er et heltall, er summen et oddetall. $\\square$',
      },
    },
    {
      id: 'r1-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r1-9-1-ex-2',
        number: '2',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Vis at kvadratet av et oddetall er et oddetall.',
        hints: ['Skriv oddetallet som $2k + 1$ og regn ut $(2k+1)^2$'],
        solution: 'La $n = 2k + 1$ være et oddetall. Da er $n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$. Siden $2k^2 + 2k$ er et heltall, er $n^2$ et oddetall. $\\square$',
      },
    },
    {
      id: 'r1-9-1-moteksempel-intro',
      type: 'text',
      content: `## Moteksempler

Ikke alle paastander er sanne. For å **motbevise** en generell paastand trenger vi bare å finne **ett eneste eksempel** der paastanden ikke holder. Et slikt eksempel kalles et **moteksempel**.

**Viktig:** Det kreves bare ett moteksempel for å motbevise en paastand, men ingen mengde eksempler kan bevise en generell paastand.

**Fremgangsmaate:**
1. Forstaa hva paastanden sier
2. Proev systematisk med enkle tall
3. Presenter moteksempelet og vis at det bryter med paastanden`,
    },
    {
      id: 'r1-9-1-example-moteks1',
      type: 'example',
      title: 'Eksempel 3: Moteksempel for primtall',
      problem: `Er følgende paastand sann? "Summen av to primtall er alltid et partall."`,
      solution: `**Løsning:**

**Moteksempel:** $2 + 3 = 5$.

Både $2$ og $3$ er primtall, men summen $5$ er et oddetall. Paastanden er **usann**.

(Paastanden holder når begge primtallene er odde, men $2$ er et partall-primtall.)`,
    },
    {
      id: 'r1-9-1-example-moteks2',
      type: 'example',
      title: 'Eksempel 4: Moteksempel for algebraisk uttrykk',
      problem: `Er følgende paastand sann? "For alle reelle tall $a$ og $b$ gjelder $\\sqrt{a^2 + b^2} = a + b$."`,
      solution: `**Løsning:**

**Moteksempel:** La $a = 3$ og $b = 4$.

Venstre side: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$

Høyre side: $3 + 4 = 7$

Siden $5 \\neq 7$, er paastanden **usann**.`,
    },
    {
      id: 'r1-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r1-9-1-ex-3',
        number: '3',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Finn et moteksempel som viser at følgende paastand er usann: "Hvis $n$ er et positivt heltall, så er $n^2 + n + 41$ et primtall."',
        hints: ['Proev $n = 41$'],
        solution: 'For $n = 41$: $41^2 + 41 + 41 = 41(41 + 1 + 1) = 41 \\cdot 43$. Dette er ikke et primtall. (Merk: for $n = 1, 2, \\ldots, 40$ gir formelen faktisk primtall, men $n = 41$ er et moteksempel.)',
      },
    },
    {
      id: 'r1-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r1-9-1-ex-4',
        number: '4',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Avgjør om følgende paastander er sanne eller usanne. Bevis de sanne, og finn moteksempel for de usanne.\n\na) Produktet av to irrasjonale tall er alltid irrasjonalt.\n\nb) Summen av tre paafølgende heltall er alltid delelig med $3$.',
        hints: ['For a): tenk på $\\sqrt{2} \\cdot \\sqrt{2}$', 'For b): skriv tallene som $n$, $n+1$, $n+2$'],
        solution: 'a) **Usann.** Moteksempel: $\\sqrt{2} \\cdot \\sqrt{2} = 2$, som er rasjonalt.\n\nb) **Sann.** Bevis: $n + (n+1) + (n+2) = 3n + 3 = 3(n+1)$. Siden $n+1$ er et heltall, er summen delelig med $3$. $\\square$',
      },
    },
    {
      id: 'r1-9-1-algebraisk-intro',
      type: 'text',
      content: `## Algebraiske identiteter og ulikheter

Mange bevis handler om å vise at en algebraisk identitet eller ulikhet gjelder for alle verdier av variablene. Strategien er ofte å omforme den ene siden til den andre, eller å vise at differansen har et bestemt fortegn.

**Nyttig teknikk:** For å vise at $A \\geq B$, vis at $A - B \\geq 0$, gjerne ved å skrive $A - B$ som et fullstendig kvadrat.`,
    },
    {
      id: 'r1-9-1-example-alg1',
      type: 'example',
      title: 'Eksempel 5: AM-GM for to tall',
      problem: `Vis at $a^2 + b^2 \\geq 2ab$ for alle reelle tall $a$ og $b$.`,
      solution: `**Bevis:**

Vi regner ut differansen:

$$a^2 + b^2 - 2ab = a^2 - 2ab + b^2 = (a - b)^2$$

Siden ethvert kvadrat er $\\geq 0$, har vi $(a-b)^2 \\geq 0$, altsaa:

$$a^2 + b^2 \\geq 2ab \\quad \\square$$

**Merk:** Likhet gjelder når $a = b$.`,
    },
    {
      id: 'r1-9-1-example-alg2',
      type: 'example',
      title: 'Eksempel 6: Tre paafølgende heltall',
      problem: `Vis at produktet av tre paafølgende heltall er delelig med $6$.`,
      solution: `**Bevis:**

La de tre paafølgende heltallene være $n$, $n+1$ og $n+2$.

**Delelig med $2$:** Blant tre paafølgende heltall er minst ett partall (annenhvert tall er partall). Altså er produktet delelig med $2$.

**Delelig med $3$:** Blant tre paafølgende heltall har ett rest $0$ ved divisjon med $3$, ett har rest $1$, og ett har rest $2$. Altså er nøyaktig ett av dem delelig med $3$.

Siden produktet er delelig med både $2$ og $3$, og $\\gcd(2,3) = 1$, er produktet delelig med $2 \\cdot 3 = 6$. $\\square$`,
    },
    {
      id: 'r1-9-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r1-9-1-ex-5',
        number: '5',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Vis at differansen mellom kvadratene til to paafølgende heltall er lik summen av de to tallene. Det vil si: vis at $(n+1)^2 - n^2 = n + (n+1)$.',
        hints: ['Regn ut $(n+1)^2$ og forenkle'],
        solution: '$(n+1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$. Videre er $n + (n+1) = 2n + 1$. Altså er $(n+1)^2 - n^2 = n + (n+1) = 2n + 1$. $\\square$',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'r1-9-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'r1-9-1-ex-6',
        number: '6',
        type: 'short-answer',
        difficulty: 'vanskelig',
        task: 'Vis at $\\frac{a}{b} + \\frac{b}{a} \\geq 2$ for alle $a, b > 0$.',
        hints: ['Gang med $ab > 0$ og bruk resultatet fra eksempel 5'],
        solution: 'Gang med $ab > 0$: ulikheten er ekvivalent med $a^2 + b^2 \\geq 2ab$, som vi viste i eksempel 5 at gjelder (med likhet når $a = b$). $\\square$',
      },
    },
    {
      id: 'r1-9-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Direkte bevis:** Start med forutsetningen, bruk definisjoner og kjente resultater, og utled konklusjonen steg for steg.

**Moteksempler:** For å motbevise en generell paastand holder det med ett eneste moteksempel.

**Implikasjon:** $P \\Rightarrow Q$ betyr "hvis $P$, så $Q$". Kontrapositiven $\\neg Q \\Rightarrow \\neg P$ er logisk ekvivalent.

**Algebraiske bevis:** For å vise $A \\geq B$, vis at $A - B \\geq 0$, gjerne ved å skrive differansen som et fullstendig kvadrat.

**Tips for godt bevis:**
- Definer alle variable tydelig
- Begrunn hvert steg
- Bruk hele setninger
- Avslutt med $\\square$ eller "q.e.d."`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Implikasjon', definition: 'Paastand på formen "hvis P, så Q" ($P \\Rightarrow Q$)' },
    { term: 'Ekvivalens', definition: 'Både $P \\Rightarrow Q$ og $Q \\Rightarrow P$ gjelder ($P \\Leftrightarrow Q$)' },
    { term: 'Direkte bevis', definition: 'Bevis der man går rett fra forutsetning til konklusjon' },
    { term: 'Moteksempel', definition: 'Et eksempel som viser at en generell paastand er usann' },
    { term: 'Kontrapositiv', definition: 'Av $P \\Rightarrow Q$ er kontrapositiven $\\neg Q \\Rightarrow \\neg P$' },
  ],
};

// ============================================================================
// KAPITTEL 9.2: Induksjon
// ============================================================================

export const CHAPTER_R1_9_2: TextbookChapter = {
  id: 'r1-9-2',
  courseId: 'r1',
  chapterNumber: '9.2',
  title: 'Induksjon',
  description: 'Matematisk induksjon med basissteg, induksjonsantagelse og induksjonssteg.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utføre og presentere bevis og argumentere for framgangsmaatar',
  ],
  content: [
    {
      id: 'r1-9-2-intro',
      type: 'text',
      content: `## Matematisk induksjon

Tenk deg en uendelig rad med dominobrikker. Hvis du vet at:
1. Den første brikken velter
2. Hver gang en brikke velter, velter den også den neste

Da vet du at **alle** brikkene velter.

Dette er ideen bak **matematisk induksjon** -- en bevismetode for paastander som gjelder for alle naturlige tall $n \\geq n_0$. Metoden er spesielt nyttig for å bevise formler for summer, delelighet og ulikheter.`,
    },
    {
      id: 'r1-9-2-def-induksjon',
      type: 'definition',
      title: 'Prinsippet for matematisk induksjon',
      content: `For å bevise at en paastand $P(n)$ gjelder for alle heltall $n \\geq n_0$, viser vi:

**1. Basissteg:** Vis at $P(n_0)$ er sann.

**2. Induksjonssteg:** Vis at hvis $P(k)$ er sann for et vilkaarlig $k \\geq n_0$ (**induksjonsantagelsen**), så er også $P(k+1)$ sann.

Da følger det at $P(n)$ gjelder for alle $n \\geq n_0$.`,
    },
    {
      id: 'r1-9-2-note-hvorfor',
      type: 'note',
      title: 'Hvorfor fungerer induksjon?',
      content: `Basissteget gir oss $P(n_0)$.

Induksjonssteget med $k = n_0$ gir oss $P(n_0) \\Rightarrow P(n_0 + 1)$, altså $P(n_0 + 1)$.

Induksjonssteget med $k = n_0 + 1$ gir oss $P(n_0 + 1) \\Rightarrow P(n_0 + 2)$, altså $P(n_0 + 2)$.

Slik fortsetter vi og når ethvert naturlig tall $n \\geq n_0$.`,
    },
    {
      id: 'r1-9-2-example-sum1',
      type: 'example',
      title: 'Eksempel 1: Summen av de $n$ første naturlige tallene',
      problem: `Vis at $1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$ for alle $n \\geq 1$.`,
      solution: `**Bevis ved induksjon:**

**Basissteg ($n = 1$):** Venstre side: $1$. Høyre side: $\\frac{1 \\cdot 2}{2} = 1$. Stemmer. $\\checkmark$

**Induksjonsantagelse:** Anta at formelen gjelder for $n = k$, dvs.:
$$1 + 2 + \\cdots + k = \\frac{k(k+1)}{2}$$

**Induksjonssteg (vis for $n = k+1$):**

$$1 + 2 + \\cdots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1)$$

$$= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}$$

Dette er formelen med $n = k + 1$. $\\checkmark$

Ved induksjonsprinsippet gjelder formelen for alle $n \\geq 1$. $\\square$`,
    },
    {
      id: 'r1-9-2-warning-feil',
      type: 'warning',
      title: 'Vanlige feil ved induksjon',
      content: `1. **Glemmer basissteget:** Uten basissteg har beviset ingen forankring. Man kan "bevise" usanne paastander.

2. **Sirkelargument:** I induksjonssteget må du vise $P(k) \\Rightarrow P(k+1)$. Du må bruke $P(k)$ som en **antagelse** og utlede $P(k+1)$, ikke anta $P(k+1)$ direkte.

3. **Feil retning:** Start med den siden du vet noe om (som inneholder $P(k)$), og omform til $P(k+1)$.`,
    },
    {
      id: 'r1-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r1-9-2-ex-1',
        number: '1',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Vis ved induksjon at $1 + 3 + 5 + \\cdots + (2n-1) = n^2$ for alle $n \\geq 1$.',
        hints: ['Basissteg: sjekk $n = 1$', 'Induksjonssteg: legg til $(2(k+1) - 1) = 2k+1$ på begge sider'],
        solution: '**Basis ($n=1$):** $1 = 1^2$. $\\checkmark$\n\n**Antagelse:** $1 + 3 + \\cdots + (2k-1) = k^2$.\n\n**Steg:** $1 + 3 + \\cdots + (2k-1) + (2k+1) = k^2 + 2k + 1 = (k+1)^2$. $\\square$',
      },
    },
    {
      id: 'r1-9-2-example-sum2',
      type: 'example',
      title: 'Eksempel 2: Summen av kvadrattall',
      problem: `Vis at $1^2 + 2^2 + 3^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}$ for alle $n \\geq 1$.`,
      solution: `**Bevis ved induksjon:**

**Basissteg ($n = 1$):** Venstre side: $1$. Høyre side: $\\frac{1 \\cdot 2 \\cdot 3}{6} = 1$. $\\checkmark$

**Induksjonsantagelse:** $1^2 + 2^2 + \\cdots + k^2 = \\frac{k(k+1)(2k+1)}{6}$.

**Induksjonssteg:**

$$1^2 + \\cdots + k^2 + (k+1)^2 = \\frac{k(k+1)(2k+1)}{6} + (k+1)^2$$

$$= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6} = \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6}$$

$$= \\frac{(k+1)(2k^2 + 7k + 6)}{6} = \\frac{(k+1)(k+2)(2k+3)}{6}$$

Dette er formelen med $n = k+1$ (sjekk: $(k+1)((k+1)+1)(2(k+1)+1)/6$). $\\square$`,
    },
    {
      id: 'r1-9-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r1-9-2-ex-2',
        number: '2',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Vis ved induksjon at $1 + r + r^2 + \\cdots + r^n = \\frac{r^{n+1} - 1}{r - 1}$ for alle $n \\geq 0$ og $r \\neq 1$.',
        hints: ['Basissteg: sjekk $n = 0$', 'Induksjonssteg: legg til $r^{k+1}$ på begge sider'],
        solution: '**Basis ($n=0$):** $1 = \\frac{r-1}{r-1} = 1$. $\\checkmark$\n\n**Antagelse:** $1 + r + \\cdots + r^k = \\frac{r^{k+1}-1}{r-1}$.\n\n**Steg:** $1 + r + \\cdots + r^k + r^{k+1} = \\frac{r^{k+1}-1}{r-1} + r^{k+1} = \\frac{r^{k+1}-1 + r^{k+1}(r-1)}{r-1} = \\frac{r^{k+2}-1}{r-1}$. $\\square$',
      },
    },
    {
      id: 'r1-9-2-delelighet-intro',
      type: 'text',
      content: `## Induksjon og delelighet

Induksjon er også et kraftig verktøy for å bevise at visse uttrykk alltid er delelige med et bestemt tall. Strategien er å skrive $P(k+1)$ ved hjelp av $P(k)$ og vise at delelighetskravet er oppfylt.`,
    },
    {
      id: 'r1-9-2-example-delelighet',
      type: 'example',
      title: 'Eksempel 3: Delelighet med 6',
      problem: `Vis at $n^3 - n$ er delelig med $6$ for alle $n \\geq 1$.`,
      solution: `**Bevis ved induksjon:**

**Basissteg ($n = 1$):** $1^3 - 1 = 0 = 6 \\cdot 0$. Delelig med $6$. $\\checkmark$

**Induksjonsantagelse:** $k^3 - k$ er delelig med $6$, dvs. $k^3 - k = 6m$ for et heltall $m$.

**Induksjonssteg:**

$$(k+1)^3 - (k+1) = k^3 + 3k^2 + 3k + 1 - k - 1 = (k^3 - k) + 3k^2 + 3k$$

$$= (k^3 - k) + 3k(k + 1)$$

Første ledd er delelig med $6$ (induksjonsantagelsen). For andre ledd: $k(k+1)$ er produktet av to paafølgende heltall, så det er alltid partall. Altså er $3k(k+1)$ delelig med $6$.

Summen av to tall delelige med $6$ er delelig med $6$. $\\square$`,
    },
    {
      id: 'r1-9-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r1-9-2-ex-3',
        number: '3',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Vis ved induksjon at $3^n - 1$ er delelig med $2$ for alle $n \\geq 1$.',
        hints: ['Skriv $3^{k+1} - 1 = 3 \\cdot 3^k - 1 = 3(3^k - 1) + 2$'],
        solution: '**Basis ($n=1$):** $3^1 - 1 = 2$. Delelig med $2$. $\\checkmark$\n\n**Antagelse:** $3^k - 1 = 2m$ for et heltall $m$.\n\n**Steg:** $3^{k+1} - 1 = 3 \\cdot 3^k - 1 = 3(3^k - 1) + 3 - 1 = 3 \\cdot 2m + 2 = 2(3m + 1)$. Delelig med $2$. $\\square$',
      },
    },
    {
      id: 'r1-9-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r1-9-2-ex-4',
        number: '4',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Vis ved induksjon at summen $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{n(n+1)} = \\frac{n}{n+1}$ for alle $n \\geq 1$.',
        hints: ['Basissteg: sjekk $n = 1$', 'Induksjonssteg: legg til $\\frac{1}{(k+1)(k+2)}$ og finn fellesnevner'],
        solution: '**Basis ($n=1$):** $\\frac{1}{1 \\cdot 2} = \\frac{1}{2}$. $\\checkmark$\n\n**Antagelse:** Summen opp til $k$ er $\\frac{k}{k+1}$.\n\n**Steg:** $\\frac{k}{k+1} + \\frac{1}{(k+1)(k+2)} = \\frac{k(k+2) + 1}{(k+1)(k+2)} = \\frac{k^2 + 2k + 1}{(k+1)(k+2)} = \\frac{(k+1)^2}{(k+1)(k+2)} = \\frac{k+1}{k+2}$. $\\square$',
      },
    },
    {
      id: 'r1-9-2-ulikheter-intro',
      type: 'text',
      content: `## Induksjon og ulikheter

Induksjon kan også brukes til å bevise ulikheter. Fremgangsmaaten er den samme, men i induksjonssteget bruker vi ofte at $P(k)$ gir en nedre (eller oevre) skranke som vi kan bygge videre på.`,
    },
    {
      id: 'r1-9-2-example-ulikhet',
      type: 'example',
      title: 'Eksempel 4: Bernoullis ulikhet',
      problem: `Vis at $(1 + x)^n \\geq 1 + nx$ for alle $n \\geq 1$ og $x \\geq -1$.`,
      solution: `**Bevis ved induksjon over $n$:**

**Basissteg ($n = 1$):** $(1+x)^1 = 1 + x = 1 + 1 \\cdot x$. Likhet gjelder. $\\checkmark$

**Induksjonsantagelse:** $(1+x)^k \\geq 1 + kx$ for et $k \\geq 1$.

**Induksjonssteg:**

$$(1+x)^{k+1} = (1+x)^k \\cdot (1+x) \\geq (1+kx)(1+x)$$

der vi brukte antagelsen og at $(1+x) \\geq 0$ (siden $x \\geq -1$).

$$(1+kx)(1+x) = 1 + kx + x + kx^2 = 1 + (k+1)x + kx^2 \\geq 1 + (k+1)x$$

der siste ulikhet gjelder fordi $kx^2 \\geq 0$.

Altså $(1+x)^{k+1} \\geq 1 + (k+1)x$. $\\square$`,
    },
    {
      id: 'r1-9-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r1-9-2-ex-5',
        number: '5',
        type: 'short-answer',
        difficulty: 'vanskelig',
        task: 'Vis ved induksjon at $2^n > n$ for alle $n \\geq 1$.',
        hints: ['Basissteg: $2^1 = 2 > 1$', 'Induksjonssteg: $2^{k+1} = 2 \\cdot 2^k > 2k$. Vis så at $2k \\geq k + 1$ for $k \\geq 1$'],
        solution: '**Basis ($n=1$):** $2^1 = 2 > 1$. $\\checkmark$\n\n**Antagelse:** $2^k > k$.\n\n**Steg:** $2^{k+1} = 2 \\cdot 2^k > 2k = k + k \\geq k + 1$ (siden $k \\geq 1$). Altså $2^{k+1} > k + 1$. $\\square$',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'r1-9-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'r1-9-2-ex-6',
        number: '6',
        type: 'short-answer',
        difficulty: 'vanskelig',
        task: 'Vis ved induksjon at $n! \\geq 2^{n-1}$ for alle $n \\geq 1$.',
        hints: ['Basissteg: $1! = 1 \\geq 2^0 = 1$', 'Induksjonssteg: $(k+1)! = (k+1) \\cdot k! \\geq (k+1) \\cdot 2^{k-1}$. Vis at $(k+1) \\cdot 2^{k-1} \\geq 2^k$ for $k \\geq 1$'],
        solution: '**Basis ($n=1$):** $1! = 1 \\geq 2^0 = 1$. $\\checkmark$\n\n**Antagelse:** $k! \\geq 2^{k-1}$.\n\n**Steg:** $(k+1)! = (k+1) \\cdot k! \\geq (k+1) \\cdot 2^{k-1} \\geq 2 \\cdot 2^{k-1} = 2^k$ (siden $k+1 \\geq 2$ for $k \\geq 1$). $\\square$',
      },
    },
    {
      id: 'r1-9-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Matematisk induksjon** er en bevismetode for paastander $P(n)$ som gjelder for alle $n \\geq n_0$:

1. **Basissteg:** Vis at $P(n_0)$ er sann
2. **Induksjonssteg:** Vis at $P(k) \\Rightarrow P(k+1)$

**Vanlige bruksomraader:**
- **Summeformler:** $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$
- **Delelighet:** "$n^3 - n$ er delelig med $6$"
- **Ulikheter:** "$2^n > n$" (Bernoullis ulikhet)

**Tips:**
- Skriv alltid induksjonsantagelsen tydelig
- I induksjonssteget: start med venstre side for $k+1$ og bruk antagelsen
- Marker tydelig hvor induksjonsantagelsen brukes
- Husk at induksjonsantagelsen ikke er "sirkelbevis" -- den er en **betinget** antagelse i implikasjonen $P(k) \\Rightarrow P(k+1)$`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Matematisk induksjon', definition: 'Bevismetode med basissteg og induksjonssteg for paastander om naturlige tall' },
    { term: 'Basissteg', definition: 'Viser at paastanden gjelder for startverdien $n_0$' },
    { term: 'Induksjonsantagelse', definition: 'Antagelsen om at $P(k)$ er sann for et vilkaarlig $k$' },
    { term: 'Induksjonssteg', definition: 'Viser at $P(k) \\Rightarrow P(k+1)$' },
  ],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const R1_KAP1B_CHAPTERS = [CHAPTER_R1_1_4, CHAPTER_R1_1_5, CHAPTER_R1_9_1, CHAPTER_R1_9_2];
