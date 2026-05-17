'use client';

import type { JSX } from 'react';

interface ExponentialIllustrationProps {
  className?: string;
}

// ============================================================================
// Hjelpefunksjoner
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

function Axes({ cfg, tx: _tx, ty: _ty, ox, oy }: {
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

// ============================================================================
// Eksponentiell vekst: f(x) = 2^x
// ============================================================================

const CFG_EXP: GraphConfig = {
  width: 340,
  height: 300,
  padL: 45,
  padR: 15,
  padT: 15,
  padB: 30,
  xMin: -3,
  xMax: 4,
  yMin: -1,
  yMax: 10,
};

export function ExponentialGrowthIllustration({ className }: ExponentialIllustrationProps) {
  const f = (x: number) => Math.pow(2, x);
  const { tx, ty, ox, oy } = graphHelpers(CFG_EXP);
  const clipId = 'clip-exp-growth';

  return (
    <svg viewBox={`0 0 ${CFG_EXP.width} ${CFG_EXP.height}`} className={className}
      aria-label="Graf av eksponentiell vekst f(x) = 2 opphøyd i x">
      <defs>
        <clipPath id={clipId}>
          <rect x={CFG_EXP.padL} y={CFG_EXP.padT}
            width={CFG_EXP.width - CFG_EXP.padL - CFG_EXP.padR}
            height={CFG_EXP.height - CFG_EXP.padT - CFG_EXP.padB} />
        </clipPath>
      </defs>

      <GridLines cfg={CFG_EXP} tx={tx} ty={ty} />
      <Axes cfg={CFG_EXP} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG_EXP} tx={tx} ty={ty} ox={ox} oy={oy} />

      {/* Kurve */}
      <path d={curvePath(f, CFG_EXP.xMin, 3.4, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`} />

      {/* Nøkkelpunkter */}
      <circle cx={tx(0)} cy={ty(1)} r="3.5" fill="#000" />
      <text x={tx(0) - 10} y={ty(1) - 8} fontSize="11" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Main, serif">(0, 1)</text>

      <circle cx={tx(1)} cy={ty(2)} r="3" fill="#000" />
      <circle cx={tx(2)} cy={ty(4)} r="3" fill="#000" />
      <circle cx={tx(3)} cy={ty(8)} r="3" fill="#000" />

      {/* Funksjonsnavn */}
      <text x={tx(2.5)} y={ty(f(2.5)) - 10} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">f(x) = 2ˣ</text>

      {/* Horisontal asymptote y = 0 */}
      <line x1={CFG_EXP.padL} y1={oy} x2={tx(-2.5)} y2={oy}
        stroke="#000" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.5" />
    </svg>
  );
}

// ============================================================================
// Eksponentiell avtakende: f(x) = (1/2)^x
// ============================================================================

export function ExponentialDecayIllustration({ className }: ExponentialIllustrationProps) {
  const f = (x: number) => Math.pow(0.5, x);
  const { tx, ty, ox, oy } = graphHelpers(CFG_EXP);
  const clipId = 'clip-exp-decay';

  return (
    <svg viewBox={`0 0 ${CFG_EXP.width} ${CFG_EXP.height}`} className={className}
      aria-label="Graf av eksponentiell nedgang f(x) = (1/2) opphøyd i x">
      <defs>
        <clipPath id={clipId}>
          <rect x={CFG_EXP.padL} y={CFG_EXP.padT}
            width={CFG_EXP.width - CFG_EXP.padL - CFG_EXP.padR}
            height={CFG_EXP.height - CFG_EXP.padT - CFG_EXP.padB} />
        </clipPath>
      </defs>

      <GridLines cfg={CFG_EXP} tx={tx} ty={ty} />
      <Axes cfg={CFG_EXP} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG_EXP} tx={tx} ty={ty} ox={ox} oy={oy} />

      {/* Kurve */}
      <path d={curvePath(f, -2.4, CFG_EXP.xMax, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`} />

      {/* Nøkkelpunkter */}
      <circle cx={tx(0)} cy={ty(1)} r="3.5" fill="#000" />
      <text x={tx(0) + 10} y={ty(1) - 8} fontSize="11" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Main, serif">(0, 1)</text>

      <circle cx={tx(1)} cy={ty(0.5)} r="3" fill="#000" />
      <circle cx={tx(2)} cy={ty(0.25)} r="3" fill="#000" />

      {/* Funksjonsnavn */}
      <text x={tx(-1.5)} y={ty(f(-1.5)) - 10} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">f(x) = (½)ˣ</text>
    </svg>
  );
}

// ============================================================================
// Lineær vs eksponentiell vekst
// ============================================================================

const CFG_COMP: GraphConfig = {
  width: 360,
  height: 300,
  padL: 45,
  padR: 15,
  padT: 15,
  padB: 30,
  xMin: -1,
  xMax: 6,
  yMin: -2,
  yMax: 18,
};

export function LinearVsExponentialIllustration({ className }: ExponentialIllustrationProps) {
  const fLin = (x: number) => 2 * x + 1;
  const fExp = (x: number) => Math.pow(2, x);
  const { tx, ty, ox, oy } = graphHelpers(CFG_COMP);
  const clipId = 'clip-lin-vs-exp';

  return (
    <svg viewBox={`0 0 ${CFG_COMP.width} ${CFG_COMP.height}`} className={className}
      aria-label="Sammenligning av lineær og eksponentiell vekst">
      <defs>
        <clipPath id={clipId}>
          <rect x={CFG_COMP.padL} y={CFG_COMP.padT}
            width={CFG_COMP.width - CFG_COMP.padL - CFG_COMP.padR}
            height={CFG_COMP.height - CFG_COMP.padT - CFG_COMP.padB} />
        </clipPath>
      </defs>

      <GridLines cfg={CFG_COMP} tx={tx} ty={ty} />
      <Axes cfg={CFG_COMP} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG_COMP} tx={tx} ty={ty} ox={ox} oy={oy} />

      {/* Lineær (hel linje) */}
      <path d={`M ${tx(CFG_COMP.xMin).toFixed(1)},${ty(fLin(CFG_COMP.xMin)).toFixed(1)} L ${tx(CFG_COMP.xMax).toFixed(1)},${ty(fLin(CFG_COMP.xMax)).toFixed(1)}`}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`} />

      {/* Eksponentiell (stiplet) */}
      <path d={curvePath(fExp, CFG_COMP.xMin, 4.3, tx, ty)}
        stroke="#000" strokeWidth="2" fill="none" clipPath={`url(#${clipId})`}
        strokeDasharray="8,4" />

      {/* Labels */}
      <text x={tx(5)} y={ty(fLin(5)) - 8} fontSize="12" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">y = 2x + 1</text>
      <text x={tx(3.5)} y={ty(fExp(3.5)) - 10} fontSize="12" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">y = 2ˣ</text>
    </svg>
  );
}
