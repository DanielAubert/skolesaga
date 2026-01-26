'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, XCircle, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { MultipleChoiceOption } from '@/lib/types/textbook';
import { LatexRenderer } from './latex-renderer';

interface MultipleChoiceExerciseProps {
  options?: (MultipleChoiceOption | string)[];
  exerciseId: string;
  chapterId: string;
  courseId?: string;
  viewingAsStudentId?: string | null;
  onSave?: (selectedId: string, isCorrect: boolean) => void;
}

// Normaliser options til MultipleChoiceOption-objekter
function normalizeOptions(options?: (MultipleChoiceOption | string)[]): MultipleChoiceOption[] {
  if (!options) return [];
  return options.map((opt, index) => {
    if (typeof opt === 'string') {
      return { id: String.fromCharCode(97 + index), text: opt, isCorrect: false };
    }
    return opt;
  });
}

export function MultipleChoiceExercise({
  options: rawOptions,
  exerciseId,
  chapterId,
  courseId,
  viewingAsStudentId,
  onSave,
}: MultipleChoiceExerciseProps) {
  const options = normalizeOptions(rawOptions);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Hvis vi ser som en annen elev, deaktiver interaksjon
  const isReadOnly = !!viewingAsStudentId;

  // Last lagret svar fra database
  useEffect(() => {
    const loadSavedAnswer = async () => {
      if (!courseId) {
        setIsLoading(false);
        return;
      }

      try {
        const params = new URLSearchParams({
          courseId,
          chapterId,
          exerciseId,
        });
        if (viewingAsStudentId) {
          params.set('studentId', viewingAsStudentId);
        }

        const response = await fetch(`/api/textbook/submissions?${params}`);
        if (response.ok) {
          const data = await response.json();
          const submission = data.submissions?.[0];
          if (submission?.content?.selectedId) {
            setSelectedId(submission.content.selectedId);
            setIsCorrect(submission.is_correct || false);
            setIsSubmitted(true);
          }
        }
      } catch (error) {
        console.error('Error loading saved answer:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSavedAnswer();
  }, [courseId, chapterId, exerciseId, viewingAsStudentId]);

  const handleSelect = (optionId: string) => {
    if (isSubmitted || isReadOnly) return;
    setSelectedId(optionId);
  };

  const handleSubmit = async () => {
    if (!selectedId || isReadOnly) return;

    const selectedOption = options.find((o) => o.id === selectedId);
    const correct = selectedOption?.isCorrect || false;

    setIsCorrect(correct);
    setIsSubmitted(true);

    // Lagre til database
    if (courseId) {
      try {
        await fetch('/api/textbook/submissions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            exerciseId,
            chapterId,
            courseId,
            submissionType: 'multiple-choice',
            content: { selectedId },
            isCorrect: correct,
          }),
        });
      } catch (error) {
        console.error('Error saving answer:', error);
      }
    }

    // Callback for parent component
    if (onSave) {
      onSave(selectedId, correct);
    }
  };

  const handleReset = () => {
    setSelectedId(null);
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  if (isLoading) {
    return (
      <div className="space-y-2 animate-pulse">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-14 bg-muted rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Alternativer */}
      <div className="space-y-2">
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          const showCorrect = isSubmitted && option.isCorrect;
          const showWrong = isSubmitted && isSelected && !option.isCorrect;

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={isSubmitted}
              className={cn(
                'w-full text-left p-4 rounded-lg border-2 transition-all',
                'hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50',
                isSelected && !isSubmitted && 'border-primary bg-primary/5',
                !isSelected && !isSubmitted && 'border-muted',
                showCorrect && 'border-green-500 bg-green-50 dark:bg-green-950/20',
                showWrong && 'border-red-500 bg-red-50 dark:bg-red-950/20',
                isSubmitted && !showCorrect && !showWrong && 'opacity-50'
              )}
            >
              <div className="flex items-start gap-3">
                {/* Ikon */}
                <div className="mt-0.5 shrink-0">
                  {showCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : showWrong ? (
                    <XCircle className="h-5 w-5 text-red-600" />
                  ) : isSelected ? (
                    <div className="h-5 w-5 rounded-full border-2 border-primary bg-primary" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>

                {/* Tekst */}
                <div className="flex-1">
                  <div className="font-medium">
                    <LatexRenderer content={option.text} />
                  </div>

                  {/* Tilbakemelding */}
                  {isSubmitted && isSelected && option.feedback && (
                    <p
                      className={cn(
                        'text-sm mt-2',
                        option.isCorrect
                          ? 'text-green-700 dark:text-green-300'
                          : 'text-red-700 dark:text-red-300'
                      )}
                    >
                      {option.feedback}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Knapper */}
      <div className="flex gap-2">
        {!isSubmitted ? (
          <Button onClick={handleSubmit} disabled={!selectedId}>
            Sjekk svar
          </Button>
        ) : (
          <Button variant="outline" onClick={handleReset}>
            Prøv på nytt
          </Button>
        )}
      </div>

      {/* Resultat */}
      {isSubmitted && (
        <Alert
          className={cn(
            isCorrect
              ? 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800'
              : 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800'
          )}
        >
          {isCorrect ? (
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          ) : (
            <XCircle className="h-4 w-4 text-red-600" />
          )}
          <AlertDescription
            className={cn(
              isCorrect
                ? 'text-green-800 dark:text-green-200'
                : 'text-red-800 dark:text-red-200'
            )}
          >
            {isCorrect ? (
              'Riktig! Godt jobbet!'
            ) : (
              <>
                Feil. Det riktige svaret er:{' '}
                <strong>
                  <LatexRenderer content={options.find((o) => o.isCorrect)?.text || ''} />
                </strong>
              </>
            )}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
