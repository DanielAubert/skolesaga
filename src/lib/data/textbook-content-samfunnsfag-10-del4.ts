/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - Del 4 (Kapittel 11-16)
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 * Tema: Geografi og ressurser
 *
 * Kapittel 11: Klima og klimasoner
 * Kapittel 12: Naturressurser og forvaltning
 * Kapittel 13: Befolkning og bosetting
 * Kapittel 14: Kart og kartanalyse
 * Kapittel 15: Naturkatastrofer og sårbarhet
 * Kapittel 16: Arealbruk og interessekonflikter
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 11: Klima og klimasoner
// LK20: Utforske og beskrive korleis klimaet på jorda endrar seg over tid,
//        og drøfte kva endringane kan bety for menneske og natur
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_11: TextbookChapter = {
  id: 'samfunnsfag-10-11',
  courseId: 'samfunnsfag-10',
  chapterNumber: '11',
  title: 'Klima og klimasoner',
  description: 'Lær om klimasoner på jorda, forskjellen mellom vær og klima, klimaendringer og hvordan ulike faktorer påvirker klimaet.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og beskrive korleis klimaet på jorda endrar seg over tid, og drøfte kva endringane kan bety for menneske og natur',
    'undersøke korleis menneskeleg aktivitet har ført til endringar i naturen, og drøfte korleis ein kan ta vare på naturmangfaldet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-11-intro',
      type: 'text',
      content: `## Hvorfor er det tropisk varmt i Thailand og bitende kaldt på Svalbard?

Har du noen gang lurt på hvorfor noen steder på jorda er dekket av frodig regnskog, mens andre er karrige ørkener eller islagte tundraer? Svaret handler om **klima** — de langsiktige værmønstrene som bestemmer hvilke forhold som råder i et område.

Klima påvirker alt: hvor mennesker bor, hva de dyrker, hvilke dyr som lever der, og hvordan samfunnene er organisert. Bønder i Sahel-beltet i Afrika lever helt andre liv enn fiskere på norskekysten — i stor grad fordi klimaet er så forskjellig.

I dag står vi overfor en av de største utfordringene i menneskehetens historie: Klimaet endrer seg raskere enn det har gjort på tusenvis av år. Men hva er egentlig forskjellen mellom vær og klima? Hva bestemmer klimaet i et område? Og hva vet vi om klimaendringene?

I dette kapittelet skal du lære om:
- Forskjellen mellom vær og klima
- Jordens klimasoner og hva som bestemmer dem
- Naturlige og menneskeskapte faktorer som påvirker klimaet
- Klimaendringer — hva forskningen viser
- Konsekvenser og tilpasning`,
    },

    // ========== DEFINISJON: VÆR OG KLIMA ==========
    {
      id: 'samfunnsfag-10-11-def-1',
      type: 'definition',
      title: 'Vær og klima — hva er forskjellen?',
      content: `**Vær** er tilstanden i atmosfæren på et bestemt sted til en bestemt tid. Været kan endre seg fra time til time: Det kan være sol om morgenen og regn om ettermiddagen.

**Klima** er gjennomsnittsværet over en lengre periode — vanligvis minst 30 år. Klimaet forteller oss hva slags vær vi kan forvente i et område over tid.

**En enkel huskeregel:**
- Vær er det du opplever når du går ut døra i dag
- Klima er det du forventer basert på årstid og sted

**Eksempel:** Selv om det kan snø i Bergen en enkelt vårdag (vær), har Bergen et mildt og regnfullt klima med mye nedbør gjennom hele året (klima).

**Klimafaktorer** — det som bestemmer klimaet i et område:
- **Breddegrad:** Hvor langt nord eller sør for ekvator et sted ligger. Områder nær ekvator får mer direkte solstråling og er varmere.
- **Høyde over havet:** Temperaturen synker med omtrent 0,6 °C per 100 meter du stiger i høyden.
- **Nærhet til hav:** Havet lagrer varme og gir mildere vintre og kjøligere somre langs kysten (maritimt klima). Innlandsområder har større temperaturforskjeller (kontinentalt klima).
- **Havstrømmer:** Varme havstrømmer som Golfstrømmen gjør at norskekysten er mye mildere enn steder på samme breddegrad i Canada eller Russland.
- **Vindretning:** Vindmønstre transporterer varme og fuktighet og påvirker nedbør og temperatur.
- **Topografi:** Fjell kan stoppe regnbærende vinder og skape «regnskygge» — tørrere områder på lesiden av fjellet.`,
    },

    // ========== EKSEMPEL: GOLFSTRØMMEN ==========
    {
      id: 'samfunnsfag-10-11-example-1',
      type: 'example',
      title: 'Eksempel: Golfstrømmens betydning for Norge',
      problem: 'Tromsø i Nord-Norge ligger på 69° nord — nesten like langt nord som den canadiske byen Churchill i Manitoba. Hvorfor er gjennomsnittlig vintertemperatur i Tromsø rundt -4 °C, mens Churchill har -26 °C?',
      solution: `Svaret er **Golfstrømmen** (og dens forlengelse, Den nordatlantiske strømmen).

**Hva er Golfstrømmen?**
Golfstrømmen er en varm havstrøm som fører oppvarmet vann fra Mexicogolfen nordøstover over Atlanterhavet. Når dette varme vannet når norskekysten, avgir det varme til luften.

**Konsekvensene for Norge:**
- Norskekysten har **10-15 °C høyere** vintertemperatur enn steder på samme breddegrad uten havstrøm
- Havnene i Nord-Norge er **isfrie** hele vinteren, i motsetning til havner i Canada og Russland
- Nordvest-Europa generelt har et mye mildere klima enn andre områder like langt nord

**Hva ville skjedd uten Golfstrømmen?**
Uten Golfstrømmen ville store deler av Norge hatt et klima mer likt Nord-Canada eller Sibir. Landbruk ville vært svært vanskelig nord for Trondheim, og bosettingsmønsteret ville sett helt annerledes ut.

Denne sammenligningen viser hvor stor betydning havstrømmer har for klimaet — og dermed for menneskers liv og samfunn.`,
    },

    // ========== OPPGAVE 11.1 ==========
    {
      id: 'samfunnsfag-10-11-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-11-ex-1',
        number: '11.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom vær og klima?',
        options: [
          {
            id: 'a',
            text: 'Vær handler om temperatur, klima handler om nedbør',
            isCorrect: false,
            feedback: 'Feil. Både vær og klima omfatter temperatur, nedbør, vind og andre atmosfæriske forhold.',
          },
          {
            id: 'b',
            text: 'Vær er tilstanden i atmosfæren akkurat nå, klima er gjennomsnittsværet over minst 30 år',
            isCorrect: true,
            feedback: 'Riktig! Vær er det du opplever her og nå, mens klima er det typiske værmønsteret over lang tid.',
          },
          {
            id: 'c',
            text: 'Vær finnes bare i Norge, klima finnes bare ved ekvator',
            isCorrect: false,
            feedback: 'Feil. Alle steder på jorda har både vær (daglige forhold) og klima (langsiktige mønstre).',
          },
          {
            id: 'd',
            text: 'Vær og klima betyr det samme',
            isCorrect: false,
            feedback: 'Feil. De er beslektede begreper, men har helt forskjellig tidsperspektiv.',
          },
        ],
        solution: 'Vær er atmosfærens tilstand på et gitt sted til en gitt tid. Klima er gjennomsnittet av været over en lengre periode, vanligvis minst 30 år.',
      },
    },

    // ========== OPPGAVE 11.2 ==========
    {
      id: 'samfunnsfag-10-11-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-11-ex-2',
        number: '11.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Klimafaktorer bestemmer klimaet i et område.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med maritimt og kontinentalt klima, og gi et eksempel på hvert.',
            solution: 'Maritimt klima finnes langs kysten og kjennetegnes av milde vintre, kjølige somre og mye nedbør. Eksempel: Bergen. Kontinentalt klima finnes i innlandet og kjennetegnes av kalde vintre, varme somre og mindre nedbør. Eksempel: Røros eller Finnmarksvidda.',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor Tromsø har mildere vintre enn byer på samme breddegrad i Canada.',
            solution: 'Golfstrømmen (Den nordatlantiske strømmen) fører varmt vann fra sør mot norskekysten. Det varme vannet avgir varme til luften, og gir hele kysten av Norge 10-15 °C mildere vintertemperaturer enn tilsvarende breddegrader i Canada, som ikke har denne havstrømmen.',
          },
        ],
        hints: ['Tenk på hvordan havet påvirker temperaturen langs kysten.'],
        solution: 'Maritimt klima preges av havets utjevnende effekt, mens kontinentalt klima har større temperaturforskjeller. Golfstrømmen gjør norskekysten uvanlig mild.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KLIMASONER ==========
    {
      id: 'samfunnsfag-10-11-def-2',
      type: 'definition',
      title: 'Jordens klimasoner',
      content: `Jorda kan deles inn i ulike **klimasoner** basert på temperatur og nedbør. Det mest brukte klassifikasjonssystemet er utviklet av den tyske klimatologen **Wladimir Köppen**. Her er de viktigste sonene:

**1. Tropisk klima (0°-23,5° nord/sør)**
- Varmt hele året, gjennomsnittstemperatur over 18 °C alle måneder
- Mye nedbør — tropisk regnskog eller savanne
- Eksempler: Amazonas, Kongo-bassenget, Indonesia

**2. Tørt klima (subtropene og innlandsområder)**
- Lite nedbør — ørken eller steppe
- Store temperaturforskjeller mellom dag og natt
- Eksempler: Sahara, den arabiske halvøy, innlands-Australia

**3. Temperert klima (23,5°-66,5° nord/sør)**
- Fire tydelige årstider
- Moderat temperatur og nedbør
- Eksempler: Storbritannia, Sør-Norge, Japan

**4. Kaldt klima / borealt klima (høye breddegrader)**
- Kalde vintre, korte somre
- Stort område med barskog (taigaen)
- Eksempler: Nord-Skandinavia, Sibir, Nord-Canada

**5. Polart klima (over 66,5° nord/sør)**
- Svært kaldt hele året, gjennomsnittstemperatur under 10 °C i varmeste måned
- Permafrost og is
- Eksempler: Svalbard, Antarktis, Grønland

**Høydeklima** er en tilleggskategori som beskriver klimaet i fjellområder, der temperaturen synker med høyden uansett hvilken breddegrad man befinner seg på. Kilimanjaro i Tanzania ligger nær ekvator, men toppen er dekket av is.`,
    },

    // ========== EKSEMPEL: NORGE — MANGE KLIMASONER ==========
    {
      id: 'samfunnsfag-10-11-example-2',
      type: 'example',
      title: 'Eksempel: Norge — et land med mange klimatyper',
      problem: 'Norge strekker seg over 13 breddegrader fra Lindesnes i sør til Nordkapp i nord. Hvordan varierer klimaet i Norge, og hva forklarer variasjonene?',
      solution: `**Norges klimamangfold:**

**Vestlandet — maritimt klima:**
Bergen får over 2 000 mm nedbør i året. Milde vintre (sjelden under -5 °C), kjølige somre. Golfstrømmen og vestlige vinder fra Atlanterhavet bringer fuktighet.

**Østlandet — kontinentalt klima:**
Oslo har kaldere vintre og varmere somre enn Bergen. Mindre nedbør (ca. 760 mm/år). Fjellene skjermer mot fuktig vestlig luft.

**Innlands-Norge — kaldt kontinentalt:**
Røros har noen av Norges kaldeste vintertemperaturer (ned mot -50 °C er målt). Kort, intens sommer. Høyde over havet (628 m) forsterker kulden.

**Nord-Norge — borealt til arktisk:**
Tromsø har relativt mildt kystklima (takket være Golfstrømmen), men med mørketid og midnattssol. Finnmarksvidda har strengt innlandsklima med bitende kulde om vinteren.

**Svalbard — polart klima:**
Gjennomsnittstemperatur på -6 °C hele året. Permafrost og svært lite nedbør (egentlig en «arktisk ørken»).

**Hva forklarer variasjonene?**
- Breddegrad (sør–nord)
- Nærhet til havet (kyst–innland)
- Golfstrømmen (mildere enn forventet)
- Høyde over havet
- Fjell som skaper regnskygge

Norge er et godt eksempel på at klimafaktorer virker sammen og skaper stor variasjon selv innenfor ett land.`,
    },

    // ========== OPPGAVE 11.3 ==========
    {
      id: 'samfunnsfag-10-11-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-11-ex-3',
        number: '11.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken klimasone kjennetegnes av varme og fuktighet hele året, med gjennomsnittstemperatur over 18 °C i alle måneder?',
        options: [
          {
            id: 'a',
            text: 'Temperert klima',
            isCorrect: false,
            feedback: 'Feil. Temperert klima har fire tydelige årstider med kjølige vintre.',
          },
          {
            id: 'b',
            text: 'Tropisk klima',
            isCorrect: true,
            feedback: 'Riktig! Tropisk klima finnes nær ekvator og kjennetegnes av varme og ofte mye nedbør hele året.',
          },
          {
            id: 'c',
            text: 'Tørt klima',
            isCorrect: false,
            feedback: 'Feil. Tørt klima kan være varmt, men kjennetegnes av lite nedbør, ikke fuktighet.',
          },
          {
            id: 'd',
            text: 'Borealt klima',
            isCorrect: false,
            feedback: 'Feil. Borealt klima finnes på høye breddegrader og har kalde vintre.',
          },
        ],
        solution: 'Tropisk klima finnes mellom 0° og 23,5° nord/sør for ekvator. Det kjennetegnes av jevn varme hele året og ofte rikelig nedbør.',
      },
    },

    // ========== DEFINISJON: KLIMAENDRINGER ==========
    {
      id: 'samfunnsfag-10-11-def-3',
      type: 'definition',
      title: 'Klimaendringer — naturlige og menneskeskapte',
      content: `**Klimaendringer** betyr at klimaet endrer seg over tid. Klimaet på jorda har alltid variert naturlig, men det vi opplever nå skiller seg ut i tempo og årsak.

**Naturlige klimavariasjoner** har alltid forekommet:
- **Istider og mellomistider:** Sykliske endringer i jordens bane rundt sola (Milankovitch-sykler) har ført til veksling mellom istider og varmere perioder over hundretusenvis av år.
- **Vulkanutbrudd:** Store utbrudd kan sende partikler inn i atmosfæren som reflekterer sollys og kjøler ned jorda i noen år.
- **Solaktivitet:** Små variasjoner i solens energiutstråling påvirker klimaet over tid.

**Menneskeskapte klimaendringer (den forsterka drivhuseffekten):**
**Drivhuseffekten** er en naturlig prosess der gasser i atmosfæren (som CO₂, metan og vanndamp) holder på varme fra sola og gjør jorda beboelig. Uten drivhuseffekten ville gjennomsnittstemperaturen på jorda vært rundt -18 °C.

Problemet oppstår når mennesker øker mengden drivhusgasser i atmosfæren gjennom:
- **Forbrenning av fossile brensler** (kull, olje, gass) til energi og transport
- **Avskoging** — trær som absorberer CO₂ fjernes
- **Landbruk** — husdyrhold og rismarker produserer metan
- **Industri** — ulike prosesser slipper ut klimagasser

**Hva forskningen viser:**
FNs klimapanel (IPCC) samler og vurderer all tilgjengelig forskning om klimaendringer. Deres konklusjon er at den globale oppvarmingen vi observerer i nyere tid i hovedsak skyldes menneskelig aktivitet. Den globale gjennomsnittstemperaturen har steget med omtrent 1,1 °C siden førindustriell tid, og hastigheten på oppvarmingen er uten sidestykke i de siste 2000 årene.`,
    },

    // ========== OPPGAVE 11.4 ==========
    {
      id: 'samfunnsfag-10-11-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-11-ex-4',
        number: '11.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Klimaendringer — årsaker og konsekvenser.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom den naturlige drivhuseffekten og den forsterka drivhuseffekten.',
            solution: 'Den naturlige drivhuseffekten er en nødvendig prosess der gasser i atmosfæren holder på varme fra sola og gjør jorda beboelig (uten den ville det vært -18 °C). Den forsterka drivhuseffekten oppstår når menneskelig aktivitet øker mengden drivhusgasser i atmosfæren (gjennom forbrenning av fossil energi, avskoging m.m.), slik at mer varme holdes tilbake og temperaturen stiger ut over det naturlige nivået.',
          },
          {
            label: 'b',
            task: 'Nevn tre menneskelige aktiviteter som bidrar til økt utslipp av drivhusgasser, og forklar kort hvorfor.',
            solution: '1) Forbrenning av fossile brensler (kull, olje, gass) til energi og transport slipper ut CO₂. 2) Avskoging fjerner trær som absorberer CO₂ fra atmosfæren. 3) Husdyrhold (særlig storfe) produserer store mengder metan, som er en kraftig drivhusgass.',
          },
        ],
        hints: ['Husk at drivhuseffekten i seg selv er en naturlig og nødvendig prosess.'],
        solution: 'Den naturlige drivhuseffekten gjør jorda levelig. Den forsterka drivhuseffekten skyldes økt utslipp av drivhusgasser fra menneskelig aktivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: KONSEKVENSER ==========
    {
      id: 'samfunnsfag-10-11-konsekvenser',
      type: 'text',
      content: `## Konsekvenser av klimaendringer

Klimaendringer påvirker natur og samfunn over hele verden. Her er noen av de viktigste konsekvensene forskere observerer og forventer:

### Stigende havnivå
Når temperaturen stiger, smelter isbreer og innlandsis (særlig på Grønland og i Antarktis), og havvannet utvider seg fordi varmt vann tar mer plass enn kaldt. Havnivået har steget med omtrent 20 cm siden 1900, og tempoet øker. Lavtliggende kystområder og øystater som Tuvalu og Maldivene er spesielt utsatt.

### Mer ekstremvær
Varmere atmosfære inneholder mer fuktighet, noe som kan gi kraftigere nedbør og flere flommer. Varmebølger blir hyppigere og mer intense. Tørkeperioder blir lengre i allerede tørre områder.

### Endringer i økosystemer
Arter flyttes nordover eller høyere opp. Korallrev blekes og dør. Arktisk sjøis smelter, noe som truer arter som isbjørn. Vekstsesongen endres, noe som påvirker landbruket.

### Konsekvenser for mennesker
- **Matproduksjon:** Endret klima påvirker avlinger. Noen områder kan få bedre vekstforhold, mens andre kan bli for tørre eller for varme.
- **Helse:** Hetebølger kan være dødelige. Sykdommer kan spre seg til nye områder. Luftforurensning kan forverres.
- **Migrasjon:** Mennesker som mister levebrødet sitt på grunn av tørke, flom eller stigende hav kan bli tvunget til å flytte — såkalte klimaflyktninger.
- **Konflikt:** Kampen om knappe ressurser som vann og dyrkbar jord kan forsterke konflikter.

### Konsekvenser for Norge
Også i Norge merkes endringene. Vintrene har blitt mildere, breene krymper, og det er mer kraftig nedbør. Flomrisikoen øker i noen områder, og skredfare kan bli vanligere. Samtidig kan vekstsesongen bli lengre, noe som kan være gunstig for landbruket i noen deler av landet.`,
    },

    // ========== OPPGAVE 11.5 ==========
    {
      id: 'samfunnsfag-10-11-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-11-ex-5',
        number: '11.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Konsekvenser av klimaendringer rammer ulikt.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor fattige land ofte er mer sårbare for klimaendringer enn rike land.',
            solution: 'Fattige land har mindre ressurser til å tilpasse seg: svakere infrastruktur, mindre kapital til å bygge flomvern eller irrigasjonssystemer, dårligere helsevesen, og en større andel av befolkningen er avhengig av landbruk som er direkte avhengig av klimaet. I tillegg ligger mange fattige land i tropiske områder som rammes hardest.',
          },
          {
            label: 'b',
            task: 'Gi to eksempler på hvordan klimaendringer allerede merkes i Norge.',
            solution: 'Eksempler: 1) Breene krymper — Jostedalsbreen og Nigardsbreen har trukket seg tilbake. 2) Kraftigere nedbør fører til økt flom- og skredrisiko, som flommen i Skjåk 2018 og uværet Hans i 2023. Andre eksempler: mildere vintre, endret snøgrense, lengre vekstsesong.',
          },
        ],
        hints: ['Tenk på forskjellen i ressurser og infrastruktur mellom rike og fattige land.'],
        solution: 'Klimaendringene rammer hardest der folk har minst ressurser til å tilpasse seg. Dette reiser viktige spørsmål om global rettferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 11.6 ==========
    {
      id: 'samfunnsfag-10-11-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-11-ex-6',
        number: '11.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er FNs klimapanel (IPCC)?',
        options: [
          {
            id: 'a',
            text: 'En miljøorganisasjon som demonstrerer mot klimaendringer',
            isCorrect: false,
            feedback: 'Feil. IPCC er ikke en aktivistorganisasjon, men et vitenskapelig organ.',
          },
          {
            id: 'b',
            text: 'Et panel som samler og vurderer all tilgjengelig forskning om klimaendringer',
            isCorrect: true,
            feedback: 'Riktig! IPCC driver ikke egen forskning, men sammenstiller og vurderer eksisterende forskning fra hele verden.',
          },
          {
            id: 'c',
            text: 'Et selskap som selger klimateknologi',
            isCorrect: false,
            feedback: 'Feil. IPCC er et mellomstatlig vitenskapelig organ under FN.',
          },
          {
            id: 'd',
            text: 'En norsk organisasjon som måler temperaturen',
            isCorrect: false,
            feedback: 'Feil. IPCC er internasjonalt og sammenstiller forskning — de gjør ikke egne målinger.',
          },
        ],
        solution: 'FNs klimapanel (IPCC) er et mellomstatlig vitenskapelig organ som sammenstiller og vurderer all tilgjengelig forskning om klimaendringer.',
      },
    },

    // ========== OPPGAVE 11.7 ==========
    {
      id: 'samfunnsfag-10-11-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-11-ex-7',
        number: '11.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Klimatilpasning og klimapolitikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom klimatilpasning og utslippsreduksjon (klimatiltak). Gi et eksempel på hver.',
            solution: 'Utslippsreduksjon handler om å redusere mengden drivhusgasser som slippes ut, for eksempel ved å erstatte fossil energi med fornybar energi. Klimatilpasning handler om å forberede seg på konsekvensene av klimaendringene som allerede skjer, for eksempel ved å bygge sterkere flomvern langs elver.',
          },
          {
            label: 'b',
            task: 'Parisavtalen fra 2015 er en internasjonal klimaavtale. Hva er hovedmålet med avtalen?',
            solution: 'Hovedmålet er å begrense den globale oppvarmingen til godt under 2 °C sammenlignet med førindustrielt nivå, og helst prøve å begrense den til 1,5 °C. Landene har forpliktet seg til å lage nasjonale klimaplaner og rapportere om utslippene sine.',
          },
        ],
        hints: ['Tenk på hva vi kan gjøre for å redusere problemet vs. tilpasse oss konsekvensene.'],
        solution: 'Klimapolitikk handler om både å redusere utslipp (forebygging) og å tilpasse seg endringene som allerede skjer (tilpasning). Begge deler er nødvendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-11-oppsummering',
      type: 'text',
      content: `## Oppsummering: Klima og klimasoner

**Vær** er atmosfærens tilstand her og nå, mens **klima** er gjennomsnittsværet over minst 30 år.

**Nøkkelbegreper:**
- **Klimafaktorer:** Breddegrad, høyde over havet, nærhet til hav, havstrømmer, vindretning og topografi
- **Klimasoner:** Tropisk, tørt, temperert, borealt (kaldt) og polart klima
- **Maritimt klima:** Mildt, jevnt og fuktig — kystområder
- **Kontinentalt klima:** Store temperaturforskjeller, mindre nedbør — innlandet
- **Golfstrømmen:** Varm havstrøm som gjør norskekysten uvanlig mild
- **Drivhuseffekten:** Naturlig prosess som holder på varme i atmosfæren
- **Forsterka drivhuseffekt:** Økt mengde drivhusgasser fra menneskelig aktivitet
- **FNs klimapanel (IPCC):** Sammenstiller og vurderer global klimaforskning
- **Parisavtalen:** Internasjonal avtale om å begrense global oppvarming
- **Klimatilpasning:** Å forberede seg på konsekvenser av klimaendringer`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-11-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-11-ex-8',
        number: '11.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Klimaendringer og rettferdighet.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar kort hva som menes med at klimaendringer er et rettferdighetsproblem.',
            solution: 'De landene som har bidratt mest til klimautslippene historisk (rike industriland), rammes ofte minst av konsekvensene. De fattigste landene, som har bidratt minst til problemet, rammes hardest fordi de mangler ressurser til tilpasning. Også fremtidige generasjoner vil bære konsekvensene av dagens utslipp.',
          },
          {
            label: 'b',
            task: 'Drøft: Bør rike land som Norge ta et større ansvar for å løse klimaproblemene? Presenter argumenter for og mot, og gi din vurdering.',
            solution: 'For: Historisk ansvar for utslipp, har ressurser og teknologi til omstilling, moralsk plikt. Mot: Norges utslipp er små i global sammenheng, alle land må bidra, kan svekke norsk økonomi. En god drøfting veier argumentene og gir en begrunnet egen vurdering.',
          },
        ],
        hints: ['Tenk på forskjellen mellom historisk ansvar og nåværende utslipp.'],
        solution: 'Klimaendringer reiser viktige spørsmål om global rettferdighet — hvem har ansvaret, hvem rammes, og hvordan bør byrdene fordeles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vær', definition: 'Tilstanden i atmosfæren på et bestemt sted til en bestemt tid.' },
    { term: 'Klima', definition: 'Gjennomsnittsværet i et område over minst 30 år.' },
    { term: 'Klimasone', definition: 'Geografisk område med et bestemt klimamønster, f.eks. tropisk, temperert eller polart.' },
    { term: 'Maritimt klima', definition: 'Klima preget av havets utjevnende effekt — milde vintre, kjølige somre, mye nedbør.' },
    { term: 'Kontinentalt klima', definition: 'Innlandsklima med store temperaturforskjeller mellom sommer og vinter.' },
    { term: 'Drivhuseffekten', definition: 'Naturlig prosess der gasser i atmosfæren holder på varme fra sola.' },
    { term: 'Forsterka drivhuseffekt', definition: 'Økt oppvarming forårsaket av menneskelig utslipp av drivhusgasser.' },
    { term: 'FNs klimapanel (IPCC)', definition: 'Mellomstatlig organ som sammenstiller og vurderer forskning om klimaendringer.' },
    { term: 'Parisavtalen', definition: 'Internasjonal avtale (2015) om å begrense global oppvarming til under 2 °C.' },
    { term: 'Klimatilpasning', definition: 'Tiltak for å forberede samfunn på konsekvenser av klimaendringer.' },
  ],
};

// ============================================================================
// KAPITTEL 12: Naturressurser og forvaltning
// LK20: Utforske korleis teknologi har vore og er ein endringsfaktor i
//        samfunnet, og drøfte korleis dette påverkar arbeidsliv og levekår
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_12: TextbookChapter = {
  id: 'samfunnsfag-10-12',
  courseId: 'samfunnsfag-10',
  chapterNumber: '12',
  title: 'Naturressurser og forvaltning',
  description: 'Lær om ulike typer naturressurser, hvordan de forvaltes, fornybare og ikke-fornybare ressurser, og dilemmaer knyttet til ressursbruk.',
  estimatedMinutes: 90,
  competenceGoals: [
    'undersøke korleis menneskeleg aktivitet har ført til endringar i naturen, og drøfte korleis ein kan ta vare på naturmangfaldet',
    'utforske og presentere ei aktuell samfunnsfagleg problemstilling og drøfte ulike løysingsforslag',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-12-intro',
      type: 'text',
      content: `## Alt vi bruker kommer fra naturen

Telefonen du holder i hånden inneholder sjeldne metaller utvunnet fra gruver i Kongo. Klærne dine er kanskje laget av bomull fra India eller syntetiske stoffer fra olje. Maten du spiste i dag er dyrket i jord, fanget i havet eller hentet fra dyr som har beitet på gress.

**Naturressurser** er grunnlaget for alt menneskelig liv og all økonomisk aktivitet. Likevel glemmer vi ofte hvor avhengige vi er av naturen — fordi vi er vant til at det meste er tilgjengelig i butikken eller på nettet.

Men naturressursene er ikke uendelige. Noen av dem fornyer seg selv (som skog og fisk), mens andre er begrenset og vil ta slutt en dag (som olje og mineraler). Hvordan vi bruker og forvalter disse ressursene, bestemmer ikke bare vår egen fremtid, men også fremtiden til kommende generasjoner.

I dette kapittelet skal du lære om:
- Hva naturressurser er og hvordan de klassifiseres
- Forskjellen mellom fornybare og ikke-fornybare ressurser
- Norges viktigste naturressurser
- Bærekraftig forvaltning og ressursforbannelsen
- Dilemmaer og konflikter knyttet til ressursbruk`,
    },

    // ========== DEFINISJON: NATURRESSURSER ==========
    {
      id: 'samfunnsfag-10-12-def-1',
      type: 'definition',
      title: 'Naturressurser — fornybare og ikke-fornybare',
      content: `**Naturressurser** er materialer, stoffer og energi fra naturen som mennesker bruker for å dekke sine behov. De deles inn i to hovedkategorier:

**Fornybare ressurser** kan fornye seg selv innenfor en menneskelig tidshorisont — forutsatt at de forvaltes riktig:
- **Biologiske ressurser:** Skog, fisk, jord, planter, dyr
- **Energiressurser:** Vannkraft, vindkraft, solenergi, bølgekraft, geotermisk energi
- **Vann:** Ferskvann i elver, innsjøer og grunnvann

**Ikke-fornybare ressurser** finnes i en begrenset mengde og kan ikke erstattes innenfor menneskelig tid:
- **Fossile brensler:** Olje, naturgass, kull — dannet over millioner av år
- **Mineraler og metaller:** Jernmalm, kobber, gull, sjeldne jordarter, litium
- **Fosfor:** Viktig for gjødsel, men begrenset tilgang

**Viktig prinsipp:** Selv fornybare ressurser kan overutnyttes. Hvis vi fisker mer enn bestanden klarer å reprodusere, kollapser fiskebestanden. Hvis vi hogger skog raskere enn den vokser tilbake, forsvinner skogen. Fornybar betyr altså **potensielt** fornybar — bare hvis vi forvalter den riktig.

**Betinget fornybare ressurser** er en mellomkategori. Jord er et eksempel: Erosjon kan fjerne matjord mye raskere enn naturen bygger den opp igjen (det tar flere hundre år å danne et tynt lag med ny matjord).`,
    },

    // ========== EKSEMPEL: TORSKEBESTANDEN ==========
    {
      id: 'samfunnsfag-10-12-example-1',
      type: 'example',
      title: 'Eksempel: Da torsken kollapset — og kom tilbake',
      problem: 'I 1992 kollapset torskebestanden utenfor Newfoundland i Canada, og 40 000 mennesker mistet jobben over natten. Hva gikk galt, og hva kan vi lære av det?',
      solution: `**Historien om torsken ved Newfoundland:**

I hundrevis av år var Grand Banks utenfor Newfoundland et av verdens rikeste fiskefelt. Torsken var så tallrik at man nesten kunne gå på den.

**Hva gikk galt:**
- Fra 1950-tallet ble fisket industrialisert med store trålere som kunne fange enorme mengder
- Kvotene ble satt for høyt — politikerne prioriterte arbeidsplasser i fiskeindustrien
- Advarsler fra forskere ble ignorert eller underkommunisert
- Bestanden ble fisket ned til kritisk lave nivåer

**Konsekvensene:**
- I 1992 ble fisket stengt helt — et moratorium
- 40 000 fiskere og fiskearbeidere mistet levebrødet
- Hele lokalsamfunn ble lagt øde
- Over 30 år senere har bestanden fortsatt ikke hentet seg helt inn

**Hva kan vi lære?**
- Fornybare ressurser er bare fornybare hvis de forvaltes bærekraftig
- Kortsiktig profitt kan gi langsiktig katastrofe
- Vitenskapelige advarsler bør tas alvorlig
- Økosystemer kan nå et «vippepunkt» der skaden er vanskelig å reversere

**Norsk suksess:**
Norge har håndtert sine fiskebestander bedre, blant annet gjennom strenge kvoter basert på vitenskapelige råd fra Havforskningsinstituttet. Den norsk-arktiske torskebestanden er i dag blant verdens best forvaltede.`,
    },

    // ========== OPPGAVE 12.1 ==========
    {
      id: 'samfunnsfag-10-12-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-12-ex-1',
        number: '12.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er en ikke-fornybar naturressurs?',
        options: [
          {
            id: 'a',
            text: 'Vindkraft',
            isCorrect: false,
            feedback: 'Feil. Vind er en fornybar energikilde som ikke brukes opp.',
          },
          {
            id: 'b',
            text: 'Fisk',
            isCorrect: false,
            feedback: 'Feil. Fisk er en fornybar ressurs fordi bestanden reproduserer seg — forutsatt bærekraftig forvaltning.',
          },
          {
            id: 'c',
            text: 'Olje',
            isCorrect: true,
            feedback: 'Riktig! Olje er dannet over millioner av år og finnes i begrenset mengde. Når den er brukt opp, kan den ikke erstattes.',
          },
          {
            id: 'd',
            text: 'Skog',
            isCorrect: false,
            feedback: 'Feil. Skog er en fornybar ressurs fordi trær vokser opp igjen — forutsatt at den forvaltes riktig.',
          },
        ],
        solution: 'Olje er en ikke-fornybar ressurs fordi den er dannet over millioner av år av organisk materiale under høyt trykk og temperatur.',
      },
    },

    // ========== OPPGAVE 12.2 ==========
    {
      id: 'samfunnsfag-10-12-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-12-ex-2',
        number: '12.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fornybare og ikke-fornybare ressurser.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar med egne ord hva som menes med at en ressurs er «fornybar». Hvorfor er det viktig å legge til «forutsatt riktig forvaltning»?',
            solution: 'En fornybar ressurs kan fornye seg selv naturlig — for eksempel vokser trær opp igjen og fisk reproduserer seg. Men tillegget «forutsatt riktig forvaltning» er viktig fordi overutnyttelse kan ødelegge ressursen. Eksempel: Torsken ved Newfoundland ble fisket til bestanden kollapset. Ressursen var fornybar, men ble ikke forvaltet bærekraftig.',
          },
          {
            label: 'b',
            task: 'Gi to eksempler på fornybare og to eksempler på ikke-fornybare naturressurser som er viktige for Norge.',
            solution: 'Fornybare: Vannkraft (Norges viktigste energikilde), fisk (stor eksportnæring). Ikke-fornybare: Olje og naturgass fra Nordsjøen/Norskehavet (Norges desidert viktigste eksportinntekt), mineraler som jernmalm.',
          },
        ],
        hints: ['Tenk på hva som skjer hvis vi bruker mer enn naturen klarer å fornye.'],
        solution: 'Fornybare ressurser kan fornye seg selv, men kan overutnyttes. Ikke-fornybare ressurser finnes i begrenset mengde og tar slutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: NORGES RESSURSER ==========
    {
      id: 'samfunnsfag-10-12-def-2',
      type: 'definition',
      title: 'Norges viktigste naturressurser',
      content: `Norge er et ressursrikt land. Her er de viktigste naturressursene og deres betydning:

**Olje og gass (ikke-fornybar)**
Olje ble oppdaget i Nordsjøen i 1969 (Ekofisk-feltet), og har siden gjort Norge til et av verdens rikeste land. Inntektene fra petroleumsindustrien har finansiert velferdsstaten og fylt opp **Statens pensjonsfond utland** (Oljefondet), som er verdens største statlige investeringsfond.

**Vannkraft (fornybar)**
Norge produserer nesten all sin elektrisitet fra vannkraft — omtrent 90 %. De mange elvene, fossene og fjellsjøene gir Norge en unik energiressurs. Vannkraften gjør at norsk kraftproduksjon har svært lave klimagassutslipp.

**Fisk og sjømat (fornybar)**
Fiskeri og havbruk (oppdrett av laks) er en av Norges viktigste eksportnæringer. Norsk laks selges over hele verden, og sjømateksporten er den nest viktigste eksportnæringen etter olje og gass.

**Skog (fornybar)**
Omtrent 37 % av Norges landareal er dekket av skog. Skogen gir tømmer, papir og bioenergi, og binder CO₂ fra atmosfæren.

**Mineraler og metaller (ikke-fornybar)**
Norge har forekomster av jernmalm, titanmalm, kvarts og andre mineraler. Det finnes også forekomster av sjeldne jordarter og mineraler som er viktige for batteriproduksjon og grønn teknologi.

**Vind og sol (fornybar)**
Norge har gode vindressurser, særlig langs kysten og til havs. Vindkraft er en voksende energikilde, men utbygging er omdiskutert.`,
    },

    // ========== EKSEMPEL: OLJEFONDET ==========
    {
      id: 'samfunnsfag-10-12-example-2',
      type: 'example',
      title: 'Eksempel: Oljefondet — fra olje til finansiell trygghet',
      problem: 'Norge har valgt å spare store deler av oljeinntektene i et fond i stedet for å bruke dem med en gang. Hvorfor, og hva betyr det?',
      solution: `**Statens pensjonsfond utland (Oljefondet):**

Da Norge fant olje, bestemte politikerne seg for å ikke bruke alle pengene med en gang. I stedet ble det i 1990 opprettet et fond der oljeinntektene spares og investeres.

**Hvorfor spare i stedet for å bruke?**
- Oljen tar slutt en dag — fondet skal sikre velferden for fremtidige generasjoner
- Å bruke for mye oljepenger i norsk økonomi kan føre til inflasjon og «hollandsk syke» (at andre næringer taper konkurransekraft)
- **Handlingsregelen** sier at staten bare skal bruke den forventede avkastningen av fondet (anslått til 3 % årlig), ikke fondet i seg selv

**Fondets størrelse:**
Fondet er i dag verdt over 17 000 milliarder kroner, noe som gjør det til verdens største statlige investeringsfond. Det eier aksjer i over 9 000 selskaper verden over.

**Hva kan vi lære?**
Norge regnes som et eksempel på god ressursforvaltning. Mange oljerike land har opplevd «ressursforbannelsen» — at naturressurser fører til korrupsjon, ulikhet og konflikt i stedet for velstand for alle. Norge har unngått dette gjennom demokratisk styring, åpenhet og langsiktig tenkning.

**Dilemma:** Fondet investerer i selskaper over hele verden. Noen mener det bør trekke seg ut av selskaper som bidrar til klimaendringer. Andre mener fondet kan påvirke mer ved å forbli som eier og stille krav.`,
    },

    // ========== OPPGAVE 12.3 ==========
    {
      id: 'samfunnsfag-10-12-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-12-ex-3',
        number: '12.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedgrunnen til at Norge opprettet Oljefondet i stedet for å bruke alle oljeinntektene med en gang?',
        options: [
          {
            id: 'a',
            text: 'Fordi Norge ikke trengte pengene',
            isCorrect: false,
            feedback: 'Feil. Norge har alltid kunnet bruke pengene, men valgte bevisst å spare for fremtiden.',
          },
          {
            id: 'b',
            text: 'For å sikre velferden for fremtidige generasjoner og unngå overoppheting av norsk økonomi',
            isCorrect: true,
            feedback: 'Riktig! Oljen tar slutt en dag, og fondet sikrer at også fremtidige generasjoner nyter godt av inntektene. Handlingsregelen hindrer overoppheting av økonomien.',
          },
          {
            id: 'c',
            text: 'Fordi det var ulovlig å bruke oljeinntektene i Norge',
            isCorrect: false,
            feedback: 'Feil. Det var et politisk valg, ikke et juridisk forbud.',
          },
          {
            id: 'd',
            text: 'Fordi andre land tvang Norge til å spare',
            isCorrect: false,
            feedback: 'Feil. Opprettelsen av fondet var Norges eget politiske valg.',
          },
        ],
        solution: 'Oljefondet ble opprettet for å sikre langsiktig velstand. Handlingsregelen sier at staten bare skal bruke den forventede avkastningen, ikke fondet i seg selv.',
      },
    },

    // ========== DEFINISJON: BÆREKRAFTIG FORVALTNING ==========
    {
      id: 'samfunnsfag-10-12-def-3',
      type: 'definition',
      title: 'Bærekraftig forvaltning',
      content: `**Bærekraftig forvaltning** betyr å bruke naturressursene på en måte som dekker dagens behov uten å ødelegge grunnlaget for fremtidige generasjoner. Begrepet bygger på **Brundtland-kommisjonens** definisjon fra 1987:

«En utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for at kommende generasjoner skal få dekket sine behov.»

**Tre dimensjoner av bærekraft:**

**1. Økologisk bærekraft:**
Naturen må ikke overbelastes. Vi må ikke ta ut mer enn naturen klarer å fornye, og vi må ikke slippe ut mer forurensning enn naturen kan håndtere.

**2. Økonomisk bærekraft:**
Økonomien må fungere over tid uten å tære på ressursgrunnlaget. Kortsiktig profitt som ødelegger ressursene er ikke bærekraftig.

**3. Sosial bærekraft:**
Godene og byrdene av ressursbruken må fordeles rettferdig — både mellom land og mellom generasjoner.

**Ressursforbannelsen:**
Paradoksalt nok fører rikdom på naturressurser ikke alltid til velstand. I mange land har olje, gass eller mineraler ført til:
- Korrupsjon og maktkonsentrasjon
- Økonomisk avhengighet av én ressurs
- Voldelige konflikter om kontroll over ressursene
- Miljøødeleggelser uten at lokalbefolkningen får del i inntektene

Eksempler på land som har opplevd elementer av ressursforbannelsen er Nigeria, Venezuela og Den demokratiske republikken Kongo.`,
    },

    // ========== OPPGAVE 12.4 ==========
    {
      id: 'samfunnsfag-10-12-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-12-ex-4',
        number: '12.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bærekraftig forvaltning handler om å balansere ulike hensyn.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar de tre dimensjonene av bærekraft (økologisk, økonomisk og sosial) med egne ord.',
            solution: 'Økologisk bærekraft: Naturen må ikke overbelastes — vi må bruke ressursene i et tempo som gjør at de kan fornye seg. Økonomisk bærekraft: Næringslivet og økonomien må kunne fungere over tid uten å tære på naturgrunnlaget. Sosial bærekraft: Godene og byrdene må fordeles rettferdig — både mellom rike og fattige land, og mellom oss og fremtidige generasjoner.',
          },
          {
            label: 'b',
            task: 'Forklar hva som menes med «ressursforbannelsen» og gi et eksempel.',
            solution: 'Ressursforbannelsen betyr at land med store naturressurser paradoksalt nok ofte ikke oppnår velstand for alle, men i stedet opplever korrupsjon, konflikter og ulikhet. Eksempel: Nigeria har enorme oljereserver, men korrupsjon og konflikter har gjort at store deler av befolkningen lever i fattigdom, mens en liten elite kontrollerer oljeinntektene.',
          },
        ],
        hints: ['Tenk på hvorfor Norge har lyktes bedre enn mange andre oljerike land.'],
        solution: 'Bærekraftig forvaltning balanserer økologiske, økonomiske og sosiale hensyn. Ressursforbannelsen viser at naturrikdom alene ikke sikrer velstand.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 12.5 ==========
    {
      id: 'samfunnsfag-10-12-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-12-ex-5',
        number: '12.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Energiomstilling og dilemmaer.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med «energiomstilling», og hvorfor diskuteres den i Norge?',
            solution: 'Energiomstilling betyr å gå fra fossil energi (olje, gass, kull) til fornybar energi (vind, sol, vannkraft). I Norge diskuteres dette fordi landet er en stor olje- og gassprodusent, men samtidig har forpliktet seg til å kutte klimautslipp gjennom Parisavtalen. Dilemmaet er balansen mellom økonomi og klima.',
          },
          {
            label: 'b',
            task: 'Drøft kort: Bør Norge slutte å lete etter nye olje- og gassfelt? Presenter ett argument for og ett mot.',
            solution: 'For å slutte: Nye felt låser oss inn i fossil energi i tiår framover og gjør det vanskeligere å nå klimamålene. Mot å slutte: Olje og gass gir store inntekter til velferdsstaten, arbeidsplasser, og verden trenger energi i overgangsperioden. En god besvarelse presenterer argumentene balansert.',
          },
        ],
        hints: ['Prøv å se saken fra ulike perspektiver — økonomi, klima, arbeidsplasser og global rettferdighet.'],
        solution: 'Energiomstillingen innebærer krevende avveininger mellom økonomi, arbeidsplasser og klimahensyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 12.6 ==========
    {
      id: 'samfunnsfag-10-12-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-12-ex-6',
        number: '12.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en betinget fornybar ressurs?',
        options: [
          {
            id: 'a',
            text: 'En ressurs som aldri kan brukes opp, uansett hva vi gjør',
            isCorrect: false,
            feedback: 'Feil. Ingen ressurs er helt umulig å bruke opp ved misforvaltning.',
          },
          {
            id: 'b',
            text: 'En ressurs som kan fornye seg, men som kan ødelegges permanent ved overutnyttelse',
            isCorrect: true,
            feedback: 'Riktig! Matjord er et godt eksempel — den bygges opp over hundrevis av år, men kan eroderes bort på kort tid ved feil bruk.',
          },
          {
            id: 'c',
            text: 'En ressurs som bare finnes i noen få land',
            isCorrect: false,
            feedback: 'Feil. «Betinget fornybar» handler om fornybarheten, ikke om geografisk fordeling.',
          },
          {
            id: 'd',
            text: 'En ressurs som er fornybar bare om vinteren',
            isCorrect: false,
            feedback: 'Feil. Det handler om forvaltningsmåte, ikke årstid.',
          },
        ],
        solution: 'Betinget fornybare ressurser kan fornye seg, men prosessen tar svært lang tid. Ved overforbruk kan de bli permanent ødelagt — som matjord som eroderer bort.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-12-oppsummering',
      type: 'text',
      content: `## Oppsummering: Naturressurser og forvaltning

Naturressurser er grunnlaget for alt menneskelig liv og all økonomisk aktivitet. God forvaltning er avgjørende.

**Nøkkelbegreper:**
- **Naturressurser:** Materialer, stoffer og energi fra naturen som mennesker bruker
- **Fornybare ressurser:** Ressurser som kan fornye seg selv (skog, fisk, vannkraft)
- **Ikke-fornybare ressurser:** Ressurser som finnes i begrenset mengde (olje, mineraler)
- **Betinget fornybare ressurser:** Ressurser som kan ødelegges permanent ved overbruk (matjord)
- **Bærekraftig forvaltning:** Bruke ressursene uten å ødelegge for fremtidige generasjoner
- **Brundtland-kommisjonen:** FN-kommisjon (1987) som definerte bærekraftig utvikling
- **Oljefondet:** Norges sparefond for oljeinntekter — verdens største statlige investeringsfond
- **Handlingsregelen:** Staten skal bare bruke den forventede avkastningen av Oljefondet
- **Ressursforbannelsen:** At naturressursrikdom paradoksalt kan føre til korrupsjon og konflikter
- **Energiomstilling:** Overgangen fra fossil til fornybar energi`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'samfunnsfag-10-12-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-12-ex-7',
        number: '12.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Norges forvaltning av oljeressursene med et annet oljerikt land (f.eks. Nigeria, Venezuela eller Saudi-Arabia).',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort hvordan oljeinntektene forvaltes i det landet du velger.',
            solution: 'Svaret bør beskrive hvem som kontrollerer oljeinntektene, om det finnes sparefond, og hvordan pengene brukes. For eksempel: I Nigeria kontrolleres oljeressursene av staten og internasjonale selskaper, men korrupsjon har ført til at mye av inntektene forsvinner og lokalbefolkningen i oljeområdene lever i fattigdom.',
          },
          {
            label: 'b',
            task: 'Hva er de viktigste forskjellene mellom Norge og det landet du valgte?',
            solution: 'Mulige forskjeller: Demokratisk styring vs. maktkonsentrasjon, Oljefondet vs. direkte forbruk, åpenhet vs. korrupsjon, stabil rettsstat vs. svake institusjoner, velferd for alle vs. ulikhet. Norge har unngått ressursforbannelsen takket være allerede sterke demokratiske institusjoner da oljen ble funnet.',
          },
          {
            label: 'c',
            task: 'Hva tror du er den viktigste grunnen til at Norge har lyktes bedre enn mange andre oljerike land?',
            solution: 'En god besvarelse peker på at Norge allerede hadde velfungerende demokratiske institusjoner, en rettsstat, fri presse og lav korrupsjon da oljen ble funnet. Det var altså ikke oljen som skapte det gode styresettet — det gode styresettet var en forutsetning for god oljeforvaltning.',
          },
        ],
        hints: ['Tenk på sammenhengen mellom styringsform og ressursforvaltning.'],
        solution: 'Norges suksess med oljeforvaltning skyldes i stor grad demokratiske institusjoner som eksisterte før oljen ble funnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Naturressurser', definition: 'Materialer, stoffer og energi fra naturen som mennesker bruker til å dekke sine behov.' },
    { term: 'Fornybare ressurser', definition: 'Ressurser som kan fornye seg selv naturlig, f.eks. fisk, skog og vannkraft.' },
    { term: 'Ikke-fornybare ressurser', definition: 'Ressurser som finnes i begrenset mengde og ikke kan erstattes, f.eks. olje og mineraler.' },
    { term: 'Bærekraftig forvaltning', definition: 'Å bruke ressursene slik at fremtidige generasjoners behov ikke ødelegges.' },
    { term: 'Brundtland-kommisjonen', definition: 'FN-kommisjon (1987) ledet av Gro Harlem Brundtland, som definerte bærekraftig utvikling.' },
    { term: 'Oljefondet', definition: 'Statens pensjonsfond utland — Norges sparefond for petroleumsinntekter.' },
    { term: 'Handlingsregelen', definition: 'Regel som sier at staten bare skal bruke den forventede avkastningen av Oljefondet (ca. 3 %).' },
    { term: 'Ressursforbannelsen', definition: 'At rikdom på naturressurser paradoksalt kan føre til korrupsjon, konflikter og fattigdom.' },
    { term: 'Energiomstilling', definition: 'Overgangen fra fossile brensler til fornybare energikilder.' },
  ],
};

// ============================================================================
// KAPITTEL 13: Befolkning og bosetting
// LK20: Utforske korleis menneske har brukt og bruker naturen, og drøfte
//        kva konsekvensar det har for naturmangfaldet
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_13: TextbookChapter = {
  id: 'samfunnsfag-10-13',
  courseId: 'samfunnsfag-10',
  chapterNumber: '13',
  title: 'Befolkning og bosetting',
  description: 'Lær om befolkningsvekst, bosettingsmønstre, urbanisering, demografisk overgang og migrasjon i et globalt perspektiv.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og presentere ei aktuell samfunnsfagleg problemstilling og drøfte ulike løysingsforslag',
    'reflektere over korleis menneske har kjempa og kjempar for endringar i samfunnet og for rettferdige og berekraftige løysingar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-13-intro',
      type: 'text',
      content: `## 8 milliarder mennesker — og vi blir stadig flere

I november 2022 passerte verdens befolkning 8 milliarder mennesker. Da Jesus ble født for omtrent 2 000 år siden, var det anslagsvis 300 millioner mennesker på jorda. Det tok over 1 800 år å nå den første milliarden, men bare 12 år å gå fra 7 til 8 milliarder.

Denne eksplosive veksten reiser grunnleggende spørsmål: Kan jorda brødfø alle? Hvor bor folk, og hvorfor? Hvorfor får kvinner i noen land mange barn mens fødselsratene i andre land er historisk lave?

Befolkningsgeografi handler om å forstå hvordan mennesker fordeler seg på jorda, hvorfor noen områder er tett befolket mens andre er nesten tomme, og hvilke krefter som driver endring.

I dette kapittelet skal du lære om:
- Befolkningsvekst gjennom historien
- Hva som bestemmer hvor folk bor
- Den demografiske overgangen
- Urbanisering — verden flytter til byene
- Migrasjon og folkevandringer
- Befolkningsutfordringer i ulike deler av verden`,
    },

    // ========== DEFINISJON: BEFOLKNINGSGEOGRAFI ==========
    {
      id: 'samfunnsfag-10-13-def-1',
      type: 'definition',
      title: 'Befolkningsgeografi — sentrale begreper',
      content: `**Befolkningsgeografi** studerer hvordan mennesker fordeler seg på jorda, og hva som driver befolkningsendringer.

**Sentrale begreper:**

**Fødselsrate (natalitet):** Antall fødsler per 1 000 innbyggere per år. Høy i fattige land, lav i rike land.

**Dødsrate (mortalitet):** Antall dødsfall per 1 000 innbyggere per år. Har sunket dramatisk i de fleste land takket være bedre helse og ernæring.

**Naturlig befolkningsvekst:** Forskjellen mellom fødselsrate og dødsrate. Hvis det fødes flere enn det dør, vokser befolkningen.

**Befolkningstetthet:** Antall innbyggere per kvadratkilometer. Monaco har over 26 000 per km², mens Mongolia har under 2 per km².

**Fruktbarhetsrate (fertilitetsrate):** Gjennomsnittlig antall barn per kvinne. En fertilitetsrate på 2,1 er «erstattingsnivået» — det som trengs for at befolkningen skal holde seg stabil.

**Forventet levealder:** Hvor lenge en person i gjennomsnitt kan forvente å leve. I Norge: ca. 84 år for kvinner, 81 år for menn. I noen afrikanske land: under 60 år.

**Aldersfordeling:** Fordelingen av befolkningen mellom ulike aldersgrupper. Kan fremstilles i en **befolkningspyramide**.`,
    },

    // ========== EKSEMPEL: BEFOLKNINGSPYRAMIDER ==========
    {
      id: 'samfunnsfag-10-13-example-1',
      type: 'example',
      title: 'Eksempel: Befolkningspyramider forteller en historie',
      problem: 'Hvordan kan formen på en befolkningspyramide fortelle oss om et lands utvikling?',
      solution: `En **befolkningspyramide** er et diagram som viser aldersfordelingen i et land — med de yngste nederst og de eldste øverst.

**Bred base (trekantform) — typisk for utviklingsland:**
- Mange barn og unge, få eldre
- Høy fødselsrate, moderat/høy dødsrate
- Eksempel: Nigeria, Afghanistan
- Betyr rask befolkningsvekst og mange som trenger skole, mat og arbeid

**Rett/smal form (søyleform) — typisk for industriland:**
- Jevn fordeling mellom aldersgrupper
- Lav fødselsrate, lav dødsrate
- Eksempel: Norge, Frankrike
- Betyr stabil befolkning, men utfordringer med eldrebølge

**Omvendt trekant (urnform) — typisk for land med svært lav fødselsrate:**
- Flere eldre enn unge
- Svært lav fødselsrate, lav dødsrate
- Eksempel: Japan, Italia
- Betyr krympende befolkning, mangel på arbeidskraft, press på pensjonssystemet

**Hva kan vi lese ut av pyramidene?**
- Hvilke utfordringer samfunnet står overfor (eldrebølge vs. ungdomsbølge)
- Historiske hendelser (krig, epidemier, babyboom)
- Fremtidig utvikling (arbeidskraftbehov, forsørgerbyrde)`,
    },

    // ========== OPPGAVE 13.1 ==========
    {
      id: 'samfunnsfag-10-13-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-13-ex-1',
        number: '13.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr en fertilitetsrate på 2,1?',
        options: [
          {
            id: 'a',
            text: 'At befolkningen vokser med 2,1 prosent per år',
            isCorrect: false,
            feedback: 'Feil. Fertilitetsraten måler antall barn per kvinne, ikke prosentvis vekst.',
          },
          {
            id: 'b',
            text: 'At kvinner i gjennomsnitt får 2,1 barn, noe som holder befolkningen stabil',
            isCorrect: true,
            feedback: 'Riktig! 2,1 er «erstattingsnivået» — to foreldre erstattes av omtrent to barn, pluss en liten margin for å kompensere for dødsfall.',
          },
          {
            id: 'c',
            text: 'At 2,1 millioner barn fødes hvert år',
            isCorrect: false,
            feedback: 'Feil. Fertilitetsraten er et gjennomsnitt per kvinne, ikke et absolutt tall.',
          },
          {
            id: 'd',
            text: 'At befolkningen halveres på 2,1 år',
            isCorrect: false,
            feedback: 'Feil. Fertilitetsraten handler om antall barn per kvinne, ikke om befolkningsnedgang.',
          },
        ],
        solution: 'En fertilitetsrate på 2,1 kalles «erstattingsnivået» — det betyr at hver generasjon erstattes av en like stor generasjon, og befolkningen forblir stabil.',
      },
    },

    // ========== OPPGAVE 13.2 ==========
    {
      id: 'samfunnsfag-10-13-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-13-ex-2',
        number: '13.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Befolkningspyramider og samfunnsutvikling.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv hvordan befolkningspyramiden for Nigeria (bred base) skiller seg fra pyramiden for Japan (omvendt trekant).',
            solution: 'Nigerias pyramide har en bred base (mange barn/unge) og smal topp (få eldre), noe som viser høy fødselsrate og rask befolkningsvekst. Japans pyramide har smal base (få barn) og bred topp/midt (mange middelaldrende og eldre), noe som viser lav fødselsrate og aldrende befolkning.',
          },
          {
            label: 'b',
            task: 'Forklar hvilke ulike samfunnsutfordringer disse to landene står overfor på grunn av befolkningssammensetningen.',
            solution: 'Nigeria: Behov for mange skoler, arbeidsplasser og helsetjenester for unge. Rask befolkningsvekst legger press på matproduksjon og naturressurser. Japan: Eldrebølge med færre yrkesaktive til å forsørge pensjonistene. Mangel på arbeidskraft. Økende helsekostnader. Krympende befolkning kan svekke økonomien.',
          },
        ],
        hints: ['Tenk på hva det betyr for et samfunn å ha veldig mange unge vs. veldig mange eldre.'],
        solution: 'Befolkningssammensetningen bestemmer hvilke utfordringer et samfunn står overfor — fra ungdomsarbeidsledighet til eldrebølge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: DEMOGRAFISK OVERGANG ==========
    {
      id: 'samfunnsfag-10-13-def-2',
      type: 'definition',
      title: 'Den demografiske overgangen',
      content: `Den **demografiske overgangen** er en modell som beskriver hvordan befolkningsutviklingen endrer seg når et land utvikles fra jordbrukssamfunn til industrisamfunn. Modellen har fire faser:

**Fase 1 — Før-industriell fase:**
- Høy fødselsrate og høy dødsrate
- Befolkningen vokser sakte
- Mange barn, men mange dør tidlig av sykdom, sult eller krig
- Eksempel: Middelalderssamfunn

**Fase 2 — Overgangsperioden (tidlig):**
- Høy fødselsrate, men synkende dødsrate
- Rask befolkningsvekst
- Bedre helse, hygiene, ernæring og medisin reduserer dødeligheten
- Men folk får fortsatt mange barn (tradisjon, mangel på prevensjon, behov for arbeidskraft)
- Eksempel: Mange afrikanske land i dag

**Fase 3 — Overgangsperioden (sen):**
- Synkende fødselsrate, lav dødsrate
- Befolkningsveksten avtar
- Urbanisering, bedre utdanning (særlig for kvinner), tilgang til prevensjon
- Kvinner deltar mer i arbeidslivet
- Eksempel: India, Brasil

**Fase 4 — Industrialisert/moderne fase:**
- Lav fødselsrate og lav dødsrate
- Stabil eller synkende befolkning
- Høy levealder, aldrende befolkning
- Eksempel: Norge, Japan, Tyskland

**Hva driver overgangen?**
Forskning viser at **kvinners utdanning** er den viktigste enkeltfaktoren. Når jenter får utdanning, får de færre barn, senere i livet, og barna de får har bedre helse og utdanning. Tilgang til prevensjon, økonomisk utvikling og urbanisering er andre viktige faktorer.`,
    },

    // ========== EKSEMPEL: URBANISERING ==========
    {
      id: 'samfunnsfag-10-13-example-2',
      type: 'example',
      title: 'Eksempel: Urbanisering — verden flytter til byene',
      problem: 'I 1950 bodde 30 % av verdens befolkning i byer. I 2023 var andelen over 56 %. Innen 2050 forventes den å nå 68 %. Hvorfor flytter folk til byene, og hva betyr det?',
      solution: `**Hva er urbanisering?**
Urbanisering betyr at en stadig større andel av befolkningen bor i byer og tettsteder.

**Hvorfor flytter folk til byene?**

**Push-faktorer (det som «dytter» folk fra landsbygda):**
- Mangel på arbeidsplasser og inntektsmuligheter
- Fattigdom og dårlige levekår
- Lite tilbud av utdanning og helsetjenester
- Klimaendringer som gjør landbruk vanskeligere

**Pull-faktorer (det som «trekker» folk til byen):**
- Jobbmuligheter i industri og tjenestesektoren
- Bedre utdanningsmuligheter
- Bedre helse- og sosialtjenester
- Kulturliv, underholdning og sosialt nettverk

**Positive konsekvenser av urbanisering:**
- Mer effektiv bruk av infrastruktur (transport, vann, avløp)
- Nærhet til arbeid, utdanning og helsetjenester
- Kulturelt mangfold og innovasjon

**Negative konsekvenser av urbanisering:**
- Slumområder med dårlige boforhold i fattige land (f.eks. Dharavi i Mumbai)
- Trafikk, forurensning og støy
- Press på infrastruktur, vann og avfallshåndtering
- Sosiale problemer som kriminalitet og ensomhet

**I Norge:**
Over 80 % av nordmenn bor i byer og tettsteder. Sentralisering — at folk flytter til de største byene — er en pågående trend som skaper debatt om distrikspolitikk og likeverdige tjenester.`,
    },

    // ========== OPPGAVE 13.3 ==========
    {
      id: 'samfunnsfag-10-13-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-13-ex-3',
        number: '13.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I den demografiske overgangens fase 2 skjer det en rask befolkningsvekst. Hva er årsaken?',
        options: [
          {
            id: 'a',
            text: 'Både fødselsraten og dødsraten øker',
            isCorrect: false,
            feedback: 'Feil. Dødsraten synker i fase 2, den øker ikke.',
          },
          {
            id: 'b',
            text: 'Fødselsraten forblir høy mens dødsraten synker',
            isCorrect: true,
            feedback: 'Riktig! Bedre helse og ernæring reduserer dødeligheten, men fødselsraten er fortsatt høy fordi kulturelle normer og mangel på prevensjon gjør at folk fortsetter å få mange barn.',
          },
          {
            id: 'c',
            text: 'Mange innvandrere flytter til landet',
            isCorrect: false,
            feedback: 'Feil. Den demografiske overgangen handler primært om naturlig befolkningsvekst (fødsler vs. dødsfall), ikke innvandring.',
          },
          {
            id: 'd',
            text: 'Fødselsraten og dødsraten synker like raskt',
            isCorrect: false,
            feedback: 'Feil. Dødsraten synker først. Fødselsraten forblir høy en stund til, og dette gapet skaper rask vekst.',
          },
        ],
        solution: 'I fase 2 synker dødsraten (bedre helse/ernæring), men fødselsraten forblir høy. Gapet mellom mange fødsler og færre dødsfall gir rask befolkningsvekst.',
      },
    },

    // ========== OPPGAVE 13.4 ==========
    {
      id: 'samfunnsfag-10-13-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-13-ex-4',
        number: '13.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Urbanisering — fordeler og ulemper.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med push- og pull-faktorer i forbindelse med urbanisering. Gi to eksempler på hver.',
            solution: 'Push-faktorer er forhold som «dytter» folk bort fra landsbygda, f.eks. fattigdom og mangel på arbeidsplasser. Pull-faktorer er forhold som «trekker» folk til byen, f.eks. jobbmuligheter og bedre utdanning. Andre eksempler: Push: klimaendringer, lite helsetilbud. Pull: kulturliv, sosialt nettverk.',
          },
          {
            label: 'b',
            task: 'I Norge er sentralisering en stor debatt. Presenter ett argument for og ett mot at folk flytter til de store byene.',
            solution: 'For: Stordriftsfordeler gjør det billigere å tilby tjenester, lettere å få tak i kvalifisert arbeidskraft, nærhet til arbeidsplasser reduserer pendling. Mot: Avfolking av distrikter truer lokalsamfunn, naturressurser som fisk, skog og energi finnes i distriktene, spredt bosetting er en del av norsk kulturarv og identitet.',
          },
        ],
        hints: ['Tenk på hva som motiverer folk til å flytte, og hva samfunnet taper/vinner.'],
        solution: 'Urbanisering drives av push- og pull-faktorer. Sentralisering har både fordeler (effektivitet) og ulemper (distriktene taper).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: MIGRASJON ==========
    {
      id: 'samfunnsfag-10-13-def-3',
      type: 'definition',
      title: 'Migrasjon — mennesker i bevegelse',
      content: `**Migrasjon** betyr at mennesker flytter fra ett sted til et annet, enten innenfor et land (**intern migrasjon**) eller over landegrenser (**internasjonal migrasjon**).

**Typer migrasjon:**

**Frivillig migrasjon — folk velger selv å flytte:**
- **Arbeidsinnvandring:** Folk flytter for å finne arbeid og bedre levekår. Eksempel: Polske arbeidere i Norge.
- **Familierelatert migrasjon:** Folk flytter for å bo med familie. Familiegjenforening er den vanligste årsaken til innvandring i mange land.
- **Studenter:** Unge flytter for å ta utdanning i et annet land.

**Tvungen migrasjon — folk tvinges til å flytte:**
- **Flyktninger:** Mennesker som flykter fra krig, forfølgelse eller vold. Beskyttet av FNs flyktningkonvensjon.
- **Klimaflyktninger:** Mennesker som må flytte fordi klimaendringer gjør hjemstedet ubeboelig (ikke formelt anerkjent i flyktningkonvensjonen).
- **Internt fordrevne:** Mennesker som er tvunget til å flytte, men som ikke har krysset en landegrense.

**Migrasjon i Norge:**
Norge har gått fra å være et utvandringsland (1800-tallet: hundretusenvis dro til USA) til å bli et innvandringsland. I dag har ca. 16 % av Norges befolkning innvandrerbakgrunn. De største gruppene kommer fra Polen, Litauen, Sverige, Syria og Somalia.

**Viktig:** Migrasjon har alltid vært en del av menneskehetens historie. Mennesker har alltid flyttet — for å finne bedre levekår, unngå fare, eller utforske nye muligheter.`,
    },

    // ========== OPPGAVE 13.5 ==========
    {
      id: 'samfunnsfag-10-13-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-13-ex-5',
        number: '13.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Migrasjon og befolkningsendring.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom frivillig og tvungen migrasjon, og gi et eksempel på hver.',
            solution: 'Frivillig migrasjon: Folk velger selv å flytte, ofte for arbeid eller utdanning. Eksempel: Polske håndverkere som kommer til Norge for å jobbe. Tvungen migrasjon: Folk tvinges til å flytte på grunn av krig, forfølgelse eller katastrofer. Eksempel: Syrere som flyktet fra borgerkrigen etter 2011.',
          },
          {
            label: 'b',
            task: 'Norge var et utvandringsland på 1800-tallet. Hva var de viktigste grunnene til at nordmenn utvandret til USA?',
            solution: 'Fattigdom og dårlige levekår i Norge (push), mangel på jord og arbeidsplasser (push), muligheten for billig jord og bedre levekår i USA (pull), religiøs frihet (pull), og at slektninger og venner allerede hadde emigrert og sendte hjem oppmuntrende brev (kjedemigrasjonseffekten).',
          },
        ],
        hints: ['Bruk push- og pull-begrepene for å forklare motivasjonen.'],
        solution: 'Migrasjon drives av push- og pull-faktorer og kan være frivillig eller tvungen. Norge har historisk erfaring med begge retninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 13.6 ==========
    {
      id: 'samfunnsfag-10-13-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-13-ex-6',
        number: '13.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste enkeltfaktoren for å senke fødselsraten i et land, ifølge forskning?',
        options: [
          {
            id: 'a',
            text: 'At landet får tilgang til olje',
            isCorrect: false,
            feedback: 'Feil. Oljerikdom har lite direkte med fødselsrater å gjøre.',
          },
          {
            id: 'b',
            text: 'At jenter og kvinner får utdanning',
            isCorrect: true,
            feedback: 'Riktig! Forskning viser at kvinners utdanning er den sterkeste enkeltfaktoren for å senke fødselsraten. Utdannede kvinner får færre barn, senere i livet.',
          },
          {
            id: 'c',
            text: 'At landet innfører ettbarnspolitikk',
            isCorrect: false,
            feedback: 'Feil. Tvangspolitikk kan ha effekt, men er ikke den viktigste faktoren globalt — og reiser store etiske problemer.',
          },
          {
            id: 'd',
            text: 'At det blir flere sykehus',
            isCorrect: false,
            feedback: 'Bedre helsetjenester bidrar til lavere dødsrate, men det er utdanning som har størst effekt på fødselsraten.',
          },
        ],
        solution: 'Kvinners utdanning er den viktigste enkeltfaktoren for synkende fødselsrater. Utdannede kvinner får færre barn, deltar mer i arbeidslivet og har bedre muligheter.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-13-oppsummering',
      type: 'text',
      content: `## Oppsummering: Befolkning og bosetting

Verdens befolkning har vokst eksponentielt og passerte 8 milliarder i 2022. Befolkningsgeografi hjelper oss å forstå mønstrene.

**Nøkkelbegreper:**
- **Fødselsrate:** Antall fødsler per 1 000 innbyggere per år
- **Dødsrate:** Antall dødsfall per 1 000 innbyggere per år
- **Fertilitetsrate:** Gjennomsnittlig antall barn per kvinne (2,1 = erstattingsnivå)
- **Demografisk overgang:** Modell som beskriver overgangen fra høy til lav fødsels- og dødsrate
- **Befolkningspyramide:** Diagram som viser aldersfordelingen i et land
- **Urbanisering:** At en stadig større andel av befolkningen bor i byer
- **Push-faktorer:** Forhold som driver folk bort fra et sted
- **Pull-faktorer:** Forhold som trekker folk til et sted
- **Migrasjon:** At mennesker flytter fra ett sted til et annet
- **Sentralisering:** At folk og aktivitet samles i de største byene`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-13-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-13-ex-7',
        number: '13.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Befolkningsvekst og bærekraft.',
        subTasks: [
          {
            label: 'a',
            task: 'FNs befolkningsprognoser sier at verdens befolkning kan nå 10,4 milliarder innen 2100. Drøft: Er befolkningsvekst det største hinderet for bærekraftig utvikling, eller er det forbruksmønsteret som er problemet?',
            solution: 'For at befolkningsvekst er hovedproblemet: Flere mennesker trenger mer mat, vann og energi, og legger mer press på naturressursene. Mot: Det er de rike landene med lav befolkningsvekst som har størst klimaavtrykk per person. En gjennomsnittlig nordmann forbruker langt mer enn en gjennomsnittlig afrikaner. Det er altså forbruksmønsteret, ikke bare antallet mennesker, som er avgjørende.',
          },
          {
            label: 'b',
            task: 'Hva er den mest effektive måten å bremse befolkningsveksten i verden på, ifølge forskningen? Forklar hvorfor.',
            solution: 'Forskning peker på kvinners utdanning som den mest effektive faktoren. Utdannede kvinner får færre barn, senere i livet, og barna de får har bedre helse og utdanning. I tillegg er tilgang til prevensjon, økonomisk utvikling og urbanisering viktige drivere. Tvangspolitikk (som Kinas ettbarnspolitikk) har vist seg å ha alvorlige etiske og sosiale bivirkninger.',
          },
        ],
        hints: ['Tenk på forholdet mellom antall mennesker og forbruk per person.'],
        solution: 'Befolkningsvekst og forbruksmønstre henger sammen. Bærekraft krever både lavere forbruk i rike land og bærekraftig utvikling i fattige land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-13-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-13-ex-8',
        number: '13.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norges demografiske utfordringer.',
        subTasks: [
          {
            label: 'a',
            task: 'Norge har en synkende fertilitetsrate (under 1,5 barn per kvinne i 2023). Hvilke utfordringer kan dette skape for det norske samfunnet på lang sikt?',
            solution: 'Færre yrkesaktive skal forsørge flere eldre (forsørgerbyrde). Vanskeligere å finansiere velferdsstaten (pensjon, helse). Mangel på arbeidskraft i mange sektorer. Skoler og barnehager kan måtte legges ned i distriktene.',
          },
          {
            label: 'b',
            task: 'Hvordan kan innvandring bidra til å løse noen av disse utfordringene? Er det noen ulemper?',
            solution: 'Fordeler: Innvandrere bidrar med arbeidskraft i sektorer med mangel, øker skatteinntektene, holder befolkningstallet oppe. Utfordringer: Integrering tar tid og ressurser, kan skape kulturelle spenninger, avhengig av at innvandrerne kommer seg i arbeid. En balansert drøfting anerkjenner begge sider.',
          },
        ],
        hints: ['Tenk på sammenhengen mellom fødselsrate, aldring og velferd.'],
        solution: 'Norges synkende fertilitetsrate skaper utfordringer for velferdsstaten. Innvandring kan bidra til å løse noen, men ikke alle, av disse utfordringene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fødselsrate', definition: 'Antall fødsler per 1 000 innbyggere per år.' },
    { term: 'Dødsrate', definition: 'Antall dødsfall per 1 000 innbyggere per år.' },
    { term: 'Fertilitetsrate', definition: 'Gjennomsnittlig antall barn per kvinne. 2,1 er erstattingsnivået.' },
    { term: 'Demografisk overgang', definition: 'Modell som beskriver overgangen fra høy til lav fødsels- og dødsrate ved utvikling.' },
    { term: 'Befolkningspyramide', definition: 'Diagram som viser aldersfordelingen i et land eller område.' },
    { term: 'Urbanisering', definition: 'At en stadig større andel av befolkningen bor i byer og tettsteder.' },
    { term: 'Push-faktorer', definition: 'Forhold som driver folk bort fra et sted (fattigdom, krig, mangel på muligheter).' },
    { term: 'Pull-faktorer', definition: 'Forhold som trekker folk til et sted (jobbmuligheter, utdanning, trygghet).' },
    { term: 'Migrasjon', definition: 'At mennesker flytter fra ett sted til et annet, enten innenfor et land eller over landegrenser.' },
    { term: 'Sentralisering', definition: 'At folk, arbeidsplasser og tjenester samles i de største byene.' },
  ],
};

// ============================================================================
// KAPITTEL 14: Kart og kartanalyse
// LK20: Lese, tolke og bruke papirbaserte og digitale kart, og reflektere
//        over korleis kartframstillingar er valde
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_14: TextbookChapter = {
  id: 'samfunnsfag-10-14',
  courseId: 'samfunnsfag-10',
  chapterNumber: '14',
  title: 'Kart og kartanalyse',
  description: 'Lær å lese og tolke ulike typer kart, forstå målestokk, kartprojeksjoner, tematiske kart og digitale kartverktøy.',
  estimatedMinutes: 90,
  competenceGoals: [
    'lese, tolke og bruke papirbaserte og digitale kart, og reflektere over korleis kartframstillingar er valde',
    'utforske og presentere ei aktuell samfunnsfagleg problemstilling og drøfte ulike løysingsforslag',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-14-intro',
      type: 'text',
      content: `## Kart lyver — men de er uunnværlige

Har du noen gang sett på et verdenskart og tenkt at Grønland er nesten like stort som Afrika? I virkeligheten er Afrika **14 ganger** større enn Grønland. Kartet du så, brukte en kartprojeksjon som forvrengte størrelsene.

**Kart** er menneskers forsøk på å fremstille den runde jorda på en flat flate. Det er en umulig oppgave uten forvrengning — noe må alltid ofres. Spørsmålet er hva, og det valget er ikke nøytralt. Kartprojeksjoner er eksempler på at tilsynelatende nøytrale verktøy bærer med seg valg og perspektiver.

Likevel er kart noen av de viktigste verktøyene vi har. De hjelper oss å navigere, planlegge, forstå verden og ta beslutninger. Fra papirkart i sekken til GPS på telefonen — kart er overalt.

I dette kapittelet skal du lære om:
- Grunnleggende kartbegreper: målestokk, tegnforklaring, koordinater
- Kartprojeksjoner og hvorfor de forvrenges
- Ulike typer kart og hva de brukes til
- Digitale kart og geografiske informasjonssystemer (GIS)
- Kritisk lesing av kart`,
    },

    // ========== DEFINISJON: GRUNNLEGGENDE KARTBEGREPER ==========
    {
      id: 'samfunnsfag-10-14-def-1',
      type: 'definition',
      title: 'Grunnleggende kartbegreper',
      content: `Et **kart** er en forenklet fremstilling av jordoverflaten (eller deler av den) på en flat flate. For å bruke kart riktig, må du forstå noen grunnleggende begreper:

**Målestokk:**
Forholdet mellom avstander på kartet og virkelige avstander. Målestokk 1:50 000 betyr at 1 cm på kartet tilsvarer 50 000 cm (500 meter) i virkeligheten. Jo **større** målestokkstallet, jo **mindre** detaljert er kartet.
- **Stor målestokk** (f.eks. 1:1 000): Viser et lite område i detalj — gater, bygninger
- **Liten målestokk** (f.eks. 1:1 000 000): Viser et stort område med lite detalj — land, kontinenter

**Tegnforklaring (symbolforklaring):**
Forklarer hva de ulike symbolene, fargene og linjene på kartet betyr. Blå streker er vanligvis elver, grønne områder er skog, brune høydekurver viser terreng.

**Høydekurver (koter):**
Linjer som forbinder punkter med samme høyde over havet. Tett mellom kurvene betyr bratt terreng, spredte kurver betyr flatt terreng.

**Koordinatsystem:**
Et system for å angi nøyaktige posisjoner. De vanligste er:
- **Breddegrad og lengdegrad:** Gradnett som dekker hele jorda. Breddegrader (0°-90° nord/sør) og lengdegrader (0°-180° øst/vest).
- **UTM-koordinater:** Brukes mye i norske kart, oppgir posisjon i meter.

**Himmelretninger:**
Nord er vanligvis opp på kartet. De fire hovedretningene er nord, sør, øst og vest.`,
    },

    // ========== EKSEMPEL: MÅLESTOKK ==========
    {
      id: 'samfunnsfag-10-14-example-1',
      type: 'example',
      title: 'Eksempel: Slik bruker du målestokk',
      problem: 'Du har et turkart med målestokk 1:50 000. Avstanden mellom hytta og toppen av fjellet måler du til 4 cm på kartet. Hvor langt er det i virkeligheten?',
      solution: `**Steg 1: Forstå målestokken**
Målestokk 1:50 000 betyr at 1 cm på kartet = 50 000 cm i virkeligheten.

**Steg 2: Regn om til nyttige enheter**
50 000 cm = 500 meter. Altså: 1 cm på kartet = 500 meter i virkeligheten.

**Steg 3: Gang opp**
4 cm på kartet = 4 x 500 m = **2 000 meter = 2 km** i virkeligheten.

**Viktig:** Dette er luftlinjeavstanden (horisontal avstand). Den faktiske gangavstanden vil være lengre fordi terrenget har høydeforskjeller og stien sjelden er rett.

**Tips for å regne med målestokk:**
- Del målestokkstallet på 100 for å få svaret i meter (50 000 / 100 = 500 m per cm)
- Del videre på 1 000 for å få svaret i kilometer (500 / 1 000 = 0,5 km per cm)

**Målestokker du bør kjenne:**
- 1:50 000 — turkart (1 cm = 500 m)
- 1:250 000 — veikart (1 cm = 2,5 km)
- 1:1 000 000 — oversiktskart (1 cm = 10 km)`,
    },

    // ========== OPPGAVE 14.1 ==========
    {
      id: 'samfunnsfag-10-14-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-14-ex-1',
        number: '14.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Et kart har målestokk 1:50 000. Hva betyr det?',
        options: [
          {
            id: 'a',
            text: '1 cm på kartet tilsvarer 50 meter i virkeligheten',
            isCorrect: false,
            feedback: 'Feil. 50 000 cm = 500 meter, ikke 50 meter.',
          },
          {
            id: 'b',
            text: '1 cm på kartet tilsvarer 500 meter i virkeligheten',
            isCorrect: true,
            feedback: 'Riktig! 1:50 000 betyr at 1 cm = 50 000 cm = 500 meter.',
          },
          {
            id: 'c',
            text: '1 cm på kartet tilsvarer 50 km i virkeligheten',
            isCorrect: false,
            feedback: 'Feil. 50 000 cm = 500 meter = 0,5 km, ikke 50 km.',
          },
          {
            id: 'd',
            text: 'Kartet viser 50 000 kvadratkilometer',
            isCorrect: false,
            feedback: 'Feil. Målestokken angir forholdet mellom avstander, ikke areal.',
          },
        ],
        solution: 'Målestokk 1:50 000 betyr at 1 cm på kartet tilsvarer 50 000 cm i virkeligheten, altså 500 meter.',
      },
    },

    // ========== OPPGAVE 14.2 ==========
    {
      id: 'samfunnsfag-10-14-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-14-ex-2',
        number: '14.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kartferdigheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Du har et kart med målestokk 1:25 000. Avstanden mellom to punkter er 6 cm på kartet. Hvor langt er det i virkeligheten? Vis utregningen.',
            solution: '1:25 000 betyr at 1 cm = 25 000 cm = 250 m. 6 cm x 250 m = 1 500 m = 1,5 km.',
          },
          {
            label: 'b',
            task: 'Hva kan du si om terrenget dersom høydekurvene ligger svært tett på kartet?',
            solution: 'Når høydekurvene (kotene) ligger tett, betyr det at terrenget er bratt. Kort horisontal avstand mellom kurvene betyr stor høydeforskjell over kort distanse. Jo tettere kurvene, jo brattere er terrenget.',
          },
        ],
        hints: ['Husk: Del målestokkstallet på 100 for å finne antall meter per cm.'],
        solution: 'Målestokk brukes til å beregne virkelige avstander. Høydekurver viser terrengets form — tett mellom kurver betyr bratt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KARTPROJEKSJONER ==========
    {
      id: 'samfunnsfag-10-14-def-2',
      type: 'definition',
      title: 'Kartprojeksjoner — å gjøre en kule flat',
      content: `En **kartprojeksjon** er en matematisk metode for å overføre jordklodens buede overflate til en flat kartflate. Fordi jorda er rund og kartet er flatt, vil det alltid oppstå **forvrengninger**. Spørsmålet er hva som forvrenges — størrelse, form, avstand eller retning.

**De mest kjente projeksjonene:**

**Mercator-projeksjonen (1569):**
- Bevarer **retning** og **form** — nyttig for navigasjon
- Forvrenjer **størrelse** dramatisk nær polene
- Grønland ser ut til å være like stort som Afrika, selv om Afrika er 14 ganger større
- Eurosentrisk — Europa er i sentrum og virker uforholdsmessig stor
- Brukes fortsatt mye, blant annet av Google Maps

**Peters-projeksjonen (1973):**
- Bevarer **størrelse** korrekt — alle land har riktig areal i forhold til hverandre
- Forvrenjer **form** — landene ser strukket og «dratt» ut
- Ble lansert som et alternativ som gir en rettferdig fremstilling av Sør

**Robinson-projeksjonen:**
- Et kompromiss som gir et «pent» bilde av verden
- Verken størrelse, form eller avstand er helt korrekt, men alt er «noenlunde» riktig
- Mye brukt i atlas og skolekart

**Hvorfor dette er viktig:**
Kartprojeksjoner er ikke nøytrale. Det projeksjonsvalget vi gjør, påvirker hvordan vi oppfatter verden. Når Mercator-kartet gjør Europa og Nord-Amerika større enn de er, og Afrika og Sør-Amerika mindre, kan det påvirke hvordan vi tenker om makt og betydning i verden.`,
    },

    // ========== EKSEMPEL: KART OG MAKT ==========
    {
      id: 'samfunnsfag-10-14-example-2',
      type: 'example',
      title: 'Eksempel: Kart som maktmiddel',
      problem: 'Hvorfor har valg av kartprojeksjon vært gjenstand for politisk debatt?',
      solution: `**Kart er ikke nøytrale — de bærer med seg perspektiver og makt.**

**Mercator-debatten:**
Det tradisjonelle verdenskartet (Mercator) forstørrer land nær polene og forminsker land nær ekvator. I praksis betyr dette at:
- Europa og Nord-Amerika ser større og viktigere ut
- Afrika, Sør-Asia og Sør-Amerika fremstilles som mindre enn de er
- Europa er plassert i sentrum av kartet

Kritikere hevder at dette har bidratt til en eurosentrisk verdensforståelse — at vestlige land automatisk oppfattes som viktigere fordi de ser større ut.

**Hvem bestemmer hva som er «opp»?**
Nord er på toppen av kartet — men det er en konvensjon, ikke en naturlov. Arabiske kartografer i middelalderen plasserte sør øverst. Å se et verdenskart med sør opp gir et helt annet perspektiv.

**Hva viser vi — og hva skjuler vi?**
Alle kart er forenklinger. Hva som inkluderes og hva som utelates, er valg. Et kart som viser landegrenser kan skjule at grensene er omstridte. Et kart som viser nasjonalstater skjuler at det bor folkegrupper som strekker seg over flere land.

**Konklusjon:** Kart er kraftfulle verktøy som former vår oppfatning av verden. Kritisk kartlesing betyr å spørre: Hvem har laget kartet? Hva er formålet? Hva er forvrengt?`,
    },

    // ========== OPPGAVE 14.3 ==========
    {
      id: 'samfunnsfag-10-14-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-14-ex-3',
        number: '14.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor ser Grønland nesten like stort ut som Afrika på et Mercator-kart, selv om Afrika er 14 ganger større?',
        options: [
          {
            id: 'a',
            text: 'Fordi Afrika krymper over tid',
            isCorrect: false,
            feedback: 'Feil. Kontinentene endrer ikke størrelse i menneskelig tidsskala. Det er kartprojeksjonen som forvrenges.',
          },
          {
            id: 'b',
            text: 'Fordi Mercator-projeksjonen forvrenjer størrelse nær polene, slik at nordlige og sørlige områder ser større ut',
            isCorrect: true,
            feedback: 'Riktig! Mercator-projeksjonen bevarer retning men forvrenjer størrelse — områder nær polene «blåses opp».',
          },
          {
            id: 'c',
            text: 'Fordi kartet er tegnet feil',
            isCorrect: false,
            feedback: 'Feil. Mercator-kartet er matematisk korrekt etter sin metode — det er selve projeksjonsvalget som gir forvrengningen.',
          },
          {
            id: 'd',
            text: 'Fordi Grønland og Afrika faktisk er like store',
            isCorrect: false,
            feedback: 'Feil. Afrika (30,4 mill. km²) er omtrent 14 ganger større enn Grønland (2,2 mill. km²).',
          },
        ],
        solution: 'Mercator-projeksjonen forvrenjer størrelse for å bevare retning. Områder langt fra ekvator fremstilles mye større enn de er.',
      },
    },

    // ========== DEFINISJON: TEMATISKE KART OG GIS ==========
    {
      id: 'samfunnsfag-10-14-def-3',
      type: 'definition',
      title: 'Tematiske kart og digitale kartverktøy',
      content: `Mens **topografiske kart** viser terrenget (høyde, elver, veier), viser **tematiske kart** spesifikk informasjon om et emne.

**Typer tematiske kart:**

**Choropleth-kart (flatemønsterkart):**
Farger eller skravur viser forskjeller mellom områder. Eksempel: Et kart der land farges etter inntektsnivå — mørk farge for høy inntekt, lys for lav.

**Prikkart (punktkart):**
Prikker representerer mengde eller fordeling. Eksempel: Et kart med prikker som viser befolkningstetthet — mange prikker i tettbygde områder.

**Strømmekart:**
Piler viser bevegelse — handelsstrømmer, migrasjon, vindretning.

**Diagramkart:**
Diagrammer (søylediagram, kakediagram) plassert på kartet viser statistikk for ulike steder.

**Digitale kartverktøy:**

**GIS — Geografisk informasjonssystem:**
Dataprogrammer som samler, lagrer, analyserer og visualiserer geografisk informasjon. Brukes til alt fra byplanlegging til naturforvaltning.

**Google Maps / Google Earth:**
Digitale kart som kombinerer satellittbilder, kart og stedsinformasjon. Gir mulighet for å utforske verden fra skrivebordet.

**Norgeskart / Kartverket:**
Norges offisielle kartdatabase med detaljerte topografiske kart over hele landet.

**Viktig:** Digitale kart er kraftige verktøy, men de er ikke nøytrale. Google Maps velger hva som vises og hva som skjules, og satellittbilder kan være utdaterte.`,
    },

    // ========== OPPGAVE 14.4 ==========
    {
      id: 'samfunnsfag-10-14-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-14-ex-4',
        number: '14.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tematiske kart og kartanalyse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom et topografisk kart og et tematisk kart? Gi et eksempel på hver.',
            solution: 'Topografisk kart viser terrengets fysiske egenskaper: høyde, elver, vann, veier, bebyggelse. Eksempel: Et turkart (M711). Tematisk kart viser et bestemt emne eller tema. Eksempel: Et kart som viser gjennomsnittsinntekt per kommune i Norge, der kommunene er fargelagt etter inntektsnivå.',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor det er viktig å kunne lese kart kritisk. Gi et eksempel på hvordan et kart kan gi et skjevt bilde av virkeligheten.',
            solution: 'Kart er forenklinger som alltid innebærer valg — hva som inkluderes/utelates, hvilken projeksjon som brukes, hvilke farger og symboler som velges. Eksempel: Et Mercator-verdenskart forstørrer rike land i nord og forminsker fattige land nær ekvator, noe som kan påvirke oppfatningen av landenes betydning. Eller: Et kart med politiske grenser kan skjule at et område er omstridt.',
          },
        ],
        hints: ['Alle kart er forenklinger — spørsmålet er hva som forenkles bort.'],
        solution: 'Topografiske kart viser terreng, tematiske kart viser spesifikk informasjon. Kritisk kartlesing er viktig fordi kart alltid involverer valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 14.5 ==========
    {
      id: 'samfunnsfag-10-14-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-14-ex-5',
        number: '14.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktisk kartarbeid.',
        subTasks: [
          {
            label: 'a',
            task: 'Gå inn på Kartverkets nettside (norgeskart.no) og finn hjemstedet ditt. Beskriv terrenget rundt stedet ved hjelp av høydekurver — er det flatt, kupert eller bratt?',
            solution: 'Svaret er individuelt. Eleven bør beskrive terrenget med bruk av kartbegreper: høydekurver (tett = bratt, spredt = flatt), høyde over havet, nærhet til vann/sjø, bebyggelse.',
          },
          {
            label: 'b',
            task: 'Bruk Google Maps til å sammenligne to steder i verden. Beskriv forskjeller i bosettingsmønster, terreng og infrastruktur.',
            solution: 'Svaret er individuelt. Eleven bør sammenligne relevante geografiske trekk: befolkningstetthet, veinett, terreng, nærhet til vann. En god besvarelse bruker fagbegreper og reflekterer over årsaker til forskjellene.',
          },
        ],
        hints: ['Bruk kartverktøyene aktivt og prøv ulike visninger og målestokker.'],
        solution: 'Digitale kartverktøy gir mulighet til å utforske og analysere geografi på nye måter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },

    // ========== OPPGAVE 14.6 ==========
    {
      id: 'samfunnsfag-10-14-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-14-ex-6',
        number: '14.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at høydekurvene på et kart ligger svært tett?',
        options: [
          {
            id: 'a',
            text: 'At terrenget er flatt',
            isCorrect: false,
            feedback: 'Feil. Når kurvene er spredt, er terrenget flatt. Tette kurver betyr bratt.',
          },
          {
            id: 'b',
            text: 'At terrenget er bratt',
            isCorrect: true,
            feedback: 'Riktig! Når høydekurvene er tett, stiger terrenget raskt over kort avstand — det er bratt.',
          },
          {
            id: 'c',
            text: 'At det er mye skog i området',
            isCorrect: false,
            feedback: 'Feil. Høydekurver viser terrengform, ikke vegetasjon.',
          },
          {
            id: 'd',
            text: 'At det er mange innbyggere i området',
            isCorrect: false,
            feedback: 'Feil. Høydekurver viser terrengform, ikke befolkningstetthet.',
          },
        ],
        solution: 'Tett mellom høydekurver betyr bratt terreng — stor høydeforskjell over kort avstand.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-14-oppsummering',
      type: 'text',
      content: `## Oppsummering: Kart og kartanalyse

Kart er forenklede fremstillinger av virkeligheten. Å bruke kart krever forståelse av grunnleggende begreper og kritisk tenkning.

**Nøkkelbegreper:**
- **Målestokk:** Forholdet mellom avstand på kart og virkelig avstand (f.eks. 1:50 000)
- **Tegnforklaring:** Forklaring av symboler og farger brukt på kartet
- **Høydekurver:** Linjer som forbinder punkter med samme høyde — tett = bratt
- **Koordinater:** System for å angi nøyaktige posisjoner (breddegrad/lengdegrad)
- **Kartprojeksjon:** Metode for å overføre den runde jorda til flat kartflate
- **Mercator-projeksjonen:** Bevarer retning, men forvrenjer størrelse nær polene
- **Peters-projeksjonen:** Bevarer riktig størrelse, men forvrenjer form
- **Topografisk kart:** Viser terrengform, elver, veier
- **Tematisk kart:** Viser spesifikk informasjon om et emne
- **GIS:** Geografisk informasjonssystem — digitalt verktøy for kartanalyse`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'samfunnsfag-10-14-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-14-ex-7',
        number: '14.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Kart og makt.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar med eksempler hvorfor kart ikke er nøytrale fremstillinger av verden.',
            solution: 'Kart innebærer alltid valg som reflekterer perspektiver: Mercator-projeksjonen forstørrer Europa og forminsker Afrika. Valget av hva som er «opp» (nord) er en konvensjon. Politiske kart viser grenser som kan være omstridte. Hva som inkluderes og utelates (f.eks. urfolks stedsnavn) er politiske valg.',
          },
          {
            label: 'b',
            task: 'Noen har foreslått at verdenskart i skolen bør erstattes med kart som viser riktig størrelse (som Peters-projeksjonen). Drøft: Er dette en god idé?',
            solution: 'For: Gir et mer rettferdig bilde av verden, korrigerer for eurosentrisk perspektiv, viser den virkelige størrelsen på kontinentene. Mot: Peters-projeksjonen forvrenjer form, Mercator er bedre for navigasjon, ingen projeksjon er perfekt. En god besvarelse: Elevene bør kanskje lære om flere projeksjoner og forstå styrkene og svakhetene ved hver.',
          },
        ],
        hints: ['Tenk på sammenhengen mellom kartfremstilling, verdensbilde og makt.'],
        solution: 'Kart er alltid forenklinger som bærer med seg valg og perspektiver. Å forstå dette er en viktig del av kritisk tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Målestokk', definition: 'Forholdet mellom avstander på kartet og virkelige avstander, f.eks. 1:50 000.' },
    { term: 'Høydekurver', definition: 'Linjer som forbinder punkter med samme høyde over havet. Tett = bratt.' },
    { term: 'Tegnforklaring', definition: 'Oversikt over hva symboler, farger og linjer betyr på et kart.' },
    { term: 'Koordinater', definition: 'System for å angi nøyaktige posisjoner, f.eks. breddegrad og lengdegrad.' },
    { term: 'Kartprojeksjon', definition: 'Matematisk metode for å overføre jordklodens buede overflate til en flat flate.' },
    { term: 'Mercator-projeksjonen', definition: 'Kartprojeksjon som bevarer retning men forvrenjer størrelse nær polene.' },
    { term: 'Topografisk kart', definition: 'Kart som viser terrengform, høyde, elver, veier og bebyggelse.' },
    { term: 'Tematisk kart', definition: 'Kart som viser spesifikk informasjon om et bestemt emne.' },
    { term: 'GIS', definition: 'Geografisk informasjonssystem — digitalt verktøy for innsamling, analyse og visualisering av geografisk informasjon.' },
  ],
};

// ============================================================================
// KAPITTEL 15: Naturkatastrofer og sårbarhet
// LK20: Utforske korleis klimaet på jorda endrar seg over tid, og drøfte
//        kva endringane kan bety for menneske og natur
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_15: TextbookChapter = {
  id: 'samfunnsfag-10-15',
  courseId: 'samfunnsfag-10',
  chapterNumber: '15',
  title: 'Naturkatastrofer og sårbarhet',
  description: 'Lær om ulike typer naturkatastrofer, hva som gjør samfunn sårbare, sammenhengen mellom fattigdom og katastroferisiko, og forebygging.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske korleis klimaet på jorda endrar seg over tid, og drøfte kva endringane kan bety for menneske og natur',
    'undersøke korleis menneskeleg aktivitet har ført til endringar i naturen, og drøfte korleis ein kan ta vare på naturmangfaldet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-15-intro',
      type: 'text',
      content: `## Når naturen slår tilbake

I august 2023 traff uværet «Hans» Sør-Norge med enorme nedbørsmengder. Elver gikk over sine bredder, veier ble skylt bort, og hele bygder ble isolert. Skadene kostet milliarder av kroner. Men selv om «Hans» var ødeleggende, var det ingen som omkom i Norge. Da en lignende flom rammet Libya den samme måneden, døde over 11 000 mennesker.

Denne kontrasten forteller oss noe viktig: En naturhendelse blir en **katastrofe** først når den rammer et sårbart samfunn. Det er ikke bare naturkreftene som avgjør hvor stor skaden blir — det er også hvor godt forberedt samfunnet er.

Jordskjelv, vulkanutbrudd, flom, tørke, orkaner og skred er naturlige prosesser som alltid har forekommet. Men menneskelig aktivitet — urbanisering, avskoging, klimaendringer — kan gjøre naturhendelser mer ødeleggende.

I dette kapittelet skal du lære om:
- Ulike typer naturkatastrofer og hva som forårsaker dem
- Hva sårbarhet betyr og hvorfor fattige land rammes hardest
- Sammenhengen mellom klimaendringer og naturkatastrofer
- Forebygging, beredskap og katastrofehåndtering
- Norske naturfareutfordringer`,
    },

    // ========== DEFINISJON: NATURKATASTROFER ==========
    {
      id: 'samfunnsfag-10-15-def-1',
      type: 'definition',
      title: 'Naturkatastrofer — typer og årsaker',
      content: `En **naturkatastrofe** oppstår når en naturhendelse fører til store ødeleggelser, tap av menneskeliv eller alvorlige samfunnsforstyrrelser.

**Geologiske naturkatastrofer** (knyttet til jordens indre krefter):

**Jordskjelv:** Oppstår når spenninger i jordskorpen utløses plutselig langs forkastninger (sprekker). Måles på Richters skala. Sterkest langs plategrensene (f.eks. Stillehavsringen). Eksempel: Jordskjelvet i Tyrkia/Syria 2023 (over 50 000 døde).

**Vulkanutbrudd:** Smeltet stein (magma) bryter gjennom jordskorpen. Kan gi lavastrømmer, askeskyer og tsunamier. Eksempel: Utbruddet på Island (Grindavík) 2023-2024.

**Tsunami:** Enorm bølge utløst av jordskjelv på havbunnen. Eksempel: Tsunamien i Det indiske hav 2004 (over 230 000 døde).

**Meteorologiske og hydrologiske naturkatastrofer** (knyttet til vær og vann):

**Flom:** Vannstand som overstiger normale nivåer. Kan skyldes kraftig regn, snøsmelting eller stormflo. Eksempel: Uværet Hans i Norge 2023.

**Tropiske sykloner (orkaner/tyfoner):** Kraftige stormsystemer som dannes over varmt hav. Eksempel: Orkan Katrina i USA 2005.

**Tørke:** Langvarig periode med langt under normal nedbør. Kan føre til avlingssvikt og hungersnød. Eksempel: Tørken på Afrikas horn 2022.

**Skred:** Jord-, stein- eller snøskred utløst av nedbør, jordskjelv eller menneskelig aktivitet. Eksempel: Gjerdrum-skredet i Norge 2020.`,
    },

    // ========== EKSEMPEL: JORDSKJELV OG SÅRBARHET ==========
    {
      id: 'samfunnsfag-10-15-example-1',
      type: 'example',
      title: 'Eksempel: Samme jordskjelv — helt ulike konsekvenser',
      problem: 'I 2010 rammet et jordskjelv med styrke 7,0 Haiti. Over 200 000 mennesker døde. Samme år rammet et enda sterkere jordskjelv (8,8) Chile. Under 600 mennesker døde. Hvorfor var forskjellen så enorm?',
      solution: `Sammenligningen mellom Haiti og Chile viser tydelig at det er **sårbarhet** — ikke bare naturkreftenes styrke — som avgjør konsekvensene:

**Haiti — ekstremt sårbart:**
- Et av verdens fattigste land
- Dårlig bygningskvalitet — de fleste bygninger hadde ingen jordskjelvsikring
- Svak infrastruktur — dårlige veier, sykehus og kommunikasjon
- Svake myndigheter med begrenset kapasitet til krisehåndtering
- Mange bodde tett i sårbare bygninger i hovedstaden Port-au-Prince

**Chile — godt forberedt:**
- Et relativt rikt land med sterk økonomi
- Strenge bygningsforskrifter som krever jordskjelvsikring
- God infrastruktur og velutviklet helsevesen
- Erfaring med jordskjelv og gode beredskapsplaner
- Effektiv varsling og evakuering

**Hva dette forteller oss:**
- Fattigdom er den viktigste risikofaktoren ved naturkatastrofer
- Forebygging (bygningskvalitet, beredskap, varsling) redder liv
- Naturhendelser er naturlige — katastrofer er menneskeskapte (gjennom sårbarhet)
- Investeringer i beredskap gir enorm avkastning i form av sparte liv`,
    },

    // ========== OPPGAVE 15.1 ==========
    {
      id: 'samfunnsfag-10-15-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-15-ex-1',
        number: '15.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste grunnen til at samme type naturhendelse kan gi helt ulike konsekvenser i ulike land?',
        options: [
          {
            id: 'a',
            text: 'Fordi naturhendelser er sterkere i fattige land',
            isCorrect: false,
            feedback: 'Feil. Naturhendelser rammer uavhengig av et lands økonomi.',
          },
          {
            id: 'b',
            text: 'Fordi sårbarhet — fattigdom, dårlig infrastruktur og svak beredskap — forsterker konsekvensene',
            isCorrect: true,
            feedback: 'Riktig! Det er samfunnets sårbarhet som avgjør om en naturhendelse blir en katastrofe.',
          },
          {
            id: 'c',
            text: 'Fordi rike land har bedre vær',
            isCorrect: false,
            feedback: 'Feil. Vær og naturhendelser handler om geografi, ikke om økonomi.',
          },
          {
            id: 'd',
            text: 'Fordi fattige land har flere mennesker',
            isCorrect: false,
            feedback: 'Feil. Befolkningsstørrelse er ikke hovedårsaken — det er kvaliteten på forberedelse og infrastruktur.',
          },
        ],
        solution: 'Sårbarhet — fattigdom, dårlig infrastruktur, svak beredskap — er hovedårsaken til at naturhendelser gir verre konsekvenser i noen land enn i andre.',
      },
    },

    // ========== OPPGAVE 15.2 ==========
    {
      id: 'samfunnsfag-10-15-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-15-ex-2',
        number: '15.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sårbarhet og naturkatastrofer.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar med egne ord hva som menes med sårbarhet i forbindelse med naturkatastrofer.',
            solution: 'Sårbarhet handler om hvor utsatt et samfunn er for skader ved naturhendelser. Et sårbart samfunn har dårlig infrastruktur, fattigdom, svak beredskap og lite kapasitet til å håndtere kriser. Et mindre sårbart samfunn har god bygningskvalitet, effektive varslingssystemer, god beredskap og ressurser til å håndtere og gjenoppbygge etter katastrofer.',
          },
          {
            label: 'b',
            task: 'Sammenlign jordskjelvene i Haiti (2010) og Chile (2010). Hva forklarer den store forskjellen i antall dødsofre?',
            solution: 'Chile hadde strenge bygningsforskrifter med jordskjelvsikring, god infrastruktur, effektiv krisehåndtering og velutviklet varslingssystem. Haiti var et av verdens fattigste land med dårlig bygningskvalitet, svak infrastruktur og begrenset evne til krisehåndtering. Resultatet: Chile mistet under 600 mennesker med et sterkere skjelv, mens Haiti mistet over 200 000.',
          },
        ],
        hints: ['Tenk på sammenhengen mellom fattigdom og sårbarhet.'],
        solution: 'Sårbarhet bestemmes av fattigdom, infrastruktur, beredskap og kapasitet. Det er sårbarhet, ikke naturkreftene alene, som avgjør katastrofens omfang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KLIMAENDRINGER OG NATURFARE ==========
    {
      id: 'samfunnsfag-10-15-def-2',
      type: 'definition',
      title: 'Klimaendringer og økt naturfare',
      content: `Klimaendringer forandrer hyppigheten og styrken på mange typer naturhendelser:

**Hva forskningen viser:**

**Mer ekstremnedbør:**
Varmere atmosfære holder mer fuktighet, noe som gir kraftigere regnskyll. Dette øker risikoen for flom og skred. Studier viser at ekstremnedbør allerede har blitt hyppigere og mer intens i mange regioner.

**Kraftigere tropiske stormer:**
Varmere havoverflate gir mer energi til tropiske sykloner, noe som kan gjøre de sterkeste stormene enda kraftigere.

**Lengre tørkeperioder:**
Endrede nedbørsmønstre gjør at noen områder — særlig i subtropene — opplever lengre og mer alvorlige tørker.

**Stigende havnivå:**
Økt stormflorisiko for kystområder. Lavtliggende øystater og deltaområder er spesielt utsatt.

**Tinende permafrost:**
I arktiske områder tiner permafrost, noe som gjør grunnen ustabil og øker faren for skred og jordras.

**Menneskelig aktivitet forsterker risikoen:**
- **Avskoging** fjerner trærnes beskyttelse mot erosjon og flom
- **Urbanisering i risikosoner** gjør at flere bor i flomutsatte eller skredutsatte områder
- **Drenering av våtmarker** fjerner naturlige «svamper» som absorberer flomvann
- **Utbygging i kystsonen** øker eksponeringen for stormflo og havnivåstigning

**Viktig sammenheng:** Klimaendringer øker naturfarene, mens menneskelig arealbruk øker sårbarheten. Kombinasjonen kan gi flere og verre katastrofer.`,
    },

    // ========== EKSEMPEL: UVÆRET HANS ==========
    {
      id: 'samfunnsfag-10-15-example-2',
      type: 'example',
      title: 'Eksempel: Uværet Hans — beredskap i praksis',
      problem: 'I august 2023 traff uværet «Hans» Sør-Norge. Det ble en av de mest kostbare naturhendelsene i norsk historie. Hva skjedde, og hva kan vi lære?',
      solution: `**Hva skjedde:**
Uværet Hans brakte ekstremt store nedbørsmengder til Østlandet og innlandet. Elver som Glomma og Lågen steg til historisk høye nivåer. Veier og jernbaner ble ødelagt. Hus ble oversvømt. Jordras og flom isolerte hele bygder.

**Konsekvensene:**
- Skader for anslagsvis 10 milliarder kroner
- Tusenvis av evakuerte
- Store ødeleggelser på infrastruktur (veier, jernbane, bruer)
- Landbruksarealer oversvømt
- Ingen omkom — takket være god varsling og beredskap

**Hva fungerte bra?**
- Meteorologisk institutt varslet i god tid (rødt farevarsel)
- NVE (Norges vassdrags- og energidirektorat) overvåket vannstanden
- Kommuner og nødetater iverksatte evakuering
- Folk fulgte anbefalingene fra myndighetene

**Hva kan læres?**
- Infrastruktur må dimensjoneres for kraftigere nedbør enn historisk normalt
- Arealplanlegging bør ta høyde for økt flomrisiko
- God beredskap og varsling redder liv
- Klimaendringer gjør slike hendelser hyppigere — vi må tilpasse oss

**Sammenlignet med Libya:**
Den samme uken rammet stormen Daniel Libya, og en dambrist førte til at byen Derna ble skylt bort. Over 11 000 mennesker omkom. Forskjellen skyldtes dårlig vedlikehold av dammen, manglende varsling, svak beredskap og en stat svekket av borgerkrig.`,
    },

    // ========== OPPGAVE 15.3 ==========
    {
      id: 'samfunnsfag-10-15-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-15-ex-3',
        number: '15.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvordan kan klimaendringer øke risikoen for flom?',
        options: [
          {
            id: 'a',
            text: 'Varmere atmosfære holder mer fuktighet, noe som kan gi kraftigere nedbør og økt flomrisiko',
            isCorrect: true,
            feedback: 'Riktig! For hver grad temperaturen stiger, kan atmosfæren holde omtrent 7 % mer vanndamp, noe som kan gi kraftigere regnskyll.',
          },
          {
            id: 'b',
            text: 'Klimaendringer gjør at det regner mindre',
            isCorrect: false,
            feedback: 'Feil. Klimaendringer kan gi mer intens nedbør i noen områder, selv om andre kan bli tørrere.',
          },
          {
            id: 'c',
            text: 'Klimaendringer flytter elvene',
            isCorrect: false,
            feedback: 'Feil. Klimaendringer flytter ikke elvene, men kan påvirke vannmengden i dem.',
          },
          {
            id: 'd',
            text: 'Klimaendringer påvirker ikke flomrisikoen',
            isCorrect: false,
            feedback: 'Feil. Forskning viser at klimaendringer allerede har økt hyppigheten av ekstremnedbør og flom i mange regioner.',
          },
        ],
        solution: 'Varmere atmosfære kan holde mer fuktighet, noe som gir kraftigere nedbør. Kombinert med raskere snøsmelting og endrede nedbørsmønstre øker dette flomrisikoen.',
      },
    },

    // ========== DEFINISJON: FOREBYGGING OG BEREDSKAP ==========
    {
      id: 'samfunnsfag-10-15-def-3',
      type: 'definition',
      title: 'Forebygging og beredskap',
      content: `Samfunn kan gjøre mye for å redusere konsekvensene av naturhendelser. Tiltakene deles inn i tre faser:

**Fase 1: Forebygging (før hendelsen)**
- **Arealplanlegging:** Unngå å bygge i flomutsatte, skredutsatte eller jordskjelvutsatte områder
- **Bygningsstandarder:** Krav om jordskjelvsikring, flomtilpassing og skredvern
- **Infrastruktur:** Flomvoller, erosjonssikring, skredsikring
- **Naturbaserte løsninger:** Bevare skog, våtmarker og vegetasjon som naturlige barrierer
- **Kartlegging:** Identifisere risikoområder og lage faresonekart

**Fase 2: Beredskap (forberedelse)**
- **Varslingssystemer:** Meteorologisk institutt, NVE, Sivilforsvaret
- **Beredskapsplaner:** Kommuner og nødetater har planer for ulike scenarier
- **Øvelser:** Jevnlige øvelser for å teste planene
- **Informasjon:** Befolkningen vet hva de skal gjøre (egenberedskap)
- **Nødforsyninger:** Mat, vann, strøm for 72 timer

**Fase 3: Respons og gjenoppbygging (etter hendelsen)**
- **Redningsarbeid:** Nødetater, Sivilforsvaret, Forsvaret
- **Evakuering og midlertidig husly**
- **Gjenoppbygging:** Reparere infrastruktur og boliger
- **Evaluering:** Lære av hendelsen for å bli bedre forberedt

**Sendai-rammeverket (2015-2030):**
FNs rammeverk for katastrofereduksjon. Målet er å redusere katastrofetap gjennom bedre forståelse av risiko, sterkere styring, investering i forebygging og bedre beredskap.`,
    },

    // ========== OPPGAVE 15.4 ==========
    {
      id: 'samfunnsfag-10-15-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-15-ex-4',
        number: '15.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forebygging og beredskap ved naturkatastrofer.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom forebygging og beredskap med et eksempel for hver.',
            solution: 'Forebygging er tiltak som reduserer risikoen for at skade oppstår — f.eks. å bygge flomvoller langs en elv, eller å vedta regler som forbyr bygging i skredutsatte områder. Beredskap er å forberede seg på å håndtere en hendelse når den inntreffer — f.eks. å ha varslingssystemer, evakueringsplaner og nødforsyninger klare.',
          },
          {
            label: 'b',
            task: 'Under uværet Hans i 2023 omkom ingen i Norge, mens over 11 000 døde da en lignende storm rammet Libya. Forklar de viktigste årsakene til denne forskjellen.',
            solution: 'Norge hadde god varsling (rødt farevarsel i god tid), fungerende beredskapsplaner, effektiv evakuering, god infrastruktur og en stat med kapasitet til krisehåndtering. Libya manglet alt dette: dårlig vedlikehold av kritisk infrastruktur (dammen), manglende varsling, svak beredskap og en stat svekket av borgerkrig. Fattigdom og svake institusjoner var avgjørende.',
          },
        ],
        hints: ['Tenk på hva samfunnet kan gjøre før, under og etter en naturhendelse.'],
        solution: 'Forebygging reduserer risiko, beredskap forbereder oss på å håndtere hendelser. God styring og sterke institusjoner er avgjørende for begge deler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 15.5 ==========
    {
      id: 'samfunnsfag-10-15-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-15-ex-5',
        number: '15.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Naturfare i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre typer naturfare som er relevante i Norge, og forklar kort hva som forårsaker dem.',
            solution: '1) Flom: Kraftig nedbør eller snøsmelting gjør at elver og bekker går over sine bredder. 2) Skred (jord-, stein- eller snøskred): Utløses av mye nedbør, snøsmelting eller ustabil grunn, ofte i bratt terreng. 3) Stormflo: Sterk vind presser havet innover, kombinert med høy tidevannstand. Rammer kystområder.',
          },
          {
            label: 'b',
            task: 'Hvordan kan klimaendringer påvirke naturfarene i Norge i fremtiden?',
            solution: 'Klimaendringer forventes å gi mer intens nedbør (økt flom- og skredfare), mildere vintre med mer regn og mindre snø (endret snøsmelting), stigende havnivå (økt stormflorisiko), og tinende permafrost i fjellet (ustabil grunn, steinsprang). Raskere veksling mellom tørke og kraftig nedbør kan gjøre bakken mindre absorberende.',
          },
        ],
        hints: ['Tenk på Norges geografi — mye kyst, bratte fjell, mange elver.'],
        solution: 'Norges geografi gjør landet utsatt for flom, skred og stormflo. Klimaendringer forventes å forsterke flere av disse naturfarene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 15.6 ==========
    {
      id: 'samfunnsfag-10-15-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-15-ex-6',
        number: '15.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva anbefaler norske myndigheter at hver husstand bør ha av nødforsyninger?',
        options: [
          {
            id: 'a',
            text: 'Mat og vann for 1 dag',
            isCorrect: false,
            feedback: 'Feil. Myndighetene anbefaler lengre egenberedskap enn én dag.',
          },
          {
            id: 'b',
            text: 'Mat, vann og strøm for minst 72 timer (3 døgn)',
            isCorrect: true,
            feedback: 'Riktig! DSB (Direktoratet for samfunnssikkerhet og beredskap) anbefaler at alle husstander bør klare seg selv i minst tre døgn.',
          },
          {
            id: 'c',
            text: 'Mat for en måned',
            isCorrect: false,
            feedback: 'Feil. Tre døgn er minimumsanbefalingen, men en måned er ikke offisiell anbefaling.',
          },
          {
            id: 'd',
            text: 'Ingenting — myndighetene tar seg av alt',
            isCorrect: false,
            feedback: 'Feil. Alle innbyggere har et ansvar for egen beredskap. Myndighetene kan ikke hjelpe alle umiddelbart.',
          },
        ],
        solution: 'Norske myndigheter anbefaler at alle husstander har nødforsyninger for minst 72 timer — inkludert vann, mat, varme og lommelykt.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-15-oppsummering',
      type: 'text',
      content: `## Oppsummering: Naturkatastrofer og sårbarhet

En naturhendelse blir en katastrofe først når den rammer et sårbart samfunn. Forebygging og beredskap redder liv.

**Nøkkelbegreper:**
- **Naturkatastrofe:** Naturhendelse som fører til store ødeleggelser, tap av liv eller samfunnsforstyrrelser
- **Sårbarhet:** Hvor utsatt et samfunn er for skader ved naturhendelser
- **Geologiske farer:** Jordskjelv, vulkanutbrudd, tsunami
- **Meteorologiske farer:** Flom, storm, tørke, skred
- **Forebygging:** Tiltak som reduserer risikoen (arealplanlegging, bygningskrav)
- **Beredskap:** Forberedelser for å håndtere hendelser (varsling, planer, øvelser)
- **Egenberedskap:** At husstander kan klare seg selv i minst 72 timer
- **Sendai-rammeverket:** FNs rammeverk for katastrofereduksjon (2015-2030)
- **Stormflo:** Havnivå som presses opp av sterk vind og høy tidevannstand
- **Arealplanlegging:** Styring av hva som bygges hvor — avgjørende for å unngå bygging i risikosoner`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-15-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-15-ex-7',
        number: '15.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Naturkatastrofer og global rettferdighet.',
        subTasks: [
          {
            label: 'a',
            task: 'Fattige land rammes langt hardere av naturkatastrofer enn rike land, selv om naturhendelsene kan være like sterke. Drøft: Bør rike land ta et større ansvar for å hjelpe fattige land med katastrofeberedskap?',
            solution: 'For: Rike land har ressurser og kompetanse, klimaendringene (som rike land har bidratt mest til) forsterker naturfarer i fattige land, det er billigere å forebygge enn å reparere. Mot: Hvert land har ansvar for egen beredskap, bistandsmidler kan misbrukes, vanskelig å bygge opp kapasitet utenfra. En god drøfting veier argumentene og gir en begrunnet vurdering.',
          },
          {
            label: 'b',
            task: 'Gjerdrum-skredet i desember 2020 tok ti menneskeliv i Norge. Undersøk kort hva som skjedde, og drøft om det kunne vært forhindret gjennom bedre arealplanlegging.',
            solution: 'Gjerdrum-skredet var et kvikkleireskred som ødela et boligfelt. Det var kjent at området hadde kvikkleire, men det var likevel tillatt å bygge der. Drøfting: Strengere restriksjoner på bygging i kvikkleiresoner kunne potensielt forhindret katastrofen, men ville også begrenset utbygging og boligtilbud. Avveiningen mellom sikkerhet og utvikling er krevende.',
          },
        ],
        hints: ['Tenk på sammenhengen mellom fattigdom, klimaendringer og katastroferisiko.'],
        solution: 'Naturkatastrofer rammer urettferdig. Rike lands bidrag til klimaendringer forsterker risikoen i fattige land, noe som reiser spørsmål om ansvar og rettferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-15-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-15-ex-8',
        number: '15.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Egenberedskap — er du forberedt?',
        subTasks: [
          {
            label: 'a',
            task: 'Lag en liste over hva din husstand bør ha for å klare seg i 72 timer uten strøm, vann fra springen eller mulighet til å handle.',
            solution: 'Listen bør inkludere: Drikkevann (3 liter per person per dag), mat som ikke trenger tilberedning eller kjøling (hermetikk, knekkebrød, nøtter), lommelykt med batterier, radio med batterier, fyrstikker/stearinlys, varme klær og sovepose/pledd, førstehjelpsutstyr, nødvendige medisiner, kontanter, lader for mobiltelefon (batteribank), varme drikker (primus/kokeapparat).',
          },
          {
            label: 'b',
            task: 'Finn ut hvilke naturfareutfordringer som er mest relevante for kommunen din (bruk NVE.no eller varsom.no). Beskriv kort hva du fant.',
            solution: 'Svaret er individuelt. Eleven bør finne relevante farer for sitt hjemsted (flom, skred, stormflo etc.) og beskrive dem kort. Kilder som NVE, varsom.no og kommunens ROS-analyse gir informasjon.',
          },
        ],
        hints: ['Sjekk DSBs anbefalinger for egenberedskap på sikkerhverdag.no.'],
        solution: 'Egenberedskap handler om at hver husstand er forberedt på å klare seg selv i minst 72 timer under en krise.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Naturkatastrofe', definition: 'Naturhendelse som fører til store ødeleggelser, tap av menneskeliv eller samfunnsforstyrrelser.' },
    { term: 'Sårbarhet', definition: 'Hvor utsatt et samfunn er for skader ved naturhendelser.' },
    { term: 'Jordskjelv', definition: 'Plutselig frigjøring av spenninger i jordskorpen, ofte langs plategrenser.' },
    { term: 'Tsunami', definition: 'Enorm bølge utløst av jordskjelv på havbunnen eller undersjøiske skred.' },
    { term: 'Forebygging', definition: 'Tiltak som reduserer risikoen for skade, f.eks. arealplanlegging og bygningskrav.' },
    { term: 'Beredskap', definition: 'Forberedelser for å håndtere en krise, f.eks. varsling, planer og øvelser.' },
    { term: 'Egenberedskap', definition: 'At husstander kan klare seg selv i minst 72 timer under en krise.' },
    { term: 'Sendai-rammeverket', definition: 'FNs rammeverk (2015-2030) for å redusere katastroferisiko globalt.' },
    { term: 'Arealplanlegging', definition: 'Styring av hva som bygges hvor, viktig for å unngå bygging i risikosoner.' },
    { term: 'Stormflo', definition: 'Forhøyet havnivå forårsaket av sterk vind og/eller høy tidevannstand.' },
  ],
};

// ============================================================================
// KAPITTEL 16: Arealbruk og interessekonflikter
// LK20: Undersøke korleis menneskeleg aktivitet har ført til endringar i
//        naturen, og drøfte korleis ein kan ta vare på naturmangfaldet
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_16: TextbookChapter = {
  id: 'samfunnsfag-10-16',
  courseId: 'samfunnsfag-10',
  chapterNumber: '16',
  title: 'Arealbruk og interessekonflikter',
  description: 'Lær om hvordan arealer brukes, konflikter mellom ulike interesser, vern av natur, urfolks rettigheter og lokale planprosesser.',
  estimatedMinutes: 90,
  competenceGoals: [
    'undersøke korleis menneskeleg aktivitet har ført til endringar i naturen, og drøfte korleis ein kan ta vare på naturmangfaldet',
    'utforske og presentere ei aktuell samfunnsfagleg problemstilling og drøfte ulike løysingsforslag',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-16-intro',
      type: 'text',
      content: `## Hvem eier naturen?

Tenk deg et stykke urørt natur i fjell-Norge. En kommune vil bygge hyttegrend for å tiltrekke turister og skape arbeidsplasser. En energibedrift vil sette opp vindturbiner for å produsere fornybar energi. Reindriftssamer bruker området som beiteområde, slik de har gjort i hundrevis av år. Miljøvernere vil beskytte området fordi det er leveområde for sårbare arter. Og turgåere vil ha det som friluftsområde.

Hvem har rett? Alle har gode argumenter. Men arealet kan ikke brukes til alt samtidig. Noen interesser vil alltid gå foran andre — og hvem som bestemmer, handler om makt, lovverk og demokratiske prosesser.

**Arealbruk og interessekonflikter** er blant de mest aktuelle politiske temaene i Norge i dag — fra vindkraftdebatten til hytteutbygging, fra motorveiprosjekter til vern av villmark.

I dette kapittelet skal du lære om:
- Ulike typer arealbruk og hvordan de kan komme i konflikt
- Naturvern og naturmangfold
- Vindkraftdebatten som eksempel på interessekonflikt
- Urfolks rettigheter og arealbruk
- Hvordan arealplanlegging fungerer i Norge
- Demokratisk deltakelse i planprosesser`,
    },

    // ========== DEFINISJON: AREALBRUK ==========
    {
      id: 'samfunnsfag-10-16-def-1',
      type: 'definition',
      title: 'Arealbruk og interessekonflikter',
      content: `**Arealbruk** handler om hvordan vi bruker landarealer og naturområder. Ulike bruksformer kan komme i konflikt med hverandre.

**Vanlige arealbruksformål:**
- **Bolig og by:** Boliger, næringsliv, infrastruktur
- **Landbruk:** Dyrket mark og beiteområder
- **Energi:** Vannkraft, vindkraft, solkraft, olje/gass
- **Transport:** Veier, jernbane, flyplasser
- **Friluftsliv:** Turstier, skiløyper, friluftsområder
- **Naturvern:** Nasjonalparker, naturreservater, verneområder
- **Reindrift:** Beiteområder for samiske reindriftsutøvere
- **Hyttebygging:** Fritidsbebyggelse i fjell og ved sjø
- **Gruvedrift:** Utvinning av mineraler og metaller

**Hva er en interessekonflikt?**
En **interessekonflikt** oppstår når ulike grupper har motstridende ønsker om hvordan et område skal brukes. Det samme arealet kan ikke brukes til en nasjonalpark og en vindkraftpark samtidig.

**Typiske konflikter i Norge:**
- Vindkraft vs. reindrift og naturvern
- Hytteutbygging vs. villmark og naturmangfold
- Veibygging vs. matjord og naturområder
- Oppdrettsnæring vs. villaks og fjordmiljø
- Gruvedrift vs. naturvern og fiske

**Viktig prinsipp:** Norsk lov gir alle rett til å ferdes i naturen (allemannsretten), men eiendomsretten gir grunneiere råderett over sin eiendom. Disse rettighetene kan komme i konflikt.`,
    },

    // ========== EKSEMPEL: VINDKRAFTDEBATTEN ==========
    {
      id: 'samfunnsfag-10-16-example-1',
      type: 'example',
      title: 'Eksempel: Vindkraftdebatten — en klassisk interessekonflikt',
      problem: 'Vindkraft er fornybar energi som kan bidra til å redusere klimautslipp. Likevel er vindkraftutbygging svært omstridt i Norge. Hva er argumentene for og mot?',
      solution: `**Argumenter for vindkraft:**
- Fornybar energi som erstatter fossil energi og reduserer klimautslipp
- Kan gi lokale arbeidsplasser og inntekter til kommuner
- Norge har noen av verdens beste vindressurser
- Verden trenger mer fornybar energi for å nå klimamålene

**Argumenter mot vindkraft:**
- Ødelegger naturlandskap og villmark — vindturbiner er svært synlige
- Truer fugler, insekter og annet dyreliv
- Støy fra turbiner plager naboer
- Krever store arealer med veier og anleggsområder
- Kan ødelegge beiteområder for reindrift
- Mye av energien eksporteres — uklart om det gagner lokalsamfunnet

**Fosen-saken — en milepæl:**
I 2021 fastslo Norges Høyesterett at vindkraftutbyggingen på Fosen i Trøndelag krenker samenes rett til kulturutøvelse gjennom reindrift. Utbyggingen brøt med FNs konvensjon om sivile og politiske rettigheter. Per 2024 var konflikten fortsatt ikke løst, og turbinene sto fortsatt.

Fosen-saken viser at interessekonflikter kan innebære grunnleggende rettigheter — og at det å finne løsninger kan ta lang tid.

**Havvind — en mulig løsning?**
Vindkraft til havs unngår mange av konfliktene på land (naturødeleggelse, reindrift, naboer). Men det er dyrere og mer teknisk krevende. Norge har store planer for havvind.`,
    },

    // ========== OPPGAVE 16.1 ==========
    {
      id: 'samfunnsfag-10-16-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-16-ex-1',
        number: '16.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med en interessekonflikt i forbindelse med arealbruk?',
        options: [
          {
            id: 'a',
            text: 'At det ikke finnes nok areal i Norge',
            isCorrect: false,
            feedback: 'Feil. Norge har mye areal, men konflikten handler om at ulike grupper vil bruke det samme arealet til forskjellige formål.',
          },
          {
            id: 'b',
            text: 'At ulike grupper har motstridende ønsker om hvordan et område skal brukes',
            isCorrect: true,
            feedback: 'Riktig! En interessekonflikt oppstår når flere aktører vil bruke det samme arealet til ulike, uforenlige formål.',
          },
          {
            id: 'c',
            text: 'At naturen er i konflikt med seg selv',
            isCorrect: false,
            feedback: 'Feil. Interessekonflikter handler om menneskers ulike ønsker og behov.',
          },
          {
            id: 'd',
            text: 'At det er krig om landområder',
            isCorrect: false,
            feedback: 'Feil. Interessekonflikter i arealbruk handler om fredelige uenigheter som løses gjennom demokratiske prosesser og rettsvesenet.',
          },
        ],
        solution: 'Interessekonflikter i arealbruk oppstår når ulike grupper har motstridende ønsker om hvordan et område skal brukes.',
      },
    },

    // ========== OPPGAVE 16.2 ==========
    {
      id: 'samfunnsfag-10-16-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-16-ex-2',
        number: '16.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vindkraftdebatten i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter to argumenter for og to argumenter mot vindkraftutbygging på land.',
            solution: 'For: 1) Fornybar energi som kan erstatte fossil energi og bidra til klimamål. 2) Kan gi arbeidsplasser og inntekter til kommuner. Mot: 1) Ødelegger natur, landskap og villmark med turbiner og veier. 2) Kan krenke samenes rettigheter til reindrift, som i Fosen-saken.',
          },
          {
            label: 'b',
            task: 'Forklar kort hva Fosen-saken handler om, og hvorfor den er viktig.',
            solution: 'Norges Høyesterett fastslo i 2021 at vindkraftutbyggingen på Fosen krenker samenes rett til kulturutøvelse gjennom reindrift, i strid med FNs konvensjon om sivile og politiske rettigheter. Saken er viktig fordi den viser at urfolks rettigheter kan trumfe statens ønske om energiutbygging, og at klimatiltak og menneskerettigheter kan komme i konflikt.',
          },
        ],
        hints: ['Prøv å se saken fra ulike perspektiver — energi, natur, urfolk, lokalsamfunn.'],
        solution: 'Vindkraftdebatten illustrerer hvordan klimahensyn, naturvern, urfolksrettigheter og lokale interesser kan komme i konflikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: NATURVERN OG NATURMANGFOLD ==========
    {
      id: 'samfunnsfag-10-16-def-2',
      type: 'definition',
      title: 'Naturvern og naturmangfold',
      content: `**Naturmangfold** (biodiversitet) betyr mangfoldet av arter, gener og økosystemer. Et rikt naturmangfold er avgjørende for fungerende økosystemer — og dermed for menneskelig overlevelse.

**Hvorfor er naturmangfold viktig?**
- **Økosystemtjenester:** Naturen gir oss ren luft, rent vann, pollinering av avlinger, flomdemping og klimaregulering
- **Mat og medisin:** Mange medisiner er utviklet fra stoffer i naturen
- **Motstandskraft:** Mangfoldige økosystemer tåler forstyrrelser bedre
- **Kultur og rekreasjon:** Natur gir livskvalitet og er viktig for friluftslivet

**Trusler mot naturmangfoldet:**
- **Arealendringer:** Den største trusselen. Når naturområder bygges ned, mister arter leveområdene sine
- **Forurensning:** Plast, kjemikalier og næringsstoffer skader økosystemer
- **Overutnyttelse:** Overfiske, overjakt og overbeiting
- **Klimaendringer:** Endrer leveforholdene for mange arter raskere enn de kan tilpasse seg
- **Fremmede arter:** Arter som sprer seg til nye områder kan utkonkurrere lokale arter

**Naturvern i Norge:**
Norge har 47 nasjonalparker og en rekke naturreservater. **Naturmangfoldloven** (2009) beskytter norsk natur. Norge har også forpliktet seg internasjonalt gjennom **Naturavtalen** (Kunming-Montreal-avtalen, 2022), som har som mål å verne 30 % av verdens land- og havområder innen 2030.

**«Bit for bit»-utbygging:**
Et stort problem er at naturområder ikke forsvinner i ett stort jafs, men litt etter litt — en hytte her, en vei der, et kraftverk et annet sted. Summen av mange små inngrep kan gi store konsekvenser for naturmangfoldet.`,
    },

    // ========== EKSEMPEL: VILLREIN ==========
    {
      id: 'samfunnsfag-10-16-example-2',
      type: 'example',
      title: 'Eksempel: Villreinen — Norges ansvar for en truet art',
      problem: 'Norge har verdens sørligste villreinstammer og et spesielt internasjonalt ansvar for arten. Likevel er villreinen truet. Hva er utfordringene?',
      solution: `**Norges ansvar:**
Europa hadde en gang villrein over store deler av kontinentet. I dag finnes de siste villreinstammene i Sør-Norge (Hardangervidda, Rondane, Setesdal m.fl.). Norge har dermed et spesielt ansvar for å bevare arten.

**Hvorfor er villreinen truet?**
- **Fragmentering av leveområder:** Veier, hyttebyer, kraftlinjer og vindkraftverk deler opp villreinens leveområder i stadig mindre biter
- **Ferdsel og forstyrrelse:** Turisme, terrengsykling og friluftsliv forstyrrer reinen, særlig i kalvingstiden
- **Klimaendringer:** Endret snøforhold påvirker beite og trekkruter
- **Sykdom:** Skrantesjuke (CWD) ble oppdaget på Hardangervidda i 2020

**Tiltak:**
- Villreinområder er utpekt som «nasjonale villreinområder» med egne forvaltningsplaner
- Tilgangen reguleres i sårbare perioder
- Hytteutbygging begrenses i nærområdene
- Overvåking og forskning

**Dilemmaet:**
Å beskytte villreinen betyr å begrense menneskelig aktivitet — hyttebygging, friluftsliv, energiutbygging — i store fjellområder. Dette skaper konflikter med kommuner som vil utvikle seg, grunneiere som vil bygge, og folk som vil bruke fjellene fritt.

Dette er et tydelig eksempel på hvordan naturvern kan komme i konflikt med andre samfunnsinteresser.`,
    },

    // ========== OPPGAVE 16.3 ==========
    {
      id: 'samfunnsfag-10-16-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-16-ex-3',
        number: '16.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den største trusselen mot naturmangfoldet i verden?',
        options: [
          {
            id: 'a',
            text: 'Klimaendringer',
            isCorrect: false,
            feedback: 'Klimaendringer er en alvorlig trussel, men per i dag er arealendringer (tap av leveområder) den aller største.',
          },
          {
            id: 'b',
            text: 'Arealendringer — at naturområder bygges om til andre formål',
            isCorrect: true,
            feedback: 'Riktig! Tap og endring av leveområder er den viktigste årsaken til tap av naturmangfold globalt.',
          },
          {
            id: 'c',
            text: 'Jakt',
            isCorrect: false,
            feedback: 'Overbeskatning er en trussel for noen arter, men arealendringer er en langt større trussel totalt sett.',
          },
          {
            id: 'd',
            text: 'Turisme',
            isCorrect: false,
            feedback: 'Turisme kan påvirke natur lokalt, men er ikke den største trusselen globalt.',
          },
        ],
        solution: 'Arealendringer (tap av naturlige leveområder gjennom utbygging, avskoging og annen omforming) er den viktigste årsaken til tap av naturmangfold globalt.',
      },
    },

    // ========== DEFINISJON: AREALPLANLEGGING ==========
    {
      id: 'samfunnsfag-10-16-def-3',
      type: 'definition',
      title: 'Arealplanlegging — demokrati i praksis',
      content: `**Arealplanlegging** er prosessen der myndighetene bestemmer hva ulike arealer skal brukes til. I Norge er dette regulert gjennom **plan- og bygningsloven**, og det er først og fremst **kommunene** som har ansvar for arealplanlegging.

**Slik fungerer arealplanlegging i Norge:**

**1. Kommuneplan:**
Hver kommune lager en kommuneplan som viser hva ulike arealer skal brukes til de neste 10-12 årene. Kartet viser hva som er boligområde, næringsområde, landbruk, friluftsliv og naturvern.

**2. Reguleringsplan:**
Mer detaljert plan for et spesifikt område — for eksempel et nytt boligfelt eller en ny vei.

**3. Medvirkning:**
Planprosessen skal være **demokratisk**. Det betyr at:
- Planer legges ut til **offentlig ettersyn** (alle kan lese og kommentere)
- Det holdes **folkemøter** og **høringer** der innbyggere, organisasjoner og berørte kan si sin mening
- Innsigelser fra andre myndigheter (fylkesmann, Sametinget, NVE) kan stoppe planer

**4. Statlige føringer:**
Staten kan legge begrensninger gjennom:
- Verneplaner (nasjonalparker, naturreservater)
- Jordvernstrategi (beskytte matjord)
- Rikspolitiske retningslinjer

**Viktig:** Arealplanlegging er et av de viktigste verktøyene for å balansere ulike interesser. Men det krever at folk faktisk deltar i prosessene — ellers bestemmer andre over ditt nærmiljø.

**Du kan påvirke:** Alle har rett til å komme med innspill til kommuneplaner og reguleringsplaner. Ungdomsrådet i kommunen kan også delta i planprosesser.`,
    },

    // ========== OPPGAVE 16.4 ==========
    {
      id: 'samfunnsfag-10-16-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-16-ex-4',
        number: '16.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Naturvern og samfunnsutvikling.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med «bit for bit»-utbygging og hvorfor det er et problem for naturmangfoldet.',
            solution: '«Bit for bit»-utbygging betyr at naturområder ikke forsvinner i store inngrep, men gradvis gjennom mange små tiltak: en hytte her, en vei der, en kraftlinje et annet sted. Problemet er at hvert enkelt inngrep virker lite, men summen av mange små inngrep fragmenterer naturområder, ødelegger leveområder og reduserer naturmangfoldet over tid.',
          },
          {
            label: 'b',
            task: 'Forklar kort hvordan arealplanlegging fungerer i en norsk kommune, og hvordan vanlige innbyggere kan påvirke prosessen.',
            solution: 'Kommunen lager kommuneplan og reguleringsplaner som bestemmer hva arealer skal brukes til. Planene legges ut til offentlig ettersyn der alle kan sende inn kommentarer og innsigelser. Det holdes folkemøter og høringer. Innbyggere kan delta direkte, gjennom organisasjoner, eller gjennom ungdomsrådet. Alle har rett til å komme med innspill.',
          },
        ],
        hints: ['Tenk på sammenhengen mellom demokratisk deltakelse og arealplanlegging.'],
        solution: 'Arealplanlegging er demokrati i praksis. Alle kan påvirke hva som bygges i nærmiljøet — men det krever at folk engasjerer seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 16.5 ==========
    {
      id: 'samfunnsfag-10-16-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-16-ex-5',
        number: '16.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lokale interessekonflikter.',
        subTasks: [
          {
            label: 'a',
            task: 'Tenk deg at kommunen din vil bygge en ny motorvei som vil gå gjennom et naturområde og noen gårdsbruk. Hvem kan tenkes å være for og mot prosjektet? List opp minst tre interessegrupper på hver side.',
            solution: 'For: Pendlere som vil ha kortere reisetid, næringslivet som trenger god infrastruktur, kommunepolitikere som vil styrke bostedsattraktivitet. Mot: Grunneiere som mister jord, naturvernere som vil beskytte naturmangfoldet, bønder som mister matjord, friluftslivsinteresser, lokalbefolkning som får mer støy.',
          },
          {
            label: 'b',
            task: 'Forklar hvordan en slik konflikt kan løses gjennom demokratiske prosesser i Norge.',
            solution: 'Prosjektet går gjennom en planprosess med konsekvensutredning (miljø, samfunn, økonomi), offentlig ettersyn der alle kan komme med innspill, høringer og folkemøter, politisk behandling i kommunestyret og eventuelt fylkestinget, og eventuelt klagebehandling. Berørte parter kan påvirke gjennom formelle og uformelle kanaler.',
          },
        ],
        hints: ['Tenk på hvem som vinner og hvem som taper på store utbyggingsprosjekter.'],
        solution: 'Arealbrukskonflikter involverer mange interessegrupper. Demokratiske planprosesser skal sikre at alle stemmer blir hørt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 16.6 ==========
    {
      id: 'samfunnsfag-10-16-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-16-ex-6',
        number: '16.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er allemannsretten?',
        options: [
          {
            id: 'a',
            text: 'Retten til å eie jord i Norge',
            isCorrect: false,
            feedback: 'Feil. Allemannsretten handler om ferdsel, ikke eierskap.',
          },
          {
            id: 'b',
            text: 'Retten til å ferdes fritt i utmark, uavhengig av hvem som eier grunnen',
            isCorrect: true,
            feedback: 'Riktig! Allemannsretten gir alle rett til å gå, sykle, telte og plukke bær i utmark — men du må vise hensyn.',
          },
          {
            id: 'c',
            text: 'Retten til å bygge hva du vil på din eiendom',
            isCorrect: false,
            feedback: 'Feil. Bygging reguleres av plan- og bygningsloven, ikke allemannsretten.',
          },
          {
            id: 'd',
            text: 'En rett som bare gjelder for nordmenn',
            isCorrect: false,
            feedback: 'Feil. Allemannsretten gjelder for alle som ferdes i norsk natur, uavhengig av statsborgerskap.',
          },
        ],
        solution: 'Allemannsretten gir alle rett til å ferdes fritt i utmark (skog, fjell, strand) uavhengig av hvem som eier grunnen. Den er regulert i friluftsloven.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-16-oppsummering',
      type: 'text',
      content: `## Oppsummering: Arealbruk og interessekonflikter

Arealbruk handler om makt, verdier og demokrati. Ulike grupper har motstridende ønsker, og planprosesser skal balansere dem.

**Nøkkelbegreper:**
- **Arealbruk:** Hvordan landarealer og naturområder brukes
- **Interessekonflikt:** Når ulike grupper har motstridende ønsker om arealbruk
- **Naturmangfold:** Mangfoldet av arter, gener og økosystemer
- **Naturvern:** Beskyttelse av natur gjennom lover og verneområder
- **Naturmangfoldloven:** Norsk lov som beskytter naturmangfoldet
- **Naturavtalen:** Internasjonal avtale om å verne 30 % av land og hav innen 2030
- **Arealplanlegging:** Prosessen der myndighetene bestemmer hva arealer skal brukes til
- **Kommuneplan:** Kommunens overordnede plan for arealbruk
- **Allemannsretten:** Retten til fri ferdsel i utmark
- **«Bit for bit»-utbygging:** Gradvis nedbygging av natur gjennom mange små inngrep`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-16-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-16-ex-7',
        number: '16.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Klima vs. natur.',
        subTasks: [
          {
            label: 'a',
            task: 'Fosen-saken viser at klimatiltak (vindkraft) kan komme i konflikt med urfolksrettigheter. Drøft: Kan hensynet til klimaet rettferdiggjøre inngrep som krenker urfolks rettigheter?',
            solution: 'For: Klimaendringene truer alle, også urfolk. Fornybar energi er nødvendig. Individuelle rettigheter må noen ganger vike for fellesskapets beste. Mot: Menneskerettigheter er grunnleggende og kan ikke settes til side for klimahensyn. Samene har allerede lidd historisk urett (fornorskingspolitikken). Det finnes alternativer (havvind, energieffektivisering). Høyesterett har slått fast at det er et lovbrudd. En god drøfting viser at begge sider har gyldige argumenter og gir en begrunnet vurdering.',
          },
          {
            label: 'b',
            task: 'Noen mener at klimahensyn og naturvernhensyn alltid går hånd i hånd. Andre mener de kan komme i konflikt. Drøft dette med eksempler.',
            solution: 'Hånd i hånd: Bevaring av skog binder CO₂ og beskytter biologisk mangfold. Mot hverandre: Vindkraft er bra for klimaet men kan ødelegge natur og dyreliv. Vannkraft er klimavennlig men kan ødelegge elveøkosystemer. Gruvedrift for «grønne» metaller (litium til batterier) kan skade natur. Konklusjon: Klima og natur henger ofte sammen, men ikke alltid. Vi må finne løsninger som tar hensyn til begge.',
          },
        ],
        hints: ['Husk at det finnes situasjoner der to gode formål kan komme i konflikt med hverandre.'],
        solution: 'Klima- og naturhensyn henger ofte sammen, men kan komme i konflikt. Gode løsninger krever avveininger og respekt for grunnleggende rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-16-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-16-ex-8',
        number: '16.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tverrfaglig samleoppgave: Geografi og ressurser — sammenhenger.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et naturområde i Norge som er gjenstand for interessekonflikt (f.eks. Lofoten/olje, Fosen/vindkraft, Hardangervidda/villrein, eller et lokalt eksempel). Beskriv konflikten og de ulike interessene.',
            solution: 'Svaret er individuelt. Eleven bør identifisere minst tre ulike interessegrupper med motstridende ønsker, og beskrive hva hver gruppe ønsker og hvorfor.',
          },
          {
            label: 'b',
            task: 'Bruk begreper fra flere kapitler i denne delen (klima, ressurser, befolkning, kart, naturkatastrofer, arealbruk) til å analysere konflikten du valgte.',
            solution: 'En sterk besvarelse trekker inn begreper fra flere kapitler: klimaendringer og energiomstilling (kap. 11), bærekraftig forvaltning (kap. 12), bosettingsmønstre og sentralisering (kap. 13), kartanalyse for å forstå området (kap. 14), sårbarhet og naturfare (kap. 15), og interessekonflikter og planprosesser (kap. 16).',
          },
          {
            label: 'c',
            task: 'Foreslå en løsning på konflikten som du mener balanserer de ulike hensynene. Begrunn forslaget ditt.',
            solution: 'Svaret er individuelt. En god besvarelse anerkjenner at det ikke finnes perfekte løsninger, viser at eleven forstår ulike perspektiver, og foreslår et kompromiss med begrunnelse. Fagbegreper og eksempler bør brukes.',
          },
        ],
        hints: [
          'Vis bredde ved å bruke begreper fra flere kapitler.',
          'Vis dybde ved å analysere grundig.',
          'Vis selvstendighet ved å ta en begrunnet stilling.',
        ],
        solution: 'Tverrfaglige oppgaver viser at du kan se sammenhenger mellom ulike temaer og bruke kunnskap fra hele pensum i en sammenhengende analyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Arealbruk', definition: 'Hvordan landarealer og naturområder brukes av mennesker.' },
    { term: 'Interessekonflikt', definition: 'Situasjon der ulike grupper har motstridende ønsker om bruk av det samme arealet.' },
    { term: 'Naturmangfold', definition: 'Mangfoldet av arter, gener og økosystemer i et område.' },
    { term: 'Naturmangfoldloven', definition: 'Norsk lov (2009) som beskytter naturmangfoldet.' },
    { term: 'Naturavtalen', definition: 'Internasjonal avtale (2022) om å verne 30 % av land og hav innen 2030.' },
    { term: 'Arealplanlegging', definition: 'Prosessen der myndighetene bestemmer hva ulike arealer skal brukes til.' },
    { term: 'Kommuneplan', definition: 'Kommunens overordnede plan for arealbruk de neste 10-12 årene.' },
    { term: 'Allemannsretten', definition: 'Retten til fri ferdsel i utmark, uavhengig av hvem som eier grunnen.' },
    { term: '«Bit for bit»-utbygging', definition: 'Gradvis nedbygging av natur gjennom mange små inngrep som samlet har stor effekt.' },
    { term: 'Fosen-saken', definition: 'Høyesterettsdom (2021) som fastslo at vindkraft på Fosen krenket samenes rettigheter.' },
  ],
};

// ============================================================================
// Eksport av alle kapitler i del 4
// ============================================================================

export const SAMFUNNSFAG_10_DEL4_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_10_11,
  CHAPTER_SAMFUNNSFAG_10_12,
  CHAPTER_SAMFUNNSFAG_10_13,
  CHAPTER_SAMFUNNSFAG_10_14,
  CHAPTER_SAMFUNNSFAG_10_15,
  CHAPTER_SAMFUNNSFAG_10_16,
];
