/**
 * Validated GeoGebra exercises for R2 (Realfag matematikk VG3)
 */

import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

// R2.1 Integrasjonsteknikker
export const EXERCISES_R2_INTEGRASJON: ValidatedExercise[] = [
  {
    id: 'r2-int-1',
    task: 'Bruk delvis integrasjon til å finne ∫x·eˣ dx. Lagre resultatet i variabelen f.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-int-1-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen skal være x·eˣ - eˣ (pluss en vilkårlig konstant)',
        testPoints: [
          { x: 0, expectedY: -1, tolerance: 0.1 },
          { x: 1, expectedY: 0, tolerance: 0.1 },
          { x: 2, expectedY: Math.E ** 2, tolerance: 0.2 },
        ],
        hint: 'Bruk kommandoen f = Integral(x * e^x). Velg u = x og dv = e^x dx',
      },
    ],
  },
  {
    id: 'r2-int-2',
    task: 'Bruk substitusjon til å finne ∫2x·cos(x²) dx. Lagre resultatet i variabelen g.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-int-2-a',
        type: 'function',
        name: 'g',
        description: 'Funksjonen skal være sin(x²)',
        testPoints: [
          { x: 0, expectedY: 0, tolerance: 0.1 },
          { x: Math.sqrt(Math.PI / 2), expectedY: 1, tolerance: 0.1 },
          { x: Math.sqrt(Math.PI), expectedY: 0, tolerance: 0.1 },
        ],
        hint: 'Bruk kommandoen g = Integral(2x * cos(x^2)). La u = x²',
      },
    ],
  },
  {
    id: 'r2-int-3',
    task: 'Bruk Delbrøker() til å spalte opp (3x + 5)/(x² - x - 2). Lagre resultatet i variabelen h.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-int-3-a',
        type: 'exists',
        name: 'h',
        description: 'Delbrøkoppspaltingen h skal eksistere',
        hint: 'Bruk kommandoen h = Delbrøker((3x + 5) / (x^2 - x - 2))',
      },
    ],
  },
  {
    id: 'r2-int-4',
    task: 'Beregn det uegentlige integralet ∫₁^∞ (1/x²) dx. Lagre svaret i variabelen v.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-int-4-a',
        type: 'value',
        name: 'v',
        description: 'v skal være 1',
        expected: 1,
        tolerance: 0.01,
        hint: 'Bruk kommandoen v = Integral(1/x^2, 1, infinity)',
      },
    ],
  },
  {
    id: 'r2-int-5',
    task: 'Finn integralet av ln(x). Lagre resultatet i variabelen i.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-int-5-a',
        type: 'function',
        name: 'i',
        description: 'Funksjonen skal være x·ln(x) - x',
        testPoints: [
          { x: 1, expectedY: -1, tolerance: 0.1 },
          { x: Math.E, expectedY: 0, tolerance: 0.1 },
        ],
        hint: 'Bruk kommandoen i = Integral(ln(x)). Velg u = ln(x) og dv = dx',
      },
    ],
  },
  {
    id: 'r2-int-6',
    task: 'Beregn ∫₀^∞ e⁻ˣ dx. Lagre svaret i variabelen k.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-int-6-a',
        type: 'value',
        name: 'k',
        description: 'k skal være 1',
        expected: 1,
        tolerance: 0.01,
        hint: 'Bruk kommandoen k = Integral(e^(-x), 0, infinity)',
      },
    ],
  },
];

// R2.2 Differensiallikninger
export const EXERCISES_R2_DIFFLIKNING: ValidatedExercise[] = [
  {
    id: 'r2-diff-1',
    task: 'Løs differensiallikningen y\' = 2x. Lagre løsningen i variabelen y.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-diff-1-a',
        type: 'function',
        name: 'y',
        description: 'Løsningen skal være x² (pluss en konstant)',
        testPoints: [
          { x: 0, expectedY: 0, tolerance: 0.5 },
          { x: 1, expectedY: 1, tolerance: 0.5 },
          { x: 2, expectedY: 4, tolerance: 0.5 },
        ],
        hint: 'Bruk kommandoen y = LøsDL(y\' = 2x) eller y = Integral(2x)',
      },
    ],
  },
  {
    id: 'r2-diff-2',
    task: 'Løs y\' = y med initialbetingelse y(0) = 3. Lagre løsningen i variabelen f.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-diff-2-a',
        type: 'function',
        name: 'f',
        description: 'Løsningen skal være 3·eˣ',
        testPoints: [
          { x: 0, expectedY: 3, tolerance: 0.1 },
          { x: 1, expectedY: 3 * Math.E, tolerance: 0.2 },
          { x: 2, expectedY: 3 * Math.E ** 2, tolerance: 0.5 },
        ],
        hint: 'Bruk kommandoen f = LøsDL(y\' = y, (0, 3)) eller f = 3 * e^x',
      },
    ],
  },
  {
    id: 'r2-diff-3',
    task: 'Lag et retningsfelt for y\' = x - y. Lagre retningsfeltet i variabelen r.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-diff-3-a',
        type: 'exists',
        name: 'r',
        description: 'Retningsfeltet r skal eksistere',
        hint: 'Bruk kommandoen r = Retningsfelt(x - y)',
      },
    ],
  },
  {
    id: 'r2-diff-4',
    task: 'Løs den separable likningen y\' = xy med y(0) = 2. Lagre løsningen i variabelen g.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-diff-4-a',
        type: 'function',
        name: 'g',
        description: 'Løsningen skal være 2·e^(x²/2)',
        testPoints: [
          { x: 0, expectedY: 2, tolerance: 0.1 },
          { x: 1, expectedY: 2 * Math.exp(0.5), tolerance: 0.2 },
        ],
        hint: 'Bruk kommandoen g = LøsDL(y\' = x*y, (0, 2))',
      },
    ],
  },
  {
    id: 'r2-diff-5',
    task: 'Løs andreordens likningen y\'\' = -4y. Lagre løsningen i variabelen h.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-diff-5-a',
        type: 'exists',
        name: 'h',
        description: 'Løsningen h skal eksistere',
        hint: 'Bruk kommandoen h = LøsDL(y\'\' = -4y). Løsningen er en kombinasjon av sin(2x) og cos(2x)',
      },
    ],
  },
  {
    id: 'r2-diff-6',
    task: 'Løs vekstmodellen y\' = 0.5·y·(4 - y) med y(0) = 1. Lagre løsningen i variabelen p.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-diff-6-a',
        type: 'function',
        name: 'p',
        description: 'Løsningen skal være en logistisk funksjon med grense 4',
        testPoints: [
          { x: 0, expectedY: 1, tolerance: 0.2 },
          { x: 10, expectedY: 4, tolerance: 0.5 },
        ],
        hint: 'Bruk kommandoen p = LøsDL(y\' = 0.5*y*(4-y), (0, 1)). Dette er en logistisk modell',
      },
    ],
  },
];

// R2.3 Vektorer i rommet (3D)
export const EXERCISES_R2_VEKTORER_3D: ValidatedExercise[] = [
  {
    id: 'r2-vek3d-1',
    task: 'Definer 3D-vektoren a = (2, 3, 4)',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-vek3d-1-a',
        type: 'exists',
        name: 'a',
        description: 'Vektoren a skal eksistere',
        hint: 'Skriv a = (2, 3, 4) i inputfeltet',
      },
    ],
  },
  {
    id: 'r2-vek3d-2',
    task: 'Finn lengden av vektoren v = (3, 4, 12). Lagre lengden i variabelen L.',
    initialCommands: ['v = (3, 4, 12)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-vek3d-2-a',
        type: 'value',
        name: 'L',
        description: 'Lengden L skal være 13',
        expected: 13,
        tolerance: 0.01,
        hint: 'Bruk kommandoen L = Lengde(v) eller L = abs(v)',
      },
    ],
  },
  {
    id: 'r2-vek3d-3',
    task: 'Beregn skalarproduktet av a = (1, 2, 3) og b = (4, 5, 6). Lagre i variabelen s.',
    initialCommands: ['a = (1, 2, 3)', 'b = (4, 5, 6)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-vek3d-3-a',
        type: 'value',
        name: 's',
        description: 's skal være 32',
        expected: 32,
        tolerance: 0.1,
        hint: 'Bruk kommandoen s = a * b eller s = Skalar(a, b)',
      },
    ],
  },
  {
    id: 'r2-vek3d-4',
    task: 'Beregn kryssproduktet av a = (1, 0, 0) og b = (0, 1, 0). Lagre i variabelen k.',
    initialCommands: ['a = (1, 0, 0)', 'b = (0, 1, 0)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-vek3d-4-a',
        type: 'exists',
        name: 'k',
        description: 'Kryssproduktet k skal eksistere og være (0, 0, 1)',
        hint: 'Bruk kommandoen k = Kryss(a, b) eller k = Cross(a, b)',
      },
    ],
  },
  {
    id: 'r2-vek3d-5',
    task: 'Finn vinkelen mellom a = (1, 1, 1) og b = (1, 0, 0). Lagre vinkelen i grader i variabelen v.',
    initialCommands: ['a = (1, 1, 1)', 'b = (1, 0, 0)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-vek3d-5-a',
        type: 'value',
        name: 'v',
        description: 'Vinkelen v skal være ca. 54.74 grader',
        expected: 54.74,
        tolerance: 0.5,
        hint: 'Bruk kommandoen v = Vinkel(a, b) eller beregn arccos((a·b)/(|a||b|))',
      },
    ],
  },
  {
    id: 'r2-vek3d-6',
    task: 'Lag et plan gjennom punktet P = (1, 2, 3) med normalvektor n = (1, 1, 1). Lagre planet i variabelen alpha.',
    initialCommands: ['P = (1, 2, 3)', 'n = (1, 1, 1)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-vek3d-6-a',
        type: 'exists',
        name: 'alpha',
        description: 'Planet alpha skal eksistere',
        hint: 'Bruk kommandoen alpha = Plan(P, n) eller alpha = Plane(P, n)',
      },
    ],
  },
];

// R2.4 Romgeometri
export const EXERCISES_R2_ROMGEOMETRI: ValidatedExercise[] = [
  {
    id: 'r2-romgeom-1',
    task: 'Lag en linje gjennom punktene A = (0, 0, 0) og B = (1, 1, 1). Lagre linjen i variabelen L.',
    initialCommands: ['A = (0, 0, 0)', 'B = (1, 1, 1)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-romgeom-1-a',
        type: 'exists',
        name: 'L',
        description: 'Linjen L skal eksistere',
        hint: 'Bruk kommandoen L = Linje(A, B) eller L = Line(A, B)',
      },
    ],
  },
  {
    id: 'r2-romgeom-2',
    task: 'Lag planet med likning x + y + z = 6. Lagre i variabelen alpha.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-romgeom-2-a',
        type: 'exists',
        name: 'alpha',
        description: 'Planet alpha skal eksistere',
        hint: 'Skriv alpha = x + y + z = 6 i inputfeltet',
      },
    ],
  },
  {
    id: 'r2-romgeom-3',
    task: 'Finn avstanden fra punktet P = (1, 2, 3) til origo. Lagre i variabelen d.',
    initialCommands: ['P = (1, 2, 3)', 'O = (0, 0, 0)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-romgeom-3-a',
        type: 'value',
        name: 'd',
        description: 'd skal være √14 ≈ 3.742',
        expected: Math.sqrt(14),
        tolerance: 0.01,
        hint: 'Bruk kommandoen d = Avstand(P, O) eller d = Distance(P, O)',
      },
    ],
  },
  {
    id: 'r2-romgeom-4',
    task: 'Finn avstanden fra punktet Q = (2, 3, 4) til planet x + y + z = 0. Lagre i variabelen a.',
    initialCommands: ['Q = (2, 3, 4)', 'alpha = x + y + z = 0', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-romgeom-4-a',
        type: 'value',
        name: 'a',
        description: 'Avstanden a skal være 9/√3 ≈ 5.196',
        expected: 9 / Math.sqrt(3),
        tolerance: 0.1,
        hint: 'Bruk kommandoen a = Avstand(Q, alpha)',
      },
    ],
  },
  {
    id: 'r2-romgeom-5',
    task: 'Finn skjæringen mellom linjen L: (x,y,z) = (1,0,0) + t(1,1,0) og planet z = 0. Lagre skjæringspunktet i S.',
    initialCommands: ['L = Linje((1,0,0), (2,1,0))', 'alpha = z = 0', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-romgeom-5-a',
        type: 'exists',
        name: 'S',
        description: 'Skjæringspunktet S skal eksistere',
        hint: 'Bruk kommandoen S = Skjæring(L, alpha) eller S = Intersect(L, alpha)',
      },
    ],
  },
];

// R2.5 Rekker og følger
export const EXERCISES_R2_REKKER: ValidatedExercise[] = [
  {
    id: 'r2-rekke-1',
    task: 'Lag den aritmetiske følgen a(n) = 3n + 2 for n = 1 til 10. Lagre som liste i variabelen L.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-rekke-1-a',
        type: 'exists',
        name: 'L',
        description: 'Listen L skal eksistere',
        hint: 'Bruk kommandoen L = Følge(3n + 2, n, 1, 10) eller L = Sequence(3n + 2, n, 1, 10)',
      },
    ],
  },
  {
    id: 'r2-rekke-2',
    task: 'Beregn summen av den aritmetiske rekken 1 + 4 + 7 + ... + 100. Lagre i variabelen S.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-rekke-2-a',
        type: 'value',
        name: 'S',
        description: 'Summen S skal være 1717',
        expected: 1717,
        tolerance: 1,
        hint: 'Bruk kommandoen S = Sum(Følge(3n - 2, n, 1, 34)) siden a₁ = 1, d = 3, og a₃₄ = 100',
      },
    ],
  },
  {
    id: 'r2-rekke-3',
    task: 'Lag den geometriske følgen g(n) = 2^n for n = 0 til 8. Lagre som liste i variabelen G.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-rekke-3-a',
        type: 'exists',
        name: 'G',
        description: 'Listen G skal eksistere',
        hint: 'Bruk kommandoen G = Følge(2^n, n, 0, 8)',
      },
    ],
  },
  {
    id: 'r2-rekke-4',
    task: 'Beregn summen av den geometriske rekken 1 + 1/2 + 1/4 + ... + 1/256. Lagre i variabelen R.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-rekke-4-a',
        type: 'value',
        name: 'R',
        description: 'Summen R skal være nær 2 (255/128)',
        expected: 255 / 128,
        tolerance: 0.01,
        hint: 'Bruk kommandoen R = Sum(Følge(1/2^n, n, 0, 8))',
      },
    ],
  },
  {
    id: 'r2-rekke-5',
    task: 'Beregn grenseverdien av den uendelige geometriske rekken 1 + 1/3 + 1/9 + 1/27 + ... Lagre i variabelen U.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-rekke-5-a',
        type: 'value',
        name: 'U',
        description: 'Grenseverdien U skal være 1.5',
        expected: 1.5,
        tolerance: 0.01,
        hint: 'Bruk formelen a/(1-r) = 1/(1-1/3) = 3/2, eller beregn U = Grense(Sum(Følge(1/3^n, n, 0, k)), k, infinity)',
      },
    ],
  },
];

// R2.6 Avansert funksjonsanalyse
export const EXERCISES_R2_FUNKSJONSANALYSE: ValidatedExercise[] = [
  {
    id: 'r2-funk-1',
    task: 'Finn grenseverdien lim(x→0) (sin(x)/x). Lagre i variabelen L.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-funk-1-a',
        type: 'value',
        name: 'L',
        description: 'Grenseverdien L skal være 1',
        expected: 1,
        tolerance: 0.01,
        hint: 'Bruk kommandoen L = Grense(sin(x)/x, x, 0) eller L = Limit(sin(x)/x, x, 0)',
      },
    ],
  },
  {
    id: 'r2-funk-2',
    task: 'Finn grenseverdien lim(x→∞) (3x² + 2x)/(x² - 1). Lagre i variabelen M.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-funk-2-a',
        type: 'value',
        name: 'M',
        description: 'Grenseverdien M skal være 3',
        expected: 3,
        tolerance: 0.01,
        hint: 'Bruk kommandoen M = Grense((3x^2 + 2x)/(x^2 - 1), x, infinity)',
      },
    ],
  },
  {
    id: 'r2-funk-3',
    task: 'Bruk L\'Hôpitals regel til å finne lim(x→0) (e^x - 1)/x. Lagre i variabelen H.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-funk-3-a',
        type: 'value',
        name: 'H',
        description: 'Grenseverdien H skal være 1',
        expected: 1,
        tolerance: 0.01,
        hint: 'Bruk kommandoen H = Grense((e^x - 1)/x, x, 0). GeoGebra bruker L\'Hôpital automatisk',
      },
    ],
  },
  {
    id: 'r2-funk-4',
    task: 'Sjekk om funksjonen f(x) = |x| er kontinuerlig i x = 0. Lagre f(0) i variabelen K.',
    initialCommands: ['f(x) = abs(x)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-funk-4-a',
        type: 'value',
        name: 'K',
        description: 'K skal være 0',
        expected: 0,
        tolerance: 0.01,
        hint: 'Bruk kommandoen K = f(0). Funksjonen er kontinuerlig hvis grenseverdien eksisterer og er lik f(0)',
      },
    ],
  },
  {
    id: 'r2-funk-5',
    task: 'Finn første Taylor-polynom (grad 2) for f(x) = eˣ rundt x = 0. Lagre i variabelen T.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-funk-5-a',
        type: 'function',
        name: 'T',
        description: 'T skal være tilnærmet 1 + x + x²/2',
        testPoints: [
          { x: 0, expectedY: 1, tolerance: 0.1 },
          { x: 1, expectedY: 2.5, tolerance: 0.1 },
        ],
        hint: 'Bruk kommandoen T = TaylorPolynom(e^x, 0, 2) eller T = 1 + x + x^2/2',
      },
    ],
  },
  {
    id: 'r2-funk-6',
    task: 'Finn grenseverdien lim(x→∞) (1 + 1/x)^x. Lagre i variabelen E.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 'r2-funk-6-a',
        type: 'value',
        name: 'E',
        description: 'Grenseverdien E skal være e ≈ 2.718',
        expected: Math.E,
        tolerance: 0.01,
        hint: 'Bruk kommandoen E = Grense((1 + 1/x)^x, x, infinity). Dette er definisjonen av e',
      },
    ],
  },
];

// All exercises grouped by chapter
export const GEOGEBRA_EXERCISES_R2: Record<string, ValidatedExercise[]> = {
  'r2-integrasjon': EXERCISES_R2_INTEGRASJON,
  'r2-difflikning': EXERCISES_R2_DIFFLIKNING,
  'r2-vektorer-3d': EXERCISES_R2_VEKTORER_3D,
  'r2-romgeometri': EXERCISES_R2_ROMGEOMETRI,
  'r2-rekker': EXERCISES_R2_REKKER,
  'r2-funksjonsanalyse': EXERCISES_R2_FUNKSJONSANALYSE,
};

// Get total exercise count for a chapter
export function getExerciseCountR2(chapterId: string): number {
  return GEOGEBRA_EXERCISES_R2[chapterId]?.length || 0;
}

// Get all exercises for a chapter
export function getChapterExercisesR2(chapterId: string): ValidatedExercise[] {
  return GEOGEBRA_EXERCISES_R2[chapterId] || [];
}

// Get all R2 exercise counts
export function getAllR2ExerciseCounts(): Record<string, number> {
  return Object.keys(GEOGEBRA_EXERCISES_R2).reduce((acc, key) => {
    acc[key] = GEOGEBRA_EXERCISES_R2[key].length;
    return acc;
  }, {} as Record<string, number>);
}
