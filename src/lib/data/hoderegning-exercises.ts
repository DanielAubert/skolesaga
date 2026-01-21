/**
 * Hoderegning Exercise Data
 * Separate copy of textbook exercises for independent hoderegning modules
 */

export interface HoderegningSubTask {
  label: string;
  task: string;
  solution: string;
  answer?: number;
  expressionAnswer?: string | string[];
}

export interface HoderegningExercise {
  id: string;
  number: string;
  name: string;
  description: string;
  task: string;
  subTasks: HoderegningSubTask[];
  hints?: string[];
  solution?: string;
  gradient: string;
}

export interface HoderegningModule {
  id: string;
  name: string;
  description: string;
  exercises: HoderegningExercise[];
}

// ============================================
// POTENSER (fra 1T Kap 1.1)
// ============================================
export const potenserExercises: HoderegningExercise[] = [
  {
    id: 'hod-pot-1',
    number: '1',
    name: 'Regn ut',
    description: 'Grunnleggende potensregning',
    task: 'Regn ut',
    gradient: 'from-green-400 to-emerald-600',
    subTasks: [
      { label: 'a', task: '$2^3$', solution: '$2^3 = 8$', answer: 8 },
      { label: 'b', task: '$9^2$', solution: '$9^2 = 81$', answer: 81 },
      { label: 'c', task: '$2^2 \\cdot 5^2$', solution: '$2^2 \\cdot 5^2 = 4 \\cdot 25 = 100$', answer: 100 },
      { label: 'd', task: '$3^3 \\cdot 2$', solution: '$3^3 \\cdot 2 = 27 \\cdot 2 = 54$', answer: 54 },
      { label: 'e', task: '$7^2 \\cdot 2^2$', solution: '$7^2 \\cdot 2^2 = 49 \\cdot 4 = 196$', answer: 196 },
      { label: 'f', task: '$1^3 \\cdot 2^3 \\cdot 3^2$', solution: '$1^3 \\cdot 2^3 \\cdot 3^2 = 1 \\cdot 8 \\cdot 9 = 72$', answer: 72 },
    ],
    hints: ['Husk at $a^n = a \\cdot a \\cdot \\ldots \\cdot a$ ($n$ ganger)'],
  },
  {
    id: 'hod-pot-2',
    number: '2',
    name: 'Potens av produkt',
    description: 'x^a · x^b = x^(a+b)',
    task: 'Regn ut og skriv svaret som potens',
    gradient: 'from-blue-400 to-indigo-600',
    subTasks: [
      { label: 'a', task: '$x^2 \\cdot x^3$', solution: '$x^2 \\cdot x^3 = x^{2+3} = x^5$', expressionAnswer: 'x^5' },
      { label: 'b', task: '$2^5 \\cdot 2^{10}$', solution: '$2^5 \\cdot 2^{10} = 2^{5+10} = 2^{15}$', expressionAnswer: '2^15' },
      { label: 'c', task: '$a^3 \\cdot a^5 \\cdot b^2$', solution: '$a^3 \\cdot a^5 \\cdot b^2 = a^{3+5} \\cdot b^2 = a^8 b^2$', expressionAnswer: 'a^8*b^2' },
      { label: 'd', task: '$x^3 y^2 \\cdot x^2 \\cdot y^6$', solution: '$x^3 y^2 \\cdot x^2 \\cdot y^6 = x^{3+2} y^{2+6} = x^5 y^8$', expressionAnswer: 'x^5*y^8' },
      { label: 'e', task: '$3x^2 \\cdot 4x$', solution: '$3x^2 \\cdot 4x = 12x^{2+1} = 12x^3$', expressionAnswer: '12x^3' },
      { label: 'f', task: '$9x^3 y^3 \\cdot x^2$', solution: '$9x^3 y^3 \\cdot x^2 = 9x^{3+2} y^3 = 9x^5 y^3$', expressionAnswer: '9x^5*y^3' },
    ],
    hints: ['Bruk regelen $x^a \\cdot x^b = x^{a+b}$'],
  },
  {
    id: 'hod-pot-3',
    number: '3',
    name: 'Potens av kvotient',
    description: 'x^a / x^b = x^(a-b)',
    task: 'Regn ut og skriv svaret som potens',
    gradient: 'from-indigo-400 to-purple-600',
    subTasks: [
      { label: 'a', task: '$\\frac{7^4}{7^3}$', solution: '$\\frac{7^4}{7^3} = 7^{4-3} = 7$', expressionAnswer: '7' },
      { label: 'b', task: '$\\frac{a^7}{a^2}$', solution: '$\\frac{a^7}{a^2} = a^{7-2} = a^5$', expressionAnswer: 'a^5' },
      { label: 'c', task: '$\\frac{a^3 b^4}{ab^2}$', solution: '$\\frac{a^3 b^4}{ab^2} = a^{3-1} b^{4-2} = a^2 b^2$', expressionAnswer: 'a^2*b^2' },
      { label: 'd', task: '$\\frac{2^4 \\cdot 5^7}{2^3 \\cdot 5^4}$', solution: '$\\frac{2^4 \\cdot 5^7}{2^3 \\cdot 5^4} = 2^{4-3} \\cdot 5^{7-4} = 2 \\cdot 5^3$', expressionAnswer: '2*5^3' },
      { label: 'e', task: '$\\frac{x^4 y^2 \\cdot 2^4 \\cdot x^2}{2^2 x^3}$', solution: '$\\frac{x^4 y^2 \\cdot 2^4 \\cdot x^2}{2^2 x^3} = 2^{4-2} x^{4+2-3} y^2 = 4x^3 y^2$', expressionAnswer: '4x^3*y^2' },
      { label: 'f', task: '$\\frac{5^4 \\cdot 2^3 x^3}{2^2 x^2}$', solution: '$\\frac{5^4 \\cdot 2^3 x^3}{2^2 x^2} = 5^4 \\cdot 2^{3-2} \\cdot x^{3-2} = 2 \\cdot 5^4 x$', expressionAnswer: '2*5^4*x' },
    ],
    hints: ['Bruk regelen $\\frac{x^a}{x^b} = x^{a-b}$'],
  },
  {
    id: 'hod-pot-4',
    number: '4',
    name: 'Negative eksponenter',
    description: 'x^(-n) = 1/x^n',
    task: 'Gjør om uttrykket slik at det ikke lenger har en negativ eksponent og regn ut.',
    gradient: 'from-purple-400 to-pink-600',
    subTasks: [
      { label: 'a', task: '$3x^{-1}$', solution: '$3x^{-1} = \\frac{3}{x}$', expressionAnswer: '3/x' },
      { label: 'b', task: '$4a^{-2}$', solution: '$4a^{-2} = \\frac{4}{a^2}$', expressionAnswer: '4/a^2' },
      { label: 'c', task: '$2^{-2} x^{-3}$', solution: '$2^{-2} x^{-3} = \\frac{1}{4x^3}$', expressionAnswer: '1/(4x^3)' },
      { label: 'd', task: '$a^3 a^{-5}$', solution: '$a^3 a^{-5} = a^{3-5} = a^{-2} = \\frac{1}{a^2}$', expressionAnswer: '1/a^2' },
      { label: 'e', task: '$8x^{-3} \\cdot 2^{-2} x^5$', solution: '$8x^{-3} \\cdot 2^{-2} x^5 = 8 \\cdot \\frac{1}{4} \\cdot x^{-3+5} = 2x^2$', expressionAnswer: '2x^2' },
      { label: 'f', task: '$3x^3 \\cdot x^{-5} \\cdot \\frac{2}{x^4}$', solution: '$3x^3 \\cdot x^{-5} \\cdot \\frac{2}{x^4} = \\frac{6}{x^6}$', expressionAnswer: '6/x^6' },
    ],
    hints: ['$x^{-n} = \\frac{1}{x^n}$', '$a^m \\cdot a^n = a^{m+n}$'],
  },
  {
    id: 'hod-pot-5',
    number: '5',
    name: 'Brøker med neg. eksponenter',
    description: 'Flytt potenser for positiv eksponent',
    task: 'Regn ut og skriv svaret som potens',
    gradient: 'from-pink-400 to-rose-600',
    subTasks: [
      { label: 'a', task: '$\\frac{2^{-2}}{3^{-1}}$', solution: '$\\frac{2^{-2}}{3^{-1}} = \\frac{3}{4}$', expressionAnswer: '3/4' },
      { label: 'b', task: '$\\frac{a^{-3}}{2^{-3}}$', solution: '$\\frac{a^{-3}}{2^{-3}} = \\frac{8}{a^3}$', expressionAnswer: '8/a^3' },
      { label: 'c', task: '$\\frac{7x^{-5}}{x^2}$', solution: '$\\frac{7x^{-5}}{x^2} = \\frac{7}{x^7}$', expressionAnswer: '7/x^7' },
      { label: 'd', task: '$\\frac{2x^{-1} y^2}{x^4 y^{-4}}$', solution: '$\\frac{2x^{-1} y^2}{x^4 y^{-4}} = \\frac{2y^6}{x^5}$', expressionAnswer: '2y^6/x^5' },
      { label: 'e', task: '$\\frac{2^{-2} y^6}{3^{-2} y^{-4}}$', solution: '$\\frac{2^{-2} y^6}{3^{-2} y^{-4}} = \\frac{9y^{10}}{4}$', expressionAnswer: '9y^10/4' },
      { label: 'f', task: '$\\frac{4x^{-3}}{2x^{-4}}$', solution: '$\\frac{4x^{-3}}{2x^{-4}} = 2x$', expressionAnswer: '2x' },
    ],
    hints: ['$\\frac{a^{-n}}{b^{-m}} = \\frac{b^m}{a^n}$'],
  },
  {
    id: 'hod-pot-6',
    number: '6',
    name: 'Potens av produkt',
    description: '(ab)^n = a^n · b^n',
    task: 'Regn ut',
    gradient: 'from-rose-400 to-red-600',
    subTasks: [
      { label: 'a', task: '$(3x)^2$', solution: '$(3x)^2 = 9x^2$', expressionAnswer: '9x^2' },
      { label: 'b', task: '$(ab)^2$', solution: '$(ab)^2 = a^2 b^2$', expressionAnswer: 'a^2*b^2' },
      { label: 'c', task: '$3a^4 \\cdot (2a)^3$', solution: '$3a^4 \\cdot (2a)^3 = 3a^4 \\cdot 8a^3 = 24a^7$', expressionAnswer: '24a^7' },
    ],
    hints: ['$(a \\cdot b)^n = a^n \\cdot b^n$'],
  },
  {
    id: 'hod-pot-7',
    number: '7',
    name: 'Brøkpotenser',
    description: '(a/b)^n = a^n / b^n',
    task: 'Regn ut og skriv svaret som potens',
    gradient: 'from-red-400 to-orange-600',
    subTasks: [
      { label: 'a', task: '$\\left(\\frac{a}{b}\\right)^8$', solution: '$\\left(\\frac{a}{b}\\right)^8 = \\frac{a^8}{b^8}$', expressionAnswer: 'a^8/b^8' },
      { label: 'b', task: '$\\left(\\frac{2a}{3}\\right)^2$', solution: '$\\left(\\frac{2a}{3}\\right)^2 = \\frac{4a^2}{9}$', expressionAnswer: '4a^2/9' },
      { label: 'c', task: '$\\left(\\frac{x}{5y}\\right)^2$', solution: '$\\left(\\frac{x}{5y}\\right)^2 = \\frac{x^2}{25y^2}$', expressionAnswer: 'x^2/(25y^2)' },
      { label: 'd', task: '$\\left(\\frac{x}{y}\\right)^4 \\cdot \\left(\\frac{2x}{y^2}\\right)$', solution: '$\\left(\\frac{x}{y}\\right)^4 \\cdot \\left(\\frac{2x}{y^2}\\right) = \\frac{2x^5}{y^6}$', expressionAnswer: '2x^5/y^6' },
      { label: 'e', task: '$\\left(\\frac{a}{3}\\right)^4 \\cdot 3^3 a$', solution: '$\\left(\\frac{a}{3}\\right)^4 \\cdot 3^3 a = \\frac{a^5}{3}$', expressionAnswer: 'a^5/3' },
      { label: 'f', task: '$\\left(\\frac{a}{2b}\\right)^2 \\cdot 3a^{-2} b^{-2}$', solution: '$\\left(\\frac{a}{2b}\\right)^2 \\cdot 3a^{-2} b^{-2} = \\frac{3}{4b^4}$', expressionAnswer: '3/(4b^4)' },
    ],
    hints: ['$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$'],
  },
  {
    id: 'hod-pot-8',
    number: '8',
    name: 'Potens av potens',
    description: '(x^a)^b = x^(a·b)',
    task: 'Regn ut',
    gradient: 'from-cyan-400 to-blue-600',
    subTasks: [
      { label: 'a', task: '$(x^2)^3$', solution: '$(x^2)^3 = x^6$', expressionAnswer: 'x^6' },
      { label: 'b', task: '$(5a^2)^2$', solution: '$(5a^2)^2 = 25a^4$', expressionAnswer: '25a^4' },
      { label: 'c', task: '$\\left(\\frac{a^4}{3}\\right)^3$', solution: '$\\left(\\frac{a^4}{3}\\right)^3 = \\frac{a^{12}}{27}$', expressionAnswer: 'a^12/27' },
      { label: 'd', task: '$(ab^2)^3$', solution: '$(ab^2)^3 = a^3 b^6$', expressionAnswer: 'a^3*b^6' },
      { label: 'e', task: '$\\left(\\frac{2x^3}{y^2}\\right)^3$', solution: '$\\left(\\frac{2x^3}{y^2}\\right)^3 = \\frac{8x^9}{y^6}$', expressionAnswer: '8x^9/y^6' },
      { label: 'f', task: '$x^3 \\cdot \\left(\\frac{x^2}{y^2}\\right)^3$', solution: '$x^3 \\cdot \\left(\\frac{x^2}{y^2}\\right)^3 = \\frac{x^9}{y^6}$', expressionAnswer: 'x^9/y^6' },
    ],
    hints: ['$(x^a)^b = x^{a \\cdot b}$'],
  },
  {
    id: 'hod-pot-9',
    number: '9',
    name: 'Nullte potens',
    description: 'a^0 = 1',
    task: 'Regn ut',
    gradient: 'from-teal-400 to-cyan-600',
    subTasks: [
      { label: 'a', task: '$9^0$', solution: '$9^0 = 1$', answer: 1 },
      { label: 'b', task: '$\\frac{x^5}{x^5}$', solution: '$\\frac{x^5}{x^5} = x^0 = 1$', answer: 1 },
      { label: 'c', task: '$3a^0$ der $a \\neq 0$', solution: '$3a^0 = 3 \\cdot 1 = 3$', answer: 3 },
      { label: 'd', task: '$(-3x)^0$', solution: '$(-3x)^0 = 1$', answer: 1 },
      { label: 'e', task: '$x^{-3} \\cdot x^2 \\cdot 2x$', solution: '$x^{-3} \\cdot x^2 \\cdot 2x = 2x^0 = 2$', answer: 2 },
      { label: 'f', task: '$\\frac{x^2}{x^{-2}} \\cdot y^2 x^{-4}$', solution: '$\\frac{x^2}{x^{-2}} \\cdot y^2 x^{-4} = x^4 \\cdot y^2 \\cdot x^{-4} = y^2$', expressionAnswer: 'y^2' },
    ],
    hints: ['$a^0 = 1$ for alle $a \\neq 0$'],
  },
  {
    id: 'hod-pot-10',
    number: '10',
    name: 'Avansert potensregning',
    description: 'Kombinasjon av alle regler',
    task: 'Regn ut',
    gradient: 'from-violet-400 to-purple-600',
    subTasks: [
      { label: 'a', task: '$\\frac{2^5}{8^2}$', solution: '$\\frac{2^5}{8^2} = \\frac{2^5}{(2^3)^2} = \\frac{2^5}{2^6} = 2^{-1} = \\frac{1}{2}$', answer: 0.5 },
      { label: 'b', task: '$\\frac{5^5}{25^3}$', solution: '$\\frac{5^5}{25^3} = \\frac{5^5}{(5^2)^3} = \\frac{5^5}{5^6} = \\frac{1}{5}$', answer: 0.2 },
      { label: 'c', task: '$\\frac{(3x)^2}{3 \\cdot 27x}$', solution: '$\\frac{(3x)^2}{3 \\cdot 27x} = \\frac{9x^2}{81x} = \\frac{x}{9}$', expressionAnswer: 'x/9' },
      { label: 'd', task: '$\\frac{49 \\cdot 16}{14^2}$', solution: '$\\frac{49 \\cdot 16}{14^2} = \\frac{7^2 \\cdot 4^2}{(7 \\cdot 2)^2} = \\frac{7^2 \\cdot 4^2}{7^2 \\cdot 4} = 4$', answer: 4 },
      { label: 'e', task: '$\\frac{14^2 \\cdot 6^2}{2^3 \\cdot 42}$', solution: '$\\frac{14^2 \\cdot 6^2}{2^3 \\cdot 42} = 21$', answer: 21 },
      { label: 'f', task: '$\\frac{9^2 \\cdot (2y)^3}{36^2 y^{-2}}$', solution: '$\\frac{9^2 \\cdot (2y)^3}{36^2 y^{-2}} = \\frac{y^5}{2}$', expressionAnswer: 'y^5/2' },
    ],
    hints: ['Skriv alle tall som potenser av primtall', '$8 = 2^3$, $25 = 5^2$, $27 = 3^3$, etc.'],
  },
];

// ============================================
// ALGEBRA (fra 1T Kap 1.4)
// ============================================
export const algebraExercises: HoderegningExercise[] = [
  {
    id: 'hod-alg-2',
    number: '2',
    name: 'Forenkle uttrykk',
    description: 'Samle like ledd',
    task: 'Forenkle uttrykkene',
    gradient: 'from-cyan-400 to-blue-600',
    subTasks: [
      { label: 'a', task: '$3a + 2b + a - b$', solution: '$3a + 2b + a - b = 4a + b$', expressionAnswer: '4a+b' },
      { label: 'b', task: '$2x - (5x - 1)$', solution: '$2x - 5x + 1 = -3x + 1$', expressionAnswer: '-3x+1' },
      { label: 'c', task: '$5a^2 - 2a^2 + 3a$', solution: '$3a^2 + 3a$', expressionAnswer: '3a^2+3a' },
      { label: 'd', task: '$x^2 + 2x - 3x^2 + x$', solution: '$-2x^2 + 3x$', expressionAnswer: '-2x^2+3x' },
    ],
    hints: ['Samle like ledd (samme variabel med samme eksponent)'],
  },
  {
    id: 'hod-alg-3',
    number: '3',
    name: 'Multiplisere parenteser',
    description: 'a(b + c) = ab + ac',
    task: 'Multipliser ut og forenkle',
    gradient: 'from-blue-400 to-indigo-600',
    subTasks: [
      { label: 'a', task: '$2(x + 3)$', solution: '$2x + 6$', expressionAnswer: '2x+6' },
      { label: 'b', task: '$-3(2a - 1)$', solution: '$-6a + 3$', expressionAnswer: '-6a+3' },
      { label: 'c', task: '$x(x + 2)$', solution: '$x^2 + 2x$', expressionAnswer: 'x^2+2x' },
      { label: 'd', task: '$2a(3a - 4b)$', solution: '$6a^2 - 8ab$', expressionAnswer: '6a^2-8ab' },
    ],
    hints: ['Multipliser hvert ledd i parentesen med faktoren utenfor'],
  },
  {
    id: 'hod-alg-4',
    number: '4',
    name: 'Parenteser ganget sammen',
    description: '(a + b)(c + d)',
    task: 'Multipliser ut og forenkle',
    gradient: 'from-indigo-400 to-purple-600',
    subTasks: [
      { label: 'a', task: '$(x + 2)(x + 3)$', solution: '$x^2 + 5x + 6$', expressionAnswer: 'x^2+5x+6' },
      { label: 'b', task: '$(x - 1)(x + 4)$', solution: '$x^2 + 3x - 4$', expressionAnswer: 'x^2+3x-4' },
      { label: 'c', task: '$(2x + 1)(x - 3)$', solution: '$2x^2 - 5x - 3$', expressionAnswer: '2x^2-5x-3' },
      { label: 'd', task: '$(a - b)(a + b)$', solution: '$a^2 - b^2$', expressionAnswer: 'a^2-b^2' },
    ],
    hints: ['Bruk FOIL: First, Outer, Inner, Last'],
  },
  {
    id: 'hod-alg-5',
    number: '5',
    name: 'Første kvadratsetning',
    description: '(a + b)² = a² + 2ab + b²',
    task: 'Bruk første kvadratsetning',
    gradient: 'from-purple-400 to-pink-600',
    subTasks: [
      { label: 'a', task: '$(x + 3)^2$', solution: '$x^2 + 6x + 9$', expressionAnswer: 'x^2+6x+9' },
      { label: 'b', task: '$(2a + 1)^2$', solution: '$4a^2 + 4a + 1$', expressionAnswer: '4a^2+4a+1' },
      { label: 'c', task: '$(x + y)^2$', solution: '$x^2 + 2xy + y^2$', expressionAnswer: 'x^2+2xy+y^2' },
      { label: 'd', task: '$(3x + 2y)^2$', solution: '$9x^2 + 12xy + 4y^2$', expressionAnswer: '9x^2+12xy+4y^2' },
    ],
    hints: ['$(a + b)^2 = a^2 + 2ab + b^2$'],
  },
  {
    id: 'hod-alg-6',
    number: '6',
    name: 'Andre kvadratsetning',
    description: '(a - b)² = a² - 2ab + b²',
    task: 'Bruk andre kvadratsetning',
    gradient: 'from-pink-400 to-rose-600',
    subTasks: [
      { label: 'a', task: '$(x - 2)^2$', solution: '$x^2 - 4x + 4$', expressionAnswer: 'x^2-4x+4' },
      { label: 'b', task: '$(3a - 1)^2$', solution: '$9a^2 - 6a + 1$', expressionAnswer: '9a^2-6a+1' },
      { label: 'c', task: '$(x - y)^2$', solution: '$x^2 - 2xy + y^2$', expressionAnswer: 'x^2-2xy+y^2' },
      { label: 'd', task: '$(2x - 3y)^2$', solution: '$4x^2 - 12xy + 9y^2$', expressionAnswer: '4x^2-12xy+9y^2' },
    ],
    hints: ['$(a - b)^2 = a^2 - 2ab + b^2$'],
  },
  {
    id: 'hod-alg-7',
    number: '7',
    name: 'Konjugatsetningen',
    description: '(a + b)(a - b) = a² - b²',
    task: 'Bruk konjugatsetningen',
    gradient: 'from-rose-400 to-red-600',
    subTasks: [
      { label: 'a', task: '$(x + 4)(x - 4)$', solution: '$x^2 - 16$', expressionAnswer: 'x^2-16' },
      { label: 'b', task: '$(2a + 3)(2a - 3)$', solution: '$4a^2 - 9$', expressionAnswer: '4a^2-9' },
      { label: 'c', task: '$(x + y)(x - y)$', solution: '$x^2 - y^2$', expressionAnswer: 'x^2-y^2' },
      { label: 'd', task: '$(3x + 2y)(3x - 2y)$', solution: '$9x^2 - 4y^2$', expressionAnswer: '9x^2-4y^2' },
    ],
    hints: ['$(a + b)(a - b) = a^2 - b^2$'],
  },
  {
    id: 'hod-alg-8',
    number: '8',
    name: 'Blandet algebra',
    description: 'Kombinasjon av alle regler',
    task: 'Forenkle uttrykkene',
    gradient: 'from-amber-400 to-orange-600',
    subTasks: [
      { label: 'a', task: '$(x + 1)^2 - (x - 1)^2$', solution: '$4x$', expressionAnswer: '4x' },
      { label: 'b', task: '$(a + b)^2 - 2ab$', solution: '$a^2 + b^2$', expressionAnswer: 'a^2+b^2' },
      { label: 'c', task: '$(x + 2)^2 - (x + 2)(x - 2)$', solution: '$4x + 8$', expressionAnswer: '4x+8' },
      { label: 'd', task: '$(2x - 1)^2 + (2x + 1)^2$', solution: '$8x^2 + 2$', expressionAnswer: '8x^2+2' },
    ],
    hints: ['Bruk kvadratsetningene og konjugatsetningen'],
  },
];

// ============================================
// BRØKREGNING (fra 1T Kap 1.5)
// ============================================
export const brokregningExercises: HoderegningExercise[] = [
  {
    id: 'hod-brok-1',
    number: '1',
    name: 'Forkorte brøker',
    description: 'Finn fellesfaktorer',
    task: 'Forkort brøkene så langt som mulig',
    gradient: 'from-blue-400 to-cyan-600',
    subTasks: [
      { label: 'a', task: '$\\frac{6}{9}$', solution: '$\\frac{2}{3}$', expressionAnswer: '2/3' },
      { label: 'b', task: '$\\frac{15}{25}$', solution: '$\\frac{3}{5}$', expressionAnswer: '3/5' },
      { label: 'c', task: '$\\frac{2a}{4a^2}$', solution: '$\\frac{1}{2a}$', expressionAnswer: '1/(2a)' },
      { label: 'd', task: '$\\frac{6x^2}{9x}$', solution: '$\\frac{2x}{3}$', expressionAnswer: '2x/3' },
    ],
    hints: ['Del teller og nevner på største felles faktor'],
  },
  {
    id: 'hod-brok-2',
    number: '2',
    name: 'Addere brøker',
    description: 'Finn fellesnevner',
    task: 'Regn ut',
    gradient: 'from-cyan-400 to-teal-600',
    subTasks: [
      { label: 'a', task: '$\\frac{1}{2} + \\frac{1}{3}$', solution: '$\\frac{5}{6}$', expressionAnswer: '5/6' },
      { label: 'b', task: '$\\frac{2}{5} + \\frac{1}{4}$', solution: '$\\frac{13}{20}$', expressionAnswer: '13/20' },
      { label: 'c', task: '$\\frac{a}{2} + \\frac{a}{3}$', solution: '$\\frac{5a}{6}$', expressionAnswer: '5a/6' },
      { label: 'd', task: '$\\frac{1}{x} + \\frac{2}{x}$', solution: '$\\frac{3}{x}$', expressionAnswer: '3/x' },
    ],
    hints: ['Finn fellesnevner ved å multiplisere nevnerne'],
  },
  {
    id: 'hod-brok-3',
    number: '3',
    name: 'Subtrahere brøker',
    description: 'Finn fellesnevner',
    task: 'Regn ut',
    gradient: 'from-teal-400 to-green-600',
    subTasks: [
      { label: 'a', task: '$\\frac{3}{4} - \\frac{1}{2}$', solution: '$\\frac{1}{4}$', expressionAnswer: '1/4' },
      { label: 'b', task: '$\\frac{5}{6} - \\frac{1}{3}$', solution: '$\\frac{1}{2}$', expressionAnswer: '1/2' },
      { label: 'c', task: '$\\frac{2a}{3} - \\frac{a}{6}$', solution: '$\\frac{a}{2}$', expressionAnswer: 'a/2' },
      { label: 'd', task: '$\\frac{3}{x} - \\frac{1}{x}$', solution: '$\\frac{2}{x}$', expressionAnswer: '2/x' },
    ],
    hints: ['Finn fellesnevner først'],
  },
  {
    id: 'hod-brok-4',
    number: '4',
    name: 'Multiplisere brøker',
    description: 'Teller ganger teller, nevner ganger nevner',
    task: 'Regn ut',
    gradient: 'from-green-400 to-emerald-600',
    subTasks: [
      { label: 'a', task: '$\\frac{2}{3} \\cdot \\frac{3}{4}$', solution: '$\\frac{1}{2}$', expressionAnswer: '1/2' },
      { label: 'b', task: '$\\frac{a}{2} \\cdot \\frac{4}{a}$', solution: '$2$', expressionAnswer: '2' },
      { label: 'c', task: '$\\frac{x^2}{3} \\cdot \\frac{6}{x}$', solution: '$2x$', expressionAnswer: '2x' },
      { label: 'd', task: '$\\frac{2a}{b} \\cdot \\frac{b^2}{4a}$', solution: '$\\frac{b}{2}$', expressionAnswer: 'b/2' },
    ],
    hints: ['Multipliser tellerne og nevnerne hver for seg, forkort før du ganger'],
  },
  {
    id: 'hod-brok-5',
    number: '5',
    name: 'Dividere brøker',
    description: 'Gang med den omvendte brøken',
    task: 'Regn ut',
    gradient: 'from-emerald-400 to-teal-600',
    subTasks: [
      { label: 'a', task: '$\\frac{2}{3} : \\frac{4}{5}$', solution: '$\\frac{5}{6}$', expressionAnswer: '5/6' },
      { label: 'b', task: '$\\frac{a}{2} : \\frac{a}{4}$', solution: '$2$', expressionAnswer: '2' },
      { label: 'c', task: '$\\frac{x^2}{3} : \\frac{x}{6}$', solution: '$2x$', expressionAnswer: '2x' },
      { label: 'd', task: '$\\frac{2a}{b} : \\frac{4a}{b^2}$', solution: '$\\frac{b}{2}$', expressionAnswer: 'b/2' },
    ],
    hints: ['$\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$'],
  },
];

// ============================================
// FAKTORISERING (fra 1T Kap 1.6)
// ============================================
export const faktoriseringExercises: HoderegningExercise[] = [
  {
    id: 'hod-fak-1',
    number: '1',
    name: 'Faktoriser med fellesfaktor',
    description: 'Finn største felles faktor',
    task: 'Faktoriser uttrykkene',
    gradient: 'from-violet-400 to-purple-600',
    subTasks: [
      { label: 'a', task: '$2x + 4$', solution: '$2(x + 2)$', expressionAnswer: '2(x+2)' },
      { label: 'b', task: '$6a - 9$', solution: '$3(2a - 3)$', expressionAnswer: '3(2a-3)' },
      { label: 'c', task: '$x^2 + 2x$', solution: '$x(x + 2)$', expressionAnswer: 'x(x+2)' },
      { label: 'd', task: '$3a^2 - 6a$', solution: '$3a(a - 2)$', expressionAnswer: '3a(a-2)' },
    ],
    hints: ['Finn største felles faktor og sett den utenfor parentes'],
  },
  {
    id: 'hod-fak-2',
    number: '2',
    name: 'Faktoriser med konjugatsetningen',
    description: 'a² - b² = (a + b)(a - b)',
    task: 'Faktoriser uttrykkene',
    gradient: 'from-purple-400 to-pink-600',
    subTasks: [
      { label: 'a', task: '$x^2 - 9$', solution: '$(x + 3)(x - 3)$', expressionAnswer: '(x+3)(x-3)' },
      { label: 'b', task: '$4a^2 - 1$', solution: '$(2a + 1)(2a - 1)$', expressionAnswer: '(2a+1)(2a-1)' },
      { label: 'c', task: '$x^2 - y^2$', solution: '$(x + y)(x - y)$', expressionAnswer: '(x+y)(x-y)' },
      { label: 'd', task: '$9x^2 - 16y^2$', solution: '$(3x + 4y)(3x - 4y)$', expressionAnswer: '(3x+4y)(3x-4y)' },
    ],
    hints: ['$a^2 - b^2 = (a + b)(a - b)$'],
  },
  {
    id: 'hod-fak-3',
    number: '3',
    name: 'Faktoriser fullstendige kvadrater',
    description: 'a² + 2ab + b² eller a² - 2ab + b²',
    task: 'Faktoriser uttrykkene',
    gradient: 'from-pink-400 to-rose-600',
    subTasks: [
      { label: 'a', task: '$x^2 + 6x + 9$', solution: '$(x + 3)^2$', expressionAnswer: '(x+3)^2' },
      { label: 'b', task: '$x^2 - 4x + 4$', solution: '$(x - 2)^2$', expressionAnswer: '(x-2)^2' },
      { label: 'c', task: '$4a^2 + 4a + 1$', solution: '$(2a + 1)^2$', expressionAnswer: '(2a+1)^2' },
      { label: 'd', task: '$9x^2 - 6x + 1$', solution: '$(3x - 1)^2$', expressionAnswer: '(3x-1)^2' },
    ],
    hints: ['Sjekk om uttrykket matcher $(a + b)^2$ eller $(a - b)^2$'],
  },
  {
    id: 'hod-fak-4',
    number: '4',
    name: 'Faktoriser andregradsuttrykk',
    description: 'x² + bx + c',
    task: 'Faktoriser uttrykkene',
    gradient: 'from-rose-400 to-red-600',
    subTasks: [
      { label: 'a', task: '$x^2 + 5x + 6$', solution: '$(x + 2)(x + 3)$', expressionAnswer: '(x+2)(x+3)' },
      { label: 'b', task: '$x^2 - x - 6$', solution: '$(x - 3)(x + 2)$', expressionAnswer: '(x-3)(x+2)' },
      { label: 'c', task: '$x^2 + 7x + 12$', solution: '$(x + 3)(x + 4)$', expressionAnswer: '(x+3)(x+4)' },
      { label: 'd', task: '$x^2 - 5x + 6$', solution: '$(x - 2)(x - 3)$', expressionAnswer: '(x-2)(x-3)' },
    ],
    hints: ['Finn to tall som har sum b og produkt c'],
  },
];

// ============================================
// RASJONALE UTTRYKK (fra 1T Kap 1.7)
// ============================================
export const rasjonaleUttrykkExercises: HoderegningExercise[] = [
  {
    id: 'hod-ras-1',
    number: '1',
    name: 'Forenkle rasjonale uttrykk',
    description: 'Forkort algebraiske brøker',
    task: 'Forkort uttrykkene så langt som mulig',
    gradient: 'from-sky-400 to-blue-600',
    subTasks: [
      { label: 'a', task: '$\\frac{2x}{4x^2}$', solution: '$\\frac{1}{2x}$', expressionAnswer: '1/(2x)' },
      { label: 'b', task: '$\\frac{x^2 - 4}{x + 2}$', solution: '$x - 2$', expressionAnswer: 'x-2' },
      { label: 'c', task: '$\\frac{x^2 + 2x}{x}$', solution: '$x + 2$', expressionAnswer: 'x+2' },
      { label: 'd', task: '$\\frac{a^2 - b^2}{a + b}$', solution: '$a - b$', expressionAnswer: 'a-b' },
    ],
    hints: ['Faktoriser teller og nevner, deretter forkort'],
  },
  {
    id: 'hod-ras-2',
    number: '2',
    name: 'Addere rasjonale uttrykk',
    description: 'Finn fellesnevner',
    task: 'Regn ut og forenkle',
    gradient: 'from-blue-400 to-indigo-600',
    subTasks: [
      { label: 'a', task: '$\\frac{1}{x} + \\frac{2}{x}$', solution: '$\\frac{3}{x}$', expressionAnswer: '3/x' },
      { label: 'b', task: '$\\frac{a}{2} + \\frac{a}{3}$', solution: '$\\frac{5a}{6}$', expressionAnswer: '5a/6' },
      { label: 'c', task: '$\\frac{1}{x} + \\frac{1}{y}$', solution: '$\\frac{x + y}{xy}$', expressionAnswer: '(x+y)/(xy)' },
      { label: 'd', task: '$\\frac{2}{x+1} + \\frac{3}{x+1}$', solution: '$\\frac{5}{x+1}$', expressionAnswer: '5/(x+1)' },
    ],
    hints: ['Finn fellesnevner først'],
  },
  {
    id: 'hod-ras-3',
    number: '3',
    name: 'Multiplisere rasjonale uttrykk',
    description: 'Forkort før du ganger',
    task: 'Regn ut og forenkle',
    gradient: 'from-indigo-400 to-violet-600',
    subTasks: [
      { label: 'a', task: '$\\frac{x}{2} \\cdot \\frac{4}{x^2}$', solution: '$\\frac{2}{x}$', expressionAnswer: '2/x' },
      { label: 'b', task: '$\\frac{a^2}{b} \\cdot \\frac{b^2}{a}$', solution: '$ab$', expressionAnswer: 'ab' },
      { label: 'c', task: '$\\frac{x+1}{x} \\cdot \\frac{x}{x+1}$', solution: '$1$', expressionAnswer: '1' },
      { label: 'd', task: '$\\frac{x^2-1}{x} \\cdot \\frac{x}{x+1}$', solution: '$x - 1$', expressionAnswer: 'x-1' },
    ],
    hints: ['Faktoriser og forkort før du ganger'],
  },
];

// ============================================
// LIKNINGER (fra 1T Kap 2.1)
// ============================================
export const likningerExercises: HoderegningExercise[] = [
  {
    id: 'hod-lik-1',
    number: '1',
    name: 'Enkle likninger',
    description: 'Løs for x',
    task: 'Løs likningene',
    gradient: 'from-emerald-400 to-teal-600',
    subTasks: [
      { label: 'a', task: '$x + 3 = 7$', solution: '$x = 4$', expressionAnswer: '4' },
      { label: 'b', task: '$2x = 10$', solution: '$x = 5$', expressionAnswer: '5' },
      { label: 'c', task: '$x - 4 = 2$', solution: '$x = 6$', expressionAnswer: '6' },
      { label: 'd', task: '$3x + 1 = 10$', solution: '$x = 3$', expressionAnswer: '3' },
    ],
    hints: ['Isoler x på én side av likhetstegnet'],
  },
  {
    id: 'hod-lik-2',
    number: '2',
    name: 'Likninger med parenteser',
    description: 'Løs opp parenteser først',
    task: 'Løs likningene',
    gradient: 'from-teal-400 to-cyan-600',
    subTasks: [
      { label: 'a', task: '$2(x + 3) = 10$', solution: '$x = 2$', expressionAnswer: '2' },
      { label: 'b', task: '$3(x - 1) = 9$', solution: '$x = 4$', expressionAnswer: '4' },
      { label: 'c', task: '$4(2x + 1) = 20$', solution: '$x = 2$', expressionAnswer: '2' },
      { label: 'd', task: '$5(x - 2) = 15$', solution: '$x = 5$', expressionAnswer: '5' },
    ],
    hints: ['Løs opp parentesene først, deretter isoler x'],
  },
  {
    id: 'hod-lik-3',
    number: '3',
    name: 'Likninger med x på begge sider',
    description: 'Samle x på én side',
    task: 'Løs likningene',
    gradient: 'from-cyan-400 to-blue-600',
    subTasks: [
      { label: 'a', task: '$3x + 2 = x + 8$', solution: '$x = 3$', expressionAnswer: '3' },
      { label: 'b', task: '$5x - 1 = 2x + 8$', solution: '$x = 3$', expressionAnswer: '3' },
      { label: 'c', task: '$4x + 3 = 2x + 9$', solution: '$x = 3$', expressionAnswer: '3' },
      { label: 'd', task: '$6x - 4 = 3x + 5$', solution: '$x = 3$', expressionAnswer: '3' },
    ],
    hints: ['Flytt alle x-ledd til én side, alle tall til den andre'],
  },
  {
    id: 'hod-lik-4',
    number: '4',
    name: 'Brøklikninger',
    description: 'Gang med fellesnevner',
    task: 'Løs likningene',
    gradient: 'from-blue-400 to-indigo-600',
    subTasks: [
      { label: 'a', task: '$\\frac{x}{2} = 3$', solution: '$x = 6$', expressionAnswer: '6' },
      { label: 'b', task: '$\\frac{2x}{3} = 4$', solution: '$x = 6$', expressionAnswer: '6' },
      { label: 'c', task: '$\\frac{x + 1}{2} = 3$', solution: '$x = 5$', expressionAnswer: '5' },
      { label: 'd', task: '$\\frac{3x - 1}{4} = 2$', solution: '$x = 3$', expressionAnswer: '3' },
    ],
    hints: ['Gang begge sider med nevneren for å fjerne brøken'],
  },
  {
    id: 'hod-lik-5',
    number: '5',
    name: 'Likninger med x i nevner',
    description: 'Vær obs på gyldighetsområde',
    task: 'Løs likningene',
    gradient: 'from-indigo-400 to-purple-600',
    subTasks: [
      { label: 'a', task: '$\\frac{6}{x} = 2$', solution: '$x = 3$', expressionAnswer: '3' },
      { label: 'b', task: '$\\frac{12}{x} = 4$', solution: '$x = 3$', expressionAnswer: '3' },
      { label: 'c', task: '$\\frac{10}{x} = 5$', solution: '$x = 2$', expressionAnswer: '2' },
      { label: 'd', task: '$\\frac{15}{x} = 3$', solution: '$x = 5$', expressionAnswer: '5' },
    ],
    hints: ['Gang begge sider med x, husk at x ≠ 0'],
  },
];

// ============================================
// MODULE EXPORTS
// ============================================
export const hoderegningModules: HoderegningModule[] = [
  {
    id: 'potenser',
    name: 'Potenser',
    description: 'Potensregning',
    exercises: potenserExercises,
  },
  {
    id: 'algebra',
    name: 'Algebra',
    description: 'Bokstavregning',
    exercises: algebraExercises,
  },
  {
    id: 'brokregning',
    name: 'Brøkregning',
    description: 'Brøker og forenkling',
    exercises: brokregningExercises,
  },
  {
    id: 'faktorisering',
    name: 'Faktorisering',
    description: 'Kvadratsetningene',
    exercises: faktoriseringExercises,
  },
  {
    id: 'rasjonale-uttrykk',
    name: 'Rasjonale uttrykk',
    description: 'Algebraiske brøker',
    exercises: rasjonaleUttrykkExercises,
  },
  {
    id: 'likninger',
    name: 'Likninger',
    description: 'Grunnleggende likninger',
    exercises: likningerExercises,
  },
];

// Helper function to get exercises by module ID
export function getHoderegningExercises(moduleId: string): HoderegningExercise[] | undefined {
  const foundModule = hoderegningModules.find(m => m.id === moduleId);
  return foundModule?.exercises;
}

// Helper function to get a specific exercise
export function getHoderegningExercise(moduleId: string, exerciseId: string): HoderegningExercise | undefined {
  const exercises = getHoderegningExercises(moduleId);
  return exercises?.find(e => e.id === exerciseId);
}
