/**
 * Validated GeoGebra exercises for 10. klasse
 */

import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

// 10.1 Funksjoner og grafer
export const EXERCISES_10_FUNKSJONER: ValidatedExercise[] = [
  {
    id: '10-funk-1',
    task: 'Tegn den lineære funksjonen f(x) = 2x + 3',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-funk-1-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f skal være f(x) = 2x + 3',
        testPoints: [
          { x: 0, expectedY: 3, tolerance: 0.1 },
          { x: 1, expectedY: 5, tolerance: 0.1 },
          { x: -1, expectedY: 1, tolerance: 0.1 },
        ],
        hint: 'Skriv f(x) = 2x + 3 eller f(x) = 2*x + 3 i inputfeltet',
      },
    ],
  },
  {
    id: '10-funk-2',
    task: 'Lag en funksjon g(x) = -x + 4. Finn skjæringspunktet S mellom g(x) og x-aksen.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-funk-2-a',
        type: 'function',
        name: 'g',
        description: 'Funksjonen g skal være g(x) = -x + 4',
        testPoints: [
          { x: 0, expectedY: 4, tolerance: 0.1 },
          { x: 4, expectedY: 0, tolerance: 0.1 },
        ],
        hint: 'Definer g(x) = -x + 4',
      },
      {
        id: '10-funk-2-b',
        type: 'point',
        name: 'S',
        description: 'Skjæringspunktet S skal være på (4, 0)',
        expected: { x: 4, y: 0 },
        tolerance: 0.2,
        hint: 'Bruk kommandoen S = Nullpunkt(g) eller S = Root(g)',
      },
    ],
  },
  {
    id: '10-funk-3',
    task: 'Tegn funksjonene f(x) = 3x og g(x) = x + 4. Finn skjæringspunktet P mellom f og g.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-funk-3-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f skal være f(x) = 3x',
        testPoints: [
          { x: 0, expectedY: 0, tolerance: 0.1 },
          { x: 2, expectedY: 6, tolerance: 0.1 },
        ],
      },
      {
        id: '10-funk-3-b',
        type: 'function',
        name: 'g',
        description: 'Funksjonen g skal være g(x) = x + 4',
        testPoints: [
          { x: 0, expectedY: 4, tolerance: 0.1 },
          { x: 2, expectedY: 6, tolerance: 0.1 },
        ],
      },
      {
        id: '10-funk-3-c',
        type: 'point',
        name: 'P',
        description: 'Skjæringspunktet P skal være på (2, 6)',
        expected: { x: 2, y: 6 },
        tolerance: 0.2,
        hint: 'Bruk kommandoen P = Skjæring(f, g) eller P = Intersect(f, g)',
      },
    ],
  },
  {
    id: '10-funk-4',
    task: 'Lag en funksjon h(x) = 0.5x - 2. Finn stigningstallet k og konstantleddet m.',
    initialCommands: ['h(x) = 0.5*x - 2', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-funk-4-a',
        type: 'value',
        name: 'k',
        description: 'Stigningstallet k skal være 0.5',
        expected: 0.5,
        tolerance: 0.01,
        hint: 'Stigningstallet er koeffisienten foran x. Definer k = 0.5',
      },
      {
        id: '10-funk-4-b',
        type: 'value',
        name: 'm',
        description: 'Konstantleddet m skal være -2',
        expected: -2,
        tolerance: 0.01,
        hint: 'Konstantleddet er verdien uten x. Definer m = -2',
      },
    ],
  },
  {
    id: '10-funk-5',
    task: 'Beregn funksjonsverdien f(5) når f(x) = 2x + 1. Lagre svaret i variabelen y.',
    initialCommands: ['f(x) = 2*x + 1', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-funk-5-a',
        type: 'value',
        name: 'y',
        description: 'Funksjonsverdien y skal være 11',
        expected: 11,
        tolerance: 0.1,
        hint: 'Skriv y = f(5) i inputfeltet',
      },
    ],
  },
  {
    id: '10-funk-6',
    task: 'To størrelser x og y er proporsjonale med proporsjonalitetsfaktor 3. Lag funksjonen p(x) som beskriver sammenhengen.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-funk-6-a',
        type: 'function',
        name: 'p',
        description: 'Funksjonen p skal være p(x) = 3x',
        testPoints: [
          { x: 0, expectedY: 0, tolerance: 0.1 },
          { x: 1, expectedY: 3, tolerance: 0.1 },
          { x: 2, expectedY: 6, tolerance: 0.1 },
        ],
        hint: 'Ved proporsjonalitet er y = kx, der k er proporsjonalitetsfaktoren',
      },
    ],
  },
];

// 10.2 Andregradsfunksjoner
export const EXERCISES_10_ANDREGRADSFUNKSJONER: ValidatedExercise[] = [
  {
    id: '10-annen-1',
    task: 'Tegn andregradsfunksjonen f(x) = x² - 4',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-annen-1-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f skal være f(x) = x² - 4',
        testPoints: [
          { x: 0, expectedY: -4, tolerance: 0.1 },
          { x: 2, expectedY: 0, tolerance: 0.1 },
          { x: -2, expectedY: 0, tolerance: 0.1 },
        ],
        hint: 'Skriv f(x) = x^2 - 4 i inputfeltet',
      },
    ],
  },
  {
    id: '10-annen-2',
    task: 'Tegn g(x) = -x² + 9 og finn toppunktet T',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-annen-2-a',
        type: 'function',
        name: 'g',
        description: 'Funksjonen g skal være g(x) = -x² + 9',
        testPoints: [
          { x: 0, expectedY: 9, tolerance: 0.1 },
          { x: 3, expectedY: 0, tolerance: 0.1 },
          { x: -3, expectedY: 0, tolerance: 0.1 },
        ],
      },
      {
        id: '10-annen-2-b',
        type: 'point',
        name: 'T',
        description: 'Toppunktet T skal være på (0, 9)',
        expected: { x: 0, y: 9 },
        tolerance: 0.2,
        hint: 'Bruk kommandoen T = Ekstremalpunkt(g) eller T = Extremum(g)',
      },
    ],
  },
  {
    id: '10-annen-3',
    task: 'Tegn h(x) = x² - 6x + 5 og finn begge nullpunktene N1 og N2 (N1 til venstre, N2 til høyre)',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-annen-3-a',
        type: 'function',
        name: 'h',
        description: 'Funksjonen h skal være h(x) = x² - 6x + 5',
        testPoints: [
          { x: 0, expectedY: 5, tolerance: 0.1 },
          { x: 1, expectedY: 0, tolerance: 0.1 },
          { x: 5, expectedY: 0, tolerance: 0.1 },
        ],
      },
      {
        id: '10-annen-3-b',
        type: 'point',
        name: 'N1',
        description: 'Nullpunktet N1 skal være på (1, 0)',
        expected: { x: 1, y: 0 },
        tolerance: 0.2,
        hint: 'Bruk kommandoen Nullpunkt(h) for å finne nullpunktene',
      },
      {
        id: '10-annen-3-c',
        type: 'point',
        name: 'N2',
        description: 'Nullpunktet N2 skal være på (5, 0)',
        expected: { x: 5, y: 0 },
        tolerance: 0.2,
        hint: 'Bruk kommandoen Nullpunkt(h) to ganger for å finne begge nullpunktene',
      },
    ],
  },
  {
    id: '10-annen-4',
    task: 'Tegn parabelen p(x) = 2x² - 8x + 6 og finn symmetrilinjen x = a',
    initialCommands: ['p(x) = 2*x^2 - 8*x + 6', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-annen-4-a',
        type: 'value',
        name: 'a',
        description: 'Symmetrilinjen skal være x = 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Symmetrilinjen går gjennom toppunktet. Bruk a = x(Ekstremalpunkt(p))',
      },
    ],
  },
  {
    id: '10-annen-5',
    task: 'Lag funksjonen q(x) = x² + 2x - 3 og finn minste funksjonsverdi m',
    initialCommands: ['q(x) = x^2 + 2*x - 3', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-annen-5-a',
        type: 'value',
        name: 'm',
        description: 'Minste funksjonsverdi m skal være -4',
        expected: -4,
        tolerance: 0.1,
        hint: 'Bruk m = y(Ekstremalpunkt(q)) for å finne y-koordinaten til toppunktet',
      },
    ],
  },
  {
    id: '10-annen-6',
    task: 'Tegn r(x) = (x - 3)² og finn hvor parabelen skjærer y-aksen. Kall punktet Y.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-annen-6-a',
        type: 'function',
        name: 'r',
        description: 'Funksjonen r skal være r(x) = (x - 3)²',
        testPoints: [
          { x: 0, expectedY: 9, tolerance: 0.1 },
          { x: 3, expectedY: 0, tolerance: 0.1 },
        ],
        hint: 'Skriv r(x) = (x - 3)^2',
      },
      {
        id: '10-annen-6-b',
        type: 'point',
        name: 'Y',
        description: 'Y-aksen skjæringspunktet skal være på (0, 9)',
        expected: { x: 0, y: 9 },
        tolerance: 0.2,
        hint: 'Y-aksen er der x = 0. Lag punkt Y = (0, r(0))',
      },
    ],
  },
];

// 10.3 Geometri og måling
export const EXERCISES_10_GEOMETRI: ValidatedExercise[] = [
  {
    id: '10-geom-1',
    task: 'Lag et rektangel med lengde 6 og bredde 4. Beregn arealet a.',
    initialCommands: ['A = (0, 0)',
      'B = (6, 0)',
      'C = (6, 4)',
      'D = (0, 4)',
      'r = Polygon(A, B, C, D)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-geom-1-a',
        type: 'value',
        name: 'a',
        description: 'Arealet a skal være 24',
        expected: 24,
        tolerance: 0.1,
        hint: 'Bruk kommandoen a = Areal(r) eller a = Area(r)',
      },
    ],
  },
  {
    id: '10-geom-2',
    task: 'Lag en sirkel med sentrum i origo og radius 5. Beregn omkretsen o.',
    initialCommands: ['c = Circle((0, 0), 5)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-geom-2-a',
        type: 'value',
        name: 'o',
        description: 'Omkretsen o skal være ca. 31.4 (2πr)',
        expected: 31.416,
        tolerance: 0.5,
        hint: 'Bruk kommandoen o = Omkrets(c) eller o = Perimeter(c)',
      },
    ],
  },
  {
    id: '10-geom-3',
    task: 'Lag et kvadrat med sidelengde 5. Beregn diagonalen d.',
    initialCommands: ['A = (0, 0)',
      'B = (5, 0)',
      'C = (5, 5)',
      'D = (0, 5)',
      'k = Polygon(A, B, C, D)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-geom-3-a',
        type: 'value',
        name: 'd',
        description: 'Diagonalen d skal være ca. 7.07',
        expected: 7.071,
        tolerance: 0.1,
        hint: 'Bruk kommandoen d = Avstand(A, C) eller d = Distance(A, C)',
      },
    ],
  },
  {
    id: '10-geom-4',
    task: 'Lag en trekant med hjørner A(0,0), B(8,0), C(4,6). Finn høyden h fra C til AB.',
    initialCommands: ['A = (0, 0)',
      'B = (8, 0)',
      'C = (4, 6)',
      't = Polygon(A, B, C)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-geom-4-a',
        type: 'value',
        name: 'h',
        description: 'Høyden h skal være 6',
        expected: 6,
        tolerance: 0.1,
        hint: 'Høyden er y-koordinaten til C siden AB ligger på x-aksen. h = y(C)',
      },
    ],
  },
  {
    id: '10-geom-5',
    task: 'En sylinder har radius r = 3 og høyde h = 10. Beregn volumet V.',
    initialCommands: ['r = 3', 'h = 10', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-geom-5-a',
        type: 'value',
        name: 'V',
        description: 'Volumet V skal være ca. 282.7 (πr²h)',
        expected: 282.743,
        tolerance: 1,
        hint: 'Bruk formelen V = π * r^2 * h',
      },
    ],
  },
  {
    id: '10-geom-6',
    task: 'Lag en sirkel med radius 4 og beregn arealet A.',
    initialCommands: ['c = Circle((0, 0), 4)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-geom-6-a',
        type: 'value',
        name: 'A',
        description: 'Arealet A skal være ca. 50.3 (πr²)',
        expected: 50.265,
        tolerance: 0.5,
        hint: 'Bruk kommandoen A = Areal(c) eller A = Area(c)',
      },
    ],
  },
];

// 10.4 Sannsynlighet
export const EXERCISES_10_SANNSYNLIGHET: ValidatedExercise[] = [
  {
    id: '10-sann-1',
    task: 'En terning kastes. Det er 6 mulige utfall og 2 gunstige (kaste 5 eller 6). Beregn sannsynligheten p.',
    initialCommands: ['gunstige = 2', 'mulige = 6', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-sann-1-a',
        type: 'value',
        name: 'p',
        description: 'Sannsynligheten p skal være ca. 0.333',
        expected: 0.333,
        tolerance: 0.01,
        hint: 'Bruk formelen p = gunstige / mulige',
      },
    ],
  },
  {
    id: '10-sann-2',
    task: 'I en pose er det 5 røde og 3 blå kuler. Beregn sannsynligheten q for å trekke en rød kule.',
    initialCommands: ['rode = 5', 'bla = 3', 'totalt = rode + bla', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-sann-2-a',
        type: 'value',
        name: 'q',
        description: 'Sannsynligheten q skal være 0.625',
        expected: 0.625,
        tolerance: 0.01,
        hint: 'q = rode / totalt',
      },
    ],
  },
  {
    id: '10-sann-3',
    task: 'Lag en liste med 20 tilfeldige terningkast. Kall listen kast.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-sann-3-a',
        type: 'exists',
        name: 'kast',
        description: 'Listen kast skal eksistere',
        hint: 'Bruk kommandoen kast = TilfeldigMellom(1, 6, 20) eller kast = RandomBetween(1, 6, 20)',
      },
    ],
  },
  {
    id: '10-sann-4',
    task: 'Simuler 100 myntkast (0 eller 1). Beregn antall mynt med verdi 1 og lagre i variabelen antall1.',
    initialCommands: ['myntkast = RandomBetween(0, 1, 100)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-sann-4-a',
        type: 'exists',
        name: 'antall1',
        description: 'Variabelen antall1 skal eksistere',
        hint: 'Bruk kommandoen antall1 = Sum(myntkast) for å telle antall 1-ere',
      },
    ],
  },
  {
    id: '10-sann-5',
    task: 'Du har observert 40 suksesser i 100 forsøk. Beregn relativ frekvens rf.',
    initialCommands: ['suksesser = 40', 'forsok = 100', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '10-sann-5-a',
        type: 'value',
        name: 'rf',
        description: 'Relativ frekvens rf skal være 0.4',
        expected: 0.4,
        tolerance: 0.01,
        hint: 'Relativ frekvens = suksesser / forsok',
      },
    ],
  },
];

// All exercises grouped by chapter
export const GEOGEBRA_EXERCISES_10KLASSE: Record<string, ValidatedExercise[]> = {
  '10-funksjoner': EXERCISES_10_FUNKSJONER,
  '10-andregradsfunksjoner': EXERCISES_10_ANDREGRADSFUNKSJONER,
  '10-geometri': EXERCISES_10_GEOMETRI,
  '10-sannsynlighet': EXERCISES_10_SANNSYNLIGHET,
};

// Get total exercise count for a chapter
export function getExerciseCount(chapterId: string): number {
  return GEOGEBRA_EXERCISES_10KLASSE[chapterId]?.length || 0;
}

// Get all exercises for a chapter
export function getChapterExercises(chapterId: string): ValidatedExercise[] {
  return GEOGEBRA_EXERCISES_10KLASSE[chapterId] || [];
}
