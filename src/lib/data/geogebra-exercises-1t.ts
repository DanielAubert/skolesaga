/**
 * Validated GeoGebra exercises for 1T (Teoretisk matematikk VG1)
 */

import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

// Kapittel 1: Algebra og CAS
export const EXERCISES_1T_ALGEBRA: ValidatedExercise[] = [
  {
    id: '1t-alg-1',
    task: 'Løs likningen 3x - 7 = 14 med Solve() kommandoen. Lagre løsningen som x.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-alg-1-a',
        type: 'value',
        name: 'x',
        description: 'x skal være 7',
        expected: 7,
        tolerance: 0.01,
        hint: 'Skriv Solve(3x - 7 = 14, x) i CAS-vinduet',
      },
    ],
  },
  {
    id: '1t-alg-2',
    task: 'Løs andregradslikningen x² - 8x + 12 = 0. Lagre det minste nullpunktet som x1 og det største som x2.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-alg-2-a',
        type: 'value',
        name: 'x1',
        description: 'x1 skal være 2',
        expected: 2,
        tolerance: 0.01,
        hint: 'Løs likningen først, deretter x1 = 2 og x2 = 6',
      },
      {
        id: '1t-alg-2-b',
        type: 'value',
        name: 'x2',
        description: 'x2 skal være 6',
        expected: 6,
        tolerance: 0.01,
      },
    ],
  },
  {
    id: '1t-alg-3',
    task: 'Faktoriser uttrykket x² + 7x + 12 med Factor(). Lagre resultatet som f.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-alg-3-a',
        type: 'exists',
        name: 'f',
        description: 'f skal eksistere som faktorisert uttrykk',
        hint: 'Skriv f = Factor(x² + 7x + 12) i CAS-vinduet',
      },
    ],
  },
  {
    id: '1t-alg-4',
    task: 'Utvid uttrykket (x - 5)(x + 4) med Expand(). Lagre resultatet som e.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-alg-4-a',
        type: 'exists',
        name: 'e',
        description: 'e skal eksistere som utvidet uttrykk',
        hint: 'Skriv e = Expand((x - 5)(x + 4)) i CAS-vinduet',
      },
    ],
  },
  {
    id: '1t-alg-5',
    task: 'Forenkle uttrykket (x² - 16) / (x + 4) med Simplify(). Lagre resultatet som s.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-alg-5-a',
        type: 'exists',
        name: 's',
        description: 's skal eksistere som forenklet uttrykk',
        hint: 'Skriv s = Simplify((x² - 16) / (x + 4)). Resultatet blir x - 4',
      },
    ],
  },
  {
    id: '1t-alg-6',
    task: 'Løs likningssettet: 2x + y = 10 og x - y = 2. Lagre x og y.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-alg-6-a',
        type: 'value',
        name: 'x',
        description: 'x skal være 4',
        expected: 4,
        tolerance: 0.01,
        hint: 'Bruk Solve({2x + y = 10, x - y = 2}, {x, y})',
      },
      {
        id: '1t-alg-6-b',
        type: 'value',
        name: 'y',
        description: 'y skal være 2',
        expected: 2,
        tolerance: 0.01,
      },
    ],
  },
];

// Kapittel 2: Funksjoner
export const EXERCISES_1T_FUNKSJONER: ValidatedExercise[] = [
  {
    id: '1t-funk-1',
    task: 'Definer funksjonen f(x) = 2x - 3 og finn nullpunktet med Root(). Lagre nullpunktet som n.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-funk-1-a',
        type: 'function',
        name: 'f',
        description: 'f(x) skal være 2x - 3',
        testPoints: [
          { x: 0, expectedY: -3, tolerance: 0.1 },
          { x: 1, expectedY: -1, tolerance: 0.1 },
          { x: 2, expectedY: 1, tolerance: 0.1 },
        ],
        hint: 'Definer f(x) = 2x - 3',
      },
      {
        id: '1t-funk-1-b',
        type: 'point',
        name: 'n',
        description: 'Nullpunktet skal være på (1.5, 0)',
        expected: { x: 1.5, y: 0 },
        tolerance: 0.2,
        hint: 'Bruk n = Root(f)',
      },
    ],
  },
  {
    id: '1t-funk-2',
    task: 'Definer andregradsfunksjonen f(x) = x² - 7x + 12 og finn toppunktet med Extremum(). Kall det T.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-funk-2-a',
        type: 'function',
        name: 'f',
        description: 'f(x) skal være x² - 7x + 12',
        testPoints: [
          { x: 0, expectedY: 12, tolerance: 0.1 },
          { x: 3.5, expectedY: -0.25, tolerance: 0.1 },
          { x: 7, expectedY: 12, tolerance: 0.1 },
        ],
      },
      {
        id: '1t-funk-2-b',
        type: 'point',
        name: 'T',
        description: 'Toppunktet skal være ved (3.5, -0.25)',
        expected: { x: 3.5, y: -0.25 },
        tolerance: 0.2,
        hint: 'Bruk T = Extremum(f)',
      },
    ],
  },
  {
    id: '1t-funk-3',
    task: 'Finn nullpunktene til f(x) = x² - 5x + 6. Lagre det minste som A og det største som B.',
    initialCommands: ['f(x) = x² - 5x + 6', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-funk-3-a',
        type: 'point',
        name: 'A',
        description: 'A skal være på (2, 0)',
        expected: { x: 2, y: 0 },
        tolerance: 0.2,
        hint: 'Bruk Root(f) eller Intersect(f, xAxis)',
      },
      {
        id: '1t-funk-3-b',
        type: 'point',
        name: 'B',
        description: 'B skal være på (3, 0)',
        expected: { x: 3, y: 0 },
        tolerance: 0.2,
      },
    ],
  },
  {
    id: '1t-funk-4',
    task: 'Finn skjæringspunktet mellom f(x) = x² - 2x og g(x) = x + 4. Lagre skjæringspunktene som S1 og S2.',
    initialCommands: ['f(x) = x² - 2x',
      'g(x) = x + 4', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-funk-4-a',
        type: 'exists',
        name: 'S1',
        description: 'S1 skal eksistere',
        hint: 'Bruk Intersect(f, g) for å finne skjæringspunktene',
      },
      {
        id: '1t-funk-4-b',
        type: 'exists',
        name: 'S2',
        description: 'S2 skal eksistere',
      },
    ],
  },
  {
    id: '1t-funk-5',
    task: 'Definer f(x) = -x² + 4x + 5. Finn y-verdien i toppunktet og lagre den som y_max.',
    initialCommands: ['f(x) = -x² + 4x + 5', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-funk-5-a',
        type: 'value',
        name: 'y_max',
        description: 'y_max skal være 9',
        expected: 9,
        tolerance: 0.1,
        hint: 'Toppunktet er ved x = 2, så y_max = f(2) = 9',
      },
    ],
  },
];

// Kapittel 3: Polynomer
export const EXERCISES_1T_POLYNOMER: ValidatedExercise[] = [
  {
    id: '1t-poly-1',
    task: 'Definer polynomet P(x) = x³ - 4x og finn alle nullpunkter. Lagre antall nullpunkter som n.',
    initialCommands: ['P(x) = x³ - 4x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-poly-1-a',
        type: 'value',
        name: 'n',
        description: 'Antall nullpunkter skal være 3',
        expected: 3,
        tolerance: 0.01,
        hint: 'Bruk Root(P) for å finne alle nullpunkter. Det er 3 stykker: -2, 0, 2',
      },
    ],
  },
  {
    id: '1t-poly-2',
    task: 'Faktoriser P(x) = x³ + 2x² - 5x - 6 med Factor(). Lagre som f.',
    initialCommands: ['P(x) = x³ + 2x² - 5x - 6', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-poly-2-a',
        type: 'exists',
        name: 'f',
        description: 'f skal eksistere som faktorisert polynom',
        hint: 'Skriv f = Factor(P(x)) i CAS-vinduet',
      },
    ],
  },
  {
    id: '1t-poly-3',
    task: 'Gitt P(x) = x³ - 3x² - 4x + 12. Sjekk at P(2) = 0 og lagre resultatet som r.',
    initialCommands: ['P(x) = x³ - 3x² - 4x + 12', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-poly-3-a',
        type: 'value',
        name: 'r',
        description: 'r skal være 0',
        expected: 0,
        tolerance: 0.01,
        hint: 'Skriv r = P(2) for å sjekke om 2 er et nullpunkt',
      },
    ],
  },
  {
    id: '1t-poly-4',
    task: 'Utvid (x - 1)(x - 2)(x - 3) med Expand() og lagre som e.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-poly-4-a',
        type: 'exists',
        name: 'e',
        description: 'e skal eksistere som utvidet polynom',
        hint: 'Skriv e = Expand((x - 1)(x - 2)(x - 3))',
      },
    ],
  },
  {
    id: '1t-poly-5',
    task: 'Definer P(x) = 2x⁴ - 3x² + 5x - 1. Finn graden til polynomet og lagre som g.',
    initialCommands: ['P(x) = 2x⁴ - 3x² + 5x - 1', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-poly-5-a',
        type: 'value',
        name: 'g',
        description: 'Graden skal være 4',
        expected: 4,
        tolerance: 0.01,
        hint: 'Bruk Degree(P) eller skriv g = 4 direkte',
      },
    ],
  },
];

// Kapittel 4: Geometri
export const EXERCISES_1T_GEOMETRI: ValidatedExercise[] = [
  {
    id: '1t-geom-1',
    task: 'Lag en trekant med hjørner A(0,0), B(6,0), C(3,5). Kall trekanten t.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-geom-1-a',
        type: 'point',
        name: 'A',
        description: 'A skal være på (0, 0)',
        expected: { x: 0, y: 0 },
        tolerance: 0.2,
      },
      {
        id: '1t-geom-1-b',
        type: 'point',
        name: 'B',
        description: 'B skal være på (6, 0)',
        expected: { x: 6, y: 0 },
        tolerance: 0.2,
      },
      {
        id: '1t-geom-1-c',
        type: 'point',
        name: 'C',
        description: 'C skal være på (3, 5)',
        expected: { x: 3, y: 5 },
        tolerance: 0.2,
      },
      {
        id: '1t-geom-1-d',
        type: 'exists',
        name: 't',
        description: 'Trekanten t skal eksistere',
        hint: 'Bruk t = Polygon(A, B, C)',
      },
    ],
  },
  {
    id: '1t-geom-2',
    task: 'Finn arealet av trekanten fra forrige oppgave. Lagre som a.',
    initialCommands: ['A = (0, 0)',
      'B = (6, 0)',
      'C = (3, 5)',
      't = Polygon(A, B, C)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-geom-2-a',
        type: 'value',
        name: 'a',
        description: 'Arealet skal være 15',
        expected: 15,
        tolerance: 0.5,
        hint: 'Bruk a = Area(t)',
      },
    ],
  },
  {
    id: '1t-geom-3',
    task: 'Lag en sirkel med sentrum M(0,0) og radius 5. Kall den c.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-geom-3-a',
        type: 'point',
        name: 'M',
        description: 'M skal være på (0, 0)',
        expected: { x: 0, y: 0 },
        tolerance: 0.2,
      },
      {
        id: '1t-geom-3-b',
        type: 'circle',
        name: 'c',
        description: 'Sirkelen c skal ha sentrum (0,0) og radius 5',
        center: { x: 0, y: 0 },
        radius: 5,
        tolerance: 0.2,
        hint: 'Bruk c = Circle(M, 5) eller c = Circle((0,0), 5)',
      },
    ],
  },
  {
    id: '1t-geom-4',
    task: 'Finn omkretsen av sirkelen og lagre som o.',
    initialCommands: ['M = (0, 0)',
      'c = Circle(M, 5)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-geom-4-a',
        type: 'value',
        name: 'o',
        description: 'Omkretsen skal være ca. 31.4 (2π × 5)',
        expected: 31.4159,
        tolerance: 0.5,
        hint: 'Bruk o = Perimeter(c)',
      },
    ],
  },
  {
    id: '1t-geom-5',
    task: 'Lag en trekant med hjørner A(1,1), B(4,1), C(2,3) og lag en forminsket kopi med Homoteti() med faktor 0.5 og sentrum O(0,0). Kall kopien t2.',
    initialCommands: ['A = (1, 1)',
      'B = (4, 1)',
      'C = (2, 3)',
      't1 = Polygon(A, B, C)',
      'O = (0, 0)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-geom-5-a',
        type: 'exists',
        name: 't2',
        description: 't2 skal eksistere som forminsket trekant',
        hint: 'Bruk t2 = Homoteti(t1, 0.5, O) eller t2 = Dilate(t1, 0.5, O)',
      },
    ],
  },
];

// Kapittel 5: Vektorer (introduksjon)
export const EXERCISES_1T_VEKTORER: ValidatedExercise[] = [
  {
    id: '1t-vek-1',
    task: 'Lag vektoren v fra punkt A(1,2) til B(5,7). Bruk Vector(A, B).',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-vek-1-a',
        type: 'point',
        name: 'A',
        description: 'A skal være på (1, 2)',
        expected: { x: 1, y: 2 },
        tolerance: 0.2,
      },
      {
        id: '1t-vek-1-b',
        type: 'point',
        name: 'B',
        description: 'B skal være på (5, 7)',
        expected: { x: 5, y: 7 },
        tolerance: 0.2,
      },
      {
        id: '1t-vek-1-c',
        type: 'exists',
        name: 'v',
        description: 'Vektoren v skal eksistere',
        hint: 'Bruk v = Vector(A, B)',
      },
    ],
  },
  {
    id: '1t-vek-2',
    task: 'Definer v = (3, 5) og u = (2, -1). Beregn summen og lagre som s.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-vek-2-a',
        type: 'exists',
        name: 'v',
        description: 'v skal være definert',
        hint: 'Skriv v = (3, 5)',
      },
      {
        id: '1t-vek-2-b',
        type: 'exists',
        name: 'u',
        description: 'u skal være definert',
        hint: 'Skriv u = (2, -1)',
      },
      {
        id: '1t-vek-2-c',
        type: 'exists',
        name: 's',
        description: 's skal være summen v + u',
        hint: 'Skriv s = v + u. Resultatet blir (5, 4)',
      },
    ],
  },
  {
    id: '1t-vek-3',
    task: 'Definer v = (7, 4) og u = (3, 2). Finn differansen v - u og lagre som d.',
    initialCommands: ['v = (7, 4)',
      'u = (3, 2)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-vek-3-a',
        type: 'exists',
        name: 'd',
        description: 'd skal være v - u',
        hint: 'Skriv d = v - u. Resultatet blir (4, 2)',
      },
    ],
  },
  {
    id: '1t-vek-4',
    task: 'Definer v = (2, -3). Beregn 3v og lagre som w.',
    initialCommands: ['v = (2, -3)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-vek-4-a',
        type: 'exists',
        name: 'w',
        description: 'w skal være 3v',
        hint: 'Skriv w = 3 * v. Resultatet blir (6, -9)',
      },
    ],
  },
  {
    id: '1t-vek-5',
    task: 'Finn lengden av vektoren v = (3, 4) og lagre som L.',
    initialCommands: ['v = (3, 4)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-vek-5-a',
        type: 'value',
        name: 'L',
        description: 'Lengden skal være 5',
        expected: 5,
        tolerance: 0.1,
        hint: 'Bruk L = abs(v) eller L = Length(v)',
      },
    ],
  },
];

// Kapittel 6: Trigonometri
export const EXERCISES_1T_TRIGONOMETRI: ValidatedExercise[] = [
  {
    id: '1t-trig-1',
    task: 'Lag en trekant med A(0,0), B(5,0), C(2,4). Mål vinkelen ved A og lagre som alpha.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-trig-1-a',
        type: 'point',
        name: 'A',
        description: 'A skal være på (0, 0)',
        expected: { x: 0, y: 0 },
        tolerance: 0.2,
      },
      {
        id: '1t-trig-1-b',
        type: 'point',
        name: 'B',
        description: 'B skal være på (5, 0)',
        expected: { x: 5, y: 0 },
        tolerance: 0.2,
      },
      {
        id: '1t-trig-1-c',
        type: 'point',
        name: 'C',
        description: 'C skal være på (2, 4)',
        expected: { x: 2, y: 4 },
        tolerance: 0.2,
      },
      {
        id: '1t-trig-1-d',
        type: 'exists',
        name: 'alpha',
        description: 'Vinkelen alpha skal eksistere',
        hint: 'Bruk alpha = Angle(B, A, C)',
      },
    ],
  },
  {
    id: '1t-trig-2',
    task: 'Beregn sin(30°) og lagre som s.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-trig-2-a',
        type: 'value',
        name: 's',
        description: 's skal være 0.5',
        expected: 0.5,
        tolerance: 0.01,
        hint: 'Skriv s = sin(30°)',
      },
    ],
  },
  {
    id: '1t-trig-3',
    task: 'Beregn cos(60°) og lagre som c.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-trig-3-a',
        type: 'value',
        name: 'c',
        description: 'c skal være 0.5',
        expected: 0.5,
        tolerance: 0.01,
        hint: 'Skriv c = cos(60°)',
      },
    ],
  },
  {
    id: '1t-trig-4',
    task: 'Lag en trekant med sider a = 5, b = 7, c = 8. Finn avstanden mellom to punkter som er 5 enheter fra hverandre og lagre som d.',
    initialCommands: ['A = (0, 0)',
      'B = (5, 0)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-trig-4-a',
        type: 'value',
        name: 'd',
        description: 'd skal være 5',
        expected: 5,
        tolerance: 0.1,
        hint: 'Bruk d = Distance(A, B)',
      },
    ],
  },
  {
    id: '1t-trig-5',
    task: 'Beregn arealet av en trekant med sider a = 6, b = 8 og innliggende vinkel C = 30°. Lagre som A.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '1t-trig-5-a',
        type: 'value',
        name: 'A',
        description: 'Arealet skal være 12 (0.5 × 6 × 8 × sin(30°))',
        expected: 12,
        tolerance: 0.5,
        hint: 'Bruk arealsetningen: A = 0.5 * 6 * 8 * sin(30°)',
      },
    ],
  },
];

// All exercises grouped by chapter
export const GEOGEBRA_EXERCISES_1T: Record<string, ValidatedExercise[]> = {
  '1t-algebra': EXERCISES_1T_ALGEBRA,
  '1t-funksjoner': EXERCISES_1T_FUNKSJONER,
  '1t-polynomer': EXERCISES_1T_POLYNOMER,
  '1t-geometri': EXERCISES_1T_GEOMETRI,
  '1t-vektorer-intro': EXERCISES_1T_VEKTORER,
  '1t-trigonometri': EXERCISES_1T_TRIGONOMETRI,
};

// Get total exercise count for a chapter
export function getExerciseCount(chapterId: string): number {
  return GEOGEBRA_EXERCISES_1T[chapterId]?.length || 0;
}

// Get all exercises for a chapter
export function getChapterExercises(chapterId: string): ValidatedExercise[] {
  return GEOGEBRA_EXERCISES_1T[chapterId] || [];
}
