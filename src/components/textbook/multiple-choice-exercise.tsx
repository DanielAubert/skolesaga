'use client';

import { useState } from 'react';
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
  courseId: _courseId,
  viewingAsStudentId,
  onSave,
}: MultipleChoiceExerciseProps) {
  // courseId er tilgjengelig for fremtidig bruk med database-lagring
  void _courseId;
  const options = normalizeOptions(rawOptions);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Hvis vi ser som en annen elev, deaktiver interaksjon
  const isReadOnly = !!viewingAsStudentId;

  const handleSelect = (optionId: string) => {
    if (isSubmitted || isReadOnly) return;
    setSelectedId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedId || isReadOnly) return;

    const selectedOption = options.find((o) => o.id === selectedId);
    const correct = selectedOption?.isCorrect || false;

    setIsCorrect(correct);
    setIsSubmitted(true);

    // Lagre til localStorage (bakoverkompatibilitet)
    const key = `mc-${chapterId}-${exerciseId}`;
    localStorage.setItem(key, JSON.stringify({ selectedId, isCorrect: correct }));

    // Lagre til database via callback
    if (onSave) {
      onSave(selectedId, correct);
    }
  };

  const handleReset = () => {
    setSelectedId(null);
    setIsSubmitted(false);
    setIsCorrect(false);
  };

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
