/**
 * Løs likninger
 */

import { getComputeEngine } from '../compute-engine';

export interface SolveResult {
  success: boolean;
  solutions?: string[];
  solutionsLatex?: string[];
  error?: string;
}

/**
 * Løs en likning for en gitt variabel.
 *
 * @param equation Likning i LaTeX, f.eks. "2x + 5 = 13" eller "x^2 - 4 = 0"
 * @param variable Variabel å løse for (default: "x")
 */
export function solveEquation(equation: string, variable: string = 'x'): SolveResult {
  try {
    const ce = getComputeEngine();

    // Parse likningen
    let expr = ce.parse(equation);

    if (!expr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse likningen: ${equation}`
      };
    }

    // Hvis likningen er på formen "a = b", konverter til "a - b = 0"
    // ComputeEngine forventer likningen som et uttrykk som skal løses for 0
    if (expr.operator === 'Equal') {
      const ops = expr.ops;
      if (ops && ops.length === 2) {
        // Lag uttrykket left - right
        expr = ops[0].sub(ops[1]);
      }
    }

    // Løs likningen
    const solutions = expr.solve(variable);

    if (!solutions || solutions.length === 0) {
      return {
        success: false,
        error: `Kunne ikke løse likningen for ${variable}`
      };
    }

    // Konverter løsninger til LaTeX
    const solutionsLatex = solutions.map(s => s.latex);
    const solutionsStr = solutions.map(s => {
      const val = s.N().valueOf();
      if (typeof val === 'number' && !isNaN(val)) {
        return val.toString();
      }
      return s.toString();
    });

    return {
      success: true,
      solutions: solutionsStr,
      solutionsLatex
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved løsning av likning'
    };
  }
}
