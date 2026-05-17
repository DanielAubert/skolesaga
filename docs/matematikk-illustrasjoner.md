# Matematikk-illustrasjoner (React SVG-komponenter)

## Oversikt

Illustrasjoner i læreboka er React-komponenter som rendrer SVG inline. De bruker KaTeX-fonter for at tall og variabler matcher resten av matteteksten.

## Regler

- **Sort/hvitt kun** — `stroke="#000"`, `fill="none"`, ingen farger
- **Font**: `fontFamily="KaTeX_Math, serif"` for tall/variabler (kursiv), `fontFamily="KaTeX_Main, serif"` for vanlig tekst (grader, enheter)
- **Ingen utregninger i SVG** — SVG rendrer superscript/subscript dårlig. Legg heller utregninger som en separat tekstblokk med LaTeX i kapitteldataen
- **aria-label** på `<svg>` for tilgjengelighet
- **className-prop** videresendes til `<svg>` for størrelse/responsivitet
- **Foretrukket stil**: Akademisk (Stil B) — buestreker for vinkler, hjørnelabels (*A*, *B*, *C*) utenfor hjørnene, sidelabels (*a*, *b*, *c*) langs sidene

## Filstruktur

```
src/components/textbook/illustrations/
├── angle-illustrations.tsx              # Vinkler (7 komponenter)
├── triangle-illustrations.tsx           # Trekanter (9 komponenter, inkl. hjelpefunksjoner)
├── coordinate-system-illustrations.tsx  # Koordinatsystem (3 komponenter)
├── function-graph-illustrations.tsx     # f(x) = x²−9 grafer (3 komponenter)
├── area-illustrations.tsx               # Arealformler (4 komponenter)
├── volume-illustrations.tsx             # Romfigurer/volum (5 komponenter)
├── linear-function-illustrations.tsx    # Lineære funksjoner (3 komponenter)
├── trigonometry-illustrations.tsx       # Trigonometri (2 komponenter)
├── fraction-illustrations.tsx           # Brøk og prosent (3 komponenter)
├── quadratic-identities-illustrations.tsx # Kvadratsetningene (3 komponenter)
├── similarity-illustrations.tsx         # Formlikhet og kongruens (4 komponenter)
├── statistics-illustrations.tsx         # Statistikk (3 komponenter)
├── exponential-illustrations.tsx        # Eksponentialfunksjoner (3 komponenter)
├── number-line-illustrations.tsx        # Tallinjer (2 komponenter)
├── vector-illustrations.tsx             # Vektorer (2 komponenter)
└── pattern-illustrations.tsx            # Figurtall (3 komponenter)
```

## Steg for å lage ny illustrasjon

### 1. Lag komponenten

Fil: `src/components/textbook/illustrations/<kategori>-illustrations.tsx`

Bruk hjelpefunksjonene i `triangle-illustrations.tsx` (se nedenfor).

### 2. Registrer i content-block-renderer

Fil: `src/components/textbook/content-block-renderer.tsx`

```tsx
// Legg til import
import { MinNyeIllustrasjon } from './illustrations/<kategori>-illustrations';

// Legg til i ILLUSTRATIONS-mappen
const ILLUSTRATIONS = {
  // ... eksisterende
  'min-nye-id': MinNyeIllustrasjon,
};
```

### 3. Bruk i kapitteldataen

Fil: `src/lib/data/chapters/<id>.json`

```json
{
  "id": "kapittel-illust-1",
  "type": "illustration",
  "illustrationId": "min-nye-id",
  "caption": "Valgfri bildetekst under figuren"
}
```

### 4. Regenerer og test

```bash
node scripts/combine-chapters.js   # Oppdater _all.json
# Restart dev-server (data caches i minnet)
```

Testside for rask forhåndsvisning uten restart: `src/app/test/illustrasjoner/page.tsx`

## Hjelpefunksjoner

Disse ligger i `triangle-illustrations.tsx` og brukes for nøyaktig geometri:

```tsx
type Point = { x: number; y: number };

/** Beregn nøyaktig trekant fra tre vinkler (sinusregelen) */
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

/** Posisjon langs vinkelbisektoren — for gradtall-labels inne i vinkelen */
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

/** Posisjon utenfor hjørnet — for vertex-labels (A, B, C) */
function outerPos(V: Point, P1: Point, P2: Point, dist: number): Point {
  const b = bisectorPos(V, P1, P2, 1);
  const dx = b.x - V.x, dy = b.y - V.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  return { x: V.x - dist * dx / len, y: V.y - dist * dy / len };
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
```

## Foretrukket stil: Akademisk (Stil B)

Trekant med buestreker, gradtall, hjørnelabels (*A*, *B*, *C*) og sidelabels (*a*, *b*, *c*).

```tsx
export function Triangle406080StyleB({ className }: { className?: string }) {
  const { A, B, C } = makeTriangle(40, 60, 80, 180, 45, 185);
  const arcR = 25;       // radius på vinkelbuer
  const labelR = 40;     // avstand for gradtall fra hjørne
  const centroid: Point = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };

  // Gradtall-posisjoner (langs bisektoren, inne i vinkelen)
  const lA = bisectorPos(A, B, C, labelR);
  const lB = bisectorPos(B, A, C, labelR);
  const lC = bisectorPos(C, A, B, labelR);

  // Hjørnelabel-posisjoner (utenfor trekanten)
  const vA = outerPos(A, B, C, 18);
  const vB = outerPos(B, A, C, 18);
  const vC = outerPos(C, A, B, 18);

  // Sidelabel-posisjoner (midtpunkt, forskjøvet utover)
  const sA = sideLabelPos(B, C, 16, centroid);  // side a = motstående vinkel A
  const sB = sideLabelPos(A, C, 16, centroid);  // side b = motstående vinkel B
  const sC = sideLabelPos(A, B, 16, centroid);  // side c = motstående vinkel C

  return (
    <svg viewBox="0 0 280 225" className={className}
      aria-label="Trekant ABC med vinkler 40, 60 og 80 grader">

      {/* Trekanten */}
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x.toFixed(1)},${C.y.toFixed(1)}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />

      {/* Vinkelbuer */}
      <path d={angleArcPath(A, B, C, arcR)} stroke="#000" strokeWidth="1.5" fill="none" />
      <path d={angleArcPath(B, A, C, arcR)} stroke="#000" strokeWidth="1.5" fill="none" />
      <path d={angleArcPath(C, A, B, arcR)} stroke="#000" strokeWidth="1.5" fill="none" />

      {/* Gradtall (KaTeX_Main for oppreist tekst med °) */}
      <text x={lA.x.toFixed(1)} y={(lA.y + 4).toFixed(1)} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">40°</text>
      <text x={lB.x.toFixed(1)} y={(lB.y + 4).toFixed(1)} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">60°</text>
      <text x={lC.x.toFixed(1)} y={(lC.y + 4).toFixed(1)} fontSize="12" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Main, serif">80°</text>

      {/* Hjørnelabels (KaTeX_Math kursiv) */}
      <text x={vA.x.toFixed(1)} y={(vA.y + 5).toFixed(1)} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">A</text>
      <text x={vB.x.toFixed(1)} y={(vB.y + 5).toFixed(1)} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">B</text>
      <text x={vC.x.toFixed(1)} y={(vC.y + 5).toFixed(1)} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">C</text>

      {/* Sidelabels (KaTeX_Math kursiv) */}
      <text x={sA.x.toFixed(1)} y={(sA.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">a</text>
      <text x={sB.x.toFixed(1)} y={(sB.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">b</text>
      <text x={sC.x.toFixed(1)} y={(sC.y + 5).toFixed(1)} fontSize="14" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">c</text>
    </svg>
  );
}
```

## SVG-referanse for vanlige matteelementer

### Tekst-typer

| Bruk | fontFamily | fontStyle | Eksempel |
|------|-----------|-----------|----------|
| Variabler, sidelengder | `KaTeX_Math, serif` | `italic` | *x*, *a*, *A* |
| Gradtall, enheter, tall | `KaTeX_Main, serif` | (normal) | 40°, cm, 5 |

### Vanlige SVG-elementer

```tsx
// Linje
<line x1={0} y1={0} x2={100} y2={100} stroke="#000" strokeWidth="2" />

// Sirkel
<circle cx={50} cy={50} r={30} fill="none" stroke="#000" strokeWidth="2" />

// Stiplet linje
<line x1={0} y1={50} x2={200} y2={50} stroke="#000" strokeWidth="1" strokeDasharray="5,5" />

// Pil (definer i <defs>)
<defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5"
    markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
  </marker>
</defs>
<line x1={20} y1={100} x2={180} y2={100} stroke="#000" markerEnd="url(#arrow)" />

// Rettvinkelsymbol (hjørne ved punkt P)
<path d={`M ${P.x+12} ${P.y} L ${P.x+12} ${P.y-12} L ${P.x} ${P.y-12}`}
  stroke="#000" strokeWidth="1.5" fill="none" />
```

## Eksempel: Pytagoras 3-4-5

```tsx
export function Pythagorean345Illustration({ className }: { className?: string }) {
  const scale = 28;
  const pad = 60;
  const A = { x: pad, y: pad + 4 * scale };
  const B = { x: pad + 3 * scale, y: pad + 4 * scale };
  const C = { x: pad, y: pad };
  const sq = 12;

  return (
    <svg viewBox="0 0 260 210" className={className}
      aria-label="Rettvinklet trekant med sider 3, 4 og 5">
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
        fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round"
      />
      <path
        d={`M ${A.x+sq} ${A.y} L ${A.x+sq} ${A.y-sq} L ${A.x} ${A.y-sq}`}
        stroke="#000" strokeWidth="1.5" fill="none"
      />
      <text x={(A.x+B.x)/2} y={A.y+20} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">3</text>
      <text x={A.x-18} y={(A.y+C.y)/2+5} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">4</text>
      <text x={(B.x+C.x)/2+14} y={(B.y+C.y)/2} fontSize="15" fill="#000"
        textAnchor="middle" fontFamily="KaTeX_Math, serif" fontStyle="italic">5</text>
    </svg>
  );
}
```

## Komplett register over illustrasjons-ID-er

Alle ID-er som kan brukes i `illustrationId` i kapitteldataen (JSON).

### Vinkler (`angle-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `angle-intro` | `AngleIntroIllustration` | Introduksjon til vinkler |
| `angle-types` | `AngleTypesIllustration` | Vinkeltyper |
| `protractor` | `ProtractorIllustration` | Gradskive |
| `supplementary-angles` | `SupplementaryAnglesIllustration` | Supplementvinkler |
| `complementary-angles` | `ComplementaryAnglesIllustration` | Komplementvinkler |
| `vertical-angles` | `VerticalAnglesIllustration` | Toppvinkler |
| `angle-types-overview` | `AngleTypesOverviewIllustration` | Oversikt vinkeltyper |

### Trekanter (`triangle-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `triangle-angle-sum` | `TriangleAngleSumIllustration` | Vinkelsummen i trekant = 180 |
| `triangle-equilateral` | `EquilateralTriangleIllustration` | Likesidet trekant |
| `triangle-isosceles` | `IsoscelesTriangleIllustration` | Likebeint trekant |
| `triangle-right` | `RightTriangleIllustration` | Rettvinklet trekant |
| `triangle-types-overview` | `TriangleTypesOverviewIllustration` | Oversikt trekanttyper |
| `pythagorean-345` | `Pythagorean345Illustration` | Pytagoras 3-4-5 |

### Koordinatsystem (`coordinate-system-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `coordinate-quadrants` | `QuadrantsIllustration` | Kvadranter |
| `coordinate-points-abcd` | `PointsPlottingIllustration` | Plotting av punkter |
| `coordinate-basic` | `BasicCoordinateSystemIllustration` | Grunnleggende koordinatsystem |

### Funksjonsgrafer (`function-graph-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `graph-x2-minus9-a` | `GraphX2Minus9StyleA` | f(x) = x²−9, minimal stil |
| `graph-x2-minus9-b` | `GraphX2Minus9StyleB` | f(x) = x²−9, akademisk stil |
| `graph-x2-minus9-c` | `GraphX2Minus9StyleC` | f(x) = x²−9, annotert stil |

### Arealformler (`area-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `area-rectangle` | `RectangleAreaIllustration` | Rektangel med A = l·b |
| `area-parallelogram` | `ParallelogramAreaIllustration` | Parallellogram med A = g·h |
| `area-trapezoid` | `TrapezoidAreaIllustration` | Trapes med A = (a+b)/2·h |
| `area-circle` | `CircleAreaIllustration` | Sirkel med A = πr² |

### Romfigurer og volum (`volume-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `volume-prism` | `PrismVolumeIllustration` | Rett prisme med V = G·h |
| `volume-cylinder` | `CylinderVolumeIllustration` | Sylinder med V = πr²h |
| `volume-cone` | `ConeVolumeIllustration` | Kjegle med V = ⅓πr²h |
| `volume-pyramid` | `PyramidVolumeIllustration` | Pyramide med V = ⅓G·h |
| `volume-sphere` | `SphereVolumeIllustration` | Kule med V = ⁴⁄₃πr³ |

### Lineære funksjoner (`linear-function-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `linear-function` | `LinearFunctionIllustration` | y = 2x+1 med stigningstall-trekant (Δx, Δy) |
| `parallel-lines` | `ParallelLinesIllustration` | To parallelle linjer (likt stigningstall) |
| `intersecting-lines` | `IntersectingLinesIllustration` | To linjer som krysser (likningssett) |

### Trigonometri (`trigonometry-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `trig-ratios` | `TrigRatiosIllustration` | Rettvinklet trekant med hosliggende/motstående/hypotenus |
| `unit-circle` | `UnitCircleIllustration` | Enhetssirkel med sin/cos avmerket |

### Brøk og prosent (`fraction-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `fraction-circle` | `FractionCircleIllustration` | Sirkel delt i 4, 3/4 skravert |
| `fraction-bar` | `FractionBarIllustration` | Rektangulær stolpe delt i 5, 3/5 skravert |
| `percent-bar` | `PercentBarIllustration` | 100%-stolpe med 65% skravert |

### Kvadratsetningene (`quadratic-identities-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `quadratic-identity-1` | `FirstQuadraticIdentityIllustration` | (a+b)² = a²+2ab+b² som areal-rektangler |
| `quadratic-identity-2` | `SecondQuadraticIdentityIllustration` | (a−b)² = a²−2ab+b² geometrisk |
| `quadratic-identity-3` | `ThirdQuadraticIdentityIllustration` | (a+b)(a−b) = a²−b² geometrisk |

### Formlikhet og kongruens (`similarity-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `similar-triangles` | `SimilarTrianglesIllustration` | To formlike trekanter med forholdstall k=2 |
| `congruence-sss` | `CongruenceSSS` | SSS-kongruens |
| `congruence-sas` | `CongruenceSAS` | SAS-kongruens |
| `congruence-asa` | `CongruenceASA` | ASA-kongruens |

### Statistikk (`statistics-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `boxplot` | `BoxPlotIllustration` | Boksplott med median, kvartiler, min/max |
| `histogram` | `HistogramIllustration` | Histogram med 6 stolper og frekvensakser |
| `pie-chart` | `PieChartIllustration` | Sektordiagram med 4 sektorer |

### Eksponentialfunksjoner (`exponential-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `exponential-growth` | `ExponentialGrowthIllustration` | f(x) = 2^x med nøkkelpunkter |
| `exponential-decay` | `ExponentialDecayIllustration` | f(x) = (½)^x |
| `linear-vs-exponential` | `LinearVsExponentialIllustration` | Lineær og eksponentiell vekst i samme system |

### Tallinjer (`number-line-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `number-line-inequality` | `NumberLineInequalityIllustration` | x > 3 (åpen sirkel) og x ≤ −1 (lukket) |
| `number-line-intervals` | `NumberLineIntervalsIllustration` | Markert intervall [a, b] |

### Vektorer (`vector-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `vector-basic` | `VectorBasicIllustration` | Vektor fra A til B med komponentform [4, 3] |
| `vector-addition` | `VectorAdditionIllustration` | Vektoraddisjon med parallelogramregelen |

### Figurtall (`pattern-illustrations.tsx`)

| ID | Komponent | Beskrivelse |
|---|---|---|
| `triangular-numbers` | `TriangularNumbersIllustration` | Trekanttall T1–T4 som prikk-mønstre |
| `square-numbers` | `SquareNumbersIllustration` | Kvadrattall 1²–4² som prikk-rutenett |
| `staircase-numbers` | `StaircaseNumbersIllustration` | Trappetall som prikk-trapper |

## Testside

Alle illustrasjoner kan forhåndsvises på: `/test/illustrasjoner`

## Graf-hjelpefunksjoner

For alle graf-illustrasjoner (lineær, eksponentiell, funksjonsgrafer) finnes felles hjelpefunksjoner:

```tsx
// Definert i function-graph-illustrations.tsx, duplisert i andre graf-filer:
interface GraphConfig {
  width: number; height: number;
  padL: number; padR: number; padT: number; padB: number;
  xMin: number; xMax: number; yMin: number; yMax: number;
}

function graphHelpers(cfg: GraphConfig)  // → { tx, ty, ox, oy }
function curvePath(f, xMin, xMax, tx, ty, steps?)  // → SVG path string
function Axes({ cfg, tx, ty, ox, oy })   // x/y-akser med pilspisser
function TickMarks({ cfg, tx, ty, ox, oy })  // Tick-merker med tall
function GridLines({ cfg, tx, ty })       // Rutenett
```
