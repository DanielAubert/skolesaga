'use client';

interface FractionIllustrationProps {
  className?: string;
}

// ============================================================================
// Sirkel delt i deler (3/4 skravert)
// ============================================================================

export function FractionCircleIllustration({ className }: FractionIllustrationProps) {
  const cx = 150, cy = 110, r = 75;
  const parts = 4;
  const filled = 3;

  // Beregn sektorer
  const sectors: { path: string; isFilled: boolean }[] = [];
  for (let i = 0; i < parts; i++) {
    const startAngle = (i * 2 * Math.PI) / parts - Math.PI / 2;
    const endAngle = ((i + 1) * 2 * Math.PI) / parts - Math.PI / 2;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    const path = `M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
    sectors.push({ path, isFilled: i < filled });
  }

  return (
    <svg viewBox="0 0 300 230" className={className} aria-label="Sirkel delt i 4 deler, 3 av 4 er skravert">
      {/* Skraverte deler */}
      <defs>
        <pattern id="frac-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#000" strokeWidth="1.5" />
        </pattern>
      </defs>

      {sectors.map((s, i) => (
        <path key={i} d={s.path}
          fill={s.isFilled ? 'url(#frac-hatch)' : 'none'}
          stroke="#000" strokeWidth="2" />
      ))}

      {/* Brøk-label */}
      <text x={cx} y={cy + r + 30} fontSize="16" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">3/4</text>
    </svg>
  );
}

// ============================================================================
// Rektangulær stolpe delt i like deler
// ============================================================================

export function FractionBarIllustration({ className }: FractionIllustrationProps) {
  const x = 30, y = 60, w = 240, h = 50;
  const parts = 5;
  const filled = 3;
  const partW = w / parts;

  return (
    <svg viewBox="0 0 300 170" className={className} aria-label="Stolpe delt i 5 like deler, 3 av 5 er skravert">
      <defs>
        <pattern id="bar-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#000" strokeWidth="1.5" />
        </pattern>
      </defs>

      {/* Delene */}
      {Array.from({ length: parts }, (_, i) => (
        <rect key={i}
          x={x + i * partW} y={y} width={partW} height={h}
          fill={i < filled ? 'url(#bar-hatch)' : 'none'}
          stroke="#000" strokeWidth="2" />
      ))}

      {/* Brøk-label */}
      <text x={x + w / 2} y={y + h + 30} fontSize="16" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">3/5</text>
    </svg>
  );
}

// ============================================================================
// 100%-stolpe med andel skravert
// ============================================================================

export function PercentBarIllustration({ className }: FractionIllustrationProps) {
  const x = 30, y = 50, w = 240, h = 50;
  const pct = 65; // 65%
  const filledW = (pct / 100) * w;

  return (
    <svg viewBox="0 0 300 160" className={className} aria-label="Prosentstolpe med 65 prosent skravert">
      <defs>
        <pattern id="pct-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#000" strokeWidth="1.5" />
        </pattern>
      </defs>

      {/* Hele stolpen */}
      <rect x={x} y={y} width={w} height={h}
        fill="none" stroke="#000" strokeWidth="2" />

      {/* Fylt del */}
      <rect x={x} y={y} width={filledW} height={h}
        fill="url(#pct-hatch)" stroke="none" />

      {/* Skille-linje */}
      <line x1={x + filledW} y1={y} x2={x + filledW} y2={y + h}
        stroke="#000" strokeWidth="2" />

      {/* Prosent-label */}
      <text x={x + filledW / 2} y={y + h / 2 + 5} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">{pct} %</text>

      {/* 0% og 100% markører */}
      <text x={x} y={y + h + 20} fontSize="11" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">0 %</text>
      <text x={x + w} y={y + h + 20} fontSize="11" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">100 %</text>
    </svg>
  );
}
