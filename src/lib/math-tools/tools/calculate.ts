/**
 * Beregn numeriske uttrykk
 */

import { getComputeEngine } from '../compute-engine';

export interface CalculateResult {
  success: boolean;
  result?: string;
  numericValue?: number;
  latex?: string;
  error?: string;
}

/**
 * Beregn et numerisk eller algebraisk uttrykk.
 * Returnerer den numeriske verdien hvis mulig.
 *
 * @param expression LaTeX-uttrykk å evaluere, f.eks. "\\frac{2}{3} + \\frac{1}{4}"
 */
export function calculate(expression: string): CalculateResult {
  try {
    const ce = getComputeEngine();
    const expr = ce.parse(expression);

    if (!expr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse uttrykket: ${expression}`
      };
    }

    // Prøv numerisk evaluering først
    const numeric = expr.N();
    const value = numeric.valueOf();

    if (typeof value === 'number' && !isNaN(value) && isFinite(value)) {
      return {
        success: true,
        result: numeric.latex,
        numericValue: value,
        latex: numeric.latex
      };
    }

    // Hvis ikke numerisk, prøv symbolsk evaluering
    const evaluated = expr.evaluate();
    return {
      success: true,
      result: evaluated.latex,
      latex: evaluated.latex
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved beregning'
    };
  }
}
