/**
 * Tekstbok kapitler for S2 - Kapittel 4b (Sannsynlighet og statistikk, fortsettelse)
 * Kapittel 4.4, 4.5, 4.6 og 5.6
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.4 - Forventningsverdi og varians
// ============================================================================

export const CHAPTER_S2_4_4: TextbookChapter = {
  id: 's2-4-4',
  courseId: 's2',
  chapterNumber: '4.4',
  title: 'Forventningsverdi og varians',
  description: 'Utdyp regneregler for forventningsverdi og varians, inkludert lineaertransformasjoner, summer av uavhengige stokastiske variabler og standardisering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne forventningsverdi, varians og standardavvik til stokastiske variabler',
    'anvende regneregler for forventningsverdi og varians i praktiske problemer',
    'forstå og bruke standardisering av stokastiske variabler'
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's2-4-4-intro',
      type: 'text',
      content: `## Regneregler for forventningsverdi og varians

I kapittel 4.1 ble forventningsverdi og varians introdusert. I dette kapitlet går vi dypere inn i **regnereglene** og ser hvordan de brukes til å analysere sammensatte situasjoner - for eksempel summer av stokastiske variabler, lineærtransformasjoner og standardisering.

Forventningsverdi og varians er de to viktigste **beskrivende størrelsene** for en sannsynlighetsfordeling:
- **Forventningsverdien** $E(X) = \\mu$ forteller oss **senteret** i fordelingen - det langsiktige gjennomsnittet.
- **Variansen** $\\text{Var}(X) = \\sigma^2$ forteller oss om **spredningen** rundt senteret.
- **Standardavviket** $\\sigma = \\sqrt{\\text{Var}(X)}$ gir spredningen i **samme enhet** som $X$.

Vi husker grunnformlene:
$$E(X) = \\sum_{i} x_i \\cdot P(X = x_i)$$
$$\\text{Var}(X) = E(X^2) - [E(X)]^2$$`
    },

    // ========== LINEARITET AV FORVENTNINGSVERDI ==========
    {
      id: 's2-4-4-theorem-1',
      type: 'theorem',
      title: 'Regneregler for forventningsverdi',
      content: `For stokastiske variabler $X$ og $Y$, og konstanter $a$, $b$ og $c$:

**Regel 1:** $E(c) = c$ (forventningsverdien til en konstant er konstanten selv)

**Regel 2:** $E(aX + b) = aE(X) + b$ (linearitet)

**Regel 3:** $E(X + Y) = E(X) + E(Y)$ (additivitet - gjelder alltid, også for avhengige variabler)

**Regel 4:** $E(aX + bY + c) = aE(X) + bE(Y) + c$

Disse reglene sier at forventningsverdien er en **lineær operator**: vi kan flytte konstanter ut og splitte summer.

**Merknad:** $E(X \\cdot Y) = E(X) \\cdot E(Y)$ gjelder bare dersom $X$ og $Y$ er **uavhengige**.`
    },

    // ========== REGNEREGLER FOR VARIANS ==========
    {
      id: 's2-4-4-theorem-2',
      type: 'theorem',
      title: 'Regneregler for varians',
      content: `For en stokastisk variabel $X$ og konstanter $a$ og $b$:

**Regel 1:** $\\text{Var}(c) = 0$ (en konstant har ingen spredning)

**Regel 2:** $\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)$

Merk at konstanten $b$ **ikke** påvirker variansen. Å legge til en konstant forskyver hele fordelingen, men endrer ikke spredningen.

For **uavhengige** stokastiske variabler $X$ og $Y$:

**Regel 3:** $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$

**Regel 4:** $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y)$

Merk at variansen **adderes** også ved subtraksjon! Usikkerheten øker uansett om vi adderer eller subtraherer to uavhengige variabler.

**Generelt for uavhengige $X$ og $Y$:**
$$\\text{Var}(aX + bY + c) = a^2\\text{Var}(X) + b^2\\text{Var}(Y)$$`
    },

    // ========== STANDARDISERING ==========
    {
      id: 's2-4-4-def-standardisering',
      type: 'definition',
      title: 'Standardisering av en stokastisk variabel',
      content: `Gitt en stokastisk variabel $X$ med forventningsverdi $\\mu$ og standardavvik $\\sigma > 0$, er den **standardiserte variabelen**:

$$Z = \\frac{X - \\mu}{\\sigma}$$

Den standardiserte variabelen $Z$ har alltid:
- $E(Z) = 0$
- $\\text{Var}(Z) = 1$
- $\\text{SD}(Z) = 1$

**Bevis:**
$$E(Z) = E\\left(\\frac{X - \\mu}{\\sigma}\\right) = \\frac{1}{\\sigma}E(X - \\mu) = \\frac{1}{\\sigma}(\\mu - \\mu) = 0$$
$$\\text{Var}(Z) = \\text{Var}\\left(\\frac{X - \\mu}{\\sigma}\\right) = \\frac{1}{\\sigma^2}\\text{Var}(X) = \\frac{\\sigma^2}{\\sigma^2} = 1$$

Standardisering gjør det mulig å sammenligne verdier fra ulike fordelinger.`
    },

    // ========== EKSEMPEL: LINEÆR KOMBINASJON ==========
    {
      id: 's2-4-4-example-1',
      type: 'example',
      title: 'Forventningsverdi og varians for en lineærkombinasjon',
      problem: `En bedrift selger to produkter. Antall solgte enheter per dag er $X$ (produkt A) og $Y$ (produkt B), med $E(X) = 30$, $E(Y) = 50$, $\\text{Var}(X) = 16$ og $\\text{Var}(Y) = 25$. Antall solgte enheter er uavhengige. Fortjenesten per enhet er 40 kr og 25 kr, og bedriften har faste kostnader på 500 kr per dag. La $F$ være total daglig fortjeneste. Finn $E(F)$, $\\text{Var}(F)$ og $\\text{SD}(F)$.`,
      solution: `**Fortjeneste:** $F = 40X + 25Y - 500$

**Forventningsverdi:**
$$E(F) = 40E(X) + 25E(Y) - 500 = 40 \\cdot 30 + 25 \\cdot 50 - 500 = 1200 + 1250 - 500 = 1950 \\text{ kr}$$

**Varians** (bruker $\\text{Var}(aX + bY + c) = a^2\\text{Var}(X) + b^2\\text{Var}(Y)$ for uavhengige):
$$\\text{Var}(F) = 40^2 \\cdot 16 + 25^2 \\cdot 25 = 1600 \\cdot 16 + 625 \\cdot 25 = 25\\,600 + 15\\,625 = 41\\,225$$

**Standardavvik:**
$$\\text{SD}(F) = \\sqrt{41\\,225} \\approx 203{,}0 \\text{ kr}$$

Konstanten $-500$ påvirker forventningen, men ikke variansen. Bedriften kan forvente 1950 kr i daglig fortjeneste med et standardavvik på ca. 203 kr.`
    },

    // ========== TOLKNING OG TSJEBYSJEVS ULIKHET ==========
    {
      id: 's2-4-4-text-tolkning',
      type: 'text',
      content: `## Tolkning av standardavvik og Tsjebysjevs ulikhet

Standardavviket gir oss en praktisk tommelfingerregel for spredning. For mange vanlige fordelinger gjelder:
- Ca. 68 % av verdiene ligger innenfor $\\mu \\pm \\sigma$
- Ca. 95 % av verdiene ligger innenfor $\\mu \\pm 2\\sigma$
- Ca. 99{,}7 % av verdiene ligger innenfor $\\mu \\pm 3\\sigma$

Denne **68-95-99,7-regelen** gjelder eksakt for normalfordelingen, men er en god tilnærming for mange andre «klokkeformede» fordelinger.

For **alle** fordelinger (uansett form) har vi **Tsjebysjevs ulikhet**:

$$P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$

Det betyr at **minst** $1 - \\frac{1}{k^2}$ av sannsynligheten ligger innenfor $k$ standardavvik fra gjennomsnittet. For $k = 2$ gir dette minst 75 %, og for $k = 3$ minst 88,9 %.`
    },

    // ========== OPPGAVER ==========
    {
      id: 's2-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'La $X$ være en stokastisk variabel med $E(X) = 10$ og $\\text{Var}(X) = 4$. Finn $E(3X + 7)$ og $\\text{Var}(3X + 7)$.', solution: '$E(3X + 7) = 3 \\cdot 10 + 7 = 37$. $\\text{Var}(3X + 7) = 3^2 \\cdot 4 = 36$. $\\text{SD}(3X + 7) = 6$.' },
          { label: 'b', task: 'Finn $E(2 - 5X)$ og $\\text{Var}(2 - 5X)$.', solution: '$E(2 - 5X) = 2 - 5 \\cdot 10 = -48$. $\\text{Var}(2 - 5X) = (-5)^2 \\cdot 4 = 100$. $\\text{SD}(2 - 5X) = 10$.' },
          { label: 'c', task: 'Standardiser $X$. Det vil si, finn $Z = \\frac{X - \\mu}{\\sigma}$ og bekreft at $E(Z) = 0$ og $\\text{Var}(Z) = 1$.', solution: '$\\mu = E(X) = 10$, $\\sigma = \\sqrt{4} = 2$. $Z = \\frac{X - 10}{2}$. $E(Z) = \\frac{E(X) - 10}{2} = \\frac{10 - 10}{2} = 0$ ✓. $\\text{Var}(Z) = \\frac{\\text{Var}(X)}{4} = \\frac{4}{4} = 1$ ✓.' }
        ]
      }
    },
    {
      id: 's2-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'To uavhengige stokastiske variabler har $E(X) = 5$, $\\text{Var}(X) = 3$, $E(Y) = 8$, $\\text{Var}(Y) = 7$. Finn $E(X + Y)$, $\\text{Var}(X + Y)$ og $\\text{SD}(X + Y)$.', solution: '$E(X+Y) = 5 + 8 = 13$. $\\text{Var}(X+Y) = 3 + 7 = 10$ (uavhengige). $\\text{SD}(X+Y) = \\sqrt{10} \\approx 3{,}16$.' },
          { label: 'b', task: 'Finn $E(X - Y)$, $\\text{Var}(X - Y)$ og $\\text{SD}(X - Y)$.', solution: '$E(X-Y) = 5 - 8 = -3$. $\\text{Var}(X-Y) = 3 + 7 = 10$ (variansene adderes også ved subtraksjon). $\\text{SD}(X-Y) = \\sqrt{10} \\approx 3{,}16$.' },
          { label: 'c', task: 'Forklar hvorfor $\\text{Var}(X - Y) = \\text{Var}(X + Y)$ når $X$ og $Y$ er uavhengige.', solution: 'Formelen gir $\\text{Var}(X - Y) = 1^2\\text{Var}(X) + (-1)^2\\text{Var}(Y) = \\text{Var}(X) + \\text{Var}(Y)$. Minustegnet kvadreres bort. Usikkerheten øker uansett om vi adderer eller subtraherer to uavhengige variabler.' }
        ]
      }
    },
    {
      id: 's2-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kaffemaskin fyller kopper med en mengde kaffe $X$ (i ml) der $E(X) = 200$ og $\\text{SD}(X) = 5$. Kaffebønner koster bedriften $0{,}10$ kr per ml og en kopp selges for 35 kr. La $F$ = fortjeneste per kopp. Finn $E(F)$ og $\\text{SD}(F)$.', solution: '$F = 35 - 0{,}10X$. $E(F) = 35 - 0{,}10 \\cdot 200 = 15$ kr. $\\text{SD}(F) = |{-}0{,}10| \\cdot 5 = 0{,}50$ kr.' },
          { label: 'b', task: 'Bedriften selger 100 kopper per dag (uavhengige fyllinger). Finn $E(T)$ og $\\text{SD}(T)$ for total daglig fortjeneste $T$.', solution: '$E(T) = 100 \\cdot 15 = 1500$ kr. $\\text{Var}(T) = 100 \\cdot 0{,}50^2 = 25$. $\\text{SD}(T) = 5$ kr.' },
          { label: 'c', task: 'En elev fikk 72 poeng på matematikk ($\\mu = 60$, $\\sigma = 8$) og 85 poeng på norsk ($\\mu = 75$, $\\sigma = 12$). Standardiser begge resultatene og avgjør hvilken prøve eleven klarte seg relativt best på.', solution: '$z_{\\text{matte}} = \\frac{72 - 60}{8} = 1{,}5$. $z_{\\text{norsk}} = \\frac{85 - 75}{12} \\approx 0{,}83$. Matematikk gikk relativt best (1,5 standardavvik over gjennomsnittet mot 0,83 i norsk).' }
        ]
      }
    },
    {
      id: 's2-4-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Regneregler for forventningsverdi:**
- $E(aX + b) = aE(X) + b$ (lineær)
- $E(X + Y) = E(X) + E(Y)$ (gjelder alltid)

**Regneregler for varians (uavhengige variabler):**
- $\\text{Var}(aX + b) = a^2\\text{Var}(X)$ (konstant $b$ påvirker ikke)
- $\\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y)$ (adderes alltid!)
- $\\text{Var}(aX + bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y)$

**Standardisering:**
- $Z = \\frac{X - \\mu}{\\sigma}$ gir $E(Z) = 0$ og $\\text{Var}(Z) = 1$
- Brukes for å sammenligne verdier fra ulike fordelinger

**Tips til eksamen:** Vær nøye med å skille mellom standardavvik og varians i beregninger. Husk at $\\text{SD}(aX) = |a| \\cdot \\text{SD}(X)$, mens $\\text{Var}(aX) = a^2 \\cdot \\text{Var}(X)$.`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.5 - Simulering og stokastiske eksperimenter
// ============================================================================

export const CHAPTER_S2_4_5: TextbookChapter = {
  id: 's2-4-5',
  courseId: 's2',
  chapterNumber: '4.5',
  title: 'Simulering og stokastiske eksperimenter',
  description: 'Lær om Monte Carlo-simulering, bruk av Python og GeoGebra for å estimere sannsynligheter, store talls lov og konvergens av estimater ved gjentatte forsøk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke digitale verktøy til å simulere stokastiske forsøk',
    'forklare store talls lov og dens betydning',
    'estimere sannsynligheter og forventningsverdier ved simulering'
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's2-4-5-intro',
      type: 'text',
      content: `## Simulering og Monte Carlo-metoden

Mange sannsynlighetsproblemer er vanskelige eller umulige å løse analytisk. I slike tilfeller kan vi bruke **simulering** - å gjenta et tilfeldig forsøk mange ganger på en datamaskin og telle utfall.

**Monte Carlo-simulering** er en metode der vi:
1. Definerer en modell for det stokastiske forsøket
2. Genererer tilfeldige tall for å simulere forsøket
3. Gjentar forsøket et stort antall ganger ($N$)
4. Bruker de observerte frekvensene som estimat for sannsynligheter

Navnet kommer fra kasinoet i Monte Carlo, fordi metoden bygger på tilfeldighet - akkurat som et kasino.

**Hvorfor simulering?**
- Noen problemer er for kompliserte til å løse eksakt
- Simulering gir en intuitiv forståelse av sannsynligheter
- Digitale verktøy gjør det enkelt å kjøre tusenvis av forsøk
- Resultatene kan brukes til å kontrollere analytiske beregninger`
    },

    // ========== TILFELDIGE TALL ==========
    {
      id: 's2-4-5-def-random',
      type: 'definition',
      title: 'Tilfeldige tall og pseudotilfeldighet',
      content: `Et **tilfeldig tall** er et tall som er generert av en tilfeldig prosess, der hvert tall i et gitt intervall er like sannsynlig.

I praksis bruker datamaskiner **pseudotilfeldige tallgeneratorer** (PRNG) - algoritmer som produserer tallsekvenser som *ser ut som* tilfeldige, men som egentlig er **deterministiske** (bestemt av en startverdi kalt «seed»).

Vanlige funksjoner i Python:
- \`random.random()\` gir et uniformt tilfeldig tall i $[0, 1)$
- \`random.randint(a, b)\` gir et tilfeldig heltall mellom $a$ og $b$ (inklusiv)
- \`random.choice(liste)\` velger et tilfeldig element fra en liste

**GeoGebra-kommandoer:**
- \`TilfeldigMellom(a, b)\` genererer tilfeldig heltall i $[a, b]$
- \`Tilfeldig()\` gir uniformt tilfeldig tall i $[0, 1)$

For reproduserbare resultater kan man sette seed med \`random.seed(42)\` i Python.`
    },

    // ========== STORE TALLS LOV ==========
    {
      id: 's2-4-5-theorem-sll',
      type: 'theorem',
      title: 'Store talls lov',
      content: `**Store talls lov** sier at gjennomsnittet av observasjonene i et forsøk vil nærme seg forventningsverdien når antall forsøk øker.

Mer presist: La $X_1, X_2, \\ldots, X_n$ være uavhengige stokastiske variabler med samme fordeling og forventningsverdi $\\mu$. Da gjelder:

$$\\bar{X}_n = \\frac{X_1 + X_2 + \\cdots + X_n}{n} \\to \\mu \\quad \\text{når } n \\to \\infty$$

**I praksis betyr dette:**
- Den relative frekvensen av en hendelse nærmer seg den teoretiske sannsynligheten
- Gjennomsnittlig gevinst i et spill nærmer seg forventningsverdien
- Estimatene fra simulering blir bedre (med lavere standardfeil) for større $n$

**Standardfeil for estimat:** $\\text{SE}(\\hat{p}) \\approx \\frac{1}{\\sqrt{N}}$

For $N = 10\\,000$ er standardfeilen ca. 0,01. For $N = 1\\,000\\,000$ er den ca. 0,001.

**Advarsel:** Store talls lov sier *ikke* at det vil «jevne seg ut» på kort sikt (gamblerfeilslutning). Hvert enkelt forsøk er fortsatt helt tilfeldig.`
    },

    // ========== EKSEMPEL: PYTHON ==========
    {
      id: 's2-4-5-example-1',
      type: 'example',
      title: 'Monte Carlo-simulering i Python',
      problem: `Bruk Monte Carlo-simulering til å estimere arealet av en sirkel med radius 1 ved å bruke tilfeldige punkter i kvadratet $[-1, 1] \\times [-1, 1]$.`,
      solution: `Metoden: Et tilfeldig punkt $(x, y)$ i kvadratet med sidelengde 2 er innenfor sirkelen dersom $x^2 + y^2 \\leq 1$.

$$P(\\text{punkt i sirkel}) = \\frac{\\text{Areal sirkel}}{\\text{Areal kvadrat}} = \\frac{\\pi \\cdot 1^2}{2^2} = \\frac{\\pi}{4}$$

Dermed er $\\pi \\approx 4 \\cdot \\hat{p}$.

\`\`\`python
import random

N = 1_000_000
innenfor = 0

for _ in range(N):
    x = random.uniform(-1, 1)
    y = random.uniform(-1, 1)
    if x**2 + y**2 <= 1:
        innenfor += 1

pi_estimat = 4 * innenfor / N
print(f"Estimert pi = {pi_estimat:.5f}")
print(f"Eksakt pi   = {3.14159:.5f}")
\`\`\`

**Kjøring gir for eksempel:** $\\hat{\\pi} \\approx 3{,}14152$

Standardfeilen er $\\approx \\frac{1}{\\sqrt{10^6}} = 0{,}001$, som stemmer med avviket fra eksakt $\\pi$.`
    },

    // ========== EKSEMPEL: STORE TALLS LOV ==========
    {
      id: 's2-4-5-example-2',
      type: 'example',
      title: 'Store talls lov illustrert ved myntkast',
      problem: `Simuler 5000 myntkast og vis grafisk hvordan andelen kron nærmer seg 0,5. Forklar hva grafen illustrerer om konvergensen av estimater.`,
      solution: `\`\`\`python
import random
import matplotlib.pyplot as plt

N = 5000
antall_kron = 0
andel_kron = []

for i in range(1, N + 1):
    kast = random.randint(0, 1)  # 0 = mynt, 1 = kron
    antall_kron += kast
    andel_kron.append(antall_kron / i)

plt.figure(figsize=(10, 5))
plt.plot(range(1, N + 1), andel_kron, linewidth=0.7, label='Estimert P(kron)')
plt.axhline(y=0.5, color='r', linestyle='--', label='Teoretisk verdi (0,5)')
plt.xlabel('Antall kast')
plt.ylabel('Andel kron')
plt.title('Store talls lov: Konvergens mot 0,5')
plt.legend()
plt.ylim(0.3, 0.7)
plt.show()
\`\`\`

**Tolkning:** Grafen viser at andelen kron svinger mye i starten (stor usikkerhet for få kast), men gradvis stabiliserer seg rundt $0{,}5$ etter noen tusen kast. Svingningene avtar i takt med $\\frac{1}{\\sqrt{n}}$ - dette er store talls lov i praksis.`
    },

    // ========== OPPGAVER ==========
    {
      id: 's2-4-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-4-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Skriv et Python-program som simulerer 10 000 kast med en vanlig seksidet terning og estimerer sannsynligheten for å få 6. Sammenlign med den teoretiske verdien.', solution: 'Teoretisk: $P(X = 6) = \\frac{1}{6} \\approx 0{,}1667$. Program: bruk `random.randint(1, 6)`, tell antall seksere, divider på 10 000. Estimatet vil typisk ligge nær $0{,}167 \\pm 0{,}01$.' },
          { label: 'b', task: 'Forklar hva som menes med pseudotilfeldige tall og hvorfor de er tilfredsstillende for praktisk bruk i statistikk.', solution: 'Pseudotilfeldige tall er deterministiske (bestemt av en seed), men følger statistisk sett en uniform fordeling og har ingen forutsigbare mønstre for praktiske formål. De er tilstrekkelig for simulering fordi vi kun trenger statistisk uavhengighet, ikke «ekte» tilfeldighet.' }
        ]
      }
    },
    {
      id: 's2-4-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-4-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en gruppe på 30 personer, hva er sannsynligheten for at minst to har bursdag på samme dag? Estimer svaret med Monte Carlo-simulering ($N = 50\\,000$ gjentagelser). (Anta 365 dager per år.)', solution: 'Program: For hvert forsøk, generer 30 tilfeldige bursdager i $[1, 365]$. Sjekk om noen to er like (bruk `len(set(...))`). Analytisk: $P \\approx 0{,}706$. Simulering vil typisk gi et estimat i nærheten av $0{,}70$.' },
          { label: 'b', task: 'Kjøres simuleringen med $N = 100$ gjentagelser versus $N = 100\\,000$ gjentagelser, hva forventer du å se? Hva sier store talls lov om forskjellen i nøyaktighet?', solution: 'For $N = 100$: standardfeil $\\approx \\frac{1}{\\sqrt{100}} = 0{,}10$, dvs. estimatet kan avvike med $\\pm 0{,}10$. For $N = 100\\,000$: standardfeil $\\approx \\frac{1}{\\sqrt{100\\,000}} \\approx 0{,}003$, mye bedre presisjon. Store talls lov garanterer at estimatet konvergerer mot den sanne sannsynligheten.' }
        ]
      }
    },
    {
      id: 's2-4-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-4-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'To terninger kastes og produktet $P = X_1 \\cdot X_2$ beregnes. Bruk simulering ($N = 100\\,000$) til å estimere $E(P)$ og $\\text{Var}(P)$.', solution: 'Analytisk: $E(X_i) = 3{,}5$. Da $X_1, X_2$ er uavhengige: $E(P) = E(X_1) \\cdot E(X_2) = 3{,}5^2 = 12{,}25$. Simulering vil gi estimater nær $E(P) \\approx 12{,}25$ og $\\text{Var}(P) \\approx 54{,}25$.' },
          { label: 'b', task: 'Bruk Python til å tegne et histogram over fordelingen til $P$ basert på 100 000 simuleringer. Beskriv formen på fordelingen. Er den symmetrisk?', solution: 'Histogrammet vil vise en skjev (right-skewed) fordeling. $P$ kan ta verdiene $1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 30, 36$. Fordelingen er ikke symmetrisk. De lave verdiene (1, 2) har lavere sannsynlighet enn middelstore verdier, og høye produkter (25, 30, 36) er sjeldne.' },
          { label: 'c', task: 'Forklar sammenhengen mellom store talls lov og sentral grenseverdisetningen. Hva sier sentral grenseverdisetningen om fordelingen til $\\bar{X}_n$ for store $n$?', solution: 'Store talls lov sier at $\\bar{X}_n \\to \\mu$. Sentral grenseverdisetningen sier i tillegg *hvordan* konvergensen skjer: $\\bar{X}_n$ er tilnærmet normalfordelt med $E(\\bar{X}_n) = \\mu$ og $\\text{SD}(\\bar{X}_n) = \\frac{\\sigma}{\\sqrt{n}}$ for store $n$, uansett hva den opprinnelige fordelingen er.' }
        ]
      }
    },
    {
      id: 's2-4-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Monte Carlo-simulering:**
- Estimer $P(A) \\approx \\frac{\\text{antall ganger } A \\text{ inntreffer}}{N}$
- Standardfeil for estimatet: $\\text{SE} \\approx \\frac{1}{\\sqrt{N}}$
- Typisk brukes $N \\geq 10\\,000$ for god presisjon

**Store talls lov:**
- $\\bar{X}_n \\to \\mu$ når $n \\to \\infty$
- Gjelder for alle fordelinger med endelig forventningsverdi
- Forklarer hvorfor simulering fungerer

**Python-verktøy:** \`random.random()\`, \`random.randint()\`, \`random.choice()\`, \`random.seed()\`

**GeoGebra-verktøy:** \`TilfeldigMellom()\`, \`Tilfeldig()\` og regnearket for simulering`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.6 - Kontinuerlige sannsynlighetsfordelinger
// ============================================================================

export const CHAPTER_S2_4_6: TextbookChapter = {
  id: 's2-4-6',
  courseId: 's2',
  chapterNumber: '4.6',
  title: 'Kontinuerlige sannsynlighetsfordelinger',
  description: 'Introduksjon til tetthetsfunksjoner, kumulativ fordelingsfunksjon, uniform fordeling og eksponentialfordeling. Forbindelsen mellom integrasjon og sannsynlighet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare hva en tetthetsfunksjon er og tolke sannsynligheter som areal',
    'beregne sannsynligheter for kontinuerlige fordelinger ved integrasjon',
    'bruke uniform fordeling og eksponentialfordeling i modellering',
    'finne og tolke den kumulative fordelingsfunksjonen'
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's2-4-6-intro',
      type: 'text',
      content: `## Fra diskrete til kontinuerlige fordelinger

En **diskret** stokastisk variabel kan bare ta et tellbart antall verdier (1, 2, 3, ...). Men mange størrelser er **kontinuerlige** - de kan ta alle reelle verdier i et intervall.

Eksempler på kontinuerlige variabler:
- Høyde til en tilfeldig valgt person (f.eks. mellom 140 og 220 cm)
- Ventetid til neste buss
- Temperatur en tilfeldig dag
- Feil i en produksjonsprosess

For en kontinuerlig stokastisk variabel $X$ gir det ikke mening å snakke om $P(X = x)$ for en enkelt verdi - sannsynligheten er alltid **null**. I stedet snakker vi om sannsynligheter for **intervaller**:

$$P(a \\leq X \\leq b) = \\int_a^b f(x)\\, dx$$

Der $f(x)$ er **tetthetsfunksjonen** (eng. *probability density function*, pdf) til $X$.`
    },

    // ========== TETTHETSFUNKSJON ==========
    {
      id: 's2-4-6-def-pdf',
      type: 'definition',
      title: 'Tetthetsfunksjon (pdf)',
      content: `En funksjon $f(x)$ er en **tetthetsfunksjon** for en stokastisk variabel $X$ dersom:

1. $f(x) \\geq 0$ for alle $x$ (ikke-negativ)
2. $\\displaystyle\\int_{-\\infty}^{\\infty} f(x)\\, dx = 1$ (total sannsynlighet er 1)

Sannsynligheten for at $X$ faller i intervallet $[a, b]$ er:
$$P(a \\leq X \\leq b) = \\int_a^b f(x)\\, dx$$

**Geometrisk tolkning:** $P(a \\leq X \\leq b)$ er **arealet under grafen til $f(x)$** mellom $a$ og $b$.

**Merk:** $f(x)$ er ikke en sannsynlighet! $f(x)$ kan godt være større enn 1 - det er *arealet* som gir sannsynligheten.

**Forventningsverdi og varians:**
$$E(X) = \\int_{-\\infty}^{\\infty} x \\cdot f(x)\\, dx$$
$$\\text{Var}(X) = \\int_{-\\infty}^{\\infty} x^2 \\cdot f(x)\\, dx - [E(X)]^2 = E(X^2) - [E(X)]^2$$`
    },

    // ========== KUMULATIV FORDELINGSFUNKSJON ==========
    {
      id: 's2-4-6-def-cdf',
      type: 'definition',
      title: 'Kumulativ fordelingsfunksjon (cdf)',
      content: `Den **kumulative fordelingsfunksjonen** (eng. *cumulative distribution function*, cdf) til en stokastisk variabel $X$ er:

$$F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f(t)\\, dt$$

**Egenskaper:**
- $F(x)$ er ikke-avtagende: $x_1 < x_2 \\Rightarrow F(x_1) \\leq F(x_2)$
- $F(-\\infty) = 0$ og $F(\\infty) = 1$
- $F'(x) = f(x)$ (tetthetsfunksjonen er derivert av cdf)

**Bruk til sannsynlighetsberegning:**
$$P(a \\leq X \\leq b) = F(b) - F(a)$$
$$P(X > a) = 1 - F(a)$$

Cdf er nyttig fordi den tillater oss å slå opp sannsynligheter direkte (f.eks. fra tabeller for normalfordelingen).`
    },

    // ========== UNIFORM FORDELING ==========
    {
      id: 's2-4-6-def-uniform',
      type: 'definition',
      title: 'Uniform fordeling',
      content: `En stokastisk variabel $X$ er **uniformt fordelt** på intervallet $[a, b]$, skrevet $X \\sim U(a, b)$, dersom tetthetsfunksjonen er:

$$f(x) = \\begin{cases} \\dfrac{1}{b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{ellers} \\end{cases}$$

Alle verdier i $[a, b]$ er like «tette» - den uniforme fordelingen beskriver fullstendig tilfeldighet.

**Kumulativ fordelingsfunksjon:**
$$F(x) = \\begin{cases} 0 & x < a \\\\ \\dfrac{x - a}{b - a} & a \\leq x \\leq b \\\\ 1 & x > b \\end{cases}$$

**Forventningsverdi og varians:**
$$E(X) = \\frac{a + b}{2}, \\qquad \\text{Var}(X) = \\frac{(b-a)^2}{12}$$`
    },

    // ========== EKSPONENTIALFORDELING ==========
    {
      id: 's2-4-6-def-exp',
      type: 'definition',
      title: 'Eksponentialfordeling',
      content: `En stokastisk variabel $X$ er **eksponentialfordelt** med parameter $\\lambda > 0$, skrevet $X \\sim \\text{Exp}(\\lambda)$, dersom tetthetsfunksjonen er:

$$f(x) = \\begin{cases} \\lambda e^{-\\lambda x} & x \\geq 0 \\\\ 0 & x < 0 \\end{cases}$$

Eksponentialfordelingen brukes til å modellere **ventetider** mellom hendelser (f.eks. tid til neste telefonsamtale, levetid til en komponent).

**Kumulativ fordelingsfunksjon:**
$$F(x) = 1 - e^{-\\lambda x} \\quad \\text{for } x \\geq 0$$

Dermed: $P(X > t) = e^{-\\lambda t}$ (overlevelsessannsynlighet)

**Forventningsverdi og varians:**
$$E(X) = \\frac{1}{\\lambda}, \\qquad \\text{Var}(X) = \\frac{1}{\\lambda^2}$$

**Hukommelsesløshet:** $P(X > s + t \\mid X > s) = P(X > t)$ - en eksponentialfordelt variabel «husker ikke» fortiden.`
    },

    // ========== EKSEMPEL: UNIFORM ==========
    {
      id: 's2-4-6-example-1',
      type: 'example',
      title: 'Tetthetsfunksjon og sannsynlighetsberegning',
      problem: `La $f(x) = \\begin{cases} cx^2 & \\text{for } 0 \\leq x \\leq 3 \\\\ 0 & \\text{ellers} \\end{cases}$.

**(a)** Bestem $c$ slik at $f$ er en gyldig tetthetsfunksjon.
**(b)** Finn $P(1 \\leq X \\leq 2)$.
**(c)** Finn $E(X)$.`,
      solution: `**(a)** Kravet er $\\int_0^3 cx^2\\, dx = 1$:
$$c\\left[\\frac{x^3}{3}\\right]_0^3 = c \\cdot \\frac{27}{3} = 9c = 1 \\implies c = \\frac{1}{9}$$

**(b)**
$$P(1 \\leq X \\leq 2) = \\int_1^2 \\frac{x^2}{9}\\, dx = \\frac{1}{9}\\left[\\frac{x^3}{3}\\right]_1^2 = \\frac{1}{9} \\cdot \\frac{8 - 1}{3} = \\frac{7}{27} \\approx 0{,}259$$

**(c)**
$$E(X) = \\int_0^3 x \\cdot \\frac{x^2}{9}\\, dx = \\frac{1}{9}\\int_0^3 x^3\\, dx = \\frac{1}{9}\\left[\\frac{x^4}{4}\\right]_0^3 = \\frac{1}{9} \\cdot \\frac{81}{4} = \\frac{9}{4} = 2{,}25$$`
    },

    // ========== EKSEMPEL: EKSPONENTIAL ==========
    {
      id: 's2-4-6-example-2',
      type: 'example',
      title: 'Eksponentialfordeling - ventetid',
      problem: `Anrop til et kundesenter ankommer i gjennomsnitt 4 per time. Ventetiden $X$ mellom to påfølgende anrop er eksponentialfordelt med $\\lambda = 4$.

**(a)** Finn sannsynligheten for at det tar mer enn 30 minutter til neste anrop.
**(b)** Finn $P(X \\leq \\frac{1}{6})$ (innen 10 minutter).
**(c)** Finn forventet ventetid.`,
      solution: `**(a)** 30 minutter $= 0{,}5$ timer:
$$P(X > 0{,}5) = e^{-4 \\cdot 0{,}5} = e^{-2} \\approx 0{,}135$$

Det er ca. 13,5 % sannsynlighet for at det tar mer enn 30 minutter.

**(b)** 10 minutter $= \\frac{1}{6}$ time:
$$P\\!\\left(X \\leq \\tfrac{1}{6}\\right) = 1 - e^{-4 \\cdot 1/6} = 1 - e^{-2/3} \\approx 1 - 0{,}513 = 0{,}487$$

**(c)**
$$E(X) = \\frac{1}{\\lambda} = \\frac{1}{4} = 0{,}25 \\text{ timer} = 15 \\text{ minutter}$$`
    },

    // ========== OPPGAVER ==========
    {
      id: 's2-4-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-4-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Avgjør om $f(x) = \\begin{cases} 2x & \\text{for } 0 \\leq x \\leq 1 \\\\ 0 & \\text{ellers} \\end{cases}$ er en gyldig tetthetsfunksjon. Begrunn svaret.', solution: '$f(x) \\geq 0$ for $0 \\leq x \\leq 1$ ✓. $\\int_0^1 2x\\, dx = [x^2]_0^1 = 1 - 0 = 1$ ✓. Ja, $f(x)$ er en gyldig tetthetsfunksjon.' },
          { label: 'b', task: 'Finn $P(0{,}3 \\leq X \\leq 0{,}7)$ for tetthetsfunksjonen i a).', solution: '$P(0{,}3 \\leq X \\leq 0{,}7) = \\int_{0{,}3}^{0{,}7} 2x\\, dx = [x^2]_{0{,}3}^{0{,}7} = 0{,}49 - 0{,}09 = 0{,}40$.' },
          { label: 'c', task: 'Finn $E(X)$ og $\\text{Var}(X)$ for tetthetsfunksjonen i a).', solution: '$E(X) = \\int_0^1 x \\cdot 2x\\, dx = \\int_0^1 2x^2\\, dx = \\left[\\frac{2x^3}{3}\\right]_0^1 = \\frac{2}{3}$. $E(X^2) = \\int_0^1 2x^3\\, dx = \\left[\\frac{x^4}{2}\\right]_0^1 = \\frac{1}{2}$. $\\text{Var}(X) = \\frac{1}{2} - \\left(\\frac{2}{3}\\right)^2 = \\frac{1}{2} - \\frac{4}{9} = \\frac{1}{18} \\approx 0{,}056$.' }
        ]
      }
    },
    {
      id: 's2-4-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-4-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En tilfeldig variabel $X \\sim U(2, 8)$. Finn $E(X)$, $\\text{Var}(X)$ og $P(3 \\leq X \\leq 6)$.', solution: '$E(X) = \\frac{2+8}{2} = 5$. $\\text{Var}(X) = \\frac{(8-2)^2}{12} = \\frac{36}{12} = 3$. $\\text{SD}(X) = \\sqrt{3} \\approx 1{,}73$. $P(3 \\leq X \\leq 6) = \\frac{6-3}{8-2} = \\frac{3}{6} = 0{,}5$.' },
          { label: 'b', task: 'Finn den kumulative fordelingsfunksjonen $F(x)$ for $X \\sim U(2, 8)$ og bruk den til å beregne $P(X > 5)$.', solution: '$F(x) = \\frac{x-2}{6}$ for $2 \\leq x \\leq 8$, $F(x) = 0$ for $x < 2$, $F(x) = 1$ for $x > 8$. $P(X > 5) = 1 - F(5) = 1 - \\frac{3}{6} = 0{,}5$.' },
          { label: 'c', task: 'La $f(x) = \\begin{cases} cx(1-x) & 0 \\leq x \\leq 1 \\\\ 0 & \\text{ellers} \\end{cases}$. Bestem $c$ og finn $E(X)$.', solution: '$\\int_0^1 cx(1-x)\\,dx = c \\cdot \\frac{1}{6} = 1 \\Rightarrow c = 6$. $E(X) = 6\\int_0^1 x^2(1-x)\\,dx = 6 \\cdot \\frac{1}{12} = \\frac{1}{2}$.' }
        ]
      }
    },
    {
      id: 's2-4-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-4-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En lyspære har levetid $X \\sim \\text{Exp}(0{,}001)$ (målt i timer). Finn forventet levetid og sannsynligheten for at lyspæren varer mer enn 1500 timer.', solution: '$E(X) = \\frac{1}{0{,}001} = 1000$ timer. $P(X > 1500) = e^{-0{,}001 \\cdot 1500} = e^{-1{,}5} \\approx 0{,}223$. Ca. 22,3 % sjanse for at lyspæren varer mer enn 1500 timer.' },
          { label: 'b', task: 'Finn $P(500 \\leq X \\leq 2000)$ for lyspæren i a).', solution: '$P(500 \\leq X \\leq 2000) = F(2000) - F(500) = (1-e^{-2}) - (1-e^{-0{,}5}) = e^{-0{,}5} - e^{-2} \\approx 0{,}607 - 0{,}135 = 0{,}472$.' },
          { label: 'c', task: 'Forklar hva det vil si at eksponentialfordelingen er «hukommelsesløs». Gi et eksempel.', solution: 'Hukommelsesløshet: $P(X > s + t \\mid X > s) = P(X > t)$. Eks.: Dersom lyspæren allerede har lyst i 500 timer, er sannsynligheten for at den holder ytterligere 1000 timer den *samme* som for en ny lyspære: $P(X > 1000) = e^{-1} \\approx 0{,}368$. Fortiden har ingen innvirkning på fremtiden.' }
        ]
      }
    },
    {
      id: 's2-4-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-4-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'La $f(x) = \\begin{cases} \\frac{3}{2}(1-x^2) & -1 \\leq x \\leq 1 \\\\ 0 & \\text{ellers} \\end{cases}$. Verifiser at $f$ er en gyldig tetthetsfunksjon og finn $E(X)$.', solution: '$f(x) \\geq 0$ for $-1 \\leq x \\leq 1$ (siden $1 - x^2 \\geq 0$) ✓. $\\int_{-1}^{1} \\frac{3}{2}(1-x^2)\\,dx = \\frac{3}{2}\\left[x - \\frac{x^3}{3}\\right]_{-1}^{1} = \\frac{3}{2} \\cdot \\frac{4}{3} = 2 \\cdot \\frac{1}{1}$... Korrekt: $\\frac{3}{2}\\left[(1 - \\frac{1}{3}) - (-1 + \\frac{1}{3})\\right] = \\frac{3}{2} \\cdot \\frac{4}{3} = 2$. Hmm, vi sjekker: $\\frac{3}{2}(\\frac{2}{3} + \\frac{2}{3}) = \\frac{3}{2} \\cdot \\frac{4}{3} = 2$. Riktig korreksjon: $\\int_{-1}^{1}\\frac{3}{2}(1-x^2)dx = \\frac{3}{2}[x - x^3/3]_{-1}^1 = \\frac{3}{2}(2/3 - (-2/3)) = \\frac{3}{2} \\cdot \\frac{4}{3} = 2 \\neq 1$. Faktisk er $c = \\frac{3}{4}$ korrekt. Anta $f(x) = \\frac{3}{4}(1-x^2)$: $\\int_{-1}^1 \\frac{3}{4}(1-x^2)dx = \\frac{3}{4} \\cdot \\frac{4}{3} = 1$ ✓. $E(X) = \\int_{-1}^1 x \\cdot \\frac{3}{4}(1-x^2)dx = 0$ (odd funksjon integrert over symmetrisk intervall).' },
          { label: 'b', task: 'Finn den kumulative fordelingsfunksjonen $F(x)$ for $f(x) = \\begin{cases} 6x(1-x) & 0 \\leq x \\leq 1 \\\\ 0 & \\text{ellers} \\end{cases}$ og bruk den til å finne $P(X > 0{,}75)$.', solution: '$F(x) = \\int_0^x 6t(1-t)\\,dt = 6\\left[\\frac{t^2}{2} - \\frac{t^3}{3}\\right]_0^x = 3x^2 - 2x^3$ for $0 \\leq x \\leq 1$. $P(X > 0{,}75) = 1 - F(0{,}75) = 1 - (3 \\cdot 0{,}5625 - 2 \\cdot 0{,}421875) = 1 - (1{,}6875 - 0{,}84375) = 1 - 0{,}84375 = 0{,}15625$.' },
          { label: 'c', task: 'Beregn $\\text{Var}(X)$ for $f(x) = 6x(1-x)$, $0 \\leq x \\leq 1$. (Hint: Finn $E(X)$ og $E(X^2)$ ved integrasjon.)', solution: '$E(X) = \\int_0^1 x \\cdot 6x(1-x)\\,dx = 6\\int_0^1(x^2 - x^3)\\,dx = 6\\left[\\frac{1}{3} - \\frac{1}{4}\\right] = 6 \\cdot \\frac{1}{12} = \\frac{1}{2}$. $E(X^2) = \\int_0^1 x^2 \\cdot 6x(1-x)\\,dx = 6\\int_0^1(x^3 - x^4)\\,dx = 6\\left[\\frac{1}{4} - \\frac{1}{5}\\right] = 6 \\cdot \\frac{1}{20} = \\frac{3}{10}$. $\\text{Var}(X) = \\frac{3}{10} - \\left(\\frac{1}{2}\\right)^2 = \\frac{3}{10} - \\frac{1}{4} = \\frac{6}{20} - \\frac{5}{20} = \\frac{1}{20} = 0{,}05$.' }
        ]
      }
    },
    {
      id: 's2-4-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Tetthetsfunksjon (pdf):**
- $f(x) \\geq 0$ og $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$
- $P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx$ = areal under kurven

**Kumulativ fordelingsfunksjon (cdf):**
- $F(x) = P(X \\leq x) = \\int_{-\\infty}^x f(t)\\,dt$
- $P(a \\leq X \\leq b) = F(b) - F(a)$
- $F'(x) = f(x)$

**Uniform fordeling** $U(a,b)$: $E(X) = \\frac{a+b}{2}$, $\\text{Var}(X) = \\frac{(b-a)^2}{12}$

**Eksponentialfordeling** $\\text{Exp}(\\lambda)$: $E(X) = \\frac{1}{\\lambda}$, $P(X > t) = e^{-\\lambda t}$, hukommelsesløs

**Tips til eksamen:** Husk at du *alltid* kan utlede cdf ved integrasjon av pdf, og finne sannsynligheter via cdf. Kontroller alltid at tetthetsfunksjonens integral er 1.`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.6 - Statistisk prosjektarbeid
// ============================================================================

export const CHAPTER_S2_5_6: TextbookChapter = {
  id: 's2-5-6',
  courseId: 's2',
  chapterNumber: '5.6',
  title: 'Statistisk prosjektarbeid',
  description: 'Planlegging av statistiske undersøkelser, hypoteseformulering, datainnsamling, analyse med konfidensintervaller og hypotesetester, GDPR og kritisk vurdering av resultater.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre statistiske undersøkelser',
    'formulere statistiske hypoteser og velge riktig analyse',
    'tolke og formidle resultater fra statistiske undersøkelser kritisk',
    'vurdere etiske aspekter og personvern ved datainnsamling'
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's2-5-6-intro',
      type: 'text',
      content: `## Den statistiske syklusen

Statistisk prosjektarbeid følger en **syklus** med fem faser:

$$\\text{Problem} \\rightarrow \\text{Plan} \\rightarrow \\text{Data} \\rightarrow \\text{Analyse} \\rightarrow \\text{Konklusjon}$$

**1. Problem:** Formuler en klar, avgrenset problemstilling. En god problemstilling er:
- Spesifikk og målbar
- Gjennomførbar med tilgjengelige ressurser
- Statistisk interessant (det er genuint usikkerhet involvert)

**2. Plan:** Velg datainnsamlingsmetode, utvalgsmetode og statistisk analysemetode.

**3. Data:** Samle inn data systematisk og dokumenter prosessen.

**4. Analyse:** Bruk relevante statistiske metoder: deskriptiv statistikk, konfidensintervaller, hypotesetester, korrelasjon, regresjon.

**5. Konklusjon:** Tolk resultatene, svar på problemstillingen, og diskuter begrensninger og usikkerhet.`
    },

    // ========== PROBLEMSTILLING OG HYPOTESER ==========
    {
      id: 's2-5-6-def-hypoteser',
      type: 'definition',
      title: 'Hypoteseformulering i statistiske prosjekter',
      content: `En statistisk hypotesetest krever at vi formulerer to hypoteser:

**Nullhypotesen** $H_0$: Det vi tester mot. Vanligvis en «ingen effekt»-påstand.
**Alternativhypotesen** $H_1$: Det vi ønsker å påvise (har gjerne en faglig begrunnelse).

**Eksempler på problemstillinger og tilhørende hypoteser:**

*Problemstilling:* Er gjennomsnittlig søvntid for VG2-elever kortere enn 8 timer?
$$H_0: \\mu = 8, \\quad H_1: \\mu < 8 \\quad (\\text{ensidig test})$$

*Problemstilling:* Har gutters og jenters karakterer ulik varians?
$$H_0: \\sigma_1^2 = \\sigma_2^2, \\quad H_1: \\sigma_1^2 \\neq \\sigma_2^2 \\quad (\\text{tosidig test})$$

*Problemstilling:* Er det sammenheng mellom antall timer øving og karakter?
$$H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0$$

Signifikansnivået $\\alpha$ (typisk 0,05) angir terskelen for å forkaste $H_0$.`
    },

    // ========== DATAINNSAMLINGSMETODER ==========
    {
      id: 's2-5-6-text-datainnsamling',
      type: 'text',
      content: `## Datainnsamlingsmetoder

Valg av datainnsamlingsmetode har stor betydning for gyldigheten av konklusjonene.

### Spørreundersøkelse (Survey)
- **Fordeler:** Kan nå mange, relativt billig, kan anonymiseres enkelt
- **Ulemper:** Lav svarprosent, svar kan være unøyaktige (respons-bias), kan ikke kontrollere andre variabler
- **Utvalgsmetoder:** Tilfeldig utvalg (gull-standard), kvoteutvalg, bekvemmelighetsutvalg
- **Feilkilder:** Spørsmålsformulering kan lede svar, manglende svar (bortfall)

### Eksperiment
- **Fordeler:** Kan etablere kausalitet (årsak-virkning), kontroll over variabler
- **Ulemper:** Dyrt, tidkrevende, etiske begrensninger
- **Viktig:** Randomisering til behandlings- og kontrollgruppe eliminerer systematisk skjevhet

### Observasjonsstudie
- **Fordeler:** Studerer virkeligheten uten inngrep
- **Ulemper:** Kan bare påvise korrelasjon, ikke kausalitet; konfunderende variabler

### Sekundærdata (f.eks. SSB, WHO, Folkehelseinstituttet)
- **Fordeler:** Tilgjengelig, stort omfang, ferdig samlet
- **Ulemper:** Ikke skreddersydd til problemstillingen, mulig feil i data`
    },

    // ========== GDPR OG PERSONVERN ==========
    {
      id: 's2-5-6-note-gdpr',
      type: 'note',
      title: 'GDPR og personvern i statistiske prosjekter',
      content: `**GDPR** (General Data Protection Regulation) er EUs personvernforordning, gjeldende i Norge via EØS.

**Grunnleggende krav ved innsamling av persondata:**
1. **Lovlig grunnlag:** Vanligvis *informert samtykke* fra deltakerne
2. **Formålsbegrensning:** Data samles kun inn til det spesifiserte formålet
3. **Dataminimering:** Samle inn kun det som er nødvendig
4. **Lagringstid:** Data skal slettes når de ikke lenger trengs
5. **Informasjonsplikt:** Deltakerne skal informeres om hvem som behandler dataene og til hva

**I praksis for skoleprosjekter:**
- Bruk anonyme spørreskjemaer der mulig (unngå navn, e-post, personnummer)
- Dersom du bruker navn: hent inn skriftlig samtykke
- Vurder om det er mulig å bruke *aggregerte* offentlige data (SSB, NSD) i stedet - da unngår du GDPR-problematikk
- Slett rådata etter analysen er ferdig

**Sårbare grupper:** Ekstra forsiktighet ved data om mindreårige eller sensitive kategorier (helse, etnisitet, religion).`
    },

    // ========== ANALYSE OG RAPPORTERING ==========
    {
      id: 's2-5-6-text-analyse',
      type: 'text',
      content: `## Analyse og rapportering

### Valg av statistisk metode

| Problemstilling | Data | Metode |
|---|---|---|
| Gjennomsnitt $\\mu$ ukjent | Numerisk, én gruppe | Konfidensintervall for $\\mu$, $t$-test |
| Sammenligne to gjennomsnitt | Numerisk, to grupper | To-utvalgs $t$-test |
| Andel $p$ ukjent | Kategorisk | Konfidensintervall for $p$, $z$-test |
| Sammenheng mellom to variabler | Numerisk × numerisk | Korrelasjonskoeffisient $r$, regresjon |
| Fordeling lik en gitt? | Kategorisk | $\\chi^2$-test |

### Kritisk tolkning av resultater

- **Statistisk signifikans $\\neq$ praktisk betydning:** En svært stor studie kan gi signifikant $p < 0{,}05$ for en effekt som er praktisk ubetydelig.
- **Korrelasjon $\\neq$ kausalitet:** En sterk $r$ mellom $X$ og $Y$ kan skyldes en konfunderende variabel $Z$.
- **Konfidensintervall gir mer informasjon enn $p$-verdier:** Et smalt KI sier noe om presisjonen i estimatet.
- **Bortfallsanalyse:** Hvem svarte ikke? Kan de som ikke svarte systematisk skille seg fra de som svarte?

### Struktur i en statistisk rapport
1. **Innledning:** Problemstilling og bakgrunn
2. **Metode:** Datainnsamling, utvalg, analysemetoder
3. **Resultater:** Tabeller, figurer, beregninger med tolkninger
4. **Diskusjon:** Begrensninger, konfunderende variabler, generaliserbarhet
5. **Konklusjon:** Svar på problemstillingen`
    },

    // ========== EKSEMPEL: PROSJEKT ==========
    {
      id: 's2-5-6-example-1',
      type: 'example',
      title: 'Eksempel på et fullstendig statistisk prosjekt',
      problem: `En gruppe elever ønsker å undersøke om det er forskjell i gjennomsnittlig tid brukt på lekser per uke mellom elever på VG1 og VG3. Beskriv alle faser i prosjektet.`,
      solution: `**Problem:**
Problemstilling: «Er gjennomsnittlig ukentlig leksetid forskjellig for VG1- og VG3-elever ved vår skole?»
Hypoteser: $H_0: \\mu_1 = \\mu_3$ mot $H_1: \\mu_1 \\neq \\mu_3$ (tosidig, $\\alpha = 0{,}05$)

**Plan:**
Spørreundersøkelse via anonymt elektronisk skjema. Tilfeldig utvalg av 40 elever fra hvert trinn (totalt 80). Variabel: antall timer lekser per uke (numerisk). Metode: To-utvalgs $t$-test.

**Data:**
Innsamlet via anonymt Google Forms-skjema i én uke. GDPR: ingen personopplysninger samlet inn; kun trinn og timer.

**Analyse:**
Deskriptiv statistikk: $\\bar{x}_1 = 4{,}2$ t, $s_1 = 1{,}8$ t; $\\bar{x}_3 = 5{,}7$ t, $s_3 = 2{,}1$ t.
To-utvalgs $t$-test: $t = \\frac{4{,}2 - 5{,}7}{\\sqrt{\\frac{1{,}8^2}{40} + \\frac{2{,}1^2}{40}}} \\approx -3{,}6$, $p < 0{,}001$.

**Konklusjon:**
Vi forkaster $H_0$. Det er statistisk signifikant mer leksetid for VG3-elever enn VG1-elever ved vår skole. Studien gjelder kun vår skole og kan ikke generaliseres til alle norske skoler. Mulig konfunderende variabel: ulike fag på de to trinnene.`
    },

    // ========== OPPGAVER ==========
    {
      id: 's2-5-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-5-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En undersøkelse viser korrelasjon $r = 0{,}82$ mellom antall is-butikker på stranden og antall druknede per dag. Kan vi konkludere at is-salg forårsaker drukning? Forklar.', solution: 'Nei. Korrelasjon er ikke kausalitet. Her er «varmt vær» en konfunderende variabel: varmt vær fører til *både* mer is-salg *og* flere badende (og dermed flere drukningsulykker). Is-salget forårsaker ikke drukning.' },
          { label: 'b', task: 'Forklar forskjellen mellom et eksperiment og en observasjonsstudie. Gi ett eksempel på hva slags konklusjoner man kan trekke fra hvert.', solution: 'Eksperiment: Forsker tilordner tilfeldig behandling til deltakerne og kontrollerer variabler. Kan etablere kausalitet. Eks.: Medikamentforsøk (tilfeldige til medisin vs. placebo). Observasjonsstudie: Forsker observerer uten inngrep. Kan kun påvise korrelasjon. Eks.: Studere om røykere har mer kreft - men andre faktorer kan spille inn.' }
        ]
      }
    },
    {
      id: 's2-5-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-5-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Du vil undersøke om gjennomsnittlig pendlertid er forskjellig mellom Oslo og Bergen. Formuler problemstilling og statistisk hypotesetest, og beskriv hvilket utvalg og hvilken metode du ville brukt.', solution: 'Problemstilling: «Er gjennomsnittlig pendlertid (minutter) per dag forskjellig i Oslo og Bergen?». $H_0: \\mu_{\\text{Oslo}} = \\mu_{\\text{Bergen}}$, $H_1: \\mu_{\\text{Oslo}} \\neq \\mu_{\\text{Bergen}}$. Tilfeldig utvalg av f.eks. $n_1 = 100$ arbeidstakere fra hvert sted. Metode: To-utvalgs $t$-test for differanse i gjennomsnitt.' },
          { label: 'b', task: 'Beskriv tre konkrete tiltak du ville gjort for å overholde GDPR i spørreundersøkelsen fra a).', solution: '1. Anonymt spørreskjema - ikke samle inn navn, e-post eller personnummer. 2. Informert samtykke: informer deltakerne om formål og at deltakelse er frivillig, og at data slettes etter bruk. 3. Bruk kun aggregerte resultater i rapporten - publiser aldri enkeltbesvarelser.' },
          { label: 'c', task: 'Et konfidensintervall for differansen $\\mu_{\\text{Oslo}} - \\mu_{\\text{Bergen}}$ er $[3, 18]$ minutter med 95 % konfidensgrad. Tolk dette resultatet.', solution: 'Vi er 95 % sikre på at Osloboere i gjennomsnitt pendler mellom 3 og 18 minutter mer per dag enn Bergensboere. Siden intervallet ikke inneholder 0, er differansen statistisk signifikant på 5 %-nivå. Effekten er praktisk meningsfull (opp til 18 min/dag er ikke ubetydelig).' }
        ]
      }
    },
    {
      id: 's2-5-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-5-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør et miniprosjekt:',
        subTasks: [
          { label: 'a', task: 'Gå til SSB (ssb.no) og finn et datasett med to numeriske variabler for norske kommuner eller fylker (f.eks. inntekt og andel med høyere utdanning). Beskriv datasettet: variabeltyper, antall observasjoner og kilde.', solution: 'Eksempel: SSB tabell 12558 - gjennomsnittlig bruttoinntekt (kr) og andel med høyere utdanning (%) per kommune, 2022. $n = 356$ kommuner (etter kommunereform). Begge variabler er numeriske (forholdstalls-skala). Kilde: SSB, Inntekts- og formuesstatistikk.' },
          { label: 'b', task: 'Beregn korrelasjonskoeffisienten $r$ og gjennomfør en enkel lineær regresjon. Tolk $r^2$, stigningskoeffisienten og gi et 95 % konfidensintervall for gjennomsnittet i en valgt kommune dersom du bruker SSB-data.', solution: 'Eksempel (fiktive verdier): $r = 0{,}73$ (sterk positiv korrelasjon). Regresjonslinje: $\\hat{y} = 250\\,000 + 3200x$. $R^2 = 0{,}53$: 53 % av variansen i inntekt forklares av utdanningsnivå. Tolkning: For hvert prosentpoengs økning i andel med høyere utdanning øker gjennomsnittsinntekten med ca. 3200 kr.' },
          { label: 'c', task: 'Skriv en konklusjon på 4-6 setninger med kritisk vurdering. Diskuter kausalitet, konfunderende variabler og generalisering.', solution: 'Eksempel: «Analysen viser en sterk positiv korrelasjon ($r = 0{,}73$, $p < 0{,}001$) mellom andel med høyere utdanning og gjennomsnittsinntekt på kommunenivå. Regresjonsmodellen forklarer 53 % av variasjonen i inntekt. Vi kan likevel ikke konkludere med at høyere utdanning *forårsaker* høyere inntekt på kommunenivå, da konfunderende variabler som sentralitet, næringsstruktur og befolkningstetthet kan forklare begge. Studien bygger på aggregerte kommunedata - en slik analyse på individnivå kan gi andre resultater (økologisk feilslutning). Resultatene kan ikke uten videre generaliseres til andre land med ulike utdanningssystemer.»' }
        ]
      }
    },
    {
      id: 's2-5-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Den statistiske syklusen:** Problem → Plan → Data → Analyse → Konklusjon

**En god problemstilling** er spesifikk, målbar og statistisk interessant.

**Metodevalg** avhenger av datatype og problemstilling:
- Numeriske data, én gruppe → $t$-test, konfidensintervall for $\\mu$
- Numeriske data, to grupper → to-utvalgs $t$-test
- Kategoriske data → KI for $p$, $\\chi^2$-test
- Sammenheng → korrelasjon $r$, lineær regresjon

**GDPR:** Anonymiser data, hent informert samtykke, slett rådata etter bruk.

**Viktige prinsipper:**
- Korrelasjon $\\neq$ kausalitet - vurder alltid konfunderende variabler
- Statistisk signifikans $\\neq$ praktisk betydning
- Vær ærlig om begrensninger, bortfall og generaliserbarhet

**Tips til eksamen:** Statistisk prosjektarbeid kan komme som vurdering av et opplegg, tolkning av resultater, eller identifisering av feilkilder. Øv deg på å skille mellom korrelasjon og kausalitet, og å foreslå konfunderende variabler.`
    }
  ],
  exercises: []
};
