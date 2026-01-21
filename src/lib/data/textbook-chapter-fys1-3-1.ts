/**
 * Fysikk 1 - Kapittel 3.1: Newtons lover
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_3_1: TextbookChapter = {
  id: 'fys1-3-1',
  courseId: 'fys1',
  chapterNumber: '3.1',
  title: 'Newtons lover',
  description: 'Lær om Newtons tre bevegelseslover, masse, treghet og hvordan krefter påvirker bevegelse.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare Newtons tre bevegelseslover',
    'bruke Newtons andre lov til å beregne kraft, masse og akselerasjon',
    'identifisere aksjon-reaksjon-kraftpar',
    'forklare begrepene masse og treghet',
  ],
  content: [
    {
      id: 'fys1-3-1-intro',
      type: 'text',
      content: `# Newtons lover

Isaac Newton (1643-1727) formulerte tre grunnleggende lover som beskriver hvordan krefter påvirker bevegelse. Disse lovene er hjørnesteinen i klassisk mekanikk.

**Newtons tre lover:**

1. **Treghetsloven** - Objekter holder farten sin med mindre en kraft påvirker dem
2. **Kraftloven** - Kraft gir akselerasjon proporsjonal med massen: $\\vec{F} = m\\vec{a}$
3. **Aksjon-reaksjon** - Krefter kommer alltid i par som er like store og motsatt rettet`,
    },
    {
      id: 'fys1-3-1-newton1',
      type: 'text',
      content: `# Newtons 1. lov: Treghetsloven

**Formulering:**

> Et legeme i hvile forblir i hvile, og et legeme i bevegelse fortsetter med konstant hastighet i rett linje, med mindre det påvirkes av en ytre kraft.

**Matematisk:**

Hvis summen av kreftene er null ($\\sum \\vec{F} = 0$), er akselerasjonen null ($\\vec{a} = 0$).

Dette betyr:
- Hvis $v = 0$ (hvile), forblir $v = 0$
- Hvis $v = \\text{konstant} \\neq 0$, forblir $v = \\text{konstant}$

**Hva betyr dette?**

**1. Objekter "ønsker" å opprettholde sin bevegelsestilstand**
- En ball som ligger stille vil fortsette å ligge stille
- En puck som glir på friksjonsfritt isgulv vil fortsette med samme fart i samme retning

**2. Fart og retning endres bare hvis en kraft virker**
- For å starte bevegelse: Kraft kreves
- For å stoppe bevegelse: Kraft kreves
- For å endre retning: Kraft kreves

**3. I virkeligheten virker alltid krefter**
- Friksjon mot underlaget
- Luftmotstand
- Derfor stopper objekter "av seg selv" i hverdagen
- Men årsaken er fremdeles krefter (friksjon), ikke manglende kraft

## Treghet (inerti)

**Definisjon:** Treghet er et legemes motstand mot endring i bevegelse.

**Egenskaper:**
- Alle objekter har treghet
- Større masse = større treghet
- Treghet er årsaken til Newtons 1. lov

**Eksempler:**

**a) Passasjer i bil som bremser:**
- Bilen bremser (negativ akselerasjon)
- Passasjeren fortsetter forover (treghet)
- Setebelte gir kraft bakover som bremser passasjeren

**b) Duk trekkes raskt under servise:**
- Duken akselereres raskt
- Serviset har treghet, forblir i hvile (nesten)
- Friksjon er for liten til å akselerere serviset like mye

**c) Hammer med løs hammer-hode:**
- Sving hammeren ned og stopp brått
- Skaftet stopper
- Hammer-hode fortsetter nedover (treghet)
- Hammer-hode festes til skaftet`,
    },
    {
      id: 'fys1-3-1-def-treghet',
      type: 'definition',
      title: 'Treghet',
      content: 'Treghet er et legemes motstand mot endring i bevegelsestilstand. Massen er et mål på tregheten: større masse betyr større treghet.',
    },
    {
      id: 'fys1-3-1-newton2',
      type: 'text',
      content: `# Newtons 2. lov: Kraftloven

**Formulering:**

> Akselerasjonen til et legeme er proporsjonal med den resulterende kraften og omvendt proporsjonal med massen.

**Matematisk:**

$$\\vec{F} = m\\vec{a}$$

hvor:
- $\\vec{F}$ = resulterende kraft (sum av alle krefter) [N = kg·m/s²]
- $m$ = masse [kg]
- $\\vec{a}$ = akselerasjon [m/s²]

**Vektorkrav:** Kraft og akselerasjon har samme retning.

## Forståelse av formelen

**1. Jo større kraft, jo større akselerasjon**
- Dobbel kraft → dobbel akselerasjon
- Hvis $F = 10$ N gir $a = 2$ m/s², vil $F = 20$ N gi $a = 4$ m/s²

**2. Jo større masse, jo mindre akselerasjon**
- Dobbel masse → halv akselerasjon
- Hvis $m = 5$ kg gir $a = 2$ m/s², vil $m = 10$ kg gi $a = 1$ m/s²

**3. Kraft = 0 gir akselerasjon = 0**
- Dette er Newtons 1. lov (spesialtilfelle av 2. lov)

## Bruk av Newtons 2. lov

**Steg 1: Identifiser alle krefter**
- Tegn frilegemediagram (kapittel 3.2)

**Steg 2: Finn resulterende kraft**
- Vektorsum: $\\vec{F}_{\\text{res}} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + ...$
- 1D: $F_{\\text{res}} = F_1 + F_2 + F_3 + ...$ (med fortegn!)
- 2D: Splitt i x- og y-komponenter

**Steg 3: Bruk $\\vec{F} = m\\vec{a}$**
- Løs for ukjent størrelse (F, m eller a)

## Enheter

**Kraft måles i Newton (N):**

$$1 \\text{ N} = 1 \\text{ kg}\\cdot\\text{m/s}^2$$

**Definisjon:** 1 Newton er kraften som gir en masse på 1 kg en akselerasjon på 1 m/s².

**Typiske krefter:**
- Tyngdekraft på et eple: ~1 N
- Kraft fra hånd som løfter melkekartong: ~10 N
- Tyngdekraft på person (70 kg): ~700 N
- Motor i bil: ~1000-5000 N`,
    },
    {
      id: 'fys1-3-1-def-newton2',
      type: 'definition',
      title: 'Newtons 2. lov',
      content: 'Den resulterende kraften på et legeme er lik massen multiplisert med akselerasjonen: $\\vec{F} = m\\vec{a}$. Kraften måles i Newton (N), hvor 1 N = 1 kg·m/s².',
    },
    {
      id: 'fys1-3-1-ex-newton2-1',
      type: 'example',
      title: 'Eksempel: Akselerasjon av bil',
      problem: 'En bil med masse $m = 1200$ kg akselererer fra 0 til 100 km/t på 8,0 sekunder. Beregn:\n\na) Gjennomsnittlig akselerasjon\n\nb) Resulterende kraft på bilen',
      solution: `**Gitt:**
- Masse: $m = 1200$ kg
- Starthastighet: $v_0 = 0$ m/s
- Slutthastighet: $v = 100$ km/t = $\\frac{100}{3.6}$ m/s = 27.8 m/s
- Tid: $t = 8.0$ s

**a) Gjennomsnittlig akselerasjon**

Bruk definisjonen av akselerasjon:

$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - v_0}{t}$$

$$a = \\frac{27.8 \\text{ m/s} - 0}{8.0 \\text{ s}} = 3.48 \\text{ m/s}^2$$

**Svar:** $a \\approx 3.5$ m/s²

**b) Resulterende kraft**

Bruk Newtons 2. lov:

$$F = ma$$

$$F = 1200 \\text{ kg} \\cdot 3.48 \\text{ m/s}^2 = 4176 \\text{ N}$$

**Svar:** $F \\approx 4200$ N = 4.2 kN

**Tolkning:**
- Motoren må gi en kraft på ca. 4200 N (etter at friksjon og luftmotstand er trukket fra)
- Dette tilsvarer tyngdekraften på ~430 kg`,
    },
    {
      id: 'fys1-3-1-ex-newton2-2',
      type: 'example',
      title: 'Eksempel: Bremsing av syklist',
      problem: 'En syklist med total masse (sykkel + person) $m = 80$ kg bremser med en konstant kraft $F = -240$ N. Hvor lang tid tar det å bremse fra 30 km/t til stillestående?',
      solution: `**Gitt:**
- Masse: $m = 80$ kg
- Bremsekraft: $F = -240$ N (negativ fordi den motvirker bevegelsen)
- Starthastighet: $v_0 = 30$ km/t = $\\frac{30}{3.6}$ m/s = 8.33 m/s
- Slutthastighet: $v = 0$ m/s

**Finn akselerasjon fra Newtons 2. lov:**

$$F = ma$$

$$a = \\frac{F}{m} = \\frac{-240 \\text{ N}}{80 \\text{ kg}} = -3.0 \\text{ m/s}^2$$

Negativ akselerasjon betyr retardasjon (nedbremsing).

**Finn tid fra kinematikk:**

$$v = v_0 + at$$

$$t = \\frac{v - v_0}{a} = \\frac{0 - 8.33 \\text{ m/s}}{-3.0 \\text{ m/s}^2} = 2.78 \\text{ s}$$

**Svar:** $t \\approx 2.8$ s

**Tolkning:**
- Det tar ca. 2.8 sekunder å stoppe
- Bremsekraften tilsvarer tyngdekraften på 24 kg`,
    },
    {
      id: 'fys1-3-1-newton3',
      type: 'text',
      content: `# Newtons 3. lov: Aksjon-reaksjon

**Formulering:**

> Hvis legeme A påvirker legeme B med en kraft, vil legeme B påvirke legeme A med en like stor kraft i motsatt retning.

**Matematisk:**

$$\\vec{F}_{A \\text{ på } B} = -\\vec{F}_{B \\text{ på } A}$$

**Viktige poeng:**

**1. Kreftene er alltid like store**
- Størrelsesmessig: $|F_{A \\text{ på } B}| = |F_{B \\text{ på } A}|$

**2. Kreftene er alltid motsatt rettet**
- Vektormessig: $\\vec{F}_{A \\text{ på } B} = -\\vec{F}_{B \\text{ på } A}$

**3. Kreftene virker på ulike legemer**
- Den ene kraften virker på A
- Den andre kraften virker på B
- Derfor kansellerer de IKKE hverandre

**4. Kreftene oppstår samtidig**
- Begge kreftene eksisterer samtidig
- Det er ikke slik at den ene kommer først

**5. Kreftene er av samme type**
- Begge er gravitasjonskrefter, eller
- Begge er kontaktkrefter, osv.

## Eksempler på aksjon-reaksjon

**Eksempel 1: Løper som starter**

**Aksjon:** Løperens fot dytter bakover på bakken
- $\\vec{F}_{\\text{fot på bakke}}$ (bakover)

**Reaksjon:** Bakken dytter forover på foten
- $\\vec{F}_{\\text{bakke på fot}}$ (forover)

**Resultat:** Løperen akselererer forover

**Hvorfor akselererer ikke bakken bakover?**
- Kraften på bakken er stor
- Men bakken har enorm masse (Jorden)
- Akselerasjon = F/m er neglisjerbar

**Eksempel 2: Rakett i verdensrommet**

**Aksjon:** Raketten skyver gass bakover
- $\\vec{F}_{\\text{rakett på gass}}$ (bakover)

**Reaksjon:** Gassen skyver raketten forover
- $\\vec{F}_{\\text{gass på rakett}}$ (forover)

**Resultat:** Raketten akselererer forover

**Viktig:** Raketten trenger ikke luft å "dytte fra" - den dytter fra gassen den skyver ut!

**Eksempel 3: Jord og Måne**

**Aksjon:** Jorden tiltrekker Månen
- $\\vec{F}_{\\text{Jord på Måne}}$ (mot Jorden)

**Reaksjon:** Månen tiltrekker Jorden
- $\\vec{F}_{\\text{Måne på Jord}}$ (mot Månen)

**Størrelser:**
- Begge krefter er $\\approx 2 \\times 10^{20}$ N
- Like store!

**Hvorfor kretser Månen rundt Jorden, ikke omvendt?**
- Kreftene er like store
- Men Jorden har 81 ganger større masse
- Akselerasjon av Jorden er 81 ganger mindre
- Jorden "vagler" litt, Månen kretser

**Eksempel 4: Bok på bord**

**FEIL forståelse:** "Bokens tyngdekraft ned = Bordets normalkraft opp er aksjon-reaksjon"

**Hvorfor feil?**
- Begge krefter virker på samme objekt (boken)
- Aksjon-reaksjon virker på ulike objekter

**RIKTIG aksjon-reaksjon-par:**

**Par 1 (gravitasjon):**
- Aksjon: Jorden tiltrekker boken ned ($G$ på bok)
- Reaksjon: Boken tiltrekker Jorden opp ($G$ på Jord)

**Par 2 (kontakt):**
- Aksjon: Boken trykker ned på bordet ($F$ på bord)
- Reaksjon: Bordet trykker opp på boken ($N$ på bok)

**Par 3 (gravitasjon på bordet):**
- Aksjon: Jorden tiltrekker bordet ned
- Reaksjon: Bordet tiltrekker Jorden opp`,
    },
    {
      id: 'fys1-3-1-def-newton3',
      type: 'definition',
      title: 'Newtons 3. lov',
      content: 'Krefter kommer alltid i par (aksjon-reaksjon). Hvis legeme A påvirker legeme B med en kraft, påvirker B legeme A med en like stor kraft i motsatt retning: $\\vec{F}_{A \\text{ på } B} = -\\vec{F}_{B \\text{ på } A}$.',
    },
    {
      id: 'fys1-3-1-masse',
      type: 'text',
      content: `# Masse og treghet

## Hva er masse?

Masse har to tolkninger i fysikk:

**1. Treghet (inertial masse)**
- Mål på et legemes motstand mot endring i bevegelse
- Fra Newtons 2. lov: $m = \\frac{F}{a}$
- Større masse → mindre akselerasjon ved samme kraft

**2. Gravitasjon (gravitasjonell masse)**
- Mål på hvor sterkt et legeme påvirkes av gravitasjon
- Fra tyngdekraft: $G = mg$
- Større masse → større tyngdekraft

**Bemerkelsesverdig:** Disse to tolkningene gir samme verdi for massen!
- Dette er ikke selvfølgelig
- Einstein brukte dette i relativitetsteorien

## Masse vs. vekt

**Masse:**
- Mengde materie i et legeme
- Måles i kilogram (kg)
- Uavhengig av sted
- Samme på Jorden, Månen, i verdensrommet

**Vekt (tyngdekraft):**
- Gravitasjonskraft på et legeme
- Måles i Newton (N)
- Avhenger av gravitasjon
- $G = mg$
- Større på Jorden enn på Månen

**Eksempel:**
- Person med masse $m = 70$ kg
- På Jorden: $G = 70 \\cdot 9.8 = 686$ N
- På Månen: $G = 70 \\cdot 1.6 = 112$ N
- I verdensrommet (langt fra planeter): $G \\approx 0$ N
- Massen er alltid 70 kg!

## Måling av masse

**1. Vekt (på Jorden)**
- Mål tyngdekraften G
- Regn ut masse: $m = \\frac{G}{g}$
- Krever kjent gravitasjon

**2. Treghetsbalanse**
- Sett objektet i bevegelse med kjent kraft
- Mål akselerasjonen
- Regn ut masse: $m = \\frac{F}{a}$
- Fungerer i verdensrommet!`,
    },
    {
      id: 'fys1-3-1-note-enheter',
      type: 'note',
      title: 'Enheter og størrelser',
      content: `**Grunnleggende enheter:**
- Masse: kilogram (kg)
- Tid: sekund (s)
- Lengde: meter (m)

**Avledede enheter:**
- Fart: meter per sekund (m/s)
- Akselerasjon: meter per sekund i annen (m/s²)
- Kraft: Newton (N) = kg·m/s²

**Omregning:**
- 1 kN = 1000 N
- 1 km/t = 1/3.6 m/s ≈ 0.278 m/s`,
    },
  ],
  exercises: [
    {
      id: 'fys1-3-1-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar Newtons 1. lov med egne ord. Gi et praktisk eksempel.',
      solution: `**Newtons 1. lov (Treghetsloven):**

Et legeme i hvile forblir i hvile, og et legeme i bevegelse fortsetter med konstant fart i rett linje, med mindre det påvirkes av en ytre kraft.

**Forklaring:**
- Objekter "ønsker" å opprettholde sin bevegelsestilstand
- For å endre fart eller retning må en kraft virke
- Dette skyldes treghet - objektets motstand mot endring

**Praktisk eksempel:**

**Passasjer i bil som bremser:**
- Bilen bremser (kraft fra bremsene)
- Passasjeren fortsetter forover (treghet, ingen kraft)
- Setebelte gir kraft bakover som bremser passasjeren
- Uten setebelte ville passasjeren fortsatt forover inn i dashbordet

**Andre eksempler:**
- Puck på is fortsetter å gli (liten friksjon)
- Satelitt i bane fortsetter å bevege seg uten motor
- Hodestøtte i bil beskytter ved påkjørsel bakfra (hodet fortsetter bakover ved akselerasjon forover)`,
      hints: ['Hva skjer hvis ingen kraft virker?', 'Tenk på situasjoner i bil', 'Treghet er nøkkelen'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En kraft på 50 N virker på en kasse med masse 10 kg. Beregn akselerasjonen.',
      solution: `**Gitt:**
- Kraft: $F = 50$ N
- Masse: $m = 10$ kg

**Bruk Newtons 2. lov:**

$$F = ma$$

$$a = \\frac{F}{m}$$

$$a = \\frac{50 \\text{ N}}{10 \\text{ kg}} = 5.0 \\text{ m/s}^2$$

**Svar:** $a = 5.0$ m/s²`,
      hints: ['Bruk F = ma', 'Løs for a'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hvilken kraft kreves for å gi en bil med masse 1500 kg en akselerasjon på 2.5 m/s²?',
      solution: `**Gitt:**
- Masse: $m = 1500$ kg
- Akselerasjon: $a = 2.5$ m/s²

**Bruk Newtons 2. lov:**

$$F = ma$$

$$F = 1500 \\text{ kg} \\cdot 2.5 \\text{ m/s}^2 = 3750 \\text{ N}$$

**Svar:** $F = 3750$ N = 3.75 kN

**Tolkning:**
- Dette er den resulterende kraften (etter friksjon er trukket fra)
- Motoren må gi mer kraft enn dette for å overvinne friksjon og luftmotstand`,
      hints: ['Bruk F = ma', 'Husk enheter'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En hockeypuck med masse 170 g glir på isen og bremses av friksjon med akselerasjon -0.50 m/s². Beregn friksjonskraften.',
      solution: `**Gitt:**
- Masse: $m = 170$ g = 0.17 kg
- Akselerasjon: $a = -0.50$ m/s² (negativ = retardation)

**Bruk Newtons 2. lov:**

$$F = ma$$

$$F = 0.17 \\text{ kg} \\cdot (-0.50 \\text{ m/s}^2) = -0.085 \\text{ N}$$

**Svar:** $F = -0.085$ N ≈ -0.09 N

**Tolkning:**
- Negativ kraft betyr kraften virker motsatt bevegelsesretningen
- Størrelsen er 0.085 N
- Dette er friksjonskraften som bremser pucken`,
      hints: ['Husk å konvertere gram til kg', 'Negativ akselerasjon gir negativ kraft'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Identifiser aksjon-reaksjon-kraftparet i følgende situasjoner:\n\na) Du trykker mot en vegg\n\nb) En bok ligger på et bord\n\nc) En bil kolliderer med en truck',
      solution: `**a) Du trykker mot en vegg**

**Aksjon:** Du trykker mot veggen
- $\\vec{F}_{\\text{du på vegg}}$ (inn i veggen)

**Reaksjon:** Veggen trykker mot deg
- $\\vec{F}_{\\text{vegg på deg}}$ (ut fra veggen)

Kreftene er like store. Hvis du trykker hardt, føler du hard motstand fra veggen.

**b) En bok ligger på et bord**

**Par 1 (gravitasjon):**
- Aksjon: Jorden tiltrekker boken ned
- Reaksjon: Boken tiltrekker Jorden opp

**Par 2 (kontakt):**
- Aksjon: Boken trykker ned på bordet
- Reaksjon: Bordet trykker opp på boken (normalkraft)

**VIKTIG:** Bokens tyngdekraft og normalkraften er IKKE et aksjon-reaksjon-par (begge virker på boken).

**c) En bil kolliderer med en truck**

**Aksjon:** Bilen trykker mot trucken
- $\\vec{F}_{\\text{bil på truck}}$

**Reaksjon:** Trucken trykker mot bilen
- $\\vec{F}_{\\text{truck på bil}}$

**Viktig:** Kreftene er like store!
- Bilen opplever samme kraft som trucken
- Men bilen har mindre masse → større akselerasjon (F = ma)
- Derfor blir bilen mer skadet`,
      hints: ['Krefter virker på ulike objekter', 'Like store, motsatt rettet', 'Samtidig'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En fotballspiller sparker en ball med masse 450 g. Ballen akselererer fra 0 til 25 m/s på 0.020 s. Beregn kraften fra foten på ballen.',
      solution: `**Gitt:**
- Masse: $m = 450$ g = 0.45 kg
- Starthastighet: $v_0 = 0$ m/s
- Slutthastighet: $v = 25$ m/s
- Tid: $t = 0.020$ s

**Steg 1: Finn akselerasjon**

$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - v_0}{t}$$

$$a = \\frac{25 \\text{ m/s} - 0}{0.020 \\text{ s}} = 1250 \\text{ m/s}^2$$

**Steg 2: Finn kraft**

$$F = ma$$

$$F = 0.45 \\text{ kg} \\cdot 1250 \\text{ m/s}^2 = 562.5 \\text{ N}$$

**Svar:** $F \\approx 560$ N

**Tolkning:**
- Dette er en meget stor kraft (tilsvarer tyngdekraften på ~57 kg)
- Men den virker kun i kort tid (0.020 s)
- Derfor blir ikke foten skadet`,
      hints: ['Finn akselerasjon først', 'Bruk a = Δv/Δt', 'Deretter F = ma'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor en rakett kan akselerere i verdensrommet hvor det ikke er luft.',
      solution: `**Forklaring:**

Mange tror feilaktig at raketter "dytter fra" luften. Dette er feil!

**Riktig forklaring (Newtons 3. lov):**

**1. Raketten brenner drivstoff:**
- Kjemisk reaksjon i brennkammeret
- Produserer hot gass under høyt trykk

**2. Gassen skyves ut bakover:**
- Gassen akselereres ut av dysen med høy fart
- **Aksjon:** Raketten dytter gassen bakover
- $\\vec{F}_{\\text{rakett på gass}}$ (bakover)

**3. Gassen dytter raketten forover:**
- **Reaksjon:** Gassen dytter raketten forover
- $\\vec{F}_{\\text{gass på rakett}}$ (forover)

**4. Raketten akselererer:**
- Fra Newtons 2. lov: $F = ma$
- Kraften fra gassen gir raketten akselerasjon forover

**Hvorfor fungerer dette i vakuum?**

- Raketten trenger ikke noe å "dytte fra"
- Raketten dytter fra gassen den selv produserer
- Gassen er med i raketten, så systemet er lukket
- Newtons 3. lov gjelder alltid, også i vakuum

**Analogi:**
- Du står på rulleskøyter og kaster en tung ball
- Du akselererer bakover når du kaster ballen forover
- Du trenger ikke gulvet å "dytte fra" (kun for å ikke falle)
- Gulvet kan være friksjonsfritt (rulleskøyter)

**Konklusjon:**
Raketter fungerer bedre i vakuum enn i luft, fordi det ikke er luftmotstand!`,
      hints: ['Newtons 3. lov', 'Raketten dytter fra gassen', 'Ikke fra luften'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'To astronauter med masser 80 kg og 120 kg står i ro i verdensrommet og holder i hverandre. De dytter fra hverandre med en kraft på 100 N i 2.0 s.\n\na) Beregn akselerasjonen til hver astronaut\n\nb) Beregn farten til hver astronaut etter 2.0 s\n\nc) Beregn avstanden mellom dem etter 2.0 s',
      solution: `**Gitt:**
- Masse astronaut 1: $m_1 = 80$ kg
- Masse astronaut 2: $m_2 = 120$ kg
- Kraft: $F = 100$ N
- Tid: $t = 2.0$ s

**a) Akselerasjon**

Fra Newtons 3. lov: Begge opplever samme kraft (100 N), men i motsatt retning.

**Astronaut 1:**
$$a_1 = \\frac{F}{m_1} = \\frac{100 \\text{ N}}{80 \\text{ kg}} = 1.25 \\text{ m/s}^2$$

**Astronaut 2:**
$$a_2 = \\frac{F}{m_2} = \\frac{100 \\text{ N}}{120 \\text{ kg}} = 0.833 \\text{ m/s}^2$$

**Svar:** $a_1 = 1.25$ m/s², $a_2 = 0.83$ m/s²

**b) Fart etter 2.0 s**

$$v = v_0 + at$$

Begge starter i ro ($v_0 = 0$).

**Astronaut 1:**
$$v_1 = 0 + 1.25 \\cdot 2.0 = 2.50 \\text{ m/s}$$

**Astronaut 2:**
$$v_2 = 0 + 0.833 \\cdot 2.0 = 1.67 \\text{ m/s}$$

**Svar:** $v_1 = 2.5$ m/s, $v_2 = 1.7$ m/s (i motsatt retning)

**c) Avstand etter 2.0 s**

$$s = v_0 t + \\frac{1}{2}at^2$$

**Astronaut 1:**
$$s_1 = 0 + \\frac{1}{2} \\cdot 1.25 \\cdot (2.0)^2 = 2.50 \\text{ m}$$

**Astronaut 2:**
$$s_2 = 0 + \\frac{1}{2} \\cdot 0.833 \\cdot (2.0)^2 = 1.67 \\text{ m}$$

**Total avstand:**
$$s_{\\text{total}} = s_1 + s_2 = 2.50 + 1.67 = 4.17 \\text{ m}$$

**Svar:** Avstanden mellom dem er 4.2 m

**Sjekk bevegelsesmengde:**
- Astronaut 1: $p_1 = m_1 v_1 = 80 \\cdot 2.5 = 200$ kg·m/s
- Astronaut 2: $p_2 = m_2 v_2 = 120 \\cdot 1.67 = 200$ kg·m/s
- Like store, motsatt rettet → total bevegelsesmengde = 0 ✓`,
      hints: ['Newtons 3. lov: Like krefter', 'Bruk F = ma for hver', 'Bruk kinematikk: v = v₀ + at og s = ½at²'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En elevator med masse 800 kg akselererer oppover med $a = 1.5$ m/s². Beregn kraften i tauet som holder elevatoren. Bruk $g = 9.8$ m/s².',
      solution: `**Gitt:**
- Masse: $m = 800$ kg
- Akselerasjon: $a = 1.5$ m/s² (oppover)
- Gravitasjon: $g = 9.8$ m/s²

**Krefter på elevatoren:**

**1. Tyngdekraft (nedover):**
$$G = mg = 800 \\cdot 9.8 = 7840 \\text{ N}$$

**2. Tauets kraft (oppover):**
$$T = ?$$

**Velg positiv retning: oppover**

**Resulterende kraft:**
$$F_{\\text{res}} = T - G$$

**Fra Newtons 2. lov:**
$$F_{\\text{res}} = ma$$

$$T - G = ma$$

$$T = ma + G$$

$$T = m(a + g)$$

$$T = 800(1.5 + 9.8) = 800 \\cdot 11.3 = 9040 \\text{ N}$$

**Svar:** $T = 9040$ N = 9.0 kN

**Tolkning:**
- Tauet må holde tyngdekraften (7840 N)
- PLUSS gi akselerasjon oppover (1200 N)
- Total: 9040 N

**Alternativ metode:**
$$T = G + ma = 7840 + 800 \\cdot 1.5 = 7840 + 1200 = 9040 \\text{ N}$$`,
      hints: ['Identifiser krefter: tyngdekraft og tauets kraft', 'Resulterende kraft = T - G', 'Bruk F = ma'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor Månen kretser rundt Jorden selv om Månen tiltrekker Jorden med samme kraft som Jorden tiltrekker Månen.',
      solution: `**Newtons 3. lov:**

Jorden tiltrekker Månen med en kraft:
$$F_{\\text{Jord på Måne}} = \\frac{Gm_{\\text{Jord}}m_{\\text{Måne}}}{r^2}$$

Månen tiltrekker Jorden med en like stor kraft:
$$F_{\\text{Måne på Jord}} = \\frac{Gm_{\\text{Jord}}m_{\\text{Måne}}}{r^2}$$

**Kreftene er like store:** $F_{\\text{Jord på Måne}} = F_{\\text{Måne på Jord}} \\approx 2 \\times 10^{20}$ N

**Hvorfor kretser Månen, ikke Jorden?**

**Fra Newtons 2. lov:** $F = ma$, så $a = \\frac{F}{m}$

**Akselerasjon av Månen:**
$$a_{\\text{Måne}} = \\frac{F}{m_{\\text{Måne}}}$$

**Akselerasjon av Jorden:**
$$a_{\\text{Jord}} = \\frac{F}{m_{\\text{Jord}}}$$

**Massene:**
- $m_{\\text{Jord}} = 5.97 \\times 10^{24}$ kg
- $m_{\\text{Måne}} = 7.35 \\times 10^{22}$ kg
- Forholdet: $\\frac{m_{\\text{Jord}}}{m_{\\text{Måne}}} \\approx 81$

**Akselerasjoner:**
- Månens akselerasjon er 81 ganger større enn Jordens
- $a_{\\text{Måne}} \\approx 0.0027$ m/s² (sentripetal mot Jorden)
- $a_{\\text{Jord}} \\approx 0.000033$ m/s² (sentripetal mot Månen)

**Resultat:**

**Månen:**
- Stor akselerasjon
- Kretser rundt Jorden i en tydelig bane
- Radius ~384 000 km fra Jordens sentrum

**Jorden:**
- Liten akselerasjon
- "Vagler" litt (kretser rundt felles massesenter)
- Massesenter ligger ~4700 km fra Jordens sentrum
- Dette er inne i Jorden (radius = 6371 km)

**Konklusjon:**

Begge kretser egentlig rundt det felles massesenteret, men siden Jorden er 81 ganger tyngre, ligger dette massesenteret inne i Jorden. Derfor ser det ut som om Månen kretser rundt Jorden, mens Jorden bare "vagler" litt.

**Analogi:**
- Voksen og barn snurrer rundt mens de holder hender
- Begge opplever samme kraft
- Men barnet beveger seg mye mer enn den voksne
- Sentrum av rotasjonen er nærmere den voksne`,
      hints: ['Like krefter, ulike masser', 'Bruk F = ma', 'Akselerasjon er omvendt proporsjonal med masse'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hva er forskjellen mellom masse og vekt? Hvorfor har du samme masse, men ulik vekt på Jorden og Månen?',
      solution: `**Masse:**

**Definisjon:** Mengde materie i et legeme

**Egenskaper:**
- Måles i kilogram (kg)
- Uavhengig av sted
- Mål på treghet (motstand mot akselerasjon)
- Fra Newtons 2. lov: $m = \\frac{F}{a}$

**Eksempel:**
- Person: $m = 70$ kg
- Samme på Jorden, Månen, Mars, i verdensrommet

**Vekt (Tyngdekraft):**

**Definisjon:** Gravitasjonskraft på et legeme

**Egenskaper:**
- Måles i Newton (N)
- Avhenger av gravitasjon på stedet
- Fra gravitasjonsloven: $G = mg$
- Rettet mot sentrum av planeten

**Eksempel:**
- Person med $m = 70$ kg

**På Jorden:**
- $g = 9.8$ m/s²
- $G = mg = 70 \\cdot 9.8 = 686$ N

**På Månen:**
- $g = 1.6$ m/s² (ca. 1/6 av Jorden)
- $G = mg = 70 \\cdot 1.6 = 112$ N

**I verdensrommet (langt fra planeter):**
- $g \\approx 0$ m/s²
- $G \\approx 0$ N (vektløs)

**På Jupiter:**
- $g = 24.8$ m/s² (ca. 2.5× Jorden)
- $G = mg = 70 \\cdot 24.8 = 1736$ N

**Hvorfor samme masse, ulik vekt?**

**Masse:**
- Masse er iboende egenskap (hvor mye materie)
- Endres ikke av omgivelsene
- Samme antall atomer → samme masse

**Vekt:**
- Vekt er gravitasjonskraft
- Gravitasjon avhenger av planetens masse og radius
- Månen er mindre → svakere gravitasjon → mindre vekt
- Men antall atomer i kroppen din er det samme → samme masse

**Matematisk:**
$$G = mg$$

- $m$ er konstant
- $g$ varierer med sted
- Derfor varierer $G$

**Viktig forskjell:**

**Måling av masse:**
- Balansevekt: Sammenligner med kjent masse (fungerer overalt)
- Treghetsbalanse: Måler motstand mot akselerasjon

**Måling av vekt:**
- Fjærvekt: Måler kraften (avhenger av g)
- Viser ulik verdi på ulike planeter

**Praktisk eksempel:**

**På Månen:**
- Du har samme masse (70 kg)
- Du har 1/6 av vekten (112 N i stedet for 686 N)
- Du føler deg lettere
- Du kan hoppe høyere (samme muskelkraft, mindre vekt)
- Men det er like vanskelig å akselerere deg horisontalt (samme masse)

**Oppsummering:**

| Egenskap | Masse | Vekt |
|----------|-------|------|
| Definisjon | Mengde materie | Gravitasjonskraft |
| Enhet | kg | N |
| Avhenger av sted? | Nei | Ja |
| Formel | - | $G = mg$ |
| Eksempel (70 kg på Jorden) | 70 kg | 686 N |
| Eksempel (70 kg på Månen) | 70 kg | 112 N |`,
      hints: ['Masse = mengde materie', 'Vekt = gravitasjonskraft', 'G = mg'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-1-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En bil med masse 1200 kg trekker en tilhenger med masse 800 kg. Bilen akselererer med $a = 2.0$ m/s². Beregn:\n\na) Kraften fra motor på bil-tilhenger-systemet\n\nb) Kraften mellom bil og tilhenger',
      solution: `**Gitt:**
- Masse bil: $m_1 = 1200$ kg
- Masse tilhenger: $m_2 = 800$ kg
- Akselerasjon: $a = 2.0$ m/s²

**a) Kraft fra motor**

**Betrakt bil + tilhenger som ett system:**
- Total masse: $m_{\\text{tot}} = m_1 + m_2 = 1200 + 800 = 2000$ kg

**Fra Newtons 2. lov:**
$$F_{\\text{motor}} = m_{\\text{tot}} \\cdot a$$

$$F_{\\text{motor}} = 2000 \\cdot 2.0 = 4000 \\text{ N}$$

**Svar:** $F_{\\text{motor}} = 4000$ N = 4.0 kN

**b) Kraft mellom bil og tilhenger**

**Betrakt tilhenger alene:**

**Krefter på tilhenger:**
- Kraft fra bil (fremover): $T$ = ?
- Friksjon og luftmotstand: antar neglisjerbar

**Fra Newtons 2. lov:**
$$T = m_2 \\cdot a$$

$$T = 800 \\cdot 2.0 = 1600 \\text{ N}$$

**Svar:** $T = 1600$ N = 1.6 kN

**Alternativ: Betrakt bil alene**

**Krefter på bil:**
- Kraft fra motor (fremover): $F_{\\text{motor}} = 4000$ N
- Kraft fra tilhenger (bakover): $T = ?$ (fra Newtons 3. lov)

**Fra Newtons 2. lov:**
$$F_{\\text{motor}} - T = m_1 \\cdot a$$

$$T = F_{\\text{motor}} - m_1 \\cdot a$$

$$T = 4000 - 1200 \\cdot 2.0 = 4000 - 2400 = 1600 \\text{ N}$$

**Samme svar:** $T = 1600$ N ✓

**Tolkning:**

- Motoren gir 4000 N
- 2400 N brukes til å akselerere bilen
- 1600 N overføres til tilhengeren (som akselererer den)
- Fra Newtons 3. lov: Tilhengeren drar bakover i bilen med 1600 N`,
      hints: ['Del a: Se på hele systemet', 'Del b: Se på tilhenger alene', 'Bruk F = ma'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
