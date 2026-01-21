/**
 * Tekstbok kapitler for 8
 * Autogenerert fra textbook-content.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_8_1_1: TextbookChapter = {
  id: '8-1-1',
  courseId: '8',
  chapterNumber: '1.1',
  title: 'Heltall og regnerekkefølge',
  description: 'Lær om regning med positive og negative tall, og hvordan du regner ut uttrykk i riktig rekkefølge.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    {
      id: '8-1-1-intro',
      type: 'text',
      content: `## Hva er heltall?

**Heltall** er alle hele tall, både positive og negative, inkludert null.

$$\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$$

Vi kan vise heltallene på en **tallinje**:
- Tall til høyre for 0 er **positive** (større enn 0)
- Tall til venstre for 0 er **negative** (mindre enn 0)`,
    },
    {
      id: '8-1-1-tallinje-bilde',
      type: 'image',
      src: '/images/8-klasse/tallinje-negative.svg',
      alt: 'Tallinje med positive og negative heltall markert',
      caption: 'Tallinjen viser heltallene med positive tall til høyre og negative til venstre',
    },
    {
      id: '8-1-1-def-fortegn',
      type: 'definition',
      title: 'Fortegnsregler',
      content: `**Addisjon og subtraksjon:**
- $a + (-b) = a - b$
- $a - (-b) = a + b$ ("minus minus blir pluss")

**Multiplikasjon og divisjon:**
- Like fortegn gir **pluss**: $(+) \\cdot (+) = +$ og $(-) \\cdot (-) = +$
- Ulike fortegn gir **minus**: $(+) \\cdot (-) = -$ og $(-) \\cdot (+) = -$`,
    },
    {
      id: '8-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Addisjon og subtraksjon',
      problem: `Regn ut:
a) $5 - 8$
b) $-4 + 7$
c) $5 - (-3)$
d) $-6 - 2$`,
      solution: `**Løsning:**
a) $5 - 8 = -3$
b) $-4 + 7 = 3$
c) $5 - (-3) = 5 + 3 = 8$ (minus minus blir pluss)
d) $-6 - 2 = -8$`,
    },
    {
      id: '8-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$7 + 5$', solution: '$12$' },
          { label: 'b', task: '$10 - 15$', solution: '$-5$' },
          { label: 'c', task: '$-8 + 3$', solution: '$-5$' },
          { label: 'd', task: '$6 - (-4)$', solution: '$10$' },
          { label: 'e', task: '$-2 + (-6)$', solution: '$-8$' },
          { label: 'f', task: '$-7 - (-3)$', solution: '$-4$' },
        ],
        solution: 'a) 12, b) −5, c) −5, d) 10, e) −8, f) −4',
        hints: ['Minus minus blir pluss'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Multiplikasjon og divisjon',
      problem: `Regn ut:
a) $4 \\cdot (-5)$
b) $(-3) \\cdot (-6)$
c) $(-20) \\div 4$
d) $(-15) \\div (-3)$`,
      solution: `**Løsning:**
a) $4 \\cdot (-5) = -20$ (ulike fortegn)
b) $(-3) \\cdot (-6) = 18$ (like fortegn)
c) $(-20) \\div 4 = -5$ (ulike fortegn)
d) $(-15) \\div (-3) = 5$ (like fortegn)`,
    },
    {
      id: '8-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$(-5) \\cdot 4$', solution: '$-20$' },
          { label: 'b', task: '$(-6) \\cdot (-7)$', solution: '$42$' },
          { label: 'c', task: '$(-28) \\div 7$', solution: '$-4$' },
          { label: 'd', task: '$(-42) \\div (-6)$', solution: '$7$' },
        ],
        solution: 'a) −20, b) 42, c) −4, d) 7',
        hints: ['Like fortegn gir pluss, ulike gir minus'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-1-rekkefolge',
      type: 'definition',
      title: 'Regnerekkefølge',
      content: `Regn alltid i denne rekkefølgen:
1. **P**arenteser
2. **E**ksponenter (potenser)
3. **M**ultiplikasjon og **D**ivisjon (fra venstre)
4. **A**ddisjon og **S**ubtraksjon (fra venstre)`,
    },
    {
      id: '8-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Regnerekkefølge',
      problem: `Regn ut:
a) $3 + 4 \\cdot 2$
b) $(3 + 4) \\cdot 2$
c) $20 - 12 \\div 4$`,
      solution: `**Løsning:**
a) $3 + 4 \\cdot 2 = 3 + 8 = 11$ (multiplikasjon først)
b) $(3 + 4) \\cdot 2 = 7 \\cdot 2 = 14$ (parentes først)
c) $20 - 12 \\div 4 = 20 - 3 = 17$ (divisjon først)`,
    },
    {
      id: '8-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$5 + 3 \\cdot 2$', solution: '$11$' },
          { label: 'b', task: '$(6 + 2) \\cdot 3$', solution: '$24$' },
          { label: 'c', task: '$4 \\cdot 5 - 3 \\cdot 2$', solution: '$14$' },
          { label: 'd', task: '$-3 + 4 \\cdot (-2)$', solution: '$-11$' },
        ],
        solution: 'a) 11, b) 24, c) 14, d) −11',
        hints: ['Multiplikasjon før addisjon og subtraksjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs tekstoppgavene',
        subTasks: [
          { label: 'a', task: 'Temperaturen var $-8°C$. Den steg med 12 grader. Hva ble temperaturen?', solution: '$-8 + 12 = 4°C$' },
          { label: 'b', task: 'En dykker er på $-15$ meter. Hun dykker 8 meter dypere. Hvor dypt er hun?', solution: '$-15 - 8 = -23$ meter' },
        ],
        solution: 'a) 4°C, b) −23 meter',
        hints: ['Stiger = pluss, synker = minus'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== NYE OPPGAVER MED ILLUSTRASJONER ==========
    {
      id: '8-1-1-ill-tallinje',
      type: 'image',
      src: '/images/8-klasse/tallinje-negative.svg',
      alt: 'Tallinje med negative og positive tall',
      caption: 'Tallinjen viser negative tall til venstre for 0 og positive tall til høyre',
    },
    {
      id: '8-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Se på tallinjen over. Hvilke tall ligger på de markerte punktene, og hvilke av disse er negative?',
        image: '/images/8-klasse/tallinje-negative.svg',
        subTasks: [
          { label: 'a', task: 'Hvilket tall er markert med en blå prikk på tallinjen?', solution: '$-3$ (tallet er negativt fordi det ligger til venstre for 0)' },
          { label: 'b', task: 'Er $-3$ større eller mindre enn $-1$?', solution: '$-3 < -1$ (på tallinjen ligger $-3$ til venstre for $-1$, så det er mindre)' },
          { label: 'c', task: 'Hva er avstanden fra $-3$ til $2$ på tallinjen?', solution: 'Avstanden er $5$ enheter (fra $-3$ til $0$ er det 3, og fra $0$ til $2$ er det 2)' },
        ],
        solution: 'a) $-3$, b) $-3 < -1$, c) 5 enheter',
        hints: ['Negative tall ligger til venstre for 0. Tall til venstre er alltid mindre enn tall til høyre.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-1-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk tallinjen til å løse regnestykker. Start på et tall og tell fremover (pluss) eller bakover (minus).',
        image: '/images/8-klasse/tallinje-negative.svg',
        subTasks: [
          { label: 'a', task: 'Start på $-2$ og legg til $5$. Hvor havner du?', solution: '$-2 + 5 = 3$ (tell 5 steg til høyre fra $-2$)' },
          { label: 'b', task: 'Start på $1$ og trekk fra $4$. Hvor havner du?', solution: '$1 - 4 = -3$ (tell 4 steg til venstre fra $1$)' },
          { label: 'c', task: 'Start på $-4$ og legg til $4$. Hvor havner du?', solution: '$-4 + 4 = 0$ (du havner akkurat på null!)' },
        ],
        solution: 'a) 3, b) −3, c) 0',
        hints: ['Addisjon betyr å gå til høyre, subtraksjon betyr å gå til venstre på tallinjen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_1_2: TextbookChapter = {
  id: '8-1-2',
  courseId: '8',
  chapterNumber: '1.2',
  title: 'Brøk',
  description: 'Lær om brøkbegrepet, utviding, forkorting og regning med brøker.',
  estimatedMinutes: 60,
  competenceGoals: ['utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning'],
  content: [
    {
      id: '8-1-2-intro',
      type: 'text',
      content: `## Hva er en brøk?

En **brøk** viser en del av en helhet: $\\frac{\\text{teller}}{\\text{nevner}} = \\frac{3}{4}$

- **Telleren** (øverst): hvor mange deler vi har
- **Nevneren** (nederst): hvor mange deler helheten er delt i`,
    },
    {
      id: '8-1-2-def-utvide',
      type: 'definition',
      title: 'Utvide og forkorte',
      content: `**Utvide:** Gang teller og nevner med samme tall
$$\\frac{2}{3} = \\frac{2 \\cdot 2}{3 \\cdot 2} = \\frac{4}{6}$$

**Forkorte:** Del teller og nevner med samme tall
$$\\frac{6}{8} = \\frac{6 \\div 2}{8 \\div 2} = \\frac{3}{4}$$`,
    },
    {
      id: '8-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forkort brøkene så mye som mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{4}{6}$', solution: '$\\frac{2}{3}$' },
          { label: 'b', task: '$\\frac{10}{15}$', solution: '$\\frac{2}{3}$' },
          { label: 'c', task: '$\\frac{18}{24}$', solution: '$\\frac{3}{4}$' },
          { label: 'd', task: '$\\frac{21}{28}$', solution: '$\\frac{3}{4}$' },
        ],
        solution: 'a) 2/3, b) 2/3, c) 3/4, d) 3/4',
        hints: ['Finn felles faktor i teller og nevner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-2-add',
      type: 'text',
      content: `## Addisjon og subtraksjon

Brøkene må ha **lik nevner** (fellesnevner) før du legger sammen eller trekker fra.
$$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$$`,
    },
    {
      id: '8-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut. Forkort svaret hvis mulig.',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{7} + \\frac{2}{7}$', solution: '$\\frac{5}{7}$' },
          { label: 'b', task: '$\\frac{1}{3} + \\frac{1}{6}$', solution: '$\\frac{1}{2}$' },
          { label: 'c', task: '$\\frac{3}{4} - \\frac{1}{2}$', solution: '$\\frac{1}{4}$' },
          { label: 'd', task: '$\\frac{5}{6} - \\frac{2}{3}$', solution: '$\\frac{1}{6}$' },
        ],
        solution: 'a) 5/7, b) 1/2, c) 1/4, d) 1/6',
        hints: ['Finn fellesnevner først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-2-mult',
      type: 'definition',
      title: 'Multiplikasjon av brøker',
      content: `Gang teller med teller, nevner med nevner:
$$\\frac{2}{3} \\cdot \\frac{4}{5} = \\frac{2 \\cdot 4}{3 \\cdot 5} = \\frac{8}{15}$$`,
    },
    {
      id: '8-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{3} \\cdot \\frac{2}{5}$', solution: '$\\frac{2}{15}$' },
          { label: 'b', task: '$\\frac{3}{4} \\cdot \\frac{2}{3}$', solution: '$\\frac{1}{2}$' },
          { label: 'c', task: '$5 \\cdot \\frac{3}{4}$', solution: '$\\frac{15}{4}$' },
        ],
        solution: 'a) 2/15, b) 1/2, c) 15/4',
        hints: ['Forkort gjerne før du ganger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-2-div',
      type: 'definition',
      title: 'Divisjon av brøker',
      content: `Del med en brøk = gang med den omvendte:
$$\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\cdot \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$$`,
    },
    {
      id: '8-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2} \\div \\frac{1}{4}$', solution: '$2$' },
          { label: 'b', task: '$\\frac{3}{4} \\div \\frac{1}{2}$', solution: '$\\frac{3}{2}$' },
          { label: 'c', task: '$6 \\div \\frac{2}{3}$', solution: '$9$' },
        ],
        solution: 'a) 2, b) 3/2, c) 9',
        hints: ['Snu den andre brøken og gang'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_1_3: TextbookChapter = {
  id: '8-1-3',
  courseId: '8',
  chapterNumber: '1.3',
  title: 'Desimaltall',
  description: 'Lær om plassverdisystemet, regning med desimaltall og avrunding.',
  estimatedMinutes: 45,
  competenceGoals: [],
  content: [
    {
      id: '8-1-3-intro',
      type: 'text',
      content: `## Desimaltall

**Desimaltall** har en komma-del som viser brøkdeler:
$$3,14 = 3 + \\frac{14}{100}$$

**Plassverdier:**
- Første siffer etter komma = tideler (0,1)
- Andre siffer = hundredeler (0,01)
- Tredje siffer = tusendeler (0,001)`,
    },
    {
      id: '8-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv som brøk',
        subTasks: [
          { label: 'a', task: '$0,5$', solution: '$\\frac{1}{2}$' },
          { label: 'b', task: '$0,25$', solution: '$\\frac{1}{4}$' },
          { label: 'c', task: '$0,75$', solution: '$\\frac{3}{4}$' },
        ],
        solution: 'a) 1/2, b) 1/4, c) 3/4',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$3,5 + 2,4$', solution: '$5,9$' },
          { label: 'b', task: '$7,8 - 3,2$', solution: '$4,6$' },
          { label: 'c', task: '$2,5 \\cdot 4$', solution: '$10$' },
          { label: 'd', task: '$4,5 \\div 0,5$', solution: '$9$' },
        ],
        solution: 'a) 5,9, b) 4,6, c) 10, d) 9',
        hints: ['Still opp med komma under komma for + og −'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-3-avrunding',
      type: 'definition',
      title: 'Avrunding',
      content: `Se på sifferet til høyre for der du avrunder:
- 0, 1, 2, 3, 4 → avrund **ned**
- 5, 6, 7, 8, 9 → avrund **opp**`,
    },
    {
      id: '8-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avrund til én desimal',
        subTasks: [
          { label: 'a', task: '$3,47$', solution: '$3,5$' },
          { label: 'b', task: '$8,24$', solution: '$8,2$' },
          { label: 'c', task: '$5,95$', solution: '$6,0$' },
        ],
        solution: 'a) 3,5, b) 8,2, c) 6,0',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_1_4: TextbookChapter = {
  id: '8-1-4',
  courseId: '8',
  chapterNumber: '1.4',
  title: 'Prosent',
  description: 'Lær om prosentbegrepet og hvordan du regner med prosent.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  content: [
    {
      id: '8-1-4-intro',
      type: 'text',
      content: `## Hva er prosent?

**Prosent** betyr "per hundre":
$$25\\% = \\frac{25}{100} = 0,25$$`,
    },
    {
      id: '8-1-4-prosent-sirkel-bilde',
      type: 'image',
      src: '/images/8-klasse/prosent-sirkel.svg',
      alt: 'Sektordiagram som viser prosent som andel av en helhet',
      caption: 'Prosent viser hvor stor andel noe utgjor av en helhet',
    },
    {
      id: '8-1-4-def',
      type: 'definition',
      title: 'Tre typer prosentoppgaver',
      content: `1. **Finne prosent av et tall:** $20\\%$ av $150 = 0,20 \\cdot 150 = 30$

2. **Finne hvor mange prosent:** $\\frac{\\text{del}}{\\text{helhet}} \\cdot 100\\%$

3. **Finne hele tallet:** $\\frac{\\text{del}}{\\text{prosent}} \\cdot 100$`,
    },
    {
      id: '8-1-4-prosent-beregning-bilde',
      type: 'image',
      src: '/images/8-klasse/prosent-beregning.svg',
      alt: 'Illustrasjon av prosentberegning med del, helhet og prosent',
      caption: 'Sammenheng mellom del, helhet og prosent',
    },
    {
      id: '8-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv om mellom prosent, desimaltall og brøk',
        subTasks: [
          { label: 'a', task: '$75\\%$ som desimaltall', solution: '$0,75$' },
          { label: 'b', task: '$0,4$ som prosent', solution: '$40\\%$' },
          { label: 'c', task: '$\\frac{1}{5}$ som prosent', solution: '$20\\%$' },
        ],
        solution: 'a) 0,75, b) 40%, c) 20%',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn prosent av tallet',
        subTasks: [
          { label: 'a', task: '$50\\%$ av 60', solution: '$30$' },
          { label: 'b', task: '$10\\%$ av 250', solution: '$25$' },
          { label: 'c', task: '$30\\%$ av 400', solution: '$120$' },
        ],
        solution: 'a) 30, b) 25, c) 120',
        hints: ['Gjør prosent om til desimaltall og gang'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn hvor mange prosent',
        subTasks: [
          { label: 'a', task: '12 av 48', solution: '$25\\%$' },
          { label: 'b', task: '35 av 50', solution: '$70\\%$' },
        ],
        solution: 'a) 25%, b) 70%',
        hints: ['Del først, gang med 100'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktiske oppgaver',
        subTasks: [
          { label: 'a', task: 'En jakke koster 800 kr med 25% rabatt. Hva er rabatten?', solution: '$200$ kr' },
          { label: 'b', task: 'Du fikk 85% riktig på en prøve med 40 spørsmål. Hvor mange fikk du riktig?', solution: '$34$ spørsmål' },
        ],
        solution: 'a) 200 kr, b) 34 spørsmål',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_1_5: TextbookChapter = {
  id: '8-1-5',
  courseId: '8',
  chapterNumber: '1.5',
  title: 'Potenser',
  description: 'Lær om potenser med heltallseksponenter og potensregler.',
  estimatedMinutes: 40,
  competenceGoals: [],
  content: [
    {
      id: '8-1-5-intro',
      type: 'text',
      content: `## Hva er en potens?

En **potens** er gjentatt multiplikasjon:
$$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$$

- $2$ er **grunntallet**
- $5$ er **eksponenten** (antall ganger vi ganger)`,
    },
    {
      id: '8-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-1-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut potensene',
        subTasks: [
          { label: 'a', task: '$2^3$', solution: '$8$' },
          { label: 'b', task: '$3^2$', solution: '$9$' },
          { label: 'c', task: '$5^3$', solution: '$125$' },
          { label: 'd', task: '$10^4$', solution: '$10000$' },
        ],
        solution: 'a) 8, b) 9, c) 125, d) 10000',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-5-def',
      type: 'definition',
      title: 'Spesielle tilfeller',
      content: `- $a^1 = a$ (ethvert tall i første er seg selv)
- $a^0 = 1$ (ethvert tall i nullte er 1)
- $(-2)^4 = 16$ (negativt grunntall med partallseksponent gir positivt)
- $(-2)^3 = -8$ (negativt grunntall med oddetallseksponent gir negativt)`,
    },
    {
      id: '8-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-1-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$(-3)^2$', solution: '$9$' },
          { label: 'b', task: '$(-2)^3$', solution: '$-8$' },
          { label: 'c', task: '$5^0$', solution: '$1$' },
          { label: 'd', task: '$(-1)^{10}$', solution: '$1$' },
        ],
        solution: 'a) 9, b) −8, c) 1, d) 1',
        hints: ['Partallseksponent med negativt grunntall gir positivt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-1-5-regler',
      type: 'definition',
      title: 'Potensregler',
      content: `1. $a^m \\cdot a^n = a^{m+n}$ (legg sammen eksponentene)
2. $a^m \\div a^n = a^{m-n}$ (trekk fra eksponentene)
3. $(a^m)^n = a^{m \\cdot n}$ (gang eksponentene)`,
    },
    {
      id: '8-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle ved hjelp av potensreglene',
        subTasks: [
          { label: 'a', task: '$3^2 \\cdot 3^3$', solution: '$3^5 = 243$' },
          { label: 'b', task: '$2^7 \\div 2^4$', solution: '$2^3 = 8$' },
          { label: 'c', task: '$(2^3)^2$', solution: '$2^6 = 64$' },
        ],
        solution: 'a) 243, b) 8, c) 64',
        hints: ['Bruk potensreglene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_2_1: TextbookChapter = {
  id: '8-2-1',
  courseId: '8',
  chapterNumber: '2.1',
  title: 'Bokstavregning',
  description: 'Lær å bruke bokstaver (variabler) i matematikken.',
  estimatedMinutes: 45,
  competenceGoals: [],
  content: [
    {
      id: '8-2-1-intro',
      type: 'text',
      content: `## Hva er bokstavregning?

I algebra bruker vi **bokstaver** for å representere tall vi ikke kjenner. Disse kalles **variabler**.

For eksempel kan vi skrive:
- $x + 3$ betyr "et tall pluss 3"
- $2a$ betyr "2 ganger et tall"
- $\\frac{b}{4}$ betyr "et tall delt på 4"`,
    },
    {
      id: '8-2-1-def-1',
      type: 'definition',
      title: 'Viktige begreper',
      content: `- **Variabel**: En bokstav som representerer et tall (f.eks. $x$, $a$, $b$)
- **Konstantledd**: Et tall uten variabel (f.eks. $5$ i uttrykket $3x + 5$)
- **Koeffisient**: Tallet foran variabelen (f.eks. $3$ i $3x$)
- **Ledd**: Deler av et uttrykk adskilt med $+$ eller $-$`,
    },
    {
      id: '8-2-1-variabel-bilde',
      type: 'image',
      src: '/images/8-klasse/variabel-uttrykk.svg',
      alt: 'Illustrasjon av variabler og algebraiske uttrykk',
      caption: 'Variabler er bokstaver som representerer ukjente tall',
    },
    {
      id: '8-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Skriv uttrykkene med tall og bokstaver:

a) Et tall pluss 7
b) Det dobbelte av et tall
c) Halvparten av et tall
d) Et tall minus 4`,
      solution: `**Løsning:**

a) Et tall pluss 7: $x + 7$

b) Det dobbelte av et tall: $2x$

c) Halvparten av et tall: $\\frac{x}{2}$

d) Et tall minus 4: $x - 4$`,
    },
    {
      id: '8-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv uttrykkene med tall og bokstaver (bruk $x$ som variabel)',
        subTasks: [
          { label: 'a', task: 'Et tall pluss 5', solution: '$x + 5$' },
          { label: 'b', task: 'Et tall ganger 3', solution: '$3x$' },
          { label: 'c', task: 'Et tall delt på 2', solution: '$\\frac{x}{2}$' },
          { label: 'd', task: 'Et tall minus 8', solution: '$x - 8$' },
          { label: 'e', task: 'Det tredobbelte av et tall', solution: '$3x$' },
          { label: 'f', task: 'Summen av et tall og 12', solution: '$x + 12$' },
        ],
        solution: 'a) x+5, b) 3x, c) x/2, d) x−8, e) 3x, f) x+12',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-2-1-text-2',
      type: 'text',
      content: `## Å sette inn tall for bokstaver

Når vi kjenner verdien av variabelen, kan vi **sette inn** (substituere) tallet og regne ut.`,
    },
    {
      id: '8-2-1-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Regn ut når $a = 3$:

a) $2a + 5$
b) $a^2$
c) $4a - 7$`,
      solution: `**Løsning:**

a) $2a + 5 = 2 \\cdot 3 + 5 = 6 + 5 = 11$

b) $a^2 = 3^2 = 9$

c) $4a - 7 = 4 \\cdot 3 - 7 = 12 - 7 = 5$`,
    },
    {
      id: '8-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut når $x = 4$',
        subTasks: [
          { label: 'a', task: '$3x$', solution: '$3 \\cdot 4 = 12$' },
          { label: 'b', task: '$x + 7$', solution: '$4 + 7 = 11$' },
          { label: 'c', task: '$2x - 3$', solution: '$2 \\cdot 4 - 3 = 8 - 3 = 5$' },
          { label: 'd', task: '$x^2$', solution: '$4^2 = 16$' },
          { label: 'e', task: '$\\frac{x}{2} + 1$', solution: '$\\frac{4}{2} + 1 = 2 + 1 = 3$' },
        ],
        solution: 'a) 12, b) 11, c) 5, d) 16, e) 3',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-2-1-text-3',
      type: 'text',
      content: `## Forenkle uttrykk

Vi kan **forenkle** algebraiske uttrykk ved å slå sammen **like ledd** (ledd med samme variabel).`,
    },
    {
      id: '8-2-1-def-2',
      type: 'definition',
      title: 'Like ledd',
      content: `**Like ledd** er ledd som har samme variabel med samme eksponent.

- $3x$ og $5x$ er like ledd (begge har $x$)
- $2x^2$ og $7x^2$ er like ledd (begge har $x^2$)
- $3x$ og $3x^2$ er **ikke** like ledd (ulik eksponent)
- $2a$ og $5b$ er **ikke** like ledd (ulike variabler)`,
    },
    {
      id: '8-2-1-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Forenkle uttrykkene:

a) $3x + 5x$
b) $7a - 2a$
c) $4b + 3 + 2b$
d) $2x + 3y + 5x - y$`,
      solution: `**Løsning:**

a) $3x + 5x = 8x$ (slå sammen like ledd)

b) $7a - 2a = 5a$

c) $4b + 3 + 2b = 4b + 2b + 3 = 6b + 3$ (samle like ledd)

d) $2x + 3y + 5x - y = 2x + 5x + 3y - y = 7x + 2y$`,
    },
    {
      id: '8-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle uttrykkene',
        subTasks: [
          { label: 'a', task: '$4x + 3x$', solution: '$7x$' },
          { label: 'b', task: '$9a - 4a$', solution: '$5a$' },
          { label: 'c', task: '$2b + 5 + 4b$', solution: '$6b + 5$' },
          { label: 'd', task: '$3x + 2y + x + 5y$', solution: '$4x + 7y$' },
          { label: 'e', task: '$8m - 3n + 2m + n$', solution: '$10m - 2n$' },
          { label: 'f', task: '$6a + 4 - 2a - 1$', solution: '$4a + 3$' },
        ],
        solution: 'a) 7x, b) 5a, c) 6b+5, d) 4x+7y, e) 10m−2n, f) 4a+3',
        hints: ['Samle like ledd (ledd med samme variabel)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-2-1-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Multipliser:

a) $3 \\cdot 4x$
b) $2a \\cdot 5$
c) $3x \\cdot 2x$`,
      solution: `**Løsning:**

a) $3 \\cdot 4x = 12x$ (gang tallene)

b) $2a \\cdot 5 = 10a$

c) $3x \\cdot 2x = 6x^2$ (gang tallene og legg sammen eksponentene)`,
    },
    {
      id: '8-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Multipliser og forenkle',
        subTasks: [
          { label: 'a', task: '$2 \\cdot 5x$', solution: '$10x$' },
          { label: 'b', task: '$4a \\cdot 3$', solution: '$12a$' },
          { label: 'c', task: '$2x \\cdot 4x$', solution: '$8x^2$' },
          { label: 'd', task: '$3y \\cdot 2y$', solution: '$6y^2$' },
          { label: 'e', task: '$5 \\cdot 2a \\cdot 3$', solution: '$30a$' },
        ],
        solution: 'a) 10x, b) 12a, c) 8x², d) 6y², e) 30a',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_2_2: TextbookChapter = {
  id: '8-2-2',
  courseId: '8',
  chapterNumber: '2.2',
  title: 'Parenteser og regning',
  description: 'Lær å regne med parenteser og løse opp parentesuttrykk.',
  estimatedMinutes: 45,
  competenceGoals: [],
  content: [
    {
      id: '8-2-2-intro',
      type: 'text',
      content: `## Parenteser i algebra

Parenteser brukes til å gruppere ledd sammen. Når vi har et tall eller fortegn foran parentesen, må vi **multiplisere inn** i parentesen.`,
    },
    {
      id: '8-2-2-def-1',
      type: 'definition',
      title: 'Regler for parenteser',
      content: `- **Pluss foran parentes**: $+(a + b) = a + b$ (leddene beholder fortegnet)
- **Minus foran parentes**: $-(a + b) = -a - b$ (leddene skifter fortegn)
- **Tall ganger parentes**: $k(a + b) = ka + kb$ (multipliser hvert ledd)`,
    },
    {
      id: '8-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Løs opp parentesene:

a) $+(3x + 4)$
b) $-(2a - 5)$
c) $-(x + 3y - 2)$`,
      solution: `**Løsning:**

a) $+(3x + 4) = 3x + 4$ (leddene beholder fortegnet)

b) $-(2a - 5) = -2a + 5$ (leddene skifter fortegn)

c) $-(x + 3y - 2) = -x - 3y + 2$`,
    },
    {
      id: '8-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs opp parentesene',
        subTasks: [
          { label: 'a', task: '$+(5x + 2)$', solution: '$5x + 2$' },
          { label: 'b', task: '$-(4a + 3)$', solution: '$-4a - 3$' },
          { label: 'c', task: '$-(2b - 7)$', solution: '$-2b + 7$' },
          { label: 'd', task: '$+(x - 4y)$', solution: '$x - 4y$' },
          { label: 'e', task: '$-(3m + 2n - 1)$', solution: '$-3m - 2n + 1$' },
        ],
        solution: 'a) 5x+2, b) −4a−3, c) −2b+7, d) x−4y, e) −3m−2n+1',
        hints: ['Minus foran parentes snur fortegnet på alle ledd inni'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-2-2-text-2',
      type: 'text',
      content: `## Multiplisere inn i parentes

Når et tall står foran en parentes, må vi gange tallet med hvert ledd inni parentesen.`,
    },
    {
      id: '8-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Multipliser inn i parentesen:

a) $3(x + 4)$
b) $2(3a - 5)$
c) $-4(2b + 3)$`,
      solution: `**Løsning:**

a) $3(x + 4) = 3 \\cdot x + 3 \\cdot 4 = 3x + 12$

b) $2(3a - 5) = 2 \\cdot 3a - 2 \\cdot 5 = 6a - 10$

c) $-4(2b + 3) = -4 \\cdot 2b + (-4) \\cdot 3 = -8b - 12$`,
    },
    {
      id: '8-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Multipliser inn i parentesen',
        subTasks: [
          { label: 'a', task: '$2(x + 3)$', solution: '$2x + 6$' },
          { label: 'b', task: '$5(2a - 1)$', solution: '$10a - 5$' },
          { label: 'c', task: '$3(4b + 2)$', solution: '$12b + 6$' },
          { label: 'd', task: '$-2(3x + 4)$', solution: '$-6x - 8$' },
          { label: 'e', task: '$-3(2y - 5)$', solution: '$-6y + 15$' },
          { label: 'f', task: '$4(a + 2b - 3)$', solution: '$4a + 8b - 12$' },
        ],
        solution: 'a) 2x+6, b) 10a−5, c) 12b+6, d) −6x−8, e) −6y+15, f) 4a+8b−12',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-2-2-text-3',
      type: 'text',
      content: `## Løse opp og forenkle

Ofte må vi først løse opp parenteser, og deretter forenkle ved å slå sammen like ledd.`,
    },
    {
      id: '8-2-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Løs opp og forenkle:

a) $2(x + 3) + 4x$
b) $3(2a - 1) - (a + 4)$
c) $5(x + 2) - 2(x - 3)$`,
      solution: `**Løsning:**

a) $2(x + 3) + 4x = 2x + 6 + 4x = 6x + 6$

b) $3(2a - 1) - (a + 4) = 6a - 3 - a - 4 = 5a - 7$

c) $5(x + 2) - 2(x - 3) = 5x + 10 - 2x + 6 = 3x + 16$`,
    },
    {
      id: '8-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs opp og forenkle',
        subTasks: [
          { label: 'a', task: '$3(x + 2) + 5x$', solution: '$3x + 6 + 5x = 8x + 6$' },
          { label: 'b', task: '$4(2a + 1) - 3a$', solution: '$8a + 4 - 3a = 5a + 4$' },
          { label: 'c', task: '$2(3b - 4) - (b + 2)$', solution: '$6b - 8 - b - 2 = 5b - 10$' },
          { label: 'd', task: '$5(x + 1) + 2(x - 3)$', solution: '$5x + 5 + 2x - 6 = 7x - 1$' },
          { label: 'e', task: '$3(2y + 4) - 2(3y - 1)$', solution: '$6y + 12 - 6y + 2 = 14$' },
        ],
        solution: 'a) 8x+6, b) 5a+4, c) 5b−10, d) 7x−1, e) 14',
        hints: ['Løs opp alle parenteser først, så slå sammen like ledd'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-2-2-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Løs opp og forenkle:

a) $x(x + 3)$
b) $2a(a - 4)$
c) $3x(2x + 5) - x^2$`,
      solution: `**Løsning:**

a) $x(x + 3) = x \\cdot x + x \\cdot 3 = x^2 + 3x$

b) $2a(a - 4) = 2a \\cdot a - 2a \\cdot 4 = 2a^2 - 8a$

c) $3x(2x + 5) - x^2 = 6x^2 + 15x - x^2 = 5x^2 + 15x$`,
    },
    {
      id: '8-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs opp og forenkle',
        subTasks: [
          { label: 'a', task: '$x(x + 5)$', solution: '$x^2 + 5x$' },
          { label: 'b', task: '$3a(a + 2)$', solution: '$3a^2 + 6a$' },
          { label: 'c', task: '$2b(3b - 4)$', solution: '$6b^2 - 8b$' },
          { label: 'd', task: '$4x(x + 1) - 2x^2$', solution: '$4x^2 + 4x - 2x^2 = 2x^2 + 4x$' },
        ],
        solution: 'a) x²+5x, b) 3a²+6a, c) 6b²−8b, d) 2x²+4x',
        hints: ['Husk at x · x = x²'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_2_3: TextbookChapter = {
  id: '8-2-3',
  courseId: '8',
  chapterNumber: '2.3',
  title: 'Likninger - introduksjon',
  description: 'Lær hva en likning er og hvordan du løser enkle likninger.',
  estimatedMinutes: 50,
  competenceGoals: [],
  content: [
    {
      id: '8-2-3-intro',
      type: 'text',
      content: `## Hva er en likning?

En **likning** er et utsagn om at to uttrykk er like. Den inneholder et **likhetstegn** (=) og vanligvis en ukjent (variabel).

For eksempel: $x + 3 = 7$

Å **løse likningen** betyr å finne verdien av $x$ som gjør at likheten stemmer.`,
    },
    {
      id: '8-2-3-def-1',
      type: 'definition',
      title: 'Viktige begreper',
      content: `- **Likning**: Et utsagn med likhetstegn, f.eks. $2x + 1 = 9$
- **Løsning**: Verdien av variabelen som gjør likningen sann
- **Venstre side (VS)**: Uttrykket til venstre for likhetstegnet
- **Høyre side (HS)**: Uttrykket til høyre for likhetstegnet`,
    },
    {
      id: '8-2-3-text-prinsipp',
      type: 'text',
      content: `## Grunnprinsippet

En likning er som en vekt i balanse. For å holde balansen må vi **gjøre det samme på begge sider**.

Vi kan:
- Legge til samme tall på begge sider
- Trekke fra samme tall på begge sider
- Gange begge sider med samme tall
- Dele begge sider med samme tall`,
    },
    {
      id: '8-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Løs likningene:

a) $x + 4 = 10$
b) $x - 3 = 8$
c) $x + 7 = 2$`,
      solution: `**Løsning:**

a) $x + 4 = 10$
   $x = 10 - 4$ (trekk fra 4 på begge sider)
   $x = 6$

b) $x - 3 = 8$
   $x = 8 + 3$ (legg til 3 på begge sider)
   $x = 11$

c) $x + 7 = 2$
   $x = 2 - 7$
   $x = -5$`,
    },
    {
      id: '8-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$x + 5 = 12$', solution: '$x = 12 - 5 = 7$' },
          { label: 'b', task: '$x - 4 = 9$', solution: '$x = 9 + 4 = 13$' },
          { label: 'c', task: '$x + 8 = 3$', solution: '$x = 3 - 8 = -5$' },
          { label: 'd', task: '$x - 6 = -2$', solution: '$x = -2 + 6 = 4$' },
          { label: 'e', task: '$x + 11 = 11$', solution: '$x = 11 - 11 = 0$' },
        ],
        solution: 'a) 7, b) 13, c) −5, d) 4, e) 0',
        hints: ['Flytt tallet til andre siden med motsatt fortegn'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-2-3-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Løs likningene:

a) $3x = 15$
b) $\\frac{x}{4} = 5$
c) $-2x = 10$`,
      solution: `**Løsning:**

a) $3x = 15$
   $x = \\frac{15}{3}$ (del begge sider på 3)
   $x = 5$

b) $\\frac{x}{4} = 5$
   $x = 5 \\cdot 4$ (gang begge sider med 4)
   $x = 20$

c) $-2x = 10$
   $x = \\frac{10}{-2}$ (del begge sider på −2)
   $x = -5$`,
    },
    {
      id: '8-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$4x = 20$', solution: '$x = 20 \\div 4 = 5$' },
          { label: 'b', task: '$2x = 14$', solution: '$x = 14 \\div 2 = 7$' },
          { label: 'c', task: '$\\frac{x}{3} = 6$', solution: '$x = 6 \\cdot 3 = 18$' },
          { label: 'd', task: '$5x = -25$', solution: '$x = -25 \\div 5 = -5$' },
          { label: 'e', task: '$-3x = 12$', solution: '$x = 12 \\div (-3) = -4$' },
        ],
        solution: 'a) 5, b) 7, c) 18, d) −5, e) −4',
        hints: ['Del på koeffisienten foran x'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-2-3-text-totrinn',
      type: 'text',
      content: `## Likninger med flere operasjoner

Noen likninger krever flere steg for å løses. Vi jobber oss "innover" mot $x$.`,
    },
    {
      id: '8-2-3-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Løs likningene:

a) $2x + 3 = 11$
b) $3x - 5 = 7$
c) $\\frac{x}{2} + 4 = 9$`,
      solution: `**Løsning:**

a) $2x + 3 = 11$
   $2x = 11 - 3$ (trekk fra 3)
   $2x = 8$
   $x = 4$ (del på 2)

b) $3x - 5 = 7$
   $3x = 7 + 5$ (legg til 5)
   $3x = 12$
   $x = 4$ (del på 3)

c) $\\frac{x}{2} + 4 = 9$
   $\\frac{x}{2} = 9 - 4$ (trekk fra 4)
   $\\frac{x}{2} = 5$
   $x = 10$ (gang med 2)`,
    },
    {
      id: '8-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$2x + 5 = 13$', solution: '$2x = 8 \\Rightarrow x = 4$' },
          { label: 'b', task: '$4x - 3 = 17$', solution: '$4x = 20 \\Rightarrow x = 5$' },
          { label: 'c', task: '$3x + 7 = 1$', solution: '$3x = -6 \\Rightarrow x = -2$' },
          { label: 'd', task: '$\\frac{x}{3} + 2 = 8$', solution: '$\\frac{x}{3} = 6 \\Rightarrow x = 18$' },
          { label: 'e', task: '$5x - 10 = 0$', solution: '$5x = 10 \\Rightarrow x = 2$' },
        ],
        solution: 'a) 4, b) 5, c) −2, d) 18, e) 2',
        hints: ['Først: fjern konstantleddet. Så: del på koeffisienten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-2-3-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Løs likningene med $x$ på begge sider:

a) $5x = 3x + 8$
b) $2x + 6 = 4x$`,
      solution: `**Løsning:**

a) $5x = 3x + 8$
   $5x - 3x = 8$ (trekk fra $3x$ på begge sider)
   $2x = 8$
   $x = 4$

b) $2x + 6 = 4x$
   $6 = 4x - 2x$ (trekk fra $2x$ på begge sider)
   $6 = 2x$
   $x = 3$`,
    },
    {
      id: '8-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$4x = 2x + 10$', solution: '$2x = 10 \\Rightarrow x = 5$' },
          { label: 'b', task: '$6x - 4 = 2x$', solution: '$4x = 4 \\Rightarrow x = 1$' },
          { label: 'c', task: '$3x + 5 = x + 11$', solution: '$2x = 6 \\Rightarrow x = 3$' },
          { label: 'd', task: '$7x - 3 = 4x + 9$', solution: '$3x = 12 \\Rightarrow x = 4$' },
          { label: 'e', task: '$2x + 8 = 5x - 1$', solution: '$9 = 3x \\Rightarrow x = 3$' },
        ],
        solution: 'a) 5, b) 1, c) 3, d) 4, e) 3',
        hints: ['Samle alle x-ledd på én side, alle tall på andre siden'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_3_1: TextbookChapter = {
  id: '8-3-1',
  courseId: '8',
  chapterNumber: '3.1',
  title: 'Vinkler',
  description: 'Lær om vinkler, vinkeltyper og vinkelsummer.',
  estimatedMinutes: 40,
  competenceGoals: [],
  content: [
    // Introduksjon
    {
      id: '8-3-1-intro',
      type: 'text',
      content: `## Hva er en vinkel?

En **vinkel** er åpningen mellom to linjer som møtes i et punkt. Vinkler brukes overalt i hverdagen - fra arkitektur til sport, fra kunst til navigasjon.

En vinkel består av:
- **Toppunkt**: Punktet der linjene møtes
- **Ben**: De to linjene som danner vinkelen
- **Åpning**: Størrelsen på vinkelen, målt i grader`,
    },
    // Illustrasjon: Vinkel intro
    {
      id: '8-3-1-ill-1',
      type: 'illustration',
      illustrationId: 'angle-intro',
      caption: 'En vinkel med toppunkt, to ben og vinkelåpning på 45°',
    },
    // Definisjon
    {
      id: '8-3-1-def-1',
      type: 'definition',
      title: 'Vinkel',
      content: `En **vinkel** dannes når to linjer eller stråler møtes i et punkt.

- Punktet der linjene møtes kalles **toppunktet**
- De to linjene kalles **vinkelens ben**
- Størrelsen på åpningen måles i **grader** (°)

En full sirkel er $360°$. En halv sirkel er $180°$.`,
    },
    // Vinkeltyper
    {
      id: '8-3-1-text-2',
      type: 'text',
      content: `## De fire vinkeltypene

Vinkler deles inn i fire hovedtyper basert på størrelsen:`,
    },
    // Illustrasjon: Vinkeltyper
    {
      id: '8-3-1-ill-2',
      type: 'illustration',
      illustrationId: 'angle-types',
      caption: 'De fire vinkeltypene: spiss, rett, stump og flat vinkel',
    },
    // Definisjon av vinkeltyper
    {
      id: '8-3-1-def-2',
      type: 'definition',
      title: 'Vinkeltyper',
      content: `**Spiss vinkel**: En vinkel som er mindre enn $90°$ (mellom $0°$ og $90°$)

**Rett vinkel**: En vinkel som er nøyaktig $90°$ (markeres med en liten firkant)

**Stump vinkel**: En vinkel som er større enn $90°$, men mindre enn $180°$

**Flat vinkel**: En vinkel som er nøyaktig $180°$ (en rett linje)`,
    },
    // Eksempel 1
    {
      id: '8-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Hvilken type vinkel er dette?

a) $45°$
b) $90°$
c) $135°$
d) $180°$`,
      solution: `**Løsning:**

a) $45°$ er en **spiss vinkel** (mindre enn $90°$)

b) $90°$ er en **rett vinkel** (nøyaktig $90°$)

c) $135°$ er en **stump vinkel** (større enn $90°$, mindre enn $180°$)

d) $180°$ er en **flat vinkel** (nøyaktig $180°$)`,
    },
    // Oppgave 1
    {
      id: '8-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken type vinkel er dette?',
        subTasks: [
          { label: 'a', task: '$30°$', solution: 'Spiss vinkel' },
          { label: 'b', task: '$90°$', solution: 'Rett vinkel' },
          { label: 'c', task: '$120°$', solution: 'Stump vinkel' },
          { label: 'd', task: '$75°$', solution: 'Spiss vinkel' },
          { label: 'e', task: '$180°$', solution: 'Flat vinkel' },
          { label: 'f', task: '$95°$', solution: 'Stump vinkel' },
        ],
        solution: 'a) Spiss, b) Rett, c) Stump, d) Spiss, e) Flat, f) Stump',
        hints: ['Spiss: under 90°, Rett: lik 90°, Stump: mellom 90° og 180°, Flat: lik 180°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Måle vinkler med gradskive
    {
      id: '8-3-1-text-3',
      type: 'text',
      content: `## Måle vinkler med gradskive

En **gradskive** er et verktøy som brukes til å måle vinkler. Den har en halvsirkelform med gradmerker fra $0°$ til $180°$.

**Slik bruker du en gradskive:**
1. Plasser gradskivens midtpunkt på vinkelens toppunkt
2. La én av gradskivens grunnlinjer ligge langs det ene vinkelbenet
3. Les av graden der det andre vinkelbenet krysser gradskiven`,
    },
    // Illustrasjon: Gradskive
    {
      id: '8-3-1-ill-3',
      type: 'illustration',
      illustrationId: 'protractor',
      caption: 'En gradskive som viser en vinkel på 60°',
    },
    // Oppgave 2
    {
      id: '8-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk gradskiven til å tegne en vinkel med den angitte størrelsen. Bruk tegnefeltet.',
        subTasks: [
          { label: 'a', task: 'Tegn en vinkel på $45°$', solution: 'Spiss vinkel på 45°' },
          { label: 'b', task: 'Tegn en vinkel på $90°$', solution: 'Rett vinkel på 90°' },
          { label: 'c', task: 'Tegn en vinkel på $120°$', solution: 'Stump vinkel på 120°' },
        ],
        solution: 'Se tegning',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Supplementvinkler
    {
      id: '8-3-1-text-4',
      type: 'text',
      content: `## Supplementvinkler

To vinkler er **supplementvinkler** når summen deres er $180°$. De utfyller hverandre til en flat vinkel.`,
    },
    // Illustrasjon: Supplementvinkler
    {
      id: '8-3-1-ill-4',
      type: 'illustration',
      illustrationId: 'supplementary-angles',
      caption: 'Supplementvinkler: 60° + 120° = 180°',
    },
    // Definisjon av supplementvinkler
    {
      id: '8-3-1-def-3',
      type: 'definition',
      title: 'Supplementvinkler',
      content: `To vinkler er **supplementvinkler** når summen er $180°$.

Hvis én vinkel er $v$, så er supplementvinkelen $180° - v$.

**Eksempel:** Supplementvinkelen til $60°$ er $180° - 60° = 120°$`,
    },
    // Eksempel 2
    {
      id: '8-3-1-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Finn supplementvinkelen til:

a) $70°$
b) $90°$
c) $135°$`,
      solution: `**Løsning:**

a) $180° - 70° = 110°$

b) $180° - 90° = 90°$ (en rett vinkel er supplement til seg selv!)

c) $180° - 135° = 45°$`,
    },
    // Oppgave 3
    {
      id: '8-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn supplementvinkelen',
        subTasks: [
          { label: 'a', task: '$50°$', solution: '$180° - 50° = 130°$' },
          { label: 'b', task: '$85°$', solution: '$180° - 85° = 95°$' },
          { label: 'c', task: '$120°$', solution: '$180° - 120° = 60°$' },
          { label: 'd', task: '$45°$', solution: '$180° - 45° = 135°$' },
        ],
        solution: 'a) 130°, b) 95°, c) 60°, d) 135°',
        hints: ['Supplementvinkler har sum 180°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Komplementvinkler
    {
      id: '8-3-1-text-5',
      type: 'text',
      content: `## Komplementvinkler

To vinkler er **komplementvinkler** når summen deres er $90°$. De utfyller hverandre til en rett vinkel.`,
    },
    // Illustrasjon: Komplementvinkler
    {
      id: '8-3-1-ill-5',
      type: 'illustration',
      illustrationId: 'complementary-angles',
      caption: 'Komplementvinkler: 30° + 60° = 90°',
    },
    // Definisjon av komplementvinkler
    {
      id: '8-3-1-def-4',
      type: 'definition',
      title: 'Komplementvinkler',
      content: `To vinkler er **komplementvinkler** når summen er $90°$.

Hvis én vinkel er $v$, så er komplementvinkelen $90° - v$.

**Eksempel:** Komplementvinkelen til $30°$ er $90° - 30° = 60°$`,
    },
    // Oppgave 4
    {
      id: '8-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn komplementvinkelen',
        subTasks: [
          { label: 'a', task: '$30°$', solution: '$90° - 30° = 60°$' },
          { label: 'b', task: '$45°$', solution: '$90° - 45° = 45°$' },
          { label: 'c', task: '$75°$', solution: '$90° - 75° = 15°$' },
          { label: 'd', task: '$10°$', solution: '$90° - 10° = 80°$' },
        ],
        solution: 'a) 60°, b) 45°, c) 15°, d) 80°',
        hints: ['Komplementvinkler har sum 90°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Toppvinkler
    {
      id: '8-3-1-text-6',
      type: 'text',
      content: `## Toppvinkler

Når to rette linjer krysser hverandre, dannes fire vinkler. Vinklene som ligger rett overfor hverandre kalles **toppvinkler**, og de er alltid like store.`,
    },
    // Illustrasjon: Toppvinkler
    {
      id: '8-3-1-ill-6',
      type: 'illustration',
      illustrationId: 'vertical-angles',
      caption: 'Toppvinkler er like store: vinkel A = vinkel A, vinkel B = vinkel B',
    },
    // Definisjon av toppvinkler
    {
      id: '8-3-1-def-5',
      type: 'definition',
      title: 'Toppvinkler',
      content: `**Toppvinkler** er vinkler som ligger rett overfor hverandre når to linjer krysser hverandre.

**Regel:** Toppvinkler er alltid like store.

Nabovinkler (vinkler som ligger ved siden av hverandre) er alltid supplementvinkler, altså er summen $180°$.`,
    },
    // Eksempel 3
    {
      id: '8-3-1-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `To linjer krysser hverandre. En av vinklene er $70°$. Finn de tre andre vinklene.`,
      solution: `**Løsning:**

La oss kalle vinklene $A$, $B$, $C$ og $D$ (med klokken).

- Vinkel $A = 70°$ (gitt)
- Vinkel $B = 180° - 70° = 110°$ (nabovinkler er supplementvinkler)
- Vinkel $C = 70°$ (toppvinkel til $A$)
- Vinkel $D = 110°$ (toppvinkel til $B$)

De fire vinklene er: $70°$, $110°$, $70°$, $110°$`,
    },
    // Oppgave 5
    {
      id: '8-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'To linjer krysser hverandre. Én vinkel er gitt. Finn de tre andre vinklene.',
        subTasks: [
          { label: 'a', task: 'En vinkel er $40°$', solution: '$40°$, $140°$, $40°$, $140°$' },
          { label: 'b', task: 'En vinkel er $90°$', solution: '$90°$, $90°$, $90°$, $90°$' },
          { label: 'c', task: 'En vinkel er $115°$', solution: '$115°$, $65°$, $115°$, $65°$' },
        ],
        solution: 'a) 40°, 140°, 40°, 140°  b) Alle 90°  c) 115°, 65°, 115°, 65°',
        hints: ['Toppvinkler er like store. Nabovinkler har sum 180°.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Oversikt
    {
      id: '8-3-1-text-7',
      type: 'text',
      content: `## Oppsummering`,
    },
    // Illustrasjon: Oversikt
    {
      id: '8-3-1-ill-7',
      type: 'illustration',
      illustrationId: 'angle-types-overview',
      caption: 'Oversikt over de fire vinkeltypene',
    },
    // Tips
    {
      id: '8-3-1-tip-1',
      type: 'tip',
      content: `**Huskeregel for vinkelsummer:**
- **Komplementvinkler**: Sum = $90°$ (komplett til en rett vinkel)
- **Supplementvinkler**: Sum = $180°$ (supplerer til en flat vinkel)
- **Toppvinkler**: Alltid like store`,
    },
    // Ekstra oppgaver
    {
      id: '8-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver om vinkler',
        subTasks: [
          { label: 'a', task: 'Finn en vinkel som er lik sin egen supplementvinkel', solution: '$90°$ (fordi $180° - 90° = 90°$)' },
          { label: 'b', task: 'Finn en vinkel som er lik sin egen komplementvinkel', solution: '$45°$ (fordi $90° - 45° = 45°$)' },
          { label: 'c', task: 'Er en stump vinkel større eller mindre enn sin supplementvinkel?', solution: 'Større (stump > 90°, supplement < 90°)' },
        ],
        solution: 'a) 90°, b) 45°, c) Større',
        hints: ['Tenk på hva som skjer når du trekker fra 180° eller 90°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== NYE OPPGAVER MED ILLUSTRASJONER ==========
    {
      id: '8-3-1-ill-vinkeltyper',
      type: 'image',
      src: '/images/geometry/spiss-rett-stump-vinkel.svg',
      alt: 'De tre vinkeltypene: spiss, rett og stump vinkel',
      caption: 'Spiss vinkel (< 90), rett vinkel (= 90) og stump vinkel (> 90)',
    },
    {
      id: '8-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-3-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Studer figuren over som viser de tre vinkeltypene. En trekant har en vinkel pa 55 grader og en vinkel pa 90 grader. Finn den tredje vinkelen og klassifiser alle tre vinklene som spiss, rett eller stump.',
        image: '/images/geometry/spiss-rett-stump-vinkel.svg',
        solution: `Summen av vinklene i en trekant er 180 grader.
Den tredje vinkelen er: $180 - 55 - 90 = 35$ grader.

Klassifisering:
- 35 grader: **spiss vinkel** (mindre enn 90)
- 55 grader: **spiss vinkel** (mindre enn 90)
- 90 grader: **rett vinkel** (noyaktig 90)

Trekanten har to spisse vinkler og en rett vinkel.`,
        hints: ['Vinkelsummen i en trekant er alltid 180 grader'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-1-ill-toppvinkler',
      type: 'image',
      src: '/images/geometry/parallelle-linjer-toppvinkler.svg',
      alt: 'Toppvinkler og samsvarende vinkler ved parallelle linjer',
      caption: 'Naar to linjer krysses, er toppvinkler alltid like store',
    },
    {
      id: '8-3-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-3-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Se pa figuren som viser to linjer som krysser hverandre. Bruk reglene for toppvinkler og nabovinkler til a lose oppgaven: Hvis en av vinklene er 72 grader, hva er de andre tre vinklene?',
        image: '/images/geometry/parallelle-linjer-toppvinkler.svg',
        solution: `Naar to linjer krysser hverandre:
- **Toppvinkler** er like store
- **Nabovinkler** er supplementvinkler (sum = 180 grader)

Gitt: En vinkel = 72 grader

Da er:
- Toppvinkelen = 72 grader (like store)
- Nabovinkelen = 180 - 72 = 108 grader
- Den andre nabovinkelen = 108 grader (toppvinkel)

**Svar:** 72 grader, 108 grader, 72 grader, 108 grader`,
        hints: ['Toppvinkler er like store. Nabovinkler har sum 180 grader.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_3_2: TextbookChapter = {
  id: '8-3-2',
  courseId: '8',
  chapterNumber: '3.2',
  title: 'Lineære funksjoner',
  description: 'Lær om rette linjer og stigningstall.',
  estimatedMinutes: 50,
  competenceGoals: [],
  content: [
    {
      id: '8-3-2-intro',
      type: 'text',
      content: `## Hva er en lineær funksjon?

En **lineær funksjon** er en funksjon der grafen er en rett linje. Den skrives på formen:

$$f(x) = ax + b$$

der:
- $a$ er **stigningstallet** (hvor bratt linjen er)
- $b$ er **konstantleddet** (hvor linjen krysser y-aksen)`,
    },
    {
      id: '8-3-2-def-1',
      type: 'definition',
      title: 'Stigningstall',
      content: `**Stigningstallet** $a$ forteller hvor mye $y$ endrer seg når $x$ øker med 1.

- $a > 0$: Linjen stiger (går oppover fra venstre mot høyre)
- $a < 0$: Linjen synker (går nedover fra venstre mot høyre)
- $a = 0$: Linjen er horisontal

$$a = \\frac{\\text{endring i } y}{\\text{endring i } x} = \\frac{y_2 - y_1}{x_2 - x_1}$$`,
    },
    {
      id: '8-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `For funksjonen $f(x) = 2x + 3$, finn:

a) Stigningstallet
b) Konstantleddet
c) $f(0)$
d) $f(2)$`,
      solution: `**Løsning:**

a) Stigningstallet er $a = 2$

b) Konstantleddet er $b = 3$

c) $f(0) = 2 \\cdot 0 + 3 = 3$ (dette er skjæringspunktet med y-aksen)

d) $f(2) = 2 \\cdot 2 + 3 = 4 + 3 = 7$`,
    },
    {
      id: '8-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn stigningstall og konstantledd for funksjonene',
        subTasks: [
          { label: 'a', task: '$f(x) = 3x + 5$', solution: '$a = 3$, $b = 5$' },
          { label: 'b', task: '$g(x) = -2x + 4$', solution: '$a = -2$, $b = 4$' },
          { label: 'c', task: '$h(x) = x - 7$', solution: '$a = 1$, $b = -7$' },
          { label: 'd', task: '$k(x) = -x$', solution: '$a = -1$, $b = 0$' },
          { label: 'e', task: '$p(x) = 5$', solution: '$a = 0$, $b = 5$' },
        ],
        solution: 'a) a=3, b=5, b) a=−2, b=4, c) a=1, b=−7, d) a=−1, b=0, e) a=0, b=5',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Finn stigningstallet til linjen som går gjennom punktene $(1, 3)$ og $(4, 9)$.`,
      solution: `**Løsning:**

$$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$$

Stigningstallet er $2$, som betyr at $y$ øker med 2 for hver 1 som $x$ øker.`,
    },
    {
      id: '8-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn stigningstallet til linjen gjennom punktene',
        subTasks: [
          { label: 'a', task: '$(2, 5)$ og $(4, 9)$', solution: '$a = \\frac{9-5}{4-2} = \\frac{4}{2} = 2$' },
          { label: 'b', task: '$(1, 7)$ og $(3, 3)$', solution: '$a = \\frac{3-7}{3-1} = \\frac{-4}{2} = -2$' },
          { label: 'c', task: '$(0, 4)$ og $(2, 10)$', solution: '$a = \\frac{10-4}{2-0} = \\frac{6}{2} = 3$' },
          { label: 'd', task: '$(-1, 2)$ og $(3, 6)$', solution: '$a = \\frac{6-2}{3-(-1)} = \\frac{4}{4} = 1$' },
        ],
        solution: 'a) 2, b) −2, c) 3, d) 1',
        hints: ['Bruk formelen $a = \\frac{y_2 - y_1}{x_2 - x_1}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-2-text-3',
      type: 'text',
      content: `## Tegne lineære funksjoner

For å tegne grafen til en lineær funksjon:
1. Finn to punkter på linjen (f.eks. for $x = 0$ og $x = 1$)
2. Plott punktene i koordinatsystemet
3. Trekk en rett linje gjennom punktene`,
    },
    {
      id: '8-3-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Lag en verditabell og tegn grafen til $f(x) = 2x - 1$ for $x \\in \\{-1, 0, 1, 2, 3\\}$.`,
      solution: `**Løsning:**

Verditabell:
| $x$ | $f(x) = 2x - 1$ |
|-----|-----------------|
| −1  | $2(-1) - 1 = -3$ |
| 0   | $2(0) - 1 = -1$ |
| 1   | $2(1) - 1 = 1$ |
| 2   | $2(2) - 1 = 3$ |
| 3   | $2(3) - 1 = 5$ |

Punktene $(-1, -3)$, $(0, -1)$, $(1, 1)$, $(2, 3)$, $(3, 5)$ plottes og forbindes med en rett linje.`,
    },
    {
      id: '8-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag verditabell for $x \\in \\{-2, -1, 0, 1, 2\\}$ og tegn grafen',
        subTasks: [
          { label: 'a', task: '$f(x) = x + 2$', solution: 'Punkter: (−2,0), (−1,1), (0,2), (1,3), (2,4)' },
          { label: 'b', task: '$g(x) = 2x - 3$', solution: 'Punkter: (−2,−7), (−1,−5), (0,−3), (1,−1), (2,1)' },
          { label: 'c', task: '$h(x) = -x + 1$', solution: 'Punkter: (−2,3), (−1,2), (0,1), (1,0), (2,−1)' },
        ],
        solution: 'Tegn grafene basert på verditabellene',
        hints: ['Sett inn hver x-verdi og regn ut f(x)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-2-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Finn funksjonsuttrykket til linjen som går gjennom $(0, 5)$ og har stigningstall $-2$.`,
      solution: `**Løsning:**

Vi vet at $a = -2$ (stigningstallet) og at linjen går gjennom $(0, 5)$.

Siden $x = 0$ gir $y = 5$, er konstantleddet $b = 5$.

Funksjonsuttrykket er: $f(x) = -2x + 5$`,
    },
    {
      id: '8-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn funksjonsuttrykket til linjen',
        subTasks: [
          { label: 'a', task: 'Gjennom $(0, 3)$ med stigningstall 2', solution: '$f(x) = 2x + 3$' },
          { label: 'b', task: 'Gjennom $(0, -4)$ med stigningstall 1', solution: '$f(x) = x - 4$' },
          { label: 'c', task: 'Gjennom $(0, 0)$ med stigningstall 5', solution: '$f(x) = 5x$' },
          { label: 'd', task: 'Gjennom $(0, 7)$ med stigningstall −3', solution: '$f(x) = -3x + 7$' },
        ],
        solution: 'a) f(x)=2x+3, b) f(x)=x−4, c) f(x)=5x, d) f(x)=−3x+7',
        hints: ['Bruk formen f(x) = ax + b'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_3_3: TextbookChapter = {
  id: '8-3-3',
  courseId: '8',
  chapterNumber: '3.3',
  title: 'Proporsjonalitet',
  description: 'Lær om proporsjonale og omvendt proporsjonale størrelser.',
  estimatedMinutes: 45,
  competenceGoals: [],
  content: [
    {
      id: '8-3-3-intro',
      type: 'text',
      content: `## Proporsjonalitet

Når to størrelser er **proporsjonale**, betyr det at forholdet mellom dem alltid er det samme. Hvis den ene størrelsen dobles, dobles også den andre.`,
    },
    {
      id: '8-3-3-def-1',
      type: 'definition',
      title: 'Proporsjonal sammenheng',
      content: `To størrelser $x$ og $y$ er **proporsjonale** dersom:

$$y = k \\cdot x$$

der $k$ er en konstant som kalles **proporsjonalitetskonstanten**.

Grafen til en proporsjonal funksjon er en rett linje gjennom origo.`,
    },
    {
      id: '8-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `En eske med 12 egg koster 48 kr. Finn proporsjonalitetskonstanten og prisen for 18 egg.`,
      solution: `**Løsning:**

La $x$ være antall egg og $y$ være prisen.

Proporsjonalitetskonstanten:
$$k = \\frac{y}{x} = \\frac{48}{12} = 4$$

Prisen for 18 egg:
$$y = 4 \\cdot 18 = 72 \\text{ kr}$$`,
    },
    {
      id: '8-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn proporsjonalitetskonstanten og den ukjente verdien',
        subTasks: [
          { label: 'a', task: '5 epler koster 30 kr. Hva koster 8 epler?', solution: '$k = 6$, pris $= 6 \\cdot 8 = 48$ kr' },
          { label: 'b', task: 'En bil kjører 200 km på 4 timer. Hvor langt kjører den på 7 timer?', solution: '$k = 50$ km/t, distanse $= 50 \\cdot 7 = 350$ km' },
          { label: 'c', task: '3 kg epler koster 45 kr. Hva koster 5 kg?', solution: '$k = 15$ kr/kg, pris $= 15 \\cdot 5 = 75$ kr' },
        ],
        solution: 'a) 48 kr, b) 350 km, c) 75 kr',
        hints: ['Finn først k ved å dele y på x'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-3-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Avgjør om sammenhengen er proporsjonal:

| $x$ | 2  | 4  | 6  | 8  |
|-----|----|----|----|----|
| $y$ | 10 | 20 | 30 | 40 |`,
      solution: `**Løsning:**

Vi sjekker om forholdet $\\frac{y}{x}$ er konstant:

$\\frac{10}{2} = 5$, $\\frac{20}{4} = 5$, $\\frac{30}{6} = 5$, $\\frac{40}{8} = 5$

Forholdet er konstant ($k = 5$), så sammenhengen er proporsjonal.

Funksjonsuttrykket er $y = 5x$.`,
    },
    {
      id: '8-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om sammenhengen er proporsjonal. Hvis ja, finn k.',
        subTasks: [
          { label: 'a', task: '$x$: 1, 2, 3, 4 og $y$: 3, 6, 9, 12', solution: 'Ja, $k = 3$' },
          { label: 'b', task: '$x$: 2, 4, 6, 8 og $y$: 5, 8, 11, 14', solution: 'Nei (ikke konstant forhold)' },
          { label: 'c', task: '$x$: 3, 6, 9, 12 og $y$: 12, 24, 36, 48', solution: 'Ja, $k = 4$' },
          { label: 'd', task: '$x$: 1, 2, 3, 4 og $y$: 2, 4, 8, 16', solution: 'Nei (forholdet endres)' },
        ],
        solution: 'a) Ja, k=3, b) Nei, c) Ja, k=4, d) Nei',
        hints: ['Sjekk om y/x er lik for alle verdier'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-3-text-3',
      type: 'text',
      content: `## Omvendt proporsjonalitet

Når to størrelser er **omvendt proporsjonale**, øker den ene når den andre minker (og omvendt). Produktet av dem er konstant.`,
    },
    {
      id: '8-3-3-def-2',
      type: 'definition',
      title: 'Omvendt proporsjonal sammenheng',
      content: `To størrelser $x$ og $y$ er **omvendt proporsjonale** dersom:

$$y = \\frac{k}{x} \\quad \\text{eller} \\quad x \\cdot y = k$$

der $k$ er en konstant.`,
    },
    {
      id: '8-3-3-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Et arbeid tar 6 timer når 4 personer jobber. Hvor lang tid tar det med 8 personer?`,
      solution: `**Løsning:**

Dette er omvendt proporsjonalt (flere folk = kortere tid).

Konstanten $k = 4 \\cdot 6 = 24$ (person-timer)

Med 8 personer:
$$t = \\frac{24}{8} = 3 \\text{ timer}$$`,
    },
    {
      id: '8-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene om omvendt proporsjonalitet',
        subTasks: [
          { label: 'a', task: 'Et arbeid tar 12 timer med 3 personer. Hvor lang tid med 4 personer?', solution: '$k = 36$, $t = 36/4 = 9$ timer' },
          { label: 'b', task: 'En bil kjører 120 km på 2 timer. Hvor lang tid bruker den med halv fart?', solution: 'Dobbel tid = 4 timer' },
          { label: 'c', task: 'En tank fylles på 6 timer med ett rør. Hvor lang tid med 3 like rør?', solution: '$k = 6$, $t = 6/3 = 2$ timer' },
        ],
        solution: 'a) 9 timer, b) 4 timer, c) 2 timer',
        hints: ['Husk at x · y = k må være konstant'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-3-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Avgjør om sammenhengen er proporsjonal eller omvendt proporsjonal:

| $x$ | 1  | 2  | 4  | 8  |
|-----|----|----|----|----|
| $y$ | 24 | 12 | 6  | 3  |`,
      solution: `**Løsning:**

Sjekk proporsjonalitet: $\\frac{24}{1} = 24$, $\\frac{12}{2} = 6$ - ikke konstant.

Sjekk omvendt proporsjonalitet: $1 \\cdot 24 = 24$, $2 \\cdot 12 = 24$, $4 \\cdot 6 = 24$, $8 \\cdot 3 = 24$

Produktet er konstant ($k = 24$), så dette er **omvendt proporsjonalt**.`,
    },
    {
      id: '8-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avgjør om sammenhengen er proporsjonal eller omvendt proporsjonal',
        subTasks: [
          { label: 'a', task: '$x$: 1, 2, 3 og $y$: 4, 8, 12', solution: 'Proporsjonal ($k = 4$)' },
          { label: 'b', task: '$x$: 2, 3, 6 og $y$: 18, 12, 6', solution: 'Omvendt proporsjonal ($k = 36$)' },
          { label: 'c', task: '$x$: 1, 3, 5 og $y$: 15, 5, 3', solution: 'Omvendt proporsjonal ($k = 15$)' },
        ],
        solution: 'a) Proporsjonal, b) Omvendt, c) Omvendt',
        hints: ['Sjekk først y/x, deretter x·y'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_3_4: TextbookChapter = {
  id: '8-3-4',
  courseId: '8',
  chapterNumber: '3.4',
  title: 'Areal',
  description: 'Beregne areal av trekanter, firkanter og sammensatte figurer.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og argumentere for formlar for areal og volum'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-3-4-intro',
      type: 'text',
      content: `## Hva er areal?

Areal er et mål på hvor stort et flatt område er. Vi bruker areal når vi skal finne ut hvor mye plass en figur tar opp, for eksempel hvor stort et gulv er, hvor mye maling vi trenger til en vegg, eller hvor stort et fotballbane er.

Areal måles i **kvadratenheter**, for eksempel:
- Kvadratcentimeter ($\\text{cm}^2$)
- Kvadratmeter ($\\text{m}^2$)
- Kvadratkilometer ($\\text{km}^2$)

En kvadratcentimeter ($1 \\text{ cm}^2$) er arealet av et kvadrat med sidelengde 1 cm.`,
    },

    // ========== REKTANGEL ==========
    {
      id: '8-3-4-rektangel-intro',
      type: 'text',
      content: `## Areal av rektangel

Et rektangel er en firkant der alle vinkler er 90 grader. For å finne arealet av et rektangel, ganger vi lengden med bredden.`,
    },

    {
      id: '8-3-4-formula-rektangel',
      type: 'formula',
      title: 'Areal av rektangel',
      latex: 'A = l \\times b',
      description: 'der $l$ er lengden og $b$ er bredden',
    },

    {
      id: '8-3-4-example-rektangel',
      type: 'example',
      title: 'Eksempel 1: Areal av rektangel',
      problem: 'Et rektangel har lengde 8 cm og bredde 5 cm. Finn arealet.',
      solution: `**Løsning:**

Vi bruker formelen $A = l \\times b$

$A = 8 \\text{ cm} \\times 5 \\text{ cm} = 40 \\text{ cm}^2$

**Svar:** Arealet er $40 \\text{ cm}^2$.`,
    },

    // ========== KVADRAT ==========
    {
      id: '8-3-4-kvadrat-intro',
      type: 'text',
      content: `## Areal av kvadrat

Et kvadrat er et spesielt rektangel der alle sidene er like lange. Siden lengde og bredde er like, kan vi skrive formelen på en enklere måte.`,
    },

    {
      id: '8-3-4-formula-kvadrat',
      type: 'formula',
      title: 'Areal av kvadrat',
      latex: 'A = s^2',
      description: 'der $s$ er sidelengden',
    },

    {
      id: '8-3-4-example-kvadrat',
      type: 'example',
      title: 'Eksempel 2: Areal av kvadrat',
      problem: 'Et kvadrat har sidelengde 6 cm. Finn arealet.',
      solution: `**Løsning:**

Vi bruker formelen $A = s^2$

$A = 6^2 = 36 \\text{ cm}^2$

**Svar:** Arealet er $36 \\text{ cm}^2$.`,
    },

    // Oppgave 1
    {
      id: '8-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-1',
        number: '3.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av figurene.',
        subTasks: [
          { label: 'a', task: 'Et rektangel med lengde 10 cm og bredde 4 cm', solution: '$A = 10 \\times 4 = 40 \\text{ cm}^2$', answer: 40 },
          { label: 'b', task: 'Et kvadrat med sidelengde 7 m', solution: '$A = 7^2 = 49 \\text{ m}^2$', answer: 49 },
          { label: 'c', task: 'Et rektangel med lengde 12 mm og bredde 8 mm', solution: '$A = 12 \\times 8 = 96 \\text{ mm}^2$', answer: 96 },
          { label: 'd', task: 'Et kvadrat med sidelengde 15 cm', solution: '$A = 15^2 = 225 \\text{ cm}^2$', answer: 225 },
        ],
        solution: 'a) $40 \\text{ cm}^2$, b) $49 \\text{ m}^2$, c) $96 \\text{ mm}^2$, d) $225 \\text{ cm}^2$',
        hints: ['For rektangel: $A = l \\times b$', 'For kvadrat: $A = s^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TREKANT ==========
    {
      id: '8-3-4-trekant-intro',
      type: 'text',
      content: `## Areal av trekant

En trekant har tre sider og tre hjørner. For å finne arealet trenger vi å kjenne **grunnlinjen** ($g$) og **høyden** ($h$).

Høyden står alltid **vinkelrett** (90 grader) på grunnlinjen.

Tenk deg at du legger to like trekanter sammen - da får du et parallellogram. Derfor er arealet av en trekant halvparten av arealet av et parallellogram.`,
    },

    {
      id: '8-3-4-formula-trekant',
      type: 'formula',
      title: 'Areal av trekant',
      latex: 'A = \\frac{1}{2} \\times g \\times h',
      description: 'der $g$ er grunnlinjen og $h$ er høyden',
    },

    {
      id: '8-3-4-example-trekant',
      type: 'example',
      title: 'Eksempel 3: Areal av trekant',
      problem: 'En trekant har grunnlinje 10 cm og høyde 6 cm. Finn arealet.',
      solution: `**Løsning:**

Vi bruker formelen $A = \\frac{1}{2} \\times g \\times h$

$A = \\frac{1}{2} \\times 10 \\text{ cm} \\times 6 \\text{ cm}$

$A = \\frac{1}{2} \\times 60 \\text{ cm}^2 = 30 \\text{ cm}^2$

**Svar:** Arealet er $30 \\text{ cm}^2$.`,
    },

    {
      id: '8-3-4-tip-trekant',
      type: 'tip',
      content: 'Du kan også skrive formelen som $A = \\frac{g \\times h}{2}$. Det gir samme svar!',
    },

    // Oppgave 2
    {
      id: '8-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-2',
        number: '3.4.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av trekantene.',
        subTasks: [
          { label: 'a', task: 'Grunnlinje 8 cm og høyde 5 cm', solution: '$A = \\frac{1}{2} \\times 8 \\times 5 = 20 \\text{ cm}^2$', answer: 20 },
          { label: 'b', task: 'Grunnlinje 12 m og høyde 7 m', solution: '$A = \\frac{1}{2} \\times 12 \\times 7 = 42 \\text{ m}^2$', answer: 42 },
          { label: 'c', task: 'Grunnlinje 20 cm og høyde 9 cm', solution: '$A = \\frac{1}{2} \\times 20 \\times 9 = 90 \\text{ cm}^2$', answer: 90 },
          { label: 'd', task: 'Grunnlinje 14 mm og høyde 10 mm', solution: '$A = \\frac{1}{2} \\times 14 \\times 10 = 70 \\text{ mm}^2$', answer: 70 },
        ],
        solution: 'a) $20 \\text{ cm}^2$, b) $42 \\text{ m}^2$, c) $90 \\text{ cm}^2$, d) $70 \\text{ mm}^2$',
        hints: ['Husk formelen: $A = \\frac{1}{2} \\times g \\times h$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PARALLELLOGRAM ==========
    {
      id: '8-3-4-parallellogram-intro',
      type: 'text',
      content: `## Areal av parallellogram

Et parallellogram er en firkant der motstående sider er parallelle og like lange. Tenk på det som et "skjevt" rektangel.

For å finne arealet bruker vi grunnlinjen og høyden. Høyden står vinkelrett på grunnlinjen, akkurat som for trekanter.`,
    },

    {
      id: '8-3-4-formula-parallellogram',
      type: 'formula',
      title: 'Areal av parallellogram',
      latex: 'A = g \\times h',
      description: 'der $g$ er grunnlinjen og $h$ er høyden',
    },

    {
      id: '8-3-4-note-parallellogram',
      type: 'note',
      content: 'Legg merke til at formelen er lik som for rektangel! Forskjellen er at høyden i et parallellogram ikke nødvendigvis er lik siden.',
    },

    {
      id: '8-3-4-example-parallellogram',
      type: 'example',
      title: 'Eksempel 4: Areal av parallellogram',
      problem: 'Et parallellogram har grunnlinje 9 cm og høyde 4 cm. Finn arealet.',
      solution: `**Løsning:**

Vi bruker formelen $A = g \\times h$

$A = 9 \\text{ cm} \\times 4 \\text{ cm} = 36 \\text{ cm}^2$

**Svar:** Arealet er $36 \\text{ cm}^2$.`,
    },

    // Oppgave 3
    {
      id: '8-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av parallellogrammene.',
        subTasks: [
          { label: 'a', task: 'Grunnlinje 11 cm og høyde 6 cm', solution: '$A = 11 \\times 6 = 66 \\text{ cm}^2$', answer: 66 },
          { label: 'b', task: 'Grunnlinje 15 m og høyde 8 m', solution: '$A = 15 \\times 8 = 120 \\text{ m}^2$', answer: 120 },
          { label: 'c', task: 'Grunnlinje 7,5 cm og høyde 4 cm', solution: '$A = 7{,}5 \\times 4 = 30 \\text{ cm}^2$', answer: 30 },
        ],
        solution: 'a) $66 \\text{ cm}^2$, b) $120 \\text{ m}^2$, c) $30 \\text{ cm}^2$',
        hints: ['Formelen er $A = g \\times h$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TRAPES ==========
    {
      id: '8-3-4-trapes-intro',
      type: 'text',
      content: `## Areal av trapes

Et trapes er en firkant der to av sidene er parallelle. Disse parallelle sidene kaller vi for **$a$** (den øvre siden) og **$b$** (den nedre siden), eller vi kan kalle dem de parallelle sidene.

For å finne arealet, legger vi sammen de to parallelle sidene, ganger med høyden, og deler på 2.`,
    },

    {
      id: '8-3-4-formula-trapes',
      type: 'formula',
      title: 'Areal av trapes',
      latex: 'A = \\frac{(a + b) \\times h}{2}',
      description: 'der $a$ og $b$ er de parallelle sidene og $h$ er høyden',
    },

    {
      id: '8-3-4-example-trapes',
      type: 'example',
      title: 'Eksempel 5: Areal av trapes',
      problem: 'Et trapes har parallelle sider på 6 cm og 10 cm, og høyden er 5 cm. Finn arealet.',
      solution: `**Løsning:**

Vi bruker formelen $A = \\frac{(a + b) \\times h}{2}$

$A = \\frac{(6 + 10) \\times 5}{2}$

$A = \\frac{16 \\times 5}{2} = \\frac{80}{2} = 40 \\text{ cm}^2$

**Svar:** Arealet er $40 \\text{ cm}^2$.`,
    },

    // Oppgave 4
    {
      id: '8-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet av trapesene.',
        subTasks: [
          { label: 'a', task: 'Parallelle sider 5 cm og 9 cm, høyde 4 cm', solution: '$A = \\frac{(5 + 9) \\times 4}{2} = \\frac{56}{2} = 28 \\text{ cm}^2$', answer: 28 },
          { label: 'b', task: 'Parallelle sider 8 m og 12 m, høyde 6 m', solution: '$A = \\frac{(8 + 12) \\times 6}{2} = \\frac{120}{2} = 60 \\text{ m}^2$', answer: 60 },
          { label: 'c', task: 'Parallelle sider 7 cm og 11 cm, høyde 5 cm', solution: '$A = \\frac{(7 + 11) \\times 5}{2} = \\frac{90}{2} = 45 \\text{ cm}^2$', answer: 45 },
        ],
        solution: 'a) $28 \\text{ cm}^2$, b) $60 \\text{ m}^2$, c) $45 \\text{ cm}^2$',
        hints: ['Legg først sammen de parallelle sidene', 'Husk å dele på 2 til slutt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SIRKEL ==========
    {
      id: '8-3-4-sirkel-intro',
      type: 'text',
      content: `## Areal av sirkel

En sirkel er en figur der alle punktene på kanten har samme avstand til sentrum. Denne avstanden kaller vi **radius** ($r$).

For å finne arealet av en sirkel, bruker vi det spesielle tallet **pi** ($\\pi$), som er omtrent 3,14.`,
    },

    {
      id: '8-3-4-formula-sirkel',
      type: 'formula',
      title: 'Areal av sirkel',
      latex: 'A = \\pi r^2',
      description: 'der $r$ er radius og $\\pi \\approx 3{,}14$',
    },

    {
      id: '8-3-4-definition-pi',
      type: 'definition',
      title: 'Pi ($\\pi$)',
      content: 'Pi er forholdet mellom omkretsen og diameteren i en sirkel. $\\pi \\approx 3{,}14159...$. På kalkulatoren kan du bruke $\\pi$-knappen for mer nøyaktig verdi.',
    },

    {
      id: '8-3-4-example-sirkel',
      type: 'example',
      title: 'Eksempel 6: Areal av sirkel',
      problem: 'En sirkel har radius 5 cm. Finn arealet. Bruk $\\pi \\approx 3{,}14$.',
      solution: `**Løsning:**

Vi bruker formelen $A = \\pi r^2$

$A = 3{,}14 \\times 5^2$

$A = 3{,}14 \\times 25 = 78{,}5 \\text{ cm}^2$

**Svar:** Arealet er ca. $78{,}5 \\text{ cm}^2$.`,
    },

    {
      id: '8-3-4-warning-sirkel',
      type: 'warning',
      title: 'Husk!',
      content: 'Det er radius ($r$) som står i formelen, ikke diameter. Hvis du får oppgitt diameteren ($d$), må du først finne radius: $r = \\frac{d}{2}$',
    },

    // Oppgave 5
    {
      id: '8-3-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet av sirklene. Bruk $\\pi \\approx 3{,}14$.',
        subTasks: [
          { label: 'a', task: 'Radius 3 cm', solution: '$A = 3{,}14 \\times 3^2 = 3{,}14 \\times 9 = 28{,}26 \\text{ cm}^2$', answer: 28.26 },
          { label: 'b', task: 'Radius 7 m', solution: '$A = 3{,}14 \\times 7^2 = 3{,}14 \\times 49 = 153{,}86 \\text{ m}^2$', answer: 153.86 },
          { label: 'c', task: 'Diameter 10 cm (finn først radius!)', solution: '$r = \\frac{10}{2} = 5$ cm, så $A = 3{,}14 \\times 5^2 = 78{,}5 \\text{ cm}^2$', answer: 78.5 },
          { label: 'd', task: 'Diameter 8 m', solution: '$r = \\frac{8}{2} = 4$ m, så $A = 3{,}14 \\times 4^2 = 50{,}24 \\text{ m}^2$', answer: 50.24 },
        ],
        solution: 'a) $28{,}26 \\text{ cm}^2$, b) $153{,}86 \\text{ m}^2$, c) $78{,}5 \\text{ cm}^2$, d) $50{,}24 \\text{ m}^2$',
        hints: ['Husk formelen: $A = \\pi r^2$', 'Hvis du får diameter, del på 2 for å finne radius'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMMENSATTE FIGURER ==========
    {
      id: '8-3-4-sammensatt-intro',
      type: 'text',
      content: `## Sammensatte figurer

Noen ganger møter vi figurer som er satt sammen av flere enkle figurer. For å finne arealet av slike sammensatte figurer, kan vi bruke to strategier:

**Strategi 1: Legg sammen**
Del figuren opp i enkle figurer (rektangler, trekanter, sirkler osv.) og legg sammen arealene.

**Strategi 2: Trekk fra**`,
    },
    {
      id: '8-3-4-areal-sammensatt-bilde',
      type: 'image',
      src: '/images/8-klasse/areal-sammensatt.svg',
      alt: 'Sammensatt figur som deles opp i enkle former',
      caption: 'Sammensatte figurer kan deles opp i enkle former',
    },
    {
      id: '8-3-4-sammensatt-strategi',
      type: 'text',
      content: `
Start med en enkel figur og trekk fra arealet av det som mangler.`,
    },

    {
      id: '8-3-4-example-sammensatt-1',
      type: 'example',
      title: 'Eksempel 7: L-formet figur',
      problem: `En L-formet figur kan deles inn i to rektangler:
- Rektangel 1: 8 cm × 3 cm
- Rektangel 2: 5 cm × 4 cm

Finn det totale arealet.`,
      solution: `**Løsning:**

Vi finner arealet av hvert rektangel og legger sammen.

Rektangel 1: $A_1 = 8 \\times 3 = 24 \\text{ cm}^2$

Rektangel 2: $A_2 = 5 \\times 4 = 20 \\text{ cm}^2$

Totalt areal: $A = 24 + 20 = 44 \\text{ cm}^2$

**Svar:** Arealet er $44 \\text{ cm}^2$.`,
    },

    {
      id: '8-3-4-example-sammensatt-2',
      type: 'example',
      title: 'Eksempel 8: Rektangel med hull',
      problem: `Et rektangel på 10 cm × 8 cm har et sirkelformet hull med radius 2 cm. Finn arealet av figuren.`,
      solution: `**Løsning:**

Vi finner arealet av rektangelet og trekker fra arealet av sirkelen.

Rektangel: $A_{\\text{rekt}} = 10 \\times 8 = 80 \\text{ cm}^2$

Sirkel: $A_{\\text{sirkel}} = \\pi \\times 2^2 = 3{,}14 \\times 4 = 12{,}56 \\text{ cm}^2$

Totalt areal: $A = 80 - 12{,}56 = 67{,}44 \\text{ cm}^2$

**Svar:** Arealet er ca. $67{,}44 \\text{ cm}^2$.`,
    },

    // Oppgave 6
    {
      id: '8-3-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet av de sammensatte figurene.',
        subTasks: [
          {
            label: 'a',
            task: 'En L-formet figur som består av to rektangler: 6 cm × 2 cm og 4 cm × 3 cm',
            solution: '$A = (6 \\times 2) + (4 \\times 3) = 12 + 12 = 24 \\text{ cm}^2$',
            answer: 24
          },
          {
            label: 'b',
            task: 'Et rektangel 12 m × 9 m med en rektangulær dam i midten som er 4 m × 3 m. Finn arealet av gresset rundt dammen.',
            solution: '$A = (12 \\times 9) - (4 \\times 3) = 108 - 12 = 96 \\text{ m}^2$',
            answer: 96
          },
        ],
        solution: 'a) $24 \\text{ cm}^2$, b) $96 \\text{ m}^2$',
        hints: ['Del figuren opp i enklere deler', 'Husk å trekke fra hvis det er hull'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: '8-3-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-7',
        number: '3.4.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet av de sammensatte figurene. Bruk $\\pi \\approx 3{,}14$.',
        subTasks: [
          {
            label: 'a',
            task: 'Et rektangel 10 cm × 6 cm med en halvsirkel på den ene kortsiden (diameter 6 cm)',
            solution: 'Rektangel: $60 \\text{ cm}^2$. Halvsirkel: $\\frac{\\pi \\times 3^2}{2} = \\frac{28{,}26}{2} = 14{,}13 \\text{ cm}^2$. Totalt: $60 + 14{,}13 = 74{,}13 \\text{ cm}^2$',
            answer: 74.13
          },
          {
            label: 'b',
            task: 'Et kvadrat med side 8 cm der det er skåret ut en kvart sirkel i hjørnet (radius 4 cm)',
            solution: 'Kvadrat: $64 \\text{ cm}^2$. Kvart sirkel: $\\frac{\\pi \\times 4^2}{4} = \\frac{50{,}24}{4} = 12{,}56 \\text{ cm}^2$. Totalt: $64 - 12{,}56 = 51{,}44 \\text{ cm}^2$',
            answer: 51.44
          },
        ],
        solution: 'a) ca. $74{,}13 \\text{ cm}^2$, b) ca. $51{,}44 \\text{ cm}^2$',
        hints: ['En halvsirkel har areal $\\frac{\\pi r^2}{2}$', 'En kvart sirkel har areal $\\frac{\\pi r^2}{4}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRAKTISKE OPPGAVER ==========
    {
      id: '8-3-4-praktisk-intro',
      type: 'text',
      content: `## Praktiske oppgaver

Nå skal vi bruke det vi har lært til å løse virkelige problemer. Arealberegning brukes ofte i hverdagen!`,
    },

    // Oppgave 8
    {
      id: '8-3-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-8',
        number: '3.4.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Et soverom har form som et rektangel med lengde 4 m og bredde 3,5 m.

a) Finn arealet av gulvet.
b) Teppet som skal legges koster 250 kr per kvadratmeter. Hvor mye koster det å legge teppe på hele gulvet?`,
        solution: `**Løsning:**

a) $A = 4 \\times 3{,}5 = 14 \\text{ m}^2$

b) Pris = $14 \\times 250 = 3500$ kr

**Svar:** a) $14 \\text{ m}^2$, b) 3500 kr`,
        hints: ['Del oppgaven opp i to steg', 'Husk å bruke riktig enhet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: '8-3-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-9',
        number: '3.4.9',
        type: 'classic',
        difficulty: 'medium',
        task: `En pizzakokk lager to typer pizza:
- Liten pizza med diameter 20 cm
- Stor pizza med diameter 30 cm

a) Finn arealet av den lille pizzaen.
b) Finn arealet av den store pizzaen.
c) Hvor mange ganger større er den store pizzaen enn den lille? (Avrund til én desimal)

Bruk $\\pi \\approx 3{,}14$.`,
        solution: `**Løsning:**

a) Radius liten: $r = 10$ cm
   $A_{\\text{liten}} = 3{,}14 \\times 10^2 = 314 \\text{ cm}^2$

b) Radius stor: $r = 15$ cm
   $A_{\\text{stor}} = 3{,}14 \\times 15^2 = 706{,}5 \\text{ cm}^2$

c) $\\frac{706{,}5}{314} \\approx 2{,}25$

**Svar:** a) $314 \\text{ cm}^2$, b) $706{,}5 \\text{ cm}^2$, c) Ca. 2,3 ganger større`,
        hints: ['Husk å finne radius fra diameter', 'For å sammenligne, del det store arealet på det lille'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: '8-3-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-10',
        number: '3.4.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En hage har form som et rektangel med lengde 15 m og bredde 10 m. I hagen er det:
- En sirkelformet dam med radius 2 m
- Et trekantet blomsterbed med grunnlinje 4 m og høyde 3 m

Resten av hagen skal såes med gress. Hvor stort er gressarealet? Bruk $\\pi \\approx 3{,}14$.`,
        solution: `**Løsning:**

Hagen totalt: $A_{\\text{hage}} = 15 \\times 10 = 150 \\text{ m}^2$

Dam: $A_{\\text{dam}} = 3{,}14 \\times 2^2 = 12{,}56 \\text{ m}^2$

Blomsterbed: $A_{\\text{bed}} = \\frac{1}{2} \\times 4 \\times 3 = 6 \\text{ m}^2$

Gressareal: $A_{\\text{gress}} = 150 - 12{,}56 - 6 = 131{,}44 \\text{ m}^2$

**Svar:** Gressarealet er ca. $131{,}44 \\text{ m}^2$.`,
        hints: ['Finn først arealet av hele hagen', 'Trekk fra arealet av dammen og blomsterbedet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: '8-3-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-11',
        number: '3.4.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En vegg skal males. Veggen er rektangulær med bredde 5 m og høyde 2,5 m. I veggen er det et vindu som er 1,2 m bredt og 1 m høyt.

a) Finn arealet som skal males.
b) En liter maling dekker 10 m². Hvor mange liter maling trengs?
c) Malingen koster 89 kr per liter og selges bare i hele litere. Hva blir totalkostnaden?`,
        solution: `**Løsning:**

a) Vegg totalt: $5 \\times 2{,}5 = 12{,}5 \\text{ m}^2$
   Vindu: $1{,}2 \\times 1 = 1{,}2 \\text{ m}^2$
   Maleområde: $12{,}5 - 1{,}2 = 11{,}3 \\text{ m}^2$

b) Antall liter: $\\frac{11{,}3}{10} = 1{,}13$ liter

c) Vi må kjøpe 2 hele litere.
   Kostnad: $2 \\times 89 = 178$ kr

**Svar:** a) $11{,}3 \\text{ m}^2$, b) 1,13 liter (må kjøpe 2), c) 178 kr`,
        hints: ['Trekk fra vinduet fra veggens totale areal', 'Du må runde opp til nærmeste hele liter når du kjøper maling'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: '8-3-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-12',
        number: '3.4.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et trapesformet skilt har parallelle sider på 60 cm og 40 cm, og høyden er 30 cm. Skiltet skal dekkes med refleksmateriale som koster 0,50 kr per cm².

a) Finn arealet av skiltet i cm².
b) Hva koster refleksmaterialet?`,
        solution: `**Løsning:**

a) $A = \\frac{(60 + 40) \\times 30}{2} = \\frac{100 \\times 30}{2} = \\frac{3000}{2} = 1500 \\text{ cm}^2$

b) Pris = $1500 \\times 0{,}50 = 750$ kr

**Svar:** a) $1500 \\text{ cm}^2$, b) 750 kr`,
        hints: ['Bruk formelen for areal av trapes', 'Gange arealet med prisen per cm²'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Her er alle arealformlene vi har lært:

| Figur | Formel |
|-------|--------|
| Rektangel | $A = l \\times b$ |
| Kvadrat | $A = s^2$ |
| Trekant | $A = \\frac{1}{2} \\times g \\times h$ |
| Parallellogram | $A = g \\times h$ |
| Trapes | $A = \\frac{(a + b) \\times h}{2}$ |
| Sirkel | $A = \\pi r^2$ |

For **sammensatte figurer**: Del opp i enkle figurer og legg sammen, eller start med en enkel figur og trekk fra.`,
    },

    // Oppgave 13 - Blandede oppgaver
    {
      id: '8-3-4-ex-block-13',
      type: 'exercise',
      exercise: {
        id: '8-3-4-ex-13',
        number: '3.4.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Blandede oppgaver. Bruk $\\pi \\approx 3{,}14$.',
        subTasks: [
          {
            label: 'a',
            task: 'Et rektangel har areal $48 \\text{ cm}^2$ og lengde 8 cm. Finn bredden.',
            solution: '$b = \\frac{48}{8} = 6$ cm',
            answer: 6
          },
          {
            label: 'b',
            task: 'En trekant har areal $36 \\text{ m}^2$ og grunnlinje 9 m. Finn høyden.',
            solution: '$h = \\frac{2 \\times 36}{9} = \\frac{72}{9} = 8$ m',
            answer: 8
          },
          {
            label: 'c',
            task: 'En sirkel har areal $50{,}24 \\text{ cm}^2$. Finn radius.',
            solution: '$r^2 = \\frac{50{,}24}{3{,}14} = 16$, så $r = 4$ cm',
            answer: 4
          },
        ],
        solution: 'a) 6 cm, b) 8 m, c) 4 cm',
        hints: ['Snu formlene for å finne det ukjente', 'For sirkel: $r = \\sqrt{\\frac{A}{\\pi}}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [], // Alle oppgaver er inkludert som exercise blocks i content
};

export const CHAPTER_8_3_5: TextbookChapter = {
  id: '8-3-5',
  courseId: '8',
  chapterNumber: '3.5',
  title: 'Omkrets',
  description: 'Beregne omkrets av ulike figurer.',
  estimatedMinutes: 35,
  competenceGoals: [],
  content: [
    // Introduksjon
    {
      id: '8-3-5-intro',
      type: 'text',
      content: `## Hva er omkrets?

Tenk deg at du skal gå rundt hele kanten av en fotballbane. Hvor langt må du gå? Denne avstanden kalles **omkretsen** av banen.

**Omkretsen** er den totale lengden rundt en figur. Hvis du legger en tråd langs hele kanten av en figur og deretter måler tråden, får du omkretsen.

Omkrets brukes i mange hverdagssituasjoner:
- Hvor mye gjerde trengs rundt en hage?
- Hvor langt er det å sykle rundt et vann?
- Hvor mye kantbånd trengs rundt et bord?`,
    },
    // Definisjon
    {
      id: '8-3-5-def-1',
      type: 'definition',
      title: 'Omkrets',
      content: `**Omkrets** er den totale lengden av kanten rundt en figur.

For å finne omkretsen legger vi sammen lengden av alle sidene i figuren.

Omkrets måles i lengdeenheter som centimeter (cm), meter (m) eller kilometer (km).`,
    },
    // Omkrets av rektangel
    {
      id: '8-3-5-text-1',
      type: 'text',
      content: `## Omkrets av rektangel

Et **rektangel** har fire sider: to lengder ($l$) og to bredder ($b$). For å finne omkretsen legger vi sammen alle fire sidene.`,
    },
    // Formel for rektangel
    {
      id: '8-3-5-formula-1',
      type: 'formula',
      title: 'Omkrets av rektangel',
      latex: 'O = 2l + 2b = 2(l + b)',
      description: 'der $l$ er lengden og $b$ er bredden',
    },
    // Eksempel 1
    {
      id: '8-3-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Rektangel',
      problem: `Et rektangel har lengde $8$ cm og bredde $5$ cm. Finn omkretsen.`,
      solution: `**Løsning:**

Vi bruker formelen $O = 2l + 2b$:

$O = 2 \\cdot 8 + 2 \\cdot 5$
$O = 16 + 10$
$O = 26$ cm

**Omkretsen er 26 cm.**`,
    },
    // Oppgave 1
    {
      id: '8-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-3-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn omkretsen av rektanglene.',
        subTasks: [
          { label: 'a', task: 'Lengde $10$ cm, bredde $4$ cm', solution: '$O = 2 \\cdot 10 + 2 \\cdot 4 = 20 + 8 = 28$ cm', answer: 28 },
          { label: 'b', task: 'Lengde $7$ m, bredde $3$ m', solution: '$O = 2 \\cdot 7 + 2 \\cdot 3 = 14 + 6 = 20$ m', answer: 20 },
          { label: 'c', task: 'Lengde $12$ cm, bredde $6$ cm', solution: '$O = 2 \\cdot 12 + 2 \\cdot 6 = 24 + 12 = 36$ cm', answer: 36 },
        ],
        solution: 'a) 28 cm, b) 20 m, c) 36 cm',
        hints: ['Bruk formelen O = 2l + 2b', 'Multipliser lengde med 2, bredde med 2, og legg sammen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Omkrets av kvadrat
    {
      id: '8-3-5-text-2',
      type: 'text',
      content: `## Omkrets av kvadrat

Et **kvadrat** er et spesielt rektangel der alle fire sidene er like lange. Hvis vi kaller sidelengden $s$, kan vi forenkle formelen.`,
    },
    // Formel for kvadrat
    {
      id: '8-3-5-formula-2',
      type: 'formula',
      title: 'Omkrets av kvadrat',
      latex: 'O = 4s',
      description: 'der $s$ er sidelengden',
    },
    // Eksempel 2
    {
      id: '8-3-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Kvadrat',
      problem: `Et kvadrat har sidelengde $6$ cm. Finn omkretsen.`,
      solution: `**Løsning:**

Vi bruker formelen $O = 4s$:

$O = 4 \\cdot 6$
$O = 24$ cm

**Omkretsen er 24 cm.**`,
    },
    // Oppgave 2
    {
      id: '8-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-3-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn omkretsen av kvadratene.',
        subTasks: [
          { label: 'a', task: 'Sidelengde $5$ cm', solution: '$O = 4 \\cdot 5 = 20$ cm', answer: 20 },
          { label: 'b', task: 'Sidelengde $9$ m', solution: '$O = 4 \\cdot 9 = 36$ m', answer: 36 },
          { label: 'c', task: 'Sidelengde $3{,}5$ cm', solution: '$O = 4 \\cdot 3{,}5 = 14$ cm', answer: 14 },
        ],
        solution: 'a) 20 cm, b) 36 m, c) 14 cm',
        hints: ['Alle sider i et kvadrat er like lange', 'Multipliser sidelengden med 4'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Omkrets av trekant
    {
      id: '8-3-5-text-3',
      type: 'text',
      content: `## Omkrets av trekant

En **trekant** har tre sider. For å finne omkretsen legger vi sammen lengden av alle tre sidene.`,
    },
    // Formel for trekant
    {
      id: '8-3-5-formula-3',
      type: 'formula',
      title: 'Omkrets av trekant',
      latex: 'O = a + b + c',
      description: 'der $a$, $b$ og $c$ er lengden av de tre sidene',
    },
    // Eksempel 3
    {
      id: '8-3-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Trekant',
      problem: `En trekant har sider på $5$ cm, $7$ cm og $9$ cm. Finn omkretsen.`,
      solution: `**Løsning:**

Vi legger sammen alle sidene:

$O = 5 + 7 + 9$
$O = 21$ cm

**Omkretsen er 21 cm.**`,
    },
    // Spesielle trekanter
    {
      id: '8-3-5-note-1',
      type: 'note',
      content: `**Spesielle trekanter:**

- **Likesidet trekant**: Alle tre sider er like lange. $O = 3s$
- **Likebeint trekant**: To sider er like lange. $O = 2a + b$`,
    },
    // Oppgave 3
    {
      id: '8-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-3-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn omkretsen av trekantene.',
        subTasks: [
          { label: 'a', task: 'Sider: $4$ cm, $6$ cm, $8$ cm', solution: '$O = 4 + 6 + 8 = 18$ cm', answer: 18 },
          { label: 'b', task: 'Likesidet trekant med sidelengde $5$ cm', solution: '$O = 3 \\cdot 5 = 15$ cm', answer: 15 },
          { label: 'c', task: 'Likebeint trekant med to sider på $7$ cm og grunnlinje $4$ cm', solution: '$O = 7 + 7 + 4 = 18$ cm', answer: 18 },
        ],
        solution: 'a) 18 cm, b) 15 cm, c) 18 cm',
        hints: ['Legg sammen alle sidene', 'En likesidet trekant har tre like sider'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Omkrets av sirkel
    {
      id: '8-3-5-text-4',
      type: 'text',
      content: `## Omkrets av sirkel

En **sirkel** er en spesiell figur. Den har ingen rette sider, bare en buet kant. Omkretsen av en sirkel kalles også **sirkumferens**.

For å beregne omkretsen trenger vi å kjenne til det spesielle tallet **pi** ($\\pi$), som er ca. $3{,}14$.`,
    },
    // Definisjon av pi
    {
      id: '8-3-5-def-2',
      type: 'definition',
      title: 'Pi (π)',
      content: `**Pi** ($\\pi$) er forholdet mellom omkretsen og diameteren i en sirkel.

$\\pi \\approx 3{,}14159...$

Vi bruker ofte $\\pi \\approx 3{,}14$ i beregninger, eller vi lar svaret stå med $\\pi$ i seg.

**Viktige begreper:**
- **Radius** ($r$): Avstanden fra sentrum til kanten
- **Diameter** ($d$): Avstanden tvers gjennom sirkelen. $d = 2r$`,
    },
    // Formel for sirkel
    {
      id: '8-3-5-formula-4',
      type: 'formula',
      title: 'Omkrets av sirkel',
      latex: 'O = 2\\pi r = \\pi d',
      description: 'der $r$ er radius og $d$ er diameter',
    },
    // Eksempel 4
    {
      id: '8-3-5-example-4',
      type: 'example',
      title: 'Eksempel 4: Sirkel med radius',
      problem: `En sirkel har radius $5$ cm. Finn omkretsen. Bruk $\\pi \\approx 3{,}14$.`,
      solution: `**Løsning:**

Vi bruker formelen $O = 2\\pi r$:

$O = 2 \\cdot 3{,}14 \\cdot 5$
$O = 31{,}4$ cm

**Omkretsen er ca. 31,4 cm.**

(Eksakt svar: $O = 10\\pi$ cm)`,
    },
    // Eksempel 5
    {
      id: '8-3-5-example-5',
      type: 'example',
      title: 'Eksempel 5: Sirkel med diameter',
      problem: `En sirkel har diameter $12$ cm. Finn omkretsen. Bruk $\\pi \\approx 3{,}14$.`,
      solution: `**Løsning:**

Vi bruker formelen $O = \\pi d$:

$O = 3{,}14 \\cdot 12$
$O = 37{,}68$ cm

**Omkretsen er ca. 37,7 cm.**`,
    },
    // Oppgave 4
    {
      id: '8-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn omkretsen av sirklene. Bruk $\\pi \\approx 3{,}14$. Rund av til en desimal.',
        subTasks: [
          { label: 'a', task: 'Radius $4$ cm', solution: '$O = 2 \\cdot 3{,}14 \\cdot 4 = 25{,}12 \\approx 25{,}1$ cm', answer: 25.1 },
          { label: 'b', task: 'Radius $10$ m', solution: '$O = 2 \\cdot 3{,}14 \\cdot 10 = 62{,}8$ m', answer: 62.8 },
          { label: 'c', task: 'Diameter $8$ cm', solution: '$O = 3{,}14 \\cdot 8 = 25{,}12 \\approx 25{,}1$ cm', answer: 25.1 },
          { label: 'd', task: 'Diameter $15$ m', solution: '$O = 3{,}14 \\cdot 15 = 47{,}1$ m', answer: 47.1 },
        ],
        solution: 'a) 25,1 cm, b) 62,8 m, c) 25,1 cm, d) 47,1 m',
        hints: ['Bruk O = 2πr når du har radius', 'Bruk O = πd når du har diameter', 'Husk at diameter = 2 · radius'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Sammensatte figurer
    {
      id: '8-3-5-text-5',
      type: 'text',
      content: `## Sammensatte figurer

Noen figurer er satt sammen av flere grunnfigurer. For å finne omkretsen av slike figurer, må vi tenke oss nøye om:

- Vi skal bare telle kantene som er **på utsiden** av figuren
- Indre kanter (der figurer møtes) skal **ikke** telles med`,
    },
    // Eksempel 6
    {
      id: '8-3-5-example-6',
      type: 'example',
      title: 'Eksempel 6: Sammensatt figur',
      problem: `En L-formet figur er satt sammen av to rektangler. Det store rektangelet er $10$ cm × $4$ cm, og det lille er $4$ cm × $3$ cm. Finn omkretsen.`,
      solution: `**Løsning:**

Vi må tegne figuren og finne alle ytterkantene:

Yttersidene blir:
- Nedre kant: $10$ cm
- Høyre kant nedre del: $4$ cm
- Høyre kant øvre del: $3$ cm
- Topp på det lille rektangelet: $4$ cm
- Venstre kant øvre del: $4 - 3 = 1$ cm (eller $3$ cm avhengig av plassering)
- Venstre kant nedre del: hele venstresiden

La oss summere: $10 + 4 + 4 + 3 + 6 + 3 = 30$ cm

**Omkretsen er 30 cm.**

(Merk: Det eksakte svaret avhenger av hvordan figuren er satt sammen. Tegn alltid figuren først!)`,
    },
    // Oppgave 5
    {
      id: '8-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn omkretsen av de sammensatte figurene. Tegn gjerne figurene først.',
        subTasks: [
          { label: 'a', task: 'Et kvadrat med side $6$ cm har et mindre kvadrat med side $2$ cm skåret ut fra et hjørne. Finn omkretsen.', solution: 'Omkrets = $6 + 6 + 4 + 2 + 2 + 4 = 24$ cm (eller $4 \\cdot 6 + 2 \\cdot 2 = 24 + 4 - 4 = 24$ cm)', answer: 24 },
          { label: 'b', task: 'To like kvadrater med side $5$ cm settes ved siden av hverandre. Finn omkretsen av den nye figuren.', solution: 'Det blir et rektangel $10$ cm × $5$ cm. $O = 2 \\cdot 10 + 2 \\cdot 5 = 30$ cm', answer: 30 },
        ],
        solution: 'a) 24 cm, b) 30 cm',
        hints: ['Tegn figuren', 'Tell kun ytterkantene', 'Ikke tell kanter som er inne i figuren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Halvsirkel
    {
      id: '8-3-5-text-6',
      type: 'text',
      content: `## Figurer med halvsirkel

Noen figurer inneholder halvsirkler. Omkretsen av en halvsirkel består av:
- Den buede delen (halvparten av sirkelens omkrets): $\\frac{\\pi d}{2}$ eller $\\pi r$
- Diameteren (den rette linjen)`,
    },
    // Eksempel 7
    {
      id: '8-3-5-example-7',
      type: 'example',
      title: 'Eksempel 7: Halvsirkel',
      problem: `En halvsirkel har diameter $10$ cm. Finn omkretsen. Bruk $\\pi \\approx 3{,}14$.`,
      solution: `**Løsning:**

Omkretsen består av:
1. Den buede delen: $\\frac{\\pi d}{2} = \\frac{3{,}14 \\cdot 10}{2} = 15{,}7$ cm
2. Diameteren: $10$ cm

Total omkrets: $15{,}7 + 10 = 25{,}7$ cm

**Omkretsen er ca. 25,7 cm.**`,
    },
    // Oppgave 6
    {
      id: '8-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-3-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn omkretsen. Bruk $\\pi \\approx 3{,}14$.',
        subTasks: [
          { label: 'a', task: 'En halvsirkel med diameter $8$ cm', solution: 'Buet del: $\\frac{3{,}14 \\cdot 8}{2} = 12{,}56$ cm. Total: $12{,}56 + 8 = 20{,}56 \\approx 20{,}6$ cm', answer: 20.6 },
          { label: 'b', task: 'En halvsirkel med radius $6$ cm', solution: 'Diameter = $12$ cm. Buet del: $3{,}14 \\cdot 6 = 18{,}84$ cm. Total: $18{,}84 + 12 = 30{,}84 \\approx 30{,}8$ cm', answer: 30.8 },
        ],
        solution: 'a) ca. 20,6 cm, b) ca. 30,8 cm',
        hints: ['Halvsirkelens bue = πr eller πd/2', 'Ikke glem diameteren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Praktiske oppgaver
    {
      id: '8-3-5-text-7',
      type: 'text',
      content: `## Praktiske oppgaver

Omkrets brukes ofte i hverdagslige situasjoner. Her er noen eksempler på hvordan du kan bruke det du har lært.`,
    },
    // Oppgave 7
    {
      id: '8-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-3-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs de praktiske oppgavene.',
        subTasks: [
          { label: 'a', task: 'En rektangulær hage er $15$ m lang og $8$ m bred. Hvor mange meter gjerde trengs rundt hagen?', solution: '$O = 2 \\cdot 15 + 2 \\cdot 8 = 30 + 16 = 46$ m gjerde', answer: 46 },
          { label: 'b', task: 'Et sykkelhjul har diameter $70$ cm. Hvor langt ruller hjulet på én omdreining? Bruk $\\pi \\approx 3{,}14$.', solution: '$O = \\pi \\cdot 70 = 3{,}14 \\cdot 70 = 219{,}8$ cm $\\approx 2{,}2$ m', answer: 220 },
          { label: 'c', task: 'En trekantet skilt har sider på $60$ cm, $60$ cm og $50$ cm. Hvor mye kantlist trengs rundt skiltet?', solution: '$O = 60 + 60 + 50 = 170$ cm', answer: 170 },
        ],
        solution: 'a) 46 m, b) ca. 220 cm eller 2,2 m, c) 170 cm',
        hints: ['Tenk på hvilken figur det er snakk om', 'Velg riktig formel'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Oppgave 8 - Vanskelig
    {
      id: '8-3-5-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-3-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs de utfordrende oppgavene.',
        subTasks: [
          { label: 'a', task: 'En løpebane er formet som et rektangel med halvsirkler i hver ende. Rektangelet er $100$ m langt og $60$ m bredt. Finn lengden på én runde. Bruk $\\pi \\approx 3{,}14$.', solution: 'De rette sidene: $2 \\cdot 100 = 200$ m. De to halvsirklene danner én hel sirkel med diameter $60$ m: $O = \\pi \\cdot 60 = 188{,}4$ m. Total: $200 + 188{,}4 = 388{,}4$ m', answer: 388 },
          { label: 'b', task: 'Et kvadrat og en sirkel har samme omkrets. Kvadratet har side $10$ cm. Hva er sirkelens radius? Bruk $\\pi \\approx 3{,}14$.', solution: 'Kvadratets omkrets: $4 \\cdot 10 = 40$ cm. Sirkel: $40 = 2\\pi r$, så $r = \\frac{40}{2 \\cdot 3{,}14} = \\frac{40}{6{,}28} \\approx 6{,}4$ cm', answer: 6.4 },
          { label: 'c', task: 'Et rektangel har omkrets $36$ cm og lengden er dobbelt så lang som bredden. Finn lengden og bredden.', solution: 'La $b$ = bredde, da er $l = 2b$. $O = 2l + 2b = 36$. $2(2b) + 2b = 36$. $6b = 36$. $b = 6$ cm, $l = 12$ cm', answer: [12, 6] },
        ],
        solution: 'a) ca. 388 m, b) ca. 6,4 cm, c) lengde 12 cm, bredde 6 cm',
        hints: [
          'a) Tenk på løpebanen som to rette strekninger pluss én hel sirkel',
          'b) Sett opp likning: 40 = 2πr',
          'c) Kall bredden b, da er lengden 2b. Bruk at O = 2l + 2b = 36',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Oppgave 9 - Vanskelig med baklengs regning
    {
      id: '8-3-5-ex-9',
      type: 'exercise',
      exercise: {
        id: '8-3-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn de ukjente målene når omkretsen er gitt.',
        subTasks: [
          { label: 'a', task: 'Et rektangel har omkrets $28$ cm og bredde $5$ cm. Finn lengden.', solution: '$O = 2l + 2b$, $28 = 2l + 2 \\cdot 5$, $28 = 2l + 10$, $2l = 18$, $l = 9$ cm', answer: 9 },
          { label: 'b', task: 'Et kvadrat har omkrets $48$ m. Finn sidelengden.', solution: '$O = 4s$, $48 = 4s$, $s = 12$ m', answer: 12 },
          { label: 'c', task: 'En sirkel har omkrets $31{,}4$ cm. Finn radius. Bruk $\\pi \\approx 3{,}14$.', solution: '$O = 2\\pi r$, $31{,}4 = 2 \\cdot 3{,}14 \\cdot r$, $31{,}4 = 6{,}28r$, $r = 5$ cm', answer: 5 },
        ],
        solution: 'a) 9 cm, b) 12 m, c) 5 cm',
        hints: ['Sett inn det du vet i formelen', 'Løs likningen for den ukjente'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Oppsummering
    {
      id: '8-3-5-text-8',
      type: 'text',
      content: `## Oppsummering

Du har nå lært å beregne omkrets av ulike figurer:`,
    },
    // Tips
    {
      id: '8-3-5-tip-1',
      type: 'tip',
      content: `**Huskeliste for omkrets:**

| Figur | Formel |
|-------|--------|
| Rektangel | $O = 2l + 2b$ |
| Kvadrat | $O = 4s$ |
| Trekant | $O = a + b + c$ |
| Sirkel | $O = 2\\pi r = \\pi d$ |
| Halvsirkel | $O = \\pi r + d$ |

**Husk:** $\\pi \\approx 3{,}14$ og $d = 2r$`,
    },
    // Oppgave 10 - Blandede oppgaver
    {
      id: '8-3-5-ex-10',
      type: 'exercise',
      exercise: {
        id: '8-3-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver. Velg riktig formel og finn omkretsen.',
        subTasks: [
          { label: 'a', task: 'Et rektangel med lengde $14$ cm og bredde $9$ cm', solution: '$O = 2 \\cdot 14 + 2 \\cdot 9 = 28 + 18 = 46$ cm', answer: 46 },
          { label: 'b', task: 'Et kvadrat med side $7{,}5$ m', solution: '$O = 4 \\cdot 7{,}5 = 30$ m', answer: 30 },
          { label: 'c', task: 'En likesidet trekant med side $8$ cm', solution: '$O = 3 \\cdot 8 = 24$ cm', answer: 24 },
          { label: 'd', task: 'En sirkel med radius $7$ cm. Bruk $\\pi \\approx 3{,}14$.', solution: '$O = 2 \\cdot 3{,}14 \\cdot 7 = 43{,}96 \\approx 44$ cm', answer: 44 },
        ],
        solution: 'a) 46 cm, b) 30 m, c) 24 cm, d) ca. 44 cm',
        hints: ['Identifiser figuren først', 'Bruk riktig formel'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_3_6: TextbookChapter = {
  id: '8-3-6',
  courseId: '8',
  chapterNumber: '3.6',
  title: 'Volum',
  description: 'Beregne volum av enkle romfigurer.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og argumentere for formlar for areal og volum'],
  content: [
    {
      id: '8-3-6-intro',
      type: 'text',
      content: `## Hva er volum?

**Volum** er et mål på hvor mye plass en romfigur tar. Du kan tenke på volum som hvor mye vann som får plass inne i en beholder.

Vi måler volum i kubikkenheter, for eksempel:
- **kubikkcentimeter** (cm³) - en terning med sidekanter på 1 cm
- **kubikkdesimeter** (dm³) - en terning med sidekanter på 1 dm (10 cm)
- **kubikkmeter** (m³) - en terning med sidekanter på 1 m

Et viktig forhold å huske:
- 1 dm³ = 1 liter
- 1000 cm³ = 1 dm³ = 1 liter
- 1000 dm³ = 1 m³ = 1000 liter`,
    },
    {
      id: '8-3-6-def-kube',
      type: 'definition',
      title: 'Volum av kube',
      content: `En **kube** er en romfigur der alle sidene er like store kvadrater.

Hvis siden i kuben er $s$, er volumet:

$$V = s^3 = s \\cdot s \\cdot s$$

Eksempel: En kube med side 3 cm har volum $V = 3^3 = 27$ cm³`,
    },
    {
      id: '8-3-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Volum av kube',
      problem: `Regn ut volumet av en kube med sidekant 5 cm.`,
      solution: `**Løsning:**

Vi bruker formelen for volum av kube:
$$V = s^3$$

Setter inn $s = 5$ cm:
$$V = 5^3 = 5 \\cdot 5 \\cdot 5 = 125 \\text{ cm}^3$$

Svaret er **125 cm³**.`,
    },
    {
      id: '8-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut volumet av kubene',
        subTasks: [
          { label: 'a', task: 'En kube med sidekant 4 cm', solution: '$V = 4^3 = 64$ cm³', answer: 64 },
          { label: 'b', task: 'En kube med sidekant 6 cm', solution: '$V = 6^3 = 216$ cm³', answer: 216 },
          { label: 'c', task: 'En kube med sidekant 10 cm', solution: '$V = 10^3 = 1000$ cm³', answer: 1000 },
          { label: 'd', task: 'En kube med sidekant 2,5 cm', solution: '$V = 2{,}5^3 = 15{,}625$ cm³', answer: 15.625 },
        ],
        solution: 'a) 64 cm³, b) 216 cm³, c) 1000 cm³, d) 15,625 cm³',
        hints: ['Husk at $s^3 = s \\cdot s \\cdot s$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-def-prisme',
      type: 'definition',
      title: 'Volum av rett prisme',
      content: `En **rett prisme** er en romfigur med to like, parallelle grunnflater og rette sidevegger.

Volumet er grunnflaten ganget med høyden:

$$V = G \\cdot h$$

der $G$ er arealet av grunnflaten og $h$ er høyden (avstanden mellom grunnflatene).

**Vanlige prismer:**
- **Firkantet prisme** (boks): $V = l \\cdot b \\cdot h$ (lengde × bredde × høyde)
- **Trekantet prisme**: $V = \\frac{1}{2} \\cdot g \\cdot h_{\\triangle} \\cdot h$ (trekantareal × høyde)`,
    },
    {
      id: '8-3-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Volum av firkantet prisme',
      problem: `En eske har lengde 8 cm, bredde 5 cm og høyde 3 cm. Finn volumet.`,
      solution: `**Løsning:**

Vi bruker formelen for volum av firkantet prisme:
$$V = l \\cdot b \\cdot h$$

Setter inn verdiene:
$$V = 8 \\cdot 5 \\cdot 3 = 120 \\text{ cm}^3$$

Svaret er **120 cm³**.`,
    },
    {
      id: '8-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut volumet av de firkantede prismene (boksene)',
        subTasks: [
          { label: 'a', task: 'Lengde 10 cm, bredde 4 cm, høyde 3 cm', solution: '$V = 10 \\cdot 4 \\cdot 3 = 120$ cm³', answer: 120 },
          { label: 'b', task: 'Lengde 6 cm, bredde 6 cm, høyde 2 cm', solution: '$V = 6 \\cdot 6 \\cdot 2 = 72$ cm³', answer: 72 },
          { label: 'c', task: 'Lengde 15 cm, bredde 8 cm, høyde 5 cm', solution: '$V = 15 \\cdot 8 \\cdot 5 = 600$ cm³', answer: 600 },
          { label: 'd', task: 'Lengde 2,5 m, bredde 2 m, høyde 1,5 m', solution: '$V = 2{,}5 \\cdot 2 \\cdot 1{,}5 = 7{,}5$ m³', answer: 7.5 },
        ],
        solution: 'a) 120 cm³, b) 72 cm³, c) 600 cm³, d) 7,5 m³',
        hints: ['Bruk formelen $V = l \\cdot b \\cdot h$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-example-3',
      type: 'example',
      title: 'Eksempel 3: Volum av trekantet prisme',
      problem: `En trekantet prisme har en grunnflate som er en rettvinklet trekant med kateter 6 cm og 4 cm. Prismens høyde er 10 cm. Finn volumet.`,
      solution: `**Løsning:**

Først finner vi arealet av grunnflaten (trekanten):
$$G = \\frac{1}{2} \\cdot 6 \\cdot 4 = 12 \\text{ cm}^2$$

Deretter bruker vi formelen for prisme:
$$V = G \\cdot h = 12 \\cdot 10 = 120 \\text{ cm}^3$$

Svaret er **120 cm³**.`,
    },
    {
      id: '8-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut volumet av de trekantede prismene',
        subTasks: [
          { label: 'a', task: 'Trekant med grunnlinje 8 cm og høyde 5 cm. Prismens høyde er 12 cm.', solution: '$G = \\frac{1}{2} \\cdot 8 \\cdot 5 = 20$ cm². $V = 20 \\cdot 12 = 240$ cm³', answer: 240 },
          { label: 'b', task: 'Trekant med grunnlinje 10 cm og høyde 6 cm. Prismens høyde er 15 cm.', solution: '$G = \\frac{1}{2} \\cdot 10 \\cdot 6 = 30$ cm². $V = 30 \\cdot 15 = 450$ cm³', answer: 450 },
          { label: 'c', task: 'Likesidet trekant med areal 25 cm². Prismens høyde er 8 cm.', solution: '$V = 25 \\cdot 8 = 200$ cm³', answer: 200 },
        ],
        solution: 'a) 240 cm³, b) 450 cm³, c) 200 cm³',
        hints: ['Finn først arealet av trekanten: $G = \\frac{1}{2} \\cdot \\text{grunnlinje} \\cdot \\text{høyde}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-def-sylinder',
      type: 'definition',
      title: 'Volum av sylinder',
      content: `En **sylinder** er en romfigur med to like, parallelle sirkler som grunnflater og en bøyd sideflate.

Volumet er:

$$V = \\pi r^2 h$$

der $r$ er radien i grunnflaten og $h$ er høyden.

Dette er det samme som å bruke prisme-formelen $V = G \\cdot h$ der grunnflaten er en sirkel med areal $G = \\pi r^2$.`,
    },
    {
      id: '8-3-6-example-4',
      type: 'example',
      title: 'Eksempel 4: Volum av sylinder',
      problem: `En brusflakske har form som en sylinder med radius 4 cm og høyde 15 cm. Hvor mange liter romfang har flasken?`,
      solution: `**Løsning:**

Vi bruker formelen for volum av sylinder:
$$V = \\pi r^2 h$$

Setter inn $r = 4$ cm og $h = 15$ cm:
$$V = \\pi \\cdot 4^2 \\cdot 15 = \\pi \\cdot 16 \\cdot 15 = 240\\pi \\approx 754 \\text{ cm}^3$$

Regner om til liter (1 liter = 1000 cm³):
$$V = \\frac{754}{1000} \\approx 0{,}75 \\text{ liter}$$

Svaret er ca. **0,75 liter** (eller 754 cm³).`,
    },
    {
      id: '8-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut volumet av sylindrene. Gi svaret både eksakt (med $\\pi$) og avrundet til nærmeste heltall.',
        subTasks: [
          { label: 'a', task: 'Radius 3 cm, høyde 10 cm', solution: '$V = \\pi \\cdot 3^2 \\cdot 10 = 90\\pi \\approx 283$ cm³' },
          { label: 'b', task: 'Radius 5 cm, høyde 8 cm', solution: '$V = \\pi \\cdot 5^2 \\cdot 8 = 200\\pi \\approx 628$ cm³' },
          { label: 'c', task: 'Diameter 12 cm, høyde 20 cm', solution: '$r = 6$ cm. $V = \\pi \\cdot 6^2 \\cdot 20 = 720\\pi \\approx 2262$ cm³' },
          { label: 'd', task: 'Radius 2,5 cm, høyde 6 cm', solution: '$V = \\pi \\cdot 2{,}5^2 \\cdot 6 = 37{,}5\\pi \\approx 118$ cm³' },
        ],
        solution: 'a) 90π ≈ 283 cm³, b) 200π ≈ 628 cm³, c) 720π ≈ 2262 cm³, d) 37,5π ≈ 118 cm³',
        hints: ['Bruk formelen $V = \\pi r^2 h$. Husk at diameter = 2 × radius.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-text-enheter',
      type: 'text',
      content: `## Omregning mellom volumenheter

Når vi regner med volum, må vi ofte regne om mellom ulike enheter.

**Viktige omregninger:**

| Fra | Til | Multipliser med |
|-----|-----|-----------------|
| cm³ | mm³ | 1000 |
| dm³ | cm³ | 1000 |
| m³ | dm³ | 1000 |
| liter | cm³ | 1000 |
| liter | dm³ | 1 |
| m³ | liter | 1000 |

**Huskeregel:** Når vi går fra en større enhet til en mindre, multipliserer vi med 1000 (fordi $10^3 = 1000$).`,
    },
    {
      id: '8-3-6-note-enheter',
      type: 'note',
      content: `**Husk:** Volumenheter har tre dimensjoner, så vi multipliserer med 1000 (ikke 10 som for lengde eller 100 som for areal).

1 m = 10 dm → 1 m³ = 10³ dm³ = 1000 dm³`,
    },
    {
      id: '8-3-6-example-5',
      type: 'example',
      title: 'Eksempel 5: Omregning av volumenheter',
      problem: `a) Gjør om 2500 cm³ til dm³ (liter).
b) Gjør om 0,5 m³ til liter.`,
      solution: `**Løsning:**

a) Vi vet at 1000 cm³ = 1 dm³, så vi deler på 1000:
$$2500 \\text{ cm}^3 = \\frac{2500}{1000} = 2{,}5 \\text{ dm}^3 = 2{,}5 \\text{ liter}$$

b) Vi vet at 1 m³ = 1000 liter, så vi multipliserer med 1000:
$$0{,}5 \\text{ m}^3 = 0{,}5 \\cdot 1000 = 500 \\text{ liter}$$`,
    },
    {
      id: '8-3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om til den angitte enheten',
        subTasks: [
          { label: 'a', task: '3500 cm³ til liter', solution: '$3500 \\div 1000 = 3{,}5$ liter', answer: 3.5 },
          { label: 'b', task: '2,4 m³ til liter', solution: '$2{,}4 \\cdot 1000 = 2400$ liter', answer: 2400 },
          { label: 'c', task: '750 ml til cm³', solution: '750 ml = 750 cm³ (samme)', answer: 750 },
          { label: 'd', task: '0,025 m³ til cm³', solution: '$0{,}025 \\cdot 1000000 = 25000$ cm³', answer: 25000 },
          { label: 'e', task: '8,5 dm³ til cm³', solution: '$8{,}5 \\cdot 1000 = 8500$ cm³', answer: 8500 },
        ],
        solution: 'a) 3,5 liter, b) 2400 liter, c) 750 cm³, d) 25000 cm³, e) 8500 cm³',
        hints: ['Husk at 1 dm³ = 1 liter = 1000 cm³ og 1 m³ = 1000 liter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-text-praktisk',
      type: 'text',
      content: `## Praktiske oppgaver

I hverdagen møter vi ofte oppgaver der vi må beregne volum. Her er noen eksempler:

- **Hvor mye vann får plass i et akvarium?**
- **Hvor mange liter maling trengs for å fylle en boks?**
- **Hvor mange kubikkmeter jord trengs til et blomsterbed?**

For å løse slike oppgaver må vi:
1. Identifisere hvilken romfigur vi har
2. Finne de nødvendige målene
3. Bruke riktig formel
4. Gjøre om til passende enhet hvis nødvendig`,
    },
    {
      id: '8-3-6-example-6',
      type: 'example',
      title: 'Eksempel 6: Praktisk oppgave',
      problem: `Et akvarium har form som en firkantet prisme med lengde 80 cm, bredde 40 cm og høyde 50 cm.

a) Hvor mange liter vann får plass i akvariet?
b) Vannet skal fylles opp til 5 cm under kanten. Hvor mange liter vann trengs da?`,
      solution: `**Løsning:**

a) Volumet av akvariet:
$$V = l \\cdot b \\cdot h = 80 \\cdot 40 \\cdot 50 = 160000 \\text{ cm}^3$$

Gjør om til liter:
$$V = \\frac{160000}{1000} = 160 \\text{ liter}$$

b) Vannhøyden blir $50 - 5 = 45$ cm.
$$V_{\\text{vann}} = 80 \\cdot 40 \\cdot 45 = 144000 \\text{ cm}^3 = 144 \\text{ liter}$$

Svar: a) **160 liter**, b) **144 liter**`,
    },
    {
      id: '8-3-6-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs de praktiske oppgavene',
        subTasks: [
          { label: 'a', task: 'En iskremkartong har form som en firkantet prisme med mål 15 cm × 10 cm × 8 cm. Hvor mange liter iskrem får plass?', solution: '$V = 15 \\cdot 10 \\cdot 8 = 1200$ cm³ $= 1{,}2$ liter', answer: 1.2 },
          { label: 'b', task: 'Et basseng er 25 m langt, 10 m bredt og 2 m dypt. Hvor mange kubikkmeter vann rommer det?', solution: '$V = 25 \\cdot 10 \\cdot 2 = 500$ m³', answer: 500 },
          { label: 'c', task: 'En terning med side 20 cm fylles med sand. Hvor mange liter sand får plass?', solution: '$V = 20^3 = 8000$ cm³ $= 8$ liter', answer: 8 },
        ],
        solution: 'a) 1,2 liter, b) 500 m³, c) 8 liter',
        hints: ['Finn riktig formel ut fra formen på figuren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et vannrør har ytre diameter 10 cm og indre diameter 8 cm. Røret er 3 meter langt.',
        subTasks: [
          { label: 'a', task: 'Hvor mange liter vann får plass inne i røret?', solution: 'Indre radius $= 4$ cm. $V = \\pi \\cdot 4^2 \\cdot 300 = 4800\\pi \\approx 15079$ cm³ $\\approx 15{,}1$ liter' },
          { label: 'b', task: 'Beregn volumet av selve rørmaterialet (metallet).', solution: 'Ytre radius $= 5$ cm. $V_{\\text{metall}} = \\pi \\cdot 5^2 \\cdot 300 - \\pi \\cdot 4^2 \\cdot 300 = 2700\\pi \\approx 8482$ cm³' },
        ],
        solution: 'a) ca. 15,1 liter, b) ca. 8482 cm³',
        hints: ['Tenk på røret som to sylindre - en stor og en liten. Metallvolumet er forskjellen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn den ukjente lengden',
        subTasks: [
          { label: 'a', task: 'En kube har volum 512 cm³. Hva er sidekanten?', solution: '$s^3 = 512$, så $s = \\sqrt[3]{512} = 8$ cm', answer: 8 },
          { label: 'b', task: 'En firkantet prisme har grunnflate 36 cm² og volum 288 cm³. Hva er høyden?', solution: '$h = \\frac{V}{G} = \\frac{288}{36} = 8$ cm', answer: 8 },
          { label: 'c', task: 'En sylinder har høyde 10 cm og volum $250\\pi$ cm³. Hva er radien?', solution: '$\\pi r^2 \\cdot 10 = 250\\pi$, så $r^2 = 25$, $r = 5$ cm', answer: 5 },
        ],
        solution: 'a) 8 cm, b) 8 cm, c) 5 cm',
        hints: ['Løs ligningen for den ukjente ved å "jobbe baklengs" fra volumformelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-ex-9',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sammenlign volumene. Hvilken figur har størst volum?',
        subTasks: [
          { label: 'a', task: 'En kube med side 6 cm eller en firkantet prisme med mål 5 cm × 7 cm × 6 cm?', solution: 'Kube: $6^3 = 216$ cm³. Prisme: $5 \\cdot 7 \\cdot 6 = 210$ cm³. **Kuben er størst.**' },
          { label: 'b', task: 'En sylinder med radius 3 cm og høyde 10 cm, eller en kube med side 5 cm?', solution: 'Sylinder: $\\pi \\cdot 9 \\cdot 10 \\approx 283$ cm³. Kube: $125$ cm³. **Sylinderen er størst.**' },
        ],
        solution: 'a) Kuben (216 cm³ > 210 cm³), b) Sylinderen (ca. 283 cm³ > 125 cm³)',
        hints: ['Regn ut volumet for begge figurene og sammenlign'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-ex-10',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En tank har form som en liggende sylinder med diameter 1,2 m og lengde 3 m.',
        subTasks: [
          { label: 'a', task: 'Beregn tankens volum i kubikkmeter.', solution: '$r = 0{,}6$ m. $V = \\pi \\cdot 0{,}6^2 \\cdot 3 = 1{,}08\\pi \\approx 3{,}39$ m³' },
          { label: 'b', task: 'Hvor mange liter får plass i tanken?', solution: '$V = 3{,}39 \\cdot 1000 \\approx 3390$ liter' },
          { label: 'c', task: 'Tanken fylles med 50 liter per minutt. Hvor lang tid tar det å fylle tanken?', solution: '$t = \\frac{3390}{50} = 67{,}8$ minutter $\\approx 1$ time og 8 minutter' },
        ],
        solution: 'a) ca. 3,39 m³, b) ca. 3390 liter, c) ca. 68 minutter',
        hints: ['En liggende sylinder har samme volumformel som en stående'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-ex-11',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'En gaveeske har form som en firkantet prisme. Lengden er dobbelt så stor som bredden, og høyden er 10 cm.',
        subTasks: [
          { label: 'a', task: 'Hvis bredden er 8 cm, hva er volumet?', solution: 'Lengde $= 16$ cm. $V = 16 \\cdot 8 \\cdot 10 = 1280$ cm³', answer: 1280 },
          { label: 'b', task: 'Hvis volumet skal være 2000 cm³ og høyden fortsatt er 10 cm, hva må bredden være?', solution: '$2b \\cdot b \\cdot 10 = 2000$, så $2b^2 = 200$, $b^2 = 100$, $b = 10$ cm', answer: 10 },
        ],
        solution: 'a) 1280 cm³, b) 10 cm',
        hints: ['La bredden være $b$, da er lengden $2b$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-ex-12',
      type: 'exercise',
      exercise: {
        id: '8-3-6-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utforskingsoppgave: Et rektangulært ark papir er 20 cm × 30 cm. Du skal lage en åpen boks ved å klippe like store kvadrater fra hvert hjørne og brette opp sidene.',
        subTasks: [
          { label: 'a', task: 'Hvis du klipper kvadrater med side 3 cm, hva blir volumet av boksen?', solution: 'Lengde $= 30 - 6 = 24$ cm, bredde $= 20 - 6 = 14$ cm, høyde $= 3$ cm. $V = 24 \\cdot 14 \\cdot 3 = 1008$ cm³', answer: 1008 },
          { label: 'b', task: 'Hvis du klipper kvadrater med side 5 cm, hva blir volumet?', solution: 'Lengde $= 20$ cm, bredde $= 10$ cm, høyde $= 5$ cm. $V = 20 \\cdot 10 \\cdot 5 = 1000$ cm³', answer: 1000 },
          { label: 'c', task: 'Hvilken av de to boksene i a) og b) har størst volum?', solution: 'Boksen i a) har størst volum (1008 cm³ > 1000 cm³)' },
        ],
        solution: 'a) 1008 cm³, b) 1000 cm³, c) Boksen med 3 cm hjørner har størst volum',
        hints: ['Når du klipper kvadrater med side $x$, blir den nye lengden $(30-2x)$, bredden $(20-2x)$ og høyden $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-3-6-tip-oppsummering',
      type: 'tip',
      content: `**Oppsummering av volumformler:**

| Figur | Formel |
|-------|--------|
| Kube | $V = s^3$ |
| Firkantet prisme | $V = l \\cdot b \\cdot h$ |
| Generell prisme | $V = G \\cdot h$ |
| Sylinder | $V = \\pi r^2 h$ |

**Enheter:** 1000 cm³ = 1 dm³ = 1 liter, og 1000 liter = 1 m³`,
    },
  ],
  exercises: [],
};

export const CHAPTER_8_4_1: TextbookChapter = {
  id: '8-4-1',
  courseId: '8',
  chapterNumber: '4.1',
  title: 'Vinkler og trekanter',
  description: 'Lær om vinkler, vinkelsum og ulike typer trekanter.',
  estimatedMinutes: 45,
  competenceGoals: [],
  content: [
    {
      id: '8-4-1-intro',
      type: 'text',
      content: `## Vinkler

En **vinkel** måles i grader (°). En hel omdreining er 360°.

- **Spiss vinkel**: Mindre enn 90°
- **Rett vinkel**: Nøyaktig 90°
- **Stump vinkel**: Mellom 90° og 180°
- **Rett linje**: Nøyaktig 180°`,
    },
    {
      id: '8-4-1-def-1',
      type: 'definition',
      title: 'Vinkelsum i trekanter',
      content: `**Vinkelsummen i en trekant er alltid 180°.**

Hvis en trekant har vinklene $A$, $B$ og $C$, så er:
$$A + B + C = 180°$$`,
    },
    {
      id: '8-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Finn den ukjente vinkelen i trekanten:

a) To vinkler er 60° og 70°
b) To vinkler er 45° og 90°
c) To vinkler er 35° og 35°`,
      solution: `**Løsning:**

a) $180° - 60° - 70° = 50°$

b) $180° - 45° - 90° = 45°$

c) $180° - 35° - 35° = 110°$`,
    },
    {
      id: '8-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den ukjente vinkelen i trekanten',
        subTasks: [
          { label: 'a', task: 'To vinkler er 50° og 60°', solution: '$180° - 50° - 60° = 70°$' },
          { label: 'b', task: 'To vinkler er 30° og 90°', solution: '$180° - 30° - 90° = 60°$' },
          { label: 'c', task: 'To vinkler er 55° og 55°', solution: '$180° - 55° - 55° = 70°$' },
          { label: 'd', task: 'To vinkler er 25° og 130°', solution: '$180° - 25° - 130° = 25°$' },
        ],
        solution: 'a) 70°, b) 60°, c) 70°, d) 25°',
        hints: ['Vinkelsummen i en trekant er 180°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-4-1-text-2',
      type: 'text',
      content: `## Typer trekanter

Trekanter kan klassifiseres etter vinkler og sider:

**Etter vinkler:**
- **Spissvinklet**: Alle vinkler er mindre enn 90°
- **Rettvinklet**: Én vinkel er 90°
- **Stumpvinklet**: Én vinkel er større enn 90°

**Etter sider:**
- **Likesidet**: Alle sider like lange (alle vinkler er 60°)
- **Likebeint**: To sider like lange
- **Ulikesidet**: Alle sider ulike`,
    },
    {
      id: '8-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Klassifiser trekantene etter vinkler:

a) Vinkler: 60°, 60°, 60°
b) Vinkler: 30°, 60°, 90°
c) Vinkler: 40°, 50°, 90°
d) Vinkler: 20°, 40°, 120°`,
      solution: `**Løsning:**

a) Spissvinklet (alle vinkler < 90°) - også likesidet

b) Rettvinklet (har en 90° vinkel)

c) Rettvinklet (har en 90° vinkel)

d) Stumpvinklet (har en vinkel > 90°)`,
    },
    {
      id: '8-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Klassifiser trekantene etter vinkler',
        subTasks: [
          { label: 'a', task: 'Vinkler: 45°, 45°, 90°', solution: 'Rettvinklet' },
          { label: 'b', task: 'Vinkler: 70°, 70°, 40°', solution: 'Spissvinklet' },
          { label: 'c', task: 'Vinkler: 30°, 50°, 100°', solution: 'Stumpvinklet' },
          { label: 'd', task: 'Vinkler: 80°, 60°, 40°', solution: 'Spissvinklet' },
        ],
        solution: 'a) Rettvinklet, b) Spissvinklet, c) Stumpvinklet, d) Spissvinklet',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-4-1-text-3',
      type: 'text',
      content: `## Nabovinkler og toppvinkler

- **Nabovinkler**: To vinkler som deler en side og har sum 180°
- **Toppvinkler**: Vinkler som står rett overfor hverandre når to linjer krysser. De er alltid like store.`,
    },
    {
      id: '8-4-1-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `To linjer krysser hverandre. En av vinklene er 65°. Finn de tre andre vinklene.`,
      solution: `**Løsning:**

- Toppvinkelen til 65° er også **65°**
- Nabovinkelen til 65° er $180° - 65° = **115°$**
- Toppvinkelen til 115° er også **115°**

De fire vinklene er: 65°, 115°, 65°, 115°`,
    },
    {
      id: '8-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'To linjer krysser hverandre. Finn de tre andre vinklene.',
        subTasks: [
          { label: 'a', task: 'En vinkel er 40°', solution: '40°, 140°, 140°' },
          { label: 'b', task: 'En vinkel er 75°', solution: '75°, 105°, 105°' },
          { label: 'c', task: 'En vinkel er 90°', solution: '90°, 90°, 90°' },
          { label: 'd', task: 'En vinkel er 120°', solution: '120°, 60°, 60°' },
        ],
        solution: 'a) 40°, 140°, 140°, b) 75°, 105°, 105°, c) alle 90°, d) 120°, 60°, 60°',
        hints: ['Toppvinkler er like, nabovinkler har sum 180°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_4_2: TextbookChapter = {
  id: '8-4-2',
  courseId: '8',
  chapterNumber: '4.2',
  title: 'Areal og omkrets',
  description: 'Lær å regne ut areal og omkrets av ulike figurer.',
  estimatedMinutes: 50,
  competenceGoals: [],
  content: [
    {
      id: '8-4-2-intro',
      type: 'text',
      content: `## Areal og omkrets

- **Omkrets**: Lengden rundt en figur
- **Areal**: Størrelsen på flaten inne i figuren`,
    },
    {
      id: '8-4-2-def-1',
      type: 'definition',
      title: 'Formler for rektangel og kvadrat',
      content: `**Rektangel** med lengde $l$ og bredde $b$:
- Omkrets: $O = 2l + 2b = 2(l + b)$
- Areal: $A = l \\cdot b$

**Kvadrat** med side $s$:
- Omkrets: $O = 4s$
- Areal: $A = s^2$`,
    },
    {
      id: '8-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Finn areal og omkrets av:

a) Et rektangel med lengde 8 cm og bredde 5 cm
b) Et kvadrat med side 6 cm`,
      solution: `**Løsning:**

a) Rektangel:
   $O = 2 \\cdot 8 + 2 \\cdot 5 = 16 + 10 = 26$ cm
   $A = 8 \\cdot 5 = 40$ cm²

b) Kvadrat:
   $O = 4 \\cdot 6 = 24$ cm
   $A = 6^2 = 36$ cm²`,
    },
    {
      id: '8-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn areal og omkrets',
        subTasks: [
          { label: 'a', task: 'Rektangel: lengde 10 cm, bredde 4 cm', solution: '$O = 28$ cm, $A = 40$ cm²' },
          { label: 'b', task: 'Kvadrat: side 9 cm', solution: '$O = 36$ cm, $A = 81$ cm²' },
          { label: 'c', task: 'Rektangel: lengde 7 m, bredde 3 m', solution: '$O = 20$ m, $A = 21$ m²' },
          { label: 'd', task: 'Kvadrat: side 12 mm', solution: '$O = 48$ mm, $A = 144$ mm²' },
        ],
        solution: 'a) O=28cm, A=40cm², b) O=36cm, A=81cm², c) O=20m, A=21m², d) O=48mm, A=144mm²',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-4-2-def-2',
      type: 'definition',
      title: 'Formler for trekant og parallellogram',
      content: `**Trekant** med grunnlinje $g$ og høyde $h$:
- Areal: $A = \\frac{g \\cdot h}{2}$

**Parallellogram** med grunnlinje $g$ og høyde $h$:
- Areal: $A = g \\cdot h$`,
    },
    {
      id: '8-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Finn arealet av:

a) En trekant med grunnlinje 10 cm og høyde 6 cm
b) Et parallellogram med grunnlinje 8 m og høyde 5 m`,
      solution: `**Løsning:**

a) Trekant:
   $A = \\frac{10 \\cdot 6}{2} = \\frac{60}{2} = 30$ cm²

b) Parallellogram:
   $A = 8 \\cdot 5 = 40$ m²`,
    },
    {
      id: '8-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet',
        subTasks: [
          { label: 'a', task: 'Trekant: grunnlinje 12 cm, høyde 8 cm', solution: '$A = \\frac{12 \\cdot 8}{2} = 48$ cm²' },
          { label: 'b', task: 'Parallellogram: grunnlinje 15 m, høyde 4 m', solution: '$A = 15 \\cdot 4 = 60$ m²' },
          { label: 'c', task: 'Trekant: grunnlinje 7 cm, høyde 10 cm', solution: '$A = \\frac{7 \\cdot 10}{2} = 35$ cm²' },
          { label: 'd', task: 'Parallellogram: grunnlinje 9 m, høyde 6 m', solution: '$A = 9 \\cdot 6 = 54$ m²' },
        ],
        solution: 'a) 48 cm², b) 60 m², c) 35 cm², d) 54 m²',
        hints: ['Trekant: A = g·h/2, Parallellogram: A = g·h'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-4-2-def-3',
      type: 'definition',
      title: 'Formler for sirkel',
      content: `**Sirkel** med radius $r$:
- Omkrets: $O = 2\\pi r$ (eller $O = \\pi d$ der $d$ er diameter)
- Areal: $A = \\pi r^2$

Husk at $\\pi \\approx 3{,}14$`,
    },
    {
      id: '8-4-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Finn areal og omkrets av en sirkel med radius 5 cm. Bruk $\\pi \\approx 3{,}14$.`,
      solution: `**Løsning:**

Omkrets:
$O = 2\\pi r = 2 \\cdot 3{,}14 \\cdot 5 = 31{,}4$ cm

Areal:
$A = \\pi r^2 = 3{,}14 \\cdot 5^2 = 3{,}14 \\cdot 25 = 78{,}5$ cm²`,
    },
    {
      id: '8-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn areal og omkrets av sirkelen. Bruk $\\pi \\approx 3{,}14$',
        subTasks: [
          { label: 'a', task: 'Radius 3 cm', solution: '$O = 18{,}84$ cm, $A = 28{,}26$ cm²' },
          { label: 'b', task: 'Radius 10 m', solution: '$O = 62{,}8$ m, $A = 314$ m²' },
          { label: 'c', task: 'Diameter 8 cm (radius = 4 cm)', solution: '$O = 25{,}12$ cm, $A = 50{,}24$ cm²' },
        ],
        solution: 'a) O≈18,84cm, A≈28,26cm², b) O≈62,8m, A=314m², c) O≈25,12cm, A≈50,24cm²',
        hints: ['Husk at radius er halve diameteren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-4-2-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Et rektangulært rom er 6 m langt og 4 m bredt. Hvor mye koster det å legge gulvbelegg hvis det koster 250 kr per m²?`,
      solution: `**Løsning:**

Areal av rommet:
$A = 6 \\cdot 4 = 24$ m²

Pris:
$24 \\cdot 250 = 6000$ kr`,
    },
    {
      id: '8-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs tekstoppgavene',
        subTasks: [
          { label: 'a', task: 'Et kvadratisk rom har side 5 m. Gulvbelegg koster 180 kr/m². Finn total pris.', solution: '$A = 25$ m², Pris $= 25 \\cdot 180 = 4500$ kr' },
          { label: 'b', task: 'Et sirkelformet basseng har radius 6 m. Hvor stort er bassenget?', solution: '$A = 3{,}14 \\cdot 36 = 113{,}04$ m²' },
          { label: 'c', task: 'En trekantformet hage har grunnlinje 20 m og høyde 15 m. Finn arealet.', solution: '$A = \\frac{20 \\cdot 15}{2} = 150$ m²' },
        ],
        solution: 'a) 4500 kr, b) ca. 113 m², c) 150 m²',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_4_3: TextbookChapter = {
  id: '8-4-3',
  courseId: '8',
  chapterNumber: '4.3',
  title: "Pytagoras' setning",
  description: 'Lær å bruke Pytagoras til å finne ukjente sider i rettvinklede trekanter.',
  estimatedMinutes: 50,
  competenceGoals: [],
  content: [
    {
      id: '8-4-3-intro',
      type: 'text',
      content: `## Pytagoras' setning

I en **rettvinklet trekant** er den lengste siden kalt **hypotenusen** (den ligger overfor den rette vinkelen). De to andre sidene kalles **kateter**.

Pytagoras' setning sier at summen av katetenes kvadrater er lik hypotenusens kvadrat.`,
    },
    {
      id: '8-4-3-def-1',
      type: 'definition',
      title: "Pytagoras' setning",
      content: `Hvis $a$ og $b$ er katetene og $c$ er hypotenusen, så gjelder:

$$a^2 + b^2 = c^2$$

Vi kan også skrive dette som:
- $c = \\sqrt{a^2 + b^2}$ (finne hypotenusen)
- $a = \\sqrt{c^2 - b^2}$ (finne en katet)`,
    },
    {
      id: '8-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `En rettvinklet trekant har kateter 3 cm og 4 cm. Finn hypotenusen.`,
      solution: `**Løsning:**

Bruker Pytagoras:
$$c^2 = a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = 25$$

$$c = \\sqrt{25} = 5$$

Hypotenusen er **5 cm**.`,
    },
    {
      id: '8-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn hypotenusen i den rettvinklede trekanten',
        subTasks: [
          { label: 'a', task: 'Kateter: 6 cm og 8 cm', solution: '$c = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm' },
          { label: 'b', task: 'Kateter: 5 cm og 12 cm', solution: '$c = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm' },
          { label: 'c', task: 'Kateter: 8 cm og 15 cm', solution: '$c = \\sqrt{64 + 225} = \\sqrt{289} = 17$ cm' },
          { label: 'd', task: 'Kateter: 9 cm og 12 cm', solution: '$c = \\sqrt{81 + 144} = \\sqrt{225} = 15$ cm' },
        ],
        solution: 'a) 10 cm, b) 13 cm, c) 17 cm, d) 15 cm',
        hints: ['Bruk formelen $c = \\sqrt{a^2 + b^2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-4-3-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `En rettvinklet trekant har hypotenuse 13 cm og én katet 5 cm. Finn den andre kateten.`,
      solution: `**Løsning:**

La $a$ være den ukjente kateten. Da er:
$$a^2 + 5^2 = 13^2$$
$$a^2 + 25 = 169$$
$$a^2 = 169 - 25 = 144$$
$$a = \\sqrt{144} = 12$$

Den andre kateten er **12 cm**.`,
    },
    {
      id: '8-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den ukjente kateten',
        subTasks: [
          { label: 'a', task: 'Hypotenuse 10 cm, én katet 6 cm', solution: '$a = \\sqrt{100 - 36} = \\sqrt{64} = 8$ cm' },
          { label: 'b', task: 'Hypotenuse 17 cm, én katet 8 cm', solution: '$a = \\sqrt{289 - 64} = \\sqrt{225} = 15$ cm' },
          { label: 'c', task: 'Hypotenuse 25 cm, én katet 7 cm', solution: '$a = \\sqrt{625 - 49} = \\sqrt{576} = 24$ cm' },
          { label: 'd', task: 'Hypotenuse 20 cm, én katet 12 cm', solution: '$a = \\sqrt{400 - 144} = \\sqrt{256} = 16$ cm' },
        ],
        solution: 'a) 8 cm, b) 15 cm, c) 24 cm, d) 16 cm',
        hints: ['Bruk formelen $a = \\sqrt{c^2 - b^2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-4-3-text-3',
      type: 'text',
      content: `## Praktiske anvendelser

Pytagoras brukes ofte i praktiske situasjoner for å finne avstander, høyder eller lengder.`,
    },
    {
      id: '8-4-3-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `En stige er 5 m lang og står mot en vegg. Foten av stigen er 3 m fra veggen. Hvor høyt opp på veggen rekker stigen?`,
      solution: `**Løsning:**

Dette danner en rettvinklet trekant der:
- Stigen er hypotenusen (5 m)
- Avstanden fra veggen er én katet (3 m)
- Høyden er den andre kateten

$$h^2 + 3^2 = 5^2$$
$$h^2 + 9 = 25$$
$$h^2 = 16$$
$$h = 4$$

Stigen rekker **4 m** opp på veggen.`,
    },
    {
      id: '8-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs tekstoppgavene ved hjelp av Pytagoras',
        subTasks: [
          { label: 'a', task: 'En stige er 13 m lang. Den står 5 m fra veggen. Hvor høyt rekker den?', solution: '$h = \\sqrt{169 - 25} = \\sqrt{144} = 12$ m' },
          { label: 'b', task: 'Et rektangulært rom er 6 m × 8 m. Hvor lang er diagonalen?', solution: '$d = \\sqrt{36 + 64} = \\sqrt{100} = 10$ m' },
          { label: 'c', task: 'Du går 400 m nord og 300 m øst. Hvor lang er den rette veien tilbake?', solution: '$d = \\sqrt{160000 + 90000} = \\sqrt{250000} = 500$ m' },
        ],
        solution: 'a) 12 m, b) 10 m, c) 500 m',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-4-3-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Sjekk om en trekant med sider 7 cm, 24 cm og 25 cm er rettvinklet.`,
      solution: `**Løsning:**

Vi sjekker om $a^2 + b^2 = c^2$:

$7^2 + 24^2 = 49 + 576 = 625$

$25^2 = 625$

Siden $7^2 + 24^2 = 25^2$, er trekanten **rettvinklet**.`,
    },
    {
      id: '8-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sjekk om trekantene er rettvinklede',
        subTasks: [
          { label: 'a', task: 'Sider: 5, 12, 13', solution: '$5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✓ Rettvinklet' },
          { label: 'b', task: 'Sider: 6, 8, 11', solution: '$6^2 + 8^2 = 36 + 64 = 100 \\neq 121$ ✗ Ikke rettvinklet' },
          { label: 'c', task: 'Sider: 8, 15, 17', solution: '$8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓ Rettvinklet' },
          { label: 'd', task: 'Sider: 9, 40, 41', solution: '$9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ ✓ Rettvinklet' },
        ],
        solution: 'a) Ja, b) Nei, c) Ja, d) Ja',
        hints: ['Sjekk om $a^2 + b^2 = c^2$ der c er den lengste siden'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_5_1: TextbookChapter = {
  id: '8-5-1',
  courseId: '8',
  chapterNumber: '5.1',
  title: 'Sentralmål',
  description: 'Lær om gjennomsnitt, median og typetall.',
  estimatedMinutes: 45,
  competenceGoals: [],
  content: [
    {
      id: '8-5-1-intro',
      type: 'text',
      content: `## Hva er sentralmål?

**Sentralmål** er tall som beskriver "midten" eller det typiske i et datasett. De tre vanligste er:
- Gjennomsnitt
- Median
- Typetall`,
    },
    {
      id: '8-5-1-def-1',
      type: 'definition',
      title: 'Gjennomsnitt',
      content: `**Gjennomsnittet** (ofte kalt middelverdien) finner vi ved å legge sammen alle verdiene og dele på antallet.

$$\\text{Gjennomsnitt} = \\frac{\\text{sum av alle verdier}}{\\text{antall verdier}}$$`,
    },
    {
      id: '8-5-1-gjennomsnitt-bilde',
      type: 'image',
      src: '/images/8-klasse/gjennomsnitt-median.svg',
      alt: 'Illustrasjon av gjennomsnitt og median i et datasett',
      caption: 'Gjennomsnitt og median som sentralmål',
    },
    {
      id: '8-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Finn gjennomsnittet av tallene: 4, 7, 8, 5, 6`,
      solution: `**Løsning:**

Sum: $4 + 7 + 8 + 5 + 6 = 30$

Antall: $5$

Gjennomsnitt: $\\frac{30}{5} = 6$`,
    },
    {
      id: '8-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn gjennomsnittet',
        subTasks: [
          { label: 'a', task: '3, 5, 7, 9, 11', solution: '$\\frac{35}{5} = 7$' },
          { label: 'b', task: '12, 15, 18, 21', solution: '$\\frac{66}{4} = 16{,}5$' },
          { label: 'c', task: '8, 8, 10, 10, 14', solution: '$\\frac{50}{5} = 10$' },
          { label: 'd', task: '2, 4, 6, 8, 10, 12', solution: '$\\frac{42}{6} = 7$' },
        ],
        solution: 'a) 7, b) 16,5, c) 10, d) 7',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-5-1-def-2',
      type: 'definition',
      title: 'Median',
      content: `**Medianen** er den midterste verdien når tallene er sortert i stigende rekkefølge.

- Hvis antallet er odde: Medianen er det midterste tallet
- Hvis antallet er like: Medianen er gjennomsnittet av de to midterste`,
    },
    {
      id: '8-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Finn medianen:

a) 3, 7, 8, 12, 15
b) 4, 6, 9, 11`,
      solution: `**Løsning:**

a) Tallene er allerede sortert. Antall = 5 (odde)
   Midterste tall: **8**

b) Tallene er allerede sortert. Antall = 4 (like)
   De to midterste: 6 og 9
   Median: $\\frac{6 + 9}{2} = 7{,}5$`,
    },
    {
      id: '8-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn medianen',
        subTasks: [
          { label: 'a', task: '2, 5, 7, 9, 13', solution: 'Median = 7' },
          { label: 'b', task: '4, 8, 12, 16', solution: 'Median = $\\frac{8+12}{2} = 10$' },
          { label: 'c', task: '15, 3, 8, 12, 6 (må sorteres først)', solution: 'Sortert: 3, 6, 8, 12, 15. Median = 8' },
          { label: 'd', task: '7, 3, 9, 5, 11, 1', solution: 'Sortert: 1, 3, 5, 7, 9, 11. Median = $\\frac{5+7}{2} = 6$' },
        ],
        solution: 'a) 7, b) 10, c) 8, d) 6',
        hints: ['Husk å sortere tallene først!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-5-1-def-3',
      type: 'definition',
      title: 'Typetall (modus)',
      content: `**Typetallet** (modus) er den verdien som forekommer flest ganger i datasettet.

Et datasett kan ha:
- Ett typetall
- Flere typetall (hvis flere verdier forekommer like mange ganger)
- Ingen typetall (hvis alle verdier forekommer like mange ganger)`,
    },
    {
      id: '8-5-1-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Finn typetallet:

a) 3, 5, 5, 7, 5, 8, 9
b) 2, 4, 6, 8, 10`,
      solution: `**Løsning:**

a) 5 forekommer 3 ganger (mest). Typetall = **5**

b) Alle verdier forekommer 1 gang. **Ingen typetall**.`,
    },
    {
      id: '8-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn typetallet',
        subTasks: [
          { label: 'a', task: '4, 7, 4, 9, 4, 11', solution: 'Typetall = 4 (forekommer 3 ganger)' },
          { label: 'b', task: '3, 3, 5, 5, 7', solution: 'Typetall = 3 og 5 (begge forekommer 2 ganger)' },
          { label: 'c', task: '1, 2, 3, 4, 5', solution: 'Ingen typetall' },
          { label: 'd', task: '8, 8, 8, 2, 3, 5', solution: 'Typetall = 8 (forekommer 3 ganger)' },
        ],
        solution: 'a) 4, b) 3 og 5, c) Ingen, d) 8',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-5-1-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `På en prøve fikk 10 elever disse karakterene: 3, 4, 4, 5, 4, 3, 6, 4, 5, 4

Finn gjennomsnitt, median og typetall.`,
      solution: `**Løsning:**

**Gjennomsnitt:**
$\\frac{3+4+4+5+4+3+6+4+5+4}{10} = \\frac{42}{10} = 4{,}2$

**Median:**
Sortert: 3, 3, 4, 4, 4, 4, 4, 5, 5, 6
De to midterste: 4 og 4
Median = $\\frac{4+4}{2} = 4$

**Typetall:**
4 forekommer 5 ganger. Typetall = **4**`,
    },
    {
      id: '8-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn gjennomsnitt, median og typetall',
        subTasks: [
          { label: 'a', task: '5, 8, 6, 5, 9, 5, 7', solution: 'Gj.snitt: 6,4. Sortert: 5,5,5,6,7,8,9. Median: 6. Typetall: 5' },
          { label: 'b', task: '10, 12, 14, 12, 16, 12', solution: 'Gj.snitt: 12,7. Sortert: 10,12,12,12,14,16. Median: 12. Typetall: 12' },
        ],
        solution: 'a) Gj.snitt=6,4, Median=6, Typetall=5. b) Gj.snitt≈12,7, Median=12, Typetall=12',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_5_2: TextbookChapter = {
  id: '8-5-2',
  courseId: '8',
  chapterNumber: '5.2',
  title: 'Diagrammer og tabeller',
  description: 'Lær å lese og lage ulike typer diagrammer.',
  estimatedMinutes: 45,
  competenceGoals: [],
  content: [
    {
      id: '8-5-2-intro',
      type: 'text',
      content: `## Diagrammer

Diagrammer brukes til å visualisere data. De vanligste typene er:
- **Stolpediagram**: Viser kategorier med stolper
- **Søylediagram**: Horisontale stolper
- **Sektordiagram (kakediagram)**: Viser andeler som sirkelsektorer
- **Linjediagram**: Viser utvikling over tid`,
    },
    {
      id: '8-5-2-stolpediagram-bilde',
      type: 'image',
      src: '/images/8-klasse/statistikk-stolpediagram.svg',
      alt: 'Stolpediagram som viser data i kategorier',
      caption: 'Stolpediagram brukes til a sammenligne kategorier',
    },
    {
      id: '8-5-2-linjediagram-bilde',
      type: 'image',
      src: '/images/8-klasse/statistikk-linjediagram.svg',
      alt: 'Linjediagram som viser utvikling over tid',
      caption: 'Linjediagram viser hvordan verdier endrer seg over tid',
    },
    {
      id: '8-5-2-def-1',
      type: 'definition',
      title: 'Frekvens og relativ frekvens',
      content: `- **Frekvens**: Hvor mange ganger en verdi forekommer
- **Relativ frekvens**: Frekvensen delt på totalt antall

$$\\text{Relativ frekvens} = \\frac{\\text{frekvens}}{\\text{totalt antall}}$$

Relativ frekvens kan uttrykkes som brøk, desimaltall eller prosent.`,
    },
    {
      id: '8-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `I en klasse med 20 elever liker:
- 8 elever fotball
- 5 elever håndball
- 4 elever basketball
- 3 elever svømming

Lag en frekvenstabell med relativ frekvens.`,
      solution: `**Løsning:**

| Idrett | Frekvens | Relativ frekvens |
|--------|----------|------------------|
| Fotball | 8 | $\\frac{8}{20} = 0{,}40 = 40\\%$ |
| Håndball | 5 | $\\frac{5}{20} = 0{,}25 = 25\\%$ |
| Basketball | 4 | $\\frac{4}{20} = 0{,}20 = 20\\%$ |
| Svømming | 3 | $\\frac{3}{20} = 0{,}15 = 15\\%$ |
| **Sum** | 20 | 1,00 = 100% |`,
    },
    {
      id: '8-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag frekvenstabell med relativ frekvens',
        subTasks: [
          { label: 'a', task: '25 elever: 10 har hund, 8 har katt, 5 har fisk, 2 har hamster', solution: 'Hund: 40%, Katt: 32%, Fisk: 20%, Hamster: 8%' },
          { label: 'b', task: '40 biler: 20 røde, 12 blå, 8 hvite', solution: 'Røde: 50%, Blå: 30%, Hvite: 20%' },
        ],
        solution: 'a) Hund 40%, Katt 32%, Fisk 20%, Hamster 8%. b) Røde 50%, Blå 30%, Hvite 20%',
        hints: ['Del frekvensen på totalt antall for å finne relativ frekvens'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-5-2-text-2',
      type: 'text',
      content: `## Sektordiagram

I et sektordiagram representerer hele sirkelen 100% (eller 360°). Hver sektor viser en andel.

For å finne vinkelen til en sektor:
$$\\text{Vinkel} = \\text{relativ frekvens} \\times 360°$$`,
    },
    {
      id: '8-5-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Regn ut vinklene til sektorene for idrettseksempelet over (fotball 40%, håndball 25%, basketball 20%, svømming 15%).`,
      solution: `**Løsning:**

- Fotball: $0{,}40 \\times 360° = 144°$
- Håndball: $0{,}25 \\times 360° = 90°$
- Basketball: $0{,}20 \\times 360° = 72°$
- Svømming: $0{,}15 \\times 360° = 54°$

Kontroll: $144° + 90° + 72° + 54° = 360°$ ✓`,
    },
    {
      id: '8-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut sektorvinklene',
        subTasks: [
          { label: 'a', task: 'Ja: 60%, Nei: 30%, Vet ikke: 10%', solution: 'Ja: 216°, Nei: 108°, Vet ikke: 36°' },
          { label: 'b', task: 'A: 25%, B: 25%, C: 50%', solution: 'A: 90°, B: 90°, C: 180°' },
          { label: 'c', task: 'Rød: 45%, Blå: 35%, Grønn: 20%', solution: 'Rød: 162°, Blå: 126°, Grønn: 72°' },
        ],
        solution: 'a) 216°, 108°, 36°. b) 90°, 90°, 180°. c) 162°, 126°, 72°',
        hints: ['Gang prosenten (som desimaltall) med 360°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-5-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Les av stolpediagrammet:

| Måned | Salg |
|-------|------|
| Jan   | 50   |
| Feb   | 65   |
| Mar   | 80   |
| Apr   | 70   |

a) Hvilken måned hadde høyest salg?
b) Hva var gjennomsnittlig salg?
c) Hvor mye økte salget fra januar til mars?`,
      solution: `**Løsning:**

a) Mars hadde høyest salg (80)

b) Gjennomsnitt: $\\frac{50 + 65 + 80 + 70}{4} = \\frac{265}{4} = 66{,}25$

c) Økning: $80 - 50 = 30$`,
    },
    {
      id: '8-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk tabellen: Antall besøkende per dag: Man: 120, Tir: 85, Ons: 95, Tor: 110, Fre: 140',
        subTasks: [
          { label: 'a', task: 'Hvilken dag hadde flest besøkende?', solution: 'Fredag (140)' },
          { label: 'b', task: 'Hvilken dag hadde færrest besøkende?', solution: 'Tirsdag (85)' },
          { label: 'c', task: 'Hva var totalt antall besøkende?', solution: '$120+85+95+110+140 = 550$' },
          { label: 'd', task: 'Hva var gjennomsnittlig besøk per dag?', solution: '$\\frac{550}{5} = 110$' },
        ],
        solution: 'a) Fredag, b) Tirsdag, c) 550, d) 110',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_8_5_3: TextbookChapter = {
  id: '8-5-3',
  courseId: '8',
  chapterNumber: '5.3',
  title: 'Sannsynlighet - introduksjon',
  description: 'Lær grunnleggende begreper i sannsynlighetsregning.',
  estimatedMinutes: 50,
  competenceGoals: [],
  content: [
    {
      id: '8-5-3-intro',
      type: 'text',
      content: `## Hva er sannsynlighet?

**Sannsynlighet** er et mål på hvor sannsynlig det er at noe skjer. Sannsynligheten er alltid et tall mellom 0 og 1.

- **P = 0**: Umulig
- **P = 1**: Sikkert`,
    },
    {
      id: '8-5-3-terning-bilde',
      type: 'image',
      src: '/images/8-klasse/sannsynlighet-terning.svg',
      alt: 'En terning med alle seks sider synlig',
      caption: 'Terningkast er et klassisk eksempel pa sannsynlighetsregning',
    },
    {
      id: '8-5-3-def-1',
      type: 'definition',
      title: 'Grunnleggende begreper',
      content: `- **Utfall**: Et mulig resultat av et forsøk
- **Utfallsrom**: Mengden av alle mulige utfall
- **Hendelse**: En samling av utfall
- **Gunstige utfall**: Utfall som gir den hendelsen vi ser på`,
    },
    {
      id: '8-5-3-def-2',
      type: 'definition',
      title: 'Sannsynlighet ved like sannsynlige utfall',
      content: `Når alle utfall er like sannsynlige:

$$P(A) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$`,
    },
    {
      id: '8-5-3-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Vi kaster en vanlig terning. Finn sannsynligheten for å få:

a) 4
b) Et partall
c) Et tall større enn 4`,
      solution: `**Løsning:**

Utfallsrommet er {1, 2, 3, 4, 5, 6} (6 mulige utfall)

a) Gunstige utfall: {4} (1 utfall)
   $P(4) = \\frac{1}{6}$

b) Partall: {2, 4, 6} (3 utfall)
   $P(\\text{partall}) = \\frac{3}{6} = \\frac{1}{2}$

c) Større enn 4: {5, 6} (2 utfall)
   $P(>4) = \\frac{2}{6} = \\frac{1}{3}$`,
    },
    {
      id: '8-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Du kaster en vanlig terning. Finn sannsynligheten for å få:',
        subTasks: [
          { label: 'a', task: '6', solution: '$P(6) = \\frac{1}{6}$' },
          { label: 'b', task: 'Et oddetall (1, 3 eller 5)', solution: '$P = \\frac{3}{6} = \\frac{1}{2}$' },
          { label: 'c', task: 'Et tall mindre enn 3', solution: '$P = \\frac{2}{6} = \\frac{1}{3}$' },
          { label: 'd', task: 'Et tall fra 1 til 6', solution: '$P = \\frac{6}{6} = 1$' },
        ],
        solution: 'a) 1/6, b) 1/2, c) 1/3, d) 1',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `I en pose er det 3 røde, 5 blå og 2 grønne kuler. Du trekker én kule tilfeldig. Finn sannsynligheten for å trekke:

a) En rød kule
b) En blå kule
c) En kule som ikke er grønn`,
      solution: `**Løsning:**

Totalt antall kuler: $3 + 5 + 2 = 10$

a) $P(\\text{rød}) = \\frac{3}{10}$

b) $P(\\text{blå}) = \\frac{5}{10} = \\frac{1}{2}$

c) Ikke grønn = rød eller blå = $3 + 5 = 8$ kuler
   $P(\\text{ikke grønn}) = \\frac{8}{10} = \\frac{4}{5}$`,
    },
    {
      id: '8-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en pose er det 4 røde, 6 blå og 5 hvite kuler. Finn sannsynligheten for å trekke:',
        subTasks: [
          { label: 'a', task: 'En rød kule', solution: '$P = \\frac{4}{15}$' },
          { label: 'b', task: 'En hvit kule', solution: '$P = \\frac{5}{15} = \\frac{1}{3}$' },
          { label: 'c', task: 'En kule som ikke er blå', solution: '$P = \\frac{9}{15} = \\frac{3}{5}$' },
          { label: 'd', task: 'En rød eller blå kule', solution: '$P = \\frac{10}{15} = \\frac{2}{3}$' },
        ],
        solution: 'a) 4/15, b) 1/3, c) 3/5, d) 2/3',
        hints: ['Totalt antall kuler: 15'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-5-3-text-3',
      type: 'text',
      content: `## Komplementærhendelse

**Komplementet** til en hendelse A er hendelsen "ikke A".

$$P(\\text{ikke } A) = 1 - P(A)$$

Dette er nyttig når det er enklere å regne ut sannsynligheten for det motsatte.`,
    },
    {
      id: '8-5-3-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Sannsynligheten for at det regner i morgen er 0,3. Hva er sannsynligheten for at det ikke regner?`,
      solution: `**Løsning:**

$P(\\text{ikke regn}) = 1 - P(\\text{regn}) = 1 - 0{,}3 = 0{,}7$

Det er 70% sjanse for at det ikke regner.`,
    },
    {
      id: '8-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk komplementregelen',
        subTasks: [
          { label: 'a', task: '$P(A) = 0{,}4$. Finn $P(\\text{ikke } A)$', solution: '$P = 1 - 0{,}4 = 0{,}6$' },
          { label: 'b', task: '$P(\\text{vinne}) = 0{,}15$. Finn $P(\\text{tape})$', solution: '$P = 1 - 0{,}15 = 0{,}85$' },
          { label: 'c', task: '$P(\\text{bestå}) = 0{,}8$. Finn $P(\\text{stryke})$', solution: '$P = 1 - 0{,}8 = 0{,}2$' },
        ],
        solution: 'a) 0,6. b) 0,85. c) 0,2',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-5-3-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Du kaster en mynt to ganger. List opp utfallsrommet og finn sannsynligheten for å få:

a) To krone
b) Minst én mynt`,
      solution: `**Løsning:**

Utfallsrom: {KK, KM, MK, MM} (4 utfall)

a) To krone: {KK} (1 utfall)
   $P(\\text{KK}) = \\frac{1}{4}$

b) Minst én mynt: {KM, MK, MM} (3 utfall)
   $P(\\text{minst én M}) = \\frac{3}{4}$

   (Eller: $P = 1 - P(\\text{KK}) = 1 - \\frac{1}{4} = \\frac{3}{4}$)`,
    },
    {
      id: '8-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du kaster en mynt tre ganger. Utfallsrom: {KKK, KKM, KMK, KMM, MKK, MKM, MMK, MMM}. Finn sannsynligheten for:',
        subTasks: [
          { label: 'a', task: 'Tre krone', solution: '$P = \\frac{1}{8}$' },
          { label: 'b', task: 'Nøyaktig én mynt', solution: 'KKM, KMK, MKK: $P = \\frac{3}{8}$' },
          { label: 'c', task: 'Minst to mynt', solution: 'KMM, MKM, MMK, MMM: $P = \\frac{4}{8} = \\frac{1}{2}$' },
          { label: 'd', task: 'Ingen mynt', solution: 'KKK: $P = \\frac{1}{8}$' },
        ],
        solution: 'a) 1/8, b) 3/8, c) 1/2, d) 1/8',
        hints: ['Totalt 8 mulige utfall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Eksporter alle kapitler som et objekt
export const CHAPTERS_8KLASSE: Record<string, TextbookChapter> = {
  '8-1-1': CHAPTER_8_1_1,
  '8-1-2': CHAPTER_8_1_2,
  '8-1-3': CHAPTER_8_1_3,
  '8-1-4': CHAPTER_8_1_4,
  '8-1-5': CHAPTER_8_1_5,
  '8-2-1': CHAPTER_8_2_1,
  '8-2-2': CHAPTER_8_2_2,
  '8-2-3': CHAPTER_8_2_3,
  '8-3-1': CHAPTER_8_3_1,
  '8-3-2': CHAPTER_8_3_2,
  '8-3-3': CHAPTER_8_3_3,
  '8-3-4': CHAPTER_8_3_4,
  '8-3-5': CHAPTER_8_3_5,
  '8-3-6': CHAPTER_8_3_6,
  '8-4-1': CHAPTER_8_4_1,
  '8-4-2': CHAPTER_8_4_2,
  '8-4-3': CHAPTER_8_4_3,
  '8-5-1': CHAPTER_8_5_1,
  '8-5-2': CHAPTER_8_5_2,
  '8-5-3': CHAPTER_8_5_3,
};
