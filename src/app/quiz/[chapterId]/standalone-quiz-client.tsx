'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { LatexRenderer } from '@/components/textbook/latex-renderer';
import {
  ArrowLeft,
  RefreshCw,
  ArrowRight,
  Trophy,
  BookCheck,
  CheckCircle2,
  XCircle,
  Home,
} from 'lucide-react';
import type { QuizQuestion } from '@/lib/data/quiz-data';

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface QuizProblem {
  id: number;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
  userAnswer?: number;
  isCorrect?: boolean;
}

interface StandaloneQuizClientProps {
  chapterId: string;
  subjectName: string;
  gradeName: string;
  chapterName: string;
  questions: QuizQuestion[];
}

export function StandaloneQuizClient({
  chapterId,
  subjectName,
  gradeName,
  chapterName,
  questions,
}: StandaloneQuizClientProps) {
  const [problems, setProblems] = useState<QuizProblem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  // Create shuffled problems from questions
  const createProblems = (): QuizProblem[] => {
    // Shuffle the questions and take up to 10
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);

    return shuffledQuestions.map((q, idx) => {
      // Shuffle options (first is always correct)
      const shuffledOptions = shuffleArray(q.options);
      const correctIndex = shuffledOptions.indexOf(q.options[0]);

      return {
        id: idx + 1,
        question: q.question,
        options: shuffledOptions,
        correctOptionIndex: correctIndex,
        explanation: q.explanation,
      };
    });
  };

  // Initialize problems on mount
  useEffect(() => {
    if (questions.length > 0) {
      const newProblems = createProblems();
      setProblems(newProblems);
      setCurrentIndex(0);
      setShowResults(false);
      setScore(0);
      setShowExplanation(false);
    }
    setIsInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentProblem = problems[currentIndex];

  // Handle option click
  const handleOptionClick = (optionIndex: number) => {
    if (!currentProblem || currentProblem.userAnswer !== undefined) return;

    const isCorrect = optionIndex === currentProblem.correctOptionIndex;

    setProblems(prev => {
      const updated = [...prev];
      updated[currentIndex] = {
        ...updated[currentIndex],
        userAnswer: optionIndex,
        isCorrect,
      };
      return updated;
    });

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setShowExplanation(true);
  };

  // Go to next question
  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < problems.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  // Restart quiz
  const handleRestart = () => {
    const newProblems = createProblems();
    setProblems(newProblems);
    setCurrentIndex(0);
    setShowResults(false);
    setScore(0);
    setShowExplanation(false);
  };

  // Show loading state
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Laster quiz...</div>
      </div>
    );
  }

  // No questions available
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <TextbookHeader />
        <div className="container mx-auto px-4 py-12 text-center">
          <BookCheck className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Ingen quiz tilgjengelig</h1>
          <p className="text-muted-foreground mb-6">
            Det finnes ingen quiz for dette kapittelet ennå.
          </p>
          <Link href="/quiz">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tilbake til quizoversikt
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Show results
  if (showResults) {
    const percentage = Math.round((score / problems.length) * 100);
    let message = '';
    let emoji = '';

    if (percentage === 100) {
      message = 'Perfekt! Du mestrer dette stoffet!';
      emoji = '🏆';
    } else if (percentage >= 80) {
      message = 'Veldig bra! Du har god kontroll!';
      emoji = '🌟';
    } else if (percentage >= 60) {
      message = 'Bra jobbet! Fortsett å øve!';
      emoji = '👍';
    } else if (percentage >= 40) {
      message = 'Du er på rett vei! Les gjennom stoffet en gang til.';
      emoji = '📚';
    } else {
      message = 'Ikke gi opp! Prøv å lese kapittelet grundigere.';
      emoji = '💪';
    }

    return (
      <div className="min-h-screen bg-background">
        <TextbookHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Back link */}
            <Link
              href="/quiz"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Tilbake til quizoversikt
            </Link>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-8 text-center text-white">
                <div className="text-6xl mb-4">{emoji}</div>
                <Trophy className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h1 className="text-3xl font-bold mb-2">Quiz fullført!</h1>
                <p className="text-white/80">{subjectName} {gradeName} - {chapterName}</p>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Score */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-foreground mb-2">
                    {score} / {problems.length}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {percentage}% riktig
                  </div>
                  <p className="mt-4 text-foreground font-medium">{message}</p>
                </div>

                {/* Question summary */}
                <div className="space-y-2">
                  <h3 className="font-medium text-sm text-muted-foreground">Oppsummering</h3>
                  <div className="flex flex-wrap gap-2">
                    {problems.map((problem, idx) => (
                      <Badge
                        key={idx}
                        variant={problem.isCorrect ? 'default' : 'destructive'}
                        className="text-xs"
                      >
                        {problem.isCorrect ? (
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                        ) : (
                          <XCircle className="w-3 h-3 mr-1" />
                        )}
                        Spm {idx + 1}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleRestart} className="flex-1">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Prøv igjen
                  </Button>
                  <Link href="/quiz" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Home className="w-4 h-4 mr-2" />
                      Flere quizer
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Show quiz question
  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link
            href="/quiz"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Tilbake til quizoversikt
          </Link>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <BookCheck className="w-4 h-4" />
              <span>{subjectName} {gradeName}</span>
              <span>·</span>
              <span>{chapterName}</span>
            </div>
            <h1 className="text-2xl font-bold">Test deg selv</h1>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">
                Spørsmål {currentIndex + 1} av {problems.length}
              </span>
              <span className="font-medium text-green-600">
                {score} riktige
              </span>
            </div>
            <Progress value={((currentIndex + 1) / problems.length) * 100} className="h-2" />
          </div>

          {/* Question card */}
          {currentProblem && (
            <Card>
              <CardContent className="p-6 space-y-6">
                {/* Question */}
                <div className="text-lg font-medium">
                  <LatexRenderer content={currentProblem.question} />
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {currentProblem.options.map((option, idx) => {
                    const isSelected = currentProblem.userAnswer === idx;
                    const isCorrect = idx === currentProblem.correctOptionIndex;
                    const hasAnswered = currentProblem.userAnswer !== undefined;

                    let optionClass = 'border-border hover:border-primary hover:bg-muted/50';
                    if (hasAnswered) {
                      if (isCorrect) {
                        optionClass = 'border-green-500 bg-green-50 dark:bg-green-950/30';
                      } else if (isSelected && !isCorrect) {
                        optionClass = 'border-red-500 bg-red-50 dark:bg-red-950/30';
                      } else {
                        optionClass = 'border-border opacity-60';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(idx)}
                        disabled={hasAnswered}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${optionClass} ${!hasAnswered ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${hasAnswered && isCorrect ? 'bg-green-500 text-white' : hasAnswered && isSelected ? 'bg-red-500 text-white' : 'bg-muted'}`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-1 pt-0.5">
                            <LatexRenderer content={option} />
                          </span>
                          {hasAnswered && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          )}
                          {hasAnswered && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showExplanation && currentProblem.explanation && (
                  <div className={`p-4 rounded-lg ${currentProblem.isCorrect ? 'bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800' : 'bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800'}`}>
                    <h4 className={`font-medium mb-2 ${currentProblem.isCorrect ? 'text-green-700 dark:text-green-400' : 'text-amber-700 dark:text-amber-400'}`}>
                      {currentProblem.isCorrect ? 'Riktig!' : 'Forklaring'}
                    </h4>
                    <p className="text-sm text-foreground">
                      <LatexRenderer content={currentProblem.explanation} />
                    </p>
                  </div>
                )}

                {/* Next button */}
                {currentProblem.userAnswer !== undefined && (
                  <Button onClick={handleNext} className="w-full">
                    {currentIndex < problems.length - 1 ? (
                      <>
                        Neste spørsmål
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Se resultater
                        <Trophy className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
