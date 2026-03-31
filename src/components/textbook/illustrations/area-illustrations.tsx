'use client';

interface AreaIllustrationProps {
  className?: string;
}

// ============================================================================
// Rektangel: A = l * b
// ============================================================================

export function RectangleAreaIllustration({ className }: AreaIllustrationProps) {
  const x = 40, y = 40, w = 180, h = 100;

  return (
    <svg viewBox="0 0 300 200" className={className} aria-label="Rektangel med lengde l og bredde b, areal A = l ganger b">
      {/* Rektangelet */}
      <rect x={x} y={y} width={w} height={h} fill="none" stroke="#000" strokeWidth="2" />

      {/* Lengde l (bunn) */}
      <text x={x + w / 2} y={y + h + 22} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">l</text>

      {/* Bredde b (høyre) */}
      <text x={x + w + 18} y={y + h / 2 + 5} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>

      {/* Formel */}
      <text x={x + w / 2} y={y + h + 50} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">
        A = l · b
      </text>
    </svg>
  );
}

// ============================================================================
// Parallellogram: A = g * h
// ============================================================================

export function ParallelogramAreaIllustration({ className }: AreaIllustrationProps) {
  const offset = 40; // skrå forskyvning
  // Punkter: nedre venstre, nedre høyre, øvre høyre, øvre venstre
  const bx = 40, by = 150, gLen = 180, h = 90;
  const p1 = { x: bx, y: by };
  const p2 = { x: bx + gLen, y: by };
  const p3 = { x: bx + gLen + offset, y: by - h };
  const p4 = { x: bx + offset, y: by - h };

  return (
    <svg viewBox="0 0 320 200" className={className} aria-label="Parallellogram med grunnlinje g og høyde h">
      {/* Parallellogrammet */}
      <polygon
        points={`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />

      {/* Høyde h (stiplet) */}
      <line x1={bx + gLen * 0.4 + offset} y1={by - h} x2={bx + gLen * 0.4} y2={by}
        stroke="#000" strokeWidth="1.5" strokeDasharray="6,4" />
      {/* Rett vinkel-markør */}
      <path
        d={`M ${bx + gLen * 0.4 + 10} ${by} L ${bx + gLen * 0.4 + 10} ${by - 10} L ${bx + gLen * 0.4} ${by - 10}`}
        stroke="#000" strokeWidth="1" fill="none"
      />

      {/* h label */}
      <text x={bx + gLen * 0.4 + offset / 2 + 10} y={by - h / 2 + 5} fontSize="15" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Math, serif" fontStyle="italic">h</text>

      {/* g label (bunn) */}
      <text x={bx + gLen / 2} y={by + 22} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">g</text>

      {/* Formel */}
      <text x={160} y={by + 48} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">
        A = g · h
      </text>
    </svg>
  );
}

// ============================================================================
// Trapes: A = (a + b) / 2 * h
// ============================================================================

export function TrapezoidAreaIllustration({ className }: AreaIllustrationProps) {
  const topW = 120, botW = 200, h = 100;
  const cx = 160; // sentrum
  const topY = 40, botY = topY + h;
  // Sentrert
  const topLeft = { x: cx - topW / 2, y: topY };
  const topRight = { x: cx + topW / 2, y: topY };
  const botLeft = { x: cx - botW / 2, y: botY };
  const botRight = { x: cx + botW / 2, y: botY };

  return (
    <svg viewBox="0 0 320 220" className={className} aria-label="Trapes med parallelle sider a og b og høyde h">
      {/* Trapeset */}
      <polygon
        points={`${topLeft.x},${topLeft.y} ${topRight.x},${topRight.y} ${botRight.x},${botRight.y} ${botLeft.x},${botLeft.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />

      {/* Høyde h (stiplet) */}
      <line x1={cx} y1={topY} x2={cx} y2={botY}
        stroke="#000" strokeWidth="1.5" strokeDasharray="6,4" />
      {/* Rett vinkel-markør */}
      <path
        d={`M ${cx + 10} ${botY} L ${cx + 10} ${botY - 10} L ${cx} ${botY - 10}`}
        stroke="#000" strokeWidth="1" fill="none"
      />

      {/* a label (topp) */}
      <text x={cx} y={topY - 10} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>

      {/* b label (bunn) */}
      <text x={cx} y={botY + 22} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>

      {/* h label */}
      <text x={cx + 14} y={topY + h / 2 + 5} fontSize="15" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Math, serif" fontStyle="italic">h</text>

      {/* Formel */}
      <text x={cx} y={botY + 48} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        A = (a + b) / 2 · h
      </text>
    </svg>
  );
}

// ============================================================================
// Sirkel: A = pi * r^2
// ============================================================================

export function CircleAreaIllustration({ className }: AreaIllustrationProps) {
  const cx = 150, cy = 100, r = 70;

  return (
    <svg viewBox="0 0 300 230" className={className} aria-label="Sirkel med radius r">
      {/* Sirkelen */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#000" strokeWidth="2" />

      {/* Senterpunkt */}
      <circle cx={cx} cy={cy} r="2.5" fill="#000" />

      {/* Radius-linje */}
      <line x1={cx} y1={cy} x2={cx + r} y2={cy}
        stroke="#000" strokeWidth="1.5" />

      {/* r label */}
      <text x={cx + r / 2} y={cy - 8} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">r</text>

      {/* Formel */}
      <text x={cx} y={cy + r + 35} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        A = {'π'}r²
      </text>
    </svg>
  );
}
