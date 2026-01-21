'use client';

import { useState, useRef, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw, HelpCircle, Loader2 } from 'lucide-react';
import { GeoGebraEmbed, type GeoGebraAPI } from './geogebra-embed';
import { validateExercise } from '@/lib/geogebra/validation-engine';
import type { ValidatedExercise, ValidationResult } from '@/lib/geogebra/validation-types';
import { cn } from '@/lib/utils';

interface GeoGebraExerciseProps {
  exercise: ValidatedExercise;
  chapterId: string;
  onComplete?: (exerciseId: string) => void;
  isCompleted?: boolean;
  className?: string;
  defaultAppName?: 'graphing' | 'geometry' | 'classic' | '3d' | 'cas' | 'scientific' | 'suite';
}

export function GeoGebraExercise({
  exercise,
  chapterId: _chapterId,
  onComplete,
  isCompleted = false,
  className,
  defaultAppName = 'classic',
}: GeoGebraExerciseProps) {
  const [results, setResults] = useState<ValidationResult[] | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [passed, setPassed] = useState(isCompleted);
  const apiRef = useRef<GeoGebraAPI | null>(null);

  // Callback to receive API reference from GeoGebra embed
  const handleApiReady = useCallback((api: GeoGebraAPI) => {
    apiRef.current = api;
  }, []);

  // Check the answer
  const handleCheck = useCallback(() => {
    if (!apiRef.current) {
      console.error('GeoGebra API not ready');
      return;
    }

    setIsChecking(true);
    setShowHint(false);

    // Small delay to ensure GeoGebra state is fully updated
    setTimeout(() => {
      const { passed: isPassed, results: validationResults } = validateExercise(
        apiRef.current!,
        exercise.validations
      );

      setResults(validationResults);
      setPassed(isPassed);
      setIsChecking(false);

      if (isPassed && onComplete) {
        onComplete(exercise.id);
      }
    }, 100);
  }, [exercise, onComplete]);

  // Reset the exercise
  const handleReset = useCallback(() => {
    setResults(null);
    setPassed(false);
    setShowHint(false);
    // Note: The GeoGebra embed has its own reset button
  }, []);

  // Get hint for the first failed validation
  const getHint = useCallback(() => {
    if (results) {
      const firstFailed = results.find((r) => !r.passed);
      if (firstFailed) {
        const validation = exercise.validations.find((v) => v.id === firstFailed.validationId);
        return validation?.hint;
      }
    }
    // If no results yet, show hint for first validation
    return exercise.validations[0]?.hint;
  }, [results, exercise.validations]);

  const hint = getHint();

  return (
    <Card className={cn('overflow-hidden', className)}>
      {/* Exercise header */}
      <div
        className={cn(
          'px-4 py-3 border-b',
          passed
            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
            : 'bg-muted/50'
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              {passed && <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />}
              <h3 className="font-semibold">{exercise.task}</h3>
            </div>
            {passed && (
              <p className="text-sm text-green-600 mt-1">Oppgaven er fullført!</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {hint && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(!showHint)}
                className="text-muted-foreground"
              >
                <HelpCircle className="h-4 w-4 mr-1" />
                Hint
              </Button>
            )}
          </div>
        </div>

        {/* Hint */}
        {showHint && hint && (
          <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
            <p className="text-blue-700 dark:text-blue-300">{hint}</p>
          </div>
        )}
      </div>

      {/* GeoGebra applet */}
      <div className="p-4">
        <GeoGebraEmbed
          appName={exercise.appName || defaultAppName}
          initialCommands={exercise.initialCommands}
          showToolBar={true}
          showAlgebraInput={true}
          showResetIcon={true}
          width={(exercise.appName || defaultAppName) === 'cas' ? 1200 : 800}
          height={(exercise.appName || defaultAppName) === 'cas' ? 550 : 400}
          algebraWidth={(exercise.appName || defaultAppName) === 'cas' ? 550 : undefined}
          onApiReady={handleApiReady}
        />
      </div>

      {/* Validation results */}
      {results && results.length > 0 && (
        <div className="px-4 pb-4">
          <div className="space-y-2">
            {results.map((result) => (
              <div
                key={result.validationId}
                className={cn(
                  'flex items-start gap-2 p-2 rounded-lg text-sm',
                  result.passed
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                )}
              >
                {result.passed ? (
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                )}
                <span>{result.message}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="px-4 pb-4 flex items-center gap-2">
        <Button
          onClick={handleCheck}
          disabled={isChecking || passed}
          className={cn(
            passed
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-blue-600 hover:bg-blue-700'
          )}
        >
          {isChecking ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Sjekker...
            </>
          ) : passed ? (
            <>
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Fullført
            </>
          ) : (
            'Sjekk svar'
          )}
        </Button>

        {results && !passed && (
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Prøv igjen
          </Button>
        )}
      </div>
    </Card>
  );
}
