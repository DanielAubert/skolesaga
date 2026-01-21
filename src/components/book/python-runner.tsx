'use client';

import { useState, useEffect } from 'react';
import { CodeEditor } from './code-editor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Terminal, AlertCircle, Loader2 } from 'lucide-react';
import { usePyodide } from '@/contexts/pyodide-context';
import { PyodideLoader } from './pyodide-loader';

export interface PythonRunnerProps {
  initialCode?: string;
  title?: string;
  height?: string;
  storageKey?: string; // For localStorage persistence
}

export function PythonRunner({
  initialCode = '# Skriv din Python-kode her\nprint("Hei verden!")',
  title = 'Python Editor',
  height = '300px',
  storageKey
}: PythonRunnerProps) {
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // Use global Pyodide instance
  const { pyodide, isLoading: pyodideLoading, isReady: isPyodideReady, error: pyodideError, loadPyodide } = usePyodide();

  // Lazy load Pyodide when component mounts
  useEffect(() => {
    if (!isPyodideReady && !pyodideLoading && !pyodideError) {
      loadPyodide();
    }
  }, [isPyodideReady, pyodideLoading, pyodideError, loadPyodide]);

  const runCode = async (code: string) => {
    if (!isPyodideReady || !pyodide) {
      setError('Python-miljøet er ikke klart ennå. Vent litt...');
      return;
    }

    setIsLoading(true);
    setOutput('');
    setError('');

    try {

      // Capture stdout
      await pyodide.runPythonAsync(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
      `);

      // Run user code
      await pyodide.runPythonAsync(code);

      // Get output
      const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()');
      setOutput(stdout || '(Ingen output)');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'En ukjent feil oppstod');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
        <CardHeader className="pb-2 p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 p-4 sm:p-6 pt-2 sm:pt-3">
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

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <AlertDescription className="text-sm sm:text-base">
                <strong>Feil:</strong> {error}
              </AlertDescription>
            </Alert>
          )}

          {(output || isLoading) && (
            <Card className="bg-muted/50 dark:bg-muted/30">
              <CardHeader className="pb-2 p-3 sm:p-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  <span className="text-sm sm:text-base font-medium">Output</span>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                {isLoading ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm sm:text-base">Kjører kode...</span>
                  </div>
                ) : (
                  <pre className="text-xs sm:text-sm font-mono whitespace-pre-wrap break-all text-foreground">{output}</pre>
                )}
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
