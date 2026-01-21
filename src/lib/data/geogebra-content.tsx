import { ReactNode } from 'react';
import { BlockMath, InlineMath } from '@/components/ui/math';

export interface ChapterSection {
  title: string;
  content: ReactNode;
  geogebra?: {
    title: string;
    description: string;
    initialCommands?: string[];
    appName?: 'graphing' | 'geometry' | 'classic' | '3d' | 'cas';
  };
}

export interface ChapterContent {
  introduction: ReactNode;
  sections: ChapterSection[];
  exercises: {
    title: string;
    tasks: string[];
  };
  summary: string[];
  commands: {
    command: string;
    description: string;
    example: string;
  }[];
}

export const CHAPTER_CONTENT: Record<string, ChapterContent> = {
  // 8. klasse - Kapittel 8.1: Koordinatsystemet
  '8-koordinatsystem': {
    introduction: (
      <p className="text-lg">
        Koordinatsystemet er grunnlaget for all grafisk matematikk i GeoGebra.
        Her lærer du å plotte punkter, forstå akser og navigere i koordinatsystemet.
      </p>
    ),
    sections: [
      {
        title: 'Hva er et koordinatsystem?',
        content: (
          <div className="space-y-4">
            <p>
              Et koordinatsystem består av to talllinjer som står vinkelrett på hverandre:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">x-aksen (førsteaksen)</h4>
                <p className="text-muted-foreground">
                  Den horisontale (vannrette) linjen. Positive verdier går mot høyre,
                  negative mot venstre.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">y-aksen (andreaksen)</h4>
                <p className="text-muted-foreground">
                  Den vertikale (loddrette) linjen. Positive verdier går oppover,
                  negative nedover.
                </p>
              </div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <p><strong>Origo</strong> = punktet der aksene krysses = (0, 0)</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk koordinatsystemet',
          description: 'Klikk og dra for å se rundt. Bruk scrollhjulet for å zoome inn/ut.',
          appName: 'classic',
          initialCommands: [
            'A = (2, 3)',
            'B = (-3, 1)',
            'C = (4, -2)',
            'D = (-2, -3)',
            'ZoomIn(-5, -5, 6, 5)',
          ],
        },
      },
      {
        title: 'Plotte punkter',
        content: (
          <div className="space-y-4">
            <p>
              Et punkt skrives som <code className="bg-muted px-2 py-1 rounded">(x, y)</code> der:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>x</strong> er hvor langt punktet er fra y-aksen (horisontalt)</li>
              <li><strong>y</strong> er hvor langt punktet er fra x-aksen (vertikalt)</li>
            </ul>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Slik plotter du et punkt i GeoGebra:</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Skriv koordinatene i inputfeltet, f.eks: <code className="text-blue-600">(3, 5)</code></li>
                <li>Trykk Enter</li>
                <li>Punktet vises i koordinatsystemet</li>
              </ol>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong>Tips:</strong> Du kan gi punktet et navn: <code>A = (3, 5)</code>
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'De fire kvadrantene',
        content: (
          <div className="space-y-4">
            <p>Koordinatsystemet er delt inn i fire kvadranter:</p>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-center">
                <strong>Kvadrant II</strong><br />
                x &lt; 0, y &gt; 0<br />
                <span className="text-sm">(-, +)</span>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg text-center">
                <strong>Kvadrant I</strong><br />
                x &gt; 0, y &gt; 0<br />
                <span className="text-sm">(+, +)</span>
              </div>
              <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg text-center">
                <strong>Kvadrant III</strong><br />
                x &lt; 0, y &lt; 0<br />
                <span className="text-sm">(-, -)</span>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-center">
                <strong>Kvadrant IV</strong><br />
                x &gt; 0, y &lt; 0<br />
                <span className="text-sm">(+, -)</span>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Plasser punkter i kvadrantene',
          description: 'Prøv å plassere ett punkt i hver kvadrant.',
          appName: 'classic',
          initialCommands: [
            'ZoomIn[-6, -6, 6, 6]',
          ],
        },
      },
      {
        title: 'Avstand mellom punkter',
        content: (
          <div className="space-y-4">
            <p>Avstanden mellom to punkter kan du finne med Pytagoras:</p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="font-semibold mb-2">Eksempel: Finn avstanden mellom A(1, 2) og B(4, 6)</p>
              <div className="space-y-2 text-center">
                <BlockMath>{"d = \\sqrt{(4-1)^2 + (6-2)^2}"}</BlockMath>
                <BlockMath>{"d = \\sqrt{3^2 + 4^2}"}</BlockMath>
                <BlockMath>{"d = \\sqrt{9 + 16} = \\sqrt{25} = 5"}</BlockMath>
              </div>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra kan du bruke kommandoen <code className="text-blue-600">Avstand(A, B)</code>
            </p>
          </div>
        ),
        geogebra: {
          title: 'Mål avstand',
          description: 'Lag to punkter og se avstanden mellom dem.',
          appName: 'classic',
          initialCommands: [
            'A = (1, 2)',
            'B = (4, 6)',
            'f = Segment(A, B)',
            'd = Distance(A, B)',
            'ZoomIn[-1, 0, 6, 8]',
          ],
        },
      },
      {
        title: 'Midtpunkt',
        content: (
          <div className="space-y-4">
            <p>Midtpunktet mellom to punkter finner du ved å ta gjennomsnittet av koordinatene:</p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="font-semibold mb-2">Eksempel: Finn midtpunktet mellom A(2, 4) og B(6, 8)</p>
              <div className="space-y-2 text-center">
                <BlockMath>{"M = \\left( \\frac{2+6}{2}, \\frac{4+8}{2} \\right)"}</BlockMath>
                <BlockMath>{"M = \\left( \\frac{8}{2}, \\frac{12}{2} \\right) = (4, 6)"}</BlockMath>
              </div>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">Midtpunkt(A, B)</code>
            </p>
          </div>
        ),
        geogebra: {
          title: 'Finn midtpunkt',
          description: 'Prøv å finne midtpunktet mellom forskjellige punkter.',
          appName: 'classic',
          initialCommands: [
            'A = (2, 4)',
            'B = (6, 8)',
            'M = Midpoint(A, B)',
            'f = Segment(A, B)',
            'ZoomIn[0, 2, 8, 10]',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Plott punktene A(3, 4), B(-2, 5), C(-3, -1) og D(4, -3)',
        'Finn avstanden mellom A og C',
        'Finn midtpunktet mellom B og D',
        'Tegn et linjestykke fra A til B med Linjestykke(A, B)',
        'I hvilken kvadrant ligger hvert punkt?',
      ],
    },
    summary: [
      'Koordinatsystemet har x-akse (horisontalt) og y-akse (vertikalt)',
      'Et punkt skrives som (x, y) - husk rekkefølgen!',
      'Avstand: bruk Avstand(A, B) i GeoGebra',
      'Midtpunkt: bruk Midtpunkt(A, B) i GeoGebra',
    ],
    commands: [
      { command: '(x, y)', description: 'Lager et punkt', example: '(3, 5)' },
      { command: 'A = (x, y)', description: 'Lager et punkt med navn', example: 'A = (3, 5)' },
      { command: 'Avstand(A, B)', description: 'Finner avstanden mellom to punkter', example: 'Avstand(A, B)' },
      { command: 'Midtpunkt(A, B)', description: 'Finner midtpunktet', example: 'Midtpunkt(A, B)' },
      { command: 'Linjestykke(A, B)', description: 'Tegner linjestykke', example: 'Linjestykke(A, B)' },
      { command: 'Linje(A, B)', description: 'Tegner linje gjennom punkter', example: 'Linje(A, B)' },
    ],
  },

  // 8. klasse - Kapittel 8.2: Geometriske figurer
  '8-geometri': {
    introduction: (
      <p className="text-lg">
        I dette kapittelet lærer du å tegne og utforske geometriske figurer som trekanter,
        firkanter og sirkler i GeoGebra. Du vil også lære å måle omkrets og areal.
      </p>
    ),
    sections: [
      {
        title: 'Tegne trekanter',
        content: (
          <div className="space-y-4">
            <p>
              En trekant består av tre hjørner (punkter) og tre sider. I GeoGebra kan du tegne
              trekanter på flere måter:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Metode 1: Bruk Mangekant-kommandoen</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Lag tre punkter: <code>A = (0, 0)</code>, <code>B = (4, 0)</code>, <code>C = (2, 3)</code></li>
                <li>Skriv <code className="text-blue-600">Mangekant(A, B, C)</code></li>
              </ol>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Metode 2: Bruk polygon-verktøyet</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Velg polygon-verktøyet fra verktøylinjen</li>
                <li>Klikk på tre punkter i koordinatsystemet</li>
                <li>Klikk på det første punktet igjen for å lukke trekanten</li>
              </ol>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Tegn en trekant',
          description: 'Prøv å lage en trekant med tre hjørner.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (4, 0)',
            'C = (2, 3)',
            'Polygon(A, B, C)',
            'ZoomIn[-2, -2, 6, 5]',
          ],
        },
      },
      {
        title: 'Tegne firkanter',
        content: (
          <div className="space-y-4">
            <p>Firkanter har fire hjørner og fire sider. Vanlige typer:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-bold">Rektangel</h4>
                <p className="text-sm text-muted-foreground">Fire rette vinkler, motstående sider like lange</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-bold">Kvadrat</h4>
                <p className="text-sm text-muted-foreground">Fire rette vinkler, alle sider like lange</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-bold">Parallellogram</h4>
                <p className="text-sm text-muted-foreground">Motstående sider parallelle og like lange</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-bold">Trapes</h4>
                <p className="text-sm text-muted-foreground">To motstående sider parallelle</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Bruk <code className="text-blue-600">Mangekant(A, B, C, D)</code> for å tegne en firkant.
            </p>
          </div>
        ),
        geogebra: {
          title: 'Tegn forskjellige firkanter',
          description: 'Lag et rektangel ved å plassere fire punkter.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (4, 0)',
            'C = (4, 2)',
            'D = (0, 2)',
            'Polygon(A, B, C, D)',
            'ZoomIn[-2, -2, 6, 4]',
          ],
        },
      },
      {
        title: 'Tegne sirkler',
        content: (
          <div className="space-y-4">
            <p>En sirkel defineres av et sentrum og en radius:</p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Sirkel med sentrum og radius:</h4>
              <code className="text-blue-600">Sirkel(M, r)</code>
              <p className="text-sm text-muted-foreground mt-2">
                der M er sentrum og r er radius
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Sirkel gjennom et punkt:</h4>
              <code className="text-blue-600">Sirkel(M, A)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Sirkel med sentrum M som går gjennom punkt A
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Tegn sirkler',
          description: 'Lag en sirkel med sentrum i origo og radius 3.',
          appName: 'classic',
          initialCommands: [
            'M = (0, 0)',
            'Circle(M, 3)',
            'ZoomIn[-5, -5, 5, 5]',
          ],
        },
      },
      {
        title: 'Måle omkrets og areal',
        content: (
          <div className="space-y-4">
            <p>GeoGebra kan automatisk beregne omkrets og areal av figurer:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Omkrets</h4>
                <code className="text-blue-600">Omkrets(polygon)</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Gir summen av alle sidene
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Areal</h4>
                <code className="text-blue-600">Areal(polygon)</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Gir arealet av figuren
                </p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Formler du bør kunne:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <strong>Rektangel:</strong> <InlineMath>{"A = l \\cdot b"}</InlineMath>
                </li>
                <li className="flex items-center gap-2">
                  <strong>Trekant:</strong> <InlineMath>{"A = \\frac{g \\cdot h}{2}"}</InlineMath>
                </li>
                <li className="flex items-center gap-2">
                  <strong>Sirkel:</strong> <InlineMath>{"A = \\pi r^2"}</InlineMath>, <InlineMath>{"O = 2\\pi r"}</InlineMath>
                </li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Mål figurer',
          description: 'Lag en trekant og mål omkrets og areal.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (6, 0)',
            'C = (3, 4)',
            't = Polygon(A, B, C)',
            'areal = Area(t)',
            'omkrets = Perimeter(t)',
            'ZoomIn[-2, -2, 8, 6]',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Tegn en likesidet trekant (alle sider like lange)',
        'Tegn et kvadrat med sidelengde 4',
        'Tegn en sirkel med radius 5',
        'Finn arealet av trekanten din',
        'Finn omkretsen av kvadratet',
      ],
    },
    summary: [
      'Bruk Mangekant(A, B, C) for å tegne trekanter',
      'Bruk Mangekant(A, B, C, D) for å tegne firkanter',
      'Bruk Sirkel(M, r) for å tegne sirkler',
      'Bruk Omkrets() og Areal() for å måle figurer',
    ],
    commands: [
      { command: 'Mangekant(A, B, C)', description: 'Tegner en trekant', example: 'Mangekant(A, B, C)' },
      { command: 'Mangekant(A, B, C, D)', description: 'Tegner en firkant', example: 'Mangekant(A, B, C, D)' },
      { command: 'Sirkel(M, r)', description: 'Tegner sirkel med sentrum M og radius r', example: 'Sirkel(M, 3)' },
      { command: 'Omkrets(figur)', description: 'Beregner omkretsen', example: 'Omkrets(t)' },
      { command: 'Areal(figur)', description: 'Beregner arealet', example: 'Areal(t)' },
      { command: 'Vinkel(A, B, C)', description: 'Måler vinkelen i punkt B', example: 'Vinkel(A, B, C)' },
    ],
  },

  // 8. klasse - Kapittel 8.3: Statistikk og diagrammer
  '8-statistikk': {
    introduction: (
      <p className="text-lg">
        Lær å lage søylediagram, sektordiagram og linjediagram i GeoGebra.
        Du vil også lære å analysere data og presentere resultater visuelt.
      </p>
    ),
    sections: [
      {
        title: 'Lage datalister',
        content: (
          <div className="space-y-4">
            <p>
              For å lage diagrammer trenger vi først data. I GeoGebra lagrer vi data i lister:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Karakterer i en klasse</h4>
              <code className="text-blue-600">karakterer = {'{'}2, 3, 4, 4, 5, 3, 4, 5, 6, 4, 3, 5{'}'}</code>
            </div>
            <p className="text-muted-foreground">
              Listen lagres som en variabel og kan brukes til å lage diagrammer.
            </p>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-sm mb-1">💡 Slik skriver du krøllparenteser {'{ }'}</h4>
              <ul className="text-sm space-y-1">
                <li><strong>Mac:</strong> <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">Shift</kbd> + <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">Option</kbd> + <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">8</kbd> for {'{'} og <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">Shift</kbd> + <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">Option</kbd> + <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">9</kbd> for {'}'}</li>
                <li><strong>PC:</strong> <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">AltGr</kbd> + <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">7</kbd> for {'{'} og <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">AltGr</kbd> + <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">0</kbd> for {'}'}</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Du kan skrive kommandoer direkte i inputfeltet nederst i GeoGebra-vinduet.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Søylediagram',
        content: (
          <div className="space-y-4">
            <p>
              Søylediagram (også kjent som stolpediagram) viser frekvensen av ulike verdier. Hver søyle representerer
              hvor mange ganger en verdi forekommer.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Slik lager du et søylediagram:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Lag en liste med data</li>
                <li>Bruk kommandoen <code className="text-blue-600">Søylediagram(liste, 1)</code></li>
              </ol>
            </div>
            <p>
              <strong>Tips:</strong> Du kan også bruke <code className="text-blue-600">Søylediagram(liste, 1)</code>
              for grupperte data.
            </p>
          </div>
        ),
        geogebra: {
          title: 'Lag søylediagram',
          description: 'Lag et søylediagram av terningkast.',
          initialCommands: [
            'terningkast = {1, 3, 2, 5, 4, 6, 3, 2, 4, 5, 1, 3, 4, 6, 2, 3, 5, 4, 3, 2}',
            'BarChart(terningkast, 1)',
            'ZoomIn[-1, -1, 8, 10]',
          ],
        },
      },
      {
        title: 'Sektordiagram (kakediagram)',
        content: (
          <div className="space-y-4">
            <p>
              Sektordiagram viser hvordan en helhet er fordelt på ulike kategorier.
              Hver sektor representerer en andel av helheten.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Slik lager du et sektordiagram:</h4>
              <p className="text-sm text-muted-foreground mb-2">
                GeoGebra har ikke en enkel sektordiagram-kommando, men du kan bruke CircularSector:
              </p>
              <code className="text-blue-600">Sirkelsektor(M, A, B)</code>
            </div>
            <p className="text-muted-foreground">
              Vinklene beregnes automatisk basert på verdiene i listen.
            </p>
          </div>
        ),
        geogebra: {
          title: 'Lag sektordiagram',
          description: 'Se hvordan sektorer kan representere andeler.',
          initialCommands: [
            'M = (0, 0)',
            'Circle(M, 3)',
            'A = (3, 0)',
            'B = (0, 3)',
            'CircularSector(M, A, B)',
            'ZoomIn[-5, -5, 5, 5]',
          ],
        },
      },
      {
        title: 'Linjediagram',
        content: (
          <div className="space-y-4">
            <p>
              Linjediagram brukes for å vise hvordan noe endrer seg over tid.
              Punktene forbindes med linjer.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Slik lager du et linjediagram:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Lag en liste med x-verdier (f.eks. måneder)</li>
                <li>Lag en liste med y-verdier (f.eks. temperaturer)</li>
                <li>Bruk <code className="text-blue-600">Polylinje(punktliste)</code></li>
              </ol>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Lag linjediagram',
          description: 'Lag et linjediagram som viser temperaturer gjennom året.',
          initialCommands: [
            'temp = {-3, -1, 2, 7, 12, 16, 18, 17, 12, 7, 2, -2}',
            'Punktliste = Sequence((i, Element(temp, i)), i, 1, 12)',
            'Polyline(Punktliste)',
            'ZoomIn[-1, -5, 14, 20]',
          ],
        },
      },
      {
        title: 'Frekvens og relativ frekvens',
        content: (
          <div className="space-y-4">
            <p>
              <strong>Frekvens</strong> er antall ganger en verdi forekommer.
              <strong> Relativ frekvens</strong> er frekvensen delt på totalt antall observasjoner.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold">Frekvens</h4>
              <code className="text-blue-600">Frekvens(liste)</code>
            </div>
          </div>
        ),
      },
      {
        title: 'Variasjonsbredde',
        content: (
          <div className="space-y-4">
            <p>
              <strong>Variasjonsbredde</strong> er forskjellen mellom største og minste verdi i et datasett.
              I GeoGebra bruker vi kommandoene <code className="text-blue-600">Maks()</code> og <code className="text-blue-600">Min()</code>.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold">Minste verdi</h4>
                <code className="text-blue-600">Min(liste)</code>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold">Største verdi</h4>
                <code className="text-blue-600">Maks(liste)</code>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Beregne variasjonsbredde:</h4>
              <code className="text-blue-600">var = Maks(liste) - Min(liste)</code>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Lag en liste med 20 terningkast (tall fra 1-6)',
        'Lag et søylediagram av terningkastene',
        'Lag et sektordiagram som viser hobbyer i klassen',
        'Lag et linjediagram som viser ukepenger over 12 måneder',
      ],
    },
    summary: [
      'Bruk lister { } for å lagre data',
      'Søylediagram(liste, 1) for søylediagram',
      'Polyline(punktliste) for linjediagram',
      'Linjediagram viser endring over tid',
    ],
    commands: [
      { command: 'liste = {a, b, c}', description: 'Lager en liste med verdier', example: 'tall = {1, 2, 3, 4, 5}' },
      { command: 'Søylediagram(liste, 1)', description: 'Lager søylediagram', example: 'Søylediagram(karakterer, 1)' },
      { command: 'Polyline(punktliste)', description: 'Lager linjediagram (engelsk kommando)', example: 'Polyline(punkter)' },
      { command: 'Frekvens(liste)', description: 'Teller frekvenser', example: 'Frekvens(terningkast)' },
      { command: 'Gjennomsnitt(liste)', description: 'Beregner gjennomsnittet', example: 'Gjennomsnitt(karakterer)' },
      { command: 'Min(liste)', description: 'Finner minste verdi', example: 'Min({12, 5, 18, 9})' },
      { command: 'Maks(liste)', description: 'Finner største verdi', example: 'Maks({12, 5, 18, 9})' },
    ],
  },

  // 8. klasse - Kapittel 8.4: Tall og enkel algebra
  '8-tall-algebra': {
    introduction: (
      <p className="text-lg">
        I dette kapittelet utforsker vi tallmønstre og lærer grunnleggende algebra i GeoGebra.
        Du vil lære å bruke variabler og forenkle uttrykk.
      </p>
    ),
    sections: [
      {
        title: 'Tallmønstre',
        content: (
          <div className="space-y-4">
            <p>
              Et tallmønster er en rekke med tall som følger en bestemt regel.
              GeoGebra kan hjelpe deg å visualisere og forstå mønstre.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Partall</h4>
              <p>2, 4, 6, 8, 10, ... (øker med 2 hver gang)</p>
              <code className="text-blue-600 block mt-2">partall = Følge(2*n, n, 1, 10)</code>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Oddetall</h4>
              <p>1, 3, 5, 7, 9, ... (øker med 2 hver gang)</p>
              <code className="text-blue-600 block mt-2">oddetall = Følge(2*n - 1, n, 1, 10)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk tallmønstre',
          description: 'Se på forskjellige tallmønstre.',
          initialCommands: [
            'partall = Sequence(2*n, n, 1, 10)',
            'oddetall = Sequence(2*n - 1, n, 1, 10)',
            'kvadrattall = Sequence(n^2, n, 1, 10)',
            'ZoomIn[-2, -5, 12, 110]',
          ],
        },
      },
      {
        title: 'Variabler',
        content: (
          <div className="space-y-4">
            <p>
              En variabel er et symbol (vanligvis en bokstav) som representerer et tall.
              I GeoGebra kan vi definere variabler og bruke dem i beregninger.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Definere variabler:</h4>
              <ul className="space-y-1">
                <li><code className="text-blue-600">a = 5</code> (a er nå lik 5)</li>
                <li><code className="text-blue-600">b = 3</code> (b er nå lik 3)</li>
                <li><code className="text-blue-600">c = a + b</code> (c blir 8)</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Du kan bruke glidere for å endre verdien på en variabel interaktivt.
            </p>
          </div>
        ),
        geogebra: {
          title: 'Bruk variabler',
          description: 'Definer variabler og gjør beregninger.',
          initialCommands: [
            'a = 5',
            'b = 3',
            'sum = a + b',
            'produkt = a * b',
            'differanse = a - b',
            'ZoomIn[-2, -2, 20, 18]',
          ],
        },
      },
      {
        title: 'Glidere',
        content: (
          <div className="space-y-4">
            <p>
              En glider er en interaktiv variabel som du kan endre ved å dra en skyveknapp.
              Dette er nyttig for å utforske hvordan endringer påvirker resultater.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Lag en glider:</h4>
              <code className="text-blue-600">n = Glider(1, 10, 1)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Lager en glider som går fra 1 til 10, med steg på 1
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Eksperimenter med glidere',
          description: 'Lag en glider og se hvordan den påvirker beregninger.',
          initialCommands: [
            'n = Slider(1, 10, 1)',
            'kvadrat = n^2',
            'dobbel = 2*n',
            'ZoomIn[-2, -2, 12, 110]',
          ],
        },
      },
      {
        title: 'Enkle uttrykk',
        content: (
          <div className="space-y-4">
            <p>
              Et algebraisk uttrykk inneholder tall, variabler og regneoperasjoner.
              GeoGebra kan forenkle og beregne uttrykk.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Addisjon</h4>
                <BlockMath>{"3x + 2x = 5x"}</BlockMath>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Multiplikasjon</h4>
                <BlockMath>{"2 \\cdot 3x = 6x"}</BlockMath>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Potens</h4>
                <BlockMath>{"x \\cdot x = x^2"}</BlockMath>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Parentes</h4>
                <BlockMath>{"2(x + 3) = 2x + 6"}</BlockMath>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Regneoperasjoner i GeoGebra',
        content: (
          <div className="space-y-4">
            <p>
              GeoGebra kan gjøre mange typer beregninger. Her er de viktigste operasjonene:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Potens (opphøyd i)</h4>
                <code className="text-blue-600">2^8</code>
                <p className="text-sm text-muted-foreground mt-1">Gir 256 (2 opphøyd i 8)</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Kvadratrot</h4>
                <code className="text-blue-600">sqrt(144)</code>
                <p className="text-sm text-muted-foreground mt-1">Gir 12 (kvadratroten av 144)</p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Divisjon</h4>
                <code className="text-blue-600">15 / 3</code>
                <p className="text-sm text-muted-foreground mt-1">Gir 5</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Multiplikasjon</h4>
                <code className="text-blue-600">7 * 8</code>
                <p className="text-sm text-muted-foreground mt-1">Gir 56</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Tallinjen',
        content: (
          <div className="space-y-4">
            <p>
              Tallinjen viser tall ordnet fra venstre (negative) til høyre (positive).
              I GeoGebra kan vi visualisere tall på tallinjen.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Viktige begreper:</h4>
              <ul className="space-y-1">
                <li><strong>Positive tall:</strong> Til høyre for 0</li>
                <li><strong>Negative tall:</strong> Til venstre for 0</li>
                <li><strong>Absoluttverdi:</strong> Avstanden fra 0 (alltid positiv)</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk tallinjen',
          description: 'Plasser tall på tallinjen.',
          initialCommands: [
            'A = (3, 0)',
            'B = (-2, 0)',
            'C = (0, 0)',
            'D = (5, 0)',
            'E = (-4, 0)',
            'ZoomIn[-6, -3, 7, 3]',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Lag en følge med de 10 første trekanttallene (1, 3, 6, 10, ...)',
        'Definer to variabler a og b, og beregn summen, produktet og differansen',
        'Lag en glider fra 1 til 20 og vis tallet opphøyd i andre',
        'Plasser tallene -5, -2, 0, 3, 7 på tallinjen',
      ],
    },
    summary: [
      'Følge() lager tallmønstre',
      'Variabler defineres med = (f.eks. a = 5)',
      'Glider() gir interaktive variabler',
      'sqrt() for kvadratrot, ^ for potens',
      'Tallinjen viser tall fra negativ til positiv',
    ],
    commands: [
      { command: 'a = 5', description: 'Definerer en variabel', example: 'lengde = 10' },
      { command: 'Følge(uttrykk, n, start, slutt)', description: 'Lager en tallrekke', example: 'Følge(n^2, n, 1, 10)' },
      { command: 'Glider(min, max, steg)', description: 'Lager en interaktiv glider', example: 'n = Glider(1, 10, 1)' },
      { command: 'abs(x)', description: 'Absoluttverdien |x| av x', example: 'abs(-5) = 5' },
      { command: 'sqrt(x)', description: 'Kvadratroten √x av x', example: 'sqrt(16) = 4' },
      { command: 'x^2', description: 'x opphøyd i andre (x²)', example: '5^2 = 25' },
    ],
  },

  // 8. klasse - Kapittel 5: Brøk, prosent og desimaltall
  '8-brok-prosent': {
    introduction: (
      <p className="text-lg">
        Brøk, prosent og desimaltall er forskjellige måter å skrive det samme på.
        I dette kapittelet lærer du hvordan disse henger sammen og hvordan du kan
        visualisere dem i GeoGebra.
      </p>
    ),
    sections: [
      {
        title: 'Hva er brøk?',
        content: (
          <div className="space-y-4">
            <p>
              En brøk viser en del av en helhet. Telleren (øverst) viser hvor mange
              deler vi har, og nevneren (nederst) viser hvor mange like deler helheten
              er delt i.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
              <BlockMath>{"\\frac{3}{4} = \\text{3 av 4 like deler}"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Teller</h4>
                <p className="text-sm">Antall deler vi har</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Nevner</h4>
                <p className="text-sm">Antall deler helheten er delt i</p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Visualiser brøk',
          description: 'Se brøk som del av en sirkel.',
          appName: 'classic',
          initialCommands: [
            'teller = 3',
            'nevner = 4',
            'sirkel = Sirkel((0,0), 2)',
            'vinkel = (teller/nevner) * 2 * pi',
            'A = (2, 0)',
            'B = (2*cos(vinkel), 2*sin(vinkel))',
            'sektor = Sirkelsektor((0,0), A, B)',
            'ZoomIn[-4, -4, 4, 4]',
          ],
        },
      },
      {
        title: 'Brøk og desimaltall',
        content: (
          <div className="space-y-4">
            <p>
              Brøker kan skrives om til desimaltall ved å dele telleren på nevneren.
            </p>
            <div className="space-y-2">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <BlockMath>{"\\frac{1}{2} = 1 \\div 2 = 0.5"}</BlockMath>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <BlockMath>{"\\frac{3}{4} = 3 \\div 4 = 0.75"}</BlockMath>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <BlockMath>{"\\frac{1}{3} = 1 \\div 3 = 0.333..."}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra:</h4>
              <code className="text-blue-600 block">desimal = 3/4</code>
              <p className="text-sm text-muted-foreground mt-1">Gir 0.75</p>
            </div>
          </div>
        ),
      },
      {
        title: 'Prosent',
        content: (
          <div className="space-y-4">
            <p>
              Prosent betyr «per hundre». 50% betyr 50 av 100, altså halvparten.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
              <BlockMath>{"\\text{prosent} = \\frac{\\text{del}}{\\text{helhet}} \\times 100"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted rounded-lg text-center">
                <h4 className="font-semibold">25%</h4>
                <p className="text-sm"><InlineMath>{"= \\frac{1}{4} = 0.25"}</InlineMath></p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <h4 className="font-semibold">50%</h4>
                <p className="text-sm"><InlineMath>{"= \\frac{1}{2} = 0.5"}</InlineMath></p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <h4 className="font-semibold">75%</h4>
                <p className="text-sm"><InlineMath>{"= \\frac{3}{4} = 0.75"}</InlineMath></p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Prosent av en verdi',
          description: 'Beregn prosent med en glider.',
          appName: 'classic',
          initialCommands: [
            'verdi = 200',
            'prosent = Slider(0, 100, 1)',
            'resultat = verdi * prosent / 100',
            'Text(prosent + "% av " + verdi + " = " + resultat, (1, 5))',
            'ZoomIn[-2, -2, 10, 8]',
          ],
        },
      },
      {
        title: 'Omregning',
        content: (
          <div className="space-y-4">
            <p>
              Du kan regne om mellom brøk, desimaltall og prosent:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Brøk</th>
                    <th className="p-2 text-left">Desimaltall</th>
                    <th className="p-2 text-left">Prosent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2"><InlineMath>{"\\frac{1}{4}"}</InlineMath></td>
                    <td className="p-2">0.25</td>
                    <td className="p-2">25%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><InlineMath>{"\\frac{1}{2}"}</InlineMath></td>
                    <td className="p-2">0.5</td>
                    <td className="p-2">50%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><InlineMath>{"\\frac{3}{4}"}</InlineMath></td>
                    <td className="p-2">0.75</td>
                    <td className="p-2">75%</td>
                  </tr>
                  <tr>
                    <td className="p-2"><InlineMath>{"\\frac{1}{5}"}</InlineMath></td>
                    <td className="p-2">0.2</td>
                    <td className="p-2">20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Skriv 3/5 som desimaltall i GeoGebra',
        'Beregn 30% av 150',
        'Lag en visualisering av brøken 2/3 som en sektor av en sirkel',
        'Finn ut hvor mange prosent 45 er av 180',
        'Lag en glider som viser ulike brøker visuelt',
      ],
    },
    summary: [
      'Brøk = teller/nevner',
      'Desimaltall = teller ÷ nevner',
      'Prosent = (del/helhet) × 100',
      '1/2 = 0.5 = 50%',
      '1/4 = 0.25 = 25%',
    ],
    commands: [
      { command: 'a/b', description: 'Beregner brøk som desimaltall', example: '3/4 gir 0.75' },
      { command: 'verdi * p / 100', description: 'Beregner p prosent av verdi', example: '200 * 25 / 100 = 50' },
      { command: 'CircularSector()', description: 'Lager en sirkelsektor', example: 'CircularSector(sirkel, 0°, 90°)' },
    ],
  },

  // 8. klasse - Kapittel 6: Negative tall
  '8-negative-tall': {
    introduction: (
      <p className="text-lg">
        Negative tall er tall som er mindre enn null. De brukes blant annet for
        temperaturer under null, gjeld og høyder under havnivå. I GeoGebra kan
        vi visualisere negative tall på tallinjen.
      </p>
    ),
    sections: [
      {
        title: 'Tallinjen',
        content: (
          <div className="space-y-4">
            <p>
              På tallinjen ligger positive tall til høyre for 0, og negative tall
              til venstre for 0.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-center font-mono">
                ... -3 — -2 — -1 — 0 — 1 — 2 — 3 ...
              </p>
              <p className="text-center text-sm text-muted-foreground mt-2">
                ← Mindre | Større →
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Viktig:</h4>
              <ul className="text-sm space-y-1">
                <li>Jo lenger til venstre, jo mindre er tallet</li>
                <li>-5 er mindre enn -2</li>
                <li>Alle negative tall er mindre enn alle positive tall</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk tallinjen',
          description: 'Se positive og negative tall på tallinjen.',
          appName: 'classic',
          initialCommands: [
            'A = (-3, 0)',
            'B = (2, 0)',
            'C = (-1, 0)',
            'ZoomIn[-6, -2, 6, 2]',
          ],
        },
      },
      {
        title: 'Addisjon med negative tall',
        content: (
          <div className="space-y-4">
            <p>
              Når vi legger til et negativt tall, beveger vi oss til venstre på tallinjen.
            </p>
            <div className="space-y-2">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <BlockMath>{"5 + (-3) = 5 - 3 = 2"}</BlockMath>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <BlockMath>{"-2 + 4 = 2"}</BlockMath>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <BlockMath>{"-3 + (-2) = -5"}</BlockMath>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Subtraksjon med negative tall',
        content: (
          <div className="space-y-4">
            <p>
              Å trekke fra et negativt tall er det samme som å legge til et positivt tall.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Huskeregel:</h4>
              <BlockMath>{"a - (-b) = a + b"}</BlockMath>
              <p className="text-sm mt-2">Minus og minus blir pluss!</p>
            </div>
            <div className="space-y-2 mt-4">
              <div className="p-4 bg-muted rounded-lg">
                <BlockMath>{"5 - (-3) = 5 + 3 = 8"}</BlockMath>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <BlockMath>{"-2 - (-4) = -2 + 4 = 2"}</BlockMath>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Multiplikasjon med negative tall',
        content: (
          <div className="space-y-4">
            <p>Regler for multiplikasjon med negative tall:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Positiv × Positiv = Positiv</h4>
                <p className="text-sm"><InlineMath>{"3 \\times 4 = 12"}</InlineMath></p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Positiv × Negativ = Negativ</h4>
                <p className="text-sm"><InlineMath>{"3 \\times (-4) = -12"}</InlineMath></p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Negativ × Positiv = Negativ</h4>
                <p className="text-sm"><InlineMath>{"(-3) \\times 4 = -12"}</InlineMath></p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Negativ × Negativ = Positiv</h4>
                <p className="text-sm"><InlineMath>{"(-3) \\times (-4) = 12"}</InlineMath></p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Test fortegnsreglene',
          description: 'Prøv ulike kombinasjoner.',
          appName: 'classic',
          initialCommands: [
            'a = -3',
            'b = 4',
            'produkt = a * b',
            'Text("a = " + a, (-4, 3))',
            'Text("b = " + b, (-4, 2))',
            'Text("a × b = " + produkt, (-4, 1))',
            'ZoomIn[-6, -2, 6, 5]',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Plasser tallene -4, -1, 2, 5 på tallinjen',
        'Beregn 7 + (-3)',
        'Beregn -5 - (-8)',
        'Beregn (-6) × (-2)',
        'Lag en glider for et negativt tall og vis det på tallinjen',
      ],
    },
    summary: [
      'Negative tall ligger til venstre for 0 på tallinjen',
      'a + (-b) = a - b',
      'a - (-b) = a + b (minus minus blir pluss)',
      'Negativ × Negativ = Positiv',
      'Negativ × Positiv = Negativ',
    ],
    commands: [
      { command: '-5', description: 'Negativt tall', example: 'a = -5' },
      { command: 'abs(x)', description: 'Absoluttverdi av x', example: 'abs(-7) = 7' },
      { command: 'sign(x)', description: 'Fortegnet til x (-1, 0 eller 1)', example: 'sign(-5) = -1' },
    ],
  },

  // 10. klasse - Kapittel 1: Funksjoner og grafer
  '10-funksjoner': {
    introduction: (
      <p className="text-lg">
        Funksjoner beskriver sammenhenger mellom størrelser. Du vil lære om lineære funksjoner,
        proporsjonalitet og hvordan man tegner og tolker grafer i GeoGebra.
      </p>
    ),
    sections: [
      {
        title: 'Hva er en funksjon?',
        content: (
          <div className="space-y-4">
            <p>
              En funksjon er en sammenheng mellom to størrelser, der hver x-verdi gir
              nøyaktig én y-verdi.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"y = f(x)"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                Vi sier at &quot;y er en funksjon av x&quot;
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Innverdi (x)</h4>
                <p className="text-muted-foreground">
                  Verdien vi setter inn i funksjonen. Også kalt uavhengig variabel.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Utverdi (y)</h4>
                <p className="text-muted-foreground">
                  Verdien vi får ut av funksjonen. Også kalt avhengig variabel.
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk funksjoner',
          description: 'Se hvordan grafen til en funksjon vises.',
          appName: 'classic',
          initialCommands: [
            'f(x) = 2*x + 1',
            'g(x) = -x + 3',
            'h(x) = 0.5*x - 2',
          ],
        },
      },
      {
        title: 'Lineære funksjoner',
        content: (
          <div className="space-y-4">
            <p>
              En lineær funksjon har en graf som er en rett linje. Den kan skrives som:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"f(x) = ax + b"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Stigningstall (a)</h4>
                <p className="text-sm text-muted-foreground">
                  Hvor mye y endrer seg når x øker med 1.
                </p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>a {'>'} 0: Grafen stiger</li>
                  <li>a {'<'} 0: Grafen synker</li>
                  <li>a = 0: Grafen er horisontal</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Konstantledd (b)</h4>
                <p className="text-sm text-muted-foreground">
                  Skjæring med y-aksen (der x = 0).
                </p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>b {'>'} 0: Grafen krysser over origo</li>
                  <li>b {'<'} 0: Grafen krysser under origo</li>
                  <li>b = 0: Grafen går gjennom origo</li>
                </ul>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Eksperimenter med lineære funksjoner',
          description: 'Endre verdiene til a og b for å se hvordan grafen endres.',
          appName: 'classic',
          initialCommands: [
            'a = Slider(-5, 5, 0.1)',
            'b = Slider(-5, 5, 0.1)',
            'f(x) = a*x + b',
          ],
        },
      },
      {
        title: 'Proporsjonalitet',
        content: (
          <div className="space-y-4">
            <p>
              To størrelser er proporsjonale hvis de alltid endrer seg i samme forhold.
              Grafen går gjennom origo (0, 0).
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"y = k \\cdot x"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                k er proporsjonalitetskonstanten
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Kjøp av epler</h4>
              <p className="text-sm">
                Hvis ett eple koster 5 kr, så koster x epler: <InlineMath>y = 5x</InlineMath> kr
              </p>
              <ul className="text-sm mt-2 space-y-1">
                <li>1 eple: 5 kr</li>
                <li>2 epler: 10 kr</li>
                <li>3 epler: 15 kr</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk proporsjonalitet',
          description: 'Se hvordan proporsjonale sammenhenger alltid går gjennom origo.',
          appName: 'classic',
          initialCommands: [
            'k = Slider(0.1, 5, 0.1)',
            'f(x) = k*x',
            'A = (1, f(1))',
            'B = (2, f(2))',
            'C = (3, f(3))',
          ],
        },
      },
      {
        title: 'Omvendt proporsjonalitet',
        content: (
          <div className="space-y-4">
            <p>
              Ved omvendt proporsjonalitet blir produktet av to størrelser alltid det samme.
              Når den ene øker, minker den andre.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"y = \\frac{k}{x}"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                k er konstanten (x · y = k)
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Fart og tid</h4>
              <p className="text-sm">
                Hvis du skal kjøre 120 km:
              </p>
              <ul className="text-sm mt-2 space-y-1">
                <li>60 km/t: 2 timer</li>
                <li>80 km/t: 1,5 timer</li>
                <li>120 km/t: 1 time</li>
              </ul>
              <p className="text-sm mt-2">
                <InlineMath>fart \cdot tid = 120</InlineMath> (konstant)
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk omvendt proporsjonalitet',
          description: 'Se hvordan grafen ved omvendt proporsjonalitet ser ut (hyperbel).',
          appName: 'classic',
          initialCommands: [
            'k = Slider(1, 20, 1)',
            'f(x) = k/x',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Tegn grafen til f(x) = 3x - 2 og finn skjæringen med y-aksen',
        'Lag en lineær funksjon med stigningstall -2 som går gjennom punktet (0, 5)',
        'Undersøk funksjonen f(x) = 2x. Er dette en proporsjonal sammenheng?',
        'Tegn grafen til y = 12/x og finn y-verdien når x = 3',
        'Lag to glidere a og b, og utforsk hvordan f(x) = ax + b endres',
      ],
    },
    summary: [
      'Funksjon() lager funksjoner i GeoGebra',
      'Lineære funksjoner har form f(x) = ax + b',
      'Stigningstall a forteller hvor bratt grafen er',
      'Konstantledd b er skjæring med y-aksen',
      'Proporsjonalitet: y = kx (går gjennom origo)',
      'Omvendt proporsjonalitet: y = k/x (hyperbel)',
    ],
    commands: [
      { command: 'f(x) = ax + b', description: 'Definerer en lineær funksjon', example: 'f(x) = 2*x + 3' },
      { command: 'Funksjon(uttrykk, start, slutt)', description: 'Funksjon på et intervall', example: 'Funksjon(x^2, -2, 2)' },
      { command: 'Glider(min, max, steg)', description: 'Lager en glider for parametere', example: 'a = Glider(-5, 5, 0.1)' },
      { command: 'f(verdi)', description: 'Beregner funksjonsverdien', example: 'f(3) gir y-verdien når x = 3' },
    ],
  },

  // 10. klasse - Kapittel 2: Andregradsfunksjoner
  '10-andregradsfunksjoner': {
    introduction: (
      <p className="text-lg">
        Andregradsfunksjoner har grafer som er parabler. Du vil lære om toppunkt,
        nullpunkter, symmetri og hvordan man analyserer parabler i GeoGebra.
      </p>
    ),
    sections: [
      {
        title: 'Hva er en andregradsfunksjon?',
        content: (
          <div className="space-y-4">
            <p>
              En andregradsfunksjon er en funksjon der høyeste potens av x er 2.
              Grafen er alltid en parabel.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"f(x) = ax^2 + bx + c"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                a, b og c er konstanter, der a ≠ 0
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">a {'>'} 0</h4>
                <p className="text-sm text-muted-foreground">
                  Parabelen åpner oppover (smilende munn)
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">a {'<'} 0</h4>
                <p className="text-sm text-muted-foreground">
                  Parabelen åpner nedover (sur munn)
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk andregradsfunksjoner',
          description: 'Se hvordan parameterne påvirker parabelens form.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^2',
            'g(x) = -x^2',
            'h(x) = 2*x^2',
            'i(x) = 0.5*x^2',
          ],
        },
      },
      {
        title: 'Toppunkt',
        content: (
          <div className="space-y-4">
            <p>
              Toppunktet er det høyeste eller laveste punktet på parabelen.
              Det ligger på symmetrilinjen.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Minimum</h4>
                <p className="text-sm text-muted-foreground">
                  Når a {'>'} 0: Toppunktet er det laveste punktet
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Maksimum</h4>
                <p className="text-sm text-muted-foreground">
                  Når a {'<'} 0: Toppunktet er det høyeste punktet
                </p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg mt-4">
              <h4 className="font-semibold mb-2">Finn toppunktet:</h4>
              <code className="text-blue-600">Toppunkt(f)</code>
              <p className="text-sm text-muted-foreground mt-2">
                eller <code className="text-blue-600">Ekstremalpunkt(f)</code>
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn toppunkt',
          description: 'GeoGebra kan finne toppunktet automatisk.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^2 - 4*x + 3',
            'T = Vertex(f)',
            'g(x) = -x^2 + 2*x + 3',
            'S = Vertex(g)',
          ],
        },
      },
      {
        title: 'Nullpunkter',
        content: (
          <div className="space-y-4">
            <p>
              Nullpunktene er punktene der grafen skjærer x-aksen (der y = 0).
              En andregradsfunksjon kan ha 0, 1 eller 2 nullpunkter.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">2 nullpunkter</h4>
                <p className="text-sm text-muted-foreground">
                  Grafen krysser x-aksen to steder
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">1 nullpunkt</h4>
                <p className="text-sm text-muted-foreground">
                  Grafen berører x-aksen (toppunkt på x-aksen)
                </p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-bold mb-2">0 nullpunkter</h4>
                <p className="text-sm text-muted-foreground">
                  Grafen berører ikke x-aksen
                </p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg mt-4">
              <h4 className="font-semibold mb-2">Finn nullpunkter:</h4>
              <code className="text-blue-600">Nullpunkt(f)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn nullpunkter',
          description: 'Utforsk funksjoner med ulike antall nullpunkter.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^2 - 4',
            'Root(f)',
            'g(x) = x^2',
            'Root(g)',
          ],
        },
      },
      {
        title: 'Symmetrilinje',
        content: (
          <div className="space-y-4">
            <p>
              Alle parabler er symmetriske om en vertikal linje som går gjennom toppunktet.
              Denne linjen kalles symmetrilinjen.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Symmetrilinjens likning:</h4>
              <BlockMath>{"x = x_T"}</BlockMath>
              <p className="text-sm text-muted-foreground">
                der <InlineMath>x_T</InlineMath> er x-koordinaten til toppunktet
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg mt-4">
              <p className="text-sm">
                <strong>Eksempel:</strong> Hvis toppunktet er (2, -1),
                er symmetrilinjen x = 2
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk symmetri',
          description: 'Se symmetrilinjen i en parabel.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^2 - 4*x + 3',
            'T = Vertex(f)',
            'x = x(T)',
          ],
        },
      },
      {
        title: 'Forskjellige former',
        content: (
          <div className="space-y-4">
            <p>
              Andregradsfunksjoner kan skrives på flere måter:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Standardform</h4>
                <BlockMath>{"f(x) = ax^2 + bx + c"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  c er skjæringen med y-aksen
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Toppunktsform</h4>
                <BlockMath>{"f(x) = a(x - h)^2 + k"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  Toppunkt: (h, k)
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Faktorisert form</h4>
                <BlockMath>{"f(x) = a(x - x_1)(x - x_2)"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  Nullpunkter: <InlineMath>x_1</InlineMath> og <InlineMath>x_2</InlineMath>
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Tegn f(x) = x² - 2x - 3 og finn toppunktet',
        'Finn nullpunktene til g(x) = x² - 5x + 6',
        'Lag en andregradsfunksjon som åpner nedover og har toppunkt i (1, 4)',
        'Tegn h(x) = -x² + 4 og finn symmetrilinjen',
        'Eksperimenter med a, b og c i f(x) = ax² + bx + c ved hjelp av glidere',
      ],
    },
    summary: [
      'Andregradsfunksjon: f(x) = ax² + bx + c',
      'Grafen er en parabel',
      'Toppunkt() finner toppunktet',
      'Nullpunkt() finner nullpunktene',
      'Symmetrilinje går gjennom toppunktet',
      'a > 0: åpner opp, a < 0: åpner ned',
    ],
    commands: [
      { command: 'f(x) = ax^2 + bx + c', description: 'Andregradsfunksjon', example: 'f(x) = x^2 - 4*x + 3' },
      { command: 'Toppunkt(f)', description: 'Finner toppunktet', example: 'T = Toppunkt(f)' },
      { command: 'Nullpunkt(f)', description: 'Finner nullpunktene', example: 'N = Nullpunkt(f)' },
      { command: 'Ekstremalpunkt(f)', description: 'Finner ekstremalpunkt (toppunkt)', example: 'E = Ekstremalpunkt(f)' },
    ],
  },

  // 10. klasse - Kapittel 3: Geometri og måling
  '10-geometri': {
    introduction: (
      <p className="text-lg">
        I dette kapittelet lærer du å beregne areal, volum og overflate av ulike figurer
        og legemer. GeoGebra hjelper deg å visualisere og forstå geometriske sammenhenger.
      </p>
    ),
    sections: [
      {
        title: 'Areal av flater',
        content: (
          <div className="space-y-4">
            <p>
              Arealet måler hvor stor en flat figur er. Vi måler areal i kvadratenheter
              som cm², m² eller km².
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Rektangel</h4>
                <BlockMath>{"A = l \\cdot b"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  l = lengde, b = bredde
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Trekant</h4>
                <BlockMath>{"A = \\frac{g \\cdot h}{2}"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  g = grunnlinje, h = høyde
                </p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Sirkel</h4>
                <BlockMath>{"A = \\pi r^2"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  r = radius
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Parallellogram</h4>
                <BlockMath>{"A = g \\cdot h"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  g = grunnlinje, h = høyde
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn areal',
          description: 'GeoGebra kan beregne arealet av figurer automatisk.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (4, 0)',
            'C = (4, 3)',
            'D = (0, 3)',
            'poly1 = Polygon(A, B, C, D)',
            'Area(poly1)',
          ],
        },
      },
      {
        title: 'Volum av legemer',
        content: (
          <div className="space-y-4">
            <p>
              Volumet måler hvor mye plass et legeme tar. Vi måler volum i kubikkenheter
              som cm³, m³ eller liter (1 liter = 1 dm³).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Kube/Boks</h4>
                <BlockMath>{"V = l \\cdot b \\cdot h"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  l = lengde, b = bredde, h = høyde
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Sylinder</h4>
                <BlockMath>{"V = \\pi r^2 h"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  r = radius, h = høyde
                </p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Kule</h4>
                <BlockMath>{"V = \\frac{4}{3}\\pi r^3"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  r = radius
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Pyramide/Kjegle</h4>
                <BlockMath>{"V = \\frac{1}{3}Gh"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  G = grunnflate, h = høyde
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn volum',
          description: 'Utforsk volum av forskjellige legemer i 3D.',
          appName: '3d',
          initialCommands: [
            'A = (0, 0, 0)',
            'B = (3, 0, 0)',
            'C = (3, 3, 0)',
            'D = (0, 3, 0)',
            'E = (0, 0, 4)',
            'prisme = Prism(Polygon(A, B, C, D), E)',
            'Volume(prisme)',
          ],
        },
      },
      {
        title: 'Overflate',
        content: (
          <div className="space-y-4">
            <p>
              Overflaten er summen av alle flatene på et legeme. Vi måler overflate
              i kvadratenheter, akkurat som areal.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-3">Eksempel: Boks</h4>
              <p className="text-sm mb-2">
                En boks har 6 flater (topp, bunn og 4 sider).
              </p>
              <BlockMath>{"O = 2lb + 2lh + 2bh"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                eller: <InlineMath>O = 2(lb + lh + bh)</InlineMath>
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-3">Eksempel: Sylinder</h4>
              <BlockMath>{"O = 2\\pi rh + 2\\pi r^2"}</BlockMath>
              <p className="text-sm text-muted-foreground">
                Mantel + topp + bunn
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn overflate',
          description: 'GeoGebra kan beregne overflate av 3D-objekter.',
          appName: '3d',
          initialCommands: [
            'kube = Cube((0,0,0), (2,0,0))',
            'Surface(kube)',
          ],
        },
      },
      {
        title: 'Pytagoras\' setning',
        content: (
          <div className="space-y-4">
            <p>
              I en rettvinklet trekant gjelder Pytagoras&apos; setning:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"a^2 + b^2 = c^2"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                a og b er kateter, c er hypotenus (lengste siden)
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Bruk av Pytagoras:</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Finn hypotenus:</strong> <InlineMath>{"c = \\sqrt{a^2 + b^2}"}</InlineMath></li>
                <li><strong>Finn katet:</strong> <InlineMath>{"a = \\sqrt{c^2 - b^2}"}</InlineMath></li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk Pytagoras',
          description: 'Visualiser Pytagoras\' setning.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (3, 0)',
            'C = (0, 4)',
            'trekant = Polygon(A, B, C)',
            'a = Segment(B, C)',
            'b = Segment(A, C)',
            'c = Segment(A, B)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Lag en trekant og beregn arealet med Areal()',
        'Tegn en sirkel med radius 5 og finn arealet',
        'Lag en boks med lengde 4, bredde 3 og høyde 2, og beregn volumet',
        'Tegn en rettvinklet trekant med kateter 3 og 4, og finn hypotenusen',
        'Lag en sylinder i 3D og beregn både volum og overflate',
      ],
    },
    summary: [
      'Areal() beregner areal av figurer',
      'Volum() beregner volum av legemer',
      'Overflate() beregner overflate',
      'Pytagoras: a² + b² = c² i rettvinklede trekanter',
      'GeoGebra 3D kan visualisere romgeometri',
    ],
    commands: [
      { command: 'Areal(objekt)', description: 'Beregner areal', example: 'Areal(polygon)' },
      { command: 'Volum(objekt)', description: 'Beregner volum', example: 'Volum(kube)' },
      { command: 'Overflate(objekt)', description: 'Beregner overflate', example: 'Overflate(sylinder)' },
      { command: 'Mangekant(A, B, C, ...)', description: 'Lager en mangekant', example: 'Mangekant(A, B, C)' },
      { command: 'Sirkel(senter, radius)', description: 'Lager en sirkel', example: 'Sirkel((0,0), 3)' },
    ],
  },

  // 10. klasse - Kapittel 4: Sannsynlighet
  '10-sannsynlighet': {
    introduction: (
      <p className="text-lg">
        Sannsynlighet handler om hvor trolig det er at noe skjer. GeoGebra kan hjelpe
        deg å simulere tilfeldige forsøk og beregne sannsynligheter.
      </p>
    ),
    sections: [
      {
        title: 'Grunnleggende sannsynlighet',
        content: (
          <div className="space-y-4">
            <p>
              Sannsynligheten for en hendelse beregnes som:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"P(A) = \\frac{\\text{gunstige utfall}}{\\text{mulige utfall}}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Terningkast</h4>
              <p className="text-sm mb-2">
                Hva er sannsynligheten for å slå 6 på en terning?
              </p>
              <ul className="text-sm space-y-1">
                <li>Gunstige utfall: 1 (bare sekser)</li>
                <li>Mulige utfall: 6 (tallene 1, 2, 3, 4, 5, 6)</li>
                <li>Sannsynlighet: <InlineMath>{"P(6) = \\frac{1}{6} \\approx 0.167"}</InlineMath></li>
              </ul>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Viktig:</h4>
              <ul className="text-sm space-y-1">
                <li>Sannsynlighet er alltid mellom 0 og 1</li>
                <li>0 = umulig, 1 = sikker</li>
                <li>Kan skrives som brøk, desimaltall eller prosent</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: 'Simulering i GeoGebra',
        content: (
          <div className="space-y-4">
            <p>
              Vi kan simulere tilfeldige forsøk for å undersøke sannsynligheter.
              GeoGebra har funksjoner for å generere tilfeldige tall.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Terningkast:</h4>
              <code className="text-blue-600">terning = RandomBetween(1, 6)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Gir et tilfeldig heltall fra 1 til 6
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Myntkast:</h4>
              <code className="text-blue-600">mynt = RandomBetween(0, 1)</code>
              <p className="text-sm text-muted-foreground mt-2">
                0 = mynt, 1 = kron
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Simuler terningkast',
          description: 'Trykk F9 for å kaste terningen på nytt.',
          appName: 'classic',
          initialCommands: [
            'terning = RandomBetween(1, 6)',
            'Text("Terningkast: " + terning, (1, 5))',
          ],
        },
      },
      {
        title: 'Relativ frekvens',
        content: (
          <div className="space-y-4">
            <p>
              Relativ frekvens er antall ganger noe skjer delt på totalt antall forsøk.
              Ved mange forsøk nærmer relativ frekvens seg den teoretiske sannsynligheten.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\text{Relativ frekvens} = \\frac{\\text{antall suksesser}}{\\text{antall forsøk}}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Du kaster en mynt 100 ganger og får kron 47 ganger.
              </p>
              <p className="text-sm mt-2">
                Relativ frekvens for kron: <InlineMath>{"\\frac{47}{100} = 0.47"}</InlineMath>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Teoretisk sannsynlighet: 0.5
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Mange forsøk',
        content: (
          <div className="space-y-4">
            <p>
              Vi kan simulere mange forsøk samtidig ved å bruke Sequence().
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">100 terningkast:</h4>
              <code className="text-blue-600 block">kast = Sequence(RandomBetween(1, 6), i, 1, 100)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Lager en liste med 100 tilfeldige terningkast
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Tell antall seksere:</h4>
              <code className="text-blue-600 block">seksere = Lengde(BeholdIf(x == 6, x, kast))</code>
              <p className="text-sm text-muted-foreground mt-2">
                Teller hvor mange seksere som kom
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Simuler mange forsøk',
          description: 'Kast terningen 100 ganger og se fordelingen.',
          appName: 'classic',
          initialCommands: [
            'n = 100',
            'kast = Sequence(RandomBetween(1, 6), i, 1, n)',
            'antall = Sequence(Length(KeepIf(x == k, x, kast)), k, 1, 6)',
            'BarChart(antall, 1)',
          ],
        },
      },
      {
        title: 'Sannsynlighetstre',
        content: (
          <div className="space-y-4">
            <p>
              Ved sammensatte forsøk (flere hendelser etter hverandre) bruker vi
              sannsynlighetstre for å finne alle mulige utfall.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: To myntkast</h4>
              <ul className="text-sm space-y-1">
                <li>Mynt-Mynt (MM)</li>
                <li>Mynt-Kron (MK)</li>
                <li>Kron-Mynt (KM)</li>
                <li>Kron-Kron (KK)</li>
              </ul>
              <p className="text-sm mt-2">
                4 mulige utfall, alle like sannsynlige: <InlineMath>{"P = \\frac{1}{4} = 0.25"}</InlineMath>
              </p>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Simuler ett terningkast med RandomBetween(1, 6)',
        'Lag en simulering av 50 myntkast',
        'Beregn den relative frekvensen for å få 6 på 200 terningkast',
        'Lag et søylediagram som viser fordelingen av 100 terningkast',
        'Simuler to terningkast og finn sannsynligheten for å få summen 7',
      ],
    },
    summary: [
      'P(A) = gunstige utfall / mulige utfall',
      'RandomBetween(a, b) gir tilfeldig tall fra a til b',
      'Sequence() kan simulere mange forsøk',
      'Relativ frekvens nærmer seg teoretisk sannsynlighet',
      'Sannsynlighet er mellom 0 (umulig) og 1 (sikker)',
    ],
    commands: [
      { command: 'RandomBetween(a, b)', description: 'Tilfeldig heltall fra a til b', example: 'terning = RandomBetween(1, 6)' },
      { command: 'Følge(uttrykk, i, start, slutt)', description: 'Lager en sekvens', example: 'Følge(RandomBetween(1,6), i, 1, 100)' },
      { command: 'BarChart(liste, 1)', description: 'Lager søylediagram', example: 'BarChart(kast, 1)' },
      { command: 'Lengde(liste)', description: 'Antall elementer i liste', example: 'Lengde(kast)' },
    ],
  },

  // 10. klasse - Kapittel 5: Økonomi
  '10-okonomi': {
    introduction: (
      <p className="text-lg">
        Økonomi handler om penger, renter, lån og sparing. I dette kapittelet lærer du
        hvordan renter beregnes og hvordan du kan bruke GeoGebra til å utforske
        økonomiske problemstillinger.
      </p>
    ),
    sections: [
      {
        title: 'Renter',
        content: (
          <div className="space-y-4">
            <p>
              Når du setter penger i banken, får du renter. Renten er en prosent av
              beløpet du har spart.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Enkel rente:</h4>
              <BlockMath>{"\\text{Rente} = \\text{Kapital} \\times \\text{Rentesats}"}</BlockMath>
              <p className="text-sm mt-2">
                Hvis du har 10 000 kr og rentesatsen er 3%, får du:
              </p>
              <BlockMath>{"10000 \\times 0.03 = 300 \\text{ kr i rente}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn rente',
          description: 'Se hvordan renten avhenger av kapital og rentesats.',
          appName: 'classic',
          initialCommands: [
            'kapital = 10000',
            'rentesats = 0.03',
            'rente = kapital * rentesats',
            'Text("Kapital: " + kapital + " kr", (1, 5))',
            'Text("Rente: " + rente + " kr", (1, 4))',
          ],
        },
      },
      {
        title: 'Rentesrente',
        content: (
          <div className="space-y-4">
            <p>
              Med rentesrente får du også renter av rentene. Dette kalles
              eksponentiell vekst og gir kraftig økning over tid.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Formel for rentesrente:</h4>
              <BlockMath>{"K_n = K_0 \\times (1 + r)^n"}</BlockMath>
              <ul className="text-sm mt-2 space-y-1">
                <li><InlineMath>{"K_n"}</InlineMath> = Sluttkapital</li>
                <li><InlineMath>{"K_0"}</InlineMath> = Startkapital</li>
                <li><InlineMath>{"r"}</InlineMath> = Rentesats (som desimaltall)</li>
                <li><InlineMath>{"n"}</InlineMath> = Antall år</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Vekstfaktor:</h4>
              <p className="text-sm">
                <InlineMath>{"1 + r"}</InlineMath> kalles vekstfaktoren.
                Med 5% rente er vekstfaktoren 1.05.
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Rentesrente over tid',
          description: 'Se hvordan kapitalen vokser med rentesrente.',
          appName: 'classic',
          initialCommands: [
            'K0 = 10000',
            'r = 0.05',
            'K(n) = K0 * (1 + r)^n',
            'SetCoordinateSystem(0, 20, 0, 30000)',
          ],
        },
      },
      {
        title: 'Lån og nedbetaling',
        content: (
          <div className="space-y-4">
            <p>
              Når du låner penger, må du betale tilbake lånet pluss renter.
              Terminbeløpet er det du betaler hver måned eller hvert år.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Annuitetslån</h4>
                <p className="text-sm">
                  Like store terminbeløp. Renteandelen synker, avdragene øker.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Serielån</h4>
                <p className="text-sm">
                  Like store avdrag. Terminbeløpet synker over tid.
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Budsjett',
        content: (
          <div className="space-y-4">
            <p>
              Et budsjett viser planlagte inntekter og utgifter. Det hjelper deg
              å holde oversikt over økonomien.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Viktige begreper:</h4>
              <ul className="text-sm space-y-1">
                <li><strong>Inntekter:</strong> Penger du får inn (lønn, lommepenger)</li>
                <li><strong>Utgifter:</strong> Penger du bruker (mat, klær, sparing)</li>
                <li><strong>Overskudd:</strong> Inntekter - Utgifter {'>'} 0</li>
                <li><strong>Underskudd:</strong> Inntekter - Utgifter {'<'} 0</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Enkelt budsjett',
          description: 'Visualiser inntekter og utgifter.',
          appName: 'classic',
          initialCommands: [
            'inntekt = 5000',
            'mat = 1500',
            'transport = 500',
            'sparing = 1000',
            'annet = 1000',
            'rest = inntekt - mat - transport - sparing - annet',
            'Text("Rest: " + rest + " kr", (1, 5))',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Beregn renten på 15 000 kr med 4% rente',
        'Hvor mye blir 20 000 kr etter 5 år med 3% rentesrente?',
        'Lag en graf som viser veksten av 10 000 kr over 20 år med 5% rente',
        'Lag et enkelt budsjett med inntekt 8000 kr og fordel utgiftene',
        'Sammenlign veksten med 3% og 6% rente i samme diagram',
      ],
    },
    summary: [
      'Rente = Kapital × Rentesats',
      'Rentesrente: Kₙ = K₀ × (1 + r)ⁿ',
      'Vekstfaktor = 1 + rentesats',
      'Budsjett = Inntekter - Utgifter',
    ],
    commands: [
      { command: 'K0 * (1 + r)^n', description: 'Rentesrente etter n år', example: '10000 * 1.05^10' },
      { command: 'f(n) = K0 * (1 + r)^n', description: 'Funksjon for kapitalvekst', example: 'K(n) = 10000 * 1.03^n' },
    ],
  },

  // 10. klasse - Kapittel 6: Kombinatorikk
  '10-kombinatorikk': {
    introduction: (
      <p className="text-lg">
        Kombinatorikk handler om å telle antall muligheter på en systematisk måte.
        Du lærer om multiplikasjonsprinsippet og hvordan du kan finne antall
        mulige utfall i ulike situasjoner.
      </p>
    ),
    sections: [
      {
        title: 'Multiplikasjonsprinsippet',
        content: (
          <div className="space-y-4">
            <p>
              Når du skal gjøre flere valg etter hverandre, multipliserer du
              antall muligheter for hvert valg.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Antrekk</h4>
              <p className="text-sm">
                Du har 3 gensere og 4 bukser. Hvor mange antrekk kan du lage?
              </p>
              <BlockMath>{"3 \\times 4 = 12 \\text{ antrekk}"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Generelt:</h4>
              <BlockMath>{"\\text{Totalt antall} = n_1 \\times n_2 \\times n_3 \\times ..."}</BlockMath>
            </div>
          </div>
        ),
      },
      {
        title: 'Valgtre',
        content: (
          <div className="space-y-4">
            <p>
              Et valgtre er en systematisk måte å vise alle mulighetene på.
              Hver forgrening representerer et valg.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Myntkast</h4>
              <p className="text-sm">
                To myntkast gir 4 mulige utfall:
              </p>
              <ul className="text-sm mt-2">
                <li>Mynt-Mynt (MM)</li>
                <li>Mynt-Kron (MK)</li>
                <li>Kron-Mynt (KM)</li>
                <li>Kron-Kron (KK)</li>
              </ul>
              <p className="text-sm mt-2">
                <InlineMath>{"2 \\times 2 = 4"}</InlineMath> muligheter
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Ordnede utvalg',
        content: (
          <div className="space-y-4">
            <p>
              Når rekkefølgen har betydning, kaller vi det et ordnet utvalg
              (permutasjon).
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Paller</h4>
              <p className="text-sm">
                3 personer skal fordeles på gull, sølv og bronse. Hvor mange måter?
              </p>
              <BlockMath>{"3 \\times 2 \\times 1 = 3! = 6 \\text{ måter}"}</BlockMath>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Fakultet (n!):</h4>
              <BlockMath>{"n! = n \\times (n-1) \\times (n-2) \\times ... \\times 2 \\times 1"}</BlockMath>
              <p className="text-sm mt-2">
                <InlineMath>{"5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120"}</InlineMath>
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn fakultet',
          description: 'Bruk GeoGebra til å beregne fakultet.',
          appName: 'classic',
          initialCommands: [
            'n = 5',
            'fakultet = n!',
            'Text("n = " + n, (1, 5))',
            'Text("n! = " + fakultet, (1, 4))',
          ],
        },
      },
      {
        title: 'Kombinasjoner',
        content: (
          <div className="space-y-4">
            <p>
              Når rekkefølgen ikke har betydning, kaller vi det en kombinasjon.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Velge lag</h4>
              <p className="text-sm">
                Du skal velge 2 personer fra en gruppe på 5. Hvor mange måter?
              </p>
              <BlockMath>{"\\binom{5}{2} = \\frac{5!}{2!(5-2)!} = \\frac{5 \\times 4}{2 \\times 1} = 10"}</BlockMath>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Du har 5 skjorter og 3 bukser. Hvor mange antrekk kan du lage?',
        'Hvor mange tresifrede tall kan du lage med sifrene 1, 2, 3, 4, 5?',
        'Beregn 6! i GeoGebra',
        'Tegn et valgtre for tre myntkast',
        'På hvor mange måter kan 4 personer stille seg i kø?',
      ],
    },
    summary: [
      'Multiplikasjonsprinsippet: Total = n₁ × n₂ × ...',
      'Fakultet: n! = n × (n-1) × ... × 2 × 1',
      'Ordnet utvalg: rekkefølgen teller',
      'Kombinasjon: rekkefølgen teller ikke',
    ],
    commands: [
      { command: 'n!', description: 'Beregner fakultet', example: '5! = 120' },
      { command: 'nCr(n, r)', description: 'Beregner kombinasjoner', example: 'nCr(5, 2) = 10' },
      { command: 'nPr(n, r)', description: 'Beregner permutasjoner', example: 'nPr(5, 2) = 20' },
    ],
  },

  // 10. klasse - Kapittel 7: Eksponentiell vekst
  '10-eksponentiell-vekst': {
    introduction: (
      <p className="text-lg">
        Eksponentiell vekst beskriver situasjoner der noe vokser med en fast prosent.
        Dette gjelder for eksempel befolkningsvekst, bakterier og rentesrente.
      </p>
    ),
    sections: [
      {
        title: 'Hva er eksponentiell vekst?',
        content: (
          <div className="space-y-4">
            <p>
              Ved eksponentiell vekst øker mengden med en fast prosent i hver periode.
              Jo større mengden er, jo mer øker den.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Formel:</h4>
              <BlockMath>{"y = a \\cdot b^x"}</BlockMath>
              <ul className="text-sm mt-2 space-y-1">
                <li><InlineMath>{"a"}</InlineMath> = Startverdien</li>
                <li><InlineMath>{"b"}</InlineMath> = Vekstfaktoren</li>
                <li><InlineMath>{"x"}</InlineMath> = Tid (antall perioder)</li>
              </ul>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Vekstfaktor:</h4>
              <ul className="text-sm space-y-1">
                <li>Vekst på 5%: b = 1.05</li>
                <li>Vekst på 10%: b = 1.10</li>
                <li>Nedgang på 3%: b = 0.97</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Eksponentiell vekst',
          description: 'Se hvordan vekstfaktoren påvirker grafen.',
          appName: 'classic',
          initialCommands: [
            'a = 100',
            'b = 1.1',
            'f(x) = a * b^x',
            'SetCoordinateSystem(0, 10, 0, 300)',
          ],
        },
      },
      {
        title: 'Dobling og halvering',
        content: (
          <div className="space-y-4">
            <p>
              Doblingstiden er tiden det tar før mengden er doblet.
              Halveringstiden er tiden det tar før mengden er halvert.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Doblingstid</h4>
                <p className="text-sm">
                  Med 10% vekst tar det ca. 7 år å doble.
                </p>
                <BlockMath>{"1.10^7 \\approx 2"}</BlockMath>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Halveringstid</h4>
                <p className="text-sm">
                  Med 10% nedgang tar det ca. 7 år å halvere.
                </p>
                <BlockMath>{"0.90^7 \\approx 0.5"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Tommelfingerregel:</h4>
              <p className="text-sm">
                Doblingstid ≈ 70 ÷ prosentvekst
              </p>
              <p className="text-sm mt-1">
                Med 7% vekst: 70 ÷ 7 = 10 år til dobling
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Eksponentiell nedgang',
        content: (
          <div className="space-y-4">
            <p>
              Når vekstfaktoren er mindre enn 1, får vi eksponentiell nedgang.
              Mengden avtar med en fast prosent.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Radioaktivt forfall</h4>
              <p className="text-sm">
                Et stoff har halveringstid på 10 år. Start: 100 gram.
              </p>
              <BlockMath>{"y = 100 \\cdot 0.5^{x/10}"}</BlockMath>
              <p className="text-sm mt-2">
                Etter 20 år: <InlineMath>{"100 \\cdot 0.5^2 = 25"}</InlineMath> gram
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Eksponentiell nedgang',
          description: 'Se hvordan mengden avtar over tid.',
          appName: 'classic',
          initialCommands: [
            'start = 100',
            'halveringstid = 10',
            'f(x) = start * 0.5^(x/halveringstid)',
            'SetCoordinateSystem(0, 50, 0, 120)',
          ],
        },
      },
      {
        title: 'Sammenligning med lineær vekst',
        content: (
          <div className="space-y-4">
            <p>
              Lineær vekst øker med et fast tall, eksponentiell vekst øker med en fast prosent.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Lineær vekst</h4>
                <BlockMath>{"y = ax + b"}</BlockMath>
                <p className="text-sm mt-2">Rett linje</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksponentiell vekst</h4>
                <BlockMath>{"y = a \\cdot b^x"}</BlockMath>
                <p className="text-sm mt-2">Kurve som stiger raskere og raskere</p>
              </div>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'En bakteriekultur dobler seg hver time. Start med 100. Hvor mange etter 5 timer?',
        'Tegn grafen til f(x) = 50 · 1.08^x',
        'Et stoff har halveringstid 5 år. Hvor mye er igjen etter 15 år?',
        'Finn doblingstiden for 6% årlig vekst',
        'Sammenlign lineær vekst y = 10x + 100 med eksponentiell y = 100 · 1.1^x',
      ],
    },
    summary: [
      'Eksponentiell vekst: y = a · bˣ',
      'b > 1: vekst, b < 1: nedgang',
      'Vekstfaktor = 1 + prosentvekst',
      'Doblingstid ≈ 70 ÷ prosentvekst',
    ],
    commands: [
      { command: 'a * b^x', description: 'Eksponentiell funksjon', example: '100 * 1.05^10' },
      { command: 'log(y/a) / log(b)', description: 'Finn x når y er kjent', example: 'log(200/100) / log(1.1)' },
    ],
  },


  // 9. klasse - Kapittel 9.1: Lineære funksjoner
  '9-lineaere-funksjoner': {
    introduction: (
      <p className="text-lg">
        Lineære funksjoner er funksjoner som gir en rett linje når de tegnes i et koordinatsystem.
        De har formen y = ax + b, der a er stigningstallet og b er konstantleddet.
      </p>
    ),
    sections: [
      {
        title: 'Hva er en lineær funksjon?',
        content: (
          <div className="space-y-4">
            <p>
              En lineær funksjon beskriver en rett linje og kan skrives på formen:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"y = ax + b"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Stigningstall (a)</h4>
                <p className="text-muted-foreground">
                  Hvor mye y endres når x øker med 1. Positiv a gir stigende linje,
                  negativ a gir synkende linje.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Konstantledd (b)</h4>
                <p className="text-muted-foreground">
                  Hvor linjen krysser y-aksen (når x = 0). Dette kalles også
                  startverdi eller skjæringspunkt med y-aksen.
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk lineære funksjoner',
          description: 'Se hvordan a og b påvirker linjen.',
          appName: 'classic',
          initialCommands: [
            'f(x) = 2x + 3',
            'g(x) = -x + 1',
            'h(x) = 0.5x - 2',
          ],
        },
      },
      {
        title: 'Stigningstall',
        content: (
          <div className="space-y-4">
            <p>
              Stigningstallet forteller hvor bratt linjen er. Vi kan finne det ved å se
              på to punkter på linjen, <InlineMath>{"(x_1, y_1)"}</InlineMath> og <InlineMath>{"(x_2, y_2)"}</InlineMath>:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Punktene A(1, 3) og B(4, 9) ligger på en linje. Finn stigningstallet:</p>
              <div className="space-y-2 text-center">
                <BlockMath>{"a = \\frac{9-3}{4-1} = \\frac{6}{3} = 2"}</BlockMath>
              </div>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra kan du bruke <code className="text-blue-600">Stigning(f)</code> for å finne stigningstallet.
            </p>
          </div>
        ),
        geogebra: {
          title: 'Beregn stigningstall',
          description: 'Lag en linje og finn stigningstallet.',
          appName: 'classic',
          initialCommands: [
            'A = (1, 3)',
            'B = (4, 9)',
            'f = Line(A, B)',
            'a = Slope(f)',
          ],
        },
      },
      {
        title: 'Konstantledd (skjæring med y-aksen)',
        content: (
          <div className="space-y-4">
            <p>
              Konstantleddet b er y-verdien når x = 0. Dette er punktet der linjen
              krysser y-aksen, også kalt <strong>skjæringspunkt med y-aksen</strong>.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Finne konstantleddet:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Sett x = 0 i funksjonen</li>
                <li>Beregn y-verdien</li>
                <li>Dette er konstantleddet b</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">Eksempel: <InlineMath>{"f(x) = 3x + 5"}</InlineMath></p>
              <p>Når x = 0: <InlineMath>{"f(0) = 3 \\cdot 0 + 5 = 5"}</InlineMath></p>
              <p>Konstantleddet er b = 5, så linjen krysser y-aksen i punktet (0, 5).</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Se konstantleddet',
          description: 'Legg merke til hvor linjen krysser y-aksen.',
          appName: 'classic',
          initialCommands: [
            'f(x) = 2x + 3',
            'P = (0, f(0))',
          ],
        },
      },
      {
        title: 'Nullpunkt (skjæring med x-aksen)',
        content: (
          <div className="space-y-4">
            <p>
              Nullpunktet er x-verdien der funksjonen er lik 0, altså der linjen
              krysser x-aksen. I dette punktet er y = 0.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Finne nullpunktet:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Sett y = 0 (eller f(x) = 0)</li>
                <li>Løs likningen for x</li>
                <li>Dette gir x-verdien til nullpunktet</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">Eksempel: <InlineMath>{"f(x) = 2x - 4"}</InlineMath></p>
              <p>Sett <InlineMath>{"f(x) = 0"}</InlineMath>:</p>
              <BlockMath>{"2x - 4 = 0"}</BlockMath>
              <BlockMath>{"2x = 4"}</BlockMath>
              <BlockMath>{"x = 2"}</BlockMath>
              <p>Nullpunktet er x = 2, så linjen krysser x-aksen i punktet (2, 0).</p>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">Nullpunkt(f)</code>
            </p>
          </div>
        ),
        geogebra: {
          title: 'Finn nullpunktet',
          description: 'Se hvor linjen krysser x-aksen.',
          appName: 'classic',
          initialCommands: [
            'f(x) = 2x - 4',
            'N = Root(f)',
          ],
        },
      },
      {
        title: 'Skjæringspunkt med aksene i GeoGebra',
        content: (
          <div className="space-y-4">
            <p>
              For å finne skjæringspunkt med aksene ved hjelp av Skjæring()-kommandoen,
              må vi først definere aksene som linjer:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Slik definerer du aksene:</h4>
              <ul className="space-y-2">
                <li><code className="text-blue-600">yakse: x = 0</code> - y-aksen som en vertikal linje</li>
                <li><code className="text-blue-600">xakse: y = 0</code> - x-aksen som en horisontal linje</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Finn skjæringspunktene:</h4>
              <ul className="space-y-2">
                <li><code className="text-blue-600">P = Skjæring(f, yakse)</code> - skjæring med y-aksen</li>
                <li><code className="text-blue-600">Q = Skjæring(f, xakse)</code> - skjæring med x-aksen</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Skjæringspunkt med aksene',
          description: 'Se hvordan du finner skjæringspunkt med både x- og y-aksen.',
          appName: 'classic',
          initialCommands: [
            'f(x) = 2x - 4',
            'yakse: x = 0',
            'xakse: y = 0',
            'P = Intersect(f, yakse)',
            'Q = Intersect(f, xakse)',
          ],
        },
      },
      {
        title: 'Skjæringspunkt mellom to linjer',
        content: (
          <div className="space-y-4">
            <p>
              Skjæringspunktet mellom to linjer finner du der de krysser hverandre.
              Her har begge linjer ulike stigningstall, så de vil alltid krysse i nøyaktig ett punkt.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Finn skjæringspunktet mellom:</p>
              <BlockMath>{"f(x) = 2x + 1"}</BlockMath>
              <BlockMath>{"g(x) = -x + 4"}</BlockMath>
            </div>
            <p className="text-muted-foreground">
              Bruk <code className="text-blue-600">Skjæring(f, g)</code> i GeoGebra.
            </p>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Merk:</h4>
              <p>
                Hvis to linjer har samme stigningstall (parallelle), vil de aldri krysse
                hverandre og har ingen skjæringspunkt.
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn skjæringspunkt mellom linjer',
          description: 'Se hvor to linjer krysser hverandre.',
          appName: 'classic',
          initialCommands: [
            'f(x) = 2x + 1',
            'g(x) = -x + 4',
            'S = Intersect(f, g)',
          ],
        },
      },
      {
        title: 'Linje gjennom to punkter',
        content: (
          <div className="space-y-4">
            <p>
              Hvis du har to punkter, kan GeoGebra automatisk finne linjen som går
              gjennom dem. Du kan også finne en lineær funksjon som passer til punktene.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Kommandoer:</h4>
              <ul className="space-y-1">
                <li><code className="text-blue-600">Linje(A, B)</code> - tegner linje gjennom A og B</li>
                <li><code className="text-blue-600">RegLin(liste)</code> - finner funksjon gjennom punkter</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Lag linje gjennom punkter',
          description: 'Prøv å lage linjer gjennom forskjellige punkter.',
          appName: 'classic',
          initialCommands: [
            'A = (1, 2)',
            'B = (4, 8)',
            'f = Line(A, B)',
            'liste = {A, B}',
            'g = RegLin(liste)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Ekstra oppgaver',
      tasks: [
        'Tegn f(x) = 2x - 4 og finn stigningstallet med Stigning(f)',
        'Marker punktet P = (0, f(0)) der f krysser y-aksen (konstantleddet)',
        'Finn nullpunktet til f med Nullpunkt(f)',
        'Definer aksene (yakse: x = 0, xakse: y = 0) og verifiser P og nullpunktet med Skjæring(f, yakse) og Skjæring(f, xakse)',
        'Tegn g(x) = -x + 5 og finn skjæringspunktet S = Skjæring(f, g)',
        'Lag punktene A = (1, 3) og B = (4, 9), og tegn linjen m = Linje(A, B)',
        'Tegn h(x) = 2x + 1 (samme stigningstall som f) og observer at f og h er parallelle',
      ],
    },
    summary: [
      'Lineær funksjon: y = ax + b',
      'a er stigningstallet (hvor bratt linjen er)',
      'b er konstantleddet (skjæring med y-aksen)',
      'Nullpunktet er der linjen krysser x-aksen (y = 0)',
      'Stigning() finner stigningstall',
      'Nullpunkt() finner skjæring med x-aksen',
      'Skjæring() finner skjæringspunkt mellom grafer',
      'Linje() og RegLin() lager linjer',
    ],
    commands: [
      { command: 'f(x) = ax + b', description: 'Definerer en lineær funksjon', example: 'f(x) = 2x + 3' },
      { command: 'Stigning(f)', description: 'Finner stigningstallet til en linje', example: 'Stigning(f)' },
      { command: 'Nullpunkt(f)', description: 'Finner nullpunktet (skjæring med x-aksen)', example: 'Nullpunkt(f)' },
      { command: 'Skjæring(f, g)', description: 'Finner skjæringspunkt mellom to funksjoner', example: 'Skjæring(f, g)' },
      { command: 'yakse: x = 0', description: 'Definerer y-aksen som en linje', example: 'yakse: x = 0' },
      { command: 'xakse: y = 0', description: 'Definerer x-aksen som en linje', example: 'xakse: y = 0' },
      { command: 'Linje(A, B)', description: 'Tegner linje gjennom to punkter', example: 'Linje(A, B)' },
      { command: 'RegLin(liste)', description: 'Finner lineær funksjon gjennom punkter', example: 'RegLin({A, B})' },
    ],
  },

    // 9. klasse - Kapittel 9.2: Likninger grafisk
  '9-likninger': {
    introduction: (
      <p className="text-lg">
        Likninger kan løses grafisk ved å finne skjæringspunkt mellom grafer.
        Dette gir deg en visuell forståelse av hva løsningen betyr.
      </p>
    ),
    sections: [
      {
        title: 'Grafisk løsning av likninger',
        content: (
          <div className="space-y-4">
            <p>
              For å løse en likning grafisk, kan vi tegne begge sider som funksjoner
              og finne hvor de krysser hverandre.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Løs 2x + 3 = 7</h4>
              <p className="mb-2">Metode 1: Tegn to funksjoner</p>
              <ul className="list-disc list-inside space-y-1">
                <li><InlineMath>{"f(x) = 2x + 3"}</InlineMath> (venstre side)</li>
                <li><InlineMath>{"g(x) = 7"}</InlineMath> (høyre side)</li>
              </ul>
              <p className="mt-2">Skjæringspunktets x-verdi er løsningen!</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">Metode 2: Flytt alt til venstre side</p>
              <BlockMath>{"2x + 3 - 7 = 0"}</BlockMath>
              <BlockMath>{"2x - 4 = 0"}</BlockMath>
              <p>Finn hvor <InlineMath>{"h(x) = 2x - 4"}</InlineMath> krysser x-aksen (nullpunkt).</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Løs likning grafisk',
          description: 'Se hvor grafene krysser for å finne løsningen.',
          appName: 'classic',
          initialCommands: [
            'f(x) = 2x + 3',
            'g(x) = 7',
            'S = Intersect(f, g)',
          ],
        },
      },
      {
        title: 'Likninger med to ukjente',
        content: (
          <div className="space-y-4">
            <p>
              Et likningssett med to likninger og to ukjente kan løses grafisk.
              Hver likning blir en linje, og skjæringspunktet er løsningen.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Løs likningssettet</h4>
              <BlockMath>{"\\begin{cases} y = 2x + 1 \\\\ y = -x + 4 \\end{cases}"}</BlockMath>
              <p className="mt-2">Skjæringspunktet gir verdiene for både x og y.</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Løs likningssett',
          description: 'Finn hvor de to linjene krysser.',
          appName: 'classic',
          initialCommands: [
            'f(x) = 2x + 1',
            'g(x) = -x + 4',
            'S = Intersect(f, g)',
          ],
        },
      },
      {
        title: 'Komplekse likningssett',
        content: (
          <div className="space-y-4">
            <p>
              Du kan løse likningssett i GeoGebra på to måter: grafisk med <code className="text-blue-600">Skjæring()</code> eller
              algebraisk med <code className="text-blue-600">Løs()</code>-kommandoen.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Løs likningssettet</h4>
              <BlockMath>{"\\begin{cases} 3x + 2y = 12 \\\\ 2x - y = 1 \\end{cases}"}</BlockMath>
              <p className="mt-3 font-semibold">Metode 1: Grafisk (tegn og finn skjæring)</p>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Skriv <code className="text-blue-600">eq1: 3x + 2y = 12</code></li>
                <li>Skriv <code className="text-blue-600">eq2: 2x - y = 1</code></li>
                <li>Skriv <code className="text-blue-600">A = Skjæring(eq1, eq2)</code></li>
              </ol>
              <p className="mt-3 font-semibold">Metode 2: Algebraisk (direkte løsning)</p>
              <p className="mt-1">
                Skriv <code className="text-blue-600">Løs({'{'}3x + 2y = 12, 2x - y = 1{'}'}, {'{'}x, y{'}'})</code>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Løs-kommandoen gir svaret direkte som {'{'}x = 2, y = 3{'}'}.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Tolke svaret</h4>
              <p>
                Løsningen er <strong>x = 2</strong> og <strong>y = 3</strong>, som gir punktet <strong>(2, 3)</strong>.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Verifiser: 3·2 + 2·3 = 6 + 6 = 12 ✓ og 2·2 - 3 = 4 - 3 = 1 ✓
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Komplekst likningssett',
          description: 'Skriv likningene direkte inn og finn skjæringspunktet.',
          appName: 'classic',
          initialCommands: [
            'eq1: 3x + 2y = 12',
            'eq2: 2x - y = 1',
            'A = Skjæring(eq1, eq2)',
          ],
        },
      },
      {
        title: 'Antall løsninger',
        content: (
          <div className="space-y-4">
            <p>
              Et likningssett kan ha:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Én løsning</h4>
                <p className="text-sm">Linjene krysser i ett punkt (forskjellig stigningstall)</p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Ingen løsning</h4>
                <p className="text-sm">Linjene er parallelle (samme stigningstall, forskjellig konstantledd)</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Uendelig mange</h4>
                <p className="text-sm">Linjene ligger oppå hverandre (identiske)</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Løs-kommandoen',
        content: (
          <div className="space-y-4">
            <p>
              GeoGebra kan også løse likninger algebraisk med Løs-kommandoen.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempler:</h4>
              <ul className="space-y-2">
                <li><code className="text-blue-600">Løs(2x + 3 = 7)</code> - løser én likning for x</li>
                <li><code className="text-blue-600">Løs(x^2 = 9)</code> - løser andregradslikning</li>
                <li><code className="text-blue-600">Løs({'{'}2y - x = 5, 3x + y = 8{'}'}, {'{'}x, y{'}'})</code> - løser likningssett med to ukjente</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg mt-4">
              <h4 className="font-semibold mb-2">Tips for likningssett:</h4>
              <p>For å løse likningssett skriver du likningene i krøllparenteser og angir variablene:</p>
              <code className="text-blue-600 block mt-2">Løs({'{'}3x + 2y = 12, 2x - y = 1{'}'}, {'{'}x, y{'}'})</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Bruk Løs',
          description: 'Løs likninger og likningssett algebraisk.',
          appName: 'classic',
          initialCommands: [
            'Løs(2x + 3 = 7)',
            'Løs(x^2 - 4 = 0)',
            'Løs({2y - x = 5, 3x + y = 8}, {x, y})',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Tegn eq1: 2x + y = 8 og eq2: x - y = 1, og finn A = Skjæring(eq1, eq2)',
        'Løs likningssettet 4x + y = 10 og x + y = 4 med Løs({4x + y = 10, x + y = 4}, {x, y})',
        'Tegn y = 3x - 2 og y = -x + 6, finn skjæringspunktet og verifiser med Løs()',
        'Løs likningssettet 2x + 3y = 13 og x - y = 1 (både grafisk og algebraisk)',
        'Forklar hvorfor 2x + y = 5 og 4x + 2y = 8 ikke har noen løsning',
      ],
    },
    summary: [
      'Grafisk løsning: finn skjæringspunkt mellom grafer med Skjæring(eq1, eq2)',
      'Algebraisk løsning: bruk Løs({likning1, likning2}, {x, y})',
      'Løsningen (a, b) betyr x = a og y = b',
      'Parallelle linjer gir ingen løsning (samme stigningstall)',
      'Du kan skrive likninger direkte uten å omforme til y = mx + b',
    ],
    commands: [
      { command: 'Skjæring(eq1, eq2)', description: 'Finner skjæringspunkt mellom to likninger/grafer', example: 'Skjæring(eq1, eq2)' },
      { command: 'Løs(likning)', description: 'Løser en likning algebraisk', example: 'Løs(2x + 3 = 7)' },
      { command: 'Løs({lik1, lik2}, {x, y})', description: 'Løser et likningssett med to ukjente', example: 'Løs({3x + 2y = 12, x - y = 1}, {x, y})' },
      { command: 'Nullpunkt(f)', description: 'Finner nullpunkt (der f(x) = 0)', example: 'Nullpunkt(f)' },
    ],
  },

    // 9. klasse - Kapittel 9.3: Geometri og konstruksjon
  '9-geometri': {
    introduction: (
      <p className="text-lg">
        I dette kapittelet lærer du geometriske konstruksjoner som midtnormal,
        vinkelhalvering, og konseptene kongruens og formlikhet.
      </p>
    ),
    sections: [
      {
        title: 'Midtnormal',
        content: (
          <div className="space-y-4">
            <p>
              Midtnormalen til et linjestykke er en linje som:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Går gjennom midtpunktet av linjestykket</li>
              <li>Står vinkelrett (90°) på linjestykket</li>
            </ul>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Egenskap:</h4>
              <p>
                Alle punkter på midtnormalen har samme avstand til begge endepunktene
                i linjestykket.
              </p>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">Midtnormal(segment)</code>
            </p>
          </div>
        ),
        geogebra: {
          title: 'Konstruer midtnormal',
          description: 'Se hvordan midtnormalen deler linjestykket.',
          appName: 'classic',
          initialCommands: [
            'A = (1, 2)',
            'B = (5, 4)',
            's = Segment(A, B)',
            'm = PerpendicularBisector(s)',
          ],
        },
      },
      {
        title: 'Vinkelhalvering',
        content: (
          <div className="space-y-4">
            <p>
              Vinkelhalveringslinjen deler en vinkel i to like store deler.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Egenskap:</h4>
              <p>
                Alle punkter på vinkelhalveringslinjen har samme avstand til de to
                linjene som danner vinkelen.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra:</h4>
              <code className="text-blue-600">Vinkelhalveringslinje(A, B, C)</code>
              <p className="text-sm mt-1">der B er toppunktet i vinkelen</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Konstruer vinkelhalvering',
          description: 'Del en vinkel i to like deler.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (3, 0)',
            'C = (2, 3)',
            'v = AngleBisector(A, B, C)',
          ],
        },
      },
      {
        title: 'Kongruens',
        content: (
          <div className="space-y-4">
            <p>
              To figurer er kongruente hvis de har:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Samme form</li>
              <li>Samme størrelse</li>
            </ul>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Kongruente trekanter:</h4>
              <p className="mb-2">Hvis to trekanter har:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Alle sider like lange (SSS)</li>
                <li>To sider og vinkelen mellom dem lik (SAS)</li>
                <li>To vinkler og siden mellom dem lik (ASA)</li>
              </ul>
              <p className="mt-2">...så er trekantene kongruente.</p>
            </div>
          </div>
        ),
      },
      {
        title: 'Formlikhet',
        content: (
          <div className="space-y-4">
            <p>
              To figurer er formlike hvis de har:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Samme form</li>
              <li>Proporsjonale sider (kan være forskjellig størrelse)</li>
            </ul>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Formlikhetsfaktor:</h4>
              <p>
                Hvis alle sider i en figur er k ganger så lange som i en annen figur,
                er k formlikhetsfaktoren.
              </p>
              <BlockMath>{"k = \\frac{\\text{ny lengde}}{\\text{gammel lengde}}"}</BlockMath>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">Homoteti(figur, k, punkt)</code> lager en
              formlik figur med faktor k fra et punkt.
            </p>
          </div>
        ),
        geogebra: {
          title: 'Lag formlike figurer',
          description: 'Utvid eller krymp en figur.',
          appName: 'classic',
          initialCommands: [
            'A = (1, 1)',
            'B = (4, 1)',
            'C = (2, 3)',
            'p1 = Polygon(A, B, C)',
            'O = (0, 0)',
            'p2 = Dilate(p1, 2, O)',
          ],
        },
      },
      {
        title: 'Sirkelen',
        content: (
          <div className="space-y-4">
            <p>
              En sirkel består av alle punkter som har samme avstand (radius) fra
              et midtpunkt.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra:</h4>
              <ul className="space-y-1">
                <li><code className="text-blue-600">Sirkel(M, r)</code> - sirkel med midtpunkt M og radius r</li>
                <li><code className="text-blue-600">Sirkel(M, A)</code> - sirkel gjennom punkt A</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Tegn sirkler',
          description: 'Lag sirkler med forskjellige radier.',
          appName: 'classic',
          initialCommands: [
            'M = (0, 0)',
            'c1 = Circle(M, 3)',
            'A = (2, 2)',
            'c2 = Circle(A, 2)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Tegn et linjestykke og konstruer midtnormalen',
        'Lag en trekant og konstruer vinkelhalveringen fra ett hjørne',
        'Lag en trekant og en kopi som er dobbelt så stor (bruk Dilate)',
        'Tegn to sirkler som skjærer hverandre',
        'Finn skjæringspunktene mellom en linje og en sirkel',
      ],
    },
    summary: [
      'Midtnormal: går gjennom midtpunktet, vinkelrett på linjestykket',
      'Vinkelhalvering: deler vinkel i to like deler',
      'Kongruens: samme form og størrelse',
      'Formlikhet: samme form, proporsjonale sider',
      'Homoteti() lager formlike figurer',
    ],
    commands: [
      { command: 'Midtnormal(segment)', description: 'Konstruerer midtnormal', example: 'Midtnormal(s)' },
      { command: 'Vinkelhalveringslinje(A, B, C)', description: 'Konstruerer vinkelhalvering', example: 'Vinkelhalveringslinje(A, B, C)' },
      { command: 'Homoteti(figur, k, punkt)', description: 'Lager formlik figur med faktor k', example: 'Homoteti(p, 2, O)' },
      { command: 'Sirkel(M, r)', description: 'Lager sirkel med midtpunkt M og radius r', example: 'Sirkel(M, 3)' },
      { command: 'Mangekant(A, B, C)', description: 'Lager mangekant gjennom punkter', example: 'Mangekant(A, B, C)' },
    ],
  },

    // 9. klasse - Kapittel 9.4: Sentralmål og spredning
  '9-statistikk': {
    introduction: (
      <p className="text-lg">
        Statistikk handler om å samle inn, analysere og presentere data.
        Du vil lære om sentralmål (gjennomsnitt, median, typetall) og spredning.
      </p>
    ),
    sections: [
      {
        title: 'Gjennomsnitt',
        content: (
          <div className="space-y-4">
            <p>
              Gjennomsnittet (aritmetisk middelverdi) er summen av alle verdier
              delt på antall verdier.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Karakterer: 4, 5, 3, 5, 4</p>
              <BlockMath>{"\\bar{x} = \\frac{4 + 5 + 3 + 5 + 4}{5} = \\frac{21}{5} = 4.2"}</BlockMath>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">Gjennomsnitt({`{4, 5, 3, 5, 4}`})</code>
            </p>
          </div>
        ),
        geogebra: {
          title: 'Beregn gjennomsnitt',
          description: 'Se hvordan gjennomsnittet beregnes.',
          appName: 'classic',
          initialCommands: [
            'data = {4, 5, 3, 5, 4}',
            'snitt = Mean(data)',
          ],
        },
      },
      {
        title: 'Median',
        content: (
          <div className="space-y-4">
            <p>
              Medianen er den midterste verdien når dataene er sortert.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Slik finner du medianen:</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Sorter verdiene fra minst til størst</li>
                <li>Hvis oddetall verdier: velg den midterste</li>
                <li>Hvis partall verdier: ta gjennomsnittet av de to midterste</li>
              </ol>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Data: 3, 7, 2, 9, 5</p>
              <p>Sortert: 2, 3, <strong>5</strong>, 7, 9</p>
              <p>Median = 5 (midterste verdi)</p>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">Median({`{3, 7, 2, 9, 5}`})</code>
            </p>
          </div>
        ),
        geogebra: {
          title: 'Finn median',
          description: 'Beregn medianen av et datasett.',
          appName: 'classic',
          initialCommands: [
            'data = {3, 7, 2, 9, 5}',
            'med = Median(data)',
          ],
        },
      },
      {
        title: 'Typetall',
        content: (
          <div className="space-y-4">
            <p>
              Typetallet (modus) er den verdien som forekommer oftest i datasettet.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Data: 2, 3, 3, 5, 3, 7, 3, 9</p>
              <p>Typetall = 3 (forekommer 4 ganger)</p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="font-semibold mb-2">Viktig:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Et datasett kan ha flere typetall</li>
                <li>Et datasett kan ikke ha noe typetall</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">Typetall({`{2, 3, 3, 5, 3, 7}`})</code>
            </p>
          </div>
        ),
      },
      {
        title: 'Variasjonsbredde',
        content: (
          <div className="space-y-4">
            <p>
              Variasjonsbredden viser hvor spredt dataene er.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\text{Variasjonsbredde} = \\text{største verdi} - \\text{minste verdi}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Data: 12, 15, 8, 20, 11</p>
              <p>Største: 20, Minste: 8</p>
              <BlockMath>{"\\text{Variasjonsbredde} = 20 - 8 = 12"}</BlockMath>
            </div>
          </div>
        ),
      },
      {
        title: 'Standardavvik',
        content: (
          <div className="space-y-4">
            <p>
              Standardavviket måler hvor mye verdiene avviker fra gjennomsnittet.
              Høyt standardavvik betyr stor spredning.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Tolkning:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Lite standardavvik: verdiene er samlet rundt gjennomsnittet</li>
                <li>Stort standardavvik: verdiene er spredt</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">SD({`{verdier}`})</code> (Standard Deviation)
            </p>
          </div>
        ),
        geogebra: {
          title: 'Beregn standardavvik',
          description: 'Se spredningen i dataene.',
          appName: 'classic',
          initialCommands: [
            'data1 = {10, 11, 10, 9, 10}',
            'data2 = {5, 15, 8, 12, 10}',
            'sd1 = SD(data1)',
            'sd2 = SD(data2)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn gjennomsnitt, median og typetall for: 5, 7, 3, 7, 9, 2, 7',
        'Beregn variasjonsbredden for tallene: 12, 8, 15, 6, 20, 11',
        'Sammenlign standardavviket for {10, 10, 10} og {5, 10, 15}',
        'Lag en liste med 7 tall som har median 5',
        'Når er median bedre enn gjennomsnitt som sentralmål?',
      ],
    },
    summary: [
      'Gjennomsnitt: summen delt på antall verdier',
      'Median: den midterste verdien (sortert)',
      'Typetall: den verdien som forekommer oftest',
      'Variasjonsbredde: største minus minste verdi',
      'Standardavvik: mål på spredning rundt gjennomsnittet',
    ],
    commands: [
      { command: 'Gjennomsnitt(liste)', description: 'Beregner gjennomsnitt', example: 'Gjennomsnitt({4, 5, 3, 5, 4})' },
      { command: 'Median(liste)', description: 'Finner medianen', example: 'Median({3, 7, 2, 9, 5})' },
      { command: 'Typetall(liste)', description: 'Finner typetallet', example: 'Typetall({2, 3, 3, 5, 3})' },
      { command: 'SD(liste)', description: 'Beregner standardavvik', example: 'SD({10, 11, 10, 9, 10})' },
      { command: 'Min(liste)', description: 'Finner minste verdi', example: 'Min({3, 7, 2, 9, 5})' },
      { command: 'Maks(liste)', description: 'Finner største verdi', example: 'Maks({3, 7, 2, 9, 5})' },
    ],
  },

    // 9. klasse - Kapittel 9.5: Pytagoras' setning
  '9-pytagoras': {
    introduction: (
      <p className="text-lg">
        Pytagoras&apos; setning er en av de viktigste setningene i geometri.
        Den beskriver sammenhengen mellom sidene i en rettvinklet trekant.
      </p>
    ),
    sections: [
      {
        title: 'Pytagoras\' setning',
        content: (
          <div className="space-y-4">
            <p>
              I en rettvinklet trekant gjelder:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"a^2 + b^2 = c^2"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Kateter (a og b)</h4>
                <p className="text-muted-foreground">
                  De to sidene som danner den rette vinkelen (90°).
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Hypotenus (c)</h4>
                <p className="text-muted-foreground">
                  Den lengste siden, som ligger mot den rette vinkelen.
                </p>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="font-semibold">Husk:</p>
              <p>Pytagoras gjelder bare for rettvinklede trekanter!</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk Pytagoras',
          description: 'Se hvordan a² + b² = c² i en rettvinklet trekant.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (3, 0)',
            'C = (0, 4)',
            't = Polygon(A, B, C)',
            'a = Distance(B, C)',
            'b = Distance(A, C)',
            'c = Distance(A, B)',
          ],
        },
      },
      {
        title: 'Finne hypotenusen',
        content: (
          <div className="space-y-4">
            <p>
              Når du kjenner begge katetene, kan du finne hypotenusen:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"c = \\sqrt{a^2 + b^2}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Katetene er 3 cm og 4 cm. Hvor lang er hypotenusen?</p>
              <div className="space-y-2 text-center">
                <BlockMath>{"c = \\sqrt{3^2 + 4^2}"}</BlockMath>
                <BlockMath>{"c = \\sqrt{9 + 16}"}</BlockMath>
                <BlockMath>{"c = \\sqrt{25} = 5 \\text{ cm}"}</BlockMath>
              </div>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">c = sqrt(3^2 + 4^2)</code>
            </p>
          </div>
        ),
      },
      {
        title: 'Finne en katete',
        content: (
          <div className="space-y-4">
            <p>
              Når du kjenner hypotenusen og én katete, kan du finne den andre kateten:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"a = \\sqrt{c^2 - b^2}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Hypotenusen er 10 cm, én katete er 6 cm. Hvor lang er den andre kateten?</p>
              <div className="space-y-2 text-center">
                <BlockMath>{"a = \\sqrt{10^2 - 6^2}"}</BlockMath>
                <BlockMath>{"a = \\sqrt{100 - 36}"}</BlockMath>
                <BlockMath>{"a = \\sqrt{64} = 8 \\text{ cm}"}</BlockMath>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn sidelengder',
          description: 'Bruk Pytagoras til å finne ukjente sider.',
          appName: 'classic',
          initialCommands: [
            'a = 3',
            'b = 4',
            'c = sqrt(a^2 + b^2)',
          ],
        },
      },
      {
        title: 'Pytagoreiske tripler',
        content: (
          <div className="space-y-4">
            <p>
              Pytagoreiske tripler er sett med hele tall som oppfyller Pytagoras&apos; setning.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Vanlige tripler:</h4>
              <ul className="space-y-2">
                <li><strong>3, 4, 5</strong> - den mest kjente</li>
                <li><strong>5, 12, 13</strong></li>
                <li><strong>8, 15, 17</strong></li>
                <li><strong>7, 24, 25</strong></li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">Tips:</p>
              <p>Hvis du ganger alle tallene i en tripel med samme tall, får du en ny tripel!</p>
              <p className="mt-2">3, 4, 5 → 6, 8, 10 (ganget med 2)</p>
            </div>
          </div>
        ),
      },
      {
        title: 'Praktiske anvendelser',
        content: (
          <div className="space-y-4">
            <p>
              Pytagoras brukes i mange praktiske situasjoner:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Avstand i koordinatsystem</h4>
                <p className="text-sm">
                  Avstanden mellom to punkter (x₁, y₁) og (x₂, y₂):
                </p>
                <BlockMath>{"d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}"}</BlockMath>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Byggning</h4>
                <p className="text-sm">
                  Finne lengden på en diagonal, høyde på tak, eller sjekke om
                  noe er vinkrett (rettvinklet).
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">Avstand(A, B)</code> bruker Pytagoras!
            </p>
          </div>
        ),
        geogebra: {
          title: 'Avstand mellom punkter',
          description: 'Se hvordan Pytagoras brukes til å finne avstand.',
          appName: 'classic',
          initialCommands: [
            'A = (1, 2)',
            'B = (5, 5)',
            's = Segment(A, B)',
            'd = Distance(A, B)',
            'C = (5, 2)',
            'hjelp = Polygon(A, B, C)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn hypotenusen når katetene er 5 cm og 12 cm',
        'En katete er 8 cm og hypotenusen er 17 cm. Finn den andre kateten',
        'Er 7, 24, 25 en pytagoreisk tripel? Sjekk ved å regne',
        'Finn avstanden mellom punktene A(2, 3) og B(6, 6) med Pytagoras',
        'En stige på 5 m står 3 m fra en vegg. Hvor høyt opp på veggen når stigen?',
      ],
    },
    summary: [
      'Pytagoras: a² + b² = c² (kun for rettvinklede trekanter)',
      'Hypotenusen (c) er lengst og ligger mot den rette vinkelen',
      'Katetene (a og b) danner den rette vinkelen',
      'sqrt() brukes til å finne kvadratrot',
      'Distance() bruker Pytagoras til å finne avstand',
    ],
    commands: [
      { command: 'sqrt(x)', description: 'Finner kvadratroten av x', example: 'sqrt(25) = 5' },
      { command: 'Avstand(A, B)', description: 'Finner avstanden mellom to punkter', example: 'Avstand(A, B)' },
      { command: 'x^2', description: 'x opphøyd i andre (x²)', example: '5^2 = 25' },
      { command: 'Mangekant(A, B, C)', description: 'Lager trekant gjennom tre punkter', example: 'Mangekant(A, B, C)' },
      { command: 'Vinkel(A, B, C)', description: 'Måler vinkel med toppunkt B', example: 'Vinkel(A, B, C)' },
    ],
  },

  // 9. klasse - Kapittel 6: Proporsjonalitet
  '9-proporsjonalitet': {
    introduction: (
      <p className="text-lg">
        Proporsjonalitet handler om sammenhenger der to størrelser vokser eller avtar
        i forhold til hverandre. Du lærer om rett og omvendt proporsjonalitet.
      </p>
    ),
    sections: [
      {
        title: 'Rett proporsjonalitet',
        content: (
          <div className="space-y-4">
            <p>
              To størrelser er rett proporsjonale når de vokser i samme takt.
              Hvis den ene dobles, dobles også den andre.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Formel:</h4>
              <BlockMath>{"y = k \\cdot x"}</BlockMath>
              <p className="text-sm mt-2">
                <InlineMath>{"k"}</InlineMath> er proporsjonalitetskonstanten (forholdstallet)
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Pris og antall</h4>
              <p className="text-sm">
                En brus koster 25 kr. Pris = 25 × antall
              </p>
              <ul className="text-sm mt-2">
                <li>1 brus: 25 kr</li>
                <li>2 brus: 50 kr</li>
                <li>4 brus: 100 kr</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Rett proporsjonalitet',
          description: 'Se grafen til rett proporsjonalitet.',
          appName: 'classic',
          initialCommands: [
            'k = 25',
            'f(x) = k * x',
            'SetCoordinateSystem(0, 10, 0, 250)',
          ],
        },
      },
      {
        title: 'Kjennetegn på rett proporsjonalitet',
        content: (
          <div className="space-y-4">
            <p>Du kan kjenne igjen rett proporsjonalitet på flere måter:</p>
            <div className="space-y-3">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">1. Grafen er en rett linje gjennom origo</h4>
                <p className="text-sm">Linjen starter i (0, 0)</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">2. Forholdet y/x er konstant</h4>
                <p className="text-sm"><InlineMath>{"\\frac{y}{x} = k"}</InlineMath> for alle verdier</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">3. Dobler du x, dobles y</h4>
                <p className="text-sm">De vokser i samme takt</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Omvendt proporsjonalitet',
        content: (
          <div className="space-y-4">
            <p>
              To størrelser er omvendt proporsjonale når produktet av dem er konstant.
              Hvis den ene dobles, halveres den andre.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Formel:</h4>
              <BlockMath>{"y = \\frac{k}{x} \\quad \\text{eller} \\quad x \\cdot y = k"}</BlockMath>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Fart og tid</h4>
              <p className="text-sm">
                Du skal gå 12 km. Tid = 12 / fart
              </p>
              <ul className="text-sm mt-2">
                <li>3 km/t: 4 timer</li>
                <li>4 km/t: 3 timer</li>
                <li>6 km/t: 2 timer</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Omvendt proporsjonalitet',
          description: 'Se grafen til omvendt proporsjonalitet.',
          appName: 'classic',
          initialCommands: [
            'k = 12',
            'f(x) = k / x',
            'SetCoordinateSystem(0, 10, 0, 15)',
          ],
        },
      },
      {
        title: 'Sammenligning',
        content: (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Rett proporsjonalitet</h4>
                <ul className="text-sm space-y-1">
                  <li>y = k · x</li>
                  <li>Graf: rett linje gjennom origo</li>
                  <li>y/x = konstant</li>
                  <li>Begge vokser sammen</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Omvendt proporsjonalitet</h4>
                <ul className="text-sm space-y-1">
                  <li>y = k/x</li>
                  <li>Graf: hyperbel</li>
                  <li>x · y = konstant</li>
                  <li>En øker, den andre synker</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Tegn grafen til y = 3x. Er dette rett proporsjonalitet?',
        'En bil bruker 0.6 L/mil. Tegn graf for bensinforbruk på ulike distanser',
        'Du skal kjøre 120 km. Lag graf for tid som funksjon av fart',
        'Er y = 2x + 3 rett proporsjonalitet? Begrunn svaret',
        'Finn k når y = 15 og x = 3 for rett proporsjonalitet',
      ],
    },
    summary: [
      'Rett proporsjonalitet: y = k · x',
      'Omvendt proporsjonalitet: y = k/x',
      'Rett: forholdet y/x er konstant',
      'Omvendt: produktet x · y er konstant',
    ],
    commands: [
      { command: 'f(x) = k * x', description: 'Rett proporsjonalitet', example: 'f(x) = 5 * x' },
      { command: 'f(x) = k / x', description: 'Omvendt proporsjonalitet', example: 'f(x) = 12 / x' },
    ],
  },

  // 9. klasse - Kapittel 7: Ulikheter
  '9-ulikheter': {
    introduction: (
      <p className="text-lg">
        Ulikheter er uttrykk der vi bruker symbolene {'<'}, {'>'}, {'≤'} eller {'≥'} i stedet for =.
        Du lærer å løse ulikheter grafisk og algebraisk.
      </p>
    ),
    sections: [
      {
        title: 'Hva er en ulikhet?',
        content: (
          <div className="space-y-4">
            <p>
              En ulikhet viser at to uttrykk ikke er like, men at det ene er
              større eller mindre enn det andre.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">{'<'} mindre enn</h4>
                <p className="text-sm">x {'<'} 5 betyr x er mindre enn 5</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">{'>'} større enn</h4>
                <p className="text-sm">x {'>'} 3 betyr x er større enn 3</p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">{'≤'} mindre enn eller lik</h4>
                <p className="text-sm">x {'≤'} 5 betyr x er høyst 5</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">{'≥'} større enn eller lik</h4>
                <p className="text-sm">x {'≥'} 3 betyr x er minst 3</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Løse ulikheter algebraisk',
        content: (
          <div className="space-y-4">
            <p>
              Vi løser ulikheter på nesten samme måte som likninger, men med én
              viktig forskjell:
            </p>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Viktig regel:</h4>
              <p className="text-sm">
                Når vi ganger eller deler med et negativt tall, må vi snu ulikhetstegnet!
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-3">Eksempel:</h4>
              <div className="space-y-2 text-sm">
                <p>Løs: 2x + 3 {'<'} 11</p>
                <p>2x {'<'} 11 - 3</p>
                <p>2x {'<'} 8</p>
                <p>x {'<'} 4</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Grafisk løsning',
        content: (
          <div className="space-y-4">
            <p>
              Vi kan løse ulikheter grafisk ved å tegne grafer og se hvor de
              krysser hverandre.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: 2x + 1 {'<'} x + 4</h4>
              <ol className="text-sm space-y-1">
                <li>1. Tegn y = 2x + 1 (blå linje)</li>
                <li>2. Tegn y = x + 4 (rød linje)</li>
                <li>3. Finn skjæringspunktet</li>
                <li>4. Les av hvor blå linje er under rød linje</li>
              </ol>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Grafisk løsning av ulikhet',
          description: 'Se hvor 2x + 1 < x + 4.',
          appName: 'classic',
          initialCommands: [
            'f(x) = 2x + 1',
            'g(x) = x + 4',
            'S = Intersect(f, g)',
          ],
        },
      },
      {
        title: 'Tallinje og intervaller',
        content: (
          <div className="space-y-4">
            <p>
              Løsningen på en ulikhet kan vises på en tallinje eller skrives
              som et intervall.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Intervallnotasjon:</h4>
              <ul className="text-sm space-y-1">
                <li>x {'<'} 4 skrives som (-∞, 4)</li>
                <li>x {'>'} 2 skrives som (2, ∞)</li>
                <li>2 {'<'} x {'<'} 5 skrives som (2, 5)</li>
                <li>x {'≤'} 3 skrives som (-∞, 3]</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">På tallinje:</h4>
              <ul className="text-sm space-y-1">
                <li>Åpen sirkel (○) for {'<'} og {'>'}</li>
                <li>Lukket sirkel (●) for {'≤'} og {'≥'}</li>
                <li>Pil viser retningen løsningen fortsetter</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Løs ulikheten 3x - 2 > 7',
        'Løs grafisk: x + 2 < 2x - 1',
        'Skriv løsningen x ≥ -3 som intervall',
        'Løs: -2x > 6 (husk å snu ulikhetstegnet!)',
        'Finn alle x slik at 1 < 2x + 3 < 9',
      ],
    },
    summary: [
      '< mindre enn, > større enn',
      '≤ mindre enn eller lik, ≥ større enn eller lik',
      'Snu tegnet ved divisjon/multiplikasjon med negativt tall',
      'Grafisk: finn hvor en graf er over/under en annen',
    ],
    commands: [
      { command: 'f(x) > g(x)', description: 'Sjekk når f er større enn g', example: '2x + 1 > x + 4' },
      { command: 'Intersect(f, g)', description: 'Finn skjæringspunktet', example: 'Intersect(f, g)' },
    ],
  },

    // 1P - Kapittel 1: Lineære modeller
  '1p-funksjoner': {
    introduction: (
      <p className="text-lg">
        Lineære modeller beskriver sammenhenger som kan vises med en rett linje.
        Du vil lære om stigningstall, startverdi og hvordan dette brukes i praktiske situasjoner.
      </p>
    ),
    sections: [
      {
        title: 'Hva er en lineær modell?',
        content: (
          <div className="space-y-4">
            <p>
              En lineær modell beskriver en sammenheng som kan uttrykkes med formelen:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"y = ax + b"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Stigningstall (a)</h4>
                <p className="text-muted-foreground">
                  Hvor mye y endrer seg når x øker med 1.
                  Forteller hvor bratt linjen er.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Startverdi (b)</h4>
                <p className="text-muted-foreground">
                  Verdien av y når x = 0.
                  Punktet der linjen krysser y-aksen.
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk lineære funksjoner',
          description: 'Endre a og b for å se hvordan linjen endrer seg.',
          appName: 'classic',
          initialCommands: [
            'a = Slider(-5, 5, 0.1)',
            'b = Slider(-10, 10, 0.5)',
            'f(x) = a*x + b',
          ],
        },
      },
      {
        title: 'Finne stigningstall',
        content: (
          <div className="space-y-4">
            <p>
              Stigningstallet finner du ved å se på endringen i y delt på endringen i x:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Finn stigningstallet for linjen gjennom (1, 3) og (4, 9)</h4>
              <div className="space-y-2 text-center">
                <BlockMath>{"a = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2"}</BlockMath>
              </div>
              <p className="mt-2">For hver gang x øker med 1, øker y med 2.</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn stigningstall',
          description: 'Lag to punkter og finn stigningstallet.',
          appName: 'classic',
          initialCommands: [
            'A = (1, 3)',
            'B = (4, 9)',
            'linje = RegLin({A, B})',
            'a = Slope(linje)',
          ],
        },
      },
      {
        title: 'Praktiske eksempler',
        content: (
          <div className="space-y-4">
            <p>Lineære modeller brukes i mange hverdagslige situasjoner:</p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel 1: Mobilabonnement</h4>
              <p>Et mobilabonnement koster 199 kr per måned + 0,50 kr per SMS.</p>
              <BlockMath>{"\\text{Pris} = 0{,}50 \\cdot \\text{antall SMS} + 199"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                Her er a = 0,50 og b = 199
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel 2: Billeie</h4>
              <p>En bil koster 500 kr per dag + engangskostnad på 200 kr.</p>
              <BlockMath>{"\\text{Kostnad} = 500 \\cdot \\text{dager} + 200"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                Her er a = 500 og b = 200
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Modeller et mobilabonnement',
          description: 'Se hvordan kostnaden øker med antall SMS.',
          appName: 'classic',
          initialCommands: [
            'SMS = Slider(0, 200, 10)',
            'kostnad(x) = 0.5*x + 199',
            'punkt = (SMS, kostnad(SMS))',
            'ZoomIn(-20, 150, 220, 350)',
          ],
        },
      },
      {
        title: 'Tilpasse linje til data',
        content: (
          <div className="space-y-4">
            <p>
              Når vi har flere datapunkter, kan GeoGebra finne den beste linjen som passer:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">RegLin()-kommandoen</h4>
              <code className="text-blue-600">RegLin({'{'}punktliste{'}'})</code>
              <p className="text-sm text-muted-foreground mt-2">
                Finner den lineære funksjonen som passer best til punktene
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Tilpass linje til data',
          description: 'Lag datapunkter og finn beste tilpasning.',
          appName: 'classic',
          initialCommands: [
            'punkter = {(1, 2), (2, 4.5), (3, 6), (4, 8.2), (5, 10)}',
            'linje = RegLin(punkter)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn stigningstallet for linjen gjennom (2, 5) og (6, 13)',
        'En taxa koster 50 kr + 15 kr per km. Sett opp en lineær modell',
        'Lag 5 punkter som omtrent ligger på en rett linje, bruk RegLin()',
        'Hva er startverdien når f(x) = 3x + 7?',
        'Tegn grafen til y = -2x + 4 og finn nullpunktet',
      ],
    },
    summary: [
      'Lineær modell: y = ax + b',
      'Stigningstall a = (y₂ - y₁) / (x₂ - x₁)',
      'Startverdi b er verdien når x = 0',
      'Bruk RegLin() for å tilpasse linje til datapunkter',
    ],
    commands: [
      { command: 'f(x) = ax + b', description: 'Definerer en lineær funksjon', example: 'f(x) = 2x + 3' },
      { command: 'RegLin({punkter})', description: 'Finner beste lineære tilpasning', example: 'RegLin({A, B, C})' },
      { command: 'Stigning(linje)', description: 'Finner stigningstallet', example: 'Stigning(f)' },
      { command: 'Skjæring(linje)', description: 'Finner skjæringspunktet med y-aksen', example: 'Skjæring(f)' },
    ],
  },

  // 1P - Kapittel 2: Økonomi og renter
  '1p-okonomi': {
    introduction: (
      <p className="text-lg">
        Lær om renter, lån og sparing. Du vil forstå hvordan penger vokser over tid
        og hvordan du beregner fremtidig verdi av investeringer.
      </p>
    ),
    sections: [
      {
        title: 'Hva er rente?',
        content: (
          <div className="space-y-4">
            <p>
              Rente er en prosentvis økning av en sum penger over tid.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Innskuddsrente</h4>
                <p className="text-muted-foreground">
                  Rente du får når du sparer penger i banken.
                  Du tjener penger på pengene dine.
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Lånerente</h4>
                <p className="text-muted-foreground">
                  Rente du betaler når du låner penger.
                  Du betaler ekstra for å låne.
                </p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-semibold">Rentesats oppgis vanligvis som årlig prosent (p.a. = per annum)</p>
            </div>
          </div>
        ),
      },
      {
        title: 'Enkel rente',
        content: (
          <div className="space-y-4">
            <p>
              Ved enkel rente beregnes renten kun på startbeløpet (hovedstolen):
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"K_n = K_0 + K_0 \\cdot \\frac{r}{100} \\cdot n"}</BlockMath>
              <p className="text-center text-sm text-muted-foreground mt-2">
                K₀ = startkapital, r = rentesats (%), n = antall år
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Du setter inn 10 000 kr med 3% enkel rente i 5 år</h4>
              <div className="space-y-2 text-center">
                <BlockMath>{"K_5 = 10000 + 10000 \\cdot \\frac{3}{100} \\cdot 5"}</BlockMath>
                <BlockMath>{"K_5 = 10000 + 1500 = 11500 \\text{ kr}"}</BlockMath>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Enkel rente',
          description: 'Se hvordan kapitalen vokser lineært med enkel rente.',
          appName: 'classic',
          initialCommands: [
            'K0 = 10000',
            'r = 3',
            'n = Slider(0, 20, 1)',
            'K(x) = K0 + K0 * r/100 * x',
            'punkt = (n, K(n))',
            'ZoomIn(-2, -1000, 25, 18000)',
          ],
        },
      },
      {
        title: 'Sammensatt rente (rentes rente)',
        content: (
          <div className="space-y-4">
            <p>
              Ved sammensatt rente legges renten til kapitalen hvert år, slik at du også
              får rente på tidligere renter:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"K_n = K_0 \\cdot \\left(1 + \\frac{r}{100}\\right)^n"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: 10 000 kr med 3% sammensatt rente i 5 år</h4>
              <div className="space-y-2 text-center">
                <BlockMath>{"K_5 = 10000 \\cdot \\left(1 + \\frac{3}{100}\\right)^5"}</BlockMath>
                <BlockMath>{"K_5 = 10000 \\cdot 1{,}03^5 \\approx 11593 \\text{ kr}"}</BlockMath>
              </div>
              <p className="mt-2 text-sm">Dette er 93 kr mer enn med enkel rente!</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Sammensatt rente (eksponentiell vekst)',
          description: 'Sammenlign enkel og sammensatt rente.',
          appName: 'classic',
          initialCommands: [
            'K0 = 10000',
            'r = 3',
            'enkel(x) = K0 + K0 * r/100 * x',
            'sammensatt(x) = K0 * (1 + r/100)^x',
            'ZoomIn(-2, -1000, 25, 20000)',
          ],
        },
      },
      {
        title: 'Vekstfaktor',
        content: (
          <div className="space-y-4">
            <p>
              Vekstfaktoren forteller hvor mye kapitalen multipliseres med per år:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\text{Vekstfaktor} = 1 + \\frac{r}{100}"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                <strong>3% rente</strong><br />
                Vekstfaktor = 1,03
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                <strong>5% rente</strong><br />
                Vekstfaktor = 1,05
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                <strong>10% rente</strong><br />
                Vekstfaktor = 1,10
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Lån og nedbetaling',
        content: (
          <div className="space-y-4">
            <p>
              Når du tar opp lån, må du betale både renter og avdrag (tilbakebetaling av lånet).
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Billån</h4>
              <p>Du låner 200 000 kr til 5% rente i 5 år.</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Rente første år: 200 000 · 0,05 = 10 000 kr</li>
                <li>Totalkostnad avhenger av nedbetalingsplan</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              <strong>Tips:</strong> Jo raskere du betaler ned, jo mindre renter betaler du totalt.
            </p>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Du setter inn 5000 kr med 4% enkel rente. Hvor mye har du etter 3 år?',
        'Beregn verdien av 8000 kr etter 6 år med 3,5% sammensatt rente',
        'Hva er vekstfaktoren for 7% årlig rente?',
        'Sammenlign enkel og sammensatt rente for 15 000 kr over 10 år (4% rente)',
        'Du låner 50 000 kr til 6% rente. Hvor mye rente betaler du første år?',
      ],
    },
    summary: [
      'Enkel rente: K = K₀ + K₀ · (r/100) · n (lineær vekst)',
      'Sammensatt rente: K = K₀ · (1 + r/100)ⁿ (eksponentiell vekst)',
      'Vekstfaktor = 1 + r/100',
      'Sammensatt rente gir mer over tid enn enkel rente',
    ],
    commands: [
      { command: 'K(x) = K0 * (1 + r/100)^x', description: 'Sammensatt rente funksjon', example: 'K(x) = 10000 * 1.03^x' },
      { command: 'K(x) = K0 + K0*r/100*x', description: 'Enkel rente funksjon', example: 'K(x) = 10000 + 300*x' },
      { command: 'Glider(min, max, steg)', description: 'Lag glider for år/rente', example: 'år = Slider(0, 30, 1)' },
    ],
  },

  // 1P - Kapittel 3: Prosent og vekstfaktor
  '1p-prosent': {
    introduction: (
      <p className="text-lg">
        Prosent brukes overalt i hverdagen - fra rabatter i butikken til lønnsvekst.
        Lær å regne med prosent og forstå vekstfaktor.
      </p>
    ),
    sections: [
      {
        title: 'Grunnleggende prosentregning',
        content: (
          <div className="space-y-4">
            <p>
              Prosent betyr &quot;per hundre&quot; og skrives med tegnet %.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\text{Prosentandel} = \\frac{\\text{Del}}{\\text{Hele}} \\cdot 100\\%"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: 15 av 60 elever har briller</h4>
              <div className="space-y-2 text-center">
                <BlockMath>{"\\text{Prosentandel} = \\frac{15}{60} \\cdot 100\\% = 25\\%"}</BlockMath>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                <strong>50%</strong> = halvparten = 0,5
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                <strong>25%</strong> = en fjerdedel = 0,25
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                <strong>10%</strong> = en tidel = 0,1
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Vekstfaktor ved prosentvis endring',
        content: (
          <div className="space-y-4">
            <p>
              Når noe øker eller minker med p%, bruker vi vekstfaktor:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Økning</h4>
                <BlockMath>{"\\text{Vekstfaktor} = 1 + \\frac{p}{100}"}</BlockMath>
                <p className="text-sm text-muted-foreground mt-2">
                  Eksempel: 15% økning → vekstfaktor = 1,15
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Reduksjon</h4>
                <BlockMath>{"\\text{Vekstfaktor} = 1 - \\frac{p}{100}"}</BlockMath>
                <p className="text-sm text-muted-foreground mt-2">
                  Eksempel: 20% rabatt → vekstfaktor = 0,80
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk vekstfaktor',
          description: 'Se hvordan prosent påvirker vekstfaktoren.',
          appName: 'classic',
          initialCommands: [
            'p = Slider(-50, 50, 1)',
            'vekstfaktor = 1 + p/100',
            'startverdi = 1000',
            'sluttverdi = startverdi * vekstfaktor',
            'ZoomIn(-60, -200, 60, 2000)',
          ],
        },
      },
      {
        title: 'Rabatt og prisøkning',
        content: (
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel 1: 30% rabatt på jakke til 1200 kr</h4>
              <p className="mb-2">Metode 1: Regn ut rabatten</p>
              <BlockMath>{"\\text{Rabatt} = 1200 \\cdot \\frac{30}{100} = 360 \\text{ kr}"}</BlockMath>
              <BlockMath>{"\\text{Ny pris} = 1200 - 360 = 840 \\text{ kr}"}</BlockMath>
              <p className="mb-2 mt-3">Metode 2: Bruk vekstfaktor</p>
              <BlockMath>{"\\text{Ny pris} = 1200 \\cdot 0{,}70 = 840 \\text{ kr}"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel 2: Pris øker med 12%</h4>
              <BlockMath>{"\\text{Ny pris} = \\text{Gammel pris} \\cdot 1{,}12"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn rabatt',
          description: 'Prøv ulike rabattsatser.',
          appName: 'classic',
          initialCommands: [
            'originalpris = 1500',
            'rabatt = Slider(0, 50, 5)',
            'vekstfaktor = 1 - rabatt/100',
            'salgspris = originalpris * vekstfaktor',
            'ZoomIn(-10, -100, 60, 1800)',
          ],
        },
      },
      {
        title: 'Finne opprinnelig verdi',
        content: (
          <div className="space-y-4">
            <p>
              Hvis du vet sluttverdien etter en prosentvis endring, kan du finne startverdien:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\text{Startverdi} = \\frac{\\text{Sluttverdi}}{\\text{Vekstfaktor}}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: En vare koster 850 kr etter 15% rabatt. Hva var originalprisen?</h4>
              <div className="space-y-2 text-center">
                <BlockMath>{"\\text{Vekstfaktor} = 1 - \\frac{15}{100} = 0{,}85"}</BlockMath>
                <BlockMath>{"\\text{Originalpris} = \\frac{850}{0{,}85} = 1000 \\text{ kr}"}</BlockMath>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Gjentatte prosentvise endringer',
        content: (
          <div className="space-y-4">
            <p>
              Når du har flere prosentvise endringer etter hverandre, multipliserer du vekstfaktorene:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Først 20% økning, deretter 10% reduksjon</h4>
              <div className="space-y-2">
                <BlockMath>{"\\text{Total vekstfaktor} = 1{,}20 \\cdot 0{,}90 = 1{,}08"}</BlockMath>
                <p className="text-center">Dette tilsvarer 8% økning totalt</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              <strong>Viktig:</strong> Du kan ikke bare legge sammen prosentene! 20% - 10% ≠ 10%
            </p>
          </div>
        ),
        geogebra: {
          title: 'Gjentatte endringer',
          description: 'Se hva som skjer med flere prosentvise endringer.',
          appName: 'classic',
          initialCommands: [
            'startverdi = 1000',
            'økning1 = 20',
            'reduksjon = 10',
            'etter_økning = startverdi * (1 + økning1/100)',
            'sluttverdi = etter_økning * (1 - reduksjon/100)',
            'total_vekstfaktor = sluttverdi / startverdi',
            'ZoomIn(-5, -200, 30, 1500)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn 35% av 800 kr',
        'En vare koster 450 kr og får 25% rabatt. Hva er salgsprisen?',
        'Hva er vekstfaktoren for: a) 18% økning, b) 12% reduksjon?',
        'En vare koster 680 kr etter 15% rabatt. Hva var originalprisen?',
        'En pris øker først med 10%, deretter med 20%. Hva er total vekstfaktor?',
      ],
    },
    summary: [
      'Prosent = (del/hele) · 100%',
      'Vekstfaktor ved økning: 1 + p/100',
      'Vekstfaktor ved reduksjon: 1 - p/100',
      'Originalpris = Salgspris / Vekstfaktor',
      'Ved flere endringer: Multipliser vekstfaktorene',
    ],
    commands: [
      { command: 'v = 1 + p/100', description: 'Vekstfaktor ved økning', example: 'v = 1 + 15/100' },
      { command: 'v = 1 - p/100', description: 'Vekstfaktor ved reduksjon', example: 'v = 1 - 20/100' },
      { command: 'ny = gammel * v', description: 'Ny verdi etter endring', example: 'ny = 1000 * 1.15' },
    ],
  },

  // 1P - Kapittel 4: Statistikk
  '1p-statistikk': {
    introduction: (
      <p className="text-lg">
        Statistikk handler om å samle inn, organisere og analysere data.
        Lær om sentrale begreper som gjennomsnitt, median, kvartiler og standardavvik.
      </p>
    ),
    sections: [
      {
        title: 'Sentralmål',
        content: (
          <div className="space-y-4">
            <p>Sentralmål forteller oss noe om det typiske i et datasett:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Gjennomsnitt</h4>
                <BlockMath>{"\\bar{x} = \\frac{\\sum x_i}{n}"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  Summen av alle verdier delt på antallet
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Median</h4>
                <p className="text-muted-foreground">
                  Den midterste verdien når tallene er sortert.
                  50% av verdiene er under medianen.
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Typetall (modus)</h4>
                <p className="text-muted-foreground">
                  Den verdien som forekommer flest ganger
                  i datasettet.
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn sentralmål',
          description: 'Se gjennomsnitt og median for et datasett.',
          appName: 'classic',
          initialCommands: [
            'data = {12, 15, 18, 18, 20, 22, 25, 28, 30, 35}',
            'gjennomsnitt = Mean(data)',
            'median = Median(data)',
          ],
        },
      },
      {
        title: 'Kvartiler og boksplot',
        content: (
          <div className="space-y-4">
            <p>Kvartiler deler datasettet inn i fire like store deler:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                <h4 className="font-bold">1. kvartil (Q₁)</h4>
                <p className="text-sm">25% av verdiene er under Q₁</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                <h4 className="font-bold">Median (Q₂)</h4>
                <p className="text-sm">50% av verdiene er under medianen</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                <h4 className="font-bold">3. kvartil (Q₃)</h4>
                <p className="text-sm">75% av verdiene er under Q₃</p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Kvartilbredde</h4>
              <BlockMath>{"\\text{Kvartilbredde} = Q_3 - Q_1"}</BlockMath>
              <p className="text-sm text-muted-foreground">
                Forteller hvor spredt de midterste 50% av dataene er
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Kvartiler og boksplot',
          description: 'Se hvordan et boksplot viser datafordelingen.',
          appName: 'classic',
          initialCommands: [
            'data = {45, 52, 58, 63, 68, 72, 75, 78, 82, 85, 88, 92, 95}',
            'Q1 = Quartile(data, 1)',
            'Q2 = Median(data)',
            'Q3 = Quartile(data, 3)',
            'BoxPlot(1, 0.5, data)',
          ],
        },
      },
      {
        title: 'Standardavvik',
        content: (
          <div className="space-y-4">
            <p>
              Standardavvik måler hvor spredt verdiene er rundt gjennomsnittet:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Lite standardavvik</h4>
                <p className="text-sm text-muted-foreground">
                  Verdiene ligger tett rundt gjennomsnittet.
                  Dataene er homogene.
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Stort standardavvik</h4>
                <p className="text-sm text-muted-foreground">
                  Verdiene er spredt over et større område.
                  Dataene er heterogene.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              I GeoGebra: <code className="text-blue-600">SD(liste)</code> eller <code className="text-blue-600">stdev(liste)</code>
            </p>
          </div>
        ),
        geogebra: {
          title: 'Sammenlign standardavvik',
          description: 'To datasett med samme gjennomsnitt, men ulik spredning.',
          appName: 'classic',
          initialCommands: [
            'data1 = {48, 49, 50, 51, 52}',
            'data2 = {30, 40, 50, 60, 70}',
            'gjennomsnitt1 = Mean(data1)',
            'gjennomsnitt2 = Mean(data2)',
            'sd1 = SD(data1)',
            'sd2 = SD(data2)',
          ],
        },
      },
      {
        title: 'Histogram',
        content: (
          <div className="space-y-4">
            <p>
              Et histogram viser hvordan data er fordelt i ulike intervaller (klasser):
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Slik lager du et histogram i GeoGebra:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Lag en liste med data</li>
                <li>Definer klassegrenser (f.eks. 0, 10, 20, 30, ...)</li>
                <li>Bruk <code className="text-blue-600">Histogram(klassegrenser, data)</code></li>
              </ol>
            </div>
            <p className="text-muted-foreground">
              <strong>Tips:</strong> Stolpene i et histogram står inntil hverandre (ingen mellomrom)
            </p>
          </div>
        ),
        geogebra: {
          title: 'Lag histogram',
          description: 'Visualiser fordeling av data i klasser.',
          appName: 'classic',
          initialCommands: [
            'alder = {15, 18, 22, 25, 28, 31, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65}',
            'klasser = {0, 20, 40, 60, 80}',
            'Histogram(klasser, alder)',
          ],
        },
      },
      {
        title: 'Kumulativ frekvens',
        content: (
          <div className="space-y-4">
            <p>
              Kumulativ frekvens viser hvor mange verdier som er mindre enn eller lik en gitt verdi:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Karakterfordeling</h4>
              <table className="w-full text-sm mt-2">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Karakter</th>
                    <th className="text-left p-2">Frekvens</th>
                    <th className="text-left p-2">Kumulativ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2">1-2</td><td className="p-2">3</td><td className="p-2">3</td></tr>
                  <tr><td className="p-2">3-4</td><td className="p-2">8</td><td className="p-2">11</td></tr>
                  <tr><td className="p-2">5-6</td><td className="p-2">6</td><td className="p-2">17</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn gjennomsnitt, median og typetall for: {5, 8, 8, 12, 15, 18, 18, 18, 22}',
        'Lag et boksplot for dataene: {23, 28, 31, 35, 38, 42, 45, 48, 52, 55}',
        'Beregn kvartilbredden for dataene over',
        'Finn standardavviket for: {10, 12, 14, 16, 18}',
        'Lag et histogram med passende klasseinndeling for aldersdata',
      ],
    },
    summary: [
      'Gjennomsnitt: Gjennomsnitt(liste)',
      'Median: Median(liste)',
      'Kvartiler: Kvartil(liste, 1/2/3)',
      'Standardavvik: SD(liste)',
      'Boksplot: Boksplott(y-posisjon, bredde, data)',
      'Histogram: Histogram(klasser, data)',
    ],
    commands: [
      { command: 'Gjennomsnitt(liste)', description: 'Beregner gjennomsnittet', example: 'Gjennomsnitt({5, 10, 15})' },
      { command: 'Median(liste)', description: 'Finner medianen', example: 'Median(data)' },
      { command: 'Kvartil(liste, n)', description: 'Finner n-te kvartil (n=1,2,3)', example: 'Kvartil(data, 1)' },
      { command: 'SD(liste)', description: 'Beregner standardavviket', example: 'SD(målinger)' },
      { command: 'Boksplott(y, b, liste)', description: 'Lager boksplot', example: 'Boksplott(1, 0.5, data)' },
      { command: 'Histogram(klasser, data)', description: 'Lager histogram', example: 'Histogram({0,10,20}, data)' },
    ],
  },

  // 1P - Kapittel 5: Geometri i praksis
  '1p-geometri': {
    introduction: (
      <p className="text-lg">
        Geometri brukes i mange praktiske sammenhenger - fra å beregne maling til å
        finne volum av pakker. Lær om areal, volum og målestokk.
      </p>
    ),
    sections: [
      {
        title: 'Areal av flate figurer',
        content: (
          <div className="space-y-4">
            <p>Areal måler hvor stor flaten til en figur er (målt i m², cm², etc.):</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Rektangel</h4>
                <BlockMath>{"A = l \\cdot b"}</BlockMath>
                <p className="text-sm">lengde · bredde</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Trekant</h4>
                <BlockMath>{"A = \\frac{g \\cdot h}{2}"}</BlockMath>
                <p className="text-sm">grunnlinje · høyde / 2</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Sirkel</h4>
                <BlockMath>{"A = \\pi r^2"}</BlockMath>
                <p className="text-sm">pi · radius²</p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Trapes</h4>
                <BlockMath>{"A = \\frac{(a+b) \\cdot h}{2}"}</BlockMath>
                <p className="text-sm">(grunnlinje₁ + grunnlinje₂) · høyde / 2</p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn areal',
          description: 'Tegn forskjellige figurer og se arealet.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (6, 0)',
            'C = (6, 4)',
            'D = (0, 4)',
            'rektangel = Polygon(A, B, C, D)',
            'areal = Area(rektangel)',
          ],
        },
      },
      {
        title: 'Praktisk bruk av areal',
        content: (
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel 1: Male en vegg</h4>
              <p>En vegg er 4,5 m lang og 2,5 m høy.</p>
              <BlockMath>{"A = 4{,}5 \\cdot 2{,}5 = 11{,}25 \\text{ m}^2"}</BlockMath>
              <p className="mt-2">En liter maling dekker ca. 8 m²:</p>
              <BlockMath>{"\\text{Maling} = \\frac{11{,}25}{8} \\approx 1{,}4 \\text{ liter}"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel 2: Plen</h4>
              <p>En rektangulær plen er 15 m × 8 m. Pris for såing: 25 kr/m²</p>
              <BlockMath>{"A = 15 \\cdot 8 = 120 \\text{ m}^2"}</BlockMath>
              <BlockMath>{"\\text{Kostnad} = 120 \\cdot 25 = 3000 \\text{ kr}"}</BlockMath>
            </div>
          </div>
        ),
      },
      {
        title: 'Volum av tredimensjonale figurer',
        content: (
          <div className="space-y-4">
            <p>Volum måler hvor mye plass en figur tar (målt i m³, cm³, liter):</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Kube/Boks</h4>
                <BlockMath>{"V = l \\cdot b \\cdot h"}</BlockMath>
                <p className="text-sm">lengde · bredde · høyde</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Sylinder</h4>
                <BlockMath>{"V = \\pi r^2 \\cdot h"}</BlockMath>
                <p className="text-sm">grunnflate · høyde</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Kule</h4>
                <BlockMath>{"V = \\frac{4}{3}\\pi r^3"}</BlockMath>
                <p className="text-sm">4/3 · pi · radius³</p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Pyramide/Kjegle</h4>
                <BlockMath>{"V = \\frac{1}{3} \\cdot G \\cdot h"}</BlockMath>
                <p className="text-sm">grunnflate · høyde / 3</p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg mt-4">
              <p className="font-semibold">Husk: 1 liter = 1 dm³ = 1000 cm³</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn volum',
          description: 'Visualiser en boks og beregn volumet.',
          appName: '3d',
          initialCommands: [
            'l = 5',
            'b = 3',
            'h = 4',
            'volum = l * b * h',
          ],
        },
      },
      {
        title: 'Målestokk',
        content: (
          <div className="space-y-4">
            <p>
              Målestokk viser forholdet mellom lengder på kart/tegning og virkeligheten:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\text{Målestokk } 1:n \\text{ betyr at } 1 \\text{ cm på kartet} = n \\text{ cm i virkeligheten}"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksempel 1: Målestokk 1:50 000</h4>
                <p>3 cm på kartet tilsvarer:</p>
                <BlockMath>{"3 \\cdot 50000 = 150000 \\text{ cm} = 1{,}5 \\text{ km}"}</BlockMath>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksempel 2: Hustekning 1:100</h4>
                <p>En vegg er 6,5 cm på tegningen:</p>
                <BlockMath>{"6{,}5 \\cdot 100 = 650 \\text{ cm} = 6{,}5 \\text{ m}"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Areal med målestokk</h4>
              <p>Husk å kvadrere målestokken når du regner ut areal!</p>
              <BlockMath>{"\\text{Målestokk } 1:1000 \\Rightarrow \\text{ Arealmålestokk } 1:1000000"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk målestokk',
          description: 'Se sammenhengen mellom kart og virkelighet.',
          appName: 'classic',
          initialCommands: [
            'malestokk = 50000',
            'lengde_kart = Slider(0, 10, 0.1)',
            'lengde_virkelighet = lengde_kart * malestokk / 100000',
          ],
        },
      },
      {
        title: 'Pytagoras i praksis',
        content: (
          <div className="space-y-4">
            <p>
              Pytagoras setning brukes til å finne lengder i rettvinklede trekanter:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"a^2 + b^2 = c^2"}</BlockMath>
              <p className="text-center text-sm text-muted-foreground">
                c er hypotenusen (lengste siden)
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Stige mot vegg</h4>
              <p>En 5 m lang stige står 1,5 m fra veggen. Hvor høyt når stigen?</p>
              <BlockMath>{"h^2 = 5^2 - 1{,}5^2 = 25 - 2{,}25 = 22{,}75"}</BlockMath>
              <BlockMath>{"h = \\sqrt{22{,}75} \\approx 4{,}77 \\text{ m}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Pytagoras',
          description: 'Se Pytagoras setning i praksis.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (3, 0)',
            'C = (3, 4)',
            'trekant = Polygon(A, B, C)',
            'a = Distance(B, C)',
            'b = Distance(A, B)',
            'c = Distance(A, C)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn arealet av et rom som er 5,5 m × 4,2 m',
        'Hvor mange liter maling trengs for å male 45 m² (1 liter = 8 m²)?',
        'Beregn volumet av en boks: 30 cm × 20 cm × 15 cm. Hvor mange liter er det?',
        'På et kart med målestokk 1:25 000 er avstanden 8 cm. Hvor langt er det i virkeligheten?',
        'En 6 m lang stige står 2 m fra veggen. Hvor høyt når den?',
      ],
    },
    summary: [
      'Rektangel: A = l · b, Trekant: A = g · h / 2, Sirkel: A = πr²',
      'Boks: V = l · b · h, Sylinder: V = πr² · h',
      'Målestokk 1:n betyr 1 cm på kart = n cm i virkeligheten',
      'Arealmålestokk: kvadrer tallmålestokken',
      'Pytagoras: a² + b² = c²',
    ],
    commands: [
      { command: 'Areal(figur)', description: 'Beregner arealet', example: 'Areal(trekant)' },
      { command: 'Omkrets(figur)', description: 'Beregner omkretsen', example: 'Omkrets(rektangel)' },
      { command: 'Volum(figur)', description: 'Beregner volumet (3D)', example: 'Volum(kube)' },
      { command: 'Avstand(A, B)', description: 'Finner avstanden mellom punkter', example: 'Avstand(A, B)' },
      { command: 'Sirkel(M, r)', description: 'Tegner sirkel', example: 'Sirkel((0,0), 5)' },
    ],
  },

  // 1T - Teoretisk matematikk VG1
  // Kapittel 1: Algebra og CAS
  '1t-algebra': {
    introduction: (
      <p className="text-lg">
        Algebra og CAS (Computer Algebra System) gir deg verktøy til å løse likninger,
        forenkle uttrykk og utføre symbolske beregninger. GeoGebra CAS kan hjelpe deg
        med å sjekke svar og utforske algebraiske sammenhenger.
      </p>
    ),
    sections: [
      {
        title: 'Løse likninger med Løs()',
        content: (
          <div className="space-y-4">
            <p>
              Løs()-kommandoen løser likninger algebraisk og gir eksakte svar:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <code className="text-blue-600">Løs(likning, variabel)</code>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksempel 1: Lineær likning</h4>
                <code className="text-sm">Løs(3x + 5 = 14, x)</code>
                <p className="mt-2 text-sm">Gir: x = 3</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksempel 2: Kvadratisk likning</h4>
                <code className="text-sm">Løs(x² - 5x + 6 = 0, x)</code>
                <p className="mt-2 text-sm">Gir: x = 2 eller x = 3</p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Løs likninger',
          description: 'Skriv Solve(likning, x) i CAS-vinduet for å løse likninger.',
          appName: 'cas',
          initialCommands: [
            'Solve(3x + 5 = 14, x)',
            'Solve(x² - 5x + 6 = 0, x)',
          ],
        },
      },
      {
        title: 'Forenkle uttrykk med Forenkle()',
        content: (
          <div className="space-y-4">
            <p>
              Forenkle()-kommandoen forenkler algebraiske uttrykk:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <code className="text-blue-600">Forenkle(uttrykk)</code>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Forenkle brøkuttrykk</h4>
              <code className="text-sm">Forenkle((x² - 4) / (x - 2))</code>
              <p className="mt-2 text-sm">Gir: x + 2</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Merk: Dette gjelder når x ≠ 2
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Forenkle uttrykk',
          description: 'Bruk Forenkle() til å forenkle komplekse uttrykk.',
          appName: 'cas',
          initialCommands: [
            'Simplify((x² - 4) / (x - 2))',
            'Simplify(2x + 3x - x)',
          ],
        },
      },
      {
        title: 'Faktorisering med Faktoriser()',
        content: (
          <div className="space-y-4">
            <p>
              Faktoriser()-kommandoen faktoriserer uttrykk:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <code className="text-blue-600">Faktoriser(uttrykk)</code>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksempel 1: Kvadratisk uttrykk</h4>
                <code className="text-sm">Faktoriser(x² + 5x + 6)</code>
                <p className="mt-2 text-sm">Gir: (x + 2)(x + 3)</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksempel 2: Konjugatsetningen</h4>
                <code className="text-sm">Faktoriser(x² - 9)</code>
                <p className="mt-2 text-sm">Gir: (x - 3)(x + 3)</p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Faktoriser uttrykk',
          description: 'Bruk Faktoriser() til å faktorisere polynomuttrykk.',
          appName: 'cas',
          initialCommands: [
            'Factor(x² + 5x + 6)',
            'Factor(x² - 9)',
          ],
        },
      },
      {
        title: 'Utvide uttrykk med Utvid()',
        content: (
          <div className="space-y-4">
            <p>
              Utvid()-kommandoen utvider parenteser og multipliserer ut:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <code className="text-blue-600">Utvid(uttrykk)</code>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksempel 1: Enkel parentes</h4>
                <code className="text-sm">Utvid(3(x + 4))</code>
                <p className="mt-2 text-sm">Gir: 3x + 12</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksempel 2: Dobbel parentes</h4>
                <code className="text-sm">Utvid((x + 2)(x + 3))</code>
                <p className="mt-2 text-sm">Gir: x² + 5x + 6</p>
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel 3: Kvadratsetninger</h4>
              <code className="text-sm">Utvid((x + 3)²)</code>
              <p className="mt-2 text-sm">Gir: x² + 6x + 9</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utvid parenteser',
          description: 'Bruk Utvid() til å multiplisere ut parenteser.',
          appName: 'cas',
          initialCommands: [
            'Expand((x + 2)(x + 3))',
            'Expand((x + 3)²)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Løs likningen 2x - 7 = 15 med Løs()',
        'Løs likningen x² - 8x + 12 = 0 med Løs()',
        'Faktoriser uttrykket x² + 7x + 12 med Faktoriser()',
        'Utvid (x - 5)(x + 4) med Utvid()',
        'Forenkle (x² - 16) / (x + 4) med Forenkle()',
      ],
    },
    summary: [
      'Solve(likning, x) løser likninger algebraisk',
      'Factor(uttrykk) faktoriserer polynomuttrykk',
      'Expand(uttrykk) utvider parenteser',
      'Simplify(uttrykk) forenkler algebraiske uttrykk',
      'CAS gir eksakte svar, ikke desimaltilnærminger',
    ],
    commands: [
      { command: 'Løs(likning, x)', description: 'Løser likningen', example: 'Løs(x² - 5x + 6 = 0, x)' },
      { command: 'Factor(uttrykk)', description: 'Faktoriserer uttrykk', example: 'Factor(x² + 5x + 6)' },
      { command: 'Expand(uttrykk)', description: 'Utvider parenteser', example: 'Expand((x + 2)(x + 3))' },
      { command: 'Simplify(uttrykk)', description: 'Forenkler uttrykk', example: 'Simplify((x² - 4) / (x - 2))' },
    ],
  },

  // Kapittel 2: Funksjoner
  '1t-funksjoner': {
    introduction: (
      <p className="text-lg">
        Funksjoner er grunnleggende i matematikken. Her lærer du om lineære og
        andregradsfunksjoner, hvordan du finner nullpunkter og skjæringspunkter,
        og hvordan du bruker GeoGebra til å visualisere funksjoner.
      </p>
    ),
    sections: [
      {
        title: 'Lineære funksjoner',
        content: (
          <div className="space-y-4">
            <p>
              En lineær funksjon har formen:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"f(x) = ax + b"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Stigningstall (a)</h4>
                <p>Bestemmer hvor bratt linjen er</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>a {'>'} 0: Stigende linje</li>
                  <li>a {'<'} 0: Synkende linje</li>
                  <li>a = 0: Horisontal linje</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Konstantledd (b)</h4>
                <p>Bestemmer skjæringspunktet med y-aksen</p>
                <p className="text-sm mt-2">
                  f(0) = b
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk lineære funksjoner',
          description: 'Endre a og b for å se hvordan grafen endrer seg.',
          appName: 'classic',
          initialCommands: [
            'a = Slider(-5, 5, 0.1)',
            'b = Slider(-10, 10, 0.5)',
            'f(x) = a*x + b',
          ],
        },
      },
      {
        title: 'Andregradsfunksjoner',
        content: (
          <div className="space-y-4">
            <p>
              En andregradsfunksjon (kvadratisk funksjon) har formen:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"f(x) = ax^2 + bx + c"}</BlockMath>
            </div>
            <p>Grafen er en parabel som åpner oppover hvis a {'>'} 0, nedover hvis a {'<'} 0.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Toppunktsform</h4>
                <BlockMath>{"f(x) = a(x - h)^2 + k"}</BlockMath>
                <p className="text-sm">Toppunkt: (h, k)</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Faktorisert form</h4>
                <BlockMath>{"f(x) = a(x - x_1)(x - x_2)"}</BlockMath>
                <p className="text-sm">Nullpunkter: x₁ og x₂</p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk andregradsfunksjoner',
          description: 'Endre parametrene for å se hvordan parabelen endrer seg.',
          appName: 'classic',
          initialCommands: [
            'a = Slider(-3, 3, 0.1)',
            'b = Slider(-5, 5, 0.5)',
            'c = Slider(-5, 5, 0.5)',
            'f(x) = a*x² + b*x + c',
            'Extremum(f)',
          ],
        },
      },
      {
        title: 'Nullpunkter med Nullpunkt()',
        content: (
          <div className="space-y-4">
            <p>
              Nullpunkter er verdiene av x der f(x) = 0. Bruk Nullpunkt()-kommandoen:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <code className="text-blue-600">Nullpunkt(funksjon)</code>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Nullpunkter for andregradsfunksjon</h4>
              <code className="text-sm">f(x) = x² - 5x + 6</code>
              <p className="mt-2 text-sm">Nullpunkt(f) gir x = 2 og x = 3</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Sjekk: f(2) = 4 - 10 + 6 = 0 ✓
              </p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Abc-formelen</h4>
              <BlockMath>{"x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"}</BlockMath>
              <p className="text-sm mt-2">
                Diskriminanten: <InlineMath>{"b^2 - 4ac"}</InlineMath>
              </p>
              <ul className="text-sm mt-2 space-y-1">
                <li>{'>'} 0: To nullpunkter</li>
                <li>= 0: Ett nullpunkt</li>
                <li>{'<'} 0: Ingen nullpunkter</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn nullpunkter',
          description: 'Bruk Nullpunkt() til å finne nullpunktene til funksjonen.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x² - 5x + 6',
            'nullpunkter = Root(f)',
          ],
        },
      },
      {
        title: 'Skjæringspunkter med Skjæring()',
        content: (
          <div className="space-y-4">
            <p>
              For å finne skjæringspunkter mellom to funksjoner bruker vi Skjæring():
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <code className="text-blue-600">Skjæring(funksjon1, funksjon2)</code>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Linje og parabel</h4>
              <code className="text-sm block">f(x) = x² - 2x</code>
              <code className="text-sm block">g(x) = x + 4</code>
              <p className="mt-2 text-sm">Skjæring(f, g) finner punktene der grafene krysser</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn skjæringspunkter',
          description: 'Se hvor to funksjoner skjærer hverandre.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x² - 2x',
            'g(x) = x + 4',
            'skjaering = Intersect(f, g)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Tegn grafen til f(x) = 2x - 3 og finn nullpunktet',
        'Finn nullpunktene til f(x) = x² - 7x + 12 med Nullpunkt()',
        'Finn toppunktet til f(x) = -2x² + 8x - 5 med Ekstremalpunkt()',
        'Finn skjæringspunktene mellom f(x) = x² og g(x) = x + 2',
        'Bestem hvor mange nullpunkter f(x) = x² + 2x + 5 har',
      ],
    },
    summary: [
      'Lineær funksjon: f(x) = ax + b',
      'Andregradsfunksjon: f(x) = ax² + bx + c',
      'Nullpunkt(f) finner nullpunktene til funksjonen',
      'Skjæring(f, g) finner skjæringspunkter',
      'Abc-formelen brukes til å finne nullpunkter algebraisk',
    ],
    commands: [
      { command: 'f(x) = uttrykk', description: 'Definerer en funksjon', example: 'f(x) = x² - 4x + 3' },
      { command: 'Nullpunkt(funksjon)', description: 'Finner nullpunkter', example: 'Nullpunkt(f)' },
      { command: 'Ekstremalpunkt(funksjon)', description: 'Finner toppunkt/bunnpunkt', example: 'Ekstremalpunkt(f)' },
      { command: 'Skjæring(f, g)', description: 'Finner skjæringspunkter', example: 'Skjæring(f, g)' },
    ],
  },

  // Kapittel 3: Polynomer
  '1t-polynomer': {
    introduction: (
      <p className="text-lg">
        Polynomer er uttrykk bygget opp av ledd med potenser av x. Her lærer du om
        polynomfunksjoner av høyere grad, deres grafer og egenskaper, samt polynomdivisjon.
      </p>
    ),
    sections: [
      {
        title: 'Polynomfunksjoner',
        content: (
          <div className="space-y-4">
            <p>
              Et polynom av grad n har formen:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"P(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Grad 1</h4>
                <BlockMath>{"P(x) = ax + b"}</BlockMath>
                <p className="text-sm">Rett linje</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Grad 2</h4>
                <BlockMath>{"P(x) = ax^2 + bx + c"}</BlockMath>
                <p className="text-sm">Parabel</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Grad 3</h4>
                <BlockMath>{"P(x) = ax^3 + bx^2 + cx + d"}</BlockMath>
                <p className="text-sm">Kubisk funksjon</p>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="font-semibold">Viktig egenskap:</p>
              <p className="text-sm">Et polynom av grad n har maksimalt n nullpunkter</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk polynomfunksjoner',
          description: 'Se hvordan polynomer av forskjellige grader ser ut.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x² - 4',
            'g(x) = x³ - 3x',
            'h(x) = x⁴ - 5x² + 4',
          ],
        },
      },
      {
        title: 'Grafer av polynomfunksjoner',
        content: (
          <div className="space-y-4">
            <p>
              Grafens form bestemmes av polynomets grad og ledende koeffisient:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Partall-grad (2, 4, 6, ...)</h4>
                <ul className="text-sm space-y-1">
                  <li>Leder koeff {'>'} 0: U-form</li>
                  <li>Leder koeff {'<'} 0: ∩-form</li>
                  <li>Går mot +∞ eller -∞ i begge ender</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Oddetall-grad (1, 3, 5, ...)</h4>
                <ul className="text-sm space-y-1">
                  <li>Leder koeff {'>'} 0: -∞ til +∞</li>
                  <li>Leder koeff {'<'} 0: +∞ til -∞</li>
                  <li>Forskjellig fortegn i endene</li>
                </ul>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Sammenlign polynomgrafer',
          description: 'Se forskjellen mellom polynomer av partalls- og oddetallsgrad.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x² - 4',
            'g(x) = -x² + 4',
            'h(x) = x³ - 4x',
            'k(x) = -x³ + 4x',
          ],
        },
      },
      {
        title: 'Nullpunkter og faktorisering',
        content: (
          <div className="space-y-4">
            <p>
              Hvis x = a er et nullpunkt, kan polynomet faktoriseres med (x - a):
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"P(x) = (x - a) \\cdot Q(x)"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Faktorisering med kjent nullpunkt</h4>
              <p className="text-sm">Gitt: P(x) = x³ - 6x² + 11x - 6</p>
              <p className="text-sm mt-2">Vi ser at P(1) = 1 - 6 + 11 - 6 = 0</p>
              <p className="text-sm mt-2">Derfor: P(x) = (x - 1)(x² - 5x + 6)</p>
              <p className="text-sm mt-2">Videre: P(x) = (x - 1)(x - 2)(x - 3)</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Faktoriser polynomer',
          description: 'Bruk Faktoriser() i CAS til å faktorisere polynomer.',
          appName: 'cas',
          initialCommands: [
            'P(x) = x³ - 6x² + 11x - 6',
            'Factor(P(x))',
            'Root(P(x))',
          ],
        },
      },
      {
        title: 'Polynomdivisjon',
        content: (
          <div className="space-y-4">
            <p>
              Polynomdivisjon brukes til å dele et polynom med et annet:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\frac{P(x)}{D(x)} = Q(x) + \\frac{R(x)}{D(x)}"}</BlockMath>
              <p className="text-center text-sm text-muted-foreground">
                Q(x) = kvotient, R(x) = rest
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Dele med lineært uttrykk</h4>
              <BlockMath>{"\\frac{x^3 - 2x^2 + 3x - 1}{x - 1}"}</BlockMath>
              <p className="text-sm mt-2">I GeoGebra CAS: <code>(x³ - 2x² + 3x - 1) / (x - 1)</code></p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Restsetningen</h4>
              <p className="text-sm">
                Hvis vi deler P(x) med (x - a), er resten lik P(a)
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Polynomdivisjon',
          description: 'Utfør polynomdivisjon i CAS.',
          appName: 'cas',
          initialCommands: [
            'P(x) = x³ - 2x² + 3x - 1',
            'Simplify(P(x) / (x - 1))',
            'P(1)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Tegn grafen til P(x) = x³ - 4x og finn alle nullpunkter',
        'Faktoriser P(x) = x³ + 2x² - 5x - 6 med Faktoriser()',
        'Hvis P(2) = 0 for P(x) = x³ - 3x² - 4x + 12, faktoriser P(x)',
        'Utfør divisjonen (x³ + 3x² + 2x) / (x + 1)',
        'Bestem graden til polynomet P(x) = 2x⁴ - 3x² + 5x - 1',
      ],
    },
    summary: [
      'Polynom av grad n har formen aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀',
      'Et polynom av grad n har maksimalt n nullpunkter',
      'Hvis P(a) = 0, kan P(x) faktoriseres med (x - a)',
      'Factor(P) faktoriserer polynomet i GeoGebra',
      'Polynomdivisjon: P(x) = Q(x)·D(x) + R(x)',
    ],
    commands: [
      { command: 'Factor(P(x))', description: 'Faktoriserer polynomet', example: 'Factor(x³ - 6x² + 11x - 6)' },
      { command: 'Expand(uttrykk)', description: 'Utvider parenteser', example: 'Expand((x-1)(x-2)(x-3))' },
      { command: 'Grad(P(x))', description: 'Finner graden til polynomet', example: 'Grad(x³ + 2x - 1)' },
      { command: 'Nullpunkt(P(x))', description: 'Finner nullpunkter', example: 'Nullpunkt(x³ - 4x)' },
    ],
  },

  // Kapittel 4: Geometri
  '1t-geometri': {
    introduction: (
      <p className="text-lg">
        Geometri handler om former, konstruksjoner og egenskaper ved figurer.
        Her lærer du om geometriske konstruksjoner, trekanter, sirkler og formlikhet
        med GeoGebras geometriverktøy.
      </p>
    ),
    sections: [
      {
        title: 'Geometriske konstruksjoner',
        content: (
          <div className="space-y-4">
            <p>
              GeoGebra har kraftige verktøy for geometriske konstruksjoner:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Grunnleggende objekter</h4>
                <ul className="text-sm space-y-1">
                  <li>Punkter: A = (x, y)</li>
                  <li>Linjer: Linje(A, B)</li>
                  <li>Strekninger: Linjestykke(A, B)</li>
                  <li>Sirkler: Sirkel(M, r)</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Konstruksjoner</h4>
                <ul className="text-sm space-y-1">
                  <li>Midtpunkt: Midtpunkt(A, B)</li>
                  <li>Vinkelhalveringslinje: Vinkelhalveringslinje()</li>
                  <li>Normalprojektion: Normalfordeling()</li>
                  <li>Parallell: Parallell()</li>
                </ul>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Grunnleggende konstruksjoner',
          description: 'Lag punkter, linjer og sirkler.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (4, 0)',
            'strekning = Segment(A, B)',
            'M = Midpoint(A, B)',
            'sirkel = Circle(M, 2)',
          ],
        },
      },
      {
        title: 'Trekanter',
        content: (
          <div className="space-y-4">
            <p>
              Viktige egenskaper og setninger om trekanter:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Vinkelsum</h4>
                <BlockMath>{"\\alpha + \\beta + \\gamma = 180°"}</BlockMath>
                <p className="text-sm">Summen av vinklene i en trekant er alltid 180°</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Areal</h4>
                <BlockMath>{"A = \\frac{1}{2} \\cdot g \\cdot h"}</BlockMath>
                <p className="text-sm">Grunnlinje × høyde / 2</p>
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Spesielle trekanter</h4>
              <ul className="text-sm space-y-1">
                <li>Likesidet: Alle sider like, alle vinkler 60°</li>
                <li>Likebeint: To sider like, to vinkler like</li>
                <li>Rettvinklet: En vinkel er 90°</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk trekanter',
          description: 'Lag en trekant og mål vinkler og sider.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (5, 0)',
            'C = (2, 4)',
            'trekant = Polygon(A, B, C)',
            'vinkel_A = Angle(B, A, C)',
            'areal = Area(trekant)',
          ],
        },
      },
      {
        title: 'Sirkler',
        content: (
          <div className="space-y-4">
            <p>
              Viktige begreper og formler for sirkler:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Omkrets</h4>
                <BlockMath>{"O = 2\\pi r = \\pi d"}</BlockMath>
                <p className="text-sm">r = radius, d = diameter</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Areal</h4>
                <BlockMath>{"A = \\pi r^2"}</BlockMath>
                <p className="text-sm">Pi × radius²</p>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Periferivinkel</h4>
              <p className="text-sm">
                En periferivinkel er halv så stor som sentrivinkel til samme bue
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk sirkler',
          description: 'Lag en sirkel og beregn omkrets og areal.',
          appName: 'classic',
          initialCommands: [
            'M = (0, 0)',
            'r = 3',
            'sirkel = Circle(M, r)',
            'omkrets = Perimeter(sirkel)',
            'areal = Area(sirkel)',
          ],
        },
      },
      {
        title: 'Formlikhet med Homoteti()',
        content: (
          <div className="space-y-4">
            <p>
              Formlike figurer har samme form men forskjellig størrelse. Bruk Homoteti() for
              å lage formlike figurer:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <code className="text-blue-600">Homoteti(objekt, faktor, sentrum)</code>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Egenskaper ved formlike figurer</h4>
              <ul className="text-sm space-y-1">
                <li>Tilsvarende vinkler er like</li>
                <li>Tilsvarende sider har samme forhold (skaleringsfaktor)</li>
                <li>Areal endres med faktor k²</li>
                <li>Volum endres med faktor k³</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel</h4>
              <p className="text-sm">
                Hvis en trekant forstørres med faktor 2, blir arealet 2² = 4 ganger så stort
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk formlikhet',
          description: 'Lag formlike figurer med Homoteti().',
          appName: 'classic',
          initialCommands: [
            'A = (1, 1)',
            'B = (4, 1)',
            'C = (2, 3)',
            'trekant1 = Polygon(A, B, C)',
            'O = (0, 0)',
            'trekant2 = Dilate(trekant1, 2, O)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Lag en trekant og finn midtpunktet på hver side med Midtpunkt()',
        'Tegn en sirkel med radius 5 og beregn omkrets og areal',
        'Lag en trekant og en forminsket kopi med Homoteti() med faktor 0.5',
        'Konstruer vinkelhalveringslinjen i en trekant med Vinkelhalveringslinje()',
        'Hvis en sirkel har omkrets 31.4, hva er radiusen?',
      ],
    },
    summary: [
      'Vinkelsummen i en trekant er 180°',
      'Sirkel: Omkrets = 2πr, Areal = πr²',
      'Homoteti(objekt, k, O) lager formlik figur med faktor k',
      'Formlike figurer: samme vinkler, sideforhold k, arealforhold k²',
      'GeoGebra har mange verktøy for geometriske konstruksjoner',
    ],
    commands: [
      { command: 'Mangekant(A, B, C)', description: 'Lager polygon/trekant', example: 'Mangekant(A, B, C)' },
      { command: 'Sirkel(M, r)', description: 'Lager sirkel', example: 'Sirkel((0,0), 5)' },
      { command: 'Midtpunkt(A, B)', description: 'Finner midtpunkt', example: 'Midtpunkt(A, B)' },
      { command: 'Vinkel(B, A, C)', description: 'Måler vinkel', example: 'Vinkel(B, A, C)' },
      { command: 'Homoteti(objekt, k, O)', description: 'Skalerer figur', example: 'Homoteti(trekant, 2, (0,0))' },
    ],
  },

  // Kapittel 5: Introduksjon til vektorer
  '1t-vektorer-intro': {
    introduction: (
      <p className="text-lg">
        Vektorer er størrelser med både lengde og retning. De brukes i fysikk, geometri
        og mange andre områder. Her lærer du grunnleggende vektorregning med GeoGebra.
      </p>
    ),
    sections: [
      {
        title: 'Vektorer med Vektor()',
        content: (
          <div className="space-y-4">
            <p>
              En vektor kan defineres på flere måter i GeoGebra:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Fra to punkter</h4>
                <code className="text-sm">v = Vektor(A, B)</code>
                <p className="text-sm mt-2">Vektor fra punkt A til punkt B</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Med koordinater</h4>
                <code className="text-sm">v = (3, 4)</code>
                <p className="text-sm mt-2">Vektor med komponenter x=3, y=4</p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Vektornotasjon</h4>
              <p>En vektor skrives ofte som:</p>
              <BlockMath>{"\\vec{a} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Lag vektorer',
          description: 'Opprett vektorer på forskjellige måter.',
          appName: 'classic',
          initialCommands: [
            'A = (1, 2)',
            'B = (4, 6)',
            'v = Vector(A, B)',
            'u = (2, -1)',
          ],
        },
      },
      {
        title: 'Vektoraddisjon',
        content: (
          <div className="space-y-4">
            <p>
              Vektorer adderes ved å legge sammen tilsvarende komponenter:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\vec{a} + \\vec{b} = \\begin{pmatrix} a_x \\\\ a_y \\end{pmatrix} + \\begin{pmatrix} b_x \\\\ b_y \\end{pmatrix} = \\begin{pmatrix} a_x + b_x \\\\ a_y + b_y \\end{pmatrix}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel</h4>
              <BlockMath>{"\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Geometrisk tolkning</h4>
              <p className="text-sm">
                Summen av to vektorer finner vi ved å plassere dem etter hverandre
                (hodepå hale-metoden) eller ved å lage et parallellogram
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Vektoraddisjon',
          description: 'Legg sammen vektorer og se resultatet.',
          appName: 'classic',
          initialCommands: [
            'v = (3, 2)',
            'u = (1, 4)',
            'sum = v + u',
          ],
        },
      },
      {
        title: 'Vektorsubtraksjon',
        content: (
          <div className="space-y-4">
            <p>
              Vektorer subtraheres ved å trekke fra tilsvarende komponenter:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\vec{a} - \\vec{b} = \\begin{pmatrix} a_x \\\\ a_y \\end{pmatrix} - \\begin{pmatrix} b_x \\\\ b_y \\end{pmatrix} = \\begin{pmatrix} a_x - b_x \\\\ a_y - b_y \\end{pmatrix}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel</h4>
              <BlockMath>{"\\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Vektorsubtraksjon',
          description: 'Trekk fra vektorer.',
          appName: 'classic',
          initialCommands: [
            'v = (5, 7)',
            'u = (2, 3)',
            'differanse = v - u',
          ],
        },
      },
      {
        title: 'Skalarmultiplikasjon',
        content: (
          <div className="space-y-4">
            <p>
              En vektor multiplisert med et tall (skalar) gir en vektor i samme retning,
              men med ny lengde:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"k \\cdot \\vec{a} = k \\cdot \\begin{pmatrix} a_x \\\\ a_y \\end{pmatrix} = \\begin{pmatrix} k \\cdot a_x \\\\ k \\cdot a_y \\end{pmatrix}"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">k {'>'} 1</h4>
                <p className="text-sm">Vektor blir lengre, samme retning</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">0 {'<'} k {'<'} 1</h4>
                <p className="text-sm">Vektor blir kortere, samme retning</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">k {'<'} 0</h4>
                <p className="text-sm">Vektor snur retning</p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Vektorlengde</h4>
                <BlockMath>{"|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}"}</BlockMath>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Skalarmultiplikasjon',
          description: 'Multipliser vektorer med tall.',
          appName: 'classic',
          initialCommands: [
            'v = (3, 2)',
            'k = Slider(-3, 3, 0.1)',
            'w = k * v',
            'lengde = abs(w)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Lag vektoren v fra punktet A = (1, 2) til B = (5, 7) med Vektor()',
        'Beregn summen av v = (3, 5) og u = (2, -1)',
        'Finn differansen mellom v = (7, 4) og u = (3, 2)',
        'Beregn 3v når v = (2, -3)',
        'Finn lengden av vektoren v = (3, 4) med abs(v)',
      ],
    },
    summary: [
      'Vektor: Vektor(A, B) eller (x, y)',
      'Addisjon: komponentvis (a₁+b₁, a₂+b₂)',
      'Subtraksjon: komponentvis (a₁-b₁, a₂-b₂)',
      'Skalarmultiplikasjon: k·v = (k·x, k·y)',
      'Lengde: |v| = √(x² + y²)',
    ],
    commands: [
      { command: 'Vektor(A, B)', description: 'Lager vektor fra A til B', example: 'Vektor((1,2), (4,5))' },
      { command: 'v + u', description: 'Adderer vektorer', example: '(3,2) + (1,4)' },
      { command: 'v - u', description: 'Subtraherer vektorer', example: '(5,7) - (2,3)' },
      { command: 'k * v', description: 'Multipliserer vektor med skalar', example: '3 * (2,1)' },
      { command: 'abs(v)', description: 'Finner lengden av vektor', example: 'abs((3,4))' },
    ],
  },

  // Kapittel 6: Trigonometri
  '1t-trigonometri': {
    introduction: (
      <p className="text-lg">
        Trigonometri handler om sammenhenger mellom vinkler og sider i trekanter.
        Du starter med sinus, cosinus og tangens i rettvinklede trekanter, og lærer
        deretter de avanserte setningene for vilkårlige trekanter.
      </p>
    ),
    sections: [
      {
        title: 'Rettvinklede trekanter',
        content: (
          <div className="space-y-4">
            <p>
              I en rettvinklet trekant har vi spesielle navn på sidene i forhold til en vinkel:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Hypotenus</h4>
                <p className="text-sm text-muted-foreground">
                  Den lengste siden. Ligger motsatt den rette vinkelen.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Motstående katet</h4>
                <p className="text-sm text-muted-foreground">
                  Siden som ligger motsatt vinkelen vi ser på.
                </p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Hosliggende katet</h4>
                <p className="text-sm text-muted-foreground">
                  Siden som ligger inntil vinkelen (ikke hypotenus).
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk rettvinklet trekant',
          description: 'Se på sidene i en rettvinklet trekant.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (4, 0)',
            'C = (0, 3)',
            'trekant = Polygon(A, B, C)',
            'Angle(B, A, C)',
          ],
        },
      },
      {
        title: 'Sinus, cosinus og tangens',
        content: (
          <div className="space-y-4">
            <p>
              De tre grunnleggende trigonometriske funksjonene viser forholdet mellom
              sider og vinkler:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Sinus (sin)</h4>
                <BlockMath>{"\\sin(v) = \\frac{\\text{motstående}}{\\text{hypotenus}}"}</BlockMath>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Cosinus (cos)</h4>
                <BlockMath>{"\\cos(v) = \\frac{\\text{hosliggende}}{\\text{hypotenus}}"}</BlockMath>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-bold mb-2">Tangens (tan)</h4>
                <BlockMath>{"\\tan(v) = \\frac{\\text{motstående}}{\\text{hosliggende}}"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Huskeregel (SOH-CAH-TOA):</h4>
              <ul className="text-sm space-y-1">
                <li><strong>SOH:</strong> <strong>S</strong>in = <strong>O</strong>pposite / <strong>H</strong>ypotenuse</li>
                <li><strong>CAH:</strong> <strong>C</strong>os = <strong>A</strong>djacent / <strong>H</strong>ypotenuse</li>
                <li><strong>TOA:</strong> <strong>T</strong>an = <strong>O</strong>pposite / <strong>A</strong>djacent</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: 'Finne sider og vinkler',
        content: (
          <div className="space-y-4">
            <p>
              Med trigonometri kan vi finne ukjente sider og vinkler i rettvinklede trekanter.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-3">Finne side:</h4>
              <p className="text-sm mb-2">
                Hypotenus = 10 cm, vinkel = 30°. Finn motstående katet:
              </p>
              <BlockMath>{"\\sin(30°) = \\frac{\\text{motstående}}{10}"}</BlockMath>
              <BlockMath>{"\\text{motstående} = 10 \\cdot \\sin(30°) = 5 \\text{ cm}"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-3">Finne vinkel:</h4>
              <p className="text-sm mb-2">
                Motstående = 3, hosliggende = 4. Finn vinkelen:
              </p>
              <BlockMath>{"\\tan(v) = \\frac{3}{4}"}</BlockMath>
              <BlockMath>{"v = \\tan^{-1}\\left(\\frac{3}{4}\\right) \\approx 36.87°"}</BlockMath>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra:</h4>
              <ul className="text-sm space-y-1">
                <li><code className="text-blue-600">sin(30°)</code>, <code className="text-blue-600">cos(45°)</code>, <code className="text-blue-600">tan(60°)</code></li>
                <li><code className="text-blue-600">asin(0.5)</code>, <code className="text-blue-600">acos(0.5)</code>, <code className="text-blue-600">atan(1)</code> for inverse</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn sider og vinkler',
          description: 'Bruk trigonometri til å finne ukjente verdier.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (10, 0)',
            'vinkel = 30°',
            'C = (0, 10*sin(vinkel))',
            'trekant = Polygon(A, B, C)',
            'motstående = Distance(A, C)',
          ],
        },
      },
      {
        title: 'Sinussetningen',
        content: (
          <div className="space-y-4">
            <p>
              Sinussetningen gir en sammenheng mellom sider og motstående vinkler:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Når bruker vi sinussetningen?</h4>
              <ul className="text-sm space-y-1">
                <li>Vi kjenner to vinkler og en side (VVS)</li>
                <li>Vi kjenner to sider og en motstående vinkel (SSV)</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel</h4>
              <p className="text-sm">
                I en trekant er A = 40°, B = 60° og a = 5. Finn b:
              </p>
              <BlockMath>{"\\frac{5}{\\sin 40°} = \\frac{b}{\\sin 60°}"}</BlockMath>
              <BlockMath>{"b = \\frac{5 \\cdot \\sin 60°}{\\sin 40°} \\approx 6{,}74"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk sinussetningen',
          description: 'Lag en trekant og bruk sinussetningen.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (5, 0)',
            'vinkelA = 40°',
            'vinkelB = 60°',
            'C = Rotate(B, vinkelA, A)',
          ],
        },
      },
      {
        title: 'Cosinussetningen',
        content: (
          <div className="space-y-4">
            <p>
              Cosinussetningen er en generalisering av Pytagoras setning:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"c^2 = a^2 + b^2 - 2ab\\cos C"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Når bruker vi cosinussetningen?</h4>
              <ul className="text-sm space-y-1">
                <li>Vi kjenner tre sider (SSS)</li>
                <li>Vi kjenner to sider og innliggende vinkel (SVS)</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Finn vinkel</h4>
              <p className="text-sm">
                I en trekant er a = 5, b = 7, c = 8. Finn vinkel C:
              </p>
              <BlockMath>{"8^2 = 5^2 + 7^2 - 2 \\cdot 5 \\cdot 7 \\cdot \\cos C"}</BlockMath>
              <BlockMath>{"64 = 25 + 49 - 70\\cos C"}</BlockMath>
              <BlockMath>{"\\cos C = \\frac{10}{70} = \\frac{1}{7}"}</BlockMath>
              <BlockMath>{"C = \\arccos(\\frac{1}{7}) \\approx 81{,}8°"}</BlockMath>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Merk:</h4>
              <p className="text-sm">
                Hvis C = 90°, blir cos C = 0, og vi får Pytagoras: c² = a² + b²
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk cosinussetningen',
          description: 'Lag en trekant og bruk cosinussetningen.',
          appName: 'classic',
          initialCommands: [
            'A = (0, 0)',
            'B = (5, 0)',
            'C = (2, 4)',
            'trekant = Polygon(A, B, C)',
            'a = Distance(B, C)',
            'b = Distance(A, C)',
            'c = Distance(A, B)',
            'vinkelC = Angle(A, C, B)',
          ],
        },
      },
      {
        title: 'Arealsetningen',
        content: (
          <div className="space-y-4">
            <p>
              Arealsetningen gir arealet av en trekant når vi kjenner to sider og
              innliggende vinkel:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"A = \\frac{1}{2}ab\\sin C"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel</h4>
              <p className="text-sm">
                En trekant har sider a = 6 og b = 8, med innliggende vinkel C = 30°
              </p>
              <BlockMath>{"A = \\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot \\sin 30° = \\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot 0{,}5 = 12"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Alternative former</h4>
              <BlockMath>{"A = \\frac{1}{2}ab\\sin C = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ac\\sin B"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk arealsetningen',
          description: 'Beregn areal med arealsetningen.',
          appName: 'classic',
          initialCommands: [
            'a = 6',
            'b = 8',
            'vinkelC = 30°',
            'areal = 0.5 * a * b * sin(vinkelC)',
          ],
        },
      },
      {
        title: 'Sammenligning av setningene',
        content: (
          <div className="space-y-4">
            <p>
              Oversikt over når du skal bruke hvilken setning:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Gitt</th>
                    <th className="border p-2 text-left">Bruk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">To vinkler og en side (VVS)</td>
                    <td className="border p-2">Sinussetningen</td>
                  </tr>
                  <tr>
                    <td className="border p-2">To sider og motstående vinkel (SSV)</td>
                    <td className="border p-2">Sinussetningen</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Tre sider (SSS)</td>
                    <td className="border p-2">Cosinussetningen</td>
                  </tr>
                  <tr>
                    <td className="border p-2">To sider og innliggende vinkel (SVS)</td>
                    <td className="border p-2">Cosinussetningen</td>
                  </tr>
                  <tr>
                    <td className="border p-2">To sider og innliggende vinkel (areal)</td>
                    <td className="border p-2">Arealsetningen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Bruk sinussetningen: a = 7, A = 50°, B = 60°. Finn b',
        'Bruk cosinussetningen: a = 5, b = 6, c = 7. Finn vinkel C',
        'Bruk arealsetningen: a = 10, b = 12, C = 45°. Finn arealet',
        'En trekant har vinkler A = 40°, B = 70° og side a = 8. Finn c',
        'En trekant har sider a = 3, b = 4, c = 5. Finn alle vinklene',
      ],
    },
    summary: [
      'Sinussetningen: a/sin A = b/sin B = c/sin C',
      'Cosinussetningen: c² = a² + b² - 2ab cos C',
      'Arealsetningen: A = (1/2)ab sin C',
      'Sinussetningen: VVS eller SSV',
      'Cosinussetningen: SSS eller SVS',
    ],
    commands: [
      { command: 'sin(vinkel)', description: 'Beregner sinus', example: 'sin(30°)' },
      { command: 'cos(vinkel)', description: 'Beregner cosinus', example: 'cos(60°)' },
      { command: 'arcsin(x)', description: 'Invers sinus', example: 'arcsin(0.5)' },
      { command: 'arccos(x)', description: 'Invers cosinus', example: 'arccos(0.5)' },
      { command: 'Avstand(A, B)', description: 'Finner avstand mellom punkter', example: 'Avstand(A, B)' },
    ],
  },

  // 2P - Praktisk matematikk VG2
  // Kapittel 1: Modellering
  '2p-modellering': {
    introduction: (
      <p className="text-lg">
        Modellering handler om å bruke matematikk til å beskrive virkeligheten.
        I dette kapittelet lærer du å lage matematiske modeller, tilpasse funksjoner til data,
        og bruke modellene til å gjøre prediksjoner.
      </p>
    ),
    sections: [
      {
        title: 'Hva er en matematisk modell?',
        content: (
          <div className="space-y-4">
            <p>
              En matematisk modell er en forenklet matematisk beskrivelse av et fenomen i virkeligheten.
              Modeller brukes til å forstå, forklare og forutsi.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Lineære modeller</h4>
                <p className="text-muted-foreground">
                  Konstant endring. Eksempel: Timelønn, månedlig sparing
                </p>
                <div className="mt-2">
                  <BlockMath>{"y = ax + b"}</BlockMath>
                </div>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Eksponentielle modeller</h4>
                <p className="text-muted-foreground">
                  Prosentvis endring. Eksempel: Befolkningsvekst, renter
                </p>
                <div className="mt-2">
                  <BlockMath>{"y = a \\cdot b^x"}</BlockMath>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Tilpasse funksjoner til data',
        content: (
          <div className="space-y-4">
            <p>
              Når vi har måledata, kan vi finne en funksjon som passer godt til punktene.
              Dette kalles å tilpasse en funksjon eller kurvetilpassing.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Viktige GeoGebra-kommandoer:</h4>
              <ul className="space-y-2">
                <li><code className="text-blue-600">RegLin(punktliste)</code> - Tilpasser en lineær funksjon</li>
                <li><code className="text-blue-600">RegEksp(punktliste)</code> - Tilpasser en eksponentiell funksjon</li>
                <li><code className="text-blue-600">RegPoly(punktliste, grad)</code> - Tilpasser et polynom</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Tilpass en lineær modell',
          description: 'Se hvordan GeoGebra finner best mulig linje gjennom datapunktene.',
          appName: 'classic',
          initialCommands: [
            'data = {{1,2},{2,4},{3,5},{4,7},{5,9}}',
            'f = RegLin(data)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Lag et datasett med 5-6 punkter som viser lineær sammenheng',
        'Bruk RegLin() til å finne beste tilpassede linje',
        'Gjør en prediksjon for x = 10 med din modell',
      ],
    },
    summary: [
      'Matematiske modeller forenkler virkeligheten til matematiske sammenhenger',
      'RegLin(), RegEksp() og RegPoly() tilpasser funksjoner til data',
      'Alle modeller har begrensninger og forutsetninger',
    ],
    commands: [
      { command: 'RegLin(punktliste)', description: 'Lineær regresjonsmodell', example: 'RegLin({{1,2},{2,4},{3,6}})' },
      { command: 'RegEksp(punktliste)', description: 'Eksponentiell regresjonsmodell', example: 'RegEksp({{1,2},{2,4},{3,8}})' },
      { command: 'RegPoly(punktliste, grad)', description: 'Polynomisk regresjonsmodell', example: 'RegPoly(data, 2)' },
    ],
  },

  // 2P - Kapittel 2: Regresjon
  '2p-regresjon': {
    introduction: (
      <p className="text-lg">
        Regresjon er metoden for å finne den funksjonen som best beskriver sammenhengen
        mellom to variable. Her lærer du å bruke lineær og eksponentiell regresjon,
        samt å vurdere hvor god tilpasningen er.
      </p>
    ),
    sections: [
      {
        title: 'Lineær regresjon',
        content: (
          <div className="space-y-4">
            <p>
              Lineær regresjon finner den rette linjen som passer best til dataene.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <BlockMath>{"y = ax + b"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Lineær regresjon',
          description: 'Se hvordan regresjonslinjen tilpasses datapunktene.',
          appName: 'classic',
          initialCommands: [
            'data = {{1,2.1},{2,3.9},{3,5.8},{4,8.2},{5,10.1}}',
            'f = RegLin(data)',
          ],
        },
      },
      {
        title: 'Korrelasjon og R²',
        content: (
          <div className="space-y-4">
            <p>
              Korrelasjonskoeffisienten r måler styrken på sammenhengen. R²-verdien viser
              hvor mye av variasjonen som forklares av modellen.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <code className="text-blue-600 block">r = Korrelasjon(data)</code>
              <code className="text-blue-600 block mt-2">R2 = R2(f)</code>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Lag et datasett med sterk positiv korrelasjon (r > 0.9)',
        'Beregn korrelasjonskoeffisienten med Korrelasjon()',
        'Lag en lineær regresjonsmodell og finn R²-verdien',
      ],
    },
    summary: [
      'Regresjon finner funksjonen som best passer til data',
      'RegLin() for lineær regresjon, RegEksp() for eksponentiell',
      'Korrelasjonskoeffisient r måler styrken på lineær sammenheng (-1 til 1)',
      'R²-verdien forteller hvor stor andel av variasjonen som forklares (0 til 1)',
    ],
    commands: [
      { command: 'RegLin(data)', description: 'Lineær regresjonsanalyse', example: 'f = RegLin({{1,2},{2,4}})' },
      { command: 'Korrelasjon(data)', description: 'Beregner r', example: 'r = Korrelasjon(data)' },
      { command: 'R2(funksjon)', description: 'Beregner R²-verdi', example: 'R2 = R2(f)' },
    ],
  },

  // 2P - Kapittel 3: Statistisk analyse
  '2p-statistikk': {
    introduction: (
      <p className="text-lg">
        Statistikk handler om å samle inn, organisere, analysere og tolke data.
        Her lærer du å beregne sentralmål, spredningsmål og forstå normalfordeling.
      </p>
    ),
    sections: [
      {
        title: 'Sentralmål og spredningsmål',
        content: (
          <div className="space-y-4">
            <p>Viktige statistiske mål:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Gjennomsnitt(liste)</strong> - Gjennomsnitt</li>
              <li><strong>Median(liste)</strong> - Median</li>
              <li><strong>SD(liste)</strong> - Standardavvik</li>
              <li><strong>Q1(liste), Q3(liste)</strong> - Kvartiler</li>
            </ul>
          </div>
        ),
        geogebra: {
          title: 'Beregn statistiske mål',
          description: 'Analyser datafordelingen.',
          appName: 'classic',
          initialCommands: [
            'data = {12, 15, 18, 20, 22, 25, 28, 30, 35, 40}',
            'Mean(data)',
            'SD(data)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Lag et datasett med 15-20 verdier',
        'Beregn gjennomsnitt, median og standardavvik',
        'Lag et boksplott av dataene',
      ],
    },
    summary: [
      'Sentralmål: Gjennomsnitt(), Median(), Typetall()',
      'Spredningsmål: Q1(), Q3(), SD()',
      'Boksplott visualiserer kvartiler og spredning',
    ],
    commands: [
      { command: 'Gjennomsnitt(liste)', description: 'Beregner gjennomsnittet', example: 'Gjennomsnitt({1,2,3,4,5})' },
      { command: 'SD(liste)', description: 'Beregner standardavviket', example: 'SD(data)' },
      { command: 'Boksplott(y, bredde, liste)', description: 'Lager boksplott', example: 'Boksplott(1, 0.5, data)' },
    ],
  },

  // 2P - Kapittel 4: Sannsynlighet
  '2p-sannsynlighet': {
    introduction: (
      <p className="text-lg">
        Sannsynlighet handler om å beregne sjansen for at noe skal skje.
        Her lærer du sannsynlighetsregler, kombinatorikk, simulering og binomisk sannsynlighet.
      </p>
    ),
    sections: [
      {
        title: 'Kombinatorikk',
        content: (
          <div className="space-y-4">
            <p>Viktige kombinatoriske verktøy:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>n!</strong> - Fakultet</li>
              <li><strong>nPr(n, r)</strong> - Permutasjoner</li>
              <li><strong>nCr(n, r)</strong> - Kombinasjoner</li>
            </ul>
          </div>
        ),
        geogebra: {
          title: 'Beregn kombinatorikk',
          description: 'Bruk fakultet, permutasjoner og kombinasjoner.',
          appName: 'classic',
          initialCommands: [
            'fakultet = 5!',
            'perm = nPr(10, 3)',
            'komb = nCr(10, 3)',
          ],
        },
      },
      {
        title: 'Binomisk sannsynlighet',
        content: (
          <div className="space-y-4">
            <p>
              Binomisk sannsynlighet brukes når vi har et visst antall uavhengige forsøk
              med to mulige utfall.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <code className="text-blue-600 block">Binomialfordeling(n, p, k, false)</code>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Beregn nCr(52, 5) (antall pokerhender)',
        'Simuler 1000 myntkast med RandomBetween()',
        'Beregn sannsynligheten for nøyaktig 7 mynt i 10 kast',
      ],
    },
    summary: [
      'P(A) = gunstige/mulige, alltid mellom 0 og 1',
      'Kombinatorikk: n!, nPr(n,r), nCr(n,r)',
      'Binomialfordeling(n, p, k) for binomisk sannsynlighet',
    ],
    commands: [
      { command: 'RandomBetween(a, b)', description: 'Tilfeldig heltall mellom a og b', example: 'RandomBetween(1, 6)' },
      { command: 'nCr(n, r)', description: 'Kombinasjoner', example: 'nCr(52, 5)' },
      { command: 'Binomialfordeling(n, p, k, kum)', description: 'Binomisk sannsynlighet', example: 'Binomialfordeling(10, 0.5, 6, false)' },
    ],
  },

  // 2P - Kapittel 5: Funksjoner og økonomi
  '2p-funksjoner': {
    introduction: (
      <p className="text-lg">
        I dette kapittelet lærer du å bruke funksjoner til å analysere økonomiske problemstillinger
        som inntekt, kostnad, profitt, break-even og optimering.
      </p>
    ),
    sections: [
      {
        title: 'Inntekt, kostnad og profitt',
        content: (
          <div className="space-y-4">
            <p>Økonomiske funksjoner:</p>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold">Inntekt</h4>
                <BlockMath>{"I(x) = p \\cdot x"}</BlockMath>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-bold">Kostnad</h4>
                <BlockMath>{"K(x) = K_f + k_v \\cdot x"}</BlockMath>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold">Profitt</h4>
                <BlockMath>{"P(x) = I(x) - K(x)"}</BlockMath>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Visualiser økonomi',
          description: 'Se hvordan inntekt, kostnad og profitt henger sammen.',
          appName: 'classic',
          initialCommands: [
            'I(x) = 200*x',
            'K(x) = 10000 + 80*x',
            'P(x) = I(x) - K(x)',
          ],
        },
      },
      {
        title: 'Break-even og optimering',
        content: (
          <div className="space-y-4">
            <p>Finn break-even punktet der inntekt = kostnad:</p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <code className="text-blue-600 block">breakeven = Skjæring(I, K)</code>
            </div>
            <p>Finn maksimal profitt:</p>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <code className="text-blue-600 block">maks = Extremum(P)</code>
            </div>
          </div>
        ),
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Lag inntekts- og kostnadsfunksjon for en bedrift',
        'Beregn profittfunksjonen P(x) = I(x) - K(x)',
        'Finn break-even punktet med Skjæring()',
      ],
    },
    summary: [
      'Inntekt: I(x) = p·x, Kostnad: K(x) = Kf + kv·x',
      'Profitt: P(x) = I(x) - K(x)',
      'Break-even: Skjæring(I, K)',
    ],
    commands: [
      { command: 'I(x) = p*x', description: 'Inntektsfunksjon', example: 'I(x) = 200*x' },
      { command: 'K(x) = Kf + kv*x', description: 'Kostnadsfunksjon', example: 'K(x) = 10000 + 80*x' },
      { command: 'Skjæring(f, g)', description: 'Finner skjæringspunkt (break-even)', example: 'Skjæring(I, K)' },
      { command: 'Ekstremalpunkt(f)', description: 'Finner ekstremalpunkt (maks/min)', example: 'Ekstremalpunkt(P)' },
    ],
  },
  // S1 - Samfunnsfaglig matematikk VG2
  // Kapittel 1: Funksjonsanalyse
  's1-funksjoner': {
    introduction: (
      <p className="text-lg">
        Funksjonsanalyse handler om å forstå egenskapene til en funksjon:
        hvor den er definert, hvilke verdier den kan ta, hvor den vokser og avtar,
        og hvor den har sine høyeste og laveste punkter.
      </p>
    ),
    sections: [
      {
        title: 'Definisjonsmengde og verdimengde',
        content: (
          <div className="space-y-4">
            <p>
              <strong>Definisjonsmengden</strong> (D<sub>f</sub>) er alle x-verdier funksjonen
              kan ta. <strong>Verdimengden</strong> (V<sub>f</sub>) er alle y-verdier funksjonen
              kan gi.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Definisjonsmengde</h4>
                <p className="text-muted-foreground mb-2">
                  Hvilke x-verdier kan vi sette inn?
                </p>
                <ul className="text-sm space-y-1">
                  <li>For polynomer: D<sub>f</sub> = ℝ (alle reelle tall)</li>
                  <li>For brøk: x ≠ verdier som gjør nevner = 0</li>
                  <li>For √x: x ≥ 0</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Verdimengde</h4>
                <p className="text-muted-foreground mb-2">
                  Hvilke y-verdier kan funksjonen gi?
                </p>
                <ul className="text-sm space-y-1">
                  <li>Se på grafen: hva er laveste/høyeste y?</li>
                  <li>Kvadratisk funksjon: y ≥ toppunkt (eller y ≤)</li>
                  <li>Lineær funksjon: V<sub>f</sub> = ℝ</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: f(x) = x² - 4x + 3</h4>
              <p className="text-sm">
                D<sub>f</sub> = ℝ (alle reelle tall)<br/>
                V<sub>f</sub> = [-1, ∞) (funksjonen har minimum -1)
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk definisjonsmengde og verdimengde',
          description: 'Se hvordan funksjonen oppfører seg og hvilke verdier den kan ta.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^2 - 4x + 3',
            'Extremum(f)',
          ],
        },
      },
      {
        title: 'Monotoni - vokser og avtar',
        content: (
          <div className="space-y-4">
            <p>
              En funksjon er <strong>voksende</strong> når y-verdiene øker når x øker.
              Den er <strong>avtagende</strong> når y-verdiene minker når x øker.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <h4 className="font-bold">Voksende</h4>
                <p className="text-sm text-muted-foreground">
                  f(x₁) &lt; f(x₂) når x₁ &lt; x₂
                </p>
                <p className="text-sm mt-2">
                  Grafen går oppover når x øker →
                </p>
              </div>
              <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <h4 className="font-bold">Avtagende</h4>
                <p className="text-sm text-muted-foreground">
                  f(x₁) &gt; f(x₂) når x₁ &lt; x₂
                </p>
                <p className="text-sm mt-2">
                  Grafen går nedover når x øker →
                </p>
              </div>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Finn monotoni grafisk:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Tegn grafen til funksjonen</li>
                <li>Se hvor grafen går opp (voksende) og ned (avtagende)</li>
                <li>Finn x-verdiene for intervallene</li>
              </ol>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Analyser monotoni',
          description: 'Se hvor funksjonen vokser og avtar.',
          appName: 'classic',
          initialCommands: [
            'f(x) = -x^2 + 4x + 1',
            'Extremum(f)',
          ],
        },
      },
      {
        title: 'Ekstremalverdier - topp- og bunnpunkt',
        content: (
          <div className="space-y-4">
            <p>
              Et <strong>toppunkt</strong> (maksimum) er det høyeste punktet lokalt på grafen.
              Et <strong>bunnpunkt</strong> (minimum) er det laveste punktet lokalt.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra:</h4>
              <code className="text-blue-600">Ekstremalpunkt(f)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Finner alle topp- og bunnpunkter automatisk
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">For kvadratisk funksjon f(x) = ax² + bx + c:</h4>
              <BlockMath>{"x_{topp} = -\\frac{b}{2a}"}</BlockMath>
              <p className="text-sm text-muted-foreground">
                a &gt; 0: bunnpunkt (smiler)<br/>
                a &lt; 0: toppunkt (sur)
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn ekstremalverdier',
          description: 'Bruk Ekstremalpunkt() for å finne topp- og bunnpunkt.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^3 - 3x^2 - 9x + 5',
            'E = Extremum(f)',
          ],
        },
      },
      {
        title: 'CAS - Computer Algebra System',
        content: (
          <div className="space-y-4">
            <p>
              GeoGebra CAS kan gjøre symbolske beregninger: forenkle, faktorisere,
              løse likninger og mye mer.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold">Viktige CAS-kommandoer:</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li><code>Løs(likning, x)</code> - løs likning</li>
                  <li><code>Faktoriser(uttrykk)</code> - faktoriser</li>
                  <li><code>Utvid(uttrykk)</code> - utvid</li>
                  <li><code>Forenkle(uttrykk)</code> - forenkle</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold">Eksempel:</h4>
                <p className="text-sm mt-2">
                  <code>Løs(x² - 5x + 6 = 0, x)</code><br/>
                  → {'{'}x = 2, x = 3{'}'}
                </p>
                <p className="text-sm mt-2">
                  <code>Faktoriser(x² - 5x + 6)</code><br/>
                  → (x - 2)(x - 3)
                </p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Bruk CAS for funksjonsanalyse',
          description: 'Løs likninger og forenkle uttrykk symbolsk.',
          appName: 'cas',
          initialCommands: [
            'f(x) := x^2 - 5x + 6',
            'Solve(f(x) = 0, x)',
            'Factor(f(x))',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn definisjonsmengde og verdimengde for f(x) = x² - 6x + 5',
        'Bestem hvor f(x) = -x² + 8x - 7 er voksende og avtagende',
        'Finn toppunktet til f(x) = -2x² + 12x - 10',
        'Bruk CAS til å løse x² - 7x + 12 = 0',
        'Finn nullpunktene til f(x) = x³ - 4x',
      ],
    },
    summary: [
      'Definisjonsmengde: hvilke x-verdier funksjonen kan ta',
      'Verdimengde: hvilke y-verdier funksjonen kan gi',
      'Voksende: grafen går opp, avtagende: grafen går ned',
      'Extremum(f) finner topp- og bunnpunkt',
      'Bruk CAS for symbolske beregninger',
    ],
    commands: [
      { command: 'f(x) = uttrykk', description: 'Definerer en funksjon', example: 'f(x) = x^2 - 4x + 3' },
      { command: 'Ekstremalpunkt(f)', description: 'Finner alle ekstremalverdier', example: 'Ekstremalpunkt(f)' },
      { command: 'Løs(f(x) = 0, x)', description: 'Løser likning i CAS', example: 'Løs(x^2 - 5x + 6 = 0, x)' },
      { command: 'Factor(uttrykk)', description: 'Faktoriserer uttrykk', example: 'Factor(x^2 - 5x + 6)' },
      { command: 'Simplify(uttrykk)', description: 'Forenkler uttrykk', example: 'Simplify((x^2-4)/(x-2))' },
    ],
  },

  // S1 - Kapittel 2: Derivasjon
  's1-derivasjon': {
    introduction: (
      <p className="text-lg">
        Den deriverte av en funksjon forteller oss hvor bratt grafen er i et punkt.
        Den viser hvor raskt funksjonen endrer seg, og er et kraftig verktøy
        for å analysere vekst, optimering og bevegelse.
      </p>
    ),
    sections: [
      {
        title: 'Hva er den deriverte?',
        content: (
          <div className="space-y-4">
            <p>
              Den deriverte f&apos;(x) til en funksjon f(x) er <strong>stigningstallet</strong> til
              tangenten i punktet (x, f(x)).
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Definisjon:</h4>
              <BlockMath>{"f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold">Geometrisk tolkning</h4>
                <p className="text-sm text-muted-foreground">
                  f&apos;(x) = stigningstallet til tangenten
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold">Fysisk tolkning</h4>
                <p className="text-sm text-muted-foreground">
                  f&apos;(x) = momentan endringshastighet
                </p>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg mt-4">
              <p className="font-semibold">Viktig sammenheng:</p>
              <ul className="text-sm space-y-1 mt-2">
                <li>f&apos;(x) &gt; 0 ⟹ f er voksende</li>
                <li>f&apos;(x) &lt; 0 ⟹ f er avtagende</li>
                <li>f&apos;(x) = 0 ⟹ horisontal tangent (topp/bunn/terrassepunkt)</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk den deriverte',
          description: 'Se hvordan tangenten endrer seg langs grafen.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^2 - 4x + 3',
            'a = Slider(0, 5, 0.1)',
            'A = (a, f(a))',
            't = Tangent(A, f)',
          ],
        },
      },
      {
        title: 'Derivasjonsregler',
        content: (
          <div className="space-y-4">
            <p>
              I stedet for å bruke definisjonen hver gang, bruker vi derivasjonsregler:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold">Potensregelen:</h4>
                <BlockMath>{"f(x) = x^n \\quad \\Rightarrow \\quad f'(x) = n \\cdot x^{n-1}"}</BlockMath>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold">Konstantregel:</h4>
                <BlockMath>{"f(x) = c \\quad \\Rightarrow \\quad f'(x) = 0"}</BlockMath>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold">Sumregel:</h4>
                <BlockMath>{"f(x) = g(x) + h(x) \\quad \\Rightarrow \\quad f'(x) = g'(x) + h'(x)"}</BlockMath>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold">Konstantfaktorregel:</h4>
                <BlockMath>{"f(x) = c \\cdot g(x) \\quad \\Rightarrow \\quad f'(x) = c \\cdot g'(x)"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <BlockMath>{"f(x) = 3x^4 - 5x^2 + 7x - 2"}</BlockMath>
              <BlockMath>{"f'(x) = 12x^3 - 10x + 7"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Øv på derivasjon',
          description: 'Bruk Derivert() for å finne den deriverte.',
          appName: 'cas',
          initialCommands: [
            'f(x) := 3x^4 - 5x^2 + 7x - 2',
            'Derivative(f)',
          ],
        },
      },
      {
        title: 'Tangentligning',
        content: (
          <div className="space-y-4">
            <p>
              Tangenten til f(x) i punktet (a, f(a)) er en rett linje med stigningstall f&apos;(a).
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Ettpunktsformelen:</h4>
              <BlockMath>{"y - f(a) = f'(a) \\cdot (x - a)"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">eller</p>
              <BlockMath>{"y = f'(a) \\cdot x + (f(a) - a \\cdot f'(a))"}</BlockMath>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Framgangsmåte:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Finn f(a) - y-koordinaten til punktet</li>
                <li>Finn f&apos;(x) - den deriverte</li>
                <li>Finn f&apos;(a) - stigningstallet i x = a</li>
                <li>Sett inn i ettpunktsformelen</li>
              </ol>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">I GeoGebra:</p>
              <code className="text-blue-600">Tangent((a, f(a)), f)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn tangentligning',
          description: 'Tegn tangenten i et punkt og finn likningen.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^2 - 3x + 2',
            'a = 2',
            'A = (a, f(a))',
            't = Tangent(A, f)',
          ],
        },
      },
      {
        title: 'Derivasjon i CAS',
        content: (
          <div className="space-y-4">
            <p>
              GeoGebra CAS kan derivere funksjoner både symbolsk og numerisk.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold">Symbolsk derivasjon:</h4>
                <code className="text-blue-600 block mt-2">Derivert(f(x))</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Gir den deriverte som en formel
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold">Numerisk derivasjon:</h4>
                <code className="text-blue-600 block mt-2">Derivert(f, a)</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Gir verdien av f&apos;(a)
                </p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Høyere ordens deriverte:</h4>
              <ul className="text-sm space-y-1">
                <li><code>Derivert(f, 2)</code> - andrederiverte f&apos;&apos;(x)</li>
                <li><code>Derivert(f, 3)</code> - tredjederiverte f&apos;&apos;&apos;(x)</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Bruk CAS for derivasjon',
          description: 'Deriver funksjoner både symbolsk og numerisk.',
          appName: 'cas',
          initialCommands: [
            'f(x) := x^3 - 6x^2 + 9x + 1',
            'f1 := Derivative(f)',
            'f2 := Derivative(f, 2)',
            'f1(2)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Deriver f(x) = 2x³ - 5x² + 3x - 7',
        'Finn tangentlikningen til f(x) = x² - 4x + 1 i x = 3',
        'Bestem hvor f(x) = x³ - 3x² har horisontal tangent',
        'Bruk CAS til å finne f\'\'(x) for f(x) = x⁴ - 8x²',
        'Finn stigningstallet til f(x) = -x² + 6x i x = 2',
      ],
    },
    summary: [
      'f\'(x) = stigningstallet til tangenten i x',
      'Potensregelen: (xⁿ)\' = n·xⁿ⁻¹',
      'f\'(x) > 0: voksende, f\'(x) < 0: avtagende, f\'(x) = 0: horisontal tangent',
      'Tangent i (a, f(a)): y - f(a) = f\'(a)·(x - a)',
      'Derivative(f) i CAS gir den deriverte symbolsk',
    ],
    commands: [
      { command: 'Derivert(f)', description: 'Deriverer funksjonen f symbolsk', example: 'Derivert(x^3 - 2x)' },
      { command: 'Derivert(f, a)', description: 'Beregner f\'(a) numerisk', example: 'Derivert(f, 2)' },
      { command: 'Tangent(punkt, f)', description: 'Tegner tangent til f i punktet', example: 'Tangent((2, f(2)), f)' },
      { command: 'Derivert(f, n)', description: 'n-te deriverte av f', example: 'Derivert(f, 2)' },
    ],
  },

  // S1 - Kapittel 3: Optimering
  's1-optimering': {
    introduction: (
      <p className="text-lg">
        Optimering handler om å finne den beste løsningen på et problem -
        for eksempel maksimal profitt, minimal kostnad eller optimal størrelse.
        Derivasjon er nøkkelen til å løse optimeringsproblemer.
      </p>
    ),
    sections: [
      {
        title: 'Toppunkt og bunnpunkt',
        content: (
          <div className="space-y-4">
            <p>
              Et <strong>toppunkt</strong> (lokalt maksimum) er et punkt hvor funksjonen har
              høyest verdi i sitt nærområde. Et <strong>bunnpunkt</strong> (lokalt minimum)
              er et punkt hvor funksjonen har lavest verdi.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Betingelser for ekstremalpunkt:</h4>
              <BlockMath>{"f'(x_0) = 0 \\quad \\text{(nødvendig betingelse)}"}</BlockMath>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Toppunkt:</strong> f&apos;&apos;(x₀) &lt; 0 (konkav)</p>
                <p><strong>Bunnpunkt:</strong> f&apos;&apos;(x₀) &gt; 0 (konveks)</p>
              </div>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Framgangsmåte:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Finn f&apos;(x) og løs f&apos;(x) = 0</li>
                <li>Finn f&apos;&apos;(x)</li>
                <li>Sjekk f&apos;&apos;(x₀) for å avgjøre type ekstremalpunkt</li>
                <li>Beregn f(x₀) for å finne y-koordinaten</li>
              </ol>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">I GeoGebra:</p>
              <code className="text-blue-600">Ekstremalpunkt(f)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Finner alle topp- og bunnpunkter automatisk
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk ekstremalpunkter',
          description: 'Se topp- og bunnpunkter på grafen.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^3 - 6x^2 + 9x + 1',
            'Extremum(f)',
          ],
        },
      },
      {
        title: 'Vendepunkt',
        content: (
          <div className="space-y-4">
            <p>
              Et <strong>vendepunkt</strong> er et punkt hvor grafen skifter fra å være
              konkav til konveks, eller omvendt. Her endrer krumningen seg.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Betingelse for vendepunkt:</h4>
              <BlockMath>{"f''(x_0) = 0 \\quad \\text{og} \\quad f''(x) \\text{ skifter fortegn}"}</BlockMath>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold">Konkav (f&apos;&apos; &lt; 0)</h4>
                <p className="text-sm text-muted-foreground">
                  Grafen buer nedover (∩-form)
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold">Konveks (f&apos;&apos; &gt; 0)</h4>
                <p className="text-sm text-muted-foreground">
                  Grafen buer oppover (∪-form)
                </p>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg mt-4">
              <p className="font-semibold mb-2">I GeoGebra:</p>
              <code className="text-blue-600">Vendepunkt(f)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn vendepunkt',
          description: 'Bruk Vendepunkt() for å finne vendepunkter.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^3 - 3x^2 + 2',
            'InflectionPoint(f)',
          ],
        },
      },
      {
        title: 'Praktiske optimeringsproblemer',
        content: (
          <div className="space-y-4">
            <p>
              Mange praktiske problemer kan løses med optimering - fra å finne
              optimal emballasje til maksimal profitt i økonomiske modeller.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Typiske optimeringsproblemer:</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Område/volum:</strong> Finn dimensjoner for maksimalt areal/volum</li>
                <li><strong>Økonomi:</strong> Maksimer profitt, minimer kostnader</li>
                <li><strong>Avstand:</strong> Finn korteste avstand til en kurve</li>
                <li><strong>Materialer:</strong> Minimer materialbruk</li>
              </ul>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Generell framgangsmåte:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Definer hva som skal optimeres (mål-funksjonen)</li>
                <li>Finn eventuelle bibetingelser (begrensninger)</li>
                <li>Uttrykk funksjonen med én variabel</li>
                <li>Deriver og sett f&apos;(x) = 0</li>
                <li>Sjekk at løsningen gir maks/min (bruk f&apos;&apos;)</li>
              </ol>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Maksimalt areal</h4>
              <p className="text-sm">
                Et rektangel har omkrets 100 m. Finn dimensjonene som gir maksimalt areal.
              </p>
              <BlockMath>{"A(x) = x \\cdot (50 - x) = 50x - x^2"}</BlockMath>
              <BlockMath>{"A'(x) = 50 - 2x = 0 \\quad \\Rightarrow \\quad x = 25"}</BlockMath>
              <p className="text-sm mt-2">Maksimalt areal når rektangelet er et kvadrat (25×25 m).</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Optimeringsproblem',
          description: 'Visualiser optimering av areal.',
          appName: 'cas',
          initialCommands: [
            'A(x) := x * (50 - x)',
            'A1 := Derivative(A)',
            'Solve(A1(x) = 0, x)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn topp- og bunnpunkt for f(x) = x³ - 12x + 5',
        'Bestem vendepunktet til f(x) = x³ - 6x² + 9x',
        'Et rektangel har areal 100 m². Finn dimensjonene som gir minst omkrets.',
        'Finn punktet på grafen f(x) = x² som ligger nærmest punktet (0, 1)',
        'En eske uten lokk skal ha volum 500 cm³. Finn dimensjonene som bruker minst materiale.',
      ],
    },
    summary: [
      'Toppunkt: f\'(x₀) = 0 og f\'\'(x₀) < 0',
      'Bunnpunkt: f\'(x₀) = 0 og f\'\'(x₀) > 0',
      'Vendepunkt: f\'\'(x₀) = 0 og f\'\' skifter fortegn',
      'Extremum(f) finner alle ekstremalpunkter',
      'InflectionPoint(f) finner vendepunkter',
    ],
    commands: [
      { command: 'Ekstremalpunkt(f)', description: 'Finner topp- og bunnpunkter', example: 'Ekstremalpunkt(x^3 - 6x^2 + 9x)' },
      { command: 'InflectionPoint(f)', description: 'Finner vendepunkter', example: 'InflectionPoint(x^3 - 3x^2)' },
      { command: 'Derivert(f)', description: 'Finner f\'(x)', example: 'Derivert(x^3 - 6x^2)' },
      { command: 'Løs(f\'(x) = 0, x)', description: 'Løser f\'(x) = 0', example: 'Løs(3x^2 - 12 = 0, x)' },
    ],
  },

  // S1 - Kapittel 4: Regresjon og korrelasjon
  's1-regresjon': {
    introduction: (
      <p className="text-lg">
        Regresjon handler om å finne en matematisk modell som passer til et datasett.
        Korrelasjon måler hvor sterk sammenhengen er mellom to variable.
        Dette er viktige verktøy i samfunnsfaglig analyse.
      </p>
    ),
    sections: [
      {
        title: 'Regresjonslinje',
        content: (
          <div className="space-y-4">
            <p>
              En <strong>regresjonslinje</strong> er en rett linje som best mulig
              beskriver sammenhengen mellom to variable. Den brukes til å predikere
              verdier og analysere trender.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Lineær modell:</h4>
              <BlockMath>{"y = ax + b"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                hvor a er stigningstallet og b er konstantleddet
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Minste kvadraters metode:</h4>
              <p className="text-sm">
                Regresjonslinjen plasseres slik at summen av kvadrerte avvik
                mellom datapunktene og linjen blir minst mulig.
              </p>
              <BlockMath>{"\\min \\sum_{i=1}^{n} (y_i - (ax_i + b))^2"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">I GeoGebra:</p>
              <code className="text-blue-600">RegLin(punktliste)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Finner regresjonslinjen automatisk
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Lag regresjonslinje',
          description: 'Tegn punkter og finn regresjonslinjen.',
          appName: 'classic',
          initialCommands: [
            'data = {(1, 2.5), (2, 4.1), (3, 5.8), (4, 7.2), (5, 9.1)}',
            'RegLin(data)',
          ],
        },
      },
      {
        title: 'Korrelasjonskoeffisienten',
        content: (
          <div className="space-y-4">
            <p>
              <strong>Korrelasjonskoeffisienten r</strong> måler styrken og retningen
              på den lineære sammenhengen mellom to variable.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Verdiområde:</h4>
              <BlockMath>{"-1 \\leq r \\leq 1"}</BlockMath>
              <div className="space-y-2 text-sm mt-3">
                <p><strong>r = 1:</strong> Perfekt positiv lineær sammenheng</p>
                <p><strong>r = -1:</strong> Perfekt negativ lineær sammenheng</p>
                <p><strong>r = 0:</strong> Ingen lineær sammenheng</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold">Sterk korrelasjon</h4>
                <p className="text-sm text-muted-foreground">
                  |r| &gt; 0.7
                </p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-bold">Moderat korrelasjon</h4>
                <p className="text-sm text-muted-foreground">
                  0.3 &lt; |r| &lt; 0.7
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-bold">Svak korrelasjon</h4>
                <p className="text-sm text-muted-foreground">
                  |r| &lt; 0.3
                </p>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg mt-4">
              <p className="font-semibold mb-2">I GeoGebra:</p>
              <code className="text-blue-600">Korrelasjon(data)</code>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="font-semibold">Viktig:</p>
              <p className="text-sm">
                Korrelasjon betyr ikke nødvendigvis kausalitet!
                To variable kan korrelere uten at den ene forårsaker den andre.
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn korrelasjon',
          description: 'Finn korrelasjonskoeffisienten for et datasett.',
          appName: 'classic',
          initialCommands: [
            'data = {(1, 2), (2, 3.5), (3, 5), (4, 6.5), (5, 8)}',
            'r = CorrelationCoefficient(data)',
            'RegLin(data)',
          ],
        },
      },
      {
        title: 'Tolking av regresjonsmodeller',
        content: (
          <div className="space-y-4">
            <p>
              Når du har funnet en regresjonsmodell, er det viktig å kunne tolke
              den og vurdere hvor godt den passer til dataene.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Tolking av parameterne:</h4>
              <p className="text-sm">For y = ax + b:</p>
              <ul className="text-sm space-y-1 mt-2">
                <li><strong>a (stigningstall):</strong> Endring i y per enhet x øker</li>
                <li><strong>b (konstantledd):</strong> Verdien av y når x = 0</li>
              </ul>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Prediksjon:</h4>
              <p className="text-sm">
                Bruk modellen til å predikere y-verdier for nye x-verdier.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Interpolasjon:</strong> Predikere innenfor dataområdet<br/>
                <strong>Ekstrapolasjon:</strong> Predikere utenfor dataområdet (mer usikkert!)
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Befolkningsvekst</h4>
              <p className="text-sm">
                Data viser befolkning (i millioner) som funksjon av år:
              </p>
              <BlockMath>{"y = 0.05x - 95.2"}</BlockMath>
              <p className="text-sm mt-2">
                <strong>Tolking:</strong> Befolkningen øker med 0.05 millioner (50 000) per år.
                I år 2000: y = 0.05(2000) - 95.2 = 4.8 millioner.
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Bruk regresjonsmodell',
          description: 'Finn modell og bruk den til prediksjon.',
          appName: 'classic',
          initialCommands: [
            'data = {(2010, 4.9), (2012, 5.0), (2014, 5.1), (2016, 5.2), (2018, 5.3)}',
            'modell = RegLin(data)',
            'predikert2020 = modell(2020)',
            'ZoomIn(2008, 4.5, 2022, 5.5)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn regresjonslinjen for punktene: (1,3), (2,5), (3,7), (4,9), (5,11)',
        'Beregn korrelasjonskoeffisienten for dataene i oppgave 1',
        'Tolke: y = 0.8x + 12 beskriver inntekt (y) som funksjon av erfaring (x år). Hva betyr tallene?',
        'Bruk modellen y = 2.5x + 100 til å predikere y når x = 15',
        'Diskuter: Kan sterk korrelasjon mellom is-salg og drukningsulykker bety kausalitet?',
      ],
    },
    summary: [
      'RegLin(data) finner regresjonslinjen (minste kvadraters metode)',
      'Korrelasjonskoeffisienten r måler styrken: -1 ≤ r ≤ 1',
      '|r| > 0.7: sterk korrelasjon, |r| < 0.3: svak korrelasjon',
      'Korrelasjon ≠ kausalitet',
      'Bruk modellen til interpolasjon (innenfor data) og ekstrapolasjon (utenfor data)',
    ],
    commands: [
      { command: 'RegLin(punktliste)', description: 'Finner regresjonslinjen', example: 'RegLin({(1,2), (2,4), (3,6)})' },
      { command: 'Korrelasjon(data)', description: 'Beregner korrelasjonskoeffisienten r', example: 'Korrelasjon(data)' },
      { command: 'modell(x)', description: 'Bruker modellen til prediksjon', example: 'modell(10)' },
    ],
  },

  // S1 - Kapittel 5: Økonomiske modeller
  's1-okonomi': {
    introduction: (
      <p className="text-lg">
        Derivasjon er et kraftig verktøy i økonomi for å analysere kostnader,
        inntekter og profitt. Vi kan finne optimale produksjonsnivåer og
        forstå hvordan små endringer påvirker økonomiske størrelser.
      </p>
    ),
    sections: [
      {
        title: 'Grensekostnad og grenseinntekt',
        content: (
          <div className="space-y-4">
            <p>
              <strong>Grensekostnad</strong> (marginal kostnad) er kostnaden ved å
              produsere én ekstra enhet. Den er den deriverte av kostnadsfunksjonen.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Definisjoner:</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold">Grensekostnad:</p>
                  <BlockMath>{"GK(x) = K'(x)"}</BlockMath>
                </div>
                <div>
                  <p className="text-sm font-semibold">Grenseinntekt:</p>
                  <BlockMath>{"GI(x) = I'(x)"}</BlockMath>
                </div>
                <div>
                  <p className="text-sm font-semibold">Grenseprofitt:</p>
                  <BlockMath>{"GP(x) = P'(x) = I'(x) - K'(x)"}</BlockMath>
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Tolking:</h4>
              <p className="text-sm">
                GK(100) = 45 betyr at kostnaden øker med ca. 45 kr når produksjonen
                øker fra 100 til 101 enheter.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">I GeoGebra:</p>
              <code className="text-blue-600">GK := Derivative(K)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk grensekostnad',
          description: 'Deriver kostnadsfunksjonen for å finne grensekostnad.',
          appName: 'cas',
          initialCommands: [
            'K(x) := 1000 + 50x + 0.1x^2',
            'GK := Derivative(K)',
            'GK(100)',
          ],
        },
      },
      {
        title: 'Profittmaksimering',
        content: (
          <div className="space-y-4">
            <p>
              Profitt maksimeres når grenseinntekt er lik grensekostnad.
              Dette gir det optimale produksjonsnivået.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Profittfunksjon:</h4>
              <BlockMath>{"P(x) = I(x) - K(x)"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                hvor I(x) er inntekt og K(x) er kostnad
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Maksimal profitt:</h4>
              <BlockMath>{"P'(x) = 0 \\quad \\Leftrightarrow \\quad I'(x) = K'(x)"}</BlockMath>
              <p className="text-sm mt-2">
                <strong>Betingelse:</strong> Grenseinntekt = Grensekostnad
              </p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Økonomisk tolking:</h4>
              <ul className="text-sm space-y-1">
                <li>GI(x) &gt; GK(x): Øk produksjonen (mer profitt)</li>
                <li>GI(x) &lt; GK(x): Reduser produksjonen</li>
                <li>GI(x) = GK(x): Optimal produksjon</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Framgangsmåte:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Sett opp profittfunksjonen P(x) = I(x) - K(x)</li>
                <li>Deriver: P&apos;(x)</li>
                <li>Løs P&apos;(x) = 0</li>
                <li>Sjekk at P&apos;&apos;(x) &lt; 0 (maksimum)</li>
                <li>Beregn maksimal profitt: P(x₀)</li>
              </ol>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn maksimal profitt',
          description: 'Optimer profitt ved å løse P\'(x) = 0.',
          appName: 'cas',
          initialCommands: [
            'I(x) := 200x - 0.5x^2',
            'K(x) := 1000 + 20x + 0.1x^2',
            'P(x) := I(x) - K(x)',
            'Solve(Derivative(P, x) = 0, x)',
          ],
        },
      },
      {
        title: 'Elastisitet',
        content: (
          <div className="space-y-4">
            <p>
              <strong>Elastisitet</strong> måler hvor følsom etterspørselen er for
              prisendringer. Det er et viktig konsept for prissetting.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Priselastisitet:</h4>
              <BlockMath>{"E = \\frac{p}{x} \\cdot \\frac{dx}{dp}"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                hvor x er etterspurt mengde og p er pris
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold">Elastisk etterspørsel</h4>
                <p className="text-sm text-muted-foreground">
                  |E| &gt; 1: Stor prisendring gir stor endring i etterspørsel
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold">Uelastisk etterspørsel</h4>
                <p className="text-sm text-muted-foreground">
                  |E| &lt; 1: Liten endring i etterspørsel ved prisendring
                </p>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Etterspørsel: x(p) = 1000 - 20p
              </p>
              <BlockMath>{"E = \\frac{p}{1000-20p} \\cdot (-20) = \\frac{-20p}{1000-20p}"}</BlockMath>
              <p className="text-sm mt-2">
                Ved p = 30: E = -1.5 (elastisk etterspørsel)
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn elastisitet',
          description: 'Finn priselastisiteten.',
          appName: 'cas',
          initialCommands: [
            'x(p) := 1000 - 20p',
            'E(p) := (p/x(p)) * Derivative(x, p)',
            'E(30)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn grensekostnaden når K(x) = 5000 + 100x + 2x²',
        'Bestem produksjonsnivået som gir maksimal profitt når I(x) = 300x - x² og K(x) = 2000 + 50x',
        'Beregn maksimal profitt i oppgave 2',
        'Finn elastisiteten når x(p) = 500 - 10p og p = 25',
        'Tolke: GK(200) = 75. Hva betyr dette?',
      ],
    },
    summary: [
      'Grensekostnad: GK(x) = K\'(x)',
      'Grenseinntekt: GI(x) = I\'(x)',
      'Maksimal profitt: Løs P\'(x) = 0, eller GI(x) = GK(x)',
      'Elastisitet: E = (p/x) · (dx/dp)',
      '|E| > 1: elastisk, |E| < 1: uelastisk etterspørsel',
    ],
    commands: [
      { command: 'Derivert(K)', description: 'Finner grensekostnad', example: 'Derivert(1000 + 50x + 0.1x^2)' },
      { command: 'Løs(P\'(x) = 0, x)', description: 'Finner optimalt produksjonsnivå', example: 'Løs(Derivative(P, x) = 0, x)' },
      { command: 'Derivert(f, 2)', description: 'Finner andrederiverte (for å sjekke maks)', example: 'Derivert(P, 2)' },
    ],
  },

  // S1 - Kapittel 6: Sannsynlighetsfordelinger
  's1-sannsynlighet': {
    introduction: (
      <p className="text-lg">
        Sannsynlighetsfordelinger beskriver hvordan sannsynligheten fordeler seg
        over ulike utfall. Binomisk fordeling og normalfordeling er de viktigste
        fordelingene i S1-matematikk.
      </p>
    ),
    sections: [
      {
        title: 'Binomisk fordeling',
        content: (
          <div className="space-y-4">
            <p>
              <strong>Binomisk fordeling</strong> brukes når vi har n uavhengige
              forsøk med to mulige utfall (suksess/fiasko), hvor sannsynligheten
              for suksess er p.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Sannsynlighetsformelen:</h4>
              <BlockMath>{"P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                P(X = k) = sannsynligheten for akkurat k suksesser i n forsøk
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Forventningsverdi og varians:</h4>
              <BlockMath>{"E(X) = n \\cdot p"}</BlockMath>
              <BlockMath>{"Var(X) = n \\cdot p \\cdot (1-p)"}</BlockMath>
              <BlockMath>{"SD(X) = \\sqrt{n \\cdot p \\cdot (1-p)}"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">I GeoGebra:</p>
              <code className="text-blue-600">Binomialfordeling(n, p, k, false)</code>
              <p className="text-sm text-muted-foreground mt-2">
                false gir P(X = k), true gir P(X ≤ k) (kumulativ)
              </p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Kast en mynt 10 ganger. Hva er sannsynligheten for akkurat 6 mynt?
              </p>
              <p className="text-sm mt-2">
                n = 10, p = 0.5, k = 6
              </p>
              <code className="text-blue-600 text-sm">Binomialfordeling(10, 0.5, 6, false) ≈ 0.205</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk binomisk fordeling',
          description: 'Visualiser binomisk fordeling.',
          appName: 'classic',
          initialCommands: [
            'n = 20',
            'p = 0.3',
            'BinomialDist(n, p)',
          ],
        },
      },
      {
        title: 'Normalfordeling',
        content: (
          <div className="space-y-4">
            <p>
              <strong>Normalfordelingen</strong> (Gauss-kurven) er den viktigste
              kontinuerlige sannsynlighetsfordelingen. Mange naturlige fenomener
              følger normalfordeling.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Notasjon:</h4>
              <BlockMath>{"X \\sim N(\\mu, \\sigma)"}</BlockMath>
              <p className="text-sm text-muted-foreground mt-2">
                μ = forventningsverdi (gjennomsnitt), σ = standardavvik
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Egenskaper:</h4>
              <ul className="text-sm space-y-1">
                <li>Symmetrisk klokkeformet kurve</li>
                <li>Toppen ligger i x = μ</li>
                <li>Spredning styres av σ</li>
                <li>Arealet under kurven = 1</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">68-95-99.7-regelen:</h4>
              <ul className="text-sm space-y-1">
                <li>68% av verdiene ligger innen μ ± σ</li>
                <li>95% ligger innen μ ± 2σ</li>
                <li>99.7% ligger innen μ ± 3σ</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">I GeoGebra:</p>
              <code className="text-blue-600">Normalfordeling(μ, σ, x)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Gir P(X ≤ x) for normalfordelt X
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk normalfordeling',
          description: 'Visualiser normalfordelingen.',
          appName: 'classic',
          initialCommands: [
            'μ = 100',
            'σ = 15',
            'Normal(μ, σ, x)',
            'ZoomIn(40, -0.01, 160, 0.03)',
          ],
        },
      },
      {
        title: 'Bruk av normalfordeling',
        content: (
          <div className="space-y-4">
            <p>
              Normalfordelingen brukes til å beregne sannsynligheter og
              finne kritiske verdier (kvantiler).
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Beregne sannsynligheter:</h4>
              <p className="text-sm">
                P(X ≤ a) bruker Normalfordeling(μ, σ, a)
              </p>
              <p className="text-sm mt-2">
                P(a ≤ X ≤ b) = Normalfordeling(μ, σ, b) - Normalfordeling(μ, σ, a)
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Standardisering:</h4>
              <p className="text-sm">
                For å bruke standardnormalfordelingen N(0, 1):
              </p>
              <BlockMath>{"Z = \\frac{X - \\mu}{\\sigma}"}</BlockMath>
              <p className="text-sm mt-2">
                Z-verdien forteller hvor mange standardavvik X er fra μ
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                IQ-skår er normalfordelt med μ = 100, σ = 15.
                Hva er P(IQ &gt; 130)?
              </p>
              <code className="text-blue-600 text-sm block mt-2">
                P(X &gt; 130) = 1 - Normalfordeling(100, 15, 130) ≈ 0.023
              </code>
              <p className="text-sm mt-2">
                Ca. 2.3% har IQ over 130.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Binomisk ≈ Normal:</h4>
              <p className="text-sm">
                Når n er stor (n &gt; 30) og p ikke er for nær 0 eller 1,
                kan binomisk fordeling tilnærmes med normalfordeling:
              </p>
              <BlockMath>{"B(n, p) \\approx N(np, \\sqrt{np(1-p)})"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Bruk normalfordeling',
          description: 'Beregn sannsynligheter.',
          appName: 'classic',
          initialCommands: [
            'μ = 100',
            'σ = 15',
            'P_over_130 = 1 - Normal(μ, σ, 130)',
            'P_mellom_85_og_115 = Normal(μ, σ, 115) - Normal(μ, σ, 85)',
            'ZoomIn(40, -0.01, 160, 0.03)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Beregn P(X = 7) når X ~ B(15, 0.4)',
        'Finn forventningsverdien og standardavviket når n = 100, p = 0.3',
        'X ~ N(50, 10). Finn P(X < 60)',
        'X ~ N(170, 8) (høyde i cm). Finn P(160 < X < 180)',
        'Standardiser: X = 85 når μ = 100, σ = 15. Hva er Z-verdien?',
      ],
    },
    summary: [
      'Binomisk: P(X = k) = C(n,k) · p^k · (1-p)^(n-k)',
      'Binomisk: E(X) = np, SD(X) = √(np(1-p))',
      'Normal: X ~ N(μ, σ), symmetrisk klokkeformet kurve',
      '68-95-99.7-regelen for normalfordeling',
      'Binomialfordeling(n, p, k, kum) og Normalfordeling(μ, σ, x) i GeoGebra',
    ],
    commands: [
      { command: 'Binomialfordeling(n, p, k, false)', description: 'P(X = k) for binomisk fordeling', example: 'Binomialfordeling(10, 0.5, 6, false)' },
      { command: 'Binomialfordeling(n, p, k, true)', description: 'P(X ≤ k) kumulativ', example: 'Binomialfordeling(10, 0.5, 6, true)' },
      { command: 'Normal(μ, σ, x)', description: 'P(X ≤ x) for normalfordeling', example: 'Normalfordeling(100, 15, 115)' },
      { command: 'InversNormalfordeling(μ, σ, p)', description: 'Finn x slik at P(X ≤ x) = p', example: 'InversNormalfordeling(100, 15, 0.95)' },
    ],
  },

  // R1 - Realfagsmatematikk VG2 - Kapittel 1: Algebra og CAS
  'r1-algebra-cas': {
    introduction: (
      <p className="text-lg">
        I R1 utvider vi algebra-kunnskapene fra 1T med fokus på faktorisering,
        rasjonale uttrykk og avansert likningsløsning. CAS-verktøyet i GeoGebra
        er et kraftfullt hjelpemiddel for symbolsk manipulasjon.
      </p>
    ),
    sections: [
      {
        title: 'Faktorisering av polynomer',
        content: (
          <div className="space-y-4">
            <p>
              Faktorisering er å skrive et polynom som et produkt av enklere faktorer.
              Dette er nyttig for å finne nullpunkter og forenkle uttrykk.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Vanlige faktoriseringsmetoder:</h4>
              <div className="space-y-2">
                <div>
                  <strong>1. Felles faktor:</strong>
                  <BlockMath>{"6x^2 + 9x = 3x(2x + 3)"}</BlockMath>
                </div>
                <div>
                  <strong>2. Konjugatsetningen:</strong>
                  <BlockMath>{"x^2 - 9 = (x-3)(x+3)"}</BlockMath>
                </div>
                <div>
                  <strong>3. Kvadratsetningene:</strong>
                  <BlockMath>{"x^2 + 6x + 9 = (x+3)^2"}</BlockMath>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra CAS:</h4>
              <code className="text-blue-600">Faktoriser(x^2 + 5x + 6)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Returnerer: (x + 2)(x + 3)
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Faktoriser polynomer',
          description: 'Bruk Faktoriser() for å faktorisere ulike polynomer.',
          appName: 'cas',
          initialCommands: [
            'Factor(x^2 + 5x + 6)',
            'Factor(x^2 - 16)',
            'Factor(x^3 - 8)',
            'Factor(2x^2 + 7x + 3)',
          ],
        },
      },
      {
        title: 'Rasjonale uttrykk',
        content: (
          <div className="space-y-4">
            <p>
              Et rasjonalt uttrykk er en brøk der teller og nevner er polynomer.
              Vi må ofte forenkle, multiplisere, dividere eller addere slike uttrykk.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Forenkle rasjonale uttrykk:</h4>
              <BlockMath>{"\\frac{x^2 - 4}{x^2 + 4x + 4} = \\frac{(x-2)(x+2)}{(x+2)^2} = \\frac{x-2}{x+2}"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra CAS:</h4>
              <code className="text-blue-600">Forenkle((x^2 - 4)/(x^2 + 4x + 4))</code>
              <p className="text-sm text-muted-foreground mt-2">
                eller bruk Delbrøker() for å dele i delbrøker
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Arbeid med rasjonale uttrykk',
          description: 'Forenkle og manipuler rasjonale uttrykk.',
          appName: 'cas',
          initialCommands: [
            'Simplify((x^2 - 9)/(x^2 - 3x))',
            'PartialFractions((3x + 5)/((x + 1)(x - 2)))',
            'Simplify(1/x + 2/(x + 1))',
          ],
        },
      },
      {
        title: 'Løse likninger',
        content: (
          <div className="space-y-4">
            <p>
              GeoGebra CAS kan løse både lineære, kvadratiske og høyere grads likninger,
              samt likningssystemer.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Typer likninger:</h4>
              <div className="space-y-2">
                <div>
                  <strong>Kvadratisk likning:</strong>
                  <BlockMath>{"x^2 + 3x - 10 = 0"}</BlockMath>
                </div>
                <div>
                  <strong>Rasjonale likninger:</strong>
                  <BlockMath>{"\\frac{1}{x} + \\frac{2}{x+1} = 3"}</BlockMath>
                </div>
                <div>
                  <strong>Polynomlikninger:</strong>
                  <BlockMath>{"x^3 - 6x^2 + 11x - 6 = 0"}</BlockMath>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra CAS:</h4>
              <code className="text-blue-600">Løs(x^2 + 3x - 10 = 0, x)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Returnerer: x = -5 eller x = 2
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Løs likninger',
          description: 'Bruk Løs() for å løse ulike typer likninger.',
          appName: 'cas',
          initialCommands: [
            'Solve(x^2 + 3x - 10 = 0, x)',
            'Solve(x^3 - 6x^2 + 11x - 6 = 0, x)',
            'Solve(1/x + 2/(x+1) = 3, x)',
          ],
        },
      },
      {
        title: 'Ulikheter',
        content: (
          <div className="space-y-4">
            <p>
              Ulikheter løses på samme måte som likninger, men vi må passe på
              at retningen på ulikhetstegnet endres når vi multipliserer med negativt tall.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel: Kvadratisk ulikhet</h4>
              <BlockMath>{"x^2 - 5x + 6 < 0"}</BlockMath>
              <p className="text-sm">
                Faktoriser: (x - 2)(x - 3) &lt; 0
              </p>
              <p className="text-sm">
                Løsning: 2 &lt; x &lt; 3
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra CAS:</h4>
              <code className="text-blue-600">Løs(x^2 - 5x + 6 &lt; 0, x)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Løs ulikheter',
          description: 'Bruk Løs() for å løse ulikheter.',
          appName: 'cas',
          initialCommands: [
            'Solve(x^2 - 5x + 6 < 0, x)',
            'Solve(x^2 - 4 >= 0, x)',
            'Solve((x - 1)/(x + 2) > 0, x)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Faktoriser: x³ - 27',
        'Forenkle: (x² - 1)/(x² + 2x + 1)',
        'Løs: x² - 7x + 12 = 0',
        'Løs ulikheten: x² - 9 > 0',
        'Del i delbrøker: (5x + 7)/((x + 1)(x - 3))',
      ],
    },
    summary: [
      'Factor() faktoriserer polynomer',
      'Simplify() forenkler algebraiske uttrykk',
      'Solve() løser likninger og ulikheter',
      'Delbrøker() deler i delbrøker',
    ],
    commands: [
      { command: 'Factor(uttrykk)', description: 'Faktoriserer et polynom', example: 'Factor(x^2 - 9)' },
      { command: 'Simplify(uttrykk)', description: 'Forenkler et algebraisk uttrykk', example: 'Simplify((x^2-1)/(x-1))' },
      { command: 'Løs(likning, x)', description: 'Løser en likning for x', example: 'Løs(x^2 - 5x + 6 = 0, x)' },
      { command: 'Delbrøker(uttrykk)', description: 'Deler i delbrøker', example: 'Delbrøker(1/(x^2-1))' },
      { command: 'Expand(uttrykk)', description: 'Utvider parenteser', example: 'Expand((x+2)(x-3))' },
    ],
  },

  // R1 - Kapittel 2: Funksjoner
  'r1-funksjoner': {
    introduction: (
      <p className="text-lg">
        I dette kapittelet studerer vi polynomfunksjoner, rasjonale funksjoner,
        asymptoter og sammensatte funksjoner. GeoGebra hjelper oss å visualisere
        og analysere funksjonsegenskaper.
      </p>
    ),
    sections: [
      {
        title: 'Polynomfunksjoner',
        content: (
          <div className="space-y-4">
            <p>
              En polynomfunksjon har formen:
            </p>
            <BlockMath>{"f(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0"}</BlockMath>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Grad 2 (andregradsfunksjon)</h4>
                <BlockMath>{"f(x) = ax^2 + bx + c"}</BlockMath>
                <p className="text-sm text-muted-foreground">Parabelform</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Grad 3 (tredjegradsfunksjon)</h4>
                <BlockMath>{"f(x) = ax^3 + bx^2 + cx + d"}</BlockMath>
                <p className="text-sm text-muted-foreground">S-form eller N-form</p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Viktige egenskaper:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Nullpunkter: der f(x) = 0</li>
                <li>Topp- og bunnpunkter: der f&apos;(x) = 0</li>
                <li>Vendepunkter: der f&apos;&apos;(x) = 0</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk polynomfunksjoner',
          description: 'Tegn ulike polynomfunksjoner og finn nullpunkter.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^2 - 4x + 3',
            'g(x) = x^3 - 3x^2 + 2',
            'Root(f)',
            'Extremum(f)',
          ],
        },
      },
      {
        title: 'Rasjonale funksjoner',
        content: (
          <div className="space-y-4">
            <p>
              En rasjonal funksjon er en brøk der teller og nevner er polynomer:
            </p>
            <BlockMath>{"f(x) = \\frac{P(x)}{Q(x)}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <BlockMath>{"f(x) = \\frac{2x + 1}{x - 3}"}</BlockMath>
              <ul className="space-y-1 text-sm">
                <li><strong>Definisjonsmengde:</strong> x ≠ 3 (nevner kan ikke være null)</li>
                <li><strong>Vertikal asymptote:</strong> x = 3</li>
                <li><strong>Horisontal asymptote:</strong> y = 2</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Tegn rasjonale funksjoner',
          description: 'Se hvordan asymptoter oppstår.',
          appName: 'classic',
          initialCommands: [
            'f(x) = (2x + 1)/(x - 3)',
            'x = 3',
            'y = 2',
          ],
        },
      },
      {
        title: 'Asymptoter',
        content: (
          <div className="space-y-4">
            <p>
              En asymptote er en linje som funksjonsgrafen nærmer seg uten å nå.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Vertikal</h4>
                <p className="text-sm">x = a</p>
                <p className="text-xs text-muted-foreground">
                  Der nevner = 0
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Horisontal</h4>
                <p className="text-sm">y = b</p>
                <p className="text-xs text-muted-foreground">
                  For x → ±∞
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Skrå</h4>
                <p className="text-sm">y = ax + b</p>
                <p className="text-xs text-muted-foreground">
                  Polynomdivisjon
                </p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Finne asymptoter:</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>Vertikal:</strong> Løs Q(x) = 0</li>
                <li><strong>Horisontal:</strong> Sammenlign graden til P(x) og Q(x)</li>
                <li><strong>Skrå:</strong> Hvis grad(P) = grad(Q) + 1, bruk polynomdivisjon</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn asymptoter',
          description: 'Identifiser vertikale og horisontale asymptoter.',
          appName: 'classic',
          initialCommands: [
            'f(x) = (x^2 + 1)/(x - 2)',
            'Asymptote(f)',
          ],
        },
      },
      {
        title: 'Sammensatte funksjoner',
        content: (
          <div className="space-y-4">
            <p>
              En sammensatt funksjon oppstår når vi setter én funksjon inn i en annen:
            </p>
            <BlockMath>{"(f \\circ g)(x) = f(g(x))"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Hvis f(x) = x² og g(x) = x + 1, da:</p>
              <BlockMath>{"(f \\circ g)(x) = f(g(x)) = f(x+1) = (x+1)^2"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra:</h4>
              <code className="text-blue-600 block">f(x) = x^2</code>
              <code className="text-blue-600 block">g(x) = x + 1</code>
              <code className="text-blue-600 block">h(x) = f(g(x))</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Lag sammensatte funksjoner',
          description: 'Se hvordan funksjoner kombineres.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x^2',
            'g(x) = x + 1',
            'h(x) = f(g(x))',
          ],
        },
      },
      {
        title: 'Inversefunksjoner',
        content: (
          <div className="space-y-4">
            <p>
              Inversefunksjonen f⁻¹(x) gjør det motsatte av f(x). Grafen er
              symmetrisk om linjen y = x.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Egenskaper:</h4>
              <BlockMath>{"f(f^{-1}(x)) = x \\quad \\text{og} \\quad f^{-1}(f(x)) = x"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra:</h4>
              <code className="text-blue-600">Invers(f)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Finner inversefunksjonen
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk inversefunksjoner',
          description: 'Tegn funksjon og dens inverse.',
          appName: 'classic',
          initialCommands: [
            'f(x) = 2x + 1',
            'finv = Invert(f)',
            'y = x',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Tegn f(x) = x³ - 4x og finn alle nullpunkter',
        'Finn asymptoter for f(x) = (3x + 2)/(x - 1)',
        'Hvis f(x) = x² og g(x) = 2x - 1, finn (f ∘ g)(x)',
        'Finn inversefunksjonen til f(x) = 3x - 5',
        'Tegn en rasjonal funksjon med vertikal asymptote x = 2 og horisontal asymptote y = 3',
      ],
    },
    summary: [
      'Polynomfunksjoner har grad n og opptil n nullpunkter',
      'Rasjonale funksjoner har asymptoter',
      'Asymptoter: vertikale (nevner = 0), horisontale (x → ∞)',
      'Sammensatt funksjon: (f ∘ g)(x) = f(g(x))',
      'Invers(f) finner inversefunksjonen',
    ],
    commands: [
      { command: 'f(x) = uttrykk', description: 'Definerer en funksjon', example: 'f(x) = x^2 - 4' },
      { command: 'Nullpunkt(f)', description: 'Finner nullpunkter', example: 'Nullpunkt(f)' },
      { command: 'Ekstremalpunkt(f)', description: 'Finner topp- og bunnpunkter', example: 'Ekstremalpunkt(f)' },
      { command: 'Asymptote(f)', description: 'Finner asymptoter', example: 'Asymptote(f)' },
      { command: 'Invers(f)', description: 'Finner inversefunksjonen', example: 'Invers(f)' },
      { command: 'f(g(x))', description: 'Sammensatt funksjon', example: 'h(x) = f(g(x))' },
    ],
  },

  // R1 - Kapittel 3: Derivasjon
  'r1-derivasjon': {
    introduction: (
      <p className="text-lg">
        Derivasjon er et sentralt tema i R1. Her lærer du avanserte deriveringsregler
        som kjerneregelen, produktregelen, kvotientregelen og implisitt derivasjon.
      </p>
    ),
    sections: [
      {
        title: 'Kjerneregelen',
        content: (
          <div className="space-y-4">
            <p>
              Kjerneregelen brukes når vi deriverer sammensatte funksjoner:
            </p>
            <BlockMath>{"\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel 1:</h4>
              <p>Deriver h(x) = (3x + 2)⁵</p>
              <div className="space-y-1 text-sm">
                <p>Ytre funksjon: f(u) = u⁵, f&apos;(u) = 5u⁴</p>
                <p>Indre funksjon: g(x) = 3x + 2, g&apos;(x) = 3</p>
                <BlockMath>{"h'(x) = 5(3x+2)^4 \\cdot 3 = 15(3x+2)^4"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra CAS:</h4>
              <code className="text-blue-600">Derivert((3x + 2)^5)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Øv på kjerneregelen',
          description: 'Deriver sammensatte funksjoner.',
          appName: 'cas',
          initialCommands: [
            'Derivative((3x + 2)^5)',
            'Derivative(sin(x^2))',
            'Derivative(e^(2x + 1))',
          ],
        },
      },
      {
        title: 'Produktregelen',
        content: (
          <div className="space-y-4">
            <p>
              Produktregelen brukes når vi deriverer et produkt av to funksjoner:
            </p>
            <BlockMath>{"\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Deriver h(x) = x² · sin(x)</p>
              <div className="space-y-1">
                <BlockMath>{"h'(x) = (x^2)' \\cdot \\sin(x) + x^2 \\cdot (\\sin(x))'"}</BlockMath>
                <BlockMath>{"h'(x) = 2x \\cdot \\sin(x) + x^2 \\cdot \\cos(x)"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra CAS:</h4>
              <code className="text-blue-600">Derivert(x^2 * sin(x))</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Øv på produktregelen',
          description: 'Deriver produkter av funksjoner.',
          appName: 'cas',
          initialCommands: [
            'Derivative(x^2 * sin(x))',
            'Derivative(x * e^x)',
            'Derivative((x + 1) * (x - 2))',
          ],
        },
      },
      {
        title: 'Kvotientregelen',
        content: (
          <div className="space-y-4">
            <p>
              Kvotientregelen brukes når vi deriverer en brøk:
            </p>
            <BlockMath>{"\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Deriver h(x) = x²/(x + 1)</p>
              <div className="space-y-1">
                <BlockMath>{"h'(x) = \\frac{2x \\cdot (x+1) - x^2 \\cdot 1}{(x+1)^2}"}</BlockMath>
                <BlockMath>{"h'(x) = \\frac{2x^2 + 2x - x^2}{(x+1)^2} = \\frac{x^2 + 2x}{(x+1)^2}"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra CAS:</h4>
              <code className="text-blue-600">Derivert(x^2/(x + 1))</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Øv på kvotientregelen',
          description: 'Deriver rasjonale funksjoner.',
          appName: 'cas',
          initialCommands: [
            'Derivative(x^2/(x + 1))',
            'Derivative(sin(x)/x)',
            'Derivative((x + 1)/(x - 1))',
          ],
        },
      },
      {
        title: 'Implisitt derivasjon',
        content: (
          <div className="space-y-4">
            <p>
              Implisitt derivasjon brukes når y ikke er uttrykt eksplisitt som funksjon av x.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p>Finn dy/dx for: x² + y² = 25</p>
              <div className="space-y-1 text-sm">
                <p>Deriver begge sider med hensyn på x:</p>
                <BlockMath>{"2x + 2y \\cdot \\frac{dy}{dx} = 0"}</BlockMath>
                <BlockMath>{"\\frac{dy}{dx} = -\\frac{x}{y}"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra CAS:</h4>
              <code className="text-blue-600">ImplisittDerivative(x^2 + y^2 = 25, y, x)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Implisitt derivasjon',
          description: 'Finn deriverte av implisitte funksjoner.',
          appName: 'cas',
          initialCommands: [
            'ImplisittDerivative(x^2 + y^2 = 25, y, x)',
            'ImplisittDerivative(x*y = 1, y, x)',
          ],
        },
      },
      {
        title: 'Høyere ordens deriverte',
        content: (
          <div className="space-y-4">
            <p>
              Den andre deriverte f&apos;&apos;(x) beskriver krumningen til grafen.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">f&apos;&apos;(x) &gt; 0</h4>
                <p className="text-sm">Grafen er konveks (smiler)</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">f&apos;&apos;(x) &lt; 0</h4>
                <p className="text-sm">Grafen er konkav (flirer)</p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Vendepunkt:</h4>
              <p className="text-sm">Der f&apos;&apos;(x) = 0 og f&apos;&apos; skifter fortegn</p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Andre deriverte',
          description: 'Finn andre deriverte og vendepunkter.',
          appName: 'cas',
          initialCommands: [
            'f(x) = x^3 - 3x^2 + 2',
            "f'(x) = Derivative(f)",
            "f''(x) = Derivative(f, 2)",
            "Solve(f''(x) = 0, x)",
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Deriver h(x) = (2x + 1)⁴ med kjerneregelen',
        'Deriver g(x) = x³ · e^x med produktregelen',
        'Deriver f(x) = (x - 1)/(x + 1) med kvotientregelen',
        'Finn dy/dx implisitt for x² - xy + y² = 3',
        'Finn vendepunktet til f(x) = x³ - 6x² + 9x + 1',
      ],
    },
    summary: [
      'Kjerneregel: (f(g(x)))′ = f′(g(x)) · g′(x)',
      'Produktregel: (f·g)′ = f′·g + f·g′',
      'Kvotientregel: (f/g)′ = (f′·g - f·g′)/g²',
      'ImplisittDerivative() for implisitt derivasjon',
      'Derivative(f, 2) gir andre deriverte',
    ],
    commands: [
      { command: 'Derivert(f)', description: 'Deriverer funksjonen f', example: 'Derivert(x^2)' },
      { command: 'Derivert(f, n)', description: 'n-te deriverte', example: 'Derivert(x^3, 2)' },
      { command: 'ImplisittDerivative(likning, y, x)', description: 'Implisitt derivasjon', example: 'ImplisittDerivative(x^2 + y^2 = 1, y, x)' },
      { command: "f'(x)", description: 'Alternativ notasjon for derivert', example: "f'(2)" },
    ],
  },

  // R1 - Kapittel 4: Vektorer i planet
  'r1-vektorer': {
    introduction: (
      <p className="text-lg">
        Vektorer er sentrale i R1. Her lærer du om vektoroperasjoner, skalarprodukt,
        projeksjoner, vinkel mellom vektorer og parameterfremstilling av linjer.
      </p>
    ),
    sections: [
      {
        title: 'Grunnleggende vektorregning',
        content: (
          <div className="space-y-4">
            <p>
              En vektor i planet har to komponenter:
            </p>
            <BlockMath>{"\\vec{v} = \\begin{pmatrix} v_x \\\\ v_y \\end{pmatrix}"}</BlockMath>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Addisjon</h4>
                <BlockMath>{"\\vec{a} + \\vec{b} = \\begin{pmatrix} a_x + b_x \\\\ a_y + b_y \\end{pmatrix}"}</BlockMath>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Skalarmultiplikasjon</h4>
                <BlockMath>{"k\\vec{a} = \\begin{pmatrix} ka_x \\\\ ka_y \\end{pmatrix}"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Lengde (norm)</h4>
              <BlockMath>{"|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Vektoroperasjoner',
          description: 'Utforsk vektoraddisjon og skalarmultiplikasjon.',
          appName: 'classic',
          initialCommands: [
            'v = Vector((3, 2))',
            'w = Vector((1, 4))',
            'sum = v + w',
            'dobbel = 2v',
          ],
        },
      },
      {
        title: 'Skalarprodukt',
        content: (
          <div className="space-y-4">
            <p>
              Skalarproduktet av to vektorer er et tall:
            </p>
            <BlockMath>{"\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Alternativ formel:</h4>
              <BlockMath>{"\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\theta)"}</BlockMath>
              <p className="text-sm text-muted-foreground">
                der θ er vinkelen mellom vektorene
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Viktig egenskap:</h4>
              <p className="text-sm">
                <strong>Ortogonale vektorer:</strong> Hvis <InlineMath>{"\\vec{a} \\cdot \\vec{b} = 0"}</InlineMath>,
                er vektorene vinkelrette på hverandre.
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Skalarprodukt',
          description: 'Beregn skalarprodukt av vektorer.',
          appName: 'classic',
          initialCommands: [
            'a = Vector((3, 4))',
            'b = Vector((2, -1))',
            's = a * b',
            'lena = abs(a)',
            'lenb = abs(b)',
          ],
        },
      },
      {
        title: 'Projeksjoner',
        content: (
          <div className="space-y-4">
            <p>
              Projeksjonen av vektor <InlineMath>{"\\vec{a}"}</InlineMath> på vektor <InlineMath>{"\\vec{b}"}</InlineMath>:
            </p>
            <BlockMath>{"\\text{proj}_{\\vec{b}}\\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\vec{b}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn projeksjonen av <InlineMath>{"\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}"}</InlineMath>
                på <InlineMath>{"\\vec{b} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}"}</InlineMath>
              </p>
              <BlockMath>{"\\text{proj}_{\\vec{b}}\\vec{a} = \\frac{3}{1} \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Vektorprojeksjon',
          description: 'Visualiser projeksjoner.',
          appName: 'classic',
          initialCommands: [
            'a = Vector((3, 4))',
            'b = Vector((5, 0))',
            'proj = ((a*b)/(b*b))*b',
          ],
        },
      },
      {
        title: 'Vinkel mellom vektorer',
        content: (
          <div className="space-y-4">
            <p>
              Vinkelen θ mellom to vektorer finner vi fra skalarproduktet:
            </p>
            <BlockMath>{"\\cos(\\theta) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn vinkelen mellom <InlineMath>{"\\vec{a} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}"}</InlineMath>
                og <InlineMath>{"\\vec{b} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}"}</InlineMath>
              </p>
              <BlockMath>{"\\cos(\\theta) = \\frac{1}{\\sqrt{2} \\cdot 1} = \\frac{1}{\\sqrt{2}}"}</BlockMath>
              <BlockMath>{"\\theta = 45°"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra:</h4>
              <code className="text-blue-600">Vinkel(a, b)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Vinkel mellom vektorer',
          description: 'Finn vinkler mellom vektorer.',
          appName: 'classic',
          initialCommands: [
            'a = Vector((1, 1))',
            'b = Vector((1, 0))',
            'vinkel = Angle(a, b)',
          ],
        },
      },
      {
        title: 'Parameterfremstilling av linje',
        content: (
          <div className="space-y-4">
            <p>
              En linje i planet kan beskrives med en parameterfremstilling:
            </p>
            <BlockMath>{"\\vec{r}(t) = \\vec{r_0} + t\\vec{v}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Komponenter:</h4>
              <ul className="space-y-1 text-sm">
                <li><InlineMath>{"\\vec{r_0}"}</InlineMath>: Ortsvektor til et punkt på linjen</li>
                <li><InlineMath>{"\\vec{v}"}</InlineMath>: Retningsvektor (parallell med linjen)</li>
                <li>t: Parameter (kan være alle reelle tall)</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Linje gjennom P(2, 1) med retningsvektor <InlineMath>{"\\vec{v} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}"}</InlineMath>:
              </p>
              <BlockMath>{"\\vec{r}(t) = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} + t\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Parameterfremstilling',
          description: 'Tegn linjer med parameterfremstilling.',
          appName: 'classic',
          initialCommands: [
            'P = (2, 1)',
            'v = Vector((3, -1))',
            'l = Line(P, v)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn lengden av vektoren (4, 3)',
        'Beregn skalarproduktet av (2, 5) og (3, -1)',
        'Finn vinkelen mellom (1, 1) og (0, 1)',
        'Finn projeksjonen av (4, 2) på (1, 0)',
        'Sett opp parameterfremstilling for linjen gjennom (1, 2) med retningsvektor (2, -3)',
      ],
    },
    summary: [
      'Vektor() lager vektorer i GeoGebra',
      'Skalarprodukt: a · b = aₓbₓ + aᵧbᵧ',
      'Ortogonale vektorer: a · b = 0',
      'Vinkel: cos(θ) = (a·b)/(|a||b|)',
      'Linje: r(t) = r₀ + tv',
    ],
    commands: [
      { command: 'Vektor((x, y))', description: 'Lager en vektor', example: 'Vektor((3, 4))' },
      { command: 'a * b', description: 'Skalarprodukt', example: 'Vektor((1,2)) * Vektor((3,4))' },
      { command: 'abs(v)', description: 'Lengde av vektor', example: 'abs(Vektor((3, 4)))' },
      { command: 'Vinkel(a, b)', description: 'Vinkel mellom vektorer', example: 'Vinkel(a, b)' },
      { command: 'Linje(P, v)', description: 'Linje gjennom P med retning v', example: 'Linje((1,2), Vektor((3,-1)))' },
    ],
  },

  // R1 - Kapittel 5: Trigonometri
  'r1-trigonometri': {
    introduction: (
      <p className="text-lg">
        Trigonometri i R1 bygger på enhetssirkelen og trigonometriske identiteter.
        Du lærer å løse trigonometriske likninger og arbeide med sammensatte vinkler.
      </p>
    ),
    sections: [
      {
        title: 'Enhetssirkelen',
        content: (
          <div className="space-y-4">
            <p>
              Enhetssirkelen har radius 1 og sentrum i origo. Et punkt P på sirkelen
              har koordinater (cos θ, sin θ).
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Viktige vinkler:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>0°: (1, 0)</div>
                <div>90°: (0, 1)</div>
                <div>180°: (-1, 0)</div>
                <div>270°: (0, -1)</div>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Pytagoreisk identitet:</h4>
              <BlockMath>{"\\sin^2(\\theta) + \\cos^2(\\theta) = 1"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk enhetssirkelen',
          description: 'Se sammenhengen mellom vinkel og koordinater.',
          appName: 'classic',
          initialCommands: [
            'c = Circle((0, 0), 1)',
            'theta = Slider(0, 2pi, 0.1)',
            'P = (cos(theta), sin(theta))',
          ],
        },
      },
      {
        title: 'Trigonometriske identiteter',
        content: (
          <div className="space-y-4">
            <p>
              Identiteter er likninger som alltid er sanne for alle vinkler.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Grunnleggende</h4>
                <BlockMath>{"\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}"}</BlockMath>
                <BlockMath>{"\\sin^2(\\theta) + \\cos^2(\\theta) = 1"}</BlockMath>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Addisjon</h4>
                <BlockMath>{"\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b"}</BlockMath>
                <BlockMath>{"\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Dobbel vinkel</h4>
              <BlockMath>{"\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)"}</BlockMath>
              <BlockMath>{"\\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta)"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Verifiser identiteter',
          description: 'Se at identiteter stemmer grafisk.',
          appName: 'classic',
          initialCommands: [
            'f(x) = sin(x)^2 + cos(x)^2',
            'g(x) = 1',
            'h(x) = sin(2x)',
            'k(x) = 2sin(x)cos(x)',
          ],
        },
      },
      {
        title: 'Trigonometriske likninger',
        content: (
          <div className="space-y-4">
            <p>
              Trigonometriske likninger løses ved å bruke enhetssirkelen og periodisitet.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel 1: Grunnleggende</h4>
              <p className="text-sm">Løs: sin(x) = 0.5</p>
              <p className="text-sm">
                Løsning: x = 30° + n·360° eller x = 150° + n·360°
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel 2: Kvadratisk form</h4>
              <p className="text-sm">Løs: 2cos²(x) - cos(x) = 0</p>
              <p className="text-sm">
                Faktoriser: cos(x)(2cos(x) - 1) = 0
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra CAS:</h4>
              <code className="text-blue-600">Løs(sin(x) = 0.5, x)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Løs trigonometriske likninger',
          description: 'Finn løsninger grafisk og algebraisk.',
          appName: 'classic',
          initialCommands: [
            'f(x) = sin(x)',
            'g(x) = 0.5',
            'Intersect(f, g)',
          ],
        },
      },
      {
        title: 'Grafene til trigonometriske funksjoner',
        content: (
          <div className="space-y-4">
            <p>
              De trigonometriske funksjonene har karakteristiske grafer:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">sin(x)</h4>
                <ul className="text-sm space-y-1">
                  <li>Periode: 2π</li>
                  <li>Amplitude: 1</li>
                  <li>Nullpunkter: nπ</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">cos(x)</h4>
                <ul className="text-sm space-y-1">
                  <li>Periode: 2π</li>
                  <li>Amplitude: 1</li>
                  <li>Nullpunkter: π/2 + nπ</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">tan(x)</h4>
                <ul className="text-sm space-y-1">
                  <li>Periode: π</li>
                  <li>Asymptoter: π/2 + nπ</li>
                  <li>Nullpunkter: nπ</li>
                </ul>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk trigonometriske grafer',
          description: 'Se hvordan parametere påvirker grafene.',
          appName: 'classic',
          initialCommands: [
            'a = Slider(0.5, 3, 0.1)',
            'b = Slider(0.5, 3, 0.1)',
            'f(x) = a*sin(b*x)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn verdien av sin(45°) og cos(45°)',
        'Verifiser at sin²(30°) + cos²(30°) = 1',
        'Løs likningen: cos(x) = 0.5 for 0 ≤ x ≤ 2π',
        'Vis at sin(2x) = 2sin(x)cos(x) for x = 30°',
        'Tegn grafen til f(x) = 2sin(3x) og finn perioden',
      ],
    },
    summary: [
      'Enhetssirkelen: (cos θ, sin θ)',
      'Pytagoreisk identitet: sin²θ + cos²θ = 1',
      'Solve() løser trigonometriske likninger',
      'Periode: sin og cos har 2π, tan har π',
      'Addisjon: sin(a+b) = sin a cos b + cos a sin b',
    ],
    commands: [
      { command: 'sin(x)', description: 'Sinusfunksjon', example: 'sin(pi/4)' },
      { command: 'cos(x)', description: 'Cosinusfunksjon', example: 'cos(pi/3)' },
      { command: 'tan(x)', description: 'Tangensfunksjon', example: 'tan(pi/6)' },
      { command: 'Løs(sin(x) = a, x)', description: 'Løs trigonometrisk likning', example: 'Løs(sin(x) = 0.5, x)' },
      { command: 'asin(x)', description: 'Arcus sinus (invers)', example: 'asin(0.5)' },
    ],
  },

  // R1 - Kapittel 6: Analytisk geometri
  'r1-geometri': {
    introduction: (
      <p className="text-lg">
        Analytisk geometri kobler algebra og geometri. Her studerer vi linjer,
        sirkler, ellipser og parabler i koordinatsystemet.
      </p>
    ),
    sections: [
      {
        title: 'Linjens likning',
        content: (
          <div className="space-y-4">
            <p>
              En linje kan beskrives på flere måter:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksplisitt form</h4>
                <BlockMath>{"y = ax + b"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  a = stigningstall, b = konstantledd
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Generell form</h4>
                <BlockMath>{"Ax + By + C = 0"}</BlockMath>
                <p className="text-sm text-muted-foreground">
                  A, B, C er konstanter
                </p>
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">To-punktsform</h4>
              <BlockMath>{"\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}"}</BlockMath>
              <p className="text-sm text-muted-foreground">
                Linje gjennom (x₁, y₁) og (x₂, y₂)
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk linjer',
          description: 'Tegn linjer på ulike former.',
          appName: 'classic',
          initialCommands: [
            'A = (1, 2)',
            'B = (4, 5)',
            'l = Line(A, B)',
            'm: y = 2x + 1',
          ],
        },
      },
      {
        title: 'Sirkelens likning',
        content: (
          <div className="space-y-4">
            <p>
              En sirkel med sentrum (h, k) og radius r har likningen:
            </p>
            <BlockMath>{"(x - h)^2 + (y - k)^2 = r^2"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Sirkel med sentrum (2, -1) og radius 3:
              </p>
              <BlockMath>{"(x - 2)^2 + (y + 1)^2 = 9"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Generell form:</h4>
              <BlockMath>{"x^2 + y^2 + Dx + Ey + F = 0"}</BlockMath>
              <p className="text-sm text-muted-foreground">
                Fullføre kvadratet for å finne sentrum og radius
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Tegn sirkler',
          description: 'Utforsk sirkler med ulike sentre og radier.',
          appName: 'classic',
          initialCommands: [
            'M = (2, -1)',
            'c = Circle(M, 3)',
            '(x - 2)^2 + (y + 1)^2 = 9',
          ],
        },
      },
      {
        title: 'Ellipsen',
        content: (
          <div className="space-y-4">
            <p>
              En ellipse med sentrum i origo har likningen:
            </p>
            <BlockMath>{"\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Parametere:</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>a:</strong> Halv lengde av x-akse</li>
                <li><strong>b:</strong> Halv lengde av y-akse</li>
                <li><strong>Hvis a &gt; b:</strong> Ellipsen er bredere enn høy</li>
                <li><strong>Hvis b &gt; a:</strong> Ellipsen er høyere enn bred</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Med forskjøvet sentrum (h, k):</h4>
              <BlockMath>{"\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Tegn ellipser',
          description: 'Utforsk ellipser med ulike parametere.',
          appName: 'classic',
          initialCommands: [
            'a = Slider(1, 5, 0.1)',
            'b = Slider(1, 5, 0.1)',
            'Ellipse((0, 0), a, b)',
          ],
        },
      },
      {
        title: 'Parabelen',
        content: (
          <div className="space-y-4">
            <p>
              En parabel med vertikalt symmetriakse har formen:
            </p>
            <BlockMath>{"y = ax^2 + bx + c"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Toppunktsform:</h4>
              <BlockMath>{"y = a(x - h)^2 + k"}</BlockMath>
              <p className="text-sm text-muted-foreground">
                Toppunkt: (h, k)
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Egenskaper:</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>a &gt; 0:</strong> Åpner oppover</li>
                <li><strong>a &lt; 0:</strong> Åpner nedover</li>
                <li><strong>|a|</strong> stor: Smal parabel</li>
                <li><strong>|a|</strong> liten: Bred parabel</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk parabler',
          description: 'Se hvordan parametere påvirker parabelen.',
          appName: 'classic',
          initialCommands: [
            'a = Slider(-3, 3, 0.1)',
            'h = Slider(-5, 5, 0.1)',
            'k = Slider(-5, 5, 0.1)',
            'f(x) = a(x - h)^2 + k',
          ],
        },
      },
      {
        title: 'Avstand fra punkt til linje',
        content: (
          <div className="space-y-4">
            <p>
              Avstanden fra punkt P(x₀, y₀) til linjen Ax + By + C = 0 er:
            </p>
            <BlockMath>{"d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Avstand fra P(3, 4) til linjen 3x - 4y + 5 = 0:
              </p>
              <BlockMath>{"d = \\frac{|3(3) - 4(4) + 5|}{\\sqrt{3^2 + 4^2}} = \\frac{|-2|}{5} = 0.4"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra:</h4>
              <code className="text-blue-600">Avstand(P, linje)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Avstand punkt-linje',
          description: 'Mål avstanden fra punkt til linje.',
          appName: 'classic',
          initialCommands: [
            'P = (3, 4)',
            'l: 3x - 4y + 5 = 0',
            'd = Distance(P, l)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn likningen for linjen gjennom (1, 2) og (4, 8)',
        'Finn sentrum og radius for sirkelen x² + y² - 4x + 6y - 3 = 0',
        'Tegn ellipsen x²/9 + y²/4 = 1',
        'Finn toppunktet til parabelen y = 2x² - 8x + 5',
        'Finn avstanden fra (2, 3) til linjen 4x + 3y - 10 = 0',
      ],
    },
    summary: [
      'Linje: y = ax + b eller Ax + By + C = 0',
      'Sirkel: (x-h)² + (y-k)² = r²',
      'Ellipse: x²/a² + y²/b² = 1',
      'Parabel: y = a(x-h)² + k',
      'Distance(P, linje) finner avstand',
    ],
    commands: [
      { command: 'Linje(A, B)', description: 'Linje gjennom to punkter', example: 'Linje((1,2), (3,4))' },
      { command: 'Sirkel(M, r)', description: 'Sirkel med sentrum M, radius r', example: 'Sirkel((0,0), 3)' },
      { command: 'Ellipse(M, a, b)', description: 'Ellipse med halv-akser a, b', example: 'Ellipse((0,0), 4, 2)' },
      { command: 'Parabola(F, l)', description: 'Parabel med brennpunkt F, direktrise l', example: 'Parabola((0,1), y=-1)' },
      { command: 'Avstand(P, objekt)', description: 'Avstand fra punkt til objekt', example: 'Avstand((1,2), linje)' },
    ],
  },


  // S2 - Samfunnsfaglig matematikk VG3
  's2-integrasjon': {
    introduction: (
      <p className="text-lg">
        Integrasjon er det motsatte av derivasjon. Vi bruker integral til å beregne
        areal under grafer, og til å finne funksjoner når vi kjenner den deriverte.
      </p>
    ),
    sections: [
      {
        title: 'Ubestemt integral',
        content: (
          <div className="space-y-4">
            <p>
              Det ubestemte integralet er den antideriverte av en funksjon:
            </p>
            <BlockMath>{"\\int f(x)\\,dx = F(x) + C"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Standardintegraler:</h4>
              <div className="space-y-2">
                <BlockMath>{"\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C, \\quad n \\neq -1"}</BlockMath>
                <BlockMath>{"\\int e^x\\,dx = e^x + C"}</BlockMath>
                <BlockMath>{"\\int \\frac{1}{x}\\,dx = \\ln|x| + C"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <BlockMath>{"\\int (3x^2 + 2x - 5)\\,dx = x^3 + x^2 - 5x + C"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Ubestemt integral',
          description: 'Finn antideriverte av funksjoner.',
          appName: 'cas',
          initialCommands: [
            'f(x) = 3x^2 + 2x - 5',
            'Integral(f)',
            'Integral(x^3)',
            'Integral(e^x)',
          ],
        },
      },
      {
        title: 'Bestemt integral',
        content: (
          <div className="space-y-4">
            <p>
              Det bestemte integralet beregner arealet under grafen fra a til b:
            </p>
            <BlockMath>{"\\int_a^b f(x)\\,dx = F(b) - F(a)"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Analysens fundamentalteorem:</h4>
              <p className="text-sm">
                Hvis F&apos;(x) = f(x), så er arealet fra a til b lik F(b) - F(a)
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <BlockMath>{"\\int_1^3 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_1^3 = \\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Bestemt integral',
          description: 'Beregn areal under graf.',
          appName: 'cas',
          initialCommands: [
            'f(x) = x^2',
            'Integral(f, 1, 3)',
            'NIntegral(f, 1, 3)',
          ],
        },
      },
      {
        title: 'Areal under graf',
        content: (
          <div className="space-y-4">
            <p>
              Integralet gir det signerte arealet under grafen:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Over x-aksen</h4>
                <p className="text-sm">
                  Hvis f(x) ≥ 0: Integralet = positivt areal
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Under x-aksen</h4>
                <p className="text-sm">
                  Hvis f(x) ≤ 0: Integralet = negativt areal
                </p>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Totalt areal:</h4>
              <p className="text-sm">
                For å finne totalt areal: Bruk absoluttverdien av integralet
              </p>
              <BlockMath>{"A = \\int_a^b |f(x)|\\,dx"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Visualiser areal',
          description: 'Se hvordan integralet gir areal.',
          appName: 'cas',
          initialCommands: [
            'f(x) = x^2 - 4',
            'IntegralBetween(f, -2, 2)',
            'IntegralBetween(abs(f), -2, 2)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn ∫(4x³ + 2x - 1)dx',
        'Beregn ∫₀² (x² + 1)dx',
        'Finn arealet under f(x) = x³ - x fra x = 0 til x = 2',
        'Bruk integralet til å finne arealet mellom f(x) = x² og x-aksen fra 0 til 3',
        'Finn totalt areal mellom f(x) = sin(x) og x-aksen fra 0 til 2π',
      ],
    },
    summary: [
      'Ubestemt integral: ∫f(x)dx = F(x) + C',
      'Bestemt integral: ∫ₐᵇ f(x)dx = F(b) - F(a)',
      'Integralet gir signert areal under graf',
      'Bruk absoluttverdien for totalt areal',
    ],
    commands: [
      { command: 'Integral(f)', description: 'Ubestemt integral av f', example: 'Integral(x^2)' },
      { command: 'Integral(f, a, b)', description: 'Bestemt integral fra a til b', example: 'Integral(x^2, 0, 2)' },
      { command: 'NIntegral(f, a, b)', description: 'Numerisk integral', example: 'NIntegral(sin(x), 0, pi)' },
      { command: 'IntegralBetween(f, a, b)', description: 'Areal mellom funksjon og x-akse', example: 'IntegralBetween(x^2, 0, 3)' },
    ],
  },

  's2-areal-volum': {
    introduction: (
      <p className="text-lg">
        Vi kan bruke integrasjon til å beregne areal mellom kurver og volum av
        omdreiningslegemer. Dette er nyttig i mange økonomiske og samfunnsfaglige
        anvendelser.
      </p>
    ),
    sections: [
      {
        title: 'Areal mellom to kurver',
        content: (
          <div className="space-y-4">
            <p>
              Arealet mellom to funksjoner f(x) og g(x) fra a til b er:
            </p>
            <BlockMath>{"A = \\int_a^b |f(x) - g(x)|\\,dx"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Hvis f(x) ≥ g(x):</h4>
              <BlockMath>{"A = \\int_a^b (f(x) - g(x))\\,dx"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn arealet mellom f(x) = x² og g(x) = x fra 0 til 1:
              </p>
              <BlockMath>{"A = \\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{6}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Areal mellom kurver',
          description: 'Visualiser areal mellom to funksjoner.',
          appName: 'classic',
          initialCommands: [
            'f(x) = x',
            'g(x) = x^2',
            'IntegralBetween(f, g, 0, 1)',
          ],
        },
      },
      {
        title: 'Skjæringspunkter',
        content: (
          <div className="space-y-4">
            <p>
              For å finne areal mellom kurver må vi ofte finne skjæringspunktene:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Fremgangsmåte:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Finn skjæringspunkter: f(x) = g(x)</li>
                <li>Bestem hvilken funksjon som er øverst</li>
                <li>Beregn integralet mellom skjæringspunktene</li>
              </ol>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                f(x) = 4 - x² og g(x) = x² skjærer i x = ±√2
              </p>
              <BlockMath>{"A = \\int_{-\\sqrt{2}}^{\\sqrt{2}} (4 - 2x^2)\\,dx"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Finn skjæringspunkter',
          description: 'Finn hvor kurvene skjærer hverandre.',
          appName: 'cas',
          initialCommands: [
            'f(x) = 4 - x^2',
            'g(x) = x^2',
            'Solve(f = g, x)',
            'IntegralBetween(f, g, -sqrt(2), sqrt(2))',
          ],
        },
      },
      {
        title: 'Volum av omdreiningslegeme',
        content: (
          <div className="space-y-4">
            <p>
              Når vi dreier en kurve f(x) rundt x-aksen får vi et omdreiningslegeme:
            </p>
            <BlockMath>{"V = \\pi \\int_a^b [f(x)]^2\\,dx"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Skivemetoden:</h4>
              <p className="text-sm">
                Vi tenker oss volumet som summen av tynne skiver med radius f(x)
              </p>
              <BlockMath>{"\\text{Volumet av hver skive} = \\pi [f(x)]^2 \\Delta x"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Volum av kjegle ved å dreie f(x) = x rundt x-aksen fra 0 til h:
              </p>
              <BlockMath>{"V = \\pi \\int_0^h x^2\\,dx = \\frac{\\pi h^3}{3}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Omdreiningslegemer',
          description: 'Beregn volum av omdreiningslegemer.',
          appName: 'classic',
          initialCommands: [
            'f(x) = sqrt(x)',
            'a = 0',
            'b = 4',
            'V = pi * Integral(f^2, a, b)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn arealet mellom f(x) = x² og g(x) = 2x fra x = 0 til x = 2',
        'Beregn arealet mellom y = x³ og y = x',
        'Finn volumet når f(x) = √x dreies rundt x-aksen fra 0 til 4',
        'Beregn volumet av en kule med radius r ved å dreie f(x) = √(r² - x²)',
        'Finn arealet innesluttet av f(x) = sin(x) og g(x) = cos(x) fra 0 til π/4',
      ],
    },
    summary: [
      'Areal mellom kurver: ∫ₐᵇ |f(x) - g(x)|dx',
      'Finn skjæringspunkter først: f(x) = g(x)',
      'Volum av omdreiningslegeme: V = π∫ₐᵇ [f(x)]²dx',
      'Bruk skivemetoden for omdreiningslegemer',
    ],
    commands: [
      { command: 'IntegralBetween(f, g, a, b)', description: 'Areal mellom f og g', example: 'IntegralBetween(x, x^2, 0, 1)' },
      { command: 'Løs(f = g, x)', description: 'Finn skjæringspunkter', example: 'Løs(x^2 = 2x, x)' },
      { command: 'pi * Integral(f^2, a, b)', description: 'Volum av omdreiningslegeme', example: 'pi * Integral(x^2, 0, 2)' },
    ],
  },

  's2-difflikning': {
    introduction: (
      <p className="text-lg">
        Differensiallikninger beskriver hvordan en størrelse endrer seg over tid.
        De brukes til å modellere vekst, nedbrytning, og dynamiske systemer i
        samfunnsøkonomi og populasjonsbiologi.
      </p>
    ),
    sections: [
      {
        title: 'Hva er en differensiallikning?',
        content: (
          <div className="space-y-4">
            <p>
              En differensiallikning er en likning som inneholder en funksjon og dens
              deriverte:
            </p>
            <BlockMath>{"\\frac{dy}{dx} = f(x, y)"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempler:</h4>
              <div className="space-y-2">
                <BlockMath>{"\\frac{dy}{dx} = 2x \\quad \\text{(separabel)}"}</BlockMath>
                <BlockMath>{"\\frac{dy}{dx} = ky \\quad \\text{(eksponentiell vekst)}"}</BlockMath>
                <BlockMath>{"\\frac{dy}{dx} = y(1 - y) \\quad \\text{(logistisk vekst)}"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Anvendelser:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Befolkningsvekst</li>
                <li>Rentesrente</li>
                <li>Radioaktivt henfall</li>
                <li>Markedsmodeller</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Retningsfelt',
          description: 'Visualiser løsninger av differensiallikninger.',
          appName: 'cas',
          initialCommands: [
            'SlopeField(2x)',
            'SlopeField(y)',
            'SolveODE(2x)',
          ],
        },
      },
      {
        title: 'Separable differensiallikninger',
        content: (
          <div className="space-y-4">
            <p>
              En separabel differensiallikning kan skrives på formen:
            </p>
            <BlockMath>{"\\frac{dy}{dx} = g(x) \\cdot h(y)"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Løsningsmetode:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Separer variablene: dy/h(y) = g(x)dx</li>
                <li>Integrer begge sider</li>
                <li>Løs for y hvis mulig</li>
              </ol>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">dy/dx = xy</p>
              <div className="space-y-1 text-sm">
                <BlockMath>{"\\frac{dy}{y} = x\\,dx"}</BlockMath>
                <BlockMath>{"\\ln|y| = \\frac{x^2}{2} + C"}</BlockMath>
                <BlockMath>{"y = Ae^{x^2/2}"}</BlockMath>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Løs separable likninger',
          description: 'Finn analytiske løsninger.',
          appName: 'cas',
          initialCommands: [
            "SolveODE(x * y)",
            "SolveODE(y / x)",
            "SolveODE(y * (1 - y))",
          ],
        },
      },
      {
        title: 'Vekstmodeller',
        content: (
          <div className="space-y-4">
            <p>
              Differensiallikninger brukes til å modellere ulike typer vekst:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Eksponentiell vekst</h4>
                <BlockMath>{"\\frac{dy}{dt} = ky"}</BlockMath>
                <p className="text-sm">Løsning: y(t) = y₀eᵏᵗ</p>
                <p className="text-sm text-muted-foreground">
                  Ubegrenset vekst (k &gt; 0) eller nedbrytning (k &lt; 0)
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Logistisk vekst</h4>
                <BlockMath>{"\\frac{dy}{dt} = ky(1 - \\frac{y}{M})"}</BlockMath>
                <p className="text-sm">M = bæreevne (maksimal populasjon)</p>
                <p className="text-sm text-muted-foreground">
                  Modellerer begrenset vekst i realistiske systemer
                </p>
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Økonomiske anvendelser:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Rentesrente: dK/dt = rK</li>
                <li>Markedsvekst med metning</li>
                <li>Teknologispredning</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Sammenlign vekstmodeller',
          description: 'Se forskjell på eksponentiell og logistisk vekst.',
          appName: 'cas',
          initialCommands: [
            'k = 0.5',
            'M = 100',
            'SolveODE(k * y)',
            'SolveODE(k * y * (1 - y/M))',
          ],
        },
      },
      {
        title: 'Retningsfelt',
        content: (
          <div className="space-y-4">
            <p>
              Et retningsfelt visualiserer differensiallikninger ved å vise
              stigningstall i hvert punkt:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Hvordan lese et retningsfelt:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Hver pil viser retningen til løsningskurven i det punktet</li>
                <li>Følg pilene for å se hvordan løsningen utvikler seg</li>
                <li>Ulike startpunkter gir ulike løsningskurver</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">I GeoGebra:</h4>
              <code className="text-blue-600">Retningsfelt(dy/dx)</code>
              <p className="text-sm mt-2">
                Tegner retningsfeltet for den gitte differensiallikningen
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Utforsk retningsfelt',
          description: 'Tegn retningsfelt og løsningskurver.',
          appName: 'cas',
          initialCommands: [
            'SlopeField(y)',
            'SlopeField(x - y)',
            'SlopeField(x * y)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Løs differensiallikningen dy/dx = 3x² med startverdi y(0) = 2',
        'Finn den generelle løsningen av dy/dx = y/x',
        'En befolkning vokser eksponentielt: dP/dt = 0.03P. Hvis P(0) = 1000, finn P(10)',
        'Løs den logistiske vekstlikningen dN/dt = 0.5N(1 - N/200) med N(0) = 10',
        'Tegn retningsfeltet for dy/dx = x + y',
      ],
    },
    summary: [
      'Differensiallikning: dy/dx = f(x, y)',
      'Separabel: dy/h(y) = g(x)dx',
      'Eksponentiell vekst: dy/dt = ky',
      'Logistisk vekst: dy/dt = ky(1 - y/M)',
      'Retningsfelt visualiserer løsninger',
    ],
    commands: [
      { command: 'SolveODE(f)', description: 'Løs differensiallikning dy/dx = f', example: 'SolveODE(2x)' },
      { command: 'SolveODE(f, startpunkt)', description: 'Løs med startverdi', example: 'SolveODE(y, (0,1))' },
      { command: 'Retningsfelt(f)', description: 'Tegn retningsfelt', example: 'Retningsfelt(x*y)' },
    ],
  },

  's2-statistikk': {
    introduction: (
      <p className="text-lg">
        Statistisk inferens handler om å trekke konklusjoner om en populasjon basert
        på data fra et utvalg. Vi bruker hypotesetesting og konfidensintervall til
        å vurdere påstander og estimere ukjente parametre.
      </p>
    ),
    sections: [
      {
        title: 'Hypotesetesting',
        content: (
          <div className="space-y-4">
            <p>
              Hypotesetesting er en metode for å vurdere påstander om populasjonen:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Nullhypotese (H₀)</h4>
                <p className="text-sm">
                  Den påstanden vi tester, vanligvis &quot;ingen effekt&quot; eller &quot;ingen forskjell&quot;
                </p>
                <p className="text-sm font-semibold mt-2">Eksempel: H₀: μ = 100</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Alternativ hypotese (H₁)</h4>
                <p className="text-sm">
                  Det vi tror er sant hvis H₀ er forkastet
                </p>
                <p className="text-sm font-semibold mt-2">Eksempel: H₁: μ ≠ 100</p>
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Fremgangsmåte:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Formuler H₀ og H₁</li>
                <li>Velg signifikansnivå α (vanligvis 0.05)</li>
                <li>Beregn testobservator (z-verdi eller t-verdi)</li>
                <li>Finn P-verdi</li>
                <li>Konklusjon: Forkast H₀ hvis P &lt; α</li>
              </ol>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Hypotesetest',
          description: 'Utfør Z-test for gjennomsnitt.',
          appName: 'classic',
          initialCommands: [
            'ZTest(100, 15, 105, 50, "≠")',
            'Normal(0, 1, -2, 2)',
            'ZoomIn(40, -0.01, 160, 0.03)',
          ],
        },
      },
      {
        title: 'P-verdi',
        content: (
          <div className="space-y-4">
            <p>
              P-verdien er sannsynligheten for å få et resultat minst like ekstremt
              som det observerte, gitt at H₀ er sann:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Tolkning:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>P &lt; 0.05:</strong> Forkast H₀ (signifikant resultat)</li>
                <li><strong>P ≥ 0.05:</strong> Kan ikke forkaste H₀</li>
                <li><strong>P &lt; 0.01:</strong> Sterkt signifikant</li>
                <li><strong>P &lt; 0.001:</strong> Meget sterkt signifikant</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Vi tester H₀: μ = 100 mot H₁: μ ≠ 100
              </p>
              <p className="text-sm">
                Utvalg: x̄ = 105, σ = 15, n = 50
              </p>
              <p className="text-sm">
                Z = (105 - 100)/(15/√50) = 2.36
              </p>
              <p className="text-sm">
                P-verdi = 0.018 &lt; 0.05 → Forkast H₀
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn P-verdi',
          description: 'Finn P-verdi for ulike tester.',
          appName: 'classic',
          initialCommands: [
            'mu0 = 100',
            'sigma = 15',
            'xbar = 105',
            'n = 50',
            'z = (xbar - mu0)/(sigma/sqrt(n))',
            'p = 2 * (1 - Normal(0, 1, z))',
            'ZoomIn(40, -0.01, 160, 0.03)',
          ],
        },
      },
      {
        title: 'Konfidensintervall',
        content: (
          <div className="space-y-4">
            <p>
              Et konfidensintervall gir et estimat for en ukjent parameter med en
              viss sikkerhet:
            </p>
            <BlockMath>{"\\bar{x} \\pm z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Vanlige konfidensnivå:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>90% KI:</strong> z = 1.645</li>
                <li><strong>95% KI:</strong> z = 1.96</li>
                <li><strong>99% KI:</strong> z = 2.576</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Tolkning:</h4>
              <p className="text-sm">
                Vi er 95% sikre på at den sanne verdien av μ ligger i intervallet
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                x̄ = 105, σ = 15, n = 50, 95% KI:
              </p>
              <BlockMath>{"105 \\pm 1.96 \\cdot \\frac{15}{\\sqrt{50}} = [100.8, 109.2]"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Konfidensintervall',
          description: 'Beregn konfidensintervall for gjennomsnitt.',
          appName: 'classic',
          initialCommands: [
            'ZEstimate(15, 105, 50, 0.95)',
            'ZoomIn(40, -0.01, 160, 0.03)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Test H₀: μ = 50 mot H₁: μ ≠ 50 når x̄ = 52, σ = 8, n = 100',
        'Finn P-verdien for en Z-test med z = 2.5',
        'Beregn 95% konfidensintervall for μ når x̄ = 75, σ = 12, n = 64',
        'Hvis P = 0.03, hva er konklusjonen ved α = 0.05?',
        'Hvor stort utvalg trengs for at 95% KI skal ha bredde ±2 når σ = 10?',
      ],
    },
    summary: [
      'H₀: nullhypotese, H₁: alternativ hypotese',
      'P-verdi: sannsynlighet for resultat gitt H₀',
      'Forkast H₀ hvis P < α (vanligvis 0.05)',
      'Konfidensintervall: x̄ ± z·σ/√n',
      'Større utvalg → smalere konfidensintervall',
    ],
    commands: [
      { command: 'ZTest(μ₀, σ, x̄, n, type)', description: 'Z-test for gjennomsnitt', example: 'ZTest(100, 15, 105, 50, "≠")' },
      { command: 'ZEstimate(σ, x̄, n, niveau)', description: 'Konfidensintervall', example: 'ZEstimate(15, 105, 50, 0.95)' },
      { command: 'Normalfordeling(0, 1, z)', description: 'Kumulativ normalfordeling', example: 'Normalfordeling(0, 1, 1.96)' },
    ],
  },

  's2-sannsynlighet': {
    introduction: (
      <p className="text-lg">
        Normalfordelingen er den viktigste kontinuerlige sannsynlighetsfordelingen.
        Den brukes til å modellere mange naturlige og samfunnsmessige fenomener, og
        er grunnlaget for statistisk inferens.
      </p>
    ),
    sections: [
      {
        title: 'Normalfordelingen',
        content: (
          <div className="space-y-4">
            <p>
              En normalfordelt variabel X med forventning μ og standardavvik σ
              skrives X ~ N(μ, σ²):
            </p>
            <BlockMath>{"f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Egenskaper:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Klokkekurve, symmetrisk om μ</li>
                <li>68% av verdiene innenfor μ ± σ</li>
                <li>95% av verdiene innenfor μ ± 2σ</li>
                <li>99.7% av verdiene innenfor μ ± 3σ</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Anvendelser:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Høyder og vekter i befolkningen</li>
                <li>Testresultater og karakterer</li>
                <li>Målefeil</li>
                <li>Økonomiske indikatorer</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Visualiser normalfordeling',
          description: 'Utforsk normalfordelingen med ulike parametere.',
          appName: 'classic',
          initialCommands: [
            'mu = Slider(-5, 5, 0.1)',
            'sigma = Slider(0.1, 3, 0.1)',
            'f(x) = 1/(sigma*sqrt(2*pi)) * e^(-(x-mu)^2/(2*sigma^2))',
          ],
        },
      },
      {
        title: 'Standardnormalfordelingen',
        content: (
          <div className="space-y-4">
            <p>
              Standardnormalfordelingen har μ = 0 og σ = 1, betegnet Z ~ N(0, 1):
            </p>
            <BlockMath>{"\\phi(z) = \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Standardisering:</h4>
              <p className="text-sm">
                Enhver normalfordelt variabel kan standardiseres:
              </p>
              <BlockMath>{"Z = \\frac{X - \\mu}{\\sigma}"}</BlockMath>
              <p className="text-sm text-muted-foreground">
                Z-verdien forteller hvor mange standardavvik X er fra μ
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Hvis X ~ N(100, 15²) og x = 115:
              </p>
              <BlockMath>{"Z = \\frac{115 - 100}{15} = 1"}</BlockMath>
              <p className="text-sm">
                115 er ett standardavvik over gjennomsnittet
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Standardisering',
          description: 'Konverter mellom X og Z.',
          appName: 'classic',
          initialCommands: [
            'mu = 100',
            'sigma = 15',
            'x = 115',
            'z = (x - mu)/sigma',
            'ZoomIn(40, -0.01, 160, 0.03)',
          ],
        },
      },
      {
        title: 'Sannsynlighetsberegning',
        content: (
          <div className="space-y-4">
            <p>
              For å finne sannsynligheter bruker vi normalfordelingstabellen eller
              GeoGebra:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">P(X ≤ a):</h4>
              <code className="text-blue-600">Normalfordeling(μ, σ, a)</code>
              <p className="text-sm mt-2">
                Gir sannsynligheten for at X er mindre enn eller lik a
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">P(a ≤ X ≤ b):</h4>
              <code className="text-blue-600">Normalfordeling(μ, σ, a, b)</code>
              <p className="text-sm mt-2">
                Sannsynligheten for at X er mellom a og b
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                X ~ N(100, 15²). Finn P(90 ≤ X ≤ 110):
              </p>
              <code className="text-blue-600">Normalfordeling(100, 15, 90, 110) ≈ 0.495</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Beregn sannsynligheter',
          description: 'Finn areal under normalfordelingen.',
          appName: 'classic',
          initialCommands: [
            'Normal(100, 15, 90, 110)',
            'Normal(100, 15, 85)',
            'Normal(0, 1, -1.96, 1.96)',
            'ZoomIn(40, -0.01, 160, 0.03)',
          ],
        },
      },
      {
        title: 'Invers normalfordeling',
        content: (
          <div className="space-y-4">
            <p>
              Invers normalfordeling finner verdien som gir en bestemt sannsynlighet:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">InversNormalfordeling(μ, σ, p):</h4>
              <p className="text-sm">
                Finner verdien a slik at P(X ≤ a) = p
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel - Kvartiler:</h4>
              <p className="text-sm">
                X ~ N(100, 15²). Finn første kvartil (25-persentil):
              </p>
              <code className="text-blue-600">InversNormalfordeling(100, 15, 0.25) ≈ 89.9</code>
              <p className="text-sm mt-2">
                25% av verdiene er under 89.9
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Kritiske verdier:</h4>
              <p className="text-sm">
                For 95% konfidensintervall (Z ~ N(0,1)):
              </p>
              <code className="text-blue-600">InversNormalfordeling(0, 1, 0.975) ≈ 1.96</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Invers normalfordeling',
          description: 'Finn verdier fra sannsynligheter.',
          appName: 'classic',
          initialCommands: [
            'InverseNormal(100, 15, 0.25)',
            'InverseNormal(100, 15, 0.5)',
            'InverseNormal(100, 15, 0.75)',
            'InverseNormal(0, 1, 0.975)',
            'ZoomIn(40, -0.01, 160, 0.03)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Hvis X ~ N(50, 10²), finn P(X < 60)',
        'Standardiser x = 75 når X ~ N(80, 5²)',
        'Finn P(45 < X < 55) når X ~ N(50, 10²)',
        'Finn medianen til X ~ N(100, 15²)',
        'Hva er Z-verdien som gir 95% konfidensintervall?',
      ],
    },
    summary: [
      'Normalfordeling: X ~ N(μ, σ²)',
      'Standardisering: Z = (X - μ)/σ',
      '68-95-99.7 regelen for μ ± σ, ± 2σ, ± 3σ',
      'Normalfordeling(μ, σ, a, b) gir P(a ≤ X ≤ b)',
      'InversNormalfordeling(μ, σ, p) finner kvantiler',
    ],
    commands: [
      { command: 'Normalfordeling(μ, σ, a)', description: 'P(X ≤ a)', example: 'Normalfordeling(100, 15, 110)' },
      { command: 'Normalfordeling(μ, σ, a, b)', description: 'P(a ≤ X ≤ b)', example: 'Normalfordeling(100, 15, 90, 110)' },
      { command: 'InversNormalfordeling(μ, σ, p)', description: 'Finn x når P(X ≤ x) = p', example: 'InversNormalfordeling(100, 15, 0.75)' },
      { command: '(x - mu)/sigma', description: 'Standardiser X til Z', example: '(115 - 100)/15' },
    ],
  },

  // R2 - Realfagsmatematikk VG3
  'r2-integrasjon': {
    introduction: (
      <p className="text-lg">
        Integrasjonsteknikker utvider verktøykassen for å løse integraler utover
        grunnleggende standardformer. Vi ser på delvis integrasjon, substitusjon,
        delbrøkoppspalting og uegentlige integraler.
      </p>
    ),
    sections: [
      {
        title: 'Delvis integrasjon',
        content: (
          <div className="space-y-4">
            <p>
              Delvis integrasjon brukes når integranden er et produkt av to funksjoner:
            </p>
            <BlockMath>{"\\int u\\,dv = uv - \\int v\\,du"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Fremgangsmåte:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Velg u (deriveres) og dv (integreres)</li>
                <li>Finn du = u&apos; dx og v = ∫dv</li>
                <li>Sett inn i formelen</li>
                <li>Løs det nye integralet ∫v du</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn ∫x·eˣ dx. Velg u = x og dv = eˣ dx:
              </p>
              <div className="text-sm mt-2">
                <BlockMath>{"u = x \\quad \\Rightarrow \\quad du = dx"}</BlockMath>
                <BlockMath>{"dv = e^x dx \\quad \\Rightarrow \\quad v = e^x"}</BlockMath>
                <BlockMath>{"\\int x\\cdot e^x dx = x\\cdot e^x - \\int e^x dx = x\\cdot e^x - e^x + C"}</BlockMath>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Delvis integrasjon',
          description: 'Løs integraler med produktregel for integrasjon.',
          appName: 'cas',
          initialCommands: [
            'Integral(x * e^x)',
            'Integral(x * sin(x))',
            'Integral(x^2 * ln(x))',
          ],
        },
      },
      {
        title: 'Substitusjon',
        content: (
          <div className="space-y-4">
            <p>
              Substitusjon brukes når integranden inneholder en sammensatt funksjon.
              Vi setter u = g(x) og erstatter dx med du:
            </p>
            <BlockMath>{"\\int f(g(x))\\cdot g'(x)\\,dx = \\int f(u)\\,du"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Fremgangsmåte:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Velg u = den indre funksjonen</li>
                <li>Finn du = u&apos; dx</li>
                <li>Erstatt i integralet</li>
                <li>Integrer i forhold til u</li>
                <li>Substituer tilbake til x</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn ∫2x·cos(x²) dx. La u = x²:
              </p>
              <div className="text-sm mt-2">
                <BlockMath>{"u = x^2 \\quad \\Rightarrow \\quad du = 2x\\,dx"}</BlockMath>
                <BlockMath>{"\\int 2x\\cdot\\cos(x^2)dx = \\int \\cos(u)du = \\sin(u) + C = \\sin(x^2) + C"}</BlockMath>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Substitusjon',
          description: 'Bruk variabelsubstitusjon for å løse integraler.',
          appName: 'cas',
          initialCommands: [
            'Integral(2x * cos(x^2))',
            'Integral(x / sqrt(x^2 + 1))',
            'Integral(e^(2x) * sin(e^(2x)))',
          ],
        },
      },
      {
        title: 'Delbrøkoppspalting',
        content: (
          <div className="space-y-4">
            <p>
              For å integrere rasjonale funksjoner bruker vi delbrøkoppspalting.
              Vi spalter opp brøken i enklere delbrøker:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Delbrøker() i GeoGebra:</h4>
              <p className="text-sm">
                Denne kommandoen spalter automatisk opp rasjonale funksjoner
                i delbrøker som er lettere å integrere.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn ∫(3x + 5)/(x² - x - 2) dx:
              </p>
              <div className="text-sm mt-2">
                <p>Først faktoriser nevner: x² - x - 2 = (x - 2)(x + 1)</p>
                <BlockMath>{"\\frac{3x + 5}{(x-2)(x+1)} = \\frac{A}{x-2} + \\frac{B}{x+1}"}</BlockMath>
                <p className="mt-2">Løs for A og B, deretter integrer hver delbrøk.</p>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Delbrøkoppspalting',
          description: 'Bruk Delbrøker() for å spalte opp rasjonale funksjoner.',
          appName: 'cas',
          initialCommands: [
            'PartialFractions((3x + 5) / (x^2 - x - 2))',
            'Integral((3x + 5) / (x^2 - x - 2))',
            'PartialFractions(1 / (x^2 - 1))',
          ],
        },
      },
      {
        title: 'Uegentlige integraler',
        content: (
          <div className="space-y-4">
            <p>
              Uegentlige integraler har enten uendelige grenser eller funksjonen
              har asymptote i integrasjonsområdet:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Type 1: Uendelige grenser</h4>
              <BlockMath>{"\\int_a^\\infty f(x)dx = \\lim_{b \\to \\infty} \\int_a^b f(x)dx"}</BlockMath>
              <p className="text-sm mt-2">
                Integralet konvergerer hvis grenseverdien eksisterer og er endelig.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Beregn ∫₁^∞ (1/x²) dx:
              </p>
              <div className="text-sm mt-2">
                <BlockMath>{"\\int_1^\\infty \\frac{1}{x^2}dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + 1\\right) = 1"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Type 2: Funksjon med asymptote</h4>
              <p className="text-sm">
                Hvis f(x) har asymptote i x = c innenfor [a,b], splitt integralet:
              </p>
              <BlockMath>{"\\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Uegentlige integraler',
          description: 'Beregn integraler med uendelige grenser.',
          appName: 'cas',
          initialCommands: [
            'Integral(1 / x^2, 1, infinity)',
            'Integral(e^(-x), 0, infinity)',
            'Limit(Integral(1/x^2, 1, b), b, infinity)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Bruk delvis integrasjon på ∫x·sin(x) dx',
        'Bruk substitusjon på ∫x·√(x² + 1) dx',
        'Spalte opp (5x - 2)/(x² - 4) i delbrøker',
        'Beregn ∫₁^∞ (1/x³) dx',
        'Finn ∫ln(x) dx ved delvis integrasjon',
      ],
    },
    summary: [
      'Delvis integrasjon: ∫u dv = uv - ∫v du',
      'Substitusjon: Erstatt u = g(x) og du = g\'(x)dx',
      'Delbrøker() spalter rasjonale funksjoner',
      'Uegentlige integraler: grenseverdier av vanlige integraler',
      'Konvergens: Integralet har endelig verdi',
    ],
    commands: [
      { command: 'Integral(f)', description: 'Ubestemt integral', example: 'Integral(x * e^x)' },
      { command: 'Integral(f, a, b)', description: 'Bestemt integral', example: 'Integral(1/x^2, 1, 5)' },
      { command: 'Delbrøker(f)', description: 'Delbrøkoppspalting', example: 'Delbrøker(1/(x^2-1))' },
      { command: 'Grense(expr, x, a)', description: 'Grenseverdi', example: 'Grense(Integral(1/x^2, 1, b), b, infinity)' },
    ],
  },

  'r2-difflikning': {
    introduction: (
      <p className="text-lg">
        Differensiallikninger beskriver hvordan en funksjon endrer seg.
        De er fundamentale i fysikk, biologi og økonomi for å modellere
        dynamiske systemer som vekst, bevegelse og varmeledning.
      </p>
    ),
    sections: [
      {
        title: 'Første ordens separable likninger',
        content: (
          <div className="space-y-4">
            <p>
              En første ordens differensialligning har formen y&apos; = f(x, y).
              Hvis den er separabel kan vi skrive:
            </p>
            <BlockMath>{"\\frac{dy}{dx} = g(x) \\cdot h(y)"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Løsningsmetode:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Separer variablene: (1/h(y)) dy = g(x) dx</li>
                <li>Integrer begge sider</li>
                <li>Løs for y hvis mulig</li>
                <li>Bruk initialverdi for å finne integrasjonskonstanten</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel - Eksponentiell vekst:</h4>
              <p className="text-sm">
                Løs y&apos; = ky med y(0) = y₀:
              </p>
              <div className="text-sm mt-2">
                <BlockMath>{"\\frac{dy}{dx} = ky \\quad \\Rightarrow \\quad \\frac{dy}{y} = k\\,dx"}</BlockMath>
                <BlockMath>{"\\int \\frac{dy}{y} = \\int k\\,dx \\quad \\Rightarrow \\quad \\ln|y| = kx + C"}</BlockMath>
                <BlockMath>{"y = Ae^{kx}, \\quad A = y_0"}</BlockMath>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Separable likninger',
          description: 'Løs første ordens differensiallikninger.',
          appName: 'cas',
          initialCommands: [
            'SolveODE(y\' = k*y)',
            'SolveODE(y\' = x*y)',
            'SolveODE(y\' = y^2, (0, 1))',
          ],
        },
      },
      {
        title: 'Andre ordens likninger',
        content: (
          <div className="space-y-4">
            <p>
              Andre ordens lineære differensiallikninger med konstante koeffisienter:
            </p>
            <BlockMath>{"ay'' + by' + cy = 0"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Karakteristisk ligning:</h4>
              <BlockMath>{"ar^2 + br + c = 0"}</BlockMath>
              <p className="text-sm mt-2">
                Løsningen avhenger av røttene til denne andregradslikningen:
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Tre tilfeller:</h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>To reelle røtter r₁, r₂: y = C₁e^(r₁x) + C₂e^(r₂x)</li>
                <li>En dobbeltrot r: y = (C₁ + C₂x)e^(rx)</li>
                <li>Komplekse røtter α ± βi: y = e^(αx)(C₁cos(βx) + C₂sin(βx))</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel - Harmonisk oscillator:</h4>
              <p className="text-sm">
                Løs y&apos;&apos; + ω²y = 0 (udempet svingning):
              </p>
              <BlockMath>{"r^2 + \\omega^2 = 0 \\quad \\Rightarrow \\quad r = \\pm i\\omega"}</BlockMath>
              <BlockMath>{"y = C_1\\cos(\\omega x) + C_2\\sin(\\omega x)"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Andre ordens likninger',
          description: 'Løs andre ordens differensiallikninger.',
          appName: 'cas',
          initialCommands: [
            'SolveODE(y\'\' + 4y = 0)',
            'SolveODE(y\'\' - 3y\' + 2y = 0)',
            'SolveODE(y\'\' + 2y\' + y = 0)',
          ],
        },
      },
      {
        title: 'Retningsfelt',
        content: (
          <div className="space-y-4">
            <p>
              Retningsfelt visualiserer en differensialligning ved å tegne små
              linjestykker som viser stigningstallet y&apos; i hvert punkt (x, y):
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Retningsfelt() i GeoGebra:</h4>
              <code className="text-blue-600">Retningsfelt(f(x, y))</code>
              <p className="text-sm mt-2">
                Tegner retningsfelt for differensiallikningen y&apos; = f(x, y)
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Hvordan lese retningsfelt:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Hver linje viser retningen løsningskurven har i det punktet</li>
                <li>Følg linjene for å se hvordan løsninger oppfører seg</li>
                <li>Likevektspunkter: der alle linjer er horisontale (y&apos; = 0)</li>
              </ul>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Retningsfelt',
          description: 'Visualiser differensiallikninger med Retningsfelt().',
          appName: 'cas',
          initialCommands: [
            'SlopeField(y)',
            'SlopeField(x - y)',
            'SlopeField(-x/y)',
          ],
        },
      },
      {
        title: 'Løsning med SolveODE()',
        content: (
          <div className="space-y-4">
            <p>
              GeoGebra kan løse mange differensiallikninger numerisk og analytisk:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Syntaks:</h4>
              <code className="text-blue-600">SolveODE(&lt;y&apos;&gt;, &lt;x-start&gt;, &lt;y-start&gt;, &lt;x-slutt&gt;, &lt;steg&gt;)</code>
              <p className="text-sm mt-2 mb-2">eller med initialverdi:</p>
              <code className="text-blue-600">SolveODE(&lt;y&apos;&gt;, (x₀, y₀))</code>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel - Logistisk vekst:</h4>
              <p className="text-sm">
                Løs y&apos; = y(1 - y) med y(0) = 0.1:
              </p>
              <code className="text-blue-600 block mt-2">SolveODE(y * (1 - y), (0, 0.1))</code>
              <p className="text-sm mt-2">
                Gir løsningen som en funksjon du kan plotte og analysere.
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Kombinere med retningsfelt:</h4>
              <p className="text-sm">
                Bruk Retningsfelt() og SolveODE() sammen for å se både
                det generelle oppførselen og spesifikke løsninger.
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'SolveODE() med initialverdier',
          description: 'Løs differensiallikninger numerisk.',
          appName: 'cas',
          initialCommands: [
            'SolveODE(y * (1 - y), (0, 0.1))',
            'SolveODE(-x/y, (0, 3))',
            'SlopeField(y * (1 - y))',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Løs y\' = 2xy med y(0) = 1',
        'Løs y\'\' + 9y = 0',
        'Tegn retningsfelt for y\' = x + y',
        'Bruk SolveODE() på y\' = y² med y(0) = 1',
        'Finn likevektspunkter for y\' = y(2 - y)',
      ],
    },
    summary: [
      'Separable: (1/h(y))dy = g(x)dx, integrer begge sider',
      'Andre ordens: Bruk karakteristisk ligning ar² + br + c = 0',
      'Retningsfelt(f) viser retningsfelt for y\' = f(x,y)',
      'SolveODE(y\', (x₀, y₀)) løser med initialverdi',
      'Likevektspunkter: der y\' = 0',
    ],
    commands: [
      { command: 'SolveODE(y\')', description: 'Løs differensialligning', example: 'SolveODE(k*y)' },
      { command: 'SolveODE(y\', (x₀, y₀))', description: 'Løs med initialverdi', example: 'SolveODE(y*(1-y), (0, 0.1))' },
      { command: 'Retningsfelt(f)', description: 'Tegn retningsfelt', example: 'Retningsfelt(x - y)' },
      { command: 'Løs(y\' = 0, y)', description: 'Finn likevektspunkter', example: 'Løs(y*(2-y) = 0, y)' },
    ],
  },

  'r2-vektorer-3d': {
    introduction: (
      <p className="text-lg">
        Vektorer i rommet utvider vektorbegrepet fra planet til tre dimensjoner.
        Vi lærer om 3D-vektorer, kryssprodukt og deres anvendelser i geometri og fysikk.
      </p>
    ),
    sections: [
      {
        title: '3D-vektorer',
        content: (
          <div className="space-y-4">
            <p>
              En vektor i rommet har tre komponenter (x, y, z):
            </p>
            <BlockMath>{"\\vec{v} = \\begin{pmatrix} v_x \\\\ v_y \\\\ v_z \\end{pmatrix} = v_x\\vec{i} + v_y\\vec{j} + v_z\\vec{k}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Lengde (norm):</h4>
              <BlockMath>{"|\\vec{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2}"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Prikkprodukt:</h4>
              <BlockMath>{"\\vec{a} \\cdot \\vec{b} = a_xb_x + a_yb_y + a_zb_z = |\\vec{a}||\\vec{b}|\\cos\\theta"}</BlockMath>
              <p className="text-sm mt-2">
                Gir vinkel θ mellom vektorene og tester ortogonalitet (⊥ hvis = 0)
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                La a = (1, 2, 3) og b = (4, 5, 6):
              </p>
              <BlockMath>{"|\\vec{a}| = \\sqrt{1^2 + 2^2 + 3^2} = \\sqrt{14}"}</BlockMath>
              <BlockMath>{"\\vec{a} \\cdot \\vec{b} = 1\\cdot4 + 2\\cdot5 + 3\\cdot6 = 32"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Vektorer i 3D',
          description: 'Visualiser vektorer i rommet.',
          appName: '3d',
          initialCommands: [
            'a = Vector((1, 2, 3))',
            'b = Vector((4, 5, 6))',
            'Length(a)',
            'a . b',
          ],
        },
      },
      {
        title: 'Kryssprodukt',
        content: (
          <div className="space-y-4">
            <p>
              Kryssproduktet av to vektorer gir en ny vektor som står vinkelrett
              på begge de opprinnelige vektorene:
            </p>
            <BlockMath>{"\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_yb_z - a_zb_y \\\\ a_zb_x - a_xb_z \\\\ a_xb_y - a_yb_x \\end{pmatrix}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Egenskaper:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>a × b ⊥ a og a × b ⊥ b</li>
                <li>|a × b| = |a||b|sin(θ) (areal av parallellogram)</li>
                <li>a × b = -b × a (anti-kommutativ)</li>
                <li>a × a = 0</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Kryss() i GeoGebra:</h4>
              <code className="text-blue-600">Kryss(a, b)</code>
              <p className="text-sm mt-2">
                Beregner kryssproduktet automatisk
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn a × b der a = (1, 0, 0) og b = (0, 1, 0):
              </p>
              <BlockMath>{"\\vec{a} \\times \\vec{b} = \\begin{pmatrix} 0\\cdot0 - 0\\cdot1 \\\\ 0\\cdot0 - 1\\cdot0 \\\\ 1\\cdot1 - 0\\cdot0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Kryssprodukt',
          description: 'Beregn og visualiser kryssprodukt.',
          appName: '3d',
          initialCommands: [
            'a = Vector((1, 0, 0))',
            'b = Vector((0, 1, 0))',
            'c = Cross(a, b)',
            'Length(c)',
          ],
        },
      },
      {
        title: 'Plan i rommet',
        content: (
          <div className="space-y-4">
            <p>
              Et plan kan beskrives på flere måter. Den vanligste er normalform:
            </p>
            <BlockMath>{"\\vec{n} \\cdot (\\vec{r} - \\vec{r}_0) = 0"}</BlockMath>
            <p className="text-center text-sm">eller</p>
            <BlockMath>{"ax + by + cz = d"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Normalvektor:</h4>
              <p className="text-sm">
                Vektoren n = (a, b, c) står vinkelrett på planet.
                Hvis du kjenner to vektorer i planet, finn normalvektoren
                som kryssproduktet deres.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn planet gjennom P(1, 2, 3) med normalvektor n = (2, -1, 1):
              </p>
              <BlockMath>{"2(x-1) - 1(y-2) + 1(z-3) = 0"}</BlockMath>
              <BlockMath>{"2x - y + z = 3"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Plan i rommet',
          description: 'Lag plan med normalvektor.',
          appName: '3d',
          initialCommands: [
            'P = (1, 2, 3)',
            'n = Vector((2, -1, 1))',
            'alpha = Plane(P, n)',
          ],
        },
      },
      {
        title: 'Linje i rommet',
        content: (
          <div className="space-y-4">
            <p>
              En linje i rommet kan beskrives parametrisk:
            </p>
            <BlockMath>{"\\vec{r}(t) = \\vec{r}_0 + t\\vec{v}"}</BlockMath>
            <p className="text-center text-sm">eller komponentvis:</p>
            <BlockMath>{"\\begin{cases} x = x_0 + tv_x \\\\ y = y_0 + tv_y \\\\ z = z_0 + tv_z \\end{cases}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Tolkning:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>r₀ = startpunkt på linjen</li>
                <li>v = retningsvektor (parallell med linjen)</li>
                <li>t = parameter (ethvert reelt tall)</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Linje gjennom to punkter:</h4>
              <p className="text-sm">
                Hvis P₁ og P₂ er punkter på linjen, bruk:
              </p>
              <BlockMath>{"\\vec{r}(t) = \\vec{P}_1 + t(\\vec{P}_2 - \\vec{P}_1)"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Linje i rommet',
          description: 'Lag linjer med retningsvektor.',
          appName: '3d',
          initialCommands: [
            'P = (1, 2, 3)',
            'v = Vector((2, 1, -1))',
            'l = Line(P, v)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn lengden av v = (3, -4, 12)',
        'Beregn (1,2,3) × (4,5,6)',
        'Finn planets ligning gjennom (1,0,0) med normalvektor (1,1,1)',
        'Skriv linjen gjennom (2,1,3) parallell med (1,-1,2)',
        'Sjekk om (1,0,1) og (0,1,1) er ortogonale',
      ],
    },
    summary: [
      'Vektor i rommet: (x, y, z) med lengde √(x² + y² + z²)',
      'Prikkprodukt: a·b = |a||b|cos(θ)',
      'Kryssprodukt: a × b ⊥ a og a × b ⊥ b',
      'Plan: ax + by + cz = d med normalvektor (a,b,c)',
      'Linje: r(t) = r₀ + tv med retningsvektor v',
    ],
    commands: [
      { command: 'Vektor((x, y, z))', description: 'Lag 3D-vektor', example: 'Vektor((1, 2, 3))' },
      { command: 'Lengde(v)', description: 'Finn lengde', example: 'Lengde(Vektor((3, 4, 0)))' },
      { command: 'Kryss(a, b)', description: 'Kryssprodukt', example: 'Kryss((1,0,0), (0,1,0))' },
      { command: 'Plan(P, n)', description: 'Plan gjennom P med normalvektor n', example: 'Plan((0,0,0), (1,1,1))' },
    ],
  },

  'r2-romgeometri': {
    introduction: (
      <p className="text-lg">
        Romgeometri handler om punkter, linjer og plan i tre dimensjoner.
        Vi studerer avstand, vinkler og skjæringer mellom disse objektene.
      </p>
    ),
    sections: [
      {
        title: 'Planets likning',
        content: (
          <div className="space-y-4">
            <p>
              Et plan i rommet kan beskrives på flere ekvivalente måter:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Normalform:</h4>
              <BlockMath>{"ax + by + cz = d"}</BlockMath>
              <p className="text-sm mt-2">
                der (a, b, c) er normalvektoren til planet
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Plan() i GeoGebra:</h4>
              <code className="text-blue-600 block">Plan(punkt, normalvektor)</code>
              <code className="text-blue-600 block mt-1">Plan(tre punkter)</code>
              <code className="text-blue-600 block mt-1">Plan(ax + by + cz = d)</code>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Plan gjennom tre punkter:</h4>
              <p className="text-sm">
                Gitt P₁, P₂, P₃: Finn to vektorer i planet og bruk kryssprodukt
                for å finne normalvektoren.
              </p>
              <BlockMath>{"\\vec{n} = (\\vec{P_2} - \\vec{P_1}) \\times (\\vec{P_3} - \\vec{P_1})"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Planets likning',
          description: 'Lag plan på ulike måter.',
          appName: '3d',
          initialCommands: [
            'P1 = (1, 0, 0)',
            'P2 = (0, 1, 0)',
            'P3 = (0, 0, 1)',
            'alpha = Plane(P1, P2, P3)',
          ],
        },
      },
      {
        title: 'Avstand punkt til plan',
        content: (
          <div className="space-y-4">
            <p>
              Avstanden fra et punkt P₀(x₀, y₀, z₀) til planet ax + by + cz = d er:
            </p>
            <BlockMath>{"d = \\frac{|ax_0 + by_0 + cz_0 - d|}{\\sqrt{a^2 + b^2 + c^2}}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Distance() i GeoGebra:</h4>
              <code className="text-blue-600">Avstand(punkt, plan)</code>
              <p className="text-sm mt-2">
                Beregner korteste avstand automatisk
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn avstanden fra P(2, 3, 1) til planet x + y + z = 6:
              </p>
              <BlockMath>{"d = \\frac{|2 + 3 + 1 - 6|}{\\sqrt{1^2 + 1^2 + 1^2}} = \\frac{0}{\\sqrt{3}} = 0"}</BlockMath>
              <p className="text-sm mt-2">
                Punktet ligger i planet!
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Avstand punkt til linje:</h4>
              <p className="text-sm">
                Bruk også Distance(punkt, linje) for linjeavstand.
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Avstand punkt-plan',
          description: 'Beregn avstander i rommet.',
          appName: '3d',
          initialCommands: [
            'alpha = Plane(x + y + z = 6)',
            'P = (2, 3, 1)',
            'Q = (5, 5, 5)',
            'Distance(P, alpha)',
            'Distance(Q, alpha)',
          ],
        },
      },
      {
        title: 'Vinkel mellom plan',
        content: (
          <div className="space-y-4">
            <p>
              Vinkelen mellom to plan er vinkelen mellom deres normalvektorer:
            </p>
            <BlockMath>{"\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Parallelle plan:</h4>
              <p className="text-sm">
                To plan er parallelle hvis normalvektorene er parallelle:
                n₁ = k·n₂ for en konstant k
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Ortogonale plan:</h4>
              <p className="text-sm">
                To plan er ortogonale (vinkelrette) hvis n₁ · n₂ = 0
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn vinkelen mellom x + 2y + 2z = 5 og 2x - y + 2z = 3:
              </p>
              <BlockMath>{"\\vec{n}_1 = (1, 2, 2), \\quad \\vec{n}_2 = (2, -1, 2)"}</BlockMath>
              <BlockMath>{"\\cos\\theta = \\frac{|1\\cdot2 + 2\\cdot(-1) + 2\\cdot2|}{\\sqrt{9}\\sqrt{9}} = \\frac{4}{9}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Vinkel mellom plan',
          description: 'Finn vinkler mellom plan.',
          appName: '3d',
          initialCommands: [
            'alpha = Plane(x + 2y + 2z = 5)',
            'beta = Plane(2x - y + 2z = 3)',
            'Angle(alpha, beta)',
          ],
        },
      },
      {
        title: 'Skjæring av plan og linjer',
        content: (
          <div className="space-y-4">
            <p>
              Skjæringen mellom geometriske objekter i rommet gir nye objekter:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">To plan:</h4>
              <p className="text-sm">
                Skjæringen er en linje (hvis ikke parallelle)
              </p>
              <code className="text-blue-600 block mt-2">Skjæring(plan1, plan2)</code>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Linje og plan:</h4>
              <p className="text-sm">
                Skjæringen er et punkt (hvis ikke parallelle)
              </p>
              <code className="text-blue-600 block mt-2">Skjæring(linje, plan)</code>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Analytisk metode:</h4>
              <p className="text-sm">
                Sett inn linjens parameterfremstilling i planets likning
                og løs for parameteren t.
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Skjæringer',
          description: 'Finn skjæringer mellom objekter.',
          appName: '3d',
          initialCommands: [
            'alpha = Plane(x + y + z = 3)',
            'beta = Plane(x - y + 2z = 1)',
            'l = Intersect(alpha, beta)',
            'P = (0, 0, 0)',
            'v = (1, 1, 1)',
            'g = Line(P, v)',
            'S = Intersect(g, alpha)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn planets ligning gjennom (1,2,3), (2,1,3), (1,1,4)',
        'Beregn avstanden fra (5,5,5) til x + 2y + 2z = 9',
        'Finn vinkelen mellom x + y + z = 1 og x - y = 0',
        'Er planene 2x + 3y - z = 4 og 4x + 6y - 2z = 1 parallelle?',
        'Finn skjæringspunktet mellom linjen r = (1,0,0) + t(1,1,1) og planet x + y + z = 6',
      ],
    },
    summary: [
      'Plan: ax + by + cz = d med normalvektor (a, b, c)',
      'Avstand punkt-plan: |ax₀ + by₀ + cz₀ - d|/√(a² + b² + c²)',
      'Vinkel mellom plan: cos(θ) = |n₁·n₂|/(|n₁||n₂|)',
      'Parallelle plan: n₁ = k·n₂',
      'Skjæring() finner skjæringer',
    ],
    commands: [
      { command: 'Plan(P, n)', description: 'Plan gjennom P med normalvektor n', example: 'Plan((0,0,0), (1,2,3))' },
      { command: 'Plan(P, Q, R)', description: 'Plan gjennom tre punkter', example: 'Plan((1,0,0), (0,1,0), (0,0,1))' },
      { command: 'Avstand(P, alpha)', description: 'Avstand punkt til plan', example: 'Avstand((1,1,1), Plan(x+y+z=0))' },
      { command: 'Skjæring(obj1, obj2)', description: 'Finn skjæring', example: 'Skjæring(line, plane)' },
    ],
  },

  'r2-rekker': {
    introduction: (
      <p className="text-lg">
        Rekker og følger er grunnleggende i matematikk for å beskrive mønstre,
        summer og grenseverdier. Vi studerer aritmetiske og geometriske følger,
        samt uendelige rekker.
      </p>
    ),
    sections: [
      {
        title: 'Aritmetiske følger',
        content: (
          <div className="space-y-4">
            <p>
              En aritmetisk følge har konstant differanse d mellom ledd:
            </p>
            <BlockMath>{"a_n = a_1 + (n-1)d"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Egenskaper:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>a₁ = første ledd</li>
                <li>d = differanse = aₙ₊₁ - aₙ</li>
                <li>Lineær vekst</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Følgen 3, 7, 11, 15, ... har a₁ = 3 og d = 4:
              </p>
              <BlockMath>{"a_n = 3 + (n-1) \\cdot 4 = 4n - 1"}</BlockMath>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Sum av n første ledd:</h4>
              <BlockMath>{"S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n(2a_1 + (n-1)d)}{2}"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Aritmetiske følger',
          description: 'Utforsk aritmetiske følger.',
          appName: 'cas',
          initialCommands: [
            'a1 = 3',
            'd = 4',
            'a(n) = a1 + (n-1)*d',
            'Sequence(a(n), n, 1, 10)',
          ],
        },
      },
      {
        title: 'Geometriske følger',
        content: (
          <div className="space-y-4">
            <p>
              En geometrisk følge har konstant kvotient k mellom ledd:
            </p>
            <BlockMath>{"a_n = a_1 \\cdot k^{n-1}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Egenskaper:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>a₁ = første ledd</li>
                <li>k = kvotient = aₙ₊₁/aₙ</li>
                <li>Eksponentiell vekst/avtagning</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Følgen 2, 6, 18, 54, ... har a₁ = 2 og k = 3:
              </p>
              <BlockMath>{"a_n = 2 \\cdot 3^{n-1}"}</BlockMath>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Sum av n første ledd:</h4>
              <BlockMath>{"S_n = a_1 \\cdot \\frac{k^n - 1}{k - 1} \\quad (k \\neq 1)"}</BlockMath>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Geometriske følger',
          description: 'Utforsk geometriske følger.',
          appName: 'cas',
          initialCommands: [
            'a1 = 2',
            'k = 3',
            'a(n) = a1 * k^(n-1)',
            'Sequence(a(n), n, 1, 10)',
          ],
        },
      },
      {
        title: 'Rekkesum med Sum()',
        content: (
          <div className="space-y-4">
            <p>
              En rekke er summen av leddene i en følge. GeoGebra kan beregne
              både endelige og uendelige summer:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Sum() syntaks:</h4>
              <code className="text-blue-600 block">Sum(&lt;uttrykk&gt;, &lt;variabel&gt;, &lt;start&gt;, &lt;slutt&gt;)</code>
              <p className="text-sm mt-2">
                Beregner summen fra start til slutt.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel - Aritmetisk sum:</h4>
              <p className="text-sm">
                Finn summen 1 + 2 + 3 + ... + 100:
              </p>
              <code className="text-blue-600 block mt-2">Sum(n, n, 1, 100)</code>
              <p className="text-sm mt-2">
                Resultat: 5050
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel - Geometrisk sum:</h4>
              <p className="text-sm">
                Finn summen 1 + 1/2 + 1/4 + 1/8 + ... (10 ledd):
              </p>
              <code className="text-blue-600 block mt-2">Sum((1/2)^(n-1), n, 1, 10)</code>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Sum() kommando',
          description: 'Beregn summer med Sum().',
          appName: 'cas',
          initialCommands: [
            'Sum(n, n, 1, 100)',
            'Sum(n^2, n, 1, 10)',
            'Sum((1/2)^n, n, 0, 10)',
          ],
        },
      },
      {
        title: 'Uendelige rekker',
        content: (
          <div className="space-y-4">
            <p>
              En uendelig rekke er summen av uendelig mange ledd:
            </p>
            <BlockMath>{"\\sum_{n=1}^{\\infty} a_n = a_1 + a_2 + a_3 + \\cdots"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Konvergens:</h4>
              <p className="text-sm">
                En rekke konvergerer hvis summen nærmer seg en endelig verdi.
                For geometrisk rekke med |k| &lt; 1:
              </p>
              <BlockMath>{"\\sum_{n=1}^{\\infty} a_1 \\cdot k^{n-1} = \\frac{a_1}{1-k}"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel - Konvergent rekke:</h4>
              <p className="text-sm">
                Finn summen 1 + 1/2 + 1/4 + 1/8 + ...:
              </p>
              <BlockMath>{"\\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n = \\frac{1}{1-\\frac{1}{2}} = 2"}</BlockMath>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Divergens:</h4>
              <p className="text-sm">
                Hvis |k| ≥ 1 divergerer rekken (summen blir uendelig eller eksisterer ikke).
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Uendelige rekker',
          description: 'Utforsk konvergente rekker.',
          appName: 'cas',
          initialCommands: [
            'Sum((1/2)^n, n, 0, infinity)',
            'Sum(1/n^2, n, 1, infinity)',
            'Limit(Sum((1/2)^k, k, 0, n), n, infinity)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn det 50. leddet i følgen 5, 9, 13, 17, ...',
        'Finn det 8. leddet i følgen 3, 6, 12, 24, ...',
        'Beregn summen 2 + 5 + 8 + 11 + ... + 50',
        'Finn summen av uendelig rekke 1 + 1/3 + 1/9 + 1/27 + ...',
        'Bruk Sum() til å beregne 1² + 2² + 3² + ... + 20²',
      ],
    },
    summary: [
      'Aritmetisk: aₙ = a₁ + (n-1)d',
      'Geometrisk: aₙ = a₁·kⁿ⁻¹',
      'Sum() beregner endelige og uendelige summer',
      'Geometrisk rekke konvergerer hvis |k| < 1: sum = a₁/(1-k)',
      'Følge() lager følger i GeoGebra',
    ],
    commands: [
      { command: 'Sum(expr, var, a, b)', description: 'Sum fra a til b', example: 'Sum(n, n, 1, 100)' },
      { command: 'Sum(expr, var, a, infinity)', description: 'Uendelig sum', example: 'Sum((1/2)^n, n, 0, infinity)' },
      { command: 'Følge(expr, var, a, b)', description: 'Lag følge', example: 'Følge(2n+1, n, 1, 10)' },
      { command: 'Grense(Sum(...), n, infinity)', description: 'Grenseverdi av sum', example: 'Grense(Sum(1/2^k, k, 0, n), n, infinity)' },
    ],
  },

  'r2-funksjonsanalyse': {
    introduction: (
      <p className="text-lg">
        Avansert funksjonsanalyse utvider verktøykassen med grenseverdier,
        L&apos;Hôpitals regel og Taylor-rekker for å studere funksjoners
        oppførsel i detalj.
      </p>
    ),
    sections: [
      {
        title: 'Grenseverdier med Grense()',
        content: (
          <div className="space-y-4">
            <p>
              Grenseverdier beskriver funksjoners oppførsel når x nærmer seg en verdi:
            </p>
            <BlockMath>{"\\lim_{x \\to a} f(x) = L"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Grense() i GeoGebra:</h4>
              <code className="text-blue-600 block">Grense(&lt;funksjon&gt;, &lt;verdi&gt;)</code>
              <p className="text-sm mt-2">
                Beregner grenseverdien når x går mot verdien.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn lim(x→0) sin(x)/x:
              </p>
              <code className="text-blue-600 block mt-2">Grense(sin(x)/x, x, 0)</code>
              <p className="text-sm mt-2">
                Resultat: 1 (viktig grenseverdi!)
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Ensidig grenseverdi:</h4>
              <code className="text-blue-600 block">Grense(f, a⁺)</code>
              <span className="text-sm"> - fra høyre</span>
              <code className="text-blue-600 block mt-1">Grense(f, a⁻)</code>
              <span className="text-sm"> - fra venstre</span>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Grenseverdier',
          description: 'Beregn grenseverdier med Grense().',
          appName: 'cas',
          initialCommands: [
            'Limit(sin(x)/x, x, 0)',
            'Limit((x^2 - 1)/(x - 1), x, 1)',
            'Limit(e^x, x, infinity)',
          ],
        },
      },
      {
        title: 'L\'Hôpitals regel',
        content: (
          <div className="space-y-4">
            <p>
              Når en grenseverdi gir ubestemt form 0/0 eller ∞/∞, kan vi bruke
              L&apos;Hôpitals regel:
            </p>
            <BlockMath>{"\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Fremgangsmåte:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Sjekk at grenseverdien gir 0/0 eller ∞/∞</li>
                <li>Deriver teller og nevner hver for seg</li>
                <li>Beregn grenseverdien av den nye brøken</li>
                <li>Gjenta om nødvendig</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel:</h4>
              <p className="text-sm">
                Finn lim(x→0) (eˣ - 1)/x:
              </p>
              <div className="text-sm mt-2">
                <p>Form: 0/0 ✓ Bruk L&apos;Hôpital:</p>
                <BlockMath>{"\\lim_{x \\to 0} \\frac{e^x - 1}{x} = \\lim_{x \\to 0} \\frac{e^x}{1} = 1"}</BlockMath>
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Andre ubestemte former:</h4>
              <p className="text-sm">
                0·∞, ∞ - ∞, 0⁰, 1^∞, ∞⁰ kan omskrives til 0/0 eller ∞/∞
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'L\'Hôpitals regel',
          description: 'Løs ubestemte former.',
          appName: 'cas',
          initialCommands: [
            'f(x) = (e^x - 1)/x',
            'Limit(f(x), x, 0)',
            'Limit(ln(x)/x, x, infinity)',
          ],
        },
      },
      {
        title: 'Taylor-rekker',
        content: (
          <div className="space-y-4">
            <p>
              Taylor-rekker tilnærmer en funksjon som en uendelig sum av polynomer:
            </p>
            <BlockMath>{"f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n"}</BlockMath>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Maclaurin-rekke (a = 0):</h4>
              <BlockMath>{"f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\cdots"}</BlockMath>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Viktige Taylor-rekker:</h4>
              <div className="text-sm space-y-2">
                <BlockMath>{"e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots"}</BlockMath>
                <BlockMath>{"\\sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots"}</BlockMath>
                <BlockMath>{"\\cos(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots"}</BlockMath>
              </div>
            </div>
          </div>
        ),
        geogebra: {
          title: 'Taylor-rekker',
          description: 'Tilnærm funksjoner med polynomer.',
          appName: 'cas',
          initialCommands: [
            'f(x) = sin(x)',
            'TaylorPolynomial(f, 0, 5)',
            'TaylorPolynomial(e^x, 0, 10)',
          ],
        },
      },
      {
        title: 'TaylorPolynomial() i GeoGebra',
        content: (
          <div className="space-y-4">
            <p>
              TaylorPolynomial() beregner Taylor-polynomet av en gitt grad:
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Syntaks:</h4>
              <code className="text-blue-600 block">TaylorPolynomial(&lt;funksjon&gt;, &lt;a&gt;, &lt;grad&gt;)</code>
              <p className="text-sm mt-2">
                Gir Taylor-polynomet av angitt grad rundt punktet x = a.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Eksempel - Tilnærm sin(x):</h4>
              <code className="text-blue-600 block">TaylorPolynomial(sin(x), 0, 5)</code>
              <p className="text-sm mt-2">
                Resultat: x - x³/6 + x⁵/120
              </p>
              <p className="text-sm mt-1">
                Dette gir en god tilnærming nær x = 0.
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold mb-2">Visualisering:</h4>
              <p className="text-sm">
                Plot funksjonen og Taylor-polynomet sammen for å se
                hvor god tilnærmingen er.
              </p>
            </div>
          </div>
        ),
        geogebra: {
          title: 'TaylorPolynomial()',
          description: 'Utforsk Taylor-polynomer.',
          appName: 'cas',
          initialCommands: [
            'f(x) = cos(x)',
            't2 = TaylorPolynomial(f, 0, 2)',
            't4 = TaylorPolynomial(f, 0, 4)',
            't6 = TaylorPolynomial(f, 0, 6)',
          ],
        },
      },
    ],
    exercises: {
      title: 'Øv selv',
      tasks: [
        'Finn lim(x→0) (1 - cos(x))/x² med L\'Hôpital',
        'Beregn lim(x→∞) x·ln(1 + 1/x)',
        'Finn Taylor-polynomet av grad 4 for ln(1+x) rundt x=0',
        'Bruk Taylor-rekke til å tilnærme e^(0.1)',
        'Finn lim(x→0⁺) x·ln(x)',
      ],
    },
    summary: [
      'Grense(f, x, a) beregner grenseverdier',
      'L\'Hôpital: Deriver teller og nevner ved 0/0 eller ∞/∞',
      'Taylor-rekke: f(x) = Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ',
      'TaylorPolynomial(f, a, n) gir n-te grads tilnærming',
      'Maclaurin-rekke: Taylor-rekke rundt x = 0',
    ],
    commands: [
      { command: 'Grense(f, x, a)', description: 'Grenseverdi når x→a', example: 'Grense(sin(x)/x, x, 0)' },
      { command: 'Grense(f, x, infinity)', description: 'Grenseverdi når x→∞', example: 'Grense(1/x, x, infinity)' },
      { command: 'TaylorPolynomial(f, a, n)', description: 'Taylor-polynom grad n rundt a', example: 'TaylorPolynomial(sin(x), 0, 5)' },
      { command: 'Derivert(f, n)', description: 'n-te deriverte', example: 'Derivert(sin(x), 3)' },
    ],
  },

  // S1 - Remaining chapters continue with s1-optimering, s1-regresjon, s1-okonomi, s1-sannsynlighet
  // (Content too long for single response - will add in follow-up)
};
