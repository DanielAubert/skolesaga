'use client';

import React from 'react';

interface AngleIllustrationProps {
  className?: string;
}

// Hjelpefunksjon for å beregne punkt på sirkel
function pointOnCircle(cx: number, cy: number, radius: number, angleDegrees: number) {
  const angleRadians = (angleDegrees * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRadians),
    y: cy - radius * Math.sin(angleRadians), // Minus fordi y-aksen er invertert i SVG
  };
}

// Hjelpefunksjon for å lage en bue
function describeArc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number) {
  const start = pointOnCircle(cx, cy, radius, startAngle);
  const end = pointOnCircle(cx, cy, radius, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

// Illustrasjon av hva en vinkel er
export function AngleIntroIllustration({ className }: AngleIllustrationProps) {
  const cx = 100;
  const cy = 120;
  const lineLength = 80;
  const arcRadius = 30;
  const angle = 45;

  const endPoint = pointOnCircle(cx, cy, lineLength, angle);

  return (
    <svg viewBox="0 0 200 160" className={className} aria-label="Illustrasjon av en vinkel">
      {/* Bakgrunn */}
      <rect width="200" height="160" fill="#f8fafc" rx="8" />

      {/* Horisontal linje (ben 1) */}
      <line
        x1={cx}
        y1={cy}
        x2={cx + lineLength}
        y2={cy}
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Vinklet linje (ben 2) */}
      <line
        x1={cx}
        y1={cy}
        x2={endPoint.x}
        y2={endPoint.y}
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Vinkelbue */}
      <path
        d={describeArc(cx, cy, arcRadius, 0, angle)}
        stroke="#ef4444"
        strokeWidth="2"
        fill="none"
      />

      {/* Vinkelpunkt */}
      <circle cx={cx} cy={cy} r="4" fill="#1e40af" />

      {/* Vinkelmerke */}
      <text x={cx + 40} y={cy - 15} fontSize="14" fill="#ef4444" fontWeight="bold">
        {angle}°
      </text>

      {/* Etiketter */}
      <text x={cx - 5} y={cy + 20} fontSize="11" fill="#64748b">Toppunkt</text>
      <text x={cx + lineLength - 15} y={cy + 15} fontSize="11" fill="#3b82f6">Ben 1</text>
      <text x={endPoint.x + 5} y={endPoint.y - 5} fontSize="11" fill="#3b82f6">Ben 2</text>
    </svg>
  );
}

// Illustrasjon av vinkeltyper (spiss, rett, stump, flat)
export function AngleTypesIllustration({ className }: AngleIllustrationProps) {
  const angles = [
    { name: 'Spiss vinkel', angle: 45, color: '#22c55e' },
    { name: 'Rett vinkel', angle: 90, color: '#3b82f6' },
    { name: 'Stump vinkel', angle: 135, color: '#f59e0b' },
    { name: 'Flat vinkel', angle: 180, color: '#ef4444' },
  ];

  return (
    <svg viewBox="0 0 400 200" className={className} aria-label="De fire vinkeltypene">
      <rect width="400" height="200" fill="#f8fafc" rx="8" />

      {angles.map((item, index) => {
        const cx = 50 + index * 100;
        const cy = 100;
        const lineLength = 40;
        const arcRadius = 15;
        const endPoint = pointOnCircle(cx, cy, lineLength, item.angle);

        return (
          <g key={item.name}>
            {/* Horisontal linje */}
            <line
              x1={cx}
              y1={cy}
              x2={cx + lineLength}
              y2={cy}
              stroke={item.color}
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Vinklet linje */}
            <line
              x1={cx}
              y1={cy}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke={item.color}
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Vinkelbue eller rett vinkel-markør */}
            {item.angle === 90 ? (
              <path
                d={`M ${cx + 12} ${cy} L ${cx + 12} ${cy - 12} L ${cx} ${cy - 12}`}
                stroke={item.color}
                strokeWidth="1.5"
                fill="none"
              />
            ) : (
              <path
                d={describeArc(cx, cy, arcRadius, 0, item.angle)}
                stroke={item.color}
                strokeWidth="1.5"
                fill="none"
              />
            )}

            {/* Punkt */}
            <circle cx={cx} cy={cy} r="3" fill={item.color} />

            {/* Grader */}
            <text x={cx} y={cy + 25} fontSize="12" fill={item.color} textAnchor="middle" fontWeight="bold">
              {item.angle}°
            </text>

            {/* Navn */}
            <text x={cx} y={cy + 45} fontSize="10" fill="#64748b" textAnchor="middle">
              {item.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// Illustrasjon av en gradskive
export function ProtractorIllustration({ className }: AngleIllustrationProps) {
  const cx = 150;
  const cy = 130;
  const radius = 100;

  // Generer gradmerker
  const markers = [];
  for (let deg = 0; deg <= 180; deg += 10) {
    const point = pointOnCircle(cx, cy, radius, deg);
    const innerPoint = pointOnCircle(cx, cy, radius - (deg % 30 === 0 ? 15 : 8), deg);
    const labelPoint = pointOnCircle(cx, cy, radius + 15, deg);

    markers.push(
      <g key={deg}>
        <line
          x1={innerPoint.x}
          y1={innerPoint.y}
          x2={point.x}
          y2={point.y}
          stroke="#64748b"
          strokeWidth={deg % 30 === 0 ? 1.5 : 0.8}
        />
        {deg % 30 === 0 && (
          <text
            x={labelPoint.x}
            y={labelPoint.y}
            fontSize="10"
            fill="#374151"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {deg}°
          </text>
        )}
      </g>
    );
  }

  // Eksempelvinkel på 60 grader
  const exampleAngle = 60;
  const endPoint = pointOnCircle(cx, cy, radius - 20, exampleAngle);

  return (
    <svg viewBox="0 0 300 180" className={className} aria-label="Gradskive med eksempelvinkel">
      <rect width="300" height="180" fill="#f8fafc" rx="8" />

      {/* Halvsirkel */}
      <path
        d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
        stroke="#cbd5e1"
        strokeWidth="2"
        fill="#e2e8f0"
        fillOpacity="0.5"
      />

      {/* Grunnlinje */}
      <line
        x1={cx - radius}
        y1={cy}
        x2={cx + radius}
        y2={cy}
        stroke="#64748b"
        strokeWidth="2"
      />

      {/* Gradmerker */}
      {markers}

      {/* Midtpunkt */}
      <circle cx={cx} cy={cy} r="4" fill="#1e40af" />

      {/* Eksempelvinkel - linjer */}
      <line
        x1={cx}
        y1={cy}
        x2={cx + 70}
        y2={cy}
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1={cx}
        y1={cy}
        x2={endPoint.x}
        y2={endPoint.y}
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Vinkelbue */}
      <path
        d={describeArc(cx, cy, 25, 0, exampleAngle)}
        stroke="#ef4444"
        strokeWidth="2"
        fill="none"
      />

      {/* Vinkelverdi */}
      <text x={cx + 35} y={cy - 20} fontSize="14" fill="#ef4444" fontWeight="bold">
        60°
      </text>
    </svg>
  );
}

// Illustrasjon av supplementvinkler (sum = 180°)
export function SupplementaryAnglesIllustration({ className }: AngleIllustrationProps) {
  const cx = 150;
  const cy = 100;
  const lineLength = 80;
  const angle1 = 60;

  const point1 = pointOnCircle(cx, cy, lineLength, angle1);

  return (
    <svg viewBox="0 0 300 150" className={className} aria-label="Supplementvinkler - summen er 180 grader">
      <rect width="300" height="150" fill="#f8fafc" rx="8" />

      {/* Grunnlinje */}
      <line
        x1={cx - lineLength}
        y1={cy}
        x2={cx + lineLength}
        y2={cy}
        stroke="#64748b"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Vinklet linje */}
      <line
        x1={cx}
        y1={cy}
        x2={point1.x}
        y2={point1.y}
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Vinkel 1 (60°) */}
      <path
        d={describeArc(cx, cy, 25, 0, angle1)}
        stroke="#22c55e"
        strokeWidth="2"
        fill="#22c55e"
        fillOpacity="0.2"
      />
      <text x={cx + 35} y={cy - 15} fontSize="12" fill="#22c55e" fontWeight="bold">
        60°
      </text>

      {/* Vinkel 2 (120°) */}
      <path
        d={describeArc(cx, cy, 35, angle1, 180)}
        stroke="#f59e0b"
        strokeWidth="2"
        fill="#f59e0b"
        fillOpacity="0.2"
      />
      <text x={cx - 45} y={cy - 25} fontSize="12" fill="#f59e0b" fontWeight="bold">
        120°
      </text>

      {/* Midtpunkt */}
      <circle cx={cx} cy={cy} r="4" fill="#1e40af" />

      {/* Forklaring */}
      <text x={150} y={135} fontSize="12" fill="#374151" textAnchor="middle" fontWeight="bold">
        60° + 120° = 180° (supplementvinkler)
      </text>
    </svg>
  );
}

// Illustrasjon av komplementvinkler (sum = 90°)
export function ComplementaryAnglesIllustration({ className }: AngleIllustrationProps) {
  const cx = 120;
  const cy = 110;
  const lineLength = 70;
  const angle1 = 30;

  const point1 = pointOnCircle(cx, cy, lineLength, angle1);
  const point2 = pointOnCircle(cx, cy, lineLength, 90);

  return (
    <svg viewBox="0 0 250 150" className={className} aria-label="Komplementvinkler - summen er 90 grader">
      <rect width="250" height="150" fill="#f8fafc" rx="8" />

      {/* Horisontal linje */}
      <line
        x1={cx}
        y1={cy}
        x2={cx + lineLength}
        y2={cy}
        stroke="#64748b"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Vertikal linje (90°) */}
      <line
        x1={cx}
        y1={cy}
        x2={point2.x}
        y2={point2.y}
        stroke="#64748b"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Vinklet linje (30°) */}
      <line
        x1={cx}
        y1={cy}
        x2={point1.x}
        y2={point1.y}
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Rett vinkel-markør */}
      <path
        d={`M ${cx + 12} ${cy} L ${cx + 12} ${cy - 12} L ${cx} ${cy - 12}`}
        stroke="#64748b"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Vinkel 1 (30°) */}
      <path
        d={describeArc(cx, cy, 25, 0, angle1)}
        stroke="#22c55e"
        strokeWidth="2"
        fill="#22c55e"
        fillOpacity="0.2"
      />
      <text x={cx + 35} y={cy - 8} fontSize="11" fill="#22c55e" fontWeight="bold">
        30°
      </text>

      {/* Vinkel 2 (60°) */}
      <path
        d={describeArc(cx, cy, 35, angle1, 90)}
        stroke="#8b5cf6"
        strokeWidth="2"
        fill="#8b5cf6"
        fillOpacity="0.2"
      />
      <text x={cx + 20} y={cy - 35} fontSize="11" fill="#8b5cf6" fontWeight="bold">
        60°
      </text>

      {/* Midtpunkt */}
      <circle cx={cx} cy={cy} r="4" fill="#1e40af" />

      {/* Forklaring */}
      <text x={125} y={138} fontSize="11" fill="#374151" textAnchor="middle" fontWeight="bold">
        30° + 60° = 90° (komplementvinkler)
      </text>
    </svg>
  );
}

// Illustrasjon av toppvinkler
export function VerticalAnglesIllustration({ className }: AngleIllustrationProps) {
  const cx = 150;
  const cy = 100;
  const lineLength = 70;
  const angle = 50;

  const point1 = pointOnCircle(cx, cy, lineLength, angle);
  const point2 = pointOnCircle(cx, cy, lineLength, angle + 180);
  const point3 = pointOnCircle(cx, cy, lineLength, 180 - angle);
  const point4 = pointOnCircle(cx, cy, lineLength, -angle);

  return (
    <svg viewBox="0 0 300 200" className={className} aria-label="Toppvinkler er like store">
      <rect width="300" height="200" fill="#f8fafc" rx="8" />

      {/* Linje 1 */}
      <line
        x1={point2.x}
        y1={point2.y}
        x2={point1.x}
        y2={point1.y}
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Linje 2 */}
      <line
        x1={point4.x}
        y1={point4.y}
        x2={point3.x}
        y2={point3.y}
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Vinkel A (øverst høyre) */}
      <path
        d={describeArc(cx, cy, 20, angle, 180 - angle)}
        stroke="#22c55e"
        strokeWidth="2"
        fill="#22c55e"
        fillOpacity="0.3"
      />

      {/* Vinkel A' (nederst venstre - toppvinkel) */}
      <path
        d={describeArc(cx, cy, 20, angle + 180, 360 - angle)}
        stroke="#22c55e"
        strokeWidth="2"
        fill="#22c55e"
        fillOpacity="0.3"
      />

      {/* Vinkel B (øverst venstre) */}
      <path
        d={describeArc(cx, cy, 30, 180 - angle, 180 + angle)}
        stroke="#f59e0b"
        strokeWidth="2"
        fill="#f59e0b"
        fillOpacity="0.3"
      />

      {/* Vinkel B' (nederst høyre - toppvinkel) */}
      <path
        d={describeArc(cx, cy, 30, -angle, angle)}
        stroke="#f59e0b"
        strokeWidth="2"
        fill="#f59e0b"
        fillOpacity="0.3"
      />

      {/* Midtpunkt */}
      <circle cx={cx} cy={cy} r="4" fill="#1e40af" />

      {/* Etiketter */}
      <text x={cx + 5} y={cy - 30} fontSize="14" fill="#22c55e" fontWeight="bold">A</text>
      <text x={cx - 15} y={cy + 40} fontSize="14" fill="#22c55e" fontWeight="bold">A</text>
      <text x={cx - 35} y={cy - 15} fontSize="14" fill="#f59e0b" fontWeight="bold">B</text>
      <text x={cx + 25} y={cy + 25} fontSize="14" fill="#f59e0b" fontWeight="bold">B</text>

      {/* Forklaring */}
      <text x={150} y={180} fontSize="11" fill="#374151" textAnchor="middle">
        <tspan fontWeight="bold">Toppvinkler er like store:</tspan>
      </text>
      <text x={150} y={194} fontSize="11" fill="#374151" textAnchor="middle">
        Vinkel A = Vinkel A, Vinkel B = Vinkel B
      </text>
    </svg>
  );
}

// Oversikt over alle vinkeltyper
export function AngleTypesOverviewIllustration({ className }: AngleIllustrationProps) {
  return (
    <svg viewBox="0 0 400 280" className={className} aria-label="Oversikt over vinkeltyper">
      <rect width="400" height="280" fill="#f8fafc" rx="8" />

      {/* Tittel */}
      <text x={200} y={25} fontSize="14" fill="#1e293b" textAnchor="middle" fontWeight="bold">
        Oversikt over vinkeltyper
      </text>

      {/* Tabell-lignende layout */}
      {[
        { name: 'Spiss vinkel', range: '0° - 90°', angle: 45, color: '#22c55e', y: 60 },
        { name: 'Rett vinkel', range: '= 90°', angle: 90, color: '#3b82f6', y: 115 },
        { name: 'Stump vinkel', range: '90° - 180°', angle: 135, color: '#f59e0b', y: 170 },
        { name: 'Flat vinkel', range: '= 180°', angle: 180, color: '#ef4444', y: 225 },
      ].map((item) => {
        const cx = 80;
        const cy = item.y;
        const lineLength = 40;
        const endPoint = pointOnCircle(cx, cy, lineLength, item.angle);

        return (
          <g key={item.name}>
            {/* Horisontal linje */}
            <line
              x1={cx}
              y1={cy}
              x2={cx + lineLength}
              y2={cy}
              stroke={item.color}
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Vinklet linje */}
            <line
              x1={cx}
              y1={cy}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke={item.color}
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Vinkelbue eller rett vinkel-markør */}
            {item.angle === 90 ? (
              <path
                d={`M ${cx + 10} ${cy} L ${cx + 10} ${cy - 10} L ${cx} ${cy - 10}`}
                stroke={item.color}
                strokeWidth="1.5"
                fill="none"
              />
            ) : item.angle < 180 ? (
              <path
                d={describeArc(cx, cy, 15, 0, item.angle)}
                stroke={item.color}
                strokeWidth="1.5"
                fill="none"
              />
            ) : null}

            {/* Punkt */}
            <circle cx={cx} cy={cy} r="3" fill={item.color} />

            {/* Navn */}
            <text x={150} y={cy + 5} fontSize="13" fill="#374151" fontWeight="bold">
              {item.name}
            </text>

            {/* Range */}
            <text x={280} y={cy + 5} fontSize="12" fill={item.color} fontWeight="bold">
              {item.range}
            </text>

            {/* Skillelinje */}
            {item.y < 225 && (
              <line x1={30} y1={item.y + 25} x2={370} y2={item.y + 25} stroke="#e2e8f0" strokeWidth="1" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

// Eksportere alle illustrasjoner som én samling
export const AngleIllustrations = {
  Intro: AngleIntroIllustration,
  Types: AngleTypesIllustration,
  Protractor: ProtractorIllustration,
  Supplementary: SupplementaryAnglesIllustration,
  Complementary: ComplementaryAnglesIllustration,
  Vertical: VerticalAnglesIllustration,
  Overview: AngleTypesOverviewIllustration,
};
