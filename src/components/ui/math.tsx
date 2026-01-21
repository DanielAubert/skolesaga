'use client';

import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathProps {
  children: string;
  display?: boolean;
  className?: string;
}

export function Math({ children, display = false, className = '' }: MathProps) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: display,
  });

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// Inline math component
export function InlineMath({ children, className = '' }: Omit<MathProps, 'display'>) {
  return <Math display={false} className={className}>{children}</Math>;
}

// Block/display math component
export function BlockMath({ children, className = '' }: Omit<MathProps, 'display'>) {
  return (
    <div className={`my-4 text-center ${className}`}>
      <Math display={true}>{children}</Math>
    </div>
  );
}
