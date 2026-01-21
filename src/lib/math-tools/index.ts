/**
 * Math Tools Library for ReAct AI-lærer
 *
 * Eksporterer matematiske verktøy og Claude tool definitions
 * for bruk i ReAct-loopen.
 */

import Anthropic from '@anthropic-ai/sdk';

// Eksporter verktøy-funksjoner
export { calculate, type CalculateResult } from './tools/calculate';
export { solveEquation, type SolveResult } from './tools/solve';
export { simplify, factor, expand, type SimplifyResult } from './tools/simplify';
export { verifyStep, verifyStatement, type VerifyResult } from './tools/verify';
export { differentiate, integrate, definiteIntegral, type CalculusResult } from './tools/calculus';
export { getComputeEngine, resetComputeEngine } from './compute-engine';

// Import for executeMathTool
import { calculate, type CalculateResult } from './tools/calculate';
import { solveEquation, type SolveResult } from './tools/solve';
import { simplify, factor, expand, type SimplifyResult } from './tools/simplify';
import { verifyStep, type VerifyResult } from './tools/verify';
import { differentiate, integrate, type CalculusResult } from './tools/calculus';

/**
 * Tool definitions for Claude API.
 * Disse brukes i messages.create({ tools: MATH_TOOL_DEFINITIONS })
 */
export const MATH_TOOL_DEFINITIONS: Anthropic.Tool[] = [
  {
    name: 'calculate',
    description: `Beregn et numerisk eller algebraisk uttrykk. Bruk dette for å verifisere aritmetikk og mellomregninger.

Eksempler:
- "2 + 3 \\times 4" → 14
- "\\frac{2}{3} + \\frac{1}{4}" → \\frac{11}{12}
- "\\sqrt{16}" → 4`,
    input_schema: {
      type: 'object' as const,
      properties: {
        expression: {
          type: 'string',
          description: 'LaTeX-uttrykk å evaluere, f.eks. "\\frac{2}{3} + \\frac{1}{4}"'
        }
      },
      required: ['expression']
    }
  },
  {
    name: 'solve_equation',
    description: `Løs en likning for en gitt variabel. Returnerer alle løsninger.

Eksempler:
- "2x + 5 = 13" → x = 4
- "x^2 - 4 = 0" → x = -2 eller x = 2
- "x^2 + 1 = 0" → ingen reelle løsninger`,
    input_schema: {
      type: 'object' as const,
      properties: {
        equation: {
          type: 'string',
          description: 'Likning i LaTeX, f.eks. "2x + 5 = 13" eller "x^2 - 4 = 0"'
        },
        variable: {
          type: 'string',
          description: 'Variabel å løse for (default: x)',
          default: 'x'
        }
      },
      required: ['equation']
    }
  },
  {
    name: 'simplify',
    description: `Forenkle et algebraisk uttrykk til sin enkleste form.

Eksempler:
- "\\frac{2x}{4}" → "\\frac{x}{2}"
- "x + x + x" → "3x"
- "(x+1)^2 - x^2" → "2x + 1"`,
    input_schema: {
      type: 'object' as const,
      properties: {
        expression: {
          type: 'string',
          description: 'LaTeX-uttrykk å forenkle'
        }
      },
      required: ['expression']
    }
  },
  {
    name: 'factor',
    description: `Faktoriser et algebraisk uttrykk.

Eksempler:
- "x^2 - 4" → "(x-2)(x+2)"
- "x^2 + 2x + 1" → "(x+1)^2"`,
    input_schema: {
      type: 'object' as const,
      properties: {
        expression: {
          type: 'string',
          description: 'LaTeX-uttrykk å faktorisere'
        }
      },
      required: ['expression']
    }
  },
  {
    name: 'expand',
    description: `Ekspander et algebraisk uttrykk (gange ut parenteser).

Eksempler:
- "(x+1)^2" → "x^2 + 2x + 1"
- "(a+b)(a-b)" → "a^2 - b^2"`,
    input_schema: {
      type: 'object' as const,
      properties: {
        expression: {
          type: 'string',
          description: 'LaTeX-uttrykk å ekspandere'
        }
      },
      required: ['expression']
    }
  },
  {
    name: 'verify_step',
    description: `Sjekk om to matematiske uttrykk er ekvivalente. Bruk dette for å verifisere elevens mellomregninger.

Eksempel: Sjekk om "2x + 4" er lik "2(x + 2)" → true (ekvivalente)`,
    input_schema: {
      type: 'object' as const,
      properties: {
        before: {
          type: 'string',
          description: 'Uttrykk før steget (LaTeX)'
        },
        after: {
          type: 'string',
          description: 'Uttrykk etter steget (LaTeX)'
        }
      },
      required: ['before', 'after']
    }
  },
  {
    name: 'differentiate',
    description: `Deriver en funksjon med hensyn på en variabel.

Eksempler:
- f(x) = x^3 → f'(x) = 3x^2
- f(x) = \\sin(x) → f'(x) = \\cos(x)`,
    input_schema: {
      type: 'object' as const,
      properties: {
        expression: {
          type: 'string',
          description: 'Funksjonen i LaTeX'
        },
        variable: {
          type: 'string',
          description: 'Variabel å derivere med hensyn på (default: x)',
          default: 'x'
        }
      },
      required: ['expression']
    }
  },
  {
    name: 'integrate',
    description: `Integrer en funksjon (finn det ubestemte integralet).

Eksempler:
- ∫ x^2 dx → (1/3)x^3 + C
- ∫ \\cos(x) dx → \\sin(x) + C`,
    input_schema: {
      type: 'object' as const,
      properties: {
        expression: {
          type: 'string',
          description: 'Funksjonen i LaTeX'
        },
        variable: {
          type: 'string',
          description: 'Integrasjonsvariabel (default: x)',
          default: 'x'
        }
      },
      required: ['expression']
    }
  }
];

/**
 * Map tool name to human-readable Norwegian name
 */
export const TOOL_NAMES_NO: Record<string, string> = {
  calculate: 'Kalkulator',
  solve_equation: 'Likningsløser',
  simplify: 'Forenkling',
  factor: 'Faktorisering',
  expand: 'Ekspandering',
  verify_step: 'Steg-verifisering',
  differentiate: 'Derivasjon',
  integrate: 'Integrasjon'
};

/**
 * Execute a math tool by name with given input.
 *
 * @param toolName Name of the tool (from MATH_TOOL_DEFINITIONS)
 * @param input Input object matching the tool's input_schema
 * @returns Result object with success status and result/error
 */
export function executeMathTool(
  toolName: string,
  input: Record<string, unknown>
): CalculateResult | SolveResult | SimplifyResult | VerifyResult | CalculusResult | { success: boolean; error: string } {
  try {
    switch (toolName) {
      case 'calculate':
        return calculate(input.expression as string);

      case 'solve_equation':
        return solveEquation(
          input.equation as string,
          (input.variable as string) || 'x'
        );

      case 'simplify':
        return simplify(input.expression as string);

      case 'factor':
        return factor(input.expression as string);

      case 'expand':
        return expand(input.expression as string);

      case 'verify_step':
        return verifyStep(
          input.before as string,
          input.after as string
        );

      case 'differentiate':
        return differentiate(
          input.expression as string,
          (input.variable as string) || 'x'
        );

      case 'integrate':
        return integrate(
          input.expression as string,
          (input.variable as string) || 'x'
        );

      default:
        return {
          success: false,
          error: `Ukjent verktøy: ${toolName}`
        };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ukjent feil ved kjøring av verktøy'
    };
  }
}
