/**
 * Fysikk 1 - Kapittel 5.3: Varmestråling og Stefan-Boltzmanns lov
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_5_3: TextbookChapter = {
  id: 'fys1-5-3',
  courseId: 'fys1',
  chapterNumber: '5.3',
  title: 'Varmestråling og Stefan-Boltzmanns lov',
  description: 'Lær om sortlegemestråling, Stefan-Boltzmanns lov, Wiens forskyvningslov og emisjon/absorpsjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare hva et sort legeme er',
    'bruke Stefan-Boltzmanns lov til beregninger',
    'bruke Wiens forskyvningslov',
    'forklare sammenhengen mellom temperatur og stråling',
    'beskrive emisjon og absorpsjon av stråling',
  ],
  content: [
    {
      id: 'fys1-5-3-intro',
      type: 'text',
      content: `# Varmestråling og Stefan-Boltzmanns lov

Alle legemer med temperatur over absolutt nullpunkt (0 K) sender ut **elektromagnetisk stråling**. Denne strålingen transporterer energi og kalles **varmestråling** eller **termisk stråling**.

**Viktige punkter:**
- Jo høyere temperatur, desto mer stråling
- Jo høyere temperatur, desto kortere bølgelengde
- Varmestråling kan gå gjennom vakuum
- Eneste måte varme kan overføres i verdensrommet`,
    },
    {
      id: 'fys1-5-3-sortlegeme',
      type: 'text',
      content: `# Sort legeme (sortlegeme)

Et **sort legeme** (black body) er et idealisert objekt som:

1. **Absorberer all innkommende stråling** (ingen refleksjon)
2. **Sender ut maksimal stråling** ved en gitt temperatur

**Viktig:**
- "Sort" betyr ikke nødvendigvis visuelt sort
- Det betyr at legemet absorberer all elektromagnetisk stråling
- Et perfekt sort legeme eksisterer ikke i virkeligheten, men noen objekter er gode tilnærminger

**Gode tilnærminger til sort legeme:**
- Solen
- Glødende metaller ved høy temperatur
- Et lite hull inn i en hul kasse (absorber all stråling som kommer inn)

**Kirchhoffs lov:**

> En god absorbent er også en god emitter.

**Betydning:**
- Objekter som absorberer mye stråling, sender også ut mye stråling
- Objekter som reflekterer mye stråling, sender ut lite stråling
- Sort overflate: Absorberer mye, sender ut mye
- Blank overflate: Reflekterer mye, sender ut lite

## Sortlegemestråling

Strålingen fra et sort legeme avhenger kun av temperaturen, ikke av materialtype.

**Egenskaper:**
- Spekteret er kontinuerlig (alle bølgelengder)
- Intensiteten avhenger av bølgelengde og temperatur
- Maksimal intensitet ved en bestemt bølgelengde (avhenger av temperatur)`,
    },
    {
      id: 'fys1-5-3-def-sortlegeme',
      type: 'definition',
      title: 'Sort legeme',
      content: 'Et sort legeme er et idealisert objekt som absorberer all innkommende stråling og sender ut maksimal stråling ved en gitt temperatur. Strålingen avhenger kun av temperaturen.',
    },
    {
      id: 'fys1-5-3-stefan-boltzmann',
      type: 'text',
      content: `# Stefan-Boltzmanns lov

**Stefan-Boltzmanns lov** beskriver den totale effekten (energi per tid) som et sort legeme stråler ut.

## Formelen

$$P = \\sigma A T^4$$

**Der:**
- $P$ = total utstrålingseffekt (W)
- $\\sigma$ = Stefan-Boltzmanns konstant = $5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$
- $A$ = overflatearealet (m²)
- $T$ = absolutt temperatur (K)

**Viktig:**
- Temperaturen må være i **kelvin** (ikke celsius!)
- Effekten er proporsjonal med $T^4$ (fjerde potens!)
- Dobling av temperatur gir $2^4 = 16$ ganger mer stråling

## For objekter som ikke er perfekte sortlegemer

For virkelige objekter brukes:

$$P = \\varepsilon \\sigma A T^4$$

**Der:**
- $\\varepsilon$ = emissivitet (emisjonsevne)
- $\\varepsilon = 1$ for perfekt sort legeme
- $0 < \\varepsilon < 1$ for virkelige objekter

**Emissivitet for noen materialer:**

| Materiale | $\\varepsilon$ |
|-----------|----------------|
| Perfekt sort legeme | 1,00 |
| Sort maling | 0,95 - 0,98 |
| Hudoverflate | 0,98 |
| Bakstein (rød) | 0,93 |
| Tre | 0,90 |
| Vann | 0,95 |
| Aluminium (polert) | 0,05 |
| Kobber (polert) | 0,04 |
| Sølv (polert) | 0,02 |

**Merk:**
- Mørke, matte overflater har høy emissivitet
- Blanke, metalliske overflater har lav emissivitet

## Nettostråling

Hvis et legeme både sender ut og mottar stråling, er nettostrålingen:

$$P_{\\text{netto}} = \\varepsilon \\sigma A (T^4 - T_{\\text{omgivelser}}^4)$$

**Der:**
- $T$ = objektets temperatur (K)
- $T_{\\text{omgivelser}}$ = omgivelsenes temperatur (K)

**Betydning:**
- Hvis $T > T_{\\text{omgivelser}}$: Objektet stråler mer ut enn inn, avkjøles
- Hvis $T < T_{\\text{omgivelser}}$: Objektet mottar mer enn det stråler ut, varmes opp
- Hvis $T = T_{\\text{omgivelser}}$: Ingen netto varmeoverføring (termisk likevekt)`,
    },
    {
      id: 'fys1-5-3-ex-stefan-boltzmann',
      type: 'example',
      title: 'Eksempel: Solens utstrålingseffekt',
      problem: 'Beregn den totale effekten som solen stråler ut. Anta at solen er et perfekt sort legeme.\n\n**Data:**\n- Solens overflatetemperatur: $T = 5778 \\text{ K}$\n- Solens radius: $r = 6{,}96 \\times 10^8 \\text{ m}$\n- Stefan-Boltzmanns konstant: $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$',
      solution: `**Gitt:**
- $T = 5778 \\text{ K}$
- $r = 6{,}96 \\times 10^8 \\text{ m}$
- $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$

**Steg 1: Finn overflatearealet**

Solen er en kule, så:

$$A = 4\\pi r^2$$

$$A = 4 \\times 3{,}14159 \\times (6{,}96 \\times 10^8)^2$$

$$A = 4 \\times 3{,}14159 \\times 4{,}844 \\times 10^{17}$$

$$A \\approx 6{,}09 \\times 10^{18} \\text{ m}^2$$

**Steg 2: Bruk Stefan-Boltzmanns lov**

$$P = \\sigma A T^4$$

$$P = 5{,}67 \\times 10^{-8} \\times 6{,}09 \\times 10^{18} \\times (5778)^4$$

$$P = 5{,}67 \\times 10^{-8} \\times 6{,}09 \\times 10^{18} \\times 1{,}115 \\times 10^{15}$$

$$P \\approx 3{,}85 \\times 10^{26} \\text{ W}$$

**Svar:** Solen stråler ut omtrent $3{,}85 \\times 10^{26} \\text{ W}$.

**Tolkning:** Dette er en enorm effekt! For sammenligning: Dette tilsvarer omtrent 385 milliarder milliarder megawatt.`,
    },
    {
      id: 'fys1-5-3-wiens-lov',
      type: 'text',
      content: `# Wiens forskyvningslov

**Wiens forskyvningslov** beskriver bølgelengden der et sort legeme har maksimal intensitet.

## Formelen

$$\\lambda_{\\text{max}} = \\frac{b}{T}$$

**Der:**
- $\\lambda_{\\text{max}}$ = bølgelengde ved maksimal intensitet (m)
- $b$ = Wiens forskyvningskonstant = $2{,}898 \\times 10^{-3} \\text{ m·K}$
- $T$ = absolutt temperatur (K)

**Betydning:**
- Jo høyere temperatur, desto kortere bølgelengde ved maksimal intensitet
- Varme objekter stråler hovedsakelig infrarødt
- Meget varme objekter stråler synlig lys (rødglødende → hvitglødende)

## Temperatur og farge

**Temperatur → Farge:**

| Temperatur (K) | $\\lambda_{\\text{max}}$ | Farge |
|---------------|-------------------------|-------|
| 3000 | 966 nm | Rødglødende |
| 4000 | 725 nm | Oransje-rød |
| 5000 | 580 nm | Gul |
| 6000 | 483 nm | Hvit (gul-blå) |
| 7000 | 414 nm | Blå-hvit |
| 10000 | 290 nm | Blå (UV) |

**Eksempler:**

**Menneskekroppen:**
- $T \\approx 310 \\text{ K}$ (37°C)
- $\\lambda_{\\text{max}} = \\frac{2{,}898 \\times 10^{-3}}{310} \\approx 9{,}3 \\times 10^{-6} \\text{ m} = 9300 \\text{ nm}$
- Infrarød (usynlig)

**Glødepære (glødende wolfram):**
- $T \\approx 2800 \\text{ K}$
- $\\lambda_{\\text{max}} = \\frac{2{,}898 \\times 10^{-3}}{2800} \\approx 1035 \\text{ nm}$
- Infrarød (men også synlig rød-gul)

**Solen:**
- $T \\approx 5778 \\text{ K}$
- $\\lambda_{\\text{max}} = \\frac{2{,}898 \\times 10^{-3}}{5778} \\approx 502 \\text{ nm}$
- Grønn-gul (midt i synlig spektrum)

**Blå stjerne:**
- $T \\approx 30\\,000 \\text{ K}$
- $\\lambda_{\\text{max}} = \\frac{2{,}898 \\times 10^{-3}}{30\\,000} \\approx 97 \\text{ nm}$
- Ultrafiolett (men også synlig blå)`,
    },
    {
      id: 'fys1-5-3-ex-wiens-lov',
      type: 'example',
      title: 'Eksempel: Menneskekroppens stråling',
      problem: 'En person har hudtemperatur 33°C. Ved hvilken bølgelengde stråler personen maksimalt?\n\nWiens forskyvningskonstant: $b = 2{,}898 \\times 10^{-3} \\text{ m·K}$',
      solution: `**Gitt:**
- $T = 33 \\text{°C} = 33 + 273 = 306 \\text{ K}$
- $b = 2{,}898 \\times 10^{-3} \\text{ m·K}$

**Bruk Wiens lov:**

$$\\lambda_{\\text{max}} = \\frac{b}{T}$$

$$\\lambda_{\\text{max}} = \\frac{2{,}898 \\times 10^{-3}}{306}$$

$$\\lambda_{\\text{max}} \\approx 9{,}47 \\times 10^{-6} \\text{ m} = 9{,}47 \\text{ μm} = 9470 \\text{ nm}$$

**Svar:** Personen stråler maksimalt ved bølgelengde 9,47 μm.

**Tolkning:** Dette er infrarød stråling (usynlig). Derfor kan termiske kameraer "se" mennesker i mørket ved å detektere denne infrarøde strålingen.`,
    },
    {
      id: 'fys1-5-3-emisjon-absorpsjon',
      type: 'text',
      content: `# Emisjon og absorpsjon

Alle objekter både **sender ut** (emitterer) og **tar opp** (absorberer) stråling.

## Emisjon

**Emisjon** er utsendelse av elektromagnetisk stråling fra et legeme.

**Faktorer som påvirker emisjon:**

1. **Temperatur:** Høyere temperatur → mer emisjon ($P \\propto T^4$)
2. **Overflateareal:** Større areal → mer emisjon ($P \\propto A$)
3. **Emissivitet:** Høyere $\\varepsilon$ → mer emisjon

**Emissivitet** ($\\varepsilon$) er et mål på hvor god emitter et materiale er sammenlignet med et perfekt sort legeme.

- $\\varepsilon = 1$: Perfekt emitter (sort legeme)
- $\\varepsilon = 0$: Ingen emisjon (perfekt reflektor)

## Absorpsjon

**Absorpsjon** er opptak av elektromagnetisk stråling.

**Faktorer som påvirker absorpsjon:**

1. **Absorptivitet** ($\\alpha$): Andel stråling som absorberes
2. **Overflate:** Mørke overflater absorberer mer enn lyse
3. **Bølgelengde:** Noen materialer absorberer noen bølgelengder bedre enn andre

**Absorptivitet** ($\\alpha$):

- $\\alpha = 1$: All stråling absorberes (sort legeme)
- $\\alpha = 0$: Ingen absorpsjon (perfekt reflektor)

## Kirchhoffs lov for stråling

> For et legeme i termisk likevekt med omgivelsene er emisjonsevnen lik absorptiviteten: $\\varepsilon = \\alpha$

**Betydning:**

**Gode absorbenter = Gode emittere:**
- Sort overflate: Absorberer mye ($\\alpha$ høy) → sender ut mye ($\\varepsilon$ høy)
- Blank overflate: Reflekterer mye ($\\alpha$ lav) → sender ut lite ($\\varepsilon$ lav)

**Eksempler:**

| Overflate | Absorptivitet ($\\alpha$) | Emissivitet ($\\varepsilon$) |
|-----------|--------------------------|------------------------------|
| Sort maling | 0,97 | 0,97 |
| Hvit maling | 0,12 | 0,90 |
| Polert aluminium | 0,09 | 0,05 |
| Hudoverflate | 0,98 | 0,98 |

**Merk:** Hvit maling har lav absorptivitet for **synlig lys**, men høy emissivitet for **infrarødt**. Derfor reflekterer hvite hus sollys (holder seg kjølige), men stråler godt i infrarødt.

## Termisk likevekt

Et legeme i termisk likevekt med omgivelsene:
- Mottar like mye stråling som det sender ut
- $P_{\\text{inn}} = P_{\\text{ut}}$
- Temperaturen forblir konstant

Hvis $P_{\\text{ut}} > P_{\\text{inn}}$: Legemet avkjøles

Hvis $P_{\\text{inn}} > P_{\\text{ut}}$: Legemet varmes opp`,
    },
    {
      id: 'fys1-5-3-ex-emisjon-absorpsjon',
      type: 'example',
      title: 'Eksempel: Varme- og kaldekledning',
      problem: 'Forklar hvorfor det er lurt å bruke mørke klær om vinteren og lyse klær om sommeren.',
      solution: `**Vinter (mørke klær):**

**1. Absorpsjon av sollys:**
- Mørke klær har høy absorptivitet ($\\alpha \\approx 0{,}9$)
- Absorberer mye av solens stråling
- Konverterer stråling til varme
- Holder deg varmere

**2. Emisjon av infrarødt:**
- Mørke klær har også høy emissivitet ($\\varepsilon \\approx 0{,}9$)
- Men: Klærne er kaldere enn kroppen
- Kroppens varme holdes inne (isolasjon viktigere enn emisjon)

**Nettoresultat:** Mer varme fra solen, holder deg varmere.

---

**Sommer (lyse klær):**

**1. Refleksjon av sollys:**
- Lyse klær har lav absorptivitet ($\\alpha \\approx 0{,}2$)
- Reflekterer det meste av solens stråling
- Mindre oppvarming fra solen
- Holder deg kjøligere

**2. Emisjon av infrarødt:**
- Lyse klær har fortsatt relativt høy emissivitet for infrarødt ($\\varepsilon \\approx 0{,}8-0{,}9$)
- Kroppens varme kan stråles ut
- Kjøler deg ned

**Nettoresultat:** Mindre varme fra solen, bedre kjøling, holder deg kjøligere.

---

**Oppsummering:**

| Årstid | Klærfarge | Absorpsjon | Effekt |
|--------|-----------|------------|--------|
| Vinter | Mørk | Høy | Absorberer sollys, varmer |
| Sommer | Lys | Lav | Reflekterer sollys, kjøler |

**Kulturelle forskjeller:**
I varme ørkenklima (Midtøsten, Nord-Afrika) brukes ofte **hvite klær** for å reflektere solens intense stråling. I kjølige klimaer brukes ofte **mørke klær** for å absorbere sollys.`,
    },
    {
      id: 'fys1-5-3-ex-kosmisk-bakgrunnsstråling',
      type: 'example',
      title: 'Eksempel: Universets temperatur',
      problem: 'Den kosmiske bakgrunnsstrålingen fra Big Bang har maksimal intensitet ved bølgelengde $\\lambda_{\\text{max}} = 1{,}9 \\text{ mm}$. Hva er universets temperatur?\n\nWiens forskyvningskonstant: $b = 2{,}898 \\times 10^{-3} \\text{ m·K}$',
      solution: `**Gitt:**
- $\\lambda_{\\text{max}} = 1{,}9 \\text{ mm} = 0{,}0019 \\text{ m}$
- $b = 2{,}898 \\times 10^{-3} \\text{ m·K}$

**Bruk Wiens lov:**

$$\\lambda_{\\text{max}} = \\frac{b}{T}$$

Løs for $T$:

$$T = \\frac{b}{\\lambda_{\\text{max}}}$$

$$T = \\frac{2{,}898 \\times 10^{-3}}{0{,}0019}$$

$$T \\approx 1{,}53 \\text{ K}$$

**Svar:** Universets temperatur er omtrent 1,5 K.

**Faktisk verdi:** Nøyaktige målinger gir $T = 2{,}725 \\text{ K}$.

**Tolkning:** Dette er resten av strålingen fra Big Bang, som har kjølt seg ned fra milliarder av grader til nesten absolutt nullpunkt over 13,8 milliarder år.`,
    },
  ],
  exercises: [
    {
      id: 'fys1-5-3-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er et sort legeme?',
      solution: `**Sort legeme (black body):**

**Definisjon:**
Et sort legeme er et idealisert objekt som:

1. **Absorberer all innkommende stråling**
   - Ingen refleksjon
   - Absorptivitet $\\alpha = 1$

2. **Sender ut maksimal stråling ved en gitt temperatur**
   - Emissivitet $\\varepsilon = 1$
   - Strålingen avhenger kun av temperaturen

**Viktig:**
- "Sort" betyr ikke nødvendigvis visuelt sort
- Det betyr at legemet absorberer all elektromagnetisk stråling (alle bølgelengder)

**Egenskaper:**
- Perfekt absorbent: $\\alpha = 1$
- Perfekt emitter: $\\varepsilon = 1$
- Strålingen avhenger kun av $T$ (ikke materialtype)
- Følger Stefan-Boltzmanns lov: $P = \\sigma A T^4$

**Eksempler (tilnærminger):**
- Solen
- Stjerner
- Glødende metaller ved høy temperatur
- Et lite hull inn i en hul kasse

**Virkelige objekter:**
- Ingen perfekte sortlegemer eksisterer
- Mange objekter er gode tilnærminger
- Bruker $P = \\varepsilon \\sigma A T^4$ med $0 < \\varepsilon < 1$`,
      hints: ['Hva absorberer det?', 'Hva sender det ut?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er Stefan-Boltzmanns lov, og hva forteller den oss?',
      solution: `**Stefan-Boltzmanns lov:**

**Formel:**

$$P = \\sigma A T^4$$

**Der:**
- $P$ = total utstrålingseffekt (W)
- $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$ = Stefan-Boltzmanns konstant
- $A$ = overflatearealet (m²)
- $T$ = absolutt temperatur (K)

**Hva forteller den oss:**

**1. Effekten er proporsjonal med $T^4$:**
- Dobling av temperatur → $2^4 = 16$ ganger mer stråling
- Temperaturen har enorm innvirkning på strålingen

**2. Høyere temperatur → mye mer stråling:**
- Varme objekter stråler mye mer enn kalde objekter
- Eksempel: Solen (5778 K) stråler enormt mer per m² enn jorden (288 K)

**3. Større areal → mer stråling:**
- Større objekter stråler mer totalt

**4. Gjelder for sortlegemer:**
- For virkelige objekter: $P = \\varepsilon \\sigma A T^4$ (med emissivitet $\\varepsilon$)

**Eksempel:**
Hvis temperaturen øker fra 300 K til 600 K:

$$\\frac{P_{600}}{P_{300}} = \\left(\\frac{600}{300}\\right)^4 = 2^4 = 16$$

Strålingen øker med en faktor 16!`,
      hints: ['Hva er formelen?', 'Hvordan avhenger effekten av temperatur?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En person har overflate-areal 1,8 m² og hudtemperatur 33°C. Hvor stor effekt stråler personen ut?\n\nAnta at huden er et perfekt sort legeme.\n\nStefan-Boltzmanns konstant: $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$',
      solution: `**Gitt:**
- $A = 1{,}8 \\text{ m}^2$
- $T = 33 \\text{°C} = 33 + 273 = 306 \\text{ K}$
- $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$

**Bruk Stefan-Boltzmanns lov:**

$$P = \\sigma A T^4$$

$$P = 5{,}67 \\times 10^{-8} \\times 1{,}8 \\times (306)^4$$

$$P = 5{,}67 \\times 10^{-8} \\times 1{,}8 \\times 8{,}77 \\times 10^9$$

$$P \\approx 894 \\text{ W}$$

**Svar:** Personen stråler ut omtrent 894 W.

**Tolkning:** Dette er mye! Men personen mottar også stråling fra omgivelsene. Netto stråling er mindre.`,
      hints: ['Husk å konvertere til kelvin', 'Bruk $P = \\sigma A T^4$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En stjerne har overflatetemperatur 4000 K. Ved hvilken bølgelengde stråler stjernen maksimalt? Hvilken farge har stjernen?\n\nWiens forskyvningskonstant: $b = 2{,}898 \\times 10^{-3} \\text{ m·K}$',
      solution: `**Gitt:**
- $T = 4000 \\text{ K}$
- $b = 2{,}898 \\times 10^{-3} \\text{ m·K}$

**Bruk Wiens lov:**

$$\\lambda_{\\text{max}} = \\frac{b}{T}$$

$$\\lambda_{\\text{max}} = \\frac{2{,}898 \\times 10^{-3}}{4000}$$

$$\\lambda_{\\text{max}} = 7{,}245 \\times 10^{-7} \\text{ m} = 725 \\text{ nm}$$

**Svar:** Stjernen stråler maksimalt ved 725 nm.

**Farge:**
- 725 nm ligger i den røde delen av det synlige spektrum
- Stjernen har en **rødoransje** farge
- Dette er en relativt kjølig stjerne (sammenlignet med solen)

**Referanse:**
- Synlig lys: 380-750 nm
- Rødt: ~620-750 nm
- 725 nm er i den røde enden`,
      hints: ['Bruk Wiens lov', 'Se på bølgelengde vs. farge'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvorfor er Kirchhoffs lov ($\\varepsilon = \\alpha$) viktig? Gi et praktisk eksempel.',
      solution: `**Kirchhoffs lov:**

> For et legeme i termisk likevekt er emisjonsevnen lik absorptiviteten: $\\varepsilon = \\alpha$

**Betydning:**

**Gode absorbenter = Gode emittere:**
- Objekter som absorberer mye stråling, sender også ut mye stråling
- Objekter som reflekterer mye stråling, sender ut lite stråling

**Hvorfor er dette viktig?**

**1. Termisk likevekt:**
- For at et objekt skal være i termisk likevekt med omgivelsene, må det absorbere like mye som det sender ut
- Hvis $\\varepsilon \\neq \\alpha$, ville objektet ikke kunne oppnå likevekt

**2. Design av varme-/kjølesystemer:**
- Kjølere: Bruk høy $\\varepsilon$ for god varmeavgivelse
- Termosflasker: Bruk lav $\\varepsilon$ for å minimere varmetap

---

**Praktisk eksempel: Termosflaske**

**Problem:** Holde kaffe varm lenge

**Løsning:**
- Doble vegger med vakuum mellom
- Indre overflate er **speilblankt** (polert metall)
- Lav emissivitet: $\\varepsilon \\approx 0{,}05$
- Ifølge Kirchhoff: Lav absorptivitet: $\\alpha \\approx 0{,}05$

**Resultat:**
- Liten emisjon: Kaffen mister lite varme via stråling
- Liten absorpsjon: Kaffen tar opp lite stråling fra omgivelsene (ikke viktig ved varmt innhold)
- Kaffen holder seg varm lenge!

**Motsatt eksempel: Kjøleribber**

**Problem:** Kjøle ned datamaskinprosessor

**Løsning:**
- Overflate er ofte **sort** eller mørk
- Høy emissivitet: $\\varepsilon \\approx 0{,}9$
- Ifølge Kirchhoff: Høy absorptivitet: $\\alpha \\approx 0{,}9$

**Resultat:**
- Høy emisjon: Kjøleribber stråler ut mye varme
- Høy absorpsjon: Tar opp varme fra prosessoren (via ledning)
- Effektiv kjøling!

---

**Oppsummering:**

| Anvendelse | Overflate | $\\varepsilon$ | $\\alpha$ | Effekt |
|------------|-----------|----------------|-----------|--------|
| Termosflaske | Blank | Lav | Lav | Holder varme |
| Kjøleribber | Mørk | Høy | Høy | Avgir varme |`,
      hints: ['Hva betyr $\\varepsilon = \\alpha$?', 'Tenk på termosflaske eller kjøleribber'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En plate med areal 2,0 m² og temperatur 400 K befinner seg i et rom med temperatur 300 K. Platen har emissivitet 0,85. Hva er netto effekttap fra platen?\n\nStefan-Boltzmanns konstant: $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$',
      solution: `**Gitt:**
- $A = 2{,}0 \\text{ m}^2$
- $T_{\\text{plate}} = 400 \\text{ K}$
- $T_{\\text{rom}} = 300 \\text{ K}$
- $\\varepsilon = 0{,}85$
- $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$

**Bruk nettostråling:**

$$P_{\\text{netto}} = \\varepsilon \\sigma A (T_{\\text{plate}}^4 - T_{\\text{rom}}^4)$$

**Beregn temperatur-ledd:**

$$T_{\\text{plate}}^4 = (400)^4 = 2{,}56 \\times 10^{10} \\text{ K}^4$$

$$T_{\\text{rom}}^4 = (300)^4 = 8{,}1 \\times 10^9 \\text{ K}^4$$

$$T_{\\text{plate}}^4 - T_{\\text{rom}}^4 = 2{,}56 \\times 10^{10} - 8{,}1 \\times 10^9 = 1{,}75 \\times 10^{10} \\text{ K}^4$$

**Beregn effekt:**

$$P_{\\text{netto}} = 0{,}85 \\times 5{,}67 \\times 10^{-8} \\times 2{,}0 \\times 1{,}75 \\times 10^{10}$$

$$P_{\\text{netto}} = 0{,}85 \\times 5{,}67 \\times 2{,}0 \\times 1{,}75 \\times 10^2$$

$$P_{\\text{netto}} \\approx 1686 \\text{ W} \\approx 1{,}7 \\text{ kW}$$

**Svar:** Netto effekttap er omtrent 1,7 kW.

**Tolkning:** Platen stråler mer ut enn den mottar fra omgivelsene, så den vil avkjøles med mindre den tilføres energi.`,
      hints: ['Bruk $P_{\\text{netto}} = \\varepsilon \\sigma A (T^4 - T_{\\text{omg}}^4)$', 'Beregn $T^4$ for begge temperaturer'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'En glødepære (gammel type) har en glødtråd av wolfram med overflate-areal 5,0 mm² og temperatur 2800 K. Hvor stor effekt stråler glødtråden ut?\n\nAnta emissivitet $\\varepsilon = 0{,}35$ for wolfram.\n\nStefan-Boltzmanns konstant: $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$',
      solution: `**Gitt:**
- $A = 5{,}0 \\text{ mm}^2 = 5{,}0 \\times 10^{-6} \\text{ m}^2$
- $T = 2800 \\text{ K}$
- $\\varepsilon = 0{,}35$
- $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$

**Bruk Stefan-Boltzmanns lov:**

$$P = \\varepsilon \\sigma A T^4$$

$$P = 0{,}35 \\times 5{,}67 \\times 10^{-8} \\times 5{,}0 \\times 10^{-6} \\times (2800)^4$$

$$P = 0{,}35 \\times 5{,}67 \\times 10^{-8} \\times 5{,}0 \\times 10^{-6} \\times 6{,}14 \\times 10^{13}$$

$$P \\approx 61 \\text{ W}$$

**Svar:** Glødtråden stråler ut omtrent 61 W.

**Tolkning:** En 60 W glødepære bruker altså omtrent 60 W til å varme opp glødtråden, som så stråler ut 60 W. Kun ~5% er synlig lys, resten er infrarød varme. Derfor er glødepærer ineffektive!`,
      hints: ['Husk å konvertere mm² til m²', 'Bruk $P = \\varepsilon \\sigma A T^4$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign to stjerner:\n- Stjerne A: Radius $r_A = r$, Temperatur $T_A = T$\n- Stjerne B: Radius $r_B = 2r$, Temperatur $T_B = \\frac{T}{2}$\n\nHvor mange ganger mer/mindre stråler stjerne B ut sammenlignet med stjerne A?',
      solution: `**Gitt:**
- Stjerne A: $r_A = r$, $T_A = T$
- Stjerne B: $r_B = 2r$, $T_B = \\frac{T}{2}$

**Stefan-Boltzmanns lov:**

$$P = \\sigma A T^4$$

For en kule: $A = 4\\pi r^2$

**Stjerne A:**

$$P_A = \\sigma \\times 4\\pi r^2 \\times T^4 = 4\\pi\\sigma r^2 T^4$$

**Stjerne B:**

$$P_B = \\sigma \\times 4\\pi (2r)^2 \\times \\left(\\frac{T}{2}\\right)^4$$

$$P_B = \\sigma \\times 4\\pi \\times 4r^2 \\times \\frac{T^4}{16}$$

$$P_B = \\sigma \\times 4\\pi \\times r^2 \\times \\frac{T^4}{4}$$

$$P_B = \\pi\\sigma r^2 T^4$$

**Forhold:**

$$\\frac{P_B}{P_A} = \\frac{\\pi\\sigma r^2 T^4}{4\\pi\\sigma r^2 T^4} = \\frac{1}{4}$$

**Svar:** Stjerne B stråler ut **4 ganger mindre** enn stjerne A.

**Forklaring:**
- Stjerne B har 4 ganger større areal ($r_B = 2r \\Rightarrow A_B = 4A_A$)
- Men stjerne B har 16 ganger lavere stråling per areal ($T_B = \\frac{T}{2} \\Rightarrow T_B^4 = \\frac{T^4}{16}$)
- Netto: $4 \\times \\frac{1}{16} = \\frac{1}{4}$

**Tolkning:** Temperaturen har mye større innvirkning ($T^4$) enn arealet ($A \\propto r^2$). En dobling av radius øker effekten 4 ganger, men en halvering av temperatur reduserer effekten 16 ganger.`,
      hints: ['Bruk $P = \\sigma A T^4$', 'Areal for kule: $A = 4\\pi r^2$', 'Beregn forhold $\\frac{P_B}{P_A}$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Solen har overflatetemperatur 5778 K og radius 6,96 × 10⁸ m. Jorden befinner seg 1,50 × 10¹¹ m fra solen og har radius 6,37 × 10⁶ m.\n\na) Hvor stor effekt stråler solen ut totalt?\n\nb) Hvor stor effekt per m² treffer jorden? (Dette kalles solkonstanten)\n\nStefan-Boltzmanns konstant: $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$',
      solution: `**Gitt:**
- Solen: $T_s = 5778 \\text{ K}$, $r_s = 6{,}96 \\times 10^8 \\text{ m}$
- Avstand sol-jord: $d = 1{,}50 \\times 10^{11} \\text{ m}$
- Jorden: $r_j = 6{,}37 \\times 10^6 \\text{ m}$
- $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$

**a) Solens totale utstrålingseffekt:**

**Overflate-areal av solen:**

$$A_s = 4\\pi r_s^2 = 4 \\times 3{,}14159 \\times (6{,}96 \\times 10^8)^2$$

$$A_s \\approx 6{,}09 \\times 10^{18} \\text{ m}^2$$

**Stefan-Boltzmanns lov:**

$$P_s = \\sigma A_s T_s^4$$

$$P_s = 5{,}67 \\times 10^{-8} \\times 6{,}09 \\times 10^{18} \\times (5778)^4$$

$$P_s = 5{,}67 \\times 10^{-8} \\times 6{,}09 \\times 10^{18} \\times 1{,}115 \\times 10^{15}$$

$$P_s \\approx 3{,}85 \\times 10^{26} \\text{ W}$$

**Svar a:** Solen stråler ut $3{,}85 \\times 10^{26} \\text{ W}$.

---

**b) Effekt per m² ved jorden (solkonstanten):**

Solens stråling sprer seg jevnt over en kuleflate med radius $d$ (avstand sol-jord).

**Areal av kuleflate ved jordens bane:**

$$A_{\\text{kule}} = 4\\pi d^2 = 4 \\times 3{,}14159 \\times (1{,}50 \\times 10^{11})^2$$

$$A_{\\text{kule}} \\approx 2{,}83 \\times 10^{23} \\text{ m}^2$$

**Effekt per m² (intensitet):**

$$I = \\frac{P_s}{A_{\\text{kule}}} = \\frac{3{,}85 \\times 10^{26}}{2{,}83 \\times 10^{23}}$$

$$I \\approx 1361 \\text{ W/m}^2$$

**Svar b:** Effekten per m² ved jorden er omtrent 1361 W/m² (solkonstanten).

**Faktisk verdi:** Nøyaktige målinger gir solkonstanten = 1361 W/m² (meget god overensstemmelse!).

**Tolkning:** Denne strålingen er grunnlaget for alt liv på jorden og driver klimasystemet.`,
      hints: ['Del a: Finn solens overflate-areal, bruk Stefan-Boltzmann', 'Del b: Strålingen sprer seg over kuleflate med radius = avstand'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En stjerne har samme radius som solen ($r = 6{,}96 \\times 10^8 \\text{ m}$), men stråler ut 81 ganger mer effekt. Hva er stjernens overflatetemperatur?\n\nSolens overflatetemperatur: $T_s = 5778 \\text{ K}$',
      solution: `**Gitt:**
- Stjerne: $r = r_s$ (samme radius som solen)
- Stjerne: $P = 81 P_s$ (81 ganger mer effekt)
- Solen: $T_s = 5778 \\text{ K}$

**Stefan-Boltzmanns lov:**

$$P = \\sigma A T^4$$

**For solen:**

$$P_s = \\sigma A_s T_s^4$$

**For stjernen:**

$$P = \\sigma A T^4$$

Siden $A = A_s$ (samme radius):

$$P = \\sigma A_s T^4$$

**Forhold:**

$$\\frac{P}{P_s} = \\frac{\\sigma A_s T^4}{\\sigma A_s T_s^4} = \\frac{T^4}{T_s^4}$$

Sett inn $P = 81 P_s$:

$$\\frac{81 P_s}{P_s} = \\frac{T^4}{T_s^4}$$

$$81 = \\frac{T^4}{T_s^4}$$

$$T^4 = 81 \\times T_s^4$$

$$T = \\sqrt[4]{81} \\times T_s$$

$$T = 3 \\times T_s$$

$$T = 3 \\times 5778 = 17\\,334 \\text{ K}$$

**Svar:** Stjernens overflatetemperatur er omtrent 17 300 K.

**Tolkning:** Dette er en meget varm stjerne (blå stjerne). Den er 3 ganger varmere enn solen og stråler 81 ganger mer.

**Generelt:** Hvis $P$ øker med faktor $k$, øker $T$ med faktor $\\sqrt[4]{k}$. Her: $\\sqrt[4]{81} = 3$.`,
      hints: ['Bruk Stefan-Boltzmann for begge', 'Ta forhold $\\frac{P}{P_s}$', 'Arealene er like'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hvorfor ser vi ikke solen som grønn, selv om den stråler maksimalt ved grønn-gul bølgelengde (~500 nm)?',
      solution: `**Wiens lov for solen:**

$$\\lambda_{\\text{max}} = \\frac{b}{T} = \\frac{2{,}898 \\times 10^{-3}}{5778} \\approx 502 \\text{ nm}$$

Dette er grønn-gul (midt i synlig spektrum).

**Hvorfor ser vi solen hvit (eller gulhvit)?**

**1. Solen sender ut et bredt spektrum:**
- Selv om maksimum er ved ~500 nm, sender solen ut stråling ved **alle** synlige bølgelengder
- Rød, oransje, gul, grønn, blå, fiolett - alle er tilstede
- Sortlegemestråling er et **kontinuerlig spektrum**

**2. Våre øyne blander fargene:**
- Øyet har tre typer farveceller (kjegler): Rød, grønn, blå
- Alle tre typer stimuleres av solens brede spektrum
- Hjernen tolker dette som **hvit**
- Hvit = balansert blanding av alle synlige farger

**3. Atmosfærisk spredning:**
- Atmosfæren sprer blått lys mer enn rødt (Rayleigh-spredning)
- Dette fjerner noe blått fra direkte sollys
- Solen ser derfor litt **gulere** ut enn den ville i verdensrommet
- Fra verdensrommet ser solen mer hvit ut

**4. Sortlegeme vs. enkeltstråling:**
- En **laser** ved 500 nm ser grønn ut (kun én bølgelengde)
- Et **sortlegeme** ved 5778 K ser hvitt ut (alle bølgelengder)

**Sammenligning:**

| Objekt | $\\lambda_{\\text{max}}$ | Spektrum | Farge vi ser |
|--------|-------------------------|----------|--------------|
| Laser (500 nm) | 500 nm | Enkelt | Grønn |
| Solen (5778 K) | 502 nm | Bredt | Hvit/gul-hvit |
| Glødepære (2800 K) | 1035 nm | Bredt | Gul-rød |

**Konklusjon:**
Vi ser ikke solen som grønn fordi den sender ut et **bredt spektrum** av alle synlige farger, som våre øyne tolker som hvit. Kun objekter med **smal** spektral fordeling (som lasere) ser ut til å ha en enkelt farge.`,
      hints: ['Hva er forskjellen på maksimum og totalt spektrum?', 'Hvordan tolker øyet farger?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-3-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor astronomer kan bestemme temperaturen til stjerner ved å analysere deres farge og lysstyrke.',
      solution: `**Metoder for å bestemme stjernetemperatur:**

**1. Farge (Wiens lov):**

**Prinsipp:**
- Wiens lov: $\\lambda_{\\text{max}} = \\frac{b}{T}$
- Fargen til en stjerne avhenger av dens temperatur
- Kaldere stjerner er rødere, varmere stjerner er blåere

**Prosess:**
1. Mål intensiteten ved forskjellige bølgelengder
2. Finn bølgelengden med maksimal intensitet ($\\lambda_{\\text{max}}$)
3. Bruk Wiens lov til å beregne $T$:
   $$T = \\frac{b}{\\lambda_{\\text{max}}}$$

**Farge-temperatur-tabell:**

| Farge | $T$ (K) | Eksempel |
|-------|---------|----------|
| Rød | 3000 | Betelgeuse |
| Oransje | 4000 | Aldebaran |
| Gul | 6000 | Solen |
| Hvit | 10000 | Sirius A |
| Blå | 30000 | Rigel |

---

**2. Lysstyrke (Stefan-Boltzmanns lov):**

**Prinsipp:**
- Stefan-Boltzmanns lov: $P = \\sigma A T^4$
- Hvis vi kjenner lysstyrken ($P$) og størrelsen ($A$), kan vi finne $T$

**Prosess:**
1. Mål tilsynelatende lysstyrke (hvor lys stjernen ser ut)
2. Beregn avstand til stjernen (f.eks. parallakse)
3. Beregn absolutt lysstyrke (total effekt $P$)
4. Estimer stjernens størrelse (radius $r$) fra andre metoder
5. Beregn overflate-areal: $A = 4\\pi r^2$
6. Bruk Stefan-Boltzmann til å finne $T$:
   $$T = \\left(\\frac{P}{\\sigma A}\\right)^{1/4}$$

**Utfordring:** Vanskelig å finne nøyaktig radius

---

**3. Spektrallinje-analyse:**

**Prinsipp:**
- Stjernens spektrum viser absorpsjonslinjer fra grunnstoffer
- Hvilke linjer som er synlige avhenger av temperatur
- Forskjellige grunnstoffer ioniseres ved forskjellige temperaturer

**Prosess:**
1. Ta spektrum av stjernen
2. Identifiser hvilke absorpsjonslinjer som er tilstede
3. Sammenlign med kjente temperaturavhengige mønstre
4. Bestem temperaturen

**Eksempel:**
- Kalde stjerner (3000 K): Molekyllinjer (TiO)
- Medium stjerner (6000 K): Nøytrale metalllinjer (Ca, Fe)
- Varme stjerner (10000 K): Hydrogenlinjer (Balmer-serien)
- Meget varme stjerner (30000 K): Ioniserte heliumlinjer

---

**Kombinert metode:**

Astronomer bruker **alle tre metoder** sammen for nøyaktig temperaturbestemmelse:

1. **Farge** gir en rask estimat
2. **Lysstyrke** gir en uavhengig bekreftelse (hvis radius er kjent)
3. **Spektrallinjer** gir den mest nøyaktige temperaturen

**Stjerneklassifisering:**

Astronomer klassifiserer stjerner etter temperatur:

| Klasse | Farge | $T$ (K) | Eksempel |
|--------|-------|---------|----------|
| O | Blå | 30000-50000 | Zeta Puppis |
| B | Blå-hvit | 10000-30000 | Rigel, Spica |
| A | Hvit | 7500-10000 | Sirius, Vega |
| F | Gul-hvit | 6000-7500 | Procyon |
| G | Gul | 5200-6000 | Solen, Alfa Centauri |
| K | Oransje | 3700-5200 | Arcturus, Aldebaran |
| M | Rød | 2400-3700 | Betelgeuse, Antares |

**Huskeregle:** "Oh Be A Fine Girl/Guy, Kiss Me"

---

**Konklusjon:**

Astronomer kan bestemme stjernetemperatur fordi:
1. **Wiens lov** kobler farge til temperatur
2. **Stefan-Boltzmanns lov** kobler lysstyrke til temperatur
3. **Spektrallinjer** endres med temperatur

Disse fysiske lovene gjør det mulig å "måle" temperaturen til objekter millioner lysår unna!`,
      hints: ['Wiens lov', 'Stefan-Boltzmanns lov', 'Spektralanalyse'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
