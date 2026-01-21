"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import React, { useState, useEffect, useRef } from "react";
import { Brain, Trophy, Timer, Target, RefreshCw, Award, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { incrementProblems } from "@/lib/hoderegning/stats";
import { StatsCounter } from "@/components/hoderegning/stats-counter";

interface ModuleProblem {
  id: number;
  expression: string;
  answer: number;
  userAnswer: string;
  isCorrect?: boolean;
}

interface ModuleResult {
  currentModuleNumber: number;
  timeElapsed: number;
  correctAnswers: number;
  totalProblems: number;
  score: number;
  date: string;
  errorCount?: number;
  errorFreeMode?: boolean;
}

const currentModules = [
  { id: 1, name: "Grunnleggende potenser", description: "Enkle potenser som 2³ og 5²", gradient: "from-amber-400 to-orange-600", icon: Target },
  { id: 2, name: "Potens ganger tall", description: "Potens multiplisert med tall", gradient: "from-orange-400 to-red-600", icon: Trophy },
  { id: 3, name: "Produkt av potenser", description: "To potenser ganget sammen", gradient: "from-red-400 to-rose-600", icon: Award },
  { id: 4, name: "Blandet potensregning", description: "Kombinasjon av alle typer", gradient: "from-rose-400 to-pink-600", icon: Brain },
];

function getModuleFromSlug(slug: string) {
  const match = slug.match(/^oppgave-(\d+)$/);
  if (!match) return null;
  const id = parseInt(match[1]);
  return currentModules.find(m => m.id === id) || null;
}

// Superscript numbers for exponents
const superscript: { [key: number]: string } = {
  0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹'
};

function toSuperscript(n: number): string {
  return n.toString().split('').map(d => superscript[parseInt(d)]).join('');
}

// Oppgave 1: Grunnleggende potenser (2³, 5², etc.)
function generateModule1Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];

  // Pre-defined combinations that work well for mental math
  // Format: [base, exponent, answer]
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
  ];

  // Shuffle and pick 15
  const shuffled = [...validCombinations].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 15);

  // If we need more, repeat some
  while (selected.length < 15) {
    selected.push(validCombinations[Math.floor(Math.random() * validCombinations.length)]);
  }

  for (let i = 0; i < 15; i++) {
    const [base, exp, answer] = selected[i];
    const expression = `${base}${toSuperscript(exp)} = `;
    problems.push({ id: i + 1, expression, answer, userAnswer: '' });
  }

  return problems;
}

// Oppgave 2: Potens ganger tall (4 · 3² = 36)
function generateModule2Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];

  // Pre-defined combinations: [multiplier, base, exponent, answer]
  const validCombinations: [number, number, number, number][] = [
    [2, 2, 2, 8], [2, 2, 3, 16], [2, 3, 2, 18], [2, 5, 2, 50],
    [3, 2, 2, 12], [3, 2, 3, 24], [3, 3, 2, 27], [3, 4, 2, 48],
    [4, 2, 2, 16], [4, 2, 3, 32], [4, 3, 2, 36], [4, 5, 2, 100],
    [5, 2, 2, 20], [5, 2, 3, 40], [5, 3, 2, 45], [5, 2, 4, 80],
    [2, 4, 2, 32], [3, 5, 2, 75], [2, 6, 2, 72], [4, 4, 2, 64],
    [6, 2, 2, 24], [7, 2, 2, 28], [8, 2, 2, 32], [9, 2, 2, 36],
    [2, 10, 2, 200], [3, 10, 2, 300], [5, 4, 2, 80],
  ];

  const shuffled = [...validCombinations].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 15);

  while (selected.length < 15) {
    selected.push(validCombinations[Math.floor(Math.random() * validCombinations.length)]);
  }

  for (let i = 0; i < 15; i++) {
    const [mult, base, exp, answer] = selected[i];
    const expression = `${mult} · ${base}${toSuperscript(exp)} = `;
    problems.push({ id: i + 1, expression, answer, userAnswer: '' });
  }

  return problems;
}

// Oppgave 3: Produkt av potenser (2² · 3² = 36)
function generateModule3Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];

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
  ];

  const shuffled = [...validCombinations].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 15);

  while (selected.length < 15) {
    selected.push(validCombinations[Math.floor(Math.random() * validCombinations.length)]);
  }

  for (let i = 0; i < 15; i++) {
    const [b1, e1, b2, e2, answer] = selected[i];
    const expression = `${b1}${toSuperscript(e1)} · ${b2}${toSuperscript(e2)} = `;
    problems.push({ id: i + 1, expression, answer, userAnswer: '' });
  }

  return problems;
}

// Oppgave 4: Blandet (kombinasjon av alle typer)
function generateModule4Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];

  // Mix of all types
  const type1 = generateModule1Problems().slice(0, 5);
  const type2 = generateModule2Problems().slice(0, 5);
  const type3 = generateModule3Problems().slice(0, 5);

  const allProblems = [...type1, ...type2, ...type3].sort(() => Math.random() - 0.5);

  for (let i = 0; i < 15; i++) {
    problems.push({ ...allProblems[i], id: i + 1 });
  }

  return problems;
}

function generateProblems(currentModuleId: number): ModuleProblem[] {
  switch (currentModuleId) {
    case 1: return generateModule1Problems();
    case 2: return generateModule2Problems();
    case 3: return generateModule3Problems();
    case 4: return generateModule4Problems();
    default: return generateModule1Problems();
  }
}

export default function TreningPage() {
  const params = useParams();
  const oppgaveSlug = params.oppgave as string;
  const currentModule = getModuleFromSlug(oppgaveSlug);

  const [currentProblems, setCurrentProblems] = useState<ModuleProblem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [results, setResults] = useState<ModuleResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [completedAnswers, setCompletedAnswers] = useState(0);
  const [errorFreeMode, setErrorFreeMode] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem('hoderegning-potenser-results');
    if (savedResults) {
      try { setResults(JSON.parse(savedResults)); } catch (e) { console.error('Error:', e); }
    }
    const savedErrorFreeMode = localStorage.getItem('hoderegning-error-free-mode');
    if (savedErrorFreeMode) setErrorFreeMode(JSON.parse(savedErrorFreeMode));
  }, []);

  useEffect(() => {
    localStorage.setItem('hoderegning-error-free-mode', JSON.stringify(errorFreeMode));
  }, [errorFreeMode]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && startTime) {
      interval = setInterval(() => setTimeElapsed(Date.now() - startTime), 100);
    }
    return () => clearInterval(interval);
  }, [isActive, startTime]);

  useEffect(() => {
    if (isActive && inputRef.current) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [currentProblemIndex, isActive]);

  if (!currentModule) {
    notFound();
  }

  const startTraining = () => {
    const problems = generateProblems(currentModule.id);
    setCurrentProblems(problems);
    setCurrentProblemIndex(0);
    setIsActive(true);
    setStartTime(Date.now());
    setTimeElapsed(0);
    setCompletedAnswers(0);
    setErrorCount(0);
    setShowResults(false);
    setIsStarted(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleInputChange = (value: string) => {
    if (!/^-?\d*$/.test(value)) return;
    const newProblems = [...currentProblems];
    newProblems[currentProblemIndex].userAnswer = value;
    setCurrentProblems(newProblems);

    const currentProblem = newProblems[currentProblemIndex];
    const userAnswer = parseInt(value);
    if (!isNaN(userAnswer) && userAnswer === currentProblem.answer) {
      incrementProblems(1);
      setTimeout(() => {
        if (currentProblemIndex < currentProblems.length - 1) {
          setCurrentProblemIndex(currentProblemIndex + 1);
          const resetProblems = [...newProblems];
          resetProblems[currentProblemIndex + 1].userAnswer = '';
          setCurrentProblems(resetProblems);
        } else {
          finishTraining();
        }
      }, 300);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') nextProblem();
  };

  const nextProblem = () => {
    if (errorFreeMode) {
      const currentProblem = currentProblems[currentProblemIndex];
      const userAnswer = parseInt(currentProblem.userAnswer);
      if (isNaN(userAnswer) || userAnswer !== currentProblem.answer) {
        setErrorCount(prev => prev + 1);
        setWrongAnswer(true);
        const newProblems = [...currentProblems];
        newProblems[currentProblemIndex].userAnswer = '';
        setCurrentProblems(newProblems);
        setTimeout(() => {
          setWrongAnswer(false);
          inputRef.current?.focus();
        }, 1000);
        return;
      }
    }
    setWrongAnswer(false);
    if (currentProblemIndex < currentProblems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
      setTimeout(() => inputRef.current?.focus(), 200);
    } else {
      finishTraining();
    }
  };

  const checkAnswers = () => {
    let correct = 0;
    const checkedProblems = currentProblems.map(problem => {
      const isCorrect = parseInt(problem.userAnswer) === problem.answer;
      if (isCorrect) correct++;
      return { ...problem, isCorrect };
    });
    setCurrentProblems(checkedProblems);
    setCompletedAnswers(correct);
    return correct;
  };

  const finishTraining = () => {
    if (!currentModule || !startTime) return;
    setIsActive(false);
    const finalTime = Date.now() - startTime;
    const correct = checkAnswers();

    const timePenaltyFactor = Math.max(0.3, 1.1 - (currentModule.id * 0.08));
    const timeAllowance = currentModule.id * 15 * 1000;
    const adjustedTime = Math.max(0, finalTime - timeAllowance);
    const timePenalty = adjustedTime * timePenaltyFactor / 100;

    const baseScore = Math.round((correct / 15) * 1000 - timePenalty);
    const errorPenalty = errorFreeMode ? errorCount * 50 : 0;
    const score = Math.max(0, baseScore - errorPenalty);

    const result: ModuleResult = {
      currentModuleNumber: currentModule.id,
      timeElapsed: finalTime,
      correctAnswers: correct,
      totalProblems: 15,
      score,
      date: new Date().toISOString(),
      errorCount: errorFreeMode ? errorCount : undefined,
      errorFreeMode
    };

    const updatedResults = [...results, result];
    setResults(updatedResults);
    localStorage.setItem('hoderegning-potenser-results', JSON.stringify(updatedResults));
    setShowResults(true);
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${seconds}.${milliseconds.toString().padStart(2, '0')}s`;
  };

  const IconComponent = currentModule.icon;

  const renderCurrentProblem = () => {
    if (!currentProblems.length || currentProblemIndex >= currentProblems.length) return null;
    const currentProblem = currentProblems[currentProblemIndex];

    return (
      <div className="text-center space-y-4 md:space-y-6">
        <Badge variant="outline" className="text-base md:text-lg px-3 py-1 md:px-4 md:py-2">
          Oppgave {currentProblemIndex + 1} av {currentProblems.length}
        </Badge>

        <div className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <span>{currentProblem.expression}</span>
          <Input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            value={currentProblem.userAnswer}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            className={`w-24 h-14 md:w-32 md:h-16 lg:w-40 lg:h-20 text-center text-3xl md:text-5xl lg:text-6xl font-mono border-2 md:border-4 ${wrongAnswer ? 'border-red-500 bg-red-50 focus:border-red-600' : 'border-amber-300 focus:border-amber-500'}`}
            disabled={!isActive}
            autoFocus
          />
        </div>

        {wrongAnswer && (
          <Badge variant="destructive" className="text-sm md:text-base lg:text-lg px-3 py-1 md:px-4 md:py-2 animate-pulse">
            Feil svar! Prøv igjen
          </Badge>
        )}

        <Button onClick={nextProblem} disabled={!isActive} size="lg">
          {currentProblemIndex < currentProblems.length - 1 ? 'Neste oppgave' : 'Fullfør'}
        </Button>
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
              <BreadcrumbItem><BreadcrumbLink href="/">Hjem</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/hoderegning">Hoderegning</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/hoderegning/gh-potenser">Potenser</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href={`/hoderegning/gh-potenser/${oppgaveSlug}`}>Oppgave {currentModule.id}</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Trening</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`rounded-lg bg-gradient-to-br ${currentModule.gradient} p-3`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">
                Oppgave {currentModule.id}: {currentModule.name}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">{currentModule.description}</p>
            <StatsCounter className="mt-4 mx-auto w-fit" />

            {!isStarted && (
              <div className="mt-6 space-y-4">
                <Button
                  variant={errorFreeMode ? "default" : "outline"}
                  onClick={() => setErrorFreeMode(!errorFreeMode)}
                  className="flex items-center gap-2"
                >
                  <Target className="h-4 w-4" />
                  {errorFreeMode ? "Feilfri modus: PÅ" : "Feilfri modus: AV"}
                </Button>
                {errorFreeMode && (
                  <p className="text-sm text-muted-foreground">Du kan kun gå videre med riktige svar</p>
                )}
              </div>
            )}
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {!isStarted ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-lg mb-6">Løs 15 oppgaver så raskt som mulig!</p>
                  <Button size="lg" onClick={startTraining} className={`bg-gradient-to-br ${currentModule.gradient}`}>
                    Start trening
                  </Button>
                </CardContent>
              </Card>
            ) : showResults ? (
              <Card>
                <CardContent className="p-6 text-center space-y-6">
                  <div className="text-4xl">🎉</div>
                  <h3 className="text-xl font-bold">Oppgave fullført!</h3>

                  <div className={`grid gap-4 max-w-md mx-auto ${errorFreeMode ? 'grid-cols-4' : 'grid-cols-3'}`}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{completedAnswers}</div>
                      <div className="text-sm text-muted-foreground">Riktige</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{formatTime(timeElapsed)}</div>
                      <div className="text-sm text-muted-foreground">Tid</div>
                    </div>
                    {errorFreeMode && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{errorCount}</div>
                        <div className="text-sm text-muted-foreground">Feil</div>
                      </div>
                    )}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {Math.max(0, Math.round((completedAnswers / 15) * 1000 - (Math.max(0, timeElapsed - (currentModule.id * 15 * 1000)) * Math.max(0.3, 1.1 - (currentModule.id * 0.08)) / 100) - (errorFreeMode ? errorCount * 50 : 0)))}
                      </div>
                      <div className="text-sm text-muted-foreground">Score</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button onClick={startTraining} variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Prøv igjen
                    </Button>
                    {currentModule.id < currentModules.length && (
                      <Button asChild>
                        <Link href={`/hoderegning/gh-potenser/oppgave-${currentModule.id + 1}/trening`}>
                          Neste oppgave
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    <Button asChild variant="ghost">
                      <Link href="/hoderegning/gh-potenser">
                        Til oversikt
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Oppgave {currentModule.id}: {currentModule.name}</CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Timer className="h-5 w-5 text-amber-600" />
                          <span className="text-xl font-mono">{formatTime(timeElapsed)}</span>
                        </div>
                        {errorFreeMode && errorCount > 0 && (
                          <Badge variant="destructive">{errorCount} feil</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 justify-center">
                      <Button onClick={finishTraining} disabled={!isActive}>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Sjekk svar
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    {renderCurrentProblem()}
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
