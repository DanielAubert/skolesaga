'use client';

interface SimilarityIllustrationProps {
  className?: string;
}

// ============================================================================
// Hjelpefunksjon: vinkelbuebane
// ============================================================================

function angleArc(vx: number, vy: number, p1x: number, p1y: number, p2x: number, p2y: number, r: number): string {
  const a1 = Math.atan2(p1y - vy, p1x - vx);
  const a2 = Math.atan2(p2y - vy, p2x - vx);
  const sx = vx + r * Math.cos(a1);
  const sy = vy + r * Math.sin(a1);
  const ex = vx + r * Math.cos(a2);
  const ey = vy + r * Math.sin(a2);
  const diff = ((a2 - a1) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  const sweep = diff <= Math.PI ? 1 : 0;
  return `M ${sx.toFixed(1)} ${sy.toFixed(1)} A ${r} ${r} 0 0 ${sweep} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
}

// ============================================================================
// To formlike trekanter med forholdstall
// ============================================================================

export function SimilarTrianglesIllustration({ className }: SimilarityIllustrationProps) {
  // Liten trekant
  const s1 = { A: { x: 30, y: 150 }, B: { x: 120, y: 150 }, C: { x: 50, y: 80 } };
  // Stor trekant (skalert 1.6x)
  const s2 = { A: { x: 155, y: 175 }, B: { x: 300, y: 175 }, C: { x: 187, y: 63 } };

  return (
    <svg viewBox="0 0 340 230" className={className} aria-label="To formlike trekanter med forholdstall k = 2">
      {/* Liten trekant */}
      <polygon
        points={`${s1.A.x},${s1.A.y} ${s1.B.x},${s1.B.y} ${s1.C.x},${s1.C.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      {/* Vinkelbuer */}
      <path d={angleArc(s1.A.x, s1.A.y, s1.B.x, s1.B.y, s1.C.x, s1.C.y, 16)} stroke="#000" strokeWidth="1.5" fill="none" />
      <path d={angleArc(s1.B.x, s1.B.y, s1.A.x, s1.A.y, s1.C.x, s1.C.y, 16)} stroke="#000" strokeWidth="1.5" fill="none" />

      {/* Side-labels liten */}
      <text x={(s1.A.x + s1.B.x) / 2} y={s1.A.y + 18} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">3</text>
      <text x={s1.A.x - 10} y={(s1.A.y + s1.C.y) / 2} fontSize="13" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Main, serif">4</text>
      <text x={(s1.B.x + s1.C.x) / 2 + 10} y={(s1.B.y + s1.C.y) / 2} fontSize="13" fill="#000"
        fontFamily="KaTeX_Main, serif">5</text>

      {/* Stor trekant */}
      <polygon
        points={`${s2.A.x},${s2.A.y} ${s2.B.x},${s2.B.y} ${s2.C.x},${s2.C.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      {/* Vinkelbuer (like vinkler) */}
      <path d={angleArc(s2.A.x, s2.A.y, s2.B.x, s2.B.y, s2.C.x, s2.C.y, 20)} stroke="#000" strokeWidth="1.5" fill="none" />
      <path d={angleArc(s2.B.x, s2.B.y, s2.A.x, s2.A.y, s2.C.x, s2.C.y, 20)} stroke="#000" strokeWidth="1.5" fill="none" />

      {/* Side-labels stor */}
      <text x={(s2.A.x + s2.B.x) / 2} y={s2.A.y + 18} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">6</text>
      <text x={s2.A.x - 10} y={(s2.A.y + s2.C.y) / 2 + 5} fontSize="13" fill="#000"
        textAnchor="end" fontFamily="KaTeX_Main, serif">8</text>
      <text x={(s2.B.x + s2.C.x) / 2 + 10} y={(s2.B.y + s2.C.y) / 2} fontSize="13" fill="#000"
        fontFamily="KaTeX_Main, serif">10</text>

      {/* Forholdstall */}
      <text x={170} y={215} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        Forholdstall k = 2
      </text>
    </svg>
  );
}

// ============================================================================
// Kongruens SSS (Side-Side-Side)
// ============================================================================

export function CongruenceSSS({ className }: SimilarityIllustrationProps) {
  const t1 = { A: { x: 20, y: 130 }, B: { x: 130, y: 130 }, C: { x: 60, y: 50 } };
  const t2 = { A: { x: 170, y: 130 }, B: { x: 280, y: 130 }, C: { x: 210, y: 50 } };

  return (
    <svg viewBox="0 0 310 180" className={className} aria-label="SSS-kongruens: to trekanter med tre like sider">
      {/* Trekant 1 */}
      <polygon
        points={`${t1.A.x},${t1.A.y} ${t1.B.x},${t1.B.y} ${t1.C.x},${t1.C.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      {/* Like-sider markeringer (enkle, doble, triple streker) */}
      {/* AB: enkel strek */}
      <line x1={(t1.A.x + t1.B.x) / 2 - 3} y1={t1.A.y - 4}
        x2={(t1.A.x + t1.B.x) / 2 + 3} y2={t1.A.y - 4}
        stroke="#000" strokeWidth="2" />
      {/* AC: doble streker */}
      <line x1={(t1.A.x + t1.C.x) / 2 - 6} y1={(t1.A.y + t1.C.y) / 2 - 2}
        x2={(t1.A.x + t1.C.x) / 2 - 1} y2={(t1.A.y + t1.C.y) / 2 - 6}
        stroke="#000" strokeWidth="2" />
      <line x1={(t1.A.x + t1.C.x) / 2 - 2} y1={(t1.A.y + t1.C.y) / 2 + 1}
        x2={(t1.A.x + t1.C.x) / 2 + 3} y2={(t1.A.y + t1.C.y) / 2 - 3}
        stroke="#000" strokeWidth="2" />
      {/* BC: triple streker */}
      <line x1={(t1.B.x + t1.C.x) / 2 + 1} y1={(t1.B.y + t1.C.y) / 2 - 7}
        x2={(t1.B.x + t1.C.x) / 2 + 6} y2={(t1.B.y + t1.C.y) / 2 - 3}
        stroke="#000" strokeWidth="2" />
      <line x1={(t1.B.x + t1.C.x) / 2 - 1} y1={(t1.B.y + t1.C.y) / 2 - 4}
        x2={(t1.B.x + t1.C.x) / 2 + 4} y2={(t1.B.y + t1.C.y) / 2}
        stroke="#000" strokeWidth="2" />
      <line x1={(t1.B.x + t1.C.x) / 2 - 3} y1={(t1.B.y + t1.C.y) / 2 - 1}
        x2={(t1.B.x + t1.C.x) / 2 + 2} y2={(t1.B.y + t1.C.y) / 2 + 3}
        stroke="#000" strokeWidth="2" />

      {/* Trekant 2 — identiske markeringer */}
      <polygon
        points={`${t2.A.x},${t2.A.y} ${t2.B.x},${t2.B.y} ${t2.C.x},${t2.C.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      <line x1={(t2.A.x + t2.B.x) / 2 - 3} y1={t2.A.y - 4}
        x2={(t2.A.x + t2.B.x) / 2 + 3} y2={t2.A.y - 4}
        stroke="#000" strokeWidth="2" />
      <line x1={(t2.A.x + t2.C.x) / 2 - 6} y1={(t2.A.y + t2.C.y) / 2 - 2}
        x2={(t2.A.x + t2.C.x) / 2 - 1} y2={(t2.A.y + t2.C.y) / 2 - 6}
        stroke="#000" strokeWidth="2" />
      <line x1={(t2.A.x + t2.C.x) / 2 - 2} y1={(t2.A.y + t2.C.y) / 2 + 1}
        x2={(t2.A.x + t2.C.x) / 2 + 3} y2={(t2.A.y + t2.C.y) / 2 - 3}
        stroke="#000" strokeWidth="2" />
      <line x1={(t2.B.x + t2.C.x) / 2 + 1} y1={(t2.B.y + t2.C.y) / 2 - 7}
        x2={(t2.B.x + t2.C.x) / 2 + 6} y2={(t2.B.y + t2.C.y) / 2 - 3}
        stroke="#000" strokeWidth="2" />
      <line x1={(t2.B.x + t2.C.x) / 2 - 1} y1={(t2.B.y + t2.C.y) / 2 - 4}
        x2={(t2.B.x + t2.C.x) / 2 + 4} y2={(t2.B.y + t2.C.y) / 2}
        stroke="#000" strokeWidth="2" />
      <line x1={(t2.B.x + t2.C.x) / 2 - 3} y1={(t2.B.y + t2.C.y) / 2 - 1}
        x2={(t2.B.x + t2.C.x) / 2 + 2} y2={(t2.B.y + t2.C.y) / 2 + 3}
        stroke="#000" strokeWidth="2" />

      {/* Label */}
      <text x={155} y={165} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif" fontWeight="bold">SSS</text>
    </svg>
  );
}

// ============================================================================
// Kongruens SAS (Side-Angle-Side)
// ============================================================================

export function CongruenceSAS({ className }: SimilarityIllustrationProps) {
  const t1 = { A: { x: 20, y: 130 }, B: { x: 130, y: 130 }, C: { x: 60, y: 50 } };
  const t2 = { A: { x: 170, y: 130 }, B: { x: 280, y: 130 }, C: { x: 210, y: 50 } };

  return (
    <svg viewBox="0 0 310 180" className={className} aria-label="SAS-kongruens: to trekanter med to like sider og vinkelen mellom">
      {/* Trekant 1 */}
      <polygon
        points={`${t1.A.x},${t1.A.y} ${t1.B.x},${t1.B.y} ${t1.C.x},${t1.C.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      {/* Side AB: markering */}
      <line x1={(t1.A.x + t1.B.x) / 2 - 3} y1={t1.A.y - 4}
        x2={(t1.A.x + t1.B.x) / 2 + 3} y2={t1.A.y - 4}
        stroke="#000" strokeWidth="2" />
      {/* Side AC: markering */}
      <line x1={(t1.A.x + t1.C.x) / 2 - 6} y1={(t1.A.y + t1.C.y) / 2 - 2}
        x2={(t1.A.x + t1.C.x) / 2 - 1} y2={(t1.A.y + t1.C.y) / 2 - 6}
        stroke="#000" strokeWidth="2" />
      <line x1={(t1.A.x + t1.C.x) / 2 - 2} y1={(t1.A.y + t1.C.y) / 2 + 1}
        x2={(t1.A.x + t1.C.x) / 2 + 3} y2={(t1.A.y + t1.C.y) / 2 - 3}
        stroke="#000" strokeWidth="2" />
      {/* Vinkel A */}
      <path d={angleArc(t1.A.x, t1.A.y, t1.B.x, t1.B.y, t1.C.x, t1.C.y, 18)}
        stroke="#000" strokeWidth="1.5" fill="none" />

      {/* Trekant 2 */}
      <polygon
        points={`${t2.A.x},${t2.A.y} ${t2.B.x},${t2.B.y} ${t2.C.x},${t2.C.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      <line x1={(t2.A.x + t2.B.x) / 2 - 3} y1={t2.A.y - 4}
        x2={(t2.A.x + t2.B.x) / 2 + 3} y2={t2.A.y - 4}
        stroke="#000" strokeWidth="2" />
      <line x1={(t2.A.x + t2.C.x) / 2 - 6} y1={(t2.A.y + t2.C.y) / 2 - 2}
        x2={(t2.A.x + t2.C.x) / 2 - 1} y2={(t2.A.y + t2.C.y) / 2 - 6}
        stroke="#000" strokeWidth="2" />
      <line x1={(t2.A.x + t2.C.x) / 2 - 2} y1={(t2.A.y + t2.C.y) / 2 + 1}
        x2={(t2.A.x + t2.C.x) / 2 + 3} y2={(t2.A.y + t2.C.y) / 2 - 3}
        stroke="#000" strokeWidth="2" />
      <path d={angleArc(t2.A.x, t2.A.y, t2.B.x, t2.B.y, t2.C.x, t2.C.y, 18)}
        stroke="#000" strokeWidth="1.5" fill="none" />

      {/* Label */}
      <text x={155} y={165} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif" fontWeight="bold">SAS</text>
    </svg>
  );
}

// ============================================================================
// Kongruens ASA (Angle-Side-Angle)
// ============================================================================

export function CongruenceASA({ className }: SimilarityIllustrationProps) {
  const t1 = { A: { x: 20, y: 130 }, B: { x: 130, y: 130 }, C: { x: 60, y: 50 } };
  const t2 = { A: { x: 170, y: 130 }, B: { x: 280, y: 130 }, C: { x: 210, y: 50 } };

  return (
    <svg viewBox="0 0 310 180" className={className} aria-label="ASA-kongruens: to trekanter med to like vinkler og siden mellom">
      {/* Trekant 1 */}
      <polygon
        points={`${t1.A.x},${t1.A.y} ${t1.B.x},${t1.B.y} ${t1.C.x},${t1.C.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      {/* Vinkel A */}
      <path d={angleArc(t1.A.x, t1.A.y, t1.B.x, t1.B.y, t1.C.x, t1.C.y, 18)}
        stroke="#000" strokeWidth="1.5" fill="none" />
      {/* Vinkel B */}
      <path d={angleArc(t1.B.x, t1.B.y, t1.A.x, t1.A.y, t1.C.x, t1.C.y, 18)}
        stroke="#000" strokeWidth="1.5" fill="none" />
      {/* Side AB: markering */}
      <line x1={(t1.A.x + t1.B.x) / 2 - 3} y1={t1.A.y - 4}
        x2={(t1.A.x + t1.B.x) / 2 + 3} y2={t1.A.y - 4}
        stroke="#000" strokeWidth="2" />

      {/* Trekant 2 */}
      <polygon
        points={`${t2.A.x},${t2.A.y} ${t2.B.x},${t2.B.y} ${t2.C.x},${t2.C.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      <path d={angleArc(t2.A.x, t2.A.y, t2.B.x, t2.B.y, t2.C.x, t2.C.y, 18)}
        stroke="#000" strokeWidth="1.5" fill="none" />
      <path d={angleArc(t2.B.x, t2.B.y, t2.A.x, t2.A.y, t2.C.x, t2.C.y, 18)}
        stroke="#000" strokeWidth="1.5" fill="none" />
      <line x1={(t2.A.x + t2.B.x) / 2 - 3} y1={t2.A.y - 4}
        x2={(t2.A.x + t2.B.x) / 2 + 3} y2={t2.A.y - 4}
        stroke="#000" strokeWidth="2" />

      {/* Label */}
      <text x={155} y={165} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif" fontWeight="bold">ASA</text>
    </svg>
  );
}
