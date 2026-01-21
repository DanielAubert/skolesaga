/**
 * Naturfag VG1 - Kapittel 5.2: Klima og klimaendringer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_NAT_VG1_5_2: TextbookChapter = {
  id: 'nat-vg1-5-2',
  courseId: 'nat-vg1',
  chapterNumber: '5.2',
  title: 'Klima og klimaendringer',
  description: 'Lær om drivhuseffekten, klimagasser, årsaker til klimaendringer, konsekvenser og tiltak for å redusere utslipp.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare den naturlige drivhuseffekten og den menneskeskapte forsterkningen',
    'beskrive de viktigste klimagassene og deres kilder',
    'vurdere årsaker til og konsekvenser av klimaendringer',
    'forklare hvordan menneskelig aktivitet påvirker klimaet',
    'vurdere tiltak for å redusere klimagassutslipp',
  ],
  content: [
    {
      id: 'nat-vg1-5-2-intro',
      type: 'text',
      content: `# Klima og klimaendringer

Jorden varmes opp. Temperaturen har steget med ca. **1,2°C siden førindustriell tid** (ca. 1850), og det går raskere nå enn noen gang tidligere i menneskehetens historie.

**Klimaendringer** er en av vår tids største utfordringer. De påvirker:
- Ekstremvær (flom, tørke, stormer)
- Havet (stigende havnivå, surere hav)
- Økosystemer (arter dør ut)
- Matproduksjon (avlinger svikter)
- Menneskers helse og levekår

**Vitenskapelig konsensus:** 97% av klimaforskere er enige om at klimaendringene skyldes menneskelig aktivitet, hovedsakelig forbrenning av fossile brensler.

I dette kapittelet skal vi se på:
- Hva er drivhuseffekten?
- Hvilke klimagasser finnes?
- Hvordan påvirker mennesker klimaet?
- Hva er konsekvensene?
- Hva kan vi gjøre?`,
    },
    {
      id: 'nat-vg1-5-2-def-klima',
      type: 'definition',
      title: 'Klima vs. Vær',
      content: '**Vær** er tilstanden i atmosfæren på et bestemt sted til en bestemt tid (temperatur, nedbør, vind). **Klima** er gjennomsnittlig vær over lang tid (minst 30 år) i et område. Klimaendringer handler om langsiktige endringer i gjennomsnittlig temperatur og værmønstre.',
    },
    {
      id: 'nat-vg1-5-2-drivhuseffekt',
      type: 'text',
      content: `# Drivhuseffekten

## Den naturlige drivhuseffekten

Jorden ville vært **-18°C i gjennomsnitt** uten drivhuseffekten. Med drivhuseffekten er gjennomsnittstemperaturen **+15°C**. Drivhuseffekten er altså **nødvendig for livet på jorden**.

**Hvordan fungerer drivhuseffekten?**

**1. Sollys treffer jorden**
- Solen sender energi (kortbølget stråling) til jorden
- Ca. 30% reflekteres tilbake til verdensrommet
- 70% absorberes av jorden og varmer opp overflaten

**2. Jorden stråler tilbake**
- Jorden stråler energi tilbake som **infrarød stråling** (varmestråling, langbølget)
- Dette er usynlig for øyet, men kan kjennes som varme

**3. Drivhusgasser fanger varme**
- Drivhusgasser i atmosfæren **absorberer infrarød stråling**
- Gassene stråler noe tilbake til jorden
- Dette holder jorden varm

**4. Likevekt**
- Jorden er i energibalanse når like mye energi kommer inn (fra solen) som stråles ut
- Drivhusgasser regulerer denne balansen

---

**Analogi: Drivhus**
- Et drivhus har glassvegger som slipper sollys inn
- Glasset hindrer varmestråling fra å slippe ut
- Luften inne i drivhuset blir varmere
- På samme måte holder drivhusgasser jorden varm

---

## Den forsterkede drivhuseffekten

**Problemet:** Mennesker frigjør store mengder ekstra drivhusgasser (spesielt CO₂) ved forbrenning av fossile brensler.

**Resultat:**
- Mer drivhusgasser i atmosfæren
- Mer infrarød stråling fanges
- Mindre energi slipper ut i verdensrommet
- **Jorden varmes opp**

**Konsekvens:** Global oppvarming og klimaendringer.`,
    },
    {
      id: 'nat-vg1-5-2-klimagasser',
      type: 'text',
      content: `# Klimagasser

**Klimagasser** er gasser i atmosfæren som absorberer infrarød stråling og bidrar til drivhuseffekten.

## De viktigste klimagassene

### 1. Karbondioksid (CO₂)

**Bidrag til drivhuseffekten:** ~75% (mest betydningsfull)

**Kilder:**
- Forbrenning av fossile brensler (kull, olje, gass)
- Avskoging (trær binder CO₂)
- Sementproduksjon
- Respirasjon (pusting) hos dyr og planter

**Levetid i atmosfæren:** Hundrevis til tusenvis av år

**Konsentrasjon:**
- Førindustriell tid: ~280 ppm (parts per million)
- I dag: ~420 ppm (50% økning!)
- Øker med ~2-3 ppm per år

**Hvorfor er CO₂ et problem?**
- Mesteparten kommer fra menneskelig aktivitet
- Samler seg i atmosfæren over lang tid
- Hovedårsak til global oppvarming

---

### 2. Metan (CH₄)

**Bidrag til drivhuseffekten:** ~15%

**Klimaeffekt:** 25 ganger sterkere enn CO₂ (over 100 år)

**Kilder:**
- Husdyr (spesielt kuer) - fordøyelse og gjødsel
- Rismarker (nedbrytning av organisk materiale)
- Søppelfyllinger (nedbrytning av avfall)
- Utslipp fra olje- og gassproduksjon (lekkasjer)
- Tining av permafrost (frosset jord i Arktis)

**Levetid i atmosfæren:** ~12 år (kortere enn CO₂)

**Hvorfor er CH₄ viktig?**
- Sterkt drivhusgas (kort levetid, men kraftig effekt)
- Utslipp øker med matproduksjon (flere mennesker, mer kjøtt)

---

### 3. Lystgass (N₂O)

**Bidrag til drivhuseffekten:** ~6%

**Klimaeffekt:** 300 ganger sterkere enn CO₂

**Kilder:**
- Gjødsel i landbruket (kunstgjødsel)
- Forbrenning av fossile brensler
- Industrielle prosesser

**Levetid i atmosfæren:** ~120 år

---

### 4. Fluorholdige gasser (F-gasser)

**Typer:** HFK, PFK, SF₆

**Klimaeffekt:** Opp til 23 000 ganger sterkere enn CO₂!

**Kilder:**
- Kjøle- og fryseanlegg
- Klimaanlegg
- Spraybokser
- Elektronikk

**Levetid i atmosfæren:** Opp til 50 000 år

**Tiltak:** Reguleres strengt (Montreal-protokollen)

---

## Vanndamp (H₂O)

**Spesiell rolle:**
- Vanndamp er også en drivhusgass
- Men mennesker frigjør lite vanndamp direkte
- Varmere luft inneholder mer vanndamp (positiv tilbakekobling)
- Forsterker oppvarmingen

---

## CO₂-ekvivalenter

For å sammenligne ulike klimagasser bruker vi **CO₂-ekvivalenter (CO₂e)**:
- 1 kg CH₄ = 25 kg CO₂e (over 100 år)
- 1 kg N₂O = 300 kg CO₂e

Dette gjør det enklere å beregne totalt klimagassutslipp.`,
    },
    {
      id: 'nat-vg1-5-2-ex-klimagass',
      type: 'example',
      title: 'Beregning av CO₂-ekvivalenter',
      problem: 'En gård slipper ut 10 tonn CO₂, 2 tonn CH₄ (metan) og 0,5 tonn N₂O (lystgass) per år. Hva er totalt utslipp i CO₂-ekvivalenter?',
      solution: `**Gitt:**
- CO₂: 10 tonn
- CH₄: 2 tonn (1 kg CH₄ = 25 kg CO₂e)
- N₂O: 0,5 tonn (1 kg N₂O = 300 kg CO₂e)

**Løsning:**

**1. CO₂ (direkte):**
$$10 \\text{ tonn CO}_2 = 10 \\text{ tonn CO}_2\\text{e}$$

**2. Metan (CH₄):**
$$2 \\text{ tonn CH}_4 \\times 25 = 50 \\text{ tonn CO}_2\\text{e}$$

**3. Lystgass (N₂O):**
$$0{,}5 \\text{ tonn N}_2\\text{O} \\times 300 = 150 \\text{ tonn CO}_2\\text{e}$$

**Totalt:**
$$10 + 50 + 150 = 210 \\text{ tonn CO}_2\\text{e}$$

**Svar:** Gården slipper ut 210 tonn CO₂-ekvivalenter per år.

**Observasjon:** Selv om N₂O-utslippet er minst (0,5 tonn), bidrar det mest til totalt utslipp pga. høy klimaeffekt (300 ganger sterkere enn CO₂).`,
    },
    {
      id: 'nat-vg1-5-2-arsaker',
      type: 'text',
      content: `# Årsaker til klimaendringer

## Naturlige årsaker (mindre betydning i dag)

**1. Solaktivitet**
- Solen varierer i intensitet over tid
- Solflekker påvirker stråling
- Men: Kan ikke forklare dagens oppvarming

**2. Vulkanutbrudd**
- Store utbrudd sender aske og gasser til atmosfæren
- Kan gi kortvarig avkjøling (blokkerer sollys)
- Frigjør også CO₂ (men mye mindre enn mennesker)

**3. Jordens bane**
- Jordens bane rundt solen varierer over tusenvis av år (Milankovitch-sykler)
- Påvirker istider og varmeperioder
- Forklarer IKKE dagens raske oppvarming

---

## Menneskeskapte årsaker (hovedårsak)

### 1. Forbrenning av fossile brensler (største kilde)

**Kull, olje, naturgass:**
- Strømproduksjon (~40% av CO₂-utslipp)
- Transport (~25%)
- Industri (~20%)
- Oppvarming av bygninger (~10%)

**Hvorfor er dette et problem?**
- Fossilt karbon som var lagret under jorden i millioner av år frigjøres raskt
- Øker CO₂-konsentrasjonen i atmosfæren
- Jorden har ikke tid til å tilpasse seg

### 2. Avskoging

**Hvorfor er skog viktig?**
- Trær tar opp CO₂ gjennom fotosyntese
- Lagrer karbon i ved, røtter og jord
- "Karbonsluk" - fjerner CO₂ fra atmosfæren

**Problemet:**
- Avskoging frigjør lagret karbon
- Skog erstattes med jordbruk eller byer
- Mindre karbonopptak

**Tall:**
- Ca. 10 millioner hektar skog hogges årlig
- Tilsvarer ~10% av årlige CO₂-utslipp

**Årsaker til avskoging:**
- Jordbruk (storfe, soya, palmeolje)
- Tømmer
- Byer ekspanderer

### 3. Landbruk og husdyr

**Metan fra kuer:**
- Kuer produserer metan ved fordøyelse (drøvtygging)
- 1 ku = ~100 kg CH₄ per år = 2,5 tonn CO₂e
- 1,5 milliarder kuer globalt!

**Gjødsel:**
- Kunstgjødsel frigjør N₂O (lystgass)
- Gjødsel fra dyr frigjør CH₄ og N₂O

**Rismarker:**
- Ris dyrkes under vann
- Bakterier produserer metan
- Viktig matkilde, men stor klimautfordring

### 4. Industri

**Sementproduksjon:**
- Frigjør CO₂ ved kjemisk reaksjon
- ~8% av globale CO₂-utslipp

**Stålproduksjon:**
- Krever høye temperaturer (fossilt brennstoff)
- Frigjør mye CO₂

### 5. Avfall

**Søppelfyllinger:**
- Nedbrytning av organisk avfall frigjør metan
- Kan reduseres ved gjenvinning og kompostering

---

## Hvorfor vet vi at mennesker er årsaken?

**Bevis:**

**1. Timing:** Oppvarmingen startet med industrialiseringen (1850)

**2. CO₂-økning:** CO₂-nivået øker raskt samtidig med fossilt brennstoff-bruk

**3. Isotopanalyse:** CO₂ fra fossilt brennstoff har et unikt "fingeravtrykk" (mindre C-13)

**4. Atmosfærens sammensetning:** Oksygen reduseres (brukes ved forbrenning)

**5. Modeller:** Klimamodeller kan kun forklare oppvarmingen når menneskelige utslipp inkluderes`,
    },
    {
      id: 'nat-vg1-5-2-konsekvenser',
      type: 'text',
      content: `# Konsekvenser av klimaendringer

## Global oppvarming

**Temperaturen har steget med ~1,2°C siden 1850**

**Projeksjon:**
- Uten tiltak: +3-5°C innen 2100
- Med tiltak (Paris-avtalen): Begrense til +1,5-2°C

**Hva betyr 1-2°C?**
- Høres lite ut, men har store konsekvenser
- Endrer værmønstre globalt
- Selv 0,5°C ekstra har merkbare effekter

---

## Smelting av is og stigende havnivå

### Is smelter

**Arktis:**
- Sjøis minker raskt
- Sommeren 2040: Kanskje isfri Arktis
- Påvirker dyreliv (isbjørn, sel)

**Grønland og Antarktis:**
- Enorme isbreer smelter
- Grønlands isbre inneholder nok is til å heve havet 7 meter!
- Antarktis: Nok is til 60 meter havnivåstigning

**Isbreer i fjell:**
- Alpene, Himalaya, Andes, Norge
- Forsvinner raskt
- Påvirker vannforsyning (millioner avhengig av smeltevann)

### Havnivå stiger

**Årsaker:**
- Smeltende isbreer og innlandsis
- Varmere vann utvider seg (termisk ekspansjon)

**Hittil:** +20 cm siden 1900

**Projeksjon:**
- +50 cm til 1 meter innen 2100
- Kan bli flere meter på sikt

**Konsekvenser:**
- Kystbyer oversvømmes (Bangladesh, Nederland, Florida)
- 150 millioner mennesker bor under 1 meter over havnivå
- Saltvann trenger inn i grunnvann (ødelegger jordbruk)

---

## Ekstremvær

### Mer intense hetebølger

**Økning:** Flere og varmere hetebølger
- Dødsfall blant eldre og syke
- Tørke og skogbranner
- Dårlige avlinger

**Eksempel:** Europa 2003, 70 000 døde

### Kraftigere nedbør og flom

**Varmere luft holder mer vann** (7% mer per °C)
- Kraftigere regnskyll
- Større flom
- Ødelagte hus, veier, broer

**Norge:** Mer nedbør på Vestlandet, mer flom

### Flere og sterkere stormer

**Varmere hav = mer energi til orkaner**
- Sterkere orkaner (Katrina, Harvey, Irma)
- Større ødeleggelser

### Mer tørke

**Endrede nedbørsmønstre**
- Noen områder får mindre regn
- Lengre tørkeperioder
- Spesielt Midtøsten, Afrika, Australia

---

## Påvirkning på økosystemer og arter

### Arter dør ut

**Problemet:** Klimaet endrer seg raskere enn arter kan tilpasse seg

**Eksempler:**
- Isbjørn (mister sitt habitat - sjøis)
- Korallrev (bleker og dør pga. varmt hav)
- Amfibier (tørke)

**Tall:** 1 million arter er truet av utryddelse (mange pga. klima)

### Endrede økosystemer

**Skoggrensen flyttes nordover**
- Skog erstattet av tundra i Arktis
- Endrer økosystemer

**Havet:**
- Varmere og surere hav
- Fiskearter flytter seg (nordover)
- Påvirker fiske

### Skadegjørere og sykdommer

**Varmere klima:**
- Insekter og parasitter sprer seg nordover
- Nye plantesjukdommer
- Malaria kan spre seg til nye områder

---

## Påvirkning på matproduksjon

### Dårligere avlinger

**Tørke, flom, ekstremvær:**
- Avlinger svikter
- Matvarepriser stiger
- Sult og underernæring

**Spesielt utsatt:** Afrika, Asia (millioner avhengig av jordbruk)

### Endret dyrkingsområder

**Noen fordeler:**
- Norge kan dyrke nye vekster (mais?)
- Lengre vekstsesong

**Men mange ulemper:**
- Globalt: Mer tørke enn fordeler
- Matproduksjonen reduseres totalt

---

## Påvirkning på mennesker

### Flyktninger

**Klimaflyktninger:** Mennesker som må flytte pga. klima
- Stigende havnivå (kystområder)
- Tørke (mangel på vann)
- Ekstremvær (ødeleggelser)

**Anslag:** 200 millioner klimaflyktninger innen 2050

### Helse

**Direkte:**
- Flere dør i hetebølger
- Luftforurensning (respirasjon)

**Indirekte:**
- Underernæring (matmangel)
- Sykdommer (malaria, dengue)
- Dårlig psykisk helse (stress, tap)

### Økonomi

**Kostnader:**
- Ødeleggelser fra ekstremvær
- Redusert produktivitet (varme, sykdom)
- Tilpasning (flomvern, nødhjelp)

**Anslag:** Klimaendringer kan koste billioner kroner årlig

---

## Positive tilbakekoblinger (selvforsterkende effekter)

**1. Mindre is = mindre refleksjon**
- Is reflekterer sollys (høy albedo)
- Hav absorberer sollys (lav albedo)
- Mer smelting = mer oppvarming

**2. Tining av permafrost**
- Permafrost inneholder enorme mengder metan og CO₂
- Tining frigjør disse gassene
- Forsterker oppvarmingen

**3. Mindre skog = mindre karbonopptak**
- Skog dør pga. tørke og branner
- Mindre CO₂ fjernes fra atmosfæren
- Mer CO₂ i atmosfæren

**Konklusjon:** Disse effektene gjør at klimaendringene kan akselerere hvis vi ikke handler raskt.`,
    },
    {
      id: 'nat-vg1-5-2-tiltak',
      type: 'text',
      content: `# Tiltak mot klimaendringer

## Reduksjon av klimagassutslipp (mitigasjon)

### 1. Fornybar energi

**Mål:** Erstatte fossile brensler med fornybar energi

**Tiltak:**
- Bygg ut sol, vind, vannkraft
- Fase ut kullkraftverk
- Elektrifisere transport, oppvarming

**Norges rolle:**
- Eksportere fornybar energi til Europa
- Satse på havvind
- Elektrifisere ferger, fly, skip

### 2. Energieffektivisering

**Mål:** Bruke mindre energi for samme nytte

**Tiltak:**
- Isolere bygninger bedre
- Energieffektive apparater
- LED-belysning
- Smarte strømnett

**Potensial:** Kan redusere globalt energiforbruk med 30%

### 3. Elektrifisering av transport

**Mål:** Erstatte bensin/diesel med elektriske kjøretøy

**Tiltak:**
- Elbiler, el-busser, el-tog
- Ladeinfrastruktur
- Incentiver (subsidier, avgiftsreduksjon)

**Norge:** Verdensledende på elbiler (~90% av nybilsalget)

### 4. Karbonfangst og lagring (CCS)

**Prinsipp:** Fange CO₂ fra utslipp og lagre det under bakken

**Bruk:**
- Kraftverk
- Sementfabrikker
- Stålverk

**Utfordring:** Dyrt og energikrevende, men kan være nødvendig

### 5. Avskoging stoppe, skog plantes

**Mål:** Bevare og øke karbonsluk

**Tiltak:**
- Stopp avskoging (spesielt regnskog)
- Plante trær (skogplanting)
- Bærekraftig skogbruk

**Potensial:** Kan fjerne milliarder tonn CO₂ årlig

### 6. Bærekraftig landbruk

**Redusere kjøttforbruk:**
- Spesielt storfe (mye metan)
- Spise mer plantebasert
- Reduserer utslipp med opptil 50%

**Bedre dyrkingsmetoder:**
- Mindre kunstgjødsel (N₂O)
- Bedre gjødsel håndtering (CH₄)
- Presisjonsjordbruk (mindre spill)

### 7. Sirkulær økonomi

**Mål:** Gjenbruk, reparasjon, gjenvinning

**Tiltak:**
- Produsere mindre avfall
- Resirkulere materialer
- Reparere i stedet for å kaste

**Potensial:** Redusere utslipp fra produksjon

### 8. Karbonprising

**Karbonkvoter (ETS):**
- Bedrifter må betale for CO₂-utslipp
- Gir insentiv til å redusere utslipp

**CO₂-avgift:**
- Skatt på fossilt brennstoff
- Gjør fornybart mer konkurransedyktig

---

## Tilpasning (adaptasjon)

**Mål:** Tilpasse samfunnet til et endret klima

**Tiltak:**
- **Flomvern:** Bygge dammer, diker, flomkanaler
- **Vannlagring:** Magasiner for tørkeperioder
- **Klimatilpasset arkitektur:** Hvite tak (reflekterer), grønne tak (kjøling)
- **Varslingsystemer:** Varsle om hetebølger, flom, storm
- **Nye avlinger:** Dyrke tørkeresistente planter
- **Befolkningsflytting:** Flytte folk fra utsatte områder

---

## Internasjonale avtaler

### Paris-avtalen (2015)

**Mål:** Begrense global oppvarming til **godt under 2°C**, helst 1,5°C

**Tiltak:**
- Land setter egne utslippsmål (NDCs)
- Fem-års syklus for å øke ambisjonene
- Økonomisk støtte til utviklingsland

**Status:** Verden er IKKE på rett spor (forventes 2,5-3°C oppvarming med dagens tiltak)

### Kyoto-protokollen (1997)

**Første globale klimaavtale** med bindende utslippsmål

**Problem:** USA trakk seg, mange land fulgte ikke opp

### FNs klimapanel (IPCC)

**Rolle:** Samle og vurdere vitenskapelig kunnskap om klima

**Rapporter:** Hvert 5-7 år publiseres omfattende rapporter

---

## Hva kan DU gjøre?

**Individuelt:**
- Spis mindre kjøtt (spesielt storfe)
- Bruk kollektivtransport, sykle, gå
- Fly mindre
- Spare energi (skru av lys, kortere dusjer)
- Kjøp brukt, reparer, gjenbruk
- Velg fornybar strøm

**Påvirkning:**
- Stemme på politikere med klimapolitikk
- Delta i klimaaksjoner
- Spre kunnskap om klima
- Krev endring fra bedrifter og politikere

**Merk:** Individuell innsats er viktig, men **systemendring** (politikk, økonomi) er nødvendig for å løse klimakrisen.`,
    },
    {
      id: 'nat-vg1-5-2-warning',
      type: 'warning',
      title: 'Karbonbudsjett',
      content: `**Karbonbudsjett** er hvor mye CO₂ vi kan slippe ut totalt og fortsatt holde oppvarmingen under 1,5°C eller 2°C.

**For 1,5°C:** ~400 milliarder tonn CO₂ gjenstår (fra 2020)

**Dagens utslipp:** ~40 milliarder tonn CO₂ per år

**Tid gjenstår:** Ca. 10 år før budsjettet er brukt opp!

**Konklusjon:** Vi må handle raskt og drastisk redusere utslipp NÅ.`,
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-5-2-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar den naturlige drivhuseffekten. Hvorfor er den nødvendig for livet på jorden?',
      solution: `**Den naturlige drivhuseffekten:**

**Hvordan fungerer den:**

**1. Sollys treffer jorden**
- Solen sender kortbølget stråling (synlig lys, UV) til jorden
- Ca. 70% av strålingen absorberes av jorden og varmer opp overflaten

**2. Jorden stråler tilbake**
- Jorden stråler energi tilbake til verdensrommet som **infrarød stråling** (varmestråling)
- Dette er langbølget, usynlig stråling

**3. Drivhusgasser fanger varme**
- Drivhusgasser i atmosfæren (CO₂, CH₄, H₂O, N₂O) absorberer infrarød stråling
- Gassene stråler noe av energien tilbake til jorden
- Dette holder jorden varmere enn den ellers ville vært

**4. Energibalanse**
- Jorden er i balanse når energi inn = energi ut
- Drivhusgasser regulerer temperaturen

---

**Hvorfor er den nødvendig?**

**Uten drivhuseffekten:**
- Jorden ville hatt en gjennomsnittstemperatur på **-18°C**
- All vann ville vært fryst
- Livet slik vi kjenner det ville ikke eksistert

**Med drivhuseffekten:**
- Gjennomsnittstemperatur: **+15°C**
- Flytende vann
- Perfekt for livet

**Konklusjon:** Drivhuseffekten er naturlig og nødvendig. Problemet er den **forsterkede** drivhuseffekten pga. menneskelig aktivitet.`,
      hints: ['Tenk på hvordan sollys varmer jorden', 'Hva skjer med varmestrålingen fra jorden?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-2-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn de fire viktigste klimagassene og gi én kilde for hver.',
      solution: `**De fire viktigste klimagassene:**

**1. Karbondioksid (CO₂)**
- **Bidrag:** ~75% av drivhuseffekten
- **Kilde:** Forbrenning av fossile brensler (kull, olje, naturgass)
- **Eksempel:** Bileksos, kullkraftverk, oljefyring

**2. Metan (CH₄)**
- **Bidrag:** ~15% av drivhuseffekten
- **Klimaeffekt:** 25 ganger sterkere enn CO₂
- **Kilde:** Husdyr (spesielt kuer ved fordøyelse)
- **Eksempel:** Drøvtygging hos storfe

**3. Lystgass (N₂O)**
- **Bidrag:** ~6% av drivhuseffekten
- **Klimaeffekt:** 300 ganger sterkere enn CO₂
- **Kilde:** Kunstgjødsel i landbruket
- **Eksempel:** Nitrogengjødsel på åkrer

**4. Fluorholdige gasser (F-gasser)**
- **Bidrag:** ~3% av drivhuseffekten
- **Klimaeffekt:** Opp til 23 000 ganger sterkere enn CO₂
- **Kilde:** Kjøle- og fryseanlegg
- **Eksempel:** Kjøleskap, klimaanlegg

---

**Viktig å huske:**
- CO₂ er viktigst pga. store mengder og lang levetid
- CH₄ og N₂O er kraftigere, men kortere levetid
- Alle fire bidrar til global oppvarming`,
      hints: ['Husk CO₂, CH₄, N₂O, F-gasser', 'Tenk på transport, landbruk, industri'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-2-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En person kjører bil (bensin) og slipper ut 2 tonn CO₂ per år. Samme person spiser kjøtt og bidrar med 1 tonn CO₂, 0,1 tonn CH₄ og 0,01 tonn N₂O fra husdyr. Beregn totalt utslipp i CO₂-ekvivalenter. (CH₄ = 25 × CO₂, N₂O = 300 × CO₂)',
      solution: `**Gitt:**

**Bil:**
- CO₂: 2 tonn

**Mat (husdyr):**
- CO₂: 1 tonn
- CH₄: 0,1 tonn (1 kg CH₄ = 25 kg CO₂e)
- N₂O: 0,01 tonn (1 kg N₂O = 300 kg CO₂e)

---

**Løsning:**

**1. CO₂ (direkte):**
$$2 + 1 = 3 \\text{ tonn CO}_2\\text{e}$$

**2. Metan (CH₄):**
$$0{,}1 \\text{ tonn CH}_4 \\times 25 = 2{,}5 \\text{ tonn CO}_2\\text{e}$$

**3. Lystgass (N₂O):**
$$0{,}01 \\text{ tonn N}_2\\text{O} \\times 300 = 3 \\text{ tonn CO}_2\\text{e}$$

**Totalt:**
$$3 + 2{,}5 + 3 = 8{,}5 \\text{ tonn CO}_2\\text{e}$$

---

**Svar:** Totalt utslipp er **8,5 tonn CO₂-ekvivalenter** per år.

---

**Tolkning:**

**Fordeling:**
- Bil: 2 tonn (24%)
- Mat (CO₂): 1 tonn (12%)
- Mat (CH₄): 2,5 tonn (29%)
- Mat (N₂O): 3 tonn (35%)

**Observasjon:** Selv om N₂O-utslippet er minst (0,01 tonn), bidrar det mest (3 tonn CO₂e) pga. meget høy klimaeffekt.

**Konklusjon:**
- Mat (spesielt kjøtt) står for 76% av utslippene (6,5 av 8,5 tonn)
- Redusere kjøttforbruk kan ha stor effekt
- Velge vegetarmat kan redusere utslipp mer enn å slutte å kjøre bil!`,
      hints: ['Konverter hver klimagass til CO₂-ekvivalenter', 'Legg sammen alle bidrag'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-2-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar tre konkrete konsekvenser av klimaendringer og hvordan de påvirker mennesker.',
      solution: `**Tre konsekvenser av klimaendringer:**

---

**1. Stigende havnivå**

**Årsak:**
- Smelting av isbreer og innlandsis (Grønland, Antarktis)
- Termisk ekspansjon (varmere vann utvider seg)

**Hittil:** +20 cm siden 1900

**Projeksjon:** +50 cm til 1 meter innen 2100

**Påvirkning på mennesker:**
- **Oversvømmelse av kystbyer:** Millioner må flytte (Bangladesh, Florida, Nederland)
- **Saltvann i grunnvann:** Ødelegger drikkevann og jordbruk
- **Tap av landområder:** Små øystater (Maldivene, Kiribati) kan forsvinne
- **Økonomiske tap:** Ødeleggelse av infrastruktur (hus, veier, havner)

**Eksempel:** 150 millioner mennesker bor under 1 meter over havnivå

---

**2. Mer ekstremvær (hetebølger, flom, tørke)**

**Årsak:**
- Varmere luft holder mer vann (7% mer per °C)
- Mer energi i atmosfæren
- Endrede værmønstre

**Konsekvenser:**

**Hetebølger:**
- Flere dør (spesielt eldre, syke)
- Eksempel: Europa 2003 - 70 000 døde
- Tørke og skogbranner

**Kraftigere nedbør og flom:**
- Ødeleggelse av hus, veier, broer
- Norge: Mer flom på Vestlandet

**Tørke:**
- Avlinger svikter
- Mangel på drikkevann
- Spesielt Afrika, Midtøsten

**Påvirkning på mennesker:**
- **Dødsfall og sykdom:** Hete, dårlig luftkvalitet
- **Økonomisk tap:** Ødeleggelser, dårlige avlinger
- **Matmangel:** Sult og underernæring

---

**3. Påvirkning på matproduksjon**

**Årsak:**
- Tørke, flom, ekstremvær
- Endrede dyrkingsområder
- Skadegjørere og sykdommer sprer seg

**Konsekvenser:**
- **Dårligere avlinger:** Hvete, mais, ris svikter
- **Høyere matvarepriser:** Inflasjon
- **Sult:** Spesielt i Afrika, Asia (millioner avhengig av jordbruk)

**Påvirkning på mennesker:**
- **Underernæring:** Spesielt barn
- **Fattigdom:** Bønder mister inntekt
- **Konflikt:** Krig om ressurser (vann, mat)
- **Flyktninger:** Folk må flytte

**Eksempel:** 200 millioner klimaflyktninger forventes innen 2050

---

**Konklusjon:**

Klimaendringer påvirker mennesker gjennom:
1. Tap av hjem (stigende havnivå)
2. Fare for liv (ekstremvær)
3. Mangel på mat (dårlige avlinger)

De fattigste landene rammes hardest, selv om de har bidratt minst til problemet.`,
      hints: ['Tenk på havnivå, vær, mat', 'Hvordan påvirker dette folks liv?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-2-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre tiltak for å redusere klimagassutslipp. Forklar hvorfor hvert tiltak er effektivt.',
      solution: `**Tre tiltak for å redusere klimagassutslipp:**

---

**1. Overgang til fornybar energi**

**Hva:**
- Erstatte fossile brensler (kull, olje, gass) med fornybar energi (sol, vind, vann)
- Fase ut kullkraftverk
- Elektrifisere transport, oppvarming, industri

**Hvorfor er det effektivt:**
- **Fossilt brennstoff står for ~75% av globale CO₂-utslipp**
- Fornybar energi produserer **ingen klimagasser** under drift
- Stort potensial for utslippsreduksjon

**Eksempel:**
- Norge: 95% av strømmen fra vannkraft (nesten utslippsfritt)
- Globalt: Sol og vind vokser raskt og blir billigere

**Utfordring:** Ustabil produksjon (væravhengig), krever energilagring

---

**2. Redusere kjøttforbruk (spesielt storfe)**

**Hva:**
- Spise mindre kjøtt, mer plantebasert mat
- Erstatte storfe med kylling, fisk, belgfrukter

**Hvorfor er det effektivt:**
- **Husdyr står for ~15% av globale klimagassutslipp**
- Kuer produserer mye metan (25 ganger sterkere enn CO₂)
- 1 kg storfekjøtt = ~27 kg CO₂e
- 1 kg belgfrukter = ~1 kg CO₂e

**Potensial:**
- Vegetarisk/vegansk kosthold kan redusere matrelaterte utslipp med **50-70%**

**Eksempel:**
- Erstatte storfe med kylling: 75% mindre utslipp
- Erstatte med plantebasert: 95% mindre utslipp

**Ekstra fordel:** Mindre landbruk (mer skog kan bevares)

---

**3. Stoppe avskoging og plante trær**

**Hva:**
- Bevare eksisterende skog (spesielt regnskog)
- Plante nye trær (skogplanting)
- Bærekraftig skogbruk

**Hvorfor er det effektivt:**
- **Skog er et "karbonsluk"** - fjerner CO₂ fra atmosfæren gjennom fotosyntese
- Avskoging står for ~10% av globale CO₂-utslipp
- Trær lagrer karbon i ved, røtter, jord

**Potensial:**
- Stoppe avskoging + plante trær kan fjerne **10 milliarder tonn CO₂ årlig** (25% av dagens utslipp!)

**Eksempel:**
- Amazonas regnskogen fjerner ~2 milliarder tonn CO₂ per år
- Avskoging frigjør lagret karbon og reduserer karbonopptak

**Ekstra fordel:** Bevarer artsmangfold, beskytter urfolk

---

**Sammendrag:**

| Tiltak | Potensial | Utslippsreduksjon |
|--------|-----------|-------------------|
| **Fornybar energi** | Høy | 75% av CO₂-utslipp |
| **Mindre kjøtt** | Medium | 15% av totale utslipp |
| **Bevare skog** | Medium | 10% + økt karbonopptak |

**Konklusjon:** Alle tre tiltak er nødvendige for å nå klimamålene. Kombinert kan de drastisk redusere utslipp.`,
      hints: ['Tenk på energi, mat, skog', 'Hvorfor reduserer hvert tiltak utslipp?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-5-2-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar begrepet "positiv tilbakekobling" i klimasystemet. Gi to eksempler og forklar hvorfor de er bekymringsfulle.',
      solution: `**Positiv tilbakekobling (selvforsterkende effekt):**

**Definisjon:** En prosess hvor en endring forsterker seg selv, skaper en spiral som akselererer endringen.

I klimasystemet betyr dette at oppvarming trigger prosesser som fører til mer oppvarming.

---

**Eksempel 1: Is-albedo-tilbakekobling**

**Hvordan fungerer det:**

**1. Oppvarming smelter is**
- Global oppvarming smelter sjøis i Arktis og isbreer

**2. Mindre refleksjon av sollys**
- **Is er hvit** og reflekterer ~90% av sollys (høy **albedo**)
- **Hav er mørkt** og absorberer ~90% av sollys (lav albedo)

**3. Mer oppvarming**
- Mindre is = mer sollys absorberes
- Havet varmes opp enda mer

**4. Mer smelting**
- Varmere hav smelter mer is
- Syklusen fortsetter

**Illustrasjon:**
$$\\text{Oppvarming} \\rightarrow \\text{Is smelter} \\rightarrow \\text{Mindre refleksjon} \\rightarrow \\text{Mer oppvarming} \\rightarrow \\text{Mer smelting}$$

**Hvorfor bekymringsfullt:**
- **Selvforsterkende:** Prosessen akselererer uten ekstra CO₂-utslipp
- **Arktis varmes dobbelt så raskt** som resten av verden
- Kan føre til "tippepunkt" hvor smelting blir irreversibel

---

**Eksempel 2: Permafrost-tilbakekobling**

**Hvordan fungerer det:**

**1. Permafrost tiner**
- **Permafrost** er jord som har vært frossen i tusenvis av år (Arktis, Sibir)
- Inneholder enorme mengder organisk materiale (døde planter, dyr)
- Oppvarming smelter permafrost

**2. Frigjøring av klimagasser**
- Bakterier bryter ned organisk materiale
- Frigjør **CO₂** og **metan (CH₄)**
- Metan er 25 ganger sterkere enn CO₂

**3. Mer oppvarming**
- Ekstra klimagasser forsterker drivhuseffekten
- Atmosfæren varmes ytterligere

**4. Mer tining**
- Varmere klima smelter mer permafrost
- Syklusen fortsetter

**Illustrasjon:**
$$\\text{Oppvarming} \\rightarrow \\text{Permafrost tiner} \\rightarrow \\text{CH₄ og CO₂ frigjøres} \\rightarrow \\text{Mer oppvarming} \\rightarrow \\text{Mer tining}$$

**Størrelse:**
- Permafrost inneholder ca. **1 600 milliarder tonn karbon**
- Dette er **dobbelt så mye** som all CO₂ i atmosfæren i dag!

**Hvorfor bekymringsfullt:**
- **Enormt karbonlager** kan frigjøres
- **Ukontrollerbar:** Mennesker kan ikke stoppe prosessen direkte
- Kan føre til "runaway global warming" (ukontrollert oppvarming)

---

**Andre eksempler på positiv tilbakekobling:**

**3. Mindre skog = mindre karbonopptak**
- Skog dør pga. tørke, branner, sykdom
- Mindre CO₂ fjernes fra atmosfæren
- Mer CO₂ i atmosfæren
- Mer oppvarming
- Mer skog dør

**4. Vanndamp-tilbakekobling**
- Varmere luft holder mer vanndamp
- Vanndamp er en drivhusgass
- Mer vanndamp = mer oppvarming
- Mer vanndamp i luften

---

**Hvorfor er dette bekymringsfullt?**

**1. Selvforsterkende spiral**
- Oppvarming akselererer uten ekstra menneskelige utslipp
- Vanskelig å stoppe

**2. Tippepunkter**
- Etter et visst punkt kan prosessen bli irreversibel
- Selv om vi stopper utslipp, fortsetter oppvarmingen

**3. Raskere enn forventet**
- Klimamodeller undervurderer kanskje effekten
- Oppvarming kan gå raskere enn ventet

**4. Ukontrollerbar**
- Mennesker kan ikke direkte stoppe smelting av is eller tining av permafrost
- Vi kan kun redusere utslipp og håpe det er nok

---

**Konklusjon:**

Positive tilbakekoblinger gjør klimakrisen mer **akutt** og **farlig**. Det er derfor **kritisk viktig** å handle raskt og drastisk redusere utslipp NÅ, før vi når tippepunkter.`,
      hints: ['Tenk på prosesser som forsterker seg selv', 'Is-smelting og permafrost er gode eksempler'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
