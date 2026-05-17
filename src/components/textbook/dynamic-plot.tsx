'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { LineChart } from 'lucide-react';
import { LatexRenderer } from './latex-renderer';

// =========================================================================
// Types
// =========================================================================

export interface PlotParameter {
  name: string;        // Variable name in expressions, e.g., "alpha"
  label?: string;      // Display label (can contain LaTeX), e.g., "$\\alpha$"
  default: number;
  min: number;
  max: number;
  step?: number;
}

export interface PlotFunction {
  label?: string;      // e.g., "$f(x)$"
  expression: string;  // JS-evaluable, e.g., "alpha*x^2 + (1-alpha)*x"
  color?: string;      // CSS color or hex
  style?: 'solid' | 'dashed' | 'dotted';
}

export interface PlotPoint {
  x: number | string;  // Can reference parameters
  y: number | string;
  label?: string;
  color?: string;
}

export interface PlotShade {
  expression: string;  // Function to shade under
  from: number | string;
  to: number | string;
  color?: string;
  label?: string;
}

export interface DynamicPlotProps {
  title?: string;
  description?: string;
  xRange?: [number, number];
  yRange?: [number, number];        // Auto if not provided
  xLabel?: string;
  yLabel?: string;
  parameters?: PlotParameter[];
  functions: PlotFunction[];
  points?: PlotPoint[];
  shade?: PlotShade;
  height?: number;
}

// =========================================================================
// Safe-ish math expression compiler
// =========================================================================

const MATH_GLOBALS = `
const PI = Math.PI;
const E = Math.E;
const pi = Math.PI;
const e = Math.E;
const abs = Math.abs;
const sqrt = Math.sqrt;
const exp = Math.exp;
const ln = Math.log;
const log = Math.log;
const log10 = (x) => Math.log(x) / Math.LN10;
const log2 = (x) => Math.log(x) / Math.LN2;
const sin = Math.sin;
const cos = Math.cos;
const tan = Math.tan;
const asin = Math.asin;
const acos = Math.acos;
const atan = Math.atan;
const sinh = Math.sinh;
const cosh = Math.cosh;
const tanh = Math.tanh;
const floor = Math.floor;
const ceil = Math.ceil;
const round = Math.round;
const max = Math.max;
const min = Math.min;
const pow = Math.pow;
const sign = Math.sign;
`;

function preprocessExpression(expr: string): string {
  // Convert ^ to ** for exponentiation
  // Be careful: only between two operands
  return expr.replace(/\^/g, '**');
}

function compileExpression(
  expression: string,
  varNames: string[]
): ((args: number[]) => number) | null {
  try {
    const body = MATH_GLOBALS + `\nreturn ${preprocessExpression(expression)};`;
    const fn = new Function(...varNames, body) as (...args: number[]) => number;
    return (args: number[]) => {
      try {
        const result = fn(...args);
        return Number.isFinite(result) ? result : NaN;
      } catch {
        return NaN;
      }
    };
  } catch (e) {
    console.error('Failed to compile expression:', expression, e);
    return null;
  }
}

function evalScalar(
  value: number | string,
  varNames: string[],
  varValues: number[]
): number {
  if (typeof value === 'number') return value;
  const compiled = compileExpression(value, varNames);
  if (!compiled) return NaN;
  return compiled(varValues);
}

// =========================================================================
// Plot rendering
// =========================================================================

const DEFAULT_COLORS = [
  '#0ea5e9', // sky-500
  '#ef4444', // red-500
  '#22c55e', // green-500
  '#f59e0b', // amber-500
  '#a855f7', // purple-500
  '#06b6d4', // cyan-500
];

function niceTickStep(range: number, targetTicks = 7): number {
  const rough = range / targetTicks;
  const mag = Math.pow(10, Math.floor(Math.log10(rough)));
  const norm = rough / mag;
  let step;
  if (norm < 1.5) step = 1;
  else if (norm < 3) step = 2;
  else if (norm < 7) step = 5;
  else step = 10;
  return step * mag;
}

function generateTicks(min: number, max: number): number[] {
  const step = niceTickStep(max - min);
  const start = Math.ceil(min / step) * step;
  const ticks: number[] = [];
  for (let v = start; v <= max + 1e-9; v += step) {
    ticks.push(Math.round(v / step) * step);
  }
  return ticks;
}

function formatTick(v: number): string {
  if (Math.abs(v) < 1e-10) return '0';
  if (Math.abs(v) >= 1000) return v.toLocaleString('nb-NO');
  // Keep 1-2 decimals at most
  const rounded = Math.round(v * 100) / 100;
  return rounded.toLocaleString('nb-NO');
}

// =========================================================================
// Slider component
// =========================================================================

function ParameterSlider({
  param,
  value,
  onChange,
}: {
  param: PlotParameter;
  value: number;
  onChange: (v: number) => void;
}) {
  const step = param.step ?? (param.max - param.min) / 100;

  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between gap-2">
        <Label className="text-sm">
          {param.label ? <LatexRenderer content={param.label} /> : param.name}
        </Label>
        <span className="font-mono text-sm tabular-nums text-muted-foreground">
          {value.toLocaleString('nb-NO', { maximumFractionDigits: 3 })}
        </span>
      </div>
      <input
        type="range"
        min={param.min}
        max={param.max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-sky-600"
      />
    </div>
  );
}

// =========================================================================
// Main component
// =========================================================================

export function DynamicPlot({
  title,
  description,
  xRange = [-10, 10],
  yRange,
  xLabel = 'x',
  yLabel = 'y',
  parameters = [],
  functions,
  points = [],
  shade,
  height = 320,
}: DynamicPlotProps) {
  // Parameter state
  const [paramValues, setParamValues] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    parameters.forEach((p) => (init[p.name] = p.default));
    return init;
  });

  // Compile all functions (memoized by expression text)
  const compiledFns = useMemo(() => {
    const varNames = ['x', ...parameters.map((p) => p.name)];
    return functions.map((fn) => ({
      ...fn,
      eval: compileExpression(fn.expression, varNames),
    }));
  }, [functions, parameters]);

  const paramVarValues = parameters.map((p) => paramValues[p.name] ?? p.default);

  // Generate data
  const N_SAMPLES = 320;
  const [xMin, xMax] = xRange;
  const sampleStep = (xMax - xMin) / N_SAMPLES;

  const series = useMemo(() => {
    return compiledFns.map((fn) => {
      if (!fn.eval) return { ...fn, points: [] as Array<{ x: number; y: number }> };
      const pts: Array<{ x: number; y: number }> = [];
      for (let i = 0; i <= N_SAMPLES; i++) {
        const x = xMin + i * sampleStep;
        const y = fn.eval([x, ...paramVarValues]);
        pts.push({ x, y });
      }
      return { ...fn, points: pts };
    });
  }, [compiledFns, xMin, sampleStep, paramVarValues]);

  // Compute y-range automatically if not specified
  const computedYRange = useMemo<[number, number]>(() => {
    if (yRange) return yRange;
    const allY: number[] = [];
    series.forEach((s) =>
      s.points.forEach((p) => {
        if (Number.isFinite(p.y) && Math.abs(p.y) < 1e10) allY.push(p.y);
      })
    );
    if (allY.length === 0) return [-10, 10];
    const minY = Math.min(...allY);
    const maxY = Math.max(...allY);
    const pad = Math.max((maxY - minY) * 0.1, 0.5);
    return [minY - pad, maxY + pad];
  }, [series, yRange]);

  const [yMin, yMax] = computedYRange;

  // Resolve points (evaluate string expressions against parameters)
  const resolvedPoints = useMemo(() => {
    const varNames = parameters.map((p) => p.name);
    return points.map((pt) => ({
      x: evalScalar(pt.x, varNames, paramVarValues),
      y: evalScalar(pt.y, varNames, paramVarValues),
      label: pt.label,
      color: pt.color ?? '#dc2626',
    }));
  }, [points, parameters, paramVarValues]);

  // Resolve shaded region
  const resolvedShade = useMemo(() => {
    if (!shade) return null;
    const varNames = parameters.map((p) => p.name);
    const from = evalScalar(shade.from, varNames, paramVarValues);
    const to = evalScalar(shade.to, varNames, paramVarValues);
    const fnEval = compileExpression(shade.expression, ['x', ...varNames]);
    if (!fnEval || !Number.isFinite(from) || !Number.isFinite(to)) return null;

    const SHADE_N = 80;
    const step = (to - from) / SHADE_N;
    const pts: Array<{ x: number; y: number }> = [];
    for (let i = 0; i <= SHADE_N; i++) {
      const x = from + i * step;
      const y = fnEval([x, ...paramVarValues]);
      pts.push({ x, y });
    }
    return { points: pts, from, to, color: shade.color ?? '#0ea5e9', label: shade.label };
  }, [shade, parameters, paramVarValues]);

  // Layout
  const MARGIN = { top: 20, right: 16, bottom: 36, left: 48 };
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(640);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const plotW = Math.max(width - MARGIN.left - MARGIN.right, 100);
  const plotH = height - MARGIN.top - MARGIN.bottom;

  const xScale = (x: number) => ((x - xMin) / (xMax - xMin)) * plotW;
  const yScale = (y: number) => plotH - ((y - yMin) / (yMax - yMin)) * plotH;

  // Build SVG path strings, splitting at NaN/Infinity to avoid joining discontinuities
  const buildPath = (pts: Array<{ x: number; y: number }>): string => {
    const segments: string[] = [];
    let started = false;
    pts.forEach((p) => {
      if (!Number.isFinite(p.y) || p.y > yMax + (yMax - yMin) * 3 || p.y < yMin - (yMax - yMin) * 3) {
        started = false;
        return;
      }
      const sx = xScale(p.x);
      const sy = yScale(p.y);
      segments.push(started ? `L ${sx.toFixed(2)} ${sy.toFixed(2)}` : `M ${sx.toFixed(2)} ${sy.toFixed(2)}`);
      started = true;
    });
    return segments.join(' ');
  };

  const xTicks = generateTicks(xMin, xMax);
  const yTicks = generateTicks(yMin, yMax);

  // Determine if origin axes are visible
  const xZeroVisible = xMin <= 0 && xMax >= 0;
  const yZeroVisible = yMin <= 0 && yMax >= 0;

  return (
    <Card className="my-6 border-l-4 border-l-sky-500 bg-sky-50/40 dark:bg-sky-950/15">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2 text-sky-700 dark:text-sky-300">
          <LineChart className="h-5 w-5" />
          {title ?? 'Interaktiv graf'}
        </CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        {/* Plot area */}
        <div ref={containerRef} className="w-full overflow-hidden rounded bg-white dark:bg-zinc-950 p-2">
          <svg width={width} height={height} className="block">
            {/* Background */}
            <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
              {/* Grid */}
              {xTicks.map((t, i) => (
                <line
                  key={`gx-${i}`}
                  x1={xScale(t)}
                  x2={xScale(t)}
                  y1={0}
                  y2={plotH}
                  stroke="currentColor"
                  className="text-zinc-200 dark:text-zinc-800"
                  strokeWidth={1}
                />
              ))}
              {yTicks.map((t, i) => (
                <line
                  key={`gy-${i}`}
                  x1={0}
                  x2={plotW}
                  y1={yScale(t)}
                  y2={yScale(t)}
                  stroke="currentColor"
                  className="text-zinc-200 dark:text-zinc-800"
                  strokeWidth={1}
                />
              ))}

              {/* Axes through origin (bolded) */}
              {yZeroVisible && (
                <line
                  x1={0}
                  x2={plotW}
                  y1={yScale(0)}
                  y2={yScale(0)}
                  stroke="currentColor"
                  className="text-zinc-700 dark:text-zinc-300"
                  strokeWidth={1.5}
                />
              )}
              {xZeroVisible && (
                <line
                  x1={xScale(0)}
                  x2={xScale(0)}
                  y1={0}
                  y2={plotH}
                  stroke="currentColor"
                  className="text-zinc-700 dark:text-zinc-300"
                  strokeWidth={1.5}
                />
              )}

              {/* Shaded region */}
              {resolvedShade && resolvedShade.points.length > 1 && (() => {
                const segs: string[] = [];
                let started = false;
                resolvedShade.points.forEach((p) => {
                  if (!Number.isFinite(p.y)) {
                    started = false;
                    return;
                  }
                  const sx = xScale(p.x);
                  const sy = yScale(p.y);
                  segs.push(started ? `L ${sx.toFixed(2)} ${sy.toFixed(2)}` : `M ${sx.toFixed(2)} ${sy.toFixed(2)}`);
                  started = true;
                });
                // Close the shape down to y=0
                const last = resolvedShade.points[resolvedShade.points.length - 1];
                const first = resolvedShade.points[0];
                segs.push(`L ${xScale(last.x).toFixed(2)} ${yScale(0).toFixed(2)}`);
                segs.push(`L ${xScale(first.x).toFixed(2)} ${yScale(0).toFixed(2)}`);
                segs.push('Z');
                return (
                  <path
                    d={segs.join(' ')}
                    fill={resolvedShade.color}
                    fillOpacity={0.2}
                    stroke="none"
                  />
                );
              })()}

              {/* Function curves */}
              {series.map((s, i) => {
                const color = s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length];
                const dashArray = s.style === 'dashed' ? '6,4' : s.style === 'dotted' ? '2,3' : undefined;
                return (
                  <path
                    key={i}
                    d={buildPath(s.points)}
                    fill="none"
                    stroke={color}
                    strokeWidth={2}
                    strokeDasharray={dashArray}
                  />
                );
              })}

              {/* Points */}
              {resolvedPoints.map((pt, i) =>
                Number.isFinite(pt.x) && Number.isFinite(pt.y) ? (
                  <g key={i}>
                    <circle
                      cx={xScale(pt.x)}
                      cy={yScale(pt.y)}
                      r={4}
                      fill={pt.color}
                      stroke="white"
                      strokeWidth={1.5}
                    />
                    {pt.label && (
                      <text
                        x={xScale(pt.x) + 8}
                        y={yScale(pt.y) - 6}
                        className="fill-current text-xs"
                        fontFamily="ui-sans-serif, system-ui"
                      >
                        {pt.label}
                      </text>
                    )}
                  </g>
                ) : null
              )}

              {/* X-axis ticks and labels */}
              {xTicks.map((t, i) => (
                <g key={`xt-${i}`}>
                  <line
                    x1={xScale(t)}
                    x2={xScale(t)}
                    y1={plotH}
                    y2={plotH + 4}
                    stroke="currentColor"
                    className="text-zinc-500 dark:text-zinc-400"
                  />
                  <text
                    x={xScale(t)}
                    y={plotH + 16}
                    textAnchor="middle"
                    className="fill-current text-[10px] text-zinc-600 dark:text-zinc-400"
                    fontFamily="ui-monospace, monospace"
                  >
                    {formatTick(t)}
                  </text>
                </g>
              ))}

              {/* Y-axis ticks and labels */}
              {yTicks.map((t, i) => (
                <g key={`yt-${i}`}>
                  <line
                    x1={-4}
                    x2={0}
                    y1={yScale(t)}
                    y2={yScale(t)}
                    stroke="currentColor"
                    className="text-zinc-500 dark:text-zinc-400"
                  />
                  <text
                    x={-8}
                    y={yScale(t) + 3}
                    textAnchor="end"
                    className="fill-current text-[10px] text-zinc-600 dark:text-zinc-400"
                    fontFamily="ui-monospace, monospace"
                  >
                    {formatTick(t)}
                  </text>
                </g>
              ))}

              {/* Axis labels */}
              <text
                x={plotW}
                y={plotH - 6}
                textAnchor="end"
                className="fill-current text-xs italic text-zinc-700 dark:text-zinc-300"
              >
                {xLabel}
              </text>
              <text
                x={6}
                y={4}
                className="fill-current text-xs italic text-zinc-700 dark:text-zinc-300"
              >
                {yLabel}
              </text>
            </g>
          </svg>
        </div>

        {/* Legend */}
        {functions.some((f) => f.label) && (
          <div className="flex flex-wrap gap-3 text-sm">
            {functions.map((f, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span
                  className="inline-block h-2.5 w-5 rounded-sm"
                  style={{ background: f.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length] }}
                />
                {f.label && <LatexRenderer content={f.label} />}
              </div>
            ))}
          </div>
        )}

        {/* Parameter sliders */}
        {parameters.length > 0 && (
          <div className="space-y-3 rounded-lg bg-muted/40 px-4 py-3">
            {parameters.map((p) => (
              <ParameterSlider
                key={p.name}
                param={p}
                value={paramValues[p.name] ?? p.default}
                onChange={(v) =>
                  setParamValues((prev) => ({ ...prev, [p.name]: v }))
                }
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
