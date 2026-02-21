/**
 * Tekstbok kapitler for S1 - Kapittel 1.6-1.9 og 2.7
 * Utvidelse av seksjon 1 (Algebra) og seksjon 2 (Funksjoner)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.6: Rette linjer og ettpunktsformelen
// ============================================================================

export const CHAPTER_S1_1_6: TextbookChapter = {
  id: 's1-1-6',
  courseId: 's1',
  chapterNumber: '1.6',
  title: 'Rette linjer og ettpunktsformelen',
  description: 'Stigningstall, ettpunktsformelen, topunktsformelen, parallelle og vinkelrette linjer med praktiske anvendelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke rette linjers egenskaper til å modellere og løse praktiske problemer',
    'bestemme likningen til en rett linje ut fra gitte opplysninger',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-1-6-intro',
      type: 'text',
      content: `## Rette linjer

En **rett linje** i et koordinatsystem kan beskrives ved en likning på formen $y = ax + b$, der:
- $a$ er **stigningstallet** (hvor mye $y$ endrer seg når $x$ øker med 1)
- $b$ er **konstantleddet** (der linja krysser $y$-aksen)

Rette linjer er fundamentale i matematikk og naturvitenskap. De brukes til å modellere lineære sammenhenger, for eksempel prising, temperaturomregning og bevegelse med konstant fart.

I S1 trenger vi mer presise metoder for å finne linjens likning ut fra ulike opplysninger.`,
    },

    // ========== STIGNING ==========
    {
      id: 's1-1-6-stigning',
      type: 'definition',
      title: 'Stigningstall (helning)',
      content: `**Stigningstallet** $a$ til en rett linje gjennom to punkter $(x_1, y_1)$ og $(x_2, y_2)$ er gitt ved:

$$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$$

Stigningstallet forteller hvor bratt linja er:
- $a > 0$: linja stiger fra venstre mot høyre
- $a < 0$: linja synker fra venstre mot høyre
- $a = 0$: linja er horisontal`,
    },

    // ========== TOPUNKTSFORMELEN ==========
    {
      id: 's1-1-6-topunktsformel',
      type: 'text',
      content: `## Topunktsformelen

Når vi kjenner to punkter $(x_1, y_1)$ og $(x_2, y_2)$ på en rett linje, kan vi finne likningen i to steg:

1. Beregn stigningstallet: $a = \\frac{y_2 - y_1}{x_2 - x_1}$
2. Sett inn i $y = ax + b$ med ett av punktene og loes for $b$.

Alternativt kan vi bruke **topunktsformelen** direkte:

$$\\frac{y - y_1}{x - x_1} = \\frac{y_2 - y_1}{x_2 - x_1}$$

Denne formelen uttrykker at stigningen mellom et vilkaarlig punkt $(x, y)$ på linja og $(x_1, y_1)$ er den samme som stigningen mellom de to kjente punktene.`,
    },

    // ========== ETTPUNKTSFORMELEN ==========
    {
      id: 's1-1-6-ettpunktsformel-def',
      type: 'definition',
      title: 'Ettpunktsformelen',
      content: `Likningen til en rett linje med stigningstall $a$ gjennom punktet $(x_1, y_1)$ er:

$$y - y_1 = a(x - x_1)$$

Dette er **ettpunktsformelen** (også kalt punktstigningsformelen). Den er svaert nyttig fordi vi bare trenger å kjenne **ett punkt** og **stigningen** for å bestemme linja fullstendig.`,
    },

    {
      id: 's1-1-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Ettpunktsformelen',
      problem: 'Finn likningen til linja som går gjennom punktet $(3, 5)$ og har stigningstall $a = 2$.',
      solution: `**Løsning:**

Vi bruker ettpunktsformelen $y - y_1 = a(x - x_1)$ med $(x_1, y_1) = (3, 5)$ og $a = 2$:

$$y - 5 = 2(x - 3)$$
$$y - 5 = 2x - 6$$
$$y = 2x - 1$$

**Svar:** Linja har likningen $y = 2x - 1$.

**Kontroll:** For $x = 3$: $y = 2 \\cdot 3 - 1 = 5$ ✓`,
    },

    {
      id: 's1-1-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Linje gjennom to punkter',
      problem: 'Finn likningen til linja som går gjennom punktene $A(1, 4)$ og $B(4, -2)$.',
      solution: `**Løsning:**

**Steg 1:** Finn stigningstallet:

$$a = \\frac{-2 - 4}{4 - 1} = \\frac{-6}{3} = -2$$

**Steg 2:** Bruk ettpunktsformelen med punktet $(1, 4)$:

$$y - 4 = -2(x - 1)$$
$$y - 4 = -2x + 2$$
$$y = -2x + 6$$

**Svar:** Linja har likningen $y = -2x + 6$.

**Kontroll:** For $x = 4$: $y = -2 \\cdot 4 + 6 = -2$ ✓`,
    },

    // ========== PARALLELLE OG VINKELRETTE LINJER ==========
    {
      id: 's1-1-6-parallell-vinkelrett',
      type: 'theorem',
      title: 'Parallelle og vinkelrette linjer',
      content: `La $l_1$ ha stigningstall $a_1$ og $l_2$ ha stigningstall $a_2$.

**Parallelle linjer:** $l_1 \\parallel l_2 \\iff a_1 = a_2$

To linjer er parallelle hvis og bare hvis de har **samme stigningstall**.

**Vinkelrette linjer:** $l_1 \\perp l_2 \\iff a_1 \\cdot a_2 = -1$

To linjer er vinkelrette hvis og bare hvis **produktet av stigningstallene er $-1$**, det vil si $a_2 = -\\frac{1}{a_1}$.`,
    },

    {
      id: 's1-1-6-example-3',
      type: 'example',
      title: 'Eksempel 3: Parallelle og vinkelrette linjer',
      problem: 'Linja $l$ har likningen $y = 3x - 1$. Finn likningen til:\n\na) linja $m$ som er parallell med $l$ og går gjennom $(2, 1)$\n\nb) linja $n$ som er vinkelrett på $l$ og går gjennom $(6, 4)$',
      solution: `**Løsning:**

Linja $l$ har stigningstall $a_l = 3$.

**a)** Parallell linje: $a_m = a_l = 3$. Med ettpunktsformelen:

$$y - 1 = 3(x - 2)$$
$$y = 3x - 5$$

**b)** Vinkelrett linje: $a_n = -\\frac{1}{a_l} = -\\frac{1}{3}$. Med ettpunktsformelen:

$$y - 4 = -\\frac{1}{3}(x - 6)$$
$$y - 4 = -\\frac{1}{3}x + 2$$
$$y = -\\frac{1}{3}x + 6$$

**Svar:** a) $y = 3x - 5$, b) $y = -\\frac{1}{3}x + 6$.`,
    },

    // ========== PRAKTISK ANVENDELSE ==========
    {
      id: 's1-1-6-praktisk',
      type: 'text',
      content: `## Praktiske anvendelser

Rette linjer brukes ofte til å modellere sammenhenger i virkeligheten:

- **Kostnadsfunksjoner:** $K(x) = ax + b$, der $a$ er variabel kostnad per enhet og $b$ er faste kostnader
- **Temperaturomregning:** $F = \\frac{9}{5}C + 32$ (Celsius til Fahrenheit)
- **Bevegelse med konstant fart:** $s(t) = v \\cdot t + s_0$, der $v$ er fart og $s_0$ startposisjon

Når vi kjenner to datapunkter, kan vi bruke topunktsformelen til å finne den lineære modellen.`,
    },

    {
      id: 's1-1-6-tip',
      type: 'tip',
      content: 'Når du skal finne likningen til en rett linje, sjekk alltid svaret ditt ved å sette inn ett av de kjente punktene. Dersom punktet ikke tilfredsstiller likningen, har du gjort en feil.',
    },

    // ========== OPPGAVER ==========
    {
      id: 's1-1-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-1-6-ex-1',
        number: '1.6.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn likningen til linja med gitt stigningstall gjennom gitt punkt.',
        subTasks: [
          { label: 'a', task: 'Stigningstall $a = 4$ gjennom $(1, 3)$.', solution: '$y - 3 = 4(x - 1) \\Rightarrow y = 4x - 1$.' },
          { label: 'b', task: 'Stigningstall $a = -\\frac{1}{2}$ gjennom $(4, 6)$.', solution: '$y - 6 = -\\frac{1}{2}(x - 4) \\Rightarrow y = -\\frac{1}{2}x + 8$.' },
          { label: 'c', task: 'Stigningstall $a = 0$ gjennom $(2, 7)$.', solution: '$y = 7$ (horisontal linje).' },
        ],
        solution: 'a) $y = 4x - 1$, b) $y = -\\frac{1}{2}x + 8$, c) $y = 7$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-1-6-ex-2',
        number: '1.6.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn likningen til linja gjennom de to punktene.',
        subTasks: [
          { label: 'a', task: '$(2, 3)$ og $(5, 9)$.', solution: '$a = \\frac{9 - 3}{5 - 2} = 2$. $y - 3 = 2(x - 2) \\Rightarrow y = 2x - 1$.' },
          { label: 'b', task: '$(-1, 4)$ og $(3, -4)$.', solution: '$a = \\frac{-4 - 4}{3 - (-1)} = -2$. $y - 4 = -2(x + 1) \\Rightarrow y = -2x + 2$.' },
          { label: 'c', task: '$(0, -3)$ og $(6, 0)$.', solution: '$a = \\frac{0 - (-3)}{6 - 0} = \\frac{1}{2}$. $y = \\frac{1}{2}x - 3$.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-1-6-ex-3',
        number: '1.6.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Linja $l$ har likningen $y = -2x + 5$.',
        subTasks: [
          { label: 'a', task: 'Finn likningen til linja $m$ som er parallell med $l$ og går gjennom $(3, 1)$.', solution: '$a_m = -2$. $y - 1 = -2(x - 3) \\Rightarrow y = -2x + 7$.' },
          { label: 'b', task: 'Finn likningen til linja $n$ som er vinkelrett på $l$ og går gjennom $(0, -2)$.', solution: '$a_n = \\frac{1}{2}$. $y + 2 = \\frac{1}{2}x \\Rightarrow y = \\frac{1}{2}x - 2$.' },
          { label: 'c', task: 'Finn skjaeringspunktet mellom $l$ og $n$.', solution: '$-2x + 5 = \\frac{1}{2}x - 2 \\Rightarrow -\\frac{5}{2}x = -7 \\Rightarrow x = \\frac{14}{5}$, $y = -2 \\cdot \\frac{14}{5} + 5 = -\\frac{3}{5}$. Skjaeringspunkt: $\\left(\\frac{14}{5}, -\\frac{3}{5}\\right)$.' },
        ],
        hints: ['Husk: for vinkelrette linjer er $a_1 \\cdot a_2 = -1$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-1-6-ex-4',
        number: '1.6.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har faste kostnader på 20 000 kr per maaned. Når de produserer 100 enheter, er totalkostnaden 45 000 kr. Vi antar at sammenhengen mellom antall enheter $x$ og totalkostnad $K(x)$ er lineær.`,
        subTasks: [
          { label: 'a', task: 'Finn kostnadsfunksjonen $K(x)$.', solution: '$K(0) = 20\\,000$ og $K(100) = 45\\,000$. Stigning: $a = \\frac{45\\,000 - 20\\,000}{100 - 0} = 250$. Altså $K(x) = 250x + 20\\,000$.' },
          { label: 'b', task: 'Hva koster det å produsere 200 enheter?', solution: '$K(200) = 250 \\cdot 200 + 20\\,000 = 70\\,000$ kr.' },
          { label: 'c', task: 'Hvor mange enheter kan produseres for 100 000 kr?', solution: '$250x + 20\\,000 = 100\\,000 \\Rightarrow x = 320$ enheter.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-1-6-ex-5',
        number: '1.6.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bestem likningen til linja som står vinkelrett på linja $3x - 2y = 6$ og går gjennom punktet $(3, 1)$.',
        solution: 'Skriver om: $y = \\frac{3}{2}x - 3$, så $a_1 = \\frac{3}{2}$. Vinkelrett stigning: $a_2 = -\\frac{2}{3}$. Ettpunktsformelen: $y - 1 = -\\frac{2}{3}(x - 3) \\Rightarrow y = -\\frac{2}{3}x + 3$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-1-6-ex-6',
        number: '1.6.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En trekant har hjoerner i $A(0, 0)$, $B(6, 0)$ og $C(2, 8)$.',
        subTasks: [
          { label: 'a', task: 'Finn likningen til alle tre sidene i trekanten.', solution: '$AB$: $y = 0$. $AC$: $a = \\frac{8}{2} = 4$, så $y = 4x$. $BC$: $a = \\frac{8 - 0}{2 - 6} = -2$, $y = -2(x - 6) = -2x + 12$.' },
          { label: 'b', task: 'Finn likningen til høyden fra $C$ ned på $AB$.', solution: '$AB$ er langs $x$-aksen ($y = 0$), så høyden fra $C$ er en loddrett linje $x = 2$.' },
          { label: 'c', task: 'Finn likningen til midtnormalen til $AB$.', solution: 'Midtpunktet av $AB$ er $(3, 0)$. $AB$ er horisontal, så midtnormalen er $x = 3$.' },
        ],
        hints: ['Høyden fra et punkt står vinkelrett på den motstaaende siden.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.7: Likningssett
// ============================================================================

export const CHAPTER_S1_1_7: TextbookChapter = {
  id: 's1-1-7',
  courseId: 's1',
  chapterNumber: '1.7',
  title: 'Likningssett',
  description: 'Grafisk løsning, innsettingsmetoden, addisjonsmetoden og tolkning av løsninger for lineære likningssett.',
  estimatedMinutes: 55,
  competenceGoals: [
    'løse lineære likningssett med to ukjente ved ulike metoder',
    'tolke løsningene geometrisk',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-1-7-intro',
      type: 'text',
      content: `## Lineære likningssett

Et **lineært likningssett** med to ukjente $x$ og $y$ består av to eller flere lineære likninger som skal løses samtidig:

$$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$$

**Løsningen** er de verdiene av $x$ og $y$ som oppfyller **begge** likningene samtidig.

Geometrisk representerer hver likning en rett linje i koordinatsystemet, og løsningen er skjaeringspunktet mellom de to linjene.`,
    },

    // ========== GRAFISK LØSNING ==========
    {
      id: 's1-1-7-grafisk',
      type: 'text',
      content: `## Grafisk løsning

Den enkleste metoden er å tegne begge linjene i et koordinatsystem og lese av skjaeringspunktet.

**Fremgangsmaate:**
1. Skriv begge likningene på formen $y = ax + b$.
2. Tegn begge linjene i et koordinatsystem.
3. Les av koordinatene til skjaeringspunktet.

**Fordel:** Gir en god visuell forstaaelse av problemet.
**Ulempe:** Vanskelig å lese av nøyaktige verdier, spesielt for brøker og desimaltall.`,
    },

    // ========== GEOMETRISK TOLKNING ==========
    {
      id: 's1-1-7-geometrisk',
      type: 'definition',
      title: 'Geometrisk tolkning av likningssett',
      content: `Et lineært likningssett med to ukjente har tre mulige utfall:

**1. En løsning:** Linjene skjaerer hverandre i **nøyaktig ett punkt**. Linjene har ulikt stigningstall ($a_1 \\neq a_2$).

**2. Ingen løsning:** Linjene er **parallelle** og skjaerer aldri hverandre. Stigningstallene er like ($a_1 = a_2$), men konstantleddene er ulike ($b_1 \\neq b_2$).

**3. Uendelig mange løsninger:** Linjene er **identiske** (sammenfallende). Alle punkter på den ene linja ligger også på den andre ($a_1 = a_2$ og $b_1 = b_2$).`,
    },

    // ========== INNSETTINGSMETODEN ==========
    {
      id: 's1-1-7-innsetting',
      type: 'text',
      content: `## Innsettingsmetoden

**Innsettingsmetoden** (substitusjonsmetoden) går ut på å løse en likning for en av de ukjente og sette uttrykket inn i den andre likningen.

**Fremgangsmaate:**
1. Loes den ene likningen for $x$ eller $y$.
2. Sett uttrykket inn i den andre likningen.
3. Loes den nye likningen (med bare en ukjent).
4. Sett verdien tilbake for å finne den andre ukjente.

Metoden fungerer best når en av koeffisientene er 1 eller $-1$, slik at vi unngår brøker.`,
    },

    {
      id: 's1-1-7-example-1',
      type: 'example',
      title: 'Eksempel 1: Innsettingsmetoden',
      problem: `Loes likningssettet:

$$\\begin{cases} 2x + y = 7 \\\\ x - 3y = -6 \\end{cases}$$`,
      solution: `**Løsning:**

**Steg 1:** Loes likning (I) for $y$:
$$y = 7 - 2x$$

**Steg 2:** Sett inn i likning (II):
$$x - 3(7 - 2x) = -6$$
$$x - 21 + 6x = -6$$
$$7x = 15$$
$$x = \\frac{15}{7}$$

**Steg 3:** Finn $y$:
$$y = 7 - 2 \\cdot \\frac{15}{7} = \\frac{49 - 30}{7} = \\frac{19}{7}$$

**Svar:** $x = \\frac{15}{7}$ og $y = \\frac{19}{7}$.

**Kontroll i (II):** $\\frac{15}{7} - 3 \\cdot \\frac{19}{7} = \\frac{15 - 57}{7} = \\frac{-42}{7} = -6$ ✓`,
    },

    // ========== ADDISJONSMETODEN ==========
    {
      id: 's1-1-7-addisjon',
      type: 'text',
      content: `## Addisjonsmetoden

**Addisjonsmetoden** (eliminasjonsmetoden) går ut på å legge sammen eller trekke fra likningene slik at en av de ukjente forsvinner.

**Fremgangsmaate:**
1. Multipliser eventuelt den ene eller begge likningene med passende tall slik at koeffisienten foran en av de ukjente blir lik (med motsatt fortegn).
2. Adder de to likningene.
3. Loes likningen med en ukjent.
4. Sett verdien inn i en av de opprinnelige likningene for å finne den andre ukjente.

Metoden fungerer godt når koeffisientene er heltall, og vi kan unngaa brøker.`,
    },

    {
      id: 's1-1-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Addisjonsmetoden',
      problem: `Loes likningssettet:

$$\\begin{cases} 3x + 2y = 12 \\\\ 5x - 2y = 4 \\end{cases}$$`,
      solution: `**Løsning:**

Vi ser at koeffisientene foran $y$ allerede har motsatt fortegn ($+2$ og $-2$), så vi legger sammen likningene:

$$\\begin{aligned} 3x + 2y &= 12 \\\\ + \\; 5x - 2y &= 4 \\\\ \\hline 8x &= 16 \\end{aligned}$$

$$x = 2$$

Setter inn i (I): $3 \\cdot 2 + 2y = 12 \\Rightarrow 2y = 6 \\Rightarrow y = 3$.

**Svar:** $x = 2$ og $y = 3$.

**Kontroll i (II):** $5 \\cdot 2 - 2 \\cdot 3 = 10 - 6 = 4$ ✓`,
    },

    {
      id: 's1-1-7-example-3',
      type: 'example',
      title: 'Eksempel 3: Praktisk problem',
      problem: `En kinobillettbutikk selger voksenbilletter for 150 kr og barnebilletter for 90 kr. En dag solgte de til sammen 200 billetter og hadde en inntekt på 24 600 kr. Hvor mange voksenbilletter og hvor mange barnebilletter ble solgt?`,
      solution: `**Løsning:**

La $v$ = antall voksenbilletter og $b$ = antall barnebilletter.

$$\\begin{cases} v + b = 200 \\\\ 150v + 90b = 24\\,600 \\end{cases}$$

Fra likning (I): $v = 200 - b$. Setter inn i (II):

$$150(200 - b) + 90b = 24\\,600$$
$$30\\,000 - 150b + 90b = 24\\,600$$
$$-60b = -5\\,400$$
$$b = 90$$

Da er $v = 200 - 90 = 110$.

**Svar:** Det ble solgt 110 voksenbilletter og 90 barnebilletter.

**Kontroll:** $110 + 90 = 200$ ✓ og $150 \\cdot 110 + 90 \\cdot 90 = 16\\,500 + 8\\,100 = 24\\,600$ ✓`,
    },

    // ========== SPESIALTILFELLER ==========
    {
      id: 's1-1-7-spesialtilfeller',
      type: 'text',
      content: `## Spesialtilfeller

Ikke alle likningssett har en entydig løsning.

**Ingen løsning:** Dersom eliminasjonen gir en selvmotsigelse (f.eks. $0 = 5$), har likningssettet **ingen løsning**. Geometrisk betyr dette at linjene er parallelle.

**Uendelig mange løsninger:** Dersom eliminasjonen gir en identitet (f.eks. $0 = 0$), har likningssettet **uendelig mange løsninger**. Geometrisk betyr dette at linjene er identiske.

Det er viktig å kjenne igjen disse tilfellene og kunne forklare hva som skjer geometrisk.`,
    },

    {
      id: 's1-1-7-note',
      type: 'note',
      content: 'I S1-eksamen forventes det at du kan løse likningssett med både innsettingsmetoden og addisjonsmetoden. Velg den metoden som gir enklest regning. Husk alltid å kontrollere svaret ved innsetting i begge de opprinnelige likningene.',
    },

    // ========== OPPGAVER ==========
    {
      id: 's1-1-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-1-7-ex-1',
        number: '1.7.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Loes likningssettene med innsettingsmetoden.',
        subTasks: [
          {
            label: 'a',
            task: '$\\begin{cases} y = 2x + 1 \\\\ 3x + y = 11 \\end{cases}$',
            solution: 'Setter $y = 2x + 1$ inn i den andre: $3x + 2x + 1 = 11 \\Rightarrow 5x = 10 \\Rightarrow x = 2$, $y = 5$.',
          },
          {
            label: 'b',
            task: '$\\begin{cases} x + 2y = 8 \\\\ 3x - y = 3 \\end{cases}$',
            solution: 'Fra (I): $x = 8 - 2y$. Inn i (II): $3(8 - 2y) - y = 3 \\Rightarrow 24 - 7y = 3 \\Rightarrow y = 3$, $x = 2$.',
          },
          {
            label: 'c',
            task: '$\\begin{cases} 2x - y = 4 \\\\ x + 3y = 5 \\end{cases}$',
            solution: 'Fra (I): $y = 2x - 4$. Inn i (II): $x + 3(2x - 4) = 5 \\Rightarrow 7x = 17 \\Rightarrow x = \\frac{17}{7}$, $y = \\frac{6}{7}$.',
          },
        ],
        solution: 'a) $x = 2, y = 5$, b) $x = 2, y = 3$, c) $x = \\frac{17}{7}, y = \\frac{6}{7}$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-1-7-ex-2',
        number: '1.7.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Loes likningssettene med addisjonsmetoden.',
        subTasks: [
          {
            label: 'a',
            task: '$\\begin{cases} 2x + 3y = 13 \\\\ 2x - y = 1 \\end{cases}$',
            solution: 'Trekker (II) fra (I): $4y = 12 \\Rightarrow y = 3$. Setter inn: $2x + 9 = 13 \\Rightarrow x = 2$.',
          },
          {
            label: 'b',
            task: '$\\begin{cases} 4x + 5y = 23 \\\\ 3x + 5y = 20 \\end{cases}$',
            solution: 'Trekker (II) fra (I): $x = 3$. Setter inn: $12 + 5y = 23 \\Rightarrow y = \\frac{11}{5}$.',
          },
          {
            label: 'c',
            task: '$\\begin{cases} 3x + 4y = 10 \\\\ 5x - 2y = 8 \\end{cases}$',
            solution: 'Ganger (II) med 2: $10x - 4y = 16$. Legger til (I): $13x = 26 \\Rightarrow x = 2$. Da $y = 1$.',
          },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-1-7-ex-3',
        number: '1.7.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjor om likningssettet har en løsning, ingen løsning eller uendelig mange løsninger. Begrunn svaret.',
        subTasks: [
          {
            label: 'a',
            task: '$\\begin{cases} 2x - 4y = 6 \\\\ -x + 2y = -3 \\end{cases}$',
            solution: 'Ganger (II) med 2: $-2x + 4y = -6$. Legger til (I): $0 = 0$. Linjene er identiske, så uendelig mange løsninger.',
          },
          {
            label: 'b',
            task: '$\\begin{cases} 3x + 6y = 9 \\\\ x + 2y = 5 \\end{cases}$',
            solution: 'Ganger (II) med 3: $3x + 6y = 15$. Men (I) sier $3x + 6y = 9$. Selvmotsigelse: $9 = 15$, altså ingen løsning (parallelle linjer).',
          },
          {
            label: 'c',
            task: '$\\begin{cases} 5x - 3y = 7 \\\\ 2x + y = 4 \\end{cases}$',
            solution: 'Fra (II): $y = 4 - 2x$. Inn i (I): $5x - 3(4 - 2x) = 7 \\Rightarrow 11x = 19 \\Rightarrow x = \\frac{19}{11}$. En entydig løsning.',
          },
        ],
        hints: ['Proev å eliminere en ukjent og se hva som skjer.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-1-7-ex-4',
        number: '1.7.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En frukthandler selger epler og paerer. Per kjoepte 3 kg epler og 2 kg paerer og betalte 110 kr. Lise kjoepte 2 kg epler og 4 kg paerer og betalte 120 kr. Finn kiloprisen for epler og paerer.`,
        subTasks: [
          { label: 'a', task: 'Sett opp et likningssett med $e$ = kilopris epler og $p$ = kilopris paerer.', solution: '$\\begin{cases} 3e + 2p = 110 \\\\ 2e + 4p = 120 \\end{cases}$' },
          { label: 'b', task: 'Loes likningssettet.', solution: 'Ganger (I) med 2: $6e + 4p = 220$. Trekker (II) fra: $4e = 100 \\Rightarrow e = 25$. Setter inn: $75 + 2p = 110 \\Rightarrow p = 17{,}50$. Epler koster 25 kr/kg, paerer koster 17,50 kr/kg.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-7-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-1-7-ex-5',
        number: '1.7.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Loes likningssettet:

$$\\begin{cases} \\frac{x}{2} + \\frac{y}{3} = 5 \\\\ \\frac{x}{4} - \\frac{y}{6} = 1 \\end{cases}$$`,
        solution: 'Ganger (I) med 6: $3x + 2y = 30$. Ganger (II) med 12: $3x - 2y = 12$. Legger sammen: $6x = 42 \\Rightarrow x = 7$. Setter inn: $21 + 2y = 30 \\Rightarrow y = \\frac{9}{2}$. **Svar:** $x = 7$, $y = 4{,}5$.',
        hints: ['Multipliser begge likningene med fellesnevneren for å fjerne brøkene først.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-7-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-1-7-ex-6',
        number: '1.7.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To tall har summen 50 og differansen 14. Finn tallene. Deretter: Tre kaffer og to boller koster 145 kr, mens to kaffer og tre boller koster 130 kr. Finn prisen for en kaffe og en bolle.',
        subTasks: [
          { label: 'a', task: 'Finn de to tallene med sum 50 og differanse 14.', solution: '$\\begin{cases} x + y = 50 \\\\ x - y = 14 \\end{cases}$. Legger sammen: $2x = 64 \\Rightarrow x = 32$, $y = 18$.' },
          { label: 'b', task: 'Finn prisen for kaffe ($k$) og bolle ($b$).', solution: '$\\begin{cases} 3k + 2b = 145 \\\\ 2k + 3b = 130 \\end{cases}$. Ganger (I) med 3, (II) med 2: $9k + 6b = 435$ og $4k + 6b = 260$. Trekker: $5k = 175 \\Rightarrow k = 35$, $b = 20$. Kaffe: 35 kr, bolle: 20 kr.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.8: Andregradsfunksjoner og -likninger
// ============================================================================

export const CHAPTER_S1_1_8: TextbookChapter = {
  id: 's1-1-8',
  courseId: 's1',
  chapterNumber: '1.8',
  title: 'Andregradsfunksjoner og -likninger',
  description: 'Abc-formelen, diskriminant, toppunkt, toppunktform, symmetriakse, faktorisering og optimalisering med andregradsfunksjoner.',
  estimatedMinutes: 60,
  competenceGoals: [
    'løse andregradslikninger algebraisk og grafisk',
    'bruke andregradsfunksjoner til å modellere og optimalisere praktiske situasjoner',
    'analysere andregradsuttrykk ved hjelp av diskriminant og faktorisering',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-1-8-intro',
      type: 'text',
      content: `## Andregradsfunksjoner

En **andregradsfunksjon** har formen:

$$f(x) = ax^2 + bx + c, \\quad a \\neq 0$$

Grafen til en andregradsfunksjon er en **parabel**:
- Dersom $a > 0$, peker parabelen **oppover** (bunnpunkt).
- Dersom $a < 0$, peker parabelen **nedover** (toppunkt).

Andregradsfunksjoner brukes mye i S1 til å modellere situasjoner der veksten ikke er konstant, for eksempel inntekter, arealer og bevegelse.`,
    },

    // ========== ANDREGRADSLIGNING ==========
    {
      id: 's1-1-8-andregradsligning',
      type: 'text',
      content: `## Andregradslikninger

En **andregradslikning** har den generelle formen:

$$ax^2 + bx + c = 0, \\quad a \\neq 0$$

Løsningene til denne likningen kalles **nullpunktene** til funksjonen $f(x) = ax^2 + bx + c$, og de kan finnes ved hjelp av **abc-formelen** (også kalt den **kvadratiske formelen**).`,
    },

    // ========== ABC-FORMELEN ==========
    {
      id: 's1-1-8-abc',
      type: 'theorem',
      title: 'Abc-formelen (den kvadratiske formelen)',
      content: `Likningen $ax^2 + bx + c = 0$ har løsningene:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Utledning:** Vi fullstendiggjor kvadratet:

$$ax^2 + bx + c = 0$$
$$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$$
$$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$$
$$x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$$
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`,
    },

    // ========== DISKRIMINANTEN ==========
    {
      id: 's1-1-8-diskriminant',
      type: 'definition',
      title: 'Diskriminanten',
      content: `**Diskriminanten** til andregradslikningen $ax^2 + bx + c = 0$ er definert som:

$$D = b^2 - 4ac$$

Diskriminanten avgjør antall løsninger:
- $D > 0$: **To ulike reelle løsninger** (parabelen skjaerer $x$-aksen i to punkter)
- $D = 0$: **En løsning** (dobbeltrot, parabelen tangerer $x$-aksen)
- $D < 0$: **Ingen reelle løsninger** (parabelen skjaerer ikke $x$-aksen)`,
    },

    {
      id: 's1-1-8-example-1',
      type: 'example',
      title: 'Eksempel 1: Bruk av abc-formelen',
      problem: 'Loes likningen $2x^2 - 5x - 3 = 0$.',
      solution: `**Løsning:**

Her er $a = 2$, $b = -5$ og $c = -3$.

**Diskriminanten:**
$$D = (-5)^2 - 4 \\cdot 2 \\cdot (-3) = 25 + 24 = 49$$

Siden $D > 0$, har vi to løsninger:

$$x = \\frac{-(-5) \\pm \\sqrt{49}}{2 \\cdot 2} = \\frac{5 \\pm 7}{4}$$

$$x_1 = \\frac{5 + 7}{4} = 3 \\qquad x_2 = \\frac{5 - 7}{4} = -\\frac{1}{2}$$

**Svar:** $x = 3$ eller $x = -\\frac{1}{2}$.`,
    },

    // ========== TOPPUNKT OG SYMMETRIAKSE ==========
    {
      id: 's1-1-8-toppunkt',
      type: 'definition',
      title: 'Toppunkt, bunnpunkt og symmetriakse',
      content: `Toppunktet (eller bunnpunktet) til parabelen $f(x) = ax^2 + bx + c$ har koordinatene:

$$x_T = -\\frac{b}{2a}, \\qquad y_T = f\\left(-\\frac{b}{2a}\\right) = c - \\frac{b^2}{4a}$$

**Symmetriaksen** er den vertikale linja $x = x_T = -\\frac{b}{2a}$. Parabelen er symmetrisk om denne linja.

Vi kan skrive funksjonen på **toppunktform** (fullstendig kvadrat):

$$f(x) = a(x - x_T)^2 + y_T$$

Toppunktformen gjor det enkelt å lese av toppunkt, symmetrilinje og om parabelen har et maksimum eller minimum.`,
    },

    {
      id: 's1-1-8-example-2',
      type: 'example',
      title: 'Eksempel 2: Finn toppunkt og skisser graf',
      problem: 'Gitt $f(x) = -x^2 + 6x - 5$. Finn toppunkt, nullpunkter, symmetriakse og skisser grafen.',
      solution: `**Løsning:**

**Toppunkt:** $a = -1$, $b = 6$, $c = -5$.

$$x_T = -\\frac{6}{2 \\cdot (-1)} = 3$$
$$y_T = f(3) = -9 + 18 - 5 = 4$$

Toppunktet er $(3, 4)$. **Symmetriaksen** er $x = 3$.

**Nullpunkter:** $-x^2 + 6x - 5 = 0 \\Rightarrow x^2 - 6x + 5 = 0$

$$D = 36 - 20 = 16$$
$$x = \\frac{6 \\pm 4}{2} \\Rightarrow x_1 = 5, \\quad x_2 = 1$$

**Toppunktform:** $f(x) = -(x - 3)^2 + 4$

**Grafen:** Parabelen peker nedover ($a = -1 < 0$), har toppunkt i $(3, 4)$ og krysser $x$-aksen i $(1, 0)$ og $(5, 0)$. $y$-akseskjaering: $f(0) = -5$.`,
    },

    // ========== FAKTORISERING ==========
    {
      id: 's1-1-8-faktorisering',
      type: 'text',
      content: `## Faktorisering av andregradsuttrykk

Når vi kjenner nullpunktene $x_1$ og $x_2$, kan vi faktorisere:

$$ax^2 + bx + c = a(x - x_1)(x - x_2)$$

**Spesialtilfeller:**
- Dobbeltrot ($D = 0$): $ax^2 + bx + c = a(x - x_1)^2$
- Ingen reelle nullpunkter ($D < 0$): uttrykket kan ikke faktoriseres over de reelle tallene

Faktorisering er nyttig for å løse ulikheter, forenkle broekuttrykk og forstaa grafens oppførsel.`,
    },

    {
      id: 's1-1-8-warning',
      type: 'warning',
      content: 'Husk at $a$-verdien foran parentesene må være med når du faktoriserer. For eksempel: $2x^2 - 10x + 12 = 2(x - 2)(x - 3)$, ikke $(x - 2)(x - 3)$.',
    },

    // ========== OPTIMALISERING ==========
    {
      id: 's1-1-8-example-3',
      type: 'example',
      title: 'Eksempel 3: Optimalisering',
      problem: `En bonde har 120 meter gjerde og vil lage en rektangulaer innhegning langs en vegg (slik at kun tre sider trenger gjerde). Finn dimensjonene som gir størst mulig areal.`,
      solution: `**Løsning:**

La $x$ = lengden på de to sidene vinkelrett på veggen, og $y$ = lengden langs veggen.

**Betingelse:** $2x + y = 120 \\Rightarrow y = 120 - 2x$

**Areal:** $A(x) = x \\cdot y = x(120 - 2x) = 120x - 2x^2$

Dette er en andregradsfunksjon med $a = -2 < 0$, så den har et **maksimum**.

**Toppunkt:**
$$x_T = -\\frac{120}{2 \\cdot (-2)} = 30$$

$$y = 120 - 2 \\cdot 30 = 60$$

$$A_{\\max} = 30 \\cdot 60 = 1800$$

**Svar:** Innhegningen boer ha sider $30$ m og $60$ m langs veggen, noe som gir et areal på $1800$ m$^2$.`,
    },

    // ========== OPPGAVER ==========
    {
      id: 's1-1-8-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-1-8-ex-1',
        number: '1.8.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Loes andregradslikningene med abc-formelen.',
        subTasks: [
          { label: 'a', task: '$x^2 - 5x + 6 = 0$', solution: '$D = 25 - 24 = 1$. $x = \\frac{5 \\pm 1}{2}$, altså $x = 3$ eller $x = 2$.' },
          { label: 'b', task: '$2x^2 + 3x - 2 = 0$', solution: '$D = 9 + 16 = 25$. $x = \\frac{-3 \\pm 5}{4}$, altså $x = \\frac{1}{2}$ eller $x = -2$.' },
          { label: 'c', task: '$x^2 + 4x + 4 = 0$', solution: '$D = 16 - 16 = 0$. $x = \\frac{-4}{2} = -2$ (dobbeltrot).' },
          { label: 'd', task: '$3x^2 - x - 4 = 0$', solution: '$D = 1 + 48 = 49$. $x = \\frac{1 \\pm 7}{6}$, altså $x = \\frac{4}{3}$ eller $x = -1$.' },
        ],
        solution: 'a) $x = 3$ eller $x = 2$, b) $x = \\frac{1}{2}$ eller $x = -2$, c) $x = -2$ (dobbeltrot), d) $x = \\frac{4}{3}$ eller $x = -1$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-8-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-1-8-ex-2',
        number: '1.8.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk diskriminanten til å avgjore hvor mange løsninger likningen har (uten å løse den).',
        subTasks: [
          { label: 'a', task: '$3x^2 - 2x + 5 = 0$', solution: '$D = 4 - 60 = -56 < 0$. Ingen reelle løsninger.' },
          { label: 'b', task: '$4x^2 - 12x + 9 = 0$', solution: '$D = 144 - 144 = 0$. En løsning (dobbeltrot).' },
          { label: 'c', task: '$x^2 + x - 6 = 0$', solution: '$D = 1 + 24 = 25 > 0$. To ulike løsninger.' },
          { label: 'd', task: '$5x^2 + 2x + 1 = 0$', solution: '$D = 4 - 20 = -16 < 0$. Ingen reelle løsninger.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-8-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-1-8-ex-3',
        number: '1.8.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gitt $f(x) = x^2 - 8x + 12$.',
        subTasks: [
          { label: 'a', task: 'Finn nullpunktene til $f$.', solution: '$D = 64 - 48 = 16$. $x = \\frac{8 \\pm 4}{2}$, altså $x = 6$ eller $x = 2$.' },
          { label: 'b', task: 'Finn toppunktet (bunnpunktet) til parabelen.', solution: '$x_T = \\frac{8}{2} = 4$, $y_T = 16 - 32 + 12 = -4$. Bunnpunkt: $(4, -4)$.' },
          { label: 'c', task: 'Skriv $f(x)$ på toppunktform.', solution: '$f(x) = (x - 4)^2 - 4$.' },
          { label: 'd', task: 'Faktoriser $f(x)$.', solution: '$f(x) = (x - 2)(x - 6)$.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-8-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-1-8-ex-4',
        number: '1.8.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift selger $x$ enheter av et produkt til prisen $p(x) = 500 - 2x$ kr per enhet. Produksjonskostnaden per enhet er 100 kr, og faste kostnader er 10 000 kr.`,
        subTasks: [
          { label: 'a', task: 'Finn inntektsfunksjonen $I(x) = x \\cdot p(x)$.', solution: '$I(x) = x(500 - 2x) = 500x - 2x^2$.' },
          { label: 'b', task: 'Finn kostnadsfunksjonen $K(x)$.', solution: '$K(x) = 100x + 10\\,000$.' },
          { label: 'c', task: 'Finn overskuddsfunksjonen $O(x) = I(x) - K(x)$.', solution: '$O(x) = 500x - 2x^2 - 100x - 10\\,000 = -2x^2 + 400x - 10\\,000$.' },
          { label: 'd', task: 'Finn det antallet enheter som gir størst overskudd, og beregn overskuddet.', solution: '$x_T = -\\frac{400}{2 \\cdot (-2)} = 100$. $O(100) = -20\\,000 + 40\\,000 - 10\\,000 = 10\\,000$ kr.' },
        ],
        hints: ['Overskudd = inntekt minus kostnad.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-8-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-1-8-ex-5',
        number: '1.8.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'For hvilken verdi av $k$ har likningen $x^2 - 6x + k = 0$ noyaktig en løsning?',
        solution: 'Dobbeltrot når $D = 0$: $D = 36 - 4k = 0 \\Rightarrow k = 9$. Kontroll: $x^2 - 6x + 9 = (x - 3)^2 = 0 \\Rightarrow x = 3$.',
        hints: ['Sett diskriminanten lik null.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-8-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-1-8-ex-6',
        number: '1.8.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En ball kastes opp fra bakken med en starthastighet på 20 m/s. Høyden etter $t$ sekunder er gitt ved $h(t) = 20t - 5t^2$.',
        subTasks: [
          { label: 'a', task: 'Når er ballen på 15 meters hoeyde?', solution: '$20t - 5t^2 = 15 \\Rightarrow t^2 - 4t + 3 = 0 \\Rightarrow (t - 1)(t - 3) = 0$. Ballen er på 15 m etter $t = 1$ s (på vei opp) og $t = 3$ s (på vei ned).' },
          { label: 'b', task: 'Finn den maksimale høyden.', solution: '$t_T = \\frac{20}{10} = 2$ s. $h(2) = 40 - 20 = 20$ m.' },
          { label: 'c', task: 'Når treffer ballen bakken igjen?', solution: '$20t - 5t^2 = 0 \\Rightarrow 5t(4 - t) = 0 \\Rightarrow t = 0$ eller $t = 4$. Ballen treffer bakken etter 4 sekunder.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.9: Potens- og eksponentialfunksjoner
// ============================================================================

export const CHAPTER_S1_1_9: TextbookChapter = {
  id: 's1-1-9',
  courseId: 's1',
  chapterNumber: '1.9',
  title: 'Potens- og eksponentialfunksjoner',
  description: 'Potensfunksjoner f(x)=ax^n, eksponentialfunksjoner f(x)=a*b^x, vekstfaktor, halvering, dobling og sammenligning av vekstmodeller.',
  estimatedMinutes: 55,
  competenceGoals: [
    'modellere eksponentiell vekst og avtagning',
    'bruke vekstfaktor til å beregne prosentvis endring',
    'sammenligne lineær og eksponentiell vekst',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-1-9-intro',
      type: 'text',
      content: `## Eksponentiell vekst og avtagning

Mange størrelser i virkeligheten vokser eller avtar med en fast **prosentandel** per tidsenhet, i stedet for et fast **beloep** per tidsenhet. Slik vekst kalles **eksponentiell**.

**Eksempler på eksponentiell vekst/avtagning:**
- Befolkningsvekst (f.eks. 1,2 % per år)
- Renter på sparekonto (f.eks. 3 % per år)
- Radioaktiv nedbryting (f.eks. halvering hvert 5730. år for karbon-14)
- Inflasjonseffekt (f.eks. 2,5 % per år)

Den viktigste forskjellen fra lineær vekst er at endringen er **proporsjonal med naaværende verdi**, ikke konstant.`,
    },

    // ========== POTENSFUNKSJONER ==========
    {
      id: 's1-1-9-potensfunksjoner',
      type: 'definition',
      title: 'Potensfunksjoner',
      content: `En **potensfunksjon** har formen:

$$f(x) = a \\cdot x^n$$

der $a$ er en konstant og $n$ er eksponenten (kan være et hvilket som helst reelt tall).

**Viktige potensfunksjoner:**
- $n = 1$: lineær funksjon ($f(x) = ax$)
- $n = 2$: kvadratisk funksjon ($f(x) = ax^2$)
- $n = -1$: omvendt proporsjonal ($f(x) = \\frac{a}{x}$)
- $n = \\frac{1}{2}$: rotfunksjon ($f(x) = a\\sqrt{x}$)

I potensfunksjoner er **variabelen grunntallet**, mens i eksponentialfunksjoner er **variabelen eksponenten**.`,
    },

    // ========== VEKSTFAKTOR ==========
    {
      id: 's1-1-9-vekstfaktor',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `Når en størrelse endres med $p\\%$ per tidsenhet, er **vekstfaktoren**:

$$v = 1 + \\frac{p}{100}$$

- **Vekst** ($p > 0$): $v > 1$. F.eks. 5 % økning gir $v = 1{,}05$.
- **Avtagning** ($p < 0$): $0 < v < 1$. F.eks. 3 % nedgang gir $v = 0{,}97$.

Etter $n$ tidsperioder med startverdi $y_0$ er verdien:

$$y(n) = y_0 \\cdot v^n$$`,
    },

    {
      id: 's1-1-9-eksponentiell',
      type: 'text',
      content: `## Eksponentialfunksjoner

En **eksponentialfunksjon** har formen:

$$f(x) = a \\cdot b^x, \\quad a \\neq 0, \\quad b > 0, \\quad b \\neq 1$$

Her er:
- $a$ = startverdien ($f(0) = a$)
- $b$ = vekstfaktoren (grunntallet)

For $b > 1$ er funksjonen **voksende** (eksponentiell vekst).
For $0 < b < 1$ er funksjonen **avtagende** (eksponentiell avtagning).

**Viktige egenskaper:**
- Grafen passerer alltid gjennom $(0, a)$
- $x$-aksen ($y = 0$) er en **horisontal asymptote**
- Funksjonen er alltid positiv (når $a > 0$) eller alltid negativ (når $a < 0$)`,
    },

    // ========== DOBLING OG HALVERING ==========
    {
      id: 's1-1-9-dobling-halvering',
      type: 'theorem',
      title: 'Doblingstid og halveringstid',
      content: `**Doblingstid** $T_2$: Tiden det tar for verdien å doble seg. Oppfyller $v^{T_2} = 2$:

$$T_2 = \\frac{\\ln 2}{\\ln v} = \\frac{\\log 2}{\\log v}$$

**Halveringstid** $T_{1/2}$: Tiden det tar for verdien å halveres. Oppfyller $v^{T_{1/2}} = \\frac{1}{2}$:

$$T_{1/2} = \\frac{\\ln(1/2)}{\\ln v} = \\frac{-\\ln 2}{\\ln v}$$

**Tommelfingerregel:** For lav prosentvis vekst (under ca. 15 %) gjelder tilnærmelsen $T_2 \\approx \\frac{70}{p}$, der $p$ er vekstraten i prosent.`,
    },

    {
      id: 's1-1-9-example-1',
      type: 'example',
      title: 'Eksempel 1: Befolkningsvekst',
      problem: 'En by har 50 000 innbyggere og vokser med 2 % per år. a) Sett opp en modell for innbyggertallet etter $t$ år. b) Hvor mange innbyggere har byen etter 10 år? c) Finn doblingstiden.',
      solution: `**Løsning:**

**a)** Vekstfaktor: $v = 1 + \\frac{2}{100} = 1{,}02$.

Modell: $N(t) = 50\\,000 \\cdot 1{,}02^t$

**b)** Etter 10 år:
$$N(10) = 50\\,000 \\cdot 1{,}02^{10} = 50\\,000 \\cdot 1{,}2190 \\approx 60\\,950$$

Byen har ca. 60 950 innbyggere etter 10 år.

**c)** Doblingstid:
$$T_2 = \\frac{\\ln 2}{\\ln 1{,}02} = \\frac{0{,}6931}{0{,}0198} \\approx 35 \\text{ år}$$

Tommelfingerregel: $T_2 \\approx \\frac{70}{2} = 35$ år. ✓`,
    },

    {
      id: 's1-1-9-example-2',
      type: 'example',
      title: 'Eksempel 2: Radioaktiv nedbryting',
      problem: 'Et radioaktivt stoff har en halveringstid på 8 timer. Ved start er det 200 gram. a) Sett opp en modell for mengden etter $t$ timer. b) Hvor mye stoff er igjen etter 24 timer?',
      solution: `**Løsning:**

**a)** Etter en halveringstid (8 timer) er mengden halvert, altså $v^8 = \\frac{1}{2}$.

Vekstfaktor per time: $v = \\left(\\frac{1}{2}\\right)^{1/8} = 2^{-1/8} \\approx 0{,}9170$

Modell: $M(t) = 200 \\cdot 0{,}9170^t$

Alternativt: $M(t) = 200 \\cdot \\left(\\frac{1}{2}\\right)^{t/8}$

**b)** Etter 24 timer:
$$M(24) = 200 \\cdot \\left(\\frac{1}{2}\\right)^{24/8} = 200 \\cdot \\left(\\frac{1}{2}\\right)^3 = 200 \\cdot \\frac{1}{8} = 25 \\text{ gram}$$

Det er 25 gram igjen etter 24 timer (3 halveringstider).`,
    },

    // ========== LINEÆR VS. EKSPONENTIELL ==========
    {
      id: 's1-1-9-sammenligning',
      type: 'text',
      content: `## Lineær vs. eksponentiell vekst

| | Lineær vekst | Eksponentiell vekst |
|---|---|---|
| **Formel** | $f(x) = ax + b$ | $f(x) = a \\cdot b^x$ |
| **Endring** | Konstant tillegg per steg | Konstant faktor per steg |
| **Differanse** | $f(x+1) - f(x) = a$ | $f(x+1) - f(x)$ varierer |
| **Kvotient** | $\\frac{f(x+1)}{f(x)}$ varierer | $\\frac{f(x+1)}{f(x)} = b$ |
| **Grafisk** | Rett linje | Kurve (vokser/avtar stadig raskere) |

**Hvordan gjenkjenne veksttype fra data:**
- Dersom **differansene** $f(x+1) - f(x)$ er (tilnærmet) konstante, er veksten lineær.
- Dersom **kvotientene** $\\frac{f(x+1)}{f(x)}$ er (tilnærmet) konstante, er veksten eksponentiell.`,
    },

    {
      id: 's1-1-9-example-3',
      type: 'example',
      title: 'Eksempel 3: Lineær eller eksponentiell?',
      problem: `To spareplaner starter med 10 000 kr.

**Plan A:** Sparer 1 000 kr ekstra hvert år.
**Plan B:** Beloppet øker med 8 % per år.

Sammenlign verdiene etter 5, 10 og 20 år.`,
      solution: `**Løsning:**

**Plan A (lineær):** $A(t) = 10\\,000 + 1\\,000t$

**Plan B (eksponentiell):** $B(t) = 10\\,000 \\cdot 1{,}08^t$

| År | Plan A | Plan B |
|---|---|---|
| 0 | 10 000 | 10 000 |
| 5 | 15 000 | 14 693 |
| 10 | 20 000 | 21 589 |
| 20 | 30 000 | 46 610 |

**Konklusjon:** Plan A er bedre de første aarene, men Plan B tar igjen og vokser langt raskere over tid. Etter 20 år er Plan B mer enn 50 % høyere enn Plan A. Dette illustrerer "rentes rente"-effekten.`,
    },

    {
      id: 's1-1-9-tip',
      type: 'tip',
      content: 'Når du skal avgjore om data følger lineær eller eksponentiell vekst, beregn både differanser og kvotienter. Er differansene konstante? Da er veksten lineær. Er kvotientene konstante? Da er veksten eksponentiell.',
    },

    // ========== OPPGAVER ==========
    {
      id: 's1-1-9-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-1-9-ex-1',
        number: '1.9.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vekstfaktoren.',
        subTasks: [
          { label: 'a', task: 'En pris øker med 5 % per år.', solution: '$v = 1 + \\frac{5}{100} = 1{,}05$.' },
          { label: 'b', task: 'En verdi synker med 12 % per år.', solution: '$v = 1 - \\frac{12}{100} = 0{,}88$.' },
          { label: 'c', task: 'En investering gir 0,3 % rente per maaned.', solution: '$v = 1{,}003$ per maaned.' },
          { label: 'd', task: 'En populasjon reduseres med 25 % per tiår.', solution: '$v = 1 - \\frac{25}{100} = 0{,}75$ per tiår.' },
        ],
        solution: 'a) $1{,}05$, b) $0{,}88$, c) $1{,}003$, d) $0{,}75$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-9-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-1-9-ex-2',
        number: '1.9.2',
        type: 'classic',
        difficulty: 'lett',
        task: `Et maleri er verdsatt til 80 000 kr og verdien øker med 6 % per år.`,
        subTasks: [
          { label: 'a', task: 'Sett opp en modell for verdien $V(t)$ etter $t$ år.', solution: '$V(t) = 80\\,000 \\cdot 1{,}06^t$.' },
          { label: 'b', task: 'Hva er verdien etter 15 år?', solution: '$V(15) = 80\\,000 \\cdot 1{,}06^{15} = 80\\,000 \\cdot 2{,}3966 \\approx 191\\,730$ kr.' },
          { label: 'c', task: 'Finn doblingstiden.', solution: '$T_2 = \\frac{\\ln 2}{\\ln 1{,}06} \\approx \\frac{0{,}693}{0{,}0583} \\approx 11{,}9$ år.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-9-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-1-9-ex-3',
        number: '1.9.3',
        type: 'classic',
        difficulty: 'medium',
        task: `En bil koster 350 000 kr ny og mister 15 % av verdien per år (verdiforringelse).`,
        subTasks: [
          { label: 'a', task: 'Sett opp en modell for bilens verdi $V(t)$ etter $t$ år.', solution: '$V(t) = 350\\,000 \\cdot 0{,}85^t$.' },
          { label: 'b', task: 'Hva er bilen verdt etter 5 år?', solution: '$V(5) = 350\\,000 \\cdot 0{,}85^5 = 350\\,000 \\cdot 0{,}4437 \\approx 155\\,300$ kr.' },
          { label: 'c', task: 'Etter hvor mange år er bilen verdt mindre enn 100 000 kr?', solution: '$350\\,000 \\cdot 0{,}85^t < 100\\,000 \\Rightarrow 0{,}85^t < \\frac{2}{7} \\Rightarrow t > \\frac{\\ln(2/7)}{\\ln 0{,}85} \\approx 7{,}7$. Etter 8 år.' },
        ],
        hints: ['Bruk logaritmer for å løse eksponentiallikninger.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-9-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-1-9-ex-4',
        number: '1.9.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjor om tabellen viser lineær eller eksponentiell vekst, og finn funksjonsuttrykket.',
        subTasks: [
          {
            label: 'a',
            task: '| $x$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $f(x)$ | 5 | 15 | 45 | 135 | 405 |',
            solution: 'Kvotient: $\\frac{15}{5} = \\frac{45}{15} = \\frac{135}{45} = 3$. Eksponentiell med $b = 3$ og $a = 5$. $f(x) = 5 \\cdot 3^x$.',
          },
          {
            label: 'b',
            task: '| $x$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $g(x)$ | 8 | 14 | 20 | 26 | 32 |',
            solution: 'Differanse: $14 - 8 = 20 - 14 = 6$. Lineær med $a = 6$ og $b = 8$. $g(x) = 6x + 8$.',
          },
        ],
        hints: ['Beregn differansene $f(x+1) - f(x)$ og kvotientene $f(x+1)/f(x)$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-9-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-1-9-ex-5',
        number: '1.9.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bakteriekultur dobler seg hver 3. time. Ved start er det 500 bakterier.',
        subTasks: [
          { label: 'a', task: 'Sett opp en modell $N(t)$ for antall bakterier etter $t$ timer.', solution: '$N(t) = 500 \\cdot 2^{t/3}$.' },
          { label: 'b', task: 'Hvor mange bakterier er det etter 12 timer?', solution: '$N(12) = 500 \\cdot 2^{12/3} = 500 \\cdot 2^4 = 500 \\cdot 16 = 8000$.' },
          { label: 'c', task: 'Når er det 64 000 bakterier?', solution: '$500 \\cdot 2^{t/3} = 64\\,000 \\Rightarrow 2^{t/3} = 128 = 2^7 \\Rightarrow t/3 = 7 \\Rightarrow t = 21$ timer.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-1-9-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-1-9-ex-6',
        number: '1.9.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Grafen til en eksponentialfunksjon $f(x) = a \\cdot b^x$ går gjennom punktene $(2, 12)$ og $(5, 96)$. Finn $a$ og $b$.',
        solution: '$f(2) = ab^2 = 12$ og $f(5) = ab^5 = 96$. Deler: $\\frac{ab^5}{ab^2} = b^3 = \\frac{96}{12} = 8 \\Rightarrow b = 2$. Dermed $a \\cdot 4 = 12 \\Rightarrow a = 3$. Altså $f(x) = 3 \\cdot 2^x$.',
        hints: ['Del den ene likningen på den andre for å eliminere $a$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.7: Delte funksjonsuttrykk og absoluttverdifunksjoner
// ============================================================================

export const CHAPTER_S1_2_7: TextbookChapter = {
  id: 's1-2-7',
  courseId: 's1',
  chapterNumber: '2.7',
  title: 'Delte funksjonsuttrykk og absoluttverdifunksjoner',
  description: 'Stykkevis definerte funksjoner, absoluttverdifunksjon |x|, grafisk fremstilling, kontinuitet og praktiske anvendelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og tegne grafer til stykkevis definerte funksjoner',
    'forstaa sammenhengen mellom absoluttverdifunksjoner og stykkevise definisjoner',
    'vurdere kontinuitet i overgangspunkter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-2-7-intro',
      type: 'text',
      content: `## Stykkevis definerte funksjoner

En **stykkevis definert funksjon** bruker ulike funksjonsuttrykk på ulike deler av definisjonsmengden. Slike funksjoner er svaert vanlige i praktiske sammenhenger, for eksempel i prismodeller, skattesystemer og fysiske fenomener.

Formelt skriver vi en stykkevis funksjon slik:

$$f(x) = \\begin{cases} f_1(x) & \\text{for } x \\in I_1 \\\\ f_2(x) & \\text{for } x \\in I_2 \\\\ \\vdots & \\vdots \\end{cases}$$

der $I_1, I_2, \\ldots$ er intervaller som til sammen dekker definisjonsmengden.`,
    },

    // ========== TEGNING AV GRAF ==========
    {
      id: 's1-2-7-tegning',
      type: 'text',
      content: `## Tegning av stykkevis definerte funksjoner

Når vi tegner grafen til en stykkevis funksjon:

1. **Del opp $x$-aksen** i de ulike intervallene.
2. **Tegn hvert deluttrykk** kun på sitt intervall.
3. **Sjekk grensepunktene:** Er funksjonen definert i overgangen? Bruk fylt sirkel for inkluderte endepunkter og aapen sirkel for ekskluderte.
4. **Vurder kontinuitet:** Er grafen sammenhengende, eller gjor den et hopp?

En stykkevis funksjon er **kontinuerlig** i et grensepunkt $x_0$ dersom:

$$\\lim_{x \\to x_0^-} f(x) = \\lim_{x \\to x_0^+} f(x) = f(x_0)$$

Det vil si at funksjonsuttrykkene gir **samme verdi** i overgangspunktet.`,
    },

    // ========== KONTINUITET ==========
    {
      id: 's1-2-7-kontinuitet-def',
      type: 'definition',
      title: 'Kontinuitet i overgangspunkter',
      content: `En stykkevis definert funksjon er **kontinuerlig** i et overgangspunkt $x = c$ dersom:

1. $f(c)$ er definert
2. Grenseverdien fra venstre $\\lim_{x \\to c^-} f(x)$ eksisterer
3. Grenseverdien fra høyre $\\lim_{x \\to c^+} f(x)$ eksisterer
4. Alle tre verdiene er like: $\\lim_{x \\to c^-} f(x) = f(c) = \\lim_{x \\to c^+} f(x)$

Dersom funksjonen **ikke** er kontinuerlig i $x = c$, sier vi at den har et **diskontinuitetspunkt** (sprang) der.`,
    },

    {
      id: 's1-2-7-example-1',
      type: 'example',
      title: 'Eksempel 1: Stykkevis lineær funksjon',
      problem: `Tegn grafen og undersoek kontinuitet for:

$$f(x) = \\begin{cases} 2x + 1 & \\text{for } x < 1 \\\\ 4 - x & \\text{for } x \\geq 1 \\end{cases}$$`,
      solution: `**Løsning:**

**For $x < 1$:** $f(x) = 2x + 1$ er en stigende linje.
Ved grensepunktet: $\\lim_{x \\to 1^-} f(x) = 2(1) + 1 = 3$.

**For $x \\geq 1$:** $f(x) = 4 - x$ er en synkende linje.
$f(1) = 4 - 1 = 3$.

**Kontinuitet i $x = 1$:**
$$\\lim_{x \\to 1^-} f(x) = 3 = f(1) = \\lim_{x \\to 1^+} f(x)$$

Funksjonen **er kontinuerlig** i $x = 1$. Grafen er en sammenhengende "knekk" i punktet $(1, 3)$.

- For $x < 1$: linja stiger med stigningstall 2
- For $x \\geq 1$: linja synker med stigningstall $-1$
- $y$-akseskjaering: $f(0) = 1$`,
    },

    // ========== ABSOLUTTVERDIFUNKSJONER ==========
    {
      id: 's1-2-7-absolutt',
      type: 'definition',
      title: 'Absoluttverdifunksjonen som stykkevis funksjon',
      content: `**Absoluttverdifunksjonen** $f(x) = |x|$ kan skrives som en stykkevis definert funksjon:

$$|x| = \\begin{cases} x & \\text{for } x \\geq 0 \\\\ -x & \\text{for } x < 0 \\end{cases}$$

Mer generelt, for et uttrykk $g(x)$:

$$|g(x)| = \\begin{cases} g(x) & \\text{for } g(x) \\geq 0 \\\\ -g(x) & \\text{for } g(x) < 0 \\end{cases}$$

Grafen til $y = |g(x)|$ er lik grafen til $y = g(x)$ der $g(x) \\geq 0$, og speilbildet om $x$-aksen der $g(x) < 0$.`,
    },

    {
      id: 's1-2-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Absoluttverdifunksjon som stykkevis',
      problem: 'Skriv $f(x) = |2x - 4|$ som en stykkevis definert funksjon og tegn grafen.',
      solution: `**Løsning:**

Vi finner nullpunktet til $2x - 4$: $2x - 4 = 0 \\Rightarrow x = 2$.

$$f(x) = |2x - 4| = \\begin{cases} 2x - 4 & \\text{for } x \\geq 2 \\\\ -(2x - 4) = -2x + 4 & \\text{for } x < 2 \\end{cases}$$

**Grafbeskrivelse:**
- For $x < 2$: linja $y = -2x + 4$ (synker med stigningstall $-2$)
- For $x \\geq 2$: linja $y = 2x - 4$ (stiger med stigningstall $2$)
- Grafen har en V-form med bunnpunkt i $(2, 0)$
- $y$-akseskjaering: $f(0) = |0 - 4| = 4$
- Funksjonen er kontinuerlig overalt (også i $x = 2$)`,
    },

    // ========== PRAKTISKE ANVENDELSER ==========
    {
      id: 's1-2-7-praktisk',
      type: 'text',
      content: `## Praktiske anvendelser

Stykkevis definerte funksjoner dukker opp i mange praktiske sammenhenger:

**Prissystemer med trinnvise satser:**
Mange avgifter og priser har ulike satser for ulike nivaaer, for eksempel stroempris, mobilabonnement eller porto.

**Skattesystemer:**
I Norge beregnes skatt med ulike satser for ulike inntektsintervaller (trinnskatt). Inntekten deles opp i trinn med stigende skattesatser.

**Absoluttverdifunksjoner i optimalisering:**
Absoluttverdien $|x - a|$ representerer **avstanden** mellom $x$ og $a$ på tallinja. Dermed brukes absoluttverdifunksjoner til å minimere avstander og avvik.`,
    },

    {
      id: 's1-2-7-example-3',
      type: 'example',
      title: 'Eksempel 3: Stykkevis prisfunksjon',
      problem: `Et parkeringshus tar betaling slik:
- De første 2 timene: 30 kr per time
- Fra 2 til 5 timer: 20 kr per time (i tillegg til de første timene)
- Over 5 timer: fast pris på 120 kr (dagstak)

Sett opp prisfunksjonen $P(t)$ og tegn grafen.`,
      solution: `**Løsning:**

**For $0 \\leq t \\leq 2$:** $P(t) = 30t$

**For $2 < t \\leq 5$:** Prisen etter 2 timer er $30 \\cdot 2 = 60$ kr. Deretter 20 kr per ekstra time:
$$P(t) = 60 + 20(t - 2) = 20t + 20$$

**For $t > 5$:** $P(t) = 120$

Altsaa:
$$P(t) = \\begin{cases} 30t & \\text{for } 0 \\leq t \\leq 2 \\\\ 20t + 20 & \\text{for } 2 < t \\leq 5 \\\\ 120 & \\text{for } t > 5 \\end{cases}$$

**Kontroll av kontinuitet:**
- I $t = 2$: $30 \\cdot 2 = 60$ og $20 \\cdot 2 + 20 = 60$ ✓ (kontinuerlig)
- I $t = 5$: $20 \\cdot 5 + 20 = 120$ og $120$ ✓ (kontinuerlig)

Prisfunksjonen er kontinuerlig. Grafen er en sammenhengende, stykkevis lineær kurve som flater ut etter 5 timer.`,
    },

    {
      id: 's1-2-7-note',
      type: 'note',
      content: 'Når du tegner en stykkevis funksjon, husk å markere overgangspunktene tydelig. Bruk fylte sirkler for inkluderte endepunkter og åpne sirkler for ekskluderte endepunkter. Dette er spesielt viktig når funksjonen har diskontinuitetspunkter.',
    },

    // ========== OPPGAVER ==========
    {
      id: 's1-2-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-2-7-ex-1',
        number: '2.7.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv absoluttverdifunksjonen som en stykkevis definert funksjon.',
        subTasks: [
          {
            label: 'a',
            task: '$f(x) = |x + 3|$',
            solution: '$f(x) = \\begin{cases} x + 3 & \\text{for } x \\geq -3 \\\\ -x - 3 & \\text{for } x < -3 \\end{cases}$',
          },
          {
            label: 'b',
            task: '$g(x) = |5 - x|$',
            solution: '$g(x) = \\begin{cases} 5 - x & \\text{for } x \\leq 5 \\\\ x - 5 & \\text{for } x > 5 \\end{cases}$',
          },
          {
            label: 'c',
            task: '$h(x) = |3x - 6| + 2$',
            solution: '$h(x) = \\begin{cases} 3x - 6 + 2 = 3x - 4 & \\text{for } x \\geq 2 \\\\ -3x + 6 + 2 = -3x + 8 & \\text{for } x < 2 \\end{cases}$',
          },
        ],
        hints: ['Finn nullpunktet til uttrykket inni absoluttverdien.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-2-7-ex-2',
        number: '2.7.2',
        type: 'classic',
        difficulty: 'lett',
        task: `Gitt funksjonen:

$$f(x) = \\begin{cases} x^2 & \\text{for } x < 2 \\\\ 6 - x & \\text{for } x \\geq 2 \\end{cases}$$`,
        subTasks: [
          { label: 'a', task: 'Finn $f(0)$, $f(2)$ og $f(5)$.', solution: '$f(0) = 0^2 = 0$, $f(2) = 6 - 2 = 4$, $f(5) = 6 - 5 = 1$.' },
          { label: 'b', task: 'Er $f$ kontinuerlig i $x = 2$?', solution: '$\\lim_{x \\to 2^-} f(x) = 2^2 = 4$ og $f(2) = 6 - 2 = 4$. Ja, $f$ er kontinuerlig i $x = 2$.' },
          { label: 'c', task: 'Tegn grafen til $f$.', solution: 'For $x < 2$: parabel $y = x^2$. For $x \\geq 2$: rett linje $y = 6 - x$. De møtes i $(2, 4)$.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-2-7-ex-3',
        number: '2.7.3',
        type: 'classic',
        difficulty: 'medium',
        task: `Gitt funksjonen:

$$g(x) = \\begin{cases} 2x + 1 & \\text{for } x < 1 \\\\ ax + b & \\text{for } x \\geq 1 \\end{cases}$$

Bestem $a$ og $b$ slik at $g$ er kontinuerlig i $x = 1$ og $g(3) = 10$.`,
        solution: `Kontinuitet i $x = 1$: $\\lim_{x \\to 1^-} g(x) = 2(1) + 1 = 3 = a(1) + b$, altså $a + b = 3$.

$g(3) = 10$: $3a + b = 10$.

Trekker: $2a = 7 \\Rightarrow a = 3{,}5$. $b = 3 - 3{,}5 = -0{,}5$.

**Svar:** $a = 3{,}5$ og $b = -0{,}5$, altså $g(x) = 3{,}5x - 0{,}5$ for $x \\geq 1$.`,
        hints: ['Sett opp to likninger: en fra kontinuitetskravet og en fra $g(3) = 10$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-2-7-ex-4',
        number: '2.7.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En mobiloperatoer tilbyr følgende priser for databruk per maaned:
- De første 5 GB: gratis (inkludert i abonnementet)
- Fra 5 GB til 20 GB: 15 kr per GB
- Over 20 GB: 25 kr per GB (i tillegg)`,
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp en stykkevis funksjon $K(x)$ for ekstra datakostnad (utover abonnementet) som funksjon av databruk $x$ (i GB).',
            solution: '$K(x) = \\begin{cases} 0 & \\text{for } 0 \\leq x \\leq 5 \\\\ 15(x - 5) & \\text{for } 5 < x \\leq 20 \\\\ 15 \\cdot 15 + 25(x - 20) = 225 + 25(x - 20) & \\text{for } x > 20 \\end{cases}$',
          },
          {
            label: 'b',
            task: 'Hva koster det ekstra å bruke 12 GB?',
            solution: '$K(12) = 15(12 - 5) = 15 \\cdot 7 = 105$ kr.',
          },
          {
            label: 'c',
            task: 'Hva koster det ekstra å bruke 30 GB?',
            solution: '$K(30) = 225 + 25(30 - 20) = 225 + 250 = 475$ kr.',
          },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-7-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-2-7-ex-5',
        number: '2.7.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Gitt funksjonen:

$$h(x) = \\begin{cases} x + 4 & \\text{for } x < -1 \\\\ x^2 & \\text{for } -1 \\leq x \\leq 2 \\\\ 2x & \\text{for } x > 2 \\end{cases}$$`,
        subTasks: [
          { label: 'a', task: 'Beregn $h(-3)$, $h(-1)$, $h(0)$, $h(2)$ og $h(3)$.', solution: '$h(-3) = -3 + 4 = 1$, $h(-1) = (-1)^2 = 1$, $h(0) = 0$, $h(2) = 4$, $h(3) = 6$.' },
          { label: 'b', task: 'Er $h$ kontinuerlig i $x = -1$?', solution: '$\\lim_{x \\to -1^-} h(x) = -1 + 4 = 3$ og $h(-1) = 1$. Nei, $3 \\neq 1$, så $h$ er **ikke** kontinuerlig i $x = -1$.' },
          { label: 'c', task: 'Er $h$ kontinuerlig i $x = 2$?', solution: '$\\lim_{x \\to 2^-} h(x) = 2^2 = 4$ og $\\lim_{x \\to 2^+} h(x) = 2 \\cdot 2 = 4$ og $h(2) = 4$. Ja, $h$ er kontinuerlig i $x = 2$.' },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-7-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-2-7-ex-6',
        number: '2.7.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Loes likningen $|2x - 1| = |x + 3|$ ved å skrive begge sider som stykkevise funksjoner.',
        solution: `Nullpunkter: $2x - 1 = 0 \\Rightarrow x = \\frac{1}{2}$ og $x + 3 = 0 \\Rightarrow x = -3$. Del opp i tre intervaller:

**$x < -3$:** $-(2x - 1) = -(x + 3) \\Rightarrow -2x + 1 = -x - 3 \\Rightarrow x = 4$. Ikke i intervallet.

**$-3 \\leq x < \\frac{1}{2}$:** $-(2x - 1) = x + 3 \\Rightarrow -2x + 1 = x + 3 \\Rightarrow x = -\\frac{2}{3}$. Gyldig.

**$x \\geq \\frac{1}{2}$:** $2x - 1 = x + 3 \\Rightarrow x = 4$. Gyldig.

**Svar:** $x = -\\frac{2}{3}$ eller $x = 4$.`,
        hints: ['Finn nullpunktene til begge uttrykkene inni absoluttverdiene, og del opp i intervaller.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};
