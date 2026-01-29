/**
 * Tekstbok kapitler for 1P — Tallregning (Brøkregning og Regnerekkefølge)
 * Følger LK20 læreplan
 *
 * Alt innhold er originalt og skrevet fra bunnen av.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.4: BRØKREGNING
// ============================================================================

export const CHAPTER_1P_1_4: TextbookChapter = {
  id: '1p-1-4',
  courseId: '1p',
  chapterNumber: '1.4',
  title: 'Brøkregning',
  description:
    'Lær å arbeide med brøker: forkorting, utviding, de fire regneartene og sammenhengen mellom brøk og desimaltall.',
  estimatedMinutes: 55,
  competenceGoals: [
    'rekne med brøk og sjå samanhengen mellom brøk, prosent og desimaltal',
  ],
  content: [
    // ── 1. Hva er en brøk ──────────────────────────────────────────────────
    {
      id: '1p-1-4-intro',
      type: 'text',
      content: `## Hva er en brøk?

En brøk beskriver en del av noe. Når vi deler en pizza i 8 like store stykker og spiser 3 av dem, har vi spist $\\frac{3}{8}$ av pizzaen.

En brøk skrives slik:

$$\\frac{\\text{teller}}{\\text{nevner}}$$

- **Telleren** (tallet over brøkstreken) forteller hvor mange deler vi har.
- **Nevneren** (tallet under brøkstreken) forteller hvor mange like store deler helheten er delt i.
- **Brøkstreken** betyr det samme som deling: $\\frac{3}{8} = 3 \\div 8$.`,
    },
    {
      id: '1p-1-4-def-brok',
      type: 'definition',
      title: 'Brøk',
      content: `En **brøk** er et tall på formen

$$\\frac{a}{b}, \\quad b \\neq 0$$

der $a$ kalles **telleren** og $b$ kalles **nevneren**.

Nevneren kan aldri være 0, fordi divisjon med 0 ikke er definert.`,
    },

    // ── 2. Uekte brøker og blanda tall ─────────────────────────────────────
    {
      id: '1p-1-4-uekte',
      type: 'text',
      content: `## Uekte brøker og blanda tall

Når telleren er like stor som eller større enn nevneren, kaller vi brøken **uekte**. For eksempel er $\\frac{7}{4}$ en uekte brøk fordi $7 > 4$.

Et **blanda tall** (blandet tall) består av et helt tall og en ekte brøk. For eksempel:

$$\\frac{7}{4} = 1\\frac{3}{4}$$

fordi $7 \\div 4 = 1$ med rest $3$.

**Fra blanda tall til uekte brøk:**
$$2\\frac{1}{3} = \\frac{2 \\cdot 3 + 1}{3} = \\frac{7}{3}$$`,
    },
    {
      id: '1p-1-4-example-uekte',
      type: 'example',
      title: 'Eksempel 1: Omregning mellom uekte brøker og blanda tall',
      problem: `a) Skriv $\\frac{11}{3}$ som blanda tall.

b) Skriv $3\\frac{2}{5}$ som uekte brøk.`,
      solution: `**Løsning:**

a) Vi deler $11$ på $3$: $11 \\div 3 = 3$ med rest $2$.
Altså: $\\frac{11}{3} = 3\\frac{2}{3}$

b) Vi ganger det hele tallet med nevneren og legger til telleren:
$3\\frac{2}{5} = \\frac{3 \\cdot 5 + 2}{5} = \\frac{17}{5}$`,
    },

    // ── 3. Forkorting og utviding ──────────────────────────────────────────
    {
      id: '1p-1-4-forkorting',
      type: 'text',
      content: `## Forkorting og utviding av brøker

To brøker som representerer samme verdi, kaller vi **likeverdige brøker**. For eksempel er $\\frac{2}{4}$ og $\\frac{1}{2}$ likeverdige.

**Å forkorte** en brøk betyr å dele teller og nevner med det samme tallet:

$$\\frac{6}{8} = \\frac{6 \\div 2}{8 \\div 2} = \\frac{3}{4}$$

**Å utvide** en brøk betyr å gange teller og nevner med det samme tallet:

$$\\frac{3}{4} = \\frac{3 \\cdot 3}{4 \\cdot 3} = \\frac{9}{12}$$

Verdien av brøken endres ikke, fordi vi egentlig ganger eller deler med 1.`,
    },
    {
      id: '1p-1-4-def-forkorte',
      type: 'definition',
      title: 'Forkorting og utviding',
      content: `**Å forkorte** en brøk: dele teller og nevner med et felles tall.

$$\\frac{a}{b} = \\frac{a \\div k}{b \\div k}$$

**Å utvide** en brøk: gange teller og nevner med det samme tallet.

$$\\frac{a}{b} = \\frac{a \\cdot k}{b \\cdot k}$$

En brøk er **fullt forkortet** når teller og nevner ikke har noen felles faktor utenom 1.`,
    },
    {
      id: '1p-1-4-ex-forkorte',
      type: 'exercise',
      exercise: {
        id: '1p-1-4-ex-1',
        number: '1.17',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forkort brøkene så langt som mulig:',
        subTasks: [
          {
            label: 'a',
            task: '$\\frac{12}{18}$',
            solution: '$\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$',
            answer: '2/3',
            multipleChoiceOptions: ['2/3', '3/4', '4/6', '6/9'],
          },
          {
            label: 'b',
            task: '$\\frac{15}{25}$',
            solution: '$\\frac{15}{25} = \\frac{15 \\div 5}{25 \\div 5} = \\frac{3}{5}$',
            answer: '3/5',
            multipleChoiceOptions: ['3/5', '5/3', '1/5', '3/10'],
          },
          {
            label: 'c',
            task: '$\\frac{28}{42}$',
            solution:
              '$\\frac{28}{42} = \\frac{28 \\div 14}{42 \\div 14} = \\frac{2}{3}$',
            answer: '2/3',
            multipleChoiceOptions: ['2/3', '4/6', '7/11', '14/21'],
          },
          {
            label: 'd',
            task: '$\\frac{36}{48}$',
            solution:
              '$\\frac{36}{48} = \\frac{36 \\div 12}{48 \\div 12} = \\frac{3}{4}$',
            answer: '3/4',
            multipleChoiceOptions: ['3/4', '6/8', '9/16', '4/3'],
          },
        ],
        solution: 'a) 2/3  b) 3/5  c) 2/3  d) 3/4',
        hints: ['Finn den største felles faktoren (SFF) for teller og nevner.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ── 4. Addisjon og subtraksjon ─────────────────────────────────────────
    {
      id: '1p-1-4-add-sub',
      type: 'text',
      content: `## Addisjon og subtraksjon av brøker

For å legge sammen eller trekke fra brøker, må brøkene ha **lik nevner** (fellesnevner).

**Med lik nevner** legger vi sammen tellerne og beholder nevneren:

$$\\frac{2}{7} + \\frac{3}{7} = \\frac{2+3}{7} = \\frac{5}{7}$$

**Med ulik nevner** utvider vi brøkene slik at de får fellesnevner:

$$\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$$

Vi fant fellesnevner 12 (minste felles multiplum av 3 og 4) og utvidet begge brøkene.`,
    },
    {
      id: '1p-1-4-example-add',
      type: 'example',
      title: 'Eksempel 2: Addisjon og subtraksjon med fellesnevner',
      problem: `a) $\\frac{2}{5} + \\frac{1}{3}$

b) $\\frac{5}{6} - \\frac{1}{4}$`,
      solution: `**Løsning:**

a) Fellesnevner for 5 og 3 er 15.
$$\\frac{2}{5} + \\frac{1}{3} = \\frac{2 \\cdot 3}{15} + \\frac{1 \\cdot 5}{15} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$$

b) Fellesnevner for 6 og 4 er 12.
$$\\frac{5}{6} - \\frac{1}{4} = \\frac{5 \\cdot 2}{12} - \\frac{1 \\cdot 3}{12} = \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$$`,
    },
    {
      id: '1p-1-4-ex-add-sub',
      type: 'exercise',
      exercise: {
        id: '1p-1-4-ex-2',
        number: '1.18',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forkort svaret så langt som mulig:',
        subTasks: [
          {
            label: 'a',
            task: '$\\frac{3}{4} + \\frac{1}{6}$',
            solution:
              'Fellesnevner 12: $\\frac{9}{12} + \\frac{2}{12} = \\frac{11}{12}$',
            answer: '11/12',
            multipleChoiceOptions: ['11/12', '4/10', '2/5', '1/2'],
          },
          {
            label: 'b',
            task: '$\\frac{7}{8} - \\frac{1}{3}$',
            solution:
              'Fellesnevner 24: $\\frac{21}{24} - \\frac{8}{24} = \\frac{13}{24}$',
            answer: '13/24',
            multipleChoiceOptions: ['13/24', '6/5', '3/4', '6/11'],
          },
          {
            label: 'c',
            task: '$\\frac{2}{9} + \\frac{5}{6}$',
            solution:
              'Fellesnevner 18: $\\frac{4}{18} + \\frac{15}{18} = \\frac{19}{18} = 1\\frac{1}{18}$',
            answer: '19/18',
            multipleChoiceOptions: ['19/18', '7/15', '1', '7/9'],
          },
          {
            label: 'd',
            task: '$1\\frac{1}{2} - \\frac{3}{5}$',
            solution:
              '$\\frac{3}{2} - \\frac{3}{5}$. Fellesnevner 10: $\\frac{15}{10} - \\frac{6}{10} = \\frac{9}{10}$',
            answer: '9/10',
            multipleChoiceOptions: ['9/10', '2/3', '1/2', '3/7'],
          },
        ],
        solution: 'a) 11/12  b) 13/24  c) 19/18  d) 9/10',
        hints: [
          'Finn fellesnevner ved å se etter minste felles multiplum.',
          'Husk å utvide begge brøkene slik at de får lik nevner.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ── 5. Multiplikasjon og divisjon ──────────────────────────────────────
    {
      id: '1p-1-4-mult-div',
      type: 'text',
      content: `## Multiplikasjon og divisjon av brøker

**Multiplikasjon:** Vi ganger teller med teller og nevner med nevner.

$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$$

**Divisjon:** Vi ganger med den omvendte brøken (vi snur den brøken vi deler med).

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}$$

Å «snu brøken» betyr å bytte teller og nevner. Den omvendte brøken av $\\frac{3}{4}$ er $\\frac{4}{3}$.`,
    },
    {
      id: '1p-1-4-example-mult',
      type: 'example',
      title: 'Eksempel 3: Multiplikasjon og divisjon av brøker',
      problem: `a) $\\frac{3}{5} \\cdot \\frac{2}{7}$

b) $\\frac{4}{9} \\div \\frac{2}{3}$

c) Et oppskrift bruker $\\frac{3}{4}$ liter melk. Hvor mye melk trenger du for å lage halve oppskriften?`,
      solution: `**Løsning:**

a) $\\frac{3}{5} \\cdot \\frac{2}{7} = \\frac{3 \\cdot 2}{5 \\cdot 7} = \\frac{6}{35}$

b) Vi snur brøken vi deler med:
$\\frac{4}{9} \\div \\frac{2}{3} = \\frac{4}{9} \\cdot \\frac{3}{2} = \\frac{12}{18} = \\frac{2}{3}$

c) Halve oppskriften betyr $\\frac{1}{2}$ av $\\frac{3}{4}$ liter:
$\\frac{1}{2} \\cdot \\frac{3}{4} = \\frac{3}{8}$ liter melk`,
    },
    {
      id: '1p-1-4-ex-mult-div',
      type: 'exercise',
      exercise: {
        id: '1p-1-4-ex-3',
        number: '1.19',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forkort svaret:',
        subTasks: [
          {
            label: 'a',
            task: '$\\frac{5}{6} \\cdot \\frac{3}{10}$',
            solution:
              '$\\frac{5 \\cdot 3}{6 \\cdot 10} = \\frac{15}{60} = \\frac{1}{4}$',
            answer: '1/4',
            multipleChoiceOptions: ['1/4', '15/60', '8/16', '1/2'],
          },
          {
            label: 'b',
            task: '$\\frac{7}{8} \\div \\frac{7}{4}$',
            solution:
              '$\\frac{7}{8} \\cdot \\frac{4}{7} = \\frac{28}{56} = \\frac{1}{2}$',
            answer: '1/2',
            multipleChoiceOptions: ['1/2', '1/4', '2', '49/32'],
          },
          {
            label: 'c',
            task: '$2 \\cdot \\frac{5}{9}$',
            solution:
              '$\\frac{2}{1} \\cdot \\frac{5}{9} = \\frac{10}{9} = 1\\frac{1}{9}$',
            answer: '10/9',
            multipleChoiceOptions: ['10/9', '7/9', '5/18', '10/18'],
          },
          {
            label: 'd',
            task: '$\\frac{3}{4} \\div 6$',
            solution:
              '$\\frac{3}{4} \\div \\frac{6}{1} = \\frac{3}{4} \\cdot \\frac{1}{6} = \\frac{3}{24} = \\frac{1}{8}$',
            answer: '1/8',
            multipleChoiceOptions: ['1/8', '18/4', '9/2', '3/24'],
          },
        ],
        solution: 'a) 1/4  b) 1/2  c) 10/9  d) 1/8',
        hints: [
          'Multiplikasjon: teller ganger teller, nevner ganger nevner.',
          'Divisjon: snu brøken du deler med, og gang.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ── 6. Brøk og desimaltall ─────────────────────────────────────────────
    {
      id: '1p-1-4-desimal',
      type: 'text',
      content: `## Brøk og desimaltall — omregning

Brøker og desimaltall er to måter å skrive det samme tallet på.

**Fra brøk til desimaltall:** Del telleren på nevneren.

$$\\frac{3}{4} = 3 \\div 4 = 0{,}75$$

**Fra desimaltall til brøk:** Skriv desimaltallet som en brøk med nevner 10, 100 osv.

$$0{,}6 = \\frac{6}{10} = \\frac{3}{5}$$

$$0{,}125 = \\frac{125}{1000} = \\frac{1}{8}$$

Noen brøker gir uendelige desimaltall: $\\frac{1}{3} = 0{,}333\\ldots = 0{,}\\overline{3}$`,
    },
    {
      id: '1p-1-4-tip-omregning',
      type: 'tip',
      title: 'Nyttige brøk–desimaltall-par',
      content: `Disse bør du kjenne godt:

| Brøk | Desimaltall | Prosent |
|------|-------------|---------|
| $\\frac{1}{2}$ | $0{,}5$ | $50\\%$ |
| $\\frac{1}{4}$ | $0{,}25$ | $25\\%$ |
| $\\frac{3}{4}$ | $0{,}75$ | $75\\%$ |
| $\\frac{1}{5}$ | $0{,}2$ | $20\\%$ |
| $\\frac{1}{8}$ | $0{,}125$ | $12{,}5\\%$ |
| $\\frac{1}{3}$ | $0{,}\\overline{3}$ | $33{,}\\overline{3}\\%$ |`,
    },
    {
      id: '1p-1-4-ex-desimal',
      type: 'exercise',
      exercise: {
        id: '1p-1-4-ex-4',
        number: '1.20',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn om mellom brøk og desimaltall:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv $\\frac{7}{8}$ som desimaltall.',
            solution: '$\\frac{7}{8} = 7 \\div 8 = 0{,}875$',
            answer: 0.875,
            multipleChoiceOptions: ['0,875', '0,78', '1,14', '0,87'],
          },
          {
            label: 'b',
            task: 'Skriv $0{,}35$ som brøk.',
            solution:
              '$0{,}35 = \\frac{35}{100} = \\frac{7}{20}$',
            answer: '7/20',
            multipleChoiceOptions: ['7/20', '35/10', '7/10', '1/3'],
          },
          {
            label: 'c',
            task: 'Skriv $\\frac{5}{6}$ som desimaltall (avrund til to desimaler).',
            solution: '$\\frac{5}{6} = 5 \\div 6 \\approx 0{,}83$',
            answer: 0.83,
            multipleChoiceOptions: ['0,83', '0,56', '1,20', '0,86'],
          },
          {
            label: 'd',
            task: 'Skriv $1{,}6$ som brøk.',
            solution: '$1{,}6 = \\frac{16}{10} = \\frac{8}{5}$',
            answer: '8/5',
            multipleChoiceOptions: ['8/5', '16/10', '4/5', '6/10'],
          },
        ],
        solution: 'a) 0,875  b) 7/20  c) 0,83  d) 8/5',
        hints: ['Fra brøk til desimal: del telleren på nevneren.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ── 7. Brøkdelen av et tall ────────────────────────────────────────────
    {
      id: '1p-1-4-brokdel',
      type: 'text',
      content: `## Brøkdelen av et tall

Å finne en brøkdel av et tall bruker vi ofte i hverdagen. «$\\frac{2}{3}$ av 900» betyr $\\frac{2}{3} \\cdot 900$.

**Fremgangsmåte:**
1. Del tallet på nevneren (for å finne én del).
2. Gang med telleren (for å finne riktig antall deler).

**Eksempler fra hverdagen:**
- En oppskrift som lages i $\\frac{3}{4}$ porsjon
- $\\frac{1}{5}$ av budsjettet brukes på transport
- Et salg gir $\\frac{2}{3}$ rabatt`,
    },
    {
      id: '1p-1-4-example-brokdel',
      type: 'example',
      title: 'Eksempel 4: Brøkdelen av et tall i praksis',
      problem: `a) Finn $\\frac{3}{5}$ av 400 kr.

b) En maler har 12 liter maling. Han bruker $\\frac{5}{6}$ av malingen på et gjerde. Hvor mange liter brukte han?`,
      solution: `**Løsning:**

a) $\\frac{3}{5}$ av $400 = \\frac{3}{5} \\cdot 400 = \\frac{3 \\cdot 400}{5} = \\frac{1200}{5} = 240$ kr

b) $\\frac{5}{6}$ av $12 = \\frac{5}{6} \\cdot 12 = \\frac{60}{6} = 10$ liter maling`,
    },
    {
      id: '1p-1-4-ex-brokdel',
      type: 'exercise',
      exercise: {
        id: '1p-1-4-ex-5',
        number: '1.21',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn brøkdelen:',
        subTasks: [
          {
            label: 'a',
            task: '$\\frac{2}{7}$ av 350',
            solution: '$\\frac{2}{7} \\cdot 350 = \\frac{700}{7} = 100$',
            answer: 100,
            multipleChoiceOptions: ['100', '50', '175', '70'],
          },
          {
            label: 'b',
            task: '$\\frac{4}{5}$ av 200 kr',
            solution: '$\\frac{4}{5} \\cdot 200 = \\frac{800}{5} = 160$ kr',
            answer: 160,
            multipleChoiceOptions: ['160 kr', '40 kr', '250 kr', '80 kr'],
          },
          {
            label: 'c',
            task: 'Et treningsstudio har 240 medlemmer. $\\frac{3}{8}$ av medlemmene trener på morgenen. Hvor mange er det?',
            solution:
              '$\\frac{3}{8} \\cdot 240 = \\frac{720}{8} = 90$ medlemmer',
            answer: 90,
            multipleChoiceOptions: ['90', '30', '80', '120'],
          },
          {
            label: 'd',
            task: 'En tur er 15 km lang. Du har gått $\\frac{2}{3}$ av turen. Hvor langt har du gått?',
            solution: '$\\frac{2}{3} \\cdot 15 = \\frac{30}{3} = 10$ km',
            answer: 10,
            multipleChoiceOptions: ['10 km', '5 km', '7,5 km', '12 km'],
          },
        ],
        solution: 'a) 100  b) 160 kr  c) 90  d) 10 km',
        hints: [
          'Brøkdel av et tall: gang brøken med tallet.',
          'Du kan også dele tallet på nevneren først, og deretter gange med telleren.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ── 8. Vanlig feil ─────────────────────────────────────────────────────
    {
      id: '1p-1-4-warning',
      type: 'warning',
      title: 'Vanlige feil i brøkregning',
      content: `**Feil 1: Legge sammen teller og nevner**
$\\frac{1}{3} + \\frac{1}{4} \\neq \\frac{2}{7}$ — Du må finne fellesnevner først!

**Feil 2: Glemme å forkorte**
$\\frac{4}{6}$ bør forkortes til $\\frac{2}{3}$.

**Feil 3: Forkorte ved addisjon**
$\\frac{3 + 6}{6} \\neq \\frac{3}{6} + 1$ — Man kan bare forkorte faktorer, ikke ledd i en sum.`,
    },

    // ── 9. Oppsummering ────────────────────────────────────────────────────
    {
      id: '1p-1-4-oppsummering',
      type: 'note',
      content: `**Oppsummering — Brøkregning:**
- En brøk $\\frac{a}{b}$ har teller $a$ og nevner $b$.
- **Forkorte:** del teller og nevner med samme tall. **Utvide:** gang med samme tall.
- **Addisjon/subtraksjon:** Finn fellesnevner, regn med tellerne.
- **Multiplikasjon:** Teller ganger teller, nevner ganger nevner.
- **Divisjon:** Gang med den omvendte brøken.
- **Brøk → desimaltall:** Del telleren på nevneren.
- **Desimaltall → brøk:** Skriv med nevner 10, 100, … og forkort.
- **Brøkdel av et tall:** $\\frac{a}{b} \\cdot \\text{tall}$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5: REGNEREKKEFØLGE OG OVERSLAGSREGNING
// ============================================================================

export const CHAPTER_1P_1_5: TextbookChapter = {
  id: '1p-1-5',
  courseId: '1p',
  chapterNumber: '1.5',
  title: 'Regnerekkefølge og overslagsregning',
  description:
    'Lær om rekkefølgen vi regner i, hvordan parenteser påvirker regnestykker, og hvordan du raskt kan anslå et svar med overslagsregning.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og digital rekning',
  ],
  content: [
    // ── 1. Regnerekkefølge ─────────────────────────────────────────────────
    {
      id: '1p-1-5-intro',
      type: 'text',
      content: `## Regnerekkefølge

Når et uttrykk inneholder flere regnearter, må vi følge en fast **regnerekkefølge** for å få riktig svar. Uten slike regler ville uttrykket $2 + 3 \\cdot 4$ kunne bety både 20 og 14 — og da blir det kaos!

Rekkefølgen er:

1. **Parenteser** — regn alltid det som står i parenteser først.
2. **Potenser** — regn ut potenser (f.eks. $3^2$).
3. **Multiplikasjon og divisjon** — fra venstre mot høyre.
4. **Addisjon og subtraksjon** — fra venstre mot høyre.

Huskeregelen «**PEMDAS**» brukes i mange land: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.`,
    },
    {
      id: '1p-1-5-def-rekkefolge',
      type: 'definition',
      title: 'Regnerekkefølge',
      content: `I et sammensatt uttrykk regner vi alltid i denne rekkefølgen:

$$\\text{Parenteser} \\;\\rightarrow\\; \\text{Potenser} \\;\\rightarrow\\; \\text{Multiplikasjon/Divisjon} \\;\\rightarrow\\; \\text{Addisjon/Subtraksjon}$$

Multiplikasjon og divisjon har lik prioritet og regnes **fra venstre mot høyre**. Det samme gjelder addisjon og subtraksjon.`,
    },
    {
      id: '1p-1-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Regnerekkefølge',
      problem: `Regn ut:

a) $3 + 4 \\cdot 5$

b) $20 - 12 \\div 4 + 1$

c) $2 \\cdot 3^2 - 5$`,
      solution: `**Løsning:**

a) Multiplikasjon før addisjon:
$3 + 4 \\cdot 5 = 3 + 20 = 23$

b) Divisjon før addisjon og subtraksjon:
$20 - 12 \\div 4 + 1 = 20 - 3 + 1 = 18$

c) Potens først, deretter multiplikasjon, til slutt subtraksjon:
$2 \\cdot 3^2 - 5 = 2 \\cdot 9 - 5 = 18 - 5 = 13$`,
    },
    {
      id: '1p-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: '1p-1-5-ex-1',
        number: '1.22',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut uten kalkulator:',
        subTasks: [
          {
            label: 'a',
            task: '$5 + 2 \\cdot 6$',
            solution: '$5 + 12 = 17$',
            answer: 17,
            multipleChoiceOptions: ['17', '42', '13', '30'],
          },
          {
            label: 'b',
            task: '$30 - 8 \\div 2$',
            solution: '$30 - 4 = 26$',
            answer: 26,
            multipleChoiceOptions: ['26', '11', '34', '22'],
          },
          {
            label: 'c',
            task: '$4 \\cdot 5 + 3 \\cdot 2$',
            solution: '$20 + 6 = 26$',
            answer: 26,
            multipleChoiceOptions: ['26', '46', '70', '16'],
          },
          {
            label: 'd',
            task: '$10 - 2^3 + 1$',
            solution: '$10 - 8 + 1 = 3$',
            answer: 3,
            multipleChoiceOptions: ['3', '27', '9', '1'],
          },
        ],
        solution: 'a) 17  b) 26  c) 26  d) 3',
        hints: [
          'Husk: ganging og deling kommer før pluss og minus.',
          'Potenser regnes før ganging.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ── 2. Parenteser ──────────────────────────────────────────────────────
    {
      id: '1p-1-5-parenteser',
      type: 'text',
      content: `## Parenteser og nestede parenteser

Parenteser overstyrer den vanlige regnerekkefølgen. Alt inni en parentes regnes ut først.

$$3 \\cdot (2 + 5) = 3 \\cdot 7 = 21$$

uten parentes: $3 \\cdot 2 + 5 = 6 + 5 = 11$

Når vi har **nestede parenteser** (parenteser inni parenteser), starter vi med den innerste:

$$4 \\cdot (3 + (8 - 5)) = 4 \\cdot (3 + 3) = 4 \\cdot 6 = 24$$

I noen uttrykk brukes hakeparenteser og krøllparenteser for å gjøre det lettere å lese, men de fungerer på samme måte: $\\{$ … $[$ … $($ innerst $)$ … $]$ … $\\}$.`,
    },
    {
      id: '1p-1-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Regning med parenteser',
      problem: `Regn ut:

a) $(7 - 3) \\cdot (2 + 6)$

b) $50 - 2 \\cdot (4 + 3)^2$`,
      solution: `**Løsning:**

a) Regn ut begge parentesene først:
$(7 - 3) \\cdot (2 + 6) = 4 \\cdot 8 = 32$

b) Parentes først, så potens, så multiplikasjon, til slutt subtraksjon:
$50 - 2 \\cdot (4 + 3)^2 = 50 - 2 \\cdot 7^2 = 50 - 2 \\cdot 49 = 50 - 98 = -48$`,
    },

    // ── 3. Negative tall ──────────────────────────────────────────────────
    {
      id: '1p-1-5-negative',
      type: 'text',
      content: `## Negative tall i regning

Negative tall oppfører seg litt annerledes enn positive. Her er de viktigste regnereglene:

- **Pluss og minus:** $5 + (-3) = 5 - 3 = 2$
- **Minus og minus:** $5 - (-3) = 5 + 3 = 8$ (to minus etter hverandre blir pluss)
- **Ganging:** Likt fortegn gir pluss, ulikt fortegn gir minus:
  - $(-4) \\cdot (-3) = 12$
  - $(-4) \\cdot 3 = -12$
  - $4 \\cdot (-3) = -12$

Tenk på det slik: «minus ganger minus er pluss» og «minus ganger pluss er minus».`,
    },
    {
      id: '1p-1-5-warning-neg',
      type: 'warning',
      title: 'Vanlig feil med negative tall',
      content: `Pass på forskjellen mellom «minus som fortegn» og «minus som regneoperasjon»:

- $-3^2 = -(3^2) = -9$ (minustegnet hører ikke til potensen)
- $(-3)^2 = (-3) \\cdot (-3) = 9$ (hele det negative tallet er opphøyd)

Hvis det negative tallet er i en parentes, gjelder potensen hele tallet.`,
    },
    {
      id: '1p-1-5-ex-neg',
      type: 'exercise',
      exercise: {
        id: '1p-1-5-ex-2',
        number: '1.23',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut:',
        subTasks: [
          {
            label: 'a',
            task: '$-4 + 7 - (-3)$',
            solution: '$-4 + 7 + 3 = 6$',
            answer: 6,
            multipleChoiceOptions: ['6', '0', '-14', '14'],
          },
          {
            label: 'b',
            task: '$(-5) \\cdot (-6)$',
            solution: 'Likt fortegn gir pluss: $(-5) \\cdot (-6) = 30$',
            answer: 30,
            multipleChoiceOptions: ['30', '-30', '11', '-11'],
          },
          {
            label: 'c',
            task: '$(-2)^3$',
            solution:
              '$(-2)^3 = (-2) \\cdot (-2) \\cdot (-2) = 4 \\cdot (-2) = -8$',
            answer: -8,
            multipleChoiceOptions: ['-8', '8', '-6', '6'],
          },
          {
            label: 'd',
            task: '$10 - 3 \\cdot (-4 + 2)$',
            solution:
              '$10 - 3 \\cdot (-2) = 10 - (-6) = 10 + 6 = 16$',
            answer: 16,
            multipleChoiceOptions: ['16', '4', '-16', '22'],
          },
        ],
        solution: 'a) 6  b) 30  c) -8  d) 16',
        hints: [
          'Minus ganger minus er pluss.',
          'Regn ut parenteser først.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ── 4. Hoderegning og regnemetoder ─────────────────────────────────────
    {
      id: '1p-1-5-hoderegning',
      type: 'text',
      content: `## Hoderegning og regnemetoder

Gode hoderegningsstrategier gjør deg raskere og sikrere. Her er noen nyttige metoder:

**Omgruppering:** Bytt om rekkefølgen for å gjøre regningen enklere.
$$47 + 86 + 53 = (47 + 53) + 86 = 100 + 86 = 186$$

**Kompensasjon:** Rund av og juster etterpå.
$$98 \\cdot 7 = 100 \\cdot 7 - 2 \\cdot 7 = 700 - 14 = 686$$

**Oppdeling:** Del opp et av tallene.
$$35 \\cdot 12 = 35 \\cdot 10 + 35 \\cdot 2 = 350 + 70 = 420$$

**Halvering og dobling:** Gjør en faktor enklere.
$$25 \\cdot 16 = 50 \\cdot 8 = 400$$`,
    },
    {
      id: '1p-1-5-tip-hoderegning',
      type: 'tip',
      title: 'Tips for raskere hoderegning',
      content: `- **Gang med 5:** Gang med 10 og del på 2. For eksempel: $36 \\cdot 5 = 360 \\div 2 = 180$.
- **Gang med 9:** Gang med 10 og trekk fra tallet. For eksempel: $14 \\cdot 9 = 140 - 14 = 126$.
- **Gang med 11:** Skriv sifrene med summen i midten. For eksempel: $34 \\cdot 11 = 374$ (3, 3+4=7, 4).
- **Pluss med store tall:** Rund opp til nærmeste tier og trekk fra differansen.`,
    },

    // ── 5. Overslagsregning ────────────────────────────────────────────────
    {
      id: '1p-1-5-overslag',
      type: 'text',
      content: `## Overslagsregning

Overslagsregning betyr å beregne et **omtrentlig svar** ved å runde av tallene før vi regner. Det er nyttig for å:

- Sjekke at kalkulatorsvaret virker rimelig
- Gjøre raske anslag i hverdagen (f.eks. «har jeg nok penger?»)
- Planlegge tid, materialer og kostnader

**Fremgangsmåte:**
1. Rund av tallene til passende nøyaktighet (f.eks. nærmeste tier eller hundrer).
2. Regn med de avrundede tallene.
3. Vurder om resultatet er nøyaktig nok for formålet.

Eksempel: $189 + 314 + 78 \\approx 190 + 310 + 80 = 580$`,
    },
    {
      id: '1p-1-5-def-overslag',
      type: 'definition',
      title: 'Overslagsregning',
      content: `**Overslagsregning** er å finne et tilnærmet svar raskt ved å avrunde tallene i oppgaven til enklere tall før man regner.

Symbolet $\\approx$ betyr «er omtrent lik».

$$287 \\cdot 4{,}1 \\approx 300 \\cdot 4 = 1200$$

(Nøyaktig svar: $1176{,}7$)`,
    },
    {
      id: '1p-1-5-example-overslag',
      type: 'example',
      title: 'Eksempel 3: Overslagsregning i hverdagen',
      problem: `a) Du handler matvarer til 38 kr, 72 kr, 19 kr og 55 kr. Anslå totalprisen.

b) En håndverker bruker $4{,}8$ timer på en jobb og tar 395 kr per time. Anslå totalkostnaden.`,
      solution: `**Løsning:**

a) Rund av til nærmeste tier:
$38 + 72 + 19 + 55 \\approx 40 + 70 + 20 + 60 = 190$ kr
(Nøyaktig: 184 kr — avviket er kun 6 kr.)

b) Rund av:
$4{,}8 \\cdot 395 \\approx 5 \\cdot 400 = 2000$ kr
(Nøyaktig: 1896 kr — overslaget er nært nok til å vurdere om man har råd.)`,
    },
    {
      id: '1p-1-5-ex-overslag',
      type: 'exercise',
      exercise: {
        id: '1p-1-5-ex-3',
        number: '1.24',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør et overslag og velg det svaret som er nærmest:',
        subTasks: [
          {
            label: 'a',
            task: '$212 + 389 + 104$',
            solution:
              '$\\approx 210 + 390 + 100 = 700$. Nøyaktig: $705$.',
            answer: 705,
            multipleChoiceOptions: ['ca. 700', 'ca. 500', 'ca. 800', 'ca. 600'],
          },
          {
            label: 'b',
            task: '$48 \\cdot 21$',
            solution: '$\\approx 50 \\cdot 20 = 1000$. Nøyaktig: $1008$.',
            answer: 1008,
            multipleChoiceOptions: [
              'ca. 1000',
              'ca. 800',
              'ca. 1200',
              'ca. 500',
            ],
          },
          {
            label: 'c',
            task: '$975 \\div 4{,}8$',
            solution: '$\\approx 1000 \\div 5 = 200$. Nøyaktig: $\\approx 203$.',
            answer: 203,
            multipleChoiceOptions: [
              'ca. 200',
              'ca. 100',
              'ca. 500',
              'ca. 50',
            ],
          },
          {
            label: 'd',
            task: 'Du kjøper 3 varer til 79 kr, 52 kr og 124 kr. Har du nok med en 300-lapp?',
            solution:
              '$\\approx 80 + 50 + 120 = 250$ kr. Ja, 300 kr holder (nøyaktig: 255 kr).',
            answer: 255,
            multipleChoiceOptions: [
              'Ja, ca. 250 kr',
              'Nei, ca. 310 kr',
              'Ja, ca. 200 kr',
              'Nei, ca. 350 kr',
            ],
          },
        ],
        solution: 'a) ca. 700  b) ca. 1000  c) ca. 200  d) Ja, ca. 250 kr',
        hints: [
          'Rund av hvert tall til nærmeste tier eller hundrer.',
          'Velg avrunding som gjør regnestykket enkelt.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ── 6. Praktiske eksempler ─────────────────────────────────────────────
    {
      id: '1p-1-5-praktisk',
      type: 'text',
      content: `## Når er overslag nyttig?

Overslagsregning er viktig i mange situasjoner:

- **I butikken:** Sjekke at vekslepengene stemmer, eller om du har nok penger.
- **På reise:** Anslå reisetid, drivstofforbruk eller kostnader.
- **I jobben:** Estimere materialbruk, timeforbruk eller bæreevne.
- **Ved bruk av kalkulator:** Kontrollere at svaret du får virker fornuftig.

Et godt overslag fanger grovt riktig størrelsesorden. Hvis kalkulatoren viser at 48 × 21 = 108, bør du stusse — overslaget 50 × 20 = 1000 viser at svaret bør ligge rundt 1000, ikke 108 (du har glemt et siffer!).`,
    },
    {
      id: '1p-1-5-ex-praktisk',
      type: 'exercise',
      exercise: {
        id: '1p-1-5-ex-4',
        number: '1.25',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk overslagsregning og regnerekkefølge til å løse disse praktiske oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Du skal bygge et gjerde som er 24 m langt. Hvert gjerdebord er 1,8 m bredt. Omtrent hvor mange bord trenger du?',
            solution:
              '$24 \\div 1{,}8 \\approx 24 \\div 2 = 12$ bord. Nøyaktig: $\\approx 13{,}3$, altså 14 bord (rund opp).',
            answer: 14,
            multipleChoiceOptions: ['ca. 13–14 bord', 'ca. 8 bord', 'ca. 20 bord', 'ca. 48 bord'],
          },
          {
            label: 'b',
            task: 'Regn ut $3 \\cdot (15 - 7) + 4^2 \\div 2$.',
            solution:
              'Parentes: $(15 - 7) = 8$. Potens: $4^2 = 16$. Gange og dele: $3 \\cdot 8 = 24$ og $16 \\div 2 = 8$. Pluss: $24 + 8 = 32$.',
            answer: 32,
            multipleChoiceOptions: ['32', '52', '20', '40'],
          },
          {
            label: 'c',
            task: 'Fire venner bestiller mat til henholdsvis 149 kr, 178 kr, 132 kr og 201 kr. De deler regningen likt. Bruk overslag for å anslå hva hver betaler.',
            solution:
              '$149 + 178 + 132 + 201 \\approx 150 + 180 + 130 + 200 = 660$ kr. $660 \\div 4 = 165$ kr per person. Nøyaktig: $660 \\div 4 = 165$ kr (overslaget er meget nøyaktig her).',
            answer: 165,
            multipleChoiceOptions: ['ca. 165 kr', 'ca. 200 kr', 'ca. 130 kr', 'ca. 100 kr'],
          },
        ],
        solution: 'a) ca. 13–14 bord  b) 32  c) ca. 165 kr',
        hints: [
          'Husk regnerekkefølgen: parenteser, potenser, ganging/deling, pluss/minus.',
          'Ved overslag: rund av til tall som er lette å regne med i hodet.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ── 7. Oppsummering ────────────────────────────────────────────────────
    {
      id: '1p-1-5-oppsummering',
      type: 'note',
      content: `**Oppsummering — Regnerekkefølge og overslagsregning:**
- **Regnerekkefølge:** Parenteser → Potenser → Multiplikasjon/Divisjon → Addisjon/Subtraksjon.
- **Parenteser** regnes alltid ut først. Ved nestede parenteser starter du innerst.
- **Negative tall:** minus ganger minus = pluss, minus ganger pluss = minus.
- $-3^2 = -9$, men $(-3)^2 = 9$.
- **Hoderegning:** Bruk strategier som omgruppering, kompensasjon og oppdeling.
- **Overslagsregning:** Rund av til enklere tall og regn — nyttig for å sjekke svar og gjøre raske anslag.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLET EKSPORT
// ============================================================================

export const CHAPTERS_1P_TALLREGNING = [CHAPTER_1P_1_4, CHAPTER_1P_1_5];
