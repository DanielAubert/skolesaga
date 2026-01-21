/**
 * Validated GeoGebra exercises for 1P (Praktisk matematikk VG1)
 */

import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

// 1P.1 Lineære modeller
export const EXERCISES_1P_FUNKSJONER: ValidatedExercise[] = [
  {
    id: '1p-funk-1',
    task: 'En taxitur koster 150 kr i startavgift og 12 kr per kilometer. Lag en lineær modell f(x) = ax + b som viser totalkostnaden for x kilometer.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-funk-1-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f skal gi riktig taxikostnad',
        testPoints: [
          { x: 0, expectedY: 150, tolerance: 0.1 },
          { x: 5, expectedY: 210, tolerance: 0.1 },
          { x: 10, expectedY: 270, tolerance: 0.1 },
        ],
        hint: 'Funksjonen skal være f(x) = 12x + 150. Stigningstallet er 12 (pris per km) og konstantleddet er 150 (startavgift).',
      },
    ],
  },
  {
    id: '1p-funk-2',
    task: 'Et mobilabonnement koster 299 kr per måned og inkluderer 5 GB data. Ekstra data koster 10 kr per GB. Lag funksjonen p(x) som viser månedsprisen når man bruker x GB ekstra data.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-funk-2-a',
        type: 'function',
        name: 'p',
        description: 'Funksjonen p skal gi riktig månedspris',
        testPoints: [
          { x: 0, expectedY: 299, tolerance: 0.1 },
          { x: 2, expectedY: 319, tolerance: 0.1 },
          { x: 5, expectedY: 349, tolerance: 0.1 },
        ],
        hint: 'p(x) = 10x + 299 der x er antall ekstra GB',
      },
    ],
  },
  {
    id: '1p-funk-3',
    task: 'Et batteri har 100% lading og lader ut med 8% per time. Lag funksjonen b(t) som viser batteriprosent etter t timer.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-funk-3-a',
        type: 'function',
        name: 'b',
        description: 'Funksjonen b skal gi riktig batteriprosent',
        testPoints: [
          { x: 0, expectedY: 100, tolerance: 0.1 },
          { x: 5, expectedY: 60, tolerance: 0.1 },
          { x: 10, expectedY: 20, tolerance: 0.1 },
        ],
        hint: 'b(t) = -8t + 100. Batteriet starter på 100% og minsker med 8% per time (negativ stigning).',
      },
    ],
  },
  {
    id: '1p-funk-4',
    task: 'En vanntank inneholder 500 liter. Vann pumpes ut med 25 liter per minutt. Finn når tanken er tom ved å lage funksjonen v(t) og løse v(t) = 0. Lagre svaret i variabelen tid.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-funk-4-a',
        type: 'function',
        name: 'v',
        description: 'Funksjonen v skal vise vannmengde',
        testPoints: [
          { x: 0, expectedY: 500, tolerance: 0.1 },
          { x: 10, expectedY: 250, tolerance: 0.1 },
        ],
        hint: 'v(t) = -25t + 500',
      },
      {
        id: '1p-funk-4-b',
        type: 'value',
        name: 'tid',
        description: 'Tiden når tanken er tom skal være 20 minutter',
        expected: 20,
        tolerance: 0.1,
        hint: 'Løs likningen -25t + 500 = 0. Du kan bruke Løs(v(t) = 0, t) eller Solve(v(t) = 0, t)',
      },
    ],
  },
  {
    id: '1p-funk-5',
    task: 'To taxiselskaper: A tar 100 kr + 15 kr/km, B tar 200 kr + 10 kr/km. Lag funksjonene a(x) og b(x), og finn når de koster det samme ved å beregne skjæringspunktet. Lagre x-verdien i variabelen km.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-funk-5-a',
        type: 'function',
        name: 'a',
        description: 'Funksjonen a skal gi pris for selskap A',
        testPoints: [
          { x: 0, expectedY: 100, tolerance: 0.1 },
          { x: 10, expectedY: 250, tolerance: 0.1 },
        ],
      },
      {
        id: '1p-funk-5-b',
        type: 'function',
        name: 'b',
        description: 'Funksjonen b skal gi pris for selskap B',
        testPoints: [
          { x: 0, expectedY: 200, tolerance: 0.1 },
          { x: 10, expectedY: 300, tolerance: 0.1 },
        ],
      },
      {
        id: '1p-funk-5-c',
        type: 'value',
        name: 'km',
        description: 'Selskapene koster likt ved 20 km',
        expected: 20,
        tolerance: 0.5,
        hint: 'Bruk Skjæring(a, b) eller Intersect(a, b) for å finne skjæringspunktet, og hent ut x-verdien',
      },
    ],
  },
];

// 1P.2 Økonomi og renter
export const EXERCISES_1P_OKONOMI: ValidatedExercise[] = [
  {
    id: '1p-okon-1',
    task: 'Du sparer 10 000 kr med 3% rente per år. Lag en funksjon k(t) som viser kapitalen etter t år med årlig rente.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-okon-1-a',
        type: 'function',
        name: 'k',
        description: 'Funksjonen k skal gi riktig kapital med rentes rente',
        testPoints: [
          { x: 0, expectedY: 10000, tolerance: 1 },
          { x: 1, expectedY: 10300, tolerance: 1 },
          { x: 5, expectedY: 11593, tolerance: 5 },
        ],
        hint: 'k(t) = 10000 * 1.03^t. Dette er eksponentiell vekst med vekstfaktor 1.03',
      },
    ],
  },
  {
    id: '1p-okon-2',
    task: 'En bil verdt 300 000 kr synker i verdi med 15% per år. Lag funksjonen v(t) som viser bilens verdi etter t år.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-okon-2-a',
        type: 'function',
        name: 'v',
        description: 'Funksjonen v skal gi riktig bilverdi',
        testPoints: [
          { x: 0, expectedY: 300000, tolerance: 1 },
          { x: 1, expectedY: 255000, tolerance: 1 },
          { x: 3, expectedY: 184163, tolerance: 50 },
        ],
        hint: 'v(t) = 300000 * 0.85^t. Verdifall på 15% gir vekstfaktor 0.85',
      },
    ],
  },
  {
    id: '1p-okon-3',
    task: 'Beregn hvor mye 50 000 kr blir til etter 8 år med 4% årlig rente. Lagre svaret i variabelen sluttkapital.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-okon-3-a',
        type: 'value',
        name: 'sluttkapital',
        description: 'Sluttkapitalen skal være ca. 68 428 kr',
        expected: 68428,
        tolerance: 50,
        hint: 'sluttkapital = 50000 * 1.04^8',
      },
    ],
  },
  {
    id: '1p-okon-4',
    task: 'Du tar opp et lån på 100 000 kr med 5% rente og betaler 1000 kr per måned. Lag en rekursiv formel: Start med k0 = 100000. Beregn k1 (etter første måned med rente og nedbetaling).',
    initialCommands: ['k0 = 100000', 'rente = 0.05 / 12', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-okon-4-a',
        type: 'value',
        name: 'k1',
        description: 'k1 skal være ca. 99 417 kr',
        expected: 99417,
        tolerance: 10,
        hint: 'k1 = k0 * (1 + rente) - 1000. Først legger vi til månedsrente, så trekker vi fra betalingen.',
      },
    ],
  },
];

// 1P.3 Prosent og vekstfaktor
export const EXERCISES_1P_PROSENT: ValidatedExercise[] = [
  {
    id: '1p-prosent-1',
    task: 'En vare koster 800 kr. Den får 25% rabatt. Beregn vekstfaktoren og den nye prisen. Lagre vekstfaktor i vf og ny pris i pris.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-prosent-1-a',
        type: 'value',
        name: 'vf',
        description: 'Vekstfaktoren skal være 0.75',
        expected: 0.75,
        tolerance: 0.01,
        hint: '25% rabatt betyr at man betaler 75% av prisen. vf = 0.75',
      },
      {
        id: '1p-prosent-1-b',
        type: 'value',
        name: 'pris',
        description: 'Ny pris skal være 600 kr',
        expected: 600,
        tolerance: 0.1,
        hint: 'pris = 800 * 0.75',
      },
    ],
  },
  {
    id: '1p-prosent-2',
    task: 'En vare øker i pris med 20%, deretter får den 20% rabatt. Beregn sluttvekstfaktoren (produktet av de to vekstfaktorene). Lagre i variabelen totalvf.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-prosent-2-a',
        type: 'value',
        name: 'totalvf',
        description: 'Total vekstfaktor skal være 0.96',
        expected: 0.96,
        tolerance: 0.01,
        hint: 'totalvf = 1.20 * 0.80. Først økning (1.20), så rabatt (0.80)',
      },
    ],
  },
  {
    id: '1p-prosent-3',
    task: 'En by har 50 000 innbyggere og vokser med 2.5% per år. Hvor mange innbyggere blir det etter 5 år? Lag funksjonen i(t) og beregn i(5). Lagre resultatet i variabelen innbyggere.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-prosent-3-a',
        type: 'function',
        name: 'i',
        description: 'Funksjonen i skal vise befolkningsvekst',
        testPoints: [
          { x: 0, expectedY: 50000, tolerance: 1 },
          { x: 1, expectedY: 51250, tolerance: 1 },
        ],
        hint: 'i(t) = 50000 * 1.025^t',
      },
      {
        id: '1p-prosent-3-b',
        type: 'value',
        name: 'innbyggere',
        description: 'Antall innbyggere etter 5 år skal være ca. 56 577',
        expected: 56577,
        tolerance: 50,
        hint: 'innbyggere = i(5)',
      },
    ],
  },
  {
    id: '1p-prosent-4',
    task: 'Du kjøper en vare for 1200 kr inkludert 25% mva. Beregn prisen uten mva og lagre den i variabelen uten_mva.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-prosent-4-a',
        type: 'value',
        name: 'uten_mva',
        description: 'Prisen uten mva skal være 960 kr',
        expected: 960,
        tolerance: 1,
        hint: 'uten_mva = 1200 / 1.25. Vi deler på vekstfaktoren for å finne originalprisen.',
      },
    ],
  },
];

// 1P.4 Statistikk
export const EXERCISES_1P_STATISTIKK: ValidatedExercise[] = [
  {
    id: '1p-stat-1',
    task: 'Gitt datasettet [5, 8, 12, 15, 20]. Beregn gjennomsnittet og lagre det i variabelen gjsnitt.',
    initialCommands: ['data = {5, 8, 12, 15, 20}', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-stat-1-a',
        type: 'value',
        name: 'gjsnitt',
        description: 'Gjennomsnittet skal være 12',
        expected: 12,
        tolerance: 0.1,
        hint: 'gjsnitt = Gjennomsnitt(data) eller gjsnitt = Mean(data)',
      },
    ],
  },
  {
    id: '1p-stat-2',
    task: 'Bruk samme datasett. Beregn medianen og lagre den i variabelen median.',
    initialCommands: ['data = {5, 8, 12, 15, 20}', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-stat-2-a',
        type: 'value',
        name: 'median',
        description: 'Medianen skal være 12',
        expected: 12,
        tolerance: 0.1,
        hint: 'median = Median(data)',
      },
    ],
  },
  {
    id: '1p-stat-3',
    task: 'Beregn standardavviket for datasettet [10, 20, 30, 40, 50]. Lagre resultatet i variabelen std.',
    initialCommands: ['data = {10, 20, 30, 40, 50}', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-stat-3-a',
        type: 'value',
        name: 'std',
        description: 'Standardavviket skal være ca. 15.81',
        expected: 15.81,
        tolerance: 0.5,
        hint: 'std = Standardavvik(data) eller std = SD(data)',
      },
    ],
  },
  {
    id: '1p-stat-4',
    task: 'Finn første kvartil (Q1) og tredje kvartil (Q3) for datasettet [2, 4, 6, 8, 10, 12, 14]. Lagre i q1 og q3.',
    initialCommands: ['data = {2, 4, 6, 8, 10, 12, 14}', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-stat-4-a',
        type: 'value',
        name: 'q1',
        description: 'Q1 skal være 4',
        expected: 4,
        tolerance: 1,
        hint: 'q1 = Kvartil1(data) eller q1 = Q1(data)',
      },
      {
        id: '1p-stat-4-b',
        type: 'value',
        name: 'q3',
        description: 'Q3 skal være 12',
        expected: 12,
        tolerance: 1,
        hint: 'q3 = Kvartil3(data) eller q3 = Q3(data)',
      },
    ],
  },
  {
    id: '1p-stat-5',
    task: 'Lag to punkter fra et datasett: A med koordinater (1, 5) og B med koordinater (10, 50). Finn regresjonslinjen gjennom disse punktene og kall den r.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-stat-5-a',
        type: 'point',
        name: 'A',
        description: 'Punkt A skal være på (1, 5)',
        expected: { x: 1, y: 5 },
        tolerance: 0.2,
      },
      {
        id: '1p-stat-5-b',
        type: 'point',
        name: 'B',
        description: 'Punkt B skal være på (10, 50)',
        expected: { x: 10, y: 50 },
        tolerance: 0.2,
      },
      {
        id: '1p-stat-5-c',
        type: 'function',
        name: 'r',
        description: 'Regresjonslinjen skal passe gjennom punktene',
        testPoints: [
          { x: 1, expectedY: 5, tolerance: 0.5 },
          { x: 10, expectedY: 50, tolerance: 0.5 },
        ],
        hint: 'Bruk r = TilpassLinje({A, B}) eller r = FitLine({A, B})',
      },
    ],
  },
];

// 1P.5 Geometri i praksis
export const EXERCISES_1P_GEOMETRI: ValidatedExercise[] = [
  {
    id: '1p-geom-1',
    task: 'En sirkulær pizzabunn har diameter 30 cm. Beregn arealet og lagre det i variabelen pizzaareal.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-geom-1-a',
        type: 'value',
        name: 'pizzaareal',
        description: 'Pizzaarealet skal være ca. 706.86 cm²',
        expected: 706.86,
        tolerance: 5,
        hint: 'pizzaareal = π * (30/2)^2. Bruk pi for π i GeoGebra.',
      },
    ],
  },
  {
    id: '1p-geom-2',
    task: 'En sylinderformet boks har radius 8 cm og høyde 15 cm. Beregn volumet og lagre det i variabelen volum.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-geom-2-a',
        type: 'value',
        name: 'volum',
        description: 'Volumet skal være ca. 3016.85 cm³',
        expected: 3016.85,
        tolerance: 10,
        hint: 'volum = π * 8^2 * 15',
      },
    ],
  },
  {
    id: '1p-geom-3',
    task: 'Et kart har målestokk 1:50000. Avstanden på kartet er 8 cm. Beregn den virkelige avstanden i kilometer og lagre den i variabelen avstand_km.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-geom-3-a',
        type: 'value',
        name: 'avstand_km',
        description: 'Avstanden skal være 4 km',
        expected: 4,
        tolerance: 0.1,
        hint: 'avstand_km = (8 * 50000) / 100000. 8 cm * 50000 = 400000 cm = 4 km',
      },
    ],
  },
  {
    id: '1p-geom-4',
    task: 'En rett trekant har kateter 6 cm og 8 cm. Bruk Pytagoras til å beregne hypotenusen og lagre den i variabelen hyp.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1p-geom-4-a',
        type: 'value',
        name: 'hyp',
        description: 'Hypotenusen skal være 10 cm',
        expected: 10,
        tolerance: 0.1,
        hint: 'hyp = sqrt(6^2 + 8^2)',
      },
    ],
  },
];

// All exercises grouped by chapter
export const GEOGEBRA_EXERCISES_1P: Record<string, ValidatedExercise[]> = {
  '1p-funksjoner': EXERCISES_1P_FUNKSJONER,
  '1p-okonomi': EXERCISES_1P_OKONOMI,
  '1p-prosent': EXERCISES_1P_PROSENT,
  '1p-statistikk': EXERCISES_1P_STATISTIKK,
  '1p-geometri': EXERCISES_1P_GEOMETRI,
};

// Get total exercise count for a chapter
export function getExerciseCount(chapterId: string): number {
  return GEOGEBRA_EXERCISES_1P[chapterId]?.length || 0;
}

// Get all exercises for a chapter
export function getChapterExercises(chapterId: string): ValidatedExercise[] {
  return GEOGEBRA_EXERCISES_1P[chapterId] || [];
}

// Get total number of exercises across all chapters
export function getTotalExerciseCount(): number {
  return Object.values(GEOGEBRA_EXERCISES_1P).reduce(
    (total, exercises) => total + exercises.length,
    0
  );
}
