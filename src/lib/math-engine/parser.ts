/**
 * Matematikkmotor - Parser
 *
 * Parsing og sammenligning av matematiske uttrykk ved hjelp av mathjs.
 */

import { parse, simplify, evaluate, MathNode, OperatorNode, SymbolNode } from 'mathjs';

/**
 * Konverterer norsk matematisk notasjon til standard notasjon
 */
export function normalizeExpression(expr: string): string {
  return expr
    // Norsk desimaltegn til standard
    .replace(/(\d),(\d)/g, '$1.$2')
    // Gange-tegn varianter
    .replace(/×/g, '*')
    .replace(/·/g, '*')
    .replace(/⋅/g, '*')
    // Dele-tegn varianter
    .replace(/÷/g, '/')
    .replace(/:/g, '/')
    // Potens
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    // LaTeX potens-klammer: x^{12} -> x^12
    .replace(/\^{([^}]+)}/g, '^($1)')
    // Brøker som LaTeX \frac{a}{b} -> (a)/(b)
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
    // Fjern LaTeX-tegn
    .replace(/\\cdot/g, '*')
    // Fjern mellomrom
    .replace(/\s+/g, '')
    // Implisitt multiplikasjon: 2x -> 2*x
    .replace(/(\d)([a-zA-Z])/g, '$1*$2')
    .replace(/([a-zA-Z])(\d)/g, '$1*$2')
    .replace(/\)(\d)/g, ')*$1')
    .replace(/(\d)\(/g, '$1*(')
    .replace(/\)\(/g, ')**(')
    // Implisitt multiplikasjon mellom variabler: ab -> a*b
    .replace(/([a-zA-Z])([a-zA-Z])/g, '$1*$2')
    // Implisitt multiplikasjon etter parentes: )x -> )*x
    .replace(/\)([a-zA-Z])/g, ')*$1');
}

/**
 * Parser et matematisk uttrykk
 */
export function parseExpression(expr: string): MathNode | null {
  try {
    const normalized = normalizeExpression(expr);
    return parse(normalized);
  } catch {
    return null;
  }
}

/**
 * Evaluerer et matematisk uttrykk til en numerisk verdi
 */
export function evaluateExpression(expr: string, scope?: Record<string, number>): number | null {
  try {
    const normalized = normalizeExpression(expr);
    const result = evaluate(normalized, scope);
    return typeof result === 'number' ? result : null;
  } catch {
    return null;
  }
}

/**
 * Sjekker om to uttrykk er matematisk ekvivalente
 */
export function areEquivalent(expr1: string, expr2: string): boolean {
  try {
    const node1 = parseExpression(expr1);
    const node2 = parseExpression(expr2);

    if (!node1 || !node2) return false;

    // Prøv å forenkle begge og sammenligne
    const simplified1 = simplify(node1).toString();
    const simplified2 = simplify(node2).toString();

    if (simplified1 === simplified2) return true;

    // Prøv numerisk evaluering for uttrykk uten variabler
    const val1 = evaluateExpression(expr1);
    const val2 = evaluateExpression(expr2);

    if (val1 !== null && val2 !== null) {
      return Math.abs(val1 - val2) < 1e-10;
    }

    // For uttrykk med variabler, test med flere verdier
    const variables = extractVariables(node1).concat(extractVariables(node2));
    const uniqueVars = [...new Set(variables)];

    if (uniqueVars.length > 0) {
      // Test med 5 tilfeldige verdier
      const testValues = [1, 2, -1, 0.5, 3];
      for (const testVal of testValues) {
        const scope: Record<string, number> = {};
        uniqueVars.forEach(v => { scope[v] = testVal; });

        const result1 = evaluateExpression(expr1, scope);
        const result2 = evaluateExpression(expr2, scope);

        if (result1 === null || result2 === null) return false;
        if (Math.abs(result1 - result2) > 1e-10) return false;
      }
      return true;
    }

    return false;
  } catch {
    return false;
  }
}

/**
 * Ekstraherer variabler fra et parset uttrykk
 */
export function extractVariables(node: MathNode): string[] {
  const variables: string[] = [];

  function traverse(n: MathNode) {
    if (n.type === 'SymbolNode') {
      const symbolNode = n as SymbolNode;
      // Ekskluder matematiske konstanter
      if (!['pi', 'e', 'i'].includes(symbolNode.name)) {
        variables.push(symbolNode.name);
      }
    }

    // Traverser barn-noder
    if ('args' in n && Array.isArray(n.args)) {
      n.args.forEach((arg: MathNode) => traverse(arg));
    }
    if ('content' in n && n.content) {
      traverse(n.content as MathNode);
    }
  }

  traverse(node);
  return variables;
}

/**
 * Sjekker om et uttrykk er en likning
 */
export function isEquation(expr: string): boolean {
  return expr.includes('=') && expr.split('=').length === 2;
}

/**
 * Deler en likning i venstre og høyre side
 */
export function splitEquation(expr: string): { left: string; right: string } | null {
  const parts = expr.split('=');
  if (parts.length !== 2) return null;
  return { left: parts[0].trim(), right: parts[1].trim() };
}

/**
 * Forenkler et uttrykk
 */
export function simplifyExpression(expr: string): string | null {
  try {
    const node = parseExpression(expr);
    if (!node) return null;
    return simplify(node).toString();
  } catch {
    return null;
  }
}

/**
 * Sjekker om et steg er en gyldig forenkling av det forrige
 */
export function isValidSimplification(fromExpr: string, toExpr: string): boolean {
  return areEquivalent(fromExpr, toExpr);
}

/**
 * Identifiserer hvilken operasjon som ble utført mellom to steg
 */
export function identifyOperation(fromExpr: string, toExpr: string): string | null {
  // Grunnleggende sjekk
  if (!areEquivalent(fromExpr, toExpr)) {
    return null;
  }

  const from = parseExpression(fromExpr);
  const to = parseExpression(toExpr);

  if (!from || !to) return null;

  // Sjekk for forenkling
  const simplified = simplifyExpression(fromExpr);
  if (simplified === normalizeExpression(toExpr)) {
    return 'forenkling';
  }

  // Sjekk for evaluering
  const fromVal = evaluateExpression(fromExpr);
  const toVal = evaluateExpression(toExpr);

  if (fromVal !== null && toVal !== null && Math.abs(fromVal - toVal) < 1e-10) {
    if (toExpr.match(/^-?\d+(\.\d+)?$/)) {
      return 'evaluering';
    }
  }

  return 'omskriving';
}

/**
 * Henter ut operatoren fra en operator-node
 */
export function getOperator(node: MathNode): string | null {
  if (node.type === 'OperatorNode') {
    return (node as OperatorNode).op;
  }
  return null;
}

/**
 * Sjekker om uttrykket inneholder en spesifikk operasjon
 */
export function containsOperation(expr: string, op: string): boolean {
  try {
    const node = parseExpression(expr);
    if (!node) return false;

    let found = false;

    function traverse(n: MathNode) {
      if (found) return;
      if (n.type === 'OperatorNode') {
        const opNode = n as OperatorNode;
        if (opNode.op === op) {
          found = true;
        }
      }
      if ('args' in n && Array.isArray(n.args)) {
        n.args.forEach((arg: MathNode) => traverse(arg));
      }
    }

    traverse(node);
    return found;
  } catch {
    return false;
  }
}

/**
 * Resultat av uttrykksvalidering
 */
export interface ExpressionValidationResult {
  isCorrect: boolean;
  isEquivalentButWrongOrder: boolean;
  expectedAnswer?: string;
}

/**
 * Preprosesserer brøk-input for å matche LaTeX-visning.
 * Behandler alt etter / som nevner: "1/4x^3" -> "1/(4x^3)"
 * Dette matcher hvordan toLatex() viser brøken til brukeren.
 */
function preprocessFractionInput(input: string): string {
  // Hvis input allerede har parenteser rundt nevneren, ikke endre
  if (!input.includes('/') || input.includes('/(')) {
    return input;
  }

  const slashIndex = input.indexOf('/');
  const numerator = input.substring(0, slashIndex);
  const denominator = input.substring(slashIndex + 1);

  // Wrap nevneren i parenteser hvis den ikke allerede er wrapped
  // og hvis den inneholder mer enn bare ett tall
  if (denominator && !/^\d+$/.test(denominator) && !denominator.startsWith('(')) {
    return `${numerator}/(${denominator})`;
  }

  return input;
}

/**
 * Validerer et algebraisk svar mot forventet svar
 * Krever eksakt match (med normalisering), men gir tilbakemelding hvis matematisk ekvivalent men feil rekkefølge
 */
export function validateExpressionAnswer(
  userInput: string,
  expected: string | string[]
): ExpressionValidationResult {
  const expectedList = Array.isArray(expected) ? expected : [expected];
  // Preprosesser brøk-input for å matche LaTeX-visning
  const preprocessedInput = preprocessFractionInput(userInput);
  const normalizedInput = normalizeExpression(preprocessedInput);

  // Sjekk eksakt match mot alle aksepterte svar
  for (const exp of expectedList) {
    const normalizedExpected = normalizeExpression(exp);

    // Sammenlign forenklede former
    try {
      const inputSimplified = simplify(parse(normalizedInput)).toString();
      const expectedSimplified = simplify(parse(normalizedExpected)).toString();

      if (inputSimplified === expectedSimplified) {
        return { isCorrect: true, isEquivalentButWrongOrder: false };
      }
    } catch {
      // Hvis parsing feiler, prøv direkte sammenligning
      if (normalizedInput === normalizedExpected) {
        return { isCorrect: true, isEquivalentButWrongOrder: false };
      }
    }
  }

  // Sjekk om matematisk ekvivalent men feil rekkefølge
  for (const exp of expectedList) {
    if (areEquivalent(preprocessedInput, exp)) {
      return {
        isCorrect: false,
        isEquivalentButWrongOrder: true,
        expectedAnswer: exp
      };
    }
  }

  return { isCorrect: false, isEquivalentButWrongOrder: false };
}
