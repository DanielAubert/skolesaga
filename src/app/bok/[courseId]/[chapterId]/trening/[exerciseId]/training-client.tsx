"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useState, useEffect, useRef, useMemo } from "react";
import { Dumbbell, Timer, Target, CheckCircle, ArrowLeft, RotateCcw, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import type { TextbookExercise } from "@/lib/types/textbook";
import { LatexRenderer } from "@/components/textbook/latex-renderer";
import { ExerciseProgressBar } from "@/components/textbook/exercise-progress";
import { areEquivalent } from "@/lib/math-engine/parser";

interface TrainingClientProps {
  exercise: TextbookExercise;
  courseId: string;
  chapterId: string;
  exerciseId: string;
  courseTitle: string;
  chapterTitle: string;
}

interface TrainingProblem {
  id: number;
  expression: string;
  answer: number | null;
  expressionAnswer: string | null;
  userAnswer: string;
  isCorrect?: boolean;
  isEquivalentButWrongOrder?: boolean;
}

// Convert user input like "x^5" or "a^8*b^2" to LaTeX format
function toLatex(input: string): string {
  if (!input) return '';

  let latex = input;

  // First, handle any trailing ^ by adding a placeholder
  latex = latex.replace(/\^(?=$|[^\d\w])/g, '^{\\square}');

  // Replace ^ followed by digits with ^{digits}
  latex = latex.replace(/\^(\d+)/g, '^{$1}');

  // Replace ^ followed by letters with ^{letters}
  latex = latex.replace(/\^([a-zA-Z]+)/g, '^{$1}');

  // Replace * with \cdot for multiplication
  latex = latex.replace(/\*/g, ' \\cdot ');

  // Convert fractions a/b to \frac{a}{b}
  if (latex.includes('/')) {
    const slashIndex = latex.indexOf('/');
    const numerator = latex.substring(0, slashIndex).trim();
    const denominator = latex.substring(slashIndex + 1).trim();

    const num = numerator || '\\square';
    const den = denominator || '\\square';
    latex = `\\frac{${num}}{${den}}`;
  }

  return latex;
}

// ============== EXERCISE TYPE DETECTION ==============

type ExerciseType =
  // Potensregning (Kapittel 1.1)
  | 'numeric_power'           // Exercise 1: numeric calculation like 2^3 = 8
  | 'power_multiplication'    // Exercise 2: x^a * x^b = x^(a+b)
  | 'power_division'          // Exercise 3: x^a / x^b = x^(a-b)
  | 'negative_exponents'      // Exercise 4: x^(-n) = 1/x^n
  | 'negative_in_fraction'    // Exercise 5: a^(-n)/b^(-m) = b^m/a^n
  | 'power_of_product'        // Exercise 6: (ab)^n = a^n * b^n
  | 'power_of_fraction'       // Exercise 7: (a/b)^n = a^n/b^n
  | 'power_of_power'          // Exercise 8: (x^a)^b = x^(a*b)
  | 'zero_exponent'           // Exercise 9: a^0 = 1
  | 'mixed_fraction'          // Exercise 10: mixed fraction problems
  // Algebra (Kapittel 1.2)
  | 'algebra_like_terms'      // Oppgave 1-2: Like ledd (5x + 2x = 7x)
  | 'algebra_distribution'    // Oppgave 3-4: Distributiv lov (2(x+3) = 2x+6)
  | 'algebra_expand_binomial' // Oppgave 5-6: Multiplisere to parenteser ((x+2)(x+3))
  | 'algebra_expand_triple'   // Oppgave 7: Multiplisere tre parenteser
  // Brøkregning (Kapittel 1.3)
  | 'fraction_multiply'       // Oppgave 1, 3: Gange brøker (3/4 · 1/7 = 3/28)
  | 'fraction_simplify'       // Oppgave 2: Forkorte brøker (10/4 = 5/2)
  | 'fraction_divide'         // Oppgave 4: Dele brøker (a/b ÷ c/d)
  | 'fraction_complex'        // Oppgave 5: Brudden brøk
  | 'fraction_add_same_denom' // Oppgave 6: Addere brøker med lik nevner
  | 'fraction_expand'         // Oppgave 7: Utvide brøker
  | 'fraction_add_diff_denom' // Oppgave 8, 9: Addere/subtrahere brøker med ulik nevner
  | 'fraction_lcm'            // Oppgave 10: Bruke minste felles nevner
  // Faktorisering og kvadratsetningene (Kapittel 1.4)
  | 'prime_factorization'     // Oppgave 1: Primtallsfaktorisering (28 → 2·2·7)
  | 'simplify_fraction_factor' // Oppgave 2: Forkort brøker med faktorisering
  | 'factorize_expression'    // Oppgave 3-5: Faktoriser algebraiske uttrykk (3x+6 → 3(x+2))
  | 'square_identity_expand1' // Oppgave 6-7: 1. og 2. kvadratsetning utvid (x+3)² → x²+6x+9
  | 'square_identity_factor'  // Oppgave 8-9: Faktoriser med kvadratsetning (x²+6x+9 → (x+3)²)
  | 'third_identity_expand'   // Oppgave 10: 3. kvadratsetning utvid (x+2)(x-2) → x²-4
  | 'third_identity_factor'   // Oppgave 11-12: Faktoriser med 3. kvadratsetning (x²-9 → (x+3)(x-3))
  // Rasjonale uttrykk (Kapittel 1.5)
  | 'rational_simplify'       // Oppgave 1: Forkort algebraiske brøker (2x/4 → x/2)
  | 'rational_multiply'       // Oppgave 2-3: Multipliser algebraiske brøker
  | 'rational_add_same'       // Oppgave 4: Addér brøker med lik nevner
  | 'rational_expand'         // Oppgave 5: Utvid algebraiske brøker
  | 'rational_add_diff'       // Oppgave 6-9: Addér/subtraher brøker med ulik nevner
  // Grunnleggende likninger (Kapittel 2.1)
  | 'equation_simple'         // Oppgave 1-2: Enkle likninger (x + 3 = 5)
  | 'equation_mult_div'       // Oppgave 3-6: Likninger med mult/div (3x = 12)
  | 'equation_fraction'       // Oppgave 7-10: Likninger med brøker
  | 'equation_parentheses'    // Oppgave 11-13: Likninger med parenteser
  | 'unknown';

function detectExerciseType(exercise: TextbookExercise): ExerciseType {
  const subTasks = exercise.subTasks || [];
  if (subTasks.length === 0) {
    return 'unknown';
  }

  // Check if all have numeric answers
  const hasNumericAnswers = subTasks.some(st => st.answer !== undefined);
  const hasExpressionAnswers = subTasks.some(st => st.expressionAnswer !== undefined);

  // Sample tasks for pattern detection
  const sampleTasks = subTasks.slice(0, 3).map(st => st.task);

  // ============== FAKTORISERING DETECTION (Kapittel 1.4) ==============
  const isFactorizationChapter = exercise.id?.includes('1-4') || false;
  if (isFactorizationChapter) {
    const taskLower = exercise.task?.toLowerCase() || '';
    const exerciseNum = parseInt(exercise.id?.split('-').pop() || '0');

    // Oppgave 1: Primtallsfaktorisering (bare tall som input)
    if (exerciseNum === 1 || taskLower.includes('primtall') || taskLower.includes('faktoriser') && !sampleTasks.some(t => /[a-z]/.test(t))) {
      return 'prime_factorization';
    }

    // Oppgave 2: Forkort brøker med faktorisering
    if (exerciseNum === 2 || (taskLower.includes('forkort') && sampleTasks.some(t => t.includes('\\frac')))) {
      return 'simplify_fraction_factor';
    }

    // Oppgave 11-12: 3. kvadratsetning faktorisering (x²-a² → (x+a)(x-a))
    if (exerciseNum >= 11 || (sampleTasks.some(t => /\^2\s*-\s*\d+/.test(t) || /\^\{2\}\s*-\s*\d+/.test(t)) && !sampleTasks.some(t => t.includes('(')))) {
      return 'third_identity_factor';
    }

    // Oppgave 10: 3. kvadratsetning utvid (x+a)(x-a)
    if (exerciseNum === 10 || sampleTasks.some(t => /\([^)]+\+\d+\)\s*\([^)]+\-\d+\)/.test(t) || /\([^)]+\-\d+\)\s*\([^)]+\+\d+\)/.test(t))) {
      return 'third_identity_expand';
    }

    // Oppgave 8-9: Faktoriser med kvadratsetning (x²+6x+9 → (x+3)²)
    if (exerciseNum >= 8 && exerciseNum <= 9) {
      return 'square_identity_factor';
    }

    // Oppgave 6-7: Kvadratsetning utvid (x+a)² eller (x-a)²
    if (exerciseNum >= 6 && exerciseNum <= 7 || sampleTasks.some(t => /\([^)]+\)\^2/.test(t) || /\([^)]+\)\^\{2\}/.test(t))) {
      return 'square_identity_expand1';
    }

    // Oppgave 3-5: Faktoriser algebraiske uttrykk (3x+6 → 3(x+2))
    if (sampleTasks.some(t => /[a-z]/.test(t) && !t.includes('(') && !t.includes('^2'))) {
      return 'factorize_expression';
    }

    // Default for 1.4
    return 'factorize_expression';
  }

  // ============== RASJONALE UTTRYKK DETECTION (Kapittel 1.5) ==============
  const isRationalChapter = exercise.id?.includes('1-5') || false;
  if (isRationalChapter) {
    const taskLower = exercise.task?.toLowerCase() || '';
    const exerciseNum = parseInt(exercise.id?.split('-').pop() || '0');

    // Oppgave 1: Forkort algebraiske brøker
    if (exerciseNum === 1 || taskLower.includes('forkort')) {
      return 'rational_simplify';
    }

    // Oppgave 2-3: Multipliser algebraiske brøker
    if ((exerciseNum >= 2 && exerciseNum <= 3) || sampleTasks.some(t => t.includes('\\cdot'))) {
      return 'rational_multiply';
    }

    // Oppgave 4: Addér brøker med lik nevner
    if (exerciseNum === 4) {
      return 'rational_add_same';
    }

    // Oppgave 5: Utvid algebraiske brøker
    if (exerciseNum === 5 || taskLower.includes('utvid')) {
      return 'rational_expand';
    }

    // Oppgave 6-9: Addér/subtraher brøker med ulik nevner
    if (exerciseNum >= 6 && exerciseNum <= 9) {
      return 'rational_add_diff';
    }

    return 'rational_simplify';
  }

  // ============== EQUATIONS DETECTION (Kapittel 2.1) ==============
  const isEquationChapter = exercise.id?.includes('2-1') || false;
  if (isEquationChapter) {
    const taskLower = exercise.task?.toLowerCase() || '';
    const exerciseNum = parseInt(exercise.id?.split('-').pop()?.replace(/\D/g, '') || '0');
    const hasEquals = sampleTasks.some(t => t.includes('='));

    if (hasEquals || taskLower.includes('likning')) {
      // Oppgave 11-13: Likninger med parenteser
      if (exerciseNum >= 11 && exerciseNum <= 13) {
        return 'equation_parentheses';
      }
      // Oppgave 7-10: Likninger med brøker
      if (exerciseNum >= 7 && exerciseNum <= 10) {
        return 'equation_fraction';
      }
      // Oppgave 3-6: Likninger med mult/div
      if (exerciseNum >= 3 && exerciseNum <= 6) {
        return 'equation_mult_div';
      }
      // Oppgave 1-2: Enkle likninger
      return 'equation_simple';
    }
  }

  // ============== POTENSREGNING DETECTION (Kapittel 1.1) ==============
  const isPowerChapter = exercise.id?.includes('1-1') || false;
  if (isPowerChapter) {
    const exerciseNum = parseInt(exercise.id?.split('-').pop() || '0');

    // Oppgave 10: Mixed fraction problems
    if (exerciseNum === 10) {
      return 'mixed_fraction';
    }

    // Oppgave 9: a^0 = 1
    if (exerciseNum === 9 || sampleTasks.some(t => /\^0/.test(t) || /\^\{0\}/.test(t))) {
      return 'zero_exponent';
    }

    // Oppgave 8: (x^a)^b = x^(a*b)
    if (exerciseNum === 8 || sampleTasks.some(t => /\([^)]+\^[^)]+\)\^/.test(t))) {
      return 'power_of_power';
    }

    // Oppgave 7: (a/b)^n
    if (exerciseNum === 7 || sampleTasks.some(t => /\(\\frac/.test(t) || /\\left\(\\frac/.test(t))) {
      return 'power_of_fraction';
    }

    // Oppgave 6: (ab)^n
    if (exerciseNum === 6 || sampleTasks.some(t => /\([a-z]+\)\^/.test(t))) {
      return 'power_of_product';
    }

    // Oppgave 5: a^(-n)/b^(-m) = b^m/a^n
    if (exerciseNum === 5 || (sampleTasks.some(t => t.includes('\\frac')) && sampleTasks.some(t => /\^{-/.test(t) || /\^\(-/.test(t)))) {
      return 'negative_in_fraction';
    }

    // Oppgave 4: x^(-n) = 1/x^n
    if (exerciseNum === 4 || sampleTasks.some(t => /\^{-/.test(t) || /\^\(-/.test(t))) {
      return 'negative_exponents';
    }

    // Oppgave 3: x^a / x^b
    if (exerciseNum === 3 || sampleTasks.some(t => t.includes('\\frac') || t.includes('/'))) {
      return 'power_division';
    }

    // Oppgave 2: x^a * x^b
    if (exerciseNum === 2 || sampleTasks.some(t => t.includes('\\cdot') || t.includes('*'))) {
      return 'power_multiplication';
    }

    // Oppgave 1: numeric calculation
    if (exerciseNum === 1 || hasNumericAnswers) {
      return 'numeric_power';
    }
  }

  // ============== ALGEBRA DETECTION (Kapittel 1.2) ==============
  const isAlgebraChapter = exercise.id?.includes('1-2') || false;
  if (isAlgebraChapter) {
    const exerciseNum = parseInt(exercise.id?.split('-').pop() || '0');

    // Oppgave 7: Multiplisere tre parenteser
    if (exerciseNum === 7) {
      return 'algebra_expand_triple';
    }

    // Oppgave 5-6: Multiplisere to parenteser
    if (exerciseNum >= 5 && exerciseNum <= 6) {
      return 'algebra_expand_binomial';
    }

    // Oppgave 3-4: Distributiv lov
    if (exerciseNum >= 3 && exerciseNum <= 4) {
      return 'algebra_distribution';
    }

    // Oppgave 1-2: Like ledd
    return 'algebra_like_terms';
  }

  // ============== BRØKREGNING DETECTION (Kapittel 1.3) ==============
  const isFractionChapter = exercise.id?.includes('1-3') || false;
  if (isFractionChapter) {
    const exerciseNum = parseInt(exercise.id?.split('-').pop() || '0');

    // Oppgave 10: Minste felles nevner
    if (exerciseNum === 10) {
      return 'fraction_lcm';
    }

    // Oppgave 8-9: Addere/subtrahere med ulik nevner
    if (exerciseNum >= 8 && exerciseNum <= 9) {
      return 'fraction_add_diff_denom';
    }

    // Oppgave 7: Utvide brøker
    if (exerciseNum === 7) {
      return 'fraction_expand';
    }

    // Oppgave 6: Addere med lik nevner
    if (exerciseNum === 6) {
      return 'fraction_add_same_denom';
    }

    // Oppgave 5: Brudden brøk
    if (exerciseNum === 5) {
      return 'fraction_complex';
    }

    // Oppgave 4: Dele brøker
    if (exerciseNum === 4) {
      return 'fraction_divide';
    }

    // Oppgave 2: Forkorte brøker
    if (exerciseNum === 2) {
      return 'fraction_simplify';
    }

    // Oppgave 1, 3: Gange brøker
    return 'fraction_multiply';
  }

  // Default fallback
  if (hasExpressionAnswers) {
    return 'power_multiplication';
  }
  if (hasNumericAnswers) {
    return 'numeric_power';
  }

  return 'unknown';
}

// ============== PROBLEM GENERATORS ==============

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomBase = () => ['a', 'b', 'x', 'y'][randInt(0, 3)];
const randomBases = () => {
  const bases = ['a', 'b', 'c', 'x', 'y'];
  const i = randInt(0, bases.length - 1);
  let j = randInt(0, bases.length - 1);
  while (j === i) j = randInt(0, bases.length - 1);
  return [bases[i], bases[j]];
};

// Numeric power: 2^3 = 8
function generateNumericPower(): TrainingProblem {
  const base = randInt(2, 10);
  const exp = randInt(2, 4);
  const answer = Math.pow(base, exp);
  return {
    id: 0,
    expression: `${base}^{${exp}}`,
    answer,
    expressionAnswer: null,
    userAnswer: '',
  };
}

// Power multiplication: x^a * x^b = x^(a+b)
function generatePowerMultiplication(): TrainingProblem {
  const base = randomBase();
  const exp1 = randInt(1, 8);
  const exp2 = randInt(1, 8);
  const answerExp = exp1 + exp2;
  return {
    id: 0,
    expression: `${base}^{${exp1}} \\cdot ${base}^{${exp2}}`,
    answer: null,
    expressionAnswer: `${base}^${answerExp}`,
    userAnswer: '',
  };
}

// Power division: x^a / x^b = x^(a-b)
function generatePowerDivision(): TrainingProblem {
  const base = randomBase();
  const exp1 = randInt(4, 12);
  const exp2 = randInt(1, exp1 - 1);
  const answerExp = exp1 - exp2;
  return {
    id: 0,
    expression: `\\frac{${base}^{${exp1}}}{${base}^{${exp2}}}`,
    answer: null,
    expressionAnswer: `${base}^${answerExp}`,
    userAnswer: '',
  };
}

// Negative exponents: x^(-n) = 1/x^n
function generateNegativeExponents(): TrainingProblem {
  const base = randomBase();
  const exp = randInt(2, 6);
  return {
    id: 0,
    expression: `${base}^{-${exp}}`,
    answer: null,
    expressionAnswer: `1/${base}^${exp}`,
    userAnswer: '',
  };
}

// Negative in fraction: a^(-n)/b^(-m) = b^m/a^n
function generateNegativeInFraction(): TrainingProblem {
  const [base1, base2] = randomBases();
  const exp1 = randInt(2, 5);
  const exp2 = randInt(2, 5);
  return {
    id: 0,
    expression: `\\frac{${base1}^{-${exp1}}}{${base2}^{-${exp2}}}`,
    answer: null,
    expressionAnswer: `${base2}^${exp2}/${base1}^${exp1}`,
    userAnswer: '',
  };
}

// Power of product: (ab)^n = a^n * b^n
function generatePowerOfProduct(): TrainingProblem {
  const [base1, base2] = randomBases();
  const exp = randInt(2, 5);
  return {
    id: 0,
    expression: `(${base1}${base2})^{${exp}}`,
    answer: null,
    expressionAnswer: `${base1}^${exp}*${base2}^${exp}`,
    userAnswer: '',
  };
}

// Power of fraction: (a/b)^n = a^n/b^n
function generatePowerOfFraction(): TrainingProblem {
  const [base1, base2] = randomBases();
  const exp = randInt(2, 4);
  return {
    id: 0,
    expression: `\\left(\\frac{${base1}}{${base2}}\\right)^{${exp}}`,
    answer: null,
    expressionAnswer: `${base1}^${exp}/${base2}^${exp}`,
    userAnswer: '',
  };
}

// Power of power: (x^a)^b = x^(a*b)
function generatePowerOfPower(): TrainingProblem {
  const base = randomBase();
  const exp1 = randInt(2, 5);
  const exp2 = randInt(2, 4);
  const answerExp = exp1 * exp2;
  return {
    id: 0,
    expression: `\\left(${base}^{${exp1}}\\right)^{${exp2}}`,
    answer: null,
    expressionAnswer: `${base}^${answerExp}`,
    userAnswer: '',
  };
}

// Zero exponent: a^0 = 1
function generateZeroExponent(): TrainingProblem {
  const base = randInt(0, 1) === 0 ? randomBase() : String(randInt(2, 20));
  return {
    id: 0,
    expression: `${base}^{0}`,
    answer: 1,
    expressionAnswer: null,
    userAnswer: '',
  };
}

// Mixed fraction problem
function generateMixedFraction(): TrainingProblem {
  const base = randomBase();
  const exp1 = randInt(2, 6);
  const exp2 = randInt(1, exp1 - 1);
  const exp3 = randInt(1, 4);
  const answerExp = exp1 - exp2 + exp3;
  return {
    id: 0,
    expression: `\\frac{${base}^{${exp1}}}{${base}^{${exp2}}} \\cdot ${base}^{${exp3}}`,
    answer: null,
    expressionAnswer: `${base}^${answerExp}`,
    userAnswer: '',
  };
}

// ============== ALGEBRA GENERATORS ==============

function generateAlgebraLikeTerms(): TrainingProblem {
  const variable = randomBase();
  const coef1 = randInt(1, 10);
  const coef2 = randInt(1, 10);
  const isAddition = randInt(0, 1) === 0;
  const answer = isAddition ? coef1 + coef2 : coef1 - coef2;
  const sign = isAddition ? '+' : '-';

  return {
    id: 0,
    expression: `${coef1}${variable} ${sign} ${coef2}${variable}`,
    answer: null,
    expressionAnswer: `${answer}${variable}`,
    userAnswer: '',
  };
}

function generateAlgebraDistribution(): TrainingProblem {
  const variable = randomBase();
  const coef = randInt(2, 6);
  const constant = randInt(1, 10);
  const isAddition = randInt(0, 1) === 0;
  const sign = isAddition ? '+' : '-';

  const term1 = coef;
  const term2 = isAddition ? coef * constant : -coef * constant;

  const term2Str = term2 >= 0 ? `+${term2}` : `${term2}`;

  return {
    id: 0,
    expression: `${coef}(${variable} ${sign} ${constant})`,
    answer: null,
    expressionAnswer: `${term1}${variable}${term2Str}`,
    userAnswer: '',
  };
}

function generateAlgebraExpandBinomial(): TrainingProblem {
  const variable = randomBase();
  const a = randInt(1, 5);
  const b = randInt(1, 5);

  const coef2 = a + b;
  const coef3 = a * b;

  return {
    id: 0,
    expression: `(${variable}+${a})(${variable}+${b})`,
    answer: null,
    expressionAnswer: `${variable}^2+${coef2}${variable}+${coef3}`,
    userAnswer: '',
  };
}

function generateAlgebraExpandTriple(): TrainingProblem {
  const variable = randomBase();
  const a = randInt(1, 3);
  const b = randInt(1, 3);
  const c = randInt(1, 3);

  const coef2 = a + b + c;
  const coef3 = a * b + a * c + b * c;
  const coef4 = a * b * c;

  return {
    id: 0,
    expression: `(${variable}+${a})(${variable}+${b})(${variable}+${c})`,
    answer: null,
    expressionAnswer: `${variable}^3+${coef2}${variable}^2+${coef3}${variable}+${coef4}`,
    userAnswer: '',
  };
}

// ============== BRØKREGNING GENERATORS ==============

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function generateFractionMultiply(): TrainingProblem {
  const a = randInt(1, 6);
  const b = randInt(2, 8);
  const c = randInt(1, 6);
  const d = randInt(2, 8);

  const num = a * c;
  const den = b * d;
  const g = gcd(num, den);

  return {
    id: 0,
    expression: `\\frac{${a}}{${b}} \\cdot \\frac{${c}}{${d}}`,
    answer: null,
    expressionAnswer: `${num / g}/${den / g}`,
    userAnswer: '',
  };
}

function generateFractionSimplify(): TrainingProblem {
  const g = randInt(2, 6);
  const num = randInt(1, 6) * g;
  const den = randInt(2, 8) * g;
  const simplifiedNum = num / g;
  const simplifiedDen = den / g;
  const gcd2 = gcd(simplifiedNum, simplifiedDen);

  return {
    id: 0,
    expression: `\\frac{${num}}{${den}}`,
    answer: null,
    expressionAnswer: `${simplifiedNum / gcd2}/${simplifiedDen / gcd2}`,
    userAnswer: '',
  };
}

function generateFractionDivide(): TrainingProblem {
  const a = randInt(1, 6);
  const b = randInt(2, 6);
  const c = randInt(1, 6);
  const d = randInt(2, 6);

  const num = a * d;
  const den = b * c;
  const g = gcd(num, den);

  return {
    id: 0,
    expression: `\\frac{${a}}{${b}} \\div \\frac{${c}}{${d}}`,
    answer: null,
    expressionAnswer: `${num / g}/${den / g}`,
    userAnswer: '',
  };
}

function generateFractionComplex(): TrainingProblem {
  const a = randInt(1, 5);
  const b = randInt(2, 6);
  const c = randInt(1, 5);
  const d = randInt(2, 6);

  const num = a * d;
  const den = b * c;
  const g = gcd(num, den);

  return {
    id: 0,
    expression: `\\frac{\\frac{${a}}{${b}}}{\\frac{${c}}{${d}}}`,
    answer: null,
    expressionAnswer: `${num / g}/${den / g}`,
    userAnswer: '',
  };
}

function generateFractionAddSameDenom(): TrainingProblem {
  const a = randInt(1, 6);
  const b = randInt(1, 6);
  const d = randInt(3, 10);

  const num = a + b;
  const g = gcd(num, d);

  return {
    id: 0,
    expression: `\\frac{${a}}{${d}} + \\frac{${b}}{${d}}`,
    answer: null,
    expressionAnswer: `${num / g}/${d / g}`,
    userAnswer: '',
  };
}

function generateFractionExpand(): TrainingProblem {
  const num = randInt(1, 6);
  const den = randInt(2, 6);
  const factor = randInt(2, 5);

  return {
    id: 0,
    expression: `\\frac{${num}}{${den}} = \\frac{?}{${den * factor}}`,
    answer: num * factor,
    expressionAnswer: null,
    userAnswer: '',
  };
}

function generateFractionAddDiffDenom(): TrainingProblem {
  const a = randInt(1, 5);
  const b = randInt(2, 6);
  const c = randInt(1, 5);
  const d = randInt(2, 6);

  const lcm = (b * d) / gcd(b, d);
  const num = (a * lcm / b) + (c * lcm / d);
  const g = gcd(num, lcm);

  return {
    id: 0,
    expression: `\\frac{${a}}{${b}} + \\frac{${c}}{${d}}`,
    answer: null,
    expressionAnswer: `${num / g}/${lcm / g}`,
    userAnswer: '',
  };
}

function generateFractionLCM(): TrainingProblem {
  const a = randInt(1, 5);
  const b = randInt(2, 8);
  const c = randInt(1, 5);
  const d = randInt(2, 8);
  const e = randInt(1, 5);
  const f = randInt(2, 8);

  const lcm12 = (b * d) / gcd(b, d);
  const lcm = (lcm12 * f) / gcd(lcm12, f);
  const num = (a * lcm / b) + (c * lcm / d) + (e * lcm / f);
  const g = gcd(Math.abs(num), lcm);

  return {
    id: 0,
    expression: `\\frac{${a}}{${b}} + \\frac{${c}}{${d}} + \\frac{${e}}{${f}}`,
    answer: null,
    expressionAnswer: `${num / g}/${lcm / g}`,
    userAnswer: '',
  };
}

// ============== FAKTORISERING GENERATORS ==============

function generatePrimeFactorization(): TrainingProblem {
  const primes = [2, 3, 5, 7];
  const numFactors = randInt(2, 4);
  const factors: number[] = [];

  for (let i = 0; i < numFactors; i++) {
    factors.push(primes[randInt(0, primes.length - 1)]);
  }

  factors.sort((a, b) => a - b);
  const product = factors.reduce((a, b) => a * b, 1);

  return {
    id: 0,
    expression: String(product),
    answer: null,
    expressionAnswer: factors.join('*'),
    userAnswer: '',
  };
}

function generateSimplifyFractionFactor(): TrainingProblem {
  const commonFactor = randInt(2, 6);
  const a = randInt(1, 5) * commonFactor;
  const b = randInt(2, 8) * commonFactor;
  const g = gcd(a, b);

  return {
    id: 0,
    expression: `\\frac{${a}}{${b}}`,
    answer: null,
    expressionAnswer: `${a / g}/${b / g}`,
    userAnswer: '',
  };
}

function generateFactorizeExpression(): TrainingProblem {
  const variable = randomBase();
  const factor = randInt(2, 8);
  const a = randInt(1, 6);

  return {
    id: 0,
    expression: `${factor}${variable} + ${factor * a}`,
    answer: null,
    expressionAnswer: `${factor}(${variable}+${a})`,
    userAnswer: '',
  };
}

function generateSquareIdentityExpand1(): TrainingProblem {
  const variable = randomBase();
  const a = randInt(1, 8);
  const isFirst = randInt(0, 1) === 0;

  if (isFirst) {
    const b = 2 * a;
    const c = a * a;
    return {
      id: 0,
      expression: `(${variable}+${a})^2`,
      answer: null,
      expressionAnswer: `${variable}^2+${b}${variable}+${c}`,
      userAnswer: '',
    };
  } else {
    const b = -2 * a;
    const c = a * a;
    const bStr = `${b}${variable}`;
    return {
      id: 0,
      expression: `(${variable}-${a})^2`,
      answer: null,
      expressionAnswer: `${variable}^2${bStr}+${c}`,
      userAnswer: '',
    };
  }
}

function generateSquareIdentityFactor(): TrainingProblem {
  const variable = randomBase();
  const a = randInt(1, 8);
  const isFirst = randInt(0, 1) === 0;

  if (isFirst) {
    const b = 2 * a;
    const c = a * a;
    return {
      id: 0,
      expression: `${variable}^2 + ${b}${variable} + ${c}`,
      answer: null,
      expressionAnswer: `(${variable}+${a})^2`,
      userAnswer: '',
    };
  } else {
    const b = 2 * a;
    const c = a * a;
    return {
      id: 0,
      expression: `${variable}^2 - ${b}${variable} + ${c}`,
      answer: null,
      expressionAnswer: `(${variable}-${a})^2`,
      userAnswer: '',
    };
  }
}

function generateThirdIdentityExpand(): TrainingProblem {
  const variable = randomBase();
  const a = randInt(1, 10);
  const c = a * a;

  return {
    id: 0,
    expression: `(${variable}+${a})(${variable}-${a})`,
    answer: null,
    expressionAnswer: `${variable}^2-${c}`,
    userAnswer: '',
  };
}

function generateThirdIdentityFactor(): TrainingProblem {
  const variable = randomBase();
  const a = randInt(1, 10);
  const c = a * a;

  return {
    id: 0,
    expression: `${variable}^2 - ${c}`,
    answer: null,
    expressionAnswer: `(${variable}+${a})(${variable}-${a})`,
    userAnswer: '',
  };
}

// ============== RASJONALE UTTRYKK GENERATORS ==============

function generateRationalSimplify(): TrainingProblem {
  const variable = randomBase();
  const factor = randInt(2, 6);

  return {
    id: 0,
    expression: `\\frac{${factor}${variable}}{${factor * randInt(2, 5)}}`,
    answer: null,
    expressionAnswer: `${variable}/${randInt(2, 5)}`,
    userAnswer: '',
  };
}

function generateRationalMultiply(): TrainingProblem {
  const variable = randomBase();
  const a = randInt(1, 5);
  const b = randInt(2, 6);

  return {
    id: 0,
    expression: `\\frac{${a}}{${variable}} \\cdot \\frac{${variable}}{${b}}`,
    answer: null,
    expressionAnswer: `${a}/${b}`,
    userAnswer: '',
  };
}

function generateRationalAddSame(): TrainingProblem {
  const variable = randomBase();
  const a = randInt(1, 5);
  const b = randInt(1, 5);

  return {
    id: 0,
    expression: `\\frac{${a}}{${variable}} + \\frac{${b}}{${variable}}`,
    answer: null,
    expressionAnswer: `${a + b}/${variable}`,
    userAnswer: '',
  };
}

function generateRationalExpand(): TrainingProblem {
  const variable = randomBase();
  const num = randInt(1, 5);
  const factor = randInt(2, 4);

  return {
    id: 0,
    expression: `\\frac{${num}}{${variable}} = \\frac{?}{${factor}${variable}}`,
    answer: num * factor,
    expressionAnswer: null,
    userAnswer: '',
  };
}

function generateRationalAddDiff(): TrainingProblem {
  const variable = randomBase();
  const a = randInt(1, 5);
  const b = randInt(1, 5);
  const c = randInt(2, 4);

  return {
    id: 0,
    expression: `\\frac{${a}}{${variable}} + \\frac{${b}}{${c}${variable}}`,
    answer: null,
    expressionAnswer: `${a * c + b}/${c}${variable}`,
    userAnswer: '',
  };
}

// ============== EQUATION GENERATORS ==============

function generateEquationSimple(): TrainingProblem {
  const patterns = [
    () => {
      const a = randInt(1, 15);
      const b = randInt(a + 1, 25);
      const answer = b - a;
      return { expression: `x + ${a} = ${b}`, answer: String(answer) };
    },
    () => {
      const a = randInt(1, 15);
      const b = randInt(-5, 15);
      const answer = a + b;
      return { expression: `x - ${a} = ${b}`, answer: String(answer) };
    },
    () => {
      const a = randInt(1, 15);
      const b = randInt(a + 1, 25);
      const answer = b - a;
      return { expression: `${a} + x = ${b}`, answer: String(answer) };
    },
    () => {
      const x = randInt(1, 12);
      const a = randInt(x + 1, x + 15);
      const b = a - x;
      return { expression: `${a} - x = ${b}`, answer: String(x) };
    },
  ];

  const { expression, answer } = patterns[randInt(0, patterns.length - 1)]();
  return { id: 0, expression, answer: null, expressionAnswer: answer, userAnswer: '' };
}

function generateEquationMultDiv(): TrainingProblem {
  const patterns = [
    () => {
      const a = randInt(2, 10);
      const x = randInt(1, 15);
      const b = a * x;
      return { expression: `${a}x = ${b}`, answer: String(x) };
    },
    () => {
      const a = randInt(2, 8);
      const x = randInt(1, 10) * a;
      const b = x / a;
      return { expression: `\\frac{x}{${a}} = ${b}`, answer: String(x) };
    },
    () => {
      const a = randInt(2, 8);
      const x = randInt(-10, 10);
      const b = a * x;
      return { expression: `${a}x = ${b}`, answer: String(x) };
    },
    () => {
      const a = randInt(2, 6);
      const b = randInt(2, 6);
      const x = randInt(1, 10);
      const c = a * x + b;
      return { expression: `${a}x + ${b} = ${c}`, answer: String(x) };
    },
  ];

  const { expression, answer } = patterns[randInt(0, patterns.length - 1)]();
  return { id: 0, expression, answer: null, expressionAnswer: answer, userAnswer: '' };
}

function generateEquationFraction(): TrainingProblem {
  const patterns = [
    () => {
      const a = randInt(2, 6);
      const b = randInt(1, 10);
      const x = a * b;
      return { expression: `\\frac{x}{${a}} = ${b}`, answer: String(x) };
    },
    () => {
      const a = randInt(2, 5);
      const b = randInt(2, 5);
      const x = randInt(1, 8);
      const c = (a * x) / b;
      if (Number.isInteger(c)) {
        return { expression: `\\frac{${a}x}{${b}} = ${c}`, answer: String(x) };
      }
      const newX = b * randInt(1, 4);
      const newC = (a * newX) / b;
      return { expression: `\\frac{${a}x}{${b}} = ${newC}`, answer: String(newX) };
    },
    () => {
      const a = randInt(2, 6);
      const b = randInt(1, 5);
      const x = a * randInt(1, 5);
      const c = x / a + b;
      return { expression: `\\frac{x}{${a}} + ${b} = ${c}`, answer: String(x) };
    },
  ];

  const { expression, answer } = patterns[randInt(0, patterns.length - 1)]();
  return { id: 0, expression, answer: null, expressionAnswer: answer, userAnswer: '' };
}

function generateEquationParentheses(): TrainingProblem {
  const patterns = [
    () => {
      const a = randInt(2, 6);
      const b = randInt(1, 8);
      const x = randInt(1, 10);
      const c = a * (x + b);
      return { expression: `${a}(x + ${b}) = ${c}`, answer: String(x) };
    },
    () => {
      const a = randInt(2, 5);
      const b = randInt(1, 6);
      const x = randInt(1, 8);
      const c = a * (x - b);
      return { expression: `${a}(x - ${b}) = ${c}`, answer: String(x) };
    },
    () => {
      const a = randInt(2, 4);
      const b = randInt(1, 5);
      const c = randInt(2, 4);
      const d = randInt(1, 5);
      const x = randInt(1, 8);
      const left = a * (x + b);
      const right = c * (x + d);
      if (left !== right) {
        return { expression: `${a}(x + ${b}) = ${left}`, answer: String(x) };
      }
      return { expression: `${a}(x + ${b}) = ${a * (x + b)}`, answer: String(x) };
    },
  ];

  const { expression, answer } = patterns[randInt(0, patterns.length - 1)]();
  return { id: 0, expression, answer: null, expressionAnswer: answer, userAnswer: '' };
}

// ============== PROBLEM GENERATION BY TYPE ==============

function generateProblemsForType(type: ExerciseType, count: number): TrainingProblem[] {
  const problems: TrainingProblem[] = [];
  const generators: Record<ExerciseType, () => TrainingProblem> = {
    numeric_power: generateNumericPower,
    power_multiplication: generatePowerMultiplication,
    power_division: generatePowerDivision,
    negative_exponents: generateNegativeExponents,
    negative_in_fraction: generateNegativeInFraction,
    power_of_product: generatePowerOfProduct,
    power_of_fraction: generatePowerOfFraction,
    power_of_power: generatePowerOfPower,
    zero_exponent: generateZeroExponent,
    mixed_fraction: generateMixedFraction,
    algebra_like_terms: generateAlgebraLikeTerms,
    algebra_distribution: generateAlgebraDistribution,
    algebra_expand_binomial: generateAlgebraExpandBinomial,
    algebra_expand_triple: generateAlgebraExpandTriple,
    fraction_multiply: generateFractionMultiply,
    fraction_simplify: generateFractionSimplify,
    fraction_divide: generateFractionDivide,
    fraction_complex: generateFractionComplex,
    fraction_add_same_denom: generateFractionAddSameDenom,
    fraction_expand: generateFractionExpand,
    fraction_add_diff_denom: generateFractionAddDiffDenom,
    fraction_lcm: generateFractionLCM,
    prime_factorization: generatePrimeFactorization,
    simplify_fraction_factor: generateSimplifyFractionFactor,
    factorize_expression: generateFactorizeExpression,
    square_identity_expand1: generateSquareIdentityExpand1,
    square_identity_factor: generateSquareIdentityFactor,
    third_identity_expand: generateThirdIdentityExpand,
    third_identity_factor: generateThirdIdentityFactor,
    rational_simplify: generateRationalSimplify,
    rational_multiply: generateRationalMultiply,
    rational_add_same: generateRationalAddSame,
    rational_expand: generateRationalExpand,
    rational_add_diff: generateRationalAddDiff,
    equation_simple: generateEquationSimple,
    equation_mult_div: generateEquationMultDiv,
    equation_fraction: generateEquationFraction,
    equation_parentheses: generateEquationParentheses,
    unknown: generatePowerMultiplication,
  };

  const generator = generators[type] || generators.unknown;

  for (let i = 0; i < count; i++) {
    for (let attempt = 0; attempt < 10; attempt++) {
      const problem = generator();
      const isDuplicate = problems.some(p => p.expression === problem.expression);
      if (!isDuplicate) {
        problems.push({ ...problem, id: i + 1 });
        break;
      }
    }
  }

  // Shuffle
  return problems.sort(() => Math.random() - 0.5);
}

// ============== COMPONENT ==============

export function TrainingClient({
  exercise,
  courseId,
  chapterId,
  exerciseId,
  courseTitle,
  chapterTitle,
}: TrainingClientProps) {
  const { data: session } = useSession();

  // Check if exercise has trainable content
  const hasNumericAnswers = exercise.subTasks?.some(st => st.answer !== undefined) ?? false;
  const hasExpressionAnswers = exercise.subTasks?.some(st => st.expressionAnswer !== undefined) ?? false;

  // Exercise type
  const exerciseType = useMemo(() => {
    return detectExerciseType(exercise);
  }, [exercise]);

  const [problems, setProblems] = useState<TrainingProblem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [wrongOrderFeedback, setWrongOrderFeedback] = useState<string | null>(null);
  const [errorCount, setErrorCount] = useState(0);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && startTime) {
      interval = setInterval(() => setTimeElapsed(Date.now() - startTime), 100);
    }
    return () => clearInterval(interval);
  }, [isActive, startTime]);

  // Focus input
  useEffect(() => {
    if (isActive && inputRef.current) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [currentIndex, isActive]);

  // Detect touch device on mount
  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsTouchDevice(hasTouch && isSmallScreen);
      if (hasTouch && isSmallScreen) {
        setTimeout(() => setKeyboardVisible(true), 300);
      }
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Auto-start training on mount
  useEffect(() => {
    if ((hasNumericAnswers || hasExpressionAnswers) && problems.length === 0 && !showResults) {
      const newProblems = generateProblemsForType(exerciseType, 10);
      setProblems(newProblems);
      setCurrentIndex(0);
      setIsActive(true);
      setStartTime(Date.now());
      setTimeElapsed(0);
      setCorrectCount(0);
      setErrorCount(0);
    }
  }, [hasNumericAnswers, hasExpressionAnswers, exerciseType, problems.length, showResults]);

  // Format time
  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  // Check if exercise has no trainable content
  if (!hasNumericAnswers && !hasExpressionAnswers) {
    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Ingen treningsoppgaver</h1>
            <p className="text-muted-foreground">Denne oppgaven har ikke treningsmodus.</p>
            <Link href={`/bok/${courseId}/${chapterId}/oppgave/${exerciseId}`}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Tilbake til oppgaven
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Restart training
  const restartTraining = () => {
    const newProblems = generateProblemsForType(exerciseType, 10);
    setProblems(newProblems);
    setCurrentIndex(0);
    setIsActive(true);
    setStartTime(Date.now());
    setTimeElapsed(0);
    setCorrectCount(0);
    setErrorCount(0);
    setShowResults(false);
    setWrongOrderFeedback(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleInputChange = (value: string) => {
    // Allow algebraic expressions: letters, numbers, operators, parentheses, ^, /, *
    if (!/^[-\d,\.\^a-zA-Z\*\/\+\(\)\s]*$/.test(value)) return;

    const newProblems = [...problems];
    newProblems[currentIndex].userAnswer = value;
    setProblems(newProblems);
    setWrongOrderFeedback(null);

    const currentProblem = newProblems[currentIndex];

    // Check numeric answer
    if (currentProblem.answer !== null) {
      const userAnswer = parseFloat(value.replace(',', '.'));
      if (!isNaN(userAnswer) && userAnswer === currentProblem.answer) {
        setWrongAnswer(false);
        newProblems[currentIndex].isCorrect = true;
        setProblems(newProblems);
        moveToNext();
        return;
      }
    }

    // Check algebraic answer
    if (currentProblem.expressionAnswer !== null && value.trim().length > 0) {
      if (areEquivalent(value, currentProblem.expressionAnswer)) {
        setWrongAnswer(false);
        newProblems[currentIndex].isCorrect = true;
        setProblems(newProblems);
        moveToNext();
        return;
      }
    }
  };

  const moveToNext = () => {
    setTimeout(() => {
      if (currentIndex < problems.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        finishTraining();
      }
    }, 400);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAndProceed();
    }
  };

  const checkAndProceed = () => {
    const currentProblem = problems[currentIndex];
    if (!currentProblem) return;

    const userValue = currentProblem.userAnswer.trim();
    if (!userValue) return;

    // Check numeric answer
    if (currentProblem.answer !== null) {
      const userAnswer = parseFloat(userValue.replace(',', '.'));
      if (!isNaN(userAnswer) && userAnswer === currentProblem.answer) {
        setWrongAnswer(false);
        const newProblems = [...problems];
        newProblems[currentIndex].isCorrect = true;
        setProblems(newProblems);
        setCorrectCount(c => c + 1);
        moveToNext();
        return;
      }
    }

    // Check algebraic answer
    if (currentProblem.expressionAnswer !== null) {
      if (areEquivalent(userValue, currentProblem.expressionAnswer)) {
        setWrongAnswer(false);
        const newProblems = [...problems];
        newProblems[currentIndex].isCorrect = true;
        setProblems(newProblems);
        setCorrectCount(c => c + 1);
        moveToNext();
        return;
      }
    }

    // Wrong answer
    setWrongAnswer(true);
    setErrorCount(c => c + 1);
    setTimeout(() => setWrongAnswer(false), 500);
  };

  const finishTraining = async () => {
    setIsActive(false);
    setShowResults(true);
    const finalCorrectCount = problems.filter(p => p.isCorrect).length;
    setCorrectCount(finalCorrectCount);

    // Save to database if logged in
    if (session?.user?.id && startTime) {
      const timeSpent = Date.now() - startTime;
      const questionsAnswered = currentIndex + 1; // Number of questions attempted

      try {
        await fetch('/api/textbook/training-sessions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            exerciseId,
            chapterId,
            courseId,
            questionsAnswered,
            questionsCorrect: finalCorrectCount,
            timeSpentMs: timeSpent,
            startedAt: new Date(startTime).toISOString(),
          }),
        });
      } catch (error) {
        console.error('Failed to save training session:', error);
      }
    }
  };

  const handleInputWithCursor = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e.target.value);
    setCursorPosition(e.target.selectionStart || 0);
  };

  const insertAtCursor = (char: string) => {
    const currentProblem = problems[currentIndex];
    if (!currentProblem) return;

    const value = currentProblem.userAnswer || '';
    const newValue = value.slice(0, cursorPosition) + char + value.slice(cursorPosition);
    handleInputChange(newValue);
    const newPos = cursorPosition + char.length;
    setCursorPosition(newPos);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(newPos, newPos);
      }
    }, 0);
  };

  const deleteAtCursor = () => {
    const currentProblem = problems[currentIndex];
    if (!currentProblem) return;

    const value = currentProblem.userAnswer || '';
    if (cursorPosition > 0) {
      const newValue = value.slice(0, cursorPosition - 1) + value.slice(cursorPosition);
      handleInputChange(newValue);
      const newPos = cursorPosition - 1;
      setCursorPosition(newPos);

      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.setSelectionRange(newPos, newPos);
        }
      }, 0);
    }
  };

  const currentProblem = problems[currentIndex];
  const isAlgebraic = currentProblem?.expressionAnswer !== null;
  const hasFraction = currentProblem?.userAnswer?.includes('/') || false;
  const heightClass = hasFraction ? 'h-20 md:h-40 lg:h-44' : 'h-10 md:h-16 lg:h-20';
  const isEquation = currentProblem?.expression?.includes('=') || false;

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        {/* Breadcrumbs - skjult på mobil */}
        <div className="hidden md:block container py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/bok">Lærebok</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/bok/${courseId}`}>{courseTitle}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/bok/${courseId}/${chapterId}`}>{chapterTitle}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Trening - Oppgave {exercise.number}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container py-2 md:py-4 md:pb-12">
          <div className="max-w-2xl mx-auto space-y-3 md:space-y-6">
            {/* Header - kompakt på mobil */}
            <div className="text-center space-y-1 md:space-y-2">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-2 md:p-3">
                  <Dumbbell className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h1 className="text-lg md:text-2xl font-bold">Trening - Oppgave {exercise.number}</h1>
              </div>

              {/* Stats bar - skjult på mobil */}
              <div className="hidden md:flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4 text-muted-foreground" />
                  <span className="font-mono">{formatTime(timeElapsed)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span>{currentIndex + 1} / {problems.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{correctCount}</span>
                </div>
                {errorCount > 0 && (
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span>{errorCount}</span>
                  </div>
                )}
              </div>
            </div>

            {showResults ? (
              // Results screen
              <Card>
                <CardContent className="p-8 text-center space-y-6">
                  <div className="text-6xl">🎉</div>
                  <h2 className="text-2xl font-bold">Trening fullført!</h2>

                  <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">{correctCount}</div>
                      <div className="text-sm text-muted-foreground">Riktige</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">{formatTime(timeElapsed)}</div>
                      <div className="text-sm text-muted-foreground">Tid</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
                      <div className="text-3xl font-bold text-red-600">{errorCount}</div>
                      <div className="text-sm text-muted-foreground">Feil</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <Button onClick={restartTraining} className="bg-gradient-to-br from-blue-500 to-indigo-600">
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Tren igjen
                    </Button>
                    <Link href={`/bok/${courseId}/${chapterId}`}>
                      <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Tilbake til kapittel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : problems.length > 0 ? (
              // Training screen
              <>
              <Card>
                <CardContent className="p-4 md:p-8 text-center space-y-4 md:space-y-8">
                  <Badge variant="outline" className="text-sm md:text-lg px-3 md:px-4 py-1 md:py-2">
                    Oppgave {currentIndex + 1} av {problems.length}
                  </Badge>

                  {isEquation ? (
                    // Equation display: equation on one line, x = [input] on next
                    <div className="space-y-3 md:space-y-6">
                      <div className="text-2xl md:text-5xl lg:text-6xl font-mono font-bold">
                        <LatexRenderer content={`$${currentProblem?.expression}$`} />
                      </div>

                      <div className="text-2xl md:text-5xl lg:text-6xl font-mono font-bold flex items-center justify-center gap-2 md:gap-4">
                        <span>x =</span>
                        <Input
                          ref={inputRef}
                          type="text"
                          inputMode="numeric"
                          value={currentProblem?.userAnswer || ''}
                          onChange={handleInputWithCursor}
                          onKeyPress={handleKeyPress}
                          onFocus={() => isTouchDevice && setKeyboardVisible(true)}
                          className={`w-16 md:w-32 lg:w-40 h-10 md:h-16 lg:h-20 text-center text-xl md:text-4xl lg:text-5xl font-mono border-2 md:border-4 ${
                            wrongAnswer
                              ? 'border-red-500 bg-red-50 dark:bg-red-950/30 focus:border-red-600'
                              : 'border-blue-300 focus:border-blue-500'
                          }`}
                          disabled={!isActive}
                          autoFocus
                          readOnly={isTouchDevice}
                          placeholder="?"
                        />
                      </div>
                    </div>
                  ) : (
                    // Regular expression display: expression = [input]
                    <div className="text-2xl md:text-5xl lg:text-6xl font-mono font-bold flex items-center justify-center gap-2 md:gap-4 flex-wrap">
                      <span className="inline-block">
                        <LatexRenderer content={`$${currentProblem?.expression}$`} />
                      </span>
                      <span>=</span>
                      {isAlgebraic ? (
                        <div
                          className={`relative w-32 md:w-56 lg:w-64 ${heightClass} border-2 md:border-4 rounded-md cursor-text transition-all duration-200 ${
                            wrongAnswer
                              ? 'border-red-500 bg-red-50 dark:bg-red-950/30'
                              : 'border-blue-300 focus-within:border-blue-500'
                          }`}
                          onClick={() => inputRef.current?.focus()}
                        >
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {currentProblem?.userAnswer ? (
                              <LatexRenderer content={`$${toLatex(currentProblem.userAnswer)}$`} />
                            ) : (
                              <span className="text-gray-300 dark:text-gray-600">?</span>
                            )}
                          </div>
                          <input
                            ref={inputRef}
                            type="text"
                            inputMode="text"
                            value={currentProblem?.userAnswer || ''}
                            onChange={handleInputWithCursor}
                            onKeyPress={handleKeyPress}
                            onSelect={(e) => setCursorPosition((e.target as HTMLInputElement).selectionStart || 0)}
                            onFocus={() => isTouchDevice && setKeyboardVisible(true)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-text"
                            disabled={!isActive}
                            autoFocus
                            readOnly={isTouchDevice}
                          />
                        </div>
                      ) : (
                        <Input
                          ref={inputRef}
                          type="text"
                          inputMode="numeric"
                          value={currentProblem?.userAnswer || ''}
                          onChange={handleInputWithCursor}
                          onKeyPress={handleKeyPress}
                          onFocus={() => isTouchDevice && setKeyboardVisible(true)}
                          className={`w-16 md:w-32 lg:w-40 ${heightClass} text-center text-xl md:text-4xl lg:text-5xl font-mono border-2 md:border-4 ${
                            wrongAnswer
                              ? 'border-red-500 bg-red-50 dark:bg-red-950/30 focus:border-red-600'
                              : 'border-blue-300 focus:border-blue-500'
                          }`}
                          disabled={!isActive}
                          autoFocus
                          readOnly={isTouchDevice}
                          placeholder="?"
                        />
                      )}
                    </div>
                  )}

                  {wrongOrderFeedback && (
                    <div className="text-amber-600 dark:text-amber-400 text-sm">
                      {wrongOrderFeedback}
                    </div>
                  )}

                  <Button
                    onClick={checkAndProceed}
                    disabled={!isActive || !currentProblem?.userAnswer?.trim()}
                    className="bg-gradient-to-br from-blue-500 to-indigo-600"
                  >
                    Sjekk svar
                  </Button>
                </CardContent>
              </Card>

              {/* Progress bar - skjult på mobil for å spare plass */}
              <div className="hidden md:block">
                <ExerciseProgressBar
                  completed={correctCount}
                  total={problems.length}
                />
              </div>
              </>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p>Laster treningsoppgaver...</p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      {/* Virtual keyboard for touch devices */}
      {isTouchDevice && keyboardVisible && isActive && !showResults && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#D1D5DC] dark:bg-zinc-800 p-2 pb-6 shadow-lg z-50">
          <div className="max-w-lg mx-auto flex gap-2">
            {/* Number pad */}
            <div className="flex-1 grid grid-cols-3 gap-1.5">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', ','].map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => insertAtCursor(key)}
                  className="h-12 text-xl font-medium rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-200 dark:active:bg-zinc-600 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                  disabled={!isActive}
                >
                  {key}
                </button>
              ))}
            </div>

            {/* Operator column */}
            {isAlgebraic ? (
              <div className="grid grid-cols-1 gap-1.5">
                {['x', 'y', 'a', 'b'].map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => insertAtCursor(key)}
                    className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    {key}
                  </button>
                ))}
              </div>
            ) : null}

            {/* Operations column */}
            {isAlgebraic ? (
              <div className="grid grid-cols-1 gap-1.5">
                <button
                  type="button"
                  onClick={() => insertAtCursor('^')}
                  className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                  disabled={!isActive}
                >
                  ^
                </button>
                <button
                  type="button"
                  onClick={() => insertAtCursor('*')}
                  className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                  disabled={!isActive}
                >
                  ×
                </button>
                <button
                  type="button"
                  onClick={() => insertAtCursor('/')}
                  className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                  disabled={!isActive}
                >
                  ÷
                </button>
                <button
                  type="button"
                  onClick={deleteAtCursor}
                  className="w-14 h-12 text-xl rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation flex items-center justify-center"
                  disabled={!isActive}
                >
                  ⌫
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-1.5">
                <button
                  type="button"
                  onClick={() => insertAtCursor('^')}
                  className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                  disabled={!isActive}
                >
                  ^
                </button>
                <button
                  type="button"
                  onClick={() => insertAtCursor('*')}
                  className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                  disabled={!isActive}
                >
                  ×
                </button>
                <button
                  type="button"
                  onClick={() => insertAtCursor('/')}
                  className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                  disabled={!isActive}
                >
                  ÷
                </button>
                <button
                  type="button"
                  onClick={deleteAtCursor}
                  className="w-14 h-12 text-xl rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation flex items-center justify-center"
                  disabled={!isActive}
                >
                  ⌫
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
