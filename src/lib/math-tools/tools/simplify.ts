/**
 * Forenkle algebraiske uttrykk
 */

import { getComputeEngine } from '../compute-engine';

export interface SimplifyResult {
  success: boolean;
  original?: string;
  simplified?: string;
  simplifiedLatex?: string;
  isSimplified?: boolean;
  error?: string;
}

/**
 * Forenkle et algebraisk uttrykk.
 *
 * @param expression LaTeX-uttrykk å forenkle, f.eks. "\\frac{2x}{4}" eller "(x+1)^2 - x^2"
 */
export function simplify(expression: string): SimplifyResult {
  try {
    const ce = getComputeEngine();
    const expr = ce.parse(expression);

    if (!expr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse uttrykket: ${expression}`
      };
    }

    const originalLatex = expr.latex;
    const simplified = expr.simplify();
    const simplifiedLatex = simplified.latex;

    // Sjekk om uttrykket faktisk ble forenklet
    const isSimplified = originalLatex !== simplifiedLatex;

    return {
      success: true,
      original: originalLatex,
      simplified: simplified.toString(),
      simplifiedLatex,
      isSimplified
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved forenkling'
    };
  }
}

/**
 * Faktoriser et algebraisk uttrykk.
 *
 * @param expression LaTeX-uttrykk å faktorisere, f.eks. "x^2 - 4"
 */
export function factor(expression: string): SimplifyResult {
  try {
    const ce = getComputeEngine();
    const expr = ce.parse(expression);

    if (!expr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse uttrykket: ${expression}`
      };
    }

    const originalLatex = expr.latex;

    // Bruk Factor-funksjonen
    const factored = ce.box(['Factor', expr]).evaluate();
    const factoredLatex = factored.latex;

    return {
      success: true,
      original: originalLatex,
      simplified: factored.toString(),
      simplifiedLatex: factoredLatex,
      isSimplified: originalLatex !== factoredLatex
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved faktorisering'
    };
  }
}

/**
 * Ekspander et algebraisk uttrykk.
 *
 * @param expression LaTeX-uttrykk å ekspandere, f.eks. "(x+1)^2"
 */
export function expand(expression: string): SimplifyResult {
  try {
    const ce = getComputeEngine();
    const expr = ce.parse(expression);

    if (!expr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse uttrykket: ${expression}`
      };
    }

    const originalLatex = expr.latex;

    // Bruk Expand-funksjonen
    const expanded = ce.box(['Expand', expr]).evaluate();
    const expandedLatex = expanded.latex;

    return {
      success: true,
      original: originalLatex,
      simplified: expanded.toString(),
      simplifiedLatex: expandedLatex,
      isSimplified: originalLatex !== expandedLatex
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved ekspandering'
    };
  }
}
