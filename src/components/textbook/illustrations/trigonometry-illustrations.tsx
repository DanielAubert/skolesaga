'use client';

interface TrigIllustrationProps {
  className?: string;
}

// ============================================================================
// Trigonometriske forhold i rettvinklet trekant
// ============================================================================

export function TrigRatiosIllustration({ className }: TrigIllustrationProps) {
  // Rettvinklet trekant med vinkel v
  const A = { x: 50, y: 180 };  // rett vinkel
  const B = { x: 250, y: 180 }; // vinkel v
  const C = { x: 50, y: 50 };   // toppen

  const sq = 14;

  return (
    <svg viewBox="0 0 320 260" className={className} aria-label="Rettvinklet trekant med hosliggende, motstående og hypotenus markert for vinkel v">
      {/* Trekanten */}
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />

      {/* Rett vinkel-markør i A */}
      <path
        d={`M ${A.x + sq} ${A.y} L ${A.x + sq} ${A.y - sq} L ${A.x} ${A.y - sq}`}
        stroke="#000" strokeWidth="1.5" fill="none"
      />

      {/* Vinkel v i B */}
      <path
        d={`M ${B.x - 30} ${B.y} A 30 30 0 0 1 ${B.x - 30 * (200 / 244.9)} ${B.y - 30 * (130 / 244.9)}`}
        stroke="#000" strokeWidth="1.5" fill="none"
      />
      <text x={B.x - 44} y={B.y - 14} fontSize="15" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">v</text>

      {/* Sidelabels */}
      {/* Hosliggende (bunn) */}
      <text x={(A.x + B.x) / 2} y={A.y + 24} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">hosliggende</text>

      {/* Motstående (venstre) */}
      <text x={A.x - 15} y={(A.y + C.y) / 2 + 5} fontSize="14" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Main, serif" transform={`rotate(-90, ${A.x - 15}, ${(A.y + C.y) / 2 + 5})`}>
        motstående
      </text>

      {/* Hypotenus (skrå) */}
      <text x={(B.x + C.x) / 2 + 16} y={(B.y + C.y) / 2 - 4} fontSize="14" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Main, serif"
        transform={`rotate(-33, ${(B.x + C.x) / 2 + 16}, ${(B.y + C.y) / 2 - 4})`}>
        hypotenus
      </text>

      {/* Formler */}
      <text x={160} y={225} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        sin v = motstående / hypotenus
      </text>
      <text x={160} y={243} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        cos v = hosliggende / hypotenus
      </text>
    </svg>
  );
}

// ============================================================================
// Enhetssirkel med sin/cos
// ============================================================================

export function UnitCircleIllustration({ className }: TrigIllustrationProps) {
  const cx = 160, cy = 150, r = 110;
  // Vinkel 40 grader
  const angle = 40 * Math.PI / 180;
  const px = cx + r * Math.cos(angle);
  const py = cy - r * Math.sin(angle);

  return (
    <svg viewBox="0 0 320 310" className={className} aria-label="Enhetssirkel med sinus og cosinus avmerket">
      {/* Akser */}
      <line x1={30} y1={cy} x2={290} y2={cy} stroke="#000" strokeWidth="1.5" />
      <line x1={cx} y1={20} x2={cx} y2={280} stroke="#000" strokeWidth="1.5" />
      {/* Pilspisser */}
      <polygon points={`290,${cy} 283,${cy - 3.5} 283,${cy + 3.5}`} fill="#000" />
      <polygon points={`${cx},20 ${cx - 3.5},27 ${cx + 3.5},27`} fill="#000" />
      {/* Akselabels */}
      <text x={285} y={cy - 10} fontSize="14" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Math, serif" fontStyle="italic">x</text>
      <text x={cx + 12} y={30} fontSize="14" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">y</text>

      {/* Enhetssirkelen */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#000" strokeWidth="2" />

      {/* 1-merker på aksene */}
      <line x1={cx + r} y1={cy - 3} x2={cx + r} y2={cy + 3} stroke="#000" strokeWidth="1" />
      <text x={cx + r} y={cy + 16} fontSize="11" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">1</text>
      <line x1={cx - 3} y1={cy - r} x2={cx + 3} y2={cy - r} stroke="#000" strokeWidth="1" />
      <text x={cx - 10} y={cy - r + 5} fontSize="11" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Main, serif">1</text>

      {/* Radius til punkt P */}
      <line x1={cx} y1={cy} x2={px} y2={py} stroke="#000" strokeWidth="2" />
      <circle cx={px} cy={py} r="3.5" fill="#000" />

      {/* Vinkel-bue */}
      <path
        d={`M ${cx + 30} ${cy} A 30 30 0 0 0 ${cx + 30 * Math.cos(angle)} ${cy - 30 * Math.sin(angle)}`}
        stroke="#000" strokeWidth="1.5" fill="none"
      />
      <text x={cx + 38} y={cy - 12} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">v</text>

      {/* cos v (horisontal projeksjon) */}
      <line x1={cx} y1={cy} x2={px} y2={cy}
        stroke="#000" strokeWidth="2" strokeDasharray="5,3" />
      <text x={(cx + px) / 2} y={cy + 18} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">cos v</text>

      {/* sin v (vertikal projeksjon) */}
      <line x1={px} y1={cy} x2={px} y2={py}
        stroke="#000" strokeWidth="2" strokeDasharray="5,3" />
      <text x={px + 12} y={(cy + py) / 2 + 4} fontSize="12" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Main, serif">sin v</text>

      {/* Punkt P label */}
      <text x={px + 8} y={py - 8} fontSize="13" fill="#000"
        fontFamily="KaTeX_Math, serif" fontStyle="italic">P</text>

      {/* Label for r = 1 */}
      <text x={(cx + px) / 2 - 14} y={(cy + py) / 2 - 4} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif"
        transform={`rotate(-40, ${(cx + px) / 2 - 14}, ${(cy + py) / 2 - 4})`}>r = 1</text>
    </svg>
  );
}
