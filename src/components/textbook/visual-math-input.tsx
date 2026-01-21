'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2, X, Delete, CornerDownLeft, Calculator } from 'lucide-react';
import { LatexRenderer } from './latex-renderer';
import { cn } from '@/lib/utils';

interface VisualMathInputProps {
  exerciseId: string;
  chapterId: string;
  courseId: string;
  exerciseContent?: string;
  viewingAsStudentId?: string | null;
  onSave?: (latex: string) => void;
}

// Matematiske knapper gruppert - viser visuelt, setter inn kommando
const MATH_BUTTONS = {
  tall: [
    { display: '0', command: '0' },
    { display: '1', command: '1' },
    { display: '2', command: '2' },
    { display: '3', command: '3' },
    { display: '4', command: '4' },
    { display: '5', command: '5' },
    { display: '6', command: '6' },
    { display: '7', command: '7' },
    { display: '8', command: '8' },
    { display: '9', command: '9' },
  ],
  operatorer: [
    { display: '+', command: '+' },
    { display: '−', command: '-' },
    { display: '×', command: '\\times ' },
    { display: '÷', command: '\\div ' },
    { display: '=', command: '=' },
    { display: '≠', command: '\\ne ' },
    { display: '<', command: '<' },
    { display: '>', command: '>' },
    { display: '≤', command: '\\le ' },
    { display: '≥', command: '\\ge ' },
  ],
  variabler: [
    { display: 'x', command: 'x' },
    { display: 'y', command: 'y' },
    { display: 'z', command: 'z' },
    { display: 'a', command: 'a' },
    { display: 'b', command: 'b' },
    { display: 'c', command: 'c' },
    { display: 'n', command: 'n' },
    { display: 'm', command: 'm' },
  ],
  spesielle: [
    { display: '□/□', command: 'fraction', type: 'fraction' },
    { display: 'x²', command: 'superscript', type: 'superscript' },
    { display: '√', command: 'sqrt', type: 'sqrt' },
    { display: '(', command: '(' },
    { display: ')', command: ')' },
    { display: 'π', command: '\\pi ' },
    { display: '±', command: '\\pm ' },
  ],
};

export function VisualMathInput({
  exerciseId,
  chapterId: _chapterId,
  courseId: _courseId,
  exerciseContent,
  viewingAsStudentId,
  onSave,
}: VisualMathInputProps) {
  const isViewingAsStudent = !!viewingAsStudentId;
  const [isCheckingAnswer, setIsCheckingAnswer] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [followUpQuestion, setFollowUpQuestion] = useState('');
  const [isAskingFollowUp, setIsAskingFollowUp] = useState(false);
  const [hintLevel, setHintLevel] = useState<1 | 2 | 3>(2);
  const [attemptCount, setAttemptCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toolsUsed, setToolsUsed] = useState<string[]>([]);
  const mathfieldRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Last inn MathLive dynamisk (kun på klient)
  useEffect(() => {
    const loadMathLive = async () => {
      try {
        // Dynamisk import av MathLive
        await import('mathlive');
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load MathLive:', error);
      }
    };
    loadMathLive();
  }, []);

  // Sett inn kommando i mathfield
  const insertCommand = (button: { display: string; command: string; type?: string }) => {
    const mf = mathfieldRef.current as HTMLElement & {
      executeCommand: (cmd: string | [string, ...unknown[]]) => void;
      insert: (text: string) => void;
      getValue: () => string;
    };
    if (!mf) return;

    if (button.type === 'fraction') {
      mf.executeCommand(['insert', '\\frac{#0}{#?}']);
    } else if (button.type === 'superscript') {
      mf.executeCommand(['insert', '#0^{#?}']);
    } else if (button.type === 'sqrt') {
      mf.executeCommand(['insert', '\\sqrt{#?}']);
    } else {
      mf.insert(button.command);
    }
    mf.focus?.();
  };

  // Slett
  const handleBackspace = () => {
    const mf = mathfieldRef.current as HTMLElement & { executeCommand: (cmd: string) => void };
    if (mf) {
      mf.executeCommand('deleteBackward');
      mf.focus?.();
    }
  };

  // Tøm alt
  const handleClear = () => {
    const mf = mathfieldRef.current as HTMLElement & { setValue: (val: string) => void };
    if (mf) {
      mf.setValue('');
      mf.focus?.();
    }
  };

  // Ny linje - bruker gather-miljø
  const handleNewLine = () => {
    const mf = mathfieldRef.current as HTMLElement & {
      getValue: () => string;
      setValue: (val: string) => void;
      focus?: () => void;
    };
    if (mf) {
      const currentValue = mf.getValue();
      if (!currentValue.includes('\\begin{gather}')) {
        mf.setValue(`\\begin{gather}${currentValue}\\\\\\end{gather}`);
      } else {
        const newValue = currentValue.replace('\\end{gather}', '\\\\\\end{gather}');
        mf.setValue(newValue);
      }
      mf.focus?.();
    }
  };

  // Hent LaTeX-verdi
  const getLatexValue = (): string => {
    const mf = mathfieldRef.current as HTMLElement & { getValue: () => string };
    return mf?.getValue?.() || '';
  };

  // AI-vurdering med ReAct (bruker matematiske verktøy)
  const checkAnswerWithAI = async () => {
    const latex = getLatexValue();
    if (!latex.trim()) return;

    setIsCheckingAnswer(true);
    setAiFeedback(null);
    setToolsUsed([]);
    setAttemptCount((prev) => prev + 1);

    try {
      const response = await fetch('/api/check-solution-react', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          latexInput: latex,
          exerciseContent: exerciseContent || 'Ingen oppgavetekst tilgjengelig',
          exerciseId,
          hintLevel,
          attemptCount: attemptCount + 1,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Kunne ikke sjekke løsningen');
      }

      setAiFeedback(data.feedback);
      setToolsUsed(data.toolsUsedNames || []);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ukjent feil';
      setAiFeedback(`Beklager, kunne ikke analysere løsningen din: ${errorMessage}`);
      console.error('Error checking answer:', error);
    } finally {
      setIsCheckingAnswer(false);
    }
  };

  // Oppfølgingsspørsmål
  const askFollowUp = async () => {
    if (!followUpQuestion.trim() || !aiFeedback) return;

    setIsAskingFollowUp(true);

    try {
      const response = await fetch('/api/check-solution-react', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          latexInput: getLatexValue(),
          exerciseContent: exerciseContent || 'Ingen oppgavetekst tilgjengelig',
          exerciseId,
          followUpQuestion: followUpQuestion,
          previousFeedback: aiFeedback,
          hintLevel,
          attemptCount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Kunne ikke svare på spørsmålet');
      }

      setAiFeedback(data.feedback);
      setToolsUsed(data.toolsUsedNames || []);
      setFollowUpQuestion('');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ukjent feil';
      setAiFeedback(`Beklager, kunne ikke svare: ${errorMessage}`);
      console.error('Error asking follow-up:', error);
    } finally {
      setIsAskingFollowUp(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="p-4 border rounded-lg bg-background">
        <div className="flex items-center justify-center h-32">
          <Loader2 className="h-6 w-6 animate-spin mr-2" />
          <span>Laster matematikk-editor...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 p-4 border rounded-lg bg-background" ref={containerRef}>
      {/* MathLive editor */}
      <div className="border rounded-lg bg-white p-2">
        <p className="text-xs text-muted-foreground mb-2">Skriv svaret ditt her (trykk Enter for ny linje):</p>
        <div
          className="math-field-container"
          ref={(el) => {
            if (el && !el.querySelector('math-field')) {
              const mf = document.createElement('math-field');
              mf.style.width = '100%';
              mf.style.minHeight = '100px';
              mf.style.maxHeight = '500px';
              mf.style.fontSize = '1.5rem';
              mf.style.padding = '0.75rem';
              mf.style.border = 'none';
              mf.style.outline = 'none';
              mf.style.display = 'block';
              mf.style.overflow = 'auto';
              mf.style.lineHeight = '2.5';
              mf.setAttribute('virtual-keyboard-mode', 'manual');
              mf.setAttribute('smart-mode', 'true');

              // Lytt etter Enter-tasten for å lage ny linje
              mf.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  const mathField = mf as HTMLElement & {
                    executeCommand: (cmd: string | [string, ...unknown[]]) => void;
                    getValue: () => string;
                    setValue: (val: string) => void;
                  };
                  // Bruk gather-miljø for flerlinje (viser hver linje sentrert)
                  const currentValue = mathField.getValue();
                  if (!currentValue.includes('\\begin{gather}')) {
                    // Første Enter - wrap i gather-miljø
                    mathField.setValue(`\\begin{gather}${currentValue}\\\\\\end{gather}`);
                  } else {
                    // Legg til ny linje i gather
                    const newValue = currentValue.replace('\\end{gather}', '\\\\\\end{gather}');
                    mathField.setValue(newValue);
                  }
                }
              });

              el.appendChild(mf);
              mathfieldRef.current = mf;
            }
          }}
        />
      </div>

      {/* Matematisk tastatur */}
      <div className="space-y-2 bg-muted/30 p-3 rounded-lg">
        <p className="text-xs text-muted-foreground font-medium">Klikk for å sette inn:</p>

        {/* Tall */}
        <div className="flex flex-wrap gap-1">
          {MATH_BUTTONS.tall.map((btn) => (
            <Button
              key={btn.command}
              variant="outline"
              size="sm"
              className="w-10 h-10 p-0 text-lg font-semibold"
              onClick={() => insertCommand(btn)}
            >
              {btn.display}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="w-10 h-10 p-0"
            onClick={handleBackspace}
            title="Slett"
          >
            <Delete className="h-4 w-4" />
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="px-3 h-10"
            onClick={handleClear}
            title="Tøm alt"
          >
            Tøm
          </Button>
        </div>

        {/* Operatorer */}
        <div className="flex flex-wrap gap-1">
          {MATH_BUTTONS.operatorer.map((btn) => (
            <Button
              key={btn.command}
              variant="outline"
              size="sm"
              className="w-10 h-10 p-0 text-lg"
              onClick={() => insertCommand(btn)}
            >
              {btn.display}
            </Button>
          ))}
        </div>

        {/* Variabler */}
        <div className="flex flex-wrap gap-1">
          {MATH_BUTTONS.variabler.map((btn) => (
            <Button
              key={btn.command}
              variant="outline"
              size="sm"
              className="w-10 h-10 p-0 text-lg italic"
              onClick={() => insertCommand(btn)}
            >
              {btn.display}
            </Button>
          ))}
        </div>

        {/* Spesielle (brøk, potens, rot, etc.) */}
        <div className="flex flex-wrap gap-1">
          {MATH_BUTTONS.spesielle.map((btn) => (
            <Button
              key={btn.command}
              variant="secondary"
              size="sm"
              className="px-3 h-10 text-base font-medium"
              onClick={() => insertCommand(btn)}
            >
              {btn.display}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="px-3 h-10"
            onClick={handleNewLine}
            title="Ny linje (for å vise flere steg)"
          >
            <CornerDownLeft className="h-4 w-4 mr-1" />
            Ny linje
          </Button>
        </div>
      </div>

      {/* AI-sjekk knapper */}
      <div className="flex items-center gap-2 pt-2 border-t">
        {/* Hint-nivå velger */}
        <div className="flex items-center gap-1 border rounded-md">
          <button
            onClick={() => setHintLevel(1)}
            className={cn(
              'px-2 py-1 text-xs rounded-l-md transition-colors',
              hintLevel === 1 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
            )}
            title="Lite hjelp"
          >
            Lite
          </button>
          <button
            onClick={() => setHintLevel(2)}
            className={cn(
              'px-2 py-1 text-xs transition-colors',
              hintLevel === 2 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
            )}
            title="Medium hjelp"
          >
            Medium
          </button>
          <button
            onClick={() => setHintLevel(3)}
            className={cn(
              'px-2 py-1 text-xs rounded-r-md transition-colors',
              hintLevel === 3 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
            )}
            title="Mye hjelp"
          >
            Mye
          </button>
        </div>

        <Button
          variant="default"
          size="sm"
          onClick={checkAnswerWithAI}
          disabled={isCheckingAnswer}
          className="gap-1"
        >
          {isCheckingAnswer ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          Sjekk svar
        </Button>

        {onSave && !isViewingAsStudent && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSave(getLatexValue())}
          >
            Lagre
          </Button>
        )}
      </div>

      {/* AI Feedback */}
      {aiFeedback && (
        <div className="relative p-4 bg-muted/50 border rounded-lg space-y-3">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-6 w-6"
            onClick={() => setAiFeedback(null)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex gap-2 items-start pr-8">
            <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm prose prose-slate dark:prose-invert max-w-none">
              <LatexRenderer content={aiFeedback} />
            </div>
          </div>
          {/* Vis verktøy som ble brukt */}
          {toolsUsed.length > 0 && (
            <div className="flex items-center gap-1.5 pt-2 border-t text-xs text-muted-foreground">
              <Calculator className="h-3.5 w-3.5" />
              <span>Verifisert med:</span>
              {toolsUsed.map((tool, i) => (
                <span key={i} className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs">
                  {tool}
                </span>
              ))}
            </div>
          )}
          {/* Oppfølgingsspørsmål */}
          <div className="flex gap-2 pt-2 border-t">
            <input
              type="text"
              value={followUpQuestion}
              onChange={(e) => setFollowUpQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && askFollowUp()}
              placeholder="Spør om noe du lurer på..."
              className="flex-1 px-3 py-1.5 text-sm border rounded-md bg-background"
              disabled={isAskingFollowUp}
            />
            <Button
              size="sm"
              onClick={askFollowUp}
              disabled={!followUpQuestion.trim() || isAskingFollowUp}
            >
              {isAskingFollowUp ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Spør'
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

