/**
 * Validated GeoGebra exercises for S1 - Samfunnsfaglig matematikk VG2
 *
 * Topics covered:
 * - Funksjonsanalyse (function analysis)
 * - Derivasjon (derivatives)
 * - Optimering (optimization)
 * - Regresjon og korrelasjon (regression and correlation)
 * - Økonomiske modeller (economic models)
 * - Sannsynlighetsfordelinger (probability distributions)
 */

import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

// S1.1 Funksjonsanalyse
export const EXERCISES_S1_FUNKSJONER: ValidatedExercise[] = [
  {
    id: 's1-funk-1',
    task: 'Tegn den lineære funksjonen f(x) = 2x + 3',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-funk-1-a',
        type: 'function',
        name: 'f',
        description: 'Funksjonen f skal være f(x) = 2x + 3',
        testPoints: [
          { x: 0, expectedY: 3, tolerance: 0.1 },
          { x: 1, expectedY: 5, tolerance: 0.1 },
          { x: -2, expectedY: -1, tolerance: 0.1 },
        ],
        hint: 'Skriv f(x) = 2x + 3 eller f(x) = 2*x + 3 i inputfeltet',
      },
    ],
  },
  {
    id: 's1-funk-2',
    task: 'Tegn andregradsfunksjonen g(x) = x² - 4x + 3. Finn nullpunktene og lagre dem i variablene n1 og n2 (der n1 < n2).',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-funk-2-a',
        type: 'function',
        name: 'g',
        description: 'Funksjonen g skal være g(x) = x² - 4x + 3',
        testPoints: [
          { x: 0, expectedY: 3, tolerance: 0.1 },
          { x: 2, expectedY: -1, tolerance: 0.1 },
          { x: 4, expectedY: 3, tolerance: 0.1 },
        ],
        hint: 'Skriv g(x) = x^2 - 4x + 3',
      },
      {
        id: 's1-funk-2-b',
        type: 'value',
        name: 'n1',
        description: 'Første nullpunkt n1 skal være 1',
        expected: 1,
        tolerance: 0.1,
        hint: 'Bruk kommandoen Nullpunkt(g) eller finn ved å løse x² - 4x + 3 = 0',
      },
      {
        id: 's1-funk-2-c',
        type: 'value',
        name: 'n2',
        description: 'Andre nullpunkt n2 skal være 3',
        expected: 3,
        tolerance: 0.1,
        hint: 'Løs x² - 4x + 3 = 0, nullpunktene er x = 1 og x = 3',
      },
    ],
  },
  {
    id: 's1-funk-3',
    task: 'Gitt h(x) = -x² + 6x - 5. Finn toppunktet og lagre x-koordinaten i variabelen tx og y-koordinaten i ty.',
    initialCommands: ['h(x) = -x^2 + 6*x - 5', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-funk-3-a',
        type: 'value',
        name: 'tx',
        description: 'x-koordinaten til toppunktet skal være 3',
        expected: 3,
        tolerance: 0.1,
        hint: 'For en andregradsfunksjon ax² + bx + c er toppunktet ved x = -b/(2a)',
      },
      {
        id: 's1-funk-3-b',
        type: 'value',
        name: 'ty',
        description: 'y-koordinaten til toppunktet skal være 4',
        expected: 4,
        tolerance: 0.1,
        hint: 'Regn ut h(3) for å finne y-koordinaten',
      },
    ],
  },
  {
    id: 's1-funk-4',
    task: 'Tegn den raske vekstfunksjonen k(x) = 2^x. Beregn k(3) og lagre verdien i variabelen k3.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-funk-4-a',
        type: 'function',
        name: 'k',
        description: 'Funksjonen k skal være k(x) = 2^x',
        testPoints: [
          { x: 0, expectedY: 1, tolerance: 0.1 },
          { x: 2, expectedY: 4, tolerance: 0.1 },
          { x: -1, expectedY: 0.5, tolerance: 0.1 },
        ],
        hint: 'Skriv k(x) = 2^x i inputfeltet',
      },
      {
        id: 's1-funk-4-b',
        type: 'value',
        name: 'k3',
        description: 'k(3) skal være 8',
        expected: 8,
        tolerance: 0.1,
        hint: '2^3 = 8',
      },
    ],
  },
  {
    id: 's1-funk-5',
    task: 'Tegn funksjonen m(x) = 1/x. Finn definisjonsmengden. Hva er funksjonen ved x = 2? Lagre svaret i variabelen m2.',
    initialCommands: ['m(x) = 1/x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-funk-5-a',
        type: 'value',
        name: 'm2',
        description: 'm(2) skal være 0.5',
        expected: 0.5,
        tolerance: 0.01,
        hint: 'Regn ut 1/2',
      },
    ],
  },
];

// S1.2 Derivasjon
export const EXERCISES_S1_DERIVASJON: ValidatedExercise[] = [
  {
    id: 's1-der-1',
    task: 'Finn den deriverte av f(x) = 3x² + 2x - 1. Kall den deriverte df.',
    initialCommands: ['f(x) = 3*x^2 + 2*x - 1', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-der-1-a',
        type: 'function',
        name: 'df',
        description: 'Den deriverte df skal være 6x + 2',
        testPoints: [
          { x: 0, expectedY: 2, tolerance: 0.1 },
          { x: 1, expectedY: 8, tolerance: 0.1 },
          { x: -1, expectedY: -4, tolerance: 0.1 },
        ],
        hint: 'Bruk kommandoen df(x) = Derivert(f) eller df(x) = Derivative(f)',
      },
    ],
  },
  {
    id: 's1-der-2',
    task: 'Gitt g(x) = x³ - 6x² + 9x. Finn g\'(x) og lagre den i variabelen dg.',
    initialCommands: ['g(x) = x^3 - 6*x^2 + 9*x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-der-2-a',
        type: 'function',
        name: 'dg',
        description: 'Den deriverte dg skal være 3x² - 12x + 9',
        testPoints: [
          { x: 0, expectedY: 9, tolerance: 0.1 },
          { x: 1, expectedY: 0, tolerance: 0.1 },
          { x: 3, expectedY: 0, tolerance: 0.1 },
        ],
        hint: 'Bruk potensregelen: (xⁿ)\' = n·xⁿ⁻¹',
      },
    ],
  },
  {
    id: 's1-der-3',
    task: 'Finn stigningstallet til tangenten til h(x) = x² - 4x ved punktet x = 3. Lagre verdien i variabelen a.',
    initialCommands: ['h(x) = x^2 - 4*x', 'dh(x) = Derivert(h)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-der-3-a',
        type: 'value',
        name: 'a',
        description: 'Stigningstallet ved x = 3 skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Beregn h\'(3). Den deriverte er h\'(x) = 2x - 4, så h\'(3) = 2',
      },
    ],
  },
  {
    id: 's1-der-4',
    task: 'Tegn funksjonen k(x) = 2x³ - 3x² - 12x + 1. Finn hvor funksjonen har horisontal tangent. Lagre x-verdiene i variablene h1 og h2 (der h1 < h2).',
    initialCommands: ['k(x) = 2*x^3 - 3*x^2 - 12*x + 1', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-der-4-a',
        type: 'value',
        name: 'h1',
        description: 'Første x-verdi med horisontal tangent skal være -1',
        expected: -1,
        tolerance: 0.1,
        hint: 'Løs k\'(x) = 0. Den deriverte er k\'(x) = 6x² - 6x - 12',
      },
      {
        id: 's1-der-4-b',
        type: 'value',
        name: 'h2',
        description: 'Andre x-verdi med horisontal tangent skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Løs 6x² - 6x - 12 = 0, som gir x = -1 og x = 2',
      },
    ],
  },
  {
    id: 's1-der-5',
    task: 'Gitt m(x) = √x = x^(1/2). Finn m\'(x) og beregn m\'(4). Lagre svaret i variabelen m4.',
    initialCommands: ['m(x) = sqrt(x)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-der-5-a',
        type: 'value',
        name: 'm4',
        description: 'm\'(4) skal være 0.25',
        expected: 0.25,
        tolerance: 0.01,
        hint: 'Den deriverte av √x er 1/(2√x). Ved x=4: 1/(2·2) = 0.25',
      },
    ],
  },
  {
    id: 's1-der-6',
    task: 'Finn den deriverte av p(x) = (x² + 1)(x - 2) ved å bruke produktregelen. Lagre den deriverte i dp.',
    initialCommands: ['p(x) = (x^2 + 1)*(x - 2)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-der-6-a',
        type: 'function',
        name: 'dp',
        description: 'Den deriverte dp skal være 3x² - 4x + 1',
        testPoints: [
          { x: 0, expectedY: 1, tolerance: 0.1 },
          { x: 1, expectedY: 0, tolerance: 0.1 },
          { x: 2, expectedY: 5, tolerance: 0.1 },
        ],
        hint: 'Bruk Derivert(p) eller ekspander først til p(x) = x³ - 2x² + x - 2',
      },
    ],
  },
];

// S1.3 Optimering
export const EXERCISES_S1_OPTIMERING: ValidatedExercise[] = [
  {
    id: 's1-opt-1',
    task: 'Finn maksimumspunktet til f(x) = -x² + 4x + 5. Lagre x-koordinaten i xmax og y-koordinaten i ymax.',
    initialCommands: ['f(x) = -x^2 + 4*x + 5', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-opt-1-a',
        type: 'value',
        name: 'xmax',
        description: 'x-koordinaten til maksimum skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Løs f\'(x) = 0. Den deriverte er f\'(x) = -2x + 4',
      },
      {
        id: 's1-opt-1-b',
        type: 'value',
        name: 'ymax',
        description: 'Maksimumsverdien skal være 9',
        expected: 9,
        tolerance: 0.1,
        hint: 'Regn ut f(2) = -4 + 8 + 5 = 9',
      },
    ],
  },
  {
    id: 's1-opt-2',
    task: 'En rett linje har likningen g(x) = -0.5x + 10. Finn skjæringen med x-aksen. Lagre x-verdien i variabelen sx.',
    initialCommands: ['g(x) = -0.5*x + 10', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-opt-2-a',
        type: 'value',
        name: 'sx',
        description: 'Nullpunktet sx skal være 20',
        expected: 20,
        tolerance: 0.1,
        hint: 'Løs g(x) = 0: -0.5x + 10 = 0',
      },
    ],
  },
  {
    id: 's1-opt-3',
    task: 'Et rektangel har omkrets 40 cm. La bredden være x cm. Arealet A(x) = x(20 - x). Finn den bredden som gir størst areal. Lagre bredden i variabelen bmax.',
    initialCommands: ['A(x) = x*(20 - x)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-opt-3-a',
        type: 'value',
        name: 'bmax',
        description: 'Bredden for maksimalt areal skal være 10',
        expected: 10,
        tolerance: 0.1,
        hint: 'Finn A\'(x) = 20 - 2x og løs A\'(x) = 0',
      },
    ],
  },
  {
    id: 's1-opt-4',
    task: 'Profittfunksjonen P(x) = -2x² + 80x - 200 beskriver profitt i tusen kroner når x enheter produseres. Finn produksjonsmengden som gir maksimal profitt. Lagre i xp.',
    initialCommands: ['P(x) = -2*x^2 + 80*x - 200', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-opt-4-a',
        type: 'value',
        name: 'xp',
        description: 'Produksjonsmengden for maksimal profitt skal være 20',
        expected: 20,
        tolerance: 0.1,
        hint: 'Løs P\'(x) = 0, der P\'(x) = -4x + 80',
      },
    ],
  },
  {
    id: 's1-opt-5',
    task: 'En tredjegradsfunksjon h(x) = x³ - 3x² - 9x + 5 har to ekstremalpunkter. Finn x-verdien til det lokale maksimum. Lagre i xlok.',
    initialCommands: ['h(x) = x^3 - 3*x^2 - 9*x + 5', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-opt-5-a',
        type: 'value',
        name: 'xlok',
        description: 'x-verdien til lokalt maksimum skal være -1',
        expected: -1,
        tolerance: 0.1,
        hint: 'Finn h\'(x) = 3x² - 6x - 9 og løs h\'(x) = 0. Test andrederiverte for å finne maksimum',
      },
    ],
  },
];

// S1.4 Regresjon og korrelasjon
export const EXERCISES_S1_REGRESJON: ValidatedExercise[] = [
  {
    id: 's1-reg-1',
    task: 'Gitt punktene A(1,2), B(2,4), C(3,5). Finn gjennomsnittlig x-verdi og lagre i xsnitt.',
    initialCommands: ['A = (1, 2)', 'B = (2, 4)', 'C = (3, 5)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-reg-1-a',
        type: 'value',
        name: 'xsnitt',
        description: 'Gjennomsnittlig x-verdi skal være 2',
        expected: 2,
        tolerance: 0.1,
        hint: 'Gjennomsnitt = (1 + 2 + 3)/3 = 2',
      },
    ],
  },
  {
    id: 's1-reg-2',
    task: 'For samme punkter A(1,2), B(2,4), C(3,5). Finn gjennomsnittlig y-verdi og lagre i ysnitt.',
    initialCommands: ['A = (1, 2)', 'B = (2, 4)', 'C = (3, 5)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-reg-2-a',
        type: 'value',
        name: 'ysnitt',
        description: 'Gjennomsnittlig y-verdi skal være ca. 3.67',
        expected: 3.67,
        tolerance: 0.1,
        hint: 'Gjennomsnitt = (2 + 4 + 5)/3 ≈ 3.67',
      },
    ],
  },
  {
    id: 's1-reg-3',
    task: 'Tegn en rett linje r(x) = 1.5x + 0.5 som tilnærmer punktene A(1,2), B(2,4), C(3,5).',
    initialCommands: ['A = (1, 2)', 'B = (2, 4)', 'C = (3, 5)', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-reg-3-a',
        type: 'function',
        name: 'r',
        description: 'Regresjonslinjen r skal være r(x) = 1.5x + 0.5',
        testPoints: [
          { x: 0, expectedY: 0.5, tolerance: 0.1 },
          { x: 2, expectedY: 3.5, tolerance: 0.1 },
          { x: 4, expectedY: 6.5, tolerance: 0.1 },
        ],
        hint: 'Skriv r(x) = 1.5*x + 0.5',
      },
    ],
  },
  {
    id: 's1-reg-4',
    task: 'Hvis temperaturen øker lineært fra 10°C til 30°C over 5 timer, hva er stigningstallet? Lagre i variabelen k.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-reg-4-a',
        type: 'value',
        name: 'k',
        description: 'Stigningstallet k skal være 4',
        expected: 4,
        tolerance: 0.1,
        hint: 'k = (30 - 10)/(5 - 0) = 20/5 = 4',
      },
    ],
  },
  {
    id: 's1-reg-5',
    task: 'En eksponentiell modell e(x) = 2·1.5^x passer til en viss dataserie. Beregn e(3) og lagre i e3.',
    initialCommands: ['e(x) = 2*1.5^x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-reg-5-a',
        type: 'value',
        name: 'e3',
        description: 'e(3) skal være 6.75',
        expected: 6.75,
        tolerance: 0.1,
        hint: 'e(3) = 2·1.5³ = 2·3.375 = 6.75',
      },
    ],
  },
];

// S1.5 Økonomiske modeller
export const EXERCISES_S1_OKONOMI: ValidatedExercise[] = [
  {
    id: 's1-oko-1',
    task: 'Kostnadsfunksjonen er K(x) = 1000 + 50x, der x er antall enheter. Beregn kostnaden for 20 enheter. Lagre i k20.',
    initialCommands: ['K(x) = 1000 + 50*x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-oko-1-a',
        type: 'value',
        name: 'k20',
        description: 'K(20) skal være 2000',
        expected: 2000,
        tolerance: 1,
        hint: 'K(20) = 1000 + 50·20 = 2000',
      },
    ],
  },
  {
    id: 's1-oko-2',
    task: 'Inntektsfunksjonen er I(x) = 100x. Finn grenseinntekten (den deriverte av I). Lagre i dI.',
    initialCommands: ['I(x) = 100*x', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-oko-2-a',
        type: 'function',
        name: 'dI',
        description: 'Grenseinntekten dI skal være konstant 100',
        testPoints: [
          { x: 0, expectedY: 100, tolerance: 0.1 },
          { x: 10, expectedY: 100, tolerance: 0.1 },
          { x: 50, expectedY: 100, tolerance: 0.1 },
        ],
        hint: 'Den deriverte av I(x) = 100x er I\'(x) = 100',
      },
    ],
  },
  {
    id: 's1-oko-3',
    task: 'Profittfunksjonen er P(x) = I(x) - K(x) = 100x - (1000 + 50x) = 50x - 1000. Hvor mange enheter må selges for å gå i null? Lagre i x0.',
    initialCommands: ['P(x) = 50*x - 1000', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-oko-3-a',
        type: 'value',
        name: 'x0',
        description: 'Break-even punkt x0 skal være 20',
        expected: 20,
        tolerance: 0.1,
        hint: 'Løs P(x) = 0: 50x - 1000 = 0',
      },
    ],
  },
  {
    id: 's1-oko-4',
    task: 'Tilbudet T(p) = 2p - 10 og etterspørselen E(p) = 50 - 3p, der p er pris. Finn likevektsprisen. Lagre i plikevekt.',
    initialCommands: ['T(p) = 2*p - 10', 'E(p) = 50 - 3*p', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-oko-4-a',
        type: 'value',
        name: 'plikevekt',
        description: 'Likevektsprisen skal være 12',
        expected: 12,
        tolerance: 0.1,
        hint: 'Løs T(p) = E(p): 2p - 10 = 50 - 3p',
      },
    ],
  },
  {
    id: 's1-oko-5',
    task: 'En vare koster 500 kr og øker med 3% årlig. Etter n år er prisen V(n) = 500·1.03^n. Beregn prisen etter 10 år. Lagre i v10.',
    initialCommands: ['V(n) = 500*1.03^n', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-oko-5-a',
        type: 'value',
        name: 'v10',
        description: 'Prisen etter 10 år skal være ca. 672',
        expected: 672,
        tolerance: 2,
        hint: 'V(10) = 500·1.03¹⁰ ≈ 672',
      },
    ],
  },
];

// S1.6 Sannsynlighetsfordelinger
export const EXERCISES_S1_SANNSYNLIGHET: ValidatedExercise[] = [
  {
    id: 's1-sann-1',
    task: 'En mynt kastes 10 ganger. Sannsynligheten for mynt (kron) er p = 0.5. Forventningsverdi μ = n·p. Beregn forventningsverdien og lagre i mu.',
    initialCommands: ['n = 10', 'p = 0.5', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-sann-1-a',
        type: 'value',
        name: 'mu',
        description: 'Forventningsverdien skal være 5',
        expected: 5,
        tolerance: 0.01,
        hint: 'μ = n·p = 10·0.5 = 5',
      },
    ],
  },
  {
    id: 's1-sann-2',
    task: 'For samme binomiske fordeling (n=10, p=0.5), beregn standardavviket σ = √(n·p·(1-p)). Lagre i sigma.',
    initialCommands: ['n = 10', 'p = 0.5', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-sann-2-a',
        type: 'value',
        name: 'sigma',
        description: 'Standardavviket skal være ca. 1.58',
        expected: 1.58,
        tolerance: 0.05,
        hint: 'σ = √(10·0.5·0.5) = √2.5 ≈ 1.58',
      },
    ],
  },
  {
    id: 's1-sann-3',
    task: 'En terning kastes. Sannsynligheten for å få 6 er 1/6 ≈ 0.167. Lagre denne verdien i variabelen p6.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-sann-3-a',
        type: 'value',
        name: 'p6',
        description: 'Sannsynligheten skal være ca. 0.167',
        expected: 0.167,
        tolerance: 0.01,
        hint: 'p = 1/6 ≈ 0.167',
      },
    ],
  },
  {
    id: 's1-sann-4',
    task: 'Normalfordelingen N(μ=100, σ=15) har tetthet ved x=100. For normalfordeling er tettheten størst ved μ. Beregn 100 og lagre i x100.',
    initialCommands: ['ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-sann-4-a',
        type: 'value',
        name: 'x100',
        description: 'Verdien skal være 100',
        expected: 100,
        tolerance: 0.01,
        hint: 'x = μ = 100',
      },
    ],
  },
  {
    id: 's1-sann-5',
    task: 'I en undersøkelse med n=200 og p=0.3. Beregn forventningsverdi E(X) = n·p og lagre i ex.',
    initialCommands: ['n = 200', 'p = 0.3', 'ZoomIn[-5, -5, 10, 10]'],
    validations: [
      {
        id: 's1-sann-5-a',
        type: 'value',
        name: 'ex',
        description: 'Forventningsverdien skal være 60',
        expected: 60,
        tolerance: 0.1,
        hint: 'E(X) = 200·0.3 = 60',
      },
    ],
  },
];

// All exercises grouped by chapter
export const GEOGEBRA_EXERCISES_S1: Record<string, ValidatedExercise[]> = {
  's1-funksjoner': EXERCISES_S1_FUNKSJONER,
  's1-derivasjon': EXERCISES_S1_DERIVASJON,
  's1-optimering': EXERCISES_S1_OPTIMERING,
  's1-regresjon': EXERCISES_S1_REGRESJON,
  's1-okonomi': EXERCISES_S1_OKONOMI,
  's1-sannsynlighet': EXERCISES_S1_SANNSYNLIGHET,
};

// Get total exercise count for a chapter
export function getExerciseCountS1(chapterId: string): number {
  return GEOGEBRA_EXERCISES_S1[chapterId]?.length || 0;
}

// Get all exercises for a chapter
export function getChapterExercisesS1(chapterId: string): ValidatedExercise[] {
  return GEOGEBRA_EXERCISES_S1[chapterId] || [];
}

// Get all S1 exercises (flat array)
export function getAllS1Exercises(): ValidatedExercise[] {
  return Object.values(GEOGEBRA_EXERCISES_S1).flat();
}

// Get total number of S1 exercises
export function getTotalS1ExerciseCount(): number {
  return getAllS1Exercises().length;
}
