/**
 * Verifiser matematiske uttrykk og mellomregninger
 */

import { getComputeEngine } from '../compute-engine';

export interface VerifyResult {
  success: boolean;
  areEqual?: boolean;
  beforeSimplified?: string;
  afterSimplified?: string;
  explanation?: string;
  error?: string;
}

/**
 * Sjekk om to matematiske uttrykk er ekvivalente.
 * Brukes for å verifisere elevens mellomregninger.
 *
 * @param before Uttrykk før steget (LaTeX)
 * @param after Uttrykk etter steget (LaTeX)
 */
export function verifyStep(before: string, after: string): VerifyResult {
  try {
    const ce = getComputeEngine();

    const beforeExpr = ce.parse(before);
    const afterExpr = ce.parse(after);

    if (!beforeExpr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse "før"-uttrykket: ${before}`
      };
    }

    if (!afterExpr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse "etter"-uttrykket: ${after}`
      };
    }

    // Forenkle begge sider
    const beforeSimp = beforeExpr.simplify();
    const afterSimp = afterExpr.simplify();

    // Sjekk likhet ved å trekke fra og se om resultatet er 0
    const diff = beforeSimp.sub(afterSimp).simplify();

    // Sjekk om differansen er 0
    const numericDiff = diff.N().valueOf();
    // Sjekk numerisk om differansen er tilstrekkelig nær 0
    const areEqual = (typeof numericDiff === 'number' && Math.abs(numericDiff) < 1e-10) ||
                     (beforeSimp.latex === afterSimp.latex);

    let explanation: string;
    if (areEqual) {
      if (beforeSimp.latex === afterSimp.latex) {
        explanation = `Begge uttrykk forenkles til ${beforeSimp.latex}`;
      } else {
        explanation = `Uttrykkene er matematisk ekvivalente. Før: ${beforeSimp.latex}, Etter: ${afterSimp.latex}`;
      }
    } else {
      explanation = `Uttrykkene er IKKE ekvivalente. Før forenklet: ${beforeSimp.latex}, Etter forenklet: ${afterSimp.latex}`;
    }

    return {
      success: true,
      areEqual,
      beforeSimplified: beforeSimp.latex,
      afterSimplified: afterSimp.latex,
      explanation
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved verifisering'
    };
  }
}

/**
 * Sjekk om et matematisk utsagn (likning/ulikhet) er sant.
 *
 * @param statement Matematisk utsagn i LaTeX, f.eks. "2 + 2 = 4" eller "x^2 \\ge 0"
 */
export function verifyStatement(statement: string): VerifyResult {
  try {
    const ce = getComputeEngine();
    const expr = ce.parse(statement);

    if (!expr.isValid) {
      return {
        success: false,
        error: `Kunne ikke parse utsagnet: ${statement}`
      };
    }

    // Evaluer utsagnet
    const result = expr.evaluate();
    const value = result.valueOf();

    const isTrue = value === true || result.symbol === 'True';
    const isFalse = value === false || result.symbol === 'False';

    let explanation: string;
    if (isTrue) {
      explanation = `Utsagnet "${statement}" er SANT`;
    } else if (isFalse) {
      explanation = `Utsagnet "${statement}" er USANT`;
    } else {
      explanation = `Kunne ikke bestemme sannheten av utsagnet. Resultat: ${result.latex}`;
    }

    return {
      success: true,
      areEqual: isTrue,
      explanation
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved verifisering av utsagn'
    };
  }
}
