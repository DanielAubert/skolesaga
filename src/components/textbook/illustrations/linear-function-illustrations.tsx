'use client';

import type { JSX } from 'react';

interface LinearFunctionIllustrationProps {
  className?: string;
}

// ============================================================================
// Hjelpefunksjoner (gjenbrukt fra function-graph-illustrations.tsx pattern)
// ============================================================================

interface GraphConfig {
  width: number;
  height: number;
  padL: number;
  padR: number;
  padT: number;
  padB: number;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

function graphHelpers(cfg: GraphConfig) {
  const plotW = cfg.width - cfg.padL - cfg.padR;
  const plotH = cfg.height - cfg.padT - cfg.padB;
  const tx = (mx: number) => cfg.padL + ((mx - cfg.xMin) / (cfg.xMax - cfg.xMin)) * plotW;
  const ty = (my: number) => cfg.padT + ((cfg.yMax - my) / (cfg.yMax - cfg.yMin)) * plotH;
  return { tx, ty, ox: tx(0), oy: ty(0), plotW, plotH };
}

function Axes({ cfg, tx, ty, ox, oy }: {
  cfg: GraphConfig;
  tx: (x: number) => number;
  ty: (y: number) => number;
  ox: number;
  oy: number;
}) {
  return (
    <g>
      <line x1={cfg.padL} y1={oy} x2={cfg.width - cfg.padR} y2={oy} stroke="#000" strokeWidth="1.5" />
      <line x1={ox} y1={cfg.padT} x2={ox} y2={cfg.height - cfg.padB} stroke="#000" strokeWidth="1.5" />
      <polygon points={`${cfg.width - cfg.padR},${oy} ${cfg.width - cfg.padR - 7},${oy - 3.5} ${cfg.width - cfg.padR - 7},${oy + 3.5}`} fill="#000" />
      <polygon points={`${ox},${cfg.padT} ${ox - 3.5},${cfg.padT + 7} ${ox + 3.5},${cfg.padT + 7}`} fill="#000" />
      <text x={cfg.width - cfg.padR - 2} y={oy - 10} fontSize="14" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Math, serif" fontStyle="italic">x</text>
      <text x={ox + 12} y={cfg.padT + 12} fontSize="14" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">y</text>
    </g>
  );
}

function GridLines({ cfg, tx, ty }: {
  cfg: GraphConfig;
  tx: (x: number) => number;
  ty: (y: number) => number;
}) {
  const lines: JSX.Element[] = [];
  for (let v = Math.ceil(cfg.xMin); v <= Math.floor(cfg.xMax); v++) {
    lines.push(
      <line key={`gx${v}`} x1={tx(v)} y1={cfg.padT} x2={tx(v)} y2={cfg.height - cfg.padB}
        stroke="#e0e0e0" strokeWidth="0.5" />
    );
  }
  for (let v = Math.ceil(cfg.yMin); v <= Math.floor(cfg.yMax); v++) {
    lines.push(
      <line key={`gy${v}`} x1={cfg.padL} y1={ty(v)} x2={cfg.width - cfg.padR} y2={ty(v)}
        stroke="#e0e0e0" strokeWidth="0.5" />
    );
  }
  return <g>{lines}</g>;
}

function TickMarks({ cfg, tx, ty, ox, oy }: {
  cfg: GraphConfig;
  tx: (x: number) => number;
  ty: (y: number) => number;
  ox: number;
  oy: number;
}) {
  const elems: JSX.Element[] = [];
  for (let v = Math.ceil(cfg.xMin); v <= Math.floor(cfg.xMax); v++) {
    if (v === 0) continue;
    elems.push(
      <g key={`xt${v}`}>
        <line x1={tx(v)} y1={oy - 3} x2={tx(v)} y2={oy + 3} stroke="#000" strokeWidth="1" />
        <text x={tx(v)} y={oy + 16} fontSize="11" fill="#000"
          textAnchor="middle" fontFamily="KaTeX_Main, serif">{v}</text>
      </g>
    );
  }
  for (let v = Math.ceil(cfg.yMin); v <= Math.floor(cfg.yMax); v++) {
    if (v === 0) continue;
    elems.push(
      <g key={`yt${v}`}>
        <line x1={ox - 3} y1={ty(v)} x2={ox + 3} y2={ty(v)} stroke="#000" strokeWidth="1" />
        <text x={ox - 7} y={ty(v) + 4} fontSize="11" fill="#000"
          textAnchor="end" fontFamily="KaTeX_Main, serif">{v}</text>
      </g>
    );
  }
  return <g>{elems}</g>;
}

function linePath(
  f: (x: number) => number,
  xMin: number,
  xMax: number,
  tx: (x: number) => number,
  ty: (y: number) => number,
): string {
  return `M ${tx(xMin).toFixed(1)},${ty(f(xMin)).toFixed(1)} L ${tx(xMax).toFixed(1)},${ty(f(xMax)).toFixed(1)}`;
}

// ============================================================================
// Lineær funksjon: y = 2x + 1 med stigningstall-trekant
// ============================================================================

const CFG_LIN: GraphConfig = {
  width: 320,
  height: 300,
  padL: 40,
  padR: 15,
  padT: 15,
  padB: 30,
  xMin: -3,
  xMax: 4,
  yMin: -4,
  yMax: 8,
};

export function LinearFunctionIllustration({ className }: LinearFunctionIllustrationProps) {
  const f = (x: number) => 2 * x + 1;
  const { tx, ty, ox, oy } = graphHelpers(CFG_LIN);
  const clipId = 'clip-linear';

  // Stigningstall-trekant: fra (1, 3) til (2, 5)
  const x1 = 1, y1 = f(x1), x2 = 2, y2 = f(x2);

  return (
    <svg viewBox={`0 0 ${CFG_LIN.width} ${CFG_LIN.height}`} className={className}
      aria-label="Graf av y = 2x + 1 med stigningstall-trekant">
      <defs>
        <clipPath id={clipId}>
          <rect x={CFG_LIN.padL} y={CFG_LIN.padT}
            width={CFG_LIN.width - CFG_LIN.padL - CFG_LIN.padR}
            height={CFG_LIN.height - CFG_LIN.padT - CFG_LIN.padB} />
        </clipPath>
      </defs>

      <GridLines cfg={CFG_LIN} tx={tx} ty={ty} />
      <Axes cfg={CFG_LIN} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG_LIN} tx={tx} ty={ty} ox={ox} oy={oy} />

      {/* Linjen */}
      <path d={linePath(f, CFG_LIN.xMin, CFG_LIN.xMax, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`} />

      {/* Stigningstall-trekant */}
      <line x1={tx(x1)} y1={ty(y1)} x2={tx(x2)} y2={ty(y1)}
        stroke="#000" strokeWidth="1.5" strokeDasharray="5,3" />
      <line x1={tx(x2)} y1={ty(y1)} x2={tx(x2)} y2={ty(y2)}
        stroke="#000" strokeWidth="1.5" strokeDasharray="5,3" />

      {/* Delta-labels */}
      <text x={(tx(x1) + tx(x2)) / 2} y={ty(y1) + 16} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">{'Δ'}x = 1</text>
      <text x={tx(x2) + 10} y={(ty(y1) + ty(y2)) / 2 + 4} fontSize="12" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Main, serif">{'Δ'}y = 2</text>

      {/* Konstantledd markert på y-aksen */}
      <circle cx={ox} cy={ty(1)} r="3.5" fill="#000" />
      <text x={ox - 12} y={ty(1) - 8} fontSize="11" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Main, serif">b = 1</text>

      {/* Funksjonsnavn */}
      <text x={tx(2.5)} y={ty(f(2.5)) - 10} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">y = 2x + 1</text>
    </svg>
  );
}

// ============================================================================
// Parallelle linjer (samme stigningstall, ulikt konstantledd)
// ============================================================================

const CFG_PAR: GraphConfig = {
  width: 320,
  height: 300,
  padL: 40,
  padR: 15,
  padT: 15,
  padB: 30,
  xMin: -3,
  xMax: 4,
  yMin: -4,
  yMax: 8,
};

export function ParallelLinesIllustration({ className }: LinearFunctionIllustrationProps) {
  const f1 = (x: number) => 2 * x + 1;
  const f2 = (x: number) => 2 * x - 2;
  const { tx, ty, ox, oy } = graphHelpers(CFG_PAR);
  const clipId = 'clip-parallel';

  return (
    <svg viewBox={`0 0 ${CFG_PAR.width} ${CFG_PAR.height}`} className={className}
      aria-label="To parallelle linjer med samme stigningstall">
      <defs>
        <clipPath id={clipId}>
          <rect x={CFG_PAR.padL} y={CFG_PAR.padT}
            width={CFG_PAR.width - CFG_PAR.padL - CFG_PAR.padR}
            height={CFG_PAR.height - CFG_PAR.padT - CFG_PAR.padB} />
        </clipPath>
      </defs>

      <GridLines cfg={CFG_PAR} tx={tx} ty={ty} />
      <Axes cfg={CFG_PAR} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG_PAR} tx={tx} ty={ty} ox={ox} oy={oy} />

      {/* Linje 1 */}
      <path d={linePath(f1, CFG_PAR.xMin, CFG_PAR.xMax, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`} />
      {/* Linje 2 */}
      <path d={linePath(f2, CFG_PAR.xMin, CFG_PAR.xMax, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`}
        strokeDasharray="8,4" />

      {/* Labels */}
      <text x={tx(2.5)} y={ty(f1(2.5)) - 8} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">y = 2x + 1</text>
      <text x={tx(3)} y={ty(f2(3)) - 8} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">y = 2x − 2</text>

      {/* Konstantledd markert */}
      <circle cx={ox} cy={ty(1)} r="3" fill="#000" />
      <circle cx={ox} cy={ty(-2)} r="3" fill="#000" />
    </svg>
  );
}

// ============================================================================
// Kryssende linjer (likningssett) med skjæringspunkt
// ============================================================================

const CFG_INT: GraphConfig = {
  width: 320,
  height: 300,
  padL: 40,
  padR: 15,
  padT: 15,
  padB: 30,
  xMin: -2,
  xMax: 5,
  yMin: -2,
  yMax: 7,
};

export function IntersectingLinesIllustration({ className }: LinearFunctionIllustrationProps) {
  // y = 2x - 1 og y = -x + 5: skjæring ved x=2, y=3
  const f1 = (x: number) => 2 * x - 1;
  const f2 = (x: number) => -x + 5;
  const { tx, ty, ox, oy } = graphHelpers(CFG_INT);
  const clipId = 'clip-intersect';

  return (
    <svg viewBox={`0 0 ${CFG_INT.width} ${CFG_INT.height}`} className={className}
      aria-label="To linjer som krysser hverandre i punkt (2, 3)">
      <defs>
        <clipPath id={clipId}>
          <rect x={CFG_INT.padL} y={CFG_INT.padT}
            width={CFG_INT.width - CFG_INT.padL - CFG_INT.padR}
            height={CFG_INT.height - CFG_INT.padT - CFG_INT.padB} />
        </clipPath>
      </defs>

      <GridLines cfg={CFG_INT} tx={tx} ty={ty} />
      <Axes cfg={CFG_INT} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG_INT} tx={tx} ty={ty} ox={ox} oy={oy} />

      {/* Linje 1 */}
      <path d={linePath(f1, CFG_INT.xMin, CFG_INT.xMax, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`} />
      {/* Linje 2 */}
      <path d={linePath(f2, CFG_INT.xMin, CFG_INT.xMax, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`}
        strokeDasharray="8,4" />

      {/* Skjæringspunkt */}
      <circle cx={tx(2)} cy={ty(3)} r="4" fill="#000" />

      {/* Stiplede linjer til aksene */}
      <line x1={tx(2)} y1={ty(3)} x2={tx(2)} y2={oy}
        stroke="#000" strokeWidth="0.8" strokeDasharray="3,3" />
      <line x1={tx(2)} y1={ty(3)} x2={ox} y2={ty(3)}
        stroke="#000" strokeWidth="0.8" strokeDasharray="3,3" />

      {/* Skjæringspunkt-label */}
      <text x={tx(2) + 10} y={ty(3) - 8} fontSize="12" fill="#000"
        fontFamily="KaTeX_Main, serif">(2, 3)</text>

      {/* Funksjonslabels */}
      <text x={tx(3.5)} y={ty(f1(3.5)) - 8} fontSize="12" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">y = 2x − 1</text>
      <text x={tx(0.5)} y={ty(f2(0.5)) - 8} fontSize="12" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">y = −x + 5</text>
    </svg>
  );
}
