'use client';

import type { JSX } from 'react';

interface VectorIllustrationProps {
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
  return { tx, ty, ox: tx(0), oy: ty(0) };
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

/** Tegn vektor-pil med spiss */
function vectorArrow(
  x1: number, y1: number, x2: number, y2: number,
  tx: (x: number) => number, ty: (y: number) => number,
  strokeStyle?: string,
): JSX.Element {
  const sx = tx(x1), sy = ty(y1), ex = tx(x2), ey = ty(y2);
  const dx = ex - sx, dy = ey - sy;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len, uy = dy / len;
  const headLen = 10;
  // Pilspiss-punkter
  const hx1 = ex - headLen * ux - 4 * uy;
  const hy1 = ey - headLen * uy + 4 * ux;
  const hx2 = ex - headLen * ux + 4 * uy;
  const hy2 = ey - headLen * uy - 4 * ux;

  return (
    <g>
      <line x1={sx} y1={sy} x2={ex} y2={ey}
        stroke="#000" strokeWidth="2" strokeDasharray={strokeStyle} />
      <polygon points={`${ex},${ey} ${hx1.toFixed(1)},${hy1.toFixed(1)} ${hx2.toFixed(1)},${hy2.toFixed(1)}`}
        fill="#000" />
    </g>
  );
}

// ============================================================================
// Vektor fra A til B med komponentform
// ============================================================================

const CFG_VEC: GraphConfig = {
  width: 320,
  height: 300,
  padL: 40,
  padR: 15,
  padT: 15,
  padB: 30,
  xMin: -1,
  xMax: 7,
  yMin: -1,
  yMax: 6,
};

export function VectorBasicIllustration({ className }: VectorIllustrationProps) {
  const { tx, ty, ox, oy } = graphHelpers(CFG_VEC);
  // Vektor fra A(1,1) til B(5,4)
  const ax = 1, ay = 1, bx = 5, by = 4;

  return (
    <svg viewBox={`0 0 ${CFG_VEC.width} ${CFG_VEC.height}`} className={className}
      aria-label="Vektor fra punkt A til punkt B med komponentform">
      <GridLines cfg={CFG_VEC} tx={tx} ty={ty} />
      <Axes cfg={CFG_VEC} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG_VEC} tx={tx} ty={ty} ox={ox} oy={oy} />

      {/* Komponent-linjer (stiplet) */}
      <line x1={tx(ax)} y1={ty(ay)} x2={tx(bx)} y2={ty(ay)}
        stroke="#000" strokeWidth="1" strokeDasharray="5,3" />
      <line x1={tx(bx)} y1={ty(ay)} x2={tx(bx)} y2={ty(by)}
        stroke="#000" strokeWidth="1" strokeDasharray="5,3" />

      {/* Vektor-pil */}
      {vectorArrow(ax, ay, bx, by, tx, ty)}

      {/* Punkt A */}
      <circle cx={tx(ax)} cy={ty(ay)} r="3.5" fill="#000" />
      <text x={tx(ax) - 12} y={ty(ay) + 5} fontSize="14" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Math, serif" fontStyle="italic">A</text>

      {/* Punkt B */}
      <text x={tx(bx) + 10} y={ty(by) + 5} fontSize="14" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Math, serif" fontStyle="italic">B</text>

      {/* Komponent-labels */}
      <text x={(tx(ax) + tx(bx)) / 2} y={ty(ay) + 18} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">4</text>
      <text x={tx(bx) + 10} y={(ty(ay) + ty(by)) / 2 + 4} fontSize="12" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Main, serif">3</text>

      {/* Vektor-label */}
      <text x={(tx(ax) + tx(bx)) / 2 - 14} y={(ty(ay) + ty(by)) / 2 - 8} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        AB = [4, 3]
      </text>
    </svg>
  );
}

// ============================================================================
// Vektoraddisjon med parallelogramregelen
// ============================================================================

const CFG_ADD: GraphConfig = {
  width: 340,
  height: 300,
  padL: 40,
  padR: 15,
  padT: 15,
  padB: 30,
  xMin: -1,
  xMax: 8,
  yMin: -1,
  yMax: 7,
};

export function VectorAdditionIllustration({ className }: VectorIllustrationProps) {
  const { tx, ty, ox, oy } = graphHelpers(CFG_ADD);
  // u = [3, 1], v = [2, 3], start fra origo
  const ux = 3, uy = 1;
  const vx = 2, vy = 3;
  const sx = ux + vx, sy = uy + vy; // sum

  return (
    <svg viewBox={`0 0 ${CFG_ADD.width} ${CFG_ADD.height}`} className={className}
      aria-label="Vektoraddisjon med parallelogramregelen">
      <GridLines cfg={CFG_ADD} tx={tx} ty={ty} />
      <Axes cfg={CFG_ADD} tx={tx} ty={ty} ox={ox} oy={oy} />
      <TickMarks cfg={CFG_ADD} tx={tx} ty={ty} ox={ox} oy={oy} />

      {/* Parallelogram-linjer (stiplet) */}
      <line x1={tx(ux)} y1={ty(uy)} x2={tx(sx)} y2={ty(sy)}
        stroke="#000" strokeWidth="1" strokeDasharray="5,3" />
      <line x1={tx(vx)} y1={ty(vy)} x2={tx(sx)} y2={ty(sy)}
        stroke="#000" strokeWidth="1" strokeDasharray="5,3" />

      {/* Vektor u */}
      {vectorArrow(0, 0, ux, uy, tx, ty)}
      {/* Vektor v */}
      {vectorArrow(0, 0, vx, vy, tx, ty)}
      {/* Sum-vektor u + v */}
      {vectorArrow(0, 0, sx, sy, tx, ty)}

      {/* Labels */}
      <text x={tx(ux / 2) + 4} y={ty(uy / 2) + 16} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">u</text>
      <text x={tx(vx / 2) - 14} y={ty(vy / 2)} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">v</text>
      <text x={tx(sx / 2) + 6} y={ty(sy / 2) - 8} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">u + v</text>

      {/* Sum-punkt */}
      <circle cx={tx(sx)} cy={ty(sy)} r="3" fill="#000" />
      <text x={tx(sx) + 8} y={ty(sy) - 4} fontSize="11" fill="#000"
        fontFamily="KaTeX_Main, serif">({sx}, {sy})</text>
    </svg>
  );
}
