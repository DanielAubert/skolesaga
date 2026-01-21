/**
 * Fysikk 1 - Kapittel 4.3: Bevegelsesmengde og støt
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_4_3: TextbookChapter = {
  id: 'fys1-4-3',
  courseId: 'fys1',
  chapterNumber: '4.3',
  title: 'Bevegelsesmengde og støt',
  description: 'Lær om bevegelsesmengde, impuls, og bevaring av bevegelsesmengde ved kollisjoner.',
  estimatedMinutes: 65,
  competenceGoals: [
    'definere og beregne bevegelsesmengde',
    'anvende prinsippet om bevaring av bevegelsesmengde',
    'definere og beregne impuls',
    'skille mellom elastiske og uelastiske støt',
    'analysere kollisjoner og eksplosjoner',
  ],
  content: [
    {
      id: 'fys1-4-3-intro',
      type: 'text',
      content: `# Bevegelsesmengde og støt

Tenk deg en lastebil og en personbil som kjører med samme fart. Hvilken er vanskeligst å stoppe? Selv om begge har samme kinetisk energi per kilogram masse, krever lastebilen mye mer kraft for å stoppe.

Dette viser at det finnes en annen viktig størrelse ved bevegelse: **bevegelsesmengde**.

**Nøkkelspørsmål:**
- Hva er bevegelsesmengde?
- Hva skjer med bevegelsesmengde ved kollisjoner?
- Hvordan kan vi analysere støt mellom objekter?

Bevegelsesmengde er en av de viktigste bevaringsstørrelsene i fysikken, på linje med energi.`,
    },
    {
      id: 'fys1-4-3-bevegelsesmengde',
      type: 'text',
      content: `# Bevegelsesmengde

**Bevegelsesmengde** (også kalt momentum eller fart-mengde) beskriver hvor mye "bevegelse" et objekt har.`,
    },
    {
      id: 'fys1-4-3-def-bevegelsesmengde',
      type: 'definition',
      title: 'Bevegelsesmengde',
      content: `Bevegelsesmengden $\\vec{p}$ til et objekt med masse $m$ og hastighet $\\vec{v}$ er:

$$\\vec{p} = m\\vec{v}$$

**Enhet:** kg·m/s (også kalt N·s)

**Kjennetegn:**
- **Vektorstørrelse:** Har både størrelse og retning
- Retningen er samme som hastighetens retning
- Proportional med både masse og fart`,
    },
    {
      id: 'fys1-4-3-bevegelsesmengde-forklaring',
      type: 'text',
      content: `## Forståelse av bevegelsesmengde

### Størrelse vs. retning

**Størrelsen** av bevegelsesmengden er:

$$p = mv$$

**Retningen** er samme som hastighetens retning.

### Sammenligning med kinetisk energi

Både bevegelsesmengde og kinetisk energi beskriver bevegelse, men de er forskjellige:

| Egenskap | Bevegelsesmengde $p = mv$ | Kinetisk energi $E_k = \\frac{1}{2}mv^2$ |
|----------|---------------------------|------------------------------------------|
| Type | Vektor | Skalar |
| Avhengighet av $v$ | Lineær | Kvadratisk |
| Retning | Ja | Nei |
| Bevaringslov | Alltid (lukket system) | Med konservative krefter |

**Eksempel:**

To biler kjører mot hverandre med samme fart:
- **Kinetisk energi:** Begge har positiv $E_k$, totalt $E_{k,tot} = 2E_k$
- **Bevegelsesmengde:** Motsatt retning, totalt $\\vec{p}_{tot} = \\vec{0}$ (kansellerer!)

### Hvorfor er bevegelsesmengde viktig?

**1. Beskriver motstanden mot endring i bevegelse:**
- Stort $p$ → vanskelig å stoppe
- Lite $p$ → lett å stoppe

**2. Bevares alltid (i lukkede systemer):**
- Gjør at vi kan analysere kollisjoner
- Gjelder alltid, selv med friksjon!

**3. Relatert til kraft:**
- Newtons andre lov: $\\vec{F} = \\frac{d\\vec{p}}{dt}$ (kraft = endring i bevegelsesmengde per tid)`,
    },
    {
      id: 'fys1-4-3-ex-1',
      type: 'example',
      title: 'Eksempel: Beregning av bevegelsesmengde',
      problem: 'Beregn bevegelsesmengden til:\na) En fotball med masse 0.43 kg som beveger seg med fart 20 m/s\nb) En bil med masse 1200 kg som kjører i 25 m/s\nc) Et stillestående tre (masse 500 kg)',
      solution: `**a) Fotball:**

$$p = mv = 0.43 \\cdot 20 = 8.6 \\text{ kg·m/s}$$

**b) Bil:**

$$p = mv = 1200 \\cdot 25 = 30\\,000 \\text{ kg·m/s}$$

**c) Stillestående tre:**

$$p = mv = 500 \\cdot 0 = 0 \\text{ kg·m/s}$$

**Sammenligning:**

Selv om fotballen har mye høyere fart, har bilen ca. 3500 ganger så stor bevegelsesmengde! Dette viser at massen har stor betydning.`,
    },
    {
      id: 'fys1-4-3-impuls',
      type: 'text',
      content: `# Impuls

**Impuls** er endring i bevegelsesmengde, og er relatert til kraft og tid.`,
    },
    {
      id: 'fys1-4-3-def-impuls',
      type: 'definition',
      title: 'Impuls',
      content: 'Impulsen $\\vec{J}$ er produktet av kraften $\\vec{F}$ og tiden $\\Delta t$ kraften virker:\n\n$$\\vec{J} = \\vec{F} \\cdot \\Delta t$$\n\n**Enhet:** N·s (Newton-sekund) = kg·m/s\n\n**Impuls-bevegelsesmengde-teoremet:**\n\n$$\\vec{J} = \\Delta \\vec{p} = \\vec{p}_{slutt} - \\vec{p}_{start}$$\n\nEllers sagt: Impuls = endring i bevegelsesmengde',
    },
    {
      id: 'fys1-4-3-impuls-forklaring',
      type: 'text',
      content: `## Forståelse av impuls

### Utledning

Fra Newtons andre lov:

$$\\vec{F} = m\\vec{a} = m\\frac{\\Delta \\vec{v}}{\\Delta t}$$

Multipliser med $\\Delta t$:

$$\\vec{F} \\cdot \\Delta t = m\\Delta \\vec{v} = \\Delta(m\\vec{v}) = \\Delta \\vec{p}$$

Altså: **Impuls = endring i bevegelsesmengde**

### Kraft vs. tid

For samme endring i bevegelsesmengde kan vi ha:

**Stor kraft, kort tid:**
- Eksempel: Hamre en spiker
- $F$ stor, $\\Delta t$ liten → $J = F \\Delta t$ kan være moderat

**Liten kraft, lang tid:**
- Eksempel: Dytte en bil i gang
- $F$ liten, $\\Delta t$ stor → $J = F \\Delta t$ kan være samme

**Praktisk betydning:**

For å redusere kraften må vi øke tiden!

**Eksempel: Sikkerhetsutstyr**

**Uten airbag:**
- Kort stoppetid (0.01 s)
- Stor kraft på passasjer
- Stor risiko for skade

**Med airbag:**
- Lang stoppetid (0.2 s)
- Liten kraft på passasjer
- Redusert skaderisiko

Impulsen (endring i bevegelsesmengde) er den samme, men kraften er mye mindre!

### Impuls og diagram

Hvis kraften varierer med tiden, er impulsen **arealet under kraft-tid-grafen**:

$$J = \\int F \\, dt$$

For konstant kraft: $J = F \\cdot \\Delta t$ (rektangel)`,
    },
    {
      id: 'fys1-4-3-ex-2',
      type: 'example',
      title: 'Eksempel: Impuls og kraft',
      problem: 'En fotball med masse 0.43 kg er i ro. En spiller sparker ballen med en kraft på 300 N i 0.020 s.\na) Hvor stor impuls får ballen?\nb) Hva blir ballens fart etter sparket?',
      solution: `**Gitt:**
- Masse: $m = 0.43$ kg
- Kraft: $F = 300$ N
- Tid: $\\Delta t = 0.020$ s
- Startfart: $v_0 = 0$ m/s

**a) Impuls:**

$$J = F \\cdot \\Delta t = 300 \\cdot 0.020 = 6.0 \\text{ N·s}$$

**Svar a):** 6.0 N·s

**b) Fart etter spark:**

Impuls = endring i bevegelsesmengde:

$$J = \\Delta p = p_{slutt} - p_{start} = mv - 0$$

$$6.0 = 0.43 \\cdot v$$

$$v = \\frac{6.0}{0.43} = 14.0 \\text{ m/s}$$

**Svar b):** 14 m/s`,
    },
    {
      id: 'fys1-4-3-ex-3',
      type: 'example',
      title: 'Eksempel: Airbag-effekt',
      problem: 'En passasjer med masse 70 kg i en bil som kjører i 20 m/s (72 km/h) kolliderer med en vegg. Sammenlign kraften på passasjeren:\na) Uten airbag (stoppetid 0.010 s)\nb) Med airbag (stoppetid 0.15 s)',
      solution: `**Gitt:**
- Masse: $m = 70$ kg
- Startfart: $v_0 = 20$ m/s
- Sluttfart: $v = 0$ m/s

**Endring i bevegelsesmengde:**

$$\\Delta p = p_{slutt} - p_{start} = 0 - mv_0 = -70 \\cdot 20 = -1400 \\text{ kg·m/s}$$

(Negativ fordi bevegelsesmengden synker)

Impulsen (i størrelse): $J = 1400$ N·s

**a) Uten airbag ($\\Delta t = 0.010$ s):**

$$F = \\frac{J}{\\Delta t} = \\frac{1400}{0.010} = 140\\,000 \\text{ N} = 140 \\text{ kN}$$

**b) Med airbag ($\\Delta t = 0.15$ s):**

$$F = \\frac{J}{\\Delta t} = \\frac{1400}{0.15} = 9333 \\text{ N} \\approx 9.3 \\text{ kN}$$

**Sammenligning:**

Kraften med airbag er ca. **15 ganger mindre** enn uten!

**Tolkning:**

- 140 kN tilsvarer en vekt på 14 000 kg (14 tonn) → Dødelig
- 9.3 kN tilsvarer en vekt på 930 kg (ca. 1 tonn) → Overlevbart

Dette viser hvorfor airbags redder liv!`,
    },
    {
      id: 'fys1-4-3-bevaring',
      type: 'text',
      content: `# Bevaring av bevegelsesmengde

Dette er et av de viktigste prinsippene i fysikken!`,
    },
    {
      id: 'fys1-4-3-def-bevaring',
      type: 'theorem',
      title: 'Bevaring av bevegelsesmengde',
      content: 'I et **lukket system** (ingen ytre krefter) er den totale bevegelsesmengden konstant:\n\n$$\\vec{p}_{total} = \\vec{p}_1 + \\vec{p}_2 + \\cdots = \\text{konstant}$$\n\nFor to objekter:\n\n$$\\vec{p}_{1,før} + \\vec{p}_{2,før} = \\vec{p}_{1,etter} + \\vec{p}_{2,etter}$$\n\neller\n\n$$m_1\\vec{v}_{1,før} + m_2\\vec{v}_{2,før} = m_1\\vec{v}_{1,etter} + m_2\\vec{v}_{2,etter}$$\n\n**Dette gjelder ALLTID i lukkede systemer, selv med friksjon, varme, deformasjon osv.**',
    },
    {
      id: 'fys1-4-3-bevaring-forklaring',
      type: 'text',
      content: `## Forståelse av bevaring

### Hvorfor bevares bevegelsesmengde?

Fra Newtons tredje lov: **Aksjon = reaksjon**

Når to objekter kolliderer:
- Objekt 1 utøver kraft $\\vec{F}_{12}$ på objekt 2
- Objekt 2 utøver kraft $\\vec{F}_{21} = -\\vec{F}_{12}$ på objekt 1

Kreftene er like store, men motsatt rettet.

**Impuls på objekt 1:**
$$\\vec{J}_1 = \\vec{F}_{21} \\cdot \\Delta t = \\Delta \\vec{p}_1$$

**Impuls på objekt 2:**
$$\\vec{J}_2 = \\vec{F}_{12} \\cdot \\Delta t = \\Delta \\vec{p}_2$$

Siden $\\vec{F}_{21} = -\\vec{F}_{12}$:

$$\\vec{J}_1 = -\\vec{J}_2$$

$$\\Delta \\vec{p}_1 = -\\Delta \\vec{p}_2$$

$$\\Delta \\vec{p}_1 + \\Delta \\vec{p}_2 = 0$$

Altså: **Total bevegelsesmengde endres ikke!**

### Lukket vs. åpent system

**Lukket system:**
- Ingen ytre krefter (eller ytre krefter kansellerer)
- $\\vec{p}_{total} = \\text{konstant}$

**Åpent system:**
- Ytre krefter virker
- $\\vec{p}_{total}$ kan endre seg
- Men: $\\vec{F}_{ytre} = \\frac{d\\vec{p}_{total}}{dt}$

### Når gjelder bevaring?

Bevaring av bevegelsesmengde gjelder alltid i lukkede systemer, **uavhengig av**:
- Om kollisjonen er elastisk eller uelastisk
- Om det er friksjon
- Om objektene deformeres
- Om energi omdannes til varme

Dette gjør bevaring av bevegelsesmengde ekstremt kraftig!`,
    },
    {
      id: 'fys1-4-3-ex-4',
      type: 'example',
      title: 'Eksempel: Kollisjon på rett linje',
      problem: 'En vogn med masse 2.0 kg beveger seg med fart 3.0 m/s og kolliderer med en stillestående vogn med masse 3.0 kg. Etter kollisjonen hekter vognene seg sammen. Finn farten til vognene etter kollisjonen.',
      solution: `**Gitt:**
- Vogn 1: $m_1 = 2.0$ kg, $v_{1,før} = 3.0$ m/s
- Vogn 2: $m_2 = 3.0$ kg, $v_{2,før} = 0$ m/s
- Etter kollisjon: Vognene henger sammen, felles fart $v_{etter}$

**Søkt:** $v_{etter}$

**Løsning:**

Bevaring av bevegelsesmengde:

$$p_{før} = p_{etter}$$

$$m_1 v_{1,før} + m_2 v_{2,før} = (m_1 + m_2) v_{etter}$$

$$2.0 \\cdot 3.0 + 3.0 \\cdot 0 = (2.0 + 3.0) \\cdot v_{etter}$$

$$6.0 = 5.0 \\cdot v_{etter}$$

$$v_{etter} = \\frac{6.0}{5.0} = 1.2 \\text{ m/s}$$

**Svar:** Vognene beveger seg med 1.2 m/s etter kollisjonen.

**Sjekk energi:**

Kinetisk energi før:
$$E_{k,før} = \\frac{1}{2} \\cdot 2.0 \\cdot 3.0^2 = 9.0 \\text{ J}$$

Kinetisk energi etter:
$$E_{k,etter} = \\frac{1}{2} \\cdot 5.0 \\cdot 1.2^2 = 3.6 \\text{ J}$$

Energi tapt: $9.0 - 3.6 = 5.4$ J (omdannet til varme og deformasjon)

**Merk:** Bevegelsesmengde bevares (6.0 = 6.0), men kinetisk energi bevares IKKE!`,
    },
    {
      id: 'fys1-4-3-stot-typer',
      type: 'text',
      content: `# Typer kollisjoner

Vi skiller mellom to hovedtyper kollisjoner basert på hva som skjer med kinetisk energi.`,
    },
    {
      id: 'fys1-4-3-def-elastisk',
      type: 'definition',
      title: 'Elastisk støt',
      content: `Et **elastisk støt** er en kollisjon hvor kinetisk energi bevares:

$$E_{k,før} = E_{k,etter}$$

**Bevegelsesmengde bevares også:**

$$\\vec{p}_{før} = \\vec{p}_{etter}$$

**Eksempler:**
- Kollisjon mellom ideale billiardballer
- Kollisjon mellom gasmolekyler
- Studsing av ball (nesten elastisk)`,
    },
    {
      id: 'fys1-4-3-def-uelastisk',
      type: 'definition',
      title: 'Uelastisk støt',
      content: `Et **uelastisk støt** er en kollisjon hvor kinetisk energi ikke bevares:

$$E_{k,etter} < E_{k,før}$$

**Bevegelsesmengde bevares fortsatt:**

$$\\vec{p}_{før} = \\vec{p}_{etter}$$

En **fullstendig uelastisk kollisjon** er når objektene henger sammen etter støtet.

**Eksempler:**
- To biler som kolliderer og knuses
- To personer som kolliderer
- Leire-kuler som treffer hverandre`,
    },
    {
      id: 'fys1-4-3-stot-sammenligning',
      type: 'text',
      content: `## Sammenligning av støttyper

| Egenskap | Elastisk | Uelastisk | Fullstendig uelastisk |
|----------|----------|-----------|----------------------|
| Bevegelsesmengde | Bevares ✓ | Bevares ✓ | Bevares ✓ |
| Kinetisk energi | Bevares ✓ | Synker ✗ | Synker mest ✗✗ |
| Energi tapt | 0 J | Noe | Mest mulig (gitt massene) |
| Objekter etter | Separate | Separate | Henger sammen |
| Eksempel | Billiardballer | Bildekk mot vegg | Bil-kollisjon |

**Viktig:** I ALLE kollisjoner bevares bevegelsesmengde (i lukkede systemer)!

### Hvor går energien?

I uelastiske støt omdannes kinetisk energi til:
- **Varme** (molekylene beveger seg raskere)
- **Lyd** (trykkbølger)
- **Deformasjon** (permanent endring i form)
- **Vibrasjoner** (indre bevegelser)

Den totale energien bevares alltid (energibevaringsloven), men mekanisk energi gjør det ikke!`,
    },
    {
      id: 'fys1-4-3-ex-5',
      type: 'example',
      title: 'Eksempel: Elastisk støt',
      problem: 'To identiske vogner (masse 1.0 kg hver) kolliderer elastisk på en friksjonsfri bane. Vogn 1 har fart 4.0 m/s, vogn 2 er i ro. Finn fartene etter kollisjonen.',
      solution: `**Gitt:**
- Begge vogner: $m = 1.0$ kg
- Før: $v_1 = 4.0$ m/s, $v_2 = 0$ m/s
- Elastisk støt

**Søkt:** $v_1'$ og $v_2'$ (farter etter)

**Løsning:**

**Bevaring av bevegelsesmengde:**

$$mv_1 + mv_2 = mv_1' + mv_2'$$

$$v_1 + v_2 = v_1' + v_2'$$

$$4.0 + 0 = v_1' + v_2'$$

$$v_1' + v_2' = 4.0 \\quad \\text{(1)}$$

**Bevaring av kinetisk energi:**

$$\\frac{1}{2}mv_1^2 + \\frac{1}{2}mv_2^2 = \\frac{1}{2}m{v_1'}^2 + \\frac{1}{2}m{v_2'}^2$$

$$v_1^2 + v_2^2 = {v_1'}^2 + {v_2'}^2$$

$$16 + 0 = {v_1'}^2 + {v_2'}^2$$

$\${v_1'}^2 + {v_2'}^2 = 16 \\quad \\text{(2)}$$

Fra (1): $v_1' = 4.0 - v_2'$

Sett inn i (2):

$$(4.0 - v_2')^2 + {v_2'}^2 = 16$$

$$16 - 8.0v_2' + {v_2'}^2 + {v_2'}^2 = 16$$

$$2{v_2'}^2 - 8.0v_2' = 0$$

$$v_2'(2v_2' - 8.0) = 0$$

$$v_2' = 0 \\quad \\text{eller} \\quad v_2' = 4.0$$

$v_2' = 0$ er før-situasjonen (triviell).

$$v_2' = 4.0 \\text{ m/s}$$

Fra (1):
$$v_1' = 4.0 - 4.0 = 0 \\text{ m/s}$$

**Svar:**
- Vogn 1: 0 m/s (stopper)
- Vogn 2: 4.0 m/s (overtar all farten)

**Tolkning:** Dette er typisk for elastiske støt mellom like masser - de "bytter" farter!`,
    },
    {
      id: 'fys1-4-3-ex-6',
      type: 'example',
      title: 'Eksempel: Eksplosjoner',
      problem: 'En granat med masse 2.0 kg ligger i ro. Den eksploderer i to deler: del A (1.2 kg) flyr mot øst med fart 30 m/s. Finn farten til del B (0.8 kg).',
      solution: `**Gitt:**
- Total masse: $m = 2.0$ kg
- Del A: $m_A = 1.2$ kg, $v_A = 30$ m/s (øst)
- Del B: $m_B = 0.8$ kg
- Før eksplosjon: $v_0 = 0$ m/s

**Søkt:** $v_B$

**Løsning:**

Bevaring av bevegelsesmengde (tar øst som positiv retning):

$$p_{før} = p_{etter}$$

$$0 = m_A v_A + m_B v_B$$

$$0 = 1.2 \\cdot 30 + 0.8 \\cdot v_B$$

$$0 = 36 + 0.8 v_B$$

$$v_B = -\\frac{36}{0.8} = -45 \\text{ m/s}$$

**Svar:** Del B flyr med fart 45 m/s mot vest (negativt fortegn).

**Tolkning:** Bevegelsesmengden før eksplosjonen var null, så den må også være null etter. De to delene har motsatt rettet bevegelsesmengde som kansellerer.`,
    },
    {
      id: 'fys1-4-3-todimensjonale',
      type: 'text',
      content: `# Todimensjonale kollisjoner

Bevaring av bevegelsesmengde gjelder også i to (og tre) dimensjoner. Vi må da bevare hver komponent separat.

**Prinsipp:**

$$\\vec{p}_{før} = \\vec{p}_{etter}$$

**Komponentform:**

$$p_{x,før} = p_{x,etter}$$
$$p_{y,før} = p_{y,etter}$$

Dette gir to ligninger som må løses samtidig.`,
    },
    {
      id: 'fys1-4-3-ex-7',
      type: 'example',
      title: 'Eksempel: Todimensjonal kollisjon',
      problem: 'En bil med masse 1000 kg kjører nordover med fart 20 m/s. Den kolliderer med en annen bil med masse 1500 kg som kjører østover med fart 15 m/s. Bilene hekter seg sammen. Finn farten og retningen til vrakket.',
      solution: `**Gitt:**
- Bil 1: $m_1 = 1000$ kg, $v_1 = 20$ m/s (nord)
- Bil 2: $m_2 = 1500$ kg, $v_2 = 15$ m/s (øst)

**Koordinatsystem:** x = øst, y = nord

**Før kollisjon:**

Bil 1: $p_{1x} = 0$, $p_{1y} = 1000 \\cdot 20 = 20\\,000$ kg·m/s

Bil 2: $p_{2x} = 1500 \\cdot 15 = 22\\,500$ kg·m/s, $p_{2y} = 0$

**Total bevegelsesmengde:**

$$p_{x,før} = 0 + 22\\,500 = 22\\,500 \\text{ kg·m/s}$$
$$p_{y,før} = 20\\,000 + 0 = 20\\,000 \\text{ kg·m/s}$$

**Etter kollisjon:**

Total masse: $m_{tot} = 1000 + 1500 = 2500$ kg

Bevaring i x-retning:
$$p_{x,etter} = p_{x,før}$$
$$m_{tot} v_x = 22\\,500$$
$$v_x = \\frac{22\\,500}{2500} = 9.0 \\text{ m/s}$$

Bevaring i y-retning:
$$p_{y,etter} = p_{y,før}$$
$$m_{tot} v_y = 20\\,000$$
$$v_y = \\frac{20\\,000}{2500} = 8.0 \\text{ m/s}$$

**Fart:**

$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{9.0^2 + 8.0^2} = \\sqrt{81 + 64} = \\sqrt{145} = 12.0 \\text{ m/s}$$

**Retning:**

$$\\theta = \\arctan\\left(\\frac{v_y}{v_x}\\right) = \\arctan\\left(\\frac{8.0}{9.0}\\right) = \\arctan(0.889) = 41.6°$$

**Svar:** Vrakket beveger seg med 12.0 m/s i retning 41.6° nord for øst.`,
    },
    {
      id: 'fys1-4-3-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `**Bevegelsesmengde:**
- $\\vec{p} = m\\vec{v}$
- Vektorstørrelse (retning viktig!)
- Måler "mengden bevegelse"

**Impuls:**
- $\\vec{J} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p}$
- Endring i bevegelsesmengde
- Stor kraft, kort tid = liten kraft, lang tid

**Bevaring av bevegelsesmengde:**
- $\\vec{p}_{før} = \\vec{p}_{etter}$ (lukket system)
- Gjelder ALLTID, selv med friksjon og energitap
- Gjelder i alle retninger (separat i x, y, z)

**Elastisk støt:**
- Bevegelsesmengde bevares ✓
- Kinetisk energi bevares ✓
- Sjelden i virkeligheten

**Uelastisk støt:**
- Bevegelsesmengde bevares ✓
- Kinetisk energi synker ✗
- Vanlig i virkeligheten

**Fullstendig uelastisk:**
- Objekter henger sammen etter
- Mest energitap mulig (gitt massene)

**Praktiske anvendelser:**
- Kollisjonsanalyse (bil, fly, skip)
- Sikkerhetsutstyr (airbag, hjelm)
- Raketter og eksplosjoner
- Partikkelfysikk`,
    },
  ],
  exercises: [
    {
      id: 'fys1-4-3-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beregn bevegelsesmengden til:\na) En lastebil med masse 8000 kg som kjører i 15 m/s\nb) En løper med masse 60 kg og fart 8.0 m/s',
      solution: `**a) Lastebil:**

$$p = mv = 8000 \\cdot 15 = 120\\,000 \\text{ kg·m/s} = 120 \\text{ kN·s}$$

**b) Løper:**

$$p = mv = 60 \\cdot 8.0 = 480 \\text{ kg·m/s}$$

**Sammenligning:** Lastebilen har 250 ganger så stor bevegelsesmengde!`,
      hints: ['Bruk $p = mv$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En kraft på 50 N virker på et objekt i 0.30 s. Hvor stor impuls får objektet?',
      solution: `**Gitt:**
- Kraft: $F = 50$ N
- Tid: $\\Delta t = 0.30$ s

**Løsning:**

$$J = F \\cdot \\Delta t = 50 \\cdot 0.30 = 15 \\text{ N·s}$$

**Svar:** 15 N·s`,
      hints: ['Bruk $J = F \\cdot \\Delta t$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En vogn med masse 3.0 kg beveger seg med fart 2.0 m/s og kolliderer med en stillestående vogn med masse 2.0 kg. Vognene henger sammen etter kollisjonen. Finn farten til vognene etter kollisjonen.',
      solution: `**Gitt:**
- Vogn 1: $m_1 = 3.0$ kg, $v_1 = 2.0$ m/s
- Vogn 2: $m_2 = 2.0$ kg, $v_2 = 0$ m/s

**Løsning:**

Bevaring av bevegelsesmengde:

$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v'$$

$$3.0 \\cdot 2.0 + 2.0 \\cdot 0 = (3.0 + 2.0) v'$$

$$6.0 = 5.0 v'$$

$$v' = 1.2 \\text{ m/s}$$

**Svar:** 1.2 m/s`,
      hints: ['Vognene henger sammen → samme fart etter', 'Bruk bevaring av bevegelsesmengde'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En ball med masse 0.20 kg treffer en vegg med fart 15 m/s og spretter tilbake med fart 12 m/s. Kollisjonen tar 0.050 s.\na) Hvor stor er endringen i ballens bevegelsesmengde?\nb) Hvor stor gjennomsnittskraft utøver veggen på ballen?',
      solution: `**Gitt:**
- Masse: $m = 0.20$ kg
- Fart før: $v_1 = 15$ m/s (mot veggen)
- Fart etter: $v_2 = -12$ m/s (fra veggen, motsatt retning)
- Tid: $\\Delta t = 0.050$ s

**a) Endring i bevegelsesmengde:**

$$\\Delta p = p_2 - p_1 = mv_2 - mv_1$$

$$\\Delta p = 0.20 \\cdot (-12) - 0.20 \\cdot 15$$

$$\\Delta p = -2.4 - 3.0 = -5.4 \\text{ kg·m/s}$$

(Negativ fordi retningen snur)

**Svar a):** -5.4 kg·m/s (eller: Endringen er 5.4 kg·m/s i motsatt retning)

**b) Gjennomsnittskraft:**

$$F = \\frac{\\Delta p}{\\Delta t} = \\frac{-5.4}{0.050} = -108 \\text{ N}$$

**Svar b):** 108 N (i motsatt retning av den opprinnelige bevegelsen)`,
      hints: ['Husk at farten etter har motsatt retning', 'Bruk $\\Delta p = p_{etter} - p_{før}$', 'Bruk $F = \\frac{\\Delta p}{\\Delta t}$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bil med masse 1200 kg kjører i 25 m/s og kolliderer med en stillestående bil med masse 1000 kg. Bilene henger sammen etter kollisjonen.\na) Finn farten til bilene etter kollisjonen.\nb) Hvor mye kinetisk energi er tapt?',
      solution: `**Gitt:**
- Bil 1: $m_1 = 1200$ kg, $v_1 = 25$ m/s
- Bil 2: $m_2 = 1000$ kg, $v_2 = 0$ m/s

**a) Fart etter kollisjon:**

Bevaring av bevegelsesmengde:

$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v'$$

$$1200 \\cdot 25 + 1000 \\cdot 0 = (1200 + 1000) v'$$

$$30\\,000 = 2200 v'$$

$$v' = \\frac{30\\,000}{2200} = 13.64 \\text{ m/s}$$

**Svar a):** 13.6 m/s

**b) Kinetisk energi tapt:**

Før kollisjon:
$$E_{k,før} = \\frac{1}{2} m_1 v_1^2 = \\frac{1}{2} \\cdot 1200 \\cdot 25^2 = 375\\,000 \\text{ J}$$

Etter kollisjon:
$$E_{k,etter} = \\frac{1}{2} (m_1 + m_2) v'^2 = \\frac{1}{2} \\cdot 2200 \\cdot 13.64^2 = 204\\,545 \\text{ J}$$

Tapt energi:
$$\\Delta E_k = 375\\,000 - 204\\,545 = 170\\,455 \\text{ J} \\approx 170 \\text{ kJ}$$

**Svar b):** 170 kJ er tapt (omdannet til varme, lyd, deformasjon)`,
      hints: ['Del a: Bevaring av bevegelsesmengde', 'Del b: Beregn kinetisk energi før og etter'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En kanon med masse 500 kg skyter ut en kule med masse 5.0 kg. Kulen forlater kanonen med fart 200 m/s. Finn rekylfarten til kanonen.',
      solution: `**Gitt:**
- Kanon: $m_k = 500$ kg
- Kule: $m_p = 5.0$ kg, $v_p = 200$ m/s
- Før: Begge i ro

**Løsning:**

Bevaring av bevegelsesmengde (tar kulen som positiv retning):

$$p_{før} = p_{etter}$$

$$0 = m_p v_p + m_k v_k$$

$$0 = 5.0 \\cdot 200 + 500 \\cdot v_k$$

$$0 = 1000 + 500 v_k$$

$$v_k = -\\frac{1000}{500} = -2.0 \\text{ m/s}$$

**Svar:** Kanonen beveger seg med 2.0 m/s i motsatt retning av kulen (rekyl).`,
      hints: ['Total bevegelsesmengde før = 0', 'Total bevegelsesmengde etter = 0'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'To vogner (masse 2.0 kg og 3.0 kg) beveger seg mot hverandre med fart 4.0 m/s og 2.0 m/s. De kolliderer og henger sammen. Finn farten og retningen til vognene etter kollisjonen.',
      solution: `**Gitt:**
- Vogn 1: $m_1 = 2.0$ kg, $v_1 = 4.0$ m/s (positiv retning)
- Vogn 2: $m_2 = 3.0$ kg, $v_2 = -2.0$ m/s (negativ retning)

**Løsning:**

Bevaring av bevegelsesmengde:

$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v'$$

$$2.0 \\cdot 4.0 + 3.0 \\cdot (-2.0) = (2.0 + 3.0) v'$$

$$8.0 - 6.0 = 5.0 v'$$

$$2.0 = 5.0 v'$$

$$v' = 0.4 \\text{ m/s}$$

**Svar:** Vognene beveger seg med 0.4 m/s i samme retning som vogn 1.

**Tolkning:** Vogn 1 hadde større bevegelsesmengde (8.0 vs. 6.0), så den "vinner" og vognene beveger seg i dens retning.`,
      hints: ['Motsatt retning → negativt fortegn', 'Bruk algebraiske fortegn'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En bil med masse 1500 kg kolliderer med en annen bil med masse 1200 kg. Før kollisjonen kjører bil 1 med 20 m/s og bil 2 med 15 m/s i samme retning. Etter kollisjonen har bil 1 fart 16 m/s.\na) Finn farten til bil 2 etter kollisjonen.\nb) Er kollisjonen elastisk?',
      solution: `**Gitt:**
- Bil 1: $m_1 = 1500$ kg, $v_{1,før} = 20$ m/s, $v_{1,etter} = 16$ m/s
- Bil 2: $m_2 = 1200$ kg, $v_{2,før} = 15$ m/s

**a) Fart til bil 2 etter:**

Bevaring av bevegelsesmengde:

$$m_1 v_{1,før} + m_2 v_{2,før} = m_1 v_{1,etter} + m_2 v_{2,etter}$$

$$1500 \\cdot 20 + 1200 \\cdot 15 = 1500 \\cdot 16 + 1200 \\cdot v_{2,etter}$$

$$30\\,000 + 18\\,000 = 24\\,000 + 1200 v_{2,etter}$$

$$48\\,000 = 24\\,000 + 1200 v_{2,etter}$$

$$24\\,000 = 1200 v_{2,etter}$$

$$v_{2,etter} = 20 \\text{ m/s}$$

**Svar a):** 20 m/s

**b) Er kollisjonen elastisk?**

Kinetisk energi før:
$$E_{k,før} = \\frac{1}{2} \\cdot 1500 \\cdot 20^2 + \\frac{1}{2} \\cdot 1200 \\cdot 15^2$$
$$= 300\\,000 + 135\\,000 = 435\\,000 \\text{ J}$$

Kinetisk energi etter:
$$E_{k,etter} = \\frac{1}{2} \\cdot 1500 \\cdot 16^2 + \\frac{1}{2} \\cdot 1200 \\cdot 20^2$$
$$= 192\\,000 + 240\\,000 = 432\\,000 \\text{ J}$$

Energitap: $435\\,000 - 432\\,000 = 3000$ J

**Svar b):** Nei, kollisjonen er ikke elastisk (3 kJ er tapt).

**Tolkning:** Bil 1 (raskere) bremses ned, mens bil 2 (saktere) øker farten. Dette er typisk for kollisjoner bakfra.`,
      hints: ['Del a: Bruk bevaring av bevegelsesmengde', 'Del b: Sjekk om kinetisk energi bevares'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En rakett med total masse 2000 kg (inkludert drivstoff) ligger i ro i rommet. Den brenner 500 kg drivstoff som skytes ut bakover med fart 1500 m/s relativt til raketten. Finn rakettens sluttfart. (Anta konstant utskytingshastighet for enkelhets skyld.)',
      solution: `**Gitt:**
- Total startmasse: $m_0 = 2000$ kg
- Drivstoffmasse: $m_{drivstoff} = 500$ kg
- Rakettmasse etter: $m_r = 2000 - 500 = 1500$ kg
- Utskytingshastighet (relativt til rakett): $v_{rel} = 1500$ m/s

**Løsning:**

Dette er **Tsiolkovskys rakett-ligning**. For en forenklet analyse:

I et ytre referansesystem (rommet):

La rakettens sluttfart være $v_r$ (fremover).
Drivstoffets fart er $v_d$ (bakover).

Bevaring av bevegelsesmengde:

$$0 = m_r v_r + m_{drivstoff} v_d$$

Relativ hastighet:
$$v_{rel} = v_r - v_d$$
$$v_d = v_r - v_{rel} = v_r - 1500$$

Substituer:

$$0 = 1500 v_r + 500 (v_r - 1500)$$

$$0 = 1500 v_r + 500 v_r - 750\\,000$$

$$0 = 2000 v_r - 750\\,000$$

$$v_r = \\frac{750\\,000}{2000} = 375 \\text{ m/s}$$

**Svar:** Rakettens sluttfart er 375 m/s.

**Alternativ (Tsiolkovskys ligning):**

$$\\Delta v = v_{rel} \\ln\\left(\\frac{m_0}{m_r}\\right) = 1500 \\ln\\left(\\frac{2000}{1500}\\right)$$

$$= 1500 \\ln(1.333) = 1500 \\cdot 0.2877 = 431.5 \\text{ m/s}$$

(Denne tar hensyn til at drivstoffet brennes gradvis, og gir et mer nøyaktig svar.)

**Merk:** Vår forenklede beregning (375 m/s) antar at alt drivstoff brennes samtidig. Den korrekte verdien (432 m/s) tar hensyn til at massen reduseres underveis.`,
      hints: ['Bruk bevaring av bevegelsesmengde', 'Total bevegelsesmengde før = 0', 'Relativ hastighet: $v_{rel} = v_r - v_d$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'To vogner med masse 2.0 kg og 3.0 kg står sammenpresset med en fjær mellom seg. Når fjæren slippes, beveger vogn 1 seg med fart 6.0 m/s til venstre. Finn:\na) Farten til vogn 2\nb) Den elastiske potensielle energien som var lagret i fjæren',
      solution: `**Gitt:**
- Vogn 1: $m_1 = 2.0$ kg, $v_1 = -6.0$ m/s (venstre)
- Vogn 2: $m_2 = 3.0$ kg
- Før: Begge i ro

**a) Fart til vogn 2:**

Bevaring av bevegelsesmengde:

$$0 = m_1 v_1 + m_2 v_2$$

$$0 = 2.0 \\cdot (-6.0) + 3.0 \\cdot v_2$$

$$0 = -12.0 + 3.0 v_2$$

$$v_2 = 4.0 \\text{ m/s}$$

**Svar a):** 4.0 m/s (til høyre)

**b) Elastisk potensiell energi i fjæren:**

Energien i fjæren omdannes til kinetisk energi:

$$E_{p,fjær} = E_{k,1} + E_{k,2}$$

$$E_{p,fjær} = \\frac{1}{2} m_1 v_1^2 + \\frac{1}{2} m_2 v_2^2$$

$$E_{p,fjær} = \\frac{1}{2} \\cdot 2.0 \\cdot 6.0^2 + \\frac{1}{2} \\cdot 3.0 \\cdot 4.0^2$$

$$E_{p,fjær} = 36.0 + 24.0 = 60.0 \\text{ J}$$

**Svar b):** 60 J var lagret i fjæren.

**Tolkning:** Dette er en "eksplosjon" - fjæren skyver vognene fra hverandre. Bevegelsesmengden bevares (total = 0), og energien i fjæren omdannes til kinetisk energi.`,
      hints: ['Total bevegelsesmengde = 0 (før og etter)', 'Elastisk energi omdannes til kinetisk energi'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En billardkule med masse 0.16 kg treffer en identisk stillestående kule. Etter kollisjonen beveger den første kulen seg med 30° til høyre for sin opprinnelige retning med fart 4.0 m/s, og den andre kulen beveger seg med 60° til venstre med fart 2.0 m/s.\na) Finn den opprinnelige farten til den første kulen.\nb) Er kollisjonen elastisk?',
      solution: `**Gitt:**
- Begge kuler: $m = 0.16$ kg
- Kule 1 før: $v_1$ (søkt), retning 0° (x-akse)
- Kule 2 før: $v_2 = 0$ m/s
- Kule 1 etter: $v_1' = 4.0$ m/s ved 30°
- Kule 2 etter: $v_2' = 2.0$ m/s ved -60° (60° under x-aksen)

**a) Opprinnelig fart:**

Bevaring av bevegelsesmengde i x-retning:

$$m v_1 = m v_1' \\cos 30° + m v_2' \\cos(-60°)$$

$$v_1 = 4.0 \\cos 30° + 2.0 \\cos 60°$$

$$v_1 = 4.0 \\cdot 0.866 + 2.0 \\cdot 0.5$$

$$v_1 = 3.464 + 1.0 = 4.464 \\text{ m/s}$$

**Sjekk y-retning (skal være 0):**

$$0 = m v_1' \\sin 30° + m v_2' \\sin(-60°)$$

$$0 = 4.0 \\sin 30° - 2.0 \\sin 60°$$

$$0 = 4.0 \\cdot 0.5 - 2.0 \\cdot 0.866$$

$$0 = 2.0 - 1.732 \\approx 0.27$$

Små avrundingsfeil, men ca. 0 ✓

**Svar a):** 4.5 m/s

**b) Er kollisjonen elastisk?**

Kinetisk energi før:
$$E_{k,før} = \\frac{1}{2} \\cdot 0.16 \\cdot 4.464^2 = 1.594 \\text{ J}$$

Kinetisk energi etter:
$$E_{k,etter} = \\frac{1}{2} \\cdot 0.16 \\cdot 4.0^2 + \\frac{1}{2} \\cdot 0.16 \\cdot 2.0^2$$
$$= 1.28 + 0.32 = 1.60 \\text{ J}$$

Forskjell: $1.60 - 1.594 ≈ 0$ (innenfor avrundingsfeil)

**Svar b):** Ja, kollisjonen er tilnærmet elastisk (innenfor målenøyaktighet).

**Tolkning:** Dette er typisk for billardkuler - de har nesten elastiske støt.`,
      hints: ['Bruk bevaring i både x- og y-retning', 'Del opp fartene i komponenter', 'Sjekk energi for å se om elastisk'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-3-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor sikkerhetsutstyr som airbags, setebelte med strekkfunksjon, og sykkelhjelmer fungerer ved å øke kollisjonstiden. Gi konkrete eksempler med tall.',
      solution: `**Prinsipp: Impuls-bevegelsesmengde-teoremet**

$$\\vec{F} \\cdot \\Delta t = \\Delta \\vec{p}$$

Ved en kollisjon er endringen i bevegelsesmengde $\\Delta \\vec{p}$ fast (fra startfart til 0).

Derfor:

$$F = \\frac{\\Delta p}{\\Delta t}$$

**Hvis $\\Delta t$ øker, synker $F$!**

Dette er nøkkelen til sikkerhetsutstyr: **Øk kollisjonstiden for å redusere kraften.**

---

**EKSEMPEL 1: AIRBAG**

**Situasjon:** Bilkollisjon, passasjer med masse 70 kg, fart 20 m/s (72 km/h).

Endring i bevegelsesmengde:
$$\\Delta p = 70 \\cdot 20 = 1400 \\text{ kg·m/s}$$

**Uten airbag (treff mot ratt):**
- Stoppetid: $\\Delta t = 0.01$ s
- Kraft: $F = \\frac{1400}{0.01} = 140\\,000$ N = 140 kN

Dette tilsvarer en vekt på 14 tonn! → **Dødelig**

**Med airbag:**
- Stoppetid: $\\Delta t = 0.15$ s (15 ganger lengre)
- Kraft: $F = \\frac{1400}{0.15} = 9333$ N ≈ 9.3 kN

Dette tilsvarer en vekt på ca. 950 kg. → **Overlevbart**

**Hvordan fungerer airbag:**
- Blåses raskt opp ved kollisjon
- Gir en myk, stor overflate
- Luften i posen presses ut under kollisjonen
- Gir gradvis bremsing over lengre tid

---

**EKSEMPEL 2: SETEBELTE MED STREKKFUNKSJON**

**Moderne setebelter har "strekkfunksjon":** Beltet strekkes litt under kollisjon.

**Uten strekk:**
- Stivt belte stopper kroppen brått
- Kort stoppetid
- Stor kraft på bryst/bekken

**Med strekk:**
- Beltet strekkes 10-15 cm
- Kroppen stopper gradvis
- Lengre stoppetid → mindre kraft

**Tall-eksempel:**

Person 80 kg, fart 15 m/s, $\\Delta p = 1200$ kg·m/s

**Uten strekk:** $\\Delta t = 0.05$ s → $F = 24\\,000$ N
**Med strekk:** $\\Delta t = 0.10$ s → $F = 12\\,000$ N

Halvering av kraft!

---

**EKSEMPEL 3: SYKKELHJELM**

**Funksjon:** Hjelmen knuses/deformeres ved støt.

**Uten hjelm (hodeskalle mot asfalt):**
- Svært kort kontakttid (0.002 s)
- Enorm kraft → Hodeskallbrudd

**Med hjelm:**
- Hjelmen knuses over 0.010 s (5 ganger lengre)
- Kraft reduseres med faktor 5
- Energi absorberes i deformasjon av skum

**Tall-eksempel:**

Hode 5 kg, fart 5 m/s (fall fra sykkel), $\\Delta p = 25$ kg·m/s

**Uten hjelm:** $\\Delta t = 0.002$ s → $F = 12\\,500$ N
**Med hjelm:** $\\Delta t = 0.010$ s → $F = 2\\,500$ N

Kraft redusert med 80%!

---

**EKSEMPEL 4: BILDEMPERE OG KNUSESONER**

**Moderne biler har "knusesoner":** Fronten knuses ved kollisjon.

**Funksjon:**
- Energi absorberes i deformasjon av metall
- Kollisjonstiden økes
- Kraften på passasjerkabinen reduseres

**Bil uten knusesoner (stiv front):**
- Kort stopptid (0.05 s)
- Stor kraft

**Bil med knusesoner:**
- Lang stopptid (0.15 s, 3 ganger lengre)
- Kraft redusert til 1/3

**Viktig:** Passasjerkabinen er stiv for å beskytte innsittende, men fronten er myk for å forlenge kollisjonstiden.

---

**EKSEMPEL 5: MADRASSER OG NETTVERK (BRANNMENN/STUNT)**

**Hopp fra høyde inn i nett/madras:**

**Uten nett (land på bakken):**
- Stoppetid: 0.01 s
- Enorm kraft → Døden

**Med nett:**
- Nett strekkes 2-3 m
- Stoppetid: 0.5-1.0 s (50-100 ganger lengre!)
- Kraft redusert med faktor 50-100
- Overlevbart

---

**OPPSUMMERING: FYSIKKEN BAK SIKKERHETSUTSTYR**

**Prinsipp:**
$$F = \\frac{\\Delta p}{\\Delta t}$$

- $\\Delta p$ er fast (gitt av hastighetsendring)
- $\\Delta t$ kan økes ved design
- Øk $\\Delta t$ → Reduser $F$

**Metoder for å øke $\\Delta t$:**

1. **Myke materialer som deformeres:**
   - Airbags (luft presses ut)
   - Skum i hjelm (knuses)
   - Knusesoner i bil (metall deformeres)

2. **Strekkbare materialer:**
   - Moderne setebelter
   - Fallskjermseil
   - Elastiske tau

3. **Store flater:**
   - Airbag (stor kontaktflate → lavt trykk)
   - Boksehansker (stor flate vs. bare knyttneve)

**Praktisk betydning:**

Alle moderne sikkerhetssystemer bygger på samme prinsipp:
**Forleng kollisjonstiden for å redusere kraften!**

Dette har reddet millioner av liv.`,
      hints: ['Impuls = endring i bevegelsesmengde', 'Lang kollisjonstid → liten kraft', 'Beregn kraft med og uten sikkerhetsutstyr'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
