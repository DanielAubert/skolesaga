'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathExampleBoxProps {
  examples: string[];
  className?: string;
}

// Konverterer vanlig matematikk-tekst til LaTeX
function toLatex(expr: string): string {
  return expr
    .replace(/__/g, '\\square')           // Blank til firkant
    .replace(/\*/g, '\\cdot ')            // * til ·
    .replace(/·/g, '\\cdot ')             // · til LaTeX cdot
    .replace(/÷/g, '\\div ')              // ÷ til LaTeX div
    .replace(/−/g, '-')                   // Minus-tegn
    .replace(/\^(\d+)/g, '^{$1}')         // Potenser
    .replace(/sqrt\(([^)]+)\)/g, '\\sqrt{$1}')  // Kvadratrot
    .replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}') // Brøker som a/b
    .replace(/\{(\d+)\|(\d+)\}/g, '\\frac{$1}{$2}'); // Brøker som {a|b}
}

export function MathExampleBox({ examples, className = '' }: MathExampleBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

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
    }).join('<br/>');

    containerRef.current.innerHTML = html;
  }, [examples]);

  return (
    <div
      ref={containerRef}
      className={`bg-white/20 backdrop-blur-sm p-2 rounded text-white text-center ${className}`}
      style={{
        fontSize: '0.9rem',
        lineHeight: '1.6'
      }}
    />
  );
}
