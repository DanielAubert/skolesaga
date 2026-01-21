/**
 * Matematikkmotor - Hovedvalidator
 *
 * Orkestrerer validering ved å velge riktig regelmotor (aritmetikk/algebra/hybrid)
 * og faller tilbake på AI ved behov.
 */

import { validateArithmeticSteps, isFullySimplified, suggestNextStep } from './rules/arithmetic';
import { validateAlgebraSteps, suggestNextAlgebraStep } from './rules/algebra';
import { parseExpression, isEquation, extractVariables, evaluateExpression } from './parser';
import type { ValidationResult, MathProblem } from './types';

/**
 * Hovedfunksjon for å validere steg-for-steg løsning
 */
export async function validateSteps(
  problem: MathProblem,
  steps: string[]
): Promise<ValidationResult> {
  const { type, expression, targetVariable, allowAlternativeMethods: _allowAlternativeMethods } = problem;

  // Velg riktig valideringsmetode
  let result: ValidationResult;

  switch (type) {
    case 'arithmetic':
      result = validateArithmeticProblem(expression, steps);
      break;
    case 'algebra':
      result = validateAlgebraProblem(expression, steps, targetVariable);
      break;
    case 'hybrid':
    default:
      result = validateHybridProblem(expression, steps, targetVariable);
      break;
  }

  // Sjekk om vi trenger AI-fallback
  if (shouldUseAIFallback(result, steps)) {
    // Marker at AI-fallback ville blitt brukt
    // (selve AI-kallet gjøres i egen modul)
    result.usedAIFallback = true;
    result.feedback += ' (Kompleks oppgave - AI-assistanse tilgjengelig)';
  }

  return result;
}

/**
 * Validerer et aritmetisk problem
 */
function validateArithmeticProblem(
  expression: string,
  steps: string[]
): ValidationResult {
  const result = validateArithmeticSteps(expression, steps);

  const isComplete = result.finalAnswer !== null && isFullySimplified(result.finalAnswer);

  return {
    isValid: result.isValid,
    isComplete,
    steps: result.steps,
    finalAnswer: result.finalAnswer || undefined,
    feedback: result.feedback,
    suggestions: isComplete ? undefined : [suggestNextStep(steps[steps.length - 1] || expression) || ''],
    usedAIFallback: false,
  };
}

/**
 * Validerer et algebraisk problem
 */
function validateAlgebraProblem(
  expression: string,
  steps: string[],
  targetVariable?: string
): ValidationResult {
  const result = validateAlgebraSteps(expression, steps, targetVariable);

  const suggestions: string[] = [];
  if (!result.isSolved && result.targetVariable) {
    const hint = suggestNextAlgebraStep(
      steps[steps.length - 1] || expression,
      result.targetVariable
    );
    if (hint) suggestions.push(hint);
  }

  return {
    isValid: result.isValid,
    isComplete: result.isSolved,
    steps: result.steps,
    finalAnswer: result.finalAnswer || undefined,
    feedback: result.feedback,
    suggestions: suggestions.length > 0 ? suggestions : undefined,
    usedAIFallback: false,
  };
}

/**
 * Validerer et hybrid-problem (prøver begge metoder)
 */
function validateHybridProblem(
  expression: string,
  steps: string[],
  targetVariable?: string
): ValidationResult {
  // Avgjør om dette er algebra eller aritmetikk basert på uttrykket
  const isAlgebraic = isEquation(expression) ||
    (parseExpression(expression) && extractVariables(parseExpression(expression)!).length > 0);

  if (isAlgebraic) {
    return validateAlgebraProblem(expression, steps, targetVariable);
  } else {
    return validateArithmeticProblem(expression, steps);
  }
}

/**
 * Sjekker om vi bør bruke AI-fallback
 */
function shouldUseAIFallback(result: ValidationResult, steps: string[]): boolean {
  // Bruk AI hvis:
  // 1. Resultatet er ugyldig men med lav konfidensgrad
  // 2. Komplekse uttrykk som regelbasert motor ikke håndterer godt
  // 3. Mange steg (sannsynligvis alternativ løsningsmetode)

  const hasLowConfidenceInvalid = result.steps.some(
    step => !step.isValid && step.confidence < 0.7
  );

  const tooManySteps = steps.length > 10;

  const hasComplexExpressions = steps.some(step => {
    const node = parseExpression(step);
    if (!node) return false;
    // Sjekk for kompleksitet (dybde, antall operasjoner, etc.)
    return step.length > 50;  // Forenklet sjekk
  });

  return hasLowConfidenceInvalid || tooManySteps || hasComplexExpressions;
}

/**
 * Hjelper for å formatere validering til bruker-vennlig tekst
 */
export function formatValidationResult(result: ValidationResult): string {
  const lines: string[] = [];

  lines.push(result.isValid ? '✓ Utregningen er riktig' : '✗ Det er feil i utregningen');

  if (result.isComplete) {
    lines.push(`Svar: ${result.finalAnswer}`);
  }

  lines.push('');
  lines.push(result.feedback);

  if (result.suggestions && result.suggestions.length > 0) {
    lines.push('');
    lines.push('Tips:');
    result.suggestions.forEach(s => lines.push(`• ${s}`));
  }

  return lines.join('\n');
}

/**
 * Rask sjekk om et enkelt svar er riktig (uten steg)
 */
export function checkAnswer(
  problem: string,
  answer: string,
  _targetVariable?: string
): { isCorrect: boolean; feedback: string } {
  // For aritmetikk
  if (!isEquation(problem)) {
    const expected = evaluateExpression(problem);
    const given = evaluateExpression(answer);

    if (expected === null || given === null) {
      return {
        isCorrect: false,
        feedback: 'Kunne ikke evaluere svaret.',
      };
    }

    const isCorrect = Math.abs(expected - given) < 1e-10;
    return {
      isCorrect,
      feedback: isCorrect
        ? 'Riktig svar!'
        : `Feil. Forventet svar: ${expected}`,
    };
  }

  // For likninger
  // Sjekk om svaret er på formen "x = verdi"
  if (isEquation(answer)) {
    const parts = answer.split('=').map(p => p.trim());
    if (parts.length === 2) {
      const variable = parts[0];
      const value = parseFloat(parts[1]);

      if (!isNaN(value)) {
        // Sett inn verdien i original likning og sjekk
        const problemParts = problem.split('=').map(p => p.trim());
        if (problemParts.length === 2) {
          const leftVal = evaluateExpression(problemParts[0], { [variable]: value });
          const rightVal = evaluateExpression(problemParts[1], { [variable]: value });

          if (leftVal !== null && rightVal !== null) {
            const isCorrect = Math.abs(leftVal - rightVal) < 1e-10;
            return {
              isCorrect,
              feedback: isCorrect
                ? `Riktig! ${variable} = ${value}`
                : 'Feil svar. Prøv å sette inn svaret i likningen for å sjekke.',
            };
          }
        }
      }
    }
  }

  return {
    isCorrect: false,
    feedback: 'Kunne ikke verifisere svaret. Sjekk formatet.',
  };
}
