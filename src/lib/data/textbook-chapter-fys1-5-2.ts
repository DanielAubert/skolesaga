/**
 * Fysikk 1 - Kapittel 5.2: Varmeoverføringer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_5_2: TextbookChapter = {
  id: 'fys1-5-2',
  courseId: 'fys1',
  chapterNumber: '5.2',
  title: 'Varmeoverføringer',
  description: 'Lær om de tre metodene for varmeoverføring: varmeledning, konveksjon og varmestråling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare forskjellen mellom varmeledning, konveksjon og varmestråling',
    'bruke formelen for varmeledning',
    'forklare hvordan isolasjon virker',
    'beregne varmetap gjennom vegger',
    'forklare U-verdi og dens betydning',
  ],
  content: [
    {
      id: 'fys1-5-2-intro',
      type: 'text',
      content: `# Varmeoverføringer

Varme kan overføres på tre måter:

1. **Varmeledning** (konduksjon)
2. **Konveksjon**
3. **Varmestråling** (radiasjon)

Alle tre prosessene kan skje samtidig, men én metode dominerer ofte avhengig av situasjonen.`,
    },
    {
      id: 'fys1-5-2-varmeledning',
      type: 'text',
      content: `# Varmeledning (konduksjon)

**Varmeledning** er overføring av varme gjennom direkte kontakt mellom molekyler i et fast stoff eller en væske.

## Hvordan fungerer det?

**Mikroskopisk forklaring:**

1. I den varme enden beveger molekylene seg raskt (høy kinetisk energi)
2. Disse molekylene kolliderer med nabo-molekyler
3. Energi overføres fra raskere til langsommere molekyler
4. Prosessen fortsetter gjennom materialet
5. Varme sprer seg fra varm til kald ende

**Viktig:**
- Molekylene beveger seg **ikke** gjennom materialet
- Det er **energien** som overføres, ikke molekylene
- Krever direkte kontakt (ingen vakuum-varmeledning)

**I metaller:**
- Frie elektroner bidrar også til varmeledning
- Elektroner beveger seg raskt og transporterer energi
- Derfor leder metaller varme bedre enn ikke-metaller

## Varmeledningsevne

Ulike materialer leder varme forskjellig:

**Gode varmeledere:**
- Metaller (kobber, aluminium, jern)
- Diamant (beste varmeleder!)

**Dårlige varmeledere (isolatorer):**
- Tre
- Plast
- Luft
- Polystyren (flamingo)
- Ull
- Glassull

**Varmeledningsevne** ($\\lambda$ eller $k$) måles i W/(m·K) eller W/(m·°C).

| Materiale | $k$ (W/(m·K)) |
|-----------|---------------|
| Kobber | 400 |
| Aluminium | 237 |
| Jern | 80 |
| Betong | 1,4 |
| Glass | 0,8 |
| Tre (furu) | 0,12 |
| Mineralull | 0,04 |
| Luft (stillestående) | 0,026 |
| Polystyren | 0,03 |

## Formelen for varmeledning

Varmestrømmen (effekten) gjennom et materiale er gitt av:

$$P = \\frac{kA\\Delta T}{d}$$

**Der:**
- $P$ = varmestrøm (effekt) (W)
- $k$ = varmeledningsevne (W/(m·K))
- $A$ = tverrsnittareal (m²)
- $\\Delta T$ = temperaturforskjell (K eller °C)
- $d$ = tykkelse (m)

**Alternativer skrivemåter:**

$$P = \\frac{k \\cdot A \\cdot (T_1 - T_2)}{d}$$

eller

$$Q = \\frac{kA\\Delta T}{d} \\cdot t$$

der $Q$ er total energi overført i tid $t$.

**Betydning av variablene:**

- **Større $k$:** Bedre varmeleder, mer varmestrøm
- **Større $A$:** Større areal, mer varmestrøm
- **Større $\\Delta T$:** Større temperaturforskjell, mer varmestrøm
- **Større $d$:** Tykkere materiale, mindre varmestrøm (bedre isolasjon)`,
    },
    {
      id: 'fys1-5-2-def-varmeledning',
      type: 'definition',
      title: 'Varmeledning',
      content: 'Varmeledning er overføring av varme gjennom direkte kontakt mellom molekyler i et stoff. Energi overføres fra molekyl til molekyl uten at molekylene selv beveger seg gjennom materialet.',
    },
    {
      id: 'fys1-5-2-ex-varmeledning',
      type: 'example',
      title: 'Eksempel: Varmetap gjennom vindu',
      problem: 'Et vindu har areal 2,0 m² og tykkelse 4,0 mm. Temperaturen inne er 20°C og ute -10°C. Hvor stor er varmestrømmen gjennom vinduet?\n\nVarmeledningsevne for glass: $k = 0{,}80 \\text{ W/(m·K)}$',
      solution: `**Gitt:**
- $A = 2{,}0 \\text{ m}^2$
- $d = 4{,}0 \\text{ mm} = 0{,}004 \\text{ m}$
- $T_1 = 20 \\text{°C}$ (inne)
- $T_2 = -10 \\text{°C}$ (ute)
- $k = 0{,}80 \\text{ W/(m·K)}$

**Temperaturforskjell:**

$$\\Delta T = T_1 - T_2 = 20 - (-10) = 30 \\text{ K}$$

**Bruk formelen:**

$$P = \\frac{kA\\Delta T}{d}$$

$$P = \\frac{0{,}80 \\cdot 2{,}0 \\cdot 30}{0{,}004}$$

$$P = \\frac{48}{0{,}004} = 12\\,000 \\text{ W} = 12 \\text{ kW}$$

**Svar:** Varmestrømmen er 12 kW.

**Tolkning:** Dette er mye! Et enkeltlags vindu taper mye varme. Derfor brukes dobbeltglass eller tredobbeltglass med luftlag som isolasjon.`,
    },
    {
      id: 'fys1-5-2-konveksjon',
      type: 'text',
      content: `# Konveksjon

**Konveksjon** er overføring av varme ved at varmt stoff (væske eller gass) beveger seg fra et sted til et annet.

## Hvordan fungerer det?

**Prinsipp:**
1. Væske eller gass varmes opp
2. Varm væske/gass utvider seg (lavere tetthet)
3. Varm væske/gass stiger (oppdrift)
4. Kald væske/gass synker ned
5. Sirkulasjon oppstår

**Typer konveksjon:**

**1. Naturlig konveksjon:**
- Strømning pga. tetthetsforskjeller
- Varm luft stiger, kald luft synker
- Eksempel: Varmluft fra radiator

**2. Tvungen konveksjon:**
- Strømning pga. ytre kraft (vifte, pumpe)
- Eksempel: Kjølevifte i datamaskin, kjøleskap

## Eksempler på konveksjon

**Atmosfæren:**
- Varm luft ved ekvator stiger
- Kald luft ved polene synker
- Skaper globale vindmønstre

**Hav:**
- Golfstrømmen: varm havstrøm fra Mexicogolfen til Norge
- Holder Norge varmere enn den ellers ville vært

**Oppvarming av rom:**
- Radiator varmer luft
- Varm luft stiger
- Kald luft synker og varmes opp
- Sirkulasjon holder rommet varmt

**Koking av vann:**
- Vann ved bunnen av kjelen varmes
- Varmt vann stiger
- Kaldt vann synker
- Sirkulasjon varmer hele vannmassen

## Konveksjon vs. Varmeledning

| Egenskap | Varmeledning | Konveksjon |
|----------|--------------|------------|
| Medium | Faste stoff, væsker | Væsker, gasser |
| Bevegelse | Molekyler beveger seg ikke | Stoffet beveger seg |
| Hastighet | Relativt langsom | Relativt rask |
| Eksempel | Varme gjennom vegg | Varmestrøm i væske |`,
    },
    {
      id: 'fys1-5-2-def-konveksjon',
      type: 'definition',
      title: 'Konveksjon',
      content: 'Konveksjon er overføring av varme ved at varmt stoff (væske eller gass) beveger seg fra et sted til et annet. Stoffet selv transporterer energien.',
    },
    {
      id: 'fys1-5-2-varmestråling',
      type: 'text',
      content: `# Varmestråling (radiasjon)

**Varmestråling** er overføring av varme ved elektromagnetisk stråling. Alle legemer med temperatur over absolutt nullpunkt sender ut varmestråling.

## Hvordan fungerer det?

**Prinsipp:**
- Alle legemer sender ut elektromagnetisk stråling
- Strålingen transporterer energi
- Krever **ikke** et medium (kan gå gjennom vakuum)
- Hastighet: lysets hastighet ($c = 3 \\times 10^8 \\text{ m/s}$)

**Viktig:**
- Eneste måte varme kan overføres gjennom vakuum
- Solens varme når jorden via varmestråling
- Varmestråling er usynlig (infrarød stråling)

## Emisjon og absorpsjon

**Emisjon:** Legemer sender ut stråling
- Alle legemer sender ut stråling
- Høyere temperatur → mer stråling
- Stefan-Boltzmanns lov: $P = \\sigma A T^4$ (mer om dette i neste kapittel)

**Absorpsjon:** Legemer tar opp stråling
- Noen stoff absorberer mer enn andre
- Mørke overflater absorberer mer
- Blanke overflater reflekterer mer

**Gode absorbere = gode emittere:**
- **Sort legeme:** Absorberer all stråling (100%), sender også ut mest stråling
- **Sort overflate:** Absorberer mye, sender ut mye
- **Blank overflate:** Reflekterer mye, sender ut lite

## Eksempler på varmestråling

**Solen:**
- Sender ut enorme mengder stråling
- Strålingen reiser gjennom vakuum
- Når jorden og varmer den opp

**Peis:**
- Varmer rommet med stråling
- Du føler varmen selv om luften er kald

**Infrarøde varmepaneler:**
- Sender ut infrarød stråling
- Varmer objekter direkte (ikke luften)

**Termografering:**
- Kamera som ser infrarød stråling
- Brukes til å finne varmetap i hus

## Tre metoder - sammenligning

| Metode | Medium | Hastighet | Eksempel |
|--------|--------|-----------|----------|
| Varmeledning | Faste stoff, væsker | Langsom | Varme gjennom vegg |
| Konveksjon | Væsker, gasser | Middels | Oppvarming av rom |
| Varmestråling | Ingen (vakuum OK) | Rask (lysets fart) | Solens varme |`,
    },
    {
      id: 'fys1-5-2-def-varmestråling',
      type: 'definition',
      title: 'Varmestråling',
      content: 'Varmestråling er overføring av varme ved elektromagnetisk stråling. Krever ikke et medium og kan gå gjennom vakuum. Eneste måte varme kan overføres i vakuum.',
    },
    {
      id: 'fys1-5-2-isolasjon',
      type: 'text',
      content: `# Isolasjon og U-verdi

## Isolasjon

**Isolasjon** brukes til å redusere varmetap (eller varmeøkning).

**Prinsipp:**
- Bruk materialer med lav varmeledningsevne
- Luft er en god isolator ($k = 0{,}026 \\text{ W/(m·K)}$)
- Mange isolasjonsmaterialer inneholder luft (porøse materialer)

**Eksempler på isolasjonsmaterialer:**
- **Mineralull:** Tynne glassfiber med luft mellom
- **Polystyren:** Skumplast med luftbobler
- **Cellulose:** Finrevet papir med luft
- **Dobbeltglass:** To glasspanel med luftlag

**Hvordan isolasjon virker:**

1. **Varmeledning reduseres:**
   - Lav $k$-verdi
   - Luftlommer hindrer varmeledning

2. **Konveksjon reduseres:**
   - Små luftrom forhindrer luftstrømning
   - Porøs struktur holder luft på plass

3. **Varmestråling reduseres:**
   - Reflekterende overflater (f.eks. aluminiumsfolie)
   - Reflekterer stråling tilbake

## U-verdi

**U-verdien** (varmegjennomgangskoeffisienten) beskriver hvor godt et bygningselement isolerer.

**Definisjon:**

$$U = \\frac{1}{R_{\\text{total}}}$$

der $R$ er varmeledningsmotstanden.

**Enklere:**

For et enkelt lag:

$$U = \\frac{k}{d}$$

For flere lag:

$$U = \\frac{1}{\\sum \\frac{d_i}{k_i}}$$

**Enhet:** W/(m²·K)

**Betydning:**
- **Lav U-verdi:** God isolasjon, lite varmetap
- **Høy U-verdi:** Dårlig isolasjon, mye varmetap

**Varmetap gjennom bygningselement:**

$$P = U \\cdot A \\cdot \\Delta T$$

**Typiske U-verdier:**

| Bygningselement | U-verdi (W/(m²·K)) |
|-----------------|-------------------|
| Yttervegg (moderne) | 0,18 |
| Yttervegg (gammel) | 0,5 - 1,0 |
| Tak (moderne) | 0,13 |
| Vindu (tredobbelt) | 0,8 |
| Vindu (dobbelt) | 1,2 |
| Vindu (enkelt) | 5,0 |
| Gulv mot grunn | 0,15 |

**Krav i byggteknisk forskrift (TEK17):**
- Yttervegg: $U \\leq 0{,}18 \\text{ W/(m}^2\\text{·K)}$
- Tak: $U \\leq 0{,}13 \\text{ W/(m}^2\\text{·K)}$
- Vindu/dør: $U \\leq 0{,}8 \\text{ W/(m}^2\\text{·K)}$`,
    },
    {
      id: 'fys1-5-2-def-u-verdi',
      type: 'definition',
      title: 'U-verdi',
      content: 'U-verdien (varmegjennomgangskoeffisienten) beskriver hvor godt et bygningselement isolerer. Måles i W/(m²·K). Lav U-verdi betyr god isolasjon.',
    },
    {
      id: 'fys1-5-2-ex-u-verdi',
      type: 'example',
      title: 'Eksempel: Varmetap gjennom yttervegg',
      problem: 'En yttervegg har areal 40 m² og U-verdi 0,20 W/(m²·K). Temperaturen inne er 20°C og ute -5°C. Hvor stort er varmetapet gjennom veggen?',
      solution: `**Gitt:**
- $A = 40 \\text{ m}^2$
- $U = 0{,}20 \\text{ W/(m}^2\\text{·K)}$
- $T_{\\text{inne}} = 20 \\text{°C}$
- $T_{\\text{ute}} = -5 \\text{°C}$

**Temperaturforskjell:**

$$\\Delta T = 20 - (-5) = 25 \\text{ K}$$

**Bruk formelen:**

$$P = U \\cdot A \\cdot \\Delta T$$

$$P = 0{,}20 \\cdot 40 \\cdot 25$$

$$P = 200 \\text{ W}$$

**Svar:** Varmetapet er 200 W.

**Tolkning:** Dette er varmetapet kun gjennom denne veggen. Totalt varmetap i et hus inkluderer også vinduer, tak, gulv, dører og luftlekkasjer.`,
    },
  ],
  exercises: [
    {
      id: 'fys1-5-2-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar forskjellen mellom varmeledning, konveksjon og varmestråling. Gi ett eksempel på hver.',
      solution: `**1. Varmeledning (konduksjon):**

**Definisjon:** Varme overføres gjennom direkte kontakt mellom molekyler

**Hvordan:** Molekyler kolliderer og overfører energi fra raskere til langsommere molekyler

**Krever:** Direkte kontakt, stoff (fast, væske eller gass)

**Eksempel:** Håndtaket på en panne blir varmt når pannen varmes på komfyren

---

**2. Konveksjon:**

**Definisjon:** Varme overføres ved at varmt stoff beveger seg

**Hvordan:** Varm væske/gass stiger (lavere tetthet), kald synker, sirkulasjon oppstår

**Krever:** Væske eller gass som kan strømme

**Eksempel:** Varm luft fra en radiator stiger opp og sirkulerer i rommet

---

**3. Varmestråling (radiasjon):**

**Definisjon:** Varme overføres ved elektromagnetisk stråling

**Hvordan:** Legemer sender ut stråling som transporterer energi

**Krever:** Intet medium (kan gå gjennom vakuum)

**Eksempel:** Solens varme når jorden gjennom vakuum i verdensrommet

---

**Sammenligning:**

| Metode | Medium | Bevegelse | Eksempel |
|--------|--------|-----------|----------|
| Varmeledning | Stoff | Energi, ikke stoff | Panne |
| Konveksjon | Væske/gass | Stoffet beveger seg | Radiator |
| Varmestråling | Intet (vakuum OK) | Stråling | Solen |`,
      hints: ['Tenk på hvordan energien overføres', 'Krever de et medium?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-2-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hvorfor er metaller gode varmeledere?',
      solution: `**Årsaker:**

**1. Frie elektroner:**
- Metaller har frie elektroner (ikke bundet til atomer)
- Elektronene kan bevege seg fritt gjennom metallet
- Elektroner i varm ende beveger seg raskt
- Disse elektronene kolliderer med elektroner i kald ende
- Energi overføres raskt gjennom elektronene

**2. Tett atomstruktur:**
- Metallatomer er tett pakket
- Kort avstand mellom atomer
- Vibrasjoner overføres lett fra atom til atom

**3. Begge mekanismer:**
- Både frie elektroner og atomvibrasjoner bidrar
- Elektronene er den viktigste mekanismen i metaller
- Derfor er metaller mye bedre varmeledere enn ikke-metaller

**Sammenligning:**
- **Kobber:** $k = 400 \\text{ W/(m·K)}$ (meget god)
- **Tre:** $k = 0{,}12 \\text{ W/(m·K)}$ (dårlig)
- Forholdet: Kobber leder varme ~3300 ganger bedre enn tre!

**Konklusjon:** Metaller er gode varmeledere pga. frie elektroner som raskt transporterer energi.`,
      hints: ['Hva er spesielt med metallers struktur?', 'Tenk på frie elektroner'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-2-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En aluminiumsstang har lengde 1,0 m og tverrsnittareal 20 cm². Den ene enden har temperatur 100°C og den andre 20°C. Hvor stor er varmestrømmen gjennom stangen?\n\nVarmeledningsevne for aluminium: $k = 237 \\text{ W/(m·K)}$',
      solution: `**Gitt:**
- $d = 1{,}0 \\text{ m}$
- $A = 20 \\text{ cm}^2 = 0{,}002 \\text{ m}^2$
- $T_1 = 100 \\text{°C}$
- $T_2 = 20 \\text{°C}$
- $k = 237 \\text{ W/(m·K)}$

**Temperaturforskjell:**

$$\\Delta T = 100 - 20 = 80 \\text{ K}$$

**Bruk formelen:**

$$P = \\frac{kA\\Delta T}{d}$$

$$P = \\frac{237 \\cdot 0{,}002 \\cdot 80}{1{,}0}$$

$$P = \\frac{37{,}92}{1{,}0} = 37{,}92 \\text{ W}$$

**Svar:** Varmestrømmen er omtrent 38 W.`,
      hints: ['Bruk $P = \\frac{kA\\Delta T}{d}$', 'Husk å konvertere cm² til m²'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-2-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan dobbeltglass reduserer varmetap bedre enn enkeltglass.',
      solution: `**Dobbeltglass:**

Dobbeltglass består av to glasspanel med et luftlag (eller gass som argon) mellom.

**Hvordan det reduserer varmetap:**

**1. Varmeledning reduseres:**
- Luft har lav varmeledningsevne ($k = 0{,}026 \\text{ W/(m·K)}$)
- Glass har høyere varmeledningsevne ($k = 0{,}8 \\text{ W/(m·K)}$)
- Luftlaget fungerer som isolasjon
- Mindre varme ledes gjennom

**2. Konveksjon reduseres:**
- Luftlaget er tynt (typisk 10-15 mm)
- For tynt til at konveksjonsstrømmer kan etableres
- Luft holder seg stillestående
- Stillestående luft isolerer bedre enn strømmende luft

**3. Varmestråling reduseres (ved lavemisjonsglass):**
- Spesialbehandlet glass reflekterer infrarød stråling
- Varme stråles tilbake inn i rommet
- Mindre varmetap via stråling

**Sammenligning:**

| Type | U-verdi (W/(m²·K)) | Varmetap (relativ) |
|------|-------------------|-------------------|
| Enkeltglass | 5,0 | 100% |
| Dobbeltglass | 1,2 | 24% |
| Tredobbeltglass | 0,8 | 16% |

**Konklusjon:** Dobbeltglass reduserer varmetap til ~24% sammenlignet med enkeltglass, hovedsakelig ved å redusere varmeledning og konveksjon.`,
      hints: ['Hva er mellom glassene?', 'Tenk på alle tre metoder for varmeoverføring'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-2-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvorfor blir det kaldere på natten i ørkenen enn i regnskogen, selv om begge har varmt klima?',
      solution: `**Årsaker:**

**Ørken:**

**1. Liten luftfuktighet:**
- Tørr luft inneholder lite vanndamp
- Vanndamp er en drivhusgass
- Lite vanndamp → lite drivhuseffekt
- Varme stråles raskt ut i verdensrommet (varmestråling)

**2. Ingen skydekke:**
- Skyfri himmel
- Intet som hindrer varmestråling ut i verdensrommet
- Varme forsvinner raskt om natten

**3. Lav spesifikk varmekapasitet (sand):**
- Sand har lav spesifikk varmekapasitet
- Varmes raskt opp om dagen
- Avkjøles raskt om natten

---

**Regnskog:**

**1. Høy luftfuktighet:**
- Fuktig luft inneholder mye vanndamp
- Vanndamp absorberer infrarød stråling
- Drivhuseffekt holder på varmen
- Varme stråles tilbake til bakken

**2. Skydekke:**
- Ofte skyer om natten
- Skyer reflekterer varmestråling tilbake til bakken
- Varme holdes nær bakken

**3. Vegetasjon:**
- Planter avgir vanndamp (transpirasjon)
- Øker luftfuktigheten
- Forsterker drivhuseffekten

---

**Sammenligning:**

| Faktor | Ørken | Regnskog |
|--------|-------|----------|
| Luftfuktighet | Lav | Høy |
| Skyer | Få | Mange |
| Varmestråling ut | Stor | Liten |
| Temperaturfall natt | Stort | Lite |

**Konklusjon:** Ørkenen mister varme raskt om natten pga. lav luftfuktighet og skyfri himmel, mens regnskogen holder på varmen pga. høy luftfuktighet og skydekke.`,
      hints: ['Tenk på varmestråling', 'Hva holder på varmen?', 'Drivhuseffekt'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-2-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Et vindu har areal 1,5 m² og U-verdi 1,2 W/(m²·K). Temperaturen inne er 22°C og ute 5°C. Hvor stort er varmetapet gjennom vinduet?',
      solution: `**Gitt:**
- $A = 1{,}5 \\text{ m}^2$
- $U = 1{,}2 \\text{ W/(m}^2\\text{·K)}$
- $T_{\\text{inne}} = 22 \\text{°C}$
- $T_{\\text{ute}} = 5 \\text{°C}$

**Temperaturforskjell:**

$$\\Delta T = 22 - 5 = 17 \\text{ K}$$

**Bruk formelen:**

$$P = U \\cdot A \\cdot \\Delta T$$

$$P = 1{,}2 \\cdot 1{,}5 \\cdot 17$$

$$P = 30{,}6 \\text{ W}$$

**Svar:** Varmetapet er omtrent 31 W.`,
      hints: ['Bruk $P = U \\cdot A \\cdot \\Delta T$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-2-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvorfor brukes flamingo (polystyren) som isolasjon i bygninger?',
      solution: `**Egenskaper ved flamingo (polystyren):**

**1. Lav varmeledningsevne:**
- $k \\approx 0{,}03 \\text{ W/(m·K)}$
- Meget lav sammenlignet med andre materialer
- God isolator

**2. Inneholder luft:**
- 98% av volumet er luft
- Luft har lav varmeledningsevne ($k = 0{,}026 \\text{ W/(m·K)}$)
- Luften er fanget i små, lukkede celler
- Forhindrer konveksjon

**3. Lav tetthet (lett):**
- Lett å transportere og montere
- Belaster ikke konstruksjonen

**4. Fuktsikker:**
- Absorberer ikke vann
- Beholder isolasjonsevnen i fuktige forhold

**5. Billig:**
- Kostnadseffektivt isolasjonsmateriale

**6. Lett å bearbeide:**
- Kan kuttes i ønsket form

**Ulemper:**

**1. Brennbar:**
- Kan brenne og slippe ut giftige gasser
- Må beskyttes med brannhemmende materialer

**2. Ikke bærekraftig:**
- Laget av petroleum
- Brytes ikke ned biologisk

**Konklusjon:** Flamingo brukes fordi det har lav varmeledningsevne, er lett, billig og fuktsikkert, men må håndteres forsiktig pga. brannfare.`,
      hints: ['Hva er strukturen til flamingo?', 'Hva er fordeler og ulemper?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-2-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En yttervegg består av tre lag:\n- Innvendig puss: $d_1 = 2 \\text{ cm}$, $k_1 = 0{,}5 \\text{ W/(m·K)}$\n- Mineralull: $d_2 = 20 \\text{ cm}$, $k_2 = 0{,}04 \\text{ W/(m·K)}$\n- Utvendig puss: $d_3 = 2 \\text{ cm}$, $k_3 = 0{,}5 \\text{ W/(m·K)}$\n\nBeregn U-verdien for veggen.',
      solution: `**Gitt:**
- Lag 1: $d_1 = 0{,}02 \\text{ m}$, $k_1 = 0{,}5 \\text{ W/(m·K)}$
- Lag 2: $d_2 = 0{,}20 \\text{ m}$, $k_2 = 0{,}04 \\text{ W/(m·K)}$
- Lag 3: $d_3 = 0{,}02 \\text{ m}$, $k_3 = 0{,}5 \\text{ W/(m·K)}$

**For flere lag beregnes total varmeledningsevne ved:**

$$\\frac{1}{U} = \\frac{d_1}{k_1} + \\frac{d_2}{k_2} + \\frac{d_3}{k_3}$$

**Beregn hver term:**

$$\\frac{d_1}{k_1} = \\frac{0{,}02}{0{,}5} = 0{,}04 \\text{ m}^2\\text{K/W}$$

$$\\frac{d_2}{k_2} = \\frac{0{,}20}{0{,}04} = 5{,}0 \\text{ m}^2\\text{K/W}$$

$$\\frac{d_3}{k_3} = \\frac{0{,}02}{0{,}5} = 0{,}04 \\text{ m}^2\\text{K/W}$$

**Sum:**

$$\\frac{1}{U} = 0{,}04 + 5{,}0 + 0{,}04 = 5{,}08 \\text{ m}^2\\text{K/W}$$

**U-verdi:**

$$U = \\frac{1}{5{,}08} \\approx 0{,}197 \\text{ W/(m}^2\\text{·K)}$$

**Svar:** U-verdien er omtrent 0,20 W/(m²·K).

**Tolkning:** Dette er en god U-verdi, nær kravet i TEK17 ($U \\leq 0{,}18$). Mineralullen dominerer isolasjonen (5,0 av totalt 5,08).`,
      hints: ['Bruk $\\frac{1}{U} = \\sum \\frac{d_i}{k_i}$', 'Husk å konvertere cm til m'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-2-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et hus har totalt vindusareal 30 m² med U-verdi 1,2 W/(m²·K) og veggareal 150 m² med U-verdi 0,20 W/(m²·K). Temperaturen inne er 20°C og gjennomsnittstemperaturen ute om vinteren er -5°C.\n\na) Beregn varmetapet gjennom vinduene.\n\nb) Beregn varmetapet gjennom veggene.\n\nc) Hva er totalvarmetapet?\n\nd) Hvor mye energi går tapt i løpet av en uke?',
      solution: `**Gitt:**
- Vinduer: $A_v = 30 \\text{ m}^2$, $U_v = 1{,}2 \\text{ W/(m}^2\\text{·K)}$
- Vegger: $A_w = 150 \\text{ m}^2$, $U_w = 0{,}20 \\text{ W/(m}^2\\text{·K)}$
- $\\Delta T = 20 - (-5) = 25 \\text{ K}$

**a) Varmetap gjennom vinduene:**

$$P_v = U_v \\cdot A_v \\cdot \\Delta T$$

$$P_v = 1{,}2 \\cdot 30 \\cdot 25 = 900 \\text{ W}$$

**Svar a:** 900 W

---

**b) Varmetap gjennom veggene:**

$$P_w = U_w \\cdot A_w \\cdot \\Delta T$$

$$P_w = 0{,}20 \\cdot 150 \\cdot 25 = 750 \\text{ W}$$

**Svar b:** 750 W

---

**c) Totalvarmetap:**

$$P_{\\text{total}} = P_v + P_w = 900 + 750 = 1650 \\text{ W} = 1{,}65 \\text{ kW}$$

**Svar c:** 1,65 kW

---

**d) Energi tapt i en uke:**

En uke = 7 dager = $7 \\times 24 \\text{ timer} = 168 \\text{ timer}$

$$E = P \\cdot t = 1650 \\cdot 168 \\cdot 3600 \\text{ J}$$

$$E = 998\\,784\\,000 \\text{ J} \\approx 999 \\text{ MJ}$$

Eller i kWh:

$$E = 1{,}65 \\text{ kW} \\times 168 \\text{ h} = 277{,}2 \\text{ kWh}$$

**Svar d:** Omtrent 277 kWh (eller 999 MJ) går tapt i løpet av en uke.

**Tolkning:** Dette er betydelig energitap! Merket: Vinduene (30 m²) taper mer enn veggene (150 m²) fordi vinduene har mye høyere U-verdi.`,
      hints: ['Beregn hvert varmetap separat', 'Bruk $E = P \\cdot t$ for energi'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-2-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor romdrakter for astronauter er hvite på utsiden, men har mange lag med reflekterende folie på innsiden.',
      solution: `**Romdrakt-design for temperaturregulering:**

Astronauter møter ekstreme temperaturer i verdensrommet:
- **I sollys:** Opp til +120°C
- **I skyggen:** Ned til -150°C

**Hvit ytre overflate:**

**1. Reflekterer sollys:**
- Hvit overflate reflekterer det meste av synlig lys og infrarød stråling
- Mindre absorpsjon av solens varme
- Forhindrer overoppheting i sollys

**2. God emitter i infrarødt:**
- Hvit overflate er også en god emitter av infrarød stråling
- Overflødig varme fra astronautens kropp kan stråles ut
- Forhindrer at astronauten blir for varm

**3. Lav absorpsjon:**
- Lav absorpsjon → lav oppvarming fra solen
- Kritisk når solen skinner direkte på drakten

---

**Reflekterende folie på innsiden:**

**1. Reduserer varmestråling:**
- Reflekterende folie (aluminiumsbelagt Mylar) reflekterer infrarød stråling
- Kroppens varmestråling reflekteres tilbake
- Holder på varmen fra kroppen

**2. Flere lag (isolasjon):**
- Mange lag skaper luftlommer
- Luft er god isolator
- Reduserer varmeledning

**3. Vakuum mellom lag:**
- Noen romdrakter har vakuum mellom lagene
- Ingen konveksjon i vakuum
- Kun varmestråling kan skje
- Reflekterende folie minimerer varmestråling

---

**Sammenligning:**

| Lag | Funksjon | Metode |
|-----|----------|--------|
| Hvit utside | Reflekterer sol, sender ut overskuddsvarme | Varmestråling |
| Reflekterende innsiden | Holder på kroppens varme | Varmestråling |
| Flere lag | Isolasjon | Varmeledning/konveksjon |

---

**Konklusjon:**

**Hvit utside:**
- Beskytter mot solens intense varme
- Sender ut overskuddsvarme

**Reflekterende innsiden:**
- Holder på kroppens varme i ekstrem kulde
- Forhindrer varmetap

Dette systemet lar astronauten holde konstant temperatur (~20°C) selv når utsiden veksler mellom +120°C og -150°C.`,
      hints: ['Tenk på varmestråling', 'Hva skjer i sollys vs. skyggen?', 'Refleksjon og emisjon'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
