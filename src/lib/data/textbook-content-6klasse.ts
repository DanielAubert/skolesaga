/**
 * Tekstbok kapitler for Matematikk 6. klasse
 * Innhold tilpasset barneskoleelever på 6. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: TALL OG BRØKREGNING
// ============================================================================

export const CHAPTER_6_1_1: TextbookChapter = {
  id: '6-1-1',
  courseId: '6',
  chapterNumber: '1.1',
  title: 'Utviding og forkorting av brøk',
  description: 'Finne fellesnevner og gjøre brøker like ved utviding og forkorting.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'beskrive og bruke plassverdisystemet for desimaltal, rekne med positive og negative heile tal, desimaltal, brøkar og prosent',
  ],
  content: [
    {
      id: '6-1-1-intro',
      type: 'text',
      content: `## Like brøker

To brøker er **like** når de har samme verdi, selv om de ser forskjellige ut.

$$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8}$$

Alle disse brøkene er like fordi de alle representerer "en halv".`,
    },
    {
      id: '6-1-1-utviding',
      type: 'definition',
      title: 'Utviding av brøk',
      content: `Å **utvide** en brøk betyr å gange både teller og nevner med samme tall.

$$\\frac{2}{3} = \\frac{2 \\cdot 4}{3 \\cdot 4} = \\frac{8}{12}$$

**Verdien av brøken endres ikke** fordi vi ganger med $\\frac{4}{4} = 1$.`,
    },
    {
      id: '6-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Utvide brøker',
      problem: `Utvid brøken $\\frac{3}{5}$ slik at nevneren blir 20.`,
      solution: `**Løsning:**
Vi trenger å gange nevneren 5 med et tall for å få 20:
$5 \\cdot 4 = 20$

Da må vi gange telleren med samme tall:
$$\\frac{3}{5} = \\frac{3 \\cdot 4}{5 \\cdot 4} = \\frac{12}{20}$$

**Svar:** $\\frac{3}{5} = \\frac{12}{20}$`,
    },
    {
      id: '6-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Utvid brøkene til den angitte nevneren',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2}$ til nevner 8', solution: '$\\frac{4}{8}$' },
          { label: 'b', task: '$\\frac{2}{3}$ til nevner 12', solution: '$\\frac{8}{12}$' },
          { label: 'c', task: '$\\frac{3}{4}$ til nevner 20', solution: '$\\frac{15}{20}$' },
          { label: 'd', task: '$\\frac{5}{6}$ til nevner 18', solution: '$\\frac{15}{18}$' },
        ],
        solution: 'a) 4/8  b) 8/12  c) 15/20  d) 15/18',
        hints: ['Finn ut hva du må gange nevneren med, og gang telleren med samme tall'],
      },
    },
    {
      id: '6-1-1-forkorting',
      type: 'definition',
      title: 'Forkorting av brøk',
      content: `Å **forkorte** en brøk betyr å dele både teller og nevner med samme tall.

$$\\frac{8}{12} = \\frac{8 \\div 4}{12 \\div 4} = \\frac{2}{3}$$

En brøk er **maksimalt forkortet** når teller og nevner ikke har noen felles faktorer (bortsett fra 1).`,
    },
    {
      id: '6-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Forkorte brøker',
      problem: `Forkort brøken $\\frac{18}{24}$ maksimalt.`,
      solution: `**Løsning:**
Finn felles faktorer for 18 og 24:
- Begge kan deles på 2: $\\frac{18}{24} = \\frac{9}{12}$
- Begge kan deles på 3: $\\frac{9}{12} = \\frac{3}{4}$

Eller direkte: Del på største felles faktor (6):
$$\\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$$

**Svar:** $\\frac{18}{24} = \\frac{3}{4}$`,
    },
    {
      id: '6-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '6-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forkort brøkene maksimalt',
        subTasks: [
          { label: 'a', task: '$\\frac{6}{8}$', solution: '$\\frac{3}{4}$' },
          { label: 'b', task: '$\\frac{15}{20}$', solution: '$\\frac{3}{4}$' },
          { label: 'c', task: '$\\frac{12}{18}$', solution: '$\\frac{2}{3}$' },
          { label: 'd', task: '$\\frac{24}{36}$', solution: '$\\frac{2}{3}$' },
        ],
        solution: 'a) 3/4  b) 3/4  c) 2/3  d) 2/3',
        hints: ['Finn den største felles faktoren for teller og nevner'],
      },
    },
    {
      id: '6-1-1-fellesnevner',
      type: 'definition',
      title: 'Fellesnevner',
      content: `**Fellesnevner** er en nevner som passer for flere brøker.

For å sammenligne eller legge sammen brøker, må de ha **lik nevner**.

**Eksempel:** For $\\frac{1}{3}$ og $\\frac{1}{4}$ er 12 en fellesnevner:
$$\\frac{1}{3} = \\frac{4}{12} \\quad \\text{og} \\quad \\frac{1}{4} = \\frac{3}{12}$$`,
    },
    {
      id: '6-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '6-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn fellesnevner og skriv brøkene med lik nevner',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2}$ og $\\frac{1}{3}$', solution: '$\\frac{3}{6}$ og $\\frac{2}{6}$' },
          { label: 'b', task: '$\\frac{2}{5}$ og $\\frac{3}{10}$', solution: '$\\frac{4}{10}$ og $\\frac{3}{10}$' },
          { label: 'c', task: '$\\frac{3}{4}$ og $\\frac{5}{6}$', solution: '$\\frac{9}{12}$ og $\\frac{10}{12}$' },
        ],
        solution: 'a) 3/6 og 2/6  b) 4/10 og 3/10  c) 9/12 og 10/12',
        hints: ['Fellesnevner er ofte produktet av nevnerne, eller et mindre tall de begge går opp i'],
      },
    },
  ],
};

export const CHAPTER_6_1_2: TextbookChapter = {
  id: '6-1-2',
  courseId: '6',
  chapterNumber: '1.2',
  title: 'Addisjon og subtraksjon av brøk',
  description: 'Legge sammen og trekke fra brøker med lik og ulik nevner.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'beskrive og bruke plassverdisystemet for desimaltal, rekne med positive og negative heile tal, desimaltal, brøkar og prosent',
  ],
  content: [
    {
      id: '6-1-2-intro',
      type: 'text',
      content: `## Regning med brøker

Når vi legger sammen eller trekker fra brøker, må vi vite om de har **lik** eller **ulik nevner**.`,
    },
    {
      id: '6-1-2-lik-nevner',
      type: 'definition',
      title: 'Lik nevner',
      content: `Når brøkene har **lik nevner**, legger vi sammen tellerne:

$$\\frac{2}{5} + \\frac{1}{5} = \\frac{2 + 1}{5} = \\frac{3}{5}$$

$$\\frac{5}{8} - \\frac{3}{8} = \\frac{5 - 3}{8} = \\frac{2}{8} = \\frac{1}{4}$$

*Nevneren forblir den samme!*`,
    },
    {
      id: '6-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut (lik nevner)',
        subTasks: [
          { label: 'a', task: '$\\frac{2}{7} + \\frac{3}{7}$', solution: '$\\frac{5}{7}$' },
          { label: 'b', task: '$\\frac{5}{9} + \\frac{2}{9}$', solution: '$\\frac{7}{9}$' },
          { label: 'c', task: '$\\frac{7}{10} - \\frac{3}{10}$', solution: '$\\frac{4}{10} = \\frac{2}{5}$' },
          { label: 'd', task: '$\\frac{11}{12} - \\frac{5}{12}$', solution: '$\\frac{6}{12} = \\frac{1}{2}$' },
        ],
        solution: 'a) 5/7  b) 7/9  c) 2/5  d) 1/2',
        hints: ['Legg sammen/trekk fra tellerne. Nevneren er uendret.'],
      },
    },
    {
      id: '6-1-2-ulik-nevner',
      type: 'text',
      content: `## Ulik nevner

Når brøkene har **ulik nevner**, må vi først finne **fellesnevner**:

$$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$$`,
    },
    {
      id: '6-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Addisjon med ulik nevner',
      problem: `Regn ut $\\frac{2}{3} + \\frac{3}{4}$`,
      solution: `**Løsning:**
1. Finn fellesnevner: $3 \\cdot 4 = 12$
2. Utvid begge brøkene:
   - $\\frac{2}{3} = \\frac{2 \\cdot 4}{3 \\cdot 4} = \\frac{8}{12}$
   - $\\frac{3}{4} = \\frac{3 \\cdot 3}{4 \\cdot 3} = \\frac{9}{12}$
3. Legg sammen:
   $$\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12} = 1\\frac{5}{12}$$

**Svar:** $1\\frac{5}{12}$`,
    },
    {
      id: '6-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '6-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut (ulik nevner)',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2} + \\frac{1}{4}$', solution: '$\\frac{3}{4}$' },
          { label: 'b', task: '$\\frac{2}{3} + \\frac{1}{6}$', solution: '$\\frac{5}{6}$' },
          { label: 'c', task: '$\\frac{3}{4} - \\frac{1}{2}$', solution: '$\\frac{1}{4}$' },
          { label: 'd', task: '$\\frac{5}{6} - \\frac{2}{3}$', solution: '$\\frac{1}{6}$' },
        ],
        solution: 'a) 3/4  b) 5/6  c) 1/4  d) 1/6',
        hints: ['Finn fellesnevner først, utvid brøkene, så regn ut'],
      },
    },
    {
      id: '6-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '6-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut og forkort svaret',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{3} + \\frac{1}{4} + \\frac{1}{6}$', solution: '$\\frac{3}{4}$' },
          { label: 'b', task: '$\\frac{5}{8} - \\frac{1}{4} + \\frac{1}{2}$', solution: '$\\frac{7}{8}$' },
        ],
        solution: 'a) 3/4  b) 7/8',
        hints: ['Finn en fellesnevner for alle brøkene'],
      },
    },
  ],
};

export const CHAPTER_6_1_3: TextbookChapter = {
  id: '6-1-3',
  courseId: '6',
  chapterNumber: '1.3',
  title: 'Brøk, desimaltall og prosent',
  description: 'Gjøre om mellom brøk, desimaltall og prosent.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'beskrive og bruke plassverdisystemet for desimaltal, rekne med positive og negative heile tal, desimaltal, brøkar og prosent',
  ],
  content: [
    {
      id: '6-1-3-intro',
      type: 'text',
      content: `## Tre måter å skrive det samme

Brøk, desimaltall og prosent er tre måter å uttrykke samme verdi:

$$\\frac{1}{2} = 0,5 = 50\\%$$

$$\\frac{3}{4} = 0,75 = 75\\%$$`,
    },
    {
      id: '6-1-3-omregning',
      type: 'definition',
      title: 'Omregning',
      content: `**Brøk → Desimaltall:** Del telleren på nevneren
$$\\frac{3}{4} = 3 \\div 4 = 0,75$$

**Desimaltall → Prosent:** Gang med 100
$$0,75 \\cdot 100 = 75\\%$$

**Prosent → Brøk:** Skriv over 100 og forkort
$$75\\% = \\frac{75}{100} = \\frac{3}{4}$$`,
    },
    {
      id: '6-1-3-vanlige',
      type: 'text',
      content: `## Vanlige verdier å huske

| Brøk | Desimaltall | Prosent |
|------|-------------|---------|
| $\\frac{1}{2}$ | 0,5 | 50% |
| $\\frac{1}{4}$ | 0,25 | 25% |
| $\\frac{3}{4}$ | 0,75 | 75% |
| $\\frac{1}{5}$ | 0,2 | 20% |
| $\\frac{1}{10}$ | 0,1 | 10% |`,
    },
    {
      id: '6-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør om til desimaltall',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2}$', solution: '$0,5$' },
          { label: 'b', task: '$\\frac{3}{10}$', solution: '$0,3$' },
          { label: 'c', task: '$\\frac{7}{20}$', solution: '$0,35$' },
          { label: 'd', task: '$40\\%$', solution: '$0,4$' },
        ],
        solution: 'a) 0,5  b) 0,3  c) 0,35  d) 0,4',
        hints: ['Del telleren på nevneren. For prosent: del på 100.'],
      },
    },
    {
      id: '6-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '6-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om til prosent',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{5}$', solution: '$60\\%$' },
          { label: 'b', task: '$\\frac{7}{10}$', solution: '$70\\%$' },
          { label: 'c', task: '$0,45$', solution: '$45\\%$' },
          { label: 'd', task: '$0,08$', solution: '$8\\%$' },
        ],
        solution: 'a) 60%  b) 70%  c) 45%  d) 8%',
        hints: ['Gjør først om til desimaltall, så gang med 100'],
      },
    },
    {
      id: '6-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '6-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om til brøk og forkort',
        subTasks: [
          { label: 'a', task: '$0,6$', solution: '$\\frac{3}{5}$' },
          { label: 'b', task: '$0,25$', solution: '$\\frac{1}{4}$' },
          { label: 'c', task: '$80\\%$', solution: '$\\frac{4}{5}$' },
          { label: 'd', task: '$35\\%$', solution: '$\\frac{7}{20}$' },
        ],
        solution: 'a) 3/5  b) 1/4  c) 4/5  d) 7/20',
        hints: ['Skriv desimaltall som brøk over 10 eller 100, prosent over 100, og forkort'],
      },
    },
  ],
};

export const CHAPTER_6_1_4: TextbookChapter = {
  id: '6-1-4',
  courseId: '6',
  chapterNumber: '1.4',
  title: 'Prosentregning - introduksjon',
  description: 'Finne prosent av et tall og forstå prosentbegrepet.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'beskrive og bruke plassverdisystemet for desimaltal, rekne med positive og negative heile tal, desimaltal, brøkar og prosent',
  ],
  content: [
    {
      id: '6-1-4-intro',
      type: 'text',
      content: `## Hva betyr prosent?

**Prosent** betyr "per hundre" (pro cent = per hundre).

$50\\%$ betyr 50 av 100, altså halvparten.
$25\\%$ betyr 25 av 100, altså en firedel.`,
    },
    {
      id: '6-1-4-finne-prosent',
      type: 'definition',
      title: 'Finne prosent av et tall',
      content: `For å finne **prosent av** et tall:

1. Gjør om prosenten til desimaltall (del på 100)
2. Gang med tallet

**Eksempel:** $25\\%$ av 80
$$25\\% \\text{ av } 80 = 0,25 \\cdot 80 = 20$$`,
    },
    {
      id: '6-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Prosent av',
      problem: `Finn 30% av 150 kr.`,
      solution: `**Løsning:**
$30\\%$ av $150 = 0,30 \\cdot 150 = 45$

**Svar:** 30% av 150 kr er **45 kr**.`,
    },
    {
      id: '6-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn prosent av tallet',
        subTasks: [
          { label: 'a', task: '$50\\%$ av 80', solution: '$40$' },
          { label: 'b', task: '$25\\%$ av 120', solution: '$30$' },
          { label: 'c', task: '$10\\%$ av 250', solution: '$25$' },
          { label: 'd', task: '$20\\%$ av 45', solution: '$9$' },
        ],
        solution: 'a) 40  b) 30  c) 25  d) 9',
        hints: ['Gjør om prosent til desimaltall og gang'],
      },
    },
    {
      id: '6-1-4-praktisk',
      type: 'text',
      content: `## Prosent i hverdagen

Prosent brukes mange steder:
- **Rabatter:** "20% avslag"
- **Skatt:** "25% moms"
- **Renter:** "3% rente"
- **Karakterer:** "85% riktig på prøven"`,
    },
    {
      id: '6-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '6-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver',
        subTasks: [
          { label: 'a', task: 'En jakke koster 400 kr. Du får 25% rabatt. Hvor mye sparer du?', solution: '100 kr' },
          { label: 'b', task: 'På en prøve med 40 oppgaver fikk du 80% riktig. Hvor mange var riktige?', solution: '32 oppgaver' },
          { label: 'c', task: 'I en klasse med 25 elever er 60% jenter. Hvor mange jenter er det?', solution: '15 jenter' },
        ],
        solution: 'a) 100 kr  b) 32 oppgaver  c) 15 jenter',
        hints: ['Finn prosent av det oppgitte tallet'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 2: FORHOLD OG PROPORSJONALITET
// ============================================================================

export const CHAPTER_6_2_1: TextbookChapter = {
  id: '6-2-1',
  courseId: '6',
  chapterNumber: '2.1',
  title: 'Forhold',
  description: 'Forstå og beskrive forholdet mellom to tall.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    {
      id: '6-2-1-intro',
      type: 'text',
      content: `## Hva er et forhold?

Et **forhold** sammenligner to størrelser.

Hvis det er 3 gutter og 5 jenter i en gruppe, er forholdet mellom gutter og jenter **3 : 5** (leses "tre til fem").`,
    },
    {
      id: '6-2-1-def',
      type: 'definition',
      title: 'Forhold',
      content: `Forholdet $a : b$ forteller hvordan to størrelser står i forhold til hverandre.

**Eksempel:** Blandingsforhold 1 : 4 for saft og vann betyr:
- 1 del saft
- 4 deler vann
- Totalt 5 deler`,
    },
    {
      id: '6-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Forstå forhold',
      problem: `I en oppskrift blandes mel og sukker i forholdet 3 : 1. Hvor mye sukker trengs til 150 g mel?`,
      solution: `**Løsning:**
Forholdet 3 : 1 betyr at for hver 3 deler mel, bruker vi 1 del sukker.

$150 \\text{ g mel} \\div 3 = 50 \\text{ g per del}$

Sukker: $1 \\cdot 50 = 50$ g

**Svar:** 50 g sukker`,
    },
    {
      id: '6-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv forholdet',
        subTasks: [
          { label: 'a', task: '4 epler og 6 pærer', solution: '$4 : 6$ eller $2 : 3$' },
          { label: 'b', task: '10 gutter og 15 jenter', solution: '$10 : 15$ eller $2 : 3$' },
          { label: 'c', task: '2 lærere og 30 elever', solution: '$2 : 30$ eller $1 : 15$' },
        ],
        solution: 'a) 2:3  b) 2:3  c) 1:15',
        hints: ['Forhold kan forkortes akkurat som brøker'],
      },
    },
    {
      id: '6-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '6-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene',
        subTasks: [
          { label: 'a', task: 'Saft blandes med vann i forholdet 1 : 5. Hvor mye vann trengs til 2 dl saft?', solution: '10 dl vann' },
          { label: 'b', task: 'En kake har mel og sukker i forholdet 4 : 1. Hvor mye mel trengs til 50 g sukker?', solution: '200 g mel' },
        ],
        solution: 'a) 10 dl vann  b) 200 g mel',
        hints: ['Bruk forholdet til å finne ut hvor mye én del er'],
      },
    },
  ],
};

export const CHAPTER_6_2_2: TextbookChapter = {
  id: '6-2-2',
  courseId: '6',
  chapterNumber: '2.2',
  title: 'Proporsjonalitet',
  description: 'Forstå direkte proporsjonale størrelser og sammenhenger.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    {
      id: '6-2-2-intro',
      type: 'text',
      content: `## Proporsjonale størrelser

To størrelser er **proporsjonale** når de øker eller minker i samme takt.

Hvis du kjøper dobbelt så mange epler, koster det dobbelt så mye.`,
    },
    {
      id: '6-2-2-def',
      type: 'definition',
      title: 'Direkte proporsjonalitet',
      content: `Ved **direkte proporsjonalitet** gjelder:
- Dobler den ene → dobler den andre
- Treer den ene → treer den andre

**Kjennetegn:** Forholdet mellom størrelsene er konstant.`,
    },
    {
      id: '6-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Proporsjonale størrelser',
      problem: `3 bøker koster 150 kr. Hvor mye koster 5 bøker?`,
      solution: `**Løsning:**
Pris per bok: $150 \\div 3 = 50$ kr

5 bøker: $5 \\cdot 50 = 250$ kr

**Svar:** 5 bøker koster 250 kr.`,
    },
    {
      id: '6-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene',
        subTasks: [
          { label: 'a', task: '4 kg epler koster 80 kr. Hva koster 7 kg?', solution: '140 kr' },
          { label: 'b', task: 'En bil bruker 6 liter bensin på 100 km. Hvor mye bruker den på 250 km?', solution: '15 liter' },
          { label: 'c', task: '8 arbeidere bruker 4 dager. Hvor lang tid bruker 16 arbeidere?', solution: '2 dager' },
        ],
        solution: 'a) 140 kr  b) 15 liter  c) 2 dager',
        hints: ['Finn verdien for én enhet først'],
      },
    },
  ],
};

export const CHAPTER_6_2_3: TextbookChapter = {
  id: '6-2-3',
  courseId: '6',
  chapterNumber: '2.3',
  title: 'Målestokk',
  description: 'Bruke målestokk på kart, tegninger og modeller.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'bruke målestokk til å berekne avstandar og lage enkle kart og arbeidsteikningar',
  ],
  content: [
    {
      id: '6-2-3-intro',
      type: 'text',
      content: `## Hva er målestokk?

**Målestokk** viser forholdet mellom størrelsen på en tegning/modell og virkeligheten.

Målestokk **1 : 100** betyr at 1 cm på tegningen tilsvarer 100 cm (1 m) i virkeligheten.`,
    },
    {
      id: '6-2-3-def',
      type: 'definition',
      title: 'Målestokk',
      content: `**Målestokk 1 : n** betyr:
- 1 enhet på tegningen = n enheter i virkeligheten

**Forminskning:** 1 : 1000 (kart)
**Forstørring:** 10 : 1 (mikroskopbilder)`,
    },
    {
      id: '6-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Bruke målestokk',
      problem: `På et kart med målestokk 1 : 50 000 er avstanden mellom to byer 6 cm. Hvor langt er det i virkeligheten?`,
      solution: `**Løsning:**
1 cm på kartet = 50 000 cm i virkeligheten

$6 \\text{ cm} \\cdot 50\\,000 = 300\\,000 \\text{ cm} = 3\\,000 \\text{ m} = 3 \\text{ km}$

**Svar:** Avstanden er 3 km.`,
    },
    {
      id: '6-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut virkelig lengde',
        subTasks: [
          { label: 'a', task: 'Målestokk 1 : 100, tegning: 5 cm', solution: '500 cm = 5 m' },
          { label: 'b', task: 'Målestokk 1 : 200, tegning: 8 cm', solution: '1600 cm = 16 m' },
          { label: 'c', task: 'Målestokk 1 : 25 000, kart: 4 cm', solution: '100 000 cm = 1 km' },
        ],
        solution: 'a) 5 m  b) 16 m  c) 1 km',
        hints: ['Gang lengden på tegningen med målestokkens tall'],
      },
    },
    {
      id: '6-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '6-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn lengden på tegningen',
        subTasks: [
          { label: 'a', task: 'Målestokk 1 : 50, virkelig lengde: 4 m', solution: '8 cm' },
          { label: 'b', task: 'Målestokk 1 : 1000, virkelig lengde: 50 m', solution: '5 cm' },
        ],
        solution: 'a) 8 cm  b) 5 cm',
        hints: ['Del den virkelige lengden på målestokkens tall'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3: MÅLING OG GEOMETRI
// ============================================================================

export const CHAPTER_6_3_1: TextbookChapter = {
  id: '6-3-1',
  courseId: '6',
  chapterNumber: '3.1',
  title: 'Areal av trekanter',
  description: 'Beregne areal av trekanter ved hjelp av grunnlinje og høyde.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utforske og argumentere for formlar for areal og omkrets av trekanter og firkantar',
  ],
  content: [
    {
      id: '6-3-1-intro',
      type: 'text',
      content: `## Areal av trekant

En trekant er halvparten av et rektangel (eller parallellogram).

Derfor er arealet av en trekant halvparten av grunnlinje ganger høyde.`,
    },
    {
      id: '6-3-1-formel',
      type: 'definition',
      title: 'Arealformel for trekant',
      content: `$$A = \\frac{g \\cdot h}{2}$$

der:
- $g$ = grunnlinje
- $h$ = høyde (vinkelrett på grunnlinjen)`,
    },
    {
      id: '6-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Areal av trekant',
      problem: `Finn arealet av en trekant med grunnlinje 8 cm og høyde 5 cm.`,
      solution: `**Løsning:**
$$A = \\frac{g \\cdot h}{2} = \\frac{8 \\cdot 5}{2} = \\frac{40}{2} = 20 \\text{ cm}^2$$

**Svar:** Arealet er 20 cm².`,
    },
    {
      id: '6-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av trekantene',
        subTasks: [
          { label: 'a', task: 'Grunnlinje 6 cm, høyde 4 cm', solution: '12 cm²' },
          { label: 'b', task: 'Grunnlinje 10 cm, høyde 7 cm', solution: '35 cm²' },
          { label: 'c', task: 'Grunnlinje 12 m, høyde 5 m', solution: '30 m²' },
        ],
        solution: 'a) 12 cm²  b) 35 cm²  c) 30 m²',
        hints: ['A = (g · h) / 2'],
      },
    },
    {
      id: '6-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '6-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den ukjente siden',
        subTasks: [
          { label: 'a', task: 'Arealet er 24 cm² og høyden er 6 cm. Finn grunnlinjen.', solution: '8 cm' },
          { label: 'b', task: 'Arealet er 35 m² og grunnlinjen er 10 m. Finn høyden.', solution: '7 m' },
        ],
        solution: 'a) 8 cm  b) 7 m',
        hints: ['Løs formelen for den ukjente: g = 2A/h'],
      },
    },
  ],
};

export const CHAPTER_6_3_2: TextbookChapter = {
  id: '6-3-2',
  courseId: '6',
  chapterNumber: '3.2',
  title: 'Volum - introduksjon',
  description: 'Forstå volumbegrepet og beregne volum av prismer.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum',
  ],
  content: [
    {
      id: '6-3-2-intro',
      type: 'text',
      content: `## Hva er volum?

**Volum** er hvor mye plass en gjenstand tar opp - hvor mange kubikker som får plass inni.

Vi måler volum i **kubikkenheter**: cm³, dm³ (liter), m³.`,
    },
    {
      id: '6-3-2-formel',
      type: 'definition',
      title: 'Volum av rett prisme',
      content: `$$V = G \\cdot h$$

der:
- $G$ = grunnflatearealet
- $h$ = høyde

For en **boks** (rektangulært prisme):
$$V = l \\cdot b \\cdot h$$`,
    },
    {
      id: '6-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Volum av boks',
      problem: `En boks er 4 cm lang, 3 cm bred og 5 cm høy. Finn volumet.`,
      solution: `**Løsning:**
$$V = l \\cdot b \\cdot h = 4 \\cdot 3 \\cdot 5 = 60 \\text{ cm}^3$$

**Svar:** Volumet er 60 cm³.`,
    },
    {
      id: '6-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn volumet',
        subTasks: [
          { label: 'a', task: 'Boks: 5 cm × 4 cm × 3 cm', solution: '60 cm³' },
          { label: 'b', task: 'Terning med side 4 cm', solution: '64 cm³' },
          { label: 'c', task: 'Boks: 2 m × 3 m × 1,5 m', solution: '9 m³' },
        ],
        solution: 'a) 60 cm³  b) 64 cm³  c) 9 m³',
        hints: ['V = lengde × bredde × høyde'],
      },
    },
    {
      id: '6-3-2-enheter',
      type: 'definition',
      title: 'Omregning av volumenheter',
      content: `$$1 \\text{ dm}^3 = 1 \\text{ liter}$$
$$1 \\text{ m}^3 = 1000 \\text{ dm}^3 = 1000 \\text{ liter}$$
$$1 \\text{ dm}^3 = 1000 \\text{ cm}^3$$`,
    },
    {
      id: '6-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '6-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om og regn ut',
        subTasks: [
          { label: 'a', task: 'En tank er 80 cm × 50 cm × 40 cm. Hvor mange liter rommes den?', solution: '160 liter' },
          { label: 'b', task: 'Et svømmebasseng er 25 m × 10 m × 2 m. Hvor mange liter vann rommes det?', solution: '500 000 liter' },
        ],
        solution: 'a) 160 liter  b) 500 000 liter',
        hints: ['Regn ut i cm³, så del på 1000 for å få liter. Eller i dm³ direkte.'],
      },
    },
  ],
};

export const CHAPTER_6_3_3: TextbookChapter = {
  id: '6-3-3',
  courseId: '6',
  chapterNumber: '3.3',
  title: 'Overflate av prismer',
  description: 'Beregne overflate av prismer ved å brette ut til nett.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utforske og argumentere for formlar for areal og omkrets av trekanter og firkantar',
  ],
  content: [
    {
      id: '6-3-3-intro',
      type: 'text',
      content: `## Hva er overflate?

**Overflaten** er det totale arealet av alle sidene på en gjenstand.

For å finne overflaten kan vi "brette ut" gjenstanden til et **nett**.`,
    },
    {
      id: '6-3-3-formel',
      type: 'definition',
      title: 'Overflate av boks',
      content: `En boks har 6 sider: 3 par med like store rektangler.

$$O = 2lb + 2lh + 2bh$$

der $l$ = lengde, $b$ = bredde, $h$ = høyde`,
    },
    {
      id: '6-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Overflate av boks',
      problem: `Finn overflaten av en boks som er 4 cm × 3 cm × 2 cm.`,
      solution: `**Løsning:**
Bunn og topp: $2 \\cdot (4 \\cdot 3) = 24$ cm²
Forsiden og baksiden: $2 \\cdot (4 \\cdot 2) = 16$ cm²
Sidene: $2 \\cdot (3 \\cdot 2) = 12$ cm²

**Totalt:** $24 + 16 + 12 = 52$ cm²`,
    },
    {
      id: '6-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn overflaten',
        subTasks: [
          { label: 'a', task: 'Boks: 5 cm × 4 cm × 3 cm', solution: '94 cm²' },
          { label: 'b', task: 'Terning med side 6 cm', solution: '216 cm²' },
        ],
        solution: 'a) 94 cm²  b) 216 cm²',
        hints: ['Finn arealet av hver side og legg sammen'],
      },
    },
  ],
};

export const CHAPTER_6_3_4: TextbookChapter = {
  id: '6-3-4',
  courseId: '6',
  chapterNumber: '3.4',
  title: 'Sirkelen',
  description: 'Lære om radius, diameter og omkrets, og introduksjon til pi.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'utforske og argumentere for formlar for areal og omkrets',
  ],
  content: [
    {
      id: '6-3-4-intro',
      type: 'text',
      content: `## Sirkelens deler

En **sirkel** er alle punkter som har lik avstand fra et senter.

- **Radius (r):** Avstand fra sentrum til kanten
- **Diameter (d):** Avstand tvers over sirkelen = 2r`,
    },
    {
      id: '6-3-4-pi',
      type: 'definition',
      title: 'Pi (π)',
      content: `**Pi** er forholdet mellom omkretsen og diameteren i alle sirkler:

$$\\pi = \\frac{\\text{omkrets}}{\\text{diameter}} \\approx 3,14$$

**Omkrets:** $O = \\pi \\cdot d = 2\\pi r$`,
    },
    {
      id: '6-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Omkrets av sirkel',
      problem: `Finn omkretsen av en sirkel med diameter 10 cm. Bruk π ≈ 3,14.`,
      solution: `**Løsning:**
$$O = \\pi \\cdot d = 3,14 \\cdot 10 = 31,4 \\text{ cm}$$

**Svar:** Omkretsen er ca. 31,4 cm.`,
    },
    {
      id: '6-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn omkretsen (bruk π ≈ 3,14)',
        subTasks: [
          { label: 'a', task: 'Diameter 8 cm', solution: '25,12 cm' },
          { label: 'b', task: 'Radius 5 cm', solution: '31,4 cm' },
          { label: 'c', task: 'Diameter 14 m', solution: '43,96 m' },
        ],
        solution: 'a) 25,12 cm  b) 31,4 cm  c) 43,96 m',
        hints: ['O = π · d eller O = 2πr'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 4: ALGEBRA - INTRODUKSJON
// ============================================================================

export const CHAPTER_6_4_1: TextbookChapter = {
  id: '6-4-1',
  courseId: '6',
  chapterNumber: '4.1',
  title: 'Variabler og uttrykk',
  description: 'Bruke bokstaver for tall og sette opp enkle uttrykk.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    {
      id: '6-4-1-intro',
      type: 'text',
      content: `## Hva er en variabel?

En **variabel** er en bokstav som står for et tall vi ikke kjenner ennå.

I stedet for å si "et ukjent tall", kan vi skrive **x** eller **n**.`,
    },
    {
      id: '6-4-1-def',
      type: 'definition',
      title: 'Variabel og uttrykk',
      content: `- **Variabel:** En bokstav som representerer et tall (f.eks. x, n, a)
- **Uttrykk:** En kombinasjon av tall og variabler med regneoperasjoner

**Eksempler på uttrykk:**
- $2x + 3$
- $n - 5$
- $4a$`,
    },
    {
      id: '6-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Sette inn verdier',
      problem: `Finn verdien av uttrykket $3x + 2$ når $x = 4$.`,
      solution: `**Løsning:**
Sett inn $x = 4$:
$$3 \\cdot 4 + 2 = 12 + 2 = 14$$

**Svar:** Verdien er 14.`,
    },
    {
      id: '6-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn verdien av uttrykket',
        subTasks: [
          { label: 'a', task: '$x + 5$ når $x = 3$', solution: '8' },
          { label: 'b', task: '$2n$ når $n = 6$', solution: '12' },
          { label: 'c', task: '$4a - 1$ når $a = 5$', solution: '19' },
          { label: 'd', task: '$10 - x$ når $x = 7$', solution: '3' },
        ],
        solution: 'a) 8  b) 12  c) 19  d) 3',
        hints: ['Sett inn verdien for variabelen og regn ut'],
      },
    },
    {
      id: '6-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '6-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et uttrykk for',
        subTasks: [
          { label: 'a', task: 'Et tall pluss 7', solution: '$x + 7$ eller $n + 7$' },
          { label: 'b', task: 'Det dobbelte av et tall', solution: '$2x$ eller $2n$' },
          { label: 'c', task: 'Et tall minus 3, ganget med 2', solution: '$2(x - 3)$' },
        ],
        solution: 'a) x + 7  b) 2x  c) 2(x - 3)',
        hints: ['La x være "et tall" og skriv det matematisk'],
      },
    },
  ],
};

export const CHAPTER_6_4_2: TextbookChapter = {
  id: '6-4-2',
  courseId: '6',
  chapterNumber: '4.2',
  title: 'Enkle likninger',
  description: 'Finne ukjent tall i enkle likninger.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    {
      id: '6-4-2-intro',
      type: 'text',
      content: `## Hva er en likning?

En **likning** er et matematisk utsagn med et likhetstegn der noe er ukjent.

$$x + 5 = 12$$

Å **løse** likningen betyr å finne verdien av x som gjør likningen sann.`,
    },
    {
      id: '6-4-2-def',
      type: 'definition',
      title: 'Løse likninger',
      content: `For å løse en likning gjør vi **samme operasjon på begge sider**:

$x + 5 = 12$
$x + 5 - 5 = 12 - 5$ (trekk fra 5)
$x = 7$

**Kontroll:** $7 + 5 = 12$ ✓`,
    },
    {
      id: '6-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Løse likning',
      problem: `Løs likningen $3x = 15$`,
      solution: `**Løsning:**
$3x = 15$
$x = 15 \\div 3$ (del på 3)
$x = 5$

**Kontroll:** $3 \\cdot 5 = 15$ ✓`,
    },
    {
      id: '6-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$x + 8 = 15$', solution: '$x = 7$' },
          { label: 'b', task: '$x - 6 = 10$', solution: '$x = 16$' },
          { label: 'c', task: '$4x = 28$', solution: '$x = 7$' },
          { label: 'd', task: '$\\frac{x}{5} = 6$', solution: '$x = 30$' },
        ],
        solution: 'a) x = 7  b) x = 16  c) x = 7  d) x = 30',
        hints: ['Gjør motsatt operasjon på begge sider'],
      },
    },
    {
      id: '6-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '6-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$2x + 3 = 11$', solution: '$x = 4$' },
          { label: 'b', task: '$5x - 10 = 25$', solution: '$x = 7$' },
        ],
        solution: 'a) x = 4  b) x = 7',
        hints: ['Først trekk fra/legg til, så del'],
      },
    },
  ],
};

export const CHAPTER_6_4_3: TextbookChapter = {
  id: '6-4-3',
  courseId: '6',
  chapterNumber: '4.3',
  title: 'Formler',
  description: 'Bruke og tolke formler i praktiske situasjoner.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    {
      id: '6-4-3-intro',
      type: 'text',
      content: `## Hva er en formel?

En **formel** er en regel skrevet med symboler som viser sammenhengen mellom størrelser.

**Eksempler:**
- Areal av rektangel: $A = l \\cdot b$
- Fart: $v = \\frac{s}{t}$ (strekning delt på tid)`,
    },
    {
      id: '6-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Bruke fartformel',
      problem: `En bil kjører 120 km på 2 timer. Hva er farten?`,
      solution: `**Løsning:**
$$v = \\frac{s}{t} = \\frac{120}{2} = 60 \\text{ km/t}$$

**Svar:** Farten er 60 km/t.`,
    },
    {
      id: '6-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk formlene',
        subTasks: [
          { label: 'a', task: 'Finn arealet når $A = l \\cdot b$, $l = 8$ og $b = 5$', solution: '40' },
          { label: 'b', task: 'Finn farten når $v = \\frac{s}{t}$, $s = 200$ km og $t = 4$ timer', solution: '50 km/t' },
          { label: 'c', task: 'Finn tiden når $t = \\frac{s}{v}$, $s = 90$ km og $v = 30$ km/t', solution: '3 timer' },
        ],
        solution: 'a) 40  b) 50 km/t  c) 3 timer',
        hints: ['Sett inn verdiene i formelen og regn ut'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 5: SANNSYNLIGHET OG STATISTIKK
// ============================================================================

export const CHAPTER_6_5_1: TextbookChapter = {
  id: '6-5-1',
  courseId: '6',
  chapterNumber: '5.1',
  title: 'Sannsynlighet - introduksjon',
  description: 'Forstå sjanse og utfall i enkle tilfeldige forsøk.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive sannsynlighet i daglegdagse situasjonar',
  ],
  content: [
    {
      id: '6-5-1-intro',
      type: 'text',
      content: `## Hva er sannsynlighet?

**Sannsynlighet** forteller hvor sannsynlig noe er - sjansen for at det skjer.

- Sannsynlighet 0 = umulig
- Sannsynlighet 1 = helt sikkert
- Sannsynlighet 0,5 = like sannsynlig som usannsynlig`,
    },
    {
      id: '6-5-1-def',
      type: 'definition',
      title: 'Sannsynlighet',
      content: `$$P(\\text{hendelse}) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$

**Eksempel:** Sjansen for å få 6 med en terning:
$$P(6) = \\frac{1}{6}$$`,
    },
    {
      id: '6-5-1-kortstokk-info',
      type: 'tip',
      title: 'Visste du? Om kortstokken',
      content: `En vanlig kortstokk har **52 kort** i 4 farger:
- ♥ **Hjerter** (rød) - 13 kort
- ♦ **Ruter** (rød) - 13 kort
- ♠ **Spar** (sort) - 13 kort
- ♣ **Kløver** (sort) - 13 kort

Halvparten av kortene (26) er **røde** og halvparten (26) er **sorte**.`,
    },
    {
      id: '6-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn sannsynligheten',
        subTasks: [
          { label: 'a', task: 'Sjansen for kron med en mynt', solution: '$\\frac{1}{2}$ eller 0,5' },
          { label: 'b', task: 'Sjansen for å trekke et rødt kort fra en kortstokk (26 røde av 52)', solution: '$\\frac{1}{2}$' },
          { label: 'c', task: 'Sjansen for å få partall med en terning', solution: '$\\frac{3}{6} = \\frac{1}{2}$' },
        ],
        solution: 'a) 1/2  b) 1/2  c) 1/2',
        hints: ['Tel gunstige utfall og del på totalt antall'],
      },
    },
  ],
};

export const CHAPTER_6_5_2: TextbookChapter = {
  id: '6-5-2',
  courseId: '6',
  chapterNumber: '5.2',
  title: 'Median og typetall',
  description: 'Finne og tolke sentralmål i datasett.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'bruke sentralmål til å analysere og samanlikne datasett',
  ],
  content: [
    {
      id: '6-5-2-intro',
      type: 'text',
      content: `## Sentralmål

**Sentralmål** beskriver hva som er "typisk" i et datasett:
- **Gjennomsnitt** (middeltall)
- **Median** (midtverdien)
- **Typetall** (den vanligste verdien)`,
    },
    {
      id: '6-5-2-def',
      type: 'definition',
      title: 'Median og typetall',
      content: `**Median:** Den midterste verdien når tallene er sortert.
- Odde antall: Midterste tallet
- Partall antall: Gjennomsnittet av de to midterste

**Typetall:** Den verdien som forekommer flest ganger.`,
    },
    {
      id: '6-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Finn median og typetall',
      problem: `Datasett: 3, 5, 5, 7, 8, 5, 9`,
      solution: `**Løsning:**
Sortert: 3, 5, 5, 5, 7, 8, 9

**Median:** Midterste verdi = **5** (4. av 7 tall)

**Typetall:** 5 forekommer 3 ganger = **5**`,
    },
    {
      id: '6-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn median og typetall',
        subTasks: [
          { label: 'a', task: '2, 4, 4, 6, 8', solution: 'Median: 4, Typetall: 4' },
          { label: 'b', task: '1, 3, 3, 5, 7, 7, 7, 9', solution: 'Median: 6, Typetall: 7' },
        ],
        solution: 'a) Median 4, Typetall 4  b) Median 6, Typetall 7',
        hints: ['Sorter først, finn så midtverdien og den vanligste'],
      },
    },
  ],
};

export const CHAPTER_6_5_3: TextbookChapter = {
  id: '6-5-3',
  courseId: '6',
  chapterNumber: '5.3',
  title: 'Lage undersøkelser',
  description: 'Planlegge spørreundersøkelser og presentere data.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'planleggje og gjennomføre statistiske undersøkingar og presentere resultat',
  ],
  content: [
    {
      id: '6-5-3-intro',
      type: 'text',
      content: `## Statistisk undersøkelse

En **statistisk undersøkelse** samler inn data for å svare på et spørsmål.

**Stegene:**
1. Bestem hva du vil finne ut
2. Lag gode spørsmål
3. Samle inn data
4. Organiser dataene
5. Presenter resultatet`,
    },
    {
      id: '6-5-3-tips',
      type: 'definition',
      title: 'Tips for gode spørsmål',
      content: `- **Tydelige:** Lett å forstå
- **Presise:** Ikke tvetydige
- **Målbare:** Kan telles eller måles

**Eksempel på dårlig spørsmål:** "Liker du frukt?"
**Bedre:** "Hvor mange frukter spiser du i løpet av en vanlig dag?"`,
    },
    {
      id: '6-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '6-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en undersøkelse',
        subTasks: [
          { label: 'a', task: 'Lag to spørsmål for å finne ut hva klassekamerater gjør på fritiden', solution: 'F.eks.: "Hvor mange timer per uke driver du med organisert idrett?" og "Hvilken aktivitet bruker du mest tid på?"' },
        ],
        solution: 'Varierte svar med tydelige, målbare spørsmål',
        hints: ['Lag spørsmål som gir svar du kan telle eller sammenligne'],
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// EKSPORT AV ALLE KAPITLER
// ============================================================================

export const CHAPTERS_6KLASSE: TextbookChapter[] = [
  CHAPTER_6_1_1,
  CHAPTER_6_1_2,
  CHAPTER_6_1_3,
  CHAPTER_6_1_4,
  CHAPTER_6_2_1,
  CHAPTER_6_2_2,
  CHAPTER_6_2_3,
  CHAPTER_6_3_1,
  CHAPTER_6_3_2,
  CHAPTER_6_3_3,
  CHAPTER_6_3_4,
  CHAPTER_6_4_1,
  CHAPTER_6_4_2,
  CHAPTER_6_4_3,
  CHAPTER_6_5_1,
  CHAPTER_6_5_2,
  CHAPTER_6_5_3,
];
