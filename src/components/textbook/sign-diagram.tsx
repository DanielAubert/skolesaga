'use client';

import { cn } from '@/lib/utils';
import { LatexRenderer } from './latex-renderer';

export interface SignDiagramRow {
  label: string;           // LaTeX for factor, e.g., "-3", "(x-6)", "\\frac{1}{x}"
  values: SignValue[];     // Values for each interval
  isResult?: boolean;      // True for the product/result row
}

export type SignValue = '+' | '-' | '0' | 'undef';

export interface SignDiagramProps {
  /** Critical points on the number line */
  criticalPoints: string[];   // LaTeX values, e.g., ["-3", "6"]
  /** Rows of factors and their signs */
  rows: SignDiagramRow[];
  /** Optional title */
  title?: string;
  /** Optional class name */
  className?: string;
}

/**
 * Traditional Norwegian sign diagram (fortegnsskjema) component.
 *
 * Displays a number line with critical points and sign indicators
 * using dashed lines for negative and solid lines for positive regions.
 */
export function SignDiagram({ criticalPoints, rows, title, className }: SignDiagramProps) {
  const numIntervals = criticalPoints.length + 1;
  const expectedValues = numIntervals + criticalPoints.length;

  return (
    <div className={cn('my-6 overflow-x-auto', className)}>
      {title && (
        <div className="text-sm font-medium text-muted-foreground mb-2">
          {title}
        </div>
      )}
      <div className="inline-block min-w-full">
        <div className="flex flex-col">
          {/* X-line header row */}
          <XLineRow criticalPoints={criticalPoints} />

          {/* Factor rows */}
          {rows.map((row, rowIndex) => (
            <SignRow
              key={rowIndex}
              row={row}
              criticalPoints={criticalPoints}
              isLast={rowIndex === rows.length - 1}
              expectedValues={expectedValues}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface XLineRowProps {
  criticalPoints: string[];
}

function XLineRow({ criticalPoints }: XLineRowProps) {
  const numIntervals = criticalPoints.length + 1;

  return (
    <div className="flex items-center">
      {/* Label */}
      <div className="w-28 shrink-0 px-3 py-2 text-sm font-medium border-r border-muted-foreground/30">
        x-linje
      </div>

      {/* Number line with critical points */}
      <div className="flex-1 flex items-center relative h-10">
        {/* Continuous line */}
        <div className="absolute inset-x-0 top-1/2 h-0.5 bg-foreground" />

        {/* Intervals and critical points */}
        {Array.from({ length: numIntervals + criticalPoints.length }).map((_, i) => {
          const isAtCriticalPoint = i % 2 === 1;
          const criticalIndex = Math.floor(i / 2);

          return (
            <div
              key={i}
              className={cn(
                'flex-1 flex items-center justify-center min-w-[50px] relative',
                isAtCriticalPoint && 'flex-none w-12'
              )}
            >
              {isAtCriticalPoint && (
                <div className="flex flex-col items-center z-10">
                  {/* Critical point value */}
                  <div className="text-sm font-medium mb-0.5 bg-background px-1">
                    <LatexRenderer content={`$${criticalPoints[criticalIndex]}$`} />
                  </div>
                  {/* Vertical marker */}
                  <div className="w-0.5 h-3 bg-foreground" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface SignRowProps {
  row: SignDiagramRow;
  criticalPoints: string[];
  isLast: boolean;
  expectedValues: number;
}

function SignRow({ row, criticalPoints, isLast, expectedValues }: SignRowProps) {
  const numIntervals = criticalPoints.length + 1;
  const totalCols = numIntervals + criticalPoints.length;

  // Pad values if needed
  const values = [...row.values];
  while (values.length < expectedValues) {
    values.push('-');
  }

  return (
    <div className={cn(
      'flex items-center',
      row.isResult && 'bg-muted/20',
      !isLast && !row.isResult && 'border-b border-muted-foreground/20'
    )}>
      {/* Row label */}
      <div className={cn(
        'w-28 shrink-0 px-3 py-3 text-sm border-r border-muted-foreground/30',
        row.isResult && 'font-semibold'
      )}>
        <LatexRenderer content={`$${row.label}$`} />
      </div>

      {/* Sign cells - render each column individually for perfect alignment */}
      <div className="flex-1 flex items-center h-10">
        {Array.from({ length: totalCols }).map((_, i) => {
          const isAtCriticalPoint = i % 2 === 1;
          const val = values[i];

          return (
            <SignCell
              key={i}
              value={val}
              isAtCriticalPoint={isAtCriticalPoint}
              isResult={row.isResult}
            />
          );
        })}
      </div>
    </div>
  );
}

interface SignCellProps {
  value: SignValue;
  isAtCriticalPoint: boolean;
  isResult?: boolean;
}

function SignCell({ value, isAtCriticalPoint, isResult }: SignCellProps) {
  const lineColor = isResult
    ? 'border-foreground'
    : 'border-muted-foreground/70';

  // Use exact same width classes as XLineRow for perfect alignment
  const widthClass = isAtCriticalPoint
    ? 'flex-none w-12'
    : 'flex-1 min-w-[50px]';

  // Zero at critical point
  if (value === '0') {
    return (
      <div className={cn(widthClass, 'flex items-center justify-center')}>
        <span className={cn(
          'text-base font-bold z-10',
          isResult ? 'text-foreground' : 'text-muted-foreground'
        )}>
          0
        </span>
      </div>
    );
  }

  // Undefined at critical point
  if (value === 'undef') {
    return (
      <div className={cn(widthClass, 'flex items-center justify-center')}>
        <div className="relative w-4 h-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={cn(
              'w-5 h-0.5 rotate-45 absolute',
              isResult ? 'bg-foreground' : 'bg-muted-foreground/70'
            )} />
            <div className={cn(
              'w-5 h-0.5 -rotate-45 absolute',
              isResult ? 'bg-foreground' : 'bg-muted-foreground/70'
            )} />
          </div>
        </div>
      </div>
    );
  }

  // Line (+ or -)
  const isDashed = value === '-';

  return (
    <div className={cn(widthClass, 'flex items-center')}>
      <div className={cn(
        'w-full border-t-2',
        isDashed ? 'border-dashed' : 'border-solid',
        lineColor
      )} />
    </div>
  );
}

// Helper function to create sign diagram data from a simpler format
export function createSignDiagram(
  criticalPoints: string[],
  factors: Array<{ label: string; signs: string }>,
  resultLabel = 'f(x)'
): { criticalPoints: string[]; rows: SignDiagramRow[] } {
  const parseSign = (char: string): SignValue => {
    switch (char) {
      case '+': return '+';
      case '-': return '-';
      case '0': return '0';
      case '∄':
      case 'u':
      case 'U':
        return 'undef';
      default: return '-';
    }
  };

  const rows: SignDiagramRow[] = factors.map(f => ({
    label: f.label,
    values: f.signs.split('').filter(c => c !== ' ').map(parseSign),
  }));

  // Calculate result row by multiplying signs
  const numValues = rows[0]?.values.length || 0;
  const resultValues: SignValue[] = [];

  for (let i = 0; i < numValues; i++) {
    let hasUndef = false;
    let hasZero = false;
    let negativeCount = 0;

    for (const row of rows) {
      const val = row.values[i];
      if (val === 'undef') hasUndef = true;
      else if (val === '0') hasZero = true;
      else if (val === '-') negativeCount++;
    }

    if (hasUndef) resultValues.push('undef');
    else if (hasZero) resultValues.push('0');
    else resultValues.push(negativeCount % 2 === 0 ? '+' : '-');
  }

  rows.push({
    label: resultLabel,
    values: resultValues,
    isResult: true,
  });

  return { criticalPoints, rows };
}
