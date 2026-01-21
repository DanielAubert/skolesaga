/**
 * Matematikkmotor - TypeScript-typer
 *
 * Typer for steg-for-steg validering av matematiske uttrykk og likninger.
 */

export type MathEngineType = 'arithmetic' | 'algebra' | 'hybrid';

export interface ValidationStep {
  stepIndex: number;
  expression: string;
  isValid: boolean;
  feedback: string;
  rule?: string;           // Hvilken matematisk regel som ble brukt
  confidence: number;      // 0-1, hvor sikker motoren er
}

export interface ValidationResult {
  isValid: boolean;
  isComplete: boolean;     // Om løsningen er ferdig
  steps: ValidationStep[];
  finalAnswer?: string;
  feedback: string;
  suggestions?: string[];
  usedAIFallback: boolean;
}

export interface MathProblem {
  type: MathEngineType;
  expression: string;
  expectedAnswer?: string;
  targetVariable?: string;  // For likninger, f.eks. "x"
  allowAlternativeMethods?: boolean;
}

// Aritmetikk-spesifikke typer

export interface ArithmeticOperation {
  operator: '+' | '-' | '*' | '/' | '^';
  operands: (number | ArithmeticOperation)[];
  result: number;
}

export interface ArithmeticStep {
  expression: string;
  operation?: string;       // f.eks. "Multipliserer 3 * 4"
  result: string;
  rule: ArithmeticRule;
}

export type ArithmeticRule =
  | 'addition'
  | 'subtraction'
  | 'multiplication'
  | 'division'
  | 'exponentiation'
  | 'parentheses'
  | 'order-of-operations'
  | 'negative-numbers'
  | 'fractions'
  | 'decimals'
  | 'percentage';

// Algebra-spesifikke typer

export interface AlgebraicExpression {
  type: 'variable' | 'constant' | 'operation' | 'equation';
  value?: string | number;
  operator?: string;
  left?: AlgebraicExpression;
  right?: AlgebraicExpression;
}

export interface AlgebraStep {
  expression: string;
  operation?: string;       // f.eks. "Adderer 5 på begge sider"
  result: string;
  rule: AlgebraRule;
}

export type AlgebraRule =
  | 'collect-like-terms'
  | 'distribute'
  | 'factor'
  | 'add-both-sides'
  | 'subtract-both-sides'
  | 'multiply-both-sides'
  | 'divide-both-sides'
  | 'simplify'
  | 'substitute'
  | 'isolate-variable'
  | 'combine-fractions'
  | 'cross-multiply';

// Tilbakemeldingstyper

export interface RuleDescription {
  id: ArithmeticRule | AlgebraRule;
  name: string;            // Norsk navn
  description: string;     // Forklaring
  example?: string;
}

export const ARITHMETIC_RULES: Record<ArithmeticRule, RuleDescription> = {
  'addition': {
    id: 'addition',
    name: 'Addisjon',
    description: 'Legger sammen to tall',
    example: '3 + 5 = 8',
  },
  'subtraction': {
    id: 'subtraction',
    name: 'Subtraksjon',
    description: 'Trekker et tall fra et annet',
    example: '8 - 3 = 5',
  },
  'multiplication': {
    id: 'multiplication',
    name: 'Multiplikasjon',
    description: 'Ganger to tall sammen',
    example: '4 × 3 = 12',
  },
  'division': {
    id: 'division',
    name: 'Divisjon',
    description: 'Deler et tall på et annet',
    example: '12 ÷ 4 = 3',
  },
  'exponentiation': {
    id: 'exponentiation',
    name: 'Potens',
    description: 'Opphøyer et tall i en potens',
    example: '2³ = 8',
  },
  'parentheses': {
    id: 'parentheses',
    name: 'Parenteser',
    description: 'Regner ut innholdet i parentesen først',
    example: '(3 + 2) × 4 = 5 × 4 = 20',
  },
  'order-of-operations': {
    id: 'order-of-operations',
    name: 'Regnerekkefølge',
    description: 'Potens før multiplikasjon/divisjon før addisjon/subtraksjon',
    example: '2 + 3 × 4 = 2 + 12 = 14',
  },
  'negative-numbers': {
    id: 'negative-numbers',
    name: 'Negative tall',
    description: 'Regler for regning med negative tall',
    example: '-3 × -2 = 6',
  },
  'fractions': {
    id: 'fractions',
    name: 'Brøkregning',
    description: 'Regler for regning med brøker',
    example: '1/2 + 1/4 = 2/4 + 1/4 = 3/4',
  },
  'decimals': {
    id: 'decimals',
    name: 'Desimaltall',
    description: 'Regning med desimaltall',
    example: '0.5 + 0.25 = 0.75',
  },
  'percentage': {
    id: 'percentage',
    name: 'Prosent',
    description: 'Regning med prosent',
    example: '20% av 50 = 10',
  },
};

export const ALGEBRA_RULES: Record<AlgebraRule, RuleDescription> = {
  'collect-like-terms': {
    id: 'collect-like-terms',
    name: 'Samle like ledd',
    description: 'Slår sammen ledd med samme variabel',
    example: '3x + 2x = 5x',
  },
  'distribute': {
    id: 'distribute',
    name: 'Distribuere',
    description: 'Multipliserer et tall med hvert ledd i en parentes',
    example: '2(x + 3) = 2x + 6',
  },
  'factor': {
    id: 'factor',
    name: 'Faktorisere',
    description: 'Trekker ut felles faktor',
    example: '6x + 9 = 3(2x + 3)',
  },
  'add-both-sides': {
    id: 'add-both-sides',
    name: 'Addere på begge sider',
    description: 'Legger til samme tall på begge sider av likhetstegnet',
    example: 'x - 5 = 10 → x = 15',
  },
  'subtract-both-sides': {
    id: 'subtract-both-sides',
    name: 'Subtrahere på begge sider',
    description: 'Trekker fra samme tall på begge sider av likhetstegnet',
    example: 'x + 3 = 8 → x = 5',
  },
  'multiply-both-sides': {
    id: 'multiply-both-sides',
    name: 'Multiplisere på begge sider',
    description: 'Multipliserer begge sider med samme tall',
    example: 'x/2 = 5 → x = 10',
  },
  'divide-both-sides': {
    id: 'divide-both-sides',
    name: 'Dividere på begge sider',
    description: 'Deler begge sider på samme tall',
    example: '3x = 12 → x = 4',
  },
  'simplify': {
    id: 'simplify',
    name: 'Forenkle',
    description: 'Forenkler et uttrykk',
    example: '2x + 3 - x + 1 = x + 4',
  },
  'substitute': {
    id: 'substitute',
    name: 'Sette inn',
    description: 'Setter inn en verdi for en variabel',
    example: 'Hvis x = 3: 2x + 1 = 2(3) + 1 = 7',
  },
  'isolate-variable': {
    id: 'isolate-variable',
    name: 'Isolere variabel',
    description: 'Får variabelen alene på én side',
    example: '2x + 4 = 10 → 2x = 6 → x = 3',
  },
  'combine-fractions': {
    id: 'combine-fractions',
    name: 'Slå sammen brøker',
    description: 'Finner fellesnevner og slår sammen',
    example: 'x/2 + x/3 = 3x/6 + 2x/6 = 5x/6',
  },
  'cross-multiply': {
    id: 'cross-multiply',
    name: 'Kryss-multiplisere',
    description: 'Kryssmultipliserer i en brøklikning',
    example: 'x/3 = 4/6 → 6x = 12 → x = 2',
  },
};
