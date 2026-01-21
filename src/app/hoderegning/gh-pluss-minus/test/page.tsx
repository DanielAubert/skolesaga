"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import React, { useState, useRef, useEffect } from "react";
import { Brain, RefreshCw, Play, AlertCircle, TrendingUp, TrendingDown, Target, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface TestProblem {
  id: number;
  moduleNumber: number;
  moduleName: string;
  expression: string;
  answer: number;
  userAnswer: string;
  isCorrect?: boolean;
  timeTaken?: number;
}

interface ModuleStats {
  moduleNumber: number;
  moduleName: string;
  total: number;
  correct: number;
  incorrect: number;
  avgTime: number;
  needsPractice: boolean;
}

type ModuleType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const MODULE_NAMES: Record<ModuleType, string> = {
  1: 'Grunnleggende',
  2: 'Ligninger',
  3: 'Addisjon til 10',
  4: 'Addisjon over 10',
  5: 'To-sifrede tall',
  6: 'Til nærmeste tier',
  7: 'Addisjon uten mente',
  8: 'Addisjon med mente',
  9: 'Subtraksjon uten mente',
  10: 'Subtraksjon med mente'
};

export default function TestModePage() {
  const [testProblems, setTestProblems] = useState<TestProblem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [_startTime, setStartTime] = useState<number | null>(null);
  const [problemStartTime, setProblemStartTime] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [moduleStats, setModuleStats] = useState<ModuleStats[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when problem changes (for mobile keyboard)
  useEffect(() => {
    if (isActive && inputRef.current) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // For iOS, we need to trigger focus in a user-initiated context
          // The focus happens as a result of the user clicking "Next", so it should work
        }
      });
    }
  }, [currentIndex, isActive]);

  // Generate problems for a specific module (reusing logic from main page)
  const generateModuleProblems = (moduleNumber: ModuleType, count: number): TestProblem[] => {
    const problems: TestProblem[] = [];
    const moduleName = MODULE_NAMES[moduleNumber];

    for (let i = 0; i < count; i++) {
      let expression: string;
      let answer: number;

      switch (moduleNumber) {
        case 1: {
          // Basic addition/subtraction
          const isAddition = Math.random() > 0.5;
          if (isAddition) {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * Math.min(10, 18 - a)) + 1;
            answer = a + b;
            expression = `${a} + ${b} = `;
          } else {
            const a = Math.floor(Math.random() * 15) + 3;
            const b = Math.floor(Math.random() * (a - 1)) + 1;
            answer = a - b;
            expression = `${a} - ${b} = `;
          }
          break;
        }

        case 2: {
          // Equation solving
          const isAddition = Math.random() > 0.5;
          if (isAddition) {
            const result = Math.floor(Math.random() * 15) + 5;
            const known = Math.floor(Math.random() * (result - 1)) + 1;
            answer = result - known;
            expression = `${result} = ${known} + `;
          } else {
            const known = Math.floor(Math.random() * 15) + 8;
            const result = Math.floor(Math.random() * (known - 2)) + 2;
            answer = known - result;
            expression = `${result} = ${known} - `;
          }
          break;
        }

        case 3: {
          // Addition with sum = 10
          const sum = 10;
          const a = Math.floor(Math.random() * 9) + 1;
          const b = sum - a;
          const hidePosition = Math.floor(Math.random() * 3);
          if (hidePosition === 0) {
            expression = `__ + ${b} = ${sum}`;
            answer = a;
          } else if (hidePosition === 1) {
            expression = `${a} + __ = ${sum}`;
            answer = b;
          } else {
            expression = `${a} + ${b} = __`;
            answer = sum;
          }
          break;
        }

        case 4: {
          // Addition where both < 10 but sum > 10
          let a: number, b: number, sum: number;
          do {
            a = Math.floor(Math.random() * 9) + 1;
            b = Math.floor(Math.random() * 9) + 1;
            sum = a + b;
          } while (sum <= 10);
          answer = sum;
          expression = `${a} + ${b} = __`;
          break;
        }

        case 5: {
          // Two-digit addition/subtraction
          const isAddition = Math.random() > 0.5;
          if (isAddition) {
            const tens1 = Math.floor(Math.random() * 8) + 2;
            const tens2 = Math.floor(Math.random() * 8) + 2;
            const a = tens1 * 10;
            const b = tens2 * 10;
            answer = a + b;
            expression = `${a} + ${b} = __`;
          } else {
            const tens1 = Math.floor(Math.random() * 8) + 3;
            const tens2 = Math.floor(Math.random() * (tens1 - 1)) + 1;
            const a = tens1 * 10;
            const b = tens2 * 10;
            answer = a - b;
            expression = `${a} - ${b} = __`;
          }
          break;
        }

        case 6: {
          // To nearest multiple of 10
          let startNumber: number;
          do {
            startNumber = Math.floor(Math.random() * 89) + 11;
          } while (startNumber % 10 === 0);

          const lowerTen = Math.floor(startNumber / 10) * 10;
          const upperTen = lowerTen + 10;
          const distanceToLower = startNumber - lowerTen;
          const distanceToUpper = upperTen - startNumber;

          if (distanceToLower <= distanceToUpper) {
            answer = distanceToLower;
            expression = `${startNumber} - __ = ${lowerTen}`;
          } else {
            answer = distanceToUpper;
            expression = `${startNumber} + __ = ${upperTen}`;
          }
          break;
        }

        case 7: {
          // Multi-digit addition without carrying
          const a_tens = Math.floor(Math.random() * 5) + 1;
          const a_ones = Math.floor(Math.random() * 5) + 1;
          const b_tens = Math.floor(Math.random() * (9 - a_tens)) + 1;
          const b_ones = Math.floor(Math.random() * (9 - a_ones)) + 1;
          const a = a_tens * 10 + a_ones;
          const b = b_tens * 10 + b_ones;
          answer = a + b;
          expression = `${a} + ${b} = __`;
          break;
        }

        case 8: {
          // Multi-digit addition with carrying
          let a_tens: number, a_ones: number, b_tens: number, b_ones: number;
          const carryInOnes = Math.random() > 0.5;
          if (carryInOnes) {
            a_ones = Math.floor(Math.random() * 4) + 5;
            b_ones = Math.floor(Math.random() * (15 - a_ones)) + (10 - a_ones + 1);
            a_tens = Math.floor(Math.random() * 4) + 1;
            b_tens = Math.floor(Math.random() * (9 - a_tens)) + 1;
          } else {
            a_ones = Math.floor(Math.random() * 5) + 1;
            b_ones = Math.floor(Math.random() * (9 - a_ones)) + 1;
            a_tens = Math.floor(Math.random() * 3) + 5;
            b_tens = Math.floor(Math.random() * (15 - a_tens)) + (10 - a_tens + 1);
          }
          const a = a_tens * 10 + a_ones;
          const b = b_tens * 10 + b_ones;
          answer = a + b;
          expression = `${a} + ${b} = __`;
          break;
        }

        case 9: {
          // Multi-digit subtraction without borrowing
          const a_tens = Math.floor(Math.random() * 6) + 3;
          const a_ones = Math.floor(Math.random() * 6) + 3;
          const b_tens = Math.floor(Math.random() * a_tens) + 1;
          const b_ones = Math.floor(Math.random() * a_ones) + 1;
          const a = a_tens * 10 + a_ones;
          const b = b_tens * 10 + b_ones;
          answer = a - b;
          expression = `${a} - ${b} = __`;
          break;
        }

        case 10: {
          // Multi-digit subtraction with borrowing
          let a: number, b: number;
          // Keep generating until we get a positive result
          do {
            let a_tens: number, a_ones: number, b_tens: number, b_ones: number;
            const borrowInOnes = Math.random() > 0.5;
            if (borrowInOnes) {
              a_ones = Math.floor(Math.random() * 5) + 1;
              b_ones = Math.floor(Math.random() * (9 - a_ones)) + a_ones + 1;
              a_tens = Math.floor(Math.random() * 3) + 5;
              b_tens = Math.floor(Math.random() * (a_tens - 1)) + 1;
            } else {
              a_ones = Math.floor(Math.random() * 6) + 4;
              b_ones = Math.floor(Math.random() * a_ones) + 1;
              a_tens = Math.floor(Math.random() * 4) + 5; // Increased from 3 to 5
              b_tens = Math.floor(Math.random() * 2) + a_tens + 1; // Limited range
              if (b_tens > 9) b_tens = 9;
            }
            a = a_tens * 10 + a_ones;
            b = b_tens * 10 + b_ones;
          } while (a <= b); // Ensure positive result
          answer = a - b;
          expression = `${a} - ${b} = __`;
          break;
        }

        default:
          expression = '1 + 1 = ';
          answer = 2;
      }

      problems.push({
        id: problems.length + 1,
        moduleNumber,
        moduleName,
        expression,
        answer,
        userAnswer: ''
      });
    }

    return problems;
  };

  const generateFullTest = () => {
    const allProblems: TestProblem[] = [];
    // Generate 3 problems per module
    for (let moduleNum = 1; moduleNum <= 10; moduleNum++) {
      const moduleProblems = generateModuleProblems(moduleNum as ModuleType, 3);
      allProblems.push(...moduleProblems);
    }

    // Shuffle problems
    for (let i = allProblems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allProblems[i], allProblems[j]] = [allProblems[j], allProblems[i]];
    }

    // Reassign IDs after shuffle
    allProblems.forEach((p, idx) => p.id = idx + 1);

    return allProblems;
  };

  const startTest = () => {
    const problems = generateFullTest();
    setTestProblems(problems);
    setCurrentIndex(0);
    setIsActive(true);
    setProblemStartTime(Date.now());
    setShowResults(false);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleInputChange = (value: string) => {
    if (!/^-?\d*$/.test(value)) return;

    const newProblems = [...testProblems];
    newProblems[currentIndex].userAnswer = value;
    setTestProblems(newProblems);

    // Auto-advance to next problem when correct answer is entered
    const currentProblem = newProblems[currentIndex];
    const userAnswer = parseInt(value);

    if (!isNaN(userAnswer) && userAnswer === currentProblem.answer) {
      // Correct answer! Auto-advance after a short delay
      setTimeout(() => {
        if (currentIndex < testProblems.length - 1) {
          setCurrentIndex(currentIndex + 1);
          // Clear the input for next problem
          const resetProblems = [...newProblems];
          resetProblems[currentIndex + 1].userAnswer = '';
          setTestProblems(resetProblems);
        } else {
          // Last problem - finish module
          finishTest(newProblems);
        }
      }, 300); // Short delay so user sees their correct answer
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      nextProblem();
    }
  };

  const toggleNegative = () => {
    const currentProblem = testProblems[currentIndex];
    if (!currentProblem) return;

    const newValue = currentProblem.userAnswer.startsWith('-')
      ? currentProblem.userAnswer.slice(1)
      : '-' + currentProblem.userAnswer;

    const newProblems = [...testProblems];
    newProblems[currentIndex].userAnswer = newValue;
    setTestProblems(newProblems);
    inputRef.current?.focus();

    // Check if answer is now correct
    const userAnswer = parseInt(newValue);
    if (!isNaN(userAnswer) && userAnswer === currentProblem.answer) {
      setTimeout(() => {
        if (currentIndex < testProblems.length - 1) {
          setCurrentIndex(currentIndex + 1);
          const resetProblems = [...newProblems];
          resetProblems[currentIndex + 1].userAnswer = '';
          setTestProblems(resetProblems);
        } else {
          finishTest(newProblems);
        }
      }, 300);
    }
  };

  const nextProblem = () => {
    if (!problemStartTime) return;

    // Record time taken for this problem
    const timeTaken = Date.now() - problemStartTime;
    const newProblems = [...testProblems];
    newProblems[currentIndex].timeTaken = timeTaken;
    setTestProblems(newProblems);

    if (currentIndex < testProblems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProblemStartTime(Date.now());
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // Trigger click event to ensure mobile keyboard appears
          inputRef.current.click();
        }
      }, 200);
    } else {
      finishTest(newProblems);
    }
  };

  const finishTest = (finalProblems?: TestProblem[]) => {
    setIsActive(false);
    const problems = finalProblems || testProblems;

    // Check all answers
    const checkedProblems = problems.map(problem => ({
      ...problem,
      isCorrect: parseInt(problem.userAnswer) === problem.answer
    }));

    setTestProblems(checkedProblems);

    // Calculate stats per module
    const stats: Record<number, ModuleStats> = {};

    checkedProblems.forEach(problem => {
      if (!stats[problem.moduleNumber]) {
        stats[problem.moduleNumber] = {
          moduleNumber: problem.moduleNumber,
          moduleName: problem.moduleName,
          total: 0,
          correct: 0,
          incorrect: 0,
          avgTime: 0,
          needsPractice: false
        };
      }

      stats[problem.moduleNumber].total++;
      if (problem.isCorrect) {
        stats[problem.moduleNumber].correct++;
      } else {
        stats[problem.moduleNumber].incorrect++;
      }
    });

    // Calculate average time and determine if practice is needed
    const statsArray = Object.values(stats).map(stat => {
      const moduleProblems = checkedProblems.filter(p => p.moduleNumber === stat.moduleNumber);
      const totalTime = moduleProblems.reduce((sum, p) => sum + (p.timeTaken || 0), 0);
      stat.avgTime = totalTime / stat.total;

      // Needs practice if: < 67% correct OR avg time > 5 seconds
      stat.needsPractice = (stat.correct / stat.total < 0.67) || (stat.avgTime > 5000);

      return stat;
    });

    // Sort by performance (worst first)
    statsArray.sort((a, b) => {
      const scoreA = a.correct / a.total;
      const scoreB = b.correct / b.total;
      return scoreA - scoreB;
    });

    setModuleStats(statsArray);
    setShowResults(true);
  };

  const resetTest = () => {
    setTestProblems([]);
    setCurrentIndex(0);
    setIsActive(false);
    setStartTime(null);
    setProblemStartTime(null);
    setShowResults(false);
    setModuleStats([]);
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${seconds}.${milliseconds.toString().padStart(2, '0')}s`;
  };

  const getPerformanceColor = (correctRatio: number) => {
    if (correctRatio >= 0.9) return 'text-green-600';
    if (correctRatio >= 0.7) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceIcon = (needsPractice: boolean) => {
    return needsPractice ? (
      <AlertCircle className="h-5 w-5 text-red-600" />
    ) : (
      <CheckCircle2 className="h-5 w-5 text-green-600" />
    );
  };

  const renderCurrentProblem = () => {
    if (!testProblems.length || currentIndex >= testProblems.length) return null;

    const currentProblem = testProblems[currentIndex];

    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Badge variant="outline" className="text-lg px-4 py-2">
            Oppgave {currentIndex + 1} av {testProblems.length}
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {currentProblem.moduleName}
          </Badge>
        </div>

        <div className="text-4xl md:text-6xl font-mono font-bold flex items-center justify-center gap-2 flex-wrap">
          {currentProblem.expression.includes('__') ? (
            // For modules with __: Replace __ with input field
            currentProblem.expression.split('__').map((part, index, array) => (
              <React.Fragment key={index}>
                <span>{part}</span>
                {index < array.length - 1 && (
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={toggleNegative}
                      disabled={!isActive}
                      className="h-16 w-16 text-2xl font-mono shrink-0"
                    >
                      ±
                    </Button>
                    <Input
                      ref={inputRef}
                      type="text"
                      inputMode="numeric"
                      value={currentProblem.userAnswer}
                      onChange={(e) => handleInputChange(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-32 h-16 text-center text-4xl md:text-5xl font-mono border-4 border-blue-300 focus:border-blue-500"
                      disabled={!isActive}
                      autoFocus
                    />
                  </div>
                )}
              </React.Fragment>
            ))
          ) : (
            // For modules without __: Show expression and separate input field
            <>
              <span>{currentProblem.expression}</span>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={toggleNegative}
                  disabled={!isActive}
                  className="h-16 w-16 text-2xl font-mono shrink-0"
                >
                  ±
                </Button>
                <Input
                  ref={inputRef}
                  type="text"
                  inputMode="numeric"
                  value={currentProblem.userAnswer}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-32 h-16 text-center text-4xl md:text-5xl font-mono border-4 border-blue-300 focus:border-blue-500"
                  disabled={!isActive}
                  autoFocus
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center gap-4">
          <Button onClick={nextProblem} disabled={!isActive} size="lg">
            {currentIndex < testProblems.length - 1 ? 'Neste oppgave' : 'Fullfør test'}
          </Button>
        </div>
      </div>
    );
  };

  const totalCorrect = testProblems.filter(p => p.isCorrect).length;
  const totalProblems = testProblems.length;

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
                <BreadcrumbLink href="/hoderegning/gh-pluss-minus">GH pluss minus</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Test deg selv</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-purple-100 p-3">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h1 className="text-4xl font-bold">Test deg selv</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              30 oppgaver fra alle 10 modulene. Finn ut hvilke områder du bør øve mer på!
            </p>
          </div>

          {!isActive && !showResults ? (
            // Start screen
            <div className="max-w-2xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    Om testen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Denne testen gir deg en god oversikt over dine ferdigheter i hoderegning:</p>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li><strong>30 oppgaver totalt</strong> - 3 fra hver av de 10 modulene</li>
                    <li><strong>Blandet rekkefølge</strong> - oppgavene kommer i tilfeldig rekkefølge</li>
                    <li><strong>Detaljert rapport</strong> - se hvilke moduler du mestrer og hvilke du bør øve mer på</li>
                    <li><strong>Tidsregistrering</strong> - se hvor lang tid du bruker på hver type oppgave</li>
                  </ul>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-3">Moduler som testes:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      {Object.entries(MODULE_NAMES).map(([num, name]) => (
                        <div key={num} className="flex items-center gap-2 bg-gray-50 rounded p-2">
                          <Badge variant="outline" className="text-xs">{num}</Badge>
                          <span>{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button onClick={startTest} size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                      <Play className="mr-2 h-5 w-5" />
                      Start test
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : showResults ? (
            // Results screen - Compact version
            <div className="max-w-5xl mx-auto space-y-4">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🎉</div>
                  <h2 className="text-2xl font-bold mb-1">Test fullført!</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    {totalCorrect} av {totalProblems} riktige ({Math.round((totalCorrect / totalProblems) * 100)}%)
                  </p>

                  <div className="flex justify-center gap-3">
                    <Button onClick={resetTest} variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Ta test på nytt
                    </Button>
                    <Link href="/hoderegning/gh-pluss-minus">
                      <Button variant="outline">Tilbake til moduler</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Module Performance - Compact Grid */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    Din prestasjon per modul
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {moduleStats.map(stat => {
                      const correctRatio = stat.correct / stat.total;
                      const percentage = Math.round(correctRatio * 100);

                      return (
                        <div key={stat.moduleNumber} className="border rounded-lg p-3 hover:shadow transition-shadow">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {getPerformanceIcon(stat.needsPractice)}
                              <div>
                                <h3 className="font-semibold text-sm">
                                  {stat.moduleNumber}. {stat.moduleName}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  {stat.correct}/{stat.total} • {formatTime(stat.avgTime)}
                                </p>
                              </div>
                            </div>
                            <div className={`text-xl font-bold ${getPerformanceColor(correctRatio)}`}>
                              {percentage}%
                            </div>
                          </div>

                          {/* Compact Progress bar */}
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div
                              className={`h-2 rounded-full transition-all ${
                                correctRatio >= 0.9 ? 'bg-green-600' :
                                correctRatio >= 0.7 ? 'bg-yellow-600' :
                                'bg-red-600'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>

                          {stat.needsPractice ? (
                            <div className="text-xs text-orange-700 bg-orange-50 rounded px-2 py-1 mb-2">
                              {correctRatio < 0.67 ? 'Anbefalt øvelse' : 'Øv for å bli raskere'}
                            </div>
                          ) : (
                            <div className="text-xs text-green-700 flex items-center gap-1 mb-2">
                              <CheckCircle2 className="h-3 w-3" />
                              <span>Bra!</span>
                            </div>
                          )}

                          <Link href="/hoderegning/gh-pluss-minus">
                            <Button variant="outline" size="sm" className="w-full text-xs h-7">
                              Øv på oppgave {stat.moduleNumber}
                            </Button>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Summary recommendations - Compact */}
              {moduleStats.filter(s => s.needsPractice).length > 0 && (
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <TrendingDown className="h-5 w-5 text-purple-600" />
                      Fokuser på disse {moduleStats.filter(s => s.needsPractice).length} modulene
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {moduleStats
                        .filter(s => s.needsPractice)
                        .map(stat => (
                          <Badge key={stat.moduleNumber} variant="outline" className="bg-white text-purple-800 border-purple-300">
                            {stat.moduleNumber}. {stat.moduleName}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            // Active test
            <div className="max-w-6xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-8">
                  {renderCurrentProblem()}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Oppgaver løst: {currentIndex} / {totalProblems}</span>
                    <span>Trykk Enter for å gå til neste</span>
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
