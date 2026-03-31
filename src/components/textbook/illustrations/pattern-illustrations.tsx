'use client';

interface PatternIllustrationProps {
  className?: string;
}

// ============================================================================
// Trekant-tall T1–T4 som prikk-mønstre
// ============================================================================

export function TriangularNumbersIllustration({ className }: PatternIllustrationProps) {
  const r = 6, gap = 18;
  const startX = 20;

  // Tegn trekant-tall Tn: n rader med 1, 2, ..., n prikker
  function triangleGroup(n: number, offsetX: number) {
    const dots: { x: number; y: number }[] = [];
    for (let row = 0; row < n; row++) {
      for (let col = 0; col <= row; col++) {
        const x = offsetX + col * gap - (row * gap) / 2;
        const y = 30 + row * gap;
        dots.push({ x, y });
      }
    }
    const totalDots = (n * (n + 1)) / 2;
    return { dots, totalDots };
  }

  const groups = [1, 2, 3, 4].map((n, i) => {
    const ox = startX + i * 80 + 30;
    const { dots, totalDots } = triangleGroup(n, ox);
    return { n, dots, totalDots, cx: ox };
  });

  return (
    <svg viewBox="0 0 360 130" className={className} aria-label="Trekanttall T1 til T4 som prikkemønstre">
      {groups.map(g => (
        <g key={g.n}>
          {g.dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={r} fill="#000" />
          ))}
          {/* Label Tn = antall */}
          <text x={g.cx} y={105} fontSize="12" fill="#000"
            textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">
            T{g.n}
          </text>
          <text x={g.cx} y={120} fontSize="12" fill="#000"
            textAnchor="middle" fontFamily="KaTeX_Main, serif">
            = {g.totalDots}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ============================================================================
// Kvadrattall 1²–4² som prikk-rutenett
// ============================================================================

export function SquareNumbersIllustration({ className }: PatternIllustrationProps) {
  const r = 5, gap = 14;

  function squareGroup(n: number, offsetX: number) {
    const dots: { x: number; y: number }[] = [];
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        dots.push({ x: offsetX + col * gap, y: 25 + row * gap });
      }
    }
    return dots;
  }

  const groups = [1, 2, 3, 4].map((n, i) => {
    const ox = 20 + i * 85;
    const dots = squareGroup(n, ox);
    const cx = ox + ((n - 1) * gap) / 2;
    return { n, dots, cx };
  });

  return (
    <svg viewBox="0 0 380 120" className={className} aria-label="Kvadrattall 1 i andre til 4 i andre som prikkrutenett">
      {groups.map(g => (
        <g key={g.n}>
          {g.dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={r} fill="#000" />
          ))}
          <text x={g.cx} y={90} fontSize="12" fill="#000"
            textAnchor="middle" fontFamily="KaTeX_Main, serif">
            {g.n}² = {g.n * g.n}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ============================================================================
// Trappetall som prikk-trapper
// ============================================================================

export function StaircaseNumbersIllustration({ className }: PatternIllustrationProps) {
  const r = 5, gap = 14;

  // Trappetall: 1, 3, 6, 10 (= trekanttall, men som trapper)
  function staircaseGroup(n: number, offsetX: number) {
    const dots: { x: number; y: number }[] = [];
    const maxY = n * gap;
    for (let col = 0; col < n; col++) {
      const colHeight = col + 1;
      for (let row = 0; row < colHeight; row++) {
        dots.push({
          x: offsetX + col * gap,
          y: 20 + maxY - (row + 1) * gap + gap,
        });
      }
    }
    const total = (n * (n + 1)) / 2;
    return { dots, total };
  }

  const groups = [1, 2, 3, 4].map((n, i) => {
    const ox = 20 + i * 90;
    const { dots, total } = staircaseGroup(n, ox);
    const cx = ox + ((n - 1) * gap) / 2;
    return { n, dots, total, cx };
  });

  return (
    <svg viewBox="0 0 400 120" className={className} aria-label="Trappetall som prikktrapper">
      {groups.map(g => (
        <g key={g.n}>
          {g.dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={r} fill="#000" />
          ))}
          <text x={g.cx} y={100} fontSize="12" fill="#000"
            textAnchor="middle" fontFamily="KaTeX_Main, serif">
            {g.total}
          </text>
        </g>
      ))}
    </svg>
  );
}
