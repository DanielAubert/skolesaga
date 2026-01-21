'use client';

import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw, Copy, Check, Keyboard } from 'lucide-react';

export interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  height?: string;
  readOnly?: boolean;
  onRun?: (code: string) => void;
  showRunButton?: boolean;
  storageKey?: string; // Unique key for localStorage persistence
}

export function CodeEditor({
  initialCode = '',
  language = 'python',
  height = '300px',
  readOnly = false,
  onRun,
  showRunButton = true,
  storageKey
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);

  // Load code from localStorage on mount
  useEffect(() => {
    if (storageKey && typeof window !== 'undefined') {
      const saved = localStorage.getItem(`code-${storageKey}`);
      if (saved) {
        setCode(saved);
      }
    }
  }, [storageKey]);

  // Save code to localStorage on change (debounced)
  useEffect(() => {
    if (storageKey && typeof window !== 'undefined' && !readOnly) {
      const timeoutId = setTimeout(() => {
        localStorage.setItem(`code-${storageKey}`, code);
      }, 500); // Debounce 500ms

      return () => clearTimeout(timeoutId);
    }
  }, [code, storageKey, readOnly]);

  const handleReset = () => {
    setCode(initialCode);
    // Clear localStorage
    if (storageKey && typeof window !== 'undefined') {
      localStorage.removeItem(`code-${storageKey}`);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    if (onRun) {
      onRun(code);
    }
  };

  // Keyboard shortcut: Ctrl/Cmd + Enter to run
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && onRun && showRunButton) {
        e.preventDefault();
        onRun(code);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code, onRun, showRunButton]);

  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 bg-muted border-b gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">
            {language === 'python' ? 'Python' : language}
          </span>
          {storageKey && (
            <span className="hidden sm:inline-block text-xs text-muted-foreground px-2 py-0.5 bg-background rounded">
              Auto-lagret
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          {!readOnly && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="h-9 sm:h-8 px-2 sm:px-3"
              title="Tilbakestill"
            >
              <RotateCcw className="h-4 w-4 sm:mr-1" />
              <span className="hidden sm:inline">Tilbakestill</span>
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-9 sm:h-8 px-2 sm:px-3"
            title={copied ? "Kopiert!" : "Kopier"}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 sm:mr-1" />
                <span className="hidden sm:inline">Kopiert!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 sm:mr-1" />
                <span className="hidden sm:inline">Kopier</span>
              </>
            )}
          </Button>
          {showRunButton && onRun && (
            <Button
              variant="default"
              size="sm"
              onClick={handleRun}
              className="h-9 sm:h-8 px-3 sm:px-4"
              title="Kjør kode (Ctrl/Cmd + Enter)"
            >
              <Play className="h-4 w-4 mr-1" />
              Kjør
              <kbd className="ml-2 hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                <Keyboard className="h-3 w-3" />⏎
              </kbd>
            </Button>
          )}
        </div>
      </div>
      <Editor
        height={height}
        language={language}
        value={code}
        onChange={(value) => setCode(value || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          readOnly: readOnly,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          wordWrap: 'on'
        }}
      />
    </div>
  );
}
