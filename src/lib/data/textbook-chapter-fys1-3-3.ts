/**
 * Fysikk 1 - Kapittel 3.3: Bevegelse med friksjon og luftmotstand
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_3_3: TextbookChapter = {
  id: 'fys1-3-3',
  courseId: 'fys1',
  chapterNumber: '3.3',
  title: 'Bevegelse med friksjon og luftmotstand',
  description: 'Lær om statisk og kinetisk friksjon, luftmotstand, terminalfart og numerisk modellering av bevegelse.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skille mellom statisk og kinetisk friksjon',
    'analysere bevegelse på skråplan med friksjon',
    'forstå luftmotstand og terminalfart',
    'bruke numeriske metoder til å modellere bevegelse med varierende krefter',
  ],
  content: [
    {
      id: 'fys1-3-3-intro',
      type: 'text',
      content: `# Bevegelse med friksjon og luftmotstand

I kapittel 3.2 så vi på friksjonskraft og luftmotstand. Nå skal vi analysere hvordan disse kreftene påvirker bevegelse.

**Hovedtemaer:**
1. Statisk vs. kinetisk friksjon i detalj
2. Bevegelse på skråplan med friksjon
3. Luftmotstand og terminalfart
4. Numerisk modellering`,
    },
    {
      id: 'fys1-3-3-statisk-kinetisk',
      type: 'text',
      content: `# Statisk vs. kinetisk friksjon

## Statisk friksjon ($f_s$)

**Når:** Ingen relativ bevegelse mellom overflatene

**Egenskaper:**

**1. Variabel størrelse**
- Fra 0 til maksimumsverdi
- Tilpasser seg påført kraft

**2. Maksimal verdi**
$$f_{s,\\text{maks}} = \\mu_s N$$

**3. Generell regel**
$$f_s \\leq \\mu_s N$$

**4. Retning**
- Motsatt av kraften som prøver å skape bevegelse
- Parallell med overflaten

**Eksempel: Dytte på kasse**

Du dytter horisontalt med kraft $F$ på en kasse med masse $m$.

**Hvis F er liten:**
- Kassen står stille
- $f_s = F$ (lik og motsatt)
- $a = 0$

**Øker F gradvis:**
- $f_s$ øker tilsvarende
- Kassen står stille
- $f_s = F$ hele tiden

**Når $F = f_{s,\\text{maks}} = \\mu_s N$:**
- Kassen akkurat starter bevegelse
- Kritisk punkt

**Når $F > \\mu_s N$:**
- Kassen begynner å bevege seg
- Kinetisk friksjon overtar

## Kinetisk friksjon ($f_k$)

**Når:** Relativ bevegelse mellom overflatene

**Egenskaper:**

**1. Konstant størrelse**
$$f_k = \\mu_k N$$

**2. Uavhengig av fart**
- I enkel modell: samme $f_k$ ved alle farter
- I virkeligheten: varierer litt med fart

**3. Alltid mindre enn maksimal statisk friksjon**
$$\\mu_k < \\mu_s \\quad \\Rightarrow \\quad f_k < f_{s,\\text{maks}}$$

**4. Retning**
- Alltid motsatt av bevegelsesretningen
- Parallell med overflaten

## Graf: Friksjon vs. påført kraft

Hvis vi gradvis øker kraften $F$ på en kasse:

**Fase 1: Statisk friksjon (kasse i ro)**
- $F$ øker fra 0 til $\\mu_s N$
- $f_s$ øker fra 0 til $\\mu_s N$
- $f_s = F$ (lineær)
- Kasse står stille

**Fase 2: Overgang (kritisk punkt)**
- $F = \\mu_s N$
- $f_s = \\mu_s N$
- Kasse akkurat starter

**Fase 3: Kinetisk friksjon (kasse beveger seg)**
- $F > \\mu_s N$
- $f_k = \\mu_k N$ (konstant)
- Kasse akselererer

**Plutselig reduksjon:** Når kassen starter, "hopper" friksjonen ned fra $\\mu_s N$ til $\\mu_k N$.

## Hvorfor er $\\mu_k < \\mu_s$?

**Mikroskopisk forklaring:**

**Statisk:**
- Overflateruhet "låses" sammen
- Atomer har tid til å danne forbindelser
- Krever mer kraft å "bryte" forbindelsene

**Kinetisk:**
- Overflater glir over hverandre
- Mindre tid til å danne forbindelser
- "Hopper" over ujevnheter
- Mindre motstand

**Praktisk konsekvens:**

Det er lettere å holde noe i bevegelse enn å starte bevegelsen.

**Eksempel:** Skyve bil
- Hardest å få den i gang ($f_s$ stor)
- Lettere å holde den rullende ($f_k$ mindre)`,
    },
    {
      id: 'fys1-3-3-skraplan',
      type: 'text',
      content: `# Bevegelse på skråplan med friksjon

Skråplan med friksjon er et klassisk problem i dynamikk.

## Grunnleggende analyse

**Gitt:**
- Masse: $m$
- Vinkel: $\\theta$
- Friksjonskoeffisienter: $\\mu_s$ og $\\mu_k$

**Krefter:**
1. Tyngdekraft: $G = mg$ (vertikal nedover)
2. Normalkraft: $N$ (vinkelrett på skråplan)
3. Friksjon: $f$ (langs skråplan)

**Splitt tyngdekraft:**
- Parallell: $G_{\\parallel} = mg \\sin \\theta$ (ned langs skråplan)
- Vinkelrett: $G_{\\perp} = mg \\cos \\theta$ (inn i skråplan)

**Likevekt vinkelrett på skråplan:**
$$N = G_{\\perp} = mg \\cos \\theta$$

**Langs skråplan:** Avhenger av om objektet beveger seg eller ikke.

## Tre mulige situasjoner

### Situasjon 1: Objekt står stille

**Betingelse:** Statisk friksjon kan holde objektet.

**Langs skråplan (positiv: ned):**
$$G_{\\parallel} - f_s = 0$$
$$f_s = G_{\\parallel} = mg \\sin \\theta$$

**For at dette skal fungere:**
$$f_s \\leq f_{s,\\text{maks}}$$
$$mg \\sin \\theta \\leq \\mu_s mg \\cos \\theta$$
$$\\tan \\theta \\leq \\mu_s$$

**Konklusjon:** Objektet står stille hvis $\\theta \\leq \\arctan(\\mu_s)$

**Grensevinkel:**
$$\\theta_{\\text{maks}} = \\arctan(\\mu_s)$$

Hvis $\\theta > \\theta_{\\text{maks}}$, glir objektet ned.

### Situasjon 2: Objekt glir ned med konstant fart

**Betingelse:** Kinetisk friksjon = gravitasjonskomponent.

**Langs skråplan:**
$$G_{\\parallel} - f_k = 0$$
$$mg \\sin \\theta - \\mu_k mg \\cos \\theta = 0$$
$$\\tan \\theta = \\mu_k$$

**Konklusjon:** Objektet glir med konstant fart hvis $\\theta = \\arctan(\\mu_k)$

### Situasjon 3: Objekt glir ned med akselerasjon

**Betingelse:** Gravitasjonskomponent > kinetisk friksjon.

**Langs skråplan (positiv: ned):**
$$G_{\\parallel} - f_k = ma$$
$$mg \\sin \\theta - \\mu_k mg \\cos \\theta = ma$$
$$a = g(\\sin \\theta - \\mu_k \\cos \\theta)$$

**Konklusjon:** Objektet akselererer nedover hvis $\\theta > \\arctan(\\mu_k)$

## Oppsummering: Skråplan med friksjon

**Grensevinkler:**
- $\\theta_1 = \\arctan(\\mu_k)$: Konstant fart nedover
- $\\theta_2 = \\arctan(\\mu_s)$: Akkurat starter å gli (fra ro)

Siden $\\mu_k < \\mu_s$: $\\theta_1 < \\theta_2$

**Hvis $\\theta < \\theta_1$:**
- Står stille (hvis startet i ro)
- Bremser til stopp (hvis startet med bevegelse)

**Hvis $\\theta_1 < \\theta < \\theta_2$:**
- Står stille (hvis startet i ro, $f_s$ holder)
- Glir med konstant fart eller akselererer ned (hvis startet med bevegelse)

**Hvis $\\theta > \\theta_2$:**
- Glir nedover med akselerasjon (alltid)`,
    },
    {
      id: 'fys1-3-3-ex-skraplan',
      type: 'example',
      title: 'Eksempel: Kasse på skråplan',
      problem: 'En kasse med masse 30 kg legges på et skråplan med vinkel 20°. Friksjonskoeffisientene er $\\mu_s = 0.45$ og $\\mu_k = 0.35$.\n\na) Vil kassen gli ned hvis den legges forsiktig på skråplanet?\n\nb) Hvis kassen dyttes ned og får fart, vil den fortsette med konstant fart, akselerere eller bremse?\n\nc) Hva er akselerasjonen hvis kassen glir nedover?',
      solution: `**Gitt:**
- Masse: $m = 30$ kg
- Vinkel: $\\theta = 20°$
- $\\mu_s = 0.45$, $\\mu_k = 0.35$
- $g = 9.8$ m/s²

**a) Vil kassen gli ned fra ro?**

**Finn grensevinkel for statisk friksjon:**
$$\\theta_{\\text{maks}} = \\arctan(\\mu_s) = \\arctan(0.45) = 24.2°$$

**Sammenlign:**
- Faktisk vinkel: $\\theta = 20°$
- Grensevinkel: $\\theta_{\\text{maks}} = 24.2°$

Siden $20° < 24.2°$:

**Svar:** Nei, kassen vil ikke gli ned. Statisk friksjon holder den.

**Bekreftelse med krefter:**

$$G_{\\parallel} = mg \\sin 20° = 30 \\cdot 9.8 \\cdot 0.342 = 100.5 \\text{ N}$$
$$N = mg \\cos 20° = 30 \\cdot 9.8 \\cdot 0.940 = 276.4 \\text{ N}$$
$$f_{s,\\text{maks}} = \\mu_s N = 0.45 \\cdot 276.4 = 124.4 \\text{ N}$$

Siden $G_{\\parallel} = 100.5$ N $< f_{s,\\text{maks}} = 124.4$ N: Står stille ✓

**b) Hvis kassen har fart nedover?**

**Finn grensevinkel for kinetisk friksjon:**
$$\\theta_{\\text{konstant}} = \\arctan(\\mu_k) = \\arctan(0.35) = 19.3°$$

**Sammenlign:**
- Faktisk vinkel: $\\theta = 20°$
- Grensevinkel: $\\theta_{\\text{konstant}} = 19.3°$

Siden $20° > 19.3°$:

**Svar:** Kassen vil akselerere nedover (gravitasjonskomponent > kinetisk friksjon).

**c) Akselerasjon**

$$a = g(\\sin \\theta - \\mu_k \\cos \\theta)$$
$$a = 9.8(\\sin 20° - 0.35 \\cos 20°)$$
$$a = 9.8(0.342 - 0.35 \\cdot 0.940)$$
$$a = 9.8(0.342 - 0.329)$$
$$a = 9.8 \\cdot 0.013 = 0.127 \\text{ m/s}^2$$

**Svar:** $a = 0.13$ m/s² nedover langs skråplanet

**Tolkning:**
- Liten akselerasjon fordi $\\theta$ er nær grensevinkelen
- Hvis $\\theta = 19.3°$: $a = 0$ (konstant fart)
- Hvis $\\theta < 19.3°$: $a < 0$ (bremser)`,
    },
    {
      id: 'fys1-3-3-luftmotstand',
      type: 'text',
      content: `# Luftmotstand

**Definisjon:** Luftmotstand er friksjonskreft fra luften på et objekt i bevegelse.

**Symbol:** $F_L$ eller $D$ (drag)

## Modeller for luftmotstand

**Lav fart (laminær strømning):**
$$F_L = bv$$

hvor:
- $b$ = dempingskonstant [kg/s]
- $v$ = fart [m/s]

**Høy fart (turbulent strømning):**
$$F_L = kv^2$$

hvor:
- $k$ = luftmotstandskonstant [kg/m]
- $v$ = fart [m/s]

**Mer nøyaktig modell:**
$$F_L = \\frac{1}{2}C_D \\rho A v^2$$

hvor:
- $C_D$ = luftmotstandskoeffisient (dimensjonsløs)
- $\\rho$ = lufttetthet [kg/m³]
- $A$ = tverrsnittareal [m²]
- $v$ = fart [m/s]

**Typiske verdier:**

| Objekt | $C_D$ |
|--------|-------|
| Kule | 0.47 |
| Skive (flat mot strømning) | 1.17 |
| Bil (typisk) | 0.3-0.4 |
| Sykklist | 0.9 |
| Fallskjerm | 1.5 |
| Strømlinjeformet dråpe | 0.04 |

**Faktorer som påvirker luftmotstand:**

**1. Fart (v):**
- Kvadratisk: Dobbel fart → 4× luftmotstand
- Dominant faktor ved høye farter

**2. Tverrsnittareal (A):**
- Større areal → mer luftmotstand
- Derfor krummer skydrivere seg sammen for å falle fortere

**3. Form ($C_D$):**
- Strømlinjeforme r → lavere $C_D$
- Derfor er biler strømlinjeformet

**4. Lufttetthet ($\\rho$):**
- Høyde: Luften er tynnere høyere opp
- Temperatur: Kaldere luft er tettere

## Retning

**Alltid:** Motsatt av bevegelsesretningen

**Fall nedover:** Luftmotstand oppover

## Energi

Luftmotstand omdanner kinetisk energi til varme:
- Molekyler i luften får høyere fart
- Objektet varmes opp
- Energi "forsvinner" fra systemet`,
    },
    {
      id: 'fys1-3-3-terminal',
      type: 'text',
      content: `# Terminalfart

**Definisjon:** Terminalfart er den konstante farten et objekt får når luftmotstand = tyngdekraft.

## Analyse av fall med luftmotstand

**Situasjon:** Objekt faller vertikalt i luften.

**Krefter:**
1. Tyngdekraft: $G = mg$ (nedover)
2. Luftmotstand: $F_L = kv^2$ (oppover, for høye farter)

**Newtons 2. lov (positiv: nedover):**
$$mg - kv^2 = ma$$
$$a = g - \\frac{k}{m}v^2$$

**Tre faser:**

### Fase 1: Start (v ≈ 0)

- Luftmotstand: $F_L \\approx 0$ (liten fart)
- Akselerasjon: $a \\approx g = 9.8$ m/s²
- Fritt fall

### Fase 2: Øker fart

- Luftmotstand øker: $F_L = kv^2$
- Akselerasjon reduseres: $a = g - \\frac{k}{m}v^2$
- Fortsatt akselererer, men mindre

### Fase 3: Terminalfart (v = $v_t$)

**Betingelse:** Akselerasjon = 0

$$mg - kv_t^2 = 0$$
$$kv_t^2 = mg$$
$$v_t = \\sqrt{\\frac{mg}{k}}$$

**Egenskaper ved terminalfart:**

**1. Konstant fart**
- $a = 0$
- Faller med $v_t$ resten av fallet

**2. Avhenger av masse**
- Større masse → høyere $v_t$
- Derfor faller stein raskere enn fjær (i luft)

**3. Avhenger av areal**
- Større areal → større $k$ → lavere $v_t$
- Derfor virker fallskjerm

**4. Avhenger av form**
- Strømlinjeformet → mindre $k$ → høyere $v_t$

## Mer nøyaktig formel

Fra $F_L = \\frac{1}{2}C_D \\rho A v^2$:

$$v_t = \\sqrt{\\frac{2mg}{C_D \\rho A}}$$

**Typiske terminalfarter:**

| Objekt | $v_t$ |
|--------|-------|
| Skydiver (buklandingsstilling) | ~60 m/s (210 km/t) |
| Skydiver (hodestup) | ~90 m/s (320 km/t) |
| Med fallskjerm | ~5 m/s (18 km/t) |
| Tennisball | ~30 m/s |
| Regndrå pe (1 mm) | ~4 m/s |
| Mynt (flatt) | ~10 m/s |

## Tid til terminalfart

**Ikke øyeblikkelig:** Det tar tid å nå $v_t$.

**Typisk:**
- Skydiver når ~95% av $v_t$ etter ~10-15 sekunder
- Avhenger av $m$, $k$, og $g$

**Differensialligning:**
$$\\frac{dv}{dt} = g - \\frac{k}{m}v^2$$

Løsningen er kompleks (krever integrasjon).

## Praktiske konsekvenser

**1. Fall fra stor høyde:**
- Uten luftmotstand: $v$ øker ubegrenset
- Med luftmotstand: $v$ → $v_t$ (tryggere!)

**2. Fallskjerm:**
- Øker $A$ dramatisk
- Reduserer $v_t$ fra 60 m/s til 5 m/s
- Overleves!

**3. Romfartøy ved gjeninntreden:**
- Meget høy fart (7000 m/s)
- $F_L$ er enorm ($\\propto v^2$)
- Massiv varme
- Krever varmeskjold`,
    },
    {
      id: 'fys1-3-3-ex-terminal',
      type: 'example',
      title: 'Eksempel: Terminalfart for skydiver',
      problem: 'En skydiver med masse 80 kg hopper fra fly. Luftmotstandskonstanten er $k = 0.22$ kg/m (buklandingsstilling).\n\na) Beregn terminalfarten\n\nb) Hva er akselerasjonen ved $v = 30$ m/s?\n\nc) Skydriveren åpner fallskjerm. Ny konstant: $k = 100$ kg/m. Hva er ny terminalfart?',
      solution: `**Gitt:**
- Masse: $m = 80$ kg
- Buklandingsstilling: $k = 0.22$ kg/m
- Med fallskjerm: $k = 100$ kg/m
- $g = 9.8$ m/s²

**a) Terminalfart (buklandingsstilling)**

**Ved terminalfart:** $mg = kv_t^2$

$$v_t = \\sqrt{\\frac{mg}{k}}$$

$$v_t = \\sqrt{\\frac{80 \\cdot 9.8}{0.22}}$$

$$v_t = \\sqrt{\\frac{784}{0.22}} = \\sqrt{3564} = 59.7 \\text{ m/s}$$

**Svar:** $v_t \\approx 60$ m/s = 216 km/t

**b) Akselerasjon ved v = 30 m/s**

**Newtons 2. lov:**
$$ma = mg - kv^2$$

$$a = g - \\frac{k}{m}v^2$$

$$a = 9.8 - \\frac{0.22}{80} \\cdot 30^2$$

$$a = 9.8 - \\frac{0.22 \\cdot 900}{80}$$

$$a = 9.8 - 2.475 = 7.325 \\text{ m/s}^2$$

**Svar:** $a = 7.3$ m/s² (nedover)

**Tolkning:** Fremdeles stor akselerasjon (75% av $g$), fordi farten er bare halve terminalfarten.

**c) Ny terminalfart (med fallskjerm)**

$$v_{t,\\text{ny}} = \\sqrt{\\frac{mg}{k_{\\text{ny}}}}$$

$$v_{t,\\text{ny}} = \\sqrt{\\frac{80 \\cdot 9.8}{100}}$$

$$v_{t,\\text{ny}} = \\sqrt{7.84} = 2.8 \\text{ m/s}$$

**Svar:** $v_{t,\\text{ny}} = 2.8$ m/s = 10 km/t

**Sammenligning:**
- Uten fallskjerm: 60 m/s (dødelig)
- Med fallskjerm: 2.8 m/s (trygt å lande)
- Fallskjermen reduserer terminalfarten med en faktor 21!

**Akselerasjon rett etter åpning av fallskjerm:**

Hvis skydriveren har $v = 60$ m/s når fallskjermen åpnes:

$$a = g - \\frac{k_{\\text{ny}}}{m}v^2 = 9.8 - \\frac{100}{80} \\cdot 60^2 = 9.8 - 4500 = -4490 \\text{ m/s}^2$$

**Enorm retardasjon!** (460× tyngdeakselerasjon)

Derfor åpnes fallskjerm gradvis (først liten, så stor).`,
    },
    {
      id: 'fys1-3-3-numerisk',
      type: 'text',
      content: `# Numerisk modellering

Mange dynamikkproblemer kan ikke løses analytisk (med formler). Eksempler:
- Luftmotstand avhengig av fart
- Varierende krefter
- Komplekse systemer

**Løsning:** Numeriske metoder (datamaskiner)

## Eulers metode

**Prinsipp:** Tilnærm kontinuerlig bevegelse med små diskrete steg.

**Gitt:**
- Startposisjon: $x_0$
- Starthastighet: $v_0$
- Tidssteg: $\\Delta t$ (liten)

**Algoritme:**

For hvert tidssteg $i$:

**1. Beregn akselerasjon:**
$$a_i = \\frac{F(x_i, v_i, t_i)}{m}$$

hvor $F$ kan avhenge av posisjon, hastighet og tid.

**2. Oppdater hastighet:**
$$v_{i+1} = v_i + a_i \\Delta t$$

**3. Oppdater posisjon:**
$$x_{i+1} = x_i + v_i \\Delta t$$

**4. Oppdater tid:**
$$t_{i+1} = t_i + \\Delta t$$

**5. Gjenta**

**Nøyaktighet:**
- Mindre $\\Delta t$ → mer nøyaktig
- Men også mer beregningstid
- Typisk: $\\Delta t = 0.001$ s - 0.01 s

## Eksempel: Fall med luftmotstand

**Problem:** En ball slippes fra $h = 100$ m. Bruk numerisk metode til å finne når den treffer bakken.

**Gitt:**
- Masse: $m = 0.5$ kg
- Luftmotstandskonstant: $k = 0.01$ kg/m
- Starth øyde: $y_0 = 100$ m
- Starthastighe t: $v_0 = 0$ m/s

**Python-pseudokode:**

\`\`\`python
# Initialverdier
y = 100.0  # posisjon [m]
v = 0.0    # hastighet [m/s]
t = 0.0    # tid [s]
dt = 0.01  # tidssteg [s]

m = 0.5    # masse [kg]
k = 0.01   # luftmotstand [kg/m]
g = 9.8    # gravitasjon [m/s²]

# Løkke
while y > 0:
    # Beregn krefter
    F_G = m * g              # tyngdekraft (nedover)
    F_L = k * v**2           # luftmotstand (oppover)

    # Newtons 2. lov (positiv: nedover)
    a = g - (k/m) * v**2

    # Oppdater hastighet og posisjon
    v = v + a * dt
    y = y - v * dt          # minus fordi nedover
    t = t + dt

print(f"Tid til bakken: {t:.2f} s")
print(f"Sluttfart: {v:.2f} m/s")
\`\`\`

**Resultat:**
- Uten luftmotstand: $t = \\sqrt{\\frac{2h}{g}} = 4.52$ s, $v = 44.3$ m/s
- Med luftmotstand: $t \\approx 4.8$ s, $v \\approx 40$ m/s (terminalfart ennå ikke nådd)

## Fordeler med numeriske metoder

**1. Kan håndtere komplekse krefter**
- Luftmotstand $\\propto v^2$
- Varierende gravitasjon
- Tidsavhengige krefter

**2. Visuell forståelse**
- Kan plotte grafer
- Se hvordan systemet utvikler seg

**3. Lett å modifisere**
- Endre parametere
- Prøve ulike scenarioer

**4. Realistiske modeller**
- Nærmere virkeligheten enn analytiske løsninger

## Begrensninger

**1. Ikke eksakt**
- Tilnærminger
- Avrundingsfeil

**2. Krever datamaskin**
- Kan ikke gjøres for hånd

**3. Gir tall, ikke formler**
- Må kjøre på nytt for nye verdier

**4. Tidkrevende for små $\\Delta t$**
- Trade-off mellom nøyaktighet og tid`,
    },
    {
      id: 'fys1-3-3-note-verktoy',
      type: 'note',
      title: 'Verktøy for numerisk modellering',
      content: `**Python med biblioteker:**
- NumPy: Numeriske beregninger
- Matplotlib: Plotting
- SciPy: Avanserte metoder

**GeoGebra:**
- Grafisk visualisering
- Enkel programmering

**Excel:**
- Enkelt for små problemer
- Gode for grafer

**Dedikerte programvare:**
- MATLAB: Ingeniørfag
- Mathematica: Symbolsk
- Tracker: Videoanalyse`,
    },
  ],
  exercises: [
    {
      id: 'fys1-3-3-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar forskjellen mellom statisk og kinetisk friksjon. Hvorfor er $\\mu_k < \\mu_s$?',
      solution: `**Statisk friksjon ($f_s$):**

**Når:** Ingen relativ bevegelse mellom overflatene

**Egenskaper:**
- Variabel størrelse: $f_s \\leq \\mu_s N$
- Tilpasser seg påført kraft
- Maksimal: $f_{s,\\text{maks}} = \\mu_s N$
- Hindrer bevegelse

**Kinetisk friksjon ($f_k$):**

**Når:** Relativ bevegelse mellom overflatene

**Egenskaper:**
- Konstant størrelse: $f_k = \\mu_k N$
- Uavhengig av fart (enkel modell)
- Motvirker bevegelse

**Hvorfor $\\mu_k < \\mu_s$?**

**Mikroskopisk forklaring:**

**Statisk friksjon:**
- Overflateruhet "låses" sammen
- Atomer/molekyler danner (svake) forbindelser
- Ujevnheter griper inn i hverandre
- Krever mer kraft å "bryte" forbindelsene

**Kinetisk friksjon:**
- Overflater glir over hverandre
- Mindre tid til å danne forbindelser
- "Hopper" over ujevnheter i stedet for å grave seg ned
- Mindre motstand

**Praktisk konsekvens:**
Det er lettere å holde noe i bevegelse enn å starte bevegelsen.

**Eksempel:**
- Skyve bil: Hardest å få den i gang (statisk), lettere å holde rullende (kinetisk)
- Dytte møbel: Stor motstand før den starter, mindre når den glir`,
      hints: ['Statisk = ingen bevegelse', 'Kinetisk = bevegelse', 'Mikroskopisk forklaring'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-3-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En kasse står på et skråplan med vinkel 30°. $\\mu_s = 0.60$. Vil kassen gli ned?',
      solution: `**Gitt:**
- Vinkel: $\\theta = 30°$
- Statisk friksjonskoeffisient: $\\mu_s = 0.60$

**Finn grensevinkel:**

Kassen akkurat starter å gli når:
$$\\tan \\theta = \\mu_s$$
$$\\theta_{\\text{maks}} = \\arctan(\\mu_s) = \\arctan(0.60) = 31.0°$$

**Sammenlign:**
- Faktisk vinkel: $\\theta = 30°$
- Grensevinkel: $\\theta_{\\text{maks}} = 31.0°$

Siden $30° < 31.0°$:

**Svar:** Nei, kassen vil ikke gli ned. Statisk friksjon er sterk nok til å holde den.

**Alternativ metode (med krefter):**

$$G_{\\parallel} = mg \\sin 30° = 0.5mg$$
$$N = mg \\cos 30° = 0.866mg$$
$$f_{s,\\text{maks}} = \\mu_s N = 0.60 \\cdot 0.866mg = 0.520mg$$

Siden $G_{\\parallel} = 0.5mg < f_{s,\\text{maks}} = 0.520mg$: Står stille ✓`,
      hints: ['Finn grensevinkel: arctan(μ_s)', 'Sammenlign med faktisk vinkel'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-3-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En kasse med masse 25 kg glir ned et skråplan med vinkel 25°. $\\mu_k = 0.30$. Beregn akselerasjonen.',
      solution: `**Gitt:**
- Masse: $m = 25$ kg
- Vinkel: $\\theta = 25°$
- Kinetisk friksjonskoeffisient: $\\mu_k = 0.30$
- $g = 9.8$ m/s²

**Krefter langs skråplan:**

**Ned langs skråplan:**
$$G_{\\parallel} = mg \\sin \\theta$$

**Opp langs skråplan (friksjon):**
$$f_k = \\mu_k N = \\mu_k mg \\cos \\theta$$

**Newtons 2. lov (positiv: ned langs skråplan):**
$$G_{\\parallel} - f_k = ma$$
$$mg \\sin \\theta - \\mu_k mg \\cos \\theta = ma$$
$$a = g(\\sin \\theta - \\mu_k \\cos \\theta)$$

$$a = 9.8(\\sin 25° - 0.30 \\cos 25°)$$
$$a = 9.8(0.423 - 0.30 \\cdot 0.906)$$
$$a = 9.8(0.423 - 0.272)$$
$$a = 9.8 \\cdot 0.151 = 1.48 \\text{ m/s}^2$$

**Svar:** $a = 1.5$ m/s² nedover langs skråplanet`,
      hints: ['a = g(sin θ - μ_k cos θ)', 'Positiv retning: ned langs skråplan'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-3-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er terminalfart? Forklar hvorfor en skydiver når terminalfart.',
      solution: `**Terminalfart:**

**Definisjon:** Terminalfart ($v_t$) er den konstante farten et objekt får når luftmotstand er lik tyngdekraften.

**Analyse av skydiver:**

**Krefter:**
1. **Tyngdekraft:** $G = mg$ (nedover, konstant)
2. **Luftmotstand:** $F_L = kv^2$ (oppover, økende med fart)

**Newtons 2. lov (positiv: nedover):**
$$ma = mg - kv^2$$
$$a = g - \\frac{k}{m}v^2$$

**Tre faser:**

**Fase 1: Rett etter hopp (v ≈ 0)**
- Luftmotstand: $F_L \\approx 0$ (liten fart)
- Akselerasjon: $a \\approx g = 9.8$ m/s²
- Nesten fritt fall

**Fase 2: Fart øker**
- Luftmotstand øker: $F_L = kv^2 \\propto v^2$
- Akselerasjon reduseres: $a = g - \\frac{k}{m}v^2$
- Fortsatt akselererer, men mindre og mindre

**Fase 3: Terminalfart (v = $v_t$)**

**Betingelse:** Akselerasjon = 0

$$mg - kv_t^2 = 0$$
$$kv_t^2 = mg$$
$$v_t = \\sqrt{\\frac{mg}{k}}$$

**Ved terminalfart:**
- Luftmotstand = Tyngdekraft
- Resulterende kraft = 0
- Akselerasjon = 0
- Faller med konstant fart $v_t$

**Hvorfor når skydiver terminalfart?**

**Grafisk forståelse:**

Luftmotstand $F_L = kv^2$:
- Ved lav fart: $F_L$ er liten → $a$ stor → fart øker raskt
- Ved høyere fart: $F_L$ øker → $a$ reduseres → fart øker saktere
- Ved $v_t$: $F_L = G$ → $a = 0$ → fart konstant

**Matematisk forståelse:**

Fra $a = g - \\frac{k}{m}v^2$:
- Hvis $v < v_t$: $a > 0$ → fart øker
- Hvis $v = v_t$: $a = 0$ → fart konstant
- Hvis $v > v_t$: $a < 0$ → fart reduseres

Systemet "søker" mot $v_t$.

**Typiske verdier:**
- Skydiver (buklandingsstilling): ~60 m/s (216 km/t)
- Skydiver (hodestup): ~90 m/s (320 km/t)
- Med fallskjerm: ~5 m/s (18 km/t)

**Tid til terminalfart:**
- Skydiver når ~95% av $v_t$ etter ~10-15 sekunder`,
      hints: ['Likevekt: luftmotstand = tyngdekraft', 'Luftmotstand øker med fart', 'a = 0 ved terminalfart'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-3-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En ball med masse 0.2 kg faller i luft. Luftmotstandskonstanten er $k = 0.005$ kg/m. Beregn terminalfarten.',
      solution: `**Gitt:**
- Masse: $m = 0.2$ kg
- Luftmotstandskonstant: $k = 0.005$ kg/m
- $g = 9.8$ m/s²

**Ved terminalfart:**
$$mg = kv_t^2$$

$$v_t = \\sqrt{\\frac{mg}{k}}$$

$$v_t = \\sqrt{\\frac{0.2 \\cdot 9.8}{0.005}}$$

$$v_t = \\sqrt{\\frac{1.96}{0.005}} = \\sqrt{392}$$

$$v_t = 19.8 \\text{ m/s}$$

**Svar:** $v_t \\approx 20$ m/s = 72 km/t`,
      hints: ['Ved terminalfart: mg = kv²', 'Løs for v_t'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-3-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En kasse med masse 40 kg står på et skråplan med vinkel $\\theta$. $\\mu_s = 0.50$ og $\\mu_k = 0.40$.\n\na) For hvilke vinkler vil kassen stå stille (hvis plassert forsiktig)?\n\nb) For hvilke vinkler vil kassen gli med konstant fart (hvis gitt liten dytt)?',
      solution: `**Gitt:**
- Masse: $m = 40$ kg (irrelevant for vinklene)
- $\\mu_s = 0.50$
- $\\mu_k = 0.40$

**a) Vinkler hvor kassen står stille**

**Betingelse:** Statisk friksjon kan holde kassen.

$$G_{\\parallel} \\leq f_{s,\\text{maks}}$$
$$mg \\sin \\theta \\leq \\mu_s mg \\cos \\theta$$
$$\\tan \\theta \\leq \\mu_s$$
$$\\theta \\leq \\arctan(\\mu_s)$$

$$\\theta \\leq \\arctan(0.50) = 26.6°$$

**Svar:** Kassen står stille hvis $\\theta \\leq 26.6°$

**b) Vinkler hvor kassen glir med konstant fart**

**Betingelse:** Kinetisk friksjon = gravitasjonskomponent.

$$G_{\\parallel} = f_k$$
$$mg \\sin \\theta = \\mu_k mg \\cos \\theta$$
$$\\tan \\theta = \\mu_k$$
$$\\theta = \\arctan(\\mu_k)$$

$$\\theta = \\arctan(0.40) = 21.8°$$

**Svar:** Kassen glir med konstant fart hvis $\\theta = 21.8°$ (eksakt)

**Oppsummering:**

| Vinkel $\\theta$ | Oppførsel (fra ro) | Oppførsel (med dytt) |
|------------------|--------------------|----------------------|
| $\\theta < 21.8°$ | Står stille | Bremser til stopp |
| $\\theta = 21.8°$ | Står stille | Konstant fart |
| $21.8° < \\theta < 26.6°$ | Står stille | Akselererer nedover |
| $\\theta \\geq 26.6°$ | Glir nedover | Akselererer nedover |

**Forklaring:**
- Hvis $\\theta < \\arctan(\\mu_k) = 21.8°$: Kinetisk friksjon > gravitasjonskomponent → bremser
- Hvis $\\theta = \\arctan(\\mu_k) = 21.8°$: Kinetisk friksjon = gravitasjonskomponent → konstant fart
- Hvis $\\arctan(\\mu_k) < \\theta < \\arctan(\\mu_s)$ (21.8° - 26.6°): Statisk friksjon holder (fra ro), men kinetisk friksjon < gravitasjonskomponent (med dytt) → akselererer
- Hvis $\\theta \\geq \\arctan(\\mu_s) = 26.6°$: Statisk friksjon holder ikke → glir`,
      hints: ['Del a: tan θ ≤ μ_s', 'Del b: tan θ = μ_k'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-3-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En ball faller fra 50 m høyde. Luftmotstand: $F_L = 0.01v^2$ N. Masse: 0.5 kg. Beregn:\n\na) Terminalfarten\n\nb) Akselerasjonen ved $v = 15$ m/s\n\nc) Vil ballen nå terminalfart før den treffer bakken?',
      solution: `**Gitt:**
- Masse: $m = 0.5$ kg
- Luftmotstand: $F_L = 0.01v^2$ N → $k = 0.01$ kg/m
- Høyde: $h = 50$ m
- $g = 9.8$ m/s²

**a) Terminalfart**

$$v_t = \\sqrt{\\frac{mg}{k}}$$

$$v_t = \\sqrt{\\frac{0.5 \\cdot 9.8}{0.01}} = \\sqrt{490} = 22.1 \\text{ m/s}$$

**Svar:** $v_t = 22$ m/s

**b) Akselerasjon ved v = 15 m/s**

**Newtons 2. lov (positiv: nedover):**
$$ma = mg - kv^2$$
$$a = g - \\frac{k}{m}v^2$$

$$a = 9.8 - \\frac{0.01}{0.5} \\cdot 15^2$$

$$a = 9.8 - 0.02 \\cdot 225 = 9.8 - 4.5 = 5.3 \\text{ m/s}^2$$

**Svar:** $a = 5.3$ m/s²

**c) Vil ballen nå terminalfart før bakken?**

**Uten luftmotstand:**
- Slutthastighet: $v = \\sqrt{2gh} = \\sqrt{2 \\cdot 9.8 \\cdot 50} = 31.3$ m/s
- Siden 31.3 m/s > $v_t$ = 22.1 m/s, ville ballen "overskredet" terminalfart

**Med luftmotstand:**

**Metode 1: Grov estimering**

Anta ballen når ~95% av terminalfart ($v \\approx 21$ m/s).

**Gjennomsnittlig akselerasjon:** Vanskelig å estimere nøyaktig (ikke konstant).

**Metode 2: Numerisk (mer nøyaktig)**

Bruk Eulers metode (se teori). Krever datamaskin.

**Resultat (numerisk simulering):**
- Ballen når ~$v = 20$ m/s etter ~50 m
- Dette er ~90% av terminalfart

**Svar:** Ja, ballen når nesten terminalfart (20-21 m/s) før den treffer bakken.

**Forklaring:**
- Terminalfart: 22.1 m/s
- Uten luftmotstand ville slutthastighet vært 31.3 m/s
- Luftmotstand begrenser farten betydelig
- 50 m er nok for å nærme seg terminalfart

**Estimering av fallтид:**

Uten luftmotstand:
$$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{100}{9.8}} = 3.19 \\text{ s}$$

Med luftmotstand: $t \\approx 3.5$ s (numerisk)`,
      hints: ['Del a: Bruk formel for terminalfart', 'Del b: a = g - (k/m)v²', 'Del c: Sammenlign med fritt fall'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-3-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En kasse med masse 30 kg trekkes oppover et skråplan (vinkel 20°) med en kraft $F = 200$ N parallelt med skråplanet. $\\mu_k = 0.25$. Beregn akselerasjonen.',
      solution: `**Gitt:**
- Masse: $m = 30$ kg
- Vinkel: $\\theta = 20°$
- Påført kraft: $F = 200$ N (oppover langs skråplan)
- Kinetisk friksjonskoeffisient: $\\mu_k = 0.25$
- $g = 9.8$ m/s²

**Krefter langs skråplan:**

**Oppover:**
- Påført kraft: $F = 200$ N

**Nedover:**
- Gravitasjonskomponent: $G_{\\parallel} = mg \\sin \\theta$
- Kinetisk friksjon: $f_k = \\mu_k N = \\mu_k mg \\cos \\theta$

**Normalkraft:**
$$N = mg \\cos \\theta = 30 \\cdot 9.8 \\cdot \\cos 20° = 276.4 \\text{ N}$$

**Beregn krefter:**

$$G_{\\parallel} = mg \\sin 20° = 30 \\cdot 9.8 \\cdot 0.342 = 100.5 \\text{ N}$$

$$f_k = \\mu_k N = 0.25 \\cdot 276.4 = 69.1 \\text{ N}$$

**Newtons 2. lov (positiv: oppover langs skråplan):**
$$F - G_{\\parallel} - f_k = ma$$

$$200 - 100.5 - 69.1 = 30a$$

$$30.4 = 30a$$

$$a = 1.01 \\text{ m/s}^2$$

**Svar:** $a = 1.0$ m/s² oppover langs skråplanet

**Tolkning:**
- Påført kraft: 200 N oppover
- Gravitasjon: 100.5 N nedover
- Friksjon: 69.1 N nedover
- Total nedover: 169.6 N
- Netto oppover: 30.4 N
- Akselerasjon: 1.0 m/s²`,
      hints: ['Identifiser alle krefter langs skråplan', 'F - G_∥ - f_k = ma', 'f_k = μ_k mg cos θ'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-3-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan en skydiver kan kontrollere farten sin før fallskjermen åpnes.',
      solution: `**Terminalfart for skydiver:**

$$v_t = \\sqrt{\\frac{2mg}{C_D \\rho A}}$$

hvor:
- $m$ = masse
- $g$ = gravitasjon
- $C_D$ = luftmotstandskoeffisient
- $\\rho$ = lufttetthet
- $A$ = tverrsnittareal

**Skydriveren kan kontrollere $A$ og $C_D$ ved å endre kroppsholdning:**

**1. Buklandingsstilling (standard)**

**Holdning:**
- Horisontalt kroppslig
- Armer og ben utstrakt
- "Surfebrett"-posisjon

**Egenskaper:**
- Stort tverrsnittareal: $A \\approx 0.7$ m²
- Moderat $C_D \\approx 1.0$
- **Terminalfart:** ~55-60 m/s (~200 km/t)

**2. Hodestup (dive)**

**Holdning:**
- Vertikal posisjon
- Armer langs kroppen
- "Prosjektil"-posisjon

**Egenskaper:**
- Lite tverrsnittareal: $A \\approx 0.2$ m²
- Lavere $C_D \\approx 0.7$ (mer strømlinjeformet)
- **Terminalfart:** ~80-90 m/s (~300 km/t)

**3. Sittende/halvsittende**

**Holdning:**
- Oppreist, som å sitte
- Armer og ben bøyd

**Egenskaper:**
- Middels $A$ og $C_D$
- **Terminalfart:** ~65-70 m/s

**4. Tracking (horisontal bevegelse)**

**Holdning:**
- Kropp skrå
- Armer bakover
- Fungerer som vinge

**Egenskaper:**
- Kan bevege seg horisontalt mens faller
- Terminalfart: ~50-60 m/s

**Sammenligning:**

| Holdning | Areal A | $C_D$ | Terminalfart | Bruk |
|----------|---------|-------|--------------|------|
| Buklandingsstilling | Stor | Moderat | ~60 m/s | Standard, stabil |
| Hodestup | Liten | Liten | ~90 m/s | Hente opp andre |
| Sittende | Middels | Stor | ~65 m/s | Variasjon |
| Tracking | Middels | Moderat | ~55 m/s | Horisontal bevegelse |

**Praktisk bruk:**

**1. Felles hopp:**
- Flere skydrivere hopper sammen
- Må ha samme terminalfart for å holde formasjon
- Justerer kroppsholdning kontinuerlig

**2. Hente opp andre:**
- Hvis én faller for raskt: hodestup for å hente opp
- Hvis én faller for sakte: buklandingsstilling

**3. Stabilitet vs. fart:**
- Buklandingsstilling: Mest stabil, lettere å kontrollere
- Hodestup: Raskere, men vanskeligere å kontrollere

**4. Før åpning av fallskjerm:**
- Buklandingsstilling
- Reduserer fart til ~60 m/s
- Tryggere åpning

**Andre faktorer (kan ikke kontrolleres):**

**1. Masse (m):**
- Tyngre person → høyere $v_t$
- Derfor bruker tyngre personer større fallskjerm

**2. Lufttetthet ($\\rho$):**
- Avhenger av høyde
- Høyere opp → tynnere luft → høyere $v_t$

**3. Utstyr:**
- Jumpsuit med "vinger" kan øke A
- Wingsuit: Meget stor A → lav $v_t$ (~40 m/s) + horisontal bevegelse`,
      hints: ['Endre tverrsnittareal A', 'Endre luftmotstandskoeffisient C_D', 'Buklandingsstilling vs. hodestup'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-3-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv hvordan du ville brukt Eulers metode til å modellere en ball som kastes skrått oppover med luftmotstand. Hvilke ligninger trengs?',
      solution: `**Problem:** Ball kastes med starthastighet $v_0$ i vinkel $\\theta_0$ fra bakken. Luftmotstand: $F_L = kv^2$.

**Gitt:**
- Startposisjon: $(x_0, y_0) = (0, 0)$
- Starthastighet: $v_0$
- Startvinkel: $\\theta_0$
- Masse: $m$
- Luftmotstandskonstant: $k$

**Initialverdier:**

**Hastighetskomponenter:**
$$v_{x,0} = v_0 \\cos \\theta_0$$
$$v_{y,0} = v_0 \\sin \\theta_0$$

**Eulers metode:**

For hvert tidssteg $i$ (fra $i=0$ til slutt):

**1. Beregn total fart:**
$$v_i = \\sqrt{v_{x,i}^2 + v_{y,i}^2}$$

**2. Beregn luftmotstands-komponenter:**

Total luftmotstand:
$$F_L = kv_i^2$$

Retning: Motsatt av hastighetsvektor

**Komponent i x-retning:**
$$F_{L,x} = -F_L \\cdot \\frac{v_{x,i}}{v_i} = -kv_i^2 \\cdot \\frac{v_{x,i}}{v_i} = -kv_i v_{x,i}$$

**Komponent i y-retning:**
$$F_{L,y} = -F_L \\cdot \\frac{v_{y,i}}{v_i} = -kv_i^2 \\cdot \\frac{v_{y,i}}{v_i} = -kv_i v_{y,i}$$

**3. Beregn akselerasjoner:**

**x-retning (kun luftmotstand):**
$$a_{x,i} = \\frac{F_{L,x}}{m} = -\\frac{k}{m}v_i v_{x,i}$$

**y-retning (gravitasjon + luftmotstand):**
$$a_{y,i} = -g + \\frac{F_{L,y}}{m} = -g - \\frac{k}{m}v_i v_{y,i}$$

**4. Oppdater hastigheter:**
$$v_{x,i+1} = v_{x,i} + a_{x,i} \\Delta t$$
$$v_{y,i+1} = v_{y,i} + a_{y,i} \\Delta t$$

**5. Oppdater posisjoner:**
$$x_{i+1} = x_i + v_{x,i} \\Delta t$$
$$y_{i+1} = y_i + v_{y,i} \\Delta t$$

**6. Oppdater tid:**
$$t_{i+1} = t_i + \\Delta t$$

**7. Sjekk slutt-betingelse:**

Stopp når $y_{i+1} < 0$ (treffer bakken).

**Python-pseudokode:**

\`\`\`python
# Initialverdier
x = 0.0
y = 0.0
vx = v0 * cos(theta0)
vy = v0 * sin(theta0)
t = 0.0
dt = 0.01  # tidssteg

# Lister for plotting
x_list = [x]
y_list = [y]
t_list = [t]

# Løkke
while y >= 0:
    # Total fart
    v = sqrt(vx**2 + vy**2)

    # Luftmotstands-komponenter
    F_Lx = -k * v * vx
    F_Ly = -k * v * vy

    # Akselerasjoner
    ax = F_Lx / m
    ay = -g + F_Ly / m

    # Oppdater hastigheter
    vx = vx + ax * dt
    vy = vy + ay * dt

    # Oppdater posisjoner
    x = x + vx * dt
    y = y + vy * dt

    # Oppdater tid
    t = t + dt

    # Lagre for plotting
    x_list.append(x)
    y_list.append(y)
    t_list.append(t)

# Plot bane
plot(x_list, y_list)
\`\`\`

**Viktige ligninger:**

**1. Luftmotstand (total):**
$$F_L = kv^2$$

**2. Luftmotstand (komponenter):**
$$F_{L,x} = -kv v_x, \\quad F_{L,y} = -kv v_y$$

**3. Akselerasjon:**
$$a_x = -\\frac{k}{m}v v_x, \\quad a_y = -g - \\frac{k}{m}v v_y$$

**4. Oppdatering:**
$$v_{x,i+1} = v_{x,i} + a_{x,i} \\Delta t$$
$$v_{y,i+1} = v_{y,i} + a_{y,i} \\Delta t$$
$$x_{i+1} = x_i + v_{x,i} \\Delta t$$
$$y_{i+1} = y_i + v_{y,i} \\Delta t$$

**Resultat:**

Simulering gir:
- Bane: $(x, y)$-verdier
- Sluttdistanse: Siste $x$-verdi
- Flygetid: Siste $t$-verdi
- Maksimal høyde: Største $y$-verdi

**Sammenligning med/uten luftmotstand:**

Uten luftmotstand: Symmetrisk parabelbane

Med luftmotstand:
- Kortere distanse
- Lavere maksimal høyde
- Asymmetrisk bane (bratere ned enn opp)
- Kortere flygetid`,
      hints: ['To dimensjoner: x og y', 'Luftmotstand har to komponenter', 'Oppdater hastighet og posisjon hver iterasjon'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
