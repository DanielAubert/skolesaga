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

type ModuleType = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const MODULE_NAMES: Record<ModuleType, string> = {
  1: 'Grunnleggende regning med negative tall',
  2: 'Finn manglende tall i ligninger',
  3: 'Multiplikasjon med negative tall',
  4: 'Regnerekkefølge',
  5: 'Divisjon med negative tall',
  6: 'Desimaltall med negative tall',
  7: 'Vanskelige desimaltall'
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

  // Generate problems for a specific module
  const generateModuleProblems = (moduleNumber: ModuleType, count: number): TestProblem[] => {
    const problems: TestProblem[] = [];
    const moduleName = MODULE_NAMES[moduleNumber];

    for (let i = 0; i < count; i++) {
      let expression: string;
      let answer: number;

      switch (moduleNumber) {
        case 1: {
          // Module 1: Basic operations with negative numbers
          const type = Math.floor(Math.random() * 3);

          if (type === 0) {
            // Simple subtraction giving negative result
            const b = Math.floor(Math.random() * 10) + 1;
            const a = Math.floor(Math.random() * b);
            answer = a - b;
            expression = `${a} − ${b} = `;
          } else if (type === 1) {
            // Negative minus or plus positive
            const a = -(Math.floor(Math.random() * 50) + 1);
            const b = Math.floor(Math.random() * 50) + 1;
            const isSubtraction = Math.random() < 0.5;

            if (isSubtraction) {
              answer = a - b;
              expression = `${a} − ${b} = `;
            } else {
              answer = a + b;
              expression = `${a} + ${b} = `;
            }
          } else {
            // Multiple operations
            const a = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 100) + 1);
            const b = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 100) + 1);
            const op = Math.random() < 0.5 ? '+' : '−';

            if (op === '+') {
              answer = a + b;
              expression = `${a} + ${Math.abs(b)} = `;
            } else {
              answer = a - Math.abs(b);
              expression = `${a} − ${Math.abs(b)} = `;
            }
          }
          break;
        }

        case 2: {
          // Module 2: Find missing numbers in equations
          const result = -(Math.floor(Math.random() * 50) + 1);
          const known = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 50) + 1);
          const isSubtraction = Math.random() < 0.5;
          const blankPosition = Math.floor(Math.random() * 2);

          if (blankPosition === 0) {
            if (isSubtraction) {
              answer = result + known;
              expression = `___ − ${known} = ${result}`;
            } else {
              answer = result - known;
              expression = `___ + ${known} = ${result}`;
            }
          } else {
            if (isSubtraction) {
              answer = known - result;
              expression = `${known} − ___ = ${result}`;
            } else {
              answer = result - known;
              expression = `${known} + ___ = ${result}`;
            }
          }
          break;
        }

        case 3: {
          // Module 3: Multiplication with negative numbers
          const type = Math.floor(Math.random() * 3);

          if (type === 0) {
            // Simple multiplication
            const a = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 12) + 1);
            const b = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 12) + 1);
            answer = a * b;
            expression = `${a} · ${b} = `;
          } else if (type === 1) {
            // Negation
            const negNum = -(Math.floor(Math.random() * 20) + 1);
            answer = -negNum;
            expression = `−(${negNum}) = `;
          } else {
            // Triple multiplication
            const a = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 5) + 2);
            const b = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 5) + 2);
            const c = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 5) + 2);
            answer = a * b * c;
            expression = `${a} · ${b} · ${c} = `;
          }
          break;
        }

        case 4: {
          // Module 4: Order of operations - simplified to check only final answer
          const a = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 10) + 1);
          const b = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 10) + 1);
          const c = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 20) + 1);
          const isAddition = Math.random() < 0.5;
          const multiplyFirst = Math.random() < 0.5;

          if (multiplyFirst) {
            const product = a * b;
            if (isAddition) {
              answer = product + c;
              expression = `${a} · ${b} + ${c} = `;
            } else {
              answer = product - c;
              expression = `${a} · ${b} − ${c} = `;
            }
          } else {
            const product = b * c;
            if (isAddition) {
              answer = a + product;
              expression = `${a} + ${b} · ${c} = `;
            } else {
              answer = a - product;
              expression = `${a} − ${b} · ${c} = `;
            }
          }
          break;
        }

        case 5: {
          // Module 5: Division with negative numbers - simplified to check only final answer
          const divisor = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 11) + 2);
          const quotient = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 20) + 2);
          const dividend = divisor * quotient;
          answer = quotient;
          expression = `${dividend} ÷ ${divisor} = `;
          break;
        }

        case 6: {
          // Module 6: Decimals with negative numbers
          const type = Math.floor(Math.random() * 3);

          if (type === 0) {
            // Simple subtraction with decimals
            const a = (Math.floor(Math.random() * 50) + 10) / 10;
            const b = (Math.floor(Math.random() * 50) + 10) / 10;
            answer = parseFloat((a - b).toFixed(1));
            expression = `${a} − ${b} = `;
          } else if (type === 1) {
            // Negative numbers with decimals
            const a = -(Math.floor(Math.random() * 60) + 10) / 10;
            const b = (Math.floor(Math.random() * 60) + 10) / 10;
            const isSubtraction = Math.random() < 0.5;

            if (isSubtraction) {
              answer = parseFloat((a - b).toFixed(1));
              expression = `${a} − ${b} = `;
            } else {
              answer = parseFloat((a + b).toFixed(1));
              expression = `${a} + ${b} = `;
            }
          } else {
            // Multiple operations with decimals
            const a = -(Math.floor(Math.random() * 50) + 10) / 10;
            const b = (Math.floor(Math.random() * 50) + 10) / 10;
            const c = (Math.floor(Math.random() * 50) + 10) / 10;
            answer = parseFloat((a - b - c).toFixed(1));
            expression = `${a} − ${b} − ${c} = `;
          }
          break;
        }

        case 7: {
          // Module 7: Difficult decimals
          const type = Math.floor(Math.random() * 3);

          if (type === 0) {
            // Simple subtraction with 2 decimals
            const a = (Math.floor(Math.random() * 300) + 100) / 100;
            const b = (Math.floor(Math.random() * 300) + 100) / 100;
            answer = parseFloat((a - b).toFixed(2));
            expression = `${a} − ${b} = `;
          } else if (type === 1) {
            // Negative minus positive
            const a = -(Math.floor(Math.random() * 300) + 100) / 100;
            const b = (Math.floor(Math.random() * 300) + 100) / 100;
            answer = parseFloat((a - b).toFixed(2));
            expression = `${a} − ${b} = `;
          } else {
            // Negative plus positive
            const a = -(Math.floor(Math.random() * 300) + 100) / 100;
            const b = (Math.floor(Math.random() * 300) + 100) / 100;
            answer = parseFloat((a + b).toFixed(2));
            expression = `${a} + ${b} = `;
          }
          break;
        }

        default:
          expression = '0 = ';
          answer = 0;
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

    // Generate 2-3 problems per module (total ~20 problems)
    const problemCounts = [3, 3, 3, 2, 3, 3, 3]; // Module 1-7

    for (let moduleNum = 1; moduleNum <= 7; moduleNum++) {
      const moduleProblems = generateModuleProblems(moduleNum as ModuleType, problemCounts[moduleNum - 1]);
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
    setStartTime(Date.now());
    setProblemStartTime(Date.now());
    setShowResults(false);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleInputChange = (value: string) => {
    // Allow negative numbers, decimals (with period or comma)
    const cleaned = value.replace(',', '.');
    if (!/^-?\d*\.?\d*$/.test(cleaned)) return;

    const newProblems = [...testProblems];
    newProblems[currentIndex].userAnswer = cleaned;
    setTestProblems(newProblems);

    // Auto-advance to next problem when correct answer is entered
    const currentProblem = newProblems[currentIndex];
    const userAnswer = parseFloat(cleaned);

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
          // Last problem - finish test
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
    const userAnswer = parseFloat(newValue);
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

  const addComma = () => {
    const currentProblem = testProblems[currentIndex];
    if (!currentProblem || currentProblem.userAnswer.includes('.')) return;

    const newProblems = [...testProblems];
    newProblems[currentIndex].userAnswer = currentProblem.userAnswer + '.';
    setTestProblems(newProblems);
    inputRef.current?.focus();
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
      isCorrect: parseFloat(problem.userAnswer) === problem.answer
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

    // Save results to localStorage
    const result = {
      date: new Date().toISOString(),
      totalProblems: problems.length,
      correct: checkedProblems.filter(p => p.isCorrect).length,
      moduleStats: statsArray
    };

    const savedResults = JSON.parse(localStorage.getItem('gh-negative-tall-test-results') || '[]');
    savedResults.push(result);
    localStorage.setItem('gh-negative-tall-test-results', JSON.stringify(savedResults));
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
          {currentProblem.expression.includes('___') ? (
            // For modules with ___: Replace ___ with input field
            currentProblem.expression.split('___').map((part, index, array) => (
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
                      inputMode="decimal"
                      value={currentProblem.userAnswer}
                      onChange={(e) => handleInputChange(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-32 h-16 text-center text-4xl md:text-5xl font-mono border-4 border-blue-300 focus:border-blue-500"
                      disabled={!isActive}
                      autoFocus
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addComma}
                      disabled={!isActive}
                      className="h-16 w-16 text-2xl font-mono shrink-0"
                    >
                      ,
                    </Button>
                  </div>
                )}
              </React.Fragment>
            ))
          ) : (
            // For modules without ___: Show expression and separate input field
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
                  inputMode="decimal"
                  value={currentProblem.userAnswer}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-32 h-16 text-center text-4xl md:text-5xl font-mono border-4 border-blue-300 focus:border-blue-500"
                  disabled={!isActive}
                  autoFocus
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={addComma}
                  disabled={!isActive}
                  className="h-16 w-16 text-2xl font-mono shrink-0"
                >
                  ,
                </Button>
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
                <BreadcrumbLink href="/hoderegning/gh-negative-tall-regnerekkefolge">GH Negative tall og Regnerekkefølge</BreadcrumbLink>
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
              20 oppgaver fra alle 7 modulene. Finn ut hvilke områder du bør øve mer på!
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
                  <p>Denne testen gir deg en god oversikt over dine ferdigheter i negative tall og regnerekkefølge:</p>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li><strong>20 oppgaver totalt</strong> - fra alle 7 modulene</li>
                    <li><strong>Blandet rekkefølge</strong> - oppgavene kommer i tilfeldig rekkefølge</li>
                    <li><strong>Detaljert rapport</strong> - se hvilke moduler du mestrer og hvilke du bør øve mer på</li>
                    <li><strong>Tidsregistrering</strong> - se hvor lang tid du bruker på hver type oppgave</li>
                  </ul>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-3">Moduler som testes:</h3>
                    <div className="grid grid-cols-1 gap-2 text-sm">
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
                    <Link href="/hoderegning/gh-negative-tall-regnerekkefolge">
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

                          <Link href="/hoderegning/gh-negative-tall-regnerekkefolge">
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
