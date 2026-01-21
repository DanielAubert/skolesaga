'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface DynamicMathExampleProps {
  examples: string[];  // Array av eksempler
  className?: string;
}

// Konverterer vanlig matematikk-tekst til LaTeX
function toLatex(expr: string): string {
  return expr
    .replace(/__/g, '\\square')              // Blank til firkant
    .replace(/\*\*/g, '^')                   // ** til ^
    .replace(/\*/g, '\\cdot ')               // * til ·
    .replace(/·/g, '\\cdot ')                // · til LaTeX cdot
    .replace(/÷/g, '\\div ')                 // ÷ til LaTeX div
    .replace(/−/g, '-')                      // Minus-tegn
    .replace(/(\d+)\^(\d+)/g, '$1^{$2}')     // Potenser 2^3 -> 2^{3}
    .replace(/(\w)\^(\d+)/g, '$1^{$2}')      // Variable potenser a^3 -> a^{3}
    .replace(/sqrt\(([^)]+)\)/g, '\\sqrt{$1}')  // Kvadratrot
    .replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}'); // Brøker
}

export function DynamicMathExample({ examples, className = '' }: DynamicMathExampleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || examples.length === 0) return;

    const html = examples.map(example => {
      try {
        const latex = toLatex(example);
        return katex.renderToString(latex, {
          displayMode: false,
          throwOnError: false,
          trust: true,
        });
      } catch {
        return `<span>${example}</span>`;
      }
    }).join('<span style="margin: 0 0.3em;">,</span> ');

    containerRef.current.innerHTML = html;
  }, [examples]);

  return (
    <div
      ref={containerRef}
      className={`bg-white/20 backdrop-blur-sm p-2 rounded text-white text-center ${className}`}
      style={{
        fontSize: '0.85rem',
        lineHeight: '1.5'
      }}
    />
  );
}
