"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import React, { useState, useEffect, useRef } from "react";
import { Brain, Trophy, Target, RefreshCw, Play, Award, CheckCircle, Calculator, X, Minus, Divide, Swords } from "lucide-react";
import Link from "next/link";
import { MathExampleBox } from "@/components/hoderegning/math-example-box";

type ModuleType = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface ModuleProblem {
  id: number;
  expression: string;
  answer: number | number[]; // Can be array for multiple inputs
  userAnswer: string | string[];
  steps?: string[]; // For showing calculation steps
  inputs?: { id: string; placeholder: string; answer: number }[];
}

interface ModuleResult {
  moduleNumber: ModuleType;
  score: number;
  totalProblems: number;
  timeMs: number;
  date: string;
}

const moduleDescriptions: Record<ModuleType, string> = {
  1: 'Grunnleggende regning med negative tall',
  2: 'Finn manglende tall i ligninger',
  3: 'Multiplikasjon med negative tall',
  4: 'Regnerekkefølge',
  5: 'Divisjon med negative tall',
  6: 'Oppgave 6: Desimaltall med negative tall',
  7: 'Oppgave 7 ***: Vanskelige desimaltall'
};

export default function NegativeTallRegnerekkefolgePage() {
  const [selectedModule, setSelectedModule] = useState<ModuleType | null>(null);
  const [currentProblems, setCurrentProblems] = useState<ModuleProblem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<ModuleResult[]>([]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Load results from localStorage
  useEffect(() => {
    const savedResults = localStorage.getItem('gh-negative-tall-results');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  // Save results to localStorage
  const saveResult = (result: ModuleResult) => {
    const updatedResults = [...results, result];
    setResults(updatedResults);
    localStorage.setItem('gh-negative-tall-results', JSON.stringify(updatedResults));
  };

  // Module 1: Basic addition/subtraction with negative numbers (9 problems)
  const generateModule1Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    // Type 1: Simple subtraction giving negative result (3 problems)
    for (let i = 0; i < 3; i++) {
      const b = Math.floor(Math.random() * 10) + 1; // 1-10
      const a = Math.floor(Math.random() * b); // smaller than b
      const answer = a - b;
      problems.push({
        id: problems.length + 1,
        expression: `${a} − ${b}`,
        answer,
        userAnswer: ''
      });
    }

    // Type 2: Negative minus positive or negative plus positive (3 problems)
    for (let i = 0; i < 3; i++) {
      const isSubtraction = Math.random() < 0.5;
      const a = -(Math.floor(Math.random() * 50) + 1); // negative number
      const b = Math.floor(Math.random() * 50) + 1; // positive number

      if (isSubtraction) {
        const answer = a - b;
        problems.push({
          id: problems.length + 1,
          expression: `${a} − ${b}`,
          answer,
          userAnswer: ''
        });
      } else {
        const answer = a + b;
        problems.push({
          id: problems.length + 1,
          expression: `${a} + ${b}`,
          answer,
          userAnswer: ''
        });
      }
    }

    // Type 3: Multiple operations with negative numbers (3 problems)
    for (let i = 0; i < 3; i++) {
      const numTerms = Math.random() < 0.5 ? 3 : 2;
      let expression = '';
      let answer = 0;

      for (let j = 0; j < numTerms; j++) {
        const num = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 100) + 1);
        const op = j === 0 ? '' : (Math.random() < 0.5 ? ' + ' : ' − ');

        if (j === 0) {
          expression = `${num}`;
          answer = num;
        } else {
          expression += op;
          if (op.includes('+')) {
            expression += Math.abs(num);
            answer += num;
          } else {
            expression += Math.abs(num);
            answer -= Math.abs(num);
          }
        }
      }

      problems.push({
        id: problems.length + 1,
        expression,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Module 2: Find missing numbers in equations (9 problems)
  const generateModule2Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 9; i++) {
      const result = -(Math.floor(Math.random() * 50) + 1); // negative result
      const known = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 50) + 1);
      const isSubtraction = Math.random() < 0.5;

      // Randomly place blank at different positions
      const blankPosition = Math.floor(Math.random() * 2); // 0: first position, 1: second position

      let expression: string;
      let answer: number;

      if (blankPosition === 0) {
        // Blank at first position
        if (isSubtraction) {
          answer = result + known;
          expression = `___ − ${known} = ${result}`;
        } else {
          answer = result - known;
          expression = `___ + ${known} = ${result}`;
        }
      } else {
        // Blank at second position
        if (isSubtraction) {
          answer = known - result;
          expression = `${known} − ___ = ${result}`;
        } else {
          answer = result - known;
          expression = `${known} + ___ = ${result}`;
        }
      }

      problems.push({
        id: problems.length + 1,
        expression,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Module 3: Multiplication with negative numbers (9 problems)
  const generateModule3Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    // Simple multiplication (6 problems)
    for (let i = 0; i < 6; i++) {
      const a = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 12) + 1);
      const b = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 12) + 1);
      const answer = a * b;

      problems.push({
        id: problems.length + 1,
        expression: `${a} · ${b}`,
        answer,
        userAnswer: ''
      });
    }

    // Negation (1 problem)
    const negNum = -(Math.floor(Math.random() * 20) + 1);
    problems.push({
      id: problems.length + 1,
      expression: `−(${negNum})`,
      answer: -negNum,
      userAnswer: ''
    });

    // Triple multiplication (2 problems)
    for (let i = 0; i < 2; i++) {
      const a = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 5) + 2);
      const b = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 5) + 2);
      const c = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 5) + 2);
      const answer = a * b * c;

      problems.push({
        id: problems.length + 1,
        expression: `${a} · ${b} · ${c}`,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Module 4: Order of operations (6 problems)
  const generateModule4Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 6; i++) {
      const a = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 10) + 1);
      const b = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 10) + 1);
      const c = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 20) + 1);

      const isAddition = Math.random() < 0.5;
      const multiplyFirst = Math.random() < 0.5;

      let expression: string;
      let answer: number;
      let steps: string[];

      if (multiplyFirst) {
        // Pattern: a · b ± c
        const product = a * b;
        if (isAddition) {
          answer = product + c;
          expression = `${a} · ${b} + ${c}`;
          steps = [
            `${a} · ${b} = ${product}`,
            `${product} + ${c} = ${answer}`
          ];
        } else {
          answer = product - c;
          expression = `${a} · ${b} − ${c}`;
          steps = [
            `${a} · ${b} = ${product}`,
            `${product} − ${c} = ${answer}`
          ];
        }
      } else {
        // Pattern: a ± b · c
        const product = b * c;
        if (isAddition) {
          answer = a + product;
          expression = `${a} + ${b} · ${c}`;
          steps = [
            `${b} · ${c} = ${product}`,
            `${a} + ${product} = ${answer}`
          ];
        } else {
          answer = a - product;
          expression = `${a} − ${b} · ${c}`;
          steps = [
            `${b} · ${c} = ${product}`,
            `${a} − ${product} = ${answer}`
          ];
        }
      }

      // Create inputs for each step
      const inputs: { id: string; placeholder: string; answer: number }[] = [
        { id: `step1-${i}`, placeholder: '___', answer: parseInt(steps[0].split('= ')[1]) },
        { id: `step2-${i}`, placeholder: '___', answer: answer }
      ];

      problems.push({
        id: problems.length + 1,
        expression,
        answer: [parseInt(steps[0].split('= ')[1]), answer],
        userAnswer: ['', ''],
        steps,
        inputs
      });
    }

    return problems;
  };

  // Module 5: Division with negative numbers (8 problems)
  const generateModule5Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 8; i++) {
      const divisor = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 11) + 2); // ±2 to ±12
      const quotient = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 20) + 2); // ±2 to ±21
      const dividend = divisor * quotient;

      // Create steps for factorization or direct calculation
      const steps: string[] = [
        `${dividend} ÷ ${divisor} = ${quotient}`
      ];

      // Create inputs for steps
      const inputs: { id: string; placeholder: string; answer: number }[] = [
        { id: `div-${i}`, placeholder: '___', answer: quotient }
      ];

      problems.push({
        id: problems.length + 1,
        expression: `${dividend} ÷ ${divisor}`,
        answer: [quotient],
        userAnswer: [''],
        steps,
        inputs
      });
    }

    return problems;
  };

  // Module 6: Oppgave 6 - Decimal numbers with negative numbers (9 problems)
  const generateModule6Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    // Type 1: Simple subtraction with decimals (3 problems)
    for (let i = 0; i < 3; i++) {
      const a = (Math.floor(Math.random() * 50) + 10) / 10; // 1.0 to 5.9
      const b = (Math.floor(Math.random() * 50) + 10) / 10;
      const answer = parseFloat((a - b).toFixed(1));
      problems.push({
        id: problems.length + 1,
        expression: `${a} − ${b}`,
        answer,
        userAnswer: ''
      });
    }

    // Type 2: Negative numbers with decimals (3 problems)
    for (let i = 0; i < 3; i++) {
      const isSubtraction = Math.random() < 0.5;
      const a = -(Math.floor(Math.random() * 60) + 10) / 10; // -1.0 to -6.9
      const b = (Math.floor(Math.random() * 60) + 10) / 10; // 1.0 to 6.9

      if (isSubtraction) {
        const answer = parseFloat((a - b).toFixed(1));
        problems.push({
          id: problems.length + 1,
          expression: `${a} − ${b}`,
          answer,
          userAnswer: ''
        });
      } else {
        const answer = parseFloat((a + b).toFixed(1));
        problems.push({
          id: problems.length + 1,
          expression: `${a} + ${b}`,
          answer,
          userAnswer: ''
        });
      }
    }

    // Type 3: Multiple operations with decimals (3 problems)
    for (let i = 0; i < 3; i++) {
      const a = -(Math.floor(Math.random() * 50) + 10) / 10;
      const b = (Math.floor(Math.random() * 50) + 10) / 10;
      const c = (Math.floor(Math.random() * 50) + 10) / 10;

      const answer = parseFloat((a - b - c).toFixed(1));
      problems.push({
        id: problems.length + 1,
        expression: `${a} − ${b} − ${c}`,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Module 7: Oppgave 7 *** - Easier decimal problems with 2 decimals, only 2 numbers (9 problems)
  const generateModule7Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    // Type 1: Simple subtraction with 2 decimals (3 problems)
    for (let i = 0; i < 3; i++) {
      const a = (Math.floor(Math.random() * 300) + 100) / 100; // 1.00 to 3.99
      const b = (Math.floor(Math.random() * 300) + 100) / 100;
      const answer = parseFloat((a - b).toFixed(2));
      problems.push({
        id: problems.length + 1,
        expression: `${a} − ${b}`,
        answer,
        userAnswer: ''
      });
    }

    // Type 2: Negative minus positive (3 problems)
    for (let i = 0; i < 3; i++) {
      const a = -(Math.floor(Math.random() * 300) + 100) / 100; // -1.00 to -3.99
      const b = (Math.floor(Math.random() * 300) + 100) / 100; // 1.00 to 3.99

      const answer = parseFloat((a - b).toFixed(2));
      problems.push({
        id: problems.length + 1,
        expression: `${a} − ${b}`,
        answer,
        userAnswer: ''
      });
    }

    // Type 3: Negative plus positive (3 problems)
    for (let i = 0; i < 3; i++) {
      const a = -(Math.floor(Math.random() * 300) + 100) / 100; // -1.00 to -3.99
      const b = (Math.floor(Math.random() * 300) + 100) / 100; // 1.00 to 3.99

      const answer = parseFloat((a + b).toFixed(2));
      problems.push({
        id: problems.length + 1,
        expression: `${a} + ${b}`,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  const startModule = (moduleNumber: ModuleType) => {
    let problems: ModuleProblem[] = [];

    switch (moduleNumber) {
      case 1:
        problems = generateModule1Problems();
        break;
      case 2:
        problems = generateModule2Problems();
        break;
      case 3:
        problems = generateModule3Problems();
        break;
      case 4:
        problems = generateModule4Problems();
        break;
      case 5:
        problems = generateModule5Problems();
        break;
      case 6:
        problems = generateModule6Problems();
        break;
      case 7:
        problems = generateModule7Problems();
        break;
    }

    setSelectedModule(moduleNumber);
    setCurrentProblems(problems);
    setCurrentProblemIndex(0);
    setScore(0);
    setIsActive(true);
    setStartTime(Date.now());
    setShowResults(false);
  };

  const checkAnswer = () => {
    // Just move to next problem - scoring is done in finishModule
    if (currentProblemIndex < currentProblems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
      // Reset input focus
      setTimeout(() => inputRefs.current[0]?.focus(), 0);
    } else {
      // Module complete
      finishModule();
    }
  };

  const finishModule = () => {
    if (!selectedModule || !startTime) return;

    // Count all correct answers
    let finalScore = 0;
    currentProblems.forEach(problem => {
      if (Array.isArray(problem.answer)) {
        const userAnswers = Array.isArray(problem.userAnswer)
          ? problem.userAnswer
          : [problem.userAnswer];
        const allCorrect = problem.answer.every((ans, idx) =>
          parseFloat(userAnswers[idx]) === ans
        );
        if (allCorrect) finalScore++;
      } else {
        const userAnswer = Array.isArray(problem.userAnswer)
          ? problem.userAnswer[0]
          : problem.userAnswer;
        if (parseFloat(userAnswer) === problem.answer) finalScore++;
      }
    });

    setScore(finalScore);

    const timeMs = Date.now() - startTime;
    const result: ModuleResult = {
      moduleNumber: selectedModule,
      score: finalScore,
      totalProblems: currentProblems.length,
      timeMs,
      date: new Date().toISOString()
    };

    saveResult(result);
    setIsActive(false);
    setShowResults(true);
  };

  const handleInputChange = (value: string, index?: number) => {
    // Allow only numbers, minus sign, decimal point, and comma
    const sanitizedValue = value.replace(/[^0-9\-.,]/g, '');

    const updatedProblems = [...currentProblems];
    const currentProblem = updatedProblems[currentProblemIndex];

    if (index !== undefined && Array.isArray(currentProblem.userAnswer)) {
      const newAnswers = [...currentProblem.userAnswer];
      newAnswers[index] = sanitizedValue;
      currentProblem.userAnswer = newAnswers;

      // Auto-advance for multiple inputs: check if all answers are correct
      if (Array.isArray(currentProblem.answer)) {
        const allCorrect = currentProblem.answer.every((ans, idx) =>
          parseFloat(newAnswers[idx]) === ans
        );
        if (allCorrect) {
          setTimeout(() => {
            if (currentProblemIndex < currentProblems.length - 1) {
              setCurrentProblemIndex(currentProblemIndex + 1);
              setTimeout(() => inputRefs.current[0]?.focus(), 0);
            } else {
              finishModule();
            }
          }, 300);
        }
      }
    } else {
      currentProblem.userAnswer = sanitizedValue;

      // Auto-advance for single input when correct answer is entered
      const userAnswer = parseFloat(sanitizedValue);
      const correctAnswer = Array.isArray(currentProblem.answer)
        ? currentProblem.answer[0]
        : currentProblem.answer;

      if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
        setTimeout(() => {
          if (currentProblemIndex < currentProblems.length - 1) {
            setCurrentProblemIndex(currentProblemIndex + 1);
            setTimeout(() => inputRefs.current[0]?.focus(), 0);
          } else {
            finishModule();
          }
        }, 300);
      }
    }

    setCurrentProblems(updatedProblems);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  // Toggle negative sign for an input
  const toggleNegative = (index?: number) => {
    const updatedProblems = [...currentProblems];
    const currentProblem = updatedProblems[currentProblemIndex];
    let newValue = '';

    if (index !== undefined && Array.isArray(currentProblem.userAnswer)) {
      const newAnswers = [...currentProblem.userAnswer];
      const currentValue = newAnswers[index];
      if (currentValue.startsWith('-')) {
        newAnswers[index] = currentValue.slice(1);
      } else if (currentValue !== '') {
        newAnswers[index] = '-' + currentValue;
      } else {
        newAnswers[index] = '-';
      }
      currentProblem.userAnswer = newAnswers;

      // Check for auto-advance on multiple inputs
      if (Array.isArray(currentProblem.answer)) {
        const allCorrect = currentProblem.answer.every((ans, idx) =>
          parseFloat(newAnswers[idx]) === ans
        );
        if (allCorrect) {
          setCurrentProblems(updatedProblems);
          setTimeout(() => {
            if (currentProblemIndex < currentProblems.length - 1) {
              setCurrentProblemIndex(currentProblemIndex + 1);
              setTimeout(() => inputRefs.current[0]?.focus(), 0);
            } else {
              finishModule();
            }
          }, 300);
          return;
        }
      }
    } else if (typeof currentProblem.userAnswer === 'string') {
      const currentValue = currentProblem.userAnswer;
      if (currentValue.startsWith('-')) {
        newValue = currentValue.slice(1);
      } else if (currentValue !== '') {
        newValue = '-' + currentValue;
      } else {
        newValue = '-';
      }
      currentProblem.userAnswer = newValue;

      // Check for auto-advance on single input
      const userAnswer = parseFloat(newValue);
      const correctAnswer = Array.isArray(currentProblem.answer)
        ? currentProblem.answer[0]
        : currentProblem.answer;

      if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
        setCurrentProblems(updatedProblems);
        setTimeout(() => {
          if (currentProblemIndex < currentProblems.length - 1) {
            setCurrentProblemIndex(currentProblemIndex + 1);
            setTimeout(() => inputRefs.current[0]?.focus(), 0);
          } else {
            finishModule();
          }
        }, 300);
        return;
      }
    }

    setCurrentProblems(updatedProblems);
    // Refocus the input after toggling
    setTimeout(() => {
      if (index !== undefined) {
        inputRefs.current[index]?.focus();
      } else {
        inputRefs.current[0]?.focus();
      }
    }, 0);
  };

  const resetModule = () => {
    setSelectedModule(null);
    setCurrentProblems([]);
    setCurrentProblemIndex(0);
    setScore(0);
    setIsActive(false);
    setStartTime(null);
    setShowResults(false);
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const timeMs = Date.now() - (startTime || Date.now());

    return (
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/5">
        <MainNav />

        <main className="flex-1">
          <div className="container max-w-4xl mx-auto py-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/hoderegning">Hoderegning</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Negative tall og Regnerekkefølge</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Card className="mt-8">
              <CardContent className="p-8 text-center space-y-6">
                <div className="text-4xl">🎉</div>
                <h3 className="text-xl font-bold">Oppgave fullført!</h3>

                {/* Score breakdown */}
                <div className="max-w-lg mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Poengberegning:</h4>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex justify-between">
                      <span>Riktige svar ({score}/{currentProblems.length}):</span>
                      <span className="font-mono text-gray-900 dark:text-gray-100">+{Math.round((score / currentProblems.length) * 1000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tidstraff ({formatTime(timeMs)}):</span>
                      <span className="font-mono text-red-600 dark:text-red-400">-{Math.round(Math.max(0, timeMs - (selectedModule! * currentProblems.length * 1000)) * 0.1)}</span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-2 flex justify-between font-bold">
                      <span className="text-gray-900 dark:text-gray-100">Total poengsum:</span>
                      <span className="font-mono text-purple-600 dark:text-purple-400">
                        {Math.max(0, Math.round((score / currentProblems.length) * 1000 - Math.max(0, timeMs - (selectedModule! * currentProblems.length * 1000)) * 0.1))}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 max-w-md mx-auto grid-cols-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{score}</div>
                    <div className="text-sm text-muted-foreground">Riktige</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatTime(timeMs)}</div>
                    <div className="text-sm text-muted-foreground">Tid</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {Math.max(0, Math.round((score / currentProblems.length) * 1000 - Math.max(0, timeMs - (selectedModule! * currentProblems.length * 1000)) * 0.1))}
                    </div>
                    <div className="text-sm text-muted-foreground">Score</div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button onClick={() => startModule(selectedModule!)} variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Prøv igjen
                  </Button>
                  {selectedModule! < 7 && (
                    <Button onClick={() => startModule((selectedModule! + 1) as ModuleType)} className="bg-green-600 hover:bg-green-700">
                      <Play className="mr-2 h-4 w-4" />
                      Neste oppgave
                    </Button>
                  )}
                  <Button onClick={resetModule} variant="outline">
                    Tilbake til oppgaver
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (isActive && currentProblems.length > 0) {
    const currentProblem = currentProblems[currentProblemIndex];
    const progress = ((currentProblemIndex + 1) / currentProblems.length) * 100;

    return (
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/5">
        <MainNav />

        <main className="flex-1">
          <div className="container max-w-4xl mx-auto py-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">
                  Oppgave {currentProblemIndex + 1} av {currentProblems.length}
                </span>
                <span className="text-sm font-medium">
                  Poeng: {score}
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  {moduleDescriptions[selectedModule!]}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-4xl font-bold mb-6">
                    {currentProblem.expression}
                  </p>

                  {Array.isArray(currentProblem.answer) ? (
                    // Multiple inputs (for modules with steps)
                    <div className="space-y-4">
                      {currentProblem.steps?.map((step, idx) => {
                        const parts = step.split('=');
                        return (
                          <div key={idx} className="flex items-center justify-center gap-2 text-2xl">
                            <span>{parts[0]} =</span>
                            <div className="flex items-center gap-1">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => toggleNegative(idx)}
                                className="h-10 w-10 text-lg font-bold px-0"
                                tabIndex={-1}
                              >
                                ±
                              </Button>
                              <Input
                                ref={el => { inputRefs.current[idx] = el; }}
                                type="text"
                                inputMode="numeric"
                                value={Array.isArray(currentProblem.userAnswer) ? currentProblem.userAnswer[idx] : ''}
                                onChange={(e) => handleInputChange(e.target.value, idx)}
                                onKeyPress={handleKeyPress}
                                className="w-28 text-center text-2xl"
                                autoFocus={idx === 0}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    // Single input
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => toggleNegative()}
                        className="h-12 w-12 text-xl font-bold px-0"
                        tabIndex={-1}
                      >
                        ±
                      </Button>
                      <Input
                        ref={el => { inputRefs.current[0] = el; }}
                        type="text"
                        inputMode="numeric"
                        value={typeof currentProblem.userAnswer === 'string' ? currentProblem.userAnswer : ''}
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-36 text-center text-3xl"
                        autoFocus
                      />
                    </div>
                  )}
                </div>

                <Button onClick={checkAnswer} className="w-full" size="lg">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Sjekk svar
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/5">
      <MainNav />

      <main className="flex-1">
        <div className="container max-w-6xl mx-auto py-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/hoderegning">Hoderegning</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Negative tall og Regnerekkefølge</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 p-3">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                GH Negative tall og Regnerekkefølge
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Løs oppgavene så raskt som mulig. Din tid og score blir registrert!
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link href="/hoderegning/gh-negative-tall-regnerekkefolge/test">
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Test deg selv
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-400 to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-3 text-center space-y-1.5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                  <Target className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">Oppgave 1: Grunnleggende</h3>
                <p className="text-xs text-white/80 leading-tight">
                  Regning med negative tall
                </p>
                <MathExampleBox examples={["5 − 8 = __", "-3 + 7 = __"]} />
                <div className="grid grid-cols-2 gap-1">
                  <Button size="sm" className="bg-white text-blue-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(1)}>
                    <Play className="mr-1 h-3 w-3" />
                    Trening
                  </Button>
                  <Link href="/hoderegning/gh-negative-tall-regnerekkefolge/oppgave-1/challenge">
                    <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                      <Swords className="mr-1 h-3 w-3" />
                      Challenge
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-400 to-purple-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-3 text-center space-y-1.5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                  <Calculator className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">Oppgave 2: Ligninger</h3>
                <p className="text-xs text-white/80 leading-tight">
                  Finn manglende tall
                </p>
                <MathExampleBox examples={["___ + 5 = -2", "3 − ___ = -4"]} />
                <div className="grid grid-cols-2 gap-1">
                  <Button size="sm" className="bg-white text-purple-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(2)}>
                    <Play className="mr-1 h-3 w-3" />
                    Trening
                  </Button>
                  <Link href="/hoderegning/gh-negative-tall-regnerekkefolge/oppgave-2/challenge">
                    <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                      <Swords className="mr-1 h-3 w-3" />
                      Challenge
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-400 to-green-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-3 text-center space-y-1.5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                  <X className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">Oppgave 3: Multiplikasjon</h3>
                <p className="text-xs text-white/80 leading-tight">
                  Ganging med negative tall
                </p>
                <MathExampleBox examples={["-3 · 4 = __", "-2 · -5 = __"]} />
                <div className="grid grid-cols-2 gap-1">
                  <Button size="sm" className="bg-white text-green-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(3)}>
                    <Play className="mr-1 h-3 w-3" />
                    Trening
                  </Button>
                  <Link href="/hoderegning/gh-negative-tall-regnerekkefolge/oppgave-3/challenge">
                    <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                      <Swords className="mr-1 h-3 w-3" />
                      Challenge
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-400 to-orange-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-3 text-center space-y-1.5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">Oppgave 4: Regnerekkefølge</h3>
                <p className="text-xs text-white/80 leading-tight">
                  Rekkefølge av operasjoner
                </p>
                <MathExampleBox examples={["2 · 3 + 5 = __", "4 − 2 · 3 = __"]} />
                <div className="grid grid-cols-2 gap-1">
                  <Button size="sm" className="bg-white text-orange-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(4)}>
                    <Play className="mr-1 h-3 w-3" />
                    Trening
                  </Button>
                  <Link href="/hoderegning/gh-negative-tall-regnerekkefolge/oppgave-4/challenge">
                    <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                      <Swords className="mr-1 h-3 w-3" />
                      Challenge
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-400 to-indigo-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 lg:col-start-2">
              <CardContent className="p-3 text-center space-y-1.5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                  <Divide className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">Oppgave 5: Divisjon</h3>
                <p className="text-xs text-white/80 leading-tight">
                  Deling med negative tall
                </p>
                <MathExampleBox examples={["-12 ÷ 3 = __", "20 ÷ -4 = __"]} />
                <div className="grid grid-cols-2 gap-1">
                  <Button size="sm" className="bg-white text-indigo-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(5)}>
                    <Play className="mr-1 h-3 w-3" />
                    Trening
                  </Button>
                  <Link href="/hoderegning/gh-negative-tall-regnerekkefolge/oppgave-5/challenge">
                    <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                      <Swords className="mr-1 h-3 w-3" />
                      Challenge
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-400 to-pink-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-3 text-center space-y-1.5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                  <Minus className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">Oppgave 6: Desimaltall</h3>
                <p className="text-xs text-white/80 leading-tight">
                  Negative desimaltall
                </p>
                <MathExampleBox examples={["2.5 − 3.7 = __", "-1.5 + 2.3 = __"]} />
                <div className="grid grid-cols-2 gap-1">
                  <Button size="sm" className="bg-white text-pink-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(6)}>
                    <Play className="mr-1 h-3 w-3" />
                    Trening
                  </Button>
                  <Link href="/hoderegning/gh-negative-tall-regnerekkefolge/oppgave-6/challenge">
                    <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                      <Swords className="mr-1 h-3 w-3" />
                      Challenge
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-400 to-red-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-3 text-center space-y-1.5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">Oppgave 7: Vanskelig</h3>
                <p className="text-xs text-white/80 leading-tight">
                  Komplekse desimaltall ⭐⭐⭐
                </p>
                <MathExampleBox examples={["1.25 − 2.37 = __", "-2.15 + 3.42 = __"]} />
                <div className="grid grid-cols-2 gap-1">
                  <Button size="sm" className="bg-white text-red-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(7)}>
                    <Play className="mr-1 h-3 w-3" />
                    Trening
                  </Button>
                  <Link href="/hoderegning/gh-negative-tall-regnerekkefolge/oppgave-7/challenge">
                    <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                      <Swords className="mr-1 h-3 w-3" />
                      Challenge
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
