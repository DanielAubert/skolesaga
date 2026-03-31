'use client';

interface QuadraticIdentityProps {
  className?: string;
}

// ============================================================================
// 1. kvadratsetning: (a + b)² = a² + 2ab + b²
// Geometrisk: stort kvadrat delt i a², ab, ab, b²
// ============================================================================

export function FirstQuadraticIdentityIllustration({ className }: QuadraticIdentityProps) {
  const ox = 40, oy = 30;
  const a = 120, b = 60;
  const total = a + b;

  return (
    <svg viewBox="0 0 300 280" className={className} aria-label="Første kvadratsetning: (a pluss b) i andre er lik a i andre pluss 2ab pluss b i andre">
      {/* Stort kvadrat */}
      <rect x={ox} y={oy} width={total} height={total} fill="none" stroke="#000" strokeWidth="2" />

      {/* Skillelinjer */}
      <line x1={ox + a} y1={oy} x2={ox + a} y2={oy + total} stroke="#000" strokeWidth="1.5" />
      <line x1={ox} y1={oy + a} x2={ox + total} y2={oy + a} stroke="#000" strokeWidth="1.5" />

      {/* Skravering for a² (øvre venstre) */}
      <defs>
        <pattern id="qi1-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#000" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x={ox} y={oy} width={a} height={a} fill="url(#qi1-hatch)" stroke="none" />

      {/* Labels i rektanglene */}
      <text x={ox + a / 2} y={oy + a / 2 + 5} fontSize="16" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">a²</text>
      <text x={ox + a + b / 2} y={oy + a / 2 + 5} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">ab</text>
      <text x={ox + a / 2} y={oy + a + b / 2 + 5} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">ab</text>
      <text x={ox + a + b / 2} y={oy + a + b / 2 + 5} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b²</text>

      {/* Dimensjoner langs topp */}
      <text x={ox + a / 2} y={oy - 8} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>
      <text x={ox + a + b / 2} y={oy - 8} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>

      {/* Dimensjoner langs venstre */}
      <text x={ox - 12} y={oy + a / 2 + 5} fontSize="14" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>
      <text x={ox - 12} y={oy + a + b / 2 + 5} fontSize="14" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>

      {/* Total dimensjon høyre */}
      <text x={ox + total + 14} y={oy + total / 2 + 5} fontSize="14" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Math, serif" fontStyle="italic">a + b</text>

      {/* Formel */}
      <text x={150} y={oy + total + 30} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        (a + b)² = a² + 2ab + b²
      </text>
    </svg>
  );
}

// ============================================================================
// 2. kvadratsetning: (a − b)² = a² − 2ab + b²
// ============================================================================

export function SecondQuadraticIdentityIllustration({ className }: QuadraticIdentityProps) {
  const ox = 40, oy = 30;
  const a = 150, b = 50;
  const amb = a - b; // a - b

  return (
    <svg viewBox="0 0 300 280" className={className} aria-label="Andre kvadratsetning: (a minus b) i andre er lik a i andre minus 2ab pluss b i andre">
      {/* Stort a²-kvadrat (hele) */}
      <rect x={ox} y={oy} width={a} height={a} fill="none" stroke="#000" strokeWidth="2" />

      {/* (a-b)²-kvadrat (øvre venstre, skravert) */}
      <defs>
        <pattern id="qi2-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#000" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x={ox} y={oy} width={amb} height={amb} fill="url(#qi2-hatch)" stroke="#000" strokeWidth="1.5" />

      {/* Skillelinjer */}
      <line x1={ox + amb} y1={oy} x2={ox + amb} y2={oy + a} stroke="#000" strokeWidth="1.5" />
      <line x1={ox} y1={oy + amb} x2={ox + a} y2={oy + amb} stroke="#000" strokeWidth="1.5" />

      {/* Labels i deler */}
      <text x={ox + amb / 2} y={oy + amb / 2 + 5} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">(a−b)²</text>
      <text x={ox + amb + b / 2} y={oy + amb / 2 + 5} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b(a−b)</text>
      <text x={ox + amb / 2} y={oy + amb + b / 2 + 5} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b(a−b)</text>
      <text x={ox + amb + b / 2} y={oy + amb + b / 2 + 5} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b²</text>

      {/* Dimensjoner topp */}
      <text x={ox + amb / 2} y={oy - 8} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">a − b</text>
      <text x={ox + amb + b / 2} y={oy - 8} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>

      {/* Dimensjoner venstre */}
      <text x={ox - 12} y={oy + amb / 2 + 5} fontSize="13" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Math, serif" fontStyle="italic">a − b</text>
      <text x={ox - 12} y={oy + amb + b / 2 + 5} fontSize="13" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>

      {/* Total dimensjon */}
      <text x={ox + a + 14} y={oy + a / 2 + 5} fontSize="14" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>

      {/* Formel */}
      <text x={150} y={oy + a + 30} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        (a − b)² = a² − 2ab + b²
      </text>
    </svg>
  );
}

// ============================================================================
// 3. kvadratsetning (konjugatsetningen): (a+b)(a−b) = a² − b²
// ============================================================================

export function ThirdQuadraticIdentityIllustration({ className }: QuadraticIdentityProps) {
  const ox = 40, oy = 30;
  const a = 150, b = 50;

  return (
    <svg viewBox="0 0 300 280" className={className} aria-label="Konjugatsetningen: (a pluss b) ganger (a minus b) er lik a i andre minus b i andre">
      {/* Stort a²-kvadrat */}
      <rect x={ox} y={oy} width={a} height={a} fill="none" stroke="#000" strokeWidth="2" />

      {/* b²-kvadrat (fjernet del, øvre høyre) — stiplet */}
      <rect x={ox + a - b} y={oy} width={b} height={b}
        fill="none" stroke="#000" strokeWidth="1.5" strokeDasharray="5,3" />
      {/* Kryss over b²-ruten */}
      <line x1={ox + a - b} y1={oy} x2={ox + a} y2={oy + b} stroke="#000" strokeWidth="1" />
      <line x1={ox + a} y1={oy} x2={ox + a - b} y2={oy + b} stroke="#000" strokeWidth="1" />

      {/* Gjenværende L-form (skravert) */}
      <defs>
        <pattern id="qi3-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#000" strokeWidth="1" />
        </pattern>
      </defs>
      {/* Nedre rektangel: a × (a-b) */}
      <rect x={ox} y={oy + b} width={a} height={a - b} fill="url(#qi3-hatch)" stroke="none" />
      {/* Øvre-venstre rektangel: (a-b) × b */}
      <rect x={ox} y={oy} width={a - b} height={b} fill="url(#qi3-hatch)" stroke="none" />

      {/* Labels */}
      <text x={ox + a - b + b / 2} y={oy + b / 2 + 5} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b²</text>

      {/* Dimensjoner */}
      <text x={ox + a / 2} y={oy - 8} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>
      <text x={ox - 12} y={oy + a / 2 + 5} fontSize="14" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>
      <text x={ox + a + 14} y={oy + b / 2 + 5} fontSize="13" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>

      {/* Pil + label for a² - b² */}
      <text x={ox + (a - b) / 2} y={oy + b + (a - b) / 2 + 5} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">a² − b²</text>

      {/* Formel */}
      <text x={150} y={oy + a + 30} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        (a + b)(a − b) = a² − b²
      </text>
    </svg>
  );
}
