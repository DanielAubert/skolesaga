'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Plus,
  Trash2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  RefreshCcw,
  Send,
} from 'lucide-react';
import { LatexRenderer } from './latex-renderer';
import {
  validateSteps,
  type ValidationResult,
  type MathProblem,
} from '@/lib/math-engine';

interface StepByStepInputProps {
  problem: string;
  problemType?: 'arithmetic' | 'algebra' | 'hybrid';
  targetVariable?: string;
  expectedAnswer?: string;
  onComplete?: (result: ValidationResult) => void;
  onSave?: (steps: string[], result: ValidationResult) => void;
}

export function StepByStepInput({
  problem,
  problemType = 'hybrid',
  targetVariable,
  expectedAnswer,
  onComplete,
  onSave,
}: StepByStepInputProps) {
  const [steps, setSteps] = useState<string[]>(['']);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [showHints, setShowHints] = useState(false);

  // Legg til nytt steg
  const addStep = useCallback(() => {
    setSteps(prev => [...prev, '']);
    setValidationResult(null);
  }, []);

  // Fjern steg
  const removeStep = useCallback((index: number) => {
    setSteps(prev => prev.filter((_, i) => i !== index));
    setValidationResult(null);
  }, []);

  // Oppdater steg
  const updateStep = useCallback((index: number, value: string) => {
    setSteps(prev => {
      const newSteps = [...prev];
      newSteps[index] = value;
      return newSteps;
    });
    setValidationResult(null);
  }, []);

  // Valider alle steg
  const handleValidate = useCallback(async () => {
    const nonEmptySteps = steps.filter(s => s.trim() !== '');
    if (nonEmptySteps.length === 0) return;

    setIsValidating(true);
    try {
      const mathProblem: MathProblem = {
        type: problemType,
        expression: problem,
        targetVariable,
        expectedAnswer,
      };

      const result = await validateSteps(mathProblem, nonEmptySteps);
      setValidationResult(result);

      if (result.isComplete && onComplete) {
        onComplete(result);
      }
    } finally {
      setIsValidating(false);
    }
  }, [steps, problem, problemType, targetVariable, expectedAnswer, onComplete]);

  // Lagre besvarelse
  const handleSave = useCallback(() => {
    if (validationResult && onSave) {
      onSave(steps.filter(s => s.trim() !== ''), validationResult);
    }
  }, [steps, validationResult, onSave]);

  // Reset alt
  const handleReset = useCallback(() => {
    setSteps(['']);
    setValidationResult(null);
  }, []);

  // Hent status-ikon for et steg
  const getStepStatusIcon = (index: number) => {
    if (!validationResult) return null;

    const stepResult = validationResult.steps[index];
    if (!stepResult) return null;

    if (stepResult.isValid) {
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    } else {
      return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <span>Vis utregningen steg for steg</span>
          <Button variant="ghost" size="sm" onClick={handleReset}>
            <RefreshCcw className="h-4 w-4 mr-1" />
            Start på nytt
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Oppgaven */}
        <div className="p-3 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground mb-1">Oppgave:</p>
          <div className="font-mono text-lg">
            <LatexRenderer content={`$${problem}$`} />
          </div>
        </div>

        {/* Steg-inntasting */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Dine steg:</p>

          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-2">
              <Badge variant="outline" className="shrink-0">
                {index + 1}
              </Badge>
              <Input
                value={step}
                onChange={(e) => updateStep(index, e.target.value)}
                placeholder={index === 0 ? 'Første steg...' : 'Neste steg...'}
                className="font-mono"
              />
              {getStepStatusIcon(index)}
              {steps.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeStep(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}

          <Button variant="outline" size="sm" onClick={addStep}>
            <Plus className="h-4 w-4 mr-1" />
            Legg til steg
          </Button>
        </div>

        {/* Valideringsresultat */}
        {validationResult && (
          <Alert
            className={
              validationResult.isValid
                ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20'
                : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20'
            }
          >
            <AlertDescription>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {validationResult.isValid ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                  <span className="font-medium">{validationResult.feedback}</span>
                </div>

                {validationResult.isComplete && validationResult.finalAnswer && (
                  <div className="font-mono text-lg">
                    Svar: <LatexRenderer content={`$${validationResult.finalAnswer}$`} />
                  </div>
                )}

                {/* Vis detaljer per steg */}
                {!validationResult.isValid && (
                  <div className="mt-3 space-y-1">
                    {validationResult.steps.map((step, i) => (
                      !step.isValid && (
                        <p key={i} className="text-sm text-red-600 dark:text-red-400">
                          Steg {step.stepIndex + 1}: {step.feedback}
                        </p>
                      )
                    ))}
                  </div>
                )}
              </div>
            </AlertDescription>
          </Alert>
        )}

        {/* Hint */}
        {validationResult?.suggestions && validationResult.suggestions.length > 0 && (
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowHints(!showHints)}
              className="text-amber-600 dark:text-amber-400"
            >
              <Lightbulb className="h-4 w-4 mr-1" />
              {showHints ? 'Skjul tips' : 'Vis tips'}
            </Button>

            {showHints && (
              <div className="mt-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                {validationResult.suggestions.map((tip, i) => (
                  <p key={i} className="text-sm text-amber-700 dark:text-amber-300">
                    💡 {tip}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Handlingsknapper */}
        <div className="flex gap-2 pt-2">
          <Button
            onClick={handleValidate}
            disabled={isValidating || steps.every(s => s.trim() === '')}
          >
            {isValidating ? (
              <>
                <RefreshCcw className="h-4 w-4 mr-2 animate-spin" />
                Sjekker...
              </>
            ) : (
              <>
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Sjekk utregning
              </>
            )}
          </Button>

          {validationResult?.isComplete && onSave && (
            <Button variant="outline" onClick={handleSave}>
              <Send className="h-4 w-4 mr-2" />
              Lagre besvarelse
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
