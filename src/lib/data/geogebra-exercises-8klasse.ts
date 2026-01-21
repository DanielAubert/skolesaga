/**
 * Validated GeoGebra exercises for 8. klasse
 */

import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

// 8.1 Koordinatsystemet
export const EXERCISES_8_KOORDINATSYSTEM: ValidatedExercise[] = [
  {
    id: '8-koord-1',
    task: 'Plott punkt A på koordinatene (3, 4)',
    initialCommands: ['ZoomIn[-2, -2, 8, 8]'],
    validations: [
      {
        id: '8-koord-1-a',
        type: 'point',
        name: 'A',
        description: 'Punkt A skal være på (3, 4)',
        expected: { x: 3, y: 4 },
        tolerance: 0.2,
        hint: 'Skriv A = (3, 4) i inputfeltet og trykk Enter',
      },
    ],
  },
  {
    id: '8-koord-2',
    task: 'Plott punkt B på (-2, 5)',
    initialCommands: ['ZoomIn[-5, -2, 6, 8]'],
    validations: [
      {
        id: '8-koord-2-a',
        type: 'point',
        name: 'B',
        description: 'Punkt B skal være på (-2, 5)',
        expected: { x: -2, y: 5 },
        tolerance: 0.2,
        hint: 'Husk at negative x-verdier er til venstre for y-aksen',
      },
    ],
  },
  {
    id: '8-koord-3',
    task: 'Plott punkt C i første kvadrant (x > 0, y > 0)',
    initialCommands: ['ZoomIn[-4, -4, 10, 10]'],
    validations: [
      {
        id: '8-koord-3-a',
        type: 'quadrant',
        name: 'C',
        description: 'Punkt C skal være i første kvadrant',
        quadrant: 1,
        hint: 'Første kvadrant er øverst til høyre, der både x og y er positive',
      },
    ],
  },
  {
    id: '8-koord-4',
    task: 'Plott punkt D i tredje kvadrant (x < 0, y < 0)',
    initialCommands: ['ZoomIn[-10, -10, 4, 4]'],
    validations: [
      {
        id: '8-koord-4-a',
        type: 'quadrant',
        name: 'D',
        description: 'Punkt D skal være i tredje kvadrant',
        quadrant: 3,
        hint: 'Tredje kvadrant er nederst til venstre, der både x og y er negative',
      },
    ],
  },
  {
    id: '8-koord-5',
    task: 'Finn avstanden mellom A(1, 2) og B(4, 6). Kall avstanden d.',
    initialCommands: ['A = (1, 2)', 'B = (4, 6)', 'ZoomIn[-1, 0, 7, 9]'],
    validations: [
      {
        id: '8-koord-5-a',
        type: 'value',
        name: 'd',
        description: 'Avstanden d skal være 5',
        expected: 5,
        tolerance: 0.1,
        hint: 'Skriv: d = Avstand(A, B) i kommandolinjen.',
      },
    ],
  },
  {
    id: '8-koord-6',
    task: 'Finn midtpunktet M mellom A(2, 4) og B(6, 8)',
    initialCommands: ['A = (2, 4)', 'B = (6, 8)', 'ZoomIn[0, 2, 9, 11]'],
    validations: [
      {
        id: '8-koord-6-a',
        type: 'point',
        name: 'M',
        description: 'Midtpunktet M skal være på (4, 6)',
        expected: { x: 4, y: 6 },
        tolerance: 0.2,
        hint: 'Skriv: M = Midtpunkt(A, B) i kommandolinjen.',
      },
    ],
  },
];

// 8.2 Geometriske figurer
export const EXERCISES_8_GEOMETRI: ValidatedExercise[] = [
  {
    id: '8-geom-1',
    task: 'Lag en trekant med hjørner i A(0, 0), B(4, 0) og C(2, 3)',
    initialCommands: ['ZoomIn[-2, -2, 7, 6]'],
    validations: [
      {
        id: '8-geom-1-a',
        type: 'point',
        name: 'A',
        description: 'Punkt A skal være på (0, 0)',
        expected: { x: 0, y: 0 },
        tolerance: 0.2,
        hint: 'Start med å lage punkt A = (0, 0)',
      },
      {
        id: '8-geom-1-b',
        type: 'point',
        name: 'B',
        description: 'Punkt B skal være på (4, 0)',
        expected: { x: 4, y: 0 },
        tolerance: 0.2,
        hint: 'Lag punkt B = (4, 0)',
      },
      {
        id: '8-geom-1-c',
        type: 'point',
        name: 'C',
        description: 'Punkt C skal være på (2, 3)',
        expected: { x: 2, y: 3 },
        tolerance: 0.2,
        hint: 'Lag punkt C = (2, 3)',
      },
      {
        id: '8-geom-1-d',
        type: 'exists',
        name: 't1',
        description: 'Trekanten t1 skal eksistere',
        hint: 'Bruk kommandoen t1 = Mangekant(A, B, C) eller t1 = Polygon(A, B, C)',
      },
    ],
  },
  {
    id: '8-geom-2',
    task: 'Lag en sirkel med sentrum i origo (0, 0) og radius 3. Kall sirkelen c.',
    initialCommands: ['ZoomIn[-5, -5, 5, 5]'],
    validations: [
      {
        id: '8-geom-2-a',
        type: 'circle',
        name: 'c',
        description: 'Sirkel c skal ha sentrum (0, 0) og radius 3',
        center: { x: 0, y: 0 },
        radius: 3,
        tolerance: 0.2,
        hint: 'Bruk kommandoen c = Sirkel((0,0), 3) eller c = Circle((0,0), 3)',
      },
    ],
  },
  {
    id: '8-geom-3',
    task: 'Lag et rektangel med areal 12. Kall det r.',
    initialCommands: ['ZoomIn[-2, -2, 8, 6]'],
    validations: [
      {
        id: '8-geom-3-a',
        type: 'polygon',
        name: 'r',
        description: 'Rektangelet skal ha areal 12',
        vertexCount: 4,
        area: 12,
        tolerance: 0.5,
        hint: 'Lag 4 hjørner, f.eks. (0,0), (4,0), (4,3), (0,3) og bruk Mangekant()',
      },
    ],
  },
  {
    id: '8-geom-4',
    task: 'Finn arealet av trekanten med hjørner A(0,0), B(6,0), C(3,4). Lagre arealet i variabelen areal.',
    initialCommands: [
      'A = (0, 0)',
      'B = (6, 0)',
      'C = (3, 4)',
      't = Polygon(A, B, C)',
      'ZoomIn[-2, -2, 9, 7]',
    ],
    validations: [
      {
        id: '8-geom-4-areal',
        type: 'value',
        name: 'areal',
        description: 'Arealet skal være 12',
        expected: 12,
        tolerance: 0.1,
        hint: 'Bruk kommandoen areal = Areal(t) eller areal = Area(t)',
      },
    ],
  },
  {
    id: '8-geom-5',
    task: 'Finn omkretsen av trekanten. Lagre omkretsen i variabelen o.',
    initialCommands: [
      'A = (0, 0)',
      'B = (6, 0)',
      'C = (3, 4)',
      't = Polygon(A, B, C)',
      'ZoomIn[-2, -2, 9, 7]',
    ],
    validations: [
      {
        id: '8-geom-5-a',
        type: 'value',
        name: 'o',
        description: 'Omkretsen o skal være ca. 16',
        expected: 16,
        tolerance: 0.5,
        hint: 'Bruk kommandoen o = Omkrets(t) eller o = Perimeter(t)',
      },
    ],
  },
];

// 8.3 Statistikk og diagrammer
export const EXERCISES_8_STATISTIKK: ValidatedExercise[] = [
  {
    id: '8-stat-1',
    task: 'Lag en liste med tallene 5, 8, 12, 7, 10. Kall listen data.',
    initialCommands: ['ZoomIn[-2, -2, 15, 15]'],
    validations: [
      {
        id: '8-stat-1-a',
        type: 'exists',
        name: 'data',
        description: 'Listen data skal eksistere',
        hint: 'Skriv data = {5, 8, 12, 7, 10} i inputfeltet',
      },
    ],
  },
  {
    id: '8-stat-2',
    task: 'Finn gjennomsnittet av listen {4, 7, 9, 12, 8}. Lagre svaret i variabelen snitt.',
    initialCommands: ['liste = {4, 7, 9, 12, 8}', 'ZoomIn[-2, -2, 15, 15]'],
    validations: [
      {
        id: '8-stat-2-a',
        type: 'value',
        name: 'snitt',
        description: 'Gjennomsnittet skal være 8',
        expected: 8,
        tolerance: 0.1,
        hint: 'Skriv snitt = Mean(liste) eller snitt = Gjennomsnitt(liste)',
      },
    ],
  },
  {
    id: '8-stat-3',
    task: 'Finn medianen av listen {3, 7, 2, 9, 5, 8, 1}. Lagre svaret i variabelen med.',
    initialCommands: ['liste = {3, 7, 2, 9, 5, 8, 1}', 'ZoomIn[-2, -2, 12, 12]'],
    validations: [
      {
        id: '8-stat-3-a',
        type: 'value',
        name: 'med',
        description: 'Medianen skal være 5',
        expected: 5,
        tolerance: 0.1,
        hint: 'Skriv med = Median(liste)',
      },
    ],
  },
  {
    id: '8-stat-4',
    task: 'Lag et søylediagram av dataene {3, 5, 2, 7, 4}. Kall diagrammet diagram.',
    initialCommands: ['data = {3, 5, 2, 7, 4}', 'ZoomIn[-1, -1, 8, 10]'],
    validations: [
      {
        id: '8-stat-4-a',
        type: 'exists',
        name: 'diagram',
        description: 'Søylediagrammet skal eksistere',
        hint: 'Skriv diagram = Søylediagram(data, 1) i inputfeltet',
      },
    ],
  },
  {
    id: '8-stat-5',
    task: 'Finn variasjonsbredden (største minus minste verdi) av listen {12, 5, 18, 9, 14}. Lagre svaret i variabelen var.',
    initialCommands: ['liste = {12, 5, 18, 9, 14}', 'ZoomIn[-2, -2, 20, 20]'],
    validations: [
      {
        id: '8-stat-5-a',
        type: 'value',
        name: 'var',
        description: 'Variasjonsbredden skal være 13 (18 - 5)',
        expected: 13,
        tolerance: 0.1,
        hint: 'Skriv var = Max(liste) - Min(liste)',
      },
    ],
  },
];

// 8.4 Tall og algebra med GeoGebra
export const EXERCISES_8_TALL_ALGEBRA: ValidatedExercise[] = [
  {
    id: '8-alg-1',
    task: 'Definer variabelen a = 5',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '8-alg-1-a',
        type: 'value',
        name: 'a',
        description: 'Variabelen a skal være 5',
        expected: 5,
        tolerance: 0.01,
        hint: 'Skriv a = 5 i inputfeltet',
      },
    ],
  },
  {
    id: '8-alg-2',
    task: 'Definer a = 3 og b = 4, og beregn c = a + b',
    initialCommands: ['ZoomIn[-5, -5, 12, 12]'],
    validations: [
      {
        id: '8-alg-2-a',
        type: 'value',
        name: 'a',
        description: 'a skal være 3',
        expected: 3,
        tolerance: 0.01,
      },
      {
        id: '8-alg-2-b',
        type: 'value',
        name: 'b',
        description: 'b skal være 4',
        expected: 4,
        tolerance: 0.01,
      },
      {
        id: '8-alg-2-c',
        type: 'value',
        name: 'c',
        description: 'c skal være 7',
        expected: 7,
        tolerance: 0.01,
        hint: 'Definer c = a + b etter at du har definert a og b',
      },
    ],
  },
  {
    id: '8-alg-3',
    task: 'Beregn kvadratroten av 144. Lagre svaret i variabelen r.',
    initialCommands: ['ZoomIn[-5, -5, 15, 15]'],
    validations: [
      {
        id: '8-alg-3-a',
        type: 'value',
        name: 'r',
        description: 'r skal være 12',
        expected: 12,
        tolerance: 0.01,
        hint: 'Skriv r = sqrt(144) i inputfeltet',
      },
    ],
  },
  {
    id: '8-alg-4',
    task: 'Beregn 2^8 (2 opphøyd i 8). Lagre svaret i variabelen s.',
    initialCommands: ['ZoomIn[-10, -10, 280, 280]'],
    validations: [
      {
        id: '8-alg-4-a',
        type: 'value',
        name: 's',
        description: 's skal være 256',
        expected: 256,
        tolerance: 0.01,
        hint: 'Skriv s = 2^8 i inputfeltet',
      },
    ],
  },
  {
    id: '8-alg-5',
    task: 'Lag en glider n som går fra 1 til 10 med steg på 1',
    initialCommands: ['ZoomIn[-2, -2, 12, 12]'],
    validations: [
      {
        id: '8-alg-5-a',
        type: 'exists',
        name: 'n',
        description: 'Glideren n skal eksistere',
        hint: 'Skriv n = Glider(1, 10, 1) i inputfeltet',
      },
    ],
  },
  {
    id: '8-alg-6',
    task: 'Lag en følge med de 5 første partallene (2, 4, 6, 8, 10). Kall følgen partall.',
    initialCommands: ['ZoomIn[-2, -2, 12, 12]'],
    validations: [
      {
        id: '8-alg-6-a',
        type: 'exists',
        name: 'partall',
        description: 'Følgen partall skal eksistere',
        hint: 'Skriv partall = Følge(2*n, n, 1, 5) i inputfeltet',
      },
    ],
  },
];

// All exercises grouped by chapter
export const GEOGEBRA_EXERCISES_8KLASSE: Record<string, ValidatedExercise[]> = {
  '8-koordinatsystem': EXERCISES_8_KOORDINATSYSTEM,
  '8-geometri': EXERCISES_8_GEOMETRI,
  '8-statistikk': EXERCISES_8_STATISTIKK,
  '8-tall-algebra': EXERCISES_8_TALL_ALGEBRA,
};

// Get total exercise count for a chapter
export function getExerciseCount(chapterId: string): number {
  return GEOGEBRA_EXERCISES_8KLASSE[chapterId]?.length || 0;
}

// Get all exercises for a chapter
export function getChapterExercises(chapterId: string): ValidatedExercise[] {
  return GEOGEBRA_EXERCISES_8KLASSE[chapterId] || [];
}
