import type { TextbookExercise } from '@/lib/types/textbook';

export type ExerciseType =
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

/**
 * Hvilken treningsgenerator passer til en oppgave. Generatorene er skrevet for
 * 1T-bokas kapitler 1.2 Potenser, 1.3 Algebra, 1.4 Brøkregning, 1.5 Faktorisering,
 * 1.6 Rasjonale uttrykk og 2.1 Grunnleggende likninger (Daniel 17/9: «Tren» skal
 * bare vises der treningen faktisk lager liknende oppgaver). Alt annet → 'unknown'.
 */
export function detectExerciseType(exercise: TextbookExercise, courseId?: string): ExerciseType {
  if (courseId !== undefined && courseId !== '1t') {
    return 'unknown';
  }
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
  const isFactorizationChapter = exercise.id?.includes('1t-1-5-') || false;
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
  const isRationalChapter = exercise.id?.includes('1t-1-6-') || false;
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
  const isEquationChapter = exercise.id?.includes('1t-2-1-') || false;
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
  const isPowerChapter = exercise.id?.includes('1t-1-2-') || false;
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
  const isAlgebraChapter = exercise.id?.includes('1t-1-3-') || false;
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
  const isFractionChapter = exercise.id?.includes('1t-1-4-') || false;
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

  // Ingen generator passer: ingen trening (tidligere falt alt tilbake på potensoppgaver — Daniel 17/9)
  void hasNumericAnswers; void hasExpressionAnswers;
  return 'unknown';
}

/** Skal «Tren»-knappen vises for denne oppgaven? Bare når en ekte generator finnes. */
export function hasTraining(courseId: string, exercise: TextbookExercise): boolean {
  return detectExerciseType(exercise, courseId) !== 'unknown';
}
