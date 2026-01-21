'use client';

import { createContext, useContext, useState, useRef, ReactNode } from 'react';

interface PyodideContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pyodide: any;
  isLoading: boolean;
  isReady: boolean;
  error: string | null;
  loadPyodide: () => Promise<void>;
}

const PyodideContext = createContext<PyodideContextType>({
  pyodide: null,
  isLoading: false,
  isReady: false,
  error: null,
  loadPyodide: async () => {},
});

export function usePyodide() {
  return useContext(PyodideContext);
}

interface PyodideProviderProps {
  children: ReactNode;
}

export function PyodideProvider({ children }: PyodideProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pyodideRef = useRef<any>(null);
  const loadingRef = useRef(false);

  const loadPyodideScript = () => {
    return new Promise<void>((resolve, reject) => {
      // Check if loadPyodide is already available
      // @ts-expect-error - Pyodide is loaded dynamically
      if (typeof window.loadPyodide === 'function') {
        resolve();
        return;
      }

      // Check if script already exists
      if (document.querySelector('script[src*="pyodide"]')) {
        // Script exists but loadPyodide not ready yet, wait for it
        let attempts = 0;
        const checkInterval = setInterval(() => {
          // @ts-expect-error - Pyodide is loaded dynamically
          if (typeof window.loadPyodide === 'function') {
            clearInterval(checkInterval);
            resolve();
          } else if (attempts++ > 50) { // 5 seconds timeout
            clearInterval(checkInterval);
            reject(new Error('Pyodide script loaded but loadPyodide function not available'));
          }
        }, 100);
        return;
      }

      // Script doesn't exist, create it
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        // Wait a bit for loadPyodide to be available
        setTimeout(() => {
          // @ts-expect-error - Pyodide is loaded dynamically
          if (typeof window.loadPyodide === 'function') {
            resolve();
          } else {
            reject(new Error('Pyodide script loaded but loadPyodide function not available'));
          }
        }, 100);
      };
      script.onerror = () => reject(new Error('Failed to load Pyodide script'));
      document.head.appendChild(script);
    });
  };

  const loadPyodide = async () => {
    // Only load once
    if (loadingRef.current || pyodideRef.current) {
      return;
    }

    loadingRef.current = true;
    setIsLoading(true);

    try {
      console.log('🐍 Waiting for Pyodide script...');

      // Wait for window.loadPyodide to be available (loaded by Next.js Script in layout)
      await loadPyodideScript();

      console.log('🐍 Initializing Pyodide...');

      // @ts-expect-error - Pyodide is loaded dynamically
      const pyodide = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/'
      });

      pyodideRef.current = pyodide;
      console.log('✅ Pyodide loaded successfully and ready to use');
      setIsReady(true);
    } catch (err) {
      console.error('❌ Failed to load Pyodide:', err);

      // More detailed error message
      let errorMsg = 'Kunne ikke laste Python-miljøet.';
      if (err instanceof Error) {
        if (err.message.includes('wasm')) {
          errorMsg += ' WebAssembly støttes ikke i din nettleser eller er blokkert.';
        } else if (err.message.includes('network') || err.message.includes('fetch')) {
          errorMsg += ' Nettverksfeil - sjekk internettforbindelsen din.';
        } else if (err.message.includes('loadPyodide function not available')) {
          errorMsg += ' Pyodide-scriptet kunne ikke lastes. Prøv å laste inn siden på nytt.';
        } else {
          errorMsg += ` Feil: ${err.message}`;
        }
      }

      setError(errorMsg);
      loadingRef.current = false; // Reset so user can try again
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PyodideContext.Provider
      value={{
        pyodide: pyodideRef.current,
        isLoading,
        isReady,
        error,
        loadPyodide,
      }}
    >
      {children}
    </PyodideContext.Provider>
  );
}
