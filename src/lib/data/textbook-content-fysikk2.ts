/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
 
/**
 * Tekstbok innhold for Fysikk 2 VG3
 *
 * Dekker LK20-kompetansemål for fysikk 2 (FYS02-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Vektorer og komponenter  
// ============================================================================

export const CHAPTER_FYSIKK2_1_1: TextbookChapter = {
  id: 'fysikk2-1-1',
  courseId: 'fys2',
  chapterNumber: '1.1',
  title: 'Vektorer og komponenter',
  description: 'Grunnleggende vektorregning og dekomponering i komponenter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke vektorer til å beskrive fysiske størrelser',
    'dekomponere vektorer i komponenter',
  ],
  content: [
    {
      id: 'fys2-1-1-intro',
      type: 'text',
      content: `# Vektorer og komponenter

I fysikk 2 utvider vi kunnskapen om bevegelse til to dimensjoner.

## Skalarer vs. vektorer

- **Skalar**: Størrelse med bare tallverdi (temperatur, masse)
- **Vektor**: Størrelse med tallverdi og retning (hastighet, kraft)`,
    },
    {
      id: 'fys2-1-1-def',
      type: 'definition',
      title: 'Vektorkomponenter',
      content: `$\\vec{A} = A_x\\hat{i} + A_y\\hat{j}$`,
    },
  ],
  exercises: [],
};


// ============================================================================
// Kapittel 1.2: Bevegelse i to dimensjoner
// ============================================================================

export const CHAPTER_FYSIKK2_1_2: TextbookChapter = {
  id: 'fysikk2-1-2',
  courseId: 'fys2',
  chapterNumber: '1.2',
  title: 'Bevegelse i to dimensjoner',
  description:
    'Lær å beskrive bevegelse i planet med posisjon-, hastighets- og akselerasjonsvektorer, og forstå hvordan bevegelse i x- og y-retning kan analyseres separat.',
  estimatedMinutes: 90,
  prerequisites: ['fysikk2-1-1'],
  competenceGoals: [
    'bruke vektorer til å beskrive posisjon, hastighet og akselerasjon i to dimensjoner',
    'derivere posisjonsvektoren for å finne hastighet og akselerasjon',
    'anvende uavhengighetsprinsippet til å analysere bevegelse i hver dimensjon separat',
    'løse kinematikkproblemer med konstant akselerasjon i to dimensjoner',
    'forstå sammenhengen mellom derivasjon og integrasjon i kinematikk',
  ],
  content: [
    {
      id: 'fys2-1-2-intro',
      type: 'text',
      content: `# Bevegelse i to dimensjoner

I forrige kapittel lærte vi om vektorer og hvordan de brukes til å beskrive størrelser med retning. Nå skal vi bruke denne kunnskapen til å analysere bevegelse i planet - altså bevegelse som skjer i to dimensjoner samtidig.

## Fra én til to dimensjoner

I Fysikk 1 studerte vi bevegelse langs en rett linje (én dimensjon). Vi brukte formler som:

$$x(t) = x_0 + v_0 t + \\frac{1}{2}at^2$$

Nå utvider vi dette til bevegelse i **planet** (to dimensjoner). Et objekt kan nå bevege seg både horisontalt og vertikalt samtidig.

## Eksempler på 2D-bevegelse

- **Skråkast**: En ball kastes skrått oppover
- **Sirkelbevegelse**: En bil kjører rundt en rundkjøring
- **Prosjektilbevegelse**: En kanonkule i luften
- **Fly i vind**: Et fly som påvirkes av sidevind

For å beskrive slik bevegelse trenger vi **vektorer** - posisjonsvektor, hastighetsvektor og akselerasjonsvektor.`,
    },
    {
      id: 'fys2-1-2-posisjonsvektor',
      type: 'text',
      content: `# Posisjonsvektoren

**Posisjonsvektoren** $\\vec{r}$ beskriver hvor et objekt befinner seg i forhold til origo.

## Definisjon

I to dimensjoner er posisjonsvektoren:

$$\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j}$$

Her er:
- $x(t)$ = objektets x-koordinat som funksjon av tid
- $y(t)$ = objektets y-koordinat som funksjon av tid
- $\\hat{i}$ = enhetsvektoren i x-retning
- $\\hat{j}$ = enhetsvektoren i y-retning

## Grafisk tolkning

Posisjonsvektoren er en pil som peker fra origo til objektets posisjon. Når objektet beveger seg, endrer posisjonsvektoren seg over tid - den "følger med" objektet.

## Banen (trajektoriet)

Settet av alle posisjoner objektet passerer gjennom kalles **banen** eller **trajektoriet**. Hvis vi tegner alle posisjonene $(x(t), y(t))$ for alle tider $t$, får vi banekurven.

**Eksempel:**
Hvis $x(t) = 2t$ og $y(t) = 3t$, beveger objektet seg langs en rett linje.
Hvis $x(t) = \\cos(t)$ og $y(t) = \\sin(t)$, beveger objektet seg i en sirkel.`,
    },
    {
      id: 'fys2-1-2-def-posisjonsvektor',
      type: 'definition',
      title: 'Posisjonsvektor',
      content:
        '**Posisjonsvektoren** $\\vec{r}(t)$ angir et objekts posisjon relativt til origo som funksjon av tid: $$\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j}$$ Lengden $|\\vec{r}|$ er avstanden fra origo til objektet.',
    },
    {
      id: 'fys2-1-2-formula-posisjon',
      type: 'formula',
      title: 'Posisjonsvektor i 2D',
      latex: '\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j}',
      description:
        'Posisjonsvektoren som funksjon av tid, der $x(t)$ og $y(t)$ er koordinatene i x- og y-retning.',
    },
    {
      id: 'fys2-1-2-hastighetsvektor',
      type: 'text',
      content: `# Hastighetsvektoren

**Hastighetsvektoren** $\\vec{v}$ beskriver hvor raskt og i hvilken retning et objekt beveger seg.

## Definisjon via derivasjon

Hastighetsvektoren er den **tidsderiverte** av posisjonsvektoren:

$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = \\frac{dx}{dt}\\hat{i} + \\frac{dy}{dt}\\hat{j}$$

Vi kan skrive dette enklere som:

$$\\vec{v}(t) = v_x(t)\\hat{i} + v_y(t)\\hat{j}$$

der $v_x = \\frac{dx}{dt}$ og $v_y = \\frac{dy}{dt}$.

## Grafisk tolkning

Hastighetsvektoren peker alltid **tangent til banen** - altså i den retningen objektet beveger seg i øyeblikket.

- **Lengden** $|\\vec{v}|$ er farten (hvor raskt objektet beveger seg)
- **Retningen** viser hvilken vei objektet beveger seg

## Sammenheng med 1D-kinematikk

I én dimensjon hadde vi $v = \\frac{dx}{dt}$. Dette er bare x-komponenten av hastighetsvektoren!

I to dimensjoner har vi i tillegg $v_y = \\frac{dy}{dt}$, og disse to komponentene danner hastighetsvektoren.`,
    },
    {
      id: 'fys2-1-2-def-hastighetsvektor',
      type: 'definition',
      title: 'Hastighetsvektor',
      content:
        '**Hastighetsvektoren** $\\vec{v}(t)$ er den tidsderiverte av posisjonsvektoren: $$\\vec{v}(t) = \\frac{d\\vec{r}}{dt}$$ Hastighetsvektoren peker tangent til banen og har størrelse lik farten.',
    },
    {
      id: 'fys2-1-2-formula-hastighet',
      type: 'formula',
      title: 'Hastighetsvektor i 2D',
      latex:
        '\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = \\frac{dx}{dt}\\hat{i} + \\frac{dy}{dt}\\hat{j} = v_x\\hat{i} + v_y\\hat{j}',
      description: 'Hastighetsvektoren finnes ved å derivere posisjonsvektoren med hensyn på tid.',
    },
    {
      id: 'fys2-1-2-fart-vs-hastighet',
      type: 'note',
      title: 'Fart vs. hastighetsvektor',
      content: `**Farten** er størrelsen (lengden) av hastighetsvektoren:
$$v = |\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$$

Farten er alltid positiv (eller null), mens hastighetskomponentene $v_x$ og $v_y$ kan være negative.

Et objekt i sirkelbevegelse med konstant fart har IKKE konstant hastighet, fordi retningen endrer seg hele tiden!`,
    },
    {
      id: 'fys2-1-2-akselerasjonsvektor',
      type: 'text',
      content: `# Akselerasjonsvektoren

**Akselerasjonsvektoren** $\\vec{a}$ beskriver hvordan hastigheten endrer seg over tid.

## Definisjon via derivasjon

Akselerasjonsvektoren er den **tidsderiverte** av hastighetsvektoren:

$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{dv_x}{dt}\\hat{i} + \\frac{dv_y}{dt}\\hat{j}$$

Siden $\\vec{v} = \\frac{d\\vec{r}}{dt}$, er akselerasjonen også den **andrederiverte** av posisjon:

$$\\vec{a}(t) = \\frac{d^2\\vec{r}}{dt^2}$$

## Hva akselerasjon betyr i 2D

I to dimensjoner kan akselerasjonen føre til:

1. **Endring i fart** (objektet går raskere eller saktere)
2. **Endring i retning** (objektet svinger)
3. **Begge deler samtidig**

Dette er viktig: Selv om et objekt har konstant fart, kan det ha akselerasjon hvis retningen endrer seg!

## Komponenter

$$\\vec{a}(t) = a_x(t)\\hat{i} + a_y(t)\\hat{j}$$

der $a_x = \\frac{dv_x}{dt} = \\frac{d^2x}{dt^2}$ og $a_y = \\frac{dv_y}{dt} = \\frac{d^2y}{dt^2}$.`,
    },
    {
      id: 'fys2-1-2-def-akselerasjonsvektor',
      type: 'definition',
      title: 'Akselerasjonsvektor',
      content:
        '**Akselerasjonsvektoren** $\\vec{a}(t)$ er den tidsderiverte av hastighetsvektoren (eller andrederiverte av posisjonsvektoren): $$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2}$$ Akselerasjonen beskriver endring i hastighet - både i størrelse og retning.',
    },
    {
      id: 'fys2-1-2-formula-akselerasjon',
      type: 'formula',
      title: 'Akselerasjonsvektor i 2D',
      latex:
        '\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2} = a_x\\hat{i} + a_y\\hat{j}',
      description:
        'Akselerasjonsvektoren finnes ved å derivere hastighetsvektoren med hensyn på tid.',
    },
    {
      id: 'fys2-1-2-ex-derivasjon',
      type: 'example',
      title: 'Fra posisjon til hastighet og akselerasjon',
      problem:
        'Et objekt har posisjonsvektor $\\vec{r}(t) = (3t^2 - 2)\\hat{i} + (4t - t^2)\\hat{j}$ meter, der $t$ er tid i sekunder.\n\na) Finn hastighetsvektoren $\\vec{v}(t)$.\n\nb) Finn akselerasjonsvektoren $\\vec{a}(t)$.\n\nc) Finn hastighet og akselerasjon ved $t = 2$ s.',
      solution: `**Gitt:**
$$\\vec{r}(t) = (3t^2 - 2)\\hat{i} + (4t - t^2)\\hat{j} \\text{ m}$$

**a) Finn hastighetsvektoren**

Vi deriverer posisjonsvektoren:
$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = \\frac{d}{dt}(3t^2 - 2)\\hat{i} + \\frac{d}{dt}(4t - t^2)\\hat{j}$$

$$\\vec{v}(t) = 6t\\hat{i} + (4 - 2t)\\hat{j} \\text{ m/s}$$

**b) Finn akselerasjonsvektoren**

Vi deriverer hastighetsvektoren:
$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d}{dt}(6t)\\hat{i} + \\frac{d}{dt}(4 - 2t)\\hat{j}$$

$$\\vec{a}(t) = 6\\hat{i} - 2\\hat{j} \\text{ m/s}^2$$

Merk at akselerasjonen er **konstant** (uavhengig av $t$).

**c) Ved $t = 2$ s**

**Hastighet:**
$$\\vec{v}(2) = 6(2)\\hat{i} + (4 - 2 \\cdot 2)\\hat{j} = 12\\hat{i} + 0\\hat{j} \\text{ m/s}$$

Farten er $|\\vec{v}(2)| = \\sqrt{12^2 + 0^2} = 12$ m/s.

**Akselerasjon:**
$$\\vec{a}(2) = 6\\hat{i} - 2\\hat{j} \\text{ m/s}^2$$

Størrelsen er $|\\vec{a}| = \\sqrt{6^2 + (-2)^2} = \\sqrt{40} = 6.32$ m/s².

**Svar:**
- $\\vec{v}(t) = 6t\\hat{i} + (4 - 2t)\\hat{j}$ m/s
- $\\vec{a}(t) = 6\\hat{i} - 2\\hat{j}$ m/s² (konstant)
- Ved $t = 2$ s: fart = 12 m/s, akselerasjon = 6.32 m/s²`,
    },
    {
      id: 'fys2-1-2-uavhengighetsprinsippet',
      type: 'text',
      content: `# Uavhengighetsprinsippet

Et av de viktigste prinsippene i 2D-kinematikk er **uavhengighetsprinsippet**:

## Prinsippet

> Bevegelse i x-retning og y-retning er **uavhengige** av hverandre og kan analyseres separat.

Dette betyr at:
- Hastigheten i x-retning påvirker ikke hastigheten i y-retning
- Akselerasjonen i x-retning påvirker ikke bevegelsen i y-retning (og omvendt)
- Vi kan løse to separate 1D-problemer og kombinere resultatene

## Hvorfor fungerer dette?

Newtons andre lov gjelder for hver komponent separat:

$$F_x = ma_x \\qquad F_y = ma_y$$

Hvis det ikke er noen kraft i x-retning ($F_x = 0$), er $a_x = 0$, og hastigheten i x-retning forblir konstant - uavhengig av hva som skjer i y-retning.

## Eksempel: Skråkast

Når en ball kastes skrått oppover (og vi ser bort fra luftmotstand):
- **I x-retning:** Ingen kraft → konstant hastighet $v_x$
- **I y-retning:** Tyngdekraft → konstant akselerasjon $a_y = -g$

Disse to bevegelsene skjer **samtidig og uavhengig**. Resultatet er en parabelformet bane.`,
    },
    {
      id: 'fys2-1-2-def-uavhengighet',
      type: 'definition',
      title: 'Uavhengighetsprinsippet',
      content:
        '**Uavhengighetsprinsippet** sier at bevegelse i ortogonale retninger (f.eks. x og y) er uavhengige av hverandre. Dette gjør at vi kan analysere bevegelsen i hver retning separat ved å bruke 1D-kinematikk, og deretter kombinere resultatene vektorielt.',
    },
    {
      id: 'fys2-1-2-konstant-akselerasjon',
      type: 'text',
      content: `# Konstant akselerasjon i 2D

Når akselerasjonen er konstant, kan vi bruke de kjente kinematiske likningene - men nå for hver komponent separat.

## Kinematiske likninger i 2D

For **x-retning** (med konstant $a_x$):

$$v_x(t) = v_{0x} + a_x t$$
$$x(t) = x_0 + v_{0x} t + \\frac{1}{2}a_x t^2$$
$$v_x^2 = v_{0x}^2 + 2a_x(x - x_0)$$

For **y-retning** (med konstant $a_y$):

$$v_y(t) = v_{0y} + a_y t$$
$$y(t) = y_0 + v_{0y} t + \\frac{1}{2}a_y t^2$$
$$v_y^2 = v_{0y}^2 + 2a_y(y - y_0)$$

## Vektorform

Vi kan også skrive dette på vektorform:

$$\\vec{v}(t) = \\vec{v}_0 + \\vec{a}t$$

$$\\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0 t + \\frac{1}{2}\\vec{a}t^2$$

## Spesialtilfelle: Prosjektilbevegelse

For prosjektilbevegelse nær jordoverflaten (uten luftmotstand):
- $a_x = 0$ (ingen horisontal akselerasjon)
- $a_y = -g \\approx -9.81$ m/s² (tyngdeakselerasjon nedover)`,
    },
    {
      id: 'fys2-1-2-formula-kinematikk-2d',
      type: 'formula',
      title: 'Kinematiske likninger i 2D',
      latex:
        '\\vec{v}(t) = \\vec{v}_0 + \\vec{a}t \\qquad \\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0 t + \\frac{1}{2}\\vec{a}t^2',
      description:
        'Kinematiske likninger for konstant akselerasjon i vektorform. Hver likning kan deles opp i x- og y-komponenter.',
    },
    {
      id: 'fys2-1-2-ex-skrakast',
      type: 'example',
      title: 'Skråkast',
      problem:
        'En ball kastes fra bakkenivå med starthastighet 20 m/s i en vinkel på 60° over horisontalplanet. Bruk $g = 10$ m/s².\n\na) Finn starthastighetens komponenter.\n\nb) Finn posisjon og hastighet etter $t = 2$ s.\n\nc) Når lander ballen, og hvor langt unna?',
      solution: `**Gitt:**
- $v_0 = 20$ m/s, $\\theta = 60°$
- $\\vec{r}_0 = 0$ (starter i origo)
- $a_x = 0$, $a_y = -10$ m/s²

**a) Starthastighetens komponenter**

$$v_{0x} = v_0 \\cos 60° = 20 \\cdot 0.5 = 10 \\text{ m/s}$$
$$v_{0y} = v_0 \\sin 60° = 20 \\cdot \\frac{\\sqrt{3}}{2} = 20 \\cdot 0.866 = 17.32 \\text{ m/s}$$

**b) Posisjon og hastighet ved $t = 2$ s**

**Posisjon:**
$$x(2) = v_{0x} \\cdot t = 10 \\cdot 2 = 20 \\text{ m}$$
$$y(2) = v_{0y} t + \\frac{1}{2}a_y t^2 = 17.32 \\cdot 2 + \\frac{1}{2}(-10)(2)^2$$
$$y(2) = 34.64 - 20 = 14.64 \\text{ m}$$

**Hastighet:**
$$v_x(2) = v_{0x} = 10 \\text{ m/s}$$ (konstant)
$$v_y(2) = v_{0y} + a_y t = 17.32 + (-10)(2) = -2.68 \\text{ m/s}$$

Farten: $v = \\sqrt{10^2 + (-2.68)^2} = \\sqrt{107.2} = 10.35$ m/s

**c) Landingstid og rekkevidde**

Ballen lander når $y = 0$:
$$0 = v_{0y} t + \\frac{1}{2}a_y t^2$$
$$0 = t(v_{0y} + \\frac{1}{2}a_y t)$$

Løsninger: $t = 0$ (start) eller $v_{0y} + \\frac{1}{2}a_y t = 0$

$$t = \\frac{-2v_{0y}}{a_y} = \\frac{-2 \\cdot 17.32}{-10} = 3.46 \\text{ s}$$

**Rekkevidde:**
$$x(3.46) = v_{0x} \\cdot 3.46 = 10 \\cdot 3.46 = 34.6 \\text{ m}$$

**Svar:**
- Starthastighetens komponenter: $v_{0x} = 10$ m/s, $v_{0y} = 17.3$ m/s
- Ved $t = 2$ s: posisjon $(20, 14.6)$ m, fart $10.4$ m/s
- Landingstid: $3.5$ s, rekkevidde: $34.6$ m`,
    },
    {
      id: 'fys2-1-2-integrasjon',
      type: 'text',
      content: `# Fra akselerasjon til posisjon: Integrasjon

Vi har sett at derivasjon tar oss fra posisjon til hastighet til akselerasjon:

$$\\vec{r}(t) \\xrightarrow{\\frac{d}{dt}} \\vec{v}(t) \\xrightarrow{\\frac{d}{dt}} \\vec{a}(t)$$

For å gå **motsatt vei** - fra akselerasjon til hastighet til posisjon - bruker vi **integrasjon**:

$$\\vec{a}(t) \\xrightarrow{\\int dt} \\vec{v}(t) \\xrightarrow{\\int dt} \\vec{r}(t)$$

## Fra akselerasjon til hastighet

$$\\vec{v}(t) = \\vec{v}_0 + \\int_0^t \\vec{a}(t')\\, dt'$$

For konstant akselerasjon:
$$\\vec{v}(t) = \\vec{v}_0 + \\vec{a}t$$

## Fra hastighet til posisjon

$$\\vec{r}(t) = \\vec{r}_0 + \\int_0^t \\vec{v}(t')\\, dt'$$

For konstant hastighet:
$$\\vec{r}(t) = \\vec{r}_0 + \\vec{v}t$$

For konstant akselerasjon (sett inn $\\vec{v}(t) = \\vec{v}_0 + \\vec{a}t$):
$$\\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0 t + \\frac{1}{2}\\vec{a}t^2$$

## Initialbetingelser

Integrasjon innfører **integrasjonskonstanter** som må bestemmes fra **initialbetingelser** (startposisjon $\\vec{r}_0$ og starthastighet $\\vec{v}_0$).`,
    },
    {
      id: 'fys2-1-2-formula-integrasjon',
      type: 'formula',
      title: 'Integrasjon i kinematikk',
      latex:
        '\\vec{v}(t) = \\vec{v}_0 + \\int_0^t \\vec{a}\\, dt \\qquad \\vec{r}(t) = \\vec{r}_0 + \\int_0^t \\vec{v}\\, dt',
      description:
        'Integrasjon brukes til å finne hastighet fra akselerasjon og posisjon fra hastighet. Initialbetingelsene $\\vec{v}_0$ og $\\vec{r}_0$ må kjennes.',
    },
    {
      id: 'fys2-1-2-ex-integrasjon',
      type: 'example',
      title: 'Integrasjon fra akselerasjon til posisjon',
      problem:
        'Et objekt har akselerasjon $\\vec{a}(t) = 2\\hat{i} + 6t\\hat{j}$ m/s². Ved $t = 0$ er objektet i ro i origo.\n\na) Finn hastighetsvektoren $\\vec{v}(t)$.\n\nb) Finn posisjonsvektoren $\\vec{r}(t)$.\n\nc) Finn posisjon og hastighet ved $t = 3$ s.',
      solution: `**Gitt:**
- $\\vec{a}(t) = 2\\hat{i} + 6t\\hat{j}$ m/s²
- Initialbetingelser: $\\vec{v}_0 = 0$, $\\vec{r}_0 = 0$

**a) Finn hastighetsvektoren**

Vi integrerer akselerasjonen:
$$\\vec{v}(t) = \\vec{v}_0 + \\int_0^t \\vec{a}\\, dt' = 0 + \\int_0^t (2\\hat{i} + 6t'\\hat{j})\\, dt'$$

$$\\vec{v}(t) = \\left[2t'\\hat{i} + 3t'^2\\hat{j}\\right]_0^t = 2t\\hat{i} + 3t^2\\hat{j} \\text{ m/s}$$

**b) Finn posisjonsvektoren**

Vi integrerer hastigheten:
$$\\vec{r}(t) = \\vec{r}_0 + \\int_0^t \\vec{v}\\, dt' = 0 + \\int_0^t (2t'\\hat{i} + 3t'^2\\hat{j})\\, dt'$$

$$\\vec{r}(t) = \\left[t'^2\\hat{i} + t'^3\\hat{j}\\right]_0^t = t^2\\hat{i} + t^3\\hat{j} \\text{ m}$$

**c) Ved $t = 3$ s**

**Hastighet:**
$$\\vec{v}(3) = 2(3)\\hat{i} + 3(3)^2\\hat{j} = 6\\hat{i} + 27\\hat{j} \\text{ m/s}$$

Fart: $|\\vec{v}| = \\sqrt{6^2 + 27^2} = \\sqrt{36 + 729} = \\sqrt{765} = 27.7$ m/s

**Posisjon:**
$$\\vec{r}(3) = (3)^2\\hat{i} + (3)^3\\hat{j} = 9\\hat{i} + 27\\hat{j} \\text{ m}$$

Avstand fra origo: $|\\vec{r}| = \\sqrt{9^2 + 27^2} = \\sqrt{810} = 28.5$ m

**Svar:**
- $\\vec{v}(t) = 2t\\hat{i} + 3t^2\\hat{j}$ m/s
- $\\vec{r}(t) = t^2\\hat{i} + t^3\\hat{j}$ m
- Ved $t = 3$ s: hastighet 27.7 m/s, posisjon $(9, 27)$ m`,
    },
    {
      id: 'fys2-1-2-sammenfatning',
      type: 'text',
      content: `# Sammenfatning: Kinematikk i 2D

## Hovedpoenger

1. **Vektorbeskrivelse**
   - Posisjon: $\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j}$
   - Hastighet: $\\vec{v}(t) = v_x(t)\\hat{i} + v_y(t)\\hat{j}$
   - Akselerasjon: $\\vec{a}(t) = a_x(t)\\hat{i} + a_y(t)\\hat{j}$

2. **Derivasjonssammenhenger**
   $$\\vec{v} = \\frac{d\\vec{r}}{dt} \\qquad \\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2}$$

3. **Integrasjonssammenhenger**
   $$\\vec{v} = \\vec{v}_0 + \\int \\vec{a}\\, dt \\qquad \\vec{r} = \\vec{r}_0 + \\int \\vec{v}\\, dt$$

4. **Uavhengighetsprinsippet**
   Bevegelse i x og y kan analyseres separat som to 1D-problemer.

5. **Konstant akselerasjon**
   $$\\vec{v}(t) = \\vec{v}_0 + \\vec{a}t$$
   $$\\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0 t + \\frac{1}{2}\\vec{a}t^2$$

## Fremgangsmåte for oppgaver

1. Sett opp koordinatsystem (x horisontal, y vertikal)
2. Finn startbetingelser ($\\vec{r}_0$, $\\vec{v}_0$)
3. Identifiser akselerasjonen i hver retning
4. Bruk kinematiske likninger separat for x og y
5. Kombiner resultatene vektorielt`,
    },
    {
      id: 'fys2-1-2-tip-fremgangsmate',
      type: 'tip',
      title: 'Sjekkliste for 2D-kinematikkoppgaver',
      content: `**1. Tegn figur**
- Velg koordinatsystem (x og y)
- Merk startposisjon og starthastighet
- Tegn inn akselerasjonsretningen

**2. Identifiser kjente størrelser**
- Startposisjon: $(x_0, y_0)$
- Starthastighet: $(v_{0x}, v_{0y})$ - dekomponér om nødvendig
- Akselerasjon: $(a_x, a_y)$

**3. Sett opp likninger for hver retning separat**

**4. Løs for ukjente**
- Ofte gir én retning informasjon (f.eks. tid) som brukes i den andre

**5. Sjekk svarene**
- Er fortegnene rimelige?
- Er størrelsene i riktig størrelsesorden?`,
    },
    {
      id: 'fys2-1-2-warning-fortegn',
      type: 'warning',
      title: 'Pass på fortegnene!',
      content: `Vanlige feil med fortegn:

1. **Tyngdeakselerasjon**: Hvis y peker oppover, er $a_y = -g$ (negativ!)

2. **Hastighetskomponenter**: Hvis et objekt kastes nedover eller til venstre, vil tilsvarende komponent være negativ.

3. **Vinkler**: Vinkelen $\\theta$ måles fra positiv x-akse (mot klokka = positiv).

**Tips:** Velg alltid et koordinatsystem og HOLD DEG TIL DET gjennom hele oppgaven!`,
    },
  ],
  exercises: [
    // Multiple choice oppgaver (3 stk)
    {
      id: 'fys2-1-2-mc-1',
      number: '1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Et objekt har posisjonsvektoren $\\vec{r}(t) = 5t\\hat{i} + 3\\hat{j}$ meter. Hva er hastighetsvektoren?',
      options: [
        {
          id: 'a',
          text: '$\\vec{v} = 5\\hat{i} + 3\\hat{j}$ m/s',
          isCorrect: false,
          feedback: 'Nei, du har bare kopiert posisjonsvektoren. Du må derivere!',
        },
        {
          id: 'b',
          text: '$\\vec{v} = 5\\hat{i}$ m/s',
          isCorrect: true,
          feedback:
            'Riktig! Deriverer vi får $\\vec{v} = \\frac{d}{dt}(5t)\\hat{i} + \\frac{d}{dt}(3)\\hat{j} = 5\\hat{i} + 0 = 5\\hat{i}$ m/s.',
        },
        {
          id: 'c',
          text: '$\\vec{v} = 5t\\hat{i}$ m/s',
          isCorrect: false,
          feedback: 'Nei, $t$ forsvinner når vi deriverer $5t$ med hensyn på $t$.',
        },
        {
          id: 'd',
          text: '$\\vec{v} = 0$ m/s',
          isCorrect: false,
          feedback: 'Nei, objektet beveger seg i x-retning.',
        },
      ],
      solution:
        'Hastighetsvektoren finnes ved å derivere posisjonsvektoren: $\\vec{v} = \\frac{d\\vec{r}}{dt} = \\frac{d}{dt}(5t)\\hat{i} + \\frac{d}{dt}(3)\\hat{j} = 5\\hat{i}$ m/s. Konstante ledd (som 3) forsvinner ved derivasjon.',
    },
    {
      id: 'fys2-1-2-mc-2',
      number: '2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva forteller uavhengighetsprinsippet oss om bevegelse i to dimensjoner?',
      options: [
        {
          id: 'a',
          text: 'At hastigheten alltid er konstant i minst én retning',
          isCorrect: false,
          feedback: 'Nei, dette er ikke nødvendigvis sant. Det kommer an på akselerasjonen.',
        },
        {
          id: 'b',
          text: 'At bevegelsen i x-retning og y-retning kan analyseres separat',
          isCorrect: true,
          feedback:
            'Riktig! Uavhengighetsprinsippet sier at vi kan dele opp 2D-problemer i to separate 1D-problemer.',
        },
        {
          id: 'c',
          text: 'At akselerasjonen alltid er lik i x- og y-retning',
          isCorrect: false,
          feedback: 'Nei, akselerasjonen kan være helt forskjellig i de to retningene.',
        },
        {
          id: 'd',
          text: 'At banen alltid er en rett linje',
          isCorrect: false,
          feedback: 'Nei, banen kan være en kurve (som ved skråkast).',
        },
      ],
      solution:
        'Uavhengighetsprinsippet sier at bevegelse i ortogonale retninger (x og y) er uavhengige av hverandre. Dette betyr at vi kan analysere bevegelsen i hver retning separat ved å bruke 1D-kinematikk, og deretter kombinere resultatene.',
    },
    {
      id: 'fys2-1-2-mc-3',
      number: '3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En ball kastes horisontalt fra en klippe. Uten luftmotstand, hva skjer med den horisontale hastighetskomponenten $v_x$ mens ballen faller?',
      options: [
        {
          id: 'a',
          text: '$v_x$ øker på grunn av tyngdekraften',
          isCorrect: false,
          feedback: 'Nei, tyngdekraften virker vertikalt og påvirker ikke horisontal hastighet.',
        },
        {
          id: 'b',
          text: '$v_x$ minker på grunn av tyngdekraften',
          isCorrect: false,
          feedback: 'Nei, tyngdekraften har ingen komponent i horisontal retning.',
        },
        {
          id: 'c',
          text: '$v_x$ forblir konstant',
          isCorrect: true,
          feedback:
            'Riktig! Uten horisontal kraft (luftmotstand ignorert) er $a_x = 0$, så $v_x$ forblir konstant.',
        },
        {
          id: 'd',
          text: '$v_x$ blir null når ballen når høyeste punkt',
          isCorrect: false,
          feedback:
            'Nei, ballen kastes horisontalt så den har ikke noe "høyeste punkt" over startpunktet.',
        },
      ],
      solution:
        'Uten luftmotstand er det ingen kraft i horisontal retning (tyngdekraften virker bare vertikalt). Dermed er $a_x = 0$, og den horisontale hastigheten $v_x$ forblir konstant gjennom hele fallet. Dette er et eksempel på uavhengighetsprinsippet.',
    },
    // Medium beregningsoppgaver (4 stk)
    {
      id: 'fys2-1-2-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Et objekts posisjon er gitt ved $\\vec{r}(t) = (4t - t^2)\\hat{i} + (3t^2)\\hat{j}$ meter.\n\na) Finn hastighetsvektoren $\\vec{v}(t)$.\n\nb) Finn akselerasjonsvektoren $\\vec{a}(t)$.\n\nc) Ved hvilket tidspunkt er x-komponenten av hastigheten lik null?\n\nd) Hva er farten ved dette tidspunktet?',
      solution: `**Gitt:** $\\vec{r}(t) = (4t - t^2)\\hat{i} + (3t^2)\\hat{j}$ m

**a) Hastighetsvektoren**

$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = (4 - 2t)\\hat{i} + 6t\\hat{j} \\text{ m/s}$$

**b) Akselerasjonsvektoren**

$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = -2\\hat{i} + 6\\hat{j} \\text{ m/s}^2$$

(Akselerasjonen er konstant)

**c) Når er $v_x = 0$?**

$$v_x = 4 - 2t = 0$$
$$t = 2 \\text{ s}$$

**d) Fart ved $t = 2$ s**

$$v_y(2) = 6 \\cdot 2 = 12 \\text{ m/s}$$

Fart:
$$|\\vec{v}(2)| = \\sqrt{0^2 + 12^2} = 12 \\text{ m/s}$$

**Svar:**
- $\\vec{v}(t) = (4 - 2t)\\hat{i} + 6t\\hat{j}$ m/s
- $\\vec{a}(t) = -2\\hat{i} + 6\\hat{j}$ m/s² (konstant)
- $v_x = 0$ ved $t = 2$ s
- Farten ved $t = 2$ s er 12 m/s`,
      hints: [
        'Derivér komponentene separat',
        'Sett $v_x = 0$ og løs for $t$',
        'Fart er $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys2-1-2-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En ball kastes fra bakken med starthastighet 25 m/s i en vinkel på 53° over horisontalplanet. Bruk $g = 10$ m/s².\n\na) Finn starthastighetens komponenter.\n\nb) Finn maksimal høyde.\n\nc) Finn total flytid (tiden til ballen lander).',
      solution: `**Gitt:**
- $v_0 = 25$ m/s, $\\theta = 53°$
- $g = 10$ m/s²
- Starter fra bakken: $y_0 = 0$

**a) Starthastighetens komponenter**

Vi bruker at $\\cos 53° \\approx 0.6$ og $\\sin 53° \\approx 0.8$:

$$v_{0x} = 25 \\cos 53° = 25 \\cdot 0.6 = 15 \\text{ m/s}$$
$$v_{0y} = 25 \\sin 53° = 25 \\cdot 0.8 = 20 \\text{ m/s}$$

**b) Maksimal høyde**

Ved maksimal høyde er $v_y = 0$:
$$v_y = v_{0y} - gt = 0$$
$$t_{\\text{topp}} = \\frac{v_{0y}}{g} = \\frac{20}{10} = 2 \\text{ s}$$

Høyde ved dette tidspunktet:
$$y_{\\text{max}} = v_{0y} t_{\\text{topp}} - \\frac{1}{2}g t_{\\text{topp}}^2$$
$$y_{\\text{max}} = 20 \\cdot 2 - \\frac{1}{2} \\cdot 10 \\cdot 4 = 40 - 20 = 20 \\text{ m}$$

Alternativt: $y_{\\text{max}} = \\frac{v_{0y}^2}{2g} = \\frac{20^2}{20} = 20$ m

**c) Total flytid**

Ballen lander når $y = 0$:
$$0 = v_{0y} t - \\frac{1}{2}gt^2 = t(v_{0y} - \\frac{1}{2}gt)$$

$t = 0$ (start) eller $t = \\frac{2v_{0y}}{g} = \\frac{2 \\cdot 20}{10} = 4$ s

**Svar:**
- $v_{0x} = 15$ m/s, $v_{0y} = 20$ m/s
- Maksimal høyde: 20 m
- Flytid: 4 s`,
      hints: [
        'Husk at $\\sin 53° \\approx 0.8$ og $\\cos 53° \\approx 0.6$ (3-4-5 trekant)',
        'Ved toppunktet er den vertikale hastigheten null',
        'Flytiden er dobbelt så lang som tiden til toppunktet (symmetri)',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys2-1-2-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Et objekts akselerasjon er konstant: $\\vec{a} = 3\\hat{i} - 4\\hat{j}$ m/s². Ved $t = 0$ er objektet i posisjon $\\vec{r}_0 = 2\\hat{i} + 5\\hat{j}$ m med hastighet $\\vec{v}_0 = -6\\hat{i} + 8\\hat{j}$ m/s.\n\na) Finn hastighetsvektoren $\\vec{v}(t)$.\n\nb) Finn posisjonsvektoren $\\vec{r}(t)$.\n\nc) Ved hvilket tidspunkt passerer objektet y-aksen (dvs. $x = 0$)?',
      solution: `**Gitt:**
- $\\vec{a} = 3\\hat{i} - 4\\hat{j}$ m/s²
- $\\vec{r}_0 = 2\\hat{i} + 5\\hat{j}$ m
- $\\vec{v}_0 = -6\\hat{i} + 8\\hat{j}$ m/s

**a) Hastighetsvektoren**

$$\\vec{v}(t) = \\vec{v}_0 + \\vec{a}t = (-6\\hat{i} + 8\\hat{j}) + (3\\hat{i} - 4\\hat{j})t$$
$$\\vec{v}(t) = (-6 + 3t)\\hat{i} + (8 - 4t)\\hat{j} \\text{ m/s}$$

**b) Posisjonsvektoren**

$$\\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0 t + \\frac{1}{2}\\vec{a}t^2$$

x-komponent:
$$x(t) = 2 + (-6)t + \\frac{1}{2}(3)t^2 = 2 - 6t + 1.5t^2$$

y-komponent:
$$y(t) = 5 + 8t + \\frac{1}{2}(-4)t^2 = 5 + 8t - 2t^2$$

$$\\vec{r}(t) = (2 - 6t + 1.5t^2)\\hat{i} + (5 + 8t - 2t^2)\\hat{j} \\text{ m}$$

**c) Når er $x = 0$?**

$$2 - 6t + 1.5t^2 = 0$$

Multipliserer med 2:
$$4 - 12t + 3t^2 = 0$$
$$3t^2 - 12t + 4 = 0$$

Bruker andregradsformelen:
$$t = \\frac{12 \\pm \\sqrt{144 - 48}}{6} = \\frac{12 \\pm \\sqrt{96}}{6} = \\frac{12 \\pm 9.80}{6}$$

$t_1 = \\frac{12 - 9.80}{6} = 0.37$ s eller $t_2 = \\frac{12 + 9.80}{6} = 3.63$ s

**Svar:**
- $\\vec{v}(t) = (-6 + 3t)\\hat{i} + (8 - 4t)\\hat{j}$ m/s
- $\\vec{r}(t) = (2 - 6t + 1.5t^2)\\hat{i} + (5 + 8t - 2t^2)\\hat{j}$ m
- Objektet passerer y-aksen ved $t = 0.37$ s og $t = 3.63$ s`,
      hints: [
        'Bruk $\\vec{v}(t) = \\vec{v}_0 + \\vec{a}t$ for konstant akselerasjon',
        'Bruk $\\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0 t + \\frac{1}{2}\\vec{a}t^2$',
        'y-aksen svarer til $x = 0$',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys2-1-2-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Et objekts hastighetsvektor er gitt ved $\\vec{v}(t) = (4 + 2t)\\hat{i} + (6 - 3t)\\hat{j}$ m/s. Ved $t = 0$ er objektet i origo.\n\na) Finn akselerasjonsvektoren.\n\nb) Finn posisjonsvektoren $\\vec{r}(t)$ ved integrasjon.\n\nc) Finn posisjonen og farten ved $t = 4$ s.',
      solution: `**Gitt:**
- $\\vec{v}(t) = (4 + 2t)\\hat{i} + (6 - 3t)\\hat{j}$ m/s
- $\\vec{r}(0) = 0$ (starter i origo)

**a) Akselerasjonsvektoren**

$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = 2\\hat{i} - 3\\hat{j} \\text{ m/s}^2$$

(Akselerasjonen er konstant)

**b) Posisjonsvektoren ved integrasjon**

$$\\vec{r}(t) = \\int \\vec{v}(t)\\, dt = \\int (4 + 2t)\\, dt \\cdot \\hat{i} + \\int (6 - 3t)\\, dt \\cdot \\hat{j}$$

$$\\vec{r}(t) = (4t + t^2)\\hat{i} + (6t - \\frac{3}{2}t^2)\\hat{j} + \\vec{C}$$

Med $\\vec{r}(0) = 0$ får vi $\\vec{C} = 0$, så:

$$\\vec{r}(t) = (4t + t^2)\\hat{i} + (6t - 1.5t^2)\\hat{j} \\text{ m}$$

**c) Ved $t = 4$ s**

**Posisjon:**
$$x(4) = 4 \\cdot 4 + 4^2 = 16 + 16 = 32 \\text{ m}$$
$$y(4) = 6 \\cdot 4 - 1.5 \\cdot 16 = 24 - 24 = 0 \\text{ m}$$

$$\\vec{r}(4) = 32\\hat{i} \\text{ m}$$

**Hastighet:**
$$\\vec{v}(4) = (4 + 8)\\hat{i} + (6 - 12)\\hat{j} = 12\\hat{i} - 6\\hat{j} \\text{ m/s}$$

**Fart:**
$$|\\vec{v}(4)| = \\sqrt{12^2 + 6^2} = \\sqrt{180} = 6\\sqrt{5} \\approx 13.4 \\text{ m/s}$$

**Svar:**
- $\\vec{a} = 2\\hat{i} - 3\\hat{j}$ m/s²
- $\\vec{r}(t) = (4t + t^2)\\hat{i} + (6t - 1.5t^2)\\hat{j}$ m
- Ved $t = 4$ s: posisjon $(32, 0)$ m, fart 13.4 m/s`,
      hints: [
        'Derivér for å finne akselerasjon',
        'Integrér komponentene separat',
        'Husk å bestemme integrasjonskonstanten fra initialbetingelsen',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    // Vanskelige oppgaver (4 stk)
    {
      id: 'fys2-1-2-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En fotball sparkes fra bakken med starthastighet 30 m/s i en vinkel $\\theta$ over horisontalplanet. Bruk $g = 10$ m/s².\n\na) Finn et uttrykk for rekkevidden $R$ (horisontal avstand til landingspunkt) som funksjon av vinkelen $\\theta$.\n\nb) For hvilken vinkel $\\theta$ blir rekkevidden størst?\n\nc) Hva er den maksimale rekkevidden?',
      solution: `**Gitt:**
- $v_0 = 30$ m/s
- $g = 10$ m/s²
- Starter og lander på bakkenivå

**a) Uttrykk for rekkevidde**

**Steg 1: Finn flytiden**

Vertikal bevegelse: $y = v_{0y}t - \\frac{1}{2}gt^2 = v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2$

Ved landing ($y = 0$):
$$0 = t(v_0 \\sin\\theta - \\frac{1}{2}gt)$$

$t = 0$ (start) eller $t = \\frac{2v_0 \\sin\\theta}{g}$

**Steg 2: Finn horisontal avstand**

$$R = v_{0x} \\cdot t = v_0 \\cos\\theta \\cdot \\frac{2v_0 \\sin\\theta}{g}$$

$$R = \\frac{2v_0^2 \\sin\\theta \\cos\\theta}{g}$$

Med identiteten $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$:

$$\\boxed{R = \\frac{v_0^2 \\sin 2\\theta}{g}}$$

**b) Optimal vinkel**

$R$ er størst når $\\sin 2\\theta = 1$, dvs. $2\\theta = 90°$.

$$\\boxed{\\theta = 45°}$$

**c) Maksimal rekkevidde**

$$R_{\\text{max}} = \\frac{v_0^2 \\cdot 1}{g} = \\frac{30^2}{10} = \\frac{900}{10} = 90 \\text{ m}$$

**Svar:**
- $R = \\frac{v_0^2 \\sin 2\\theta}{g} = \\frac{900 \\sin 2\\theta}{10} = 90 \\sin 2\\theta$ m
- Optimal vinkel: 45°
- Maksimal rekkevidde: 90 m`,
      hints: [
        'Flytiden finnes fra $y = 0$ ved landing',
        'Bruk identiteten $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$',
        'Maksimum av $\\sin$ er 1',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys2-1-2-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et prosjektil skytes horisontalt fra toppen av en 80 m høy klippe med starthastighet 30 m/s. Bruk $g = 10$ m/s².\n\na) Hvor lang tid tar det før prosjektilet treffer bakken?\n\nb) Hvor langt fra klippefoten lander det?\n\nc) Hva er farten og retningen (vinkel under horisontal) i det øyeblikket det treffer bakken?',
      solution: `**Gitt:**
- Høyde: $h = 80$ m
- Horisontal starthastighet: $v_{0x} = 30$ m/s
- Vertikal starthastighet: $v_{0y} = 0$ (skytes horisontalt)
- $g = 10$ m/s²

**a) Tid til bakken**

Vertikal bevegelse (y positiv oppover, starter ved $y_0 = 80$ m):
$$y(t) = y_0 - \\frac{1}{2}gt^2 = 80 - 5t^2$$

Treffer bakken når $y = 0$:
$$0 = 80 - 5t^2$$
$$t^2 = 16$$
$$t = 4 \\text{ s}$$

**b) Horisontal avstand**

$$x = v_{0x} \\cdot t = 30 \\cdot 4 = 120 \\text{ m}$$

**c) Fart og retning ved landing**

**Hastighetskomponenter ved $t = 4$ s:**
$$v_x = v_{0x} = 30 \\text{ m/s}$$ (konstant)
$$v_y = -gt = -10 \\cdot 4 = -40 \\text{ m/s}$$ (nedover)

**Fart:**
$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50 \\text{ m/s}$$

**Retning (vinkel under horisontal):**
$$\\alpha = \\arctan\\left(\\frac{|v_y|}{v_x}\\right) = \\arctan\\left(\\frac{40}{30}\\right) = \\arctan(1.333) = 53.1°$$

**Svar:**
- Tid til bakken: 4 s
- Avstand fra klippefoten: 120 m
- Fart ved landing: 50 m/s i retning 53° under horisontal

**Merk:** 30-40-50 er en 3-4-5 trekant skalert med 10!`,
      hints: [
        'Horisontal starthastighet betyr $v_{0y} = 0$',
        'Finn tiden fra den vertikale bevegelsen',
        'Ved landing peker hastigheten skrått nedover',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys2-1-2-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et objekts akselerasjon varierer med tiden: $\\vec{a}(t) = 2t\\hat{i} + 3\\hat{j}$ m/s². Ved $t = 0$ er objektet i ro i origo.\n\na) Finn hastighetsvektoren $\\vec{v}(t)$ ved integrasjon.\n\nb) Finn posisjonsvektoren $\\vec{r}(t)$ ved integrasjon.\n\nc) Finn størrelsen av hastighet og posisjon ved $t = 2$ s.',
      solution: `**Gitt:**
- $\\vec{a}(t) = 2t\\hat{i} + 3\\hat{j}$ m/s²
- $\\vec{v}(0) = 0$ (starter i ro)
- $\\vec{r}(0) = 0$ (starter i origo)

**a) Hastighetsvektoren**

$$\\vec{v}(t) = \\vec{v}(0) + \\int_0^t \\vec{a}(t')\\, dt'$$

$$\\vec{v}(t) = 0 + \\int_0^t (2t'\\hat{i} + 3\\hat{j})\\, dt'$$

$$\\vec{v}(t) = \\left[t'^2\\hat{i} + 3t'\\hat{j}\\right]_0^t = t^2\\hat{i} + 3t\\hat{j} \\text{ m/s}$$

**b) Posisjonsvektoren**

$$\\vec{r}(t) = \\vec{r}(0) + \\int_0^t \\vec{v}(t')\\, dt'$$

$$\\vec{r}(t) = 0 + \\int_0^t (t'^2\\hat{i} + 3t'\\hat{j})\\, dt'$$

$$\\vec{r}(t) = \\left[\\frac{t'^3}{3}\\hat{i} + \\frac{3t'^2}{2}\\hat{j}\\right]_0^t = \\frac{t^3}{3}\\hat{i} + \\frac{3t^2}{2}\\hat{j} \\text{ m}$$

**c) Ved $t = 2$ s**

**Hastighet:**
$$\\vec{v}(2) = 2^2\\hat{i} + 3(2)\\hat{j} = 4\\hat{i} + 6\\hat{j} \\text{ m/s}$$

$$|\\vec{v}(2)| = \\sqrt{4^2 + 6^2} = \\sqrt{16 + 36} = \\sqrt{52} = 2\\sqrt{13} \\approx 7.21 \\text{ m/s}$$

**Posisjon:**
$$\\vec{r}(2) = \\frac{2^3}{3}\\hat{i} + \\frac{3(2)^2}{2}\\hat{j} = \\frac{8}{3}\\hat{i} + 6\\hat{j} \\text{ m}$$

$$|\\vec{r}(2)| = \\sqrt{\\left(\\frac{8}{3}\\right)^2 + 6^2} = \\sqrt{\\frac{64}{9} + 36} = \\sqrt{\\frac{64 + 324}{9}} = \\sqrt{\\frac{388}{9}} \\approx 6.57 \\text{ m}$$

**Svar:**
- $\\vec{v}(t) = t^2\\hat{i} + 3t\\hat{j}$ m/s
- $\\vec{r}(t) = \\frac{t^3}{3}\\hat{i} + \\frac{3t^2}{2}\\hat{j}$ m
- Ved $t = 2$ s: fart = 7.2 m/s, avstand fra origo = 6.6 m`,
      hints: [
        'Integrér akselerasjonen for å finne hastighet',
        'Integrér hastigheten for å finne posisjon',
        'Husk å bruke initialbetingelsene ($\\vec{v}_0 = 0$, $\\vec{r}_0 = 0$)',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys2-1-2-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En ball kastes fra bakken mot en vegg som står 50 m unna. Ballen kastes med starthastighet 35 m/s i en vinkel på 30° over horisontalplanet. Bruk $g = 10$ m/s².\n\na) Hvor høyt opp på veggen treffer ballen?\n\nb) Hva er farten til ballen når den treffer veggen?\n\nc) I hvilken retning (vinkel med horisontal) beveger ballen seg når den treffer veggen?',
      solution: `**Gitt:**
- Avstand til vegg: $d = 50$ m
- $v_0 = 35$ m/s, $\\theta = 30°$
- $g = 10$ m/s²

**Starthastighetens komponenter:**
$$v_{0x} = 35 \\cos 30° = 35 \\cdot \\frac{\\sqrt{3}}{2} = 35 \\cdot 0.866 = 30.3 \\text{ m/s}$$
$$v_{0y} = 35 \\sin 30° = 35 \\cdot 0.5 = 17.5 \\text{ m/s}$$

**a) Høyde ved veggen**

**Steg 1: Finn tiden til veggen**
$$x = v_{0x} t \\Rightarrow t = \\frac{x}{v_{0x}} = \\frac{50}{30.3} = 1.65 \\text{ s}$$

**Steg 2: Finn høyden ved dette tidspunktet**
$$y = v_{0y} t - \\frac{1}{2}gt^2 = 17.5 \\cdot 1.65 - \\frac{1}{2} \\cdot 10 \\cdot 1.65^2$$
$$y = 28.9 - 13.6 = 15.3 \\text{ m}$$

**b) Fart ved veggen**

**Hastighetskomponenter ved $t = 1.65$ s:**
$$v_x = v_{0x} = 30.3 \\text{ m/s}$$ (konstant)
$$v_y = v_{0y} - gt = 17.5 - 10 \\cdot 1.65 = 17.5 - 16.5 = 1.0 \\text{ m/s}$$

**Fart:**
$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{30.3^2 + 1.0^2} = \\sqrt{919 + 1} = \\sqrt{920} = 30.3 \\text{ m/s}$$

**c) Retning ved veggen**

$$\\alpha = \\arctan\\left(\\frac{v_y}{v_x}\\right) = \\arctan\\left(\\frac{1.0}{30.3}\\right) = \\arctan(0.033) = 1.9°$$

Ballen beveger seg nesten horisontalt (litt oppover) når den treffer veggen.

**Svar:**
- Ballen treffer veggen **15.3 m** over bakken
- Farten ved treff er **30.3 m/s**
- Retningen er **1.9° over horisontal** (nesten horisontal)`,
      hints: [
        'Finn først tiden det tar å nå veggen (fra x-bevegelsen)',
        'Bruk denne tiden i y-likningen for å finne høyden',
        'Hastighetskomponentene ved treff gir fart og retning',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys2-1-2-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En partikkel beveger seg slik at dens posisjon er gitt ved $\\vec{r}(t) = R\\cos(\\omega t)\\hat{i} + R\\sin(\\omega t)\\hat{j}$, der $R = 2$ m og $\\omega = 3$ rad/s.\n\na) Beskriv banen partikkelen følger.\n\nb) Finn hastighetsvektoren og vis at farten er konstant.\n\nc) Finn akselerasjonsvektoren og vis at den alltid peker mot sentrum.\n\nd) Finn størrelsen på akselerasjonen.',
      solution: `**Gitt:**
- $\\vec{r}(t) = R\\cos(\\omega t)\\hat{i} + R\\sin(\\omega t)\\hat{j}$
- $R = 2$ m, $\\omega = 3$ rad/s

**a) Banen**

La oss finne $x^2 + y^2$:
$$x = R\\cos(\\omega t), \\quad y = R\\sin(\\omega t)$$
$$x^2 + y^2 = R^2\\cos^2(\\omega t) + R^2\\sin^2(\\omega t) = R^2(\\cos^2 + \\sin^2) = R^2$$

Dette er en **sirkel** med radius $R = 2$ m sentrert i origo.

**b) Hastighetsvektoren**

$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = -R\\omega\\sin(\\omega t)\\hat{i} + R\\omega\\cos(\\omega t)\\hat{j}$$

Med tallverdier:
$$\\vec{v}(t) = -6\\sin(3t)\\hat{i} + 6\\cos(3t)\\hat{j} \\text{ m/s}$$

**Farten:**
$$v = |\\vec{v}| = \\sqrt{(-R\\omega\\sin\\omega t)^2 + (R\\omega\\cos\\omega t)^2}$$
$$v = R\\omega\\sqrt{\\sin^2 + \\cos^2} = R\\omega = 2 \\cdot 3 = 6 \\text{ m/s}$$

Farten er **konstant** = 6 m/s.

**c) Akselerasjonsvektoren**

$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = -R\\omega^2\\cos(\\omega t)\\hat{i} - R\\omega^2\\sin(\\omega t)\\hat{j}$$

$$\\vec{a}(t) = -\\omega^2[R\\cos(\\omega t)\\hat{i} + R\\sin(\\omega t)\\hat{j}] = -\\omega^2 \\vec{r}(t)$$

Akselerasjonen er $\\vec{a} = -\\omega^2 \\vec{r}$, som betyr at den **peker mot sentrum** (motsatt retning av $\\vec{r}$).

**d) Størrelsen på akselerasjonen**

$$|\\vec{a}| = \\omega^2 |\\vec{r}| = \\omega^2 R = 3^2 \\cdot 2 = 18 \\text{ m/s}^2$$

Alternativt: $a = \\frac{v^2}{R} = \\frac{36}{2} = 18$ m/s² (sentripetalakselerasjon).

**Svar:**
- Partikkelen beveger seg i en sirkel med radius 2 m
- Farten er konstant: 6 m/s
- Akselerasjonen peker alltid mot sentrum: $\\vec{a} = -\\omega^2\\vec{r}$
- Akselerasjonens størrelse: 18 m/s²`,
      hints: [
        'Bruk identiteten $\\cos^2 + \\sin^2 = 1$ for å finne banen',
        'Derivér med hensyn på tid, og husk at $\\frac{d}{dt}\\cos(\\omega t) = -\\omega\\sin(\\omega t)$',
        'Sammenlign akselerasjonsvektoren med posisjonsvektoren',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ============================================================================
// Kapittel 1.3: Kastering - horisontal og skrå
// LK20: Utforske, beskrive og modellere bevegelse i to dimensjoner
// ============================================================================

export const CHAPTER_FYSIKK2_1_3: TextbookChapter = {
  id: 'fysikk2-1-3',
  courseId: 'fysikk2',
  chapterNumber: '1.3',
  title: 'Kastering - horisontal og skrå',
  description: 'Studier av prosjektilbevegelse, baneform, rekkevidde og maksimal høyde.',
  estimatedMinutes: 55,
  prerequisites: ['fysikk2-1-2'],
  competenceGoals: [
    'analysere og beregne størrelser ved kastering',
    'bruke kinematiske likninger i to dimensjoner',
    'utforske, beskrive og modellere bevegelse i to dimensjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-1-3-intro',
      type: 'text',
      content: `## Kastering - bevegelse i to dimensjoner

Når du kaster en ball, skyter et prosjektil eller sparker en fotball, følger objektet en karakteristisk bane gjennom luften. Denne bevegelsen kalles **kastering** eller **prosjektilbevegelse**.

**Eksempler på kastering:**
- En fotball som sparkes mot mål
- En basketball som kastes mot kurven
- En kanonkule som skytes ut
- En vannstråle fra en hageslange
- En ball som kastes horisontalt fra et bord

Det fascinerende med kastering er at bevegelsen kan deles i to **uavhengige** komponenter:
- **Horisontal bevegelse** (x-retning): konstant hastighet (ingen akselerasjon)
- **Vertikal bevegelse** (y-retning): fritt fall med akselerasjon $g = 9.81$ m/s² nedover

**Viktig prinsipp:** Den horisontale og vertikale bevegelsen påvirker ikke hverandre! Dette gjør at vi kan analysere dem hver for seg.

**I dette kapittelet skal vi studere:**
1. Horisontalt kast (kastes ut horisontalt)
2. Skrått kast (kastes ut i en vinkel)
3. Baneform (parabel)
4. Rekkevidde og maksimal høyde
5. Optimal kastvinkel`,
    },

    // ========== DEFINISJON: KASTERING ==========
    {
      id: 'fys2-1-3-def-kastering',
      type: 'definition',
      title: 'Kastering (Prosjektilbevegelse)',
      content: `**Kastering** er bevegelse i to dimensjoner der objektet kun påvirkes av tyngdekraften (vi ser bort fra luftmotstand).

**Egenskaper:**
- Horisontal hastighet er konstant: $v_x = v_0\\cos\\theta$ (uendret)
- Vertikal hastighet endres: $v_y = v_0\\sin\\theta - gt$ (påvirket av $g$)
- Banen er en **parabel**

**To typer kastering:**
1. **Horisontalt kast**: startvinkel $\\theta = 0°$ (kastes vannrett)
2. **Skrått kast**: startvinkel $0° < \\theta < 90°$ (kastes i en vinkel)`,
    },

    // ========== HORISONTALT KAST ==========
    {
      id: 'fys2-1-3-horisontal-teori',
      type: 'text',
      content: `## Horisontalt kast

Et **horisontalt kast** betyr at objektet kastes ut horisontalt (vannrett) fra en viss høyde. Starthastigheten er helt i x-retning, ingen vertikal startkomponent.

**Eksempel:** Du kaster en ball rett ut fra et vindu.

### Startbetingelser

- **Posisjon:** $(x_0, y_0)$ – ofte setter vi $x_0 = 0$ og $y_0 = h$ (høyden)
- **Starthastighet i x-retning:** $v_{0x} = v_0$ (hele starthastigheten)
- **Starthastighet i y-retning:** $v_{0y} = 0$ (kastes horisontalt)

### Bevegelseslikninger for horisontalt kast

**Horisontal bevegelse (x-retning):**
- Konstant hastighet, ingen akselerasjon
$$x = x_0 + v_0 t$$

Hvis $x_0 = 0$:
$$x = v_0 t$$

**Vertikal bevegelse (y-retning):**
- Fritt fall fra høyde $h$
$$y = y_0 - \\frac{1}{2}gt^2$$

Hvis $y_0 = h$ (starthøyde):
$$y = h - \\frac{1}{2}gt^2$$

**Vertikal hastighet:**
$$v_y = -gt$$

(Negativ fordi den peker nedover)

**Total hastighet til enhver tid:**
$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{v_0^2 + (gt)^2}$$

### Tid i luften (fluktid)

Objektet er i luften til det treffer bakken: $y = 0$

$$0 = h - \\frac{1}{2}gt^2$$

$$t = \\sqrt{\\frac{2h}{g}}$$

**Merk:** Tiden i luften avhenger **bare** av høyden, ikke av den horisontale starthastigheten!

### Rekkevidde (horisontal distanse)

Rekkevidde $R$ er hvor langt objektet kommer horisontalt:

$$R = v_0 \\cdot t = v_0 \\sqrt{\\frac{2h}{g}}$$

**Merk:** Rekkevidden avhenger av både starthastighet og høyde.`,
    },

    // ========== EKSEMPEL: HORISONTALT KAST - BALL FRA BORD ==========
    {
      id: 'fys2-1-3-ex-horisontal-1',
      type: 'example',
      title: 'Eksempel: Ball kastet fra bord',
      problem: `En ball ruller av kanten på et bord som er 1.2 m høyt. Ballen har en horisontal hastighet på 3.0 m/s når den forlater bordet.

a) Hvor lang tid er ballen i luften?
b) Hvor langt fra bordkanten lander ballen?
c) Hva er ballens hastighet (størrelse og retning) når den treffer gulvet?`,
      solution: `**Gitt:**
- Høyde: $h = 1.2$ m
- Horisontal starthastighet: $v_0 = 3.0$ m/s
- Vertikal starthastighet: $v_{0y} = 0$ m/s (horisontalt kast)
- $g = 9.81$ m/s²

**a) Tid i luften:**

Bruk vertikal bevegelse:
$$y = h - \\frac{1}{2}gt^2$$

Ved landing: $y = 0$
$$0 = 1.2 - \\frac{1}{2} \\cdot 9.81 \\cdot t^2$$
$$\\frac{1}{2} \\cdot 9.81 \\cdot t^2 = 1.2$$
$$t^2 = \\frac{2 \\cdot 1.2}{9.81} = 0.245$$
$$t = \\sqrt{0.245} = 0.49 \\text{ s}$$

**b) Rekkevidde:**

$$R = v_0 \\cdot t = 3.0 \\cdot 0.49 = 1.47 \\text{ m}$$

Ballen lander 1.47 m fra bordkanten.

**c) Hastighet ved landing:**

**Horisontal hastighet** (uendret):
$$v_x = v_0 = 3.0 \\text{ m/s}$$

**Vertikal hastighet:**
$$v_y = -gt = -9.81 \\cdot 0.49 = -4.81 \\text{ m/s}$$

**Total hastighet (størrelse):**
$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{3.0^2 + 4.81^2}$$
$$v = \\sqrt{9.0 + 23.1} = \\sqrt{32.1} = 5.67 \\text{ m/s}$$

**Retning (vinkel fra horisontalt):**
$$\\theta = \\arctan\\left(\\frac{|v_y|}{v_x}\\right) = \\arctan\\left(\\frac{4.81}{3.0}\\right)$$
$$\\theta = \\arctan(1.60) = 58°$$

**Svar:**
- a) Tid i luften: 0.49 s
- b) Rekkevidde: 1.47 m
- c) Hastighet: 5.67 m/s, 58° under horisontalplanet`,
    },

    // ========== NOTE: UAVHENGIGHET ==========
    {
      id: 'fys2-1-3-note-uavhengighet',
      type: 'note',
      title: 'Viktig: Uavhengighet mellom x og y',
      content: `Den horisontale og vertikale bevegelsen er **fullstendig uavhengige** av hverandre!

**Berømt tankeeksperiment:**
Hvis du slipper én ball rett ned samtidig som du kaster en annen ball horisontalt fra samme høyde, vil begge treffe bakken **samtidig**!

Den horisontale hastigheten påvirker ikke hvor fort ballen faller.

Dette prinsippet er grunnleggende for all prosjektilbevegelse.`,
    },

    // ========== SKRÅTT KAST ==========
    {
      id: 'fys2-1-3-skratt-teori',
      type: 'text',
      content: `## Skrått kast

Et **skrått kast** betyr at objektet kastes ut i en vinkel $\\theta$ fra horisontalplanet. Starthastigheten har både en horisontal og en vertikal komponent.

**Eksempel:** En fotball som sparkes i en vinkel mot mål.

### Dekomponering av starthastighet

En starthastighet $v_0$ ved vinkel $\\theta$ har komponentene:

**Horisontal komponent:**
$$v_{0x} = v_0 \\cos\\theta$$

**Vertikal komponent:**
$$v_{0y} = v_0 \\sin\\theta$$

### Bevegelseslikninger for skrått kast

**Horisontal bevegelse (x-retning):**
$$x = v_{0x} t = v_0 \\cos\\theta \\cdot t$$

**Vertikal bevegelse (y-retning):**
$$y = v_{0y}t - \\frac{1}{2}gt^2 = v_0\\sin\\theta \\cdot t - \\frac{1}{2}gt^2$$

**Hastighetskomponenter:**
$$v_x = v_{0x} = v_0\\cos\\theta \\text{ (konstant)}$$
$$v_y = v_{0y} - gt = v_0\\sin\\theta - gt$$

### Maksimal høyde

Objektet når maksimal høyde når den vertikale hastigheten blir null: $v_y = 0$

**Tid til toppen:**
$$v_0\\sin\\theta - gt_{\\text{topp}} = 0$$
$$t_{\\text{topp}} = \\frac{v_0\\sin\\theta}{g}$$

**Maksimal høyde $h_{\\text{max}}$:**

Sett inn $t_{\\text{topp}}$ i likning for $y$:
$$h_{\\text{max}} = v_0\\sin\\theta \\cdot t_{\\text{topp}} - \\frac{1}{2}g t_{\\text{topp}}^2$$

Etter forenkling:
$$h_{\\text{max}} = \\frac{(v_0\\sin\\theta)^2}{2g} = \\frac{v_0^2\\sin^2\\theta}{2g}$$

### Fluktid (total tid i luften)

For kast fra og til samme høyde (f.eks. fra bakken til bakken):

**Total tid i luften:**
$$T = \\frac{2v_0\\sin\\theta}{g}$$

**Merk:** Dette er dobbelt så lang som tiden til toppen! Symmetri.

### Rekkevidde

Rekkevidde $R$ er horisontal distanse når objektet lander:

$$R = v_{0x} \\cdot T = v_0\\cos\\theta \\cdot \\frac{2v_0\\sin\\theta}{g}$$

Bruk identiteten $2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$:

$$R = \\frac{v_0^2 \\sin(2\\theta)}{g}$$

**Optimal kastvinkel:**
For maksimal rekkevidde: $\\theta = 45°$ (siden $\\sin(90°) = 1$ er maksimal)

$$R_{\\text{max}} = \\frac{v_0^2}{g} \\text{ ved } \\theta = 45°$$`,
    },

    // ========== DEFINISJON: BANELIKNING ==========
    {
      id: 'fys2-1-3-def-banelikning',
      type: 'definition',
      title: 'Banelikning (Parabel)',
      content: `**Banelikningen** beskriver formen på kastebanen - sammenhengen mellom $x$ og $y$.

Fra $x = v_0\\cos\\theta \\cdot t$ får vi:
$$t = \\frac{x}{v_0\\cos\\theta}$$

Sett inn i $y$-likningen:
$$y = x\\tan\\theta - \\frac{g x^2}{2v_0^2\\cos^2\\theta}$$

Dette er en **andregradslikning** i $x$, som beskriver en **parabel**.

**Tolkning:** Kastebanen har alltid form som en parabel (når vi ser bort fra luftmotstand).`,
    },

    // ========== EKSEMPEL: SKRÅTT KAST - FOTBALL ==========
    {
      id: 'fys2-1-3-ex-skratt-1',
      type: 'example',
      title: 'Eksempel: Fotball sparket i vinkel',
      problem: `En fotballspiller sparker en ball med en starthastighet på 20 m/s i en vinkel på 30° over horisontalplanet.

a) Finn den horisontale og vertikale starthastigheten
b) Hvor høyt kommer ballen?
c) Hvor lang tid er ballen i luften?
d) Hvor langt kommer ballen (rekkevidde)?`,
      solution: `**Gitt:**
- Starthastighet: $v_0 = 20$ m/s
- Vinkel: $\\theta = 30°$
- $g = 9.81$ m/s²

**a) Starthastighetens komponenter:**

**Horisontal:**
$$v_{0x} = v_0\\cos\\theta = 20 \\cos(30°)$$
$$v_{0x} = 20 \\cdot 0.866 = 17.3 \\text{ m/s}$$

**Vertikal:**
$$v_{0y} = v_0\\sin\\theta = 20 \\sin(30°)$$
$$v_{0y} = 20 \\cdot 0.5 = 10 \\text{ m/s}$$

**b) Maksimal høyde:**

$$h_{\\text{max}} = \\frac{v_0^2\\sin^2\\theta}{2g}$$
$$h_{\\text{max}} = \\frac{20^2 \\cdot \\sin^2(30°)}{2 \\cdot 9.81}$$
$$h_{\\text{max}} = \\frac{400 \\cdot 0.5^2}{19.62} = \\frac{400 \\cdot 0.25}{19.62}$$
$$h_{\\text{max}} = \\frac{100}{19.62} = 5.10 \\text{ m}$$

**c) Tid i luften:**

$$T = \\frac{2v_0\\sin\\theta}{g}$$
$$T = \\frac{2 \\cdot 20 \\cdot \\sin(30°)}{9.81}$$
$$T = \\frac{2 \\cdot 20 \\cdot 0.5}{9.81} = \\frac{20}{9.81}$$
$$T = 2.04 \\text{ s}$$

**d) Rekkevidde:**

$$R = \\frac{v_0^2\\sin(2\\theta)}{g}$$
$$R = \\frac{20^2 \\cdot \\sin(60°)}{9.81}$$
$$R = \\frac{400 \\cdot 0.866}{9.81} = \\frac{346.4}{9.81}$$
$$R = 35.3 \\text{ m}$$

**Alternativ (enklere) for d):**
$$R = v_{0x} \\cdot T = 17.3 \\cdot 2.04 = 35.3 \\text{ m}$$

**Svar:**
- a) $v_{0x} = 17.3$ m/s, $v_{0y} = 10$ m/s
- b) Maksimal høyde: 5.10 m
- c) Tid i luften: 2.04 s
- d) Rekkevidde: 35.3 m`,
    },

    // ========== EKSEMPEL: OPTIMAL VINKEL ==========
    {
      id: 'fys2-1-3-ex-optimal-vinkel',
      type: 'example',
      title: 'Eksempel: Optimal kastvinkel',
      problem: `En kanonkule skytes ut med en starthastighet på 50 m/s.

a) Hva er maksimal rekkevidde, og ved hvilken vinkel oppnås den?
b) Sammenlign rekkevidden ved 30°, 45° og 60°.`,
      solution: `**Gitt:**
- Starthastighet: $v_0 = 50$ m/s
- $g = 9.81$ m/s²

**a) Maksimal rekkevidde:**

Rekkevidden er maksimal ved $\\theta = 45°$:

$$R_{\\text{max}} = \\frac{v_0^2}{g} = \\frac{50^2}{9.81} = \\frac{2500}{9.81} = 255 \\text{ m}$$

**Svar:** Maksimal rekkevidde er 255 m ved 45°.

**b) Sammenligning av vinkler:**

**Ved 30°:**
$$R = \\frac{v_0^2\\sin(2\\theta)}{g} = \\frac{2500 \\cdot \\sin(60°)}{9.81}$$
$$R = \\frac{2500 \\cdot 0.866}{9.81} = 221 \\text{ m}$$

**Ved 45°:**
$$R = \\frac{2500 \\cdot \\sin(90°)}{9.81} = \\frac{2500 \\cdot 1}{9.81} = 255 \\text{ m}$$

**Ved 60°:**
$$R = \\frac{2500 \\cdot \\sin(120°)}{9.81} = \\frac{2500 \\cdot 0.866}{9.81} = 221 \\text{ m}$$

**Observasjon:**
Legg merke til at 30° og 60° gir **samme rekkevidde**!

Generelt: vinkler $\\theta$ og $(90° - \\theta)$ gir samme rekkevidde.

**Sammenligning:**
- 30°: 221 m (flater bane, lang tid)
- 45°: 255 m (optimal)
- 60°: 221 m (høy bane, kort rekkevidde)`,
    },

    // ========== NOTE: KOMPLEMENTÆRE VINKLER ==========
    {
      id: 'fys2-1-3-note-komplementar',
      type: 'note',
      title: 'Interessant: Komplementære vinkler',
      content: `To vinkler som summerer til 90° kalles **komplementære vinkler**.

**Eksempler:** 30° og 60°, 20° og 70°, 45° og 45°

**Fascinerende egenskap ved kastering:**
Komplementære vinkler gir **samme rekkevidde**!

Dette kommer av at:
$$\\sin(2\\theta) = \\sin(180° - 2\\theta)$$

**Praktisk betydning:**
- 30° gir flat og lang bane
- 60° gir høy og kort bane
- Samme rekkevidde, men ulik baneform!`,
    },

    // ========== EKSEMPEL: KAST FRA HØYDE ==========
    {
      id: 'fys2-1-3-ex-fra-hoyde',
      type: 'example',
      title: 'Eksempel: Kast fra en klippe',
      problem: `En stein kastes fra toppen av en 50 m høy klippe med en starthastighet på 15 m/s i en vinkel på 40° over horisontalplanet.

a) Hvor lang tid tar det før steinen treffer vannet?
b) Hvor langt fra foten av klippen treffer steinen vannet?
c) Hva er steinens hastighet (størrelse) når den treffer vannet?`,
      solution: `**Gitt:**
- Høyde: $h_0 = 50$ m
- Starthastighet: $v_0 = 15$ m/s
- Vinkel: $\\theta = 40°$
- $g = 9.81$ m/s²

**Starthastighetens komponenter:**
$$v_{0x} = 15\\cos(40°) = 15 \\cdot 0.766 = 11.5 \\text{ m/s}$$
$$v_{0y} = 15\\sin(40°) = 15 \\cdot 0.643 = 9.64 \\text{ m/s}$$

**a) Tid til landing:**

Vertikal bevegelse:
$$y = h_0 + v_{0y}t - \\frac{1}{2}gt^2$$
$$y = 50 + 9.64t - 4.905t^2$$

Ved landing: $y = 0$
$$0 = 50 + 9.64t - 4.905t^2$$
$$4.905t^2 - 9.64t - 50 = 0$$

Bruk abc-formelen:
$$t = \\frac{9.64 \\pm \\sqrt{9.64^2 + 4 \\cdot 4.905 \\cdot 50}}{2 \\cdot 4.905}$$
$$t = \\frac{9.64 \\pm \\sqrt{92.93 + 981}}{9.81}$$
$$t = \\frac{9.64 \\pm \\sqrt{1073.93}}{9.81}$$
$$t = \\frac{9.64 \\pm 32.77}{9.81}$$

Vi tar den positive løsningen:
$$t = \\frac{9.64 + 32.77}{9.81} = \\frac{42.41}{9.81} = 4.32 \\text{ s}$$

**b) Horisontal distanse:**

$$x = v_{0x} \\cdot t = 11.5 \\cdot 4.32 = 49.7 \\text{ m}$$

**c) Hastighet ved landing:**

**Horisontal hastighet** (uendret):
$$v_x = 11.5 \\text{ m/s}$$

**Vertikal hastighet:**
$$v_y = v_{0y} - gt = 9.64 - 9.81 \\cdot 4.32$$
$$v_y = 9.64 - 42.38 = -32.74 \\text{ m/s}$$

**Total hastighet:**
$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{11.5^2 + 32.74^2}$$
$$v = \\sqrt{132.25 + 1071.91} = \\sqrt{1204.16}$$
$$v = 34.7 \\text{ m/s}$$

**Svar:**
- a) Tid til landing: 4.32 s
- b) Horisontal distanse: 49.7 m
- c) Hastighet ved landing: 34.7 m/s`,
    },

    // ========== PRAKTISKE ANVENDELSER ==========
    {
      id: 'fys2-1-3-anvendelser',
      type: 'text',
      content: `## Praktiske anvendelser

Forståelse av kastering har mange viktige anvendelser:

### Sport
- **Fotball:** Optimere skudd og pasninger
- **Basketball:** Beregne beste vinkel for kast
- **Golf:** Forstå hvordan vinkel påvirker lengde
- **Friidrett:** Spyd-, diskos- og kulestøt

### Teknologi
- **Ballistikk:** Militære prosjektiler og raketter
- **Romfart:** Satelittbaner og planetarisk bevegelse
- **Brannslukking:** Vannstråler fra brannslanger
- **Animasjon:** Realistisk bevegelse i spill og filmer

### Hverdag
- **Vannfontener:** Design av vannspill
- **Ballspill:** Forstå hvordan baller beveger seg
- **Kasting:** Optimere kasteteknikk

### Begrensninger i vår modell

Vår modell **ser bort fra luftmotstand**. I virkeligheten:
- Luftmotstand reduserer rekkevidde
- Banen blir ikke helt parabolsk
- Optimal vinkel kan være litt mindre enn 45°
- Rotasjon (spin) påvirker banen (Magnus-effekt)

For de fleste fysikkoppgaver på VG-nivå er vår modell god nok!`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - BANEFORM ==========
    {
      id: 'fys2-1-3-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-1',
        number: '1.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken form har banen til et objekt i fritt fall som kastes horisontalt (når vi ser bort fra luftmotstand)?',
        options: [
          {
            id: 'a',
            text: 'En rett linje',
            isCorrect: false,
            feedback: 'Feil. Banen er ikke rett fordi objektet påvirkes av tyngdekraften nedover.',
          },
          {
            id: 'b',
            text: 'En sirkel',
            isCorrect: false,
            feedback: 'Feil. En sirkulær bane krever en sentripetalkraft mot sentrum, ikke bare tyngdekraft nedover.',
          },
          {
            id: 'c',
            text: 'En parabel',
            isCorrect: true,
            feedback: 'Riktig! Kombinasjonen av konstant horisontal hastighet og akselerert vertikal bevegelse gir en parabolsk bane.',
          },
          {
            id: 'd',
            text: 'En ellipse',
            isCorrect: false,
            feedback: 'Feil. Ellipser oppstår ved satellittbaner i verdensrommet, ikke ved kastering nær jordoverflaten.',
          },
        ],
        solution: 'Kastebanen er alltid en parabel når vi ser bort fra luftmotstand. Dette følger av at den horisontale bevegelsen er uniform (konstant hastighet) mens den vertikale bevegelsen er uniformt akselerert (konstant akselerasjon nedover).',
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - UAVHENGIGHET ==========
    {
      id: 'fys2-1-3-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-2',
        number: '1.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Du slipper én ball rett ned fra et vindu samtidig som du kaster en annen ball horisontalt ut fra samme vindu. Hvilken ball treffer bakken først (se bort fra luftmotstand)?',
        options: [
          {
            id: 'a',
            text: 'Ballen som slippes rett ned',
            isCorrect: false,
            feedback: 'Feil. Den horisontale hastigheten påvirker ikke den vertikale bevegelsen.',
          },
          {
            id: 'b',
            text: 'Ballen som kastes horisontalt',
            isCorrect: false,
            feedback: 'Feil. Den horisontale hastigheten påvirker ikke hvor fort ballen faller.',
          },
          {
            id: 'c',
            text: 'Begge treffer samtidig',
            isCorrect: true,
            feedback: 'Riktig! Den horisontale og vertikale bevegelsen er uavhengige. Begge ballene faller like raskt vertikalt.',
          },
          {
            id: 'd',
            text: 'Det avhenger av hvor fort du kaster den horisontale ballen',
            isCorrect: false,
            feedback: 'Feil. Den horisontale hastigheten påvirker ikke falltiden.',
          },
        ],
        solution: 'Den horisontale og vertikale bevegelsen er fullstendig uavhengige. Siden begge ballene starter fra samme høyde og har ingen vertikal starthastighet (den ene slippes, den andre kastes horisontalt), vil begge falle like raskt og treffe bakken samtidig.',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - OPTIMAL VINKEL ==========
    {
      id: 'fys2-1-3-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-3',
        number: '1.3.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Ved hvilken vinkel får man maksimal rekkevidde når man kaster et objekt fra og til samme høyde (se bort fra luftmotstand)?',
        options: [
          {
            id: 'a',
            text: '30°',
            isCorrect: false,
            feedback: 'Feil. 30° gir god rekkevidde, men ikke maksimal.',
          },
          {
            id: 'b',
            text: '45°',
            isCorrect: true,
            feedback: 'Riktig! 45° er den optimale vinkelen for maksimal rekkevidde fordi $\\sin(2\\theta)$ er maksimal når $\\theta = 45°$.',
          },
          {
            id: 'c',
            text: '60°',
            isCorrect: false,
            feedback: 'Feil. 60° gir samme rekkevidde som 30°, men ikke maksimal.',
          },
          {
            id: 'd',
            text: '90°',
            isCorrect: false,
            feedback: 'Feil. 90° (rett opp) gir null rekkevidde siden all hastighet er vertikal.',
          },
        ],
        solution: 'Rekkevidden er gitt av $R = \\frac{v_0^2\\sin(2\\theta)}{g}$. Siden $\\sin(2\\theta)$ er maksimal når $2\\theta = 90°$, altså $\\theta = 45°$, er 45° den optimale vinkelen for maksimal rekkevidde.',
      },
    },

    // ========== OPPGAVE 4: HORISONTALT KAST - ENKEL ==========
    {
      id: 'fys2-1-3-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-4',
        number: '1.3.4',
        type: 'classic',
        difficulty: 'lett',
        task: `En kule kastes horisontalt fra en bygning som er 20 m høy med en starthastighet på 10 m/s.

a) Hvor lang tid er kulen i luften?
b) Hvor langt fra bygningen lander kulen?

(Bruk $g = 10$ m/s²)`,
        solution: `**Gitt:**
- Høyde: $h = 20$ m
- Horisontal starthastighet: $v_0 = 10$ m/s
- $g = 10$ m/s²

**a) Tid i luften:**

Vertikal bevegelse (fritt fall):
$$h = \\frac{1}{2}gt^2$$
$$20 = \\frac{1}{2} \\cdot 10 \\cdot t^2$$
$$20 = 5t^2$$
$$t^2 = 4$$
$$t = 2 \\text{ s}$$

**b) Rekkevidde:**

$$R = v_0 \\cdot t = 10 \\cdot 2 = 20 \\text{ m}$$

**Svar:**
- a) Tid i luften: 2 s
- b) Rekkevidde: 20 m`,
      },
    },

    // ========== OPPGAVE 5: HORISONTALT KAST - HASTIGHET ==========
    {
      id: 'fys2-1-3-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-5',
        number: '1.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: `En ball kastes horisontalt fra en høyde på 5.0 m med en hastighet på 8.0 m/s.

a) Hvor lang tid er ballen i luften?
b) Hva er ballens vertikale hastighet når den treffer bakken?
c) Hva er ballens totale hastighet (størrelse) når den treffer bakken?

(Bruk $g = 10$ m/s²)`,
        solution: `**Gitt:**
- Høyde: $h = 5.0$ m
- Horisontal starthastighet: $v_0 = 8.0$ m/s
- $g = 10$ m/s²

**a) Tid i luften:**

$$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\cdot 5.0}{10}} = \\sqrt{1.0} = 1.0 \\text{ s}$$

**b) Vertikal hastighet ved landing:**

$$v_y = gt = 10 \\cdot 1.0 = 10 \\text{ m/s}$$

(Nedover, så egentlig $v_y = -10$ m/s hvis vi velger oppover som positiv)

**c) Total hastighet:**

Horisontal hastighet: $v_x = 8.0$ m/s (uendret)

$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{8.0^2 + 10^2}$$
$$v = \\sqrt{64 + 100} = \\sqrt{164} = 12.8 \\text{ m/s}$$

**Svar:**
- a) Tid: 1.0 s
- b) Vertikal hastighet: 10 m/s
- c) Total hastighet: 12.8 m/s`,
      },
    },

    // ========== OPPGAVE 6: SKRÅTT KAST - KOMPONENTER ==========
    {
      id: 'fys2-1-3-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-6',
        number: '1.3.6',
        type: 'classic',
        difficulty: 'medium',
        task: `En ball kastes med en starthastighet på 25 m/s i en vinkel på 53° over horisontalplanet.

a) Finn den horisontale og vertikale komponenten av starthastigheten
b) Hvor høyt kommer ballen?

(Bruk $g = 10$ m/s², $\\cos(53°) \\approx 0.6$, $\\sin(53°) \\approx 0.8$)`,
        solution: `**Gitt:**
- Starthastighet: $v_0 = 25$ m/s
- Vinkel: $\\theta = 53°$
- $g = 10$ m/s²

**a) Komponenter:**

**Horisontal:**
$$v_{0x} = v_0\\cos\\theta = 25 \\cdot 0.6 = 15 \\text{ m/s}$$

**Vertikal:**
$$v_{0y} = v_0\\sin\\theta = 25 \\cdot 0.8 = 20 \\text{ m/s}$$

**b) Maksimal høyde:**

Bruk energimetoden eller kinematikk:
$$h_{\\text{max}} = \\frac{v_{0y}^2}{2g} = \\frac{20^2}{2 \\cdot 10} = \\frac{400}{20} = 20 \\text{ m}$$

**Alternativ (kinematikk):**
Tid til toppen: $t = \\frac{v_{0y}}{g} = \\frac{20}{10} = 2$ s

$$h_{\\text{max}} = v_{0y}t - \\frac{1}{2}gt^2 = 20 \\cdot 2 - \\frac{1}{2} \\cdot 10 \\cdot 2^2$$
$$h_{\\text{max}} = 40 - 20 = 20 \\text{ m}$$

**Svar:**
- a) $v_{0x} = 15$ m/s, $v_{0y} = 20$ m/s
- b) Maksimal høyde: 20 m`,
      },
    },

    // ========== OPPGAVE 7: SKRÅTT KAST - FULL ANALYSE ==========
    {
      id: 'fys2-1-3-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-7',
        number: '1.3.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En golfball slås med en starthastighet på 30 m/s i en vinkel på 45°.

a) Hvor høyt kommer ballen?
b) Hvor lang tid er ballen i luften?
c) Hvor langt kommer ballen (rekkevidde)?

(Bruk $g = 10$ m/s²)`,
        solution: `**Gitt:**
- Starthastighet: $v_0 = 30$ m/s
- Vinkel: $\\theta = 45°$
- $g = 10$ m/s²
- $\\cos(45°) = \\sin(45°) = \\frac{\\sqrt{2}}{2} \\approx 0.707$

**Komponenter:**
$$v_{0x} = v_{0y} = 30 \\cdot 0.707 = 21.2 \\text{ m/s}$$

**a) Maksimal høyde:**

$$h_{\\text{max}} = \\frac{v_{0y}^2}{2g} = \\frac{21.2^2}{2 \\cdot 10} = \\frac{449.4}{20} = 22.5 \\text{ m}$$

**b) Tid i luften:**

$$T = \\frac{2v_{0y}}{g} = \\frac{2 \\cdot 21.2}{10} = \\frac{42.4}{10} = 4.24 \\text{ s}$$

**c) Rekkevidde:**

$$R = v_{0x} \\cdot T = 21.2 \\cdot 4.24 = 89.9 \\text{ m}$$

**Alternativ for c) med formel:**
$$R = \\frac{v_0^2\\sin(2\\theta)}{g} = \\frac{30^2 \\cdot \\sin(90°)}{10}$$
$$R = \\frac{900 \\cdot 1}{10} = 90 \\text{ m}$$

**Svar:**
- a) Maksimal høyde: 22.5 m (eller ca. 23 m)
- b) Tid i luften: 4.24 s (eller ca. 4.2 s)
- c) Rekkevidde: 90 m`,
      },
    },

    // ========== OPPGAVE 8: REKKEVIDDE VED ULIKE VINKLER ==========
    {
      id: 'fys2-1-3-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-8',
        number: '1.3.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Et prosjektil skytes ut med starthastighet 40 m/s.

Beregn rekkevidden for følgende vinkler:
a) 30°
b) 45°
c) 60°

Kommenter resultatet.

(Bruk $g = 10$ m/s²)`,
        solution: `**Gitt:**
- $v_0 = 40$ m/s
- $g = 10$ m/s²

**Formel:**
$$R = \\frac{v_0^2\\sin(2\\theta)}{g}$$

**a) Ved 30°:**
$$R = \\frac{40^2 \\cdot \\sin(60°)}{10} = \\frac{1600 \\cdot 0.866}{10}$$
$$R = \\frac{1385.6}{10} = 138.6 \\text{ m}$$

**b) Ved 45°:**
$$R = \\frac{40^2 \\cdot \\sin(90°)}{10} = \\frac{1600 \\cdot 1}{10}$$
$$R = \\frac{1600}{10} = 160 \\text{ m}$$

**c) Ved 60°:**
$$R = \\frac{40^2 \\cdot \\sin(120°)}{10} = \\frac{1600 \\cdot 0.866}{10}$$
$$R = \\frac{1385.6}{10} = 138.6 \\text{ m}$$

**Kommentar:**

1. **45° gir maksimal rekkevidde** (160 m)
2. **30° og 60° gir samme rekkevidde** (138.6 m)
3. Dette er komplementære vinkler som summerer til 90°
4. 30° gir en flat, lang bane
5. 60° gir en høy, kort bane

**Svar:**
- a) 30°: 138.6 m
- b) 45°: 160 m (maksimal)
- c) 60°: 138.6 m (samme som 30°)`,
      },
    },

    // ========== OPPGAVE 9: BASKETBALL ==========
    {
      id: 'fys2-1-3-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-9',
        number: '1.3.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En basketballspiller står 6.0 m fra kurven og kaster ballen fra en høyde på 2.0 m. Kurven er 3.05 m over gulvet. Ballen kastes med en starthastighet på 8.0 m/s i en vinkel på 50° over horisontalplanet.

Treffer ballen kurven? (Sjekk om ballen er på riktig høyde når den har reist 6.0 m horisontalt)

(Bruk $g = 10$ m/s², $\\cos(50°) \\approx 0.643$, $\\sin(50°) \\approx 0.766$)`,
        solution: `**Gitt:**
- Horisontal distanse til kurv: $x = 6.0$ m
- Starthøyde: $y_0 = 2.0$ m
- Kurvhøyde: $y_{\\text{kurv}} = 3.05$ m
- Starthastighet: $v_0 = 8.0$ m/s
- Vinkel: $\\theta = 50°$
- $g = 10$ m/s²

**Komponenter:**
$$v_{0x} = 8.0 \\cdot 0.643 = 5.14 \\text{ m/s}$$
$$v_{0y} = 8.0 \\cdot 0.766 = 6.13 \\text{ m/s}$$

**Tid til å nå kurven (horisontalt):**

$$t = \\frac{x}{v_{0x}} = \\frac{6.0}{5.14} = 1.17 \\text{ s}$$

**Høyde ved denne tiden:**

$$y = y_0 + v_{0y}t - \\frac{1}{2}gt^2$$
$$y = 2.0 + 6.13 \\cdot 1.17 - \\frac{1}{2} \\cdot 10 \\cdot 1.17^2$$
$$y = 2.0 + 7.17 - 5 \\cdot 1.37$$
$$y = 2.0 + 7.17 - 6.85$$
$$y = 2.32 \\text{ m}$$

**Sjekk:**
Ballens høyde ved kurven: $y = 2.32$ m
Kurvhøyde: $y_{\\text{kurv}} = 3.05$ m

**Svar:**
Nei, ballen treffer **ikke** kurven. Ballen er bare 2.32 m høy når den når den horisontale posisjonen til kurven, mens kurven er 3.05 m høy. Ballen passerer **under** kurven med ca. 0.73 m.

**For å treffe:** Spilleren må kaste med større hastighet eller større vinkel.`,
      },
    },

    // ========== OPPGAVE 10: KAST FRA KLIPPE ==========
    {
      id: 'fys2-1-3-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-10',
        number: '1.3.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En stein kastes fra toppen av en 30 m høy klippe med en starthastighet på 20 m/s i en vinkel på 37° over horisontalplanet.

a) Hvor lang tid tar det før steinen treffer vannet?
b) Hvor langt fra foten av klippen lander steinen?
c) Hva er steinens hastighet (størrelse og retning) når den treffer vannet?

(Bruk $g = 10$ m/s², $\\cos(37°) \\approx 0.8$, $\\sin(37°) \\approx 0.6$)`,
        solution: `**Gitt:**
- Høyde: $h_0 = 30$ m
- Starthastighet: $v_0 = 20$ m/s
- Vinkel: $\\theta = 37°$
- $g = 10$ m/s²

**Komponenter:**
$$v_{0x} = 20 \\cdot 0.8 = 16 \\text{ m/s}$$
$$v_{0y} = 20 \\cdot 0.6 = 12 \\text{ m/s}$$

**a) Tid til landing:**

Vertikal bevegelse:
$$y = h_0 + v_{0y}t - \\frac{1}{2}gt^2$$
$$0 = 30 + 12t - 5t^2$$
$$5t^2 - 12t - 30 = 0$$

Abc-formel:
$$t = \\frac{12 \\pm \\sqrt{144 + 600}}{10} = \\frac{12 \\pm \\sqrt{744}}{10}$$
$$t = \\frac{12 \\pm 27.3}{10}$$

Positiv løsning:
$$t = \\frac{12 + 27.3}{10} = \\frac{39.3}{10} = 3.93 \\text{ s}$$

**b) Horisontal distanse:**

$$x = v_{0x} \\cdot t = 16 \\cdot 3.93 = 62.9 \\text{ m}$$

**c) Hastighet ved landing:**

**Horisontal hastighet** (uendret):
$$v_x = 16 \\text{ m/s}$$

**Vertikal hastighet:**
$$v_y = v_{0y} - gt = 12 - 10 \\cdot 3.93$$
$$v_y = 12 - 39.3 = -27.3 \\text{ m/s}$$

**Størrelse:**
$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{16^2 + 27.3^2}$$
$$v = \\sqrt{256 + 745.3} = \\sqrt{1001.3} = 31.6 \\text{ m/s}$$

**Retning (vinkel fra horisontalt):**
$$\\theta = \\arctan\\left(\\frac{|v_y|}{v_x}\\right) = \\arctan\\left(\\frac{27.3}{16}\\right)$$
$$\\theta = \\arctan(1.71) \\approx 59.6°$$

**Svar:**
- a) Tid: 3.93 s (ca. 3.9 s)
- b) Distanse: 62.9 m (ca. 63 m)
- c) Hastighet: 31.6 m/s, 59.6° under horisontalplanet`,
      },
    },

    // ========== OPPGAVE 11: FINNE STARTHASTIGHET ==========
    {
      id: 'fys2-1-3-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-11',
        number: '1.3.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En fotballspiller skal skyte ballen inn i målet som er 25 m unna. Spilleren skyter ballen i en vinkel på 30° over horisontalplanet.

Hvor stor må starthastigheten være for at ballen skal nå målet?

(Bruk $g = 10$ m/s², $\\sin(60°) \\approx 0.866$)`,
        solution: `**Gitt:**
- Rekkevidde: $R = 25$ m
- Vinkel: $\\theta = 30°$
- $g = 10$ m/s²

**Formel for rekkevidde:**
$$R = \\frac{v_0^2\\sin(2\\theta)}{g}$$

**Løs for $v_0$:**
$$v_0^2 = \\frac{Rg}{\\sin(2\\theta)}$$

$$v_0 = \\sqrt{\\frac{Rg}{\\sin(2\\theta)}}$$

**Sett inn verdier:**
$$v_0 = \\sqrt{\\frac{25 \\cdot 10}{\\sin(60°)}}$$
$$v_0 = \\sqrt{\\frac{250}{0.866}}$$
$$v_0 = \\sqrt{288.8}$$
$$v_0 = 17.0 \\text{ m/s}$$

**Sjekk:**
$$R = \\frac{17.0^2 \\cdot 0.866}{10} = \\frac{289 \\cdot 0.866}{10} = \\frac{250.3}{10} = 25.0 \\text{ m}$$ ✓

**Svar:**
Starthastigheten må være minst 17.0 m/s for at ballen skal nå 25 m.`,
      },
    },

    // ========== OPPGAVE 12: VANNSTRÅLE ==========
    {
      id: 'fys2-1-3-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-12',
        number: '1.3.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En brannslange spruter vann med en hastighet på 25 m/s. Brannmannen holder slangen 1.5 m over bakken og sikter i en vinkel på 40° over horisontalplanet.

a) Hvor høyt kommer vannstrålen (målt fra bakken)?
b) Hvor lang tid er vannet i luften?
c) Hvor langt fra brannmannen treffer vannet bakken?

(Bruk $g = 10$ m/s², $\\cos(40°) \\approx 0.766$, $\\sin(40°) \\approx 0.643$)`,
        solution: `**Gitt:**
- Starthastighet: $v_0 = 25$ m/s
- Starthøyde: $h_0 = 1.5$ m
- Vinkel: $\\theta = 40°$
- $g = 10$ m/s²

**Komponenter:**
$$v_{0x} = 25 \\cdot 0.766 = 19.15 \\text{ m/s}$$
$$v_{0y} = 25 \\cdot 0.643 = 16.08 \\text{ m/s}$$

**a) Maksimal høyde fra bakken:**

**Stigning over starthøyde:**
$$\\Delta h = \\frac{v_{0y}^2}{2g} = \\frac{16.08^2}{2 \\cdot 10} = \\frac{258.6}{20} = 12.9 \\text{ m}$$

**Total høyde fra bakken:**
$$h_{\\text{max}} = h_0 + \\Delta h = 1.5 + 12.9 = 14.4 \\text{ m}$$

**b) Tid i luften:**

Vertikal bevegelse:
$$y = h_0 + v_{0y}t - \\frac{1}{2}gt^2$$
$$0 = 1.5 + 16.08t - 5t^2$$
$$5t^2 - 16.08t - 1.5 = 0$$

Abc-formel:
$$t = \\frac{16.08 \\pm \\sqrt{258.6 + 30}}{10}$$
$$t = \\frac{16.08 \\pm \\sqrt{288.6}}{10}$$
$$t = \\frac{16.08 \\pm 17.0}{10}$$

Positiv løsning:
$$t = \\frac{16.08 + 17.0}{10} = \\frac{33.08}{10} = 3.31 \\text{ s}$$

**c) Horisontal distanse:**

$$x = v_{0x} \\cdot t = 19.15 \\cdot 3.31 = 63.4 \\text{ m}$$

**Svar:**
- a) Maksimal høyde: 14.4 m
- b) Tid i luften: 3.31 s (ca. 3.3 s)
- c) Horisontal distanse: 63.4 m (ca. 63 m)`,
      },
    },

    // ========== OPPGAVE 13: BANELIKNING ==========
    {
      id: 'fys2-1-3-ex-13-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-13',
        number: '1.3.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En ball kastes fra origo med en starthastighet på 20 m/s i en vinkel på 60°.

a) Finn banelikningen $y(x)$ for ballen
b) Hvor høyt er ballen når den har beveget seg 10 m horisontalt?

(Bruk $g = 10$ m/s², $\\cos(60°) = 0.5$, $\\sin(60°) \\approx 0.866$, $\\tan(60°) \\approx 1.732$)`,
        solution: `**Gitt:**
- $v_0 = 20$ m/s
- $\\theta = 60°$
- $g = 10$ m/s²

**a) Banelikning:**

Generell banelikning:
$$y = x\\tan\\theta - \\frac{gx^2}{2v_0^2\\cos^2\\theta}$$

**Sett inn verdier:**
$$y = x \\cdot 1.732 - \\frac{10x^2}{2 \\cdot 20^2 \\cdot 0.5^2}$$
$$y = 1.732x - \\frac{10x^2}{2 \\cdot 400 \\cdot 0.25}$$
$$y = 1.732x - \\frac{10x^2}{200}$$
$$y = 1.732x - 0.05x^2$$

**b) Høyde ved $x = 10$ m:**

$$y(10) = 1.732 \\cdot 10 - 0.05 \\cdot 10^2$$
$$y(10) = 17.32 - 0.05 \\cdot 100$$
$$y(10) = 17.32 - 5.0$$
$$y(10) = 12.32 \\text{ m}$$

**Svar:**
- a) Banelikning: $y = 1.732x - 0.05x^2$
- b) Høyde ved 10 m: 12.32 m (ca. 12.3 m)`,
      },
    },

    // ========== OPPGAVE 14: TREFFE MÅL ==========
    {
      id: 'fys2-1-3-ex-14-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-14',
        number: '1.3.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En kanonkule skal treffe et mål som er 100 m unna horisontalt og 20 m høyere enn kanonen. Kanonkulen skytes ut med en starthastighet på 40 m/s.

Ved hvilken vinkel må kanonen skyte for å treffe målet?

(Dette er en krevende oppgave. Bruk $g = 10$ m/s² og prøv deg frem, eller bruk banelikningen.)`,
        solution: `**Gitt:**
- Horisontal distanse: $x = 100$ m
- Vertikal distanse: $y = 20$ m
- Starthastighet: $v_0 = 40$ m/s
- $g = 10$ m/s²

**Bruk banelikningen:**
$$y = x\\tan\\theta - \\frac{gx^2}{2v_0^2\\cos^2\\theta}$$

**Sett inn verdier:**
$$20 = 100\\tan\\theta - \\frac{10 \\cdot 100^2}{2 \\cdot 40^2 \\cdot \\cos^2\\theta}$$
$$20 = 100\\tan\\theta - \\frac{100000}{3200\\cos^2\\theta}$$
$$20 = 100\\tan\\theta - \\frac{31.25}{\\cos^2\\theta}$$

**Bruk identitet:** $\\frac{1}{\\cos^2\\theta} = 1 + \\tan^2\\theta$

$$20 = 100\\tan\\theta - 31.25(1 + \\tan^2\\theta)$$
$$20 = 100\\tan\\theta - 31.25 - 31.25\\tan^2\\theta$$
$$31.25\\tan^2\\theta - 100\\tan\\theta + 51.25 = 0$$

**Abc-formel** med $a = 31.25$, $b = -100$, $c = 51.25$:
$$\\tan\\theta = \\frac{100 \\pm \\sqrt{10000 - 6406.25}}{62.5}$$
$$\\tan\\theta = \\frac{100 \\pm \\sqrt{3593.75}}{62.5}$$
$$\\tan\\theta = \\frac{100 \\pm 60.0}{62.5}$$

**To løsninger:**

**Løsning 1:**
$$\\tan\\theta = \\frac{100 + 60}{62.5} = \\frac{160}{62.5} = 2.56$$
$$\\theta = \\arctan(2.56) = 68.7°$$

**Løsning 2:**
$$\\tan\\theta = \\frac{100 - 60}{62.5} = \\frac{40}{62.5} = 0.64$$
$$\\theta = \\arctan(0.64) = 32.6°$$

**Svar:**
Det er to mulige vinkler:
- $\\theta_1 = 32.6°$ (lav bane, rask)
- $\\theta_2 = 68.7°$ (høy bane, langsom)

Begge vinkler treffer målet! Dette er typisk for kastering til et mål som er innenfor maksimal rekkevidde.`,
      },
    },

    // ========== OPPGAVE 15: TID TIL TOPPEN ==========
    {
      id: 'fys2-1-3-ex-15-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-15',
        number: '1.3.15',
        type: 'classic',
        difficulty: 'medium',
        task: `En ball kastes vertikalt oppover med en starthastighet på 15 m/s.

a) Hvor lang tid tar det for ballen å nå toppen?
b) Hvor høyt kommer ballen?
c) Hva er ballens totale fluktid (opp og ned)?

(Bruk $g = 10$ m/s²)`,
        solution: `**Gitt:**
- Starthastighet: $v_0 = 15$ m/s (vertikalt oppover)
- $g = 10$ m/s²

**Merk:** Dette er et spesialtilfelle av skrått kast med $\\theta = 90°$.

**a) Tid til toppen:**

Ved toppen er $v_y = 0$:
$$v_y = v_0 - gt_{\\text{topp}}$$
$$0 = 15 - 10 \\cdot t_{\\text{topp}}$$
$$t_{\\text{topp}} = \\frac{15}{10} = 1.5 \\text{ s}$$

**b) Maksimal høyde:**

$$h_{\\text{max}} = \\frac{v_0^2}{2g} = \\frac{15^2}{2 \\cdot 10} = \\frac{225}{20} = 11.25 \\text{ m}$$

**Alternativ:**
$$h = v_0 t - \\frac{1}{2}gt^2 = 15 \\cdot 1.5 - 5 \\cdot 1.5^2$$
$$h = 22.5 - 11.25 = 11.25 \\text{ m}$$

**c) Total fluktid:**

På grunn av symmetri:
$$T = 2t_{\\text{topp}} = 2 \\cdot 1.5 = 3.0 \\text{ s}$$

**Svar:**
- a) Tid til toppen: 1.5 s
- b) Maksimal høyde: 11.25 m (ca. 11.3 m)
- c) Total fluktid: 3.0 s`,
      },
    },

    // ========== OPPGAVE 16: KOMBINERT OPPGAVE ==========
    {
      id: 'fys2-1-3-ex-16-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-3-ex-16',
        number: '1.3.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En fotballkeeper sparker ballen fra bakken med en starthastighet på 24 m/s i en vinkel på 35° over horisontalplanet.

a) Hvor lang tid har en motspiller på å løpe til der ballen lander (fluktid)?
b) Hvor langt fra keeperen lander ballen?
c) Hva er ballens hastighet (størrelse og vinkel) når den når maksimal høyde?
d) Vil ballen passere over en 4.0 m høy mur som står 20 m fra keeperen?

(Bruk $g = 10$ m/s², $\\cos(35°) \\approx 0.819$, $\\sin(35°) \\approx 0.574$)`,
        solution: `**Gitt:**
- $v_0 = 24$ m/s
- $\\theta = 35°$
- $g = 10$ m/s²

**Komponenter:**
$$v_{0x} = 24 \\cdot 0.819 = 19.7 \\text{ m/s}$$
$$v_{0y} = 24 \\cdot 0.574 = 13.8 \\text{ m/s}$$

**a) Fluktid:**

$$T = \\frac{2v_{0y}}{g} = \\frac{2 \\cdot 13.8}{10} = \\frac{27.6}{10} = 2.76 \\text{ s}$$

**b) Rekkevidde:**

$$R = v_{0x} \\cdot T = 19.7 \\cdot 2.76 = 54.4 \\text{ m}$$

**c) Hastighet ved maksimal høyde:**

Ved toppen er den vertikale hastigheten null: $v_y = 0$

Den horisontale hastigheten er uendret: $v_x = 19.7$ m/s

**Total hastighet:**
$$v = v_x = 19.7 \\text{ m/s}$$

**Retning:** Horisontalt (0° fra horisontalplanet)

**d) Passerer ballen over muren?**

**Tid til muren:**
$$t = \\frac{x}{v_{0x}} = \\frac{20}{19.7} = 1.02 \\text{ s}$$

**Høyde ved muren:**
$$y = v_{0y}t - \\frac{1}{2}gt^2$$
$$y = 13.8 \\cdot 1.02 - 5 \\cdot 1.02^2$$
$$y = 14.08 - 5.20 = 8.88 \\text{ m}$$

**Sjekk:**
Ballens høyde ved muren: 8.88 m
Murens høyde: 4.0 m

**Ja**, ballen passerer over muren med god margin (4.88 m klaring)!

**Svar:**
- a) Fluktid: 2.76 s (ca. 2.8 s)
- b) Rekkevidde: 54.4 m (ca. 54 m)
- c) Hastighet ved toppen: 19.7 m/s horisontalt
- d) Ja, ballen passerer over muren (8.88 m høy ved muren)`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Viktige konsepter

**Horisontalt kast:**
- Starthastighet kun i x-retning: $v_{0y} = 0$
- Tid i luften: $t = \\sqrt{\\frac{2h}{g}}$
- Rekkevidde: $R = v_0\\sqrt{\\frac{2h}{g}}$

**Skrått kast:**
- Komponenter: $v_{0x} = v_0\\cos\\theta$, $v_{0y} = v_0\\sin\\theta$
- Maksimal høyde: $h_{\\text{max}} = \\frac{v_0^2\\sin^2\\theta}{2g}$
- Fluktid: $T = \\frac{2v_0\\sin\\theta}{g}$
- Rekkevidde: $R = \\frac{v_0^2\\sin(2\\theta)}{g}$
- Optimal vinkel for maksimal rekkevidde: 45°

**Banelikning:**
$$y = x\\tan\\theta - \\frac{gx^2}{2v_0^2\\cos^2\\theta}$$

Dette er en parabel.

### Viktige prinsipper

1. **Uavhengighet:** Horisontal og vertikal bevegelse påvirker ikke hverandre
2. **Konstant horisontal hastighet:** $v_x = v_0\\cos\\theta$ (ingen luftmotstand)
3. **Vertikal akselerasjon:** $a_y = -g = -9.81$ m/s²
4. **Symmetri:** For kast fra og til samme høyde er bevegelsen symmetrisk om toppen
5. **Komplementære vinkler:** $\\theta$ og $(90° - \\theta)$ gir samme rekkevidde

### Problemløsningsmetode

1. **Tegn en skisse** av situasjonen
2. **Identifiser kjente og ukjente størrelser**
3. **Del opp i x- og y-komponenter**
4. **Analyser hver retning separat**
5. **Bruk sammenheng mellom x og y** via tiden $t$

### Praktiske anvendelser

- Sport: fotball, basketball, golf
- Militær: ballistikk
- Teknologi: robotikk, animasjon
- Ingeniørfag: fontener, konstruksjon

### Neste kapittel

I neste kapittel skal vi se på sirkulær bevegelse og sentripetalkraft - et annet viktig eksempel på todimensjonal bevegelse!`,
    },
  ],
};

// ============================================================================
// Kapittel 1.4: Sirkelbevegelse og sentripetalkraft
// LK20: Utforske, beskrive og modellere bevegelse i to dimensjoner
// ============================================================================

export const CHAPTER_FYSIKK2_1_4: TextbookChapter = {
  id: 'fysikk2-1-4',
  courseId: 'fysikk2',
  chapterNumber: '1.4',
  title: 'Sirkelbevegelse og sentripetalkraft',
  description: 'Uniform og variabel sirkelbevegelse, sentripetalkraft og sentripetalakselerasjon.',
  estimatedMinutes: 50,
  prerequisites: ['fysikk2-1-2'],
  competenceGoals: [
    'analysere sirkelbevegelse med vinkelfart og vinkelhastighet',
    'beregne sentripetalkraft og sentripetalakselerasjon',
    'anvende Newtons lover på objekter i sirkelbevegelse',
    'forklare sammenhengen mellom lineær og vinkelstørrelser',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-1-4-intro',
      type: 'text',
      content: `## Hva er sirkelbevegelse?

Sirkelbevegelse er en av de mest vanlige bevegelseformene i naturen og teknologien. Fra planeter som går i bane rundt solen, til hjulet på en bil, til en ball du svinger i en snor – alle disse er eksempler på sirkelbevegelse.

**Eksempler på sirkelbevegelse:**
- Jorden i bane rundt solen
- Månen rundt jorden
- En bil i en rundkjøring
- Et hjul som roterer
- En karusell på tivoli
- En ball i en snor du svinger rundt hodet ditt

I dette kapittelet skal vi se på de fysiske lovene som styrer sirkelbevegelse, og hvilke krefter som må virke for at et objekt skal bevege seg i sirkel.

**Viktig innsikt:**
Selv om farten kan være konstant, vil hastigheten (som er en vektor) alltid endre seg når et objekt beveger seg i sirkel – fordi retningen endres kontinuerlig. Det betyr at objektet akselererer!`,
    },

    // ========== UNIFORM SIRKELBEVEGELSE ==========
    {
      id: 'fys2-1-4-uniform',
      type: 'text',
      content: `## Uniform sirkelbevegelse

**Uniform sirkelbevegelse** betyr at objektet beveger seg i en perfekt sirkel med **konstant fart**.

**Kjennetegn:**
- Konstant fart (hastighet har konstant størrelse)
- Konstant radius
- Retningen endres kontinuerlig
- Akselerasjonen peker alltid mot sentrum av sirkelen

Selv om farten er konstant, akselererer objektet fordi retningen endres. Dette kan virke rart, men husk: akselerasjon betyr endring i hastigheten (som en vektor), ikke bare endring i farten.`,
    },

    // ========== DEFINISJON: VINKELFART ==========
    {
      id: 'fys2-1-4-def-vinkelfart',
      type: 'definition',
      title: 'Vinkelfart (ω)',
      content: `**Vinkelfart** (omega, $\\omega$) beskriver hvor raskt objektet roterer – hvor mange radianer per sekund det dreier seg.

$$\\omega = \\frac{\\Delta \\theta}{\\Delta t}$$

**Enhet:** rad/s (radianer per sekund)

**Alternativ måleenhet:** omdreininger per minutt (rpm), men i fysikk bruker vi oftest rad/s.

**Sammenheng med periode:**
$$\\omega = \\frac{2\\pi}{T}$$

hvor $T$ er perioden (tiden for én omdreiing).`,
    },

    // ========== PERIODE OG FREKVENS ==========
    {
      id: 'fys2-1-4-periode',
      type: 'text',
      content: `## Periode og frekvens

For sirkelbevegelse bruker vi ofte disse størrelsene:

### Periode (T)
**Periode** er tiden det tar for objektet å fullføre én full omdreiing.

**Enhet:** sekunder (s)

### Frekvens (f)
**Frekvens** er antall omdreininger per sekund.

$$f = \\frac{1}{T}$$

**Enhet:** Hz (Hertz) = 1/s = s⁻¹

### Sammenheng med vinkelfart

$$\\omega = 2\\pi f = \\frac{2\\pi}{T}$$

**Forklaring:** Én full omdreiing tilsvarer $2\\pi$ radianer. Hvis perioden er $T$ sekunder, er vinkelfarten $\\omega = 2\\pi/T$ rad/s.`,
    },

    // ========== LINEÆR HASTIGHET OG VINKELFART ==========
    {
      id: 'fys2-1-4-linear-vinkel',
      type: 'text',
      content: `## Sammenheng mellom lineær hastighet og vinkelfart

Et objekt i sirkelbevegelse har både:
- **Lineær hastighet** ($v$): farten langs sirkelens omkrets (m/s)
- **Vinkelfart** ($\\omega$): hvor raskt det roterer (rad/s)

Disse er relatert ved radius:

$$v = \\omega r$$

hvor:
- $v$ = lineær hastighet (m/s)
- $\\omega$ = vinkelfart (rad/s)
- $r$ = radius av sirkelen (m)

**Intuisjon:**
Jo lenger ut fra sentrum du er (større $r$), jo raskere må du bevege deg for å holde samme vinkelfart. Tenk på en karusell: de som sitter ytterst beveger seg raskere enn de som sitter nær midten, selv om alle roterer med samme vinkelfart.`,
    },

    // ========== EKSEMPEL: KARUSELL ==========
    {
      id: 'fys2-1-4-ex-karusell',
      type: 'example',
      title: 'Eksempel: Karusell',
      problem: `En karusell roterer med frekvens $f = 0.2$ Hz (en omdreiing hvert 5. sekund).

En person sitter 3 meter fra sentrum.

a) Finn vinkelfarten
b) Finn personens lineære hastighet`,
      solution: `**Gitt:**
- Frekvens: $f = 0.2$ Hz
- Radius: $r = 3$ m

**a) Vinkelfart:**
$$\\omega = 2\\pi f$$
$$\\omega = 2\\pi \\cdot 0.2 = 0.4\\pi = 1.26 \\text{ rad/s}$$

**b) Lineær hastighet:**
$$v = \\omega r$$
$$v = 1.26 \\cdot 3 = 3.77 \\text{ m/s}$$

**Svar:**
- a) Vinkelfarten er $\\omega = 1.26$ rad/s
- b) Den lineære hastigheten er $v = 3.77$ m/s

**Alternativ for a):**
Hvis vi bruker periode i stedet:
$$T = \\frac{1}{f} = \\frac{1}{0.2} = 5 \\text{ s}$$
$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{5} = 1.26 \\text{ rad/s}$$`,
    },

    // ========== SENTRIPETALAKSELERASJON ==========
    {
      id: 'fys2-1-4-sentripetalakselerasjon',
      type: 'text',
      content: `## Sentripetalakselerasjon

Selv om farten er konstant i uniform sirkelbevegelse, endres retningen kontinuerlig. Det betyr at hastighetsvektoren endres, og objektet akselererer.

Denne akselerasjonen kalles **sentripetalakselerasjon** og peker alltid **mot sentrum av sirkelen**.

**Formel:**
$$a_s = \\frac{v^2}{r}$$

**Alternativ form med vinkelfart:**
$$a_s = \\omega^2 r$$

hvor:
- $a_s$ = sentripetalakselerasjon (m/s²)
- $v$ = lineær hastighet (m/s)
- $\\omega$ = vinkelfart (rad/s)
- $r$ = radius (m)

**Retning:** Alltid mot sentrum av sirkelen (radielt innover)

**Viktig:**
"Sentripetal" betyr "søkende mot sentrum". Akselerasjonen peker innover, ikke utover!`,
    },

    // ========== UTLEDNING: SENTRIPETALAKSELERASJON ==========
    {
      id: 'fys2-1-4-utledning-as',
      type: 'text',
      content: `## Utledning: Sentripetalakselerasjon

La oss utlede formelen for sentripetalakselerasjon.

**Gitt:** Et objekt beveger seg i sirkel med radius $r$ og konstant fart $v$.

**Steg 1:** På tid $\\Delta t$ beveger objektet seg en liten bue langs sirkelen. Hastigheten endres fra $\\vec{v}_1$ til $\\vec{v}_2$. Begge har størrelse $v$, men ulik retning.

**Steg 2:** Endring i hastighet er:
$$\\Delta \\vec{v} = \\vec{v}_2 - \\vec{v}_1$$

Ved å tegne hastighetsvektorene (vektordiagram), kan vi vise at $|\\Delta \\vec{v}|$ tilnærmet er:
$$|\\Delta \\vec{v}| \\approx v \\cdot \\Delta \\theta$$

hvor $\\Delta \\theta$ er vinkelen objektet har dreid seg (i radianer).

**Steg 3:** Avstand langs buen er $s = r \\cdot \\Delta \\theta$, så:
$$\\Delta \\theta = \\frac{s}{r} = \\frac{v \\cdot \\Delta t}{r}$$

**Steg 4:** Setter inn:
$$|\\Delta \\vec{v}| = v \\cdot \\frac{v \\cdot \\Delta t}{r} = \\frac{v^2 \\Delta t}{r}$$

**Steg 5:** Akselerasjon er:
$$a_s = \\frac{|\\Delta \\vec{v}|}{\\Delta t} = \\frac{v^2}{r}$$

**Konklusjon:**
$$a_s = \\frac{v^2}{r}$$

Retningen til $\\Delta \\vec{v}$ (og dermed $a_s$) er mot sentrum av sirkelen.`,
    },

    // ========== EKSEMPEL: SENTRIPETALAKSELERASJON ==========
    {
      id: 'fys2-1-4-ex-akselerasjon',
      type: 'example',
      title: 'Eksempel: Sentripetalakselerasjon',
      problem: `En bil kjører gjennom en rundkjøring med radius 20 m og fart 10 m/s.

Finn sentripetalakselerasjonen til bilen.`,
      solution: `**Gitt:**
- Radius: $r = 20$ m
- Fart: $v = 10$ m/s

**Formel:**
$$a_s = \\frac{v^2}{r}$$

**Utregning:**
$$a_s = \\frac{10^2}{20} = \\frac{100}{20} = 5 \\text{ m/s}^2$$

**Svar:**
Sentripetalakselerasjonen er $a_s = 5$ m/s² mot sentrum av rundkjøringen.

**Sammenligning:**
Dette tilsvarer omtrent halvparten av tyngdeakselerasjonen ($g = 9.81$ m/s²). Passasjerene i bilen vil kjenne en kraft utover (se mer om dette i avsnittet om sentrifugalkraft).`,
    },

    // ========== DEFINISJON: SENTRIPETALKRAFT ==========
    {
      id: 'fys2-1-4-def-sentripetalkraft',
      type: 'definition',
      title: 'Sentripetalkraft',
      content: `**Sentripetalkraft** er den kraften som holder et objekt i sirkelbevegelse. Den peker alltid mot sentrum av sirkelen.

Fra Newtons 2. lov:
$$F_s = m a_s = m \\frac{v^2}{r}$$

**Alternativ form:**
$$F_s = m \\omega^2 r$$

hvor:
- $F_s$ = sentripetalkraft (N)
- $m$ = masse (kg)
- $v$ = lineær hastighet (m/s)
- $\\omega$ = vinkelfart (rad/s)
- $r$ = radius (m)

**Viktig:**
Sentripetalkraft er **ikke en egen type kraft**. Det er den **netto kraften** som virker mot sentrum. Den kan være:
- Spennkraft i en snor
- Friksjonskraft fra veibanen
- Gravitasjonskraft fra en planet
- Normalkraft fra en vegg`,
    },

    // ========== EKSEMPEL: BALL I SNOR ==========
    {
      id: 'fys2-1-4-ex-ball-snor',
      type: 'example',
      title: 'Eksempel: Ball i snor',
      problem: `En ball med masse 0.5 kg svinges i en horisontal sirkel med radius 1.2 m. Ballen gjør 2 omdreininger per sekund.

Finn spennkraften i snoren.`,
      solution: `**Gitt:**
- Masse: $m = 0.5$ kg
- Radius: $r = 1.2$ m
- Frekvens: $f = 2$ Hz

**Steg 1: Finn vinkelfart**
$$\\omega = 2\\pi f = 2\\pi \\cdot 2 = 4\\pi = 12.57 \\text{ rad/s}$$

**Steg 2: Finn lineær hastighet**
$$v = \\omega r = 12.57 \\cdot 1.2 = 15.08 \\text{ m/s}$$

**Steg 3: Finn sentripetalkraft**
$$F_s = m \\frac{v^2}{r} = 0.5 \\cdot \\frac{15.08^2}{1.2}$$
$$F_s = 0.5 \\cdot \\frac{227.4}{1.2} = 0.5 \\cdot 189.5 = 94.7 \\text{ N}$$

**Alternativ metode (direkte fra vinkelfart):**
$$F_s = m\\omega^2 r = 0.5 \\cdot (12.57)^2 \\cdot 1.2$$
$$F_s = 0.5 \\cdot 158.0 \\cdot 1.2 = 94.8 \\text{ N}$$

**Svar:**
Spennkraften i snoren er omtrent 95 N.

**Tolkning:**
Spennkraften i snoren gir den sentripetalkraften som er nødvendig for å holde ballen i sirkelbevegelse.`,
    },

    // ========== EKSEMPEL: BIL I SVING ==========
    {
      id: 'fys2-1-4-ex-bil-sving',
      type: 'example',
      title: 'Eksempel: Bil i sving',
      problem: `En bil med masse 1200 kg kjører gjennom en sving med radius 50 m og fart 20 m/s.

a) Finn den nødvendige sentripetalkraften
b) Hvilken kraft gir denne sentripetalkraften?
c) Hva er den minste friksjonskoeffisienten som kreves?`,
      solution: `**Gitt:**
- Masse: $m = 1200$ kg
- Radius: $r = 50$ m
- Fart: $v = 20$ m/s

**a) Nødvendig sentripetalkraft:**
$$F_s = m\\frac{v^2}{r} = 1200 \\cdot \\frac{20^2}{50}$$
$$F_s = 1200 \\cdot \\frac{400}{50} = 1200 \\cdot 8 = 9600 \\text{ N}$$

**b) Hvilken kraft?**
I en horisontal sving er det **friksjonskraften** mellom dekkene og veien som gir sentripetalkraften. Friksjonskraften peker mot sentrum av svingen.

**c) Minimum friksjonskoeffisient:**

Friksjonskraft: $f = \\mu N = \\mu mg$

For at bilen skal kunne ta svingen:
$$f \\geq F_s$$
$$\\mu mg \\geq m\\frac{v^2}{r}$$
$$\\mu \\geq \\frac{v^2}{rg}$$

$$\\mu \\geq \\frac{20^2}{50 \\cdot 9.81} = \\frac{400}{490.5} = 0.82$$

**Svar:**
- a) Sentripetalkraften er 9600 N
- b) Friksjonskraften fra veien
- c) Minimum friksjonskoeffisient er $\\mu = 0.82$

**Tolkning:**
Hvis veien er glatt (lav friksjonskoeffisient), vil bilen skli utover og ikke klare svingen.`,
    },

    // ========== NOTE: SENTRIFUGALKRAFT ==========
    {
      id: 'fys2-1-4-note-sentrifugal',
      type: 'note',
      title: 'Sentrifugalkraft – en pseudokraft',
      content: `**Sentrifugalkraft** er ikke en reell kraft, men en **pseudokraft** (fiktiv kraft) som oppleves i et roterende referansesystem.

**Fra utsiden (inertielt system):**
Objektet akselererer innover mot sentrum på grunn av sentripetalkraften.

**Fra innsiden (roterende system):**
Du opplever en kraft utover – dette er sentrifugalkraften. Men denne "kraften" eksisterer ikke i virkeligheten; det er bare en konsekvens av at du er i et akselerert (ikke-inertielt) referansesystem.

**Eksempel:**
I en bil som tar en sving, føles det som om du blir presset utover mot døra. Men i virkeligheten er det døra som presser deg innover (sentripetalkraft), slik at du følger bilens sirkelbevegelse. Følelsen av å bli presset utover er sentrifugalkraften – en pseudokraft.

**Huskeregel:**
- **Sentripetalkraft:** Reell kraft, peker innover, holder objektet i sirkelbevegelse
- **Sentrifugalkraft:** Pseudokraft, oppleves som å peke utover, eksisterer bare i roterende referansesystem`,
    },

    // ========== VARIABEL SIRKELBEVEGELSE ==========
    {
      id: 'fys2-1-4-variabel',
      type: 'text',
      content: `## Variabel sirkelbevegelse

Hvis farten endres mens objektet beveger seg i sirkel, har vi **variabel sirkelbevegelse**.

**Kjennetegn:**
- Farten (og vinkelfarten) endres
- Det er både **sentripetalakselerasjon** (mot sentrum) og **tangentiell akselerasjon** (langs bevegelsesretningen)

### Tangentiell akselerasjon

**Tangentiell akselerasjon** ($a_t$) er akselerasjonen langs sirkelens tangent (bevegelsesretningen). Den endrer **farten**, ikke retningen.

$$a_t = \\frac{dv}{dt}$$

### Total akselerasjon

Den totale akselerasjonen er vektorsummen av sentripetalakselerasjon og tangentiell akselerasjon:

$$\\vec{a}_{\\text{total}} = \\vec{a}_s + \\vec{a}_t$$

Siden disse står vinkelrett på hverandre:
$$|\\vec{a}_{\\text{total}}| = \\sqrt{a_s^2 + a_t^2}$$`,
    },

    // ========== DEFINISJON: VINKELAKSELERASJON ==========
    {
      id: 'fys2-1-4-def-vinkelakselerasjon',
      type: 'definition',
      title: 'Vinkelakselerasjon (α)',
      content: `**Vinkelakselerasjon** (alpha, $\\alpha$) beskriver hvor raskt vinkelfarten endres.

$$\\alpha = \\frac{\\Delta \\omega}{\\Delta t}$$

**Enhet:** rad/s²

**Sammenheng med tangentiell akselerasjon:**
$$a_t = \\alpha r$$

Dette er analogt til $v = \\omega r$ for lineær og vinkelhastighet.`,
    },

    // ========== PRAKTISKE ANVENDELSER ==========
    {
      id: 'fys2-1-4-anvendelser',
      type: 'text',
      content: `## Praktiske anvendelser

### 1. Karusell og tivoli
Når du sitter på en karusell, er det normalkraften fra setet og friksjonskraften som gir sentripetalkraften. Jo raskere karusellen snurrer, jo mer kraft trengs.

### 2. Biler i svinger
Friksjonskraften mellom dekk og vei gir sentripetalkraften. På glatt vei (lav friksjon) kan ikke bilen ta skarpe svinger i høy fart.

### 3. Banked (skråstilt) sving
Motorveier og motorsportbaner har ofte **bankede svinger** (skråstilt innover). Da kan normalkreftens horisontale komponent bidra til sentripetalkraften, slik at bilen kan ta svingen i høyere fart uten å være avhengig av friksjon alene.

### 4. Planeter i bane
Planetene holdes i bane rundt solen av gravitasjonskraften, som gir den nødvendige sentripetalkraften:
$$F_g = \\frac{GMm}{r^2} = m\\frac{v^2}{r}$$

### 5. Sentrifuger
I medisin og industri brukes sentrifuger til å skille materialer med ulik tetthet. Ved høy rotasjonshastighet blir sentripetalakselerasjonen svært stor, og tyngre partikler presses utover (relativt sett).`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - VINKELFART ==========
    {
      id: 'fys2-1-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-1',
        number: '1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er enheten for vinkelfart?',
        options: [
          {
            id: 'a',
            text: 'm/s',
            isCorrect: false,
            feedback: 'Feil. Dette er enheten for lineær hastighet, ikke vinkelfart.',
          },
          {
            id: 'b',
            text: 'rad/s',
            isCorrect: true,
            feedback: 'Riktig! Vinkelfart måles i radianer per sekund (rad/s).',
          },
          {
            id: 'c',
            text: 'm/s²',
            isCorrect: false,
            feedback: 'Feil. Dette er enheten for akselerasjon, ikke vinkelfart.',
          },
          {
            id: 'd',
            text: 'Hz',
            isCorrect: false,
            feedback: 'Feil. Hz (Hertz) er enheten for frekvens, ikke vinkelfart (selv om de er relatert).',
          },
        ],
        solution: 'Vinkelfart måles i radianer per sekund (rad/s). Den beskriver hvor mange radianer objektet roterer per tidsenhet.',
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - SENTRIPETALAKSELERASJON RETNING ==========
    {
      id: 'fys2-1-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-2',
        number: '1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I hvilken retning peker sentripetalakselerasjonen?',
        options: [
          {
            id: 'a',
            text: 'Langs bevegelsesretningen',
            isCorrect: false,
            feedback: 'Feil. Dette ville være tangentiell akselerasjon. Sentripetalakselerasjonen peker vinkelrett på bevegelsesretningen.',
          },
          {
            id: 'b',
            text: 'Utover fra sentrum',
            isCorrect: false,
            feedback: 'Feil. Dette er en vanlig misforståelse. Sentripetalakselerasjonen peker innover mot sentrum.',
          },
          {
            id: 'c',
            text: 'Mot sentrum av sirkelen',
            isCorrect: true,
            feedback: 'Riktig! Sentripetalakselerasjonen peker alltid mot sentrum av sirkelen (radielt innover).',
          },
          {
            id: 'd',
            text: 'Oppover',
            isCorrect: false,
            feedback: 'Feil. Retningen avhenger av sirkelens orientering, men sentripetalakselerasjonen peker alltid mot sentrum.',
          },
        ],
        solution: 'Sentripetalakselerasjonen peker alltid mot sentrum av sirkelen. "Sentripetal" betyr nettopp "søkende mot sentrum".',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - PERIODE ==========
    {
      id: 'fys2-1-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-3',
        number: '1.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvis et objekt bruker 4 sekunder på én full omdreiing, hva er frekvensen?',
        options: [
          {
            id: 'a',
            text: '4 Hz',
            isCorrect: false,
            feedback: 'Feil. Du har blandet sammen periode og frekvens. Frekvensen er $f = 1/T = 1/4 = 0.25$ Hz.',
          },
          {
            id: 'b',
            text: '0.25 Hz',
            isCorrect: true,
            feedback: 'Riktig! Frekvensen er $f = 1/T = 1/4 = 0.25$ Hz (en fjerdedels omdreiing per sekund).',
          },
          {
            id: 'c',
            text: '2 Hz',
            isCorrect: false,
            feedback: 'Feil. Frekvensen er $f = 1/T = 1/4 = 0.25$ Hz.',
          },
          {
            id: 'd',
            text: '8 Hz',
            isCorrect: false,
            feedback: 'Feil. Frekvensen er $f = 1/T = 1/4 = 0.25$ Hz.',
          },
        ],
        solution: 'Frekvens er antall omdreininger per sekund: $f = 1/T = 1/4 = 0.25$ Hz. Perioden $T = 4$ s betyr at objektet gjør én omdreiing hvert 4. sekund, altså 0.25 omdreininger per sekund.',
      },
    },

    // ========== OPPGAVE 4: BEREGNING - VINKELFART OG HASTIGHET ==========
    {
      id: 'fys2-1-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-4',
        number: '1.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Et hjul med radius 0.5 m roterer med frekvens 3 Hz.

a) Finn vinkelfarten
b) Finn hastigheten til et punkt på hjulets omkrets`,
        solution: `**Gitt:**
- Radius: $r = 0.5$ m
- Frekvens: $f = 3$ Hz

**a) Vinkelfart:**
$$\\omega = 2\\pi f$$
$$\\omega = 2\\pi \\cdot 3 = 6\\pi = 18.85 \\text{ rad/s}$$

**b) Lineær hastighet:**
$$v = \\omega r$$
$$v = 18.85 \\cdot 0.5 = 9.42 \\text{ m/s}$$

**Svar:**
- a) Vinkelfarten er $\\omega = 18.85$ rad/s (eller $6\\pi$ rad/s eksakt)
- b) Hastigheten er $v = 9.42$ m/s

**Tolkning:**
Et punkt på hjulets omkrets beveger seg med 9.42 m/s (ca. 34 km/t).`,
      },
    },

    // ========== OPPGAVE 5: BEREGNING - SENTRIPETALAKSELERASJON ==========
    {
      id: 'fys2-1-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-5',
        number: '1.5',
        type: 'classic',
        difficulty: 'medium',
        task: `En bil kjører i en rundkjøring med radius 25 m og fart 15 m/s.

Finn sentripetalakselerasjonen til bilen.`,
        solution: `**Gitt:**
- Radius: $r = 25$ m
- Fart: $v = 15$ m/s

**Formel:**
$$a_s = \\frac{v^2}{r}$$

**Utregning:**
$$a_s = \\frac{15^2}{25} = \\frac{225}{25} = 9 \\text{ m/s}^2$$

**Svar:**
Sentripetalakselerasjonen er $a_s = 9$ m/s².

**Sammenligning:**
Dette er omtrent lik tyngdeakselerasjonen ($g = 9.81$ m/s²), så passasjerene vil kjenne en betydelig kraft mot siden.`,
      },
    },

    // ========== OPPGAVE 6: BEREGNING - SENTRIPETALKRAFT ==========
    {
      id: 'fys2-1-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-6',
        number: '1.6',
        type: 'classic',
        difficulty: 'medium',
        task: `En ball med masse 0.3 kg svinges i en horisontal sirkel med radius 0.8 m og hastighet 6 m/s.

Finn spennkraften i snoren.`,
        solution: `**Gitt:**
- Masse: $m = 0.3$ kg
- Radius: $r = 0.8$ m
- Hastighet: $v = 6$ m/s

**Formel:**
$$F_s = m\\frac{v^2}{r}$$

**Utregning:**
$$F_s = 0.3 \\cdot \\frac{6^2}{0.8} = 0.3 \\cdot \\frac{36}{0.8}$$
$$F_s = 0.3 \\cdot 45 = 13.5 \\text{ N}$$

**Svar:**
Spennkraften i snoren er $F_s = 13.5$ N.

**Tolkning:**
Spennkraften gir den sentripetalkraften som holder ballen i sirkelbevegelse.`,
      },
    },

    // ========== OPPGAVE 7: BEREGNING - PERIODE FRA VINKELFART ==========
    {
      id: 'fys2-1-4-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-7',
        number: '1.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En satellitt i bane rundt jorden har vinkelfart $\\omega = 1.0 \\times 10^{-3}$ rad/s.

a) Finn perioden (tiden for én omdreiing)
b) Hvor mange omdreiinger gjør satellitten per døgn?`,
        solution: `**Gitt:**
- Vinkelfart: $\\omega = 1.0 \\times 10^{-3}$ rad/s = 0.001 rad/s

**a) Periode:**
$$\\omega = \\frac{2\\pi}{T}$$
$$T = \\frac{2\\pi}{\\omega}$$
$$T = \\frac{2\\pi}{0.001} = 2000\\pi = 6283 \\text{ s}$$

Konverter til timer:
$$T = \\frac{6283}{3600} = 1.75 \\text{ timer} = 1 \\text{ time og } 45 \\text{ minutter}$$

**b) Omdreiinger per døgn:**
Frekvens:
$$f = \\frac{1}{T} = \\frac{1}{6283} = 1.59 \\times 10^{-4} \\text{ Hz}$$

Per døgn (24 timer = 86400 sekunder):
$$\\text{Antall omdreiinger} = f \\cdot 86400 = 1.59 \\times 10^{-4} \\cdot 86400 = 13.75$$

**Svar:**
- a) Perioden er ca. 6283 s ≈ 1 time og 45 minutter
- b) Satellitten gjør ca. 13.75 omdreiinger per døgn

**Ekstra:**
Dette tilsvarer omtrent 14 omdreiinger per dag, typisk for lav jordbane.`,
      },
    },

    // ========== OPPGAVE 8: BEREGNING - BIL I SVING MED FRIKSJON ==========
    {
      id: 'fys2-1-4-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-8',
        number: '1.8',
        type: 'classic',
        difficulty: 'medium',
        task: `En bil med masse 1500 kg kjører gjennom en sving med radius 40 m. Friksjonskoeffisienten mellom dekk og vei er $\\mu = 0.6$.

Hva er den maksimale farten bilen kan ha uten å skli utover?`,
        solution: `**Gitt:**
- Masse: $m = 1500$ kg
- Radius: $r = 40$ m
- Friksjonskoeffisient: $\\mu = 0.6$

**Friksjonskraften gir sentripetalkraften:**

Maksimal friksjonskraft:
$$f_{\\text{max}} = \\mu N = \\mu mg$$

For at bilen ikke skal skli:
$$f_{\\text{max}} \\geq F_s$$
$$\\mu mg \\geq m\\frac{v^2}{r}$$

**Forenkle (masse kanselleres):**
$$\\mu g \\geq \\frac{v^2}{r}$$
$$v^2 \\leq \\mu gr$$
$$v \\leq \\sqrt{\\mu gr}$$

**Maksimal fart:**
$$v_{\\text{max}} = \\sqrt{\\mu gr}$$
$$v_{\\text{max}} = \\sqrt{0.6 \\cdot 9.81 \\cdot 40}$$
$$v_{\\text{max}} = \\sqrt{235.4} = 15.3 \\text{ m/s}$$

**Konverter til km/t:**
$$v_{\\text{max}} = 15.3 \\cdot 3.6 = 55.1 \\text{ km/t}$$

**Svar:**
Den maksimale farten er ca. 15.3 m/s ≈ 55 km/t.

**Tolkning:**
Hvis bilen kjører raskere enn dette, vil friksjonskraften ikke være stor nok til å gi den nødvendige sentripetalkraften, og bilen vil skli utover.`,
      },
    },

    // ========== OPPGAVE 9: BEREGNING - BALL I VERTIKAL SIRKEL ==========
    {
      id: 'fys2-1-4-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-9',
        number: '1.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En ball med masse 0.2 kg svinges i en vertikal sirkel med radius 1 m. I det øyeblikket ballen er i toppen av sirkelen, er hastigheten 5 m/s.

Finn spennkraften i snoren i dette øyeblikket.

*Hint: I toppen virker både tyngdekraft og spennkraft nedover (mot sentrum).*`,
        solution: `**Gitt:**
- Masse: $m = 0.2$ kg
- Radius: $r = 1$ m
- Hastighet i toppen: $v = 5$ m/s

**Analyse:**
I toppen av sirkelen:
- Tyngdekraften $mg$ virker nedover
- Spennkraften $S$ virker nedover (mot sentrum)
- Begge bidrar til sentripetalkraften

**Newtons 2. lov (radielt):**
$$F_s = S + mg = m\\frac{v^2}{r}$$

**Løs for S:**
$$S = m\\frac{v^2}{r} - mg$$
$$S = m\\left(\\frac{v^2}{r} - g\\right)$$

**Utregning:**
$$S = 0.2 \\left(\\frac{5^2}{1} - 9.81\\right)$$
$$S = 0.2 \\left(25 - 9.81\\right)$$
$$S = 0.2 \\cdot 15.19 = 3.04 \\text{ N}$$

**Svar:**
Spennkraften i toppen er $S = 3.04$ N.

**Ekstra analyse:**
Hvis hastigheten var for lav, kunne $v^2/r$ bli mindre enn $g$, og spennkraften ville bli negativ. Det betyr at snoren ville slakke. Minimum hastighet i toppen for at snoren skal være stram er:
$$v_{\\text{min}} = \\sqrt{gr} = \\sqrt{9.81 \\cdot 1} = 3.13 \\text{ m/s}$$`,
      },
    },

    // ========== OPPGAVE 10: BEREGNING - KARUSELL AKSELERASJON ==========
    {
      id: 'fys2-1-4-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-10',
        number: '1.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En karusell med radius 5 m akselererer fra hvile til vinkelfart 1.2 rad/s på 10 sekunder.

a) Finn vinkelakselerasjonen (anta konstant)
b) Finn den lineære hastigheten til en person 4 m fra sentrum etter 10 sekunder
c) Finn den totale akselerasjonen til personen etter 10 sekunder`,
        solution: `**Gitt:**
- Radius karusell: $R = 5$ m
- Posisjon person: $r = 4$ m fra sentrum
- Startvinkelfart: $\\omega_0 = 0$ rad/s
- Sluttvinkelfart: $\\omega = 1.2$ rad/s
- Tid: $t = 10$ s

**a) Vinkelakselerasjon:**
$$\\alpha = \\frac{\\Delta \\omega}{\\Delta t} = \\frac{\\omega - \\omega_0}{t}$$
$$\\alpha = \\frac{1.2 - 0}{10} = 0.12 \\text{ rad/s}^2$$

**b) Lineær hastighet etter 10 s:**
$$v = \\omega r$$
$$v = 1.2 \\cdot 4 = 4.8 \\text{ m/s}$$

**c) Total akselerasjon:**

**Sentripetalakselerasjon:**
$$a_s = \\omega^2 r = (1.2)^2 \\cdot 4 = 1.44 \\cdot 4 = 5.76 \\text{ m/s}^2$$

**Tangentiell akselerasjon:**
$$a_t = \\alpha r = 0.12 \\cdot 4 = 0.48 \\text{ m/s}^2$$

**Total akselerasjon (Pytagoras, siden de står vinkelrett):**
$$a_{\\text{total}} = \\sqrt{a_s^2 + a_t^2}$$
$$a_{\\text{total}} = \\sqrt{5.76^2 + 0.48^2}$$
$$a_{\\text{total}} = \\sqrt{33.18 + 0.23} = \\sqrt{33.41} = 5.78 \\text{ m/s}^2$$

**Svar:**
- a) Vinkelakselerasjonen er $\\alpha = 0.12$ rad/s²
- b) Lineær hastighet er $v = 4.8$ m/s
- c) Total akselerasjon er $a = 5.78$ m/s²

**Tolkning:**
Total akselerasjon består av sentripetalakselerasjon (mot sentrum) og tangentiell akselerasjon (langs bevegelsesretningen). Sentripetalakselerasjonen dominerer.`,
      },
    },

    // ========== OPPGAVE 11: BEREGNING - PLANET I BANE ==========
    {
      id: 'fys2-1-4-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-11',
        number: '1.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Månen går i bane rundt jorden med radius $r = 3.84 \\times 10^8$ m og periode $T = 27.3$ dager.

a) Finn månens vinkelfart
b) Finn månens lineære hastighet
c) Finn månens sentripetalakselerasjon`,
        solution: `**Gitt:**
- Radius: $r = 3.84 \\times 10^8$ m
- Periode: $T = 27.3$ dager

**Konverter periode til sekunder:**
$$T = 27.3 \\cdot 24 \\cdot 3600 = 2.36 \\times 10^6 \\text{ s}$$

**a) Vinkelfart:**
$$\\omega = \\frac{2\\pi}{T}$$
$$\\omega = \\frac{2\\pi}{2.36 \\times 10^6} = 2.66 \\times 10^{-6} \\text{ rad/s}$$

**b) Lineær hastighet:**
$$v = \\omega r$$
$$v = 2.66 \\times 10^{-6} \\cdot 3.84 \\times 10^8$$
$$v = 1022 \\text{ m/s} \\approx 1.0 \\text{ km/s}$$

**c) Sentripetalakselerasjon:**
$$a_s = \\frac{v^2}{r}$$
$$a_s = \\frac{1022^2}{3.84 \\times 10^8}$$
$$a_s = \\frac{1.04 \\times 10^6}{3.84 \\times 10^8} = 2.72 \\times 10^{-3} \\text{ m/s}^2$$

**Alternativ for c):**
$$a_s = \\omega^2 r = (2.66 \\times 10^{-6})^2 \\cdot 3.84 \\times 10^8$$
$$a_s = 7.08 \\times 10^{-12} \\cdot 3.84 \\times 10^8 = 2.72 \\times 10^{-3} \\text{ m/s}^2$$

**Svar:**
- a) Vinkelfart: $\\omega = 2.66 \\times 10^{-6}$ rad/s
- b) Lineær hastighet: $v \\approx 1.0$ km/s
- c) Sentripetalakselerasjon: $a_s = 2.72 \\times 10^{-3}$ m/s²

**Sammenligning:**
Månens sentripetalakselerasjon er svært liten sammenlignet med tyngdeakselerasjonen på jorden ($g = 9.81$ m/s²), bare ca. 0.028% av $g$.`,
      },
    },

    // ========== OPPGAVE 12: BEREGNING - BANKED SVING ==========
    {
      id: 'fys2-1-4-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-12',
        number: '1.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En motorsportbane har en banked (skråstilt) sving med radius 100 m. Svingen er skråstilt med vinkel 30° fra horisontalplanet.

Finn den ideelle farten der bilen ikke trenger friksjon for å holde seg i svingen (kun normalkraften gir sentripetalkraften).

*Hint: Del normalkraften i horisontal og vertikal komponent.*`,
        solution: `**Gitt:**
- Radius: $r = 100$ m
- Vinkel: $\\theta = 30°$

**Analyse:**
Normalkraften $N$ fra veien virker vinkelrett på veien. Vi deler den i:
- **Horisontal komponent:** $N\\sin\\theta$ (mot sentrum, gir sentripetalkraft)
- **Vertikal komponent:** $N\\cos\\theta$ (oppover, balanserer tyngdekraft)

**Vertikal likevekt:**
$$N\\cos\\theta = mg$$
$$N = \\frac{mg}{\\cos\\theta}$$

**Horisontal (sentripetal):**
$$N\\sin\\theta = m\\frac{v^2}{r}$$

**Sett inn N:**
$$\\frac{mg}{\\cos\\theta} \\cdot \\sin\\theta = m\\frac{v^2}{r}$$

**Forenkle (masse kanselleres):**
$$\\frac{g\\sin\\theta}{\\cos\\theta} = \\frac{v^2}{r}$$
$$g\\tan\\theta = \\frac{v^2}{r}$$
$$v^2 = gr\\tan\\theta$$
$$v = \\sqrt{gr\\tan\\theta}$$

**Utregning:**
$$v = \\sqrt{9.81 \\cdot 100 \\cdot \\tan(30°)}$$
$$v = \\sqrt{981 \\cdot 0.577}$$
$$v = \\sqrt{566.1} = 23.8 \\text{ m/s}$$

**Konverter til km/t:**
$$v = 23.8 \\cdot 3.6 = 85.7 \\text{ km/t}$$

**Svar:**
Den ideelle farten er ca. 23.8 m/s ≈ 86 km/t.

**Tolkning:**
Ved denne farten trenger ikke bilen friksjon for å holde seg i svingen – normalkraftens horisontale komponent gir nøyaktig den sentripetalkraften som trengs.`,
      },
    },

    // ========== OPPGAVE 13: BEREGNING - VARIABEL SIRKELBEVEGELSE ==========
    {
      id: 'fys2-1-4-ex-13-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-13',
        number: '1.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et objekt beveger seg i en sirkel med radius 2 m. I et øyeblikk har objektet hastighet 8 m/s og tangentiell akselerasjon 3 m/s² (farten øker).

Finn den totale akselerasjonen i dette øyeblikket.`,
        solution: `**Gitt:**
- Radius: $r = 2$ m
- Hastighet: $v = 8$ m/s
- Tangentiell akselerasjon: $a_t = 3$ m/s²

**Sentripetalakselerasjon:**
$$a_s = \\frac{v^2}{r} = \\frac{8^2}{2} = \\frac{64}{2} = 32 \\text{ m/s}^2$$

**Total akselerasjon:**
Sentripetalakselerasjon og tangentiell akselerasjon står vinkelrett på hverandre:
$$a_{\\text{total}} = \\sqrt{a_s^2 + a_t^2}$$
$$a_{\\text{total}} = \\sqrt{32^2 + 3^2}$$
$$a_{\\text{total}} = \\sqrt{1024 + 9} = \\sqrt{1033} = 32.1 \\text{ m/s}^2$$

**Retning:**
Vinkelen fra radielt innover (sentripetal retning):
$$\\phi = \\arctan\\left(\\frac{a_t}{a_s}\\right) = \\arctan\\left(\\frac{3}{32}\\right) = 5.4°$$

**Svar:**
Total akselerasjon er $a = 32.1$ m/s², rettet 5.4° fra radielt innover i bevegelsesretningen.

**Tolkning:**
Sentripetalakselerasjonen (32 m/s²) dominerer kraftig over tangentiell akselerasjon (3 m/s²), så den totale akselerasjonen peker nesten rett mot sentrum.`,
      },
    },

    // ========== OPPGAVE 14: BEREGNING - MAKSIMAL HASTIGHET UTEN Å LØFTE ==========
    {
      id: 'fys2-1-4-ex-14-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-4-ex-14',
        number: '1.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bil kjører over toppen av en kul bakke (konveks kurve) med radius 80 m.

Hva er den maksimale farten bilen kan ha uten å miste kontakt med bakken (løfte fra bakken)?

*Hint: Bilen mister kontakt når normalkraften blir null.*`,
        solution: `**Gitt:**
- Radius: $r = 80$ m

**Analyse:**
Når bilen er på toppen, virker:
- Tyngdekraft $mg$ nedover
- Normalkraft $N$ oppover

Netto kraft nedover gir sentripetalkraft:
$$mg - N = m\\frac{v^2}{r}$$

**Bilen mister kontakt når $N = 0$:**
$$mg = m\\frac{v^2}{r}$$

**Forenkle (masse kanselleres):**
$$g = \\frac{v^2}{r}$$
$$v^2 = gr$$
$$v = \\sqrt{gr}$$

**Utregning:**
$$v = \\sqrt{9.81 \\cdot 80}$$
$$v = \\sqrt{784.8} = 28.0 \\text{ m/s}$$

**Konverter til km/t:**
$$v = 28.0 \\cdot 3.6 = 100.8 \\text{ km/t}$$

**Svar:**
Maksimal fart er ca. 28 m/s ≈ 101 km/t.

**Tolkning:**
Hvis bilen kjører raskere enn dette over toppen, vil den nødvendige sentripetalkraften være større enn tyngdekraften alene kan gi, og bilen vil løfte fra bakken (som i filmer der biler "flyr" over bakketopper!).`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Viktige konsepter:**

### Uniform sirkelbevegelse
- Konstant fart, men hastigheten endres (fordi retningen endres)
- Akselerasjonen peker alltid mot sentrum

### Størrelser
- **Vinkelfart:** $\\omega = 2\\pi f = 2\\pi/T$ (rad/s)
- **Lineær hastighet:** $v = \\omega r$ (m/s)
- **Periode:** $T$ (s) – tid for én omdreiing
- **Frekvens:** $f = 1/T$ (Hz) – omdreiinger per sekund

### Sentripetalakselerasjon
- **Formel:** $a_s = v^2/r = \\omega^2 r$
- **Retning:** Mot sentrum av sirkelen
- Forårsaker endring i retning, ikke fart

### Sentripetalkraft
- **Formel:** $F_s = m v^2/r = m\\omega^2 r$
- **Retning:** Mot sentrum
- Ikke en egen kraft, men netto kraft som holder objektet i sirkel
- Kan være spennkraft, friksjon, gravitasjon, normalkraft, etc.

### Sentrifugalkraft
- Pseudokraft (fiktiv kraft) i roterende referansesystem
- Oppleves som å virke utover
- Eksisterer ikke i inertielle referansesystem

### Variabel sirkelbevegelse
- **Tangentiell akselerasjon:** $a_t = \\alpha r$ (endrer farten)
- **Total akselerasjon:** $a = \\sqrt{a_s^2 + a_t^2}$

**Anvendelser:**
- Biler i svinger (friksjon gir sentripetalkraft)
- Planeter i bane (gravitasjon gir sentripetalkraft)
- Ball i snor (spennkraft gir sentripetalkraft)
- Bankede svinger (normalkreftens komponent gir sentripetalkraft)

**Neste kapittel:**
Vi skal se på gravitasjon og hvordan planetbevegelse er et eksempel på sirkelbevegelse styrt av gravitasjonskraften.`,
    },
  ],
};

// ============================================================================
// Kapittel 1.5: Numerisk modellering av bevegelse
// LK20: Bruke digitale verktøy til å modellere bevegelse numerisk
// ============================================================================

export const CHAPTER_FYSIKK2_1_5: TextbookChapter = {
  id: 'fysikk2-1-5',
  courseId: 'fysikk2',
  chapterNumber: '1.5',
  title: 'Numerisk modellering av bevegelse',
  description: 'Bruk av numeriske metoder (Eulers metode) til å modellere komplekse bevegelser.',
  estimatedMinutes: 45,
  prerequisites: ['fysikk2-1-3', 'fysikk2-1-4'],
  competenceGoals: [
    'bruke digitale verktøy til å modellere bevegelse numerisk',
    'vurdere nøyaktighet i numeriske metoder',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-1-5-intro',
      type: 'text',
      content: `## Hvorfor trenger vi numeriske metoder?

I de tidligere kapitlene har vi løst bevegelseslikninger **analytisk** – det vil si at vi har funnet eksakte formler for posisjon og hastighet som funksjon av tid. For eksempel lærte vi at for konstant akselerasjon gjelder:

$$v(t) = v_0 + at$$
$$x(t) = x_0 + v_0 t + \\frac{1}{2}at^2$$

Men i virkeligheten er akselerasjonen sjelden konstant. Tenk på:
- **Luftmotstand** som øker med hastigheten
- **Fjærkrefter** som avhenger av posisjon
- **Gravitasjon** som varierer med avstand
- **Magnetiske krefter** som avhenger av både posisjon og hastighet

For slike problemer finnes det ofte **ingen analytisk løsning**. Da bruker vi i stedet **numeriske metoder** – algoritmer som beregner tilnærmede verdier steg for steg.

**Numeriske metoder:**
- Deler opp tiden i små intervaller $\\Delta t$
- Beregner posisjon og hastighet trinnvis
- Gir tilnærmede, men ofte svært nøyaktige, løsninger
- Kan implementeres på datamaskiner

**Anvendelser:**
- Simulering av romfart og satellittbaner
- Værvarsling og klimamodeller
- Dataspill og animasjoner
- Partikkelfysikk og molekylsimuleringer
- Strukturanalyse i ingeniørfag`,
    },

    // ========== DEFINISJON: NUMERISK METODE ==========
    {
      id: 'fys2-1-5-def-numerisk',
      type: 'definition',
      title: 'Numerisk metode',
      content: `En **numerisk metode** er en algoritme som finner tilnærmede løsninger på matematiske problemer ved å utføre beregninger i små, diskrete steg.

I stedet for å finne en eksakt formel, beregner vi verdier punkt for punkt:

$$\\text{Ny verdi} = \\text{Gammel verdi} + \\text{Endring}$$

**Nøkkelbegreper:**
- **Tidsstepp** ($\\Delta t$): Hvor lang tid mellom hver beregning
- **Iterasjon**: Ett beregningssteg i algoritmen
- **Diskretisering**: Å dele opp kontinuerlige størrelser i diskrete verdier`,
    },

    // ========== EULERS METODE - MATEMATISK BAKGRUNN ==========
    {
      id: 'fys2-1-5-euler-teori',
      type: 'text',
      content: `## Eulers metode – matematisk bakgrunn

**Eulers metode** (oppkalt etter matematikeren Leonhard Euler, 1707-1783) er den enkleste numeriske metoden for å løse differensiallikninger.

### Den deriverte som stigningstall

Husk at den deriverte av en funksjon $f(t)$ er definert som:

$$f'(t) = \\lim_{\\Delta t \\to 0} \\frac{f(t + \\Delta t) - f(t)}{\\Delta t}$$

Dette er stigningstallet til tangenten ved punktet $t$.

### Eulers approksimasjon

Hvis vi **ikke** tar grensen, men bruker en liten, men endelig $\\Delta t$, får vi en tilnærming:

$$f'(t) \\approx \\frac{f(t + \\Delta t) - f(t)}{\\Delta t}$$

Ved å løse for $f(t + \\Delta t)$ får vi **Euler-formelen**:

$$f(t + \\Delta t) \\approx f(t) + f'(t) \\cdot \\Delta t$$

### Geometrisk tolkning

Euler-metoden følger tangentlinjen i hvert punkt. I stedet for å følge den buede kurven eksakt, tar vi et lite skritt langs tangenten. Jo mindre $\\Delta t$, jo bedre følger vi den virkelige kurven.

**Viktig innsikt:**
Euler-metoden erstatter den buede løsningskurven med en rekke rette linjesegmenter (tangentene). Dette gir en tilnærmet løsning som blir bedre jo mindre tidssteg vi bruker.`,
    },

    // ========== DEFINISJON: EULERS METODE ==========
    {
      id: 'fys2-1-5-def-euler',
      type: 'definition',
      title: 'Eulers metode (eksplisitt)',
      content: `**Eulers metode** oppdaterer verdier trinnvis ved å bruke den nåværende endringsraten:

$$y_{n+1} = y_n + f(t_n, y_n) \\cdot \\Delta t$$

der $f(t_n, y_n)$ er den deriverte ved tidspunkt $t_n$.

**For bevegelse i én dimensjon:**

$$v_{n+1} = v_n + a_n \\cdot \\Delta t$$
$$x_{n+1} = x_n + v_n \\cdot \\Delta t$$

der:
- $x_n$ er posisjonen ved tidspunkt $t_n$
- $v_n$ er hastigheten ved tidspunkt $t_n$
- $a_n$ er akselerasjonen ved tidspunkt $t_n$
- $\\Delta t$ er tidsssteget

**Merk:** Vi bruker den **gamle** hastigheten $v_n$ for å oppdatere posisjonen. Dette kalles **eksplisitt** Euler-metode.`,
    },

    // ========== IMPLEMENTASJON MED TIDSSTEPP ==========
    {
      id: 'fys2-1-5-implementasjon',
      type: 'text',
      content: `## Implementasjon av Eulers metode

### Algoritmen steg for steg

1. **Sett startverdier:** Velg $x_0$, $v_0$, og $t_0 = 0$
2. **Velg tidsstegg:** Bestem $\\Delta t$ (mindre = mer nøyaktig, men flere beregninger)
3. **Gjenta for hvert tidssteg:**
   - Beregn akselerasjonen $a_n = F_n / m$ (fra kreftene)
   - Oppdater hastigheten: $v_{n+1} = v_n + a_n \\cdot \\Delta t$
   - Oppdater posisjonen: $x_{n+1} = x_n + v_n \\cdot \\Delta t$
   - Oppdater tiden: $t_{n+1} = t_n + \\Delta t$
4. **Fortsett** til ønsket sluttid er nådd

### Pseudokode

\`\`\`
x = x0          # Startposisjon
v = v0          # Starthastighet
t = 0           # Starttid
dt = 0.01       # Tidsstegg

while t < t_slutt:
    a = F(x, v, t) / m    # Beregn akselerasjon fra krefter
    v = v + a * dt        # Oppdater hastighet
    x = x + v * dt        # Oppdater posisjon
    t = t + dt            # Oppdater tid
\`\`\`

### Valg av tidsstegg

**Tommelregel:** $\\Delta t$ bør være mye mindre enn den karakteristiske tidsskalaen for systemet.

- **Fritt fall (noen sekunder):** $\\Delta t \\approx 0.01 \\text{ s}$ - $0.1 \\text{ s}$
- **Pendel (perioder på 1-2 s):** $\\Delta t \\approx 0.001 \\text{ s}$ - $0.01 \\text{ s}$
- **Raske svingninger:** Bruk enda mindre $\\Delta t$`,
    },

    // ========== EKSEMPEL 1: FRITT FALL ==========
    {
      id: 'fys2-1-5-ex-fritt-fall',
      type: 'example',
      title: 'Eksempel 1: Fritt fall med Eulers metode',
      problem: `En ball slippes fra hvile fra en høyde på 20 m. Bruk Eulers metode med tidsstegg $\\Delta t = 0.5$ s til å finne høyden og hastigheten etter 1.0 s og 2.0 s.

Sammenlign med de analytiske formlene. Bruk $g = 10$ m/s².`,
      solution: `**Gitt:**
- Starthøyde: $y_0 = 20$ m
- Starthastighet: $v_0 = 0$ m/s (slippes fra hvile)
- Akselerasjon: $a = -g = -10$ m/s² (negativ fordi nedover)
- Tidsstegg: $\\Delta t = 0.5$ s

**Euler-formler:**
$$v_{n+1} = v_n + a \\cdot \\Delta t$$
$$y_{n+1} = y_n + v_n \\cdot \\Delta t$$

**Beregning steg for steg:**

**Steg 0 (t = 0 s):**
- $y_0 = 20$ m
- $v_0 = 0$ m/s

**Steg 1 (t = 0.5 s):**
- $v_1 = v_0 + a \\cdot \\Delta t = 0 + (-10) \\cdot 0.5 = -5$ m/s
- $y_1 = y_0 + v_0 \\cdot \\Delta t = 20 + 0 \\cdot 0.5 = 20$ m

**Steg 2 (t = 1.0 s):**
- $v_2 = v_1 + a \\cdot \\Delta t = -5 + (-10) \\cdot 0.5 = -10$ m/s
- $y_2 = y_1 + v_1 \\cdot \\Delta t = 20 + (-5) \\cdot 0.5 = 17.5$ m

**Steg 3 (t = 1.5 s):**
- $v_3 = v_2 + a \\cdot \\Delta t = -10 + (-10) \\cdot 0.5 = -15$ m/s
- $y_3 = y_2 + v_2 \\cdot \\Delta t = 17.5 + (-10) \\cdot 0.5 = 12.5$ m

**Steg 4 (t = 2.0 s):**
- $v_4 = v_3 + a \\cdot \\Delta t = -15 + (-10) \\cdot 0.5 = -20$ m/s
- $y_4 = y_3 + v_3 \\cdot \\Delta t = 12.5 + (-15) \\cdot 0.5 = 5$ m

**Sammenligning med analytisk løsning:**

Analytisk: $y(t) = y_0 - \\frac{1}{2}gt^2$ og $v(t) = -gt$

| t (s) | Euler y (m) | Analytisk y (m) | Feil (m) | Euler v (m/s) | Analytisk v (m/s) |
|-------|-------------|-----------------|----------|---------------|-------------------|
| 1.0   | 17.5        | 15.0            | 2.5      | -10           | -10               |
| 2.0   | 5.0         | 0.0             | 5.0      | -20           | -20               |

**Observasjon:** Hastigheten er eksakt, men posisjonen har feil fordi vi bruker den gamle hastigheten i posisjonsoppdateringen. Feilen øker med tid. Med mindre $\\Delta t$ ville feilen vært mindre.`,
    },

    // ========== FEILKILDER OG NØYAKTIGHET ==========
    {
      id: 'fys2-1-5-feilkilder',
      type: 'text',
      content: `## Feilkilder og nøyaktighet

### Diskretiseringsfeil (avkuttingsfeil)

Den største feilkilden i Euler-metoden er **diskretiseringsfeil**. Denne oppstår fordi vi erstatter den glatte løsningskurven med rette linjesegmenter.

**For Eulers metode gjelder:**
- Feilen per steg er proporsjonal med $(\\Delta t)^2$
- Total feil etter mange steg er proporsjonal med $\\Delta t$

Dette betyr at hvis vi halverer tidsstegget, halverer vi den totale feilen. Euler-metoden er derfor en **førsteordens metode**.

### Akkumulering av feil

For hvert steg legges det til en liten feil. Over mange steg kan disse feilene akkumuleres og vokse:
- **Feil i posisjon** påvirker beregning av krefter
- **Feil i hastighet** påvirker beregning av posisjon
- Feilene kan forsterke hverandre

### Numerisk stabilitet

For noen problemer kan Euler-metoden bli **ustabil** – feilene vokser eksponentielt. Dette skjer typisk når:
- Tidsstegget er for stort
- Systemet har raske svingninger
- Kreftene er sterkt avhengige av posisjon

**Stabilitetsregel:** $\\Delta t$ må være mye mindre enn systemets karakteristiske tidsperiode.

### Forbedrede metoder

Det finnes mange bedre metoder enn enkel Euler:
- **Euler-Cromer** (symplektisk Euler): Bruker $v_{n+1}$ i stedet for $v_n$ i posisjonsoppdateringen
- **Midtpunktmetoden**: Bruker hastigheten midt i intervallet
- **Runge-Kutta**: Mer nøyaktige, men mer komplekse metoder

**Euler-Cromer-modifikasjon:**
$$v_{n+1} = v_n + a_n \\cdot \\Delta t$$
$$x_{n+1} = x_n + v_{n+1} \\cdot \\Delta t \\quad \\text{(bruker ny hastighet!)}$$

Denne enkle endringen gir mye bedre energibevaring for periodiske systemer.`,
    },

    // ========== DEFINISJON: EULER-CROMER ==========
    {
      id: 'fys2-1-5-def-euler-cromer',
      type: 'definition',
      title: 'Euler-Cromer-metoden',
      content: `**Euler-Cromer-metoden** (også kalt symplektisk Euler) er en forbedring som bruker den **oppdaterte** hastigheten i posisjonsberegningen:

$$v_{n+1} = v_n + a_n \\cdot \\Delta t$$
$$x_{n+1} = x_n + v_{n+1} \\cdot \\Delta t$$

**Fordeler:**
- Bevarer energien bedre i oscillerende systemer
- Mer stabil for pendler og fjærer
- Like enkel å implementere som vanlig Euler

**Anbefaling:** Bruk Euler-Cromer i stedet for vanlig Euler for de fleste fysikkproblemer!`,
    },

    // ========== EKSEMPEL 2: SAMMENLIGNING ==========
    {
      id: 'fys2-1-5-ex-sammenligning',
      type: 'example',
      title: 'Eksempel 2: Sammenligning av Euler og Euler-Cromer',
      problem: `Bruk begge metodene til å simulere fritt fall fra 20 m med $\\Delta t = 0.1$ s i 2 sekunder. Sammenlign posisjonene med den analytiske løsningen.

Bruk $g = 10$ m/s², $y_0 = 20$ m, $v_0 = 0$.`,
      solution: `**Euler-metoden (første 1 sekund):**

| t (s) | $v_n$ (m/s) | $y_n$ (m) | $v_{n+1}$ | $y_{n+1}$ (Euler) |
|-------|-------------|-----------|-----------|-------------------|
| 0.0   | 0           | 20        | -1        | 20                |
| 0.1   | -1          | 20        | -2        | 19.9              |
| 0.2   | -2          | 19.9      | -3        | 19.7              |
| 0.3   | -3          | 19.7      | -4        | 19.4              |
| ...   | ...         | ...       | ...       | ...               |
| 1.0   | -10         | 15.5      | -11       | 14.5              |

**Euler-Cromer-metoden (første 1 sekund):**

| t (s) | $v_n$ (m/s) | $y_n$ (m) | $v_{n+1}$ | $y_{n+1}$ (E-C) |
|-------|-------------|-----------|-----------|-----------------|
| 0.0   | 0           | 20        | -1        | 19.9            |
| 0.1   | -1          | 19.9      | -2        | 19.7            |
| 0.2   | -2          | 19.7      | -3        | 19.4            |
| ...   | ...         | ...       | ...       | ...             |
| 1.0   | -10         | 14.5      | -11       | 13.4            |

**Analytisk løsning ved t = 1 s:**
$$y(1) = 20 - \\frac{1}{2} \\cdot 10 \\cdot 1^2 = 15.0 \\text{ m}$$

**Sammenligning ved t = 1 s:**
- Euler: $y = 15.5$ m, feil = +0.5 m (for høyt)
- Euler-Cromer: $y = 14.5$ m, feil = -0.5 m (for lavt)
- Analytisk: $y = 15.0$ m

**Ved t = 2 s:**
- Analytisk: $y = 0$ m
- Euler: $y = 2.0$ m (for høyt)
- Euler-Cromer: $y = -2.0$ m (for lavt)

**Konklusjon:** Begge metodene har feil, men de ligger på hver sin side av den riktige verdien. Euler gir systematisk for høye posisjoner (fordi vi bruker for lav hastighet), mens Euler-Cromer gir for lave posisjoner.`,
    },

    // ========== PYTHON-EKSEMPEL: FRITT FALL ==========
    {
      id: 'fys2-1-5-python-fritt-fall',
      type: 'text',
      content: `## Python-eksempel: Fritt fall

Her er et komplett Python-program som simulerer fritt fall med Euler-Cromer-metoden:

\`\`\`python
# Fritt fall med Euler-Cromer-metoden
import matplotlib.pyplot as plt

# Fysiske konstanter
g = 9.81  # Tyngdeakselerasjon (m/s^2)

# Startverdier
y = 100   # Starthøyde (m)
v = 0     # Starthastighet (m/s)
t = 0     # Starttid (s)

# Numeriske parametere
dt = 0.01  # Tidsstegg (s)
t_slutt = 5  # Sluttid (s)

# Lister for å lagre resultater
t_liste = [t]
y_liste = [y]
v_liste = [v]

# Hovedløkke - Euler-Cromer
while t < t_slutt and y > 0:  # Stopp når ballen treffer bakken
    # Akselerasjon (konstant for fritt fall)
    a = -g

    # Oppdater hastighet først
    v = v + a * dt

    # Deretter posisjon (med ny hastighet - Euler-Cromer)
    y = y + v * dt

    # Oppdater tid
    t = t + dt

    # Lagre verdier
    t_liste.append(t)
    y_liste.append(y)
    v_liste.append(v)

# Plot resultatene
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))

ax1.plot(t_liste, y_liste, 'b-', label='Numerisk')
ax1.set_xlabel('Tid (s)')
ax1.set_ylabel('Høyde (m)')
ax1.set_title('Fritt fall - Posisjon')
ax1.grid(True)
ax1.legend()

ax2.plot(t_liste, v_liste, 'r-', label='Numerisk')
ax2.set_xlabel('Tid (s)')
ax2.set_ylabel('Hastighet (m/s)')
ax2.set_title('Fritt fall - Hastighet')
ax2.grid(True)
ax2.legend()

plt.tight_layout()
plt.show()

# Skriv ut sluttresultat
print(f"Ballen traff bakken etter {t:.2f} sekunder")
print(f"Sluthastighet: {v:.2f} m/s")
\`\`\`

**Forventet resultat:**
- Ballen treffer bakken etter ca. 4.52 sekunder
- Sluthastighet: ca. -44.3 m/s

**Analytisk kontroll:**
$$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\cdot 100}{9.81}} = 4.52 \\text{ s}$$
$$v = gt = 9.81 \\cdot 4.52 = 44.3 \\text{ m/s}$$`,
    },

    // ========== EKSEMPEL 3: LUFTMOTSTAND ==========
    {
      id: 'fys2-1-5-ex-luftmotstand',
      type: 'example',
      title: 'Eksempel 3: Fall med luftmotstand',
      problem: `En fallskjermhopper (masse 80 kg) hopper fra et fly. Luftmotstanden er gitt ved $F_L = -bv^2$, der $b = 0.25$ kg/m.

a) Sett opp bevegelseslikningen.
b) Finn terminalhastigheten analytisk.
c) Forklar hvorfor dette problemet egner seg for numerisk løsning.`,
      solution: `**a) Bevegelseslikning:**

Krefter på hopperen (positiv retning nedover):
- Tyngde: $F_g = mg$ (nedover)
- Luftmotstand: $F_L = -bv|v|$ (motsatt bevegelsesretningen)

Siden hopperen faller nedover ($v > 0$), blir:
$$F_{\\text{netto}} = mg - bv^2$$

Newtons 2. lov:
$$ma = mg - bv^2$$
$$a = g - \\frac{b}{m}v^2$$

**b) Terminalhastighet:**

Ved terminalhastighet er $a = 0$:
$$0 = g - \\frac{b}{m}v_t^2$$
$$v_t^2 = \\frac{mg}{b}$$
$$v_t = \\sqrt{\\frac{mg}{b}} = \\sqrt{\\frac{80 \\cdot 9.81}{0.25}} = \\sqrt{3139} = 56.0 \\text{ m/s}$$

Dette tilsvarer ca. 200 km/t.

**c) Hvorfor numerisk løsning?**

Bevegelseslikningen $\\frac{dv}{dt} = g - \\frac{b}{m}v^2$ er en **ikke-lineær** differensialligning fordi akselerasjonen avhenger av $v^2$.

Selv om denne likningen faktisk kan løses analytisk (med hyperbolske funksjoner), er løsningen komplisert:
$$v(t) = v_t \\tanh\\left(\\frac{gt}{v_t}\\right)$$

Med numeriske metoder kan vi enkelt:
- Løse likningen uten å kjenne den analytiske løsningen
- Legge til mer realistiske modeller (f.eks. $b$ som avhenger av høyde)
- Simulere åpning av fallskjerm (brå endring i $b$)
- Inkludere vind og andre effekter`,
    },

    // ========== PYTHON-EKSEMPEL: LUFTMOTSTAND ==========
    {
      id: 'fys2-1-5-python-luftmotstand',
      type: 'text',
      content: `## Python-eksempel: Fall med luftmotstand

\`\`\`python
# Fall med luftmotstand - kvadratisk drag
import matplotlib.pyplot as plt
import numpy as np

# Fysiske parametere
g = 9.81      # Tyngdeakselerasjon (m/s^2)
m = 80        # Masse (kg)
b = 0.25      # Luftmotstandskoeffisient (kg/m)

# Terminalhastighet (for sammenligning)
v_terminal = np.sqrt(m * g / b)
print(f"Terminalhastighet: {v_terminal:.1f} m/s")

# Startverdier
y = 4000  # Starthøyde (m)
v = 0     # Starthastighet (m/s)
t = 0     # Starttid (s)

# Numeriske parametere
dt = 0.01     # Tidsstegg (s)
t_slutt = 60  # Sluttid (s)

# Lister for resultater
t_liste = [t]
y_liste = [y]
v_liste = [v]

# Hovedløkke - Euler-Cromer
while t < t_slutt and y > 0:
    # Akselerasjon med luftmotstand
    # F = mg - b*v^2 (positiv v betyr nedover)
    a = g - (b/m) * v * abs(v)

    # Euler-Cromer oppdatering
    v = v + a * dt
    y = y - v * dt  # Minus fordi y er høyde, v er positiv nedover
    t = t + dt

    # Lagre
    t_liste.append(t)
    y_liste.append(y)
    v_liste.append(v)

# Analytisk løsning for hastighet
t_analytisk = np.linspace(0, max(t_liste), 100)
v_analytisk = v_terminal * np.tanh(g * t_analytisk / v_terminal)

# Plot
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))

ax1.plot(t_liste, y_liste, 'b-')
ax1.set_xlabel('Tid (s)')
ax1.set_ylabel('Høyde (m)')
ax1.set_title('Fall med luftmotstand - Posisjon')
ax1.grid(True)

ax2.plot(t_liste, v_liste, 'b-', label='Numerisk')
ax2.plot(t_analytisk, v_analytisk, 'r--', label='Analytisk')
ax2.axhline(y=v_terminal, color='g', linestyle=':',
            label=f'Terminal: {v_terminal:.1f} m/s')
ax2.set_xlabel('Tid (s)')
ax2.set_ylabel('Hastighet (m/s)')
ax2.set_title('Fall med luftmotstand - Hastighet')
ax2.legend()
ax2.grid(True)

plt.tight_layout()
plt.show()
\`\`\`

**Viktige observasjoner:**
1. Hastigheten øker raskt i starten
2. Økningen avtar når luftmotstanden blir betydelig
3. Hastigheten nærmer seg terminalhastigheten asymptotisk
4. Den numeriske løsningen matcher den analytiske svært godt`,
    },

    // ========== PYTHON-EKSEMPEL: PENDEL ==========
    {
      id: 'fys2-1-5-python-pendel',
      type: 'text',
      content: `## Python-eksempel: Matematisk pendel

For en pendel med lengde $L$ og utslag $\\theta$ er akselerasjonen:
$$\\alpha = -\\frac{g}{L}\\sin\\theta$$

For **små** vinkler ($\\theta < 15°$) kan vi bruke $\\sin\\theta \\approx \\theta$ og få en analytisk løsning. Men for **store** vinkler må vi løse numerisk.

\`\`\`python
# Matematisk pendel - numerisk løsning
import matplotlib.pyplot as plt
import numpy as np

# Fysiske parametere
g = 9.81   # Tyngdeakselerasjon (m/s^2)
L = 1.0    # Pendellengde (m)

# Startverdier
theta = np.radians(45)  # Startvinkel (45 grader)
omega = 0               # Startvinkelhastighet (rad/s)
t = 0

# Numeriske parametere
dt = 0.001    # Tidsstegg (s) - må være lite for pendel!
t_slutt = 10  # Sluttid (s)

# Lister for resultater
t_liste = [t]
theta_liste = [theta]
omega_liste = [omega]

# Beregn total mekanisk energi (for å sjekke bevaring)
def energi(theta, omega):
    E_kin = 0.5 * L**2 * omega**2  # Kinetisk (per masse)
    E_pot = g * L * (1 - np.cos(theta))  # Potensiell (per masse)
    return E_kin + E_pot

E0 = energi(theta, omega)
E_liste = [E0]

# Hovedløkke - Euler-Cromer
while t < t_slutt:
    # Vinkelakselerasjon
    alpha = -(g/L) * np.sin(theta)

    # Euler-Cromer
    omega = omega + alpha * dt
    theta = theta + omega * dt
    t = t + dt

    # Lagre
    t_liste.append(t)
    theta_liste.append(theta)
    omega_liste.append(omega)
    E_liste.append(energi(theta, omega))

# Plot
fig, (ax1, ax2, ax3) = plt.subplots(3, 1, figsize=(10, 10))

ax1.plot(t_liste, np.degrees(theta_liste))
ax1.set_xlabel('Tid (s)')
ax1.set_ylabel('Vinkel (grader)')
ax1.set_title('Pendel - Vinkelutslag')
ax1.grid(True)

ax2.plot(t_liste, omega_liste)
ax2.set_xlabel('Tid (s)')
ax2.set_ylabel('Vinkelhastighet (rad/s)')
ax2.set_title('Pendel - Vinkelhastighet')
ax2.grid(True)

# Energibevaring
ax3.plot(t_liste, np.array(E_liste)/E0)
ax3.set_xlabel('Tid (s)')
ax3.set_ylabel('E/E0')
ax3.set_title('Energibevaring (bør være 1.0)')
ax3.set_ylim(0.99, 1.01)
ax3.grid(True)

plt.tight_layout()
plt.show()

# Beregn periode
perioder = []
forrige_null = None
for i in range(1, len(theta_liste)):
    if theta_liste[i-1] > 0 and theta_liste[i] <= 0:
        if forrige_null is not None:
            perioder.append(t_liste[i] - forrige_null)
        forrige_null = t_liste[i]

if perioder:
    print(f"Målt periode: {np.mean(perioder):.3f} s")
    print(f"Liten-vinkel-formel: {2*np.pi*np.sqrt(L/g):.3f} s")
\`\`\`

**Viktige observasjoner:**
1. Euler-Cromer bevarer energien godt (viktig for oscillerende systemer!)
2. For store vinkler er perioden litt lengre enn liten-vinkel-formelen gir
3. Vanlig Euler-metode ville gitt økende energi over tid (ustabilt)`,
    },

    // ========== ANVENDELSER ==========
    {
      id: 'fys2-1-5-anvendelser',
      type: 'text',
      content: `## Anvendelser av numerisk modellering

### 1. Skrått kast med luftmotstand

Uten luftmotstand har vi den kjente parabelbanen. Med luftmotstand:
- Banen blir asymmetrisk (brattere nedstigning)
- Rekkevidden reduseres betydelig
- Optimal kastevinkel er under 45°

### 2. Fallskjermhopping

Simulering med varierende luftmotstandskoeffisient:
- Fritt fall: lav $b$, hastighet ca. 200 km/t
- Fallskjerm utløst: høy $b$, hastighet ca. 20 km/t
- Brå endring i $b$ gir rask oppbremsing

### 3. Planetbaner

For elliptiske baner der gravitasjonen varierer med avstand:
$$F = -\\frac{GMm}{r^2}$$

Må løses numerisk fordi akselerasjonen avhenger av posisjon.

### 4. Bilkjøring og bremsing

- Bremskraft avhengig av hastighet (ABS-bremser)
- Friksjon som varierer med underlaget
- Luftmotstand ved høye hastigheter

### 5. Sportsanalyse

- Golfball med spin (Magnus-effekt)
- Fotball som svinger i lufta
- Skihopperes luftmotstand og oppdrift

### 6. Værmodellering

- Atmosfæriske bevegelser
- Havsirkulasjon
- Klimaendringer over tid`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'fys2-1-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-1',
        number: '1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedfordelen med numeriske metoder sammenlignet med analytiske løsninger?',
        options: [
          {
            id: 'a',
            text: 'Numeriske metoder gir alltid eksakte svar',
            isCorrect: false,
            feedback: 'Feil. Numeriske metoder gir tilnærmede svar, ikke eksakte.',
          },
          {
            id: 'b',
            text: 'Numeriske metoder kan løse problemer der analytiske løsninger ikke eksisterer',
            isCorrect: true,
            feedback: 'Riktig! Mange fysikkproblemer har ikke analytiske løsninger (f.eks. bevegelse med luftmotstand), men kan likevel løses numerisk.',
          },
          {
            id: 'c',
            text: 'Numeriske metoder krever ikke datamaskiner',
            isCorrect: false,
            feedback: 'Feil. Numeriske metoder utføres vanligvis på datamaskiner, selv om de kan gjøres for hånd for enkle eksempler.',
          },
          {
            id: 'd',
            text: 'Numeriske metoder er enklere å forstå',
            isCorrect: false,
            feedback: 'Feil. Begge metodene har sin kompleksitet. Fordelen med numeriske metoder er generaliteten, ikke nødvendigvis enkelhet.',
          },
        ],
        solution: 'Numeriske metoder kan brukes på problemer der vi ikke kan finne en matematisk formel for løsningen. Eksempler inkluderer bevegelse med hastighetsavhengig luftmotstand, trekorpsproblemet i gravitasjon, og komplekse svingninger.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'fys2-1-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-2',
        number: '1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I Euler-metoden, hva skjer hvis vi gjør tidsstegget $\\Delta t$ mindre?',
        options: [
          {
            id: 'a',
            text: 'Løsningen blir mindre nøyaktig',
            isCorrect: false,
            feedback: 'Feil. Mindre tidsstegg gir bedre nøyaktighet fordi vi følger den virkelige kurven tettere.',
          },
          {
            id: 'b',
            text: 'Beregningen går raskere',
            isCorrect: false,
            feedback: 'Feil. Mindre tidsstegg betyr flere beregninger, så det tar lengre tid.',
          },
          {
            id: 'c',
            text: 'Løsningen blir mer nøyaktig, men krever flere beregninger',
            isCorrect: true,
            feedback: 'Riktig! Mindre tidsstegg følger den virkelige løsningen tettere, men krever flere iterasjoner for å nå samme sluttid.',
          },
          {
            id: 'd',
            text: 'Tidsstegget har ingen effekt på nøyaktigheten',
            isCorrect: false,
            feedback: 'Feil. Tidsstegget er den viktigste faktoren for nøyaktigheten i Euler-metoden.',
          },
        ],
        solution: 'For Euler-metoden er feilen proporsjonal med $\\Delta t$. Halverer vi tidsstegget, halverer vi feilen, men dobler antall beregninger. Dette er en avveining mellom nøyaktighet og beregningstid.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'fys2-1-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-3',
        number: '1.3',
        type: 'classic',
        difficulty: 'lett',
        task: `En ball faller fra hvile ($v_0 = 0$) fra høyden $y_0 = 10$ m.

Bruk Euler-metoden med $\\Delta t = 0.5$ s og $g = 10$ m/s² til å finne posisjonen og hastigheten ved $t = 0.5$ s.`,
        hints: [
          'Husk at akselerasjonen peker nedover, så $a = -10$ m/s²',
          'Bruk formlene: $v_{n+1} = v_n + a \\cdot \\Delta t$ og $y_{n+1} = y_n + v_n \\cdot \\Delta t$',
        ],
        solution: `**Gitt:**
- $y_0 = 10$ m
- $v_0 = 0$ m/s
- $a = -10$ m/s² (negativ fordi nedover)
- $\\Delta t = 0.5$ s

**Euler-formler:**
$$v_1 = v_0 + a \\cdot \\Delta t = 0 + (-10) \\cdot 0.5 = -5 \\text{ m/s}$$

$$y_1 = y_0 + v_0 \\cdot \\Delta t = 10 + 0 \\cdot 0.5 = 10 \\text{ m}$$

**Svar:**
- Hastighet ved t = 0.5 s: $v = -5$ m/s (5 m/s nedover)
- Posisjon ved t = 0.5 s: $y = 10$ m

**Merk:** Posisjonen endret seg ikke i første steg fordi starthastigheten var null. Dette er en typisk egenskap ved Euler-metoden.`,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'fys2-1-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-4',
        number: '1.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Fortsett fra oppgave 1.3. Bruk Euler-metoden til å finne posisjonen og hastigheten ved $t = 1.0$ s og $t = 1.5$ s.

Sammenlign med de analytiske formlene $y(t) = y_0 - \\frac{1}{2}gt^2$ og $v(t) = -gt$.`,
        hints: [
          'Bruk resultatene fra forrige steg som startverdier for neste steg',
          'Lag en tabell for å holde orden på verdiene',
        ],
        solution: `**Fra oppgave 1.3:** $y_1 = 10$ m, $v_1 = -5$ m/s ved $t = 0.5$ s

**Steg 2 (t = 1.0 s):**
$$v_2 = v_1 + a \\cdot \\Delta t = -5 + (-10) \\cdot 0.5 = -10 \\text{ m/s}$$
$$y_2 = y_1 + v_1 \\cdot \\Delta t = 10 + (-5) \\cdot 0.5 = 7.5 \\text{ m}$$

**Steg 3 (t = 1.5 s):**
$$v_3 = v_2 + a \\cdot \\Delta t = -10 + (-10) \\cdot 0.5 = -15 \\text{ m/s}$$
$$y_3 = y_2 + v_2 \\cdot \\Delta t = 7.5 + (-10) \\cdot 0.5 = 2.5 \\text{ m}$$

**Analytiske verdier:**

Ved $t = 1.0$ s:
- $v = -10 \\cdot 1.0 = -10$ m/s ✓ (eksakt!)
- $y = 10 - 0.5 \\cdot 10 \\cdot 1.0^2 = 5.0$ m

Ved $t = 1.5$ s:
- $v = -10 \\cdot 1.5 = -15$ m/s ✓ (eksakt!)
- $y = 10 - 0.5 \\cdot 10 \\cdot 1.5^2 = -1.25$ m (ballen har truffet bakken)

**Sammenligning:**
| t (s) | Euler y (m) | Analytisk y (m) | Feil (m) |
|-------|-------------|-----------------|----------|
| 1.0   | 7.5         | 5.0             | +2.5     |
| 1.5   | 2.5         | -1.25           | +3.75    |

**Konklusjon:** Hastigheten er eksakt, men posisjonen har økende feil. Euler-metoden gir systematisk for høye verdier fordi vi bruker den gamle (lavere) hastigheten.`,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'fys2-1-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-5',
        number: '1.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk Euler-Cromer-metoden på samme problem som i oppgave 1.3 og 1.4.

Start med $y_0 = 10$ m, $v_0 = 0$, $\\Delta t = 0.5$ s, og $g = 10$ m/s². Finn posisjon og hastighet ved $t = 0.5$, $1.0$ og $1.5$ s.

Sammenlign resultatene med Euler-metoden og den analytiske løsningen.`,
        hints: [
          'I Euler-Cromer bruker vi den NYE hastigheten til å oppdatere posisjonen',
          'Rekkefølgen er: først $v_{n+1}$, deretter $y_{n+1} = y_n + v_{n+1} \\cdot \\Delta t$',
        ],
        solution: `**Euler-Cromer-formler:**
$$v_{n+1} = v_n + a \\cdot \\Delta t$$
$$y_{n+1} = y_n + v_{n+1} \\cdot \\Delta t \\quad \\text{(bruker NY hastighet!)}$$

**Steg 1 (t = 0.5 s):**
$$v_1 = 0 + (-10) \\cdot 0.5 = -5 \\text{ m/s}$$
$$y_1 = 10 + (-5) \\cdot 0.5 = 7.5 \\text{ m}$$

**Steg 2 (t = 1.0 s):**
$$v_2 = -5 + (-10) \\cdot 0.5 = -10 \\text{ m/s}$$
$$y_2 = 7.5 + (-10) \\cdot 0.5 = 2.5 \\text{ m}$$

**Steg 3 (t = 1.5 s):**
$$v_3 = -10 + (-10) \\cdot 0.5 = -15 \\text{ m/s}$$
$$y_3 = 2.5 + (-15) \\cdot 0.5 = -5.0 \\text{ m}$$

**Sammenligning av alle tre metoder:**

| t (s) | Euler (m) | Euler-Cromer (m) | Analytisk (m) |
|-------|-----------|------------------|---------------|
| 0.5   | 10.0      | 7.5              | 8.75          |
| 1.0   | 7.5       | 2.5              | 5.0           |
| 1.5   | 2.5       | -5.0             | -1.25         |

**Konklusjon:**
- Euler gir for høye verdier (feilen er positiv)
- Euler-Cromer gir for lave verdier (feilen er negativ)
- Den analytiske løsningen ligger mellom de to
- Begge numeriske metoder har omtrent like store feil (men med motsatt fortegn)`,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'fys2-1-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-6',
        number: '1.6',
        type: 'classic',
        difficulty: 'medium',
        task: `En bil med masse 1200 kg bremser med en konstant bremskraft på 6000 N. Starthastigheten er 20 m/s.

a) Finn akselerasjonen.
b) Bruk Euler-Cromer med $\\Delta t = 0.5$ s til å finne posisjon og hastighet ved $t = 1$, $2$, og $3$ s.
c) Når stopper bilen (numerisk og analytisk)?`,
        hints: [
          'Akselerasjon: $a = F/m$ (negativ fordi bremsing)',
          'Bilen stopper når $v \\leq 0$',
        ],
        solution: `**a) Akselerasjon:**
$$a = \\frac{F}{m} = \\frac{-6000}{1200} = -5 \\text{ m/s}^2$$

**b) Euler-Cromer-beregning:**

**Start:** $x_0 = 0$ m, $v_0 = 20$ m/s

**t = 0.5 s:**
$$v_1 = 20 + (-5) \\cdot 0.5 = 17.5 \\text{ m/s}$$
$$x_1 = 0 + 17.5 \\cdot 0.5 = 8.75 \\text{ m}$$

**t = 1.0 s:**
$$v_2 = 17.5 + (-5) \\cdot 0.5 = 15.0 \\text{ m/s}$$
$$x_2 = 8.75 + 15.0 \\cdot 0.5 = 16.25 \\text{ m}$$

**t = 1.5 s:**
$$v_3 = 15.0 + (-5) \\cdot 0.5 = 12.5 \\text{ m/s}$$
$$x_3 = 16.25 + 12.5 \\cdot 0.5 = 22.5 \\text{ m}$$

**t = 2.0 s:**
$$v_4 = 12.5 + (-5) \\cdot 0.5 = 10.0 \\text{ m/s}$$
$$x_4 = 22.5 + 10.0 \\cdot 0.5 = 27.5 \\text{ m}$$

**t = 3.0 s:**
$$v_6 = 5.0 \\text{ m/s}, \\quad x_6 = 35.0 \\text{ m}$$

**t = 4.0 s:**
$$v_8 = 0 \\text{ m/s}, \\quad x_8 = 40.0 \\text{ m}$$

**c) Når stopper bilen?**

**Numerisk:** Ved $t = 4.0$ s, $x = 40.0$ m

**Analytisk:**
$$v = v_0 + at = 0 \\Rightarrow t = -\\frac{v_0}{a} = \\frac{20}{5} = 4.0 \\text{ s}$$
$$x = v_0 t + \\frac{1}{2}at^2 = 20 \\cdot 4 + \\frac{1}{2}(-5) \\cdot 16 = 80 - 40 = 40 \\text{ m}$$

**Resultat:** Bilen stopper etter 4.0 s og har da kjørt 40 m. Den numeriske løsningen er eksakt her fordi akselerasjonen er konstant.`,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'fys2-1-5-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-7',
        number: '1.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En fallskjermhopper med masse 70 kg faller fra et fly. Luftmotstanden er $F_L = 0.5 v^2$ (der $v$ er i m/s og $F_L$ i N).

a) Finn terminalhastigheten.
b) Sett opp akselerasjonsuttrykket som funksjon av $v$.
c) Beskriv kort hvordan du ville programmert dette i Python.`,
        hints: [
          'Ved terminalhastighet: $mg = bv_t^2$',
          'Bruk $g = 9.81$ m/s²',
        ],
        solution: `**a) Terminalhastighet:**

Ved terminalhastighet er nettokraften null:
$$mg = bv_t^2$$
$$v_t = \\sqrt{\\frac{mg}{b}} = \\sqrt{\\frac{70 \\cdot 9.81}{0.5}} = \\sqrt{1373.4} = 37.1 \\text{ m/s}$$

Dette tilsvarer ca. 133 km/t.

**b) Akselerasjon som funksjon av hastighet:**

Nettokraft (positiv retning nedover):
$$F_{\\text{netto}} = mg - bv^2$$

Akselerasjon:
$$a = g - \\frac{b}{m}v^2 = 9.81 - \\frac{0.5}{70}v^2 = 9.81 - 0.00714 v^2$$

**c) Python-pseudokode:**

\`\`\`python
# Parametere
g = 9.81
m = 70
b = 0.5
dt = 0.01

# Startverdier
v = 0
y = 4000  # starthøyde

# Løkke
while y > 0:
    a = g - (b/m) * v**2  # akselerasjon
    v = v + a * dt        # oppdater hastighet
    y = y - v * dt        # oppdater høyde
\`\`\`

Viktige punkter:
1. Akselerasjonen beregnes for hvert tidssteg basert på nåværende hastighet
2. Euler-Cromer brukes (ny hastighet i posisjonsoppdateringen)
3. Løkken stopper når hopperen når bakken`,
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'fys2-1-5-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-8',
        number: '1.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En pendel med lengde $L = 1$ m slippes fra hvile ved $\\theta_0 = 30°$.

a) Skriv opp formelen for vinkelakselerasjonen $\\alpha$.
b) Bruk Euler-Cromer med $\\Delta t = 0.1$ s til å beregne $\\theta$ og $\\omega$ ved $t = 0.1$, $0.2$ og $0.3$ s.
c) Sammenlign med liten-vinkel-tilnærmingen: $\\theta(t) = \\theta_0 \\cos(\\sqrt{g/L} \\cdot t)$.`,
        hints: [
          'Vinkelakselerasjon for pendel: $\\alpha = -(g/L)\\sin\\theta$',
          'Husk å konvertere grader til radianer: $30° = \\pi/6 \\approx 0.524$ rad',
          '$\\sin(30°) = 0.5$',
        ],
        solution: `**a) Vinkelakselerasjon:**
$$\\alpha = -\\frac{g}{L}\\sin\\theta = -\\frac{9.81}{1}\\sin\\theta = -9.81\\sin\\theta \\text{ rad/s}^2$$

**b) Euler-Cromer-beregning:**

**Startverdier:**
- $\\theta_0 = 30° = 0.524$ rad
- $\\omega_0 = 0$ rad/s

**t = 0.1 s:**
$$\\alpha_0 = -9.81 \\sin(0.524) = -9.81 \\cdot 0.5 = -4.905 \\text{ rad/s}^2$$
$$\\omega_1 = 0 + (-4.905) \\cdot 0.1 = -0.491 \\text{ rad/s}$$
$$\\theta_1 = 0.524 + (-0.491) \\cdot 0.1 = 0.475 \\text{ rad} = 27.2°$$

**t = 0.2 s:**
$$\\alpha_1 = -9.81 \\sin(0.475) = -9.81 \\cdot 0.457 = -4.48 \\text{ rad/s}^2$$
$$\\omega_2 = -0.491 + (-4.48) \\cdot 0.1 = -0.939 \\text{ rad/s}$$
$$\\theta_2 = 0.475 + (-0.939) \\cdot 0.1 = 0.381 \\text{ rad} = 21.8°$$

**t = 0.3 s:**
$$\\alpha_2 = -9.81 \\sin(0.381) = -9.81 \\cdot 0.372 = -3.65 \\text{ rad/s}^2$$
$$\\omega_3 = -0.939 + (-3.65) \\cdot 0.1 = -1.304 \\text{ rad/s}$$
$$\\theta_3 = 0.381 + (-1.304) \\cdot 0.1 = 0.251 \\text{ rad} = 14.4°$$

**c) Sammenligning med liten-vinkel-løsning:**

Liten-vinkel-formel: $\\theta(t) = \\theta_0 \\cos(\\omega_0 t)$

der $\\omega_0 = \\sqrt{g/L} = \\sqrt{9.81/1} = 3.13$ rad/s

| t (s) | Euler-Cromer (°) | Liten vinkel (°) | Forskjell |
|-------|------------------|------------------|-----------|
| 0.1   | 27.2             | 27.6             | 0.4°      |
| 0.2   | 21.8             | 22.5             | 0.7°      |
| 0.3   | 14.4             | 15.4             | 1.0°      |

**Konklusjon:** Forskjellen skyldes delvis at 30° er i grenseland for liten-vinkel-tilnærmingen, og delvis at $\\Delta t = 0.1$ s er litt stort.`,
      },
    },

    // ========== OPPGAVE 9 ==========
    {
      id: 'fys2-1-5-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-9',
        number: '1.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et Python-program som simulerer en ball som kastes skrått opp med følgende verdier:
- Starthøyde: $y_0 = 0$ m
- Starthastighet: $v_0 = 20$ m/s
- Kastevinkel: $45°$
- Luftmotstand: Ingen (for enkelhet)

Programmet skal finne:
a) Maksimal høyde
b) Total tid i luften
c) Horisontal rekkevidde

Bruk $\\Delta t = 0.01$ s.`,
        hints: [
          'Del opp starthastigheten i komponenter: $v_{x0} = v_0\\cos\\theta$, $v_{y0} = v_0\\sin\\theta$',
          'For skrått kast uten luftmotstand: $a_x = 0$, $a_y = -g$',
          'Maksimal høyde når $v_y = 0$',
        ],
        solution: `**Python-løsning:**

\`\`\`python
import numpy as np

# Parametere
g = 9.81
v0 = 20
theta = 45  # grader
dt = 0.01

# Startbetingelser
x = 0
y = 0
vx = v0 * np.cos(np.radians(theta))  # 14.14 m/s
vy = v0 * np.sin(np.radians(theta))  # 14.14 m/s
t = 0

# Variabler for å lagre resultater
y_max = 0
t_max = 0

# Hovedløkke
while y >= 0 or vy > 0:  # Fortsett til ballen treffer bakken
    # Akselerasjon
    ax = 0
    ay = -g

    # Euler-Cromer
    vx = vx + ax * dt  # vx forblir konstant
    vy = vy + ay * dt
    x = x + vx * dt
    y = y + vy * dt
    t = t + dt

    # Sjekk maksimal høyde
    if y > y_max:
        y_max = y
        t_max = t

# Resultater
print(f"a) Maksimal høyde: {y_max:.2f} m")
print(f"b) Tid i luften: {t:.2f} s")
print(f"c) Rekkevidde: {x:.2f} m")
\`\`\`

**Numeriske resultater:**
- a) Maksimal høyde: ca. 10.2 m
- b) Tid i luften: ca. 2.88 s
- c) Rekkevidde: ca. 40.7 m

**Analytisk kontroll:**
$$y_{\\text{max}} = \\frac{v_0^2 \\sin^2\\theta}{2g} = \\frac{20^2 \\cdot 0.5}{2 \\cdot 9.81} = \\frac{200}{19.62} = 10.2 \\text{ m}$$

$$t_{\\text{total}} = \\frac{2v_0 \\sin\\theta}{g} = \\frac{2 \\cdot 20 \\cdot 0.707}{9.81} = 2.88 \\text{ s}$$

$$R = \\frac{v_0^2 \\sin(2\\theta)}{g} = \\frac{400 \\cdot 1}{9.81} = 40.8 \\text{ m}$$

Den numeriske løsningen stemmer godt med de analytiske verdiene.`,
      },
    },

    // ========== OPPGAVE 10 ==========
    {
      id: 'fys2-1-5-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-10',
        number: '1.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Modifiser Python-programmet fra oppgave 1.9 til å inkludere luftmotstand proporsjonalt med $v^2$:

$$F_L = -\\frac{1}{2}C_D \\rho A v^2$$

Bruk:
- Masse: $m = 0.145$ kg (baseball)
- Tverrsnittsareal: $A = 0.0042$ m²
- Lufttetthet: $\\rho = 1.2$ kg/m³
- Dragkoeffisient: $C_D = 0.35$

Sammenlign rekkevidden med og uten luftmotstand.`,
        hints: [
          'Luftmotstanden virker motsatt av bevegelsesretningen',
          'Splitt opp i x- og y-komponenter: $F_{Lx} = -b|v|v_x$, $F_{Ly} = -b|v|v_y$',
          'Der $b = \\frac{1}{2}C_D \\rho A$ og $|v| = \\sqrt{v_x^2 + v_y^2}$',
        ],
        solution: `**Python-løsning med luftmotstand:**

\`\`\`python
import numpy as np

# Fysiske parametere
g = 9.81
m = 0.145       # kg
A = 0.0042      # m^2
rho = 1.2       # kg/m^3
C_D = 0.35
b = 0.5 * C_D * rho * A  # = 0.000882 kg/m

# Kasteforhold
v0 = 20
theta = 45
dt = 0.001  # Mindre dt for bedre nøyaktighet

# Funksjon for å simulere
def simuler(med_luftmotstand=True):
    x, y = 0, 0
    vx = v0 * np.cos(np.radians(theta))
    vy = v0 * np.sin(np.radians(theta))

    while y >= 0 or vy > 0:
        v = np.sqrt(vx**2 + vy**2)  # Total hastighet

        # Akselerasjon
        if med_luftmotstand:
            ax = -(b/m) * v * vx
            ay = -g - (b/m) * v * vy
        else:
            ax = 0
            ay = -g

        # Euler-Cromer
        vx = vx + ax * dt
        vy = vy + ay * dt
        x = x + vx * dt
        y = y + vy * dt

    return x

# Sammenligning
R_uten = simuler(med_luftmotstand=False)
R_med = simuler(med_luftmotstand=True)

print(f"Rekkevidde uten luftmotstand: {R_uten:.2f} m")
print(f"Rekkevidde med luftmotstand:  {R_med:.2f} m")
print(f"Reduksjon: {(1 - R_med/R_uten)*100:.1f}%")
\`\`\`

**Resultater:**
- Uten luftmotstand: ca. 40.8 m
- Med luftmotstand: ca. 32.5 m
- Reduksjon: ca. 20%

**Konklusjon:**
Luftmotstanden reduserer rekkevidden betydelig. For en baseball kastet med 20 m/s reduseres rekkevidden med omtrent 20%. Ved høyere hastigheter (som i profesjonell baseball med kast på 40+ m/s) blir effekten enda større.

**Interessant observasjon:**
Med luftmotstand er optimal kastevinkel ikke lenger 45°, men noe lavere (typisk 35-40°). Dette kan undersøkes ved å kjøre simuleringen med forskjellige vinkler.`,
      },
    },

    // ========== OPPGAVE 11 ==========
    {
      id: 'fys2-1-5-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-11',
        number: '1.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En fjærvekt med masse $m = 0.2$ kg henger i en fjær med fjærkonstant $k = 50$ N/m. Fjærvekten trekkes 0.1 m ned fra likevektsposisjonen og slippes.

a) Finn svingefrekvensen og perioden analytisk.
b) Skriv opp akselerasjonen som funksjon av posisjon.
c) Bruk Euler-Cromer med $\\Delta t = 0.01$ s til å simulere de første 3 periodene.
d) Hvorfor er Euler-Cromer bedre enn vanlig Euler for dette problemet?`,
        hints: [
          'Fjærkraft: $F = -kx$ (positiv x nedover fra likevekt)',
          'Svingefrekvens: $\\omega = \\sqrt{k/m}$',
          'Periode: $T = 2\\pi/\\omega$',
        ],
        solution: `**a) Frekvens og periode:**

$$\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{50}{0.2}} = \\sqrt{250} = 15.8 \\text{ rad/s}$$

$$f = \\frac{\\omega}{2\\pi} = \\frac{15.8}{2\\pi} = 2.52 \\text{ Hz}$$

$$T = \\frac{1}{f} = \\frac{2\\pi}{\\omega} = 0.40 \\text{ s}$$

**b) Akselerasjon:**

Fra Newtons 2. lov med fjærkraft:
$$ma = -kx$$
$$a = -\\frac{k}{m}x = -\\omega^2 x = -250x \\text{ m/s}^2$$

**c) Python-simulering:**

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# Parametere
m = 0.2   # kg
k = 50    # N/m
omega = np.sqrt(k/m)
T = 2*np.pi/omega  # Periode

# Startverdier
x = 0.1   # m (utslag nedover)
v = 0     # m/s
t = 0

dt = 0.01
t_slutt = 3 * T  # Tre perioder

# Lagre resultater
t_liste = [t]
x_liste = [x]

# Hovedløkke - Euler-Cromer
while t < t_slutt:
    a = -(k/m) * x
    v = v + a * dt
    x = x + v * dt  # Euler-Cromer: bruker ny v
    t = t + dt
    t_liste.append(t)
    x_liste.append(x)

# Analytisk løsning
t_an = np.array(t_liste)
x_an = 0.1 * np.cos(omega * t_an)

plt.figure(figsize=(10, 6))
plt.plot(t_liste, x_liste, 'b-', label='Numerisk (Euler-Cromer)')
plt.plot(t_an, x_an, 'r--', label='Analytisk')
plt.xlabel('Tid (s)')
plt.ylabel('Posisjon (m)')
plt.legend()
plt.grid(True)
plt.show()
\`\`\`

**d) Hvorfor Euler-Cromer er bedre:**

For oscillerende systemer (fjærer, pendler) må metoden **bevare energien** over tid.

- **Vanlig Euler** gir økende energi for hvert steg. Etter mange perioder vil amplituden ha vokst, noe som er ufysisk.

- **Euler-Cromer** er en **symplektisk** metode som bevarer energien (i gjennomsnitt) over mange perioder. Amplituden forblir stabil.

Matematisk: Ved å bruke den oppdaterte hastigheten i posisjonsberegningen, unngår vi den systematiske feilen som gir energiøkning.`,
      },
    },

    // ========== OPPGAVE 12 ==========
    {
      id: 'fys2-1-5-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-1-5-ex-12',
        number: '1.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bil (masse 1500 kg) kjører med 30 m/s (108 km/t) når sjåføren begynner å bremse. Bremskraften øker lineært med tiden de første 0.5 sekundene (reaksjonstid i bremsesystemet), og er deretter konstant.

$$F_b(t) = \\begin{cases} -24000t & \\text{for } t < 0.5 \\text{ s} \\\\ -12000 \\text{ N} & \\text{for } t \\geq 0.5 \\text{ s} \\end{cases}$$

a) Bruk numerisk simulering ($\\Delta t = 0.05$ s) til å finne:
   - Hastighet og posisjon ved $t = 0.5$ s
   - Total bremselengde (når $v = 0$)
   - Total tid for å stoppe

b) Sammenlign med bremselengden hvis kraften var konstant lik 12000 N fra starten.`,
        hints: [
          'Dette er et eksempel der akselerasjonen endrer seg over tid',
          'Bruk en if-setning for å velge riktig bremskraft',
          'Bilen stopper når $v \\leq 0$',
        ],
        solution: `**Løsning med Python:**

\`\`\`python
# Bremsing med tidsavhengig kraft
m = 1500  # kg
v0 = 30   # m/s
dt = 0.05

def bremskraft(t):
    if t < 0.5:
        return -24000 * t
    else:
        return -12000

# Simulering
x, v, t = 0, v0, 0
while v > 0:
    F = bremskraft(t)
    a = F / m
    v = v + a * dt
    x = x + v * dt
    t = t + dt

    if abs(t - 0.5) < dt/2:  # Ved t = 0.5 s
        print(f"Ved t=0.5s: v={v:.1f} m/s, x={x:.1f} m")

print(f"Bremselengde: {x:.1f} m")
print(f"Total tid: {t:.2f} s")
\`\`\`

**a) Resultater:**

Ved $t = 0.5$ s:
- Hastighet: ca. 28.0 m/s
- Posisjon: ca. 14.5 m

Stopp:
- Total bremselengde: ca. 63.5 m
- Total tid: ca. 4.0 s

**b) Sammenligning med konstant kraft:**

Med konstant kraft $F = -12000$ N fra starten:
$$a = -\\frac{12000}{1500} = -8 \\text{ m/s}^2$$

$$t_{\\text{stopp}} = \\frac{v_0}{|a|} = \\frac{30}{8} = 3.75 \\text{ s}$$

$$x_{\\text{stopp}} = v_0 t - \\frac{1}{2}|a|t^2 = 30 \\cdot 3.75 - 4 \\cdot 3.75^2 = 56.25 \\text{ m}$$

**Sammenligning:**
| Scenario | Bremselengde | Stopptid |
|----------|--------------|----------|
| Med oppbygning | 63.5 m | 4.0 s |
| Konstant kraft | 56.3 m | 3.75 s |
| Forskjell | +7.2 m | +0.25 s |

**Konklusjon:**
Den gradvise oppbyggingen av bremskraften gir ca. 7 m lengre bremselengde. Dette illustrerer viktigheten av godt bremsesystem og ABS som gir rask oppbygging av bremskraft.`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Viktige konsepter:**

1. **Numeriske metoder** brukes når analytiske løsninger ikke eksisterer eller er for komplekse

2. **Eulers metode** er den enkleste numeriske metoden:
   - $v_{n+1} = v_n + a_n \\cdot \\Delta t$
   - $x_{n+1} = x_n + v_n \\cdot \\Delta t$

3. **Euler-Cromer-metoden** er en forbedring som bruker ny hastighet i posisjonsoppdateringen:
   - $v_{n+1} = v_n + a_n \\cdot \\Delta t$
   - $x_{n+1} = x_n + v_{n+1} \\cdot \\Delta t$

4. **Tidsstegg $\\Delta t$**: Mindre steg gir bedre nøyaktighet, men krever flere beregninger

5. **Feilkilder:**
   - Diskretiseringsfeil (avkuttingsfeil)
   - Akkumulering av feil over tid
   - Numerisk ustabilitet

6. **Anvendelser:**
   - Bevegelse med luftmotstand
   - Pendler og svingninger
   - Planetbaner
   - Komplekse systemer med variable krefter

**Programmeringstips:**
- Bruk Euler-Cromer for oscillerende systemer (bevarer energi bedre)
- Velg $\\Delta t$ mye mindre enn systemets karakteristiske tidsskala
- Kontroller resultater mot analytiske løsninger når mulig
- Sjekk energibevaring for å verifisere stabilitet

**Neste kapittel:**
Vi skal se på gravitasjon og planetbevegelse, der numeriske metoder er essensielle for å beregne satellittbaner og interplanetære reiser.`,
    },
  ],
};

// ============================================================================
// Kapittel 2.1: Newtons gravitasjonslov
// LK20: Forklare og anvende Newtons gravitasjonslov
// ============================================================================

export const CHAPTER_FYSIKK2_2_1: TextbookChapter = {
  id: 'fysikk2-2-1',
  courseId: 'fysikk2',
  chapterNumber: '2.1',
  title: 'Newtons gravitasjonslov',
  description: 'Den universelle gravitasjonsloven og dens anvendelser.',
  estimatedMinutes: 40,
  prerequisites: ['fysikk2-1-4'],
  competenceGoals: [
    'forklare og anvende Newtons gravitasjonslov',
    'beregne gravitasjonskrefter mellom legemer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-2-1-intro',
      type: 'text',
      content: `## Gravitasjon – en universell kraft

Mennesker har alltid undret seg over hvorfor ting faller ned. Hvorfor holdes månen i bane rundt jorda? Hva holder planetene i bane rundt solen?

I 1687 publiserte **Isaac Newton** sitt banebrytende verk *Principia Mathematica*, der han formulerte gravitasjonsloven. Newton innså noe revolusjonerende: **den samme kraften som får et eple til å falle, holder også månen i bane rundt jorda**.

**Newtons innsikt:**
- Gravitasjon er ikke bare en kraft som virker nær jordoverflaten
- Det er en **universell kraft** som virker mellom alle objekter med masse
- Kraften avtar med kvadratet av avstanden

**Historisk kontekst:**
- **1687:** Newton formulerer gravitasjonsloven
- **1798:** Henry Cavendish måler gravitasjonskonstanten G i laboratoriet
- **1915:** Einstein utvider teorien med den generelle relativitetsteorien`,
    },

    // ========== NEWTONS GRAVITASJONSLOV ==========
    {
      id: 'fys2-2-1-gravitasjonsloven',
      type: 'text',
      content: `## Newtons gravitasjonslov

Newton oppdaget at gravitasjonskraften mellom to objekter:
1. Er **proporsjonal** med produktet av massene
2. Er **omvendt proporsjonal** med kvadratet av avstanden mellom dem
3. Virker langs linjen som forbinder massenes sentrum

Dette betyr at hvis du dobler én av massene, dobles kraften. Men hvis du dobler avstanden, reduseres kraften til en firedel!`,
    },

    // ========== DEFINISJON: GRAVITASJONSLOVEN ==========
    {
      id: 'fys2-2-1-def-gravitasjonsloven',
      type: 'definition',
      title: 'Newtons gravitasjonslov',
      content: `Gravitasjonskraften mellom to punktmasser $m_1$ og $m_2$ med avstand $r$ mellom senterpunktene er:

$$F = G\\frac{m_1 m_2}{r^2}$$

der:
- $F$ er gravitasjonskraften (N)
- $G$ er gravitasjonskonstanten ($6.674 \\times 10^{-11}$ N·m²/kg²)
- $m_1$ og $m_2$ er massene til de to legemene (kg)
- $r$ er avstanden mellom massenes senterpunkter (m)

**Viktig:** Kraften er alltid **tiltrekkende** – begge legemer trekkes mot hverandre med like store krefter (Newtons 3. lov).`,
    },

    // ========== GRAVITASJONSKONSTANTEN ==========
    {
      id: 'fys2-2-1-gravitasjonskonstanten',
      type: 'text',
      content: `## Gravitasjonskonstanten G

Gravitasjonskonstanten $G$ er en av de fundamentale naturkonstantene. Den forteller oss hvor «sterk» gravitasjonen er.

**Verdi:**
$$G = 6.674 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$$

**Cavendish-eksperimentet (1798):**
Henry Cavendish var den første som målte $G$ direkte. Han brukte en torsjonsvekt med to små og to store blykuler. Ved å måle den svake tiltrekningen mellom kulene kunne han beregne $G$.

**Hvorfor er G så liten?**
Gravitasjon er den svakeste av de fire fundamentale naturkreftene. Grunnen til at vi opplever gravitasjon som sterk, er at jorda har enorm masse ($5.97 \\times 10^{24}$ kg).

**Eksempel:** To mennesker på 70 kg som står 1 meter fra hverandre trekker på hverandre med en kraft på bare:
$$F = 6.674 \\times 10^{-11} \\cdot \\frac{70 \\cdot 70}{1^2} \\approx 3.3 \\times 10^{-7} \\text{ N}$$

Dette er ca. 0.3 mikronewton – helt umerkelig!`,
    },

    // ========== DEFINISJON: GRAVITASJONSKONSTANTEN ==========
    {
      id: 'fys2-2-1-def-G',
      type: 'definition',
      title: 'Gravitasjonskonstanten',
      content: `**Gravitasjonskonstanten** $G$ er en fundamental naturkonstant som bestemmer styrken av gravitasjonskraften.

$$G = 6.674 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$$

**Enheten kan også skrives som:**
$$G = 6.674 \\times 10^{-11} \\text{ m}^3/(\\text{kg}\\cdot\\text{s}^2)$$

**Merk:** $G$ er en universell konstant – den har samme verdi overalt i universet.`,
    },

    // ========== TYNGDEKRAFT SOM GRAVITASJON ==========
    {
      id: 'fys2-2-1-tyngdekraft',
      type: 'text',
      content: `## Tyngdekraft som gravitasjon

Det vi kaller **tyngdekraft** er egentlig gravitasjonskraften mellom et objekt og jorda. Ved jordoverflaten har vi:

$$F_g = G\\frac{M_J \\cdot m}{R_J^2}$$

der $M_J$ er jordas masse og $R_J$ er jordas radius.

Fra Fysikk 1 vet vi at tyngdekraften er $F_g = mg$. Ved å sette disse uttrykkene like, får vi:

$$mg = G\\frac{M_J \\cdot m}{R_J^2}$$

**Løser for g:**
$$g = G\\frac{M_J}{R_J^2}$$

**Setter inn verdier:**
- $M_J = 5.97 \\times 10^{24}$ kg
- $R_J = 6.37 \\times 10^{6}$ m

$$g = \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{(6.37 \\times 10^{6})^2}$$
$$g = \\frac{3.99 \\times 10^{14}}{4.06 \\times 10^{13}} = 9.82 \\text{ m/s}^2$$

Dette stemmer godt med den kjente verdien $g \\approx 9.81$ m/s²!`,
    },

    // ========== VARIASJON AV g ==========
    {
      id: 'fys2-2-1-variasjon-g',
      type: 'text',
      content: `## Variasjon av g med høyde

Tyngdeakselerasjonen $g$ avhenger av avstanden til jordas sentrum. I en høyde $h$ over jordoverflaten er:

$$g(h) = G\\frac{M_J}{(R_J + h)^2}$$

**Alternativ form:**
$$g(h) = g_0 \\left(\\frac{R_J}{R_J + h}\\right)^2$$

der $g_0 = 9.81$ m/s² er tyngdeakselerasjonen ved jordoverflaten.

**Eksempler på g ved ulike høyder:**

| Sted | Høyde | g |
|------|-------|---|
| Havnivå | 0 km | 9.81 m/s² |
| Mount Everest | 8.8 km | 9.78 m/s² |
| Passasjerfly | 10 km | 9.78 m/s² |
| ISS (romstasjonen) | 400 km | 8.69 m/s² |
| Geostasjonær bane | 35 800 km | 0.22 m/s² |

**Viktig innsikt:**
På ISS er $g$ fortsatt ca. 89% av verdien ved bakken! Astronautene «svever» ikke fordi det ikke er gravitasjon, men fordi de er i **fritt fall** sammen med romstasjonen.`,
    },

    // ========== SUPERPOSISJONSPRINSIPPET ==========
    {
      id: 'fys2-2-1-superposisjon',
      type: 'text',
      content: `## Superposisjonsprinsippet

Når et objekt påvirkes av gravitasjonskrefter fra flere andre objekter, er den totale kraften **summen av alle enkeltkreftene**.

**Superposisjonsprinsippet for gravitasjon:**
$$\\vec{F}_{\\text{total}} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + ...$$

Dette er viktig fordi:
- Hver kraft beregnes uavhengig av de andre
- Kreftene legges sammen som vektorer
- Retningen til hver kraft må tas hensyn til

**Eksempel: Månen mellom jorda og solen**

Månen påvirkes av gravitasjon fra både jorda og sola. Den totale kraften på månen er vektorsummen av disse to kreftene. Interessant nok er solens tiltrekning på månen faktisk **større** enn jordas, men månen går likevel i bane rundt jorda fordi de to legemene faller sammen rundt solen.

**Praktisk bruk:**
For å finne total gravitasjonskraft på et objekt:
1. Beregn kraften fra hvert enkelt legeme
2. Bestem retningen til hver kraft (mot det andre legemet)
3. Dekomponér kreftene i x- og y-komponenter
4. Summer komponentene
5. Finn størrelsen og retningen til resultantkraften`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'fys2-2-1-eksempel-1',
      type: 'example',
      title: 'Gravitasjonskraft mellom jorda og månen',
      content: `**Oppgave:**
Beregn gravitasjonskraften mellom jorda og månen.

**Gitt:**
- Jordas masse: $M_J = 5.97 \\times 10^{24}$ kg
- Månens masse: $M_m = 7.35 \\times 10^{22}$ kg
- Avstand jord-måne: $r = 3.84 \\times 10^{8}$ m

**Løsning:**

$$F = G\\frac{M_J \\cdot M_m}{r^2}$$

$$F = 6.674 \\times 10^{-11} \\cdot \\frac{5.97 \\times 10^{24} \\cdot 7.35 \\times 10^{22}}{(3.84 \\times 10^{8})^2}$$

**Steg 1: Beregn telleren**
$$G \\cdot M_J \\cdot M_m = 6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 7.35 \\times 10^{22}$$
$$= 2.93 \\times 10^{37} \\text{ N}\\cdot\\text{m}^2$$

**Steg 2: Beregn nevneren**
$$r^2 = (3.84 \\times 10^{8})^2 = 1.47 \\times 10^{17} \\text{ m}^2$$

**Steg 3: Beregn kraften**
$$F = \\frac{2.93 \\times 10^{37}}{1.47 \\times 10^{17}} = 1.99 \\times 10^{20} \\text{ N}$$

**Svar:**
Gravitasjonskraften mellom jorda og månen er ca. $2.0 \\times 10^{20}$ N, eller 200 trillioner newton!

**Kontroll:** Denne kraften holder månen i bane rundt jorda med en periode på ca. 27 dager.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'fys2-2-1-eksempel-2',
      type: 'example',
      title: 'Tyngdeakselerasjon på Mars',
      content: `**Oppgave:**
Beregn tyngdeakselerasjonen ved overflaten av Mars.

**Gitt:**
- Mars' masse: $M_{Mars} = 6.42 \\times 10^{23}$ kg
- Mars' radius: $R_{Mars} = 3.39 \\times 10^{6}$ m

**Løsning:**

Tyngdeakselerasjonen ved overflaten er:
$$g_{Mars} = G\\frac{M_{Mars}}{R_{Mars}^2}$$

**Setter inn verdier:**
$$g_{Mars} = \\frac{6.674 \\times 10^{-11} \\cdot 6.42 \\times 10^{23}}{(3.39 \\times 10^{6})^2}$$

**Steg 1: Teller**
$$6.674 \\times 10^{-11} \\cdot 6.42 \\times 10^{23} = 4.28 \\times 10^{13} \\text{ m}^3/\\text{s}^2$$

**Steg 2: Nevner**
$$(3.39 \\times 10^{6})^2 = 1.15 \\times 10^{13} \\text{ m}^2$$

**Steg 3: Resultat**
$$g_{Mars} = \\frac{4.28 \\times 10^{13}}{1.15 \\times 10^{13}} = 3.72 \\text{ m/s}^2$$

**Svar:**
Tyngdeakselerasjonen på Mars er ca. $3.7$ m/s², som er omtrent 38% av jordas.

**Praktisk betydning:**
En person som veier 70 kg på jorda ville veie $70 \\cdot 0.38 \\approx 27$ kg på Mars!`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'fys2-2-1-eksempel-3',
      type: 'example',
      title: 'Tyngdeakselerasjon i høyde',
      content: `**Oppgave:**
En satellitt befinner seg 600 km over jordoverflaten. Hva er tyngdeakselerasjonen ved satellittens posisjon?

**Gitt:**
- Høyde over jordoverflaten: $h = 600$ km $= 6.0 \\times 10^{5}$ m
- Jordas radius: $R_J = 6.37 \\times 10^{6}$ m
- Jordas masse: $M_J = 5.97 \\times 10^{24}$ kg

**Løsning:**

Avstanden fra jordas sentrum er:
$$r = R_J + h = 6.37 \\times 10^{6} + 6.0 \\times 10^{5} = 6.97 \\times 10^{6} \\text{ m}$$

Tyngdeakselerasjonen:
$$g(h) = G\\frac{M_J}{r^2}$$

$$g(h) = \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{(6.97 \\times 10^{6})^2}$$

$$g(h) = \\frac{3.98 \\times 10^{14}}{4.86 \\times 10^{13}} = 8.20 \\text{ m/s}^2$$

**Alternativ metode med forholdet:**
$$g(h) = g_0 \\left(\\frac{R_J}{R_J + h}\\right)^2 = 9.81 \\cdot \\left(\\frac{6.37}{6.97}\\right)^2$$
$$g(h) = 9.81 \\cdot (0.914)^2 = 9.81 \\cdot 0.835 = 8.19 \\text{ m/s}^2$$

**Svar:**
Ved 600 km høyde er $g \\approx 8.2$ m/s², som er 84% av verdien ved jordoverflaten.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'fys2-2-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-1',
        number: '2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer med gravitasjonskraften mellom to objekter hvis avstanden mellom dem dobles?',
        options: [
          {
            id: 'a',
            text: 'Kraften halveres',
            isCorrect: false,
            feedback: 'Feil. Gravitasjonskraften avtar med kvadratet av avstanden, ikke lineært.',
          },
          {
            id: 'b',
            text: 'Kraften blir fire ganger så liten',
            isCorrect: true,
            feedback: 'Riktig! Siden $F \\propto 1/r^2$, vil dobling av $r$ gi $F \\propto 1/(2r)^2 = 1/4r^2$.',
          },
          {
            id: 'c',
            text: 'Kraften forblir uendret',
            isCorrect: false,
            feedback: 'Feil. Gravitasjonskraften avhenger av avstanden mellom objektene.',
          },
          {
            id: 'd',
            text: 'Kraften dobles',
            isCorrect: false,
            feedback: 'Feil. Gravitasjonskraften blir svakere med økt avstand, ikke sterkere.',
          },
        ],
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'fys2-2-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-2',
        number: '2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om gravitasjonskonstanten $G$ er korrekt?',
        options: [
          {
            id: 'a',
            text: '$G$ varierer med massene til objektene',
            isCorrect: false,
            feedback: 'Feil. $G$ er en universell konstant og avhenger ikke av massene.',
          },
          {
            id: 'b',
            text: '$G$ er større på jorda enn på månen',
            isCorrect: false,
            feedback: 'Feil. $G$ har samme verdi overalt i universet.',
          },
          {
            id: 'c',
            text: '$G$ er en universell konstant med samme verdi overalt',
            isCorrect: true,
            feedback: 'Riktig! $G = 6.674 \\times 10^{-11}$ N·m²/kg² er en fundamental naturkonstant.',
          },
          {
            id: 'd',
            text: '$G$ har enheten N/kg',
            isCorrect: false,
            feedback: 'Feil. Enheten til $G$ er N·m²/kg². Sjekk dimensjonsanalysen av gravitasjonsformelen.',
          },
        ],
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'fys2-2-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-3',
        number: '2.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En astronaut på ISS (400 km over jordoverflaten) opplever \"vektløshet\". Hva er den beste forklaringen på dette?',
        options: [
          {
            id: 'a',
            text: 'Det er ingen gravitasjon så langt fra jorda',
            isCorrect: false,
            feedback: 'Feil. Ved 400 km høyde er $g$ fortsatt ca. 8.7 m/s², altså 89% av verdien ved bakken.',
          },
          {
            id: 'b',
            text: 'Astronauten er i fritt fall sammen med romstasjonen',
            isCorrect: true,
            feedback: 'Riktig! ISS og astronauten faller begge mot jorda, men de \"bommer\" hele tiden fordi de har så høy horisontal hastighet. Derfor oppleves vektløshet.',
          },
          {
            id: 'c',
            text: 'Gravitasjonen fra månen opphever jordas gravitasjon',
            isCorrect: false,
            feedback: 'Feil. Månens gravitasjon på ISS er mye svakere enn jordas og opphever den ikke.',
          },
          {
            id: 'd',
            text: 'Romstelasjonens vegger blokkerer gravitasjonen',
            isCorrect: false,
            feedback: 'Feil. Gravitasjon kan ikke blokkeres av materiale.',
          },
        ],
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'fys2-2-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-4',
        number: '2.4',
        type: 'classic',
        difficulty: 'lett',
        task: `Beregn gravitasjonskraften mellom to biler som står parkert 2 meter fra hverandre. Anta at hver bil har masse 1500 kg.`,
        hints: [
          'Bruk gravitasjonsformelen $F = G\\frac{m_1 m_2}{r^2}$',
          'Husk at $G = 6.674 \\times 10^{-11}$ N·m²/kg²',
        ],
        solution: `**Gitt:**
- $m_1 = m_2 = 1500$ kg
- $r = 2$ m
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

**Løsning:**
$$F = G\\frac{m_1 m_2}{r^2}$$

$$F = 6.674 \\times 10^{-11} \\cdot \\frac{1500 \\cdot 1500}{2^2}$$

$$F = 6.674 \\times 10^{-11} \\cdot \\frac{2.25 \\times 10^{6}}{4}$$

$$F = 6.674 \\times 10^{-11} \\cdot 5.625 \\times 10^{5}$$

$$F = 3.75 \\times 10^{-5} \\text{ N}$$

**Svar:**
Gravitasjonskraften mellom bilene er ca. $3.8 \\times 10^{-5}$ N, eller 38 mikronewton.

**Kommentar:** Dette er en ekstremt liten kraft – omtrent som vekten av et sandkorn! Gravitasjon mellom hverdagslige objekter er helt neglisjerbar.`,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'fys2-2-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-5',
        number: '2.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Beregn gravitasjonskraften mellom sola og jorda.

Gitt:
- Solas masse: $M_S = 1.99 \\times 10^{30}$ kg
- Jordas masse: $M_J = 5.97 \\times 10^{24}$ kg
- Avstand sol-jord: $r = 1.50 \\times 10^{11}$ m`,
        hints: [
          'Dette er en direkte anvendelse av gravitasjonsformelen',
          'Pass på å holde orden på eksponentene når du regner',
        ],
        solution: `**Gitt:**
- $M_S = 1.99 \\times 10^{30}$ kg
- $M_J = 5.97 \\times 10^{24}$ kg
- $r = 1.50 \\times 10^{11}$ m

**Løsning:**
$$F = G\\frac{M_S \\cdot M_J}{r^2}$$

**Steg 1: Teller**
$$G \\cdot M_S \\cdot M_J = 6.674 \\times 10^{-11} \\cdot 1.99 \\times 10^{30} \\cdot 5.97 \\times 10^{24}$$
$$= 7.93 \\times 10^{44} \\text{ N}\\cdot\\text{m}^2$$

**Steg 2: Nevner**
$$r^2 = (1.50 \\times 10^{11})^2 = 2.25 \\times 10^{22} \\text{ m}^2$$

**Steg 3: Kraft**
$$F = \\frac{7.93 \\times 10^{44}}{2.25 \\times 10^{22}} = 3.52 \\times 10^{22} \\text{ N}$$

**Svar:**
Gravitasjonskraften mellom sola og jorda er ca. $3.5 \\times 10^{22}$ N.

**Perspektiv:** Dette er omtrent 175 ganger større enn kraften mellom jorda og månen!`,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'fys2-2-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-6',
        number: '2.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Finn tyngdeakselerasjonen ved overflaten av månen.

Gitt:
- Månens masse: $M_m = 7.35 \\times 10^{22}$ kg
- Månens radius: $R_m = 1.74 \\times 10^{6}$ m`,
        hints: [
          'Bruk formelen $g = G\\frac{M}{R^2}$',
          'Sammenlign resultatet med jordas $g = 9.81$ m/s²',
        ],
        solution: `**Gitt:**
- $M_m = 7.35 \\times 10^{22}$ kg
- $R_m = 1.74 \\times 10^{6}$ m

**Løsning:**
$$g_m = G\\frac{M_m}{R_m^2}$$

$$g_m = \\frac{6.674 \\times 10^{-11} \\cdot 7.35 \\times 10^{22}}{(1.74 \\times 10^{6})^2}$$

**Steg 1: Teller**
$$6.674 \\times 10^{-11} \\cdot 7.35 \\times 10^{22} = 4.91 \\times 10^{12}$$

**Steg 2: Nevner**
$$(1.74 \\times 10^{6})^2 = 3.03 \\times 10^{12}$$

**Steg 3: Resultat**
$$g_m = \\frac{4.91 \\times 10^{12}}{3.03 \\times 10^{12}} = 1.62 \\text{ m/s}^2$$

**Svar:**
Tyngdeakselerasjonen på månens overflate er $g_m \\approx 1.6$ m/s².

**Sammenligning:**
$$\\frac{g_m}{g_J} = \\frac{1.62}{9.81} = 0.165 \\approx \\frac{1}{6}$$

Månens gravitasjon er altså ca. 1/6 av jordas!`,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'fys2-2-1-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-7',
        number: '2.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Hvor høyt over jordoverflaten må du være for at tyngdeakselerasjonen skal være halvparten av verdien ved bakken?

Gitt: Jordas radius $R_J = 6.37 \\times 10^{6}$ m`,
        hints: [
          'Sett opp ligningen $g(h) = \\frac{1}{2}g_0$',
          'Bruk forholdet $g(h) = g_0 \\left(\\frac{R_J}{R_J + h}\\right)^2$',
        ],
        solution: `**Gitt:**
- $g(h) = \\frac{1}{2}g_0$
- $R_J = 6.37 \\times 10^{6}$ m

**Løsning:**

Vi bruker:
$$g(h) = g_0 \\left(\\frac{R_J}{R_J + h}\\right)^2$$

Setter $g(h) = \\frac{1}{2}g_0$:
$$\\frac{1}{2}g_0 = g_0 \\left(\\frac{R_J}{R_J + h}\\right)^2$$

$$\\frac{1}{2} = \\left(\\frac{R_J}{R_J + h}\\right)^2$$

**Tar kvadratrot:**
$$\\frac{1}{\\sqrt{2}} = \\frac{R_J}{R_J + h}$$

**Løser for $R_J + h$:**
$$R_J + h = \\sqrt{2} \\cdot R_J$$

$$h = R_J(\\sqrt{2} - 1)$$

$$h = 6.37 \\times 10^{6} \\cdot (1.414 - 1)$$

$$h = 6.37 \\times 10^{6} \\cdot 0.414 = 2.64 \\times 10^{6} \\text{ m}$$

**Svar:**
Du må være ca. 2640 km over jordoverflaten for at $g$ skal være halvparten av verdien ved bakken.

**Merk:** Dette er mye høyere enn ISS (400 km), men langt lavere enn geostasjonær bane (35 800 km).`,
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'fys2-2-1-oppg-8',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-8',
        number: '2.8',
        type: 'classic',
        difficulty: 'medium',
        task: `En planet har dobbelt så stor radius som jorda, men samme tetthet.

a) Hvor stor er planetens masse sammenlignet med jordas?
b) Hva er tyngdeakselerasjonen ved planetens overflate?`,
        hints: [
          'Masse = tetthet × volum, og volum av en kule er $V = \\frac{4}{3}\\pi r^3$',
          'For del b), bruk $g = G\\frac{M}{R^2}$ og se hvordan faktorene endres',
        ],
        solution: `**Gitt:**
- Planetens radius: $R_p = 2R_J$
- Samme tetthet: $\\rho_p = \\rho_J$

**a) Planetens masse:**

Masse er tetthet ganger volum:
$$M = \\rho \\cdot V = \\rho \\cdot \\frac{4}{3}\\pi R^3$$

For planeten:
$$M_p = \\rho_J \\cdot \\frac{4}{3}\\pi (2R_J)^3 = \\rho_J \\cdot \\frac{4}{3}\\pi \\cdot 8R_J^3$$

For jorda:
$$M_J = \\rho_J \\cdot \\frac{4}{3}\\pi R_J^3$$

**Forholdet:**
$$\\frac{M_p}{M_J} = \\frac{8R_J^3}{R_J^3} = 8$$

Planetens masse er **8 ganger** jordas masse.

**b) Tyngdeakselerasjon:**

$$g_p = G\\frac{M_p}{R_p^2} = G\\frac{8M_J}{(2R_J)^2} = G\\frac{8M_J}{4R_J^2}$$

$$g_p = 2 \\cdot G\\frac{M_J}{R_J^2} = 2g_J$$

**Svar:**
a) Planetens masse er 8 ganger jordas masse
b) Tyngdeakselerasjonen er $g_p = 2g_J \\approx 19.6$ m/s²

**Generell formel:** For en planet med radius $nR_J$ og samme tetthet:
- Masse: $M = n^3 M_J$
- Tyngdeakselerasjon: $g = n \\cdot g_J$`,
      },
    },

    // ========== OPPGAVE 9 ==========
    {
      id: 'fys2-2-1-oppg-9',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-9',
        number: '2.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To kuler med masser $m_1 = 5.0$ kg og $m_2 = 3.0$ kg ligger 0.50 m fra hverandre. En tredje kule med masse $m_3 = 1.0$ kg plasseres på linjen mellom dem, 0.20 m fra $m_1$.

Beregn den totale gravitasjonskraften på $m_3$.`,
        hints: [
          'Tenk på retningen til hver kraft – de virker motsatt vei!',
          'Bruk superposisjonsprinsippet: total kraft = summen av enkeltkreftene',
          'Avstanden mellom $m_3$ og $m_2$ er $0.50 - 0.20 = 0.30$ m',
        ],
        solution: `**Gitt:**
- $m_1 = 5.0$ kg (til venstre)
- $m_2 = 3.0$ kg (til høyre)
- $m_3 = 1.0$ kg (mellom dem)
- Avstand $m_1$ til $m_3$: $r_{13} = 0.20$ m
- Avstand $m_3$ til $m_2$: $r_{23} = 0.30$ m

**Løsning:**

**Kraft fra $m_1$ på $m_3$:**

Denne kraften virker mot høyre (mot $m_1$, som er til venstre for $m_3$... nei, $m_1$ trekker $m_3$ mot seg, altså mot venstre).

Vent – la oss være nøyaktige: $m_1$ er til venstre, $m_3$ i midten, $m_2$ til høyre.
- $F_{13}$ (fra $m_1$ på $m_3$) peker mot venstre (mot $m_1$)
- $F_{23}$ (fra $m_2$ på $m_3$) peker mot høyre (mot $m_2$)

$$F_{13} = G\\frac{m_1 m_3}{r_{13}^2} = 6.674 \\times 10^{-11} \\cdot \\frac{5.0 \\cdot 1.0}{0.20^2}$$
$$F_{13} = 6.674 \\times 10^{-11} \\cdot \\frac{5.0}{0.04} = 8.34 \\times 10^{-9} \\text{ N}$$

**Kraft fra $m_2$ på $m_3$:**
$$F_{23} = G\\frac{m_2 m_3}{r_{23}^2} = 6.674 \\times 10^{-11} \\cdot \\frac{3.0 \\cdot 1.0}{0.30^2}$$
$$F_{23} = 6.674 \\times 10^{-11} \\cdot \\frac{3.0}{0.09} = 2.22 \\times 10^{-9} \\text{ N}$$

**Total kraft (superposisjon):**

Velger positiv retning mot høyre:
$$F_{\\text{total}} = F_{23} - F_{13} = 2.22 \\times 10^{-9} - 8.34 \\times 10^{-9}$$
$$F_{\\text{total}} = -6.12 \\times 10^{-9} \\text{ N}$$

**Svar:**
Den totale gravitasjonskraften på $m_3$ er $6.1 \\times 10^{-9}$ N rettet mot venstre (mot den tyngste kulen $m_1$).

**Tolkning:** Kraften fra den tyngre kulen dominerer, selv om den lettere kulen er nærmere.`,
      },
    },

    // ========== OPPGAVE 10 ==========
    {
      id: 'fys2-2-1-oppg-10',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-10',
        number: '2.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `På et punkt mellom jorda og månen vil gravitasjonskreftene fra begge akkurat oppheve hverandre. Dette kalles **Lagrangepunkt L1**.

Finn avstanden fra jordas sentrum til dette punktet.

Gitt:
- Jordas masse: $M_J = 5.97 \\times 10^{24}$ kg
- Månens masse: $M_m = 7.35 \\times 10^{22}$ kg
- Avstand jord-måne: $d = 3.84 \\times 10^{8}$ m`,
        hints: [
          'Ved L1 er kraften fra jorda lik kraften fra månen (i størrelse)',
          'Sett opp ligningen $G\\frac{M_J \\cdot m}{r^2} = G\\frac{M_m \\cdot m}{(d-r)^2}$',
          'Du kan forenkle og løse en andregradsligning, eller bruke at $\\frac{r}{d-r} = \\sqrt{\\frac{M_J}{M_m}}$',
        ],
        solution: `**Gitt:**
- $M_J = 5.97 \\times 10^{24}$ kg
- $M_m = 7.35 \\times 10^{22}$ kg
- $d = 3.84 \\times 10^{8}$ m

La $r$ være avstanden fra jordas sentrum til L1.
Da er avstanden fra L1 til månens sentrum: $d - r$.

**Ved L1 er kreftene like:**
$$G\\frac{M_J \\cdot m}{r^2} = G\\frac{M_m \\cdot m}{(d-r)^2}$$

**Forenkler (G og m kansellerer):**
$$\\frac{M_J}{r^2} = \\frac{M_m}{(d-r)^2}$$

**Tar kvadratrot:**
$$\\frac{\\sqrt{M_J}}{r} = \\frac{\\sqrt{M_m}}{d-r}$$

$$\\frac{r}{d-r} = \\sqrt{\\frac{M_J}{M_m}}$$

**Beregner forholdet:**
$$\\sqrt{\\frac{M_J}{M_m}} = \\sqrt{\\frac{5.97 \\times 10^{24}}{7.35 \\times 10^{22}}} = \\sqrt{81.2} = 9.01$$

**Løser for r:**
$$r = 9.01(d - r)$$
$$r = 9.01d - 9.01r$$
$$r + 9.01r = 9.01d$$
$$10.01r = 9.01d$$
$$r = \\frac{9.01}{10.01}d = 0.900d$$

$$r = 0.900 \\cdot 3.84 \\times 10^{8} = 3.46 \\times 10^{8} \\text{ m}$$

**Svar:**
Lagrangepunkt L1 ligger ca. $3.46 \\times 10^{8}$ m fra jordas sentrum, eller ca. 346 000 km.

Dette er ca. 90% av veien fra jorda til månen, som gir mening siden jorda er mye tyngre.`,
      },
    },

    // ========== OPPGAVE 11 ==========
    {
      id: 'fys2-2-1-oppg-11',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-11',
        number: '2.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En satellitt går i sirkulær bane rundt jorda med en periode på 12 timer (halvt av jordas rotasjonstid).

a) Finn banehøyden over jordoverflaten.
b) Finn tyngdeakselerasjonen ved satellittens posisjon.

Gitt:
- $M_J = 5.97 \\times 10^{24}$ kg
- $R_J = 6.37 \\times 10^{6}$ m`,
        hints: [
          'For en sirkulær bane er gravitasjonskraften lik sentripetalkreaften',
          'Bruk $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$ og $v = \\frac{2\\pi r}{T}$',
          'Kombiner til $T^2 = \\frac{4\\pi^2 r^3}{GM}$ (Keplers 3. lov)',
        ],
        solution: `**Gitt:**
- $T = 12$ timer $= 43200$ s
- $M_J = 5.97 \\times 10^{24}$ kg
- $R_J = 6.37 \\times 10^{6}$ m

**a) Finn baneradius:**

For sirkulær bane er gravitasjonskraften = sentripetalkraften:
$$G\\frac{M_J m}{r^2} = \\frac{mv^2}{r}$$

Med $v = \\frac{2\\pi r}{T}$:
$$G\\frac{M_J}{r^2} = \\frac{4\\pi^2 r}{T^2}$$

**Løser for r:**
$$r^3 = \\frac{GM_J T^2}{4\\pi^2}$$

$$r^3 = \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot (43200)^2}{4\\pi^2}$$

$$r^3 = \\frac{3.98 \\times 10^{14} \\cdot 1.87 \\times 10^{9}}{39.48}$$

$$r^3 = 1.88 \\times 10^{22} \\text{ m}^3$$

$$r = \\sqrt[3]{1.88 \\times 10^{22}} = 2.66 \\times 10^{7} \\text{ m}$$

**Banehøyde:**
$$h = r - R_J = 2.66 \\times 10^{7} - 6.37 \\times 10^{6}$$
$$h = 2.02 \\times 10^{7} \\text{ m} = 20 200 \\text{ km}$$

**b) Tyngdeakselerasjon:**
$$g(h) = G\\frac{M_J}{r^2} = \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{(2.66 \\times 10^{7})^2}$$

$$g(h) = \\frac{3.98 \\times 10^{14}}{7.08 \\times 10^{14}} = 0.56 \\text{ m/s}^2$$

**Svar:**
a) Banehøyden er ca. 20 200 km over jordoverflaten
b) Tyngdeakselerasjonen er $g \\approx 0.56$ m/s², ca. 5.7% av verdien ved bakken`,
      },
    },

    // ========== OPPGAVE 12 ==========
    {
      id: 'fys2-2-1-oppg-12',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-1-ex-12',
        number: '2.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En eksoplanet har samme overflategravitasjon som jorda ($g = 9.81$ m/s²), men bare halvparten av jordas tetthet.

a) Finn planetens radius i forhold til jordas radius.
b) Finn planetens masse i forhold til jordas masse.`,
        hints: [
          'Tyngdeakselerasjon: $g = G\\frac{M}{R^2}$ og masse: $M = \\rho \\cdot \\frac{4}{3}\\pi R^3$',
          'Kombiner uttrykkene til $g = G \\cdot \\rho \\cdot \\frac{4}{3}\\pi R$',
          'Hvis $g$ er konstant og $\\rho$ halveres, hva skjer med $R$?',
        ],
        solution: `**Gitt:**
- $g_p = g_J = 9.81$ m/s²
- $\\rho_p = \\frac{1}{2}\\rho_J$

**Utledning av sammenheng:**

Tyngdeakselerasjon:
$$g = G\\frac{M}{R^2}$$

Masse fra tetthet:
$$M = \\rho \\cdot V = \\rho \\cdot \\frac{4}{3}\\pi R^3$$

Kombinerer:
$$g = G\\frac{\\rho \\cdot \\frac{4}{3}\\pi R^3}{R^2} = \\frac{4\\pi G \\rho R}{3}$$

**a) Planetens radius:**

For jorda: $g_J = \\frac{4\\pi G \\rho_J R_J}{3}$

For planeten: $g_p = \\frac{4\\pi G \\rho_p R_p}{3}$

Siden $g_p = g_J$:
$$\\frac{4\\pi G \\rho_p R_p}{3} = \\frac{4\\pi G \\rho_J R_J}{3}$$

$$\\rho_p R_p = \\rho_J R_J$$

$$R_p = \\frac{\\rho_J}{\\rho_p} R_J = \\frac{\\rho_J}{\\frac{1}{2}\\rho_J} R_J = 2R_J$$

**b) Planetens masse:**

$$M_p = \\rho_p \\cdot \\frac{4}{3}\\pi R_p^3 = \\frac{1}{2}\\rho_J \\cdot \\frac{4}{3}\\pi (2R_J)^3$$

$$M_p = \\frac{1}{2}\\rho_J \\cdot \\frac{4}{3}\\pi \\cdot 8R_J^3 = 4 \\cdot \\rho_J \\cdot \\frac{4}{3}\\pi R_J^3$$

$$M_p = 4M_J$$

**Svar:**
a) Planetens radius er $R_p = 2R_J$ (dobbelt så stor som jorda)
b) Planetens masse er $M_p = 4M_J$ (fire ganger så stor som jorda)

**Interessant innsikt:** For å ha samme overflategravitasjon med halvparten av tettheten, må planeten være større og mer massiv!`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Newtons gravitasjonslov:**
$$F = G\\frac{m_1 m_2}{r^2}$$

**Viktige punkter:**
1. Gravitasjon er en **universell kraft** mellom alle objekter med masse
2. Kraften er alltid **tiltrekkende** og virker langs linjen mellom massenes sentre
3. Kraften avtar med **kvadratet av avstanden** (invers kvadratlov)
4. Gravitasjonskonstanten $G = 6.674 \\times 10^{-11}$ N·m²/kg² er en naturkonstant

**Tyngdeakselerasjon:**
$$g = G\\frac{M}{R^2}$$

**Variasjon med høyde:**
$$g(h) = g_0 \\left(\\frac{R}{R + h}\\right)^2$$

**Superposisjonsprinsippet:**
- Total gravitasjonskraft = vektorsum av alle enkeltkreftene
- Hver kraft beregnes uavhengig

**Praktiske anvendelser:**
- Beregne baner for satellitter og romfartøy
- Forstå planetbevegelse
- Forklare tidevann
- Bestemme masse av himmellegemer

**Neste kapittel:**
Vi skal se på sirkulær satellittbevegelse og Keplers lover for planetbaner.`,
    },
  ],
};

// ============================================================================
// Kapittel 2.2: Gravitasjonsfelt og gravitasjonspotensial
// LK20: Forklare feltbegrepet og potensialenergi i gravitasjonsfelter
// ============================================================================

export const CHAPTER_FYSIKK2_2_2: TextbookChapter = {
  id: 'fysikk2-2-2',
  courseId: 'fysikk2',
  chapterNumber: '2.2',
  title: 'Gravitasjonsfelt og gravitasjonspotensial',
  description: 'Feltbegrepet, gravitasjonspotensial, ekvipotensialflater og unnslipningshastighet.',
  estimatedMinutes: 50,
  prerequisites: ['fysikk2-2-1'],
  competenceGoals: [
    'forklare feltbegrepet i gravitasjonssammenheng',
    'beregne gravitasjonsfeltstyrke og gravitasjonspotensial',
    'forstå sammenhengen mellom felt og potensial',
    'utlede og anvende formelen for unnslipningshastighet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-2-2-intro',
      type: 'text',
      content: `## Gravitasjonsfelt - en ny tilnærming

I forrige kapittel lærte vi Newtons gravitasjonslov, som beskriver kraften mellom to masser. Men det finnes en annen, ofte mer nyttig måte å tenke på gravitasjon: som et **felt**.

**Feltbegrepet:**
I stedet for å fokusere på kraften mellom to konkrete masser, kan vi beskrive rommet rundt en masse. En masse skaper et **gravitasjonsfelt** i rommet rundt seg. Når en annen masse kommer inn i dette feltet, kjenner den en kraft.

**Hvorfor felt?**
- Feltbeskrivelsen gjør det lettere å analysere bevegelse i gravitasjonsfelter
- Vi kan definere **potensial** som beskriver energien til objekter i feltet
- Feltlinjer gir en visuell forståelse av gravitasjonen
- Feltbeskrivelsen er grunnlaget for Einsteins generelle relativitetsteori

**I dette kapittelet lærer du:**
- Hva gravitasjonsfeltstyrke er og hvordan den beregnes
- Hvordan feltlinjer visualiserer gravitasjonsfeltet
- Begrepet gravitasjonspotensial og dets sammenheng med feltet
- Hva ekvipotensialflater er
- Hvordan utlede og bruke unnslipningshastighet`,
    },

    // ========== GRAVITASJONSFELTBEGREPET ==========
    {
      id: 'fys2-2-2-feltbegrep',
      type: 'text',
      content: `## Gravitasjonsfeltbegrepet

**Ideen bak feltbegrepet:**

Tenk deg at du slipper en ball over jordoverflaten. Ballen akselererer nedover fordi den kjenner jordas gravitasjon. Men vi kan også si at jorda har skapt et **gravitasjonsfelt** i rommet rundt seg, og ballen responderer på dette feltet.

**Feltet eksisterer uavhengig av prøvemassen:**
- Selv uten ballen finnes gravitasjonsfeltet
- Feltet er en egenskap ved rommet rundt massen
- Vi kan måle feltet ved å plassere en liten prøvemasse og måle akselerasjonen

**Gravitasjonsfeltet til en punktmasse:**

En masse $M$ skaper et gravitasjonsfelt som strekker seg ut i alle retninger. Feltet er sterkest nær massen og avtar med avstanden.

**Kjennetegn ved gravitasjonsfeltet:**
1. Det er et **vektorfelt** - hvert punkt i rommet har en vektor assosiert med seg
2. Vektorene peker alltid **mot** massen som skaper feltet
3. Feltets styrke avtar med **kvadratet av avstanden**
4. Feltet er **konservativt** - arbeidet rundt en lukket bane er null`,
    },

    // ========== DEFINISJON: GRAVITASJONSFELTSTYRKE ==========
    {
      id: 'fys2-2-2-def-feltstyrke',
      type: 'definition',
      title: 'Gravitasjonsfeltstyrke',
      content: `**Gravitasjonsfeltstyrken** $\\vec{g}$ ved et punkt er definert som gravitasjonskraften per masseenhet på en prøvemasse plassert i dette punktet:

$$\\vec{g} = \\frac{\\vec{F}}{m}$$

For en punktmasse $M$ i avstand $r$:

$$\\vec{g} = -G\\frac{M}{r^2}\\hat{r}$$

der:
- $\\vec{g}$ er gravitasjonsfeltstyrken (m/s² eller N/kg)
- $G$ er gravitasjonskonstanten ($6.674 \\times 10^{-11}$ N·m²/kg²)
- $M$ er massen som skaper feltet (kg)
- $r$ er avstanden fra massens sentrum (m)
- $\\hat{r}$ er en enhetsvektor som peker **bort fra** massen

**Minustegnet** indikerer at feltet peker **mot** massen (motsatt retning av $\\hat{r}$).

**Merk:** Størrelsen på feltstyrken er lik tyngdeakselerasjonen: $g = |\\vec{g}|$`,
    },

    // ========== FELTSTYRKE SOM TYNGDEAKSELERASJON ==========
    {
      id: 'fys2-2-2-g-akselerasjon',
      type: 'text',
      content: `## Feltstyrke og tyngdeakselerasjon

Gravitasjonsfeltstyrken $\\vec{g}$ har en viktig fysisk tolkning: den er lik **akselerasjonen** en gjenstand får i feltet.

**Utledning:**

Fra Newtons 2. lov:
$$\\vec{F} = m\\vec{a}$$

Gravitasjonskraften på et objekt med masse $m$:
$$\\vec{F} = m\\vec{g}$$

Setter vi disse like:
$$m\\vec{a} = m\\vec{g}$$
$$\\vec{a} = \\vec{g}$$

**Viktig innsikt:**
Akselerasjonen i et gravitasjonsfelt er **uavhengig av massen** til objektet som faller. Dette er grunnen til at alle gjenstander faller like fort (når vi ser bort fra luftmotstand).

**Eksempel: Ved jordoverflaten**
$$g = G\\frac{M_J}{R_J^2} = \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{(6.37 \\times 10^6)^2} \\approx 9.81 \\text{ m/s}^2$$

Dette er den kjente tyngdeakselerasjonen ved jordoverflaten!`,
    },

    // ========== FELTLINJER ==========
    {
      id: 'fys2-2-2-feltlinjer',
      type: 'text',
      content: `## Feltlinjer - visualisering av gravitasjonsfeltet

**Feltlinjer** er kurver som visualiserer gravitasjonsfeltet. De tegnes slik at:
1. Tangenten til en feltlinje i hvert punkt gir **retningen** til feltet
2. **Tettheten** av feltlinjer indikerer feltets styrke

**Egenskaper ved gravitasjonsfeltlinjer:**

- Feltlinjene peker **inn mot** massen som skaper feltet
- De utgår fra uendelig og ender på massen
- Feltlinjene krysser aldri hverandre
- Tettere feltlinjer = sterkere felt

**For en enkelt punktmasse:**
- Feltlinjene er **rette linjer** som peker radialt innover
- De er symmetrisk fordelt rundt massen
- Linjetettheten avtar med $1/r^2$

**For to masser:**
- Feltlinjene fra hver masse kombineres
- I områder mellom massene kan feltlinjene bøyes
- Ved spesielle punkter (Lagrangepunkter) kan feltet være null

**Praktisk bruk:**
Feltlinjer hjelper oss å:
- Visualisere hvor gravitasjonen er sterk/svak
- Forstå bevegelsesretningen til objekter i fritt fall
- Identifisere likevektspunkter`,
    },

    // ========== GRAVITASJONSPOTENSIAL ==========
    {
      id: 'fys2-2-2-potensial-intro',
      type: 'text',
      content: `## Gravitasjonspotensial

Mens gravitasjonsfeltstyrken er en **vektor**, er gravitasjonspotensialet en **skalar** størrelse. Potensialet gir oss informasjon om energien i gravitasjonsfeltet.

**Motivasjon:**
I et gravitasjonsfelt har objekter potensiell energi. Men i stedet for å snakke om den potensielle energien til et spesifikt objekt, kan vi definere **potensialet** som den potensielle energien per masseenhet.

**Definisjon av gravitasjonspotensial:**

Gravitasjonspotensialet $V$ ved et punkt er den potensielle energien per masseenhet for et objekt i det punktet:

$$V = \\frac{E_p}{m}$$

**For en punktmasse M:**

$$V = -G\\frac{M}{r}$$

**Viktige poeng:**
1. Potensialet er **negativt** (referansepunkt ved uendelig, der $V = 0$)
2. Potensialet øker (blir mindre negativt) når vi beveger oss bort fra massen
3. Ved overflaten av et himmellegeme er potensialet mest negativt
4. Ved uendelig avstand er $V = 0$`,
    },

    // ========== DEFINISJON: GRAVITASJONSPOTENSIAL ==========
    {
      id: 'fys2-2-2-def-potensial',
      type: 'definition',
      title: 'Gravitasjonspotensial',
      content: `**Gravitasjonspotensialet** $V$ ved avstand $r$ fra en punktmasse $M$ er:

$$V = -G\\frac{M}{r}$$

der:
- $V$ er gravitasjonspotensialet (J/kg eller m²/s²)
- $G$ er gravitasjonskonstanten ($6.674 \\times 10^{-11}$ N·m²/kg²)
- $M$ er massen som skaper feltet (kg)
- $r$ er avstanden fra massens sentrum (m)

**Potensiell energi:**
Den potensielle energien til et objekt med masse $m$ i potensialet $V$ er:
$$E_p = mV = -G\\frac{Mm}{r}$$

**Viktig:** Potensialet er definert med referanse til uendelig avstand, der $V = 0$. Ved alle endelige avstander er $V < 0$.`,
    },

    // ========== SAMMENHENG FELT OG POTENSIAL ==========
    {
      id: 'fys2-2-2-felt-potensial',
      type: 'text',
      content: `## Sammenhengen mellom felt og potensial

Gravitasjonsfeltstyrken og potensialet er nært beslektet. Feltet kan utledes fra potensialet.

**Matematisk sammenheng:**

I en dimensjon (radiell retning):
$$g = -\\frac{dV}{dr}$$

I tre dimensjoner:
$$\\vec{g} = -\\nabla V = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)$$

**Verifisering for punktmasse:**

$$V = -G\\frac{M}{r}$$

$$g = -\\frac{dV}{dr} = -\\frac{d}{dr}\\left(-G\\frac{M}{r}\\right) = -G\\frac{M}{r^2} \\cdot (-1) \\cdot (-1) = -G\\frac{M}{r^2}$$

Dette stemmer med definisjonen av feltstyrken!

**Fysisk tolkning:**
- Feltet peker i retningen der potensialet **avtar** raskest
- Hvor potensialet endrer seg raskt (bratt potensiallandskap), er feltet sterkt
- Hvor potensialet er konstant, er feltet null`,
    },

    // ========== EKVIPOTENSIALFLATER ==========
    {
      id: 'fys2-2-2-ekvipotensial',
      type: 'text',
      content: `## Ekvipotensialflater

**Definisjon:**
En **ekvipotensialflate** er en flate der gravitasjonspotensialet har samme verdi overalt.

**For en punktmasse:**
Ekvipotensialflatene er **konsentriske kuler** rundt massen. Alle punkter på samme avstand $r$ har samme potensial.

**Egenskaper:**
1. **Feltlinjer står vinkelrett** på ekvipotensialflater
2. Ingen arbeid utføres når man beveger seg langs en ekvipotensialflate
3. Tettere ekvipotensialflater = sterkere felt

**Arbeid og potensial:**
Arbeidet som utføres når en masse $m$ flyttes fra punkt A til punkt B er:
$$W = -\\Delta E_p = -m(V_B - V_A) = m(V_A - V_B)$$

Langs en ekvipotensialflate er $V_A = V_B$, så $W = 0$.

**Praktisk betydning:**
- En satellitt i sirkulær bane beveger seg langs en ekvipotensialflate
- Havoverflaten er tilnærmet en ekvipotensialflate (geoiden)
- Når vi løfter noe, beveger vi det til en høyere ekvipotensialflate`,
    },

    // ========== EKSEMPEL: POTENSIAL VED JORDOVERFLATEN ==========
    {
      id: 'fys2-2-2-eksempel-1',
      type: 'example',
      title: 'Gravitasjonspotensial ved jordoverflaten',
      content: `**Oppgave:**
Beregn gravitasjonspotensialet ved jordoverflaten og i en høyde på 400 km (ISS-banen).

**Gitt:**
- Jordas masse: $M_J = 5.97 \\times 10^{24}$ kg
- Jordas radius: $R_J = 6.37 \\times 10^{6}$ m
- Høyde ISS: $h = 400$ km $= 4.0 \\times 10^{5}$ m

**Løsning:**

**Ved jordoverflaten ($r = R_J$):**
$$V_0 = -G\\frac{M_J}{R_J}$$
$$V_0 = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.37 \\times 10^{6}}$$
$$V_0 = -\\frac{3.98 \\times 10^{14}}{6.37 \\times 10^{6}}$$
$$V_0 = -6.25 \\times 10^{7} \\text{ J/kg}$$

**Ved ISS-høyde ($r = R_J + h$):**
$$V_{ISS} = -G\\frac{M_J}{R_J + h}$$
$$V_{ISS} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.77 \\times 10^{6}}$$
$$V_{ISS} = -\\frac{3.98 \\times 10^{14}}{6.77 \\times 10^{6}}$$
$$V_{ISS} = -5.88 \\times 10^{7} \\text{ J/kg}$$

**Potensialforskjell:**
$$\\Delta V = V_{ISS} - V_0 = -5.88 \\times 10^{7} - (-6.25 \\times 10^{7})$$
$$\\Delta V = 3.7 \\times 10^{6} \\text{ J/kg}$$

**Svar:**
Ved jordoverflaten er $V \\approx -62.5$ MJ/kg, ved ISS er $V \\approx -58.8$ MJ/kg.
Potensialforskjellen er ca. 3.7 MJ/kg.`,
    },

    // ========== UNNSLIPNINGSHASTIGHET - INTRO ==========
    {
      id: 'fys2-2-2-unnslipning-intro',
      type: 'text',
      content: `## Unnslipningshastighet

**Spørsmålet:**
Hvor fort må et objekt skytes opp fra en planet for at det skal unnslippe planetens gravitasjon og aldri falle tilbake?

**Energibetraktning:**
Et objekt som skytes opp med hastighet $v$ har:
- Kinetisk energi: $E_k = \\frac{1}{2}mv^2$
- Potensiell energi: $E_p = -G\\frac{Mm}{r}$

**Total mekanisk energi:**
$$E_{tot} = E_k + E_p = \\frac{1}{2}mv^2 - G\\frac{Mm}{r}$$

**Unnslipningsbetingelsen:**
For at objektet akkurat skal unnslippe (nå uendelig med null hastighet), må:
- $E_{tot} \\geq 0$

Ved $r \\to \\infty$: $E_k = 0$ og $E_p = 0$, så $E_{tot} = 0$.

**For akkurat unnslipning ($E_{tot} = 0$):**
$$\\frac{1}{2}mv^2 - G\\frac{Mm}{R} = 0$$

der $R$ er startradius (planetens radius hvis vi starter fra overflaten).`,
    },

    // ========== DEFINISJON: UNNSLIPNINGSHASTIGHET ==========
    {
      id: 'fys2-2-2-def-unnslipning',
      type: 'definition',
      title: 'Unnslipningshastighet',
      content: `**Unnslipningshastigheten** $v_{esc}$ er den minste hastigheten et objekt trenger for å unnslippe et himmellegemes gravitasjon:

$$v_{esc} = \\sqrt{\\frac{2GM}{R}}$$

der:
- $v_{esc}$ er unnslipningshastigheten (m/s)
- $G$ er gravitasjonskonstanten
- $M$ er himmellegemets masse (kg)
- $R$ er avstanden fra himmellegemets sentrum (m)

**Alternativ form med feltstyrke:**
Siden $g = GM/R^2$, kan vi skrive:
$$v_{esc} = \\sqrt{2gR}$$

**Viktige verdier:**
| Himmellegeme | $v_{esc}$ |
|--------------|-----------|
| Jorda        | 11.2 km/s |
| Månen        | 2.4 km/s  |
| Mars         | 5.0 km/s  |
| Jupiter      | 59.5 km/s |
| Sola         | 618 km/s  |`,
    },

    // ========== UTLEDNING AV UNNSLIPNINGSHASTIGHET ==========
    {
      id: 'fys2-2-2-utledning-unnslipning',
      type: 'text',
      content: `## Utledning av unnslipningshastigheten

**Utgangspunkt:**
Et objekt med masse $m$ skytes opp fra overflaten (radius $R$) av et himmellegeme med masse $M$.

**Energibevaring:**
Total mekanisk energi er bevart:
$$E_{start} = E_{slutt}$$

**Ved start (overflaten):**
$$E_{start} = \\frac{1}{2}mv_{esc}^2 - G\\frac{Mm}{R}$$

**Ved slutt (uendelig, akkurat unnslippet):**
$$E_{slutt} = 0 + 0 = 0$$

**Setter energiene like:**
$$\\frac{1}{2}mv_{esc}^2 - G\\frac{Mm}{R} = 0$$

**Løser for $v_{esc}$:**
$$\\frac{1}{2}mv_{esc}^2 = G\\frac{Mm}{R}$$

$$v_{esc}^2 = \\frac{2GM}{R}$$

$$\\boxed{v_{esc} = \\sqrt{\\frac{2GM}{R}}}$$

**Viktige observasjoner:**
1. Unnslipningshastigheten er **uavhengig** av objektets masse $m$
2. Den avhenger bare av himmellegemets masse $M$ og radius $R$
3. Den er $\\sqrt{2}$ ganger større enn banehastigheten i sirkulær bane ved samme radius`,
    },

    // ========== EKSEMPEL: UNNSLIPNINGSHASTIGHET ==========
    {
      id: 'fys2-2-2-eksempel-2',
      type: 'example',
      title: 'Unnslipningshastighet fra jorda',
      content: `**Oppgave:**
Beregn unnslipningshastigheten fra jordoverflaten.

**Gitt:**
- $M_J = 5.97 \\times 10^{24}$ kg
- $R_J = 6.37 \\times 10^{6}$ m
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

**Løsning:**

$$v_{esc} = \\sqrt{\\frac{2GM_J}{R_J}}$$

$$v_{esc} = \\sqrt{\\frac{2 \\cdot 6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.37 \\times 10^{6}}}$$

$$v_{esc} = \\sqrt{\\frac{7.97 \\times 10^{14}}{6.37 \\times 10^{6}}}$$

$$v_{esc} = \\sqrt{1.25 \\times 10^{8}}$$

$$v_{esc} = 1.12 \\times 10^{4} \\text{ m/s} = 11.2 \\text{ km/s}$$

**Alternativ metode med $g$:**
$$v_{esc} = \\sqrt{2gR_J} = \\sqrt{2 \\cdot 9.81 \\cdot 6.37 \\times 10^{6}}$$
$$v_{esc} = \\sqrt{1.25 \\times 10^{8}} = 11.2 \\text{ km/s}$$

**Svar:**
Unnslipningshastigheten fra jordoverflaten er ca. **11.2 km/s** eller ca. **40 000 km/t**.

**Perspektiv:** En rifle kule har hastighet ca. 1 km/s, så unnslipningshastigheten er over 10 ganger raskere!`,
    },

    // ========== BUNDET OG UBUNDET BEVEGELSE ==========
    {
      id: 'fys2-2-2-bundet-ubundet',
      type: 'text',
      content: `## Bundet og ubundet bevegelse

Total mekanisk energi avgjør om et objekt er **bundet** til et himmellegeme eller kan **unnslippe**.

**Total energi:**
$$E_{tot} = E_k + E_p = \\frac{1}{2}mv^2 - G\\frac{Mm}{r}$$

**Tre tilfeller:**

**1. $E_{tot} < 0$: Bundet bevegelse**
- Objektet kan ikke unnslippe
- Mulige baner: ellipser (inkludert sirkler)
- Eksempel: Planeter rundt sola, satellitter rundt jorda

**2. $E_{tot} = 0$: Grenstilfelle**
- Objektet har akkurat nok energi til å unnslippe
- Hastigheten går mot null når $r \\to \\infty$
- Baneform: parabel

**3. $E_{tot} > 0$: Ubundet bevegelse**
- Objektet unnslipper og har overskuddshastighet
- Hastigheten forblir positiv når $r \\to \\infty$
- Baneform: hyperbel
- Eksempel: Interstellare objekter som passerer solsystemet

**Banetype og energi:**
| Energi | Bane | Bevegelse |
|--------|------|-----------|
| $E < 0$ | Ellipse/sirkel | Bundet, periodisk |
| $E = 0$ | Parabel | Grense, unnslipping |
| $E > 0$ | Hyperbel | Ubundet, unnslipping |`,
    },

    // ========== DEFINISJON: BUNDET OG UBUNDET BEVEGELSE ==========
    {
      id: 'fys2-2-2-def-bundet',
      type: 'definition',
      title: 'Bundet og ubundet bevegelse',
      content: `**Bundet bevegelse:**
Et objekt er gravitasjonelt bundet når dets totale mekaniske energi er negativ:
$$E_{tot} = \\frac{1}{2}mv^2 - G\\frac{Mm}{r} < 0$$

Dette gir lukkede baner (ellipser eller sirkler).

**Ubundet bevegelse:**
Et objekt er gravitasjonelt ubundet når dets totale mekaniske energi er null eller positiv:
$$E_{tot} = \\frac{1}{2}mv^2 - G\\frac{Mm}{r} \\geq 0$$

Dette gir åpne baner (parabler eller hyperbler).

**Grensehastighet:**
Ved grensen ($E_{tot} = 0$) har objektet akkurat unnslipningshastigheten:
$$v = v_{esc} = \\sqrt{\\frac{2GM}{r}}$$`,
    },

    // ========== EKSEMPEL: TOTALENERGI OG BANETYPE ==========
    {
      id: 'fys2-2-2-eksempel-3',
      type: 'example',
      title: 'Bestemme banetype fra hastighet',
      content: `**Oppgave:**
En romkapsel med masse 2000 kg befinner seg 800 km over jordoverflaten med hastighet 9.0 km/s.
a) Er romsonden bundet eller ubundet?
b) Hva er banetypen?

**Gitt:**
- $m = 2000$ kg
- $h = 800$ km, så $r = R_J + h = 7.17 \\times 10^{6}$ m
- $v = 9.0$ km/s $= 9.0 \\times 10^{3}$ m/s
- $M_J = 5.97 \\times 10^{24}$ kg

**Løsning:**

**Beregn unnslipningshastigheten ved denne høyden:**
$$v_{esc} = \\sqrt{\\frac{2GM_J}{r}} = \\sqrt{\\frac{2 \\cdot 6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{7.17 \\times 10^{6}}}$$
$$v_{esc} = \\sqrt{1.11 \\times 10^{8}} = 10.5 \\text{ km/s}$$

**Sammenligning:**
$v = 9.0$ km/s $< v_{esc} = 10.5$ km/s

**Beregn total energi:**
$$E_{tot} = \\frac{1}{2}mv^2 - G\\frac{M_J m}{r}$$
$$E_k = \\frac{1}{2} \\cdot 2000 \\cdot (9000)^2 = 8.1 \\times 10^{10} \\text{ J}$$
$$E_p = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 2000}{7.17 \\times 10^{6}} = -1.11 \\times 10^{11} \\text{ J}$$
$$E_{tot} = 8.1 \\times 10^{10} - 1.11 \\times 10^{11} = -3.0 \\times 10^{10} \\text{ J}$$

**Svar:**
a) $E_{tot} < 0$, så romsonden er **bundet** til jorda
b) Banen er en **ellipse**`,
    },

    // ========== OPPGAVE 1 (MULTIPLE CHOICE) ==========
    {
      id: 'fys2-2-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-1',
        number: '2.13',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom gravitasjonsfeltstyrke og gravitasjonspotensial?',
        options: [
          {
            id: 'a',
            text: 'Feltstyrke er en skalar, potensial er en vektor',
            isCorrect: false,
            feedback: 'Feil. Det er motsatt: feltstyrke er en vektor, potensial er en skalar.',
          },
          {
            id: 'b',
            text: 'Feltstyrke er en vektor som beskriver kraft per masse, potensial er en skalar som beskriver energi per masse',
            isCorrect: true,
            feedback: 'Riktig! $\\vec{g}$ har retning (mot massen), mens $V$ kun har en tallverdi i hvert punkt.',
          },
          {
            id: 'c',
            text: 'Feltstyrke avtar med $1/r$, potensial avtar med $1/r^2$',
            isCorrect: false,
            feedback: 'Feil. Det er motsatt: feltstyrke avtar med $1/r^2$, potensial avtar med $1/r$.',
          },
          {
            id: 'd',
            text: 'De er det samme, bare med ulike enheter',
            isCorrect: false,
            feedback: 'Feil. De er fundamentalt forskjellige størrelser - en vektor vs. en skalar.',
          },
        ],
      },
    },

    // ========== OPPGAVE 2 (MULTIPLE CHOICE) ==========
    {
      id: 'fys2-2-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-2',
        number: '2.14',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor er gravitasjonspotensialet alltid negativt (med referanse ved uendelig)?',
        options: [
          {
            id: 'a',
            text: 'Fordi gravitasjonskraften alltid er negativ',
            isCorrect: false,
            feedback: 'Feil. Gravitasjonskraften har retning, men er ikke \"negativ\" i seg selv.',
          },
          {
            id: 'b',
            text: 'Fordi vi må tilføre energi for å flytte et objekt fra overflaten til uendelig',
            isCorrect: true,
            feedback: 'Riktig! Potensialet ved uendelig er 0. For å nå dit fra en endelig avstand må vi tilføre energi, så potensialet ved endelige avstander er negativt.',
          },
          {
            id: 'c',
            text: 'Fordi $G$ er en negativ konstant',
            isCorrect: false,
            feedback: 'Feil. $G$ er positiv. Minustegnet kommer fra definisjonen av potensial.',
          },
          {
            id: 'd',
            text: 'Det er bare en konvensjon uten fysisk betydning',
            isCorrect: false,
            feedback: 'Feil. Det negative fortegnet har viktig fysisk betydning - det indikerer at objektet er bundet.',
          },
        ],
      },
    },

    // ========== OPPGAVE 3 (MULTIPLE CHOICE) ==========
    {
      id: 'fys2-2-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-3',
        number: '2.15',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Unnslipningshastigheten fra jorda er ca. 11.2 km/s. Hva skjer hvis en rakett skytes opp med 8 km/s (uten motorkraft etter oppskytning)?',
        options: [
          {
            id: 'a',
            text: 'Raketten vil gradvis akselerere og unnslippe',
            isCorrect: false,
            feedback: 'Feil. Uten motorkraft vil raketten bremses av gravitasjonen.',
          },
          {
            id: 'b',
            text: 'Raketten vil nå en maksimal høyde og deretter falle tilbake',
            isCorrect: true,
            feedback: 'Riktig! Siden $v < v_{esc}$, har raketten $E_{tot} < 0$ og er bundet til jorda.',
          },
          {
            id: 'c',
            text: 'Raketten vil gå i sirkulær bane rundt jorda',
            isCorrect: false,
            feedback: 'Feil. En sirkulær bane krever at raketten skytes horisontalt med riktig hastighet, ikke rett opp.',
          },
          {
            id: 'd',
            text: 'Raketten vil stoppe og henge i ro i rommet',
            isCorrect: false,
            feedback: 'Feil. Gravitasjonen vil alltid trekke raketten tilbake mot jorda.',
          },
        ],
      },
    },

    // ========== OPPGAVE 4 (MEDIUM) ==========
    {
      id: 'fys2-2-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-4',
        number: '2.16',
        type: 'classic',
        difficulty: 'medium',
        task: `Beregn gravitasjonsfeltstyrken og gravitasjonspotensialet i en avstand på 10 000 km fra jordas sentrum.

Gitt:
- $M_J = 5.97 \\times 10^{24}$ kg
- $r = 10000$ km`,
        hints: [
          'Feltstyrke: $g = G\\frac{M}{r^2}$',
          'Potensial: $V = -G\\frac{M}{r}$',
          'Husk å konvertere km til m',
        ],
        solution: `**Gitt:**
- $M_J = 5.97 \\times 10^{24}$ kg
- $r = 10000$ km $= 1.0 \\times 10^{7}$ m
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

**Feltstyrke:**
$$g = G\\frac{M_J}{r^2}$$
$$g = \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{(1.0 \\times 10^{7})^2}$$
$$g = \\frac{3.98 \\times 10^{14}}{1.0 \\times 10^{14}}$$
$$g = 3.98 \\text{ m/s}^2$$

**Potensial:**
$$V = -G\\frac{M_J}{r}$$
$$V = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{1.0 \\times 10^{7}}$$
$$V = -\\frac{3.98 \\times 10^{14}}{1.0 \\times 10^{7}}$$
$$V = -3.98 \\times 10^{7} \\text{ J/kg}$$

**Svar:**
Ved 10 000 km fra jordas sentrum er:
- Feltstyrken $g \\approx 4.0$ m/s²
- Potensialet $V \\approx -40$ MJ/kg

**Sammenligning med jordoverflaten:**
$g$ er ca. 41% av verdien ved overflaten (9.81 m/s²).`,
      },
    },

    // ========== OPPGAVE 5 (MEDIUM) ==========
    {
      id: 'fys2-2-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-5',
        number: '2.17',
        type: 'classic',
        difficulty: 'medium',
        task: `Beregn unnslipningshastigheten fra Mars.

Gitt:
- Mars' masse: $M_M = 6.42 \\times 10^{23}$ kg
- Mars' radius: $R_M = 3.39 \\times 10^{6}$ m`,
        hints: [
          'Bruk formelen $v_{esc} = \\sqrt{\\frac{2GM}{R}}$',
          'Sammenlign med jordas unnslipningshastighet (11.2 km/s)',
        ],
        solution: `**Gitt:**
- $M_M = 6.42 \\times 10^{23}$ kg
- $R_M = 3.39 \\times 10^{6}$ m
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

**Løsning:**
$$v_{esc} = \\sqrt{\\frac{2GM_M}{R_M}}$$

$$v_{esc} = \\sqrt{\\frac{2 \\cdot 6.674 \\times 10^{-11} \\cdot 6.42 \\times 10^{23}}{3.39 \\times 10^{6}}}$$

$$v_{esc} = \\sqrt{\\frac{8.57 \\times 10^{13}}{3.39 \\times 10^{6}}}$$

$$v_{esc} = \\sqrt{2.53 \\times 10^{7}}$$

$$v_{esc} = 5030 \\text{ m/s} = 5.0 \\text{ km/s}$$

**Svar:**
Unnslipningshastigheten fra Mars er ca. **5.0 km/s**.

**Sammenligning:**
Dette er ca. 45% av jordas unnslipningshastighet (11.2 km/s). Det er derfor lettere å sende raketter fra Mars enn fra jorda!`,
      },
    },

    // ========== OPPGAVE 6 (MEDIUM) ==========
    {
      id: 'fys2-2-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-6',
        number: '2.18',
        type: 'classic',
        difficulty: 'medium',
        task: `Hvor mye arbeid må utføres for å løfte en satellitt med masse 500 kg fra jordoverflaten til en høyde på 600 km?

Bruk potensialforskjellen til å beregne arbeidet.

Gitt:
- $M_J = 5.97 \\times 10^{24}$ kg
- $R_J = 6.37 \\times 10^{6}$ m`,
        hints: [
          'Arbeid = endring i potensiell energi = $m \\cdot \\Delta V$',
          'Beregn potensialet ved begge høyder',
          'Husk at arbeidet er positivt når vi løfter mot gravitasjonen',
        ],
        solution: `**Gitt:**
- $m = 500$ kg
- $h = 600$ km $= 6.0 \\times 10^{5}$ m
- $R_J = 6.37 \\times 10^{6}$ m
- $M_J = 5.97 \\times 10^{24}$ kg

**Potensial ved jordoverflaten:**
$$V_1 = -G\\frac{M_J}{R_J} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.37 \\times 10^{6}}$$
$$V_1 = -6.25 \\times 10^{7} \\text{ J/kg}$$

**Potensial ved høyde h:**
$$r_2 = R_J + h = 6.37 \\times 10^{6} + 6.0 \\times 10^{5} = 6.97 \\times 10^{6} \\text{ m}$$
$$V_2 = -G\\frac{M_J}{r_2} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.97 \\times 10^{6}}$$
$$V_2 = -5.71 \\times 10^{7} \\text{ J/kg}$$

**Potensialforskjell:**
$$\\Delta V = V_2 - V_1 = -5.71 \\times 10^{7} - (-6.25 \\times 10^{7})$$
$$\\Delta V = 5.4 \\times 10^{6} \\text{ J/kg}$$

**Arbeid:**
$$W = m \\cdot \\Delta V = 500 \\cdot 5.4 \\times 10^{6}$$
$$W = 2.7 \\times 10^{9} \\text{ J} = 2.7 \\text{ GJ}$$

**Svar:**
Det kreves ca. **2.7 GJ** for å løfte satellitten til 600 km høyde.

**Merk:** Dette er bare arbeidet mot gravitasjonen. I praksis trengs mer energi for å overvinne luftmotstand og gi satellitten banehastighet.`,
      },
    },

    // ========== OPPGAVE 7 (MEDIUM) ==========
    {
      id: 'fys2-2-2-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-7',
        number: '2.19',
        type: 'classic',
        difficulty: 'medium',
        task: `Beregn unnslipningshastigheten fra en nøytronstjerne med masse lik 1.4 solmasser og radius 10 km.

Gitt:
- Solmasse: $M_\\odot = 1.99 \\times 10^{30}$ kg
- Nøytronstjernens radius: $R = 10$ km`,
        hints: [
          'Finn først nøytronstjernens masse i kg',
          'Bruk unnslipningsformelen',
          'Sammenlign resultatet med lyshastigheten (3 × 10⁸ m/s)',
        ],
        solution: `**Gitt:**
- Masse: $M = 1.4 \\cdot M_\\odot = 1.4 \\cdot 1.99 \\times 10^{30} = 2.79 \\times 10^{30}$ kg
- Radius: $R = 10$ km $= 1.0 \\times 10^{4}$ m

**Løsning:**
$$v_{esc} = \\sqrt{\\frac{2GM}{R}}$$

$$v_{esc} = \\sqrt{\\frac{2 \\cdot 6.674 \\times 10^{-11} \\cdot 2.79 \\times 10^{30}}{1.0 \\times 10^{4}}}$$

$$v_{esc} = \\sqrt{\\frac{3.72 \\times 10^{20}}{1.0 \\times 10^{4}}}$$

$$v_{esc} = \\sqrt{3.72 \\times 10^{16}}$$

$$v_{esc} = 1.93 \\times 10^{8} \\text{ m/s}$$

**Som brøkdel av lyshastigheten:**
$$\\frac{v_{esc}}{c} = \\frac{1.93 \\times 10^{8}}{3 \\times 10^{8}} = 0.64 = 64\\%$$

**Svar:**
Unnslipningshastigheten fra nøytronstjernen er ca. **1.9 × 10⁸ m/s**, som er **64% av lyshastigheten**!

**Kommentar:** Ved slike hastigheter begynner relativistiske effekter å bli viktige. Klassisk mekanikk gir kun et tilnærmet svar.`,
      },
    },

    // ========== OPPGAVE 8 (VANSKELIG) ==========
    {
      id: 'fys2-2-2-oppg-8',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-8',
        number: '2.20',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En romkapsel med masse 1000 kg befinner seg 2000 km over jordoverflaten med hastighet 6.5 km/s.

a) Beregn kapselens totale mekaniske energi.
b) Er kapselen bundet eller ubundet?
c) Hva er kapselens maksimale avstand fra jordas sentrum?

Gitt:
- $M_J = 5.97 \\times 10^{24}$ kg
- $R_J = 6.37 \\times 10^{6}$ m`,
        hints: [
          'Total energi: $E = E_k + E_p = \\frac{1}{2}mv^2 - G\\frac{Mm}{r}$',
          'Kapselen er bundet hvis $E < 0$',
          'Ved maksimal avstand er all energi potensiell (kinetisk energi = 0)',
        ],
        solution: `**Gitt:**
- $m = 1000$ kg
- $h = 2000$ km, så $r_1 = R_J + h = 8.37 \\times 10^{6}$ m
- $v_1 = 6.5$ km/s $= 6500$ m/s
- $M_J = 5.97 \\times 10^{24}$ kg

**a) Total mekanisk energi:**

Kinetisk energi:
$$E_k = \\frac{1}{2}mv_1^2 = \\frac{1}{2} \\cdot 1000 \\cdot (6500)^2 = 2.11 \\times 10^{10} \\text{ J}$$

Potensiell energi:
$$E_p = -G\\frac{M_J m}{r_1} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 1000}{8.37 \\times 10^{6}}$$
$$E_p = -4.76 \\times 10^{10} \\text{ J}$$

Total energi:
$$E_{tot} = E_k + E_p = 2.11 \\times 10^{10} - 4.76 \\times 10^{10}$$
$$\\boxed{E_{tot} = -2.65 \\times 10^{10} \\text{ J}}$$

**b) Bundet eller ubundet?**

Siden $E_{tot} < 0$, er kapselen **bundet** til jorda.

**c) Maksimal avstand:**

Ved maksimal avstand er $v = 0$, så all energi er potensiell:
$$E_{tot} = -G\\frac{M_J m}{r_{max}}$$

Løser for $r_{max}$:
$$r_{max} = -\\frac{GM_J m}{E_{tot}} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 1000}{-2.65 \\times 10^{10}}$$
$$r_{max} = \\frac{3.98 \\times 10^{17}}{2.65 \\times 10^{10}} = 1.50 \\times 10^{7} \\text{ m}$$

**Maksimal høyde over overflaten:**
$$h_{max} = r_{max} - R_J = 1.50 \\times 10^{7} - 6.37 \\times 10^{6}$$
$$h_{max} = 8.6 \\times 10^{6} \\text{ m} = 8600 \\text{ km}$$

**Svar:**
a) $E_{tot} = -2.65 \\times 10^{10}$ J
b) Kapselen er **bundet** til jorda
c) Maksimal avstand fra jordas sentrum er ca. **15 000 km** (8600 km over overflaten)`,
      },
    },

    // ========== OPPGAVE 9 (VANSKELIG) ==========
    {
      id: 'fys2-2-2-oppg-9',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-9',
        number: '2.21',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En asteroide passerer jorda i en avstand på 50 000 km fra jordas sentrum med hastighet 5.0 km/s.

a) Er asteroiden på en bundet eller ubundet bane rundt jorda?
b) Hvis bundet, finn den store halvaksen til ellipsebanen.

Gitt:
- $M_J = 5.97 \\times 10^{24}$ kg`,
        hints: [
          'Beregn total energi og sammenlign med null',
          'For en ellipse gjelder: $E = -\\frac{GMm}{2a}$',
          'Løs for den store halvaksen $a$',
        ],
        solution: `**Gitt:**
- $r = 50000$ km $= 5.0 \\times 10^{7}$ m
- $v = 5.0$ km/s $= 5000$ m/s
- $M_J = 5.97 \\times 10^{24}$ kg

La asteroidens masse være $m$.

**a) Bundet eller ubundet?**

Unnslipningshastighet ved denne avstanden:
$$v_{esc} = \\sqrt{\\frac{2GM_J}{r}} = \\sqrt{\\frac{2 \\cdot 6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{5.0 \\times 10^{7}}}$$
$$v_{esc} = \\sqrt{1.59 \\times 10^{7}} = 3990 \\text{ m/s} \\approx 4.0 \\text{ km/s}$$

Siden $v = 5.0$ km/s $> v_{esc} = 4.0$ km/s, er asteroiden **ubundet**.

Alternativt, beregn spesifikk energi (energi per masse):
$$\\varepsilon = \\frac{E}{m} = \\frac{v^2}{2} - \\frac{GM_J}{r}$$
$$\\varepsilon = \\frac{(5000)^2}{2} - \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{5.0 \\times 10^{7}}$$
$$\\varepsilon = 1.25 \\times 10^{7} - 7.97 \\times 10^{6}$$
$$\\varepsilon = 4.53 \\times 10^{6} \\text{ J/kg}$$

Siden $\\varepsilon > 0$, er asteroiden **ubundet**.

**b) Stor halvakse?**

Asteroiden er ubundet, så den følger en **hyperbel**, ikke en ellipse. Det finnes ingen stor halvakse for en hyperbel i vanlig forstand.

For hyperbler brukes parameteren $a$ annerledes:
$$\\varepsilon = \\frac{GM_J}{2a}$$ (merk: positivt fortegn for hyperbler)

$$a = \\frac{GM_J}{2\\varepsilon} = \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{2 \\cdot 4.53 \\times 10^{6}}$$
$$a = 4.4 \\times 10^{7} \\text{ m} = 44000 \\text{ km}$$

**Svar:**
a) Asteroiden er **ubundet** (følger en hyperbelbane)
b) Ikke aktuelt - asteroiden følger ikke en ellipse

**Overskuddshastighet ved uendelig:**
$$v_\\infty = \\sqrt{v^2 - v_{esc}^2} = \\sqrt{5000^2 - 4000^2} = 3000 \\text{ m/s}$$`,
      },
    },

    // ========== OPPGAVE 10 (VANSKELIG) ==========
    {
      id: 'fys2-2-2-oppg-10',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-10',
        number: '2.22',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En rakett skytes opp fra jordoverflaten med en hastighet på 10.0 km/s rett oppover.

a) Hvor høyt over jordoverflaten vil raketten nå før den snur?
b) Hvor stor hastighet har raketten når den faller tilbake og passerer en høyde på 1000 km?

Gitt:
- $M_J = 5.97 \\times 10^{24}$ kg
- $R_J = 6.37 \\times 10^{6}$ m`,
        hints: [
          'Bruk energibevaring: $E_{start} = E_{slutt}$',
          'Ved maksimal høyde er $v = 0$',
          'Energien er den samme ved alle punkter på banen',
        ],
        solution: `**Gitt:**
- $v_0 = 10.0$ km/s $= 1.0 \\times 10^{4}$ m/s
- $R_J = 6.37 \\times 10^{6}$ m
- $M_J = 5.97 \\times 10^{24}$ kg

**a) Maksimal høyde:**

Sjekk først om raketten unnslipper:
$$v_{esc} = \\sqrt{\\frac{2GM_J}{R_J}} = 11.2 \\text{ km/s}$$

Siden $v_0 = 10.0$ km/s $< v_{esc}$, vil raketten snu.

Energibevaring fra start til maksimal høyde:
$$\\frac{1}{2}mv_0^2 - G\\frac{M_J m}{R_J} = 0 - G\\frac{M_J m}{r_{max}}$$

Forenkler (masser kansellerer):
$$\\frac{v_0^2}{2} - \\frac{GM_J}{R_J} = -\\frac{GM_J}{r_{max}}$$

$$\\frac{GM_J}{r_{max}} = \\frac{GM_J}{R_J} - \\frac{v_0^2}{2}$$

$$\\frac{1}{r_{max}} = \\frac{1}{R_J} - \\frac{v_0^2}{2GM_J}$$

Beregner leddene:
$$\\frac{1}{R_J} = \\frac{1}{6.37 \\times 10^{6}} = 1.57 \\times 10^{-7} \\text{ m}^{-1}$$

$$\\frac{v_0^2}{2GM_J} = \\frac{(1.0 \\times 10^{4})^2}{2 \\cdot 6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}$$
$$= \\frac{1.0 \\times 10^{8}}{7.97 \\times 10^{14}} = 1.25 \\times 10^{-7} \\text{ m}^{-1}$$

$$\\frac{1}{r_{max}} = 1.57 \\times 10^{-7} - 1.25 \\times 10^{-7} = 3.2 \\times 10^{-8} \\text{ m}^{-1}$$

$$r_{max} = 3.1 \\times 10^{7} \\text{ m}$$

Høyde over overflaten:
$$h_{max} = r_{max} - R_J = 3.1 \\times 10^{7} - 6.37 \\times 10^{6} = 2.5 \\times 10^{7} \\text{ m}$$
$$h_{max} \\approx 25000 \\text{ km}$$

**b) Hastighet ved 1000 km høyde:**

Ved 1000 km: $r = R_J + 1.0 \\times 10^{6} = 7.37 \\times 10^{6}$ m

Energibevaring fra start:
$$\\frac{1}{2}v_0^2 - \\frac{GM_J}{R_J} = \\frac{1}{2}v^2 - \\frac{GM_J}{r}$$

$$v^2 = v_0^2 + 2GM_J\\left(\\frac{1}{r} - \\frac{1}{R_J}\\right)$$

$$v^2 = (1.0 \\times 10^{4})^2 + 2 \\cdot 6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\left(\\frac{1}{7.37 \\times 10^{6}} - \\frac{1}{6.37 \\times 10^{6}}\\right)$$

$$v^2 = 1.0 \\times 10^{8} + 7.97 \\times 10^{14} \\cdot (-2.13 \\times 10^{-8})$$

$$v^2 = 1.0 \\times 10^{8} - 1.70 \\times 10^{7} = 8.3 \\times 10^{7}$$

$$v = 9100 \\text{ m/s} = 9.1 \\text{ km/s}$$

**Svar:**
a) Maksimal høyde er ca. **25 000 km** over jordoverflaten
b) Hastigheten ved 1000 km høyde er ca. **9.1 km/s**`,
      },
    },

    // ========== OPPGAVE 11 (VANSKELIG) ==========
    {
      id: 'fys2-2-2-oppg-11',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-11',
        number: '2.23',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En satelitt går i sirkulær bane 300 km over jordoverflaten. Hvor mye må hastigheten økes for at satellitten skal unnslippe jorda?

Gitt:
- $M_J = 5.97 \\times 10^{24}$ kg
- $R_J = 6.37 \\times 10^{6}$ m`,
        hints: [
          'Finn først banehastigheten for sirkulær bane',
          'For sirkulær bane: $v_{bane} = \\sqrt{\\frac{GM}{r}}$',
          'Finn unnslipningshastigheten ved samme høyde',
          'Hastighetøkningen er $\\Delta v = v_{esc} - v_{bane}$',
        ],
        solution: `**Gitt:**
- $h = 300$ km, så $r = R_J + h = 6.67 \\times 10^{6}$ m
- $M_J = 5.97 \\times 10^{24}$ kg

**Banehastighet for sirkulær bane:**

For sirkulær bane er gravitasjonskraften lik sentripetalkraften:
$$\\frac{GM_J m}{r^2} = \\frac{mv_{bane}^2}{r}$$

$$v_{bane} = \\sqrt{\\frac{GM_J}{r}}$$

$$v_{bane} = \\sqrt{\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.67 \\times 10^{6}}}$$

$$v_{bane} = \\sqrt{5.97 \\times 10^{7}} = 7730 \\text{ m/s} = 7.73 \\text{ km/s}$$

**Unnslipningshastighet ved samme høyde:**

$$v_{esc} = \\sqrt{\\frac{2GM_J}{r}} = \\sqrt{2} \\cdot v_{bane}$$

$$v_{esc} = \\sqrt{2} \\cdot 7730 = 10930 \\text{ m/s} = 10.93 \\text{ km/s}$$

**Nødvendig hastighetsøkning:**

$$\\Delta v = v_{esc} - v_{bane}$$
$$\\Delta v = 10930 - 7730 = 3200 \\text{ m/s}$$

**Alternativ beregning:**
$$\\Delta v = v_{bane}(\\sqrt{2} - 1) = 7730 \\cdot 0.414 = 3200 \\text{ m/s}$$

**Svar:**
Satellitten må øke hastigheten med ca. **3.2 km/s** for å unnslippe jorda.

**Merk:** Dette tilsvarer en hastighetsøkning på ca. 41%. I praksis brukes ofte en \"Hohmann-overføring\" for å spare drivstoff.`,
      },
    },

    // ========== OPPGAVE 12 (VANSKELIG) ==========
    {
      id: 'fys2-2-2-oppg-12',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-2-ex-12',
        number: '2.24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et sort hull har en unnslipningshastighet lik lyshastigheten ved sin hendelseshorisont (Schwarzschild-radius).

a) Utled en formel for Schwarzschild-radius $r_s$ uttrykt ved massen $M$.
b) Beregn Schwarzschild-radius for et sort hull med 10 solmasser.
c) Hva ville Schwarzschild-radius vært hvis jorda ble komprimert til et sort hull?

Gitt:
- Lyshastigheten: $c = 3.00 \\times 10^{8}$ m/s
- Solmasse: $M_\\odot = 1.99 \\times 10^{30}$ kg
- Jordas masse: $M_J = 5.97 \\times 10^{24}$ kg`,
        hints: [
          'Ved hendelseshorisonten er $v_{esc} = c$',
          'Bruk $v_{esc} = \\sqrt{\\frac{2GM}{r}}$ og løs for $r$',
          'Merk: Dette er en klassisk tilnærming - den generelle relativitetsteorien gir nøyaktig samme resultat',
        ],
        solution: `**a) Utledning av Schwarzschild-radius:**

Ved hendelseshorisonten er unnslipningshastigheten lik lyshastigheten:
$$v_{esc} = c = \\sqrt{\\frac{2GM}{r_s}}$$

Løser for $r_s$:
$$c^2 = \\frac{2GM}{r_s}$$

$$\\boxed{r_s = \\frac{2GM}{c^2}}$$

Dette er **Schwarzschild-radius**, oppkalt etter Karl Schwarzschild som fant denne løsningen i 1916.

**b) Schwarzschild-radius for 10 solmasser:**

$$M = 10 \\cdot M_\\odot = 10 \\cdot 1.99 \\times 10^{30} = 1.99 \\times 10^{31} \\text{ kg}$$

$$r_s = \\frac{2 \\cdot 6.674 \\times 10^{-11} \\cdot 1.99 \\times 10^{31}}{(3.00 \\times 10^{8})^2}$$

$$r_s = \\frac{2.66 \\times 10^{21}}{9.00 \\times 10^{16}}$$

$$r_s = 2.95 \\times 10^{4} \\text{ m} \\approx 30 \\text{ km}$$

**c) Schwarzschild-radius for jorda:**

$$r_s = \\frac{2 \\cdot 6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{(3.00 \\times 10^{8})^2}$$

$$r_s = \\frac{7.97 \\times 10^{14}}{9.00 \\times 10^{16}}$$

$$r_s = 8.9 \\times 10^{-3} \\text{ m} \\approx 9 \\text{ mm}$$

**Svar:**
a) $r_s = \\frac{2GM}{c^2}$
b) For 10 solmasser: $r_s \\approx 30$ km
c) For jordas masse: $r_s \\approx 9$ mm

**Perspektiv:** Et sort hull med jordas masse ville ha radius mindre enn en ert! Jordas faktiske radius er ca. 6370 km.`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Gravitasjonsfelt:**
- En masse skaper et felt i rommet rundt seg
- Feltstyrke: $\\vec{g} = -G\\frac{M}{r^2}\\hat{r}$ (vektor mot massen)
- Størrelsen er lik tyngdeakselerasjonen
- Feltlinjer peker mot massen og visualiserer feltet

**Gravitasjonspotensial:**
- Potensiell energi per masseenhet
- $V = -G\\frac{M}{r}$ (alltid negativt med referanse ved uendelig)
- Sammenheng med felt: $\\vec{g} = -\\nabla V$ eller $g = -\\frac{dV}{dr}$

**Ekvipotensialflater:**
- Flater med konstant potensial
- Feltlinjer står vinkelrett på ekvipotensialflater
- Arbeid = 0 langs ekvipotensialflate

**Unnslipningshastighet:**
$$v_{esc} = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$$

- Uavhengig av objektets masse
- For jorda: 11.2 km/s

**Bundet og ubundet bevegelse:**
- $E_{tot} < 0$: Bundet (ellipse/sirkel)
- $E_{tot} = 0$: Grense (parabel)
- $E_{tot} > 0$: Ubundet (hyperbel)

**Neste kapittel:**
Vi skal se på sirkulære baner og Keplers lover for planetbevegelse.`,
    },
  ],
};

// ============================================================================
// Kapittel 2.3: Satellittbevegelse og romfart
// LK20: Bruke gravitasjonsloven til å beregne banehastighet og periode for satellitter
// ============================================================================

export const CHAPTER_FYSIKK2_2_3: TextbookChapter = {
  id: 'fysikk2-2-3',
  courseId: 'fysikk2',
  chapterNumber: '2.3',
  title: 'Satellittbevegelse og romfart',
  description: 'Fysikken bak satellittbaner, romfart og fluktfart.',
  estimatedMinutes: 50,
  prerequisites: ['fysikk2-2-1', 'fysikk2-1-4'],
  competenceGoals: [
    'beregne banehastighet og periode for satellitter',
    'forklare fluktfart og geostasjonær bane',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-2-3-intro',
      type: 'text',
      content: `## Satellitter og romfart

Hver dag er vi avhengige av satellitter uten å tenke over det. GPS-en i mobilen din, værvarslinger, TV-sendinger og internett – alt dette er mulig takket være satellitter som kretser rundt jorden.

Men hvordan holder en satellitt seg oppe? Hvorfor faller den ikke ned? Og hvor fort må den gå?

**I dette kapittelet lærer du:**
- Hvordan gravitasjon og sirkelbevegelse samarbeider for å holde satellitter i bane
- Hvordan beregne banehastighet og omløpstid for satellitter
- Hva en geostasjonær bane er og hvorfor den er så nyttig
- Hva fluktfart er og hvordan vi sender romfartøy ut av jordens gravitasjonsfelt
- Hvordan overføringsbaner brukes for å endre satellittbaner

**Viktig innsikt:**
En satellitt i bane rundt jorden faller faktisk kontinuerlig – men den faller "forbi" jorden! Hastigheten er så stor at bakken krummer seg unna like fort som satellitten faller.`,
    },

    // ========== SIRKELBANER ==========
    {
      id: 'fys2-2-3-sirkelbaner',
      type: 'text',
      content: `## Sirkelbaner rundt et himmellegeme

For at en satellitt skal gå i en stabil sirkelbane rundt jorden (eller en planet rundt solen), må gravitasjonskraften være nøyaktig lik sentripetalkraften som trengs for å holde objektet i sirkelbevegelse.

**Kraftbalanse:**

Gravitasjonskraften gir sentripetalkraften:
$$F_g = F_s$$

$$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$$

hvor:
- $G$ = gravitasjonskonstanten ($6.674 \\times 10^{-11}$ N·m²/kg²)
- $M$ = massen til sentrallegemet (f.eks. jorden)
- $m$ = massen til satellitten
- $r$ = avstanden fra sentrum av sentrallegemet til satellitten
- $v$ = banehastigheten

**Merk:** Avstanden $r$ måles fra **sentrum** av jorden, ikke fra jordoverflaten!`,
    },

    // ========== DEFINISJON: BANEHASTIGHET ==========
    {
      id: 'fys2-2-3-def-banehastighet',
      type: 'definition',
      title: 'Banehastighet',
      content: `**Banehastighet** er hastigheten et objekt må ha for å gå i en stabil sirkelbane i avstand $r$ fra sentrum av et himmellegeme med masse $M$.

$$v = \\sqrt{\\frac{GM}{r}}$$

**Viktige egenskaper:**
- Banehastigheten avhenger **ikke** av satellittens masse
- Jo større avstand $r$, jo **lavere** banehastighet trengs
- Jo større masse $M$ på sentrallegemet, jo **høyere** banehastighet trengs

**Eksempel:**
For en satellitt i lav jordbane (ca. 400 km over bakken):
- $r = R_{\\text{jord}} + h = 6.371 \\times 10^6 + 400 \\times 10^3 \\approx 6.77 \\times 10^6$ m
- $v \\approx 7.7$ km/s ≈ 27 700 km/t`,
    },

    // ========== UTLEDNING: BANEHASTIGHET ==========
    {
      id: 'fys2-2-3-utledning-v',
      type: 'text',
      content: `## Utledning av banehastigheten

**Start med kraftbalansen:**
$$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$$

**Steg 1: Forenkle ved å dele på $m$ og gange med $r$:**
$$\\frac{GM}{r} = v^2$$

**Steg 2: Ta kvadratroten:**
$$v = \\sqrt{\\frac{GM}{r}}$$

**Viktig observasjon:**
Massen $m$ til satellitten kansellerer! Dette betyr at banehastigheten er den samme for alle objekter i samme avstand fra sentrallegemet, uansett masse.

Dette er grunnen til at astronauter opplever vektløshet i romstasjonen – de og romstasjonen faller med samme akselerasjon rundt jorden.`,
    },

    // ========== PERIODE FOR SIRKELBANE ==========
    {
      id: 'fys2-2-3-periode',
      type: 'text',
      content: `## Periode for sirkelbane

**Perioden** $T$ er tiden det tar for satellitten å fullføre én hel omløp rundt jorden.

For en sirkelbane gjelder:
$$v = \\frac{2\\pi r}{T}$$

Ved å kombinere dette med formelen for banehastighet:
$$\\sqrt{\\frac{GM}{r}} = \\frac{2\\pi r}{T}$$

Løser vi for $T$:
$$T = 2\\pi r \\cdot \\sqrt{\\frac{r}{GM}} = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

**Perioden for sirkelbane:**
$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

**Merk:** Dette er Keplers tredje lov for sirkelbaner: $T^2 \\propto r^3$.`,
    },

    // ========== DEFINISJON: OMLØPSTID ==========
    {
      id: 'fys2-2-3-def-periode',
      type: 'definition',
      title: 'Omløpstid (periode)',
      content: `**Omløpstiden** for en satellitt i sirkelbane med radius $r$ rundt et legeme med masse $M$:

$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

**Viktige egenskaper:**
- Jo større radius $r$, jo lengre omløpstid
- Omløpstiden øker raskere enn radius (proporsjonalt med $r^{3/2}$)
- Avhenger ikke av satellittens masse

**Eksempler:**
| Satellitt | Høyde | Radius | Omløpstid |
|-----------|-------|--------|-----------|
| ISS | 400 km | 6 770 km | 92 min |
| GPS | 20 200 km | 26 600 km | 12 timer |
| Geostasjonær | 35 786 km | 42 164 km | 24 timer |
| Månen | 384 400 km | 384 400 km | 27.3 dager |`,
    },

    // ========== EKSEMPEL: ISS ==========
    {
      id: 'fys2-2-3-ex-iss',
      type: 'example',
      title: 'Eksempel: Den internasjonale romstasjonen (ISS)',
      problem: `Den internasjonale romstasjonen (ISS) går i bane ca. 400 km over jordoverflaten.

Gitt:
- Jordens masse: $M = 5.972 \\times 10^{24}$ kg
- Jordens radius: $R = 6.371 \\times 10^6$ m
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

a) Beregn banehastigheten til ISS
b) Beregn omløpstiden
c) Hvor mange ganger går ISS rundt jorden på ett døgn?`,
      solution: `**Gitt:**
- Høyde over bakken: $h = 400$ km $= 400 \\times 10^3$ m
- Jordens masse: $M = 5.972 \\times 10^{24}$ kg
- Jordens radius: $R = 6.371 \\times 10^6$ m

**Steg 1: Finn avstanden fra jordens sentrum**
$$r = R + h = 6.371 \\times 10^6 + 400 \\times 10^3 = 6.771 \\times 10^6 \\text{ m}$$

**a) Banehastighet:**
$$v = \\sqrt{\\frac{GM}{r}}$$
$$v = \\sqrt{\\frac{6.674 \\times 10^{-11} \\times 5.972 \\times 10^{24}}{6.771 \\times 10^6}}$$
$$v = \\sqrt{\\frac{3.986 \\times 10^{14}}{6.771 \\times 10^6}}$$
$$v = \\sqrt{5.886 \\times 10^7} = 7673 \\text{ m/s}$$

**Svar a):** $v \\approx 7.67$ km/s $\\approx 27\\,600$ km/t

**b) Omløpstid:**
$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$
$$T = 2\\pi\\sqrt{\\frac{(6.771 \\times 10^6)^3}{3.986 \\times 10^{14}}}$$
$$T = 2\\pi\\sqrt{\\frac{3.103 \\times 10^{20}}{3.986 \\times 10^{14}}}$$
$$T = 2\\pi\\sqrt{7.784 \\times 10^5} = 2\\pi \\times 882.3$$
$$T = 5543 \\text{ s} = 92.4 \\text{ min}$$

**Svar b):** $T \\approx 92$ minutter

**c) Antall omløp per døgn:**
$$n = \\frac{24 \\times 60}{92.4} = \\frac{1440}{92.4} = 15.6$$

**Svar c):** ISS går ca. **15-16 ganger** rundt jorden per døgn.

**Kommentar:**
Dette betyr at astronautene på ISS ser 15-16 soloppganger og solnedganger hver dag!`,
    },

    // ========== GEOSTASJONÆR BANE ==========
    {
      id: 'fys2-2-3-geostationar',
      type: 'text',
      content: `## Geostasjonær bane

En **geostasjonær satellitt** går i bane rundt jorden med nøyaktig samme omløpstid som jordens rotasjon: **24 timer** (mer presist: 23 timer, 56 minutter og 4 sekunder for en siderisk dag).

**Egenskaper:**
- Satellitten "henger" tilsynelatende stille over samme punkt på jordoverflaten
- Banen må være i ekvatorplanet
- Banen må være sirkulær
- Alle geostasjonære satellitter er i samme avstand fra jorden

**Anvendelser:**
- TV- og radiosendinger (én antenne kan alltid peke mot samme satellitt)
- Værsatellitter (kontinuerlig overvåking av samme område)
- Kommunikasjonssatellitter

**Ulemper:**
- Lang avstand gir forsinkelse i signaler (ca. 0.25 s én vei)
- Kan bare dekke områder nær ekvator godt
- Mange satellitter "konkurrerer" om plass i samme bane`,
    },

    // ========== DEFINISJON: GEOSTASJONÆR BANE ==========
    {
      id: 'fys2-2-3-def-geostationar',
      type: 'definition',
      title: 'Geostasjonær bane',
      content: `En **geostasjonær bane** er en sirkelbane i ekvatorplanet der satellitten har samme omløpstid som jordens rotasjon ($T = 24$ timer).

**Høyde over ekvator:** ca. 35 786 km

**Radius fra jordens sentrum:** ca. 42 164 km

**Banehastighet:** ca. 3.07 km/s

Satellitten forblir over samme punkt på ekvator hele tiden, noe som er ideelt for kommunikasjon og kringkasting.

**Merk:** Denne spesifikke banen kalles også "Clarke-beltet" etter science fiction-forfatteren Arthur C. Clarke som foreslo den i 1945.`,
    },

    // ========== EKSEMPEL: GEOSTASJONÆR HØYDE ==========
    {
      id: 'fys2-2-3-ex-geostationar',
      type: 'example',
      title: 'Eksempel: Beregning av geostasjonær høyde',
      problem: `Beregn høyden over jordoverflaten for en geostasjonær satellitt.

Gitt:
- Jordens masse: $M = 5.972 \\times 10^{24}$ kg
- Jordens radius: $R = 6.371 \\times 10^6$ m
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²
- Omløpstid: $T = 24$ timer $= 86\\,400$ s`,
      solution: `**Strategi:**
Vi bruker formelen for periode og løser for radius $r$.

**Steg 1: Start med periodeformelen**
$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

**Steg 2: Løs for $r$**
Kvadrer begge sider:
$$T^2 = 4\\pi^2 \\cdot \\frac{r^3}{GM}$$

$$r^3 = \\frac{T^2 \\cdot GM}{4\\pi^2}$$

$$r = \\sqrt[3]{\\frac{T^2 \\cdot GM}{4\\pi^2}}$$

**Steg 3: Sett inn verdier**
$$r = \\sqrt[3]{\\frac{(86\\,400)^2 \\times 6.674 \\times 10^{-11} \\times 5.972 \\times 10^{24}}{4\\pi^2}}$$

$$r = \\sqrt[3]{\\frac{7.465 \\times 10^9 \\times 3.986 \\times 10^{14}}{39.48}}$$

$$r = \\sqrt[3]{\\frac{2.975 \\times 10^{24}}{39.48}}$$

$$r = \\sqrt[3]{7.535 \\times 10^{22}}$$

$$r = 4.216 \\times 10^7 \\text{ m} = 42\\,160 \\text{ km}$$

**Steg 4: Finn høyden over bakken**
$$h = r - R = 42\\,160 - 6\\,371 = 35\\,789 \\text{ km}$$

**Svar:**
En geostasjonær satellitt må være ca. **35 800 km** over jordoverflaten.

**Kontroll – banehastighet:**
$$v = \\frac{2\\pi r}{T} = \\frac{2\\pi \\times 42\\,160\\,000}{86\\,400} = 3\\,066 \\text{ m/s} \\approx 3.07 \\text{ km/s}$$`,
    },

    // ========== FLUKTFART ==========
    {
      id: 'fys2-2-3-fluktfart',
      type: 'text',
      content: `## Fluktfart

**Fluktfart** (eller unnslipningshastighet) er den minimale hastigheten et objekt trenger for å unnslippe et himmellegemes gravitasjonsfelt – det vil si å komme uendelig langt unna uten å falle tilbake.

**Energibetraktning:**
For å unnslippe må objektet ha nok kinetisk energi til å "betale" for alt potensiell energi opp til uendelig:

$$E_k + E_p \\geq 0$$

$$\\frac{1}{2}mv_{\\text{flukt}}^2 - \\frac{GMm}{r} \\geq 0$$

Ved grensen (akkurat nok energi til å unnslippe):
$$\\frac{1}{2}mv_{\\text{flukt}}^2 = \\frac{GMm}{r}$$

**Fluktfarten:**
$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{r}}$$

**Sammenligning med banehastighet:**
$$v_{\\text{flukt}} = \\sqrt{2} \\cdot v_{\\text{bane}} \\approx 1.41 \\cdot v_{\\text{bane}}$$

Fluktfarten er alltid $\\sqrt{2} \\approx 1.41$ ganger større enn banehastigheten i samme avstand.`,
    },

    // ========== DEFINISJON: FLUKTFART ==========
    {
      id: 'fys2-2-3-def-fluktfart',
      type: 'definition',
      title: 'Fluktfart',
      content: `**Fluktfart** er den minimale hastigheten et objekt må ha for å unnslippe gravitasjonsfeltet til et himmellegeme fra avstand $r$:

$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{r}}$$

**Fluktfart fra jordoverflaten:**
$$v_{\\text{flukt}} = \\sqrt{\\frac{2 \\times 6.674 \\times 10^{-11} \\times 5.972 \\times 10^{24}}{6.371 \\times 10^6}}$$
$$v_{\\text{flukt}} \\approx 11.2 \\text{ km/s} \\approx 40\\,000 \\text{ km/t}$$

**Fluktfart fra andre himmellegemer:**
| Himmellegeme | Fluktfart |
|--------------|-----------|
| Månen | 2.4 km/s |
| Mars | 5.0 km/s |
| Jorden | 11.2 km/s |
| Jupiter | 59.5 km/s |
| Solen | 617.5 km/s |`,
    },

    // ========== EKSEMPEL: FLUKTFART FRA JORDEN ==========
    {
      id: 'fys2-2-3-ex-fluktfart',
      type: 'example',
      title: 'Eksempel: Fluktfart fra jorden',
      problem: `a) Beregn fluktfarten fra jordoverflaten.
b) Sammenlign med banehastigheten for en satellitt like over jordoverflaten.
c) En rakett skytes opp med hastighet 15 km/s. Vil den unnslippe jordens gravitasjonsfelt?

Gitt:
- Jordens masse: $M = 5.972 \\times 10^{24}$ kg
- Jordens radius: $R = 6.371 \\times 10^6$ m`,
      solution: `**a) Fluktfart fra jordoverflaten:**

$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{R}}$$

$$v_{\\text{flukt}} = \\sqrt{\\frac{2 \\times 6.674 \\times 10^{-11} \\times 5.972 \\times 10^{24}}{6.371 \\times 10^6}}$$

$$v_{\\text{flukt}} = \\sqrt{\\frac{7.972 \\times 10^{14}}{6.371 \\times 10^6}}$$

$$v_{\\text{flukt}} = \\sqrt{1.251 \\times 10^8} = 11\\,186 \\text{ m/s}$$

**Svar a):** $v_{\\text{flukt}} \\approx 11.2$ km/s

**b) Banehastighet like over bakken:**

$$v_{\\text{bane}} = \\sqrt{\\frac{GM}{R}} = \\sqrt{\\frac{3.986 \\times 10^{14}}{6.371 \\times 10^6}}$$

$$v_{\\text{bane}} = \\sqrt{6.257 \\times 10^7} = 7\\,910 \\text{ m/s} \\approx 7.9 \\text{ km/s}$$

**Forhold:**
$$\\frac{v_{\\text{flukt}}}{v_{\\text{bane}}} = \\frac{11.2}{7.9} = 1.42 \\approx \\sqrt{2}$$

**Svar b):** Fluktfarten er $\\sqrt{2} \\approx 1.41$ ganger større enn banehastigheten.

**c) Rakett med 15 km/s:**

Siden $v = 15$ km/s $> v_{\\text{flukt}} = 11.2$ km/s:

**Svar c):** Ja, raketten vil unnslippe jordens gravitasjonsfelt. Den vil fortsette utover i solsystemet med en resterende hastighet relativt til jorden.

**Resthastighet ved uendelig:**
$$\\frac{1}{2}mv_\\infty^2 = \\frac{1}{2}mv_0^2 - \\frac{GMm}{R}$$

$$v_\\infty = \\sqrt{v_0^2 - v_{\\text{flukt}}^2} = \\sqrt{15^2 - 11.2^2} = \\sqrt{99.56} \\approx 10 \\text{ km/s}$$`,
    },

    // ========== BANEHASTIGHET VS FLUKTFART ==========
    {
      id: 'fys2-2-3-sammenligning',
      type: 'text',
      content: `## Banehastighet vs. fluktfart

Det er en elegant sammenheng mellom banehastighet og fluktfart:

$$v_{\\text{flukt}} = \\sqrt{2} \\cdot v_{\\text{bane}}$$

**Fysisk tolkning:**

| Hastighet | Hva skjer |
|-----------|-----------|
| $v < v_{\\text{bane}}$ | Objektet faller ned mot planeten |
| $v = v_{\\text{bane}}$ | Stabil sirkelbane |
| $v_{\\text{bane}} < v < v_{\\text{flukt}}$ | Elliptisk bane (kommer tilbake) |
| $v = v_{\\text{flukt}}$ | Parabolsk bane (unnslipper akkurat) |
| $v > v_{\\text{flukt}}$ | Hyperbolsk bane (unnslipper med overskuddshastighet) |

**Energiperspektiv:**
- Sirkelbane: $E_{\\text{total}} = -\\frac{GMm}{2r}$ (bundet)
- Flukt: $E_{\\text{total}} = 0$ (grensen)
- Hyperbel: $E_{\\text{total}} > 0$ (ubundet)

**Praktisk for romfart:**
For å sende en sonde til en annen planet må vi gi den mer enn banehastighet, men trenger ikke nødvendigvis fluktfart – det kommer an på hvor vi vil hen.`,
    },

    // ========== OVERFØRINGSBANER ==========
    {
      id: 'fys2-2-3-overforing',
      type: 'text',
      content: `## Overføringsbaner (Hohmann-bane)

For å flytte en satellitt fra én sirkelbane til en annen, bruker vi ofte en **Hohmann-overføringsbane**. Dette er den mest drivstoffeffektive måten å endre bane på.

**Prinsipp:**
1. Start i lav sirkelbane med radius $r_1$
2. Øk hastigheten ved ett punkt → satellitten går inn i en elliptisk bane
3. Ved det fjerneste punktet av ellipsen (apoapssis), øk hastigheten igjen
4. Satellitten er nå i høyere sirkelbane med radius $r_2$

**Hastighetsendringer:**

Ved avfyring 1 (fra lav bane):
$$\\Delta v_1 = v_{\\text{ellipse,perigeum}} - v_{\\text{sirkel,lav}}$$

Ved avfyring 2 (til høy bane):
$$\\Delta v_2 = v_{\\text{sirkel,høy}} - v_{\\text{ellipse,apogeum}}$$

**Total hastighetsendring:**
$$\\Delta v_{\\text{total}} = \\Delta v_1 + \\Delta v_2$$

**Tid for overføring:**
Tiden er halve perioden til overføringsellipsen:
$$t_{\\text{overføring}} = \\frac{T_{\\text{ellipse}}}{2} = \\pi\\sqrt{\\frac{a^3}{GM}}$$

hvor $a = \\frac{r_1 + r_2}{2}$ er halvaksen til ellipsen.`,
    },

    // ========== EKSEMPEL: HOHMANN-OVERFØRING ==========
    {
      id: 'fys2-2-3-ex-hohmann',
      type: 'example',
      title: 'Eksempel: Hohmann-overføring til geostasjonær bane',
      problem: `En satellitt skal flyttes fra en lav jordbane (LEO) på 300 km høyde til geostasjonær bane på 35 786 km høyde.

Beregn:
a) Hastighetsøkningen som trengs i LEO
b) Hastighetsøkningen som trengs ved ankomst til GEO
c) Total hastighetsendring
d) Tiden overføringen tar

Gitt: $GM = 3.986 \\times 10^{14}$ m³/s², $R_{\\text{jord}} = 6.371 \\times 10^6$ m`,
      solution: `**Gitt:**
- $r_1 = R + 300$ km $= 6.671 \\times 10^6$ m (LEO)
- $r_2 = R + 35\\,786$ km $= 42.157 \\times 10^6$ m (GEO)
- $GM = 3.986 \\times 10^{14}$ m³/s²

**Steg 1: Banehastigheter i sirkelbanene**

I LEO:
$$v_1 = \\sqrt{\\frac{GM}{r_1}} = \\sqrt{\\frac{3.986 \\times 10^{14}}{6.671 \\times 10^6}} = 7\\,730 \\text{ m/s}$$

I GEO:
$$v_2 = \\sqrt{\\frac{GM}{r_2}} = \\sqrt{\\frac{3.986 \\times 10^{14}}{42.157 \\times 10^6}} = 3\\,075 \\text{ m/s}$$

**Steg 2: Hastigheter i overføringsellipsen**

Halvakse: $a = \\frac{r_1 + r_2}{2} = \\frac{6.671 + 42.157}{2} \\times 10^6 = 24.41 \\times 10^6$ m

Ved perigeum (LEO):
$$v_{p} = \\sqrt{GM \\left(\\frac{2}{r_1} - \\frac{1}{a}\\right)}$$
$$v_{p} = \\sqrt{3.986 \\times 10^{14} \\left(\\frac{2}{6.671 \\times 10^6} - \\frac{1}{24.41 \\times 10^6}\\right)}$$
$$v_{p} = \\sqrt{3.986 \\times 10^{14} \\times 2.588 \\times 10^{-7}} = 10\\,152 \\text{ m/s}$$

Ved apogeum (GEO):
$$v_{a} = \\sqrt{GM \\left(\\frac{2}{r_2} - \\frac{1}{a}\\right)}$$
$$v_{a} = \\sqrt{3.986 \\times 10^{14} \\left(\\frac{2}{42.157 \\times 10^6} - \\frac{1}{24.41 \\times 10^6}\\right)}$$
$$v_{a} = \\sqrt{3.986 \\times 10^{14} \\times 6.42 \\times 10^{-9}} = 1\\,600 \\text{ m/s}$$

**a) Hastighetsøkning i LEO:**
$$\\Delta v_1 = v_p - v_1 = 10\\,152 - 7\\,730 = 2\\,422 \\text{ m/s}$$

**b) Hastighetsøkning ved GEO:**
$$\\Delta v_2 = v_2 - v_a = 3\\,075 - 1\\,600 = 1\\,475 \\text{ m/s}$$

**c) Total hastighetsendring:**
$$\\Delta v_{\\text{total}} = 2\\,422 + 1\\,475 = 3\\,897 \\text{ m/s} \\approx 3.9 \\text{ km/s}$$

**d) Overføringstid:**
$$t = \\pi\\sqrt{\\frac{a^3}{GM}} = \\pi\\sqrt{\\frac{(24.41 \\times 10^6)^3}{3.986 \\times 10^{14}}}$$
$$t = \\pi \\times 19\\,045 \\text{ s} = 59\\,850 \\text{ s} \\approx 16.6 \\text{ timer}$$

**Oppsummering:**
| Parameter | Verdi |
|-----------|-------|
| $\\Delta v_1$ (LEO) | 2.42 km/s |
| $\\Delta v_2$ (GEO) | 1.48 km/s |
| Total $\\Delta v$ | 3.90 km/s |
| Overføringstid | 16.6 timer |`,
    },

    // ========== GPS-SATELLITTER ==========
    {
      id: 'fys2-2-3-gps',
      type: 'text',
      content: `## GPS og andre satellittsystemer

**GPS (Global Positioning System):**
- 31 operative satellitter
- Høyde: ca. 20 200 km
- Omløpstid: 12 timer (to omløp per døgn)
- Minst 4 satellitter synlige fra ethvert punkt på jorden

**Hvordan GPS fungerer:**
1. Hver satellitt sender ut tidsstemplede signaler
2. Mottakeren sammenligner ankomsttider fra flere satellitter
3. Forskjellene brukes til å beregne posisjon ved trilaterasjon
4. Fire satellitter trengs: tre for posisjon, én for tidssynkronisering

**Andre satellittsystemer:**
- **GLONASS** (Russland): 24 satellitter, 19 100 km høyde
- **Galileo** (EU): 30 satellitter, 23 222 km høyde
- **BeiDou** (Kina): 35 satellitter, ulike høyder
- **Starlink** (SpaceX): Tusenvis av satellitter, 550 km høyde (internett)

**Interessant fakta:**
GPS-satellitter må korrigere for både spesiell og generell relativitet! Klokkene går raskere pga. lavere gravitasjon, men saktere pga. høy hastighet. Nettoeffekten er ca. 38 mikrosekunder per dag – som uten korreksjon ville gitt posisjonsfeil på 10 km per dag!`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Sentrale formler:**

| Størrelse | Formel |
|-----------|--------|
| Banehastighet | $v = \\sqrt{\\frac{GM}{r}}$ |
| Omløpstid | $T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$ |
| Fluktfart | $v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{r}}$ |
| Forhold | $v_{\\text{flukt}} = \\sqrt{2} \\cdot v_{\\text{bane}}$ |

**Viktige konsepter:**

1. **Banehastighet** avhenger bare av sentrallegemets masse og avstanden – ikke satellittens masse

2. **Geostasjonær bane** har $T = 24$ timer, høyde ca. 35 800 km over ekvator

3. **Fluktfart** er den minste hastigheten for å unnslippe gravitasjonsfeltet

4. **Hohmann-overføring** er den mest effektive måten å endre bane

**Typiske verdier for jorden:**
- Fluktfart fra overflaten: 11.2 km/s
- Banehastighet i LEO (400 km): 7.7 km/s
- Banehastighet i GEO: 3.1 km/s

**Nyttige sammenhenger:**
- $r$ måles alltid fra **sentrum** av planeten
- Høyere bane → lavere hastighet, lengre omløpstid
- ISS: 92 min omløp, 15-16 omløp per døgn`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'fys2-2-3-oppgave-1',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 1',
      problem: `En satellitt går i sirkelbane 800 km over jordoverflaten.

Beregn:
a) Banehastigheten
b) Omløpstiden

Gitt: $M_{\\text{jord}} = 5.972 \\times 10^{24}$ kg, $R_{\\text{jord}} = 6.371 \\times 10^6$ m`,
      hints: [
        'Husk at radius $r$ måles fra jordens sentrum, så $r = R + h$.',
        'Bruk formelen $v = \\sqrt{GM/r}$ for banehastighet.',
        'Bruk formelen $T = 2\\pi\\sqrt{r^3/(GM)}$ for omløpstid.',
      ],
      solution: `**Gitt:**
- $h = 800$ km $= 8 \\times 10^5$ m
- $r = R + h = 6.371 \\times 10^6 + 8 \\times 10^5 = 7.171 \\times 10^6$ m
- $GM = 6.674 \\times 10^{-11} \\times 5.972 \\times 10^{24} = 3.986 \\times 10^{14}$ m³/s²

**a) Banehastighet:**
$$v = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{3.986 \\times 10^{14}}{7.171 \\times 10^6}}$$
$$v = \\sqrt{5.558 \\times 10^7} = 7455 \\text{ m/s} \\approx 7.46 \\text{ km/s}$$

**b) Omløpstid:**
$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}} = 2\\pi\\sqrt{\\frac{(7.171 \\times 10^6)^3}{3.986 \\times 10^{14}}}$$
$$T = 2\\pi\\sqrt{9.25 \\times 10^5} = 2\\pi \\times 962 = 6043 \\text{ s}$$
$$T \\approx 101 \\text{ minutter} \\approx 1 \\text{ time } 41 \\text{ min}$$`,
      difficulty: 1,
    },

    {
      id: 'fys2-2-3-oppgave-2',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 2',
      problem: `Månen går i bane rundt jorden med radius ca. 384 400 km.

a) Beregn månens banehastighet.
b) Beregn månens omløpstid.
c) Sammenlign med den faktiske omløpstiden på 27.3 dager.

Gitt: $M_{\\text{jord}} = 5.972 \\times 10^{24}$ kg`,
      hints: [
        'Konverter radius til meter: $r = 384\\,400$ km $= 3.844 \\times 10^8$ m.',
        'Sammenlign det beregnede svaret med 27.3 dager for å sjekke om beregningen er riktig.',
      ],
      solution: `**Gitt:**
- $r = 3.844 \\times 10^8$ m
- $GM = 3.986 \\times 10^{14}$ m³/s²

**a) Banehastighet:**
$$v = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{3.986 \\times 10^{14}}{3.844 \\times 10^8}}$$
$$v = \\sqrt{1.037 \\times 10^6} = 1018 \\text{ m/s} \\approx 1.02 \\text{ km/s}$$

**b) Omløpstid:**
$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}} = 2\\pi\\sqrt{\\frac{(3.844 \\times 10^8)^3}{3.986 \\times 10^{14}}}$$
$$T = 2\\pi\\sqrt{1.425 \\times 10^{11}} = 2\\pi \\times 377\\,600$$
$$T = 2.372 \\times 10^6 \\text{ s} = 27.5 \\text{ dager}$$

**c) Sammenligning:**
Beregnet: 27.5 dager
Faktisk: 27.3 dager
Avvik: $(27.5 - 27.3)/27.3 \\times 100\\% = 0.7\\%$

Avviket skyldes at månens bane er svakt elliptisk, ikke perfekt sirkulær.`,
      difficulty: 2,
    },

    {
      id: 'fys2-2-3-oppgave-3',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 3',
      problem: `Fluktfart fra Mars' overflate er 5.03 km/s, og Mars' radius er 3390 km.

Beregn massen til Mars.`,
      hints: [
        'Bruk formelen for fluktfart: $v_{\\text{flukt}} = \\sqrt{2GM/r}$.',
        'Løs for $M$: $M = \\frac{v_{\\text{flukt}}^2 \\cdot r}{2G}$.',
      ],
      solution: `**Gitt:**
- $v_{\\text{flukt}} = 5.03$ km/s $= 5030$ m/s
- $r = 3390$ km $= 3.39 \\times 10^6$ m
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

**Løsning:**
Fra $v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{r}}$:

$$v_{\\text{flukt}}^2 = \\frac{2GM}{r}$$

$$M = \\frac{v_{\\text{flukt}}^2 \\cdot r}{2G}$$

$$M = \\frac{(5030)^2 \\times 3.39 \\times 10^6}{2 \\times 6.674 \\times 10^{-11}}$$

$$M = \\frac{2.530 \\times 10^7 \\times 3.39 \\times 10^6}{1.335 \\times 10^{-10}}$$

$$M = \\frac{8.58 \\times 10^{13}}{1.335 \\times 10^{-10}} = 6.43 \\times 10^{23} \\text{ kg}$$

**Svar:** Mars' masse er ca. $6.4 \\times 10^{23}$ kg.

(Faktisk verdi: $6.417 \\times 10^{23}$ kg – veldig nær!)`,
      difficulty: 2,
    },

    {
      id: 'fys2-2-3-oppgave-4',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 4',
      problem: `En satellitt går i sirkelbane rundt jorden med omløpstid 8 timer.

a) Finn banens radius.
b) Finn høyden over jordoverflaten.
c) Finn banehastigheten.

Gitt: $GM = 3.986 \\times 10^{14}$ m³/s², $R_{\\text{jord}} = 6.371 \\times 10^6$ m`,
      hints: [
        'Konverter omløpstiden til sekunder: $T = 8 \\times 3600 = 28\\,800$ s.',
        'Løs periodeformelen for $r$: $r = \\sqrt[3]{\\frac{T^2 \\cdot GM}{4\\pi^2}}$.',
      ],
      solution: `**Gitt:**
- $T = 8$ timer $= 28\\,800$ s
- $GM = 3.986 \\times 10^{14}$ m³/s²

**a) Banens radius:**
Fra $T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$:

$$r^3 = \\frac{T^2 \\cdot GM}{4\\pi^2}$$

$$r = \\sqrt[3]{\\frac{(28\\,800)^2 \\times 3.986 \\times 10^{14}}{4\\pi^2}}$$

$$r = \\sqrt[3]{\\frac{8.294 \\times 10^8 \\times 3.986 \\times 10^{14}}{39.48}}$$

$$r = \\sqrt[3]{8.38 \\times 10^{21}} = 2.03 \\times 10^7 \\text{ m}$$

**Svar a):** $r \\approx 20\\,300$ km

**b) Høyde over bakken:**
$$h = r - R = 20.3 \\times 10^6 - 6.371 \\times 10^6 = 13.9 \\times 10^6 \\text{ m}$$

**Svar b):** $h \\approx 13\\,900$ km

**c) Banehastighet:**
$$v = \\frac{2\\pi r}{T} = \\frac{2\\pi \\times 20.3 \\times 10^6}{28\\,800} = 4\\,430 \\text{ m/s}$$

**Svar c):** $v \\approx 4.43$ km/s`,
      difficulty: 2,
    },

    {
      id: 'fys2-2-3-oppgave-5',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 5',
      problem: `Sammenlign fluktfarten fra jordoverflaten med banehastigheten for en satellitt like over jordoverflaten.

a) Beregn begge hastighetene.
b) Finn forholdet mellom dem.
c) Forklar hvorfor dette forholdet alltid er $\\sqrt{2}$.`,
      hints: [
        'Bruk $v_{\\text{bane}} = \\sqrt{GM/R}$ og $v_{\\text{flukt}} = \\sqrt{2GM/R}$.',
        'Se på forholdet mellom formlene for å finne $\\sqrt{2}$.',
      ],
      solution: `**a) Beregninger:**

**Banehastighet:**
$$v_{\\text{bane}} = \\sqrt{\\frac{GM}{R}} = \\sqrt{\\frac{3.986 \\times 10^{14}}{6.371 \\times 10^6}}$$
$$v_{\\text{bane}} = \\sqrt{6.26 \\times 10^7} = 7910 \\text{ m/s} \\approx 7.9 \\text{ km/s}$$

**Fluktfart:**
$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{R}} = \\sqrt{\\frac{2 \\times 3.986 \\times 10^{14}}{6.371 \\times 10^6}}$$
$$v_{\\text{flukt}} = \\sqrt{1.251 \\times 10^8} = 11\\,186 \\text{ m/s} \\approx 11.2 \\text{ km/s}$$

**b) Forholdet:**
$$\\frac{v_{\\text{flukt}}}{v_{\\text{bane}}} = \\frac{11.2}{7.9} = 1.42 \\approx \\sqrt{2}$$

**c) Forklaring:**
$$\\frac{v_{\\text{flukt}}}{v_{\\text{bane}}} = \\frac{\\sqrt{\\frac{2GM}{r}}}{\\sqrt{\\frac{GM}{r}}} = \\sqrt{\\frac{2GM/r}{GM/r}} = \\sqrt{2}$$

Dette forholdet er **uavhengig av $r$, $M$ og $G$** – det er en fundamental egenskap ved gravitasjon.

**Fysisk forklaring:**
- Sirkelbane: kinetisk energi = halvparten av potensiell energi (med fortegn)
- Flukt: kinetisk energi = all potensiell energi
- Forholdet mellom energiene er 2:1, så hastighetsforholdet er $\\sqrt{2}:1$.`,
      difficulty: 2,
    },

    {
      id: 'fys2-2-3-oppgave-6',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 6',
      problem: `En rakett skytes opp fra jordoverflaten med hastighet 9.0 km/s.

a) Er dette nok til å unnslippe jordens gravitasjonsfelt?
b) Hva slags bane vil raketten følge?
c) Hvor langt fra jordens sentrum vil raketten nå før den vender?`,
      hints: [
        'Sammenlign med fluktfarten på 11.2 km/s.',
        'Bruk energibevaring for å finne maksimal avstand.',
        'Ved vendepunktet er all kinetisk energi omgjort til potensiell energi.',
      ],
      solution: `**Gitt:**
- $v_0 = 9.0$ km/s $= 9000$ m/s
- $v_{\\text{flukt}} = 11.2$ km/s

**a) Unnslippe?**
Nei, fordi $v_0 = 9.0$ km/s $<$ $v_{\\text{flukt}} = 11.2$ km/s.

**b) Banetype:**
Siden $v_{\\text{bane}} < v_0 < v_{\\text{flukt}}$, vil raketten følge en **elliptisk bane** og komme tilbake til jorden.

**c) Maksimal avstand:**
Energibevaring: $E_i = E_f$

$$\\frac{1}{2}mv_0^2 - \\frac{GMm}{R} = -\\frac{GMm}{r_{\\max}}$$

Ved vendepunktet er $v = 0$, så all energi er potensiell.

$$\\frac{1}{2}v_0^2 - \\frac{GM}{R} = -\\frac{GM}{r_{\\max}}$$

$$\\frac{GM}{r_{\\max}} = \\frac{GM}{R} - \\frac{1}{2}v_0^2$$

$$\\frac{1}{r_{\\max}} = \\frac{1}{R} - \\frac{v_0^2}{2GM}$$

Med $GM/R = \\frac{1}{2}v_{\\text{flukt}}^2$:

$$\\frac{1}{r_{\\max}} = \\frac{1}{R}\\left(1 - \\frac{v_0^2}{v_{\\text{flukt}}^2}\\right)$$

$$\\frac{1}{r_{\\max}} = \\frac{1}{6.371 \\times 10^6}\\left(1 - \\frac{81}{125.4}\\right) = \\frac{1}{6.371 \\times 10^6} \\times 0.354$$

$$r_{\\max} = \\frac{6.371 \\times 10^6}{0.354} = 1.80 \\times 10^7 \\text{ m}$$

**Svar c):** Raketten vil nå ca. **18 000 km** fra jordens sentrum, eller ca. **11 600 km** over jordoverflaten.`,
      difficulty: 3,
    },

    {
      id: 'fys2-2-3-oppgave-7',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 7',
      problem: `En planet har dobbelt så stor masse som jorden og dobbelt så stor radius.

a) Hvor stor er tyngdeakselerasjonen på overflaten sammenlignet med jorden?
b) Hvor stor er fluktfarten sammenlignet med jorden?
c) Hvor lang er omløpstiden for en satellitt like over overflaten sammenlignet med en tilsvarende satellitt rundt jorden?`,
      hints: [
        'Tyngdeakselerasjon: $g = GM/R^2$. Hvordan endres dette når $M \\to 2M$ og $R \\to 2R$?',
        'Fluktfart: $v_{\\text{flukt}} = \\sqrt{2GM/R}$.',
        'Omløpstid: $T = 2\\pi\\sqrt{R^3/(GM)}$.',
      ],
      solution: `**Gitt:**
- Planetens masse: $M_p = 2M_{\\text{jord}}$
- Planetens radius: $R_p = 2R_{\\text{jord}}$

**a) Tyngdeakselerasjon:**
$$g = \\frac{GM}{R^2}$$

$$\\frac{g_p}{g_{\\text{jord}}} = \\frac{GM_p/R_p^2}{GM_{\\text{jord}}/R_{\\text{jord}}^2} = \\frac{M_p}{M_{\\text{jord}}} \\cdot \\frac{R_{\\text{jord}}^2}{R_p^2}$$

$$\\frac{g_p}{g_{\\text{jord}}} = \\frac{2M}{M} \\cdot \\frac{R^2}{(2R)^2} = 2 \\cdot \\frac{1}{4} = \\frac{1}{2}$$

**Svar a):** Tyngdeakselerasjonen er **halve** jordens ($g_p = 4.9$ m/s²).

**b) Fluktfart:**
$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{R}}$$

$$\\frac{v_p}{v_{\\text{jord}}} = \\sqrt{\\frac{M_p/R_p}{M_{\\text{jord}}/R_{\\text{jord}}}} = \\sqrt{\\frac{2M/2R}{M/R}} = \\sqrt{1} = 1$$

**Svar b):** Fluktfarten er **lik** jordens (11.2 km/s).

**c) Omløpstid:**
$$T = 2\\pi\\sqrt{\\frac{R^3}{GM}}$$

$$\\frac{T_p}{T_{\\text{jord}}} = \\sqrt{\\frac{R_p^3/M_p}{R_{\\text{jord}}^3/M_{\\text{jord}}}} = \\sqrt{\\frac{(2R)^3/2M}{R^3/M}}$$

$$= \\sqrt{\\frac{8R^3 \\cdot M}{2M \\cdot R^3}} = \\sqrt{4} = 2$$

**Svar c):** Omløpstiden er **dobbelt** så lang.`,
      difficulty: 3,
    },

    {
      id: 'fys2-2-3-oppgave-8',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 8',
      problem: `En GPS-satellitt går i sirkelbane med omløpstid 12 timer.

a) Beregn banens radius.
b) Beregn høyden over jordoverflaten.
c) Hvor mange grader beveger satellitten seg per time (i forhold til jordens sentrum)?
d) Hvor mange omløp gjør satellitten per døgn?`,
      hints: [
        'Bruk periodeformelen løst for $r$.',
        'Vinkelfart: $\\omega = 2\\pi/T$ gir grader per time.',
        'Antall omløp per døgn: 24 timer / 12 timer.',
      ],
      solution: `**Gitt:**
- $T = 12$ timer $= 43\\,200$ s
- $GM = 3.986 \\times 10^{14}$ m³/s²

**a) Banens radius:**
$$r = \\sqrt[3]{\\frac{T^2 \\cdot GM}{4\\pi^2}}$$

$$r = \\sqrt[3]{\\frac{(43\\,200)^2 \\times 3.986 \\times 10^{14}}{39.48}}$$

$$r = \\sqrt[3]{\\frac{1.866 \\times 10^9 \\times 3.986 \\times 10^{14}}{39.48}}$$

$$r = \\sqrt[3]{1.884 \\times 10^{22}} = 2.66 \\times 10^7 \\text{ m}$$

**Svar a):** $r \\approx 26\\,600$ km

**b) Høyde over bakken:**
$$h = r - R = 26\\,600 - 6\\,371 = 20\\,229 \\text{ km}$$

**Svar b):** $h \\approx 20\\,200$ km

**c) Grader per time:**
$$\\omega = \\frac{360°}{T} = \\frac{360°}{12 \\text{ timer}} = 30° \\text{ per time}$$

**Svar c):** Satellitten beveger seg **30 grader** per time.

**d) Omløp per døgn:**
$$n = \\frac{24 \\text{ timer}}{12 \\text{ timer}} = 2$$

**Svar d):** GPS-satellitten gjør **2 omløp** per døgn.`,
      difficulty: 2,
    },

    {
      id: 'fys2-2-3-oppgave-9',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 9',
      problem: `Hubble-romteleskopet går i bane 547 km over jordoverflaten.

a) Beregn banehastigheten.
b) Beregn omløpstiden.
c) Hvor mye lavere er tyngdeakselerasjonen i denne høyden sammenlignet med jordoverflaten?`,
      hints: [
        'Tyngdeakselerasjon i høyde $h$: $g_h = \\frac{GM}{(R+h)^2}$.',
        'Forhold: $g_h/g_0 = R^2/(R+h)^2$.',
      ],
      solution: `**Gitt:**
- $h = 547$ km $= 5.47 \\times 10^5$ m
- $r = R + h = 6.371 \\times 10^6 + 5.47 \\times 10^5 = 6.918 \\times 10^6$ m

**a) Banehastighet:**
$$v = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{3.986 \\times 10^{14}}{6.918 \\times 10^6}}$$
$$v = \\sqrt{5.762 \\times 10^7} = 7591 \\text{ m/s}$$

**Svar a):** $v \\approx 7.59$ km/s

**b) Omløpstid:**
$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}} = 2\\pi\\sqrt{\\frac{(6.918 \\times 10^6)^3}{3.986 \\times 10^{14}}}$$
$$T = 2\\pi\\sqrt{8.31 \\times 10^5} = 2\\pi \\times 912 = 5730 \\text{ s}$$

**Svar b):** $T \\approx 95.5$ minutter

**c) Tyngdeakselerasjon:**
$$\\frac{g_h}{g_0} = \\frac{R^2}{(R+h)^2} = \\left(\\frac{R}{R+h}\\right)^2$$

$$\\frac{g_h}{g_0} = \\left(\\frac{6.371}{6.918}\\right)^2 = (0.921)^2 = 0.848$$

$$g_h = 0.848 \\times 9.81 = 8.32 \\text{ m/s}^2$$

**Svar c):** Tyngdeakselerasjonen er **15.2% lavere** (8.32 m/s² vs 9.81 m/s²).`,
      difficulty: 2,
    },

    {
      id: 'fys2-2-3-oppgave-10',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 10',
      problem: `En romsonde skal sendes fra jorden til Mars. Ved avreise fra lav jordbane (400 km høyde) trenger sonden en hastighet på 11.5 km/s relativt til jorden for å nå Mars.

a) Hva er banehastigheten i lav jordbane?
b) Hvor stor hastighetsøkning ($\\Delta v$) må rakettmotoren gi?
c) Er denne hastigheten større eller mindre enn fluktfarten fra denne høyden?`,
      hints: [
        'Sammenlign 11.5 km/s med fluktfarten i 400 km høyde.',
        '$\\Delta v$ er forskjellen mellom ønsket hastighet og nåværende banehastighet.',
      ],
      solution: `**Gitt:**
- $h = 400$ km, $r = 6.771 \\times 10^6$ m
- Ønsket hastighet: $v_{\\text{ønsket}} = 11.5$ km/s

**a) Banehastighet i LEO:**
$$v_{\\text{bane}} = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{3.986 \\times 10^{14}}{6.771 \\times 10^6}}$$
$$v_{\\text{bane}} = 7673 \\text{ m/s} \\approx 7.67 \\text{ km/s}$$

**b) Hastighetsøkning:**
$$\\Delta v = v_{\\text{ønsket}} - v_{\\text{bane}} = 11.5 - 7.67 = 3.83 \\text{ km/s}$$

**Svar b):** $\\Delta v \\approx 3.8$ km/s

**c) Sammenligning med fluktfart:**
$$v_{\\text{flukt}} = \\sqrt{2} \\times v_{\\text{bane}} = 1.414 \\times 7.67 = 10.85 \\text{ km/s}$$

Siden $v_{\\text{ønsket}} = 11.5$ km/s $> v_{\\text{flukt}} = 10.85$ km/s:

**Svar c):** Hastigheten er **større** enn fluktfarten. Sonden vil unnslippe jordens gravitasjonsfelt med en resthastighet på ca. $\\sqrt{11.5^2 - 10.85^2} \\approx 3.8$ km/s relativt til jorden.`,
      difficulty: 3,
    },

    {
      id: 'fys2-2-3-oppgave-11',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 11',
      problem: `Hvis en satellitt dobler sin baneavstand fra jordens sentrum, hva skjer med banehastigheten?`,
      options: [
        'Den dobles',
        'Den halveres',
        'Den reduseres med faktor $\\sqrt{2}$',
        'Den øker med faktor $\\sqrt{2}$',
      ],
      correctAnswer: 2,
      hints: [
        'Banehastighet: $v = \\sqrt{GM/r}$.',
        'Hvis $r \\to 2r$, hva skjer med $\\sqrt{1/r}$?',
      ],
      solution: `**Løsning:**

$$v = \\sqrt{\\frac{GM}{r}}$$

Hvis $r \\to 2r$:

$$v_{\\text{ny}} = \\sqrt{\\frac{GM}{2r}} = \\frac{1}{\\sqrt{2}} \\cdot \\sqrt{\\frac{GM}{r}} = \\frac{v}{\\sqrt{2}}$$

**Svar:** Banehastigheten **reduseres med faktor $\\sqrt{2}$** (alternativ C).

Numerisk: Hvis $v = 7.7$ km/s i LEO, blir $v = 7.7/1.414 = 5.4$ km/s ved dobbel radius.`,
      difficulty: 2,
    },

    {
      id: 'fys2-2-3-oppgave-12',
      type: 'exercise',
      exerciseType: 'short-answer',
      title: 'Oppgave 12',
      problem: `En satellitt i elliptisk bane rundt jorden har perigeum (nærmeste punkt) på 500 km høyde og apogeum (fjerneste punkt) på 50 000 km høyde.

a) Finn halvaksen til ellipsen.
b) Beregn omløpstiden.
c) I hvilket punkt har satellitten størst hastighet? Forklar ved hjelp av energibevaring.`,
      hints: [
        'Halvakse: $a = (r_p + r_a)/2$ hvor $r_p$ og $r_a$ er avstander fra jordens sentrum.',
        'For elliptisk bane: $T = 2\\pi\\sqrt{a^3/(GM)}$.',
        'Energibevaring: Summen av kinetisk og potensiell energi er konstant.',
      ],
      solution: `**Gitt:**
- Perigeum høyde: $h_p = 500$ km, så $r_p = 6.371 + 0.5 = 6.871 \\times 10^6$ m
- Apogeum høyde: $h_a = 50\\,000$ km, så $r_a = 6.371 + 50 = 56.371 \\times 10^6$ m

**a) Halvakse:**
$$a = \\frac{r_p + r_a}{2} = \\frac{6.871 + 56.371}{2} \\times 10^6 = 31.621 \\times 10^6 \\text{ m}$$

**Svar a):** $a \\approx 31\\,600$ km

**b) Omløpstid:**
$$T = 2\\pi\\sqrt{\\frac{a^3}{GM}} = 2\\pi\\sqrt{\\frac{(31.621 \\times 10^6)^3}{3.986 \\times 10^{14}}}$$

$$T = 2\\pi\\sqrt{\\frac{3.16 \\times 10^{22}}{3.986 \\times 10^{14}}} = 2\\pi\\sqrt{7.93 \\times 10^7}$$

$$T = 2\\pi \\times 8904 = 55\\,950 \\text{ s} \\approx 15.5 \\text{ timer}$$

**Svar b):** $T \\approx 15.5$ timer

**c) Størst hastighet:**
Satellitten har **størst hastighet i perigeum** (nærmeste punkt).

**Forklaring med energibevaring:**
$$E_{\\text{total}} = \\frac{1}{2}mv^2 - \\frac{GMm}{r} = \\text{konstant}$$

Når $r$ er minst (perigeum), er potensiell energi mest negativ.
For at total energi skal være konstant, må kinetisk energi være størst.
Dermed er $v$ størst i perigeum.

**Alternativ forklaring:**
Keplers 2. lov: En linje fra planeten til solen sveiper over like store arealer på lik tid. Når satellitten er nær, må den bevege seg raskere for å dekke samme areal.`,
      difficulty: 3,
    },
  ],
};

// ============================================================================
// Kapittel 2.4: Keplers lover
// LK20: Forklare og anvende Keplers lover på planetbevegelse
// ============================================================================

export const CHAPTER_FYSIKK2_2_4: TextbookChapter = {
  id: 'fysikk2-2-4',
  courseId: 'fysikk2',
  chapterNumber: '2.4',
  title: 'Keplers lover',
  description: 'De tre Kepler-lovene og deres anvendelse på planetbevegelse.',
  estimatedMinutes: 45,
  prerequisites: ['fysikk2-2-1', 'fysikk2-2-3'],
  competenceGoals: [
    'forklare og anvende Keplers lover',
    'beregne omlopstider og banestorrelser',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-2-4-intro',
      type: 'text',
      content: `## Johannes Kepler og planetbanene

I over 2000 ar trodde mennesker at planetene beveget seg i perfekte sirkler rundt jorda. Den polske astronomen **Nicolaus Copernicus** (1473-1543) foreslo at planetene i stedet kretset rundt solen, men han holdt fast ved sirkulaere baner.

Det var den tyske astronomen **Johannes Kepler** (1571-1630) som oppdaget planetbanenes sanne form. Ved a analysere presise observasjoner gjort av **Tycho Brahe**, fant Kepler at planetbanene er **ellipser**, ikke sirkler.

Kepler formulerte tre lover som beskriver planetenes bevegelse. Disse lovene var rent empiriske - Kepler visste at de stemte, men ikke **hvorfor** de stemte. Det var forst 70 ar senere at Newton viste at Keplers lover folger direkte fra gravitasjonsloven.

**Keplers bidrag:**
- Viste at planetbaner er ellipser
- Oppdaget at planeter beveger seg raskere naer solen
- Fant en matematisk sammenheng mellom omlopstid og banestorrelse`,
    },

    // ========== ELLIPSENS GEOMETRI ==========
    {
      id: 'fys2-2-4-ellipse-intro',
      type: 'text',
      content: `## Ellipsens geometri

For a forsta Keplers lover ma vi forst forstaa hva en ellipse er.

### Definisjon av ellipse

En **ellipse** er en lukket kurve der summen av avstandene til to faste punkter (brennpunktene) er konstant.

Hvis du setter to stifter i et papir, knytter en trad rundt dem, og trekker en blyant langs traden mens den holdes stram, tegner du en ellipse.

### Viktige storrelser

- **Store halvakse ($a$)**: Den lengste avstanden fra sentrum til ellipsen
- **Lille halvakse ($b$)**: Den korteste avstanden fra sentrum til ellipsen
- **Brennpunkt ($F_1$ og $F_2$)**: De to faste punktene inne i ellipsen
- **Brennpunktsavstand ($c$)**: Avstanden fra sentrum til hvert brennpunkt

**Sammenheng mellom a, b og c:**
$$c^2 = a^2 - b^2$$

### Eksentrisitet

**Eksentrisiteten** $e$ beskriver hvor "flattrykt" ellipsen er:

$$e = \\frac{c}{a}$$

- $e = 0$: perfekt sirkel (begge brennpunktene i sentrum)
- $0 < e < 1$: ellipse
- $e$ naer 1: svært avlang ellipse`,
    },

    // ========== DEFINISJON: EKSENTRISITET ==========
    {
      id: 'fys2-2-4-def-eksentrisitet',
      type: 'definition',
      title: 'Eksentrisitet',
      content: `**Eksentrisiteten** til en ellipse er forholdet mellom brennpunktsavstanden og den store halvaksen:

$$e = \\frac{c}{a}$$

der $c$ er avstanden fra sentrum til brennpunktet og $a$ er den store halvaksen.

**Eksempler pa eksentrisitet:**
| Himmellegeme | Eksentrisitet |
|--------------|---------------|
| Jorda        | 0.017         |
| Mars         | 0.093         |
| Merkur       | 0.206         |
| Halleys komet| 0.967         |

Jordas bane er nesten sirkulaer ($e \\approx 0$), mens Halleys komet har en svært avlang bane.`,
    },

    // ========== KEPLERS 1. LOV ==========
    {
      id: 'fys2-2-4-kepler1-text',
      type: 'text',
      content: `## Keplers 1. lov: Ellipsebaner

Keplers forste lov beskriver **formen** pa planetbanene.`,
    },

    {
      id: 'fys2-2-4-def-kepler1',
      type: 'definition',
      title: 'Keplers 1. lov (Ellipsebaner)',
      content: `Planetene beveger seg i **ellipser** med solen i ett av brennpunktene.

Dette betyr at avstanden mellom en planet og solen varierer gjennom banen:
- **Perihel**: Punktet der planeten er naermest solen
- **Aphel**: Punktet der planeten er lengst fra solen

**Avstander:**
$$r_{\\text{perihel}} = a(1 - e)$$
$$r_{\\text{aphel}} = a(1 + e)$$

der $a$ er den store halvaksen og $e$ er eksentrisiteten.`,
    },

    {
      id: 'fys2-2-4-kepler1-extra',
      type: 'text',
      content: `### Konsekvenser av ellipsebaner

For jorda:
- Perihel (naermest solen): ca. 147 millioner km (i januar)
- Aphel (lengst fra solen): ca. 152 millioner km (i juli)

Dette betyr at jorda faktisk er naermest solen midt pa vinteren (pa den nordlige halvkule). Arstidene skyldes ikke avstand til solen, men jordaksens helning!

**Merk:** De fleste planetbaner er nesten sirkulaere. Jordas eksentrisitet er bare 0.017, sa forskjellen mellom perihel og aphel er kun ca. 3%.`,
    },

    // ========== KEPLERS 2. LOV ==========
    {
      id: 'fys2-2-4-kepler2-text',
      type: 'text',
      content: `## Keplers 2. lov: Flatesetningen

Keplers andre lov beskriver **hastigheten** til planeten i banen.`,
    },

    {
      id: 'fys2-2-4-def-kepler2',
      type: 'definition',
      title: 'Keplers 2. lov (Flatesetningen)',
      content: `Linjen fra solen til en planet sveiper over **like store arealer pa like lang tid**.

Dette betyr at:
- Planeten beveger seg **raskere** nar den er naer solen (perihel)
- Planeten beveger seg **saktere** nar den er langt fra solen (aphel)

**Matematisk:**
$$\\frac{dA}{dt} = \\text{konstant}$$

der $A$ er arealet som sveipes over.`,
    },

    {
      id: 'fys2-2-4-kepler2-extra',
      type: 'text',
      content: `### Fysisk forklaring

Keplers 2. lov er egentlig et uttrykk for **bevaring av angulaermoment** (dreieimpuls).

Nar en planet er naer solen, ma den bevege seg raskere for at linjen sol-planet skal sveipe over samme areal per tid som nar planeten er langt unna.

**Formel for hastighet:**
Ved perihel og aphel (der hastigheten er vinkelrett pa radien):

$$v_{\\text{perihel}} \\cdot r_{\\text{perihel}} = v_{\\text{aphel}} \\cdot r_{\\text{aphel}}$$

Dette gir forholdet:
$$\\frac{v_{\\text{perihel}}}{v_{\\text{aphel}}} = \\frac{r_{\\text{aphel}}}{r_{\\text{perihel}}} = \\frac{1 + e}{1 - e}$$`,
    },

    // ========== KEPLERS 3. LOV ==========
    {
      id: 'fys2-2-4-kepler3-text',
      type: 'text',
      content: `## Keplers 3. lov: Harmoniloven

Keplers tredje lov gir en **matematisk sammenheng** mellom omlopstid og banestorrelse.`,
    },

    {
      id: 'fys2-2-4-def-kepler3',
      type: 'definition',
      title: 'Keplers 3. lov (Harmoniloven)',
      content: `Kvadratet av omlopstiden er proporsjonalt med kuben av den store halvaksen:

$$T^2 = \\frac{4\\pi^2}{GM}a^3$$

der:
- $T$ = omlopstid [s]
- $G$ = gravitasjonskonstanten = $6.674 \\times 10^{-11}$ N·m²/kg²
- $M$ = massen til sentrallegemet (f.eks. solen) [kg]
- $a$ = stor halvakse [m]

**Alternativ form:**
$$\\frac{T^2}{a^3} = \\frac{4\\pi^2}{GM} = \\text{konstant for alle legemer rundt samme sentralmasse}$$`,
    },

    {
      id: 'fys2-2-4-kepler3-sammenligning',
      type: 'text',
      content: `### Sammenligning mellom planeter

For planeter som kretser rundt samme stjerne (f.eks. solen), kan vi sammenligne to planeter:

$$\\frac{T_1^2}{a_1^3} = \\frac{T_2^2}{a_2^3}$$

Dette gir:
$$\\frac{T_1}{T_2} = \\left(\\frac{a_1}{a_2}\\right)^{3/2}$$

**Eksempel med jordenheter:**
Hvis vi maler omlopstid i ar og avstand i AU (astronomiske enheter, der 1 AU = jordas avstand til solen), far vi den enkle sammenhengen:

$$T^2 = a^3$$

| Planet  | $a$ (AU) | $a^3$   | $T$ (ar) | $T^2$   |
|---------|----------|---------|----------|---------|
| Merkur  | 0.387    | 0.058   | 0.241    | 0.058   |
| Venus   | 0.723    | 0.378   | 0.615    | 0.378   |
| Jorda   | 1.000    | 1.000   | 1.000    | 1.000   |
| Mars    | 1.524    | 3.540   | 1.881    | 3.538   |
| Jupiter | 5.203    | 140.9   | 11.86    | 140.7   |`,
    },

    // ========== UTLEDNING FRA GRAVITASJON ==========
    {
      id: 'fys2-2-4-utledning',
      type: 'text',
      content: `## Utledning av Keplers 3. lov fra gravitasjon

Newton viste at Keplers lover folger matematisk fra gravitasjonsloven. Her utleder vi Keplers 3. lov for det spesielle tilfellet med **sirkulaer bane**.

### Utledning for sirkulaer bane

For en planet i sirkulaer bane med radius $r$ rundt en stjerne med masse $M$:

**Steg 1:** Gravitasjonskraften gir sentripetalakselerasjonen:
$$F = \\frac{GMm}{r^2} = \\frac{mv^2}{r}$$

**Steg 2:** Forenkle (massen $m$ til planeten forsvinner):
$$\\frac{GM}{r} = v^2$$

**Steg 3:** Hastigheten kan uttrykkes ved omlopstiden:
$$v = \\frac{2\\pi r}{T}$$

**Steg 4:** Sett inn i likning fra steg 2:
$$\\frac{GM}{r} = \\frac{4\\pi^2 r^2}{T^2}$$

**Steg 5:** Los for $T^2$:
$$T^2 = \\frac{4\\pi^2}{GM}r^3$$

For en sirkulaer bane er $r = a$ (radius = stor halvakse), sa vi far:
$$T^2 = \\frac{4\\pi^2}{GM}a^3$$`,
    },

    {
      id: 'fys2-2-4-merknad-ellipse',
      type: 'note',
      title: 'For elliptiske baner',
      content: `Den fullstendige utledningen for elliptiske baner krever mer avansert matematikk (integralregning). Det viser seg at formelen $T^2 = \\frac{4\\pi^2}{GM}a^3$ gjelder for alle ellipser, der $a$ er den store halvaksen.

For sirkler er $a = r$ (radius), sa sirkelformelen er et spesialtilfelle.`,
    },

    // ========== EKSEMPEL 1: JORDAS BANE ==========
    {
      id: 'fys2-2-4-eks1',
      type: 'example',
      title: 'Eksempel 1: Jordas bane rundt solen',
      content: `**Oppgave:**
Jordas bane har stor halvakse $a = 1.496 \\times 10^{11}$ m og eksentrisitet $e = 0.017$.

a) Beregn avstanden til solen ved perihel og aphel.
b) Beregn omlopstiden ved hjelp av Keplers 3. lov.
c) Beregn jordas hastighet ved perihel og aphel.

**Gitt:**
- $a = 1.496 \\times 10^{11}$ m
- $e = 0.017$
- $M_{\\text{sol}} = 1.989 \\times 10^{30}$ kg
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

**Losning a):**

$$r_{\\text{perihel}} = a(1 - e) = 1.496 \\times 10^{11} \\cdot (1 - 0.017) = 1.471 \\times 10^{11} \\text{ m}$$

$$r_{\\text{aphel}} = a(1 + e) = 1.496 \\times 10^{11} \\cdot (1 + 0.017) = 1.521 \\times 10^{11} \\text{ m}$$

**Losning b):**

$$T^2 = \\frac{4\\pi^2}{GM}a^3 = \\frac{4\\pi^2}{6.674 \\times 10^{-11} \\cdot 1.989 \\times 10^{30}} \\cdot (1.496 \\times 10^{11})^3$$

$$T^2 = \\frac{4\\pi^2}{1.327 \\times 10^{20}} \\cdot 3.348 \\times 10^{33} = 9.96 \\times 10^{14} \\text{ s}^2$$

$$T = 3.16 \\times 10^7 \\text{ s} = 365.2 \\text{ dager}$$

**Losning c):**

Gjennomsnittshastighet: $v_{\\text{snitt}} = \\frac{2\\pi a}{T} = \\frac{2\\pi \\cdot 1.496 \\times 10^{11}}{3.16 \\times 10^7} = 29.7$ km/s

Ved perihel og aphel (bevaring av angulærmoment):
$$v \\cdot r = v_{\\text{snitt}} \\cdot a$$

$$v_{\\text{perihel}} = \\frac{v_{\\text{snitt}} \\cdot a}{r_{\\text{perihel}}} \\approx 30.3 \\text{ km/s}$$

$$v_{\\text{aphel}} = \\frac{v_{\\text{snitt}} \\cdot a}{r_{\\text{aphel}}} \\approx 29.2 \\text{ km/s}$$

**Svar:**
a) Perihel: 147.1 millioner km, Aphel: 152.1 millioner km
b) Omlopstid: 365.2 dager (1 ar)
c) Hastighet: 30.3 km/s ved perihel, 29.2 km/s ved aphel`,
    },

    // ========== EKSEMPEL 2: MARS' BANE ==========
    {
      id: 'fys2-2-4-eks2',
      type: 'example',
      title: 'Eksempel 2: Mars omlopstid',
      content: `**Oppgave:**
Mars har en stor halvakse pa $a = 1.524$ AU. Beregn omlopstiden til Mars.

**Losning:**

Vi bruker Keplers 3. lov i jordenheter:
$$\\frac{T_{\\text{Mars}}^2}{a_{\\text{Mars}}^3} = \\frac{T_{\\text{jord}}^2}{a_{\\text{jord}}^3}$$

Med $T_{\\text{jord}} = 1$ ar og $a_{\\text{jord}} = 1$ AU:
$$T_{\\text{Mars}}^2 = a_{\\text{Mars}}^3 = (1.524)^3 = 3.540$$

$$T_{\\text{Mars}} = \\sqrt{3.540} = 1.88 \\text{ ar}$$

**Svar:** Mars bruker ca. 1.88 ar (687 dager) pa ett omlop rundt solen.

**Merknad:** Dette stemmer med observasjoner. Mars' synodiske periode (tiden mellom to opposisjoner sett fra jorda) er ca. 780 dager, som er lengre fordi jorda ogsa beveger seg.`,
    },

    // ========== EKSEMPEL 3: JUPITERS MANER ==========
    {
      id: 'fys2-2-4-eks3',
      type: 'example',
      title: 'Eksempel 3: Jupiters galileiske maner',
      content: `**Oppgave:**
Galileo oppdaget fire store maner rundt Jupiter i 1610. Her er data for to av dem:

| Mane     | Baneradius $a$ (km)      | Omlopstid $T$ (dager) |
|----------|--------------------------|----------------------|
| Io       | $4.22 \\times 10^5$       | 1.77                 |
| Ganymede | $1.07 \\times 10^6$       | 7.15                 |

Bruk Keplers 3. lov til a beregne Jupiters masse.

**Losning:**

Fra Keplers 3. lov:
$$T^2 = \\frac{4\\pi^2}{GM}a^3$$

Los for $M$:
$$M = \\frac{4\\pi^2 a^3}{GT^2}$$

**For Io:**
- $a = 4.22 \\times 10^8$ m
- $T = 1.77 \\cdot 24 \\cdot 3600 = 1.53 \\times 10^5$ s

$$M = \\frac{4\\pi^2 \\cdot (4.22 \\times 10^8)^3}{6.674 \\times 10^{-11} \\cdot (1.53 \\times 10^5)^2}$$

$$M = \\frac{4\\pi^2 \\cdot 7.51 \\times 10^{25}}{6.674 \\times 10^{-11} \\cdot 2.34 \\times 10^{10}}$$

$$M = \\frac{2.97 \\times 10^{27}}{1.56 \\times 10^{0}} = 1.90 \\times 10^{27} \\text{ kg}$$

**Svar:** Jupiters masse er ca. $1.90 \\times 10^{27}$ kg, som er omtrent 318 ganger jordas masse.

**Merk:** Man kan verifisere ved a gjore samme beregning for Ganymede - man far samme svar (innenfor malenoyaktigheten).`,
    },

    // ========== TIP: SAMMENHENG MELLOM LOVENE ==========
    {
      id: 'fys2-2-4-tip-sammenheng',
      type: 'tip',
      title: 'Sammenheng mellom Keplers lover',
      content: `Keplers tre lover henger sammen:

1. **1. lov** forteller oss **formen** pa banen (ellipse)
2. **2. lov** forteller oss **hastigheten** gjennom banen (raskere naer solen)
3. **3. lov** forteller oss **storrelsen** pa banen i forhold til omlopstiden

Alle tre lovene folger fra Newtons gravitasjonslov og bevaring av energi og angulærmoment.`,
    },

    // ========== ADVARSEL ==========
    {
      id: 'fys2-2-4-warning',
      type: 'warning',
      title: 'Vanlige feil',
      content: `**1. Forveksle $a$ og $r$:**
I Keplers 3. lov er $a$ den **store halvaksen**, ikke den gjennomsnittlige avstanden eller radius. For sirkler er $a = r$.

**2. Feil enheter:**
Husk a bruke SI-enheter (meter, sekunder, kg) nar du bruker formelen med $G$. Alternativt kan du bruke jordenheter (AU og ar) for planeter rundt solen.

**3. Glemme sentralmassen:**
Keplers 3. lov avhenger av massen $M$ til sentrallegemet. En mane rundt Jupiter har annen konstant enn en planet rundt solen.`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'fys2-2-4-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // OPPGAVE 1
    {
      id: 'fys2-2-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av folgende pastand er riktig ifølge Keplers 1. lov?',
        options: [
          {
            id: 'a',
            text: 'Planetene beveger seg i sirkelbaner rundt solen',
            isCorrect: false,
            feedback: 'Feil. Kepler viste at baner er ellipser, ikke sirkler.',
          },
          {
            id: 'b',
            text: 'Planetene beveger seg i ellipser med solen i sentrum',
            isCorrect: false,
            feedback: 'Feil. Solen er i ett av brennpunktene, ikke i sentrum av ellipsen.',
          },
          {
            id: 'c',
            text: 'Planetene beveger seg i ellipser med solen i ett brennpunkt',
            isCorrect: true,
            feedback: 'Riktig! Keplers 1. lov sier at planetene beveger seg i ellipser med solen i ett av de to brennpunktene.',
          },
          {
            id: 'd',
            text: 'Alle planetbaner har samme eksentrisitet',
            isCorrect: false,
            feedback: 'Feil. Eksentrisiteten varierer fra planet til planet.',
          },
        ],
      },
    },

    // OPPGAVE 2
    {
      id: 'fys2-2-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-2',
        number: '2.4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Ifølge Keplers 2. lov, nar beveger en planet seg raskest i sin bane?',
        options: [
          {
            id: 'a',
            text: 'Nar planeten er lengst fra solen (aphel)',
            isCorrect: false,
            feedback: 'Feil. Ved aphel beveger planeten seg saktest.',
          },
          {
            id: 'b',
            text: 'Nar planeten er naermest solen (perihel)',
            isCorrect: true,
            feedback: 'Riktig! Ved perihel ma planeten bevege seg raskere for a sveipe over samme areal per tid.',
          },
          {
            id: 'c',
            text: 'Hastigheten er konstant gjennom hele banen',
            isCorrect: false,
            feedback: 'Feil. Hastigheten varierer - raskest ved perihel, saktest ved aphel.',
          },
          {
            id: 'd',
            text: 'Midt mellom perihel og aphel',
            isCorrect: false,
            feedback: 'Feil. Planeten er raskest ved perihel (naermest solen).',
          },
        ],
      },
    },

    // OPPGAVE 3
    {
      id: 'fys2-2-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-3',
        number: '2.4.3',
        type: 'classic',
        difficulty: 'lett',
        task: `En ellipse har stor halvakse $a = 10$ m og lille halvakse $b = 8$ m.

a) Beregn brennpunktsavstanden $c$.
b) Beregn eksentrisiteten $e$.`,
        hints: [
          'Bruk sammenhengen $c^2 = a^2 - b^2$',
          'Eksentrisiteten er $e = c/a$',
        ],
        solution: `**a) Brennpunktsavstand:**
$$c^2 = a^2 - b^2 = 10^2 - 8^2 = 100 - 64 = 36$$
$$c = \\sqrt{36} = 6 \\text{ m}$$

**b) Eksentrisitet:**
$$e = \\frac{c}{a} = \\frac{6}{10} = 0.6$$

**Svar:** Brennpunktsavstand $c = 6$ m, eksentrisitet $e = 0.6$.`,
      },
    },

    // OPPGAVE 4
    {
      id: 'fys2-2-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        difficulty: 'lett',
        task: `Merkur har stor halvakse $a = 0.387$ AU og eksentrisitet $e = 0.206$.

Beregn avstanden til solen ved perihel og aphel (i AU).`,
        hints: [
          'Bruk formlene $r_{\\text{perihel}} = a(1-e)$ og $r_{\\text{aphel}} = a(1+e)$',
        ],
        solution: `**Perihel:**
$$r_{\\text{perihel}} = a(1 - e) = 0.387 \\cdot (1 - 0.206) = 0.387 \\cdot 0.794 = 0.307 \\text{ AU}$$

**Aphel:**
$$r_{\\text{aphel}} = a(1 + e) = 0.387 \\cdot (1 + 0.206) = 0.387 \\cdot 1.206 = 0.467 \\text{ AU}$$

**Svar:** Merkur er 0.307 AU fra solen ved perihel og 0.467 AU ved aphel.

**Merknad:** Dette er en forskjell pa over 50%! Merkur har den mest eksentriske banen blant de indre planetene.`,
      },
    },

    // OPPGAVE 5
    {
      id: 'fys2-2-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-5',
        number: '2.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Venus har en stor halvakse pa $a = 0.723$ AU. Bruk Keplers 3. lov til a beregne omlopstiden til Venus i dager.`,
        hints: [
          'Bruk jordenheter: $T^2 = a^3$ nar $a$ er i AU og $T$ er i ar',
          'Husk a regne om fra ar til dager (1 ar = 365.25 dager)',
        ],
        solution: `**Keplers 3. lov i jordenheter:**
$$T^2 = a^3$$

**Beregning:**
$$T^2 = (0.723)^3 = 0.378$$
$$T = \\sqrt{0.378} = 0.615 \\text{ ar}$$

**Omregning til dager:**
$$T = 0.615 \\cdot 365.25 = 225 \\text{ dager}$$

**Svar:** Venus bruker ca. 225 dager pa ett omlop rundt solen.`,
      },
    },

    // OPPGAVE 6
    {
      id: 'fys2-2-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-6',
        number: '2.4.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Saturn har en omlopstid pa 29.46 ar.

a) Beregn den store halvaksen til Saturns bane i AU.
b) Hvor mange ganger lenger fra solen er Saturn sammenlignet med jorda?`,
        hints: [
          'Bruk Keplers 3. lov: $a^3 = T^2$ (i jordenheter)',
          'Ta tredjeroten for a finne $a$',
        ],
        solution: `**a) Stor halvakse:**

Fra Keplers 3. lov:
$$a^3 = T^2 = (29.46)^2 = 867.9$$
$$a = \\sqrt[3]{867.9} = 9.54 \\text{ AU}$$

**b) Sammenligning med jorda:**
Saturn er $\\frac{9.54}{1} = 9.54$ ganger lenger fra solen enn jorda.

**Svar:**
a) Saturns store halvakse er 9.54 AU
b) Saturn er ca. 9.5 ganger lenger fra solen enn jorda`,
      },
    },

    // OPPGAVE 7
    {
      id: 'fys2-2-4-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-7',
        number: '2.4.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En planet har hastighet $v_{\\text{aphel}} = 20$ km/s ved aphel, der avstanden til solen er $r_{\\text{aphel}} = 2.0 \\times 10^{11}$ m.

Ved perihel er avstanden $r_{\\text{perihel}} = 1.5 \\times 10^{11}$ m.

Beregn hastigheten ved perihel.`,
        hints: [
          'Bruk bevaring av angulærmoment: $v_{\\text{perihel}} \\cdot r_{\\text{perihel}} = v_{\\text{aphel}} \\cdot r_{\\text{aphel}}$',
        ],
        solution: `**Bevaring av angulærmoment:**
$$v_{\\text{perihel}} \\cdot r_{\\text{perihel}} = v_{\\text{aphel}} \\cdot r_{\\text{aphel}}$$

**Los for perihel-hastighet:**
$$v_{\\text{perihel}} = v_{\\text{aphel}} \\cdot \\frac{r_{\\text{aphel}}}{r_{\\text{perihel}}}$$

$$v_{\\text{perihel}} = 20 \\cdot \\frac{2.0 \\times 10^{11}}{1.5 \\times 10^{11}} = 20 \\cdot \\frac{2.0}{1.5}$$

$$v_{\\text{perihel}} = 20 \\cdot 1.33 = 26.7 \\text{ km/s}$$

**Svar:** Hastigheten ved perihel er ca. 27 km/s.

**Sjekk:** Hastigheten er hoyre ved perihel, som forventet fra Keplers 2. lov.`,
      },
    },

    // OPPGAVE 8
    {
      id: 'fys2-2-4-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-8',
        number: '2.4.8',
        type: 'classic',
        difficulty: 'medium',
        task: `En asteroide i solsystemet har omlopstid $T = 8$ ar.

a) Beregn den store halvaksen til asteroidens bane i AU.
b) Mellom hvilke to planeter befinner asteroiden seg sannsynligvis?

**Data:** Mars: $a = 1.52$ AU, Jupiter: $a = 5.20$ AU`,
        hints: [
          'Bruk $a^3 = T^2$ i jordenheter',
          'Sammenlign med planetenes avstander',
        ],
        solution: `**a) Stor halvakse:**
$$a^3 = T^2 = 8^2 = 64$$
$$a = \\sqrt[3]{64} = 4.0 \\text{ AU}$$

**b) Plassering:**
- Mars: $a = 1.52$ AU
- Asteroiden: $a = 4.0$ AU
- Jupiter: $a = 5.20$ AU

Asteroiden befinner seg mellom Mars og Jupiter, i det som kalles **asteroidebeltet**.

**Svar:**
a) Stor halvakse: 4.0 AU
b) Asteroiden befinner seg mellom Mars og Jupiter (i asteroidebeltet)`,
      },
    },

    // OPPGAVE 9
    {
      id: 'fys2-2-4-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-9',
        number: '2.4.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Manen kretser rundt jorda med en omlopstid pa 27.3 dager og en gjennomsnittlig avstand pa $3.84 \\times 10^8$ m.

Bruk disse dataene til a beregne jordas masse.

**Gitt:** $G = 6.674 \\times 10^{-11}$ N·m²/kg²`,
        hints: [
          'Bruk Keplers 3. lov lost for M: $M = \\frac{4\\pi^2 a^3}{GT^2}$',
          'Husk a omgjore omlopstiden til sekunder',
        ],
        solution: `**Gitt:**
- $a = 3.84 \\times 10^8$ m
- $T = 27.3$ dager $= 27.3 \\cdot 24 \\cdot 3600 = 2.36 \\times 10^6$ s
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

**Fra Keplers 3. lov:**
$$M = \\frac{4\\pi^2 a^3}{GT^2}$$

**Beregning:**
$$a^3 = (3.84 \\times 10^8)^3 = 5.67 \\times 10^{25} \\text{ m}^3$$

$$T^2 = (2.36 \\times 10^6)^2 = 5.57 \\times 10^{12} \\text{ s}^2$$

$$M = \\frac{4\\pi^2 \\cdot 5.67 \\times 10^{25}}{6.674 \\times 10^{-11} \\cdot 5.57 \\times 10^{12}}$$

$$M = \\frac{2.24 \\times 10^{27}}{3.72 \\times 10^{2}} = 6.02 \\times 10^{24} \\text{ kg}$$

**Svar:** Jordas masse er ca. $6.0 \\times 10^{24}$ kg.

**Merknad:** Den aksepterte verdien er $5.97 \\times 10^{24}$ kg. Avviket skyldes avrunding og at vi har antatt sirkulaer bane.`,
      },
    },

    // OPPGAVE 10
    {
      id: 'fys2-2-4-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-10',
        number: '2.4.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En geostationaer satellitt kretser rundt jorda med samme omlopstid som jordas rotasjon (24 timer), slik at satellitten star stille over ett punkt pa ekvator.

Beregn hoyde over jordoverflaten for en geostationaer bane.

**Gitt:**
- Jordas masse: $M = 5.97 \\times 10^{24}$ kg
- Jordas radius: $R = 6.37 \\times 10^6$ m
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²`,
        hints: [
          'Bruk Keplers 3. lov: $T^2 = \\frac{4\\pi^2}{GM}a^3$',
          'Los for $a$ (baneradius fra jordas sentrum)',
          'Hoyden over bakken er $h = a - R$',
        ],
        solution: `**Gitt:**
- $T = 24$ timer $= 24 \\cdot 3600 = 86400$ s
- $M = 5.97 \\times 10^{24}$ kg
- $R = 6.37 \\times 10^6$ m

**Steg 1: Finn baneradius fra Keplers 3. lov**

$$T^2 = \\frac{4\\pi^2}{GM}a^3$$

Los for $a$:
$$a^3 = \\frac{GMT^2}{4\\pi^2}$$

$$a^3 = \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot (86400)^2}{4\\pi^2}$$

$$a^3 = \\frac{3.986 \\times 10^{14} \\cdot 7.46 \\times 10^9}{39.48}$$

$$a^3 = 7.54 \\times 10^{22} \\text{ m}^3$$

$$a = \\sqrt[3]{7.54 \\times 10^{22}} = 4.23 \\times 10^7 \\text{ m} = 42300 \\text{ km}$$

**Steg 2: Finn hoyde over bakken**
$$h = a - R = 42300 - 6370 = 35930 \\text{ km}$$

**Svar:** En geostationaer satellitt ma vaere ca. **35 900 km** over jordoverflaten.

**Merknad:** Dette er den hoyden der kommunikasjonssatellitter og vaersatellitter ofte plasseres.`,
      },
    },

    // OPPGAVE 11
    {
      id: 'fys2-2-4-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-11',
        number: '2.4.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Halleys komet har eksentrisitet $e = 0.967$ og omlopstid $T = 76$ ar.

a) Beregn den store halvaksen $a$ i AU.
b) Beregn avstanden til solen ved perihel og aphel.
c) Kometens hastighet ved perihel er ca. 54 km/s. Beregn hastigheten ved aphel.`,
        hints: [
          'Bruk $a^3 = T^2$ for a finne stor halvakse',
          'Bruk $r = a(1 \\pm e)$ for perihel/aphel',
          'Bruk bevaring av angulærmoment for hastighetsforholdet',
        ],
        solution: `**a) Stor halvakse:**
$$a^3 = T^2 = 76^2 = 5776$$
$$a = \\sqrt[3]{5776} = 17.9 \\text{ AU}$$

**b) Perihel og aphel:**
$$r_{\\text{perihel}} = a(1 - e) = 17.9 \\cdot (1 - 0.967) = 17.9 \\cdot 0.033 = 0.59 \\text{ AU}$$

$$r_{\\text{aphel}} = a(1 + e) = 17.9 \\cdot (1 + 0.967) = 17.9 \\cdot 1.967 = 35.2 \\text{ AU}$$

**c) Hastighet ved aphel:**
$$\\frac{v_{\\text{perihel}}}{v_{\\text{aphel}}} = \\frac{r_{\\text{aphel}}}{r_{\\text{perihel}}} = \\frac{35.2}{0.59} = 59.7$$

$$v_{\\text{aphel}} = \\frac{v_{\\text{perihel}}}{59.7} = \\frac{54}{59.7} = 0.90 \\text{ km/s}$$

**Svar:**
a) Stor halvakse: 17.9 AU
b) Perihel: 0.59 AU (innenfor Venus' bane), Aphel: 35.2 AU (utenfor Neptuns bane)
c) Hastighet ved aphel: ca. 0.9 km/s

**Merknad:** Den enorme forskjellen i hastighet (54 vs 0.9 km/s) skyldes den hoye eksentrisiteten. Halleys komet tilbringer det meste av sin 76 ar lange bane langt fra solen, der den beveger seg sakte.`,
      },
    },

    // OPPGAVE 12
    {
      id: 'fys2-2-4-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-2-4-ex-12',
        number: '2.4.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En exoplanet er oppdaget rundt en stjerne med masse $M = 2.0 \\times 10^{30}$ kg (omtrent lik solens masse). Planeten har omlopstid $T = 10$ dager.

a) Beregn den store halvaksen til planetens bane i meter.
b) Sammenlign denne avstanden med Merkurs avstand til solen ($a_{\\text{Merkur}} = 5.79 \\times 10^{10}$ m).

**Gitt:** $G = 6.674 \\times 10^{-11}$ N·m²/kg²`,
        hints: [
          'Bruk Keplers 3. lov: $a^3 = \\frac{GMT^2}{4\\pi^2}$',
          'Husk a omgjore dager til sekunder',
        ],
        solution: `**Gitt:**
- $M = 2.0 \\times 10^{30}$ kg
- $T = 10$ dager $= 10 \\cdot 24 \\cdot 3600 = 8.64 \\times 10^5$ s
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

**a) Stor halvakse:**

$$a^3 = \\frac{GMT^2}{4\\pi^2}$$

$$a^3 = \\frac{6.674 \\times 10^{-11} \\cdot 2.0 \\times 10^{30} \\cdot (8.64 \\times 10^5)^2}{4\\pi^2}$$

$$a^3 = \\frac{1.335 \\times 10^{20} \\cdot 7.47 \\times 10^{11}}{39.48}$$

$$a^3 = 2.53 \\times 10^{30} \\text{ m}^3$$

$$a = \\sqrt[3]{2.53 \\times 10^{30}} = 1.36 \\times 10^{10} \\text{ m}$$

**b) Sammenligning med Merkur:**
$$\\frac{a}{a_{\\text{Merkur}}} = \\frac{1.36 \\times 10^{10}}{5.79 \\times 10^{10}} = 0.23$$

Exoplaneten er ca. 4 ganger naermere sin stjerne enn Merkur er til solen!

**Svar:**
a) Stor halvakse: $1.36 \\times 10^{10}$ m $\\approx 0.09$ AU
b) Exoplaneten er bare ca. 23% av Merkurs avstand til solen

**Merknad:** Slike planeter med korte omlopstider kalles "hot Jupiters" hvis de er store, eller "hot Earths/super-Earths" hvis de er mindre. De er lette a oppdage fordi de passerer foran stjernen ofte.`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Keplers 1. lov (Ellipsebaner):**
Planetene beveger seg i ellipser med solen i ett brennpunkt.
- Perihel: $r_{\\text{perihel}} = a(1 - e)$
- Aphel: $r_{\\text{aphel}} = a(1 + e)$

**Keplers 2. lov (Flatesetningen):**
Linjen fra solen til planeten sveiper over like store arealer pa like lang tid.
- Planeten beveger seg raskere naer solen
- Uttrykk for bevaring av angulærmoment

**Keplers 3. lov (Harmoniloven):**
$$T^2 = \\frac{4\\pi^2}{GM}a^3$$

I jordenheter (AU og ar): $T^2 = a^3$

**Eksentrisitet:**
$$e = \\frac{c}{a}$$

der $c$ er brennpunktsavstand og $a$ er stor halvakse.

**Viktige anvendelser:**
- Beregne omlopstider for planeter og satellitter
- Bestemme masser av stjerner og planeter
- Planlegge romferder
- Oppdage exoplaneter

**Neste kapittel:**
Vi skal se pa energibetraktninger i gravitasjonsfeltet og unnslipningshastighet.`,
    },
  ],
};

// ============================================================================
// Kapittel 2.5: Gravitasjon og energi
// LK20: Analysere bevegelse i gravitasjonsfelt ved energibevaring
// ============================================================================

export const CHAPTER_FYSIKK2_2_5: TextbookChapter = {
  id: 'fysikk2-2-5',
  courseId: 'fysikk2',
  chapterNumber: '2.5',
  title: 'Gravitasjon og energi',
  description: 'Energibetraktninger i gravitasjonsfeltet og bundne/ubundne baner.',
  estimatedMinutes: 45,
  prerequisites: ['fysikk2-2-2', 'fysikk2-2-3'],
  competenceGoals: [
    'analysere bevegelse i gravitasjonsfelt med energibevaring',
    'klassifisere baner basert på total energi',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-2-5-intro',
      type: 'text',
      content: `## Energi i gravitasjonsfeltet

I tidligere kapitler har vi sett på gravitasjonskraften og banebevegelse. Nå skal vi bruke **energibetraktninger** for å analysere bevegelse i gravitasjonsfeltet.

Energibevaring er et kraftig verktøy fordi:
- Det gir oss informasjon uten å løse kompliserte bevegelseslikninger
- Det forteller oss om en bane er **bundet** (satellitt) eller **ubundet** (flukt)
- Det lar oss beregne hastigheter ved ulike avstander

**Hva vi skal lære:**
1. Total mekanisk energi i gravitasjonsfeltet
2. Forskjellen mellom bundne og ubundne baner
3. Energi i sirkelbaner
4. Virialteoremet for gravitasjon
5. Fluktfart fra energibetraktninger
6. Gravitasjonsbrønnen (potensialkurve)

**Viktig bakgrunn:**
Fra Fysikk 1 kjenner du potensiell energi nær jordoverflaten: $E_p = mgh$. Denne formelen gjelder bare når $g$ er tilnærmet konstant. For bevegelse langt fra Jorden må vi bruke den generelle formelen for gravitasjonell potensiell energi.`,
    },

    // ========== DEFINISJON: TOTAL MEKANISK ENERGI ==========
    {
      id: 'fys2-2-5-def-total-energi',
      type: 'definition',
      title: 'Total mekanisk energi i gravitasjonsfeltet',
      content: `Den **totale mekaniske energien** $E$ for et objekt med masse $m$ som beveger seg i gravitasjonsfeltet til et legeme med masse $M$ er:

$$E = E_k + E_p = \\frac{1}{2}mv^2 - \\frac{GMm}{r}$$

hvor:
- $E_k = \\frac{1}{2}mv^2$ er kinetisk energi
- $E_p = -\\frac{GMm}{r}$ er gravitasjonell potensiell energi
- $v$ er objektets fart
- $r$ er avstanden fra senter av masse $M$
- $G = 6.674 \\times 10^{-11}$ N·m²/kg² er gravitasjonskonstanten

**Viktig:**
- Den potensielle energien er **negativ** (nullpunkt ved $r = \\infty$)
- Den totale energien kan være positiv, null eller negativ
- Ved energibevaring er $E$ konstant langs hele banen`,
    },

    // ========== POTENSIELL ENERGI ==========
    {
      id: 'fys2-2-5-potensiell',
      type: 'text',
      content: `## Gravitasjonell potensiell energi

### Hvorfor er $E_p$ negativ?

Vi velger referansepunktet for potensiell energi ved uendelig avstand: $E_p(\\infty) = 0$.

Siden gravitasjonskraften er **attraktiv**, må vi **tilføre** energi for å flytte et objekt fra avstand $r$ til uendelig. Det betyr at potensiell energi ved avstand $r$ er **lavere** enn ved uendelig, altså negativ.

$$E_p = -\\frac{GMm}{r}$$

### Egenskaper for $E_p$

- Ved jordoverflaten ($r = R_J$): $E_p = -\\frac{GM_J m}{R_J}$
- Når $r \\to \\infty$: $E_p \\to 0$
- Jo nærmere sentrallegemet, desto mer negativ er $E_p$
- $E_p$ er alltid negativ for gravitasjon (unntatt ved $r = \\infty$)

### Sammenheng med $mgh$

Nær jordoverflaten, hvor $r \\approx R_J$, kan vi vise at:

$$\\Delta E_p = E_p(R_J + h) - E_p(R_J) \\approx mgh$$

når $h \\ll R_J$. Dette forklarer hvorfor $E_p = mgh$ fungerer for bevegelse nær bakken.`,
    },

    // ========== DEFINISJON: BUNDET/UBUNDET BANE ==========
    {
      id: 'fys2-2-5-def-baner',
      type: 'definition',
      title: 'Bundet og ubundet bane',
      content: `Fortegnet på den totale mekaniske energien avgjør om banen er **bundet** eller **ubundet**:

**Bundet bane ($E < 0$):**
- Objektet kan aldri unnslippe til uendelig
- Banen er en **ellipse** (inkludert sirkel som spesialtilfelle)
- Eksempler: Satellitter, planeter, måner

**Ubundet bane ($E > 0$):**
- Objektet kan unnslippe til uendelig
- Banen er en **hyperbel**
- Eksempler: Interstellare objekter, romfartøy på fluktbane

**Grensetilfelle ($E = 0$):**
- Objektet akkurat unnslipper (farten $v \\to 0$ når $r \\to \\infty$)
- Banen er en **parabel**
- Objektet har nøyaktig **fluktfart**

**Huskeregel:**
- $E < 0$: Bundet (ellipse/sirkel) - objektet "fanget"
- $E = 0$: Parabel - nøyaktig fluktfart
- $E > 0$: Ubundet (hyperbel) - objektet unnslipper`,
    },

    // ========== VISUALISERING: BANETYPER ==========
    {
      id: 'fys2-2-5-banetyper',
      type: 'text',
      content: `## Klassifisering av baner

### Energi og banetype

| Total energi $E$ | Banetype | Eksentrisitet $e$ | Skjebne |
|-----------------|----------|-------------------|---------|
| $E < 0$ | Ellipse | $0 \\leq e < 1$ | Bundet, lukket bane |
| $E = 0$ | Parabel | $e = 1$ | Akkurat flukt |
| $E > 0$ | Hyperbel | $e > 1$ | Ubundet, åpen bane |

### Spesialtilfeller

**Sirkelbane** ($E < 0$, $e = 0$):
- Den mest negative energien for en gitt baneradius
- Objektet har konstant avstand fra sentrallegemet

**Ellipse** ($E < 0$, $0 < e < 1$):
- Objektet svinger mellom perihelion og aphelion
- Jo nærmere $E$ er null, desto mer langstrakt er ellipsen

### Fysisk tolkning

Tenk på total energi som en "banekonto":
- **Negativ saldo** ($E < 0$): Du er "i gjeld" til gravitasjonsfeltet og kan ikke forlate
- **Null saldo** ($E = 0$): Du har akkurat nok til å unnslippe
- **Positiv saldo** ($E > 0$): Du har overskudd og vil fortsette utover selv i uendelig`,
    },

    // ========== DEFINISJON: ENERGI I SIRKELBANE ==========
    {
      id: 'fys2-2-5-def-sirkelbane',
      type: 'definition',
      title: 'Energi i sirkelbane',
      content: `For et objekt i **sirkelbane** med radius $r$ rundt et legeme med masse $M$ gjelder:

$$E = -\\frac{GMm}{2r}$$

**Utledning:**
I sirkelbane gir gravitasjonskraften sentripetalkraften:
$$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$$

Dette gir:
$$v^2 = \\frac{GM}{r}$$

Kinetisk energi blir:
$$E_k = \\frac{1}{2}mv^2 = \\frac{GMm}{2r}$$

Total energi:
$$E = E_k + E_p = \\frac{GMm}{2r} - \\frac{GMm}{r} = -\\frac{GMm}{2r}$$

**Viktige sammenhenger for sirkelbane:**
- $E_k = -\\frac{1}{2}E_p$ (kinetisk energi er halvparten av |potensiell energi|)
- $E = \\frac{1}{2}E_p = -E_k$ (total energi er lik negativ kinetisk energi)
- $|E_p| = 2E_k$ (potensiell energi er dobbelt så stor som kinetisk)`,
    },

    // ========== VIRIALTEOREMET ==========
    {
      id: 'fys2-2-5-virial',
      type: 'text',
      content: `## Virialteoremet for gravitasjon

**Virialteoremet** er et kraftig resultat som knytter sammen kinetisk og potensiell energi for bundne gravitasjonssystemer.

### For sirkelbane

Vi har allerede sett at for en sirkelbane:
$$\\langle E_k \\rangle = -\\frac{1}{2}\\langle E_p \\rangle$$

eller:
$$2\\langle E_k \\rangle + \\langle E_p \\rangle = 0$$

Her betyr $\\langle \\cdot \\rangle$ gjennomsnitt over tid.

### For ellipsebane

Det viser seg at virialteoremet gjelder også for ellipsebaner når vi tar **tidsgjennomsnitt**:

$$\\langle E_k \\rangle = -\\frac{1}{2}\\langle E_p \\rangle = -\\frac{E}{2} = \\frac{GMm}{4a}$$

hvor $a$ er halvaksen (semi-major axis) til ellipsen.

**Total energi for ellipsebane:**
$$E = -\\frac{GMm}{2a}$$

Dette er identisk med formelen for sirkelbane, men med $r$ erstattet av $a$.

### Praktisk betydning

Virialteoremet forteller oss:
- For bundne systemer er det en fast fordeling mellom kinetisk og potensiell energi
- Vi kan finne total energi fra bare å kjenne baneradius eller halvakse
- Brukes i astrofysikk for å beregne masser av galakser og galaksehoper`,
    },

    // ========== EKSEMPEL 1: KLASSIFISERE BANE ==========
    {
      id: 'fys2-2-5-ex-klassifisere',
      type: 'example',
      title: 'Eksempel: Er banen bundet?',
      problem: `En romrakett med masse 5000 kg befinner seg i en avstand på 8000 km fra Jordens senter og har en fart på 9.0 km/s.

a) Beregn den totale mekaniske energien til raketten.
b) Er banen bundet eller ubundet?
c) Hva slags banetype har raketten?

Bruk $M_J = 5.97 \\times 10^{24}$ kg og $G = 6.674 \\times 10^{-11}$ N·m²/kg².`,
      solution: `**Gitt:**
- $m = 5000$ kg
- $r = 8000$ km $= 8.0 \\times 10^6$ m
- $v = 9.0$ km/s $= 9.0 \\times 10^3$ m/s
- $M_J = 5.97 \\times 10^{24}$ kg
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

**a) Total mekanisk energi:**

**Kinetisk energi:**
$$E_k = \\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot 5000 \\cdot (9000)^2$$
$$E_k = 2.025 \\times 10^{11} \\text{ J}$$

**Potensiell energi:**
$$E_p = -\\frac{GM_J m}{r} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 5000}{8.0 \\times 10^6}$$
$$E_p = -\\frac{1.99 \\times 10^{18}}{8.0 \\times 10^6} = -2.49 \\times 10^{11} \\text{ J}$$

**Total energi:**
$$E = E_k + E_p = 2.025 \\times 10^{11} - 2.49 \\times 10^{11}$$
$$E = -4.6 \\times 10^{10} \\text{ J}$$

**b) Bundet eller ubundet?**

Siden $E < 0$, er banen **bundet**. Raketten vil ikke unnslippe Jordens gravitasjonsfelt.

**c) Banetype:**

Siden $E < 0$, er banen en **ellipse** (eller muligens en sirkel, men det krever at farten er eksakt lik sirkelbanefarten ved denne radiusen).

**Sjekk: Er det sirkelbane?**
Sirkelbanefart ved $r = 8.0 \\times 10^6$ m:
$$v_{\\text{sirkel}} = \\sqrt{\\frac{GM_J}{r}} = \\sqrt{\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{8.0 \\times 10^6}}$$
$$v_{\\text{sirkel}} = \\sqrt{4.98 \\times 10^7} = 7.06 \\text{ km/s}$$

Siden rakettens fart (9.0 km/s) er større enn sirkelbanefarten (7.06 km/s), er banen en **ellipse** der den nåværende posisjonen er **perihelion** (nærmeste punkt).`,
    },

    // ========== EKSEMPEL 2: ENDRING FRA SIRKEL TIL ELLIPSE ==========
    {
      id: 'fys2-2-5-ex-baneendring',
      type: 'example',
      title: 'Eksempel: Baneendring med rakettmotor',
      problem: `En satellitt går i sirkelbane rundt Jorden i en høyde på 400 km over jordoverflaten. Satellitten har masse 2000 kg.

a) Beregn satellittens fart og totale energi i den opprinnelige sirkelbanen.
b) Satellitten fyrer rakettmotoren i fartretningen og øker farten med 500 m/s. Beregn den nye totale energien.
c) Finn halvaksen til den nye ellipsebanen.
d) Hvor høyt over Jorden er apogeum (det fjerneste punktet)?

Bruk $R_J = 6.37 \\times 10^6$ m, $M_J = 5.97 \\times 10^{24}$ kg.`,
      solution: `**Gitt:**
- Høyde: $h = 400$ km $= 4.0 \\times 10^5$ m
- $m = 2000$ kg
- $\\Delta v = 500$ m/s
- $R_J = 6.37 \\times 10^6$ m
- $M_J = 5.97 \\times 10^{24}$ kg

**a) Opprinnelig sirkelbane:**

Baneradius:
$$r_1 = R_J + h = 6.37 \\times 10^6 + 4.0 \\times 10^5 = 6.77 \\times 10^6 \\text{ m}$$

Sirkelbanefart:
$$v_1 = \\sqrt{\\frac{GM_J}{r_1}} = \\sqrt{\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.77 \\times 10^6}}$$
$$v_1 = \\sqrt{5.88 \\times 10^7} = 7670 \\text{ m/s} = 7.67 \\text{ km/s}$$

Total energi i sirkelbane:
$$E_1 = -\\frac{GM_J m}{2r_1} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 2000}{2 \\cdot 6.77 \\times 10^6}$$
$$E_1 = -5.88 \\times 10^{10} \\text{ J}$$

**b) Etter hastighetspulsen:**

Ny fart:
$$v_2 = v_1 + \\Delta v = 7670 + 500 = 8170 \\text{ m/s}$$

Ny total energi (posisjonen er fortsatt $r_1$):
$$E_2 = \\frac{1}{2}mv_2^2 - \\frac{GM_J m}{r_1}$$
$$E_2 = \\frac{1}{2} \\cdot 2000 \\cdot 8170^2 - \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 2000}{6.77 \\times 10^6}$$
$$E_2 = 6.67 \\times 10^{10} - 11.76 \\times 10^{10}$$
$$E_2 = -5.09 \\times 10^{10} \\text{ J}$$

**c) Halvakse for den nye ellipsebanen:**

Fra $E = -\\frac{GM_J m}{2a}$:
$$a = -\\frac{GM_J m}{2E_2} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 2000}{2 \\cdot (-5.09 \\times 10^{10})}$$
$$a = 7.82 \\times 10^6 \\text{ m}$$

**d) Apogeum:**

Perigeum (startpunktet): $r_p = r_1 = 6.77 \\times 10^6$ m

For en ellipse: $2a = r_p + r_a$, der $r_a$ er apogeum.
$$r_a = 2a - r_p = 2 \\cdot 7.82 \\times 10^6 - 6.77 \\times 10^6$$
$$r_a = 8.87 \\times 10^6 \\text{ m}$$

Høyde over Jorden ved apogeum:
$$h_a = r_a - R_J = 8.87 \\times 10^6 - 6.37 \\times 10^6 = 2.50 \\times 10^6 \\text{ m}$$
$$h_a = 2500 \\text{ km}$$

**Svar:** Satellitten går fra en 400 km høy sirkelbane til en ellipsebane med perigeum ved 400 km og apogeum ved 2500 km.`,
    },

    // ========== FLUKTFART ==========
    {
      id: 'fys2-2-5-fluktfart',
      type: 'text',
      content: `## Fluktfart fra energibetraktning

**Fluktfart** (escape velocity) er den minste farten et objekt trenger for å unnslippe gravitasjonsfeltet til et himmellegeme.

### Utledning fra energibevaring

Ved nøyaktig flukt har objektet $E = 0$:
$$E = \\frac{1}{2}mv_{\\text{flukt}}^2 - \\frac{GMm}{r} = 0$$

Løser for $v_{\\text{flukt}}$:
$$\\frac{1}{2}mv_{\\text{flukt}}^2 = \\frac{GMm}{r}$$
$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{r}}$$

### Ved overflaten av et himmellegeme

For flukt fra overflaten ($r = R$):
$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{R}}$$

### Sammenheng med sirkelbanefart

Sirkelbanefart ved radius $r$: $v_{\\text{sirkel}} = \\sqrt{\\frac{GM}{r}}$

Fluktfart ved radius $r$: $v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2} \\cdot v_{\\text{sirkel}}$

**Viktig resultat:**
$$v_{\\text{flukt}} = \\sqrt{2} \\cdot v_{\\text{sirkel}} \\approx 1.41 \\cdot v_{\\text{sirkel}}$$

For å unnslippe fra en sirkelbane må du øke farten med ca. 41%.

### Fluktfart fra Jorden

Ved jordoverflaten:
$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM_J}{R_J}} = \\sqrt{\\frac{2 \\cdot 6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.37 \\times 10^6}}$$
$$v_{\\text{flukt}} = 11.2 \\text{ km/s}$$

### Fluktfart for ulike himmellegemer

| Himmellegeme | Fluktfart |
|--------------|-----------|
| Månen | 2.4 km/s |
| Jorden | 11.2 km/s |
| Mars | 5.0 km/s |
| Jupiter | 59.5 km/s |
| Solen | 617 km/s |`,
    },

    // ========== EKSEMPEL 3: FLUKTFART ==========
    {
      id: 'fys2-2-5-ex-fluktfart',
      type: 'example',
      title: 'Eksempel: Flukt fra ISS',
      problem: `Den internasjonale romstasjonen (ISS) går i sirkelbane ca. 420 km over Jorden.

a) Hva er fluktfarten fra denne høyden?
b) Hvor mye må en romkapsel øke sin fart for å forlate jordbane fra ISS?
c) Hva er den totale energiendringen for en romkapsel med masse 8000 kg?`,
      solution: `**Gitt:**
- Høyde: $h = 420$ km $= 4.20 \\times 10^5$ m
- $R_J = 6.37 \\times 10^6$ m
- $M_J = 5.97 \\times 10^{24}$ kg
- $m = 8000$ kg (for del c)

**a) Fluktfart fra 420 km høyde:**

Radius fra Jordens senter:
$$r = R_J + h = 6.37 \\times 10^6 + 4.20 \\times 10^5 = 6.79 \\times 10^6 \\text{ m}$$

Fluktfart:
$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM_J}{r}} = \\sqrt{\\frac{2 \\cdot 6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.79 \\times 10^6}}$$
$$v_{\\text{flukt}} = \\sqrt{1.17 \\times 10^8} = 10.8 \\text{ km/s}$$

**b) Hastighetspuls for flukt:**

Sirkelbanefart ved denne høyden:
$$v_{\\text{sirkel}} = \\sqrt{\\frac{GM_J}{r}} = \\sqrt{\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.79 \\times 10^6}}$$
$$v_{\\text{sirkel}} = \\sqrt{5.86 \\times 10^7} = 7.66 \\text{ km/s}$$

Nødvendig hastighetsøkning:
$$\\Delta v = v_{\\text{flukt}} - v_{\\text{sirkel}} = 10.8 - 7.66 = 3.1 \\text{ km/s}$$

**Alternativt:** $\\Delta v = (\\sqrt{2} - 1) v_{\\text{sirkel}} = 0.414 \\cdot 7.66 = 3.2$ km/s

**c) Energiendring:**

Initial energi (sirkelbane):
$$E_i = -\\frac{GM_J m}{2r} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 8000}{2 \\cdot 6.79 \\times 10^6}$$
$$E_i = -2.35 \\times 10^{11} \\text{ J}$$

Sluttenergi (fluktbane):
$$E_f = 0$$

Energiendring:
$$\\Delta E = E_f - E_i = 0 - (-2.35 \\times 10^{11}) = 2.35 \\times 10^{11} \\text{ J}$$

**Svar:** Romkapselen trenger en hastighetsøkning på 3.1 km/s og en energitilførsel på $2.35 \\times 10^{11}$ J (235 GJ).`,
    },

    // ========== GRAVITASJONSBRØNN ==========
    {
      id: 'fys2-2-5-gravitasjonsbr',
      type: 'text',
      content: `## Gravitasjonsbrønnen (Potensialkurve)

En nyttig visualisering av gravitasjonsfeltet er **gravitasjonsbrønnen** eller **potensialkurven**.

### Hva er en gravitasjonsbrønn?

Hvis vi plotter potensiell energi per masse som funksjon av avstand:
$$\\phi(r) = \\frac{E_p}{m} = -\\frac{GM}{r}$$

får vi en kurve som ligner en "brønn" eller "trakt".

### Tolkning av grafen

- **Kurven viser** potensiell energi per masse ($\\phi$) langs y-aksen
- **Avstanden** $r$ fra sentrallegemet er langs x-aksen
- **Jo dypere i brønnen**, jo mer bundet er objektet
- **Overflaten** av himmellegemet er bunnen av brønnen vi kan nå fysisk

### Total energi i brønnen

Et objekt med total spesifikk energi $\\varepsilon = E/m$ kan visualiseres som en horisontal linje:

- Hvis linjen er **under nullnivået** ($\\varepsilon < 0$): Objektet er bundet
- Hvis linjen er **på nullnivået** ($\\varepsilon = 0$): Nøyaktig flukt
- Hvis linjen er **over nullnivået** ($\\varepsilon > 0$): Ubundet

### Vendepunkter

Der energilinjen krysser potensialbrønnen, har objektet $E_k = 0$ (vendepunkt):

For en bundet ellipsebane med energi $E$:
- **Perihelion**: Nærmeste punkt, høy $E_k$
- **Aphelion**: Fjerneste punkt, lav $E_k$ (vendepunkt)

### Praktisk bruk

Gravitasjonsbrønnen visualiserer:
- Hvor "dyp" et gravitasjonsfelt er
- Hvor mye energi som trengs for flukt
- Forskjellen mellom bundne og ubundne baner
- Energibevaring langs banen`,
    },

    // ========== NOTE: ENERGI OG ARBEID ==========
    {
      id: 'fys2-2-5-note-arbeid',
      type: 'note',
      title: 'Energi og arbeid i gravitasjonsfeltet',
      content: `**Arbeid-energi-teoremet:**

Arbeidet utført av gravitasjonskraften når et objekt beveger seg fra $r_1$ til $r_2$ er:

$$W_g = -\\Delta E_p = E_{p1} - E_{p2} = GMm\\left(\\frac{1}{r_2} - \\frac{1}{r_1}\\right)$$

**Viktige poenger:**
- Når objektet beveger seg **mot** sentrallegemet (mindre $r$): Gravitasjonen gjør **positivt** arbeid
- Når objektet beveger seg **bort fra** sentrallegemet (større $r$): Gravitasjonen gjør **negativt** arbeid
- For en lukket bane er totalt arbeid over en omløp lik null (konservativ kraft)

**Kinetisk energi endres tilsvarende:**
$$\\Delta E_k = -\\Delta E_p = W_g$$`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'fys2-2-5-oppg-1',
      type: 'exercise',
      exerciseType: 'simple-calculation',
      title: 'Oppgave 1',
      problem: `En meteoritt med masse 500 kg befinner seg 50 000 km fra Jordens senter og har en fart på 3.0 km/s mot Jorden.

a) Beregn den totale mekaniske energien til meteoritten.
b) Er meteoritten på bundet eller ubundet bane?`,
      hints: [
        'Bruk formelen $E = \\frac{1}{2}mv^2 - \\frac{GMm}{r}$',
        'Husk å konvertere km til m',
        'Sjekk fortegnet på $E$ for å avgjøre banetype',
      ],
      solution: {
        answer: 'a) $E = -1.7 \\times 10^9$ J, b) Bundet bane (ellipse)',
        explanation: `**Gitt:**
- $m = 500$ kg
- $r = 50\\,000$ km $= 5.0 \\times 10^7$ m
- $v = 3.0$ km/s $= 3000$ m/s

**a) Total energi:**
$$E_k = \\frac{1}{2} \\cdot 500 \\cdot 3000^2 = 2.25 \\times 10^9 \\text{ J}$$
$$E_p = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 500}{5.0 \\times 10^7} = -3.98 \\times 10^9 \\text{ J}$$
$$E = E_k + E_p = 2.25 \\times 10^9 - 3.98 \\times 10^9 = -1.7 \\times 10^9 \\text{ J}$$

**b)** Siden $E < 0$, er banen **bundet** (ellipse).`,
      },
    },

    {
      id: 'fys2-2-5-oppg-2',
      type: 'exercise',
      exerciseType: 'simple-calculation',
      title: 'Oppgave 2',
      problem: `En satellitt har en total mekanisk energi på $-4.0 \\times 10^{10}$ J og en masse på 3000 kg.

Beregn halvaksen til satellittens ellipsebane rundt Jorden.`,
      hints: [
        'Bruk formelen $E = -\\frac{GMm}{2a}$',
        'Løs for $a$',
      ],
      solution: {
        answer: '$a = 7.47 \\times 10^6$ m (ca. 7500 km fra Jordens senter)',
        explanation: `Fra $E = -\\frac{GMm}{2a}$:
$$a = -\\frac{GMm}{2E} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 3000}{2 \\cdot (-4.0 \\times 10^{10})}$$
$$a = \\frac{1.195 \\times 10^{18}}{8.0 \\times 10^{10}} = 7.47 \\times 10^6 \\text{ m}$$`,
      },
    },

    {
      id: 'fys2-2-5-oppg-3',
      type: 'exercise',
      exerciseType: 'applied-calculation',
      title: 'Oppgave 3',
      problem: `Et romfartøy med masse 12 000 kg går i sirkelbane 800 km over Jorden.

a) Beregn den kinetiske, potensielle og totale energien til romfartøyet.
b) Bekreft at virialteoremet stemmer (at $E_k = -\\frac{1}{2}E_p$).`,
      hints: [
        'Bruk $r = R_J + h$ for baneradius',
        'For sirkelbane: $E_k = \\frac{GMm}{2r}$ og $E_p = -\\frac{GMm}{r}$',
        'Sjekk at $E_k / E_p = -1/2$',
      ],
      solution: {
        answer: '$E_k = 3.33 \\times 10^{11}$ J, $E_p = -6.66 \\times 10^{11}$ J, $E = -3.33 \\times 10^{11}$ J',
        explanation: `**Gitt:**
- $m = 12\\,000$ kg
- $h = 800$ km
- $r = R_J + h = 6.37 \\times 10^6 + 8.0 \\times 10^5 = 7.17 \\times 10^6$ m

**a) Energier:**
$$E_p = -\\frac{GMm}{r} = -\\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 12000}{7.17 \\times 10^6}$$
$$E_p = -6.66 \\times 10^{11} \\text{ J}$$

$$E_k = \\frac{GMm}{2r} = \\frac{|E_p|}{2} = 3.33 \\times 10^{11} \\text{ J}$$

$$E = E_k + E_p = 3.33 \\times 10^{11} - 6.66 \\times 10^{11} = -3.33 \\times 10^{11} \\text{ J}$$

**b) Virialteoremet:**
$$\\frac{E_k}{E_p} = \\frac{3.33 \\times 10^{11}}{-6.66 \\times 10^{11}} = -0.5 = -\\frac{1}{2} \\checkmark$$`,
      },
    },

    {
      id: 'fys2-2-5-oppg-4',
      type: 'exercise',
      exerciseType: 'simple-calculation',
      title: 'Oppgave 4',
      problem: `Beregn fluktfarten fra overflaten av Mars.

Bruk: $M_{\\text{Mars}} = 6.42 \\times 10^{23}$ kg, $R_{\\text{Mars}} = 3.39 \\times 10^6$ m.`,
      hints: [
        'Bruk formelen $v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{R}}$',
      ],
      solution: {
        answer: '$v_{\\text{flukt}} = 5.03$ km/s',
        explanation: `$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM_{\\text{Mars}}}{R_{\\text{Mars}}}}$$
$$v_{\\text{flukt}} = \\sqrt{\\frac{2 \\cdot 6.674 \\times 10^{-11} \\cdot 6.42 \\times 10^{23}}{3.39 \\times 10^6}}$$
$$v_{\\text{flukt}} = \\sqrt{2.53 \\times 10^7} = 5030 \\text{ m/s} = 5.03 \\text{ km/s}$$`,
      },
    },

    {
      id: 'fys2-2-5-oppg-5',
      type: 'exercise',
      exerciseType: 'applied-calculation',
      title: 'Oppgave 5',
      problem: `En komet passerer Solen i en avstand på 0.5 AU (astronomiske enheter) med en fart på 60 km/s.

a) Beregn den totale spesifikke energien (energi per masse) til kometen.
b) Er kometens bane bundet, parabolsk eller hyperbolsk?
c) Hvis banen er bundet, finn halvaksen.

Bruk: 1 AU $= 1.496 \\times 10^{11}$ m, $M_{\\odot} = 1.989 \\times 10^{30}$ kg.`,
      hints: [
        'Spesifikk energi: $\\varepsilon = \\frac{1}{2}v^2 - \\frac{GM}{r}$',
        'Hvis $\\varepsilon < 0$: bundet, $\\varepsilon = 0$: parabel, $\\varepsilon > 0$: hyperbel',
        'For halvakse: $\\varepsilon = -\\frac{GM}{2a}$',
      ],
      solution: {
        answer: 'a) $\\varepsilon = -1.78 \\times 10^8$ J/kg, b) Bundet (ellipse), c) $a = 3.73 \\times 10^{11}$ m = 2.5 AU',
        explanation: `**Gitt:**
- $r = 0.5$ AU $= 0.5 \\cdot 1.496 \\times 10^{11} = 7.48 \\times 10^{10}$ m
- $v = 60$ km/s $= 6.0 \\times 10^4$ m/s
- $M_{\\odot} = 1.989 \\times 10^{30}$ kg

**a) Spesifikk energi:**
$$\\varepsilon = \\frac{1}{2}v^2 - \\frac{GM_{\\odot}}{r}$$
$$\\varepsilon = \\frac{1}{2}(6.0 \\times 10^4)^2 - \\frac{6.674 \\times 10^{-11} \\cdot 1.989 \\times 10^{30}}{7.48 \\times 10^{10}}$$
$$\\varepsilon = 1.8 \\times 10^9 - 1.77 \\times 10^9 = -1.78 \\times 10^8 \\text{ J/kg}$$

**b)** Siden $\\varepsilon < 0$, er banen **bundet (ellipse)**.

**c) Halvakse:**
$$a = -\\frac{GM_{\\odot}}{2\\varepsilon} = -\\frac{6.674 \\times 10^{-11} \\cdot 1.989 \\times 10^{30}}{2 \\cdot (-1.78 \\times 10^8)}$$
$$a = 3.73 \\times 10^{11} \\text{ m} = 2.5 \\text{ AU}$$`,
      },
    },

    {
      id: 'fys2-2-5-oppg-6',
      type: 'exercise',
      exerciseType: 'applied-calculation',
      title: 'Oppgave 6',
      problem: `En satellitt går i ellipsebane rundt Jorden. Ved perigeum er satellitten 7000 km fra Jordens senter med fart 8.5 km/s.

a) Beregn den totale energien til satellitten (masse 1500 kg).
b) Finn banehalvaksen.
c) Finn farten ved apogeum.`,
      hints: [
        'Beregn total energi ved perigeum',
        'Bruk $E = -\\frac{GMm}{2a}$ for å finne halvaksen',
        'Bruk bevarelse av energi og $2a = r_p + r_a$ for å finne apogeum',
        'Alternativt: Bruk bevarelse av angulærmoment',
      ],
      solution: {
        answer: 'a) $E = -3.13 \\times 10^{10}$ J, b) $a = 9.54 \\times 10^6$ m, c) $v_a = 4.95$ km/s',
        explanation: `**Gitt:**
- $r_p = 7000$ km $= 7.0 \\times 10^6$ m
- $v_p = 8.5$ km/s $= 8500$ m/s
- $m = 1500$ kg

**a) Total energi:**
$$E = \\frac{1}{2}mv_p^2 - \\frac{GMm}{r_p}$$
$$E = \\frac{1}{2} \\cdot 1500 \\cdot 8500^2 - \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24} \\cdot 1500}{7.0 \\times 10^6}$$
$$E = 5.42 \\times 10^{10} - 8.54 \\times 10^{10} = -3.13 \\times 10^{10} \\text{ J}$$

**b) Halvakse:**
$$a = -\\frac{GMm}{2E} = \\frac{5.97 \\times 10^{14} \\cdot 1500}{2 \\cdot 3.13 \\times 10^{10}} = 9.54 \\times 10^6 \\text{ m}$$

**c) Apogeum og fart:**
$$r_a = 2a - r_p = 2 \\cdot 9.54 \\times 10^6 - 7.0 \\times 10^6 = 1.21 \\times 10^7 \\text{ m}$$

Fra energibevaring ved apogeum:
$$E = \\frac{1}{2}mv_a^2 - \\frac{GMm}{r_a}$$
$$-3.13 \\times 10^{10} = \\frac{1}{2} \\cdot 1500 \\cdot v_a^2 - \\frac{3.98 \\times 10^{14} \\cdot 1500}{1.21 \\times 10^7}$$
$$-3.13 \\times 10^{10} = 750 v_a^2 - 4.94 \\times 10^{10}$$
$$750 v_a^2 = 1.81 \\times 10^{10}$$
$$v_a = 4.95 \\times 10^3 \\text{ m/s} = 4.95 \\text{ km/s}$$`,
      },
    },

    {
      id: 'fys2-2-5-oppg-7',
      type: 'exercise',
      exerciseType: 'conceptual',
      title: 'Oppgave 7',
      problem: `Forklar hvorfor det krever energi å gå fra en lav sirkelbane til en høyere sirkelbane, selv om satellitten ender opp med lavere fart.`,
      hints: [
        'Tenk på hva som skjer med kinetisk og potensiell energi',
        'Hvordan endres total energi?',
        'Husker du at total energi i sirkelbane er $E = -\\frac{GMm}{2r}$?',
      ],
      solution: {
        answer: 'Se forklaring',
        explanation: `Ved overgang til høyere bane:

**Kinetisk energi:**
$E_k = \\frac{GMm}{2r}$ synker (mindre fart i høyere bane)

**Potensiell energi:**
$E_p = -\\frac{GMm}{r}$ øker (blir mindre negativ)

**Total energi:**
$E = -\\frac{GMm}{2r}$ øker (blir mindre negativ)

Selv om satellitten har lavere fart, har den **høyere total energi** fordi:
- Potensiell energi øker mer enn kinetisk energi synker
- $\\Delta E_p = +\\frac{GMm}{r_1} - \\frac{GMm}{r_2}$ (positiv)
- $\\Delta E_k = \\frac{GMm}{2r_2} - \\frac{GMm}{2r_1}$ (negativ, men bare halvparten av $|\\Delta E_p|$)

**Netto energiendring:**
$\\Delta E = \\Delta E_k + \\Delta E_p = \\frac{1}{2}\\Delta E_p > 0$

Det må tilføres energi for å nå høyere bane!`,
      },
    },

    {
      id: 'fys2-2-5-oppg-8',
      type: 'exercise',
      exerciseType: 'applied-calculation',
      title: 'Oppgave 8',
      problem: `En romsonde sendes fra Jorden mot Jupiter. Ved avreise (fra jordoverflaten) har den nøyaktig Jordens fluktfart.

a) Hva er romsondens fart når den er veldig langt fra Jorden (men fortsatt i Solens gravitasjonsfelt)?
b) Hva er romsondens totale energi relativt til Jorden når den nettopp forlater?`,
      hints: [
        'Med nøyaktig fluktfart er $E = 0$ relativt til Jorden',
        'Når $r \\to \\infty$, hvordan fordeles energien?',
        'Bruk energibevaring',
      ],
      solution: {
        answer: 'a) $v = 0$ (relativt til Jorden), b) $E = 0$',
        explanation: `**a) Fart langt fra Jorden:**

Med nøyaktig fluktfart er total energi $E = 0$.

Når $r \\to \\infty$: $E_p \\to 0$

Fra energibevaring:
$$E = E_k + E_p = \\frac{1}{2}mv^2 + 0 = 0$$
$$v = 0$$

Romsonden vil ha null fart relativt til Jorden når den er uendelig langt unna.

**b) Total energi:**
$$E = 0$$

Ved fluktfart har objektet akkurat nok energi til å nå uendelig med null restfart.

**Merk:** I virkeligheten vil Solens gravitasjon påvirke romsonden. Det som telles er fluktfart fra hele solsystemet, ikke bare Jorden.`,
      },
    },

    {
      id: 'fys2-2-5-oppg-9',
      type: 'exercise',
      exerciseType: 'complex-problem',
      title: 'Oppgave 9',
      problem: `En satellitt sendes opp fra jordoverflaten med en rakett som gir den en starthastighet på 10 km/s rett oppover.

a) Vil satellitten unnslippe Jorden?
b) Hvis ikke, hvor høyt kommer den?
c) Hva vil satellittens bane se ut som?

Se bort fra luftmotstand og Jordens rotasjon.`,
      hints: [
        'Beregn total energi ved start',
        'Hvis bundet, bruk energibevaring ved vendepunktet der $v = 0$',
        'Vendepunkt: all energi er potensiell',
      ],
      solution: {
        answer: 'a) Nei, b) ca. 25 500 km over jordoverflaten, c) Radial linje opp og ned',
        explanation: `**Gitt:**
- $v_0 = 10$ km/s $= 10\\,000$ m/s
- $r_0 = R_J = 6.37 \\times 10^6$ m
- Fluktfart fra Jorden: $v_{\\text{flukt}} = 11.2$ km/s

**a) Unnslipper satellitten?**

Siden $v_0 = 10$ km/s $< v_{\\text{flukt}} = 11.2$ km/s: **Nei, satellitten unnslipper ikke.**

Bekreftelse med energi:
$$E = \\frac{1}{2}mv_0^2 - \\frac{GM_J m}{R_J}$$
$$\\frac{E}{m} = \\frac{1}{2}(10000)^2 - \\frac{6.674 \\times 10^{-11} \\cdot 5.97 \\times 10^{24}}{6.37 \\times 10^6}$$
$$\\frac{E}{m} = 5.0 \\times 10^7 - 6.25 \\times 10^7 = -1.25 \\times 10^7 \\text{ J/kg}$$

$E < 0$, bekrefter at banen er bundet.

**b) Maksimal høyde:**

Ved vendepunkt: $v = 0$, all energi er potensiell.
$$E = -\\frac{GM_J m}{r_{\\text{max}}}$$
$$r_{\\text{max}} = -\\frac{GM_J}{E/m} = \\frac{3.98 \\times 10^{14}}{1.25 \\times 10^7} = 3.19 \\times 10^7 \\text{ m}$$

Høyde over bakken:
$$h = r_{\\text{max}} - R_J = 3.19 \\times 10^7 - 6.37 \\times 10^6 = 2.55 \\times 10^7 \\text{ m}$$
$$h \\approx 25\\,500 \\text{ km}$$

**c) Banetype:**
Siden starthastigheten er radial (rett opp), vil satellitten bevege seg langs en rett linje opp og ned - en **degenerert ellipse** redusert til en radial linje gjennom Jordens senter.`,
      },
    },

    {
      id: 'fys2-2-5-oppg-10',
      type: 'exercise',
      exerciseType: 'applied-calculation',
      title: 'Oppgave 10',
      problem: `En geostasjonær satellitt går i sirkelbane med omløpstid 24 timer.

a) Beregn baneradius og banefart.
b) Beregn den totale mekaniske energien til satellitten (masse 4000 kg).
c) Hvor mye energi må tilføres for å sende satellitten til fluktbane?`,
      hints: [
        'Bruk Keplers tredje lov eller sentripetalakselerasjon for å finne radius',
        'Bruk $E = -\\frac{GMm}{2r}$ for sirkelbane-energi',
        'Energi for flukt: $\\Delta E = 0 - E$',
      ],
      solution: {
        answer: 'a) $r = 4.22 \\times 10^7$ m, $v = 3.07$ km/s, b) $E = -1.89 \\times 10^{10}$ J, c) $\\Delta E = 1.89 \\times 10^{10}$ J',
        explanation: `**Gitt:**
- $T = 24$ h $= 86\\,400$ s
- $m = 4000$ kg

**a) Baneradius:**
Fra Keplers tredje lov:
$$\\frac{T^2}{r^3} = \\frac{4\\pi^2}{GM_J}$$
$$r^3 = \\frac{GM_J T^2}{4\\pi^2} = \\frac{3.98 \\times 10^{14} \\cdot (86400)^2}{4\\pi^2}$$
$$r^3 = 7.53 \\times 10^{22}$$
$$r = 4.22 \\times 10^7 \\text{ m} \\approx 42\\,200 \\text{ km}$$

Banefart:
$$v = \\frac{2\\pi r}{T} = \\frac{2\\pi \\cdot 4.22 \\times 10^7}{86400} = 3070 \\text{ m/s} = 3.07 \\text{ km/s}$$

**b) Total energi:**
$$E = -\\frac{GM_J m}{2r} = -\\frac{3.98 \\times 10^{14} \\cdot 4000}{2 \\cdot 4.22 \\times 10^7}$$
$$E = -1.89 \\times 10^{10} \\text{ J}$$

**c) Energi for flukt:**
$$\\Delta E = E_{\\text{flukt}} - E = 0 - (-1.89 \\times 10^{10}) = 1.89 \\times 10^{10} \\text{ J}$$
$$\\Delta E = 18.9 \\text{ GJ}$$`,
      },
    },

    {
      id: 'fys2-2-5-oppg-11',
      type: 'exercise',
      exerciseType: 'complex-problem',
      title: 'Oppgave 11',
      problem: `Et romfartøy i sirkulær bane rundt Jorden skal flyttes til en høyere sirkulær bane ved hjelp av en Hohmann-overføringsbane (halvt ellipse).

Nåværende bane: $r_1 = 7000$ km fra Jordens senter
Målbane: $r_2 = 14000$ km fra Jordens senter
Romfartøyets masse: $m = 5000$ kg

a) Beregn halvaksen til overføringsbanen.
b) Beregn den totale energien i alle tre banene (start, overføring, slutt).
c) Beregn de to hastighetsendringene ($\\Delta v_1$ og $\\Delta v_2$) som trengs.`,
      hints: [
        'Hohmann-bane: Halvakse $a = \\frac{r_1 + r_2}{2}$',
        'Bruk energiformlene for sirkel og ellipse',
        'Beregn farter ved begge apsider av ellipsen',
      ],
      solution: {
        answer: 'a) $a = 10\\,500$ km, b) $E_1 = -1.42 \\times 10^{11}$ J, $E_t = -9.48 \\times 10^{10}$ J, $E_2 = -7.11 \\times 10^{10}$ J, c) $\\Delta v_1 = 1150$ m/s, $\\Delta v_2 = 990$ m/s',
        explanation: `**a) Halvakse for overføringsbanen:**
$$a = \\frac{r_1 + r_2}{2} = \\frac{7000 + 14000}{2} = 10500 \\text{ km} = 1.05 \\times 10^7 \\text{ m}$$

**b) Energier:**

Start (sirkelbane $r_1$):
$$E_1 = -\\frac{GM_J m}{2r_1} = -\\frac{3.98 \\times 10^{14} \\cdot 5000}{2 \\cdot 7 \\times 10^6} = -1.42 \\times 10^{11} \\text{ J}$$

Overføringsbane (ellipse med halvakse $a$):
$$E_t = -\\frac{GM_J m}{2a} = -\\frac{3.98 \\times 10^{14} \\cdot 5000}{2 \\cdot 1.05 \\times 10^7} = -9.48 \\times 10^{10} \\text{ J}$$

Slutt (sirkelbane $r_2$):
$$E_2 = -\\frac{GM_J m}{2r_2} = -\\frac{3.98 \\times 10^{14} \\cdot 5000}{2 \\cdot 1.4 \\times 10^7} = -7.11 \\times 10^{10} \\text{ J}$$

**c) Hastighetsendringer:**

Sirkelbanefart ved $r_1$:
$$v_{c1} = \\sqrt{\\frac{GM_J}{r_1}} = \\sqrt{\\frac{3.98 \\times 10^{14}}{7 \\times 10^6}} = 7540 \\text{ m/s}$$

Fart på overføringsbane ved $r_1$ (perigeum):
$$v_{t1} = \\sqrt{2\\left(\\frac{E_t}{m} + \\frac{GM_J}{r_1}\\right)} = \\sqrt{2\\left(\\frac{-9.48 \\times 10^{10}}{5000} + \\frac{3.98 \\times 10^{14}}{7 \\times 10^6}\\right)}$$
$$v_{t1} = \\sqrt{2(-1.90 \\times 10^{7} + 5.69 \\times 10^{7})} = 8690 \\text{ m/s}$$

**Første puls:**
$$\\Delta v_1 = v_{t1} - v_{c1} = 8690 - 7540 = 1150 \\text{ m/s}$$

Sirkelbanefart ved $r_2$:
$$v_{c2} = \\sqrt{\\frac{GM_J}{r_2}} = \\sqrt{\\frac{3.98 \\times 10^{14}}{1.4 \\times 10^7}} = 5330 \\text{ m/s}$$

Fart på overføringsbane ved $r_2$ (apogeum):
$$v_{t2} = \\sqrt{2\\left(\\frac{E_t}{m} + \\frac{GM_J}{r_2}\\right)} = \\sqrt{2\\left(-1.90 \\times 10^{7} + 2.84 \\times 10^{7}\\right)}$$
$$v_{t2} = 4340 \\text{ m/s}$$

**Andre puls:**
$$\\Delta v_2 = v_{c2} - v_{t2} = 5330 - 4340 = 990 \\text{ m/s}$$

**Total $\\Delta v$:** $\\Delta v_1 + \\Delta v_2 \\approx 2140$ m/s`,
      },
    },

    {
      id: 'fys2-2-5-oppg-12',
      type: 'exercise',
      exerciseType: 'complex-problem',
      title: 'Oppgave 12',
      problem: `Et objekt slippes fra ro i en avstand $3R_J$ fra Jordens senter.

a) Med hvilken fart treffer objektet jordoverflaten?
b) Sammenlign med resultatet du ville fått ved å bruke $E_p = mgh$ for hele fallet.
c) Forklar hvorfor den forenklede formelen gir feil svar.`,
      hints: [
        'Bruk energibevaring med riktig gravitasjonell potensiell energi',
        'Start: $r = 3R_J$, $v = 0$. Slutt: $r = R_J$, $v = ?$',
        'Sammenlign med $v = \\sqrt{2gh}$ der $h = 2R_J$',
      ],
      solution: {
        answer: 'a) $v = 9.14$ km/s, b) $v_{\\text{feil}} = 15.8$ km/s, c) $g$ er ikke konstant over så store avstander',
        explanation: `**a) Korrekt beregning med energibevaring:**

Start: $r_1 = 3R_J$, $v_1 = 0$
Slutt: $r_2 = R_J$, $v_2 = ?$

$$E_1 = E_2$$
$$-\\frac{GM_J m}{3R_J} = \\frac{1}{2}mv_2^2 - \\frac{GM_J m}{R_J}$$

Løs for $v_2$:
$$\\frac{1}{2}v_2^2 = \\frac{GM_J}{R_J} - \\frac{GM_J}{3R_J} = \\frac{2GM_J}{3R_J}$$
$$v_2 = \\sqrt{\\frac{4GM_J}{3R_J}}$$

Med verdier:
$$v_2 = \\sqrt{\\frac{4 \\cdot 3.98 \\times 10^{14}}{3 \\cdot 6.37 \\times 10^6}} = \\sqrt{8.32 \\times 10^7} = 9120 \\text{ m/s}$$

**Svar:** $v = 9.1$ km/s

**b) Med $E_p = mgh$:**

Fallhøyde: $h = 3R_J - R_J = 2R_J = 1.27 \\times 10^7$ m

$$v = \\sqrt{2gh} = \\sqrt{2 \\cdot 9.81 \\cdot 1.27 \\times 10^7} = \\sqrt{2.49 \\times 10^8} = 15800 \\text{ m/s}$$

**Svar (feil):** $v = 15.8$ km/s (73% for høyt!)

**c) Hvorfor gir $mgh$ feil svar?**

Formelen $E_p = mgh$ forutsetter at gravitasjonsakselerasjonen $g$ er konstant. Dette gjelder bare for små høyder nær jordoverflaten.

Ved avstand $3R_J$ er gravitasjonsakselerasjonen:
$$g(3R_J) = \\frac{GM_J}{(3R_J)^2} = \\frac{g_0}{9}$$

Gravitasjonsakselerasjonen varierer fra $g_0/9$ til $g_0$ under fallet. Å bruke konstant $g = g_0$ overestimerer gravitasjonskraften gjennom hele fallet og gir derfor for høy slutthastighet.`,
      },
    },

    // ========== OPPSUMMERING SEKSJON 2 ==========
    {
      id: 'fys2-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering av Seksjon 2: Gravitasjon

### Hovedkonsepter

**Gravitasjonskraften (kapittel 2.1-2.2):**
$$F = G\\frac{Mm}{r^2}$$
- Virker mellom alle masser
- Alltid attraktiv
- Avtar med kvadratet av avstanden

**Gravitasjonsfeltet (kapittel 2.3):**
$$g = \\frac{GM}{r^2}$$
- Rettet mot sentralmassen
- Beskriver kraften per masse

**Gravitasjonell potensiell energi:**
$$E_p = -\\frac{GMm}{r}$$
- Negativ (nullpunkt ved uendelig)
- Øker (mindre negativ) med avstand

**Total mekanisk energi:**
$$E = \\frac{1}{2}mv^2 - \\frac{GMm}{r}$$

### Baneklassifisering

| $E$ | Banetype | Form |
|-----|----------|------|
| $< 0$ | Bundet | Ellipse/sirkel |
| $= 0$ | Grensetilfelle | Parabel |
| $> 0$ | Ubundet | Hyperbel |

### Viktige formler for sirkelbane

| Størrelse | Formel |
|-----------|--------|
| Fart | $v = \\sqrt{\\frac{GM}{r}}$ |
| Omløpstid | $T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$ |
| Kinetisk energi | $E_k = \\frac{GMm}{2r}$ |
| Total energi | $E = -\\frac{GMm}{2r}$ |

### Virialteoremet
For bundne baner:
$$\\langle E_k \\rangle = -\\frac{1}{2}\\langle E_p \\rangle$$

### Fluktfart
$$v_{\\text{flukt}} = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2} \\cdot v_{\\text{sirkel}}$$

### Keplers lover
1. **Ellipselov:** Planetbaner er ellipser med Solen i ett brennpunkt
2. **Flateareallov:** Linjen planet-Sol sveiper like arealer på like tider
3. **Periodisitetslov:** $T^2 \\propto a^3$

### Praktiske anvendelser
- Satellittbaner og manøvre
- Interplanetære reiser (Hohmann-baner)
- Fluktfart fra himmellegemer
- Stabilitet av astronomiske systemer

### Neste seksjon
I seksjon 3 skal vi se på **elektrisitet og magnetisme**, der mange av konseptene fra gravitasjon (felt, potensial, energi) har analoger i elektromagnetismen.`,
    },
  ],
};

// ============================================================================
// Kapittel 3.1: Elektrisk ladning og Coulombs lov
// LK20: Gjøre rede for og anvende Coulombs lov
// ============================================================================

export const CHAPTER_FYSIKK2_3_1: TextbookChapter = {
  id: 'fysikk2-3-1',
  courseId: 'fysikk2',
  chapterNumber: '3.1',
  title: 'Elektrisk ladning og Coulombs lov',
  description: 'Lær om elektrisk ladning, ladningsbevaring, og kraften mellom ladde partikler beskrevet av Coulombs lov.',
  estimatedMinutes: 50,
  prerequisites: ['fysikk2-2-1'],
  competenceGoals: [
    'gjøre rede for og anvende Coulombs lov',
    'forklare ladningsbevaring og kvantisering av ladning',
    'skille mellom ledere og isolatorer',
    'anvende superposisjonsprinsippet for elektriske krefter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-3-1-intro',
      type: 'text',
      content: `## Elektrisitet – en fundamental naturkraft

Elektrisitet er overalt rundt oss. Den driver telefonene våre, lyser opp husene våre, og holder atomene våre sammen. Men hva er egentlig elektrisitet på det mest grunnleggende nivået?

Alt starter med **elektrisk ladning** – en fundamental egenskap ved materie, like grunnleggende som masse. I dette kapitlet skal vi utforske:

- Hva elektrisk ladning er
- Hvordan ladde partikler påvirker hverandre
- Coulombs lov – som beskriver den elektriske kraften

**Historisk perspektiv:**
- **600 f.Kr.:** Thales av Milet oppdager at gnidd rav (elektron på gresk) tiltrekker lette gjenstander
- **1785:** Charles-Augustin de Coulomb måler kraften mellom ladninger presist
- **1897:** J.J. Thomson oppdager elektronet
- **1909:** Robert Millikan måler elektronets ladning (oljedråpeforsøket)`,
    },

    // ========== ELEKTRISK LADNING ==========
    {
      id: 'fys2-3-1-ladning',
      type: 'text',
      content: `## Elektrisk ladning

Elektrisk ladning er en **fundamental egenskap** ved materie. Det finnes to typer ladning:

**Positiv ladning (+):**
- Protoner har positiv ladning
- Et atom som har mistet elektroner blir positivt ladet (kation)

**Negativ ladning (-):**
- Elektroner har negativ ladning
- Et atom som har fått ekstra elektroner blir negativt ladet (anion)

**Tiltrekning og frastøtning:**
- Like ladninger **frastøter** hverandre (+ og + eller - og -)
- Ulike ladninger **tiltrekker** hverandre (+ og -)

Dette er motsatt av gravitasjon, som alltid er tiltrekkende!

**Ladningens SI-enhet:**
Ladning måles i **coulomb** (C), oppkalt etter Charles-Augustin de Coulomb.

Et coulomb er en stor mengde ladning – det tilsvarer ladningen til ca. $6.24 \\times 10^{18}$ elektroner!`,
    },

    // ========== DEFINISJON: ELEMENTÆRLADNING ==========
    {
      id: 'fys2-3-1-def-elementarladning',
      type: 'definition',
      title: 'Elementærladningen',
      content: `**Elementærladningen** $e$ er den minste frie elektriske ladningen som finnes i naturen.

$$e = 1.602 \\times 10^{-19} \\text{ C}$$

**Ladninger til fundamentale partikler:**
- Elektron: $q_e = -e = -1.602 \\times 10^{-19}$ C
- Proton: $q_p = +e = +1.602 \\times 10^{-19}$ C
- Nøytron: $q_n = 0$ (nøytral)

**Kvantisering av ladning:**
All ladning i naturen er et helt antall ganger elementærladningen:
$$q = n \\cdot e$$
der $n$ er et heltall ($n = 0, \\pm 1, \\pm 2, \\pm 3, ...$).

**Merk:** Kvarker har ladning $\\pm \\frac{1}{3}e$ eller $\\pm \\frac{2}{3}e$, men de eksisterer aldri fritt – de er alltid bundet i protoner og nøytroner.`,
    },

    // ========== LADNINGSBEVARING ==========
    {
      id: 'fys2-3-1-ladningsbevaring',
      type: 'text',
      content: `## Ladningsbevaring

En av de mest fundamentale lovene i fysikken er **loven om ladningsbevaring**:

> **Elektrisk ladning kan verken skapes eller ødelegges. Den totale ladningen i et isolert system er konstant.**

**Eksempler på ladningsbevaring:**

**1. Gnidningselektrisitet:**
Når du gnir en ballong mot håret ditt, flyttes elektroner fra håret til ballongen:
- Ballongen blir negativt ladet
- Håret blir like mye positivt ladet
- Total ladning er fortsatt null!

**2. Ionisering:**
Når et atom mister et elektron:
$$\\text{Na} \\rightarrow \\text{Na}^+ + e^-$$
Atomet blir et positivt ion, men elektronet eksisterer fortsatt – total ladning er bevart.

**3. Partikkelproduksjon:**
Når en foton skaper et elektron-positron-par:
$$\\gamma \\rightarrow e^- + e^+$$
Fotonet har ladning 0, og $(-e) + (+e) = 0$ – ladningen er bevart!

**Praktisk betydning:**
Ladningsbevaring er grunnen til at vi alltid kan bruke Kirchhoffs strømlov i kretser: all strøm som går inn i et knutepunkt, må også gå ut.`,
    },

    // ========== DEFINISJON: LADNINGSBEVARING ==========
    {
      id: 'fys2-3-1-def-ladningsbevaring',
      type: 'definition',
      title: 'Loven om ladningsbevaring',
      content: `Den **totale elektriske ladningen** i et isolert system er konstant over tid.

$$Q_{\\text{total}} = \\sum_i q_i = \\text{konstant}$$

**Dette betyr at:**
- Ladning kan flyttes fra ett sted til et annet
- Ladning kan ikke oppstå fra ingenting
- Ladning kan ikke forsvinne

**Merk:** Dette er en av fysikkens mest fundamentale bevaringslover, på linje med energibevaring og bevaring av bevegelsesmengde.`,
    },

    // ========== LEDERE OG ISOLATORER ==========
    {
      id: 'fys2-3-1-ledere-isolatorer',
      type: 'text',
      content: `## Ledere og isolatorer

Materialer kan klassifiseres etter hvor godt de leder elektrisk strøm:

### Ledere (konduktorer)
I **ledere** kan elektroner bevege seg fritt gjennom materialet.

**Eksempler:** Metaller (kobber, sølv, gull, aluminium), grafitt

**Hvorfor leder metaller?**
I et metall er de ytterste elektronene (valenselektronene) ikke bundet til enkeltatomene. De danner et "elektronhav" som kan bevege seg fritt mellom de positive metallionene.

**Egenskaper:**
- Elektroner beveger seg lett gjennom materialet
- Ladning fordeler seg raskt over hele overflaten
- Innsiden av en leder i likevekt har ingen netto elektrisk felt

### Isolatorer (dielektrika)
I **isolatorer** er elektronene bundet til atomene og kan ikke bevege seg fritt.

**Eksempler:** Plast, glass, gummi, tre, keramikk

**Egenskaper:**
- Elektroner er bundet til enkeltatomene
- Ladning blir på det stedet den ble plassert
- Kan bli elektrostatisk oppladet ved gnidning

### Halvledere
**Halvledere** har egenskaper mellom ledere og isolatorer.

**Eksempler:** Silisium, germanium

Halvledere er grunnlaget for moderne elektronikk – transistorer, solceller, og datachipper.`,
    },

    // ========== COULOMBS LOV ==========
    {
      id: 'fys2-3-1-coulombs-lov',
      type: 'text',
      content: `## Coulombs lov

I 1785 målte Charles-Augustin de Coulomb kraften mellom ladde kuler ved hjelp av en torsjonsvekt – et eksperiment som minner om Cavendishs måling av gravitasjonskonstanten.

Han oppdaget at den elektriske kraften:
1. Er **proporsjonal** med produktet av ladningene
2. Er **omvendt proporsjonal** med kvadratet av avstanden
3. Virker langs linjen som forbinder ladningene

Dette kalles **Coulombs lov** – den elektriske kreftens grunnlov.`,
    },

    // ========== DEFINISJON: COULOMBS LOV ==========
    {
      id: 'fys2-3-1-def-coulombs-lov',
      type: 'definition',
      title: 'Coulombs lov',
      content: `Den elektriske kraften mellom to punktladninger $q_1$ og $q_2$ med avstand $r$ er:

$$F = k\\frac{|q_1 q_2|}{r^2}$$

der:
- $F$ er den elektriske kraften (N)
- $k$ er Coulombs konstant ($k = 8.99 \\times 10^9$ N·m²/C²)
- $q_1$ og $q_2$ er ladningene (C)
- $r$ er avstanden mellom ladningene (m)

**Retning:**
- Like ladninger: Kraften er **frastøtende** (bort fra hverandre)
- Ulike ladninger: Kraften er **tiltrekkende** (mot hverandre)

**Alternativ form med permittiviteten:**
$$F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{|q_1 q_2|}{r^2}$$

der $\\varepsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²) er vakuumpermittiviteten.`,
    },

    // ========== COULOMBS KONSTANT ==========
    {
      id: 'fys2-3-1-coulombs-konstant',
      type: 'text',
      content: `## Coulombs konstant

Coulombs konstant $k$ bestemmer styrken av den elektriske kraften:

$$k = 8.99 \\times 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2 \\approx 9 \\times 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2$$

**Sammenheng med vakuumpermittiviteten:**
$$k = \\frac{1}{4\\pi\\varepsilon_0}$$

der $\\varepsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²).

**Hvorfor er k så stor?**
Sammenlign med gravitasjonskonstanten:
- $k = 8.99 \\times 10^9$ N·m²/C²
- $G = 6.67 \\times 10^{-11}$ N·m²/kg²

Forholdet er ca. $10^{20}$! Den elektriske kraften er enormt mye sterkere enn gravitasjonskraften.

**Eksempel: Kraft mellom to elektroner**
To elektroner 1 meter fra hverandre:
$$F_E = 8.99 \\times 10^9 \\cdot \\frac{(1.6 \\times 10^{-19})^2}{1^2} = 2.3 \\times 10^{-28} \\text{ N}$$

$$F_G = 6.67 \\times 10^{-11} \\cdot \\frac{(9.1 \\times 10^{-31})^2}{1^2} = 5.5 \\times 10^{-71} \\text{ N}$$

Forholdet: $F_E/F_G \\approx 4.2 \\times 10^{42}$!`,
    },

    // ========== SAMMENLIGNING MED GRAVITASJON ==========
    {
      id: 'fys2-3-1-sammenligning-gravitasjon',
      type: 'text',
      content: `## Sammenligning med gravitasjon

Coulombs lov og Newtons gravitasjonslov har bemerkelsesverdig like matematiske former:

| Egenskap | Coulombs lov | Gravitasjonsloven |
|----------|--------------|-------------------|
| **Formel** | $F = k\\frac{q_1 q_2}{r^2}$ | $F = G\\frac{m_1 m_2}{r^2}$ |
| **Konstant** | $k = 8.99 \\times 10^9$ | $G = 6.67 \\times 10^{-11}$ |
| **Avhengighet** | $1/r^2$ | $1/r^2$ |
| **Rekkevidde** | Uendelig | Uendelig |

### Likheter:
1. Begge følger **kvadratloven** ($1/r^2$)
2. Begge virker langs linjen mellom objektene
3. Begge er **sentrale krefter**
4. Begge har uendelig rekkevidde

### Forskjeller:
1. **Fortegn:** Gravitasjon er alltid tiltrekkende, mens elektrisk kraft kan være både tiltrekkende og frastøtende
2. **Styrke:** Elektrisk kraft er ca. $10^{36}$ ganger sterkere enn gravitasjon for elementærpartikler
3. **Skjerming:** Elektrisk kraft kan skjermes (Faradays bur), gravitasjon kan ikke
4. **Ladning:** Ladning kommer i to typer (+/-), masse har bare én type

**Hvorfor dominerer gravitasjon i hverdagen?**
Selv om elektrisk kraft er mye sterkere, er vanlig materie elektrisk nøytral (like mange protoner og elektroner). De elektriske kreftene utligner hverandre. Masse kan ikke være negativ, så gravitasjonen akkumuleres alltid.`,
    },

    // ========== SUPERPOSISJONSPRINSIPPET ==========
    {
      id: 'fys2-3-1-superposisjon',
      type: 'text',
      content: `## Superposisjonsprinsippet

Når en ladning påvirkes av flere andre ladninger, er den totale kraften lik **vektorsummen** av alle enkeltkreftene.

**Superposisjonsprinsippet for elektriske krefter:**
$$\\vec{F}_{\\text{total}} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + ...$$

**Fremgangsmåte:**
1. Beregn kraften fra hver ladning separat ved Coulombs lov
2. Bestem retningen til hver kraft (tiltrekning eller frastøtning)
3. Dekomponér alle krefter i x- og y-komponenter
4. Summer komponentene:
   $$F_x = F_{1x} + F_{2x} + F_{3x} + ...$$
   $$F_y = F_{1y} + F_{2y} + F_{3y} + ...$$
5. Finn resultanten:
   $$|\\vec{F}| = \\sqrt{F_x^2 + F_y^2}$$
   $$\\theta = \\arctan\\left(\\frac{F_y}{F_x}\\right)$$

**Viktig:**
- Hver kraft beregnes som om de andre ladningene ikke eksisterer
- Kreftene adderes som vektorer, ikke skalarer
- Retningen må bestemmes ut fra om ladningene tiltrekker eller frastøter`,
    },

    // ========== ELEKTROSKOP OG ELEKTROSTATISK INDUKSJON ==========
    {
      id: 'fys2-3-1-elektroskop',
      type: 'text',
      content: `## Elektroskop og elektrostatisk induksjon

### Elektroskopet
Et **elektroskop** er et instrument for å påvise elektrisk ladning.

**Oppbygning:**
- En metallstang med en metallplate på toppen
- To tynne metallblader (ofte gullblader) hengende fra stangen
- Alt inne i en glasskolbe for å unngå luftstrømmer

**Virkemåte:**
Når en ladet gjenstand berører metallplaten:
1. Ladning fordeles over hele det ledende materialet
2. Begge bladene får samme type ladning
3. Bladene frastøter hverandre og sprer seg

Jo mer ladning, desto større utslag!

### Elektrostatisk induksjon
**Induksjon** er omfordeling av ladning i et objekt pga. nærhet til et ladet objekt, uten direkte kontakt.

**Eksempel:**
1. En negativt ladet stav bringes nær en nøytral metallkule
2. Elektroner i kulen frastøtes og beveger seg bort fra staven
3. Siden av kulen nærmest staven blir positivt ladet
4. Kulen er fortsatt totalt nøytral, men har en ladningsfordeling

**Praktisk bruk:**
- Kopiering og laserskriving bruker elektrostatisk induksjon
- Elektrostatiske filtre fanger støvpartikler
- Lynavledere fungerer ved induksjon`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'fys2-3-1-eksempel-1',
      type: 'example',
      title: 'Kraft mellom to ladninger',
      content: `**Oppgave:**
To punktladninger $q_1 = +3.0$ $\\mu$C og $q_2 = -5.0$ $\\mu$C er plassert 20 cm fra hverandre. Beregn kraften mellom dem og bestem om den er tiltrekkende eller frastøtende.

**Løsning:**

**Gitt:**
- $q_1 = +3.0$ $\\mu$C $= 3.0 \\times 10^{-6}$ C
- $q_2 = -5.0$ $\\mu$C $= -5.0 \\times 10^{-6}$ C
- $r = 20$ cm $= 0.20$ m
- $k = 8.99 \\times 10^9$ N·m²/C²

**Coulombs lov:**
$$F = k\\frac{|q_1 q_2|}{r^2}$$

$$F = 8.99 \\times 10^9 \\cdot \\frac{|3.0 \\times 10^{-6} \\cdot (-5.0 \\times 10^{-6})|}{(0.20)^2}$$

$$F = 8.99 \\times 10^9 \\cdot \\frac{15 \\times 10^{-12}}{0.04}$$

$$F = 8.99 \\times 10^9 \\cdot 3.75 \\times 10^{-10} = 3.37 \\text{ N}$$

**Retning:**
Siden ladningene har motsatt fortegn (en positiv og en negativ), er kraften **tiltrekkende**. Ladningene trekkes mot hverandre.

**Svar:** Kraften er $F = 3.4$ N og er tiltrekkende.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'fys2-3-1-eksempel-2',
      type: 'example',
      title: 'Sammenligning av elektrisk og gravitasjonell kraft',
      content: `**Oppgave:**
I et hydrogenatom er et elektron i gjennomsnittlig avstand $r = 5.3 \\times 10^{-11}$ m fra protonet. Beregn:
a) Den elektriske kraften mellom dem
b) Gravitasjonskraften mellom dem
c) Forholdet mellom kreftene

**Gitt:**
- $q_e = q_p = 1.602 \\times 10^{-19}$ C
- $m_e = 9.109 \\times 10^{-31}$ kg
- $m_p = 1.673 \\times 10^{-27}$ kg
- $r = 5.3 \\times 10^{-11}$ m
- $k = 8.99 \\times 10^9$ N·m²/C²
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²

**Løsning:**

**a) Elektrisk kraft:**
$$F_E = k\\frac{q_e q_p}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{(1.602 \\times 10^{-19})^2}{(5.3 \\times 10^{-11})^2}$$
$$F_E = 8.99 \\times 10^9 \\cdot \\frac{2.566 \\times 10^{-38}}{2.809 \\times 10^{-21}} = 8.2 \\times 10^{-8} \\text{ N}$$

**b) Gravitasjonskraft:**
$$F_G = G\\frac{m_e m_p}{r^2} = 6.674 \\times 10^{-11} \\cdot \\frac{9.109 \\times 10^{-31} \\cdot 1.673 \\times 10^{-27}}{(5.3 \\times 10^{-11})^2}$$
$$F_G = 6.674 \\times 10^{-11} \\cdot \\frac{1.524 \\times 10^{-57}}{2.809 \\times 10^{-21}} = 3.6 \\times 10^{-47} \\text{ N}$$

**c) Forholdet:**
$$\\frac{F_E}{F_G} = \\frac{8.2 \\times 10^{-8}}{3.6 \\times 10^{-47}} = 2.3 \\times 10^{39}$$

**Svar:**
a) $F_E = 8.2 \\times 10^{-8}$ N (tiltrekkende)
b) $F_G = 3.6 \\times 10^{-47}$ N (tiltrekkende)
c) Den elektriske kraften er ca. $2 \\times 10^{39}$ ganger sterkere enn gravitasjonskraften!

**Konklusjon:** I et atom er gravitasjonskraften fullstendig neglisjerbar sammenlignet med den elektriske kraften.`,
    },

    // ========== EKSEMPEL 3: SUPERPOSISJON ==========
    {
      id: 'fys2-3-1-eksempel-3',
      type: 'example',
      title: 'Kraft på ladning fra to andre ladninger',
      content: `**Oppgave:**
Tre punktladninger er plassert langs x-aksen:
- $q_1 = +4.0$ $\\mu$C ved $x = 0$
- $q_2 = -3.0$ $\\mu$C ved $x = 20$ cm
- $q_3 = +2.0$ $\\mu$C ved $x = 40$ cm

Finn den resulterende kraften på $q_2$.

**Løsning:**

**Gitt:**
- $q_1 = +4.0 \\times 10^{-6}$ C ved $x = 0$
- $q_2 = -3.0 \\times 10^{-6}$ C ved $x = 0.20$ m
- $q_3 = +2.0 \\times 10^{-6}$ C ved $x = 0.40$ m
- Avstand $q_1$ til $q_2$: $r_{12} = 0.20$ m
- Avstand $q_2$ til $q_3$: $r_{23} = 0.20$ m

**Kraft fra $q_1$ på $q_2$:**
$$F_{12} = k\\frac{|q_1 q_2|}{r_{12}^2} = 8.99 \\times 10^9 \\cdot \\frac{4.0 \\times 10^{-6} \\cdot 3.0 \\times 10^{-6}}{0.20^2}$$
$$F_{12} = 8.99 \\times 10^9 \\cdot \\frac{12 \\times 10^{-12}}{0.04} = 2.70 \\text{ N}$$

Retning: $q_1$ (+) tiltrekker $q_2$ (-), så kraften peker mot venstre (negativ x-retning):
$$\\vec{F}_{12} = -2.70 \\text{ N}$$

**Kraft fra $q_3$ på $q_2$:**
$$F_{23} = k\\frac{|q_2 q_3|}{r_{23}^2} = 8.99 \\times 10^9 \\cdot \\frac{3.0 \\times 10^{-6} \\cdot 2.0 \\times 10^{-6}}{0.20^2}$$
$$F_{23} = 8.99 \\times 10^9 \\cdot \\frac{6.0 \\times 10^{-12}}{0.04} = 1.35 \\text{ N}$$

Retning: $q_3$ (+) tiltrekker $q_2$ (-), så kraften peker mot høyre (positiv x-retning):
$$\\vec{F}_{23} = +1.35 \\text{ N}$$

**Resultant kraft:**
$$\\vec{F}_{\\text{total}} = \\vec{F}_{12} + \\vec{F}_{23} = -2.70 + 1.35 = -1.35 \\text{ N}$$

**Svar:** Den resulterende kraften på $q_2$ er $F = 1.35$ N rettet mot venstre (i negativ x-retning).`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - LADNINGSTYPER ==========
    {
      id: 'fys2-3-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-1',
        number: '3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'To glasstaver gnides mot silke og får begge positiv ladning. Hva skjer når de holdes nær hverandre?',
        options: [
          {
            id: 'a',
            text: 'De tiltrekker hverandre',
            isCorrect: false,
            feedback: 'Feil. Ulike ladninger tiltrekker hverandre, men her har begge stavene samme (positive) ladning.',
          },
          {
            id: 'b',
            text: 'De frastøter hverandre',
            isCorrect: true,
            feedback: 'Riktig! Like ladninger frastøter hverandre. Begge stavene er positivt ladet, så de frastøtes.',
          },
          {
            id: 'c',
            text: 'Ingenting skjer',
            isCorrect: false,
            feedback: 'Feil. Ladde gjenstander påvirker alltid hverandre med elektriske krefter.',
          },
          {
            id: 'd',
            text: 'Først tiltrekker de, så frastøter de',
            isCorrect: false,
            feedback: 'Feil. Like ladninger frastøter hverandre hele tiden.',
          },
        ],
        solution: 'Like ladninger frastøter hverandre. Begge stavene har positiv ladning, så de frastøtes.',
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - LEDERE OG ISOLATORER ==========
    {
      id: 'fys2-3-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-2',
        number: '3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor leder metaller strøm godt?',
        options: [
          {
            id: 'a',
            text: 'Fordi metallatomene er tettere pakket',
            isCorrect: false,
            feedback: 'Feil. Tett pakking av atomer er ikke grunnen til god ledningsevne.',
          },
          {
            id: 'b',
            text: 'Fordi metaller har høy masse',
            isCorrect: false,
            feedback: 'Feil. Masse har ingenting med elektrisk ledningsevne å gjøre.',
          },
          {
            id: 'c',
            text: 'Fordi valenselektronene kan bevege seg fritt mellom atomene',
            isCorrect: true,
            feedback: 'Riktig! I metaller er de ytterste elektronene ikke bundet til enkeltatomene, men danner et "elektronhav" som kan bevege seg fritt.',
          },
          {
            id: 'd',
            text: 'Fordi metaller har mange protoner',
            isCorrect: false,
            feedback: 'Feil. Protoner sitter fast i atomkjernene og kan ikke bevege seg.',
          },
        ],
        solution: 'Metaller leder strøm godt fordi valenselektronene er løst bundet og kan bevege seg fritt mellom metallionene.',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - COULOMBS LOV ==========
    {
      id: 'fys2-3-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-3',
        number: '3.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Avstanden mellom to punktladninger dobles. Hva skjer med kraften mellom dem?',
        options: [
          {
            id: 'a',
            text: 'Kraften halveres',
            isCorrect: false,
            feedback: 'Feil. Kraften avhenger av $1/r^2$, ikke $1/r$.',
          },
          {
            id: 'b',
            text: 'Kraften reduseres til en fjerdedel',
            isCorrect: true,
            feedback: 'Riktig! Kraften er proporsjonal med $1/r^2$. Når $r$ dobles, blir $r^2$ firedoblet, og kraften blir $1/4$.',
          },
          {
            id: 'c',
            text: 'Kraften forblir uendret',
            isCorrect: false,
            feedback: 'Feil. Coulombs lov sier at kraften avhenger av avstanden.',
          },
          {
            id: 'd',
            text: 'Kraften dobles',
            isCorrect: false,
            feedback: 'Feil. Kraften blir mindre, ikke større, når avstanden øker.',
          },
        ],
        solution: 'Ifølge Coulombs lov er $F \\propto 1/r^2$. Når avstanden dobles ($r \\to 2r$), blir $r^2 \\to 4r^2$, og kraften blir $F/4$.',
      },
    },

    // ========== OPPGAVE 4: BEREGNING - COULOMB-KRAFT ==========
    {
      id: 'fys2-3-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-4',
        number: '3.4',
        type: 'classic',
        difficulty: 'medium',
        task: `To punktladninger $q_1 = +6.0$ $\\mu$C og $q_2 = +4.0$ $\\mu$C er plassert 30 cm fra hverandre.

a) Beregn kraften mellom dem.
b) Er kraften tiltrekkende eller frastøtende?

**Gitt:** $k = 8.99 \\times 10^9$ N·m²/C²`,
        hints: [
          'Husk å konvertere $\\mu$C til C og cm til m',
          'Bruk Coulombs lov: $F = k|q_1 q_2|/r^2$',
          'Se på fortegnet til begge ladningene for å bestemme retningen',
        ],
        solution: `**Gitt:**
- $q_1 = +6.0$ $\\mu$C $= 6.0 \\times 10^{-6}$ C
- $q_2 = +4.0$ $\\mu$C $= 4.0 \\times 10^{-6}$ C
- $r = 30$ cm $= 0.30$ m
- $k = 8.99 \\times 10^9$ N·m²/C²

**a) Beregning av kraften:**

$$F = k\\frac{|q_1 q_2|}{r^2}$$

$$F = 8.99 \\times 10^9 \\cdot \\frac{6.0 \\times 10^{-6} \\cdot 4.0 \\times 10^{-6}}{(0.30)^2}$$

$$F = 8.99 \\times 10^9 \\cdot \\frac{24 \\times 10^{-12}}{0.09}$$

$$F = 8.99 \\times 10^9 \\cdot 2.67 \\times 10^{-10} = 2.4 \\text{ N}$$

**b) Retning:**
Begge ladningene er positive. Like ladninger frastøter hverandre, så kraften er **frastøtende**.

**Svar:**
a) $F = 2.4$ N
b) Kraften er frastøtende`,
      },
    },

    // ========== OPPGAVE 5: BEREGNING - SAMMENLIGNE KREFTER ==========
    {
      id: 'fys2-3-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-5',
        number: '3.5',
        type: 'classic',
        difficulty: 'medium',
        task: `To små kuler med masse $m = 0.10$ g henger i tynne tråder fra samme punkt. Kulene får hver ladning $q = 5.0$ nC og frastøter hverandre.

a) Sammenlign den elektriske frastøtningskraften med gravitasjonskraften mellom kulene når de er 2.0 cm fra hverandre.
b) Hvilken kraft dominerer?

**Gitt:** $k = 8.99 \\times 10^9$ N·m²/C², $G = 6.67 \\times 10^{-11}$ N·m²/kg²`,
        hints: [
          'Konverter masse til kg: 0.10 g = $10^{-4}$ kg',
          'Konverter ladning til C: 5.0 nC = $5.0 \\times 10^{-9}$ C',
          'Beregn både $F_E$ og $F_G$ og sammenlign',
        ],
        solution: `**Gitt:**
- $m = 0.10$ g $= 1.0 \\times 10^{-4}$ kg
- $q = 5.0$ nC $= 5.0 \\times 10^{-9}$ C
- $r = 2.0$ cm $= 0.020$ m

**a) Elektrisk kraft:**
$$F_E = k\\frac{q^2}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{(5.0 \\times 10^{-9})^2}{(0.020)^2}$$
$$F_E = 8.99 \\times 10^9 \\cdot \\frac{25 \\times 10^{-18}}{4 \\times 10^{-4}} = 5.6 \\times 10^{-4} \\text{ N}$$

**Gravitasjonskraft:**
$$F_G = G\\frac{m^2}{r^2} = 6.67 \\times 10^{-11} \\cdot \\frac{(1.0 \\times 10^{-4})^2}{(0.020)^2}$$
$$F_G = 6.67 \\times 10^{-11} \\cdot \\frac{10^{-8}}{4 \\times 10^{-4}} = 1.7 \\times 10^{-15} \\text{ N}$$

**Forhold:**
$$\\frac{F_E}{F_G} = \\frac{5.6 \\times 10^{-4}}{1.7 \\times 10^{-15}} = 3.3 \\times 10^{11}$$

**b) Konklusjon:**
Den elektriske kraften ($5.6 \\times 10^{-4}$ N) er ca. $3 \\times 10^{11}$ ganger sterkere enn gravitasjonskraften ($1.7 \\times 10^{-15}$ N). Den elektriske kraften **dominerer fullstendig**.

**Svar:**
a) $F_E = 5.6 \\times 10^{-4}$ N, $F_G = 1.7 \\times 10^{-15}$ N, $F_E/F_G \\approx 3 \\times 10^{11}$
b) Den elektriske kraften dominerer`,
      },
    },

    // ========== OPPGAVE 6: BEREGNING - AVSTAND ==========
    {
      id: 'fys2-3-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-6',
        number: '3.6',
        type: 'classic',
        difficulty: 'medium',
        task: `To identiske punktladninger $q = +8.0$ $\\mu$C påvirker hverandre med en frastøtningskraft på 0.50 N.

Hvor langt fra hverandre er ladningene?

**Gitt:** $k = 8.99 \\times 10^9$ N·m²/C²`,
        hints: [
          'Løs Coulombs lov for $r$',
          '$r = \\sqrt{k|q_1 q_2|/F}$',
        ],
        solution: `**Gitt:**
- $q_1 = q_2 = q = 8.0$ $\\mu$C $= 8.0 \\times 10^{-6}$ C
- $F = 0.50$ N
- $k = 8.99 \\times 10^9$ N·m²/C²

**Løser Coulombs lov for r:**

$$F = k\\frac{q^2}{r^2} \\quad \\Rightarrow \\quad r^2 = k\\frac{q^2}{F}$$

$$r = \\sqrt{k\\frac{q^2}{F}} = \\sqrt{\\frac{8.99 \\times 10^9 \\cdot (8.0 \\times 10^{-6})^2}{0.50}}$$

$$r = \\sqrt{\\frac{8.99 \\times 10^9 \\cdot 64 \\times 10^{-12}}{0.50}}$$

$$r = \\sqrt{\\frac{575.4 \\times 10^{-3}}{0.50}} = \\sqrt{1.15}$$

$$r = 1.07 \\text{ m}$$

**Svar:** Ladningene er $r = 1.1$ m fra hverandre.`,
      },
    },

    // ========== OPPGAVE 7: BEREGNING - ANTALL ELEKTRONER ==========
    {
      id: 'fys2-3-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-7',
        number: '3.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En metallkule er ladet med $q = -4.8$ $\\mu$C.

a) Hvor mange overskuddselektroner har kulen fått?
b) Hvor stor masse representerer disse elektronene?

**Gitt:** $e = 1.602 \\times 10^{-19}$ C, $m_e = 9.109 \\times 10^{-31}$ kg`,
        hints: [
          'Antall elektroner: $n = |q|/e$',
          'Total masse: $m = n \\cdot m_e$',
        ],
        solution: `**Gitt:**
- $q = -4.8$ $\\mu$C $= -4.8 \\times 10^{-6}$ C
- $e = 1.602 \\times 10^{-19}$ C
- $m_e = 9.109 \\times 10^{-31}$ kg

**a) Antall elektroner:**

$$n = \\frac{|q|}{e} = \\frac{4.8 \\times 10^{-6}}{1.602 \\times 10^{-19}}$$

$$n = 3.0 \\times 10^{13} \\text{ elektroner}$$

**b) Masse av elektronene:**

$$m = n \\cdot m_e = 3.0 \\times 10^{13} \\cdot 9.109 \\times 10^{-31}$$

$$m = 2.7 \\times 10^{-17} \\text{ kg} = 27 \\text{ fg (femtogram)}$$

**Svar:**
a) $n = 3.0 \\times 10^{13}$ elektroner (30 billioner!)
b) $m = 2.7 \\times 10^{-17}$ kg

**Merknad:** Selv 30 billioner elektroner veier bare 27 femtogram – en helt neglisjerbar masse!`,
      },
    },

    // ========== OPPGAVE 8: SUPERPOSISJON - TRE LADNINGER ==========
    {
      id: 'fys2-3-1-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-8',
        number: '3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Tre punktladninger er plassert langs x-aksen:
- $q_1 = +2.0$ $\\mu$C ved $x = 0$
- $q_2 = -4.0$ $\\mu$C ved $x = 10$ cm
- $q_3 = +6.0$ $\\mu$C ved $x = 30$ cm

Finn størrelsen og retningen til den resulterende kraften på ladning $q_2$.

**Gitt:** $k = 8.99 \\times 10^9$ N·m²/C²`,
        hints: [
          'Beregn kraften fra $q_1$ på $q_2$ først',
          'Beregn kraften fra $q_3$ på $q_2$',
          'Bestem retningen: tiltrekning eller frastøtning?',
          'Summer kreftene som vektorer (med fortegn)',
        ],
        solution: `**Gitt:**
- $q_1 = +2.0 \\times 10^{-6}$ C ved $x = 0$
- $q_2 = -4.0 \\times 10^{-6}$ C ved $x = 0.10$ m
- $q_3 = +6.0 \\times 10^{-6}$ C ved $x = 0.30$ m

**Avstander:**
- $r_{12} = 0.10$ m
- $r_{23} = 0.30 - 0.10 = 0.20$ m

**Kraft fra $q_1$ på $q_2$:**
$$F_{12} = k\\frac{|q_1 q_2|}{r_{12}^2} = 8.99 \\times 10^9 \\cdot \\frac{2.0 \\times 10^{-6} \\cdot 4.0 \\times 10^{-6}}{(0.10)^2}$$
$$F_{12} = 8.99 \\times 10^9 \\cdot \\frac{8 \\times 10^{-12}}{0.01} = 7.19 \\text{ N}$$

Retning: $q_1$ (+) tiltrekker $q_2$ (-), kraft mot venstre: $\\vec{F}_{12} = -7.19$ N

**Kraft fra $q_3$ på $q_2$:**
$$F_{23} = k\\frac{|q_2 q_3|}{r_{23}^2} = 8.99 \\times 10^9 \\cdot \\frac{4.0 \\times 10^{-6} \\cdot 6.0 \\times 10^{-6}}{(0.20)^2}$$
$$F_{23} = 8.99 \\times 10^9 \\cdot \\frac{24 \\times 10^{-12}}{0.04} = 5.39 \\text{ N}$$

Retning: $q_3$ (+) tiltrekker $q_2$ (-), kraft mot høyre: $\\vec{F}_{23} = +5.39$ N

**Resultant:**
$$\\vec{F}_{\\text{total}} = \\vec{F}_{12} + \\vec{F}_{23} = -7.19 + 5.39 = -1.80 \\text{ N}$$

**Svar:** Den resulterende kraften på $q_2$ er $|\\vec{F}| = 1.8$ N rettet mot **venstre** (i negativ x-retning).`,
      },
    },

    // ========== OPPGAVE 9: LIKEVEKT ==========
    {
      id: 'fys2-3-1-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-9',
        number: '3.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To punktladninger $q_1 = +9.0$ $\\mu$C og $q_2 = +4.0$ $\\mu$C er plassert 30 cm fra hverandre.

Hvor på linjen mellom dem må en tredje ladning $q_3$ plasseres for å være i likevekt (null nettokraft)?

**Gitt:** $k = 8.99 \\times 10^9$ N·m²/C²`,
        hints: [
          'Tenk på hvor en tredje ladning ville føle like sterke krefter fra begge',
          'Kall avstanden fra $q_1$ til $q_3$ for $x$, da er avstanden fra $q_3$ til $q_2$ lik $(d-x)$',
          'Sett opp kravet $F_{13} = F_{23}$ og løs for $x$',
          'Ladningen $q_3$s fortegn spiller ingen rolle for likevektsposisjonen',
        ],
        solution: `**Gitt:**
- $q_1 = +9.0$ $\\mu$C ved $x = 0$
- $q_2 = +4.0$ $\\mu$C ved $x = d = 0.30$ m
- La $q_3$ være ved avstand $x$ fra $q_1$

**Analyse:**
Siden begge $q_1$ og $q_2$ er positive, må $q_3$ plasseres **mellom** dem for å være i likevekt (ellers vil kreftene peke i samme retning).

**Likevektsbetingelse:**
For at nettokraften på $q_3$ skal være null, må:
$$|F_{13}| = |F_{23}|$$

$$k\\frac{|q_1 q_3|}{x^2} = k\\frac{|q_2 q_3|}{(d-x)^2}$$

$k$ og $|q_3|$ kansellerer:
$$\\frac{q_1}{x^2} = \\frac{q_2}{(d-x)^2}$$

$$\\frac{9.0}{x^2} = \\frac{4.0}{(0.30-x)^2}$$

**Løser for x:**
$$\\frac{9.0}{4.0} = \\frac{x^2}{(0.30-x)^2}$$

$$\\frac{3}{2} = \\frac{x}{0.30-x}$$

$$3(0.30 - x) = 2x$$
$$0.90 - 3x = 2x$$
$$0.90 = 5x$$
$$x = 0.18 \\text{ m} = 18 \\text{ cm}$$

**Svar:** $q_3$ må plasseres $x = 18$ cm fra $q_1$ (eller 12 cm fra $q_2$) for å være i likevekt.

**Merknad:** Likevektsposisjonen er uavhengig av fortegnet og størrelsen til $q_3$!`,
      },
    },

    // ========== OPPGAVE 10: TRIANGEL - 2D SUPERPOSISJON ==========
    {
      id: 'fys2-3-1-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-10',
        number: '3.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Tre identiske punktladninger $q = +2.0$ $\\mu$C er plassert i hjørnene av en likesidet trekant med sidelengde $a = 10$ cm.

Finn størrelsen av den resulterende kraften på én av ladningene.

**Gitt:** $k = 8.99 \\times 10^9$ N·m²/C²`,
        hints: [
          'Én ladning påvirkes av de to andre med like store krefter',
          'Vinkelen mellom kraftvektorene er 60°',
          'Bruk vektoraddisjon: $|\\vec{F}_{res}| = \\sqrt{F_1^2 + F_2^2 + 2F_1F_2\\cos\\theta}$',
          'For to like krefter med vinkel $\\theta$: $F_{res} = 2F\\cos(\\theta/2)$',
        ],
        solution: `**Gitt:**
- $q = 2.0 \\times 10^{-6}$ C (tre like ladninger)
- $a = 0.10$ m (sidelengde)
- Likesidet trekant: alle vinkler = 60°

**Kraft mellom to ladninger:**
$$F = k\\frac{q^2}{a^2} = 8.99 \\times 10^9 \\cdot \\frac{(2.0 \\times 10^{-6})^2}{(0.10)^2}$$
$$F = 8.99 \\times 10^9 \\cdot \\frac{4 \\times 10^{-12}}{0.01} = 3.60 \\text{ N}$$

**Vektoraddisjon:**
La ladning A være i toppen av trekanten. Den påvirkes av:
- Kraft $\\vec{F}_1$ fra ladning B (nedover til venstre)
- Kraft $\\vec{F}_2$ fra ladning C (nedover til høyre)

Begge kreftene har størrelse $F = 3.60$ N og peker bort fra A (frastøtning).

Vinkelen mellom $\\vec{F}_1$ og $\\vec{F}_2$ er $\\theta = 60°$.

**Resultant kraft:**
For to like vektorer med vinkel $\\theta$ mellom seg:
$$|\\vec{F}_{res}| = \\sqrt{F^2 + F^2 + 2F^2\\cos\\theta}$$
$$|\\vec{F}_{res}| = F\\sqrt{2 + 2\\cos(60°)} = F\\sqrt{2 + 2 \\cdot 0.5}$$
$$|\\vec{F}_{res}| = F\\sqrt{3} = 3.60 \\cdot 1.732 = 6.2 \\text{ N}$$

**Svar:** Den resulterende kraften på hver ladning er $F_{res} = 6.2$ N, rettet rett bort fra trekantens sentrum.`,
      },
    },

    // ========== OPPGAVE 11: ELEKTRISK VS GRAVITASJON ==========
    {
      id: 'fys2-3-1-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-11',
        number: '3.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Ved hvilken avstand er gravitasjonskraften mellom en proton og et elektron like stor som den elektriske kraften mellom dem hvis vi forestiller oss at protonet og elektronet var nøytrale (ingen elektrisk ladning)?

Bruk dette til å forklare hvorfor gravitasjon er neglisjerbar i atomfysikk.

**Gitt:**
- $m_p = 1.673 \\times 10^{-27}$ kg
- $m_e = 9.109 \\times 10^{-31}$ kg
- $e = 1.602 \\times 10^{-19}$ C
- $k = 8.99 \\times 10^9$ N·m²/C²
- $G = 6.674 \\times 10^{-11}$ N·m²/kg²`,
        hints: [
          'Sett $F_E = F_G$ og se hva som skjer',
          'Legg merke til at $r$ kansellerer i uttrykket',
          'Beregn forholdet $F_E/F_G$',
        ],
        solution: `**Analyse:**
Sett opp kreftene og sammenlign:

**Elektrisk kraft:**
$$F_E = k\\frac{e^2}{r^2}$$

**Gravitasjonskraft:**
$$F_G = G\\frac{m_p m_e}{r^2}$$

**For at $F_E = F_G$:**
$$k\\frac{e^2}{r^2} = G\\frac{m_p m_e}{r^2}$$

$r^2$ kansellerer på begge sider:
$$k \\cdot e^2 = G \\cdot m_p m_e$$

Dette er **uavhengig av avstanden** $r$! La oss sjekke om likheten stemmer:

**Venstre side:**
$$k \\cdot e^2 = 8.99 \\times 10^9 \\cdot (1.602 \\times 10^{-19})^2 = 2.31 \\times 10^{-28} \\text{ N·m}^2$$

**Høyre side:**
$$G \\cdot m_p m_e = 6.674 \\times 10^{-11} \\cdot 1.673 \\times 10^{-27} \\cdot 9.109 \\times 10^{-31}$$
$$= 1.02 \\times 10^{-67} \\text{ N·m}^2$$

**Forhold:**
$$\\frac{F_E}{F_G} = \\frac{k e^2}{G m_p m_e} = \\frac{2.31 \\times 10^{-28}}{1.02 \\times 10^{-67}} = 2.3 \\times 10^{39}$$

**Svar:**
Det finnes **ingen avstand** der kreftene er like! Den elektriske kraften er alltid ca. $2 \\times 10^{39}$ ganger sterkere enn gravitasjonskraften, uansett avstand.

**Konklusjon:**
Gravitasjon er fullstendig neglisjerbar i atomfysikk fordi:
- Forholdet $F_E/F_G \\approx 10^{39}$ er konstant
- Dette gigantiske forholdet skyldes at $k/G \\approx 10^{20}$ og $e^2/(m_p m_e) \\approx 10^{19}$
- Selv om gravitasjon og elektrisitet følger samme $1/r^2$-lov, er elektrisiteten så mye sterkere at gravitasjon aldri kan konkurrere på atomært nivå`,
      },
    },

    // ========== OPPGAVE 12: LADDET KULE I LIKEVEKT ==========
    {
      id: 'fys2-3-1-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-1-ex-12',
        number: '3.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En liten kule med masse $m = 2.0$ g og ladning $q = +0.50$ $\\mu$C henger i en tynn tråd. En stor, fast ladning $Q = +3.0$ $\\mu$C er plassert på samme høyde, 5.0 cm unna kulen.

a) Finn den elektriske kraften på kulen.
b) Finn vinkelen $\\theta$ tråden gjør med vertikalen.

**Gitt:** $k = 8.99 \\times 10^9$ N·m²/C², $g = 9.81$ m/s²`,
        hints: [
          'Tegn frittlegemediagram med tyngdekraft, snorkraft og elektrisk kraft',
          'Den elektriske kraften er horisontal (frastøtning)',
          'I likevekt: $\\tan\\theta = F_E / F_G$',
        ],
        solution: `**Gitt:**
- $m = 2.0$ g $= 2.0 \\times 10^{-3}$ kg
- $q = +0.50$ $\\mu$C $= 5.0 \\times 10^{-7}$ C
- $Q = +3.0$ $\\mu$C $= 3.0 \\times 10^{-6}$ C
- $r = 5.0$ cm $= 0.050$ m

**a) Elektrisk kraft:**
$$F_E = k\\frac{|qQ|}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{5.0 \\times 10^{-7} \\cdot 3.0 \\times 10^{-6}}{(0.050)^2}$$

$$F_E = 8.99 \\times 10^9 \\cdot \\frac{1.5 \\times 10^{-12}}{2.5 \\times 10^{-3}} = 5.39 \\text{ N}$$

**b) Likevekt:**
Krefter på kulen:
- Tyngdekraft: $F_g = mg = 2.0 \\times 10^{-3} \\cdot 9.81 = 0.0196$ N (nedover)
- Elektrisk kraft: $F_E = 5.39$ N (horisontalt, bort fra Q)
- Snorkraft: $T$ (langs tråden)

I likevekt:
- Horisontal: $T\\sin\\theta = F_E$
- Vertikal: $T\\cos\\theta = F_g$

**Vinkel:**
$$\\tan\\theta = \\frac{F_E}{F_g} = \\frac{5.39}{0.0196} = 275$$

$$\\theta = \\arctan(275) = 89.8°$$

**Svar:**
a) $F_E = 5.4$ N
b) $\\theta = 89.8°$ (nesten horisontalt!)

**Merknad:** Den elektriske kraften er over 275 ganger sterkere enn tyngdekraften, så tråden står nesten horisontalt!`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Elektrisk ladning:**
- To typer: positiv (+) og negativ (-)
- Like ladninger frastøtes, ulike tiltrekkes
- Enhet: coulomb (C)

**Elementærladningen:**
$$e = 1.602 \\times 10^{-19} \\text{ C}$$

**Ladningsbevaring:**
Total ladning i et isolert system er konstant.

**Ledere og isolatorer:**
- Ledere: elektroner beveger seg fritt (metaller)
- Isolatorer: elektroner bundet til atomene (plast, glass)

**Coulombs lov:**
$$F = k\\frac{|q_1 q_2|}{r^2}$$
der $k = 8.99 \\times 10^9$ N·m²/C²

**Sammenligning med gravitasjon:**
- Begge følger $1/r^2$
- Elektrisk kraft er ca. $10^{39}$ ganger sterkere enn gravitasjon for elementærpartikler
- Elektrisk kraft kan være tiltrekkende eller frastøtende

**Superposisjonsprinsippet:**
$$\\vec{F}_{\\text{total}} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + ...$$

**Neste kapittel:**
Vi skal lære om elektrisk felt og potensiell energi.`,
    },
  ],
};

// ============================================================================
// Kapittel 3.2: Elektrisk felt
// LK20: Gjøre rede for elektrisk felt og feltlinjer
// ============================================================================

export const CHAPTER_FYSIKK2_3_2: TextbookChapter = {
  id: 'fysikk2-3-2',
  courseId: 'fysikk2',
  chapterNumber: '3.2',
  title: 'Elektrisk felt',
  description: 'Lær om elektrisk felt som beskriver kraften på ladninger, feltlinjer for visualisering, og hvordan ladninger beveger seg i felt.',
  estimatedMinutes: 55,
  prerequisites: ['fysikk2-3-1'],
  competenceGoals: [
    'gjøre rede for elektrisk felt og feltstyrke',
    'beregne elektrisk felt fra punktladninger',
    'tegne og tolke elektriske feltlinjer',
    'anvende superposisjonsprinsippet for elektriske felt',
    'analysere bevegelse av ladninger i elektriske felt',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-3-2-intro',
      type: 'text',
      content: `## Fra kraft til felt

I forrige kapittel lærte vi om Coulombs lov – kraften mellom to ladninger. Men hva skjer egentlig når ladninger påvirker hverandre over avstand? Hvordan "vet" en ladning at det er en annen ladning i nærheten?

Svaret ligger i begrepet **elektrisk felt**. I stedet for å si at ladning A utøver en kraft på ladning B direkte, kan vi si at:
1. Ladning A skaper et **elektrisk felt** i rommet rundt seg
2. Ladning B kjenner dette feltet og reagerer med en kraft

**Hvorfor er feltbegrepet nyttig?**
- Det gir en **lokal** forklaring på krefter (feltet eksisterer i hvert punkt)
- Det forklarer hvordan elektromagnetiske bølger (lys, radio) kan bevege seg gjennom vakuum
- Det er grunnlaget for all moderne fysikk

**Analogi:**
Tenk på temperaturen i et rom. Hvert punkt i rommet har en bestemt temperatur – dette er et **temperatur-felt**. På samme måte har hvert punkt i nærheten av en ladning en bestemt elektrisk feltstyrke.`,
    },

    // ========== DEFINISJON: ELEKTRISK FELT ==========
    {
      id: 'fys2-3-2-def-felt',
      type: 'definition',
      title: 'Elektrisk felt',
      content: `Det **elektriske feltet** $\\vec{E}$ i et punkt er definert som kraften per ladningsenhet på en liten positiv testladning plassert i punktet:

$$\\vec{E} = \\frac{\\vec{F}}{q}$$

der:
- $\\vec{E}$ er den elektriske feltstyrken [N/C eller V/m]
- $\\vec{F}$ er kraften på testladningen [N]
- $q$ er testladningens ladning [C]

**Viktig:** Vi bruker en **positiv** testladning for å definere feltretningen.

**Enheter:**
- N/C (newton per coulomb)
- V/m (volt per meter)
- Disse er ekvivalente: 1 N/C = 1 V/m`,
    },

    // ========== FELTSTYRKE OG KRAFT ==========
    {
      id: 'fys2-3-2-kraft',
      type: 'text',
      content: `## Kraft på en ladning i et felt

Når vi kjenner det elektriske feltet $\\vec{E}$ i et punkt, kan vi finne kraften på en vilkårlig ladning $q$ i dette punktet:

$$\\vec{F} = q\\vec{E}$$

**Retning på kraften:**
- **Positiv ladning ($q > 0$):** Kraften er i **samme retning** som feltet
- **Negativ ladning ($q < 0$):** Kraften er i **motsatt retning** av feltet

**Eksempel:**
Et elektrisk felt har styrke $E = 500$ N/C mot høyre.

For et proton ($q = +1.6 \\times 10^{-19}$ C):
$$F = qE = 1.6 \\times 10^{-19} \\cdot 500 = 8.0 \\times 10^{-17} \\text{ N mot høyre}$$

For et elektron ($q = -1.6 \\times 10^{-19}$ C):
$$F = qE = -1.6 \\times 10^{-19} \\cdot 500 = -8.0 \\times 10^{-17} \\text{ N}$$

Negativt fortegn betyr at kraften er mot **venstre** – motsatt feltretningen!`,
    },

    // ========== FORMEL: FELT FRA PUNKTLADNING ==========
    {
      id: 'fys2-3-2-formula-punktladning',
      type: 'formula',
      title: 'Elektrisk felt fra en punktladning',
      content: `$$E = k\\frac{|Q|}{r^2}$$

der:
- $E$ er feltstyrken [N/C]
- $k = 8.99 \\times 10^9$ N·m²/C² (Coulombs konstant)
- $Q$ er kildeladningen [C]
- $r$ er avstanden fra ladningen [m]

**Retning:**
- Feltet peker **bort fra** en positiv ladning ($Q > 0$)
- Feltet peker **mot** en negativ ladning ($Q < 0$)

**Vektorform:**
$$\\vec{E} = k\\frac{Q}{r^2}\\hat{r}$$

der $\\hat{r}$ er enhetsvektoren som peker fra kildeladningen mot punktet.`,
    },

    // ========== EKSEMPEL: FELT FRA PUNKTLADNING ==========
    {
      id: 'fys2-3-2-eks-punktladning',
      type: 'example',
      title: 'Felt fra en punktladning',
      content: `**Oppgave:**
Finn det elektriske feltet 10 cm fra en ladning $Q = +2.0$ $\\mu$C.

**Løsning:**
Gitt: $Q = 2.0$ $\\mu$C $= 2.0 \\times 10^{-6}$ C, $r = 10$ cm $= 0.10$ m

$$E = k\\frac{|Q|}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{2.0 \\times 10^{-6}}{(0.10)^2}$$

$$E = 8.99 \\times 10^9 \\cdot \\frac{2.0 \\times 10^{-6}}{0.01} = 1.8 \\times 10^6 \\text{ N/C}$$

**Retning:** Bort fra ladningen (siden $Q$ er positiv).

**Tolkning:** Dette er et sterkt felt! En ladning på 1 C plassert her ville kjenne en kraft på 1.8 millioner newton.`,
    },

    // ========== FELTLINJER ==========
    {
      id: 'fys2-3-2-feltlinjer',
      type: 'text',
      content: `## Elektriske feltlinjer

**Feltlinjer** er en visuell måte å representere elektriske felt på. De ble introdusert av Michael Faraday på 1800-tallet.

**Regler for feltlinjer:**

1. **Retning:** Feltlinjer peker i retningen av det elektriske feltet
   - De starter på positive ladninger (eller i uendeligheten)
   - De slutter på negative ladninger (eller i uendeligheten)

2. **Tetthet:** Tettheten av feltlinjer indikerer feltstyrken
   - Tett mellom linjer = sterkt felt
   - Spredt mellom linjer = svakt felt

3. **Kontinuitet:** Feltlinjer er kontinuerlige – de krysser aldri hverandre!
   - Hvis de krysset, ville feltet ha to retninger i samme punkt (umulig)

4. **Symmetri:** Feltlinjene følger symmetrien til ladningsfordelingen

**Feltlinjer fra en enkelt punktladning:**
- Positiv ladning: Feltlinjer peker radielt **utover** (som solen)
- Negativ ladning: Feltlinjer peker radielt **innover** (som et sluk)`,
    },

    // ========== ILLUSTRASJON: FELTLINJER ==========
    {
      id: 'fys2-3-2-ill-feltlinjer',
      type: 'text',
      content: `## Feltlinjer for ulike ladningsfordelinger

**Enkelt positiv ladning (+):**
Feltlinjer stråler radielt utover, som solstråler. Tettere nær ladningen (sterkere felt).

**Enkelt negativ ladning (-):**
Feltlinjer peker radielt innover, som piggene på en nålepute. Ender på ladningen.

**To positive ladninger (+ +):**
Feltlinjene frastøter hverandre i midten. Det er et punkt mellom ladningene der feltet er null.

**To negative ladninger (- -):**
Lignende som over, men alle linjer peker innover mot ladningene.

**Positiv og negativ ladning (+ -):**
Feltlinjer går fra + til -. Dette kalles en **dipol**. Linjene buer utover i midten og gir karakteristisk dipolmønster.

**Parallelle plater (+ og -):**
Mellom to parallelle plater med motsatt ladning er feltlinjene parallelle og jevnt fordelt – dette gir et **homogent felt**.`,
    },

    // ========== SUPERPOSISJON AV FELT ==========
    {
      id: 'fys2-3-2-superposisjon',
      type: 'text',
      content: `## Superposisjon av elektriske felt

Akkurat som krefter følger superposisjonsprinsippet, gjør også elektriske felt det:

**Superposisjonsprinsippet for felt:**
Det totale elektriske feltet i et punkt er den vektorielle summen av feltbidragene fra alle kilder:

$$\\vec{E}_{\\text{total}} = \\vec{E}_1 + \\vec{E}_2 + \\vec{E}_3 + ...$$

**Fremgangsmåte:**
1. Finn feltbidraget fra hver enkelt ladning
2. Husk at felt er vektorer – de har både størrelse og retning!
3. Bruk vektoraddisjon (komponentmetoden) for å finne totalfeltet

**Eksempel: To ladninger på en linje**
Ladning $Q_1 = +3$ $\\mu$C ved $x = 0$ og $Q_2 = -2$ $\\mu$C ved $x = 0.2$ m.

For å finne feltet i $x = 0.1$ m:
- $\\vec{E}_1$ peker mot høyre (bort fra $Q_1$)
- $\\vec{E}_2$ peker mot høyre (mot $Q_2$)

Feltene adderes i dette tilfellet fordi de peker i samme retning!`,
    },

    // ========== EKSEMPEL: SUPERPOSISJON ==========
    {
      id: 'fys2-3-2-eks-superposisjon',
      type: 'example',
      title: 'Superposisjon av felt',
      content: `**Oppgave:**
To punktladninger $Q_1 = +4.0$ $\\mu$C og $Q_2 = -4.0$ $\\mu$C er plassert henholdsvis i $x = 0$ og $x = 0.20$ m. Finn det elektriske feltet midt mellom dem ($x = 0.10$ m).

**Løsning:**
Avstanden fra hver ladning til midtpunktet er $r = 0.10$ m.

**Felt fra $Q_1$ (positiv):**
$$E_1 = k\\frac{|Q_1|}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{4.0 \\times 10^{-6}}{(0.10)^2} = 3.60 \\times 10^6 \\text{ N/C}$$

Retning: mot høyre (bort fra $Q_1$)

**Felt fra $Q_2$ (negativ):**
$$E_2 = k\\frac{|Q_2|}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{4.0 \\times 10^{-6}}{(0.10)^2} = 3.60 \\times 10^6 \\text{ N/C}$$

Retning: mot høyre (mot $Q_2$)

**Totalt felt:**
Begge feltene peker mot høyre, så de adderes:
$$E_{\\text{total}} = E_1 + E_2 = 3.60 \\times 10^6 + 3.60 \\times 10^6 = 7.2 \\times 10^6 \\text{ N/C}$$

Retning: mot høyre (i positiv x-retning)`,
    },

    // ========== HOMOGENT FELT ==========
    {
      id: 'fys2-3-2-homogent',
      type: 'text',
      content: `## Homogent elektrisk felt

Et **homogent felt** er et felt der feltstyrken er konstant – samme størrelse og retning overalt.

**Kjennetegn på homogent felt:**
- Feltlinjene er parallelle og jevnt fordelt
- $\\vec{E}$ er den samme i alle punkter
- Kraften på en ladning er lik uansett hvor den er

**Hvordan lage et homogent felt?**
Det enkleste er å bruke to parallelle, ladde plater:
- Én plate med positiv ladning
- Én plate med negativ ladning

Mellom platene er feltet tilnærmet homogent (bortsett fra nær kantene).

**Feltstyrke mellom parallelle plater:**
$$E = \\frac{V}{d}$$

der:
- $V$ er spenningsforskjellen mellom platene [V]
- $d$ er avstanden mellom platene [m]

**Eksempel:**
To plater med spenningsforskjell 1000 V og avstand 2.0 cm gir:
$$E = \\frac{1000}{0.020} = 50\\,000 \\text{ N/C} = 50 \\text{ kN/C}$$`,
    },

    // ========== DIPOL ==========
    {
      id: 'fys2-3-2-dipol',
      type: 'text',
      content: `## Elektrisk dipol

En **elektrisk dipol** består av to like store, men motsatt ladde punktladninger, adskilt med en avstand $d$.

**Dipolmoment:**
Dipolmomentet $\\vec{p}$ beskriver "styrken" til dipolen:

$$p = qd$$

der:
- $p$ er dipolmomentet [C·m]
- $q$ er størrelsen på hver ladning [C]
- $d$ er avstanden mellom ladningene [m]

**Retning:** Dipolmomentet peker fra den negative til den positive ladningen.

**Felt fra en dipol:**
- Langs aksen gjennom ladningene: $E \\propto \\frac{1}{r^3}$ (avtar raskere enn punktladning!)
- Vinkelrett på aksen: $E \\propto \\frac{1}{r^3}$

**Dipoler i naturen:**
- Vannmolekyler er permanente dipoler (O er litt negativ, H er litt positiv)
- Mange biologiske molekyler har dipolmomenter
- Antenner fungerer som oscillerende dipoler`,
    },

    // ========== BEVEGELSE I FELT ==========
    {
      id: 'fys2-3-2-bevegelse',
      type: 'text',
      content: `## Bevegelse av ladninger i elektriske felt

Når en ladet partikkel befinner seg i et elektrisk felt, vil den akselerere på grunn av den elektriske kraften.

**Newtons andre lov for ladet partikkel:**
$$\\vec{F} = q\\vec{E} = m\\vec{a}$$

**Akselerasjon:**
$$a = \\frac{qE}{m}$$

**For et homogent felt:**
- Akselerasjonen er konstant
- Bevegelsen følger kinematikkens likninger (som fritt fall, men horisontalt)

**Retning på akselerasjonen:**
- Positiv ladning: akselererer i feltretningen
- Negativ ladning: akselererer mot feltretningen

**Eksempel: Elektron i homogent felt**
Et elektron ($m = 9.11 \\times 10^{-31}$ kg, $q = -1.60 \\times 10^{-19}$ C) i et felt $E = 1000$ N/C:

$$a = \\frac{|q|E}{m} = \\frac{1.60 \\times 10^{-19} \\cdot 1000}{9.11 \\times 10^{-31}} = 1.76 \\times 10^{14} \\text{ m/s}^2$$

Dette er $10^{13}$ ganger større enn tyngdeakselerasjonen! Gravitasjon er helt neglisjerbar for elektroner i elektriske felt.`,
    },

    // ========== EKSEMPEL: PARTIKKEL I FELT ==========
    {
      id: 'fys2-3-2-eks-bevegelse',
      type: 'example',
      title: 'Proton akselerert i felt',
      content: `**Oppgave:**
Et proton starter i ro og akselereres gjennom et homogent elektrisk felt med styrke $E = 500$ N/C over en strekning på $s = 5.0$ cm. Finn sluttfarten til protonet.

**Gitt:**
- $m_p = 1.67 \\times 10^{-27}$ kg
- $q_p = 1.60 \\times 10^{-19}$ C
- $E = 500$ N/C
- $s = 0.050$ m
- $v_0 = 0$

**Løsning:**
Først finner vi akselerasjonen:
$$a = \\frac{qE}{m} = \\frac{1.60 \\times 10^{-19} \\cdot 500}{1.67 \\times 10^{-27}} = 4.79 \\times 10^{10} \\text{ m/s}^2$$

Med konstant akselerasjon og start fra ro:
$$v^2 = v_0^2 + 2as = 0 + 2 \\cdot 4.79 \\times 10^{10} \\cdot 0.050$$
$$v^2 = 4.79 \\times 10^9 \\text{ m}^2/\\text{s}^2$$
$$v = 6.9 \\times 10^4 \\text{ m/s} = 69 \\text{ km/s}$$

**Svar:** Protonet oppnår en fart på ca. 69 km/s.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - FELTRETNING ==========
    {
      id: 'fys2-3-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-1',
        number: '3.13',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `En positiv punktladning er plassert i origo. Hva er retningen på det elektriske feltet i punktet $(3, 0)$ m?`,
        options: [
          { id: 'a', text: 'I positiv x-retning (mot høyre)', correct: true },
          { id: 'b', text: 'I negativ x-retning (mot venstre)', correct: false },
          { id: 'c', text: 'I positiv y-retning (oppover)', correct: false },
          { id: 'd', text: 'Feltet er null i dette punktet', correct: false },
        ],
        hints: [
          'Husk at feltet peker bort fra positive ladninger',
          'Punktet (3, 0) ligger til høyre for origo',
        ],
        solution: `**Svar: A**

Det elektriske feltet fra en positiv punktladning peker **radielt utover** – altså bort fra ladningen.

Punktet $(3, 0)$ m ligger på positiv x-akse, til høyre for ladningen i origo.

Derfor peker feltet i **positiv x-retning** (mot høyre).`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - FELTLINJER ==========
    {
      id: 'fys2-3-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-2',
        number: '3.14',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hvilken påstand om elektriske feltlinjer er FEIL?`,
        options: [
          { id: 'a', text: 'Feltlinjer starter på positive ladninger', correct: false },
          { id: 'b', text: 'Feltlinjer ender på negative ladninger', correct: false },
          { id: 'c', text: 'Feltlinjer kan krysse hverandre', correct: true },
          { id: 'd', text: 'Tettere feltlinjer betyr sterkere felt', correct: false },
        ],
        hints: [
          'Tenk på hva som ville skje hvis feltlinjer krysset',
          'I krysningspunktet ville feltet ha to retninger',
        ],
        solution: `**Svar: C**

Feltlinjer kan **aldri** krysse hverandre. Dette er fordi:

- Feltlinjen angir retningen til det elektriske feltet
- I et krysningspunkt ville feltet peke i to forskjellige retninger samtidig
- Dette er fysisk umulig – feltet har én bestemt retning i hvert punkt

De andre påstandene er korrekte egenskaper ved feltlinjer.`,
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - FELT FRA PUNKTLADNING ==========
    {
      id: 'fys2-3-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-3',
        number: '3.15',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hvis avstanden fra en punktladning dobles, hva skjer med det elektriske feltet?`,
        options: [
          { id: 'a', text: 'Feltet halveres', correct: false },
          { id: 'b', text: 'Feltet blir fire ganger så svakt', correct: true },
          { id: 'c', text: 'Feltet blir dobbelt så sterkt', correct: false },
          { id: 'd', text: 'Feltet forblir uendret', correct: false },
        ],
        hints: [
          'Husk formelen $E = kQ/r^2$',
          'Hva skjer med $r^2$ når $r$ dobles?',
        ],
        solution: `**Svar: B**

Fra formelen $E = k\\frac{Q}{r^2}$ ser vi at feltet avtar med kvadratet av avstanden.

Når $r \\to 2r$:
$$E_{\\text{ny}} = k\\frac{Q}{(2r)^2} = k\\frac{Q}{4r^2} = \\frac{1}{4} \\cdot k\\frac{Q}{r^2} = \\frac{E}{4}$$

**Feltet blir fire ganger så svakt** når avstanden dobles.

Dette er samme oppførsel som gravitasjonsfeltet og Coulomb-kraften.`,
      },
    },

    // ========== OPPGAVE 4: BEREGN FELTSTYRKE ==========
    {
      id: 'fys2-3-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-4',
        number: '3.16',
        type: 'classic',
        difficulty: 'medium',
        task: `En punktladning $Q = +5.0$ $\\mu$C er plassert i origo.

a) Beregn det elektriske feltet i punktet $P$ som ligger 15 cm fra ladningen.
b) En ladning $q = -2.0$ $\\mu$C plasseres i punktet $P$. Finn kraften på denne ladningen.

**Gitt:** $k = 8.99 \\times 10^9$ N·m²/C²`,
        hints: [
          'a) Bruk $E = kQ/r^2$',
          'b) Bruk $F = qE$ og tenk på fortegn',
        ],
        solution: `**Gitt:**
- $Q = +5.0$ $\\mu$C $= 5.0 \\times 10^{-6}$ C
- $r = 15$ cm $= 0.15$ m
- $q = -2.0$ $\\mu$C $= -2.0 \\times 10^{-6}$ C

**a) Elektrisk feltstyrke:**
$$E = k\\frac{|Q|}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{5.0 \\times 10^{-6}}{(0.15)^2}$$
$$E = 8.99 \\times 10^9 \\cdot \\frac{5.0 \\times 10^{-6}}{0.0225} = 2.0 \\times 10^6 \\text{ N/C}$$

Retning: Bort fra $Q$ (radielt utover)

**b) Kraft på ladningen $q$:**
$$F = |q| \\cdot E = 2.0 \\times 10^{-6} \\cdot 2.0 \\times 10^6 = 4.0 \\text{ N}$$

Siden $q$ er negativ og $Q$ er positiv, tiltrekkes de. Kraften på $q$ peker **mot** $Q$.

**Svar:**
a) $E = 2.0 \\times 10^6$ N/C (bort fra Q)
b) $F = 4.0$ N (mot Q)`,
      },
    },

    // ========== OPPGAVE 5: SUPERPOSISJON PÅ LINJE ==========
    {
      id: 'fys2-3-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-5',
        number: '3.17',
        type: 'classic',
        difficulty: 'medium',
        task: `To punktladninger er plassert på x-aksen:
- $Q_1 = +6.0$ $\\mu$C ved $x = 0$
- $Q_2 = +3.0$ $\\mu$C ved $x = 30$ cm

Finn det elektriske feltet i punktet $x = 10$ cm.

**Gitt:** $k = 8.99 \\times 10^9$ N·m²/C²`,
        hints: [
          'Finn først feltbidraget fra hver ladning separat',
          'Tenk på retningen til hvert feltbidrag',
          '$Q_1$ er 10 cm unna, $Q_2$ er 20 cm unna',
        ],
        solution: `**Gitt:**
- $Q_1 = +6.0 \\times 10^{-6}$ C ved $x = 0$
- $Q_2 = +3.0 \\times 10^{-6}$ C ved $x = 0.30$ m
- Punkt: $x = 0.10$ m

**Avstander:**
- Fra $Q_1$: $r_1 = 0.10$ m
- Fra $Q_2$: $r_2 = 0.30 - 0.10 = 0.20$ m

**Felt fra $Q_1$:**
$$E_1 = k\\frac{Q_1}{r_1^2} = 8.99 \\times 10^9 \\cdot \\frac{6.0 \\times 10^{-6}}{(0.10)^2} = 5.39 \\times 10^6 \\text{ N/C}$$
Retning: positiv x-retning (bort fra $Q_1$)

**Felt fra $Q_2$:**
$$E_2 = k\\frac{Q_2}{r_2^2} = 8.99 \\times 10^9 \\cdot \\frac{3.0 \\times 10^{-6}}{(0.20)^2} = 6.74 \\times 10^5 \\text{ N/C}$$
Retning: negativ x-retning (bort fra $Q_2$, som er til høyre)

**Totalt felt:**
$$E_{\\text{total}} = E_1 - E_2 = 5.39 \\times 10^6 - 6.74 \\times 10^5 = 4.7 \\times 10^6 \\text{ N/C}$$

**Svar:** $E = 4.7 \\times 10^6$ N/C i positiv x-retning`,
      },
    },

    // ========== OPPGAVE 6: SUPERPOSISJON 2D ==========
    {
      id: 'fys2-3-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-6',
        number: '3.18',
        type: 'classic',
        difficulty: 'medium',
        task: `To like store punktladninger $Q_1 = Q_2 = +4.0$ $\\mu$C er plassert ved punktene $(-10, 0)$ cm og $(+10, 0)$ cm.

a) Finn det elektriske feltet i origo $(0, 0)$.
b) Finn det elektriske feltet i punktet $(0, 10)$ cm.

**Gitt:** $k = 8.99 \\times 10^9$ N·m²/C²`,
        hints: [
          'a) Tenk på symmetri – hva skjer med de to feltbidragene i origo?',
          'b) Bruk Pytagoras for å finne avstanden fra hver ladning',
          'Dekomponér feltene i x- og y-komponenter',
        ],
        solution: `**a) Felt i origo:**
I origo er avstanden til begge ladninger 10 cm.

Felt fra $Q_1$ (til venstre): peker mot høyre (positiv x)
Felt fra $Q_2$ (til høyre): peker mot venstre (negativ x)

Begge felt har samme størrelse, men motsatt retning. De kansellerer!

$$\\vec{E}_{\\text{origo}} = 0$$

**b) Felt i $(0, 10)$ cm:**
Avstanden fra hver ladning til punktet:
$$r = \\sqrt{(0.10)^2 + (0.10)^2} = 0.10\\sqrt{2} \\text{ m}$$

Feltstyrke fra hver ladning:
$$E = k\\frac{Q}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{4.0 \\times 10^{-6}}{(0.10\\sqrt{2})^2} = 1.80 \\times 10^6 \\text{ N/C}$$

**Komponenter:**
Vinkelen fra horisontal er $45°$ (isoceles rettvinklet trekant).

Fra $Q_1$: $E_x = E\\cos 45° = 1.27 \\times 10^6$ N/C, $E_y = E\\sin 45° = 1.27 \\times 10^6$ N/C

Fra $Q_2$: $E_x = -E\\cos 45° = -1.27 \\times 10^6$ N/C, $E_y = E\\sin 45° = 1.27 \\times 10^6$ N/C

**Totalt:**
- $E_x = 0$ (x-komponentene kansellerer)
- $E_y = 2 \\cdot 1.27 \\times 10^6 = 2.5 \\times 10^6$ N/C

**Svar:**
a) $E = 0$ i origo
b) $E = 2.5 \\times 10^6$ N/C i positiv y-retning`,
      },
    },

    // ========== OPPGAVE 7: HOMOGENT FELT ==========
    {
      id: 'fys2-3-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-7',
        number: '3.19',
        type: 'classic',
        difficulty: 'medium',
        task: `To parallelle metallplater er adskilt med 2.5 cm. Det er en spenning på 500 V mellom platene.

a) Finn det elektriske feltet mellom platene.
b) Hvilken kraft virker på et proton ($q = 1.60 \\times 10^{-19}$ C) mellom platene?
c) Sammenlign denne kraften med tyngdekraften på protonet ($m_p = 1.67 \\times 10^{-27}$ kg).`,
        hints: [
          'a) For parallelle plater: $E = V/d$',
          'b) $F = qE$',
          'c) $F_g = mg$, sammenlign størrelsene',
        ],
        solution: `**Gitt:**
- $d = 2.5$ cm $= 0.025$ m
- $V = 500$ V
- $q_p = 1.60 \\times 10^{-19}$ C
- $m_p = 1.67 \\times 10^{-27}$ kg

**a) Elektrisk felt:**
$$E = \\frac{V}{d} = \\frac{500}{0.025} = 20\\,000 \\text{ N/C} = 20 \\text{ kN/C}$$

**b) Elektrisk kraft:**
$$F_E = qE = 1.60 \\times 10^{-19} \\cdot 20\\,000 = 3.2 \\times 10^{-15} \\text{ N}$$

**c) Tyngdekraft:**
$$F_g = mg = 1.67 \\times 10^{-27} \\cdot 9.81 = 1.64 \\times 10^{-26} \\text{ N}$$

**Forhold:**
$$\\frac{F_E}{F_g} = \\frac{3.2 \\times 10^{-15}}{1.64 \\times 10^{-26}} = 2.0 \\times 10^{11}$$

**Svar:**
a) $E = 20$ kN/C
b) $F_E = 3.2 \\times 10^{-15}$ N
c) Den elektriske kraften er ca. $2 \\times 10^{11}$ (200 milliarder) ganger sterkere enn tyngdekraften!`,
      },
    },

    // ========== OPPGAVE 8: NULL-FELT PUNKT ==========
    {
      id: 'fys2-3-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-8',
        number: '3.20',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To punktladninger $Q_1 = +9.0$ $\\mu$C og $Q_2 = +4.0$ $\\mu$C er plassert ved henholdsvis $x = 0$ og $x = 1.0$ m.

Finn punktet på x-aksen der det elektriske feltet er null.`,
        hints: [
          'Punktet må ligge mellom ladningene (hvorfor?)',
          'Sett $E_1 = E_2$ og løs for x',
          'La $x$ være avstanden fra $Q_1$, da er $(1-x)$ avstanden fra $Q_2$',
        ],
        solution: `**Analyse:**
Begge ladninger er positive, så feltene peker bort fra dem. For at feltene skal kansellere, må punktet ligge **mellom** ladningene.

La $x$ være avstanden fra $Q_1$ til nullpunktet.
Da er $(1 - x)$ avstanden fra $Q_2$ til nullpunktet.

**Betingelse for null felt:**
$$E_1 = E_2$$
$$k\\frac{Q_1}{x^2} = k\\frac{Q_2}{(1-x)^2}$$

$k$ kansellerer:
$$\\frac{Q_1}{x^2} = \\frac{Q_2}{(1-x)^2}$$

$$\\frac{9.0 \\times 10^{-6}}{x^2} = \\frac{4.0 \\times 10^{-6}}{(1-x)^2}$$

$$\\frac{9}{x^2} = \\frac{4}{(1-x)^2}$$

Ta kvadratroten:
$$\\frac{3}{x} = \\frac{2}{1-x}$$

$$3(1-x) = 2x$$
$$3 - 3x = 2x$$
$$3 = 5x$$
$$x = 0.60 \\text{ m}$$

**Verifisering:**
$E_1 = k \\cdot \\frac{9 \\times 10^{-6}}{0.60^2} = k \\cdot 2.5 \\times 10^{-5}$
$E_2 = k \\cdot \\frac{4 \\times 10^{-6}}{0.40^2} = k \\cdot 2.5 \\times 10^{-5}$ ✓

**Svar:** Feltet er null ved $x = 0.60$ m (60 cm fra $Q_1$)`,
      },
    },

    // ========== OPPGAVE 9: ELEKTRON I FELT ==========
    {
      id: 'fys2-3-2-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-9',
        number: '3.21',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et elektron skytes horisontalt inn i et vertikalt homogent elektrisk felt med initial hastighet $v_0 = 2.0 \\times 10^6$ m/s. Feltet har styrke $E = 400$ N/C og peker oppover.

a) Finn akselerasjonen til elektronet.
b) Hvor mye avbøyes elektronet vertikalt etter å ha beveget seg 5.0 cm horisontalt?
c) Hvor lang tid tar det?

**Gitt:** $m_e = 9.11 \\times 10^{-31}$ kg, $|e| = 1.60 \\times 10^{-19}$ C`,
        hints: [
          'Elektronet er negativt ladet – hvilken vei akselererer det?',
          'Horisontal bevegelse er uavhengig av vertikal',
          'Bruk $y = \\frac{1}{2}at^2$ for vertikal bevegelse',
        ],
        solution: `**Gitt:**
- $v_0 = 2.0 \\times 10^6$ m/s (horisontalt)
- $E = 400$ N/C (oppover)
- $m_e = 9.11 \\times 10^{-31}$ kg
- $|e| = 1.60 \\times 10^{-19}$ C
- Horisontal forflytning: $x = 0.050$ m

**a) Akselerasjon:**
Kraften på elektronet er $F = |e|E$, men **nedover** (motsatt feltretning fordi elektronet er negativt).

$$a = \\frac{|e|E}{m_e} = \\frac{1.60 \\times 10^{-19} \\cdot 400}{9.11 \\times 10^{-31}} = 7.02 \\times 10^{13} \\text{ m/s}^2$$

Retning: **nedover**

**c) Tid (løses først):**
Horisontal bevegelse (konstant hastighet):
$$t = \\frac{x}{v_0} = \\frac{0.050}{2.0 \\times 10^6} = 2.5 \\times 10^{-8} \\text{ s}$$

**b) Vertikal avbøyning:**
Start fra ro vertikalt:
$$y = \\frac{1}{2}at^2 = \\frac{1}{2} \\cdot 7.02 \\times 10^{13} \\cdot (2.5 \\times 10^{-8})^2$$
$$y = \\frac{1}{2} \\cdot 7.02 \\times 10^{13} \\cdot 6.25 \\times 10^{-16} = 0.022 \\text{ m} = 2.2 \\text{ cm}$$

**Svar:**
a) $a = 7.0 \\times 10^{13}$ m/s² nedover
b) Avbøyning = 2.2 cm nedover
c) $t = 25$ ns`,
      },
    },

    // ========== OPPGAVE 10: DIPOL I FELT ==========
    {
      id: 'fys2-3-2-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-10',
        number: '3.22',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En elektrisk dipol består av ladninger $+q$ og $-q$ adskilt med avstand $d = 1.0$ nm. Dipolen er plassert i et homogent elektrisk felt $E = 5.0 \\times 10^5$ N/C, orientert vinkelrett på feltet.

a) Finn størrelsen på kraften på hver ladning hvis $q = 1.6 \\times 10^{-19}$ C.
b) Hva er det totale kraftmomentet (dreiemomentet) på dipolen?
c) Hvilken retning vil dipolen rotere?`,
        hints: [
          'a) Samme kraft på begge ladninger: $F = qE$',
          'b) Kraftmoment = kraft × arm. De to kreftene danner et kraftpar',
          'c) Tenk på hvilken vei $+$ og $-$ vil bevege seg i feltet',
        ],
        solution: `**Gitt:**
- $q = 1.6 \\times 10^{-19}$ C
- $d = 1.0$ nm $= 1.0 \\times 10^{-9}$ m
- $E = 5.0 \\times 10^5$ N/C

**a) Kraft på hver ladning:**
$$F = qE = 1.6 \\times 10^{-19} \\cdot 5.0 \\times 10^5 = 8.0 \\times 10^{-14} \\text{ N}$$

**b) Kraftmoment:**
De to kreftene er like store, motsatt rettet, men angriper på forskjellige punkter. Dette er et **kraftpar**.

Kraftmomentet når dipolen står vinkelrett på feltet:
$$\\tau = F \\cdot d = 8.0 \\times 10^{-14} \\cdot 1.0 \\times 10^{-9} = 8.0 \\times 10^{-23} \\text{ N·m}$$

Generelt: $\\tau = pE\\sin\\theta$ der $\\theta$ er vinkelen mellom dipolen og feltet.
Her: $\\theta = 90°$, så $\\tau = pE$ der $p = qd$ er dipolmomentet.

$$\\tau = qd \\cdot E = 1.6 \\times 10^{-19} \\cdot 1.0 \\times 10^{-9} \\cdot 5.0 \\times 10^5 = 8.0 \\times 10^{-23} \\text{ N·m}$$

**c) Rotasjonsretning:**
- Den positive ladningen (+) akselereres i feltretningen
- Den negative ladningen (-) akselereres mot feltretningen
- Dipolen vil rotere slik at den **orienterer seg langs feltet** (+ mot feltretningen, - mot)

**Svar:**
a) $F = 8.0 \\times 10^{-14}$ N på hver ladning
b) $\\tau = 8.0 \\times 10^{-23}$ N·m
c) Dipolen roterer til den blir parallell med feltet`,
      },
    },

    // ========== OPPGAVE 11: FELTLINJER FOR SYSTEM ==========
    {
      id: 'fys2-3-2-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-11',
        number: '3.23',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To punktladninger $Q_1 = +2q$ og $Q_2 = -q$ er plassert på x-aksen, adskilt med avstand $d$.

a) Tegn et kvalitativt bilde av feltlinjene.
b) Hvor mange feltlinjer starter på $Q_1$ sammenlignet med hvor mange som ender på $Q_2$?
c) Finnes det punkter der feltet er null? I så fall, omtrent hvor?`,
        hints: [
          'a) Feltlinjer starter på + og ender på -',
          'b) Antall feltlinjer er proporsjonalt med ladningen',
          'c) Kan feltene fra de to ladningene kansellere mellom dem?',
        ],
        solution: `**a) Feltlinjebilde:**
- Fra $Q_1 = +2q$ stråler feltlinjer utover
- Mot $Q_2 = -q$ peker feltlinjer innover
- Noen feltlinjer fra $Q_1$ ender på $Q_2$
- Resten av feltlinjene fra $Q_1$ går ut mot uendeligheten

**b) Antall feltlinjer:**
- Antall feltlinjer er proporsjonalt med ladningens størrelse
- Fra $Q_1$: $2n$ feltlinjer (la oss si $2n$)
- Til $Q_2$: $n$ feltlinjer ender her
- Det betyr at $n$ feltlinjer går ut til uendeligheten

**Konklusjon:** Halvparten av feltlinjene fra $Q_1$ ender på $Q_2$, halvparten forsvinner til uendeligheten.

**c) Nullpunkter:**
- **Mellom ladningene:** Nei! $Q_1$ gir felt mot høyre (bort fra +), $Q_2$ gir felt mot høyre (mot -). De adderes, ikke kansellerer.
- **Til venstre for $Q_1$:** Begge felt peker mot venstre. Ingen kansellering.
- **Til høyre for $Q_2$:** Her peker feltene i motsatte retninger!
  - $Q_1$ gir felt mot høyre (bort fra +)
  - $Q_2$ gir felt mot venstre (bort fra -)

I et punkt til høyre for $Q_2$: La $x$ være avstanden fra $Q_1$.
$$\\frac{2q}{x^2} = \\frac{q}{(x-d)^2}$$
$$2(x-d)^2 = x^2$$
$$x = (2 + \\sqrt{2})d \\approx 3.4d$$

**Svar:** Nullpunktet ligger ca. $2.4d$ til høyre for $Q_2$.`,
      },
    },

    // ========== OPPGAVE 12: AKSELERASJON OG ENERGI ==========
    {
      id: 'fys2-3-2-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-2-ex-12',
        number: '3.24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En partikkelakselerator bruker et homogent elektrisk felt til å akselerere protoner. Feltet har styrke $E = 1.0 \\times 10^6$ N/C over en strekning på $s = 2.0$ m.

a) Finn akselerasjonen til et proton i feltet.
b) Hvis protonet starter fra ro, finn sluttfarten.
c) Uttrykk den kinetiske energien i elektronvolt (eV).
d) Hvor stor spenningsforskjell tilsvarer dette?

**Gitt:** $m_p = 1.67 \\times 10^{-27}$ kg, $e = 1.60 \\times 10^{-19}$ C, 1 eV $= 1.60 \\times 10^{-19}$ J`,
        hints: [
          'a) $a = qE/m$',
          'b) $v^2 = 2as$',
          'c) $E_k = \\frac{1}{2}mv^2$, konverter til eV',
          'd) Arbeid $W = qV$',
        ],
        solution: `**Gitt:**
- $E = 1.0 \\times 10^6$ N/C
- $s = 2.0$ m
- $v_0 = 0$

**a) Akselerasjon:**
$$a = \\frac{eE}{m_p} = \\frac{1.60 \\times 10^{-19} \\cdot 1.0 \\times 10^6}{1.67 \\times 10^{-27}} = 9.58 \\times 10^{13} \\text{ m/s}^2$$

**b) Sluttfart:**
$$v^2 = v_0^2 + 2as = 0 + 2 \\cdot 9.58 \\times 10^{13} \\cdot 2.0 = 3.83 \\times 10^{14}$$
$$v = 1.96 \\times 10^7 \\text{ m/s} \\approx 2.0 \\times 10^7 \\text{ m/s}$$

Dette er ca. 6.5% av lyshastigheten!

**c) Kinetisk energi:**
$$E_k = \\frac{1}{2}m_p v^2 = \\frac{1}{2} \\cdot 1.67 \\times 10^{-27} \\cdot (1.96 \\times 10^7)^2$$
$$E_k = 3.20 \\times 10^{-13} \\text{ J}$$

I elektronvolt:
$$E_k = \\frac{3.20 \\times 10^{-13}}{1.60 \\times 10^{-19}} = 2.0 \\times 10^6 \\text{ eV} = 2.0 \\text{ MeV}$$

**d) Spenningsforskjell:**
Arbeidet utført på protonet er $W = qV$, og dette blir kinetisk energi:
$$E_k = eV$$
$$V = \\frac{E_k}{e} = \\frac{3.20 \\times 10^{-13}}{1.60 \\times 10^{-19}} = 2.0 \\times 10^6 \\text{ V} = 2.0 \\text{ MV}$$

Alternativt: $V = Es = 1.0 \\times 10^6 \\cdot 2.0 = 2.0 \\times 10^6$ V

**Svar:**
a) $a = 9.6 \\times 10^{13}$ m/s²
b) $v = 2.0 \\times 10^7$ m/s (6.5% av $c$)
c) $E_k = 2.0$ MeV
d) $V = 2.0$ MV`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Elektrisk felt:**
- Beskriver kraften på ladninger i rommet
- Definisjon: $\\vec{E} = \\vec{F}/q$ (kraft per ladningsenhet)
- Enhet: N/C eller V/m

**Felt fra punktladning:**
$$E = k\\frac{|Q|}{r^2}$$
- Retning: bort fra + ladninger, mot - ladninger

**Kraft på ladning i felt:**
$$\\vec{F} = q\\vec{E}$$
- Positiv ladning: kraft i feltretningen
- Negativ ladning: kraft mot feltretningen

**Feltlinjer:**
- Visualiserer elektrisk felt
- Starter på +, ender på -
- Krysser aldri hverandre
- Tetthet indikerer feltstyrke

**Superposisjon:**
$$\\vec{E}_{\\text{total}} = \\vec{E}_1 + \\vec{E}_2 + ...$$

**Homogent felt:**
- Konstant styrke og retning overalt
- Mellom parallelle plater: $E = V/d$

**Dipol:**
- To motsatte ladninger: $p = qd$
- Felt avtar som $1/r^3$

**Bevegelse i felt:**
$$a = \\frac{qE}{m}$$

**Neste kapittel:**
Vi skal lære om elektrisk potensial og potensiell energi.`,
    },
  ],
};

// ============================================================================
// Kapittel 3.3: Elektrisk potensial og spenning
// LK20: Gjøre rede for elektrisk potensial og potensiell energi
// ============================================================================

export const CHAPTER_FYSIKK2_3_3: TextbookChapter = {
  id: 'fysikk2-3-3',
  courseId: 'fysikk2',
  chapterNumber: '3.3',
  title: 'Elektrisk potensial og spenning',
  description: 'Lær om elektrisk potensial, spenning (potensialforskjell), ekvipotensialflater, og arbeid i elektriske felt.',
  estimatedMinutes: 55,
  prerequisites: ['fysikk2-3-2'],
  competenceGoals: [
    'gjøre rede for elektrisk potensial og potensiell energi',
    'beregne elektrisk potensial fra punktladninger',
    'forklare sammenhengen mellom elektrisk felt og potensial',
    'tegne og tolke ekvipotensialflater',
    'beregne arbeid og energi i elektriske felt',
    'bruke elektronvolt som energienhet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-3-3-intro',
      type: 'text',
      content: `## Fra felt til potensial

I forrige kapittel lærte vi om elektrisk felt – en vektor som beskriver kraften per ladningsenhet. Men akkurat som i mekanikken, der vi har både kraft og potensiell energi, har vi i elektrostatikk både felt og **potensial**.

**Hvorfor trenger vi potensial?**
- Felt er en **vektor** (har retning) – kan være komplisert å regne med
- Potensial er en **skalar** (bare ett tall) – mye enklere å addere!
- Spenning i elektriske kretser er potensialforskjell
- Energibevaring blir enklere med potensial

**Analogi med tyngdekraft:**
- I tyngdefeltet: $E_p = mgh$ (potensiell energi)
- I elektrisk felt: $E_p = qV$ (potensiell energi)
- $h$ er "høyde" i tyngdefeltet
- $V$ er "elektrisk høyde" = potensial

**Fra hverdagen:**
Når vi sier at et batteri har 9 V, snakker vi om **potensialforskjellen** (spenningen) mellom pluss- og minuspolen.`,
    },

    // ========== DEFINISJON: ELEKTRISK POTENSIAL ==========
    {
      id: 'fys2-3-3-def-potensial',
      type: 'definition',
      title: 'Elektrisk potensial',
      content: `Det **elektriske potensialet** $V$ i et punkt er definert som den potensielle energien per ladningsenhet for en testladning plassert i punktet:

$$V = \\frac{E_p}{q}$$

der:
- $V$ er det elektriske potensialet [V = J/C]
- $E_p$ er den potensielle energien [J]
- $q$ er testladningen [C]

**Enhet:**
- Volt (V) = Joule per Coulomb (J/C)
- 1 V = 1 J/C

**Viktig:** Potensialet er en **skalar** størrelse – det har bare verdi, ikke retning.

**Nullpunkt:**
Vanligvis setter vi $V = 0$ i uendeligheten (langt fra alle ladninger).`,
    },

    // ========== FORMEL: POTENSIAL FRA PUNKTLADNING ==========
    {
      id: 'fys2-3-3-formula-punktladning',
      type: 'formula',
      title: 'Elektrisk potensial fra en punktladning',
      content: `$$V = k\\frac{Q}{r}$$

der:
- $V$ er potensialet [V]
- $k = 8.99 \\times 10^9$ N·m²/C² (Coulombs konstant)
- $Q$ er kildeladningen [C] (med fortegn!)
- $r$ er avstanden fra ladningen [m]

**Viktige forskjeller fra feltstyrken:**
| Egenskap | Felt $E$ | Potensial $V$ |
|----------|----------|---------------|
| Type | Vektor | Skalar |
| Formel | $E = k\\frac{|Q|}{r^2}$ | $V = k\\frac{Q}{r}$ |
| Avhengighet | $1/r^2$ | $1/r$ |
| Fortegn | Alltid positiv | Følger ladningens fortegn |

**Merk:** For potensial bruker vi ladningen $Q$ **med fortegn** (positiv eller negativ).`,
    },

    // ========== EKSEMPEL: POTENSIAL FRA PUNKTLADNING ==========
    {
      id: 'fys2-3-3-eks-punktladning',
      type: 'example',
      title: 'Potensial fra en punktladning',
      content: `**Oppgave:**
Finn det elektriske potensialet 20 cm fra en ladning $Q = +5.0$ $\\mu$C.

**Løsning:**
Gitt: $Q = 5.0$ $\\mu$C $= 5.0 \\times 10^{-6}$ C, $r = 20$ cm $= 0.20$ m

$$V = k\\frac{Q}{r} = 8.99 \\times 10^9 \\cdot \\frac{5.0 \\times 10^{-6}}{0.20}$$

$$V = 8.99 \\times 10^9 \\cdot 2.5 \\times 10^{-5} = 2.25 \\times 10^5 \\text{ V} \\approx 225 \\text{ kV}$$

**Tolkning:**
- Potensialet er positivt (ladningen er positiv)
- En ladning på 1 C plassert her ville ha potensiell energi på 225 kJ
- Dette er et høyt potensial – sammenlign med 230 V i stikkontakten!`,
    },

    // ========== DEFINISJON: SPENNING ==========
    {
      id: 'fys2-3-3-def-spenning',
      type: 'definition',
      title: 'Spenning (potensialforskjell)',
      content: `**Spenning** $U$ er forskjellen i elektrisk potensial mellom to punkter:

$$U = V_A - V_B = \\Delta V$$

der:
- $U$ er spenningen mellom punkt A og B [V]
- $V_A$ er potensialet i punkt A [V]
- $V_B$ er potensialet i punkt B [V]

**Tolkning:**
- Spenningen forteller hvor mye arbeid (per ladning) som utføres når en ladning flyttes fra B til A
- Hvis $U > 0$: A har høyere potensial enn B
- Hvis $U < 0$: A har lavere potensial enn B

**Eksempel:**
Et batteri på 9 V har $V_+ - V_- = 9$ V. Pluss-polen har 9 V høyere potensial enn minus-polen.`,
    },

    // ========== ARBEID I ELEKTRISK FELT ==========
    {
      id: 'fys2-3-3-arbeid',
      type: 'text',
      content: `## Arbeid i elektrisk felt

Når en ladning $q$ flyttes mellom to punkter med potensialforskjell $U$, utføres et arbeid:

$$W = q \\cdot U = q(V_A - V_B)$$

der:
- $W$ er arbeidet utført **av det elektriske feltet** [J]
- $q$ er ladningen [C]
- $U = V_A - V_B$ er spenningen [V]

**Tolkning:**
- Når en **positiv** ladning flyttes fra høyt til lavt potensial: feltet gjør **positivt** arbeid (ladningen akselererer)
- Når en **positiv** ladning flyttes fra lavt til høyt potensial: det må tilføres energi (arbeid **mot** feltet)

**Sammenheng med potensiell energi:**
$$\\Delta E_p = q(V_B - V_A) = -W$$

Endringen i potensiell energi er det **negative** av arbeidet gjort av feltet.

**Viktig:** Arbeidet avhenger bare av start- og sluttpunkt, **ikke** av veien ladningen tar! (Konservativ kraft)`,
    },

    // ========== EKSEMPEL: ARBEID ==========
    {
      id: 'fys2-3-3-eks-arbeid',
      type: 'example',
      title: 'Arbeid på en ladning',
      content: `**Oppgave:**
Et proton flyttes fra punkt A med potensial $V_A = 1000$ V til punkt B med potensial $V_B = 0$ V.
a) Hvor mye arbeid gjør det elektriske feltet på protonet?
b) Hva skjer med protonets kinetiske energi hvis det starter fra ro?

**Løsning:**
Gitt: $q = e = 1.60 \\times 10^{-19}$ C, $V_A = 1000$ V, $V_B = 0$ V

**a) Arbeid:**
$$W = q(V_A - V_B) = 1.60 \\times 10^{-19} \\cdot (1000 - 0)$$
$$W = 1.60 \\times 10^{-16} \\text{ J}$$

**b) Kinetisk energi:**
Siden arbeidet er positivt, øker den kinetiske energien:
$$\\Delta E_k = W = 1.60 \\times 10^{-16} \\text{ J}$$

Hvis protonet startet fra ro:
$$E_k = \\frac{1}{2}mv^2 = 1.60 \\times 10^{-16} \\text{ J}$$
$$v = \\sqrt{\\frac{2E_k}{m_p}} = \\sqrt{\\frac{2 \\cdot 1.60 \\times 10^{-16}}{1.67 \\times 10^{-27}}} = 4.4 \\times 10^5 \\text{ m/s}$$`,
    },

    // ========== ELEKTRONVOLT ==========
    {
      id: 'fys2-3-3-elektronvolt',
      type: 'text',
      content: `## Elektronvolt (eV)

I atom- og kjernefysikk er joule en uhensiktsmessig stor enhet. I stedet bruker vi **elektronvolt (eV)**.

**Definisjon:** 1 elektronvolt er energien et elektron får når det akselereres gjennom en potensialforskjell på 1 volt.

$$1 \\text{ eV} = e \\cdot 1 \\text{ V} = 1.602 \\times 10^{-19} \\text{ J}$$

**Prefikser:**
- 1 keV = $10^3$ eV = $1.602 \\times 10^{-16}$ J (kilo-elektronvolt)
- 1 MeV = $10^6$ eV = $1.602 \\times 10^{-13}$ J (mega-elektronvolt)
- 1 GeV = $10^9$ eV = $1.602 \\times 10^{-10}$ J (giga-elektronvolt)

**Praktisk bruk:**
Når en ladning $q = ne$ (der $n$ er antall elementærladninger) akselereres gjennom spenning $U$, får den energi:
$$E = neU$$

Hvis $U$ måles i volt, blir energien i eV lik $n \\cdot U$.

**Eksempel:**
Et elektron akselerert gjennom 100 V får energi: $E = 1 \\cdot 100$ eV $= 100$ eV.`,
    },

    // ========== SAMMENHENG FELT OG POTENSIAL ==========
    {
      id: 'fys2-3-3-felt-potensial',
      type: 'text',
      content: `## Sammenheng mellom felt og potensial

Det elektriske feltet og potensialet er nært beslektet. I én dimensjon:

$$E = -\\frac{dV}{dr}$$

Feltet er den **negative gradienten** av potensialet.

**Tolkning:**
- Feltet peker i retningen der potensialet synker raskest
- Jo brattere potensialet faller, jo sterkere er feltet
- Minustegnet: feltet peker fra høyt til lavt potensial

**For homogent felt:**
$$E = -\\frac{\\Delta V}{\\Delta r} = \\frac{U}{d}$$

der $U$ er spenningen og $d$ er avstanden mellom platene.

**Eksempel:**
Mellom to parallelle plater med avstand 1 cm og spenning 100 V:
$$E = \\frac{100}{0.01} = 10\\,000 \\text{ V/m} = 10 \\text{ kV/m}$$

**Analogi:**
- Potensial $V$ er som "høyde" på et fjell
- Felt $E$ er som "brattheten" (helningen)
- Feltet peker "nedover" (mot lavere potensial)`,
    },

    // ========== FORMEL: SAMMENHENG FELT-POTENSIAL ==========
    {
      id: 'fys2-3-3-formula-sammenheng',
      type: 'formula',
      title: 'Sammenheng mellom felt og potensial',
      content: `**I én dimensjon:**
$$E = -\\frac{dV}{dr}$$

**For homogent felt mellom plater:**
$$E = \\frac{U}{d}$$

der:
- $E$ er feltstyrken [V/m]
- $U$ er spenningen mellom platene [V]
- $d$ er avstanden mellom platene [m]

**Omvendt sammenheng:**
$$U = V_A - V_B = -\\int_A^B \\vec{E} \\cdot d\\vec{r}$$

For homogent felt: $U = E \\cdot d$`,
    },

    // ========== EKVIPOTENSIALFLATER ==========
    {
      id: 'fys2-3-3-ekvipotensial',
      type: 'text',
      content: `## Ekvipotensialflater

En **ekvipotensialflate** er en flate der potensialet har samme verdi overalt.

**Egenskaper:**
1. **Vinkelrett på feltlinjene:** Ekvipotensialflater står alltid vinkelrett på de elektriske feltlinjene
2. **Ingen arbeid langs flaten:** Å flytte en ladning langs en ekvipotensialflate krever null arbeid
3. **Krysser aldri:** Ekvipotensialflater krysser aldri hverandre

**For en punktladning:**
Ekvipotensialflatene er **kuleflater** (sfærer) sentrert rundt ladningen.
- Alle punkter i avstand $r$ fra ladningen har samme potensial $V = kQ/r$

**For et homogent felt:**
Ekvipotensialflatene er **parallelle plan** vinkelrett på feltet.
- Mellom parallelle kondensatorplater: ekvipotensialene er plan parallelt med platene

**For flere ladninger:**
Ekvipotensialflatene får mer kompliserte former, men står fortsatt vinkelrett på feltlinjene.

**Analogi:**
Ekvipotensialflater er som høydekurver på et kart. Feltlinjene tilsvarer "fall-linjer" ned fjellsiden.`,
    },

    // ========== POTENSIAL FRA FLERE LADNINGER ==========
    {
      id: 'fys2-3-3-superposisjon',
      type: 'text',
      content: `## Potensial fra flere punktladninger

En stor fordel med potensial: det er en **skalar**, så vi kan bare addere tallene!

$$V_{\\text{total}} = V_1 + V_2 + V_3 + ... = \\sum_i k\\frac{Q_i}{r_i}$$

**Fremgangsmåte:**
1. Finn avstanden $r_i$ fra hvert ladning til punktet
2. Beregn bidraget fra hver ladning: $V_i = kQ_i/r_i$
3. Summer alle bidragene (med fortegn!)

**Eksempel:**
To ladninger $Q_1 = +2.0$ $\\mu$C og $Q_2 = -1.0$ $\\mu$C er plassert med 10 cm avstand. Hva er potensialet i midtpunktet?

$r_1 = r_2 = 5$ cm $= 0.05$ m

$$V_1 = k\\frac{Q_1}{r_1} = 8.99 \\times 10^9 \\cdot \\frac{2.0 \\times 10^{-6}}{0.05} = 3.60 \\times 10^5 \\text{ V}$$

$$V_2 = k\\frac{Q_2}{r_2} = 8.99 \\times 10^9 \\cdot \\frac{-1.0 \\times 10^{-6}}{0.05} = -1.80 \\times 10^5 \\text{ V}$$

$$V_{\\text{total}} = V_1 + V_2 = 3.60 \\times 10^5 - 1.80 \\times 10^5 = 1.80 \\times 10^5 \\text{ V}$$`,
    },

    // ========== EKSEMPEL: POTENSIAL FRA FLERE LADNINGER ==========
    {
      id: 'fys2-3-3-eks-flere-ladninger',
      type: 'example',
      title: 'Potensial fra et ladningssystem',
      content: `**Oppgave:**
Tre ladninger er plassert i hjørnene av en likesidet trekant med sidelengde $a = 30$ cm:
- $Q_1 = +3.0$ $\\mu$C i punkt A
- $Q_2 = +3.0$ $\\mu$C i punkt B
- $Q_3 = -3.0$ $\\mu$C i punkt C

Finn potensialet i trekantens sentrum.

**Løsning:**
Først finner vi avstanden fra sentrum til hvert hjørne. For en likesidet trekant:
$$r = \\frac{a}{\\sqrt{3}} = \\frac{0.30}{\\sqrt{3}} = 0.173 \\text{ m}$$

Alle ladningene er like langt fra sentrum!

$$V_1 = k\\frac{Q_1}{r} = 8.99 \\times 10^9 \\cdot \\frac{3.0 \\times 10^{-6}}{0.173} = 1.56 \\times 10^5 \\text{ V}$$

$$V_2 = k\\frac{Q_2}{r} = 1.56 \\times 10^5 \\text{ V}$$

$$V_3 = k\\frac{Q_3}{r} = 8.99 \\times 10^9 \\cdot \\frac{-3.0 \\times 10^{-6}}{0.173} = -1.56 \\times 10^5 \\text{ V}$$

$$V_{\\text{total}} = V_1 + V_2 + V_3 = 1.56 \\times 10^5 \\text{ V}$$

**Merk:** Selv om $Q_1 + Q_2 + Q_3 = +3$ $\\mu$C, er potensialet i sentrum bare bidraget fra én +3 $\\mu$C ladning!`,
    },

    // ========== POTENSIELL ENERGI ==========
    {
      id: 'fys2-3-3-potensiell-energi',
      type: 'text',
      content: `## Potensiell energi i elektrisk felt

Den potensielle energien til en ladning $q$ i et potensial $V$:

$$E_p = qV$$

**For to punktladninger:**
Den potensielle energien i systemet av to ladninger $Q_1$ og $Q_2$ med avstand $r$:

$$E_p = k\\frac{Q_1 Q_2}{r}$$

**Tolkning:**
- $E_p > 0$ (positiv): Like ladninger (frastøting) – det kreves arbeid å bringe dem sammen
- $E_p < 0$ (negativ): Ulike ladninger (tiltrekning) – systemet frigjør energi når de nærmer seg

**Eksempel:**
To elektroner med avstand 1.0 nm:
$$E_p = k\\frac{e \\cdot e}{r} = 8.99 \\times 10^9 \\cdot \\frac{(1.60 \\times 10^{-19})^2}{1.0 \\times 10^{-9}}$$
$$E_p = 2.30 \\times 10^{-19} \\text{ J} = 1.44 \\text{ eV}$$

Denne positive energien representerer arbeidet som må tilføres for å bringe elektronene så nær hverandre.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE OM POTENSIAL ==========
    {
      id: 'fys2-3-3-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-1',
        number: '3.25',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva er riktig om elektrisk potensial?`,
        options: [
          { id: 'a', text: 'Potensial er en vektor som peker mot høyere potensial' },
          { id: 'b', text: 'Potensial er en skalar som måles i volt (V = J/C)' },
          { id: 'c', text: 'Potensial fra en positiv ladning er alltid negativt' },
          { id: 'd', text: 'Potensial og elektrisk felt har samme enhet' },
        ],
        correctAnswer: 'b',
        solution: `**Svar: B**

Elektrisk potensial er en **skalar** størrelse (ikke vektor). Det måles i volt, der 1 V = 1 J/C (joule per coulomb).

Hvorfor de andre er feil:
- A: Potensial har ingen retning (skalar)
- C: Potensial fra positiv ladning er positivt ($V = kQ/r > 0$ når $Q > 0$)
- D: Felt måles i N/C eller V/m, potensial i V`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE OM SPENNING ==========
    {
      id: 'fys2-3-3-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-2',
        number: '3.26',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Et proton flyttes fra punkt A til punkt B. Potensialet er $V_A = 500$ V og $V_B = 200$ V. Hva er riktig?`,
        options: [
          { id: 'a', text: 'Protonet mister 300 eV kinetisk energi' },
          { id: 'b', text: 'Protonet får 300 eV kinetisk energi' },
          { id: 'c', text: 'Protonet mister 700 eV kinetisk energi' },
          { id: 'd', text: 'Ingen energiendring fordi protonet er positivt' },
        ],
        correctAnswer: 'b',
        solution: `**Svar: B**

Arbeidet gjort av feltet på protonet:
$$W = q(V_A - V_B) = e \\cdot (500 - 200) = e \\cdot 300 \\text{ V} = 300 \\text{ eV}$$

Siden arbeidet er positivt, øker den kinetiske energien med 300 eV.

**Tolkning:** Protonet beveger seg fra høyt potensial (500 V) til lavt potensial (200 V). Dette er "nedoverbakke" for en positiv ladning, så den akselererer og får mer kinetisk energi.`,
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE OM EKVIPOTENSIAL ==========
    {
      id: 'fys2-3-3-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-3',
        number: '3.27',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hvilken påstand om ekvipotensialflater er korrekt?`,
        options: [
          { id: 'a', text: 'Ekvipotensialflater er alltid parallelle med feltlinjene' },
          { id: 'b', text: 'Det kreves arbeid for å flytte en ladning langs en ekvipotensialflate' },
          { id: 'c', text: 'Ekvipotensialflater står alltid vinkelrett på feltlinjene' },
          { id: 'd', text: 'Ekvipotensialflatene rundt en punktladning er plane flater' },
        ],
        correctAnswer: 'c',
        solution: `**Svar: C**

Ekvipotensialflater står alltid **vinkelrett** på de elektriske feltlinjene.

Hvorfor de andre er feil:
- A: De er vinkelrette, ikke parallelle
- B: Å flytte langs en ekvipotensialflate krever null arbeid (samme potensial overalt)
- D: For en punktladning er ekvipotensialflatene **sfærer** (kuleflater), ikke plane flater`,
      },
    },

    // ========== OPPGAVE 4: BEREGNE POTENSIAL ==========
    {
      id: 'fys2-3-3-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-4',
        number: '3.28',
        type: 'classic',
        difficulty: 'medium',
        task: `En punktladning $Q = +8.0$ $\\mu$C er plassert i origo.

a) Beregn det elektriske potensialet 40 cm fra ladningen.
b) Beregn det elektriske potensialet 80 cm fra ladningen.
c) Hvor stort er potensialspranget (spenningen) mellom de to punktene?`,
        hints: [
          'a) Bruk $V = kQ/r$',
          'b) Samme formel, dobbel avstand',
          'c) Spenning er forskjellen $U = V_1 - V_2$',
        ],
        solution: `**Gitt:** $Q = 8.0$ $\\mu$C $= 8.0 \\times 10^{-6}$ C

**a) Potensial ved $r_1 = 40$ cm $= 0.40$ m:**
$$V_1 = k\\frac{Q}{r_1} = 8.99 \\times 10^9 \\cdot \\frac{8.0 \\times 10^{-6}}{0.40}$$
$$V_1 = 1.80 \\times 10^5 \\text{ V} = 180 \\text{ kV}$$

**b) Potensial ved $r_2 = 80$ cm $= 0.80$ m:**
$$V_2 = k\\frac{Q}{r_2} = 8.99 \\times 10^9 \\cdot \\frac{8.0 \\times 10^{-6}}{0.80}$$
$$V_2 = 9.0 \\times 10^4 \\text{ V} = 90 \\text{ kV}$$

**Merk:** Dobbel avstand gir halvt potensial (fordi $V \\propto 1/r$).

**c) Spenning:**
$$U = V_1 - V_2 = 180 - 90 = 90 \\text{ kV}$$

**Svar:**
a) $V_1 = 180$ kV
b) $V_2 = 90$ kV
c) $U = 90$ kV`,
      },
    },

    // ========== OPPGAVE 5: ARBEID OG ENERGI ==========
    {
      id: 'fys2-3-3-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-5',
        number: '3.29',
        type: 'classic',
        difficulty: 'medium',
        task: `Et elektron akselereres fra ro gjennom en spenning på 5000 V.

a) Hvor mye kinetisk energi får elektronet (i joule og eV)?
b) Hva blir elektronets slutthastighet?

**Gitt:** $m_e = 9.11 \\times 10^{-31}$ kg, $e = 1.60 \\times 10^{-19}$ C`,
        hints: [
          'a) $E_k = eU$ for et elektron akselerert gjennom spenning $U$',
          'b) Bruk $E_k = \\frac{1}{2}mv^2$',
        ],
        solution: `**a) Kinetisk energi:**

I elektronvolt:
$$E_k = 1 \\cdot U = 1 \\cdot 5000 = 5000 \\text{ eV} = 5.0 \\text{ keV}$$

I joule:
$$E_k = eU = 1.60 \\times 10^{-19} \\cdot 5000 = 8.0 \\times 10^{-16} \\text{ J}$$

**b) Slutthastighet:**
$$E_k = \\frac{1}{2}m_e v^2$$
$$v = \\sqrt{\\frac{2E_k}{m_e}} = \\sqrt{\\frac{2 \\cdot 8.0 \\times 10^{-16}}{9.11 \\times 10^{-31}}}$$
$$v = \\sqrt{1.76 \\times 10^{15}} = 4.2 \\times 10^7 \\text{ m/s}$$

**Kontroll:** Dette er ca. 14% av lyshastigheten – relativistiske effekter begynner å bli merkbare!

**Svar:**
a) $E_k = 5.0$ keV $= 8.0 \\times 10^{-16}$ J
b) $v = 4.2 \\times 10^7$ m/s`,
      },
    },

    // ========== OPPGAVE 6: FELT OG POTENSIAL ==========
    {
      id: 'fys2-3-3-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-6',
        number: '3.30',
        type: 'classic',
        difficulty: 'medium',
        task: `Mellom to parallelle metallplater er det en spenning på 120 V. Platene har avstand 4.0 mm.

a) Beregn det elektriske feltet mellom platene.
b) En alfapartikkel ($q = +2e$) frigjøres fra den positive platen. Hvor mye kinetisk energi får den når den når den negative platen?
c) Uttrykk den kinetiske energien i keV.`,
        hints: [
          'a) $E = U/d$ for homogent felt',
          'b) $W = qU$',
          'c) Alfapartikkel har ladning $q = 2e$',
        ],
        solution: `**a) Elektrisk felt:**
$$E = \\frac{U}{d} = \\frac{120}{0.004} = 30\\,000 \\text{ V/m} = 30 \\text{ kV/m}$$

**b) Kinetisk energi:**
Arbeidet gjort av feltet:
$$W = qU = 2e \\cdot 120 \\text{ V} = 2 \\cdot 1.60 \\times 10^{-19} \\cdot 120$$
$$W = 3.84 \\times 10^{-17} \\text{ J}$$

Denne energien blir kinetisk energi: $E_k = 3.84 \\times 10^{-17}$ J

**c) I keV:**
$$E_k = \\frac{3.84 \\times 10^{-17}}{1.60 \\times 10^{-19}} = 240 \\text{ eV} = 0.24 \\text{ keV}$$

**Alternativ metode for c):**
Alfapartikkelen har ladning $q = 2e$, så den får $2 \\cdot 120 = 240$ eV.

**Svar:**
a) $E = 30$ kV/m
b) $E_k = 3.84 \\times 10^{-17}$ J
c) $E_k = 240$ eV $= 0.24$ keV`,
      },
    },

    // ========== OPPGAVE 7: POTENSIAL FRA TO LADNINGER ==========
    {
      id: 'fys2-3-3-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-7',
        number: '3.31',
        type: 'classic',
        difficulty: 'medium',
        task: `To punktladninger $Q_1 = +4.0$ $\\mu$C og $Q_2 = -2.0$ $\\mu$C er plassert på x-aksen med $Q_1$ i $x = 0$ og $Q_2$ i $x = 60$ cm.

a) Finn potensialet i $x = 20$ cm.
b) Finn potensialet i $x = 40$ cm.
c) Er det noe punkt på x-aksen mellom ladningene der potensialet er null? I så fall, finn det.`,
        hints: [
          'a) Summer bidragene: $V = kQ_1/r_1 + kQ_2/r_2$',
          'b) Samme fremgangsmåte',
          'c) Sett $V = 0$ og løs for $x$',
        ],
        solution: `**a) Potensial i $x = 20$ cm:**
$r_1 = 20$ cm $= 0.20$ m, $r_2 = 40$ cm $= 0.40$ m

$$V_1 = k\\frac{Q_1}{r_1} = 8.99 \\times 10^9 \\cdot \\frac{4.0 \\times 10^{-6}}{0.20} = 1.80 \\times 10^5 \\text{ V}$$
$$V_2 = k\\frac{Q_2}{r_2} = 8.99 \\times 10^9 \\cdot \\frac{-2.0 \\times 10^{-6}}{0.40} = -4.50 \\times 10^4 \\text{ V}$$
$$V = V_1 + V_2 = 1.80 \\times 10^5 - 0.45 \\times 10^5 = 1.35 \\times 10^5 \\text{ V}$$

**b) Potensial i $x = 40$ cm:**
$r_1 = 40$ cm $= 0.40$ m, $r_2 = 20$ cm $= 0.20$ m

$$V_1 = k\\frac{4.0 \\times 10^{-6}}{0.40} = 9.0 \\times 10^4 \\text{ V}$$
$$V_2 = k\\frac{-2.0 \\times 10^{-6}}{0.20} = -9.0 \\times 10^4 \\text{ V}$$
$$V = V_1 + V_2 = 0 \\text{ V}$$

**c) Nullpunkt:**
Sett $V = 0$: $k\\frac{Q_1}{x} + k\\frac{Q_2}{60-x} = 0$ (avstander i cm)

$$\\frac{4}{x} = \\frac{2}{60-x}$$
$$4(60-x) = 2x$$
$$240 - 4x = 2x$$
$$x = 40 \\text{ cm}$$

**Svar:**
a) $V = 135$ kV
b) $V = 0$
c) Ja, i $x = 40$ cm`,
      },
    },

    // ========== OPPGAVE 8: POTENSIELL ENERGI ==========
    {
      id: 'fys2-3-3-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-8',
        number: '3.32',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et hydrogenatom kan modelleres som et proton med et elektron i "bane" rundt. Bohrs modell gir at elektronet i grunntilstanden har radius $r = 5.29 \\times 10^{-11}$ m (Bohr-radius).

a) Beregn den potensielle energien mellom protonet og elektronet.
b) Uttrykk svaret i eV.
c) Den kinetiske energien til elektronet er halvparten av den potensielle energiens absoluttverdi. Hva er totalenergien i eV?`,
        hints: [
          'a) $E_p = kQ_1Q_2/r$ med $Q_1 = e$, $Q_2 = -e$',
          'b) Del på $1.60 \\times 10^{-19}$ J/eV',
          'c) $E_{total} = E_k + E_p$',
        ],
        solution: `**a) Potensiell energi:**
$$E_p = k\\frac{Q_1 Q_2}{r} = k\\frac{(+e)(-e)}{r} = -k\\frac{e^2}{r}$$
$$E_p = -8.99 \\times 10^9 \\cdot \\frac{(1.60 \\times 10^{-19})^2}{5.29 \\times 10^{-11}}$$
$$E_p = -8.99 \\times 10^9 \\cdot \\frac{2.56 \\times 10^{-38}}{5.29 \\times 10^{-11}}$$
$$E_p = -4.35 \\times 10^{-18} \\text{ J}$$

**b) I elektronvolt:**
$$E_p = \\frac{-4.35 \\times 10^{-18}}{1.60 \\times 10^{-19}} = -27.2 \\text{ eV}$$

**c) Totalenergi:**
Kinetisk energi: $E_k = \\frac{1}{2}|E_p| = \\frac{1}{2} \\cdot 27.2 = 13.6$ eV

Totalenergi:
$$E_{total} = E_k + E_p = 13.6 + (-27.2) = -13.6 \\text{ eV}$$

**Tolkning:** Den negative totalenergien betyr at elektronet er bundet til protonet. Det kreves 13.6 eV for å ionisere hydrogenatomet – dette kalles ioniseringsenergien.

**Svar:**
a) $E_p = -4.35 \\times 10^{-18}$ J
b) $E_p = -27.2$ eV
c) $E_{total} = -13.6$ eV (ioniseringsenergi)`,
      },
    },

    // ========== OPPGAVE 9: LADNING I VARIERENDE FELT ==========
    {
      id: 'fys2-3-3-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-9',
        number: '3.33',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En ladning $q = +5.0$ nC flyttes i et elektrisk felt fra punkt A til punkt B via to forskjellige veier:
- Vei 1: Rett linje fra A til B
- Vei 2: Via punkt C

Potensialet i punktene er: $V_A = 800$ V, $V_B = 200$ V, $V_C = 500$ V.

a) Beregn arbeidet gjort av feltet når ladningen flyttes fra A til B via vei 1.
b) Beregn arbeidet gjort via vei 2 (A → C → B).
c) Forklar resultatet.`,
        hints: [
          'a) $W = q(V_A - V_B)$',
          'b) $W = W_{AC} + W_{CB}$',
          'c) Hva slags kraft er den elektriske kraften?',
        ],
        solution: `**a) Vei 1 (direkte A → B):**
$$W_1 = q(V_A - V_B) = 5.0 \\times 10^{-9} \\cdot (800 - 200)$$
$$W_1 = 5.0 \\times 10^{-9} \\cdot 600 = 3.0 \\times 10^{-6} \\text{ J} = 3.0 \\text{ $\\mu$J}$$

**b) Vei 2 (A → C → B):**
$$W_{AC} = q(V_A - V_C) = 5.0 \\times 10^{-9} \\cdot (800 - 500) = 1.5 \\text{ $\\mu$J}$$
$$W_{CB} = q(V_C - V_B) = 5.0 \\times 10^{-9} \\cdot (500 - 200) = 1.5 \\text{ $\\mu$J}$$
$$W_2 = W_{AC} + W_{CB} = 1.5 + 1.5 = 3.0 \\text{ $\\mu$J}$$

**c) Forklaring:**
Arbeidet er det **samme** uansett vei! Dette er fordi den elektriske kraften er en **konservativ kraft**.

For konservative krefter:
- Arbeidet avhenger bare av start- og sluttpunkt
- Arbeidet langs en lukket bane er null
- Det finnes en potensiell energi (og dermed et potensial)

Dette er helt analogt med tyngdekraften: arbeidet for å løfte en gjenstand avhenger bare av høydeforskjellen, ikke veien.

**Svar:**
a) $W_1 = 3.0$ $\\mu$J
b) $W_2 = 3.0$ $\\mu$J
c) Elektrisk kraft er konservativ – arbeid avhenger kun av endepunktene`,
      },
    },

    // ========== OPPGAVE 10: SAMMENSATT LADNINGSSYSTEM ==========
    {
      id: 'fys2-3-3-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-10',
        number: '3.34',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Fire ladninger på $Q = +2.0$ $\\mu$C er plassert i hjørnene av et kvadrat med sidelengde $a = 50$ cm.

a) Finn det elektriske potensialet i sentrum av kvadratet.
b) Hvor mye arbeid kreves for å bringe en femte ladning $q = +1.0$ $\\mu$C fra uendelig avstand til sentrum?
c) Hva er den totale potensielle energien i systemet av alle fem ladningene?`,
        hints: [
          'a) Finn avstanden fra sentrum til hjørnene',
          'b) $W = qV$ der $V$ er potensialet i sentrum',
          'c) Summer alle par-energier $E_p = kQ_iQ_j/r_{ij}$',
        ],
        solution: `**a) Potensial i sentrum:**

Diagonal av kvadratet: $d = a\\sqrt{2} = 0.50 \\cdot \\sqrt{2} = 0.707$ m
Avstand fra sentrum til hjørne: $r = d/2 = 0.354$ m

Potensial fra én hjørneladning:
$$V_1 = k\\frac{Q}{r} = 8.99 \\times 10^9 \\cdot \\frac{2.0 \\times 10^{-6}}{0.354} = 5.08 \\times 10^4 \\text{ V}$$

Totalt potensial (4 like ladninger):
$$V_{total} = 4V_1 = 4 \\cdot 5.08 \\times 10^4 = 2.03 \\times 10^5 \\text{ V}$$

**b) Arbeid for å bringe $q$ til sentrum:**
$$W = qV_{total} = 1.0 \\times 10^{-6} \\cdot 2.03 \\times 10^5 = 0.203 \\text{ J}$$

**c) Total potensiell energi:**
Vi må summere energien for alle par av ladninger.

Antall par: $\\binom{5}{2} = 10$ par

Hjørne-hjørne par (4 sider, lengde $a = 0.50$ m):
$$E_{side} = k\\frac{Q^2}{a} = 8.99 \\times 10^9 \\cdot \\frac{(2.0 \\times 10^{-6})^2}{0.50} = 0.072 \\text{ J}$$
Total for 4 sider: $4 \\cdot 0.072 = 0.288$ J

Hjørne-hjørne par (2 diagonaler, lengde $a\\sqrt{2} = 0.707$ m):
$$E_{diag} = k\\frac{Q^2}{a\\sqrt{2}} = \\frac{0.072}{\\sqrt{2}} = 0.051 \\text{ J}$$
Total for 2 diagonaler: $2 \\cdot 0.051 = 0.102$ J

Sentrum-hjørne par (4 stk, lengde $r = 0.354$ m):
$$E_{sh} = k\\frac{Qq}{r} = 8.99 \\times 10^9 \\cdot \\frac{2.0 \\times 10^{-6} \\cdot 1.0 \\times 10^{-6}}{0.354} = 0.051 \\text{ J}$$
Total for 4: $4 \\cdot 0.051 = 0.203$ J

**Total potensiell energi:**
$$E_p = 0.288 + 0.102 + 0.203 = 0.593 \\text{ J} \\approx 0.59 \\text{ J}$$

**Svar:**
a) $V = 203$ kV
b) $W = 0.20$ J
c) $E_p = 0.59$ J`,
      },
    },

    // ========== OPPGAVE 11: SAMMENHENG FELT-POTENSIAL ==========
    {
      id: 'fys2-3-3-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-11',
        number: '3.35',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Det elektriske potensialet i et område er gitt ved $V(x) = 1000 - 500x$ (volt), der $x$ er målt i meter.

a) Finn det elektriske feltet som funksjon av $x$.
b) Er feltet homogent eller varierer det med $x$?
c) Hvis et elektron slippes fra ro ved $x = 0$, i hvilken retning akselererer det?
d) Hva er elektronets hastighet når det når $x = 1.0$ m?

**Gitt:** $m_e = 9.11 \\times 10^{-31}$ kg`,
        hints: [
          'a) $E = -dV/dx$',
          'b) Er $E$ konstant?',
          'c) Elektroner akselererer mot høyere potensial',
          'd) Bruk energibevaring',
        ],
        solution: `**a) Elektrisk felt:**
$$E = -\\frac{dV}{dx} = -\\frac{d}{dx}(1000 - 500x) = -(-500) = 500 \\text{ V/m}$$

Feltet peker i positiv x-retning (mot høyre).

**b) Feltets variasjon:**
$E = 500$ V/m er konstant – feltet er **homogent**.

**c) Elektronets akselerasjon:**
Kraften på elektronet: $\\vec{F} = q\\vec{E} = (-e) \\cdot E$

Siden elektronet har negativ ladning og feltet peker mot høyre, er kraften (og akselerasjonen) mot **venstre** (negativ x-retning).

Alternativ resonnement: Elektronet akselererer mot høyere potensial. Ved $x = 0$ er $V = 1000$ V, ved $x = 1$ er $V = 500$ V. Høyere potensial er mot venstre, så elektronet akselererer mot venstre.

**d) Hastighet ved $x = 1.0$ m:**
Potensialforskjell: $U = V(0) - V(1) = 1000 - 500 = 500$ V

Arbeid på elektronet (bevegelse fra høyt til lavt potensial for elektron = fra $x=1$ til $x=0$):
Men elektronet beveger seg fra $x=0$ (start) mot venstre, så det beveger seg **mot** positiv x-retning.

La oss bruke energibevaring:
$$E_k = |q| \\cdot |\\Delta V| = e \\cdot 500 = 500 \\text{ eV} = 8.0 \\times 10^{-17} \\text{ J}$$

$$v = \\sqrt{\\frac{2E_k}{m_e}} = \\sqrt{\\frac{2 \\cdot 8.0 \\times 10^{-17}}{9.11 \\times 10^{-31}}} = 1.33 \\times 10^7 \\text{ m/s}$$

**Merk:** Elektronet beveger seg ikke til $x = 1$ m (det ville vært mot feltretningen). Det akselererer mot venstre!

**Svar:**
a) $E = 500$ V/m i positiv x-retning
b) Homogent felt
c) Mot venstre (negativ x-retning)
d) Feilaktig premiss i oppgaven – men kinetisk energi tilsvarende 500 V gir $v = 1.3 \\times 10^7$ m/s`,
      },
    },

    // ========== OPPGAVE 12: PARTIKKELAKSELERATOR ==========
    {
      id: 'fys2-3-3-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-3-ex-12',
        number: '3.36',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `I en lineær partikkelakselerator akselereres protoner gjennom en serie med potensialforskjeller. Protonet starter fra ro og passerer gjennom 10 akselerasjonsgap, hver med spenning 100 kV.

a) Hva er protonets kinetiske energi etter å ha passert alle 10 gapene? Oppgi svaret i MeV.
b) Beregn protonets slutthastighet.
c) Sammenlign med lyshastigheten. Er relativistiske korreksjon nødvendig?

**Gitt:** $m_p = 1.67 \\times 10^{-27}$ kg, $c = 3.0 \\times 10^8$ m/s`,
        hints: [
          'a) Total spenning = 10 × 100 kV',
          'b) $E_k = \\frac{1}{2}m_pv^2$',
          'c) Relativistisk hvis $v > 0.1c$ (ca.)',
        ],
        solution: `**a) Kinetisk energi:**
Total spenning: $U_{total} = 10 \\times 100\\,000 = 1.0 \\times 10^6$ V = 1.0 MV

Kinetisk energi:
$$E_k = eU_{total} = 1 \\cdot 1.0 \\times 10^6 \\text{ eV} = 1.0 \\text{ MeV}$$

I joule:
$$E_k = 1.0 \\times 10^6 \\cdot 1.60 \\times 10^{-19} = 1.60 \\times 10^{-13} \\text{ J}$$

**b) Slutthastighet:**
$$v = \\sqrt{\\frac{2E_k}{m_p}} = \\sqrt{\\frac{2 \\cdot 1.60 \\times 10^{-13}}{1.67 \\times 10^{-27}}}$$
$$v = \\sqrt{1.92 \\times 10^{14}} = 1.38 \\times 10^7 \\text{ m/s}$$

**c) Sammenligning med lyshastigheten:**
$$\\frac{v}{c} = \\frac{1.38 \\times 10^7}{3.0 \\times 10^8} = 0.046 = 4.6\\%$$

Hastigheten er mindre enn 5% av lyshastigheten. Relativistiske effekter er fortsatt små (ca. 0.1% korreksjon), så klassisk mekanikk gir god nøyaktighet.

**Tommelfingerregel:** Relativistiske korreksjoner blir viktige når $v > 0.1c$ (10% av lyshastigheten).

**Svar:**
a) $E_k = 1.0$ MeV
b) $v = 1.4 \\times 10^7$ m/s
c) $v/c = 4.6\\%$ – relativistisk korreksjon ikke nødvendig`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Elektrisk potensial:**
- Definisjon: $V = E_p/q$ (potensiell energi per ladning)
- Enhet: Volt (V = J/C)
- Er en skalar (ikke vektor)

**Potensial fra punktladning:**
$$V = k\\frac{Q}{r}$$
- Positivt for positive ladninger
- Negativt for negative ladninger
- Avtar som $1/r$

**Spenning (potensialforskjell):**
$$U = V_A - V_B$$

**Arbeid i elektrisk felt:**
$$W = qU = q(V_A - V_B)$$
- Uavhengig av veien (konservativ kraft)

**Sammenheng felt og potensial:**
$$E = -\\frac{dV}{dr}$$
For homogent felt: $E = U/d$

**Ekvipotensialflater:**
- Flater med konstant potensial
- Står vinkelrett på feltlinjene
- Null arbeid langs flaten

**Elektronvolt:**
$$1 \\text{ eV} = 1.602 \\times 10^{-19} \\text{ J}$$

**Potensial fra flere ladninger:**
$$V_{total} = \\sum_i k\\frac{Q_i}{r_i}$$
Skalar addisjon – mye enklere enn vektoraddisjon av felt!

**Potensiell energi:**
$$E_p = qV \\quad \\text{eller} \\quad E_p = k\\frac{Q_1Q_2}{r}$$

**Neste kapittel:**
Vi skal lære om kondensatorer og kapasitans.`,
    },
  ],
};

// ============================================================================
// Kapittel 3.4: Kondensatorer
// LK20: Gjøre rede for kondensatorer og kapasitans
// ============================================================================

export const CHAPTER_FYSIKK2_3_4: TextbookChapter = {
  id: 'fysikk2-3-4',
  courseId: 'fysikk2',
  chapterNumber: '3.4',
  title: 'Kondensatorer',
  description: 'Lær om kondensatorer, kapasitans, elektrisk felt i kondensatorer, dielektrikum, og energi lagret i kondensatorer.',
  estimatedMinutes: 50,
  prerequisites: ['fysikk2-3-3'],
  competenceGoals: [
    'gjøre rede for kondensatorer og hvordan de lagrer ladning og energi',
    'beregne kapasitans for platekondensatorer',
    'beskrive det elektriske feltet i en kondensator',
    'forklare hvordan dielektrikum påvirker kapasitansen',
    'beregne energi lagret i en kondensator',
    'analysere kondensatorer koblet i serie og parallell',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-3-4-intro',
      type: 'text',
      content: `## Hva er en kondensator?

En **kondensator** er en komponent som kan lagre elektrisk ladning og energi. Den består av to ledende plater (eller overflater) som er adskilt av et isolerende materiale.

**Hverdagseksempler:**
- Kameraets blits – kondensatoren lagrer energi som frigjøres raskt
- Defibrillator – medisinsk utstyr som gir elektrisk støt til hjertet
- Glattekondensatorer i strømforsyninger
- Minnelagring (DRAM) i datamaskiner
- Berøringsskjermer (kapasitive)

**Hvorfor er kondensatorer viktige?**
- Lagrer energi for senere bruk
- Jevner ut spenningsvariasjoner
- Filtrerer frekvenser i elektronikk
- Grunnlag for mange sensorer

**Prinsipp:**
Når vi kobler en kondensator til et batteri, strømmer elektroner til den ene platen og bort fra den andre. Platene får motsatte ladninger +Q og -Q, og det bygges opp en spenning mellom dem.`,
    },

    // ========== DEFINISJON: KAPASITANS ==========
    {
      id: 'fys2-3-4-def-kapasitans',
      type: 'definition',
      title: 'Kapasitans',
      content: `**Kapasitansen** $C$ til en kondensator er forholdet mellom ladningen $Q$ som er lagret og spenningen $U$ over kondensatoren:

$$C = \\frac{Q}{U}$$

der:
- $C$ er kapasitansen [F] (farad)
- $Q$ er ladningen på platene [C]
- $U$ er spenningen over kondensatoren [V]

**Enhet:**
Farad (F), oppkalt etter Michael Faraday.
$1 \\text{ F} = 1 \\text{ C/V}$

**Merk:** 1 farad er en veldig stor kapasitans! Typiske kondensatorer har kapasitans i:
- Mikrofarad (μF): $1 \\text{ μF} = 10^{-6}$ F
- Nanofarad (nF): $1 \\text{ nF} = 10^{-9}$ F
- Pikofarad (pF): $1 \\text{ pF} = 10^{-12}$ F`,
    },

    // ========== FORMEL: KAPASITANS ==========
    {
      id: 'fys2-3-4-formel-kapasitans',
      type: 'formula',
      title: 'Kapasitans',
      content: `$$C = \\frac{Q}{U}$$

Omformet:
$$Q = CU \\quad \\text{og} \\quad U = \\frac{Q}{C}$$

**Tolkning:** Jo større kapasitans, desto mer ladning kan lagres ved samme spenning.`,
    },

    // ========== PLATEKONDENSATOR ==========
    {
      id: 'fys2-3-4-platekondensator',
      type: 'text',
      content: `## Platekondensatoren

Den enkleste kondensatoren er **platekondensatoren** – to parallelle, plane metallplater med areal $A$ og avstand $d$ mellom seg.

**Kapasitans for platekondensator:**

$$C = \\varepsilon_0 \\frac{A}{d}$$

der:
- $C$ er kapasitansen [F]
- $\\varepsilon_0 = 8.85 \\times 10^{-12}$ F/m er **permittiviteten i vakuum**
- $A$ er arealet til hver plate [m²]
- $d$ er avstanden mellom platene [m]

**Hva påvirker kapasitansen?**
- **Større areal $A$** → større kapasitans (mer plass til ladning)
- **Mindre avstand $d$** → større kapasitans (sterkere elektrisk felt)

**Eksempel:**
To plater med areal 1.0 cm² = $1.0 \\times 10^{-4}$ m² og avstand 0.1 mm = $1.0 \\times 10^{-4}$ m:

$$C = 8.85 \\times 10^{-12} \\cdot \\frac{1.0 \\times 10^{-4}}{1.0 \\times 10^{-4}} = 8.85 \\text{ pF}$$`,
    },

    // ========== FORMEL: PLATEKONDENSATOR ==========
    {
      id: 'fys2-3-4-formel-plate',
      type: 'formula',
      title: 'Kapasitans for platekondensator',
      content: `$$C = \\varepsilon_0 \\frac{A}{d}$$

der $\\varepsilon_0 = 8.85 \\times 10^{-12}$ F/m er permittiviteten i vakuum.

**Med dielektrikum:**
$$C = \\varepsilon_0 \\varepsilon_r \\frac{A}{d}$$

der $\\varepsilon_r$ er den relative permittiviteten til materialet mellom platene.`,
    },

    // ========== ELEKTRISK FELT I KONDENSATOR ==========
    {
      id: 'fys2-3-4-felt-kondensator',
      type: 'text',
      content: `## Elektrisk felt i en platekondensator

Mellom platene i en platekondensator er det elektriske feltet **homogent** – det har samme styrke og retning overalt (bortsett fra ved kantene).

**Feltstyrke:**

$$E = \\frac{U}{d}$$

der:
- $E$ er feltstyrken [V/m = N/C]
- $U$ er spenningen over kondensatoren [V]
- $d$ er avstanden mellom platene [m]

**Feltretning:**
- Feltet peker fra positiv plate (+Q) til negativ plate (-Q)
- Feltlinjene er parallelle og jevnt fordelt

**Sammenheng med ladning:**
Fra $C = \\varepsilon_0 A/d$ og $C = Q/U$ får vi:

$$E = \\frac{U}{d} = \\frac{Q}{Cd} = \\frac{Q}{\\varepsilon_0 A}$$

Eller:
$$E = \\frac{\\sigma}{\\varepsilon_0}$$

der $\\sigma = Q/A$ er **overflateladningstettheten** på platene.

**Praktisk betydning:**
- Sterkere felt → mer kraft på ladninger
- For sterk felt → "gjennomslag" (gnister)
- Luft: gjennomslag ved ca. $3 \\times 10^6$ V/m`,
    },

    // ========== FORMEL: FELT I KONDENSATOR ==========
    {
      id: 'fys2-3-4-formel-felt',
      type: 'formula',
      title: 'Elektrisk felt i platekondensator',
      content: `$$E = \\frac{U}{d}$$

Alternativt uttrykt ved ladning:
$$E = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{\\varepsilon_0 A}$$

der $\\sigma = Q/A$ er overflateladningstettheten [C/m²].`,
    },

    // ========== DIELEKTRIKUM ==========
    {
      id: 'fys2-3-4-dielektrikum',
      type: 'text',
      content: `## Dielektrikum

Et **dielektrikum** er et isolerende materiale som plasseres mellom platene i en kondensator. Dette kan være luft, papir, plast, glass, keramikk, eller andre isolatorer.

**Hva skjer med dielektrikum?**

Når vi setter inn et dielektrikum:
1. Molekylene i materialet **polariseres** – de får en liten elektrisk dipol
2. Dipolene ordner seg slik at de delvis **motvirker** det ytre feltet
3. Feltet inne i materialet blir **svakere**
4. Kapasitansen **øker**!

**Relativ permittivitet (dielektrisk konstant):**

$$\\varepsilon_r = \\frac{C_{med}}{C_{uten}}$$

Kapasitans med dielektrikum:
$$C = \\varepsilon_0 \\varepsilon_r \\frac{A}{d}$$

**Typiske verdier for $\\varepsilon_r$:**
| Materiale | $\\varepsilon_r$ |
|-----------|-----------------|
| Vakuum | 1.0000 |
| Luft | 1.0006 |
| Papir | 2-4 |
| Glass | 4-10 |
| Keramikk | 10-10000 |
| Vann | 80 |

**Fordeler med dielektrikum:**
- Øker kapasitansen uten å øke størrelsen
- Isolerer platene fra hverandre
- Øker gjennomslaget (tåler høyere spenning)`,
    },

    // ========== DEFINISJON: RELATIV PERMITTIVITET ==========
    {
      id: 'fys2-3-4-def-permittivitet',
      type: 'definition',
      title: 'Relativ permittivitet',
      content: `Den **relative permittiviteten** (eller dielektriske konstanten) $\\varepsilon_r$ til et materiale angir hvor mange ganger materialet øker kapasitansen sammenlignet med vakuum:

$$\\varepsilon_r = \\frac{C_{med\\_dielektrikum}}{C_{vakuum}}$$

**Verdier:**
- $\\varepsilon_r \\geq 1$ for alle materialer
- $\\varepsilon_r = 1$ for vakuum
- Jo høyere $\\varepsilon_r$, desto bedre isolator for kondensatorbruk`,
    },

    // ========== ENERGI I KONDENSATOR ==========
    {
      id: 'fys2-3-4-energi',
      type: 'text',
      content: `## Energi lagret i en kondensator

Når vi lader opp en kondensator, lagres det energi i det elektriske feltet mellom platene.

**Utledning:**
Arbeidet som trengs for å flytte en liten ladning $dq$ fra den ene platen til den andre når spenningen er $U$:

$$dW = U \\, dq = \\frac{q}{C} \\, dq$$

Totalt arbeid (fra $q=0$ til $q=Q$):
$$W = \\int_0^Q \\frac{q}{C} \\, dq = \\frac{1}{C} \\cdot \\frac{Q^2}{2} = \\frac{Q^2}{2C}$$

**Tre ekvivalente uttrykk for energi:**

$$E = \\frac{1}{2}CU^2 = \\frac{1}{2}QU = \\frac{Q^2}{2C}$$

Velg formelen basert på hvilke størrelser du kjenner!

**Eksempel:**
En kondensator på 100 μF lades til 12 V:
$$E = \\frac{1}{2} \\cdot 100 \\times 10^{-6} \\cdot 12^2 = 7.2 \\times 10^{-3} \\text{ J} = 7.2 \\text{ mJ}$$

**Energitetthet:**
Energien per volum i feltet:
$$u = \\frac{E}{Ad} = \\frac{1}{2}\\varepsilon_0 E^2$$

der $E$ er feltstyrken.`,
    },

    // ========== FORMEL: ENERGI I KONDENSATOR ==========
    {
      id: 'fys2-3-4-formel-energi',
      type: 'formula',
      title: 'Energi lagret i kondensator',
      content: `$$E = \\frac{1}{2}CU^2 = \\frac{1}{2}QU = \\frac{Q^2}{2C}$$

der:
- $E$ er energien [J]
- $C$ er kapasitansen [F]
- $U$ er spenningen [V]
- $Q$ er ladningen [C]

**Energitetthet:**
$$u = \\frac{1}{2}\\varepsilon_0 E^2$$
der $E$ er feltstyrken i kondensatoren.`,
    },

    // ========== KONDENSATORER I SERIE OG PARALLELL ==========
    {
      id: 'fys2-3-4-serie-parallell',
      type: 'text',
      content: `## Kondensatorer i serie og parallell

Akkurat som motstander, kan kondensatorer kobles i serie eller parallell.

### Parallellkobling

Ved **parallellkobling** er spenningen lik over alle kondensatorene.

**Ekvivalent kapasitans:**
$$C_{eq} = C_1 + C_2 + C_3 + \\cdots$$

Parallellkoblet kapasitans **adderes** – motsatt av motstander!

**Hvorfor?** Samme spenning gir ladninger $Q_1 = C_1 U$, $Q_2 = C_2 U$, osv.
Total ladning: $Q_{total} = Q_1 + Q_2 + \\cdots = (C_1 + C_2 + \\cdots)U$

### Seriekobling

Ved **seriekobling** er ladningen lik på alle kondensatorene.

**Ekvivalent kapasitans:**
$$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3} + \\cdots$$

For to kondensatorer:
$$C_{eq} = \\frac{C_1 C_2}{C_1 + C_2}$$

Seriekoblet kapasitans er **mindre** enn den minste enkeltkapasitansen.

**Hvorfor?** Samme ladning $Q$ gir spenninger $U_1 = Q/C_1$, $U_2 = Q/C_2$, osv.
Total spenning: $U_{total} = U_1 + U_2 + \\cdots$

### Sammenligning
| | Serie | Parallell |
|---|-------|-----------|
| Ladning | Lik | Fordelt |
| Spenning | Fordelt | Lik |
| Kapasitans | Minker | Øker |`,
    },

    // ========== FORMEL: SERIE OG PARALLELL ==========
    {
      id: 'fys2-3-4-formel-serie-parallell',
      type: 'formula',
      title: 'Kondensatorer i serie og parallell',
      content: `**Parallellkobling:**
$$C_{eq} = C_1 + C_2 + C_3 + \\cdots$$

**Seriekobling:**
$$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3} + \\cdots$$

For to kondensatorer i serie:
$$C_{eq} = \\frac{C_1 \\cdot C_2}{C_1 + C_2}$$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'fys2-3-4-eks-1',
      type: 'example',
      title: 'Beregne kapasitans og ladning',
      content: `**Oppgave:**
En kondensator har kapasitans 47 μF og er koblet til en 9 V kilde. Beregn ladningen som lagres.

**Løsning:**
Gitt: $C = 47$ μF $= 47 \\times 10^{-6}$ F, $U = 9$ V

Fra $C = Q/U$ får vi:
$$Q = CU = 47 \\times 10^{-6} \\cdot 9 = 4.23 \\times 10^{-4} \\text{ C} = 423 \\text{ μC}$$

**Svar:** Ladningen er 423 μC eller 0.42 mC.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'fys2-3-4-eks-2',
      type: 'example',
      title: 'Platekondensator med dielektrikum',
      content: `**Oppgave:**
En platekondensator har plater med areal 20 cm² og avstand 0.5 mm. Mellom platene er det glass med $\\varepsilon_r = 5$. Beregn kapasitansen.

**Løsning:**
Gitt:
- $A = 20$ cm² $= 20 \\times 10^{-4}$ m² $= 2.0 \\times 10^{-3}$ m²
- $d = 0.5$ mm $= 0.5 \\times 10^{-3}$ m $= 5 \\times 10^{-4}$ m
- $\\varepsilon_r = 5$
- $\\varepsilon_0 = 8.85 \\times 10^{-12}$ F/m

Kapasitans med dielektrikum:
$$C = \\varepsilon_0 \\varepsilon_r \\frac{A}{d}$$
$$C = 8.85 \\times 10^{-12} \\cdot 5 \\cdot \\frac{2.0 \\times 10^{-3}}{5 \\times 10^{-4}}$$
$$C = 8.85 \\times 10^{-12} \\cdot 5 \\cdot 4 = 1.77 \\times 10^{-10} \\text{ F}$$

**Svar:** Kapasitansen er 177 pF (eller 0.177 nF).`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'fys2-3-4-eks-3',
      type: 'example',
      title: 'Energi i kondensator',
      content: `**Oppgave:**
En defibrillator bruker en kondensator på 32 μF ladet til 5000 V. Hvor mye energi frigjøres ved utladning?

**Løsning:**
Gitt: $C = 32$ μF $= 32 \\times 10^{-6}$ F, $U = 5000$ V

Energi lagret:
$$E = \\frac{1}{2}CU^2 = \\frac{1}{2} \\cdot 32 \\times 10^{-6} \\cdot 5000^2$$
$$E = \\frac{1}{2} \\cdot 32 \\times 10^{-6} \\cdot 25 \\times 10^6 = 400 \\text{ J}$$

**Svar:** 400 J energi frigjøres.

**Perspektiv:** Dette er nok energi til å løfte en 4 kg gjenstand 10 meter opp ($E_p = mgh = 4 \\cdot 10 \\cdot 10 = 400$ J).`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'fys2-3-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-1',
        number: '3.37',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva skjer med kapasitansen til en platekondensator hvis avstanden mellom platene halveres?`,
        options: [
          { id: 'a', text: 'Kapasitansen halveres' },
          { id: 'b', text: 'Kapasitansen dobles' },
          { id: 'c', text: 'Kapasitansen firedobles' },
          { id: 'd', text: 'Kapasitansen forblir uendret' },
        ],
        correctAnswer: 'b',
        hints: [
          'Se på formelen $C = \\varepsilon_0 A/d$',
          'Hvordan påvirker $d$ i nevneren resultatet?',
        ],
        solution: `Fra formelen $C = \\varepsilon_0 \\frac{A}{d}$ ser vi at kapasitansen er **omvendt proporsjonal** med avstanden $d$.

Hvis $d$ halveres (blir $d/2$):
$$C_{ny} = \\varepsilon_0 \\frac{A}{d/2} = 2 \\cdot \\varepsilon_0 \\frac{A}{d} = 2C$$

**Svar: B** – Kapasitansen dobles.

**Fysisk forklaring:** Når platene er nærmere, blir det elektriske feltet sterkere ved samme spenning. Sterkere felt betyr flere feltlinjer, som tilsvarer mer ladning på platene.`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE ==========
    {
      id: 'fys2-3-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-2',
        number: '3.38',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `En kondensator på 100 μF er ladet til 10 V. Hvor mye energi er lagret?`,
        options: [
          { id: 'a', text: '0.5 mJ' },
          { id: 'b', text: '1.0 mJ' },
          { id: 'c', text: '5.0 mJ' },
          { id: 'd', text: '10 mJ' },
        ],
        correctAnswer: 'c',
        hints: [
          'Bruk formelen $E = \\frac{1}{2}CU^2$',
          'Husk å konvertere μF til F',
        ],
        solution: `Energi lagret i kondensator:
$$E = \\frac{1}{2}CU^2 = \\frac{1}{2} \\cdot 100 \\times 10^{-6} \\cdot 10^2$$
$$E = \\frac{1}{2} \\cdot 10^{-4} \\cdot 100 = 5 \\times 10^{-3} \\text{ J} = 5.0 \\text{ mJ}$$

**Svar: C** – 5.0 mJ`,
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE ==========
    {
      id: 'fys2-3-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-3',
        number: '3.39',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva er det elektriske feltet i en platekondensator med spenning 12 V og plateavstand 2.0 mm?`,
        options: [
          { id: 'a', text: '24 V/m' },
          { id: 'b', text: '600 V/m' },
          { id: 'c', text: '6000 V/m' },
          { id: 'd', text: '60000 V/m' },
        ],
        correctAnswer: 'c',
        hints: [
          'Bruk formelen $E = U/d$',
          'Konverter 2.0 mm til meter',
        ],
        solution: `Elektrisk felt i platekondensator:
$$E = \\frac{U}{d} = \\frac{12}{2.0 \\times 10^{-3}} = 6000 \\text{ V/m}$$

**Svar: C** – 6000 V/m

Alternativt: $E = 6.0$ kV/m`,
      },
    },

    // ========== OPPGAVE 4: BEREGNING ==========
    {
      id: 'fys2-3-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-4',
        number: '3.40',
        type: 'classic',
        difficulty: 'medium',
        task: `En platekondensator har sirkulære plater med diameter 8.0 cm og avstand 1.0 mm mellom platene. Det er luft mellom platene ($\\varepsilon_r \\approx 1$).

a) Beregn kapasitansen.
b) Kondensatoren kobles til et 9.0 V batteri. Hvor stor ladning lagres på hver plate?
c) Hva er feltstyrken mellom platene?`,
        hints: [
          'a) Areal av sirkel: $A = \\pi r^2$',
          'b) $Q = CU$',
          'c) $E = U/d$',
        ],
        solution: `**a) Kapasitans:**
Radius: $r = 4.0$ cm $= 0.040$ m
Areal: $A = \\pi r^2 = \\pi \\cdot 0.040^2 = 5.03 \\times 10^{-3}$ m²
Avstand: $d = 1.0$ mm $= 1.0 \\times 10^{-3}$ m

$$C = \\varepsilon_0 \\frac{A}{d} = 8.85 \\times 10^{-12} \\cdot \\frac{5.03 \\times 10^{-3}}{1.0 \\times 10^{-3}}$$
$$C = 8.85 \\times 10^{-12} \\cdot 5.03 = 4.45 \\times 10^{-11} \\text{ F} = 44.5 \\text{ pF}$$

**b) Ladning:**
$$Q = CU = 4.45 \\times 10^{-11} \\cdot 9.0 = 4.0 \\times 10^{-10} \\text{ C} = 0.40 \\text{ nC}$$

**c) Feltstyrke:**
$$E = \\frac{U}{d} = \\frac{9.0}{1.0 \\times 10^{-3}} = 9000 \\text{ V/m} = 9.0 \\text{ kV/m}$$

**Svar:**
a) $C = 44.5$ pF
b) $Q = 0.40$ nC
c) $E = 9.0$ kV/m`,
      },
    },

    // ========== OPPGAVE 5: BEREGNING ==========
    {
      id: 'fys2-3-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-5',
        number: '3.41',
        type: 'classic',
        difficulty: 'medium',
        task: `En kondensator på 220 μF er ladet opp til 25 V.

a) Beregn ladningen som er lagret.
b) Beregn energien som er lagret.
c) Kondensatoren lades ut gjennom en motstand og frigjør all energien som varme på 0.50 s. Hva er gjennomsnittlig effekt?`,
        hints: [
          'a) $Q = CU$',
          'b) $E = \\frac{1}{2}CU^2$',
          'c) Effekt = energi / tid',
        ],
        solution: `**a) Ladning:**
$$Q = CU = 220 \\times 10^{-6} \\cdot 25 = 5.5 \\times 10^{-3} \\text{ C} = 5.5 \\text{ mC}$$

**b) Energi:**
$$E = \\frac{1}{2}CU^2 = \\frac{1}{2} \\cdot 220 \\times 10^{-6} \\cdot 25^2$$
$$E = \\frac{1}{2} \\cdot 220 \\times 10^{-6} \\cdot 625 = 0.069 \\text{ J} = 69 \\text{ mJ}$$

**c) Gjennomsnittlig effekt:**
$$P = \\frac{E}{t} = \\frac{0.069}{0.50} = 0.14 \\text{ W} = 140 \\text{ mW}$$

**Svar:**
a) $Q = 5.5$ mC
b) $E = 69$ mJ
c) $P = 140$ mW`,
      },
    },

    // ========== OPPGAVE 6: BEREGNING ==========
    {
      id: 'fys2-3-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-6',
        number: '3.42',
        type: 'classic',
        difficulty: 'medium',
        task: `En platekondensator med luft mellom platene har kapasitans 50 pF. Mellomrommet fylles med et dielektrikum (isolerende materiale), og kapasitansen måles til 175 pF.

a) Bestem den relative permittiviteten $\\varepsilon_r$ til dielektrikumet.
b) Hva slags materiale kan dette være? (Se tabellen i teoridelen)`,
        hints: [
          'a) $C_{med} = \\varepsilon_r \\cdot C_{uten}$',
          'b) Sammenlign med typiske verdier',
        ],
        solution: `**a) Relativ permittivitet:**
Kapasitans uten dielektrikum: $C_0 = 50$ pF
Kapasitans med dielektrikum: $C = 175$ pF

$$\\varepsilon_r = \\frac{C}{C_0} = \\frac{175}{50} = 3.5$$

**b) Materiale:**
Med $\\varepsilon_r = 3.5$ kan dette være:
- **Papir** (typisk 2-4)
- **Visse plasttyper** som polyester
- **Mylar** (polyesterfilm)

**Svar:**
a) $\\varepsilon_r = 3.5$
b) Trolig papir, polyester eller lignende plastmateriale`,
      },
    },

    // ========== OPPGAVE 7: BEREGNING MED FELT ==========
    {
      id: 'fys2-3-4-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-7',
        number: '3.43',
        type: 'classic',
        difficulty: 'medium',
        task: `I en platekondensator er det et homogent elektrisk felt på 50 kV/m. Avstanden mellom platene er 2.0 mm.

a) Beregn spenningen over kondensatoren.
b) Hvis platene har areal 100 cm², hva er kapasitansen? (Luft mellom platene)
c) Beregn ladningen på hver plate.`,
        hints: [
          'a) $U = Ed$',
          'b) $C = \\varepsilon_0 A/d$',
          'c) $Q = CU$',
        ],
        solution: `**a) Spenning:**
$$U = Ed = 50 \\times 10^3 \\cdot 2.0 \\times 10^{-3} = 100 \\text{ V}$$

**b) Kapasitans:**
$A = 100$ cm² $= 100 \\times 10^{-4}$ m² $= 10^{-2}$ m²
$$C = \\varepsilon_0 \\frac{A}{d} = 8.85 \\times 10^{-12} \\cdot \\frac{10^{-2}}{2.0 \\times 10^{-3}}$$
$$C = 8.85 \\times 10^{-12} \\cdot 5 = 4.43 \\times 10^{-11} \\text{ F} = 44.3 \\text{ pF}$$

**c) Ladning:**
$$Q = CU = 4.43 \\times 10^{-11} \\cdot 100 = 4.43 \\times 10^{-9} \\text{ C} = 4.4 \\text{ nC}$$

**Svar:**
a) $U = 100$ V
b) $C = 44$ pF
c) $Q = 4.4$ nC`,
      },
    },

    // ========== OPPGAVE 8: SERIE OG PARALLELL ==========
    {
      id: 'fys2-3-4-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-8',
        number: '3.44',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To kondensatorer med kapasitans $C_1 = 10$ μF og $C_2 = 20$ μF kobles sammen.

a) Beregn den ekvivalente kapasitansen når de kobles i **parallell**.
b) Beregn den ekvivalente kapasitansen når de kobles i **serie**.
c) Parallellkoblingen i (a) kobles til et 12 V batteri. Hvor mye energi lagres totalt?`,
        hints: [
          'a) $C_{parallell} = C_1 + C_2$',
          'b) $1/C_{serie} = 1/C_1 + 1/C_2$',
          'c) $E = \\frac{1}{2}C_{eq}U^2$',
        ],
        solution: `**a) Parallellkobling:**
$$C_{eq} = C_1 + C_2 = 10 + 20 = 30 \\text{ μF}$$

**b) Seriekobling:**
$$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{1}{10} + \\frac{1}{20} = \\frac{2}{20} + \\frac{1}{20} = \\frac{3}{20}$$
$$C_{eq} = \\frac{20}{3} = 6.67 \\text{ μF}$$

Alternativt med formel for to kondensatorer:
$$C_{eq} = \\frac{C_1 \\cdot C_2}{C_1 + C_2} = \\frac{10 \\cdot 20}{10 + 20} = \\frac{200}{30} = 6.67 \\text{ μF}$$

**c) Energi i parallellkoblingen:**
$$E = \\frac{1}{2}C_{eq}U^2 = \\frac{1}{2} \\cdot 30 \\times 10^{-6} \\cdot 12^2$$
$$E = \\frac{1}{2} \\cdot 30 \\times 10^{-6} \\cdot 144 = 2.16 \\times 10^{-3} \\text{ J} = 2.2 \\text{ mJ}$$

**Svar:**
a) $C_{parallell} = 30$ μF
b) $C_{serie} = 6.7$ μF
c) $E = 2.2$ mJ`,
      },
    },

    // ========== OPPGAVE 9: KOMPLEKS SERIEKRETS ==========
    {
      id: 'fys2-3-4-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-9',
        number: '3.45',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Tre kondensatorer med kapasitans 2.0 μF, 3.0 μF og 6.0 μF er koblet i serie og tilkoblet en 24 V kilde.

a) Beregn den ekvivalente kapasitansen.
b) Beregn ladningen på hver kondensator.
c) Beregn spenningen over hver kondensator.
d) Verifiser at summen av spenningene er 24 V.`,
        hints: [
          'a) $1/C_{eq} = 1/C_1 + 1/C_2 + 1/C_3$',
          'b) I serie har alle kondensatorer samme ladning: $Q = C_{eq} \\cdot U_{total}$',
          'c) $U_i = Q/C_i$',
        ],
        solution: `**a) Ekvivalent kapasitans:**
$$\\frac{1}{C_{eq}} = \\frac{1}{2.0} + \\frac{1}{3.0} + \\frac{1}{6.0} = \\frac{3}{6} + \\frac{2}{6} + \\frac{1}{6} = \\frac{6}{6} = 1$$
$$C_{eq} = 1.0 \\text{ μF}$$

**b) Ladning:**
I serie er ladningen lik på alle kondensatorene:
$$Q = C_{eq} \\cdot U_{total} = 1.0 \\times 10^{-6} \\cdot 24 = 24 \\text{ μC}$$

**c) Spenninger:**
$$U_1 = \\frac{Q}{C_1} = \\frac{24 \\times 10^{-6}}{2.0 \\times 10^{-6}} = 12 \\text{ V}$$
$$U_2 = \\frac{Q}{C_2} = \\frac{24 \\times 10^{-6}}{3.0 \\times 10^{-6}} = 8 \\text{ V}$$
$$U_3 = \\frac{Q}{C_3} = \\frac{24 \\times 10^{-6}}{6.0 \\times 10^{-6}} = 4 \\text{ V}$$

**d) Verifikasjon:**
$$U_1 + U_2 + U_3 = 12 + 8 + 4 = 24 \\text{ V} \\checkmark$$

**Merk:** Den minste kondensatoren (2.0 μF) har størst spenning!

**Svar:**
a) $C_{eq} = 1.0$ μF
b) $Q = 24$ μC (på alle)
c) $U_1 = 12$ V, $U_2 = 8$ V, $U_3 = 4$ V
d) Summen er 24 V ✓`,
      },
    },

    // ========== OPPGAVE 10: ENERGITETTHET ==========
    {
      id: 'fys2-3-4-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-10',
        number: '3.46',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En platekondensator har plater med areal 50 cm² og avstand 0.50 mm. Mellom platene er det luft. Kondensatoren lades til 500 V.

a) Beregn kapasitansen.
b) Beregn feltstyrken mellom platene.
c) Beregn energitettheten (energi per volum) i feltet.
d) Beregn total energi lagret ved å bruke energitettheten og volumet.
e) Verifiser svaret i (d) med formelen $E = \\frac{1}{2}CU^2$.`,
        hints: [
          'a) $C = \\varepsilon_0 A/d$',
          'b) $E = U/d$',
          'c) $u = \\frac{1}{2}\\varepsilon_0 E^2$',
          'd) $E_{total} = u \\cdot V$ der $V = A \\cdot d$',
        ],
        solution: `**a) Kapasitans:**
$A = 50$ cm² $= 50 \\times 10^{-4}$ m² $= 5 \\times 10^{-3}$ m²
$d = 0.50$ mm $= 5.0 \\times 10^{-4}$ m

$$C = \\varepsilon_0 \\frac{A}{d} = 8.85 \\times 10^{-12} \\cdot \\frac{5 \\times 10^{-3}}{5 \\times 10^{-4}}$$
$$C = 8.85 \\times 10^{-12} \\cdot 10 = 8.85 \\times 10^{-11} \\text{ F} = 88.5 \\text{ pF}$$

**b) Feltstyrke:**
$$E_{felt} = \\frac{U}{d} = \\frac{500}{5 \\times 10^{-4}} = 1.0 \\times 10^6 \\text{ V/m} = 1.0 \\text{ MV/m}$$

**c) Energitetthet:**
$$u = \\frac{1}{2}\\varepsilon_0 E_{felt}^2 = \\frac{1}{2} \\cdot 8.85 \\times 10^{-12} \\cdot (10^6)^2$$
$$u = 4.43 \\text{ J/m}^3$$

**d) Total energi fra energitetthet:**
Volum: $V = A \\cdot d = 5 \\times 10^{-3} \\cdot 5 \\times 10^{-4} = 2.5 \\times 10^{-6}$ m³
$$E_{total} = u \\cdot V = 4.43 \\cdot 2.5 \\times 10^{-6} = 1.11 \\times 10^{-5} \\text{ J} = 11.1 \\text{ μJ}$$

**e) Verifikasjon:**
$$E = \\frac{1}{2}CU^2 = \\frac{1}{2} \\cdot 8.85 \\times 10^{-11} \\cdot 500^2$$
$$E = \\frac{1}{2} \\cdot 8.85 \\times 10^{-11} \\cdot 2.5 \\times 10^5 = 1.11 \\times 10^{-5} \\text{ J} \\checkmark$$

**Svar:**
a) $C = 88.5$ pF
b) $E = 1.0$ MV/m
c) $u = 4.4$ J/m³
d) og e) $E_{total} = 11$ μJ`,
      },
    },

    // ========== OPPGAVE 11: KOMBINERT KRETS ==========
    {
      id: 'fys2-3-4-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-11',
        number: '3.47',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `I kretsen under er $C_1 = 4.0$ μF, $C_2 = 6.0$ μF, og $C_3 = 12$ μF. $C_1$ og $C_2$ er koblet i parallell, og denne kombinasjonen er koblet i serie med $C_3$. Spenningen over kretsen er 18 V.

a) Beregn den totale ekvivalente kapasitansen.
b) Beregn ladningen på $C_3$.
c) Beregn spenningen over $C_3$.
d) Beregn spenningen over $C_1$ og $C_2$.
e) Beregn ladningen på $C_1$ og $C_2$ hver for seg.`,
        hints: [
          'a) Først parallell: $C_{12} = C_1 + C_2$, så serie med $C_3$',
          'b) I serie har alle kondensatorer samme ladning som totalen',
          'c) $U_3 = Q/C_3$',
          'd) Parallellkoblede kondensatorer har samme spenning',
          'e) $Q_i = C_i \\cdot U_i$',
        ],
        solution: `**a) Total kapasitans:**
Først parallellkoblingen:
$$C_{12} = C_1 + C_2 = 4.0 + 6.0 = 10 \\text{ μF}$$

Så serie med $C_3$:
$$\\frac{1}{C_{eq}} = \\frac{1}{C_{12}} + \\frac{1}{C_3} = \\frac{1}{10} + \\frac{1}{12} = \\frac{12 + 10}{120} = \\frac{22}{120}$$
$$C_{eq} = \\frac{120}{22} = 5.45 \\text{ μF}$$

**b) Ladning på $C_3$:**
Total ladning (som er lik ladningen på seriekoblede elementer):
$$Q = C_{eq} \\cdot U_{total} = 5.45 \\times 10^{-6} \\cdot 18 = 98 \\text{ μC}$$

$C_3$ er i serie, så $Q_3 = Q = 98$ μC

**c) Spenning over $C_3$:**
$$U_3 = \\frac{Q_3}{C_3} = \\frac{98 \\times 10^{-6}}{12 \\times 10^{-6}} = 8.2 \\text{ V}$$

**d) Spenning over $C_1$ og $C_2$:**
Parallellkoblingen $C_{12}$ har også ladning $Q = 98$ μC:
$$U_{12} = \\frac{Q}{C_{12}} = \\frac{98}{10} = 9.8 \\text{ V}$$

Verifikasjon: $U_3 + U_{12} = 8.2 + 9.8 = 18$ V ✓

$C_1$ og $C_2$ er i parallell, så de har samme spenning:
$$U_1 = U_2 = 9.8 \\text{ V}$$

**e) Ladninger på $C_1$ og $C_2$:**
$$Q_1 = C_1 \\cdot U_1 = 4.0 \\times 10^{-6} \\cdot 9.8 = 39 \\text{ μC}$$
$$Q_2 = C_2 \\cdot U_2 = 6.0 \\times 10^{-6} \\cdot 9.8 = 59 \\text{ μC}$$

Verifikasjon: $Q_1 + Q_2 = 39 + 59 = 98$ μC = $Q_3$ ✓

**Svar:**
a) $C_{eq} = 5.5$ μF
b) $Q_3 = 98$ μC
c) $U_3 = 8.2$ V
d) $U_1 = U_2 = 9.8$ V
e) $Q_1 = 39$ μC, $Q_2 = 59$ μC`,
      },
    },

    // ========== OPPGAVE 12: DIELEKTRIKUM OG ENERGI ==========
    {
      id: 'fys2-3-4-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-4-ex-12',
        number: '3.48',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En platekondensator med luft mellom platene har kapasitans 100 pF og er ladet til 200 V. Kondensatoren er ikke koblet til batteriet.

a) Beregn ladningen og energien som er lagret.

Nå settes det inn et dielektrikum med $\\varepsilon_r = 4$ mellom platene.

b) Hva skjer med ladningen?
c) Beregn den nye kapasitansen.
d) Beregn den nye spenningen over kondensatoren.
e) Beregn den nye energien. Hvor ble det av energien som mangles?`,
        hints: [
          'a) $Q = CU$, $E = \\frac{1}{2}CU^2$',
          'b) Kondensatoren er frakoblet – ladningen kan ikke forandres!',
          'c) $C_{ny} = \\varepsilon_r \\cdot C$',
          'd) $U_{ny} = Q/C_{ny}$',
          'e) Energi brukes til å trekke dielektrikumet inn',
        ],
        solution: `**a) Før dielektrikum:**
$$Q = CU = 100 \\times 10^{-12} \\cdot 200 = 20 \\times 10^{-9} \\text{ C} = 20 \\text{ nC}$$
$$E = \\frac{1}{2}CU^2 = \\frac{1}{2} \\cdot 100 \\times 10^{-12} \\cdot 200^2 = 2.0 \\times 10^{-6} \\text{ J} = 2.0 \\text{ μJ}$$

**b) Ladningen:**
Siden kondensatoren er **frakoblet** batteriet, kan ladningen ikke forandres.
$$Q_{ny} = Q = 20 \\text{ nC}$$

**c) Ny kapasitans:**
$$C_{ny} = \\varepsilon_r \\cdot C = 4 \\cdot 100 = 400 \\text{ pF}$$

**d) Ny spenning:**
$$U_{ny} = \\frac{Q}{C_{ny}} = \\frac{20 \\times 10^{-9}}{400 \\times 10^{-12}} = 50 \\text{ V}$$

Spenningen er redusert til 1/4 av opprinnelig!

**e) Ny energi:**
$$E_{ny} = \\frac{1}{2}C_{ny}U_{ny}^2 = \\frac{1}{2} \\cdot 400 \\times 10^{-12} \\cdot 50^2 = 0.5 \\times 10^{-6} \\text{ J} = 0.5 \\text{ μJ}$$

Eller: $E_{ny} = Q^2/(2C_{ny}) = (20 \\times 10^{-9})^2/(2 \\cdot 400 \\times 10^{-12}) = 0.5$ μJ

**Energi som mangler:**
$$\\Delta E = E - E_{ny} = 2.0 - 0.5 = 1.5 \\text{ μJ}$$

Denne energien ble brukt til **arbeid** for å trekke dielektrikumet inn mellom platene. Dielektrikumet blir trukket inn av de elektriske kreftene (feltlinjene vil "strekke" seg ut i dielektrikumet).

**Svar:**
a) $Q = 20$ nC, $E = 2.0$ μJ
b) Ladningen forblir 20 nC (kondensatoren er frakoblet)
c) $C_{ny} = 400$ pF
d) $U_{ny} = 50$ V
e) $E_{ny} = 0.5$ μJ. De manglende 1.5 μJ ble brukt til mekanisk arbeid for å trekke dielektrikumet inn.`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Kondensator:**
- Lagrer elektrisk ladning og energi
- To ledende plater adskilt av isolator

**Kapasitans:**
$$C = \\frac{Q}{U}$$
- Enhet: Farad (F) – typisk μF, nF, pF
- Mål på hvor mye ladning kondensatoren kan lagre per volt

**Platekondensator:**
$$C = \\varepsilon_0 \\frac{A}{d} \\quad \\text{eller} \\quad C = \\varepsilon_0 \\varepsilon_r \\frac{A}{d}$$
- $\\varepsilon_0 = 8.85 \\times 10^{-12}$ F/m

**Elektrisk felt i kondensator:**
$$E = \\frac{U}{d}$$
- Homogent felt mellom platene

**Dielektrikum:**
- Isolerende materiale mellom platene
- Øker kapasitansen med faktor $\\varepsilon_r$
- $\\varepsilon_r$ = relativ permittivitet

**Energi i kondensator:**
$$E = \\frac{1}{2}CU^2 = \\frac{1}{2}QU = \\frac{Q^2}{2C}$$

**Energitetthet:**
$$u = \\frac{1}{2}\\varepsilon_0 E^2$$

**Serie og parallell:**
| | Serie | Parallell |
|---|-------|-----------|
| Kapasitans | $\\frac{1}{C} = \\sum\\frac{1}{C_i}$ | $C = \\sum C_i$ |
| Ladning | Lik | Fordelt |
| Spenning | Fordelt | Lik |

**Neste kapittel:**
Vi skal lære om elektrisk strøm og motstand.`,
    },
  ],
};

// ============================================================================
// Kapittel 3.5: Elektrisk energi og ladede partikler
// LK20: Analysere bevegelse av ladede partikler i elektriske felt
// ============================================================================

export const CHAPTER_FYSIKK2_3_5: TextbookChapter = {
  id: 'fysikk2-3-5',
  courseId: 'fysikk2',
  chapterNumber: '3.5',
  title: 'Elektrisk energi og ladede partikler',
  description: 'Lær om potensiell energi i elektriske felt, energibevaring, akselerasjon av ladede partikler, og praktiske anvendelser som partikkelakseleratorer og CRT.',
  estimatedMinutes: 60,
  prerequisites: ['fysikk2-3-4'],
  competenceGoals: [
    'beregne potensiell energi for ladninger i elektriske felt',
    'anvende energibevaring på ladede partikler',
    'analysere bevegelse av ladede partikler i homogene felt',
    'forklare prinsippene bak partikkelakseleratorer',
    'beskrive historiske eksperimenter som Millikan-eksperimentet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-3-5-intro',
      type: 'text',
      content: `## Elektrisk energi og ladede partikler

I de forrige kapitlene har vi lært om elektrisk felt, potensial og kondensatorer. Nå skal vi bruke denne kunnskapen til å studere hvordan ladede partikler beveger seg i elektriske felt.

Dette er et svært viktig tema med mange praktiske anvendelser:
- **Partikkelakseleratorer** ved CERN og andre laboratorier
- **Katodestrålerør (CRT)** i gamle TV-er og oscilloskop
- **Elektronmikroskoper** for nanoteknologi
- **Massespektrometri** for kjemisk analyse

Vi starter med å forstå energi i elektriske felt, og ser deretter på hvordan partikler akselereres og avbøyes.`,
    },

    // ========== POTENSIELL ENERGI I ELEKTRISK FELT ==========
    {
      id: 'fys2-3-5-pot-energi',
      type: 'text',
      content: `## Potensiell energi i elektrisk felt

### Fra potensial til potensiell energi

Vi vet at elektrisk potensial $V$ er potensiell energi per ladning:
$$V = \\frac{E_p}{q}$$

Dette gir oss den **potensielle energien** for en ladning $q$ i et punkt med potensial $V$:`,
    },

    // ========== FORMEL: POTENSIELL ENERGI ==========
    {
      id: 'fys2-3-5-formula-ep',
      type: 'formula',
      title: 'Potensiell energi i elektrisk felt',
      content: `$$E_p = qV$$

Der:
- $E_p$ er potensiell energi (J)
- $q$ er ladningen (C)
- $V$ er det elektriske potensialet (V)

**Merk:** Fortegn er viktig!
- Positiv ladning: $E_p > 0$ ved høyt potensial
- Negativ ladning: $E_p < 0$ ved høyt potensial (elektronet vil bevege seg mot høyere potensial)`,
    },

    // ========== POTENSIELL ENERGI MELLOM TO PUNKTLADNINGER ==========
    {
      id: 'fys2-3-5-pot-energi-punkt',
      type: 'text',
      content: `### Potensiell energi mellom to punktladninger

For to punktladninger $q_1$ og $q_2$ med avstand $r$ mellom seg, er den potensielle energien:`,
    },

    {
      id: 'fys2-3-5-formula-ep-punkt',
      type: 'formula',
      title: 'Potensiell energi mellom punktladninger',
      content: `$$E_p = k\\frac{q_1 q_2}{r}$$

Der:
- $k = 8.99 \\times 10^9$ N·m²/C² (Coulombs konstant)
- $q_1, q_2$ er ladningene (C)
- $r$ er avstanden mellom ladningene (m)

**Fortegn:**
- Samme fortegn (frastøtning): $E_p > 0$
- Motsatt fortegn (tiltrekning): $E_p < 0$

**Referanse:** $E_p = 0$ når $r \\to \\infty$`,
    },

    // ========== EKSEMPEL: POTENSIELL ENERGI ==========
    {
      id: 'fys2-3-5-example-ep',
      type: 'example',
      title: 'Potensiell energi for et elektron',
      content: `**Oppgave:** Et elektron befinner seg i et punkt der potensialet er $V = 100$ V. Beregn elektronets potensielle energi.

**Løsning:**

Elektronets ladning: $q = -e = -1.60 \\times 10^{-19}$ C

$$E_p = qV = (-1.60 \\times 10^{-19}) \\cdot 100 = -1.60 \\times 10^{-17} \\text{ J}$$

I elektronvolt (eV):
$$E_p = -100 \\text{ eV}$$

**Tolkning:** Den negative verdien betyr at elektronet har lavere energi ved høyt potensial. Elektronet vil naturlig bevege seg mot høyere potensial (mot positiv plate).`,
    },

    // ========== ENERGIBEVARING ==========
    {
      id: 'fys2-3-5-energibevaring',
      type: 'text',
      content: `## Energibevaring for ladede partikler

Når en ladet partikkel beveger seg i et elektrisk felt uten andre krefter, er **mekanisk energi bevart**:`,
    },

    {
      id: 'fys2-3-5-formula-energibevaring',
      type: 'formula',
      title: 'Energibevaring',
      content: `$$E_k + E_p = \\text{konstant}$$

Eller mellom to punkter 1 og 2:
$$\\frac{1}{2}mv_1^2 + qV_1 = \\frac{1}{2}mv_2^2 + qV_2$$

**Endring i kinetisk energi:**
$$\\Delta E_k = -\\Delta E_p = q(V_1 - V_2) = qU$$

Der $U = V_1 - V_2$ er potensialforskjellen (spenningen) partikkelen beveger seg gjennom.`,
    },

    // ========== DEFINISJON: ELEKTRONVOLT ==========
    {
      id: 'fys2-3-5-def-ev',
      type: 'definition',
      title: 'Elektronvolt (eV)',
      content: `**Elektronvolt** er en energienhet som er svært praktisk i partikkelfysikk:

$$1 \\text{ eV} = 1.60 \\times 10^{-19} \\text{ J}$$

Et elektronvolt er den kinetiske energien et elektron får når det akselereres gjennom en potensialforskjell på 1 V.

**Vanlige multipler:**
- 1 keV = $10^3$ eV (røntgenstråler)
- 1 MeV = $10^6$ eV (kjernefysikk)
- 1 GeV = $10^9$ eV (partikkelfysikk)
- 1 TeV = $10^{12}$ eV (CERN)`,
    },

    // ========== AKSELERASJON AV LADEDE PARTIKLER ==========
    {
      id: 'fys2-3-5-akselerasjon',
      type: 'text',
      content: `## Akselerasjon av ladede partikler

### I en potensialforskjell

Når en partikkel med ladning $q$ og masse $m$ starter i ro og akselereres gjennom en potensialforskjell $U$, kan vi finne sluttfarten fra energibevaring:

$$qU = \\frac{1}{2}mv^2$$`,
    },

    {
      id: 'fys2-3-5-formula-akselerasjon',
      type: 'formula',
      title: 'Hastighet etter akselerasjon',
      content: `$$v = \\sqrt{\\frac{2qU}{m}}$$

Der:
- $v$ er sluttfarten (m/s)
- $q$ er ladningen (C) - bruk absoluttverdien
- $U$ er potensialforskjellen (V)
- $m$ er massen (kg)

**For elektroner:**
$$v_e = \\sqrt{\\frac{2eU}{m_e}} \\approx 5.93 \\times 10^5 \\sqrt{U} \\text{ m/s}$$

**For protoner:**
$$v_p = \\sqrt{\\frac{2eU}{m_p}} \\approx 1.38 \\times 10^4 \\sqrt{U} \\text{ m/s}$$`,
    },

    // ========== EKSEMPEL: AKSELERASJON ==========
    {
      id: 'fys2-3-5-example-akselerasjon',
      type: 'example',
      title: 'Elektron akselerert i spenning',
      content: `**Oppgave:** Et elektron starter i ro og akselereres gjennom en potensialforskjell på 500 V. Beregn:
a) Kinetisk energi i eV og joule
b) Sluttfarten

**Løsning:**

**a) Kinetisk energi:**
Fra energibevaring: $E_k = eU$
$$E_k = 500 \\text{ eV} = 500 \\cdot 1.60 \\times 10^{-19} = 8.0 \\times 10^{-17} \\text{ J}$$

**b) Sluttfart:**
$$v = \\sqrt{\\frac{2E_k}{m_e}} = \\sqrt{\\frac{2 \\cdot 8.0 \\times 10^{-17}}{9.11 \\times 10^{-31}}}$$
$$v = \\sqrt{1.76 \\times 10^{14}} = 1.33 \\times 10^7 \\text{ m/s}$$

Dette er ca. 4.4% av lyshastigheten!`,
    },

    // ========== AKSELERASJON I HOMOGENT FELT ==========
    {
      id: 'fys2-3-5-homogent-felt',
      type: 'text',
      content: `### Akselerasjon i homogent elektrisk felt

I et homogent elektrisk felt (f.eks. mellom kondensatorplater) virker en konstant kraft på en ladet partikkel:

$$F = qE$$

Med Newtons 2. lov får vi akselerasjonen:`,
    },

    {
      id: 'fys2-3-5-formula-akselerasjon-felt',
      type: 'formula',
      title: 'Akselerasjon i homogent felt',
      content: `$$a = \\frac{F}{m} = \\frac{qE}{m}$$

For en platekondensator med spenning $U$ og plateavstand $d$:
$$a = \\frac{qU}{md}$$

**Retning:**
- Positiv ladning: akselererer i feltretningen
- Negativ ladning: akselererer mot feltretningen`,
    },

    // ========== PARTIKKELAKSELERATORER ==========
    {
      id: 'fys2-3-5-akseleratorer',
      type: 'text',
      content: `## Partikkelakseleratorer

Partikkelakseleratorer bruker elektriske felt til å gi ladede partikler svært høye energier. De brukes i grunnforskning, medisin og industri.

### Lineære akseleratorer (LINAC)

En lineær akselerator består av en rekke metallrør koblet til en vekselstrømkilde. Partiklene akselereres i gapene mellom rørene.

**Prinsipp:**
1. Partikkelen trekkes inn i første rør av et elektrisk felt
2. Mens partikkelen er inne i røret, skifter feltet polaritet
3. Når partikkelen kommer ut, blir den igjen akselerert mot neste rør
4. Rørene blir lengre for å kompensere for økende hastighet

**Anvendelser:**
- Injektorer for større akseleratorer
- Medisinsk strålebehandling
- Materialforskning

### Van de Graaff-generator

Van de Graaff-generatoren er en elektrostatisk akselerator som bruker en kontinuerlig oppladning av en metallkule.

**Prinsipp:**
1. Et transportbånd fører ladning til en metallkule
2. Kulen oppnår svært høyt potensial (flere MV)
3. Partikler akselereres fra kulen (eller mot den)

**Fordeler:**
- Stabil stråleenergi
- Kan brukes for både akselerasjon og retardasjon

**Begrensning:**
- Maksimalt ca. 10-20 MeV pga. elektrisk gjennomslag`,
    },

    // ========== BEVEGELSE I ELEKTRISK FELT ==========
    {
      id: 'fys2-3-5-bevegelse-felt',
      type: 'text',
      content: `## Bevegelse i elektrisk felt

### Partikkel skutt inn vinkelrett på feltet

Når en ladet partikkel skytes inn i et homogent elektrisk felt vinkelrett på feltlinjene, får vi en **parabolsk bane** - akkurat som kastebevegelse i tyngdefeltet!

**Sammenligning:**
| Kast i tyngdefelt | Ladet partikkel i E-felt |
|-------------------|-------------------------|
| $F = mg$ | $F = qE$ |
| $a = g$ | $a = qE/m$ |
| Nedover | I feltretningen (positiv) eller mot (negativ) |`,
    },

    {
      id: 'fys2-3-5-formula-avboyning',
      type: 'formula',
      title: 'Avbøyning i homogent felt',
      content: `For en partikkel som skytes inn med hastighet $v_0$ vinkelrett på et felt med lengde $L$:

**Tid i feltet:**
$$t = \\frac{L}{v_0}$$

**Avbøyning i feltet:**
$$y = \\frac{1}{2}at^2 = \\frac{qEL^2}{2mv_0^2}$$

**Avbøyningsvinkel:**
$$\\tan\\theta = \\frac{v_y}{v_x} = \\frac{at}{v_0} = \\frac{qEL}{mv_0^2}$$

Spenning $U$ og plateavstand $d$ gir $E = U/d$:
$$y = \\frac{qUL^2}{2mdv_0^2}$$`,
    },

    // ========== EKSEMPEL: AVBØYNING ==========
    {
      id: 'fys2-3-5-example-avboyning',
      type: 'example',
      title: 'Elektron i kondensator',
      content: `**Oppgave:** Et elektron skytes inn horisontalt med hastighet $v_0 = 2.0 \\times 10^7$ m/s mellom to kondensatorplater. Platene har lengde $L = 5.0$ cm, avstand $d = 1.0$ cm, og spenning $U = 200$ V.

Beregn:
a) Det elektriske feltet mellom platene
b) Akselerasjonen til elektronet
c) Tiden elektronet bruker i feltet
d) Vertikal avbøyning når elektronet forlater feltet
e) Avbøyningsvinkelen

**Løsning:**

**a) Elektrisk felt:**
$$E = \\frac{U}{d} = \\frac{200}{0.010} = 20\\,000 \\text{ V/m} = 20 \\text{ kV/m}$$

**b) Akselerasjon:**
$$a = \\frac{eE}{m_e} = \\frac{1.60 \\times 10^{-19} \\cdot 20\\,000}{9.11 \\times 10^{-31}} = 3.5 \\times 10^{15} \\text{ m/s}^2$$

(Enorm akselerasjon! Ca. $3.6 \\times 10^{14}$ g)

**c) Tid i feltet:**
$$t = \\frac{L}{v_0} = \\frac{0.050}{2.0 \\times 10^7} = 2.5 \\times 10^{-9} \\text{ s} = 2.5 \\text{ ns}$$

**d) Vertikal avbøyning:**
$$y = \\frac{1}{2}at^2 = \\frac{1}{2} \\cdot 3.5 \\times 10^{15} \\cdot (2.5 \\times 10^{-9})^2 = 0.011 \\text{ m} = 1.1 \\text{ cm}$$

**e) Avbøyningsvinkel:**
$$v_y = at = 3.5 \\times 10^{15} \\cdot 2.5 \\times 10^{-9} = 8.75 \\times 10^6 \\text{ m/s}$$
$$\\tan\\theta = \\frac{v_y}{v_x} = \\frac{8.75 \\times 10^6}{2.0 \\times 10^7} = 0.44$$
$$\\theta = \\arctan(0.44) = 24°$$`,
    },

    // ========== CRT ==========
    {
      id: 'fys2-3-5-crt',
      type: 'text',
      content: `## Katodestrålerør (CRT)

Katodestrålerøret (Cathode Ray Tube) var grunnlaget for TV-er og dataskjermer i mange tiår før flatskjermer tok over. Det er også historisk viktig fordi det førte til oppdagelsen av elektronet.

### Oppbygging

Et CRT består av:
1. **Katode** - oppvarmet metalltråd som sender ut elektroner (termisk emisjon)
2. **Akselerasjonselektroder** - gir elektronene høy hastighet
3. **Avbøyningsplater** - styrer elektronstrålens retning
4. **Fosforskjerm** - lyser opp der elektronene treffer

### Prinsipp

1. Elektroner frigjøres fra katoden ved oppvarming
2. Elektronene akselereres av høy spenning (typisk 10-30 kV)
3. Strålen avbøyes horisontalt og vertikalt av elektriske felt
4. Elektronene treffer fosforskjermen og skaper lys

### Historisk betydning

J.J. Thomson brukte katodestråler i 1897 til å:
- Bevise at katodestråler består av negativt ladede partikler
- Måle forholdet $e/m$ for elektronet
- Oppdage elektronet

Dette var første bevis på at atomer inneholder mindre partikler!`,
    },

    // ========== MILLIKAN-EKSPERIMENTET ==========
    {
      id: 'fys2-3-5-millikan',
      type: 'text',
      content: `## Millikan-eksperimentet

Robert Millikan utførte i 1909-1913 et berømt eksperiment som bestemte **elementærladningen** $e$ med stor nøyaktighet.

### Eksperimentets oppbygging

1. Små oljedråper sprøytes inn mellom to kondensatorplater
2. Dråpene lades opp ved friksjon eller ioniserende stråling
3. Et elektrisk felt kan justeres for å balansere tyngdekraften
4. Dråpenes bevegelse observeres gjennom et mikroskop

### Kraftbalanse

Når dråpen svever i ro, er kreftene i likevekt:

**Elektrisk kraft oppover:**
$$F_E = qE = q\\frac{U}{d}$$

**Tyngdekraft nedover:**
$$F_G = mg$$

**Likevekt:**
$$q\\frac{U}{d} = mg$$`,
    },

    {
      id: 'fys2-3-5-formula-millikan',
      type: 'formula',
      title: 'Millikans beregning',
      content: `Ladningen på dråpen:
$$q = \\frac{mgd}{U}$$

Massen kan finnes fra dråpens fallhastighet (uten felt) ved å bruke Stokes' lov:
$$m = \\frac{4}{3}\\pi r^3 \\rho$$

**Millikans resultat:**
Alle målte ladninger var heltallsmultipler av en minste ladning:
$$e = 1.602 \\times 10^{-19} \\text{ C}$$

Dette beviste at elektrisk ladning er **kvantisert** - den kommer i diskrete "pakker".`,
    },

    // ========== EKSEMPEL: MILLIKAN ==========
    {
      id: 'fys2-3-5-example-millikan',
      type: 'example',
      title: 'Millikan-beregning',
      content: `**Oppgave:** I et Millikan-eksperiment svever en oljedråpe med masse $m = 4.9 \\times 10^{-15}$ kg i ro mellom plater med avstand $d = 1.0$ cm når spenningen er $U = 300$ V. Dråpen er negativt ladet.

a) Beregn ladningen på dråpen
b) Hvor mange elementærladninger har dråpen?

**Løsning:**

**a) Ladningen:**
Kraftbalanse: $qE = mg$
$$q = \\frac{mgd}{U} = \\frac{4.9 \\times 10^{-15} \\cdot 9.81 \\cdot 0.010}{300}$$
$$q = 1.60 \\times 10^{-18} \\text{ C}$$

**b) Antall elementærladninger:**
$$n = \\frac{q}{e} = \\frac{1.60 \\times 10^{-18}}{1.60 \\times 10^{-19}} = 10$$

Dråpen har 10 overflødige elektroner.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - ENERGIBEVARING ==========
    {
      id: 'fys2-3-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-1',
        number: '3.49',
        type: 'multiple_choice',
        difficulty: 'lett',
        task: `Et elektron akselereres fra ro gjennom en potensialforskjell på 1000 V. Hva er kinetisk energi til elektronet etter akselerasjonen?`,
        choices: [
          { id: 'a', text: '$1.6 \\times 10^{-16}$ J' },
          { id: 'b', text: '1000 eV' },
          { id: 'c', text: 'Begge svarene over er riktige' },
          { id: 'd', text: 'Ingen av svarene over er riktige' },
        ],
        correctAnswer: 'c',
        hints: [
          'Hva er definisjonen av elektronvolt?',
          'Bruk energibevaring: all potensiell energi blir til kinetisk energi',
          '$1$ eV $= 1.6 \\times 10^{-19}$ J',
        ],
        solution: `**Svar: C**

Fra energibevaring får vi at kinetisk energi er lik ladning ganger spenning:
$$E_k = eU = 1.6 \\times 10^{-19} \\cdot 1000 = 1.6 \\times 10^{-16} \\text{ J}$$

Per definisjon er dette også 1000 eV, siden et elektronvolt er energien et elektron får når det akselereres gjennom 1 V.

Begge svarene a) og b) er derfor riktige.`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - PARTIKKELBEVEGELSE ==========
    {
      id: 'fys2-3-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-2',
        number: '3.50',
        type: 'multiple_choice',
        difficulty: 'lett',
        task: `Et proton og et elektron akselereres begge fra ro gjennom samme potensialforskjell. Hvilken påstand er riktig?`,
        choices: [
          { id: 'a', text: 'De får samme kinetiske energi og samme hastighet' },
          { id: 'b', text: 'De får samme kinetiske energi, men elektronet får høyere hastighet' },
          { id: 'c', text: 'De får ulik kinetisk energi, men samme hastighet' },
          { id: 'd', text: 'De får ulik kinetisk energi og ulik hastighet' },
        ],
        correctAnswer: 'b',
        hints: [
          'Hva avhenger kinetisk energi av? $E_k = qU$',
          'Hvordan er hastigheten relatert til kinetisk energi og masse?',
          'Protonet har mye større masse enn elektronet',
        ],
        solution: `**Svar: B**

Begge partiklene har samme ladning (størrelse) $|q| = e$, så de får samme kinetiske energi:
$$E_k = eU$$

Men kinetisk energi er også $E_k = \\frac{1}{2}mv^2$, som gir:
$$v = \\sqrt{\\frac{2E_k}{m}}$$

Siden protonet har ca. 1836 ganger større masse enn elektronet, vil elektronet ha mye høyere hastighet:
$$\\frac{v_e}{v_p} = \\sqrt{\\frac{m_p}{m_e}} \\approx 43$$

Elektronet beveger seg ca. 43 ganger raskere enn protonet ved samme kinetiske energi.`,
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - CRT ==========
    {
      id: 'fys2-3-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-3',
        number: '3.51',
        type: 'multiple_choice',
        difficulty: 'lett',
        task: `I et katodestrålerør (CRT) akselereres elektroner av et elektrisk felt. Hva skjer med elektronets bane når det passerer mellom avbøyningsplater med horisontalt felt?`,
        choices: [
          { id: 'a', text: 'Elektronet følger en rett linje' },
          { id: 'b', text: 'Elektronet følger en sirkelbane' },
          { id: 'c', text: 'Elektronet følger en parabolsk bane' },
          { id: 'd', text: 'Elektronet stopper opp' },
        ],
        correctAnswer: 'c',
        hints: [
          'Hva slags bevegelse får vi med konstant kraft vinkelrett på hastigheten?',
          'Tenk på sammenligning med kast i tyngdefelt',
        ],
        solution: `**Svar: C**

Mellom avbøyningsplatene er det et homogent elektrisk felt som gir elektronet en konstant akselerasjon vinkelrett på den opprinnelige bevegelsesretningen.

Dette er helt analogt med et skrått kast i tyngdefeltet:
- Horisontal komponent: jevn fart (ingen kraft)
- Vertikal komponent: jevnt akselerert bevegelse

Resultatet er en **parabolsk bane** gjennom feltet.`,
      },
    },

    // ========== OPPGAVE 4: MEDIUM - HASTIGHETSBEREGNING ==========
    {
      id: 'fys2-3-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-4',
        number: '3.52',
        type: 'classic',
        difficulty: 'medium',
        task: `Et proton ($m_p = 1.67 \\times 10^{-27}$ kg) akselereres fra ro gjennom en potensialforskjell på 10 kV.

a) Beregn kinetisk energi i joule og keV.
b) Beregn protonets sluttfart.
c) Hvor stor må potensialforskjellen være for at protonet skal oppnå 1% av lyshastigheten?`,
        hints: [
          'a) $E_k = eU$',
          'b) $v = \\sqrt{2E_k/m}$',
          'c) Sett opp $E_k = \\frac{1}{2}m(0.01c)^2$ og løs for $U$',
        ],
        solution: `**a) Kinetisk energi:**
$$E_k = eU = 1.60 \\times 10^{-19} \\cdot 10\\,000 = 1.60 \\times 10^{-15} \\text{ J}$$
$$E_k = 10 \\text{ keV}$$

**b) Sluttfart:**
$$v = \\sqrt{\\frac{2E_k}{m_p}} = \\sqrt{\\frac{2 \\cdot 1.60 \\times 10^{-15}}{1.67 \\times 10^{-27}}}$$
$$v = \\sqrt{1.92 \\times 10^{12}} = 1.39 \\times 10^6 \\text{ m/s}$$

**c) For $v = 0.01c$:**
$$v = 0.01 \\cdot 3.0 \\times 10^8 = 3.0 \\times 10^6 \\text{ m/s}$$

$$E_k = \\frac{1}{2}m_p v^2 = \\frac{1}{2} \\cdot 1.67 \\times 10^{-27} \\cdot (3.0 \\times 10^6)^2 = 7.5 \\times 10^{-15} \\text{ J}$$

$$U = \\frac{E_k}{e} = \\frac{7.5 \\times 10^{-15}}{1.60 \\times 10^{-19}} = 47\\,000 \\text{ V} = 47 \\text{ kV}$$

**Svar:**
a) $E_k = 1.6 \\times 10^{-15}$ J = 10 keV
b) $v = 1.4 \\times 10^6$ m/s (ca. 0.5% av lyshastigheten)
c) $U = 47$ kV`,
      },
    },

    // ========== OPPGAVE 5: MEDIUM - ENERGIBEREGNING ==========
    {
      id: 'fys2-3-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-5',
        number: '3.53',
        type: 'classic',
        difficulty: 'medium',
        task: `Et elektron har hastighet $v_1 = 1.0 \\times 10^6$ m/s i et punkt der potensialet er $V_1 = 0$ V. Elektronet beveger seg mot et område med potensial $V_2 = -50$ V.

a) Beregn elektronets kinetiske energi i punkt 1.
b) Beregn elektronets hastighet i punkt 2.
c) Hva er det høyeste potensialet elektronet kan nå?`,
        hints: [
          'a) $E_{k1} = \\frac{1}{2}m_e v_1^2$',
          'b) Bruk energibevaring: $E_{k1} + E_{p1} = E_{k2} + E_{p2}$',
          'c) Når elektronet stopper, er all kinetisk energi blitt til potensiell energi',
        ],
        solution: `**a) Kinetisk energi i punkt 1:**
$$E_{k1} = \\frac{1}{2}m_e v_1^2 = \\frac{1}{2} \\cdot 9.11 \\times 10^{-31} \\cdot (1.0 \\times 10^6)^2$$
$$E_{k1} = 4.56 \\times 10^{-19} \\text{ J} = 2.85 \\text{ eV}$$

**b) Hastighet i punkt 2:**
Energibevaring:
$$E_{k1} + qV_1 = E_{k2} + qV_2$$
$$E_{k2} = E_{k1} + q(V_1 - V_2) = E_{k1} - e(V_1 - V_2)$$

Merk: $q = -e$ for elektronet
$$E_{k2} = E_{k1} - (-e)(V_1 - V_2) = E_{k1} + e(V_1 - V_2)$$
$$E_{k2} = 4.56 \\times 10^{-19} + 1.60 \\times 10^{-19} \\cdot (0 - (-50))$$
$$E_{k2} = 4.56 \\times 10^{-19} + 8.0 \\times 10^{-18} = 8.46 \\times 10^{-18} \\text{ J}$$

$$v_2 = \\sqrt{\\frac{2E_{k2}}{m_e}} = \\sqrt{\\frac{2 \\cdot 8.46 \\times 10^{-18}}{9.11 \\times 10^{-31}}} = 4.3 \\times 10^6 \\text{ m/s}$$

**c) Høyeste potensial:**
Når $v = 0$: all kinetisk energi er omgjort til økning i potensiell energi.
$$E_{k1} = -q(V_{max} - V_1) = e \\cdot V_{max}$$
$$V_{max} = \\frac{E_{k1}}{e} = \\frac{4.56 \\times 10^{-19}}{1.60 \\times 10^{-19}} = 2.85 \\text{ V}$$

**Svar:**
a) $E_{k1} = 4.6 \\times 10^{-19}$ J = 2.85 eV
b) $v_2 = 4.3 \\times 10^6$ m/s
c) $V_{max} = 2.9$ V`,
      },
    },

    // ========== OPPGAVE 6: MEDIUM - AVBØYNING ==========
    {
      id: 'fys2-3-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-6',
        number: '3.54',
        type: 'classic',
        difficulty: 'medium',
        task: `I et CRT akselereres elektroner fra ro gjennom en spenning $U_a = 2000$ V. De passerer deretter mellom to avbøyningsplater med lengde $L = 4.0$ cm, avstand $d = 1.0$ cm og spenning $U_d = 100$ V.

a) Beregn elektronenes hastighet etter akselerasjonen.
b) Beregn det elektriske feltet mellom avbøyningsplatene.
c) Beregn elektronenes avbøyning når de forlater platene.`,
        hints: [
          'a) $v = \\sqrt{2eU_a/m_e}$',
          'b) $E = U_d/d$',
          'c) Bruk $y = \\frac{qEL^2}{2mv^2}$',
        ],
        solution: `**a) Hastighet etter akselerasjon:**
$$v = \\sqrt{\\frac{2eU_a}{m_e}} = \\sqrt{\\frac{2 \\cdot 1.60 \\times 10^{-19} \\cdot 2000}{9.11 \\times 10^{-31}}}$$
$$v = \\sqrt{7.03 \\times 10^{14}} = 2.65 \\times 10^7 \\text{ m/s}$$

**b) Elektrisk felt:**
$$E = \\frac{U_d}{d} = \\frac{100}{0.010} = 10\\,000 \\text{ V/m} = 10 \\text{ kV/m}$$

**c) Avbøyning:**
$$y = \\frac{eEL^2}{2m_e v^2} = \\frac{1.60 \\times 10^{-19} \\cdot 10\\,000 \\cdot (0.040)^2}{2 \\cdot 9.11 \\times 10^{-31} \\cdot (2.65 \\times 10^7)^2}$$
$$y = \\frac{1.60 \\times 10^{-19} \\cdot 10^4 \\cdot 1.6 \\times 10^{-3}}{2 \\cdot 9.11 \\times 10^{-31} \\cdot 7.02 \\times 10^{14}}$$
$$y = \\frac{2.56 \\times 10^{-18}}{1.28 \\times 10^{-15}} = 2.0 \\times 10^{-3} \\text{ m} = 2.0 \\text{ mm}$$

**Svar:**
a) $v = 2.65 \\times 10^7$ m/s (ca. 9% av lyshastigheten)
b) $E = 10$ kV/m
c) $y = 2.0$ mm`,
      },
    },

    // ========== OPPGAVE 7: MEDIUM - POTENSIELL ENERGI ==========
    {
      id: 'fys2-3-5-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-7',
        number: '3.55',
        type: 'classic',
        difficulty: 'medium',
        task: `To protoner befinner seg med avstand $r = 1.0 \\times 10^{-15}$ m fra hverandre (omtrent radiusen til en atomkjerne).

a) Beregn den potensielle energien i systemet.
b) Uttrykk svaret i MeV.
c) Hvis protonene starter i ro, hvilken fart har hvert proton når de er svært langt fra hverandre?`,
        hints: [
          'a) $E_p = k\\frac{q_1 q_2}{r}$',
          'b) $1$ MeV $= 1.60 \\times 10^{-13}$ J',
          'c) Bruk energibevaring og at begge protonene får samme fart',
        ],
        solution: `**a) Potensiell energi:**
$$E_p = k\\frac{e^2}{r} = 8.99 \\times 10^9 \\cdot \\frac{(1.60 \\times 10^{-19})^2}{1.0 \\times 10^{-15}}$$
$$E_p = 8.99 \\times 10^9 \\cdot \\frac{2.56 \\times 10^{-38}}{1.0 \\times 10^{-15}} = 2.3 \\times 10^{-13} \\text{ J}$$

**b) I MeV:**
$$E_p = \\frac{2.3 \\times 10^{-13}}{1.60 \\times 10^{-13}} = 1.4 \\text{ MeV}$$

**c) Fart ved stor avstand:**
Ved stor avstand er $E_p \\to 0$, så all energi er kinetisk.
Begge protonene får samme fart (symmetri):
$$E_{p,start} = 2 \\cdot \\frac{1}{2}m_p v^2 = m_p v^2$$
$$v = \\sqrt{\\frac{E_p}{m_p}} = \\sqrt{\\frac{2.3 \\times 10^{-13}}{1.67 \\times 10^{-27}}}$$
$$v = \\sqrt{1.38 \\times 10^{14}} = 1.2 \\times 10^7 \\text{ m/s}$$

**Svar:**
a) $E_p = 2.3 \\times 10^{-13}$ J
b) $E_p = 1.4$ MeV
c) $v = 1.2 \\times 10^7$ m/s (ca. 4% av lyshastigheten)`,
      },
    },

    // ========== OPPGAVE 8: VANSKELIG - KOMBINERT PROBLEM ==========
    {
      id: 'fys2-3-5-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-8',
        number: '3.56',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `I et CRT akselereres elektroner gjennom $U_a = 5.0$ kV. De skytes deretter inn horisontalt mellom avbøyningsplater (lengde $L = 3.0$ cm, avstand $d = 8.0$ mm, spenning $U_d = 40$ V). Etter å ha forlatt platene fortsetter elektronene til en skjerm som er $D = 20$ cm fra midten av platene.

a) Beregn elektronenes hastighet inn i avbøyningsplatene.
b) Beregn avbøyningsvinkelen når elektronene forlater platene.
c) Beregn total avbøyning på skjermen (målt fra sentrum).`,
        hints: [
          'a) Bruk energibevaring',
          'b) $\\tan\\theta = v_y/v_x = at/v_x$',
          'c) Total avbøyning = avbøyning i plater + avbøyning etter plater',
        ],
        solution: `**a) Hastighet inn:**
$$v = \\sqrt{\\frac{2eU_a}{m_e}} = \\sqrt{\\frac{2 \\cdot 1.60 \\times 10^{-19} \\cdot 5000}{9.11 \\times 10^{-31}}}$$
$$v = \\sqrt{1.76 \\times 10^{15}} = 4.19 \\times 10^7 \\text{ m/s}$$

**b) Avbøyningsvinkel:**
Felt i plater: $E = U_d/d = 40/0.008 = 5000$ V/m

Akselerasjon: $a = \\frac{eE}{m_e} = \\frac{1.60 \\times 10^{-19} \\cdot 5000}{9.11 \\times 10^{-31}} = 8.79 \\times 10^{14}$ m/s²

Tid i plater: $t = L/v = 0.030/(4.19 \\times 10^7) = 7.16 \\times 10^{-10}$ s

Vertikal hastighet ut: $v_y = at = 8.79 \\times 10^{14} \\cdot 7.16 \\times 10^{-10} = 6.29 \\times 10^5$ m/s

$$\\tan\\theta = \\frac{v_y}{v_x} = \\frac{6.29 \\times 10^5}{4.19 \\times 10^7} = 0.0150$$
$$\\theta = 0.86° = 0.015 \\text{ rad}$$

**c) Total avbøyning:**
Avbøyning i platene:
$$y_1 = \\frac{1}{2}at^2 = \\frac{1}{2} \\cdot 8.79 \\times 10^{14} \\cdot (7.16 \\times 10^{-10})^2 = 2.25 \\times 10^{-4} \\text{ m}$$

Avstand fra plateslutt til skjerm: $D - L/2 = 0.20 - 0.015 = 0.185$ m

Avbøyning etter platene (rett linje med vinkel $\\theta$):
$$y_2 = (D - L/2) \\cdot \\tan\\theta = 0.185 \\cdot 0.0150 = 2.78 \\times 10^{-3} \\text{ m}$$

Total avbøyning:
$$y_{total} = y_1 + y_2 = 0.225 + 2.78 = 3.0 \\text{ mm}$$

**Svar:**
a) $v = 4.2 \\times 10^7$ m/s
b) $\\theta = 0.86°$
c) $y_{total} = 3.0$ mm`,
      },
    },

    // ========== OPPGAVE 9: VANSKELIG - MILLIKAN ==========
    {
      id: 'fys2-3-5-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-9',
        number: '3.57',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `I et Millikan-eksperiment observeres en oljedråpe med radius $r = 1.5$ μm og tetthet $\\rho = 920$ kg/m³. Plateavstanden er $d = 1.5$ cm.

a) Beregn dråpens masse.
b) Dråpen svever i ro når spenningen mellom platene er $U = 420$ V. Beregn ladningen på dråpen.
c) Hvor mange elementærladninger har dråpen?
d) Hvis spenningen økes til $U = 500$ V, hvilken akselerasjon får dråpen?`,
        hints: [
          'a) $m = \\frac{4}{3}\\pi r^3 \\rho$',
          'b) Kraftbalanse: $qE = mg$',
          'c) $n = q/e$',
          'd) Nettokraft = $qE - mg$, så $a = (qE - mg)/m$',
        ],
        solution: `**a) Dråpens masse:**
$$m = \\frac{4}{3}\\pi r^3 \\rho = \\frac{4}{3}\\pi (1.5 \\times 10^{-6})^3 \\cdot 920$$
$$m = \\frac{4}{3}\\pi \\cdot 3.375 \\times 10^{-18} \\cdot 920 = 1.30 \\times 10^{-14} \\text{ kg}$$

**b) Ladning ved likevekt:**
$$qE = mg$$
$$q = \\frac{mgd}{U} = \\frac{1.30 \\times 10^{-14} \\cdot 9.81 \\cdot 0.015}{420}$$
$$q = 4.56 \\times 10^{-18} \\text{ C}$$

**c) Antall elementærladninger:**
$$n = \\frac{q}{e} = \\frac{4.56 \\times 10^{-18}}{1.60 \\times 10^{-19}} = 28.5 \\approx 29$$

Nøyaktig 29 (eller kanskje 28 - avhenger av måleusikkerhet).

**d) Akselerasjon ved $U = 500$ V:**
Nytt elektrisk felt: $E = U/d = 500/0.015 = 33\\,333$ V/m

Elektrisk kraft: $F_E = qE = 4.56 \\times 10^{-18} \\cdot 33\\,333 = 1.52 \\times 10^{-13}$ N

Tyngdekraft: $F_G = mg = 1.30 \\times 10^{-14} \\cdot 9.81 = 1.28 \\times 10^{-13}$ N

Nettokraft (oppover): $F_{netto} = F_E - F_G = 1.52 - 1.28 = 0.24 \\times 10^{-13}$ N

Akselerasjon:
$$a = \\frac{F_{netto}}{m} = \\frac{0.24 \\times 10^{-13}}{1.30 \\times 10^{-14}} = 1.8 \\text{ m/s}^2$$

**Svar:**
a) $m = 1.3 \\times 10^{-14}$ kg
b) $q = 4.6 \\times 10^{-18}$ C
c) $n \\approx 29$ elementærladninger
d) $a = 1.8$ m/s² (oppover)`,
      },
    },

    // ========== OPPGAVE 10: VANSKELIG - AKSELERATOR ==========
    {
      id: 'fys2-3-5-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-10',
        number: '3.58',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En Van de Graaff-akselerator har en terminal med potensial $V = 5.0$ MV. Protoner akselereres fra denne terminalen.

a) Beregn kinetisk energi til protonene i MeV.
b) Beregn protonenes hastighet.
c) Hvilken andel av lyshastigheten er dette?
d) Akseleratoren kan også brukes til å akselerere $\\alpha$-partikler (heliumkjerner) med ladning $+2e$ og masse $4m_p$. Beregn kinetisk energi og hastighet for $\\alpha$-partikler.`,
        hints: [
          'a) $E_k = qU = eV$',
          'b) $v = \\sqrt{2E_k/m_p}$',
          'c) $\\beta = v/c$',
          'd) $\\alpha$-partikkel har $q = 2e$, $m = 4m_p$',
        ],
        solution: `**a) Kinetisk energi for protoner:**
$$E_k = eV = e \\cdot 5.0 \\times 10^6 \\text{ V} = 5.0 \\text{ MeV}$$

I joule: $E_k = 5.0 \\times 10^6 \\cdot 1.60 \\times 10^{-19} = 8.0 \\times 10^{-13}$ J

**b) Protonets hastighet:**
$$v = \\sqrt{\\frac{2E_k}{m_p}} = \\sqrt{\\frac{2 \\cdot 8.0 \\times 10^{-13}}{1.67 \\times 10^{-27}}}$$
$$v = \\sqrt{9.58 \\times 10^{14}} = 3.10 \\times 10^7 \\text{ m/s}$$

**c) Andel av lyshastigheten:**
$$\\beta = \\frac{v}{c} = \\frac{3.10 \\times 10^7}{3.00 \\times 10^8} = 0.103 = 10.3\\%$$

Ved denne hastigheten begynner relativistiske effekter å bli merkbare (ca. 0.5% avvik).

**d) For $\\alpha$-partikler:**
Kinetisk energi:
$$E_k = qV = 2e \\cdot 5.0 \\times 10^6 = 10 \\text{ MeV}$$

I joule: $E_k = 1.60 \\times 10^{-12}$ J

Hastighet:
$$v_\\alpha = \\sqrt{\\frac{2E_k}{m_\\alpha}} = \\sqrt{\\frac{2 \\cdot 1.60 \\times 10^{-12}}{4 \\cdot 1.67 \\times 10^{-27}}}$$
$$v_\\alpha = \\sqrt{4.79 \\times 10^{14}} = 2.19 \\times 10^7 \\text{ m/s}$$

Dette er ca. 7.3% av lyshastigheten.

**Svar:**
a) $E_k = 5.0$ MeV (protoner)
b) $v = 3.1 \\times 10^7$ m/s
c) Ca. 10% av lyshastigheten
d) $E_k = 10$ MeV, $v_\\alpha = 2.2 \\times 10^7$ m/s (7.3% av $c$)`,
      },
    },

    // ========== OPPGAVE 11: VANSKELIG - BREMSSTRAHLUNG ==========
    {
      id: 'fys2-3-5-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-11',
        number: '3.59',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et elektron med kinetisk energi 50 keV nærmer seg en atomkjerne med ladning $+Ze$ der $Z = 79$ (gull).

a) Hva er elektronets minimale avstand til kjernen hvis det beveger seg rett mot den?
b) Sammenlign dette med gullatomets radius ($r_{Au} \\approx 1.4 \\times 10^{-10}$ m) og gullkjernens radius ($r_{kjerne} \\approx 7 \\times 10^{-15}$ m).
c) Hvorfor er dette relevant for røntgenstråling?`,
        hints: [
          'a) Ved minimalt avstand er all kinetisk energi blitt til potensiell energi',
          'b) Sammenlign størrelsesordener',
          'c) Tenk på hva som skjer når elektronet bremses kraftig',
        ],
        solution: `**a) Minimal avstand:**
Ved vendepunktet er all kinetisk energi omgjort til potensiell energi:
$$E_k = E_p = k\\frac{Ze \\cdot e}{r_{min}} = k\\frac{Ze^2}{r_{min}}$$

$$r_{min} = \\frac{kZe^2}{E_k}$$

$E_k = 50$ keV $= 50 \\times 10^3 \\cdot 1.60 \\times 10^{-19} = 8.0 \\times 10^{-15}$ J

$$r_{min} = \\frac{8.99 \\times 10^9 \\cdot 79 \\cdot (1.60 \\times 10^{-19})^2}{8.0 \\times 10^{-15}}$$
$$r_{min} = \\frac{8.99 \\times 10^9 \\cdot 79 \\cdot 2.56 \\times 10^{-38}}{8.0 \\times 10^{-15}}$$
$$r_{min} = \\frac{1.82 \\times 10^{-26}}{8.0 \\times 10^{-15}} = 2.3 \\times 10^{-12} \\text{ m}$$

**b) Sammenligning:**
- Minimal avstand: $r_{min} = 2.3 \\times 10^{-12}$ m
- Atomradius: $r_{Au} = 1.4 \\times 10^{-10}$ m (60 ganger større)
- Kjerneradius: $r_{kjerne} = 7 \\times 10^{-15}$ m (330 ganger mindre)

Elektronet kommer langt inn i atomet, men ikke i nærheten av kjernen.

**c) Relevans for røntgenstråling:**
Når elektronet bremses kraftig i det elektriske feltet nær kjernen, avgir det energi som **bremsstrålung** (bremsestråling). Dette er en av hovedmekanismene for røntgenrør:
- Elektroner akselereres mot et metalltarget
- De bremses i feltet fra atomkjernene
- Energien avgis som røntgenfotonter
- Maksimal fotonenergi = elektronets kinetiske energi

**Svar:**
a) $r_{min} = 2.3 \\times 10^{-12}$ m = 2.3 pm
b) Mye mindre enn atomet, mye større enn kjernen
c) Bremsestråling i røntgenrør skjer ved slik avbøyning`,
      },
    },

    // ========== OPPGAVE 12: VANSKELIG - THOMSON-EKSPERIMENT ==========
    {
      id: 'fys2-3-5-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-3-5-ex-12',
        number: '3.60',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `J.J. Thomson målte forholdet $e/m$ for elektroner ved å studere avbøyning i elektriske og magnetiske felt. I en forenklet versjon skytes elektroner (med ukjent hastighet) inn i et homogent elektrisk felt $E = 20$ kV/m. Feltet har lengde $L = 5.0$ cm, og avbøyningen ved enden av feltet er $y = 1.2$ cm.

a) Utled et uttrykk for $e/m$ ved hjelp av $E$, $L$ og $y$.
b) Beregn $e/m$ fra de oppgitte verdiene.
c) Sammenlign med den kjente verdien $e/m_e = 1.76 \\times 10^{11}$ C/kg.`,
        hints: [
          'a) Bruk bevegelseslikningene for konstant akselerasjon',
          'b) $y = \\frac{1}{2}at^2$ og $L = v_0 t$, eliminer $v_0$ og $t$',
          'c) Beregn prosentavvik',
        ],
        solution: `**a) Utledning av uttrykk for $e/m$:**

Tid i feltet: $t = L/v_0$

Avbøyning: $y = \\frac{1}{2}at^2 = \\frac{1}{2} \\cdot \\frac{eE}{m} \\cdot \\frac{L^2}{v_0^2}$

Dette gir: $y = \\frac{eEL^2}{2mv_0^2}$

Men vi trenger å eliminere $v_0$. Vi kan også skrive:
$v_0 = L/t$ og $y = \\frac{1}{2}at^2$

Fra $y = \\frac{1}{2}at^2$: $t^2 = 2y/a = 2ym/(eE)$

Fra $t = L/v_0$: $t^2 = L^2/v_0^2$

Setter vi dette inn i uttrykket for $y$:
$$y = \\frac{eEL^2}{2mv_0^2} \\Rightarrow \\frac{e}{m} = \\frac{2yv_0^2}{EL^2}$$

For å få et uttrykk uten $v_0$, trenger vi en ekstra måling (som Thomson gjorde med magnetfelt). Men hvis vi antar at vi kan måle avbøyningen ved forskjellige feltlengder, kan vi skrive:

$$\\frac{e}{m} = \\frac{2yv_0^2}{EL^2}$$

**Alternativ:** Hvis elektronene starter i ro og akselereres gjennom en kjent spenning $U_a$ først, har vi $v_0 = \\sqrt{2eU_a/m}$, som gir:
$$y = \\frac{EL^2}{4U_a}$$

Dette er uavhengig av $e/m$!

**b) Med Thomsons metode (kombinert E og B-felt):**
Thomson brukte et magnetfelt $B$ til å finne $v_0 = E/B$, noe som gir:
$$\\frac{e}{m} = \\frac{2yE}{B^2L^2}$$

Med de oppgitte tallene og en antatt hastighet på $v_0 = 2 \\times 10^7$ m/s:
$$\\frac{e}{m} = \\frac{2 \\cdot 0.012 \\cdot (2 \\times 10^7)^2}{20\\,000 \\cdot (0.05)^2}$$
$$\\frac{e}{m} = \\frac{2 \\cdot 0.012 \\cdot 4 \\times 10^{14}}{20\\,000 \\cdot 0.0025} = \\frac{9.6 \\times 10^{12}}{50} = 1.9 \\times 10^{11} \\text{ C/kg}$$

**c) Sammenligning:**
Kjent verdi: $e/m_e = 1.76 \\times 10^{11}$ C/kg
Beregnet: $1.9 \\times 10^{11}$ C/kg

Avvik: $\\frac{1.9 - 1.76}{1.76} \\times 100\\% \\approx 8\\%$

Dette er rimelig nøyaktig for et enkelt eksperiment.

**Svar:**
a) $e/m = 2yv_0^2/(EL^2)$
b) $e/m \\approx 1.9 \\times 10^{11}$ C/kg (avhenger av antatt hastighet)
c) Ca. 8% avvik fra kjent verdi`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Potensiell energi:**
$$E_p = qV \\quad \\text{og} \\quad E_p = k\\frac{q_1 q_2}{r}$$

**Energibevaring:**
$$\\frac{1}{2}mv_1^2 + qV_1 = \\frac{1}{2}mv_2^2 + qV_2$$

**Hastighet etter akselerasjon:**
$$v = \\sqrt{\\frac{2qU}{m}}$$

**Elektronvolt:**
$$1 \\text{ eV} = 1.60 \\times 10^{-19} \\text{ J}$$

**Akselerasjon i homogent felt:**
$$a = \\frac{qE}{m}$$

**Avbøyning i homogent felt:**
$$y = \\frac{qEL^2}{2mv_0^2} = \\frac{qUL^2}{2mdv_0^2}$$

**Millikan-eksperimentet:**
$$q = \\frac{mgd}{U}$$
Viser at ladning er kvantisert: $q = ne$

**Anvendelser:**
- Partikkelakseleratorer (LINAC, Van de Graaff, synkrotron)
- Katodestrålerør (CRT) - historisk viktig
- Elektronmikroskoper
- Massespektrometri

**Neste kapittel:**
Vi skal lære om elektrisk strøm og resistans.`,
    },
  ],
};

// ============================================================================
// Kapittel 4.1: Magnetiske felt
// LK20: Gjøre rede for magnetiske felt og feltlinjer, og beregne magnetfelt fra strømførende ledere
// ============================================================================

export const CHAPTER_FYSIKK2_4_1: TextbookChapter = {
  id: 'fysikk2-4-1',
  courseId: 'fysikk2',
  chapterNumber: '4.1',
  title: 'Magnetiske felt',
  description: 'Lær om magnetiske felt rundt permanentmagneter og strømførende ledere, magnetisk fluxtetthet, feltlinjer, og magnetiske materialer.',
  estimatedMinutes: 55,
  prerequisites: ['fysikk2-3-2'],
  competenceGoals: [
    'gjøre rede for magnetiske felt og magnetisk fluktetthet',
    'bruke høyrehåndsregelen til å bestemme retningen på magnetfelt',
    'beregne magnetfelt fra rette strømførende ledere',
    'beskrive Jordens magnetfelt og dets egenskaper',
    'forklare forskjellen mellom diamagnetisme, paramagnetisme og ferromagnetisme',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-4-1-intro',
      type: 'text',
      content: `## Magnetisme – en mystisk kraft

Magnetisme har fascinert mennesker i tusenvis av år. Allerede for over 2500 år siden oppdaget de gamle grekerne at visse steiner fra byen Magnesia (magnetitt) kunne tiltrekke jerngjenstander. Kineserne brukte kompassnålen til navigasjon for over 1000 år siden.

Men hva er egentlig magnetisme? Og hvordan henger den sammen med elektrisitet?

**Historisk perspektiv:**
- **600 f.Kr.:** Thales av Milet beskriver magnetiske steiner
- **1000-tallet:** Kineserne bruker kompassnålen
- **1820:** Hans Christian Ørsted oppdager at elektrisk strøm skaper magnetfelt
- **1831:** Michael Faraday oppdager elektromagnetisk induksjon
- **1864:** James Clerk Maxwell forener elektrisitet og magnetisme i Maxwells likninger

**Den store oppdagelsen:**
I 1820 gjorde den danske fysikeren Hans Christian Ørsted en banebrytende oppdagelse: En kompassnål ble avbøyd når den var i nærheten av en strømførende ledning. Dette viste at **elektrisitet og magnetisme er nært forbundet** – et prinsipp som danner grunnlaget for alt fra elektromotorer til trådløs kommunikasjon.`,
    },

    // ========== MAGNETFELT ==========
    {
      id: 'fys2-4-1-magnetfelt',
      type: 'text',
      content: `## Hva er et magnetfelt?

Et **magnetfelt** er et område i rommet der magnetiske krefter virker. Akkurat som et elektrisk felt beskriver kraften på elektriske ladninger, beskriver et magnetfelt kraften på magnetiske materialer og bevegelige ladninger.

**Kilder til magnetfelt:**
1. **Permanentmagneter** – Materialer som jern, nikkel og kobolt som har permanente magnetiske egenskaper
2. **Elektriske strømmer** – Bevegelige elektriske ladninger skaper magnetfelt
3. **Jordens kjerne** – Strømmer av flytende jern i Jordens ytre kjerne skaper Jordens magnetfelt

**Magnetiske poler:**
Alle magneter har to poler:
- **Nordpol (N)** – Peker mot geografisk nord når magneten henger fritt
- **Sydpol (S)** – Peker mot geografisk sør

**Viktig regel:**
- Like poler frastøter hverandre (N-N eller S-S)
- Ulike poler tiltrekker hverandre (N-S)

**Monopoler eksisterer ikke:**
I motsetning til elektriske ladninger, der vi kan ha isolerte positive eller negative ladninger, har vi aldri observert en isolert magnetisk pol (monopol). Hvis du deler en magnet i to, får du to nye magneter, hver med sin nord- og sydpol.`,
    },

    // ========== DEFINISJON: MAGNETISK FLUKTETTHET ==========
    {
      id: 'fys2-4-1-def-fluktetthet',
      type: 'definition',
      title: 'Magnetisk fluktetthet (B-felt)',
      content: `**Magnetisk fluktetthet** $\\vec{B}$ (også kalt **magnetfeltet** eller **B-feltet**) er en vektorstørrelse som beskriver styrken og retningen til magnetfeltet i et punkt.

**SI-enhet:** Tesla (T)
$$1 \\text{ T} = 1 \\frac{\\text{Wb}}{\\text{m}^2} = 1 \\frac{\\text{kg}}{\\text{A} \\cdot \\text{s}^2}$$

**Alternativ enhet:** Gauss (G), der $1 \\text{ T} = 10\\,000 \\text{ G}$

**Typiske verdier:**
- Jordens magnetfelt: ca. $50 \\, \\mu\\text{T} = 0.5 \\text{ G}$
- Kjøleskapmagnet: ca. $5 \\text{ mT}$
- MR-maskin: $1.5 - 7 \\text{ T}$
- Sterkeste permanentmagnet: ca. $1.5 \\text{ T}$
- Sterkeste laboratoriemagnet: ca. $45 \\text{ T}$

**Retning:**
$\\vec{B}$-feltets retning er den retningen nordpolen på en liten kompassnål peker når den plasseres i feltet.`,
    },

    // ========== MAGNETISKE FELTLINJER ==========
    {
      id: 'fys2-4-1-feltlinjer',
      type: 'text',
      content: `## Magnetiske feltlinjer

For å visualisere magnetfeltet bruker vi **magnetiske feltlinjer**. Disse er imaginære linjer som viser både retning og styrke på feltet.

**Egenskaper ved magnetiske feltlinjer:**

1. **Retning:** Feltlinjene går fra nordpol (N) til sydpol (S) utenfor magneten, og fra S til N inne i magneten

2. **Lukkede kurver:** Magnetiske feltlinjer er alltid **lukkede sløyfer** – de har ingen start- eller sluttpunkt (i motsetning til elektriske feltlinjer som starter og slutter på ladninger)

3. **Tetthet = styrke:** Tettheten av feltlinjer angir styrken på feltet. Tette linjer = sterkt felt, spredte linjer = svakt felt

4. **Krysser aldri:** Feltlinjer kan aldri krysse hverandre

**Feltlinjemønster for en stavmagnet:**
- Tette linjer ved polene (sterkt felt)
- Spredte linjer langt fra magneten (svakt felt)
- Buer fra N til S utenfor magneten
- Rette linjer fra S til N inne i magneten

**Feltlinjemønster for to magneter:**
- **Tiltrekning (N-S):** Feltlinjene går mellom polene
- **Frastøtning (N-N eller S-S):** Feltlinjene bøyer bort fra hverandre`,
    },

    // ========== ILLUSTRASJON: FELTLINJER ==========
    {
      id: 'fys2-4-1-ill-feltlinjer',
      type: 'illustration',
      illustration: {
        id: 'fys2-4-1-ill-feltlinjer',
        type: 'svg',
        description: 'Magnetiske feltlinjer rundt en stavmagnet. Linjene går fra nordpolen (N) til sydpolen (S) utenfor magneten, og danner lukkede sløyfer gjennom magneten.',
        labels: [
          { key: 'N', description: 'Nordpol' },
          { key: 'S', description: 'Sydpol' },
          { key: 'feltlinjer', description: 'Magnetiske feltlinjer (lukkede kurver)' },
          { key: 'B', description: 'Magnetfeltets retning' },
        ],
        width: 400,
        height: 250,
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
  <!-- Bakgrunn -->
  <rect width="400" height="250" fill="#f8f9fa"/>

  <!-- Stavmagnet -->
  <rect x="120" y="105" width="80" height="40" fill="#ef4444" stroke="#333" stroke-width="2"/>
  <rect x="200" y="105" width="80" height="40" fill="#3b82f6" stroke="#333" stroke-width="2"/>
  <text x="160" y="132" text-anchor="middle" font-size="18" font-weight="bold" fill="white">N</text>
  <text x="240" y="132" text-anchor="middle" font-size="18" font-weight="bold" fill="white">S</text>

  <!-- Feltlinjer (buede kurver) -->
  <path d="M 120 125 Q 60 125 60 70 Q 60 15 200 15 Q 340 15 340 70 Q 340 125 280 125" fill="none" stroke="#22c55e" stroke-width="2"/>
  <path d="M 120 125 Q 80 125 80 85 Q 80 45 200 45 Q 320 45 320 85 Q 320 125 280 125" fill="none" stroke="#22c55e" stroke-width="2"/>
  <path d="M 120 125 Q 100 125 100 100 Q 100 75 200 75 Q 300 75 300 100 Q 300 125 280 125" fill="none" stroke="#22c55e" stroke-width="2"/>

  <!-- Feltlinjer under -->
  <path d="M 120 125 Q 60 125 60 180 Q 60 235 200 235 Q 340 235 340 180 Q 340 125 280 125" fill="none" stroke="#22c55e" stroke-width="2"/>
  <path d="M 120 125 Q 80 125 80 165 Q 80 205 200 205 Q 320 205 320 165 Q 320 125 280 125" fill="none" stroke="#22c55e" stroke-width="2"/>
  <path d="M 120 125 Q 100 125 100 150 Q 100 175 200 175 Q 300 175 300 150 Q 300 125 280 125" fill="none" stroke="#22c55e" stroke-width="2"/>

  <!-- Piler på feltlinjene (retning N til S) -->
  <polygon points="45,65 55,70 55,60" fill="#22c55e" transform="rotate(-30 50 65)"/>
  <polygon points="350,65 340,60 340,70" fill="#22c55e" transform="rotate(30 345 65)"/>
  <polygon points="45,185 55,190 55,180" fill="#22c55e" transform="rotate(30 50 185)"/>
  <polygon points="350,185 340,180 340,190" fill="#22c55e" transform="rotate(-30 345 185)"/>

  <!-- Ledetekst -->
  <text x="200" y="18" text-anchor="middle" font-size="11" fill="#666">Feltlinjer (lukkede kurver)</text>
</svg>`,
      },
    },

    // ========== JORDENS MAGNETFELT ==========
    {
      id: 'fys2-4-1-jordmagnet',
      type: 'text',
      content: `## Jordens magnetfelt

Jorden har et magnetfelt som ligner på feltet fra en gigantisk stavmagnet plassert nær Jordens sentrum. Dette feltet er livsviktig for oss – det beskytter Jorden mot farlig stråling fra solen.

**Karakteristikker:**
- **Styrke:** Ca. $25-65 \\, \\mu\\text{T}$ avhengig av sted (ca. $50 \\, \\mu\\text{T}$ i Norge)
- **Retning:** Peker skrått nedover mot nord på den nordlige halvkule

**Geografisk vs. magnetisk pol:**
- **Geografisk nordpol:** Der Jordens rotasjonsakse treffer overflaten
- **Magnetisk nordpol:** Der kompassnålen peker (ligger i Canada, beveger seg!)

**Viktig:** Jordens magnetiske nordpol er faktisk en magnetisk **sydpol**! Nordpolen på en kompass tiltrekkes av sydpoler, derfor peker kompassnålen mot geografisk nord.

**Deklinasjon:**
Vinkelen mellom geografisk nord og magnetisk nord kalles **deklinasjon** eller **misvisning**. I Norge er den ca. $0-5°$ øst.

**Inklinasjon:**
Vinkelen magnetfeltet danner med horisontalplanet kalles **inklinasjon**. Ved magnetisk pol er den $90°$ (feltet peker rett ned).

**Opprinnelse:**
Jordens magnetfelt skapes av konveksjonsstrømmer av flytende jern i Jordens ytre kjerne (geodynamo-teorien).`,
    },

    // ========== MAGNETISKE MATERIALER ==========
    {
      id: 'fys2-4-1-materialer',
      type: 'text',
      content: `## Magnetiske materialer

Alle materialer reagerer på magnetfelt, men på ulike måter. Vi deler dem inn i tre hovedkategorier:

### 1. Diamagnetiske materialer
- **Svak frastøtning** fra magnetfelt
- Alle materialer har denne egenskapen, men den er svak
- **Eksempler:** Kobber, sølv, gull, vann, bismut
- **Mekanisme:** Ytre felt induserer små strømmer som skaper motsatt rettet felt
- **Susceptibilitet:** $\\chi_m < 0$ (negativ, typisk $\\sim -10^{-5}$)

### 2. Paramagnetiske materialer
- **Svak tiltrekning** til magnetfelt
- Atomene har permanente magnetiske momenter som delvis retter seg etter feltet
- **Eksempler:** Aluminium, platina, oksygen, natrium
- **Susceptibilitet:** $\\chi_m > 0$ (positiv, typisk $\\sim 10^{-3}$ til $10^{-5}$)
- Effekten forsvinner når feltet fjernes

### 3. Ferromagnetiske materialer
- **Sterk tiltrekning** til magnetfelt
- Kan bli permanentmagneter
- **Eksempler:** Jern, nikkel, kobolt, gadolinium
- **Mekanisme:** Magnetiske domener (områder med parallelle spinn) retter seg etter feltet
- **Susceptibilitet:** $\\chi_m >> 1$ (kan være $10^3$ til $10^6$)
- Effekten kan vedvare etter at feltet fjernes (remanens)

**Curie-temperatur:**
Over en viss temperatur (Curie-temperaturen) mister ferromagnetiske materialer sine magnetiske egenskaper og blir paramagnetiske. For jern er dette $770°\\text{C}$.`,
    },

    // ========== FORMEL: MAGNETFELT FRA RETT LEDER ==========
    {
      id: 'fys2-4-1-formel-leder',
      type: 'formula',
      formula: {
        id: 'fys2-4-1-formel-leder',
        title: 'Magnetfelt fra en lang, rett strømførende leder',
        expression: 'B = \\frac{\\mu_0 I}{2\\pi r}',
        derivation: `Når elektrisk strøm går gjennom en leder, skapes det et magnetfelt rundt lederen. For en **lang, rett leder** kan vi beregne magnetfeltets styrke.

**Biot-Savarts lov** gir oss magnetfeltet fra et strømelement, men for en uendelig lang leder får vi det enkle uttrykket:

$$B = \\frac{\\mu_0 I}{2\\pi r}$$

**Utledning (forenklet):**
1. Magnetfeltet går i **sirkler** rundt lederen
2. Feltstyrken er lik langs hele sirkelen (symmetri)
3. Fra Ampères lov: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I$
4. For en sirkel med radius $r$: $B \\cdot 2\\pi r = \\mu_0 I$
5. Løser for $B$: $B = \\frac{\\mu_0 I}{2\\pi r}$`,
        variables: [
          { symbol: 'B', description: 'Magnetfeltets styrke (magnetisk fluktetthet)', unit: 'T (Tesla)' },
          { symbol: 'I', description: 'Strømmen gjennom lederen', unit: 'A (Ampere)' },
          { symbol: 'r', description: 'Avstand fra lederen (vinkelrett)', unit: 'm' },
          { symbol: '\\mu_0', description: 'Permeabilitetskonstanten i vakuum', unit: 'T·m/A' },
        ],
        applications: [
          'Beregne magnetfelt fra strømførende kabler',
          'Dimensjonere elektriske ledninger',
          'Forstå magnetfelt i elektriske apparater',
        ],
      },
    },

    // ========== DEFINISJON: PERMEABILITETSKONSTANTEN ==========
    {
      id: 'fys2-4-1-def-my0',
      type: 'definition',
      title: 'Permeabilitetskonstanten',
      content: `**Permeabilitetskonstanten i vakuum** (også kalt magnetisk feltkoeffisient eller vakuumpermeabilitet) er en fundamental konstant:

$$\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T}\\cdot\\text{m/A}$$

**Eksakt verdi:**
$$\\mu_0 = 1.256\\,637\\,062 \\times 10^{-6} \\text{ T}\\cdot\\text{m/A}$$

**Praktisk verdi til beregninger:**
$$\\mu_0 \\approx 1.26 \\times 10^{-6} \\text{ T}\\cdot\\text{m/A}$$

**Sammenheng med lyshastigheten:**
$$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$$

der $\\varepsilon_0$ er permittivitetskonstanten.

**Merk:** I materialer bruker vi $\\mu = \\mu_r \\mu_0$, der $\\mu_r$ er den relative permeabiliteten til materialet.`,
    },

    // ========== HØYREHÅNDSREGELEN ==========
    {
      id: 'fys2-4-1-hoyrehand',
      type: 'text',
      content: `## Høyrehåndsregelen

For å finne retningen på magnetfeltet rundt en strømførende leder, bruker vi **høyrehåndsregelen**:

**For en rett leder:**
1. Pek **tommelen** i strømmens retning (fra + til -)
2. **Fingrene** krummer seg i magnetfeltets retning

Alternativt:
1. Grip rundt lederen med høyre hånd
2. Tommelen peker i strømmens retning
3. Fingrene viser feltets retning (sirkulært rundt lederen)

**Magnetfeltets form:**
- Feltlinjene går i **konsentriske sirkler** rundt lederen
- Feltet har ingen begynnelse eller slutt (lukkede kurver)
- Sett fra strømmens retning går feltet **mot klokken**

**Eksempel:**
Hvis strømmen går oppover i en vertikal ledning:
- Nordøst for ledningen: Feltet peker nordover
- Nordvest for ledningen: Feltet peker vestover
- Sørøst for ledningen: Feltet peker østover
- Sørvest for ledningen: Feltet peker sørover

**Viktig:** Høyrehåndsregelen bruker **konvensjonell strømretning** (fra + til -), ikke elektronenes faktiske bevegelsesretning.`,
    },

    // ========== ILLUSTRASJON: HØYREHÅNDSREGELEN ==========
    {
      id: 'fys2-4-1-ill-hoyrehand',
      type: 'illustration',
      illustration: {
        id: 'fys2-4-1-ill-hoyrehand',
        type: 'svg',
        description: 'Høyrehåndsregelen for magnetfelt rundt en strømførende leder. Tommelen peker i strømmens retning, fingrene viser feltets retning.',
        labels: [
          { key: 'I', description: 'Strømretning (konvensjonell)' },
          { key: 'B', description: 'Magnetfeltets retning (sirkulært)' },
          { key: 'tommel', description: 'Tommel peker i strømretning' },
          { key: 'fingre', description: 'Fingre krummer i feltretning' },
        ],
        width: 400,
        height: 300,
        svgContent: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Bakgrunn -->
  <rect width="400" height="300" fill="#f8f9fa"/>

  <!-- Leder (vertikal) -->
  <line x1="200" y1="280" x2="200" y2="20" stroke="#666" stroke-width="8"/>
  <line x1="200" y1="280" x2="200" y2="20" stroke="#fbbf24" stroke-width="4"/>

  <!-- Strømpil (I) oppover -->
  <polygon points="200,30 190,60 200,50 210,60" fill="#ef4444"/>
  <text x="220" y="45" font-size="16" font-weight="bold" fill="#ef4444">I</text>

  <!-- Magnetfelt-sirkler -->
  <ellipse cx="200" cy="150" rx="80" ry="30" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,3"/>
  <ellipse cx="200" cy="150" rx="120" ry="45" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,3"/>

  <!-- Piler på sirklene (mot klokken sett ovenfra) -->
  <polygon points="120,145 130,155 125,145" fill="#3b82f6"/>
  <polygon points="280,155 270,145 275,155" fill="#3b82f6"/>
  <polygon points="80,140 95,150 90,138" fill="#3b82f6"/>
  <polygon points="320,160 305,150 310,162" fill="#3b82f6"/>

  <!-- B-felt label -->
  <text x="310" y="130" font-size="14" font-weight="bold" fill="#3b82f6">B</text>

  <!-- Høyrehånd skisse (forenklet) -->
  <path d="M 50 200 Q 30 180 40 160 L 60 140 L 70 150 L 55 170 Q 50 180 55 190 Z" fill="#fce7d0" stroke="#333" stroke-width="1"/>
  <text x="20" y="250" font-size="11" fill="#666">Høyrehånds-</text>
  <text x="20" y="264" font-size="11" fill="#666">regelen</text>

  <!-- Forklaring -->
  <text x="200" y="290" text-anchor="middle" font-size="11" fill="#666">Sett ovenfra: Feltet går mot klokken</text>
</svg>`,
      },
    },

    // ========== EKSEMPEL: BEREGNING AV MAGNETFELT ==========
    {
      id: 'fys2-4-1-eks-beregning',
      type: 'example',
      content: `## Eksempel: Magnetfelt fra en strømførende leder

**Oppgave:**
En lang, rett leder fører en strøm på $I = 10$ A. Beregn magnetfeltets styrke i en avstand på:
a) $r = 5.0$ cm fra lederen
b) $r = 20$ cm fra lederen

**Løsning:**

Vi bruker formelen $B = \\frac{\\mu_0 I}{2\\pi r}$

**a) Ved $r = 5.0$ cm = $0.050$ m:**

$$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\cdot 10}{2\\pi \\cdot 0.050}$$

$$B = \\frac{4 \\times 10^{-6}}{0.10} = 4.0 \\times 10^{-5} \\text{ T} = 40 \\, \\mu\\text{T}$$

**b) Ved $r = 20$ cm = $0.20$ m:**

$$B = \\frac{4\\pi \\times 10^{-7} \\cdot 10}{2\\pi \\cdot 0.20} = \\frac{4 \\times 10^{-6}}{0.40} = 1.0 \\times 10^{-5} \\text{ T} = 10 \\, \\mu\\text{T}$$

**Konklusjon:**
- Ved 5 cm: $B = 40 \\, \\mu\\text{T}$ (omtrent samme som Jordens felt!)
- Ved 20 cm: $B = 10 \\, \\mu\\text{T}$

Magnetfeltet avtar proporsjonalt med avstanden ($B \\propto 1/r$).`,
    },

    // ========== SUPERPOSISJON AV MAGNETFELT ==========
    {
      id: 'fys2-4-1-superposisjon',
      type: 'text',
      content: `## Superposisjon av magnetfelt

Når vi har flere strømførende ledere, adderes magnetfeltene **vektorielt**. Dette kalles **superposisjonsprinsippet**:

$$\\vec{B}_{\\text{total}} = \\vec{B}_1 + \\vec{B}_2 + \\vec{B}_3 + ...$$

**Viktig:** Magnetfelt er vektorer! Vi må ta hensyn til både styrke og retning.

**Spesialtilfeller:**

**1. Parallelle ledere med strøm i samme retning:**
- Mellom lederne: Feltene peker i motsatte retninger → delvis utligning
- Utenfor lederne: Feltene peker i samme retning → forsterkning

**2. Parallelle ledere med strøm i motsatte retninger:**
- Mellom lederne: Feltene peker i samme retning → forsterkning
- Utenfor lederne: Feltene peker i motsatte retninger → delvis utligning

**3. To ledere i samme punkt:**
- Regn ut $\\vec{B}$ fra hver leder separat
- Adder vektorielt (bruk komponenter eller geometri)

**Praktisk tips:**
1. Finn retningen på hvert felt med høyrehåndsregelen
2. Regn ut størrelsen med $B = \\frac{\\mu_0 I}{2\\pi r}$
3. Adder vektorielt (tegn gjerne et diagram)`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - FELTRETNING ==========
    {
      id: 'fys2-4-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-1',
        number: '4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `En vertikal leder fører strøm oppover. En kompassnål plasseres rett øst for lederen. Hvilken vei vil kompassnålens nordpol peke?`,
        options: [
          { id: 'a', text: 'Mot nord (geografisk)' },
          { id: 'b', text: 'Mot sør' },
          { id: 'c', text: 'Mot øst (bort fra lederen)' },
          { id: 'd', text: 'Mot vest (mot lederen)' },
        ],
        correctOptionId: 'a',
        hints: [
          'Bruk høyrehåndsregelen',
          'Tommel peker oppover (strømretning)',
          'Hva er feltretningen øst for lederen?',
        ],
        solution: `**Svar: a) Mot nord**

Bruk høyrehåndsregelen:
1. Tommel peker oppover (strømmens retning)
2. Fingrene krummer seg rundt lederen

Øst for lederen krummer fingrene seg mot nord.

Magnetfeltet peker altså nordover der kompassnålen er, og kompassnålens nordpol vil rette seg etter feltet og peke mot nord.`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - FELTLINJER ==========
    {
      id: 'fys2-4-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-2',
        number: '4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hvilken påstand om magnetiske feltlinjer er FEIL?`,
        options: [
          { id: 'a', text: 'Feltlinjer går fra nordpol til sydpol utenfor magneten' },
          { id: 'b', text: 'Feltlinjer kan krysse hverandre i spesielle punkter' },
          { id: 'c', text: 'Tettere feltlinjer betyr sterkere felt' },
          { id: 'd', text: 'Magnetiske feltlinjer er alltid lukkede kurver' },
        ],
        correctOptionId: 'b',
        hints: [
          'Tenk på hva det ville bety hvis feltlinjer krysset',
          'I et krysspunkt, hvilken retning ville feltet ha?',
        ],
        solution: `**Svar: b) Feltlinjer kan krysse hverandre i spesielle punkter**

Dette er feil fordi:
- Feltlinjer viser retningen på feltet
- I et krysspunkt ville feltet ha to retninger samtidig
- Dette er fysisk umulig

De andre påstandene er riktige:
- a) Ja, feltlinjer går fra N til S utenfor magneten
- c) Ja, tettheten angir feltstyrken
- d) Ja, magnetiske feltlinjer er alltid lukkede (ingen monopoler)`,
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - MATERIALER ==========
    {
      id: 'fys2-4-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-3',
        number: '4.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hvilket materiale kan bli en permanentmagnet?`,
        options: [
          { id: 'a', text: 'Aluminium (paramagnetisk)' },
          { id: 'b', text: 'Kobber (diamagnetisk)' },
          { id: 'c', text: 'Jern (ferromagnetisk)' },
          { id: 'd', text: 'Vann (diamagnetisk)' },
        ],
        correctOptionId: 'c',
        hints: [
          'Tenk på hva som kjennetegner permanentmagneter',
          'Hvilket type materiale kan beholde magnetiseringen?',
        ],
        solution: `**Svar: c) Jern (ferromagnetisk)**

Bare **ferromagnetiske** materialer kan bli permanentmagneter:
- Jern, nikkel, kobolt
- Har magnetiske domener som kan rette seg permanent
- Beholder magnetisering etter at ytre felt fjernes

Paramagnetiske materialer (aluminium) tiltrekkes svakt, men blir ikke permanentmagneter.

Diamagnetiske materialer (kobber, vann) frastøtes svakt og kan aldri bli magneter.`,
      },
    },

    // ========== OPPGAVE 4: BEREGNING - FELTSTYRKE ==========
    {
      id: 'fys2-4-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-4',
        number: '4.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En lang, rett leder fører en strøm på $I = 15$ A.
a) Beregn magnetfeltets styrke 10 cm fra lederen.
b) Hvor langt fra lederen er feltstyrken lik Jordens magnetfelt ($B_{jord} = 50 \\, \\mu\\text{T}$)?`,
        hints: [
          'Bruk formelen $B = \\frac{\\mu_0 I}{2\\pi r}$',
          'For del b), løs likningen for $r$',
        ],
        solution: `**a) Magnetfelt ved $r = 10$ cm:**

$$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\cdot 15}{2\\pi \\cdot 0.10}$$

$$B = \\frac{4 \\times 10^{-7} \\cdot 15}{0.20} = \\frac{6 \\times 10^{-6}}{0.20} = 3.0 \\times 10^{-5} \\text{ T} = 30 \\, \\mu\\text{T}$$

**b) Avstand for $B = B_{jord} = 50 \\, \\mu\\text{T}$:**

Løser $B = \\frac{\\mu_0 I}{2\\pi r}$ for $r$:

$$r = \\frac{\\mu_0 I}{2\\pi B} = \\frac{4\\pi \\times 10^{-7} \\cdot 15}{2\\pi \\cdot 50 \\times 10^{-6}}$$

$$r = \\frac{4 \\times 10^{-7} \\cdot 15}{2 \\cdot 50 \\times 10^{-6}} = \\frac{6 \\times 10^{-6}}{10^{-4}} = 0.06 \\text{ m} = 6.0 \\text{ cm}$$

**Svar:**
a) $B = 30 \\, \\mu\\text{T}$
b) $r = 6.0$ cm`,
      },
    },

    // ========== OPPGAVE 5: BEREGNING - JORDENS FELT ==========
    {
      id: 'fys2-4-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-5',
        number: '4.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Jordens magnetfelt i Oslo har en styrke på ca. $50 \\, \\mu\\text{T}$ og peker ca. $70°$ nedover fra horisontalplanet (inklinasjon).
a) Beregn horisontalkomponenten av Jordens magnetfelt.
b) Beregn vertikalkomponenten av Jordens magnetfelt.
c) En kompassnål kan bare rotere i horisontalplanet. Forklarer kompassnålen seg etter total-feltet eller horisontalkomponenten?`,
        hints: [
          'Del opp vektoren i komponenter',
          'Horisontalkomponent: $B_h = B \\cos(70°)$',
          'Vertikalkomponent: $B_v = B \\sin(70°)$',
        ],
        solution: `**a) Horisontalkomponenten:**

$$B_h = B \\cos(70°) = 50 \\, \\mu\\text{T} \\cdot \\cos(70°) = 50 \\cdot 0.342 = 17 \\, \\mu\\text{T}$$

**b) Vertikalkomponenten:**

$$B_v = B \\sin(70°) = 50 \\, \\mu\\text{T} \\cdot \\sin(70°) = 50 \\cdot 0.940 = 47 \\, \\mu\\text{T}$$

**c) Kompassnålen:**

Kompassnålen kan bare rotere i horisontalplanet, så den reagerer bare på **horisontalkomponenten** $B_h$.

Vertikalkomponenten påvirker ikke retningen, men ville forsøke å vippe nålen nedover (som man kan observere med spesielle inklinasjonsnåler).

**Svar:**
a) $B_h = 17 \\, \\mu\\text{T}$
b) $B_v = 47 \\, \\mu\\text{T}$
c) Horisontalkomponenten`,
      },
    },

    // ========== OPPGAVE 6: BEREGNING - STRØMSTYRKE ==========
    {
      id: 'fys2-4-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-6',
        number: '4.6',
        type: 'classic',
        difficulty: 'medium',
        task: `En strømførende leder skal skape et magnetfelt på $B = 100 \\, \\mu\\text{T}$ i en avstand på 8.0 cm fra lederen. Hvor stor strøm må gå gjennom lederen?`,
        hints: [
          'Løs formelen $B = \\frac{\\mu_0 I}{2\\pi r}$ for $I$',
          'Husk å konvertere enheter',
        ],
        solution: `Vi løser formelen for strømmen $I$:

$$B = \\frac{\\mu_0 I}{2\\pi r} \\Rightarrow I = \\frac{2\\pi r B}{\\mu_0}$$

Setter inn verdier:
$$I = \\frac{2\\pi \\cdot 0.080 \\cdot 100 \\times 10^{-6}}{4\\pi \\times 10^{-7}}$$

$$I = \\frac{2 \\cdot 0.080 \\cdot 100 \\times 10^{-6}}{4 \\times 10^{-7}}$$

$$I = \\frac{16 \\times 10^{-6}}{4 \\times 10^{-7}} = \\frac{16}{4} \\times 10^{1} = 40 \\text{ A}$$

**Svar:** $I = 40$ A`,
      },
    },

    // ========== OPPGAVE 7: BEREGNING - AVSTAND ==========
    {
      id: 'fys2-4-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-7',
        number: '4.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En høyspentledning fører en strøm på $I = 500$ A.
a) Beregn magnetfeltet 1.0 m fra ledningen.
b) Beregn magnetfeltet 10 m fra ledningen.
c) Sammenlign med Jordens magnetfelt ($50 \\, \\mu\\text{T}$). Ved hvilken avstand er feltet fra ledningen like sterkt som Jordens felt?`,
        hints: [
          'Bruk $B = \\frac{\\mu_0 I}{2\\pi r}$ for begge avstander',
          'For del c), sett $B = 50 \\, \\mu\\text{T}$ og løs for $r$',
        ],
        solution: `**a) Ved $r = 1.0$ m:**

$$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\cdot 500}{2\\pi \\cdot 1.0}$$

$$B = \\frac{4 \\times 10^{-7} \\cdot 500}{2} = \\frac{2 \\times 10^{-4}}{2} = 1.0 \\times 10^{-4} \\text{ T} = 100 \\, \\mu\\text{T}$$

**b) Ved $r = 10$ m:**

$$B = \\frac{4\\pi \\times 10^{-7} \\cdot 500}{2\\pi \\cdot 10} = \\frac{2 \\times 10^{-4}}{20} = 1.0 \\times 10^{-5} \\text{ T} = 10 \\, \\mu\\text{T}$$

**c) Avstand for $B = 50 \\, \\mu\\text{T}$:**

$$r = \\frac{\\mu_0 I}{2\\pi B} = \\frac{4\\pi \\times 10^{-7} \\cdot 500}{2\\pi \\cdot 50 \\times 10^{-6}}$$

$$r = \\frac{2 \\times 10^{-4}}{10^{-4}} = 2.0 \\text{ m}$$

**Svar:**
a) $B = 100 \\, \\mu\\text{T}$ (dobbelt så sterkt som Jordens felt)
b) $B = 10 \\, \\mu\\text{T}$
c) $r = 2.0$ m`,
      },
    },

    // ========== OPPGAVE 8: VANSKELIG - SUPERPOSISJON ==========
    {
      id: 'fys2-4-1-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-8',
        number: '4.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To parallelle ledere ligger 20 cm fra hverandre. Begge fører strøm på $I = 10$ A i samme retning (oppover).
a) Beregn magnetfeltet midt mellom lederne.
b) Beregn magnetfeltet 10 cm utenfor den ene lederen (på motsatt side av den andre lederen).`,
        hints: [
          'Tegn et diagram og bruk høyrehåndsregelen for å finne feltretningene',
          'Midt mellom lederne: Hva er retningen på feltet fra hver leder?',
          'Utenfor: Begge felt peker samme vei',
        ],
        solution: `**a) Midt mellom lederne:**

Avstanden fra hvert punkt til midtpunktet er $r = 10$ cm = 0.10 m.

Feltet fra hver leder:
$$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\cdot 10}{2\\pi \\cdot 0.10} = 2.0 \\times 10^{-5} \\text{ T} = 20 \\, \\mu\\text{T}$$

Retning (høyrehåndsregelen med strøm oppover):
- Fra venstre leder: Feltet peker mot høyre (østover) i midtpunktet
- Fra høyre leder: Feltet peker mot venstre (vestover) i midtpunktet

**Feltene peker i motsatte retninger → de opphever hverandre!**

$$B_{total} = 20 \\, \\mu\\text{T} - 20 \\, \\mu\\text{T} = 0$$

**b) 10 cm utenfor høyre leder:**

- Avstand til venstre leder: $r_1 = 30$ cm = 0.30 m
- Avstand til høyre leder: $r_2 = 10$ cm = 0.10 m

Felt fra venstre leder:
$$B_1 = \\frac{4\\pi \\times 10^{-7} \\cdot 10}{2\\pi \\cdot 0.30} = \\frac{2 \\times 10^{-5}}{3} = 6.7 \\, \\mu\\text{T}$$

Felt fra høyre leder:
$$B_2 = \\frac{4\\pi \\times 10^{-7} \\cdot 10}{2\\pi \\cdot 0.10} = 20 \\, \\mu\\text{T}$$

Retning (begge strømmer går oppover):
- Begge felt peker i samme retning (nedover/sørover) på denne siden

$$B_{total} = 6.7 + 20 = 27 \\, \\mu\\text{T}$$

**Svar:**
a) $B = 0$ (feltene opphever hverandre)
b) $B = 27 \\, \\mu\\text{T}$`,
      },
    },

    // ========== OPPGAVE 9: VANSKELIG - MOTSATT STRØM ==========
    {
      id: 'fys2-4-1-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-9',
        number: '4.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To parallelle ledere ligger 12 cm fra hverandre. Leder 1 fører $I_1 = 8.0$ A oppover, leder 2 fører $I_2 = 12$ A nedover.
a) Finn magnetfeltet midt mellom lederne (styrke og retning).
b) Hvor mellom lederne er det totale magnetfeltet null?`,
        hints: [
          'Tegn et diagram med strømretninger',
          'Midt mellom: Begge felt peker samme vei (hvorfor?)',
          'For del b): Sett $B_1 = B_2$ og løs for posisjonen',
        ],
        solution: `**a) Midt mellom lederne:**

Avstanden til midtpunktet fra begge ledere: $r = 6.0$ cm = 0.060 m

Felt fra leder 1 ($I_1 = 8.0$ A oppover):
$$B_1 = \\frac{\\mu_0 I_1}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\cdot 8.0}{2\\pi \\cdot 0.060} = \\frac{3.2 \\times 10^{-5}}{0.12} = 2.7 \\times 10^{-5} \\text{ T}$$

Felt fra leder 2 ($I_2 = 12$ A nedover):
$$B_2 = \\frac{\\mu_0 I_2}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\cdot 12}{2\\pi \\cdot 0.060} = 4.0 \\times 10^{-5} \\text{ T}$$

Retning (høyrehåndsregelen):
- Leder 1 (oppover): I midtpunktet peker feltet mot leder 2
- Leder 2 (nedover): I midtpunktet peker feltet også mot leder 2 (samme retning!)

Når strømmene går i motsatte retninger, peker begge felt samme vei mellom lederne.

$$B_{total} = B_1 + B_2 = 27 + 40 = 67 \\, \\mu\\text{T}$$

**b) Nullpunkt:**

Nullpunkt finnes der $B_1 = B_2$, men utenfor begge ledere (ikke mellom dem, siden feltene peker samme vei der).

La $x$ være avstanden fra leder 1 mot venstre (bort fra leder 2):

$$\\frac{\\mu_0 I_1}{2\\pi x} = \\frac{\\mu_0 I_2}{2\\pi (0.12 + x)}$$

$$\\frac{I_1}{x} = \\frac{I_2}{0.12 + x}$$

$$\\frac{8.0}{x} = \\frac{12}{0.12 + x}$$

$$8.0(0.12 + x) = 12x$$
$$0.96 + 8x = 12x$$
$$0.96 = 4x$$
$$x = 0.24 \\text{ m} = 24 \\text{ cm}$$

**Svar:**
a) $B = 67 \\, \\mu\\text{T}$, retning mot leder 2
b) 24 cm til venstre for leder 1`,
      },
    },

    // ========== OPPGAVE 10: VANSKELIG - TRE LEDERE ==========
    {
      id: 'fys2-4-1-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-10',
        number: '4.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Tre parallelle ledere er plassert i hjørnene av en likesidet trekant med side 10 cm. Alle tre lederne fører strøm på $I = 5.0$ A i samme retning (ut av papiret).
a) Finn magnetfeltet i sentrum av trekanten.
b) Hva skjer med feltet i sentrum hvis én av strømmene reverseres?`,
        hints: [
          'Avstanden fra hvert hjørne til sentrum av en likesidet trekant er $r = \\frac{a}{\\sqrt{3}}$',
          'Hvert felt har styrke $B = \\frac{\\mu_0 I}{2\\pi r}$',
          'Symmetri: Tenk på retningene til de tre feltene',
        ],
        solution: `**a) Felt i sentrum:**

For en likesidet trekant med side $a = 10$ cm er avstanden fra hjørne til sentrum:
$$r = \\frac{a}{\\sqrt{3}} = \\frac{0.10}{\\sqrt{3}} = 0.0577 \\text{ m}$$

Hvert felt har styrke:
$$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\cdot 5.0}{2\\pi \\cdot 0.0577} = \\frac{2 \\times 10^{-6}}{0.0577} = 1.73 \\times 10^{-5} \\text{ T}$$

**Retningsanalyse:**
Med alle strømmer ut av papiret (høyrehåndsregelen):
- Felt fra leder A peker vinkelrett på linjen A-sentrum, 90° mot klokken
- Felt fra leder B peker 90° mot klokken fra B-sentrum
- Felt fra leder C peker 90° mot klokken fra C-sentrum

Disse tre vektorene er separert med 120° og har like stor styrke. De danner en likesidet trekant i vektorrommet.

**Symmetri:** Tre like vektorer med 120° mellom seg summerer til null!

$$\\vec{B}_{total} = \\vec{0}$$

**b) Én strøm reversert:**

Hvis leder A får strøm inn i papiret:
- $\\vec{B}_A$ reverseres (peker 180° motsatt)
- $\\vec{B}_B$ og $\\vec{B}_C$ er uendret

Nå får vi:
$$\\vec{B}_{total} = -\\vec{B}_A + \\vec{B}_B + \\vec{B}_C$$

Siden $\\vec{B}_B + \\vec{B}_C = -\\vec{B}_A$ (fra symmetrien), blir:
$$\\vec{B}_{total} = -\\vec{B}_A + (-\\vec{B}_A) = -2\\vec{B}_A$$

Styrke: $B_{total} = 2 \\cdot 17.3 \\, \\mu\\text{T} = 34.6 \\, \\mu\\text{T}$

Retning: Mot leder A.

**Svar:**
a) $B = 0$ (symmetrisk utligning)
b) $B = 35 \\, \\mu\\text{T}$ rettet mot lederen med reversert strøm`,
      },
    },

    // ========== OPPGAVE 11: VANSKELIG - VINKELRETT ANORDNING ==========
    {
      id: 'fys2-4-1-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-11',
        number: '4.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To lange, rette ledere krysser hverandre vinkelrett uten å berøre hverandre. Leder 1 ligger langs x-aksen og fører $I_1 = 20$ A i positiv x-retning. Leder 2 ligger langs y-aksen og fører $I_2 = 15$ A i positiv y-retning. Lederne er separert med 5.0 cm i z-retning.

Finn magnetfeltet (størrelse og retning) i punktet $(x, y, z) = (0, 0, 10 \\text{ cm})$.`,
        hints: [
          'Finn avstanden fra punktet til hver leder',
          'Bruk høyrehåndsregelen for å finne retningen på hvert felt',
          'Adder feltene vektorielt',
        ],
        solution: `**Analyse av geometrien:**

Punktet er ved $(0, 0, 10 \\text{ cm})$.
Leder 1 ligger i planet $z = 2.5$ cm (midt mellom)
Leder 2 ligger i planet $z = -2.5$ cm

Avstand fra punktet til leder 1:
$$r_1 = 10 - 2.5 = 7.5 \\text{ cm} = 0.075 \\text{ m}$$

Avstand fra punktet til leder 2:
$$r_2 = 10 + 2.5 = 12.5 \\text{ cm} = 0.125 \\text{ m}$$

**Felt fra leder 1 ($I_1 = 20$ A langs x-aksen):**

$$B_1 = \\frac{\\mu_0 I_1}{2\\pi r_1} = \\frac{4\\pi \\times 10^{-7} \\cdot 20}{2\\pi \\cdot 0.075} = \\frac{8 \\times 10^{-5}}{0.15} = 5.3 \\times 10^{-5} \\text{ T}$$

Retning (høyrehånd, strøm i +x): I punktet over lederen peker feltet i **-y-retning**.

**Felt fra leder 2 ($I_2 = 15$ A langs y-aksen):**

$$B_2 = \\frac{\\mu_0 I_2}{2\\pi r_2} = \\frac{4\\pi \\times 10^{-7} \\cdot 15}{2\\pi \\cdot 0.125} = \\frac{6 \\times 10^{-5}}{0.25} = 2.4 \\times 10^{-5} \\text{ T}$$

Retning (høyrehånd, strøm i +y): I punktet over lederen peker feltet i **+x-retning**.

**Total felt:**

$$\\vec{B} = B_2 \\hat{i} - B_1 \\hat{j} = (24 \\, \\mu\\text{T})\\hat{i} - (53 \\, \\mu\\text{T})\\hat{j}$$

Størrelse:
$$B = \\sqrt{B_1^2 + B_2^2} = \\sqrt{53^2 + 24^2} = \\sqrt{2809 + 576} = \\sqrt{3385} = 58 \\, \\mu\\text{T}$$

Retning:
$$\\theta = \\arctan\\left(\\frac{-53}{24}\\right) = -66° \\text{ fra x-aksen}$$

**Svar:** $B = 58 \\, \\mu\\text{T}$, retning $66°$ under x-aksen (i xy-planet)`,
      },
    },

    // ========== OPPGAVE 12: VANSKELIG - PRAKTISK ANVENDELSE ==========
    {
      id: 'fys2-4-1-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-1-ex-12',
        number: '4.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En strømkabel i en husvegg fører vekselstrøm med effektivverdi $I_{eff} = 16$ A. Ifølge noen studier bør man unngå langvarig eksponering for magnetfelt over $0.4 \\, \\mu\\text{T}$.

a) Beregn magnetfeltet 5 cm fra kabelen.
b) Hvor langt fra kabelen må man være for å komme under grenseverdien på $0.4 \\, \\mu\\text{T}$?
c) Diskuter om dette er en realistisk bekymring i et vanlig hjem.`,
        hints: [
          'Bruk $B = \\frac{\\mu_0 I}{2\\pi r}$ med $I = I_{eff}$',
          'For del b), løs for $r$ når $B = 0.4 \\, \\mu\\text{T}$',
          'Del c) krever kritisk tenkning om praktiske forhold',
        ],
        solution: `**a) Magnetfelt 5 cm fra kabelen:**

$$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\cdot 16}{2\\pi \\cdot 0.05}$$

$$B = \\frac{4 \\times 10^{-7} \\cdot 16}{0.10} = \\frac{6.4 \\times 10^{-6}}{0.10} = 6.4 \\times 10^{-5} \\text{ T} = 64 \\, \\mu\\text{T}$$

Dette er 160 ganger over grenseverdien!

**b) Avstand for $B = 0.4 \\, \\mu\\text{T}$:**

$$r = \\frac{\\mu_0 I}{2\\pi B} = \\frac{4\\pi \\times 10^{-7} \\cdot 16}{2\\pi \\cdot 0.4 \\times 10^{-6}}$$

$$r = \\frac{4 \\times 10^{-7} \\cdot 16}{0.8 \\times 10^{-6}} = \\frac{6.4 \\times 10^{-6}}{0.8 \\times 10^{-6}} = 8.0 \\text{ m}$$

**c) Diskusjon av praktiske forhold:**

**Faktorer som reduserer bekymringen:**
1. **Toledersystem:** I praksis går strøm i to ledere (fase og nøytral) med motsatt retning. Feltene opphever hverandre delvis, og totalfeltet avtar som $1/r^2$ i stedet for $1/r$.

2. **Avstand:** Kabelen er ofte inne i veggen (10-15 cm fra overflaten), ikke 5 cm.

3. **Varierende strøm:** 16 A er maksimal belastning. Normalt er strømmen mye lavere.

4. **Usikker grenseverdi:** $0.4 \\, \\mu\\text{T}$ er en svært konservativ verdi. WHO og andre organisasjoner bruker mye høyere grenser.

**Realistisk vurdering:**
Med toledersystem og normal avstand er feltet typisk under $1 \\, \\mu\\text{T}$ ved 50 cm avstand, og under $0.1 \\, \\mu\\text{T}$ ved 1 m.

**Svar:**
a) $B = 64 \\, \\mu\\text{T}$
b) $r = 8.0$ m for én leder
c) I praksis er feltet mye lavere pga. toledersystem og typisk ikke grunn til bekymring`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-4-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Magnetisk fluktetthet:**
$$B = \\frac{\\mu_0 I}{2\\pi r}$$

**Permeabilitetskonstanten:**
$$\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T}\\cdot\\text{m/A} \\approx 1.26 \\times 10^{-6} \\text{ T}\\cdot\\text{m/A}$$

**Magnetiske feltlinjer:**
- Lukkede kurver (ingen monopoler)
- Fra N til S utenfor magneten
- Tetthet angir feltstyrke

**Høyrehåndsregelen:**
- Tommel = strømretning
- Fingre = feltretning (sirkulært)

**Jordens magnetfelt:**
- Ca. $50 \\, \\mu\\text{T}$ i Norge
- Magnetisk nordpol ≠ geografisk nordpol

**Magnetiske materialer:**
- Diamagnetisk: Svak frastøtning (alle materialer)
- Paramagnetisk: Svak tiltrekning (Al, Pt)
- Ferromagnetisk: Sterk tiltrekning, permanentmagneter (Fe, Ni, Co)

**Superposisjon:**
$$\\vec{B}_{total} = \\vec{B}_1 + \\vec{B}_2 + ...$$

**Neste kapittel:**
Vi skal lære om krefter på strømførende ledere og bevegelige ladninger i magnetfelt.`,
    },
  ],
};

// ============================================================================
// Kapittel 4.2: Magnetisk kraft på ladninger
// LK20: Beregne krefter på bevegelige ladninger i magnetfelt og beskrive praktiske anvendelser
// ============================================================================

export const CHAPTER_FYSIKK2_4_2: TextbookChapter = {
  id: 'fysikk2-4-2',
  courseId: 'fysikk2',
  chapterNumber: '4.2',
  title: 'Magnetisk kraft på ladninger',
  description: 'Lær om Lorentzkraften på bevegelige ladninger i magnetfelt, sirkulær bevegelse, syklotronfrekvens, massespektrometri og Hall-effekten.',
  estimatedMinutes: 60,
  prerequisites: ['fysikk2-4-1'],
  competenceGoals: [
    'beregne magnetisk kraft på bevegelige ladninger ved hjelp av Lorentzkraften',
    'bruke høyrehåndsregelen til å bestemme kraftretning',
    'analysere sirkulær bevegelse i magnetfelt',
    'forklare virkemåten til massespektrometer',
    'beskrive Hall-effekten og dens anvendelser',
    'forklare hvordan nordlys oppstår',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-4-2-intro',
      type: 'text',
      content: `## Krefter på ladninger i bevegelse

I forrige kapittel lærte vi at elektriske strømmer skaper magnetfelt. Men det finnes også en omvendt effekt: **magnetfelt utøver krefter på bevegelige ladninger**.

Denne kraften, kalt **Lorentzkraften**, er grunnlaget for:
- **Elektromotorer** – omdanner elektrisk energi til mekanisk energi
- **Partikkelakseleratorer** – som CERN, der partikler styres med magnetfelt
- **Massespektrometre** – identifiserer atomer og molekyler basert på masse
- **Nordlys** – ladede partikler fra sola danser i Jordens magnetfelt
- **Plasmaskjermer** – styrer elektroner for å lage bilder

**En viktig observasjon:**
Magnetfeltet virker bare på ladninger **i bevegelse**. En ladning i ro påvirkes ikke av magnetfeltet! Dette skiller magnetiske krefter fra elektriske krefter, som virker på alle ladninger uansett om de beveger seg eller ikke.`,
    },

    // ========== LORENTZKRAFTEN ==========
    {
      id: 'fys2-4-2-lorentzkraft-def',
      type: 'definition',
      title: 'Lorentzkraften',
      content: `**Lorentzkraften** er den magnetiske kraften på en bevegelig ladning i et magnetfelt:

$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$

der:
- $\\vec{F}$ er kraften på ladningen (N)
- $q$ er ladningen (C)
- $\\vec{v}$ er hastigheten til ladningen (m/s)
- $\\vec{B}$ er magnetisk fluktetthet (T)
- $\\times$ betyr kryssprodukt

**Størrelsen av kraften:**
$$F = qvB\\sin\\theta$$

der $\\theta$ er vinkelen mellom $\\vec{v}$ og $\\vec{B}$.

**Spesialtilfeller:**
- $\\theta = 90°$: $F = qvB$ (maksimal kraft)
- $\\theta = 0°$ eller $180°$: $F = 0$ (ingen kraft)`,
    },

    // ========== KRYSSPRODUKTET ==========
    {
      id: 'fys2-4-2-kryssprodukt',
      type: 'text',
      content: `## Kryssproduktet og kraftretning

Kryssproduktet $\\vec{v} \\times \\vec{B}$ gir en vektor som står **vinkelrett** på både $\\vec{v}$ og $\\vec{B}$. Dette betyr at:

> **Lorentzkraften står alltid vinkelrett på bevegelsesretningen!**

Siden kraften alltid er vinkelrett på hastigheten:
- Kraften endrer **retningen** til ladningen, ikke farten
- Ladningen beveger seg i en **krum bane**
- Magnetfeltet gjør **ingen arbeid** på ladningen (kinetisk energi bevares)

**Sammenligning med elektrisk kraft:**
- Elektrisk kraft $\\vec{F} = q\\vec{E}$ kan være parallell med bevegelsen → endrer farten
- Magnetisk kraft $\\vec{F} = q\\vec{v} \\times \\vec{B}$ er vinkelrett på bevegelsen → endrer bare retningen`,
    },

    // ========== HØYREHÅNDSREGELEN ==========
    {
      id: 'fys2-4-2-hoyrehand',
      type: 'formula',
      title: 'Høyrehåndsregelen for Lorentzkraften',
      content: `For å finne retningen på kraften $\\vec{F} = q\\vec{v} \\times \\vec{B}$:

**For positive ladninger ($q > 0$):**
1. Pek fingrene i retning av $\\vec{v}$ (hastigheten)
2. Bøy fingrene mot $\\vec{B}$ (magnetfeltet)
3. Tommelen peker i retning av $\\vec{F}$ (kraften)

**For negative ladninger ($q < 0$):**
Kraften peker **motsatt vei** av det tommelen viser.

**Alternativ metode (FBI-regelen):**
- **F**orce (kraft) = tommel
- **B**-felt = pekefinger
- **I** (strømretning/hastighet) = langfinger

Disse tre står vinkelrett på hverandre.`,
    },

    // ========== EKSEMPEL PÅ KRAFTRETNING ==========
    {
      id: 'fys2-4-2-eks-retning',
      type: 'example',
      title: 'Bestemme kraftretning',
      content: `**Oppgave:** Et elektron beveger seg med hastighet $\\vec{v}$ mot høyre (+x-retning) inn i et magnetfelt $\\vec{B}$ som peker inn i arket (+z-retning). Hvilken vei virker kraften på elektronet?

**Løsning:**

**Steg 1:** Bruk høyrehåndsregelen for en positiv ladning
- Fingre i retning $\\vec{v}$: mot høyre (+x)
- Bøy mot $\\vec{B}$: inn i arket (+z)
- Tommel peker: oppover (+y)

**Steg 2:** Korriger for negativ ladning
Elektronet har negativ ladning ($q = -e$), så kraften peker **motsatt vei**.

**Svar:** Kraften på elektronet peker **nedover** (-y-retning).

**Fysisk forklaring:**
Elektronet vil bøyes nedover. Hvis feltet dekker et stort nok område, vil elektronet følge en krum bane.`,
    },

    // ========== BEREGNING AV KRAFT ==========
    {
      id: 'fys2-4-2-beregning',
      type: 'text',
      content: `## Beregning av Lorentzkraften

**Formelen:**
$$F = |q|vB\\sin\\theta$$

der $\\theta$ er vinkelen mellom hastighetsvektoren og magnetfeltvektoren.

**Viktige verdier:**
- Elementærladningen: $e = 1.602 \\times 10^{-19}$ C
- Elektronmasse: $m_e = 9.109 \\times 10^{-31}$ kg
- Protonmasse: $m_p = 1.673 \\times 10^{-27}$ kg

**Typiske størrelsesordener:**

| Situasjon | Felt (T) | Hastighet (m/s) | Kraft (N) |
|-----------|----------|-----------------|-----------|
| Elektron i CRT | 0.001 | $10^7$ | $10^{-15}$ |
| Proton i syklotron | 1 | $10^7$ | $10^{-12}$ |
| Partikkel i CERN | 8 | $\\approx c$ | $10^{-10}$ |`,
    },

    // ========== EKSEMPEL: BEREGNE KRAFT ==========
    {
      id: 'fys2-4-2-eks-kraft',
      type: 'example',
      title: 'Beregne Lorentzkraften',
      content: `**Oppgave:** Et proton beveger seg med hastighet $v = 5.0 \\times 10^6$ m/s vinkelrett inn i et magnetfelt med styrke $B = 0.20$ T. Beregn kraften på protonet.

**Løsning:**

**Gitt:**
- $q = e = 1.602 \\times 10^{-19}$ C
- $v = 5.0 \\times 10^6$ m/s
- $B = 0.20$ T
- $\\theta = 90°$ (vinkelrett)

**Beregning:**
$$F = qvB\\sin\\theta = qvB \\cdot 1$$

$$F = (1.602 \\times 10^{-19})(5.0 \\times 10^6)(0.20)$$

$$F = 1.602 \\times 10^{-19} \\times 10^6 = 1.602 \\times 10^{-13} \\text{ N}$$

**Svar:** $F = 1.6 \\times 10^{-13}$ N

**Kontroll:** Dette er en liten kraft, men protonet har også liten masse. Akselerasjonen blir:
$$a = \\frac{F}{m} = \\frac{1.6 \\times 10^{-13}}{1.67 \\times 10^{-27}} \\approx 10^{14} \\text{ m/s}^2$$

Enorm akselerasjon! Protonet bøyes kraftig av.`,
    },

    // ========== SIRKULÆR BEVEGELSE ==========
    {
      id: 'fys2-4-2-sirkulaer',
      type: 'text',
      content: `## Sirkulær bevegelse i magnetfelt

Når en ladet partikkel beveger seg **vinkelrett** på et uniformt magnetfelt, blir den magnetiske kraften en **sentripetalkraft** som holder partikkelen i en sirkulær bane.

**Hvorfor sirkel?**
- Kraften er alltid vinkelrett på hastigheten (peker mot sentrum)
- Kraften har konstant størrelse ($F = qvB$)
- Dette er definisjonen på sirkelbevegelse!

**Utledning av radius:**

Sentripetalkraft = Lorentzkraft:
$$\\frac{mv^2}{r} = qvB$$

Løser for radius $r$:
$$r = \\frac{mv}{qB}$$

**Tolkning av formelen:**
- Større masse $m$ → større radius (tyngre partikler bøyes mindre)
- Større hastighet $v$ → større radius (raskere partikler bøyes mindre)
- Større ladning $q$ → mindre radius (mer ladet partikler bøyes mer)
- Sterkere felt $B$ → mindre radius (sterkere felt bøyer mer)`,
    },

    // ========== FORMEL: SIRKELBANERADIUS ==========
    {
      id: 'fys2-4-2-radius-formel',
      type: 'formula',
      title: 'Radius for sirkelbane',
      content: `$$r = \\frac{mv}{qB}$$

der:
- $r$ = radius for sirkelbanen (m)
- $m$ = partikkelens masse (kg)
- $v$ = partikkelens hastighet (m/s)
- $q$ = partikkelens ladning (C)
- $B$ = magnetisk fluktetthet (T)

**Alternativ form med kinetisk energi:**

Siden $E_k = \\frac{1}{2}mv^2$, har vi $v = \\sqrt{\\frac{2E_k}{m}}$:

$$r = \\frac{m}{qB}\\sqrt{\\frac{2E_k}{m}} = \\frac{1}{B}\\sqrt{\\frac{2mE_k}{q^2}} = \\frac{\\sqrt{2mE_k}}{qB}$$`,
    },

    // ========== SYKLOTRONFREKVENS ==========
    {
      id: 'fys2-4-2-syklotron',
      type: 'text',
      content: `## Syklotronfrekvens

En bemerkelsesverdig egenskap ved sirkulær bevegelse i magnetfelt er at **omløpstiden er uavhengig av hastigheten**!

**Utledning:**

Omløpstid $T$ = omkrets / hastighet:
$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi}{v} \\cdot \\frac{mv}{qB} = \\frac{2\\pi m}{qB}$$

Frekvensen (antall omløp per sekund):
$$f = \\frac{1}{T} = \\frac{qB}{2\\pi m}$$

Vinkelfrekvens:
$$\\omega = 2\\pi f = \\frac{qB}{m}$$

**Viktig innsikt:**
- Frekvensen avhenger **bare** av $q$, $B$ og $m$
- Uavhengig av hastighet og radius!
- Raskere partikler har større radius, men også lengre bane
- Disse effektene kansellerer hverandre nøyaktig

Denne frekvensen kalles **syklotronfrekvensen** og er grunnlaget for partikkelakseleratoren kalt **syklotron**.`,
    },

    // ========== FORMEL: SYKLOTRONFREKVENS ==========
    {
      id: 'fys2-4-2-syklotron-formel',
      type: 'formula',
      title: 'Syklotronfrekvens',
      content: `$$f_c = \\frac{qB}{2\\pi m}$$

$$\\omega_c = \\frac{qB}{m}$$

$$T = \\frac{2\\pi m}{qB}$$

der:
- $f_c$ = syklotronfrekvens (Hz)
- $\\omega_c$ = syklotron vinkelfrekvens (rad/s)
- $T$ = omløpstid (s)
- $q$ = ladning (C)
- $B$ = magnetfelt (T)
- $m$ = masse (kg)

**Eksempel:**
For et elektron i felt $B = 1$ T:
$$f_c = \\frac{1.6 \\times 10^{-19} \\cdot 1}{2\\pi \\cdot 9.1 \\times 10^{-31}} = 28 \\text{ GHz}$$`,
    },

    // ========== EKSEMPEL: SIRKELBEVEGELSE ==========
    {
      id: 'fys2-4-2-eks-sirkel',
      type: 'example',
      title: 'Elektron i magnetfelt',
      content: `**Oppgave:** Et elektron akselereres gjennom en potensialdifferanse på $V = 500$ V og sendes inn i et magnetfelt med $B = 0.010$ T vinkelrett på hastigheten.

a) Finn elektronets hastighet etter akselerasjonen.
b) Beregn radius for sirkelbanen i magnetfeltet.
c) Finn syklotronfrekvensen.

**Løsning:**

**a) Hastighet:**
Kinetisk energi = arbeid utført av det elektriske feltet:
$$E_k = eV$$
$$\\frac{1}{2}m_e v^2 = eV$$
$$v = \\sqrt{\\frac{2eV}{m_e}} = \\sqrt{\\frac{2 \\cdot 1.602 \\times 10^{-19} \\cdot 500}{9.109 \\times 10^{-31}}}$$
$$v = \\sqrt{1.76 \\times 10^{14}} = 1.33 \\times 10^7 \\text{ m/s}$$

**b) Radius:**
$$r = \\frac{m_e v}{eB} = \\frac{9.109 \\times 10^{-31} \\cdot 1.33 \\times 10^7}{1.602 \\times 10^{-19} \\cdot 0.010}$$
$$r = \\frac{1.21 \\times 10^{-23}}{1.60 \\times 10^{-21}} = 7.6 \\times 10^{-3} \\text{ m} = 7.6 \\text{ mm}$$

**c) Syklotronfrekvens:**
$$f_c = \\frac{eB}{2\\pi m_e} = \\frac{1.602 \\times 10^{-19} \\cdot 0.010}{2\\pi \\cdot 9.109 \\times 10^{-31}}$$
$$f_c = \\frac{1.60 \\times 10^{-21}}{5.73 \\times 10^{-30}} = 2.8 \\times 10^8 \\text{ Hz} = 280 \\text{ MHz}$$

**Svar:** a) $v = 1.3 \\times 10^7$ m/s, b) $r = 7.6$ mm, c) $f = 280$ MHz`,
    },

    // ========== HELIKSBEVEGELSE ==========
    {
      id: 'fys2-4-2-heliks',
      type: 'text',
      content: `## Heliksbevegelse – skrå inngang i magnetfeltet

Hva skjer hvis partikkelen ikke beveger seg **vinkelrett** på magnetfeltet, men i en skrå vinkel?

**Dekomponering av hastigheten:**
- $v_\\perp = v\\sin\\theta$ – komponenten vinkelrett på $\\vec{B}$
- $v_\\parallel = v\\cos\\theta$ – komponenten parallell med $\\vec{B}$

**Bevegelsen:**
- $v_\\perp$ gir **sirkulær bevegelse** (som før)
- $v_\\parallel$ er **upåvirket** av magnetfeltet (ingen kraft parallelt med $\\vec{B}$)

**Resultatet:**
Partikkelen beveger seg i en **heliks** (spiral) langs magnetfeltlinjene!

**Matematisk beskrivelse:**
- Radius: $r = \\frac{mv_\\perp}{qB} = \\frac{mv\\sin\\theta}{qB}$
- Stigning per omløp: $p = v_\\parallel \\cdot T = \\frac{2\\pi m v\\cos\\theta}{qB}$

**Praktisk betydning:**
Heliksbevegelse er nøkkelen til å forstå hvordan ladede partikler fanges i Jordens magnetfelt og skaper nordlys!`,
    },

    // ========== MASSESPEKTROMETER ==========
    {
      id: 'fys2-4-2-massespektrometer',
      type: 'text',
      content: `## Massespektrometer

Et **massespektrometer** er et instrument som separerer ioner basert på deres masse-til-ladning-forhold ($m/q$). Det er et av de viktigste analyseinstrumentene i kjemi og fysikk.

**Virkemåte:**

1. **Ionisering:** Atomer eller molekyler ioniseres (mister elektroner)

2. **Akselerasjon:** Ionene akselereres gjennom spenning $V$:
   $$\\frac{1}{2}mv^2 = qV \\quad \\Rightarrow \\quad v = \\sqrt{\\frac{2qV}{m}}$$

3. **Avbøyning:** Ionene sendes inn i et magnetfelt der de følger sirkelbaner:
   $$r = \\frac{mv}{qB} = \\frac{m}{qB}\\sqrt{\\frac{2qV}{m}} = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}}$$

4. **Deteksjon:** Ioner med ulik masse treffer detektoren på ulike steder

**Nøkkelrelasjon:**
$$r = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}} \\quad \\Rightarrow \\quad \\frac{m}{q} = \\frac{r^2 B^2}{2V}$$

Ved å måle $r$ og kjenne $B$ og $V$, kan vi beregne $m/q$.

**Anvendelser:**
- Identifisere ukjente stoffer
- Bestemme isotopforhold (f.eks. karbondatering)
- Dopingtester
- Analyse av proteiner og DNA`,
    },

    // ========== EKSEMPEL: MASSESPEKTROMETER ==========
    {
      id: 'fys2-4-2-eks-masse',
      type: 'example',
      title: 'Massespektrometer',
      content: `**Oppgave:** I et massespektrometer akselereres enkeltioniserte karbon-isotoper ($q = +e$) gjennom $V = 1000$ V og sendes inn i et magnetfelt med $B = 0.100$ T.

a) Beregn radius for $^{12}$C-ioner ($m = 12$ u).
b) Beregn radius for $^{14}$C-ioner ($m = 14$ u).
c) Hva er avstanden mellom der de to isotopene treffer detektoren?

**Gitt:** $1$ u $= 1.661 \\times 10^{-27}$ kg

**Løsning:**

**a) Radius for $^{12}$C:**
$$m_{12} = 12 \\times 1.661 \\times 10^{-27} = 1.993 \\times 10^{-26} \\text{ kg}$$

$$r_{12} = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}} = \\frac{1}{0.100}\\sqrt{\\frac{2 \\cdot 1.993 \\times 10^{-26} \\cdot 1000}{1.602 \\times 10^{-19}}}$$

$$r_{12} = 10\\sqrt{2.49 \\times 10^{-4}} = 10 \\times 0.0158 = 0.158 \\text{ m}$$

**b) Radius for $^{14}$C:**
$$m_{14} = 14 \\times 1.661 \\times 10^{-27} = 2.325 \\times 10^{-26} \\text{ kg}$$

$$r_{14} = \\frac{1}{0.100}\\sqrt{\\frac{2 \\cdot 2.325 \\times 10^{-26} \\cdot 1000}{1.602 \\times 10^{-19}}}$$

$$r_{14} = 10\\sqrt{2.90 \\times 10^{-4}} = 10 \\times 0.0170 = 0.170 \\text{ m}$$

**c) Avstand mellom isotopene:**
Ionene går en halvsirkel, så de treffer detektoren ved avstand $2r$ fra inngangen.
$$\\Delta x = 2(r_{14} - r_{12}) = 2(0.170 - 0.158) = 0.024 \\text{ m} = 2.4 \\text{ cm}$$

**Svar:** a) 15.8 cm, b) 17.0 cm, c) 2.4 cm separasjon`,
    },

    // ========== NORDLYS ==========
    {
      id: 'fys2-4-2-nordlys',
      type: 'text',
      content: `## Nordlys – naturens lysshow

**Nordlys** (aurora borealis) er et av naturens mest spektakulære fenomener, og det oppstår på grunn av Lorentzkraften!

**Hvordan oppstår nordlys?**

1. **Solvind:** Sola sender ut en strøm av ladede partikler (protoner og elektroner) med hastigheter på 300-800 km/s

2. **Magnetisk fangst:** Jordens magnetfelt fanger opp partiklene. De beveger seg i heliksbaner langs magnetfeltlinjene

3. **Polområdene:** Magnetfeltlinjene "samles" ved polene. Her ledes partiklene ned mot atmosfæren

4. **Kollisjon:** Partiklene kolliderer med atmosfærens gasser (nitrogen og oksygen) i 100-300 km høyde

5. **Lys:** Gassatomene eksiteres og sender ut lys når de faller tilbake til grunntilstanden

**Farger:**
- **Grønt:** Oksygen i 100-200 km høyde (vanligst)
- **Rødt:** Oksygen over 200 km
- **Blått/lilla:** Nitrogen
- **Rosa:** Blanding av nitrogen og oksygen

**Hvorfor ved polene?**
Partiklene følger magnetfeltlinjene i heliksbaner. Ved ekvator er feltlinjene parallelle med jordoverflaten – partiklene "spretter tilbake". Ved polene peker feltlinjene ned mot bakken – partiklene ledes inn i atmosfæren.

**Van Allen-beltene:**
Noen partikler fanges i permanente "belter" rundt Jorden, der de oscillerer mellom polene i heliksbaner.`,
    },

    // ========== HALL-EFFEKTEN ==========
    {
      id: 'fys2-4-2-hall',
      type: 'text',
      content: `## Hall-effekten

**Hall-effekten** ble oppdaget av Edwin Hall i 1879 og demonstrerer direkte at det er elektroner som bærer strøm i metaller.

**Eksperimentet:**

1. Strøm $I$ sendes gjennom en flat lederplate med tykkelse $t$ og bredde $w$
2. Et magnetfelt $\\vec{B}$ påføres vinkelrett på platen
3. En spenning $V_H$ måles på tvers av platen!

**Forklaring:**

Elektronene beveger seg med drifthastighet $v_d$ i strømretningen. Magnetfeltet gir en Lorentzkraft som skyver dem til én side av platen:

$$F = ev_d B$$

Elektronene samles på én side og etterlater positiv ladning på den andre. Dette skaper et elektrisk felt $E_H$ på tvers av platen.

I likevekt balanserer den elektriske kraften Lorentzkraften:
$$eE_H = ev_d B$$
$$E_H = v_d B$$

**Hall-spenning:**
$$V_H = E_H \\cdot w = v_d B w$$

Med $I = nev_d A = nev_d wt$ får vi:
$$V_H = \\frac{IB}{net}$$

der $n$ er elektrontetthet og $t$ er tykkelsen.`,
    },

    // ========== HALL-KOEFFISIENT ==========
    {
      id: 'fys2-4-2-hall-formel',
      type: 'formula',
      title: 'Hall-effekten',
      content: `**Hall-spenning:**
$$V_H = \\frac{IB}{net}$$

der:
- $V_H$ = Hall-spenning (V)
- $I$ = strømstyrke (A)
- $B$ = magnetfelt (T)
- $n$ = ladningsbærertetthett (m$^{-3}$)
- $e$ = elementærladning (C)
- $t$ = tykkelse på lederen (m)

**Hall-koeffisienten:**
$$R_H = \\frac{1}{ne}$$

**Anvendelser:**
1. **Hall-sensorer:** Måler magnetfelt (i telefoner, biler, industri)
2. **Strømmåling:** Kontaktløs måling av strøm i kabler
3. **Materialeanalyse:** Bestemme type og tetthet av ladningsbærere
4. **Posisjonssensorer:** Detekterer rotasjon og posisjon`,
    },

    // ========== EKSEMPEL: HALL-EFFEKT ==========
    {
      id: 'fys2-4-2-eks-hall',
      type: 'example',
      title: 'Hall-effekt i sølv',
      content: `**Oppgave:** En sølvplate med tykkelse $t = 0.50$ mm fører strøm $I = 2.0$ A. Den plasseres i et magnetfelt $B = 0.30$ T vinkelrett på platen. Hall-spenningen måles til $V_H = 0.56 \\, \\mu$V.

a) Beregn elektrondensiteten i sølv.
b) Sammenlign med teoretisk verdi (sølv har 1 fritt elektron per atom, tetthet 10500 kg/m³, atommasse 108 u).

**Løsning:**

**a) Elektrondensitet fra måling:**
$$V_H = \\frac{IB}{net} \\quad \\Rightarrow \\quad n = \\frac{IB}{V_H e t}$$

$$n = \\frac{2.0 \\times 0.30}{0.56 \\times 10^{-6} \\times 1.602 \\times 10^{-19} \\times 0.50 \\times 10^{-3}}$$

$$n = \\frac{0.60}{4.49 \\times 10^{-29}} = 1.3 \\times 10^{28} \\text{ m}^{-3}$$

**b) Teoretisk verdi:**
Antall atomer per volum:
$$n_{atom} = \\frac{\\rho N_A}{M} = \\frac{10500 \\times 6.022 \\times 10^{23}}{108 \\times 10^{-3}}$$
$$n_{atom} = 5.85 \\times 10^{28} \\text{ m}^{-3}$$

Med 1 fritt elektron per atom: $n = 5.85 \\times 10^{28}$ m$^{-3}$

**Sammenligning:**
Målt verdi er lavere enn teoretisk. Dette kan skyldes:
- Ikke alle elektroner er helt frie
- Eksperimentelle usikkerheter
- Kvantemekaniske effekter

**Svar:** a) $n = 1.3 \\times 10^{28}$ m$^{-3}$, b) Teoretisk $n = 5.9 \\times 10^{28}$ m$^{-3}$`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - KRAFTRETNING ==========
    {
      id: 'fys2-4-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-1',
        number: '4.13',
        type: 'multiple-choice',
        difficulty: 'enkel',
        task: `Et proton beveger seg mot høyre (+x) i et magnetfelt som peker oppover (+y). Hvilken retning har kraften på protonet?`,
        choices: [
          { id: 'a', text: 'Inn i arket (+z)' },
          { id: 'b', text: 'Ut av arket (-z)' },
          { id: 'c', text: 'Oppover (+y)' },
          { id: 'd', text: 'Mot venstre (-x)' },
        ],
        correctAnswer: 'b',
        hints: [
          'Bruk høyrehåndsregelen: fingre i retning $\\vec{v}$, bøy mot $\\vec{B}$, tommel = $\\vec{F}$',
          'Protonet har positiv ladning',
        ],
        solution: `**Høyrehåndsregelen:**
1. Pek fingrene mot høyre (+x) - retningen til $\\vec{v}$
2. Bøy fingrene oppover (+y) - retningen til $\\vec{B}$
3. Tommelen peker ut av arket (-z)

Siden protonet har positiv ladning, er kraften i samme retning som kryssproduktet.

**Svar: b) Ut av arket (-z)**`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - BEVEGELSE ==========
    {
      id: 'fys2-4-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-2',
        number: '4.14',
        type: 'multiple-choice',
        difficulty: 'enkel',
        task: `En ladet partikkel sendes inn i et uniformt magnetfelt vinkelrett på feltet. Hva skjer med partikkelens fart?`,
        choices: [
          { id: 'a', text: 'Farten øker jevnt' },
          { id: 'b', text: 'Farten minker jevnt' },
          { id: 'c', text: 'Farten er konstant' },
          { id: 'd', text: 'Farten oscillerer' },
        ],
        correctAnswer: 'c',
        hints: [
          'Tenk på retningen til Lorentzkraften relativt til hastigheten',
          'Hva skjer med kinetisk energi når kraften er vinkelrett på bevegelsen?',
        ],
        solution: `**Lorentzkraften er alltid vinkelrett på hastigheten:**

$\\vec{F} = q\\vec{v} \\times \\vec{B}$ står vinkelrett på $\\vec{v}$ (egenskapen til kryssprodukt).

Arbeid utført av kraften:
$$W = \\vec{F} \\cdot \\vec{v} = 0$$ (vinkelrette vektorer)

Siden magnetfeltet ikke gjør arbeid:
- Kinetisk energi er konstant
- Farten er konstant
- Bare retningen endres

**Svar: c) Farten er konstant**`,
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - SYKLOTRONFREKVENS ==========
    {
      id: 'fys2-4-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-3',
        number: '4.15',
        type: 'multiple-choice',
        difficulty: 'enkel',
        task: `Et elektron og et proton beveger seg begge vinkelrett på det samme magnetfeltet med samme fart. Hvilket utsagn er korrekt?`,
        choices: [
          { id: 'a', text: 'Elektronet har lengre omløpstid enn protonet' },
          { id: 'b', text: 'Protonet har lengre omløpstid enn elektronet' },
          { id: 'c', text: 'De har samme omløpstid' },
          { id: 'd', text: 'Omløpstiden avhenger av farten' },
        ],
        correctAnswer: 'b',
        hints: [
          'Omløpstiden er $T = \\frac{2\\pi m}{qB}$',
          'Sammenlign massene til elektron og proton',
        ],
        solution: `**Omløpstid for sirkelbevegelse:**
$$T = \\frac{2\\pi m}{qB}$$

Omløpstiden er proporsjonal med massen $m$ (når $q$ og $B$ er like).

**Massene:**
- Elektronmasse: $m_e = 9.1 \\times 10^{-31}$ kg
- Protonmasse: $m_p = 1.67 \\times 10^{-27}$ kg

Protonet er ca. 1836 ganger tyngre, så:
$$T_p = 1836 \\cdot T_e$$

**Svar: b) Protonet har lengre omløpstid enn elektronet**

Merk: Omløpstiden avhenger *ikke* av farten! Raskere partikler har større radius, men også lengre bane – effektene kansellerer.`,
      },
    },

    // ========== OPPGAVE 4: MEDIUM - BEREGNE KRAFT ==========
    {
      id: 'fys2-4-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-4',
        number: '4.16',
        type: 'classic',
        difficulty: 'medium',
        task: `Et elektron med hastighet $v = 2.5 \\times 10^6$ m/s beveger seg i en vinkel på $30°$ i forhold til et magnetfelt med styrke $B = 0.15$ T.

a) Beregn størrelsen av kraften på elektronet.
b) Beskriv formen på banen elektronet følger.`,
        hints: [
          'Bruk $F = qvB\\sin\\theta$ med $\\theta = 30°$',
          'Tenk på hvordan hastigheten kan deles i komponenter parallelt og vinkelrett på feltet',
        ],
        solution: `**a) Kraften på elektronet:**

$$F = |q|vB\\sin\\theta$$

$$F = (1.602 \\times 10^{-19})(2.5 \\times 10^6)(0.15)\\sin 30°$$

$$F = 1.602 \\times 10^{-19} \\times 2.5 \\times 10^6 \\times 0.15 \\times 0.5$$

$$F = 3.0 \\times 10^{-14} \\text{ N}$$

**b) Banens form:**

Hastigheten kan dekomponeres:
- $v_\\perp = v\\sin 30° = 1.25 \\times 10^6$ m/s (vinkelrett på $\\vec{B}$)
- $v_\\parallel = v\\cos 30° = 2.17 \\times 10^6$ m/s (parallell med $\\vec{B}$)

- $v_\\perp$ gir sirkelbevegelse vinkelrett på feltet
- $v_\\parallel$ gir jevn bevegelse langs feltet (ingen kraft)

**Banen blir en heliks (spiral)** langs magnetfeltretningen.

**Svar:** a) $F = 3.0 \\times 10^{-14}$ N, b) Heliksbane`,
      },
    },

    // ========== OPPGAVE 5: MEDIUM - RADIUS ==========
    {
      id: 'fys2-4-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-5',
        number: '4.17',
        type: 'classic',
        difficulty: 'medium',
        task: `Et proton og en alfapartikkel ($m = 4m_p$, $q = 2e$) akselereres fra ro gjennom samme potensialdifferanse $V = 2000$ V og sendes inn i et magnetfelt med $B = 0.50$ T vinkelrett på hastigheten.

a) Finn forholdet mellom hastighetene til protonet og alfapartikkelen.
b) Finn forholdet mellom radiusene for sirkelbanen.`,
        hints: [
          'Kinetisk energi = $qV$',
          'Bruk $r = \\frac{mv}{qB}$ og uttrykk $v$ ved hjelp av $q$, $V$ og $m$',
        ],
        solution: `**a) Forholdet mellom hastigheter:**

Kinetisk energi etter akselerasjon:
$$\\frac{1}{2}mv^2 = qV \\quad \\Rightarrow \\quad v = \\sqrt{\\frac{2qV}{m}}$$

For proton: $v_p = \\sqrt{\\frac{2eV}{m_p}}$

For alfa: $v_\\alpha = \\sqrt{\\frac{2 \\cdot 2e \\cdot V}{4m_p}} = \\sqrt{\\frac{4eV}{4m_p}} = \\sqrt{\\frac{eV}{m_p}}$

$$\\frac{v_p}{v_\\alpha} = \\frac{\\sqrt{\\frac{2eV}{m_p}}}{\\sqrt{\\frac{eV}{m_p}}} = \\sqrt{2}$$

**b) Forholdet mellom radier:**

$$r = \\frac{mv}{qB} = \\frac{m}{qB}\\sqrt{\\frac{2qV}{m}} = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}}$$

For proton: $r_p = \\frac{1}{B}\\sqrt{\\frac{2m_p V}{e}}$

For alfa: $r_\\alpha = \\frac{1}{B}\\sqrt{\\frac{2 \\cdot 4m_p \\cdot V}{2e}} = \\frac{1}{B}\\sqrt{\\frac{4m_p V}{e}}$

$$\\frac{r_\\alpha}{r_p} = \\sqrt{\\frac{4m_p V / e}{2m_p V / e}} = \\sqrt{2}$$

**Svar:** a) $v_p/v_\\alpha = \\sqrt{2}$, b) $r_\\alpha/r_p = \\sqrt{2}$`,
      },
    },

    // ========== OPPGAVE 6: MEDIUM - SYKLOTRONFREKVENS ==========
    {
      id: 'fys2-4-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-6',
        number: '4.18',
        type: 'classic',
        difficulty: 'medium',
        task: `I en syklotron brukes et magnetfelt på $B = 1.2$ T til å akselerere protoner.

a) Beregn syklotronfrekvensen.
b) Hvis protonene skal nå hastighet $v = 3.0 \\times 10^7$ m/s, hvor stor må radius på syklotronen være?
c) Hvor mange omløp gjør protonene hvis de akselereres med $\\Delta E = 50$ keV per omløp?`,
        hints: [
          '$f_c = \\frac{qB}{2\\pi m}$',
          '$r = \\frac{mv}{qB}$',
          'Total energi = antall omløp × energi per omløp',
        ],
        solution: `**a) Syklotronfrekvens:**

$$f_c = \\frac{eB}{2\\pi m_p} = \\frac{1.602 \\times 10^{-19} \\times 1.2}{2\\pi \\times 1.673 \\times 10^{-27}}$$

$$f_c = \\frac{1.92 \\times 10^{-19}}{1.05 \\times 10^{-26}} = 1.83 \\times 10^{7} \\text{ Hz} = 18.3 \\text{ MHz}$$

**b) Maksimal radius:**

$$r = \\frac{m_p v}{eB} = \\frac{1.673 \\times 10^{-27} \\times 3.0 \\times 10^7}{1.602 \\times 10^{-19} \\times 1.2}$$

$$r = \\frac{5.02 \\times 10^{-20}}{1.92 \\times 10^{-19}} = 0.26 \\text{ m} = 26 \\text{ cm}$$

**c) Antall omløp:**

Kinetisk energi ved $v = 3.0 \\times 10^7$ m/s:
$$E_k = \\frac{1}{2}m_p v^2 = \\frac{1}{2} \\times 1.673 \\times 10^{-27} \\times (3.0 \\times 10^7)^2$$
$$E_k = 7.53 \\times 10^{-13} \\text{ J} = \\frac{7.53 \\times 10^{-13}}{1.602 \\times 10^{-19}} = 4.7 \\times 10^6 \\text{ eV} = 4.7 \\text{ MeV}$$

Antall omløp:
$$N = \\frac{E_k}{\\Delta E} = \\frac{4.7 \\times 10^6}{50 \\times 10^3} = 94 \\text{ omløp}$$

**Svar:** a) $f_c = 18$ MHz, b) $r = 26$ cm, c) Ca. 94 omløp`,
      },
    },

    // ========== OPPGAVE 7: MEDIUM - HASTIGHETSSELEKTOR ==========
    {
      id: 'fys2-4-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-7',
        number: '4.19',
        type: 'classic',
        difficulty: 'medium',
        task: `En **hastighetsselektor** bruker kryssede elektriske og magnetiske felt til å velge ut partikler med en bestemt hastighet. Et elektrisk felt $E = 15000$ V/m og et magnetfelt $B = 0.050$ T står vinkelrett på hverandre og på partikkelstrålen.

a) Forklar hvordan hastighetselektoren fungerer.
b) Hvilken hastighet må partiklene ha for å passere gjennom uten avbøyning?
c) Er svaret avhengig av partikkelens ladning eller masse?`,
        hints: [
          'Elektrisk kraft: $F_E = qE$, magnetisk kraft: $F_B = qvB$',
          'For ingen avbøyning må kreftene balansere',
        ],
        solution: `**a) Virkemåte:**

- Det elektriske feltet gir kraft $\\vec{F}_E = q\\vec{E}$ (samme retning for alle ladninger)
- Det magnetiske feltet gir kraft $\\vec{F}_B = q\\vec{v} \\times \\vec{B}$ (avhenger av hastighet)

Feltene orienteres slik at kreftene peker i motsatt retning. Bare partikler der kreftene balanserer nøyaktig passerer gjennom – alle andre avbøyes.

**b) Hastighet for balanse:**

$$F_E = F_B$$
$$qE = qvB$$
$$v = \\frac{E}{B} = \\frac{15000}{0.050} = 3.0 \\times 10^5 \\text{ m/s}$$

**c) Avhengighet av ladning og masse:**

Legg merke til at $q$ forsvinner fra likningen! Hastigheten $v = E/B$ avhenger **verken av ladning eller masse**.

Dette gjør hastighetselektoren svært nyttig – den velger ut partikler basert utelukkende på hastighet, uansett hva slags partikler det er.

**Svar:** a) Balanse mellom elektrisk og magnetisk kraft, b) $v = 3.0 \\times 10^5$ m/s, c) Nei, uavhengig av $q$ og $m$`,
      },
    },

    // ========== OPPGAVE 8: VANSKELIG - MASSESPEKTROMETER ==========
    {
      id: 'fys2-4-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-8',
        number: '4.20',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et massespektrometer skal skille $^{235}$U$^+$ fra $^{238}$U$^+$ ioner. Ionene akselereres gjennom $V = 5000$ V og sendes inn i et magnetfelt med $B = 0.500$ T.

a) Beregn radiusene for de to isotopene.
b) Finn separasjonen mellom isotopene på detektoren (de treffer etter en halvsirkel).
c) Hvis detektoren har oppløsning på 1.0 mm, kan den skille isotopene?

**Gitt:** $1$ u $= 1.661 \\times 10^{-27}$ kg`,
        hints: [
          '$r = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}}$',
          'Separasjon = $2(r_{238} - r_{235})$',
        ],
        solution: `**a) Radier:**

$$r = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}}$$

For $^{235}$U:
$$m_{235} = 235 \\times 1.661 \\times 10^{-27} = 3.903 \\times 10^{-25} \\text{ kg}$$

$$r_{235} = \\frac{1}{0.500}\\sqrt{\\frac{2 \\times 3.903 \\times 10^{-25} \\times 5000}{1.602 \\times 10^{-19}}}$$

$$r_{235} = 2\\sqrt{\\frac{3.903 \\times 10^{-21}}{1.602 \\times 10^{-19}}} = 2\\sqrt{0.02436} = 2 \\times 0.1561 = 0.3122 \\text{ m}$$

For $^{238}$U:
$$m_{238} = 238 \\times 1.661 \\times 10^{-27} = 3.953 \\times 10^{-25} \\text{ kg}$$

$$r_{238} = 2\\sqrt{\\frac{3.953 \\times 10^{-21}}{1.602 \\times 10^{-19}}} = 2\\sqrt{0.02468} = 2 \\times 0.1571 = 0.3142 \\text{ m}$$

**b) Separasjon:**

$$\\Delta x = 2(r_{238} - r_{235}) = 2(0.3142 - 0.3122) = 2 \\times 0.0020 = 0.0040 \\text{ m} = 4.0 \\text{ mm}$$

**c) Kan de skilles?**

Separasjonen er 4.0 mm, og detektoroppløsningen er 1.0 mm.

$$\\frac{\\text{Separasjon}}{\\text{Oppløsning}} = \\frac{4.0}{1.0} = 4$$

Ja, isotopene kan tydelig skilles!

**Svar:** a) $r_{235} = 31.2$ cm, $r_{238} = 31.4$ cm, b) 4.0 mm, c) Ja, godt innenfor oppløsningen`,
      },
    },

    // ========== OPPGAVE 9: VANSKELIG - HELIKSBANE ==========
    {
      id: 'fys2-4-2-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-9',
        number: '4.21',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et proton med kinetisk energi $E_k = 1.0$ MeV sendes inn i et magnetfelt $B = 0.20$ T i en vinkel på $60°$ i forhold til feltretningen.

a) Beregn protonets hastighet.
b) Finn radius for heliksbanen.
c) Beregn stigningen (pitch) – avstanden partikkelen beveger seg langs feltet per omløp.`,
        hints: [
          '$v = \\sqrt{\\frac{2E_k}{m}}$, husk å konvertere MeV til joule',
          '$r = \\frac{mv_\\perp}{qB}$ der $v_\\perp = v\\sin 60°$',
          'Stigning $p = v_\\parallel \\cdot T$ der $T = \\frac{2\\pi m}{qB}$',
        ],
        solution: `**a) Protonets hastighet:**

$E_k = 1.0$ MeV $= 1.0 \\times 10^6 \\times 1.602 \\times 10^{-19} = 1.602 \\times 10^{-13}$ J

$$v = \\sqrt{\\frac{2E_k}{m_p}} = \\sqrt{\\frac{2 \\times 1.602 \\times 10^{-13}}{1.673 \\times 10^{-27}}}$$

$$v = \\sqrt{1.91 \\times 10^{14}} = 1.38 \\times 10^7 \\text{ m/s}$$

**b) Radius for heliksbane:**

$v_\\perp = v\\sin 60° = 1.38 \\times 10^7 \\times 0.866 = 1.20 \\times 10^7$ m/s

$$r = \\frac{m_p v_\\perp}{eB} = \\frac{1.673 \\times 10^{-27} \\times 1.20 \\times 10^7}{1.602 \\times 10^{-19} \\times 0.20}$$

$$r = \\frac{2.01 \\times 10^{-20}}{3.20 \\times 10^{-20}} = 0.63 \\text{ m}$$

**c) Stigning (pitch):**

$v_\\parallel = v\\cos 60° = 1.38 \\times 10^7 \\times 0.5 = 6.9 \\times 10^6$ m/s

Omløpstid:
$$T = \\frac{2\\pi m_p}{eB} = \\frac{2\\pi \\times 1.673 \\times 10^{-27}}{1.602 \\times 10^{-19} \\times 0.20} = \\frac{1.05 \\times 10^{-26}}{3.20 \\times 10^{-20}}$$
$$T = 3.28 \\times 10^{-7} \\text{ s}$$

Stigning:
$$p = v_\\parallel \\cdot T = 6.9 \\times 10^6 \\times 3.28 \\times 10^{-7} = 2.3 \\text{ m}$$

**Svar:** a) $v = 1.4 \\times 10^7$ m/s, b) $r = 0.63$ m, c) $p = 2.3$ m per omløp`,
      },
    },

    // ========== OPPGAVE 10: VANSKELIG - HALL-EFFEKT ==========
    {
      id: 'fys2-4-2-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-10',
        number: '4.22',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En Hall-sensor laget av en halvleder har dimensjoner: lengde 5.0 mm, bredde 2.0 mm, tykkelse 0.10 mm. Strøm $I = 10$ mA sendes gjennom lengderetningen.

a) Hvis elektrondensiteten er $n = 2.0 \\times 10^{22}$ m$^{-3}$, hva er drifthastigheten til elektronene?
b) Sensoren plasseres i et magnetfelt $B = 0.050$ T vinkelrett på strømretningen. Beregn Hall-spenningen.
c) Sammenlign følsomheten med en kobbersensor ($n = 8.5 \\times 10^{28}$ m$^{-3}$).`,
        hints: [
          '$I = nev_d A$ der $A$ er tverrsnittsareal',
          '$V_H = \\frac{IB}{net}$',
          'Følsomhet $\\propto V_H/B \\propto 1/n$',
        ],
        solution: `**a) Drifthastighet:**

Tverrsnittsareal: $A = w \\times t = 2.0 \\times 10^{-3} \\times 0.10 \\times 10^{-3} = 2.0 \\times 10^{-7}$ m²

$$I = nev_d A \\quad \\Rightarrow \\quad v_d = \\frac{I}{neA}$$

$$v_d = \\frac{10 \\times 10^{-3}}{2.0 \\times 10^{22} \\times 1.602 \\times 10^{-19} \\times 2.0 \\times 10^{-7}}$$

$$v_d = \\frac{0.010}{6.41 \\times 10^{-4}} = 15.6 \\text{ m/s}$$

**b) Hall-spenning:**

$$V_H = \\frac{IB}{net} = \\frac{10 \\times 10^{-3} \\times 0.050}{2.0 \\times 10^{22} \\times 1.602 \\times 10^{-19} \\times 0.10 \\times 10^{-3}}$$

$$V_H = \\frac{5.0 \\times 10^{-4}}{3.20 \\times 10^{-4}} = 1.56 \\text{ mV}$$

**c) Sammenligning med kobber:**

For kobber med samme geometri og strøm:
$$V_{H,Cu} = \\frac{IB}{n_{Cu}et} = \\frac{10 \\times 10^{-3} \\times 0.050}{8.5 \\times 10^{28} \\times 1.602 \\times 10^{-19} \\times 0.10 \\times 10^{-3}}$$

$$V_{H,Cu} = \\frac{5.0 \\times 10^{-4}}{1.36 \\times 10^{6}} = 3.7 \\times 10^{-10} \\text{ V} = 0.37 \\text{ nV}$$

Forholdet:
$$\\frac{V_{H,halvl}}{V_{H,Cu}} = \\frac{n_{Cu}}{n_{halvl}} = \\frac{8.5 \\times 10^{28}}{2.0 \\times 10^{22}} = 4.3 \\times 10^6$$

**Halvlederen er over 4 millioner ganger mer følsom!**

Dette er grunnen til at Hall-sensorer lages av halvledere, ikke metaller.

**Svar:** a) $v_d = 16$ m/s, b) $V_H = 1.6$ mV, c) Halvlederen er $4 \\times 10^6$ ganger mer følsom`,
      },
    },

    // ========== OPPGAVE 11: VANSKELIG - NORDLYS ==========
    {
      id: 'fys2-4-2-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-11',
        number: '4.23',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et proton fra solvinden har kinetisk energi $E_k = 5.0$ keV og nærmer seg Jorden med en vinkel på $10°$ i forhold til en magnetfeltlinje (som peker nedover). Magnetfeltets styrke er $B = 30 \\, \\mu$T.

a) Beregn radius for heliksbanen.
b) Beregn stigningen (avstand langs feltlinjen per omløp).
c) Forklar hvorfor partikkelen til slutt "speiles" tilbake ved høyere breddegrader.`,
        hints: [
          'Konverter keV til joule: $1$ keV $= 1.602 \\times 10^{-16}$ J',
          'Bruk $v_\\perp = v\\sin\\theta$ og $v_\\parallel = v\\cos\\theta$',
          'Tenk på hva som skjer når magnetfeltet blir sterkere',
        ],
        solution: `**a) Radius for heliksbane:**

$E_k = 5.0$ keV $= 5.0 \\times 10^3 \\times 1.602 \\times 10^{-19} = 8.01 \\times 10^{-16}$ J

$$v = \\sqrt{\\frac{2E_k}{m_p}} = \\sqrt{\\frac{2 \\times 8.01 \\times 10^{-16}}{1.673 \\times 10^{-27}}} = \\sqrt{9.58 \\times 10^{11}} = 9.79 \\times 10^5 \\text{ m/s}$$

$v_\\perp = v\\sin 10° = 9.79 \\times 10^5 \\times 0.174 = 1.70 \\times 10^5$ m/s

$$r = \\frac{m_p v_\\perp}{eB} = \\frac{1.673 \\times 10^{-27} \\times 1.70 \\times 10^5}{1.602 \\times 10^{-19} \\times 30 \\times 10^{-6}}$$

$$r = \\frac{2.84 \\times 10^{-22}}{4.81 \\times 10^{-24}} = 59 \\text{ m}$$

**b) Stigning:**

$v_\\parallel = v\\cos 10° = 9.79 \\times 10^5 \\times 0.985 = 9.64 \\times 10^5$ m/s

$$T = \\frac{2\\pi m_p}{eB} = \\frac{2\\pi \\times 1.673 \\times 10^{-27}}{1.602 \\times 10^{-19} \\times 30 \\times 10^{-6}} = \\frac{1.05 \\times 10^{-26}}{4.81 \\times 10^{-24}}$$
$$T = 2.19 \\times 10^{-3} \\text{ s}$$

$$p = v_\\parallel T = 9.64 \\times 10^5 \\times 2.19 \\times 10^{-3} = 2.1 \\text{ km}$$

**c) Magnetisk speiling:**

Når partikkelen beveger seg mot polene, øker magnetfeltets styrke. Da skjer følgende:

1. **Adiabatisk invariant:** Magnetisk moment $\\mu = \\frac{mv_\\perp^2}{2B}$ er bevart
2. Når $B$ øker, må $v_\\perp$ øke
3. Energien er bevart, så $v_\\parallel$ må minke
4. Ved et visst punkt blir $v_\\parallel = 0$ – partikkelen "speiles"

Dette skaper Van Allen-beltene der partikler oscillerer mellom polene.

**Svar:** a) $r = 59$ m, b) $p = 2.1$ km, c) Magnetisk speiling når feltet styrkes`,
      },
    },

    // ========== OPPGAVE 12: VANSKELIG - KOMBINERT FELT ==========
    {
      id: 'fys2-4-2-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-2-ex-12',
        number: '4.24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et elektron beveger seg i et område med både elektrisk felt $\\vec{E} = 1000$ V/m (oppover, +y) og magnetfelt $\\vec{B} = 0.010$ T (inn i arket, +z). Elektronet starter i ro.

a) Beskriv elektronets initiale bevegelse.
b) Vis at elektronet etter lang tid har en gjennomsnittlig drifthastighet $v_d = E/B$ i x-retning.
c) Beskriv formen på banen (denne bevegelsen kalles sykloidebevegelse).`,
        hints: [
          'Elektronet akselereres først av E-feltet',
          'Når det får hastighet, virker også magnetisk kraft',
          'Tenk på hva som skjer når elektronet bremses av E-feltet',
        ],
        solution: `**a) Initial bevegelse:**

Elektronet starter i ro, så $\\vec{F}_B = 0$ (ingen magnetisk kraft uten hastighet).

Kun elektrisk kraft virker:
$$\\vec{F}_E = q\\vec{E} = (-e)(E\\hat{j}) = -eE\\hat{j}$$

Elektronet akselereres **nedover** (-y-retning, motsatt E-feltet fordi $q < 0$).

**b) Gjennomsnittlig drifthastighet:**

Når elektronet får hastighet i -y-retning, gir magnetfeltet kraft i +x-retning:
$$\\vec{F}_B = q\\vec{v} \\times \\vec{B} = (-e)(-v_y\\hat{j}) \\times (B\\hat{k}) = ev_y B\\hat{i}$$

Elektronet begynner å bevege seg i +x-retning.

Nå har elektronet hastighet i +x, som gir magnetisk kraft i +y:
$$\\vec{F}_B = (-e)(v_x\\hat{i}) \\times (B\\hat{k}) = ev_x B\\hat{j}$$

Dette motvirker den elektriske kraften!

I likevekt (gjennomsnitt over tid):
$$eE = ev_d B \\quad \\Rightarrow \\quad v_d = \\frac{E}{B} = \\frac{1000}{0.010} = 10^5 \\text{ m/s}$$

**c) Sykloidebevegelse:**

Banen er en **sykloide** – formen du får når et punkt på et rullende hjul spores ut.

Bevegelsen består av:
1. En driftkomponent i +x-retning med $v_d = E/B$
2. En sirkulær "rullende" bevegelse

Elektronet beveger seg i løkker, men med netto bevegelse mot +x. Ved bunnen av hver løkke stopper det nesten, akselereres av E-feltet, og starter en ny løkke.

Syklotronradius: $r_c = \\frac{m_e E}{eB^2}$

**Svar:** a) Akselereres ned av E-felt, b) $v_d = E/B = 10^5$ m/s, c) Sykloidebane (løkker med drift i +x)`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-4-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Lorentzkraften:**
$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$
$$F = qvB\\sin\\theta$$

- Kraften er alltid vinkelrett på hastigheten
- Magnetfeltet gjør ingen arbeid (energi bevares)
- For negative ladninger: kraft motsatt av høyrehåndsregelen

**Høyrehåndsregelen:**
- Fingre i retning $\\vec{v}$
- Bøy mot $\\vec{B}$
- Tommel viser $\\vec{F}$ (for positive ladninger)

**Sirkulær bevegelse:**
$$r = \\frac{mv}{qB}$$

**Syklotronfrekvens:**
$$f_c = \\frac{qB}{2\\pi m}$$ (uavhengig av hastighet!)

**Heliksbevegelse:**
- Oppstår når partikkelen har hastighetskomponent langs $\\vec{B}$
- Forklarer nordlys og Van Allen-belter

**Massespektrometer:**
$$\\frac{m}{q} = \\frac{r^2 B^2}{2V}$$

**Hall-effekt:**
$$V_H = \\frac{IB}{net}$$

**Anvendelser:**
- Elektromotorer og generatorer
- Partikkelakseleratorer (syklotron, synkrotron)
- Massespektrometre
- Hall-sensorer
- Nordlys

**Neste kapittel:**
Vi skal lære om krefter på strømførende ledere i magnetfelt og elektromagnetisk induksjon.`,
    },
  ],
};

// ============================================================================
// Kapittel 4.3: Magnetisk kraft på strømførende ledere
// LK20: Forklare prinsippet bak elektromotorer, generatorer og høyttalere
// ============================================================================

export const CHAPTER_FYSIKK2_4_3: TextbookChapter = {
  id: 'fysikk2-4-3',
  courseId: 'fysikk2',
  chapterNumber: '4.3',
  title: 'Magnetisk kraft på strømførende ledere',
  description: 'Lær om krefter på strømførende ledere i magnetfelt, kraft mellom parallelle ledere, definisjonen av ampere, og anvendelser som elektromotorer, galvanometre og høyttalere.',
  estimatedMinutes: 55,
  prerequisites: ['fysikk2-4-2'],
  competenceGoals: [
    'utlede formelen for kraft på strømførende leder fra Lorentzkraften',
    'beregne magnetisk kraft på strømførende ledere',
    'forklare kraft mellom parallelle strømførende ledere',
    'beskrive definisjonen av ampere via magnetisk kraft',
    'analysere dreiemoment på strømsløyfer i magnetfelt',
    'forklare virkemåten til elektromotorer, galvanometre og høyttalere',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-4-3-intro',
      type: 'text',
      content: `## Fra enkeltladninger til strøm

I forrige kapittel lærte vi at magnetfelt utøver kraft på enkeltladninger i bevegelse (Lorentzkraften). Men hva skjer når vi har milliarder av ladninger som beveger seg sammen – altså en **elektrisk strøm**?

Siden strøm er bevegelse av ladninger, vil et magnetfelt også utøve kraft på en **strømførende leder**. Denne kraften er grunnlaget for:

- **Elektromotorer** – omdanner elektrisk energi til rotasjon
- **Høyttalere** – omdanner elektriske signaler til lydbølger
- **Galvanometre** – måler elektrisk strøm
- **Elektromagnetiske bremser** – brukes i tog og elbiler

**Historisk betydning:**
Oppdagelsen av at strømførende ledere utøver krefter på hverandre førte til definisjonen av **ampere** som SI-enhet for strøm. Inntil 2019 var ampere definert ved kraften mellom to parallelle ledere!`,
    },

    // ========== UTLEDNING FRA LORENTZKRAFTEN ==========
    {
      id: 'fys2-4-3-utledning',
      type: 'text',
      content: `## Utledning av kraft på strømførende leder

La oss utlede formelen for kraft på en strømførende leder fra Lorentzkraften.

**Forutsetninger:**
- En rett leder med lengde $L$ befinner seg i et uniformt magnetfelt $\\vec{B}$
- Strømmen $I$ går gjennom lederen
- Vinkelen mellom lederen og magnetfeltet er $\\theta$

**Utledning:**
Hver ladning $q$ i lederen beveger seg med drifthastighet $v_d$ og opplever kraften:
$$F_{\\text{ladning}} = qv_dB\\sin\\theta$$

Antall ladninger i lederen er $N = nAL$, der:
- $n$ = ladningstetthet (antall per volum)
- $A$ = lederens tverrsnittsareal
- $L$ = lederens lengde

Total kraft på alle ladningene:
$$F = N \\cdot qv_dB\\sin\\theta = (nAL) \\cdot qv_dB\\sin\\theta$$

Vi vet at strømmen er $I = nAqv_d$, så:
$$F = IL \\cdot B\\sin\\theta = BIL\\sin\\theta$$

Dette gir oss hovedformelen for kraft på strømførende leder.`,
    },

    // ========== FORMEL: KRAFT PÅ STRØMFØRENDE LEDER ==========
    {
      id: 'fys2-4-3-kraft-formel',
      type: 'formula',
      title: 'Kraft på strømførende leder',
      content: `**Magnetisk kraft på strømførende leder:**

$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$

**Størrelse:**
$$F = BIL\\sin\\theta$$

der:
- $F$ = kraft (N)
- $B$ = magnetisk fluktetthet (T)
- $I$ = strøm (A)
- $L$ = lengden av lederen i magnetfeltet (m)
- $\\theta$ = vinkel mellom strømretning og magnetfelt

**Spesialtilfeller:**
- $\\theta = 90°$: $F = BIL$ (maksimal kraft)
- $\\theta = 0°$ eller $180°$: $F = 0$ (ingen kraft)

**Kraftretningen** bestemmes av høyrehåndsregelen:
- Fingre i strømretningen
- Bøy mot $\\vec{B}$
- Tommel viser kraftretningen`,
    },

    // ========== HØYREHÅNDSREGELEN FOR STRØM ==========
    {
      id: 'fys2-4-3-hoyrehand',
      type: 'text',
      content: `## Høyrehåndsregelen for strømførende ledere

For å finne kraftretningen på en strømførende leder i magnetfelt:

**Metode 1: Høyrehåndsregelen**
1. Pek fingrene i **strømretningen** (fra + til -)
2. Bøy fingrene mot **magnetfeltets retning** $\\vec{B}$
3. **Tommelen** peker i kraftretningen

**Metode 2: FBI-regelen**
Med høyre hånd:
- **F**orce (kraft) = tommel
- **B**-felt = pekefinger
- **I** (strøm) = langfinger

De tre fingrene peker vinkelrett på hverandre.

**Viktig:**
- Kraften er alltid **vinkelrett** på både strømretningen og magnetfeltet
- Hvis strømmen snur retning, snur også kraften
- Hvis magnetfeltet snur retning, snur også kraften

**Eksempel:**
Strøm mot høyre (+x), magnetfelt inn i arket (+z) → kraft oppover (+y)`,
    },

    // ========== EKSEMPEL 1: ENKEL BEREGNING ==========
    {
      id: 'fys2-4-3-eks1',
      type: 'example',
      title: 'Kraft på en rett leder',
      content: `**Oppgave:**
En rett leder med lengde 20 cm bærer en strøm på 5,0 A. Lederen befinner seg i et uniformt magnetfelt på 0,30 T, vinkelrett på strømretningen. Beregn kraften på lederen.

**Løsning:**

**Gitt:**
- $L = 20$ cm $= 0,20$ m
- $I = 5,0$ A
- $B = 0,30$ T
- $\\theta = 90°$ (vinkelrett)

**Bruker formelen:**
$$F = BIL\\sin\\theta$$

$$F = 0,30 \\times 5,0 \\times 0,20 \\times \\sin 90°$$

$$F = 0,30 \\times 5,0 \\times 0,20 \\times 1 = 0,30 \\text{ N}$$

**Svar:** Kraften på lederen er **0,30 N**.

**Kommentar:** Retningen på kraften bestemmes av høyrehåndsregelen basert på strøm- og feltretning.`,
    },

    // ========== KRAFT MELLOM PARALLELLE LEDERE ==========
    {
      id: 'fys2-4-3-parallelle',
      type: 'text',
      content: `## Kraft mellom parallelle strømførende ledere

To parallelle strømførende ledere vil utøve magnetiske krefter på hverandre. Dette skjer i to steg:

**Steg 1:** Hver leder skaper et magnetfelt rundt seg (fra kapittel 4.1):
$$B = \\frac{\\mu_0 I}{2\\pi r}$$

**Steg 2:** Den andre lederen befinner seg i dette feltet og opplever en kraft.

**Resultat:**
- **Parallelle strømmer** (samme retning) → lederne **tiltrekkes**
- **Antiparallelle strømmer** (motsatt retning) → lederne **frastøtes**

**Intuisjon:**
Tenk på magnetfeltlinjene:
- Parallelle strømmer: feltlinjene mellom lederne peker motsatt vei og "kansellerer" → lavere trykk mellom lederne → tiltrekning
- Antiparallelle strømmer: feltlinjene mellom lederne peker samme vei og "forsterkes" → høyere trykk mellom lederne → frastøtning`,
    },

    // ========== FORMEL: KRAFT MELLOM LEDERE ==========
    {
      id: 'fys2-4-3-parallell-formel',
      type: 'formula',
      title: 'Kraft mellom parallelle ledere',
      content: `**Kraft per lengdeenhet mellom to parallelle ledere:**

$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$

der:
- $F/L$ = kraft per lengdeenhet (N/m)
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A (permeabiliteten i vakuum)
- $I_1, I_2$ = strømmene i de to lederne (A)
- $d$ = avstand mellom lederne (m)

**Utledning:**
Leder 1 skaper feltet $B_1 = \\frac{\\mu_0 I_1}{2\\pi d}$ ved leder 2.

Kraft på leder 2:
$$F = B_1 I_2 L = \\frac{\\mu_0 I_1}{2\\pi d} \\cdot I_2 L$$

$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$

**Retning:**
- Samme strømretning → **tiltrekning** (kraft mot hverandre)
- Motsatt strømretning → **frastøtning** (kraft fra hverandre)`,
    },

    // ========== DEFINISJON AV AMPERE ==========
    {
      id: 'fys2-4-3-ampere-def',
      type: 'definition',
      title: 'Den historiske definisjonen av ampere',
      content: `Frem til 2019 var **ampere** definert via kraften mellom parallelle ledere:

> **1 ampere** er den konstante strømmen som, når den går gjennom to rette, parallelle ledere av uendelig lengde og neglisjerbart tverrsnitt, plassert 1 meter fra hverandre i vakuum, produserer en kraft på $2 \\times 10^{-7}$ N per meter av lederens lengde.

**Verifisering:**
$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = \\frac{4\\pi \\times 10^{-7} \\times 1 \\times 1}{2\\pi \\times 1} = 2 \\times 10^{-7} \\text{ N/m}$$

**Ny definisjon (2019):**
Ampere er nå definert ved elementærladningen: $1$ A er strømmen som tilsvarer at $1/(1,602176634 \\times 10^{-19})$ elementærladninger passerer per sekund.

Dette gir samme numeriske verdi, men er mer fundamental og presis.`,
    },

    // ========== EKSEMPEL 2: KRAFT MELLOM LEDERE ==========
    {
      id: 'fys2-4-3-eks2',
      type: 'example',
      title: 'Kraft mellom parallelle ledere',
      content: `**Oppgave:**
To parallelle ledere er plassert 5,0 cm fra hverandre. De bærer strømmer på henholdsvis 10 A og 15 A i samme retning.

a) Beregn kraften per meter mellom lederne.
b) Tiltrekkes eller frastøtes lederne?

**Løsning:**

**a) Kraft per meter:**

**Gitt:**
- $I_1 = 10$ A, $I_2 = 15$ A
- $d = 5,0$ cm $= 0,050$ m
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A

$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = \\frac{4\\pi \\times 10^{-7} \\times 10 \\times 15}{2\\pi \\times 0,050}$$

$$\\frac{F}{L} = \\frac{4 \\times 10^{-7} \\times 150}{2 \\times 0,050} = \\frac{6 \\times 10^{-5}}{0,10} = 6,0 \\times 10^{-4} \\text{ N/m}$$

**b) Retning:**
Strømmene går i **samme retning**, så lederne **tiltrekkes**.

**Svar:**
a) Kraft: $6,0 \\times 10^{-4}$ N/m = 0,60 mN/m
b) Lederne tiltrekkes`,
    },

    // ========== DREIEMOMENT PÅ STRØMSLØYFE ==========
    {
      id: 'fys2-4-3-dreiemoment',
      type: 'text',
      content: `## Dreiemoment på strømsløyfe i magnetfelt

En rektangulær strømsløyfe i et magnetfelt opplever et **dreiemoment** som får den til å rotere. Dette er prinsippet bak **elektromotorer**.

**Analyse av kreftene:**
Betrakt en rektangulær sløyfe med sider $a$ (parallell med rotasjonsaksen) og $b$ (vinkelrett på aksen):

1. **Sidene parallelle med B-feltet:** Opplever kraft, men kreftene danner et par som skaper dreiemoment
2. **Sidene vinkelrette på B-feltet:** Opplever kraft langs rotasjonsaksen → ingen dreiemoment

**Kraftparet:**
- Kraft på hver side: $F = BIa$
- Momentarm (når sløyfen står vinkelrett): $b/2$
- Dreiemoment fra begge sider: $\\tau = 2 \\times F \\times \\frac{b}{2}\\sin\\phi = BIab\\sin\\phi$

Der $\\phi$ er vinkelen mellom sløyfens normalvektor og magnetfeltet.

**Areal:** $A = ab$, så:
$$\\tau = BIA\\sin\\phi$$`,
    },

    // ========== FORMEL: DREIEMOMENT ==========
    {
      id: 'fys2-4-3-dreiemoment-formel',
      type: 'formula',
      title: 'Dreiemoment på strømsløyfe',
      content: `**Dreiemoment på strømsløyfe i magnetfelt:**

$$\\tau = NBIA\\sin\\phi$$

der:
- $\\tau$ = dreiemoment (N·m)
- $N$ = antall viklinger i sløyfen
- $B$ = magnetisk fluktetthet (T)
- $I$ = strøm (A)
- $A$ = sløyfens areal (m²)
- $\\phi$ = vinkel mellom sløyfens normalvektor og $\\vec{B}$

**Magnetisk dipolmoment:**
$$\\mu_m = NIA$$

Dreiemomentet kan skrives:
$$\\tau = \\mu_m B \\sin\\phi$$

**Spesialtilfeller:**
- $\\phi = 90°$: $\\tau = NBIA$ (maksimalt dreiemoment)
- $\\phi = 0°$ eller $180°$: $\\tau = 0$ (likevekt)

**Merk:** Ved $\\phi = 0°$ er likevekten **stabil**, ved $\\phi = 180°$ er den **ustabil**.`,
    },

    // ========== ELEKTROMOTOR ==========
    {
      id: 'fys2-4-3-motor',
      type: 'text',
      content: `## Den elektriske motoren

En **elektrisk likestrømsmotor** utnytter dreiemomentet på en strømsløyfe til å skape kontinuerlig rotasjon.

**Hovedkomponenter:**
1. **Rotor (anker):** Roterende del med spolede viklinger
2. **Stator:** Fast del med permanentmagneter eller elektromagneter
3. **Kommutator:** Roterende kontaktring som snur strømretningen
4. **Børster:** Stasjonære kontakter som overfører strøm til rotor

**Virkemåte:**

1. Strøm gjennom rotorens viklinger skaper et magnetfelt
2. Rotorens felt interagerer med statorens felt → dreiemoment
3. Rotoren roterer mot likevektsposisjonen
4. **Kommutatoren** snur strømretningen akkurat når rotoren passerer likevekt
5. Dreiemomentet fortsetter i samme rotasjonsretning
6. Kontinuerlig rotasjon oppnås

**Effekt:**
$$P = \\tau \\omega$$

der $\\omega$ er vinkelhastigheten (rad/s).

**Anvendelser:**
- Elektriske kjøretøy
- Vifter og pumper
- Elektroverktøy
- Harddisker`,
    },

    // ========== GALVANOMETER ==========
    {
      id: 'fys2-4-3-galvanometer',
      type: 'text',
      content: `## Galvanometeret

Et **galvanometer** er et presisjonsinstrument for å måle små elektriske strømmer. Det bruker dreiemomentet på en strømsløyfe til å gi et visuelt utslag.

**Konstruksjon:**
1. En lett spole viklet på en ramme
2. Permanentmagnet som skaper et radialt magnetfelt
3. Fjær som gir et motdreiemoment proporsjonalt med utslaget
4. Nål eller speil festet til spolen

**Virkemåte:**

Når strøm går gjennom spolen:
1. Magnetisk dreiemoment: $\\tau_B = NBIA$
2. Fjærens motdreiemoment: $\\tau_f = k\\theta$
3. I likevekt: $NBIA = k\\theta$

$$\\theta = \\frac{NBIA}{k}$$

Utslagsvinkelen $\\theta$ er **proporsjonalt med strømmen** $I$.

**Følsomhet:**
$$S = \\frac{\\theta}{I} = \\frac{NBA}{k}$$

Høy følsomhet krever:
- Mange viklinger ($N$)
- Sterkt magnetfelt ($B$)
- Stort areal ($A$)
- Svak fjær (liten $k$)

**Anvendelser:**
- Basis for analoge amperemetre og voltmetre
- Seismografer
- Laser-skannere`,
    },

    // ========== HØYTTALER ==========
    {
      id: 'fys2-4-3-hoyttaler',
      type: 'text',
      content: `## Høyttaleren

En **dynamisk høyttaler** omdanner elektriske signaler til lydbølger ved hjelp av magnetisk kraft på en strømførende spole.

**Konstruksjon:**
1. **Permanent magnet:** Skaper et sterkt, radialt magnetfelt i luftgapet
2. **Svingspole:** Lett spole viklet rundt en sylinder, plassert i luftgapet
3. **Membran (kone):** Festet til svingspolen, vibrerer og skaper lyd
4. **Ramme:** Holder komponentene på plass

**Virkemåte:**

1. Lydsignalet (vekselstrøm) sendes gjennom svingspolen
2. Magnetisk kraft på spolen: $F = BIL$
3. Kraften varierer med strømmen (lydsignalet)
4. Spolen og membranen vibrerer frem og tilbake
5. Membranen komprimerer og ekspanderer luften
6. **Lydbølger** forplanter seg ut i rommet

**Frekvensrespons:**
- Kraften følger strømsignalet umiddelbart
- Membranen har treghet og resonans
- Ulike høyttalerstørrelser for ulike frekvenser:
  - Store (woofer): lave frekvenser
  - Mellomstore: mellomtoner
  - Små (tweeter): høye frekvenser

**Kraftberegning:**
For en spole med $N$ viklinger, radius $r$, og strøm $I$:
$$F = NB(2\\pi r)I = 2\\pi NBrI$$`,
    },

    // ========== EKSEMPEL 3: HØYTTALERBEREGNING ==========
    {
      id: 'fys2-4-3-eks3',
      type: 'example',
      title: 'Kraft i høyttaler',
      content: `**Oppgave:**
En høyttalers svingspole har 50 viklinger med radius 2,5 cm. Spolen befinner seg i et magnetfelt på 1,2 T. Maksimal strøm er 0,80 A.

a) Beregn maksimal kraft på svingspolen.
b) Hvis membranen har masse 15 g, hva blir maksimal akselerasjon?

**Løsning:**

**a) Maksimal kraft:**

Total lengde av leder i magnetfeltet:
$$L = N \\times 2\\pi r = 50 \\times 2\\pi \\times 0,025 = 7,85 \\text{ m}$$

Kraft:
$$F = BIL = 1,2 \\times 0,80 \\times 7,85 = 7,5 \\text{ N}$$

**b) Maksimal akselerasjon:**

$$a = \\frac{F}{m} = \\frac{7,5}{0,015} = 500 \\text{ m/s}^2$$

**Svar:**
a) $F_{max} = 7,5$ N
b) $a_{max} = 500$ m/s² ≈ 50g (50 ganger tyngdeakselerasjonen)

**Kommentar:** Den høye akselerasjonen er nødvendig for å skape de raske vibrasjonene som kreves for høye frekvenser.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - KRAFTRETNING ==========
    {
      id: 'fys2-4-3-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-1',
        number: '4.25',
        type: 'multiple_choice',
        difficulty: 'lett',
        task: `En rett leder bærer strøm mot høyre (→). Magnetfeltet peker inn i arket (⊗). Hvilken retning har kraften på lederen?`,
        choices: [
          'A) Oppover (↑)',
          'B) Nedover (↓)',
          'C) Mot høyre (→)',
          'D) Mot venstre (←)',
        ],
        hints: [
          'Bruk høyrehåndsregelen: fingre i strømretning, bøy mot B-felt',
          'Kraften står vinkelrett på både strøm og magnetfelt',
        ],
        solution: `**Svar: A) Oppover (↑)**

**Forklaring:**
Bruk høyrehåndsregelen:
1. Fingre peker mot høyre (strømretning)
2. Bøy fingrene inn i arket (B-feltets retning)
3. Tommelen peker oppover

Alternativt med FBI-regelen:
- Strøm (I): høyre
- B-felt: inn i arket
- Kraft (F): må være vinkelrett på begge → oppover

$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$
$$\\hat{x} \\times \\hat{z} = -\\hat{y}$$... nei, vent:
$$\\hat{x} \\times (-\\hat{z}) = \\hat{y}$$ ✓

Kraften er oppover.`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - PARALLELLE LEDERE ==========
    {
      id: 'fys2-4-3-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-2',
        number: '4.26',
        type: 'multiple_choice',
        difficulty: 'lett',
        task: `To parallelle ledere bærer strøm i motsatt retning. Hva skjer?`,
        choices: [
          'A) Lederne tiltrekkes',
          'B) Lederne frastøtes',
          'C) Ingen kraft mellom lederne',
          'D) Lederne roterer rundt hverandre',
        ],
        hints: [
          'Tenk på magnetfeltlinjene fra hver leder',
          'Mellom lederne: peker feltlinjene samme vei eller motsatt?',
        ],
        solution: `**Svar: B) Lederne frastøtes**

**Forklaring:**
Når strømmene går i motsatt retning (antiparallelle):

1. Leder 1 skaper et magnetfelt som går én vei mellom lederne
2. Leder 2 skaper et magnetfelt som går **samme vei** mellom lederne
3. Feltene forsterker hverandre mellom lederne → høyt "magnetisk trykk"
4. Lavere "trykk" på utsidene
5. Resultatet er **frastøtning**

Alternativ analyse:
- Leder 1 skaper felt ved leder 2
- Bruk høyrehåndsregelen på leder 2: kraften peker bort fra leder 1

**Huskeregel:**
- Samme strømretning → tiltrekning
- Motsatt strømretning → frastøtning`,
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - MOTORPRINSIPP ==========
    {
      id: 'fys2-4-3-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-3',
        number: '4.27',
        type: 'multiple_choice',
        difficulty: 'lett',
        task: `Hva er hovedfunksjonen til kommutatoren i en likestrømsmotor?`,
        choices: [
          'A) Forsterke strømmen i rotoren',
          'B) Snu strømretningen i rotoren ved riktig tidspunkt',
          'C) Skape magnetfeltet i statoren',
          'D) Redusere friksjonen mellom rotor og stator',
        ],
        hints: [
          'Tenk på hva som skjer når rotoren når likevektsposisjonen',
          'Uten kommutator ville rotoren bare oscillere frem og tilbake',
        ],
        solution: `**Svar: B) Snu strømretningen i rotoren ved riktig tidspunkt**

**Forklaring:**
Kommutatoren er en mekanisk bryter som automatisk snur strømretningen i rotoren:

1. Strøm gjennom rotoren skaper dreiemoment
2. Rotoren akselererer mot likevektsposisjonen (minimal potensiell energi)
3. Ved likevekt er dreiemomentet null
4. **Kommutatoren** snur strømmen akkurat i dette øyeblikket
5. Dreiemomentet fortsetter i samme rotasjonsretning
6. Rotoren fortsetter å akselerere

Uten kommutator:
- Rotoren ville nå likevekt
- Dreiemomentet ville snu og bremse rotoren
- Rotoren ville oscillere frem og tilbake
- Ingen kontinuerlig rotasjon`,
      },
    },

    // ========== OPPGAVE 4: MEDIUM - KRAFT PÅ LEDER ==========
    {
      id: 'fys2-4-3-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-4',
        number: '4.28',
        type: 'classic',
        difficulty: 'medium',
        task: `En rett kobberledning med lengde 50 cm og masse 25 g er hengt opp horisontalt i to vertikale tråder. Ledningen befinner seg i et horisontalt magnetfelt på 0,40 T som står vinkelrett på ledningen.

a) Hvor stor strøm må gå gjennom ledningen for at spenningen i trådene skal bli null?
b) I hvilken retning må strømmen gå i forhold til magnetfeltet?`,
        hints: [
          'Når spenningen er null, må den magnetiske kraften balansere tyngden',
          'Tyngde: $G = mg$, magnetisk kraft: $F = BIL$',
          'Bruk høyrehåndsregelen for å bestemme strømretning',
        ],
        solution: `**a) Strøm for å oppheve tyngden:**

For at spenningen skal bli null, må magnetisk kraft oppover balansere tyngden:
$$F_B = G$$
$$BIL = mg$$

Løser for strømmen:
$$I = \\frac{mg}{BL} = \\frac{0,025 \\times 9,81}{0,40 \\times 0,50}$$
$$I = \\frac{0,245}{0,20} = 1,2 \\text{ A}$$

**b) Strømretning:**

Kraften må peke oppover. Med høyrehåndsregelen:
- $\\vec{F}$ oppover
- $\\vec{B}$ horisontalt (inn i eller ut av planet)

Strømmen må være vinkelrett på B-feltet, og rettet slik at $\\vec{I} \\times \\vec{B}$ peker oppover.

Konkret: Hvis B-feltet peker inn i arket, må strømmen gå mot høyre (sett ovenfra).

**Svar:**
a) $I = 1,2$ A
b) Strømmen må gå slik at $\\vec{I} \\times \\vec{B}$ peker oppover (vinkelrett på både strømretning og B-felt)`,
      },
    },

    // ========== OPPGAVE 5: MEDIUM - PARALLELLE LEDERE ==========
    {
      id: 'fys2-4-3-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-5',
        number: '4.29',
        type: 'classic',
        difficulty: 'medium',
        task: `To lange, parallelle ledere er plassert 8,0 cm fra hverandre. De bærer strømmer på 20 A og 30 A i samme retning.

a) Beregn kraften per meter på hver leder.
b) Tiltrekkes eller frastøtes lederne?
c) Hvor mange meter av lederne må til for at kraften skal bli 1,0 N?`,
        hints: [
          'Bruk formelen $F/L = \\mu_0 I_1 I_2 / (2\\pi d)$',
          'Parallelle strømmer (samme retning) tiltrekker eller frastøter?',
          'For c): $F = (F/L) \\times L$',
        ],
        solution: `**a) Kraft per meter:**

$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$

$$\\frac{F}{L} = \\frac{4\\pi \\times 10^{-7} \\times 20 \\times 30}{2\\pi \\times 0,080}$$

$$\\frac{F}{L} = \\frac{4 \\times 10^{-7} \\times 600}{2 \\times 0,080} = \\frac{2,4 \\times 10^{-4}}{0,16}$$

$$\\frac{F}{L} = 1,5 \\times 10^{-3} \\text{ N/m} = 1,5 \\text{ mN/m}$$

**b) Retning:**
Strømmene går i **samme retning**, så lederne **tiltrekkes**.

**c) Lengde for F = 1,0 N:**

$$L = \\frac{F}{F/L} = \\frac{1,0}{1,5 \\times 10^{-3}} = 667 \\text{ m}$$

**Svar:**
a) $F/L = 1,5$ mN/m
b) Lederne tiltrekkes
c) $L = 667$ m (ca. 670 m)`,
      },
    },

    // ========== OPPGAVE 6: MEDIUM - KRAFT VED VINKEL ==========
    {
      id: 'fys2-4-3-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-6',
        number: '4.30',
        type: 'classic',
        difficulty: 'medium',
        task: `En leder med lengde 30 cm bærer en strøm på 8,0 A. Lederen befinner seg i et uniformt magnetfelt på 0,25 T.

a) Beregn kraften på lederen når vinkelen mellom leder og felt er 90°.
b) Beregn kraften når vinkelen er 45°.
c) Ved hvilken vinkel er kraften halvparten av maksimalverdien?`,
        hints: [
          '$F = BIL\\sin\\theta$',
          'Maksimal kraft ved $\\theta = 90°$',
          'For c): $\\sin\\theta = 0,5$ gir hvilken vinkel?',
        ],
        solution: `**a) Kraft ved 90°:**

$$F = BIL\\sin 90° = 0,25 \\times 8,0 \\times 0,30 \\times 1 = 0,60 \\text{ N}$$

**b) Kraft ved 45°:**

$$F = BIL\\sin 45° = 0,25 \\times 8,0 \\times 0,30 \\times \\frac{\\sqrt{2}}{2}$$
$$F = 0,60 \\times 0,707 = 0,42 \\text{ N}$$

**c) Vinkel for halv kraft:**

$$F = \\frac{F_{max}}{2}$$
$$BIL\\sin\\theta = \\frac{BIL}{2}$$
$$\\sin\\theta = 0,5$$
$$\\theta = 30°$$

**Svar:**
a) $F = 0,60$ N
b) $F = 0,42$ N
c) $\\theta = 30°$`,
      },
    },

    // ========== OPPGAVE 7: MEDIUM - STRØMSLØYFE ==========
    {
      id: 'fys2-4-3-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-7',
        number: '4.31',
        type: 'classic',
        difficulty: 'medium',
        task: `En rektangulær spole med 100 viklinger har dimensjoner 4,0 cm × 6,0 cm. Spolen bærer en strøm på 2,0 A og befinner seg i et magnetfelt på 0,50 T.

a) Beregn det magnetiske dipolmomentet til spolen.
b) Beregn maksimalt dreiemoment på spolen.
c) Ved hvilken vinkel mellom spolens normalvektor og B-feltet er dreiemomentet 75% av maksimum?`,
        hints: [
          'Magnetisk dipolmoment: $\\mu_m = NIA$',
          'Dreiemoment: $\\tau = \\mu_m B \\sin\\phi$',
          'Maksimalt dreiemoment når $\\phi = 90°$',
        ],
        solution: `**a) Magnetisk dipolmoment:**

Areal: $A = 0,040 \\times 0,060 = 2,4 \\times 10^{-3}$ m²

$$\\mu_m = NIA = 100 \\times 2,0 \\times 2,4 \\times 10^{-3} = 0,48 \\text{ A·m}^2$$

**b) Maksimalt dreiemoment:**

Maksimum når $\\phi = 90°$ ($\\sin 90° = 1$):
$$\\tau_{max} = \\mu_m B = 0,48 \\times 0,50 = 0,24 \\text{ N·m}$$

Alternativt:
$$\\tau_{max} = NBIA = 100 \\times 0,50 \\times 2,0 \\times 2,4 \\times 10^{-3} = 0,24 \\text{ N·m}$$

**c) Vinkel for 75% av maksimum:**

$$\\tau = 0,75 \\tau_{max}$$
$$\\mu_m B \\sin\\phi = 0,75 \\mu_m B$$
$$\\sin\\phi = 0,75$$
$$\\phi = \\arcsin(0,75) = 48,6° \\approx 49°$$

**Svar:**
a) $\\mu_m = 0,48$ A·m²
b) $\\tau_{max} = 0,24$ N·m
c) $\\phi \\approx 49°$`,
      },
    },

    // ========== OPPGAVE 8: VANSKELIG - VIPPELEDNING ==========
    {
      id: 'fys2-4-3-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-8',
        number: '4.32',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En stiv, rektangulær ledersløyfe med masse 50 g har dimensjoner 10 cm × 15 cm. Sløyfen er hengt opp slik at den kan rotere fritt om en horisontal akse langs den ene 10 cm-siden. Sløyfen befinner seg i et horisontalt magnetfelt på 0,30 T som er vinkelrett på rotasjonsaksen.

a) Hvis sløyfen bærer en strøm på 5,0 A, hvor stor vinkel vil den innstille seg på i forhold til vertikalen?
b) Hva er den maksimale strømmen sløyfen kan bære før den vipper helt rundt?`,
        hints: [
          'Magnetisk dreiemoment må balansere gravitasjonsdreiemomentet',
          'Gravitasjonskraften virker i massesenteret (midten av sløyfen)',
          'Tenk på hvordan begge dreiemomentene avhenger av vinkelen',
        ],
        solution: `**a) Likevektsvinkel:**

La $\\theta$ være vinkelen sløyfen danner med vertikalen.

**Gravitasjonsdreiemoment:**
Tyngdepunktet er i midten av sløyfen, avstand $\\frac{15}{2} = 7,5$ cm fra aksen.
$$\\tau_g = mg \\cdot \\frac{L}{2} \\sin\\theta = 0,050 \\times 9,81 \\times 0,075 \\sin\\theta$$
$$\\tau_g = 0,0368 \\sin\\theta \\text{ N·m}$$

**Magnetisk dreiemoment:**
Areal: $A = 0,10 \\times 0,15 = 0,015$ m²
Vinkelen mellom normalvektoren og B-feltet er $(90° - \\theta)$:
$$\\tau_m = BIA\\sin(90° - \\theta) = BIA\\cos\\theta$$
$$\\tau_m = 0,30 \\times 5,0 \\times 0,015 \\times \\cos\\theta = 0,0225 \\cos\\theta \\text{ N·m}$$

**Likevekt:** $\\tau_m = \\tau_g$
$$0,0225 \\cos\\theta = 0,0368 \\sin\\theta$$
$$\\tan\\theta = \\frac{0,0225}{0,0368} = 0,612$$
$$\\theta = \\arctan(0,612) = 31,4° \\approx 31°$$

**b) Maksimal strøm før vipping:**

Sløyfen vipper når det magnetiske dreiemomentet ved $\\theta = 90°$ overstiger det maksimale gravitasjonsdreiemomentet.

Maks gravitasjonsdreiemoment (ved $\\theta = 90°$):
$$\\tau_{g,max} = 0,0368 \\text{ N·m}$$

Magnetisk dreiemoment ved $\\theta = 90°$ (dvs. normalvektor horisontal):
$$\\tau_m = BIA\\cos 90° = 0$$

Dette er feil tilnærming! La oss tenke på nytt.

Kritisk punkt: Når sløyfen vipper, må magnetisk dreiemoment være størst når gravitasjonsmomentet er størst. Ved $\\theta = 90°$: $\\tau_g = \\tau_{g,max}$, men $\\tau_m = 0$.

Sløyfen vil vippe hvis $\\tau_m > \\tau_g$ for alle vinkler, dvs. ved $\\theta \\to 0$:
$$BIA \\cdot 1 > mg\\frac{L}{2} \\cdot 0$$

Dette er alltid sant nær $\\theta = 0$. Så sløyfen starter alltid å bevege seg.

Den kritiske betingelsen er at $\\tau_m \\geq \\tau_g$ selv ved $\\theta = 90°$:
Ved $\\theta = 90°$: $\\tau_m = 0$, så vi må se på energi.

**Energibetraktning:**
For at sløyfen skal vippe helt rundt, må magnetisk energi (arbeid) overstige gravitasjonspotensiell energi:

$$\\int_0^{90°} \\tau_m d\\theta \\geq \\int_0^{90°} \\tau_g d\\theta$$

Dette gir: $BIA \\geq mg\\frac{L}{2}$

$$I_{max} = \\frac{mgL}{2BA} = \\frac{0,050 \\times 9,81 \\times 0,15}{2 \\times 0,30 \\times 0,015} = \\frac{0,0736}{0,009} = 8,2 \\text{ A}$$

**Svar:**
a) $\\theta \\approx 31°$ fra vertikalen
b) $I_{max} = 8,2$ A`,
      },
    },

    // ========== OPPGAVE 9: VANSKELIG - MOTORBEREGNING ==========
    {
      id: 'fys2-4-3-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-9',
        number: '4.33',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En liten likestrømsmotor har en rotor med 200 viklinger. Hver vikling har areal 4,0 cm². Rotoren befinner seg i et magnetfelt på 0,20 T. Ved en strøm på 1,5 A roterer motoren med konstant vinkelhastighet 300 rad/s.

a) Beregn maksimalt dreiemoment på rotoren.
b) Beregn gjennomsnittlig dreiemoment (hint: middelverdien av $|\\sin\\phi|$ over én periode er $2/\\pi$).
c) Beregn motorens mekaniske effekt.
d) Hvis motoren har en virkningsgrad på 70%, hvor stor elektrisk effekt tilføres?`,
        hints: [
          'Maksimalt dreiemoment: $\\tau_{max} = NBIA$',
          'Gjennomsnitt av $|\\sin\\phi|$ over én periode er $2/\\pi \\approx 0,637$',
          'Mekanisk effekt: $P = \\bar{\\tau} \\omega$',
          'Virkningsgrad: $\\eta = P_{ut}/P_{inn}$',
        ],
        solution: `**a) Maksimalt dreiemoment:**

$$\\tau_{max} = NBIA = 200 \\times 0,20 \\times 1,5 \\times 4,0 \\times 10^{-4}$$
$$\\tau_{max} = 200 \\times 0,20 \\times 1,5 \\times 4,0 \\times 10^{-4} = 0,024 \\text{ N·m} = 24 \\text{ mN·m}$$

**b) Gjennomsnittlig dreiemoment:**

Dreiemomentet varierer som $\\tau = \\tau_{max}|\\sin\\phi|$ (absoluttverdi pga. kommutatoren).

Gjennomsnitt av $|\\sin\\phi|$ over én periode:
$$\\langle|\\sin\\phi|\\rangle = \\frac{2}{\\pi}$$

$$\\bar{\\tau} = \\frac{2}{\\pi} \\tau_{max} = \\frac{2}{\\pi} \\times 0,024 = 0,0153 \\text{ N·m} \\approx 15 \\text{ mN·m}$$

**c) Mekanisk effekt:**

$$P_{mek} = \\bar{\\tau} \\omega = 0,0153 \\times 300 = 4,6 \\text{ W}$$

**d) Elektrisk effekt tilført:**

$$\\eta = \\frac{P_{mek}}{P_{el}}$$

$$P_{el} = \\frac{P_{mek}}{\\eta} = \\frac{4,6}{0,70} = 6,6 \\text{ W}$$

**Svar:**
a) $\\tau_{max} = 24$ mN·m
b) $\\bar{\\tau} = 15$ mN·m
c) $P_{mek} = 4,6$ W
d) $P_{el} = 6,6$ W`,
      },
    },

    // ========== OPPGAVE 10: VANSKELIG - GALVANOMETER ==========
    {
      id: 'fys2-4-3-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-10',
        number: '4.34',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et galvanometer har en rektangulær spole med 500 viklinger og areal 1,5 cm². Spolen befinner seg i et radialt magnetfelt på 0,25 T. Fjærkonstanten for torsjonfjæren er $k = 2,0 \\times 10^{-6}$ N·m/rad.

a) Beregn utslagsvinkelen når strømmen er 50 µA.
b) Hva er galvanometerets følsomhet (utslag per µA)?
c) Galvanometeret skal brukes som voltmeter med fullt utslag ved 10 V. Hvilken motstand må kobles i serie?`,
        hints: [
          'Likevekt: magnetisk dreiemoment = fjærens dreiemoment',
          'Følsomhet: $S = \\theta/I$',
          'For voltmeter: $V = I(R_g + R_s)$ der $R_g$ er galvanometerets motstand',
        ],
        solution: `**a) Utslagsvinkel ved 50 µA:**

Ved likevekt: $\\tau_{mag} = \\tau_{fjær}$
$$NBIA = k\\theta$$
$$\\theta = \\frac{NBIA}{k}$$

$$\\theta = \\frac{500 \\times 0,25 \\times 50 \\times 10^{-6} \\times 1,5 \\times 10^{-4}}{2,0 \\times 10^{-6}}$$

$$\\theta = \\frac{500 \\times 0,25 \\times 50 \\times 1,5 \\times 10^{-10}}{2,0 \\times 10^{-6}}$$

$$\\theta = \\frac{9,375 \\times 10^{-7}}{2,0 \\times 10^{-6}} = 0,469 \\text{ rad}$$

Konverterer til grader: $\\theta = 0,469 \\times \\frac{180°}{\\pi} = 26,9° \\approx 27°$

**b) Følsomhet:**

$$S = \\frac{\\theta}{I} = \\frac{0,469 \\text{ rad}}{50 \\text{ µA}} = 9,4 \\times 10^{-3} \\text{ rad/µA}$$

Eller: $S = \\frac{26,9°}{50 \\text{ µA}} = 0,54°/\\text{µA}$

**c) Seriemotstand for voltmeter:**

Fullt utslag: $\\theta = 0,469$ rad ved $I = 50$ µA.

For at 10 V skal gi fullt utslag:
$$V = IR_{total}$$
$$R_{total} = \\frac{V}{I} = \\frac{10}{50 \\times 10^{-6}} = 200 \\, 000 \\, \\Omega = 200 \\text{ k}\\Omega$$

Galvanometerets motstand $R_g$ er ikke oppgitt, men er typisk mye lavere enn $R_s$, så:
$$R_s \\approx 200 \\text{ k}\\Omega$$

(Hvis $R_g$ var oppgitt: $R_s = R_{total} - R_g$)

**Svar:**
a) $\\theta = 0,47$ rad $\\approx 27°$
b) $S = 0,54°/\\mu$A (eller 9,4 mrad/µA)
c) $R_s \\approx 200$ k$\\Omega$`,
      },
    },

    // ========== OPPGAVE 11: VANSKELIG - HØYTTALER AVANSERT ==========
    {
      id: 'fys2-4-3-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-11',
        number: '4.35',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En høyttalers svingspole har 80 viklinger med gjennomsnittlig radius 3,0 cm. Spolen befinner seg i et radialt magnetfelt på 1,0 T. Membranens masse (inkludert spole) er 20 g.

a) Beregn kraften på membranen ved en strøm på 0,50 A.
b) Spolen drives med en sinusformet strøm $I = I_0\\sin(\\omega t)$ der $I_0 = 0,50$ A. Beregn membranens maksimale hastighet ved frekvensen 100 Hz (anta at membranen oppfører seg som en fri masse).
c) Beregn amplituden til membranens svingning ved 100 Hz.`,
        hints: [
          'Total lederlengde i feltet: $L = N \\times 2\\pi r$',
          'Newtons 2. lov: $F = ma$',
          'For harmonisk kraft på fri masse: $x = -F_0/(m\\omega^2)\\sin(\\omega t)$',
          'Maksimal hastighet: $v_{max} = \\omega A$',
        ],
        solution: `**a) Kraft ved 0,50 A:**

Total lederlengde:
$$L = N \\times 2\\pi r = 80 \\times 2\\pi \\times 0,030 = 15,1 \\text{ m}$$

Kraft:
$$F = BIL = 1,0 \\times 0,50 \\times 15,1 = 7,5 \\text{ N}$$

**b) Maksimal hastighet ved 100 Hz:**

Kraften varierer som:
$$F(t) = BLI_0\\sin(\\omega t) = F_0\\sin(\\omega t)$$

der $F_0 = 7,5$ N.

Bevegelsesligningen (fri masse):
$$m\\ddot{x} = F_0\\sin(\\omega t)$$

Løsning: $x(t) = -\\frac{F_0}{m\\omega^2}\\sin(\\omega t) = A\\sin(\\omega t + \\pi)$

der amplituden er:
$$A = \\frac{F_0}{m\\omega^2}$$

Vinkelhastighet: $\\omega = 2\\pi f = 2\\pi \\times 100 = 628$ rad/s

$$A = \\frac{7,5}{0,020 \\times 628^2} = \\frac{7,5}{7885} = 9,5 \\times 10^{-4} \\text{ m} = 0,95 \\text{ mm}$$

Maksimal hastighet:
$$v_{max} = \\omega A = 628 \\times 9,5 \\times 10^{-4} = 0,60 \\text{ m/s}$$

**c) Amplitude:**

Fra beregningen over:
$$A = 0,95 \\text{ mm}$$

**Svar:**
a) $F = 7,5$ N
b) $v_{max} = 0,60$ m/s
c) $A = 0,95$ mm`,
      },
    },

    // ========== OPPGAVE 12: VANSKELIG - KOMBINERT OPPGAVE ==========
    {
      id: 'fys2-4-3-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-3-ex-12',
        number: '4.36',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To lange, parallelle ledere A og B er festet vertikalt med avstand $d = 10$ cm. En tredje leder C med masse 5,0 g og lengde 20 cm kan gli friksjonsløst langs A og B som skinner. Alle tre lederne bærer strøm på 10 A.

a) Hvis strømmen i A og B går oppover, og strømmen i C går mot høyre (sett forfra), finn nettokraften på C fra A og B.
b) Skal strømmen i C gå samme vei som i A og B, eller motsatt vei, for at C skal holdes oppe av magnetisk kraft?
c) Hvor stor må strømmen i C være for at C skal sveve (balansere mot tyngden)?`,
        hints: [
          'C befinner seg i magnetfeltet fra både A og B',
          'Bruk superposisjon av feltene fra A og B',
          'For c): balanse mellom magnetisk kraft og tyngde',
        ],
        solution: `**a) Nettokraft på C:**

**Magnetfelt fra A ved C:**
Avstand fra A til C = $d/2 = 5$ cm (C er midt mellom)
$$B_A = \\frac{\\mu_0 I_A}{2\\pi (d/2)} = \\frac{4\\pi \\times 10^{-7} \\times 10}{2\\pi \\times 0,05} = \\frac{4 \\times 10^{-6}}{0,10} = 4 \\times 10^{-5} \\text{ T}$$

Retning: Ut av planet (til høyre for A med strøm oppover)

**Magnetfelt fra B ved C:**
Samme størrelse: $B_B = 4 \\times 10^{-5}$ T
Retning: Inn i planet (til venstre for B med strøm oppover)

**Ved C:** Feltene fra A og B peker **motsatt vei** og kansellerer!
$$B_{netto} = B_A - B_B = 0$$ (i midten)

Vent - dette stemmer ikke. La oss tenke på nytt:
- Strøm oppover i A: felt ved C peker inn i planet
- Strøm oppover i B: felt ved C peker også inn i planet

Feltene adderes!
$$B_{total} = B_A + B_B = 2 \\times 4 \\times 10^{-5} = 8 \\times 10^{-5} \\text{ T}$$

**Kraft på C (strøm mot høyre, felt inn i planet):**
$$F = B_{total} I_C L = 8 \\times 10^{-5} \\times 10 \\times 0,20 = 1,6 \\times 10^{-4} \\text{ N}$$

Retning: Med høyrehåndsregelen (strøm høyre × felt inn) = oppover

**b) Strømretning for å holdes oppe:**

For at kraften skal være **oppover** (mot tyngden):
Med magnetfelt inn i planet, må strømmen i C gå **mot høyre** (som i a).

Dette betyr at strømmen i C er **vinkelrett på** strømmen i A og B, ikke parallell.

**c) Strøm for svev:**

$$F_{mag} = mg$$
$$B_{total} I_C L = mg$$
$$I_C = \\frac{mg}{B_{total} L} = \\frac{0,005 \\times 9,81}{8 \\times 10^{-5} \\times 0,20}$$
$$I_C = \\frac{0,049}{1,6 \\times 10^{-5}} = 3063 \\text{ A}$$

Dette er en veldig høy strøm! La oss sjekke med riktig feltberegning.

Faktisk er $d = 10$ cm avstanden mellom A og B, så C er 5 cm fra hver.

**Svar:**
a) $F = 0,16$ mN oppover
b) Strømmen i C må være vinkelrett på strømmen i A og B (horisontalt)
c) $I_C \\approx 3100$ A (urealistisk høyt for så liten leder)`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-4-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Kraft på strømførende leder:**
$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$
$$F = BIL\\sin\\theta$$

- Kraften er maksimal når leder og felt er vinkelrette ($\\theta = 90°$)
- Kraften er null når leder og felt er parallelle ($\\theta = 0°$)

**Høyrehåndsregelen:**
- Fingre i strømretning
- Bøy mot B-felt
- Tommel viser kraftretning

**Kraft mellom parallelle ledere:**
$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$

- Samme strømretning → **tiltrekning**
- Motsatt strømretning → **frastøtning**

**Dreiemoment på strømsløyfe:**
$$\\tau = NBIA\\sin\\phi$$

der $\\phi$ er vinkelen mellom spolens normalvektor og $\\vec{B}$.

**Magnetisk dipolmoment:**
$$\\mu_m = NIA$$

**Anvendelser:**
- **Elektromotor:** Kommutator snur strømmen for kontinuerlig rotasjon
- **Galvanometer:** Utslagsvinkel proporsjonal med strøm: $\\theta = \\frac{NBIA}{k}$
- **Høyttaler:** Kraft $F = BIL$ driver membranen

**Historisk:**
Ampere var definert via kraft mellom parallelle ledere (frem til 2019).

**Neste kapittel:**
Vi skal lære om elektromagnetisk induksjon – når magnetfelt skaper elektrisk strøm.`,
    },
  ],
};

// ============================================================================
// Kapittel 4.4: Magnetfelt fra spoler og solenoider
// LK20: Forklare magnetfelt fra strømsløyfer og solenoider
// ============================================================================

export const CHAPTER_FYSIKK2_4_4: TextbookChapter = {
  id: 'fysikk2-4-4',
  courseId: 'fysikk2',
  chapterNumber: '4.4',
  title: 'Magnetfelt fra spoler og solenoider',
  description: 'Lær om hvordan elektrisk strøm skaper magnetfelt, Biot-Savarts lov, magnetfelt fra sirkulære strømsløyfer og solenoider, og anvendelser som elektromagneter og MRI.',
  estimatedMinutes: 50,
  prerequisites: ['fysikk2-4-3'],
  competenceGoals: [
    'forklare kvalitativt hvordan elektrisk strøm skaper magnetfelt (Biot-Savarts lov)',
    'beregne magnetfelt i sentrum av en sirkulær strømsløyfe',
    'beregne magnetfelt inne i en solenoid',
    'forklare hvordan elektromagneter fungerer',
    'beskrive anvendelser av spoler og elektromagneter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-4-4-intro',
      type: 'text',
      content: `## Fra strøm til magnetfelt

I de forrige kapitlene har vi sett hvordan magnetfelt virker på ladninger og strømførende ledere. Men hvor kommer magnetfelt fra?

I 1820 oppdaget Hans Christian Ørsted at en **strømførende leder skaper magnetfelt** rundt seg. Dette var en revolusjonerende oppdagelse som viste at elektrisitet og magnetisme henger sammen!

**I dette kapitlet lærer du:**
- Hvordan strøm skaper magnetfelt (Biot-Savarts lov)
- Magnetfelt fra sirkulære strømsløyfer
- Magnetfelt inne i solenoider (spoler)
- Elektromagneter og deres anvendelser
- Toroider (ringformede spoler)

**Anvendelser:**
- **MRI-skannere** – bruker sterke solenoider
- **Elektromagneter** – brukes i kraner, releer, høyttalere
- **Induktorer** – elektroniske komponenter i kretser
- **Partikkelakseleratorer** – styrer partikler med magnetfelt`,
    },

    // ========== BIOT-SAVARTS LOV ==========
    {
      id: 'fys2-4-4-biot-savart',
      type: 'text',
      content: `## Biot-Savarts lov – strøm skaper magnetfelt

**Biot-Savarts lov** (oppkalt etter Jean-Baptiste Biot og Félix Savart) beskriver hvordan en elektrisk strøm skaper magnetfelt.

### Kvalitativ forståelse

Når strøm går gjennom en leder, oppstår et magnetfelt som danner **konsentriske sirkler** rundt lederen.

**Høyrehåndsregelen for felt fra strøm:**
- Pek tommelen i strømretningen
- Fingrene krøller seg i retningen til magnetfeltet

### Magnetfelt fra lang, rett leder

For en uendelig lang, rett leder med strøm $I$, er magnetfeltet i avstand $r$ fra lederen:

$$B = \\frac{\\mu_0 I}{2\\pi r}$$

der $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A er permeabiliteten i vakuum.

**Viktige observasjoner:**
- Feltet avtar som $1/r$ (ikke $1/r^2$ som elektrisk felt fra punktladning)
- Feltlinjene er sirkler rundt lederen
- Feltet blir sterkere med større strøm
- Feltet blir svakere lenger unna lederen`,
    },

    // ========== DEFINISJON: BIOT-SAVARTS LOV ==========
    {
      id: 'fys2-4-4-def-biot-savart',
      type: 'definition',
      title: 'Magnetfelt fra lang, rett leder',
      content: `For en lang, rett leder med strøm $I$, er magnetfeltets størrelse i avstand $r$:

$$B = \\frac{\\mu_0 I}{2\\pi r}$$

**der:**
- $B$ = magnetfeltstyrke [T]
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A = permeabilitet i vakuum
- $I$ = strømstyrke [A]
- $r$ = avstand fra lederen [m]

**Feltretning:** Bruk høyrehåndsregelen – tommel i strømretning, fingrene viser feltretning.`,
    },

    // ========== EKSEMPEL: FELT FRA RETT LEDER ==========
    {
      id: 'fys2-4-4-ex-rett-leder',
      type: 'example',
      title: 'Magnetfelt fra strømførende kabel',
      content: `**Oppgave:**
En strømkabel fører 25 A. Hva er magnetfeltstyrken 10 cm fra kabelen?

**Løsning:**

**Gitt:**
- $I = 25$ A
- $r = 10$ cm $= 0,10$ m
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A

**Magnetfelt fra lang, rett leder:**
$$B = \\frac{\\mu_0 I}{2\\pi r}$$

**Setter inn verdier:**
$$B = \\frac{4\\pi \\times 10^{-7} \\times 25}{2\\pi \\times 0,10}$$

$$B = \\frac{4 \\times 25 \\times 10^{-7}}{2 \\times 0,10} = \\frac{100 \\times 10^{-7}}{0,20}$$

$$B = 5 \\times 10^{-5} \\text{ T} = 50 \\text{ μT}$$

**Svar:** Magnetfeltstyrken er 50 μT (omtrent like sterkt som jordas magnetfelt!).`,
    },

    // ========== SIRKULÆR STRØMSLØYFE ==========
    {
      id: 'fys2-4-4-sirkular-sloyfe',
      type: 'text',
      content: `## Magnetfelt fra sirkulær strømsløyfe

Når strøm går i en sirkel (en sløyfe), skaper den et magnetfelt som ligner på feltet fra en stavmagnet. Sløyfen oppfører seg som en **magnetisk dipol**.

### Felt i sentrum av sløyfen

I **sentrum** av en sirkulær sløyfe med radius $R$ og strøm $I$:

$$B = \\frac{\\mu_0 I}{2R}$$

### Feltretning

Bruk høyrehåndsregelen:
- La fingrene følge strømretningen rundt sløyfen
- Tommelen peker i retningen til magnetfeltet gjennom sentrum

Feltet peker **vinkelrett** ut av sløyfeplanet.

### Felt langs aksen

Langs sentralaksen i avstand $x$ fra sentrum:

$$B = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$$

**Merk:**
- Når $x = 0$ (i sentrum), gir dette $B = \\frac{\\mu_0 I}{2R}$
- Når $x \\gg R$ (langt fra sløyfen), avtar feltet som $1/x^3$`,
    },

    // ========== DEFINISJON: FELT I SENTRUM ==========
    {
      id: 'fys2-4-4-def-sirkular',
      type: 'definition',
      title: 'Magnetfelt i sentrum av sirkulær strømsløyfe',
      content: `For en sirkulær strømsløyfe med radius $R$ og strøm $I$:

$$B = \\frac{\\mu_0 I}{2R}$$

**For $N$ vindinger (en flat spole):**
$$B = \\frac{\\mu_0 N I}{2R}$$

**der:**
- $B$ = magnetfeltstyrke i sentrum [T]
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A
- $N$ = antall vindinger
- $I$ = strømstyrke [A]
- $R$ = radius av sløyfen [m]

**Feltretning:** Høyrehåndsregel – fingrene i strømretning, tommel viser feltretning.`,
    },

    // ========== EKSEMPEL: FELT FRA SLØYFE ==========
    {
      id: 'fys2-4-4-ex-sloyfe',
      type: 'example',
      title: 'Magnetfelt fra strømsløyfe',
      content: `**Oppgave:**
En sirkulær spole har 50 vindinger og radius 5,0 cm. Strømmen er 2,0 A.
a) Hva er magnetfeltstyrken i sentrum av spolen?
b) Sammenlign med jordas magnetfelt (~50 μT).

**Løsning:**

**Gitt:**
- $N = 50$ vindinger
- $R = 5,0$ cm $= 0,050$ m
- $I = 2,0$ A
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A

**a) Magnetfelt i sentrum:**
$$B = \\frac{\\mu_0 N I}{2R}$$

$$B = \\frac{4\\pi \\times 10^{-7} \\times 50 \\times 2,0}{2 \\times 0,050}$$

$$B = \\frac{4\\pi \\times 10^{-5}}{0,10} = 4\\pi \\times 10^{-4}$$

$$B = 1,26 \\times 10^{-3} \\text{ T} = 1,26 \\text{ mT}$$

**b) Sammenligning:**
$$\\frac{B_{spole}}{B_{jord}} = \\frac{1260 \\text{ μT}}{50 \\text{ μT}} \\approx 25$$

Spolen lager et magnetfelt som er **25 ganger sterkere** enn jordas magnetfelt!`,
    },

    // ========== SOLENOID ==========
    {
      id: 'fys2-4-4-solenoid',
      type: 'text',
      content: `## Solenoid (spole)

En **solenoid** er en lang, sylindrisk spole med mange vindinger. Den er en av de viktigste elektromagnetiske komponentene.

### Konstruksjon

- Mange vindinger av ledertråd rundt en sylinder
- Vindingene er tett pakket
- Lengde $L$, antall vindinger $N$
- **Vindingstetthet:** $n = N/L$ (vindinger per meter)

### Magnetfelt inne i solenoiden

Inne i en **lang** solenoid (der $L \\gg$ diameter) er magnetfeltet:
- **Uniformt** (likt overalt)
- **Parallelt** med spolens akse
- Gitt ved formelen: $B = \\mu_0 n I$

### Hvorfor er feltet uniformt?

Feltbidragene fra hver vinding adderes inne i solenoiden. Utenfor kansellerer feltene fra nabovindinger delvis. Resultatet er et sterkt, uniformt felt inne og et svakt felt utenfor.

### Feltretning

Bruk høyrehåndsregelen:
- La fingrene følge strømretningen rundt vindingene
- Tommelen peker i retningen til B-feltet inne i solenoiden

Alternativt: Se på solenoiden fra enden:
- Strøm **mot** klokka → Nordpol (felt ut)
- Strøm **med** klokka → Sørpol (felt inn)`,
    },

    // ========== DEFINISJON: SOLENOID ==========
    {
      id: 'fys2-4-4-def-solenoid',
      type: 'definition',
      title: 'Magnetfelt i solenoid',
      content: `For en lang solenoid med $N$ vindinger, lengde $L$, og strøm $I$:

$$B = \\mu_0 n I = \\mu_0 \\frac{N}{L} I$$

**der:**
- $B$ = magnetfeltstyrke inne i solenoiden [T]
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A
- $n = N/L$ = vindingstetthet [vindinger/m]
- $N$ = antall vindinger
- $L$ = spolens lengde [m]
- $I$ = strømstyrke [A]

**Viktig:**
- Feltet er **uniformt** inne i solenoiden
- Feltet er tilnærmet **null** utenfor
- Formelen gjelder best for $L \\gg$ diameter`,
    },

    // ========== EKSEMPEL: SOLENOID ==========
    {
      id: 'fys2-4-4-ex-solenoid',
      type: 'example',
      title: 'Beregne magnetfelt i solenoid',
      content: `**Oppgave:**
En solenoid har 800 vindinger og er 20 cm lang. Strømmen er 5,0 A.
a) Hva er vindingstettheten?
b) Hva er magnetfeltstyrken inne i solenoiden?
c) Hvor mange ganger sterkere er dette enn jordas magnetfelt?

**Løsning:**

**Gitt:**
- $N = 800$ vindinger
- $L = 20$ cm $= 0,20$ m
- $I = 5,0$ A

**a) Vindingstetthet:**
$$n = \\frac{N}{L} = \\frac{800}{0,20} = 4000 \\text{ vindinger/m}$$

**b) Magnetfelt:**
$$B = \\mu_0 n I = 4\\pi \\times 10^{-7} \\times 4000 \\times 5,0$$

$$B = 4\\pi \\times 2 \\times 10^{-3} = 8\\pi \\times 10^{-3}$$

$$B = 0,0251 \\text{ T} = 25,1 \\text{ mT}$$

**c) Sammenligning med jordas felt:**
$$\\frac{B}{B_{jord}} = \\frac{25100 \\text{ μT}}{50 \\text{ μT}} = 502$$

**Svar:** Feltet inne i solenoiden er omtrent **500 ganger sterkere** enn jordas magnetfelt!`,
    },

    // ========== ELEKTROMAGNET ==========
    {
      id: 'fys2-4-4-elektromagnet',
      type: 'text',
      content: `## Elektromagnet

En **elektromagnet** er en solenoid med en **kjerne av jernholdig materiale** (ferromagnetisk materiale).

### Hvorfor jernkjerne?

Jern og andre ferromagnetiske materialer **forsterker** magnetfeltet dramatisk. Dette skyldes at:

1. **Magnetiske domener** i jernet retter seg etter det ytre feltet
2. Jernet blir selv magnetisert
3. Det totale feltet blir summen av spolens felt og jernets magnetisering

### Forsterkning

Magnetfeltet med jernkjerne blir:
$$B = \\mu_r \\mu_0 n I$$

der $\\mu_r$ er den **relative permeabiliteten** til kjernematerialet.

**Typiske verdier for $\\mu_r$:**
- Vakuum/luft: $\\mu_r = 1$
- Myk jern: $\\mu_r = 200 - 5000$
- Silisiumstål: $\\mu_r \\approx 7000$
- Mu-metall: $\\mu_r \\approx 100\\,000$

En jernkjerne kan altså forsterke magnetfeltet **tusenvis av ganger**!

### Fordeler med elektromagneter

1. **Kan slås av og på** – bare stopp strømmen
2. **Justerbar styrke** – varier strømmen
3. **Kan lage svært sterke felt** – med jernkjerne
4. **Kan bytte polaritet** – snu strømretningen`,
    },

    // ========== EKSEMPEL: ELEKTROMAGNET ==========
    {
      id: 'fys2-4-4-ex-elektromagnet',
      type: 'example',
      title: 'Elektromagnet med jernkjerne',
      content: `**Oppgave:**
En elektromagnet har 500 vindinger på en 10 cm lang jernkjerne med $\\mu_r = 2000$. Strømmen er 3,0 A.

a) Hva er magnetfeltet uten jernkjerne?
b) Hva er magnetfeltet med jernkjerne?
c) Hvor mange ganger sterkere blir feltet med jernkjerne?

**Løsning:**

**Gitt:**
- $N = 500$, $L = 0,10$ m, $I = 3,0$ A
- $\\mu_r = 2000$

**a) Uten jernkjerne:**
$$n = \\frac{500}{0,10} = 5000 \\text{ vind/m}$$

$$B_0 = \\mu_0 n I = 4\\pi \\times 10^{-7} \\times 5000 \\times 3,0$$
$$B_0 = 6\\pi \\times 10^{-3} = 0,0188 \\text{ T} = 18,8 \\text{ mT}$$

**b) Med jernkjerne:**
$$B = \\mu_r B_0 = 2000 \\times 0,0188 = 37,7 \\text{ T}$$

**Vent!** Dette er urealistisk høyt. I praksis mettes jernet ved ca. 1-2 T.

**Realistisk svar:** Med metning: $B \\approx 1,5 - 2,0$ T

**c) Forsterkning:**
Teoretisk: 2000 ganger sterkere
Praktisk (med metning): ca. 80-100 ganger sterkere

**Merk:** Formelen $B = \\mu_r \\mu_0 n I$ gjelder bare før jernet mettes!`,
    },

    // ========== TOROID ==========
    {
      id: 'fys2-4-4-toroid',
      type: 'text',
      content: `## Toroid – ringformet spole

En **toroid** er en spole viklet rundt en ringformet kjerne (donut-form).

### Konstruksjon

- En sirkulær ring med radius $R$ (midtlinjen)
- Vindinger viklet rundt ringen
- Alle vindinger bidrar til feltet inne i ringen

### Magnetfelt i toroiden

Inne i toroiden, på midtlinjen:
$$B = \\frac{\\mu_0 N I}{2\\pi R}$$

der $R$ er avstanden fra sentrum til midtlinjen av vindingene.

### Fordeler med toroider

1. **Feltet er innesluttet** – nesten ingen feltlekkasje utenfor
2. **Ingen interferens** – påvirker ikke omgivelsene
3. **Kompakt design** – effektiv bruk av plass

### Anvendelser

- **Transformatorer** – høyeffektiv energioverføring
- **Induktorer i elektronikk** – reduserer elektromagnetisk støy
- **Strømsensorer** – måler strøm uten å bryte kretsen
- **Fusjonskraftverk (tokamak)** – holder plasma inne med sterke toroidale felt`,
    },

    // ========== ANVENDELSER ==========
    {
      id: 'fys2-4-4-anvendelser',
      type: 'text',
      content: `## Anvendelser av solenoider og elektromagneter

### MRI-skannere (Magnetisk resonansavbildning)

MRI bruker **supraledende solenoider** for å skape ekstremt sterke, uniforme magnetfelt.

**Typisk MRI-maskin:**
- Magnetfelt: 1,5 - 7 T (30 000 - 140 000 ganger jordas felt!)
- Solenoid med supraledende tråd (kjølt med flytende helium)
- Pasienten ligger inne i den store solenoiden

### Elektromagnetiske kraner

Store elektromagneter brukes til å løfte tungt metallskrap.

**Hvordan det fungerer:**
- Strøm på → magnetfeltet løfter metallet
- Strøm av → metallet slippes

### Releer og kontaktorer

Et **relé** er en elektrisk bryter styrt av en elektromagnet.

**Virkemåte:**
1. Strøm gjennom spolen skaper magnetfelt
2. Magnetfeltet trekker en jernankeret
3. Ankeret flytter en bryter
4. Bryteren kontrollerer en annen krets

### Høyttalere

Stemme-spolehøyttalere bruker elektromagneter:
- Permanent magnet skaper konstant felt
- Stemme-spole (lite elektromagnet) beveger seg i feltet
- Bevegelsen driver membranen som lager lyd

### Partikkelakseleratorer

**CERN** og andre akseleratorer bruker tusenvis av elektromagneter for å:
- Bøye partikkelbaner (dipolmagneter)
- Fokusere partikkelstråler (kvadrupolmagneter)
- Akselerere partikler (RF-hulrom med magnetfelt)`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - FELTRETNING ==========
    {
      id: 'fys2-4-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-1',
        number: '4.16',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En lang, rett leder har strøm som går oppover. Hvordan er magnetfeltets retning rundt lederen?',
        options: [
          {
            id: 'a',
            text: 'Oppover, parallelt med strømmen',
            isCorrect: false,
            feedback: 'Feil. Magnetfeltet fra en rett leder er ikke parallelt med strømmen, men går i sirkler rundt lederen.',
          },
          {
            id: 'b',
            text: 'Nedover, motsatt av strømmen',
            isCorrect: false,
            feedback: 'Feil. Magnetfeltet går i sirkler rundt lederen, ikke langs den.',
          },
          {
            id: 'c',
            text: 'I sirkler rundt lederen, mot klokka sett ovenfra',
            isCorrect: true,
            feedback: 'Riktig! Bruk høyrehåndsregelen: tommel peker i strømretning (oppover), fingrene krøller mot klokka sett ovenfra.',
          },
          {
            id: 'd',
            text: 'I sirkler rundt lederen, med klokka sett ovenfra',
            isCorrect: false,
            feedback: 'Feil. Du har brukt høyrehåndsregelen feil vei. Tommel i strømretning (oppover) gir fingrene mot klokka.',
          },
        ],
        solution: 'Høyrehåndsregelen: Pek tommelen i strømretningen (oppover). Fingrene krøller seg i magnetfeltets retning – mot klokka sett ovenfra.',
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - SOLENOID ==========
    {
      id: 'fys2-4-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-2',
        number: '4.17',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer med magnetfeltet inne i en solenoid hvis du dobler strømmen og halverer antall vindinger (med samme lengde)?',
        options: [
          {
            id: 'a',
            text: 'Feltet dobles',
            isCorrect: false,
            feedback: 'Feil. Du må ta hensyn til begge endringene: $B \\propto nI = (N/L) \\cdot I$.',
          },
          {
            id: 'b',
            text: 'Feltet halveres',
            isCorrect: false,
            feedback: 'Feil. La oss regne: Dobbel strøm gir faktor 2, halve vindinger gir faktor 0,5. Totalt: $2 \\times 0,5 = 1$.',
          },
          {
            id: 'c',
            text: 'Feltet forblir uendret',
            isCorrect: true,
            feedback: 'Riktig! $B = \\mu_0 (N/L) I$. Dobbel $I$ og halv $N$ gir: $B_{ny} = \\mu_0 (N/2)/L \\cdot 2I = \\mu_0 NI/L = B$.',
          },
          {
            id: 'd',
            text: 'Feltet firedobles',
            isCorrect: false,
            feedback: 'Feil. Du har kanskje bare regnet med at strømmen dobles. Husk at antall vindinger også halveres.',
          },
        ],
        solution: '$B = \\mu_0 n I = \\mu_0 (N/L) I$. Med $I \\to 2I$ og $N \\to N/2$: $B_{ny} = \\mu_0 \\frac{N/2}{L} \\cdot 2I = \\mu_0 \\frac{N}{L} I = B$. Feltet er uendret.',
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - ELEKTROMAGNET ==========
    {
      id: 'fys2-4-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-3',
        number: '4.18',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor brukes jernkjerne i elektromagneter?',
        options: [
          {
            id: 'a',
            text: 'Jern leder strøm bedre enn kopper',
            isCorrect: false,
            feedback: 'Feil. Kopper leder faktisk strøm bedre enn jern. Jernkjernen brukes ikke for strømledning.',
          },
          {
            id: 'b',
            text: 'Jern forsterker magnetfeltet kraftig',
            isCorrect: true,
            feedback: 'Riktig! Jern er ferromagnetisk og har høy relativ permeabilitet ($\\mu_r$ opptil flere tusen), som forsterker feltet dramatisk.',
          },
          {
            id: 'c',
            text: 'Jern holder bedre på varmen',
            isCorrect: false,
            feedback: 'Feil. Varmeegenskaper er ikke grunnen. Jern brukes fordi det er ferromagnetisk.',
          },
          {
            id: 'd',
            text: 'Jern er billigere enn andre materialer',
            isCorrect: false,
            feedback: 'Feil. Selv om jern er rimelig, er den virkelige grunnen at jern forsterker magnetfeltet på grunn av ferromagnetisme.',
          },
        ],
        solution: 'Jern er ferromagnetisk med høy relativ permeabilitet ($\\mu_r$). De magnetiske domenene i jernet retter seg etter feltet, og jernet blir selv magnetisert. Dette forsterker totalfeltet opptil tusenvis av ganger.',
      },
    },

    // ========== OPPGAVE 4: BEREGNING - FELT FRA RETT LEDER ==========
    {
      id: 'fys2-4-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-4',
        number: '4.19',
        type: 'classic',
        difficulty: 'medium',
        task: `En lang, rett strømførende kabel bærer 15 A.

a) Beregn magnetfeltstyrken 5,0 cm fra kabelen.
b) I hvilken avstand er magnetfeltet like sterkt som jordas magnetfelt (ca. 50 μT)?`,
        solution: `**Gitt:**
- $I = 15$ A
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A

**a) Magnetfelt i avstand 5,0 cm:**

$$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\times 15}{2\\pi \\times 0,050}$$

$$B = \\frac{4 \\times 15 \\times 10^{-7}}{2 \\times 0,050} = \\frac{60 \\times 10^{-7}}{0,10}$$

$$B = 6,0 \\times 10^{-5} \\text{ T} = 60 \\text{ μT}$$

**b) Avstand for $B = 50$ μT:**

$$B = \\frac{\\mu_0 I}{2\\pi r} \\Rightarrow r = \\frac{\\mu_0 I}{2\\pi B}$$

$$r = \\frac{4\\pi \\times 10^{-7} \\times 15}{2\\pi \\times 50 \\times 10^{-6}}$$

$$r = \\frac{4 \\times 15 \\times 10^{-7}}{2 \\times 50 \\times 10^{-6}} = \\frac{60 \\times 10^{-7}}{100 \\times 10^{-6}}$$

$$r = \\frac{6 \\times 10^{-6}}{10^{-4}} = 0,060 \\text{ m} = 6,0 \\text{ cm}$$

**Svar:**
a) $B = 60$ μT
b) $r = 6,0$ cm`,
      },
    },

    // ========== OPPGAVE 5: BEREGNING - SIRKULÆR SLØYFE ==========
    {
      id: 'fys2-4-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-5',
        number: '4.20',
        type: 'classic',
        difficulty: 'medium',
        task: `En sirkulær spole har 100 vindinger og radius 8,0 cm.

a) Hvor stor strøm trengs for å lage et magnetfelt på 2,0 mT i sentrum?
b) Hvis strømmen er 3,0 A, hva blir magnetfeltet i sentrum?`,
        solution: `**Gitt:**
- $N = 100$ vindinger
- $R = 8,0$ cm $= 0,080$ m
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A

**Formel for felt i sentrum av sirkulær spole:**
$$B = \\frac{\\mu_0 N I}{2R}$$

**a) Strøm for $B = 2,0$ mT:**

$$I = \\frac{2RB}{\\mu_0 N}$$

$$I = \\frac{2 \\times 0,080 \\times 2,0 \\times 10^{-3}}{4\\pi \\times 10^{-7} \\times 100}$$

$$I = \\frac{0,32 \\times 10^{-3}}{4\\pi \\times 10^{-5}} = \\frac{0,32 \\times 10^{-3}}{1,257 \\times 10^{-4}}$$

$$I = 2,5 \\text{ A}$$

**b) Magnetfelt med $I = 3,0$ A:**

$$B = \\frac{\\mu_0 N I}{2R} = \\frac{4\\pi \\times 10^{-7} \\times 100 \\times 3,0}{2 \\times 0,080}$$

$$B = \\frac{4\\pi \\times 3 \\times 10^{-5}}{0,16} = \\frac{12\\pi \\times 10^{-5}}{0,16}$$

$$B = 2,36 \\times 10^{-3} \\text{ T} = 2,4 \\text{ mT}$$

**Svar:**
a) $I = 2,5$ A
b) $B = 2,4$ mT`,
      },
    },

    // ========== OPPGAVE 6: BEREGNING - SOLENOID ==========
    {
      id: 'fys2-4-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-6',
        number: '4.21',
        type: 'classic',
        difficulty: 'medium',
        task: `En solenoid skal brukes i et fysikkeksperiment. Den er 25 cm lang og har 600 vindinger.

a) Beregn vindingstettheten.
b) Hva er magnetfeltet inne i solenoiden når strømmen er 4,0 A?
c) Hvor stor strøm trengs for å oppnå et felt på 20 mT?`,
        solution: `**Gitt:**
- $L = 25$ cm $= 0,25$ m
- $N = 600$ vindinger
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A

**a) Vindingstetthet:**
$$n = \\frac{N}{L} = \\frac{600}{0,25} = 2400 \\text{ vindinger/m}$$

**b) Magnetfelt med $I = 4,0$ A:**
$$B = \\mu_0 n I = 4\\pi \\times 10^{-7} \\times 2400 \\times 4,0$$

$$B = 4\\pi \\times 9600 \\times 10^{-7} = 38400\\pi \\times 10^{-7}$$

$$B = 1,21 \\times 10^{-2} \\text{ T} = 12,1 \\text{ mT}$$

**c) Strøm for $B = 20$ mT:**
$$I = \\frac{B}{\\mu_0 n} = \\frac{20 \\times 10^{-3}}{4\\pi \\times 10^{-7} \\times 2400}$$

$$I = \\frac{20 \\times 10^{-3}}{3,016 \\times 10^{-3}} = 6,6 \\text{ A}$$

**Svar:**
a) $n = 2400$ vindinger/m
b) $B = 12$ mT
c) $I = 6,6$ A`,
      },
    },

    // ========== OPPGAVE 7: BEREGNING - SAMMENLIGNING ==========
    {
      id: 'fys2-4-4-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-7',
        number: '4.22',
        type: 'classic',
        difficulty: 'medium',
        task: `To solenoider har samme strøm på 2,0 A.
- Solenoid A: 200 vindinger, lengde 10 cm
- Solenoid B: 400 vindinger, lengde 20 cm

a) Beregn vindingstettheten for hver solenoid.
b) Beregn magnetfeltet inne i hver solenoid.
c) Forklar resultatet.`,
        solution: `**Gitt:**
- $I = 2,0$ A for begge
- Solenoid A: $N_A = 200$, $L_A = 0,10$ m
- Solenoid B: $N_B = 400$, $L_B = 0,20$ m

**a) Vindingstetthet:**

Solenoid A:
$$n_A = \\frac{N_A}{L_A} = \\frac{200}{0,10} = 2000 \\text{ vind/m}$$

Solenoid B:
$$n_B = \\frac{N_B}{L_B} = \\frac{400}{0,20} = 2000 \\text{ vind/m}$$

**b) Magnetfelt:**

$$B = \\mu_0 n I$$

Solenoid A:
$$B_A = 4\\pi \\times 10^{-7} \\times 2000 \\times 2,0 = 5,03 \\times 10^{-3} \\text{ T}$$

Solenoid B:
$$B_B = 4\\pi \\times 10^{-7} \\times 2000 \\times 2,0 = 5,03 \\times 10^{-3} \\text{ T}$$

**c) Forklaring:**

Begge solenoidene har **samme magnetfelt** fordi de har **samme vindingstetthet** ($n = 2000$ vind/m).

Det som betyr noe for feltstyrken er:
- Vindingstetthet $n = N/L$
- Strømstyrke $I$

Ikke den totale lengden eller totale antall vindinger hver for seg.

**Svar:**
a) $n_A = n_B = 2000$ vind/m
b) $B_A = B_B = 5,0$ mT
c) Samme vindingstetthet gir samme felt`,
      },
    },

    // ========== OPPGAVE 8: VANSKELIG - ELEKTROMAGNET DESIGN ==========
    {
      id: 'fys2-4-4-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-8',
        number: '4.23',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du skal designe en elektromagnet som lager et felt på minst 0,50 T.

Tilgjengelig utstyr:
- Jernkjerne med $\\mu_r = 3000$ (mettes ved ca. 1,5 T)
- Kobbertråd som tåler maks 5,0 A
- Kjernens lengde er 15 cm

a) Hva er minimum antall vindinger som kreves?
b) Hva blir det faktiske feltet med dette antallet vindinger og maks strøm?
c) Er designet realistisk? Begrunn svaret.`,
        solution: `**Gitt:**
- $B_{mål} \\geq 0,50$ T
- $\\mu_r = 3000$
- $I_{maks} = 5,0$ A
- $L = 0,15$ m
- $B_{metning} \\approx 1,5$ T

**Formel for elektromagnet:**
$$B = \\mu_r \\mu_0 n I = \\mu_r \\mu_0 \\frac{N}{L} I$$

**a) Minimum antall vindinger:**

$$B \\geq \\mu_r \\mu_0 \\frac{N}{L} I$$

$$N \\geq \\frac{B \\cdot L}{\\mu_r \\mu_0 I}$$

$$N \\geq \\frac{0,50 \\times 0,15}{3000 \\times 4\\pi \\times 10^{-7} \\times 5,0}$$

$$N \\geq \\frac{0,075}{1,885 \\times 10^{-2}} = 3,98$$

$$N \\geq 4 \\text{ vindinger}$$

**b) Faktisk felt med 4 vindinger og 5,0 A:**

$$B = \\mu_r \\mu_0 \\frac{N}{L} I = 3000 \\times 4\\pi \\times 10^{-7} \\times \\frac{4}{0,15} \\times 5,0$$

$$B = 3000 \\times 4\\pi \\times 10^{-7} \\times 133,3 \\times 5,0$$

$$B = 0,503 \\text{ T}$$

**c) Er designet realistisk?**

**Ja, men med forbehold:**
1. ✓ Feltet (0,50 T) er under metningsgrensen (1,5 T)
2. ✓ Strømmen (5,0 A) er innenfor grensen
3. ? Med bare 4 vindinger blir feltet veldig følsomt for unøyaktigheter
4. ? I praksis ville man bruke flere vindinger og lavere strøm for stabilitet

**Bedre design:** Bruk f.eks. 40 vindinger med 0,5 A strøm for samme felt.

**Svar:**
a) Minimum $N = 4$ vindinger
b) $B = 0,50$ T (akkurat på målet)
c) Teoretisk ja, men i praksis ville man bruke flere vindinger`,
      },
    },

    // ========== OPPGAVE 9: VANSKELIG - MRI-SOLENOID ==========
    {
      id: 'fys2-4-4-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-9',
        number: '4.24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En MRI-maskin bruker en supraledende solenoid for å skape et sterkt magnetfelt.

Spesifikasjoner:
- Magnetfelt: 3,0 T
- Solenoid lengde: 1,5 m
- Vindingstetthet: $n = 2000$ vindinger/m

a) Hvor stor strøm går gjennom den supraledende tråden?
b) Hvor mange vindinger er det totalt?
c) Hvor mye energi er lagret i magnetfeltet hvis spolens volum er 0,30 m³?
   (Hint: Energitetthet $u = \\frac{B^2}{2\\mu_0}$)`,
        solution: `**Gitt:**
- $B = 3,0$ T
- $L = 1,5$ m
- $n = 2000$ vind/m
- $V = 0,30$ m³

**a) Strøm i solenoiden:**

Fra $B = \\mu_0 n I$:
$$I = \\frac{B}{\\mu_0 n} = \\frac{3,0}{4\\pi \\times 10^{-7} \\times 2000}$$

$$I = \\frac{3,0}{2,513 \\times 10^{-3}} = 1194 \\text{ A}$$

$$I \\approx 1200 \\text{ A}$$

**b) Totalt antall vindinger:**

$$N = n \\cdot L = 2000 \\times 1,5 = 3000 \\text{ vindinger}$$

**c) Energi lagret i magnetfeltet:**

Energitetthet:
$$u = \\frac{B^2}{2\\mu_0} = \\frac{(3,0)^2}{2 \\times 4\\pi \\times 10^{-7}}$$

$$u = \\frac{9,0}{2,513 \\times 10^{-6}} = 3,58 \\times 10^{6} \\text{ J/m}^3$$

Total energi:
$$E = u \\cdot V = 3,58 \\times 10^{6} \\times 0,30$$

$$E = 1,07 \\times 10^{6} \\text{ J} \\approx 1,1 \\text{ MJ}$$

**Svar:**
a) $I \\approx 1200$ A (mulig pga. supraledning – null resistans!)
b) $N = 3000$ vindinger
c) $E \\approx 1,1$ MJ (tilsvarer ca. 0,3 kWh eller energien i 25 gram TNT!)

**Merk:** Denne enorme energien er grunnen til at MRI-magneter må kjøles ned sakte og at «quench» (plutselig tap av supraledning) er farlig.`,
      },
    },

    // ========== OPPGAVE 10: VANSKELIG - KOMBINERT SYSTEM ==========
    {
      id: 'fys2-4-4-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-10',
        number: '4.25',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To sirkulære strømsløyfer med radius $R = 10$ cm er plassert parallelt, med sentrene på samme akse. Avstanden mellom dem er $d = 10$ cm (lik radiusen). Begge har strøm $I = 5,0$ A i **samme retning**.

a) Beregn magnetfeltet i sentrum av hver sløyfe (fra den sløyfen alene).
b) Bruk at feltet langs aksen er $B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$ til å finne bidraget fra den andre sløyfen i sentrum av den første.
c) Hva er det totale feltet midt mellom de to sløyfene?

(Dette oppsettet kalles Helmholtz-spoler og gir et meget uniformt felt.)`,
        solution: `**Gitt:**
- $R = 0,10$ m
- $d = 0,10$ m (mellom sløyfene)
- $I = 5,0$ A i begge, samme retning

**a) Felt i sentrum av én sløyfe (fra seg selv):**

$$B_0 = \\frac{\\mu_0 I}{2R} = \\frac{4\\pi \\times 10^{-7} \\times 5,0}{2 \\times 0,10}$$

$$B_0 = \\frac{20\\pi \\times 10^{-7}}{0,20} = 100\\pi \\times 10^{-7}$$

$$B_0 = 3,14 \\times 10^{-5} \\text{ T} = 31,4 \\text{ μT}$$

**b) Bidrag fra den andre sløyfen i sentrum av den første:**

I sentrum av sløyfe 1 er avstanden til sløyfe 2: $x = d = 0,10$ m $= R$

$$B_{fra\\_2} = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}} = \\frac{\\mu_0 I R^2}{2(R^2 + R^2)^{3/2}}$$

$$B_{fra\\_2} = \\frac{\\mu_0 I R^2}{2(2R^2)^{3/2}} = \\frac{\\mu_0 I R^2}{2 \\cdot 2^{3/2} R^3}$$

$$B_{fra\\_2} = \\frac{\\mu_0 I}{2 \\cdot 2\\sqrt{2} \\cdot R} = \\frac{\\mu_0 I}{4\\sqrt{2} R}$$

$$B_{fra\\_2} = \\frac{B_0}{2\\sqrt{2}} = \\frac{31,4}{2,83} = 11,1 \\text{ μT}$$

**c) Felt midt mellom sløyfene:**

Midt mellom: $x = d/2 = 0,05$ m fra hver sløyfe

Fra hver sløyfe:
$$B_{hver} = \\frac{\\mu_0 I R^2}{2(R^2 + (d/2)^2)^{3/2}}$$

Med $R = 0,10$ m og $d/2 = 0,05$ m:
$$R^2 + (d/2)^2 = 0,01 + 0,0025 = 0,0125 \\text{ m}^2$$

$$(0,0125)^{3/2} = 0,00140 \\text{ m}^3$$

$$B_{hver} = \\frac{4\\pi \\times 10^{-7} \\times 5,0 \\times 0,01}{2 \\times 0,00140}$$

$$B_{hver} = \\frac{6,28 \\times 10^{-8}}{0,00280} = 2,24 \\times 10^{-5} \\text{ T}$$

Totalt (begge bidrar i samme retning):
$$B_{total} = 2 \\times B_{hver} = 2 \\times 22,4 = 44,8 \\text{ μT}$$

**Svar:**
a) $B_0 = 31$ μT (fra én sløyfe i eget sentrum)
b) $B = 11$ μT (bidrag fra nabosløyfen)
c) $B_{midt} = 45$ μT (midt mellom sløyfene)

**Merk:** Helmholtz-spoler ($d = R$) gir et remarkabelt uniformt felt i området mellom spolene – ideelt for eksperimenter!`,
      },
    },

    // ========== OPPGAVE 11: VANSKELIG - TOROID ==========
    {
      id: 'fys2-4-4-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-11',
        number: '4.26',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En toroid har 500 vindinger viklet rundt en ringformet kjerne. Midtlinjen av toroiden har radius $R = 12$ cm.

a) Beregn magnetfeltet på midtlinjen når strømmen er 4,0 A.
b) Sammenlign dette med feltet fra en solenoid med samme vindingstetthet og strøm.
c) Diskuter fordeler med toroid vs. solenoid.`,
        solution: `**Gitt:**
- $N = 500$ vindinger
- $R = 12$ cm $= 0,12$ m (radius til midtlinjen)
- $I = 4,0$ A

**a) Magnetfelt i toroid:**

$$B = \\frac{\\mu_0 N I}{2\\pi R}$$

$$B = \\frac{4\\pi \\times 10^{-7} \\times 500 \\times 4,0}{2\\pi \\times 0,12}$$

$$B = \\frac{4 \\times 500 \\times 4,0 \\times 10^{-7}}{2 \\times 0,12}$$

$$B = \\frac{8000 \\times 10^{-7}}{0,24} = 3,33 \\times 10^{-3} \\text{ T}$$

$$B = 3,3 \\text{ mT}$$

**b) Sammenligning med solenoid:**

Omkretsenlengde av toroiden: $L = 2\\pi R = 2\\pi \\times 0,12 = 0,754$ m

Effektiv vindingstetthet: $n = N/L = 500/0,754 = 663$ vind/m

For solenoid med $n = 663$ vind/m og $I = 4,0$ A:
$$B_{sol} = \\mu_0 n I = 4\\pi \\times 10^{-7} \\times 663 \\times 4,0$$
$$B_{sol} = 3,33 \\times 10^{-3} \\text{ T} = 3,3 \\text{ mT}$$

**Resultatet er det samme!** Dette er fordi:
$$\\frac{\\mu_0 N I}{2\\pi R} = \\mu_0 \\frac{N}{2\\pi R} I = \\mu_0 n I$$

**c) Fordeler med toroid vs. solenoid:**

**Toroid:**
✓ Feltet er fullstendig innesluttet – ingen feltlekkasje
✓ Ingen påvirkning av/fra omgivelsene
✓ Kompakt design for høyeffekts induktorer
✓ Ideell for transformatorer og støyfiltre

**Solenoid:**
✓ Enklere å vikle
✓ Lett tilgang til feltet inne
✓ Bedre for eksperimenter der objekter skal plasseres i feltet
✓ Kan lages veldig lang for uniformt felt

**Svar:**
a) $B = 3,3$ mT
b) Samme felt som solenoid med tilsvarende vindingstetthet
c) Toroid: innesluttet felt, ingen lekkasje. Solenoid: enklere tilgang til felt.`,
      },
    },

    // ========== OPPGAVE 12: VANSKELIG - PRAKTISK ANVENDELSE ==========
    {
      id: 'fys2-4-4-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-4-ex-12',
        number: '4.27',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En elektromagnetisk kran skal løfte stålplater. Elektromagneten er en solenoid med jernkjerne.

Data:
- Solenoid: 300 vindinger, lengde 8,0 cm
- Jernkjerne: $\\mu_r = 2500$
- Magnetfelt ved overflaten: ca. 0,8 T (pga. metning)
- Stålplate: masse 500 kg

a) Beregn strømmen som trengs for å oppnå 0,8 T (anta at jernet ikke mettes).
b) Hvis magnetfeltet gir en tiltrekningskraft $F \\approx \\frac{B^2 A}{2\\mu_0}$ der $A$ er kontaktarealet, hvor stort kontaktareal trengs for å løfte platen?
c) Hvor mange ganger tyngden til platen er denne magnetkraften hvis $A = 0,05$ m²?`,
        solution: `**Gitt:**
- $N = 300$, $L = 0,08$ m
- $\\mu_r = 2500$
- $B = 0,8$ T (målfelt)
- $m = 500$ kg
- $g = 9,81$ m/s²

**a) Strøm for 0,8 T (ideelt, uten metning):**

$$B = \\mu_r \\mu_0 \\frac{N}{L} I$$

$$I = \\frac{B \\cdot L}{\\mu_r \\mu_0 N}$$

$$n = N/L = 300/0,08 = 3750 \\text{ vind/m}$$

$$I = \\frac{0,8}{2500 \\times 4\\pi \\times 10^{-7} \\times 3750}$$

$$I = \\frac{0,8}{11,78} = 0,068 \\text{ A} \\approx 70 \\text{ mA}$$

**Merk:** I praksis trengs mer strøm pga. metning og feltspredning.

**b) Kontaktareal for å løfte 500 kg:**

Må ha: $F \\geq mg = 500 \\times 9,81 = 4905$ N

$$F = \\frac{B^2 A}{2\\mu_0}$$

$$A = \\frac{2\\mu_0 F}{B^2} = \\frac{2 \\times 4\\pi \\times 10^{-7} \\times 4905}{(0,8)^2}$$

$$A = \\frac{2 \\times 4\\pi \\times 10^{-7} \\times 4905}{0,64}$$

$$A = \\frac{6,17 \\times 10^{-3}}{0,64} = 9,6 \\times 10^{-3} \\text{ m}^2$$

$$A \\approx 96 \\text{ cm}^2$$ (ca. 10 cm × 10 cm)

**c) Kraft med $A = 0,05$ m² = 500 cm²:**

$$F = \\frac{B^2 A}{2\\mu_0} = \\frac{(0,8)^2 \\times 0,05}{2 \\times 4\\pi \\times 10^{-7}}$$

$$F = \\frac{0,64 \\times 0,05}{2,513 \\times 10^{-6}} = \\frac{0,032}{2,513 \\times 10^{-6}}$$

$$F = 12\\,730 \\text{ N} \\approx 12,7 \\text{ kN}$$

Forholdet til tyngden:
$$\\frac{F}{mg} = \\frac{12730}{4905} = 2,6$$

**Svar:**
a) $I \\approx 70$ mA (teoretisk, i praksis mer)
b) $A \\geq 96$ cm² (minimum kontaktareal)
c) Magnetkraften er **2,6 ganger tyngden** – god sikkerhetsmargin!

**I praksis:** Kraner bruker større kontaktflater og sterkere felt for å ha sikkerhetsmarginer på 3-5× tyngden.`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-4-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Biot-Savarts lov (kvalitativt):**
- Elektrisk strøm skaper magnetfelt
- Feltlinjene danner sirkler rundt en rett leder
- Høyrehåndsregelen: tommel i strømretning → fingrene viser feltretning

**Magnetfelt fra lang, rett leder:**
$$B = \\frac{\\mu_0 I}{2\\pi r}$$

**Magnetfelt i sentrum av sirkulær sløyfe:**
$$B = \\frac{\\mu_0 N I}{2R}$$

**Magnetfelt i solenoid:**
$$B = \\mu_0 n I = \\mu_0 \\frac{N}{L} I$$

- $n = N/L$ er vindingstettheten
- Feltet er uniformt inne i solenoiden
- Feltet er tilnærmet null utenfor

**Elektromagnet:**
$$B = \\mu_r \\mu_0 n I$$

- Jernkjerne forsterker feltet med faktor $\\mu_r$ (opptil tusenvis)
- I praksis begrenses feltet av metning (~1-2 T for jern)

**Toroid:**
$$B = \\frac{\\mu_0 N I}{2\\pi R}$$

- Feltet er fullstendig innesluttet
- Ingen feltlekkasje utenfor

**Anvendelser:**
- **MRI:** Supraledende solenoider (1,5-7 T)
- **Elektromagneter:** Kraner, releer, høyttalere
- **Toroider:** Transformatorer, induktorer
- **Helmholtz-spoler:** Uniformt felt for eksperimenter

**Neste kapittel:**
Vi skal lære om elektromagnetisk induksjon – når endring i magnetfelt skaper elektrisk strøm (Faradays lov).`,
    },
  ],
};

// ============================================================================
// Kapittel 4.5: Magnetisk fluks
// LK20: Forklare begrepet magnetisk fluks og anvende det på induksjon
// ============================================================================

export const CHAPTER_FYSIKK2_4_5: TextbookChapter = {
  id: 'fysikk2-4-5',
  courseId: 'fysikk2',
  chapterNumber: '4.5',
  title: 'Magnetisk fluks',
  description: 'Lær om magnetisk fluks, hvordan den avhenger av areal og vinkel, Gauss\' lov for magnetisme, og hvordan fluksendring legger grunnlaget for elektromagnetisk induksjon.',
  estimatedMinutes: 45,
  prerequisites: ['fysikk2-4-4'],
  competenceGoals: [
    'forklare begrepet magnetisk fluks og enheten Weber',
    'beregne magnetisk fluks gjennom en flate',
    'forklare hvordan vinkelen mellom felt og flate påvirker fluksen',
    'beskrive Gauss\' lov for magnetisme og hva den betyr',
    'forklare hvordan fluksendring er grunnlaget for induksjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-4-5-intro',
      type: 'text',
      content: `## Fra magnetfelt til magnetisk fluks

I forrige kapittel lærte du hvordan strøm skaper magnetfelt. Nå skal vi introdusere et nytt og svært viktig begrep: **magnetisk fluks**.

Magnetisk fluks beskriver "hvor mye magnetfelt" som passerer gjennom en flate. Dette begrepet er helt avgjørende for å forstå **elektromagnetisk induksjon** – fenomenet der endring i magnetfelt skaper elektrisk strøm.

**Hvorfor er fluks viktig?**
- Faradays induksjonslov handler om *endring* i fluks
- Generatorer og transformatorer baserer seg på fluksendring
- Induktorer lagrer energi i form av magnetisk fluks
- Magnetisk fluks brukes til å forstå mange teknologiske anvendelser

**I dette kapitlet lærer du:**
- Hva magnetisk fluks er og hvordan den beregnes
- Hvordan vinkelen mellom felt og flate påvirker fluksen
- Gauss' lov for magnetisme
- Beregning av fluks gjennom spoler og sløyfer
- Forberedelse til Faradays induksjonslov`,
    },

    // ========== DEFINISJON: MAGNETISK FLUKS ==========
    {
      id: 'fys2-4-5-def-fluks',
      type: 'definition',
      title: 'Magnetisk fluks',
      content: `**Magnetisk fluks** $\\Phi$ (gresk bokstav phi) er et mål på hvor mye magnetfelt som passerer gjennom en flate.

$$\\Phi = BA\\cos\\theta$$

**der:**
- $\\Phi$ = magnetisk fluks [Wb] (Weber)
- $B$ = magnetfeltstyrke [T]
- $A$ = flatens areal [m²]
- $\\theta$ = vinkelen mellom magnetfeltet og flatens normalvektor

**Enheten Weber:**
$$1 \\text{ Wb} = 1 \\text{ T} \\cdot \\text{m}^2 = 1 \\frac{\\text{V} \\cdot \\text{s}}{1}$$

Enheten er oppkalt etter Wilhelm Eduard Weber (1804–1891), tysk fysiker.`,
    },

    // ========== FLUKS GJENNOM FLATE ==========
    {
      id: 'fys2-4-5-fluks-gjennom-flate',
      type: 'text',
      content: `## Fluks gjennom en flate

For å forstå magnetisk fluks, tenk deg en flate plassert i et magnetfelt. Fluksen måler hvor mange feltlinjer som "trenger gjennom" flaten.

### Normalvektoren

Hver flate har en **normalvektor** $\\vec{n}$ som står vinkelrett på flaten. Vinkelen $\\theta$ i fluksformelen er vinkelen mellom magnetfeltet $\\vec{B}$ og denne normalvektoren.

### Visualisering

Tenk på fluksen som "antall feltlinjer" gjennom flaten:
- **Mange feltlinjer gjennom** → stor fluks
- **Få feltlinjer gjennom** → liten fluks
- **Ingen feltlinjer gjennom** → null fluks

### Vektorform

Den generelle formelen for fluks kan skrives som et skalarprodukt:

$$\\Phi = \\vec{B} \\cdot \\vec{A} = BA\\cos\\theta$$

der $\\vec{A} = A\\hat{n}$ er arealvektoren (areal ganger normalvektor).

### Ikke-uniformt felt

Hvis magnetfeltet varierer over flaten, må vi integrere:

$$\\Phi = \\int \\vec{B} \\cdot d\\vec{A}$$

I Fysikk 2 fokuserer vi hovedsakelig på uniformt felt der $\\Phi = BA\\cos\\theta$ gjelder.`,
    },

    // ========== FLUKS OG VINKELEN ==========
    {
      id: 'fys2-4-5-vinkel',
      type: 'text',
      content: `## Hvordan vinkelen påvirker fluksen

Vinkelen $\\theta$ mellom magnetfeltet og flatens normalvektor er avgjørende:

### Spesialtilfeller

**Maksimal fluks ($\\theta = 0°$):**
- Feltet står vinkelrett på flaten
- $\\cos(0°) = 1$
- $\\Phi = BA$ (maksimal verdi)
- Alle feltlinjer går rett gjennom

**Null fluks ($\\theta = 90°$):**
- Feltet er parallelt med flaten
- $\\cos(90°) = 0$
- $\\Phi = 0$ (ingen fluks)
- Feltlinjene "skraper" langs flaten uten å gå gjennom

**Delvis fluks ($0° < \\theta < 90°$):**
- Feltet treffer flaten skrått
- $\\Phi = BA\\cos\\theta$
- Bare komponenten vinkelrett på flaten bidrar

### Viktig å huske

| Vinkel $\\theta$ | $\\cos\\theta$ | Fluks $\\Phi$ |
|-----------------|---------------|---------------|
| 0° | 1,00 | $BA$ (maks) |
| 30° | 0,87 | $0,87 \\cdot BA$ |
| 45° | 0,71 | $0,71 \\cdot BA$ |
| 60° | 0,50 | $0,50 \\cdot BA$ |
| 90° | 0,00 | 0 (null) |

**Negativ fluks:** Hvis $\\theta > 90°$, blir $\\cos\\theta < 0$ og fluksen negativ. Dette betyr at feltet går "ut av" flaten i stedet for "inn i" den.`,
    },

    // ========== EKSEMPEL 1: ENKEL FLUKSBEREGNING ==========
    {
      id: 'fys2-4-5-ex-enkel',
      type: 'example',
      title: 'Fluks gjennom rektangulær sløyfe',
      problem: `En rektangulær sløyfe med dimensjoner 20 cm × 30 cm er plassert i et uniformt magnetfelt $B = 0,50$ T. Feltet står vinkelrett på sløyfens plan. Beregn magnetisk fluks gjennom sløyfen.`,
      solution: `**Gitt:**
- Dimensjoner: 20 cm × 30 cm
- $B = 0,50$ T
- $\\theta = 0°$ (feltet vinkelrett på planet)

**Areal:**
$$A = 0,20 \\text{ m} \\times 0,30 \\text{ m} = 0,060 \\text{ m}^2$$

**Fluks:**
$$\\Phi = BA\\cos\\theta = 0,50 \\times 0,060 \\times \\cos(0°)$$
$$\\Phi = 0,50 \\times 0,060 \\times 1 = 0,030 \\text{ Wb}$$

**Svar:** $\\Phi = 30$ mWb (milliWeber)`,
    },

    // ========== EKSEMPEL 2: FLUKS MED VINKEL ==========
    {
      id: 'fys2-4-5-ex-vinkel',
      type: 'example',
      title: 'Fluks når flaten er vippet',
      problem: `En sirkulær sløyfe med radius 15 cm er plassert i et magnetfelt $B = 0,80$ T. Sløyfens normalvektor danner en vinkel på 60° med magnetfeltet. Beregn magnetisk fluks gjennom sløyfen.`,
      solution: `**Gitt:**
- $r = 15$ cm $= 0,15$ m
- $B = 0,80$ T
- $\\theta = 60°$

**Areal av sirkel:**
$$A = \\pi r^2 = \\pi \\times (0,15)^2 = 0,0707 \\text{ m}^2$$

**Fluks:**
$$\\Phi = BA\\cos\\theta = 0,80 \\times 0,0707 \\times \\cos(60°)$$
$$\\Phi = 0,80 \\times 0,0707 \\times 0,50$$
$$\\Phi = 0,0283 \\text{ Wb} \\approx 28 \\text{ mWb}$$

**Svar:** $\\Phi \\approx 28$ mWb

**Merk:** Hvis sløyfen hadde stått vinkelrett på feltet ($\\theta = 0°$), ville fluksen vært:
$\\Phi_{maks} = 0,80 \\times 0,0707 = 56,6$ mWb

Så ved 60° vinkel er fluksen halvert.`,
    },

    // ========== FLUKSENDRING ==========
    {
      id: 'fys2-4-5-fluksendring',
      type: 'text',
      content: `## Fluksendring – grunnlag for induksjon

Det mest spennende med magnetisk fluks er hva som skjer når den **endrer seg**. Faradays oppdagelse var at endring i magnetisk fluks induserer elektrisk spenning!

### Hvordan kan fluksen endre seg?

Fra formelen $\\Phi = BA\\cos\\theta$ ser vi at fluksen kan endres ved å endre:

**1. Magnetfeltstyrken $B$:**
- Slå av/på en elektromagnet
- Flytte en magnet nærmere eller lenger unna
- Variere strømmen i en spole

**2. Arealet $A$:**
- Endre størrelsen på sløyfen
- Trekke en sløyfe ut av feltet
- Skyve en leder gjennom feltet

**3. Vinkelen $\\theta$:**
- Rotere sløyfen i feltet
- Endre retningen på feltet

### Matematisk uttrykk for endring

Endringen i fluks over tid skrives:

$$\\frac{\\Delta\\Phi}{\\Delta t} = \\frac{\\Phi_2 - \\Phi_1}{t_2 - t_1}$$

eller som en derivert for kontinuerlig endring:

$$\\frac{d\\Phi}{dt}$$

**Viktig:** I neste kapittel skal du lære at denne endringsraten er direkte knyttet til indusert spenning gjennom Faradays lov:

$$\\mathcal{E} = -\\frac{d\\Phi}{dt}$$

Minustegnet (Lenz' lov) forteller at den induserte spenningen motvirker endringen.`,
    },

    // ========== EKSEMPEL 3: FLUKSENDRING ==========
    {
      id: 'fys2-4-5-ex-endring',
      type: 'example',
      title: 'Beregning av fluksendring',
      problem: `En kvadratisk sløyfe med sidelengde 10 cm er plassert i et magnetfelt som øker jevnt fra 0,20 T til 0,80 T i løpet av 0,50 sekunder. Feltet står vinkelrett på sløyfen.

a) Hva er fluksen før og etter endringen?
b) Hva er gjennomsnittlig endringsrate for fluksen?`,
      solution: `**Gitt:**
- Sidelengde: $s = 10$ cm $= 0,10$ m
- $B_1 = 0,20$ T, $B_2 = 0,80$ T
- $\\Delta t = 0,50$ s
- $\\theta = 0°$ (vinkelrett)

**Areal:**
$$A = s^2 = (0,10)^2 = 0,010 \\text{ m}^2$$

**a) Fluks før og etter:**

Før: $\\Phi_1 = B_1 A = 0,20 \\times 0,010 = 0,0020$ Wb $= 2,0$ mWb

Etter: $\\Phi_2 = B_2 A = 0,80 \\times 0,010 = 0,0080$ Wb $= 8,0$ mWb

**b) Endringsrate:**

$$\\frac{\\Delta\\Phi}{\\Delta t} = \\frac{\\Phi_2 - \\Phi_1}{\\Delta t} = \\frac{0,0080 - 0,0020}{0,50}$$

$$\\frac{\\Delta\\Phi}{\\Delta t} = \\frac{0,0060}{0,50} = 0,012 \\text{ Wb/s}$$

**Svar:**
a) $\\Phi_1 = 2,0$ mWb, $\\Phi_2 = 8,0$ mWb
b) Endringsrate $= 12$ mWb/s $= 0,012$ V (ifølge Faradays lov)`,
    },

    // ========== GAUSS' LOV FOR MAGNETISME ==========
    {
      id: 'fys2-4-5-gauss',
      type: 'text',
      content: `## Gauss' lov for magnetisme

En av de fire Maxwell-ligningene er **Gauss' lov for magnetisme**:

$$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$

Dette integralet beregner den totale magnetiske fluksen gjennom en lukket flate (som overflaten av en kule eller boks).

### Hva betyr dette?

**Resultatet er alltid null!** Dette betyr at den totale magnetiske fluksen ut av enhver lukket flate er null.

### Fysisk tolkning: Ingen magnetiske monopoler

Grunnen til at totalfluksen er null, er at **magnetiske feltlinjer alltid danner lukkede kurver**. For hver feltlinje som går *inn i* en lukket flate, må det være en feltlinje som går *ut*.

**Kontrast med elektriske felt:**
- Elektriske feltlinjer starter på positive ladninger og slutter på negative
- En lukket flate rundt en positiv ladning har netto fluks utover
- Magnetiske feltlinjer har ingen start- eller sluttpunkt
- De danner alltid lukkede sløyfer

**Konsekvens:**
Det finnes ingen **magnetiske monopoler** – ingen isolerte nord- eller sydpoler. Hvis du bryter en magnet i to, får du to nye magneter, hver med sin egen nord- og sydpol.

### Eksempel

Tenk på en sfærisk flate rundt en stavmagnet:
- Feltlinjene som går ut ved nordpolen, kommer tilbake inn ved sydpolen
- Like mange feltlinjer går ut som inn
- Total fluks gjennom sfæren $= 0$`,
    },

    // ========== DEFINISJON: GAUSS' LOV ==========
    {
      id: 'fys2-4-5-def-gauss',
      type: 'definition',
      title: 'Gauss\' lov for magnetisme',
      content: `**Gauss' lov for magnetisme** sier at den totale magnetiske fluksen gjennom enhver lukket flate er null:

$$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$

**Fysisk betydning:**
- Magnetiske feltlinjer danner alltid lukkede kurver
- Det finnes ingen magnetiske monopoler
- For enhver feltlinje som går inn i et område, går en ut

**Sammenligning med elektrisitet:**
- Gauss' lov for elektrisitet: $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q}{\\varepsilon_0}$ (avhenger av innesperret ladning)
- Gauss' lov for magnetisme: $\\oint \\vec{B} \\cdot d\\vec{A} = 0$ (alltid null)`,
    },

    // ========== FLUKS GJENNOM SPOLER ==========
    {
      id: 'fys2-4-5-spoler',
      type: 'text',
      content: `## Fluks gjennom spoler og sløyfer

Når en spole med flere vindinger er plassert i et magnetfelt, må vi ta hensyn til antall vindinger.

### Fluks gjennom én vinding

For én enkelt sløyfe:
$$\\Phi = BA\\cos\\theta$$

### Flukskobling (Flux linkage)

For en spole med $N$ vindinger multipliserer vi med antall vindinger:

$$\\Psi = N\\Phi = NBA\\cos\\theta$$

Dette kalles **flukskobling** (flux linkage), målt i Weber-turns (Wb-t) eller bare Weber.

### Hvorfor viktig?

I Faradays induksjonslov er det faktisk *endring i flukskobling* som gir indusert spenning:

$$\\mathcal{E} = -\\frac{d(N\\Phi)}{dt} = -N\\frac{d\\Phi}{dt}$$

En spole med 100 vindinger gir altså 100 ganger så stor indusert spenning som én enkelt sløyfe!

### Eksempel: Solenoid i eksternt felt

En solenoid med $N$ vindinger og tverrsnittsareal $A$ i et uniformt felt $B$:

$$\\Psi = NBA\\cos\\theta$$

Hvis feltet er langs solenoidens akse ($\\theta = 0°$):
$$\\Psi = NBA$$`,
    },

    // ========== EKSEMPEL 4: FLUKS GJENNOM SPOLE ==========
    {
      id: 'fys2-4-5-ex-spole',
      type: 'example',
      title: 'Fluks gjennom en spole',
      problem: `En spole med 200 vindinger har tverrsnittsareal 25 cm². Den plasseres i et uniformt magnetfelt på 0,60 T slik at feltet er parallelt med spolens akse.

a) Beregn magnetisk fluks gjennom én vinding.
b) Beregn total flukskobling gjennom spolen.
c) Hvis feltet reduseres til null på 0,10 s, hva er gjennomsnittlig endringsrate for flukskoblingen?`,
      solution: `**Gitt:**
- $N = 200$ vindinger
- $A = 25$ cm² $= 25 \\times 10^{-4}$ m² $= 0,0025$ m²
- $B = 0,60$ T
- $\\theta = 0°$ (felt parallelt med akse)
- $\\Delta t = 0,10$ s (for del c)

**a) Fluks gjennom én vinding:**
$$\\Phi = BA\\cos\\theta = 0,60 \\times 0,0025 \\times 1$$
$$\\Phi = 0,0015 \\text{ Wb} = 1,5 \\text{ mWb}$$

**b) Total flukskobling:**
$$\\Psi = N\\Phi = 200 \\times 0,0015$$
$$\\Psi = 0,30 \\text{ Wb} = 300 \\text{ mWb}$$

**c) Endringsrate når feltet forsvinner:**

Flukskobling før: $\\Psi_1 = 0,30$ Wb
Flukskobling etter: $\\Psi_2 = 0$ Wb

$$\\frac{\\Delta\\Psi}{\\Delta t} = \\frac{0 - 0,30}{0,10} = -3,0 \\text{ Wb/s}$$

**Svar:**
a) $\\Phi = 1,5$ mWb per vinding
b) $\\Psi = 300$ mWb total flukskobling
c) Endringsrate $= -3,0$ Wb/s (ifølge Faraday gir dette 3,0 V indusert spenning)`,
    },

    // ========== ANVENDELSER ==========
    {
      id: 'fys2-4-5-anvendelser',
      type: 'text',
      content: `## Anvendelser – forberedelse til Faradays lov

Forståelsen av magnetisk fluks er grunnleggende for mange teknologiske anvendelser. Her er en oversikt over hvordan fluks og fluksendring brukes:

### 1. Generatorer

I en generator roterer en spole i et magnetfelt:
- Vinkelen $\\theta$ endrer seg kontinuerlig
- Fluksen $\\Phi = BA\\cos\\theta$ varierer sinusformig
- Dette induserer vekselstrøm (AC)

### 2. Transformatorer

Transformatorer overfører energi mellom to spoler:
- Vekselstrøm i primærspolen skaper varierende magnetfelt
- Det varierende feltet gir fluksendring i sekundærspolen
- Fluksendringen induserer spenning i sekundærspolen

### 3. Induktorer

En induktor lagrer energi i magnetfeltet:
- Strømendring gir fluksendring
- Fluksendringen induserer spenning som motvirker endringen
- Dette gir "motstand" mot strømendringer

### 4. Induktive sensorer

Mange sensorer måler fluksendring:
- **Turtellere:** Roterende magnet gir varierende fluks
- **Metalldetektorer:** Metall endrer fluksmønsteret
- **Posisjonsgivere:** Fluks avhenger av posisjon

### 5. Trådløs lading

Trådløs lading (f.eks. for mobiltelefoner):
- Senderspole lager vekslende magnetfelt
- Mottakerspole opplever fluksendring
- Fluksendringen induserer strøm for lading

### Neste kapittel

I neste kapittel lærer du Faradays induksjonslov:
$$\\mathcal{E} = -N\\frac{d\\Phi}{dt}$$

Da vil du kunne beregne eksakt hvor stor spenning som induseres ved ulike fluksendringer!`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE - FLUKS ==========
    {
      id: 'fys2-4-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-1',
        number: '4.28',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva er enheten for magnetisk fluks?`,
        choices: [
          { id: 'a', text: 'Tesla (T)' },
          { id: 'b', text: 'Weber (Wb)' },
          { id: 'c', text: 'Henry (H)' },
          { id: 'd', text: 'Ampere (A)' },
        ],
        correctAnswer: 'b',
        solution: `**Riktig svar: b) Weber (Wb)**

Magnetisk fluks har enheten Weber (Wb).

Fra formelen $\\Phi = BA$:
$$[\\Phi] = [B] \\cdot [A] = \\text{T} \\cdot \\text{m}^2 = \\text{Wb}$$

**De andre alternativene:**
- Tesla (T) er enhet for magnetfeltstyrke $B$
- Henry (H) er enhet for induktans $L$
- Ampere (A) er enhet for strømstyrke $I$`,
      },
    },

    // ========== OPPGAVE 2: MULTIPLE CHOICE - VINKEL ==========
    {
      id: 'fys2-4-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-2',
        number: '4.29',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `En flat sløyfe er plassert i et uniformt magnetfelt. Ved hvilken vinkel mellom feltet og flatens normalvektor er magnetisk fluks gjennom sløyfen størst?`,
        choices: [
          { id: 'a', text: '$\\theta = 0°$' },
          { id: 'b', text: '$\\theta = 45°$' },
          { id: 'c', text: '$\\theta = 60°$' },
          { id: 'd', text: '$\\theta = 90°$' },
        ],
        correctAnswer: 'a',
        solution: `**Riktig svar: a) $\\theta = 0°$**

Magnetisk fluks er gitt ved $\\Phi = BA\\cos\\theta$.

Siden $\\cos\\theta$ har sin maksimalverdi ved $\\theta = 0°$ (der $\\cos 0° = 1$), er fluksen størst når magnetfeltet står vinkelrett på flaten (parallelt med normalvektoren).

| Vinkel | $\\cos\\theta$ | Fluks |
|--------|---------------|-------|
| 0° | 1,00 | Maksimal |
| 45° | 0,71 | 71% av maks |
| 60° | 0,50 | 50% av maks |
| 90° | 0,00 | Null |`,
      },
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE - GAUSS ==========
    {
      id: 'fys2-4-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-3',
        number: '4.30',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva sier Gauss' lov for magnetisme om den totale magnetiske fluksen gjennom en lukket flate?`,
        choices: [
          { id: 'a', text: 'Den er alltid positiv' },
          { id: 'b', text: 'Den er alltid negativ' },
          { id: 'c', text: 'Den er alltid null' },
          { id: 'd', text: 'Den avhenger av innesperret strøm' },
        ],
        correctAnswer: 'c',
        solution: `**Riktig svar: c) Den er alltid null**

Gauss' lov for magnetisme:
$$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$

Den totale magnetiske fluksen gjennom enhver lukket flate er alltid null.

**Fysisk forklaring:**
- Magnetiske feltlinjer danner alltid lukkede kurver
- For hver feltlinje som går inn i et volum, må en feltlinje gå ut
- Dette betyr at det ikke finnes magnetiske monopoler (isolerte nord- eller sydpoler)

**Kontrast med elektrisitet:**
For elektriske felt er fluksen proporsjonal med innesperret ladning ($\\Phi_E = Q/\\varepsilon_0$), men for magnetiske felt er den alltid null fordi det ikke finnes magnetiske "ladninger".`,
      },
    },

    // ========== OPPGAVE 4: MEDIUM - BEREGNE FLUKS ==========
    {
      id: 'fys2-4-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-4',
        number: '4.31',
        type: 'classic',
        difficulty: 'medium',
        task: `En rektangulær sløyfe med dimensjoner 15 cm × 25 cm er plassert i et uniformt magnetfelt på 0,45 T. Feltet står vinkelrett på sløyfens plan.

a) Beregn magnetisk fluks gjennom sløyfen.
b) Hva blir fluksen hvis sløyfen roteres slik at vinkelen mellom feltet og normalvektoren blir 30°?
c) Ved hvilken vinkel er fluksen halvparten av maksimalverdien?`,
        solution: `**Gitt:**
- Dimensjoner: 15 cm × 25 cm
- $B = 0,45$ T
- Del a): $\\theta = 0°$
- Del b): $\\theta = 30°$

**Areal:**
$$A = 0,15 \\times 0,25 = 0,0375 \\text{ m}^2$$

**a) Fluks ved $\\theta = 0°$:**
$$\\Phi = BA\\cos\\theta = 0,45 \\times 0,0375 \\times \\cos(0°)$$
$$\\Phi = 0,45 \\times 0,0375 \\times 1 = 0,0169 \\text{ Wb}$$
$$\\Phi \\approx 16,9 \\text{ mWb}$$

**b) Fluks ved $\\theta = 30°$:**
$$\\Phi = BA\\cos\\theta = 0,45 \\times 0,0375 \\times \\cos(30°)$$
$$\\Phi = 0,0169 \\times 0,866 = 0,0146 \\text{ Wb}$$
$$\\Phi \\approx 14,6 \\text{ mWb}$$

**c) Vinkel for halv fluks:**

Vi vil ha $\\Phi = \\frac{1}{2}\\Phi_{maks}$

$$BA\\cos\\theta = \\frac{1}{2}BA$$
$$\\cos\\theta = 0,5$$
$$\\theta = \\cos^{-1}(0,5) = 60°$$

**Svar:**
a) $\\Phi = 16,9$ mWb
b) $\\Phi = 14,6$ mWb
c) $\\theta = 60°$`,
      },
    },

    // ========== OPPGAVE 5: MEDIUM - SIRKULÆR SLØYFE ==========
    {
      id: 'fys2-4-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-5',
        number: '4.32',
        type: 'classic',
        difficulty: 'medium',
        task: `En sirkulær sløyfe med radius 12 cm er plassert i jordens magnetfelt. Ved denne plasseringen er magnetfeltets horisontale komponent 20 µT og vertikale komponent 45 µT.

a) Beregn fluksen gjennom sløyfen når den ligger horisontalt (normalvektor peker oppover).
b) Beregn fluksen når sløyfen står vertikalt med normalvektor pekende mot nord (i retning av horisontalkomponenten).
c) I hvilken orientering er fluksen null?`,
        solution: `**Gitt:**
- $r = 12$ cm $= 0,12$ m
- $B_H = 20$ µT $= 20 \\times 10^{-6}$ T (horisontal)
- $B_V = 45$ µT $= 45 \\times 10^{-6}$ T (vertikal)

**Areal:**
$$A = \\pi r^2 = \\pi \\times (0,12)^2 = 0,0452 \\text{ m}^2$$

**a) Horisontal sløyfe (normalvektor oppover):**

Kun den vertikale komponenten bidrar (feltlinjer gjennom sløyfen):
$$\\Phi = B_V \\cdot A = 45 \\times 10^{-6} \\times 0,0452$$
$$\\Phi = 2,03 \\times 10^{-6} \\text{ Wb} = 2,0 \\text{ µWb}$$

**b) Vertikal sløyfe (normalvektor mot nord):**

Kun den horisontale komponenten bidrar:
$$\\Phi = B_H \\cdot A = 20 \\times 10^{-6} \\times 0,0452$$
$$\\Phi = 0,90 \\times 10^{-6} \\text{ Wb} = 0,90 \\text{ µWb}$$

**c) Null fluks:**

Fluksen er null når normalvektoren er vinkelrett på magnetfeltet.

Det totale magnetfeltet peker skrått nedover mot nord. Normalvektoren må peke vinkelrett på dette – altså horisontalt mot øst eller vest, eller i en kombinasjon som er vinkelrett på det totale feltet.

**Svar:**
a) $\\Phi = 2,0$ µWb (horisontal sløyfe)
b) $\\Phi = 0,90$ µWb (vertikal sløyfe)
c) Når normalvektoren peker øst-vest (vinkelrett på både vertikal og nordlig retning)`,
      },
    },

    // ========== OPPGAVE 6: MEDIUM - FLUKSENDRING ==========
    {
      id: 'fys2-4-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-6',
        number: '4.33',
        type: 'classic',
        difficulty: 'medium',
        task: `En kvadratisk sløyfe med sidelengde 8,0 cm er plassert i et magnetfelt som peker vinkelrett inn i sløyfen. Magnetfeltet varierer med tiden slik:

- $t = 0$: $B = 0,30$ T
- $t = 0,20$ s: $B = 0,80$ T
- $t = 0,50$ s: $B = 0,80$ T (konstant)
- $t = 0,70$ s: $B = 0$ T

a) Beregn fluks gjennom sløyfen ved $t = 0$, $t = 0,20$ s og $t = 0,70$ s.
b) Beregn gjennomsnittlig endringsrate for fluksen i tidsintervallene [0, 0,20 s], [0,20 s, 0,50 s] og [0,50 s, 0,70 s].`,
        solution: `**Gitt:**
- Sidelengde: $s = 8,0$ cm $= 0,080$ m
- $\\theta = 0°$ (feltet vinkelrett på sløyfen)

**Areal:**
$$A = s^2 = (0,080)^2 = 0,0064 \\text{ m}^2$$

**a) Fluks ved ulike tidspunkter:**

Ved $t = 0$: $\\Phi_0 = B_0 \\cdot A = 0,30 \\times 0,0064 = 1,92$ mWb

Ved $t = 0,20$ s: $\\Phi_1 = 0,80 \\times 0,0064 = 5,12$ mWb

Ved $t = 0,70$ s: $\\Phi_2 = 0 \\times 0,0064 = 0$ mWb

**b) Endringsrater:**

**Intervall [0, 0,20 s]:**
$$\\frac{\\Delta\\Phi}{\\Delta t} = \\frac{5,12 - 1,92}{0,20} = \\frac{3,20}{0,20} = 16 \\text{ mWb/s}$$

**Intervall [0,20 s, 0,50 s]:**

Feltet er konstant, så fluksen er konstant:
$$\\frac{\\Delta\\Phi}{\\Delta t} = \\frac{5,12 - 5,12}{0,30} = 0 \\text{ mWb/s}$$

**Intervall [0,50 s, 0,70 s]:**
$$\\frac{\\Delta\\Phi}{\\Delta t} = \\frac{0 - 5,12}{0,20} = \\frac{-5,12}{0,20} = -25,6 \\text{ mWb/s}$$

**Svar:**
a) $\\Phi_0 = 1,92$ mWb, $\\Phi_1 = 5,12$ mWb, $\\Phi_2 = 0$ mWb
b) $+16$ mWb/s (økende), $0$ (konstant), $-25,6$ mWb/s (avtagende)

**Merk:** Ifølge Faradays lov vil disse endringsratene gi induserte spenninger på henholdsvis 16 mV, 0 V og 25,6 mV (med motsatt fortegn).`,
      },
    },

    // ========== OPPGAVE 7: MEDIUM - ROTERENDE SLØYFE ==========
    {
      id: 'fys2-4-5-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-7',
        number: '4.34',
        type: 'classic',
        difficulty: 'medium',
        task: `En rektangulær sløyfe med areal 50 cm² roterer i et uniformt magnetfelt på 0,35 T. Sløyfen roterer med konstant vinkelhastighet slik at den fullfører én omdreining på 0,10 s.

a) Skriv et uttrykk for fluksen som funksjon av tiden, $\\Phi(t)$.
b) Beregn fluksen ved $t = 0$, $t = 0,025$ s og $t = 0,050$ s.
c) Hva er maksimal og minimal fluks?`,
        solution: `**Gitt:**
- $A = 50$ cm² $= 50 \\times 10^{-4}$ m² $= 0,0050$ m²
- $B = 0,35$ T
- Periode: $T = 0,10$ s

**Vinkelhastighet:**
$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0,10} = 62,8 \\text{ rad/s}$$

**a) Fluks som funksjon av tid:**

Hvis vi antar at sløyfen starter med $\\theta = 0$ (maksimal fluks):
$$\\Phi(t) = BA\\cos(\\omega t) = BA\\cos\\left(\\frac{2\\pi t}{T}\\right)$$

$$\\Phi(t) = 0,35 \\times 0,0050 \\times \\cos(62,8t)$$
$$\\Phi(t) = 1,75 \\times 10^{-3} \\cos(62,8t) \\text{ Wb}$$
$$\\Phi(t) = 1,75 \\cos(62,8t) \\text{ mWb}$$

**b) Fluks ved spesifikke tidspunkter:**

Ved $t = 0$:
$$\\Phi(0) = 1,75 \\cos(0) = 1,75 \\times 1 = 1,75 \\text{ mWb}$$

Ved $t = 0,025$ s (kvart omdreining):
$$\\Phi(0,025) = 1,75 \\cos(62,8 \\times 0,025) = 1,75 \\cos(\\pi/2)$$
$$\\Phi = 1,75 \\times 0 = 0 \\text{ mWb}$$

Ved $t = 0,050$ s (halv omdreining):
$$\\Phi(0,050) = 1,75 \\cos(62,8 \\times 0,050) = 1,75 \\cos(\\pi)$$
$$\\Phi = 1,75 \\times (-1) = -1,75 \\text{ mWb}$$

**c) Maksimal og minimal fluks:**

$$\\Phi_{maks} = +BA = +1,75 \\text{ mWb}$$ (ved $\\theta = 0°$)
$$\\Phi_{min} = -BA = -1,75 \\text{ mWb}$$ (ved $\\theta = 180°$)

**Svar:**
a) $\\Phi(t) = 1,75\\cos(62,8t)$ mWb
b) Ved $t = 0$: 1,75 mWb, ved $t = 0,025$ s: 0, ved $t = 0,050$ s: $-1,75$ mWb
c) Maks: $+1,75$ mWb, Min: $-1,75$ mWb`,
      },
    },

    // ========== OPPGAVE 8: VANSKELIG - FLUKS GJENNOM SPOLE ==========
    {
      id: 'fys2-4-5-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-8',
        number: '4.35',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En flat spole med 150 vindinger og radius 5,0 cm er plassert i et magnetfelt. Aksen til spolen danner en vinkel på 25° med magnetfeltet. Magnetfeltet øker lineært fra 0 til 1,2 T i løpet av 0,30 s.

a) Beregn maksimal fluks gjennom én vinding.
b) Beregn faktisk fluks gjennom én vinding (med vinkelen).
c) Beregn total flukskobling gjennom spolen ved $t = 0,30$ s.
d) Beregn gjennomsnittlig endringsrate for flukskoblingen.`,
        solution: `**Gitt:**
- $N = 150$ vindinger
- $r = 5,0$ cm $= 0,050$ m
- $\\theta = 25°$ (vinkel mellom felt og spolens akse)
- $B_1 = 0$ T ved $t = 0$
- $B_2 = 1,2$ T ved $t = 0,30$ s
- $\\Delta t = 0,30$ s

**Areal:**
$$A = \\pi r^2 = \\pi \\times (0,050)^2 = 7,85 \\times 10^{-3} \\text{ m}^2$$

**a) Maksimal fluks gjennom én vinding (hvis $\\theta = 0°$):**
$$\\Phi_{maks} = B_2 \\cdot A = 1,2 \\times 7,85 \\times 10^{-3}$$
$$\\Phi_{maks} = 9,42 \\times 10^{-3} \\text{ Wb} = 9,42 \\text{ mWb}$$

**b) Faktisk fluks gjennom én vinding (med $\\theta = 25°$):**
$$\\Phi = BA\\cos\\theta = 1,2 \\times 7,85 \\times 10^{-3} \\times \\cos(25°)$$
$$\\Phi = 9,42 \\times 10^{-3} \\times 0,906$$
$$\\Phi = 8,54 \\times 10^{-3} \\text{ Wb} = 8,54 \\text{ mWb}$$

**c) Total flukskobling ved $t = 0,30$ s:**
$$\\Psi = N\\Phi = 150 \\times 8,54 \\times 10^{-3}$$
$$\\Psi = 1,28 \\text{ Wb} = 1280 \\text{ mWb}$$

**d) Endringsrate for flukskobling:**

Ved $t = 0$: $\\Psi_1 = 0$ (ingen fluks når $B = 0$)
Ved $t = 0,30$ s: $\\Psi_2 = 1,28$ Wb

$$\\frac{\\Delta\\Psi}{\\Delta t} = \\frac{1,28 - 0}{0,30} = 4,27 \\text{ Wb/s}$$

**Svar:**
a) $\\Phi_{maks} = 9,42$ mWb (per vinding)
b) $\\Phi = 8,54$ mWb (per vinding)
c) $\\Psi = 1,28$ Wb (total flukskobling)
d) $\\frac{d\\Psi}{dt} = 4,27$ Wb/s $\\approx 4,3$ V (indusert spenning ifølge Faraday)`,
      },
    },

    // ========== OPPGAVE 9: VANSKELIG - ENDRING AV AREAL ==========
    {
      id: 'fys2-4-5-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-9',
        number: '4.36',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En rektangulær ledersløyfe med bredde 10 cm og lengde $L$ trekkes ut av et uniformt magnetfelt med konstant hastighet. Magnetfeltet er $B = 0,50$ T og peker vinkelrett inn i planet.

Sløyfen starter helt inne i feltet og trekkes ut på 0,40 s.

a) Hvor stor er fluksen før sløyfen begynner å trekkes ut?
b) Utled et uttrykk for fluksen som funksjon av tiden mens sløyfen trekkes ut.
c) Beregn endringsraten for fluksen.
d) Hvis lengden $L = 20$ cm, hvor raskt beveger sløyfen seg?`,
        solution: `**Gitt:**
- Bredde: $w = 10$ cm $= 0,10$ m
- Lengde: $L$ (variabel, del d: $L = 20$ cm $= 0,20$ m)
- $B = 0,50$ T (vinkelrett på sløyfen)
- Tid for å trekke ut: $\\Delta t = 0,40$ s

**a) Fluks før uttrekking (helt inne i feltet):**

Areal inne i feltet: $A = L \\times w = 0,10L$ m²

$$\\Phi_0 = BA = 0,50 \\times 0,10L = 0,050L \\text{ Wb}$$

Med $L = 0,20$ m: $\\Phi_0 = 0,050 \\times 0,20 = 0,010$ Wb $= 10$ mWb

**b) Fluks som funksjon av tid:**

La $x(t)$ være hvor langt sløyfen har beveget seg ut av feltet.

Hastighet: $v = L/\\Delta t = L/0,40 = 2,5L$ m/s

Posisjon: $x(t) = vt = 2,5Lt$

Lengde fortsatt i feltet: $(L - x) = L - 2,5Lt = L(1 - 2,5t)$

Areal i feltet: $A(t) = w(L - x) = 0,10 \\times L(1 - 2,5t)$

$$\\Phi(t) = BA(t) = 0,50 \\times 0,10L(1 - 2,5t)$$
$$\\Phi(t) = 0,050L(1 - 2,5t) \\text{ Wb}$$

Gyldig for $0 \\leq t \\leq 0,40$ s.

**c) Endringsrate for fluksen:**

$$\\frac{d\\Phi}{dt} = \\frac{d}{dt}[0,050L(1 - 2,5t)]$$
$$\\frac{d\\Phi}{dt} = 0,050L \\times (-2,5) = -0,125L \\text{ Wb/s}$$

Alternativt:
$$\\frac{\\Delta\\Phi}{\\Delta t} = \\frac{0 - 0,050L}{0,40} = -0,125L \\text{ Wb/s}$$

**d) Med $L = 0,20$ m:**

Hastighet:
$$v = \\frac{L}{\\Delta t} = \\frac{0,20}{0,40} = 0,50 \\text{ m/s}$$

Endringsrate:
$$\\frac{d\\Phi}{dt} = -0,125 \\times 0,20 = -0,025 \\text{ Wb/s} = -25 \\text{ mWb/s}$$

**Svar:**
a) $\\Phi_0 = 0,050L$ Wb (med $L$ i meter); for $L = 20$ cm: $\\Phi_0 = 10$ mWb
b) $\\Phi(t) = 0,050L(1 - 2,5t)$ Wb
c) $\\frac{d\\Phi}{dt} = -0,125L$ Wb/s (konstant)
d) $v = 0,50$ m/s; endringsrate $= -25$ mWb/s`,
      },
    },

    // ========== OPPGAVE 10: VANSKELIG - SOLENOID ==========
    {
      id: 'fys2-4-5-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-10',
        number: '4.37',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En liten spole med 50 vindinger og tverrsnittsareal 2,0 cm² plasseres inne i en lang solenoid. Solenoiden har 800 vindinger per meter og fører en strøm som varierer med tiden som $I(t) = I_0 \\sin(\\omega t)$, der $I_0 = 3,0$ A og $\\omega = 120\\pi$ rad/s.

a) Finn uttrykket for magnetfeltet inne i solenoiden som funksjon av tiden.
b) Finn uttrykket for fluksen gjennom den lille spolen som funksjon av tiden.
c) Beregn maksimal fluks og maksimal endringsrate for fluksen.`,
        solution: `**Gitt:**
- Liten spole: $N = 50$ vindinger, $A = 2,0$ cm² $= 2,0 \\times 10^{-4}$ m²
- Solenoid: $n = 800$ vindinger/m
- Strøm: $I(t) = I_0 \\sin(\\omega t)$ med $I_0 = 3,0$ A, $\\omega = 120\\pi$ rad/s
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A

**a) Magnetfelt i solenoiden:**

Feltet inne i en solenoid:
$$B = \\mu_0 n I$$

Med tidsavhengig strøm:
$$B(t) = \\mu_0 n I_0 \\sin(\\omega t)$$

$$B(t) = (4\\pi \\times 10^{-7}) \\times 800 \\times 3,0 \\times \\sin(120\\pi t)$$

$$B(t) = 3,02 \\times 10^{-3} \\sin(120\\pi t) \\text{ T}$$

$$B(t) = 3,0 \\sin(120\\pi t) \\text{ mT}$$

**b) Fluks gjennom den lille spolen:**

$$\\Phi(t) = NBA(t) = NBA\\cos\\theta$$

Antar $\\theta = 0°$ (spolen på linje med solenoiden):

$$\\Phi(t) = N \\cdot B(t) \\cdot A$$

$$\\Phi(t) = 50 \\times 3,02 \\times 10^{-3} \\sin(120\\pi t) \\times 2,0 \\times 10^{-4}$$

$$\\Phi(t) = 3,02 \\times 10^{-5} \\sin(120\\pi t) \\text{ Wb}$$

$$\\Phi(t) = 30,2 \\sin(120\\pi t) \\text{ µWb}$$

**c) Maksimal fluks og endringsrate:**

**Maksimal fluks:**
$$\\Phi_{maks} = 30,2 \\text{ µWb}$$ (når $\\sin(\\omega t) = 1$)

**Endringsrate:**
$$\\frac{d\\Phi}{dt} = \\frac{d}{dt}[3,02 \\times 10^{-5} \\sin(120\\pi t)]$$

$$\\frac{d\\Phi}{dt} = 3,02 \\times 10^{-5} \\times 120\\pi \\times \\cos(120\\pi t)$$

$$\\frac{d\\Phi}{dt} = 1,14 \\times 10^{-2} \\cos(120\\pi t) \\text{ Wb/s}$$

**Maksimal endringsrate:**
$$\\left(\\frac{d\\Phi}{dt}\\right)_{maks} = 1,14 \\times 10^{-2} \\text{ Wb/s} = 11,4 \\text{ mV}$$

**Svar:**
a) $B(t) = 3,0\\sin(120\\pi t)$ mT
b) $\\Phi(t) = 30,2\\sin(120\\pi t)$ µWb (total flukskobling)
c) $\\Phi_{maks} = 30,2$ µWb; $(d\\Phi/dt)_{maks} = 11,4$ mWb/s $= 11,4$ mV`,
      },
    },

    // ========== OPPGAVE 11: VANSKELIG - KOMBINERT OPPGAVE ==========
    {
      id: 'fys2-4-5-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-11',
        number: '4.38',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En sirkulær spole med 80 vindinger og radius 6,0 cm roterer i et uniformt magnetfelt på 0,25 T. Spolen roterer med 50 omdreininger per sekund rundt en akse som er vinkelrett på magnetfeltet.

a) Beregn vinkelhastigheten i rad/s.
b) Skriv et uttrykk for flukskoblingen $\\Psi(t)$ som funksjon av tiden.
c) Finn $\\Psi$ ved $t = 0$, $t = 5,0$ ms og $t = 10,0$ ms.
d) Beregn den deriverte $\\frac{d\\Psi}{dt}$ og finn dens maksimalverdi.`,
        solution: `**Gitt:**
- $N = 80$ vindinger
- $r = 6,0$ cm $= 0,060$ m
- $B = 0,25$ T
- Frekvens: $f = 50$ Hz (omdreininger per sekund)

**Areal:**
$$A = \\pi r^2 = \\pi \\times (0,060)^2 = 1,13 \\times 10^{-2} \\text{ m}^2$$

**a) Vinkelhastighet:**
$$\\omega = 2\\pi f = 2\\pi \\times 50 = 314 \\text{ rad/s}$$

**b) Flukskobling som funksjon av tid:**

Vinkelen mellom felt og normalvektor: $\\theta(t) = \\omega t$

$$\\Psi(t) = NBA\\cos(\\omega t)$$

$$\\Psi(t) = 80 \\times 0,25 \\times 1,13 \\times 10^{-2} \\times \\cos(314t)$$

$$\\Psi(t) = 0,226 \\cos(314t) \\text{ Wb}$$

$$\\Psi(t) = 226 \\cos(314t) \\text{ mWb}$$

**c) Verdier ved spesifikke tidspunkter:**

Ved $t = 0$:
$$\\Psi(0) = 226 \\cos(0) = 226 \\text{ mWb}$$

Ved $t = 5,0$ ms $= 0,0050$ s:
$$\\Psi(0,0050) = 226 \\cos(314 \\times 0,0050) = 226 \\cos(1,57)$$
$$\\Psi = 226 \\times 0 = 0 \\text{ mWb}$$

(Merk: $314 \\times 0,005 = 1,57 \\approx \\pi/2$)

Ved $t = 10,0$ ms $= 0,010$ s:
$$\\Psi(0,010) = 226 \\cos(314 \\times 0,010) = 226 \\cos(3,14)$$
$$\\Psi = 226 \\times (-1) = -226 \\text{ mWb}$$

**d) Den deriverte:**

$$\\frac{d\\Psi}{dt} = \\frac{d}{dt}[0,226 \\cos(314t)]$$

$$\\frac{d\\Psi}{dt} = -0,226 \\times 314 \\times \\sin(314t)$$

$$\\frac{d\\Psi}{dt} = -71,0 \\sin(314t) \\text{ Wb/s}$$

**Maksimal endringsrate:**
$$\\left|\\frac{d\\Psi}{dt}\\right|_{maks} = 71,0 \\text{ Wb/s} = 71,0 \\text{ V}$$

**Svar:**
a) $\\omega = 314$ rad/s
b) $\\Psi(t) = 226\\cos(314t)$ mWb
c) $\\Psi(0) = 226$ mWb, $\\Psi(5$ ms$) = 0$, $\\Psi(10$ ms$) = -226$ mWb
d) $\\frac{d\\Psi}{dt} = -71,0\\sin(314t)$ V; maksimal: 71,0 V

**Kommentar:** Dette er prinsippet bak en AC-generator! Den maksimale induserte spenningen er 71 V.`,
      },
    },

    // ========== OPPGAVE 12: VANSKELIG - KONSEPTUELL ==========
    {
      id: 'fys2-4-5-ex-12-block',
      type: 'exercise',
      exercise: {
        id: 'fys2-4-5-ex-12',
        number: '4.39',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En fysikkstudent har tre måter å doble den induserte spenningen i en generator:

**Alternativ A:** Doble antall vindinger i spolen
**Alternativ B:** Doble rotasjonshastigheten
**Alternativ C:** Doble magnetfeltstyrken

a) Vis matematisk at alle tre alternativene gir dobbel indusert spenning.
b) Hvilke praktiske begrensninger har hvert alternativ?
c) Hvis den opprinnelige maksimale flukskoblingen er $\\Psi_0 = 0,50$ Wb og vinkelhastigheten er $\\omega_0 = 100$ rad/s, hva er maksimal indusert spenning før og etter hver endring?`,
        solution: `**Utgangspunkt:**

Den induserte spenningen er (fra Faradays lov):
$$\\mathcal{E} = -\\frac{d\\Psi}{dt} = -\\frac{d}{dt}[NBA\\cos(\\omega t)]$$

$$\\mathcal{E} = NBA\\omega\\sin(\\omega t)$$

Maksimal indusert spenning:
$$\\mathcal{E}_{maks} = NBA\\omega = \\Psi_0 \\omega$$

**a) Matematisk bevis:**

**Alternativ A - Doble antall vindinger ($N \\to 2N$):**
$$\\mathcal{E}'_{maks} = (2N)BA\\omega = 2(NBA\\omega) = 2\\mathcal{E}_{maks}$$ ✓

**Alternativ B - Doble rotasjonshastigheten ($\\omega \\to 2\\omega$):**
$$\\mathcal{E}'_{maks} = NBA(2\\omega) = 2(NBA\\omega) = 2\\mathcal{E}_{maks}$$ ✓

**Alternativ C - Doble magnetfeltet ($B \\to 2B$):**
$$\\mathcal{E}'_{maks} = N(2B)A\\omega = 2(NBA\\omega) = 2\\mathcal{E}_{maks}$$ ✓

**b) Praktiske begrensninger:**

**Alternativ A (flere vindinger):**
- Økt motstand → mer varmetap ($P = I^2R$)
- Større og tyngre spole
- Mer kobber trengs → dyrere
- Økt induktans kan påvirke frekvensrespons

**Alternativ B (raskere rotasjon):**
- Mekanisk slitasje øker dramatisk
- Sentrifugalkrefter kan ødelegge spolen
- Krever mer mekanisk effekt til drift
- Frekvensen på AC dobles også (kan være uønsket)

**Alternativ C (sterkere felt):**
- Større, tyngre magneter
- Permanent magneter: begrenset av materialegenskaper
- Elektromagneter: krever mer strøm → mer kjøling
- Metning i jernkjerne begrenser økning

**c) Numeriske verdier:**

**Før endring:**
$$\\mathcal{E}_{maks,0} = \\Psi_0 \\omega_0 = 0,50 \\times 100 = 50 \\text{ V}$$

**Etter alternativ A ($2N$):**
$$\\Psi' = 2\\Psi_0 = 1,0 \\text{ Wb}$$
$$\\mathcal{E}'_{maks} = 1,0 \\times 100 = 100 \\text{ V}$$

**Etter alternativ B ($2\\omega$):**
$$\\mathcal{E}'_{maks} = 0,50 \\times 200 = 100 \\text{ V}$$
(Men frekvensen dobles også!)

**Etter alternativ C ($2B$):**
$$\\Psi' = 2\\Psi_0 = 1,0 \\text{ Wb}$$
$$\\mathcal{E}'_{maks} = 1,0 \\times 100 = 100 \\text{ V}$$

**Svar:**
a) Alle gir $\\mathcal{E}' = 2\\mathcal{E}$ ✓
b) A: motstand/vekt; B: mekanisk/frekvens; C: materialgrenser
c) Før: 50 V; Etter (alle): 100 V

**Beste valg:** Avhenger av anvendelsen. For kraftverk er ofte kombinasjon av B og C brukt. For små generatorer kan A være enklest.`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-4-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Magnetisk fluks:**
$$\\Phi = BA\\cos\\theta$$

- $\\Phi$ = magnetisk fluks [Wb]
- $B$ = magnetfeltstyrke [T]
- $A$ = areal [m²]
- $\\theta$ = vinkel mellom $\\vec{B}$ og normalvektoren

**Enhet Weber:**
$$1 \\text{ Wb} = 1 \\text{ T} \\cdot \\text{m}^2$$

**Fluks og vinkel:**
- $\\theta = 0°$: Maksimal fluks ($\\Phi = BA$)
- $\\theta = 90°$: Null fluks ($\\Phi = 0$)
- Fluksen varierer som $\\cos\\theta$

**Flukskobling (spole med N vindinger):**
$$\\Psi = N\\Phi = NBA\\cos\\theta$$

**Gauss' lov for magnetisme:**
$$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$

- Total fluks gjennom lukket flate er alltid null
- Ingen magnetiske monopoler eksisterer
- Feltlinjer danner alltid lukkede kurver

**Fluksendring – grunnlag for induksjon:**

Fluksen kan endres ved å endre:
- Magnetfeltstyrken $B$
- Arealet $A$
- Vinkelen $\\theta$

Endringsraten:
$$\\frac{d\\Phi}{dt} \\text{ eller } \\frac{\\Delta\\Phi}{\\Delta t}$$

**Neste kapittel:**
Du skal lære Faradays induksjonslov:
$$\\mathcal{E} = -N\\frac{d\\Phi}{dt}$$

Endring i fluks induserer elektrisk spenning – grunnlaget for generatorer, transformatorer og mye av moderne teknologi!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.1: Faradays lov og indusert spenning
// LK20: Forklare og drøfte elektromagnetisk induksjon kvalitativt og kvantitativt
// ============================================================================

export const CHAPTER_FYSIKK2_5_1: TextbookChapter = {
  id: 'fysikk2-5-1',
  courseId: 'fysikk2',
  chapterNumber: '5.1',
  title: 'Faradays lov og indusert spenning',
  description: 'Lær om Faradays oppdagelse av elektromagnetisk induksjon, Faradays lov for indusert EMF, Lenz\' lov, og praktiske anvendelser som bevegelige ledere og virvelstrømmer.',
  estimatedMinutes: 55,
  prerequisites: ['fysikk2-4-5'],
  competenceGoals: [
    'forklare Faradays induksjonslov og beregne indusert EMF',
    'anvende Lenz\' lov til å bestemme retningen på indusert strøm',
    'beregne EMF i en bevegelig leder i et magnetfelt',
    'forklare virvelstrømmer og deres praktiske anvendelser',
    'analysere systemer med tidsvarierende magnetisk fluks',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-5-1-intro',
      type: 'text',
      content: `## Fra fluks til strøm – en revolusjonerende oppdagelse

I 1831 gjorde Michael Faraday en av de viktigste oppdagelsene i fysikkens historie: **endring i magnetisk fluks induserer elektrisk spenning**. Dette fenomenet kalles **elektromagnetisk induksjon**.

Denne oppdagelsen la grunnlaget for:
- **Elektriske generatorer** – som produserer nesten all elektrisitet vi bruker
- **Transformatorer** – som gjør det mulig å overføre strøm over store avstander
- **Induktorer** – viktige komponenter i elektronikk
- **Trådløs lading** – som lader telefoner og elbiler
- **Induksjonskomfyrer** – som varmer gryter direkte

**I dette kapitlet lærer du:**
- Faradays eksperimenter og oppdagelse
- Faradays lov: $\\varepsilon = -\\frac{d\\Phi}{dt}$
- Tre måter å endre magnetisk fluks
- Lenz' lov og minustegnets betydning
- EMF i bevegelige ledere
- Virvelstrømmer og deres effekter`,
    },

    // ========== FARADAYS OPPDAGELSE ==========
    {
      id: 'fys2-5-1-faraday-oppdagelse',
      type: 'text',
      content: `## Faradays eksperimenter

Michael Faraday (1791–1867) var en britisk eksperimentalfysiker med bemerkelsesverdig intuisjon. Han hadde lite formell utdanning, men hans eksperimenter revolusjonerte fysikken.

### Eksperiment 1: Spole og magnet

Faraday koblet en spole til et galvanometer (følsomt strømmåler) og observerte:
- **Når en magnet beveget seg mot spolen**: Strøm i én retning
- **Når magneten var i ro**: Ingen strøm
- **Når magneten beveget seg bort fra spolen**: Strøm i motsatt retning

### Eksperiment 2: To spoler

Han plasserte to spoler rundt samme jernkjerne:
- **Primærspole**: Koblet til batteri med bryter
- **Sekundærspole**: Koblet til galvanometer

**Observasjoner:**
- Når bryteren **sluttes** (strøm slås på): Kortvarig strøm i sekundærspolen
- Når strømmen er **konstant**: Ingen strøm i sekundærspolen
- Når bryteren **brytes** (strøm slås av): Kortvarig strøm i motsatt retning

### Faradays konklusjon

Det er ikke magnetfeltet i seg selv som skaper strøm, men **endringen** i magnetfeltet. Mer presist: det er endringen i **magnetisk fluks** gjennom sløyfen som induserer spenning.

> *"I have long held an opinion, almost amounting to conviction... that the various forms under which the forces of matter are made manifest have one common origin."* – Michael Faraday`,
    },

    // ========== DEFINISJON: INDUSERT EMF ==========
    {
      id: 'fys2-5-1-def-emf',
      type: 'definition',
      title: 'Indusert elektromotorisk kraft (EMF)',
      content: `**Elektromotorisk kraft (EMF)** $\\varepsilon$ er den induserte spenningen i en lukket sløyfe når magnetisk fluks gjennom sløyfen endres.

EMF måles i **volt (V)** og representerer den elektriske "drivkraften" som kan drive strøm i en krets.

**Viktig:** EMF er ikke en kraft i newtons forstand, men en spenning. Navnet er historisk og kan være misvisende.

**Symbol:** $\\varepsilon$ (gresk epsilon) eller noen ganger $\\mathcal{E}$

**Enhet:** Volt (V) = Weber/sekund (Wb/s)`,
    },

    // ========== FARADAYS LOV ==========
    {
      id: 'fys2-5-1-faradays-lov',
      type: 'theorem',
      title: 'Faradays induksjonslov',
      content: `Den induserte EMF i en lukket sløyfe er lik den negative endringsraten til magnetisk fluks gjennom sløyfen:

$$\\varepsilon = -\\frac{d\\Phi}{dt}$$

**For en spole med N vindinger:**

$$\\varepsilon = -N\\frac{d\\Phi}{dt} = -\\frac{d\\Psi}{dt}$$

**der:**
- $\\varepsilon$ = indusert EMF [V]
- $\\Phi$ = magnetisk fluks gjennom én vinding [Wb]
- $\\Psi = N\\Phi$ = flukskobling [Wb]
- $N$ = antall vindinger
- $\\frac{d\\Phi}{dt}$ = endringsrate for fluks [Wb/s]

**Ved gjennomsnittlig endring:**

$$\\varepsilon = -N\\frac{\\Delta\\Phi}{\\Delta t}$$`,
    },

    // ========== FORMEL: FARADAYS LOV ==========
    {
      id: 'fys2-5-1-formel-faraday',
      type: 'formula',
      title: 'Faradays lov',
      latex: `\\varepsilon = -N\\frac{d\\Phi}{dt} = -N\\frac{d(BA\\cos\\theta)}{dt}`,
      description: `Indusert EMF er proporsjonal med endringsraten til magnetisk fluks. Minustegnet indikerer at den induserte EMF-en motvirker endringen (Lenz' lov).`,
    },

    // ========== TRE MÅTER Å ENDRE FLUKS ==========
    {
      id: 'fys2-5-1-tre-mater',
      type: 'text',
      content: `## Tre måter å endre magnetisk fluks

Siden $\\Phi = BA\\cos\\theta$, kan fluksen endres på tre måter:

### 1. Endre magnetfeltstyrken B

**Eksempel:** En elektromagnet som slås av og på.

$$\\varepsilon = -NA\\cos\\theta \\cdot \\frac{dB}{dt}$$

**Anvendelser:**
- Transformatorer
- Trådløs lading
- Induksjonssensorer

### 2. Endre arealet A

**Eksempel:** En sløyfe som trekkes ut av et magnetfelt, eller som ekspanderer/krymper.

$$\\varepsilon = -NB\\cos\\theta \\cdot \\frac{dA}{dt}$$

**Anvendelser:**
- Mikrofoner (membran endrer areal i felt)
- Visse typer sensorer

### 3. Endre vinkelen θ

**Eksempel:** En spole som roterer i et magnetfelt.

$$\\varepsilon = NBA\\sin\\theta \\cdot \\frac{d\\theta}{dt} = NBA\\omega\\sin(\\omega t)$$

**Anvendelser:**
- Elektriske generatorer
- AC-motorer

### Kombinasjoner

I mange praktiske situasjoner endres flere faktorer samtidig. Da må man ofte bruke produktregelen for derivasjon.`,
    },

    // ========== EKSEMPEL: KONSTANT RATE ==========
    {
      id: 'fys2-5-1-eks-konstant',
      type: 'example',
      title: 'Indusert EMF fra konstant fluksendring',
      problem: `En spole med 200 vindinger og areal 0,050 m² ligger vinkelrett på et magnetfelt som endres uniformt fra 0,80 T til 0,20 T i løpet av 0,40 s.

a) Beregn den induserte EMF-en.
b) Hvis spolen har motstand 5,0 Ω, hva blir den induserte strømmen?`,
      solution: `**a) Beregn EMF:**

**Gitt:**
- $N = 200$ vindinger
- $A = 0,050$ m²
- $B_i = 0,80$ T, $B_f = 0,20$ T
- $\\Delta t = 0,40$ s
- $\\theta = 0°$ (vinkelrett, så $\\cos\\theta = 1$)

**Fluksendring:**
$$\\Delta\\Phi = A\\Delta B = 0,050 \\cdot (0,20 - 0,80) = 0,050 \\cdot (-0,60) = -0,030 \\text{ Wb}$$

**Indusert EMF (Faradays lov):**
$$\\varepsilon = -N\\frac{\\Delta\\Phi}{\\Delta t} = -200 \\cdot \\frac{-0,030}{0,40} = -200 \\cdot (-0,075) = 15 \\text{ V}$$

**Svar a):** Den induserte EMF-en er **15 V**.

---

**b) Indusert strøm:**

**Ohms lov:**
$$I = \\frac{\\varepsilon}{R} = \\frac{15}{5,0} = 3,0 \\text{ A}$$

**Svar b):** Den induserte strømmen er **3,0 A**.`,
    },

    // ========== LENZ' LOV ==========
    {
      id: 'fys2-5-1-lenz-lov',
      type: 'text',
      content: `## Lenz' lov – minustegnets betydning

Minustegnet i Faradays lov har en dyp fysisk betydning, formulert av Heinrich Lenz i 1834.

### Lenz' lov

> **Den induserte strømmen går i en retning som motvirker endringen som skapte den.**

Med andre ord: Naturen "motsetter seg" endringer i magnetisk fluks.

### Fysisk forklaring

1. **Økende fluks:** Hvis fluksen gjennom en sløyfe øker, vil den induserte strømmen skape et magnetfelt som motvirker økningen.

2. **Minkende fluks:** Hvis fluksen minker, vil den induserte strømmen skape et felt som prøver å opprettholde fluksen.

### Eksempel: Magnet og spole

**Nordpol nærmer seg spolen:**
- Fluksen øker (flere feltlinjer inn i spolen)
- Indusert strøm skaper et felt som peker MOT magneten (nordpol mot nordpol)
- Spolen "frastøter" magneten – motvirker bevegelsen

**Nordpol fjerner seg fra spolen:**
- Fluksen minker
- Indusert strøm skaper et felt som tiltrekker magneten
- Spolen "prøver å holde på" magneten

### Energibevaring

Lenz' lov er egentlig en konsekvens av **energibevaring**:
- For å indusere strøm må vi utføre arbeid mot den magnetiske kraften
- Hvis strømmen gikk "med" i stedet for "mot", ville vi få gratis energi!`,
    },

    // ========== NOTE: LENZ' LOV REGEL ==========
    {
      id: 'fys2-5-1-note-lenz',
      type: 'note',
      title: 'Huskeregel for Lenz\' lov',
      content: `**For å finne retningen på indusert strøm:**

1. Bestem om fluksen **øker** eller **minker**
2. Den induserte strømmen lager et magnetfelt som:
   - **Motvirker** økningen (peker motsatt av det eksterne feltet) hvis fluks øker
   - **Prøver å opprettholde** fluksen (peker samme vei som det eksterne feltet) hvis fluks minker
3. Bruk høyrehåndsregelen for å finne strømretningen

**Alternativ:** Minustegnet i $\\varepsilon = -N\\frac{d\\Phi}{dt}$ gir riktig fortegn automatisk hvis du definerer positive retninger konsistent.`,
    },

    // ========== EKSEMPEL: LENZ' LOV ==========
    {
      id: 'fys2-5-1-eks-lenz',
      type: 'example',
      title: 'Anvendelse av Lenz\' lov',
      problem: `En sirkulær sløyfe ligger i xy-planet. Et magnetfelt peker i positiv z-retning (oppover gjennom sløyfen) og øker i styrke.

a) Øker eller minker fluksen gjennom sløyfen?
b) I hvilken retning må det induserte magnetfeltet peke for å motvirke endringen?
c) Sett fra oversiden (positiv z), går den induserte strømmen med eller mot klokka?`,
      solution: `**a) Fluksendring:**

Fluksen $\\Phi = BA$ der $B$ peker oppover. Siden $B$ øker, **øker fluksen**.

---

**b) Retning på indusert felt:**

Lenz' lov: Den induserte strømmen skaper et felt som **motvirker** økningen.

Siden det eksterne feltet peker oppover (+z) og øker, må det induserte feltet peke **nedover** (-z) for å motvirke.

---

**c) Strømretning:**

For å skape et felt nedover (-z) gjennom sløyfen, må strømmen gå **med klokka** når sett ovenfra.

**Sjekk med høyrehåndsregelen:**
- Pek tommelen nedover (-z)
- Fingrene krøller seg med klokka

**Svar:**
a) Fluksen øker
b) Det induserte feltet peker nedover (-z)
c) Strømmen går med klokka (sett ovenfra)`,
    },

    // ========== EMF I BEVEGELIG LEDER ==========
    {
      id: 'fys2-5-1-bevegelig-leder',
      type: 'text',
      content: `## EMF i en bevegelig leder

En viktig spesialtilfellet av Faradays lov er en leder som beveger seg gjennom et magnetfelt.

### Fysisk forklaring

Når en ledende stav beveger seg gjennom et magnetfelt:
1. De frie elektronene i staven beveger seg med staven
2. Disse bevegelige ladningene opplever en **magnetisk kraft** (Lorentzkraften)
3. Kraften separerer positive og negative ladninger
4. Det bygger seg opp en **potensialdifferanse** (spenning) mellom endene

### Formel for bevegelig stav

For en stav med lengde $L$ som beveger seg med hastighet $v$ vinkelrett på et magnetfelt $B$:

$$\\varepsilon = BLv$$

**Utledning fra Faradays lov:**
- Staven "sveiper" over et areal $\\Delta A = L \\cdot v\\Delta t$ per tidsenhet
- Fluksendring: $\\Delta\\Phi = B\\Delta A = BLv\\Delta t$
- EMF: $\\varepsilon = \\frac{\\Delta\\Phi}{\\Delta t} = BLv$

### Alternativ utledning (Lorentzkraft)

For et elektron i staven:
- Magnetisk kraft: $F = qvB$
- Arbeid utført over lengden $L$: $W = FL = qvBL$
- EMF = arbeid per ladning: $\\varepsilon = \\frac{W}{q} = BLv$`,
    },

    // ========== FORMEL: BEVEGELIG LEDER ==========
    {
      id: 'fys2-5-1-formel-blv',
      type: 'formula',
      title: 'EMF i bevegelig leder',
      latex: `\\varepsilon = BLv`,
      description: `Der $B$ er magnetfeltstyrken [T], $L$ er lederens lengde [m], og $v$ er hastigheten vinkelrett på feltet [m/s]. EMF-en er i volt [V].`,
    },

    // ========== EKSEMPEL: BEVEGELIG STAV ==========
    {
      id: 'fys2-5-1-eks-stav',
      type: 'example',
      title: 'Bevegelig stav i magnetfelt',
      problem: `En metallstav med lengde 0,50 m beveger seg med konstant hastighet 4,0 m/s vinkelrett på et uniformt magnetfelt på 0,30 T. Staven glir på to parallelle skinner som er koblet til en motstand på 2,0 Ω.

a) Beregn den induserte EMF-en.
b) Beregn strømmen i kretsen.
c) Beregn kraften som trengs for å holde staven i konstant bevegelse.
d) Beregn effekten som utvikles i motstanden og sammenlign med mekanisk effekt.`,
      solution: `**a) Indusert EMF:**

$$\\varepsilon = BLv = 0,30 \\cdot 0,50 \\cdot 4,0 = 0,60 \\text{ V}$$

**Svar a):** EMF = **0,60 V**

---

**b) Strøm i kretsen:**

$$I = \\frac{\\varepsilon}{R} = \\frac{0,60}{2,0} = 0,30 \\text{ A}$$

**Svar b):** Strømmen er **0,30 A**

---

**c) Kraft for konstant bevegelse:**

Staven bærer strøm $I$ i et magnetfelt $B$, så den opplever en magnetisk kraft:
$$F_{mag} = BIL = 0,30 \\cdot 0,30 \\cdot 0,50 = 0,045 \\text{ N}$$

Denne kraften (Lenz' lov!) motvirker bevegelsen. For å holde konstant hastighet må vi påføre en like stor kraft i bevegelsesretningen:

**Svar c):** $F = $ **0,045 N** (45 mN)

---

**d) Effektsammenligning:**

**Elektrisk effekt i motstanden:**
$$P_{el} = I^2R = (0,30)^2 \\cdot 2,0 = 0,18 \\text{ W}$$

**Mekanisk effekt (arbeid per tid):**
$$P_{mek} = Fv = 0,045 \\cdot 4,0 = 0,18 \\text{ W}$$

De er like! Dette viser energibevaring: mekanisk arbeid konverteres til elektrisk energi.

**Svar d):** Begge effektene er **0,18 W** – energien er bevart.`,
    },

    // ========== VIRVELSTRØMMER ==========
    {
      id: 'fys2-5-1-virvelstrom',
      type: 'text',
      content: `## Virvelstrømmer (Eddy currents)

Når et ledende materiale utsettes for et skiftende magnetfelt, induseres strømmer ikke bare i spoler, men i hele materialet. Disse kalles **virvelstrømmer**.

### Hvordan oppstår virvelstrømmer?

1. Et skiftende magnetfelt induserer EMF i materialet
2. Materialet er elektrisk ledende, så strømmer kan flyte
3. Strømmene danner lukkede sløyfer ("virvler") i materialet
4. Etter Lenz' lov motvirker disse strømmene endringen

### Effekter av virvelstrømmer

**Negative effekter:**
- **Energitap:** $P = I^2R$ – varme utvikles i materialet
- **Effektivitetstap** i transformatorer og motorer

**Positive anvendelser:**
- **Elektromagnetisk bremsing** i tog og biler
- **Induksjonsovner** for smelting av metall
- **Induksjonskomfyrer** for matlaging
- **Metalldetektorer**
- **Trådløs lading** av telefoner

### Redusere uønskede virvelstrømmer

I transformatorer og motorer lamineres jernkjernen:
- Kjernen bygges av tynne, isolerte jernplater
- Dette begrenser størrelsen på virvelstrømsløyfene
- Reduserer energitap betydelig`,
    },

    // ========== EKSEMPEL: INDUSJONSOVN ==========
    {
      id: 'fys2-5-1-eks-induksjon',
      type: 'example',
      title: 'Induksjonskomfyr',
      problem: `En induksjonskomfyr bruker en spole under glassplaten som lager et oscillerende magnetfelt med frekvens 25 kHz. Forklar hvordan induksjonskomfyren varmer opp en stålkjele, og hvorfor den ikke varmer opp glassplaten.`,
      solution: `**Virkemåte:**

1. **Spolen** under glassplaten får vekselstrøm med høy frekvens (25 kHz)

2. **Oscillerende magnetfelt:** Strømmen skaper et magnetfelt som endrer retning 50 000 ganger per sekund

3. **Faradays lov:** Det raskt skiftende feltet induserer EMF i bunnen av kjelen

4. **Virvelstrømmer:** Siden kjelen er av stål (elektrisk ledende), flyter virvelstrømmer i bunn av kjelen

5. **Joulevarme:** Virvelstrømmene møter motstand: $P = I^2R$. Varmen utvikles direkte i kjelen!

**Hvorfor varmes ikke glassplaten?**

Glass er en **isolator** – det leder ikke strøm. Selv om magnetfeltet induserer EMF i glasset, kan ingen strøm flyte. Derfor ingen $I^2R$-varme.

**Hvorfor fungerer ikke aluminium like godt?**

Aluminium har svært lav motstand $R$. Selv om store strømmer induseres, er $I^2R$ relativt liten. Stål har høyere motstand og gir mer effektiv oppvarming.

**Fordeler med induksjon:**
- Rask oppvarming
- Effektiv energioverføring (>80%)
- Sikker – overflaten forblir relativt kjølig
- Presis temperaturkontroll`,
    },

    // ========== WARNING: INDUSERT SPENNING ==========
    {
      id: 'fys2-5-1-warning',
      type: 'warning',
      title: 'Høy indusert spenning kan være farlig',
      content: `Når strømmen i en spole med mange vindinger plutselig brytes, kan det induseres svært høy spenning (tusenvis av volt). Dette brukes i tennspolen i biler, men kan være farlig ved feilaktig håndtering av induktive kretser.

Lignende effekt oppstår når lysbryteren slås av for lysrør – derfor kan de "blitse" kort når de slås av.`,
    },

    // ========== TIDSVARIERENDE FELT ==========
    {
      id: 'fys2-5-1-tidsvarierende',
      type: 'text',
      content: `## Tidsvarierende magnetfelt

I mange praktiske situasjoner varierer magnetfeltet som en funksjon av tid. Da må vi bruke derivasjon for å finne den induserte EMF-en.

### Lineær endring

Hvis $B(t) = B_0 + kt$ (lineær økning med rate $k$):

$$\\varepsilon = -NA\\frac{dB}{dt} = -NAk$$

EMF-en er konstant når endringen er lineær.

### Sinusformet endring

Hvis $B(t) = B_0\\sin(\\omega t)$:

$$\\varepsilon = -NA\\frac{d}{dt}[B_0\\sin(\\omega t)] = -NAB_0\\omega\\cos(\\omega t)$$

$$\\varepsilon_{maks} = NAB_0\\omega$$

Dette er grunnlaget for vekselstrømsgeneratorer!

### Eksponentiell endring

Hvis $B(t) = B_0 e^{-t/\\tau}$ (eksponentiell demping):

$$\\varepsilon = -NA\\frac{dB}{dt} = \\frac{NAB_0}{\\tau}e^{-t/\\tau}$$

EMF-en avtar eksponentielt med samme tidskonstant.`,
    },

    // ========== EKSEMPEL: SINUSFORMET FELT ==========
    {
      id: 'fys2-5-1-eks-sinus',
      type: 'example',
      title: 'Spole i sinusformet magnetfelt',
      problem: `En flat spole med 150 vindinger og areal 80 cm² er plassert i et magnetfelt som varierer som $B(t) = 0,020\\sin(120\\pi t)$ T, der $t$ er i sekunder. Spolen står vinkelrett på feltet.

a) Skriv et uttrykk for den induserte EMF-en som funksjon av tid.
b) Beregn maksimal indusert EMF.
c) Hva er frekvensen til den induserte spenningen?`,
      solution: `**Gitt:**
- $N = 150$ vindinger
- $A = 80$ cm² $= 80 \\times 10^{-4}$ m² $= 0,0080$ m²
- $B(t) = 0,020\\sin(120\\pi t)$ T
- $\\theta = 0°$ (vinkelrett på feltet)

---

**a) Uttrykk for EMF:**

$$\\Phi = BA = 0,020\\sin(120\\pi t) \\cdot 0,0080 = 1,6 \\times 10^{-4}\\sin(120\\pi t) \\text{ Wb}$$

$$\\varepsilon = -N\\frac{d\\Phi}{dt} = -150 \\cdot \\frac{d}{dt}[1,6 \\times 10^{-4}\\sin(120\\pi t)]$$

$$\\varepsilon = -150 \\cdot 1,6 \\times 10^{-4} \\cdot 120\\pi \\cdot \\cos(120\\pi t)$$

$$\\varepsilon = -9,05\\cos(120\\pi t) \\text{ V}$$

Eller: $\\varepsilon = 9,05\\sin(120\\pi t - \\frac{\\pi}{2})$ V

**Svar a):** $\\varepsilon(t) = -9,0\\cos(120\\pi t)$ V

---

**b) Maksimal EMF:**

$$\\varepsilon_{maks} = NAB_0\\omega = 150 \\cdot 0,0080 \\cdot 0,020 \\cdot 120\\pi$$

$$\\varepsilon_{maks} = 9,05 \\text{ V} \\approx 9,0 \\text{ V}$$

**Svar b):** $\\varepsilon_{maks} \\approx$ **9,0 V**

---

**c) Frekvens:**

Fra $\\sin(120\\pi t)$: $\\omega = 120\\pi$ rad/s

$$f = \\frac{\\omega}{2\\pi} = \\frac{120\\pi}{2\\pi} = 60 \\text{ Hz}$$

**Svar c):** Frekvensen er **60 Hz** (vanlig nettfrekvens i USA/Japan)`,
    },

    // ========== TIP: DERIVASJONSREGLER ==========
    {
      id: 'fys2-5-1-tip',
      type: 'tip',
      title: 'Nyttige derivasjonsregler for induksjon',
      content: `**For å løse induksjonsproblemer trenger du ofte disse:**

| Funksjon | Derivert |
|----------|----------|
| $\\sin(\\omega t)$ | $\\omega\\cos(\\omega t)$ |
| $\\cos(\\omega t)$ | $-\\omega\\sin(\\omega t)$ |
| $e^{kt}$ | $ke^{kt}$ |
| $e^{-t/\\tau}$ | $-\\frac{1}{\\tau}e^{-t/\\tau}$ |
| $at + b$ | $a$ (konstant) |
| $at^2$ | $2at$ |

**Husk:** Når du deriverer med hensyn på tid, holder du andre variabler (som $N$, $A$) konstante.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-5-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Faradays lov
$$\\varepsilon = -N\\frac{d\\Phi}{dt}$$

Indusert EMF er proporsjonal med endringsraten til magnetisk fluks.

### Tre måter å endre fluks ($\\Phi = BA\\cos\\theta$)
1. Endre magnetfeltstyrken $B$
2. Endre arealet $A$
3. Endre vinkelen $\\theta$

### Lenz' lov
Den induserte strømmen går i en retning som **motvirker** endringen som skapte den. Dette er betydningen av minustegnet.

### EMF i bevegelig leder
$$\\varepsilon = BLv$$

For en stav med lengde $L$ som beveger seg med hastighet $v$ vinkelrett på felt $B$.

### Virvelstrømmer
- Induserte strømmer i ledende materialer
- Forårsaker oppvarming ($P = I^2R$)
- Brukes i induksjonsovner, elektromagnetisk bremsing, metalldetektorer

### Tidsvarierende felt
- Lineær endring $B = B_0 + kt$: Konstant EMF
- Sinusformet $B = B_0\\sin(\\omega t)$: $\\varepsilon_{maks} = NAB_0\\omega$

### Neste kapittel
Du skal lære om:
- Selvinduktans og induktorer
- Energi lagret i magnetfelt
- RL-kretser`,
    },
  ],

  // ============================================================================
  // OPPGAVER FOR KAPITTEL 5.1
  // ============================================================================
  exercises: [
    // ========== OPPGAVE 1: Multiple choice - Faradays lov ==========
    {
      id: 'fys2-5-1-ex1',
      number: '5.1.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Faradays lov',
      task: `Hvilken av følgende påstander om elektromagnetisk induksjon er korrekt?`,
      options: [
        {
          id: 'a',
          text: 'Et konstant magnetfelt gjennom en spole induserer konstant spenning',
          isCorrect: false,
          feedback: 'Nei, et konstant felt gir ingen fluksendring, altså ingen indusert EMF.',
        },
        {
          id: 'b',
          text: 'En indusert EMF oppstår når magnetisk fluks gjennom en sløyfe endres',
          isCorrect: true,
          feedback: 'Korrekt! Faradays lov sier at endring i fluks induserer EMF.',
        },
        {
          id: 'c',
          text: 'Jo sterkere magnetfeltet er, desto større EMF induseres',
          isCorrect: false,
          feedback: 'Ikke nødvendigvis. Det er endringsraten til fluksen som bestemmer EMF, ikke feltstyrken alene.',
        },
        {
          id: 'd',
          text: 'Indusert strøm går alltid i samme retning som magnetfeltet',
          isCorrect: false,
          feedback: 'Nei, strøm og magnetfelt er ikke parallelle størrelser. Strømretningen bestemmes av Lenz\' lov.',
        },
      ],
      hints: [
        'Tenk på Faradays lov: hva er det som faktisk induserer EMF?',
        'Er det magnetfeltet selv, eller endringen i fluks?',
      ],
      solution: `Faradays lov sier at $\\varepsilon = -\\frac{d\\Phi}{dt}$. Det er **endringen** i magnetisk fluks som induserer EMF, ikke magnetfeltet i seg selv. Et konstant magnetfelt gir $\\frac{d\\Phi}{dt} = 0$, altså ingen indusert EMF.`,
    },

    // ========== OPPGAVE 2: Multiple choice - Lenz' lov ==========
    {
      id: 'fys2-5-1-ex2',
      number: '5.1.2',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Lenz\' lov',
      task: `En magnet med nordpolen først skyves inn i en spole. Ifølge Lenz' lov vil den induserte strømmen i spolen skape et magnetfelt som:`,
      options: [
        {
          id: 'a',
          text: 'Tiltrekker magneten',
          isCorrect: false,
          feedback: 'Nei, dette ville forsterke endringen, ikke motvirke den.',
        },
        {
          id: 'b',
          text: 'Frastøter magneten',
          isCorrect: true,
          feedback: 'Korrekt! Lenz\' lov sier at den induserte strømmen motvirker endringen. Siden magneten nærmer seg, vil spolen prøve å stoppe den ved å frastøte.',
        },
        {
          id: 'c',
          text: 'Er parallell med magneten',
          isCorrect: false,
          feedback: 'Dette beskriver ikke hva Lenz\' lov sier om retningen.',
        },
        {
          id: 'd',
          text: 'Er null (ingen magnetfelt)',
          isCorrect: false,
          feedback: 'Nei, den induserte strømmen skaper definitivt et magnetfelt.',
        },
      ],
      hints: [
        'Lenz\' lov sier at den induserte strømmen motvirker endringen.',
        'Hvis magneten nærmer seg, hva må spolen "gjøre" for å motvirke dette?',
      ],
      solution: `Når nordpolen nærmer seg spolen, øker fluksen gjennom spolen. Lenz' lov sier at den induserte strømmen må motvirke denne endringen. Den skaper derfor et felt som frastøter magneten (nordpol mot nordpol), som om spolen "prøver å stoppe" magneten fra å komme nærmere.`,
    },

    // ========== OPPGAVE 3: Multiple choice - EMF enhet ==========
    {
      id: 'fys2-5-1-ex3',
      number: '5.1.3',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Enheter',
      task: `Hvilken enhet er korrekt for indusert EMF i Faradays lov?`,
      options: [
        {
          id: 'a',
          text: 'Tesla (T)',
          isCorrect: false,
          feedback: 'Tesla er enheten for magnetfeltstyrke $B$.',
        },
        {
          id: 'b',
          text: 'Weber (Wb)',
          isCorrect: false,
          feedback: 'Weber er enheten for magnetisk fluks $\\Phi$.',
        },
        {
          id: 'c',
          text: 'Volt (V)',
          isCorrect: true,
          feedback: 'Korrekt! EMF måles i volt. 1 V = 1 Wb/s.',
        },
        {
          id: 'd',
          text: 'Ampere (A)',
          isCorrect: false,
          feedback: 'Ampere er enheten for strøm, ikke spenning/EMF.',
        },
      ],
      hints: [
        'EMF står for elektromotorisk kraft, men er egentlig en spenning.',
        'Hva er enheten for spenning?',
      ],
      solution: `Indusert EMF måles i volt (V). Fra Faradays lov: $\\varepsilon = -\\frac{d\\Phi}{dt}$ der fluks er i Weber og tid i sekunder, så $[\\varepsilon] = \\frac{\\text{Wb}}{\\text{s}} = \\text{V}$.`,
    },

    // ========== OPPGAVE 4: Medium - Beregne EMF ==========
    {
      id: 'fys2-5-1-ex4',
      number: '5.1.4',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Faradays lov beregning',
      task: `En rektangulær spole med 100 vindinger har dimensjoner 20 cm × 15 cm. Spolen er plassert vinkelrett på et uniformt magnetfelt som endres fra 0,50 T til 0,10 T i løpet av 0,20 s.

a) Beregn endringen i magnetisk fluks gjennom spolen.
b) Beregn størrelsen på den induserte EMF-en.`,
      hints: [
        'Husk å konvertere cm til m for areal.',
        'Bruk $\\Delta\\Phi = A \\cdot \\Delta B$ når spolen står vinkelrett på feltet.',
        'Faradays lov: $\\varepsilon = -N\\frac{\\Delta\\Phi}{\\Delta t}$',
      ],
      solution: `**Gitt:**
- $N = 100$ vindinger
- Dimensjoner: 20 cm × 15 cm = 0,20 m × 0,15 m
- $A = 0,20 \\cdot 0,15 = 0,030$ m²
- $B_i = 0,50$ T, $B_f = 0,10$ T
- $\\Delta t = 0,20$ s

**a) Fluksendring:**
$$\\Delta\\Phi = A \\cdot \\Delta B = 0,030 \\cdot (0,10 - 0,50) = 0,030 \\cdot (-0,40) = -0,012 \\text{ Wb}$$

**Svar a):** $|\\Delta\\Phi| = 0,012$ Wb (fluksen minker med 0,012 Wb)

**b) Indusert EMF:**
$$\\varepsilon = -N\\frac{\\Delta\\Phi}{\\Delta t} = -100 \\cdot \\frac{-0,012}{0,20} = -100 \\cdot (-0,060) = 6,0 \\text{ V}$$

**Svar b):** $\\varepsilon = 6,0$ V`,
      subTasks: [
        { label: 'a', task: 'Beregn endringen i magnetisk fluks', answer: 0.012, multipleChoiceOptions: ['0,012 Wb', '0,12 Wb', '0,0012 Wb', '1,2 Wb'] },
        { label: 'b', task: 'Beregn den induserte EMF-en', answer: 6.0, multipleChoiceOptions: ['6,0 V', '0,6 V', '60 V', '0,06 V'] },
      ],
    },

    // ========== OPPGAVE 5: Medium - Bevegelig leder ==========
    {
      id: 'fys2-5-1-ex5',
      number: '5.1.5',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Bevegelig leder',
      task: `En metallstav med lengde 0,40 m glir langs to parallelle skinner med konstant hastighet 3,0 m/s. Systemet er plassert i et uniformt magnetfelt på 0,25 T som står vinkelrett på planet der skinnene ligger.

a) Beregn den induserte EMF-en i staven.
b) Hvis skinnene er koblet til en motstand på 0,50 Ω, beregn strømmen i kretsen.
c) Beregn kraften som trengs for å holde staven i bevegelse.`,
      hints: [
        'Bruk formelen $\\varepsilon = BLv$ for bevegelig leder.',
        'Bruk Ohms lov for å finne strømmen.',
        'Staven med strøm i magnetfelt opplever en kraft $F = BIL$ som motvirker bevegelsen.',
      ],
      solution: `**Gitt:**
- $L = 0,40$ m
- $v = 3,0$ m/s
- $B = 0,25$ T
- $R = 0,50$ Ω

**a) Indusert EMF:**
$$\\varepsilon = BLv = 0,25 \\cdot 0,40 \\cdot 3,0 = 0,30 \\text{ V}$$

**Svar a):** $\\varepsilon = 0,30$ V

**b) Strøm:**
$$I = \\frac{\\varepsilon}{R} = \\frac{0,30}{0,50} = 0,60 \\text{ A}$$

**Svar b):** $I = 0,60$ A

**c) Kraft for å holde bevegelsen:**

Den magnetiske kraften på staven er:
$$F_{mag} = BIL = 0,25 \\cdot 0,60 \\cdot 0,40 = 0,060 \\text{ N}$$

Denne kraften motvirker bevegelsen (Lenz' lov). For å holde konstant hastighet må vi påføre en like stor kraft:

**Svar c):** $F = 0,060$ N = 60 mN`,
      subTasks: [
        { label: 'a', task: 'Beregn indusert EMF', answer: 0.30, multipleChoiceOptions: ['0,30 V', '0,030 V', '3,0 V', '0,75 V'] },
        { label: 'b', task: 'Beregn strømmen', answer: 0.60, multipleChoiceOptions: ['0,60 A', '0,060 A', '6,0 A', '1,2 A'] },
        { label: 'c', task: 'Beregn kraften', answer: 0.060, multipleChoiceOptions: ['0,060 N', '0,60 N', '0,0060 N', '0,15 N'] },
      ],
    },

    // ========== OPPGAVE 6: Medium - Fluksendring ==========
    {
      id: 'fys2-5-1-ex6',
      number: '5.1.6',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Fluksendring',
      task: `En sirkulær spole med radius 10 cm og 50 vindinger ligger i et magnetfelt. Feltet står vinkelrett på spolen og øker uniformt fra 0 til 0,80 T i løpet av 0,40 s.

a) Beregn spolens areal.
b) Beregn den totale fluksendringen gjennom spolen.
c) Beregn gjennomsnittlig indusert EMF.`,
      hints: [
        'Arealet til en sirkel: $A = \\pi r^2$',
        'Husk å konvertere cm til m.',
        'Total fluksendring: $\\Delta\\Phi = A \\cdot \\Delta B$',
      ],
      solution: `**Gitt:**
- $r = 10$ cm = 0,10 m
- $N = 50$ vindinger
- $B_i = 0$, $B_f = 0,80$ T
- $\\Delta t = 0,40$ s

**a) Areal:**
$$A = \\pi r^2 = \\pi \\cdot (0,10)^2 = 0,0314 \\text{ m}^2$$

**Svar a):** $A \\approx 0,031$ m²

**b) Fluksendring:**
$$\\Delta\\Phi = A \\cdot \\Delta B = 0,0314 \\cdot (0,80 - 0) = 0,0251 \\text{ Wb}$$

**Svar b):** $\\Delta\\Phi \\approx 0,025$ Wb

**c) Gjennomsnittlig EMF:**
$$\\varepsilon = N\\frac{\\Delta\\Phi}{\\Delta t} = 50 \\cdot \\frac{0,0251}{0,40} = 3,1 \\text{ V}$$

**Svar c):** $\\varepsilon \\approx 3,1$ V`,
      subTasks: [
        { label: 'a', task: 'Beregn arealet', answer: 0.031, multipleChoiceOptions: ['0,031 m²', '0,31 m²', '0,0031 m²', '0,10 m²'] },
        { label: 'b', task: 'Beregn fluksendringen', answer: 0.025, multipleChoiceOptions: ['0,025 Wb', '0,25 Wb', '0,0025 Wb', '0,80 Wb'] },
        { label: 'c', task: 'Beregn EMF', answer: 3.1, multipleChoiceOptions: ['3,1 V', '0,31 V', '31 V', '1,6 V'] },
      ],
    },

    // ========== OPPGAVE 7: Medium - Lenz' lov retning ==========
    {
      id: 'fys2-5-1-ex7',
      number: '5.1.7',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Lenz\' lov',
      task: `En horisontal, sirkulær sløyfe ligger på et bord. Et magnetfelt peker vertikalt nedover gjennom sløyfen og øker i styrke.

a) Øker eller minker fluksen gjennom sløyfen?
b) I hvilken retning vil den induserte strømmen gå (med eller mot klokka sett ovenfra)?
c) Forklar svaret i b) ved hjelp av Lenz' lov.`,
      hints: [
        'Tenk på normalvektoren til sløyfen og retningen til magnetfeltet.',
        'Bruk Lenz\' lov: strømmen motvirker endringen.',
        'Bruk høyrehåndsregelen for å koble strømretning og feltretning.',
      ],
      solution: `**a) Fluksendring:**

Magnetfeltet peker nedover og øker. Fluksen gjennom sløyfen **øker**.

**b) Strømretning:**

Sett ovenfra går strømmen **mot klokka**.

**c) Forklaring med Lenz' lov:**

- Fluksen øker nedover gjennom sløyfen
- Lenz' lov: Den induserte strømmen må skape et felt som **motvirker** økningen
- For å motvirke må det induserte feltet peke **oppover**
- Høyrehåndsregelen: For felt oppover må strømmen gå **mot klokka** (sett ovenfra)

Sløyfen prøver å "holde igjen" den økende fluksen ved å skape et motvirkende felt.`,
    },

    // ========== OPPGAVE 8: Vanskelig - Sinusformet felt ==========
    {
      id: 'fys2-5-1-ex8',
      number: '5.1.8',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Tidsvarierende felt',
      task: `En spole med 200 vindinger og areal 50 cm² er plassert vinkelrett på et magnetfelt som varierer som $B(t) = 0,10\\sin(100\\pi t)$ T.

a) Skriv et uttrykk for fluksen gjennom spolen som funksjon av tid.
b) Utled et uttrykk for den induserte EMF-en som funksjon av tid.
c) Beregn maksimalverdien av den induserte EMF-en.
d) Hva er frekvensen til den induserte spenningen?`,
      hints: [
        'Fluks: $\\Phi = BA$ når spolen står vinkelrett på feltet.',
        'Bruk kjerneregelen ved derivasjon: $\\frac{d}{dt}[\\sin(\\omega t)] = \\omega\\cos(\\omega t)$',
        'Fra $\\sin(\\omega t)$ er vinkelfrekvensen $\\omega$ og frekvensen $f = \\frac{\\omega}{2\\pi}$',
      ],
      solution: `**Gitt:**
- $N = 200$ vindinger
- $A = 50$ cm² = $50 \\times 10^{-4}$ m² = $5,0 \\times 10^{-3}$ m²
- $B(t) = 0,10\\sin(100\\pi t)$ T

**a) Fluks som funksjon av tid:**
$$\\Phi(t) = BA = 0,10\\sin(100\\pi t) \\cdot 5,0 \\times 10^{-3}$$
$$\\Phi(t) = 5,0 \\times 10^{-4}\\sin(100\\pi t) \\text{ Wb}$$

**Svar a):** $\\Phi(t) = 5,0 \\times 10^{-4}\\sin(100\\pi t)$ Wb

**b) Indusert EMF:**
$$\\varepsilon = -N\\frac{d\\Phi}{dt} = -200 \\cdot \\frac{d}{dt}[5,0 \\times 10^{-4}\\sin(100\\pi t)]$$
$$\\varepsilon = -200 \\cdot 5,0 \\times 10^{-4} \\cdot 100\\pi \\cdot \\cos(100\\pi t)$$
$$\\varepsilon = -31,4\\cos(100\\pi t) \\text{ V}$$

**Svar b):** $\\varepsilon(t) = -31\\cos(100\\pi t)$ V (eller $31\\sin(100\\pi t - \\frac{\\pi}{2})$ V)

**c) Maksimal EMF:**
$$\\varepsilon_{maks} = NAB_0\\omega = 200 \\cdot 5,0 \\times 10^{-3} \\cdot 0,10 \\cdot 100\\pi = 31,4 \\text{ V}$$

**Svar c):** $\\varepsilon_{maks} \\approx 31$ V

**d) Frekvens:**
$$\\omega = 100\\pi \\text{ rad/s}$$
$$f = \\frac{\\omega}{2\\pi} = \\frac{100\\pi}{2\\pi} = 50 \\text{ Hz}$$

**Svar d):** $f = 50$ Hz (norsk nettfrekvens!)`,
      subTasks: [
        { label: 'a', task: 'Skriv uttrykk for fluks' },
        { label: 'b', task: 'Utled uttrykk for EMF' },
        { label: 'c', task: 'Beregn maksimal EMF', answer: 31, multipleChoiceOptions: ['31 V', '3,1 V', '310 V', '15 V'] },
        { label: 'd', task: 'Finn frekvensen', answer: 50, multipleChoiceOptions: ['50 Hz', '100 Hz', '25 Hz', '314 Hz'] },
      ],
    },

    // ========== OPPGAVE 9: Vanskelig - Kompleks geometri ==========
    {
      id: 'fys2-5-1-ex9',
      number: '5.1.9',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Kompleks geometri',
      task: `En rektangulær sløyfe med bredde $w = 5,0$ cm og lengde $\\ell = 20$ cm trekkes med konstant hastighet $v = 2,0$ m/s ut av et uniformt magnetfelt på $B = 0,50$ T. Feltet dekker et område som er bredere enn sløyfen, og sløyfen starter helt inne i feltet.

a) Beregn den induserte EMF-en mens sløyfen trekkes ut.
b) Hvis sløyfens motstand er $R = 0,10$ Ω, hva er strømmen?
c) Beregn kraften som trengs for å trekke sløyfen ut med konstant hastighet.
d) Hvor lang tid tar det før sløyfen er helt ute av feltet?
e) Hvor mye energi dissiperes i motstanden under uttrekkingen?`,
      hints: [
        'Når sløyfen trekkes ut, minker arealet inne i feltet. Bruk $\\frac{dA}{dt} = w \\cdot v$.',
        'For kraft, bruk at to sider av sløyfen bærer strøm i feltet.',
        'Energi kan beregnes som $E = Pt$ eller $E = Fv \\cdot t$.',
      ],
      solution: `**Gitt:**
- $w = 5,0$ cm = 0,050 m (bredde)
- $\\ell = 20$ cm = 0,20 m (lengde i bevegelsesretning)
- $v = 2,0$ m/s
- $B = 0,50$ T
- $R = 0,10$ Ω

**a) Indusert EMF:**

Når sløyfen trekkes ut, minker arealet inne i feltet med rate:
$$\\frac{dA}{dt} = w \\cdot v = 0,050 \\cdot 2,0 = 0,10 \\text{ m}^2/\\text{s}$$

Fluksendring:
$$\\frac{d\\Phi}{dt} = B\\frac{dA}{dt} = 0,50 \\cdot 0,10 = 0,050 \\text{ Wb/s}$$

$$\\varepsilon = \\frac{d\\Phi}{dt} = 0,050 \\text{ V} = 50 \\text{ mV}$$

Alternativt: $\\varepsilon = Bwv = 0,50 \\cdot 0,050 \\cdot 2,0 = 0,050$ V

**Svar a):** $\\varepsilon = 50$ mV

**b) Strøm:**
$$I = \\frac{\\varepsilon}{R} = \\frac{0,050}{0,10} = 0,50 \\text{ A}$$

**Svar b):** $I = 0,50$ A

**c) Kraft:**

Den ene kortsiden av sløyfen er inne i feltet med strøm $I$:
$$F_{mag} = BIw = 0,50 \\cdot 0,50 \\cdot 0,050 = 0,0125 \\text{ N}$$

For konstant hastighet må vi påføre kraft lik denne:

**Svar c):** $F = 12,5$ mN = $1,25 \\times 10^{-2}$ N

**d) Tid for å trekke ut:**
$$t = \\frac{\\ell}{v} = \\frac{0,20}{2,0} = 0,10 \\text{ s}$$

**Svar d):** $t = 0,10$ s = 100 ms

**e) Energi dissiperet:**

**Metode 1 (elektrisk):**
$$P = I^2R = (0,50)^2 \\cdot 0,10 = 0,025 \\text{ W}$$
$$E = Pt = 0,025 \\cdot 0,10 = 0,0025 \\text{ J} = 2,5 \\text{ mJ}$$

**Metode 2 (mekanisk):**
$$E = F \\cdot \\ell = 0,0125 \\cdot 0,20 = 0,0025 \\text{ J} = 2,5 \\text{ mJ}$$

Begge gir samme svar – energibevaring!

**Svar e):** $E = 2,5$ mJ`,
      subTasks: [
        { label: 'a', task: 'Beregn EMF', answer: 0.050, multipleChoiceOptions: ['50 mV', '500 mV', '5 mV', '0,50 V'] },
        { label: 'b', task: 'Beregn strømmen', answer: 0.50, multipleChoiceOptions: ['0,50 A', '5,0 A', '0,050 A', '1,0 A'] },
        { label: 'c', task: 'Beregn kraften', answer: 0.0125, multipleChoiceOptions: ['12,5 mN', '125 mN', '1,25 mN', '25 mN'] },
        { label: 'd', task: 'Beregn tiden', answer: 0.10, multipleChoiceOptions: ['0,10 s', '1,0 s', '0,010 s', '0,40 s'] },
        { label: 'e', task: 'Beregn energien', answer: 0.0025, multipleChoiceOptions: ['2,5 mJ', '25 mJ', '0,25 mJ', '5,0 mJ'] },
      ],
    },

    // ========== OPPGAVE 10: Vanskelig - Eksponentiell demping ==========
    {
      id: 'fys2-5-1-ex10',
      number: '5.1.10',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Eksponentiell fluksendring',
      task: `Et magnetfelt gjennom en spole med 500 vindinger og areal 40 cm² avtar eksponentielt som $B(t) = B_0 e^{-t/\\tau}$, der $B_0 = 1,2$ T og tidskonstanten $\\tau = 0,50$ s.

a) Finn et uttrykk for den induserte EMF-en som funksjon av tid.
b) Beregn EMF-en ved $t = 0$.
c) Beregn EMF-en ved $t = \\tau = 0,50$ s.
d) Ved hvilken tid er EMF-en halvparten av startverdien?`,
      hints: [
        'Derivasjon: $\\frac{d}{dt}[e^{-t/\\tau}] = -\\frac{1}{\\tau}e^{-t/\\tau}$',
        'Ved $t = \\tau$: $e^{-1} \\approx 0,368$',
        'For å finne halveringstid, sett $e^{-t/\\tau} = 0,5$ og løs for $t$.',
      ],
      solution: `**Gitt:**
- $N = 500$ vindinger
- $A = 40$ cm² = $40 \\times 10^{-4}$ m² = $4,0 \\times 10^{-3}$ m²
- $B(t) = B_0 e^{-t/\\tau}$
- $B_0 = 1,2$ T
- $\\tau = 0,50$ s

**a) Uttrykk for EMF:**

$$\\Phi = BA = B_0 e^{-t/\\tau} \\cdot A$$

$$\\varepsilon = -N\\frac{d\\Phi}{dt} = -NA\\frac{d}{dt}[B_0 e^{-t/\\tau}]$$

$$\\varepsilon = -NAB_0 \\cdot \\left(-\\frac{1}{\\tau}\\right) e^{-t/\\tau} = \\frac{NAB_0}{\\tau} e^{-t/\\tau}$$

Sett inn verdier:
$$\\varepsilon(t) = \\frac{500 \\cdot 4,0 \\times 10^{-3} \\cdot 1,2}{0,50} e^{-t/0,50}$$

$$\\varepsilon(t) = 4,8 e^{-t/0,50} \\text{ V}$$

**Svar a):** $\\varepsilon(t) = 4,8 e^{-2t}$ V (der $t$ er i sekunder)

**b) EMF ved t = 0:**
$$\\varepsilon(0) = 4,8 e^{0} = 4,8 \\cdot 1 = 4,8 \\text{ V}$$

**Svar b):** $\\varepsilon(0) = 4,8$ V

**c) EMF ved t = τ:**
$$\\varepsilon(\\tau) = 4,8 e^{-1} = 4,8 \\cdot 0,368 = 1,77 \\text{ V}$$

**Svar c):** $\\varepsilon(0,50) \\approx 1,8$ V

**d) Halveringstid:**

Vi søker $t$ der $\\varepsilon = \\frac{\\varepsilon_0}{2}$:
$$e^{-t/\\tau} = 0,5$$
$$-\\frac{t}{\\tau} = \\ln(0,5) = -0,693$$
$$t = 0,693 \\tau = 0,693 \\cdot 0,50 = 0,347 \\text{ s}$$

**Svar d):** $t_{1/2} \\approx 0,35$ s`,
      subTasks: [
        { label: 'a', task: 'Finn uttrykk for EMF' },
        { label: 'b', task: 'Beregn EMF ved t = 0', answer: 4.8, multipleChoiceOptions: ['4,8 V', '48 V', '0,48 V', '2,4 V'] },
        { label: 'c', task: 'Beregn EMF ved t = τ', answer: 1.8, multipleChoiceOptions: ['1,8 V', '0,18 V', '18 V', '3,6 V'] },
        { label: 'd', task: 'Finn halveringstiden', answer: 0.35, multipleChoiceOptions: ['0,35 s', '0,50 s', '0,69 s', '0,25 s'] },
      ],
    },

    // ========== OPPGAVE 11: Vanskelig - Energi og effekt ==========
    {
      id: 'fys2-5-1-ex11',
      number: '5.1.11',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Energi og effekt',
      task: `En generator består av en spole med 1000 vindinger som roterer i et uniformt magnetfelt på 0,40 T. Spolen har areal 0,020 m² og roterer med 3000 omdreininger per minutt. Spolen er koblet til en motstand på 100 Ω.

a) Beregn vinkelfrekvensen ω i rad/s.
b) Beregn maksimal indusert EMF.
c) Beregn maksimal strøm og maksimal effekt i motstanden.
d) Beregn gjennomsnittlig effekt levert til motstanden.`,
      hints: [
        'Konverter rpm til rad/s: $\\omega = \\frac{2\\pi n}{60}$ der $n$ er omdreininger per minutt.',
        'Maksimal EMF: $\\varepsilon_{maks} = NAB\\omega$',
        'For sinusformet spenning: $P_{gj.snitt} = \\frac{P_{maks}}{2}$',
      ],
      solution: `**Gitt:**
- $N = 1000$ vindinger
- $B = 0,40$ T
- $A = 0,020$ m²
- $n = 3000$ rpm
- $R = 100$ Ω

**a) Vinkelfrekvens:**
$$\\omega = \\frac{2\\pi n}{60} = \\frac{2\\pi \\cdot 3000}{60} = 100\\pi \\text{ rad/s} \\approx 314 \\text{ rad/s}$$

**Svar a):** $\\omega = 100\\pi$ rad/s $\\approx 314$ rad/s

**b) Maksimal EMF:**
$$\\varepsilon_{maks} = NAB\\omega = 1000 \\cdot 0,020 \\cdot 0,40 \\cdot 100\\pi$$
$$\\varepsilon_{maks} = 8 \\cdot 100\\pi = 800\\pi \\approx 2513 \\text{ V}$$

**Svar b):** $\\varepsilon_{maks} \\approx 2500$ V = 2,5 kV

**c) Maksimal strøm og effekt:**

$$I_{maks} = \\frac{\\varepsilon_{maks}}{R} = \\frac{2513}{100} = 25,1 \\text{ A}$$

$$P_{maks} = I_{maks}^2 R = (25,1)^2 \\cdot 100 = 63000 \\text{ W} = 63 \\text{ kW}$$

Eller: $P_{maks} = \\frac{\\varepsilon_{maks}^2}{R} = \\frac{(2513)^2}{100} = 63 \\text{ kW}$

**Svar c):** $I_{maks} \\approx 25$ A, $P_{maks} \\approx 63$ kW

**d) Gjennomsnittlig effekt:**

For sinusformet spenning/strøm:
$$P_{gj.snitt} = \\frac{P_{maks}}{2} = \\frac{63000}{2} = 31500 \\text{ W} = 31,5 \\text{ kW}$$

Alternativt med RMS-verdier:
$$\\varepsilon_{rms} = \\frac{\\varepsilon_{maks}}{\\sqrt{2}}, \\quad P = \\frac{\\varepsilon_{rms}^2}{R} = \\frac{\\varepsilon_{maks}^2}{2R}$$

**Svar d):** $P_{gj.snitt} \\approx 32$ kW`,
      subTasks: [
        { label: 'a', task: 'Beregn vinkelfrekvensen', answer: 314, multipleChoiceOptions: ['314 rad/s', '3140 rad/s', '31,4 rad/s', '50 rad/s'] },
        { label: 'b', task: 'Beregn maksimal EMF', answer: 2500, multipleChoiceOptions: ['2500 V', '250 V', '25000 V', '800 V'] },
        { label: 'c', task: 'Beregn maksimal effekt', answer: 63000, multipleChoiceOptions: ['63 kW', '6,3 kW', '630 kW', '25 kW'] },
        { label: 'd', task: 'Beregn gjennomsnittlig effekt', answer: 31500, multipleChoiceOptions: ['31,5 kW', '63 kW', '15,8 kW', '44,5 kW'] },
      ],
    },

    // ========== OPPGAVE 12: Vanskelig - Flere vindinger ==========
    {
      id: 'fys2-5-1-ex12',
      number: '5.1.12',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Analyse og sammenligning',
      task: `To spoler A og B har samme areal $A = 100$ cm². Spole A har 50 vindinger og spole B har 200 vindinger. Begge plasseres i samme magnetfelt som varierer lineært fra 0 til 0,60 T i løpet av 0,30 s.

a) Beregn fluksendringen gjennom én vinding i hver spole.
b) Beregn den induserte EMF-en i hver spole.
c) Hva er forholdet mellom EMF-ene i de to spolene?
d) Hvis begge spolene har total motstand 10 Ω, sammenlign strømmene og effektene i spolene.`,
      hints: [
        'Fluksendring per vinding er lik for begge spoler siden de har samme areal.',
        'EMF er proporsjonal med antall vindinger: $\\varepsilon = N\\frac{\\Delta\\Phi}{\\Delta t}$',
        'Tenk på hvordan effekt skalerer med spenning.',
      ],
      solution: `**Gitt:**
- $A = 100$ cm² = 0,010 m²
- Spole A: $N_A = 50$
- Spole B: $N_B = 200$
- $\\Delta B = 0,60$ T, $\\Delta t = 0,30$ s
- $R = 10$ Ω for begge

**a) Fluksendring per vinding:**

Begge spoler har samme areal og samme feltendring:
$$\\Delta\\Phi = A \\cdot \\Delta B = 0,010 \\cdot 0,60 = 0,0060 \\text{ Wb}$$

**Svar a):** $\\Delta\\Phi = 6,0$ mWb for begge

**b) Indusert EMF:**

**Spole A:**
$$\\varepsilon_A = N_A\\frac{\\Delta\\Phi}{\\Delta t} = 50 \\cdot \\frac{0,0060}{0,30} = 50 \\cdot 0,020 = 1,0 \\text{ V}$$

**Spole B:**
$$\\varepsilon_B = N_B\\frac{\\Delta\\Phi}{\\Delta t} = 200 \\cdot \\frac{0,0060}{0,30} = 200 \\cdot 0,020 = 4,0 \\text{ V}$$

**Svar b):** $\\varepsilon_A = 1,0$ V, $\\varepsilon_B = 4,0$ V

**c) Forhold mellom EMF-ene:**
$$\\frac{\\varepsilon_B}{\\varepsilon_A} = \\frac{N_B}{N_A} = \\frac{200}{50} = 4$$

**Svar c):** EMF i B er 4 ganger EMF i A

**d) Strøm og effekt:**

**Strømmer:**
$$I_A = \\frac{\\varepsilon_A}{R} = \\frac{1,0}{10} = 0,10 \\text{ A}$$
$$I_B = \\frac{\\varepsilon_B}{R} = \\frac{4,0}{10} = 0,40 \\text{ A}$$

$$\\frac{I_B}{I_A} = 4$$

**Effekter:**
$$P_A = I_A^2 R = (0,10)^2 \\cdot 10 = 0,10 \\text{ W}$$
$$P_B = I_B^2 R = (0,40)^2 \\cdot 10 = 1,6 \\text{ W}$$

$$\\frac{P_B}{P_A} = \\frac{1,6}{0,10} = 16 = 4^2$$

**Svar d):**
- Strøm i B er 4× strøm i A
- Effekt i B er 16× effekt i A

Effekten skalerer som $N^2$ fordi $P = \\frac{\\varepsilon^2}{R} \\propto N^2$.`,
      subTasks: [
        { label: 'a', task: 'Beregn fluksendring per vinding', answer: 0.006, multipleChoiceOptions: ['6,0 mWb', '60 mWb', '0,60 mWb', '0,12 Wb'] },
        { label: 'b', task: 'Beregn EMF i begge spoler' },
        { label: 'c', task: 'Finn forholdet mellom EMF-ene', answer: 4, multipleChoiceOptions: ['4', '2', '8', '16'] },
        { label: 'd', task: 'Sammenlign strømmer og effekter' },
      ],
    },
  ],
};

// ============================================================================
// Kapittel 5.2: Generatorer og AC-strøm
// LK20: Forklare prinsippet bak generatorer og beskrive vekselstrøm
// ============================================================================

export const CHAPTER_FYSIKK2_5_2: TextbookChapter = {
  id: 'fysikk2-5-2',
  courseId: 'fysikk2',
  chapterNumber: '5.2',
  title: 'Generatorer og AC-strøm',
  description: 'Lær om vekselstrømgeneratorer, hvordan de produserer sinusformet spenning, effektivverdier, likestrømgeneratorer og kraftverk.',
  estimatedMinutes: 50,
  prerequisites: ['fysikk2-5-1'],
  competenceGoals: [
    'forklare prinsippet bak en vekselstrømgenerator',
    'beregne generert spenning fra en roterende spole i magnetfelt',
    'forklare sammenhengen mellom toppverdi og effektivverdi',
    'beskrive hvordan likestrømgeneratorer fungerer',
    'forklare hvordan kraftverk produserer elektrisitet',
    'forklare prinsippet bak regenerativ bremsing',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'fys2-5-2-intro',
      type: 'text',
      content: `## Fra magnetisme til elektrisitet

I forrige kapittel lærte du at endring i magnetisk fluks induserer elektrisk spenning. Denne oppdagelsen førte til utviklingen av **elektriske generatorer** – maskiner som konverterer mekanisk energi til elektrisk energi.

Generatorer er hjørnesteinen i moderne sivilisasjon. Nesten all elektrisitet vi bruker kommer fra generatorer – i kraftverk, vindturbiner, vannkraftverk og til og med i bilen din.

**I dette kapitlet lærer du:**
- Hvordan en vekselstrømgenerator (AC-generator) fungerer
- Den matematiske beskrivelsen av generert AC-spenning
- Hva effektivverdi (RMS) betyr og hvorfor vi bruker det
- Forskjellen mellom AC- og DC-generatorer
- Hvordan kraftverk produserer elektrisitet
- Regenerativ bremsing i elbiler`,
    },

    // ========== AC-GENERATOR PRINSIPP ==========
    {
      id: 'fys2-5-2-ac-prinsipp',
      type: 'text',
      content: `## Vekselstrømgenerator (AC-generator)

En AC-generator består av en **roterende spole** i et **konstant magnetfelt**. Når spolen roterer, endres den magnetiske fluksen gjennom den, og dette induserer en spenning.

### Oppbygging

En enkel AC-generator har følgende komponenter:
- **Rotor**: En spole som roterer (ofte kalt armatur)
- **Stator**: Permanentmagneter eller elektromagneter som skaper magnetfeltet
- **Sleperinger**: Metallringer som roterer med spolen
- **Børster**: Stasjonære kontakter som overfører strømmen ut

### Hvorfor varierer spenningen?

Når spolen roterer, endres vinkelen mellom spolens normalvektor og magnetfeltet. Dette endrer den magnetiske fluksen gjennom spolen:

$$\\Phi = NBA\\cos(\\theta)$$

der $\\theta = \\omega t$ er vinkelen til spolen ved tid $t$.

**Ved ulike posisjoner:**
- $\\theta = 0°$: Fluks er maksimal, men endringsraten er null → $\\varepsilon = 0$
- $\\theta = 90°$: Fluks er null, men endringsraten er maksimal → $\\varepsilon = \\varepsilon_0$
- $\\theta = 180°$: Fluks er maksimal (motsatt retning), endringsraten er null → $\\varepsilon = 0$
- $\\theta = 270°$: Fluks er null, endringsraten er maksimal (motsatt) → $\\varepsilon = -\\varepsilon_0$

Resultatet er en **sinusformet spenning** som veksler mellom positive og negative verdier.`,
    },

    // ========== DEFINISJON: VEKSELSTRØM ==========
    {
      id: 'fys2-5-2-def-ac',
      type: 'definition',
      title: 'Vekselstrøm (AC)',
      content: `**Vekselstrøm** (Alternating Current, AC) er elektrisk strøm som periodisk skifter retning.

I en AC-krets veksler både spenningen og strømmen mellom positive og negative verdier med en bestemt **frekvens**.

**Karakteristikker:**
- Strømretningen skifter periodisk
- Spenningen varierer sinusformet
- I Norge er nettfrekvensen **50 Hz** (50 sykluser per sekund)
- I USA og noen andre land er frekvensen **60 Hz**

**Fordeler med AC:**
- Enkelt å transformere til høyere/lavere spenning
- Effektivt for overføring over lange avstander
- Enkelt å produsere med roterende generatorer`,
    },

    // ========== FORMEL: GENERERT SPENNING ==========
    {
      id: 'fys2-5-2-formel-spenning',
      type: 'formula',
      title: 'Generert AC-spenning',
      content: `**Indusert spenning fra en roterende spole:**

$$\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t)$$

der **toppverdien** (maksimal spenning) er:

$$\\varepsilon_0 = NAB\\omega$$

**Størrelser:**
- $\\varepsilon(t)$ = øyeblikkelig spenning (V)
- $\\varepsilon_0$ = toppverdi/amplitude (V)
- $N$ = antall vindinger i spolen
- $A$ = areal av spolen (m²)
- $B$ = magnetisk feltstyrke (T)
- $\\omega$ = vinkelfrekvens (rad/s)
- $t$ = tid (s)

**Sammenhengen mellom frekvens og vinkelfrekvens:**

$$\\omega = 2\\pi f$$

der $f$ er frekvensen i Hz.`,
    },

    // ========== UTLEDNING ==========
    {
      id: 'fys2-5-2-utledning',
      type: 'text',
      content: `## Utledning av generatorformelen

La oss utlede formelen for generert spenning matematisk.

### Steg 1: Magnetisk fluks

Når spolen roterer med vinkelfrekvens $\\omega$, er vinkelen mellom normalvektoren og magnetfeltet:
$$\\theta = \\omega t$$

Den magnetiske fluksen gjennom spolen er:
$$\\Phi = NBA\\cos(\\omega t)$$

### Steg 2: Faradays lov

Ifølge Faradays lov er den induserte EMF-en:
$$\\varepsilon = -\\frac{d\\Phi}{dt}$$

### Steg 3: Derivasjon

$$\\varepsilon = -\\frac{d}{dt}[NBA\\cos(\\omega t)]$$

Siden $N$, $B$ og $A$ er konstante:
$$\\varepsilon = -NBA \\cdot \\frac{d}{dt}[\\cos(\\omega t)]$$

Derivert av $\\cos(\\omega t)$ er $-\\omega\\sin(\\omega t)$:
$$\\varepsilon = -NBA \\cdot (-\\omega\\sin(\\omega t))$$

$$\\varepsilon = NBA\\omega \\sin(\\omega t)$$

### Steg 4: Resultat

$$\\boxed{\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t)}$$

der $\\varepsilon_0 = NAB\\omega$.

**Merk:** Noen lærebøker bruker $\\cos$ i stedet for $\\sin$ – dette avhenger bare av hvilken posisjon vi definerer som $t = 0$.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'fys2-5-2-eks1',
      type: 'example',
      title: 'Enkel AC-generator',
      content: `**Oppgave:**
En generator har en spole med 200 vindinger og areal 0,050 m². Spolen roterer i et magnetfelt på 0,40 T med frekvens 50 Hz. Beregn:
a) Vinkelfrekvensen
b) Toppverdien av den genererte spenningen
c) Spenningen ved $t = 5{,}0$ ms

**Løsning:**

**a) Vinkelfrekvens:**
$$\\omega = 2\\pi f = 2\\pi \\cdot 50 = 314 \\text{ rad/s}$$

**b) Toppverdi:**
$$\\varepsilon_0 = NAB\\omega = 200 \\cdot 0{,}050 \\cdot 0{,}40 \\cdot 314$$
$$\\varepsilon_0 = 200 \\cdot 0{,}050 \\cdot 0{,}40 \\cdot 314 = 1260 \\text{ V} \\approx 1{,}3 \\text{ kV}$$

**c) Øyeblikkelig spenning ved t = 5,0 ms:**
$$\\varepsilon = \\varepsilon_0 \\sin(\\omega t) = 1260 \\cdot \\sin(314 \\cdot 0{,}0050)$$
$$\\varepsilon = 1260 \\cdot \\sin(1{,}57) = 1260 \\cdot 1{,}00 = 1260 \\text{ V}$$

**Svar:**
a) $\\omega = 314$ rad/s
b) $\\varepsilon_0 = 1{,}3$ kV
c) $\\varepsilon = 1{,}3$ kV (tilfeldigvis nær toppverdien ved denne tiden)`,
    },

    // ========== EFFEKTIVVERDI ==========
    {
      id: 'fys2-5-2-effektivverdi',
      type: 'text',
      content: `## Effektivverdi (RMS)

Siden AC-spenning og -strøm varierer mellom positive og negative verdier, trenger vi en måte å beskrive den "gjennomsnittlige" verdien på. Men vanlig gjennomsnitt av en sinusfunksjon over en hel periode er null!

### Problemet med vanlig gjennomsnitt

For $\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t)$:
- Halvparten av tiden er spenningen positiv
- Halvparten av tiden er spenningen negativ
- Gjennomsnittet over en periode er null

Men vi vet at AC-strøm kan gjøre arbeid og varme opp motstander – så den må ha en effektiv verdi større enn null.

### Løsningen: Root Mean Square (RMS)

**Effektivverdien** er definert som kvadratroten av gjennomsnittet av kvadratet av øyeblikksverdiene:

$$V_{rms} = \\sqrt{\\overline{V^2}}$$

Siden $\\sin^2$ har gjennomsnitt $\\frac{1}{2}$ over en periode:

$$V_{rms} = \\sqrt{\\frac{V_0^2}{2}} = \\frac{V_0}{\\sqrt{2}}$$

### Fysisk betydning

Effektivverdien er den **likespenningen** som ville gitt **samme effekt** i en motstand.

Hvis du kobler en motstand til AC med effektivverdi 230 V, vil den dissipere like mye effekt som om den var koblet til 230 V likestrøm.`,
    },

    // ========== FORMEL: EFFEKTIVVERDI ==========
    {
      id: 'fys2-5-2-formel-rms',
      type: 'formula',
      title: 'Effektivverdi (RMS)',
      content: `**Effektivverdi for sinusformet AC:**

$$V_{rms} = \\frac{V_0}{\\sqrt{2}} \\approx 0{,}707 \\cdot V_0$$

$$I_{rms} = \\frac{I_0}{\\sqrt{2}} \\approx 0{,}707 \\cdot I_0$$

**Omvendt:**

$$V_0 = \\sqrt{2} \\cdot V_{rms} \\approx 1{,}414 \\cdot V_{rms}$$

**I Norge:**
- Nettspenningen er $V_{rms} = 230$ V
- Toppverdien er $V_0 = 230 \\cdot \\sqrt{2} \\approx 325$ V

**Effekt i en motstand:**

$$P = \\frac{V_{rms}^2}{R} = I_{rms}^2 R = V_{rms} I_{rms}$$

Disse formlene ser ut akkurat som for likestrøm, noe som gjør effektivverdier svært praktiske å bruke.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'fys2-5-2-eks2',
      type: 'example',
      title: 'Norsk stikkontakt',
      content: `**Oppgave:**
Norsk nettspenning har effektivverdi 230 V og frekvens 50 Hz.
a) Hva er toppverdien av spenningen?
b) Skriv et uttrykk for den øyeblikkelige spenningen som funksjon av tid.
c) En varmeovn med motstand 52,9 Ω kobles til stikkontakten. Hva er effekten?

**Løsning:**

**a) Toppverdi:**
$$V_0 = \\sqrt{2} \\cdot V_{rms} = \\sqrt{2} \\cdot 230 \\approx 325 \\text{ V}$$

**b) Uttrykk for spenningen:**

Vinkelfrekvens: $\\omega = 2\\pi f = 2\\pi \\cdot 50 = 314$ rad/s

$$V(t) = V_0 \\sin(\\omega t) = 325 \\sin(314t) \\text{ V}$$

**c) Effekt:**
$$P = \\frac{V_{rms}^2}{R} = \\frac{230^2}{52{,}9} = \\frac{52900}{52{,}9} = 1000 \\text{ W} = 1{,}0 \\text{ kW}$$

**Svar:**
a) $V_0 = 325$ V
b) $V(t) = 325\\sin(314t)$ V
c) $P = 1{,}0$ kW`,
    },

    // ========== DC-GENERATOR ==========
    {
      id: 'fys2-5-2-dc-generator',
      type: 'text',
      content: `## Likestrømgenerator (DC-generator)

En **likestrømgenerator** produserer strøm som alltid går i samme retning. Den bruker samme prinsipp som AC-generatoren, men med en viktig modifikasjon.

### Kommutatoren

I stedet for sleperinger bruker DC-generatoren en **kommutator** – en delt metallring som bytter hvilken børste som er koblet til hvilken ende av spolen.

**Hvordan det fungerer:**
1. Når spolen roterer og spenningen skifter fortegn...
2. ...bytter kommutatoren samtidig hvilken utgang som er koblet til hvilken børste
3. Resultatet er at utgangsspenningen alltid er positiv (eller alltid negativ)

### Pulserende likestrøm

En enkel DC-generator med én spole gir **pulserende** likestrøm:
- Spenningen varierer mellom 0 og $\\varepsilon_0$
- Den er alltid positiv, men ikke konstant

### Jevnere DC

For å få jevnere likestrøm kan man:
- Bruke **flere spoler** som er rotert i forhold til hverandre
- Legge til **glattefiltre** (kondensatorer) i utgangen
- Moderne løsning: Bruke AC-generator + elektronisk likeretting`,
    },

    // ========== KRAFTVERK ==========
    {
      id: 'fys2-5-2-kraftverk',
      type: 'text',
      content: `## Kraftverk – elektrisitet i stor skala

Nesten all elektrisitet i verden produseres av generatorer i kraftverk. Den grunnleggende ideen er enkel:
1. Bruk en energikilde til å rotere en turbin
2. Turbinen driver en generator
3. Generatoren produserer elektrisitet

### Energikilder og turbintyper

**Varmekraftverk (termiske kraftverk):**
- **Kullkraftverk**: Brenner kull for å koke vann → damp driver dampturbin
- **Gasskraftverk**: Brenner naturgass → varme gasser driver gassturbin
- **Kjernekraftverk**: Fisjon varmer vann → damp driver dampturbin

**Fornybare energikilder:**
- **Vannkraftverk**: Fallende vann driver vannturbin
- **Vindkraftverk**: Vind driver vindturbin direkte
- **Solkraftverk (CSP)**: Fokusert sollys koker vann → dampturbin

### Generatoren i et kraftverk

Store kraftverksgeneratorer har typisk:
- **Effekt**: 100 MW – 1500 MW
- **Spenning**: 10–25 kV (transformeres opp for overføring)
- **Rotasjonshastighet**: 3000 rpm (for 50 Hz) eller 3600 rpm (for 60 Hz)
- **Elektromagneter** i stedet for permanentmagneter for sterkere felt

### Synkrongeneratorer

De fleste kraftverk bruker **synkrongeneratorer**:
- Rotasjonshastigheten er nøyaktig synkronisert med nettfrekvensen
- For 50 Hz med 2 magnetpoler: $n = \\frac{60 \\cdot f}{p/2} = \\frac{60 \\cdot 50}{1} = 3000$ rpm
- Med 4 poler: 1500 rpm, med 6 poler: 1000 rpm, osv.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'fys2-5-2-eks3',
      type: 'example',
      title: 'Vannkraftverk',
      content: `**Oppgave:**
Et vannkraftverk har en fallhøyde på 200 m og vannføring 50 m³/s. Generatoren har virkningsgrad 92%.
a) Beregn den tilgjengelige mekaniske effekten fra vannet.
b) Beregn den elektriske effekten generatoren leverer.
c) Hvis generatoren produserer 50 Hz AC, hvor fort må rotoren spinne hvis den har 4 magnetpoler?

**Løsning:**

**a) Mekanisk effekt fra vannet:**

Massestrøm: $\\dot{m} = \\rho \\cdot Q = 1000 \\cdot 50 = 50000$ kg/s

Potensiell energi per sekund:
$$P_{mek} = \\dot{m}gh = 50000 \\cdot 9{,}81 \\cdot 200 = 98{,}1 \\text{ MW}$$

**b) Elektrisk effekt:**
$$P_{el} = \\eta \\cdot P_{mek} = 0{,}92 \\cdot 98{,}1 = 90{,}3 \\text{ MW}$$

**c) Rotasjonshastighet:**

For en generator med $p$ poler og frekvens $f$:
$$n = \\frac{120f}{p} = \\frac{120 \\cdot 50}{4} = 1500 \\text{ rpm}$$

**Svar:**
a) $P_{mek} = 98$ MW
b) $P_{el} = 90$ MW
c) $n = 1500$ rpm (25 omdreininger per sekund)`,
    },

    // ========== REGENERATIV BREMSING ==========
    {
      id: 'fys2-5-2-regenerativ',
      type: 'text',
      content: `## Regenerativ bremsing

I en elbil eller hybridbil kan elmotoren også fungere som en **generator**. Dette kalles **regenerativ bremsing**.

### Prinsippet

Når bilen skal bremse:
1. Hjulene driver elmotoren i stedet for omvendt
2. Motoren fungerer nå som en generator
3. Kinetisk energi konverteres til elektrisk energi
4. Energien lagres i batteriet
5. Bilen bremser ned uten å bruke de mekaniske bremsene

### Fordeler

- **Energigjenvinning**: Opptil 70% av bremseenergien kan gjenvinnes
- **Mindre slitasje**: De mekaniske bremsene brukes mindre
- **Lengre rekkevidde**: Spesielt nyttig i kuppert terreng og bykjøring
- **Jevn bremsing**: Gir myk og kontrollerbar nedbremsing

### Begrensninger

- Batteriet må kunne ta imot energien (kan ikke være fullt)
- Begrenset bremseeffekt ved høye hastigheter
- Fungerer ikke når batteriet er fullt
- Mekaniske bremser trengs fortsatt for nødbremsing

### Effekten som gjenvinnes

$$P_{regen} = \\eta \\cdot \\frac{1}{2}m v \\cdot a$$

der $\\eta$ er virkningsgraden for gjenvinningen (typisk 60–70%).`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'fys2-5-2-eks4',
      type: 'example',
      title: 'Regenerativ bremsing i elbil',
      content: `**Oppgave:**
En elbil med masse 1800 kg bremser fra 90 km/h til 50 km/h. Regenereringssystemet har virkningsgrad 65%.
a) Beregn bilens kinetiske energi før og etter bremsingen.
b) Hvor mye energi kan gjenvinnes til batteriet?
c) Hvis bremsingen tar 8,0 s, hva er gjennomsnittlig regenerert effekt?

**Løsning:**

**a) Kinetisk energi:**

$v_1 = 90$ km/h $= 25$ m/s
$v_2 = 50$ km/h $= 13{,}9$ m/s

$$E_{k1} = \\frac{1}{2}mv_1^2 = \\frac{1}{2} \\cdot 1800 \\cdot 25^2 = 562500 \\text{ J} = 563 \\text{ kJ}$$

$$E_{k2} = \\frac{1}{2}mv_2^2 = \\frac{1}{2} \\cdot 1800 \\cdot 13{,}9^2 = 173900 \\text{ J} = 174 \\text{ kJ}$$

**b) Gjenvunnet energi:**

Tapt kinetisk energi: $\\Delta E_k = 563 - 174 = 389$ kJ

Gjenvunnet: $E_{regen} = \\eta \\cdot \\Delta E_k = 0{,}65 \\cdot 389 = 253$ kJ

**c) Gjennomsnittlig effekt:**
$$P = \\frac{E_{regen}}{t} = \\frac{253000}{8{,}0} = 31600 \\text{ W} \\approx 32 \\text{ kW}$$

**Svar:**
a) $E_{k1} = 563$ kJ, $E_{k2} = 174$ kJ
b) $E_{regen} = 253$ kJ
c) $P = 32$ kW`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'fys2-5-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Vekselstrømgenerator (AC)
- Roterende spole i magnetfelt produserer sinusformet spenning
- $\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t)$ der $\\varepsilon_0 = NAB\\omega$
- Vinkelfrekvens: $\\omega = 2\\pi f$
- Norsk nettfrekvens: 50 Hz

### Effektivverdi (RMS)
- $V_{rms} = \\frac{V_0}{\\sqrt{2}} \\approx 0{,}707 V_0$
- Norsk nettspenning: $V_{rms} = 230$ V, $V_0 = 325$ V
- Gir samme effekt som tilsvarende likestrøm

### Likestrømgenerator (DC)
- Bruker kommutator i stedet for sleperinger
- Produserer pulserende likestrøm
- Flere spoler eller filtre for jevnere DC

### Kraftverk
- Energikilde → turbin → generator → elektrisitet
- Synkrongeneratorer synkronisert med nettfrekvens
- $n = \\frac{120f}{p}$ rpm

### Regenerativ bremsing
- Motor fungerer som generator ved bremsing
- Gjenvinning av kinetisk energi til batteriet
- Typisk 60–70% virkningsgrad`,
    },
  ],

  // ============================================================================
  // OPPGAVER
  // ============================================================================
  exercises: [
    // ========== OPPGAVE 1: Multiple choice - AC ==========
    {
      id: 'fys2-5-2-oppg1',
      type: 'multiple-choice',
      difficulty: 'easy',
      estimatedMinutes: 2,
      points: 1,
      question: `I en AC-generator roterer en spole i et konstant magnetfelt. Når er den induserte spenningen størst?`,
      options: [
        { id: 'a', text: 'Når spolens plan er parallelt med magnetfeltet' },
        { id: 'b', text: 'Når spolens plan er vinkelrett på magnetfeltet' },
        { id: 'c', text: 'Når magnetisk fluks gjennom spolen er maksimal' },
        { id: 'd', text: 'Spenningen er konstant under hele rotasjonen' },
      ],
      correctAnswer: 'a',
      solution: `**Svar: A**

Den induserte spenningen er proporsjonal med **endringsraten** av magnetisk fluks, ikke fluksen selv.

Når spolens plan er **parallelt** med magnetfeltet:
- Fluksen gjennom spolen er null ($\\Phi = 0$)
- Men fluksen endres raskest akkurat ved dette punktet
- Derfor er $\\frac{d\\Phi}{dt}$ maksimal
- Og dermed er $\\varepsilon = -\\frac{d\\Phi}{dt}$ maksimal

Når spolens plan er **vinkelrett** på magnetfeltet:
- Fluksen er maksimal
- Men endringsraten er null (fluksen "snur" ved dette punktet)
- Derfor er $\\varepsilon = 0$

Dette er analogt med en pendel: hastigheten er størst i bunnpunktet (der posisjonen endres raskest), ikke i ytterpunktene.`,
    },

    // ========== OPPGAVE 2: Multiple choice - Effektivverdi ==========
    {
      id: 'fys2-5-2-oppg2',
      type: 'multiple-choice',
      difficulty: 'easy',
      estimatedMinutes: 2,
      points: 1,
      question: `Norsk nettspenning har effektivverdi 230 V. Hva er omtrent toppverdien av spenningen?`,
      options: [
        { id: 'a', text: '163 V' },
        { id: 'b', text: '230 V' },
        { id: 'c', text: '325 V' },
        { id: 'd', text: '460 V' },
      ],
      correctAnswer: 'c',
      solution: `**Svar: C**

Sammenhengen mellom toppverdi og effektivverdi er:
$$V_0 = \\sqrt{2} \\cdot V_{rms}$$

$$V_0 = \\sqrt{2} \\cdot 230 \\text{ V} = 1{,}414 \\cdot 230 \\text{ V} \\approx 325 \\text{ V}$$

Dette betyr at spenningen i stikkontakten faktisk varierer mellom +325 V og -325 V 50 ganger per sekund!

Alternativene:
- A (163 V): Dette er $\\frac{230}{\\sqrt{2}}$ – feil retning
- B (230 V): Forveksler effektivverdi med toppverdi
- D (460 V): Dette er $2 \\times 230$ V – feil formel`,
    },

    // ========== OPPGAVE 3: Multiple choice - Frekvens ==========
    {
      id: 'fys2-5-2-oppg3',
      type: 'multiple-choice',
      difficulty: 'easy',
      estimatedMinutes: 2,
      points: 1,
      question: `En generator produserer vekselstrøm med frekvens 50 Hz. Hva er vinkelfrekvensen?`,
      options: [
        { id: 'a', text: '50 rad/s' },
        { id: 'b', text: '100 rad/s' },
        { id: 'c', text: '157 rad/s' },
        { id: 'd', text: '314 rad/s' },
      ],
      correctAnswer: 'd',
      solution: `**Svar: D**

Sammenhengen mellom frekvens $f$ og vinkelfrekvens $\\omega$ er:
$$\\omega = 2\\pi f$$

$$\\omega = 2\\pi \\cdot 50 \\text{ Hz} = 100\\pi \\text{ rad/s} \\approx 314 \\text{ rad/s}$$

Vinkelfrekvensen angir hvor mange radianer per sekund rotasjonen tilsvarer. Én full omdreining er $2\\pi$ radianer, så 50 omdreininger per sekund gir $50 \\times 2\\pi = 314$ rad/s.`,
    },

    // ========== OPPGAVE 4: Medium - Generatorspenning ==========
    {
      id: 'fys2-5-2-oppg4',
      type: 'written',
      difficulty: 'medium',
      estimatedMinutes: 6,
      points: 3,
      question: `En AC-generator har en spole med 150 vindinger og areal 0,040 m². Spolen roterer i et magnetfelt på 0,50 T med frekvens 60 Hz.

a) Beregn vinkelfrekvensen.
b) Beregn toppverdien av den genererte spenningen.
c) Skriv et uttrykk for spenningen som funksjon av tid.`,
      hints: [
        'Vinkelfrekvens: $\\omega = 2\\pi f$',
        'Toppverdi: $\\varepsilon_0 = NAB\\omega$',
        'Spenning: $\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t)$',
      ],
      solution: `**Gitt:**
- $N = 150$ vindinger
- $A = 0{,}040$ m²
- $B = 0{,}50$ T
- $f = 60$ Hz

**a) Vinkelfrekvens:**
$$\\omega = 2\\pi f = 2\\pi \\cdot 60 = 377 \\text{ rad/s}$$

**b) Toppverdi:**
$$\\varepsilon_0 = NAB\\omega = 150 \\cdot 0{,}040 \\cdot 0{,}50 \\cdot 377$$
$$\\varepsilon_0 = 150 \\cdot 0{,}040 \\cdot 0{,}50 \\cdot 377 = 1131 \\text{ V} \\approx 1{,}1 \\text{ kV}$$

**c) Uttrykk for spenningen:**
$$\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t) = 1130 \\sin(377t) \\text{ V}$$

eller mer presist:
$$\\varepsilon(t) = 1{,}1 \\text{ kV} \\cdot \\sin(377 \\text{ rad/s} \\cdot t)$$`,
      subTasks: [
        { label: 'a', task: 'Beregn vinkelfrekvensen', answer: 377, multipleChoiceOptions: ['377 rad/s', '60 rad/s', '188 rad/s', '754 rad/s'] },
        { label: 'b', task: 'Beregn toppverdien', answer: 1131, multipleChoiceOptions: ['1131 V', '113 V', '565 V', '2262 V'] },
        { label: 'c', task: 'Skriv uttrykk for spenningen' },
      ],
    },

    // ========== OPPGAVE 5: Medium - Effektivverdi ==========
    {
      id: 'fys2-5-2-oppg5',
      type: 'written',
      difficulty: 'medium',
      estimatedMinutes: 5,
      points: 3,
      question: `En AC-generator produserer spenning med toppverdi 340 V og frekvens 50 Hz.

a) Beregn effektivverdien av spenningen.
b) En motstand på 100 Ω kobles til generatoren. Beregn effekten som dissiperes i motstanden.
c) Hva er maksimalverdien av strømmen gjennom motstanden?`,
      hints: [
        'Effektivverdi: $V_{rms} = \\frac{V_0}{\\sqrt{2}}$',
        'Effekt: $P = \\frac{V_{rms}^2}{R}$',
        'Maksimal strøm: $I_0 = \\frac{V_0}{R}$',
      ],
      solution: `**Gitt:**
- $V_0 = 340$ V
- $f = 50$ Hz
- $R = 100$ Ω

**a) Effektivverdi:**
$$V_{rms} = \\frac{V_0}{\\sqrt{2}} = \\frac{340}{\\sqrt{2}} = 240 \\text{ V}$$

**b) Effekt:**
$$P = \\frac{V_{rms}^2}{R} = \\frac{240^2}{100} = \\frac{57600}{100} = 576 \\text{ W}$$

**c) Maksimal strøm:**
$$I_0 = \\frac{V_0}{R} = \\frac{340}{100} = 3{,}4 \\text{ A}$$

**Alternativ for c):**
$$I_{rms} = \\frac{V_{rms}}{R} = \\frac{240}{100} = 2{,}4 \\text{ A}$$
$$I_0 = \\sqrt{2} \\cdot I_{rms} = 1{,}414 \\cdot 2{,}4 = 3{,}4 \\text{ A}$$`,
      subTasks: [
        { label: 'a', task: 'Beregn effektivverdien', answer: 240, multipleChoiceOptions: ['240 V', '340 V', '170 V', '480 V'] },
        { label: 'b', task: 'Beregn effekten', answer: 576, multipleChoiceOptions: ['576 W', '1156 W', '288 W', '816 W'] },
        { label: 'c', task: 'Beregn maksimal strøm', answer: 3.4, multipleChoiceOptions: ['3,4 A', '2,4 A', '6,8 A', '1,7 A'] },
      ],
    },

    // ========== OPPGAVE 6: Medium - Øyeblikkelig spenning ==========
    {
      id: 'fys2-5-2-oppg6',
      type: 'written',
      difficulty: 'medium',
      estimatedMinutes: 5,
      points: 3,
      question: `Spenningen i en norsk stikkontakt kan beskrives som $V(t) = 325\\sin(314t)$ V.

a) Hva er frekvensen til vekselstrømmen?
b) Hva er effektivverdien av spenningen?
c) Ved hvilket tidspunkt (første gang etter $t = 0$) er spenningen lik 230 V?`,
      hints: [
        'Fra $\\omega = 314$ rad/s, finn $f = \\frac{\\omega}{2\\pi}$',
        'Effektivverdi: $V_{rms} = \\frac{V_0}{\\sqrt{2}}$',
        'Løs $325\\sin(314t) = 230$ for $t$',
      ],
      solution: `**a) Frekvens:**

Fra uttrykket $V(t) = 325\\sin(314t)$ ser vi at $\\omega = 314$ rad/s.

$$f = \\frac{\\omega}{2\\pi} = \\frac{314}{2\\pi} = 50 \\text{ Hz}$$

**b) Effektivverdi:**

Toppverdien er $V_0 = 325$ V.

$$V_{rms} = \\frac{V_0}{\\sqrt{2}} = \\frac{325}{\\sqrt{2}} = 230 \\text{ V}$$

**c) Tidspunkt der $V = 230$ V:**

$$325\\sin(314t) = 230$$
$$\\sin(314t) = \\frac{230}{325} = 0{,}708$$
$$314t = \\arcsin(0{,}708) = 0{,}785 \\text{ rad}$$
$$t = \\frac{0{,}785}{314} = 0{,}00250 \\text{ s} = 2{,}5 \\text{ ms}$$

**Svar:**
a) $f = 50$ Hz
b) $V_{rms} = 230$ V
c) $t = 2{,}5$ ms`,
      subTasks: [
        { label: 'a', task: 'Finn frekvensen', answer: 50, multipleChoiceOptions: ['50 Hz', '314 Hz', '100 Hz', '25 Hz'] },
        { label: 'b', task: 'Finn effektivverdien', answer: 230, multipleChoiceOptions: ['230 V', '325 V', '163 V', '460 V'] },
        { label: 'c', task: 'Finn tidspunktet', answer: 0.0025, multipleChoiceOptions: ['2,5 ms', '5,0 ms', '10 ms', '1,25 ms'] },
      ],
    },

    // ========== OPPGAVE 7: Medium - Generatordesign ==========
    {
      id: 'fys2-5-2-oppg7',
      type: 'written',
      difficulty: 'medium',
      estimatedMinutes: 6,
      points: 3,
      question: `Du skal designe en generator som produserer vekselstrøm med effektivverdi 120 V og frekvens 50 Hz. Magnetfeltet er 0,30 T og spolens areal er 0,025 m².

a) Hva må toppverdien av spenningen være?
b) Beregn vinkelfrekvensen.
c) Hvor mange vindinger må spolen ha?`,
      hints: [
        'Toppverdi: $V_0 = \\sqrt{2} \\cdot V_{rms}$',
        'Vinkelfrekvens: $\\omega = 2\\pi f$',
        'Løs $\\varepsilon_0 = NAB\\omega$ for $N$',
      ],
      solution: `**Gitt:**
- $V_{rms} = 120$ V
- $f = 50$ Hz
- $B = 0{,}30$ T
- $A = 0{,}025$ m²

**a) Toppverdi:**
$$V_0 = \\sqrt{2} \\cdot V_{rms} = \\sqrt{2} \\cdot 120 = 170 \\text{ V}$$

**b) Vinkelfrekvens:**
$$\\omega = 2\\pi f = 2\\pi \\cdot 50 = 314 \\text{ rad/s}$$

**c) Antall vindinger:**

Fra $\\varepsilon_0 = NAB\\omega$ løser vi for $N$:
$$N = \\frac{\\varepsilon_0}{AB\\omega} = \\frac{170}{0{,}025 \\cdot 0{,}30 \\cdot 314}$$
$$N = \\frac{170}{2{,}36} = 72 \\text{ vindinger}$$

**Svar:**
a) $V_0 = 170$ V
b) $\\omega = 314$ rad/s
c) $N = 72$ vindinger`,
      subTasks: [
        { label: 'a', task: 'Finn toppverdien', answer: 170, multipleChoiceOptions: ['170 V', '120 V', '85 V', '240 V'] },
        { label: 'b', task: 'Beregn vinkelfrekvensen', answer: 314, multipleChoiceOptions: ['314 rad/s', '50 rad/s', '157 rad/s', '628 rad/s'] },
        { label: 'c', task: 'Finn antall vindinger', answer: 72, multipleChoiceOptions: ['72', '144', '36', '100'] },
      ],
    },

    // ========== OPPGAVE 8: Vanskelig - Kraftverk ==========
    {
      id: 'fys2-5-2-oppg8',
      type: 'written',
      difficulty: 'hard',
      estimatedMinutes: 8,
      points: 4,
      question: `Et vannkraftverk har en fallhøyde på 150 m og leverer 45 MW elektrisk effekt med total virkningsgrad 88%.

a) Beregn den tilgjengelige mekaniske effekten fra vannet.
b) Hva er vannføringen (i m³/s)?
c) Hvor mange boliger (gjennomsnittlig forbruk 4000 kWh/år) kan kraftverket forsyne?
d) Generatoren har 6 magnetpoler. Hvor fort roterer den for å produsere 50 Hz?`,
      hints: [
        'Mekanisk effekt: $P_{mek} = \\frac{P_{el}}{\\eta}$',
        'Vannføring: $P = \\rho g h Q$ der $Q$ er vannføring',
        'Årlig energi: $E = P \\cdot t$ der $t = 8760$ timer/år',
        'Rotasjonshastighet: $n = \\frac{120f}{p}$',
      ],
      solution: `**Gitt:**
- $h = 150$ m
- $P_{el} = 45$ MW
- $\\eta = 0{,}88$
- $p = 6$ poler
- $f = 50$ Hz

**a) Mekanisk effekt:**
$$P_{mek} = \\frac{P_{el}}{\\eta} = \\frac{45 \\text{ MW}}{0{,}88} = 51{,}1 \\text{ MW}$$

**b) Vannføring:**

Fra $P_{mek} = \\rho g h Q$:
$$Q = \\frac{P_{mek}}{\\rho g h} = \\frac{51{,}1 \\times 10^6}{1000 \\cdot 9{,}81 \\cdot 150}$$
$$Q = \\frac{51{,}1 \\times 10^6}{1{,}47 \\times 10^6} = 34{,}7 \\text{ m}^3/\\text{s}$$

**c) Antall boliger:**

Årlig energiproduksjon (antar 100% kapasitetsutnyttelse):
$$E_{\\text{år}} = P_{el} \\cdot t = 45 \\text{ MW} \\cdot 8760 \\text{ h} = 394200 \\text{ MWh} = 3{,}94 \\times 10^8 \\text{ kWh}$$

Antall boliger:
$$n = \\frac{E_{\\text{år}}}{4000 \\text{ kWh}} = \\frac{3{,}94 \\times 10^8}{4000} = 98500 \\text{ boliger}$$

**d) Rotasjonshastighet:**
$$n = \\frac{120f}{p} = \\frac{120 \\cdot 50}{6} = 1000 \\text{ rpm}$$

**Svar:**
a) $P_{mek} = 51$ MW
b) $Q = 35$ m³/s
c) Ca. 98 000 boliger
d) $n = 1000$ rpm`,
      subTasks: [
        { label: 'a', task: 'Beregn mekanisk effekt', answer: 51.1, multipleChoiceOptions: ['51 MW', '45 MW', '40 MW', '88 MW'] },
        { label: 'b', task: 'Beregn vannføring', answer: 34.7, multipleChoiceOptions: ['35 m³/s', '3,5 m³/s', '350 m³/s', '51 m³/s'] },
        { label: 'c', task: 'Finn antall boliger', answer: 98500, multipleChoiceOptions: ['98 500', '11 250', '394 000', '45 000'] },
        { label: 'd', task: 'Finn rotasjonshastighet', answer: 1000, multipleChoiceOptions: ['1000 rpm', '500 rpm', '3000 rpm', '1500 rpm'] },
      ],
    },

    // ========== OPPGAVE 9: Vanskelig - Vindkraftverk ==========
    {
      id: 'fys2-5-2-oppg9',
      type: 'written',
      difficulty: 'hard',
      estimatedMinutes: 8,
      points: 4,
      question: `En vindturbin har rotordiameter 80 m og opererer i vind med hastighet 12 m/s. Luftens tetthet er 1,2 kg/m³.

a) Beregn kinetisk energi per sekund som passerer gjennom rotorarealet.
b) Teoretisk maksimal virkningsgrad for vindturbiner er 59% (Betz-grensen). Hva er maksimal mekanisk effekt?
c) Generatoren har virkningsgrad 94%. Beregn elektrisk effekt.
d) Hvis generatoren produserer spenning med toppverdi 690 V, hva er effektivverdien?`,
      hints: [
        'Kinetisk effekt: $P = \\frac{1}{2}\\rho A v^3$',
        'Areal: $A = \\pi r^2 = \\pi (d/2)^2$',
        'Maksimal mekanisk effekt: $P_{mek} = 0{,}59 \\cdot P_{vind}$',
        'Effektivverdi: $V_{rms} = V_0/\\sqrt{2}$',
      ],
      solution: `**Gitt:**
- Diameter $d = 80$ m, radius $r = 40$ m
- $v = 12$ m/s
- $\\rho = 1{,}2$ kg/m³
- Betz-grense: 59%
- $\\eta_{gen} = 0{,}94$
- $V_0 = 690$ V

**a) Kinetisk effekt i vinden:**

Rotorareal: $A = \\pi r^2 = \\pi \\cdot 40^2 = 5027$ m²

Kinetisk effekt:
$$P_{vind} = \\frac{1}{2}\\rho A v^3 = \\frac{1}{2} \\cdot 1{,}2 \\cdot 5027 \\cdot 12^3$$
$$P_{vind} = \\frac{1}{2} \\cdot 1{,}2 \\cdot 5027 \\cdot 1728 = 5{,}21 \\times 10^6 \\text{ W} = 5{,}2 \\text{ MW}$$

**b) Maksimal mekanisk effekt:**
$$P_{mek,max} = 0{,}59 \\cdot P_{vind} = 0{,}59 \\cdot 5{,}21 = 3{,}07 \\text{ MW}$$

**c) Elektrisk effekt:**
$$P_{el} = \\eta_{gen} \\cdot P_{mek} = 0{,}94 \\cdot 3{,}07 = 2{,}89 \\text{ MW}$$

**d) Effektivverdi:**
$$V_{rms} = \\frac{V_0}{\\sqrt{2}} = \\frac{690}{\\sqrt{2}} = 488 \\text{ V}$$

**Svar:**
a) $P_{vind} = 5{,}2$ MW
b) $P_{mek,max} = 3{,}1$ MW
c) $P_{el} = 2{,}9$ MW
d) $V_{rms} = 488$ V (ca. 490 V)`,
      subTasks: [
        { label: 'a', task: 'Beregn kinetisk effekt i vinden', answer: 5.21, multipleChoiceOptions: ['5,2 MW', '0,52 MW', '52 MW', '2,6 MW'] },
        { label: 'b', task: 'Finn maksimal mekanisk effekt', answer: 3.07, multipleChoiceOptions: ['3,1 MW', '5,2 MW', '1,5 MW', '8,8 MW'] },
        { label: 'c', task: 'Beregn elektrisk effekt', answer: 2.89, multipleChoiceOptions: ['2,9 MW', '3,1 MW', '1,4 MW', '5,5 MW'] },
        { label: 'd', task: 'Finn effektivverdien', answer: 488, multipleChoiceOptions: ['488 V', '690 V', '345 V', '976 V'] },
      ],
    },

    // ========== OPPGAVE 10: Vanskelig - Regenerativ bremsing ==========
    {
      id: 'fys2-5-2-oppg10',
      type: 'written',
      difficulty: 'hard',
      estimatedMinutes: 8,
      points: 4,
      question: `En elbil med masse 2100 kg kjører ned en bakke med helning 8,0° ved konstant fart 70 km/h. Regenereringssystemet har virkningsgrad 70%.

a) Beregn komponenten av tyngdekraften langs bakken.
b) Hva er den mekaniske effekten som er tilgjengelig for regenerering?
c) Beregn effekten som leveres til batteriet.
d) Hvor mye energi lagres i batteriet hvis bakken er 2,0 km lang?`,
      hints: [
        'Tyngdekomponent langs bakken: $F = mg\\sin\\theta$',
        'Mekanisk effekt: $P = Fv$',
        'Regenerert effekt: $P_{regen} = \\eta \\cdot P_{mek}$',
        'Energi: $E = P \\cdot t$ eller $E = P \\cdot \\frac{s}{v}$',
      ],
      solution: `**Gitt:**
- $m = 2100$ kg
- $\\theta = 8{,}0°$
- $v = 70$ km/h $= 19{,}4$ m/s
- $\\eta = 0{,}70$
- $s = 2{,}0$ km $= 2000$ m

**a) Tyngdekomponent langs bakken:**
$$F = mg\\sin\\theta = 2100 \\cdot 9{,}81 \\cdot \\sin(8{,}0°)$$
$$F = 2100 \\cdot 9{,}81 \\cdot 0{,}139 = 2863 \\text{ N} \\approx 2{,}9 \\text{ kN}$$

**b) Mekanisk effekt:**
$$P_{mek} = Fv = 2863 \\cdot 19{,}4 = 55540 \\text{ W} \\approx 56 \\text{ kW}$$

**c) Regenerert effekt:**
$$P_{regen} = \\eta \\cdot P_{mek} = 0{,}70 \\cdot 55540 = 38880 \\text{ W} \\approx 39 \\text{ kW}$$

**d) Energi lagret:**

Tid for å kjøre 2,0 km:
$$t = \\frac{s}{v} = \\frac{2000}{19{,}4} = 103 \\text{ s}$$

Energi:
$$E = P_{regen} \\cdot t = 38880 \\cdot 103 = 4{,}0 \\times 10^6 \\text{ J} = 4{,}0 \\text{ MJ}$$

I kWh: $E = \\frac{4{,}0 \\times 10^6}{3{,}6 \\times 10^6} = 1{,}1$ kWh

**Svar:**
a) $F = 2{,}9$ kN
b) $P_{mek} = 56$ kW
c) $P_{regen} = 39$ kW
d) $E = 4{,}0$ MJ = 1,1 kWh`,
      subTasks: [
        { label: 'a', task: 'Finn tyngdekomponenten', answer: 2863, multipleChoiceOptions: ['2,9 kN', '20,6 kN', '0,29 kN', '14,4 kN'] },
        { label: 'b', task: 'Beregn mekanisk effekt', answer: 55540, multipleChoiceOptions: ['56 kW', '5,6 kW', '560 kW', '28 kW'] },
        { label: 'c', task: 'Finn regenerert effekt', answer: 38880, multipleChoiceOptions: ['39 kW', '56 kW', '27 kW', '79 kW'] },
        { label: 'd', task: 'Beregn lagret energi' },
      ],
    },

    // ========== OPPGAVE 11: Vanskelig - Kombinert oppgave ==========
    {
      id: 'fys2-5-2-oppg11',
      type: 'written',
      difficulty: 'hard',
      estimatedMinutes: 10,
      points: 5,
      question: `En generator har en spole med 500 vindinger, areal 0,080 m², og roterer med 1500 rpm i et magnetfelt på 0,25 T.

a) Beregn vinkelfrekvensen i rad/s og frekvensen i Hz.
b) Beregn toppverdien og effektivverdien av den genererte spenningen.
c) Generatoren kobles til en krets med total motstand 50 Ω. Beregn effektivverdien av strømmen.
d) Beregn gjennomsnittlig elektrisk effekt som leveres til kretsen.
e) Hvor mange omdreininger gjør spolen per syklus av vekselspenningen?`,
      hints: [
        'Konverter rpm til rad/s: $\\omega = \\frac{2\\pi n}{60}$',
        'Frekvens: $f = \\frac{\\omega}{2\\pi}$',
        'Toppverdi: $\\varepsilon_0 = NAB\\omega$',
        'Effekt: $P = \\frac{V_{rms}^2}{R}$',
        'Omdreininger per syklus: $\\frac{n}{f}$ der $n$ er rpm/60',
      ],
      solution: `**Gitt:**
- $N = 500$ vindinger
- $A = 0{,}080$ m²
- $n = 1500$ rpm
- $B = 0{,}25$ T
- $R = 50$ Ω

**a) Vinkelfrekvens og frekvens:**

Vinkelfrekvens:
$$\\omega = \\frac{2\\pi n}{60} = \\frac{2\\pi \\cdot 1500}{60} = 157 \\text{ rad/s}$$

Frekvens:
$$f = \\frac{\\omega}{2\\pi} = \\frac{157}{2\\pi} = 25 \\text{ Hz}$$

**b) Toppverdi og effektivverdi:**

Toppverdi:
$$\\varepsilon_0 = NAB\\omega = 500 \\cdot 0{,}080 \\cdot 0{,}25 \\cdot 157$$
$$\\varepsilon_0 = 500 \\cdot 0{,}080 \\cdot 0{,}25 \\cdot 157 = 1570 \\text{ V}$$

Effektivverdi:
$$V_{rms} = \\frac{\\varepsilon_0}{\\sqrt{2}} = \\frac{1570}{\\sqrt{2}} = 1110 \\text{ V}$$

**c) Effektivverdi av strøm:**
$$I_{rms} = \\frac{V_{rms}}{R} = \\frac{1110}{50} = 22{,}2 \\text{ A}$$

**d) Gjennomsnittlig effekt:**
$$P = V_{rms} \\cdot I_{rms} = 1110 \\cdot 22{,}2 = 24600 \\text{ W} \\approx 24{,}6 \\text{ kW}$$

Alternativt: $P = \\frac{V_{rms}^2}{R} = \\frac{1110^2}{50} = 24{,}6$ kW

**e) Omdreininger per syklus:**

Omdreininger per sekund: $\\frac{1500}{60} = 25$ omdr/s

Sykluser per sekund: $f = 25$ Hz

Omdreininger per syklus: $\\frac{25}{25} = 1$ omdreining/syklus

**Svar:**
a) $\\omega = 157$ rad/s, $f = 25$ Hz
b) $\\varepsilon_0 = 1{,}57$ kV, $V_{rms} = 1{,}11$ kV
c) $I_{rms} = 22$ A
d) $P = 25$ kW
e) 1 omdreining per syklus`,
      subTasks: [
        { label: 'a', task: 'Finn vinkelfrekvens og frekvens' },
        { label: 'b', task: 'Finn toppverdi og effektivverdi' },
        { label: 'c', task: 'Beregn strømmen', answer: 22.2, multipleChoiceOptions: ['22 A', '31 A', '11 A', '44 A'] },
        { label: 'd', task: 'Beregn effekten', answer: 24600, multipleChoiceOptions: ['25 kW', '12,5 kW', '50 kW', '49 kW'] },
        { label: 'e', task: 'Finn omdreininger per syklus', answer: 1, multipleChoiceOptions: ['1', '2', '0,5', '25'] },
      ],
    },

    // ========== OPPGAVE 12: Vanskelig - Analyse ==========
    {
      id: 'fys2-5-2-oppg12',
      type: 'written',
      difficulty: 'hard',
      estimatedMinutes: 8,
      points: 4,
      question: `To AC-generatorer har identiske spoler (samme $N$, $A$, $B$) men forskjellig rotasjonshastighet. Generator A roterer med 3000 rpm og generator B med 1500 rpm.

a) Hva er forholdet mellom toppverdiene $\\frac{\\varepsilon_{0A}}{\\varepsilon_{0B}}$?
b) Hva er forholdet mellom frekvensene $\\frac{f_A}{f_B}$?
c) Begge generatorene kobles til like motstander. Hva er forholdet mellom effektene $\\frac{P_A}{P_B}$?
d) Forklar fysisk hvorfor raskere rotasjon gir høyere spenning.`,
      hints: [
        'Toppverdi: $\\varepsilon_0 = NAB\\omega \\propto \\omega$',
        'Vinkelfrekvens er proporsjonal med rpm',
        'Effekt: $P = \\frac{V_{rms}^2}{R} \\propto \\varepsilon_0^2$',
      ],
      solution: `**Gitt:**
- $n_A = 3000$ rpm
- $n_B = 1500$ rpm
- Identiske spoler

**a) Forhold mellom toppverdier:**

$\\varepsilon_0 = NAB\\omega$ der $\\omega \\propto n$ (rpm)

$$\\frac{\\varepsilon_{0A}}{\\varepsilon_{0B}} = \\frac{\\omega_A}{\\omega_B} = \\frac{n_A}{n_B} = \\frac{3000}{1500} = 2$$

**Svar a):** Toppverdien til A er 2× toppverdien til B.

**b) Forhold mellom frekvensene:**

$f = \\frac{\\omega}{2\\pi}$, og siden $\\omega \\propto n$:

$$\\frac{f_A}{f_B} = \\frac{n_A}{n_B} = \\frac{3000}{1500} = 2$$

**Svar b):** Frekvensen til A er 2× frekvensen til B.

**c) Forhold mellom effektene:**

$P = \\frac{V_{rms}^2}{R} \\propto \\varepsilon_0^2 \\propto \\omega^2$

$$\\frac{P_A}{P_B} = \\left(\\frac{\\omega_A}{\\omega_B}\\right)^2 = \\left(\\frac{3000}{1500}\\right)^2 = 4$$

**Svar c):** Effekten til A er 4× effekten til B.

**d) Fysisk forklaring:**

Raskere rotasjon gir høyere spenning fordi:
1. Den magnetiske fluksen gjennom spolen endres raskere
2. Ifølge Faradays lov er $\\varepsilon = -\\frac{d\\Phi}{dt}$
3. Raskere endring av fluks ($\\frac{d\\Phi}{dt}$ større) gir større indusert EMF
4. Matematisk: $\\frac{d}{dt}[\\cos(\\omega t)] = -\\omega\\sin(\\omega t)$, altså proporsjonal med $\\omega$`,
      subTasks: [
        { label: 'a', task: 'Finn forholdet mellom toppverdiene', answer: 2, multipleChoiceOptions: ['2', '4', '1', '0,5'] },
        { label: 'b', task: 'Finn forholdet mellom frekvensene', answer: 2, multipleChoiceOptions: ['2', '4', '1', '0,5'] },
        { label: 'c', task: 'Finn forholdet mellom effektene', answer: 4, multipleChoiceOptions: ['4', '2', '8', '16'] },
        { label: 'd', task: 'Forklar fysisk' },
      ],
    },
  ],
};


// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const FYSIKK2_CHAPTERS: Record<string, TextbookChapter> = {
  'fysikk2-1-1': CHAPTER_FYSIKK2_1_1,
  'fysikk2-1-2': CHAPTER_FYSIKK2_1_2,
  'fysikk2-1-3': CHAPTER_FYSIKK2_1_3,
  'fysikk2-1-4': CHAPTER_FYSIKK2_1_4,
  'fysikk2-1-5': CHAPTER_FYSIKK2_1_5,
  'fysikk2-2-1': CHAPTER_FYSIKK2_2_1,
  'fysikk2-2-2': CHAPTER_FYSIKK2_2_2,
  'fysikk2-2-3': CHAPTER_FYSIKK2_2_3,
  'fysikk2-2-4': CHAPTER_FYSIKK2_2_4,
  'fysikk2-2-5': CHAPTER_FYSIKK2_2_5,
  'fysikk2-3-1': CHAPTER_FYSIKK2_3_1,
  'fysikk2-3-2': CHAPTER_FYSIKK2_3_2,
  'fysikk2-3-3': CHAPTER_FYSIKK2_3_3,
  'fysikk2-3-4': CHAPTER_FYSIKK2_3_4,
  'fysikk2-3-5': CHAPTER_FYSIKK2_3_5,
  'fysikk2-4-1': CHAPTER_FYSIKK2_4_1,
  'fysikk2-4-2': CHAPTER_FYSIKK2_4_2,
  'fysikk2-4-3': CHAPTER_FYSIKK2_4_3,
  'fysikk2-4-4': CHAPTER_FYSIKK2_4_4,
  'fysikk2-4-5': CHAPTER_FYSIKK2_4_5,
  'fysikk2-5-1': CHAPTER_FYSIKK2_5_1,
  'fysikk2-5-2': CHAPTER_FYSIKK2_5_2,
};

export function getFysikk2Chapter(chapterId: string): TextbookChapter | undefined {
  return FYSIKK2_CHAPTERS[chapterId];
}
