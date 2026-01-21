import { BlockMath, InlineMath } from '@/components/ui/math';

// R2 GeoGebra content - to be merged into main geogebra-content.tsx
export const R2_CONTENT = {
  // R2 - Kapittel 1: Integrasjonsteknikker
  'r2-integrasjon': {
    introduction: (
      <p className="text-lg">
        I R2 utvider vi integrasjonsteknikkene fra S2 med avanserte metoder som delvis integrasjon,
        substitusjon, delbrøkoppspalting og uegentlige integraler. GeoGebra CAS er et kraftig verktøy
        for å løse og visualisere komplekse integraler.
      </p>
    ),
    sections: [
      {
        title: 'Delvis integrasjon',
        content: (
          <div className="space-y-4">
            <p>
              Delvis integrasjon er metoden for å integrere produkter av funksjoner. Formelen er:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\int u \\, dv = uv - \\int v \\, du"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: <InlineMath>{"\\int x e^x \\, dx"}</InlineMath></h4>
              <p className="mb-2">Vi velger:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li><InlineMath>{"u = x"}</InlineMath> → <InlineMath>{"du = dx"}</InlineMath></li>
                <li><InlineMath>{"dv = e^x \\, dx"}</InlineMath> → <InlineMath>{"v = e^x"}</InlineMath></li>
              </ul>
              <div className="space-y-2 text-center">
                <BlockMath>{"\\int x e^x \\, dx = x e^x - \\int e^x \\, dx"}</BlockMath>
                <BlockMath>{"= x e^x - e^x + C = e^x(x - 1) + C"}</BlockMath>
              </div>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra CAS: <code className="text-blue-600">Integral(x * e^x)</code>
            </p>
          </div>
        ),
        geogebra: {
          title: 'Delvis integrasjon',
          description: 'Bruk CAS til å løse integraler med delvis integrasjon.',
          appName: 'cas',
          initialCommands: [
            'f(x) = x * e^x',
            'F = Integral(f)',
            'a = Integral(x * ln(x))',
            'b = Integral(x^2 * sin(x))',
          ],
        },
      },
      {
        title: 'Substitusjon',
        content: (
          <div className="space-y-4">
            <p>
              Substitusjon brukes når integranden inneholder en sammensatt funksjon.
              Vi setter <InlineMath>{"u = g(x)"}</InlineMath> og <InlineMath>{"du = g'(x) \\, dx"}</InlineMath>
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: <InlineMath>{"\\int 2x \\sqrt{x^2 + 1} \\, dx"}</InlineMath></h4>
              <p className="mb-2">Substitusjon:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li><InlineMath>{"u = x^2 + 1"}</InlineMath></li>
                <li><InlineMath>{"du = 2x \\, dx"}</InlineMath></li>
              </ul>
              <div className="space-y-2 text-center">
                <BlockMath>{"\\int 2x \\sqrt{x^2 + 1} \\, dx = \\int \\sqrt{u} \\, du"}</BlockMath>
                <BlockMath>{"= \\frac{2}{3}u^{3/2} + C = \\frac{2}{3}(x^2 + 1)^{3/2} + C"}</BlockMath>
              </div>
            </div>
            <p className="text-muted-foreground">
              GeoGebra håndterer substitusjon automatisk i CAS-vinduet.
            </p>
          </div>
        ),
        geogebra: {
          title: 'Substitusjon',
          description: 'Se hvordan GeoGebra løser integraler med substitusjon.',
          appName: 'cas',
          initialCommands: [
            'g(x) = 2x * sqrt(x^2 + 1)',
            'G = Integral(g)',
            'h(x) = sin(x) * cos(x)',
            'H = Integral(h)',
          ],
        },
      },
      {
        title: 'Delbrøkoppspalting',
        content: (
          <div className="space-y-4">
            <p>
              Når integranden er en rasjonell funksjon (brøk av polynomer), kan vi bruke delbrøkoppspalting:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\frac{P(x)}{Q(x)} = \\frac{A}{x - a} + \\frac{B}{x - b} + \\cdots"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: <InlineMath>{"\\int \\frac{1}{x^2 - 1} \\, dx"}</InlineMath></h4>
              <p className="mb-2">Faktoriser nevneren:</p>
              <div className="space-y-2 text-center">
                <BlockMath>{"\\frac{1}{x^2 - 1} = \\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}"}</BlockMath>
                <BlockMath>{"1 = A(x+1) + B(x-1)"}</BlockMath>
              </div>
              <p className="mt-2">Setter x = 1: A = 1/2, setter x = -1: B = -1/2</p>
              <div className="space-y-2 text-center mt-3">
                <BlockMath>{"\\int \\frac{1}{x^2 - 1} \\, dx = \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C"}</BlockMath>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Delbrøkoppspalting',
          description: 'Bruk CAS til å spalte opp og integrere rasjonale funksjoner.',
          appName: 'cas',
          initialCommands: [
            'f(x) = 1 / (x^2 - 1)',
            'PartialFractions(f)',
            'Integral(f)',
            'g(x) = (2x + 3) / (x^2 + 3x + 2)',
            'PartialFractions(g)',
          ],
        },
      },
      {
        title: 'Uegentlige integraler',
        content: (
          <div className="space-y-4">
            <p>
              Uegentlige integraler har uendelige grenser eller diskontinuitet i integranden:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Type 1: Uendelig grense</h4>
                <BlockMath>{"\\int_1^\\infty \\frac{1}{x^2} \\, dx = \\lim_{b \\to \\infty} \\int_1^b \\frac{1}{x^2} \\, dx"}</BlockMath>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Type 2: Diskontinuitet</h4>
                <BlockMath>{"\\int_0^1 \\frac{1}{\\sqrt{x}} \\, dx = \\lim_{a \\to 0^+} \\int_a^1 \\frac{1}{\\sqrt{x}} \\, dx"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Konvergens vs divergens:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Konvergent:</strong> Integralet har en endelig verdi</li>
                <li><strong>Divergent:</strong> Integralet går mot uendelig</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Uegentlige integraler',
          description: 'Undersøk konvergens av uegentlige integraler.',
          appName: 'cas',
          initialCommands: [
            'f(x) = 1 / x^2',
            'Integral(f, 1, infinity)',
            'g(x) = 1 / x',
            'Integral(g, 1, infinity)',
            'h(x) = 1 / sqrt(x)',
            'Integral(h, 0, 1)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Beregn ∫ x cos(x) dx ved delvis integrasjon',
        'Finn ∫ e^(2x) sin(x) dx',
        'Bruk substitusjon til å løse ∫ x/(x²+1) dx',
        'Spalt opp og integrer: ∫ 1/(x²-4) dx',
        'Undersøk om ∫₁^∞ 1/x³ dx er konvergent',
        'Beregn ∫₀^π/2 ln(sin(x)) dx',
      ],
    },
    summary: [
      'Delvis integrasjon: ∫ u dv = uv - ∫ v du',
      'Substitusjon: u = g(x), du = g\'(x) dx',
      'Delbrøkoppspalting for rasjonale funksjoner',
      'Uegentlige integraler krever grenseverdier',
      'Bruk CAS i GeoGebra for komplekse integraler',
    ],
    commands: [
      { command: 'Integral(f(x))', description: 'Ubestemt integral', example: 'Integral(x^2 * sin(x))' },
      { command: 'Integral(f(x), a, b)', description: 'Bestemt integral', example: 'Integral(1/x^2, 1, 10)' },
      { command: 'PartialFractions(f(x))', description: 'Delbrøkoppspalting', example: 'PartialFractions(1/(x^2-1))' },
      { command: 'Integral(f, a, infinity)', description: 'Uegentlig integral', example: 'Integral(1/x^2, 1, infinity)' },
      { command: 'Limit(f(x), x, a)', description: 'Grenseverdi', example: 'Limit(sin(x)/x, x, 0)' },
    ],
  },
};
