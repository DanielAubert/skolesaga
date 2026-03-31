'use client';

interface NumberLineIllustrationProps {
  className?: string;
}

// ============================================================================
// Tallinje med ulikheter: x > 3 og x <= -1
// ============================================================================

export function NumberLineInequalityIllustration({ className }: NumberLineIllustrationProps) {
  const ox = 30, oy = 50, w = 280;
  const min = -4, max = 6;
  const tx = (v: number) => ox + ((v - min) / (max - min)) * w;

  return (
    <svg viewBox="0 0 340 140" className={className} aria-label="Tallinje med x større enn 3 og x mindre enn eller lik minus 1">
      {/* x > 3 (øvre tallinje) */}
      <g>
        {/* Tallinje */}
        <line x1={ox} y1={oy} x2={ox + w} y2={oy} stroke="#000" strokeWidth="1.5" />
        {/* Pilspiss */}
        <polygon points={`${ox + w},${oy} ${ox + w - 7},${oy - 3.5} ${ox + w - 7},${oy + 3.5}`} fill="#000" />
        <polygon points={`${ox},${oy} ${ox + 7},${oy - 3.5} ${ox + 7},${oy + 3.5}`} fill="#000" />

        {/* Tick-merker */}
        {Array.from({ length: max - min + 1 }, (_, i) => min + i).map(v => (
          <g key={v}>
            <line x1={tx(v)} y1={oy - 4} x2={tx(v)} y2={oy + 4} stroke="#000" strokeWidth="1" />
            <text x={tx(v)} y={oy + 18} fontSize="11" fill="#000"
              textAnchor="middle" fontFamily="KaTeX_Main, serif">{v}</text>
          </g>
        ))}

        {/* x > 3: åpen sirkel + pil mot høyre */}
        <circle cx={tx(3)} cy={oy} r="5" fill="#fff" stroke="#000" strokeWidth="2" />
        <line x1={tx(3) + 7} y1={oy} x2={tx(5.5)} y2={oy}
          stroke="#000" strokeWidth="3" />
        <polygon points={`${tx(5.5)},${oy} ${tx(5.5) - 6},${oy - 4} ${tx(5.5) - 6},${oy + 4}`} fill="#000" />

        {/* Label */}
        <text x={tx(4.5)} y={oy - 14} fontSize="13" fill="#000"
          textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">x &gt; 3</text>
      </g>

      {/* x ≤ -1 (nedre tallinje) */}
      <g transform="translate(0, 60)">
        {/* Tallinje */}
        <line x1={ox} y1={oy} x2={ox + w} y2={oy} stroke="#000" strokeWidth="1.5" />
        <polygon points={`${ox + w},${oy} ${ox + w - 7},${oy - 3.5} ${ox + w - 7},${oy + 3.5}`} fill="#000" />
        <polygon points={`${ox},${oy} ${ox + 7},${oy - 3.5} ${ox + 7},${oy + 3.5}`} fill="#000" />

        {/* Tick-merker */}
        {Array.from({ length: max - min + 1 }, (_, i) => min + i).map(v => (
          <g key={v}>
            <line x1={tx(v)} y1={oy - 4} x2={tx(v)} y2={oy + 4} stroke="#000" strokeWidth="1" />
            <text x={tx(v)} y={oy + 18} fontSize="11" fill="#000"
              textAnchor="middle" fontFamily="KaTeX_Main, serif">{v}</text>
          </g>
        ))}

        {/* x ≤ -1: lukket sirkel + pil mot venstre */}
        <circle cx={tx(-1)} cy={oy} r="5" fill="#000" stroke="#000" strokeWidth="2" />
        <line x1={tx(-1) - 7} y1={oy} x2={tx(-3.5)} y2={oy}
          stroke="#000" strokeWidth="3" />
        <polygon points={`${tx(-3.5)},${oy} ${tx(-3.5) + 6},${oy - 4} ${tx(-3.5) + 6},${oy + 4}`} fill="#000" />

        {/* Label */}
        <text x={tx(-2)} y={oy - 14} fontSize="13" fill="#000"
          textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">{'x ≤ −1'}</text>
      </g>
    </svg>
  );
}

// ============================================================================
// Tallinje med markert intervall [a, b]
// ============================================================================

export function NumberLineIntervalsIllustration({ className }: NumberLineIllustrationProps) {
  const ox = 30, oy = 60, w = 280;
  const min = -2, max = 8;
  const tx = (v: number) => ox + ((v - min) / (max - min)) * w;
  const a = 1, b = 5;

  return (
    <svg viewBox="0 0 340 130" className={className} aria-label="Tallinje med markert intervall fra a til b">
      {/* Tallinje */}
      <line x1={ox} y1={oy} x2={ox + w} y2={oy} stroke="#000" strokeWidth="1.5" />
      <polygon points={`${ox + w},${oy} ${ox + w - 7},${oy - 3.5} ${ox + w - 7},${oy + 3.5}`} fill="#000" />
      <polygon points={`${ox},${oy} ${ox + 7},${oy - 3.5} ${ox + 7},${oy + 3.5}`} fill="#000" />

      {/* Tick-merker */}
      {Array.from({ length: max - min + 1 }, (_, i) => min + i).map(v => (
        <g key={v}>
          <line x1={tx(v)} y1={oy - 4} x2={tx(v)} y2={oy + 4} stroke="#000" strokeWidth="1" />
          <text x={tx(v)} y={oy + 18} fontSize="11" fill="#000"
            textAnchor="middle" fontFamily="KaTeX_Main, serif">{v}</text>
        </g>
      ))}

      {/* Markert intervall [a, b] — tykk linje */}
      <line x1={tx(a)} y1={oy} x2={tx(b)} y2={oy}
        stroke="#000" strokeWidth="4" />

      {/* Lukkede endepunkter */}
      <circle cx={tx(a)} cy={oy} r="5" fill="#000" />
      <circle cx={tx(b)} cy={oy} r="5" fill="#000" />

      {/* Labels */}
      <text x={tx(a)} y={oy - 14} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>
      <text x={tx(b)} y={oy - 14} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>

      {/* Intervall-notasjon */}
      <text x={(tx(a) + tx(b)) / 2} y={oy + 38} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">[a, b]</text>
    </svg>
  );
}
