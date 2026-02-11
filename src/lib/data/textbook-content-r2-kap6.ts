/**
 * Tekstbok kapitler for R2 - Kapittel 6
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_R2_6_1: TextbookChapter = {
  id: 'r2-6-1',
  courseId: 'r2',
  chapterNumber: '6.1',
  title: 'Parameterframstilling av kurver',
  description: 'Beskrive kurver med parameterfunksjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke parameterframstilling til å beskrive kurver i planet',
    'eliminere parameteren for å finne kartesisk likning',
    'finne retning og hastighet langs parameterkurver',
    'tegne parameterkurver ved hånd og med digitale verktøy',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-6-1-intro',
      type: 'text',
      content: `## Hva er parameterframstilling?

Tidligere har vi beskrevet kurver i planet med likninger som $y = f(x)$ eller $x^2 + y^2 = r^2$. Men noen kurver er vanskelige eller umulige å beskrive på denne måten. Tenk på en kurve som krysser seg selv, eller en kurve der $y$ ikke er entydig bestemt av $x$.

**Parameterframstilling** gir oss en mer fleksibel måte å beskrive kurver på. I stedet for å uttrykke $y$ som funksjon av $x$, lar vi både $x$ og $y$ avhenge av en tredje variabel - **parameteren** $t$.

Tenk på det som å beskrive bevegelsen til et punkt som beveger seg langs kurven. For hver verdi av $t$ (som kan tenkes som tid), får vi en posisjon $(x(t), y(t))$ i planet.`,
    },

    {
      id: 'r2-6-1-polar-form-bilde',
      type: 'image',
      src: '/images/r2/polar-form.svg',
      alt: 'Illustrasjon av polarkoordinater og parameterframstilling',
      caption: 'Polarkoordinater - en annen mate a beskrive punkter i planet',
    },

    // Definisjon: Parameterframstilling
    {
      id: 'r2-6-1-def-param',
      type: 'definition',
      title: 'Parameterframstilling av en kurve',
      content: `En **parameterframstilling** av en kurve i planet er gitt ved:

$$\\begin{cases} x = x(t) \\\\ y = y(t) \\end{cases}, \\quad t \\in I$$

der $x(t)$ og $y(t)$ er funksjoner av parameteren $t$, og $I$ er et intervall (parameterintervallet).

For hver verdi av $t$ i intervallet $I$ får vi et punkt $(x(t), y(t))$ på kurven.`,
    },

    {
      id: 'r2-6-1-intuisjon',
      type: 'text',
      content: `### Intuisjon: Parameteren som tid

Den vanligste tolkningen av parameteren $t$ er **tid**. Tenk deg at et punkt beveger seg i planet:

- Ved tid $t = 0$ er punktet i posisjonen $(x(0), y(0))$
- Ved tid $t = 1$ er punktet i posisjonen $(x(1), y(1))$
- Og så videre...

Kurven er da **banen** som punktet tegner opp mens det beveger seg.

Parameterframstilling gir oss ikke bare formen på kurven, men også:
- **Retningen** punktet beveger seg i
- **Hvor fort** punktet beveger seg (hvis vi tolker $t$ som tid)
- **Startpunkt** og **sluttpunkt** (hvis parameterintervallet er begrenset)`,
    },

    // ========== GRUNNLEGGENDE EKSEMPLER ==========
    {
      id: 'r2-6-1-section-basic',
      type: 'text',
      content: `## Enkle parameterkurver`,
    },

    // Eksempel 1: Rett linje
    {
      id: 'r2-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Rett linje',
      problem: `Beskriv kurven gitt ved parameterframstillingen:
$$\\begin{cases} x = 1 + 2t \\\\ y = 3 - t \\end{cases}, \\quad t \\in \\mathbb{R}$$`,
      solution: `**Løsning:**

Vi setter inn noen verdier av $t$:

| $t$ | $x = 1 + 2t$ | $y = 3 - t$ | Punkt |
|-----|--------------|-------------|-------|
| $-1$ | $-1$ | $4$ | $(-1, 4)$ |
| $0$ | $1$ | $3$ | $(1, 3)$ |
| $1$ | $3$ | $2$ | $(3, 2)$ |
| $2$ | $5$ | $1$ | $(5, 1)$ |

Punktene ligger på en rett linje. Dette gir mening fordi:
- $x$ øker lineært med $t$ (stigningstall 2)
- $y$ avtar lineært med $t$ (stigningstall $-1$)

**Retningsvektor:** Når $t$ øker med 1, øker $x$ med 2 og $y$ avtar med 1. Retningsvektoren er altså $\\vec{r} = [2, -1]$.

**Punkt på linjen:** Ved $t = 0$ har vi punktet $(1, 3)$.

Kurven er en rett linje gjennom $(1, 3)$ med retningsvektor $[2, -1]$.`,
    },

    // Note: Generell linje
    {
      id: 'r2-6-1-note-linje',
      type: 'note',
      content: `**Generell parameterframstilling av en linje:**

En linje gjennom punktet $(x_0, y_0)$ med retningsvektor $[a, b]$ har parameterframstilling:

$$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\end{cases}$$`,
    },

    // Eksempel 2: Parabel
    {
      id: 'r2-6-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Parabel',
      problem: `Beskriv kurven gitt ved:
$$\\begin{cases} x = t \\\\ y = t^2 \\end{cases}, \\quad t \\in \\mathbb{R}$$`,
      solution: `**Løsning:**

Siden $x = t$, kan vi skrive $t = x$ og sette inn i den andre likningen:
$$y = t^2 = x^2$$

Kurven er parabelen $y = x^2$.

| $t$ | $x$ | $y$ | Punkt |
|-----|-----|-----|-------|
| $-2$ | $-2$ | $4$ | $(-2, 4)$ |
| $-1$ | $-1$ | $1$ | $(-1, 1)$ |
| $0$ | $0$ | $0$ | $(0, 0)$ |
| $1$ | $1$ | $1$ | $(1, 1)$ |
| $2$ | $2$ | $4$ | $(2, 4)$ |

**Retning:** Når $t$ øker, beveger punktet seg langs parabelen fra venstre mot høyre (fordi $x = t$ øker med $t$).`,
    },

    // Eksempel 3: Halv parabel
    {
      id: 'r2-6-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Begrenset parameterintervall',
      problem: `Beskriv kurven gitt ved:
$$\\begin{cases} x = t \\\\ y = t^2 \\end{cases}, \\quad t \\in [0, 2]$$`,
      solution: `**Løsning:**

Dette er samme parametrisering som i forrige eksempel, men nå er $t$ begrenset til intervallet $[0, 2]$.

- **Startpunkt** ($t = 0$): $(0, 0)$
- **Sluttpunkt** ($t = 2$): $(2, 4)$

Kurven er den delen av parabelen $y = x^2$ som går fra $(0, 0)$ til $(2, 4)$.

**Merk:** Parameterintervallet bestemmer hvilken del av kurven vi får.`,
    },

    // ========== SIRKEL OG ELLIPSE ==========
    {
      id: 'r2-6-1-section-sirkel',
      type: 'text',
      content: `## Sirkel som parameterkurve

En av de viktigste anvendelsene av parameterframstilling er å beskrive sirkler og ellipser.

For en sirkel med radius $r$ og sentrum i origo, tenker vi oss at et punkt beveger seg rundt sirkelen. Posisjonen kan beskrives ved hjelp av vinkelen $t$ målt fra positiv $x$-akse.`,
    },

    // Definisjon: Sirkel
    {
      id: 'r2-6-1-def-sirkel',
      type: 'definition',
      title: 'Parameterframstilling av sirkel',
      content: `En sirkel med sentrum i origo og radius $r$ har parameterframstilling:

$$\\begin{cases} x = r\\cos t \\\\ y = r\\sin t \\end{cases}, \\quad t \\in [0, 2\\pi]$$

Her er $t$ vinkelen (i radianer) målt fra positiv $x$-akse mot klokka.

**Generelt:** Sirkel med sentrum $(a, b)$ og radius $r$:
$$\\begin{cases} x = a + r\\cos t \\\\ y = b + r\\sin t \\end{cases}$$`,
    },

    // Eksempel 4: Sirkel
    {
      id: 'r2-6-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Enhetssirkelen',
      problem: `Vis at parameterframstillingen
$$\\begin{cases} x = \\cos t \\\\ y = \\sin t \\end{cases}, \\quad t \\in [0, 2\\pi]$$
beskriver enhetssirkelen.`,
      solution: `**Løsning:**

Vi bruker den trigonometriske identiteten $\\cos^2 t + \\sin^2 t = 1$:

$$x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$$

Dette er likningen for enhetssirkelen (sirkel med sentrum i origo og radius 1).

**Retning rundt sirkelen:**
| $t$ | $x = \\cos t$ | $y = \\sin t$ | Punkt |
|-----|---------------|---------------|-------|
| $0$ | $1$ | $0$ | $(1, 0)$ |
| $\\frac{\\pi}{2}$ | $0$ | $1$ | $(0, 1)$ |
| $\\pi$ | $-1$ | $0$ | $(-1, 0)$ |
| $\\frac{3\\pi}{2}$ | $0$ | $-1$ | $(0, -1)$ |
| $2\\pi$ | $1$ | $0$ | $(1, 0)$ |

Punktet starter i $(1, 0)$ og beveger seg **mot klokka** rundt sirkelen.`,
    },

    // Tip: Retning på sirkel
    {
      id: 'r2-6-1-tip-retning',
      type: 'tip',
      content: `**Retning rundt sirkelen:**
- $x = r\\cos t$, $y = r\\sin t$: Bevegelse **mot klokka** (positiv retning)
- $x = r\\cos t$, $y = -r\\sin t$: Bevegelse **med klokka**
- $x = r\\sin t$, $y = r\\cos t$: Start i $(0, r)$, bevegelse med klokka`,
    },

    // Eksempel 5: Forskjøvet sirkel
    {
      id: 'r2-6-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Sirkel med sentrum utenfor origo',
      problem: `Finn en parameterframstilling for sirkelen med sentrum $(2, -1)$ og radius $3$.`,
      solution: `**Løsning:**

Vi bruker formelen for sirkel med sentrum $(a, b)$ og radius $r$:

$$\\begin{cases} x = a + r\\cos t \\\\ y = b + r\\sin t \\end{cases}$$

Med $a = 2$, $b = -1$ og $r = 3$ får vi:

$$\\begin{cases} x = 2 + 3\\cos t \\\\ y = -1 + 3\\sin t \\end{cases}, \\quad t \\in [0, 2\\pi]$$

**Kontroll:** Startpunktet ($t = 0$) er $(2 + 3, -1 + 0) = (5, -1)$, som ligger på sirkelen (3 enheter til høyre for sentrum).`,
    },

    // ========== ELLIPSE ==========
    {
      id: 'r2-6-1-section-ellipse',
      type: 'text',
      content: `## Ellipse som parameterkurve

En ellipse er en "strukket" sirkel. Hvis vi strekker enhetssirkelen med faktor $a$ i $x$-retning og faktor $b$ i $y$-retning, får vi en ellipse.`,
    },

    // Definisjon: Ellipse
    {
      id: 'r2-6-1-def-ellipse',
      type: 'definition',
      title: 'Parameterframstilling av ellipse',
      content: `En ellipse med sentrum i origo, halvakse $a$ langs $x$-aksen og halvakse $b$ langs $y$-aksen har parameterframstilling:

$$\\begin{cases} x = a\\cos t \\\\ y = b\\sin t \\end{cases}, \\quad t \\in [0, 2\\pi]$$

Den kartesiske likningen for denne ellipsen er:
$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$`,
    },

    // Eksempel 6: Ellipse
    {
      id: 'r2-6-1-example-6',
      type: 'example',
      title: 'Eksempel 6: Parametrisering av ellipse',
      problem: `a) Finn en parameterframstilling for ellipsen $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$.

b) Beskriv ellipsens form.`,
      solution: `**Løsning:**

a) Fra likningen ser vi at $a^2 = 9$ og $b^2 = 4$, altså $a = 3$ og $b = 2$.

Parameterframstillingen blir:
$$\\begin{cases} x = 3\\cos t \\\\ y = 2\\sin t \\end{cases}, \\quad t \\in [0, 2\\pi]$$

b) **Ellipsens form:**
- Halvaksen langs $x$-aksen er $a = 3$
- Halvaksen langs $y$-aksen er $b = 2$
- Ellipsen krysser $x$-aksen i $(-3, 0)$ og $(3, 0)$
- Ellipsen krysser $y$-aksen i $(0, -2)$ og $(0, 2)$

Siden $a > b$, er ellipsen "liggende" (bredere enn den er høy).

**Kontroll:**
$$\\frac{(3\\cos t)^2}{9} + \\frac{(2\\sin t)^2}{4} = \\frac{9\\cos^2 t}{9} + \\frac{4\\sin^2 t}{4} = \\cos^2 t + \\sin^2 t = 1 \\checkmark$$`,
    },

    // ========== ELIMINERE PARAMETEREN ==========
    {
      id: 'r2-6-1-section-eliminere',
      type: 'text',
      content: `## Eliminere parameteren

Å **eliminere parameteren** betyr å finne den kartesiske likningen for kurven - altså en likning som bare inneholder $x$ og $y$, uten $t$.

**Fremgangsmåte:**
1. Løs én av likningene med hensyn på $t$
2. Sett inn i den andre likningen
3. Forenkle

Alternativt: Bruk kjente identiteter (som $\\cos^2 t + \\sin^2 t = 1$) til å eliminere $t$.`,
    },

    // Eksempel 7: Eliminere parameter - linje
    {
      id: 'r2-6-1-example-7',
      type: 'example',
      title: 'Eksempel 7: Eliminere parameteren (linje)',
      problem: `Finn den kartesiske likningen for kurven gitt ved:
$$\\begin{cases} x = 1 + 2t \\\\ y = 3 - t \\end{cases}$$`,
      solution: `**Løsning:**

**Metode 1: Løs for $t$**

Fra den første likningen:
$$x = 1 + 2t \\implies t = \\frac{x - 1}{2}$$

Setter inn i den andre:
$$y = 3 - t = 3 - \\frac{x - 1}{2} = 3 - \\frac{x}{2} + \\frac{1}{2} = \\frac{7}{2} - \\frac{x}{2}$$

Ganger med 2:
$$2y = 7 - x$$
$$x + 2y = 7$$

**Metode 2: Kombinere likningene**

Fra $y = 3 - t$ har vi $t = 3 - y$.
Fra $x = 1 + 2t$ har vi $x = 1 + 2(3 - y) = 7 - 2y$.
Altså $x + 2y = 7$.

Den kartesiske likningen er $x + 2y = 7$ (en rett linje).`,
    },

    // Eksempel 8: Eliminere parameter - sirkel
    {
      id: 'r2-6-1-example-8',
      type: 'example',
      title: 'Eksempel 8: Eliminere parameteren (sirkel)',
      problem: `Finn den kartesiske likningen for kurven gitt ved:
$$\\begin{cases} x = 2 + 3\\cos t \\\\ y = -1 + 3\\sin t \\end{cases}$$`,
      solution: `**Løsning:**

Vi isolerer $\\cos t$ og $\\sin t$:
$$\\cos t = \\frac{x - 2}{3}, \\quad \\sin t = \\frac{y + 1}{3}$$

Bruker identiteten $\\cos^2 t + \\sin^2 t = 1$:
$$\\left(\\frac{x - 2}{3}\\right)^2 + \\left(\\frac{y + 1}{3}\\right)^2 = 1$$

$$\\frac{(x - 2)^2}{9} + \\frac{(y + 1)^2}{9} = 1$$

$$(x - 2)^2 + (y + 1)^2 = 9$$

Dette er likningen for en sirkel med sentrum $(2, -1)$ og radius $3$.`,
    },

    // Eksempel 9: Eliminere - mer komplisert
    {
      id: 'r2-6-1-example-9',
      type: 'example',
      title: 'Eksempel 9: Eliminere parameteren (hyperbelgren)',
      problem: `Finn den kartesiske likningen for kurven gitt ved:
$$\\begin{cases} x = \\frac{1}{t} \\\\ y = t \\end{cases}, \\quad t > 0$$`,
      solution: `**Løsning:**

Fra den andre likningen har vi $t = y$.

Setter inn i den første:
$$x = \\frac{1}{t} = \\frac{1}{y}$$

Altså:
$$xy = 1 \\quad \\text{eller} \\quad y = \\frac{1}{x}$$

Siden $t > 0$ og $y = t$, har vi $y > 0$, og dermed også $x = \\frac{1}{y} > 0$.

Kurven er grenen av hyperbelen $xy = 1$ i første kvadrant.`,
    },

    // Warning: Parameterframstilling gir mer info
    {
      id: 'r2-6-1-warning-info',
      type: 'warning',
      title: 'Viktig om eliminering',
      content: `Når vi eliminerer parameteren, mister vi informasjon!

Parameterframstillingen gir oss:
- Retningen langs kurven
- Parameterintervallet (hvilken del av kurven)
- Startpunkt og sluttpunkt

Den kartesiske likningen gir oss bare formen på kurven.

**Eksempel:** Både $\\begin{cases} x = \\cos t \\\\ y = \\sin t \\end{cases}$ og $\\begin{cases} x = \\cos t \\\\ y = -\\sin t \\end{cases}$ gir sirkelen $x^2 + y^2 = 1$, men bevegelsen går i motsatt retning!`,
    },

    // ========== TEGNE PARAMETERKURVER ==========
    {
      id: 'r2-6-1-section-tegne',
      type: 'text',
      content: `## Tegne parameterkurver

For å tegne en parameterkurve for hånd:

1. **Lag en verditabell** med verdier av $t$, og beregn $(x(t), y(t))$ for hver $t$
2. **Plott punktene** i koordinatsystemet
3. **Forbind punktene** i rekkefølgen de kommer (når $t$ øker)
4. **Merk retningen** med en pil

**Tips for valg av $t$-verdier:**
- For linjer: 2-3 punkter er nok
- For sirkler/ellipser: Bruk $t = 0, \\frac{\\pi}{4}, \\frac{\\pi}{2}, \\frac{3\\pi}{4}, \\pi, ...$
- For andre kurver: Flere punkter gir bedre bilde av formen`,
    },

    // Eksempel 10: Tegne kurve
    {
      id: 'r2-6-1-example-10',
      type: 'example',
      title: 'Eksempel 10: Tegne en parameterkurve',
      problem: `Tegn kurven gitt ved:
$$\\begin{cases} x = t^2 - 1 \\\\ y = t^3 - t \\end{cases}, \\quad t \\in [-1.5, 1.5]$$`,
      solution: `**Løsning:**

Vi lager en verditabell:

| $t$ | $x = t^2 - 1$ | $y = t^3 - t$ | Punkt |
|-----|---------------|---------------|-------|
| $-1.5$ | $1.25$ | $-1.875$ | $(1.25, -1.875)$ |
| $-1$ | $0$ | $0$ | $(0, 0)$ |
| $-0.5$ | $-0.75$ | $0.375$ | $(-0.75, 0.375)$ |
| $0$ | $-1$ | $0$ | $(-1, 0)$ |
| $0.5$ | $-0.75$ | $-0.375$ | $(-0.75, -0.375)$ |
| $1$ | $0$ | $0$ | $(0, 0)$ |
| $1.5$ | $1.25$ | $1.875$ | $(1.25, 1.875)$ |

**Observasjoner:**
- Kurven går gjennom origo $(0, 0)$ to ganger (ved $t = -1$ og $t = 1$)
- Ved $t = 0$ er vi i $(-1, 0)$, som er lengst til venstre
- Kurven krysser seg selv i origo!

Kurven danner en figur som ligner på et liggende "8" eller sløyfe.`,
    },

    // Eksempel 11: Sykloid
    {
      id: 'r2-6-1-example-11',
      type: 'example',
      title: 'Eksempel 11: Sykloiden',
      problem: `En **sykloid** er kurven som et punkt på kanten av et hjul tegner opp når hjulet ruller langs bakken.

Hvis hjulet har radius $r$, vis at parameterframstillingen blir:
$$\\begin{cases} x = r(t - \\sin t) \\\\ y = r(1 - \\cos t) \\end{cases}$$

Tegn kurven for $r = 1$ og $t \\in [0, 4\\pi]$.`,
      solution: `**Løsning:**

Når hjulet har rullet vinkelen $t$ (i radianer), har sentrum flyttet seg en avstand $rt$ langs $x$-aksen. Sentrum er da i punktet $(rt, r)$.

Punktet på kanten av hjulet er forskjøvet fra sentrum med:
- $-r\\sin t$ i $x$-retning
- $-r\\cos t$ i $y$-retning

(Merk: Minus fordi vi starter med punktet i bunn av hjulet.)

Dette gir:
$$x = rt - r\\sin t = r(t - \\sin t)$$
$$y = r - r\\cos t = r(1 - \\cos t)$$

**Noen punkter for $r = 1$:**

| $t$ | $x$ | $y$ | Merknad |
|-----|-----|-----|---------|
| $0$ | $0$ | $0$ | Start, punktet berører bakken |
| $\\pi$ | $\\pi \\approx 3.14$ | $2$ | Toppen av buen |
| $2\\pi$ | $2\\pi \\approx 6.28$ | $0$ | Tilbake på bakken |
| $3\\pi$ | $3\\pi \\approx 9.42$ | $2$ | Neste topp |
| $4\\pi$ | $4\\pi \\approx 12.57$ | $0$ | Tilbake på bakken |

Kurven består av en serie buer der punktet periodisk berører bakken.`,
    },

    // ========== RETNING LANGS KURVEN ==========
    {
      id: 'r2-6-1-section-retning',
      type: 'text',
      content: `## Retning og hastighet langs kurven

Parameterframstillingen gir oss mer enn bare formen på kurven - den forteller oss også hvordan et punkt beveger seg langs kurven.

### Tangentvektor

**Tangentvektoren** i et punkt på kurven peker i den retningen punktet beveger seg. Den finner vi ved å derivere $x(t)$ og $y(t)$ med hensyn på $t$:

$$\\vec{v}(t) = [x'(t), y'(t)]$$

Denne vektoren kalles også **hastighetsvektoren** hvis vi tolker $t$ som tid.`,
    },

    // Definisjon: Tangentvektor
    {
      id: 'r2-6-1-def-tangent',
      type: 'definition',
      title: 'Tangentvektor',
      content: `For en kurve gitt ved $\\begin{cases} x = x(t) \\\\ y = y(t) \\end{cases}$ er **tangentvektoren** i punktet $(x(t_0), y(t_0))$:

$$\\vec{v}(t_0) = [x'(t_0), y'(t_0)]$$

Tangentvektoren peker i bevegelsesretningen når $t$ øker.

**Fart** (lengden av hastighetsvektoren):
$$|\\vec{v}(t)| = \\sqrt{(x'(t))^2 + (y'(t))^2}$$`,
    },

    // Eksempel 12: Tangentvektor på sirkel
    {
      id: 'r2-6-1-example-12',
      type: 'example',
      title: 'Eksempel 12: Tangentvektor på sirkel',
      problem: `For sirkelen $\\begin{cases} x = 2\\cos t \\\\ y = 2\\sin t \\end{cases}$:

a) Finn tangentvektoren $\\vec{v}(t)$
b) Finn tangentvektoren i punktet der $t = \\frac{\\pi}{4}$
c) Vis at tangentvektoren alltid står vinkelrett på posisjonsvektoren`,
      solution: `**Løsning:**

a) Vi deriverer:
$$x'(t) = -2\\sin t, \\quad y'(t) = 2\\cos t$$
$$\\vec{v}(t) = [-2\\sin t, 2\\cos t]$$

b) Ved $t = \\frac{\\pi}{4}$:
$$\\vec{v}\\left(\\frac{\\pi}{4}\\right) = \\left[-2\\sin\\frac{\\pi}{4}, 2\\cos\\frac{\\pi}{4}\\right] = \\left[-2 \\cdot \\frac{\\sqrt{2}}{2}, 2 \\cdot \\frac{\\sqrt{2}}{2}\\right] = [-\\sqrt{2}, \\sqrt{2}]$$

Punktet er $(2\\cos\\frac{\\pi}{4}, 2\\sin\\frac{\\pi}{4}) = (\\sqrt{2}, \\sqrt{2})$.

c) Posisjonsvektoren er $\\vec{r}(t) = [2\\cos t, 2\\sin t]$.

Skalarproduktet:
$$\\vec{r}(t) \\cdot \\vec{v}(t) = (2\\cos t)(-2\\sin t) + (2\\sin t)(2\\cos t)$$
$$= -4\\cos t \\sin t + 4\\sin t \\cos t = 0$$

Siden skalarproduktet er 0 for alle $t$, står tangentvektoren alltid vinkelrett på posisjonsvektoren. Dette gir mening geometrisk - tangenten til en sirkel står alltid vinkelrett på radiusen!`,
    },

    // Eksempel 13: Tangentlinje
    {
      id: 'r2-6-1-example-13',
      type: 'example',
      title: 'Eksempel 13: Likning for tangentlinje',
      problem: `Finn likningen for tangentlinjen til kurven
$$\\begin{cases} x = t^2 \\\\ y = t^3 \\end{cases}$$
i punktet der $t = 2$.`,
      solution: `**Løsning:**

**Punktet:** Ved $t = 2$ har vi $(x, y) = (4, 8)$.

**Tangentvektoren:**
$$x'(t) = 2t, \\quad y'(t) = 3t^2$$
$$\\vec{v}(2) = [2 \\cdot 2, 3 \\cdot 4] = [4, 12]$$

**Stigningstall:**
$$a = \\frac{y'(2)}{x'(2)} = \\frac{12}{4} = 3$$

**Tangentlinje gjennom $(4, 8)$ med stigningstall $3$:**
$$y - 8 = 3(x - 4)$$
$$y = 3x - 12 + 8$$
$$y = 3x - 4$$

**Alternativ metode:** Tangentlinjen har parameterframstilling:
$$\\begin{cases} x = 4 + 4s \\\\ y = 8 + 12s \\end{cases}$$
(der $s$ er en ny parameter).`,
    },

    // Eksempel 14: Hvor er kurven horisontal/vertikal
    {
      id: 'r2-6-1-example-14',
      type: 'example',
      title: 'Eksempel 14: Horisontale og vertikale tangenter',
      problem: `For kurven $\\begin{cases} x = t^2 - 4t \\\\ y = t^2 - 2t \\end{cases}$, finn alle punkter der tangenten er:
a) Horisontal
b) Vertikal`,
      solution: `**Løsning:**

Først finner vi de deriverte:
$$x'(t) = 2t - 4, \\quad y'(t) = 2t - 2$$

a) **Horisontal tangent:** Tangenten er horisontal når $y'(t) = 0$ (og $x'(t) \\neq 0$).
$$y'(t) = 2t - 2 = 0 \\implies t = 1$$

Sjekker at $x'(1) = 2(1) - 4 = -2 \\neq 0$ ✓

Ved $t = 1$: $(x, y) = (1 - 4, 1 - 2) = (-3, -1)$

**Horisontal tangent i $(-3, -1)$.**

b) **Vertikal tangent:** Tangenten er vertikal når $x'(t) = 0$ (og $y'(t) \\neq 0$).
$$x'(t) = 2t - 4 = 0 \\implies t = 2$$

Sjekker at $y'(2) = 2(2) - 2 = 2 \\neq 0$ ✓

Ved $t = 2$: $(x, y) = (4 - 8, 4 - 4) = (-4, 0)$

**Vertikal tangent i $(-4, 0)$.**`,
    },

    // ========== FLERE PARAMETRISERINGER ==========
    {
      id: 'r2-6-1-section-flere',
      type: 'text',
      content: `## Samme kurve - forskjellige parametriseringer

Den samme kurven kan ha mange ulike parameterframstillinger. De kan gi:
- Ulik retning langs kurven
- Ulik hastighet langs kurven
- Ulikt parameterintervall`,
    },

    // Eksempel 15: Flere parametriseringer
    {
      id: 'r2-6-1-example-15',
      type: 'example',
      title: 'Eksempel 15: Alternative parametriseringer',
      problem: `Vis at følgende tre parameterframstillinger alle beskriver enhetssirkelen:

a) $\\begin{cases} x = \\cos t \\\\ y = \\sin t \\end{cases}, t \\in [0, 2\\pi]$

b) $\\begin{cases} x = \\cos 2t \\\\ y = \\sin 2t \\end{cases}, t \\in [0, \\pi]$

c) $\\begin{cases} x = \\sin t \\\\ y = \\cos t \\end{cases}, t \\in [0, 2\\pi]$

Hva er forskjellene?`,
      solution: `**Løsning:**

Alle tre gir $x^2 + y^2 = 1$, som er enhetssirkelen.

**Forskjeller:**

a) Standard parametrisering:
- Start: $(1, 0)$ ved $t = 0$
- Retning: Mot klokka
- Hastighet: Punktet går rundt én gang når $t$ øker fra $0$ til $2\\pi$

b) Dobbel hastighet:
- Start: $(1, 0)$ ved $t = 0$
- Retning: Mot klokka
- Hastighet: Punktet går rundt én gang når $t$ øker fra $0$ til $\\pi$ (dobbel hastighet!)

c) Forskjøvet startpunkt og motsatt retning:
- Start: $(0, 1)$ ved $t = 0$ (på toppen av sirkelen)
- Retning: Med klokka!
- Ved $t = \\frac{\\pi}{2}$: $(1, 0)$ (punktet har gått ned og til høyre)

**Konklusjon:** Samme kurve, men ulik bevegelse langs kurven.`,
    },

    // Eksempel 16: Lissajous-kurve
    {
      id: 'r2-6-1-example-16',
      type: 'example',
      title: 'Eksempel 16: Lissajous-kurve',
      problem: `En **Lissajous-kurve** er gitt ved:
$$\\begin{cases} x = A\\sin(at + \\delta) \\\\ y = B\\sin(bt) \\end{cases}$$

Beskriv kurven for $A = B = 1$, $a = 3$, $b = 2$, $\\delta = 0$, $t \\in [0, 2\\pi]$.`,
      solution: `**Løsning:**

Vi har:
$$\\begin{cases} x = \\sin(3t) \\\\ y = \\sin(2t) \\end{cases}$$

Noen punkter:
| $t$ | $x = \\sin(3t)$ | $y = \\sin(2t)$ |
|-----|----------------|----------------|
| $0$ | $0$ | $0$ |
| $\\frac{\\pi}{6}$ | $1$ | $\\frac{\\sqrt{3}}{2}$ |
| $\\frac{\\pi}{3}$ | $0$ | $\\frac{\\sqrt{3}}{2}$ |
| $\\frac{\\pi}{2}$ | $-1$ | $0$ |
| $\\frac{2\\pi}{3}$ | $0$ | $-\\frac{\\sqrt{3}}{2}$ |
| $\\pi$ | $0$ | $0$ |

Kurven danner et komplekst mønster som ligner på et liggende 8-tall med ekstra løkker. Forholdet mellom frekvensene $a/b = 3/2$ bestemmer hvor mange ganger kurven krysser seg selv og formen på mønsteret.

Lissajous-kurver brukes i fysikk for å studere svingninger og i oscilloskoper for å sammenligne signalfrekvenser.`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'r2-6-1-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // Oppgave 1
    {
      id: 'r2-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-1',
        number: '6.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn punktene på kurven for de oppgitte verdiene av $t$.',
        subTasks: [
          { label: 'a', task: '$\\begin{cases} x = 2t + 1 \\\\ y = t - 3 \\end{cases}$ for $t = 0, 1, 2$', solution: '$t = 0$: $(1, -3)$, $t = 1$: $(3, -2)$, $t = 2$: $(5, -1)$' },
          { label: 'b', task: '$\\begin{cases} x = t^2 \\\\ y = 2t \\end{cases}$ for $t = -2, -1, 0, 1, 2$', solution: '$t = -2$: $(4, -4)$, $t = -1$: $(1, -2)$, $t = 0$: $(0, 0)$, $t = 1$: $(1, 2)$, $t = 2$: $(4, 4)$' },
          { label: 'c', task: '$\\begin{cases} x = 3\\cos t \\\\ y = 3\\sin t \\end{cases}$ for $t = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$', solution: '$t = 0$: $(3, 0)$, $t = \\frac{\\pi}{2}$: $(0, 3)$, $t = \\pi$: $(-3, 0)$, $t = \\frac{3\\pi}{2}$: $(0, -3)$' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Sett inn verdien av $t$ i begge likningene.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r2-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-2',
        number: '6.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Eliminer parameteren og finn den kartesiske likningen for kurven.',
        subTasks: [
          { label: 'a', task: '$\\begin{cases} x = t \\\\ y = 2t + 5 \\end{cases}$', solution: 'Siden $t = x$, får vi $y = 2x + 5$ (rett linje).' },
          { label: 'b', task: '$\\begin{cases} x = t + 2 \\\\ y = t^2 \\end{cases}$', solution: '$t = x - 2$, så $y = (x - 2)^2$ (parabel med toppunkt i $(2, 0)$).' },
          { label: 'c', task: '$\\begin{cases} x = 2\\cos t \\\\ y = 2\\sin t \\end{cases}$', solution: '$\\cos t = \\frac{x}{2}$, $\\sin t = \\frac{y}{2}$. Bruker $\\cos^2 t + \\sin^2 t = 1$: $\\frac{x^2}{4} + \\frac{y^2}{4} = 1$, altså $x^2 + y^2 = 4$ (sirkel med radius 2).' },
          { label: 'd', task: '$\\begin{cases} x = 4\\cos t \\\\ y = 2\\sin t \\end{cases}$', solution: '$\\cos t = \\frac{x}{4}$, $\\sin t = \\frac{y}{2}$. Bruker identiteten: $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$ (ellipse).' },
        ],
        solution: 'a) $y = 2x + 5$, b) $y = (x-2)^2$, c) $x^2 + y^2 = 4$, d) $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$',
        hints: ['Løs én likning for $t$ og sett inn i den andre.', 'For trigonometriske funksjoner: bruk $\\cos^2 t + \\sin^2 t = 1$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r2-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-3',
        number: '6.1.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn en parameterframstilling for:',
        subTasks: [
          { label: 'a', task: 'Linjen gjennom $(1, 2)$ med retningsvektor $[3, -1]$', solution: '$\\begin{cases} x = 1 + 3t \\\\ y = 2 - t \\end{cases}, t \\in \\mathbb{R}$' },
          { label: 'b', task: 'Sirkelen med sentrum $(0, 0)$ og radius $5$', solution: '$\\begin{cases} x = 5\\cos t \\\\ y = 5\\sin t \\end{cases}, t \\in [0, 2\\pi]$' },
          { label: 'c', task: 'Sirkelen med sentrum $(-2, 3)$ og radius $4$', solution: '$\\begin{cases} x = -2 + 4\\cos t \\\\ y = 3 + 4\\sin t \\end{cases}, t \\in [0, 2\\pi]$' },
          { label: 'd', task: 'Ellipsen $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$', solution: '$\\begin{cases} x = 5\\cos t \\\\ y = 3\\sin t \\end{cases}, t \\in [0, 2\\pi]$' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Linje: $x = x_0 + at$, $y = y_0 + bt$ der $(x_0, y_0)$ er et punkt og $[a, b]$ er retningsvektoren.', 'Sirkel/ellipse: $x = a\\cos t$, $y = b\\sin t$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r2-6-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-4',
        number: '6.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn kurven gitt ved parameterframstillingen. Marker retningen med pil.',
        subTasks: [
          { label: 'a', task: '$\\begin{cases} x = t \\\\ y = t^2 \\end{cases}, t \\in [-2, 2]$', solution: 'Parabel $y = x^2$ fra $(-2, 4)$ til $(2, 4)$, med bevegelse fra venstre mot høyre.' },
          { label: 'b', task: '$\\begin{cases} x = \\cos t \\\\ y = \\sin t \\end{cases}, t \\in [0, \\pi]$', solution: 'Øvre halvdel av enhetssirkelen, fra $(1, 0)$ til $(-1, 0)$, bevegelse mot klokka.' },
          { label: 'c', task: '$\\begin{cases} x = 2 + \\cos t \\\\ y = 1 + \\sin t \\end{cases}, t \\in [0, 2\\pi]$', solution: 'Sirkel med sentrum $(2, 1)$ og radius $1$, startpunkt $(3, 1)$, bevegelse mot klokka.' },
        ],
        solution: 'Se deloppgavene for beskrivelser.',
        hints: ['Lag en verditabell med noen verdier av $t$.', 'Plot punktene og forbind dem i riktig rekkefølge.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r2-6-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-5',
        number: '6.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tangentvektoren $\\vec{v}(t) = [x\'(t), y\'(t)]$ for kurven.',
        subTasks: [
          { label: 'a', task: '$\\begin{cases} x = t^2 \\\\ y = t^3 \\end{cases}$', solution: '$x\'(t) = 2t$, $y\'(t) = 3t^2$, så $\\vec{v}(t) = [2t, 3t^2]$' },
          { label: 'b', task: '$\\begin{cases} x = 3\\cos t \\\\ y = 3\\sin t \\end{cases}$', solution: '$x\'(t) = -3\\sin t$, $y\'(t) = 3\\cos t$, så $\\vec{v}(t) = [-3\\sin t, 3\\cos t]$' },
          { label: 'c', task: '$\\begin{cases} x = e^t \\\\ y = e^{-t} \\end{cases}$', solution: '$x\'(t) = e^t$, $y\'(t) = -e^{-t}$, så $\\vec{v}(t) = [e^t, -e^{-t}]$' },
        ],
        solution: 'a) $[2t, 3t^2]$, b) $[-3\\sin t, 3\\cos t]$, c) $[e^t, -e^{-t}]$',
        hints: ['Deriver $x(t)$ og $y(t)$ med hensyn på $t$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r2-6-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-6',
        number: '6.1.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En partikkel beveger seg langs kurven $\\begin{cases} x = t^2 - 4t \\\\ y = t^2 + 2t \\end{cases}$, der $t$ er tid i sekunder.',
        subTasks: [
          { label: 'a', task: 'Finn posisjonen til partikkelen ved $t = 0$, $t = 1$ og $t = 2$.', solution: '$t = 0$: $(0, 0)$, $t = 1$: $(-3, 3)$, $t = 2$: $(-4, 8)$' },
          { label: 'b', task: 'Finn hastighetsvektoren $\\vec{v}(t)$.', solution: '$\\vec{v}(t) = [2t - 4, 2t + 2]$' },
          { label: 'c', task: 'Finn farten $|\\vec{v}(t)|$ ved $t = 0$ og $t = 2$.', solution: '$|\\vec{v}(0)| = |[-4, 2]| = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}$\n$|\\vec{v}(2)| = |[0, 6]| = 6$' },
          { label: 'd', task: 'Når er farten minst?', solution: '$|\\vec{v}(t)|^2 = (2t-4)^2 + (2t+2)^2 = 4t^2 - 16t + 16 + 4t^2 + 8t + 4 = 8t^2 - 8t + 20$.\nDeriverer: $16t - 8 = 0 \\Rightarrow t = \\frac{1}{2}$.\nMinste fart ved $t = \\frac{1}{2}$: $|\\vec{v}(\\frac{1}{2})| = \\sqrt{8 \\cdot \\frac{1}{4} - 8 \\cdot \\frac{1}{2} + 20} = \\sqrt{2 - 4 + 20} = \\sqrt{18} = 3\\sqrt{2}$.' },
        ],
        solution: 'a) $(0,0)$, $(-3,3)$, $(-4,8)$, b) $[2t-4, 2t+2]$, c) $2\\sqrt{5}$ og $6$, d) Ved $t = \\frac{1}{2}$, fart $3\\sqrt{2}$',
        hints: ['Fart er lengden av hastighetsvektoren.', 'For å finne minimum fart, minimer $|\\vec{v}(t)|^2$ (enklere enn å derivere røtter).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r2-6-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-7',
        number: '6.1.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn stigningstallet til tangenten og likningen for tangentlinjen i det oppgitte punktet.',
        subTasks: [
          { label: 'a', task: '$\\begin{cases} x = t^2 \\\\ y = t^3 \\end{cases}$ ved $t = 1$', solution: 'Ved $t = 1$: punkt $(1, 1)$.\n$x\'(1) = 2$, $y\'(1) = 3$, stigningstall $= \\frac{3}{2}$.\nTangent: $y - 1 = \\frac{3}{2}(x - 1)$, altså $y = \\frac{3}{2}x - \\frac{1}{2}$.' },
          { label: 'b', task: '$\\begin{cases} x = \\cos t \\\\ y = \\sin t \\end{cases}$ ved $t = \\frac{\\pi}{4}$', solution: 'Ved $t = \\frac{\\pi}{4}$: punkt $(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$.\n$x\'(\\frac{\\pi}{4}) = -\\frac{\\sqrt{2}}{2}$, $y\'(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$, stigningstall $= -1$.\nTangent: $y - \\frac{\\sqrt{2}}{2} = -1(x - \\frac{\\sqrt{2}}{2})$, altså $y = -x + \\sqrt{2}$.' },
          { label: 'c', task: '$\\begin{cases} x = e^t \\\\ y = e^{2t} \\end{cases}$ ved $t = 0$', solution: 'Ved $t = 0$: punkt $(1, 1)$.\n$x\'(0) = 1$, $y\'(0) = 2$, stigningstall $= 2$.\nTangent: $y - 1 = 2(x - 1)$, altså $y = 2x - 1$.' },
        ],
        solution: 'a) $y = \\frac{3}{2}x - \\frac{1}{2}$, b) $y = -x + \\sqrt{2}$, c) $y = 2x - 1$',
        hints: ['Stigningstall $= \\frac{y\'(t)}{x\'(t)}$.', 'Tangentlinje: $y - y_0 = a(x - x_0)$ der $a$ er stigningstallet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r2-6-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-8',
        number: '6.1.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle verdier av $t$ der kurven har horisontal eller vertikal tangent.',
        subTasks: [
          { label: 'a', task: '$\\begin{cases} x = t^3 - 3t \\\\ y = t^2 - 4 \\end{cases}$', solution: '$x\'(t) = 3t^2 - 3 = 3(t^2 - 1)$, $y\'(t) = 2t$.\nHorisontal tangent ($y\' = 0$): $t = 0$, punkt $(0, -4)$.\nVertikal tangent ($x\' = 0$): $t = \\pm 1$, punkter $(-2, -3)$ og $(2, -3)$.' },
          { label: 'b', task: '$\\begin{cases} x = \\sin t \\\\ y = \\cos 2t \\end{cases}$, $t \\in [0, 2\\pi]$', solution: '$x\'(t) = \\cos t$, $y\'(t) = -2\\sin 2t = -4\\sin t \\cos t$.\nHorisontal ($y\' = 0$): $\\sin t = 0$ eller $\\cos t = 0$, dvs. $t = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$.\nVertikal ($x\' = 0$): $\\cos t = 0$, dvs. $t = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$.\nMerk: Ved $t = \\frac{\\pi}{2}$ og $t = \\frac{3\\pi}{2}$ er både $x\' = 0$ og $y\' = 0$ (singulære punkter).' },
        ],
        solution: 'a) Horisontal ved $t = 0$, vertikal ved $t = \\pm 1$. b) Se løsning for singulære punkter.',
        hints: ['Horisontal tangent: $y\'(t) = 0$ og $x\'(t) \\neq 0$.', 'Vertikal tangent: $x\'(t) = 0$ og $y\'(t) \\neq 0$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r2-6-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-9',
        number: '6.1.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kurven $\\begin{cases} x = a\\cos^3 t \\\\ y = a\\sin^3 t \\end{cases}$ kalles en **astroide**.',
        subTasks: [
          { label: 'a', task: 'Vis at den kartesiske likningen kan skrives $x^{2/3} + y^{2/3} = a^{2/3}$.', solution: 'Vi har $\\cos t = \\left(\\frac{x}{a}\\right)^{1/3}$ og $\\sin t = \\left(\\frac{y}{a}\\right)^{1/3}$.\nBruker $\\cos^2 t + \\sin^2 t = 1$:\n$\\left(\\frac{x}{a}\\right)^{2/3} + \\left(\\frac{y}{a}\\right)^{2/3} = 1$\n$\\frac{x^{2/3}}{a^{2/3}} + \\frac{y^{2/3}}{a^{2/3}} = 1$\n$x^{2/3} + y^{2/3} = a^{2/3}$' },
          { label: 'b', task: 'Finn tangentvektoren og bestem hvor kurven har horisontale og vertikale tangenter.', solution: '$x\'(t) = -3a\\cos^2 t \\sin t$, $y\'(t) = 3a\\sin^2 t \\cos t$.\nHorisontal ($y\' = 0$): $\\sin^2 t \\cos t = 0$, dvs. $t = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$.\nVertikal ($x\' = 0$): $\\cos^2 t \\sin t = 0$, samme verdier.\nDisse er hjørnepunktene på astroiden: $(a, 0), (0, a), (-a, 0), (0, -a)$.' },
          { label: 'c', task: 'Beskriv formen på kurven for $a = 1$.', solution: 'Astroiden er en stjernelignende kurve med fire "spisser" (cusps) i punktene $(\\pm 1, 0)$ og $(0, \\pm 1)$. Kurven buer innover mellom spissene.' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['For a): Opphøy $\\cos t$ og $\\sin t$ i $\\frac{2}{3}$ og bruk den grunnleggende trigonometriske identiteten.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r2-6-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-10',
        number: '6.1.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kurve er gitt ved $\\begin{cases} x = t - \\sin t \\\\ y = 1 - \\cos t \\end{cases}$, $t \\in [0, 2\\pi]$ (en sykloid-bue).',
        subTasks: [
          { label: 'a', task: 'Finn startpunkt og sluttpunkt.', solution: 'Start ($t = 0$): $(0 - 0, 1 - 1) = (0, 0)$.\nSlutt ($t = 2\\pi$): $(2\\pi - 0, 1 - 1) = (2\\pi, 0)$.' },
          { label: 'b', task: 'Finn tangentvektoren og bestem hvor kurven har horisontal tangent.', solution: '$x\'(t) = 1 - \\cos t$, $y\'(t) = \\sin t$.\nHorisontal ($y\' = 0$): $\\sin t = 0$, dvs. $t = 0, \\pi, 2\\pi$.\nVed $t = 0$ og $t = 2\\pi$ er også $x\' = 0$ (singulære punkter/cusps).\nVed $t = \\pi$: punkt $(\\pi, 2)$, $x\'(\\pi) = 2 \\neq 0$. Horisontal tangent i $(\\pi, 2)$.' },
          { label: 'c', task: 'Hva skjer i punktene $t = 0$ og $t = 2\\pi$?', solution: 'Her er $x\'(t) = y\'(t) = 0$, så tangentvektoren er nullvektoren. Dette er **spisse punkter** (cusps) der kurven berører grunnlinjen $y = 0$. Kurven har en skarp spiss oppover i disse punktene.' },
        ],
        solution: 'Start/slutt: $(0,0)$ og $(2\\pi, 0)$. Horisontal tangent i $(\\pi, 2)$. Cusps i endepunktene.',
        hints: ['Et cusp (spisst punkt) oppstår når tangentvektoren er null.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r2-6-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-11',
        number: '6.1.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at kurven $\\begin{cases} x = t^2 \\\\ y = t^3 - 3t \\end{cases}$ krysser seg selv, og finn krysningspunktet.',
        solution: `Vi søker to ulike parameterverdier $t_1$ og $t_2$ som gir samme punkt.

$x$: $t_1^2 = t_2^2 \\Rightarrow t_2 = \\pm t_1$

Siden vi vil ha $t_1 \\neq t_2$, må $t_2 = -t_1$.

$y$: $t_1^3 - 3t_1 = t_2^3 - 3t_2$

Med $t_2 = -t_1$:
$t_1^3 - 3t_1 = (-t_1)^3 - 3(-t_1) = -t_1^3 + 3t_1$

$2t_1^3 - 6t_1 = 0$
$2t_1(t_1^2 - 3) = 0$
$t_1 = 0$ eller $t_1 = \\pm\\sqrt{3}$

For $t_1 = 0$ får vi $t_2 = 0$, som ikke er ulikt.

For $t_1 = \\sqrt{3}$ og $t_2 = -\\sqrt{3}$:
$x = (\\sqrt{3})^2 = 3$
$y = (\\sqrt{3})^3 - 3\\sqrt{3} = 3\\sqrt{3} - 3\\sqrt{3} = 0$

**Krysningspunktet er $(3, 0)$**, der kurven passerer ved $t = \\sqrt{3}$ og $t = -\\sqrt{3}$.`,
        hints: ['Kurven krysser seg selv når $(x(t_1), y(t_1)) = (x(t_2), y(t_2))$ for $t_1 \\neq t_2$.', 'Start med å løse $x(t_1) = x(t_2)$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r2-6-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-12',
        number: '6.1.12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn en parameterframstilling for hver av kurvene. (Flere svar er mulige.)',
        subTasks: [
          { label: 'a', task: 'Linjestykket fra $(1, 2)$ til $(4, 5)$', solution: '$\\begin{cases} x = 1 + 3t \\\\ y = 2 + 3t \\end{cases}, t \\in [0, 1]$\n(Ved $t=0$: $(1,2)$, ved $t=1$: $(4,5)$.)' },
          { label: 'b', task: 'Øvre halvdel av sirkelen $x^2 + y^2 = 16$', solution: '$\\begin{cases} x = 4\\cos t \\\\ y = 4\\sin t \\end{cases}, t \\in [0, \\pi]$' },
          { label: 'c', task: 'Den delen av parabelen $y = x^2$ fra $(−2, 4)$ til $(3, 9)$', solution: '$\\begin{cases} x = t \\\\ y = t^2 \\end{cases}, t \\in [-2, 3]$' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['For linjestykket: bruk retningsvektor og begrens $t$ slik at endepunktene stemmer.', 'For sirkelbue: velg parameterintervall for riktig del av sirkelen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r2-6-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-13',
        number: '6.1.13',
        type: 'classic',
        difficulty: 'medium',
        task: 'En ellipse har halvakser $a = 4$ og $b = 3$, og sentrum i $(1, -2)$.',
        subTasks: [
          { label: 'a', task: 'Finn en parameterframstilling for ellipsen.', solution: '$\\begin{cases} x = 1 + 4\\cos t \\\\ y = -2 + 3\\sin t \\end{cases}, t \\in [0, 2\\pi]$' },
          { label: 'b', task: 'Finn den kartesiske likningen.', solution: '$\\frac{(x-1)^2}{16} + \\frac{(y+2)^2}{9} = 1$' },
          { label: 'c', task: 'Finn de fire punktene der ellipsen krysser aksene (parallelle med koordinataksene gjennom sentrum).', solution: '$(5, -2)$, $(-3, -2)$, $(1, 1)$, $(1, -5)$' },
        ],
        solution: 'a) Se løsning. b) $\\frac{(x-1)^2}{16} + \\frac{(y+2)^2}{9} = 1$. c) $(5,-2), (-3,-2), (1,1), (1,-5)$',
        hints: ['Sentrum forskjøvet ellipse: $x = h + a\\cos t$, $y = k + b\\sin t$ der $(h, k)$ er sentrum.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r2-6-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-14',
        number: '6.1.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kurven $\\begin{cases} x = 3t^2 \\\\ y = t^3 - 3t \\end{cases}$ kalles en **Neilsk parabel** (eller semikubisk parabel).',
        subTasks: [
          { label: 'a', task: 'Vis at kurven er symmetrisk om $x$-aksen.', solution: 'Hvis $(x(t), y(t))$ er på kurven, er også $(x(-t), y(-t))$ på kurven.\n$x(-t) = 3(-t)^2 = 3t^2 = x(t)$\n$y(-t) = (-t)^3 - 3(-t) = -t^3 + 3t = -(t^3 - 3t) = -y(t)$\nAltså: $(x(t), -y(t))$ er også på kurven, som betyr symmetri om $x$-aksen.' },
          { label: 'b', task: 'Finn hvor kurven krysser $x$-aksen og beskriv tangentvektoren i disse punktene.', solution: '$y = 0$ når $t^3 - 3t = t(t^2 - 3) = 0$, dvs. $t = 0, \\pm\\sqrt{3}$.\n$t = 0$: $(0, 0)$, tangent $[0, -3]$ (peker nedover, vertikal).\n$t = \\sqrt{3}$: $(9, 0)$, tangent $[6\\sqrt{3}, 6]$.\n$t = -\\sqrt{3}$: $(9, 0)$, tangent $[-6\\sqrt{3}, -6]$.\nKurven har et cusp i origo og to greiner som møtes i $(9, 0)$ fra ulike retninger.' },
          { label: 'c', task: 'Eliminer parameteren og finn den kartesiske likningen.', solution: 'Fra $x = 3t^2$ får vi $t^2 = \\frac{x}{3}$.\n$y^2 = (t^3 - 3t)^2 = t^2(t^2 - 3)^2 = \\frac{x}{3}\\left(\\frac{x}{3} - 3\\right)^2 = \\frac{x}{3} \\cdot \\frac{(x-9)^2}{9} = \\frac{x(x-9)^2}{27}$\nAltså: $27y^2 = x(x-9)^2$ eller $y^2 = \\frac{x^3 - 18x^2 + 81x}{27}$.' },
        ],
        solution: 'Se deloppgavene. Kartesisk likning: $27y^2 = x(x-9)^2$.',
        hints: ['For symmetri: vis at $(x, y)$ på kurven betyr at $(x, -y)$ også er på kurven.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15
    {
      id: 'r2-6-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-15',
        number: '6.1.15',
        type: 'interactive',
        difficulty: 'medium',
        tool: 'geogebra-graph',
        geogebraAppType: 'graphing',
        task: 'Bruk GeoGebra til å utforske parameterkurver.',
        subTasks: [
          { label: 'a', task: 'Skriv inn `Curve(2cos(t), 2sin(t), t, 0, 2pi)` og beskriv hva du ser.', solution: 'En sirkel med radius 2 og sentrum i origo.' },
          { label: 'b', task: 'Endre til `Curve(3cos(t), 2sin(t), t, 0, 2pi)` og beskriv forskjellen.', solution: 'En ellipse med halvakse 3 i $x$-retning og halvakse 2 i $y$-retning.' },
          { label: 'c', task: 'Prøv `Curve(cos(3t), sin(2t), t, 0, 2pi)` og beskriv mønsteret.', solution: 'En Lissajous-kurve med et komplekst mønster. Kurven danner en figur som ligner på en bretzel eller sammenvevde løkker.' },
        ],
        solution: 'Utforsk og beskriv mønstrene.',
        hints: ['I GeoGebra brukes Curve(x(t), y(t), t, start, slutt) for parameterkurver.'],
        initialCommands: [''],
      },
    },

    // Oppgave 16
    {
      id: 'r2-6-1-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-16',
        number: '6.1.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En **kardioide** (hjerteformet kurve) har parameterframstillingen:\n$$\\begin{cases} x = a(2\\cos t - \\cos 2t) \\\\ y = a(2\\sin t - \\sin 2t) \\end{cases}, \\quad t \\in [0, 2\\pi]$$',
        subTasks: [
          { label: 'a', task: 'Finn punktet der $t = 0$, $t = \\frac{\\pi}{2}$, $t = \\pi$, og $t = \\frac{3\\pi}{2}$.', solution: '$t = 0$: $(2a - a, 0) = (a, 0)$\n$t = \\frac{\\pi}{2}$: $(0 - 0, 2a - 0) = (0, 2a)$\n$t = \\pi$: $(-2a - a, 0) = (-3a, 0)$\n$t = \\frac{3\\pi}{2}$: $(0 - 0, -2a - 0) = (0, -2a)$' },
          { label: 'b', task: 'Finn tangentvektoren og bestem hvor kurven har horisontal tangent.', solution: '$x\'(t) = a(-2\\sin t + 2\\sin 2t) = 2a(\\sin 2t - \\sin t)$\n$y\'(t) = a(2\\cos t - 2\\cos 2t) = 2a(\\cos t - \\cos 2t)$\n\nHorisontal tangent når $y\'(t) = 0$:\n$\\cos t - \\cos 2t = 0$\n$\\cos t - (2\\cos^2 t - 1) = 0$\n$2\\cos^2 t - \\cos t - 1 = 0$\n$(2\\cos t + 1)(\\cos t - 1) = 0$\n$\\cos t = -\\frac{1}{2}$ eller $\\cos t = 1$\n$t = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$ eller $t = 0$\n\nVed $t = 0$ er også $x\' = 0$ (cusp).\nHorisontale tangenter ved $t = \\frac{2\\pi}{3}$ og $t = \\frac{4\\pi}{3}$.' },
          { label: 'c', task: 'Beskriv kurven med egne ord.', solution: 'Kardioiden er en hjerteformet kurve med en spiss (cusp) i $(a, 0)$. Den strekker seg fra $(-3a, 0)$ til $(a, 0)$ og har maksimal bredde på $4a$.' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Bruk formelen $\\cos 2t = 2\\cos^2 t - 1$ for å løse likningen i b).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 17
    {
      id: 'r2-6-1-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-17',
        number: '6.1.17',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn en parameterframstilling for sirkelen som går med klokka, starter i punktet $(0, 3)$, og går én gang rundt.',
        solution: `Vi trenger en sirkel med radius 3 og sentrum i origo, som:
1. Starter i $(0, 3)$ ved $t = 0$
2. Går med klokka

Standard parametrisering $x = 3\\cos t$, $y = 3\\sin t$ starter i $(3, 0)$ og går mot klokka.

For å starte i $(0, 3)$, kan vi bruke $x = 3\\sin t$, $y = 3\\cos t$.
Ved $t = 0$: $(0, 3)$ ✓

La oss sjekke retningen ved $t = \\frac{\\pi}{2}$: $(3, 0)$.
Fra $(0, 3)$ til $(3, 0)$ er bevegelse nedover og til høyre - altså med klokka ✓

**Svar:**
$$\\begin{cases} x = 3\\sin t \\\\ y = 3\\cos t \\end{cases}, \\quad t \\in [0, 2\\pi]$$

Alternativt: $x = 3\\cos(-t + \\frac{\\pi}{2})$, $y = 3\\sin(-t + \\frac{\\pi}{2})$ som forenkles til det samme.`,
        hints: ['Standard parametrisering går mot klokka. Hvordan kan du endre retningen?', 'Bytte $\\sin$ og $\\cos$ endrer startpunkt og retning.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 18
    {
      id: 'r2-6-1-ex-block-18',
      type: 'exercise',
      exercise: {
        id: 'r2-6-1-ex-18',
        number: '6.1.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To partikler beveger seg i planet. Partikkel A følger banen $\\begin{cases} x = t \\\\ y = t^2 \\end{cases}$ og partikkel B følger banen $\\begin{cases} x = 2 - t \\\\ y = 4 - 4t + t^2 \\end{cases}$, der $t$ er tid i sekunder.',
        subTasks: [
          { label: 'a', task: 'Vis at begge partiklene beveger seg langs samme parabel.', solution: 'Partikkel A: $y = x^2$ (sett $t = x$).\nPartikkel B: $y = 4 - 4t + t^2 = (2-t)^2 = x^2$ (sett $x = 2-t$).\nBegge følger parabelen $y = x^2$.' },
          { label: 'b', task: 'Beskriv hvordan partiklene beveger seg.', solution: 'A: Ved $t = 0$ er den i $(0, 0)$. Beveger seg mot høyre langs parabelen (positive $x$-retning).\nB: Ved $t = 0$ er den i $(2, 4)$. Beveger seg mot venstre (negative $x$-retning) fordi $x = 2 - t$ avtar.' },
          { label: 'c', task: 'Finn når og hvor partiklene kolliderer (er på samme sted til samme tid).', solution: 'Kollisjon krever at posisjonene er like:\n$t = 2 - t \\Rightarrow 2t = 2 \\Rightarrow t = 1$\n\nVed $t = 1$:\nA: $(1, 1)$\nB: $(1, 1)$ ✓\n\n**Partiklene kolliderer ved $t = 1$ i punktet $(1, 1)$.**' },
        ],
        solution: 'Begge følger $y = x^2$. A går mot høyre, B mot venstre. Kollisjon ved $t = 1$ i $(1, 1)$.',
        hints: ['For kollisjon må begge koordinatene være like til samme tid.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [
    {
      id: 'r2-6-1-ex-1',
      number: '6.1.1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn punktene på kurven for de oppgitte verdiene av $t$.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-2',
      number: '6.1.2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Eliminer parameteren og finn den kartesiske likningen for kurven.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-3',
      number: '6.1.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn en parameterframstilling for ulike kurver.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-4',
      number: '6.1.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Tegn kurven gitt ved parameterframstillingen.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-5',
      number: '6.1.5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn tangentvektoren for kurven.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-6',
      number: '6.1.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Analyser bevegelsen til en partikkel.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-7',
      number: '6.1.7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn stigningstallet og likning for tangentlinjen.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-8',
      number: '6.1.8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn horisontale og vertikale tangenter.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-9',
      number: '6.1.9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Analyser en astroide.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-10',
      number: '6.1.10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Analyser en sykloid-bue.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-11',
      number: '6.1.11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Finn krysningspunktet for en selvkryssende kurve.',
      solution: 'Krysningspunktet er $(3, 0)$.',
    },
    {
      id: 'r2-6-1-ex-12',
      number: '6.1.12',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn parameterframstilling for gitte kurver.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-13',
      number: '6.1.13',
      type: 'classic',
      difficulty: 'medium',
      task: 'Analyser en forskjøvet ellipse.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-14',
      number: '6.1.14',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Analyser en Neilsk parabel.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-15',
      number: '6.1.15',
      type: 'interactive',
      difficulty: 'medium',
      tool: 'geogebra-graph',
      task: 'Utforsk parameterkurver i GeoGebra.',
      solution: 'Utforsk og beskriv mønstrene.',
    },
    {
      id: 'r2-6-1-ex-16',
      number: '6.1.16',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Analyser en kardioide.',
      solution: 'Se deloppgavene.',
    },
    {
      id: 'r2-6-1-ex-17',
      number: '6.1.17',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn parameterframstilling for sirkel med gitt startpunkt og retning.',
      solution: 'Se løsning.',
    },
    {
      id: 'r2-6-1-ex-18',
      number: '6.1.18',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Analyser kollisjonen mellom to partikler.',
      solution: 'Kollisjon ved $t = 1$ i $(1, 1)$.',
    },
  ],
};


export const CHAPTER_R2_6_2: TextbookChapter = {
  id: 'r2-6-2',
  courseId: 'r2',
  chapterNumber: '6.2',
  title: 'Derivasjon av vektorfunksjoner',
  description: 'Derivere kurver gitt ved parameterframstilling, finne tangent- og normalvektorer, hastighet, fart og buelengde.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke parameterframstilling til kurver',
    'derivere vektorfunksjoner',
    'finne tangentvektor og normalvektor til en kurve',
    'beregne hastighet og fart langs en kurve',
    'beregne buelengde',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-6-2-intro',
      type: 'text',
      content: `## Fra statiske kurver til bevegelse

I forrige kapittel larte vi om parameterframstilling av kurver. Na skal vi se på hvordan vi kan **derivere** vektorfunksjoner for a beskrive bevegelse langs en kurve.

Nar vi deriverer en vektorfunksjon, far vi informasjon om:
- **Retningen** kurven beveger seg i (tangentvektor)
- **Hastigheten** til et objekt som beveger seg langs kurven
- **Farten** (hvor raskt objektet beveger seg)
- **Buelengden** (hvor langt kurven strekker seg)

Dette har mange praktiske anvendelser:
- Beregne banen til en ball kastet gjennom luften
- Finne hastigheten til en bil i en sving
- Bestemme lengden av en sti eller vei
- Animasjon og bevegelse i dataspill`,
    },

    // ========== VEKTORFUNKSJONER ==========
    {
      id: 'r2-6-2-vektorfunksjoner',
      type: 'text',
      content: `## Vektorfunksjoner

En **vektorfunksjon** (eller **banekurve**) beskriver en kurve i planet ved hjelp av en parameter $t$.`,
    },

    {
      id: 'r2-6-2-def-vektorfunksjon',
      type: 'definition',
      title: 'Vektorfunksjon',
      content: `En **vektorfunksjon** i planet er en funksjon

$$\\vec{r}(t) = \\begin{pmatrix} x(t) \\\\ y(t) \\end{pmatrix}$$

der $x(t)$ og $y(t)$ er reelle funksjoner av parameteren $t$.

Vi kan ogsa skrive dette som $\\vec{r}(t) = (x(t), y(t))$ eller $\\vec{r}(t) = x(t)\\vec{i} + y(t)\\vec{j}$.

Parameteren $t$ representerer ofte **tid**, men kan ogsa vare en hvilken som helst annen variabel.`,
    },

    {
      id: 'r2-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Sirkel som vektorfunksjon',
      problem: `Beskriv sirkelen med radius 3 og sentrum i origo som en vektorfunksjon.`,
      solution: `**Løsning:**

Vi bruker parameterframstillingen for en sirkel:

$$\\vec{r}(t) = \\begin{pmatrix} 3\\cos t \\\\ 3\\sin t \\end{pmatrix}, \\quad t \\in [0, 2\\pi]$$

Her er:
- $x(t) = 3\\cos t$
- $y(t) = 3\\sin t$

Nar $t$ gar fra $0$ til $2\\pi$, beveger vi oss en gang rundt sirkelen mot klokken.

**Kontroll:** $x^2 + y^2 = 9\\cos^2 t + 9\\sin^2 t = 9(\\cos^2 t + \\sin^2 t) = 9$ \\checkmark`,
    },

    {
      id: 'r2-6-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Rettlinjet bevegelse',
      problem: `En partikkel starter i punktet $(1, 2)$ og beveger seg med konstant hastighet i retning $\\vec{v} = (3, 4)$. Skriv opp vektorfunksjonen for partikkelens bane.`,
      solution: `**Løsning:**

Startpunktet er $(1, 2)$, og partikkelen beveger seg langs retningsvektoren $(3, 4)$.

Vektorfunksjonen blir:

$$\\vec{r}(t) = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + t \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 1 + 3t \\\\ 2 + 4t \\end{pmatrix}$$

Her er:
- $x(t) = 1 + 3t$
- $y(t) = 2 + 4t$

Nar $t = 0$, er partikkelen i $(1, 2)$.
Nar $t = 1$, er partikkelen i $(4, 6)$.
Nar $t = 2$, er partikkelen i $(7, 10)$.

Partikkelen beveger seg langs en rett linje.`,
    },

    // ========== DERIVASJON AV VEKTORFUNKSJONER ==========
    {
      id: 'r2-6-2-derivasjon-intro',
      type: 'text',
      content: `## Derivasjon av vektorfunksjoner

For a derivere en vektorfunksjon, deriverer vi ganske enkelt hver komponent for seg.`,
    },

    {
      id: 'r2-6-2-def-derivasjon',
      type: 'definition',
      title: 'Den deriverte av en vektorfunksjon',
      content: `La $\\vec{r}(t) = (x(t), y(t))$ vare en vektorfunksjon der $x(t)$ og $y(t)$ er deriverbare.

Den **deriverte** av $\\vec{r}(t)$ er:

$$\\vec{r}'(t) = \\begin{pmatrix} x'(t) \\\\ y'(t) \\end{pmatrix}$$

Vi deriverer altsa hver komponent for seg med hensyn på $t$.`,
    },

    {
      id: 'r2-6-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Derivere en vektorfunksjon',
      problem: `Finn $\\vec{r}'(t)$ nar $\\vec{r}(t) = (t^2, t^3 - 2t)$.`,
      solution: `**Løsning:**

Vi deriverer hver komponent for seg:

$$x(t) = t^2 \\quad \\Rightarrow \\quad x'(t) = 2t$$

$$y(t) = t^3 - 2t \\quad \\Rightarrow \\quad y'(t) = 3t^2 - 2$$

Dermed er:

$$\\vec{r}'(t) = \\begin{pmatrix} 2t \\\\ 3t^2 - 2 \\end{pmatrix}$$`,
    },

    {
      id: 'r2-6-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Derivere trigonometrisk vektorfunksjon',
      problem: `La $\\vec{r}(t) = (3\\cos t, 3\\sin t)$ vare parameterframstillingen for en sirkel. Finn $\\vec{r}'(t)$.`,
      solution: `**Løsning:**

Vi deriverer hver komponent:

$$x(t) = 3\\cos t \\quad \\Rightarrow \\quad x'(t) = -3\\sin t$$

$$y(t) = 3\\sin t \\quad \\Rightarrow \\quad y'(t) = 3\\cos t$$

Dermed er:

$$\\vec{r}'(t) = \\begin{pmatrix} -3\\sin t \\\\ 3\\cos t \\end{pmatrix}$$`,
    },

    // ========== TANGENTVEKTOREN ==========
    {
      id: 'r2-6-2-tangent-intro',
      type: 'text',
      content: `## Tangentvektoren

Den deriverte $\\vec{r}'(t)$ har en viktig geometrisk betydning: den er en **tangentvektor** til kurven.`,
    },

    {
      id: 'r2-6-2-def-tangent',
      type: 'definition',
      title: 'Tangentvektor',
      content: `La $\\vec{r}(t)$ vare en vektorfunksjon. Den deriverte $\\vec{r}'(t)$ er en **tangentvektor** til kurven i punktet $\\vec{r}(t)$.

Tangentvektoren peker i den retningen kurven beveger seg nar $t$ oker.

Hvis $\\vec{r}'(t) \\neq \\vec{0}$, kan vi finne **enhetstangentvektoren**:

$$\\hat{T}(t) = \\frac{\\vec{r}'(t)}{|\\vec{r}'(t)|}$$`,
    },

    {
      id: 'r2-6-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Tangentvektor til sirkel',
      problem: `For sirkelen $\\vec{r}(t) = (3\\cos t, 3\\sin t)$, finn tangentvektoren for $t = \\frac{\\pi}{2}$ og vis at den star vinkelrett på posisjonsvektoren.`,
      solution: `**Løsning:**

Fra eksempel 4 har vi $\\vec{r}'(t) = (-3\\sin t, 3\\cos t)$.

For $t = \\frac{\\pi}{2}$:

$$\\vec{r}\\left(\\frac{\\pi}{2}\\right) = \\left(3\\cos\\frac{\\pi}{2}, 3\\sin\\frac{\\pi}{2}\\right) = (0, 3)$$

$$\\vec{r}'\\left(\\frac{\\pi}{2}\\right) = \\left(-3\\sin\\frac{\\pi}{2}, 3\\cos\\frac{\\pi}{2}\\right) = (-3, 0)$$

Tangentvektoren i punktet $(0, 3)$ er $(-3, 0)$, som peker i negativ $x$-retning.

**Sjekk ortogonalitet:**

$$\\vec{r}\\left(\\frac{\\pi}{2}\\right) \\cdot \\vec{r}'\\left(\\frac{\\pi}{2}\\right) = (0, 3) \\cdot (-3, 0) = 0 \\cdot (-3) + 3 \\cdot 0 = 0$$

Siden skalarproduktet er null, star vektorene vinkelrett på hverandre. Dette gir mening fordi tangentvektoren til en sirkel alltid er vinkelrett på radiusvektoren.`,
    },

    {
      id: 'r2-6-2-example-6',
      type: 'example',
      title: 'Eksempel 6: Tangentlinje til parabel',
      problem: `En kurve er gitt ved $\\vec{r}(t) = (t, t^2)$. Finn likningen for tangentlinjen i punktet der $t = 2$.`,
      solution: `**Løsning:**

**Punktet på kurven:**
$$\\vec{r}(2) = (2, 4)$$

**Tangentvektoren:**
$$\\vec{r}'(t) = (1, 2t)$$
$$\\vec{r}'(2) = (1, 4)$$

**Tangentlinjen** gar gjennom $(2, 4)$ med retningsvektor $(1, 4)$:

$$\\vec{\\ell}(s) = (2, 4) + s(1, 4) = (2 + s, 4 + 4s)$$

Pa kartesisk form: Stigningstallet er $\\frac{4}{1} = 4$.

$$y - 4 = 4(x - 2)$$
$$y = 4x - 4$$`,
    },

    // ========== NORMALVEKTOREN ==========
    {
      id: 'r2-6-2-normal-intro',
      type: 'text',
      content: `## Normalvektoren

Normalvektoren star vinkelrett på tangentvektoren og peker mot "innsiden" av kurven.`,
    },

    {
      id: 'r2-6-2-def-normal',
      type: 'definition',
      title: 'Normalvektor',
      content: `Hvis tangentvektoren er $\\vec{r}'(t) = (a, b)$, er **normalvektoren**:

$$\\vec{n}(t) = (-b, a) \\quad \\text{eller} \\quad \\vec{n}(t) = (b, -a)$$

Begge disse star vinkelrett på tangentvektoren. Den forste er rotert $90°$ mot klokken, den andre $90°$ med klokken.

**Enhetsnormalvektoren** er:

$$\\hat{N}(t) = \\frac{\\vec{n}(t)}{|\\vec{n}(t)|}$$`,
    },

    {
      id: 'r2-6-2-note-normal',
      type: 'note',
      content: `For a sjekke at normalvektoren star vinkelrett på tangentvektoren, beregn skalarproduktet:

$$(a, b) \\cdot (-b, a) = -ab + ab = 0 \\quad \\checkmark$$

Skalarproduktet er null, sa vektorene er ortogonale.`,
    },

    {
      id: 'r2-6-2-example-7',
      type: 'example',
      title: 'Eksempel 7: Tangent- og normalvektor',
      problem: `For kurven $\\vec{r}(t) = (t^2, t^3)$, finn tangent- og normalvektoren i punktet der $t = 1$.`,
      solution: `**Løsning:**

**Punktet:**
$$\\vec{r}(1) = (1, 1)$$

**Tangentvektoren:**
$$\\vec{r}'(t) = (2t, 3t^2)$$
$$\\vec{r}'(1) = (2, 3)$$

**Normalvektoren** (rotert $90°$ mot klokken):
$$\\vec{n}(1) = (-3, 2)$$

**Kontroll:** $(2, 3) \\cdot (-3, 2) = -6 + 6 = 0$ \\checkmark`,
    },

    // ========== HASTIGHETSVEKTOREN ==========
    {
      id: 'r2-6-2-hastighet-intro',
      type: 'text',
      content: `## Hastighetsvektoren

Nar parameteren $t$ representerer tid, far tangentvektoren en fysisk tolkning som **hastighetsvektor**.`,
    },

    {
      id: 'r2-6-2-def-hastighet',
      type: 'definition',
      title: 'Hastighetsvektor',
      content: `La $\\vec{r}(t)$ beskrive posisjonen til en partikkel ved tid $t$.

**Hastighetsvektoren** er den deriverte av posisjonsvektoren:

$$\\vec{v}(t) = \\vec{r}'(t) = \\begin{pmatrix} x'(t) \\\\ y'(t) \\end{pmatrix}$$

Hastighetsvektoren angir:
- **Retningen** partikkelen beveger seg
- **Farten** (via lengden $|\\vec{v}(t)|$)`,
    },

    {
      id: 'r2-6-2-example-8',
      type: 'example',
      title: 'Eksempel 8: Hastighetsvektor for kast',
      problem: `En ball kastes fra bakken med starthastighet $20$ m/s i en vinkel på $60°$ med horisontalplanet. Finn hastighetsvektoren som funksjon av tid. (Bruk $g = 10$ m/s².)`,
      solution: `**Løsning:**

**Starthastighet:**
- Horisontal komponent: $v_{0x} = 20 \\cos 60° = 10$ m/s
- Vertikal komponent: $v_{0y} = 20 \\sin 60° = 10\\sqrt{3}$ m/s

**Posisjonsvektoren:**
$$\\vec{r}(t) = \\begin{pmatrix} 10t \\\\ 10\\sqrt{3}t - 5t^2 \\end{pmatrix}$$

**Hastighetsvektoren:**
$$\\vec{v}(t) = \\vec{r}'(t) = \\begin{pmatrix} 10 \\\\ 10\\sqrt{3} - 10t \\end{pmatrix}$$

For $t = 0$: $\\vec{v}(0) = (10, 10\\sqrt{3})$ (starthastigheten)

For $t = \\sqrt{3}$: $\\vec{v}(\\sqrt{3}) = (10, 0)$ (toppunktet, kun horisontal bevegelse)`,
    },

    // ========== FART ==========
    {
      id: 'r2-6-2-fart-intro',
      type: 'text',
      content: `## Fart

**Fart** er lengden av hastighetsvektoren. Mens hastighet er en vektor med retning, er fart et tall som bare angir hvor raskt objektet beveger seg.`,
    },

    {
      id: 'r2-6-2-def-fart',
      type: 'definition',
      title: 'Fart',
      content: `**Farten** $v(t)$ til en partikkel med posisjon $\\vec{r}(t)$ er lengden av hastighetsvektoren:

$$v(t) = |\\vec{r}'(t)| = \\sqrt{(x'(t))^2 + (y'(t))^2}$$

Farten er alltid positiv (eller null).`,
    },

    {
      id: 'r2-6-2-example-9',
      type: 'example',
      title: 'Eksempel 9: Fart langs en sirkel',
      problem: `En partikkel beveger seg langs sirkelen $\\vec{r}(t) = (3\\cos t, 3\\sin t)$. Finn farten.`,
      solution: `**Løsning:**

**Hastighetsvektoren:**
$$\\vec{r}'(t) = (-3\\sin t, 3\\cos t)$$

**Farten:**
$$v(t) = |\\vec{r}'(t)| = \\sqrt{(-3\\sin t)^2 + (3\\cos t)^2}$$
$$= \\sqrt{9\\sin^2 t + 9\\cos^2 t}$$
$$= \\sqrt{9(\\sin^2 t + \\cos^2 t)}$$
$$= \\sqrt{9} = 3$$

Farten er **konstant lik 3** for alle $t$. Dette er typisk for bevegelse langs en sirkel med konstant vinkelhastighet.`,
    },

    {
      id: 'r2-6-2-example-10',
      type: 'example',
      title: 'Eksempel 10: Fart langs en parabel',
      problem: `En partikkel beveger seg langs kurven $\\vec{r}(t) = (t, t^2)$ for $t \\geq 0$. Finn farten som funksjon av $t$ og bestem farten nar $t = 2$.`,
      solution: `**Løsning:**

**Hastighetsvektoren:**
$$\\vec{r}'(t) = (1, 2t)$$

**Farten:**
$$v(t) = |\\vec{r}'(t)| = \\sqrt{1^2 + (2t)^2} = \\sqrt{1 + 4t^2}$$

**For $t = 2$:**
$$v(2) = \\sqrt{1 + 4 \\cdot 4} = \\sqrt{17} \\approx 4{,}12$$

Merk at farten oker med $t$. Nar $t = 0$ er farten $v(0) = 1$, og nar $t$ oker, oker ogsa farten.`,
    },

    // ========== BUELENGDE ==========
    {
      id: 'r2-6-2-buelengde-intro',
      type: 'text',
      content: `## Buelengde

**Buelengden** er den totale lengden av en kurve mellom to punkter. For å finne buelengden integrerer vi farten.`,
    },

    {
      id: 'r2-6-2-def-buelengde',
      type: 'definition',
      title: 'Buelengde',
      content: `La $\\vec{r}(t) = (x(t), y(t))$ vare en kurve for $t \\in [a, b]$.

**Buelengden** $L$ av kurven fra $t = a$ til $t = b$ er:

$$L = \\int_a^b |\\vec{r}'(t)|\\, dt = \\int_a^b \\sqrt{(x'(t))^2 + (y'(t))^2}\\, dt$$

Dette er det samme som a integrere farten over tid.`,
    },

    {
      id: 'r2-6-2-note-buelengde',
      type: 'note',
      content: `Intuitivt gir dette mening: Hvis du gar med konstant fart $v$ i tid $T$, tilbakelegger du en strekning $L = v \\cdot T$. Nar farten varierer, ma vi integrere.`,
    },

    {
      id: 'r2-6-2-example-11',
      type: 'example',
      title: 'Eksempel 11: Buelengde av sirkel',
      problem: `Finn omkretsen av sirkelen $\\vec{r}(t) = (3\\cos t, 3\\sin t)$ for $t \\in [0, 2\\pi]$.`,
      solution: `**Løsning:**

Fra eksempel 9 vet vi at farten er konstant lik 3.

**Buelengden:**
$$L = \\int_0^{2\\pi} |\\vec{r}'(t)|\\, dt = \\int_0^{2\\pi} 3\\, dt = 3t \\Big|_0^{2\\pi} = 3 \\cdot 2\\pi - 0 = 6\\pi$$

Omkretsen er $6\\pi$, som stemmer med formelen $2\\pi r = 2\\pi \\cdot 3 = 6\\pi$. \\checkmark`,
    },

    {
      id: 'r2-6-2-example-12',
      type: 'example',
      title: 'Eksempel 12: Buelengde av linjestykke',
      problem: `Finn lengden av linjestykket fra $(1, 2)$ til $(4, 6)$ ved hjelp av parameterframstilling og integrasjon.`,
      solution: `**Løsning:**

**Parameterframstilling:** Vi kan skrive linjestykket som
$$\\vec{r}(t) = (1 + 3t, 2 + 4t), \\quad t \\in [0, 1]$$

Nar $t = 0$: $(1, 2)$
Nar $t = 1$: $(4, 6)$

**Hastighetsvektor:**
$$\\vec{r}'(t) = (3, 4)$$

**Fart:**
$$|\\vec{r}'(t)| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$$

**Buelengde:**
$$L = \\int_0^1 5\\, dt = 5t \\Big|_0^1 = 5$$

**Kontroll med avstandsformelen:**
$$L = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = 5 \\quad \\checkmark$$`,
    },

    {
      id: 'r2-6-2-example-13',
      type: 'example',
      title: 'Eksempel 13: Buelengde av kurve',
      problem: `Finn buelengden av kurven $\\vec{r}(t) = (t, \\frac{2}{3}t^{3/2})$ for $t \\in [0, 3]$.`,
      solution: `**Løsning:**

**Hastighetsvektor:**
$$x'(t) = 1$$
$$y'(t) = \\frac{2}{3} \\cdot \\frac{3}{2}t^{1/2} = t^{1/2} = \\sqrt{t}$$

$$\\vec{r}'(t) = (1, \\sqrt{t})$$

**Fart:**
$$|\\vec{r}'(t)| = \\sqrt{1 + t}$$

**Buelengde:**
$$L = \\int_0^3 \\sqrt{1 + t}\\, dt$$

La $u = 1 + t$, da er $du = dt$.
Nar $t = 0$: $u = 1$
Nar $t = 3$: $u = 4$

$$L = \\int_1^4 \\sqrt{u}\\, du = \\int_1^4 u^{1/2}\\, du = \\frac{2}{3}u^{3/2}\\Big|_1^4$$
$$= \\frac{2}{3}(4^{3/2} - 1^{3/2}) = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$$

Buelengden er $\\frac{14}{3} \\approx 4{,}67$.`,
    },

    {
      id: 'r2-6-2-example-14',
      type: 'example',
      title: 'Eksempel 14: Akselerasjonsvektor',
      problem: `En partikkel har posisjon $\\vec{r}(t) = (t^2, t^3)$. Finn hastighetsvektoren, farten og akselerasjonsvektoren nar $t = 1$.`,
      solution: `**Løsning:**

**Posisjon:**
$$\\vec{r}(t) = (t^2, t^3)$$

**Hastighetsvektor (forste deriverte):**
$$\\vec{v}(t) = \\vec{r}'(t) = (2t, 3t^2)$$
$$\\vec{v}(1) = (2, 3)$$

**Fart:**
$$v(1) = |\\vec{v}(1)| = \\sqrt{2^2 + 3^2} = \\sqrt{13}$$

**Akselerasjonsvektor (andre deriverte):**
$$\\vec{a}(t) = \\vec{r}''(t) = (2, 6t)$$
$$\\vec{a}(1) = (2, 6)$$

Akselerasjonsvektoren viser hvordan hastigheten endrer seg.`,
    },

    {
      id: 'r2-6-2-example-15',
      type: 'example',
      title: 'Eksempel 15: Ellipse',
      problem: `En ellipse er gitt ved $\\vec{r}(t) = (4\\cos t, 2\\sin t)$ for $t \\in [0, 2\\pi]$.

a) Finn tangentvektoren nar $t = \\frac{\\pi}{4}$.
b) Finn farten nar $t = \\frac{\\pi}{4}$.`,
      solution: `**Løsning:**

**a) Tangentvektoren:**

$$\\vec{r}'(t) = (-4\\sin t, 2\\cos t)$$

For $t = \\frac{\\pi}{4}$:
$$\\vec{r}'\\left(\\frac{\\pi}{4}\\right) = \\left(-4 \\cdot \\frac{\\sqrt{2}}{2}, 2 \\cdot \\frac{\\sqrt{2}}{2}\\right) = (-2\\sqrt{2}, \\sqrt{2})$$

**b) Farten:**

$$v\\left(\\frac{\\pi}{4}\\right) = \\sqrt{(-2\\sqrt{2})^2 + (\\sqrt{2})^2} = \\sqrt{8 + 2} = \\sqrt{10}$$`,
    },

    {
      id: 'r2-6-2-example-16',
      type: 'example',
      title: 'Eksempel 16: Tilbakelagt strekning',
      problem: `En bil kjorer langs en vei beskrevet av $\\vec{r}(t) = (t^2, 2t)$ for $t \\in [0, 2]$ (posisjon i km, tid i timer). Hvor langt kjorer bilen?`,
      solution: `**Løsning:**

**Hastighetsvektor:**
$$\\vec{r}'(t) = (2t, 2)$$

**Fart:**
$$v(t) = |\\vec{r}'(t)| = \\sqrt{4t^2 + 4} = 2\\sqrt{t^2 + 1}$$

**Buelengde (tilbakelagt strekning):**
$$L = \\int_0^2 2\\sqrt{t^2 + 1}\\, dt$$

For å løse dette integralet bruker vi substitusjon $t = \\sinh u$ eller tabelloppslag.

Med formelen $\\int \\sqrt{t^2 + 1}\\, dt = \\frac{t}{2}\\sqrt{t^2 + 1} + \\frac{1}{2}\\ln|t + \\sqrt{t^2 + 1}| + C$:

$$L = 2 \\left[ \\frac{t}{2}\\sqrt{t^2 + 1} + \\frac{1}{2}\\ln|t + \\sqrt{t^2 + 1}| \\right]_0^2$$
$$= \\left[ t\\sqrt{t^2 + 1} + \\ln|t + \\sqrt{t^2 + 1}| \\right]_0^2$$
$$= 2\\sqrt{5} + \\ln(2 + \\sqrt{5}) - (0 + \\ln 1)$$
$$= 2\\sqrt{5} + \\ln(2 + \\sqrt{5})$$
$$\\approx 4{,}47 + 1{,}44 \\approx 5{,}92 \\text{ km}$$`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-6-2-oppsummering',
      type: 'theorem',
      title: 'Oppsummering av viktige formler',
      content: `La $\\vec{r}(t) = (x(t), y(t))$ vare en vektorfunksjon.

**Tangentvektor (hastighetsvektor):**
$$\\vec{r}'(t) = (x'(t), y'(t))$$

**Normalvektor:**
$$\\vec{n}(t) = (-y'(t), x'(t))$$

**Fart:**
$$v(t) = |\\vec{r}'(t)| = \\sqrt{(x'(t))^2 + (y'(t))^2}$$

**Buelengde:**
$$L = \\int_a^b |\\vec{r}'(t)|\\, dt = \\int_a^b \\sqrt{(x'(t))^2 + (y'(t))^2}\\, dt$$

**Akselerasjonsvektor:**
$$\\vec{a}(t) = \\vec{r}''(t) = (x''(t), y''(t))$$`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'r2-6-2-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // Oppgave 1
    {
      id: 'r2-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-1',
        number: '6.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn $\\vec{r}\'(t)$ for folgende vektorfunksjoner:',
        subTasks: [
          { label: 'a', task: '$\\vec{r}(t) = (2t, 3t^2)$', solution: '$\\vec{r}\'(t) = (2, 6t)$' },
          { label: 'b', task: '$\\vec{r}(t) = (t^3, t^2 - 1)$', solution: '$\\vec{r}\'(t) = (3t^2, 2t)$' },
          { label: 'c', task: '$\\vec{r}(t) = (\\sin t, \\cos t)$', solution: '$\\vec{r}\'(t) = (\\cos t, -\\sin t)$' },
          { label: 'd', task: '$\\vec{r}(t) = (e^t, e^{-t})$', solution: '$\\vec{r}\'(t) = (e^t, -e^{-t})$' },
        ],
        solution: 'Deriver hver komponent for seg.',
        hints: ['Bruk vanlige derivasjonsregler på hver komponent.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r2-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-2',
        number: '6.2.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn $\\vec{r}\'(t)$ og $\\vec{r}\'\'(t)$ for:',
        subTasks: [
          { label: 'a', task: '$\\vec{r}(t) = (4t - 1, t^2 + 2t)$', solution: '$\\vec{r}\'(t) = (4, 2t + 2)$, $\\vec{r}\'\'(t) = (0, 2)$' },
          { label: 'b', task: '$\\vec{r}(t) = (t^3, t^4)$', solution: '$\\vec{r}\'(t) = (3t^2, 4t^3)$, $\\vec{r}\'\'(t) = (6t, 12t^2)$' },
          { label: 'c', task: '$\\vec{r}(t) = (2\\cos t, 2\\sin t)$', solution: '$\\vec{r}\'(t) = (-2\\sin t, 2\\cos t)$, $\\vec{r}\'\'(t) = (-2\\cos t, -2\\sin t)$' },
        ],
        solution: 'Deriver to ganger.',
        hints: ['Den andre deriverte er den deriverte av den forste deriverte.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r2-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-3',
        number: '6.2.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'En partikkel beveger seg langs kurven $\\vec{r}(t) = (t^2, 2t)$.',
        subTasks: [
          { label: 'a', task: 'Finn posisjonen nar $t = 2$.', solution: '$\\vec{r}(2) = (4, 4)$' },
          { label: 'b', task: 'Finn hastighetsvektoren nar $t = 2$.', solution: '$\\vec{v}(2) = \\vec{r}\'(2) = (4, 2)$' },
          { label: 'c', task: 'Finn farten nar $t = 2$.', solution: '$v(2) = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}$' },
        ],
        solution: 'a) $(4, 4)$, b) $(4, 2)$, c) $2\\sqrt{5}$',
        hints: ['Farten er lengden av hastighetsvektoren.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r2-6-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-4',
        number: '6.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'For kurven $\\vec{r}(t) = (t, t^2)$, finn tangentvektoren og normalvektoren i punktet der $t = 1$.',
        solution: `**Tangentvektor:** $\\vec{r}'(1) = (1, 2)$

**Normalvektor:** $\\vec{n}(1) = (-2, 1)$ (eller $(2, -1)$)`,
        hints: ['Normalvektoren far du ved a bytte om komponentene og endre fortegn på en av dem.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r2-6-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-5',
        number: '6.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En sirkel har parameterframstillingen $\\vec{r}(t) = (5\\cos t, 5\\sin t)$.',
        subTasks: [
          { label: 'a', task: 'Finn tangentvektoren.', solution: '$\\vec{r}\'(t) = (-5\\sin t, 5\\cos t)$' },
          { label: 'b', task: 'Finn farten.', solution: '$v(t) = \\sqrt{25\\sin^2 t + 25\\cos^2 t} = 5$' },
          { label: 'c', task: 'Finn omkretsen ved å beregne buelengden for $t \\in [0, 2\\pi]$.', solution: '$L = \\int_0^{2\\pi} 5\\, dt = 10\\pi$' },
        ],
        solution: 'a) $(-5\\sin t, 5\\cos t)$, b) 5, c) $10\\pi$',
        hints: ['Farten langs en sirkel med konstant vinkelhastighet er konstant.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r2-6-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-6',
        number: '6.2.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn likningen for tangentlinjen til kurven $\\vec{r}(t) = (t^2 - 1, t^3)$ i punktet der $t = 1$.',
        solution: `**Punkt:** $\\vec{r}(1) = (0, 1)$

**Tangentvektor:** $\\vec{r}'(1) = (2, 3)$

**Tangentlinje:** $\\vec{\\ell}(s) = (0, 1) + s(2, 3) = (2s, 1 + 3s)$

Pa kartesisk form: Stigningstall $= \\frac{3}{2}$, sa $y - 1 = \\frac{3}{2}(x - 0)$, dvs. $y = \\frac{3}{2}x + 1$`,
        hints: ['Tangentlinjen gar gjennom punktet på kurven og har retning lik tangentvektoren.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r2-6-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-7',
        number: '6.2.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En partikkel beveger seg slik at $\\vec{r}(t) = (3t, 4t)$ for $t \\geq 0$ (posisjon i meter, tid i sekunder).',
        subTasks: [
          { label: 'a', task: 'Vis at partikkelen beveger seg langs en rett linje.', solution: 'Vi har $x = 3t$ og $y = 4t$. Dermed $y = \\frac{4}{3}x$, som er en rett linje gjennom origo.' },
          { label: 'b', task: 'Finn farten.', solution: '$\\vec{r}\'(t) = (3, 4)$, sa $v = \\sqrt{9 + 16} = 5$ m/s' },
          { label: 'c', task: 'Hvor lang strekning har partikkelen tilbakelagt etter 10 sekunder?', solution: '$L = v \\cdot t = 5 \\cdot 10 = 50$ meter' },
        ],
        solution: 'a) Linjen $y = \\frac{4}{3}x$, b) 5 m/s, c) 50 m',
        hints: ['Nar farten er konstant, er strekning = fart ganger tid.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r2-6-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-8',
        number: '6.2.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn buelengden av kurven $\\vec{r}(t) = (2t, t^2)$ for $t \\in [0, 1]$.',
        solution: `**Hastighetsvektor:** $\\vec{r}'(t) = (2, 2t)$

**Fart:** $v(t) = \\sqrt{4 + 4t^2} = 2\\sqrt{1 + t^2}$

**Buelengde:**
$L = \\int_0^1 2\\sqrt{1 + t^2}\\, dt = \\left[ t\\sqrt{1+t^2} + \\ln(t + \\sqrt{1+t^2}) \\right]_0^1$
$= \\sqrt{2} + \\ln(1 + \\sqrt{2}) - 0 - \\ln 1$
$= \\sqrt{2} + \\ln(1 + \\sqrt{2}) \\approx 2{,}30$`,
        hints: ['Du ma bruke integrasjonsteknikker eller oppslag for $\\int \\sqrt{1 + t^2}\\, dt$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r2-6-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-9',
        number: '6.2.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'En ball kastes horisontalt fra 80 m høyde med starthastighet 20 m/s. Posisjonsvektoren er $\\vec{r}(t) = (20t, 80 - 5t^2)$ (bruk $g = 10$ m/s²).',
        subTasks: [
          { label: 'a', task: 'Finn hastighetsvektoren.', solution: '$\\vec{v}(t) = (20, -10t)$' },
          { label: 'b', task: 'Finn farten som funksjon av tid.', solution: '$v(t) = \\sqrt{400 + 100t^2} = 10\\sqrt{4 + t^2}$' },
          { label: 'c', task: 'Hvor lang tid tar det for ballen treffer bakken?', solution: '$80 - 5t^2 = 0 \\Rightarrow t^2 = 16 \\Rightarrow t = 4$ s' },
          { label: 'd', task: 'Finn farten i det ballen treffer bakken.', solution: '$v(4) = 10\\sqrt{4 + 16} = 10\\sqrt{20} = 20\\sqrt{5} \\approx 44{,}7$ m/s' },
        ],
        solution: 'a) $(20, -10t)$, b) $10\\sqrt{4 + t^2}$, c) 4 s, d) $20\\sqrt{5}$ m/s',
        hints: ['Ballen treffer bakken nar $y = 0$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r2-6-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-10',
        number: '6.2.10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vis at tangentvektoren til sirkelen $\\vec{r}(t) = (R\\cos t, R\\sin t)$ alltid star vinkelrett på posisjonsvektoren.',
        solution: `**Posisjonsvektor:** $\\vec{r}(t) = (R\\cos t, R\\sin t)$

**Tangentvektor:** $\\vec{r}'(t) = (-R\\sin t, R\\cos t)$

**Skalarprodukt:**
$\\vec{r}(t) \\cdot \\vec{r}'(t) = R\\cos t \\cdot (-R\\sin t) + R\\sin t \\cdot R\\cos t$
$= -R^2\\sin t\\cos t + R^2\\sin t\\cos t = 0$

Siden skalarproduktet er null for alle $t$, star vektorene alltid vinkelrett på hverandre.`,
        hints: ['To vektorer er ortogonale nar skalarproduktet er null.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r2-6-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-11',
        number: '6.2.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En ellipse er gitt ved $\\vec{r}(t) = (3\\cos t, 2\\sin t)$ for $t \\in [0, 2\\pi]$.',
        subTasks: [
          { label: 'a', task: 'Finn tangentvektoren.', solution: '$\\vec{r}\'(t) = (-3\\sin t, 2\\cos t)$' },
          { label: 'b', task: 'Finn farten som funksjon av $t$.', solution: '$v(t) = \\sqrt{9\\sin^2 t + 4\\cos^2 t}$' },
          { label: 'c', task: 'Ved hvilke verdier av $t$ er farten størst og minst?', solution: 'Storst nar $\\sin^2 t = 1$ (dvs. $t = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$), da er $v = 3$. Minst nar $\\cos^2 t = 1$ (dvs. $t = 0, \\pi$), da er $v = 2$.' },
        ],
        solution: 'a) $(-3\\sin t, 2\\cos t)$, b) $\\sqrt{9\\sin^2 t + 4\\cos^2 t}$, c) Storst ($v=3$) nar $t = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$; minst ($v=2$) nar $t = 0, \\pi$',
        hints: ['For å finne maks/min av farten, analyser $v(t)^2 = 9\\sin^2 t + 4\\cos^2 t$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r2-6-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-12',
        number: '6.2.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn buelengden av kurven $\\vec{r}(t) = (\\cos^3 t, \\sin^3 t)$ for $t \\in [0, \\frac{\\pi}{2}]$. (Denne kurven kalles en astroide.)',
        solution: `**Hastighetsvektor:**
$x'(t) = -3\\cos^2 t \\sin t$
$y'(t) = 3\\sin^2 t \\cos t$

**Fart:**
$v(t) = \\sqrt{9\\cos^4 t \\sin^2 t + 9\\sin^4 t \\cos^2 t}$
$= 3|\\sin t \\cos t|\\sqrt{\\cos^2 t + \\sin^2 t}$
$= 3\\sin t \\cos t$ (for $t \\in [0, \\frac{\\pi}{2}]$)
$= \\frac{3}{2}\\sin 2t$

**Buelengde:**
$L = \\int_0^{\\pi/2} \\frac{3}{2}\\sin 2t\\, dt = \\frac{3}{2} \\cdot \\left[-\\frac{1}{2}\\cos 2t\\right]_0^{\\pi/2}$
$= \\frac{3}{4}(-\\cos\\pi + \\cos 0) = \\frac{3}{4}(1 + 1) = \\frac{3}{2}$`,
        hints: ['Bruk kjerneregelen ved derivasjon.', 'Skriv om $\\sin t \\cos t = \\frac{1}{2}\\sin 2t$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r2-6-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-13',
        number: '6.2.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En sykloid er kurven som et punkt på kanten av et rullende hjul beskriver. Hvis hjulet har radius $R$ og ruller langs $x$-aksen, er parameterframstillingen:\n\n$\\vec{r}(t) = (R(t - \\sin t), R(1 - \\cos t))$',
        subTasks: [
          { label: 'a', task: 'Finn hastighetsvektoren.', solution: '$\\vec{r}\'(t) = (R(1 - \\cos t), R\\sin t)$' },
          { label: 'b', task: 'Finn farten som funksjon av $t$.', solution: '$v(t) = R\\sqrt{(1-\\cos t)^2 + \\sin^2 t} = R\\sqrt{2 - 2\\cos t} = 2R\\sin\\frac{t}{2}$' },
          { label: 'c', task: 'Nar er farten null? Hva betyr dette fysisk?', solution: 'Farten er null nar $t = 0, 2\\pi, 4\\pi, \\ldots$ Dette er nar punktet er i kontakt med bakken - det star stille i det oyeblikket.' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Bruk identiteten $1 - \\cos t = 2\\sin^2\\frac{t}{2}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r2-6-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-14',
        number: '6.2.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En partikkel beveger seg slik at posisjonsvektoren er $\\vec{r}(t) = (e^t\\cos t, e^t\\sin t)$ for $t \\geq 0$.',
        subTasks: [
          { label: 'a', task: 'Finn hastighetsvektoren.', solution: '$\\vec{v}(t) = (e^t\\cos t - e^t\\sin t, e^t\\sin t + e^t\\cos t) = e^t(\\cos t - \\sin t, \\sin t + \\cos t)$' },
          { label: 'b', task: 'Finn farten som funksjon av $t$.', solution: '$v(t) = e^t\\sqrt{(\\cos t - \\sin t)^2 + (\\sin t + \\cos t)^2} = e^t\\sqrt{2}$' },
          { label: 'c', task: 'Vis at farten vokser eksponentielt.', solution: 'Vi har $v(t) = \\sqrt{2}e^t$, som er en eksponentialfunksjon med grunntal $e$. Farten dobles nar $t$ oker med $\\ln 2 \\approx 0{,}69$.' },
        ],
        solution: 'a) $e^t(\\cos t - \\sin t, \\sin t + \\cos t)$, b) $\\sqrt{2}e^t$, c) Farten vokser eksponentielt',
        hints: ['Bruk produktregelen: $(e^t\\cos t)\' = e^t\\cos t - e^t\\sin t$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15
    {
      id: 'r2-6-2-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-15',
        number: '6.2.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kurve har enhetstangentvektor $\\hat{T}(t) = \\frac{\\vec{r}\'(t)}{|\\vec{r}\'(t)|}$. For kurven $\\vec{r}(t) = (t, \\ln(\\cos t))$ for $t \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$:',
        subTasks: [
          { label: 'a', task: 'Finn $\\vec{r}\'(t)$.', solution: '$\\vec{r}\'(t) = (1, -\\tan t)$' },
          { label: 'b', task: 'Finn farten $|\\vec{r}\'(t)|$.', solution: '$|\\vec{r}\'(t)| = \\sqrt{1 + \\tan^2 t} = \\sqrt{\\sec^2 t} = |\\sec t| = \\sec t$ (for $t \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$)' },
          { label: 'c', task: 'Finn enhetstangentvektoren $\\hat{T}(t)$.', solution: '$\\hat{T}(t) = \\frac{1}{\\sec t}(1, -\\tan t) = (\\cos t, -\\sin t)$' },
        ],
        solution: 'a) $(1, -\\tan t)$, b) $\\sec t$, c) $(\\cos t, -\\sin t)$',
        hints: ['Husk at $(\\ln f(t))\' = \\frac{f\'(t)}{f(t)}$ og at $1 + \\tan^2 t = \\sec^2 t$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 16
    {
      id: 'r2-6-2-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-16',
        number: '6.2.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn buelengden av spiralen $\\vec{r}(t) = (t\\cos t, t\\sin t)$ for $t \\in [0, 2\\pi]$.',
        solution: `**Hastighetsvektor:**
$x'(t) = \\cos t - t\\sin t$
$y'(t) = \\sin t + t\\cos t$

**Fart:**
$v(t)^2 = (\\cos t - t\\sin t)^2 + (\\sin t + t\\cos t)^2$
$= \\cos^2 t - 2t\\sin t\\cos t + t^2\\sin^2 t + \\sin^2 t + 2t\\sin t\\cos t + t^2\\cos^2 t$
$= 1 + t^2$

Sa $v(t) = \\sqrt{1 + t^2}$

**Buelengde:**
$L = \\int_0^{2\\pi} \\sqrt{1 + t^2}\\, dt$
$= \\left[\\frac{t}{2}\\sqrt{1+t^2} + \\frac{1}{2}\\ln(t + \\sqrt{1+t^2})\\right]_0^{2\\pi}$
$= \\pi\\sqrt{1+4\\pi^2} + \\frac{1}{2}\\ln(2\\pi + \\sqrt{1+4\\pi^2})$
$\\approx 21{,}26$`,
        hints: ['Forkort uttrykket for $v(t)^2$ ved a bruke $\\sin^2 t + \\cos^2 t = 1$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 17
    {
      id: 'r2-6-2-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-17',
        number: '6.2.17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'La $\\vec{r}(t) = (a\\cos t, b\\sin t)$ vare en ellipse med halvakser $a$ og $b$ der $a > b > 0$.',
        subTasks: [
          { label: 'a', task: 'Finn farten $v(t)$ som funksjon av $t$.', solution: '$v(t) = \\sqrt{a^2\\sin^2 t + b^2\\cos^2 t}$' },
          { label: 'b', task: 'I hvilke punkter er farten størst?', solution: 'Farten er størst nar $\\sin^2 t = 1$, dvs. ved $(0, b)$ og $(0, -b)$ (endepunktene av den lille halvaksen). Da er $v = a$.' },
          { label: 'c', task: 'I hvilke punkter er farten minst?', solution: 'Farten er minst nar $\\cos^2 t = 1$, dvs. ved $(a, 0)$ og $(-a, 0)$ (endepunktene av den store halvaksen). Da er $v = b$.' },
        ],
        solution: 'a) $\\sqrt{a^2\\sin^2 t + b^2\\cos^2 t}$, b) Ved $(0, \\pm b)$, $v = a$, c) Ved $(\\pm a, 0)$, $v = b$',
        hints: ['Skriv $v^2 = a^2\\sin^2 t + b^2\\cos^2 t = b^2 + (a^2 - b^2)\\sin^2 t$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 18
    {
      id: 'r2-6-2-ex-block-18',
      type: 'exercise',
      exercise: {
        id: 'r2-6-2-ex-18',
        number: '6.2.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En partikkel beveger seg langs kurven $\\vec{r}(t) = (t^2, \\frac{2}{3}t^3)$ for $t \\geq 0$.',
        subTasks: [
          { label: 'a', task: 'Finn hastighetsvektoren og farten.', solution: '$\\vec{v}(t) = (2t, 2t^2)$, $v(t) = 2t\\sqrt{1 + t^2}$' },
          { label: 'b', task: 'Finn akselerasjonsvektoren.', solution: '$\\vec{a}(t) = (2, 4t)$' },
          { label: 'c', task: 'Finn buelengden fra $t = 0$ til $t = 2$.', solution: '$L = \\int_0^2 2t\\sqrt{1+t^2}\\, dt$. La $u = 1 + t^2$, $du = 2t\\, dt$. Nar $t=0$: $u=1$, nar $t=2$: $u=5$.\n$L = \\int_1^5 \\sqrt{u}\\, du = \\frac{2}{3}u^{3/2}\\big|_1^5 = \\frac{2}{3}(5\\sqrt{5} - 1) \\approx 6{,}79$' },
        ],
        solution: 'a) $(2t, 2t^2)$, $2t\\sqrt{1+t^2}$, b) $(2, 4t)$, c) $\\frac{2}{3}(5\\sqrt{5} - 1)$',
        hints: ['For buelengden, bruk substitusjon $u = 1 + t^2$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],

  exercises: [
    {
      id: 'r2-6-2-ex-1',
      number: '6.2.1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn $\\vec{r}\'(t)$ for folgende vektorfunksjoner:',
      subTasks: [
        { label: 'a', task: '$\\vec{r}(t) = (2t, 3t^2)$', solution: '$\\vec{r}\'(t) = (2, 6t)$' },
        { label: 'b', task: '$\\vec{r}(t) = (t^3, t^2 - 1)$', solution: '$\\vec{r}\'(t) = (3t^2, 2t)$' },
        { label: 'c', task: '$\\vec{r}(t) = (\\sin t, \\cos t)$', solution: '$\\vec{r}\'(t) = (\\cos t, -\\sin t)$' },
        { label: 'd', task: '$\\vec{r}(t) = (e^t, e^{-t})$', solution: '$\\vec{r}\'(t) = (e^t, -e^{-t})$' },
      ],
      solution: 'Deriver hver komponent for seg.',
      hints: ['Bruk vanlige derivasjonsregler på hver komponent.'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-2',
      number: '6.2.2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn $\\vec{r}\'(t)$ og $\\vec{r}\'\'(t)$ for vektorfunksjoner.',
      solution: 'Deriver to ganger.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-3',
      number: '6.2.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En partikkel beveger seg langs kurven $\\vec{r}(t) = (t^2, 2t)$.',
      solution: 'a) $(4, 4)$, b) $(4, 2)$, c) $2\\sqrt{5}$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-4',
      number: '6.2.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'For kurven $\\vec{r}(t) = (t, t^2)$, finn tangentvektoren og normalvektoren i punktet der $t = 1$.',
      solution: 'Tangent: $(1, 2)$, Normal: $(-2, 1)$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-5',
      number: '6.2.5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En sirkel har parameterframstillingen $\\vec{r}(t) = (5\\cos t, 5\\sin t)$.',
      solution: 'a) $(-5\\sin t, 5\\cos t)$, b) 5, c) $10\\pi$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-6',
      number: '6.2.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn likningen for tangentlinjen til kurven $\\vec{r}(t) = (t^2 - 1, t^3)$ i punktet der $t = 1$.',
      solution: '$y = \\frac{3}{2}x + 1$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-7',
      number: '6.2.7',
      type: 'classic',
      difficulty: 'medium',
      task: 'En partikkel beveger seg slik at $\\vec{r}(t) = (3t, 4t)$ for $t \\geq 0$.',
      solution: 'a) Linjen $y = \\frac{4}{3}x$, b) 5 m/s, c) 50 m',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-8',
      number: '6.2.8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn buelengden av kurven $\\vec{r}(t) = (2t, t^2)$ for $t \\in [0, 1]$.',
      solution: '$\\sqrt{2} + \\ln(1 + \\sqrt{2})$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-9',
      number: '6.2.9',
      type: 'classic',
      difficulty: 'medium',
      task: 'En ball kastes horisontalt fra 80 m høyde.',
      solution: 'a) $(20, -10t)$, b) $10\\sqrt{4 + t^2}$, c) 4 s, d) $20\\sqrt{5}$ m/s',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-10',
      number: '6.2.10',
      type: 'classic',
      difficulty: 'medium',
      task: 'Vis at tangentvektoren til en sirkel alltid star vinkelrett på posisjonsvektoren.',
      solution: 'Skalarproduktet er alltid null.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-11',
      number: '6.2.11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En ellipse er gitt ved $\\vec{r}(t) = (3\\cos t, 2\\sin t)$.',
      solution: 'Storst fart ved $(0, \\pm 2)$, minst ved $(\\pm 3, 0)$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-12',
      number: '6.2.12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Finn buelengden av astroiden.',
      solution: '$\\frac{3}{2}$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-13',
      number: '6.2.13',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Analyser sykloiden.',
      solution: 'Farten er null nar punktet er i kontakt med bakken.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-14',
      number: '6.2.14',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Analyser den logaritmiske spiralen.',
      solution: 'Farten vokser eksponentielt: $v(t) = \\sqrt{2}e^t$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-15',
      number: '6.2.15',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Finn enhetstangentvektoren for en gitt kurve.',
      solution: '$\\hat{T}(t) = (\\cos t, -\\sin t)$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-16',
      number: '6.2.16',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Finn buelengden av spiralen.',
      solution: '$\\approx 21{,}26$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-17',
      number: '6.2.17',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Analyser farten langs en generell ellipse.',
      solution: 'Storst ved endepunktene av lille halvakse, minst ved store halvakse.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'r2-6-2-ex-18',
      number: '6.2.18',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Komplett analyse av en kurve.',
      solution: 'Buelengde: $\\frac{2}{3}(5\\sqrt{5} - 1)$',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};


export const CHAPTER_R2_6_3: TextbookChapter = {
  id: 'r2-6-3',
  courseId: 'r2',
  chapterNumber: '6.3',
  title: 'Hastighet og akselerasjon',
  description: 'Bruke vektorfunksjoner til a analysere bevegelse, fart og akselerasjon i fysiske situasjoner.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke derivasjon til a analysere og tolke vektorfunksjoner som beskriver baner i rommet',
    'lose realfaglige problem som involverer fart og akselerasjon',
  ],
  prerequisites: ['r2-6-1', 'r2-6-2'],
  exercises: [],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-6-3-intro',
      type: 'text',
      content: `## Fra matematikk til fysikk

I forrige kapittel larte vi a derivere vektorfunksjoner. Na skal vi se hvordan dette brukes i fysikk til a beskrive bevegelse.

Nar et objekt beveger seg - enten det er en ball i luften, en planet rundt solen, eller en bil på en vei - kan vi beskrive posisjonen som en funksjon av tid. Denne funksjonen er en **vektorfunksjon**, og ved a derivere den far vi informasjon om hastighet og akselerasjon.

Dette er en av de viktigste anvendelsene av kalkulus i naturvitenskapen. Isaac Newton utviklet kalkulus nettopp for a kunne beskrive bevegelse matematisk.`,
    },

    // ========== POSISJON SOM VEKTORFUNKSJON ==========
    {
      id: 'r2-6-3-posisjon',
      type: 'text',
      content: `## Posisjon som vektorfunksjon

Nar et objekt beveger seg i planet, kan posisjonen til enhver tid $t$ beskrives med en **posisjonsvektor** $\\vec{r}(t)$.

I to dimensjoner skriver vi:

$$\\vec{r}(t) = [x(t), y(t)]$$

der $x(t)$ og $y(t)$ er koordinatene til objektet ved tid $t$.

I tre dimensjoner:

$$\\vec{r}(t) = [x(t), y(t), z(t)]$$

Posisjonsvektoren peker fra origo til objektets posisjon ved tid $t$. Nar tiden endrer seg, "tegner" spissen av $\\vec{r}(t)$ opp objektets **bane** eller **trajektorie**.`,
    },

    // Definisjon: Posisjonsvektor
    {
      id: 'r2-6-3-def-posisjon',
      type: 'definition',
      title: 'Posisjonsvektor',
      content: `**Posisjonsvektoren** $\\vec{r}(t)$ til et objekt er en vektorfunksjon som angir objektets posisjon i forhold til origo ved tidspunkt $t$.

I planet: $\\vec{r}(t) = [x(t), y(t)]$

I rommet: $\\vec{r}(t) = [x(t), y(t), z(t)]$`,
    },

    // Eksempel 1: Enkel posisjonsvektor
    {
      id: 'r2-6-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Rettlinjet bevegelse',
      problem: `Et objekt beveger seg langs en rett linje. Posisjonsvektoren er gitt ved:

$$\\vec{r}(t) = [2t + 1, 3t - 2]$$

der $t$ er tiden i sekunder og koordinatene er i meter.

a) Finn posisjonen ved $t = 0$, $t = 1$ og $t = 2$.
b) Beskriv bevegelsen.`,
      solution: `**Løsning:**

a) Vi setter inn verdiene for $t$:

Ved $t = 0$: $\\vec{r}(0) = [2 \\cdot 0 + 1, 3 \\cdot 0 - 2] = [1, -2]$

Ved $t = 1$: $\\vec{r}(1) = [2 \\cdot 1 + 1, 3 \\cdot 1 - 2] = [3, 1]$

Ved $t = 2$: $\\vec{r}(2) = [2 \\cdot 2 + 1, 3 \\cdot 2 - 2] = [5, 4]$

b) Objektet starter i punktet $(1, -2)$ og beveger seg langs en rett linje. For hvert sekund flytter det seg 2 meter i $x$-retning og 3 meter i $y$-retning.

Dette er rettlinjet bevegelse med konstant hastighet.`,
    },

    // Eksempel 2: Sirkelbevegelse
    {
      id: 'r2-6-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Sirkelbevegelse',
      problem: `En partikkel beveger seg i en sirkel med radius 3 meter. Posisjonsvektoren er:

$$\\vec{r}(t) = [3\\cos t, 3\\sin t]$$

der $t$ er tiden i sekunder.

a) Verifiser at partikkelen beveger seg på en sirkel med radius 3.
b) Finn posisjonen ved $t = 0$, $t = \\frac{\\pi}{2}$ og $t = \\pi$.`,
      solution: `**Løsning:**

a) Vi beregner avstanden fra origo:

$$|\\vec{r}(t)| = \\sqrt{(3\\cos t)^2 + (3\\sin t)^2}$$
$$= \\sqrt{9\\cos^2 t + 9\\sin^2 t}$$
$$= \\sqrt{9(\\cos^2 t + \\sin^2 t)}$$
$$= \\sqrt{9 \\cdot 1} = 3$$

Avstanden fra origo er alltid 3, sa partikkelen beveger seg på en sirkel med radius 3.

b) Posisjonene:

Ved $t = 0$: $\\vec{r}(0) = [3\\cos 0, 3\\sin 0] = [3, 0]$

Ved $t = \\frac{\\pi}{2}$: $\\vec{r}\\left(\\frac{\\pi}{2}\\right) = \\left[3\\cos \\frac{\\pi}{2}, 3\\sin \\frac{\\pi}{2}\\right] = [0, 3]$

Ved $t = \\pi$: $\\vec{r}(\\pi) = [3\\cos \\pi, 3\\sin \\pi] = [-3, 0]$

Partikkelen starter i $(3, 0)$ og beveger seg mot klokken rundt sirkelen.`,
    },

    // ========== HASTIGHETSVEKTOR ==========
    {
      id: 'r2-6-3-hastighet',
      type: 'text',
      content: `## Hastighetsvektor

**Hastighet** beskriver hvor raskt og i hvilken retning et objekt beveger seg. Matematisk defineres hastigheten som den deriverte av posisjonen med hensyn på tid.`,
    },

    // Definisjon: Hastighetsvektor
    {
      id: 'r2-6-3-def-hastighet',
      type: 'definition',
      title: 'Hastighetsvektor',
      content: `**Hastighetsvektoren** $\\vec{v}(t)$ er den deriverte av posisjonsvektoren:

$$\\vec{v}(t) = \\vec{r}'(t) = \\frac{d\\vec{r}}{dt}$$

I komponentform:
$$\\vec{v}(t) = [x'(t), y'(t)]$$

Hastighetsvektoren peker alltid i bevegelsesretningen og er **tangent** til banen.`,
    },

    // Teorem: Hastighet og tangent
    {
      id: 'r2-6-3-theorem-tangent',
      type: 'theorem',
      title: 'Hastighetsvektor og tangent',
      content: `Hastighetsvektoren $\\vec{v}(t) = \\vec{r}'(t)$ er tangent til banen i punktet $\\vec{r}(t)$.

Dette betyr at $\\vec{v}(t)$:
1. Peker i objektets momentane bevegelsesretning
2. Star vinkelrett på eventuelle normaler til banen
3. Har lengde lik objektets **fart**`,
    },

    // Eksempel 3: Hastighet ved rettlinjet bevegelse
    {
      id: 'r2-6-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Hastighet ved rettlinjet bevegelse',
      problem: `Et objekt har posisjonsvektor $\\vec{r}(t) = [2t + 1, 3t - 2]$.

Finn hastighetsvektoren $\\vec{v}(t)$.`,
      solution: `**Løsning:**

Vi deriverer komponent for komponent:

$$\\vec{v}(t) = \\vec{r}'(t) = [\\frac{d}{dt}(2t + 1), \\frac{d}{dt}(3t - 2)]$$
$$= [2, 3]$$

Hastighetsvektoren er konstant: $\\vec{v}(t) = [2, 3]$.

Dette bekrefter at objektet har konstant hastighet - det beveger seg med 2 m/s i $x$-retning og 3 m/s i $y$-retning.`,
    },

    // Eksempel 4: Hastighet ved sirkelbevegelse
    {
      id: 'r2-6-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Hastighet ved sirkelbevegelse',
      problem: `En partikkel beveger seg i en sirkel med posisjonsvektor $\\vec{r}(t) = [3\\cos t, 3\\sin t]$.

a) Finn hastighetsvektoren $\\vec{v}(t)$.
b) Vis at hastighetsvektoren alltid star vinkelrett på posisjonsvektoren.`,
      solution: `**Løsning:**

a) Vi deriverer:

$$\\vec{v}(t) = \\vec{r}'(t) = [\\frac{d}{dt}(3\\cos t), \\frac{d}{dt}(3\\sin t)]$$
$$= [-3\\sin t, 3\\cos t]$$

b) To vektorer star vinkelrett på hverandre hvis skalarproduktet er null:

$$\\vec{r}(t) \\cdot \\vec{v}(t) = [3\\cos t, 3\\sin t] \\cdot [-3\\sin t, 3\\cos t]$$
$$= 3\\cos t \\cdot (-3\\sin t) + 3\\sin t \\cdot 3\\cos t$$
$$= -9\\cos t \\sin t + 9\\sin t \\cos t$$
$$= 0$$

Skalarproduktet er alltid null, sa $\\vec{v}(t) \\perp \\vec{r}(t)$ for alle $t$.

Dette gir fysisk mening: ved sirkelbevegelse peker hastigheten langs tangenten, som er vinkelrett på radiusvektoren.`,
    },

    // ========== FART ==========
    {
      id: 'r2-6-3-fart',
      type: 'text',
      content: `## Fart

**Fart** er et skalar tall som angir hvor raskt objektet beveger seg, uavhengig av retning. Farten er lengden av hastighetsvektoren.`,
    },

    // Definisjon: Fart
    {
      id: 'r2-6-3-def-fart',
      type: 'definition',
      title: 'Fart',
      content: `**Farten** $v(t)$ til et objekt er lengden av hastighetsvektoren:

$$v(t) = |\\vec{v}(t)| = |\\vec{r}'(t)|$$

I to dimensjoner:
$$v(t) = \\sqrt{(x'(t))^2 + (y'(t))^2}$$

Fart er alltid et ikke-negativt tall og angis i enheter som m/s, km/h, osv.`,
    },

    // Note om hastighet vs fart
    {
      id: 'r2-6-3-note-fart',
      type: 'note',
      content: `**Hastighet vs. fart:**
- **Hastighet** er en vektor med bade storrelse og retning: $\\vec{v}(t)$
- **Fart** er et tall (skalar) som kun angir storrelsen: $v(t) = |\\vec{v}(t)|$

Pa engelsk:
- Hastighet = velocity (vector)
- Fart = speed (scalar)`,
    },

    // Eksempel 5: Beregne fart
    {
      id: 'r2-6-3-example-5',
      type: 'example',
      title: 'Eksempel 5: Beregne fart',
      problem: `En bil kjorer langs en kurve beskrevet av $\\vec{r}(t) = [t^2, 2t]$, der $t$ er i sekunder og posisjonen i meter.

a) Finn hastighetsvektoren $\\vec{v}(t)$.
b) Finn farten $v(t)$.
c) Hva er farten ved $t = 2$ sekunder?`,
      solution: `**Løsning:**

a) Hastighetsvektoren:
$$\\vec{v}(t) = \\vec{r}'(t) = [2t, 2]$$

b) Farten:
$$v(t) = |\\vec{v}(t)| = \\sqrt{(2t)^2 + 2^2} = \\sqrt{4t^2 + 4} = 2\\sqrt{t^2 + 1}$$

c) Ved $t = 2$:
$$v(2) = 2\\sqrt{2^2 + 1} = 2\\sqrt{5} \\approx 4{,}47 \\text{ m/s}$$

Farten ved $t = 2$ sekunder er $2\\sqrt{5} \\approx 4{,}47$ m/s.`,
    },

    // Eksempel 6: Fart ved sirkelbevegelse
    {
      id: 'r2-6-3-example-6',
      type: 'example',
      title: 'Eksempel 6: Fart ved sirkelbevegelse',
      problem: `En partikkel beveger seg i en sirkel med $\\vec{r}(t) = [3\\cos t, 3\\sin t]$.

Finn farten og vis at den er konstant.`,
      solution: `**Løsning:**

Fra Eksempel 4 har vi hastighetsvektoren:
$$\\vec{v}(t) = [-3\\sin t, 3\\cos t]$$

Farten blir:
$$v(t) = |\\vec{v}(t)| = \\sqrt{(-3\\sin t)^2 + (3\\cos t)^2}$$
$$= \\sqrt{9\\sin^2 t + 9\\cos^2 t}$$
$$= \\sqrt{9(\\sin^2 t + \\cos^2 t)}$$
$$= \\sqrt{9} = 3$$

Farten er konstant lik 3 m/s for alle $t$.

Dette er karakteristisk for **uniform sirkelbevegelse**: farten er konstant selv om hastigheten (retningen) endrer seg kontinuerlig.`,
    },

    // ========== AKSELERASJON ==========
    {
      id: 'r2-6-3-akselerasjon',
      type: 'text',
      content: `## Akselerasjon

**Akselerasjon** beskriver endringen i hastighet over tid. Matematisk er akselerasjonen den deriverte av hastigheten, eller den andrederiverte av posisjonen.`,
    },

    // Definisjon: Akselerasjonsvektor
    {
      id: 'r2-6-3-def-akselerasjon',
      type: 'definition',
      title: 'Akselerasjonsvektor',
      content: `**Akselerasjonsvektoren** $\\vec{a}(t)$ er den deriverte av hastighetsvektoren:

$$\\vec{a}(t) = \\vec{v}'(t) = \\vec{r}''(t)$$

I komponentform:
$$\\vec{a}(t) = [x''(t), y''(t)]$$

Akselerasjon males i $\\text{m/s}^2$ (meter per sekund i andre).`,
    },

    // Teorem: Sammenheng mellom r, v og a
    {
      id: 'r2-6-3-theorem-sammenheng',
      type: 'theorem',
      title: 'Sammenheng mellom posisjon, hastighet og akselerasjon',
      content: `For et objekt med posisjonsvektor $\\vec{r}(t)$ gjelder:

$$\\vec{v}(t) = \\vec{r}'(t) \\quad \\text{(hastighet = forstederiverte av posisjon)}$$

$$\\vec{a}(t) = \\vec{v}'(t) = \\vec{r}''(t) \\quad \\text{(akselerasjon = andrederiverte av posisjon)}$$

Omvendt, ved integrasjon:
$$\\vec{v}(t) = \\int \\vec{a}(t) \\, dt$$
$$\\vec{r}(t) = \\int \\vec{v}(t) \\, dt$$`,
    },

    // Eksempel 7: Akselerasjon ved sirkelbevegelse
    {
      id: 'r2-6-3-example-7',
      type: 'example',
      title: 'Eksempel 7: Akselerasjon ved sirkelbevegelse',
      problem: `En partikkel beveger seg i en sirkel med $\\vec{r}(t) = [3\\cos t, 3\\sin t]$.

a) Finn akselerasjonsvektoren $\\vec{a}(t)$.
b) Vis at akselerasjonen alltid peker mot sentrum.
c) Finn storrelsen på akselerasjonen.`,
      solution: `**Løsning:**

a) Vi deriverer hastighetsvektoren $\\vec{v}(t) = [-3\\sin t, 3\\cos t]$:

$$\\vec{a}(t) = \\vec{v}'(t) = [-3\\cos t, -3\\sin t]$$

b) Vi ser at:
$$\\vec{a}(t) = [-3\\cos t, -3\\sin t] = -[3\\cos t, 3\\sin t] = -\\vec{r}(t)$$

Akselerasjonen peker i motsatt retning av posisjonsvektoren, altsai **mot origo** (sentrum av sirkelen).

Dette kalles **sentripetalakselerasjon** - akselerasjonen som holder objektet i sirkelbanen.

c) Storrelsen:
$$|\\vec{a}(t)| = |-\\vec{r}(t)| = |\\vec{r}(t)| = 3$$

Akselerasjonen har konstant storrelse 3 m/s$^2$.`,
    },

    // Note om sentripetalakselerasjon
    {
      id: 'r2-6-3-note-sentripetal',
      type: 'note',
      content: `**Sentripetalakselerasjon:**

Ved uniform sirkelbevegelse (konstant fart $v$, radius $r$) gjelder:

$$|\\vec{a}| = \\frac{v^2}{r}$$

I vart eksempel: $v = 3$, $r = 3$, sa $|\\vec{a}| = \\frac{9}{3} = 3$ m/s$^2$. Dette stemmer med det vi beregnet!`,
    },

    // Eksempel 8: Akselerasjon som funksjon av tid
    {
      id: 'r2-6-3-example-8',
      type: 'example',
      title: 'Eksempel 8: Varierende akselerasjon',
      problem: `Et objekt har posisjonsvektor $\\vec{r}(t) = [t^3 - 3t, t^2]$.

a) Finn $\\vec{v}(t)$ og $\\vec{a}(t)$.
b) Finn akselerasjonen ved $t = 1$.
c) Nar er akselerasjonen lik null?`,
      solution: `**Løsning:**

a) Hastigheten:
$$\\vec{v}(t) = \\vec{r}'(t) = [3t^2 - 3, 2t]$$

Akselerasjonen:
$$\\vec{a}(t) = \\vec{v}'(t) = [6t, 2]$$

b) Ved $t = 1$:
$$\\vec{a}(1) = [6 \\cdot 1, 2] = [6, 2]$$

Storrelsen: $|\\vec{a}(1)| = \\sqrt{36 + 4} = \\sqrt{40} = 2\\sqrt{10}$ m/s$^2$.

c) Akselerasjonen er null nar $\\vec{a}(t) = [0, 0]$:
- $6t = 0 \\Rightarrow t = 0$
- $2 = 0$ (umulig)

Det finnes ingen $t$ der begge komponentene er null. Akselerasjonen er aldri null fordi $y$-komponenten alltid er 2.`,
    },

    // ========== SKRATT KAST ==========
    {
      id: 'r2-6-3-skratt-kast',
      type: 'text',
      content: `## Skratt kast (ballistisk bevegelse)

Et klassisk eksempel på bevegelse i planet er **skratt kast** - bevegelsen til et objekt som kastes med en viss utgangshastighet og pavirkes kun av tyngdekraften.

Vi antar:
- Ingen luftmotstand
- Konstant tyngdeakselerasjon $g \\approx 9{,}81 \\text{ m/s}^2$ nedover
- Objektet starter i origo ved $t = 0$

La utgangshastigheten vare $v_0$ med vinkel $\\alpha$ over horisontalplanet.`,
    },

    // Teorem: Bevegelseslikninger for skratt kast
    {
      id: 'r2-6-3-theorem-skratt-kast',
      type: 'theorem',
      title: 'Bevegelseslikninger for skratt kast',
      content: `For et objekt kastet fra origo med utgangshastighet $v_0$ i vinkel $\\alpha$ med horisontalplanet:

**Akselerasjon:**
$$\\vec{a}(t) = [0, -g]$$

**Hastighet:**
$$\\vec{v}(t) = [v_0 \\cos \\alpha, v_0 \\sin \\alpha - gt]$$

**Posisjon:**
$$\\vec{r}(t) = [v_0 t \\cos \\alpha, v_0 t \\sin \\alpha - \\frac{1}{2}gt^2]$$

Merk: $x$-komponenten er rettlinjet bevegelse med konstant hastighet, mens $y$-komponenten har konstant akselerasjon (fritt fall).`,
    },

    // Eksempel 9: Skratt kast beregning
    {
      id: 'r2-6-3-example-9',
      type: 'example',
      title: 'Eksempel 9: Skratt kast - fotball',
      problem: `En fotball sparkes fra bakken med utgangshastighet $20$ m/s i en vinkel på $30°$ med bakken. Bruk $g = 10$ m/s$^2$.

a) Skriv opp posisjonsvektoren $\\vec{r}(t)$.
b) Finn maksimal høyde.
c) Finn hvor langt ballen flyr (skuddlengden).`,
      solution: `**Løsning:**

Vi har $v_0 = 20$ m/s, $\\alpha = 30°$, $g = 10$ m/s$^2$.

Forst beregner vi:
- $\\cos 30° = \\frac{\\sqrt{3}}{2} \\approx 0{,}866$
- $\\sin 30° = \\frac{1}{2} = 0{,}5$

a) Posisjonsvektoren:
$$\\vec{r}(t) = [20t \\cdot \\cos 30°, 20t \\cdot \\sin 30° - \\frac{1}{2} \\cdot 10 \\cdot t^2]$$
$$= [20t \\cdot 0{,}866, 20t \\cdot 0{,}5 - 5t^2]$$
$$= [17{,}32t, 10t - 5t^2]$$

b) Maksimal høyde nas nar $v_y(t) = 0$:
$$v_y(t) = 20 \\sin 30° - 10t = 10 - 10t = 0$$
$$t = 1 \\text{ s}$$

Maksimal høyde:
$$y(1) = 10 \\cdot 1 - 5 \\cdot 1^2 = 10 - 5 = 5 \\text{ m}$$

c) Ballen lander nar $y(t) = 0$:
$$10t - 5t^2 = 0$$
$$5t(2 - t) = 0$$
$$t = 0 \\text{ eller } t = 2 \\text{ s}$$

Ved $t = 2$ s:
$$x(2) = 17{,}32 \\cdot 2 = 34{,}64 \\text{ m}$$

Skuddlengden er ca. $34{,}6$ m.`,
    },

    // Eksempel 10: Skratt kast med starhøyde
    {
      id: 'r2-6-3-example-10',
      type: 'example',
      title: 'Eksempel 10: Kast fra en høyde',
      problem: `En ball kastes horisontalt fra en klippe 80 meter over bakken med hastighet 15 m/s. Bruk $g = 10$ m/s$^2$.

a) Skriv opp $\\vec{r}(t)$ med origo på toppen av klippen.
b) Hvor lang tid tar det for ballen lander?
c) Hvor langt fra klippen lander ballen?
d) Hva er farten nar ballen treffer bakken?`,
      solution: `**Løsning:**

Horisontalt kast betyr $\\alpha = 0°$, sa $\\cos 0° = 1$ og $\\sin 0° = 0$.

a) Posisjonsvektoren:
$$\\vec{r}(t) = [15t, 0 - \\frac{1}{2} \\cdot 10 \\cdot t^2] = [15t, -5t^2]$$

(Negativ $y$ betyr nedover fra startpunktet.)

b) Ballen lander nar $y = -80$:
$$-5t^2 = -80$$
$$t^2 = 16$$
$$t = 4 \\text{ s}$$

c) Horisontal avstand:
$$x(4) = 15 \\cdot 4 = 60 \\text{ m}$$

d) Hastigheten ved landing:
$$\\vec{v}(t) = [15, -10t]$$
$$\\vec{v}(4) = [15, -40]$$

Farten:
$$v(4) = |\\vec{v}(4)| = \\sqrt{15^2 + (-40)^2} = \\sqrt{225 + 1600} = \\sqrt{1825} \\approx 42{,}7 \\text{ m/s}$$`,
    },

    // ========== GENERELL SIRKELBEVEGELSE ==========
    {
      id: 'r2-6-3-sirkel',
      type: 'text',
      content: `## Sirkelbevegelse

Vi har allerede sett på uniform sirkelbevegelse. Na skal vi utforske dette mer systematisk og se på tilfellet der farten varierer.`,
    },

    // Teorem: Uniform sirkelbevegelse
    {
      id: 'r2-6-3-theorem-uniform-sirkel',
      type: 'theorem',
      title: 'Uniform sirkelbevegelse',
      content: `For et objekt som beveger seg med konstant fart $v$ i en sirkel med radius $r$:

**Posisjonsvektor:**
$$\\vec{r}(t) = [r\\cos(\\omega t), r\\sin(\\omega t)]$$

der $\\omega = \\frac{v}{r}$ er **vinkelhastigheten** (rad/s).

**Hastighetsvektor:**
$$\\vec{v}(t) = [-r\\omega\\sin(\\omega t), r\\omega\\cos(\\omega t)]$$

**Fart:** $|\\vec{v}| = r\\omega = v$ (konstant)

**Akselerasjonsvektor:**
$$\\vec{a}(t) = [-r\\omega^2\\cos(\\omega t), -r\\omega^2\\sin(\\omega t)] = -\\omega^2 \\vec{r}(t)$$

**Sentripetalakselerasjon:** $|\\vec{a}| = r\\omega^2 = \\frac{v^2}{r}$`,
    },

    // Eksempel 11: Karusell
    {
      id: 'r2-6-3-example-11',
      type: 'example',
      title: 'Eksempel 11: Karusell',
      problem: `En karusell har radius 4 meter og gjor ett omdreiing på 8 sekunder.

a) Finn vinkelhastigheten $\\omega$.
b) Skriv opp posisjonsvektoren $\\vec{r}(t)$ for et barn som sitter ytterst.
c) Finn farten til barnet.
d) Finn sentripetalakselerasjonen.`,
      solution: `**Løsning:**

a) Vinkelhastigheten:

Ett omdreiing = $2\\pi$ radianer på 8 sekunder:
$$\\omega = \\frac{2\\pi}{8} = \\frac{\\pi}{4} \\text{ rad/s}$$

b) Posisjonsvektoren med $r = 4$:
$$\\vec{r}(t) = \\left[4\\cos\\left(\\frac{\\pi t}{4}\\right), 4\\sin\\left(\\frac{\\pi t}{4}\\right)\\right]$$

c) Farten:
$$v = r\\omega = 4 \\cdot \\frac{\\pi}{4} = \\pi \\approx 3{,}14 \\text{ m/s}$$

d) Sentripetalakselerasjonen:
$$|\\vec{a}| = r\\omega^2 = 4 \\cdot \\left(\\frac{\\pi}{4}\\right)^2 = 4 \\cdot \\frac{\\pi^2}{16} = \\frac{\\pi^2}{4} \\approx 2{,}47 \\text{ m/s}^2$$

Alternativt: $|\\vec{a}| = \\frac{v^2}{r} = \\frac{\\pi^2}{4}$ m/s$^2$.`,
    },

    // Eksempel 12: Planet i bane
    {
      id: 'r2-6-3-example-12',
      type: 'example',
      title: 'Eksempel 12: Satellitt i bane',
      problem: `En satellitt gar i en sirkulaer bane rundt Jorden med radius $r = 7000$ km og bruker $T = 90$ minutter på ett omdreiing.

a) Finn vinkelhastigheten.
b) Finn farten til satellitten.
c) Finn akselerasjonen mot Jorden.`,
      solution: `**Løsning:**

Gjor om til SI-enheter:
- $r = 7000 \\text{ km} = 7{,}0 \\times 10^6$ m
- $T = 90 \\text{ min} = 5400$ s

a) Vinkelhastigheten:
$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{5400} \\approx 1{,}16 \\times 10^{-3} \\text{ rad/s}$$

b) Farten:
$$v = r\\omega = 7{,}0 \\times 10^6 \\cdot 1{,}16 \\times 10^{-3} \\approx 8140 \\text{ m/s} \\approx 8{,}1 \\text{ km/s}$$

c) Akselerasjonen:
$$|\\vec{a}| = \\frac{v^2}{r} = \\frac{(8140)^2}{7{,}0 \\times 10^6} \\approx 9{,}5 \\text{ m/s}^2$$

Dette er nesten lik tyngdeakselerasjonen på jordoverflaten ($g \\approx 9{,}8$ m/s$^2$), noe som gir mening fysisk.`,
    },

    // ========== BEVEGELSE MED VARIERENDE FART ==========
    {
      id: 'r2-6-3-varierende',
      type: 'text',
      content: `## Bevegelse med varierende fart

Ikke all bevegelse har konstant fart. La oss se på noen eksempler der farten endrer seg over tid.`,
    },

    // Eksempel 13: Spiral bevegelse
    {
      id: 'r2-6-3-example-13',
      type: 'example',
      title: 'Eksempel 13: Spiralbevegelse',
      problem: `En partikkel beveger seg i en spiral gitt ved:
$$\\vec{r}(t) = [t\\cos t, t\\sin t]$$

a) Beskriv banen.
b) Finn hastighetsvektoren.
c) Finn farten som funksjon av $t$.`,
      solution: `**Løsning:**

a) Avstanden fra origo er $|\\vec{r}(t)| = \\sqrt{t^2\\cos^2 t + t^2\\sin^2 t} = |t|$.

For $t > 0$ oker avstanden lineært med tiden mens partikkelen roterer rundt origo. Dette er en **archimedisk spiral** som utvider seg utover.

b) Hastighetsvektoren (produktregelen):
$$\\vec{v}(t) = \\vec{r}'(t) = [\\cos t - t\\sin t, \\sin t + t\\cos t]$$

c) Farten:
$$v(t) = |\\vec{v}(t)| = \\sqrt{(\\cos t - t\\sin t)^2 + (\\sin t + t\\cos t)^2}$$

Utvider vi og forenkler:
$$= \\sqrt{\\cos^2 t - 2t\\cos t\\sin t + t^2\\sin^2 t + \\sin^2 t + 2t\\sin t\\cos t + t^2\\cos^2 t}$$
$$= \\sqrt{\\cos^2 t + \\sin^2 t + t^2(\\sin^2 t + \\cos^2 t)}$$
$$= \\sqrt{1 + t^2}$$

Farten oker med tiden: $v(t) = \\sqrt{1 + t^2}$.`,
    },

    // Eksempel 14: Finn posisjonen fra akselerasjon
    {
      id: 'r2-6-3-example-14',
      type: 'example',
      title: 'Eksempel 14: Fra akselerasjon til posisjon',
      problem: `Et objekt har akselerasjon $\\vec{a}(t) = [2, 6t]$, utgangshastighet $\\vec{v}(0) = [1, 0]$ og startposisjon $\\vec{r}(0) = [0, 0]$.

Finn $\\vec{r}(t)$.`,
      solution: `**Løsning:**

**Steg 1: Finn hastigheten ved integrasjon**

$$\\vec{v}(t) = \\int \\vec{a}(t) \\, dt = \\int [2, 6t] \\, dt = [2t + C_1, 3t^2 + C_2]$$

Bruker initialbetingelsen $\\vec{v}(0) = [1, 0]$:
$$[C_1, C_2] = [1, 0]$$

Altsai: $\\vec{v}(t) = [2t + 1, 3t^2]$

**Steg 2: Finn posisjonen ved integrasjon**

$$\\vec{r}(t) = \\int \\vec{v}(t) \\, dt = \\int [2t + 1, 3t^2] \\, dt = [t^2 + t + D_1, t^3 + D_2]$$

Bruker initialbetingelsen $\\vec{r}(0) = [0, 0]$:
$$[D_1, D_2] = [0, 0]$$

**Svar:**
$$\\vec{r}(t) = [t^2 + t, t^3]$$`,
    },

    // Eksempel 15: Praktisk anvendelse - prosjektil
    {
      id: 'r2-6-3-example-15',
      type: 'example',
      title: 'Eksempel 15: Prosjektil med luftmotstand',
      problem: `I virkeligheten pavirkes prosjektiler av luftmotstand. En forenklet modell gir akselerasjonen:
$$\\vec{a}(t) = [-0{,}1v_x, -10 - 0{,}1v_y]$$

der $v_x$ og $v_y$ er hastighetskomponentene.

Forklar fysisk hva de ulike leddene representerer.`,
      solution: `**Løsning:**

**Horisontal komponent:** $a_x = -0{,}1v_x$
- Negativ akselerasjon proporsjonal med $v_x$
- Dette representerer luftmotstand som bremser horisontal bevegelse
- Jo raskere objektet gar, desto storre er motstanden

**Vertikal komponent:** $a_y = -10 - 0{,}1v_y$
- Leddet $-10$ er tyngdeakselerasjonen (ned)
- Leddet $-0{,}1v_y$ er vertikal luftmotstand
- Nar objektet gar oppover ($v_y > 0$): bade tyngdekraft og luftmotstand virker nedover
- Nar objektet faller ($v_y < 0$): tyngdekraften virker ned, men luftmotstanden virker oppover (bremser fallet)

**Konsekvenser:**
- Objektet nar ikke sa hoyt som uten luftmotstand
- Rekkevidden blir kortere
- Objektet nar til slutt en **terminal hastighet** der luftmotstanden balanserer tyngdekraften`,
    },

    // Eksempel 16: Analyse av kompleks bane
    {
      id: 'r2-6-3-example-16',
      type: 'example',
      title: 'Eksempel 16: Sykloide',
      problem: `En sykloide er banen til et punkt på kanten av et hjul som ruller langs bakken. Posisjonsvektoren er:
$$\\vec{r}(t) = [t - \\sin t, 1 - \\cos t]$$

a) Finn $\\vec{v}(t)$ og $\\vec{a}(t)$.
b) Finn farten $v(t)$.
c) Ved hvilke tidspunkter er farten null?`,
      solution: `**Løsning:**

a) Hastigheten:
$$\\vec{v}(t) = \\vec{r}'(t) = [1 - \\cos t, \\sin t]$$

Akselerasjonen:
$$\\vec{a}(t) = \\vec{v}'(t) = [\\sin t, \\cos t]$$

b) Farten:
$$v(t) = |\\vec{v}(t)| = \\sqrt{(1 - \\cos t)^2 + \\sin^2 t}$$

Utvider:
$$= \\sqrt{1 - 2\\cos t + \\cos^2 t + \\sin^2 t}$$
$$= \\sqrt{1 - 2\\cos t + 1}$$
$$= \\sqrt{2 - 2\\cos t}$$
$$= \\sqrt{2(1 - \\cos t)}$$

Bruker identiteten $1 - \\cos t = 2\\sin^2\\frac{t}{2}$:
$$= \\sqrt{4\\sin^2\\frac{t}{2}} = 2\\left|\\sin\\frac{t}{2}\\right|$$

c) Farten er null nar $\\sin\\frac{t}{2} = 0$:
$$\\frac{t}{2} = n\\pi, \\quad n = 0, 1, 2, ...$$
$$t = 0, 2\\pi, 4\\pi, ...$$

Dette er tidspunktene der punktet på hjulet er i kontakt med bakken - da star det midlertidig stille!`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'r2-6-3-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // Oppgave 1: Grunnleggende posisjon og hastighet
    {
      id: 'r2-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-1',
        number: '6.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et objekt har posisjonsvektor $\\vec{r}(t) = [3t - 1, 2t + 4]$ der $t$ er i sekunder og koordinatene i meter.',
        subTasks: [
          { label: 'a', task: 'Finn posisjonen ved $t = 0$ og $t = 2$.', solution: 'Ved $t = 0$: $\\vec{r}(0) = [-1, 4]$. Ved $t = 2$: $\\vec{r}(2) = [5, 8]$.' },
          { label: 'b', task: 'Finn hastighetsvektoren $\\vec{v}(t)$.', solution: '$\\vec{v}(t) = \\vec{r}\'(t) = [3, 2]$' },
          { label: 'c', task: 'Finn farten.', solution: '$v = |\\vec{v}| = \\sqrt{3^2 + 2^2} = \\sqrt{13}$ m/s' },
          { label: 'd', task: 'Beskriv bevegelsen.', solution: 'Rettlinjet bevegelse med konstant hastighet $[3, 2]$ m/s og konstant fart $\\sqrt{13}$ m/s.' },
        ],
        solution: 'a) $[-1, 4]$ og $[5, 8]$, b) $[3, 2]$, c) $\\sqrt{13}$ m/s, d) Rettlinjet bevegelse med konstant hastighet.',
        hints: ['Sett inn verdier for $t$ i a)', 'Deriver komponent for komponent i b)', 'Farten er lengden av hastighetsvektoren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: Hastighet og akselerasjon
    {
      id: 'r2-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-2',
        number: '6.3.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et objekt har posisjonsvektor $\\vec{r}(t) = [t^2, t^3]$.',
        subTasks: [
          { label: 'a', task: 'Finn $\\vec{v}(t)$.', solution: '$\\vec{v}(t) = [2t, 3t^2]$' },
          { label: 'b', task: 'Finn $\\vec{a}(t)$.', solution: '$\\vec{a}(t) = [2, 6t]$' },
          { label: 'c', task: 'Finn hastigheten og akselerasjonen ved $t = 1$.', solution: '$\\vec{v}(1) = [2, 3]$ og $\\vec{a}(1) = [2, 6]$' },
          { label: 'd', task: 'Finn farten ved $t = 1$.', solution: '$v(1) = \\sqrt{4 + 9} = \\sqrt{13}$ m/s' },
        ],
        solution: 'a) $[2t, 3t^2]$, b) $[2, 6t]$, c) $[2, 3]$ og $[2, 6]$, d) $\\sqrt{13}$ m/s',
        hints: ['Hastigheten er forstederiverte av posisjonen', 'Akselerasjonen er den deriverte av hastigheten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Sirkelbevegelse
    {
      id: 'r2-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-3',
        number: '6.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En partikkel beveger seg langs en sirkel med posisjonsvektor $\\vec{r}(t) = [5\\cos(2t), 5\\sin(2t)]$.',
        subTasks: [
          { label: 'a', task: 'Finn radius og vinkelhastighet.', solution: 'Radius: $r = 5$, vinkelhastighet: $\\omega = 2$ rad/s' },
          { label: 'b', task: 'Finn $\\vec{v}(t)$ og vis at $\\vec{v} \\perp \\vec{r}$.', solution: '$\\vec{v}(t) = [-10\\sin(2t), 10\\cos(2t)]$. $\\vec{r} \\cdot \\vec{v} = -50\\cos(2t)\\sin(2t) + 50\\sin(2t)\\cos(2t) = 0$.' },
          { label: 'c', task: 'Finn farten.', solution: '$v = |\\vec{v}| = \\sqrt{100\\sin^2(2t) + 100\\cos^2(2t)} = 10$ m/s' },
          { label: 'd', task: 'Finn $\\vec{a}(t)$ og vis at $\\vec{a} = -\\omega^2\\vec{r}$.', solution: '$\\vec{a}(t) = [-20\\cos(2t), -20\\sin(2t)] = -4[5\\cos(2t), 5\\sin(2t)] = -4\\vec{r}$. Siden $\\omega = 2$, er $\\omega^2 = 4$, sa $\\vec{a} = -\\omega^2\\vec{r}$.' },
        ],
        solution: 'a) $r = 5$, $\\omega = 2$ rad/s, b) Se utregning, c) $v = 10$ m/s, d) Se utregning',
        hints: ['Sammenlign med standardformen $[r\\cos(\\omega t), r\\sin(\\omega t)]$', 'To vektorer er vinkelrette hvis skalarproduktet er null'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4: Fart som funksjon av tid
    {
      id: 'r2-6-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-4',
        number: '6.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et objekt har posisjonsvektor $\\vec{r}(t) = [e^t, e^{-t}]$.',
        subTasks: [
          { label: 'a', task: 'Finn $\\vec{v}(t)$.', solution: '$\\vec{v}(t) = [e^t, -e^{-t}]$' },
          { label: 'b', task: 'Finn farten $v(t)$.', solution: '$v(t) = \\sqrt{e^{2t} + e^{-2t}}$' },
          { label: 'c', task: 'Vis at farten har et minimum ved $t = 0$.', solution: 'La $f(t) = e^{2t} + e^{-2t}$. $f\'(t) = 2e^{2t} - 2e^{-2t} = 0$ gir $e^{4t} = 1$, sa $t = 0$. $f\'\'(0) = 4 + 4 = 8 > 0$, sa minimum. Ved $t = 0$: $v(0) = \\sqrt{2}$.' },
          { label: 'd', task: 'Hva er minimumsfarten?', solution: '$v_{min} = v(0) = \\sqrt{2}$ m/s' },
        ],
        solution: 'a) $[e^t, -e^{-t}]$, b) $\\sqrt{e^{2t} + e^{-2t}}$, c) Se utregning, d) $\\sqrt{2}$ m/s',
        hints: ['Husk at $(e^t)\' = e^t$ og $(e^{-t})\' = -e^{-t}$', 'For å finne minimum av farten, kan du derivere $v(t)^2$ og sette lik null'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5: Skratt kast
    {
      id: 'r2-6-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-5',
        number: '6.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En basketball kastes med utgangshastighet 12 m/s i en vinkel på 45 grader. Bruk $g = 10$ m/s$^2$.',
        subTasks: [
          { label: 'a', task: 'Finn komponentene av utgangshastigheten.', solution: '$v_{0x} = 12\\cos 45° = 12 \\cdot \\frac{\\sqrt{2}}{2} = 6\\sqrt{2}$ m/s, $v_{0y} = 12\\sin 45° = 6\\sqrt{2}$ m/s' },
          { label: 'b', task: 'Skriv opp $\\vec{r}(t)$.', solution: '$\\vec{r}(t) = [6\\sqrt{2}t, 6\\sqrt{2}t - 5t^2]$' },
          { label: 'c', task: 'Finn maksimal høyde.', solution: '$v_y = 0$ nar $6\\sqrt{2} - 10t = 0$, sa $t = 0{,}6\\sqrt{2}$ s. $y_{max} = 6\\sqrt{2} \\cdot 0{,}6\\sqrt{2} - 5(0{,}6\\sqrt{2})^2 = 7{,}2 - 3{,}6 = 3{,}6$ m' },
          { label: 'd', task: 'Finn skuddlengden.', solution: '$y = 0$ nar $6\\sqrt{2}t - 5t^2 = 0$, sa $t = 0$ eller $t = 1{,}2\\sqrt{2}$ s. $x = 6\\sqrt{2} \\cdot 1{,}2\\sqrt{2} = 14{,}4$ m' },
        ],
        solution: 'a) $6\\sqrt{2}$ m/s i begge retninger, b) $[6\\sqrt{2}t, 6\\sqrt{2}t - 5t^2]$, c) 3,6 m, d) 14,4 m',
        hints: ['$\\cos 45° = \\sin 45° = \\frac{\\sqrt{2}}{2}$', 'Maksimal høyde nas nar $v_y = 0$', 'Ballen lander nar $y = 0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6: Kast fra høyde
    {
      id: 'r2-6-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-6',
        number: '6.3.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En stein kastes horisontalt fra en bro 45 meter over vannet med hastighet 20 m/s. Bruk $g = 10$ m/s$^2$.',
        subTasks: [
          { label: 'a', task: 'Skriv opp $\\vec{r}(t)$, $\\vec{v}(t)$ og $\\vec{a}(t)$.', solution: '$\\vec{r}(t) = [20t, 45 - 5t^2]$, $\\vec{v}(t) = [20, -10t]$, $\\vec{a}(t) = [0, -10]$' },
          { label: 'b', task: 'Hvor lang tid tar det for steinen treffer vannet?', solution: '$45 - 5t^2 = 0 \\Rightarrow t^2 = 9 \\Rightarrow t = 3$ s' },
          { label: 'c', task: 'Hvor langt fra broen lander steinen?', solution: '$x(3) = 20 \\cdot 3 = 60$ m' },
          { label: 'd', task: 'Hva er farten nar steinen treffer vannet?', solution: '$\\vec{v}(3) = [20, -30]$, $v = \\sqrt{400 + 900} = \\sqrt{1300} \\approx 36{,}1$ m/s' },
        ],
        solution: 'a) Se utregning, b) 3 s, c) 60 m, d) $\\sqrt{1300} \\approx 36{,}1$ m/s',
        hints: ['Horisontalt kast betyr at $v_{0y} = 0$', 'Steinen treffer vannet nar $y = 0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7: Karuselloppgave
    {
      id: 'r2-6-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-7',
        number: '6.3.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En karusell har radius 3 meter og roterer med vinkelhastighet $\\omega = \\frac{\\pi}{3}$ rad/s.',
        subTasks: [
          { label: 'a', task: 'Skriv opp posisjonsvektoren for et barn ytterst på karusellen.', solution: '$\\vec{r}(t) = [3\\cos(\\frac{\\pi t}{3}), 3\\sin(\\frac{\\pi t}{3})]$' },
          { label: 'b', task: 'Finn farten til barnet.', solution: '$v = r\\omega = 3 \\cdot \\frac{\\pi}{3} = \\pi$ m/s' },
          { label: 'c', task: 'Finn sentripetalakselerasjonen.', solution: '$|\\vec{a}| = r\\omega^2 = 3 \\cdot \\frac{\\pi^2}{9} = \\frac{\\pi^2}{3}$ m/s$^2$' },
          { label: 'd', task: 'Hvor lang tid tar ett omdreiing?', solution: '$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{\\frac{\\pi}{3}} = 6$ s' },
        ],
        solution: 'a) $[3\\cos(\\frac{\\pi t}{3}), 3\\sin(\\frac{\\pi t}{3})]$, b) $\\pi$ m/s, c) $\\frac{\\pi^2}{3}$ m/s$^2$, d) 6 s',
        hints: ['Bruk standardformen for uniform sirkelbevegelse', 'Perioden er $T = \\frac{2\\pi}{\\omega}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8: Integrasjon fra akselerasjon
    {
      id: 'r2-6-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-8',
        number: '6.3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et objekt har akselerasjon $\\vec{a}(t) = [0, -10]$, utgangshastighet $\\vec{v}(0) = [15, 20]$ og startposisjon $\\vec{r}(0) = [0, 0]$.',
        subTasks: [
          { label: 'a', task: 'Finn $\\vec{v}(t)$ ved integrasjon.', solution: '$\\vec{v}(t) = [15, 20 - 10t]$' },
          { label: 'b', task: 'Finn $\\vec{r}(t)$ ved integrasjon.', solution: '$\\vec{r}(t) = [15t, 20t - 5t^2]$' },
          { label: 'c', task: 'Hva slags bevegelse er dette?', solution: 'Skratt kast med $v_0 = \\sqrt{15^2 + 20^2} = 25$ m/s og $\\tan\\alpha = \\frac{20}{15} = \\frac{4}{3}$.' },
          { label: 'd', task: 'Finn maksimal høyde og skuddlengde.', solution: 'Max høyde nar $v_y = 0$: $t = 2$ s, $y_{max} = 20$ m. Lander nar $y = 0$: $t = 4$ s, $x = 60$ m.' },
        ],
        solution: 'a) $[15, 20 - 10t]$, b) $[15t, 20t - 5t^2]$, c) Skratt kast, d) Max høyde 20 m, skuddlengde 60 m',
        hints: ['Integrer $\\vec{a}(t)$ og bruk initialbetingelser', 'Husk konstantledd ved integrasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9: Ellipsebane
    {
      id: 'r2-6-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-9',
        number: '6.3.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En partikkel beveger seg langs en ellipse med posisjonsvektor $\\vec{r}(t) = [4\\cos t, 2\\sin t]$.',
        subTasks: [
          { label: 'a', task: 'Verifiser at partikkelen beveger seg på ellipsen $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$.', solution: '$\\frac{(4\\cos t)^2}{16} + \\frac{(2\\sin t)^2}{4} = \\frac{16\\cos^2 t}{16} + \\frac{4\\sin^2 t}{4} = \\cos^2 t + \\sin^2 t = 1$ \\checkmark' },
          { label: 'b', task: 'Finn $\\vec{v}(t)$ og $\\vec{a}(t)$.', solution: '$\\vec{v}(t) = [-4\\sin t, 2\\cos t]$, $\\vec{a}(t) = [-4\\cos t, -2\\sin t]$' },
          { label: 'c', task: 'Finn farten $v(t)$ og bestem nar farten er størst og minst.', solution: '$v(t) = \\sqrt{16\\sin^2 t + 4\\cos^2 t} = \\sqrt{4 + 12\\sin^2 t}$. Max nar $\\sin^2 t = 1$: $v_{max} = 4$. Min nar $\\sin^2 t = 0$: $v_{min} = 2$.' },
          { label: 'd', task: 'Hvor på ellipsen er farten størst og minst?', solution: 'Storst fart ved $(0, \\pm 2)$ (endene av lille akse). Minst fart ved $(\\pm 4, 0)$ (endene av store akse).' },
        ],
        solution: 'a) Se utregning, b) $[-4\\sin t, 2\\cos t]$ og $[-4\\cos t, -2\\sin t]$, c) Max 4 m/s, min 2 m/s, d) Se losning',
        hints: ['Bruk identiteten $\\sin^2 t + \\cos^2 t = 1$', 'Farten varierer fordi halvaksene er forskjellige'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10: Kompleks bane
    {
      id: 'r2-6-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-10',
        number: '6.3.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et objekt følger banen $\\vec{r}(t) = [\\cos^3 t, \\sin^3 t]$ for $0 \\leq t \\leq 2\\pi$ (en astroide).',
        subTasks: [
          { label: 'a', task: 'Finn $\\vec{v}(t)$.', solution: '$\\vec{v}(t) = [-3\\cos^2 t \\sin t, 3\\sin^2 t \\cos t]$' },
          { label: 'b', task: 'Finn farten $v(t)$.', solution: '$v(t) = 3|\\sin t \\cos t|\\sqrt{\\cos^2 t + \\sin^2 t} = 3|\\sin t \\cos t| = \\frac{3}{2}|\\sin 2t|$' },
          { label: 'c', task: 'Ved hvilke $t$ er farten null?', solution: 'Nar $\\sin 2t = 0$: $t = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$' },
          { label: 'd', task: 'Hva er maksimal fart?', solution: 'Maks nar $|\\sin 2t| = 1$: $v_{max} = \\frac{3}{2}$ m/s' },
        ],
        solution: 'a) $[-3\\cos^2 t \\sin t, 3\\sin^2 t \\cos t]$, b) $\\frac{3}{2}|\\sin 2t|$, c) $t = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$, d) $\\frac{3}{2}$ m/s',
        hints: ['Bruk kjerneregelen: $(\\cos^3 t)\' = 3\\cos^2 t \\cdot (-\\sin t)$', 'Bruk at $2\\sin t \\cos t = \\sin 2t$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11: Vinkel mellom hastighet og akselerasjon
    {
      id: 'r2-6-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-11',
        number: '6.3.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et objekt har posisjonsvektor $\\vec{r}(t) = [t, t^2]$.',
        subTasks: [
          { label: 'a', task: 'Finn $\\vec{v}(t)$ og $\\vec{a}(t)$.', solution: '$\\vec{v}(t) = [1, 2t]$, $\\vec{a}(t) = [0, 2]$' },
          { label: 'b', task: 'Finn vinkelen $\\theta$ mellom $\\vec{v}$ og $\\vec{a}$ ved $t = 1$.', solution: 'Ved $t = 1$: $\\vec{v} = [1, 2]$, $\\vec{a} = [0, 2]$. $\\cos\\theta = \\frac{\\vec{v} \\cdot \\vec{a}}{|\\vec{v}||\\vec{a}|} = \\frac{4}{\\sqrt{5} \\cdot 2} = \\frac{2}{\\sqrt{5}}$. $\\theta = \\arccos\\frac{2}{\\sqrt{5}} \\approx 26{,}6°$' },
          { label: 'c', task: 'Finn $\\theta$ ved $t = 0$.', solution: 'Ved $t = 0$: $\\vec{v} = [1, 0]$, $\\vec{a} = [0, 2]$. $\\cos\\theta = 0$, sa $\\theta = 90°$.' },
          { label: 'd', task: 'Hva skjer med $\\theta$ nar $t \\to \\infty$?', solution: '$\\cos\\theta = \\frac{4t}{\\sqrt{1 + 4t^2} \\cdot 2} = \\frac{2t}{\\sqrt{1 + 4t^2}} \\to 1$ nar $t \\to \\infty$. $\\theta \\to 0°$.' },
        ],
        solution: 'a) $[1, 2t]$ og $[0, 2]$, b) Ca. 26,6 grader, c) 90 grader, d) $\\theta \\to 0°$',
        hints: ['Bruk formelen $\\cos\\theta = \\frac{\\vec{v} \\cdot \\vec{a}}{|\\vec{v}||\\vec{a}|}$', 'Nar hastigheten og akselerasjonen er parallelle, oker farten mest effektivt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12: Praktisk anvendelse
    {
      id: 'r2-6-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-12',
        number: '6.3.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En romsonde beveger seg på en spiralbane ut fra en planet. Posisjonsvektoren er $\\vec{r}(t) = [(10 + t)\\cos t, (10 + t)\\sin t]$ der $t$ er i timer og avstander i tusen kilometer.',
        subTasks: [
          { label: 'a', task: 'Finn avstanden fra planeten ved $t = 0$ og $t = 2\\pi$.', solution: 'Ved $t = 0$: $|\\vec{r}(0)| = 10$ tusen km. Ved $t = 2\\pi$: $|\\vec{r}(2\\pi)| = 10 + 2\\pi \\approx 16{,}3$ tusen km.' },
          { label: 'b', task: 'Finn $\\vec{v}(t)$.', solution: '$\\vec{v}(t) = [\\cos t - (10+t)\\sin t, \\sin t + (10+t)\\cos t]$' },
          { label: 'c', task: 'Finn farten ved $t = 0$.', solution: '$\\vec{v}(0) = [1, 10]$, $v(0) = \\sqrt{1 + 100} = \\sqrt{101} \\approx 10{,}05$ tusen km/time' },
          { label: 'd', task: 'Vis at farten oker over tid.', solution: '$v(t)^2 = (\\cos t - (10+t)\\sin t)^2 + (\\sin t + (10+t)\\cos t)^2 = 1 + (10+t)^2$. Siden $(10+t)^2$ oker med $t$, oker ogsa farten.' },
        ],
        solution: 'a) 10 og ca. 16,3 tusen km, b) Se utregning, c) $\\sqrt{101} \\approx 10{,}05$ tusen km/time, d) Se utregning',
        hints: ['Bruk produktregelen for derivasjon', 'Forenkle $v(t)^2$ for enklere analyse'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13: Bil i kurve
    {
      id: 'r2-6-3-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-13',
        number: '6.3.13',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bil kjorer gjennom en 90-graders sving som kan modelleres som en kvart sirkel med radius 50 meter. Bilen holder konstant fart 20 m/s.',
        subTasks: [
          { label: 'a', task: 'Finn vinkelhastigheten $\\omega$.', solution: '$\\omega = \\frac{v}{r} = \\frac{20}{50} = 0{,}4$ rad/s' },
          { label: 'b', task: 'Hvor lang tid tar svingen?', solution: 'En kvart sirkel = $\\frac{\\pi}{2}$ radianer. $t = \\frac{\\pi/2}{0{,}4} = \\frac{5\\pi}{4} \\approx 3{,}93$ s' },
          { label: 'c', task: 'Finn sentripetalakselerasjonen.', solution: '$|\\vec{a}| = \\frac{v^2}{r} = \\frac{400}{50} = 8$ m/s$^2$' },
          { label: 'd', task: 'Sammenlign med $g$. Ville passasjerene merke svingen?', solution: '$\\frac{|\\vec{a}|}{g} = \\frac{8}{10} = 0{,}8$. Akselerasjonen er 80% av tyngdeakselerasjonen - passasjerene ville definitivt merke svingen!' },
        ],
        solution: 'a) 0,4 rad/s, b) Ca. 3,93 s, c) 8 m/s$^2$, d) 0,8g - merkbar',
        hints: ['I en sving med konstant fart har vi uniform sirkelbevegelse', 'Sentripetalakselerasjon kan sammenlignes med g for a fa en fysisk forstaeelse'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14: Golf
    {
      id: 'r2-6-3-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-14',
        number: '6.3.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En golfball slas fra bakken med hastighet 50 m/s. For a oppna maksimal skuddlengde, hvilken vinkel bor brukes? Bruk $g = 10$ m/s$^2$.',
        subTasks: [
          { label: 'a', task: 'Skriv opp skuddlengden $R$ som funksjon av vinkelen $\\alpha$.', solution: 'Tid i luften: $t = \\frac{2v_0\\sin\\alpha}{g}$. Skuddlengde: $R = v_0\\cos\\alpha \\cdot t = \\frac{2v_0^2\\sin\\alpha\\cos\\alpha}{g} = \\frac{v_0^2\\sin 2\\alpha}{g}$' },
          { label: 'b', task: 'Finn vinkelen som gir maksimal skuddlengde.', solution: '$R$ er maksimal nar $\\sin 2\\alpha = 1$, dvs. $2\\alpha = 90°$, sa $\\alpha = 45°$' },
          { label: 'c', task: 'Beregn den maksimale skuddlengden.', solution: '$R_{max} = \\frac{50^2 \\cdot 1}{10} = \\frac{2500}{10} = 250$ m' },
          { label: 'd', task: 'Hva er maksimal høyde ved optimal vinkel?', solution: 'Ved $\\alpha = 45°$: $H = \\frac{v_0^2\\sin^2\\alpha}{2g} = \\frac{2500 \\cdot 0{,}5}{20} = 62{,}5$ m' },
        ],
        solution: 'a) $R = \\frac{v_0^2\\sin 2\\alpha}{g}$, b) 45 grader, c) 250 m, d) 62,5 m',
        hints: ['Bruk at $2\\sin\\alpha\\cos\\alpha = \\sin 2\\alpha$', '$\\sin 2\\alpha$ er maksimal nar $2\\alpha = 90°$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15: Tre dimensjoner
    {
      id: 'r2-6-3-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-15',
        number: '6.3.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En partikkel beveger seg i rommet med posisjonsvektor $\\vec{r}(t) = [\\cos t, \\sin t, t]$ (en skruelinje/heliks).',
        subTasks: [
          { label: 'a', task: 'Vis at partikkelen beveger seg på en sylinder med radius 1.', solution: 'Avstanden fra $z$-aksen er $\\sqrt{\\cos^2 t + \\sin^2 t} = 1$ for alle $t$.' },
          { label: 'b', task: 'Finn $\\vec{v}(t)$ og $\\vec{a}(t)$.', solution: '$\\vec{v}(t) = [-\\sin t, \\cos t, 1]$, $\\vec{a}(t) = [-\\cos t, -\\sin t, 0]$' },
          { label: 'c', task: 'Finn farten og vis at den er konstant.', solution: '$v = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt{2}$ (konstant)' },
          { label: 'd', task: 'Finn storrelsen på akselerasjonen.', solution: '$|\\vec{a}| = \\sqrt{\\cos^2 t + \\sin^2 t + 0} = 1$ (konstant)' },
        ],
        solution: 'a) Se utregning, b) $[-\\sin t, \\cos t, 1]$ og $[-\\cos t, -\\sin t, 0]$, c) $\\sqrt{2}$ (konstant), d) 1 (konstant)',
        hints: ['En heliks kombinerer sirkelbevegelse i $xy$-planet med lineær bevegelse langs $z$-aksen', 'Legg merke til at akselerasjonen kun har komponenter i $xy$-planet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 16: Sammensatt bevegelse
    {
      id: 'r2-6-3-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-16',
        number: '6.3.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En partikkel beveger seg med $\\vec{r}(t) = [2t, t^2, t^3]$ for $t \\geq 0$.',
        subTasks: [
          { label: 'a', task: 'Finn $\\vec{v}(t)$, $\\vec{a}(t)$ og farten $v(t)$.', solution: '$\\vec{v}(t) = [2, 2t, 3t^2]$, $\\vec{a}(t) = [0, 2, 6t]$, $v(t) = \\sqrt{4 + 4t^2 + 9t^4}$' },
          { label: 'b', task: 'Hva er minimumsfarten og nar oppnas den?', solution: 'Ved $t = 0$: $v(0) = 2$. $v\'(t) > 0$ for $t > 0$, sa minimum er ved $t = 0$.' },
          { label: 'c', task: 'Finn akselerasjonens storrelse ved $t = 1$.', solution: '$\\vec{a}(1) = [0, 2, 6]$, $|\\vec{a}(1)| = \\sqrt{0 + 4 + 36} = \\sqrt{40} = 2\\sqrt{10}$' },
          { label: 'd', task: 'Hva er begrensningen på farten nar $t \\to \\infty$?', solution: 'Nar $t$ er stor, dominerer $9t^4$-leddet: $v(t) \\approx 3t^2 \\to \\infty$. Farten oker uten grense.' },
        ],
        solution: 'a) $[2, 2t, 3t^2]$, $[0, 2, 6t]$, $\\sqrt{4 + 4t^2 + 9t^4}$. b) $v_{min} = 2$ ved $t = 0$. c) $2\\sqrt{10}$. d) Farten gar mot uendelig.',
        hints: ['Derivasjon komponent for komponent', 'Sjekk om $v(t)$ har et minimum ved a derivere'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 17: Analyse av bevegelse
    {
      id: 'r2-6-3-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 'r2-6-3-ex-17',
        number: '6.3.17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et prosjektil skytes med hastighet $v_0$ i vinkel $\\alpha$ fra høyde $h$ over bakken. Bruk $g$ for tyngdeakselerasjonen.',
        subTasks: [
          { label: 'a', task: 'Skriv opp $\\vec{r}(t)$ med origo på bakken rett under utskytningspunktet.', solution: '$\\vec{r}(t) = [v_0 t \\cos\\alpha, h + v_0 t \\sin\\alpha - \\frac{1}{2}gt^2]$' },
          { label: 'b', task: 'Finn tiden $t_L$ nar prosjektilet lander ($y = 0$).', solution: 'Los $h + v_0 t \\sin\\alpha - \\frac{1}{2}gt^2 = 0$: $t_L = \\frac{v_0\\sin\\alpha + \\sqrt{v_0^2\\sin^2\\alpha + 2gh}}{g}$' },
          { label: 'c', task: 'Finn skuddlengden $R = x(t_L)$.', solution: '$R = v_0 \\cos\\alpha \\cdot t_L = \\frac{v_0\\cos\\alpha(v_0\\sin\\alpha + \\sqrt{v_0^2\\sin^2\\alpha + 2gh})}{g}$' },
          { label: 'd', task: 'Sjekk at formelen gir $R = \\frac{v_0^2\\sin 2\\alpha}{g}$ nar $h = 0$.', solution: 'Nar $h = 0$: $t_L = \\frac{2v_0\\sin\\alpha}{g}$, sa $R = \\frac{2v_0^2\\sin\\alpha\\cos\\alpha}{g} = \\frac{v_0^2\\sin 2\\alpha}{g}$ \\checkmark' },
        ],
        solution: 'a) Se utregning, b) $t_L = \\frac{v_0\\sin\\alpha + \\sqrt{v_0^2\\sin^2\\alpha + 2gh}}{g}$, c) Se utregning, d) Se verifikasjon',
        hints: ['Startposisjonen er $(0, h)$', 'Bruk abc-formelen for andregradslikningen', 'Velg den positive losningen for $t_L$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapitlet har vi lart a bruke vektorfunksjoner til a analysere bevegelse:

**Grunnleggende sammenhenger:**
- **Posisjonsvektor:** $\\vec{r}(t) = [x(t), y(t)]$ (eller $[x(t), y(t), z(t)]$ i 3D)
- **Hastighetsvektor:** $\\vec{v}(t) = \\vec{r}'(t)$ - tangent til banen
- **Fart:** $v(t) = |\\vec{v}(t)|$ - hvor raskt objektet beveger seg
- **Akselerasjonsvektor:** $\\vec{a}(t) = \\vec{v}'(t) = \\vec{r}''(t)$

**Skratt kast:**
$$\\vec{r}(t) = [v_0 t \\cos\\alpha, v_0 t \\sin\\alpha - \\frac{1}{2}gt^2]$$

**Uniform sirkelbevegelse:**
- $\\vec{r}(t) = [r\\cos(\\omega t), r\\sin(\\omega t)]$
- Fart: $v = r\\omega$ (konstant)
- Sentripetalakselerasjon: $|\\vec{a}| = \\frac{v^2}{r} = r\\omega^2$
- Akselerasjonen peker mot sentrum

**Viktige poenger:**
- Hastighetsvektoren er alltid tangent til banen
- Ved sirkelbevegelse star hastigheten vinkelrett på radien
- Akselerasjon endrer hastigheten - enten storrelsen, retningen, eller begge`,
    },
  ],
};


export const CHAPTER_R2_6_4: TextbookChapter = {
  id: 'r2-6-4',
  courseId: 'r2',
  chapterNumber: '6.4',
  title: 'Matematisk modellering',
  description: 'Modellere reelle situasjoner med funksjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gi døme på ulike situasjonar som kan modellerast med ulike matematiske funksjonar',
    'tolke og validere matematiske modellar',
    'vurdere begrensningar ved matematiske modellar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-6-4-intro',
      type: 'text',
      content: `## Matematisk modellering

Matematisk modellering handler om å bruke matematikk til å beskrive, analysere og forutsi fenomener i den virkelige verden. En **matematisk modell** er en forenklet representasjon av virkeligheten uttrykt gjennom matematiske uttrykk, ligninger eller funksjoner.

Modellering er sentralt i mange fagfelt:
- **Fysikk:** Bevegelse, elektrisitet, bølger
- **Biologi:** Populasjonsvekst, spredning av sykdommer
- **Økonomi:** Renter, markedsutvikling, kostnader
- **Miljø:** Klimaendringer, forurensning
- **Medisin:** Nedbrytning av medisiner, tumorvekst`,
    },

    // ========== MODELLERINGSPROSESSEN ==========
    {
      id: 'r2-6-4-prosess-intro',
      type: 'text',
      content: `## Modelleringsprosessen

Matematisk modellering følger en systematisk prosess med flere steg:`,
    },

    {
      id: 'r2-6-4-def-prosess',
      type: 'definition',
      title: 'De fem stegene i modelleringsprosessen',
      content: `**1. Identifisere problemet**
- Forstå situasjonen og hva vi vil undersøke
- Identifisere relevante variabler og sammenhenger

**2. Velge modelltype**
- Bestemme hvilken type funksjon som passer best
- Basert på hvordan variablene endrer seg

**3. Bestemme parametere**
- Bruke data til å finne konstanter i modellen
- Tilpasse modellen til observasjoner

**4. Validere modellen**
- Sjekke om modellen gir fornuftige resultater
- Sammenligne med eksisterende data

**5. Tolke og anvende**
- Bruke modellen til prediksjon
- Vurdere begrensninger`,
    },

    // ========== VELGE FUNKSJONSTYPE ==========
    {
      id: 'r2-6-4-funksjonstyper-intro',
      type: 'text',
      content: `## Velge riktig funksjonstype

Valget av funksjonstype avhenger av hvordan den avhengige variabelen endrer seg med den uavhengige. Her er de viktigste typene:`,
    },

    // Lineær modell
    {
      id: 'r2-6-4-linear-def',
      type: 'definition',
      title: 'Lineær modell',
      content: `$$f(x) = ax + b$$

**Kjennetegn:**
- Konstant endringsrate (stigningstall $a$)
- Rett linje i grafisk framstilling
- $\\Delta y$ er proporsjonal med $\\Delta x$

**Brukes når:**
- Jevn vekst eller nedgang
- Kostnad med fast sats og variabel del
- Avstand ved konstant fart`,
    },

    // Eksponentiell modell
    {
      id: 'r2-6-4-exp-def',
      type: 'definition',
      title: 'Eksponentiell modell',
      content: `$$f(x) = a \\cdot b^x \\quad \\text{eller} \\quad f(x) = a \\cdot e^{kx}$$

**Kjennetegn:**
- Prosentvis vekst eller nedgang per tidsenhet
- Vekstfaktoren $b = 1 + r$ der $r$ er vekstraten
- Derivert proporsjonal med funksjonen selv: $f'(x) = k \\cdot f(x)$

**Brukes når:**
- Befolkningsvekst
- Radioaktiv nedbrytning
- Renters rente
- Temperaturendring (Newtons avkjølingslov)`,
    },

    // Polynommodell
    {
      id: 'r2-6-4-poly-def',
      type: 'definition',
      title: 'Polynommodell',
      content: `$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$$

**Kjennetegn:**
- Kan ha vendepunkter og ekstremalpunkter
- Andregradspolynomer gir parabelform
- Høyere grader gir mer komplekse kurver

**Brukes når:**
- Kastet bevegelse (andregradsfunksjon)
- Optimering av areal/volum
- Tilnærming av komplekse sammenhenger`,
    },

    // Trigonometrisk modell
    {
      id: 'r2-6-4-trig-def',
      type: 'definition',
      title: 'Trigonometrisk modell',
      content: `$$f(t) = A \\sin(\\omega t + \\varphi) + D$$

**Parametere:**
- $A$ = amplitude (halvparten av variasjonsbredden)
- $\\omega = \\frac{2\\pi}{T}$ der $T$ er perioden
- $\\varphi$ = faseforskyvning
- $D$ = vertikal forskyvning (middelverdi)

**Brukes når:**
- Periodiske fenomener
- Temperaturer gjennom året
- Tidevann
- Vekselsstrøm`,
    },

    // Potensmodell
    {
      id: 'r2-6-4-potens-def',
      type: 'definition',
      title: 'Potensmodell',
      content: `$$f(x) = a \\cdot x^n$$

**Kjennetegn:**
- Skaleres med potenser av $x$
- Dobbelt-logaritmisk plott gir rett linje

**Brukes når:**
- Geometriske størrelser (areal, volum)
- Allometriske sammenhenger i biologi
- Fysiske lover (gravitasjon, intensitet)`,
    },

    // Logistisk modell
    {
      id: 'r2-6-4-logistisk-def',
      type: 'definition',
      title: 'Logistisk modell',
      content: `$$f(t) = \\frac{K}{1 + Ce^{-rt}}$$

**Parametere:**
- $K$ = bæreevne (øvre grense)
- $r$ = vekstrate
- $C$ = konstant basert på startverdi

**Brukes når:**
- Begrenset vekst
- Spredning av sykdommer/rykter
- Adopsjon av ny teknologi
- Populasjonsvekst med begrensede ressurser`,
    },

    // ========== EKSEMPLER FRA VIRKELIGHETEN ==========
    {
      id: 'r2-6-4-eksempler-intro',
      type: 'text',
      content: `## Eksempler fra virkeligheten

La oss se på hvordan vi modellerer ulike situasjoner med passende funksjonstyper.`,
    },

    // Eksempel 1: Lineær - Taxitur
    {
      id: 'r2-6-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Taxikostnad (lineær modell)',
      problem: `En taxi tar 50 kr i startgebyr og 15 kr per kilometer.

a) Sett opp en modell for totalkostnaden $K(x)$ som funksjon av kjørt distanse $x$ kilometer.
b) Hva koster en tur på 8 km?
c) Hvor langt kan man kjøre for 200 kr?`,
      solution: `**Løsning:**

**a)** Kostnaden består av fast del (startgebyr) og variabel del (pris per km):
$$K(x) = 50 + 15x$$

**b)** For $x = 8$ km:
$$K(8) = 50 + 15 \\cdot 8 = 50 + 120 = 170 \\text{ kr}$$

**c)** Løser $K(x) = 200$:
$$50 + 15x = 200$$
$$15x = 150$$
$$x = 10 \\text{ km}$$`,
    },

    // Eksempel 2: Eksponentiell - Bakterievekst
    {
      id: 'r2-6-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Bakterievekst (eksponentiell modell)',
      problem: `En bakteriekoloni dobler seg hver 3. time. Ved tidspunkt $t = 0$ er det 1000 bakterier.

a) Sett opp en modell for antall bakterier $N(t)$ etter $t$ timer.
b) Hvor mange bakterier er det etter 12 timer?
c) Når er det 1 million bakterier?`,
      solution: `**Løsning:**

**a)** Bakteriene dobler seg hver 3. time, så vekstfaktoren per time er:
$$b = 2^{1/3} = \\sqrt[3]{2} \\approx 1{,}26$$

Modellen blir:
$$N(t) = 1000 \\cdot 2^{t/3}$$

eller ekvivalent: $N(t) = 1000 \\cdot e^{(\\ln 2/3) \\cdot t} = 1000 \\cdot e^{0{,}231t}$

**b)** Etter 12 timer:
$$N(12) = 1000 \\cdot 2^{12/3} = 1000 \\cdot 2^4 = 1000 \\cdot 16 = 16\\,000$$

**c)** Løser $N(t) = 1\\,000\\,000$:
$$1000 \\cdot 2^{t/3} = 1\\,000\\,000$$
$$2^{t/3} = 1000$$
$$\\frac{t}{3} = \\log_2 1000 = \\frac{\\ln 1000}{\\ln 2} \\approx 9{,}97$$
$$t \\approx 29{,}9 \\text{ timer}$$`,
    },

    // Eksempel 3: Eksponentiell - Radioaktiv nedbrytning
    {
      id: 'r2-6-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Radioaktiv nedbrytning (eksponentiell modell)',
      problem: `Karbon-14 har en halveringstid på 5730 år. Et fossilt bein inneholder 25% av den opprinnelige mengden C-14.

a) Sett opp en modell for gjenværende mengde C-14 som funksjon av tid.
b) Hvor gammelt er fossilet?`,
      solution: `**Løsning:**

**a)** Med halveringstid $T_{1/2} = 5730$ år får vi:
$$N(t) = N_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/5730}$$

eller med $e$-form: $N(t) = N_0 \\cdot e^{-\\lambda t}$ der $\\lambda = \\frac{\\ln 2}{5730} \\approx 0{,}000121$

**b)** Når $N(t) = 0{,}25 N_0$:
$$\\left(\\frac{1}{2}\\right)^{t/5730} = 0{,}25 = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2$$
$$\\frac{t}{5730} = 2$$
$$t = 11\\,460 \\text{ år}$$

Fossilet er ca. 11 500 år gammelt.`,
    },

    // Eksempel 4: Polynommodell - Kastet bevegelse
    {
      id: 'r2-6-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Kastet bevegelse (polynommodell)',
      problem: `En ball kastes rett opp med starthastighet $v_0 = 20$ m/s fra bakkenivå. Høyden over bakken etter $t$ sekunder er gitt ved:
$$h(t) = v_0 t - \\frac{1}{2}gt^2 = 20t - 4{,}9t^2$$

a) Når er ballen på topp?
b) Hva er maksimalhøyden?
c) Når treffer ballen bakken?`,
      solution: `**Løsning:**

**a)** Toppen nås når $h'(t) = 0$:
$$h'(t) = 20 - 9{,}8t = 0$$
$$t = \\frac{20}{9{,}8} \\approx 2{,}04 \\text{ s}$$

**b)** Maksimalhøyden:
$$h(2{,}04) = 20 \\cdot 2{,}04 - 4{,}9 \\cdot 2{,}04^2$$
$$= 40{,}8 - 20{,}4 \\approx 20{,}4 \\text{ m}$$

**c)** Ballen treffer bakken når $h(t) = 0$:
$$20t - 4{,}9t^2 = 0$$
$$t(20 - 4{,}9t) = 0$$
$$t = 0 \\text{ (start) eller } t = \\frac{20}{4{,}9} \\approx 4{,}08 \\text{ s}$$`,
    },

    // Eksempel 5: Trigonometrisk - Temperatur
    {
      id: 'r2-6-4-example-5',
      type: 'example',
      title: 'Eksempel 5: Årlig temperaturvariasjon (trigonometrisk modell)',
      problem: `Gjennomsnittstemperaturen i en by varierer mellom $-5°C$ i januar og $+15°C$ i juli. La $t$ være månedsnummer ($t = 1$ for januar).

a) Bestem parameterne $A$, $\\omega$, $\\varphi$ og $D$ for modellen $T(t) = A\\sin(\\omega t + \\varphi) + D$.
b) Hva er modellert temperatur i april ($t = 4$)?`,
      solution: `**Løsning:**

**a)**
- **Middelverdi:** $D = \\frac{-5 + 15}{2} = 5°C$
- **Amplitude:** $A = \\frac{15 - (-5)}{2} = 10°C$
- **Periode:** 12 måneder, så $\\omega = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$
- **Faseforskyvning:** Minimum i januar ($t = 1$), så:
  - For sinus: minimum når argumentet er $-\\frac{\\pi}{2}$
  - $\\frac{\\pi}{6} \\cdot 1 + \\varphi = -\\frac{\\pi}{2}$
  - $\\varphi = -\\frac{\\pi}{2} - \\frac{\\pi}{6} = -\\frac{2\\pi}{3}$

Modellen:
$$T(t) = 10\\sin\\left(\\frac{\\pi t}{6} - \\frac{2\\pi}{3}\\right) + 5$$

**b)** I april ($t = 4$):
$$T(4) = 10\\sin\\left(\\frac{4\\pi}{6} - \\frac{2\\pi}{3}\\right) + 5 = 10\\sin(0) + 5 = 5°C$$`,
    },

    // Eksempel 6: Potensmodell - Keplers lov
    {
      id: 'r2-6-4-example-6',
      type: 'example',
      title: 'Eksempel 6: Keplers tredje lov (potensmodell)',
      problem: `Keplers tredje lov sier at kvadratet av en planets omløpstid $T$ er proporsjonalt med kuben av gjennomsnittlig avstand $r$ fra solen: $T^2 \\propto r^3$.

For jorden er $T = 1$ år og $r = 1$ AU (astronomisk enhet).

a) Sett opp modellen for $T$ som funksjon av $r$.
b) Mars har gjennomsnittlig avstand 1,52 AU fra solen. Finn omløpstiden.`,
      solution: `**Løsning:**

**a)** Fra $T^2 = k \\cdot r^3$ og jordens data ($T = 1$, $r = 1$):
$$1^2 = k \\cdot 1^3 \\Rightarrow k = 1$$

Altså: $T^2 = r^3$, som gir:
$$T = r^{3/2}$$

**b)** For Mars med $r = 1{,}52$ AU:
$$T = (1{,}52)^{3/2} = \\sqrt{1{,}52^3} = \\sqrt{3{,}51} \\approx 1{,}87 \\text{ år}$$

(Faktisk omløpstid for Mars er 1,88 år - modellen stemmer godt!)`,
    },

    // Eksempel 7: Logistisk - Epidemi
    {
      id: 'r2-6-4-example-7',
      type: 'example',
      title: 'Eksempel 7: Epidemispredning (logistisk modell)',
      problem: `I en by med 50 000 innbyggere starter en epidemi. Antall smittede etter $t$ dager modelleres med:
$$I(t) = \\frac{50\\,000}{1 + 999 \\cdot e^{-0{,}3t}}$$

a) Hvor mange var smittet ved $t = 0$?
b) Når er halvparten av befolkningen smittet?
c) Hva er veksthastigheten ved $t = 20$ dager?`,
      solution: `**Løsning:**

**a)** Ved $t = 0$:
$$I(0) = \\frac{50\\,000}{1 + 999 \\cdot e^0} = \\frac{50\\,000}{1000} = 50 \\text{ personer}$$

**b)** Halvparten smittet betyr $I(t) = 25\\,000$:
$$\\frac{50\\,000}{1 + 999 \\cdot e^{-0{,}3t}} = 25\\,000$$
$$1 + 999 \\cdot e^{-0{,}3t} = 2$$
$$e^{-0{,}3t} = \\frac{1}{999}$$
$$-0{,}3t = \\ln\\left(\\frac{1}{999}\\right) = -\\ln(999)$$
$$t = \\frac{\\ln(999)}{0{,}3} \\approx \\frac{6{,}91}{0{,}3} \\approx 23 \\text{ dager}$$

**c)** Veksthastigheten er $I'(t)$. Ved $t = 20$:
$$I(20) = \\frac{50\\,000}{1 + 999 \\cdot e^{-6}} \\approx \\frac{50\\,000}{1 + 2{,}47} \\approx 14\\,400$$

For logistisk vekst: $I'(t) = r \\cdot I(t) \\cdot \\left(1 - \\frac{I(t)}{K}\\right)$
$$I'(20) = 0{,}3 \\cdot 14\\,400 \\cdot \\left(1 - \\frac{14\\,400}{50\\,000}\\right) \\approx 3070 \\text{ nye smittede per dag}$$`,
    },

    // Eksempel 8: Bestemme parametere fra data
    {
      id: 'r2-6-4-example-8',
      type: 'example',
      title: 'Eksempel 8: Bestemme parametere fra måledata',
      problem: `En biolog måler veksten til en plantepopulasjon og får følgende data:

| Tid (uker) | 0 | 2 | 4 | 6 |
|------------|---|---|---|---|
| Antall | 100 | 180 | 320 | 580 |

Anta eksponentiell vekst $N(t) = N_0 \\cdot e^{kt}$.

a) Bestem $N_0$ og $k$.
b) Hvor mange planter forventes etter 10 uker?`,
      solution: `**Løsning:**

**a)** Fra $t = 0$: $N_0 = 100$

For å finne $k$, bruk to datapunkter. Med $t = 4$:
$$320 = 100 \\cdot e^{4k}$$
$$e^{4k} = 3{,}2$$
$$4k = \\ln(3{,}2) \\approx 1{,}163$$
$$k \\approx 0{,}29$$

**Sjekk med $t = 6$:**
$$N(6) = 100 \\cdot e^{0{,}29 \\cdot 6} = 100 \\cdot e^{1{,}74} \\approx 100 \\cdot 5{,}7 \\approx 570$$

Dette stemmer bra med målt verdi 580.

Modellen: $N(t) = 100 \\cdot e^{0{,}29t}$

**b)** Etter 10 uker:
$$N(10) = 100 \\cdot e^{0{,}29 \\cdot 10} = 100 \\cdot e^{2{,}9} \\approx 100 \\cdot 18{,}2 \\approx 1820$$`,
    },

    // Eksempel 9: Newtons avkjølingslov
    {
      id: 'r2-6-4-example-9',
      type: 'example',
      title: 'Eksempel 9: Avkjøling av kaffe (Newtons avkjølingslov)',
      problem: `En kopp kaffe med temperatur $90°C$ plasseres i et rom med temperatur $20°C$. Etter 10 minutter er kaffetemperaturen $70°C$.

Newtons avkjølingslov: $T(t) = T_\\infty + (T_0 - T_\\infty) \\cdot e^{-kt}$

a) Bestem konstanten $k$.
b) Hva er temperaturen etter 30 minutter?
c) Når er kaffen $40°C$?`,
      solution: `**Løsning:**

**a)** Vi har $T_\\infty = 20°C$ og $T_0 = 90°C$, så:
$$T(t) = 20 + 70 \\cdot e^{-kt}$$

Med $T(10) = 70$:
$$70 = 20 + 70 \\cdot e^{-10k}$$
$$50 = 70 \\cdot e^{-10k}$$
$$e^{-10k} = \\frac{5}{7}$$
$$-10k = \\ln\\left(\\frac{5}{7}\\right) \\approx -0{,}336$$
$$k \\approx 0{,}0336$$

**b)** Etter 30 minutter:
$$T(30) = 20 + 70 \\cdot e^{-0{,}0336 \\cdot 30} = 20 + 70 \\cdot e^{-1{,}01}$$
$$\\approx 20 + 70 \\cdot 0{,}364 \\approx 20 + 25{,}5 \\approx 45{,}5°C$$

**c)** Når $T(t) = 40$:
$$40 = 20 + 70 \\cdot e^{-0{,}0336t}$$
$$20 = 70 \\cdot e^{-0{,}0336t}$$
$$e^{-0{,}0336t} = \\frac{2}{7}$$
$$t = \\frac{-\\ln(2/7)}{0{,}0336} = \\frac{\\ln(3{,}5)}{0{,}0336} \\approx 37 \\text{ minutter}$$`,
    },

    // Eksempel 10: Bremselengde
    {
      id: 'r2-6-4-example-10',
      type: 'example',
      title: 'Eksempel 10: Bremselengde (polynommodell)',
      problem: `Bremselengden $s$ for en bil er tilnærmet proporsjonal med kvadratet av farten $v$:
$$s(v) = kv^2$$

Ved 50 km/t er bremselengden 12 meter.

a) Bestem konstanten $k$.
b) Finn bremselengden ved 80 km/t.
c) Med hvilken fart kan man kjøre hvis bremselengden ikke skal overstige 50 meter?`,
      solution: `**Løsning:**

**a)** Med $s(50) = 12$ m:
$$12 = k \\cdot 50^2 = 2500k$$
$$k = \\frac{12}{2500} = 0{,}0048$$

Modellen: $s(v) = 0{,}0048 \\cdot v^2$

**b)** Ved 80 km/t:
$$s(80) = 0{,}0048 \\cdot 80^2 = 0{,}0048 \\cdot 6400 = 30{,}7 \\text{ m}$$

**c)** Med $s(v) \\leq 50$:
$$0{,}0048 \\cdot v^2 \\leq 50$$
$$v^2 \\leq \\frac{50}{0{,}0048} \\approx 10\\,417$$
$$v \\leq \\sqrt{10\\,417} \\approx 102 \\text{ km/t}$$`,
    },

    // Eksempel 11: Tidevann
    {
      id: 'r2-6-4-example-11',
      type: 'example',
      title: 'Eksempel 11: Tidevann (trigonometrisk modell)',
      problem: `Ved en kystby varierer vannstanden mellom 0,5 m og 3,5 m over referansenivået. Perioden er ca. 12,4 timer (halvt månedøgn). Høyvann inntreffer kl. 03:00.

a) Sett opp en modell for vannstanden $h(t)$ der $t$ er timer etter midnatt.
b) Når er det lavvann?
c) Når kan en båt som trenger minst 2 m dybde, seile inn?`,
      solution: `**Løsning:**

**a)**
- Middelverdi: $D = \\frac{0{,}5 + 3{,}5}{2} = 2$ m
- Amplitude: $A = \\frac{3{,}5 - 0{,}5}{2} = 1{,}5$ m
- Periode: $T = 12{,}4$ timer, så $\\omega = \\frac{2\\pi}{12{,}4} \\approx 0{,}507$
- Høyvann kl. 03:00, så cosinus med forskyvning:

$$h(t) = 1{,}5 \\cos(0{,}507(t - 3)) + 2$$

**b)** Lavvann når $\\cos = -1$, altså:
$$0{,}507(t - 3) = \\pi$$
$$t - 3 = \\frac{\\pi}{0{,}507} \\approx 6{,}2$$
$$t \\approx 9{,}2 \\text{ timer}$$

Lavvann er ca. kl. 09:12.

**c)** Trenger $h(t) \\geq 2$:
$$1{,}5 \\cos(0{,}507(t-3)) + 2 \\geq 2$$
$$\\cos(0{,}507(t-3)) \\geq 0$$

Dette er oppfylt når argumentet er i $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$:
$$-\\frac{\\pi}{2} \\leq 0{,}507(t-3) \\leq \\frac{\\pi}{2}$$
$$-3{,}1 \\leq t - 3 \\leq 3{,}1$$
$$-0{,}1 \\leq t \\leq 6{,}1$$

Altså fra ca. kl. 00:00 til kl. 06:00 (og tilsvarende 12,4 timer senere).`,
    },

    // Eksempel 12: CO2-konsentrasjon
    {
      id: 'r2-6-4-example-12',
      type: 'example',
      title: 'Eksempel 12: CO2-konsentrasjon (kombinert modell)',
      problem: `Atmosfærisk CO$_2$-konsentrasjon viser både langsiktig økning og sesongvariasjon. Data fra Mauna Loa viser:
- 1960: ca. 317 ppm
- 2020: ca. 414 ppm
- Årlig variasjon: ca. $\\pm 3$ ppm med maksimum i mai

a) Sett opp en modell som inkluderer både trend og sesongvariasjon.
b) Beregn forventet verdi i desember 2025.`,
      solution: `**Løsning:**

**a)** La $t$ være år etter 1960.

**Trend:** Tilnærmet eksponentiell, men ofte modellert lineært for kortere perioder:
$$\\text{Trend}(t) = 317 + 1{,}62t$$

(Vekst ca. $\\frac{414-317}{60} \\approx 1{,}62$ ppm/år)

**Sesongvariasjon:** Periode 1 år, maksimum i mai (måned 5):
$$\\text{Sesong}(t) = 3\\cos\\left(2\\pi(t - \\frac{4}{12})\\right)$$

**Kombinert modell:**
$$C(t) = 317 + 1{,}62t + 3\\cos\\left(2\\pi\\left(t - \\frac{1}{3}\\right)\\right)$$

**b)** Desember 2025 tilsvarer $t = 65{,}92$ (65 år + 11/12):
$$C(65{,}92) = 317 + 1{,}62 \\cdot 65{,}92 + 3\\cos(2\\pi \\cdot 65{,}58)$$
$$\\approx 317 + 106{,}8 + 3\\cos(0{,}58 \\cdot 2\\pi)$$
$$\\approx 423{,}8 + 3 \\cdot (-0{,}95) \\approx 421 \\text{ ppm}$$`,
    },

    // ========== VALIDERING AV MODELLER ==========
    {
      id: 'r2-6-4-validering-intro',
      type: 'text',
      content: `## Validere modeller

En modell må testes mot virkeligheten før den kan brukes til prediksjon.`,
    },

    {
      id: 'r2-6-4-validering-def',
      type: 'definition',
      title: 'Valideringsmetoder',
      content: `**1. Sammenligne med data**
- Beregn modellverdier for kjente datapunkter
- Finn avvik (residualer)

**2. Grafisk validering**
- Plott modell og data i samme diagram
- Se etter systematiske avvik

**3. Statistiske mål**
- Korrelasjonskoeffisient $R^2$
- Gjennomsnittlig kvadratisk avvik (RMSE)

**4. Sjekke grenseverdier**
- Gir modellen fornuftige verdier for $x \\to 0$, $x \\to \\infty$?

**5. Kryss-validering**
- Del data i trenings- og testdatasett
- Tilpass modell på trening, valider på test`,
    },

    // Eksempel 13: Validering
    {
      id: 'r2-6-4-example-13',
      type: 'example',
      title: 'Eksempel 13: Validering av modell',
      problem: `Vi har tilpasset modellen $y = 2{,}5x + 3$ til følgende data:

| $x$ | 1 | 2 | 3 | 4 | 5 |
|-----|---|---|---|---|---|
| $y$ (målt) | 5 | 8 | 12 | 13 | 16 |

Valider modellen ved å beregne avvik og $R^2$.`,
      solution: `**Løsning:**

**Modellverdier:**
| $x$ | $y$ (målt) | $y$ (modell) | Avvik | Avvik$^2$ |
|-----|------------|--------------|-------|-----------|
| 1 | 5 | 5,5 | -0,5 | 0,25 |
| 2 | 8 | 8,0 | 0 | 0 |
| 3 | 12 | 10,5 | 1,5 | 2,25 |
| 4 | 13 | 13,0 | 0 | 0 |
| 5 | 16 | 15,5 | 0,5 | 0,25 |

**Sum av kvadratiske avvik (SSE):** $0{,}25 + 0 + 2{,}25 + 0 + 0{,}25 = 2{,}75$

**Gjennomsnitt av $y$:** $\\bar{y} = \\frac{5+8+12+13+16}{5} = 10{,}8$

**Total variasjon (SST):**
$$\\sum(y_i - \\bar{y})^2 = 33{,}64 + 7{,}84 + 1{,}44 + 4{,}84 + 27{,}04 = 74{,}8$$

**$R^2$-verdi:**
$$R^2 = 1 - \\frac{\\text{SSE}}{\\text{SST}} = 1 - \\frac{2{,}75}{74{,}8} \\approx 0{,}96$$

$R^2 = 0{,}96$ betyr at modellen forklarer 96% av variasjonen i dataene, som er meget bra.`,
    },

    // ========== BEGRENSNINGER ==========
    {
      id: 'r2-6-4-begrensninger-intro',
      type: 'text',
      content: `## Begrensninger ved modeller

Alle modeller er forenklinger av virkeligheten og har begrensninger som må vurderes.`,
    },

    {
      id: 'r2-6-4-begrensninger-def',
      type: 'definition',
      title: 'Typiske begrensninger',
      content: `**1. Gyldighetsområde**
- Modeller gjelder bare innenfor et visst intervall
- Ekstrapolering (prediksjon utenfor dataområdet) er risikabelt

**2. Forenklinger**
- Modeller ignorerer ofte sekundære faktorer
- F.eks. luftmotstand, friksjon, forstyrrelser

**3. Antakelser**
- Eksponentiell vekst forutsetter ubegrensede ressurser
- Lineær modell forutsetter konstant endringsrate

**4. Måleusikkerhet**
- Data inneholder alltid målefeil
- Modellparametrene blir usikre

**5. Endrede betingelser**
- Forutsetningene kan endre seg over tid
- Modellen må oppdateres`,
    },

    {
      id: 'r2-6-4-warning-ekstrapolering',
      type: 'warning',
      title: 'Forsiktighet ved ekstrapolering',
      content: `Å bruke en modell utenfor dataområdet (ekstrapolering) kan gi svært upålitelige resultater.

**Eksempel:** En lineær modell for befolkningsvekst de siste 10 år kan ikke brukes til å forutsi befolkningen om 100 år - veksten er ikke lineær på lang sikt.

Ekstrapolering kan være nyttig for kortsiktige prediksjoner, men usikkerheten øker raskt med avstanden fra kjente data.`,
    },

    // Eksempel 14: Begrensninger
    {
      id: 'r2-6-4-example-14',
      type: 'example',
      title: 'Eksempel 14: Begrensninger ved modell',
      problem: `Modellen $N(t) = 1000 \\cdot e^{0{,}1t}$ beskriver veksten i en bakteriekoloni der $t$ er timer.

Diskuter begrensningene ved denne modellen.`,
      solution: `**Løsning:**

**1. Gyldighetsområde:**
- Modellen gir rimelige verdier for små $t$
- For store $t$ blir tallene urealistisk store:
  - $N(100) = 1000 \\cdot e^{10} \\approx 22$ millioner
  - $N(200) = 1000 \\cdot e^{20} \\approx 485$ milliarder

**2. Fysiske begrensninger:**
- Bakterier trenger næring og plass
- Avfallsstoffer hoper seg opp
- Ressurser er endelige

**3. Bedre modell:**
Logistisk vekst tar hensyn til bæreevne:
$$N(t) = \\frac{K}{1 + (K/N_0 - 1)e^{-rt}}$$

**4. Tidsavhengighet:**
- Eksponentiell vekst gjelder bare i oppstartsfasen
- Modellen bør ha et angitt gyldighetsintervall, f.eks. $0 \\leq t \\leq 24$ timer

**Konklusjon:** Modellen er nyttig for å forstå tidlig vekstdynamikk, men må erstattes med en mer realistisk modell for langsiktige prediksjoner.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-6-4-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Modelleringsprosessen:**
1. Identifiser problemet og variablene
2. Velg funksjonstype basert på hvordan systemet oppfører seg
3. Bestem parametere fra data
4. Valider modellen mot virkeligheten
5. Bruk modellen med bevissthet om begrensninger

**Funksjonstyper:**
- **Lineær:** Konstant endringsrate
- **Eksponentiell:** Prosentvis vekst/nedgang
- **Polynom:** Vendepunkter, optimalitet
- **Trigonometrisk:** Periodiske fenomener
- **Logistisk:** Begrenset vekst

**Husk:**
- Alle modeller er forenklinger
- Ekstrapolering er risikabelt
- Valider alltid mot data`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'r2-6-4-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // Oppgave 1
    {
      id: 'r2-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-1',
        number: '6.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken funksjonstype passer best for å modellere følgende situasjoner?',
        subTasks: [
          { label: 'a', task: 'Kostnaden for å leie en bil der du betaler en fast døgnavgift pluss en pris per kilometer.', solution: '**Lineær modell**: $K(x) = ax + b$, der $b$ er døgnavgiften og $a$ er pris per km.' },
          { label: 'b', task: 'Verdien av en aksje som stiger med 5% per år.', solution: '**Eksponentiell modell**: $V(t) = V_0 \\cdot 1{,}05^t$' },
          { label: 'c', task: 'Høyden på en ball som kastes opp i luften.', solution: '**Polynommodell (andregradsfunksjon)**: $h(t) = -\\frac{1}{2}gt^2 + v_0 t + h_0$' },
          { label: 'd', task: 'Antall timer dagslys gjennom året.', solution: '**Trigonometrisk modell**: Periodisk med periode 365 dager.' },
        ],
        solution: 'a) Lineær, b) Eksponentiell, c) Andregradsfunksjon, d) Trigonometrisk',
        hints: ['Tenk på hvordan den avhengige variabelen endrer seg.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r2-6-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-2',
        number: '6.4.2',
        type: 'classic',
        difficulty: 'lett',
        task: `Et mobilabonnement koster 199 kr/mnd pluss 0,50 kr per MB over inkludert datakvote.

a) Sett opp en modell for månedlig kostnad $K(x)$ som funksjon av ekstra databruk $x$ MB.
b) Hva blir kostnaden hvis du bruker 500 MB over kvoten?
c) Du har budsjett på 350 kr/mnd. Hvor mye ekstra data kan du bruke?`,
        solution: `a) $K(x) = 199 + 0{,}50x$

b) $K(500) = 199 + 0{,}50 \\cdot 500 = 199 + 250 = 449$ kr

c) $199 + 0{,}50x = 350 \\Rightarrow x = 302$ MB`,
        hints: ['Lineær modell med fast og variabel del.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r2-6-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-3',
        number: '6.4.3',
        type: 'classic',
        difficulty: 'lett',
        task: `En investering på 50 000 kr gir 4% rente per år.

a) Sett opp en modell for beløpet $B(t)$ etter $t$ år.
b) Hva er beløpet etter 10 år?
c) Når har beløpet doblet seg?`,
        solution: `a) $B(t) = 50\\,000 \\cdot 1{,}04^t$

b) $B(10) = 50\\,000 \\cdot 1{,}04^{10} \\approx 50\\,000 \\cdot 1{,}48 \\approx 74\\,012$ kr

c) $50\\,000 \\cdot 1{,}04^t = 100\\,000$
$1{,}04^t = 2$
$t = \\frac{\\ln 2}{\\ln 1{,}04} \\approx \\frac{0{,}693}{0{,}0392} \\approx 17{,}7$ år`,
        hints: ['Eksponentiell modell med vekstfaktor 1,04.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r2-6-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-4',
        number: '6.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Et stoff brytes ned i kroppen slik at halvparten er borte etter 6 timer. Startdosen er 400 mg.

a) Sett opp en modell for gjenværende mengde $M(t)$ etter $t$ timer.
b) Hvor mye er igjen etter 15 timer?
c) Når er det mindre enn 50 mg igjen?`,
        subTasks: [
          { label: 'a', task: 'Sett opp modellen.', solution: '$M(t) = 400 \\cdot \\left(\\frac{1}{2}\\right)^{t/6}$' },
          { label: 'b', task: 'Beregn $M(15)$.', solution: '$M(15) = 400 \\cdot \\left(\\frac{1}{2}\\right)^{15/6} = 400 \\cdot \\left(\\frac{1}{2}\\right)^{2{,}5} \\approx 400 \\cdot 0{,}177 \\approx 71$ mg' },
          { label: 'c', task: 'Finn når $M(t) < 50$ mg.', solution: '$400 \\cdot \\left(\\frac{1}{2}\\right)^{t/6} = 50$\n$\\left(\\frac{1}{2}\\right)^{t/6} = 0{,}125 = \\left(\\frac{1}{2}\\right)^3$\n$\\frac{t}{6} = 3 \\Rightarrow t = 18$ timer' },
        ],
        solution: 'a) $M(t) = 400 \\cdot (1/2)^{t/6}$, b) ca. 71 mg, c) etter 18 timer',
        hints: ['Eksponentiell nedbrytning med halveringstid 6 timer.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r2-6-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-5',
        number: '6.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Dybdetemperaturen i en innsjø gjennom året varierer mellom $4°C$ (februar) og $18°C$ (august). La $t$ være månedsnummer ($t = 1$ for januar).

a) Bestem amplitude, middelverdi og periode for modellen.
b) Sett opp modellen $T(t) = A\\cos(\\omega(t - \\varphi)) + D$.
c) Hva er modellert temperatur i mai ($t = 5$)?`,
        subTasks: [
          { label: 'a', task: 'Finn parametrene.', solution: 'Amplitude: $A = \\frac{18-4}{2} = 7°C$\nMiddelverdi: $D = \\frac{18+4}{2} = 11°C$\nPeriode: 12 måneder' },
          { label: 'b', task: 'Sett opp modellen.', solution: 'Maksimum i august ($t = 8$):\n$T(t) = 7\\cos\\left(\\frac{\\pi}{6}(t - 8)\\right) + 11$' },
          { label: 'c', task: 'Beregn $T(5)$.', solution: '$T(5) = 7\\cos\\left(\\frac{\\pi}{6}(5-8)\\right) + 11 = 7\\cos\\left(-\\frac{\\pi}{2}\\right) + 11 = 7 \\cdot 0 + 11 = 11°C$' },
        ],
        solution: 'a) $A = 7$, $D = 11$, $T = 12$; b) $T(t) = 7\\cos(\\frac{\\pi}{6}(t-8)) + 11$; c) $11°C$',
        hints: ['Cosinus-funksjon med maksimum i august.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r2-6-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-6',
        number: '6.4.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Følgende data viser sammenhengen mellom en bils fart (km/t) og stopplengde (meter):

| Fart | 30 | 50 | 70 | 90 |
|------|-----|-----|-----|-----|
| Stopplengde | 13 | 28 | 50 | 80 |

a) Plott dataene og avgjør om en lineær eller kvadratisk modell passer best.
b) Tilpass modellen $s(v) = kv^2$ og finn $k$.
c) Beregn forventet stopplengde ved 110 km/t.`,
        subTasks: [
          { label: 'a', task: 'Vurder modelltype.', solution: 'Stopplengden øker raskere enn lineært - kvadratisk modell passer.' },
          { label: 'b', task: 'Finn $k$.', solution: 'Bruk $s = 28$ ved $v = 50$:\n$28 = k \\cdot 50^2 = 2500k$\n$k = 0{,}0112$\n\nSjekk: $s(70) = 0{,}0112 \\cdot 4900 \\approx 55$ (nær 50), $s(90) = 0{,}0112 \\cdot 8100 \\approx 91$ (nær 80). Rimelig tilpasning.' },
          { label: 'c', task: 'Beregn $s(110)$.', solution: '$s(110) = 0{,}0112 \\cdot 110^2 = 0{,}0112 \\cdot 12100 \\approx 136$ meter' },
        ],
        solution: 'b) $k \\approx 0{,}0112$; c) ca. 136 meter',
        hints: ['Stopplengde er tilnærmet proporsjonal med fart i annen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r2-6-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-7',
        number: '6.4.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Populasjonen i en by har vokst slik de siste årene (i tusen):

| År | 2010 | 2015 | 2020 |
|-----|------|------|------|
| Befolkning | 45 | 52 | 60 |

a) Anta lineær vekst og finn modellen.
b) Anta eksponentiell vekst og finn modellen.
c) Sammenlign prediksjonene for 2030 med begge modeller.`,
        subTasks: [
          { label: 'a', task: 'Lineær modell.', solution: 'Vekst: $\\frac{60-45}{10} = 1{,}5$ tusen/år\nLa $t = 0$ i 2010: $P(t) = 45 + 1{,}5t$' },
          { label: 'b', task: 'Eksponentiell modell.', solution: '$60 = 45 \\cdot b^{10}$\n$b^{10} = \\frac{60}{45} = 1{,}333$\n$b = 1{,}333^{0{,}1} \\approx 1{,}029$\n$P(t) = 45 \\cdot 1{,}029^t$' },
          { label: 'c', task: 'Sammenlign for 2030 ($t = 20$).', solution: 'Lineær: $P(20) = 45 + 1{,}5 \\cdot 20 = 75$ tusen\nEksponentiell: $P(20) = 45 \\cdot 1{,}029^{20} \\approx 45 \\cdot 1{,}78 \\approx 80$ tusen' },
        ],
        solution: 'Lineær gir 75 000, eksponentiell gir ca. 80 000 i 2030.',
        hints: ['Lineær: konstant tilvekst. Eksponentiell: konstant prosentvis vekst.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r2-6-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-8',
        number: '6.4.8',
        type: 'classic',
        difficulty: 'medium',
        task: `En suppe med temperatur $85°C$ settes i et rom med temperatur $22°C$. Etter 5 minutter er suppetemperaturen $70°C$.

a) Sett opp modellen etter Newtons avkjølingslov.
b) Hva er temperaturen etter 15 minutter?
c) Når kan du spise suppen (ved $50°C$)?`,
        subTasks: [
          { label: 'a', task: 'Finn modellen.', solution: '$T(t) = 22 + 63 \\cdot e^{-kt}$\n$70 = 22 + 63 \\cdot e^{-5k}$\n$48 = 63 \\cdot e^{-5k}$\n$e^{-5k} = 0{,}762$\n$k = \\frac{-\\ln(0{,}762)}{5} \\approx 0{,}054$\n\n$T(t) = 22 + 63 \\cdot e^{-0{,}054t}$' },
          { label: 'b', task: 'Beregn $T(15)$.', solution: '$T(15) = 22 + 63 \\cdot e^{-0{,}054 \\cdot 15} = 22 + 63 \\cdot e^{-0{,}81} \\approx 22 + 63 \\cdot 0{,}445 \\approx 50°C$' },
          { label: 'c', task: 'Finn $t$ når $T(t) = 50$.', solution: '$50 = 22 + 63 \\cdot e^{-0{,}054t}$\n$28 = 63 \\cdot e^{-0{,}054t}$\n$e^{-0{,}054t} = 0{,}444$\n$t = \\frac{-\\ln(0{,}444)}{0{,}054} \\approx 15$ minutter' },
        ],
        solution: 'a) $T(t) = 22 + 63e^{-0{,}054t}$; b) ca. 50°C; c) ca. 15 minutter',
        hints: ['Newtons avkjølingslov: $T(t) = T_\\infty + (T_0 - T_\\infty)e^{-kt}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r2-6-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-9',
        number: '6.4.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et rykte sprer seg i en skole med 800 elever. I starten kjenner 5 elever ryktet. Etter 3 dager kjenner 100 elever det.

Bruk logistisk modell: $R(t) = \\frac{K}{1 + Ce^{-rt}}$

a) Bestem $K$, $C$ og $r$.
b) Når kjenner halvparten av elevene ryktet?
c) Når sprer ryktet seg raskest?`,
        subTasks: [
          { label: 'a', task: 'Finn parametrene.', solution: '$K = 800$ (alle elever)\n\nVed $t = 0$: $5 = \\frac{800}{1+C} \\Rightarrow C = 159$\n\nVed $t = 3$: $100 = \\frac{800}{1 + 159 \\cdot e^{-3r}}$\n$1 + 159 \\cdot e^{-3r} = 8$\n$e^{-3r} = \\frac{7}{159} \\approx 0{,}044$\n$r = \\frac{-\\ln(0{,}044)}{3} \\approx 1{,}04$' },
          { label: 'b', task: 'Finn $t$ når $R(t) = 400$.', solution: '$\\frac{800}{1 + 159 \\cdot e^{-1{,}04t}} = 400$\n$1 + 159 \\cdot e^{-1{,}04t} = 2$\n$e^{-1{,}04t} = \\frac{1}{159}$\n$t = \\frac{\\ln 159}{1{,}04} \\approx 4{,}9$ dager' },
          { label: 'c', task: 'Finn vendepunktet (maksimal spredningshastighet).', solution: 'Vendepunkt ved $R(t) = K/2 = 400$, altså ved $t \\approx 4{,}9$ dager. Her er $R\'(t)$ maksimal.' },
        ],
        solution: 'a) $K=800$, $C=159$, $r \\approx 1{,}04$; b) ca. 4,9 dager; c) ca. 4,9 dager',
        hints: ['Logistisk vekst har vendepunkt ved halv kapasitet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r2-6-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-10',
        number: '6.4.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Strømforbruket i en husholdning varierer gjennom døgnet. Måledata viser:
- Minimumsforbruk: 0,5 kW (kl. 04:00)
- Maksimumsforbruk: 4,5 kW (kl. 19:00)

a) Sett opp en trigonometrisk modell for forbruket $P(t)$ der $t$ er timer etter midnatt.
b) Hva er forbruket kl. 08:00?
c) Når på dagen er forbruket over 3 kW?`,
        subTasks: [
          { label: 'a', task: 'Sett opp modellen.', solution: 'Amplitude: $A = \\frac{4{,}5 - 0{,}5}{2} = 2$ kW\nMiddelverdi: $D = \\frac{4{,}5 + 0{,}5}{2} = 2{,}5$ kW\nPeriode: 24 timer, $\\omega = \\frac{2\\pi}{24} = \\frac{\\pi}{12}$\n\nMaksimum ved $t = 19$, minimum ved $t = 4$. Bruker cosinus:\n$P(t) = 2\\cos\\left(\\frac{\\pi}{12}(t - 19)\\right) + 2{,}5$\n\nAlternativt med sinus og faseforskyvning.' },
          { label: 'b', task: 'Beregn $P(8)$.', solution: '$P(8) = 2\\cos\\left(\\frac{\\pi}{12}(8-19)\\right) + 2{,}5 = 2\\cos\\left(-\\frac{11\\pi}{12}\\right) + 2{,}5$\n$\\cos\\left(-\\frac{11\\pi}{12}\\right) \\approx -0{,}966$\n$P(8) \\approx 2 \\cdot (-0{,}966) + 2{,}5 \\approx 0{,}57$ kW' },
          { label: 'c', task: 'Finn når $P(t) > 3$ kW.', solution: '$2\\cos\\left(\\frac{\\pi}{12}(t-19)\\right) + 2{,}5 > 3$\n$\\cos\\left(\\frac{\\pi}{12}(t-19)\\right) > 0{,}25$\n\n$\\cos^{-1}(0{,}25) \\approx 1{,}32$ rad\n$-1{,}32 < \\frac{\\pi}{12}(t-19) < 1{,}32$\n$14 < t < 24$ (ca. kl. 14:00 til midnatt)' },
        ],
        solution: 'a) $P(t) = 2\\cos(\\frac{\\pi}{12}(t-19)) + 2{,}5$; b) ca. 0,6 kW; c) ca. kl. 14-24',
        hints: ['Cosinus-modell med maksimum ved $t = 19$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r2-6-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-11',
        number: '6.4.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En forsker modellerer sammenhengen mellom kroppsvekt $W$ (kg) og hjertets slagfrekvens $f$ (slag/min) hos pattedyr med potensmodellen $f = aW^b$.

Data:
| Dyr | Vekt (kg) | Puls (slag/min) |
|-----|-----------|-----------------|
| Mus | 0,03 | 600 |
| Kanin | 2 | 200 |
| Menneske | 70 | 70 |

a) Ta logaritmen og vis at $\\ln f = \\ln a + b \\cdot \\ln W$.
b) Bruk to datapunkter til å estimere $a$ og $b$.
c) Beregn forventet puls for en elefant (5000 kg).`,
        subTasks: [
          { label: 'a', task: 'Logtransformer.', solution: '$f = aW^b$\n$\\ln f = \\ln(aW^b) = \\ln a + b \\cdot \\ln W$\n\nDette er lineært i $\\ln W$ med stigningstall $b$.' },
          { label: 'b', task: 'Finn $a$ og $b$.', solution: 'Med mus og menneske:\n$\\ln 600 = \\ln a + b \\cdot \\ln 0{,}03$\n$\\ln 70 = \\ln a + b \\cdot \\ln 70$\n\n$6{,}40 = \\ln a - 3{,}51b$\n$4{,}25 = \\ln a + 4{,}25b$\n\nTrekker fra: $2{,}15 = -7{,}76b \\Rightarrow b \\approx -0{,}28$\n\n$\\ln a = 4{,}25 - 4{,}25 \\cdot (-0{,}28) = 5{,}44$\n$a \\approx 230$' },
          { label: 'c', task: 'Beregn puls for elefant.', solution: '$f = 230 \\cdot 5000^{-0{,}28} = 230 \\cdot 0{,}097 \\approx 22$ slag/min' },
        ],
        solution: 'b) $a \\approx 230$, $b \\approx -0{,}28$; c) ca. 22 slag/min',
        hints: ['Logaritmetransformasjon gjør potensmodell lineær.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r2-6-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-12',
        number: '6.4.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En fabrikk produserer varer med kostnad $K(x) = 1000 + 50x + 0{,}1x^2$ kroner for $x$ enheter.

a) Finn gjennomsnittskostnaden per enhet $G(x) = K(x)/x$.
b) Finn produksjonsnivået som minimerer gjennomsnittskostnaden.
c) Vis at ved dette nivået er gjennomsnittskostnad lik marginalkostnad.`,
        subTasks: [
          { label: 'a', task: 'Finn $G(x)$.', solution: '$G(x) = \\frac{1000 + 50x + 0{,}1x^2}{x} = \\frac{1000}{x} + 50 + 0{,}1x$' },
          { label: 'b', task: 'Minimer $G(x)$.', solution: '$G\'(x) = -\\frac{1000}{x^2} + 0{,}1 = 0$\n$\\frac{1000}{x^2} = 0{,}1$\n$x^2 = 10\\,000$\n$x = 100$ enheter\n\n$G\'\'(x) = \\frac{2000}{x^3} > 0$ for $x > 0$, så minimum.' },
          { label: 'c', task: 'Sammenlign med marginalkostnad.', solution: 'Marginalkostnad: $K\'(x) = 50 + 0{,}2x$\n$K\'(100) = 50 + 20 = 70$\n\nGjennomsnittskostnad ved $x = 100$:\n$G(100) = \\frac{1000}{100} + 50 + 0{,}1 \\cdot 100 = 10 + 50 + 10 = 70$\n\n$G(100) = K\'(100)$ - minimumspunktet oppstår når de er like.' },
        ],
        solution: 'b) 100 enheter; c) Ved minimum: $G = K\' = 70$ kr/enhet',
        hints: ['Deriverer $G(x)$ og setter lik null.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r2-6-4-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-13',
        number: '6.4.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Havnivået i en fjord påvirkes av både tidevann (periode 12,4 timer) og en daglig variasjon (periode 24 timer).

Modell: $h(t) = 0{,}8\\cos\\left(\\frac{2\\pi t}{12{,}4}\\right) + 0{,}3\\cos\\left(\\frac{2\\pi t}{24}\\right) + 2$

der $h$ er i meter og $t$ er timer etter midnatt.

a) Hva er havnivået ved midnatt ($t = 0$)?
b) Finn tidspunkter de første 12 timene der $h\'(t) = 0$.
c) Hva er maksimalt og minimalt havnivå i løpet av et døgn (tilnærmet)?`,
        subTasks: [
          { label: 'a', task: 'Beregn $h(0)$.', solution: '$h(0) = 0{,}8\\cos(0) + 0{,}3\\cos(0) + 2 = 0{,}8 + 0{,}3 + 2 = 3{,}1$ m' },
          { label: 'b', task: 'Finn ekstremalpunkter.', solution: '$h\'(t) = -0{,}8 \\cdot \\frac{2\\pi}{12{,}4}\\sin\\left(\\frac{2\\pi t}{12{,}4}\\right) - 0{,}3 \\cdot \\frac{2\\pi}{24}\\sin\\left(\\frac{2\\pi t}{24}\\right)$\n\n$= -0{,}405\\sin\\left(\\frac{\\pi t}{6{,}2}\\right) - 0{,}0785\\sin\\left(\\frac{\\pi t}{12}\\right)$\n\nNumerisk/grafisk løsning gir ca. $t \\approx 0$, $t \\approx 5{,}8$, $t \\approx 11{,}5$ i de første 12 timene.' },
          { label: 'c', task: 'Finn ekstremverdier.', solution: 'Teoretisk maksimum: $2 + 0{,}8 + 0{,}3 = 3{,}1$ m (oppnås når begge cosinus = 1)\nTeoretisk minimum: $2 - 0{,}8 - 0{,}3 = 0{,}9$ m (når begge = -1)\n\nMen siden periodene er ulike, skjer ikke dette samtidig. Praktisk varierer nivået mellom ca. 1,0 m og 3,1 m.' },
        ],
        solution: 'a) 3,1 m; b) ca. $t = 0, 5{,}8, 11{,}5$ timer; c) ca. 0,9 m til 3,1 m',
        hints: ['Summen av to trigonometriske ledd med ulike perioder.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r2-6-4-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-14',
        number: '6.4.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En modell for global gjennomsnittstemperatur (relativt til 1900) er:

$T(t) = 0{,}006t + 0{,}0001t^2 + 0{,}1\\sin\\left(\\frac{2\\pi t}{11}\\right)$

der $t$ er år etter 1900. Sinusleddet representerer solsyklusen.

a) Hva predikerer modellen for år 2000 og 2050?
b) Finn gjennomsnittlig temperaturøkning per tiår for perioden 2000-2050.
c) Diskuter minst to begrensninger ved denne modellen.`,
        subTasks: [
          { label: 'a', task: 'Beregn $T(100)$ og $T(150)$.', solution: '$T(100) = 0{,}006 \\cdot 100 + 0{,}0001 \\cdot 10000 + 0{,}1\\sin(18{,}2\\pi)$\n$= 0{,}6 + 1{,}0 + 0{,}1 \\cdot \\sin(0{,}2\\pi) \\approx 1{,}6 + 0{,}06 \\approx 1{,}66°C$\n\n$T(150) = 0{,}006 \\cdot 150 + 0{,}0001 \\cdot 22500 + 0{,}1\\sin(27{,}3\\pi)$\n$= 0{,}9 + 2{,}25 + 0{,}1 \\cdot \\sin(0{,}3\\pi) \\approx 3{,}15 + 0{,}08 \\approx 3{,}23°C$' },
          { label: 'b', task: 'Finn gjennomsnittlig økning per tiår.', solution: 'Økning: $3{,}23 - 1{,}66 = 1{,}57°C$ over 50 år\nPer tiår: $\\frac{1{,}57}{5} \\approx 0{,}31°C$ per tiår' },
          { label: 'c', task: 'Diskuter begrensninger.', solution: '1. **Polynomvekst uten grense**: Modellen gir uendelig høye temperaturer for store $t$. Realistisk er det fysiske begrensninger.\n\n2. **Forenklet solsyklus**: Solsyklusen er ikke perfekt periodisk og amplituden varierer.\n\n3. **Ingen tilbakekoblingsmekanismer**: Klimasystemet har komplekse tilbakekoblinger som ikke fanges opp.\n\n4. **Historisk tilpasning**: Modellen er tilpasset historiske data og kan ikke forutsi framtidige endringer i utslipp eller politikk.' },
        ],
        solution: 'a) 1,66°C (2000), 3,23°C (2050); b) ca. 0,31°C/tiår; c) Se løsning',
        hints: ['Sett inn $t$-verdier. For begrensninger: tenk på fysiske realiteter.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15
    {
      id: 'r2-6-4-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-15',
        number: '6.4.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du skal lage en modell for vindkraftverk-effekt. Effekten $P$ avhenger av vindhastigheten $v$ og følger tilnærmet:

$P(v) = \\begin{cases} 0 & v < 3 \\\\ k(v-3)^3 & 3 \\leq v \\leq 12 \\\\ P_{\\max} & 12 < v < 25 \\\\ 0 & v \\geq 25 \\end{cases}$

Vindturbinen har makseffekt $P_{\\max} = 2000$ kW ved $v = 12$ m/s.

a) Bestem konstanten $k$.
b) Hva er effekten ved 8 m/s?
c) Diskuter hvorfor modellen er delt opp slik.`,
        subTasks: [
          { label: 'a', task: 'Finn $k$.', solution: 'Ved $v = 12$: $P(12) = k(12-3)^3 = k \\cdot 729 = 2000$\n$k = \\frac{2000}{729} \\approx 2{,}74$' },
          { label: 'b', task: 'Beregn $P(8)$.', solution: '$P(8) = 2{,}74 \\cdot (8-3)^3 = 2{,}74 \\cdot 125 = 342{,}5$ kW' },
          { label: 'c', task: 'Forklar modellens struktur.', solution: '**$v < 3$ m/s (cut-in):** For lav vind til å overvinne friksjon og starte rotasjon.\n\n**$3 \\leq v \\leq 12$ m/s:** Effekten øker med tredjepotens av (effektiv) vindhastighet, basert på kinetisk energi i vinden.\n\n**$12 < v < 25$ m/s:** Regulering (pitch-kontroll) holder effekten konstant for å unngå overbelastning.\n\n**$v \\geq 25$ m/s (cut-out):** Turbinen stopper for å unngå skader ved sterk vind.' },
        ],
        solution: 'a) $k \\approx 2{,}74$; b) 342,5 kW; c) Se forklaring',
        hints: ['Effekten i vind er proporsjonal med $v^3$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 16
    {
      id: 'r2-6-4-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r2-6-4-ex-16',
        number: '6.4.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Prosjektoppgave: Modellering av COVID-19-bølge**

I en tidlig fase av en epidemi ble følgende data registrert (smittetilfeller per dag):

| Dag | 1 | 5 | 10 | 15 | 20 | 25 | 30 |
|-----|---|---|----|----|----|----|-----|
| Tilfeller | 10 | 30 | 120 | 400 | 800 | 900 | 850 |

a) Forklar hvorfor en ren eksponentiell modell ikke passer for hele datasettet.
b) Tilpass en logistisk modell til dataene (bruk regresjon eller manuell tilpasning).
c) Når nådde epidemien toppen ifølge modellen?
d) Diskuter minst tre faktorer som kan gjøre modellen upålitelig.`,
        subTasks: [
          { label: 'a', task: 'Hvorfor ikke eksponentiell?', solution: 'Dataene viser først rask vekst (dag 1-15), deretter avtagende vekst og så nedgang (dag 25-30). Eksponentiell modell ville fortsatt å vokse uten grenser, men dataene flater ut og synker - typisk for logistisk/epidemiologisk forløp.' },
          { label: 'b', task: 'Tilpass logistisk modell.', solution: 'Fra dataene: Maksimum rundt 900 tilfeller/dag.\n$N(t) = \\frac{K}{1 + Ce^{-rt}}$\n\nEstimerer: $K \\approx 1000$, $N(1) = 10$ gir $C \\approx 99$.\nVed $t = 15$: $400 = \\frac{1000}{1 + 99e^{-15r}}$\n$e^{-15r} = \\frac{6}{99 \\cdot 4} \\approx 0{,}015$\n$r \\approx 0{,}28$\n\nModell: $N(t) \\approx \\frac{1000}{1 + 99e^{-0{,}28t}}$' },
          { label: 'c', task: 'Finn toppen.', solution: 'For daglige tilfeller: deriverer $N(t)$ og finner vendepunkt.\nVendepunkt ved $N = K/2 = 500$ tilfeller akkumulert per dag.\nLøser $N(t) = 500$: $t \\approx 16-17$ dager.' },
          { label: 'd', task: 'Diskuter usikkerheter.', solution: '1. **Testkapasitet**: Registrerte tilfeller avhenger av testing, ikke bare faktisk smitte.\n\n2. **Tiltak**: Nedstengning, vaksinering og atferdsendringer påvirker dynamikken.\n\n3. **Varianter**: Nye virusvarianter kan endre smittsomhet.\n\n4. **Sesongvariasjon**: Luftveisinfeksjoner påvirkes av årstid.\n\n5. **Underrapportering**: Asymptomatiske tilfeller telles ikke.\n\n6. **Modellforutsetninger**: Logistisk modell antar homogen blanding av befolkningen.' },
        ],
        solution: 'Se løsningsforslag for hver deloppgave.',
        hints: ['Logistisk modell fanger opp metning. Vendepunkt ved halv kapasitet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};


export const CHAPTER_R2_6_5: TextbookChapter = {
  id: 'r2-6-5',
  courseId: 'r2',
  chapterNumber: '6.5',
  title: 'Modellering med reelle data',
  description: 'Analysere virkelige datasett med matematikk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke derivasjon og integrasjon til a analysere og tolke eigne matematiske modellar av reelle data',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-6-5-intro',
      type: 'text',
      content: `## Matematisk modellering med reelle data

I den virkelige verden har vi ofte tilgang til maledata fra eksperimenter, observasjoner eller statistikk. Matematisk modellering handler om å finne matematiske funksjoner som beskriver disse dataene på en god mate.

**Hvorfor modellere data?**
- **Forstae sammenhenger**: Se monstre og trender i dataene
- **Gjore spaadom**: Anslaa verdier utenfor maleomradet
- **Ta beslutninger**: Basert på matematiske analyser
- **Kommunisere**: Presentere funn på en presis mate

I dette kapitlet laerer du a:
1. Velge riktig regresjonstype
2. Bruke digitale verktøy til regresjon
3. Vurdere modellens kvalitet
4. Skille mellom interpolasjon og ekstrapolasjon`,
    },

    // ========== REGRESJON - GRUNNLEGGENDE ==========
    {
      id: 'r2-6-5-regresjon-intro',
      type: 'text',
      content: `## Regresjon

**Regresjon** er en statistisk metode for å finne en funksjon som best tilpasser seg et sett med datapunkter. Malet er a minimere avstanden mellom funksjonen og datapunktene.`,
    },
    {
      id: 'r2-6-5-def-1',
      type: 'definition',
      title: 'Minste kvadraters metode',
      content: `Ved **minste kvadraters metode** finner vi den funksjonen $f(x)$ som minimerer summen av kvadrerte avvik:

$$S = \\sum_{i=1}^{n} (y_i - f(x_i))^2$$

der $(x_i, y_i)$ er datapunktene og $f(x_i)$ er funksjonsverdien.

Denne metoden gir den "beste" tilpasningen i statistisk forstand.`,
    },

    // ========== LINEAER REGRESJON ==========
    {
      id: 'r2-6-5-linear-intro',
      type: 'text',
      content: `## Lineaer regresjon

Ved lineær regresjon tilpasser vi en rett linje $y = ax + b$ til dataene. Dette er den enkleste formen for regresjon og passer nar dataene viser en tilnaermet lineær sammenheng.`,
    },
    {
      id: 'r2-6-5-theorem-1',
      type: 'theorem',
      title: 'Formler for lineær regresjon',
      content: `For datapunkter $(x_1, y_1), (x_2, y_2), \\ldots, (x_n, y_n)$ er:

$$a = \\frac{n\\sum x_i y_i - \\sum x_i \\sum y_i}{n\\sum x_i^2 - (\\sum x_i)^2}$$

$$b = \\bar{y} - a\\bar{x}$$

der $\\bar{x}$ og $\\bar{y}$ er gjennomsnittene.`,
    },
    {
      id: 'r2-6-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Befolkningsvekst i en by',
      problem: `Tabellen viser befolkningen i en norsk by (i tusen):

| Ar   | 2010 | 2012 | 2014 | 2016 | 2018 | 2020 |
|------|------|------|------|------|------|------|
| Befolkning | 45.2 | 47.1 | 49.3 | 51.0 | 53.2 | 55.1 |

a) Bruk lineær regresjon til å finne en modell $y = ax + b$ der $x$ er antall år etter 2010.
b) Estimer befolkningen i 2025.`,
      solution: `**a) Lineaer regresjon**

La $x$ være antall år etter 2010. Da har vi datapunktene:
$(0, 45.2), (2, 47.1), (4, 49.3), (6, 51.0), (8, 53.2), (10, 55.1)$

Ved a bruke GeoGebra/kalkulator far vi:
$$y = 0.99x + 45.2$$

**b) Estimat for 2025**

For 2025 er $x = 15$:
$$y = 0.99 \\cdot 15 + 45.2 = 14.85 + 45.2 = 60.05$$

Befolkningen i 2025 anslaps til ca. **60 000**.

**Merk:** Dette er en ekstrapolasjon (utenfor maleomradet), sa anslaget er usikkert.`,
    },
    {
      id: 'r2-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Tabellen viser gjennomsnittlig arstemperatur i en by (i $^\\circ$C):

| Ar   | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 |
|------|------|------|------|------|------|------|
| Temp | 7.2  | 7.5  | 7.8  | 8.0  | 8.1  | 8.4  |

a) Finn en lineær modell $T = at + b$ der $t$ er antall år etter 2015.
b) Hva forutsier modellen for 2025?`,
        solution: `a) Ved lineær regresjon: $T = 0.23t + 7.2$

b) For 2025 er $t = 10$: $T = 0.23 \\cdot 10 + 7.2 = 9.5^\\circ$C`,
        hints: ['Bruk GeoGebra eller kalkulator for regresjon.'],
      },
    },

    // ========== EKSPONENTIELL REGRESJON ==========
    {
      id: 'r2-6-5-exp-intro',
      type: 'text',
      content: `## Eksponentiell regresjon

Nar data viser prosentvis vekst eller nedgang, passer ofte en eksponentiell modell:

$$y = a \\cdot b^x$$

eller på eksponentialform:

$$y = a \\cdot e^{kx}$$

der $k = \\ln(b)$.`,
    },
    {
      id: 'r2-6-5-note-1',
      type: 'note',
      content: `**Nar bruke eksponentiell regresjon?**

- Befolkningsvekst
- Radioaktiv nedbrytning
- Rentevekst
- Spredning av sykdommer
- Teknologisk utvikling (Moores lov)

**Kjennetegn:** Dataene viser tilnaermet konstant prosentvis endring.`,
    },
    {
      id: 'r2-6-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Bakterievekst',
      problem: `I et eksperiment males antall bakterier i en kultur:

| Timer (t) | 0    | 2    | 4    | 6    | 8    |
|-----------|------|------|------|------|------|
| Antall (N)| 1000 | 1480 | 2190 | 3240 | 4790 |

a) Bruk eksponentiell regresjon til å finne en modell $N = N_0 \\cdot e^{kt}$.
b) Finn doblingstiden.
c) Estimer antall bakterier etter 12 timer.`,
      solution: `**a) Eksponentiell regresjon**

Ved a bruke eksponentiell regresjon i GeoGebra far vi:
$$N = 1000 \\cdot e^{0.2t}$$

eller tilsvarende $N = 1000 \\cdot 1.221^t$

**b) Doblingstid**

Doblingstiden finnes ved $e^{kt_{1/2}} = 2$:
$$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{\\ln 2}{0.2} \\approx 3.47 \\text{ timer}$$

**c) Antall etter 12 timer**

$$N(12) = 1000 \\cdot e^{0.2 \\cdot 12} = 1000 \\cdot e^{2.4} \\approx 11\\,023$$

Etter 12 timer er det ca. **11 000 bakterier**.`,
    },
    {
      id: 'r2-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: `En radioaktiv prove har folgende aktivitet (i Becquerel):

| Dager   | 0    | 5    | 10   | 15   | 20   |
|---------|------|------|------|------|------|
| Aktivitet | 800 | 565 | 400 | 283 | 200 |

a) Finn en eksponentiell modell $A = A_0 \\cdot e^{-\\lambda t}$.
b) Bestem halveringstiden.
c) Nar er aktiviteten redusert til 50 Bq?`,
        solution: `a) $A = 800 \\cdot e^{-0.0693t}$ (eller $A = 800 \\cdot 0.933^t$)

b) Halveringstid: $t_{1/2} = \\frac{\\ln 2}{0.0693} \\approx 10$ dager

c) $50 = 800 \\cdot e^{-0.0693t}$ gir $t \\approx 40$ dager`,
        hints: ['Ved halveringstid er $A = A_0/2$.'],
      },
    },

    // ========== POLYNOMISK REGRESJON ==========
    {
      id: 'r2-6-5-poly-intro',
      type: 'text',
      content: `## Polynomisk regresjon

Nar data har krumning som ikke passer lineært eller eksponentielt, kan vi bruke polynomer:

- **Andregrads** (parabel): $y = ax^2 + bx + c$
- **Tredjegrads**: $y = ax^3 + bx^2 + cx + d$
- **Hoyere grader**: Brukes sjeldnere

Jo hoyere grad, jo bedre tilpasning til dataene - men ogsa storre risiko for **overtilpasning**.`,
    },
    {
      id: 'r2-6-5-warning-1',
      type: 'warning',
      title: 'Overtilpasning',
      content: `Et polynom av hoey nok grad vil ga gjennom alle datapunktene, men det betyr ikke at modellen er god!

**Overtilpasning** (overfitting) oppstar nar modellen fanger opp stoy i dataene i stedet for den underliggende trenden. En god modell skal være enkel nok til a generalisere.`,
    },
    {
      id: 'r2-6-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Kastet ball',
      problem: `En ball kastes oppover. Hoeyden (i meter) males ved ulike tidspunkt:

| Tid (s)  | 0   | 0.5 | 1.0 | 1.5 | 2.0 | 2.5 |
|----------|-----|-----|-----|-----|-----|-----|
| Hoeyde (m)| 1.5 | 6.3 | 9.1 | 9.9 | 8.7 | 5.5 |

a) Forklar hvorfor en andregradsfunksjon er passende.
b) Finn modellen $h(t) = at^2 + bt + c$.
c) Finn maksimal hoeyde og nar den nas.`,
      solution: `**a) Hvorfor andregradsmodell?**

Bevegelse under tyngdekraften følger: $h(t) = h_0 + v_0 t - \\frac{1}{2}gt^2$

Dette er en andregradsfunksjon med negativt ledende koeffisient.

**b) Regresjonsmodell**

Ved andregradstilpasning i GeoGebra:
$$h(t) = -4.9t^2 + 9.8t + 1.5$$

**c) Maksimal hoeyde**

Toppunktet finnes der $h'(t) = 0$:
$$h'(t) = -9.8t + 9.8 = 0$$
$$t = 1 \\text{ sekund}$$

Maksimal hoeyde:
$$h(1) = -4.9 \\cdot 1^2 + 9.8 \\cdot 1 + 1.5 = 6.4 \\text{ m}$$

Ballen nar maksimal hoeyde **6.4 m** etter **1 sekund**.`,
    },
    {
      id: 'r2-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Bremselengden (i meter) for en bil ved ulike hastigheter:

| Hastighet (km/h) | 30  | 50  | 70  | 90  | 110 |
|------------------|-----|-----|-----|-----|-----|
| Bremselengde (m) | 6   | 15  | 28  | 45  | 66  |

a) Finn en andregradmodell $s(v) = av^2 + bv + c$.
b) Hva er bremselengden ved 100 km/h?
c) Ved hvilken hastighet er bremselengden 80 m?`,
        solution: `a) $s(v) = 0.005v^2 + 0.05v + 0.5$ (tilnaermet)

b) $s(100) = 0.005 \\cdot 100^2 + 0.05 \\cdot 100 + 0.5 \\approx 55.5$ m

c) Loser $80 = 0.005v^2 + 0.05v + 0.5$ gir $v \\approx 121$ km/h`,
        hints: ['Bremselengde vokser omtrent med kvadratet av hastigheten.'],
      },
    },

    // ========== DIGITALE VERKTOY ==========
    {
      id: 'r2-6-5-digital-intro',
      type: 'text',
      content: `## Bruk av digitale verktøy

I praksis bruker vi alltid digitale verktøy for regresjon. Her er de vanligste:

**GeoGebra:**
1. Lag en liste med x-verdier: \`L1 = {x1, x2, ...}\`
2. Lag en liste med y-verdier: \`L2 = {y1, y2, ...}\`
3. Bruk kommandoer som:
   - \`RegLin(L1, L2)\` - lineær regresjon
   - \`RegExp(L1, L2)\` - eksponentiell regresjon
   - \`RegPoly(L1, L2, n)\` - polynom av grad n

**Kalkulator (TI/Casio):**
- Legg inn data i statistikkmodulen
- Velg regresjonstype
- Les av koeffisientene`,
    },
    {
      id: 'r2-6-5-geogebra-1',
      type: 'geogebra',
      title: 'Interaktiv regresjon i GeoGebra',
      description: 'Prov a legge inn data og utfore regresjon. Klikk på punkter for a se hvordan regresjonskurven tilpasses.',
      appType: 'graphing',
      commands: [
        'L1 = {0, 2, 4, 6, 8, 10}',
        'L2 = {45.2, 47.1, 49.3, 51.0, 53.2, 55.1}',
        'RegLin(L1, L2)',
      ],
    },
    {
      id: 'r2-6-5-example-4',
      type: 'example',
      title: 'Eksempel 4: CO2-konsentrasjon (Mauna Loa)',
      problem: `Malt CO2-konsentrasjon (ppm) ved Mauna Loa-observatoriet:

| Ar   | 1960 | 1970 | 1980 | 1990 | 2000 | 2010 | 2020 |
|------|------|------|------|------|------|------|------|
| CO2  | 317  | 326  | 339  | 354  | 370  | 390  | 414  |

a) Bruk GeoGebra til å finne bade lineær og andregradstilpasning.
b) Hvilken modell passer best?
c) Estimer CO2-nivaet i 2030.`,
      solution: `**a) Regresjon i GeoGebra**

La $x$ være antall år etter 1960.

**Lineaer:** $y = 1.58x + 314.6$ ($R^2 = 0.987$)

**Andregrads:** $y = 0.012x^2 + 0.87x + 316.8$ ($R^2 = 0.999$)

**b) Beste modell**

Andregradstilpasningen har hoyere $R^2$ og fanger opp at veksten akselererer. Den er fysisk rimelig fordi utslippene har okt over tid.

**c) Estimat for 2030**

For $x = 70$ (ar 2030):

Lineaer: $y = 1.58 \\cdot 70 + 314.6 = 425$ ppm

Andregrads: $y = 0.012 \\cdot 70^2 + 0.87 \\cdot 70 + 316.8 = 436$ ppm

Andregradmodellen forutsier ca. **436 ppm** i 2030.`,
    },
    {
      id: 'r2-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-4',
        number: '4',
        type: 'interactive',
        difficulty: 'medium',
        tool: 'geogebra-graph',
        task: `Verdensrekorden på 100 m sprint (menn) over tid:

| Ar   | 1912 | 1936 | 1968 | 1988 | 1999 | 2009 |
|------|------|------|------|------|------|------|
| Tid (s)| 10.6 | 10.2 | 9.95 | 9.92 | 9.79 | 9.58 |

a) Lag en lineær modell i GeoGebra.
b) Hva forutsier modellen for 2050?
c) Er dette realistisk? Diskuter begrensninger.`,
        solution: `a) La $x$ være antall år etter 1900. Lineaer regresjon gir: $t = -0.0097x + 10.7$

b) For 2050 ($x = 150$): $t = -0.0097 \\cdot 150 + 10.7 = 9.24$ s

c) Dette er urealistisk langsiktig - modellen antyder at rekorden til slutt blir negativ! Lineaere modeller egner seg darlig for ekstrapolasjon langt frem i tid.`,
        hints: ['Bruk RegLin-kommandoen i GeoGebra.'],
        initialCommands: [
          'L1 = {12, 36, 68, 88, 99, 109}',
          'L2 = {10.6, 10.2, 9.95, 9.92, 9.79, 9.58}',
        ],
      },
    },

    // ========== RESIDUALER ==========
    {
      id: 'r2-6-5-residual-intro',
      type: 'text',
      content: `## Residualer og modellvurdering

Et **residual** er forskjellen mellom observert verdi og modellens verdi:

$$e_i = y_i - \\hat{y}_i$$

der $y_i$ er observert verdi og $\\hat{y}_i$ er modellens predikerte verdi.`,
    },
    {
      id: 'r2-6-5-def-2',
      type: 'definition',
      title: 'Residualanalyse',
      content: `**God modell:**
- Residualene bor være tilfeldige (ingen monster)
- Residualene bor være sma sammenlignet med y-verdiene
- Residualene bor være omtrent normalfordelte

**Tegn på darlig modell:**
- Systematisk monster i residualene (f.eks. kurve)
- Store residualer
- Residualer som vokser med x`,
    },
    {
      id: 'r2-6-5-theorem-2',
      type: 'theorem',
      title: 'Bestemmelseskoeffisienten $R^2$',
      content: `$$R^2 = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2}$$

**Tolkning:**
- $R^2 = 1$: Perfekt tilpasning
- $R^2 = 0$: Modellen forklarer ingenting
- $R^2 > 0.9$: Veldig god tilpasning
- $R^2 > 0.7$: God tilpasning

$R^2$ angir andelen av variasjonen i $y$ som forklares av modellen.`,
    },
    {
      id: 'r2-6-5-example-5',
      type: 'example',
      title: 'Eksempel 5: Residualanalyse',
      problem: `For befolkningseksempelet (Eksempel 1) hadde vi modellen $y = 0.99x + 45.2$.

Beregn residualene og vurder modellen.

| x   | 0    | 2    | 4    | 6    | 8    | 10   |
|-----|------|------|------|------|------|------|
| y   | 45.2 | 47.1 | 49.3 | 51.0 | 53.2 | 55.1 |`,
      solution: `**Beregner modellverdier og residualer:**

| x | $y$ | $\\hat{y} = 0.99x + 45.2$ | $e = y - \\hat{y}$ |
|---|-----|---------------------------|-------------------|
| 0 | 45.2 | 45.20 | 0.00 |
| 2 | 47.1 | 47.18 | -0.08 |
| 4 | 49.3 | 49.16 | 0.14 |
| 6 | 51.0 | 51.14 | -0.14 |
| 8 | 53.2 | 53.12 | 0.08 |
| 10| 55.1 | 55.10 | 0.00 |

**Vurdering:**
- Residualene er sma (alle $|e| < 0.15$)
- Ingen tydelig monster
- $R^2 = 0.999$ (meget god tilpasning)

Konklusjon: Den lineære modellen passer godt til dataene.`,
    },
    {
      id: 'r2-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `For bakterieeksempelet (Eksempel 2) hadde vi $N = 1000 \\cdot e^{0.2t}$.

a) Beregn residualene for $t = 0, 2, 4, 6, 8$.
b) Vurder om modellen passer godt.`,
        solution: `a) Residualer:
| t | N (observert) | $\\hat{N}$ (modell) | Residual |
|---|---------------|---------------------|----------|
| 0 | 1000 | 1000 | 0 |
| 2 | 1480 | 1492 | -12 |
| 4 | 2190 | 2226 | -36 |
| 6 | 3240 | 3320 | -80 |
| 8 | 4790 | 4953 | -163 |

b) Residualene har en systematisk tendens (alle negative etter $t=0$), noe som tyder på at modellen kanskje kan forbedres. Men relativt sett er avvikene sma (< 4%).`,
        hints: ['Bruk formelen $\\hat{N} = 1000 \\cdot e^{0.2t}$ for hver t-verdi.'],
      },
    },

    // ========== INTERPOLASJON OG EKSTRAPOLASJON ==========
    {
      id: 'r2-6-5-interpol-intro',
      type: 'text',
      content: `## Interpolasjon vs ekstrapolasjon

Nar vi bruker en modell til a anslaa verdier, skiller vi mellom to tilfeller:`,
    },
    {
      id: 'r2-6-5-def-3',
      type: 'definition',
      title: 'Interpolasjon og ekstrapolasjon',
      content: `**Interpolasjon:** Anslae verdier **innenfor** maleomradet.
- Relativt sikre anslag
- Modellen er testet mot data i omradet

**Ekstrapolasjon:** Anslae verdier **utenfor** maleomradet.
- Usikre anslag
- Modellen er ikke testet i dette omradet
- Risiko for store feil

**Tommelregel:** Vaer forsiktig med ekstrapolasjon, saerlig langt utenfor maleomradet!`,
    },
    {
      id: 'r2-6-5-example-6',
      type: 'example',
      title: 'Eksempel 6: Farlig ekstrapolasjon',
      problem: `En elev maler temperaturen i en kopp kaffe mens den kjoeles ned:

| Tid (min) | 0  | 5  | 10 | 15 | 20 |
|-----------|----|----|----|----|----|
| Temp (C)  | 80 | 65 | 54 | 45 | 38 |

Eleven lager en lineær modell: $T = -2.1t + 78$

a) Hva forutsier modellen for $t = 40$ min?
b) Hva er problemet med denne spaadomsn?`,
      solution: `**a) Modellens spaadom**

$T(40) = -2.1 \\cdot 40 + 78 = -6^\\circ$C

**b) Problemet**

Modellen forutsier negativ temperatur, noe som er fysisk umulig for en kopp kaffe i romtemperatur!

**Forklaring:**

Avkjoling av kaffe følger **Newtons avkjolingslov**:
$$T(t) = T_{rom} + (T_0 - T_{rom}) \\cdot e^{-kt}$$

Temperaturen naermer seg romtemperaturen asymptotisk. Den lineære modellen er bare god for kort tid.

Dette illustrerer faren ved ekstrapolasjon langt utenfor maleomradet.`,
    },
    {
      id: 'r2-6-5-warning-2',
      type: 'warning',
      title: 'Forsiktighetsregler for ekstrapolasjon',
      content: `1. **Fysisk rimelighet:** Gir modellen mening? Kan temperaturen bli negativ?

2. **Tidshorisont:** Jo lengre ut du ekstrapolerer, jo storre usikkerhet.

3. **Modellvalg:** En modell som passer lokalt, passer ikke nodvendigvis globalt.

4. **Konfidensintervaller:** Ved ekstrapolasjon bor usikkerheten alltid oppgis.`,
    },
    {
      id: 'r2-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Norges befolkning (i millioner):

| Ar   | 1900 | 1950 | 1980 | 2000 | 2020 |
|------|------|------|------|------|------|
| Bef. | 2.2  | 3.3  | 4.1  | 4.5  | 5.4  |

a) Lag bade en lineær og en eksponentiell modell.
b) Sammenlign spådommene for år 2050.
c) Hvilken modell er mest rimelig? Begrunn.`,
        solution: `a) La $x$ være antall år etter 1900:
   - Lineaer: $B = 0.026x + 2.3$
   - Eksponentiell: $B = 2.2 \\cdot e^{0.0075x}$

b) For 2050 ($x = 150$):
   - Lineaer: $B = 0.026 \\cdot 150 + 2.3 = 6.2$ millioner
   - Eksponentiell: $B = 2.2 \\cdot e^{0.0075 \\cdot 150} = 6.8$ millioner

c) Den lineære modellen er trolig mer rimelig fordi befolkningsveksten i Norge har avtatt. Eksponentiell vekst forutsetter konstant vekstrate, noe som ikke gjelder for modne okonomier.`,
        hints: ['Tenk på om vekstraten har vaert konstant gjennom perioden.'],
      },
    },

    // ========== FLERE EKSEMPLER MED REELLE DATA ==========
    {
      id: 'r2-6-5-example-7',
      type: 'example',
      title: 'Eksempel 7: Issmelting i Arktis',
      problem: `Arlig minimum isutbredelse i Arktis (millioner km$^2$):

| Ar   | 1980 | 1990 | 2000 | 2005 | 2010 | 2015 | 2020 |
|------|------|------|------|------|------|------|------|
| Is   | 7.8  | 6.2  | 6.3  | 5.6  | 4.9  | 4.6  | 3.9  |

a) Bruk lineær regresjon til a modellere utviklingen.
b) Nar forutsier modellen at Arktis er isfritt om sommeren?`,
      solution: `**a) Lineaer regresjon**

La $x$ være antall år etter 1980:
$$A = -0.095x + 7.6$$

($R^2 \\approx 0.93$, god tilpasning)

**b) Isfritt Arktis**

Setter $A = 0$:
$$0 = -0.095x + 7.6$$
$$x = 80$$

Dette tilsvarer aret $1980 + 80 = 2060$.

**Viktig forbehold:** Dette er en grov ekstrapolasjon. Klimasystemer er komplekse, og modellen tar ikke hensyn til tilbakekoblingsmekanismer eller tiltak mot klimaendringer.`,
    },
    {
      id: 'r2-6-5-example-8',
      type: 'example',
      title: 'Eksempel 8: Smarttelefonpenetrasjon',
      problem: `Andel av nordmenn med smarttelefon (%):

| Ar   | 2010 | 2012 | 2014 | 2016 | 2018 | 2020 |
|------|------|------|------|------|------|------|
| %    | 30   | 55   | 75   | 85   | 92   | 95   |

a) Forklar hvorfor verken lineær eller eksponentiell modell passer.
b) Foresla en bedre modelltype.`,
      solution: `**a) Hvorfor standard modeller ikke passer**

**Lineaer modell:** Ville forutsi over 100% etter hvert, noe som er umulig.

**Eksponentiell modell:** Veksten avtar nar markedet mettes. Eksponentiell vekst passer bare i begynnelsen.

**b) Bedre modell: Logistisk vekst**

En logistisk funksjon passer:
$$y = \\frac{L}{1 + e^{-k(x-x_0)}}$$

der $L = 100$ (maksimalt 100%).

Ved logistisk regresjon far vi omtrent:
$$y = \\frac{100}{1 + e^{-0.4(x-11)}}$$

der $x$ er antall år etter 2000.

Logistisk vekst kjennetegnes av:
- Sakte start
- Rask vekst i midtfasen
- Avtagende vekst nar metning naermer seg`,
    },
    {
      id: 'r2-6-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Stroemforbruk i et hus malt gjennom et dogn (kWh):

| Kl.  | 00  | 04  | 08  | 12  | 16  | 20  |
|------|-----|-----|-----|-----|-----|-----|
| kWh  | 0.8 | 0.5 | 2.5 | 1.8 | 3.2 | 2.0 |

a) Hvorfor passer ikke et polynom av lav grad?
b) Foresla en modell som kan fange opp det periodiske monsteret.`,
        solution: `a) Stroemforbruket varierer periodisk gjennom dognet (hoeyt om morgenen og kvelden, lavt om natten). Et polynom vil ikke fange opp denne sykliske oppfoerselen.

b) En trigonometrisk modell passer bedre:
$$P(t) = A + B\\sin\\left(\\frac{2\\pi t}{24} + \\phi\\right) + C\\sin\\left(\\frac{4\\pi t}{24} + \\psi\\right)$$

Her brukes sinusfunksjoner med periode 24 timer for a modellere den daglige variasjonen. Flere ledd kan legges til for a fange mer komplekse monstre.`,
        hints: ['Tenk på hva slags funksjon som gjentar seg med fast periode.'],
      },
    },
    {
      id: 'r2-6-5-example-9',
      type: 'example',
      title: 'Eksempel 9: Oekonomisk vekst',
      problem: `Norges BNP (milliarder NOK, faste 2015-priser):

| Ar   | 2000 | 2005 | 2010 | 2015 | 2020 |
|------|------|------|------|------|------|
| BNP  | 2450 | 2750 | 2900 | 3100 | 3050 |

a) Finn en passende regresjonsmodell.
b) Beregn gjennomsnittlig arlig vekstrate.
c) Diskuter hvorfor BNP falt i 2020.`,
      solution: `**a) Regresjonsmodell**

La $x$ være antall år etter 2000.

Lineaer tilpasning: $BNP = 29x + 2480$

Eksponentiell tilpasning: $BNP = 2450 \\cdot e^{0.011x}$

Begge gir $R^2 \\approx 0.85$, men ingen fanger fallet i 2020.

**b) Gjennomsnittlig vekstrate**

Fra eksponentiell modell: ca. 1.1% per ar

Eller direkte: $\\left(\\frac{3050}{2450}\\right)^{1/20} - 1 \\approx 1.1\\%$

**c) Diskusjon av 2020**

BNP falt i 2020 på grunn av koronapandemien. Dette er et eksempel på en **ekstern sjokk** som modellen ikke kan forutsi. Maledata fra kriseperioder bor behandles forsiktig i modellering.`,
    },
    {
      id: 'r2-6-5-example-10',
      type: 'example',
      title: 'Eksempel 10: Vindhastighetens effekt på vindkraft',
      problem: `Malt effekt (kW) fra en vindturbin ved ulike vindhastigheter:

| v (m/s) | 3   | 5   | 7   | 9   | 11  | 13  |
|---------|-----|-----|-----|-----|-----|-----|
| P (kW)  | 15  | 70  | 190 | 400 | 730 | 1200|

a) Forklar teoretisk hvilken sammenheng vi forventer.
b) Test hypotesen med regresjon.`,
      solution: `**a) Teoretisk sammenheng**

Teorien sier at vindkraft følger:
$$P = \\frac{1}{2}\\rho A v^3 \\cdot C_p$$

der $v$ er vindhastigheten. Vi forventer altsa $P \\propto v^3$.

**b) Test med regresjon**

Vi bruker potensregresjon $P = av^b$ eller tilpasser $\\ln P = \\ln a + b \\cdot \\ln v$.

Ved regresjon far vi:
$$P = 0.55 v^{3.02}$$

Eksponenten $b \\approx 3$ bekrefter teorien!

**Konklusjon:** Dataene stemmer godt med den teoretiske kubiske sammenhengen mellom vindhastighet og effekt.`,
    },
    {
      id: 'r2-6-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `Bilens drivstofforbruk (liter/mil) ved ulike hastigheter:

| Hastighet (km/h) | 50  | 70  | 90  | 110 | 130 |
|------------------|-----|-----|-----|-----|-----|
| Forbruk (l/mil)  | 0.52| 0.48| 0.50| 0.58| 0.72|

a) Finn et andregradspolynom som modellerer forbruket.
b) Ved hvilken hastighet er forbruket lavest?`,
        solution: `a) Andregradstilpasning: $F(v) = 0.00008v^2 - 0.013v + 0.98$

b) Minimum finnes der $F'(v) = 0$:
$F'(v) = 0.00016v - 0.013 = 0$
$v = 81$ km/h

Forbruket er lavest ved ca. **80 km/h**.`,
        hints: ['Bruk RegPoly(L1, L2, 2) i GeoGebra.'],
      },
    },

    // ========== PRESENTASJON AV RESULTATER ==========
    {
      id: 'r2-6-5-present-intro',
      type: 'text',
      content: `## Presentasjon av resultater

Nar du presenterer en matematisk modell, bor du inkludere:

1. **Datakilden:** Hvor kommer dataene fra? Er de palitelige?

2. **Modellvalg:** Hvilken type modell ble valgt og hvorfor?

3. **Modellens parametere:** Skriv ut funksjonen med koeffisienter.

4. **Tilpasningsmal:** Oppgi $R^2$ eller andre kvalitetsmal.

5. **Grafisk fremstilling:** Vis data og modell sammen.

6. **Residualanalyse:** Er det systematiske avvik?

7. **Gyldighetsomrade:** Hvor gjelder modellen?

8. **Usikkerhet:** Vurder begrensninger og usikkerhet.`,
    },
    {
      id: 'r2-6-5-example-11',
      type: 'example',
      title: 'Eksempel 11: Fullstendig modellrapport',
      problem: `Skriv en kort rapport for befolkningsmodellen fra Eksempel 1.`,
      solution: `**Modellrapport: Befolkningsutvikling**

**1. Datakilde**
Data fra SSB for befolkning i perioden 2010-2020.

**2. Modellvalg**
Lineaer modell valgt fordi dataene viser jevn vekst uten akselerasjon.

**3. Modell**
$$B(t) = 0.99t + 45.2$$
der $t$ er antall år etter 2010 og $B$ er befolkning i tusen.

**4. Tilpasning**
$R^2 = 0.999$, noe som indikerer svært god tilpasning.

**5. Residualanalyse**
Residualene viser ingen systematisk monster og er alle under 0.15 (tusen).

**6. Gyldighetsomrade**
Modellen er gyldig for interpolasjon i perioden 2010-2020. Ekstrapolasjon utover 5-10 år er usikker.

**7. Konklusjon**
Befolkningen vokser med ca. 1000 personer per ar. Modellen kan brukes til kortsiktige prognoser.`,
    },
    {
      id: 'r2-6-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en kort modellrapport for et av de tidligere eksemplene (bakterievekst, CO2-konsentrasjon, eller vindkraft). Inkluder alle punktene fra seksjonen om presentasjon.`,
        solution: `Eksempel på rapport for bakterievekst:

**1. Datakilde:** Laboratoriemalinger over 8 timer.

**2. Modellvalg:** Eksponentiell modell fordi bakterier formerer seg ved celledeling.

**3. Modell:** $N = 1000 \\cdot e^{0.2t}$ der $t$ er tid i timer.

**4. Tilpasning:** $R^2 = 0.998$

**5. Residualanalyse:** Sma systematiske avvik tyder på at veksten kanskje avtar mot slutten.

**6. Gyldighetsomrade:** 0-8 timer. Utenfor dette vil naeringsbegrensning pavirke veksten.

**7. Konklusjon:** Bakteriene dobler seg ca. hver 3.5 time i denne fasen.`,
        hints: ['Velg ett eksempel og folg malen systematisk.'],
      },
    },

    // ========== FLERE OEVINGSOPPGAVER ==========
    {
      id: 'r2-6-5-example-12',
      type: 'example',
      title: 'Eksempel 12: Korrelasjon uten kausalitet',
      problem: `To datasett fra USA viser:

| Ar   | Iskremssalg (mill $) | Drukningsulykker |
|------|---------------------|------------------|
| 2015 | 6.8 | 3200 |
| 2016 | 7.2 | 3400 |
| 2017 | 7.5 | 3550 |
| 2018 | 7.9 | 3700 |
| 2019 | 8.3 | 3850 |

a) Finn korrelasjonen mellom iskremssalg og drukningsulykker.
b) Betyr dette at iskrem forarsaker drukning?`,
      solution: `**a) Korrelasjon**

Ved a plotte dataene og beregne, finner vi:
$r \\approx 0.99$ (svært sterk positiv korrelasjon)

**b) Kausalitet?**

**Nei!** Dette er et klassisk eksempel på **spurios korrelasjon**.

Begge variablene pavirkes av en tredje faktor: **varmt vaer**.
- Nar det er varmt, spiser folk mer iskrem
- Nar det er varmt, bader flere mennesker, og dermed skjer flere drukningsulykker

**Konklusjon:** Korrelasjon innebærer ikke kausalitet. Selv en perfekt matematisk sammenheng betyr ikke at den ene variabelen forarsaker den andre.`,
    },
    {
      id: 'r2-6-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'lett',
        task: `Hvilken type regresjon (lineær, eksponentiell, polynomisk) ville du brukt for folgende situasjoner? Begrunn valget.

a) Hoeyden til en plante som funksjon av tid (fra spaedeplante til voksen)
b) Akselerasjon av en bil fra stillstand
c) Befolkningsvekst i et utviklingsland
d) Temperatur i en stekeovn som varmes opp`,
        solution: `a) **Logistisk** (S-kurve): Planten vokser raskt i begynnelsen, men veksten avtar nar den naermer seg maksimal hoeyde.

b) **Lineaer** (tilnaermet): Hvis kraften er konstant, er akselerasjonen konstant og hastigheten oker lineært.

c) **Eksponentiell**: Befolkninger vokser ofte eksponentielt i tidlige faser, men kan ga over til logistisk nar ressurser begrenser.

d) **Eksponentiell tilnaerming**: Temperaturen naermer seg en grense (innstilt temperatur) asymptotisk. Newtons avkjolingslov i revers.`,
        hints: ['Tenk på om veksten er konstant, proporsjonal med naværende verdi, eller avtar mot en grense.'],
      },
    },
    {
      id: 'r2-6-5-ex-11',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: `Et firma maler antall solgte enheter av et nytt produkt:

| Maned   | 1   | 2   | 3   | 4   | 5   | 6   |
|---------|-----|-----|-----|-----|-----|-----|
| Salg    | 120 | 180 | 260 | 350 | 420 | 470 |

a) Finn bade lineær og andregradstilpasning.
b) Beregn $R^2$ for begge modellene.
c) Hvilken modell forutsier mest salg i maned 12?`,
        solution: `a) Lineaer: $S = 72m + 60$
   Andregrads: $S = -8m^2 + 120m + 10$

b) Lineaer: $R^2 \\approx 0.97$
   Andregrads: $R^2 \\approx 0.995$

c) For maned 12:
   Lineaer: $S = 72 \\cdot 12 + 60 = 924$
   Andregrads: $S = -8 \\cdot 144 + 120 \\cdot 12 + 10 = 298$

Den lineære modellen gir mye hoyere anslag. Andregradmodellen antyder at veksten avtar og salget vil synke, noe som kan være realistisk for et produkt som mettes i markedet.`,
        hints: ['Sammenlign $R^2$-verdiene og vurder hvilken modell som er mest realistisk på lang sikt.'],
      },
    },
    {
      id: 'r2-6-5-example-13',
      type: 'example',
      title: 'Eksempel 13: Integrasjon av regresjonsmodell',
      problem: `Vannforingen i en elv (i $m^3/s$) varierer gjennom aret:

| Maned   | Jan | Mar | Mai | Jul | Sep | Nov |
|---------|-----|-----|-----|-----|-----|-----|
| $Q$     | 15  | 20  | 45  | 35  | 25  | 18  |

En modell for vannføringen er: $Q(t) = 25 + 18\\sin\\left(\\frac{\\pi t}{6}\\right)$

der $t$ er antall måneder etter januar.

Beregn total vannmengde som renner forbi i løpet av et år.`,
      solution: `**Total vannmengde**

Total vannmengde er integralet av vannføringen over ett år (12 måneder):

$$V = \\int_0^{12} Q(t) \\, dt = \\int_0^{12} \\left(25 + 18\\sin\\left(\\frac{\\pi t}{6}\\right)\\right) dt$$

$$V = \\left[25t - 18 \\cdot \\frac{6}{\\pi}\\cos\\left(\\frac{\\pi t}{6}\\right)\\right]_0^{12}$$

$$V = \\left(25 \\cdot 12 - \\frac{108}{\\pi}\\cos(2\\pi)\\right) - \\left(0 - \\frac{108}{\\pi}\\cos(0)\\right)$$

$$V = 300 - \\frac{108}{\\pi} + \\frac{108}{\\pi} = 300 \\text{ (i enheter maned} \\cdot m^3/s\\text{)}$$

For a fa $m^3$: $V = 300 \\cdot 30 \\cdot 24 \\cdot 3600 \\approx 7.8 \\cdot 10^8 \\, m^3$

**Konklusjon:** Ca. 780 millioner kubikkmeter vann renner forbi i løpet av aret.`,
    },
    {
      id: 'r2-6-5-example-14',
      type: 'example',
      title: 'Eksempel 14: Derivasjon av modell',
      problem: `Befolkningen i en by modelleres med:
$$P(t) = \\frac{100}{1 + 9e^{-0.1t}}$$ (i tusen)

der $t$ er antall år etter 2000.

a) Finn $P'(t)$ og tolk denne.
b) Nar er befolkningsveksten størst?`,
      solution: `**a) Derivasjon**

La $u = 1 + 9e^{-0.1t}$. Da er $P = 100u^{-1}$.

$$P'(t) = -100u^{-2} \\cdot u' = -100 \\cdot \\frac{9 \\cdot (-0.1)e^{-0.1t}}{(1 + 9e^{-0.1t})^2}$$

$$P'(t) = \\frac{90e^{-0.1t}}{(1 + 9e^{-0.1t})^2}$$

**Tolkning:** $P'(t)$ er vekstraten (antall tusen nye innbyggere per ar).

**b) Maksimal vekst**

For logistisk vekst er veksten maksimal nar $P = \\frac{L}{2}$, alts $P = 50$.

$$50 = \\frac{100}{1 + 9e^{-0.1t}}$$
$$1 + 9e^{-0.1t} = 2$$
$$e^{-0.1t} = \\frac{1}{9}$$
$$t = \\frac{\\ln 9}{0.1} \\approx 22$$

Befolkningsveksten er størst rundt år **2022**.`,
    },
    {
      id: 'r2-6-5-ex-12',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Temperaturen i et rom etter at varmen slas av modelleres med:
$$T(t) = 5 + 15e^{-0.05t}$$
der $t$ er tid i timer og $T$ er i grader Celsius.

a) Hva er starttemperaturen?
b) Hva naermer temperaturen seg nar $t \\to \\infty$?
c) Finn $T'(t)$ og tolk fortegnet.
d) Nar synker temperaturen raskest?`,
        solution: `a) $T(0) = 5 + 15e^0 = 5 + 15 = 20^\\circ$C

b) Nar $t \\to \\infty$: $e^{-0.05t} \\to 0$, sa $T \\to 5^\\circ$C (utetemperaturen)

c) $T'(t) = 15 \\cdot (-0.05)e^{-0.05t} = -0.75e^{-0.05t}$

Fortegnet er alltid negativt, noe som betyr at temperaturen synker hele tiden.

d) $|T'(t)| = 0.75e^{-0.05t}$ er størst nar $t = 0$.
Temperaturen synker raskest i begynnelsen, med $T'(0) = -0.75^\\circ$C per time.`,
        hints: ['Bruk kjerneregelen ved derivasjon av $e^{-0.05t}$.'],
      },
    },
    {
      id: 'r2-6-5-ex-13',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Effekten fra et solcellepanel gjennom en dag modelleres med:
$$P(t) = 500\\sin^2\\left(\\frac{\\pi t}{12}\\right)$$ for $0 \\leq t \\leq 12$

der $t$ er timer etter soloppgang og $P$ er i watt.

a) Nar er effekten maksimal?
b) Beregn total energiproduksjon gjennom dagen (i kWh).`,
        solution: `a) Maksimal effekt nar $\\sin^2\\left(\\frac{\\pi t}{12}\\right) = 1$, altsa nar $\\frac{\\pi t}{12} = \\frac{\\pi}{2}$, som gir $t = 6$ timer.

Maksimal effekt er $P_{max} = 500$ W midt på dagen.

b) Total energi:
$$E = \\int_0^{12} 500\\sin^2\\left(\\frac{\\pi t}{12}\\right) dt$$

Bruker $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$:

$$E = 250\\int_0^{12} \\left(1 - \\cos\\left(\\frac{\\pi t}{6}\\right)\\right) dt$$

$$E = 250\\left[t - \\frac{6}{\\pi}\\sin\\left(\\frac{\\pi t}{6}\\right)\\right]_0^{12}$$

$$E = 250 \\cdot 12 = 3000 \\text{ Wh} = 3 \\text{ kWh}$$`,
        hints: ['Bruk identiteten $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$.'],
      },
    },
    {
      id: 'r2-6-5-ex-14',
      type: 'exercise',
      exercise: {
        id: 'r2-6-5-ex-14',
        number: '14',
        type: 'interactive',
        difficulty: 'vanskelig',
        tool: 'geogebra-graph',
        task: `Nedenfor er temperaturen i en innsjoe malt på ulike dyp om sommeren:

| Dyp (m)   | 0   | 2   | 4   | 6   | 8   | 10  |
|-----------|-----|-----|-----|-----|-----|-----|
| Temp (C)  | 22  | 21  | 18  | 12  | 8   | 6   |

a) Finn en passende regresjonsmodell (prov bade lineær, eksponentiell og polynom).
b) Beregn gjennomsnittstemperaturen i de overste 10 meterne ved integrasjon.
c) Bruk derivasjon til å finne ved hvilket dyp temperaturen synker raskest.`,
        solution: `a) Andregradstilpasning gir: $T(d) = 0.08d^2 - 2.4d + 22$

Eksponentiell: $T(d) = 22 \\cdot e^{-0.13d}$

Begge gir god tilpasning, men polynomet er noe bedre ($R^2 \\approx 0.995$).

b) Gjennomsnittstemperatur:
$$\\bar{T} = \\frac{1}{10}\\int_0^{10} (0.08d^2 - 2.4d + 22) \\, dd$$
$$= \\frac{1}{10}\\left[\\frac{0.08d^3}{3} - 1.2d^2 + 22d\\right]_0^{10}$$
$$= \\frac{1}{10}(26.7 - 120 + 220) = 12.7^\\circ C$$

c) $T'(d) = 0.16d - 2.4$

Raskest nedgang nar $|T'|$ er størst. $T'(0) = -2.4$, $T'(10) = -0.8$.
Temperaturen synker raskest naer overflaten (ved $d = 0$).`,
        hints: ['Sammenlign $R^2$-verdier for ulike regresjonstyper.'],
        initialCommands: [
          'L1 = {0, 2, 4, 6, 8, 10}',
          'L2 = {22, 21, 18, 12, 8, 6}',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-6-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapitlet har du laert:

**Regresjonstyper:**
- **Lineaer:** $y = ax + b$ - for jevn vekst/nedgang
- **Eksponentiell:** $y = ae^{bx}$ - for prosentvis vekst
- **Polynomisk:** $y = a_nx^n + \\ldots + a_0$ - for mer komplekse monstre

**Modellvurdering:**
- Bruk $R^2$ for a male tilpasning
- Analyser residualer for systematiske avvik
- Vurder fysisk rimelighet

**Interpolasjon vs ekstrapolasjon:**
- Interpolasjon (innenfor data): Relativt sikkert
- Ekstrapolasjon (utenfor data): Krever forsiktighet

**Presentasjon:**
- Oppgi datakilde og modellvalg
- Vis graf med data og modell
- Diskuter gyldighetsomrade og usikkerhet

**Derivasjon og integrasjon:**
- Derivasjon gir endringsrate
- Integrasjon gir totalmengder`,
    },
  ],
  exercises: [],
};


export const CHAPTER_R2_6_6: TextbookChapter = {
  id: 'r2-6-6',
  courseId: 'r2',
  chapterNumber: '6.6',
  title: 'Bevis og matematisk argumentasjon',
  description: 'Analysere og utvikle matematiske bevis.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og forsta matematiske bevis, forklare sentrale idear i bevis og utvikle eigne bevis',
  ],
  content: [
    // ============================================================================
    // INTRODUKSJON: HVA ER ET MATEMATISK BEVIS?
    // ============================================================================
    {
      id: 'r2-6-6-intro',
      type: 'text',
      content: `## Hva er et matematisk bevis?

Et **matematisk bevis** er en logisk argumentasjonsrekke som viser at en pastand (et teorem eller en setning) er sann. I motsetning til naturvitenskapelige fag, hvor vi tester hypoteser gjennom eksperimenter, bruker matematikken logiske slutninger til a utlede sannheter fra aksepterte premisser.

Et godt bevis kjennetegnes ved:
- **Presisjon**: Hver pastand er klart formulert
- **Logisk sammenheng**: Hvert steg følger logisk fra det forrige
- **Fullstendighet**: Ingen steg mangler i argumentasjonen
- **Gyldige slutninger**: Kun aksepterte logiske regler brukes

I dette kapitlet skal vi lare om de tre viktigste bevismetodene: **direkte bevis**, **motsigelsesbevis** og **induksjonsbevis**.`,
    },

    {
      id: 'r2-6-6-def-teorem',
      type: 'definition',
      title: 'Teorem og bevis',
      content: `Et **teorem** (eller en **setning**) er en matematisk pastand som kan bevises a vare sann.

Et **bevis** er en logisk argumentasjon som viser at et teorem er sant, basert pa:
- **Aksiomer**: Grunnleggende sannheter vi aksepterer uten bevis
- **Definisjoner**: Presise beskrivelser av matematiske begreper
- **Tidligere beviste teoremer**: Resultater vi allerede har vist er sanne`,
    },

    // ============================================================================
    // DIREKTE BEVIS
    // ============================================================================
    {
      id: 'r2-6-6-direkte-intro',
      type: 'text',
      content: `## Direkte bevis

Et **direkte bevis** starter med kjente sannheter (premisser) og bruker logiske slutninger for a na frem til konklusjonen. Dette er den mest intuitive bevisformen.

**Struktur for direkte bevis:**
1. Anta at premissene er sanne
2. Utfor logiske operasjoner og slutninger
3. Konkluder med det vi onsker a vise`,
    },

    {
      id: 'r2-6-6-def-partall-oddetall',
      type: 'definition',
      title: 'Partall og oddetall',
      content: `Et heltall $n$ er et **partall** hvis det finnes et heltall $k$ slik at $n = 2k$.

Et heltall $n$ er et **oddetall** hvis det finnes et heltall $k$ slik at $n = 2k + 1$.`,
    },

    // EKSEMPEL 1: Summen av to partall
    {
      id: 'r2-6-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Summen av to partall',
      problem: `Bevis at summen av to partall er et partall.`,
      solution: `**Bevis:**

La $a$ og $b$ vare to partall.

**Steg 1:** Siden $a$ er et partall, finnes det et heltall $m$ slik at $a = 2m$.

**Steg 2:** Siden $b$ er et partall, finnes det et heltall $n$ slik at $b = 2n$.

**Steg 3:** Vi beregner summen:
$$a + b = 2m + 2n = 2(m + n)$$

**Steg 4:** Siden $m + n$ er et heltall (summen av to heltall er et heltall), og $a + b = 2(m + n)$, er $a + b$ et partall per definisjon.

$$\\blacksquare$$`,
    },

    // EKSEMPEL 2: Produktet av to oddetall
    {
      id: 'r2-6-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Produktet av to oddetall',
      problem: `Bevis at produktet av to oddetall er et oddetall.`,
      solution: `**Bevis:**

La $a$ og $b$ vare to oddetall.

**Steg 1:** Siden $a$ er et oddetall, finnes det et heltall $m$ slik at $a = 2m + 1$.

**Steg 2:** Siden $b$ er et oddetall, finnes det et heltall $n$ slik at $b = 2n + 1$.

**Steg 3:** Vi beregner produktet:
$$a \\cdot b = (2m + 1)(2n + 1)$$

**Steg 4:** Vi utvider:
$$a \\cdot b = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1$$

**Steg 5:** La $k = 2mn + m + n$. Da er $k$ et heltall, og vi har:
$$a \\cdot b = 2k + 1$$

Dette er formen til et oddetall, sa $a \\cdot b$ er et oddetall.

$$\\blacksquare$$`,
    },

    // EKSEMPEL 3: Kvadrat av partall
    {
      id: 'r2-6-6-example-3',
      type: 'example',
      title: 'Eksempel 3: Kvadratet av et partall',
      problem: `Bevis at kvadratet av et partall er delelig med 4.`,
      solution: `**Bevis:**

La $n$ vare et partall.

**Steg 1:** Siden $n$ er et partall, finnes det et heltall $k$ slik at $n = 2k$.

**Steg 2:** Vi beregner $n^2$:
$$n^2 = (2k)^2 = 4k^2$$

**Steg 3:** Siden $k^2$ er et heltall, og $n^2 = 4k^2 = 4 \\cdot k^2$, er $n^2$ delelig med 4.

$$\\blacksquare$$`,
    },

    // OPPGAVE 1
    {
      id: 'r2-6-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk direkte bevis til a vise folgende pastander:',
        subTasks: [
          {
            label: 'a',
            task: 'Summen av to oddetall er et partall.',
            solution: `La $a = 2m + 1$ og $b = 2n + 1$ vare to oddetall. Da er $a + b = 2m + 1 + 2n + 1 = 2(m + n + 1)$, som er et partall.`,
          },
          {
            label: 'b',
            task: 'Summen av et partall og et oddetall er et oddetall.',
            solution: `La $a = 2m$ vare et partall og $b = 2n + 1$ vare et oddetall. Da er $a + b = 2m + 2n + 1 = 2(m + n) + 1$, som er et oddetall.`,
          },
          {
            label: 'c',
            task: 'Produktet av et partall og et heltall er alltid et partall.',
            solution: `La $a = 2m$ vare et partall og $b$ vare et vilkarlig heltall. Da er $a \\cdot b = 2m \\cdot b = 2(mb)$, som er et partall.`,
          },
        ],
        hints: ['Bruk definisjonene av partall og oddetall', 'Skriv tallene på formen $2k$ eller $2k+1$'],
        solution: 'Se deloppgavene for fullstendige bevis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // EKSEMPEL 4: Summen av tre pafolgende heltall
    {
      id: 'r2-6-6-example-4',
      type: 'example',
      title: 'Eksempel 4: Summen av tre pafolgende heltall',
      problem: `Bevis at summen av tre pafolgende heltall alltid er delelig med 3.`,
      solution: `**Bevis:**

La de tre pafolgende heltallene vare $n$, $n+1$ og $n+2$.

**Steg 1:** Vi beregner summen:
$$n + (n+1) + (n+2) = 3n + 3 = 3(n + 1)$$

**Steg 2:** Siden $n + 1$ er et heltall, og summen kan skrives som $3 \\cdot (n+1)$, er summen delelig med 3.

$$\\blacksquare$$`,
    },

    // ============================================================================
    // MOTSIGELSESBEVIS
    // ============================================================================
    {
      id: 'r2-6-6-motsigelse-intro',
      type: 'text',
      content: `## Motsigelsesbevis (bevis ved selvmotsigelse)

Et **motsigelsesbevis** (lat. *reductio ad absurdum*) fungerer ved at vi antar det motsatte av det vi onsker a bevise, og viser at denne antagelsen forer til en logisk selvmotsigelse.

**Struktur for motsigelsesbevis:**
1. Anta det motsatte av det vi onsker a bevise
2. Utled logiske konsekvenser fra denne antagelsen
3. Vis at konsekvensene forer til en selvmotsigelse
4. Konkluder at antagelsen var feil, og det motsatte (det vi ville bevise) ma vare sant

Denne metoden er spesielt nyttig nar det er vanskelig a bevise noe direkte.`,
    },

    // EKSEMPEL 5: sqrt(2) er irrasjonal
    {
      id: 'r2-6-6-example-5',
      type: 'example',
      title: 'Eksempel 5: $\\sqrt{2}$ er irrasjonal (klassisk bevis)',
      problem: `Bevis at $\\sqrt{2}$ er et irrasjonalt tall, dvs. at det ikke kan skrives som en brok $\\frac{p}{q}$ der $p$ og $q$ er heltall.`,
      solution: `**Bevis ved motsigelse:**

**Steg 1 (Antagelse):** Anta at $\\sqrt{2}$ er rasjonalt. Da kan vi skrive:
$$\\sqrt{2} = \\frac{p}{q}$$
der $p$ og $q$ er heltall uten felles faktorer (broken er maksimalt forkortet) og $q \\neq 0$.

**Steg 2:** Vi kvadrerer begge sider:
$$2 = \\frac{p^2}{q^2}$$

**Steg 3:** Vi ganger med $q^2$:
$$2q^2 = p^2$$

**Steg 4:** Siden $p^2 = 2q^2$, er $p^2$ et partall. Men da ma ogsa $p$ vare et partall (for hvis $p$ var oddetall, ville $p^2$ ogsa vart oddetall).

**Steg 5:** Siden $p$ er et partall, kan vi skrive $p = 2k$ for et heltall $k$. Vi setter inn:
$$2q^2 = (2k)^2 = 4k^2$$

**Steg 6:** Vi deler på 2:
$$q^2 = 2k^2$$

**Steg 7:** Siden $q^2 = 2k^2$, er $q^2$ et partall, og derfor er ogsa $q$ et partall.

**Steg 8 (Motsigelse):** Bade $p$ og $q$ er partall, noe som betyr at de har felles faktor 2. Men vi antok at broken var maksimalt forkortet! Dette er en selvmotsigelse.

**Konklusjon:** Antagelsen om at $\\sqrt{2}$ er rasjonalt ma vare feil. Derfor er $\\sqrt{2}$ irrasjonalt.

$$\\blacksquare$$`,
    },

    // EKSEMPEL 6: Uendelig mange primtall
    {
      id: 'r2-6-6-example-6',
      type: 'example',
      title: 'Eksempel 6: Det finnes uendelig mange primtall (Euklids bevis)',
      problem: `Bevis at det finnes uendelig mange primtall.`,
      solution: `**Bevis ved motsigelse (Euklid, ca. 300 f.Kr.):**

**Steg 1 (Antagelse):** Anta at det bare finnes endelig mange primtall. La disse vare $p_1, p_2, p_3, \\ldots, p_n$.

**Steg 2:** Betrakt tallet:
$$N = p_1 \\cdot p_2 \\cdot p_3 \\cdots p_n + 1$$

Dette er produktet av alle primtall pluss 1.

**Steg 3:** Vi undersoker om $N$ er delelig med noen av primtallene $p_1, p_2, \\ldots, p_n$:
- Nar vi deler $N$ på $p_1$, far vi rest 1 (siden $N = p_1 \\cdot (\\text{noe}) + 1$)
- Nar vi deler $N$ på $p_2$, far vi rest 1
- Generelt: Nar vi deler $N$ på $p_i$, far vi alltid rest 1

Altsa er $N$ ikke delelig med noen av primtallene $p_1, \\ldots, p_n$.

**Steg 4:** Men alle tall storre enn 1 har minst en primfaktor. Siden $N > 1$ og $N$ ikke er delelig med noen av $p_1, \\ldots, p_n$, ma $N$ enten:
- Vare et primtall selv (som ikke er i listen), eller
- Ha en primfaktor som ikke er i listen

**Steg 5 (Motsigelse):** Uansett har vi funnet et primtall som ikke er i listen var over alle primtall. Dette motsier antagelsen.

**Konklusjon:** Det finnes uendelig mange primtall.

$$\\blacksquare$$`,
    },

    // OPPGAVE 2
    {
      id: 'r2-6-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk motsigelsesbevis:',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at $\\sqrt{3}$ er irrasjonalt.',
            solution: `Anta at $\\sqrt{3} = \\frac{p}{q}$ er rasjonalt med $\\gcd(p,q) = 1$. Da er $3q^2 = p^2$, sa $p^2$ er delelig med 3, og dermed er $p$ delelig med 3. Skriv $p = 3k$, sa $3q^2 = 9k^2$, altsaa $q^2 = 3k^2$. Da er ogsa $q$ delelig med 3. Motsigelse: $p$ og $q$ har felles faktor 3.`,
          },
          {
            label: 'b',
            task: 'Vis at det ikke finnes noe største partall.',
            solution: `Anta at $n$ er det største partallet. Men da er $n + 2$ ogsa et partall (siden $n + 2 = 2k + 2 = 2(k+1)$), og $n + 2 > n$. Motsigelse.`,
          },
          {
            label: 'c',
            task: 'Vis at summen av et rasjonalt tall og et irrasjonalt tall er irrasjonalt.',
            solution: `La $r$ vare rasjonalt og $i$ irrasjonalt. Anta at $r + i = s$ er rasjonalt. Da er $i = s - r$, som er differansen av to rasjonale tall, altsa rasjonalt. Motsigelse: $i$ var antatt irrasjonalt.`,
          },
        ],
        hints: ['Folg samme struktur som i beviset for at $\\sqrt{2}$ er irrasjonalt'],
        solution: 'Se deloppgavene for fullstendige bevis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // EKSEMPEL 7: Ingen minste positive rasjonale tall
    {
      id: 'r2-6-6-example-7',
      type: 'example',
      title: 'Eksempel 7: Det finnes ikke noe minste positivt rasjonalt tall',
      problem: `Bevis at det ikke finnes noe minste positivt rasjonalt tall.`,
      solution: `**Bevis ved motsigelse:**

**Steg 1 (Antagelse):** Anta at det finnes et minste positivt rasjonalt tall $r$.

**Steg 2:** Betrakt tallet $\\frac{r}{2}$.

**Steg 3:** Vi observerer at:
- $\\frac{r}{2}$ er rasjonalt (kvotienten av to rasjonale tall er rasjonalt)
- $\\frac{r}{2} > 0$ (halvparten av et positivt tall er positivt)
- $\\frac{r}{2} < r$

**Steg 4 (Motsigelse):** Vi har funnet et positivt rasjonalt tall $\\frac{r}{2}$ som er mindre enn $r$. Men $r$ var antatt a vare det minste. Dette er en selvmotsigelse.

**Konklusjon:** Det finnes ikke noe minste positivt rasjonalt tall.

$$\\blacksquare$$`,
    },

    // ============================================================================
    // INDUKSJONSBEVIS
    // ============================================================================
    {
      id: 'r2-6-6-induksjon-intro',
      type: 'text',
      content: `## Induksjonsbevis (matematisk induksjon)

**Matematisk induksjon** er en bevismetode som brukes til a bevise pastander som gjelder for alle naturlige tall (eller alle heltall fra et visst punkt).

Tenk på induksjon som en uendelig rekke med dominobrikker:
- Hvis vi vet at den forste brikken faller (basissteget)
- Og vi vet at nar en brikke faller, sa faller den neste (induksjonssteget)
- Da vil alle brikkene falle`,
    },

    {
      id: 'r2-6-6-theorem-induksjon',
      type: 'theorem',
      title: 'Prinsippet om matematisk induksjon',
      content: `La $P(n)$ vare en pastand som avhenger av et naturlig tall $n$. For a bevise at $P(n)$ er sann for alle $n \\geq n_0$, viser vi:

**1. Basissteg:** $P(n_0)$ er sann.

**2. Induksjonssteg:** For alle $k \\geq n_0$: Hvis $P(k)$ er sann, så er $P(k+1)$ sann.

Da er $P(n)$ sann for alle $n \\geq n_0$.`,
    },

    {
      id: 'r2-6-6-note-induksjon',
      type: 'note',
      content: `I induksjonssteget kaller vi antagelsen "$P(k)$ er sann" for **induksjonsantagelsen** eller **induksjonshypotesen**. Det er viktig a vare tydelig på hva denne antagelsen er, og hvordan den brukes til a bevise $P(k+1)$.`,
    },

    // EKSEMPEL 8: Summen av de n forste naturlige tallene
    {
      id: 'r2-6-6-example-8',
      type: 'example',
      title: 'Eksempel 8: Summen av de $n$ forste naturlige tallene',
      problem: `Bevis ved induksjon at for alle naturlige tall $n \\geq 1$:
$$1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$`,
      solution: `**Bevis ved induksjon:**

La $P(n)$ vare pastanden: $1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$

**Basissteg ($n = 1$):**

Venstre side: $1$

Hoyre side: $\\frac{1 \\cdot 2}{2} = 1$

Siden venstre side = hoyre side, er $P(1)$ sann.

**Induksjonssteg:**

**Induksjonsantagelse:** Anta at $P(k)$ er sann for en vilkarlig $k \\geq 1$, dvs.:
$$1 + 2 + 3 + \\cdots + k = \\frac{k(k+1)}{2}$$

**A vise:** $P(k+1)$ er sann, dvs.:
$$1 + 2 + 3 + \\cdots + k + (k+1) = \\frac{(k+1)(k+2)}{2}$$

**Bevis:**
$$1 + 2 + 3 + \\cdots + k + (k+1) = \\underbrace{\\frac{k(k+1)}{2}}_{\\text{induksjonsantagelsen}} + (k+1)$$

$$= \\frac{k(k+1)}{2} + \\frac{2(k+1)}{2} = \\frac{k(k+1) + 2(k+1)}{2}$$

$$= \\frac{(k+1)(k + 2)}{2}$$

Dette er nettopp $P(k+1)$.

**Konklusjon:** Ved induksjonsprinsippet er $P(n)$ sann for alle $n \\geq 1$.

$$\\blacksquare$$`,
    },

    // EKSEMPEL 9: Summen av de n forste oddetallene
    {
      id: 'r2-6-6-example-9',
      type: 'example',
      title: 'Eksempel 9: Summen av de $n$ forste oddetallene',
      problem: `Bevis ved induksjon at for alle $n \\geq 1$:
$$1 + 3 + 5 + \\cdots + (2n-1) = n^2$$`,
      solution: `**Bevis ved induksjon:**

La $P(n)$ vare pastanden: $1 + 3 + 5 + \\cdots + (2n-1) = n^2$

**Basissteg ($n = 1$):**

Venstre side: $1$

Hoyre side: $1^2 = 1$

$P(1)$ er sann.

**Induksjonssteg:**

**Induksjonsantagelse:** Anta $P(k)$: $1 + 3 + 5 + \\cdots + (2k-1) = k^2$

**A vise:** $P(k+1)$: $1 + 3 + 5 + \\cdots + (2k-1) + (2(k+1)-1) = (k+1)^2$

**Bevis:**
$$1 + 3 + 5 + \\cdots + (2k-1) + (2k+1) = k^2 + (2k+1)$$

$$= k^2 + 2k + 1 = (k+1)^2$$

**Konklusjon:** Ved induksjonsprinsippet er $P(n)$ sann for alle $n \\geq 1$.

$$\\blacksquare$$`,
    },

    // EKSEMPEL 10: Delelighetsbevis
    {
      id: 'r2-6-6-example-10',
      type: 'example',
      title: 'Eksempel 10: Delelighetsbevis',
      problem: `Bevis ved induksjon at $n^3 - n$ er delelig med 6 for alle naturlige tall $n \\geq 1$.`,
      solution: `**Bevis ved induksjon:**

La $P(n)$ vare pastanden: $6 \\mid (n^3 - n)$ (6 deler $n^3 - n$)

**Basissteg ($n = 1$):**

$1^3 - 1 = 0 = 6 \\cdot 0$

Siden 0 er delelig med 6, er $P(1)$ sann.

**Induksjonssteg:**

**Induksjonsantagelse:** Anta at $P(k)$ er sann, dvs. $k^3 - k = 6m$ for et heltall $m$.

**A vise:** $P(k+1)$: $(k+1)^3 - (k+1)$ er delelig med 6.

**Bevis:**
$$(k+1)^3 - (k+1) = k^3 + 3k^2 + 3k + 1 - k - 1$$
$$= k^3 + 3k^2 + 2k$$
$$= (k^3 - k) + 3k^2 + 3k$$
$$= (k^3 - k) + 3k(k + 1)$$

Na bruker vi at:
- $(k^3 - k) = 6m$ (induksjonsantagelsen)
- $k(k+1)$ er produktet av to pafolgende tall, sa ett av dem er partall. Dermed er $k(k+1)$ delelig med 2, og $3k(k+1)$ er delelig med 6.

Altsa er $(k+1)^3 - (k+1) = 6m + 6 \\cdot (\\text{heltall})$, som er delelig med 6.

$$\\blacksquare$$`,
    },

    // OPPGAVE 3
    {
      id: 'r2-6-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bevis ved induksjon:',
        subTasks: [
          {
            label: 'a',
            task: '$1 + 2 + 4 + 8 + \\cdots + 2^{n-1} = 2^n - 1$ for alle $n \\geq 1$',
            solution: `Basissteg: $n=1$: VS = $2^0 = 1$, HS = $2^1 - 1 = 1$. OK.
Induksjonssteg: Anta $1 + 2 + \\cdots + 2^{k-1} = 2^k - 1$. Da er $1 + 2 + \\cdots + 2^{k-1} + 2^k = 2^k - 1 + 2^k = 2 \\cdot 2^k - 1 = 2^{k+1} - 1$.`,
          },
          {
            label: 'b',
            task: '$1^2 + 2^2 + 3^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}$ for alle $n \\geq 1$',
            solution: `Basissteg: $n=1$: VS = 1, HS = $\\frac{1 \\cdot 2 \\cdot 3}{6} = 1$. OK.
Induksjonssteg: Anta formelen for $k$. Da er $\\sum_{i=1}^{k+1} i^2 = \\frac{k(k+1)(2k+1)}{6} + (k+1)^2 = \\frac{(k+1)(k(2k+1) + 6(k+1))}{6} = \\frac{(k+1)(2k^2 + 7k + 6)}{6} = \\frac{(k+1)(k+2)(2k+3)}{6}$.`,
          },
          {
            label: 'c',
            task: '$n^2 + n$ er alltid et partall for alle $n \\geq 1$',
            solution: `Basissteg: $n=1$: $1 + 1 = 2$, som er partall. OK.
Induksjonssteg: Anta $k^2 + k = 2m$. Da er $(k+1)^2 + (k+1) = k^2 + 2k + 1 + k + 1 = (k^2 + k) + 2k + 2 = 2m + 2(k+1) = 2(m + k + 1)$, som er partall.`,
          },
        ],
        hints: ['Husk a sjekke basissteget forst', 'I induksjonssteget, bruk induksjonsantagelsen eksplisitt'],
        solution: 'Se deloppgavene for fullstendige bevis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // EKSEMPEL 11: Geometrisk rekke
    {
      id: 'r2-6-6-example-11',
      type: 'example',
      title: 'Eksempel 11: Formelen for geometrisk rekke',
      problem: `Bevis ved induksjon at for $r \\neq 1$:
$$1 + r + r^2 + \\cdots + r^n = \\frac{r^{n+1} - 1}{r - 1}$$`,
      solution: `**Bevis ved induksjon:**

La $P(n)$ vare formelen ovenfor.

**Basissteg ($n = 0$):**

VS: $r^0 = 1$

HS: $\\frac{r^1 - 1}{r - 1} = \\frac{r - 1}{r - 1} = 1$

$P(0)$ er sann.

**Induksjonssteg:**

**Induksjonsantagelse:** $1 + r + r^2 + \\cdots + r^k = \\frac{r^{k+1} - 1}{r - 1}$

**A vise:** $1 + r + r^2 + \\cdots + r^k + r^{k+1} = \\frac{r^{k+2} - 1}{r - 1}$

**Bevis:**
$$1 + r + \\cdots + r^k + r^{k+1} = \\frac{r^{k+1} - 1}{r - 1} + r^{k+1}$$

$$= \\frac{r^{k+1} - 1 + r^{k+1}(r - 1)}{r - 1} = \\frac{r^{k+1} - 1 + r^{k+2} - r^{k+1}}{r - 1}$$

$$= \\frac{r^{k+2} - 1}{r - 1}$$

$$\\blacksquare$$`,
    },

    // ============================================================================
    // ANALYSERE OG FORSTA BEVIS
    // ============================================================================
    {
      id: 'r2-6-6-analyse-intro',
      type: 'text',
      content: `## Analysere og forsta bevis

A lese og forsta matematiske bevis er en viktig ferdighet. Her er noen strategier:

**1. Identifiser strukturen:**
- Hva er premissene (det vi starter med)?
- Hva er konklusjonen (det vi vil bevise)?
- Hvilken bevismetode brukes?

**2. Folg hvert steg:**
- Er hvert steg logisk gyldig?
- Hvilke regler eller tidligere resultater brukes?
- Kan du forklare hvert steg med egne ord?

**3. Se etter nodvendig bruk av premissene:**
- Hvor brukes hver premiss?
- Kunne beviset fungert uten noen av premissene?

**4. Vurder generalitet:**
- Er beviset gyldig i alle tilfeller?
- Finnes det spesialtilfeller som ma behandles separat?`,
    },

    // EKSEMPEL 12: Analysere et bevis
    {
      id: 'r2-6-6-example-12',
      type: 'example',
      title: 'Eksempel 12: Analysere et bevis',
      problem: `Analyser folgende bevis og identifiser eventuelle feil:

"**Pastand:** Alle hester har samme farge.

**Bevis ved induksjon:**

**Basissteg:** For $n = 1$ hest er pastanden triviell: En hest har samme farge som seg selv.

**Induksjonssteg:** Anta at enhver mengde med $k$ hester har samme farge. Betrakt en mengde med $k + 1$ hester: $H_1, H_2, \\ldots, H_{k+1}$.

Mengden $\\{H_1, H_2, \\ldots, H_k\\}$ har $k$ hester, sa alle har samme farge (induksjonsantagelsen).

Mengden $\\{H_2, H_3, \\ldots, H_{k+1}\\}$ har ogsa $k$ hester, sa alle har samme farge.

Siden $H_2$ er i begge mengder, har alle $k + 1$ hestene samme farge.

**Konklusjon:** Alle hester har samme farge. $\\blacksquare$"`,
      solution: `**Analyse av beviset:**

Dette beviset inneholder en **subtil feil i induksjonssteget**.

**Feilen:** Induksjonssteget fungerer bare nar de to mengdene $\\{H_1, \\ldots, H_k\\}$ og $\\{H_2, \\ldots, H_{k+1}\\}$ har en **felles** hest.

**Problemet oppstar ved $k = 1$:**
- Mengde 1: $\\{H_1\\}$ (1 hest)
- Mengde 2: $\\{H_2\\}$ (1 hest)
- Disse mengdene har **ingen felles hester**!

Dermed kan vi ikke konkludere at $H_1$ og $H_2$ har samme farge.

**Lardommen:** I induksjonsbevis ma vi vare forsiktige med a sjekke at argumentet faktisk fungerer for alle verdier av $k$, spesielt for de forste verdiene. Her svikter argumentet ved overgangen fra $n = 1$ til $n = 2$.`,
    },

    // OPPGAVE 4
    {
      id: 'r2-6-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser folgene bevis og identifiser feil:',
        subTasks: [
          {
            label: 'a',
            task: `"**Pastand:** $1 = 2$

**Bevis:** La $a = b$. Da er $a^2 = ab$. Altsa $a^2 - b^2 = ab - b^2$, dvs. $(a-b)(a+b) = b(a-b)$. Vi deler på $(a-b)$ og far $a + b = b$. Siden $a = b$, har vi $2b = b$, altsa $2 = 1$."

Hva er feilen?`,
            solution: `Feilen er at vi deler på $(a - b)$, men siden $a = b$, har vi $a - b = 0$. Vi kan ikke dele på null. Dette er en ugyldig operasjon.`,
          },
          {
            label: 'b',
            task: `"**Pastand:** Alle positive heltall er like.

**Bevis:** La $P(n)$ vare: Alle tall i mengden $\\{1, 2, \\ldots, n\\}$ er like.
$P(1)$ er sann (kun ett tall).
Anta $P(k)$: $1 = 2 = \\cdots = k$. Da er spesielt $k = 1$, sa $k + 1 = 2 = 1$. Altsa $P(k+1)$ er sann."

Hva er feilen?`,
            solution: `Feilen er at induksjonssteget ma vise at *hvis* alle tall opptil $k$ er like, så er ogsa $k+1$ lik disse. Men argumentet "da er spesielt $k = 1$" bruker konklusjonen ulovlig. Det riktige ville vart a forklare hvorfor $k+1$ er lik tallene $1, \\ldots, k$, noe som ikke gjores.`,
          },
        ],
        hints: ['Se etter divisjon med null', 'Sjekk om induksjonssteget faktisk beviser det det pastar'],
        solution: 'Se deloppgavene for analyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ============================================================================
    // UTVIKLE EGNE BEVIS
    // ============================================================================
    {
      id: 'r2-6-6-utvikle-intro',
      type: 'text',
      content: `## Utvikle egne bevis

A skrive egne bevis er en ferdighet som utvikles med ovelse. Her er en steg-for-steg-tilnarming:

**1. Forsta problemet:**
- Hva er det eksakt vi skal bevise?
- Hva vet vi (premissene)?
- Skriv opp relevante definisjoner.

**2. Velg bevismetode:**
- **Direkte bevis**: Naturlig nar vi kan arbeide fremover fra premissene.
- **Motsigelsesbevis**: Nyttig nar pastanden er negativ ("det finnes ikke...") eller nar direkte bevis virker vanskelig.
- **Induksjon**: Nar pastanden gjelder for alle naturlige tall.

**3. Skriv beviset:**
- Vær presis og tydelig
- Begrunn hvert steg
- Marker tydelig start og slutt på beviset

**4. Sjekk beviset:**
- Er hvert steg logisk gyldig?
- Har du brukt alle nodvendige premisser?
- Fungerer beviset i alle tilfeller?`,
    },

    // EKSEMPEL 13: Bygge et bevis fra bunnen
    {
      id: 'r2-6-6-example-13',
      type: 'example',
      title: 'Eksempel 13: Utvikle et bevis',
      problem: `Bevis at for alle reelle tall $a$ og $b$: Hvis $a + b$ er rasjonalt og $a$ er rasjonalt, så er $b$ rasjonalt.`,
      solution: `**Steg 1: Forsta problemet**
- Premisser: $a + b \\in \\mathbb{Q}$ og $a \\in \\mathbb{Q}$
- Konklusjon: $b \\in \\mathbb{Q}$
- Definisjon: Et tall $r$ er rasjonalt hvis $r = \\frac{p}{q}$ der $p, q \\in \\mathbb{Z}$, $q \\neq 0$.

**Steg 2: Velg bevismetode**
Dette virker som et naturlig direkte bevis: Vi kan bruke at rasjonale tall er lukket under subtraksjon.

**Steg 3: Skriv beviset**

**Bevis:**

La $a$ og $a + b$ vare rasjonale tall.

Siden $a$ er rasjonalt, finnes heltall $p_1, q_1$ med $q_1 \\neq 0$ slik at $a = \\frac{p_1}{q_1}$.

Siden $a + b$ er rasjonalt, finnes heltall $p_2, q_2$ med $q_2 \\neq 0$ slik at $a + b = \\frac{p_2}{q_2}$.

Da er:
$$b = (a + b) - a = \\frac{p_2}{q_2} - \\frac{p_1}{q_1} = \\frac{p_2 q_1 - p_1 q_2}{q_1 q_2}$$

Siden $p_2 q_1 - p_1 q_2$ og $q_1 q_2$ er heltall, og $q_1 q_2 \\neq 0$, er $b$ rasjonalt.

$$\\blacksquare$$

**Steg 4: Sjekk beviset**
- Vi brukte begge premissene
- Hvert steg er begrunnet
- Det er ingen spesialtilfeller vi har oversett`,
    },

    // EKSEMPEL 14: Kontraposisjon
    {
      id: 'r2-6-6-example-14',
      type: 'example',
      title: 'Eksempel 14: Bevis ved kontraposisjon',
      problem: `Bevis: Hvis $n^2$ er et partall, så er $n$ et partall.`,
      solution: `**Bevismetode:** Vi bruker **kontraposisjon**. A bevise "Hvis $P$, sa $Q$" er logisk ekvivalent med a bevise "Hvis ikke $Q$, sa ikke $P$".

**Kontraposisjon:** Hvis $n$ er et oddetall, så er $n^2$ et oddetall.

**Bevis:**

Anta at $n$ er et oddetall. Da finnes et heltall $k$ slik at $n = 2k + 1$.

Vi beregner $n^2$:
$$n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$$

La $m = 2k^2 + 2k$. Da er $m$ et heltall, og $n^2 = 2m + 1$, som er formen til et oddetall.

Altsa er $n^2$ et oddetall.

**Konklusjon:** Ved kontraposisjon har vi vist at hvis $n^2$ er et partall, så er $n$ et partall.

$$\\blacksquare$$`,
    },

    // OPPGAVE 5
    {
      id: 'r2-6-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utvikle fullstendige bevis for folgende pastander. Velg passende bevismetode.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvis $n^2$ er delelig med 3, så er $n$ delelig med 3.',
            solution: `Bevis ved kontraposisjon: Anta at $n$ ikke er delelig med 3. Da er $n = 3k + 1$ eller $n = 3k + 2$.
Tilfelle 1: $n = 3k + 1 \\Rightarrow n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$, ikke delelig med 3.
Tilfelle 2: $n = 3k + 2 \\Rightarrow n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1$, ikke delelig med 3.
Altsaa: Hvis $n^2$ er delelig med 3, så er $n$ delelig med 3.`,
          },
          {
            label: 'b',
            task: '$\\sqrt{5}$ er irrasjonalt.',
            solution: `Anta at $\\sqrt{5} = \\frac{p}{q}$ med $\\gcd(p,q) = 1$. Da er $5q^2 = p^2$, sa 5 deler $p^2$, og dermed deler 5 $p$. Skriv $p = 5k$, sa $5q^2 = 25k^2$, altsaa $q^2 = 5k^2$. Da deler 5 ogsa $q$. Motsigelse: $p$ og $q$ har felles faktor 5.`,
          },
          {
            label: 'c',
            task: 'For alle $n \\geq 1$: $1 \\cdot 1! + 2 \\cdot 2! + \\cdots + n \\cdot n! = (n+1)! - 1$',
            solution: `Basissteg: $n = 1$: VS = $1 \\cdot 1! = 1$, HS = $2! - 1 = 1$. OK.
Induksjonssteg: Anta formelen for $k$. Da er $\\sum_{i=1}^{k+1} i \\cdot i! = (k+1)! - 1 + (k+1) \\cdot (k+1)! = (k+1)!(1 + k + 1) - 1 = (k+1)!(k+2) - 1 = (k+2)! - 1$.`,
          },
        ],
        hints: [
          'a) Prøv kontraposisjon: anta at $n$ ikke er delelig med 3',
          'b) Bruk samme teknikk som for $\\sqrt{2}$',
          'c) Bruk induksjon og at $(k+1)(k+1)! = (k+2)! - (k+1)!$',
        ],
        solution: 'Se deloppgavene for fullstendige bevis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ============================================================================
    // LOGISK ARGUMENTASJON
    // ============================================================================
    {
      id: 'r2-6-6-logikk-intro',
      type: 'text',
      content: `## Logisk argumentasjon

Matematiske bevis bygger på formell logikk. Her er de viktigste logiske begrepene:

**Logiske konnektiver:**
- **Konjunksjon** ($P \\land Q$): "$P$ og $Q$" - sann bare nar bade $P$ og $Q$ er sanne
- **Disjunksjon** ($P \\lor Q$): "$P$ eller $Q$" - sann nar minst en av dem er sann
- **Negasjon** ($\\neg P$): "ikke $P$" - sann nar $P$ er usann
- **Implikasjon** ($P \\Rightarrow Q$): "hvis $P$, sa $Q$" - usann bare nar $P$ er sann og $Q$ er usann
- **Ekvivalens** ($P \\Leftrightarrow Q$): "$P$ hvis og bare hvis $Q$" - sann nar bade har samme sannhetsverdi`,
    },

    {
      id: 'r2-6-6-theorem-logikk',
      type: 'theorem',
      title: 'Viktige logiske ekvivalenser',
      content: `**1. Kontraposisjon:**
$$(P \\Rightarrow Q) \\Leftrightarrow (\\neg Q \\Rightarrow \\neg P)$$

**2. De Morgans lover:**
$$\\neg(P \\land Q) \\Leftrightarrow (\\neg P \\lor \\neg Q)$$
$$\\neg(P \\lor Q) \\Leftrightarrow (\\neg P \\land \\neg Q)$$

**3. Negasjon av implikasjon:**
$$\\neg(P \\Rightarrow Q) \\Leftrightarrow (P \\land \\neg Q)$$`,
    },

    // EKSEMPEL 15: Logiske ekvivalenser
    {
      id: 'r2-6-6-example-15',
      type: 'example',
      title: 'Eksempel 15: Bruk av logiske ekvivalenser',
      problem: `Skriv negasjonen av folgende pastander:

a) "Alle primtall storre enn 2 er oddetall."

b) "Det finnes et reelt tall $x$ slik at $x^2 < 0$."

c) "Hvis det regner, så er bakken vat."`,
      solution: `**Løsning:**

**a)** Original: $\\forall p > 2$ primtall: $p$ er oddetall.

Negasjon: Det finnes et primtall $p > 2$ som er partall.

(Merk: Negasjonen er usann, noe som bekrefter at originalen er sann.)

**b)** Original: $\\exists x \\in \\mathbb{R}: x^2 < 0$

Negasjon: For alle reelle tall $x$ er $x^2 \\geq 0$.

(Negasjonen er sann, sa originalen er usann.)

**c)** Original: Regn $\\Rightarrow$ Vat bakke

Negasjon: Det regner OG bakken er ikke vat.

(Bruker $\\neg(P \\Rightarrow Q) \\Leftrightarrow (P \\land \\neg Q)$)`,
    },

    // EKSEMPEL 16: Kvantorer
    {
      id: 'r2-6-6-example-16',
      type: 'example',
      title: 'Eksempel 16: Bevis med kvantorer',
      problem: `Bevis at det finnes uendelig mange primtall på formen $4k + 3$.`,
      solution: `**Bevis ved motsigelse:**

**Antagelse:** Anta at det bare finnes endelig mange primtall på formen $4k + 3$. La disse vare $p_1, p_2, \\ldots, p_n$.

**Konstruksjon:** Betrakt tallet:
$$N = 4 \\cdot p_1 \\cdot p_2 \\cdots p_n - 1 = 4(p_1 p_2 \\cdots p_n) - 1$$

**Observasjon 1:** $N$ er på formen $4m - 1 = 4(m-1) + 3$, altsa på formen $4k + 3$.

**Observasjon 2:** Ethvert oddetall er enten på formen $4k + 1$ eller $4k + 3$.

**Observasjon 3:** Produktet av tall på formen $4k + 1$ er igjen på formen $4k + 1$:
$$(4a + 1)(4b + 1) = 16ab + 4a + 4b + 1 = 4(4ab + a + b) + 1$$

**Konklusjon fra observasjonene:** Siden $N$ er på formen $4k + 3$, ma $N$ ha minst en primfaktor på formen $4k + 3$.

**Motsigelse:** Men $N$ er ikke delelig med noen av $p_1, \\ldots, p_n$ (siden $N \\equiv -1 \\pmod{p_i}$ for alle $i$). Sa denne primfaktoren er ikke i listen var.

**Konklusjon:** Det finnes uendelig mange primtall på formen $4k + 3$.

$$\\blacksquare$$`,
    },

    // OPPGAVE 6
    {
      id: 'r2-6-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Logisk argumentasjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv negasjonen av: "For alle $\\epsilon > 0$ finnes det en $\\delta > 0$ slik at $|f(x) - L| < \\epsilon$ nar $|x - a| < \\delta$."',
            solution: `Negasjon: Det finnes en $\\epsilon > 0$ slik at for alle $\\delta > 0$ finnes det en $x$ med $|x - a| < \\delta$ og $|f(x) - L| \\geq \\epsilon$.`,
          },
          {
            label: 'b',
            task: 'Bruk kontraposisjon til a bevise: Hvis $n^2$ er oddetall, så er $n$ oddetall.',
            solution: `Kontraposisjon: Hvis $n$ er partall, så er $n^2$ partall. Bevis: $n = 2k \\Rightarrow n^2 = 4k^2 = 2(2k^2)$, som er partall.`,
          },
          {
            label: 'c',
            task: 'Bruk De Morgans lover til a forenkle: $\\neg((x > 0) \\land (x < 10))$',
            solution: `$\\neg((x > 0) \\land (x < 10)) = (x \\leq 0) \\lor (x \\geq 10)$, dvs. "$x \\leq 0$ eller $x \\geq 10$".`,
          },
        ],
        hints: ['Negasjon av $\\forall$ er $\\exists$, og omvendt', 'Negasjon av $<$ er $\\geq$'],
        solution: 'Se deloppgavene for losninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ============================================================================
    // OPPSUMMERING OG FLERE OPPGAVER
    // ============================================================================
    {
      id: 'r2-6-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapitlet har vi lart om:

**Direkte bevis:**
- Start med premissene og arbeid logisk mot konklusjonen
- Bruk definisjoner og tidligere resultater

**Motsigelsesbevis:**
- Anta det motsatte av det du vil bevise
- Vis at dette forer til en selvmotsigelse
- Konkluder at originalen ma vare sann

**Induksjonsbevis:**
- Vis basissteget (vanligvis $n = 1$ eller $n = 0$)
- Vis induksjonssteget: $P(k) \\Rightarrow P(k+1)$
- Konkluder at pastanden gjelder for alle $n$

**Logisk argumentasjon:**
- Bruk formelle logiske regler
- Vær bevisst på kvantorer ($\\forall$, $\\exists$) og deres negasjoner
- Kontraposisjon er et kraftig verktøy`,
    },

    // OPPGAVE 7
    {
      id: 'r2-6-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Klassifiser hvilken bevismetode som passer best:',
        subTasks: [
          {
            label: 'a',
            task: '"Summen av vinklene i en trekant er $180°$"',
            solution: 'Direkte bevis (geometrisk konstruksjon med parallelle linjer).',
          },
          {
            label: 'b',
            task: '"Det finnes ikke noe største primtall"',
            solution: 'Motsigelsesbevis (anta at det finnes, og konstruer et storre).',
          },
          {
            label: 'c',
            task: '"$2^n > n$ for alle $n \\geq 1$"',
            solution: 'Induksjonsbevis (pastanden gjelder for alle naturlige tall).',
          },
          {
            label: 'd',
            task: '"Produktet av to irrasjonale tall kan vare rasjonalt"',
            solution: 'Direkte bevis ved moteksempel: $\\sqrt{2} \\cdot \\sqrt{2} = 2$.',
          },
        ],
        hints: ['Tenk på strukturen i pastanden'],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // OPPGAVE 8
    {
      id: 'r2-6-6-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bevis ved induksjon:',
        subTasks: [
          {
            label: 'a',
            task: '$2^n > n^2$ for alle $n \\geq 5$',
            solution: `Basissteg: $n = 5$: $2^5 = 32 > 25 = 5^2$. OK.
Induksjonssteg: Anta $2^k > k^2$ for $k \\geq 5$. Da er $2^{k+1} = 2 \\cdot 2^k > 2k^2$. Vi ma vise $2k^2 > (k+1)^2 = k^2 + 2k + 1$, dvs. $k^2 > 2k + 1$, dvs. $k^2 - 2k - 1 > 0$. For $k \\geq 5$: $25 - 10 - 1 = 14 > 0$. OK.`,
          },
          {
            label: 'b',
            task: '$n! > 2^n$ for alle $n \\geq 4$',
            solution: `Basissteg: $n = 4$: $4! = 24 > 16 = 2^4$. OK.
Induksjonssteg: Anta $k! > 2^k$ for $k \\geq 4$. Da er $(k+1)! = (k+1) \\cdot k! > (k+1) \\cdot 2^k$. Siden $k + 1 \\geq 5 > 2$, har vi $(k+1) \\cdot 2^k > 2 \\cdot 2^k = 2^{k+1}$.`,
          },
          {
            label: 'c',
            task: 'Fibonaccitallene: $F_1 + F_2 + \\cdots + F_n = F_{n+2} - 1$ der $F_1 = F_2 = 1$',
            solution: `Basissteg: $n = 1$: VS = $F_1 = 1$, HS = $F_3 - 1 = 2 - 1 = 1$. OK.
Induksjonssteg: Anta formelen for $k$. Da er $\\sum_{i=1}^{k+1} F_i = F_{k+2} - 1 + F_{k+1} = F_{k+3} - 1$ (siden $F_{k+2} + F_{k+1} = F_{k+3}$).`,
          },
        ],
        hints: ['Vær noye med a sjekke basissteget for riktig startverdi', 'For a) ma du vise en tilleggsnelikhet'],
        solution: 'Se deloppgavene for fullstendige bevis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // OPPGAVE 9
    {
      id: 'r2-6-6-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Direkte bevis:',
        subTasks: [
          {
            label: 'a',
            task: 'Bevis at hvis $a$ deler $b$ og $b$ deler $c$, sa deler $a$ $c$.',
            solution: `$a \\mid b$ betyr $b = ka$ for et heltall $k$. $b \\mid c$ betyr $c = mb$ for et heltall $m$. Da er $c = mb = m(ka) = (mk)a$, sa $a \\mid c$.`,
          },
          {
            label: 'b',
            task: 'Bevis at summen av to rasjonale tall er rasjonalt.',
            solution: `La $r_1 = \\frac{a}{b}$ og $r_2 = \\frac{c}{d}$ med $b, d \\neq 0$. Da er $r_1 + r_2 = \\frac{ad + bc}{bd}$, som er rasjonalt siden teller og nevner er heltall og $bd \\neq 0$.`,
          },
          {
            label: 'c',
            task: 'Bevis at diagonalen i et kvadrat med side 1 har lengde $\\sqrt{2}$.',
            solution: `Ved Pytagoras: $d^2 = 1^2 + 1^2 = 2$, sa $d = \\sqrt{2}$.`,
          },
        ],
        hints: ['Bruk definisjoner presist', 'For delelighet: $a \\mid b$ betyr $b = ka$ for et heltall $k$'],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // OPPGAVE 10
    {
      id: 'r2-6-6-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Motsigelsesbevis:',
        subTasks: [
          {
            label: 'a',
            task: 'Bevis at $\\log_2 3$ er irrasjonalt.',
            solution: `Anta $\\log_2 3 = \\frac{p}{q}$ med $p, q \\in \\mathbb{Z}^+$. Da er $2^{p/q} = 3$, altsa $2^p = 3^q$. Men VS er partall og HS er oddetall. Motsigelse.`,
          },
          {
            label: 'b',
            task: 'Bevis at det ikke finnes heltall $a$ og $b$ slik at $6a + 9b = 1$.',
            solution: `Anta at det finnes. Da er $3(2a + 3b) = 1$, sa 3 deler 1. Motsigelse.`,
          },
          {
            label: 'c',
            task: 'Bevis at $\\sqrt{2} + \\sqrt{3}$ er irrasjonalt.',
            solution: `Anta $\\sqrt{2} + \\sqrt{3} = r$ rasjonalt. Da er $\\sqrt{3} = r - \\sqrt{2}$, sa $3 = r^2 - 2r\\sqrt{2} + 2$, altsaa $\\sqrt{2} = \\frac{r^2 - 1}{2r}$ rasjonalt. Motsigelse.`,
          },
        ],
        hints: ['For a) tenk på partall/oddetall', 'For c) kvadrer begge sider'],
        solution: 'Se deloppgavene for fullstendige bevis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // OPPGAVE 11
    {
      id: 'r2-6-6-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beviskritikk - finn feilen:',
        subTasks: [
          {
            label: 'a',
            task: `"**Bevis:** La $a = b = 1$. Da er $a^2 - b^2 = a - b$, dvs. $(a-b)(a+b) = a - b$. Del på $(a-b)$: $a + b = 1$, dvs. $2 = 1$."`,
            solution: `Feilen: $a - b = 0$, sa vi deler på null.`,
          },
          {
            label: 'b',
            task: `"**Bevis ved induksjon at alle tall er like:** $P(1)$ er trivielt sann. Anta $P(k)$: alle tall opptil $k$ er like. For $P(k+1)$: Vi har $1 = 2 = \\ldots = k$, og $2 = 3 = \\ldots = k+1$. Altsa $1 = k+1$."`,
            solution: `Feilen: Induksjonssteget krever at mengdene overlapper, noe de ikke gjor for $k = 1$.`,
          },
        ],
        hints: ['Se etter divisjon med null', 'Sjekk om argumentet fungerer for sma verdier'],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // OPPGAVE 12
    {
      id: 'r2-6-6-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r2-6-6-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Bevis at $\\sqrt{p}$ er irrasjonalt for alle primtall $p$.',
            solution: `Anta $\\sqrt{p} = \\frac{a}{b}$ med $\\gcd(a,b) = 1$. Da $pb^2 = a^2$, sa $p \\mid a^2$. Siden $p$ er primtall, $p \\mid a$. Skriv $a = pk$, sa $pb^2 = p^2k^2$, altsaa $b^2 = pk^2$. Da $p \\mid b^2$, sa $p \\mid b$. Motsigelse: $\\gcd(a,b) \\geq p > 1$.`,
          },
          {
            label: 'b',
            task: 'Bevis at det finnes irrasjonale tall $a$ og $b$ slik at $a^b$ er rasjonalt.',
            solution: `Betrakt $\\sqrt{2}^{\\sqrt{2}}$. Enten er dette rasjonalt (og vi er ferdige med $a = b = \\sqrt{2}$), eller det er irrasjonalt. I sistnevnte tilfelle: $(\\sqrt{2}^{\\sqrt{2}})^{\\sqrt{2}} = \\sqrt{2}^2 = 2$, som er rasjonalt. Da er $a = \\sqrt{2}^{\\sqrt{2}}$ og $b = \\sqrt{2}$.`,
          },
          {
            label: 'c',
            task: 'Bevis Bernoullis ulikhet ved induksjon: $(1 + x)^n \\geq 1 + nx$ for alle $n \\geq 1$ og $x > -1$.',
            solution: `Basissteg: $(1+x)^1 = 1 + x \\geq 1 + x$. OK.
Induksjonssteg: Anta $(1+x)^k \\geq 1 + kx$. Da $(1+x)^{k+1} = (1+x)^k(1+x) \\geq (1+kx)(1+x) = 1 + kx + x + kx^2 = 1 + (k+1)x + kx^2 \\geq 1 + (k+1)x$ siden $kx^2 \\geq 0$.`,
          },
        ],
        hints: ['a) Bruk at primtall bare har seg selv og 1 som faktorer', 'b) Dette er et ikke-konstruktivt bevis'],
        solution: 'Se deloppgavene for fullstendige bevis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // TILLEGGSOPPGAVER
    {
      id: 'r2-6-6-tillegg',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r2-6-6-tillegg-1',
          type: 'exercise',
          exercise: {
            id: 'r2-6-6-tillegg-ex-1',
            number: 'T1',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bevis ved induksjon at $\\sum_{i=1}^{n} i^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$',
            solution: `Basissteg: $n = 1$: VS = 1, HS = 1. OK.
Induksjonssteg: $\\sum_{i=1}^{k+1} i^3 = \\left(\\frac{k(k+1)}{2}\\right)^2 + (k+1)^3 = (k+1)^2\\left(\\frac{k^2}{4} + (k+1)\\right) = (k+1)^2 \\cdot \\frac{k^2 + 4k + 4}{4} = \\left(\\frac{(k+1)(k+2)}{2}\\right)^2$.`,
            hints: ['Faktoriser $(k+1)^2$ ut'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: 'r2-6-6-tillegg-2',
          type: 'exercise',
          exercise: {
            id: 'r2-6-6-tillegg-ex-2',
            number: 'T2',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Bevis at mellom ethvert par av rasjonale tall finnes det et irrasjonalt tall.',
            solution: `La $r < s$ vare rasjonale. Betrakt $t = r + \\frac{(s-r)}{\\sqrt{2}}$. Da $r < t < s$ og $t$ er irrasjonalt (siden $t - r = \\frac{s-r}{\\sqrt{2}}$ er irrasjonalt).`,
            hints: ['Bruk $\\sqrt{2}$ til a konstruere et irrasjonalt tall i intervallet'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: 'r2-6-6-tillegg-3',
          type: 'exercise',
          exercise: {
            id: 'r2-6-6-tillegg-ex-3',
            number: 'T3',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Bevis at for alle $n \\geq 1$: $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{n(n+1)} = \\frac{n}{n+1}$',
            solution: `Basissteg: $n = 1$: VS = $\\frac{1}{2}$, HS = $\\frac{1}{2}$. OK.
Induksjonssteg: $\\sum_{i=1}^{k+1} \\frac{1}{i(i+1)} = \\frac{k}{k+1} + \\frac{1}{(k+1)(k+2)} = \\frac{k(k+2) + 1}{(k+1)(k+2)} = \\frac{k^2 + 2k + 1}{(k+1)(k+2)} = \\frac{(k+1)^2}{(k+1)(k+2)} = \\frac{k+1}{k+2}$.`,
            hints: ['Finn fellesnevner i induksjonssteget'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: 'r2-6-6-tillegg-4',
          type: 'exercise',
          exercise: {
            id: 'r2-6-6-tillegg-ex-4',
            number: 'T4',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Bevis at $\\sqrt[3]{2}$ er irrasjonalt.',
            solution: `Anta $\\sqrt[3]{2} = \\frac{p}{q}$ med $\\gcd(p,q) = 1$. Da $2q^3 = p^3$, sa 2 deler $p^3$, og dermed deler 2 $p$. Skriv $p = 2k$, sa $2q^3 = 8k^3$, altsaa $q^3 = 4k^3 = 2(2k^3)$, sa 2 deler $q$. Motsigelse.`,
            hints: ['Folg samme struktur som for $\\sqrt{2}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};
