"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import React, { useState, useEffect, useRef } from "react";
import { Brain, Trophy, Calculator, Target, Plus, Timer, RefreshCw, Play, CheckCircle, Award, Info, Swords } from "lucide-react";
import Link from "next/link";
import { MathExampleBox } from "@/components/hoderegning/math-example-box";

interface ModuleProblem {
  id: number;
  expression: string;
  answer: number | number[]; // Can be single answer or multiple answers
  userAnswer: string | string[]; // Can be single input or multiple inputs
  isCorrect?: boolean;
  inputCorrectness?: boolean[]; // Track correctness for each input individually
  inputs?: { id: string; placeholder: string; answer: number }[]; // For multiple input problems
}

interface ModuleResult {
  moduleNumber: ModuleType;
  timeElapsed: number;
  correctAnswers: number;
  totalProblems: number;
  score: number;
  date: string;
  errorCount?: number;
  errorFreeMode: boolean;
}

type ModuleType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export default function GHTallfolgereGangingKvadratrot() {
  const [selectedModule, setSelectedModule] = useState<ModuleType | null>(null);
  const [currentProblems, setCurrentProblems] = useState<ModuleProblem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [completedAnswers, setCompletedAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [errorFreeMode, setErrorFreeMode] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [results, setResults] = useState<ModuleResult[]>([]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Load results from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('hoderegning-tallfolgere-results');
    if (saved) {
      try {
        setResults(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading results:', e);
      }
    }
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && startTime) {
      interval = setInterval(() => {
        setTimeElapsed(Date.now() - startTime);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive, startTime]);

  // Auto-focus input when problem changes (for mobile keyboard)
  useEffect(() => {
    if (isActive) {
      // Use setTimeout to ensure DOM is ready after state update
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
          // Trigger click event to ensure mobile keyboard appears
          inputRefs.current[0].click();
        }
      }, 50);
    }
  }, [currentProblemIndex, isActive]);

  // Oppgave 1: Auto-generated simple number sequences (6 tasks total)
  const generateModule1Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 6; i++) {
      // Generate random arithmetic sequences
      const start = Math.floor(Math.random() * 10) + 1; // 1-10
      const step = Math.floor(Math.random() * 4) + 2; // 2-5 (excluding the easiest sequences with step=1)
      const length = 6 + Math.floor(Math.random() * 3); // 6-8 numbers

      // Create full sequence
      const fullSequence: number[] = [];
      for (let j = 0; j < length; j++) {
        fullSequence.push(start + j * step);
      }

      // Randomly remove 2-3 numbers to create blanks
      const numBlanks = Math.floor(Math.random() * 2) + 2; // 2-3 blanks
      const blankIndices: number[] = [];
      while (blankIndices.length < numBlanks) {
        const randomIndex = Math.floor(Math.random() * length);
        if (!blankIndices.includes(randomIndex)) {
          blankIndices.push(randomIndex);
        }
      }
      blankIndices.sort((a, b) => a - b);

      // Create sequence with nulls and collect answers
      const sequence: (number | null)[] = [...fullSequence];
      const answers: number[] = [];
      blankIndices.forEach(index => {
        answers.push(fullSequence[index]);
        sequence[index] = null;
      });

      // Create inputs
      const inputs: { id: string; placeholder: string; answer: number }[] = [];
      let answerIndex = 0;
      sequence.forEach((value, index) => {
        if (value === null) {
          inputs.push({
            id: `input-${problems.length}-${index}`,
            placeholder: '__',
            answer: answers[answerIndex++]
          });
        }
      });

      const displaySequence = sequence.map(value =>
        value === null ? '__' : value.toString()
      ).join(', ');

      problems.push({
        id: problems.length + 1,
        expression: displaySequence,
        answer: answers,
        userAnswer: new Array(answers.length).fill(''),
        inputs
      });
    }

    return problems;
  };

  // Module 2: Auto-generated more complex number sequences (8 tasks total)
  const generateModule2Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];
    const allowedSteps = [2, 3, 4, 5, 10, 20]; // Only allow these specific step values

    while (problems.length < 8) {
      // Generate more complex arithmetic sequences
      const start = Math.floor(Math.random() * 50) + 10; // 10-59
      const step = allowedSteps[Math.floor(Math.random() * allowedSteps.length)]; // 2, 3, 4, 5, 10, or 20
      const length = 7 + Math.floor(Math.random() * 2); // 7-8 numbers

      // Sometimes make it a decreasing sequence
      const isDecreasing = Math.random() < 0.4;
      const actualStep = isDecreasing ? -step : step;

      // Create full sequence
      const fullSequence: number[] = [];
      for (let j = 0; j < length; j++) {
        const value = start + j * actualStep;
        if (value > 0) { // Keep numbers positive
          fullSequence.push(value);
        } else {
          break; // Stop if we get negative numbers
        }
      }

      // Ensure we have enough numbers
      if (fullSequence.length < 5) continue;

      // Randomly remove 3-4 numbers to create blanks
      const numBlanks = Math.floor(Math.random() * 2) + 3; // 3-4 blanks
      const blankIndices: number[] = [];
      while (blankIndices.length < numBlanks && blankIndices.length < fullSequence.length - 2) {
        const randomIndex = Math.floor(Math.random() * fullSequence.length);
        if (!blankIndices.includes(randomIndex)) {
          blankIndices.push(randomIndex);
        }
      }
      blankIndices.sort((a, b) => a - b);

      // Create sequence with nulls and collect answers
      const sequence: (number | null)[] = [...fullSequence];
      const answers: number[] = [];
      blankIndices.forEach(index => {
        answers.push(fullSequence[index]);
        sequence[index] = null;
      });

      // Create inputs
      const inputs: { id: string; placeholder: string; answer: number }[] = [];
      let answerIndex = 0;
      sequence.forEach((value, index) => {
        if (value === null) {
          inputs.push({
            id: `input-${problems.length}-${index}`,
            placeholder: '__',
            answer: answers[answerIndex++]
          });
        }
      });

      const displaySequence = sequence.map(value =>
        value === null ? '__' : value.toString()
      ).join(', ');

      problems.push({
        id: problems.length + 1,
        expression: displaySequence,
        answer: answers,
        userAnswer: new Array(answers.length).fill(''),
        inputs
      });
    }

    return problems;
  };

  // Module 3: Auto-generated sequences from multiplication tables 1-10 (8 tasks total)
  const generateModule3Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];
    const usedMultipliers: number[] = []; // Track which multipliers we've used

    while (problems.length < 8) {
      // Pick a multiplication table (2-10), try to avoid repetition
      let multiplier: number;
      let attempts = 0;
      do {
        multiplier = Math.floor(Math.random() * 9) + 2; // 2-10
        attempts++;
      } while (usedMultipliers.includes(multiplier) && attempts < 20);

      // Add to used list if we haven't used too many
      if (usedMultipliers.length < 7) {
        usedMultipliers.push(multiplier);
      }

      // Vary the sequence type for more diversity
      const sequenceType = Math.floor(Math.random() * 4);
      const fullSequence: number[] = [];
      let length: number;

      if (sequenceType === 0) {
        // Standard ascending sequence from start of table
        const startPosition = Math.floor(Math.random() * 3) + 1; // 1-3
        length = 7 + Math.floor(Math.random() * 3); // 7-9 numbers
        for (let j = 0; j < length; j++) {
          fullSequence.push(multiplier * (startPosition + j));
        }
      } else if (sequenceType === 1) {
        // Ascending sequence from middle of table
        const startPosition = Math.floor(Math.random() * 4) + 4; // 4-7
        length = 6 + Math.floor(Math.random() * 3); // 6-8 numbers
        for (let j = 0; j < length; j++) {
          fullSequence.push(multiplier * (startPosition + j));
        }
      } else if (sequenceType === 2) {
        // Descending sequence
        const startPosition = Math.floor(Math.random() * 3) + 7; // 7-9 (start high)
        length = 6 + Math.floor(Math.random() * 3); // 6-8 numbers
        for (let j = 0; j < length; j++) {
          fullSequence.push(multiplier * (startPosition - j));
        }
      } else {
        // Every other number from table (skip pattern)
        const startPosition = Math.floor(Math.random() * 3) + 1; // 1-3
        length = 6 + Math.floor(Math.random() * 2); // 6-7 numbers (fewer because of skip)
        for (let j = 0; j < length; j++) {
          fullSequence.push(multiplier * (startPosition + j * 2)); // Skip every other
        }
      }

      // Ensure we have enough numbers
      if (fullSequence.length < 5) continue;

      // Vary number of blanks based on sequence length
      const maxBlanks = Math.min(5, fullSequence.length - 2);
      const numBlanks = Math.floor(Math.random() * 2) + 3; // 3-4 blanks
      const actualBlanks = Math.min(numBlanks, maxBlanks);

      const blankIndices: number[] = [];
      while (blankIndices.length < actualBlanks) {
        const randomIndex = Math.floor(Math.random() * fullSequence.length);
        if (!blankIndices.includes(randomIndex)) {
          blankIndices.push(randomIndex);
        }
      }
      blankIndices.sort((a, b) => a - b);

      // Create sequence with nulls and collect answers
      const sequence: (number | null)[] = [...fullSequence];
      const answers: number[] = [];
      blankIndices.forEach(index => {
        answers.push(fullSequence[index]);
        sequence[index] = null;
      });

      // Create inputs
      const inputs: { id: string; placeholder: string; answer: number }[] = [];
      let answerIndex = 0;
      sequence.forEach((value, index) => {
        if (value === null) {
          inputs.push({
            id: `input-${problems.length}-${index}`,
            placeholder: '__',
            answer: answers[answerIndex++]
          });
        }
      });

      const displaySequence = sequence.map(value =>
        value === null ? '__' : value.toString()
      ).join(', ');

      problems.push({
        id: problems.length + 1,
        expression: displaySequence,
        answer: answers,
        userAnswer: new Array(answers.length).fill(''),
        inputs
      });
    }

    return problems;
  };

  // Oppgave 4: Grunnleggende multiplikasjon (ganging)
  const generateModule4Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];
    const smallNumbers = [2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < 10; i++) {
      const a = smallNumbers[Math.floor(Math.random() * smallNumbers.length)];
      const b = smallNumbers[Math.floor(Math.random() * smallNumbers.length)];
      const answer = a * b;

      problems.push({
        id: i + 1,
        expression: `${a} · ${b} = `,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Oppgave 5: Blandet regning (multiplikasjon med addisjon/subtraksjon)
  const generateModule5Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 10; i++) {
      const type = Math.floor(Math.random() * 3);
      let expression: string;
      let answer: number;

      if (type === 0) {
        // a·a + b format
        const a = Math.floor(Math.random() * 8) + 2; // 2-9
        const b = Math.floor(Math.random() * 10) + 1; // 1-10
        answer = a * a + b;
        expression = `${a} · ${a} + ${b} = `;
      } else if (type === 1) {
        // a·a - b format
        const a = Math.floor(Math.random() * 8) + 2; // 2-9
        const b = Math.floor(Math.random() * (a * a - 1)) + 1; // 1 to a*a-1
        answer = a * a - b;
        expression = `${a} · ${a} - ${b} = `;
      } else {
        // a·b ± c·d format
        const a = Math.floor(Math.random() * 8) + 2;
        const b = Math.floor(Math.random() * 8) + 2;
        const c = Math.floor(Math.random() * 5) + 1;
        const d = Math.floor(Math.random() * 5) + 1;
        const op = Math.random() > 0.5 ? '+' : '-';
        answer = op === '+' ? a * b + c * d : a * b - c * d;
        expression = `${a} · ${b} ${op} ${c} · ${d} = `;
      }

      problems.push({
        id: i + 1,
        expression,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Oppgave 6: Regn ut og finn hvilket gangestykke det tilsvarer
  const generateModule6Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 10; i++) {
      const base = Math.floor(Math.random() * 8) + 2; // 2-9
      const multiplier = Math.floor(Math.random() * 10) + 2; // 2-11
      const extra = Math.floor(Math.random() * base) + 1; // 1 to base

      const type = Math.floor(Math.random() * 2);
      let expression: string;
      let answer1: number; // Result of calculation
      let answer2: number; // Equivalent multiplication

      if (type === 0) {
        // base·multiplier + extra format → (multiplier+1)·base
        answer1 = base * multiplier + extra;
        answer2 = (multiplier * base + extra) / base; // This will be multiplier + extra/base, simplified
        // Actually for this to be clean multiplication, extra should equal base
        const cleanMultiplier = Math.floor(Math.random() * 8) + 2;
        const newExtra = base;
        answer1 = base * cleanMultiplier + newExtra;
        answer2 = cleanMultiplier + 1;
        expression = `${base} · ${cleanMultiplier} + ${newExtra}`;
      } else {
        // base·multiplier - extra format → (multiplier-1)·base
        const cleanMultiplier = Math.floor(Math.random() * 8) + 3; // 3-10
        const newExtra = base;
        answer1 = base * cleanMultiplier - newExtra;
        answer2 = cleanMultiplier - 1;
        expression = `${base} · ${cleanMultiplier} - ${newExtra}`;
      }

      problems.push({
        id: i + 1,
        expression: `${expression} = ___ (Tilsvarer: ___ · ${base})`,
        answer: [answer1, answer2],
        userAnswer: ['', ''],
        inputs: [
          { id: `calc-${i}`, placeholder: 'Svar', answer: answer1 },
          { id: `equiv-${i}`, placeholder: 'Gangestykke', answer: answer2 }
        ]
      });
    }

    return problems;
  };

  // Oppgave 7: Multiplikasjon med 10, 100, 1000
  const generateModule7Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];
    const multipliers = [10, 100, 1000];

    for (let i = 0; i < 10; i++) {
      const multiplier = multipliers[Math.floor(Math.random() * multipliers.length)];
      let a: number;

      if (multiplier === 10) {
        a = Math.floor(Math.random() * 90) + 10; // 10-99
      } else if (multiplier === 100) {
        a = Math.floor(Math.random() * 90) + 10; // 10-99
      } else {
        a = Math.floor(Math.random() * 900) + 100; // 100-999
      }

      const answer = a * multiplier;

      problems.push({
        id: i + 1,
        expression: `${a} · ${multiplier} = `,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Oppgave 8: Som oppgave 6 men med mer 10-multiplikasjon
  const generateModule8Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 10; i++) {
      const base = Math.floor(Math.random() * 10) + 2; // 2-11
      const _tensMultiplier = Math.floor(Math.random() * 10) + 1; // 1-10

      const type = Math.floor(Math.random() * 2);
      let expression: string;
      let answer1: number;
      let answer2: number;

      if (type === 0) {
        // 10·a + a·b format → (10+b)·a
        const b = Math.floor(Math.random() * 10) + 1;
        answer1 = 10 * base + base * b;
        answer2 = 10 + b;
        expression = `10 · ${base} + ${base} · ${b}`;
      } else {
        // 10·a - a·b format → (10-b)·a
        const b = Math.floor(Math.random() * 9) + 1; // 1-9
        answer1 = 10 * base - base * b;
        answer2 = 10 - b;
        expression = `10 · ${base} - ${base} · ${b}`;
      }

      problems.push({
        id: i + 1,
        expression: `${expression} = ___ (Tilsvarer: ___ · ${base})`,
        answer: [answer1, answer2],
        userAnswer: ['', ''],
        inputs: [
          { id: `calc-${i}`, placeholder: 'Svar', answer: answer1 },
          { id: `equiv-${i}`, placeholder: 'Gangestykke', answer: answer2 }
        ]
      });
    }

    return problems;
  };

  // Oppgave 9: Multiplikasjon med 5
  const generateModule9Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];
    const allowedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 30, 40, 50];

    for (let i = 0; i < 10; i++) {
      const other = allowedNumbers[Math.floor(Math.random() * allowedNumbers.length)];
      const swapOrder = Math.random() > 0.5;
      const answer = 5 * other;

      const expression = swapOrder ? `${other} · 5 = ` : `5 · ${other} = `;

      problems.push({
        id: i + 1,
        expression,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Oppgave 10: Som oppgave 6/8 men fokus på 5
  const generateModule10Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 10; i++) {
      const _base = 5;
      const multiplier = Math.floor(Math.random() * 20) + 2; // 2-21

      const type = Math.floor(Math.random() * 2);
      let expression: string;
      let answer1: number;
      let answer2: number;

      if (type === 0) {
        // 5·multiplier + 5 format → (multiplier+1)·5
        answer1 = 5 * multiplier + 5;
        answer2 = multiplier + 1;
        expression = `5 · ${multiplier} + 5`;
      } else {
        // 5·multiplier - 5 format → (multiplier-1)·5
        answer1 = 5 * multiplier - 5;
        answer2 = multiplier - 1;
        expression = `5 · ${multiplier} - 5`;
      }

      problems.push({
        id: i + 1,
        expression: `${expression} = ___ (Tilsvarer: ___ · 5)`,
        answer: [answer1, answer2],
        userAnswer: ['', ''],
        inputs: [
          { id: `calc-${i}`, placeholder: 'Svar', answer: answer1 },
          { id: `equiv-${i}`, placeholder: 'Gangestykke', answer: answer2 }
        ]
      });
    }

    return problems;
  };

  // Oppgave 11 (10-2): Høyere tall (11-15)
  const generateModule11Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 10; i++) {
      const base = Math.floor(Math.random() * 5) + 11; // 11-15
      const multiplier = Math.floor(Math.random() * 5) + 11; // 11-15

      const type = Math.floor(Math.random() * 2);
      let expression: string;
      let answer1: number;
      let answer2: number;

      if (type === 0) {
        // base·multiplier + base format
        answer1 = base * multiplier + base;
        answer2 = multiplier + 1;
        expression = `${base} · ${multiplier} + ${base}`;
      } else {
        // base·multiplier - base format
        answer1 = base * multiplier - base;
        answer2 = multiplier - 1;
        expression = `${base} · ${multiplier} - ${base}`;
      }

      problems.push({
        id: i + 1,
        expression: `${expression} = ___ (Tilsvarer: ___ · ${base})`,
        answer: [answer1, answer2],
        userAnswer: ['', ''],
        inputs: [
          { id: `calc-${i}`, placeholder: 'Svar', answer: answer1 },
          { id: `equiv-${i}`, placeholder: 'Gangestykke', answer: answer2 }
        ]
      });
    }

    return problems;
  };

  // Oppgave 12 (11): Multiplikasjon med høyere tall (6-14)
  const generateModule12Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 10; i++) {
      const a = Math.floor(Math.random() * 9) + 6; // 6-14
      const b = Math.floor(Math.random() * 9) + 6; // 6-14
      const answer = a * b;

      problems.push({
        id: i + 1,
        expression: `${a} · ${b} = `,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Oppgave 13 (12): Kvadratrøtter
  const generateModule13Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];
    const perfectSquares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];

    for (let i = 0; i < 10; i++) {
      const type = Math.floor(Math.random() * 8);
      let expression: string;
      let answer: number;

      if (type === 0) {
        // Simple square root
        const square = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
        answer = Math.sqrt(square);
        expression = `√${square} = `;
      } else if (type === 1) {
        // Square root + addition
        const square = perfectSquares[Math.floor(Math.random() * Math.min(10, perfectSquares.length))];
        const add = Math.floor(Math.random() * 10) + 1;
        answer = Math.sqrt(square) + add;
        expression = `√${square} + ${add} = `;
      } else if (type === 2) {
        // Square root - subtraction
        const square = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
        const sqrt = Math.sqrt(square);
        const sub = Math.floor(Math.random() * sqrt);
        answer = sqrt - sub;
        expression = `√${square} - ${sub} = `;
      } else if (type === 3) {
        // √(a + b) where a + b is a perfect square
        const targetSquare = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
        const a = Math.floor(Math.random() * targetSquare) + 1;
        const b = targetSquare - a;
        answer = Math.sqrt(targetSquare);
        expression = `√(${a} + ${b}) = `;
      } else if (type === 4) {
        // √(a - b) where a - b is a perfect square
        const targetSquare = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
        const extra = Math.floor(Math.random() * 20) + 5;
        const a = targetSquare + extra;
        const b = extra;
        answer = Math.sqrt(targetSquare);
        expression = `√(${a} - ${b}) = `;
      } else if (type === 5) {
        // √(a · b) where a · b is a perfect square
        const sqrt = Math.floor(Math.random() * 10) + 2; // 2-11
        const targetSquare = sqrt * sqrt;
        // Find two factors
        const factorA = Math.floor(Math.random() * (sqrt - 1)) + 2; // 2 to sqrt-1
        const factorB = targetSquare / factorA;
        if (Number.isInteger(factorB)) {
          answer = sqrt;
          expression = `√(${factorA} · ${Math.round(factorB)}) = `;
        } else {
          // Fallback to simple multiplication that gives perfect square
          const a = Math.floor(Math.random() * 5) + 2; // 2-6
          const b = Math.floor(Math.random() * 5) + 2; // 2-6
          answer = Math.sqrt(a * b);
          if (Number.isInteger(answer)) {
            expression = `√(${a} · ${b}) = `;
          } else {
            // Use a simple perfect square instead
            const square = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
            answer = Math.sqrt(square);
            expression = `√${square} = `;
          }
        }
      } else if (type === 6) {
        // √(a²) = a
        const a = Math.floor(Math.random() * 10) + 2; // 2-11
        answer = a;
        expression = `√(${a} · ${a}) = `;
      } else {
        // √a + √b
        const sqrtA = perfectSquares[Math.floor(Math.random() * Math.min(8, perfectSquares.length))];
        const sqrtB = perfectSquares[Math.floor(Math.random() * Math.min(8, perfectSquares.length))];
        answer = Math.sqrt(sqrtA) + Math.sqrt(sqrtB);
        expression = `√${sqrtA} + √${sqrtB} = `;
      }

      problems.push({
        id: i + 1,
        expression,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Oppgave 14 (13): Store tall multiplikasjon (5·30, 70·3, osv.)
  const generateModule14Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 10; i++) {
      const type = Math.floor(Math.random() * 3);
      let expression: string;
      let answer: number;

      if (type === 0) {
        // Small × tens (5·30, 7·40)
        const small = Math.floor(Math.random() * 9) + 2; // 2-10
        const tens = (Math.floor(Math.random() * 9) + 1) * 10; // 10-90
        answer = small * tens;
        expression = Math.random() > 0.5 ? `${small} · ${tens} = ` : `${tens} · ${small} = `;
      } else if (type === 1) {
        // Tens × tens (20·30, 40·50)
        const tens1 = (Math.floor(Math.random() * 9) + 1) * 10; // 10-90
        const tens2 = (Math.floor(Math.random() * 9) + 1) * 10; // 10-90
        answer = tens1 * tens2;
        expression = `${tens1} · ${tens2} = `;
      } else {
        // Hundreds × tens (200·90, 300·40)
        const hundreds = (Math.floor(Math.random() * 9) + 1) * 100; // 100-900
        const tens = (Math.floor(Math.random() * 9) + 1) * 10; // 10-90
        answer = hundreds * tens;
        expression = Math.random() > 0.5 ? `${hundreds} · ${tens} = ` : `${tens} · ${hundreds} = `;
      }

      problems.push({
        id: i + 1,
        expression,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Oppgave 15 (14): To-sifret multiplikasjon (3·37, 45·3, osv.)
  const generateModule15Problems = (): ModuleProblem[] => {
    const problems: ModuleProblem[] = [];

    for (let i = 0; i < 10; i++) {
      const small = Math.floor(Math.random() * 7) + 3; // 3-9
      const twoDigit = Math.floor(Math.random() * 70) + 20; // 20-89
      const answer = small * twoDigit;
      const swapOrder = Math.random() > 0.5;

      const expression = swapOrder ? `${twoDigit} · ${small} = ` : `${small} · ${twoDigit} = `;

      problems.push({
        id: i + 1,
        expression,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  // Master function to generate problems for any module
  const generateModuleProblems = (moduleNumber: ModuleType): ModuleProblem[] => {
    switch (moduleNumber) {
      case 1: return generateModule1Problems();
      case 2: return generateModule2Problems();
      case 3: return generateModule3Problems();
      case 4: return generateModule4Problems();
      case 5: return generateModule5Problems();
      case 6: return generateModule6Problems();
      case 7: return generateModule7Problems();
      case 8: return generateModule8Problems();
      case 9: return generateModule9Problems();
      case 10: return generateModule10Problems();
      case 11: return generateModule11Problems();
      case 12: return generateModule12Problems();
      case 13: return generateModule13Problems();
      case 14: return generateModule14Problems();
      case 15: return generateModule15Problems();
      default: return generateModule1Problems();
    }
  };

  const startModule = (moduleNumber: ModuleType) => {
    setSelectedModule(moduleNumber);
    const problems = generateModuleProblems(moduleNumber);
    setCurrentProblems(problems);
    setCurrentProblemIndex(0);
    setIsActive(true);
    setStartTime(Date.now());
    setTimeElapsed(0);
    setCompletedAnswers(0);
    setErrorCount(0);
    setShowResults(false);

    // Focus first input after a short delay
    setTimeout(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
        // Trigger click event to ensure mobile keyboard appears
        inputRefs.current[0].click();
      }
    }, 200);
  };

  const handleInputChange = (value: string, inputIndex?: number) => {
    if (!/^-?\d*$/.test(value)) return; // Only allow numbers and negative sign

    const newProblems = [...currentProblems];
    const currentProblem = newProblems[currentProblemIndex];

    if (Array.isArray(currentProblem.userAnswer) && inputIndex !== undefined) {
      // Multiple input problem (Module 1, 2, 3)
      currentProblem.userAnswer[inputIndex] = value;

      // Check if this input is correct
      const userAnswer = parseInt(value);
      if (!isNaN(userAnswer) && currentProblem.inputs && userAnswer === currentProblem.inputs[inputIndex].answer) {
        // Correct! Move to next input or next problem
        setTimeout(() => {
          const nextInputIndex = inputIndex + 1;
          if (currentProblem.inputs && nextInputIndex < currentProblem.inputs.length) {
            // Move to next input
            if (inputRefs.current[nextInputIndex]) {
              inputRefs.current[nextInputIndex].focus();
            }
          } else {
            // All inputs filled correctly, move to next problem
            if (currentProblemIndex < currentProblems.length - 1) {
              setCurrentProblemIndex(currentProblemIndex + 1);
            } else {
              finishModule();
            }
          }
        }, 300);
      }
    } else {
      // Single input problem (other modules)
      currentProblem.userAnswer = value;

      // Auto-advance when correct answer is entered
      const userAnswer = parseInt(value);
      if (!isNaN(userAnswer) && userAnswer === currentProblem.answer) {
        setTimeout(() => {
          if (currentProblemIndex < currentProblems.length - 1) {
            setCurrentProblemIndex(currentProblemIndex + 1);
            // Clear the input for next problem
            const resetProblems = [...newProblems];
            resetProblems[currentProblemIndex + 1].userAnswer = '';
            setCurrentProblems(resetProblems);
          } else {
            finishModule();
          }
        }, 300);
      }
    }

    setCurrentProblems(newProblems);
  };

  const handleKeyPress = (e: React.KeyboardEvent, inputIndex?: number) => {
    if (e.key === 'Enter') {
      if ((selectedModule === 1 || selectedModule === 2 || selectedModule === 3) && inputIndex !== undefined) {
        // For multiple inputs, move to next input or next problem
        const currentProblem = currentProblems[currentProblemIndex];
        const nextInputIndex = inputIndex + 1;

        if (nextInputIndex < (currentProblem.inputs?.length || 0)) {
          // Focus next input in same problem
          setTimeout(() => {
            if (inputRefs.current[nextInputIndex]) {
              inputRefs.current[nextInputIndex].focus();
              // Trigger click event to ensure mobile keyboard appears
              inputRefs.current[nextInputIndex].click();
            }
          }, 200);
        } else {
          // Move to next problem
          nextProblem();
        }
      } else {
        nextProblem();
      }
    }
  };

  const nextProblem = () => {
    if (errorFreeMode) {
      // In error-free mode, check if current answer is correct before advancing
      const currentProblem = currentProblems[currentProblemIndex];

      if (Array.isArray(currentProblem.answer) && Array.isArray(currentProblem.userAnswer)) {
        // Multiple answers check
        const allCorrect = currentProblem.answer.every((ans, index) =>
          parseInt(currentProblem.userAnswer[index]) === ans
        );

        if (!allCorrect) {
          setErrorCount(prev => prev + 1);
          setWrongAnswer(true);

          // Clear only incorrect input fields, keep correct ones
          const newProblems = [...currentProblems];
          const userAnswers = [...currentProblem.userAnswer] as string[];
          (currentProblem.answer as number[]).forEach((ans, index) => {
            const userValue = parseInt(currentProblem.userAnswer[index]);
            if (isNaN(userValue) || userValue !== ans) {
              userAnswers[index] = '';
            }
          });
          newProblems[currentProblemIndex].userAnswer = userAnswers;
          setCurrentProblems(newProblems);

          setTimeout(() => {
            setWrongAnswer(false);
            // Focus first incorrect input
            const firstIncorrectIndex = (currentProblem.answer as number[]).findIndex((ans, index) => {
              const userValue = parseInt(currentProblem.userAnswer[index]);
              return isNaN(userValue) || userValue !== ans;
            });
            if (firstIncorrectIndex >= 0 && inputRefs.current[firstIncorrectIndex]) {
              inputRefs.current[firstIncorrectIndex].focus();
              // Trigger click event to ensure mobile keyboard appears
              inputRefs.current[firstIncorrectIndex].click();
            }
          }, 1000);
          return;
        }
      } else {
        // Single answer check
        const userAnswer = parseInt(currentProblem.userAnswer as string);
        if (isNaN(userAnswer) || userAnswer !== currentProblem.answer) {
          setErrorCount(prev => prev + 1);
          setWrongAnswer(true);

          const newProblems = [...currentProblems];
          newProblems[currentProblemIndex].userAnswer = '';
          setCurrentProblems(newProblems);

          setTimeout(() => {
            setWrongAnswer(false);
            if (inputRefs.current[0]) {
              inputRefs.current[0].focus();
              // Trigger click event to ensure mobile keyboard appears
              inputRefs.current[0].click();
            }
          }, 1000);
          return;
        }
      }
    }

    setWrongAnswer(false);

    if (currentProblemIndex < currentProblems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);

      // Clear input correctness for next problem
      const newProblems = [...currentProblems];
      if (newProblems[currentProblemIndex + 1]) {
        newProblems[currentProblemIndex + 1].inputCorrectness = undefined;
        setCurrentProblems(newProblems);
      }

      // Reset input refs and focus first input
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
          // Trigger click event to ensure mobile keyboard appears
          inputRefs.current[0].click();
        }
      }, 200);
    } else {
      finishModule();
    }
  };

  const checkCurrentProblemAnswers = () => {
    const newProblems = [...currentProblems];
    const currentProblem = newProblems[currentProblemIndex];
    let inputCorrectness: boolean[] = [];

    if (Array.isArray(currentProblem.answer) && Array.isArray(currentProblem.userAnswer)) {
      // Multiple answers check with partial scoring
      inputCorrectness = currentProblem.answer.map((ans, index) => {
        const userValue = parseInt(currentProblem.userAnswer[index]);
        return !isNaN(userValue) && userValue === ans;
      });
    } else {
      // Single answer check
      const userValue = parseInt(currentProblem.userAnswer as string);
      const isCorrect = !isNaN(userValue) && userValue === currentProblem.answer;
      inputCorrectness = [isCorrect];
    }

    currentProblem.inputCorrectness = inputCorrectness;
    setCurrentProblems(newProblems);
  };

  const checkAnswers = () => {
    let correct = 0;
    const checkedProblems = currentProblems.map(problem => {
      let isCorrect = false;
      let inputCorrectness: boolean[] = [];

      if (Array.isArray(problem.answer) && Array.isArray(problem.userAnswer)) {
        // Multiple answers check with partial scoring
        inputCorrectness = problem.answer.map((ans, index) => {
          const userValue = parseInt(problem.userAnswer[index]);
          return !isNaN(userValue) && userValue === ans;
        });
        isCorrect = inputCorrectness.every(correct => correct);
      } else {
        // Single answer check
        const userValue = parseInt(problem.userAnswer as string);
        isCorrect = !isNaN(userValue) && userValue === problem.answer;
        inputCorrectness = [isCorrect];
      }

      if (isCorrect) correct++;
      return { ...problem, isCorrect, inputCorrectness };
    });

    setCurrentProblems(checkedProblems);
    setCompletedAnswers(correct);
    return correct;
  };

  const finishModule = () => {
    if (!selectedModule || !startTime) return;

    setIsActive(false);
    const finalTime = Date.now() - startTime;
    const correct = checkAnswers();
    const totalProblems = currentProblems.length; // Use actual number of generated problems

    // Progressive time penalty: easier modules have higher penalty, harder modules have lower penalty
    const timePenaltyFactor = Math.max(0.3, 1.1 - (selectedModule * 0.08));
    // Remove 1 second per question per module number to make 1000 points achievable
    const timeAllowance = selectedModule * totalProblems * 1000; // 1 second × questions × module number in milliseconds
    const adjustedTime = Math.max(0, finalTime - timeAllowance);
    const timePenalty = adjustedTime * timePenaltyFactor / 100;

    // Calculate score with error penalty in error-free mode
    const baseScore = Math.round((correct / totalProblems) * 1000 - timePenalty);
    const errorPenalty = errorFreeMode ? errorCount * 50 : 0; // 50 points penalty per error in error-free mode
    const score = Math.max(0, baseScore - errorPenalty);

    const result: ModuleResult = {
      moduleNumber: selectedModule,
      timeElapsed: finalTime,
      correctAnswers: correct,
      totalProblems,
      score,
      date: new Date().toISOString(),
      errorCount: errorFreeMode ? errorCount : undefined,
      errorFreeMode
    };

    const updatedResults = [...results, result];
    setResults(updatedResults);
    localStorage.setItem('hoderegning-tallfolgere-results', JSON.stringify(updatedResults));
    setShowResults(true);
  };

  const resetModule = () => {
    setSelectedModule(null);
    setCurrentProblems([]);
    setCurrentProblemIndex(0);
    setIsActive(false);
    setStartTime(null);
    setTimeElapsed(0);
    setCompletedAnswers(0);
    setShowResults(false);
    setErrorCount(0);
    setWrongAnswer(false);
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  const _getModuleResults = (moduleNumber: ModuleType) => {
    return results
      .filter(result => result.moduleNumber === moduleNumber)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  };

  const renderCurrentProblem = () => {
    if (!currentProblems.length || currentProblemIndex >= currentProblems.length) return null;

    const currentProblem = currentProblems[currentProblemIndex];

    // Special handling for number sequences (Module 1, 2, and 3)
    if ((selectedModule === 1 || selectedModule === 2 || selectedModule === 3) && currentProblem.inputs) {
      const parts = currentProblem.expression.split(', ');
      let inputCounter = 0;

      return (
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Badge variant="outline" className="text-lg px-4 py-2">
              Oppgave {currentProblemIndex + 1} av {currentProblems.length}
            </Badge>
          </div>

          <div className="mb-4">
            <h3 className="text-base md:text-xl text-muted-foreground mb-4 md:mb-8">Skriv tallene som mangler i tallfølgene:</h3>
          </div>

          {/* Number sequence display with better spacing */}
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            {parts.map((part, index) => {
              if (part === '__') {
                const currentInputIndex = inputCounter;
                inputCounter++;
                return (
                  <div key={index} className="flex items-center">
                    <Input
                      ref={(el) => {inputRefs.current[currentInputIndex] = el}}
                      type="text"
                      inputMode="numeric"
                      value={Array.isArray(currentProblem.userAnswer) ? currentProblem.userAnswer[currentInputIndex] || '' : ''}
                      onChange={(e) => handleInputChange(e.target.value, currentInputIndex)}
                      onKeyPress={(e) => handleKeyPress(e, currentInputIndex)}
                      className={`w-16 h-10 md:w-20 md:h-12 text-center text-lg md:text-2xl font-mono border-2 ${
                        currentProblem.inputCorrectness && currentProblem.inputCorrectness[currentInputIndex] === true
                          ? 'border-green-500 bg-green-50 text-green-800 focus:border-green-600'
                          : currentProblem.inputCorrectness && currentProblem.inputCorrectness[currentInputIndex] === false
                          ? 'border-red-500 bg-red-50 text-red-800 focus:border-red-600'
                          : wrongAnswer
                          ? 'border-red-500 bg-red-50 focus:border-red-600'
                          : 'border-blue-300 focus:border-blue-500'
                      }`}
                      disabled={!isActive || (currentProblem.inputCorrectness && currentProblem.inputCorrectness[currentInputIndex] === true)}
                    />
                    {index < parts.length - 1 && (
                      <div className="mx-0.5 md:mx-1 text-base md:text-xl text-muted-foreground">,</div>
                    )}
                  </div>
                );
              } else {
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-16 h-10 md:w-20 md:h-12 flex items-center justify-center text-lg md:text-2xl font-mono font-bold bg-gray-100 dark:bg-gray-700 dark:text-white rounded border-2 border-gray-300 dark:border-gray-600">
                      {part}
                    </div>
                    {index < parts.length - 1 && (
                      <div className="mx-0.5 md:mx-1 text-base md:text-xl text-muted-foreground">,</div>
                    )}
                  </div>
                );
              }
            })}
          </div>

          {wrongAnswer && (
            <div className="text-center mt-6">
              <Badge variant="destructive" className="text-lg px-4 py-2 animate-pulse">
                Feil svar! Prøv igjen
              </Badge>
            </div>
          )}

          <div className="flex justify-center gap-4 mt-8">
            <Button onClick={checkCurrentProblemAnswers} disabled={!isActive} size="lg" variant="outline">
              Sjekk svar
            </Button>
            <Button onClick={nextProblem} disabled={!isActive} size="lg">
              {currentProblemIndex < currentProblems.length - 1 ? 'Neste oppgave' : 'Fullfør'}
            </Button>
          </div>
        </div>
      );
    }

    // Rendering for modules with two inputs (6, 8, 10, 11)
    if ([6, 8, 10, 11].includes(selectedModule!) && currentProblem.inputs && currentProblem.inputs.length === 2) {
      // Parse the expression: "5 · 4 + 4 = ___ (Tilsvarer: ___ · 5)"
      const parts = currentProblem.expression.split(' (Tilsvarer: ');
      const firstPart = parts[0]; // "5 · 4 + 4 = ___"
      const secondPart = parts[1]?.replace(')', '') || ''; // "___ · 5"

      return (
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Badge variant="outline" className="text-lg px-4 py-2">
              Oppgave {currentProblemIndex + 1} av {currentProblems.length}
            </Badge>
          </div>

          <div className="mb-4">
            <h3 className="text-base md:text-xl text-muted-foreground mb-4 md:mb-8">Regn ut og skriv ned hvilket gangestykke uttrykket nedenfor tilsvarer:</h3>
          </div>

          <div className="space-y-4 md:space-y-6">
            {/* First line: calculation */}
            <div className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold flex items-center justify-center gap-1 md:gap-2 flex-wrap">
              {firstPart.split('___').map((part, index, array) => (
                <React.Fragment key={index}>
                  <span>{part}</span>
                  {index < array.length - 1 && (
                    <Input
                      ref={(el) => {inputRefs.current[0] = el}}
                      type="text"
                      inputMode="numeric"
                      value={Array.isArray(currentProblem.userAnswer) ? currentProblem.userAnswer[0] || '' : ''}
                      onChange={(e) => handleInputChange(e.target.value, 0)}
                      onKeyPress={(e) => handleKeyPress(e, 0)}
                      className={`w-20 h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 text-center text-2xl md:text-4xl lg:text-5xl font-mono border-2 md:border-4 ${
                        wrongAnswer
                          ? 'border-red-500 bg-red-50 focus:border-red-600'
                          : 'border-blue-300 focus:border-blue-500'
                      }`}
                      disabled={!isActive}
                      autoFocus
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Second line: equivalent multiplication */}
            <div className="text-xl md:text-3xl lg:text-4xl font-mono font-bold flex items-center justify-center gap-1 md:gap-2 flex-wrap">
              <span className="flex items-center gap-1 md:gap-2">
                Tilsvarer:
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center touch-manipulation"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Info className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground hover:text-foreground active:text-foreground transition-colors cursor-help" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="max-w-xs md:max-w-sm bg-primary text-primary-foreground p-3"
                    side="bottom"
                    sideOffset={8}
                  >
                    <p className="text-xs md:text-sm">
                      &quot;Tilsvarer&quot; betyr at du skal finne ut hvilket gangestykke som gir samme resultat som uttrykket over.
                      For eksempel: 5 · 6 - 5 = 25, som tilsvarer 5 · 5 = 25.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </span>
              {secondPart.split('___').map((part, index, array) => (
                <React.Fragment key={index}>
                  {index < array.length - 1 && (
                    <Input
                      ref={(el) => {inputRefs.current[1] = el}}
                      type="text"
                      inputMode="numeric"
                      value={Array.isArray(currentProblem.userAnswer) ? currentProblem.userAnswer[1] || '' : ''}
                      onChange={(e) => handleInputChange(e.target.value, 1)}
                      onKeyPress={(e) => handleKeyPress(e, 1)}
                      className={`w-16 h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 text-center text-xl md:text-3xl lg:text-4xl font-mono border-2 md:border-4 ${
                        wrongAnswer
                          ? 'border-red-500 bg-red-50 focus:border-red-600'
                          : 'border-blue-300 focus:border-blue-500'
                      }`}
                      disabled={!isActive}
                    />
                  )}
                  <span>{part}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {wrongAnswer && (
            <div className="text-center mt-4">
              <Badge variant="destructive" className="text-lg px-4 py-2 animate-pulse">
                Feil svar! Prøv igjen
              </Badge>
            </div>
          )}

          <div className="flex justify-center gap-4 mt-8">
            <Button onClick={nextProblem} disabled={!isActive} size="lg">
              {currentProblemIndex < currentProblems.length - 1 ? 'Neste oppgave' : 'Fullfør'}
            </Button>
          </div>
        </div>
      );
    }

    // Default rendering for single-answer modules (4, 5, 7, 9, 12, 13, 14, 15)
    return (
      <div className="text-center space-y-4 md:space-y-6">
        <div className="flex justify-center items-center gap-4 mb-4 md:mb-6">
          <Badge variant="outline" className="text-base md:text-lg px-3 py-1 md:px-4 md:py-2">
            Oppgave {currentProblemIndex + 1} av {currentProblems.length}
          </Badge>
        </div>

        <div className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <span>{currentProblem.expression}</span>
          <Input
            ref={(el) => {inputRefs.current[0] = el}}
            type="text"
            inputMode="numeric"
            value={typeof currentProblem.userAnswer === 'string' ? currentProblem.userAnswer : ''}
            onChange={(e) => handleInputChange(e.target.value, 0)}
            onKeyPress={(e) => handleKeyPress(e, 0)}
            className={`w-20 h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 text-center text-3xl md:text-5xl lg:text-6xl font-mono border-2 md:border-4 ${
              wrongAnswer
                ? 'border-red-500 bg-red-50 focus:border-red-600'
                : 'border-blue-300 focus:border-blue-500'
            }`}
            disabled={!isActive}
            autoFocus
          />
        </div>

        {wrongAnswer && (
          <div className="text-center">
            <Badge variant="destructive" className="text-sm md:text-base lg:text-lg px-3 py-1 md:px-4 md:py-2 animate-pulse">
              Feil svar! Prøv igjen
            </Badge>
          </div>
        )}

        <div className="flex justify-center gap-2 md:gap-4">
          <Button onClick={nextProblem} disabled={!isActive} size="lg" className="text-sm md:text-base">
            {currentProblemIndex < currentProblems.length - 1 ? 'Neste oppgave' : 'Fullfør'}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <div className="container py-6">
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
                <BreadcrumbPage>GH Tallfølger, ganging og kvadratrot</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-3">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                GH Tallfølger, ganging og kvadratrot
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Øv på tallfølger, gangetabeller og regnerekkefølge.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant={errorFreeMode ? "default" : "outline"}
                onClick={() => setErrorFreeMode(!errorFreeMode)}
                className="flex items-center gap-2"
              >
                <Target className="h-4 w-4" />
                {errorFreeMode ? "Feilfri modus: PÅ" : "Feilfri modus: AV"}
              </Button>
              <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/test">
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Test deg selv
                </Button>
              </Link>
            </div>
            {errorFreeMode && (
              <p className="text-sm text-muted-foreground mt-2">
                Du kan kun gå videre med riktige svar
              </p>
            )}
          </div>

          {!selectedModule ? (
            // Module Selection
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
                <Card className="bg-gradient-to-br from-blue-400 to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 1: Tallfølger</h3>
                    <p className="text-xs text-white/80 leading-tight">Finn manglende tall (6 oppgaver)</p>
                    <MathExampleBox examples={["2, 4, 6, __, 10", "__, 10, 13, 16, __"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-blue-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(1)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-1/challenge">
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
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 2: Tallfølger +</h3>
                    <p className="text-xs text-white/80 leading-tight">Mer komplekse tallfølger (8 oppgaver)</p>
                    <MathExampleBox examples={["50, __, 46, 44, __, __, 38", "__, 80, 75, __, 65, __, __"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-purple-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(2)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-2/challenge">
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
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 3: Avanserte tallfølger</h3>
                    <p className="text-xs text-white/80 leading-tight">Flere manglende tall (8 oppgaver)</p>
                    <MathExampleBox examples={["__, 32, 40, __, 56, __, 72", "63, __, 49, 42, __, __, 21"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-green-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(3)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-3/challenge">
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
                      <Calculator className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 4: Ganging</h3>
                    <p className="text-xs text-white/80 leading-tight">Grunnleggende multiplikasjon</p>
                    <MathExampleBox examples={["2 · 4 = __", "3 · 3 = __"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-orange-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(4)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-4/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-indigo-400 to-indigo-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Plus className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 5: Blandet regning</h3>
                    <p className="text-xs text-white/80 leading-tight">Ganging med pluss/minus</p>
                    <MathExampleBox examples={["4 · 4 + 2 = __", "5 · 5 - 5 = __"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-indigo-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(5)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-5/challenge">
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
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 6: Gangestykke</h3>
                    <p className="text-xs text-white/80 leading-tight">Finn tilsvarende gangestykke</p>
                    <MathExampleBox examples={["3 · 3 + 3 = __ (Tilsvarer: __ · 3)"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-pink-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(6)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-6/challenge">
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
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 7: Multiplikasjon 10/100/1000</h3>
                    <p className="text-xs text-white/80 leading-tight">Gange med 10, 100 og 1000</p>
                    <MathExampleBox examples={["3 · 100 = __", "7 · 1000 = __"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-red-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(7)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-7/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-400 to-yellow-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Trophy className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 8: Gangestykke med 10</h3>
                    <p className="text-xs text-white/80 leading-tight">Finn tilsvarende gangestykke</p>
                    <MathExampleBox examples={["10 · 3 + 3 · 5 = __ (Tilsvarer: __ · 3)"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-yellow-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(8)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-8/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-cyan-400 to-cyan-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 9: Ganging med 5</h3>
                    <p className="text-xs text-white/80 leading-tight">Gangetabellen for 5</p>
                    <MathExampleBox examples={["5 · 4 = __", "8 · 5 = __"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-cyan-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(9)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-9/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-violet-400 to-violet-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 10.1: Gangestykke med 5</h3>
                    <p className="text-xs text-white/80 leading-tight">Finn tilsvarende gangestykke</p>
                    <MathExampleBox examples={["5 · 4 + 5 = __ (Tilsvarer: __ · 5)"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-violet-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(10)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-10/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-400 to-emerald-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 10.2: Høyere tall</h3>
                    <p className="text-xs text-white/80 leading-tight">Gangestykke med tall 11-15</p>
                    <MathExampleBox examples={["15 · 15 - 15 = __ (Tilsvarer: __ · 15)"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-emerald-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(11)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-11/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-rose-400 to-rose-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Trophy className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 11: Ganging 6-14</h3>
                    <p className="text-xs text-white/80 leading-tight">Multiplikasjon med høyere tall</p>
                    <MathExampleBox examples={["7 · 8 = __", "9 · 7 = __"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-rose-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(12)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-12/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-amber-400 to-amber-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 lg:col-start-2">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 12: Kvadratrøtter</h3>
                    <p className="text-xs text-white/80 leading-tight">Kvadratrot og kombinasjoner</p>
                    <MathExampleBox examples={["sqrt(16 + 9) = __", "sqrt(4 · 9) = __"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-amber-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(13)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-13/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-teal-400 to-teal-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Calculator className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 13: Store tall</h3>
                    <p className="text-xs text-white/80 leading-tight">Multiplikasjon med ti-ere og hundre-ere</p>
                    <MathExampleBox examples={["5 · 30 = __", "200 · 90 = __"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-teal-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(14)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot/oppgave-14/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => startModule(15)}>
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Oppgave 14: To-sifret ganging</h3>
                    <p className="text-xs text-white/80 leading-tight">Multiplikasjon med to-sifrede tall</p>
                    <MathExampleBox examples={["3 · 37 = __", "45 · 3 = __"]} />
                    <Button size="sm" className="w-full bg-white text-fuchsia-600 hover:bg-white/90 h-7 text-xs px-2">
                      <Play className="mr-1 h-3 w-3" />
                      Start
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            // Active Module
            <div className="max-w-6xl mx-auto space-y-6">
              {/* Module Header */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">
                      Oppgave {
                        selectedModule === 1 ? '1' :
                        selectedModule === 2 ? '2' :
                        selectedModule === 3 ? '3' :
                        selectedModule === 4 ? '4' :
                        selectedModule === 5 ? '5' :
                        selectedModule === 6 ? '6' :
                        selectedModule === 7 ? '7' :
                        selectedModule === 8 ? '8' :
                        selectedModule === 9 ? '9' :
                        selectedModule === 10 ? '10.1' :
                        selectedModule === 11 ? '10.2' :
                        selectedModule === 12 ? '11' :
                        selectedModule === 13 ? '12' :
                        selectedModule === 14 ? '13' :
                        selectedModule === 15 ? '14' :
                        'Ukjent'
                      }: {
                        selectedModule === 1 ? 'Tallfølger' :
                        selectedModule === 2 ? 'Tallfølger +' :
                        selectedModule === 3 ? 'Avanserte tallfølger' :
                        selectedModule === 4 ? 'Ganging' :
                        selectedModule === 5 ? 'Blandet regning' :
                        selectedModule === 6 ? 'Gangestykke' :
                        selectedModule === 7 ? 'Multiplikasjon 10/100/1000' :
                        selectedModule === 8 ? 'Gangestykke med 10' :
                        selectedModule === 9 ? 'Ganging med 5' :
                        selectedModule === 10 ? 'Gangestykke med 5' :
                        selectedModule === 11 ? 'Høyere tall' :
                        selectedModule === 12 ? 'Ganging 6-14' :
                        selectedModule === 13 ? 'Kvadratrøtter' :
                        selectedModule === 14 ? 'Store tall' :
                        selectedModule === 15 ? 'To-sifret ganging' :
                        'Ukjent'
                      }
                    </h2>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Timer className="h-5 w-5 text-blue-600" />
                        <span className="text-xl font-mono">{formatTime(timeElapsed)}</span>
                      </div>
                      {completedAnswers > 0 && (
                        <Badge variant="secondary">
                          {completedAnswers}/{currentProblems.length} riktige
                        </Badge>
                      )}
                      {errorFreeMode && errorCount > 0 && (
                        <Badge variant="destructive">
                          {errorCount} feil
                        </Badge>
                      )}
                    </div>
                  </div>

                  {showResults ? (
                    <div className="text-center space-y-6">
                      <div className="text-4xl">🎉</div>
                      <h3 className="text-xl font-bold">Oppgave fullført!</h3>

                      {/* Score breakdown */}
                      <div className="max-w-lg mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Poengberegning:</h4>
                        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <div className="flex justify-between">
                            <span>Riktige svar ({completedAnswers}/{currentProblems.length}):</span>
                            <span className="font-mono text-gray-900 dark:text-gray-100">+{Math.round((completedAnswers / currentProblems.length) * 1000)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tidstraff ({formatTime(timeElapsed)}):</span>
                            <span className="font-mono text-red-600 dark:text-red-400">-{Math.round(Math.max(0, timeElapsed - (selectedModule! * currentProblems.length * 1000)) * Math.max(0.3, 1.1 - (selectedModule! * 0.08)) / 100)}</span>
                          </div>
                          {errorFreeMode && errorCount > 0 && (
                            <div className="flex justify-between">
                              <span>Feilstraff ({errorCount} feil):</span>
                              <span className="font-mono text-red-600 dark:text-red-400">-{errorCount * 50}</span>
                            </div>
                          )}
                          <div className="border-t border-gray-200 dark:border-gray-600 pt-2 flex justify-between font-bold">
                            <span className="text-gray-900 dark:text-gray-100">Total poengsum:</span>
                            <span className="font-mono text-purple-600 dark:text-purple-400">
                              {Math.max(0, Math.round((completedAnswers / currentProblems.length) * 1000 - (Math.max(0, timeElapsed - (selectedModule! * currentProblems.length * 1000)) * Math.max(0.3, 1.1 - (selectedModule! * 0.08)) / 100) - (errorFreeMode ? errorCount * 50 : 0)))}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className={`grid gap-4 max-w-md mx-auto ${errorFreeMode ? 'grid-cols-4' : 'grid-cols-3'}`}>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{completedAnswers}</div>
                          <div className="text-sm text-muted-foreground">Riktige</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatTime(timeElapsed)}</div>
                          <div className="text-sm text-muted-foreground">Tid</div>
                        </div>
                        {errorFreeMode && (
                          <div className="text-center">
                            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{errorCount}</div>
                            <div className="text-sm text-muted-foreground">Feil</div>
                          </div>
                        )}
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                            {Math.max(0, Math.round((completedAnswers / currentProblems.length) * 1000 - (Math.max(0, timeElapsed - (selectedModule! * currentProblems.length * 1000)) * Math.max(0.3, 1.1 - (selectedModule! * 0.08)) / 100) - (errorFreeMode ? errorCount * 50 : 0)))}
                          </div>
                          <div className="text-sm text-muted-foreground">Score</div>
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center">
                        <Button onClick={() => startModule(selectedModule!)} variant="outline">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Prøv igjen
                        </Button>
                        {selectedModule! < 15 && (
                          <Button onClick={() => startModule((selectedModule! + 1) as ModuleType)} className="bg-green-600 hover:bg-green-700">
                            <Play className="mr-2 h-4 w-4" />
                            Neste oppgave ({
                              selectedModule === 9 ? '10.1' :
                              selectedModule === 10 ? '10.2' :
                              selectedModule === 11 ? '11' :
                              selectedModule === 12 ? '12' :
                              selectedModule === 13 ? '13' :
                              selectedModule === 14 ? '14' :
                              (selectedModule! + 1).toString()
                            })
                          </Button>
                        )}
                        <Button onClick={resetModule} variant="outline">
                          Tilbake til oppgaver
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-4 justify-center">
                        <Button onClick={checkCurrentProblemAnswers} disabled={!isActive}>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Sjekk svar
                        </Button>
                        <Button onClick={finishModule} disabled={!isActive} variant="outline">
                          Fullfør modul
                        </Button>
                        <Button onClick={resetModule} variant="outline">
                          Avbryt
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Current Problem */}
              {!showResults && (
                <Card>
                  <CardContent className="p-8">
                    {renderCurrentProblem()}
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}