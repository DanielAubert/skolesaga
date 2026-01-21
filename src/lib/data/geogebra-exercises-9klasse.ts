/**
 * Validated GeoGebra exercises for 9. klasse
 */

import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

// 9.1 Lineære funksjoner
export const EXERCISES_9_LINEAERE: ValidatedExercise[] = [
  // Oppgave 1: Tegn en lineær funksjon (grunnleggende)
  {
    id: '9-lin-1',
    task: 'Tegn funksjonen f(x) = 2x - 3',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-lin-1-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f(x) = 2x - 3 skal tegnes',
        hint: 'Skriv f(x) = 2x - 3 i inputfeltet',
        testPoints: [
          { x: 0, expectedY: -3 },
          { x: 2, expectedY: 1 },
        ],
      },
    ],
  },
  // Oppgave 2: Finn stigningstallet med Stigning()
  {
    id: '9-lin-2',
    task: 'Tegn linjen f(x) = 3x + 1 og bruk Stigning() til å finne stigningstallet a.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-lin-2-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f(x) = 3x + 1 skal tegnes',
        hint: 'Skriv f(x) = 3x + 1',
        testPoints: [
          { x: 0, expectedY: 1 },
          { x: 1, expectedY: 4 },
        ],
      },
      {
        id: '9-lin-2-b',
        type: 'value',
        name: 'a',
        description: 'Stigningstallet a skal være 3',
        expected: 3,
        tolerance: 0.1,
        hint: 'Bruk a = Stigning(f)',
      },
    ],
  },
  // Oppgave 3: Finn konstantleddet (skjæring med y-aksen)
  {
    id: '9-lin-3',
    task: 'Tegn f(x) = -2x + 5 og marker punktet P der linjen krysser y-aksen.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-lin-3-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f(x) = -2x + 5 skal tegnes',
        testPoints: [
          { x: 0, expectedY: 5 },
          { x: 1, expectedY: 3 },
        ],
      },
      {
        id: '9-lin-3-b',
        type: 'point',
        name: 'P',
        description: 'Punktet P skal være på (0, 5) - der linjen krysser y-aksen',
        expected: { x: 0, y: 5 },
        tolerance: 0.2,
        hint: 'Konstantleddet er 5, så linjen krysser y-aksen i (0, 5). Skriv P = (0, 5) eller P = (0, f(0))',
      },
    ],
  },
  // Oppgave 4: Finn nullpunktet med Nullpunkt()
  {
    id: '9-lin-4',
    task: 'Tegn f(x) = 2x - 6 og finn nullpunktet N (der linjen krysser x-aksen).',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-lin-4-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f(x) = 2x - 6 skal tegnes',
        testPoints: [
          { x: 0, expectedY: -6 },
          { x: 3, expectedY: 0 },
        ],
      },
      {
        id: '9-lin-4-b',
        type: 'point',
        name: 'N',
        description: 'Nullpunktet N skal være på (3, 0)',
        expected: { x: 3, y: 0 },
        tolerance: 0.2,
        hint: 'Bruk N = Nullpunkt(f) eller løs 2x - 6 = 0 for å finne x = 3',
      },
    ],
  },
  // Oppgave 5: Finn skjæringspunkt med begge aksene
  {
    id: '9-lin-5',
    task: 'Tegn f(x) = x - 4. Finn skjæringspunkt med y-aksen (P) og x-aksen (Q).',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-lin-5-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f(x) = x - 4 skal tegnes',
        testPoints: [
          { x: 0, expectedY: -4 },
          { x: 4, expectedY: 0 },
        ],
      },
      {
        id: '9-lin-5-b',
        type: 'point',
        name: 'P',
        description: 'P skal være skjæringspunktet med y-aksen: (0, -4)',
        expected: { x: 0, y: -4 },
        tolerance: 0.2,
        hint: 'Skjæring med y-aksen: P = (0, f(0)) eller definer yakse: x = 0 og bruk P = Skjæring(f, yakse)',
      },
      {
        id: '9-lin-5-c',
        type: 'point',
        name: 'Q',
        description: 'Q skal være skjæringspunktet med x-aksen: (4, 0)',
        expected: { x: 4, y: 0 },
        tolerance: 0.2,
        hint: 'Bruk Q = Nullpunkt(f) eller definer xakse: y = 0 og bruk Q = Skjæring(f, xakse)',
      },
    ],
  },
  // Oppgave 6: Skjæringspunkt mellom to linjer
  {
    id: '9-lin-6',
    task: 'Tegn f(x) = x + 1 og g(x) = -x + 5, og finn skjæringspunktet S.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-lin-6-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f(x) = x + 1 skal tegnes',
        testPoints: [
          { x: 0, expectedY: 1 },
          { x: 2, expectedY: 3 },
        ],
      },
      {
        id: '9-lin-6-b',
        type: 'function',
        name: 'g',
        description: 'Funksjonen g(x) = -x + 5 skal tegnes',
        testPoints: [
          { x: 0, expectedY: 5 },
          { x: 2, expectedY: 3 },
        ],
      },
      {
        id: '9-lin-6-c',
        type: 'point',
        name: 'S',
        description: 'Skjæringspunktet S skal være på (2, 3)',
        expected: { x: 2, y: 3 },
        tolerance: 0.2,
        hint: 'Bruk S = Skjæring(f, g)',
      },
    ],
  },
  // Oppgave 7: Linje gjennom to punkter
  {
    id: '9-lin-7',
    task: 'Lag punktene A(1, 2) og B(4, 8), og tegn linjen f som går gjennom dem.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-lin-7-a',
        type: 'point',
        name: 'A',
        description: 'Punktet A skal være på (1, 2)',
        expected: { x: 1, y: 2 },
        tolerance: 0.1,
        hint: 'Skriv A = (1, 2)',
      },
      {
        id: '9-lin-7-b',
        type: 'point',
        name: 'B',
        description: 'Punktet B skal være på (4, 8)',
        expected: { x: 4, y: 8 },
        tolerance: 0.1,
        hint: 'Skriv B = (4, 8)',
      },
      {
        id: '9-lin-7-c',
        type: 'function',
        name: 'f',
        description: 'Linjen f skal gå gjennom A og B',
        testPoints: [
          { x: 1, expectedY: 2 },
          { x: 4, expectedY: 8 },
        ],
        hint: 'Bruk f = Linje(A, B) eller f(x) = 2x (stigningstall = 2, konstantledd = 0)',
      },
    ],
  },
];

// 9.2 Likninger grafisk
export const EXERCISES_9_LIKNINGER: ValidatedExercise[] = [
  {
    id: '9-likn-1',
    task: 'Løs likningen 2x + 1 = 5 grafisk. Tegn f(x) = 2x + 1 og g(x) = 5, finn skjæringspunktet med Skjæring(f, g), og lagre x-verdien som x1.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-likn-1-a',
        type: 'function',
        name: 'f',
        description: 'Tegn f(x) = 2x + 1',
        hint: 'Skriv: f(x) = 2x + 1',
        testPoints: [
          { x: 0, expectedY: 1 },
          { x: 2, expectedY: 5 },
        ],
      },
      {
        id: '9-likn-1-b',
        type: 'function',
        name: 'g',
        description: 'Tegn g(x) = 5',
        hint: 'Skriv: g(x) = 5',
        testPoints: [
          { x: 0, expectedY: 5 },
          { x: 3, expectedY: 5 },
        ],
      },
      {
        id: '9-likn-1-c',
        type: 'value',
        name: 'x1',
        description: 'Løsningen x1 skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Skriv Skjæring(f, g) for å få punktet, deretter x1 = x(A) der A er punktet',
      },
    ],
  },
  {
    id: '9-likn-2',
    task: 'Løs likningssettet x + y = 5 og x - y = 1 grafisk. Tegn eq1: x + y = 5 og eq2: x - y = 1, finn skjæringspunktet, og lagre løsningen som x1 og y1.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-likn-2-a',
        type: 'value',
        name: 'x1',
        description: 'Løsningen x1 skal være 3',
        expected: 3,
        tolerance: 0.1,
        hint: 'Skriv Skjæring(eq1, eq2) for å få punktet, deretter x1 = x(A) der A er punktet',
      },
      {
        id: '9-likn-2-b',
        type: 'value',
        name: 'y1',
        description: 'Løsningen y1 skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'y1 = y(A) der A er skjæringspunktet',
      },
    ],
  },
  {
    id: '9-likn-3',
    task: 'Løs likningen x² = 4 grafisk. Tegn f(x) = x² og g(x) = 4, finn de to skjæringspunktene, og lagre x-verdiene som x1 og x2.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-likn-3-a',
        type: 'function',
        name: 'f',
        description: 'Tegn f(x) = x²',
        hint: 'Skriv: f(x) = x^2',
        testPoints: [
          { x: 0, expectedY: 0 },
          { x: 2, expectedY: 4 },
        ],
      },
      {
        id: '9-likn-3-b',
        type: 'function',
        name: 'g',
        description: 'Tegn g(x) = 4',
        hint: 'Skriv: g(x) = 4',
        testPoints: [
          { x: 0, expectedY: 4 },
          { x: 3, expectedY: 4 },
        ],
      },
      {
        id: '9-likn-3-c',
        type: 'value',
        name: 'x1',
        description: 'Løsningen x1 skal være -2',
        expected: -2,
        tolerance: 0.2,
        hint: 'Bruk Skjæring(f, g, 1) for første punkt, deretter x1 = x(...)',
      },
      {
        id: '9-likn-3-d',
        type: 'value',
        name: 'x2',
        description: 'Løsningen x2 skal være 2',
        expected: 2,
        tolerance: 0.2,
        hint: 'Bruk Skjæring(f, g, 2) for andre punkt, deretter x2 = x(...)',
      },
    ],
  },
  {
    id: '9-likn-4',
    task: 'Løs likningssettet y = 2x + 1 og y = x + 3 grafisk. Tegn f(x) = 2x + 1 og g(x) = x + 3, finn skjæringspunktet, og lagre løsningen som x1 og y1.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-likn-4-a',
        type: 'function',
        name: 'f',
        description: 'Tegn f(x) = 2x + 1',
        hint: 'Skriv: f(x) = 2x + 1',
        testPoints: [
          { x: 0, expectedY: 1 },
          { x: 2, expectedY: 5 },
        ],
      },
      {
        id: '9-likn-4-b',
        type: 'function',
        name: 'g',
        description: 'Tegn g(x) = x + 3',
        hint: 'Skriv: g(x) = x + 3',
        testPoints: [
          { x: 0, expectedY: 3 },
          { x: 2, expectedY: 5 },
        ],
      },
      {
        id: '9-likn-4-c',
        type: 'value',
        name: 'x1',
        description: 'Løsningen x1 skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Skriv Skjæring(f, g) for å få punktet, deretter x1 = x(A) der A er punktet',
      },
      {
        id: '9-likn-4-d',
        type: 'value',
        name: 'y1',
        description: 'Løsningen y1 skal være 5',
        expected: 5,
        tolerance: 0.1,
        hint: 'y1 = y(A) der A er skjæringspunktet',
      },
    ],
  },
  {
    id: '9-likn-5',
    task: 'Bruk Løs-kommandoen til å løse likningssettet 3x + 2y = 12 og 2x - y = 1 algebraisk. Lagre x-verdien som x1 og y-verdien som y1.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-likn-5-a',
        type: 'value',
        name: 'x1',
        description: 'Løsningen x1 skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Skriv: Løs({3x + 2y = 12, 2x - y = 1}, {x, y}) og les av x-verdien',
      },
      {
        id: '9-likn-5-b',
        type: 'value',
        name: 'y1',
        description: 'Løsningen y1 skal være 3',
        expected: 3,
        tolerance: 0.1,
        hint: 'Les av y-verdien fra Løs-resultatet',
      },
    ],
  },
  {
    id: '9-likn-6',
    task: 'Løs likningen 3x - 6 = 0 grafisk. Tegn f(x) = 3x - 6 og finn nullpunktet. Lagre x-verdien som x1.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-likn-6-a',
        type: 'function',
        name: 'f',
        description: 'Tegn f(x) = 3x - 6',
        hint: 'Skriv: f(x) = 3x - 6',
        testPoints: [
          { x: 0, expectedY: -6 },
          { x: 2, expectedY: 0 },
        ],
      },
      {
        id: '9-likn-6-b',
        type: 'value',
        name: 'x1',
        description: 'Løsningen x1 skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Bruk Nullpunkt(f) for å finne hvor f krysser x-aksen, deretter x1 = x(...)',
      },
    ],
  },
];

// 9.3 Geometri og konstruksjon
export const EXERCISES_9_GEOMETRI: ValidatedExercise[] = [
  {
    id: '9-geom-1',
    task: 'Konstruer vinkelen mellom linjene f(x) = x og g(x) = -x + 4. Lagre vinkelen i v.',
    initialCommands: ['f(x) = x', 'g(x) = -x + 4', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-geom-1-a',
        type: 'value',
        name: 'v',
        description: 'Vinkelen v skal være 90° (π/2 radianer)',
        expected: 90,
        tolerance: 1,
        hint: 'Bruk v = Vinkel(f, g) for å finne vinkelen mellom linjene',
      },
    ],
  },
  {
    id: '9-geom-2',
    task: 'Lag en likesidet trekant med sidelengde 4. Ett hjørne i A(0, 0), ett i B(4, 0).',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-geom-2-a',
        type: 'point',
        name: 'A',
        description: 'Punkt A skal være på (0, 0)',
        expected: { x: 0, y: 0 },
        tolerance: 0.2,
      },
      {
        id: '9-geom-2-b',
        type: 'point',
        name: 'B',
        description: 'Punkt B skal være på (4, 0)',
        expected: { x: 4, y: 0 },
        tolerance: 0.2,
      },
      {
        id: '9-geom-2-c',
        type: 'point',
        name: 'C',
        description: 'Punkt C skal være på (2, 3.46)',
        expected: { x: 2, y: 3.46 },
        tolerance: 0.3,
        hint: 'C ligger rett over midten, i høyden h = 4 · sin(60°) ≈ 3.46',
      },
    ],
  },
  {
    id: '9-geom-3',
    task: 'Speile punkt A(2, 3) om x-aksen. Kall det speilede punktet A2.',
    initialCommands: ['A = (2, 3)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-geom-3-a',
        type: 'point',
        name: 'A2',
        description: 'A2 skal være på (2, -3)',
        expected: { x: 2, y: -3 },
        tolerance: 0.2,
        hint: 'Bruk A2 = Speiling(A, xAksen) eller A2 = Reflect(A, xAxis)',
      },
    ],
  },
  {
    id: '9-geom-4',
    task: 'Konstruer en sirkel c gjennom punktene A(0, 0), B(4, 0) og C(2, 2).',
    initialCommands: ['A = (0, 0)', 'B = (4, 0)', 'C = (2, 2)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-geom-4-a',
        type: 'exists',
        name: 'c',
        description: 'Sirkelen c skal eksistere',
        hint: 'Bruk c = Sirkel(A, B, C) eller c = Circle(A, B, C)',
      },
    ],
  },
  {
    id: '9-geom-5',
    task: 'Lag en trekant ABC og bruk Homoteti() til å lage en formlik trekant med faktor 2 fra origo. Kall den p2.',
    initialCommands: ['A = (1, 1)', 'B = (3, 1)', 'C = (2, 3)', 'p1 = Polygon(A, B, C)', 'O = (0, 0)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-geom-5-a',
        type: 'exists',
        name: 'p2',
        description: 'Den formlike trekanten p2 skal eksistere',
        hint: 'Bruk p2 = Homoteti(p1, 2, O) eller p2 = Dilate(p1, 2, O)',
      },
    ],
  },
];

// 9.4 Sentralmål og spredning
export const EXERCISES_9_STATISTIKK: ValidatedExercise[] = [
  {
    id: '9-stat-1',
    task: 'Finn gjennomsnittet av tallene 4, 7, 9, 12, 8. Lagre det i variabelen g.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-stat-1-a',
        type: 'value',
        name: 'g',
        description: 'Gjennomsnittet g skal være 8',
        expected: 8,
        tolerance: 0.1,
        hint: 'Bruk g = Gjennomsnitt({4, 7, 9, 12, 8}) eller g = Mean({4, 7, 9, 12, 8})',
      },
    ],
  },
  {
    id: '9-stat-2',
    task: 'Finn medianen av tallene 3, 7, 2, 9, 5. Lagre den i variabelen m.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-stat-2-a',
        type: 'value',
        name: 'm',
        description: 'Medianen m skal være 5',
        expected: 5,
        tolerance: 0.1,
        hint: 'Bruk m = Median({3, 7, 2, 9, 5})',
      },
    ],
  },
  {
    id: '9-stat-3',
    task: 'Finn variasjonsbredden v av tallene 2, 8, 4, 15, 6.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-stat-3-a',
        type: 'value',
        name: 'v',
        description: 'Variasjonsbredden v skal være 13 (15 - 2)',
        expected: 13,
        tolerance: 0.1,
        hint: 'Variasjonsbredde = max - min. v = 15 - 2 = 13',
      },
    ],
  },
  {
    id: '9-stat-4',
    task: 'Lag en liste L = {10, 12, 15, 12, 18, 12, 14} og finn typetallet (modus).',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-stat-4-a',
        type: 'exists',
        name: 'L',
        description: 'Listen L skal eksistere',
      },
      {
        id: '9-stat-4-b',
        type: 'value',
        name: 't',
        description: 'Typetallet t skal være 12',
        expected: 12,
        tolerance: 0.1,
        hint: 'Typetallet er det tallet som forekommer flest ganger. t = Modus(L) eller t = Mode(L)',
      },
    ],
  },
];

// 9.5 Pytagoras' setning
export const EXERCISES_9_PYTAGORAS: ValidatedExercise[] = [
  {
    id: '9-pyt-1',
    task: 'Finn hypotenusen c i en rettvinklet trekant med kateter a = 3 og b = 4.',
    initialCommands: ['a = 3', 'b = 4', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-pyt-1-a',
        type: 'value',
        name: 'c',
        description: 'Hypotenusen c skal være 5',
        expected: 5,
        tolerance: 0.1,
        hint: 'Bruk Pytagoras: c = sqrt(a² + b²) = sqrt(9 + 16) = sqrt(25) = 5',
      },
    ],
  },
  {
    id: '9-pyt-2',
    task: 'Finn kateten b i en rettvinklet trekant der a = 5 og c = 13.',
    initialCommands: ['a = 5', 'c = 13', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-pyt-2-a',
        type: 'value',
        name: 'b',
        description: 'Kateten b skal være 12',
        expected: 12,
        tolerance: 0.1,
        hint: 'b² = c² - a², så b = sqrt(169 - 25) = sqrt(144) = 12',
      },
    ],
  },
  {
    id: '9-pyt-3',
    task: 'Finn avstanden d mellom punktene A(1, 2) og B(4, 6) ved Pytagoras.',
    initialCommands: ['A = (1, 2)', 'B = (4, 6)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-pyt-3-a',
        type: 'value',
        name: 'd',
        description: 'Avstanden d skal være 5',
        expected: 5,
        tolerance: 0.1,
        hint: 'd = sqrt((4-1)² + (6-2)²) = sqrt(9 + 16) = 5',
      },
    ],
  },
  {
    id: '9-pyt-4',
    task: 'Tegn en rettvinklet trekant med kateter 6 og 8. Finn hypotenusen og arealet.',
    initialCommands: ['A = (0, 0)', 'B = (6, 0)', 'C = (0, 8)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: '9-pyt-4-a',
        type: 'exists',
        name: 't',
        description: 'Trekanten t skal eksistere',
        hint: 'Bruk t = Polygon(A, B, C)',
      },
      {
        id: '9-pyt-4-b',
        type: 'value',
        name: 'h',
        description: 'Hypotenusen h skal være 10',
        expected: 10,
        tolerance: 0.1,
        hint: 'h = sqrt(6² + 8²) = sqrt(100) = 10',
      },
      {
        id: '9-pyt-4-c',
        type: 'value',
        name: 'areal',
        description: 'Arealet skal være 24',
        expected: 24,
        tolerance: 0.5,
        hint: 'Areal = (1/2) · 6 · 8 = 24',
      },
    ],
  },
];

// All exercises grouped by chapter
export const GEOGEBRA_EXERCISES_9KLASSE: Record<string, ValidatedExercise[]> = {
  '9-lineaere-funksjoner': EXERCISES_9_LINEAERE,
  '9-likninger': EXERCISES_9_LIKNINGER,
  '9-geometri': EXERCISES_9_GEOMETRI,
  '9-statistikk': EXERCISES_9_STATISTIKK,
  '9-pytagoras': EXERCISES_9_PYTAGORAS,
};

// Get total exercise count for a chapter
export function getExerciseCount(chapterId: string): number {
  return GEOGEBRA_EXERCISES_9KLASSE[chapterId]?.length || 0;
}

// Get all exercises for a chapter
export function getChapterExercises(chapterId: string): ValidatedExercise[] {
  return GEOGEBRA_EXERCISES_9KLASSE[chapterId] || [];
}
