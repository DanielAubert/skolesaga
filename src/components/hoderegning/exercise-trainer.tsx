'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check, X, ArrowRight, RotateCcw, Home, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { LatexRenderer } from '@/components/textbook/latex-renderer';
import { validateExpressionAnswer, areEquivalent } from '@/lib/math-engine/parser';
import { incrementProblems } from '@/lib/hoderegning/stats';
import { StatsCounter } from '@/components/hoderegning/stats-counter';
import type { HoderegningExercise } from '@/lib/data/hoderegning-exercises';

interface Problem {
  id: number;
  label: string;
  expression: string;
  answer?: number;
  expressionAnswer?: string | string[];
  userAnswer: string;
  isCorrect: boolean | null;
}

interface ExerciseTrainerProps {
  exercise: HoderegningExercise;
  moduleId: string;
  moduleName: string;
  backLink: string;
}

export function HoderegningExerciseTrainer({ exercise, moduleName, backLink }: ExerciseTrainerProps) {
  // Convert subtasks to problems
  const initialProblems: Problem[] = exercise.subTasks.map((st, idx) => {
    const answer = st.answer;
    return {
      id: idx + 1,
      label: st.label,
      expression: st.task.replace(/^\$/, '').replace(/\$$/, ''),
      answer,
      expressionAnswer: st.expressionAnswer,
      userAnswer: '',
      isCorrect: null,
    };
  });

  const [problems, setProblems] = useState<Problem[]>(initialProblems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentProblem = problems[currentIndex];
  const isAlgebraic = currentProblem?.expressionAnswer !== undefined;
  const isEquation = currentProblem?.expression?.includes('=') || false;

  // Focus input when problem changes
  useEffect(() => {
    if (!isComplete) {
      inputRef.current?.focus();
    }
  }, [currentIndex, isComplete]);

  const handleInputChange = useCallback((value: string) => {
    setWrongAnswer(false);
    setProblems(prev => prev.map((p, i) =>
      i === currentIndex ? { ...p, userAnswer: value } : p
    ));
  }, [currentIndex]);

  const checkAnswer = useCallback(() => {
    const problem = problems[currentIndex];
    const userAnswer = problem.userAnswer.trim();

    if (!userAnswer) return;

    let correct = false;

    if (isAlgebraic && problem.expressionAnswer) {
      // Check algebraic answer
      const possibleAnswers = Array.isArray(problem.expressionAnswer)
        ? problem.expressionAnswer
        : [problem.expressionAnswer];

      correct = possibleAnswers.some(ans => {
        const validation = validateExpressionAnswer(userAnswer, ans);
        if (validation.isCorrect) return true;
        return areEquivalent(userAnswer, ans);
      });
    } else if (problem.answer !== undefined) {
      // Check numeric answer
      const numericAnswer = parseFloat(userAnswer.replace(',', '.'));
      correct = !isNaN(numericAnswer) && Math.abs(numericAnswer - problem.answer) < 0.001;
    }

    setProblems(prev => prev.map((p, i) =>
      i === currentIndex ? { ...p, isCorrect: correct } : p
    ));

    if (correct) {
      incrementProblems();
      setCorrectCount(prev => prev + 1);

      // Move to next problem after delay
      setTimeout(() => {
        if (currentIndex < problems.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setIsComplete(true);
        }
      }, 500);
    } else {
      setWrongAnswer(true);
      // Shake animation handled by CSS
      setTimeout(() => setWrongAnswer(false), 500);
    }
  }, [currentIndex, problems, isAlgebraic]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  }, [checkAnswer]);

  const skipProblem = useCallback(() => {
    if (currentIndex < problems.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, problems.length]);

  const goToProblem = useCallback((idx: number) => {
    if (idx <= currentIndex || problems[idx].isCorrect !== null) {
      setCurrentIndex(idx);
    }
  }, [currentIndex, problems]);

  const restart = useCallback(() => {
    setProblems(initialProblems);
    setCurrentIndex(0);
    setIsComplete(false);
    setCorrectCount(0);
    setWrongAnswer(false);
  }, [initialProblems]);

  if (isComplete) {
    const percentage = Math.round((correctCount / problems.length) * 100);
    return (
      <Card className="max-w-lg mx-auto">
        <CardContent className="p-8 text-center space-y-6">
          <div className="text-6xl">
            {percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '💪'}
          </div>
          <h2 className="text-2xl font-bold">Oppgave fullført!</h2>
          <p className="text-lg text-muted-foreground">
            Du fikk {correctCount} av {problems.length} riktig ({percentage}%)
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={restart} variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" />
              Prøv igjen
            </Button>
            <Link href={backLink}>
              <Button>
                <Home className="mr-2 h-4 w-4" />
                Tilbake
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href={backLink} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          <span>{moduleName}</span>
        </Link>
        <StatsCounter className="text-sm" />
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 flex-wrap">
        {problems.map((problem, idx) => {
          const isActive = idx === currentIndex;
          const bgColor = problem.isCorrect === true
            ? 'bg-green-500 text-white'
            : problem.isCorrect === false
              ? 'bg-red-500 text-white'
              : isActive
                ? 'bg-blue-500 text-white'
                : 'bg-muted text-muted-foreground';
          const ringColor = isActive ? 'ring-2 ring-blue-500 ring-offset-2' : '';

          return (
            <button
              key={problem.id}
              onClick={() => goToProblem(idx)}
              disabled={!isActive && problem.isCorrect === null && idx > currentIndex}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${bgColor} ${ringColor} transition-all cursor-pointer disabled:cursor-not-allowed`}
            >
              {problem.label}
            </button>
          );
        })}
      </div>

      {/* Current problem badge */}
      <Badge variant="outline" className="mx-auto block w-fit text-base px-4 py-2">
        Deloppgave {currentProblem.label} av {problems.length}
      </Badge>

      {/* Problem display */}
      <Card className={`${wrongAnswer ? 'animate-shake border-red-500' : ''}`}>
        <CardContent className="p-8 text-center space-y-6">
          {isEquation ? (
            // Equation format: equation on one line, x = [input] below
            <>
              <div className="text-3xl md:text-5xl font-mono font-bold">
                <LatexRenderer content={`$${currentProblem.expression}$`} />
              </div>
              <div className="text-3xl md:text-5xl font-mono font-bold flex items-center justify-center gap-4">
                <span>x =</span>
                <Input
                  ref={inputRef}
                  type="text"
                  inputMode={isAlgebraic ? 'text' : 'numeric'}
                  value={currentProblem.userAnswer}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`w-32 h-16 text-center text-3xl font-mono border-2 ${
                    wrongAnswer
                      ? 'border-red-500 bg-red-50 dark:bg-red-950/30'
                      : currentProblem.isCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                        : 'border-blue-300 focus:border-blue-500'
                  }`}
                  placeholder="?"
                />
              </div>
            </>
          ) : (
            // Regular format: expression = [input]
            <div className="text-3xl md:text-5xl font-mono font-bold flex items-center justify-center gap-4 flex-wrap">
              <span className="inline-block">
                <LatexRenderer content={`$${currentProblem.expression}$`} />
              </span>
              <span>=</span>
              <Input
                ref={inputRef}
                type="text"
                inputMode={isAlgebraic ? 'text' : 'numeric'}
                value={currentProblem.userAnswer}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`w-32 md:w-40 h-14 md:h-16 text-center text-2xl md:text-3xl font-mono border-2 ${
                  wrongAnswer
                    ? 'border-red-500 bg-red-50 dark:bg-red-950/30'
                    : currentProblem.isCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                      : 'border-blue-300 focus:border-blue-500'
                }`}
                placeholder={isAlgebraic ? 'x^2' : '?'}
              />
            </div>
          )}

          {/* Feedback */}
          {currentProblem.isCorrect === true && (
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Check className="h-6 w-6" />
              <span className="font-medium">Riktig!</span>
            </div>
          )}
          {wrongAnswer && (
            <div className="flex items-center justify-center gap-2 text-red-600">
              <X className="h-6 w-6" />
              <span className="font-medium">Prøv igjen</span>
            </div>
          )}

          {/* Hints */}
          {exercise.hints && exercise.hints.length > 0 && wrongAnswer && (
            <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
              <strong>Hint:</strong> <LatexRenderer content={exercise.hints[0]} />
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <Button onClick={checkAnswer} disabled={!currentProblem.userAnswer.trim()}>
              Sjekk svar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" onClick={skipProblem}>
              Hopp over
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
