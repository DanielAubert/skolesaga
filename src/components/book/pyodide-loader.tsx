'use client';

import { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Loader2, Download, Cpu, AlertCircle } from 'lucide-react';

interface PyodideLoaderProps {
  isLoading: boolean;
  isReady: boolean;
  error: string | null;
}

export function PyodideLoader({ isLoading, isReady, error }: PyodideLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'downloading' | 'initializing' | 'ready'>('downloading');
  const [showTimeout, setShowTimeout] = useState(false);

  // Show timeout warning after 30 seconds
  useEffect(() => {
    if (!isLoading || isReady) {
      setShowTimeout(false);
      return;
    }

    const timeout = setTimeout(() => {
      if (!isReady) {
        setShowTimeout(true);
      }
    }, 30000);

    return () => clearTimeout(timeout);
  }, [isLoading, isReady]);

  useEffect(() => {
    if (!isLoading && !isReady) {
      setProgress(0);
      setStage('downloading');
      return;
    }

    if (isReady) {
      console.log('PyodideLoader: isReady is true, setting progress to 100%');
      setProgress(100);
      setStage('ready');
      return;
    }

    // Simulate progress for better UX
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          return prev; // Stop at 95% and wait for actual completion
        }
        if (prev < 50) {
          setStage('downloading');
          return prev + 3;
        } else if (prev < 95) {
          setStage('initializing');
          return prev + 1.5;
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, isReady]);

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Kunne ikke laste Python-miljøet</AlertTitle>
        <AlertDescription>
          {error}
          <br />
          <span className="text-sm">Prøv å laste inn siden på nytt.</span>
        </AlertDescription>
      </Alert>
    );
  }

  if (!isLoading && !isReady) {
    return null;
  }

  if (isReady) {
    return null; // Don't show anything when ready
  }

  return (
    <Alert className="bg-blue-50 border-blue-200">
      <Loader2 className="h-4 w-4 animate-spin" />
      <AlertTitle className="mb-2">
        {stage === 'downloading' && (
          <span className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Laster ned Python-miljø...
          </span>
        )}
        {stage === 'initializing' && (
          <span className="flex items-center gap-2">
            <Cpu className="h-4 w-4" />
            Initialiserer Python...
          </span>
        )}
      </AlertTitle>
      <AlertDescription>
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {stage === 'downloading' && `Laster Python-biblioteker (${progress}%)...`}
            {stage === 'initializing' && `Starter Python-runtime (${progress}%)...`}
          </p>
          <p className="text-xs text-muted-foreground">
            Dette skjer bare én gang og brukes av alle Python-editorer på siden.
          </p>
          {showTimeout && (
            <p className="text-xs text-amber-600 font-medium">
              ⚠️ Lastingen tar lengre tid enn forventet. Treg internettforbindelse eller stor filstørrelse.
            </p>
          )}
        </div>
      </AlertDescription>
    </Alert>
  );
}
