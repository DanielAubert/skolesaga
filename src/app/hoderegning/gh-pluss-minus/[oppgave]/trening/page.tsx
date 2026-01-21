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
  { id: 1, name: "Grunnleggende", description: "Addisjon og subtraksjon (1-18)", gradient: "from-blue-400 to-blue-600", icon: Target },
  { id: 2, name: "Ligninger", description: "Enkle ligninger", gradient: "from-purple-400 to-purple-600", icon: Trophy },
  { id: 3, name: "Addisjon til 10", description: "Addisjon med sum til 10", gradient: "from-green-400 to-green-600", icon: Target },
  { id: 4, name: "Addisjon over 10", description: "Begge tall under 10, sum over 10", gradient: "from-orange-400 to-orange-600", icon: Target },
  { id: 5, name: "To-sifrede tall", description: "Addisjon og subtraksjon", gradient: "from-indigo-400 to-indigo-600", icon: Trophy },
  { id: 6, name: "Til nærmeste tier", description: "Til nærmeste tier", gradient: "from-pink-400 to-pink-600", icon: Trophy },
  { id: 7, name: "Addisjon uten mente", description: "Addisjon uten mente (siffer < 10)", gradient: "from-red-400 to-red-600", icon: Trophy },
  { id: 8, name: "Addisjon med mente", description: "Addisjon med mente (siffer > 10)", gradient: "from-yellow-400 to-yellow-600", icon: Brain },
  { id: 9, name: "Subtraksjon uten mente", description: "Subtraksjon uten mente", gradient: "from-cyan-400 to-cyan-600", icon: Trophy },
  { id: 10, name: "Subtraksjon med mente", description: "Subtraksjon med mente", gradient: "from-violet-400 to-violet-600", icon: Award },
];

function getModuleFromSlug(slug: string) {
  const match = slug.match(/^oppgave-(\d+)$/);
  if (!match) return null;
  const id = parseInt(match[1]);
  return currentModules.find(m => m.id === id) || null;
}

// Problem generators for each currentModule
function generateModule1Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];
  for (let i = 0; i < 15; i++) {
    const isAddition = Math.random() > 0.5;
    let a: number, b: number, answer: number;
    if (isAddition) {
      a = Math.floor(Math.random() * 10) + 1;
      b = Math.floor(Math.random() * Math.min(10, 18 - a)) + 1;
      answer = a + b;
    } else {
      a = Math.floor(Math.random() * 15) + 3;
      b = Math.floor(Math.random() * (a - 1)) + 1;
      answer = a - b;
    }
    problems.push({ id: i + 1, expression: `${a} ${isAddition ? '+' : '-'} ${b} = `, answer, userAnswer: '' });
  }
  return problems;
}

function generateModule2Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];
  for (let i = 0; i < 15; i++) {
    const isAddition = Math.random() > 0.5;
    let result: number, known: number, answer: number;
    if (isAddition) {
      result = Math.floor(Math.random() * 15) + 5;
      known = Math.floor(Math.random() * (result - 1)) + 1;
      answer = result - known;
    } else {
      known = Math.floor(Math.random() * 15) + 8;
      result = Math.floor(Math.random() * (known - 2)) + 2;
      answer = known - result;
    }
    const expression = isAddition ? `${result} = ${known} + ` : `${result} = ${known} - `;
    problems.push({ id: i + 1, expression, answer, userAnswer: '' });
  }
  return problems;
}

function generateModule3Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];
  for (let i = 0; i < 15; i++) {
    const sum = 10;
    const a = Math.floor(Math.random() * 9) + 1;
    const b = sum - a;
    const hidePosition = Math.floor(Math.random() * 3);
    let expression: string, answer: number;
    if (hidePosition === 0) { expression = `__ + ${b} = ${sum}`; answer = a; }
    else if (hidePosition === 1) { expression = `${a} + __ = ${sum}`; answer = b; }
    else { expression = `${a} + ${b} = __`; answer = sum; }
    problems.push({ id: i + 1, expression, answer, userAnswer: '' });
  }
  return problems;
}

function generateModule4Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];
  for (let i = 0; i < 15; i++) {
    let a: number, b: number, sum: number;
    do {
      a = Math.floor(Math.random() * 9) + 1;
      b = Math.floor(Math.random() * 9) + 1;
      sum = a + b;
    } while (sum <= 10);
    problems.push({ id: i + 1, expression: `${a} + ${b} = __`, answer: sum, userAnswer: '' });
  }
  return problems;
}

function generateModule5Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];
  for (let i = 0; i < 15; i++) {
    const isAddition = Math.random() > 0.5;
    let expression: string, answer: number;
    if (isAddition) {
      const tens1 = Math.floor(Math.random() * 8) + 2;
      const tens2 = Math.floor(Math.random() * 8) + 2;
      const a = tens1 * 10, b = tens2 * 10;
      answer = a + b;
      expression = `${a} + ${b} = __`;
    } else {
      const tens1 = Math.floor(Math.random() * 8) + 3;
      const tens2 = Math.floor(Math.random() * (tens1 - 1)) + 1;
      const a = tens1 * 10, b = tens2 * 10;
      answer = a - b;
      expression = `${a} - ${b} = __`;
    }
    problems.push({ id: i + 1, expression, answer, userAnswer: '' });
  }
  return problems;
}

function generateModule6Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];
  for (let i = 0; i < 15; i++) {
    const problemType = Math.floor(Math.random() * 4);
    let expression: string, answer: number;
    if (problemType === 0) {
      let startNumber: number;
      do { startNumber = Math.floor(Math.random() * 89) + 11; } while (startNumber % 10 === 0);
      const lowerTen = Math.floor(startNumber / 10) * 10;
      const upperTen = lowerTen + 10;
      const distanceToLower = startNumber - lowerTen;
      const distanceToUpper = upperTen - startNumber;
      if (distanceToLower <= distanceToUpper) { answer = distanceToLower; expression = `${startNumber} - __ = ${lowerTen}`; }
      else { answer = distanceToUpper; expression = `${startNumber} + __ = ${upperTen}`; }
    } else if (problemType === 1) {
      const targetTen = (Math.floor(Math.random() * 8) + 2) * 10;
      const startNumber = targetTen - Math.floor(Math.random() * 9) - 1;
      answer = targetTen - startNumber;
      expression = `${startNumber} + __ = ${targetTen}`;
    } else if (problemType === 2) {
      const targetTen = (Math.floor(Math.random() * 8) + 2) * 10;
      const startNumber = targetTen + Math.floor(Math.random() * 9) + 1;
      answer = startNumber - targetTen;
      expression = `${startNumber} - __ = ${targetTen}`;
    } else {
      const isAddition = Math.random() > 0.5;
      if (isAddition) {
        const targetTen = (Math.floor(Math.random() * 8) + 2) * 10;
        const firstNumber = targetTen - Math.floor(Math.random() * 9) - 1;
        const secondNumber = targetTen - firstNumber;
        answer = targetTen;
        expression = `${firstNumber} + ${secondNumber} = __`;
      } else {
        const targetTen = (Math.floor(Math.random() * 7) + 2) * 10;
        const firstNumber = targetTen + Math.floor(Math.random() * 9) + 1;
        const secondNumber = firstNumber - targetTen;
        answer = targetTen;
        expression = `${firstNumber} - ${secondNumber} = __`;
      }
    }
    problems.push({ id: i + 1, expression, answer, userAnswer: '' });
  }
  return problems;
}

function generateModule7Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];
  for (let i = 0; i < 15; i++) {
    let a: number, b: number;
    if (i < 8) {
      const a_tens = Math.floor(Math.random() * 5) + 1;
      const a_ones = Math.floor(Math.random() * 5) + 1;
      const b_tens = Math.floor(Math.random() * (9 - a_tens)) + 1;
      const b_ones = Math.floor(Math.random() * (9 - a_ones)) + 1;
      a = a_tens * 10 + a_ones;
      b = b_tens * 10 + b_ones;
    } else {
      const a_hundreds = Math.floor(Math.random() * 4) + 1;
      const a_tens = Math.floor(Math.random() * 5) + 1;
      const a_ones = Math.floor(Math.random() * 5) + 1;
      const b_hundreds = Math.floor(Math.random() * (9 - a_hundreds)) + 1;
      const b_tens = Math.floor(Math.random() * (9 - a_tens)) + 1;
      const b_ones = Math.floor(Math.random() * (9 - a_ones)) + 1;
      a = a_hundreds * 100 + a_tens * 10 + a_ones;
      b = b_hundreds * 100 + b_tens * 10 + b_ones;
    }
    problems.push({ id: i + 1, expression: `${a} + ${b} = __`, answer: a + b, userAnswer: '' });
  }
  return problems;
}

function generateModule8Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];
  for (let i = 0; i < 15; i++) {
    let a: number, b: number;
    if (i < 8) {
      let a_tens: number, a_ones: number, b_tens: number, b_ones: number;
      const carryInOnes = Math.random() > 0.5;
      if (carryInOnes) {
        a_ones = Math.floor(Math.random() * 5) + 5;
        b_ones = Math.floor(Math.random() * (10 - (10 - a_ones))) + (10 - a_ones);
        a_tens = Math.floor(Math.random() * 5) + 1;
        b_tens = Math.floor(Math.random() * 5) + 1;
      } else {
        a_ones = Math.floor(Math.random() * 9) + 1;
        b_ones = Math.floor(Math.random() * 9) + 1;
        a_tens = Math.floor(Math.random() * 4) + 5;
        b_tens = Math.floor(Math.random() * (9 - (10 - a_tens) + 1)) + (10 - a_tens);
      }
      a = a_tens * 10 + a_ones;
      b = b_tens * 10 + b_ones;
    } else {
      let a_hundreds: number, a_tens: number, a_ones: number;
      let b_hundreds: number, b_tens: number, b_ones: number;
      const carryPosition = Math.floor(Math.random() * 3);
      if (carryPosition === 0) {
        a_ones = Math.floor(Math.random() * 5) + 5;
        b_ones = Math.floor(Math.random() * (10 - (10 - a_ones))) + (10 - a_ones);
        a_tens = Math.floor(Math.random() * 5) + 1; b_tens = Math.floor(Math.random() * 5) + 1;
        a_hundreds = Math.floor(Math.random() * 3) + 1; b_hundreds = Math.floor(Math.random() * 3) + 1;
      } else if (carryPosition === 1) {
        a_ones = Math.floor(Math.random() * 9) + 1; b_ones = Math.floor(Math.random() * 9) + 1;
        a_tens = Math.floor(Math.random() * 4) + 5;
        b_tens = Math.floor(Math.random() * (9 - (10 - a_tens) + 1)) + (10 - a_tens);
        a_hundreds = Math.floor(Math.random() * 3) + 1; b_hundreds = Math.floor(Math.random() * 3) + 1;
      } else {
        a_ones = Math.floor(Math.random() * 9) + 1; b_ones = Math.floor(Math.random() * 9) + 1;
        a_tens = Math.floor(Math.random() * 5) + 1; b_tens = Math.floor(Math.random() * 5) + 1;
        a_hundreds = Math.floor(Math.random() * 3) + 5;
        b_hundreds = Math.floor(Math.random() * (9 - (10 - a_hundreds) + 1)) + (10 - a_hundreds);
      }
      a = a_hundreds * 100 + a_tens * 10 + a_ones;
      b = b_hundreds * 100 + b_tens * 10 + b_ones;
    }
    problems.push({ id: i + 1, expression: `${a} + ${b} = __`, answer: a + b, userAnswer: '' });
  }
  return problems;
}

function generateModule9Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];
  for (let i = 0; i < 15; i++) {
    let a: number, b: number;
    if (i < 8) {
      const a_tens = Math.floor(Math.random() * 6) + 3;
      const a_ones = Math.floor(Math.random() * 6) + 3;
      const b_tens = Math.floor(Math.random() * a_tens) + 1;
      const b_ones = Math.floor(Math.random() * a_ones) + 1;
      a = a_tens * 10 + a_ones;
      b = b_tens * 10 + b_ones;
    } else {
      const a_hundreds = Math.floor(Math.random() * 5) + 3;
      const a_tens = Math.floor(Math.random() * 6) + 3;
      const a_ones = Math.floor(Math.random() * 6) + 3;
      const b_hundreds = Math.floor(Math.random() * a_hundreds) + 1;
      const b_tens = Math.floor(Math.random() * a_tens) + 1;
      const b_ones = Math.floor(Math.random() * a_ones) + 1;
      a = a_hundreds * 100 + a_tens * 10 + a_ones;
      b = b_hundreds * 100 + b_tens * 10 + b_ones;
    }
    problems.push({ id: i + 1, expression: `${a} - ${b} = __`, answer: a - b, userAnswer: '' });
  }
  return problems;
}

function generateModule10Problems(): ModuleProblem[] {
  const problems: ModuleProblem[] = [];
  for (let i = 0; i < 15; i++) {
    let a: number, b: number;
    do {
      if (i < 8) {
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
          a_tens = Math.floor(Math.random() * 4) + 5;
          b_tens = Math.floor(Math.random() * 2) + a_tens + 1;
          if (b_tens > 9) b_tens = 9;
        }
        a = a_tens * 10 + a_ones;
        b = b_tens * 10 + b_ones;
      } else {
        let a_hundreds: number, a_tens: number, a_ones: number;
        let b_hundreds: number, b_tens: number, b_ones: number;
        const borrowPosition = Math.floor(Math.random() * 3);
        if (borrowPosition === 0) {
          a_ones = Math.floor(Math.random() * 4) + 1;
          b_ones = Math.floor(Math.random() * (9 - a_ones)) + a_ones + 1;
          a_tens = Math.floor(Math.random() * 4) + 5;
          b_tens = Math.floor(Math.random() * (a_tens - 1)) + 1;
          a_hundreds = Math.floor(Math.random() * 3) + 5;
          b_hundreds = Math.floor(Math.random() * (a_hundreds - 1)) + 1;
        } else if (borrowPosition === 1) {
          a_ones = Math.floor(Math.random() * 5) + 4;
          b_ones = Math.floor(Math.random() * a_ones) + 1;
          a_tens = Math.floor(Math.random() * 3) + 2;
          b_tens = Math.floor(Math.random() * 3) + a_tens + 1;
          a_hundreds = Math.floor(Math.random() * 3) + 6;
          b_hundreds = Math.floor(Math.random() * (a_hundreds - 1)) + 1;
        } else {
          a_ones = Math.floor(Math.random() * 5) + 4;
          b_ones = Math.floor(Math.random() * a_ones) + 1;
          a_tens = Math.floor(Math.random() * 4) + 5;
          b_tens = Math.floor(Math.random() * (a_tens - 1)) + 1;
          a_hundreds = Math.floor(Math.random() * 2) + 6;
          b_hundreds = Math.floor(Math.random() * 2) + a_hundreds + 1;
        }
        a = a_hundreds * 100 + a_tens * 10 + a_ones;
        b = b_hundreds * 100 + b_tens * 10 + b_ones;
      }
    } while (a <= b);
    problems.push({ id: i + 1, expression: `${a} - ${b} = __`, answer: a - b, userAnswer: '' });
  }
  return problems;
}

function generateProblems(currentModuleId: number): ModuleProblem[] {
  switch (currentModuleId) {
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
    const savedResults = localStorage.getItem('hoderegning-currentModule-results');
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
    localStorage.setItem('hoderegning-currentModule-results', JSON.stringify(updatedResults));
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
          {currentProblem.expression.includes('__') ? (
            currentProblem.expression.split('__').map((part, index, array) => (
              <React.Fragment key={index}>
                <span>{part}</span>
                {index < array.length - 1 && (
                  <Input
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    value={currentProblem.userAnswer}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`w-20 h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 text-center text-3xl md:text-5xl lg:text-6xl font-mono border-2 md:border-4 ${wrongAnswer ? 'border-red-500 bg-red-50 focus:border-red-600' : 'border-blue-300 focus:border-blue-500'}`}
                    disabled={!isActive}
                    autoFocus
                  />
                )}
              </React.Fragment>
            ))
          ) : (
            <>
              <span>{currentProblem.expression}</span>
              <Input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                value={currentProblem.userAnswer}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`w-20 h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 text-center text-3xl md:text-5xl lg:text-6xl font-mono border-2 md:border-4 ${wrongAnswer ? 'border-red-500 bg-red-50 focus:border-red-600' : 'border-blue-300 focus:border-blue-500'}`}
                disabled={!isActive}
                autoFocus
              />
            </>
          )}
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
              <BreadcrumbItem><BreadcrumbLink href="/hoderegning/gh-pluss-minus">Pluss & Minus</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href={`/hoderegning/gh-pluss-minus/${oppgaveSlug}`}>Oppgave {currentModule.id}</BreadcrumbLink></BreadcrumbItem>
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
                        <Link href={`/hoderegning/gh-pluss-minus/oppgave-${currentModule.id + 1}/trening`}>
                          Neste oppgave
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    <Button asChild variant="ghost">
                      <Link href="/hoderegning/gh-pluss-minus">
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
                          <Timer className="h-5 w-5 text-blue-600" />
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
