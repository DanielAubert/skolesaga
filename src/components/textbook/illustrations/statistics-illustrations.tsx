'use client';

interface StatisticsIllustrationProps {
  className?: string;
}

// ============================================================================
// Boksplott med median, kvartiler, min/max
// ============================================================================

export function BoxPlotIllustration({ className }: StatisticsIllustrationProps) {
  const ox = 40, oy = 50, w = 260, h = 60;
  // Verdier på en skala 0-100
  const min = 15, q1 = 35, med = 52, q3 = 72, max = 92;
  const scale = w / 100;

  const tx = (v: number) => ox + v * scale;
  const boxY = oy;
  const boxH = h;
  const midY = oy + h / 2;

  return (
    <svg viewBox="0 0 340 180" className={className} aria-label="Boksplott med minimum, kvartiler, median og maksimum">
      {/* Tallinje */}
      <line x1={ox} y1={oy + boxH + 20} x2={ox + w} y2={oy + boxH + 20}
        stroke="#000" strokeWidth="1.5" />
      {/* Tick-merker på tallinjen */}
      {[0, 20, 40, 60, 80, 100].map(v => (
        <g key={v}>
          <line x1={tx(v)} y1={oy + boxH + 17} x2={tx(v)} y2={oy + boxH + 23}
            stroke="#000" strokeWidth="1" />
          <text x={tx(v)} y={oy + boxH + 36} fontSize="11" fill="#000"
            textAnchor="middle" fontFamily="KaTeX_Main, serif">{v}</text>
        </g>
      ))}

      {/* Whiskers (streker fra min til Q1, og Q3 til max) */}
      <line x1={tx(min)} y1={midY} x2={tx(q1)} y2={midY}
        stroke="#000" strokeWidth="1.5" />
      <line x1={tx(q3)} y1={midY} x2={tx(max)} y2={midY}
        stroke="#000" strokeWidth="1.5" />
      {/* Min/max endepunkter */}
      <line x1={tx(min)} y1={boxY + 15} x2={tx(min)} y2={boxY + boxH - 15}
        stroke="#000" strokeWidth="1.5" />
      <line x1={tx(max)} y1={boxY + 15} x2={tx(max)} y2={boxY + boxH - 15}
        stroke="#000" strokeWidth="1.5" />

      {/* Boksen (Q1 til Q3) */}
      <rect x={tx(q1)} y={boxY} width={tx(q3) - tx(q1)} height={boxH}
        fill="none" stroke="#000" strokeWidth="2" />

      {/* Median-linje */}
      <line x1={tx(med)} y1={boxY} x2={tx(med)} y2={boxY + boxH}
        stroke="#000" strokeWidth="2.5" />

      {/* Labels */}
      <text x={tx(min)} y={boxY - 6} fontSize="10" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">Min</text>
      <text x={tx(q1)} y={boxY - 6} fontSize="10" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">Q1</text>
      <text x={tx(med)} y={boxY - 6} fontSize="10" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">Median</text>
      <text x={tx(q3)} y={boxY - 6} fontSize="10" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">Q3</text>
      <text x={tx(max)} y={boxY - 6} fontSize="10" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">Maks</text>
    </svg>
  );
}

// ============================================================================
// Histogram med frekvensakser
// ============================================================================

export function HistogramIllustration({ className }: StatisticsIllustrationProps) {
  const ox = 50, oy = 190;
  const barW = 40, maxH = 140;
  // Data: 6 grupper
  const data = [3, 7, 12, 9, 5, 2];
  const maxVal = Math.max(...data);
  const barH = (v: number) => (v / maxVal) * maxH;

  return (
    <svg viewBox="0 0 340 240" className={className} aria-label="Histogram med 6 stolper">
      {/* y-akse */}
      <line x1={ox} y1={oy} x2={ox} y2={oy - maxH - 20}
        stroke="#000" strokeWidth="1.5" />
      <polygon points={`${ox},${oy - maxH - 20} ${ox - 3.5},${oy - maxH - 13} ${ox + 3.5},${oy - maxH - 13}`} fill="#000" />

      {/* x-akse */}
      <line x1={ox} y1={oy} x2={ox + data.length * barW + 20} y2={oy}
        stroke="#000" strokeWidth="1.5" />

      {/* y-akse labels */}
      {[0, 3, 6, 9, 12].map(v => (
        <g key={v}>
          <line x1={ox - 3} y1={oy - barH(v)} x2={ox + 3} y2={oy - barH(v)}
            stroke="#000" strokeWidth="1" />
          <text x={ox - 8} y={oy - barH(v) + 4} fontSize="11" fill="#000"
            textAnchor="end" fontFamily="KaTeX_Main, serif">{v}</text>
        </g>
      ))}

      {/* Frekvens-label */}
      <text x={ox - 30} y={oy - maxH / 2} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif"
        transform={`rotate(-90, ${ox - 30}, ${oy - maxH / 2})`}>Frekvens</text>

      {/* Stolpene */}
      <defs>
        <pattern id="hist-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#000" strokeWidth="1" />
        </pattern>
      </defs>
      {data.map((v, i) => (
        <rect key={i}
          x={ox + i * barW} y={oy - barH(v)} width={barW} height={barH(v)}
          fill="url(#hist-hatch)" stroke="#000" strokeWidth="1.5" />
      ))}

      {/* x-akse labels */}
      {data.map((_, i) => (
        <text key={i} x={ox + i * barW + barW / 2} y={oy + 16} fontSize="11" fill="#000"
          textAnchor="middle" fontFamily="KaTeX_Main, serif">{(i + 1) * 10}</text>
      ))}
    </svg>
  );
}

// ============================================================================
// Sektordiagram (pie chart) med 3-4 sektorer
// ============================================================================

export function PieChartIllustration({ className }: StatisticsIllustrationProps) {
  const cx = 150, cy = 120, r = 85;
  const data = [
    { label: 'A', pct: 35 },
    { label: 'B', pct: 25 },
    { label: 'C', pct: 25 },
    { label: 'D', pct: 15 },
  ];

  // Skraveringsmønstre for hver sektor
  const patterns = [
    { id: 'pie-h0', angle: 45 },
    { id: 'pie-h1', angle: -45 },
    { id: 'pie-h2', angle: 0 },
    { id: 'pie-h3', angle: 90 },
  ];

  let startAngle = -Math.PI / 2;
  const sectors = data.map((d, i) => {
    const angle = (d.pct / 100) * 2 * Math.PI;
    const endAngle = startAngle + angle;
    const midAngle = startAngle + angle / 2;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const largeArc = angle > Math.PI ? 1 : 0;
    const path = `M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
    const labelX = cx + (r * 0.65) * Math.cos(midAngle);
    const labelY = cy + (r * 0.65) * Math.sin(midAngle);
    startAngle = endAngle;
    return { path, labelX, labelY, label: d.label, pct: d.pct, patternId: patterns[i].id };
  });

  return (
    <svg viewBox="0 0 300 260" className={className} aria-label="Sektordiagram med fire sektorer">
      <defs>
        {patterns.map(p => (
          <pattern key={p.id} id={p.id} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform={`rotate(${p.angle})`}>
            <line x1="0" y1="0" x2="0" y2="6" stroke="#000" strokeWidth="1.2" />
          </pattern>
        ))}
      </defs>

      {/* Sektorer */}
      {sectors.map((s, i) => (
        <g key={i}>
          <path d={s.path} fill={`url(#${s.patternId})`} stroke="#000" strokeWidth="2" />
          <text x={s.labelX} y={s.labelY + 4} fontSize="12" fill="#000"
            textAnchor="middle" fontFamily="KaTeX_Main, serif" fontWeight="bold">
            {s.pct} %
          </text>
        </g>
      ))}

      {/* Forklaring (legend) */}
      {data.map((d, i) => (
        <g key={i} transform={`translate(${50 + i * 60}, 235)`}>
          <rect x={0} y={-10} width={14} height={14}
            fill={`url(#${patterns[i].id})`} stroke="#000" strokeWidth="1" />
          <text x={18} y={2} fontSize="12" fill="#000"
            fontFamily="KaTeX_Main, serif">{d.label}</text>
        </g>
      ))}
    </svg>
  );
}
