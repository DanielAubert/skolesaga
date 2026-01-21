'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal, Loader2, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePyodide } from '@/contexts/pyodide-context';
import { PyodideLoader } from './pyodide-loader';
import { markExerciseCompleted, isExerciseCompleted } from '@/lib/data/book-chapters';

export interface PythonConsoleProps {
  title?: string;
  height?: string;
  storageKey?: string;
  chapterId?: string; // For progress tracking
  exerciseId?: string; // For progress tracking
}

interface ConsoleEntry {
  type: 'input' | 'output' | 'error';
  content: string;
  index?: number;
}

export function PythonConsole({
  title = 'Python Konsoll',
  height = '400px',
  storageKey,
  chapterId,
  exerciseId
}: PythonConsoleProps) {
  const [history, setHistory] = useState<ConsoleEntry[]>([]);
  const [input, setInput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [commandIndex, setCommandIndex] = useState(1);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const historyEndRef = useRef<HTMLDivElement>(null);

  const { pyodide, isLoading: pyodideLoading, isReady: isPyodideReady, error: pyodideError, loadPyodide } = usePyodide();

  // Check if exercise is already completed
  useEffect(() => {
    if (chapterId && exerciseId) {
      setIsCompleted(isExerciseCompleted(chapterId, exerciseId));
    }
  }, [chapterId, exerciseId]);

  // Lazy load Pyodide
  useEffect(() => {
    if (!isPyodideReady && !pyodideLoading && !pyodideError) {
      loadPyodide();
    }
  }, [isPyodideReady, pyodideLoading, pyodideError, loadPyodide]);

  // Load history from localStorage
  useEffect(() => {
    if (storageKey && typeof window !== 'undefined') {
      const saved = localStorage.getItem(`console-${storageKey}`);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setHistory(parsed.history || []);
          setCommandIndex(parsed.commandIndex || 1);
          setCommandHistory(parsed.commandHistory || []);
        } catch (e) {
          console.error('Failed to parse saved console history', e);
        }
      }
    }
  }, [storageKey]);

  // Save history to localStorage
  useEffect(() => {
    if (storageKey && typeof window !== 'undefined') {
      localStorage.setItem(`console-${storageKey}`, JSON.stringify({
        history,
        commandIndex,
        commandHistory
      }));
    }
  }, [history, commandIndex, commandHistory, storageKey]);

  // Auto-scroll to bottom within console (not the page)
  useEffect(() => {
    if (historyEndRef.current && history.length > 0) {
      // Only scroll within the console container, not the page
      historyEndRef.current.parentElement?.scrollTo({
        top: historyEndRef.current.parentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  const executeCode = async (code: string) => {
    if (!code.trim() || !isPyodideReady || !pyodide) return;

    setIsExecuting(true);
    const currentIndex = commandIndex;

    // Add input to history
    setHistory(prev => [...prev, { type: 'input', content: code, index: currentIndex }]);
    setCommandHistory(prev => [...prev, code]);
    setCommandIndex(prev => prev + 1);
    setInput('');
    setHistoryPointer(-1);

    try {
      // Setup stdout capture
      await pyodide.runPythonAsync(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
      `);

      // Try to evaluate as expression first (like interactive Python)
      let result;
      let isExpression = false;

      try {
        // Try to compile as eval (expression)
        await pyodide.runPythonAsync(`compile(${JSON.stringify(code)}, '<console>', 'eval')`);
        isExpression = true;
        result = await pyodide.runPythonAsync(code);
      } catch {
        // If it fails, run as exec (statement)
        await pyodide.runPythonAsync(code);
        result = null;
      }

      // Get stdout
      const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()');

      // Build output
      let output = '';
      if (stdout) {
        output += stdout;
      }

      // If it was an expression and returned a value (not None), show it
      if (isExpression && result !== null && result !== undefined && result !== 'None') {
        if (output) output += '\n';
        output += String(result);
      }

      if (output) {
        setHistory(prev => [...prev, { type: 'output', content: output }]);
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      setHistory(prev => [...prev, { type: 'error', content: errorMsg }]);
    } finally {
      setIsExecuting(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Execute on Enter
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      executeCode(input);
    }

    // Command history navigation with arrow keys
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newPointer = historyPointer + 1;
        if (newPointer < commandHistory.length) {
          setHistoryPointer(newPointer);
          setInput(commandHistory[commandHistory.length - 1 - newPointer]);
        }
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer > 0) {
        const newPointer = historyPointer - 1;
        setHistoryPointer(newPointer);
        setInput(commandHistory[commandHistory.length - 1 - newPointer]);
      } else if (historyPointer === 0) {
        setHistoryPointer(-1);
        setInput('');
      }
    }
  };

  const handleClear = () => {
    setHistory([]);
    setCommandIndex(1);
    setInput('');
    setHistoryPointer(-1);
    if (storageKey && typeof window !== 'undefined') {
      localStorage.removeItem(`console-${storageKey}`);
    }
  };

  const handleMarkCompleted = () => {
    if (chapterId && exerciseId) {
      markExerciseCompleted(chapterId, exerciseId);
      setIsCompleted(true);

      // Dispatch custom event to update progress bar
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('exerciseCompleted', {
          detail: { chapterId, exerciseId }
        }));
      }
    }
  };

  return (
    <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
      <CardHeader className="pb-3 p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleClear}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Tøm
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <PyodideLoader
          isLoading={pyodideLoading}
          isReady={isPyodideReady}
          error={pyodideError}
        />

        <div
          className="bg-black dark:bg-gray-950 text-green-400 dark:text-green-300 font-mono text-sm rounded-lg p-4 overflow-y-auto"
          style={{ height }}
        >
          {/* Welcome message */}
          {history.length === 0 && (
            <div className="text-gray-400 mb-4">
              <p>Python 3.11.3 -- Interaktiv konsoll</p>
              <p>Skriv Python-kode og trykk ENTER for å kjøre.</p>
              <p className="mt-2 text-xs">Tips: Bruk ↑ og ↓ piltaster for historikk</p>
            </div>
          )}

          {/* Command history */}
          {history.map((entry, idx) => (
            <div key={idx} className="mb-2">
              {entry.type === 'input' && (
                <div className="flex gap-2">
                  <span className="text-blue-400 shrink-0">In [{entry.index}]:</span>
                  <span className="text-white">{entry.content}</span>
                </div>
              )}
              {entry.type === 'output' && (
                <div className="ml-2 text-gray-200 whitespace-pre-wrap">{entry.content}</div>
              )}
              {entry.type === 'error' && (
                <div className="ml-2 text-red-400 whitespace-pre-wrap">{entry.content}</div>
              )}
            </div>
          ))}

          {/* Input line */}
          <div className="flex gap-2 items-center">
            <span className="text-blue-400 shrink-0">
              In [{commandIndex}]:
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={!isPyodideReady || isExecuting}
              className="flex-1 bg-transparent border-none outline-none text-white"
              placeholder={isPyodideReady ? "Skriv Python-kode her..." : "Venter på Python..."}
            />
            {isExecuting && (
              <Loader2 className="h-4 w-4 animate-spin text-yellow-400" />
            )}
          </div>

          <div ref={historyEndRef} />
        </div>

        <p className="text-xs text-muted-foreground mt-2">
          Trykk Enter for å kjøre kode. Bruk ↑/↓ for å navigere i historikken.
        </p>

        {/* Completion Button */}
        {chapterId && exerciseId && (
          <div className="mt-4 flex items-center gap-3">
            {isCompleted ? (
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium">Fullført</span>
              </div>
            ) : (
              <Button
                onClick={handleMarkCompleted}
                variant="outline"
                className="gap-2"
              >
                <CheckCircle2 className="h-4 w-4" />
                Marker som fullført
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
