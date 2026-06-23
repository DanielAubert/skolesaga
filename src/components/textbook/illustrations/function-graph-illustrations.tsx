'use client';

import type { JSX } from 'react';

interface GraphIllustrationProps {
  className?: string;
}

// ============================================================================
// Hjelpefunksjoner for funksjonsgraf-illustrasjoner
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

function curvePath(
  f: (x: number) => number,
  xMin: number,
  xMax: number,
  tx: (x: number) => number,
  ty: (y: number) => number,
  steps = 200,
): string {
  const dx = (xMax - xMin) / steps;
  const parts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = xMin + i * dx;
    parts.push(`${tx(x).toFixed(1)},${ty(f(x)).toFixed(1)}`);
  }
  return `M ${parts.join(' L ')}`;
}

const f = (x: number) => x * x - 9;

const CFG: GraphConfig = {
  width: 320,
  height: 320,
  padL: 40,
  padR: 15,
  padT: 15,
  padB: 30,
  xMin: -5,
  xMax: 5,
  yMin: -10,
  yMax: 14,
};

// ============================================================================
// Felles delkomponenter
// ============================================================================

function Axes({ cfg, tx: _tx, ty: _ty, ox, oy }: {
  cfg: GraphConfig;
  tx: (x: number) => number;
  ty: (y: number) => number;
  ox: number;
  oy: number;
}) {
  return (
    <g>
      {/* x-akse */}
      <line x1={cfg.padL} y1={oy} x2={cfg.width - cfg.padR} y2={oy} stroke="#000" strokeWidth="1.5" />
      {/* y-akse */}
      <line x1={ox} y1={cfg.padT} x2={ox} y2={cfg.height - cfg.padB} stroke="#000" strokeWidth="1.5" />
      {/* Pilspisser */}
      <polygon points={`${cfg.width - cfg.padR},${oy} ${cfg.width - cfg.padR - 7},${oy - 3.5} ${cfg.width - cfg.padR - 7},${oy + 3.5}`} fill="#000" />
      <polygon points={`${ox},${cfg.padT} ${ox - 3.5},${cfg.padT + 7} ${ox + 3.5},${cfg.padT + 7}`} fill="#000" />
      {/* Akselabels */}
      <text x={cfg.width - cfg.padR - 2} y={oy - 10} fontSize="14" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Math, serif" fontStyle="italic">x</text>
      <text x={ox + 12} y={cfg.padT + 12} fontSize="14" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">y</text>
    </g>
  );
}

function TickMarks({ cfg, tx, ty, ox, oy, labelX = true, labelY = true, skipX = [], skipY = [] }: {
  cfg: GraphConfig;
  tx: (x: number) => number;
  ty: (y: number) => number;
  ox: number;
  oy: number;
  labelX?: boolean;
  labelY?: boolean;
  skipX?: number[];
  skipY?: number[];
}) {
  const xTicks: number[] = [];
  for (let v = cfg.xMin; v <= cfg.xMax; v++) { if (v !== 0) xTicks.push(v); }
  const yTicks: number[] = [];
  for (let v = cfg.yMin; v <= cfg.yMax; v += 2) { if (v !== 0) yTicks.push(v); }

  return (
    <g>
      {xTicks.map((v) => (
        <g key={`xt${v}`}>
          <line x1={tx(v)} y1={oy - 3} x2={tx(v)} y2={oy + 3} stroke="#000" strokeWidth="1" />
          {labelX && !skipX.includes(v) && (
            <text x={tx(v)} y={oy + 16} fontSize="11" fill="#000"
              textAnchor="middle" fontFamily="KaTeX_Main, serif">{v}</text>
          )}
        </g>
      ))}
      {yTicks.map((v) => (
        <g key={`yt${v}`}>
          <line x1={ox - 3} y1={ty(v)} x2={ox + 3} y2={ty(v)} stroke="#000" strokeWidth="1" />
          {labelY && !skipY.includes(v) && (
            <text x={ox - 7} y={ty(v) + 4} fontSize="11" fill="#000"
              textAnchor="end" fontFamily="KaTeX_Main, serif">{v}</text>
          )}
        </g>
      ))}
    </g>
  );
}

function GridLines({ cfg, tx, ty }: {
  cfg: GraphConfig;
  tx: (x: number) => number;
  ty: (y: number) => number;
}) {
  const lines: JSX.Element[] = [];
  for (let v = cfg.xMin; v <= cfg.xMax; v++) {
    lines.push(
      <line key={`gx${v}`} x1={tx(v)} y1={cfg.padT} x2={tx(v)} y2={cfg.height - cfg.padB}
        stroke="#e0e0e0" strokeWidth="0.5" />
    );
  }
  for (let v = cfg.yMin; v <= cfg.yMax; v += 2) {
    lines.push(
      <line key={`gy${v}`} x1={cfg.padL} y1={ty(v)} x2={cfg.width - cfg.padR} y2={ty(v)}
        stroke="#e0e0e0" strokeWidth="0.5" />
    );
  }
  return <g>{lines}</g>;
}

// ============================================================================
// Stil A: Minimal — akser + kurve + nullpunkter markert
// ============================================================================

export function GraphX2Minus9StyleA({ className }: GraphIllustrationProps) {
  const { tx, ty, ox, oy } = graphHelpers(CFG);
  const clipId = 'clipA-x2m9';

  return (
    <svg role="img" viewBox={`0 0 ${CFG.width} ${CFG.height}`} className={className}
      aria-label="Graf av f(x) = x² − 9">
      <defs>
        <clipPath id={clipId}>
          <rect x={CFG.padL} y={CFG.padT}
            width={CFG.width - CFG.padL - CFG.padR}
            height={CFG.height - CFG.padT - CFG.padB} />
        </clipPath>
      </defs>

      <Axes cfg={CFG} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG} tx={tx} ty={ty} ox={ox} oy={oy} />

      {/* Kurve */}
      <path d={curvePath(f, CFG.xMin, CFG.xMax, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`} />

      {/* Nullpunkter */}
      <circle cx={tx(-3)} cy={oy} r="3.5" fill="#000" />
      <circle cx={tx(3)} cy={oy} r="3.5" fill="#000" />
    </svg>
  );
}

// ============================================================================
// Stil B: Akademisk — rutenett + akser + kurve + nøkkelpunkter + funksjonsnavn
// ============================================================================

const CFG_B: GraphConfig = {
  width: 400,
  height: 340,
  padL: 45,
  padR: 20,
  padT: 20,
  padB: 35,
  xMin: -5,
  xMax: 5,
  yMin: -10,
  yMax: 14,
};

export function GraphX2Minus9StyleB({ className }: GraphIllustrationProps) {
  const { tx, ty, ox, oy } = graphHelpers(CFG_B);
  const clipId = 'clipB-x2m9';

  return (
    <svg role="img" viewBox={`0 0 ${CFG_B.width} ${CFG_B.height}`} className={className}
      aria-label="Graf av f(x) = x² − 9 med rutenett og nøkkelpunkter">
      <defs>
        <clipPath id={clipId}>
          <rect x={CFG_B.padL} y={CFG_B.padT}
            width={CFG_B.width - CFG_B.padL - CFG_B.padR}
            height={CFG_B.height - CFG_B.padT - CFG_B.padB} />
        </clipPath>
      </defs>

      <GridLines cfg={CFG_B} tx={tx} ty={ty} />
      <Axes cfg={CFG_B} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG_B} tx={tx} ty={ty} ox={ox} oy={oy} skipX={[-3, 3]} />

      {/* Kurve */}
      <path d={curvePath(f, CFG_B.xMin, CFG_B.xMax, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`} />

      {/* Nullpunkter — koordinat-labels erstatter supprimerte tick-labels */}
      <circle cx={tx(-3)} cy={oy} r="3.5" fill="#000" />
      <circle cx={tx(3)} cy={oy} r="3.5" fill="#000" />
      <text x={tx(-3)} y={oy + 18} fontSize="11" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">(−3, 0)</text>
      <text x={tx(3)} y={oy + 18} fontSize="11" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">(3, 0)</text>

      {/* Bunnpunkt med horisontal leader line */}
      <circle cx={tx(0)} cy={ty(-9)} r="3.5" fill="#000" />
      <line x1={tx(0)} y1={ty(-9)} x2={tx(1.5)} y2={ty(-9)}
        stroke="#000" strokeWidth="0.7" strokeDasharray="3,2" />
      <text x={tx(1.5) + 4} y={ty(-9) + 4} fontSize="11" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Main, serif">(0, −9)</text>

      {/* Funksjonsnavn */}
      <text x={tx(2)} y={ty(f(2)) - 10} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">f(x)</text>
    </svg>
  );
}

// ============================================================================
// Stil C: Annotert — akser + kurve + bunnpunkt + symmetriakse (stiplet)
// ============================================================================

export function GraphX2Minus9StyleC({ className }: GraphIllustrationProps) {
  const { tx, ty, ox, oy } = graphHelpers(CFG);
  const clipId = 'clipC-x2m9';

  return (
    <svg role="img" viewBox={`0 0 ${CFG.width} ${CFG.height}`} className={className}
      aria-label="Graf av f(x) = x² − 9 med symmetriakse og annotasjoner">
      <defs>
        <clipPath id={clipId}>
          <rect x={CFG.padL} y={CFG.padT}
            width={CFG.width - CFG.padL - CFG.padR}
            height={CFG.height - CFG.padT - CFG.padB} />
        </clipPath>
      </defs>

      <GridLines cfg={CFG} tx={tx} ty={ty} />
      <Axes cfg={CFG} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG} tx={tx} ty={ty} ox={ox} oy={oy} />

      {/* Symmetriakse (stiplet) */}
      <line x1={ox} y1={CFG.padT} x2={ox} y2={CFG.height - CFG.padB}
        stroke="#999" strokeWidth="1" strokeDasharray="6,4" />
      <text x={ox + 6} y={CFG.padT + 28} fontSize="11" fill="#999"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">x = 0</text>

      {/* Kurve */}
      <path d={curvePath(f, CFG.xMin, CFG.xMax, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`} />

      {/* Nullpunkter med åpne sirkler og labels */}
      <circle cx={tx(-3)} cy={oy} r="4" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <circle cx={tx(3)} cy={oy} r="4" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <text x={tx(-3)} y={oy + 20} fontSize="11" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">x = −3</text>
      <text x={tx(3)} y={oy + 20} fontSize="11" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">x = 3</text>

      {/* Bunnpunkt med markering */}
      <circle cx={tx(0)} cy={ty(-9)} r="4" fill="#000" />
      <text x={tx(0) + 10} y={ty(-9) + 5} fontSize="12" fill="#000"
        fontFamily="KaTeX_Main, serif">Bunnpunkt</text>
      <text x={tx(0) + 10} y={ty(-9) + 18} fontSize="11" fill="#000"
        fontFamily="KaTeX_Main, serif">(0, −9)</text>

      {/* Funksjonsnavn øverst */}
      <text x={CFG.width - CFG.padR - 5} y={CFG.padT + 20} fontSize="13" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Math, serif" fontStyle="italic">
        f(x) = x² − 9
      </text>
    </svg>
  );
}

export const FunctionGraphIllustrations = {
  X2Minus9A: GraphX2Minus9StyleA,
  X2Minus9B: GraphX2Minus9StyleB,
  X2Minus9C: GraphX2Minus9StyleC,
};
