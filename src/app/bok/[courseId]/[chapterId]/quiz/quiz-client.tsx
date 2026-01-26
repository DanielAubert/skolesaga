"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, RefreshCw, ArrowRight, Trophy, BookCheck, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { LatexRenderer } from "@/components/textbook/latex-renderer";
import type { QuizQuestion } from "@/lib/data/quiz-data";

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

interface QuizClientProps {
  courseId: string;
  chapterId: string;
  courseTitle: string;
  chapterTitle: string;
  chapterNumber: string;
  questions: QuizQuestion[];
}

export function QuizClient({
  courseId,
  chapterId,
  courseTitle,
  chapterTitle,
  chapterNumber,
  questions,
}: QuizClientProps) {
  const [problems, setProblems] = useState<QuizProblem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    // Show explanation briefly
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
        <MainNav />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6 text-center">
              <BookCheck className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-2">Quiz kommer snart!</h2>
              <p className="text-muted-foreground mb-6">
                Quizen for dette kapitlet er under utvikling.
              </p>
              <Link href={`/bok/${courseId}/${chapterId}`}>
                <Button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Tilbake til kapitlet
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Save quiz result to database when showing results
  useEffect(() => {
    if (showResults && problems.length > 0) {
      const saveQuizResult = async () => {
        try {
          const answers = problems.map((p) => ({
            questionId: p.id,
            selectedOption: p.userAnswer ?? -1,
            isCorrect: p.isCorrect ?? false,
          }));

          await fetch("/api/textbook/quiz-results", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              quizId: chapterId,
              courseId,
              score,
              totalQuestions: problems.length,
              answers,
            }),
          });
        } catch (error) {
          console.error("Failed to save quiz result:", error);
        }
      };

      saveQuizResult();
    }
  }, [showResults, score, problems, chapterId, courseId]);

  // Show results screen
  if (showResults) {
    const percentage = Math.round((score / problems.length) * 100);
    const isGoodScore = percentage >= 70;

    return (
      <div className="min-h-screen bg-background">
        <MainNav />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6 text-center">
              <Trophy className={`h-20 w-20 mx-auto mb-4 ${isGoodScore ? 'text-yellow-500' : 'text-muted-foreground'}`} />
              <h2 className="text-3xl font-bold mb-2">
                {isGoodScore ? 'Bra jobba!' : 'Fortsett å øve!'}
              </h2>
              <p className="text-4xl font-bold text-primary mb-2">
                {score} / {problems.length}
              </p>
              <p className="text-xl text-muted-foreground mb-6">
                {percentage}% riktig
              </p>

              {/* Summary of answers */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {problems.map((p, idx) => (
                  <Badge
                    key={p.id}
                    variant={p.isCorrect ? "default" : "destructive"}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    {idx + 1}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleRestart} variant="default" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Prøv igjen
                </Button>
                <Link href={`/bok/${courseId}/${chapterId}`}>
                  <Button variant="outline" className="gap-2 w-full">
                    <ArrowLeft className="h-4 w-4" />
                    Tilbake til kapitlet
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNav />

      <main className="flex-1 container mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/bok">Bøker</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/bok/${courseId}`}>{courseTitle}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/bok/${courseId}/${chapterId}`}>
                {chapterNumber} {chapterTitle}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Quiz</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Progress indicator */}
        <div className="max-w-2xl mx-auto mb-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Spørsmål {currentIndex + 1} av {problems.length}</span>
            <span>{score} riktige</span>
          </div>
          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentIndex + (currentProblem?.userAnswer !== undefined ? 1 : 0)) / problems.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Quiz card */}
        <Card className="max-w-2xl mx-auto" ref={cardRef}>
          <CardContent className="pt-4 pb-4">
            {/* Question */}
            <div className="text-lg md:text-xl font-medium mb-4 text-center">
              <LatexRenderer content={currentProblem?.question || ''} />
            </div>

            {/* Options */}
            <div className="space-y-2">
              {currentProblem?.options.map((option, idx) => {
                const isSelected = currentProblem.userAnswer === idx;
                const isCorrect = idx === currentProblem.correctOptionIndex;
                const hasAnswered = currentProblem.userAnswer !== undefined;

                let buttonClass = "w-full px-4 py-2.5 text-sm md:text-base rounded-lg border-2 transition-all text-left";

                if (hasAnswered) {
                  if (isCorrect) {
                    buttonClass += " border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += " border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300";
                  } else {
                    buttonClass += " border-muted opacity-50";
                  }
                } else {
                  buttonClass += " border-muted hover:border-primary hover:bg-primary/5";
                }

                return (
                  <button
                    key={idx}
                    className={buttonClass}
                    onClick={() => handleOptionClick(idx)}
                    disabled={hasAnswered}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">
                        <LatexRenderer content={option} />
                      </span>
                      {hasAnswered && isCorrect && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && currentProblem?.explanation && (
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-xs font-medium text-blue-700 dark:text-blue-300 mb-0.5">Forklaring:</p>
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  <LatexRenderer content={currentProblem.explanation} />
                </div>
              </div>
            )}

            {/* Next button */}
            {currentProblem?.userAnswer !== undefined && (
              <div className="mt-4 flex justify-center">
                <Button onClick={handleNext} size="default" className="gap-2">
                  {currentIndex < problems.length - 1 ? (
                    <>
                      Neste spørsmål
                      <ArrowRight className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Se resultater
                      <Trophy className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Back link */}
        <div className="max-w-2xl mx-auto mt-4 text-center">
          <Link href={`/bok/${courseId}/${chapterId}`} className="text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 inline mr-1" />
            Tilbake til kapitlet
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
