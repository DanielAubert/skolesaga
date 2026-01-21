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

// Eksportere alle illustrasjoner
export const TriangleIllustrations = {
  AngleSum: TriangleAngleSumIllustration,
  Equilateral: EquilateralTriangleIllustration,
  Isosceles: IsoscelesTriangleIllustration,
  Right: RightTriangleIllustration,
  Overview: TriangleTypesOverviewIllustration,
};
