'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Plus,
  Minus,
  Save,
  RotateCcw,
  Download,
  Calculator,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpreadsheetCell {
  value: string;
  formula?: string;
}

interface SpreadsheetData {
  cells: SpreadsheetCell[][];
  savedAt?: string;
}

interface SpreadsheetInputProps {
  exerciseId: string;
  chapterId: string;
  courseId: string;
  initialRows?: number;
  initialCols?: number;
  headers?: string[];
  template?: 'budget' | 'custom';
  onSave?: (data: SpreadsheetData) => void;
}

// Budget template with pre-filled headers
const BUDGET_TEMPLATE = {
  headers: ['Post', 'Inntekter', 'Utgifter'],
  rows: [
    ['Lønn/lommepenger', '', ''],
    ['Andre inntekter', '', ''],
    ['Mat', '', ''],
    ['Transport', '', ''],
    ['Klær', '', ''],
    ['Underholdning', '', ''],
    ['Sparing', '', ''],
    ['Annet', '', ''],
    ['SUM', '=SUM(B1:B8)', '=SUM(C1:C8)'],
    ['Balanse', '=SUM(B1:B8)-SUM(C1:C8)', ''],
  ],
};

export function SpreadsheetInput({
  exerciseId,
  chapterId,
  courseId,
  initialRows = 5,
  initialCols = 3,
  headers,
  template = 'custom',
  onSave,
}: SpreadsheetInputProps) {
  const [isLoadingFromDb, setIsLoadingFromDb] = useState(true);
  const [dbLoadedCells, setDbLoadedCells] = useState<SpreadsheetCell[][] | null>(null);

  const getInitialData = useCallback((): SpreadsheetCell[][] => {
    // If we have data loaded from database, use that
    if (dbLoadedCells) {
      return dbLoadedCells;
    }

    // Use template if specified
    if (template === 'budget') {
      return BUDGET_TEMPLATE.rows.map(row =>
        row.map(cell => ({
          value: cell.startsWith('=') ? '' : cell,
          formula: cell.startsWith('=') ? cell : undefined,
        }))
      );
    }

    // Create empty grid
    return Array(initialRows).fill(null).map(() =>
      Array(initialCols).fill(null).map(() => ({ value: '' }))
    );
  }, [dbLoadedCells, template, initialRows, initialCols]);

  // Load from database on mount
  useEffect(() => {
    const loadFromDatabase = async () => {
      try {
        const params = new URLSearchParams({
          courseId,
          chapterId,
          exerciseId,
        });

        const response = await fetch(`/api/textbook/submissions?${params}`);
        if (response.ok) {
          const data = await response.json();
          const submission = data.submissions?.[0];
          if (submission?.content?.cells) {
            setDbLoadedCells(submission.content.cells);
            setCells(submission.content.cells);
          }
        }
      } catch (error) {
        console.error('Error loading spreadsheet from database:', error);
      } finally {
        setIsLoadingFromDb(false);
      }
    };

    loadFromDatabase();
  }, [courseId, chapterId, exerciseId]);

  const [cells, setCells] = useState<SpreadsheetCell[][]>(getInitialData);
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[][]>([]);

  // Get headers based on template or props
  const columnHeaders = template === 'budget'
    ? BUDGET_TEMPLATE.headers
    : headers || Array(cells[0]?.length || initialCols).fill(null).map((_, i) =>
        String.fromCharCode(65 + i) // A, B, C, etc.
      );

  // Evaluate formula
  const evaluateFormula = useCallback((formula: string, currentCells: SpreadsheetCell[][]): string => {
    if (!formula.startsWith('=')) return formula;

    // Helper function to calculate SUM
    const calculateSum = (startCol: number, startRow: number, endCol: number, endRow: number): number => {
      let sum = 0;
      for (let r = startRow; r <= endRow; r++) {
        for (let c = startCol; c <= endCol; c++) {
          const cellValue = currentCells[r]?.[c]?.value || '0';
          const num = parseFloat(cellValue.replace(/[^\d.-]/g, '')) || 0;
          sum += num;
        }
      }
      return sum;
    };

    const expr = formula.substring(1).toUpperCase();

    // Handle SUM-SUM (e.g., =SUM(B1:B8)-SUM(C1:C8))
    const sumDiffMatch = expr.match(/SUM\(([A-Z])(\d+):([A-Z])(\d+)\)-SUM\(([A-Z])(\d+):([A-Z])(\d+)\)/);
    if (sumDiffMatch) {
      const sum1 = calculateSum(
        sumDiffMatch[1].charCodeAt(0) - 65,
        parseInt(sumDiffMatch[2]) - 1,
        sumDiffMatch[3].charCodeAt(0) - 65,
        parseInt(sumDiffMatch[4]) - 1
      );
      const sum2 = calculateSum(
        sumDiffMatch[5].charCodeAt(0) - 65,
        parseInt(sumDiffMatch[6]) - 1,
        sumDiffMatch[7].charCodeAt(0) - 65,
        parseInt(sumDiffMatch[8]) - 1
      );
      return (sum1 - sum2).toLocaleString('nb-NO');
    }

    // Handle simple SUM function
    const sumMatch = expr.match(/SUM\(([A-Z])(\d+):([A-Z])(\d+)\)/);
    if (sumMatch) {
      const sum = calculateSum(
        sumMatch[1].charCodeAt(0) - 65,
        parseInt(sumMatch[2]) - 1,
        sumMatch[3].charCodeAt(0) - 65,
        parseInt(sumMatch[4]) - 1
      );
      return sum.toLocaleString('nb-NO');
    }

    // Handle simple cell references and arithmetic
    const cellRefMatch = expr.match(/([A-Z])(\d+)([+-])([A-Z])(\d+)/);
    if (cellRefMatch) {
      const col1 = cellRefMatch[1].charCodeAt(0) - 65;
      const row1 = parseInt(cellRefMatch[2]) - 1;
      const operator = cellRefMatch[3];
      const col2 = cellRefMatch[4].charCodeAt(0) - 65;
      const row2 = parseInt(cellRefMatch[5]) - 1;

      const val1 = parseFloat(currentCells[row1]?.[col1]?.value?.replace(/[^\d.-]/g, '') || '0') || 0;
      const val2 = parseFloat(currentCells[row2]?.[col2]?.value?.replace(/[^\d.-]/g, '') || '0') || 0;

      const result = operator === '+' ? val1 + val2 : val1 - val2;
      return result.toLocaleString('nb-NO');
    }

    return '#ERROR';
  }, []);

  // Recalculate all formulas
  const recalculateFormulas = useCallback((currentCells: SpreadsheetCell[][]): SpreadsheetCell[][] => {
    return currentCells.map(row =>
      row.map(cell => {
        if (cell.formula) {
          return {
            ...cell,
            value: evaluateFormula(cell.formula, currentCells),
          };
        }
        return cell;
      })
    );
  }, [evaluateFormula]);

  // Update cell value
  const updateCell = useCallback((row: number, col: number, value: string) => {
    setCells(prev => {
      const newCells = prev.map((r, ri) =>
        r.map((c, ci) => {
          if (ri === row && ci === col) {
            // Check if it's a formula
            if (value.startsWith('=')) {
              return { value: '', formula: value };
            }
            return { value, formula: undefined };
          }
          return c;
        })
      );
      // Recalculate all formulas
      return recalculateFormulas(newCells);
    });
    setIsSaved(false);
  }, [recalculateFormulas]);

  // Add row
  const addRow = useCallback(() => {
    setCells(prev => [
      ...prev,
      Array(prev[0]?.length || initialCols).fill(null).map(() => ({ value: '' })),
    ]);
    setIsSaved(false);
  }, [initialCols]);

  // Remove row
  const removeRow = useCallback(() => {
    setCells(prev => {
      if (prev.length <= 1) return prev;
      return prev.slice(0, -1);
    });
    setIsSaved(false);
  }, []);

  // Add column
  const addColumn = useCallback(() => {
    setCells(prev => prev.map(row => [...row, { value: '' }]));
    setIsSaved(false);
  }, []);

  // Remove column
  const removeColumn = useCallback(() => {
    setCells(prev => {
      if (prev[0]?.length <= 1) return prev;
      return prev.map(row => row.slice(0, -1));
    });
    setIsSaved(false);
  }, []);

  // Save to database
  const saveData = useCallback(async () => {
    const data: SpreadsheetData = {
      cells,
      savedAt: new Date().toISOString(),
    };

    try {
      await fetch('/api/textbook/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          exerciseId,
          chapterId,
          courseId,
          submissionType: 'spreadsheet',
          content: data,
        }),
      });
      setIsSaved(true);
      onSave?.(data);
    } catch (error) {
      console.error('Error saving spreadsheet:', error);
    }
  }, [cells, exerciseId, chapterId, courseId, onSave]);

  // Reset to template
  const resetData = useCallback(() => {
    if (confirm('Er du sikker på at du vil tilbakestille regnearket?')) {
      setDbLoadedCells(null);
      // Reset to template data
      if (template === 'budget') {
        setCells(BUDGET_TEMPLATE.rows.map(row =>
          row.map(cell => ({
            value: cell.startsWith('=') ? '' : cell,
            formula: cell.startsWith('=') ? cell : undefined,
          }))
        ));
      } else {
        setCells(Array(initialRows).fill(null).map(() =>
          Array(initialCols).fill(null).map(() => ({ value: '' }))
        ));
      }
      setIsSaved(false);
    }
  }, [template, initialRows, initialCols]);

  // Export to CSV
  const exportCSV = useCallback(() => {
    const header = columnHeaders.join(';');
    const rows = cells.map(row =>
      row.map(cell => cell.value).join(';')
    ).join('\n');
    const csv = `${header}\n${rows}`;

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `budsjett-${exerciseId}.csv`;
    link.click();
  }, [cells, columnHeaders, exerciseId]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, row: number, col: number) => {
    const maxRow = cells.length - 1;
    const maxCol = cells[0].length - 1;

    switch (e.key) {
      case 'Enter':
      case 'ArrowDown':
        e.preventDefault();
        if (row < maxRow) {
          inputRefs.current[row + 1]?.[col]?.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (row > 0) {
          inputRefs.current[row - 1]?.[col]?.focus();
        }
        break;
      case 'Tab':
        if (!e.shiftKey && col === maxCol && row < maxRow) {
          e.preventDefault();
          inputRefs.current[row + 1]?.[0]?.focus();
        } else if (e.shiftKey && col === 0 && row > 0) {
          e.preventDefault();
          inputRefs.current[row - 1]?.[maxCol]?.focus();
        }
        break;
    }
  }, [cells]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = cells.map(() => Array(cells[0]?.length || 0).fill(null));
  }, [cells.length, cells[0]?.length]);

  // Recalculate formulas on mount
  useEffect(() => {
    setCells(prev => recalculateFormulas(prev));
  }, [recalculateFormulas]);

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={addRow}>
          <Plus className="h-4 w-4 mr-1" />
          Rad
        </Button>
        <Button variant="outline" size="sm" onClick={removeRow}>
          <Minus className="h-4 w-4 mr-1" />
          Rad
        </Button>
        <Button variant="outline" size="sm" onClick={addColumn}>
          <Plus className="h-4 w-4 mr-1" />
          Kolonne
        </Button>
        <Button variant="outline" size="sm" onClick={removeColumn}>
          <Minus className="h-4 w-4 mr-1" />
          Kolonne
        </Button>
        <div className="flex-1" />
        <Button variant="outline" size="sm" onClick={resetData}>
          <RotateCcw className="h-4 w-4 mr-1" />
          Tilbakestill
        </Button>
        <Button variant="outline" size="sm" onClick={exportCSV}>
          <Download className="h-4 w-4 mr-1" />
          Eksporter
        </Button>
        <Button
          size="sm"
          onClick={saveData}
          className={cn(isSaved && 'bg-green-600 hover:bg-green-700')}
        >
          <Save className="h-4 w-4 mr-1" />
          {isSaved ? 'Lagret!' : 'Lagre'}
        </Button>
      </div>

      {/* Spreadsheet */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted/50">
              <th className="w-10 border-r border-border p-2 text-center text-xs font-medium text-muted-foreground">
                #
              </th>
              {columnHeaders.slice(0, cells[0]?.length).map((header, i) => (
                <th
                  key={i}
                  className="border-r border-border p-2 text-center text-sm font-semibold min-w-[120px]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cells.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-border">
                <td className="border-r border-border p-2 text-center text-xs font-medium text-muted-foreground bg-muted/30">
                  {rowIndex + 1}
                </td>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={cn(
                      'border-r border-border p-0',
                      activeCell?.row === rowIndex && activeCell?.col === colIndex && 'ring-2 ring-primary ring-inset'
                    )}
                  >
                    <Input
                      ref={(el) => {
                        if (!inputRefs.current[rowIndex]) {
                          inputRefs.current[rowIndex] = [];
                        }
                        inputRefs.current[rowIndex][colIndex] = el;
                      }}
                      value={cell.formula && activeCell?.row === rowIndex && activeCell?.col === colIndex
                        ? cell.formula
                        : cell.value}
                      onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                      onFocus={() => setActiveCell({ row: rowIndex, col: colIndex })}
                      onBlur={() => setActiveCell(null)}
                      onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                      className={cn(
                        'border-0 rounded-none h-10 focus-visible:ring-0 focus-visible:ring-offset-0',
                        cell.formula && 'bg-blue-50 dark:bg-blue-950/30',
                        colIndex > 0 && 'text-right'
                      )}
                      placeholder={colIndex === 0 ? 'Beskrivelse' : '0'}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formula help */}
      <div className="text-xs text-muted-foreground flex items-center gap-2">
        <Calculator className="h-3 w-3" />
        <span>Tips: Bruk formler som =SUM(B1:B5) eller =B9-C9 for automatiske beregninger</span>
      </div>
    </div>
  );
}
