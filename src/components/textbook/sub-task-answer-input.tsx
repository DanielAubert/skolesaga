'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, Trophy, Sparkles } from 'lucide-react';
import type { SubTask } from '@/lib/types/textbook';
import { LatexRenderer } from './latex-renderer';
import { cn } from '@/lib/utils';
import { validateExpressionAnswer } from '@/lib/math-engine/parser';

interface SubTaskAnswerInputProps {
  subTasks: SubTask[];
  onAllCorrect?: () => void;
  onAttempt?: (label: string, isCorrect: boolean) => void;
}

type AnswerStatus = 'pending' | 'correct' | 'equivalent' | 'incorrect';

interface SubTaskState {
  value: string;
  status: AnswerStatus;
  attempts: number;
}

function getAnswerKind(task: SubTask): 'numeric' | 'expression' | 'none' {
  if (task.answer !== undefined) return 'numeric';
  if (task.expressionAnswer !== undefined) return 'expression';
  return 'none';
}

// Numerisk sjekk: håndterer komma som desimaltegn, valgfri prosent-tegn osv.
function checkNumeric(task: SubTask, raw: string): boolean {
  const cleaned = raw.replace(',', '.').replace(/\s+/g, '').replace('%', '').trim();
  const v = parseFloat(cleaned);
  if (!Number.isFinite(v)) return false;
  if (Array.isArray(task.answer)) {
    return task.answer.some((a) => Math.abs(Number(a) - v) < 1e-6);
  }
  return Math.abs(Number(task.answer) - v) < 1e-6;
}

// Algebraisk sjekk: bruker mathjs-basert validateExpressionAnswer.
// Returnerer 'correct' for eksakt-format-match, 'equivalent' for matematisk
// ekvivalente svar i annen form (f.eks. (x-1)(x+1) vs x^2-1).
function checkExpression(task: SubTask, raw: string): AnswerStatus {
  const expected = task.expressionAnswer;
  if (expected === undefined) return 'incorrect';

  const result = validateExpressionAnswer(raw.trim(), expected);
  if (result.isCorrect) return 'correct';
  if (result.isEquivalentButWrongOrder) return 'equivalent';
  return 'incorrect';
}

export function SubTaskAnswerInput({ subTasks, onAllCorrect, onAttempt }: SubTaskAnswerInputProps) {
  // Filtrer til oppgaver som har sjekkbart svar (numerisk eller algebraisk)
  const answeredTasks = subTasks.filter((task) => getAnswerKind(task) !== 'none');

  const [states, setStates] = useState<Record<string, SubTaskState>>(() => {
    const initial: Record<string, SubTaskState> = {};
    answeredTasks.forEach((task) => {
      initial[task.label] = { value: '', status: 'pending', attempts: 0 };
    });
    return initial;
  });

  const [allCorrect, setAllCorrect] = useState(false);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const hasCalledOnAllCorrect = useRef(false);

  // En oppgave er "ferdig" hvis status er 'correct' eller 'equivalent'
  const isPassed = (s: AnswerStatus) => s === 'correct' || s === 'equivalent';

  const checkAllCorrect = useCallback(() => {
    const allDone = answeredTasks.every((task) => isPassed(states[task.label]?.status));
    if (allDone && !hasCalledOnAllCorrect.current) {
      setAllCorrect(true);
      hasCalledOnAllCorrect.current = true;
      onAllCorrect?.();
    }
  }, [answeredTasks, states, onAllCorrect]);

  useEffect(() => {
    checkAllCorrect();
  }, [checkAllCorrect]);

  useEffect(() => {
    if (answeredTasks.length > 0) {
      const firstTask = answeredTasks[0];
      setTimeout(() => {
        inputRefs.current[firstTask.label]?.focus();
      }, 100);
    }
  }, [answeredTasks]);

  const handleInputChange = (label: string, value: string) => {
    setStates((prev) => ({
      ...prev,
      [label]: { ...prev[label], value, status: 'pending' },
    }));
  };

  const handleSubmit = (task: SubTask) => {
    const state = states[task.label];
    if (!state.value.trim()) return;

    const kind = getAnswerKind(task);
    let status: AnswerStatus;
    if (kind === 'numeric') {
      status = checkNumeric(task, state.value) ? 'correct' : 'incorrect';
    } else {
      status = checkExpression(task, state.value);
    }

    setStates((prev) => ({
      ...prev,
      [task.label]: {
        ...prev[task.label],
        status,
        attempts: prev[task.label].attempts + 1,
      },
    }));

    onAttempt?.(task.label, isPassed(status));

    if (isPassed(status)) {
      const currentIndex = answeredTasks.findIndex((t) => t.label === task.label);
      const nextTask = answeredTasks
        .slice(currentIndex + 1)
        .find((t) => !isPassed(states[t.label]?.status));
      if (nextTask) {
        setTimeout(() => {
          inputRefs.current[nextTask.label]?.focus();
        }, 100);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, task: SubTask) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(task);
    }
  };

  if (answeredTasks.length === 0) return null;

  // Velg om gridd er bred (algebraiske svar trenger plass) eller tett (numeriske)
  const hasExpression = answeredTasks.some((t) => getAnswerKind(t) === 'expression');
  const gridCols = hasExpression
    ? 'grid-cols-1 sm:grid-cols-2'
    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';

  return (
    <div className="space-y-4">
      {/* Success banner */}
      {allCorrect && (
        <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900">
            <Trophy className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-300">Godkjent!</p>
            <p className="text-sm text-green-600 dark:text-green-400">
              Du har svart riktig på alle deloppgavene.
            </p>
          </div>
        </div>
      )}

      <div className={cn('grid gap-4', gridCols)}>
        {answeredTasks.map((task) => {
          const state = states[task.label];
          const status = state?.status ?? 'pending';
          const isCorrect = status === 'correct';
          const isEquivalent = status === 'equivalent';
          const isPassedNow = isCorrect || isEquivalent;
          const isIncorrect = status === 'incorrect';
          const kind = getAnswerKind(task);
          const isExpression = kind === 'expression';

          return (
            <div
              key={task.label}
              className={cn(
                'flex items-center gap-3 p-3 rounded-lg border transition-all duration-200',
                isCorrect && 'bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700',
                isEquivalent && 'bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700',
                isIncorrect && 'bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700',
                !isPassedNow && !isIncorrect && 'bg-muted/50 border-border'
              )}
            >
              <Badge
                variant="outline"
                className={cn(
                  'shrink-0 h-7 w-7 flex items-center justify-center rounded-full text-sm font-medium',
                  isCorrect && 'bg-green-100 dark:bg-green-900 border-green-400',
                  isEquivalent && 'bg-amber-100 dark:bg-amber-900 border-amber-400',
                  isIncorrect && 'bg-red-100 dark:bg-red-900 border-red-400'
                )}
              >
                {task.label}
              </Badge>

              <div className="flex-1 text-sm font-medium whitespace-nowrap min-w-0 overflow-x-auto">
                <LatexRenderer content={task.task} />
              </div>

              <span className="text-muted-foreground">=</span>

              {isPassedNow ? (
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={cn(
                      'font-bold truncate',
                      isCorrect ? 'text-green-700 dark:text-green-300' : 'text-amber-700 dark:text-amber-300'
                    )}
                    title={state.value}
                  >
                    {state.value}
                  </span>
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  ) : (
                    <span title="Riktig, men kunne vært forenklet">
                      <Sparkles className="h-5 w-5 text-amber-500 shrink-0" />
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Input
                    ref={(el) => {
                      inputRefs.current[task.label] = el;
                    }}
                    type="text"
                    inputMode={isExpression ? 'text' : 'numeric'}
                    pattern={isExpression ? undefined : '[0-9,.\\-]*'}
                    placeholder={isExpression ? 'svar' : '?'}
                    value={state?.value || ''}
                    onChange={(e) => handleInputChange(task.label, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, task)}
                    onBlur={() => handleSubmit(task)}
                    className={cn(
                      'h-8 text-center font-mono',
                      isExpression ? 'w-32 text-left' : 'w-16',
                      isIncorrect && 'border-red-400 focus-visible:ring-red-400'
                    )}
                    disabled={allCorrect}
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                  />
                  {isIncorrect && <XCircle className="h-5 w-5 text-red-500 shrink-0" />}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Hjelpetekst når noen oppgaver er ekvivalente */}
      {answeredTasks.some((t) => states[t.label]?.status === 'equivalent') && (
        <p className="text-xs text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 shrink-0" />
          Gult lys: svaret ditt er <strong>matematisk likt</strong>, men kan forenkles til standardform.
        </p>
      )}

      {/* Vis uavhengige oppgaver (uten svarfelt) */}
      {subTasks.filter((t) => getAnswerKind(t) === 'none').length > 0 && (
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">Andre deloppgaver:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {subTasks
              .filter((t) => getAnswerKind(t) === 'none')
              .map((task) => (
                <div key={task.label} className="flex gap-2 items-baseline">
                  <Badge
                    variant="outline"
                    className="shrink-0 h-5 w-5 flex items-center justify-center rounded-full text-sm"
                  >
                    {task.label}
                  </Badge>
                  <div className="prose prose-slate dark:prose-invert max-w-none flex-1 whitespace-nowrap text-sm">
                    <LatexRenderer content={task.task} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
