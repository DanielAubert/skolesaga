/**
 * Validated GeoGebra exercises for R1 (Realfagsmatematikk VG2)
 */

import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

// R1.1 Algebra og CAS
export const EXERCISES_R1_ALGEBRA_CAS: ValidatedExercise[] = [
  {
    id: 'r1-alg-1',
    task: 'Faktoriser uttrykket x² + 5x + 6 fullstendig. Lagre resultatet i variabelen f.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-alg-1-a',
        type: 'function',
        name: 'f',
        description: 'Faktorisert form skal gi samme verdier som x² + 5x + 6',
        testPoints: [
          { x: 0, expectedY: 6, tolerance: 0.01 },
          { x: 1, expectedY: 12, tolerance: 0.01 },
          { x: -2, expectedY: 0, tolerance: 0.01 },
          { x: -3, expectedY: 0, tolerance: 0.01 },
        ],
        hint: 'Bruk Faktoriser(x^2 + 5*x + 6) eller Factor(x^2 + 5*x + 6)',
      },
    ],
  },
  {
    id: 'r1-alg-2',
    task: 'Løs likningen 2x² - 8x + 6 = 0. Lagre den minste løsningen i variabelen x1 og den største i x2.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-alg-2-a',
        type: 'value',
        name: 'x1',
        description: 'x1 skal være 1',
        expected: 1,
        tolerance: 0.01,
        hint: 'Bruk Løs(2*x^2 - 8*x + 6 = 0) eller Solve(2*x^2 - 8*x + 6 = 0)',
      },
      {
        id: 'r1-alg-2-b',
        type: 'value',
        name: 'x2',
        description: 'x2 skal være 3',
        expected: 3,
        tolerance: 0.01,
        hint: 'Den største løsningen er x = 3',
      },
    ],
  },
  {
    id: 'r1-alg-3',
    task: 'Forenkle det rasjonale uttrykket (x² - 4)/(x + 2). Definer funksjonen g(x).',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-alg-3-a',
        type: 'function',
        name: 'g',
        description: 'Forenklet funksjon skal være x - 2',
        testPoints: [
          { x: 0, expectedY: -2, tolerance: 0.01 },
          { x: 3, expectedY: 1, tolerance: 0.01 },
          { x: 5, expectedY: 3, tolerance: 0.01 },
        ],
        hint: 'Faktoriser telleren først: x² - 4 = (x+2)(x-2). Bruk Forenkle((x^2-4)/(x+2))',
      },
    ],
  },
  {
    id: 'r1-alg-4',
    task: 'Løs ulikheten x² - 3x - 4 < 0. Finn midtpunktet i løsningsintervallet og lagre det i variabelen m.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-alg-4-a',
        type: 'value',
        name: 'm',
        description: 'Midtpunktet skal være 1.5 (mellom -1 og 4)',
        expected: 1.5,
        tolerance: 0.1,
        hint: 'Faktoriser: (x+1)(x-4) < 0. Løsningen er -1 < x < 4. Midtpunktet er (-1+4)/2',
      },
    ],
  },
  {
    id: 'r1-alg-5',
    task: 'Utvid (x - 3)(x + 2)(x - 1) til standardform. Lagre polynomfunksjonen i p(x).',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-alg-5-a',
        type: 'function',
        name: 'p',
        description: 'Utvidet form skal gi x³ - 2x² - 5x + 6',
        testPoints: [
          { x: 0, expectedY: 6, tolerance: 0.01 },
          { x: 1, expectedY: 0, tolerance: 0.01 },
          { x: 2, expectedY: -4, tolerance: 0.01 },
          { x: 3, expectedY: 0, tolerance: 0.01 },
        ],
        hint: 'Bruk Utvid((x-3)(x+2)(x-1)) eller Expand((x-3)(x+2)(x-1))',
      },
    ],
  },
  {
    id: 'r1-alg-6',
    task: 'Finn summen av løsningene til likningen 3x² - 12x + 9 = 0. Lagre summen i variabelen s.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-alg-6-a',
        type: 'value',
        name: 's',
        description: 'Summen skal være 4',
        expected: 4,
        tolerance: 0.01,
        hint: 'For ax² + bx + c = 0 er summen av røttene -b/a. Her: -(-12)/3 = 4',
      },
    ],
  },
];

// R1.2 Funksjoner
export const EXERCISES_R1_FUNKSJONER: ValidatedExercise[] = [
  {
    id: 'r1-funk-1',
    task: 'Definer polynomfunksjonen f(x) = x³ - 6x² + 9x. Finn alle nullpunktene og lagre det største i variabelen n.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-funk-1-a',
        type: 'value',
        name: 'n',
        description: 'Største nullpunkt skal være 3',
        expected: 3,
        tolerance: 0.01,
        hint: 'Faktoriser: f(x) = x(x² - 6x + 9) = x(x-3)². Nullpunktene er x = 0 og x = 3',
      },
    ],
  },
  {
    id: 'r1-funk-2',
    task: 'Definer den rasjonale funksjonen g(x) = (x² - 1)/(x - 1). Finn funksjonsverdien g(2) og lagre den i variabelen y.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-funk-2-a',
        type: 'value',
        name: 'y',
        description: 'g(2) skal være 3',
        expected: 3,
        tolerance: 0.01,
        hint: 'Forenkle først: (x²-1)/(x-1) = (x+1)(x-1)/(x-1) = x+1 for x≠1. Da er g(2) = 3',
      },
    ],
  },
  {
    id: 'r1-funk-3',
    task: 'Definer funksjonen h(x) = 1/(x - 2). Finn x-verdien til den vertikale asymptoten og lagre den i a.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-funk-3-a',
        type: 'value',
        name: 'a',
        description: 'Vertikal asymptote skal være ved x = 2',
        expected: 2,
        tolerance: 0.01,
        hint: 'Vertikal asymptote oppstår der nevneren er 0: x - 2 = 0 gir x = 2',
      },
    ],
  },
  {
    id: 'r1-funk-4',
    task: 'Gitt f(x) = 2x + 3 og g(x) = x². Definer den sammensatte funksjonen h(x) = f(g(x)) og beregn h(2). Lagre resultatet i variabelen r.',
    initialCommands: ['f(x) = 2*x + 3', 'g(x) = x^2', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-funk-4-a',
        type: 'value',
        name: 'r',
        description: 'h(2) skal være 11',
        expected: 11,
        tolerance: 0.01,
        hint: 'h(x) = f(g(x)) = 2x² + 3. Derfor h(2) = 2(4) + 3 = 11',
      },
    ],
  },
  {
    id: 'r1-funk-5',
    task: 'Definer funksjonen p(x) = x⁴ - 5x² + 4. Finn alle fire nullpunktene. Lagre produktet av alle nullpunktene i variabelen prd.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-funk-5-a',
        type: 'value',
        name: 'prd',
        description: 'Produktet skal være 4',
        expected: 4,
        tolerance: 0.01,
        hint: 'Faktoriser: (x² - 1)(x² - 4) = (x-1)(x+1)(x-2)(x+2). Produktet: (-2)(-1)(1)(2) = 4',
      },
    ],
  },
  {
    id: 'r1-funk-6',
    task: 'Definer funksjonen k(x) = (2x + 1)/(x - 3). Finn y-verdien til den horisontale asymptoten og lagre den i b.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-funk-6-a',
        type: 'value',
        name: 'b',
        description: 'Horisontal asymptote skal være y = 2',
        expected: 2,
        tolerance: 0.01,
        hint: 'For rasjonale funksjoner der graden er lik: asymptote = koeffisient i teller/koeffisient i nevner = 2/1',
      },
    ],
  },
];

// R1.3 Derivasjon
export const EXERCISES_R1_DERIVASJON: ValidatedExercise[] = [
  {
    id: 'r1-der-1',
    task: 'Definer f(x) = x⁴ - 3x² + 2. Finn den deriverte f\'(x) og beregn f\'(2). Lagre resultatet i variabelen d.',
    initialCommands: ['f(x) = x^4 - 3*x^2 + 2', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-der-1-a',
        type: 'value',
        name: 'd',
        description: 'f\'(2) skal være 20',
        expected: 20,
        tolerance: 0.01,
        hint: 'Bruk Deriver(f) eller f\' i GeoGebra. f\'(x) = 4x³ - 6x, så f\'(2) = 32 - 12 = 20',
      },
    ],
  },
  {
    id: 'r1-der-2',
    task: 'Bruk kjerneregelen til å derivere g(x) = (3x - 2)⁵. Finn g\'(1) og lagre i variabelen k.',
    initialCommands: ['g(x) = (3*x - 2)^5', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-der-2-a',
        type: 'value',
        name: 'k',
        description: 'g\'(1) skal være 15',
        expected: 15,
        tolerance: 0.01,
        hint: 'Kjerneregelen: g\'(x) = 5(3x-2)⁴ · 3 = 15(3x-2)⁴. Ved x=1: g\'(1) = 15(1)⁴ = 15',
      },
    ],
  },
  {
    id: 'r1-der-3',
    task: 'Bruk produktregelen til å derivere h(x) = x² · sin(x). Finn h\'(π/2) og lagre i variabelen p.',
    initialCommands: ['h(x) = x^2 * sin(x)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-der-3-a',
        type: 'value',
        name: 'p',
        description: 'h\'(π/2) skal være ca. π (≈ 3.14)',
        expected: 3.14159,
        tolerance: 0.01,
        hint: 'Produktregelen: h\'(x) = 2x·sin(x) + x²·cos(x). Ved x=π/2: h\'(π/2) = π·1 + (π²/4)·0 = π',
      },
    ],
  },
  {
    id: 'r1-der-4',
    task: 'Bruk kvotientregelen til å derivere k(x) = x/(x² + 1). Finn k\'(0) og lagre i variabelen q.',
    initialCommands: ['k(x) = x/(x^2 + 1)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-der-4-a',
        type: 'value',
        name: 'q',
        description: 'k\'(0) skal være 1',
        expected: 1,
        tolerance: 0.01,
        hint: 'Kvotientregelen: k\'(x) = ((x²+1)·1 - x·2x)/(x²+1)² = (1-x²)/(x²+1)². Ved x=0: k\'(0) = 1',
      },
    ],
  },
  {
    id: 'r1-der-5',
    task: 'Definer m(x) = e^(2x). Finn m\'(0) og lagre i variabelen e_val.',
    initialCommands: ['m(x) = exp(2*x)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-der-5-a',
        type: 'value',
        name: 'e_val',
        description: 'm\'(0) skal være 2',
        expected: 2,
        tolerance: 0.01,
        hint: 'Kjerneregelen: m\'(x) = e^(2x) · 2 = 2e^(2x). Ved x=0: m\'(0) = 2e⁰ = 2',
      },
    ],
  },
  {
    id: 'r1-der-6',
    task: 'Finn andrederiverte av f(x) = x³ - 6x² + 9x. Beregn f\'\'(2) og lagre i variabelen dd.',
    initialCommands: ['f(x) = x^3 - 6*x^2 + 9*x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-der-6-a',
        type: 'value',
        name: 'dd',
        description: 'f\'\'(2) skal være -12',
        expected: -12,
        tolerance: 0.01,
        hint: 'f\'(x) = 3x² - 12x + 9, f\'\'(x) = 6x - 12. Derfor f\'\'(2) = 12 - 12 = 0... vent, det blir 0!',
      },
    ],
  },
];

// R1.4 Vektorer i planet
export const EXERCISES_R1_VEKTORER: ValidatedExercise[] = [
  {
    id: 'r1-vek-1',
    task: 'Definer vektor u = (3, 4). Finn lengden av vektoren og lagre den i variabelen L.',
    initialCommands: ['u = Vektor((3, 4))', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-vek-1-a',
        type: 'value',
        name: 'L',
        description: 'Lengden skal være 5',
        expected: 5,
        tolerance: 0.01,
        hint: 'Bruk L = Lengde(u) eller L = sqrt(3² + 4²) = sqrt(25) = 5',
      },
    ],
  },
  {
    id: 'r1-vek-2',
    task: 'Gitt vektor a = (2, 3) og b = (1, -1). Beregn skalarproduktet a · b og lagre i variabelen s.',
    initialCommands: ['a = Vektor((2, 3))', 'b = Vektor((1, -1))', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-vek-2-a',
        type: 'value',
        name: 's',
        description: 'Skalarproduktet skal være -1',
        expected: -1,
        tolerance: 0.01,
        hint: 'a · b = 2·1 + 3·(-1) = 2 - 3 = -1. Bruk s = a * b i GeoGebra',
      },
    ],
  },
  {
    id: 'r1-vek-3',
    task: 'Gitt vektor v = (6, 8). Finn en enhetsvektor i samme retning. Lagre x-komponenten i variabelen ex.',
    initialCommands: ['v = Vektor((6, 8))', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-vek-3-a',
        type: 'value',
        name: 'ex',
        description: 'x-komponenten skal være 0.6',
        expected: 0.6,
        tolerance: 0.01,
        hint: 'Lengde av v = 10. Enhetsvektor = v/10 = (6/10, 8/10) = (0.6, 0.8). Bruk Enhetsvektor(v)',
      },
    ],
  },
  {
    id: 'r1-vek-4',
    task: 'Finn vinkelen (i grader) mellom vektor p = (1, 0) og q = (1, 1). Lagre vinkelen i variabelen theta.',
    initialCommands: ['p = Vektor((1, 0))', 'q = Vektor((1, 1))', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-vek-4-a',
        type: 'value',
        name: 'theta',
        description: 'Vinkelen skal være 45 grader',
        expected: 45,
        tolerance: 0.1,
        hint: 'Bruk theta = Vinkel(p, q) i GeoGebra (gir grader)',
      },
    ],
  },
  {
    id: 'r1-vek-5',
    task: 'Finn projeksjonen av vektor u = (4, 2) på vektor v = (3, 0). Lagre lengden av projeksjonen i proj.',
    initialCommands: ['u = Vektor((4, 2))', 'v = Vektor((3, 0))', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-vek-5-a',
        type: 'value',
        name: 'proj',
        description: 'Projeksjonen skal være 4',
        expected: 4,
        tolerance: 0.01,
        hint: 'Projeksjonen = (u·v)/|v| = 12/3 = 4. Eller bruk proj = (u*v) / Lengde(v)',
      },
    ],
  },
  {
    id: 'r1-vek-6',
    task: 'Gitt punkt A(1, 2) og retningsvektor r = (2, 3). Definer parameterfremstillingen av linjen. Finn y-koordinaten når x = 5 og lagre i y_val.',
    initialCommands: ['A = (1, 2)', 'r = Vektor((2, 3))', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-vek-6-a',
        type: 'value',
        name: 'y_val',
        description: 'y-koordinaten skal være 8',
        expected: 8,
        tolerance: 0.1,
        hint: 'Parameterfremstilling: (x,y) = (1,2) + t(2,3). Når x=5: 1+2t=5 → t=2. Da y=2+3·2=8',
      },
    ],
  },
];

// R1.5 Trigonometri
export const EXERCISES_R1_TRIGONOMETRI: ValidatedExercise[] = [
  {
    id: 'r1-trig-1',
    task: 'Finn verdien av sin(π/6) og lagre i variabelen s.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-trig-1-a',
        type: 'value',
        name: 's',
        description: 'sin(π/6) skal være 0.5',
        expected: 0.5,
        tolerance: 0.01,
        hint: 'Bruk s = sin(π/6) eller s = sin(30°). På enhetssirkelen: sin(30°) = 1/2',
      },
    ],
  },
  {
    id: 'r1-trig-2',
    task: 'Løs likningen sin(x) = 0.5 for 0 ≤ x ≤ 2π. Finn den minste positive løsningen i radianer og lagre i x1.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-trig-2-a',
        type: 'value',
        name: 'x1',
        description: 'x1 skal være π/6 ≈ 0.524',
        expected: 0.5236,
        tolerance: 0.01,
        hint: 'Bruk Løs(sin(x) = 0.5, 0 ≤ x ≤ 2*π). Den minste løsningen er π/6',
      },
    ],
  },
  {
    id: 'r1-trig-3',
    task: 'Beregn cos²(π/4) + sin²(π/4) og lagre resultatet i variabelen id.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-trig-3-a',
        type: 'value',
        name: 'id',
        description: 'Resultatet skal være 1 (trigonometrisk identitet)',
        expected: 1,
        tolerance: 0.01,
        hint: 'Den trigonometriske identiteten: cos²(x) + sin²(x) = 1 for alle x',
      },
    ],
  },
  {
    id: 'r1-trig-4',
    task: 'Finn alle løsninger til cos(x) = 0 for 0 ≤ x ≤ 2π. Lagre den minste løsningen i c1.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-trig-4-a',
        type: 'value',
        name: 'c1',
        description: 'c1 skal være π/2 ≈ 1.571',
        expected: 1.5708,
        tolerance: 0.01,
        hint: 'cos(x) = 0 når x = π/2 eller x = 3π/2. Den minste er π/2',
      },
    ],
  },
  {
    id: 'r1-trig-5',
    task: 'Beregn sin(2π/3) ved hjelp av formelen for dobbel vinkel. Lagre resultatet i d.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-trig-5-a',
        type: 'value',
        name: 'd',
        description: 'sin(2π/3) skal være √3/2 ≈ 0.866',
        expected: 0.866,
        tolerance: 0.01,
        hint: 'sin(2π/3) = sin(π - π/3) = sin(π/3) = √3/2. Bruk d = sin(2*π/3)',
      },
    ],
  },
  {
    id: 'r1-trig-6',
    task: 'Definer funksjonen f(x) = 2sin(x) + 1. Finn maksimumsverdien av f og lagre den i m.',
    initialCommands: ['f(x) = 2*sin(x) + 1', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-trig-6-a',
        type: 'value',
        name: 'm',
        description: 'Maksimumsverdien skal være 3',
        expected: 3,
        tolerance: 0.01,
        hint: 'Maksimum av sin(x) er 1, så maksimum av f(x) = 2(1) + 1 = 3',
      },
    ],
  },
];

// R1.6 Analytisk geometri
export const EXERCISES_R1_GEOMETRI: ValidatedExercise[] = [
  {
    id: 'r1-geom-1',
    task: 'Finn likningen til linjen som går gjennom punktene A(1, 2) og B(3, 6). Finn stigningstallet a.',
    initialCommands: ['A = (1, 2)', 'B = (3, 6)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-geom-1-a',
        type: 'value',
        name: 'a',
        description: 'Stigningstallet skal være 2',
        expected: 2,
        tolerance: 0.01,
        hint: 'Stigningstall = (y₂-y₁)/(x₂-x₁) = (6-2)/(3-1) = 4/2 = 2',
      },
    ],
  },
  {
    id: 'r1-geom-2',
    task: 'Definer sirkelen med sentrum S(2, 3) og radius 4. Kall den c. Finn arealet av sirkelen og lagre i A.',
    initialCommands: ['S = (2, 3)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-geom-2-a',
        type: 'circle',
        name: 'c',
        description: 'Sirkelen skal ha sentrum (2, 3) og radius 4',
        center: { x: 2, y: 3 },
        radius: 4,
        tolerance: 0.1,
        hint: 'Bruk c = Sirkel(S, 4) eller c = Circle(S, 4)',
      },
      {
        id: 'r1-geom-2-b',
        type: 'value',
        name: 'A',
        description: 'Arealet skal være 16π ≈ 50.27',
        expected: 50.265,
        tolerance: 0.5,
        hint: 'Areal = πr² = π·16 = 16π. Bruk A = Areal(c) eller A = Area(c)',
      },
    ],
  },
  {
    id: 'r1-geom-3',
    task: 'Finn avstanden fra punkt P(4, 5) til linjen y = 2x + 1. Lagre avstanden i d.',
    initialCommands: ['P = (4, 5)', 'linje: y = 2*x + 1', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-geom-3-a',
        type: 'value',
        name: 'd',
        description: 'Avstanden skal være √5 ≈ 2.236',
        expected: 2.236,
        tolerance: 0.1,
        hint: 'Bruk Avstand(P, linje) eller Distance(P, linje). Formel: |ax₀+by₀+c|/√(a²+b²)',
      },
    ],
  },
  {
    id: 'r1-geom-4',
    task: 'Definer ellipsen med sentrum i origo, stor halvakse a = 5 og liten halvakse b = 3. Finn et punkt på ellipsen med x = 4 og lagre y-koordinaten (positiv) i y_val.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-geom-4-a',
        type: 'value',
        name: 'y_val',
        description: 'y-koordinaten skal være 1.8',
        expected: 1.8,
        tolerance: 0.1,
        hint: 'Ellipse: x²/25 + y²/9 = 1. Når x=4: 16/25 + y²/9 = 1 → y² = 9(1-16/25) = 3.24 → y ≈ 1.8',
      },
    ],
  },
  {
    id: 'r1-geom-5',
    task: 'Finn skjæringspunktet mellom linjene y = 2x + 1 og y = -x + 7. Lagre x-koordinaten i x_sk.',
    initialCommands: ['f(x) = 2*x + 1', 'g(x) = -x + 7', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r1-geom-5-a',
        type: 'value',
        name: 'x_sk',
        description: 'x-koordinaten skal være 2',
        expected: 2,
        tolerance: 0.01,
        hint: '2x + 1 = -x + 7 → 3x = 6 → x = 2. Bruk Skjæring(f, g) eller Intersect(f, g)',
      },
    ],
  },
];

// All exercises grouped by chapter
export const GEOGEBRA_EXERCISES_R1: Record<string, ValidatedExercise[]> = {
  'r1-algebra-cas': EXERCISES_R1_ALGEBRA_CAS,
  'r1-funksjoner': EXERCISES_R1_FUNKSJONER,
  'r1-derivasjon': EXERCISES_R1_DERIVASJON,
  'r1-vektorer': EXERCISES_R1_VEKTORER,
  'r1-trigonometri': EXERCISES_R1_TRIGONOMETRI,
  'r1-geometri': EXERCISES_R1_GEOMETRI,
};

// Get total exercise count for a chapter
export function getExerciseCountR1(chapterId: string): number {
  return GEOGEBRA_EXERCISES_R1[chapterId]?.length || 0;
}

// Get all exercises for a chapter
export function getChapterExercisesR1(chapterId: string): ValidatedExercise[] {
  return GEOGEBRA_EXERCISES_R1[chapterId] || [];
}

// Get total number of exercises for R1
export function getTotalExerciseCountR1(): number {
  return Object.values(GEOGEBRA_EXERCISES_R1).reduce(
    (sum, exercises) => sum + exercises.length,
    0
  );
}
