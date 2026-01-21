/**
 * Matematikkmotor - Aritmetikkregler
 *
 * Validerer steg-for-steg utregninger for aritmetiske uttrykk.
 */

import {
  parseExpression,
  evaluateExpression,
  areEquivalent,
  normalizeExpression,
  containsOperation,
} from '../parser';
import type { ValidationStep, ArithmeticRule } from '../types';

export interface ArithmeticValidationResult {
  isValid: boolean;
  steps: ValidationStep[];
  finalAnswer: string | null;
  feedback: string;
}

/**
 * Validerer en sekvens av aritmetiske steg
 */
export function validateArithmeticSteps(
  problem: string,
  steps: string[]
): ArithmeticValidationResult {
  const validatedSteps: ValidationStep[] = [];
  let currentExpr = problem;
  let isAllValid = true;
  let finalAnswer: string | null = null;

  // Evaluer det endelige svaret vi forventer
  const expectedAnswer = evaluateExpression(problem);

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i].trim();
    const validation = validateSingleStep(currentExpr, step, i);

    validatedSteps.push(validation);

    if (validation.isValid) {
      currentExpr = step;
    } else {
      isAllValid = false;
    }
  }

  // Sjekk om siste steg er det endelige svaret
  const lastStep = steps[steps.length - 1];
  if (lastStep) {
    const lastValue = evaluateExpression(lastStep);
    if (lastValue !== null && expectedAnswer !== null) {
      if (Math.abs(lastValue - expectedAnswer) < 1e-10) {
        finalAnswer = lastStep;
      }
    }
  }

  // Generer tilbakemelding
  let feedback: string;
  if (isAllValid && finalAnswer !== null) {
    feedback = 'Utmerket! Alle stegene er riktige og du har funnet riktig svar.';
  } else if (isAllValid) {
    feedback = 'Stegene ser riktige ut, men du er ikke helt ferdig med utregningen.';
  } else {
    const wrongStepIndex = validatedSteps.findIndex(s => !s.isValid);
    feedback = `Det er en feil i steg ${wrongStepIndex + 1}. ${validatedSteps[wrongStepIndex]?.feedback || ''}`;
  }

  return {
    isValid: isAllValid,
    steps: validatedSteps,
    finalAnswer,
    feedback,
  };
}

/**
 * Validerer ett enkelt steg
 */
export function validateSingleStep(
  fromExpr: string,
  toExpr: string,
  stepIndex: number
): ValidationStep {
  // Sjekk om stegene er matematisk ekvivalente
  if (!areEquivalent(fromExpr, toExpr)) {
    // Finn ut hva som er feil
    const feedback = diagnoseError(fromExpr, toExpr);
    return {
      stepIndex,
      expression: toExpr,
      isValid: false,
      feedback,
      confidence: 0.9,
    };
  }

  // Identifiser hvilken regel som ble brukt
  const rule = identifyArithmeticRule(fromExpr, toExpr);

  return {
    stepIndex,
    expression: toExpr,
    isValid: true,
    feedback: rule ? `Riktig! Du brukte ${getRuleDescription(rule)}.` : 'Riktig!',
    rule: rule || undefined,
    confidence: 0.95,
  };
}

/**
 * Identifiserer hvilken aritmetisk regel som ble brukt
 */
function identifyArithmeticRule(fromExpr: string, toExpr: string): ArithmeticRule | null {
  const fromNorm = normalizeExpression(fromExpr);
  const toNorm = normalizeExpression(toExpr);

  // Sjekk for parentesregelen
  if (fromNorm.includes('(') && !toNorm.includes('(')) {
    return 'parentheses';
  }

  // Sjekk for potensregelen
  if (containsOperation(fromExpr, '^') && !containsOperation(toExpr, '^')) {
    return 'exponentiation';
  }

  // Sjekk for multiplikasjon
  if (containsOperation(fromExpr, '*') && !containsOperation(toExpr, '*')) {
    return 'multiplication';
  }

  // Sjekk for divisjon
  if (containsOperation(fromExpr, '/') && !containsOperation(toExpr, '/')) {
    return 'division';
  }

  // Sjekk for addisjon
  if (containsOperation(fromExpr, '+') && !containsOperation(toExpr, '+')) {
    return 'addition';
  }

  // Sjekk for subtraksjon
  if (containsOperation(fromExpr, '-') && !containsOperation(toExpr, '-')) {
    return 'subtraction';
  }

  // Sjekk for negative tall
  if (fromNorm.match(/-\d/) && toNorm.match(/-?\d/)) {
    return 'negative-numbers';
  }

  return null;
}

/**
 * Diagnostiserer hva som er feil med et steg
 */
function diagnoseError(fromExpr: string, toExpr: string): string {
  const fromValue = evaluateExpression(fromExpr);
  const toValue = evaluateExpression(toExpr);

  if (fromValue === null) {
    return 'Det opprinnelige uttrykket kunne ikke evalueres.';
  }

  if (toValue === null) {
    return 'Det nye uttrykket er ikke et gyldig matematisk uttrykk.';
  }

  // Sjekk for vanlige feil
  const diff = Math.abs(fromValue - toValue);

  // Fortegnsfeil
  if (Math.abs(fromValue + toValue) < 1e-10) {
    return 'Sjekk fortegnet - det ser ut som du har byttet + og -.';
  }

  // Regnerekkefølge-feil
  if (containsOperation(fromExpr, '*') && containsOperation(fromExpr, '+')) {
    return 'Husk regnerekkefølgen: multiplikasjon kommer før addisjon.';
  }

  // Generell feil
  if (diff < 10) {
    return `Svaret er nesten riktig, men det er en liten regnefeil. Forventet verdi rundt ${fromValue.toFixed(2)}, men fikk ${toValue.toFixed(2)}.`;
  }

  return 'Dette steget gir ikke samme verdi som det forrige. Sjekk utregningen din.';
}

/**
 * Henter beskrivelse av en regel
 */
function getRuleDescription(rule: ArithmeticRule): string {
  const descriptions: Record<ArithmeticRule, string> = {
    addition: 'addisjon',
    subtraction: 'subtraksjon',
    multiplication: 'multiplikasjon',
    division: 'divisjon',
    exponentiation: 'potensregning',
    parentheses: 'parentesregelen',
    'order-of-operations': 'regnerekkefølgen',
    'negative-numbers': 'regning med negative tall',
    fractions: 'brøkregning',
    decimals: 'desimaltall',
    percentage: 'prosentregning',
  };
  return descriptions[rule] || rule;
}

/**
 * Sjekker om et uttrykk er fullstendig forenklet (et enkelt tall)
 */
export function isFullySimplified(expr: string): boolean {
  const normalized = normalizeExpression(expr);
  // Sjekk om det bare er et tall (positivt eller negativt, heltall eller desimal)
  return /^-?\d+(\.\d+)?$/.test(normalized);
}

/**
 * Foreslår neste steg for en utregning
 */
export function suggestNextStep(currentExpr: string): string | null {
  const node = parseExpression(currentExpr);
  if (!node) return null;

  const normalized = normalizeExpression(currentExpr);

  // Prioriter parenteser først
  if (normalized.includes('(')) {
    return 'Regn ut det som står i parentesen først.';
  }

  // Deretter potenser
  if (containsOperation(currentExpr, '^')) {
    return 'Regn ut potensen.';
  }

  // Så multiplikasjon/divisjon
  if (containsOperation(currentExpr, '*') || containsOperation(currentExpr, '/')) {
    return 'Utfør multiplikasjon eller divisjon.';
  }

  // Til slutt addisjon/subtraksjon
  if (containsOperation(currentExpr, '+') || containsOperation(currentExpr, '-')) {
    return 'Utfør addisjon eller subtraksjon.';
  }

  return null;
}
