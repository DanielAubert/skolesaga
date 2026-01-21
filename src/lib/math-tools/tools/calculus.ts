/**
 * Kalkulus-verktøy: derivasjon og integrasjon
 */

import { getComputeEngine } from '../compute-engine';

export interface CalculusResult {
  success: boolean;
  original?: string;
  result?: string;
  resultLatex?: string;
  error?: string;
}

/**
 * Deriver en funksjon med hensyn på en variabel.
 *
 * @param expression Funksjonen i LaTeX, f.eks. "x^3 + 2x"
 * @param variable Variabel å derivere med hensyn på (default: "x")
 */
export function differentiate(expression: string, variable: string = 'x'): CalculusResult {
  try {
    const ce = getComputeEngine();
    const expr = ce.parse(expression);

    if (!expr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse uttrykket: ${expression}`
      };
    }

    // Lag derivasjonsuttrykk og evaluer
    const derivative = ce.box(['D', expr, variable]).evaluate();

    if (!derivative.isValid || derivative.operator === 'Error') {
      return {
        success: false,
        error: `Kunne ikke derivere uttrykket`
      };
    }

    const simplified = derivative.simplify();

    return {
      success: true,
      original: expr.latex,
      result: simplified.toString(),
      resultLatex: simplified.latex
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved derivasjon'
    };
  }
}

/**
 * Integrer en funksjon med hensyn på en variabel (ubestemt integral).
 *
 * @param expression Funksjonen i LaTeX, f.eks. "x^2"
 * @param variable Integrasjonsvariabel (default: "x")
 */
export function integrate(expression: string, variable: string = 'x'): CalculusResult {
  try {
    const ce = getComputeEngine();
    const expr = ce.parse(expression);

    if (!expr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse uttrykket: ${expression}`
      };
    }

    // Lag integrasjonsuttrykk og evaluer
    const integral = ce.box(['Integrate', expr, variable]).evaluate();

    if (!integral.isValid || integral.operator === 'Error') {
      return {
        success: false,
        error: `Kunne ikke integrere uttrykket`
      };
    }

    const simplified = integral.simplify();

    return {
      success: true,
      original: expr.latex,
      result: simplified.toString(),
      resultLatex: simplified.latex
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved integrasjon'
    };
  }
}

/**
 * Beregn et bestemt integral.
 *
 * @param expression Funksjonen i LaTeX
 * @param variable Integrasjonsvariabel
 * @param lowerBound Nedre grense
 * @param upperBound Øvre grense
 */
export function definiteIntegral(
  expression: string,
  variable: string = 'x',
  lowerBound: string | number,
  upperBound: string | number
): CalculusResult {
  try {
    const ce = getComputeEngine();
    const expr = ce.parse(expression);
    const lower = typeof lowerBound === 'string' ? ce.parse(lowerBound) : ce.number(lowerBound);
    const upper = typeof upperBound === 'string' ? ce.parse(upperBound) : ce.number(upperBound);

    if (!expr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse uttrykket: ${expression}`
      };
    }

    // Lag bestemt integral og evaluer
    const integral = ce.box(['Integrate', expr, ['Triple', variable, lower, upper]]).evaluate();

    if (!integral.isValid || integral.operator === 'Error') {
      return {
        success: false,
        error: `Kunne ikke beregne det bestemte integralet`
      };
    }

    // Prøv numerisk evaluering
    const numeric = integral.N();
    const result = numeric.isValid ? numeric : integral.simplify();

    return {
      success: true,
      original: expr.latex,
      result: result.toString(),
      resultLatex: result.latex
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved beregning av bestemt integral'
    };
  }
}
