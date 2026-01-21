'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { TextbookExercise } from '@/lib/types/textbook';
import { LatexRenderer } from './latex-renderer';

interface ExerciseAnswerKeyProps {
  exercises: TextbookExercise[];
}

// Parser fasit-streng og viser i grid-format
// Forventer format: "a) svar, b) svar, c) svar" eller "a) svar  b) svar  c) svar"
function AnswerGrid({ solution }: { solution: string }) {
  // Matcher "a)", "b)", osv. med svarene
  const parts = solution.split(/(?=\b[a-z]\))/i).filter(p => p.trim());

  // Hvis det ikke ser ut som deloppgaver, vis som vanlig tekst
  if (parts.length <= 1 || !solution.match(/[a-z]\)/i)) {
    return (
      <div className="prose prose-slate dark:prose-invert max-w-none prose-p:my-1">
        <LatexRenderer content={solution} />
      </div>
    );
  }

  // Parse hver del til label og svar
  const answers = parts.map(part => {
    const match = part.match(/^([a-z])\)\s*(.+)/i);
    if (match) {
      // Fjern trailing komma eller mellomrom
      const answer = match[2].replace(/,\s*$/, '').trim();
      return { label: match[1], answer };
    }
    return null;
  }).filter((a): a is { label: string; answer: string } => a !== null);

  if (answers.length === 0) {
    return (
      <div className="prose prose-slate dark:prose-invert max-w-none prose-p:my-1">
        <LatexRenderer content={solution} />
      </div>
    );
  }

  return (
    <div
      className="inline-grid grid-flow-col gap-x-12 gap-y-2"
      style={{ gridTemplateRows: `repeat(${Math.ceil(answers.length / 3)}, auto)` }}
    >
      {answers.map(({ label, answer }) => (
        <div key={label} className="flex items-baseline gap-1.5">
          <Badge variant="outline" className="shrink-0 h-5 w-5 flex items-center justify-center rounded-full text-xs">
            {label}
          </Badge>
          <span className="prose prose-slate dark:prose-invert max-w-none">
            <LatexRenderer content={answer} />
          </span>
        </div>
      ))}
    </div>
  );
}

export function ExerciseAnswerKey({ exercises }: ExerciseAnswerKeyProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Filtrer til bare oppgaver som har fasit (solution-feltet)
  const exercisesWithSolutions = exercises.filter(
    (ex) => ex.solution || (ex.solutionSteps && ex.solutionSteps.length > 0)
  );

  if (exercisesWithSolutions.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8 border-green-200 dark:border-green-800">
      <CardHeader className="py-3 px-4">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between p-0 h-auto hover:bg-transparent"
        >
          <CardTitle className="text-lg flex items-center gap-2 text-green-700 dark:text-green-300">
            <CheckCircle2 className="h-5 w-5" />
            Fasit
          </CardTitle>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-green-700 dark:text-green-300" />
          ) : (
            <ChevronDown className="h-5 w-5 text-green-700 dark:text-green-300" />
          )}
        </Button>
      </CardHeader>

      {isOpen && (
        <CardContent className="px-4 pb-4 pt-0">
          <div className="space-y-4">
            {exercisesWithSolutions.map((exercise) => (
              <div key={exercise.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="font-medium text-sm text-muted-foreground mb-2">
                  Oppgave {exercise.number}
                </div>
                <div className="text-sm">
                  {exercise.solutionSteps && exercise.solutionSteps.length > 0 ? (
                    <ol className="list-decimal list-inside space-y-0.5 prose prose-slate dark:prose-invert max-w-none prose-p:my-1">
                      {exercise.solutionSteps.map((step, index) => (
                        <li key={index}>
                          <LatexRenderer content={step} />
                        </li>
                      ))}
                    </ol>
                  ) : exercise.solution ? (
                    <AnswerGrid solution={exercise.solution} />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
