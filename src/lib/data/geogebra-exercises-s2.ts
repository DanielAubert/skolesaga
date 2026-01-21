/**
 * Validated GeoGebra exercises for S2 (Samfunnsfaglig matematikk VG3)
 * Covers: integration, advanced functions, statistics, hypothesis testing, probability distributions
 */

import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

// S2.1 Integrasjon
export const EXERCISES_S2_INTEGRASJON: ValidatedExercise[] = [
  {
    id: 's2-int-1',
    task: 'Finn det ubestemte integralet av f(x) = 3x². Lagre svaret i variabelen F.',
    initialCommands: ['f(x) = 3x^2', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-int-1-a',
        type: 'function',
        name: 'F',
        description: 'F(x) skal være x³ (pluss en konstant)',
        testPoints: [
          { x: 0, expectedY: 0, tolerance: 0.5 },
          { x: 1, expectedY: 1, tolerance: 0.5 },
          { x: 2, expectedY: 8, tolerance: 0.5 },
          { x: -1, expectedY: -1, tolerance: 0.5 },
        ],
        hint: 'Bruk kommandoen F(x) = Integral(f) eller F(x) = x^3 + C',
      },
    ],
  },
  {
    id: 's2-int-2',
    task: 'Beregn det bestemte integralet av f(x) = 2x fra x = 0 til x = 4. Lagre svaret i variabelen I.',
    initialCommands: ['f(x) = 2x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-int-2-a',
        type: 'value',
        name: 'I',
        description: 'Integralet skal være 16',
        expected: 16,
        tolerance: 0.2,
        hint: 'Bruk kommandoen I = Integral(f, 0, 4) eller I = IntegralMellom(f, 0, 4)',
      },
    ],
  },
  {
    id: 's2-int-3',
    task: 'Finn arealet under grafen til f(x) = x² + 1 fra x = 0 til x = 3. Lagre arealet i variabelen A.',
    initialCommands: ['f(x) = x^2 + 1', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-int-3-a',
        type: 'value',
        name: 'A',
        description: 'Arealet skal være 12',
        expected: 12,
        tolerance: 0.2,
        hint: 'Bruk Integral(f, 0, 3) for å finne arealet under grafen',
      },
    ],
  },
  {
    id: 's2-int-4',
    task: 'Definer f(x) = e^x og finn integralet fra x = 0 til x = 1. Lagre i variabelen I.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-int-4-a',
        type: 'function',
        name: 'f',
        description: 'f(x) skal være e^x',
        testPoints: [
          { x: 0, expectedY: 1, tolerance: 0.1 },
          { x: 1, expectedY: 2.718, tolerance: 0.1 },
        ],
        hint: 'Definer f(x) = e^x',
      },
      {
        id: 's2-int-4-b',
        type: 'value',
        name: 'I',
        description: 'Integralet skal være ca. 1.718',
        expected: 1.718,
        tolerance: 0.1,
        hint: 'Bruk I = Integral(f, 0, 1)',
      },
    ],
  },
  {
    id: 's2-int-5',
    task: 'Finn det ubestemte integralet av f(x) = 1/x. Lagre svaret i F.',
    initialCommands: ['f(x) = 1/x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-int-5-a',
        type: 'function',
        name: 'F',
        description: 'F(x) skal være ln(x) (pluss konstant)',
        testPoints: [
          { x: 1, expectedY: 0, tolerance: 0.5 },
          { x: Math.E, expectedY: 1, tolerance: 0.5 },
          { x: 2, expectedY: Math.log(2), tolerance: 0.5 },
        ],
        hint: 'Integralet av 1/x er ln(x). Bruk F(x) = ln(x) eller F(x) = Integral(f)',
      },
    ],
  },
  {
    id: 's2-int-6',
    task: 'Beregn integralet av sin(x) fra 0 til π. Lagre i variabelen I.',
    initialCommands: ['f(x) = sin(x)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-int-6-a',
        type: 'value',
        name: 'I',
        description: 'Integralet skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Bruk I = Integral(f, 0, pi). Merk: π skrives som pi i GeoGebra',
      },
    ],
  },
];

// S2.2 Areal og volum
export const EXERCISES_S2_AREAL_VOLUM: ValidatedExercise[] = [
  {
    id: 's2-areal-1',
    task: 'Finn arealet mellom f(x) = x² og g(x) = x fra x = 0 til x = 1. Lagre i variabelen A.',
    initialCommands: ['f(x) = x^2', 'g(x) = x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-areal-1-a',
        type: 'value',
        name: 'A',
        description: 'Arealet mellom kurvene skal være 1/6 ≈ 0.167',
        expected: 0.1667,
        tolerance: 0.05,
        hint: 'Beregn A = Integral(g - f, 0, 1) siden g(x) > f(x) i intervallet',
      },
    ],
  },
  {
    id: 's2-areal-2',
    task: 'Finn arealet mellom f(x) = 4 - x² og x-aksen. Lagre i variabelen A.',
    initialCommands: ['f(x) = 4 - x^2', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-areal-2-a',
        type: 'value',
        name: 'A',
        description: 'Arealet skal være ca. 10.67',
        expected: 10.67,
        tolerance: 0.2,
        hint: 'Finn først nullpunktene (-2 og 2), deretter bruk Integral(f, -2, 2)',
      },
    ],
  },
  {
    id: 's2-areal-3',
    task: 'Beregn volumet når området under f(x) = √x fra x = 0 til x = 4 roteres rundt x-aksen. Lagre i V.',
    initialCommands: ['f(x) = sqrt(x)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-areal-3-a',
        type: 'value',
        name: 'V',
        description: 'Volumet skal være 8π ≈ 25.13',
        expected: 25.13,
        tolerance: 0.5,
        hint: 'Formel for omdreiningsvolum: V = π·Integral(f(x)², a, b). Bruk V = pi * Integral(f^2, 0, 4)',
      },
    ],
  },
  {
    id: 's2-areal-4',
    task: 'Finn arealet mellom f(x) = e^x og x-aksen fra x = 0 til x = 2. Lagre i A.',
    initialCommands: ['f(x) = e^x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-areal-4-a',
        type: 'value',
        name: 'A',
        description: 'Arealet skal være ca. 6.39',
        expected: 6.389,
        tolerance: 0.2,
        hint: 'Bruk A = Integral(f, 0, 2)',
      },
    ],
  },
  {
    id: 's2-areal-5',
    task: 'Finn arealet mellom f(x) = sin(x) og x-aksen fra x = 0 til x = π. Lagre i A.',
    initialCommands: ['f(x) = sin(x)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-areal-5-a',
        type: 'value',
        name: 'A',
        description: 'Arealet skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Bruk A = Integral(f, 0, pi)',
      },
    ],
  },
];

// S2.3 Differensiallikninger
export const EXERCISES_S2_DIFFLIKNING: ValidatedExercise[] = [
  {
    id: 's2-diff-1',
    task: 'Løs differensiallikningen y\' = 2x med initialbetingelse y(0) = 1. Lagre løsningen i y.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-diff-1-a',
        type: 'function',
        name: 'y',
        description: 'Løsningen skal være y(x) = x² + 1',
        testPoints: [
          { x: 0, expectedY: 1, tolerance: 0.1 },
          { x: 1, expectedY: 2, tolerance: 0.1 },
          { x: 2, expectedY: 5, tolerance: 0.1 },
          { x: -1, expectedY: 2, tolerance: 0.1 },
        ],
        hint: 'Integrer y\' for å finne y: y(x) = x² + C. Bruk y(0) = 1 for å finne C = 1',
      },
    ],
  },
  {
    id: 's2-diff-2',
    task: 'Løs y\' = y med y(0) = 1. Dette er eksponentiell vekst. Lagre løsningen i y.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-diff-2-a',
        type: 'function',
        name: 'y',
        description: 'Løsningen skal være y(x) = e^x',
        testPoints: [
          { x: 0, expectedY: 1, tolerance: 0.1 },
          { x: 1, expectedY: 2.718, tolerance: 0.1 },
          { x: 2, expectedY: 7.389, tolerance: 0.2 },
        ],
        hint: 'Løsningen er y(x) = e^x siden deriverten av e^x er e^x selv',
      },
    ],
  },
  {
    id: 's2-diff-3',
    task: 'Løs y\' = -0.5y med y(0) = 100. Dette modellerer eksponentiell nedbrytning. Lagre i y.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-diff-3-a',
        type: 'function',
        name: 'y',
        description: 'Løsningen skal være y(x) = 100e^(-0.5x)',
        testPoints: [
          { x: 0, expectedY: 100, tolerance: 1 },
          { x: 2, expectedY: 36.79, tolerance: 1 },
          { x: 4, expectedY: 13.53, tolerance: 1 },
        ],
        hint: 'Løsningen er y(x) = 100 * e^(-0.5x). Definer y(x) = 100 * e^(-0.5x)',
      },
    ],
  },
  {
    id: 's2-diff-4',
    task: 'En populasjon vokser med y\' = 0.03y, y(0) = 1000. Finn befolkningen etter 10 år. Lagre i P.',
    initialCommands: ['y(x) = 1000 * e^(0.03x)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-diff-4-a',
        type: 'value',
        name: 'P',
        description: 'Befolkningen etter 10 år skal være ca. 1350',
        expected: 1349.86,
        tolerance: 5,
        hint: 'Beregn P = y(10) for å finne befolkningen etter 10 år',
      },
    ],
  },
  {
    id: 's2-diff-5',
    task: 'Løs y\' = 3 med y(0) = 5. Lagre løsningen i y.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-diff-5-a',
        type: 'function',
        name: 'y',
        description: 'Løsningen skal være y(x) = 3x + 5',
        testPoints: [
          { x: 0, expectedY: 5, tolerance: 0.1 },
          { x: 1, expectedY: 8, tolerance: 0.1 },
          { x: 2, expectedY: 11, tolerance: 0.1 },
        ],
        hint: 'Integrer konstanten 3 for å få y(x) = 3x + C. Bruk y(0) = 5 for å finne C = 5',
      },
    ],
  },
];

// S2.4 Statistisk inferens
export const EXERCISES_S2_STATISTIKK: ValidatedExercise[] = [
  {
    id: 's2-stat-1',
    task: 'Gitt utvalg: 5, 7, 8, 9, 11. Beregn gjennomsnittet x̄. Lagre i variabelen m.',
    initialCommands: ['data = {5, 7, 8, 9, 11}', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-stat-1-a',
        type: 'value',
        name: 'm',
        description: 'Gjennomsnittet skal være 8',
        expected: 8,
        tolerance: 0.1,
        hint: 'Bruk m = Gjennomsnitt(data) eller m = Mean(data)',
      },
    ],
  },
  {
    id: 's2-stat-2',
    task: 'For samme datasett, beregn standardavviket s. Lagre i variabelen s.',
    initialCommands: ['data = {5, 7, 8, 9, 11}', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-stat-2-a',
        type: 'value',
        name: 's',
        description: 'Standardavviket skal være ca. 2.24',
        expected: 2.236,
        tolerance: 0.2,
        hint: 'Bruk s = Standardavvik(data) eller s = SD(data) for utvalgsstandardavvik',
      },
    ],
  },
  {
    id: 's2-stat-3',
    task: 'Beregn 95% konfidensintervall når x̄ = 50, s = 10, n = 25. Finn nedre grense L.',
    initialCommands: ['xbar = 50', 's = 10', 'n = 25', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-stat-3-a',
        type: 'value',
        name: 'L',
        description: 'Nedre grense skal være ca. 46.08 (med t-verdi 2.064)',
        expected: 45.87,
        tolerance: 1,
        hint: 'Formel: L = xbar - t * s / sqrt(n). For n=25 (df=24) er t ≈ 2.064. Bruk L = 50 - 2.064 * 10 / sqrt(25)',
      },
    ],
  },
  {
    id: 's2-stat-4',
    task: 'For samme konfidensintervall, finn øvre grense U.',
    initialCommands: ['xbar = 50', 's = 10', 'n = 25', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-stat-4-a',
        type: 'value',
        name: 'U',
        description: 'Øvre grense skal være ca. 54.13',
        expected: 54.13,
        tolerance: 1,
        hint: 'Formel: U = xbar + t * s / sqrt(n). Bruk U = 50 + 2.064 * 10 / sqrt(25)',
      },
    ],
  },
  {
    id: 's2-stat-5',
    task: 'Beregn testobservator z når x̄ = 105, μ₀ = 100, σ = 15, n = 36. Lagre i z.',
    initialCommands: ['xbar = 105', 'mu0 = 100', 'sigma = 15', 'n = 36', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-stat-5-a',
        type: 'value',
        name: 'z',
        description: 'z-verdien skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Formel: z = (xbar - mu0) / (sigma / sqrt(n)). Bruk z = (105 - 100) / (15 / sqrt(36))',
      },
    ],
  },
  {
    id: 's2-stat-6',
    task: 'For datasett {12, 15, 18, 20, 25}, finn medianen. Lagre i variabelen med.',
    initialCommands: ['data = {12, 15, 18, 20, 25}', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-stat-6-a',
        type: 'value',
        name: 'med',
        description: 'Medianen skal være 18',
        expected: 18,
        tolerance: 0.1,
        hint: 'Bruk med = Median(data)',
      },
    ],
  },
];

// S2.5 Kontinuerlige fordelinger (normalfordeling)
export const EXERCISES_S2_SANNSYNLIGHET: ValidatedExercise[] = [
  {
    id: 's2-sann-1',
    task: 'X ~ N(100, 15). Beregn P(X < 115). Lagre i variabelen p.',
    initialCommands: ['mu = 100', 'sigma = 15', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-sann-1-a',
        type: 'value',
        name: 'p',
        description: 'Sannsynligheten skal være ca. 0.841',
        expected: 0.8413,
        tolerance: 0.05,
        hint: 'Bruk p = Normal(mu, sigma, 115, true) for å finne P(X < 115)',
      },
    ],
  },
  {
    id: 's2-sann-2',
    task: 'Standardiser X = 130 når μ = 100 og σ = 15. Finn z-verdien. Lagre i z.',
    initialCommands: ['X = 130', 'mu = 100', 'sigma = 15', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-sann-2-a',
        type: 'value',
        name: 'z',
        description: 'z-verdien skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Formel: z = (X - mu) / sigma. Bruk z = (130 - 100) / 15',
      },
    ],
  },
  {
    id: 's2-sann-3',
    task: 'X ~ N(50, 8). Beregn P(X > 58). Lagre i variabelen p.',
    initialCommands: ['mu = 50', 'sigma = 8', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-sann-3-a',
        type: 'value',
        name: 'p',
        description: 'Sannsynligheten skal være ca. 0.159',
        expected: 0.1587,
        tolerance: 0.05,
        hint: 'Bruk p = 1 - Normal(mu, sigma, 58, true) for P(X > 58)',
      },
    ],
  },
  {
    id: 's2-sann-4',
    task: 'X ~ N(0, 1). Finn P(-1 < X < 1). Lagre i p.',
    initialCommands: ['mu = 0', 'sigma = 1', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-sann-4-a',
        type: 'value',
        name: 'p',
        description: 'Sannsynligheten skal være ca. 0.683',
        expected: 0.6827,
        tolerance: 0.05,
        hint: 'Bruk p = Normal(0, 1, 1, true) - Normal(0, 1, -1, true)',
      },
    ],
  },
  {
    id: 's2-sann-5',
    task: 'X ~ N(70, 10). Finn verdien a slik at P(X < a) = 0.95. Lagre i a.',
    initialCommands: ['mu = 70', 'sigma = 10', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-sann-5-a',
        type: 'value',
        name: 'a',
        description: 'Verdien skal være ca. 86.45',
        expected: 86.45,
        tolerance: 1,
        hint: 'Bruk a = InverseNormal(mu, sigma, 0.95) for å finne persentilen',
      },
    ],
  },
  {
    id: 's2-sann-6',
    task: 'IQ-skårer har N(100, 15). Finn P(85 < X < 115). Lagre i p.',
    initialCommands: ['mu = 100', 'sigma = 15', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's2-sann-6-a',
        type: 'value',
        name: 'p',
        description: 'Sannsynligheten skal være ca. 0.683',
        expected: 0.6827,
        tolerance: 0.05,
        hint: 'Dette er P(μ - σ < X < μ + σ). Bruk p = Normal(100, 15, 115, true) - Normal(100, 15, 85, true)',
      },
    ],
  },
];

// All exercises grouped by chapter
export const GEOGEBRA_EXERCISES_S2: Record<string, ValidatedExercise[]> = {
  's2-integrasjon': EXERCISES_S2_INTEGRASJON,
  's2-areal-volum': EXERCISES_S2_AREAL_VOLUM,
  's2-difflikning': EXERCISES_S2_DIFFLIKNING,
  's2-statistikk': EXERCISES_S2_STATISTIKK,
  's2-sannsynlighet': EXERCISES_S2_SANNSYNLIGHET,
};

// Get total exercise count for a chapter
export function getS2ExerciseCount(chapterId: string): number {
  return GEOGEBRA_EXERCISES_S2[chapterId]?.length || 0;
}

// Get all exercises for a chapter
export function getS2ChapterExercises(chapterId: string): ValidatedExercise[] {
  return GEOGEBRA_EXERCISES_S2[chapterId] || [];
}

// Get all S2 chapters with exercise counts
export function getS2ChapterSummary() {
  return Object.entries(GEOGEBRA_EXERCISES_S2).map(([chapterId, exercises]) => ({
    chapterId,
    exerciseCount: exercises.length,
  }));
}
