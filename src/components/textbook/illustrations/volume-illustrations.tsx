'use client';

interface VolumeIllustrationProps {
  className?: string;
}

// ============================================================================
// Rett prisme med grunnflate og høyde
// ============================================================================

export function PrismVolumeIllustration({ className }: VolumeIllustrationProps) {
  // Enkel rektangulær prisme (boks) i isometrisk perspektiv
  const ox = 60, oy = 160;
  const w = 140, h = 100, d = 50;
  // Isometrisk forskyvning
  const dx = d * 0.7, dy = d * 0.5;

  // Hjørner
  const frontBL = { x: ox, y: oy };
  const frontBR = { x: ox + w, y: oy };
  const frontTL = { x: ox, y: oy - h };
  const frontTR = { x: ox + w, y: oy - h };
  const backTL = { x: ox + dx, y: oy - h - dy };
  const backTR = { x: ox + w + dx, y: oy - h - dy };
  const backBR = { x: ox + w + dx, y: oy - dy };

  return (
    <svg role="img" viewBox="0 0 300 220" className={className} aria-label="Rett prisme med grunnflate G og høyde h">
      {/* Bakre kanter (stiplet) */}
      <line x1={ox + dx} y1={oy - dy} x2={ox + dx} y2={oy - h - dy}
        stroke="#000" strokeWidth="1" strokeDasharray="5,4" />
      <line x1={ox + dx} y1={oy - dy} x2={ox + w + dx} y2={oy - dy}
        stroke="#000" strokeWidth="1" strokeDasharray="5,4" />
      <line x1={ox + dx} y1={oy - dy} x2={ox} y2={oy}
        stroke="#000" strokeWidth="1" strokeDasharray="5,4" />

      {/* Synlige kanter */}
      {/* Frontflate */}
      <line x1={frontBL.x} y1={frontBL.y} x2={frontBR.x} y2={frontBR.y} stroke="#000" strokeWidth="2" />
      <line x1={frontBL.x} y1={frontBL.y} x2={frontTL.x} y2={frontTL.y} stroke="#000" strokeWidth="2" />
      <line x1={frontBR.x} y1={frontBR.y} x2={frontTR.x} y2={frontTR.y} stroke="#000" strokeWidth="2" />
      <line x1={frontTL.x} y1={frontTL.y} x2={frontTR.x} y2={frontTR.y} stroke="#000" strokeWidth="2" />
      {/* Topp */}
      <line x1={frontTL.x} y1={frontTL.y} x2={backTL.x} y2={backTL.y} stroke="#000" strokeWidth="2" />
      <line x1={frontTR.x} y1={frontTR.y} x2={backTR.x} y2={backTR.y} stroke="#000" strokeWidth="2" />
      <line x1={backTL.x} y1={backTL.y} x2={backTR.x} y2={backTR.y} stroke="#000" strokeWidth="2" />
      {/* Høyre side */}
      <line x1={frontBR.x} y1={frontBR.y} x2={backBR.x} y2={backBR.y} stroke="#000" strokeWidth="2" />
      <line x1={backTR.x} y1={backTR.y} x2={backBR.x} y2={backBR.y} stroke="#000" strokeWidth="2" />

      {/* h label (venstre) */}
      <line x1={ox - 15} y1={oy} x2={ox - 15} y2={oy - h}
        stroke="#000" strokeWidth="1" markerStart="url(#arrowDown)" markerEnd="url(#arrowUp)" />
      <text x={ox - 25} y={oy - h / 2 + 5} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">h</text>

      {/* G label (grunnflate) */}
      <text x={ox + w / 2} y={oy + 22} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">G</text>

      {/* Formel */}
      <text x={150} y={205} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">
        V = G · h
      </text>
    </svg>
  );
}

// ============================================================================
// Sylinder: V = pi * r^2 * h
// ============================================================================

export function CylinderVolumeIllustration({ className }: VolumeIllustrationProps) {
  const cx = 150, topY = 45, botY = 155, r = 65, ry = 18;

  return (
    <svg role="img" viewBox="0 0 300 230" className={className} aria-label="Sylinder med radius r og høyde h">
      {/* Bakre halvdel av bunn-ellipsen (stiplet) */}
      <ellipse cx={cx} cy={botY} rx={r} ry={ry} fill="none"
        stroke="#000" strokeWidth="1" strokeDasharray="5,4" />

      {/* Sidekanter */}
      <line x1={cx - r} y1={topY} x2={cx - r} y2={botY} stroke="#000" strokeWidth="2" />
      <line x1={cx + r} y1={topY} x2={cx + r} y2={botY} stroke="#000" strokeWidth="2" />

      {/* Topp-ellipse (hel) */}
      <ellipse cx={cx} cy={topY} rx={r} ry={ry} fill="none" stroke="#000" strokeWidth="2" />

      {/* Bunn-ellipse (fremre halvdel, hel) */}
      <path d={`M ${cx - r} ${botY} A ${r} ${ry} 0 0 0 ${cx + r} ${botY}`}
        fill="none" stroke="#000" strokeWidth="2" />

      {/* Radius-linje (topp) */}
      <line x1={cx} y1={topY} x2={cx + r} y2={topY} stroke="#000" strokeWidth="1.5" />
      <circle cx={cx} cy={topY} r="2" fill="#000" />

      {/* r label */}
      <text x={cx + r / 2} y={topY - 8} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">r</text>

      {/* h label (høyre) */}
      <text x={cx + r + 18} y={(topY + botY) / 2 + 5} fontSize="15" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Math, serif" fontStyle="italic">h</text>

      {/* Formel */}
      <text x={cx} y={botY + 42} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        V = {'π'}r²h
      </text>
    </svg>
  );
}

// ============================================================================
// Kjegle: V = (1/3) * pi * r^2 * h
// ============================================================================

export function ConeVolumeIllustration({ className }: VolumeIllustrationProps) {
  const cx = 150, topY = 35, botY = 165, r = 65, ry = 18;

  return (
    <svg role="img" viewBox="0 0 300 240" className={className} aria-label="Kjegle med radius r og høyde h">
      {/* Bakre halvdel av bunn-ellipsen (stiplet) */}
      <path d={`M ${cx - r} ${botY} A ${r} ${ry} 0 0 1 ${cx + r} ${botY}`}
        fill="none" stroke="#000" strokeWidth="1" strokeDasharray="5,4" />

      {/* Sidekanter til toppen */}
      <line x1={cx - r} y1={botY} x2={cx} y2={topY} stroke="#000" strokeWidth="2" />
      <line x1={cx + r} y1={botY} x2={cx} y2={topY} stroke="#000" strokeWidth="2" />

      {/* Bunn-ellipse (fremre halvdel) */}
      <path d={`M ${cx - r} ${botY} A ${r} ${ry} 0 0 0 ${cx + r} ${botY}`}
        fill="none" stroke="#000" strokeWidth="2" />

      {/* Toppen */}
      <circle cx={cx} cy={topY} r="2" fill="#000" />

      {/* Høyde (stiplet) */}
      <line x1={cx} y1={topY} x2={cx} y2={botY}
        stroke="#000" strokeWidth="1.5" strokeDasharray="6,4" />

      {/* Radius-linje (bunn) */}
      <line x1={cx} y1={botY} x2={cx + r} y2={botY}
        stroke="#000" strokeWidth="1.5" />
      <circle cx={cx} cy={botY} r="2" fill="#000" />

      {/* r label */}
      <text x={cx + r / 2} y={botY + 18} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">r</text>

      {/* h label */}
      <text x={cx + 14} y={(topY + botY) / 2 + 5} fontSize="15" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Math, serif" fontStyle="italic">h</text>

      {/* Formel */}
      <text x={cx} y={botY + 48} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        V = ⅓{'π'}r²h
      </text>
    </svg>
  );
}

// ============================================================================
// Pyramide: V = (1/3) * G * h
// ============================================================================

export function PyramidVolumeIllustration({ className }: VolumeIllustrationProps) {
  const cx = 150, topY = 30;
  // Grunnflate-hjørner (firkantet base i perspektiv)
  const bl = { x: 70, y: 170 };
  const br = { x: 230, y: 170 };
  const tr = { x: 210, y: 125 };
  const tl = { x: 90, y: 125 };

  return (
    <svg role="img" viewBox="0 0 300 230" className={className} aria-label="Pyramide med grunnflate G og høyde h">
      {/* Bakre kanter (stiplet) */}
      <line x1={tl.x} y1={tl.y} x2={cx} y2={topY}
        stroke="#000" strokeWidth="1" strokeDasharray="5,4" />
      <line x1={tl.x} y1={tl.y} x2={tr.x} y2={tr.y}
        stroke="#000" strokeWidth="1" strokeDasharray="5,4" />
      <line x1={tl.x} y1={tl.y} x2={bl.x} y2={bl.y}
        stroke="#000" strokeWidth="1" strokeDasharray="5,4" />

      {/* Synlige kanter */}
      <line x1={bl.x} y1={bl.y} x2={br.x} y2={br.y} stroke="#000" strokeWidth="2" />
      <line x1={br.x} y1={br.y} x2={tr.x} y2={tr.y} stroke="#000" strokeWidth="2" />
      <line x1={bl.x} y1={bl.y} x2={cx} y2={topY} stroke="#000" strokeWidth="2" />
      <line x1={br.x} y1={br.y} x2={cx} y2={topY} stroke="#000" strokeWidth="2" />
      <line x1={tr.x} y1={tr.y} x2={cx} y2={topY} stroke="#000" strokeWidth="2" />

      {/* Toppen */}
      <circle cx={cx} cy={topY} r="2" fill="#000" />

      {/* Høyde (stiplet) — fra topp ned til grunnflatens sentrum */}
      {/* Grunnflatens sentrum i perspektiv */}
      <line x1={cx} y1={topY} x2={cx} y2={150}
        stroke="#000" strokeWidth="1.5" strokeDasharray="6,4" />

      {/* h label */}
      <text x={cx + 14} y={(topY + 150) / 2 + 5} fontSize="15" fill="#000"
        textAnchor="start" fontFamily="KaTeX_Math, serif" fontStyle="italic">h</text>

      {/* G label */}
      <text x={cx} y={bl.y + 22} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">G</text>

      {/* Formel */}
      <text x={cx} y={bl.y + 45} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        V = ⅓ · G · h
      </text>
    </svg>
  );
}

// ============================================================================
// Kule: V = (4/3) * pi * r^3
// ============================================================================

export function SphereVolumeIllustration({ className }: VolumeIllustrationProps) {
  const cx = 150, cy = 110, r = 75;

  return (
    <svg role="img" viewBox="0 0 300 250" className={className} aria-label="Kule med radius r">
      {/* Kulen */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#000" strokeWidth="2" />

      {/* Stiplet ekvator-ellipse */}
      <ellipse cx={cx} cy={cy} rx={r} ry={20}
        fill="none" stroke="#000" strokeWidth="1" strokeDasharray="5,4" />

      {/* Senterpunkt */}
      <circle cx={cx} cy={cy} r="2.5" fill="#000" />

      {/* Radius-linje */}
      <line x1={cx} y1={cy} x2={cx + r} y2={cy}
        stroke="#000" strokeWidth="1.5" />

      {/* r label */}
      <text x={cx + r / 2} y={cy - 8} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">r</text>

      {/* Formel */}
      <text x={cx} y={cy + r + 38} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">
        V = ⁴⁄₃{'π'}r³
      </text>
    </svg>
  );
}
