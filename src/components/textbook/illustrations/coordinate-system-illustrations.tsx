'use client';

import React from 'react';

interface CoordinateIllustrationProps {
  className?: string;
}

// ============================================================================
// Koordinatsystem med de fire kvadrantene
// ============================================================================

export function QuadrantsIllustration({ className }: CoordinateIllustrationProps) {
  const width = 340;
  const height = 320;
  const centerX = width / 2;
  const centerY = height / 2;
  const axisLength = 130;
  const gridSize = 32;

  // Genererer grid-linjer
  const gridLines = [];
  for (let i = -4; i <= 4; i++) {
    if (i !== 0) {
      // Vertikale linjer
      gridLines.push(
        <line
          key={`v${i}`}
          x1={centerX + i * gridSize}
          y1={centerY - axisLength}
          x2={centerX + i * gridSize}
          y2={centerY + axisLength}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      );
      // Horisontale linjer
      gridLines.push(
        <line
          key={`h${i}`}
          x1={centerX - axisLength}
          y1={centerY + i * gridSize}
          x2={centerX + axisLength}
          y2={centerY + i * gridSize}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      );
    }
  }

  // Eksempelpunkter i hver kvadrant (alle innenfor grid-området)
  const points = [
    { x: 2, y: 2, color: '#16a34a', labelOffset: { x: 8, y: -8 } },
    { x: -2, y: 2, color: '#2563eb', labelOffset: { x: -48, y: -8 } },
    { x: -2, y: -2, color: '#ca8a04', labelOffset: { x: -48, y: 16 } },
    { x: 2, y: -2, color: '#dc2626', labelOffset: { x: 8, y: 16 } },
  ];

  const pointLabels = ['(2, 2)', '(−2, 2)', '(−2, −2)', '(2, −2)'];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} aria-label="Koordinatsystem med fire kvadranter">
      {/* Bakgrunn */}
      <rect width={width} height={height} fill="#f8fafc" rx="8" />

      {/* Kvadrant-bakgrunner med svake farger */}
      <rect x={centerX} y={centerY - axisLength} width={axisLength} height={axisLength} fill="#dcfce7" fillOpacity="0.5" />
      <rect x={centerX - axisLength} y={centerY - axisLength} width={axisLength} height={axisLength} fill="#dbeafe" fillOpacity="0.5" />
      <rect x={centerX - axisLength} y={centerY} width={axisLength} height={axisLength} fill="#fef9c3" fillOpacity="0.5" />
      <rect x={centerX} y={centerY} width={axisLength} height={axisLength} fill="#fee2e2" fillOpacity="0.5" />

      {/* Grid-linjer */}
      {gridLines}

      {/* X-akse */}
      <line
        x1={centerX - axisLength - 10}
        y1={centerY}
        x2={centerX + axisLength + 10}
        y2={centerY}
        stroke="#1e293b"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      {/* Y-akse */}
      <line
        x1={centerX}
        y1={centerY + axisLength + 10}
        x2={centerX}
        y2={centerY - axisLength - 10}
        stroke="#1e293b"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      {/* Pilhodet */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1e293b" />
        </marker>
      </defs>

      {/* Akse-etiketter */}
      <text x={centerX + axisLength + 14} y={centerY + 5} fontSize="14" fontWeight="bold" fill="#1e293b">x</text>
      <text x={centerX + 6} y={centerY - axisLength - 12} fontSize="14" fontWeight="bold" fill="#1e293b">y</text>

      {/* Origo */}
      <circle cx={centerX} cy={centerY} r="3" fill="#1e293b" />
      <text x={centerX - 14} y={centerY + 16} fontSize="10" fill="#64748b">O</text>

      {/* Tall på aksene */}
      {[-4, -3, -2, -1, 1, 2, 3, 4].map((n) => (
        <React.Fragment key={n}>
          {/* X-akse tall */}
          <text
            x={centerX + n * gridSize}
            y={centerY + 16}
            fontSize="10"
            fill="#64748b"
            textAnchor="middle"
          >
            {n}
          </text>
          {/* Y-akse tall */}
          <text
            x={centerX - 10}
            y={centerY - n * gridSize + 3}
            fontSize="10"
            fill="#64748b"
            textAnchor="end"
          >
            {n}
          </text>
        </React.Fragment>
      ))}

      {/* Kvadrantnavn med fortegn - sentrert i hver kvadrant */}
      <g>
        {/* Kvadrant I */}
        <text x={centerX + 65} y={centerY - 70} fontSize="20" fontWeight="bold" fill="#16a34a" textAnchor="middle">I</text>
        <text x={centerX + 65} y={centerY - 50} fontSize="11" fill="#16a34a" textAnchor="middle">(+, +)</text>
      </g>
      <g>
        {/* Kvadrant II */}
        <text x={centerX - 65} y={centerY - 70} fontSize="20" fontWeight="bold" fill="#2563eb" textAnchor="middle">II</text>
        <text x={centerX - 65} y={centerY - 50} fontSize="11" fill="#2563eb" textAnchor="middle">(−, +)</text>
      </g>
      <g>
        {/* Kvadrant III */}
        <text x={centerX - 65} y={centerY + 60} fontSize="20" fontWeight="bold" fill="#ca8a04" textAnchor="middle">III</text>
        <text x={centerX - 65} y={centerY + 80} fontSize="11" fill="#ca8a04" textAnchor="middle">(−, −)</text>
      </g>
      <g>
        {/* Kvadrant IV */}
        <text x={centerX + 65} y={centerY + 60} fontSize="20" fontWeight="bold" fill="#dc2626" textAnchor="middle">IV</text>
        <text x={centerX + 65} y={centerY + 80} fontSize="11" fill="#dc2626" textAnchor="middle">(+, −)</text>
      </g>

      {/* Eksempelpunkter */}
      {points.map((p, i) => (
        <React.Fragment key={i}>
          <circle
            cx={centerX + p.x * gridSize}
            cy={centerY - p.y * gridSize}
            r="5"
            fill={p.color}
          />
          <text
            x={centerX + p.x * gridSize + p.labelOffset.x}
            y={centerY - p.y * gridSize + p.labelOffset.y}
            fontSize="10"
            fontWeight="600"
            fill={p.color}
          >
            {pointLabels[i]}
          </text>
        </React.Fragment>
      ))}
    </svg>
  );
}

// ============================================================================
// Koordinatsystem med punktene A, B, C, D fra eksempelet
// ============================================================================

export function PointsPlottingIllustration({ className }: CoordinateIllustrationProps) {
  const width = 360;
  const height = 300;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridSize = 28;
  const axisLength = 140;

  // Genererer grid-linjer
  const gridLines = [];
  for (let i = -5; i <= 5; i++) {
    if (i !== 0) {
      // Vertikale linjer
      gridLines.push(
        <line
          key={`v${i}`}
          x1={centerX + i * gridSize}
          y1={centerY - axisLength}
          x2={centerX + i * gridSize}
          y2={centerY + axisLength}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      );
      // Horisontale linjer
      gridLines.push(
        <line
          key={`h${i}`}
          x1={centerX - axisLength}
          y1={centerY + i * gridSize}
          x2={centerX + axisLength}
          y2={centerY + i * gridSize}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      );
    }
  }

  // Punktene fra eksempelet
  const points = [
    { x: 2, y: 3, name: 'A', color: '#16a34a' },   // Kvadrant I
    { x: -3, y: 1, name: 'B', color: '#2563eb' },  // Kvadrant II
    { x: -2, y: -4, name: 'C', color: '#ca8a04' }, // Kvadrant III
    { x: 4, y: -2, name: 'D', color: '#dc2626' },  // Kvadrant IV
  ];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} aria-label="Koordinatsystem med punktene A, B, C og D">
      {/* Bakgrunn */}
      <rect width={width} height={height} fill="#f8fafc" rx="8" />

      {/* Grid-linjer */}
      {gridLines}

      {/* X-akse */}
      <line
        x1={centerX - axisLength - 10}
        y1={centerY}
        x2={centerX + axisLength + 10}
        y2={centerY}
        stroke="#1e293b"
        strokeWidth="2"
        markerEnd="url(#arrowhead2)"
      />

      {/* Y-akse */}
      <line
        x1={centerX}
        y1={centerY + axisLength + 10}
        x2={centerX}
        y2={centerY - axisLength - 10}
        stroke="#1e293b"
        strokeWidth="2"
        markerEnd="url(#arrowhead2)"
      />

      {/* Pilhodet */}
      <defs>
        <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1e293b" />
        </marker>
      </defs>

      {/* Akse-etiketter */}
      <text x={centerX + axisLength + 15} y={centerY + 5} fontSize="14" fontWeight="bold" fill="#1e293b">x</text>
      <text x={centerX + 5} y={centerY - axisLength - 15} fontSize="14" fontWeight="bold" fill="#1e293b">y</text>

      {/* Origo */}
      <circle cx={centerX} cy={centerY} r="4" fill="#1e293b" />
      <text x={centerX - 15} y={centerY + 18} fontSize="12" fill="#64748b">O</text>

      {/* Tall på aksene */}
      {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map((n) => (
        <React.Fragment key={n}>
          {/* X-akse tall */}
          <text
            x={centerX + n * gridSize}
            y={centerY + 16}
            fontSize="10"
            fill="#64748b"
            textAnchor="middle"
          >
            {n}
          </text>
          {/* Y-akse tall */}
          <text
            x={centerX - 10}
            y={centerY - n * gridSize + 3}
            fontSize="10"
            fill="#64748b"
            textAnchor="end"
          >
            {n}
          </text>
        </React.Fragment>
      ))}

      {/* Stiplede linjer fra punktene til aksene */}
      {points.map((p, i) => (
        <React.Fragment key={`guides-${i}`}>
          {/* Vertikal stiplet linje til x-aksen */}
          <line
            x1={centerX + p.x * gridSize}
            y1={centerY - p.y * gridSize}
            x2={centerX + p.x * gridSize}
            y2={centerY}
            stroke={p.color}
            strokeWidth="1"
            strokeDasharray="4,4"
            strokeOpacity="0.5"
          />
          {/* Horisontal stiplet linje til y-aksen */}
          <line
            x1={centerX + p.x * gridSize}
            y1={centerY - p.y * gridSize}
            x2={centerX}
            y2={centerY - p.y * gridSize}
            stroke={p.color}
            strokeWidth="1"
            strokeDasharray="4,4"
            strokeOpacity="0.5"
          />
        </React.Fragment>
      ))}

      {/* Punktene */}
      {points.map((p, i) => (
        <React.Fragment key={i}>
          {/* Punktet */}
          <circle
            cx={centerX + p.x * gridSize}
            cy={centerY - p.y * gridSize}
            r="7"
            fill={p.color}
          />
          {/* Punktnavn */}
          <text
            x={centerX + p.x * gridSize}
            y={centerY - p.y * gridSize + 4}
            fontSize="10"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
          >
            {p.name}
          </text>
          {/* Koordinater */}
          <text
            x={centerX + p.x * gridSize + (p.x < 0 ? -12 : 12)}
            y={centerY - p.y * gridSize + (p.y > 0 ? -12 : 18)}
            fontSize="11"
            fontWeight="500"
            fill={p.color}
            textAnchor={p.x < 0 ? 'end' : 'start'}
          >
            ({p.x}, {p.y})
          </text>
        </React.Fragment>
      ))}
    </svg>
  );
}

// ============================================================================
// Enkelt koordinatsystem (uten punkter, for generell bruk)
// ============================================================================

export function BasicCoordinateSystemIllustration({ className }: CoordinateIllustrationProps) {
  const width = 320;
  const height = 280;
  const centerX = width / 2;
  const centerY = height / 2;
  const axisLength = 120;
  const gridSize = 30;

  // Genererer grid-linjer
  const gridLines = [];
  for (let i = -4; i <= 4; i++) {
    if (i !== 0) {
      gridLines.push(
        <line
          key={`v${i}`}
          x1={centerX + i * gridSize}
          y1={centerY - axisLength}
          x2={centerX + i * gridSize}
          y2={centerY + axisLength}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      );
      gridLines.push(
        <line
          key={`h${i}`}
          x1={centerX - axisLength}
          y1={centerY + i * gridSize}
          x2={centerX + axisLength}
          y2={centerY + i * gridSize}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      );
    }
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} aria-label="Koordinatsystem">
      {/* Bakgrunn */}
      <rect width={width} height={height} fill="#f8fafc" rx="8" />

      {/* Grid-linjer */}
      {gridLines}

      {/* X-akse */}
      <line
        x1={centerX - axisLength - 10}
        y1={centerY}
        x2={centerX + axisLength + 10}
        y2={centerY}
        stroke="#1e293b"
        strokeWidth="2"
        markerEnd="url(#arrowhead3)"
      />

      {/* Y-akse */}
      <line
        x1={centerX}
        y1={centerY + axisLength + 10}
        x2={centerX}
        y2={centerY - axisLength - 10}
        stroke="#1e293b"
        strokeWidth="2"
        markerEnd="url(#arrowhead3)"
      />

      {/* Pilhodet */}
      <defs>
        <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1e293b" />
        </marker>
      </defs>

      {/* Akse-etiketter */}
      <text x={centerX + axisLength + 15} y={centerY + 5} fontSize="14" fontWeight="bold" fill="#1e293b">x</text>
      <text x={centerX + 5} y={centerY - axisLength - 15} fontSize="14" fontWeight="bold" fill="#1e293b">y</text>

      {/* Origo */}
      <circle cx={centerX} cy={centerY} r="4" fill="#1e293b" />
      <text x={centerX - 15} y={centerY + 18} fontSize="12" fill="#64748b">O (0, 0)</text>

      {/* Merker på aksene med etiketter */}
      <text x={centerX - axisLength - 5} y={centerY + 5} fontSize="12" fill="#3b82f6" textAnchor="end">x-akse</text>
      <text x={centerX + 8} y={centerY - axisLength + 20} fontSize="12" fill="#3b82f6">y-akse</text>

      {/* Tall på aksene */}
      {[-4, -3, -2, -1, 1, 2, 3, 4].map((n) => (
        <React.Fragment key={n}>
          <line
            x1={centerX + n * gridSize}
            y1={centerY - 3}
            x2={centerX + n * gridSize}
            y2={centerY + 3}
            stroke="#1e293b"
            strokeWidth="1"
          />
          <line
            x1={centerX - 3}
            y1={centerY - n * gridSize}
            x2={centerX + 3}
            y2={centerY - n * gridSize}
            stroke="#1e293b"
            strokeWidth="1"
          />
          <text
            x={centerX + n * gridSize}
            y={centerY + 16}
            fontSize="10"
            fill="#64748b"
            textAnchor="middle"
          >
            {n}
          </text>
          <text
            x={centerX - 8}
            y={centerY - n * gridSize + 3}
            fontSize="10"
            fill="#64748b"
            textAnchor="end"
          >
            {n}
          </text>
        </React.Fragment>
      ))}
    </svg>
  );
}
