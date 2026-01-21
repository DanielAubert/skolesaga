'use client';

import { useState, useEffect, useRef } from 'react';
import { CodeEditor } from './code-editor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal, Loader2 } from 'lucide-react';
import { usePyodide } from '@/contexts/pyodide-context';
import { PyodideLoader } from './pyodide-loader';
import { Input } from '@/components/ui/input';

export interface PythonInputRunnerProps {
  initialCode?: string;
  title?: string;
  height?: string;
  storageKey?: string;
}

interface ConsoleEntry {
  type: 'output' | 'error' | 'input-prompt' | 'user-input';
  content: string;
}

export function PythonInputRunner({
  initialCode = '# Skriv din Python-kode her\nprint("Hei verden!")',
  title = 'Python Editor',
  height = '300px',
  storageKey
}: PythonInputRunnerProps) {
  const [consoleOutput, setConsoleOutput] = useState<ConsoleEntry[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [waitingForInput, setWaitingForInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const consoleEndRef = useRef<HTMLDivElement>(null);
  const resolveInputRef = useRef<((value: string) => void) | null>(null);

  const { pyodide, isLoading: pyodideLoading, isReady: isPyodideReady, error: pyodideError, loadPyodide } = usePyodide();

  // Lazy load Pyodide
  useEffect(() => {
    if (!isPyodideReady && !pyodideLoading && !pyodideError) {
      loadPyodide();
    }
  }, [isPyodideReady, pyodideLoading, pyodideError, loadPyodide]);

  // Auto-scroll within console container (not the page)
  useEffect(() => {
    if (consoleEndRef.current && consoleOutput.length > 0) {
      consoleEndRef.current.parentElement?.scrollTo({
        top: consoleEndRef.current.parentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [consoleOutput, waitingForInput]);

  // Focus input when waiting
  useEffect(() => {
    if (waitingForInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [waitingForInput]);

  const runCode = async (code: string) => {
    if (!isPyodideReady || !pyodide) {
      return;
    }

    setIsRunning(true);
    setConsoleOutput([]);
    setWaitingForInput(false);

    try {
      // Setup stdout capture
      await pyodide.runPythonAsync(`
import sys
from io import StringIO

sys.stdout = StringIO()

# Store original input
_original_input = input

def custom_input(prompt=""):
    # Get input from JavaScript using window.prompt
    import js
    value = js.window.customInputPrompt(str(prompt))
    return value

# Override input
__builtins__.input = custom_input
      `);

      // Set up custom input handler in window
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).customInputPrompt = (prompt: string): string => {
        // Add prompt to console
        setConsoleOutput(prev => [...prev, { type: 'input-prompt', content: prompt }]);

        // Save scroll position before prompt (mobile browsers can scroll when showing prompt)
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        // Use browser's prompt for now (we'll make it better later)
        const userInput = window.prompt(prompt) || '';

        // Restore scroll position after prompt closes (multiple attempts to combat mobile browser behavior)
        window.scrollTo(scrollX, scrollY);
        requestAnimationFrame(() => {
          window.scrollTo(scrollX, scrollY);
        });
        setTimeout(() => {
          window.scrollTo(scrollX, scrollY);
        }, 100);

        // Add user input to console
        setConsoleOutput(prev => [...prev, { type: 'user-input', content: userInput }]);

        return userInput;
      };

      // Run the user code
      await pyodide.runPythonAsync(code);

      // Get final output
      const output = await pyodide.runPythonAsync('sys.stdout.getvalue()');
      if (output) {
        setConsoleOutput(prev => [...prev, { type: 'output', content: output }]);
      }

      // Clean up
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).customInputPrompt;

    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      setConsoleOutput(prev => [...prev, { type: 'error', content: errorMsg }]);
    } finally {
      setIsRunning(false);
      setWaitingForInput(false);
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resolveInputRef.current && inputValue.trim()) {
      resolveInputRef.current(inputValue);
      resolveInputRef.current = null;
      setInputValue('');
    }
  };

  return (
    <div className="space-y-4">
      <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
        <CardHeader className="pb-3 p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 sm:p-6">
          <CodeEditor
            initialCode={initialCode}
            language="python"
            height={height}
            onRun={runCode}
            showRunButton={true}
            storageKey={storageKey}
          />

          <PyodideLoader
            isLoading={pyodideLoading}
            isReady={isPyodideReady}
            error={pyodideError}
          />

          {(consoleOutput.length > 0 || isRunning || waitingForInput) && (
            <Card className="bg-muted/50 dark:bg-muted/30">
              <CardHeader className="pb-2 p-3 sm:p-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  <span className="text-sm sm:text-base font-medium">Konsoll Output</span>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="bg-black dark:bg-gray-950 text-gray-200 font-mono text-sm rounded-lg p-4 min-h-[120px] max-h-[400px] overflow-y-auto">
                  {consoleOutput.map((entry, idx) => (
                    <div key={idx} className="mb-1">
                      {entry.type === 'output' && (
                        <div className="whitespace-pre-wrap text-gray-200">{entry.content}</div>
                      )}
                      {entry.type === 'error' && (
                        <div className="text-red-400 whitespace-pre-wrap">{entry.content}</div>
                      )}
                      {entry.type === 'input-prompt' && (
                        <div className="text-yellow-300 font-semibold">{entry.content}</div>
                      )}
                      {entry.type === 'user-input' && (
                        <div className="text-green-400">&gt; {entry.content}</div>
                      )}
                    </div>
                  ))}

                  {waitingForInput && (
                    <form onSubmit={handleInputSubmit} className="mt-3 space-y-2">
                      <div className="text-blue-400 text-xs font-medium">Skriv inn verdi:</div>
                      <div className="flex gap-2">
                        <Input
                          ref={inputRef}
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          className="flex-1 bg-gray-900 border-gray-700 text-white text-sm"
                          placeholder="Skriv her og trykk Enter..."
                          disabled={!waitingForInput}
                        />
                        {isRunning && (
                          <Loader2 className="h-5 w-5 animate-spin text-yellow-400" />
                        )}
                      </div>
                    </form>
                  )}

                  <div ref={consoleEndRef} />
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
