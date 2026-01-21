"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import React, { useState, useRef, useEffect } from "react";
import { Brain, Trophy, Target, RefreshCw, Play, CheckCircle2, AlertCircle, Swords } from "lucide-react";
import Link from "next/link";
import { MathExampleBox } from "@/components/hoderegning/math-example-box";

interface Problem {
  id: number;
  expression: string;
  answer: number | number[]; // Can be single answer or array for multiple inputs
  userAnswer: string | string[]; // Single or multiple user inputs
  originalNumber?: number; // For factorization problems - stores the number to factorize
}

type ModuleType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const MODULE_NAMES: Record<ModuleType, string> = {
  1: 'Grunnleggende divisjon',
  2: 'Multiplikasjonsligninger',
  3: 'Faktorisering',
  4: 'Divisjon og brøk',
  5: 'Brøkforenkling',
  6: 'Desimaltall-addisjon',
  7: 'Desimaltall-subtraksjon',
  8: 'Desimaltall-multiplikasjon'
};

export default function GHDivisjonBrokPage() {
  const [selectedModule, setSelectedModule] = useState<ModuleType | null>(null);
  const [currentProblems, setCurrentProblems] = useState<Problem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [errorFreeMode, setErrorFreeMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when problem changes (for mobile keyboard)
  useEffect(() => {
    if (selectedModule && currentIndex >= 0 && inputRef.current) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // For iOS, we need to trigger focus in a user-initiated context
          // The focus happens as a result of the user clicking "Next", so it should work
        }
      });
    }
  }, [currentIndex, selectedModule]);

  // Generate problems for each module
  const generateProblems = (moduleNumber: ModuleType): Problem[] => {
    const problems: Problem[] = [];

    switch (moduleNumber) {
      case 1: {
        // Module 1: Basic division - progressive difficulty with unique problems
        const usedProblems = new Set<string>(); // Track used problems to avoid duplicates

        // Level 1: Very simple (4÷2, 6÷3, 8÷2, 9÷3, 10÷2)
        const level1Options = [
          { dividend: 4, divisor: 2 }, { dividend: 6, divisor: 2 }, { dividend: 8, divisor: 2 }, { dividend: 10, divisor: 2 },
          { dividend: 6, divisor: 3 }, { dividend: 9, divisor: 3 }, { dividend: 12, divisor: 3 }, { dividend: 15, divisor: 3 }
        ];

        // Shuffle and pick 4 unique problems
        const shuffledLevel1 = [...level1Options].sort(() => Math.random() - 0.5);
        for (let i = 0; i < 4 && i < shuffledLevel1.length; i++) {
          const { dividend, divisor } = shuffledLevel1[i];
          const key = `${dividend}÷${divisor}`;
          if (!usedProblems.has(key)) {
            usedProblems.add(key);
            problems.push({
              id: problems.length + 1,
              expression: `${dividend} ÷ ${divisor} = `,
              answer: dividend / divisor,
              userAnswer: ''
            });
          }
        }

        // Level 2: Simple with larger numbers
        const level2Options = [
          { dividend: 20, divisor: 2 }, { dividend: 30, divisor: 3 }, { dividend: 40, divisor: 2 },
          { dividend: 60, divisor: 3 }, { dividend: 50, divisor: 5 }, { dividend: 40, divisor: 4 },
          { dividend: 80, divisor: 4 }, { dividend: 90, divisor: 3 }, { dividend: 100, divisor: 5 }
        ];

        const shuffledLevel2 = [...level2Options].sort(() => Math.random() - 0.5);
        for (let i = 0; i < 4 && i < shuffledLevel2.length; i++) {
          const { dividend, divisor } = shuffledLevel2[i];
          const key = `${dividend}÷${divisor}`;
          if (!usedProblems.has(key)) {
            usedProblems.add(key);
            problems.push({
              id: problems.length + 1,
              expression: `${dividend} ÷ ${divisor} = `,
              answer: dividend / divisor,
              userAnswer: ''
            });
          }
        }

        // Level 3: Medium difficulty
        const level3Options = [
          { dividend: 25, divisor: 5 }, { dividend: 30, divisor: 5 }, { dividend: 35, divisor: 5 },
          { dividend: 24, divisor: 6 }, { dividend: 30, divisor: 6 }, { dividend: 36, divisor: 6 },
          { dividend: 28, divisor: 7 }, { dividend: 35, divisor: 7 }, { dividend: 42, divisor: 7 },
          { dividend: 32, divisor: 8 }, { dividend: 40, divisor: 8 }, { dividend: 48, divisor: 8 }
        ];

        const shuffledLevel3 = [...level3Options].sort(() => Math.random() - 0.5);
        for (let i = 0; i < 4 && i < shuffledLevel3.length; i++) {
          const { dividend, divisor } = shuffledLevel3[i];
          const key = `${dividend}÷${divisor}`;
          if (!usedProblems.has(key)) {
            usedProblems.add(key);
            problems.push({
              id: problems.length + 1,
              expression: `${dividend} ÷ ${divisor} = `,
              answer: dividend / divisor,
              userAnswer: ''
            });
          }
        }
        break;
      }

      case 2: {
        // Module 2: Multiplication equations (find missing factor) - autogenerated
        const factors = [2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (let i = 0; i < 12; i++) {
          const factor = factors[Math.floor(Math.random() * factors.length)];
          const missingFactor = Math.floor(Math.random() * 10) + 2; // 2-11
          const result = factor * missingFactor;
          const position = Math.random() > 0.5 ? 'left' : 'right';

          const expression = position === 'left'
            ? `__ · ${factor} = ${result}`
            : `${factor} · __ = ${result}`;

          problems.push({
            id: i + 1,
            expression,
            answer: missingFactor,
            userAnswer: ''
          });
        }
        break;
      }

      case 3: {
        // Module 3: Factorization - autogenerated
        // Generate numbers that have nice factors
        const candidates = [6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 30, 32, 35, 36, 40, 42, 45, 48, 49, 50];

        for (let i = 0; i < 9; i++) {
          const num = candidates[Math.floor(Math.random() * candidates.length)];
          const expression = `${num} = __ · __`;

          problems.push({
            id: i + 1,
            expression,
            answer: [0, 0], // Placeholder - actual validation done via originalNumber
            userAnswer: ['', ''],
            originalNumber: num // Store the number to factorize
          });
        }
        break;
      }

      case 4: {
        // Module 4: Division and fraction connection - autogenerated
        // Pattern: a ÷ b = {a|b} = {b · __|b} = __
        const divisors = [2, 3, 4, 5, 6, 7, 8, 10];

        for (let i = 0; i < 8; i++) {
          const divisor = divisors[Math.floor(Math.random() * divisors.length)];
          const quotient = Math.floor(Math.random() * 15) + 2; // 2-16
          const dividend = divisor * quotient;

          problems.push({
            id: i + 1,
            expression: `${dividend} ÷ ${divisor} = {${dividend}|${divisor}} = {${divisor} · __|${divisor}} = __`,
            answer: [quotient, quotient],
            userAnswer: ['', '']
          });
        }
        break;
      }

      case 5: {
        // Module 5: Fraction simplification with factorization - autogenerated
        const divisors = [2, 3, 4, 5, 6, 7, 8, 9, 10];

        for (let i = 0; i < 8; i++) {
          const divisor = divisors[Math.floor(Math.random() * divisors.length)];
          const quotient = Math.floor(Math.random() * 15) + 2; // 2-16
          const dividend = divisor * quotient;

          // Pattern: a ÷ b = {a|b} = {quotient·b|b} = quotient
          const expression = `${dividend} ÷ ${divisor} = {__|${divisor}} = {__|${divisor}} = __`;

          problems.push({
            id: i + 1,
            expression,
            answer: [dividend, quotient, quotient],
            userAnswer: ['', '', '']
          });
        }
        break;
      }

      case 6: {
        // Module 6: Decimal addition - autogenerated
        for (let i = 0; i < 9; i++) {
          // Generate decimals with one decimal place
          const a = (Math.floor(Math.random() * 90) + 1) / 10; // 0.1-9.0
          const b = (Math.floor(Math.random() * 50) + 1) / 10; // 0.1-5.0
          const answer = Math.round((a + b) * 10) / 10;

          problems.push({
            id: i + 1,
            expression: `${a.toFixed(1).replace('.', ',')} + ${b.toFixed(1).replace('.', ',')} = `,
            answer,
            userAnswer: ''
          });
        }
        break;
      }

      case 7: {
        // Module 7: Decimal subtraction - autogenerated
        for (let i = 0; i < 9; i++) {
          // Generate a > b to ensure positive results
          const a = (Math.floor(Math.random() * 90) + 10) / 10; // 1.0-9.9
          const b = (Math.floor(Math.random() * Math.min(a * 10 - 1, 50)) + 1) / 10; // 0.1 to a-0.1
          const answer = Math.round((a - b) * 10) / 10;

          problems.push({
            id: i + 1,
            expression: `${a.toFixed(1).replace('.', ',')} − ${b.toFixed(1).replace('.', ',')} = `,
            answer,
            userAnswer: ''
          });
        }
        break;
      }

      case 8: {
        // Module 8: Decimal multiplication - autogenerated
        for (let i = 0; i < 9; i++) {
          // Whole number times decimal
          const a = Math.floor(Math.random() * 8) + 2; // 2-9
          const b = (Math.floor(Math.random() * 50) + 1) / 10; // 0.1-5.0
          const answer = Math.round((a * b) * 10) / 10;

          problems.push({
            id: i + 1,
            expression: `${a} · ${b.toFixed(1).replace('.', ',')} = `,
            answer,
            userAnswer: ''
          });
        }
        break;
      }
    }

    return problems;
  };

  const startModule = (moduleNumber: ModuleType) => {
    const problems = generateProblems(moduleNumber);
    setSelectedModule(moduleNumber);
    setCurrentProblems(problems);
    setCurrentIndex(0);
    setScore(0);
    setAttempted(0);
    setShowResults(false);
    setErrorFreeMode(false);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const checkAnswer = () => {
    if (currentIndex >= currentProblems.length) return;

    const currentProblem = currentProblems[currentIndex];
    const userAnswer = currentProblem.userAnswer;
    const correctAnswer = currentProblem.answer;

    let isCorrect = false;

    // Special handling for factorization problems (module 3)
    if (currentProblem.originalNumber !== undefined) {
      // Factorization: check if product of user's factors equals the original number
      // and both factors are >= 2 (no trivial factorizations like 1 × n)
      const userAnswers = userAnswer as string[];
      const factor1 = parseInt(userAnswers[0]);
      const factor2 = parseInt(userAnswers[1]);

      if (!isNaN(factor1) && !isNaN(factor2)) {
        isCorrect = factor1 * factor2 === currentProblem.originalNumber &&
                    factor1 >= 2 && factor2 >= 2;
      }
    } else if (Array.isArray(correctAnswer)) {
      // Multiple inputs - check all
      const userAnswers = userAnswer as string[];
      isCorrect = correctAnswer.every((ans, idx) => {
        const userAns = parseFloat(userAnswers[idx].replace(',', '.'));
        return Math.abs(userAns - ans) < 0.01; // Allow small floating point errors
      });
    } else {
      // Single input
      const userAns = parseFloat((userAnswer as string).replace(',', '.'));
      isCorrect = Math.abs(userAns - correctAnswer) < 0.01;
    }

    if (isCorrect) {
      // Don't add score here - auto-advance in handleInputChange handles scoring
      nextProblem();
    } else if (!errorFreeMode) {
      setAttempted(attempted + 1);
      nextProblem();
    } else {
      // In error-free mode, don't advance on wrong answer
      alert('Feil svar! Prøv igjen.');
    }
  };

  const nextProblem = () => {
    if (currentIndex < currentProblems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // Trigger click event to ensure mobile keyboard appears
          inputRef.current.click();
        }
      }, 200);
    } else {
      finishModule();
    }
  };

  const finishModule = () => {
    // Count all correct answers at the end
    let finalScore = 0;
    currentProblems.forEach(problem => {
      if (problem.originalNumber !== undefined) {
        // Factorization problem
        const userAnswers = problem.userAnswer as string[];
        const factor1 = parseInt(userAnswers[0]);
        const factor2 = parseInt(userAnswers[1]);
        if (!isNaN(factor1) && !isNaN(factor2) &&
            factor1 * factor2 === problem.originalNumber &&
            factor1 >= 2 && factor2 >= 2) {
          finalScore++;
        }
      } else if (Array.isArray(problem.answer)) {
        // Multiple inputs
        const userAnswers = problem.userAnswer as string[];
        const allCorrect = problem.answer.every((ans, idx) => {
          const userAns = parseFloat(userAnswers[idx]?.replace(',', '.') || '');
          return Math.abs(userAns - ans) < 0.01;
        });
        if (allCorrect) finalScore++;
      } else {
        // Single input
        const userAns = parseFloat((problem.userAnswer as string).replace(',', '.'));
        if (!isNaN(userAns) && Math.abs(userAns - problem.answer) < 0.01) {
          finalScore++;
        }
      }
    });
    setScore(finalScore);
    setShowResults(true);
  };

  const resetModule = () => {
    if (selectedModule) {
      startModule(selectedModule);
    }
  };

  const handleInputChange = (value: string, index?: number) => {
    if (currentIndex >= currentProblems.length) return;

    const currentProblem = currentProblems[currentIndex];
    const newProblems = [...currentProblems];

    if (typeof index === 'number' && Array.isArray(currentProblem.userAnswer)) {
      // Multiple inputs
      const newAnswers = [...(currentProblem.userAnswer as string[])];
      newAnswers[index] = value;
      newProblems[currentIndex] = { ...currentProblem, userAnswer: newAnswers };

      // Auto-advance for factorization problems when both factors are correct
      if (currentProblem.originalNumber !== undefined) {
        const factor1 = parseInt(newAnswers[0]);
        const factor2 = parseInt(newAnswers[1]);

        if (!isNaN(factor1) && !isNaN(factor2) &&
            factor1 * factor2 === currentProblem.originalNumber &&
            factor1 >= 2 && factor2 >= 2) {
          // Correct factorization! Auto-advance after a short delay
          setTimeout(() => {
            if (currentIndex < currentProblems.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              finishModule();
            }
          }, 300);
        }
      }
    } else {
      // Single input
      newProblems[currentIndex] = { ...currentProblem, userAnswer: value };
    }

    setCurrentProblems(newProblems);

    // Auto-advance to next problem when correct answer is entered (only for single input)
    if (typeof index !== 'number' || !Array.isArray(currentProblem.userAnswer)) {
      const userAnswerStr = typeof index === 'number'
        ? (newProblems[currentIndex].userAnswer as string[])[index]
        : (newProblems[currentIndex].userAnswer as string);

      const userAnswer = parseFloat(userAnswerStr.replace(',', '.'));
      const correctAnswer = currentProblem.answer;

      if (!isNaN(userAnswer) && !Array.isArray(correctAnswer) && Math.abs(userAnswer - correctAnswer) < 0.01) {
        // Correct answer! Auto-advance after a short delay
        setTimeout(() => {
          if (currentIndex < currentProblems.length - 1) {
            setCurrentIndex(currentIndex + 1);
          } else {
            // Last problem - finish module
            finishModule();
          }
        }, 300); // Short delay so user sees their correct answer
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  const addComma = () => {
    if (currentIndex >= currentProblems.length) return;
    const currentProblem = currentProblems[currentIndex];

    // Only works for single-input problems
    if (typeof currentProblem.userAnswer === 'string') {
      if (!currentProblem.userAnswer.includes(',')) {
        handleInputChange(currentProblem.userAnswer + ',');
      }
    }
    inputRef.current?.focus();
  };

  const renderProblem = () => {
    if (currentIndex >= currentProblems.length) return null;

    const currentProblem = currentProblems[currentIndex];
    const userAnswer = currentProblem.userAnswer;

    // Helper function to render fractions
    const renderFraction = (numerator: string, denominator: string) => (
      <span className="inline-flex flex-col items-center mx-1">
        <span className="text-xl md:text-3xl lg:text-4xl">{numerator}</span>
        <span className="border-t-2 border-black w-full"></span>
        <span className="text-xl md:text-3xl lg:text-4xl">{denominator}</span>
      </span>
    );

    // Helper function to parse and render text with fractions
    const parseExpression = (text: string, inputIndex: { current: number }) => {
      const elements: React.ReactElement[] = [];
      let currentText = text;
      let key = 0;

      while (currentText.length > 0) {
        // Check for fraction pattern {numerator|denominator}
        const fractionMatch = currentText.match(/^\{([^}|]+)\|([^}|]+)\}/);
        if (fractionMatch) {
          const numerator = fractionMatch[1];
          const denominator = fractionMatch[2];

          // Check if numerator or denominator contains __
          if (numerator.includes('__') || denominator.includes('__')) {
            // Replace __ with input in numerator/denominator
            const numParts = numerator.split('__');
            const denParts = denominator.split('__');
            const currentInputIndex = inputIndex.current;

            elements.push(
              <span key={key++} className="inline-flex flex-col items-center mx-1">
                <span className="text-xl md:text-3xl lg:text-4xl flex items-center gap-1">
                  {numParts.map((part, idx) => {
                    const thisInputIndex = currentInputIndex + idx;
                    return (
                      <React.Fragment key={idx}>
                        <span>{part}</span>
                        {idx < numParts.length - 1 && (
                          <Input
                            ref={thisInputIndex === 0 ? inputRef : null}
                            type="text"
                            inputMode="numeric"
                            value={Array.isArray(userAnswer) ? (userAnswer[thisInputIndex] || '') : ''}
                            onChange={(e) => handleInputChange(e.target.value, thisInputIndex)}
                            onKeyPress={handleKeyPress}
                            className="w-16 h-10 md:w-20 md:h-12 lg:w-24 lg:h-14 text-center text-xl md:text-3xl lg:text-4xl font-mono border-2 md:border-4 border-blue-300 focus:border-blue-500 inline-block"
                            autoFocus={thisInputIndex === 0}
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
                </span>
                <span className="border-t-2 border-black w-full"></span>
                <span className="text-xl md:text-3xl lg:text-4xl">{denParts.join('')}</span>
              </span>
            );
            inputIndex.current += numParts.length - 1;
          } else {
            elements.push(<React.Fragment key={key++}>{renderFraction(numerator, denominator)}</React.Fragment>);
          }
          currentText = currentText.substring(fractionMatch[0].length);
          continue;
        }

        // Check for __ pattern
        const blankMatch = currentText.match(/^__/);
        if (blankMatch) {
          const currentInputIdx = inputIndex.current;
          elements.push(
            <Input
              key={key++}
              ref={currentInputIdx === 0 ? inputRef : null}
              type="text"
              inputMode="numeric"
              value={Array.isArray(userAnswer) ? (userAnswer[currentInputIdx] || '') : ''}
              onChange={(e) => handleInputChange(e.target.value, currentInputIdx)}
              onKeyPress={handleKeyPress}
              className="w-16 h-12 md:w-20 md:h-14 lg:w-24 lg:h-16 text-center text-xl md:text-3xl lg:text-4xl font-mono border-2 md:border-4 border-blue-300 focus:border-blue-500 inline-block mx-1"
              autoFocus={currentInputIdx === 0}
            />
          );
          inputIndex.current++;
          currentText = currentText.substring(2);
          continue;
        }

        // Regular text - find next special character
        const nextSpecial = currentText.search(/[{_]/);
        const textPart = nextSpecial === -1 ? currentText : currentText.substring(0, nextSpecial);
        if (textPart) {
          elements.push(<span key={key++}>{textPart}</span>);
          currentText = currentText.substring(textPart.length);
        } else {
          currentText = currentText.substring(1);
        }
      }

      return elements;
    };

    // Check if problem has multiple inputs
    if (Array.isArray(userAnswer)) {
      // Multiple inputs - parse expression with fractions
      const inputIndex = { current: 0 };
      const elements = parseExpression(currentProblem.expression, inputIndex);

      return (
        <div className="text-xl md:text-3xl lg:text-4xl font-mono font-bold flex items-center justify-center flex-wrap gap-1 md:gap-2">
          {elements}
        </div>
      );
    } else {
      // Single input
      // Check if expression contains __
      if (currentProblem.expression.includes('__')) {
        // Replace __ with input field
        const parts = currentProblem.expression.split('__');
        return (
          <div className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            {parts.map((part, index) => (
              <React.Fragment key={index}>
                <span>{part}</span>
                {index < parts.length - 1 && (
                  <Input
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    value={userAnswer as string}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-20 h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 text-center text-2xl md:text-4xl lg:text-5xl font-mono border-2 md:border-4 border-blue-300 focus:border-blue-500"
                    autoFocus
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        );
      } else {
        // Show expression and input field separately
        return (
          <div className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            <span>{currentProblem.expression}</span>
            <Input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              value={userAnswer as string}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-20 h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 text-center text-2xl md:text-4xl lg:text-5xl font-mono border-2 md:border-4 border-blue-300 focus:border-blue-500"
              autoFocus
            />
          </div>
        );
      }
    }
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
                <BreadcrumbPage>GH Divisjon/Brøk, faktorisering og desimaltall</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-orange-500 to-red-600 p-3">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">GH Divisjon/Brøk, faktorisering og desimaltall</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Øv på divisjon, brøk, faktorisering og desimaltall
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Link href="/hoderegning/gh-divisjon-brok/test">
                <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                  <Target className="mr-2 h-4 w-4" />
                  Test deg selv
                </Button>
              </Link>
            </div>
          </div>

          {!selectedModule ? (
            // Module selection
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
                {/* Module 1: Grunnleggende divisjon */}
                <Card className="bg-gradient-to-br from-blue-400 to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Grunnleggende divisjon</h3>
                    <p className="text-xs text-white/80 leading-tight">Lær divisjon steg for steg</p>
                    <MathExampleBox examples={["6 ÷ 2 = 3"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-blue-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(1)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-divisjon-brok/oppgave-1/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Module 2: Multiplikasjonsligninger */}
                <Card className="bg-gradient-to-br from-purple-400 to-purple-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Multiplikasjonsligninger</h3>
                    <p className="text-xs text-white/80 leading-tight">Finn manglende faktor</p>
                    <MathExampleBox examples={["__ · 3 = 12"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-purple-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(2)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-divisjon-brok/oppgave-2/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Module 3: Faktorisering */}
                <Card className="bg-gradient-to-br from-green-400 to-green-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Trophy className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Faktorisering</h3>
                    <p className="text-xs text-white/80 leading-tight">Bryt ned tall i faktorer</p>
                    <MathExampleBox examples={["12 = 3 · 4"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-green-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(3)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-divisjon-brok/oppgave-3/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Module 4: Divisjon og brøk */}
                <Card className="bg-gradient-to-br from-orange-400 to-orange-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Divisjon og brøk</h3>
                    <p className="text-xs text-white/80 leading-tight">Koble divisjon og brøk</p>
                    <MathExampleBox examples={["8 ÷ 2 = {8|2} = 4"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-orange-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(4)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-divisjon-brok/oppgave-4/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Module 5: Brøkforenkling */}
                <Card className="bg-gradient-to-br from-indigo-400 to-indigo-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Brøkforenkling</h3>
                    <p className="text-xs text-white/80 leading-tight">Forenkle brøker med faktorisering</p>
                    <MathExampleBox examples={["{12|3} = 4"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-indigo-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(5)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-divisjon-brok/oppgave-5/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Module 6: Desimaltall-addisjon */}
                <Card className="bg-gradient-to-br from-pink-400 to-pink-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Desimaltall-addisjon</h3>
                    <p className="text-xs text-white/80 leading-tight">Legg sammen desimaltall</p>
                    <MathExampleBox examples={["2,5 + 1,3 = 3,8"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-pink-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(6)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-divisjon-brok/oppgave-6/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Module 7: Desimaltall-subtraksjon */}
                <Card className="bg-gradient-to-br from-red-400 to-red-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Desimaltall-subtraksjon</h3>
                    <p className="text-xs text-white/80 leading-tight">Trekk fra desimaltall</p>
                    <MathExampleBox examples={["4,7 − 1,2 = 3,5"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-red-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(7)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-divisjon-brok/oppgave-7/challenge">
                        <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                          <Swords className="mr-1 h-3 w-3" />
                          Challenge
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Module 8: Desimaltall-multiplikasjon */}
                <Card className="bg-gradient-to-br from-yellow-400 to-yellow-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1.5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Trophy className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">Desimaltall-multiplikasjon</h3>
                    <p className="text-xs text-white/80 leading-tight">Multipliser desimaltall</p>
                    <MathExampleBox examples={["3 · 1,5 = 4,5"]} />
                    <div className="grid grid-cols-2 gap-1">
                      <Button size="sm" className="bg-white text-yellow-600 hover:bg-white/90 h-7 text-xs px-2" onClick={() => startModule(8)}>
                        <Play className="mr-1 h-3 w-3" />
                        Trening
                      </Button>
                      <Link href="/hoderegning/gh-divisjon-brok/oppgave-8/challenge">
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
          ) : showResults ? (
            // Results view
            <div className="max-w-2xl mx-auto space-y-6">
              <Card>
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
                      {!errorFreeMode && (
                        <div className="flex justify-between text-muted-foreground">
                          <span>Totalt antall forsøk:</span>
                          <span className="font-mono">{attempted}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-200 dark:border-gray-600 pt-2 flex justify-between font-bold">
                        <span className="text-gray-900 dark:text-gray-100">Total poengsum:</span>
                        <span className="font-mono text-purple-600 dark:text-purple-400">
                          {Math.round((score / currentProblems.length) * 1000)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 max-w-md mx-auto grid-cols-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">{score}</div>
                      <div className="text-sm text-muted-foreground">Riktige</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {Math.round((score / currentProblems.length) * 1000)}
                      </div>
                      <div className="text-sm text-muted-foreground">Score</div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center flex-wrap">
                    <Button onClick={resetModule} variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Prøv igjen
                    </Button>
                    {selectedModule && selectedModule < 8 && (
                      <Button onClick={() => startModule((selectedModule + 1) as ModuleType)} className="bg-green-600 hover:bg-green-700">
                        <Play className="mr-2 h-4 w-4" />
                        Neste oppgave
                      </Button>
                    )}
                    <Button onClick={() => setSelectedModule(null)} variant="outline">
                      Tilbake til oppgaver
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {score < currentProblems.length && (
                <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Tips for bedre resultat:</h3>
                        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                          <li>• Øv på oppgaven flere ganger</li>
                          <li>• Ta deg god tid til å tenke gjennom hvert steg</li>
                          <li>• Bruk feileliminering-modus for ekstra øvelse</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            // Practice view
            <div className="max-w-6xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="text-lg">{selectedModule}</Badge>
                      <span>{MODULE_NAMES[selectedModule]}</span>
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">
                        Oppgave {currentIndex + 1} av {currentProblems.length}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="mb-8">
                    {renderProblem()}
                  </div>

                  {/* Comma button for decimal modules */}
                  {selectedModule && [6, 7, 8].includes(selectedModule) && (
                    <div className="flex justify-center mb-6">
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={addComma}
                        className="h-14 px-8 text-2xl font-mono"
                      >
                        ,
                      </Button>
                    </div>
                  )}

                  <div className="flex justify-center gap-4">
                    <Button onClick={checkAnswer} size="lg">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Sjekk svar
                    </Button>
                    <Button onClick={() => setSelectedModule(null)} variant="outline" size="lg">
                      Tilbake til oversikt
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-yellow-600" />
                        <span className="font-semibold">{score} riktige</span>
                      </div>
                      {!errorFreeMode && (
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-blue-600" />
                          <span className="text-muted-foreground">{attempted} forsøk</span>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setErrorFreeMode(!errorFreeMode)}
                    >
                      {errorFreeMode ? '✓' : ''} Feileliminering
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
