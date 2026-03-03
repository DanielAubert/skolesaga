/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 5
 *
 * Kapittel 4.1: Vinkler og trekanter
 * Kapittel 4.2: Areal og omkrets
 * Kapittel 4.3: Pytagoras' setning
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1 NARRATIV: Vinkler og trekanter
// ============================================================================

export const CHAPTER_8_4_1_NARRATIV: TextbookChapter = {
  id: '8-4-1-narrativ',
  courseId: '8',
  chapterNumber: '4.1',
  title: 'Vinkler og trekanter',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av vinkler og trekanter -- vinkeltyper, vinkelmåling, vinkelsummen i trekanter og ulike trekanttyper forklart med eksempler fra arkitektur og natur.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei',
  ],
  linkedChapterId: '8-4-1',
  content: [
    {
      id: '8-4-1-n-intro',
      type: 'text',
      content: `## Vinkler er overalt

Se deg rundt i rommet. Hjørnene på bordet, skråningen på taket, viften som snurrer i taket -- alle disse inneholder **vinkler**. En vinkel oppstår der to linjer eller stråler møtes, og størrelsen på vinkelen beskriver hvor mye de «åpner seg» fra hverandre.

Vinkler er selve grunnsteinen i geometrien. Arkitekter bruker dem for å designe bygninger, billedkunstnere for å skape perspektiv, og ingeniører for å beregne krefter. Selv naturen er full av vinkler -- tenk på hvordan en snøkrystall alltid har $60°$-vinkler, eller hvordan bier bygger sekskantede voksceller med perfekte $120°$-vinkler.

I dette kapittelet skal vi lære hva vinkler er, hvordan vi måler dem, og hvordan de oppfører seg i trekanter.`,
    },

    {
      id: '8-4-1-n-section1',
      type: 'text',
      content: `## Hva er en vinkel?

En **vinkel** dannes av to **stråler** (halve linjer) som har samme startpunkt. Startpunktet kalles **toppunktet**, og strålene kalles **vinkelbeina**.

Vi måler vinkler i **grader** (symbolet $°$). En hel omdreining er $360°$, en halv omdreining er $180°$, og en kvart omdreining er $90°$.

Vinkler deles inn i typer etter størrelsen:

| Vinkeltype | Størrelse | Beskrivelse |
|------------|-----------|-------------|
| **Spiss vinkel** | $0° < v < 90°$ | Mindre enn en rett vinkel |
| **Rett vinkel** | $v = 90°$ | Nøyaktig en kvart omdreining |
| **Stump vinkel** | $90° < v < 180°$ | Større enn rett, men mindre enn rett linje |
| **Rett linje** | $v = 180°$ | Nøyaktig en halv omdreining |
| **Refleks vinkel** | $180° < v < 360°$ | Større enn en rett linje |

En **rett vinkel** markeres med et lite kvadrat i hjørnet. Den er spesielt viktig fordi den betyr at linjene er **vinkelrette** på hverandre -- tenk på hjørnene i et vanlig ark, en dør eller en vegg.

For å måle vinkler bruker vi en **gradskive** (transportør). Du plasserer sentrum på toppunktet, lar nullstreken ligge langs det ene vinkelbeinet, og leser av grader der det andre vinkelbeinet krysser skalaen.`,
    },

    {
      id: '8-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på vinkeltyper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-4-1-n-quiz1-q0',
            task: 'En vinkel er $135°$. Hva slags vinkel er det?',
            options: [
              { id: 'a', text: 'Spiss vinkel', isCorrect: false },
              { id: 'b', text: 'Rett vinkel', isCorrect: false },
              { id: 'c', text: 'Stump vinkel', isCorrect: true },
              { id: 'd', text: 'Refleks vinkel', isCorrect: false },
            ],
            solution: '$135°$ er mellom $90°$ og $180°$, altså er det en stump vinkel.',
          },
          {
            id: '8-4-1-n-quiz1-q1',
            task: 'Hva er en rett vinkel?',
            options: [
              { id: 'a', text: 'En vinkel på $180°$', isCorrect: false },
              { id: 'b', text: 'En vinkel på $90°$', isCorrect: true },
              { id: 'c', text: 'En vinkel på $45°$', isCorrect: false },
              { id: 'd', text: 'En vinkel på $360°$', isCorrect: false },
            ],
            solution: 'En rett vinkel er nøyaktig $90°$ -- en kvart omdreining. Den markeres med et lite kvadrat.',
          },
          {
            id: '8-4-1-n-quiz1-q2',
            task: 'Hvilken vinkeltype har en vinkel på $250°$?',
            options: [
              { id: 'a', text: 'Stump vinkel', isCorrect: false },
              { id: 'b', text: 'Rett linje', isCorrect: false },
              { id: 'c', text: 'Spiss vinkel', isCorrect: false },
              { id: 'd', text: 'Refleks vinkel', isCorrect: true },
            ],
            solution: '$250°$ er mellom $180°$ og $360°$, så det er en refleks vinkel -- den er større enn en rett linje.',
          },
        ],
      },
    },

    {
      id: '8-4-1-n-section2',
      type: 'text',
      content: `## Viktige vinkelpar

Noen vinkler har spesielle forhold til hverandre:

### Supplementvinkler
To vinkler er **supplementvinkler** (eller **supplerende vinkler**) når de til sammen er $180°$. Tenk på en rett linje der en stråle deler den i to vinkler -- de to vinklene vil alltid summere til $180°$.

Hvis den ene vinkelen er $110°$, er supplementvinkelen $180° - 110° = 70°$.

### Komplementvinkler
To vinkler er **komplementvinkler** (eller **komplementære vinkler**) når de til sammen er $90°$. Tenk på en rett vinkel delt i to -- de to delene er komplementvinkler.

Hvis den ene vinkelen er $35°$, er komplementvinkelen $90° - 35° = 55°$.

### Toppvinkler
Når to rette linjer krysser hverandre, dannes fire vinkler. De vinklene som ligger **mot hverandre** (ikke ved siden av hverandre) kalles **toppvinkler**, og de er alltid like store.

Hvis en av vinklene er $60°$, er toppvinkelen også $60°$. De to andre vinklene er begge $120°$ (supplementvinkler til $60°$).`,
    },

    {
      id: '8-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på vinkelpar:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-4-1-n-quiz2-q0',
            task: 'En vinkel er $72°$. Hva er supplementvinkelen?',
            options: [
              { id: 'a', text: '$18°$', isCorrect: false },
              { id: 'b', text: '$108°$', isCorrect: true },
              { id: 'c', text: '$288°$', isCorrect: false },
              { id: 'd', text: '$72°$', isCorrect: false },
            ],
            solution: 'Supplementvinkler summerer til $180°$. Supplementvinkelen er $180° - 72° = 108°$.',
          },
          {
            id: '8-4-1-n-quiz2-q1',
            task: 'En vinkel er $53°$. Hva er komplementvinkelen?',
            options: [
              { id: 'a', text: '$127°$', isCorrect: false },
              { id: 'b', text: '$53°$', isCorrect: false },
              { id: 'c', text: '$37°$', isCorrect: true },
              { id: 'd', text: '$307°$', isCorrect: false },
            ],
            solution: 'Komplementvinkler summerer til $90°$. Komplementvinkelen er $90° - 53° = 37°$.',
          },
          {
            id: '8-4-1-n-quiz2-q2',
            task: 'To linjer krysser hverandre. En av vinklene er $45°$. Hvor stor er toppvinkelen?',
            options: [
              { id: 'a', text: '$135°$', isCorrect: false },
              { id: 'b', text: '$90°$', isCorrect: false },
              { id: 'c', text: '$45°$', isCorrect: true },
              { id: 'd', text: '$315°$', isCorrect: false },
            ],
            solution: 'Toppvinkler er alltid like store. Toppvinkelen til $45°$ er $45°$.',
          },
        ],
      },
    },

    {
      id: '8-4-1-n-section3',
      type: 'text',
      content: `## Vinkelsummen i trekanter

En **trekant** er den enkleste flaten vi kan lage med rette linjer -- tre sider og tre vinkler. Og her kommer en av geometriens viktigste regler:

> **Vinkelsummen i en trekant er alltid $180°$.**

Det betyr at hvis du legger sammen alle tre vinklene i en hvilken som helst trekant, får du alltid $180°$. Alltid! Uansett form eller størrelse.

Hvis du vet to av vinklene, kan du finne den tredje:

$$v_3 = 180° - v_1 - v_2$$

For eksempel: Hvis en trekant har vinkler på $50°$ og $70°$, er den tredje vinkelen $180° - 50° - 70° = 60°$.

Du kan faktisk teste dette selv. Tegn en trekant, klipp ut de tre hjørnene, og legg dem ved siden av hverandre. De vil danne en rett linje -- altså $180°$!

### Trekanttyper etter vinkler

| Type | Egenskap |
|------|----------|
| **Spissvinket trekant** | Alle vinkler er under $90°$ |
| **Rettvinklet trekant** | Nøyaktig en vinkel er $90°$ |
| **Stumpvinket trekant** | Nøyaktig en vinkel er over $90°$ |

### Trekanttyper etter sider

| Type | Egenskap |
|------|----------|
| **Likesidet trekant** | Alle tre sider er like lange (alle vinkler er $60°$) |
| **Likebeint trekant** | To sider er like lange (to vinkler er like store) |
| **Ulikesidet trekant** | Alle sider er forskjellige |

I en **likesidet trekant** er alle tre vinklene $60°$ fordi $\\frac{180°}{3} = 60°$. I en **likebeint trekant** er de to vinklene ved grunnlinjen like store -- kalles **grunnvinkler**.`,
    },

    {
      id: '8-4-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-4-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på trekanter og vinkelsum:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-4-1-n-quiz3-q0',
            task: 'En trekant har vinkler på $40°$ og $85°$. Hvor stor er den tredje vinkelen?',
            options: [
              { id: 'a', text: '$65°$', isCorrect: false },
              { id: 'b', text: '$55°$', isCorrect: true },
              { id: 'c', text: '$125°$', isCorrect: false },
              { id: 'd', text: '$45°$', isCorrect: false },
            ],
            solution: 'Vinkelsummen i en trekant er $180°$. Den tredje vinkelen er $180° - 40° - 85° = 55°$.',
          },
          {
            id: '8-4-1-n-quiz3-q1',
            task: 'Hva slags trekant har en vinkel på $120°$?',
            options: [
              { id: 'a', text: 'Spissvinket trekant', isCorrect: false },
              { id: 'b', text: 'Rettvinklet trekant', isCorrect: false },
              { id: 'c', text: 'Stumpvinket trekant', isCorrect: true },
              { id: 'd', text: 'Likesidet trekant', isCorrect: false },
            ],
            solution: '$120°$ er større enn $90°$, altså er det en stumpvinket trekant. De to andre vinklene må til sammen være $180° - 120° = 60°$.',
          },
          {
            id: '8-4-1-n-quiz3-q2',
            task: 'En likebeint trekant har en toppvinkel på $80°$. Hvor store er grunnvinklene?',
            options: [
              { id: 'a', text: '$40°$ hver', isCorrect: false },
              { id: 'b', text: '$50°$ hver', isCorrect: true },
              { id: 'c', text: '$80°$ hver', isCorrect: false },
              { id: 'd', text: '$100°$ hver', isCorrect: false },
            ],
            solution: 'Grunnvinklene er like store. $180° - 80° = 100°$, og $\\frac{100°}{2} = 50°$. Hver grunnvinkel er $50°$.',
          },
        ],
      },
    },

    {
      id: '8-4-1-n-section4',
      type: 'text',
      content: `## Vinkler ved parallelle linjer

Når en rett linje (en **transversal**) krysser to **parallelle linjer**, dannes åtte vinkler med spesielle egenskaper:

- **Samsvarende vinkler** (F-vinkler): Vinkler som ligger på samme side av transversalen og i samme posisjon ved hvert krysspunkt. De er **like store**.
- **Toppvinkler**: Vinkler som ligger mot hverandre i samme krysspunkt. De er **like store**.
- **Supplementvinkler**: Nabovinkler i samme krysspunkt summerer alltid til $180°$.

Disse egenskapene er utrolig nyttige for å finne ukjente vinkler. Hvis du vet at to linjer er parallelle og kjenner en vinkel, kan du finne alle de andre syv vinklene!

For eksempel: Hvis en transversal krysser to parallelle linjer og en av vinklene er $65°$, vet vi at samsvarende vinkler er $65°$, toppvinkler er $65°$, og supplementvinklene er $180° - 65° = 115°$.`,
    },

    {
      id: '8-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Vinkeltyper**: Spiss ($< 90°$), rett ($= 90°$), stump ($90°$--$180°$), rett linje ($= 180°$) og refleks ($180°$--$360°$).

**Vinkelpar**:
- Supplementvinkler: summer til $180°$
- Komplementvinkler: summer til $90°$
- Toppvinkler: like store (der to linjer krysser)

**Vinkelsummen i en trekant er alltid $180°$.**

**Trekanttyper etter vinkler**: spissvinket (alle $< 90°$), rettvinklet (en $= 90°$), stumpvinket (en $> 90°$).

**Trekanttyper etter sider**: likesidet (alle sider like, alle vinkler $= 60°$), likebeint (to sider like, to vinkler like), ulikesidet (alle sider forskjellige).

Ved **parallelle linjer** gir samsvarende vinkler (F-vinkler) like store vinkler, og nabovinkler summerer til $180°$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2 NARRATIV: Areal og omkrets
// ============================================================================

export const CHAPTER_8_4_2_NARRATIV: TextbookChapter = {
  id: '8-4-2-narrativ',
  courseId: '8',
  chapterNumber: '4.2',
  title: 'Areal og omkrets',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av areal og omkrets -- formler for rektangel, trekant, parallellogram, trapes og sirkel, med praktiske eksempler fra hverdagen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum',
  ],
  linkedChapterId: '8-4-2',
  content: [
    {
      id: '8-4-2-n-intro',
      type: 'text',
      content: `## Hvor mye maling trenger du?

Tenk deg at du skal male rommet ditt. For å vite hvor mye maling du trenger, må du finne **arealet** av veggene. Eller kanskje du skal sette opp et gjerde rundt hagen -- da trenger du **omkretsen**. Eller du skal legge nytt gulv, bestille teppe, eller så gress på en plen.

**Omkrets** er lengden rundt en figur -- summen av alle sidene. **Areal** er størrelsen på flaten inni figuren -- hvor mye plass den dekker.

Omkrets måles i lengdeenheter (cm, m, km), mens areal måles i **kvadratenheter** ($\\text{cm}^2$, $\\text{m}^2$, $\\text{km}^2$). $1\\,\\text{m}^2$ er arealet av et kvadrat med sider på $1$ m -- omtrent plassen en liten stol opptar.

La oss se på formlene for de vanligste figurene.`,
    },

    {
      id: '8-4-2-n-section1',
      type: 'text',
      content: `## Rektangel og kvadrat

Et **rektangel** har fire rette vinkler og to par med like lange sider. Vi kaller lengden $l$ og bredden $b$.

$$\\text{Omkrets} = 2l + 2b = 2(l + b)$$

$$\\text{Areal} = l \\cdot b$$

Et **kvadrat** er et spesialtilfelle der alle fire sider er like lange ($s$):

$$\\text{Omkrets} = 4s$$

$$\\text{Areal} = s^2$$

**Eksempel**: Et rom er $5$ m langt og $4$ m bredt.
- Omkrets: $2(5 + 4) = 2 \\cdot 9 = 18$ m (dette er lengden langs gulvlistene)
- Areal: $5 \\cdot 4 = 20\\,\\text{m}^2$ (dette er gulvflaten)

Hvorfor fungerer arealformelen? Tenk deg at du dekker gulvet med fliser som er $1\\,\\text{m} \\times 1\\,\\text{m}$. Du får $5$ fliser i lengden og $4$ rader, altså $5 \\cdot 4 = 20$ fliser. Hver flis er $1\\,\\text{m}^2$, så arealet er $20\\,\\text{m}^2$.`,
    },

    {
      id: '8-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på rektangel og kvadrat:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-4-2-n-quiz1-q0',
            task: 'Et rektangel har lengde $8$ cm og bredde $3$ cm. Hva er arealet?',
            options: [
              { id: 'a', text: '$22\\,\\text{cm}^2$', isCorrect: false },
              { id: 'b', text: '$11\\,\\text{cm}^2$', isCorrect: false },
              { id: 'c', text: '$24\\,\\text{cm}^2$', isCorrect: true },
              { id: 'd', text: '$48\\,\\text{cm}^2$', isCorrect: false },
            ],
            solution: 'Areal $= l \\cdot b = 8 \\cdot 3 = 24\\,\\text{cm}^2$.',
          },
          {
            id: '8-4-2-n-quiz1-q1',
            task: 'Et kvadrat har omkrets $36$ cm. Hva er sidelengden?',
            options: [
              { id: 'a', text: '$6$ cm', isCorrect: false },
              { id: 'b', text: '$9$ cm', isCorrect: true },
              { id: 'c', text: '$12$ cm', isCorrect: false },
              { id: 'd', text: '$18$ cm', isCorrect: false },
            ],
            solution: 'Omkrets $= 4s$, så $s = \\frac{36}{4} = 9$ cm.',
          },
          {
            id: '8-4-2-n-quiz1-q2',
            task: 'Et rektangulært rom har areal $30\\,\\text{m}^2$ og lengde $6$ m. Hva er bredden?',
            options: [
              { id: 'a', text: '$24$ m', isCorrect: false },
              { id: 'b', text: '$5$ m', isCorrect: true },
              { id: 'c', text: '$36$ m', isCorrect: false },
              { id: 'd', text: '$180$ m', isCorrect: false },
            ],
            solution: '$A = l \\cdot b$, så $b = \\frac{A}{l} = \\frac{30}{6} = 5$ m.',
          },
        ],
      },
    },

    {
      id: '8-4-2-n-section2',
      type: 'text',
      content: `## Trekant

Husker du at et rektangel har areal $l \\cdot b$? Hvis du klipper rektangelet diagonalt i to, får du to trekanter. Hver trekant har altså **halvparten** av rektangelets areal.

For en trekant med **grunnlinje** $g$ og **høyde** $h$ (den vinkelrette avstanden fra grunnlinjen til det motsatte hjørnet):

$$\\text{Areal} = \\frac{g \\cdot h}{2}$$

**Viktig**: Høyden er alltid vinkelrett på grunnlinjen! I en rettvinklet trekant er høyden en av katetene, men i andre trekanter kan høyden gå utenom selve trekanten (det skjer i stumpvinklede trekanter).

**Eksempel**: En trekant har grunnlinje $10$ cm og høyde $6$ cm.

$$\\text{Areal} = \\frac{10 \\cdot 6}{2} = \\frac{60}{2} = 30\\,\\text{cm}^2$$

Omkretsen av en trekant er rett og slett summen av de tre sidene:

$$\\text{Omkrets} = a + b + c$$

der $a$, $b$ og $c$ er lengdene av de tre sidene.`,
    },

    {
      id: '8-4-2-n-section3',
      type: 'text',
      content: `## Parallellogram og trapes

### Parallellogram

Et **parallellogram** er en firkant der motstående sider er parallelle og like lange. Et rektangel er et spesialtilfelle av et parallellogram (med rette vinkler).

Arealformelen for et parallellogram er overraskende enkel. Tenk deg at du klipper av en trekant på den ene siden og limer den på den andre -- da får du et rektangel! Arealet er:

$$\\text{Areal} = g \\cdot h$$

der $g$ er grunnlinjen og $h$ er den vinkelrette høyden (ikke sidelengden!).

**Eksempel**: Et parallellogram har grunnlinje $12$ cm og høyde $5$ cm.

$$\\text{Areal} = 12 \\cdot 5 = 60\\,\\text{cm}^2$$

### Trapes

Et **trapes** har nøyaktig ett par parallelle sider. De parallelle sidene kalles $a$ (den ene parallelle siden) og $b$ (den andre), og $h$ er den vinkelrette avstanden mellom dem.

Arealformelen finner vi ved å tenke på trapeset som to trekanter (eller legge to like trapeser sammen til et parallellogram):

$$\\text{Areal} = \\frac{(a + b) \\cdot h}{2}$$

**Eksempel**: Et trapes har parallelle sider $8$ cm og $12$ cm, og høyde $4$ cm.

$$\\text{Areal} = \\frac{(8 + 12) \\cdot 4}{2} = \\frac{20 \\cdot 4}{2} = \\frac{80}{2} = 40\\,\\text{cm}^2$$`,
    },

    {
      id: '8-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på trekant, parallellogram og trapes:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-4-2-n-quiz2-q0',
            task: 'En trekant har grunnlinje $14$ cm og høyde $8$ cm. Hva er arealet?',
            options: [
              { id: 'a', text: '$112\\,\\text{cm}^2$', isCorrect: false },
              { id: 'b', text: '$56\\,\\text{cm}^2$', isCorrect: true },
              { id: 'c', text: '$22\\,\\text{cm}^2$', isCorrect: false },
              { id: 'd', text: '$44\\,\\text{cm}^2$', isCorrect: false },
            ],
            solution: 'Areal $= \\frac{g \\cdot h}{2} = \\frac{14 \\cdot 8}{2} = \\frac{112}{2} = 56\\,\\text{cm}^2$.',
          },
          {
            id: '8-4-2-n-quiz2-q1',
            task: 'Et parallellogram har grunnlinje $9$ cm og høyde $7$ cm. Hva er arealet?',
            options: [
              { id: 'a', text: '$32\\,\\text{cm}^2$', isCorrect: false },
              { id: 'b', text: '$63\\,\\text{cm}^2$', isCorrect: true },
              { id: 'c', text: '$31{,}5\\,\\text{cm}^2$', isCorrect: false },
              { id: 'd', text: '$16\\,\\text{cm}^2$', isCorrect: false },
            ],
            solution: 'Arealet av et parallellogram er $g \\cdot h = 9 \\cdot 7 = 63\\,\\text{cm}^2$. Merk: vi bruker høyden, ikke sidelengden!',
          },
          {
            id: '8-4-2-n-quiz2-q2',
            task: 'Et trapes har parallelle sider $6$ cm og $10$ cm, og høyde $5$ cm. Hva er arealet?',
            options: [
              { id: 'a', text: '$30\\,\\text{cm}^2$', isCorrect: false },
              { id: 'b', text: '$50\\,\\text{cm}^2$', isCorrect: false },
              { id: 'c', text: '$40\\,\\text{cm}^2$', isCorrect: true },
              { id: 'd', text: '$80\\,\\text{cm}^2$', isCorrect: false },
            ],
            solution: 'Areal $= \\frac{(a + b) \\cdot h}{2} = \\frac{(6 + 10) \\cdot 5}{2} = \\frac{16 \\cdot 5}{2} = \\frac{80}{2} = 40\\,\\text{cm}^2$.',
          },
        ],
      },
    },

    {
      id: '8-4-2-n-section4',
      type: 'text',
      content: `## Sirkelen

Sirkelen er spesiell fordi den ikke har noen rette linjer. Alle punkter på sirkelen har **lik avstand** til sentrum. Denne avstanden kalles **radius** ($r$). **Diameteren** ($d$) er avstanden tvers over sirkelen gjennom sentrum, altså $d = 2r$.

Formlene for sirkelen bruker det magiske tallet **pi** ($\\pi \\approx 3{,}14$):

$$\\text{Omkrets} = 2\\pi r = \\pi d$$

$$\\text{Areal} = \\pi r^2$$

Hva er $\\pi$? Det er forholdet mellom omkretsen og diameteren til enhver sirkel. Uansett hvor stor eller liten sirkelen er, er $\\frac{\\text{omkrets}}{\\text{diameter}}$ alltid $\\pi$. Det er et irrasjonalt tall med uendelig mange desimaler: $3{,}14159265\\ldots$

**Eksempel**: En sirkulær plen har radius $5$ m.
- Omkrets: $2 \\cdot \\pi \\cdot 5 = 10\\pi \\approx 31{,}4$ m (lengden du trenger gjerde)
- Areal: $\\pi \\cdot 5^2 = 25\\pi \\approx 78{,}5\\,\\text{m}^2$ (gressflaten)

### Halvsirkel og kvartsirkel

Noen ganger møter du deler av sirkelen:
- **Halvsirkel**: Areal $= \\frac{\\pi r^2}{2}$, bue $= \\pi r$ (pluss diameteren for total omkrets)
- **Kvartsirkel**: Areal $= \\frac{\\pi r^2}{4}$, bue $= \\frac{\\pi r}{2}$ (pluss to radier for total omkrets)`,
    },

    {
      id: '8-4-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-4-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på sirkelen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-4-2-n-quiz3-q0',
            task: 'En sirkel har radius $7$ cm. Hva er omkretsen? (Bruk $\\pi \\approx 3{,}14$)',
            options: [
              { id: 'a', text: '$21{,}98$ cm', isCorrect: false },
              { id: 'b', text: '$43{,}96$ cm', isCorrect: true },
              { id: 'c', text: '$153{,}86$ cm', isCorrect: false },
              { id: 'd', text: '$49$ cm', isCorrect: false },
            ],
            solution: 'Omkrets $= 2\\pi r = 2 \\cdot 3{,}14 \\cdot 7 = 43{,}96$ cm.',
          },
          {
            id: '8-4-2-n-quiz3-q1',
            task: 'En pizza har diameter $30$ cm. Hva er arealet? (Bruk $\\pi \\approx 3{,}14$)',
            options: [
              { id: 'a', text: '$94{,}2\\,\\text{cm}^2$', isCorrect: false },
              { id: 'b', text: '$706{,}5\\,\\text{cm}^2$', isCorrect: true },
              { id: 'c', text: '$2826\\,\\text{cm}^2$', isCorrect: false },
              { id: 'd', text: '$225\\,\\text{cm}^2$', isCorrect: false },
            ],
            solution: 'Radius er $\\frac{30}{2} = 15$ cm. Areal $= \\pi r^2 = 3{,}14 \\cdot 15^2 = 3{,}14 \\cdot 225 = 706{,}5\\,\\text{cm}^2$.',
          },
          {
            id: '8-4-2-n-quiz3-q2',
            task: 'Hva er $\\pi$ ($\\text{pi}$)?',
            options: [
              { id: 'a', text: 'Forholdet mellom arealet og radius til en sirkel', isCorrect: false },
              { id: 'b', text: 'Nøyaktig $3{,}14$', isCorrect: false },
              { id: 'c', text: 'Forholdet mellom omkretsen og diameteren til enhver sirkel', isCorrect: true },
              { id: 'd', text: 'Radius til en enhetssirkel', isCorrect: false },
            ],
            solution: '$\\pi = \\frac{\\text{omkrets}}{\\text{diameter}}$ for enhver sirkel. Verdien er ca. $3{,}14159\\ldots$ og har uendelig mange desimaler.',
          },
        ],
      },
    },

    {
      id: '8-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering

| Figur | Omkrets | Areal |
|-------|---------|-------|
| **Rektangel** | $2(l + b)$ | $l \\cdot b$ |
| **Kvadrat** | $4s$ | $s^2$ |
| **Trekant** | $a + b + c$ | $\\frac{g \\cdot h}{2}$ |
| **Parallellogram** | $2(a + b)$ | $g \\cdot h$ |
| **Trapes** | Summen av alle sider | $\\frac{(a + b) \\cdot h}{2}$ |
| **Sirkel** | $2\\pi r$ | $\\pi r^2$ |

Husk:
- **Høyden** er alltid **vinkelrett** på grunnlinjen
- **Areal** måles i kvadratenheter ($\\text{m}^2$, $\\text{cm}^2$)
- **Omkrets** måles i lengdeenheter (m, cm)
- $\\pi \\approx 3{,}14$ er forholdet mellom omkrets og diameter i en sirkel
- Trekantens areal er halvparten av rektangelets ($\\frac{g \\cdot h}{2}$)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3 NARRATIV: Pytagoras' setning
// ============================================================================

export const CHAPTER_8_4_3_NARRATIV: TextbookChapter = {
  id: '8-4-3-narrativ',
  courseId: '8',
  chapterNumber: '4.3',
  title: "Pytagoras' setning",
  subtitle: 'Narrativ versjon',
  description: "En fortellende gjennomgang av Pytagoras' setning -- sammenhengen mellom sidene i en rettvinklet trekant, med praktiske eksempler fra bygging, navigasjon og dagligliv.",
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum',
  ],
  linkedChapterId: '8-4-3',
  content: [
    {
      id: '8-4-3-n-intro',
      type: 'text',
      content: `## Den berømteste formelen i geometrien

For over 2500 år siden oppdaget den greske matematikeren Pytagoras (eller i hvert fall hans tilhengere) en sammenheng som forandret matematikken for alltid. De fant ut at i en rettvinklet trekant finnes det en magisk forbindelse mellom sidene.

Denne sammenhengen -- **Pytagoras' setning** -- er kanskje den mest kjente formelen i hele matematikken. Den brukes fortsatt hver eneste dag: av snekkere som sjekker om vegger er rette, av GPS-systemer som beregner avstander, av spillutviklere som beregner bevegelser, og av astronomer som måler avstander i verdensrommet.

Og det beste? Formelen er overraskende enkel.`,
    },

    {
      id: '8-4-3-n-section1',
      type: 'text',
      content: `## Kateter og hypotenus

Før vi kan forstå Pytagoras' setning, må vi kjenne navnene på sidene i en rettvinklet trekant:

- **Hypotenusen** er den lengste siden -- den som ligger **mot** den rette vinkelen. Den er alltid lengst.
- **Katetene** er de to kortere sidene -- de som **danner** den rette vinkelen.

Vi kaller katetene $a$ og $b$, og hypotenusen $c$.

**Pytagoras' setning** sier:

$$a^2 + b^2 = c^2$$

I ord: Summen av kvadratene av katetene er lik kvadratet av hypotenusen.

Hva betyr dette geometrisk? Tegn et kvadrat på hver side av trekanten. Arealet av kvadratet på den ene kateten ($a^2$) pluss arealet av kvadratet på den andre kateten ($b^2$) er nøyaktig lik arealet av kvadratet på hypotenusen ($c^2$). Fantastisk!

**Eksempel**: En rettvinklet trekant har kateter $a = 3$ cm og $b = 4$ cm.

$$c^2 = a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = 25$$
$$c = \\sqrt{25} = 5 \\text{ cm}$$

Trekanten med sider $3$, $4$ og $5$ er den mest kjente pytagoreiske trekanten. Andre eksempler er $5, 12, 13$ og $8, 15, 17$.`,
    },

    {
      id: '8-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnleggende Pytagoras:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-4-3-n-quiz1-q0',
            task: 'Hvilken side i en rettvinklet trekant er hypotenusen?',
            options: [
              { id: 'a', text: 'Den korteste siden', isCorrect: false },
              { id: 'b', text: 'Siden som danner den rette vinkelen', isCorrect: false },
              { id: 'c', text: 'Den lengste siden, som ligger mot den rette vinkelen', isCorrect: true },
              { id: 'd', text: 'Det kommer an på trekanten', isCorrect: false },
            ],
            solution: 'Hypotenusen er alltid den lengste siden i en rettvinklet trekant, og den ligger alltid mot (overfor) den rette vinkelen.',
          },
          {
            id: '8-4-3-n-quiz1-q1',
            task: 'En rettvinklet trekant har kateter $6$ cm og $8$ cm. Hvor lang er hypotenusen?',
            options: [
              { id: 'a', text: '$14$ cm', isCorrect: false },
              { id: 'b', text: '$10$ cm', isCorrect: true },
              { id: 'c', text: '$\\sqrt{48}$ cm', isCorrect: false },
              { id: 'd', text: '$7$ cm', isCorrect: false },
            ],
            solution: '$c^2 = 6^2 + 8^2 = 36 + 64 = 100$. Da er $c = \\sqrt{100} = 10$ cm.',
          },
          {
            id: '8-4-3-n-quiz1-q2',
            task: "Hva sier Pytagoras' setning?",
            options: [
              { id: 'a', text: '$a + b = c$', isCorrect: false },
              { id: 'b', text: '$a^2 \\cdot b^2 = c^2$', isCorrect: false },
              { id: 'c', text: '$a^2 + b^2 = c^2$', isCorrect: true },
              { id: 'd', text: '$a^2 - b^2 = c^2$', isCorrect: false },
            ],
            solution: "Pytagoras' setning: $a^2 + b^2 = c^2$, der $a$ og $b$ er katetene og $c$ er hypotenusen i en rettvinklet trekant.",
          },
        ],
      },
    },

    {
      id: '8-4-3-n-section2',
      type: 'text',
      content: `## Finne en katet

Pytagoras' setning er ikke bare nyttig for å finne hypotenusen. Hvis du kjenner hypotenusen og en katet, kan du finne den andre kateten ved å omforme formelen:

$$a^2 + b^2 = c^2$$

Hvis vi vil finne $a$:

$$a^2 = c^2 - b^2$$
$$a = \\sqrt{c^2 - b^2}$$

**Eksempel**: En stige er $5$ m lang og står med foten $3$ m fra veggen. Hvor høyt opp på veggen når stigen?

Her er stigen hypotenusen ($c = 5$ m), avstanden fra veggen er en katet ($b = 3$ m), og høyden opp veggen er den andre kateten ($a$):

$$a^2 = c^2 - b^2 = 5^2 - 3^2 = 25 - 9 = 16$$
$$a = \\sqrt{16} = 4 \\text{ m}$$

Stigen når $4$ m opp på veggen.

**Viktig**: Husk at vi trekker **fra** for å finne en katet, men legger **til** for å finne hypotenusen. Hypotenusen er alltid lengst, så $c^2$ er alltid størst!`,
    },

    {
      id: '8-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på å finne en ukjent side:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-4-3-n-quiz2-q0',
            task: 'En rettvinklet trekant har hypotenus $13$ cm og en katet på $5$ cm. Hvor lang er den andre kateten?',
            options: [
              { id: 'a', text: '$8$ cm', isCorrect: false },
              { id: 'b', text: '$12$ cm', isCorrect: true },
              { id: 'c', text: '$18$ cm', isCorrect: false },
              { id: 'd', text: '$\\sqrt{194}$ cm', isCorrect: false },
            ],
            solution: '$a^2 = c^2 - b^2 = 13^2 - 5^2 = 169 - 25 = 144$. Da er $a = \\sqrt{144} = 12$ cm.',
          },
          {
            id: '8-4-3-n-quiz2-q1',
            task: 'Et rektangel er $8$ cm bredt og $6$ cm høyt. Hvor lang er diagonalen?',
            options: [
              { id: 'a', text: '$14$ cm', isCorrect: false },
              { id: 'b', text: '$10$ cm', isCorrect: true },
              { id: 'c', text: '$48$ cm', isCorrect: false },
              { id: 'd', text: '$7$ cm', isCorrect: false },
            ],
            solution: 'Diagonalen deler rektangelet i to rettvinklede trekanter. $d = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ cm.',
          },
          {
            id: '8-4-3-n-quiz2-q2',
            task: 'Kan en rettvinklet trekant ha kateter $7$ cm og $24$ cm og hypotenus $25$ cm?',
            options: [
              { id: 'a', text: 'Ja, fordi $7^2 + 24^2 = 25^2$', isCorrect: true },
              { id: 'b', text: 'Nei, fordi $7 + 24 \\neq 25$', isCorrect: false },
              { id: 'c', text: 'Ja, fordi $7 + 24 = 31 > 25$', isCorrect: false },
              { id: 'd', text: 'Nei, fordi tallene er for store', isCorrect: false },
            ],
            solution: '$7^2 + 24^2 = 49 + 576 = 625 = 25^2$. Ja! Pytagoras stemmer, så dette er en rettvinklet trekant.',
          },
        ],
      },
    },

    {
      id: '8-4-3-n-section3',
      type: 'text',
      content: `## Pytagoras i praksis

Pytagoras' setning dukker opp overalt. Her er noen vanlige bruksområder:

### Avstand mellom to punkter

Hvis du kjenner koordinatene til to punkter, kan du finne avstanden mellom dem. Punkt $A = (x_1, y_1)$ og punkt $B = (x_2, y_2)$:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

Dette er egentlig bare Pytagoras! Differansen i $x$-retning er en katet, differansen i $y$-retning er den andre kateten, og avstanden er hypotenusen.

**Eksempel**: Finn avstanden mellom $A = (1, 2)$ og $B = (4, 6)$.

$$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

### Sjekke rette vinkler (3-4-5-metoden)

Snekkere og bygningsarbeidere bruker Pytagoras til å sjekke at hjørner er rette. Mål $3$ m langs den ene veggen og $4$ m langs den andre. Hvis diagonalen er nøyaktig $5$ m, er hjørnet $90°$. Denne metoden ble brukt allerede av de gamle egypterne!

### Diagonalen i et rektangel

Diagonalen i et rektangel med sider $a$ og $b$ er:

$$d = \\sqrt{a^2 + b^2}$$

For eksempel har en TV-skjerm på $40$ tommer en diagonal på $40$ tommer. Hvis skjermen er $32$ tommer bred, er høyden $\\sqrt{40^2 - 32^2} = \\sqrt{1600 - 1024} = \\sqrt{576} = 24$ tommer.`,
    },

    {
      id: '8-4-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-4-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på praktisk bruk av Pytagoras:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-4-3-n-quiz3-q0',
            task: 'Finn avstanden mellom punktene $(0, 0)$ og $(3, 4)$.',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$5$', isCorrect: true },
              { id: 'c', text: '$\\sqrt{7}$', isCorrect: false },
              { id: 'd', text: '$12$', isCorrect: false },
            ],
            solution: '$d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
          },
          {
            id: '8-4-3-n-quiz3-q1',
            task: 'En snekker måler $3$ m langs en vegg og $4$ m langs den andre. Diagonalen er $5{,}1$ m. Er hjørnet $90°$?',
            options: [
              { id: 'a', text: 'Ja, $5{,}1$ m er nær nok', isCorrect: false },
              { id: 'b', text: 'Nei, diagonalen burde vært nøyaktig $5$ m', isCorrect: true },
              { id: 'c', text: 'Ja, fordi $3 + 4 > 5{,}1$', isCorrect: false },
              { id: 'd', text: 'Det er umulig å avgjøre', isCorrect: false },
            ],
            solution: 'Hvis hjørnet var $90°$, ville diagonalen vært $\\sqrt{3^2 + 4^2} = 5$ m. Siden den er $5{,}1$ m, er vinkelen litt større enn $90°$.',
          },
          {
            id: '8-4-3-n-quiz3-q2',
            task: 'Et rektangulært fotballmål er $7{,}32$ m bredt og $2{,}44$ m høyt. Omtrent hvor lang er diagonalen?',
            options: [
              { id: 'a', text: 'Ca. $9{,}76$ m', isCorrect: false },
              { id: 'b', text: 'Ca. $7{,}72$ m', isCorrect: true },
              { id: 'c', text: 'Ca. $5{,}5$ m', isCorrect: false },
              { id: 'd', text: 'Ca. $10$ m', isCorrect: false },
            ],
            solution: '$d = \\sqrt{7{,}32^2 + 2{,}44^2} = \\sqrt{53{,}58 + 5{,}95} = \\sqrt{59{,}53} \\approx 7{,}72$ m.',
          },
        ],
      },
    },

    {
      id: '8-4-3-n-section4',
      type: 'text',
      content: `## Pytagoreiske tripler og omvendt Pytagoras

### Pytagoreiske tripler

Et **pytagoreisk trippel** er tre hele tall $(a, b, c)$ som oppfyller $a^2 + b^2 = c^2$. De vanligste er:

| $a$ | $b$ | $c$ |
|-----|-----|-----|
| $3$ | $4$ | $5$ |
| $5$ | $12$ | $13$ |
| $8$ | $15$ | $17$ |
| $7$ | $24$ | $25$ |

Hvis $(a, b, c)$ er et pytagoreisk trippel, er også $(ka, kb, kc)$ det for ethvert heltall $k$. For eksempel gir $3, 4, 5$ også $6, 8, 10$ og $9, 12, 15$.

### Omvendt Pytagoras: Sjekke om en trekant er rettvinklet

Du kan bruke Pytagoras' setning «baklengs» for å sjekke om en trekant er rettvinklet. Gitt tre sider $a$, $b$ og $c$ (der $c$ er den lengste):

- Hvis $a^2 + b^2 = c^2$: Trekanten er **rettvinklet**
- Hvis $a^2 + b^2 > c^2$: Trekanten er **spissvinket**
- Hvis $a^2 + b^2 < c^2$: Trekanten er **stumpvinket**

**Eksempel**: Er trekanten med sider $5$, $7$ og $9$ rettvinklet?

$5^2 + 7^2 = 25 + 49 = 74$, men $9^2 = 81$.

Siden $74 < 81$, er trekanten **stumpvinket** (vinkelen mot den lengste siden er stump).`,
    },

    {
      id: '8-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Pytagoras' setning**: I en rettvinklet trekant med kateter $a$ og $b$ og hypotenus $c$:

$$a^2 + b^2 = c^2$$

**Finne hypotenusen**: $c = \\sqrt{a^2 + b^2}$

**Finne en katet**: $a = \\sqrt{c^2 - b^2}$

**Avstand mellom to punkter**: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

**Pytagoreiske tripler**: Heltallsløsninger som $3, 4, 5$ og $5, 12, 13$.

**Omvendt Pytagoras**: Sjekk $a^2 + b^2$ mot $c^2$ for å avgjøre om en trekant er rettvinklet ($=$), spissvinket ($>$) eller stumpvinket ($<$).

Husk: Hypotenusen er **alltid** den lengste siden og ligger **mot** den rette vinkelen. Du legger til for å finne hypotenusen, trekker fra for å finne en katet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_4_1_NARRATIV,
  CHAPTER_8_4_2_NARRATIV,
  CHAPTER_8_4_3_NARRATIV,
];
