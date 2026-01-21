/**
 * Matematikkmotor - Eksporter
 *
 * Steg-for-steg validering av matematiske uttrykk og likninger.
 */

// Hovedvalidator
export { validateSteps, checkAnswer, formatValidationResult } from './validator';

// Parser
export {
  parseExpression,
  evaluateExpression,
  areEquivalent,
  normalizeExpression,
  isEquation,
  splitEquation,
  simplifyExpression,
  extractVariables,
} from './parser';

// Aritmetikk
export {
  validateArithmeticSteps,
  validateSingleStep as validateArithmeticStep,
  isFullySimplified,
  suggestNextStep as suggestNextArithmeticStep,
} from './rules/arithmetic';

// Algebra
export {
  validateAlgebraSteps,
  validateAlgebraStep,
  suggestNextAlgebraStep,
} from './rules/algebra';

// AI Fallback
export {
  validateWithAI,
  isComplexProblem,
} from './ai-fallback';

// Typer
export * from './types';
