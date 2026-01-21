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

type ModuleType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

const MODULE_NAMES: Record<ModuleType, string> = {
  1: 'Tallfølger',
  2: 'Tallfølger +',
  3: 'Avanserte tallfølger',
  4: 'Ganging',
  5: 'Blandet regning',
  6: 'Gangestykke',
  7: 'Multiplikasjon 10/100/1000',
  8: 'Gangestykke med 10',
  9: 'Ganging med 5',
  10: 'Gangestykke med 5',
  11: 'Høyere tall',
  12: 'Ganging 6-14',
  13: 'Kvadratrøtter',
  14: 'Store tall',
  15: 'To-sifret ganging'
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
          // Tallfølger - simple number sequences
          const start = Math.floor(Math.random() * 10) + 1;
          const step = Math.floor(Math.random() * 5) + 1;
          const position = Math.floor(Math.random() * 5) + 2; // Position 2-6
          answer = start + position * step;
          const seq = Array.from({ length: 3 }, (_, j) => start + j * step);
          expression = `${seq.join(', ')}, ..., ${start + (position + 1) * step} → `;
          break;
        }

        case 2: {
          // Tallfølger + - more complex sequences
          const start = Math.floor(Math.random() * 50) + 10;
          const step = Math.floor(Math.random() * 10) + 2;
          const isDecreasing = Math.random() < 0.4;
          const actualStep = isDecreasing ? -step : step;
          const position = Math.floor(Math.random() * 4) + 2;
          answer = start + position * actualStep;
          expression = `Tallfølge med start ${start} og steglengde ${Math.abs(actualStep)}${isDecreasing ? ' (synkende)' : ''}, posisjon ${position + 1}: `;
          break;
        }

        case 3: {
          // Avanserte tallfølger - advanced sequences
          const start = Math.floor(Math.random() * 26) + 5;
          const step = Math.floor(Math.random() * 7) + 2;
          const position = Math.floor(Math.random() * 5) + 3;
          answer = start + position * step;
          const seq = [start, start + step * 2];
          expression = `${seq.join(', ')}, ..., posisjon ${position + 1}: `;
          break;
        }

        case 4: {
          // Ganging - basic multiplication
          const smallNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
          const a = smallNumbers[Math.floor(Math.random() * smallNumbers.length)];
          const b = smallNumbers[Math.floor(Math.random() * smallNumbers.length)];
          answer = a * b;
          expression = `${a} · ${b} = `;
          break;
        }

        case 5: {
          // Blandet regning - mixed operations
          const type = Math.floor(Math.random() * 2);
          if (type === 0) {
            const a = Math.floor(Math.random() * 8) + 2;
            const b = Math.floor(Math.random() * 10) + 1;
            answer = a * a + b;
            expression = `${a} · ${a} + ${b} = `;
          } else {
            const a = Math.floor(Math.random() * 8) + 2;
            const b = Math.floor(Math.random() * (a * a - 1)) + 1;
            answer = a * a - b;
            expression = `${a} · ${a} - ${b} = `;
          }
          break;
        }

        case 6: {
          // Gangestykke - simplified to single answer
          const base = Math.floor(Math.random() * 8) + 2;
          const cleanMultiplier = Math.floor(Math.random() * 8) + 2;
          answer = base * (cleanMultiplier + 1);
          expression = `${base} · ${cleanMultiplier} + ${base} = `;
          break;
        }

        case 7: {
          // Multiplikasjon 10/100/1000
          const multipliers = [10, 100, 1000];
          const multiplier = multipliers[Math.floor(Math.random() * multipliers.length)];
          let a: number;
          if (multiplier === 10) {
            a = Math.floor(Math.random() * 90) + 10;
          } else if (multiplier === 100) {
            a = Math.floor(Math.random() * 90) + 10;
          } else {
            a = Math.floor(Math.random() * 900) + 100;
          }
          answer = a * multiplier;
          expression = `${a} · ${multiplier} = `;
          break;
        }

        case 8: {
          // Gangestykke med 10 - simplified to single answer
          const base = Math.floor(Math.random() * 10) + 2;
          const b = Math.floor(Math.random() * 10) + 1;
          answer = 10 * base + base * b;
          expression = `10 · ${base} + ${base} · ${b} = `;
          break;
        }

        case 9: {
          // Ganging med 5
          const other = Math.floor(Math.random() * 30) + 1;
          answer = 5 * other;
          const swapOrder = Math.random() > 0.5;
          expression = swapOrder ? `${other} · 5 = ` : `5 · ${other} = `;
          break;
        }

        case 10: {
          // Gangestykke med 5 - simplified to single answer
          const multiplier = Math.floor(Math.random() * 20) + 2;
          answer = 5 * multiplier + 5;
          expression = `5 · ${multiplier} + 5 = `;
          break;
        }

        case 11: {
          // Høyere tall - simplified to single answer
          const base = Math.floor(Math.random() * 5) + 11;
          const multiplier = Math.floor(Math.random() * 5) + 11;
          answer = base * multiplier + base;
          expression = `${base} · ${multiplier} + ${base} = `;
          break;
        }

        case 12: {
          // Ganging 6-14
          const a = Math.floor(Math.random() * 9) + 6;
          const b = Math.floor(Math.random() * 9) + 6;
          answer = a * b;
          expression = `${a} · ${b} = `;
          break;
        }

        case 13: {
          // Kvadratrøtter
          const perfectSquares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
          const type = Math.floor(Math.random() * 3);
          if (type === 0) {
            const square = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
            answer = Math.sqrt(square);
            expression = `√${square} = `;
          } else if (type === 1) {
            const square = perfectSquares[Math.floor(Math.random() * Math.min(10, perfectSquares.length))];
            const add = Math.floor(Math.random() * 20) + 1;
            answer = Math.sqrt(square) + add;
            expression = `√${square} + ${add} = `;
          } else {
            const square = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
            const sqrt = Math.sqrt(square);
            const sub = Math.floor(Math.random() * sqrt);
            answer = sqrt - sub;
            expression = `√${square} - ${sub} = `;
          }
          break;
        }

        case 14: {
          // Store tall
          const type = Math.floor(Math.random() * 3);
          if (type === 0) {
            const small = Math.floor(Math.random() * 9) + 2;
            const tens = (Math.floor(Math.random() * 9) + 1) * 10;
            answer = small * tens;
            expression = Math.random() > 0.5 ? `${small} · ${tens} = ` : `${tens} · ${small} = `;
          } else if (type === 1) {
            const tens1 = (Math.floor(Math.random() * 9) + 1) * 10;
            const tens2 = (Math.floor(Math.random() * 9) + 1) * 10;
            answer = tens1 * tens2;
            expression = `${tens1} · ${tens2} = `;
          } else {
            const hundreds = (Math.floor(Math.random() * 9) + 1) * 100;
            const tens = (Math.floor(Math.random() * 9) + 1) * 10;
            answer = hundreds * tens;
            expression = Math.random() > 0.5 ? `${hundreds} · ${tens} = ` : `${tens} · ${hundreds} = `;
          }
          break;
        }

        case 15: {
          // To-sifret ganging
          const small = Math.floor(Math.random() * 7) + 3;
          const twoDigit = Math.floor(Math.random() * 70) + 20;
          answer = small * twoDigit;
          const swapOrder = Math.random() > 0.5;
          expression = swapOrder ? `${twoDigit} · ${small} = ` : `${small} · ${twoDigit} = `;
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
    // Generate 2 problems per module (15 modules × 2 = 30 problems)
    for (let moduleNum = 1; moduleNum <= 15; moduleNum++) {
      const moduleProblems = generateModuleProblems(moduleNum as ModuleType, 2);
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
          // Record time taken for this problem
          const timeTaken = problemStartTime ? Date.now() - problemStartTime : 0;
          newProblems[currentIndex].timeTaken = timeTaken;
          setTestProblems(newProblems);

          setCurrentIndex(currentIndex + 1);
          setProblemStartTime(Date.now());

          // Clear the input for next problem
          const resetProblems = [...newProblems];
          resetProblems[currentIndex + 1].userAnswer = '';
          setTestProblems(resetProblems);
        } else {
          // Last problem - finish test
          finishTest();
        }
      }, 300);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      nextProblem();
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

      // Needs practice if: < 67% correct OR avg time > 8 seconds (adjusted for complexity)
      stat.needsPractice = (stat.correct / stat.total < 0.67) || (stat.avgTime > 8000);

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
    localStorage.setItem('gh-tallfolgere-test-results', JSON.stringify({
      date: new Date().toISOString(),
      problems: checkedProblems,
      stats: statsArray
    }));
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

        <div className="text-4xl md:text-6xl font-mono font-bold flex items-center justify-center gap-4 flex-wrap">
          <span>{currentProblem.expression}</span>
          <Input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            value={currentProblem.userAnswer}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-32 h-20 text-center text-4xl md:text-6xl font-mono border-4 border-blue-300 focus:border-blue-500"
            disabled={!isActive}
            autoFocus
          />
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
                <BreadcrumbLink href="/hoderegning/gh-tallfolgere-ganging-kvadratrot">GH Tallfølger, ganging og kvadratrot</BreadcrumbLink>
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
              <h1 className="text-4xl font-bold">Test deg selv - GH Tallfølger, ganging og kvadratrot</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              30 oppgaver fra alle 15 modulene. Finn ut hvilke områder du bør øve mer på!
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
                  <p>Denne testen gir deg en god oversikt over dine ferdigheter i tallfølger, ganging og kvadratrøtter:</p>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li><strong>30 oppgaver totalt</strong> - 2 fra hver av de 15 modulene</li>
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
                    <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot">
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

                          <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot">
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
