import type { ChallengeProblem, ChallengeType } from '@/lib/supabase/types'

// Seeded random number generator for consistent problem generation
class SeededRandom {
  private seed: number

  constructor(seed: number) {
    this.seed = seed
  }

  // Returns a number between 0 and 1
  next(): number {
    const x = Math.sin(this.seed++) * 10000
    return x - Math.floor(x)
  }

  // Returns integer between min and max (inclusive)
  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min
  }

  // Returns true with given probability
  nextBool(probability = 0.5): boolean {
    return this.next() < probability
  }

  // Shuffle array
  shuffle<T>(array: T[]): T[] {
    const result = [...array]
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1))
      ;[result[i], result[j]] = [result[j], result[i]]
    }
    return result
  }
}

// Generate seed from challenge code
export function codeToSeed(code: string): number {
  let hash = 0
  for (let i = 0; i < code.length; i++) {
    const char = code.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

// Generate 6-digit numeric code
export function generateChallengeCode(): string {
  const chars = '0123456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

// ============= PLUSS/MINUS PROBLEMS =============

function generatePlusMinusProblems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []

  for (let i = 0; i < 15; i++) {
    const isAddition = rng.nextBool()
    let a: number, b: number, answer: number, expression: string

    if (isAddition) {
      a = rng.nextInt(2, 15)
      b = rng.nextInt(2, 15)
      answer = a + b
      expression = `${a} + ${b} = `
    } else {
      a = rng.nextInt(8, 25)
      b = rng.nextInt(2, a - 1)
      answer = a - b
      expression = `${a} - ${b} = `
    }

    problems.push({ id: i + 1, expression, answer })
  }

  return problems
}

// ============= TALLFOLGERE/GANGING PROBLEMS =============

function generateTallfolgereProblems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []

  for (let i = 0; i < 15; i++) {
    const type = rng.nextInt(0, 2)
    let expression: string, answer: number

    if (type === 0) {
      // Multiplication
      const a = rng.nextInt(2, 9)
      const b = rng.nextInt(2, 9)
      answer = a * b
      expression = `${a} × ${b} = `
    } else if (type === 1) {
      // Square numbers
      const base = rng.nextInt(2, 12)
      answer = base * base
      expression = `${base}² = `
    } else {
      // Square roots of perfect squares
      const bases = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144]
      const num = bases[rng.nextInt(0, bases.length - 1)]
      answer = Math.sqrt(num)
      expression = `√${num} = `
    }

    problems.push({ id: i + 1, expression, answer })
  }

  return problems
}

// ============= DIVISJON PROBLEMS =============

function generateDivisjonProblems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []

  for (let i = 0; i < 15; i++) {
    const type = rng.nextInt(0, 1)
    let expression: string, answer: number

    if (type === 0) {
      // Basic division
      const divisor = rng.nextInt(2, 9)
      const quotient = rng.nextInt(2, 12)
      const dividend = divisor * quotient
      answer = quotient
      expression = `${dividend} ÷ ${divisor} = `
    } else {
      // Decimal addition/subtraction
      const a = rng.nextInt(10, 99) / 10 // 1.0 to 9.9
      const b = rng.nextInt(10, 99) / 10
      const isAdd = rng.nextBool()
      if (isAdd) {
        answer = Math.round((a + b) * 10) / 10
        expression = `${a.toFixed(1).replace('.', ',')} + ${b.toFixed(1).replace('.', ',')} = `
      } else {
        const larger = Math.max(a, b)
        const smaller = Math.min(a, b)
        answer = Math.round((larger - smaller) * 10) / 10
        expression = `${larger.toFixed(1).replace('.', ',')} - ${smaller.toFixed(1).replace('.', ',')} = `
      }
    }

    problems.push({ id: i + 1, expression, answer })
  }

  return problems
}

// ============= NEGATIVE TALL PROBLEMS =============

function generateNegativeProblems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []

  for (let i = 0; i < 15; i++) {
    const type = rng.nextInt(0, 3)
    let expression: string, answer: number

    if (type === 0) {
      // Addition with negative
      const a = rng.nextInt(-10, 10)
      const b = rng.nextInt(-10, 10)
      answer = a + b
      const aStr = a < 0 ? `(${a})` : `${a}`
      const bStr = b < 0 ? `(${b})` : `${b}`
      expression = `${aStr} + ${bStr} = `
    } else if (type === 1) {
      // Subtraction with negative
      const a = rng.nextInt(-10, 10)
      const b = rng.nextInt(-10, 10)
      answer = a - b
      const aStr = a < 0 ? `(${a})` : `${a}`
      const bStr = b < 0 ? `(${b})` : `${b}`
      expression = `${aStr} - ${bStr} = `
    } else if (type === 2) {
      // Multiplication with negative
      const a = rng.nextInt(-9, 9)
      const b = rng.nextInt(2, 9)
      answer = a * b
      const aStr = a < 0 ? `(${a})` : `${a}`
      expression = `${aStr} × ${b} = `
    } else {
      // Division with negative
      const divisor = rng.nextInt(2, 9)
      const quotient = rng.nextInt(-9, 9)
      const dividend = divisor * quotient
      answer = quotient
      const dividendStr = dividend < 0 ? `(${dividend})` : `${dividend}`
      expression = `${dividendStr} ÷ ${divisor} = `
    }

    problems.push({ id: i + 1, expression, answer })
  }

  return problems
}

// ============= BLANDET PROBLEMS =============

function generateBlandetProblems(rng: SeededRandom): ChallengeProblem[] {
  // Get 3-4 problems from each category
  const plusMinus = generatePlusMinusProblems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 4)
  const tallfolgere = generateTallfolgereProblems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 4)
  const divisjon = generateDivisjonProblems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 4)
  const negative = generateNegativeProblems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 3)

  // Combine and shuffle
  const allProblems = [...plusMinus, ...tallfolgere, ...divisjon, ...negative]
  const shuffled = rng.shuffle(allProblems)

  // Re-index
  return shuffled.map((p, i) => ({ ...p, id: i + 1 }))
}

// ============= PLUSS/MINUS MODULE-SPECIFIC PROBLEMS =============

// Module 1: Grunnleggende (addisjon og subtraksjon 1-18)
function generatePlusMinusModule1Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const isAddition = rng.nextBool()
    let a: number, b: number, answer: number, expression: string
    if (isAddition) {
      a = rng.nextInt(1, 10)
      b = rng.nextInt(1, Math.min(10, 18 - a))
      answer = a + b
      expression = `${a} + ${b} = `
    } else {
      a = rng.nextInt(3, 17)
      b = rng.nextInt(1, a - 1)
      answer = a - b
      expression = `${a} - ${b} = `
    }
    problems.push({ id: i + 1, expression, answer })
  }
  return problems
}

// Module 2: Ligninger
function generatePlusMinusModule2Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const isAddition = rng.nextBool()
    let result: number, known: number, answer: number, expression: string
    if (isAddition) {
      result = rng.nextInt(5, 19)
      known = rng.nextInt(1, result - 1)
      answer = result - known
      expression = `${result} = ${known} + `
    } else {
      known = rng.nextInt(8, 22)
      result = rng.nextInt(2, known - 2)
      answer = known - result
      expression = `${result} = ${known} - `
    }
    problems.push({ id: i + 1, expression, answer })
  }
  return problems
}

// Module 3: Addisjon til 10
function generatePlusMinusModule3Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const sum = 10
    const a = rng.nextInt(1, 9)
    const b = sum - a
    const hidePosition = rng.nextInt(0, 2)
    let expression: string, answer: number
    if (hidePosition === 0) { expression = `__ + ${b} = ${sum}`; answer = a }
    else if (hidePosition === 1) { expression = `${a} + __ = ${sum}`; answer = b }
    else { expression = `${a} + ${b} = `; answer = sum }
    problems.push({ id: i + 1, expression, answer })
  }
  return problems
}

// Module 4: Addisjon over 10 (begge tall under 10, sum over 10)
function generatePlusMinusModule4Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    let a: number, b: number, sum: number
    do {
      a = rng.nextInt(1, 9)
      b = rng.nextInt(1, 9)
      sum = a + b
    } while (sum <= 10)
    problems.push({ id: i + 1, expression: `${a} + ${b} = `, answer: sum })
  }
  return problems
}

// Module 5: To-sifrede tall
function generatePlusMinusModule5Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const isAddition = rng.nextBool()
    let expression: string, answer: number
    if (isAddition) {
      const tens1 = rng.nextInt(2, 9)
      const tens2 = rng.nextInt(2, 9)
      const a = tens1 * 10, b = tens2 * 10
      answer = a + b
      expression = `${a} + ${b} = `
    } else {
      const tens1 = rng.nextInt(3, 9)
      const tens2 = rng.nextInt(1, tens1 - 1)
      const a = tens1 * 10, b = tens2 * 10
      answer = a - b
      expression = `${a} - ${b} = `
    }
    problems.push({ id: i + 1, expression, answer })
  }
  return problems
}

// Module 6: Til nærmeste tier
function generatePlusMinusModule6Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const problemType = rng.nextInt(0, 3)
    let expression: string, answer: number
    if (problemType === 0) {
      let startNumber: number
      do { startNumber = rng.nextInt(11, 99) } while (startNumber % 10 === 0)
      const lowerTen = Math.floor(startNumber / 10) * 10
      const upperTen = lowerTen + 10
      const distanceToLower = startNumber - lowerTen
      const distanceToUpper = upperTen - startNumber
      if (distanceToLower <= distanceToUpper) { answer = distanceToLower; expression = `${startNumber} - __ = ${lowerTen}` }
      else { answer = distanceToUpper; expression = `${startNumber} + __ = ${upperTen}` }
    } else if (problemType === 1) {
      const targetTen = rng.nextInt(2, 9) * 10
      const startNumber = targetTen - rng.nextInt(1, 9)
      answer = targetTen - startNumber
      expression = `${startNumber} + __ = ${targetTen}`
    } else if (problemType === 2) {
      const targetTen = rng.nextInt(2, 9) * 10
      const startNumber = targetTen + rng.nextInt(1, 9)
      answer = startNumber - targetTen
      expression = `${startNumber} - __ = ${targetTen}`
    } else {
      const isAddition = rng.nextBool()
      if (isAddition) {
        const targetTen = rng.nextInt(2, 9) * 10
        const firstNumber = targetTen - rng.nextInt(1, 9)
        const secondNumber = targetTen - firstNumber
        answer = targetTen
        expression = `${firstNumber} + ${secondNumber} = `
      } else {
        const targetTen = rng.nextInt(2, 8) * 10
        const firstNumber = targetTen + rng.nextInt(1, 9)
        const secondNumber = firstNumber - targetTen
        answer = targetTen
        expression = `${firstNumber} - ${secondNumber} = `
      }
    }
    problems.push({ id: i + 1, expression, answer })
  }
  return problems
}

// Module 7: Addisjon uten mente (siffer < 10)
function generatePlusMinusModule7Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    let a: number, b: number
    if (i < 8) {
      const a_tens = rng.nextInt(1, 5)
      const a_ones = rng.nextInt(1, 5)
      const b_tens = rng.nextInt(1, 9 - a_tens)
      const b_ones = rng.nextInt(1, 9 - a_ones)
      a = a_tens * 10 + a_ones
      b = b_tens * 10 + b_ones
    } else {
      const a_hundreds = rng.nextInt(1, 4)
      const a_tens = rng.nextInt(1, 5)
      const a_ones = rng.nextInt(1, 5)
      const b_hundreds = rng.nextInt(1, 9 - a_hundreds)
      const b_tens = rng.nextInt(1, 9 - a_tens)
      const b_ones = rng.nextInt(1, 9 - a_ones)
      a = a_hundreds * 100 + a_tens * 10 + a_ones
      b = b_hundreds * 100 + b_tens * 10 + b_ones
    }
    problems.push({ id: i + 1, expression: `${a} + ${b} = `, answer: a + b })
  }
  return problems
}

// Module 8: Addisjon med mente (siffer > 10)
function generatePlusMinusModule8Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    let a: number, b: number
    if (i < 8) {
      let a_tens: number, a_ones: number, b_tens: number, b_ones: number
      const carryInOnes = rng.nextBool()
      if (carryInOnes) {
        a_ones = rng.nextInt(5, 9)
        b_ones = rng.nextInt(10 - a_ones, 9)
        a_tens = rng.nextInt(1, 5)
        b_tens = rng.nextInt(1, 5)
      } else {
        a_ones = rng.nextInt(1, 9)
        b_ones = rng.nextInt(1, 9)
        a_tens = rng.nextInt(5, 8)
        b_tens = rng.nextInt(10 - a_tens, 9)
      }
      a = a_tens * 10 + a_ones
      b = b_tens * 10 + b_ones
    } else {
      let a_hundreds: number, a_tens: number, a_ones: number
      let b_hundreds: number, b_tens: number, b_ones: number
      const carryPosition = rng.nextInt(0, 2)
      if (carryPosition === 0) {
        a_ones = rng.nextInt(5, 9); b_ones = rng.nextInt(10 - a_ones, 9)
        a_tens = rng.nextInt(1, 5); b_tens = rng.nextInt(1, 5)
        a_hundreds = rng.nextInt(1, 3); b_hundreds = rng.nextInt(1, 3)
      } else if (carryPosition === 1) {
        a_ones = rng.nextInt(1, 9); b_ones = rng.nextInt(1, 9)
        a_tens = rng.nextInt(5, 8); b_tens = rng.nextInt(10 - a_tens, 9)
        a_hundreds = rng.nextInt(1, 3); b_hundreds = rng.nextInt(1, 3)
      } else {
        a_ones = rng.nextInt(1, 9); b_ones = rng.nextInt(1, 9)
        a_tens = rng.nextInt(1, 5); b_tens = rng.nextInt(1, 5)
        a_hundreds = rng.nextInt(5, 7); b_hundreds = rng.nextInt(10 - a_hundreds, 9)
      }
      a = a_hundreds * 100 + a_tens * 10 + a_ones
      b = b_hundreds * 100 + b_tens * 10 + b_ones
    }
    problems.push({ id: i + 1, expression: `${a} + ${b} = `, answer: a + b })
  }
  return problems
}

// Module 9: Subtraksjon uten mente
function generatePlusMinusModule9Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    let a: number, b: number
    if (i < 8) {
      const a_tens = rng.nextInt(3, 8)
      const a_ones = rng.nextInt(3, 8)
      const b_tens = rng.nextInt(1, a_tens)
      const b_ones = rng.nextInt(1, a_ones)
      a = a_tens * 10 + a_ones
      b = b_tens * 10 + b_ones
    } else {
      const a_hundreds = rng.nextInt(3, 7)
      const a_tens = rng.nextInt(3, 8)
      const a_ones = rng.nextInt(3, 8)
      const b_hundreds = rng.nextInt(1, a_hundreds)
      const b_tens = rng.nextInt(1, a_tens)
      const b_ones = rng.nextInt(1, a_ones)
      a = a_hundreds * 100 + a_tens * 10 + a_ones
      b = b_hundreds * 100 + b_tens * 10 + b_ones
    }
    problems.push({ id: i + 1, expression: `${a} - ${b} = `, answer: a - b })
  }
  return problems
}

// Module 10: Subtraksjon med mente
function generatePlusMinusModule10Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  let iterations = 0
  for (let i = 0; i < 15; i++) {
    let a = 0, b = 0
    do {
      iterations++
      if (iterations > 1000) break // Safety break
      if (i < 8) {
        let a_tens: number, a_ones: number, b_tens: number, b_ones: number
        const borrowInOnes = rng.nextBool()
        if (borrowInOnes) {
          a_ones = rng.nextInt(1, 5)
          b_ones = rng.nextInt(a_ones + 1, 9)
          a_tens = rng.nextInt(5, 7)
          b_tens = rng.nextInt(1, a_tens - 1)
        } else {
          a_ones = rng.nextInt(4, 9)
          b_ones = rng.nextInt(1, a_ones)
          a_tens = rng.nextInt(5, 8)
          b_tens = rng.nextInt(a_tens + 1, 9)
          if (b_tens > 9) b_tens = 9
        }
        a = a_tens * 10 + a_ones
        b = b_tens * 10 + b_ones
      } else {
        let a_hundreds: number, a_tens: number, a_ones: number
        let b_hundreds: number, b_tens: number, b_ones: number
        const borrowPosition = rng.nextInt(0, 2)
        if (borrowPosition === 0) {
          a_ones = rng.nextInt(1, 4); b_ones = rng.nextInt(a_ones + 1, 9)
          a_tens = rng.nextInt(5, 8); b_tens = rng.nextInt(1, a_tens - 1)
          a_hundreds = rng.nextInt(5, 7); b_hundreds = rng.nextInt(1, a_hundreds - 1)
        } else if (borrowPosition === 1) {
          a_ones = rng.nextInt(4, 8); b_ones = rng.nextInt(1, a_ones)
          a_tens = rng.nextInt(2, 4); b_tens = rng.nextInt(a_tens + 1, a_tens + 3)
          a_hundreds = rng.nextInt(6, 8); b_hundreds = rng.nextInt(1, a_hundreds - 1)
        } else {
          a_ones = rng.nextInt(4, 8); b_ones = rng.nextInt(1, a_ones)
          a_tens = rng.nextInt(5, 8); b_tens = rng.nextInt(1, a_tens - 1)
          a_hundreds = rng.nextInt(6, 7); b_hundreds = rng.nextInt(a_hundreds + 1, a_hundreds + 2)
        }
        a = a_hundreds * 100 + a_tens * 10 + a_ones
        b = b_hundreds * 100 + b_tens * 10 + b_ones
      }
    } while (a <= b)
    problems.push({ id: i + 1, expression: `${a} - ${b} = `, answer: a - b })
  }
  return problems
}

// ============= TALLFOLGERE/GANGING MODULE-SPECIFIC PROBLEMS =============

// Module 4: Grunnleggende ganging (multiplikasjon)
function generateTallfolgereModule4Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(2, 10)
    const b = rng.nextInt(2, 10)
    problems.push({ id: i + 1, expression: `${a} × ${b} = `, answer: a * b })
  }
  return problems
}

// Module 5: Blandet regning (multiplikasjon med add/sub)
function generateTallfolgereModule5Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(2, 8)
    const b = rng.nextInt(2, 8)
    const c = rng.nextInt(1, 10)
    const isAdd = rng.nextBool()
    const answer = isAdd ? a * b + c : a * b - c
    problems.push({ id: i + 1, expression: isAdd ? `${a} × ${b} + ${c} = ` : `${a} × ${b} - ${c} = `, answer })
  }
  return problems
}

// Module 7: Multiplikasjon med 10, 100, 1000
function generateTallfolgereModule7Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  const multipliers = [10, 100, 1000]
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(1, 99)
    const m = multipliers[rng.nextInt(0, 2)]
    problems.push({ id: i + 1, expression: `${a} × ${m} = `, answer: a * m })
  }
  return problems
}

// Module 9: Ganging med 5
function generateTallfolgereModule9Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(2, 20)
    problems.push({ id: i + 1, expression: `${a} × 5 = `, answer: a * 5 })
  }
  return problems
}

// Module 11: Ganging 6-14 (større gangetabell)
function generateTallfolgereModule11Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(6, 14)
    const b = rng.nextInt(6, 14)
    problems.push({ id: i + 1, expression: `${a} × ${b} = `, answer: a * b })
  }
  return problems
}

// Module 12: Kvadratrøtter
function generateTallfolgereModule12Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  const perfectSquares = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225]
  const shuffled = rng.shuffle([...perfectSquares])
  for (let i = 0; i < 15; i++) {
    const num = shuffled[i % shuffled.length]
    problems.push({ id: i + 1, expression: `√${num} = `, answer: Math.sqrt(num) })
  }
  return problems
}

// Module 13: Store tall multiplikasjon
function generateTallfolgereModule13Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(10, 30)
    const b = rng.nextInt(2, 9)
    problems.push({ id: i + 1, expression: `${a} × ${b} = `, answer: a * b })
  }
  return problems
}

// Module 14: To-sifret ganging
function generateTallfolgereModule14Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(11, 25)
    const b = rng.nextInt(11, 25)
    problems.push({ id: i + 1, expression: `${a} × ${b} = `, answer: a * b })
  }
  return problems
}

// ============= DIVISJON MODULE-SPECIFIC PROBLEMS =============

// Module 1: Grunnleggende divisjon
function generateDivisjonModule1Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const divisor = rng.nextInt(2, 10)
    const quotient = rng.nextInt(2, 12)
    const dividend = divisor * quotient
    problems.push({ id: i + 1, expression: `${dividend} ÷ ${divisor} = `, answer: quotient })
  }
  return problems
}

// Module 2: Multiplikasjonsligninger (__ × 5 = 35)
function generateDivisjonModule2Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const b = rng.nextInt(2, 10)
    const answer = rng.nextInt(2, 12)
    const result = answer * b
    problems.push({ id: i + 1, expression: `__ × ${b} = ${result}`, answer })
  }
  return problems
}

// Module 6: Desimaltall-addisjon
function generateDivisjonModule6Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(10, 99) / 10
    const b = rng.nextInt(10, 99) / 10
    const answer = Math.round((a + b) * 10) / 10
    problems.push({ id: i + 1, expression: `${a.toFixed(1).replace('.', ',')} + ${b.toFixed(1).replace('.', ',')} = `, answer })
  }
  return problems
}

// Module 7: Desimaltall-subtraksjon
function generateDivisjonModule7Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(50, 99) / 10
    const b = rng.nextInt(10, Math.floor(a * 10) - 1) / 10
    const answer = Math.round((a - b) * 10) / 10
    problems.push({ id: i + 1, expression: `${a.toFixed(1).replace('.', ',')} - ${b.toFixed(1).replace('.', ',')} = `, answer })
  }
  return problems
}

// Module 8: Desimaltall-multiplikasjon
function generateDivisjonModule8Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(11, 99) / 10
    const b = rng.nextInt(2, 9)
    const answer = Math.round(a * b * 10) / 10
    problems.push({ id: i + 1, expression: `${a.toFixed(1).replace('.', ',')} × ${b} = `, answer })
  }
  return problems
}

// ============= NEGATIVE TALL MODULE-SPECIFIC PROBLEMS =============

// Module 1: Grunnleggende negative tall
function generateNegativeModule1Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(-10, 10)
    const b = rng.nextInt(-10, 10)
    const isAdd = rng.nextBool()
    const answer = isAdd ? a + b : a - b
    const aStr = a < 0 ? `(${a})` : `${a}`
    const bStr = b < 0 ? `(${b})` : `${b}`
    problems.push({ id: i + 1, expression: isAdd ? `${aStr} + ${bStr} = ` : `${aStr} - ${bStr} = `, answer })
  }
  return problems
}

// Module 2: Ligninger med negative tall
function generateNegativeModule2Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const answer = rng.nextInt(-10, 10)
    const b = rng.nextInt(-10, 10)
    const result = answer + b
    const bStr = b < 0 ? `(${b})` : `${b}`
    problems.push({ id: i + 1, expression: `${result} = __ + ${bStr}`, answer })
  }
  return problems
}

// Module 3: Multiplikasjon med negative tall
function generateNegativeModule3Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(-9, 9)
    const b = rng.nextInt(-9, 9)
    const answer = a * b
    const aStr = a < 0 ? `(${a})` : `${a}`
    const bStr = b < 0 ? `(${b})` : `${b}`
    problems.push({ id: i + 1, expression: `${aStr} × ${bStr} = `, answer })
  }
  return problems
}

// Module 4: Regnerekkefølge
function generateNegativeModule4Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(-5, 5)
    const b = rng.nextInt(2, 5)
    const c = rng.nextInt(-5, 5)
    const answer = a + b * c
    const aStr = a < 0 ? `(${a})` : `${a}`
    const cStr = c < 0 ? `(${c})` : `${c}`
    problems.push({ id: i + 1, expression: `${aStr} + ${b} × ${cStr} = `, answer })
  }
  return problems
}

// Module 5: Divisjon med negative tall
function generateNegativeModule5Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const divisor = rng.nextInt(2, 9) * (rng.nextBool() ? 1 : -1)
    const quotient = rng.nextInt(-9, 9)
    const dividend = divisor * quotient
    const dividendStr = dividend < 0 ? `(${dividend})` : `${dividend}`
    const divisorStr = divisor < 0 ? `(${divisor})` : `${divisor}`
    problems.push({ id: i + 1, expression: `${dividendStr} ÷ ${divisorStr} = `, answer: quotient })
  }
  return problems
}

// Module 6: Desimaltall med negative tall
function generateNegativeModule6Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = (rng.nextInt(-50, 50)) / 10
    const b = (rng.nextInt(-50, 50)) / 10
    const isAdd = rng.nextBool()
    const answer = Math.round((isAdd ? a + b : a - b) * 10) / 10
    const aStr = a < 0 ? `(${a.toFixed(1).replace('.', ',')})` : a.toFixed(1).replace('.', ',')
    const bStr = b < 0 ? `(${b.toFixed(1).replace('.', ',')})` : b.toFixed(1).replace('.', ',')
    problems.push({ id: i + 1, expression: isAdd ? `${aStr} + ${bStr} = ` : `${aStr} - ${bStr} = `, answer })
  }
  return problems
}

// Module 7: Vanskelig (blandet negative)
function generateNegativeModule7Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const type = rng.nextInt(0, 2)
    let expression: string, answer: number
    if (type === 0) {
      // Potenser med negative tall
      const base = rng.nextInt(-5, 5)
      answer = base * base
      expression = `(${base})² = `
    } else if (type === 1) {
      // Trippel operasjon
      const a = rng.nextInt(-5, 5)
      const b = rng.nextInt(-5, 5)
      const c = rng.nextInt(-5, 5)
      answer = a + b + c
      const aStr = a < 0 ? `(${a})` : `${a}`
      const bStr = b < 0 ? `(${b})` : `${b}`
      const cStr = c < 0 ? `(${c})` : `${c}`
      expression = `${aStr} + ${bStr} + ${cStr} = `
    } else {
      // Multiplikasjon og addisjon
      const a = rng.nextInt(-5, 5)
      const b = rng.nextInt(-5, 5)
      const c = rng.nextInt(-5, 5)
      answer = a * b + c
      const aStr = a < 0 ? `(${a})` : `${a}`
      const bStr = b < 0 ? `(${b})` : `${b}`
      const cStr = c < 0 ? `(${c})` : `${c}`
      expression = `${aStr} × ${bStr} + ${cStr} = `
    }
    problems.push({ id: i + 1, expression, answer })
  }
  return problems
}

// ============= POTENSER PROBLEMS =============

// Superscript numbers for exponents
const superscript: { [key: number]: string } = {
  0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹'
}

function toSuperscript(n: number): string {
  return n.toString().split('').map(d => superscript[parseInt(d)]).join('')
}

// Potenser Module 1: Grunnleggende potenser (2³, 5², etc.)
function generatePotenserModule1Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []

  // Pre-defined combinations that work well for mental math: [base, exponent, answer]
  const validCombinations: [number, number, number][] = [
    [2, 2, 4], [2, 3, 8], [2, 4, 16], [2, 5, 32],
    [3, 2, 9], [3, 3, 27], [3, 4, 81],
    [4, 2, 16], [4, 3, 64],
    [5, 2, 25], [5, 3, 125],
    [6, 2, 36],
    [7, 2, 49],
    [8, 2, 64],
    [9, 2, 81],
    [10, 2, 100], [10, 3, 1000],
    [1, 2, 1], [1, 3, 1], [1, 4, 1],
    [11, 2, 121],
    [12, 2, 144],
  ]

  const shuffled = rng.shuffle([...validCombinations])

  for (let i = 0; i < 15; i++) {
    const [base, exp, answer] = shuffled[i % shuffled.length]
    const expression = `${base}${toSuperscript(exp)} = `
    problems.push({ id: i + 1, expression, answer })
  }

  return problems
}

// Potenser Module 2: Potens ganger tall (4 · 3² = 36)
function generatePotenserModule2Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []

  // Pre-defined combinations: [multiplier, base, exponent, answer]
  const validCombinations: [number, number, number, number][] = [
    [2, 2, 2, 8], [2, 2, 3, 16], [2, 3, 2, 18], [2, 5, 2, 50],
    [3, 2, 2, 12], [3, 2, 3, 24], [3, 3, 2, 27], [3, 4, 2, 48],
    [4, 2, 2, 16], [4, 2, 3, 32], [4, 3, 2, 36], [4, 5, 2, 100],
    [5, 2, 2, 20], [5, 2, 3, 40], [5, 3, 2, 45], [5, 2, 4, 80],
    [2, 4, 2, 32], [3, 5, 2, 75], [2, 6, 2, 72], [4, 4, 2, 64],
    [6, 2, 2, 24], [7, 2, 2, 28], [8, 2, 2, 32], [9, 2, 2, 36],
    [2, 10, 2, 200], [3, 10, 2, 300], [5, 4, 2, 80],
  ]

  const shuffled = rng.shuffle([...validCombinations])

  for (let i = 0; i < 15; i++) {
    const [mult, base, exp, answer] = shuffled[i % shuffled.length]
    const expression = `${mult} · ${base}${toSuperscript(exp)} = `
    problems.push({ id: i + 1, expression, answer })
  }

  return problems
}

// Potenser Module 3: Produkt av potenser (2² · 3² = 36)
function generatePotenserModule3Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []

  // Pre-defined combinations: [base1, exp1, base2, exp2, answer]
  const validCombinations: [number, number, number, number, number][] = [
    [2, 2, 3, 2, 36],   // 4 · 9 = 36
    [2, 2, 5, 2, 100],  // 4 · 25 = 100
    [2, 3, 3, 2, 72],   // 8 · 9 = 72
    [2, 2, 2, 3, 32],   // 4 · 8 = 32
    [3, 2, 2, 2, 36],   // 9 · 4 = 36
    [2, 3, 5, 2, 200],  // 8 · 25 = 200
    [3, 2, 4, 2, 144],  // 9 · 16 = 144
    [2, 2, 4, 2, 64],   // 4 · 16 = 64
    [5, 2, 2, 2, 100],  // 25 · 4 = 100
    [2, 4, 3, 2, 144],  // 16 · 9 = 144
    [3, 3, 2, 2, 108],  // 27 · 4 = 108
    [2, 2, 6, 2, 144],  // 4 · 36 = 144
    [4, 2, 5, 2, 400],  // 16 · 25 = 400
    [2, 3, 2, 3, 64],   // 8 · 8 = 64
    [3, 2, 3, 2, 81],   // 9 · 9 = 81
    [2, 2, 7, 2, 196],  // 4 · 49 = 196
    [5, 2, 3, 2, 225],  // 25 · 9 = 225
    [2, 5, 3, 2, 288],  // 32 · 9 = 288
    [10, 2, 2, 2, 400], // 100 · 4 = 400
    [2, 2, 10, 2, 400], // 4 · 100 = 400
  ]

  const shuffled = rng.shuffle([...validCombinations])

  for (let i = 0; i < 15; i++) {
    const [b1, e1, b2, e2, answer] = shuffled[i % shuffled.length]
    const expression = `${b1}${toSuperscript(e1)} · ${b2}${toSuperscript(e2)} = `
    problems.push({ id: i + 1, expression, answer })
  }

  return problems
}

// Potenser Module 4: Blandet potensregning
function generatePotenserModule4Problems(rng: SeededRandom): ChallengeProblem[] {
  // Mix of all types
  const type1 = generatePotenserModule1Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const type2 = generatePotenserModule2Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const type3 = generatePotenserModule3Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)

  const allProblems = rng.shuffle([...type1, ...type2, ...type3])
  return allProblems.map((p, i) => ({ ...p, id: i + 1 }))
}

// General potenser problems (mix of all modules)
function generatePotenserProblems(rng: SeededRandom): ChallengeProblem[] {
  return generatePotenserModule4Problems(rng)
}

// ============= ALGEBRA PROBLEMS =============

// Algebra Module 1: Addisjon av ledd (3x + 2x ved x=value)
function generateAlgebraModule1Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(1, 6)
    const b = rng.nextInt(1, 6)
    const x = rng.nextInt(2, 8)
    const answer = (a + b) * x
    problems.push({ id: i + 1, expression: `${a}x + ${b}x når x = ${x}`, answer })
  }
  return problems
}

// Algebra Module 2: Subtraksjon av ledd
function generateAlgebraModule2Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(4, 9)
    const b = rng.nextInt(1, a - 1)
    const x = rng.nextInt(2, 8)
    const answer = (a - b) * x
    problems.push({ id: i + 1, expression: `${a}x - ${b}x når x = ${x}`, answer })
  }
  return problems
}

// Algebra Module 3: Multiplikasjon med tall
function generateAlgebraModule3Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(2, 5)
    const b = rng.nextInt(2, 6)
    const x = rng.nextInt(2, 6)
    const answer = a * b * x
    problems.push({ id: i + 1, expression: `${a} · ${b}x når x = ${x}`, answer })
  }
  return problems
}

// Algebra Module 4: Parenteser
function generateAlgebraModule4Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(2, 5)
    const b = rng.nextInt(1, 6)
    const c = rng.nextInt(1, 5)
    const x = rng.nextInt(2, 6)
    const answer = a * (b * x + c)
    problems.push({ id: i + 1, expression: `${a}(${b}x + ${c}) når x = ${x}`, answer })
  }
  return problems
}

// Algebra Module 5: Flere parenteser
function generateAlgebraModule5Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(1, 4)
    const b = rng.nextInt(1, 4)
    const c = rng.nextInt(1, 4)
    const d = rng.nextInt(1, 4)
    const x = rng.nextInt(2, 5)
    const answer = a * (x + b) + c * (x + d)
    problems.push({ id: i + 1, expression: `${a}(x + ${b}) + ${c}(x + ${d}) når x = ${x}`, answer })
  }
  return problems
}

// Algebra Module 6: Blandet bokstavregning
function generateAlgebraModule6Problems(rng: SeededRandom): ChallengeProblem[] {
  const type1 = generateAlgebraModule1Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const type2 = generateAlgebraModule3Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const type3 = generateAlgebraModule4Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const allProblems = rng.shuffle([...type1, ...type2, ...type3])
  return allProblems.map((p, i) => ({ ...p, id: i + 1 }))
}

// Algebra general
function generateAlgebraProblems(rng: SeededRandom): ChallengeProblem[] {
  return generateAlgebraModule6Problems(rng)
}

// ============= BRØKREGNING PROBLEMS =============

// Brøkregning Module 1: Multiplikasjon av brøker (resultat som desimaltall)
function generateBrokregningModule1Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const num1 = rng.nextInt(1, 5)
    const den1 = rng.nextInt(2, 6)
    const num2 = rng.nextInt(1, 5)
    const den2 = rng.nextInt(2, 6)
    const answer = (num1 * num2) / (den1 * den2)
    if (Number.isInteger(answer)) {
      problems.push({ id: i + 1, expression: `${num1}/${den1} × ${num2}/${den2} = `, answer })
    } else {
      // Try again with simpler fractions that give integer answers
      const newDen = rng.nextInt(2, 5)
      const newNum = newDen * rng.nextInt(1, 4)
      const divisor = rng.nextInt(2, 4)
      problems.push({ id: i + 1, expression: `${newNum}/${newDen} × ${divisor} = `, answer: (newNum / newDen) * divisor })
    }
  }
  return problems
}

// Brøkregning Module 2: Divisjon av brøker
function generateBrokregningModule2Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const result = rng.nextInt(2, 8)
    const divisor = rng.nextInt(2, 5)
    const dividend = result * divisor
    problems.push({ id: i + 1, expression: `${dividend} ÷ ${divisor} = `, answer: result })
  }
  return problems
}

// Brøkregning Module 3: Forkorting (finn fellesnevner)
function generateBrokregningModule3Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  const fractions: [number, number][] = [
    [2, 4], [3, 6], [4, 8], [5, 10], [6, 12],
    [3, 9], [4, 12], [6, 9], [8, 12], [9, 12],
    [10, 15], [12, 16], [15, 20], [6, 8], [9, 15]
  ]
  const shuffled = rng.shuffle([...fractions])
  for (let i = 0; i < 15; i++) {
    const [num, den] = shuffled[i % shuffled.length]
    // Find GCD
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b)
    const g = gcd(num, den)
    const answer = num / g // Simplified numerator
    problems.push({ id: i + 1, expression: `Forkort ${num}/${den}. Teller = `, answer })
  }
  return problems
}

// Brøkregning Module 4: Addisjon av brøker (med lik nevner)
function generateBrokregningModule4Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const den = rng.nextInt(3, 8)
    const num1 = rng.nextInt(1, den - 1)
    const num2 = rng.nextInt(1, den - num1)
    const answer = num1 + num2
    problems.push({ id: i + 1, expression: `${num1}/${den} + ${num2}/${den}. Teller = `, answer })
  }
  return problems
}

// Brøkregning Module 5: Blandet brøkregning
function generateBrokregningModule5Problems(rng: SeededRandom): ChallengeProblem[] {
  const type1 = generateBrokregningModule1Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const type2 = generateBrokregningModule2Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const type3 = generateBrokregningModule4Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const allProblems = rng.shuffle([...type1, ...type2, ...type3])
  return allProblems.map((p, i) => ({ ...p, id: i + 1 }))
}

// Brøkregning general
function generateBrokregningProblems(rng: SeededRandom): ChallengeProblem[] {
  return generateBrokregningModule5Problems(rng)
}

// ============= FAKTORISERING PROBLEMS =============

// Faktorisering Module 1: Første kvadratsetning (a + b)² ved verdier
function generateFaktoriseringModule1Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(2, 8)
    const b = rng.nextInt(1, 5)
    const answer = (a + b) * (a + b)
    problems.push({ id: i + 1, expression: `(${a} + ${b})² = `, answer })
  }
  return problems
}

// Faktorisering Module 2: Andre kvadratsetning (a - b)²
function generateFaktoriseringModule2Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(4, 10)
    const b = rng.nextInt(1, a - 1)
    const answer = (a - b) * (a - b)
    problems.push({ id: i + 1, expression: `(${a} - ${b})² = `, answer })
  }
  return problems
}

// Faktorisering Module 3: Konjugatsetningen (a + b)(a - b)
function generateFaktoriseringModule3Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const a = rng.nextInt(3, 10)
    const b = rng.nextInt(1, a - 1)
    const answer = a * a - b * b
    problems.push({ id: i + 1, expression: `(${a} + ${b})(${a} - ${b}) = `, answer })
  }
  return problems
}

// Faktorisering Module 4: Blandet faktorisering
function generateFaktoriseringModule4Problems(rng: SeededRandom): ChallengeProblem[] {
  const type1 = generateFaktoriseringModule1Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const type2 = generateFaktoriseringModule2Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const type3 = generateFaktoriseringModule3Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 5)
  const allProblems = rng.shuffle([...type1, ...type2, ...type3])
  return allProblems.map((p, i) => ({ ...p, id: i + 1 }))
}

// Faktorisering general
function generateFaktoriseringProblems(rng: SeededRandom): ChallengeProblem[] {
  return generateFaktoriseringModule4Problems(rng)
}

// ============= LIKNINGER PROBLEMS =============

// Likninger Module 1: Enkle likninger (x + a = b)
function generateLikningerModule1Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const x = rng.nextInt(1, 15)
    const a = rng.nextInt(1, 10)
    const b = x + a
    problems.push({ id: i + 1, expression: `x + ${a} = ${b}. x = `, answer: x })
  }
  return problems
}

// Likninger Module 2: Variabel begge sider (ax + b = cx + d)
function generateLikningerModule2Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const x = rng.nextInt(1, 10)
    const a = rng.nextInt(2, 6)
    const c = rng.nextInt(1, a - 1)
    const d = rng.nextInt(1, 10)
    const b = c * x + d - a * x
    problems.push({ id: i + 1, expression: `${a}x + ${b} = ${c}x + ${d}. x = `, answer: x })
  }
  return problems
}

// Likninger Module 3: Multiplikasjon (ax = b)
function generateLikningerModule3Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const x = rng.nextInt(2, 12)
    const a = rng.nextInt(2, 9)
    const b = a * x
    problems.push({ id: i + 1, expression: `${a}x = ${b}. x = `, answer: x })
  }
  return problems
}

// Likninger Module 4: Mult. og addisjon (ax + b = c)
function generateLikningerModule4Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const x = rng.nextInt(1, 10)
    const a = rng.nextInt(2, 6)
    const b = rng.nextInt(1, 15)
    const c = a * x + b
    problems.push({ id: i + 1, expression: `${a}x + ${b} = ${c}. x = `, answer: x })
  }
  return problems
}

// Likninger Module 5: Negativ koeffisient (-ax = b)
function generateLikningerModule5Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const x = rng.nextInt(-10, 10)
    const a = rng.nextInt(2, 8)
    const b = -a * x
    problems.push({ id: i + 1, expression: `-${a}x = ${b}. x = `, answer: x })
  }
  return problems
}

// Likninger Module 6: Divisjon (x/a = b)
function generateLikningerModule6Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const b = rng.nextInt(2, 10)
    const a = rng.nextInt(2, 8)
    const x = a * b
    problems.push({ id: i + 1, expression: `x/${a} = ${b}. x = `, answer: x })
  }
  return problems
}

// Likninger Module 7: Brøk i likning ((x + a)/b = c)
function generateLikningerModule7Problems(rng: SeededRandom): ChallengeProblem[] {
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const c = rng.nextInt(2, 8)
    const b = rng.nextInt(2, 5)
    const a = rng.nextInt(1, 10)
    const x = c * b - a
    problems.push({ id: i + 1, expression: `(x + ${a})/${b} = ${c}. x = `, answer: x })
  }
  return problems
}

// Likninger Module 8-13: Lignende mønstre
function generateLikningerModule8Problems(rng: SeededRandom): ChallengeProblem[] {
  // Avanserte brøklikninger - for challenge bruker vi enklere variant
  return generateLikningerModule7Problems(rng)
}

function generateLikningerModule9Problems(rng: SeededRandom): ChallengeProblem[] {
  // x i nevner (a/x = b)
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const x = rng.nextInt(2, 10)
    const b = rng.nextInt(2, 8)
    const a = x * b
    problems.push({ id: i + 1, expression: `${a}/x = ${b}. x = `, answer: x })
  }
  return problems
}

function generateLikningerModule10Problems(rng: SeededRandom): ChallengeProblem[] {
  return generateLikningerModule7Problems(rng)
}

function generateLikningerModule11Problems(rng: SeededRandom): ChallengeProblem[] {
  // Parenteser a(x + b) = c
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const x = rng.nextInt(1, 8)
    const a = rng.nextInt(2, 5)
    const b = rng.nextInt(1, 6)
    const c = a * (x + b)
    problems.push({ id: i + 1, expression: `${a}(x + ${b}) = ${c}. x = `, answer: x })
  }
  return problems
}

function generateLikningerModule12Problems(rng: SeededRandom): ChallengeProblem[] {
  // Flere parenteser
  const problems: ChallengeProblem[] = []
  for (let i = 0; i < 15; i++) {
    const x = rng.nextInt(1, 6)
    const a = rng.nextInt(1, 3)
    const b = rng.nextInt(1, 4)
    const c = rng.nextInt(1, 3)
    const d = rng.nextInt(1, 4)
    const result = a * (x + b) + c * (x - d)
    problems.push({ id: i + 1, expression: `${a}(x + ${b}) + ${c}(x - ${d}) = ${result}. x = `, answer: x })
  }
  return problems
}

function generateLikningerModule13Problems(rng: SeededRandom): ChallengeProblem[] {
  return generateLikningerModule12Problems(rng)
}

// Likninger general
function generateLikningerProblems(rng: SeededRandom): ChallengeProblem[] {
  const type1 = generateLikningerModule1Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 4)
  const type2 = generateLikningerModule3Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 4)
  const type3 = generateLikningerModule4Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 4)
  const type4 = generateLikningerModule11Problems(new SeededRandom(rng.nextInt(1, 10000))).slice(0, 3)
  const allProblems = rng.shuffle([...type1, ...type2, ...type3, ...type4])
  return allProblems.map((p, i) => ({ ...p, id: i + 1 }))
}

// ============= MAIN GENERATOR =============

export function generateChallengeProblems(
  challengeType: ChallengeType,
  code: string
): ChallengeProblem[] {
  const seed = codeToSeed(code)
  const rng = new SeededRandom(seed)

  switch (challengeType) {
    // Pluss & Minus
    case 'pluss-minus':
      return generatePlusMinusProblems(rng)
    case 'pluss-minus-1':
      return generatePlusMinusModule1Problems(rng)
    case 'pluss-minus-2':
      return generatePlusMinusModule2Problems(rng)
    case 'pluss-minus-3':
      return generatePlusMinusModule3Problems(rng)
    case 'pluss-minus-4':
      return generatePlusMinusModule4Problems(rng)
    case 'pluss-minus-5':
      return generatePlusMinusModule5Problems(rng)
    case 'pluss-minus-6':
      return generatePlusMinusModule6Problems(rng)
    case 'pluss-minus-7':
      return generatePlusMinusModule7Problems(rng)
    case 'pluss-minus-8':
      return generatePlusMinusModule8Problems(rng)
    case 'pluss-minus-9':
      return generatePlusMinusModule9Problems(rng)
    case 'pluss-minus-10':
      return generatePlusMinusModule10Problems(rng)
    // Tallfølgere / Ganging & Kvadratrot
    case 'tallfolgere':
      return generateTallfolgereProblems(rng)
    case 'tallfolgere-1':
    case 'tallfolgere-2':
    case 'tallfolgere-3':
      return generateTallfolgereProblems(rng) // Tallfølger uses sequences - fallback to basic
    case 'tallfolgere-4':
      return generateTallfolgereModule4Problems(rng)
    case 'tallfolgere-5':
      return generateTallfolgereModule5Problems(rng)
    case 'tallfolgere-6':
    case 'tallfolgere-8':
    case 'tallfolgere-10':
      return generateTallfolgereModule4Problems(rng) // Similar to basic ganging
    case 'tallfolgere-7':
      return generateTallfolgereModule7Problems(rng)
    case 'tallfolgere-9':
      return generateTallfolgereModule9Problems(rng)
    case 'tallfolgere-11':
      return generateTallfolgereModule11Problems(rng)
    case 'tallfolgere-12':
      return generateTallfolgereModule12Problems(rng)
    case 'tallfolgere-13':
      return generateTallfolgereModule13Problems(rng)
    case 'tallfolgere-14':
      return generateTallfolgereModule14Problems(rng)
    // Divisjon & Brøk
    case 'divisjon':
      return generateDivisjonProblems(rng)
    case 'divisjon-1':
      return generateDivisjonModule1Problems(rng)
    case 'divisjon-2':
      return generateDivisjonModule2Problems(rng)
    case 'divisjon-3':
    case 'divisjon-4':
    case 'divisjon-5':
      return generateDivisjonModule1Problems(rng) // Faktorisering/brøk - fallback
    case 'divisjon-6':
      return generateDivisjonModule6Problems(rng)
    case 'divisjon-7':
      return generateDivisjonModule7Problems(rng)
    case 'divisjon-8':
      return generateDivisjonModule8Problems(rng)
    // Negative tall
    case 'negative':
      return generateNegativeProblems(rng)
    case 'negative-1':
      return generateNegativeModule1Problems(rng)
    case 'negative-2':
      return generateNegativeModule2Problems(rng)
    case 'negative-3':
      return generateNegativeModule3Problems(rng)
    case 'negative-4':
      return generateNegativeModule4Problems(rng)
    case 'negative-5':
      return generateNegativeModule5Problems(rng)
    case 'negative-6':
      return generateNegativeModule6Problems(rng)
    case 'negative-7':
      return generateNegativeModule7Problems(rng)
    // Potenser
    case 'potenser':
      return generatePotenserProblems(rng)
    case 'potenser-1':
      return generatePotenserModule1Problems(rng)
    case 'potenser-2':
      return generatePotenserModule2Problems(rng)
    case 'potenser-3':
      return generatePotenserModule3Problems(rng)
    case 'potenser-4':
      return generatePotenserModule4Problems(rng)
    // Blandet
    case 'blandet':
      return generateBlandetProblems(rng)
    // Algebra
    case 'algebra':
      return generateAlgebraProblems(rng)
    case 'algebra-1':
      return generateAlgebraModule1Problems(rng)
    case 'algebra-2':
      return generateAlgebraModule2Problems(rng)
    case 'algebra-3':
      return generateAlgebraModule3Problems(rng)
    case 'algebra-4':
      return generateAlgebraModule4Problems(rng)
    case 'algebra-5':
      return generateAlgebraModule5Problems(rng)
    case 'algebra-6':
      return generateAlgebraModule6Problems(rng)
    case 'algebra-7':
    case 'algebra-8':
      return generateAlgebraModule6Problems(rng)
    // Brøkregning
    case 'brokregning':
      return generateBrokregningProblems(rng)
    case 'brokregning-1':
      return generateBrokregningModule1Problems(rng)
    case 'brokregning-2':
      return generateBrokregningModule2Problems(rng)
    case 'brokregning-3':
      return generateBrokregningModule3Problems(rng)
    case 'brokregning-4':
      return generateBrokregningModule4Problems(rng)
    case 'brokregning-5':
      return generateBrokregningModule5Problems(rng)
    // Faktorisering
    case 'faktorisering':
      return generateFaktoriseringProblems(rng)
    case 'faktorisering-1':
      return generateFaktoriseringModule1Problems(rng)
    case 'faktorisering-2':
      return generateFaktoriseringModule2Problems(rng)
    case 'faktorisering-3':
      return generateFaktoriseringModule3Problems(rng)
    case 'faktorisering-4':
      return generateFaktoriseringModule4Problems(rng)
    // Likninger
    case 'likninger':
      return generateLikningerProblems(rng)
    case 'likninger-1':
      return generateLikningerModule1Problems(rng)
    case 'likninger-2':
      return generateLikningerModule2Problems(rng)
    case 'likninger-3':
      return generateLikningerModule3Problems(rng)
    case 'likninger-4':
      return generateLikningerModule4Problems(rng)
    case 'likninger-5':
      return generateLikningerModule5Problems(rng)
    case 'likninger-6':
      return generateLikningerModule6Problems(rng)
    case 'likninger-7':
      return generateLikningerModule7Problems(rng)
    case 'likninger-8':
      return generateLikningerModule8Problems(rng)
    case 'likninger-9':
      return generateLikningerModule9Problems(rng)
    case 'likninger-10':
      return generateLikningerModule10Problems(rng)
    case 'likninger-11':
      return generateLikningerModule11Problems(rng)
    case 'likninger-12':
      return generateLikningerModule12Problems(rng)
    case 'likninger-13':
      return generateLikningerModule13Problems(rng)
    default:
      return generatePlusMinusProblems(rng)
  }
}

// Challenge type metadata
export const CHALLENGE_TYPES = {
  'pluss-minus': {
    name: 'Pluss & Minus',
    description: 'Addisjon og subtraksjon',
    gradient: 'from-emerald-400 to-emerald-600',
    icon: '➕',
  },
  'pluss-minus-1': {
    name: 'Oppgave 1: Grunnleggende',
    description: 'Addisjon og subtraksjon (1-18)',
    gradient: 'from-blue-400 to-blue-600',
    icon: '🎯',
  },
  'pluss-minus-2': {
    name: 'Oppgave 2: Ligninger',
    description: 'Enkle ligninger',
    gradient: 'from-purple-400 to-purple-600',
    icon: '🏆',
  },
  'pluss-minus-3': {
    name: 'Oppgave 3: Addisjon til 10',
    description: 'Addisjon med sum til 10',
    gradient: 'from-green-400 to-green-600',
    icon: '🎯',
  },
  'pluss-minus-4': {
    name: 'Oppgave 4: Addisjon over 10',
    description: 'Begge tall under 10, sum over 10',
    gradient: 'from-orange-400 to-orange-600',
    icon: '🎯',
  },
  'pluss-minus-5': {
    name: 'Oppgave 5: To-sifrede tall',
    description: 'Addisjon og subtraksjon',
    gradient: 'from-indigo-400 to-indigo-600',
    icon: '🏆',
  },
  'pluss-minus-6': {
    name: 'Oppgave 6: Til nærmeste tier',
    description: 'Til nærmeste tier',
    gradient: 'from-pink-400 to-pink-600',
    icon: '🏆',
  },
  'pluss-minus-7': {
    name: 'Oppgave 7: Addisjon uten mente',
    description: 'Addisjon uten mente (siffer < 10)',
    gradient: 'from-red-400 to-red-600',
    icon: '🏆',
  },
  'pluss-minus-8': {
    name: 'Oppgave 8: Addisjon med mente',
    description: 'Addisjon med mente (siffer > 10)',
    gradient: 'from-yellow-400 to-yellow-600',
    icon: '🧠',
  },
  'pluss-minus-9': {
    name: 'Oppgave 9: Subtraksjon uten mente',
    description: 'Subtraksjon uten mente',
    gradient: 'from-cyan-400 to-cyan-600',
    icon: '🏆',
  },
  'pluss-minus-10': {
    name: 'Oppgave 10: Subtraksjon med mente',
    description: 'Subtraksjon med mente',
    gradient: 'from-violet-400 to-violet-600',
    icon: '🏅',
  },
  'tallfolgere': {
    name: 'Ganging & Kvadratrot',
    description: 'Multiplikasjon og kvadratrøtter',
    gradient: 'from-blue-400 to-blue-600',
    icon: '✖️',
  },
  'tallfolgere-1': {
    name: 'Oppgave 1: Tallfølger',
    description: 'Enkle tallfølger',
    gradient: 'from-blue-400 to-blue-600',
    icon: '🔢',
  },
  'tallfolgere-2': {
    name: 'Oppgave 2: Tallfølger +',
    description: 'Utvidede tallfølger',
    gradient: 'from-blue-500 to-blue-700',
    icon: '🔢',
  },
  'tallfolgere-3': {
    name: 'Oppgave 3: Avanserte tallfølger',
    description: 'Komplekse tallfølger',
    gradient: 'from-blue-600 to-blue-800',
    icon: '🔢',
  },
  'tallfolgere-4': {
    name: 'Oppgave 4: Ganging',
    description: 'Grunnleggende multiplikasjon',
    gradient: 'from-indigo-400 to-indigo-600',
    icon: '✖️',
  },
  'tallfolgere-5': {
    name: 'Oppgave 5: Blandet regning',
    description: 'Multiplikasjon med add/sub',
    gradient: 'from-indigo-500 to-indigo-700',
    icon: '🧮',
  },
  'tallfolgere-6': {
    name: 'Oppgave 6: Gangestykke',
    description: 'Finn gangestykket',
    gradient: 'from-violet-400 to-violet-600',
    icon: '🔍',
  },
  'tallfolgere-7': {
    name: 'Oppgave 7: Multiplikasjon 10/100/1000',
    description: 'Gang med 10, 100, 1000',
    gradient: 'from-violet-500 to-violet-700',
    icon: '🔟',
  },
  'tallfolgere-8': {
    name: 'Oppgave 8: Gangestykke med 10',
    description: 'Gangestykker med tiergang',
    gradient: 'from-purple-400 to-purple-600',
    icon: '🔍',
  },
  'tallfolgere-9': {
    name: 'Oppgave 9: Ganging med 5',
    description: 'Femgangen',
    gradient: 'from-purple-500 to-purple-700',
    icon: '5️⃣',
  },
  'tallfolgere-10': {
    name: 'Oppgave 10: Ganging med 5 (avansert)',
    description: 'Avansert femgang',
    gradient: 'from-fuchsia-400 to-fuchsia-600',
    icon: '5️⃣',
  },
  'tallfolgere-11': {
    name: 'Oppgave 11: Ganging 6-14',
    description: 'Større gangetabell',
    gradient: 'from-fuchsia-500 to-fuchsia-700',
    icon: '📊',
  },
  'tallfolgere-12': {
    name: 'Oppgave 12: Kvadratrøtter',
    description: 'Finn kvadratroten',
    gradient: 'from-pink-400 to-pink-600',
    icon: '√',
  },
  'tallfolgere-13': {
    name: 'Oppgave 13: Store tall',
    description: 'Multiplikasjon med store tall',
    gradient: 'from-pink-500 to-pink-700',
    icon: '💯',
  },
  'tallfolgere-14': {
    name: 'Oppgave 14: To-sifret ganging',
    description: 'Multipliser to-sifrede tall',
    gradient: 'from-rose-400 to-rose-600',
    icon: '🧠',
  },
  'divisjon': {
    name: 'Divisjon & Desimaltall',
    description: 'Divisjon og desimaltall',
    gradient: 'from-orange-400 to-orange-600',
    icon: '➗',
  },
  'divisjon-1': {
    name: 'Oppgave 1: Grunnleggende divisjon',
    description: 'Enkel divisjon',
    gradient: 'from-orange-400 to-orange-600',
    icon: '➗',
  },
  'divisjon-2': {
    name: 'Oppgave 2: Multiplikasjonsligninger',
    description: 'Finn ukjent faktor',
    gradient: 'from-orange-500 to-orange-700',
    icon: '❓',
  },
  'divisjon-3': {
    name: 'Oppgave 3: Faktorisering',
    description: 'Del opp i faktorer',
    gradient: 'from-amber-400 to-amber-600',
    icon: '🔢',
  },
  'divisjon-4': {
    name: 'Oppgave 4: Divisjon og brøk',
    description: 'Brøkregning',
    gradient: 'from-amber-500 to-amber-700',
    icon: '½',
  },
  'divisjon-5': {
    name: 'Oppgave 5: Brøkforenkling',
    description: 'Forenkle brøker',
    gradient: 'from-yellow-400 to-yellow-600',
    icon: '📐',
  },
  'divisjon-6': {
    name: 'Oppgave 6: Desimaltall-addisjon',
    description: 'Legg sammen desimaltall',
    gradient: 'from-yellow-500 to-yellow-700',
    icon: '➕',
  },
  'divisjon-7': {
    name: 'Oppgave 7: Desimaltall-subtraksjon',
    description: 'Trekk fra desimaltall',
    gradient: 'from-lime-400 to-lime-600',
    icon: '➖',
  },
  'divisjon-8': {
    name: 'Oppgave 8: Desimaltall-multiplikasjon',
    description: 'Gang med desimaltall',
    gradient: 'from-lime-500 to-lime-700',
    icon: '✖️',
  },
  'negative': {
    name: 'Negative tall',
    description: 'Regning med negative tall',
    gradient: 'from-purple-400 to-purple-600',
    icon: '➖',
  },
  'negative-1': {
    name: 'Oppgave 1: Grunnleggende',
    description: 'Addisjon og subtraksjon',
    gradient: 'from-purple-400 to-purple-600',
    icon: '➖',
  },
  'negative-2': {
    name: 'Oppgave 2: Ligninger',
    description: 'Ligninger med negative tall',
    gradient: 'from-purple-500 to-purple-700',
    icon: '❓',
  },
  'negative-3': {
    name: 'Oppgave 3: Multiplikasjon',
    description: 'Gang med negative tall',
    gradient: 'from-violet-400 to-violet-600',
    icon: '✖️',
  },
  'negative-4': {
    name: 'Oppgave 4: Regnerekkefølge',
    description: 'Riktig rekkefølge',
    gradient: 'from-violet-500 to-violet-700',
    icon: '📋',
  },
  'negative-5': {
    name: 'Oppgave 5: Divisjon',
    description: 'Del med negative tall',
    gradient: 'from-indigo-400 to-indigo-600',
    icon: '➗',
  },
  'negative-6': {
    name: 'Oppgave 6: Desimaltall',
    description: 'Negative desimaltall',
    gradient: 'from-indigo-500 to-indigo-700',
    icon: '🔢',
  },
  'negative-7': {
    name: 'Oppgave 7: Vanskelig',
    description: 'Blandet vanskelig',
    gradient: 'from-slate-500 to-slate-700',
    icon: '🧠',
  },
  'potenser': {
    name: 'Potenser',
    description: 'Potensregning',
    gradient: 'from-amber-400 to-orange-600',
    icon: 'xⁿ',
  },
  'potenser-1': {
    name: 'Oppgave 1: Grunnleggende potenser',
    description: 'Enkle potenser som 2³ og 5²',
    gradient: 'from-amber-400 to-orange-600',
    icon: '²',
  },
  'potenser-2': {
    name: 'Oppgave 2: Potens ganger tall',
    description: 'Potens multiplisert med tall',
    gradient: 'from-orange-400 to-red-600',
    icon: '×',
  },
  'potenser-3': {
    name: 'Oppgave 3: Produkt av potenser',
    description: 'To potenser ganget sammen',
    gradient: 'from-red-400 to-rose-600',
    icon: '·',
  },
  'potenser-4': {
    name: 'Oppgave 4: Blandet potensregning',
    description: 'Kombinasjon av alle typer',
    gradient: 'from-rose-400 to-pink-600',
    icon: '🧠',
  },
  'blandet': {
    name: 'Blandet',
    description: 'Oppgaver fra alle kategorier',
    gradient: 'from-pink-400 to-pink-600',
    icon: '🎲',
  },
  // Algebra
  'algebra': {
    name: 'Algebra',
    description: 'Bokstavregning',
    gradient: 'from-cyan-400 to-blue-600',
    icon: 'x',
  },
  'algebra-1': {
    name: 'Oppgave 1: Addisjon av ledd',
    description: 'Legg sammen like ledd',
    gradient: 'from-cyan-400 to-cyan-600',
    icon: '➕',
  },
  'algebra-2': {
    name: 'Oppgave 2: Subtraksjon av ledd',
    description: 'Trekk fra like ledd',
    gradient: 'from-cyan-500 to-cyan-700',
    icon: '➖',
  },
  'algebra-3': {
    name: 'Oppgave 3: Multiplikasjon',
    description: 'Gang tall med variable',
    gradient: 'from-blue-400 to-blue-600',
    icon: '✖️',
  },
  'algebra-4': {
    name: 'Oppgave 4: Parenteser',
    description: 'Regn med parenteser',
    gradient: 'from-blue-500 to-blue-700',
    icon: '()',
  },
  'algebra-5': {
    name: 'Oppgave 5: Flere parenteser',
    description: 'Flere parentesuttrykk',
    gradient: 'from-indigo-400 to-indigo-600',
    icon: '()',
  },
  'algebra-6': {
    name: 'Oppgave 6: Blandet',
    description: 'Blandet bokstavregning',
    gradient: 'from-indigo-500 to-indigo-700',
    icon: '🔀',
  },
  'algebra-7': {
    name: 'Oppgave 7: Kvadratsetninger',
    description: 'Bruk av kvadratsetningene',
    gradient: 'from-violet-400 to-violet-600',
    icon: '²',
  },
  'algebra-8': {
    name: 'Oppgave 8: Avansert',
    description: 'Vanskelige uttrykk',
    gradient: 'from-violet-500 to-violet-700',
    icon: '🧠',
  },
  // Brøkregning
  'brokregning': {
    name: 'Brøkregning',
    description: 'Regning med brøker',
    gradient: 'from-blue-400 to-cyan-600',
    icon: '½',
  },
  'brokregning-1': {
    name: 'Oppgave 1: Multiplikasjon',
    description: 'Multiplisere brøker',
    gradient: 'from-blue-400 to-blue-600',
    icon: '✖️',
  },
  'brokregning-2': {
    name: 'Oppgave 2: Divisjon',
    description: 'Dividere brøker',
    gradient: 'from-blue-500 to-blue-700',
    icon: '➗',
  },
  'brokregning-3': {
    name: 'Oppgave 3: Forkorting',
    description: 'Forkorte brøker',
    gradient: 'from-cyan-400 to-cyan-600',
    icon: '📐',
  },
  'brokregning-4': {
    name: 'Oppgave 4: Addisjon',
    description: 'Legge sammen brøker',
    gradient: 'from-cyan-500 to-cyan-700',
    icon: '➕',
  },
  'brokregning-5': {
    name: 'Oppgave 5: Blandet',
    description: 'Blandet brøkregning',
    gradient: 'from-teal-400 to-teal-600',
    icon: '🔀',
  },
  // Faktorisering
  'faktorisering': {
    name: 'Faktorisering',
    description: 'Kvadratsetningene',
    gradient: 'from-violet-400 to-purple-600',
    icon: '²',
  },
  'faktorisering-1': {
    name: 'Oppgave 1: Første kvadratsetning',
    description: '(a + b)²',
    gradient: 'from-violet-400 to-violet-600',
    icon: '➕',
  },
  'faktorisering-2': {
    name: 'Oppgave 2: Andre kvadratsetning',
    description: '(a - b)²',
    gradient: 'from-violet-500 to-violet-700',
    icon: '➖',
  },
  'faktorisering-3': {
    name: 'Oppgave 3: Konjugatsetningen',
    description: '(a + b)(a - b)',
    gradient: 'from-purple-400 to-purple-600',
    icon: '±',
  },
  'faktorisering-4': {
    name: 'Oppgave 4: Blandet',
    description: 'Alle kvadratsetninger',
    gradient: 'from-purple-500 to-purple-700',
    icon: '🔀',
  },
  // Likninger
  'likninger': {
    name: 'Likninger',
    description: 'Løs likninger',
    gradient: 'from-emerald-400 to-teal-600',
    icon: '=',
  },
  'likninger-1': {
    name: 'Oppgave 1: Enkle likninger',
    description: 'x + a = b',
    gradient: 'from-emerald-400 to-emerald-600',
    icon: '➕',
  },
  'likninger-2': {
    name: 'Oppgave 2: Variabel begge sider',
    description: 'ax + b = cx + d',
    gradient: 'from-emerald-500 to-emerald-700',
    icon: '↔️',
  },
  'likninger-3': {
    name: 'Oppgave 3: Multiplikasjon',
    description: 'ax = b',
    gradient: 'from-teal-400 to-teal-600',
    icon: '✖️',
  },
  'likninger-4': {
    name: 'Oppgave 4: Mult. og addisjon',
    description: 'ax + b = c',
    gradient: 'from-teal-500 to-teal-700',
    icon: '🔢',
  },
  'likninger-5': {
    name: 'Oppgave 5: Negativ koeffisient',
    description: '-ax = b',
    gradient: 'from-cyan-400 to-cyan-600',
    icon: '➖',
  },
  'likninger-6': {
    name: 'Oppgave 6: Divisjon',
    description: 'x/a = b',
    gradient: 'from-cyan-500 to-cyan-700',
    icon: '➗',
  },
  'likninger-7': {
    name: 'Oppgave 7: Brøk i likning',
    description: '(x + a)/b = c',
    gradient: 'from-sky-400 to-sky-600',
    icon: '½',
  },
  'likninger-8': {
    name: 'Oppgave 8: Brøk (avansert)',
    description: 'Flere brøkledd',
    gradient: 'from-sky-500 to-sky-700',
    icon: '½',
  },
  'likninger-9': {
    name: 'Oppgave 9: x i nevner',
    description: 'a/x = b',
    gradient: 'from-blue-400 to-blue-600',
    icon: 'x',
  },
  'likninger-10': {
    name: 'Oppgave 10: Komplekse brøker',
    description: 'Blandede brøklikninger',
    gradient: 'from-blue-500 to-blue-700',
    icon: '🧮',
  },
  'likninger-11': {
    name: 'Oppgave 11: Parenteser',
    description: 'a(x + b) = c',
    gradient: 'from-indigo-400 to-indigo-600',
    icon: '()',
  },
  'likninger-12': {
    name: 'Oppgave 12: Flere parenteser',
    description: 'a(x + b) + c(x + d)',
    gradient: 'from-indigo-500 to-indigo-700',
    icon: '()()',
  },
  'likninger-13': {
    name: 'Oppgave 13: Avanserte parenteser',
    description: 'Komplekse uttrykk',
    gradient: 'from-violet-400 to-violet-600',
    icon: '🧠',
  },
} as const
