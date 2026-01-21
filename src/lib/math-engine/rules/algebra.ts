/**
 * Matematikkmotor - Algebraregler
 *
 * Validerer steg-for-steg løsning av likninger og algebraiske uttrykk.
 */

import {
  parseExpression,
  evaluateExpression,
  areEquivalent,
  normalizeExpression,
  isEquation,
  splitEquation,
  extractVariables,
} from '../parser';
import type { ValidationStep, AlgebraRule } from '../types';

export interface AlgebraValidationResult {
  isValid: boolean;
  steps: ValidationStep[];
  finalAnswer: string | null;
  targetVariable: string | null;
  feedback: string;
  isSolved: boolean;
}

/**
 * Validerer en sekvens av algebraiske steg for å løse en likning
 */
export function validateAlgebraSteps(
  problem: string,
  steps: string[],
  targetVariable?: string
): AlgebraValidationResult {
  const validatedSteps: ValidationStep[] = [];
  let currentExpr = problem;
  let isAllValid = true;
  let finalAnswer: string | null = null;
  let isSolved = false;

  // Finn målvariabelen hvis ikke spesifisert
  const variables = isEquation(problem)
    ? extractVariables(parseExpression(splitEquation(problem)?.left || '')!)
    : [];
  const targetVar = targetVariable || variables[0] || 'x';

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i].trim();
    const validation = validateAlgebraStep(currentExpr, step, targetVar, i);

    validatedSteps.push(validation);

    if (validation.isValid) {
      currentExpr = step;
    } else {
      isAllValid = false;
    }
  }

  // Sjekk om likningen er løst
  const lastStep = steps[steps.length - 1];
  if (lastStep && isEquation(lastStep)) {
    const parts = splitEquation(lastStep);
    if (parts) {
      // Sjekk om formen er "x = verdi" eller "verdi = x"
      const leftNorm = normalizeExpression(parts.left);
      const rightNorm = normalizeExpression(parts.right);

      if (leftNorm === targetVar && isSimpleValue(rightNorm)) {
        finalAnswer = `${targetVar} = ${parts.right}`;
        isSolved = true;
      } else if (rightNorm === targetVar && isSimpleValue(leftNorm)) {
        finalAnswer = `${targetVar} = ${parts.left}`;
        isSolved = true;
      }
    }
  }

  // Generer tilbakemelding
  let feedback: string;
  if (isAllValid && isSolved) {
    feedback = `Perfekt! Du har løst likningen riktig. ${finalAnswer}`;
  } else if (isAllValid && !isSolved) {
    feedback = 'Stegene er riktige så langt, men likningen er ikke ferdig løst. Fortsett å isolere variabelen.';
  } else {
    const wrongStepIndex = validatedSteps.findIndex(s => !s.isValid);
    feedback = `Det er en feil i steg ${wrongStepIndex + 1}. ${validatedSteps[wrongStepIndex]?.feedback || ''}`;
  }

  return {
    isValid: isAllValid,
    steps: validatedSteps,
    finalAnswer,
    targetVariable: targetVar,
    feedback,
    isSolved,
  };
}

/**
 * Validerer ett enkelt algebraisk steg
 */
export function validateAlgebraStep(
  fromExpr: string,
  toExpr: string,
  targetVariable: string,
  stepIndex: number
): ValidationStep {
  // Sjekk om begge er likninger
  const fromIsEquation = isEquation(fromExpr);
  const toIsEquation = isEquation(toExpr);

  if (fromIsEquation !== toIsEquation) {
    return {
      stepIndex,
      expression: toExpr,
      isValid: false,
      feedback: 'Et likhetstegn har forsvunnet eller dukket opp. Begge sider av likhetstegnet må behandles likt.',
      confidence: 0.95,
    };
  }

  if (fromIsEquation && toIsEquation) {
    // Valider likning-til-likning transformasjon
    return validateEquationStep(fromExpr, toExpr, targetVariable, stepIndex);
  } else {
    // Valider uttrykk-til-uttrykk transformasjon
    return validateExpressionStep(fromExpr, toExpr, stepIndex);
  }
}

/**
 * Validerer en likning-transformasjon
 */
function validateEquationStep(
  fromExpr: string,
  toExpr: string,
  targetVariable: string,
  stepIndex: number
): ValidationStep {
  const fromParts = splitEquation(fromExpr);
  const toParts = splitEquation(toExpr);

  if (!fromParts || !toParts) {
    return {
      stepIndex,
      expression: toExpr,
      isValid: false,
      feedback: 'Kunne ikke tolke likningen.',
      confidence: 0.5,
    };
  }

  // Sjekk at begge sider fortsatt er ekvivalente
  // (en gyldig transformasjon bevarer likheten)
  const _fromLeftVal = evaluateExpression(fromParts.left, { [targetVariable]: 1 });
  const _fromRightVal = evaluateExpression(fromParts.right, { [targetVariable]: 1 });
  const _toLeftVal = evaluateExpression(toParts.left, { [targetVariable]: 1 });
  const _toRightVal = evaluateExpression(toParts.right, { [targetVariable]: 1 });

  // Sjekk om transformasjonen er gyldig for flere verdier av variabelen
  const testValues = [0, 1, 2, -1, 0.5];
  let validCount = 0;

  for (const val of testValues) {
    const scope = { [targetVariable]: val };

    const fromL = evaluateExpression(fromParts.left, scope);
    const fromR = evaluateExpression(fromParts.right, scope);
    const toL = evaluateExpression(toParts.left, scope);
    const toR = evaluateExpression(toParts.right, scope);

    if (fromL === null || fromR === null || toL === null || toR === null) {
      continue;
    }

    // Sjekk om likningen er opprettholdt
    const fromDiff = Math.abs(fromL - fromR);
    const toDiff = Math.abs(toL - toR);

    // Begge skal være 0 (eller begge skal være like langt fra 0)
    if (Math.abs(fromDiff - toDiff) < 1e-10) {
      validCount++;
    }
  }

  const isValid = validCount >= 3;  // Minst 3 av 5 tester må passere

  if (!isValid) {
    const feedback = diagnoseAlgebraError(fromExpr, toExpr, targetVariable);
    return {
      stepIndex,
      expression: toExpr,
      isValid: false,
      feedback,
      confidence: 0.8,
    };
  }

  // Identifiser regelen som ble brukt
  const rule = identifyAlgebraRule(fromParts, toParts, targetVariable);

  return {
    stepIndex,
    expression: toExpr,
    isValid: true,
    feedback: rule ? `Riktig! Du ${getRuleDescription(rule)}.` : 'Riktig steg!',
    rule: rule || undefined,
    confidence: 0.9,
  };
}

/**
 * Validerer en uttrykk-transformasjon (ikke likning)
 */
function validateExpressionStep(
  fromExpr: string,
  toExpr: string,
  stepIndex: number
): ValidationStep {
  if (!areEquivalent(fromExpr, toExpr)) {
    return {
      stepIndex,
      expression: toExpr,
      isValid: false,
      feedback: 'Uttrykkene er ikke ekvivalente. Sjekk at du har forenklet riktig.',
      confidence: 0.9,
    };
  }

  return {
    stepIndex,
    expression: toExpr,
    isValid: true,
    feedback: 'Riktig forenkling!',
    rule: 'simplify',
    confidence: 0.9,
  };
}

/**
 * Identifiserer hvilken algebraisk regel som ble brukt
 */
function identifyAlgebraRule(
  fromParts: { left: string; right: string },
  toParts: { left: string; right: string },
  targetVariable: string
): AlgebraRule | null {
  const toLeft = normalizeExpression(toParts.left);
  const toRight = normalizeExpression(toParts.right);

  // Sjekk for "addere på begge sider"
  // Forskjellen mellom ny og gammel venstre side skal være lik forskjellen på høyre side
  const leftDiff = evaluateExpression(`(${toParts.left}) - (${fromParts.left})`);
  const rightDiff = evaluateExpression(`(${toParts.right}) - (${fromParts.right})`);

  if (leftDiff !== null && rightDiff !== null) {
    if (Math.abs(leftDiff - rightDiff) < 1e-10 && leftDiff > 0) {
      return 'add-both-sides';
    }
    if (Math.abs(leftDiff - rightDiff) < 1e-10 && leftDiff < 0) {
      return 'subtract-both-sides';
    }
  }

  // Sjekk for "multiplisere på begge sider"
  const leftRatio = evaluateExpression(`(${toParts.left}) / (${fromParts.left})`);
  const rightRatio = evaluateExpression(`(${toParts.right}) / (${fromParts.right})`);

  if (leftRatio !== null && rightRatio !== null) {
    if (Math.abs(leftRatio - rightRatio) < 1e-10 && leftRatio > 1) {
      return 'multiply-both-sides';
    }
    if (Math.abs(leftRatio - rightRatio) < 1e-10 && leftRatio > 0 && leftRatio < 1) {
      return 'divide-both-sides';
    }
  }

  // Sjekk for forenkling
  if (areEquivalent(fromParts.left, toParts.left) || areEquivalent(fromParts.right, toParts.right)) {
    return 'simplify';
  }

  // Sjekk for samling av like ledd
  if (toLeft.match(new RegExp(`^\\d*\\*?${targetVariable}$`)) ||
      toRight.match(new RegExp(`^\\d*\\*?${targetVariable}$`))) {
    return 'collect-like-terms';
  }

  return null;
}

/**
 * Diagnostiserer feil i et algebraisk steg
 */
function diagnoseAlgebraError(
  fromExpr: string,
  toExpr: string,
  targetVariable: string
): string {
  const fromParts = splitEquation(fromExpr);
  const toParts = splitEquation(toExpr);

  if (!fromParts || !toParts) {
    return 'Likningen har et ugyldig format.';
  }

  // Sjekk om bare én side ble endret
  const leftChanged = !areEquivalent(fromParts.left, toParts.left);
  const rightChanged = !areEquivalent(fromParts.right, toParts.right);

  if (leftChanged && !rightChanged) {
    return 'Du endret venstre side uten å gjøre samme endring på høyre side. Husk: det du gjør på én side må du også gjøre på den andre.';
  }

  if (!leftChanged && rightChanged) {
    return 'Du endret høyre side uten å gjøre samme endring på venstre side. Husk: det du gjør på én side må du også gjøre på den andre.';
  }

  // Sjekk for fortegnsfeil
  const testVal = 1;
  const scope = { [targetVariable]: testVal };

  const fromL = evaluateExpression(fromParts.left, scope);
  const fromR = evaluateExpression(fromParts.right, scope);
  const toL = evaluateExpression(toParts.left, scope);
  const toR = evaluateExpression(toParts.right, scope);

  if (fromL !== null && fromR !== null && toL !== null && toR !== null) {
    const fromDiff = fromL - fromR;
    const toDiff = toL - toR;

    if (Math.abs(fromDiff + toDiff) < 1e-10) {
      return 'Det ser ut som det er en fortegnsfeil. Sjekk om du byttet + og -.';
    }
  }

  return 'Transformasjonen er ikke gyldig. Sjekk at du behandlet begge sider av likningen likt.';
}

/**
 * Henter beskrivelse av en regel
 */
function getRuleDescription(rule: AlgebraRule): string {
  const descriptions: Record<AlgebraRule, string> = {
    'collect-like-terms': 'samlet like ledd',
    'distribute': 'distribuerte',
    'factor': 'faktoriserte',
    'add-both-sides': 'la til det samme på begge sider',
    'subtract-both-sides': 'trakk fra det samme på begge sider',
    'multiply-both-sides': 'ganget med det samme på begge sider',
    'divide-both-sides': 'delte med det samme på begge sider',
    'simplify': 'forenklet',
    'substitute': 'satte inn',
    'isolate-variable': 'isolerte variabelen',
    'combine-fractions': 'slo sammen brøker',
    'cross-multiply': 'kryss-multipliserte',
  };
  return descriptions[rule] || rule;
}

/**
 * Sjekker om en streng er en enkel numerisk verdi
 */
function isSimpleValue(expr: string): boolean {
  const normalized = normalizeExpression(expr);
  // Tall, brøk, eller desimaltall
  return /^-?\d+(\.\d+)?$/.test(normalized) ||
         /^-?\d+\/\d+$/.test(normalized);
}

/**
 * Foreslår neste steg for å løse en likning
 */
export function suggestNextAlgebraStep(
  currentExpr: string,
  targetVariable: string
): string | null {
  if (!isEquation(currentExpr)) {
    return 'Uttrykket må være en likning med et likhetstegn.';
  }

  const parts = splitEquation(currentExpr);
  if (!parts) return null;

  const leftNorm = normalizeExpression(parts.left);
  const rightNorm = normalizeExpression(parts.right);

  // Hvis variabelen allerede er isolert
  if (leftNorm === targetVariable && isSimpleValue(rightNorm)) {
    return 'Likningen er løst!';
  }
  if (rightNorm === targetVariable && isSimpleValue(leftNorm)) {
    return 'Likningen er løst!';
  }

  // Sjekk om variabelen er på begge sider
  const leftHasVar = extractVariables(parseExpression(parts.left)!).includes(targetVariable);
  const rightHasVar = extractVariables(parseExpression(parts.right)!).includes(targetVariable);

  if (leftHasVar && rightHasVar) {
    return `Flytt alle ledd med ${targetVariable} til én side ved å trekke fra på begge sider.`;
  }

  // Sjekk om det er konstanter å flytte
  const leftNode = parseExpression(parts.left);
  if (leftNode && leftHasVar) {
    return `Flytt konstantleddene til høyre side. Trekk fra eller legg til på begge sider.`;
  }

  // Sjekk om vi må dele/gange for å isolere
  if (leftHasVar && leftNorm.includes('*')) {
    return `Del begge sider på koeffisienten foran ${targetVariable}.`;
  }

  return 'Fortsett å forenkle og isoler variabelen.';
}
