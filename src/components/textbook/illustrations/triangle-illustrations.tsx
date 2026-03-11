'use client';

import React from 'react';

interface TriangleIllustrationProps {
  className?: string;
}

// Enkel og ren vinkelsum-illustrasjon
export function TriangleAngleSumIllustration({ className }: TriangleIllustrationProps) {
  return (
    <svg viewBox="0 0 320 220" className={className} aria-label="Vinkelsum i trekant er 180 grader">
      {/* Bakgrunn */}
      <rect width="320" height="220" fill="#f8fafc" rx="8" />

      {/* Trekanten */}
      <polygon
        points="50,170 270,170 160,40"
        fill="#dbeafe"
        stroke="#3b82f6"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Vinkel A (venstre) - grønn */}
      <path
        d="M 75,170 A 25,25 0 0,0 62,152"
        stroke="#22c55e"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="50" cy="170" r="3" fill="#22c55e" />
      <text x="80" y="158" fontSize="16" fill="#22c55e" fontWeight="bold">55°</text>
      <text x="30" y="185" fontSize="18" fill="#1e40af" fontWeight="bold">A</text>

      {/* Vinkel B (høyre) - oransje */}
      <path
        d="M 245,170 A 25,25 0 0,1 258,152"
        stroke="#f59e0b"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="270" cy="170" r="3" fill="#f59e0b" />
      <text x="222" y="158" fontSize="16" fill="#f59e0b" fontWeight="bold">38°</text>
      <text x="278" y="185" fontSize="18" fill="#1e40af" fontWeight="bold">B</text>

      {/* Vinkel C (topp) - lilla */}
      <path
        d="M 148,58 A 20,20 0 0,1 172,58"
        stroke="#8b5cf6"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="160" cy="40" r="3" fill="#8b5cf6" />
      <text x="150" y="82" fontSize="16" fill="#8b5cf6" fontWeight="bold">87°</text>
      <text x="152" y="30" fontSize="18" fill="#1e40af" fontWeight="bold">C</text>

      {/* Formel */}
      <text x="160" y="205" fontSize="14" fill="#374151" textAnchor="middle" fontWeight="bold">
        55° + 38° + 87° = 180°
      </text>
    </svg>
  );
}

// Illustrasjon av likesidet trekant
export function EquilateralTriangleIllustration({ className }: TriangleIllustrationProps) {
  const cx = 150;
  const cy = 100;
  const size = 80;

  // Likesidet trekant - alle sider like lange
  const A = { x: cx, y: cy - size };
  const B = { x: cx - size * Math.cos(Math.PI / 6), y: cy + size * Math.sin(Math.PI / 6) };
  const C = { x: cx + size * Math.cos(Math.PI / 6), y: cy + size * Math.sin(Math.PI / 6) };

  return (
    <svg viewBox="0 0 300 180" className={className} aria-label="Likesidet trekant med tre 60-graders vinkler">
      <rect width="300" height="180" fill="#f8fafc" rx="8" />

      {/* Tittel */}
      <text x={150} y={20} fontSize="13" fill="#1e293b" textAnchor="middle" fontWeight="bold">
        Likesidet trekant
      </text>

      {/* Trekanten */}
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
        fill="#dcfce7"
        stroke="#22c55e"
        strokeWidth="2.5"
      />

      {/* Like sider markering */}
      <g stroke="#22c55e" strokeWidth="2">
        {/* Streker på sidene for å vise de er like */}
        <line x1={(A.x + B.x) / 2 - 5} y1={(A.y + B.y) / 2 - 3} x2={(A.x + B.x) / 2 + 5} y2={(A.y + B.y) / 2 + 3} />
        <line x1={(B.x + C.x) / 2} y1={(B.y + C.y) / 2 - 5} x2={(B.x + C.x) / 2} y2={(B.y + C.y) / 2 + 5} />
        <line x1={(C.x + A.x) / 2 - 5} y1={(C.y + A.y) / 2 + 3} x2={(C.x + A.x) / 2 + 5} y2={(C.y + A.y) / 2 - 3} />
      </g>

      {/* Vinkler - alle 60° */}
      <text x={A.x + 15} y={A.y + 30} fontSize="12" fill="#22c55e" fontWeight="bold">60°</text>
      <text x={B.x + 20} y={B.y - 10} fontSize="12" fill="#22c55e" fontWeight="bold">60°</text>
      <text x={C.x - 35} y={C.y - 10} fontSize="12" fill="#22c55e" fontWeight="bold">60°</text>

      {/* Forklaring */}
      <text x={150} y={165} fontSize="11" fill="#374151" textAnchor="middle">
        Alle sider er like • Alle vinkler er 60°
      </text>
    </svg>
  );
}

// Illustrasjon av likebeint trekant
export function IsoscelesTriangleIllustration({ className }: TriangleIllustrationProps) {
  const A = { x: 150, y: 30 };
  const B = { x: 80, y: 140 };
  const C = { x: 220, y: 140 };

  return (
    <svg viewBox="0 0 300 180" className={className} aria-label="Likebeint trekant">
      <rect width="300" height="180" fill="#f8fafc" rx="8" />

      {/* Tittel */}
      <text x={150} y={20} fontSize="13" fill="#1e293b" textAnchor="middle" fontWeight="bold">
        Likebeint trekant
      </text>

      {/* Trekanten */}
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
        fill="#fef3c7"
        stroke="#f59e0b"
        strokeWidth="2.5"
      />

      {/* Like sider markering (de to like sidene) */}
      <g stroke="#f59e0b" strokeWidth="2">
        <line x1={(A.x + B.x) / 2 - 3} y1={(A.y + B.y) / 2 - 5} x2={(A.x + B.x) / 2 + 3} y2={(A.y + B.y) / 2 + 5} />
        <line x1={(A.x + C.x) / 2 - 3} y1={(A.y + C.y) / 2 + 5} x2={(A.x + C.x) / 2 + 3} y2={(A.y + C.y) / 2 - 5} />
      </g>

      {/* Vinkler */}
      <text x={A.x + 10} y={A.y + 35} fontSize="11" fill="#f59e0b" fontWeight="bold">α</text>
      <text x={B.x + 15} y={B.y - 15} fontSize="11" fill="#3b82f6" fontWeight="bold">β</text>
      <text x={C.x - 25} y={C.y - 15} fontSize="11" fill="#3b82f6" fontWeight="bold">β</text>

      {/* Forklaring */}
      <text x={150} y={165} fontSize="11" fill="#374151" textAnchor="middle">
        To sider er like • To vinkler er like (β = β)
      </text>
    </svg>
  );
}

// Illustrasjon av rettvinklet trekant
export function RightTriangleIllustration({ className }: TriangleIllustrationProps) {
  const A = { x: 50, y: 140 };
  const B = { x: 250, y: 140 };
  const C = { x: 50, y: 40 };

  return (
    <svg viewBox="0 0 300 180" className={className} aria-label="Rettvinklet trekant">
      <rect width="300" height="180" fill="#f8fafc" rx="8" />

      {/* Tittel */}
      <text x={150} y={20} fontSize="13" fill="#1e293b" textAnchor="middle" fontWeight="bold">
        Rettvinklet trekant
      </text>

      {/* Trekanten */}
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
        fill="#dbeafe"
        stroke="#3b82f6"
        strokeWidth="2.5"
      />

      {/* Rett vinkel-markør */}
      <path
        d={`M ${A.x + 15} ${A.y} L ${A.x + 15} ${A.y - 15} L ${A.x} ${A.y - 15}`}
        stroke="#ef4444"
        strokeWidth="2"
        fill="none"
      />

      {/* 90° etikett */}
      <text x={A.x + 25} y={A.y - 20} fontSize="12" fill="#ef4444" fontWeight="bold">90°</text>

      {/* Sideetiketter */}
      <text x={(A.x + B.x) / 2} y={A.y + 20} fontSize="11" fill="#64748b" textAnchor="middle">
        katet a
      </text>
      <text x={A.x - 25} y={(A.y + C.y) / 2} fontSize="11" fill="#64748b" textAnchor="middle">
        katet b
      </text>
      <text x={(B.x + C.x) / 2 + 15} y={(B.y + C.y) / 2} fontSize="11" fill="#64748b">
        hypotenus c
      </text>

      {/* Forklaring */}
      <text x={150} y={168} fontSize="11" fill="#374151" textAnchor="middle">
        En vinkel er 90° • Hypotenusen er den lengste siden
      </text>
    </svg>
  );
}

// Illustrasjon av trekanttyper oversikt
export function TriangleTypesOverviewIllustration({ className }: TriangleIllustrationProps) {
  return (
    <svg viewBox="0 0 400 220" className={className} aria-label="Oversikt over trekanttyper">
      <rect width="400" height="220" fill="#f8fafc" rx="8" />

      {/* Tittel */}
      <text x={200} y={25} fontSize="14" fill="#1e293b" textAnchor="middle" fontWeight="bold">
        Typer trekanter
      </text>

      {/* Likesidet */}
      <g transform="translate(50, 50)">
        <polygon points="40,0 0,70 80,70" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
        <text x={40} y={95} fontSize="11" fill="#374151" textAnchor="middle" fontWeight="bold">Likesidet</text>
        <text x={40} y={108} fontSize="9" fill="#64748b" textAnchor="middle">3 like sider</text>
      </g>

      {/* Likebeint */}
      <g transform="translate(160, 50)">
        <polygon points="40,0 10,70 70,70" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x={40} y={95} fontSize="11" fill="#374151" textAnchor="middle" fontWeight="bold">Likebeint</text>
        <text x={40} y={108} fontSize="9" fill="#64748b" textAnchor="middle">2 like sider</text>
      </g>

      {/* Ulikesidet */}
      <g transform="translate(270, 50)">
        <polygon points="20,10 0,70 80,70" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
        <text x={40} y={95} fontSize="11" fill="#374151" textAnchor="middle" fontWeight="bold">Ulikesidet</text>
        <text x={40} y={108} fontSize="9" fill="#64748b" textAnchor="middle">Ingen like sider</text>
      </g>

      {/* Skillelinje */}
      <line x1={20} y1={130} x2={380} y2={130} stroke="#e2e8f0" strokeWidth="1" />

      {/* Rettvinklet */}
      <g transform="translate(80, 145)">
        <polygon points="0,0 60,0 0,50" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
        <path d="M 0,10 L 10,10 L 10,0" stroke="#ef4444" strokeWidth="1.5" fill="none" />
        <text x={30} y={70} fontSize="11" fill="#374151" textAnchor="middle" fontWeight="bold">Rettvinklet</text>
        <text x={30} y={83} fontSize="9" fill="#64748b" textAnchor="middle">Én vinkel = 90°</text>
      </g>

      {/* Spissvinklet */}
      <g transform="translate(200, 145)">
        <polygon points="30,0 0,50 60,50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
        <text x={30} y={70} fontSize="11" fill="#374151" textAnchor="middle" fontWeight="bold">Spissvinklet</text>
        <text x={30} y={83} fontSize="9" fill="#64748b" textAnchor="middle">Alle vinkler &lt; 90°</text>
      </g>

      {/* Stumpvinklet */}
      <g transform="translate(300, 145)">
        <polygon points="50,5 0,50 80,50" fill="#fef9c3" stroke="#eab308" strokeWidth="2" />
        <text x={40} y={70} fontSize="11" fill="#374151" textAnchor="middle" fontWeight="bold">Stumpvinklet</text>
        <text x={40} y={83} fontSize="9" fill="#64748b" textAnchor="middle">Én vinkel &gt; 90°</text>
      </g>
    </svg>
  );
}

// Pytagoras 3-4-5 oppgaveillustrasjon (sort/hvitt)
export function Pythagorean345Illustration({ className }: TriangleIllustrationProps) {
  // Rettvinklet trekant med kateter 3 og 4, hypotenus 5
  // Skalert opp for god lesbarhet
  const scale = 28;
  const pad = 60;
  const A = { x: pad, y: pad + 4 * scale };               // nedre venstre (rett vinkel)
  const B = { x: pad + 3 * scale, y: pad + 4 * scale };    // nedre høyre
  const C = { x: pad, y: pad };                             // øvre venstre

  const sq = 12; // rettvinkelsymbol størrelse

  return (
    <svg viewBox="0 0 260 210" className={className} aria-label="Rettvinklet trekant med sider 3, 4 og 5">
      {/* Trekanten */}
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Rettvinkelsymbol i A */}
      <path
        d={`M ${A.x + sq} ${A.y} L ${A.x + sq} ${A.y - sq} L ${A.x} ${A.y - sq}`}
        stroke="#000"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Sidelabels */}
      {/* Katet a = 3 (bunn, horisontal) */}
      <text
        x={(A.x + B.x) / 2}
        y={A.y + 20}
        fontSize="15"
        fill="#000"
        textAnchor="middle"
        fontFamily="KaTeX_Math, serif"
        fontStyle="italic"
      >
        3
      </text>

      {/* Katet b = 4 (venstre, vertikal) */}
      <text
        x={A.x - 18}
        y={(A.y + C.y) / 2 + 5}
        fontSize="15"
        fill="#000"
        textAnchor="middle"
        fontFamily="KaTeX_Math, serif"
        fontStyle="italic"
      >
        4
      </text>

      {/* Hypotenus c = 5 (skrå) */}
      <text
        x={(B.x + C.x) / 2 + 14}
        y={(B.y + C.y) / 2}
        fontSize="15"
        fill="#000"
        textAnchor="middle"
        fontFamily="KaTeX_Math, serif"
        fontStyle="italic"
      >
        5
      </text>

    </svg>
  );
}

// ============================================================================
// Hjelpefunksjoner for nøyaktige vinkel-illustrasjoner
// ============================================================================

type Point = { x: number; y: number };

/** SVG-bue for indre vinkel ved vertex V mellom sidene VP1 og VP2 */
function angleArcPath(V: Point, P1: Point, P2: Point, r: number): string {
  const a1 = Math.atan2(P1.y - V.y, P1.x - V.x);
  const a2 = Math.atan2(P2.y - V.y, P2.x - V.x);
  const sx = V.x + r * Math.cos(a1);
  const sy = V.y + r * Math.sin(a1);
  const ex = V.x + r * Math.cos(a2);
  const ey = V.y + r * Math.sin(a2);
  const diffCW = ((a2 - a1) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  const sweep = diffCW <= Math.PI ? 1 : 0;
  return `M ${sx.toFixed(1)} ${sy.toFixed(1)} A ${r} ${r} 0 0 ${sweep} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
}

/** SVG-kileform (fylt sektor) for indre vinkel */
function angleWedgePath(V: Point, P1: Point, P2: Point, r: number): string {
  const a1 = Math.atan2(P1.y - V.y, P1.x - V.x);
  const a2 = Math.atan2(P2.y - V.y, P2.x - V.x);
  const sx = V.x + r * Math.cos(a1);
  const sy = V.y + r * Math.sin(a1);
  const ex = V.x + r * Math.cos(a2);
  const ey = V.y + r * Math.sin(a2);
  const diffCW = ((a2 - a1) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  const sweep = diffCW <= Math.PI ? 1 : 0;
  return `M ${V.x.toFixed(1)} ${V.y.toFixed(1)} L ${sx.toFixed(1)} ${sy.toFixed(1)} A ${r} ${r} 0 0 ${sweep} ${ex.toFixed(1)} ${ey.toFixed(1)} Z`;
}

/** Posisjon langs vinkelbisektoren (inn mot sentrum) */
function bisectorPos(V: Point, P1: Point, P2: Point, dist: number): Point {
  const d1x = P1.x - V.x, d1y = P1.y - V.y;
  const d2x = P2.x - V.x, d2y = P2.y - V.y;
  const len1 = Math.sqrt(d1x * d1x + d1y * d1y);
  const len2 = Math.sqrt(d2x * d2x + d2y * d2y);
  const bx = d1x / len1 + d2x / len2;
  const by = d1y / len1 + d2y / len2;
  const blen = Math.sqrt(bx * bx + by * by);
  return { x: V.x + dist * bx / blen, y: V.y + dist * by / blen };
}

/** Posisjon utenfor hjørnet (for vertex-labels) */
function outerPos(V: Point, P1: Point, P2: Point, dist: number): Point {
  const b = bisectorPos(V, P1, P2, 1);
  const dx = b.x - V.x, dy = b.y - V.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  return { x: V.x - dist * dx / len, y: V.y - dist * dy / len };
}

/** Beregn nøyaktig trekant fra tre vinkler */
function makeTriangle(angA: number, angB: number, angC: number, base: number, padX: number, padY: number) {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const b = (base * Math.sin(toRad(angB))) / Math.sin(toRad(angC));
  const A: Point = { x: padX, y: padY };
  const B: Point = { x: padX + base, y: padY };
  const C: Point = {
    x: padX + b * Math.cos(toRad(angA)),
    y: padY - b * Math.sin(toRad(angA)),
  };
  return { A, B, C };
}

/** Posisjon for sidelabel: midtpunkt av siden, forskjøvet utover fra trekanten */
function sideLabelPos(P1: Point, P2: Point, offset: number, interior: Point): Point {
  const mx = (P1.x + P2.x) / 2;
  const my = (P1.y + P2.y) / 2;
  const dx = P2.x - P1.x, dy = P2.y - P1.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / len, ny = dx / len;
  const dot = nx * (interior.x - mx) + ny * (interior.y - my);
  const sign = dot > 0 ? -1 : 1;
  return { x: mx + sign * offset * nx, y: my + sign * offset * ny };
}

// ============================================================================
// Stil A: Minimal — buestreker + gradtall
// ============================================================================

export function Triangle406080StyleA({ className }: TriangleIllustrationProps) {
  const { A, B, C } = makeTriangle(40, 60, 80, 180, 40, 190);
  const arcR = 28;
  const labelR = 44;
  const lA = bisectorPos(A, B, C, labelR);
  const lB = bisectorPos(B, A, C, labelR);
  const lC = bisectorPos(C, A, B, labelR);
  const centroid: Point = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };
  const sA = sideLabelPos(B, C, 16, centroid); // side a, opposite A
  const sB = sideLabelPos(A, C, 16, centroid); // side b, opposite B
  const sC = sideLabelPos(A, B, 16, centroid); // side c, opposite C

  return (
    <svg viewBox="0 0 270 220" className={className} aria-label="Trekant med vinkler 40, 60 og 80 grader">
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x.toFixed(1)},${C.y.toFixed(1)}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      <path d={angleArcPath(A, B, C, arcR)} stroke="#000" strokeWidth="1.5" fill="none" />
      <path d={angleArcPath(B, A, C, arcR)} stroke="#000" strokeWidth="1.5" fill="none" />
      <path d={angleArcPath(C, A, B, arcR)} stroke="#000" strokeWidth="1.5" fill="none" />
      <text x={lA.x.toFixed(1)} y={(lA.y + 4).toFixed(1)} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">40°</text>
      <text x={lB.x.toFixed(1)} y={(lB.y + 4).toFixed(1)} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">60°</text>
      <text x={lC.x.toFixed(1)} y={(lC.y + 4).toFixed(1)} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">80°</text>
      <text x={sA.x.toFixed(1)} y={(sA.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>
      <text x={sB.x.toFixed(1)} y={(sB.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>
      <text x={sC.x.toFixed(1)} y={(sC.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">c</text>
    </svg>
  );
}

// ============================================================================
// Stil B: Akademisk — buestreker + gradtall + hjørnelabels A, B, C
// ============================================================================

export function Triangle406080StyleB({ className }: TriangleIllustrationProps) {
  const { A, B, C } = makeTriangle(40, 60, 80, 180, 45, 185);
  const arcR = 25;
  const labelR = 40;
  const lA = bisectorPos(A, B, C, labelR);
  const lB = bisectorPos(B, A, C, labelR);
  const lC = bisectorPos(C, A, B, labelR);
  const vA = outerPos(A, B, C, 18);
  const vB = outerPos(B, A, C, 18);
  const vC = outerPos(C, A, B, 18);
  const centroid: Point = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };
  const sA = sideLabelPos(B, C, 16, centroid);
  const sB = sideLabelPos(A, C, 16, centroid);
  const sC = sideLabelPos(A, B, 16, centroid);

  return (
    <svg viewBox="0 0 280 225" className={className} aria-label="Trekant ABC med vinkler 40, 60 og 80 grader">
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x.toFixed(1)},${C.y.toFixed(1)}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      <path d={angleArcPath(A, B, C, arcR)} stroke="#000" strokeWidth="1.5" fill="none" />
      <path d={angleArcPath(B, A, C, arcR)} stroke="#000" strokeWidth="1.5" fill="none" />
      <path d={angleArcPath(C, A, B, arcR)} stroke="#000" strokeWidth="1.5" fill="none" />
      <text x={lA.x.toFixed(1)} y={(lA.y + 4).toFixed(1)} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">40°</text>
      <text x={lB.x.toFixed(1)} y={(lB.y + 4).toFixed(1)} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">60°</text>
      <text x={lC.x.toFixed(1)} y={(lC.y + 4).toFixed(1)} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">80°</text>
      <text x={vA.x.toFixed(1)} y={(vA.y + 5).toFixed(1)} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">A</text>
      <text x={vB.x.toFixed(1)} y={(vB.y + 5).toFixed(1)} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">B</text>
      <text x={vC.x.toFixed(1)} y={(vC.y + 5).toFixed(1)} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">C</text>
      <text x={sA.x.toFixed(1)} y={(sA.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>
      <text x={sB.x.toFixed(1)} y={(sB.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>
      <text x={sC.x.toFixed(1)} y={(sC.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">c</text>
    </svg>
  );
}

// ============================================================================
// Stil C: Fylte kiler — grå vinkelsektorer + gradtall
// ============================================================================

export function Triangle406080StyleC({ className }: TriangleIllustrationProps) {
  const { A, B, C } = makeTriangle(40, 60, 80, 180, 40, 190);
  const wedgeR = 25;
  const labelR = 40;
  const lA = bisectorPos(A, B, C, labelR);
  const lB = bisectorPos(B, A, C, labelR);
  const lC = bisectorPos(C, A, B, labelR);
  const centroid: Point = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };
  const sA = sideLabelPos(B, C, 16, centroid);
  const sB = sideLabelPos(A, C, 16, centroid);
  const sC = sideLabelPos(A, B, 16, centroid);

  return (
    <svg viewBox="0 0 270 220" className={className} aria-label="Trekant med vinkler 40, 60 og 80 grader">
      <path d={angleWedgePath(A, B, C, wedgeR)} fill="#d4d4d4" stroke="#000" strokeWidth="0.5" />
      <path d={angleWedgePath(B, A, C, wedgeR)} fill="#d4d4d4" stroke="#000" strokeWidth="0.5" />
      <path d={angleWedgePath(C, A, B, wedgeR)} fill="#d4d4d4" stroke="#000" strokeWidth="0.5" />
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x.toFixed(1)},${C.y.toFixed(1)}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      <text x={lA.x.toFixed(1)} y={(lA.y + 4).toFixed(1)} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">40°</text>
      <text x={lB.x.toFixed(1)} y={(lB.y + 4).toFixed(1)} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">60°</text>
      <text x={lC.x.toFixed(1)} y={(lC.y + 4).toFixed(1)} fontSize="13" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">80°</text>
      <text x={sA.x.toFixed(1)} y={(sA.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>
      <text x={sB.x.toFixed(1)} y={(sB.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>
      <text x={sC.x.toFixed(1)} y={(sC.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">c</text>
    </svg>
  );
}

// Eksportere alle illustrasjoner
export const TriangleIllustrations = {
  AngleSum: TriangleAngleSumIllustration,
  Equilateral: EquilateralTriangleIllustration,
  Isosceles: IsoscelesTriangleIllustration,
  Right: RightTriangleIllustration,
  Overview: TriangleTypesOverviewIllustration,
  Pythagorean345: Pythagorean345Illustration,
  Triangle406080A: Triangle406080StyleA,
  Triangle406080B: Triangle406080StyleB,
  Triangle406080C: Triangle406080StyleC,
};
