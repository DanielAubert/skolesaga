/**
 * Tekstbok innhold for Geografi VG1
 *
 * Folger LK20 lareplan for geografi.
 * Dekker naturgeografi, samfunnsgeografi og barekraftig utvikling.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Kart, GIS og geografiske metoder
// ============================================================================

export const CHAPTER_GEOGRAFI_1: TextbookChapter = {
  id: 'geografi-1-1',
  courseId: 'geografi',
  chapterNumber: '1',
  title: 'Kart, GIS og geografiske metoder',
  description: 'Laer om kart, geografiske informasjonssystemer og metoder i geografi.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke kart og geografiske informasjonssystemer til å utforske, analysere og presentere geografiske forhold',
  ],
  content: [
    {
      id: 'geografi-1-1-intro',
      type: 'text',
      content: `## Geografi - laeren om jorden

Geografi handler om å forstå verden rundt oss. Faget studerer både naturlige forhold (naturgeografi) og menneskelige aktiviteter (samfunnsgeografi), og hvordan disse påvirker hverandre.

**Geografiens hovedområder:**
- Naturgeografi - landformer, klima, vær, vegetasjon
- Samfunnsgeografi - befolkning, bosetting, ressursbruk
- Geopolitikk - maktforhold og konflikter knyttet til sted

**Geografiske metoder:**
- Kartanalyse og GIS
- Feltarbeid og observasjon
- Statistisk analyse
- Fjernanalyse (satellittbilder)`,
    },
    {
      id: 'geografi-1-1-def-1',
      type: 'definition',
      title: 'Kartbegreper',
      content: `**Målestokk:**
Forholdet mellom avstand på kartet og virkeligheten. 1:50 000 betyr at 1 cm på kartet tilsvarer 50 000 cm (500 m) i virkeligheten.

**Høydekurver:**
Linjer som forbinder punkter med samme høyde over havet. Tette kurver = bratt terreng.

**Koordinatsystem:**
System for å angi posisjon. I Norge brukes UTM-koordinater og geografiske koordinater (bredde- og lengdegrader).

**Tegnforklaring:**
Oversikt over symbolene som brukes på kartet.

**Projeksjon:**
Metode for å overføre jordoverflaten til et flatt kart. Alle projeksjoner gir noe forvrengning.`,
    },
    {
      id: 'geografi-1-1-def-2',
      type: 'definition',
      title: 'GIS - Geografiske informasjonssystemer',
      content: `**GIS (Geografisk informasjonssystem):**
Dataverktøy for å samle, lagre, analysere og presentere geografisk informasjon.

**Kartlag:**
Ulike typer informasjon kan vises som separate lag - for eksempel veier, bygninger, høydedata og befolkningstetthet.

**GPS (Global Positioning System):**
Satellittbasert system for nøyaktig posisjonsbestemmelse.

**Fjernanalyse:**
Innsamling av informasjon om jordoverflaten ved hjelp av satellitter eller fly.

**Eksempler på GIS i bruk:**
- Nødtjenester finner raskeste rute
- Kommuner planlegger arealbruk
- Forskere studerer klimaendringer
- Google Maps og lignende tjenester`,
    },
    {
      id: 'geografi-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Bruke målestokk',
      problem: `På et kart med målestokk 1:50 000 måler du at avstanden mellom to fjelltopper er 6 cm. Hvor lang er avstanden i virkeligheten?`,
      solution: `**Løsning:**

1. Målestokk 1:50 000 betyr at 1 cm på kartet = 50 000 cm i virkeligheten

2. 6 cm på kartet = 6 × 50 000 cm = 300 000 cm

3. Gjør om til kilometer: 300 000 cm = 3000 m = 3 km

**Svar:** Avstanden mellom fjelltoppene er 3 km.`,
    },
    {
      id: 'geografi-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom naturgeografi og samfunnsgeografi. Gi to eksempler på hvert område.',
        hints: ['Tenk på hva som studeres - natur eller mennesker'],
        solution: 'Naturgeografi studerer fysiske forhold som landformer, klima og vegetasjon. Eksempler: fjellformasjoner, havstrømmer. Samfunnsgeografi studerer menneskelig aktivitet og organisering. Eksempler: befolkningsfordeling, urbanisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Regn ut virkelig avstand:',
        subTasks: [
          {
            label: 'a',
            task: 'Målestokk 1:25 000, kartavstand 4 cm',
            solution: '4 × 25 000 = 100 000 cm = 1 km',
          },
          {
            label: 'b',
            task: 'Målestokk 1:100 000, kartavstand 8,5 cm',
            solution: '8,5 × 100 000 = 850 000 cm = 8,5 km',
          },
          {
            label: 'c',
            task: 'Målestokk 1:50 000, kartavstand 12 cm',
            solution: '12 × 50 000 = 600 000 cm = 6 km',
          },
        ],
        solution: 'a) 1 km, b) 8,5 km, c) 6 km',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva forteller høydekurvene oss om terrenget? Forklar hva det betyr når høydekurvene ligger tett sammen versus langt fra hverandre.',
        hints: ['Tenk på bratthet'],
        solution: 'Høydekurver forbinder punkter med samme høyde. Når kurvene ligger tett, er terrenget bratt. Når de ligger langt fra hverandre, er terrenget slakt. Ekvidistansen (høydeforskjellen mellom kurvene) angis i tegnforklaringen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er GIS, og nevn minst tre praktiske bruksområder for GIS i samfunnet.',
        hints: ['Tenk på ulike sektorer: nødtjenester, planlegging, forskning'],
        solution: 'GIS er geografiske informasjonssystemer - dataverktøy for å samle, analysere og presentere geografisk informasjon. Bruksområder: 1) Nødtjenester (finne raskeste rute), 2) Byplanlegging (arealbruk), 3) Miljøovervåking (klimaforskning), 4) Transport (navigasjon), 5) Eiendomsforvaltning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor gir alle kartprojeksjoner noe forvrengning? Hva må kartografer velge mellom?',
        hints: ['Tenk på formen til jorden versus et flatt kart'],
        solution: 'Jorden er en kule (geoid), og det er umulig å overføre en kuleflate til et flatt kart uten forvrengning. Kartografer må velge mellom å bevare: 1) riktige arealer (flateriktige projeksjoner), 2) riktige vinkler/former (vinkelriktige projeksjoner), eller 3) riktige avstander langs visse linjer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Gjennomfør en enkel GIS-øvelse: Bruk Google Maps eller Norgeskart til å finne koordinatene til skolen din, og beskriv hva du kan lese ut av kartet om området.',
        hints: ['Se på høyreklikk for koordinater', 'Studer kartlag som terreng, satellitt'],
        solution: 'Svaret bør inneholde: 1) Koordinatene (bredde- og lengdegrad), 2) Observasjoner om terreng, bebyggelse, veier, naturområder i nærheten. Eleven bør vise forståelse for hvordan ulike kartlag gir ulik informasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Jordens oppbygging og landformer
// ============================================================================

export const CHAPTER_GEOGRAFI_2: TextbookChapter = {
  id: 'geografi-1-2',
  courseId: 'geografi',
  chapterNumber: '2',
  title: 'Jordens oppbygging og landformer',
  description: 'Forstå jordens indre struktur og hvordan landformer dannes.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for naturgeografiske prosesser og forklare hvordan disse former jordoverflaten',
  ],
  content: [
    {
      id: 'geografi-1-2-intro',
      type: 'text',
      content: `## Jordens oppbygging

Jorden er bygget opp av flere lag med ulike egenskaper. Disse lagene påvirker prosessene som former jordoverflaten.

**Jordens lag (fra innerst til ytterst):**
- Indre kjerne - fast jern og nikkel (ca. 5500°C)
- Ytre kjerne - flytende jern og nikkel
- Mantelen - delvis flytende silisiumrike bergarter
- Skorpen - fast ytre lag (5-70 km tykt)

**To typer jordskorpe:**
- Kontinentalskorpen - tykk (30-70 km), lett, hovedsakelig granitt
- Havskorpen - tynn (5-10 km), tung, hovedsakelig basalt`,
    },
    {
      id: 'geografi-1-2-def-1',
      type: 'definition',
      title: 'Platetektonikk',
      content: `**Litosfæren:**
Jordens stive ytre lag bestående av skorpen og øvre del av mantelen. Delt inn i tektoniske plater.

**Astenosfæren:**
Delvis smeltet lag under litosfæren der platene "flyter".

**Platetektonikk:**
Teorien om at litosfæren er delt i plater som beveger seg i forhold til hverandre.

**Plategrenser:**
- **Divergerende** - plater beveger seg fra hverandre (midthavsrygger)
- **Konvergerende** - plater beveger seg mot hverandre (subduksjon, fjellkjededannelse)
- **Transforme** - plater glir langs hverandre (jordskjelv)

**Kontinentaldrift:**
Prosessen der kontinentene beveger seg over tid. For 200 millioner år siden var alle kontinenter samlet i superkontinentet Pangea.`,
    },
    {
      id: 'geografi-1-2-def-2',
      type: 'definition',
      title: 'Indre og ytre krefter',
      content: `**Indre (endogene) krefter:**
Krefter som kommer fra jordens indre og bygger opp landformer:
- Vulkanisme
- Jordskjelv
- Fjellkjededannelse

**Ytre (eksogene) krefter:**
Krefter som bryter ned og former landoverflaten:
- Forvitring (mekanisk og kjemisk)
- Erosjon (vann, is, vind)
- Sedimentasjon (avleiring)

**Landformenes kretsløp:**
Indre krefter bygger opp, ytre krefter bryter ned - en kontinuerlig prosess over millioner av år.`,
    },
    {
      id: 'geografi-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Norske fjorder',
      problem: `Hvordan ble de norske fjordene dannet?`,
      solution: `**Fjorddannelse:**

1. **Utgangspunkt:** Elvedaler som hadde erodert seg ned i landskapet over lang tid.

2. **Istidene:** For ca. 2,6 millioner år siden begynte istidene. Isbreer fylte dalene.

3. **Breerosjonen:** Isbreene gravde dalene dypere og bredere. U-formede daler ble dannet.

4. **Overfordypning:** Breene gravde dypest der de var tykkest og beveget seg raskt, ofte langt under havnivå.

5. **Etter istiden:** Da isen smeltet for ca. 10 000 år siden, steg havet og fylte de overfordypede dalene.

**Resultat:** Lange, dype, smale innsjøer av saltvann - fjorder. Sognefjorden er 1308 m dyp og 204 km lang.`,
    },
    {
      id: 'geografi-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv jordens lagdeling fra innerst til ytterst. Hvilke egenskaper har hvert lag?',
        hints: ['Tenk på temperatur og aggregattilstand'],
        solution: 'Indre kjerne (fast, jern/nikkel, ca. 5500°C), ytre kjerne (flytende jern/nikkel), mantelen (delvis smeltet, silisiumrike bergarter), skorpen (fast, tynnest under havet, tykkest under kontinentene).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar de tre typene plategrenser og gi eksempler på hver:',
        subTasks: [
          {
            label: 'a',
            task: 'Divergerende plategrenser',
            solution: 'Plater beveger seg fra hverandre. Ny skorpe dannes. Eksempel: Midtatlantiske ryggen, Øst-Afrika-riften.',
          },
          {
            label: 'b',
            task: 'Konvergerende plategrenser',
            solution: 'Plater beveger seg mot hverandre. Subduksjon eller fjellkjededannelse. Eksempel: Himalaya, Andesfjellene, Marianergropen.',
          },
          {
            label: 'c',
            task: 'Transforme plategrenser',
            solution: 'Plater glir langs hverandre. Forårsaker jordskjelv. Eksempel: San Andreas-forkastningen i California.',
          },
        ],
        solution: 'Se deloppgavene for fullstendig svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom indre og ytre krefter? Gi eksempler på landformer skapt av hver type.',
        hints: ['Tenk på bygge opp vs. bryte ned'],
        solution: 'Indre krefter (endogene) kommer fra jordens indre og bygger opp: vulkaner, fjellkjeder, jordskorpebevegelser. Ytre krefter (eksogene) bryter ned og former: V-daler (elver), U-daler (isbreer), sandstrender (bølger), sanddyner (vind).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvordan isbreer former landskapet. Hvilke landformer er typiske for et landskap formet av isbreer?',
        hints: ['Tenk på erosjon og avsetning'],
        solution: 'Isbreer eroderer gjennom plukking (løsriver stein) og skuring (sliper fjellet). Typiske landformer: U-daler, fjorder, botner (sirkelformede fordypninger), morener (avsetninger), esker (grusrygger), flyttblokker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor ligger de fleste vulkaner og jordskjelvområder langs plategrensene? Bruk platetektonisk teori til å forklare.',
        hints: ['Tenk på hva som skjer der plater møtes eller skilles'],
        solution: 'Ved plategrensene er jordskorpen ustabil. Ved konvergerende grenser presses en plate ned (subduksjon), bergarter smelter og stiger opp som vulkaner. Ved divergerende grenser strømmer magma opp. Spenninger langs alle plategrenser gir jordskjelv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Studer et kart over tektoniske plater. Hvilke plater grenser Norge til, og hvilken type plategrense finner vi nærmest Norge?',
        hints: ['Se på Atlanterhavet'],
        solution: 'Norge ligger på den eurasiske platen. Nærmeste plategrense er den midtatlantiske ryggen - en divergerende plategrense der den eurasiske og nordamerikanske platen beveger seg fra hverandre. Island ligger på denne ryggen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Vaer, klima og klimasoner
// ============================================================================

export const CHAPTER_GEOGRAFI_3: TextbookChapter = {
  id: 'geografi-1-3',
  courseId: 'geografi',
  chapterNumber: '3',
  title: 'Vaer, klima og klimasoner',
  description: 'Forstå forskjellen mellom vaer og klima, og jordens klimasoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for hvordan solinnstråling og sirkulasjon i atmosfæren og havet påvirker vær og klima',
  ],
  content: [
    {
      id: 'geografi-1-3-intro',
      type: 'text',
      content: `## Vaer og klima

Vaer og klima er to forskjellige ting, selv om de henger sammen.

**Vaer:**
Tilstanden i atmosfæren her og nå - temperatur, nedbør, vind, luftfuktighet. Vaeret endrer seg fra dag til dag.

**Klima:**
Gjennomsnittlig værmønster over lang tid (minst 30 år) i et område. Klimaet er stabilt over lengre perioder.

**Faktorer som påvirker klima:**
- Breddegrad (solinnstråling)
- Høyde over havet
- Avstand fra havet
- Havstrømmer
- Vindmønstre
- Fjellkjeder`,
    },
    {
      id: 'geografi-1-3-def-1',
      type: 'definition',
      title: 'Atmosfaerisk sirkulasjon',
      content: `**Solinnstråling:**
Solen varmer jorden ujevnt - mest ved ekvator, minst ved polene. Dette skaper temperaturforskjeller som driver vindene.

**Hadley-cellen:**
Varm luft stiger ved ekvator, beveger seg mot polene i høyden, synker ved ca. 30° bredde. Skaper passatvindene.

**Vestavindsbeltet:**
Dominerende vinder fra vest mellom 30° og 60° bredde. Viktig for Norges klima.

**Coriolis-effekten:**
Jordrotasjonen avbøyer vinder og havstrømmer - til høyre på nordlige halvkule, til venstre på sørlige.

**Høytrykk og lavtrykk:**
- Høytrykk: Synkende luft, stabilt, ofte pent vær
- Lavtrykk: Stigende luft, ustabilt, ofte nedbør`,
    },
    {
      id: 'geografi-1-3-def-2',
      type: 'definition',
      title: 'Klimasoner',
      content: `**Tropisk klima (0-23,5°):**
Varmt hele året, mye nedbør. Regnskoger og savanner.

**Subtropisk klima (23,5-35°):**
Varme somre, milde vintre. Middelhavsklima med tørre somre.

**Temperert klima (35-60°):**
Fire årstider, moderat nedbør. Norge har temperert klima.

**Subarktisk/subantarktisk klima (60-70°):**
Korte, kjølige somre og lange, kalde vintre.

**Polart klima (70-90°):**
Kaldt hele året, lite nedbør. Permafrost.

**Høydeklima:**
Temperatur synker med høyden (ca. 0,6°C per 100 m). Fjellområder har eget klima uavhengig av breddegrad.`,
    },
    {
      id: 'geografi-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Norges klima',
      problem: `Hvorfor har Norge et mildere klima enn andre områder på samme breddegrad?`,
      solution: `**Norges klimafordeler:**

1. **Golfstrømmen:**
   - Varm havstrøm fra Mexicogulfen
   - Transporterer varme nordover langs norskekysten
   - Holder havtemperaturen høyere enn forventet

2. **Vestavindsbeltet:**
   - Dominerende vinder fra vest over Atlanterhavet
   - Vindene tar opp varme og fuktighet fra havet
   - Gir milde vintre og moderat nedbør på Vestlandet

3. **Kystklima vs. innlandsklima:**
   - Kysten: Milde vintre, kjølige somre (oseanisk)
   - Innlandet: Kalde vintre, varme somre (kontinentalt)

**Sammenligning:**
Bergen (60°N): Gjennomsnitt januar +2°C
Churchill, Canada (58°N): Gjennomsnitt januar -26°C

Uten Golfstrømmen ville store deler av Norge vært ubeboelig.`,
    },
    {
      id: 'geografi-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom vær og klima. Hvorfor kan vi ikke si at en varm sommerdag beviser global oppvarming?',
        hints: ['Tenk på tidsskala'],
        solution: 'Vær er atmosfærens tilstand her og nå, klima er gjennomsnittlig vær over minst 30 år. En enkelt varm dag er vær, ikke klima. For å se klimaendringer må vi studere langvarige trender i gjennomsnittstemperatur, nedbør osv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor det er varmest ved ekvator og kaldest ved polene.',
        hints: ['Tenk på solvinkel og solinnstråling'],
        solution: 'Ved ekvator treffer solstrålene jordoverflaten i en bratt vinkel (nær 90°), og energien konsentreres på et lite område. Ved polene treffer strålene i en slak vinkel og spres over større områder. I tillegg må strålene gjennom mer atmosfære ved polene, som absorberer energi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv klimaet i de ulike klimasonene:',
        subTasks: [
          {
            label: 'a',
            task: 'Tropisk klima',
            solution: 'Varmt hele året (over 18°C alle måneder), mye nedbør, ingen årstider basert på temperatur.',
          },
          {
            label: 'b',
            task: 'Temperert klima',
            solution: 'Fire tydelige årstider, moderat temperatur og nedbør, varierende fra kyst til innland.',
          },
          {
            label: 'c',
            task: 'Polart klima',
            solution: 'Kaldt hele året (varmeste måned under 10°C), lite nedbør, permafrost, is og snø.',
          },
        ],
        solution: 'Se deloppgavene for beskrivelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar betydningen av Golfstrømmen for klimaet i Norge og Nordvest-Europa.',
        hints: ['Sammenlign med steder på samme breddegrad'],
        solution: 'Golfstrømmen transporterer varmt vann fra tropene nordover. Dette gir Norge et mye mildere klima enn andre steder på samme breddegrad (som Labrador i Canada). Uten Golfstrømmen ville vintrene vært mye kaldere og store deler av kysten islagt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er Coriolis-effekten, og hvordan påvirker den vinder og havstrømmer?',
        hints: ['Tenk på jordrotasjonen'],
        solution: 'Coriolis-effekten skyldes jordrotasjonen. Den avbøyer bevegende luft og vann til høyre på nordlige halvkule og til venstre på sørlige. Dette påvirker vindretninger (passatvinder, vestavinder) og havstrømmenes baner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign klimaet på Vestlandet med klimaet i Innlands-Norge. Forklar forskjellene.',
        hints: ['Tenk på avstand fra havet og fjellkjeder'],
        solution: 'Vestlandet: Kystklima med milde vintre, kjølige somre, mye nedbør (oseanisk). Innlandet: Innlandsklima med kalde vintre, varme somre, mindre nedbør (kontinentalt). Fjellene hindrer fuktig luft fra vest å nå innlandet, og havet demper temperatursvingninger på kysten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Klimaendringer og konsekvenser
// ============================================================================

export const CHAPTER_GEOGRAFI_4: TextbookChapter = {
  id: 'geografi-1-4',
  courseId: 'geografi',
  chapterNumber: '4',
  title: 'Klimaendringer og konsekvenser',
  description: 'Forstå årsakene til klimaendringer og konsekvensene for natur og samfunn.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og gjøre rede for årsaker til og konsekvenser av klimaendringer',
  ],
  content: [
    {
      id: 'geografi-1-4-intro',
      type: 'text',
      content: `## Klimaendringer

Jordens klima har alltid endret seg. Det er bred vitenskapelig enighet om at dagens endringer skjer raskere enn tidligere i menneskets historie, og FNs klimapanel (IPCC) konkluderer med at menneskets aktivitet er hovedårsaken. Samtidig er det faglig og politisk debatt om hvor alvorlige konsekvensene vil bli, og hvordan vi best bør prioritere mellom ulike tiltak.

**Naturlige klimavariasjoner:**
- Variasjoner i jordens bane rundt solen
- Solaktivitet
- Vulkanutbrudd
- Endringer i havstrømmer

**Menneskeskapte klimaendringer:**
- Utslipp av klimagasser (CO₂, metan, lystgass)
- Avskoging
- Arealendringer
- Industrialisering siden ca. 1850

**Ulike syn på alvorlighetsgrad:**
Noen forskere og debattanter mener klimaendringene utgjør en akutt krise som krever umiddelbare og omfattende tiltak. Andre mener at selv om endringene er reelle, er usikkerheten stor og at vi bør prioritere tilpasning og teknologiutvikling fremfor raske utslippskutt som kan ha store økonomiske kostnader.`,
    },
    {
      id: 'geografi-1-4-def-1',
      type: 'definition',
      title: 'Drivhuseffekten',
      content: `**Naturlig drivhuseffekt:**
Atmosfæren slipper gjennom sollys, men holder tilbake varmestråling fra jorden. Uten drivhuseffekten ville gjennomsnittstemperaturen vært -18°C i stedet for +15°C.

**Forsterket drivhuseffekt:**
Menneskelige utslipp øker konsentrasjonen av klimagasser, som holder tilbake mer varme.

**Viktige klimagasser:**
- **CO₂ (karbondioksid):** Forbrenning av fossil energi, avskoging
- **CH₄ (metan):** Husdyrhold, rismarker, permafrost
- **N₂O (lystgass):** Landbruk, gjødsel
- **F-gasser:** Industriprosesser, kuldemedier

**CO₂-ekvivalenter:**
Metode for å sammenligne klimagassers oppvarmingseffekt. Metan har ca. 25 ganger sterkere oppvarmingseffekt enn CO₂.`,
    },
    {
      id: 'geografi-1-4-def-2',
      type: 'definition',
      title: 'Konsekvenser av klimaendringer',
      content: `**Temperaturøkning:**
Global oppvarming på ca. 1,1°C siden førindustriell tid. Målet i Parisavtalen er å begrense oppvarmingen til 1,5-2°C.

**Issmelting:**
- Arktisk sjøis minker
- Isbreer trekker seg tilbake
- Innlandsisen på Grønland og Antarktis smelter

**Havnivåstigning:**
Havet stiger på grunn av smelting og termisk ekspansjon (vann utvider seg når det varmes opp).

**Ekstremvær:**
Hyppigere og kraftigere hetebølger, tørke, styrtregn og stormer.

**Økosystemendringer:**
Arter flytter nordover eller oppover, korallrev blekes, nye sykdommer sprer seg.

**Tilbakekoblingsmekanismer:**
Prosesser som forsterker oppvarmingen: is-albedo-effekt (mindre is = mindre refleksjon), permafrost-smelting (frigjør metan).`,
    },
    {
      id: 'geografi-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Is-albedo-effekten',
      problem: `Hvordan forsterker smeltende is den globale oppvarmingen?`,
      solution: `**Is-albedo-tilbakekobling:**

1. **Utgangspunkt:**
   - Is og snø er hvite og reflekterer 80-90% av solinnstrålingen (høy albedo)
   - Hav og jord er mørke og absorberer 90-95% av solinnstrålingen (lav albedo)

2. **Oppvarmingen starter:**
   - Økte klimagassutslipp varmer atmosfæren
   - Is og snø begynner å smelte

3. **Tilbakekoblingen:**
   - Mindre is = mindre refleksjon
   - Mer mørk overflate = mer absorpsjon av solenergi
   - Mer absorpsjon = mer oppvarming
   - Mer oppvarming = mer issmelting

4. **Resultatet:**
   - Selvforsterkende prosess
   - Arktis varmes opp 2-3 ganger raskere enn resten av jorden
   - Risiko for "vippepunkter" der endringene blir irreversible

Dette er et eksempel på positiv tilbakekobling som akselererer klimaendringene.`,
    },
    {
      id: 'geografi-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom naturlig drivhuseffekt og forsterket drivhuseffekt.',
        hints: ['Begge involverer klimagasser, men med ulike kilder'],
        solution: 'Naturlig drivhuseffekt er livsnødvendig og holder jorden varm nok for liv (15°C i stedet for -18°C). Forsterket drivhuseffekt skyldes menneskeskapte utslipp som øker konsentrasjonen av klimagasser, holder tilbake mer varme og fører til global oppvarming.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn de viktigste klimagassene og deres hovedkilder:',
        subTasks: [
          {
            label: 'a',
            task: 'Karbondioksid (CO₂)',
            solution: 'Forbrenning av kull, olje og gass, avskoging, sementproduksjon.',
          },
          {
            label: 'b',
            task: 'Metan (CH₄)',
            solution: 'Husdyrhold (drøvtyggere), rismarker, søppelfyllinger, olje- og gassproduksjon, permafrost.',
          },
          {
            label: 'c',
            task: 'Lystgass (N₂O)',
            solution: 'Landbruk, kunstgjødsel, forbrenning, industriprosesser.',
          },
        ],
        solution: 'Se deloppgavene for kilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke konsekvenser kan klimaendringer ha for Norge? Nevn minst fire eksempler.',
        hints: ['Tenk på natur, infrastruktur, helse, næringer'],
        solution: 'Mulige konsekvenser: 1) Økt nedbør og flomfare, 2) Kortere snøsesong og dårligere forhold for vintersport, 3) Nye skadedyr og sykdommer, 4) Endrede forhold for landbruk og fiske, 5) Skred og erosjon, 6) Lengre vekstsesong, 7) Tregrensen flytter seg oppover.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en tilbakekoblingsmekanisme? Forklar hvordan issmelting kan forsterke global oppvarming.',
        hints: ['Tenk på albedo og refleksjon'],
        solution: 'Tilbakekobling er prosesser som forsterker eller demper en endring. Positiv tilbakekobling forsterker: Is reflekterer sollys, hav absorberer det. Når is smelter, eksponeres mørkt hav som absorberer mer varme, som smelter mer is - en selvforsterkende spiral.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er Parisavtalen, og hva er dens hovedmål?',
        hints: ['Tenk på temperaturmål og internasjonal forpliktelse'],
        solution: 'Parisavtalen (2015) er en internasjonal klimaavtale under FN. Hovedmål: Begrense global oppvarming til godt under 2°C, helst 1,5°C over førindustrielt nivå. Alle land setter egne utslippsmål (NDC) som skal skjerpes over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Hvem har ansvar for å løse klimaproblemet - enkeltpersoner, bedrifter eller stater? Begrunn svaret ditt.',
        hints: ['Tenk på ulike nivåer av påvirkning og ansvar', 'Det finnes ulike syn på dette'],
        solution: 'Dette er et omdiskutert spørsmål med flere perspektiver. Noen mener alle har ansvar på ulike nivåer: Stater gjennom lover og avtaler, bedrifter gjennom omstilling, enkeltpersoner gjennom forbruk. Andre mener ansvaret primært ligger hos stater som har makt til å sette rammer. Noen argumenterer for at rike land har større historisk ansvar på grunn av tidligere utslipp, mens andre mener alle land må bidra basert på nåværende utslipp. Det er også uenighet om hvor mye vekt som bør legges på økonomisk utvikling versus utslippskutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Befolkning og demografiske utfordringer
// ============================================================================

export const CHAPTER_GEOGRAFI_5: TextbookChapter = {
  id: 'geografi-1-5',
  courseId: 'geografi',
  chapterNumber: '5',
  title: 'Befolkning og demografiske utfordringer',
  description: 'Forstå befolkningsutvikling, demografiske overganger og globale utfordringer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og gjøre rede for demografiske mønstre og utvikling',
  ],
  content: [
    {
      id: 'geografi-1-5-intro',
      type: 'text',
      content: `## Verdens befolkning

I 2024 passerte verdens befolkning 8 milliarder mennesker. Befolkningsveksten skjer ulikt i forskjellige deler av verden.

**Befolkningsutviklingen:**
- År 1: ca. 300 millioner
- 1800: 1 milliard
- 1960: 3 milliarder
- 2024: 8 milliarder
- 2050: forventet ca. 9,7 milliarder
- 2100: forventet ca. 10,4 milliarder (med stabilisering)

**Faktorer som påvirker befolkningsstørrelse:**
- Fødselsrate (antall fødsler per 1000 innbyggere)
- Dødsrate (antall dødsfall per 1000 innbyggere)
- Migrasjon (inn- og utvandring)`,
    },
    {
      id: 'geografi-1-5-def-1',
      type: 'definition',
      title: 'Demografiske begreper',
      content: `**Fruktbarhetstall:**
Gjennomsnittlig antall barn per kvinne. Reproduksjonsnivå er ca. 2,1 barn per kvinne.

**Forventet levealder:**
Gjennomsnittlig antall år et nyfødt barn forventes å leve.

**Befolkningspyramide:**
Grafisk fremstilling av befolkningens aldersfordeling. Viser forholdet mellom unge, yrkesaktive og eldre.

**Forsørgerbyrde:**
Forholdet mellom yrkesaktiv befolkning (15-64 år) og ikke-yrkesaktive (barn og eldre).

**Befolkningstetthet:**
Antall innbyggere per kvadratkilometer.

**Urbaniseringsgrad:**
Andel av befolkningen som bor i byer.`,
    },
    {
      id: 'geografi-1-5-def-2',
      type: 'definition',
      title: 'Den demografiske overgangen',
      content: `**Fase 1 - Førindustriell:**
- Høy fødselsrate og høy dødsrate
- Lav befolkningsvekst
- Korte liv, mange barn dør

**Fase 2 - Tidlig overgang:**
- Fortsatt høy fødselsrate, synkende dødsrate
- Rask befolkningsvekst
- Bedre helse, hygiene, mat

**Fase 3 - Sen overgang:**
- Synkende fødselsrate, lav dødsrate
- Avtagende befolkningsvekst
- Urbanisering, utdanning, prevensjon

**Fase 4 - Postindustriell:**
- Lav fødselsrate og lav dødsrate
- Stabil eller synkende befolkning
- Aldring av befolkningen

**Fase 5 - Befolkningsnedgang:**
- Fruktbarhet under reproduksjonsnivå
- Befolkningen krymper uten innvandring`,
    },
    {
      id: 'geografi-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Norges demografiske utfordringer',
      problem: `Hvilke demografiske utfordringer står Norge overfor?`,
      solution: `**Norges situasjon:**

1. **Aldrende befolkning:**
   - Stor etterkrigsgenerasjon blir pensjonister
   - Forventet levealder øker
   - Færre yrkesaktive per pensjonist

2. **Lav fruktbarhet:**
   - Fruktbarhetstall ca. 1,4 (under reproduksjonsnivå 2,1)
   - Uten innvandring ville befolkningen på sikt synke

3. **Konsekvenser:**
   - Økte utgifter til pensjon og helse
   - Mangel på arbeidskraft i visse sektorer
   - Press på velferdsstaten

4. **Mulige løsninger - det finnes ulike syn:**
   - **Høyere pensjonsalder:** Mange støtter dette, men noen mener det rammer de med tunge yrker urettferdig
   - **Arbeidsinnvandring:** Noen mener dette er nødvendig for å dekke arbeidskraftbehov, andre peker på utfordringer med integrering, press på boligmarked og velferdstjenester
   - **Tiltak for å øke fruktbarheten:** For eksempel bedre familiepolitikk, men effekten er usikker
   - **Automatisering og effektivisering:** Kan redusere behovet for arbeidskraft, men krever omstilling
   - **Bedre utnyttelse av eksisterende arbeidskraft:** Øke sysselsettingen blant uføre, deltidsarbeidende og innvandrere som allerede er i landet`,
    },
    {
      id: 'geografi-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som menes med fødselsrate, dødsrate og naturlig tilvekst.',
        hints: ['Alle måles per 1000 innbyggere'],
        solution: 'Fødselsrate: Antall fødsler per 1000 innbyggere per år. Dødsrate: Antall dødsfall per 1000 innbyggere per år. Naturlig tilvekst: Fødselsrate minus dødsrate - befolkningsendringen uten migrasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv de fire fasene i den demografiske overgangen og gi eksempler på land i hver fase.',
        subTasks: [
          {
            label: 'a',
            task: 'Fase 1 og 2',
            solution: 'Fase 1: Høy fødsel/dødsrate, lav vekst (historisk, ingen land i dag). Fase 2: Høy fødsel, synkende død, rask vekst (noen land i Afrika sør for Sahara).',
          },
          {
            label: 'b',
            task: 'Fase 3 og 4',
            solution: 'Fase 3: Synkende fødsel, lav død, avtagende vekst (Brasil, India). Fase 4: Lav fødsel/død, stabil befolkning (Norge, USA, de fleste vestlige land).',
          },
        ],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva viser en befolkningspyramide? Tegn og beskriv forskjellen mellom en ung og en aldrende befolkning.',
        hints: ['Tenk på formen - bred bunn vs. bred topp'],
        solution: 'Befolkningspyramide viser aldersfordeling. Ung befolkning: Bred bunn (mange barn), smal topp (få eldre) - pyramideform. Aldrende befolkning: Smal bunn (få barn), bred midtdel/topp (mange voksne/eldre) - urneform eller omvendt pyramide.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor synker fruktbarheten når land blir rikere og mer utviklet? Nevn minst fire faktorer.',
        hints: ['Tenk på utdanning, kvinners rolle, økonomi'],
        solution: 'Faktorer: 1) Utdanning, særlig for kvinner, 2) Kvinner i arbeidslivet, 3) Tilgang til prevensjon, 4) Lavere barnedødelighet (færre barn trengs), 5) Urbanisering (barn er en kostnad, ikke arbeidskraft), 6) Sosiale sikkerhetsnett (trenger ikke barn til alderdom), 7) Høyere levekostnader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forsørgerbyrde, og hvorfor er dette viktig for velferdsstatens bærekraft?',
        hints: ['Tenk på forholdet mellom yrkesaktive og ikke-yrkesaktive'],
        solution: 'Forsørgerbyrde er forholdet mellom yrkesaktive (15-64) og ikke-yrkesaktive (barn og eldre). Viktig fordi de yrkesaktive finansierer pensjon, helse og utdanning gjennom skatt. Når andelen eldre øker og andelen yrkesaktive synker, må færre forsørge flere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved innvandring som ett av flere mulige svar på Norges demografiske utfordringer.',
        hints: ['Tenk på økonomi, kultur, integrering', 'Sammenlign med andre løsninger', 'Det finnes ulike politiske syn'],
        solution: 'Dette er et politisk omdiskutert tema med ulike syn. Mulige fordeler som noen fremhever: Tilfører arbeidskraft, kan øke skatteinntekter, kulturelt mangfold. Mulige ulemper som andre peker på: Krever vellykket integrering (som ikke alltid lykkes), kan skape press på boligmarked og offentlige tjenester, utgifter til integrering, mulige sosiale spenninger. Helhetsvurdering avhenger av type innvandring (arbeids-, familie-, flukt-), opprinnelsesland, og hvor godt integreringen fungerer. Det finnes også alternative løsninger: høyere pensjonsalder, økt fruktbarhet, automatisering, eller aksept av lavere økonomisk vekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Urbanisering og byutvikling
// ============================================================================

export const CHAPTER_GEOGRAFI_6: TextbookChapter = {
  id: 'geografi-1-6',
  courseId: 'geografi',
  chapterNumber: '6',
  title: 'Urbanisering og byutvikling',
  description: 'Forstå prosessen med urbanisering og utfordringer knyttet til byutvikling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og gjøre rede for årsaker til og konsekvenser av urbanisering',
  ],
  content: [
    {
      id: 'geografi-1-6-intro',
      type: 'text',
      content: `## Urbanisering

Urbanisering er prosessen der stadig flere mennesker flytter til byer. For første gang i historien bor nå over halvparten av verdens befolkning i urbane områder.

**Global urbanisering:**
- 1950: 30% bodde i byer
- 2024: ca. 57% bor i byer
- 2050: forventet 68% i byer

**Drivkrefter bak urbanisering:**
- Push-faktorer: Fattigdom, mangel på jobb, konflikter på landsbygda
- Pull-faktorer: Jobbmuligheter, utdanning, helsetjenester, underholdning

**Hvor skjer urbaniseringen?**
Raskest i Afrika og Asia, der urbaniseringsgraden fortsatt er relativt lav.`,
    },
    {
      id: 'geografi-1-6-def-1',
      type: 'definition',
      title: 'Bytyper og byvekst',
      content: `**Megaby:**
By med over 10 millioner innbyggere. Eksempler: Tokyo, Delhi, Shanghai, São Paulo.

**Bybånd (megalopolis):**
Sammenhengende byområder som har vokst sammen. Eksempel: Boston-New York-Washington.

**Primatby:**
En dominerende by som er mye større enn andre byer i landet. Eksempel: Paris, London, Bangkok.

**Suburbanisering:**
Befolkning flytter fra sentrum til forsteder. Vanlig i utviklede land.

**Gentrification:**
Fornyelse av nedslitte byområder, ofte med konsekvenser for opprinnelige beboere.

**Slum:**
Fattige, uformelle bosettinger med dårlig infrastruktur. Stor utfordring i utviklingsland.`,
    },
    {
      id: 'geografi-1-6-def-2',
      type: 'definition',
      title: 'Baerekraftig byutvikling',
      content: `**Kompakt byutvikling:**
Fortetting fremfor spredning. Korte avstander, effektiv arealbruk.

**Blandet arealbruk:**
Boliger, arbeidsplasser og tjenester i samme område. Reduserer transportbehov.

**Kollektivtransport:**
Buss, trikk, T-bane, tog. Reduserer biltrafikk og utslipp.

**Grønne områder:**
Parker, grøntarealer, bytrær. Viktig for luftkvalitet, rekreasjon og biologisk mangfold.

**Smart by (smart city):**
Teknologi brukes til å effektivisere bytjenester: trafikkstyring, energiforbruk, avfall.

**Sirkulær økonomi i byer:**
Gjenbruk, resirkulering, redusert avfall. Byer som kretsløp fremfor gjennomstrømning.`,
    },
    {
      id: 'geografi-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Oslos byutvikling',
      problem: `Hvordan har Oslo forsøkt å utvikle seg mer bærekraftig, og hvilke debatter har dette skapt?`,
      solution: `**Oslos byutviklingstiltak:**

1. **Fortetting:**
   - Bjørvika/Barcode - ny bydel på tidligere havneområde
   - Høyhus og tett bebyggelse nær kollektivknutepunkter

2. **Bilfritt sentrum:**
   - Fjernet parkeringsplasser i sentrum
   - Prioritert gående og syklende
   - Utvidet gågater

3. **Kollektivsatsing:**
   - Utbygging av T-bane og trikk
   - Bysykler
   - Ruter-app for enkel billettkjøp

4. **Fjordbyen:**
   - Åpnet fjorden for befolkningen
   - Tidligere havne- og industriområder blir parker og boliger

5. **Grønne områder:**
   - Bevaring av Marka
   - Nye parker (Operataket, Sørenga)
   - Bytrær og grønne tak

**Kritikk og debatter:**
Oslos byutvikling er politisk omdiskutert:
- **Boligpriser:** Fortetting har ikke løst boligmangelen, og prisene har fortsatt å stige kraftig
- **Sosial ulikhet:** Nye områder som Bjørvika oppfattes av noen som ekskluderende og rettet mot høyinntektsgrupper
- **Bilfritt sentrum:** Kritikere mener det rammer butikker og folk utenfor sentrum som er avhengige av bil
- **Fortetting vs. bomiljø:** Noen mener fortettingen har gått på bekostning av sol, luft og grønne områder i boligstrøk
- **Kostnader:** Store offentlige investeringer i kollektivtrafikk og byutvikling

**Ulike syn:** Noen ser Oslo som et forbilde for grønn byutvikling, andre mener politikken har hatt utilsiktede negative konsekvenser for visse grupper.`,
    },
    {
      id: 'geografi-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva urbanisering er, og nevn tre push-faktorer og tre pull-faktorer.',
        hints: ['Push = det som driver folk vekk, Pull = det som trekker folk til'],
        solution: 'Urbanisering er prosessen der befolkningen i byer øker. Push-faktorer: fattigdom, jordmangel, arbeidsledighet på landsbygda. Pull-faktorer: jobbmuligheter, utdanning, helsetjenester, underholdning, sosiale nettverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en megaby? Nevn tre megabyer og hvilke utfordringer de står overfor.',
        hints: ['Tenk på infrastruktur, miljø, sosiale forhold'],
        solution: 'Megaby har over 10 millioner innbyggere. Eksempler: Tokyo, Delhi, Mumbai, Lagos. Utfordringer: trafikkork, luftforurensning, vannmangel, bolignød, slumområder, avfallshåndtering, kriminalitet, sosial ulikhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign urbaniseringen i utviklede land og utviklingsland:',
        subTasks: [
          {
            label: 'a',
            task: 'Tempo og tidspunkt for urbanisering',
            solution: 'Utviklede land: Gradvis over 200 år. Utviklingsland: Rask urbanisering de siste 50 årene.',
          },
          {
            label: 'b',
            task: 'Hovedutfordringer',
            solution: 'Utviklede land: Suburbanisering, forgubbing, transport. Utviklingsland: Slum, mangelfull infrastruktur, fattigdom.',
          },
        ],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner bærekraftig byutvikling? Beskriv minst fire viktige prinsipper.',
        hints: ['Tenk på transport, arealbruk, energi, grønne områder'],
        solution: 'Prinsipper: 1) Kompakt bystruktur med fortetting, 2) Effektiv kollektivtransport, 3) Blandet arealbruk (bolig, jobb, tjenester), 4) Grøntområder og biologisk mangfold, 5) Energieffektive bygninger, 6) Sirkulær avfallshåndtering, 7) Sosial inkludering og rimelige boliger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er gentrification? Diskuter positive og negative sider ved denne prosessen.',
        hints: ['Tenk på hvem som tjener og hvem som taper'],
        solution: 'Gentrification er oppgradering av nedslitte byområder. Positivt: Bedre bygninger, lavere kriminalitet, økte skatteinntekter. Negativt: Opprinnelige beboere presses ut av høyere priser, tap av lokal kultur og fellesskap, økt sosial ulikhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser din egen by eller et sted du kjenner: Hvilke byutviklingstiltak har blitt gjennomført de siste årene? Er utviklingen bærekraftig?',
        hints: ['Se på transport, boligbygging, grøntområder, sentrumsutvikling'],
        solution: 'Svaret bør inneholde konkrete eksempler fra lokalsamfunnet og vurdering opp mot prinsipper for bærekraftig byutvikling: fortetting vs. spredning, kollektiv vs. bil, grøntområder, sosial inkludering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Ressursforvaltning og baerekraft
// ============================================================================

export const CHAPTER_GEOGRAFI_7: TextbookChapter = {
  id: 'geografi-1-7',
  courseId: 'geografi',
  chapterNumber: '7',
  title: 'Ressursforvaltning og baerekraft',
  description: 'Forstå forvaltning av naturressurser og prinsipper for baerekraftig utvikling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'drøfte ulike interesser knyttet til ressursbruk og ressurskonflikter',
  ],
  content: [
    {
      id: 'geografi-1-7-intro',
      type: 'text',
      content: `## Naturressurser

Naturressurser er materialer og energikilder fra naturen som mennesker bruker. Hvordan vi forvalter disse ressursene avgjør om utviklingen er bærekraftig.

**Typer naturressurser:**
- Fornybare: Sol, vind, vann, skog, fisk (kan fornye seg)
- Ikke-fornybare: Olje, gass, kull, mineraler (begrensede mengder)
- Betinget fornybare: Jord, ferskvann (fornybare hvis ikke overbelastet)

**Ressursenes fordeling:**
Naturressurser er ujevnt fordelt på kloden. Dette skaper handel, maktforhold og konflikter.`,
    },
    {
      id: 'geografi-1-7-def-1',
      type: 'definition',
      title: 'Ressursforvaltning',
      content: `**Bærekraftig utvikling:**
Utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter (Brundtlandkommisjonen, 1987).

**De tre dimensjonene:**
- Økologisk bærekraft: Ta vare på naturens tålegrenser
- Økonomisk bærekraft: Langsiktig verdiskaping
- Sosial bærekraft: Rettferdig fordeling og gode levekår

**Avveininger og debatter:**
Det er ofte spenninger mellom de tre dimensjonene. For eksempel kan strenge miljøkrav gi høyere kostnader og tap av arbeidsplasser. Det er politisk uenighet om hvordan disse avveiningene bør gjøres, og hvor mye dagens generasjon bør ofre for fremtidige generasjoner.

**Allmenningens tragedie:**
Når alle har tilgang til en ressurs, risikerer hver enkelt å overutnytte den. Eksempel: Overfiske i internasjonalt farvann.

**Føre-var-prinsippet:**
Ved usikkerhet om miljøkonsekvenser bør man være forsiktig. Prinsippet er omdiskutert - noen mener det hindrer innovasjon og utvikling, andre at det er nødvendig for å unngå irreversible skader.

**Forurenser betaler-prinsippet:**
Den som forurenser skal betale for opprydding og skadene. Det er debatt om hvordan dette bør praktiseres, og om det rammer ulike grupper rettferdig.`,
    },
    {
      id: 'geografi-1-7-def-2',
      type: 'definition',
      title: 'Ressurskonflikter',
      content: `**Vannkonflikter:**
Kamp om ferskvannsressurser. Særlig akutt i Midtøsten (Jordan, Eufrat/Tigris) og Afrika.

**Oljekonflikter:**
Geopolitiske spenninger knyttet til oljerike områder. Eksempel: Midtøsten, Sør-Kinahavet.

**Mineralkonflikter:**
Etterspørsel etter sjeldne jordarter og mineraler til teknologi. Utvinning skaper miljøproblemer og konflikter.

**Arealbrukskonflikter:**
Konkurranse om land mellom jordbruk, naturvern, urbanisering, energiproduksjon.

**Fiskerikonflikter:**
Uenighet om kvoter og rettigheter i havet. Eksempel: Makrelkrigen mellom Norge, EU og Island.

**Urfolksrettigheter:**
Konflikter mellom urfolks tradisjonelle ressursbruk og storsamfunnets interesser.`,
    },
    {
      id: 'geografi-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Norges oljeforvaltning',
      problem: `Hvordan har Norge forvaltet sine oljeressurser?`,
      solution: `**Den norske modellen:**

1. **Statlig kontroll:**
   - Staten eier ressursene på sokkelen
   - Lisenssystem for utvinning
   - Statlig selskap (Equinor, tidligere Statoil)

2. **Oljefondet (Statens pensjonsfond utland):**
   - Oljeinntekter settes i fond
   - Investeres i utlandet
   - Kun avkastningen brukes (handlingsregelen: 3%)
   - Verdi: over 15 000 milliarder kr

3. **Fordeler:**
   - Unngått "oljeforbannelsen" (ressursrike land med dårlig utvikling)
   - Sparing for fremtidige generasjoner
   - Stabiliserer norsk økonomi

4. **Utfordringer og debatter:**
   - Noen omtaler det som et "klimaparadoks" at Norge er rik på fossil energi samtidig som vi ønsker å være et foregangsland i klimapolitikken. Andre mener dette ikke er et paradoks, men naturlig ressursutnytting, og at norsk gass erstatter mer forurensende kull i Europa.
   - Omstillingsbehov: Det er uenighet om hvor raskt Norge bør fase ut olje og gass, og hvem som skal bære kostnadene ved omstilling
   - Avhengighet: Både arbeidsplasser og statsfinanser er avhengig av næringen

**Spørsmål for fremtiden:** Hvordan og hvor raskt bør olje- og gassutvinning eventuelt fases ut, og hvordan sikre en rettferdig overgang for berørte lokalsamfunn og arbeidstakere?`,
    },
    {
      id: 'geografi-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom fornybare, ikke-fornybare og betinget fornybare ressurser. Gi to eksempler på hver.',
        hints: ['Tenk på tidsperspektivet for fornyelse'],
        solution: 'Fornybare: Fornyer seg kontinuerlig (sol, vind, tidevannn). Ikke-fornybare: Dannet over millioner av år, endelige mengder (olje, kull, metaller). Betinget fornybare: Kan fornyes hvis ikke overbelastet (jord, grunnvann, skog).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er "allmenningens tragedie"? Gi et eksempel og forklar hvordan problemet kan løses.',
        hints: ['Tenk på felles ressurser uten eierskap'],
        solution: 'Allmenningens tragedie oppstår når alle har fri tilgang til en ressurs og hver enkelt har insentiv til å overutnytte. Eksempel: Overfiske. Løsninger: Regulering (kvoter), privatisering (eierskap), internasjonale avtaler, fellesskap som forvalter sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv en ressurskonflikt i verden i dag. Hvem er partene, hva er uenigheten om, og hvilke løsninger finnes?',
        hints: ['Velg vann, olje, mineraler, fisk eller areal'],
        solution: 'Svaret bør inneholde: 1) Ressursen det kjempes om, 2) Hvilke parter/land som er involvert, 3) Bakgrunnen for konflikten, 4) Konsekvenser for mennesker og miljø, 5) Mulige løsninger og kompromisser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar føre-var-prinsippet og forurenser betaler-prinsippet. Hvorfor er disse viktige for miljøpolitikk?',
        hints: ['Tenk på ansvar og forebygging'],
        solution: 'Føre-var: Ved usikkerhet om miljøkonsekvenser skal man være forsiktig. Viktig fordi miljøskader ofte er irreversible. Forurenser betaler: Den som forurenser har økonomisk ansvar. Viktig for å internalisere miljøkostnader og gi insentiv til renere produksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft Norges forvaltning av oljeressursene. Hva har vært suksessfaktorer, og hvilke utfordringer står vi overfor?',
        hints: ['Tenk på oljefondet, statlig kontroll, klimautfordringer'],
        solution: 'Suksessfaktorer: Statlig kontroll, oljefondet, handlingsregelen, stabile institusjoner og lavt korrupsjonsnivå. Utfordringer og debatter: Forholdet mellom oljeinntekter og klimapolitikk er omdiskutert - noen mener Norge har et klimaparadoks, andre at norsk gass er en del av løsningen ved å erstatte kull. Det er også debatt om tempo for omstilling, kostnadsfordeling, og etiske spørsmål om fortsatt utvinning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva er sirkulær økonomi, og hvordan skiller den seg fra lineær økonomi? Gi eksempler på tiltak.',
        hints: ['Tenk på ta-bruk-kast vs. kretsløp'],
        solution: 'Lineær økonomi: Ta ut ressurser, produser, bruk, kast (ta-bruk-kast). Sirkulær økonomi: Ressurser holdes i kretsløp gjennom gjenbruk, reparasjon, resirkulering. Eksempler: Panteordning, reparasjonscafeer, modulær design, utleietjenester fremfor eierskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Naturkatastrofer og saarbarhet
// ============================================================================

export const CHAPTER_GEOGRAFI_8: TextbookChapter = {
  id: 'geografi-1-8',
  courseId: 'geografi',
  chapterNumber: '8',
  title: 'Naturkatastrofer og saarbarhet',
  description: 'Forstå aarsaker til naturkatastrofer og hvorfor noen samfunn er mer saarbare.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og gjøre rede for årsaker til og konsekvenser av naturkatastrofer',
  ],
  content: [
    {
      id: 'geografi-1-8-intro',
      type: 'text',
      content: `## Naturkatastrofer

En naturkatastrofe oppstår når en naturhendelse rammer et sårbart samfunn og forårsaker store tap av liv, eiendom eller miljø.

**Naturhendelse vs. naturkatastrofe:**
Et jordskjelv i et ubebodd område er en naturhendelse. Samme jordskjelv i en storby kan bli en katastrofe.

**Typer naturkatastrofer:**
- Geologiske: Jordskjelv, vulkanutbrudd, skred
- Meteorologiske: Stormer, flom, tørke, hetebølger
- Klimarelaterte: Sykloner, monsunflom, skogbranner

**Trend:**
Antall naturkatastrofer øker, delvis på grunn av klimaendringer, delvis fordi flere mennesker bor i utsatte områder.`,
    },
    {
      id: 'geografi-1-8-def-1',
      type: 'definition',
      title: 'Fare, saarbarhet og risiko',
      content: `**Fare (hazard):**
Potensielt skadelig naturhendelse. Eksempel: Jordskjelv, flom, orkan.

**Sårbarhet (vulnerability):**
Et samfunns evne til å motstå og håndtere en naturhendelse. Påvirkes av:
- Fattigdom
- Dårlig infrastruktur
- Mangel på varsling
- Befolkningstetthet i utsatte områder

**Risiko:**
Risiko = Fare × Sårbarhet

Samme fare gir ulik risiko i ulike samfunn. Et jordskjelv i Japan (lav sårbarhet) gir færre ofre enn i Haiti (høy sårbarhet).

**Resiliens:**
Evnen til å komme tilbake etter en katastrofe. Rike land har ofte høyere resiliens.`,
    },
    {
      id: 'geografi-1-8-def-2',
      type: 'definition',
      title: 'Katastrofeberedskap',
      content: `**Forebygging:**
Tiltak for å redusere faren: Diker mot flom, jordskjelvsikre bygninger, regulering av arealbruk.

**Varsling:**
Systemer for tidlig varsling: Tsunami-varsling, værvarsling, overvåking av vulkaner.

**Beredskap:**
Planer og ressurser for å håndtere katastrofer: Evakueringsplaner, nødforsyninger, øvelser.

**Respons:**
Umiddelbar innsats etter katastrofe: Redning, nødhjelp, midlertidig husly.

**Gjenoppbygging:**
Langsiktig arbeid for å bygge opp samfunnet, helst bedre enn før ("build back better").

**Klimatilpasning:**
Tiltak for å redusere sårbarhet for klimarelaterte hendelser som øker i hyppighet.`,
    },
    {
      id: 'geografi-1-8-example-1',
      type: 'example',
      title: 'Eksempel: Jordskjelvet i Haiti 2010 vs. Japan 2011',
      problem: `Hvorfor var konsekvensene av jordskjelvene så forskjellige?`,
      solution: `**Sammenligning:**

| | Haiti 2010 | Japan 2011 |
|---|---|---|
| Styrke | 7,0 | 9,0 (mye kraftigere) |
| Døde | ca. 230 000 | ca. 19 000 |
| BNP per innb. | ca. 700 USD | ca. 46 000 USD |

**Hvorfor flere døde i Haiti med svakere skjelv?**

1. **Bygningskvalitet:**
   - Haiti: Dårlig byggekvalitet, ikke dimensjonert for jordskjelv
   - Japan: Strenge bygningskoder, jordskjelvsikring

2. **Infrastruktur:**
   - Haiti: Svak infrastruktur kollapset
   - Japan: Robust infrastruktur, rask respons

3. **Beredskap:**
   - Haiti: Lite øvelser, svak koordinering
   - Japan: Regelmessige øvelser, effektive varslinger

4. **Økonomiske ressurser:**
   - Haiti: Fattig land, få ressurser til beredskap
   - Japan: Rik nasjon med store ressurser

**Konklusjon:** Det er ikke naturhendelsen alene, men kombinasjonen av fare og sårbarhet som bestemmer katastrofens omfang.`,
    },
    {
      id: 'geografi-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom en naturhendelse og en naturkatastrofe.',
        hints: ['Tenk på hvem/hva som rammes'],
        solution: 'En naturhendelse er en naturlig prosess (jordskjelv, flom, storm). Det blir en naturkatastrofe når hendelsen rammer et samfunn og forårsaker store tap av liv, eiendom eller miljø. Samme hendelse i et ubebodd område er ikke en katastrofe.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar begrepene fare, sårbarhet og risiko. Bruk en formel og et eksempel.',
        hints: ['Risiko = Fare × Sårbarhet'],
        solution: 'Fare = potensielt skadelig hendelse. Sårbarhet = samfunnets evne til å motstå hendelsen. Risiko = Fare × Sårbarhet. Eksempel: En flom (fare) i et fattig land med dårlige diker (høy sårbarhet) gir høy risiko, mens samme flom i et rikt land med gode diker (lav sårbarhet) gir lav risiko.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre geologiske og tre meteorologiske naturkatastrofer, og forklar kort hva som forårsaker dem.',
        subTasks: [
          {
            label: 'a',
            task: 'Geologiske katastrofer',
            solution: 'Jordskjelv (platebevegelser), vulkanutbrudd (magma stiger opp), skred/ras (ustabile fjellsider, utløst av vann eller skjelv).',
          },
          {
            label: 'b',
            task: 'Meteorologiske katastrofer',
            solution: 'Flom (mye nedbør, issmelting), orkaner/sykloner (varmt havvann gir kraftige stormer), tørke (manglende nedbør over tid).',
          },
        ],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor rammes fattige land hardere av naturkatastrofer enn rike land?',
        hints: ['Tenk på sårbarhetsfaktorer'],
        solution: 'Fattige land har: 1) Dårligere bygningskvalitet, 2) Svakere infrastruktur, 3) Manglende varslingssystemer, 4) Færre ressurser til beredskap og respons, 5) Svakere institusjoner, 6) Ofte flere som bor i utsatte områder (flomsletter, bratte skråninger).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar sammenhengen mellom klimaendringer og naturkatastrofer. Hvilke typer hendelser forventes å øke?',
        hints: ['Tenk på temperatur, nedbør, havnivå'],
        solution: 'Klimaendringer forsterker mange naturhendelser: Hyppigere/kraftigere hetebølger, mer intens nedbør og flom, kraftigere tropiske stormer (mer energi i varmere hav), lengre tørkeperioder, skogbranner, stigende havnivå som forsterker stormflo.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvilke naturkatastrofer er Norge mest utsatt for? Beskriv hvordan vi kan forberede oss.',
        hints: ['Tenk på vær, skred, klima'],
        solution: 'Norge: Flom (snøsmelting, styrtregn), skred (snø, jord, stein), storm, stormflo, skogbrann (tørt vær). Forberedelse: Gode varslinger (NVE, MET), arealplanlegging (unngå bygging i utsatte områder), sikringstiltak (flomvern, skredsikring), klimatilpasning, beredskapsplaner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Norge - naturgrunnlag og ressurser
// ============================================================================

export const CHAPTER_GEOGRAFI_9: TextbookChapter = {
  id: 'geografi-1-9',
  courseId: 'geografi',
  chapterNumber: '9',
  title: 'Norge - naturgrunnlag og ressurser',
  description: 'Forstå Norges naturgeografiske forhold og hvordan de pavirker ressursbruk og bosetting.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive hvordan naturgrunnlaget påvirker ressurser, bosetting og næringsliv i Norge',
  ],
  content: [
    {
      id: 'geografi-1-9-intro',
      type: 'text',
      content: `## Norges naturgeografi

Norge er et langstrakt land med variert natur - fra kystlandskap i sør til arktiske områder i nord. Naturgrunnlaget har formet bosetting, næringsliv og kultur.

**Naturgeografiske hovedtrekk:**
- Langstrakt land (1800 km nord-sør)
- Fjorder og kystlandskap
- Høyfjell og vidder
- Breer og isformer
- Lang kystlinje (over 100 000 km med øyer)

**Geologisk grunnlag:**
Den skandinaviske fjellkjeden (Kaledonidene) ble dannet for ca. 400 millioner år siden. Istidene formet landskapet vi ser i dag.`,
    },
    {
      id: 'geografi-1-9-def-1',
      type: 'definition',
      title: 'Norges landskapstyper',
      content: `**Kystlandskapet:**
- Fjorder, skjærgård, strandflate
- Mildt klima, mye nedbør i vest
- Fiskeri, havbruk, skipsfart

**Fjellområdene:**
- Høyfjell over tregrensen (ca. 1000-1200 m i sør)
- Vidder (Hardangervidda, Finnmarksvidda)
- Breer (Jostedalsbreen - Europas største fastlandsbre)

**Dalene:**
- U-daler formet av isbreer
- Jordbruk, bosetting, kommunikasjon
- Eksempler: Gudbrandsdalen, Hallingdal

**Lavlandet:**
- Østlandet og Trøndelag
- Løsmasser fra istiden
- Best jordbruksland

**Nordområdene:**
- Midnattssol og mørketid
- Permafrost i Svalbard
- Sårbar arktisk natur`,
    },
    {
      id: 'geografi-1-9-def-2',
      type: 'definition',
      title: 'Norges naturressurser',
      content: `**Energiressurser:**
- Vannkraft (ca. 90% av strømproduksjonen)
- Olje og gass (Nordsjøen, Norskehavet, Barentshavet)
- Vindkraft (økende)

**Mineralressurser:**
- Jernmalm, kobber, titan, olivin
- Kvarts og andre industrimineraler
- Potensial for sjeldne jordarter

**Marine ressurser:**
- Fiskeri (torsk, sild, makrell, laks)
- Havbruk/oppdrett
- Tang og tare

**Biologiske ressurser:**
- Skog (ca. 40% av landarealet)
- Utmarksbeite (reindrift, sau)
- Genetiske ressurser

**Arealressurser:**
- Bare 3% er dyrket mark
- Betydelig potensial for turisme og friluftsliv`,
    },
    {
      id: 'geografi-1-9-example-1',
      type: 'example',
      title: 'Eksempel: Vannkraft i Norge',
      problem: `Hvorfor har Norge så mye vannkraft, og hva er fordeler og utfordringer?`,
      solution: `**Hvorfor vannkraft i Norge:**

1. **Naturlige forutsetninger:**
   - Mye nedbør, særlig på Vestlandet
   - Høye fjell gir stor fallhøyde
   - Mange innsjøer fungerer som naturlige magasiner
   - Breer og snø gir jevn vannføring

2. **Utbygging:**
   - Startet rundt 1900
   - Industrialiseringen drevet av billig strøm
   - I dag ca. 1700 vannkraftverk

**Fordeler:**
- Fornybar og utslippsfri
- Regulerbar (kan lagre vann)
- Billig å drifte når utbygget
- Gir Norge konkurransefortrinn

**Utfordringer:**
- Naturinngrep (regulering av vassdrag, neddemming)
- Konflikt med fiske, friluftsliv, landskap
- Begrenset potensial for ny utbygging
- Klimaendringer kan påvirke vannføring

**Konklusjon:** Vannkraften er en nasjonal ressurs som må balanseres mot naturvern.`,
    },
    {
      id: 'geografi-1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv hvordan istidene har formet det norske landskapet. Nevn minst fire eksempler på landskapsformer.',
        hints: ['Tenk på erosjon og avsetning'],
        solution: 'Istidene formet: 1) Fjorder (overfordypede daler fylt med sjøvann), 2) U-daler (brede daler med bratte sider), 3) Botner (sirkelformede fordypninger i fjellet), 4) Morener (avsetninger fra breene), 5) Strandflaten (flat kyststripe), 6) Innsjøer (bredemte dalfører).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor bosettingsmønsteret i Norge er slik det er. Hvilke naturgeografiske faktorer har vært viktigst?',
        hints: ['Tenk på klima, terreng, ressurser'],
        solution: 'Bosettingen er konsentrert langs kysten og i lavlandet. Faktorer: 1) Kysten ga tilgang til fiske og sjøtransport, 2) Lavlandet har best jordbruksjord, 3) Fjell og bratt terreng hindrer bosetting, 4) Mildere klima ved kysten. Resultatet: Spredt bosetting, mange små tettsteder langs kysten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi en oversikt over Norges viktigste naturressurser:',
        subTasks: [
          {
            label: 'a',
            task: 'Energiressurser',
            solution: 'Vannkraft (fornybar, ca. 90% av strøm), olje og gass (fossil, stor eksportinntekt), vindkraft (voksende).',
          },
          {
            label: 'b',
            task: 'Marine ressurser',
            solution: 'Fiskeri (torsk, sild, makrell), havbruk (laks, ørret), potensial i tang/tare og bioteknologi.',
          },
          {
            label: 'c',
            task: 'Andre ressurser',
            solution: 'Skog, mineraler (jernmalm, titan, kvarts), turistressurser (natur, friluftsliv).',
          },
        ],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er bare 3% av Norges areal dyrket mark? Hva betyr dette for norsk matproduksjon?',
        hints: ['Tenk på terreng, klima, jordsmonn'],
        solution: 'Lite dyrkbart areal fordi: 1) Mye fjell og bratt terreng, 2) Kort vekstsesong i nord og i høyden, 3) Dårlig jordsmonn mange steder. Konsekvenser: Norge importerer mye mat, jordvern er viktig, fokus på husdyrhold som kan utnytte utmarksbeite.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved vannkraftutbygging i Norge.',
        hints: ['Tenk på energi, miljø, økonomi, lokalsamfunn'],
        solution: 'Fordeler: Fornybar og utslippsfri energi, regulerbar, billig drift, eksportinntekter, grunnlag for industri. Ulemper: Naturinngrep, påvirker vassdrag og fisk, landskapsendringer, konflikter med friluftsliv og reiseliv, kan ramme reindrift.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser hjemstedet ditt eller et sted du kjenner. Hvordan har naturgrunnlaget påvirket bosetting, næringsliv og kommunikasjon?',
        hints: ['Se på terreng, klima, tilgang til ressurser, transportårer'],
        solution: 'Svaret bør beskrive: 1) Stedets naturgeografiske forhold (terreng, klima, ressurser), 2) Hvordan dette har påvirket historisk bosetting og næringsliv, 3) Dagens situasjon og utfordringer, 4) Eventuelle konflikter mellom ulike interesser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Global ulikhet og utvikling
// ============================================================================

export const CHAPTER_GEOGRAFI_10: TextbookChapter = {
  id: 'geografi-1-10',
  courseId: 'geografi',
  chapterNumber: '10',
  title: 'Global ulikhet og utvikling',
  description: 'Forstå globale utviklingsforskjeller og arbeidet for en mer rettferdig verden.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte årsaker til og konsekvenser av global ulikhet',
  ],
  content: [
    {
      id: 'geografi-1-10-intro',
      type: 'text',
      content: `## Global ulikhet

Verden er preget av store forskjeller mellom rike og fattige land, og mellom rike og fattige innenfor land. Å forstå årsakene til og konsekvensene av denne ulikheten er sentralt i geografifaget.

**Fakta om global ulikhet:**
- De 10% rikeste eier over 75% av verdens formue
- Ca. 700 millioner mennesker lever i ekstrem fattigdom (under $2,15/dag)
- Forventet levealder varierer fra under 55 år (noen afrikanske land) til over 85 år (Japan)
- Store forskjeller i tilgang til utdanning, helse og rent vann

**Positive trender:**
- Ekstrem fattigdom har blitt halvert siden 1990
- Barnedødeligheten har falt dramatisk
- Flere har tilgang til utdanning`,
    },
    {
      id: 'geografi-1-10-def-1',
      type: 'definition',
      title: 'Maal paa utvikling',
      content: `**BNP per innbygger:**
Bruttonasjonalprodukt delt på befolkningen. Måler økonomisk aktivitet, men ikke fordeling eller velferd.

**HDI (Human Development Index):**
FNs indeks som kombinerer:
- Forventet levealder
- Utdanningsnivå
- Levestandard (BNP per innbygger)
Skala fra 0 til 1. Norge ligger ofte øverst.

**Gini-koeffisient:**
Mål på ulikhet i inntektsfordeling. 0 = perfekt likhet, 1 = én person har alt.

**MPI (Multidimensional Poverty Index):**
Måler fattigdom ut fra helse, utdanning og levestandard - ikke bare inntekt.

**FNs bærekraftsmål:**
17 mål for bærekraftig utvikling innen 2030. Inkluderer fattigdomsbekjempelse, utdanning, helse, ulikhet.`,
    },
    {
      id: 'geografi-1-10-def-2',
      type: 'definition',
      title: 'Aarsaker til global ulikhet',
      content: `**Historiske årsaker:**
- Kolonialisme - utbytting av ressurser og mennesker
- Slaveri - tvangsarbeid og menneskehandel
- Handelsstrukturer som favoriserte kolonimaktene

**Lokale og institusjonelle faktorer:**
- Styresett og politisk stabilitet
- Korrupsjon og svake institusjoner
- Eiendomsrettigheter og rettssikkerhet
- Konflikter og krig
- Kulturelle faktorer som påvirker økonomisk aktivitet

**Strukturelle årsaker:**
- Handelsregler som noen mener favoriserer rike land
- Gjeldsbyrde
- Begrenset tilgang til internasjonale markeder

**Geografiske faktorer:**
- Klima og naturressurser
- Innlandsland uten kyst
- Sårbarhet for naturkatastrofer
- Tropiske sykdommer

**Ulike perspektiver på årsaker:**
Det er faglig og politisk debatt om hvilke faktorer som er viktigst. Noen vektlegger historiske forhold som kolonialisme og urettferdige internasjonale strukturer. Andre peker på at lokale faktorer som styresett, korrupsjon og politikk er avgjørende - og viser til at land med lignende historisk bakgrunn har utviklet seg svært forskjellig (f.eks. Sør-Korea vs. Nord-Korea, Botswana vs. Zimbabwe).

**Fattigdomsfeller:**
Selvforsterkende sirkler som gjør det vanskelig å komme ut av fattigdom: mangel på utdanning → lav produktivitet → lav inntekt → ikke råd til utdanning.`,
    },
    {
      id: 'geografi-1-10-example-1',
      type: 'example',
      title: 'Eksempel: Utviklingen i Sør-Korea',
      problem: `Hvordan gikk Sør-Korea fra å være et av verdens fattigste land til et av de rikeste på 50 år?`,
      solution: `**Sør-Koreas utvikling:**

**Utgangspunktet (1960):**
- Fattig jordbruksland etter Korea-krigen
- BNP per innbygger under $100
- Lite naturressurser
- Sammenlignbart med Ghana

**Suksessfaktorer:**

1. **Utdanningssatsing:**
   - Massiv investering i grunnskole og høyere utdanning
   - Høyt utdannet arbeidsstyrke

2. **Eksportorientert industri:**
   - Fra jordbruk til industri (tekstil → elektronikk → teknologi)
   - Store konglomerater (chaebols): Samsung, Hyundai, LG

3. **Statlig styring:**
   - Aktiv industripolitikk
   - Beskyttelse av unge industrier
   - Investering i infrastruktur

4. **Kulturelle faktorer:**
   - Høy arbeidsmoral
   - Vekt på utdanning

**Resultatet (i dag):**
- BNP per innbygger ca. $35 000
- Verdensledende i teknologi
- Høy HDI

**Lærdom:** Utvikling er mulig, men krever langsiktig satsing på utdanning og produktiv næring.`,
    },
    {
      id: 'geografi-1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom BNP per innbygger og HDI som mål på utvikling. Hva er styrker og svakheter ved hver?',
        hints: ['Tenk på hva som måles og hva som ikke fanges opp'],
        solution: 'BNP per innbygger måler kun økonomisk aktivitet, ikke fordeling, helse eller utdanning. HDI kombinerer levealder, utdanning og inntekt, gir bredere bilde. Svakhet BNP: Ignorer ulikhet, miljø, ubetalt arbeid. Svakhet HDI: Fortsatt begrenset, fanger ikke opp demokrati, frihet, miljø.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv tre historiske og tre nåtidige årsaker til global ulikhet, og vis at det finnes ulike perspektiver.',
        subTasks: [
          {
            label: 'a',
            task: 'Historiske årsaker',
            solution: 'Kolonialisme (utbytting av ressurser), slaveri (tvangsarbeid), handelsstrukturer etablert under kolonitiden. Merk: Betydningen av disse årsakene er omdiskutert - noen mener de fortsatt har stor effekt, andre peker på at land med lignende historie har utviklet seg svært forskjellig.',
          },
          {
            label: 'b',
            task: 'Nåtidige årsaker',
            solution: 'Mulige faktorer inkluderer: 1) Internasjonale forhold som handelsregler og gjeldsbyrde, 2) Lokale forhold som styresett, korrupsjon og konflikter, 3) Geografiske faktorer som klima og beliggenhet. Det er faglig debatt om hvilke faktorer som er viktigst.',
          },
        ],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en fattigdomsfelle? Gi et eksempel og forklar hvordan den virker.',
        hints: ['Tenk på selvforsterkende sirkler'],
        solution: 'Fattigdomsfelle er en selvforsterkende sirkel som holder mennesker i fattigdom. Eksempel: Foreldre har ikke råd til skolegang for barn → barn får ikke utdanning → barn får dårlig betalt jobb som voksen → har ikke råd til skolegang for egne barn. Kan brytes med investeringer i utdanning, helse, infrastruktur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er FNs bærekraftsmål, og hvordan henger de sammen med bekjempelse av global ulikhet?',
        hints: ['Tenk på mål 1 (fattigdom), 10 (ulikhet) og andre'],
        solution: 'FNs 17 bærekraftsmål skal nås innen 2030. Flere handler direkte om ulikhet: Mål 1 (utrydde fattigdom), Mål 4 (utdanning), Mål 10 (redusere ulikhet). Målene henger sammen - fattigdomsbekjempelse krever utdanning, helse, rettferdige institusjoner og klimatiltak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft påstanden: "Bistand hjelper ikke - det gjør land avhengige og hindrer utvikling."',
        hints: ['Se på argumenter for og mot, ulike typer bistand'],
        solution: 'For: Kan skape avhengighet, underminere lokalt næringsliv, brukes av korrupte regimer. Mot: Har reddet millioner av liv (vaksinering, nødhjelp), investering i utdanning/helse gir avkastning, noen land har utviklet seg med bistand. Nyansert: Type bistand og mottakerland påvirker effekten. Handelsvilkår og strukturelle forhold er også viktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg et utviklingsland og analyser: Hva er landets utviklingsnivå (bruk HDI eller andre indikatorer)? Hva er de viktigste utfordringene? Hvilke muligheter har landet?',
        hints: ['Bruk statistikk fra FN, Verdensbanken eller Gapminder'],
        solution: 'Svaret bør inneholde: 1) Landets HDI og andre relevante tall, 2) Historisk bakgrunn, 3) Hovedutfordringer (fattigdom, helse, klima, konflikter), 4) Ressurser og muligheter, 5) Egne vurderinger av veien videre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const GEOGRAFI_CHAPTERS = [
  CHAPTER_GEOGRAFI_1,
  CHAPTER_GEOGRAFI_2,
  CHAPTER_GEOGRAFI_3,
  CHAPTER_GEOGRAFI_4,
  CHAPTER_GEOGRAFI_5,
  CHAPTER_GEOGRAFI_6,
  CHAPTER_GEOGRAFI_7,
  CHAPTER_GEOGRAFI_8,
  CHAPTER_GEOGRAFI_9,
  CHAPTER_GEOGRAFI_10,
];
