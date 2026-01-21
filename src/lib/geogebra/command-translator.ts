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
  'Normal': 'PerpendicularLine',
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
 * Translates an array of Norwegian GeoGebra commands to English
 */
export function translateCommands(norwegianCommands: string[]): string[] {
  return norwegianCommands.map(translateCommand);
}
