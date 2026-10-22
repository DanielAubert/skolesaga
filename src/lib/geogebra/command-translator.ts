/**
 * Translates Norwegian GeoGebra commands to English
 * GeoGebra's evalCommand API only accepts English commands,
 * but we want to use Norwegian commands in our source code.
 */

// Map of Norwegian command names to English
const NORWEGIAN_TO_ENGLISH: Record<string, string> = {
  // Geometry
  'Mangekant': 'Polygon',
  'Sirkel': 'Circle',
  'Sirkelsektor': 'CircularSector',
  'Sirkelbue': 'CircularArc',
  'Linje': 'Line',
  'Linjestykke': 'Segment',
  'Stråle': 'Ray',
  'Vektor': 'Vector',
  'Midtpunkt': 'Midpoint',
  'Vinkel': 'Angle',
  'Vinkelhalveringslinje': 'AngleBisector',
  // 'Normal' (norsk navn på PerpendicularLine) oversettes IKKE her: på engelsk er Normal(μ, σ, x, false)
  // normalfordelingen, og 22.10.2026 ble Normal(0, 1, x, false) i s1-6-3/s2-4-3/s2-5-2/2p-3-2 gjort om til
  // PerpendicularLine(0, 1, x, false) → «Ukjent kommando». To-argumentsformen håndteres i translateCommand.
  'Midtnormal': 'PerpendicularBisector',
  'Parallell': 'Line',
  'Tangent': 'Tangent',
  'Ellipse': 'Ellipse',
  'Hyperbel': 'Hyperbola',
  'Parabel': 'Parabola',

  // Measurements
  'Areal': 'Area',
  'Omkrets': 'Perimeter',
  'Avstand': 'Distance',
  'Lengde': 'Length',

  // Statistics
  'Gjennomsnitt': 'Mean',
  'Median': 'Median',
  'Modus': 'Mode',
  'Standardavvik': 'SD',
  'Varians': 'Variance',
  'Stolpediagram': 'BarChart',
  'Søylediagram': 'BarChart',
  'Sektordiagram': 'PieChart',
  'Histogram': 'Histogram',
  'Boksplott': 'BoxPlot',
  'Punktdiagram': 'DotPlot',

  // Calculus
  'Derivert': 'Derivative',
  'Integral': 'Integral',
  'Grense': 'Limit',
  'Sum': 'Sum',
  'Produkt': 'Product',
  'Ekstremum': 'Extremum',
  'Ekstremalpunkt': 'Extremum',
  'Vendepunkt': 'InflectionPoint',
  'Nullpunkt': 'Root',
  'Skjæring': 'Intersect',
  'Asymptote': 'Asymptote',

  // Algebra
  'Forenkle': 'Simplify',
  'Faktoriser': 'Factor',
  'Utvid': 'Expand',
  'Løs': 'Solve',
  'LøsODE': 'SolveODE',
  'Delbrøker': 'PartialFractions',
  'Substituer': 'Substitute',

  // Functions
  'Funksjon': 'Function',
  'Polynom': 'Polynomial',
  'RegLin': 'FitLine',
  'RegPoly': 'FitPoly',
  'RegExp': 'FitExp',
  'RegLog': 'FitLog',
  'RegPot': 'FitPow',
  'RegSin': 'FitSin',
  'RegEksp': 'FitExp',
  'RegLogist': 'FitLogistic',
  'Stigning': 'Slope',

  // Probability
  'Normalfordeling': 'Normal',
  'Binomialfordeling': 'BinomialDist',
  'Poissonfordeling': 'Poisson',
  'Tilfeldig': 'RandomBetween',
  'TilfeldigNormal': 'RandomNormal',

  // Sequences and lists
  'Sekvens': 'Sequence',
  'Følge': 'Sequence',
  'Liste': 'List',
  'Glider': 'Slider',
  'Element': 'Element',
  'Sorter': 'Sort',
  'Snu': 'Reverse',
  'Første': 'First',
  'Siste': 'Last',

  // Transformations
  'Roter': 'Rotate',
  'Speile': 'Reflect',
  'Translater': 'Translate',
  'Dilater': 'Dilate',
  'Skaler': 'Dilate',

  // 3D
  'Prisme': 'Prism',
  'Pyramide': 'Pyramid',
  'Sylinder': 'Cylinder',
  'Kjegle': 'Cone',
  'Kule': 'Sphere',
  'Plan': 'Plane',
  'Overflate': 'Surface',
  'Volum': 'Volume',

  // Other
  'Tekst': 'Text',
  'Hvis': 'If',
  'Dersom': 'If',
  'TegnVinkel': 'Angle',
  'Punkt': 'Point',
  'Skjæringspunkt': 'Intersect',
};

/**
 * Translates a single Norwegian GeoGebra command to English
 * Handles command names at the start of expressions like "Mangekant(A, B, C)"
 */
export function translateCommand(norwegianCommand: string): string {
  let result = norwegianCommand;

  // Normal(<Punkt>, <Linje>) — to argumenter uten nøsting — er norsk for PerpendicularLine.
  // Normal(μ, σ, x, false) (fire argumenter) er normalfordelingen og står urørt.
  result = result.replace(/(^|[^a-zA-ZæøåÆØÅ])Normal\(\s*([^(),]+?)\s*,\s*([^(),]+?)\s*\)/g, '$1PerpendicularLine($2, $3)');

  // Sort by length (longest first) to avoid partial replacements
  const sortedCommands = Object.entries(NORWEGIAN_TO_ENGLISH)
    .sort((a, b) => b[0].length - a[0].length);

  for (const [norwegian, english] of sortedCommands) {
    // Match command name followed by ( to avoid replacing partial words
    // Also handles commands at the start or after operators/spaces
    const regex = new RegExp(`(^|[^a-zA-ZæøåÆØÅ])(${norwegian})\\(`, 'g');
    result = result.replace(regex, `$1${english}(`);
  }

  return result;
}

/**
 * Kommandoer som GeoGebra-appen «graphing» (Grafregner) ikke kjenner — evalCommand gir
 * «Ukjent kommando» selv om navnet er riktig engelsk. Målt headless 22.10.2026 (deployggb.js, 5.0):
 * hver kommando kalt i graphing og classic; listen er de som er ukjente i graphing og kjente i classic.
 */
const GRAPHING_UNKNOWN = new Set([
  'Angle', 'AngleBisector', 'Area', 'Asymptote', 'Circle', 'CircularArc', 'CircularSector',
  'CircumcircularArc', 'Coefficients', 'Cone', 'Cylinder', 'Degree', 'Dilate', 'Distance', 'Div',
  'Ellipse', 'Expand', 'Factor', 'Hyperbola', 'IntersectPath', 'Limit', 'Locus', 'Midpoint', 'Mod',
  'NSolve', 'OsculatingCircle', 'Parabola', 'PartialFractions', 'Perimeter', 'PerpendicularBisector',
  'PerpendicularLine', 'Plane', 'Polar', 'Polygon', 'Polyline', 'Polynomial', 'Prism', 'Pyramid',
  'Reflect', 'Rotate', 'Segment', 'Semicircle', 'Simplify', 'Slope', 'Solve', 'SolveODE', 'Sphere',
  'Surface', 'Tangent', 'Translate', 'Volume',
]);

/**
 * Velger app for et sett (allerede oversatte) kommandoer: ber blokken om «graphing», men bruker en
 * kommando Grafregneren ikke kjenner (Tangent, Asymptote, Segment …), lastes GeoGebra Classic i stedet —
 * ellers får eleven en feildialog i appleten.
 */
export function appForCommands<T extends string>(appName: T, translatedCommands: string[]): T | 'classic' {
  if (appName !== 'graphing') return appName;
  for (const cmd of translatedCommands) {
    for (const m of cmd.matchAll(/([A-Za-z][A-Za-z0-9]*)\s*\(/g)) {
      if (GRAPHING_UNKNOWN.has(m[1])) return 'classic';
    }
  }
  return appName;
}

/**
 * Translates an array of Norwegian GeoGebra commands to English
 */
export function translateCommands(norwegianCommands: string[]): string[] {
  return norwegianCommands.map(translateCommand);
}
