'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { QuizQuestion, MultipleChoiceOption } from '@/lib/types/textbook';
import { LatexRenderer } from './latex-renderer';

interface SequentialQuizExerciseProps {
  questions: QuizQuestion[];
  exerciseId: string;
  chapterId: string;
  courseId: string;
  viewingAsStudentId?: string | null;
}

interface QuestionResult {
  selectedId: string;
  isCorrect: boolean;
}

function normalizeOptions(options: (MultipleChoiceOption | string)[]): MultipleChoiceOption[] {
  return options.map((opt, index) => {
    if (typeof opt === 'string') {
      return { id: String.fromCharCode(97 + index), text: opt, isCorrect: false };
    }
    return opt;
  });
}

export function SequentialQuizExercise({
  questions,
  exerciseId,
  chapterId,
  courseId,
  viewingAsStudentId,
}: SequentialQuizExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<number, QuestionResult>>({});
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoadingState, setIsLoadingState] = useState(true);

  const isReadOnly = !!viewingAsStudentId;

  // Last lagret tilstand fra API (kun for innloggede — ellers gir API-et 401)
  const { status: authStatus } = useSession();
  useEffect(() => {
    if (authStatus === 'loading') return;
    if (authStatus !== 'authenticated') {
      setIsLoadingState(false);
      return;
    }
    const loadSaved = async () => {
      const savedResults: Record<number, QuestionResult> = {};
      let loadedCount = 0;

      for (let i = 0; i < questions.length; i++) {
        const qExerciseId = `${exerciseId}__q${i}`;
        try {
          const params = new URLSearchParams({ courseId, chapterId, exerciseId: qExerciseId });
          if (viewingAsStudentId) params.set('studentId', viewingAsStudentId);
          const res = await fetch(`/api/textbook/submissions?${params}`);
          if (res.ok) {
            const data = await res.json();
            const sub = data.submissions?.[0];
            if (sub?.content?.selectedId) {
              savedResults[i] = {
                selectedId: sub.content.selectedId,
                isCorrect: sub.is_correct || false,
              };
              loadedCount++;
            }
          }
        } catch {
          // ignore
        }
      }

      if (loadedCount > 0) {
        setResults(savedResults);
        if (loadedCount >= questions.length) {
          setIsFinished(true);
          setCurrentIndex(questions.length - 1);
        } else {
          setCurrentIndex(loadedCount);
        }
      }
      setIsLoadingState(false);
    };

    loadSaved();
  }, [exerciseId, chapterId, courseId, viewingAsStudentId, questions.length, authStatus]);

  const saveAnswer = useCallback(async (questionIndex: number, selId: string, correct: boolean) => {
    if (isReadOnly) return;
    const qExerciseId = `${exerciseId}__q${questionIndex}`;
    try {
      await fetch('/api/textbook/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          exerciseId: qExerciseId,
          chapterId,
          courseId,
          submissionType: 'multiple-choice',
          content: { selectedId: selId },
          isCorrect: correct,
        }),
      });
    } catch {
      // ignore
    }
  }, [exerciseId, chapterId, courseId, isReadOnly]);

  const handleSelect = (optionId: string) => {
    if (isChecked || isReadOnly) return;
    setSelectedId(optionId);

    // Auto-check immediately
    const q = questions[currentIndex];
    const opts = normalizeOptions(q.options);
    const correct = opts.find(o => o.id === optionId)?.isCorrect || false;

    setIsChecked(true);
    const newResult: QuestionResult = { selectedId: optionId, isCorrect: correct };
    setResults(prev => ({ ...prev, [currentIndex]: newResult }));
    saveAnswer(currentIndex, optionId, correct);
  };

  const handleNext = () => {
    const nextIdx = currentIndex + 1;
    if (nextIdx >= questions.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex(nextIdx);
      setSelectedId(null);
      setIsChecked(false);
    }
  };

  const handleRetry = () => {
    setResults({});
    setCurrentIndex(0);
    setSelectedId(null);
    setIsChecked(false);
    setIsFinished(false);
  };

  const correctCount = Object.values(results).filter(r => r.isCorrect).length;

  if (isLoadingState) {
    return (
      <div className="space-y-3 animate-pulse">
        <div className="h-4 w-32 bg-muted rounded" />
        <div className="h-6 bg-muted rounded" />
        {[1, 2, 3, 4].map(i => <div key={i} className="h-14 bg-muted rounded-lg" />)}
      </div>
    );
  }

  // Ferdig-tilstand
  if (isFinished) {
    return (
      <div className="space-y-4">
        {/* Oppsummering */}
        <div className={cn(
          'p-4 rounded-lg border-2 text-center',
          correctCount === questions.length
            ? 'border-green-300 bg-green-50 dark:bg-green-950/20 dark:border-green-700'
            : correctCount >= questions.length / 2
              ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-700'
              : 'border-red-300 bg-red-50 dark:bg-red-950/20 dark:border-red-700'
        )}>
          <p className="text-lg font-semibold">
            Du fikk {correctCount} av {questions.length} riktig!
          </p>
          {correctCount === questions.length && (
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">Perfekt!</p>
          )}
        </div>

        <Button variant="outline" size="sm" onClick={handleRetry}>
          <RotateCcw className="h-4 w-4 mr-1" />
          Prøv på nytt
        </Button>
      </div>
    );
  }

  // Aktiv quiz-visning
  const currentQuestion = questions[currentIndex];
  const currentOptions = normalizeOptions(currentQuestion.options);
  const currentResult = results[currentIndex];

  return (
    <div className="space-y-4">
      {/* Fremdrift */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground font-medium">
          Spørsmål {currentIndex + 1} av {questions.length}
        </span>
        <div className="flex gap-1 ml-auto">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                idx < currentIndex
                  ? results[idx]?.isCorrect
                    ? 'bg-green-500'
                    : 'bg-red-500'
                  : idx === currentIndex
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30'
              )}
            />
          ))}
        </div>
      </div>

      {/* Aktivt spørsmål */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <LatexRenderer content={currentQuestion.task} />
      </div>

      {/* Alternativer */}
      <div className="space-y-2">
        {currentOptions.map(option => {
          const isSelected = selectedId === option.id;
          const showCorrect = isChecked && option.isCorrect;
          const showWrong = isChecked && isSelected && !option.isCorrect;

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={isChecked}
              aria-pressed={isSelected}
              className={cn(
                'w-full text-left p-4 rounded-lg border-2 transition-all',
                'hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50',
                isSelected && !isChecked && 'border-primary bg-primary/5',
                !isSelected && !isChecked && 'border-muted',
                showCorrect && 'border-green-500 bg-green-50 dark:bg-green-950/20',
                showWrong && 'border-red-500 bg-red-50 dark:bg-red-950/20',
                isChecked && !showCorrect && !showWrong && 'opacity-50'
              )}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  {showCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : showWrong ? (
                    <XCircle className="h-5 w-5 text-red-600" />
                  ) : isSelected ? (
                    <div className="h-5 w-5 rounded-full border-2 border-primary bg-primary" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                  )}
                </div>
                <div className="flex-1 font-medium">
                  <LatexRenderer content={option.text} />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Neste-knapp (vises kun etter svar er sjekket) */}
      {isChecked && (
        <div className="flex gap-2">
          <Button onClick={handleNext}>
            {currentIndex + 1 >= questions.length ? 'Se resultat' : 'Neste spørsmål'}
          </Button>
        </div>
      )}

      {/* Løsning etter sjekk */}
      {isChecked && currentQuestion.solution && (
        <div className={cn(
          'p-3 rounded-lg border text-sm',
          currentResult?.isCorrect || results[currentIndex]?.isCorrect
            ? 'border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800'
            : 'border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800'
        )}>
          <p className="font-medium mb-1">
            {(currentResult?.isCorrect || results[currentIndex]?.isCorrect) ? 'Riktig!' : 'Forklaring:'}
          </p>
          <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
            <LatexRenderer content={currentQuestion.solution} />
          </div>
        </div>
      )}
    </div>
  );
}
