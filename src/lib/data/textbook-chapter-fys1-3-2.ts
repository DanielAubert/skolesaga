/**
 * Fysikk 1 - Kapittel 3.2: Krefter og kraftanalyse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_3_2: TextbookChapter = {
  id: 'fys1-3-2',
  courseId: 'fys1',
  chapterNumber: '3.2',
  title: 'Krefter og kraftanalyse',
  description: 'Lær om ulike typer krefter (tyngdekraft, normalkraft, friksjon, snorkraft), kraftdiagrammer og frilegemediagrammer.',
  estimatedMinutes: 70,
  competenceGoals: [
    'identifisere og beregne tyngdekraft, normalkraft, friksjonskraft og snorkraft',
    'tegne kraftdiagrammer og frilegemediagrammer',
    'analysere krefter i likevekt og i bevegelse',
    'bruke Newtons lover til å løse problemer med flere krefter',
  ],
  content: [
    {
      id: 'fys1-3-2-intro',
      type: 'text',
      content: `# Krefter og kraftanalyse

I dette kapittelet skal vi se på de viktigste kraftene i klassisk mekanikk:

**1. Tyngdekraft (G)** - Gravitasjon fra Jorden

**2. Normalkraft (N)** - Kraft vinkelrett på overflate

**3. Friksjonskraft (f)** - Motstand mot bevegelse

**4. Snorkraft (T)** - Spenning i tau/snor

For å løse dynamikk-problemer må vi:
1. Identifisere alle krefter
2. Tegne frilegemediagram
3. Finne resulterende kraft
4. Bruke Newtons 2. lov: $\\vec{F} = m\\vec{a}$`,
    },
    {
      id: 'fys1-3-2-tyngdekraft',
      type: 'text',
      content: `# Tyngdekraft (gravitasjonskraft)

**Definisjon:** Tyngdekraft er den gravitasjonskraften Jorden utøver på et legeme.

**Formel:**

$$G = mg$$

hvor:
- $G$ = tyngdekraft [N]
- $m$ = masse [kg]
- $g$ = tyngdeakselerasjon [m/s²]

**Tyngdeakselerasjon på Jorden:**
$$g = 9.81 \\text{ m/s}^2 \\approx 9.8 \\text{ m/s}^2$$

**Egenskaper:**

**1. Alltid rettet nedover (mot Jordens sentrum)**

**2. Uavhengig av bevegelse**
- Samme tyngdekraft om objektet er i ro eller bevegelse

**3. Proporsjonal med massen**
- Dobbel masse → dobbel tyngdekraft

**4. Samme akselerasjon for alle objekter**
- Fra $G = mg$ og $F = ma$ får vi $a = g$
- Alle objekter faller med samme akselerasjon (i vakuum)

## Massesenter (tyngdepunkt)

**Definisjon:** Punktet der hele tyngdekraften kan anses å virke.

**Egenskaper:**
- For symmetriske objekter: I geometrisk sentrum
- For ensartede objekter: I massesenter

**Praktisk betydning:**
- Når vi tegner tyngdekraft, tegner vi den fra massesenter

## Tyngde vs. masse

**Tyngde (G):**
- Kraft [N]
- Avhenger av gravitasjon
- $G = mg$
- Varierer med sted

**Masse (m):**
- Mengde materie [kg]
- Uavhengig av gravitasjon
- Konstant overalt

**Eksempel:**
- Person: $m = 70$ kg
- På Jorden: $G = 70 \\cdot 9.8 = 686$ N
- På Månen: $G = 70 \\cdot 1.6 = 112$ N
- Masse er alltid 70 kg`,
    },
    {
      id: 'fys1-3-2-def-tyngdekraft',
      type: 'definition',
      title: 'Tyngdekraft',
      content: 'Tyngdekraft er gravitasjonskraften som Jorden utøver på et legeme: $G = mg$, hvor $g = 9.8$ m/s² på Jordens overflate. Tyngdekraften er alltid rettet nedover mot Jordens sentrum.',
    },
    {
      id: 'fys1-3-2-normalkraft',
      type: 'text',
      content: `# Normalkraft

**Definisjon:** Normalkraft er kontaktkraften vinkelrett på en overflate fra overflaten på et objekt.

**Egenskaper:**

**1. Alltid vinkelrett (normal) på overflaten**
- Horisontal overflate → N er vertikal
- Skrå overflate → N er vinkelrett på skråplanet

**2. Motvirker at objektet går gjennom overflaten**
- Elektromagnetisk kraft mellom atomer
- Overflaten "dytter tilbake"

**3. Størrelsen avhenger av situasjonen**
- N er ikke alltid lik G!
- N justerer seg slik at objektet ikke går gjennom overflaten

## Normalkraft i ulike situasjoner

**Situasjon 1: Objekt på horisontal overflate (i ro)**

**Krefter:**
- Tyngdekraft: $G = mg$ (nedover)
- Normalkraft: $N$ (oppover)

**Likevekt (ingen akselerasjon):**
$$\\sum F_y = 0$$
$$N - G = 0$$
$$N = G = mg$$

**Konklusjon:** N = G når objektet er i ro på horisontal overflate.

**Situasjon 2: Objekt på horisontal overflate (akselererer oppover)**

**Eksempel:** Elevator akselererer oppover med $a$ (oppover).

**Krefter:**
- Tyngdekraft: $G = mg$ (nedover)
- Normalkraft: $N$ (oppover fra gulvet)

**Newtons 2. lov (positiv retning: oppover):**
$$N - G = ma$$
$$N = G + ma = m(g + a)$$

**Konklusjon:** $N > G$ når objektet akselererer oppover.

**Følelse:** Du føler deg tyngre i elevator som akselererer oppover.

**Situasjon 3: Objekt på horisontal overflate (akselererer nedover)**

**Eksempel:** Elevator akselererer nedover med $a$ (nedover).

**Newtons 2. lov (positiv retning: oppover):**
$$N - G = m(-a)$$
$$N = G - ma = m(g - a)$$

**Konklusjon:** $N < G$ når objektet akselererer nedover.

**Følelse:** Du føler deg lettere i elevator som akselererer nedover.

**Spesialtilfelle: Fritt fall ($a = g$):**
$$N = m(g - g) = 0$$

Ingen normalkraft → Vektløs følelse!

**Situasjon 4: Objekt på skråplan**

**Krefter:**
- Tyngdekraft: $G = mg$ (nedover)
- Normalkraft: $N$ (vinkelrett på skråplanet)

**G splittes i to komponenter:**
- Parallell med skråplan: $G_{\\parallel} = mg \\sin \\theta$
- Vinkelrett på skråplan: $G_{\\perp} = mg \\cos \\theta$

**Likevekt vinkelrett på skråplan:**
$$N = G_{\\perp} = mg \\cos \\theta$$

**Konklusjon:** $N < G$ på skråplan.

**Situasjon 5: Objekt med ekstra kraft**

**Eksempel:** Du dytter nedover på en kasse med kraft $F$.

**Krefter (vertikal):**
- Tyngdekraft: $G = mg$ (nedover)
- Din kraft: $F$ (nedover)
- Normalkraft: $N$ (oppover)

**Likevekt:**
$$N = G + F$$

**Konklusjon:** N øker når du dytter nedover.`,
    },
    {
      id: 'fys1-3-2-def-normalkraft',
      type: 'definition',
      title: 'Normalkraft',
      content: 'Normalkraft er kontaktkraften vinkelrett på en overflate. Den hindrer objekter i å gå gjennom overflaten. Størrelsen på N avhenger av situasjonen og er ikke alltid lik tyngdekraften.',
    },
    {
      id: 'fys1-3-2-friksjon',
      type: 'text',
      content: `# Friksjonskraft

**Definisjon:** Friksjonskraft er motstanden mot bevegelse mellom to overflater i kontakt.

**To typer friksjon:**

## 1. Statisk friksjon ($f_s$)

**Når:** Objektet er i ro (ingen relativ bevegelse mellom overflatene)

**Egenskaper:**
- Hindrer bevegelse
- Varierer fra 0 til maksimalverdi
- Alltid lik og motsatt av påført kraft (opp til maksimumsverdi)

**Maksimal statisk friksjon:**
$$f_{s,\\text{maks}} = \\mu_s N$$

hvor:
- $f_{s,\\text{maks}}$ = maksimal statisk friksjon [N]
- $\\mu_s$ = statisk friksjonskoeffisient (dimensjonsløs)
- $N$ = normalkraft [N]

**Generell statisk friksjon:**
$$f_s \\leq \\mu_s N$$

**Eksempel:**
- Bok på bord (i ro): $f_s = 0$ (ingen kraft prøver å flytte den)
- Du dytter lett på kasse (står stille): $f_s = F_{\\text{dytt}}$ (opp til maksimumsverdi)
- Du dytter hardere: $f_s$ øker tilsvarende
- Du dytter hardt nok: $f_s = \\mu_s N$ (maksimal), kassen begynner å gli

## 2. Kinetisk friksjon ($f_k$)

**Når:** Objektet beveger seg (relativ bevegelse mellom overflatene)

**Egenskaper:**
- Motvirker bevegelse
- Konstant størrelse (uavhengig av fart)
- Alltid motsatt av bevegelsesretningen

**Kinetisk friksjon:**
$$f_k = \\mu_k N$$

hvor:
- $f_k$ = kinetisk friksjon [N]
- $\\mu_k$ = kinetisk friksjonskoeffisient (dimensjonsløs)
- $N$ = normalkraft [N]

**Viktig:** $\\mu_k < \\mu_s$ (alltid)
- Det er lettere å holde noe i bevegelse enn å starte bevegelsen
- Derfor: $f_k < f_{s,\\text{maks}}$

## Friksjonskoeffisienter

**Typiske verdier:**

| Materiale | $\\mu_s$ | $\\mu_k$ |
|-----------|----------|----------|
| Tre på tre | 0.5 | 0.3 |
| Stål på stål | 0.7 | 0.6 |
| Gummi på asfalt (tørt) | 1.0 | 0.8 |
| Gummi på asfalt (vått) | 0.7 | 0.5 |
| Is på is | 0.1 | 0.03 |
| Teflon på teflon | 0.04 | 0.04 |

**Egenskaper:**
- Dimensjonsløse tall
- Avhenger av materialer og overflateegenskaper
- Typisk mellom 0 og 1 (men kan være > 1)
- Bestemmes eksperimentelt

## Friksjonskraftens retning

**Statisk friksjon:**
- Motsatt av den kraften som prøver å skape bevegelse
- Parallell med overflaten

**Kinetisk friksjon:**
- Motsatt av bevegelsesretningen
- Parallell med overflaten

## Faktorer som påvirker friksjon

**Påvirker friksjon:**
1. **Normalformen (N)**: Større N → større friksjon
2. **Materialer**: Ulike $\\mu$-verdier
3. **Overflateegenskaper**: Ru vs. glatt

**Påvirker IKKE friksjon (teoretisk modell):**
1. **Kontaktareal**: Større areal påvirker ikke (overraskende!)
2. **Hastighet**: $f_k$ er konstant (i enkel modell)

**Praktisk:**
- I virkeligheten påvirker hastighet friksjon (mer komplekst)
- Luftmotstand blir viktig ved høye hastigheter`,
    },
    {
      id: 'fys1-3-2-def-friksjon',
      type: 'definition',
      title: 'Friksjon',
      content: 'Friksjon er motstanden mot bevegelse mellom to overflater. **Statisk friksjon** hindrer bevegelse: $f_s \\leq \\mu_s N$. **Kinetisk friksjon** motvirker bevegelse: $f_k = \\mu_k N$. Alltid: $\\mu_k < \\mu_s$.',
    },
    {
      id: 'fys1-3-2-snor',
      type: 'text',
      content: `# Snorkraft (spenning)

**Definisjon:** Snorkraft er trekkraften i et tau, snor, eller wire.

**Symbol:** $T$ (fra engelsk "tension")

**Egenskaper:**

**1. Alltid trekk, aldri trykk**
- Snor kan dra, men ikke dytte
- Kraft langs snoren

**2. Samme størrelse i hele snoren (hvis snoren er masseløs)**
- Kraften i den ene enden = kraften i den andre enden
- Gjelder når vi neglisjerer snorens masse

**3. Retning langs snoren**
- På objekt A: Snoren drar mot objekt B
- På objekt B: Snoren drar mot objekt A

## Snor over trinse (talje)

**Trinse (talje):** Rullet hjul som snor løper over

**Egenskaper (ideell trinse):**
- Ingen friksjon
- Masseløs
- Snorkraften er samme på begge sider

**Fordel med trinse:**
- Endrer kraftretning
- Gjør det mulig å løfte noe ved å dra nedover (lettere)

**Eksempel: Løfte vekt med trinse**

**System:**
- Vekt med masse $m_1$ henges i snor
- Snoren går over trinse
- Du drar i andre ende med kraft $T$

**Krefter på vekten:**
- Tyngdekraft: $G = m_1 g$ (nedover)
- Snorkraft: $T$ (oppover)

**Likevekt (henger stille):**
$$T = G = m_1 g$$

Du må dra med samme kraft som vektens tyngde.

## To masser forbundet med snor

**System:** Masse $m_1$ og $m_2$ forbundet med snor

**Viktig:** Snorkraften $T$ er en indre kraft i systemet

**Metode 1: Se på hver masse separat**
- Tegn frilegemediagram for hver masse
- Snorkraften er samme, men motsatt retning på hver masse
- Løs to likninger med to ukjente

**Metode 2: Se på systemet som helhet**
- Ignorer snorkraften (intern kraft)
- Bruk totalmasse og ytre krefter
- Finn akselerasjon
- Bruk akselerasjon til å finne snorkraft

**Eksempel behandles senere**`,
    },
    {
      id: 'fys1-3-2-def-snorkraft',
      type: 'definition',
      title: 'Snorkraft',
      content: 'Snorkraft (spenning) er trekkraften i et tau eller snor. Snorkraften er alltid trekk langs snoren. I en masseløs snor er spenningen samme overalt: $T_1 = T_2$.',
    },
    {
      id: 'fys1-3-2-kraftdiagram',
      type: 'text',
      content: `# Kraftdiagrammer og frilegemediagrammer

For å løse dynamikk-problemer må vi systematisk identifisere alle krefter. Vi bruker to typer diagrammer:

## 1. Kraftdiagram (Situasjonsdiagram)

**Formål:** Vise den fysiske situasjonen

**Innhold:**
- Tegn alle objekter
- Vis kontaktpunkter
- Vis overflater
- Vis bevegelsesretning

**Ikke:** Tegn krefter her (kun situasjon)

## 2. Frilegemediagram (FBD - Free Body Diagram)

**Formål:** Vise alle krefter på ett objekt

**Prosedyre:**

**Steg 1: Isoler objektet**
- Tegn objektet alene (ofte som punkt eller boks)
- Fjern alt annet (overflater, andre objekter)

**Steg 2: Identifiser alle krefter**
- **Tyngdekraft (G):** Alltid nedover, $G = mg$
- **Normalkraft (N):** Vinkelrett på overflate (hvis kontakt)
- **Friksjon (f):** Parallelt med overflate (hvis kontakt og relativ bevegelse/tendens)
- **Snorkraft (T):** Langs snor (hvis festet til snor)
- **Påført kraft (F):** Hvis noen/noe dytter/drar

**Steg 3: Tegn kreftene**
- Start pilen fra objektets sentrum (eller massesenter)
- Pil i riktig retning
- Merk kraften med symbol og eventuelt verdi

**Steg 4: Velg koordinatsystem**
- x-akse (vanligvis horisontal eller langs skråplan)
- y-akse (vanligvis vertikal eller vinkelrett på skråplan)
- Merk retningene

**Steg 5: Splitt krefter i komponenter (hvis nødvendig)**
- Bruk trigonometri
- Finn x- og y-komponenter

**Viktige regler:**

**1. Tegn kun krefter som virker PÅ objektet**
- Ikke krefter som objektet utøver på andre

**2. Hver kraft har en årsak (agent)**
- Tyngdekraft: Fra Jorden
- Normalkraft: Fra overflaten
- Friksjon: Fra overflaten
- Snorkraft: Fra snoren

**3. Tegn alle krefter, ingen mer**
- Ikke glem noen
- Ikke finn på krefter

**4. Krefter er vektorer**
- Piler med retning og størrelse
- Vi adderer dem vektormessig

## Eksempel: Bok på bord

**Situasjon:** En bok ligger stille på et horisontalt bord.

**Frilegemediagram:**

\`\`\`
       ↑ N (normalkraft fra bordet)
       |
     [BOK]
       |
       ↓ G = mg (tyngdekraft fra Jorden)
\`\`\`

**Krefter:**
- $G = mg$ (nedover)
- $N$ (oppover)

**Likevekt (i ro):**
$$\\sum F_y = 0$$
$$N - G = 0$$
$$N = G$$

## Eksempel: Kasse på skråplan

**Situasjon:** En kasse ligger stille på et skråplan med vinkel $\\theta$.

**Frilegemediagram:**

\`\`\`
        N ↑ (vinkelrett på skråplan)
         |
       [KASSE]
        / \\
       /   \\ G_⊥
      /     \\
     / θ     ↓
    /    G_∥ →
   /
\`\`\`

**Krefter:**
- $G = mg$ (nedover, vertikal)
- $N$ (vinkelrett på skråplan)
- $f_s$ (oppover langs skråplan, siden kassen ikke glir)

**Splitt G i komponenter:**
- $G_{\\parallel} = mg \\sin \\theta$ (ned langs skråplan)
- $G_{\\perp} = mg \\cos \\theta$ (inn i skråplan)

**Likevekt:**
- Vinkelrett på skråplan: $N = G_{\\perp} = mg \\cos \\theta$
- Parallelt med skråplan: $f_s = G_{\\parallel} = mg \\sin \\theta$`,
    },
    {
      id: 'fys1-3-2-ex-normalkraft',
      type: 'example',
      title: 'Eksempel: Normalkraft i elevator',
      problem: 'En person med masse 70 kg står i en elevator. Beregn normalkraften fra gulvet når:\n\na) Elevatoren står stille\n\nb) Elevatoren akselererer oppover med 2.0 m/s²\n\nc) Elevatoren akselererer nedover med 2.0 m/s²\n\nd) Elevatoren er i fritt fall',
      solution: `**Gitt:**
- Masse: $m = 70$ kg
- Gravitasjon: $g = 9.8$ m/s²

**Krefter på personen:**
- Tyngdekraft: $G = mg = 70 \\cdot 9.8 = 686$ N (nedover)
- Normalkraft: $N$ (oppover fra gulvet)

**Velg positiv retning: oppover**

**a) Elevator står stille**

Akselerasjon: $a = 0$

**Newtons 2. lov:**
$$\\sum F_y = ma$$
$$N - G = 0$$
$$N = G = 686 \\text{ N}$$

**Svar:** $N = 686$ N (samme som vekten)

**b) Elevator akselererer oppover ($a = 2.0$ m/s²)**

**Newtons 2. lov:**
$$N - G = ma$$
$$N = G + ma = m(g + a)$$
$$N = 70(9.8 + 2.0) = 70 \\cdot 11.8 = 826 \\text{ N}$$

**Svar:** $N = 826$ N

**Tolkning:** Du føler deg tyngre. Gulvet må dytte hardere for å gi deg akselerasjon oppover.

**c) Elevator akselererer nedover ($a = -2.0$ m/s²)**

**Newtons 2. lov:**
$$N - G = m(-a)$$
$$N = G - ma = m(g - a)$$
$$N = 70(9.8 - 2.0) = 70 \\cdot 7.8 = 546 \\text{ N}$$

**Svar:** $N = 546$ N

**Tolkning:** Du føler deg lettere. Gulvet trenger ikke dytte like hardt.

**d) Elevator i fritt fall ($a = -g = -9.8$ m/s²)**

**Newtons 2. lov:**
$$N = m(g - g) = 0$$

**Svar:** $N = 0$ N

**Tolkning:** Vektløs! Ingen normalkraft. Du svever i elevatoren.

**Oppsummering:**

| Situasjon | Akselerasjon | Normalkraft | Følelse |
|-----------|--------------|-------------|---------|
| Stille | 0 | 686 N | Normal |
| Opp | +2.0 m/s² | 826 N | Tyngre |
| Ned | -2.0 m/s² | 546 N | Lettere |
| Fritt fall | -9.8 m/s² | 0 N | Vektløs |`,
    },
    {
      id: 'fys1-3-2-ex-friksjon',
      type: 'example',
      title: 'Eksempel: Kasse på gulv med friksjon',
      problem: 'En kasse med masse 50 kg står på et horisontalt gulv. Friksjonskoeffisientene er $\\mu_s = 0.40$ og $\\mu_k = 0.30$. Du dytter horisontalt på kassen.\n\na) Hva er maksimal statisk friksjon?\n\nb) Du dytter med $F = 150$ N. Flytter kassen seg?\n\nc) Du dytter med $F = 250$ N. Hva er akselerasjonen?',
      solution: `**Gitt:**
- Masse: $m = 50$ kg
- $\\mu_s = 0.40$
- $\\mu_k = 0.30$
- $g = 9.8$ m/s²

**Steg 1: Finn normalkraften**

Kassen er på horisontal overflate, ingen vertikal akselerasjon.

$$N = mg = 50 \\cdot 9.8 = 490 \\text{ N}$$

**a) Maksimal statisk friksjon**

$$f_{s,\\text{maks}} = \\mu_s N = 0.40 \\cdot 490 = 196 \\text{ N}$$

**Svar:** $f_{s,\\text{maks}} = 196$ N

**b) Dytt med F = 150 N**

**Sammenlign med maksimal statisk friksjon:**
- Du dytter med: $F = 150$ N
- Maks statisk friksjon: $f_{s,\\text{maks}} = 196$ N

Siden $F < f_{s,\\text{maks}}$:
- Den statiske friksjonen kan motstå din kraft
- $f_s = F = 150$ N (lik og motsatt)
- Kassen står stille

**Svar:** Nei, kassen flytter seg ikke. $f_s = 150$ N holder den i ro.

**c) Dytt med F = 250 N**

**Sammenlign med maksimal statisk friksjon:**
- Du dytter med: $F = 250$ N
- Maks statisk friksjon: $f_{s,\\text{maks}} = 196$ N

Siden $F > f_{s,\\text{maks}}$:
- Kassen begynner å bevege seg
- Kinetisk friksjon overtar

**Kinetisk friksjon:**
$$f_k = \\mu_k N = 0.30 \\cdot 490 = 147 \\text{ N}$$

**Resulterende kraft:**
$$F_{\\text{res}} = F - f_k = 250 - 147 = 103 \\text{ N}$$

**Akselerasjon:**
$$a = \\frac{F_{\\text{res}}}{m} = \\frac{103}{50} = 2.06 \\text{ m/s}^2$$

**Svar:** Ja, kassen akselererer med $a = 2.1$ m/s²

**Oppsummering:**

| Din kraft | Friksjon | Resultat |
|-----------|----------|----------|
| F = 150 N | $f_s = 150$ N | Står stille |
| F = 196 N | $f_s = 196$ N | Akkurat starter |
| F = 250 N | $f_k = 147$ N | $a = 2.1$ m/s² |`,
    },
  ],
  exercises: [
    {
      id: 'fys1-3-2-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beregn tyngdekraften på:\n\na) En person med masse 65 kg\n\nb) En bil med masse 1200 kg\n\nc) En fotball med masse 450 g',
      solution: `**Formel:** $G = mg$ hvor $g = 9.8$ m/s²

**a) Person (m = 65 kg)**

$$G = mg = 65 \\cdot 9.8 = 637 \\text{ N}$$

**Svar:** 637 N

**b) Bil (m = 1200 kg)**

$$G = mg = 1200 \\cdot 9.8 = 11\\,760 \\text{ N} = 11.76 \\text{ kN}$$

**Svar:** 11.8 kN

**c) Fotball (m = 450 g = 0.45 kg)**

$$G = mg = 0.45 \\cdot 9.8 = 4.41 \\text{ N}$$

**Svar:** 4.4 N`,
      hints: ['Bruk G = mg', 'Husk g = 9.8 m/s²', 'Konverter gram til kg'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En kasse med masse 40 kg ligger stille på et horisontalt gulv. Beregn normalkraften fra gulvet på kassen.',
      solution: `**Gitt:**
- Masse: $m = 40$ kg
- Kassen er i ro på horisontal overflate

**Krefter:**
- Tyngdekraft: $G = mg$ (nedover)
- Normalkraft: $N$ (oppover)

**Ingen vertikal akselerasjon ($a_y = 0$):**

$$\\sum F_y = 0$$
$$N - G = 0$$
$$N = G = mg$$
$$N = 40 \\cdot 9.8 = 392 \\text{ N}$$

**Svar:** $N = 392$ N = 0.39 kN`,
      hints: ['Frilegemediagram', 'Likevekt: N = G'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En kasse står på et horisontalt gulv. Normalkraften er 500 N og friksjonskoeffisienten er $\\mu_s = 0.35$. Hva er maksimal statisk friksjon?',
      solution: `**Gitt:**
- Normalkraft: $N = 500$ N
- Statisk friksjonskoeffisient: $\\mu_s = 0.35$

**Formel:**
$$f_{s,\\text{maks}} = \\mu_s N$$

$$f_{s,\\text{maks}} = 0.35 \\cdot 500 = 175 \\text{ N}$$

**Svar:** Maksimal statisk friksjon er 175 N

**Tolkning:** Det kreves en kraft større enn 175 N for å få kassen til å begynne å bevege seg.`,
      hints: ['Bruk formel for maksimal statisk friksjon'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bok med masse 2.0 kg ligger på et horisontalt bord. Du dytter horisontalt med kraft 5.0 N, men boken flytter seg ikke. Hva er friksjonskraften?',
      solution: `**Gitt:**
- Masse: $m = 2.0$ kg
- Påført kraft: $F = 5.0$ N (horisontal)
- Boken flytter seg ikke ($a = 0$)

**Krefter (horisontal retning):**
- Din kraft: $F = 5.0$ N (frem)
- Statisk friksjon: $f_s$ (tilbake)

**Siden boken ikke flytter seg:**
- Akselerasjon: $a = 0$
- Likevekt: $\\sum F_x = 0$

$$F - f_s = 0$$
$$f_s = F = 5.0 \\text{ N}$$

**Svar:** Friksjonskraften er 5.0 N (motsatt av din kraft)

**Viktig:** Statisk friksjon tilpasser seg slik at objektet forblir i ro, opp til maksimumsverdi $f_{s,\\text{maks}} = \\mu_s N$.`,
      hints: ['Likevekt: sum av krefter = 0', 'Statisk friksjon = påført kraft'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En kasse med masse 80 kg ligger på et horisontalt gulv med $\\mu_s = 0.50$ og $\\mu_k = 0.40$. Du dytter horisontalt med kraft 450 N. Beregn akselerasjonen.',
      solution: `**Gitt:**
- Masse: $m = 80$ kg
- $\\mu_s = 0.50$
- $\\mu_k = 0.40$
- Påført kraft: $F = 450$ N
- $g = 9.8$ m/s²

**Steg 1: Finn normalkraft**

$$N = mg = 80 \\cdot 9.8 = 784 \\text{ N}$$

**Steg 2: Finn maksimal statisk friksjon**

$$f_{s,\\text{maks}} = \\mu_s N = 0.50 \\cdot 784 = 392 \\text{ N}$$

**Steg 3: Sjekk om kassen beveger seg**

Siden $F = 450$ N $> f_{s,\\text{maks}} = 392$ N:
- Kassen beveger seg
- Kinetisk friksjon virker

**Steg 4: Finn kinetisk friksjon**

$$f_k = \\mu_k N = 0.40 \\cdot 784 = 313.6 \\text{ N}$$

**Steg 5: Finn resulterende kraft**

$$F_{\\text{res}} = F - f_k = 450 - 313.6 = 136.4 \\text{ N}$$

**Steg 6: Finn akselerasjon**

$$a = \\frac{F_{\\text{res}}}{m} = \\frac{136.4}{80} = 1.705 \\text{ m/s}^2$$

**Svar:** $a = 1.7$ m/s²`,
      hints: ['Sjekk om F > f_s,maks', 'Bruk kinetisk friksjon når objektet beveger seg', 'F_res = F - f_k'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En person med masse 60 kg står i en elevator som akselererer oppover med 3.0 m/s². Beregn normalkraften fra gulvet på personen.',
      solution: `**Gitt:**
- Masse: $m = 60$ kg
- Akselerasjon: $a = 3.0$ m/s² (oppover)
- $g = 9.8$ m/s²

**Krefter på personen:**
- Tyngdekraft: $G = mg$ (nedover)
- Normalkraft: $N$ (oppover)

**Velg positiv retning: oppover**

**Newtons 2. lov:**
$$\\sum F_y = ma$$
$$N - G = ma$$
$$N = G + ma = mg + ma = m(g + a)$$
$$N = 60(9.8 + 3.0) = 60 \\cdot 12.8 = 768 \\text{ N}$$

**Svar:** $N = 768$ N

**Tolkning:** Normalkraften er større enn vekten (G = 588 N). Personen føler seg tyngre.`,
      hints: ['Frilegemediagram', 'Positiv retning: oppover', 'N - G = ma'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'En vekt med masse 20 kg henges i et tau. Beregn snorkraften når:\n\na) Vekten henger stille\n\nb) Vekten løftes med konstant akselerasjon 2.5 m/s²',
      solution: `**Gitt:**
- Masse: $m = 20$ kg
- $g = 9.8$ m/s²

**Krefter på vekten:**
- Tyngdekraft: $G = mg = 20 \\cdot 9.8 = 196$ N (nedover)
- Snorkraft: $T$ (oppover)

**a) Vekten henger stille (a = 0)**

**Newtons 2. lov (positiv retning: oppover):**
$$\\sum F_y = 0$$
$$T - G = 0$$
$$T = G = 196 \\text{ N}$$

**Svar:** $T = 196$ N

**b) Vekten løftes med a = 2.5 m/s²**

**Newtons 2. lov:**
$$T - G = ma$$
$$T = G + ma = m(g + a)$$
$$T = 20(9.8 + 2.5) = 20 \\cdot 12.3 = 246 \\text{ N}$$

**Svar:** $T = 246$ N

**Tolkning:** Snorkraften må være større enn vekten for å gi akselerasjon oppover.`,
      hints: ['Del a: Likevekt', 'Del b: T - G = ma'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En kasse med masse 50 kg står på et skråplan med vinkel 30°. Friksjonskoeffisienten er $\\mu_s = 0.60$. Vil kassen gli ned?',
      solution: `**Gitt:**
- Masse: $m = 50$ kg
- Vinkel: $\\theta = 30°$
- $\\mu_s = 0.60$
- $g = 9.8$ m/s²

**Krefter:**
- Tyngdekraft: $G = mg = 50 \\cdot 9.8 = 490$ N (nedover, vertikal)
- Normalkraft: $N$ (vinkelrett på skråplan)
- Statisk friksjon: $f_s$ (oppover langs skråplan, hvis nødvendig)

**Splitt tyngdekraft i komponenter:**
- Parallell med skråplan: $G_{\\parallel} = mg \\sin \\theta = 490 \\sin 30° = 490 \\cdot 0.5 = 245$ N
- Vinkelrett på skråplan: $G_{\\perp} = mg \\cos \\theta = 490 \\cos 30° = 490 \\cdot 0.866 = 424.3$ N

**Steg 1: Finn normalkraft**

Ingen akselerasjon vinkelrett på skråplan:
$$N = G_{\\perp} = 424.3 \\text{ N}$$

**Steg 2: Finn maksimal statisk friksjon**

$$f_{s,\\text{maks}} = \\mu_s N = 0.60 \\cdot 424.3 = 254.6 \\text{ N}$$

**Steg 3: Sammenlign med G_∥**

- Kraft ned langs skråplan: $G_{\\parallel} = 245$ N
- Maksimal friksjon opp langs skråplan: $f_{s,\\text{maks}} = 254.6$ N

Siden $f_{s,\\text{maks}} > G_{\\parallel}$:
- Statisk friksjon kan holde kassen
- $f_s = G_{\\parallel} = 245$ N
- Kassen står stille

**Svar:** Nei, kassen vil ikke gli ned. Friksjonen er sterk nok til å holde den.

**Grenseverdi:**
Kassen ville akkurat begynt å gli hvis $\\mu_s = \\frac{G_{\\parallel}}{N} = \\frac{245}{424.3} = 0.577$

Siden $\\mu_s = 0.60 > 0.577$, står kassen stille.`,
      hints: ['Splitt G i komponenter', 'Finn N fra G_⊥', 'Sammenlign G_∥ med f_s,maks'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'To kasser med masser $m_1 = 30$ kg og $m_2 = 20$ kg er forbundet med et masseløst tau. Kasse 1 står på et horisontalt gulv, tauet går over en friksjonsfri trinse, og kasse 2 henger vertikalt. Beregn:\n\na) Akselerasjonen til systemet\n\nb) Snorkraften\n\nAntа friksjonsfritt gulv.',
      solution: `**Gitt:**
- Masse 1 (horisontal): $m_1 = 30$ kg
- Masse 2 (vertikal): $m_2 = 20$ kg
- Friksjonsfritt gulv
- Masseløst tau, friksjonsfri trinse
- $g = 9.8$ m/s²

**Metode 1: Systemtilnærming**

**Betrakt system som helhet:**
- Total masse: $m_{\\text{tot}} = m_1 + m_2 = 50$ kg
- Ytre kraft: Kun $m_2$ sin tyngdekraft trekker systemet
- $F_{\\text{ytre}} = m_2 g = 20 \\cdot 9.8 = 196$ N

**a) Akselerasjon:**
$$a = \\frac{F_{\\text{ytre}}}{m_{\\text{tot}}} = \\frac{m_2 g}{m_1 + m_2}$$
$$a = \\frac{20 \\cdot 9.8}{50} = 3.92 \\text{ m/s}^2$$

**Svar:** $a = 3.9$ m/s²

**b) Snorkraft:**

**Betrakt kasse 2 alene:**

**Krefter på kasse 2:**
- Tyngdekraft: $G_2 = m_2 g = 196$ N (nedover)
- Snorkraft: $T$ (oppover)

**Newtons 2. lov (positiv: nedover):**
$$m_2 g - T = m_2 a$$
$$T = m_2 g - m_2 a = m_2(g - a)$$
$$T = 20(9.8 - 3.92) = 20 \\cdot 5.88 = 117.6 \\text{ N}$$

**Svar:** $T = 118$ N

**Sjekk med kasse 1:**

**Krefter på kasse 1:**
- Snorkraft: $T$ (horisontalt, fremover)

**Newtons 2. lov:**
$$T = m_1 a = 30 \\cdot 3.92 = 117.6 \\text{ N}$$ ✓

**Metode 2: Individuelle likninger**

**Kasse 1 (horisontal):**
$$T = m_1 a \\quad \\text{(1)}$$

**Kasse 2 (vertikal, positiv: nedover):**
$$m_2 g - T = m_2 a \\quad \\text{(2)}$$

**Løs (1) og (2):**

Fra (1): $T = m_1 a$

Sett inn i (2):
$$m_2 g - m_1 a = m_2 a$$
$$m_2 g = m_1 a + m_2 a = (m_1 + m_2)a$$
$$a = \\frac{m_2 g}{m_1 + m_2}$$

Samme resultat som metode 1.`,
      hints: ['Systemtilnærming: kun m₂g trekker', 'Akselerasjon: a = m₂g/(m₁+m₂)', 'Snorkraft fra én av kassene'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En kasse med masse 60 kg dras oppover et friksjonsfritt skråplan (vinkel 25°) med et tau parallelt med skråplanet. Kassen akselererer med 1.5 m/s². Beregn snorkraften.',
      solution: `**Gitt:**
- Masse: $m = 60$ kg
- Vinkel: $\\theta = 25°$
- Akselerasjon: $a = 1.5$ m/s² (oppover langs skråplan)
- Friksjonsfritt
- $g = 9.8$ m/s²

**Krefter:**
- Tyngdekraft: $G = mg = 60 \\cdot 9.8 = 588$ N (vertikal nedover)
- Normalkraft: $N$ (vinkelrett på skråplan)
- Snorkraft: $T$ (oppover langs skråplan)

**Splitt tyngdekraft:**
- $G_{\\parallel} = mg \\sin \\theta = 588 \\sin 25° = 588 \\cdot 0.423 = 248.7$ N (ned langs skråplan)
- $G_{\\perp} = mg \\cos \\theta = 588 \\cos 25° = 588 \\cdot 0.906 = 532.7$ N (inn i skråplan)

**Newtons 2. lov langs skråplan (positiv: oppover):**
$$T - G_{\\parallel} = ma$$
$$T = G_{\\parallel} + ma$$
$$T = mg \\sin \\theta + ma$$
$$T = 248.7 + 60 \\cdot 1.5 = 248.7 + 90 = 338.7 \\text{ N}$$

**Svar:** $T = 339$ N

**Tolkning:**
- For å holde kassen på plass (a = 0): $T = 248.7$ N
- For å gi akselerasjon oppover: Ekstra $ma = 90$ N kreves
- Total: $T = 338.7$ N`,
      hints: ['Splitt G i komponenter', 'Newtons 2. lov langs skråplan', 'T - G_∥ = ma'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En kasse med masse 40 kg står på gulvet i en lastebil. Lastebilen akselererer fremover med 3.0 m/s². Friksjonskoeffisientene mellom kasse og gulv er $\\mu_s = 0.50$ og $\\mu_k = 0.40$. Vil kassen gli?',
      solution: `**Gitt:**
- Masse: $m = 40$ kg
- Lastebilens akselerasjon: $a = 3.0$ m/s² (fremover)
- $\\mu_s = 0.50$, $\\mu_k = 0.40$
- $g = 9.8$ m/s²

**Situasjon:**
Lastebilen akselererer fremover. For at kassen skal følge med (samme akselerasjon), må det virke en kraft fremover på kassen. Denne kraften må komme fra friksjon!

**Kassen i lastebilens referansesystem:**

**Steg 1: Finn nødvendig friksjonskraft**

For at kassen skal akselerere med lastebilen:
$$F_{\\text{friksjon}} = ma = 40 \\cdot 3.0 = 120 \\text{ N}$$

**Steg 2: Finn normalkraft**

$$N = mg = 40 \\cdot 9.8 = 392 \\text{ N}$$

**Steg 3: Finn maksimal statisk friksjon**

$$f_{s,\\text{maks}} = \\mu_s N = 0.50 \\cdot 392 = 196 \\text{ N}$$

**Steg 4: Sammenlign**

- Nødvendig friksjon: 120 N
- Maksimal statisk friksjon: 196 N

Siden $120 \\text{ N} < 196 \\text{ N}$:
- Statisk friksjon kan gi den nødvendige kraften
- Kassen glir ikke
- $f_s = 120$ N (fremover på kassen)

**Svar:** Nei, kassen vil ikke gli. Den statiske friksjonen ($f_s = 120$ N) er nok til å gi kassen akselerasjonen.

**Grenseverdi:**
Kassen ville akkurat begynt å gli hvis $a = \\mu_s g = 0.50 \\cdot 9.8 = 4.9$ m/s²

Siden $a = 3.0$ m/s² < 4.9 m/s², glir ikke kassen.

**Fra labsystem:**
- Lastebilen akselererer fremover
- Kassen må også akselerere fremover for å følge med
- Friksjon fra gulvet gir den nødvendige kraften fremover
- Hvis lastebilen akselererer for raskt, glir kassen bakover relativt til lastebilen`,
      hints: ['Finn nødvendig kraft: F = ma', 'Finn maksimal statisk friksjon', 'Sammenlign'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'To kasser, $m_1 = 20$ kg og $m_2 = 30$ kg, står oppå hverandre ($m_1$ på topp). De står på et friksjonsfritt gulv. Du dytter horisontalt på $m_1$ med kraft 60 N. Friksjonskoeffisienten mellom kassene er $\\mu_s = 0.40$ og $\\mu_k = 0.30$. Vil kassene bevege seg sammen, eller vil $m_1$ gli på $m_2$?',
      solution: `**Gitt:**
- Masse 1 (øverst): $m_1 = 20$ kg
- Masse 2 (nederst): $m_2 = 30$ kg
- Påført kraft på $m_1$: $F = 60$ N (horisontal)
- Mellom kasser: $\\mu_s = 0.40$, $\\mu_k = 0.30$
- Mellom $m_2$ og gulv: friksjonsfritt
- $g = 9.8$ m/s²

**Antа kassene beveger seg sammen:**

**Total masse:**
$$m_{\\text{tot}} = m_1 + m_2 = 50 \\text{ kg}$$

**Akselerasjon hvis de beveger seg sammen:**
$$a = \\frac{F}{m_{\\text{tot}}} = \\frac{60}{50} = 1.2 \\text{ m/s}^2$$

**For at $m_2$ skal akselerere med $a = 1.2$ m/s²:**

**Nødvendig kraft på $m_2$:**
$$F_2 = m_2 a = 30 \\cdot 1.2 = 36 \\text{ N}$$

Denne kraften må komme fra friksjon mellom kassene!

**Finn maksimal statisk friksjon mellom kassene:**

**Normalkraft mellom kasser:**
$$N = m_1 g = 20 \\cdot 9.8 = 196 \\text{ N}$$

(Dette er trykket fra $m_1$ på $m_2$)

**Maksimal statisk friksjon:**
$$f_{s,\\text{maks}} = \\mu_s N = 0.40 \\cdot 196 = 78.4 \\text{ N}$$

**Sammenlign:**
- Nødvendig friksjon for å akselerere $m_2$: 36 N
- Maksimal statisk friksjon: 78.4 N

Siden $36 \\text{ N} < 78.4 \\text{ N}$:
- Friksjonen kan gi den nødvendige kraften
- Kassene beveger seg sammen
- $f_s = 36$ N

**Svar:** Kassene vil bevege seg sammen med akselerasjon $a = 1.2$ m/s². Kasse 1 vil ikke gli på kasse 2.

**Grenseverdi:**

Kassene ville akkurat begynt å gli relativt til hverandre hvis:
$$F = (m_1 + m_2) \\cdot \\frac{\\mu_s m_1 g}{m_2}$$
$$F = 50 \\cdot \\frac{78.4}{30} = 130.7 \\text{ N}$$

Siden $F = 60$ N < 130.7 N, glir ikke kassene.

**Analyse:**

**Kasse 1:**
- Påført kraft: 60 N (fremover)
- Friksjon fra kasse 2: 36 N (bakover)
- Resulterende: 60 - 36 = 24 N
- Akselerasjon: $\\frac{24}{20} = 1.2$ m/s² ✓

**Kasse 2:**
- Friksjon fra kasse 1: 36 N (fremover, fra Newtons 3. lov)
- Friksjon fra gulv: 0 N (friksjonsfritt)
- Resulterende: 36 N
- Akselerasjon: $\\frac{36}{30} = 1.2$ m/s² ✓`,
      hints: ['Antа de beveger seg sammen', 'Finn akselerasjon: a = F/m_tot', 'Finn nødvendig friksjon for m₂', 'Sammenlign med maks statisk friksjon'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-13',
      number: '13',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En person med masse 70 kg står i en elevator. Elevatoren har masse 300 kg. Beregn snorkraften i tauet som holder elevatoren når elevatoren akselererer oppover med 2.0 m/s².',
      solution: `**Gitt:**
- Masse person: $m_p = 70$ kg
- Masse elevator: $m_e = 300$ kg
- Total masse: $m_{\\text{tot}} = 370$ kg
- Akselerasjon: $a = 2.0$ m/s² (oppover)
- $g = 9.8$ m/s²

**Betrakt person + elevator som ett system:**

**Krefter på systemet:**
- Tyngdekraft: $G = m_{\\text{tot}} g = 370 \\cdot 9.8 = 3626$ N (nedover)
- Snorkraft: $T$ (oppover)

**Newtons 2. lov (positiv: oppover):**
$$T - G = m_{\\text{tot}} a$$
$$T = G + m_{\\text{tot}} a$$
$$T = m_{\\text{tot}}(g + a)$$
$$T = 370(9.8 + 2.0) = 370 \\cdot 11.8 = 4366 \\text{ N}$$

**Svar:** $T = 4366$ N = 4.4 kN

**Tolkning:**
- Snorkraften må holde tyngdekraften (3626 N)
- PLUSS gi akselerasjon oppover (740 N)
- Total: 4366 N

**Normalkraft på person:**

Fra tidligere eksempel vet vi:
$$N = m_p(g + a) = 70(9.8 + 2.0) = 826 \\text{ N}$$

Personen føler seg tyngre.`,
      hints: ['Betrakt person + elevator som ett system', 'T - G = ma', 'T = m(g + a)'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-2-ex-14',
      number: '14',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Tegn frilegemediagram og identifiser alle krefter for følgende situasjoner:\n\na) En bil som akselererer fremover på en horisontal vei\n\nb) En kasse som glir ned et skråplan med friksjon\n\nc) En pendel som svinger (i laveste punkt)',
      solution: `**a) Bil som akselererer fremover**

**Frilegemediagram:**

\`\`\`
       N ↑ (normalkraft fra vei)
       |
     [BIL]
       |
       ↓ G (tyngdekraft)

    f → (friksjon fra vei, fremover)
\`\`\`

**Krefter:**
1. **Tyngdekraft (G):** $G = mg$ (nedover fra Jorden)
2. **Normalkraft (N):** Fra veien (oppover, vinkelrett på vei)
3. **Friksjon (f):** Fra veien på hjul (fremover!)

**Viktig:** Friksjon er fremover! Dette er den kraften som akselererer bilen. Hjulene dytter bakover på veien, veien dytter fremover på hjulene (Newtons 3. lov).

**Vertikal likevekt:** $N = G$

**Horisontal:** $f = ma$ (fremover)

**b) Kasse glir ned skråplan**

**Frilegemediagram:**

\`\`\`
        N ↑ (vinkelrett på skråplan)
         |
       [KASSE]
        /|\\
       / | \\
      /  ↓  \\
     /   G   \\
    /   /|\\   \\
   /   / | \\   \\
  /   ↓  ↓  ↓   \\
 /   G_⊥ G_∥     \\
/__________________\\
      ← f_k (friksjon opp langs skråplan)
\`\`\`

**Krefter:**
1. **Tyngdekraft (G):** $G = mg$ (vertikal nedover)
   - Splitt: $G_{\\parallel} = mg \\sin \\theta$ (ned langs skråplan)
   - $G_{\\perp} = mg \\cos \\theta$ (inn i skråplan)
2. **Normalkraft (N):** Fra skråplan (vinkelrett på skråplan)
3. **Kinetisk friksjon ($f_k$):** Fra skråplan (opp langs skråplan, motsatt bevegelse)

**Vinkelrett på skråplan:** $N = G_{\\perp} = mg \\cos \\theta$

**Langs skråplan (positiv: ned):**
$$G_{\\parallel} - f_k = ma$$
$$mg \\sin \\theta - \\mu_k mg \\cos \\theta = ma$$
$$a = g(\\sin \\theta - \\mu_k \\cos \\theta)$$

**c) Pendel i laveste punkt**

**Frilegemediagram:**

\`\`\`
       T ↑ (snorkraft)
       |
       |
     [MASSE]
       |
       ↓ G (tyngdekraft)
\`\`\`

**Krefter:**
1. **Tyngdekraft (G):** $G = mg$ (nedover)
2. **Snorkraft (T):** Fra snoren (oppover, langs snor)

**Newtons 2. lov (positiv: oppover):**

I laveste punkt beveger massen seg i sirkelbevegelse → sentripetalkraft mot sentrum (oppover).

$$T - G = \\frac{mv^2}{r}$$
$$T = G + \\frac{mv^2}{r} = mg + \\frac{mv^2}{r}$$

**Viktig:** $T > G$ i laveste punkt (snoren strammes)

I høyeste punkt: $T < G$ (hvis pendel svinger helt rundt)`,
      hints: ['Identifiser alle krefter', 'Husk retning', 'Friksjon på bil er fremover!'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
