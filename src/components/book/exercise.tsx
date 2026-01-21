'use client';

import { useState, useEffect } from 'react';
import { usePyodide } from '@/contexts/pyodide-context';
import { CodeEditor } from './code-editor';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Loader2, CheckCircle2, XCircle, Terminal } from 'lucide-react';
import { PyodideLoader } from './pyodide-loader';
import { markExerciseCompleted, isExerciseCompleted } from '@/lib/data/book-chapters';

export interface TestCase {
  input?: string;
  expectedOutput: string;
  description?: string;
  matchMode?: 'exact' | 'contains' | 'lines'; // 'lines' checks each line separately
}

export interface ExerciseProps {
  title: string;
  description: string;
  initialCode?: string;
  testCases?: TestCase[];
  hints?: string[];
  difficulty?: 'lett' | 'medium' | 'vanskelig';
  storageKey?: string; // Unique key for localStorage persistence
  chapterId?: string; // Chapter ID for progress tracking (optional - if not provided, progress won't be saved)
  exerciseId?: string; // Exercise ID for progress tracking (optional - if not provided, progress won't be saved)
}

interface SubTask {
  label: string; // e.g., "a", "b", "c"
  content: string;
}

// Parse description to extract sub-tasks (a), b), c), etc.)
function parseSubTasks(description: string): { intro: string; subTasks: SubTask[] } | null {
  // Match patterns like "a)", "b)", "c)" etc. at the start of a line or after newline
  const subTaskRegex = /^([a-z])\)\s+/gm;

  // Check if the description contains sub-tasks
  if (!subTaskRegex.test(description)) {
    return null;
  }

  // Reset regex
  subTaskRegex.lastIndex = 0;

  const subTasks: SubTask[] = [];
  const parts = description.split(/\n(?=[a-z]\)\s+)/);

  let intro = '';

  parts.forEach((part, index) => {
    const match = part.match(/^([a-z])\)\s+([\s\S]+)/);
    if (match) {
      subTasks.push({
        label: match[1],
        content: match[2].trim()
      });
    } else if (index === 0) {
      // First part is introduction if it doesn't match the pattern
      intro = part.trim();
    }
  });

  return subTasks.length > 0 ? { intro, subTasks } : null;
}

// Format inline code in text (content surrounded by backticks)
function formatInlineCode(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];

  // Only match content between backticks - don't auto-detect patterns
  const codePattern = /`([^`]+)`/g;

  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = codePattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the code element
    const codeText = match[1];
    parts.push(
      <code key={key++} className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">
        {codeText}
      </code>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export function Exercise({
  title,
  description,
  initialCode = '# Skriv din løsning her\n',
  testCases,
  hints = [],
  difficulty = 'medium',
  storageKey,
  chapterId,
  exerciseId
}: ExerciseProps) {
  const { pyodide, isLoading: pyodideLoading, isReady: isPyodideReady, error: pyodideError, loadPyodide } = usePyodide();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{ passed: boolean; message: string }[]>([]);
  const [showHints, setShowHints] = useState(false);
  const [output, setOutput] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [mode, setMode] = useState<'interactive' | 'test'>('interactive');

  // Check if exercise is already completed
  useEffect(() => {
    if (chapterId && exerciseId) {
      setIsCompleted(isExerciseCompleted(chapterId, exerciseId));
    }
  }, [chapterId, exerciseId]);

  // Lazy load Pyodide if not already loaded
  useEffect(() => {
    if (!isPyodideReady && !pyodideLoading && !pyodideError) {
      loadPyodide();
    }
  }, [isPyodideReady, pyodideLoading, pyodideError, loadPyodide]);

  const runInteractive = async (code: string) => {
    if (!isPyodideReady || !pyodide) {
      return;
    }

    setIsLoading(true);
    setResults([]);
    setOutput('');

    try {
      // Setup stdout capture and custom input handler
      await pyodide.runPythonAsync(`
import sys
from io import StringIO

# Clear user-defined variables from previous runs
_keep = {'__name__', '__doc__', '__package__', '__loader__', '__spec__',
         '__builtins__', '__file__', '__cached__', 'sys', 'StringIO',
         '_keep', 'custom_input', '_original_input'}
for _var in list(globals().keys()):
    if _var not in _keep and not _var.startswith('_'):
        del globals()[_var]

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
        // Use browser's prompt
        const userInput = window.prompt(prompt) || '';
        return userInput;
      };

      // Run the user code
      await pyodide.runPythonAsync(code);

      // Get final output
      const output = await pyodide.runPythonAsync('sys.stdout.getvalue()');
      setOutput(output || '(Ingen output)');

      // Clean up
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).customInputPrompt;

    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      setOutput(`Feil: ${errorMsg}`);
    } finally {
      setIsLoading(false);
    }
  };

  const runTests = async (code: string) => {
    if (!isPyodideReady || !pyodide) {
      return;
    }

    setIsLoading(true);
    setResults([]);
    setOutput('');

    const testResults: { passed: boolean; message: string }[] = [];
    let lastOutput = '';

    try {
      const tests = testCases || [];

      for (let i = 0; i < tests.length; i++) {
        const testCase = tests[i];

        try {
          // Setup stdout capture and custom input handler
          const inputData = testCase.input || '';
          const inputs = inputData.split('\n');

          await pyodide.runPythonAsync(`
            import sys
            import builtins
            from io import StringIO

            # Clear user-defined variables from previous runs
            _keep = {'__name__', '__doc__', '__package__', '__loader__', '__spec__',
                     '__builtins__', '__file__', '__cached__', 'sys', 'builtins',
                     'StringIO', '_keep', '_input_values', '_input_index', '_mock_input'}
            for _var in list(globals().keys()):
                if _var not in _keep and not _var.startswith('_'):
                    del globals()[_var]

            sys.stdout = StringIO()

            # Mock input() function
            _input_values = ${JSON.stringify(inputs)}
            _input_index = 0

            def _mock_input(prompt=''):
                global _input_index
                if _input_index < len(_input_values):
                    value = _input_values[_input_index]
                    _input_index += 1
                    print(prompt + value)  # Print prompt and input
                    return value
                return ''

            builtins.input = _mock_input
          `);

          // Run user code
          await pyodide.runPythonAsync(code);

          // Get output
          const currentOutput = (await pyodide.runPythonAsync('sys.stdout.getvalue()')).trim();
          lastOutput = currentOutput;
          const expected = testCase.expectedOutput.trim();
          const matchMode = testCase.matchMode || 'exact';

          if (matchMode === 'lines') {
            // Check each expected line separately and report which ones pass/fail
            const expectedLines = expected.split('\n').map((l: string) => l.trim()).filter((l: string) => l);
            const outputLines = currentOutput.split('\n').map((l: string) => l.trim());

            for (let j = 0; j < expectedLines.length; j++) {
              const expectedLine = expectedLines[j];
              const foundLine = outputLines.some((ol: string) => ol === expectedLine);

              if (foundLine) {
                testResults.push({
                  passed: true,
                  message: `Forventet "${expectedLine}" ✓`
                });
              } else {
                testResults.push({
                  passed: false,
                  message: `Mangler "${expectedLine}" i output`
                });
              }
            }
          } else if (matchMode === 'contains') {
            // Check if output contains expected text
            if (currentOutput.includes(expected)) {
              testResults.push({
                passed: true,
                message: testCase.description || `Test ${i + 1}: Bestått ✓`
              });
            } else {
              testResults.push({
                passed: false,
                message: `${testCase.description || `Test ${i + 1}`}: Output mangler "${expected}"`
              });
            }
          } else {
            // Exact match (default)
            if (currentOutput === expected) {
              testResults.push({
                passed: true,
                message: testCase.description || `Test ${i + 1}: Bestått ✓`
              });
            } else {
              testResults.push({
                passed: false,
                message: `${testCase.description || `Test ${i + 1}`}: Forventet "${expected}", fikk "${currentOutput}"`
              });
            }
          }
        } catch (err: unknown) {
          testResults.push({
            passed: false,
            message: `${testCase.description || `Test ${i + 1}`}: Feil - ${err instanceof Error ? err.message : String(err)}`
          });
        }
      }
    } catch (err: unknown) {
      testResults.push({
        passed: false,
        message: `Feil under kjøring: ${err instanceof Error ? err.message : 'En ukjent feil oppstod'}`
      });
    } finally {
      setResults(testResults);
      setOutput(lastOutput || '(Ingen output)');
      setIsLoading(false);

      // Check if all tests passed and save progress
      const allPassed = testResults.length > 0 && testResults.every(r => r.passed);
      if (allPassed && !isCompleted && chapterId && exerciseId) {
        markExerciseCompleted(chapterId, exerciseId);
        setIsCompleted(true);

        // Dispatch custom event to update progress bar
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('exerciseCompleted', {
            detail: { chapterId, exerciseId }
          }));
        }
      }
    }
  };

  const allTestsPassed = results.length > 0 && results.every(r => r.passed);
  const difficultyColor = {
    lett: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    vanskelig: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  // Parse description for sub-tasks
  const parsedContent = parseSubTasks(description);

  return (
    <Card className="border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
              {isCompleted && (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0" />
              )}
            </div>

            {/* Render description with sub-tasks if available */}
            {parsedContent ? (
              <div className="space-y-3">
                {parsedContent.intro && (
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {parsedContent.intro}
                  </p>
                )}
                <div className="space-y-2.5">
                  {parsedContent.subTasks.map((subTask, index) => (
                    <div
                      key={index}
                      className="flex gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    >
                      <Badge
                        variant="outline"
                        className="shrink-0 h-6 w-6 flex items-center justify-center rounded-full font-semibold"
                      >
                        {subTask.label}
                      </Badge>
                      <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                        {formatInlineCode(subTask.content)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <CardDescription className="text-sm sm:text-base leading-relaxed">
                {formatInlineCode(description)}
              </CardDescription>
            )}
          </div>
          <Badge className={`${difficultyColor[difficulty]} shrink-0`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-1 p-4 sm:p-6 pt-2 sm:pt-3">
        <div className="space-y-2">
          {testCases && testCases.length > 0 && testCases.some(tc => tc.input !== undefined) && (
            <div className="flex gap-2 items-center justify-end">
              <button
                onClick={() => setMode('interactive')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  mode === 'interactive'
                    ? 'bg-primary text-primary-foreground'
                    : 'border-2 border-primary/50 text-primary hover:bg-primary/10 dark:border-primary/70 dark:text-primary-foreground/90'
                }`}
              >
                Kjør interaktivt
              </button>
              <button
                onClick={() => setMode('test')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  mode === 'test'
                    ? 'bg-green-600 text-white dark:bg-green-500'
                    : 'border-2 border-green-500/50 text-green-700 hover:bg-green-50 dark:border-green-500/70 dark:text-green-400 dark:hover:bg-green-950/50'
                }`}
              >
                Test løsning
              </button>
            </div>
          )}
          <CodeEditor
            initialCode={initialCode}
            language="python"
            height="250px"
            onRun={testCases?.some(tc => tc.input !== undefined) && mode === 'interactive' ? runInteractive : runTests}
            showRunButton={true}
            storageKey={storageKey}
          />
        </div>

        <PyodideLoader
          isLoading={pyodideLoading}
          isReady={isPyodideReady}
          error={pyodideError}
        />

        {isLoading && (
          <Alert>
            <Loader2 className="h-4 w-4 animate-spin" />
            <AlertDescription>Kjører tester...</AlertDescription>
          </Alert>
        )}

        {output && !isLoading && (
          <Card className="bg-muted/50 dark:bg-muted/30">
            <CardHeader className="pb-2 p-3 sm:p-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm sm:text-base font-medium">Din Output</span>
              </div>
            </CardHeader>
            <CardContent className="p-3 sm:p-4">
              <pre className="text-xs sm:text-sm font-mono whitespace-pre-wrap break-all text-foreground">{output}</pre>
            </CardContent>
          </Card>
        )}

        {results.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-sm sm:text-base">Testresultater:</h4>
            {results.map((result, index) => (
              <Alert
                key={index}
                variant={result.passed ? 'default' : 'destructive'}
                className={result.passed ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : ''}
              >
                {result.passed ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                ) : (
                  <XCircle className="h-4 w-4 shrink-0" />
                )}
                <AlertDescription className={`text-sm sm:text-base ${result.passed ? 'text-green-800 dark:text-green-200' : ''}`}>
                  {result.message}
                </AlertDescription>
              </Alert>
            ))}

            {allTestsPassed && (
              <Alert className="bg-green-50 border-green-500 dark:bg-green-950 dark:border-green-800">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                <AlertDescription className="text-sm sm:text-base text-green-800 dark:text-green-200">
                  <strong>Gratulerer!</strong> Alle tester bestått! 🎉
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}

        {hints.length > 0 && (
          <div className="space-y-2">
            <button
              onClick={() => setShowHints(!showHints)}
              className="text-sm sm:text-base text-primary hover:underline font-medium min-h-[44px] sm:min-h-0 flex items-center"
            >
              {showHints ? 'Skjul hint' : 'Vis hint'}
            </button>
            {showHints && (
              <div className="space-y-2 pl-3 sm:pl-4 border-l-2 border-primary">
                {hints.map((hint, index) => (
                  <p key={index} className="text-sm sm:text-base text-muted-foreground">
                    💡 {hint}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
