/**
 * Fysikk 1 - Kapittel 5.4: Jordas strålingsbalanse og klimaendringer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_5_4: TextbookChapter = {
  id: 'fys1-5-4',
  courseId: 'fys1',
  chapterNumber: '5.4',
  title: 'Jordas strålingsbalanse og klimaendringer',
  description: 'Lær om solstråling, albedo, jordas strålingsbalanse, drivhuseffekten og klimaendringer.',
  estimatedMinutes: 65,
  competenceGoals: [
    'forklare jordas strålingsbalanse',
    'beregne jordas likevektstemperatur',
    'forklare drivhuseffekten',
    'beskrive albedo og dens betydning',
    'forklare årsakene til og konsekvensene av klimaendringer',
  ],
  content: [
    {
      id: 'fys1-5-4-intro',
      type: 'text',
      content: `# Jordas strålingsbalanse og klimaendringer

Jordas temperatur bestemmes av balansen mellom innkommende solstråling og utgående varmestråling. Denne balansen er kritisk for jordens klima.

**Viktige punkter:**
- Jorden mottar energi fra solen
- Jorden stråler energi ut i verdensrommet
- Drivhuseffekten holder jorden varm
- Menneskelig aktivitet påvirker strålingsbalansen`,
    },
    {
      id: 'fys1-5-4-solstråling',
      type: 'text',
      content: `# Solstråling og albedo

## Solkonstanten

**Solkonstanten** ($S_0$) er effekten fra solen per kvadratmeter ved jordoverflaten (utenfor atmosfæren).

$$S_0 = 1361 \\text{ W/m}^2$$

**Betydning:**
- Dette er energien som treffer 1 m² vinkelrett på solstrålene
- Faktisk stråling avhenger av solvinkel og atmosfære
- Gjennomsnittlig over hele jorden er mindre

## Innkommende solstråling til jorden

Jorden er en kule med radius $r$. Tverrsnittet som mottar sollys er en sirkel med areal $\\pi r^2$.

**Total innkommende effekt:**

$$P_{\\text{inn}} = S_0 \\times \\pi r^2$$

**Gjennomsnittlig effekt per m²:**

Solstrålingen må fordeles over hele jordoverflaten ($4\\pi r^2$):

$$\\text{Gjennomsnitt} = \\frac{S_0 \\times \\pi r^2}{4\\pi r^2} = \\frac{S_0}{4}$$

$$\\text{Gjennomsnitt} = \\frac{1361}{4} = 340 \\text{ W/m}^2$$

## Albedo

**Albedo** ($\\alpha$) er andelen av innkommende solstråling som reflekteres tilbake til verdensrommet.

$$\\alpha = \\frac{\\text{Reflektert stråling}}{\\text{Innkommende stråling}}$$

**Enhet:** Ingen (eller prosent)

**Jordens gjennomsnittlige albedo:**

$$\\alpha_{\\text{jord}} \\approx 0{,}30 = 30\\%$$

**Betydning:**
- 30% av solstrålingen reflekteres
- 70% absorberes av jorden

**Albedo for forskjellige overflater:**

| Overflate | Albedo ($\\alpha$) |
|-----------|-------------------|
| Nysnø | 0,80 - 0,95 |
| Gammel snø | 0,40 - 0,70 |
| Is (hav) | 0,50 - 0,70 |
| Ørken (sand) | 0,25 - 0,40 |
| Skog | 0,08 - 0,15 |
| Gress/eng | 0,15 - 0,25 |
| Jordbruksland | 0,15 - 0,25 |
| Hav | 0,06 - 0,10 |
| By (asfalt) | 0,05 - 0,20 |
| Skyer | 0,40 - 0,90 |

**Viktig:**
- Høy albedo: Mye refleksjon, lite oppvarming
- Lav albedo: Lite refleksjon, mye oppvarming

## Absorbert solstråling

Den absorberte solstrålingen (gjennomsnitt per m²) er:

$$P_{\\text{abs}} = \\frac{S_0}{4}(1 - \\alpha)$$

For jorden:

$$P_{\\text{abs}} = \\frac{1361}{4}(1 - 0{,}30) = 340 \\times 0{,}70 = 238 \\text{ W/m}^2$$`,
    },
    {
      id: 'fys1-5-4-def-albedo',
      type: 'definition',
      title: 'Albedo',
      content: 'Albedo er andelen av innkommende solstråling som reflekteres tilbake til verdensrommet. Jordens gjennomsnittlige albedo er ~0,30 (30%).',
    },
    {
      id: 'fys1-5-4-strålingsbalanse',
      type: 'text',
      content: `# Jordas strålingsbalanse

For at jordens temperatur skal være stabil, må innkommende og utgående energi være like.

## Utgående stråling

Jorden stråler ut energi som et (nesten) sort legeme med temperatur $T$.

**Stefan-Boltzmanns lov:**

$$P_{\\text{ut}} = \\sigma T^4$$

der $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$

## Strålingsbalanse

Ved termisk likevekt:

$$P_{\\text{inn}} = P_{\\text{ut}}$$

$$\\frac{S_0}{4}(1 - \\alpha) = \\sigma T^4$$

## Jordas likevektstemperatur

Løs for $T$:

$$T = \\left[\\frac{S_0(1-\\alpha)}{4\\sigma}\\right]^{1/4}$$

**For jorden (uten atmosfære):**

$$T = \\left[\\frac{1361 \\times 0{,}70}{4 \\times 5{,}67 \\times 10^{-8}}\\right]^{1/4}$$

$$T = \\left[\\frac{952{,}7}{2{,}27 \\times 10^{-7}}\\right]^{1/4}$$

$$T = [4{,}20 \\times 10^9]^{1/4}$$

$$T \\approx 255 \\text{ K} = -18 \\text{°C}$$

**Men:**
- Faktisk gjennomsnittlig temperatur på jorden: $T \\approx 15 \\text{°C} = 288 \\text{ K}$
- Forskjell: $288 - 255 = 33 \\text{ K}$

**Årsak til forskjellen:** **Drivhuseffekten**`,
    },
    {
      id: 'fys1-5-4-ex-likevektstemperatur',
      type: 'example',
      title: 'Eksempel: Mars sin likevektstemperatur',
      problem: 'Mars befinner seg 2,28 × 10¹¹ m fra solen og har albedo 0,25. Hva er Mars sin teoretiske likevektstemperatur?\n\nSolens totale utstrålingseffekt: $P_s = 3{,}85 \\times 10^{26} \\text{ W}$\n\nStefan-Boltzmanns konstant: $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$',
      solution: `**Gitt:**
- Avstand: $d = 2{,}28 \\times 10^{11} \\text{ m}$
- Albedo: $\\alpha = 0{,}25$
- $P_s = 3{,}85 \\times 10^{26} \\text{ W}$
- $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$

**Steg 1: Finn solkonstanten ved Mars**

Solstrålingen sprer seg over kuleflate med radius $d$:

$$S_{\\text{Mars}} = \\frac{P_s}{4\\pi d^2}$$

$$S_{\\text{Mars}} = \\frac{3{,}85 \\times 10^{26}}{4 \\times 3{,}14159 \\times (2{,}28 \\times 10^{11})^2}$$

$$S_{\\text{Mars}} = \\frac{3{,}85 \\times 10^{26}}{6{,}53 \\times 10^{23}} \\approx 590 \\text{ W/m}^2$$

**Steg 2: Beregn likevektstemperatur**

$$T = \\left[\\frac{S_{\\text{Mars}}(1-\\alpha)}{4\\sigma}\\right]^{1/4}$$

$$T = \\left[\\frac{590 \\times 0{,}75}{4 \\times 5{,}67 \\times 10^{-8}}\\right]^{1/4}$$

$$T = \\left[\\frac{442{,}5}{2{,}27 \\times 10^{-7}}\\right]^{1/4}$$

$$T = [1{,}95 \\times 10^9]^{1/4}$$

$$T \\approx 210 \\text{ K} = -63 \\text{°C}$$

**Svar:** Mars sin teoretiske likevektstemperatur er omtrent -63°C.

**Faktisk temperatur:** Gjennomsnittlig overflatetemperatur på Mars er ca. -60°C, nær den teoretiske verdien. Mars har liten drivhuseffekt pga. tynn atmosfære.`,
    },
    {
      id: 'fys1-5-4-drivhuseffekt',
      type: 'text',
      content: `# Drivhuseffekten

**Drivhuseffekten** er prosessen hvor atmosfæren absorberer og re-sender ut infrarød stråling, og dermed holder jorden varmere enn den ellers ville vært.

## Hvordan fungerer det?

**1. Solstråling inn:**
- Solen sender ut hovedsakelig **synlig lys** og **UV-stråling**
- Atmosfæren er gjennomsiktig for det meste av dette
- Sollys når jordoverflaten

**2. Oppvarming av jorden:**
- Jordoverflaten absorberer sollys
- Overflaten varmes opp

**3. Infrarød stråling ut:**
- Jorden stråler ut energi som et sort legeme ved ~288 K
- Ved denne temperaturen er strålingen hovedsakelig **infrarød** (varmestråling)
- $\\lambda_{\\text{max}} \\approx 10 \\text{ μm}$ (infrarød)

**4. Drivhusgasser absorberer:**
- Drivhusgasser i atmosfæren (CO₂, H₂O, CH₄, N₂O) absorberer **infrarød stråling**
- Gassene er gjennomsiktige for synlig lys, men absorberer infrarødt
- Energien tas opp av gassene

**5. Re-emisjon:**
- Drivhusgassene sender ut stråling i alle retninger
- Omtrent halvparten sendes **tilbake til jorden**
- Halvparten sendes **ut i verdensrommet**

**6. Netto effekt:**
- Mer energi holdes nær jordoverflaten
- Jorden blir varmere

## Drivhusgasser

**Viktigste drivhusgasser:**

| Gass | Formel | Andel av drivhuseffekt | Kilde |
|------|--------|----------------------|-------|
| Vanndamp | H₂O | ~60% | Naturlig (fordamping) |
| Karbondioksid | CO₂ | ~25% | Forbrenning, respirasjon |
| Metan | CH₄ | ~8% | Husdyr, riismarker, fossile brensler |
| Lystgass | N₂O | ~5% | Jordbruk, gjødsel |
| Ozon | O₃ | ~2% | Fotokjemiske reaksjoner |
| Andre | CFC, etc. | <1% | Industri (reduseres) |

**Viktig:**
- **Vanndamp** er viktigst, men reguleres naturlig
- **CO₂** er viktigst av menneskeskapte gasser
- **Metan** er mye kraftigere per molekyl enn CO₂, men mindre konsentrasjon

## Drivhuseffekten er nødvendig!

**Uten drivhuseffekt:**
- Jorden ville hatt temperatur ~-18°C
- For kaldt for flytende vann
- Lite eller intet liv

**Med naturlig drivhuseffekt:**
- Jorden har temperatur ~+15°C
- Flytende vann
- Liv kan eksistere

**Problem: Forsterket drivhuseffekt**
- Menneskeskapte utslipp øker CO₂-konsentrasjonen
- Sterkere drivhuseffekt
- Temperaturen stiger

## Positiv tilbakekoblingsmekanismer

**1. Vanndamp-tilbakekobling:**
- Varmere atmosfære → Mer fordampning
- Mer vanndamp → Sterkere drivhuseffekt
- Enda varmere

**2. Is-albedo-tilbakekobling:**
- Varmere klima → Is smelter
- Mindre is → Lavere albedo (is har høy albedo)
- Mer solstråling absorberes
- Enda varmere → Mer is smelter

**3. Permafrost-tilbakekobling:**
- Varmere klima → Permafrost tiner
- Organisk materiale i permafrosten brytes ned
- Frigjør CO₂ og CH₄
- Sterkere drivhuseffekt
- Enda varmere`,
    },
    {
      id: 'fys1-5-4-def-drivhuseffekt',
      type: 'definition',
      title: 'Drivhuseffekten',
      content: 'Drivhuseffekten er prosessen hvor atmosfæriske gasser absorberer utgående infrarød stråling fra jorden og re-sender deler av den tilbake til overflaten, og dermed holder jorden varmere enn den ellers ville vært.',
    },
    {
      id: 'fys1-5-4-klimaendringer',
      type: 'text',
      content: `# Klimaendringer

## Observerte endringer

**Temperatur:**
- Global gjennomsnittstemperatur har økt med ~1,1°C siden førindividustriell tid (1850-1900)
- De siste 7 årene (2015-2021) var de varmeste noensinne målt
- Oppvarmingen akselererer

**CO₂-konsentrasjon:**
- Førindividustriell (1750): ~280 ppm (parts per million)
- I dag (2023): ~420 ppm
- Økning: 50%
- Høyeste nivå på minst 800 000 år (fra iskjerner)

**Andre tegn:**
- Isbreer smelter globalt
- Havet stiger (~3,3 mm/år)
- Havisen i Arktis reduseres
- Ekstremvær blir hyppigere og mer intense
- Økosystemer endres

## Årsaker til klimaendringer

**Hovedårsak: Menneskeskapte klimagassutslipp**

**1. Forbrenning av fossile brensler:**
- Kull, olje, naturgass
- Frigjør CO₂ som var lagret i millioner av år
- **Største bidragsyter** (~75% av CO₂-utslipp)

**2. Avskoging:**
- Trær tar opp CO₂ (fotosyntese)
- Avskoging reduserer CO₂-opptak
- Brenning av skog frigjør CO₂
- **~10% av utslipp**

**3. Jordbruk:**
- Husdyr produserer metan (CH₄) fra fordøyelsen
- Riismarker produserer metan
- Gjødsel produserer lystgass (N₂O)
- **~15% av utslipp**

**4. Industri:**
- Sementproduksjon frigjør CO₂
- Kjemisk industri produserer diverse klimagasser

**Global CO₂-budsjett:**

| Kilde | Utslipp (GtCO₂/år) |
|-------|-------------------|
| Fossil brensel | ~37 |
| Avskoging | ~4 |
| Opptak (skog, hav) | -22 |
| **Netto økning i atmosfæren** | **~19** |

## Konsekvenser av klimaendringer

**1. Temperaturøkning:**
- Global gjennomsnitt: +1,1°C hittil, +1,5-4°C ved 2100 (avhengig av utslipp)
- Arktis varmes raskere (~2-3 ganger mer)
- Flere hetebølger

**2. Havstigninger:**
- 15-30 cm hittil
- Forventet: 0,3-1,0 m ved 2100 (konservativt)
- Kunne bli flere meter ved fullstendig smelting av Grønland/Antarktis
- Truer kystbyer og øyer

**3. Ekstremvær:**
- Hyppigere og mer intense hetebølger
- Mer intense nedbørsepisoder (flom)
- Tørke i noen regioner
- Sterkere orkaner/sykloner

**4. Økosystemer:**
- Korallrev blekes og dør
- Dyrearter må flytte eller dør ut
- Endring i vekstsesonger
- Smeltende permafrost frigjør CO₂ og CH₄

**5. Mennesker:**
- Matproduksjon påvirkes (tørke, flom)
- Vannmangel i noen regioner
- Helseproblemer (varme, sykdommer)
- Migrasjon (klimaflyktninger)
- Økonomiske kostnader

**6. Is og snø:**
- Isbreer smelter globalt
- Havisen i Arktis reduseres (~13% per tiår)
- Grønlandsisen og Antarktis mister is
- Mindre snødekke

## Klimascenarier

**IPCC (FNs klimapanel) har definert flere scenarier:**

**SSP1-1.9: Meget ambisiøs klimapolitikk**
- Raske utslippskutt
- Netto null utslipp rundt 2050
- Temperaturøkning: +1,4°C ved 2100

**SSP2-4.5: Moderat klimapolitikk**
- Gradvis reduksjon i utslipp
- Temperaturøkning: +2,7°C ved 2100

**SSP5-8.5: Business as usual (høye utslipp)**
- Fortsatt høye utslipp
- Temperaturøkning: +4,4°C ved 2100

**Parisavtalen (2015):**
- Mål: Holde oppvarmingen "godt under 2°C", sikte mot 1,5°C
- Krever raske og omfattende kutt i utslipp

## Løsninger

**1. Redusere utslipp:**
- Fornybar energi (sol, vind, vannkraft)
- Elektriske kjøretøy
- Energieffektivisering
- Redusere kjøttforbruk
- Beskytte skog

**2. Fjerne CO₂ fra atmosfæren:**
- Plante skog
- Karbonfangst og lagring (CCS)
- Direkte luftfangst av CO₂

**3. Tilpasse seg:**
- Bygge flomsikringer
- Utvikle tørkeresistente avlinger
- Flytte infrastruktur fra utsatte områder

**Hva kan du gjøre?**
- Reduser energiforbruk
- Velg fornybar energi
- Sykl, gå eller bruk kollektivtransport
- Spis mindre kjøtt
- Reduser, gjenbruk, resirkuler
- Stemm på partier med ambisiøs klimapolitikk`,
    },
    {
      id: 'fys1-5-4-ex-co2-effekt',
      type: 'example',
      title: 'Eksempel: Hvor mye CO₂ produserer en bil?',
      problem: 'En bensinbil kjører 15 000 km per år med et forbruk på 0,6 liter/mil (6 liter/100 km). Hvor mye CO₂ produserer bilen i løpet av ett år?\n\nForbrenning av 1 liter bensin produserer 2,3 kg CO₂.',
      solution: `**Gitt:**
- Årlig kjørelengde: $15\\,000 \\text{ km} = 1500 \\text{ mil}$
- Forbruk: $0{,}6 \\text{ liter/mil}$
- CO₂ per liter: $2{,}3 \\text{ kg CO₂/liter}$

**Steg 1: Finn totalt bensinforbruk**

$$\\text{Bensinforbruk} = 1500 \\text{ mil} \\times 0{,}6 \\text{ liter/mil} = 900 \\text{ liter}$$

**Steg 2: Finn CO₂-utslipp**

$$\\text{CO₂-utslipp} = 900 \\text{ liter} \\times 2{,}3 \\text{ kg/liter} = 2070 \\text{ kg} = 2{,}1 \\text{ tonn}$$

**Svar:** Bilen produserer 2,1 tonn CO₂ per år.

**Sammenligning:**
- En person i Norge: ~8 tonn CO₂ per år (totalt fotavtrykk)
- En elektrisk bil (Norge): ~0,5 tonn CO₂ per år (inkl. strømproduksjon)
- For å nå 1,5°C-målet: ~2 tonn CO₂ per person per år globalt

**Tolkning:** Transport er en betydelig kilde til personlige CO₂-utslipp. Elektriske biler kan redusere dette kraftig, spesielt i land med ren strøm.`,
    },
  ],
  exercises: [
    {
      id: 'fys1-5-4-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er albedo, og hvordan påvirker det jordas temperatur?',
      solution: `**Albedo:**

**Definisjon:**
Albedo ($\\alpha$) er andelen av innkommende solstråling som reflekteres tilbake til verdensrommet.

$$\\alpha = \\frac{\\text{Reflektert stråling}}{\\text{Innkommende stråling}}$$

**Jordens gjennomsnittlige albedo:** $\\alpha \\approx 0{,}30 = 30\\%$

---

**Påvirkning på temperatur:**

**Høy albedo (lys overflate):**
- Mye stråling reflekteres
- Lite stråling absorberes
- Lav oppvarming
- **Lavere temperatur**

**Lav albedo (mørk overflate):**
- Lite stråling reflekteres
- Mye stråling absorberes
- Høy oppvarming
- **Høyere temperatur**

---

**Eksempler:**

| Overflate | Albedo | Effekt |
|-----------|--------|--------|
| Nysnø | 0,80-0,95 | Reflekterer mye, kjølig |
| Is (hav) | 0,50-0,70 | Reflekterer mye, kjølig |
| Ørken | 0,25-0,40 | Middels refleksjon |
| Skog | 0,08-0,15 | Absorberer mye, varm |
| Hav | 0,06-0,10 | Absorberer mye, varm |

---

**Klimaeffekt:**

**Is-albedo-tilbakekobling:**
1. Klimaet varmes → Is smelter
2. Is erstattes av mørk overflate (vann, jord)
3. Lavere albedo → Mer solstråling absorberes
4. Enda varmere → Mer is smelter
5. Positiv tilbakekoblingsmekanisme (forsterker oppvarmingen)

**Ørkenspredning:**
1. Tørke → Vegetasjon dør
2. Erstattes av lys ørken
3. Høyere albedo → Mindre stråling absorberes
4. Kjøligere → Mindre fordampning
5. Mer tørke (forsterker ørkendannelse)

---

**Konklusjon:**
Albedo er kritisk for jordas temperatur. Endringer i albedo (f.eks. ved smelting av is) kan forsterke klimaendringer.`,
      hints: ['Hva reflekteres?', 'Hva absorberes?', 'Sammenheng med temperatur?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-4-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar hvordan drivhuseffekten fungerer. Hvorfor er den nødvendig for liv på jorden?',
      solution: `**Hvordan drivhuseffekten fungerer:**

**Steg 1: Solstråling inn**
- Solen sender hovedsakelig **synlig lys** og **UV**
- Atmosfæren er gjennomsiktig for dette
- Sollys når jordoverflaten

**Steg 2: Oppvarming av jorden**
- Jordoverflaten absorberer sollys
- Overflaten varmes opp

**Steg 3: Jorden stråler ut infrarødt**
- Jorden stråler ut som et sort legeme ved ~288 K
- Strålingen er hovedsakelig **infrarød** (varmestråling)

**Steg 4: Drivhusgasser absorberer**
- Drivhusgasser (CO₂, H₂O, CH₄, etc.) absorberer infrarød stråling
- Gassene er gjennomsiktige for synlig lys, men absorberer infrarødt

**Steg 5: Re-emisjon**
- Drivhusgassene sender ut stråling i alle retninger
- ~50% sendes tilbake til jorden
- ~50% sendes ut i verdensrommet

**Steg 6: Netto effekt**
- Mer energi holdes nær jordoverflaten
- Jorden blir varmere enn den ellers ville vært

---

**Hvorfor er drivhuseffekten nødvendig?**

**Uten drivhuseffekt:**
- Teoretisk temperatur: ~-18°C
- For kaldt for flytende vann
- Lite eller intet liv som vi kjenner det

**Med naturlig drivhuseffekt:**
- Faktisk temperatur: ~+15°C
- Flytende vann
- Stabilt klima
- Liv kan trives

**Forskjell:** +33°C (drivhuseffekten bidrar med 33°C oppvarming)

---

**Betydning:**
- **Naturlig drivhuseffekt:** Nødvendig for liv
- **Forsterket drivhuseffekt:** Problemet (menneskeskapte utslipp øker konsentrasjonen av drivhusgasser)

---

**Sammenligning med andre planeter:**

| Planet | Atmosfære | Drivhuseffekt | Temperatur |
|--------|-----------|--------------|------------|
| Venus | Tykk, 96% CO₂ | Meget sterk | +465°C |
| Jorden | Medium, 0,04% CO₂ | Moderat | +15°C |
| Mars | Tynn, 95% CO₂ | Svak | -60°C |

**Konklusjon:** Drivhuseffekten er kritisk for jordas temperatur og liv, men balansen er sårbar.`,
      hints: ['Hva skjer med sollys?', 'Hva skjer med infrarød stråling?', 'Sammenlign med/uten drivhuseffekt'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-4-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beregn jordas teoretiske likevektstemperatur uten atmosfære.\n\nData:\n- Solkonstant: $S_0 = 1361 \\text{ W/m}^2$\n- Jordens albedo: $\\alpha = 0{,}30$\n- Stefan-Boltzmanns konstant: $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$',
      solution: `**Gitt:**
- $S_0 = 1361 \\text{ W/m}^2$
- $\\alpha = 0{,}30$
- $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$

**Strålingsbalanse:**

$$\\frac{S_0}{4}(1 - \\alpha) = \\sigma T^4$$

**Løs for T:**

$$T = \\left[\\frac{S_0(1-\\alpha)}{4\\sigma}\\right]^{1/4}$$

$$T = \\left[\\frac{1361 \\times 0{,}70}{4 \\times 5{,}67 \\times 10^{-8}}\\right]^{1/4}$$

$$T = \\left[\\frac{952{,}7}{2{,}27 \\times 10^{-7}}\\right]^{1/4}$$

$$T = [4{,}20 \\times 10^9]^{1/4}$$

$$T \\approx 255 \\text{ K}$$

**Omregning til celsius:**

$$T = 255 - 273 = -18 \\text{°C}$$

**Svar:** Jordas teoretiske likevektstemperatur uten atmosfære er -18°C.

**Sammenligning:**
- Teoretisk temperatur (uten atmosfære): -18°C
- Faktisk gjennomsnittlig temperatur: +15°C
- Forskjell: 33°C

**Konklusjon:** Drivhuseffekten bidrar med 33°C oppvarming.`,
      hints: ['Bruk strålingsbalanse', 'Husk $(1-\\alpha)$ for absorbert stråling'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-4-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvilke er de viktigste drivhusgassene, og hva er deres kilder?',
      solution: `**Viktigste drivhusgasser:**

**1. Vanndamp (H₂O)**

**Bidrag til drivhuseffekt:** ~60%

**Kilder:**
- Fordampning fra hav, innsjøer, elver
- Transpirasjon fra planter
- Naturlig prosess

**Viktig:**
- Reguleres naturlig av temperatur
- Ikke direkte påvirket av menneskelig aktivitet
- Men: Varmere klima → Mer vanndamp → Sterkere drivhuseffekt (positiv tilbakekobling)

---

**2. Karbondioksid (CO₂)**

**Bidrag til drivhuseffekt:** ~25%

**Kilder:**
- **Forbrenning av fossile brensler** (kull, olje, gass): Hovedkilde (~75%)
- **Avskoging:** Brenning og råtning av skog (~10%)
- **Sementproduksjon:** Kjemisk prosess (~5%)
- **Respirasjon:** Dyr og planter (naturlig, balanseres av fotosyntese)

**Konsentrasjon:**
- Førindividustriell: 280 ppm
- I dag (2023): 420 ppm
- Økning: 50%

**Levetid i atmosfæren:** Hundrevis til tusenvis av år

---

**3. Metan (CH₄)**

**Bidrag til drivhuseffekt:** ~8%

**Kilder:**
- **Husdyr:** Fordøyelse hos drøvtyggere (kyr, sauer) (~30%)
- **Riismarker:** Bakterier i vannet (~20%)
- **Fossile brensler:** Lekkasjer fra olje- og gassproduksjon (~25%)
- **Søppelfyllinger:** Nedbrytning av organisk avfall (~15%)
- **Permafrost:** Frigjøring ved tining (~10%)

**Effekt:**
- 28 ganger sterkere enn CO₂ over 100 år (per molekyl)
- Men: Kortere levetid (~12 år)

---

**4. Lystgass (N₂O)**

**Bidrag til drivhuseffekt:** ~5%

**Kilder:**
- **Gjødsel i jordbruk:** Bakterier produserer N₂O (~70%)
- **Industrielle prosesser:** Produksjon av nylon, salpetersyre (~15%)
- **Forbrenning av biomasse:** Skog- og gressbranner (~10%)
- **Naturlig:** Bakterier i jord og hav (~5%)

**Effekt:**
- 265 ganger sterkere enn CO₂ over 100 år
- Levetid: ~120 år

---

**5. Fluorholdige gasser (F-gasser)**

**Bidrag til drivhuseffekt:** ~2%

**Typer:**
- HFC (hydrofluorkarboner)
- PFC (perfluorkarboner)
- SF₆ (svovelheksafluorid)

**Kilder:**
- Kjølemidler (AC, kjøleskap)
- Aerosoldrivmiddel
- Industrielle prosesser

**Effekt:**
- Opp til 23 000 ganger sterkere enn CO₂
- Levetid: Opptil 50 000 år (SF₆)
- Reguleres av Montrealprotokollen og Kyotoprotokollen

---

**Oppsummering:**

| Gass | Bidrag | Hovedkilde | Menneskepåvirket? |
|------|--------|------------|-------------------|
| H₂O | 60% | Fordampning | Nei (indirekte) |
| CO₂ | 25% | Fossile brensler | Ja |
| CH₄ | 8% | Husdyr, fossile brensler | Ja |
| N₂O | 5% | Jordbruk, gjødsel | Ja |
| F-gasser | 2% | Industri, kjøling | Ja |

---

**Konklusjon:**
- Vanndamp er viktigst, men reguleres naturlig
- CO₂ er viktigst av menneskeskapte gasser (kan påvirkes)
- CH₄ og N₂O er kraftigere per molekyl, men lavere konsentrasjon
- F-gasser er ekstremt kraftige, men lav konsentrasjon (og reduseres)`,
      hints: ['Tenk på naturlige og menneskeskapte kilder', 'Hva bidrar mest?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-4-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvis jordas albedo reduseres fra 0,30 til 0,25 (f.eks. ved smelting av is), hvordan påvirker det likevektstemperaturen?\n\nData:\n- Solkonstant: $S_0 = 1361 \\text{ W/m}^2$\n- Stefan-Boltzmanns konstant: $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$',
      solution: `**Gitt:**
- $S_0 = 1361 \\text{ W/m}^2$
- $\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/(m}^2\\text{·K}^4\\text{)}$
- Før: $\\alpha_1 = 0{,}30$
- Etter: $\\alpha_2 = 0{,}25$

**Beregn temperatur før:**

$$T_1 = \\left[\\frac{S_0(1-\\alpha_1)}{4\\sigma}\\right]^{1/4}$$

$$T_1 = \\left[\\frac{1361 \\times 0{,}70}{4 \\times 5{,}67 \\times 10^{-8}}\\right]^{1/4}$$

$$T_1 = [4{,}20 \\times 10^9]^{1/4} \\approx 255 \\text{ K}$$

**Beregn temperatur etter:**

$$T_2 = \\left[\\frac{S_0(1-\\alpha_2)}{4\\sigma}\\right]^{1/4}$$

$$T_2 = \\left[\\frac{1361 \\times 0{,}75}{4 \\times 5{,}67 \\times 10^{-8}}\\right]^{1/4}$$

$$T_2 = \\left[\\frac{1020{,}75}{2{,}27 \\times 10^{-7}}\\right]^{1/4}$$

$$T_2 = [4{,}50 \\times 10^9]^{1/4} \\approx 259 \\text{ K}$$

**Endring:**

$$\\Delta T = T_2 - T_1 = 259 - 255 = 4 \\text{ K}$$

**Svar:** Temperaturen øker med omtrent 4 K (4°C).

**Tolkning:**
- Reduksjon i albedo fra 0,30 til 0,25 (17% reduksjon i albedo)
- Gir temperaturøkning på 4°C
- Dette er betydelig!

**Is-albedo-tilbakekobling:**
1. Klimaet varmes → Is smelter
2. Lavere albedo (is har høy albedo, vann/jord har lav)
3. Mer solstråling absorberes
4. Temperaturen stiger ytterligere
5. Mer is smelter
6. Positiv tilbakekoblingsmekanisme (forsterker oppvarmingen)

**Konklusjon:** Endringer i albedo kan ha stor innvirkning på klimaet.`,
      hints: ['Beregn $T$ for begge albedoverdier', 'Finn forskjellen'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-4-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Arktis varmes raskere enn resten av verden (Arktisk forsterkning).',
      solution: `**Arktisk forsterkning:**

Arktis varmes **2-3 ganger raskere** enn det globale gjennomsnittet.

**Årsaker:**

**1. Is-albedo-tilbakekobling (hovedårsak):**

**Prosess:**
1. Global oppvarming → Havisen i Arktis smelter
2. Is erstattes av mørkt havvann
3. **Albedo reduseres:**
   - Havis: $\\alpha \\approx 0{,}6-0{,}7$ (reflekterer mye)
   - Havvann: $\\alpha \\approx 0{,}06-0{,}1$ (absorberer mye)
4. Mer solstråling absorberes
5. Havet varmes mer opp
6. Enda mer is smelter
7. **Positiv tilbakekoblingsmekanisme**

**Effekt:**
- Meget kraftig forsterkning av oppvarmingen
- Hastigheten øker eksponentielt

---

**2. Lav utgående stråling:**

**Prosess:**
- Arktis er kald
- Stefan-Boltzmanns lov: $P \\propto T^4$
- Lav temperatur → Lav utgående stråling
- Mindre energi stråles ut til verdensrommet

**Sammenligning:**
- Arktis (-20°C = 253 K): $P \\propto (253)^4 \\approx 4{,}1 \\times 10^9$
- Ekvator (+25°C = 298 K): $P \\propto (298)^4 \\approx 7{,}9 \\times 10^9$
- Arktis stråler ut ~50% av hva ekvator stråler ut per m²

**Effekt:**
- Samme økning i innkommende energi gir større temperaturøkning i Arktis

---

**3. Vanndamp-tilbakekobling:**

**Prosess:**
- Varmere luft → Mer vanndamp
- Vanndamp er en kraftig drivhusgass
- Sterkere drivhuseffekt
- Enda varmere

**Arktis-spesifikt:**
- Arktis har lav luftfuktighet
- Relativ økning i vanndamp er større enn ved ekvator
- Sterkere effekt

---

**4. Endret atmosfærisk sirkulasjon:**

**Prosess:**
- Varmere Arktis → Mindre temperaturforskjell mellom Arktis og lavere breddegrader
- Svakere jetstrøm
- Mer ustabil atmosfære
- Varmt luftmasser fra sør når Arktis lettere

---

**5. Permafrost-tilbakekobling:**

**Prosess:**
- Permafrost (evig tele) smelter
- Organisk materiale brytes ned
- Frigjør CO₂ og CH₄
- Sterkere drivhuseffekt
- Enda varmere

---

**6. Svart karbon (sot):**

**Prosess:**
- Sot fra forbrenning avleires på snø og is
- Reduserer albedo (gjør overflaten mørkere)
- Mer solstråling absorberes
- Raskere smelting

---

**Observerte effekter:**

**Temperatur:**
- Arktis: +3-4°C siden 1980
- Globalt gjennomsnitt: +1,1°C siden 1850-1900
- Arktis varmes ~3 ganger raskere

**Havis:**
- Sommerisen i Arktis reduseres med ~13% per tiår
- Kunne være isfritt om sommeren rundt 2050

**Permafrost:**
- Permafrostgrensen flyttes nordover
- Frigjør store mengder CO₂ og CH₄

---

**Konsekvenser:**

**Globale:**
- Bidrar til global havstigninger
- Påvirker havstrømmer (f.eks. Golfstrømmen)
- Endrer værmønstre globalt

**Lokale:**
- Trussel mot arktiske økosystemer (isbjørn, sel)
- Truer tradisjonelle levemåter (urfolk)
- Infrastruktur på permafrost blir ustabil

---

**Konklusjon:**
Arktisk forsterkning skyldes hovedsakelig **is-albedo-tilbakekobling**, men flere andre mekanismer forsterker effekten. Dette gjør Arktis til et "tidlig varsel"-system for klimaendringer.`,
      hints: ['Tenk på is og albedo', 'Positiv tilbakekobling', 'Flere faktorer'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-4-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En person tar fly fra Oslo til New York (tur-retur 11 000 km). Flyet slipper ut 90 g CO₂ per passasjer per km.\n\na) Hvor mye CO₂ produserer turen?\n\nb) Sammenlign med årlige utslipp fra en gjennomsnittlig bensinbil (2,1 tonn CO₂/år).\n\nc) Hvor mange trær må plantes for å absorbere dette CO₂? (Ett tre absorberer ~20 kg CO₂/år)',
      solution: `**Gitt:**
- Distanse: $11\\,000 \\text{ km}$
- Utslipp: $90 \\text{ g CO₂/(passasjer·km)} = 0{,}09 \\text{ kg CO₂/(passasjer·km)}$
- Bensinbil: $2{,}1 \\text{ tonn CO₂/år}$
- Ett tre: $20 \\text{ kg CO₂/år}$

**a) CO₂ fra flyturen:**

$$\\text{CO₂} = 11\\,000 \\text{ km} \\times 0{,}09 \\text{ kg/km} = 990 \\text{ kg} \\approx 1{,}0 \\text{ tonn}$$

**Svar a:** Turen produserer omtrent 1,0 tonn CO₂.

---

**b) Sammenligning med bil:**

$$\\text{Andel av årlig bilusslipp} = \\frac{1{,}0}{2{,}1} \\approx 0{,}48 = 48\\%$$

**Svar b:** Flyturen tilsvarer omtrent 48% av årlige utslipp fra en bensinbil.

**Alternativt:** En bensinbil ville måttet kjøre $\\frac{1{,}0}{2{,}1} \\times 15\\,000 \\text{ km} \\approx 7100 \\text{ km}$ for å slippe ut samme mengde.

---

**c) Antall trær:**

Ett tre absorberer 20 kg CO₂ per år.

For å absorbere 1000 kg (1,0 tonn):

$$\\text{Antall trær} = \\frac{1000 \\text{ kg}}{20 \\text{ kg/tre}} = 50 \\text{ trær}$$

Men: Dette er per år. For å fullstendig kompensere må trærne vokse i mange år.

Over 20 år:

$$\\text{Total absorpsjon per tre} = 20 \\text{ kg/år} \\times 20 \\text{ år} = 400 \\text{ kg}$$

$$\\text{Antall trær nødvendig} = \\frac{1000}{400} = 2{,}5 \\text{ trær}$$

**Svar c:** Omtrent **50 trær** må plantes for å absorbere CO₂ i løpet av ett år, eller **3 trær** over 20 år.

---

**Tolkning:**

**Fly er svært CO₂-intensivt:**
- Én tur Oslo-New York = 48% av årlige bilusslipp
- Tilsvarer ~7100 km bilkjøring

**Klimakompensasjon:**
- Å plante trær kan hjelpe, men tar tid
- Bedre: Reduser unødvendig flyreiser
- Bruk videokonferanser, tog, eller andre alternativer

**Perspektiv:**
- Global gjennomsnitt CO₂-utslipp per person: ~4 tonn/år
- For å nå 1,5°C-målet: ~2 tonn/år per person
- Én flytur bruker opp 50% av budsjettet!

**Konklusjon:** Flyreiser har betydelig klimafotavtrykk. Reduser flyreiser eller kompenser ved å støtte klimaprosjekter.`,
      hints: ['Multipliser distanse med utslipp per km', 'Sammenlign med bilutslipp', 'Del på CO₂-opptak per tre'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-4-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor havstigninger ikke er jevnt fordelt over hele jorden. Hvorfor rammes noen områder hardere enn andre?',
      solution: `**Havstigninger er ikke jevnt fordelt:**

Havstigninger varierer fra sted til sted. Noen områder opplever **mer** havstigning enn globalt gjennomsnitt, andre **mindre**.

**Årsaker:**

---

**1. Gravitasjonseffekt (størst effekt):**

**Prinsipp:**
- Store ismasser (Grønland, Antarktis) har gravitasjonskraft
- Gravitasjonen trekker havet mot ismassene
- Når isen smelter, reduseres gravitasjonen
- Havet "faller bort" fra smeltende ismasser
- Havet fordeles jevnere over jorden

**Effekt:**
- **Nær smeltende is:** Havnivået **synker** eller stiger mindre
- **Langt fra smeltende is:** Havnivået **stiger mer**

**Eksempel:**
- Grønlandsisen smelter
- Havnivået ved Grønland synker (gravitasjonen reduseres)
- Havnivået i Sørøst-Asia stiger ekstra (vannet fordeles dit)

**Størrelsesorden:**
- Fullstendig smelting av Grønlandsisen:
  - Globalt gjennomsnitt: +7 m
  - Ved Grønland: +2 m (mindre enn gjennomsnitt)
  - Ved Sørøst-Asia: +9 m (mer enn gjennomsnitt)

---

**2. Jordens rotasjon (sentrifugalkraft):**

**Prinsipp:**
- Jordens rotasjon skaper sentrifugalkraft
- Vannet "bulker ut" ved ekvator
- Når ismassene smelter, endres jordens massefordeling
- Rotasjonshastigheten endres (bevaring av drivmoment)
- Vannet fordeles annerledes

**Effekt:**
- Komplisert mønster
- Generelt: Mer havstigning ved ekvator, mindre ved polene

---

**3. Landheving/landsynkning:**

**Prinsipp:**
- Noen områder hever seg, andre synker
- **Isostatisk oppstigning:** Land som var presset ned av isbreer (siste istid) hever seg fortsatt
  - Eksempel: Skandinavia hever seg ~1 cm/år
- **Subsidens:** Land synker pga. grunnvannsuttak, sedimentasjon, tektonikk
  - Eksempel: Bangladesh, New Orleans, Jakarta

**Effekt:**
- **Landheving:** Mindre relativ havstigning (land hever seg raskere enn havet stiger)
- **Landsynkning:** Mer relativ havstigning (land synker samtidig som havet stiger)

**Eksempel:**
- Norge: Land hever seg ~5 mm/år, hav stiger ~3 mm/år → Netto: Havnivået synker relativt til land
- Bangladesh: Land synker ~5 mm/år, hav stiger ~3 mm/år → Netto: Havnivået stiger ~8 mm/år

---

**4. Havstrømmer og vind:**

**Prinsipp:**
- Havstrømmer og vind påvirker havnivået lokalt
- Vann "stabler seg opp" noen steder, "trekkes ned" andre steder
- Endringer i havstrømmer (pga. klimaendringer) endrer mønsteret

**Effekt:**
- Noen områder opplever mer havstigning pga. endrede strømmer
- Eksempel: Østkysten av USA opplever mer havstigning pga. svekkelse av Golfstrømmen

---

**5. Termisk ekspansjon:**

**Prinsipp:**
- Vann utvider seg når det varmes
- Havtemperaturen er ikke jevn
- Noen områder varmes mer enn andre
- Mer ekspansjon = mer havstigning

**Effekt:**
- Tropiske hav varmes mer → mer havstigning
- Polare hav varmes mindre → mindre havstigning

**Globalt:**
- Termisk ekspansjon bidrar med ~50% av havstigning hittil

---

**6. Lokale faktorer:**

**a) Topografi:**
- Kysten kan være beskyttet (fjorder) eller utsatt (lavland)

**b) Tidevann:**
- Noen områder har store tidevannsforskjeller
- Påvirker sårbarhet

**c) Stormflo:**
- Tropiske sykloner (orkaner) skaper stormflo
- Lavtliggende områder mer sårbare

---

**Områder som rammes hardest:**

**1. Små øystater:**
- Maldivene, Tuvalu, Marshalløyene
- Lavtliggende (<2 m over havet)
- Lite landområde
- Ikke ressurser til å bygge forsvar

**2. Delta-områder:**
- Bangladesh (Ganges-delta)
- Vietnam (Mekong-delta)
- Egypt (Nildeltaet)
- Lavtliggende, tett befolket
- Land synker pga. sedimentasjon

**3. Kystbyer:**
- Jakarta, Bangkok, New Orleans, Miami
- Tett befolket
- Infrastruktur truet
- Land synker pga. grunnvannsuttak

---

**Sammenligning:**

| Område | Global havstigning | Lokal effekt | Total havstigning |
|--------|-------------------|--------------|-------------------|
| Norge | +3 mm/år | -5 mm/år (landheving) | -2 mm/år |
| Bangladesh | +3 mm/år | +5 mm/år (landsynkning) | +8 mm/år |
| Maldivene | +3 mm/år | +2 mm/år (gravitasjon) | +5 mm/år |
| Grønland | +3 mm/år | -3 mm/år (gravitasjon) | 0 mm/år |

---

**Konklusjon:**
Havstigninger er ikke jevnt fordelt pga.:
1. **Gravitasjonseffekt** (ismasser)
2. **Landheving/synkning**
3. **Havstrømmer**
4. **Termisk ekspansjon**
5. **Lokale faktorer**

Dette gjør at lavtliggende, tett befolkede områder (spesielt i utviklingsland) rammes hardest, mens noen områder (som Norge) kan oppleve mindre eller ingen netto havstigning.`,
      hints: ['Tenk på gravitasjon fra ismasser', 'Landheving/synkning', 'Havstrømmer'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-4-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En klimamodell predikerer at CO₂-konsentrasjonen vil doble seg fra 280 ppm (førindustriell) til 560 ppm. Hvor mye vil jordas likevektstemperatur øke hvis vi antar at drivhuseffekten øker proporsjonalt med CO₂-konsentrasjon?\n\nAnta at dagens drivhuseffekt bidrar med 33 K oppvarming ved 420 ppm CO₂.',
      solution: `**Gitt:**
- Førindustriell CO₂: $C_0 = 280 \\text{ ppm}$
- Framtidig CO₂: $C_f = 560 \\text{ ppm}$ (dobling)
- Dagens CO₂: $C_d = 420 \\text{ ppm}$
- Drivhuseffekt i dag: $\\Delta T_d = 33 \\text{ K}$ (ved 420 ppm)

**Forenkling:**
Antar at drivhuseffekten er proporsjonal med CO₂-konsentrasjon.

**Merk:** Dette er en **forenkling**. I virkeligheten er sammenhengen logaritmisk: $\\Delta T \\propto \\ln(C)$.

---

**Med forenklet lineær modell:**

**Drivhuseffekt per ppm:**

$$k = \\frac{\\Delta T_d}{C_d} = \\frac{33}{420} \\approx 0{,}0786 \\text{ K/ppm}$$

**Drivhuseffekt ved 560 ppm:**

$$\\Delta T_f = k \\times C_f = 0{,}0786 \\times 560 \\approx 44 \\text{ K}$$

**Økning fra i dag:**

$$\\Delta T_{\\text{økning}} = \\Delta T_f - \\Delta T_d = 44 - 33 = 11 \\text{ K}$$

**Svar (lineær modell):** Temperaturen vil øke med omtrent 11 K (11°C).

---

**Med realistisk logaritmisk modell:**

**Sammenheng:**

$$\\Delta T = \\lambda \\ln\\left(\\frac{C}{C_0}\\right)$$

der $\\lambda$ er klimafølsomhetsparameteren.

**Finn $\\lambda$ fra dagens situasjon:**

$$33 = \\lambda \\ln\\left(\\frac{420}{280}\\right)$$

$$33 = \\lambda \\ln(1{,}5)$$

$$33 = \\lambda \\times 0{,}405$$

$$\\lambda = \\frac{33}{0{,}405} \\approx 81{,}5 \\text{ K}$$

**Beregn temperaturøkning ved dobling:**

$$\\Delta T_f = \\lambda \\ln\\left(\\frac{560}{280}\\right)$$

$$\\Delta T_f = 81{,}5 \\times \\ln(2)$$

$$\\Delta T_f = 81{,}5 \\times 0{,}693$$

$$\\Delta T_f \\approx 56{,}5 \\text{ K}$$

**Økning fra i dag:**

$$\\Delta T_{\\text{økning}} = 56{,}5 - 33 = 23{,}5 \\text{ K}$$

**Svar (logaritmisk modell):** Temperaturen vil øke med omtrent 24 K (24°C) totalt fra førindustriell tid, eller omtrent 24-11 = 13 K ekstra fra i dag.

**Merk:** Dette er for stor! Hva er feil?

---

**Korrekt tilnærming:**

IPCC bruker **klimafølsomhet** (ECS - Equilibrium Climate Sensitivity):

> Temperaturøkning ved **dobling av CO₂** fra førindustrielt nivå.

**IPCC estimat:** ECS = 2,5-4,0°C (best estimate: 3°C)

**Betydning:**
- Ved dobling fra 280 ppm til 560 ppm: Temperaturøkning ~3°C

**Fra i dag (420 ppm) til 560 ppm:**

$$\\Delta T = 3 \\times \\frac{\\ln(560/420)}{\\ln(2)}$$

$$\\Delta T = 3 \\times \\frac{\\ln(1{,}33)}{0{,}693}$$

$$\\Delta T = 3 \\times \\frac{0{,}286}{0{,}693}$$

$$\\Delta T \\approx 1{,}24 \\text{°C}$$

**Svar (realistisk):** Temperaturen vil øke med omtrent **1,2-1,3°C** fra i dag hvis CO₂ øker fra 420 ppm til 560 ppm.

---

**Konklusjon:**

**Med lineær modell (forenkling):** ~11°C økning

**Med realistisk logaritmisk modell og IPCC-klimafølsomhet:** ~1,2°C økning fra i dag

**Hvorfor forskjell?**
- Drivhuseffekten er **logaritmisk**, ikke lineær
- Hver dobling gir samme temperaturøkning (ikke hver ppm)
- Første 280 ppm gir 33 K (naturlig drivhuseffekt)
- Neste 280 ppm (til 560 ppm) gir ~3 K (menneskeskapt økning)

**Viktig:** Selv "kun" 1-2°C kan ha store konsekvenser (ekstremvær, havstigning, økosystemer).`,
      hints: ['Forenklet: Lineær sammenheng', 'Realistisk: Logaritmisk sammenheng', 'Bruk klimafølsomhet (ECS)'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-4-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvordan Norge kan nå netto null utslipp innen 2050. Nevn minst tre tiltak og forklar fysikken bak hvert tiltak.',
      solution: `**Norges vei til netto null utslipp innen 2050:**

Norge har forpliktet seg til å nå netto null klimagassutslipp innen 2050. Dette krever omfattende endringer i energisystemet, transport, industri og andre sektorer.

---

**Tiltak 1: Elektrifisering av transport**

**Mål:** Erstatte fossile kjøretøy med elektriske

**Fysikk:**
- **Fossile biler:**
  - Forbrenning: $\\text{C}_8\\text{H}_{18} + 12{,}5 \\text{O}_2 \\rightarrow 8 \\text{CO}_2 + 9 \\text{H}_2\\text{O} + \\text{energi}$
  - Produserer CO₂ direkte
  - Virkningsgrad: ~20-30% (mye energi som varme)

- **Elektriske biler:**
  - Elektrisk motor: ~90% virkningsgrad
  - Ingen direkte utslipp
  - **Hvis** strømmen er ren (vannkraft, vind, sol): Netto null utslipp

**Norges situasjon:**
- ~98% av strøm fra vannkraft (fornybar)
- Elektriske biler har minimal klimafotavtrykk i Norge
- Batteriproduksjon gir utslipp, men totalt mye lavere enn fossile biler over levetiden

**Tiltak:**
- Insentiver for elbiler (avgiftsfritak, bompenger)
- Utbygging av ladeinfrastruktur
- Elektrifisering av busser, lastebiler, ferger

**Utfordring:**
- Tungtransport (lastebiler, skip, fly) er vanskeligere å elektrifisere
- Krever hydrogen eller biobrensel

---

**Tiltak 2: Hydrogen og karbonfangst i industri**

**Mål:** Redusere utslipp fra industri (sement, metaller, petrokjemi)

**Fysikk:**

**a) Hydrogen som energibærer:**
- **Produksjon (elektrolyse):**
  $$2\\text{H}_2\\text{O} + \\text{elektrisitet} \\rightarrow 2\\text{H}_2 + \\text{O}_2$$
  - Bruker elektrisk strøm (fra fornybar energi)
  - Produserer hydrogen (H₂)

- **Forbrenning:**
  $$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{energi}$$
  - Produserer kun vann (H₂O)
  - Ingen CO₂-utslipp

- **Anvendelse:**
  - Erstatte kull/naturgass i industrielle prosesser
  - Redusere jern (jernproduksjon): $\\text{Fe}_2\\text{O}_3 + 3\\text{H}_2 \\rightarrow 2\\text{Fe} + 3\\text{H}_2\\text{O}$

**b) Karbonfangst og lagring (CCS):**
- **Fangst:**
  - CO₂ fanges fra røykgasser (sement, industri)
  - Kjemisk absorpsjon (amin-basert)
  - Fysisk separasjon (membran, kryogen)

- **Transport:**
  - CO₂ komprimeres og transporteres (rørledning, skip)

- **Lagring:**
  - CO₂ injiseres i tomme olje-/gassfelt eller saltvannsakviferer
  - Lagres permanent under havbunnen

**Eksempel:**
- Norcem (sementfabrikk) i Brevik: CCS-prosjekt
- Northern Lights: Infrastruktur for CO₂-transport og lagring på norsk sokkel

**Utfordring:**
- CCS er dyrt
- Krever store mengder energi
- Kun ~90% av CO₂ fanges (ikke 100%)

---

**Tiltak 3: Fornybar energi og effektivisering**

**Mål:** Øke fornybar energiproduksjon og redusere energiforbruk

**Fysikk:**

**a) Vindkraft:**
- **Prinsipp:** Kinetisk energi i vind omdannes til elektrisk energi
- **Effekt:** $P = \\frac{1}{2} \\rho A v^3 C_p$
  - $\\rho$ = luftens tetthet
  - $A$ = rotorens areal
  - $v$ = vindhastighet
  - $C_p$ = effektivitetsfaktor (~0,4-0,5)
- **Fordeler:** Ingen utslipp, fornybar
- **Ulemper:** Variabel (avhenger av vind), visuell påvirkning

**b) Solenergi:**
- **Prinsipp:** Sollys omdannes til elektrisk strøm (fotovoltaisk effekt)
- **Effekt:** $P = \\eta \\times A \\times I$
  - $\\eta$ = virkningsgrad (~15-22%)
  - $A$ = panel-areal
  - $I$ = solinnstråling (W/m²)
- **Fordeler:** Ingen utslipp, fornybar, kan installeres på tak
- **Ulemper:** Variabel (avhenger av sol), lav i Norge om vinteren

**c) Energieffektivisering:**
- **Bygninger:**
  - Bedre isolasjon (reduserer varmetap $P = U \\cdot A \\cdot \\Delta T$)
  - Varmepumper (høy virkningsgrad, COP ~3-4)
  - LED-belysning (90% mer effektivt enn glødelamper)

- **Industri:**
  - Gjenbruk av spillvarme
  - Mer effektive motorer og prosesser

**Fysikk (varmepumpe):**
- **Prinsipp:** Flytter varme fra kald til varm side (motsatt av naturlig retning)
- **Virkningsgrad (COP):**
  $$\\text{COP} = \\frac{Q_{\\text{ut}}}{W_{\\text{inn}}}$$
  - $Q_{\\text{ut}}$ = varme levert
  - $W_{\\text{inn}}$ = elektrisk arbeid
  - Typisk COP = 3-4 (leverer 3-4 kW varme per 1 kW elektrisitet)

---

**Tiltak 4: Karbonopptak (naturbaserte løsninger)**

**Mål:** Fjerne CO₂ fra atmosfæren

**Fysikk:**

**a) Skog (fotosyntese):**
- **Prosess:**
  $$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{lys} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$
- Trær tar opp CO₂ fra atmosfæren
- Lagrer karbon i biomasse (tre, røtter)

**b) Myr og torvmark:**
- Torvmark lagrer enormt mye karbon
- Gjenopprettelse av myr øker karbonlagring

**c) Hav:**
- Havet tar opp ~25% av menneskeskapte CO₂-utslipp
- Kan økes ved å beskytte marine økosystemer (tareskog, ålegress)

**d) Biokull (biochar):**
- Biomasse (tre, planterester) forkulles (pyrolyse)
- Karbon lagres i stabil form i jord
- Kan lagres i hundrevis-tusenvis av år

---

**Oppsummering:**

| Tiltak | Fysikk | Potensial | Utfordringer |
|--------|--------|-----------|--------------|
| Elektrifisering | Elektrisk motor (90% effektivitet) vs. forbrenning (20-30%) | Stort (transport) | Tungtransport, ladeinfrastruktur |
| Hydrogen | Elektrolyse (H₂O → H₂ + O₂), forbrenning (H₂ + O₂ → H₂O) | Stort (industri) | Dyrt, energikrevende |
| CCS | Fangst, transport, lagring av CO₂ | Middels (industri) | Dyrt, kun 90% fangst |
| Fornybar energi | Vind (kinetisk energi), sol (fotovoltaisk) | Stort | Variabel, infrastruktur |
| Energieffektivisering | Isolasjon (reduserer $P = U \\cdot A \\cdot \\Delta T$), varmepumpe (COP 3-4) | Stort | Koster å oppgradere |
| Naturbaserte løsninger | Fotosyntese (CO₂ → biomasse) | Middels | Langsom, begrenset areal |

---

**Konklusjon:**

Norge kan nå netto null ved å kombinere:
1. **Elektrifisering** (transport, oppvarming)
2. **Hydrogen og CCS** (industri)
3. **Fornybar energi** (vind, sol, vann)
4. **Energieffektivisering** (bygninger, industri)
5. **Naturbaserte løsninger** (skog, myr)

**Fysikken:**
- Erstatte forbrenning (CO₂-utslipp) med elektriske/hydrogen-prosesser (ingen utslipp)
- Øke energieffektivitet (redusere energiforbruk)
- Fange og lagre CO₂ (fjerne fra atmosfæren)

**Kritisk:** Rask handling er nødvendig for å nå 2050-målet!`,
      hints: ['Tenk på transport, industri, energi', 'Fysikken bak hvert tiltak', 'Fordeler og ulemper'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
