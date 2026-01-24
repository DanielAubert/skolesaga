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
// KAPITTEL 11: Elver og vassdrag
// ============================================================================

export const CHAPTER_GEOGRAFI_11: TextbookChapter = {
  id: 'geografi-1-11',
  courseId: 'geografi',
  chapterNumber: '11',
  title: 'Elver og vassdrag',
  description: 'Laer om vannets kretsløp, elveprosesser og vannkraftens rolle i Norge.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive naturlandskap og landformer og forklare hvordan de har blitt til',
  ],
  content: [
    {
      id: 'geografi-1-11-intro',
      type: 'text',
      content: `## Vann - jordens livsnerve

Vann er essensielt for alt liv på jorden. Elvene former landskapet vårt, gir oss drikkevann, og er grunnlaget for Norges største fornybare energikilde.

**Vannets betydning:**
- Livsgrunnlag for mennesker, dyr og planter
- Former landskap gjennom erosjon og avsetning
- Transportåre gjennom historien
- Energikilde (vannkraft)
- Grunnlag for jordbruk og industri

**Norges vannressurser:**
Norge er rikt på ferskvann med over 450 000 innsjøer og tusenvis av elver. Nedbørsrike områder og bratt terreng gir gode forhold for vannkraft.`,
    },
    {
      id: 'geografi-1-11-def-1',
      type: 'definition',
      title: 'Vannets kretsløp',
      content: `**Vannets kretsløp (hydrologisk syklus):**
Den kontinuerlige sirkulasjonen av vann mellom hav, atmosfære og land.

**Hovedprosessene:**

**Fordampning (evaporasjon):**
Vann fordamper fra hav, innsjøer og landoverflater til atmosfæren. Transpirasjon er fordampning fra planter.

**Kondensasjon:**
Vanndamp avkjøles og danner skyer (små vanndråper eller iskrystaller).

**Nedbør:**
Vann faller som regn, snø, sludd eller hagl.

**Avrenning:**
Vann renner på overflaten til bekker, elver og hav.

**Infiltrasjon:**
Vann trenger ned i bakken og blir til grunnvann.

**Oppholdstid:**
Hvor lenge vann i gjennomsnitt befinner seg i et reservoar:
- Atmosfære: ca. 9 dager
- Elver: ca. 2 uker
- Innsjøer: ca. 10 år
- Grunnvann: 100-10 000 år
- Isbreer: 1000-100 000 år`,
    },
    {
      id: 'geografi-1-11-def-2',
      type: 'definition',
      title: 'Elveprosesser',
      content: `**Erosjon:**
Elven graver i bunnen og sidene. Erosjonen er sterkest der vannet har stor fart (bratt terreng, ytre elvesvinger).

**Erosjonstyper:**
- *Hydraulisk erosjon*: Vannets kraft løsner materiale
- *Korrasjon*: Steiner sliper mot underlaget
- *Korrosjon*: Kjemisk oppløsning av bergarter

**Transport:**
Elven frakter med seg løsmasser:
- *Suspensjon*: Fine partikler svever i vannet
- *Saltasjon*: Partikler hopper langs bunnen
- *Rulling*: Store steiner ruller langs bunnen
- *Oppløst*: Mineraler løst i vannet

**Avsetning (sedimentasjon):**
Når vannhastigheten avtar, synker partiklene til bunns. De tyngste partiklene avsettes først.

**Hjulströms diagram:**
Viser sammenhengen mellom vannhastighet og kornstørrelse for erosjon, transport og avsetning.`,
    },
    {
      id: 'geografi-1-11-def-3',
      type: 'definition',
      title: 'Elvedaler og landformer',
      content: `**V-dal:**
Typisk for unge elver i bratt terreng. Elven graver raskt nedover, og sidene forvitrer og raser ut.

**U-dal:**
Formet av isbreer, ikke elver. Bredere bunn og brattere sider enn V-daler.

**Meandersvinger:**
Svinger som dannes når elven eroderer i yttersvingen og avsetter i innersvingen. Elven "vandrer" sidelengs over tid.

**Kroksjø (oxbow lake):**
Dannes når en meandersvinge snøres av og isoleres fra elven.

**Elvevifte (alluvial fan):**
Vifteformet avsetning der en bratt elv møter flatere terreng.

**Delta:**
Avsetning ved elvemunningen der elven møter hav eller innsjø. Eksempler: Mississippis delta, Mjøsas delta.

**Elveterrasser:**
Gamle elveflater som ligger høyere enn dagens elveløp. Viser at elven har gravd seg dypere ned.

**Juv og gjel:**
Trange, dype kløfter gravd ut av elven. Eksempel: Jutulhogget i Hedmark.`,
    },
    {
      id: 'geografi-1-11-def-4',
      type: 'definition',
      title: 'Flom',
      content: `**Flom:**
Unormalt høy vannstand som fører til at vann går utover normale bredder.

**Årsaker til flom:**
- *Snøsmelting*: Våren, særlig ved rask smelting
- *Kraftig nedbør*: Langvarig regn eller intense byger
- *Stormflo*: Høy vannstand i havet presses inn i elvemunninger
- *Ispropp*: Is blokkerer elveløpet
- *Dambrudd*: Plutselig utslipp av oppdemmet vann

**Konsekvenser av flom:**
- Skader på bygninger og infrastruktur
- Jordbruksarealer oversvømmes
- Erosjon og jordras
- Forurensning av drikkevann
- Fare for menneskeliv

**Flomvern:**
- Leveer (flomvoller)
- Flomdammer og flomtunneler
- Regulering av elver
- Arealplanlegging (unngå bygging i flomutsatte områder)
- Varslingssystemer

**Naturlige funksjoner:**
Flommer har også positive effekter: de avsetter næringsrik jord på flomsletter og opprettholder våtmarksøkosystemer.`,
    },
    {
      id: 'geografi-1-11-def-5',
      type: 'definition',
      title: 'Vannkraft i Norge',
      content: `**Vannkraftens grunnlag:**
Norge har ideelle forhold for vannkraft:
- Mye nedbør (1500-4000 mm/år på Vestlandet)
- Bratt terreng gir stor fallhøyde
- Naturlige magasiner (innsjøer)
- Lang tradisjon for utbygging

**Hvordan vannkraft virker:**
Vann ledes gjennom rør fra høyereliggende magasin til turbin. Fallhøyde og vannmengde bestemmer effekten.

**Norsk vannkraft i tall:**
- Ca. 1700 vannkraftverk
- Dekker ca. 90% av norsk strømproduksjon
- Norge er Europas største vannkraftprodusent
- Installert effekt: ca. 33 000 MW

**Ulike perspektiver på vannkraftutbygging:**
Vannkraft er fornybar og gir lite utslipp, men utbygging påvirker natur og lokalsamfunn:

*Fordeler:*
- Fornybar og regulerbar energi
- Lave driftsutslipp
- Bidrar til kraftforsyning og eksport

*Utfordringer:*
- Naturinngrep (demninger, neddemming av områder)
- Påvirker fiskebestander og økosystemer
- Endrer vannføring og landskap
- Lokale interessekonflikter

Avveiningen mellom energibehov og naturvern er en pågående samfunnsdebatt der ulike hensyn må veies mot hverandre.`,
    },
    {
      id: 'geografi-1-11-example-1',
      type: 'example',
      title: 'Eksempel: Glomma - Norges lengste elv',
      problem: `Beskriv Glomma og dens betydning for landskapet og samfunnet.`,
      solution: `**Glomma - fakta:**
- Norges lengste elv: 621 km
- Nedbørfelt: 41 900 km² (13% av Norges areal)
- Starter ved Røros, munner ut i Oslofjorden
- Gjennomsnittlig vannføring: ca. 700 m³/s

**Landskapsforming:**
- V-daler i øvre deler (bratt terreng)
- Bredere daler i midtre deler
- Meandersvinger i nedre, flatere deler
- Deltaavsetninger ved Fredrikstad

**Historisk betydning:**
- Tømmerfløting fra 1500-tallet til 1985
- Grunnlag for sagbruk og treforedling
- Transportåre før veinettet ble utbygd

**Vannkraft:**
- Flere store kraftverk (Rånåsfoss, Solbergfoss m.fl.)
- Regulert vannføring
- Balanse mellom kraftproduksjon og naturhensyn

**Utfordringer:**
- Flomfare (store flommer i 1967, 1995, 2018)
- Forurensning fra jordbruk og industri
- Erosjon langs elvebredder`,
    },
    {
      id: 'geografi-1-11-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-11-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar vannets kretsløp. Tegn en enkel skisse som viser de viktigste prosessene.',
        hints: ['Inkluder fordampning, kondensasjon, nedbør, avrenning og infiltrasjon'],
        solution: 'Vannets kretsløp: 1) Fordampning fra hav og landoverflater, 2) Vanndamp stiger og avkjøles, 3) Kondensasjon danner skyer, 4) Nedbør som regn/snø, 5) Avrenning til elver og hav, 6) Infiltrasjon til grunnvann. Syklusen drives av solenergi og tyngdekraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-11-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-11-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom erosjon, transport og avsetning i en elv. Når skjer hver prosess?',
        hints: ['Tenk på vannhastighet og partikkelstørrelse'],
        solution: 'Erosjon: Elven graver og løsner materiale - skjer ved høy vannhastighet. Transport: Materialet fraktes med vannet - partikler holdes i bevegelse så lenge hastigheten er høy nok. Avsetning: Partikler synker til bunns når hastigheten avtar - store partikler først, deretter mindre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-11-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-11-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan dannes meandersvinger og kroksjøer? Forklar prosessen.',
        hints: ['Tenk på erosjon i yttersving og avsetning i innersving'],
        solution: 'Meandre dannes fordi elven eroderer i yttersvingen (høy hastighet) og avsetter i innersvingen (lav hastighet). Svingene blir stadig mer utpreget. En kroksjø dannes når en meandersvinge blir så kraftig at elven "snør av" svingen og tar en snarvei. Den gamle svingen blir isolert som en halvmåneformet innsjø.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-11-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-11-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er de viktigste årsakene til flom? Hvordan kan samfunnet beskytte seg mot flomskader?',
        hints: ['Tenk på både naturlige årsaker og menneskelige tiltak'],
        solution: 'Årsaker: Snøsmelting om våren, kraftig nedbør, stormflo, ispropp, eventuelt dambrudd. Beskyttelse: Flomvoller/leveer, regulering av elver, flomdammer, god arealplanlegging (ikke bygge i flomutsatte områder), varslingssystemer, naturbaserte løsninger som våtmarker som kan ta opp flomvann.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-11-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-11-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft fordeler og utfordringer ved vannkraftutbygging i Norge. Hvilke ulike hensyn må veies mot hverandre?',
        hints: ['Tenk på energi, miljø, lokalsamfunn, økonomi'],
        solution: 'Fordeler: Fornybar energi, lave utslipp, regulerbar produksjon, eksportinntekter, lokal verdiskaping. Utfordringer: Naturinngrep, påvirkning på fiskebestander og økosystemer, endret vannføring, neddemming av landskap, lokale interessekonflikter. Avveininger: Energibehov vs. naturvern, nasjonale vs. lokale interesser, kortsiktige vs. langsiktige hensyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12: Isbreer og istider
// ============================================================================

export const CHAPTER_GEOGRAFI_12: TextbookChapter = {
  id: 'geografi-1-12',
  courseId: 'geografi',
  chapterNumber: '12',
  title: 'Isbreer og istider',
  description: 'Forstå isbreers dannelse, istidenes påvirkning på landskapet og klimaendringer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive naturlandskap og landformer og forklare hvordan de har blitt til',
  ],
  content: [
    {
      id: 'geografi-1-12-intro',
      type: 'text',
      content: `## Is som landskapsformer

Isbreer har formet store deler av det norske landskapet. Fjorder, U-daler, morener og tusenvis av innsjøer er spor etter istidene. I dag finnes det fortsatt isbreer i Norge, og de gir oss verdifull informasjon om klimahistorien.

**Isbreer i dag:**
- Verdens isbreer dekker ca. 10% av landoverflaten
- Inneholder ca. 70% av verdens ferskvann
- Finnes på alle kontinenter unntatt Australia
- Norge har ca. 2500 isbreer (Jostedalsbreen er størst i fastlands-Europa)

**Istidenes omfang:**
Under siste istid (ca. 20 000 år siden) var Nord-Europa dekket av is opptil 3 km tykk.`,
    },
    {
      id: 'geografi-1-12-def-1',
      type: 'definition',
      title: 'Isbreers dannelse og oppbygging',
      content: `**Hvordan dannes en isbre?**
1. Snø akkumuleres i områder der det faller mer snø enn som smelter
2. Snøen komprimeres og omdannes til firn (kornete is)
3. Videre kompresjon danner breis (tett, blåaktig is)
4. Prosessen tar 20-100 år

**Massebalanse:**
Forholdet mellom akkumulasjon (snøfall) og ablasjon (smelting, kalving).
- Positiv massebalanse: Breen vokser
- Negativ massebalanse: Breen minker
- Likevektslinje (ELA): Grensen mellom akkumulasjons- og ablasjonssonen

**Isbretyper:**
- *Dalbre*: Fyller en dal (f.eks. Nigardsbreen)
- *Platåbre/iskapper*: Dekker et høyfjellsplatå (f.eks. Jostedalsbreen)
- *Innlandsis*: Dekker store landområder (Grønland, Antarktis)
- *Botnbre*: Liten bre i en botn (fordypning i fjellside)`,
    },
    {
      id: 'geografi-1-12-def-2',
      type: 'definition',
      title: 'Isbreers bevegelse',
      content: `**Hvorfor beveger isbreer seg?**
Isen flyter sakte nedover på grunn av tyngdekraften. Bevegelsen skyldes:

**Indre deformasjon:**
Iskrystallene glir langs hverandre under trykk. Dominerer i kalde breer.

**Basalglidning:**
Hele breen glir på et tynt vannlag mellom is og fjell. Krever at bunnen er ved trykksmeltepunktet.

**Hastighet:**
- Typisk: 10-200 meter/år
- Midten raskere enn kantene
- Overflaten raskere enn bunnen
- Enkelte breer kan "surge" (plutselig rask bevegelse)

**Brespalter:**
Sprekker som dannes når isen beveger seg over ujevnt underlag eller strekkes. Kan være svært dype og farlige.

**Brebevegelse og klima:**
Breenes bevegelse og utbredelse endrer seg med klimaet. Varmere klima gir økt smelting og ofte tilbaketrekning av breene.`,
    },
    {
      id: 'geografi-1-12-def-3',
      type: 'definition',
      title: 'Istiders landskap i Norge',
      content: `**Kvartærtiden:**
De siste 2,6 millioner år med gjentatte istider og mellomistider. Siste istid: Weichsel (ca. 115 000 - 11 700 år siden).

**Landformer skapt av isbreer:**

**Erosjonsformer:**
- *U-dal*: Bred dal med bratte sider, formet av dalbre
- *Fjord*: Oversvømt U-dal langs kysten
- *Botn (kar)*: Amfiteaterformet fordypning i fjellside
- *Tind*: Spiss fjelltopp mellom flere botner
- *Arête*: Skarp fjellkam mellom to botner
- *Rundsva*: Avrundet fjellkolle slipt av isen

**Avsetningsformer:**
- *Morene*: Usortert materiale avsatt av breen
- *Esker*: Lange rygger av sortert grus, avsatt i tunneler under isen
- *Dødisgroper*: Fordypninger der isklumper smeltet
- *Drumlin*: Strømlinjeformede hauger parallelt med isens bevegelse

**Norske eksempler:**
- Sognefjorden: 204 km lang, 1308 m dyp
- Jotunheimen: Botner, tinder og arêter
- Østlandets sletteland: Morener, esker og dødisgroper`,
    },
    {
      id: 'geografi-1-12-def-4',
      type: 'definition',
      title: 'Morener og andre avsetninger',
      content: `**Morene:**
Løsmateriale transportert og avsatt av isbreer. Usortert (blanding av alle kornstørrelser).

**Morenetyper:**
- *Bunnmorene*: Avsatt under breen, dekker store flater
- *Endemorene*: Hauger ved breens front, markerer stopp i tilbaketrekningen
- *Sidemorene*: Langs breens sider
- *Midtmorene*: Der to breer møtes
- *Ra*: Store endemorener, f.eks. Raet gjennom Østfold

**Glasifluviale avsetninger:**
Materiale avsatt av smeltevann fra breen - sortert etter kornstørrelse.
- *Esker*: Lange grusrygger fra smeltevannsløp under isen
- *Sandur*: Flate sletteområder foran breen
- *Delta*: Avsetninger der smelteelver møtte havet

**Dødisgroper (kittelhull):**
Runde fordypninger der begravde isklumper smeltet. Ofte vannfylte som små tjern.

**Økonomisk betydning:**
Morener og glasifluviale avsetninger er viktige kilder til grus og sand for byggebransjen.`,
    },
    {
      id: 'geografi-1-12-def-5',
      type: 'definition',
      title: 'Isbreer og klimaendringer',
      content: `**Isbreer som klimaindikator:**
Isbreer reagerer på endringer i temperatur og nedbør og gir dermed informasjon om klimautviklingen.

**Historiske endringer:**
- Lille istid (ca. 1300-1850): Breene vokste betydelig
- Etter 1850: Generell tilbaketrekning med variasjoner
- Noen perioder med fremrykk (f.eks. 1960-90-tallet i Norge)

**Norske breer de siste tiårene:**
- De fleste norske breer har trukket seg tilbake siden 2000
- Jostedalsbreen har minket betydelig
- Noen maritime breer vokste på 1990-tallet pga. økt vinternedbør

**Globale trender:**
De fleste breer i verden har minket de siste hundre årene. Isbreer i Alpene, Himalaya, Andes og Alaska viser tydelig tilbaketrekning.

**Konsekvenser av breendringer:**
- Endret vannføring i breelver
- Påvirker vannkraftproduksjon
- Nye farer: bresjøutbrudd, ustabile områder
- Turisme: Endrede forhold for brevandring
- Havnivåstigning (hovedsakelig fra Grønland og Antarktis)

**Komplekse sammenhenger:**
Breers utvikling påvirkes av både temperatur og nedbør. Økt nedbør kan delvis kompensere for høyere temperatur, noe som gjør at ulike breer kan reagere forskjellig på klimaendringer.`,
    },
    {
      id: 'geografi-1-12-example-1',
      type: 'example',
      title: 'Eksempel: Jostedalsbreen',
      problem: `Beskriv Jostedalsbreen og dens betydning for landskapet.`,
      solution: `**Jostedalsbreen - fakta:**
- Europas største fastlandsbre
- Areal: ca. 474 km² (har minket fra ca. 487 km² på 1960-tallet)
- Høyeste punkt: 1957 moh.
- Istykkelse: opptil 600 m
- Mange utløpere/armer: Nigardsbreen, Briksdalsbreen m.fl.

**Landskapsforming:**
- Ligger på et høyfjellsplatå (platåbre)
- Utløperne er dalbrer som beveger seg ned i dalene
- Former U-daler og avsetter morener
- Smeltevannet danner breelver og innsjøer

**Historisk utvikling:**
- Under siste istid: Del av innlandsisen
- Lille istid: Maksimal utbredelse ca. 1750
- Siden 1930: Generell tilbaketrekning
- 1960-90-tallet: Noe fremrykk pga. økt nedbør
- Etter 2000: Tilbaketrekning

**Betydning i dag:**
- Viktig turistattraksjon
- Forskning og klimaovervåking
- Vannkraftreservoar i nedbørfeltet
- Jostedalsbreen nasjonalpark (opprettet 1991)`,
    },
    {
      id: 'geografi-1-12-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-12-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan en isbre dannes. Hva er forskjellen på snø, firn og breis?',
        hints: ['Tenk på prosessen fra snøfall til kompakt is'],
        solution: 'En isbre dannes der det akkumuleres mer snø enn som smelter over tid. Snø komprimeres og blir først til firn (kornete, delvis smeltet og gjenfrosset snø), deretter til breis (tett, blåaktig is). Prosessen tar 20-100 år og krever at snøen ikke smelter om sommeren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-12-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-12-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom U-dal og V-dal. Hvordan kan du se forskjellen i terrenget?',
        hints: ['Tenk på hva som har formet dalen - is eller vann'],
        solution: 'U-dal er formet av isbre: bred bunn, bratte sider, U-formet tverrsnitt. V-dal er formet av elv: smal bunn, skrånende sider, V-formet tverrsnitt. I terrenget: U-daler har flatere bunn der man kan gå, V-daler har ofte elv i bunnen og er vanskeligere å krysse. Fjordene er oversvømte U-daler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-12-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-12-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er morene? Beskriv tre ulike typer morener og hvordan de dannes.',
        hints: ['Tenk på hvor materialet avsettes i forhold til breen'],
        solution: 'Morene er usortert løsmateriale avsatt av isbreer. Typer: 1) Bunnmorene - avsatt under breen, danner flate områder. 2) Endemorene - avsatt ved breens front når den stopper opp, danner hauger/rygger. 3) Sidemorene - materiale som samles langs breens sider. Raet er en stor endemorene gjennom Østfold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-12-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-12-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en esker og hvordan dannes den? Hvor i Norge kan man finne eskere?',
        hints: ['Tenk på smeltevannsløp under isen'],
        solution: 'En esker er en lang, smal rygg av sortert grus og sand. Dannes i tunneler under isbreen der smeltevann renner og avsetter materiale. Når isen smelter, blir avsetningen stående som en rygg. Finnes mange steder på Østlandet og i Trøndelag, ofte brukt som grustak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-12-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-12-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan isbreer brukes som indikatorer på klimaendringer? Hva påvirker breenes massebalanse?',
        hints: ['Tenk på akkumulasjon og ablasjon'],
        solution: 'Isbreer reagerer på endringer i temperatur og nedbør. Massebalansen bestemmes av: 1) Akkumulasjon (snøfall om vinteren), 2) Ablasjon (smelting og kalving om sommeren). Økt temperatur gir mer smelting, men økt nedbør kan gi mer snø. Derfor kan ulike breer reagere forskjellig. Generelt har de fleste breer i verden minket de siste hundre årene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 13: Kystlandskap
// ============================================================================

export const CHAPTER_GEOGRAFI_13: TextbookChapter = {
  id: 'geografi-1-13',
  courseId: 'geografi',
  chapterNumber: '13',
  title: 'Kystlandskap',
  description: 'Utforsk kystformer, bølger og havstrømmer og Norges unike kystlinje.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive naturlandskap og landformer og forklare hvordan de har blitt til',
  ],
  content: [
    {
      id: 'geografi-1-13-intro',
      type: 'text',
      content: `## Kysten - møtet mellom land og hav

Norges kystlinje er en av verdens lengste og mest varierte. Fjorder, øyer, holmer og svaberg preger landskapet og har formet bosetting, næring og kultur gjennom årtusener.

**Norges kystlinje i tall:**
- Fastlandskyst: ca. 29 000 km
- Med øyer: over 100 000 km
- Ca. 50 000 øyer og holmer
- Fjorder som strekker seg opptil 200 km innover i landet

**Kystens betydning:**
- Bosetting og ferdsel
- Fiske og havbruk
- Skipsfart og handel
- Turisme og friluftsliv
- Olje- og gassvirksomhet`,
    },
    {
      id: 'geografi-1-13-def-1',
      type: 'definition',
      title: 'Bølger',
      content: `**Bølgedannelse:**
Bølger dannes hovedsakelig av vind som blåser over vannoverflaten. Bølgestørrelsen avhenger av:
- Vindhastighet
- Hvor lenge vinden blåser
- Strekningslengde (fetch) - hvor langt vinden blåser over åpent hav

**Bølgebevegelse:**
I åpent hav beveger vannet seg i sirkler - partiklene returnerer nesten til utgangspunktet. Bare energien forplanter seg fremover.

**Bølger mot land:**
Når bølgen nærmer seg land og vannet blir grunnere:
1. Bølgen bremses ved bunnen
2. Bølgelengden avtar
3. Bølgehøyden øker
4. Bølgen bryter når den blir for bratt

**Bølgetyper:**
- *Vindbølger*: Skapt av lokal vind
- *Dønninger*: Lange bølger fra fjerne stormer
- *Tsunamier*: Forårsaket av jordskjelv eller skred`,
    },
    {
      id: 'geografi-1-13-def-2',
      type: 'definition',
      title: 'Havstrømmer',
      content: `**Hva er havstrømmer?**
Store "elver" i havet som transporterer vann over lange avstander.

**Drivkrefter:**
- *Vind*: Vindstress på overflaten driver havstrømmene
- *Termohalin sirkulasjon*: Forskjeller i temperatur og saltholdighet
- *Jordrotasjonen*: Corioliseffekten avbøyer strømmene
- *Kystlinjer og havbunn*: Styrer strømmenes retning

**Viktige strømmer for Norge:**
- *Golfstrømmen/Den nordatlantiske strøm*: Fører varmt vann nordover
- *Den norske kyststrømmen*: Brakkvann langs kysten
- *Den norske atlanterhavsstrømmen*: Varmt, salt atlanterhavsvann

**Betydning:**
- Golfstrømmen gjør at Norge har mildere klima enn andre områder på samme breddegrad
- Påvirker fiskebestander og økosystemer
- Viktig for skipsfart
- Sprer forurensning (f.eks. plast i havet)`,
    },
    {
      id: 'geografi-1-13-def-3',
      type: 'definition',
      title: 'Kystformer - erosjon',
      content: `**Kysterosjon:**
Bølger, strømmer og is bryter ned kysten over tid.

**Erosjonsprosesser:**
- *Hydraulisk påvirkning*: Vanntrykk presser inn i sprekker
- *Korrasjon*: Steiner slynges mot fjellet
- *Korrosjon*: Kjemisk oppløsning

**Erosjonsformer:**

**Klipper og stup:**
Bratte bergvegger mot havet. Dannes når bølgene graver innunder og fjellet raser ut.

**Grotter og huler:**
Bølgene graver ut svakhetssoner i berget.

**Strandflate:**
Flatt eller svakt skrånende område ved havnivå. Norges strandflate er opptil 60 km bred, særlig på Vestlandet. Dannelse omdiskutert - trolig kombinasjon av bølger, frost og is over lang tid.

**Skjær og holmer:**
Rester av erodert kyst som stikker opp av vannet.

**Bølgevasket svaberg:**
Glatte, avrundede berg formet av bølger over tid.`,
    },
    {
      id: 'geografi-1-13-def-4',
      type: 'definition',
      title: 'Kystformer - avsetning',
      content: `**Kystavsetning:**
Materiale transportert av bølger og strømmer avsettes i roligere områder.

**Avsetningsformer:**

**Strender:**
Sand- eller grusstrender dannes der bølgene avsetter materiale. Formen avhenger av bølgeenergi og materialtype.

**Sandbanker:**
Undervannsrygger av sand parallelt med kysten.

**Sandtanger (tombolo):**
Landforbindelse mellom fastland og øy, dannet av avsetning.

**Laguner:**
Grunne vannområder skilt fra havet av sandbanker eller barriereøyer.

**Deltaer:**
Avsetninger ved elvemunninger der elven møter havet.

**Materialsortering:**
Bølgene sorterer materiale etter størrelse:
- Grov stein og grus øverst i strandsonen
- Sand i mellomzonen
- Finere sedimenter dypere ut

**Strandlinjeforskyving:**
Kysten endrer seg også pga. landheving (etter istiden) og havnivåendringer.`,
    },
    {
      id: 'geografi-1-13-def-5',
      type: 'definition',
      title: 'Norges kystlinje',
      content: `**Fjordene:**
Norges mest karakteristiske kystform. Oversvømte U-daler gravd ut av isbreer.
- Sognefjorden: 204 km lang, 1308 m dyp
- Hardangerfjorden: 179 km lang
- Typisk: Bratte sider, terskel ved munningen, dypt basseng innenfor

**Skjærgården:**
Tusenvis av øyer, holmer og skjær langs kysten. Beskytter mot åpent hav.

**Strandflaten:**
Flatt område ved havnivå, særlig utviklet på Vestlandet og i Nord-Norge. Viktig for bosetting og fiske.

**Lofoten og Vesterålen:**
Dramatisk kyst med høye fjell rett opp fra havet. Viktig fiskeriområde.

**Regional variasjon:**
- Oslofjorden: Bred, grunn fjord i hardt grunnfjell
- Vestlandet: Dype fjorder, smal strandflate
- Trøndelag: Bred strandflate
- Nord-Norge: Varierende, med både fjorder og strandflate

**Landhevingen:**
Etter istiden har landet hevet seg opptil 200 m. Gamle strandlinjer synes i landskapet. Landhevingen fortsetter (ca. 5 mm/år i indre Oslofjord).`,
    },
    {
      id: 'geografi-1-13-example-1',
      type: 'example',
      title: 'Eksempel: Strandflaten',
      problem: `Hva er strandflaten og hvordan har den påvirket bosettingen i Norge?`,
      solution: `**Strandflaten:**
Et flatt eller svakt skrånende landskap ved havnivå langs norskekysten.

**Karakteristikk:**
- Opptil 60 km bred
- Høyde 0-50 moh.
- Tusenvis av øyer og skjær på samme nivå
- Best utviklet Stad - Lofoten

**Dannelse (flere teorier):**
- Frostforvitring ved havnivå
- Bølgeerosjon over lang tid
- Kombinasjon av prosesser gjennom millioner av år
- Dannelsen er fortsatt faglig omdiskutert

**Betydning for bosetting:**
- Flat, tilgjengelig grunn for bebyggelse
- Gode havner beskyttet av skjærgården
- Nærhet til fiskefeltene
- Jordbruk på hevede strandavsetninger
- Mange av Norges tettsteder ligger på strandflaten

**Historisk:**
Strandflaten har vært grunnlaget for kystbefolkningens levemåte i tusenvis av år - fiske, fangst og småskala jordbruk.`,
    },
    {
      id: 'geografi-1-13-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-13-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan bølger dannes og hva som skjer når de nærmer seg land.',
        hints: ['Tenk på vind, fetch og hva som skjer på grunt vann'],
        solution: 'Bølger dannes av vind som blåser over vannoverflaten. Størrelsen avhenger av vindhastighet, varighet og fetch (strekningslengde). Når bølgen nærmer seg land: bunnen bremser bølgen, bølgelengden avtar, høyden øker, bølgen blir brattere og bryter til slutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-13-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-13-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken betydning har Golfstrømmen for Norges klima? Sammenlign med andre områder på samme breddegrad.',
        hints: ['Tenk på temperatur og is'],
        solution: 'Golfstrømmen/Den nordatlantiske strøm fører varmt vann fra tropene nordover. Dette gjør at Norge har mye mildere vintre enn områder på samme breddegrad (f.eks. Labrador i Canada, Sibir). Eksempel: Bergen (60°N) har gjennomsnittstemperatur i januar på ca. 2°C, mens Labrador på samme breddegrad har ca. -15°C. Norskekysten er stort sett isfri.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-13-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-13-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv tre ulike kystformer skapt av erosjon. Forklar hvordan de dannes.',
        hints: ['Tenk på klipper, grotter, strandflate'],
        solution: '1) Klipper/stup: Bølger graver innunder fjellet til det raser ut. 2) Grotter/huler: Bølger eroderer svakhetssoner i berget over tid. 3) Strandflate: Trolig dannet av bølgeerosjon og frostforvitring ved havnivå over millioner av år (omdiskutert). Andre eksempler: skjær, bølgevasket svaberg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-13-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-13-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en fjord og hvordan skiller den seg fra andre kystformer?',
        hints: ['Tenk på isbreer og U-daler'],
        solution: 'En fjord er en oversvømt U-dal gravd ut av isbreer. Kjennetegn: lang og smal, bratte sider, ofte svært dyp (Sognefjorden 1308 m), terskel ved munningen (grunnere enn innenfor), flat bunn. Skiller seg fra: vanlige bukter (grunnere, bredere), elvemunninger (V-formet, ikke U-formet), rias (druknede elvedaler).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-13-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-13-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan har landhevingen etter istiden påvirket norskekysten? Gi eksempler.',
        hints: ['Tenk på gamle strandlinjer og hevede områder'],
        solution: 'Etter istiden har landet hevet seg fordi isens vekt er borte (isostatisk landheving). Opptil 200 m i innlandet, ca. 5 mm/år fortsatt i indre Oslofjord. Eksempler på spor: gamle strandlinjer høyt over dagens havnivå, hevede strandvoller brukt til jordbruk, fossilfunn av marine arter i innlandet, havneanlegg som nå ligger over vann.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14: Vegetasjon og økosystemer
// ============================================================================

export const CHAPTER_GEOGRAFI_14: TextbookChapter = {
  id: 'geografi-1-14',
  courseId: 'geografi',
  chapterNumber: '14',
  title: 'Vegetasjon og økosystemer',
  description: 'Laer om vegetasjonssoner, økosystemer og biologisk mangfold i Norge.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte sammenhenger mellom klima, vær, vegetasjon og naturressurser',
  ],
  content: [
    {
      id: 'geografi-1-14-intro',
      type: 'text',
      content: `## Levende landskap

Vegetasjonen dekker store deler av Norges landareal og varierer fra frodige løvskoger i sør til karrig tundra i nord og på fjellet. Plantelivet er grunnlaget for økosystemene og påvirkes av klima, jordsmonn og menneskelig aktivitet.

**Norges vegetasjon i tall:**
- Skog dekker ca. 37% av landarealet
- Myr og våtmark ca. 6%
- Fjell over tregrensen ca. 30%
- Jordbruksareal ca. 3%
- Bebygd areal ca. 2%

**Hva bestemmer vegetasjonen?**
- Klima (temperatur, nedbør, lys)
- Jordsmonn og berggrunn
- Topografi (høyde, eksponering)
- Tid (suksesjon)
- Menneskets påvirkning`,
    },
    {
      id: 'geografi-1-14-def-1',
      type: 'definition',
      title: 'Vegetasjonssoner i Norge',
      content: `**Hovedsoner fra sør til nord og fra lavland til fjell:**

**Nemoral sone (edelløvskog):**
- Varmekjær løvskog med eik, bøk, ask, alm, lind
- Finnes langs kysten til Trøndelag
- Krever mild vinter og varm sommer

**Boreonemoral sone (blandingsskog):**
- Overgang mellom edelløvskog og barskog
- Både varmekjære løvtrær og bartrær
- Sør- og Østlandet

**Boreal sone (barskog/taiga):**
- Dominert av gran og furu
- Norges største vegetasjonssone
- Fra Sørlandet til Troms

**Alpin sone (fjellvegetasjon):**
- Over tregrensen
- Inndeles i: lavalpin (vier, dvergbjørk), mellomalpin (gras, lyng), høyalpin (lav, mose, stein)

**Arktisk sone:**
- Svalbard og høyeste fjelltopper
- Permanent kulde, sparsom vegetasjon

**Tregrensen:**
Høyden der skogen slutter. Varierer fra ca. 1200 moh. i sør til havnivå i nord.`,
    },
    {
      id: 'geografi-1-14-def-2',
      type: 'definition',
      title: 'Økosystemer og samspill',
      content: `**Økosystem:**
Samspillet mellom levende organismer (planter, dyr, mikroorganismer) og deres fysiske miljø (klima, jord, vann) i et avgrenset område.

**Økosystemets komponenter:**
- *Produsenter*: Planter som omdanner sollys til energi (fotosyntese)
- *Konsumenter*: Dyr som spiser planter eller andre dyr
- *Nedbrytere*: Sopp og bakterier som bryter ned dødt organisk materiale

**Næringskjeder og næringsnett:**
Energi overføres fra produsenter til konsumenter:
Plante → Plantespiser → Rovdyr → Topprovdyr
Næringsnett viser at de fleste organismer har flere matkilder.

**Økosystemtjenester:**
Godene vi får fra naturen:
- Produksjon: mat, tømmer, ferskvann
- Regulering: klimaregulering, vannrensing, pollinering
- Kulturelle: rekreasjon, estetikk, åndelige verdier
- Støttende: fotosyntese, jorddannelse, næringssirkulasjon

**Suksesjon:**
Gradvis endring i vegetasjon over tid. Pionerarter → mellomstadier → klimakssamfunn.`,
    },
    {
      id: 'geografi-1-14-def-3',
      type: 'definition',
      title: 'Naturtyper i Norge',
      content: `**Skog:**
- *Granskog*: Dominerer i øst og innlandet, trives i kjølig klima
- *Furuskog*: Tørrere områder, sandholdig jord, tåler mer ekstreme forhold
- *Blandingsskog*: Gran, furu og løvtrær blandet
- *Bjørkeskog*: Ofte i fjellet under tregrensen, pionerskog
- *Edelløvskog*: Varmekjære trær i sør

**Myr og våtmark:**
- Dannes der vannet ikke renner bort
- *Torvmyr*: Opphopning av delvis nedbrutt plantemateriale
- *Rismyr*: Fattig på næring, dominert av torvmose
- *Rikmyr*: Næringsrik, artsrik
- Viktige for karbonlagring og vannrensing

**Fjell:**
- *Lavalpin sone*: Vier, dvergbjørk, bærlyngheier
- *Mellomalpin sone*: Gras, starr, rabbevegetasjon
- *Høyalpin sone*: Lav, mose, spredte blomsterplanter

**Kyst og strand:**
- Tilpasset salt, vind og tørke
- Strandenger, tangvoller, sanddyner`,
    },
    {
      id: 'geografi-1-14-def-4',
      type: 'definition',
      title: 'Biologisk mangfold',
      content: `**Biodiversitet:**
Mangfoldet av liv på jorden - variasjon i arter, gener og økosystemer.

**Tre nivåer:**
- *Genetisk mangfold*: Variasjon innen arter
- *Artsmangfold*: Antall ulike arter i et område
- *Økosystemmangfold*: Variasjon i naturtyper

**Norges biologiske mangfold:**
- Ca. 44 000 kjente arter
- Mange arter fortsatt uoppdaget (særlig insekter, sopp)
- Noen områder er særlig artsrike (hotspots)

**Trusler mot biologisk mangfold:**
- Arealendringer (utbygging, jordbruk, skogbruk)
- Forurensning
- Fremmede arter
- Overbeskatning
- Klimaendringer

**Ulike perspektiver på naturvern:**
Det er bred enighet om at biologisk mangfold har verdi, men uenighet om hvor strenge virkemidler som trengs:
- Noen mener strengere vern er nødvendig
- Andre vektlegger bærekraftig bruk og at mennesker er en del av naturen
- De fleste mener man må finne en balanse mellom bruk og vern

**Norges naturmangfoldlov:**
Loven fastsetter prinsipper for bærekraftig bruk av naturen, inkludert føre-var-prinsippet.`,
    },
    {
      id: 'geografi-1-14-example-1',
      type: 'example',
      title: 'Eksempel: Barskogen som økosystem',
      problem: `Beskriv barskogen som økosystem. Hvilke organismer lever der og hvordan henger de sammen?`,
      solution: `**Barskogen - Norges største økosystem:**

**Produsenter:**
- Gran og furu (dominerende)
- Undervegetasjon: blåbær, tyttebær, mose, lav

**Konsumenter - plantespisere:**
- Elg, rådyr (spiser kvist og bark)
- Hare, smågnagere (urter, bark, bær)
- Storfugl, orrfugl (bær, skudd)
- Insekter (granbarkbille, sommerfugllarver)

**Konsumenter - rovdyr:**
- Gaupe, rev, mår
- Hønsehauk, spurvehauk
- Ørn (topprovdyr)

**Nedbrytere:**
- Sopp (viktig for nedbrytning og trærnes næringsopptak)
- Bakterier
- Insekter og meitemark

**Næringskjede-eksempel:**
Gran → Granbarkbille → Tretåspett → Hønsehauk

**Samspill:**
- Sopp og trerøtter lever i symbiose (mykorrhiza)
- Nøtteskrike lagrer konglefrø og bidrar til frøspredning
- Elg beiter og holder vegetasjonen nede
- Døde trær (læger) gir leveområder for insekter og fugler`,
    },
    {
      id: 'geografi-1-14-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-14-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de ulike vegetasjonssonene i Norge fra lavland til fjelltopp. Hva kjennetegner hver sone?',
        hints: ['Start i lavlandet og gå oppover i høyden'],
        solution: 'Fra lavland til fjell: 1) Edelløvskog (nemoral) - varmekjære løvtrær som eik, bøk. 2) Blandingsskog (boreonemoral) - både løv og bar. 3) Barskog (boreal) - gran og furu dominerer. 4) Lavalpin - over tregrensen, vier og dvergbjørk. 5) Mellomalpin - gras og lyng. 6) Høyalpin - lav, mose, steinur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-14-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-14-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er et økosystem? Forklar begrepene produsent, konsument og nedbryter med eksempler.',
        hints: ['Tenk på energiflyt og næringskjeder'],
        solution: 'Et økosystem er samspillet mellom levende organismer og deres fysiske miljø. Produsenter (planter) lager energi fra sollys gjennom fotosyntese, f.eks. gran. Konsumenter spiser andre organismer - plantespisere (elg) eller rovdyr (gaupe). Nedbrytere (sopp, bakterier) bryter ned dødt materiale og frigjør næringsstoffer tilbake til jorda.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-14-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-14-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er økosystemtjenester? Gi eksempler på fire ulike typer økosystemtjenester.',
        hints: ['Tenk på hva naturen gir oss av goder'],
        solution: 'Økosystemtjenester er godene vi får fra naturen. 1) Forsynende: mat, ferskvann, tømmer, medisiner. 2) Regulerende: klimaregulering, vannrensing, pollinering av avlinger, flomdemping. 3) Kulturelle: friluftsliv, naturopplevelser, inspirasjon. 4) Støttende: fotosyntese, jorddannelse, næringssirkulasjon, habitat for arter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-14-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-14-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er myr viktig? Beskriv myr som naturtype og dens funksjoner.',
        hints: ['Tenk på karbonlagring, vann og biologisk mangfold'],
        solution: 'Myr dannes der vannet ikke renner bort og døde planter hoper seg opp som torv. Viktige funksjoner: 1) Karbonlager - torvmyr lagrer store mengder karbon. 2) Vannrensing og flomdemping - holder tilbake vann. 3) Habitat - mange spesialiserte arter lever i myr. 4) Historisk arkiv - pollen og gjenstander bevares i torv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-14-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-14-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hva som truer biologisk mangfold i Norge. Hvilke ulike hensyn må veies mot hverandre i arbeidet med å bevare naturmangfoldet?',
        hints: ['Tenk på arealbruk, utbygging, og ulike interesser'],
        solution: 'Trusler: Arealendringer (utbygging, skogbruk, jordbruk), klimaendringer, fremmede arter, forurensning. Ulike hensyn å veie: Naturvern vs. næringsutvikling, lokale vs. nasjonale interesser, kortsiktig økonomi vs. langsiktig bærekraft, vern vs. bærekraftig bruk. De fleste mener vi trenger en balanse - det er uenighet om hvor strikt vernet bør være og hvilke metoder som virker best.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 15: Jord og jordbruk
// ============================================================================

export const CHAPTER_GEOGRAFI_15: TextbookChapter = {
  id: 'geografi-1-15',
  courseId: 'geografi',
  chapterNumber: '15',
  title: 'Jord og jordbruk',
  description: 'Forstå jorddannelse, jordtyper og jordbrukets vilkår i Norge.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte sammenhenger mellom klima, vær, vegetasjon og naturressurser',
  ],
  content: [
    {
      id: 'geografi-1-15-intro',
      type: 'text',
      content: `## Jord - grunnlaget for mat

Jord er grunnlaget for det meste av verdens matproduksjon. I Norge er bare ca. 3% av landarealet dyrket mark, noe som gjør matjorda til en verdifull og begrenset ressurs.

**Jordens betydning:**
- Grunnlag for plantevekst og matproduksjon
- Habitat for milliarder av organismer
- Filtrerer og renser vann
- Lagrer karbon
- Resirkulerer næringsstoffer

**Norske forhold:**
- Begrenset dyrkbart areal (kaldt klima, fjell, myr)
- Mye av den beste jorda ligger i byer og tettsteder
- Lang historie med jordbruk tilpasset lokale forhold`,
    },
    {
      id: 'geografi-1-15-def-1',
      type: 'definition',
      title: 'Jorddannelse',
      content: `**Hva er jord?**
Løsmasser som kan gi grobunn for planter. Består av mineralmateriale, organisk materiale, vann, luft og levende organismer.

**Jorddannende faktorer:**
1. *Opphavsmateriale*: Bergarten som forvitrer (morene, elveavsetninger, fjell)
2. *Klima*: Temperatur og nedbør påvirker forvitring og biologisk aktivitet
3. *Organismer*: Planter, dyr, sopp og bakterier
4. *Topografi*: Helning, eksponering, vannforhold
5. *Tid*: Jorddannelse tar lang tid (hundre til tusenvis av år)

**Jorddannelsesprosesser:**
- *Forvitring*: Bergart brytes ned fysisk og kjemisk
- *Humifisering*: Organisk materiale omdannes til humus
- *Utvasking*: Stoffer transporteres nedover med vannet
- *Mineralisering*: Organisk materiale brytes ned til mineraler

**Jordprofil:**
Vertikalt snitt gjennom jorda som viser lagene (horisonter):
- O-sjikt: Organisk materiale (strøfall, humus)
- A-sjikt: Moldholdig mineraljord
- B-sjikt: Utfelt materiale, ofte rødbrunt (jernforbindelser)
- C-sjikt: Løst opphavsmateriale
- R: Fast fjell`,
    },
    {
      id: 'geografi-1-15-def-2',
      type: 'definition',
      title: 'Jordtyper i Norge',
      content: `**Podsol:**
- Norges vanligste jordtype
- Typisk under barskog
- Sur, næringsfattig jord
- Karakteristisk grått utvasket lag under humuslaget

**Brunjord:**
- Finnes i løvskog og områder med rik berggrunn
- Mer næringsrik enn podsol
- God jordstruktur

**Leirjord:**
- Avsatt i hav under istiden (marin leire)
- Finnes på Østlandet og i Trøndelag
- Næringsrik og fruktbar
- Kan være ustabil (kvikkleire)

**Morenejord:**
- Usortert materiale fra isbreer
- Varierende kvalitet
- Vanlig i store deler av landet

**Myrjord:**
- Organisk jord dannet i våte områder
- Må grøftes for å dyrkes
- Sakker når den dreneres

**Elveavsetninger (alluvial jord):**
- Avsatt av elver i dalbunner og deltaer
- Ofte svært fruktbar
- Grunnlag for mye jordbruk`,
    },
    {
      id: 'geografi-1-15-def-3',
      type: 'definition',
      title: 'Jordbruk og klima',
      content: `**Klimaets betydning for jordbruk:**

**Temperatur:**
- Vekstsesong: Antall dager med døgnmiddeltemperatur over 6°C
- Varierer fra 200+ dager i sør til under 100 dager i nord
- Begrenser hvilke vekster som kan dyrkes

**Nedbør:**
- Vestlandet: Mye nedbør, utfordring med utvasking
- Østlandet: Mindre nedbør, kan trenge vanning
- Fordeling over året viktig

**Lysforhold:**
- Midnattssol i nord gir lange dager, men kort sesong
- Lange dager kompenserer delvis for kort sesong

**Norske vekstvilkår:**
- Korn: Hovedsakelig Østlandet og Trøndelag
- Gras/husdyr: Hele landet, dominerer i vest og nord
- Frukt og bær: Vestlandet (milde vintre), Sørlandet
- Grønnsaker: Krever god jord og lang sesong

**Landbrukssoner:**
Norge deles inn i soner basert på produksjonsvilkår. Ulike støtteordninger for ulike soner.`,
    },
    {
      id: 'geografi-1-15-def-4',
      type: 'definition',
      title: 'Arealbruk og avveininger',
      content: `**Jordbruksareal i Norge:**
- Ca. 10 000 km² dyrket jord (3% av landarealet)
- Ca. 1/3 egnet for korndyrking
- Resten hovedsakelig grasdyrking

**Konkurrerende interesser om arealer:**
Jordbruksarealer er under press fra flere hold:
- Boligbygging og urbanisering
- Næringsliv og industri
- Veier og infrastruktur
- Natur- og friluftsområder

**Ulike perspektiver på arealbruk:**

*Argumenter for jordvern:*
- Matjord er en ikke-fornybar ressurs
- Matsikkerhet og selvforsyning
- Begrenset areal i Norge

*Argumenter for utvikling:*
- Behov for boliger og arbeidsplasser
- Samfunnsøkonomisk nytte
- Effektivisering av jordbruket

*Balansesynspunkter:*
- Utbygging kan skje på mindre verdifulle arealer
- Fortetting kan redusere arealbehovet
- Teknologi kan øke produktiviteten på eksisterende areal

**Jordloven:**
Regulerer omdisponering av jordbruksareal. Kommunene må veie ulike hensyn mot hverandre ved arealplanlegging.

**Samfunnsdebatten:**
Det er politisk uenighet om hvor strengt jordvernet bør være. Noen mener jordvern må prioriteres høyere, andre mener lokale behov og utvikling må veie tyngre.`,
    },
    {
      id: 'geografi-1-15-example-1',
      type: 'example',
      title: 'Eksempel: Jordbruk i Trøndelag',
      problem: `Hvorfor er Trøndelag en viktig jordbruksregion i Norge?`,
      solution: `**Trøndelag som jordbruksregion:**

**Naturgrunnlaget:**
- Stor andel leirjord fra istiden (marin leire)
- Relativt flate områder (lettdyrket)
- Lengre vekstsesong enn Nord-Norge
- Tilstrekkelig nedbør

**Produksjon:**
- Korn: Bygg og havre (kortere sesong enn Østlandet)
- Gras og fôr: Grunnlag for melke- og kjøttproduksjon
- Potet og grønnsaker i noen områder

**Historisk betydning:**
- Jordbruk siden steinalderen
- Viktig kornkammer for Nord-Norge
- Tradisjon for allsidig gårdsdrift

**Utfordringer:**
- Kortere sesong enn Sør-Norge
- Konkurranse om areal (Trondheim-regionen vokser)
- Kvikkleire (ustabil grunn, farlig ved utbygging)

**Avveininger:**
Mye av den beste jordbruksjorda ligger nær Trondheim, der presset for utbygging er størst. Kommunene må veie jordvern mot utbyggingsbehov.`,
    },
    {
      id: 'geografi-1-15-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-15-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan jord dannes. Hvilke faktorer påvirker jorddannelsen?',
        hints: ['Tenk på opphavsmateriale, klima, organismer, tid'],
        solution: 'Jord dannes gjennom forvitring av berggrunn og tilførsel av organisk materiale over lang tid. Fem faktorer: 1) Opphavsmateriale (berggrunn, morene), 2) Klima (temperatur, nedbør påvirker forvitring), 3) Organismer (planter, dyr, sopp bryter ned materiale), 4) Topografi (helning, vannforhold), 5) Tid (jorddannelse tar hundre til tusenvis av år).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-15-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-15-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er et jordprofil? Tegn og forklar de ulike sjiktene i en typisk podsol.',
        hints: ['Tenk på O, A, B, C-sjikt og deres kjennetegn'],
        solution: 'Jordprofil er et vertikalt snitt gjennom jorda. Podsol har: O-sjikt (organisk, strøfall og humus, mørkt), A-sjikt (utvasket, grått, næringsfattig), B-sjikt (utfelt materiale, rødbrunt pga. jern, hardere), C-sjikt (løst opphavsmateriale, upåvirket av jorddannelse), R (fast fjell).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-15-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-15-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv tre ulike jordtyper i Norge og hvor de finnes.',
        hints: ['Tenk på podsol, leirjord, myrjord'],
        solution: '1) Podsol: Norges vanligste, under barskog, sur og næringsfattig, grått utvasket lag. 2) Leirjord (marin leire): Østlandet og Trøndelag, avsatt i hav under istiden, næringsrik, god for korn. 3) Myrjord: Organisk jord i våte områder, må grøftes for dyrking, finnes over hele landet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-15-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-15-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan påvirker klimaet hva som kan dyrkes ulike steder i Norge?',
        hints: ['Tenk på temperatur, vekstsesong, nedbør'],
        solution: 'Klimaet bestemmer vekstsesongen (dager over 6°C) - lang i sør, kort i nord. Sør- og Østlandet: korn, grønnsaker (lengst sesong). Vestlandet: gras, frukt (mye nedbør, milde vintre). Trøndelag: noe korn, mye gras. Nord-Norge: hovedsakelig gras (kort sesong, men lange dager). Nedbørmengde og fordeling over året er også viktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-15-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-15-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft ulike syn på omdisponering av jordbruksareal til andre formål. Hvilke hensyn bør veies mot hverandre?',
        hints: ['Tenk på matsikkerhet, utvikling, lokale behov'],
        solution: 'For strengt jordvern: Matjord er ikke-fornybar, matsikkerhet viktig, begrenset areal i Norge. For utvikling: Behov for boliger/arbeidsplasser, samfunnsøkonomisk nytte. Balansesynspunkter: Bygge på mindre verdifulle arealer, fortetting, effektivisering. Hensyn å veie: Nasjonale vs. lokale interesser, kortsiktig vs. langsiktig, økonomi vs. beredskap. Det finnes ulike politiske syn på dette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 16: Befolkning og demografi
// ============================================================================

export const CHAPTER_GEOGRAFI_16: TextbookChapter = {
  id: 'geografi-1-16',
  courseId: 'geografi',
  chapterNumber: '16',
  title: 'Befolkning og demografi',
  description: 'Laer om befolkningsvekst, demografisk overgang og befolkningsstruktur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske demografiske forhold i ulike land og drøfte årsaker til og konsekvenser av befolkningsendringer',
  ],
  content: [
    {
      id: 'geografi-1-16-intro',
      type: 'text',
      content: `## Befolkning og demografi

Demografi er studiet av befolkning - hvordan befolkninger vokser, krymper og endrer sammensetning over tid. Forståelse av befolkningsdynamikk er viktig for planlegging av samfunnet.

**Verdens befolkning:**
- Ca. 8 milliarder mennesker (2024)
- Vokser med ca. 80 millioner per år
- Veksten avtar - fra 2% årlig i 1970 til ca. 1% nå
- Ulik veksttakt i ulike verdensdeler

**Demografiske grunnbegreper:**
- Fødselsrate: Antall fødte per 1000 innbyggere per år
- Dødsrate: Antall døde per 1000 innbyggere per år
- Naturlig tilvekst: Fødselsrate minus dødsrate
- Fertilitet: Gjennomsnittlig antall barn per kvinne`,
    },
    {
      id: 'geografi-1-16-def-1',
      type: 'definition',
      title: 'Befolkningsvekst og -utvikling',
      content: `**Befolkningsvekst:**
Endring i befolkningsstørrelse over tid, bestemt av:
- Fødsler (pluss)
- Dødsfall (minus)
- Innvandring (pluss)
- Utvandring (minus)

**Naturlig befolkningsvekst:**
Fødselsrate minus dødsrate. Kan være positiv (vekst), negativ (nedgang) eller null.

**Eksponentiell vekst:**
Når befolkningen vokser med en fast prosent, dobles den på en bestemt tid. Med 2% vekst dobles befolkningen på 35 år.

**Bæreevne:**
Maksimalt antall mennesker et område kan understøtte over tid med tilgjengelige ressurser.

**Malthus' teori (1798):**
Thomas Malthus hevdet at befolkningen vokser raskere enn matproduksjonen. Teorien har vist seg å være for pessimistisk - teknologisk utvikling har økt matproduksjonen betydelig.

**Demografiske data:**
- Folketellinger (census)
- Fødsels- og dødsregistre
- Migrasjonstatistikk
- Spørreundersøkelser`,
    },
    {
      id: 'geografi-1-16-def-2',
      type: 'definition',
      title: 'Den demografiske overgangen',
      content: `**Den demografiske overgangsmodellen:**
Beskriver hvordan befolkningsutviklingen endres når samfunn moderniseres.

**Fase 1: Før-industriell (høy stabilitet)**
- Høy fødselsrate (35-50 per 1000)
- Høy dødsrate (35-50 per 1000)
- Lav eller ingen befolkningsvekst
- Kort forventet levealder
- Eksempel: De fleste samfunn før 1800

**Fase 2: Tidlig overgang (befolkningseksplosjon)**
- Høy fødselsrate (vedvarer)
- Synkende dødsrate (bedre helse, hygiene, mat)
- Rask befolkningsvekst
- Eksempel: Europa på 1800-tallet, mange utviklingsland i dag

**Fase 3: Sen overgang (avtagende vekst)**
- Synkende fødselsrate (urbanisering, utdanning, prevensjon)
- Lav dødsrate
- Avtakende befolkningsvekst
- Eksempel: Mye av Latin-Amerika, Asia

**Fase 4: Post-industriell (lav stabilitet)**
- Lav fødselsrate (under 15 per 1000)
- Lav dødsrate
- Lav eller negativ vekst
- Aldrende befolkning
- Eksempel: Japan, mange europeiske land

**Fase 5 (mulig): Befolkningsnedgang**
- Fødselsrate under reproduksjonsnivå (2,1)
- Synkende befolkning uten innvandring
- Eksempel: Japan, Sør-Korea, Italia`,
    },
    {
      id: 'geografi-1-16-def-3',
      type: 'definition',
      title: 'Aldersstruktur og befolkningspyramider',
      content: `**Befolkningspyramide:**
Grafisk fremstilling av befolkningens fordeling etter alder og kjønn. Menn til venstre, kvinner til høyre, alder fra bunn til topp.

**Tre hovedtyper:**

**Ekspanderende pyramide (ung befolkning):**
- Bred bunn, smal topp
- Høy andel barn og unge
- Høy fødselsrate
- Typisk for fase 2-land
- Eksempel: Nigeria, Afghanistan

**Stasjonær pyramide (stabil befolkning):**
- Relativt rett opp-ned
- Jevn fordeling av aldersgrupper
- Fødsels- og dødsrate i balanse
- Typisk for fase 3-4-land
- Eksempel: USA, Frankrike

**Kontraherende pyramide (aldrende befolkning):**
- Smal bunn, bred midtdel
- Lav andel barn, høy andel eldre
- Lav fødselsrate
- Typisk for fase 4-5-land
- Eksempel: Japan, Tyskland, Italia

**Forsørgelsesbyrde:**
Forholdet mellom yrkesaktiv befolkning (15-64 år) og forsørgede (barn og eldre). En aldrende befolkning gir høyere forsørgelsesbyrde.

**Demografisk dividende:**
Periode der andelen yrkesaktive er høy i forhold til forsørgede, gir muligheter for økonomisk vekst.`,
    },
    {
      id: 'geografi-1-16-def-4',
      type: 'definition',
      title: 'Norges befolkningsutvikling',
      content: `**Historisk utvikling:**
- 1800: ca. 900 000 innbyggere
- 1900: ca. 2,2 millioner
- 1950: ca. 3,3 millioner
- 2000: ca. 4,5 millioner
- 2024: ca. 5,5 millioner

**Norges demografiske overgang:**
- Fase 2: 1800-tallet (befolkningsvekst, utvandring til Amerika)
- Fase 3: Første halvdel av 1900-tallet
- Fase 4: Fra 1970-tallet

**Dagens situasjon:**
- Fødselsrate: ca. 1,4 barn per kvinne (under reproduksjonsnivå)
- Forventet levealder: ca. 84 år (kvinner), 81 år (menn)
- Befolkningsvekst hovedsakelig fra innvandring
- Aldrende befolkning - økt andel over 67 år

**Regionale forskjeller:**
- Sentralisering mot storbyregioner
- Fraflytting fra distriktene
- Høyest vekst rundt Oslo, Bergen, Stavanger, Trondheim

**Fremtidsperspektiver:**
SSBs fremskrivninger viser ulike scenarier avhengig av fødselsrate og innvandring. Hovedalternativet viser fortsatt vekst til 6-7 millioner i 2100, men stor usikkerhet.`,
    },
    {
      id: 'geografi-1-16-example-1',
      type: 'example',
      title: 'Eksempel: Japans demografiske utfordringer',
      problem: `Japan har verdens eldste befolkning og synkende folketall. Analyser situasjonen og diskuter ulike perspektiver på løsninger.`,
      solution: `**Japans demografi:**

**Nøkkeltall:**
- Befolkning: ca. 125 millioner (synkende)
- Fødselsrate: ca. 1,2 barn per kvinne
- Andel over 65 år: ca. 30%
- Forventet levealder: ca. 84 år

**Årsaker til lav fødselsrate:**
- Høye levekostnader i byene
- Lange arbeidsdager ("karoshi"-kultur)
- Vanskelig å kombinere jobb og barn
- Endrede familieverdier
- Færre gifter seg

**Konsekvenser:**
- Synkende arbeidsstyrke
- Høyere pensjonsutgifter
- Mangel på arbeidskraft i helse og omsorg
- Fraflyttede distrikter
- Økonomisk stagnasjon

**Ulike løsningsforslag:**

*Øke fødselsraten:*
- Bedre barnehager og foreldrepermisjon
- Økonomisk støtte til familier
- Kulturendring i arbeidslivet
- Har hatt begrenset effekt så langt

*Økt innvandring:*
- Kan fylle arbeidskraftbehov
- Japan har tradisjonelt vært restriktive
- Gradvis åpning de siste årene
- Debatt om integreringsutfordringer

*Teknologiske løsninger:*
- Roboter i omsorg og industri
- Automatisering
- Kan kompensere for mindre arbeidsstyrke

*Tilpasning:*
- Akseptere mindre befolkning
- Omorganisere samfunnet
- Heve pensjonsalder
- Mer effektiv ressursbruk

**Refleksjon:**
Japan illustrerer utfordringene mange rike land vil møte. Det finnes ulike syn på hvilke tiltak som er best - noen vektlegger familiepolitikk, andre ser innvandring som løsning, mens andre igjen fokuserer på tilpasning til en mindre befolkning.`,
    },
    {
      id: 'geografi-1-16-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-16-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar begrepene fødselsrate, dødsrate og naturlig tilvekst. Regn ut naturlig tilvekst for et land med fødselsrate 25 per 1000 og dødsrate 8 per 1000.',
        hints: ['Bruk formlene og gi svaret per 1000 innbyggere'],
        solution: 'Fødselsrate: Antall fødte per 1000 innbyggere per år. Dødsrate: Antall døde per 1000 innbyggere per år. Naturlig tilvekst = fødselsrate - dødsrate. Regning: 25 - 8 = 17 per 1000. Dette betyr at befolkningen vokser med 1,7% per år (uten å regne med migrasjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-16-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-16-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv de fire fasene i den demografiske overgangsmodellen. Gi eksempler på land i hver fase.',
        hints: ['Fokuser på fødsels- og dødsrate i hver fase'],
        solution: 'Fase 1: Høy fødselsrate, høy dødsrate, lite vekst (få land i dag). Fase 2: Høy fødselsrate, synkende dødsrate, rask vekst (Nigeria, Mali). Fase 3: Synkende fødselsrate, lav dødsrate, avtakende vekst (Brasil, Indonesia). Fase 4: Lav fødselsrate, lav dødsrate, lav/negativ vekst (Norge, Japan, Italia).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-16-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-16-ex-3',
        number: '3',
        type: 'classic',
        task: 'Tegn tre ulike befolkningspyramider og forklar hva de viser om befolkningens aldersstruktur.',
        hints: ['Tegn ekspanderende, stasjonær og kontraherende pyramide'],
        solution: 'Ekspanderende: Bred bunn, smal topp - mange barn, få eldre, høy vekst (typisk utviklingsland). Stasjonær: Jevn form - balansert aldersfordeling, stabil befolkning (mellominntektsland). Kontraherende: Smal bunn, bred midtdel - få barn, mange eldre, aldrende befolkning (rike land som Japan).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-16-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-16-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv Norges befolkningsutvikling fra 1900 til i dag. Hvilke faktorer har påvirket utviklingen?',
        hints: ['Tenk på industrialisering, velstand, helse, innvandring'],
        solution: 'Norge gikk fra ca. 2,2 mill i 1900 til 5,5 mill i dag. Faktorer: 1) Forbedret helse og hygiene reduserte dødeligheten, 2) Industrialisering og urbanisering, 3) Økt velstand førte til lavere fødselsrate, 4) Innvandring fra 1970-tallet har bidratt til vekst, 5) Sentralisering mot byene. Norge er nå i fase 4 med aldrende befolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-16-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-16-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft utfordringer og muligheter knyttet til en aldrende befolkning. Hvilke ulike syn finnes på hvordan samfunnet bør møte disse utfordringene?',
        hints: ['Tenk på pensjon, helse, arbeidskraft, og ulike politiske perspektiver'],
        solution: 'Utfordringer: Høyere pensjonsutgifter, økt behov for helsetjenester, mindre arbeidsstyrke, finansiering av velferdsstaten. Muligheter: Eldre er friskere og kan jobbe lenger, erfaring og kompetanse, teknologi kan effektivisere. Ulike syn: Noen mener økt innvandring er løsningen, andre vektlegger høyere pensjonsalder, noen fokuserer på økt fødselsrate gjennom familiepolitikk, andre på automatisering. Det finnes ingen enkel løsning, og ulike politiske retninger vektlegger ulike tiltak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 17: Migrasjon
// ============================================================================

export const CHAPTER_GEOGRAFI_17: TextbookChapter = {
  id: 'geografi-1-17',
  courseId: 'geografi',
  chapterNumber: '17',
  title: 'Migrasjon',
  description: 'Laer om ulike typer migrasjon, push- og pull-faktorer, og migrasjonens betydning.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte årsaker til og konsekvenser av migrasjon',
  ],
  content: [
    {
      id: 'geografi-1-17-intro',
      type: 'text',
      content: `## Migrasjon - mennesker på flyttefot

Migrasjon er forflytning av mennesker fra ett sted til et annet. Gjennom historien har mennesker alltid flyttet på seg - for å finne bedre muligheter, unnslippe fare, eller av andre grunner.

**Migrasjonens omfang:**
- Ca. 280 millioner internasjonale migranter i verden (3,6% av befolkningen)
- Mange flere flytter innenfor eget land
- Migrasjonen har økt i omfang de siste tiårene
- De fleste migranter flytter til naboland, ikke til rike vestlige land

**Grunnbegreper:**
- Emigrasjon: Utflytting fra et land
- Immigrasjon: Innflytting til et land
- Intern migrasjon: Flytting innenfor et lands grenser
- Internasjonal migrasjon: Flytting mellom land`,
    },
    {
      id: 'geografi-1-17-def-1',
      type: 'definition',
      title: 'Typer migrasjon',
      content: `**Frivillig migrasjon:**
Mennesker velger å flytte for å forbedre sin livssituasjon.

*Arbeidsmigrasjon:*
Flytting for å finne arbeid eller bedre jobb. Kan være permanent eller midlertidig (sesongarbeid, gjestearbeidere).

*Utdanningsmigrasjon:*
Flytting for å studere. Mange studenter fra utviklingsland studerer i vesten.

*Familiemigrasjon:*
Flytting for å gjenforenes med familie eller gifte seg.

**Tvungen migrasjon:**
Mennesker tvinges til å flytte på grunn av forhold utenfor deres kontroll.

*Flyktninger:*
Personer som har flyktet fra hjemlandet på grunn av krig, forfølgelse eller vold. FNs flyktningkonvensjon gir beskyttelse.

*Internt fordrevne:*
Mennesker som har flyktet innenfor eget lands grenser. Flere enn flyktninger på verdensbasis.

*Klimamigranter:*
Mennesker som flytter på grunn av klimaendringer, naturkatastrofer eller miljøforringelse.

**Blandede strømmer:**
I praksis er skillene ofte uklare. Mange migranter har både økonomiske og sikkerhetsmessige grunner til å flytte.`,
    },
    {
      id: 'geografi-1-17-def-2',
      type: 'definition',
      title: 'Push- og pull-faktorer',
      content: `**Push-faktorer (utstøtende):**
Forhold som får mennesker til å forlate et sted:

*Økonomiske:*
- Arbeidsløshet og fattigdom
- Mangel på økonomiske muligheter
- Lav lønn

*Politiske og sikkerhetsmessige:*
- Krig og konflikter
- Forfølgelse og diskriminering
- Politisk ustabilitet
- Manglende rettigheter

*Miljømessige:*
- Naturkatastrofer (flom, tørke, jordskjelv)
- Klimaendringer
- Miljøforringelse

*Sosiale:*
- Mangel på utdanning og helsetjenester
- Familieproblemer
- Sosial uro

**Pull-faktorer (tiltrekkende):**
Forhold som trekker mennesker til et nytt sted:

*Økonomiske:*
- Jobbmuligheter
- Høyere lønn
- Bedre levestandard

*Politiske:*
- Stabilitet og sikkerhet
- Demokrati og rettssikkerhet
- Frihet

*Sosiale:*
- Bedre utdanning og helsetjenester
- Familie og nettverk som allerede bor der
- Livsstil og kultur

**Migrasjonsstrømmer:**
Migrasjonen går ofte fra områder med sterke push-faktorer til områder med sterke pull-faktorer. Geografisk nærhet, språk og historiske bånd påvirker også hvor folk flytter.`,
    },
    {
      id: 'geografi-1-17-def-3',
      type: 'definition',
      title: 'Innvandring til Norge - ulike perspektiver',
      content: `**Norges innvandringshistorie:**
- Før 1970: Liten innvandring, hovedsakelig fra nordiske land
- 1970-tallet: Arbeidsinnvandring fra Pakistan, Tyrkia m.fl.
- 1980-90-tallet: Flyktninger fra Vietnam, Chile, Balkan, Somalia
- 2000-tallet: Økt arbeidsinnvandring fra EU (særlig Polen)
- 2015: Flyktningstrøm fra Syria og Afghanistan

**Dagens situasjon:**
- Ca. 1 million innvandrere og norskfødte med innvandrerforeldre (ca. 19% av befolkningen)
- Arbeidsinnvandrere fra EU utgjør største gruppe
- Flyktninger fra Syria, Eritrea, Somalia
- Bosatt hovedsakelig i og rundt storbyene

**Ulike perspektiver på innvandring:**

*Økonomiske perspektiver:*
- Innvandrere bidrar til arbeidsstyrken og verdiskaping
- Noen studier viser positiv fiskal effekt av arbeidsinnvandring
- Andre studier peker på kostnader knyttet til integrering og velferdsytelser
- Effekten avhenger av innvandringsgruppe, konjunkturer og politikk

*Demografiske perspektiver:*
- Innvandring motvirker befolkningsnedgang
- Bidrar til yngre befolkning
- Debatt om langsiktige demografiske effekter

*Kulturelle og sosiale perspektiver:*
- Noen vektlegger kulturelt mangfold som berikende
- Andre er bekymret for integreringsutfordringer
- Debatt om nasjonal identitet og samhold

*Humanitære perspektiver:*
- Norge har forpliktelser til å hjelpe flyktninger
- Debatt om hvor mange som kan tas imot
- Ulike syn på bistand "der de er" vs. mottak i Norge

**Viktig:** Dette er et politisk kontroversielt tema der det finnes legitime perspektiver på ulike sider. Geografifaget skal presentere fakta og ulike syn, ikke ta politisk stilling.`,
    },
    {
      id: 'geografi-1-17-def-4',
      type: 'definition',
      title: 'Urbanisering og intern flytting',
      content: `**Urbanisering:**
Økningen i andelen av befolkningen som bor i byer.

**Global urbanisering:**
- 1950: ca. 30% bodde i byer
- 2024: ca. 57% bor i byer
- 2050: forventet ca. 68% i byer
- Raskest urbanisering i Afrika og Asia

**Årsaker til urbanisering:**
- Jobbmuligheter i industri og tjenester
- Bedre utdanning og helsetilbud
- Høyere levestandard
- Sosiale og kulturelle muligheter
- Mekanisering av landbruket (færre trengs på landet)

**Megabyer:**
Byer med over 10 millioner innbyggere. Tokyo (37 mill), Delhi (32 mill), Shanghai (29 mill). Mange megabyer er i utviklingsland.

**Urbanisering i Norge:**
- Ca. 83% bor i tettsteder
- Sentralisering mot Oslo-regionen og andre storbyregioner
- Distriktene opplever fraflytting
- Debatt om distriktspolitikk og sentralisering

**Intern flytting i Norge:**
- Unge flytter for utdanning og jobb
- Barnefamilier flytter til forsteder
- Mange flytter tilbake til hjemstedet senere i livet
- Nord-Norge og innlandet mister befolkning til Sør-Norge og kysten`,
    },
    {
      id: 'geografi-1-17-example-1',
      type: 'example',
      title: 'Eksempel: Arbeidsinnvandring fra Polen til Norge',
      problem: `Analyser arbeidsinnvandringen fra Polen til Norge etter EU-utvidelsen i 2004. Hvilke push- og pull-faktorer har vært viktige?`,
      solution: `**Bakgrunn:**
Polen ble EU-medlem i 2004 og fikk tilgang til EØS-arbeidsmarkedet. Norge opplevde stor etterspørsel etter arbeidskraft, særlig i bygg og anlegg.

**Push-faktorer i Polen:**
- Høy arbeidsledighet (20% i 2004)
- Relativt lave lønninger
- Begrenset økonomisk vekst
- Unge med utdanning uten jobbtilbud

**Pull-faktorer i Norge:**
- Stor etterspørsel etter arbeidskraft
- Høye lønninger (3-5 ganger polsk nivå)
- Gode arbeidsforhold og sikkerhet
- Geografisk nærhet og gode flyforbindelser
- Eksisterende polske nettverk i Norge

**Omfang:**
- Polakker er største innvandrergruppe i Norge (ca. 100 000)
- Mange i bygg, renhold, industri, helse
- Noen pendler, andre har bosatt seg permanent

**Konsekvenser:**

*For Norge:*
- Dekket arbeidskraftbehov i voksende økonomi
- Muliggjorde bygging av boliger og infrastruktur
- Debatt om lønnspress og arbeidsvilkår i enkelte bransjer

*For Polen:*
- Redusert arbeidsledighet
- Pengeoverføringer til familier hjemme
- "Brain drain" - tap av unge, utdannede

*For migrantene:*
- Høyere inntekt
- Nye muligheter
- Utfordringer med språk, integrering, savn av familie

**Utviklingen:**
Etter hvert som polsk økonomi har vokst, har lønnsforskjellene minket, og noen har flyttet hjem. Samtidig har mange etablert seg permanent i Norge.`,
    },
    {
      id: 'geografi-1-17-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-17-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom frivillig og tvungen migrasjon. Gi eksempler på hver type.',
        hints: ['Tenk på ulike årsaker til at folk flytter'],
        solution: 'Frivillig migrasjon: Mennesker velger selv å flytte for å forbedre livssituasjonen. Eksempler: Arbeidsinnvandring, studenter som reiser ut, familieetablering. Tvungen migrasjon: Mennesker tvinges til å flytte. Eksempler: Flyktninger fra krig (Syria), klimamigranter etter naturkatastrofer, internt fordrevne fra konflikter. I praksis er grensene ofte uklare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-17-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-17-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg et land eller en region og analyser push- og pull-faktorer som påvirker migrasjonen derfra.',
        hints: ['Tenk på økonomiske, politiske, sosiale og miljømessige faktorer'],
        solution: 'Eksempel Syria: Push-faktorer: Borgerkrig siden 2011, bombing og ødeleggelse, forfølgelse, mangel på mat og helsetjenester, økonomisk kollaps. Pull-faktorer (til naboland/Europa): Sikkerhet, mulighet for jobb og utdanning, familie som har flyktet tidligere, håp om bedre fremtid. Viktig å se på både de som driver folk bort og det som trekker dem mot bestemte destinasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-17-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-17-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv Norges innvandringshistorie fra 1970 til i dag. Hvilke grupper har kommet i ulike perioder?',
        hints: ['Tenk på arbeidsinnvandring, flyktninger, EU-utvidelsen'],
        solution: '1970-tallet: Arbeidsinnvandring fra Pakistan, Tyrkia, Marokko (innvandringsstopp 1975). 1980-90-tallet: Flyktninger fra Vietnam, Chile, Iran, Balkan (Bosnia, Kosovo), Somalia. 2000-tallet: EU-utvidelsen ga arbeidsinnvandring fra Polen, Litauen. 2015: Flyktningtopp fra Syria, Afghanistan, Eritrea. I dag er polakker største gruppe, etterfulgt av litauere, somaliere, pakistanere, svensker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-17-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-17-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er urbanisering? Forklar årsaker til og konsekvenser av urbanisering globalt.',
        hints: ['Tenk på pull-faktorer til byer og utfordringer med rask byvekst'],
        solution: 'Urbanisering er økning i andelen som bor i byer. Årsaker: Jobbmuligheter i industri/tjenester, bedre utdanning og helse, mekanisering av landbruk, sosiale muligheter. Konsekvenser: Positive - økonomisk vekst, innovasjon, tilgang til tjenester. Negative - slumområder, forurensning, press på infrastruktur, sosiale problemer. I 2050 vil ca. 68% av verdens befolkning bo i byer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-17-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-17-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft ulike perspektiver på innvandring til Norge. Presenter argumenter fra ulike ståsteder på en balansert måte.',
        hints: ['Tenk på økonomiske, demografiske, kulturelle og humanitære perspektiver'],
        solution: 'Økonomisk: Arbeidsinnvandring dekker behov i arbeidsmarkedet, men det er debatt om kostnader ved integrering. Demografisk: Innvandring motvirker aldring, men langsiktig effekt diskuteres. Kulturelt: Noen ser mangfold som berikende, andre bekymret for integrering. Humanitært: Norge har forpliktelser overfor flyktninger, men debatt om kapasitet. Viktig å forstå at dette er komplekst og at folk kan ha ulike syn basert på ulike verdier og vektlegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 18: Byer og urbanisering
// ============================================================================

export const CHAPTER_GEOGRAFI_18: TextbookChapter = {
  id: 'geografi-1-18',
  courseId: 'geografi',
  chapterNumber: '18',
  title: 'Byer og urbanisering',
  description: 'Laer om byenes utvikling, struktur og utfordringer med barekraftig byutvikling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og presentere geografiske forhold ved byer og drøfte utfordringer med urbanisering',
  ],
  content: [
    {
      id: 'geografi-1-18-intro',
      type: 'text',
      content: `## Byer - menneskehetens hjemsted

Byer er konsentrasjoner av mennesker, bygninger, og aktiviteter. De er motorer for økonomisk vekst, kultur og innovasjon, men står også overfor store utfordringer.

**Byenes betydning:**
- Over halvparten av verdens befolkning bor i byer
- Byer produserer ca. 80% av verdens BNP
- Byer står for ca. 70% av globale CO2-utslipp
- Byer er sentre for utdanning, kultur og innovasjon

**Hva er en by?**
Definisjonen varierer mellom land. Vanlige kriterier:
- Befolkningsstørrelse (i Norge: over 200 innbyggere i tettsted)
- Befolkningstetthet
- Administrative funksjoner
- Økonomisk aktivitet (handel, industri, tjenester)`,
    },
    {
      id: 'geografi-1-18-def-1',
      type: 'definition',
      title: 'Urbaniseringens historie',
      content: `**Tidlige byer (5000 f.Kr. - 1800):**
De første byene oppsto i Mesopotamia, Egypt, Indusdalen og Kina. Muliggjort av jordbruksoverskudd og behov for handel, forsvar og religion.
- Ur, Babylon, Athen, Roma
- Middelalderens handelsbyer (Venezia, Amsterdam)
- Maks størrelse ca. 1 million (Roma, Beijing)

**Den industrielle revolusjon (1800-1950):**
Urbanisering skjøt fart med industrialiseringen:
- Fabrikker trengte arbeidskraft
- Folk flyttet fra landsbygda til byene
- Byer vokste raskt og kaotisk
- Problemer med boforhold, hygiene, forurensning

**Moderne urbanisering (1950 - i dag):**
- Rask urbanisering i utviklingsland
- Suburbanisering (forsteder) i vesten
- Megabyer med over 10 millioner innbyggere
- Deindustrialisering og overgang til tjenester

**Urbaniseringsgrad i verden:**
- Nord-Amerika: ca. 83%
- Europa: ca. 75%
- Latin-Amerika: ca. 82%
- Asia: ca. 52%
- Afrika: ca. 44%`,
    },
    {
      id: 'geografi-1-18-def-2',
      type: 'definition',
      title: 'Bystruktur og byvekst',
      content: `**Modeller for bystruktur:**

**Konsentrisk sonemodell (Burgess 1925):**
Byen vokser i konsentriske sirkler ut fra sentrum:
1. CBD (Central Business District) - forretninger, kontorer
2. Overgangssone - industri, fattige boliger
3. Arbeiderboliger
4. Middelklasseboliger
5. Forsteder - pendlere

**Sektormodell (Hoyt 1939):**
Byen vokser i sektorer langs transportårer. Høystatusområder følger én retning, industri en annen.

**Flerkjernemodell (Harris & Ullman 1945):**
Moderne byer har flere sentre med ulike funksjoner: CBD, industriområder, kjøpesentre, universiteter.

**Byvekstmønstre:**

*Fortetting:*
Bygge tettere innenfor eksisterende bygrenser. Høyere bygninger, ombygging av industriområder.

*Suburban sprawl:*
Lavtetthets utbygging i forsteder. Bilbasert, arealkrevende.

*Edge cities:*
Nye bysentre i utkanten av storbyene. Kjøpesentre, kontorer, boliger.

**Byregioner:**
Sammenhengende urbane områder som strekker seg over flere kommuner. Oslo-regionen, Bergensområdet.`,
    },
    {
      id: 'geografi-1-18-def-3',
      type: 'definition',
      title: 'Baerekraftige byer - ulike løsninger',
      content: `**Utfordringer for byer:**
- Klimautslipp fra transport og bygninger
- Luftforurensning
- Arealpress og tap av natur
- Sosial ulikhet og segregering
- Infrastruktur og tjenester
- Klimatilpasning (flom, hetebølger)

**Ulike tilnærminger til bærekraftig byutvikling:**

*Fortetting og kompakt by:*
- Bygge tettere reduserer transportbehov
- Effektiv utnyttelse av infrastruktur
- Kan gi press på grøntområder
- Debatt om livskvalitet i tette byer

*Grønne byer:*
- Parker og grøntområder
- Grønne tak og vegger
- Bynært landbruk
- Naturbaserte løsninger for overvann

*Smart mobilitet:*
- Kollektivtransport
- Sykling og gange
- Elbiler og bildeling
- Redusert bilbruk

*Sirkulær økonomi:*
- Gjenbruk og resirkulering
- Lokale materialer
- Redusert forbruk

**Ulike perspektiver:**
Det finnes debatt om hvordan bærekraftige byer best oppnås:
- Noen vektlegger regulering og offentlig styring
- Andre fremhever markedsløsninger og teknologi
- Noen prioriterer klimautslipp, andre livskvalitet
- Debatt om fortetting vs. lavere tetthet
- Avveiing mellom ulike hensyn varierer

FNs bærekraftsmål 11 handler om bærekraftige byer og lokalsamfunn.`,
    },
    {
      id: 'geografi-1-18-def-4',
      type: 'definition',
      title: 'Norske byer',
      content: `**Norges største byer (tettstedsbefolkning):**
1. Oslo: ca. 1 million
2. Bergen: ca. 285 000
3. Stavanger/Sandnes: ca. 230 000
4. Trondheim: ca. 200 000
5. Drammen: ca. 120 000

**Norske byers utvikling:**
- Historisk: Handelsbyer ved kysten (Bergen, Trondheim)
- 1800-tallet: Industrialisering (tekstil, treforedling)
- 1900-tallet: Vekst i Oslo-området, oljebyene
- I dag: Sentralisering mot storbyregioner

**Oslo:**
- Hovedstad og økonomisk sentrum
- Raskest voksende storby i Europa (en periode)
- Utfordringer: Boligpriser, transport, sosial ulikhet
- Fortetting langs kollektivknutepunkter

**Bergen:**
- Historisk handelssentrum (Hansatiden)
- Norges nest største by
- Utfordringer: Topografi, klima, transport

**Stavanger:**
- Oljebyen fra 1970-tallet
- Stor innvandrerbefolkning
- Utfordringer: Oljeomstilling

**Trondheim:**
- Universitetsby (NTNU)
- Teknologihovedstad
- Historisk: Nidaros, pilegrimsmål

**Norsk bypolitikk:**
- Fortetting rundt kollektivknutepunkter
- Nullvekstmål for biltrafikk i byene
- Bymiljøavtaler mellom stat og kommuner
- Debatt om bompenger og trafikkregulering`,
    },
    {
      id: 'geografi-1-18-example-1',
      type: 'example',
      title: 'Eksempel: Singapore - en planlagt baerekraftig by?',
      problem: `Singapore regnes ofte som en av verdens mest vellykkede byplanlagte byer. Analyser hva Singapore har gjort og diskuter om det kan overføres til andre byer.`,
      solution: `**Singapore - fakta:**
- Bystat med ca. 5,5 millioner innbyggere
- Areal: 730 km² (omtrent som Oslo kommune)
- BNP per innbygger blant verdens høyeste
- Fra fattig utviklingsland i 1965 til rik by i dag

**Singapores bypolitikk:**

*Boligpolitikk:*
- 80% bor i offentlig bygde boliger (HDB)
- Integrerte boligområder (blandede etnisiteter)
- Høy tetthet, men grønne områder

*Transport:*
- Effektiv kollektivtransport (MRT)
- Høye avgifter på bilhold og -bruk
- Elektronisk veiprising
- Få biler per innbygger

*Grønne områder:*
- "City in a garden" - mye vegetasjon
- Grønne tak og vertikale hager
- Naturreservater bevart
- Regnvannshåndtering

*Vannforsyning:*
- Avansert vannrensing og gjenbruk
- Oppsamling av regnvann
- Avsalting av sjøvann

**Kritikk og begrensninger:**
- Autoritært styre muliggjør sterk planlegging
- Begrenset ytringsfrihet og demokrati
- Høy ulikhet tross velferd
- Ikke direkte overførbart til demokratiske land

**Hva kan læres?**
- Langsiktig planlegging er viktig
- Offentlig boligbygging kan fungere
- Sterk kollektivsatsing reduserer bilbruk
- Grøntområder kan bevares i tette byer
- Men: Politisk kontekst og kultur varierer`,
    },
    {
      id: 'geografi-1-18-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-18-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv hovedtrekkene i urbaniseringens historie fra de første byene til i dag.',
        hints: ['Tenk på jordbruk, industrialisering, moderne urbanisering'],
        solution: 'Tidlige byer (fra 5000 f.Kr.): Oppsto med jordbruksoverskudd, handel, forsvar (Ur, Roma). Industrialiseringen (1800-tallet): Fabrikker trakk folk til byene, rask og kaotisk vekst, dårlige boforhold. Moderne tid: Rask urbanisering i utviklingsland, suburbanisering i vesten, megabyer. I dag bor over 57% av verdens befolkning i byer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-18-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-18-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar den konsentriske sonemodellen (Burgess). Hvordan passer den på norske byer?',
        hints: ['Tegn modellen og tenk på Oslo eller Bergen'],
        solution: 'Burgess-modellen: Byen vokser i sirkler fra sentrum: 1) CBD (sentrum), 2) Overgangssone, 3) Arbeiderboliger, 4) Middelklasse, 5) Forsteder. Norske byer: Passer delvis - Oslo har CBD i sentrum, indre by med blandet bruk, villaområder lenger ut. Men topografi (fjell, fjord), historiske forhold og planlegging gjør at modellen ikke passer perfekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-18-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-18-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er utfordringene med bærekraftig byutvikling? Presenter ulike løsningsforslag og perspektiver.',
        hints: ['Tenk på klima, transport, bolig, grøntområder'],
        solution: 'Utfordringer: Klimautslipp, luftforurensning, arealpress, sosial ulikhet, infrastrukturpress. Løsninger: Fortetting (effektivt, men press på grønt), kollektivtransport (reduserer utslipp), grønne områder (livskvalitet), sirkulær økonomi. Ulike perspektiver: Noen prioriterer klima, andre livskvalitet. Noen vil ha sterk regulering, andre markedsløsninger. Avveiinger er politiske valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-18-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-18-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign to norske byer (velg selv). Hva er likheter og forskjeller i historie, funksjon og utfordringer?',
        hints: ['Tenk på geografi, historie, næringsliv, størrelse'],
        solution: 'Eksempel Oslo vs. Bergen: Likheter: Begge er kystbyer, store, har utfordringer med transport. Forskjeller: Oslo er hovedstad og mye større, flatt terreng, mer sentralisert. Bergen har brattere topografi, handelshistorie fra Hansatiden, mer nedbør. Oslo har mer industri/tjenester, Bergen mer maritim næring. Begge satser på kollektivtransport og fortetting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-18-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-18-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft fordeler og ulemper med fortetting som byutviklingsstrategi. Presenter ulike synspunkter.',
        hints: ['Tenk på transport, miljø, livskvalitet, økonomi'],
        solution: 'Fordeler: Reduserer transportbehov og bilbruk, effektiv infrastruktur, bevarer natur utenfor byen, levende bymiljø. Ulemper: Press på grøntområder, støy og forurensning, høye boligpriser, kan gi trangboddhet. Ulike syn: Miljøvernere støtter ofte fortetting, andre vektlegger hager og plass. Noen vil ha høyhus, andre lavere bebyggelse. Kompromiss: Fortetting rundt kollektivknutepunkter med grøntområder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 19: Naturressurser
// ============================================================================

export const CHAPTER_GEOGRAFI_19: TextbookChapter = {
  id: 'geografi-1-19',
  courseId: 'geografi',
  chapterNumber: '19',
  title: 'Naturressurser',
  description: 'Laer om fornybare og ikke-fornybare ressurser, energikilder og ressursforvaltning.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte bruk av naturressurser og konsekvenser for miljø og samfunn',
  ],
  content: [
    {
      id: 'geografi-1-19-intro',
      type: 'text',
      content: `## Naturressurser - grunnlaget for samfunnet

Naturressurser er materialer og energi fra naturen som mennesker bruker for å dekke sine behov. Forvaltning av ressurser er et sentralt tema i geografi og samfunnsdebatten.

**Hva er naturressurser?**
- Alt i naturen som har verdi for mennesker
- Inkluderer energi, mineraler, vann, jord, skog, fisk
- Verdi avhenger av teknologi, økonomi og kultur

**Ressursklassifisering:**
- Fornybare: Kan fornyes naturlig (sol, vind, skog, fisk)
- Ikke-fornybare: Finnes i begrenset mengde (olje, gass, mineraler)
- Betinget fornybare: Fornybare hvis de forvaltes bærekraftig (grunnvann, jord)

**Ressursenes betydning:**
- Grunnlag for økonomisk aktivitet
- Energi driver samfunnet
- Ujevn fordeling skaper geopolitikk
- Overforbruk truer miljøet`,
    },
    {
      id: 'geografi-1-19-def-1',
      type: 'definition',
      title: 'Fornybare og ikke-fornybare ressurser',
      content: `**Fornybare ressurser:**
Ressurser som kan fornyes naturlig innenfor menneskelig tidshorisont.

*Strømmende ressurser:*
Fornyes kontinuerlig uavhengig av bruk:
- Solenergi
- Vindenergi
- Vannkraft (så lenge det regner)
- Tidevann og bølger

*Biologiske ressurser:*
Fornyes gjennom reproduksjon, men kan overutnyttes:
- Fisk og sjømat
- Skog og tømmer
- Jordbruksprodukter
- Vilt

**Ikke-fornybare ressurser:**
Ressurser som ikke fornyes i menneskelig tidsskala (millioner av år å danne).

*Fossile brennstoffer:*
- Olje
- Naturgass
- Kull

*Mineralressurser:*
- Metaller (jern, kobber, gull, aluminium)
- Industrimineraler (kvarts, kalkstein, grus)
- Edelstener

**Betinget fornybare:**
Kan være fornybare ved god forvaltning, men kan uttømmes:
- Grunnvann (kan tømmes raskere enn det fylles)
- Jordsmonn (tar tusenvis av år å danne)
- Fiskebestander (kan kollapses ved overfiske)`,
    },
    {
      id: 'geografi-1-19-def-2',
      type: 'definition',
      title: 'Energiressurser',
      content: `**Fossile brennstoffer:**

*Olje:*
- Verdens viktigste energikilde
- Transport, petrokjemi, oppvarming
- Reserver: 50+ år med dagens forbruk
- Hovedprodusenter: Saudi-Arabia, USA, Russland

*Naturgass:*
- Renere enn kull og olje
- Oppvarming, kraftproduksjon, industri
- Voksende rolle som "overgangsenergi"
- Hovedprodusenter: USA, Russland, Iran

*Kull:*
- Eldste fossile brensel
- Fortsatt viktig for kraftproduksjon globalt
- Mest forurensende fossilt brensel
- Store reserver, men mange land faser ut

**Fornybar energi:**

*Vannkraft:*
- Ca. 16% av verdens strøm
- Regulerbar og stabil
- Naturinngrep ved utbygging
- Viktigste: Kina, Brasil, Canada, Norge

*Vindkraft:*
- Raskest voksende energikilde
- Både på land og til havs
- Variabel produksjon
- Debatt om naturinngrep

*Solenergi:*
- Ubegrenset potensial
- Solceller og solfangere
- Variabel (sol/skyer, dag/natt)
- Raskt fallende priser

*Annet:*
- Bioenergi (ved, biodrivstoff)
- Geotermisk energi
- Bølge- og tidevannsenergi
- Kjernekraft (ikke fornybar, men lavutslipp)`,
    },
    {
      id: 'geografi-1-19-def-3',
      type: 'definition',
      title: 'Norges energiressurser - olje, gass og fornybart',
      content: `**Norsk olje og gass:**

*Historikk:*
- Olje funnet på Ekofisk i 1969
- Produksjonsstart 1971
- Norge blant verdens største eksportører
- Oljefondet (verdens største statlige fond)

*Produksjon i dag:*
- Olje: ca. 2 millioner fat/dag
- Gass: ca. 120 milliarder Sm³/år
- Viktig for europeisk energiforsyning

*Økonomisk betydning:*
- Ca. 14% av BNP
- Ca. 40% av eksportinntektene
- Finansierer velferdsstaten
- Titusenvis av arbeidsplasser

**Ulike perspektiver på norsk olje og gass:**

*Fordeler som fremheves:*
- Økonomisk grunnlag for velferdsstaten
- Arbeidsplasser og kompetanse
- Energisikkerhet for Europa
- Norsk gass erstatter kull i Europa

*Utfordringer som fremheves:*
- Bidrar til globale klimautslipp
- Risiko for ulykker og utslipp
- Oljeavhengighet i økonomien
- Spørsmål om fremtidig etterspørsel

*Debatt om fremtiden:*
Spørsmålet om nye leteområder og utfasing av petroleumsvirksomheten er politisk kontroversielt. Ulike partier og interesser vektlegger klima, arbeidsplasser og økonomi forskjellig.

**Fornybar energi i Norge:**
- Vannkraft: ca. 90% av strømproduksjonen
- Vindkraft: voksende, men omstridt på land
- Havvind: store planer offshore
- Solenergi: begrenset, men voksende`,
    },
    {
      id: 'geografi-1-19-def-4',
      type: 'definition',
      title: 'Mineralressurser',
      content: `**Mineraler og metaller:**

*Jernmalm:*
- Grunnlag for stålproduksjon
- Store forekomster: Australia, Brasil, Kina
- Brukes i konstruksjon, maskiner, transport

*Kobber:*
- Viktig for elektrisk ledning
- Økende etterspørsel pga. elektrifisering
- Chile og Peru er storprodusenter

*Aluminium:*
- Lett metall fra bauxitt
- Brukes i transport, emballasje, bygg
- Energikrevende å produsere

*Kritiske mineraler:*
- Litium, kobolt, grafitt (batterier)
- Sjeldne jordarter (elektronikk, magneter)
- Ofte konsentrert i få land (Kina, Kongo)
- Geopolitisk viktige

**Norske mineralressurser:**
- Historisk: Jernmalm (Kirkenes), kobber (Røros)
- I dag: Titan, olivin, kvarts
- Potensial: Mineraler for det grønne skiftet
- Debatt om ny gruvedrift vs. naturvern

**Ressursforvaltning:**
Spørsmålet om hvordan mineralressurser skal utvinnes balanserer:
- Økonomisk verdi og arbeidsplasser
- Miljøhensyn og naturvern
- Lokale interesser
- Nasjonale og globale behov`,
    },
    {
      id: 'geografi-1-19-def-5',
      type: 'definition',
      title: 'Ressursforvaltning - ulike tilnaerminger',
      content: `**Bærekraftig ressursforvaltning:**
Bruke ressurser slik at også fremtidige generasjoner får sine behov dekket.

**Ulike tilnærminger:**

*Bevaringstilnærming:*
- Vektlegger å bevare natur og ressurser
- Begrense uttak og bruk
- Naturvern og vern av områder
- Kritikere mener dette kan hindre utvikling

*Forvaltningstilnærming:*
- Balansere bruk og vern
- Bærekraftig uttak (ikke mer enn fornyes)
- Kvoter, reguleringer, sertifisering
- Kompromiss mellom ulike interesser

*Markedstilnærming:*
- Markedet styrer ressursbruk gjennom priser
- Knapphet gir høyere priser og incentiver til alternativer
- Teknologisk utvikling finner løsninger
- Kritikere mener markedet ikke priser miljøkostnader

*Rettighetsbasert tilnærming:*
- Urfolks og lokalsamfunns rettigheter
- Hvem eier og bestemmer over ressursene?
- Fordeling av gevinst fra ressursutvinning

**Ressursforbannelsen:**
Noen ressursrike land har opplevd at rikdommen har ført til korrupsjon, konflikter og svak utvikling (Nigeria, Venezuela). Andre har klart seg godt (Norge, Botswana). Forskjellen ligger ofte i styresett og institusjoner.

**Internasjonal ressurspolitikk:**
- Handelsavtaler og tilgang til ressurser
- Klimaavtaler (begrense fossil energi)
- Sertifiseringsordninger (FSC for skog, MSC for fisk)
- Geopolitiske konflikter om ressurser`,
    },
    {
      id: 'geografi-1-19-example-1',
      type: 'example',
      title: 'Eksempel: Litium - ressurs for det grønne skiftet',
      problem: `Litium er essensielt for batterier i elbiler og energilagring. Analyser litiumressursene og ulike perspektiver på utvinningen.`,
      solution: `**Litium - det hvite gullet:**

**Bruksområder:**
- Batterier (elbiler, telefoner, laptoper)
- Energilagring for sol- og vindkraft
- Psykiatri (medisin)
- Keramikk og glass

**Hvor finnes litium?**
- Saltsjøer i Sør-Amerika (Chile, Argentina, Bolivia)
- Bergarter i Australia
- Mindre forekomster mange steder (også potensielt i Norge)

**Etterspørsel:**
- Øker raskt med elbilsalget
- Forventet 5-10 dobling innen 2030
- Prisene svinger kraftig

**Ulike perspektiver på litiumutvinning:**

*Økonomiske argumenter:*
- Nødvendig for elektrifisering
- Skaper arbeidsplasser i produsentland
- Kan redusere avhengighet av olje

*Miljøbekymringer:*
- Vannforbruk i tørre områder (Sør-Amerika)
- Kjemikalier i utvinningsprosessen
- Naturinngrep ved gruvedrift
- Spørsmål om resirkulering

*Sosiale spørsmål:*
- Urfolks rettigheter og landområder
- Fordeling av inntekter
- Arbeidsforhold i gruver

*Geopolitiske aspekter:*
- Kina dominerer raffinering
- Avhengighet av få produsentland
- Vestlige land ønsker egen produksjon

**Hva med Norge?**
Det er påvist litiumforekomster i Norge. Debatt om gruvedrift vekter økonomiske muligheter mot naturvern og lokale interesser.`,
    },
    {
      id: 'geografi-1-19-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-19-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom fornybare, ikke-fornybare og betinget fornybare ressurser. Gi eksempler på hver.',
        hints: ['Tenk på hvor lang tid det tar å fornye ressursen'],
        solution: 'Fornybare: Fornyes naturlig i menneskelig tidsskala - sol, vind, vannkraft (strømmende), fisk, skog (biologiske). Ikke-fornybare: Tar millioner av år å danne - olje, gass, kull, mineraler. Betinget fornybare: Kan fornyes ved god forvaltning, men kan uttømmes - grunnvann (kan tømmes), jord (kan eroderes), fiskebestander (kan kollapse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-19-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-19-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv Norges viktigste energiressurser. Hvilken rolle spiller de i norsk økonomi og energiforsyning?',
        hints: ['Tenk på vannkraft, olje og gass'],
        solution: 'Vannkraft: Ca. 90% av strømproduksjonen, fornybar, viktig for industri og eksport. Olje og gass: Ca. 14% av BNP, 40% av eksport, grunnlag for Oljefondet, viktig for europeisk energisikkerhet. Vindkraft: Voksende, særlig planer for havvind. Norge har unike ressurser som kombinerer fossil eksport med fornybar innenlands strøm.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-19-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-19-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er kritiske mineraler? Hvorfor er de viktige for det grønne skiftet?',
        hints: ['Tenk på batterier, elektronikk, fornybar energi'],
        solution: 'Kritiske mineraler er mineraler som er viktige for teknologi og vanskelige å erstatte eller skaffe. Eksempler: Litium og kobolt (batterier), sjeldne jordarter (magneter, elektronikk), kobber (ledninger). Viktige for grønt skifte fordi elbiler, vindturbiner og solceller krever store mengder av disse. Utfordring: Ofte konsentrert i få land, geopolitisk sårbarhet, miljø- og menneskerettighetsutfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-19-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-19-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er ressursforbannelsen? Gi eksempler på land som har opplevd den og land som har unngått den.',
        hints: ['Tenk på hvorfor ressursrikdom noen ganger fører til problemer'],
        solution: 'Ressursforbannelsen: Paradokset at ressursrike land ofte har svakere utvikling enn ressursfattige. Årsaker: Korrupsjon, svake institusjoner, "Dutch disease" (valuta stiger, annen eksport svekkes), konflikter om ressurser. Rammet: Nigeria, Venezuela, mange afrikanske land. Unngått: Norge (Oljefond, sterke institusjoner), Botswana (diamanter, god styring). Forskjellen ligger i styresett, åpenhet og langsiktig forvaltning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-19-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-19-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft Norges rolle som olje- og gasseksportør i lys av klimautfordringene. Presenter ulike perspektiver på en balansert måte.',
        hints: ['Tenk på økonomi, klima, arbeidsplasser, europeisk energisikkerhet'],
        solution: 'For fortsatt produksjon: Finansierer velferd, arbeidsplasser/kompetanse, norsk gass erstatter kull i Europa, etterspørselen finnes uansett, gradvis omstilling bedre enn brå stopp. Mot fortsatt produksjon: Bidrar til klimautslipp, strider mot klimamål, fossile investeringer kan bli verdiløse, bør satse på fornybart. Mellomposisjoner: Gradvis nedtrapping, ingen nye felt, bruke kompetansen i nye næringer. Dette er et politisk stridsspørsmål der ulike verdier og fakta vektlegges ulikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 20: Havressurser og fiskeri
// ============================================================================

export const CHAPTER_GEOGRAFI_20: TextbookChapter = {
  id: 'geografi-1-20',
  courseId: 'geografi',
  chapterNumber: '20',
  title: 'Havressurser og fiskeri',
  description: 'Laer om havets ressurser, norsk fiskeri og oppdrett, og forvaltning av havomraader.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte bruk av havressurser og konsekvenser for miljø og samfunn',
  ],
  content: [
    {
      id: 'geografi-1-20-intro',
      type: 'text',
      content: `## Havet - jordens blå ressurs

Havet dekker over 70% av jordens overflate og er livsviktig for mennesker og natur. For Norge med sin lange kystlinje er havet spesielt viktig.

**Havets betydning:**
- Mat: Fisk og sjømat er proteinkilden for milliarder av mennesker
- Transport: 90% av verdens handel går sjøveien
- Energi: Olje, gass, vindkraft, bølgeenergi
- Klima: Havet absorberer varme og CO2
- Biodiversitet: Millioner av arter lever i havet

**Norges havområder:**
- Norskehavet, Barentshavet, Nordsjøen
- Økonomisk sone (200 nautiske mil): ca. 2 millioner km²
- Seks ganger større enn landarealet
- Blant verdens mest produktive havområder`,
    },
    {
      id: 'geografi-1-20-def-1',
      type: 'definition',
      title: 'Havets ressurser',
      content: `**Levende ressurser:**

*Viltlevende fisk:*
- Pelagisk fisk (lever fritt i vannmassene): Sild, makrell, lodde
- Bunnfisk: Torsk, sei, hyse, flyndre
- Skalldyr: Reker, krabbe, hummer

*Oppdrettsorganismer:*
- Laks og ørret (dominerer norsk oppdrett)
- Blåskjell, østers
- Tang og tare (voksende næring)

*Marine pattedyr:*
- Sel, hval (begrenset fangst i Norge)

**Ikke-levende ressurser:**

*Olje og gass:*
- Dannet fra marine organismer over millioner av år
- Norge er stor offshore-produsent
- Sokkelen inneholder fortsatt store reserver

*Mineralressurser:*
- Sand og grus (byggematerialer)
- Dyphavsmineraler (mangan, kobolt, sjeldne jordarter)
- Lite utnyttet foreløpig

*Fornybar energi:*
- Havvind (stor utbygging planlagt)
- Bølgekraft (under utvikling)
- Tidevannsenergi

**Økosystemtjenester:**
- Karbonlagring
- Oksygenproduksjon
- Klimaregulering
- Rensing av vann
- Rekreasjon og turisme`,
    },
    {
      id: 'geografi-1-20-def-2',
      type: 'definition',
      title: 'Norsk fiskeri',
      content: `**Historisk betydning:**
Fiske har vært grunnlag for bosetting langs kysten i tusenvis av år. Tørrfisk fra Lofoten ble eksportert til Europa allerede i vikingtiden.

**Viktige fiskeslag i Norge:**

*Torsk (skrei):*
- Norges viktigste fiskeart
- Gyter i Lofoten januar-april
- Eksporteres som tørrfisk, klippfisk, fersk
- Strengt kvoteregulert

*Sild:*
- En av verdens største fiskebestander
- Norsk vårgytende sild
- Brukes til mat, fiskemel, fiskeolje

*Makrell:*
- Pelagisk fisk, vandrer langt
- Økt betydning de siste tiårene

*Reker og krabbe:*
- Viktige skalldyrressurser
- Reker fra Barentshavet

**Norsk fiskerinæring i dag:**
- Eksportverdi ca. 40 milliarder kr (villfisk)
- Ca. 11 000 fiskere
- Moderne, effektiv flåte
- Norge er verdens nest største sjømateksportør

**Fiskeriforvaltning:**
- Totalkvote fastsettes basert på bestandsvurdering
- Fordeles mellom land (Norge, Russland, EU)
- Norske kvoter fordeles på fartøygrupper
- Overvåking og kontroll`,
    },
    {
      id: 'geografi-1-20-def-3',
      type: 'definition',
      title: 'Oppdrettsnaering - muligheter og utfordringer',
      content: `**Havbruk i Norge:**
Norge er verdens nest største eksportør av sjømat, og oppdrettsnæringen har vokst til å bli en av landets viktigste næringer.

**Lakseoppdrett:**
- Startet på 1970-tallet
- Ca. 1,5 millioner tonn produseres årlig
- Eksportverdi ca. 100 milliarder kr
- Arbeidsplasser langs hele kysten

**Hvordan oppdrett fungerer:**
1. Rognproduksjon og klekking på land
2. Smoltproduksjon (yngel) i ferskvann
3. Matfiskproduksjon i sjøen (merder)
4. Slakting og foredling

**Ulike perspektiver på oppdrettsnæringen:**

*Muligheter og fordeler:*
- Effektiv matproduksjon (god fôrutnyttelse)
- Arbeidsplasser i distriktene
- Stor eksportverdi
- Kan bidra til global matsikkerhet
- Teknologiutvikling

*Utfordringer og bekymringer:*
- Lakselus angriper også villaks
- Rømming og genetisk påvirkning av villaks
- Utslipp av næringsstoffer og avfall
- Fôr inneholder soya og villfisk
- Sykdom og antibiotikabruk
- Arealbruk i fjorder

*Løsninger under utvikling:*
- Lukkede anlegg (på land eller i sjø)
- Bedre lusekontroll
- Mer bærekraftig fôr
- Strengere reguleringer

**Viktig:** Oppdrettsnæringens fremtid er politisk debattert. Noen mener vekst må stoppes inntil problemene er løst, andre mener teknologisk utvikling vil løse utfordringene. Begge syn har legitime argumenter.`,
    },
    {
      id: 'geografi-1-20-def-4',
      type: 'definition',
      title: 'Forvaltning av havomraader',
      content: `**Havrett og jurisdiksjon:**

*Indre farvann:*
Innenfor grunnlinjen, full suverenitet

*Territorialfarvann:*
12 nautiske mil fra grunnlinjen, full suverenitet

*Økonomisk sone (EEZ):*
200 nautiske mil, eksklusive rettigheter til ressurser

*Kontinentalsokkel:*
Rettigheter til havbunnsressurser, kan strekke seg lenger enn 200 nm

*Internasjonalt farvann:*
Utenfor nasjonale soner, felles ressurser

**FNs havrettskonvensjon (UNCLOS):**
- Vedtatt 1982
- Regulerer rettigheter og plikter i havet
- Grunnlag for fredelig bruk av havet

**Norsk havforvaltning:**

*Forvaltningsplaner:*
- Helhetlige planer for Barentshavet, Norskehavet, Nordsjøen
- Balanserer ulike interesser (fiskeri, olje, miljø)
- Oppdateres jevnlig

*Marine verneområder:*
- Beskytter sårbare områder
- Korallrev, gytefelt, fuglebiotoper

**Konflikter i havforvaltning:**
- Fiskeri vs. olje og gass
- Havvind vs. fiskeri og natur
- Vern vs. næringsinteresser
- Klimahensyn vs. arbeidsplasser

**Internasjonale utfordringer:**
- Overfiske i internasjonalt farvann
- Plastforurensning
- Havforsuring (CO2-opptak)
- Klimaendringer påvirker økosystemer
- Arktis: Nye seilingsruter og ressurser`,
    },
    {
      id: 'geografi-1-20-example-1',
      type: 'example',
      title: 'Eksempel: Lofotfisket - tradisjon og fremtid',
      problem: `Lofotfisket har foregått i tusen år. Analyser dette fiskeriets betydning og utfordringer i dag.`,
      solution: `**Lofotfisket - historikk:**

**Tradisjon:**
- Sesongfiske januar-april
- Torsken gyter i Lofoten
- Fiskere fra hele kysten samlet seg
- Grunnlag for bosetting og handel
- Tørrfisk eksportert til Europa siden 1100-tallet

**Lofotfisket i dag:**

*Fangst og metoder:*
- Hovedsakelig skrei (gytemoden torsk)
- Line, garn, juksa, snurrevad
- Moderne fartøyer, men mange mindre båter
- Ca. 20-40 000 tonn årlig

*Økonomisk betydning:*
- Viktig for lokalsamfunnene
- Sesongarbeidsplasser
- Fiskemottak og foredling
- Turisme (rorbuer, opplevelser)

*Forvaltning:*
- Kvoteregulert
- Begrensninger på redskap og fartøystørrelse
- Gytefelt beskyttes

**Utfordringer:**

*Klimaendringer:*
- Varmere hav kan påvirke gytevandring
- Usikkerhet om fremtidige bestander

*Strukturendring:*
- Færre, større fartøyer
- Sentralisering av mottak
- Press på små fiskerisamfunn

*Olje og gass:*
- Lofoten/Vesterålen-området omstridt
- Fiskere frykter konsekvenser av utbygging
- Politisk debatt om konsekvensutredning

**Ulike syn på Lofoten-olje:**
- For: Arbeidsplasser, inntekter, teknologi gjør det trygt
- Mot: Risiko for gytefelt, turisme, fiskeri viktigere langsiktig
- Lokalt: Delte meninger i kommunene

**Fremtiden:**
Lofotfisket viser spenningen mellom tradisjon og modernisering, mellom ulike næringer og mellom lokale og nasjonale interesser.`,
    },
    {
      id: 'geografi-1-20-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-20-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gi en oversikt over havets viktigste ressurser. Kategoriser dem i levende ressurser, ikke-levende ressurser og økosystemtjenester.',
        hints: ['Tenk på mat, energi, mineraler og andre verdier havet gir'],
        solution: 'Levende ressurser: Villfisk (torsk, sild, makrell), skalldyr, oppdrettsfisk (laks), sjøpattedyr, tang/tare. Ikke-levende ressurser: Olje og gass, sand/grus, dyphavsmineraler, havvind, bølgekraft. Økosystemtjenester: Karbonlagring, oksygenproduksjon, klimaregulering, rensing, rekreasjon/turisme. Havet gir mat, energi, transport og klimatjenester.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-20-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-20-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv norsk fiskerinæring. Hvilke fiskeslag er viktigst, og hvordan forvaltes ressursene?',
        hints: ['Tenk på torsk, sild, kvoter, internasjonalt samarbeid'],
        solution: 'Viktigste fiskeslag: Torsk (skrei), sild, sei, makrell, reker. Forvaltning: Havforskningsinstituttet vurderer bestander, Fiskeridirektoratet setter kvoter, fordeles internasjonalt (Norge-Russland for Barentshavet) og nasjonalt mellom fartøygrupper. Streng kontroll hindrer overfiske. Norge er verdens nest største sjømateksportør med eksportverdi ca. 40 mrd kr for villfisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-20-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-20-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvordan lakseoppdrett fungerer. Hvilke stadier går laksen gjennom fra rogn til ferdig produkt?',
        hints: ['Tenk på klekking, smolt, matfisk, slakting'],
        solution: 'Stadier: 1) Stamfisk produserer rogn, kunstig befruktning. 2) Klekking i ferskvann på land (rogn til yngel). 3) Smoltproduksjon - yngel vokser i kar til den tåler sjøvann (6-18 mnd). 4) Matfiskproduksjon - smolt settes i sjømerder, vokser i 12-24 mnd. 5) Slakting og foredling - fisk bedøves, slaktes, fileteres, pakkes. 6) Eksport - fly eller trailer til markeder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-20-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-20-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva økonomisk sone (EEZ) og kontinentalsokkel betyr. Hvorfor er disse begrepene viktige for Norge?',
        hints: ['Tenk på FNs havrettskonvensjon og Norges havområder'],
        solution: 'Økonomisk sone (EEZ): 200 nautiske mil fra kysten, eksklusiv rett til fiske og ressurser i vannsøylen. Kontinentalsokkel: Rett til havbunnens ressurser (olje, gass, mineraler), kan gå lenger enn 200 nm. Viktig for Norge fordi: Norges EEZ er 6 ganger landarealet, gir enerett til fiske og olje/gass, grunnlag for havnæringene, forvaltningsansvar for ressursene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-20-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-20-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft oppdrettsnæringens muligheter og utfordringer. Presenter ulike perspektiver på hvordan næringen bør utvikles.',
        hints: ['Tenk på økonomi, miljø, arbeidsplasser, villaks, teknologi'],
        solution: 'Muligheter: Effektiv matproduksjon, eksportinntekter (100 mrd), distriktsarbeidsplasser, global matsikkerhet, teknologiutvikling. Utfordringer: Lakselus, rømming, forurensning, sykdom, fôrressurser. Ulike perspektiver: Vekstoptimister mener teknologi løser problemene (lukkede anlegg, bedre fôr). Kritikere mener vekst må stoppe til miljøproblemene er løst. Balansert syn: Fortsatt utvikling med strengere miljøkrav. Politisk debatt om tempo og krav.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 21: Globalisering og handel
// ============================================================================

export const CHAPTER_GEOGRAFI_21: TextbookChapter = {
  id: 'geografi-1-21',
  courseId: 'geografi',
  chapterNumber: '21',
  title: 'Globalisering og handel',
  description: 'Laer om globalisering, internasjonal handel og globale verdikjeder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte globalisering og internasjonal handel med ulike perspektiver',
  ],
  content: [
    {
      id: 'geografi-1-21-intro',
      type: 'text',
      content: `## Hva er globalisering?

Globalisering er prosessen der verden blir stadig mer sammenkoblet gjennom handel, kommunikasjon, transport og kulturutveksling. Dette har akselerert kraftig de siste tiårene.

**Dimensjoner av globalisering:**
- Økonomisk: Internasjonal handel, investeringer, globale selskaper
- Kulturell: Ideer, musikk, mat, mote spres over landegrenser
- Politisk: Internasjonale organisasjoner og avtaler
- Teknologisk: Internett, sosiale medier, digital kommunikasjon

**Drivkrefter:**
- Transportteknologi (containerskip, fly)
- Kommunikasjonsteknologi (internett, mobiltelefon)
- Politiske beslutninger (frihandelsavtaler, deregulering)
- Økonomiske insentiver (tilgang til markeder, lavere kostnader)

**Historisk perspektiv:**
Globalisering er ikke nytt - silkeveien og kolonitiden var tidligere former. Men dagens globalisering er langt mer omfattende og rask.`,
    },
    {
      id: 'geografi-1-21-def-1',
      type: 'definition',
      title: 'Internasjonal handel',
      content: `**Grunnleggende begreper:**

*Eksport:*
Varer og tjenester som selges til andre land. Norges viktigste eksportvarer er olje/gass, fisk, metaller og tjenester.

*Import:*
Varer og tjenester som kjøpes fra andre land. Norge importerer mye mat, maskiner, elektronikk og klær.

*Handelsbalanse:*
Forskjellen mellom eksport og import. Norge har vanligvis handelsoverskudd takket være olje/gass.

*Handelsavtaler:*
- WTO: Verdens handelsorganisasjon med globale regler
- EØS: Norges avtale med EU om det indre marked
- Frihandelsavtaler: Bilaterale avtaler som reduserer toll

**Hvorfor handler land med hverandre?**

*Klassisk teori (komparative fortrinn):*
Land bør spesialisere seg på det de produserer relativt mest effektivt. Et land kan ha fordel av handel selv om det er mindre effektivt på alt.

*Andre forklaringer:*
- Tilgang til ressurser som ikke finnes hjemme
- Stordriftsfordeler ved større markeder
- Teknologioverføring og læring
- Forbrukere får større utvalg`,
    },
    {
      id: 'geografi-1-21-def-2',
      type: 'definition',
      title: 'Globale verdikjeder',
      content: `**Hva er en global verdikjede?**

En global verdikjede beskriver hvordan produksjonen av en vare er fordelt over flere land. Hver del av produksjonsprosessen skjer der det er mest lønnsomt.

**Eksempel: Smarttelefon**
- Design: USA (Apple) eller Sør-Korea (Samsung)
- Prosessorer: Taiwan (TSMC)
- Skjerm: Sør-Korea, Japan
- Batterier: Kina, Japan
- Mineraler: Kongo (kobolt), Australia (litium)
- Montering: Kina, Vietnam, India
- Salg: Hele verden

**Kjennetegn:**
- Fragmentert produksjon over mange land
- Koordinert av store multinasjonale selskaper
- Avhengig av effektiv transport og kommunikasjon
- Just-in-time leveranser minimerer lagerkostnader

**Utviklingsland i verdikjeder:**
Mange utviklingsland har fått økonomisk vekst gjennom deltakelse i verdikjeder, særlig i arbeidsintensiv produksjon som tekstiler og elektronikkmontering. Det er debatt om dette er bra eller dårlig for utviklingen.`,
    },
    {
      id: 'geografi-1-21-def-3',
      type: 'definition',
      title: 'Ulike perspektiver på globalisering',
      content: `**Positive argumenter:**

*Økonomisk vekst:*
- Hundrevis av millioner løftet ut av fattigdom (særlig i Asia)
- Lavere priser på forbruksvarer
- Økt produktivitet gjennom spesialisering
- Teknologi og kunnskap spres raskere

*Sosiale fordeler:*
- Kulturutveksling og forståelse
- Menneskerettigheter spres
- Lettere å reise og kommunisere

**Kritiske argumenter:**

*Økonomiske utfordringer:*
- Økende ulikhet innad i land
- Arbeidsplasser flyttes til lavkostland
- "Kappløp mot bunnen" i skatter og standarder
- Finansiell ustabilitet kan spre seg raskt

*Andre bekymringer:*
- Miljøbelastning fra transport
- Kulturell homogenisering
- Demokratisk underskudd i internasjonale organisasjoner

**Balansert vurdering:**
De fleste økonomer mener globalisering totalt sett har vært positiv for verdensøkonomien, men at gevinstene er ujevnt fordelt. Utfordringen er å fordele gevinstene bedre og håndtere negative konsekvenser.`,
    },
    {
      id: 'geografi-1-21-example-1',
      type: 'example',
      title: 'Eksempel: Kinas økonomiske utvikling',
      problem: `Kina har hatt enorm økonomisk vekst de siste 40 årene. Hvordan henger dette sammen med globalisering?`,
      solution: `**Kinas integrasjon i verdensøkonomien:**

1. **Åpning fra 1978:** Deng Xiaoping startet økonomiske reformer og åpnet for utenlandske investeringer

2. **Eksportorientert vekst:**
   - Spesialiserte seg på arbeidsintensiv produksjon
   - Ble "verdens fabrikk" for tekstiler, leker, elektronikk
   - Lave lønninger tiltrakk multinasjonale selskaper

3. **WTO-medlemskap 2001:**
   - Ga tilgang til vestlige markeder
   - Økte utenlandske investeringer dramatisk

4. **Resultater:**
   - BNP per innbygger økt fra 300 til over 10 000 dollar
   - Over 800 millioner løftet ut av ekstrem fattigdom
   - Nå verdens nest største økonomi

**Ulike syn på Kinas utvikling:**
- Tilhengere: Bevis på at globalisering virker
- Kritikere: Lave lønninger, dårlige arbeidsforhold, miljøproblemer
- Nyansert: Stor fremgang, men også betydelige kostnader`,
    },
    {
      id: 'geografi-1-21-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva globalisering er og beskriv minst tre dimensjoner av globalisering med eksempler.',
        hints: ['Tenk på økonomisk, kulturell, politisk og teknologisk globalisering'],
        solution: 'Globalisering er prosessen der verden blir mer sammenkoblet. Økonomisk: Varer produseres i ett land og selges over hele verden (f.eks. iPhone). Kulturell: Musikk, mat og mote spres globalt (K-pop, sushi). Politisk: Internasjonale organisasjoner som FN og WTO. Teknologisk: Internett og sosiale medier kobler mennesker på tvers av landegrenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-21-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv den globale verdikjeden for et klesplagg fra bomull til ferdig produkt i butikk.',
        hints: ['Tenk på råvarer, spinning, veving, sying, transport, salg'],
        solution: 'Bomull dyrkes i USA, India eller Kina. Spinnes til tråd i Pakistan eller Bangladesh. Veves til stoff i Kina eller Vietnam. Sys til ferdig plagg i Bangladesh eller Kambodsja. Transporteres med skip til Europa. Selges i butikker i Norge. Hver del av prosessen skjer der det er billigst eller mest effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-21-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-ex-3',
        number: '3',
        type: 'classic',
        task: 'Presenter argumenter for og mot frihandel. Hvilke grupper vinner og taper på økt handel?',
        hints: ['Tenk på forbrukere, arbeidere, bedrifter, utviklingsland'],
        solution: 'For frihandel: Lavere priser for forbrukere, økonomisk vekst, spesialisering øker effektivitet, teknologioverføring. Mot frihandel: Arbeidsplasser flyttes, økt ulikhet, miljøbelastning, sårbarhet for kriser. Vinnere: Forbrukere (billigere varer), eksportbedrifter, arbeidere i vekstland. Tapere: Arbeidere i industrier som utkonkurreres, lokale produsenter som møter hard konkurranse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-21-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan påvirker globalisering Norge? Gi eksempler på positive og negative konsekvenser.',
        hints: ['Tenk på handel, arbeidsmarked, kultur, miljø'],
        solution: 'Positive: Norge tjener stort på eksport av olje, gass og fisk. Forbrukere får tilgang til billige varer og stort utvalg. Kulturelt mangfold. Teknologisk utvikling. Negative: Industri har flyttet ut. Konkurranse fra lavkostland. Økt reising påvirker miljøet. Sårbarhet vist under pandemien (mangel på beskyttelsesutstyr). Arbeidsinnvandring skaper både muligheter og utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-21-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-21-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft påstanden: "Globalisering har vært bra for verden totalt sett." Presenter ulike perspektiver.',
        hints: ['Bruk fakta om fattigdomsreduksjon, men også om ulikhet og miljø'],
        solution: 'For: Hundrevis av millioner ut av fattigdom (særlig Kina og Asia), økt levestandard globalt, bedre helse og utdanning, teknologispredning. Mot: Økt ulikhet innad i mange land, miljøbelastning fra transport og produksjon, finanskriser sprer seg lettere, kulturell homogenisering. Balansert syn: De fleste økonomer mener totaleffekten er positiv, men gevinstene er ujevnt fordelt. Utfordringen er å sikre at flere får del i gevinstene og håndtere negative konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 22: Utviklingsgeografi
// ============================================================================

export const CHAPTER_GEOGRAFI_22: TextbookChapter = {
  id: 'geografi-1-22',
  courseId: 'geografi',
  chapterNumber: '22',
  title: 'Utviklingsgeografi',
  description: 'Laer om maling av utvikling, fattigdom og ulikhet, og ulike forklaringer og perspektiver.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte årsaker til og konsekvenser av fattigdom og ulikhet globalt',
  ],
  content: [
    {
      id: 'geografi-1-22-intro',
      type: 'text',
      content: `## Hva er utvikling?

Utvikling handler om å forbedre menneskers livskvalitet og muligheter. Men hva som er "god utvikling" og hvordan man måler det, er omdiskutert.

**Ulike dimensjoner:**
- Økonomisk: Inntekt, produksjon, levestandard
- Sosial: Helse, utdanning, likestilling
- Politisk: Demokrati, menneskerettigheter, styresett
- Miljømessig: Bærekraftig ressursbruk

**Terminologi:**
Begrepene vi bruker om land med ulik utviklingsgrad har endret seg:
- "Utviklingsland" / "Industriland" (tradisjonelt)
- "Lavinntektsland" / "Høyinntektsland" (Verdensbanken)
- "Det globale sør" / "Det globale nord" (nyere, men kritisert)

Ingen begreper er perfekte - alle forenkler en kompleks virkelighet.`,
    },
    {
      id: 'geografi-1-22-def-1',
      type: 'definition',
      title: 'Mål på utvikling',
      content: `**BNP per innbygger:**

*Definisjon:*
Bruttonasjonalprodukt delt på befolkningen. Måler gjennomsnittlig økonomisk produksjon per person.

*Styrker:*
- Lett å måle og sammenligne
- Data finnes for nesten alle land
- Korrelerer med mange goder (helse, utdanning)

*Svakheter:*
- Fanger ikke fordeling - et land kan ha høyt gjennomsnitt med enorm ulikhet
- Ignorerer ubetalt arbeid (husarbeid, omsorg)
- Teller ikke miljøkostnader
- Sier lite om livskvalitet

**HDI (Human Development Index):**

*Definisjon:*
FNs indeks som kombinerer tre dimensjoner:
1. Helse: Forventet levealder ved fødsel
2. Utdanning: Forventet og gjennomsnittlig antall skoleår
3. Levestandard: BNP per innbygger (justert)

*Styrker:*
- Bredere enn bare økonomi
- Viser at utvikling er mer enn penger

*Svakheter:*
- Fortsatt begrenset - fanger ikke demokrati, miljø, likestilling
- Nasjonal gjennomsnitt skjuler lokale forskjeller

**Andre indikatorer:**
- Gini-koeffisient (ulikhet)
- MPI (flerdimensjonal fattigdomsindeks)
- Happy Planet Index (livstilfredshet og miljø)`,
    },
    {
      id: 'geografi-1-22-def-2',
      type: 'definition',
      title: 'Fattigdom og ulikhet',
      content: `**Absolutt fattigdom:**
Lever under en fast inntektsgrense. Verdensbankens grense er 2,15 dollar per dag (ekstrem fattigdom).

- Ca. 700 millioner mennesker lever i ekstrem fattigdom (2023)
- Stor nedgang fra 1,9 milliarder i 1990
- Mest konsentrert i Afrika sør for Sahara

**Relativ fattigdom:**
Har vesentlig mindre enn det normale i samfunnet man lever i. I Norge: Under 60% av medianinntekten.

**Global ulikhet:**
- De 10% rikeste eier over 75% av verdens formue
- De 50% fattigste eier under 2%
- Ulikhet mellom land har gått ned (pga. Kina, India)
- Ulikhet innad i mange land har økt

**Fattigdomsfeller:**
Selvforsterkende sirkler som holder mennesker i fattigdom:
- Ingen utdanning → dårlig jobb → ikke råd til utdanning for barn
- Sykdom → kan ikke jobbe → ingen penger til helse
- Ingen kapital → kan ikke investere → forblir fattig`,
    },
    {
      id: 'geografi-1-22-def-3',
      type: 'definition',
      title: 'Ulike forklaringer på fattigdom',
      content: `**Det finnes mange teorier om hvorfor noen land er fattige. Her presenteres de viktigste perspektivene:**

**1. Geografiske forklaringer:**
- Klima (tropisk sykdomsbyrde, dårlig jordbruksland)
- Mangel på ressurser eller vanskelig tilgjengelighet
- Innlandsposisjon uten havtilgang

**2. Historiske forklaringer:**
- Kolonialismens arv (ressursutbytting, kunstige grenser)
- Slaveri og tvangsarbeid
- Ugunstige handelsstrukturer etablert historisk

**3. Institusjonelle forklaringer:**
- Dårlig styresett og korrupsjon
- Svake rettssystemer og eiendomsrettigheter
- Politisk ustabilitet og konflikter

**4. Internasjonale strukturer:**
- Urettferdige handelsregler
- Gjeldsbyrde
- Skatteparadiser som tapper ressurser

**Viktig å merke:**
Det er faglig debatt om hvilke faktorer som er viktigst. De fleste forskere mener flere faktorer samvirker, og at ulike land har ulike utfordringer. Enkle forklaringer som legger all skyld på ett forhold er sjelden tilstrekkelige.`,
    },
    {
      id: 'geografi-1-22-def-4',
      type: 'definition',
      title: 'Bistand - ulike syn',
      content: `**Hva er bistand?**
Overføring av ressurser fra rike til fattige land. Norge gir ca. 1% av BNI i bistand årlig.

**Typer bistand:**
- Nødhjelp (ved katastrofer)
- Utviklingsbistand (langsiktig)
- Humanitær bistand (konfliktområder)
- Teknisk bistand (kompetanseoverføring)

**Argumenter for bistand:**
- Moralsk plikt til å hjelpe
- Har reddet millioner av liv (vaksiner, nødhjelp)
- Investering i utdanning og helse gir avkastning
- Noen land har utviklet seg med bistandsstøtte (f.eks. Sør-Korea, Botswana)

**Kritiske argumenter:**
- Kan skape avhengighet
- Kan underminere lokalt næringsliv
- Kan støtte opp om korrupte regimer
- Effekten er vanskelig å måle

**Nyansert syn:**
- Type bistand og mottakerland påvirker effekten
- Nødhjelp er nødvendig ved kriser
- Langsiktig bistand krever god forvaltning
- Bistand alene løser ikke strukturelle problemer
- Handelspolitikk, klima og konflikthåndtering er også viktig

**Konklusjon:**
Det er bred enighet om at bistand kan hjelpe, men det er debatt om omfang, innretning og alternativer.`,
    },
    {
      id: 'geografi-1-22-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av utviklingsnivå',
      problem: `Sammenlign Norge og Nigeria på utviklingsindikatorer og drøft hva forskjellene skyldes.`,
      solution: `**Statistikk (ca. 2023):**

| Indikator | Norge | Nigeria |
|-----------|-------|---------|
| BNP per innbygger | 90 000 USD | 2 000 USD |
| HDI | 0,96 (1. plass) | 0,54 (163. plass) |
| Forventet levealder | 83 år | 53 år |
| Barnedødelighet | 2 per 1000 | 72 per 1000 |

**Mulige forklaringer (ulike perspektiver):**

*Historiske:*
- Norge unngikk kolonisering; Nigeria var britisk koloni til 1960
- Kunstige grenser skapte etniske konflikter

*Ressurser:*
- Begge har olje, men Norge forvalter den bedre (Oljefondet)
- Nigeria har hatt "ressursforbannelse"

*Institusjonelle:*
- Norge har sterke institusjoner bygget over lang tid
- Nigeria har slitt med korrupsjon og militærkupp

*Klima/geografi:*
- Nigeria har tropisk sykdomsbyrde (malaria)
- Høy befolkningsvekst utfordrer utvikling

**Konklusjon:** Årsakene er sammensatte og omdiskuterte.`,
    },
    {
      id: 'geografi-1-22-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom BNP per innbygger og HDI som mål på utvikling. Hva er styrker og svakheter ved hvert mål?',
        hints: ['Tenk på hva som måles og hva som ikke fanges opp'],
        solution: 'BNP per innbygger måler kun økonomisk produksjon i gjennomsnitt. Styrke: Lett å måle. Svakhet: Ignorerer fordeling, helse, utdanning, miljø. HDI kombinerer forventet levealder, utdanning og inntekt. Styrke: Bredere perspektiv på utvikling. Svakhet: Fanger fortsatt ikke alt (demokrati, likestilling, miljø), og nasjonale gjennomsnitt skjuler lokale forskjeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-22-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv tre ulike forklaringer på hvorfor noen land er fattigere enn andre. Presenter ulike perspektiver på hver forklaring.',
        hints: ['Tenk på geografi, historie, institusjoner, internasjonale forhold'],
        solution: 'Geografiske: Tropisk klima gir sykdommer og dårligere jordbruk. Men Singapore og Hong Kong er rike tross tropisk beliggenhet. Historiske: Kolonialisme utbyttet ressurser og etterlot dårlige strukturer. Men noen eks-kolonier har utviklet seg bra. Institusjonelle: Korrupsjon og dårlig styresett hindrer utvikling. Men hva kom først - fattigdom eller dårlige institusjoner? Hver forklaring har noe for seg, men ingen forklarer alt alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-22-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en fattigdomsfelle? Gi et eksempel og forklar hvordan den kan brytes.',
        hints: ['Tenk på selvforsterkende sirkler som holder mennesker i fattigdom'],
        solution: 'Fattigdomsfelle er en selvforsterkende sirkel. Eksempel: Fattig familie har ikke råd til skolegang → barnet får ikke utdanning → får dårlig betalt jobb som voksen → har ikke råd til skolegang for egne barn. Kan brytes gjennom: Gratis skolegang, stipender, skolemåltider som gjør det lønnsomt å sende barn på skole. Mikrolån kan hjelpe med kapital. Helseprogrammer bryter sykdomsfeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-22-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft argumenter for og mot bistand. Gi eksempler på ulike typer bistand og vurder effekten.',
        hints: ['Tenk på nødhjelp, utviklingsbistand, vilkår for effekt'],
        solution: 'For: Moralsk plikt, har reddet liv (vaksiner halverte barnedødelighet), noen suksesshistorier (Sør-Korea, Botswana). Mot: Kan skape avhengighet, underminere lokalt næringsliv, ende hos korrupte. Typer: Nødhjelp er viktig ved katastrofer, vanskelig å kritisere. Utviklingsbistand krever god forvaltning og lokalt eierskap. Effekten avhenger av type bistand, mottakerland og hvordan den gis. De fleste mener bistand kan virke under riktige betingelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-22-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-22-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg et lavinntektsland og analyser: Hva er utviklingsnivået? Hva er de viktigste utfordringene og mulighetene? Hvilke tiltak kan bidra til utvikling?',
        hints: ['Bruk statistikk fra FN eller Verdensbanken. Vurder flere perspektiver.'],
        solution: 'Svar bør inneholde: 1) Landets HDI, BNP per innbygger og andre indikatorer. 2) Historisk bakgrunn (kolonitid, konflikter). 3) Hovedutfordringer (fattigdom, helse, utdanning, klima, styresett). 4) Ressurser og muligheter. 5) Tiltak: Investering i utdanning og helse, bedre styresett, infrastruktur, markedstilgang. Vis at det er ulike syn på hva som er viktigst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 23: Geopolitikk
// ============================================================================

export const CHAPTER_GEOGRAFI_23: TextbookChapter = {
  id: 'geografi-1-23',
  courseId: 'geografi',
  chapterNumber: '23',
  title: 'Geopolitikk',
  description: 'Laer om geopolitikk, grenser og territorier, ressurskonflikter og Norges posisjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte geopolitiske forhold og interessemotsetninger',
  ],
  content: [
    {
      id: 'geografi-1-23-intro',
      type: 'text',
      content: `## Hva er geopolitikk?

Geopolitikk handler om forholdet mellom geografi og politikk - hvordan geografiske forhold påvirker maktforhold mellom stater.

**Sentrale temaer:**
- Territorier og grenser
- Kontroll over ressurser
- Strategiske beliggenheter
- Regionale maktbalanser

**Hvorfor er geografi viktig?**
- Naturressurser gir økonomisk og politisk makt
- Beliggenhet påvirker handel og sikkerhet
- Klima og terreng former samfunn
- Grenser skaper konflikter eller samarbeid

**Geopolitikk i endring:**
- Tradisjonelt fokus på landområder og militær makt
- Økt fokus på havområder, cyberspace, rommet
- Klimaendringer skaper nye utfordringer
- Økonomisk makt like viktig som militær`,
    },
    {
      id: 'geografi-1-23-def-1',
      type: 'definition',
      title: 'Grenser og territorier',
      content: `**Statsgrenser:**

*Naturlige grenser:*
- Elver (Rhinen, Donau)
- Fjellkjeder (Himalaya, Pyreneene)
- Hav og innsjøer

*Kunstige grenser:*
- Kolonimaktenes linjer (Afrika)
- Politiske avtaler
- Ofte uten hensyn til folk og kultur

**Territorielle konflikter:**

*Årsaker:*
- Ressurser under bakken
- Strategisk beliggenhet
- Historiske krav
- Etniske og religiøse forhold

*Eksempler:*
- Kashmir (India/Pakistan)
- Vestbredden (Israel/Palestina)
- Sør-Kina-havet (Kina/naboland)
- Krim (Russland/Ukraina)

**Havgrenser:**
- Territorialfarvann: 12 nautiske mil
- Økonomisk sone: 200 nautiske mil
- Kontinentalsokkel: Kan strekke seg lenger

**FNs Havrettskonvensjon (UNCLOS):**
Regulerer staters rettigheter og plikter i havet. Norge har store interesser knyttet til havområder.`,
    },
    {
      id: 'geografi-1-23-def-2',
      type: 'definition',
      title: 'Ressurskonflikter',
      content: `**Olje og gass:**

*Strategisk betydning:*
- Fossile brensler driver verdensøkonomien
- Land med ressurser får stor makt
- Kontroll over forsyningsveier er kritisk

*Konfliktområder:*
- Midtøsten (verdens største reserver)
- Kaspihavet
- Arktis
- Sør-Kina-havet

**Vann:**

*"Det blå gullet":*
- Ferskvann er livsnødvendig og begrenset
- Klimaendringer forverrer vannmangel
- Delte elveløp skaper konflikter

*Eksempler:*
- Nilen (Egypt, Sudan, Etiopia)
- Jordan (Israel, Jordan, Syria)
- Mekong (Kina, Sørøst-Asia)

**Mineraler og metaller:**

*Kritiske ressurser:*
- Sjeldne jordarter (elektronikk, batterier)
- Kobolt (Kongo har 70% av verdens reserver)
- Litium (batterier)

*Strategisk konkurranse:*
- Kina dominerer utvinning av sjeldne jordarter
- Vestlige land søker alternative kilder
- Havbunnsmineraler blir viktigere`,
    },
    {
      id: 'geografi-1-23-def-3',
      type: 'definition',
      title: 'Norges geopolitiske posisjon',
      content: `**Geografisk plassering:**
- Utkanten av Europa
- Stor kystlinje og havområder
- Grenser mot Russland i nord
- Nærmeste nabo til Arktis

**Strategisk betydning:**

*Under den kalde krigen:*
- NATO-medlem på grensen til Sovjet
- Viktig for overvåking
- Baser og installasjoner

*I dag:*
- Nordområdene har økt strategisk betydning
- Russlands opprusting i Arktis
- Nye sjøruter når isen smelter
- Ressurser i Arktis

**Norges interesser:**

*Havområder:*
- Økonomisk sone på ca. 2 millioner km²
- Store olje- og gassressurser
- Rike fiskebestander
- Potensiell mineralutvinning

*Sikkerhet:*
- NATO-medlemskap (siden 1949)
- Balanse mellom avskrekking og beroligelse
- Samarbeid med Russland om fiskeri og grenser
- Økt spenning etter 2014 og 2022

**Svalbard:**
- Norsk suverenitet
- Svalbardtraktaten gir andre land rettigheter
- Økende internasjonal interesse`,
    },
    {
      id: 'geografi-1-23-example-1',
      type: 'example',
      title: 'Eksempel: Sør-Kina-havet',
      problem: `Sør-Kina-havet er et av verdens mest omstridte havområder. Analyser konfliktens geopolitiske dimensjoner.`,
      solution: `**Geografisk betydning:**
- 3,5 millioner km² stort havområde
- Viktigste skipslei i verden (1/3 av global handel)
- Rike fiskeressurser
- Potensielt store olje- og gassreserver

**Territorielle krav:**
- Kina krever nesten hele havet ("nilinje-linjen")
- Vietnam, Filippinene, Malaysia, Brunei har krav
- Taiwan har også krav

**Kinas handlinger:**
- Bygget kunstige øyer med militære installasjoner
- Hevder historiske rettigheter
- Avviser internasjonal dom (2016)

**Andre stormakters interesser:**
- USA: Frihet på havet, støtter allierte
- Japan: Avhengig av sjøtransport gjennom området

**Geopolitisk analyse:**
- Kontroll over ressurser og handelsveier
- Regional maktbalanse
- Stormaktsrivalisering mellom USA og Kina
- Fare for militær konfrontasjon

**Konklusjon:** Konflikten viser hvordan geografi, ressurser og maktpolitikk henger sammen.`,
    },
    {
      id: 'geografi-1-23-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva geopolitikk er og gi tre eksempler på hvordan geografi påvirker maktforhold mellom stater.',
        hints: ['Tenk på ressurser, beliggenhet, grenser'],
        solution: 'Geopolitikk handler om forholdet mellom geografi og politikk. Eksempler: 1) Midtøstens oljeressurser gir regionen stor strategisk betydning og har ført til konflikter og innblanding. 2) Russlands størrelse og beliggenhet gjør landet vanskelig å invadere, men også vanskelig å forsvare. 3) Singapore kontrollerer Malakkastredet, en av verdens viktigste handelsruter, noe som gir stor strategisk og økonomisk betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-23-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom naturlige og kunstige grenser. Hvorfor har mange kunstige grenser skapt konflikter?',
        hints: ['Tenk på kolonialismens arv og etniske grupper'],
        solution: 'Naturlige grenser følger geografiske trekk som elver, fjell og hav. Kunstige grenser er trukket på kart uten hensyn til naturlige hindringer. Mange kunstige grenser (særlig i Afrika og Midtøsten) ble trukket av kolonimakter uten hensyn til etniske, religiøse og språklige grupper. Dette har splittet folkegrupper og tvunget fiendtlige grupper inn i samme stat, noe som har bidratt til konflikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-23-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv tre typer ressurser som ofte fører til konflikter mellom stater, og gi eksempler på hver.',
        hints: ['Tenk på olje, vann, mineraler'],
        solution: 'Olje og gass: Midtøsten-konflikter, Russland-Ukraina (gassrørledninger), Sør-Kina-havet. Vann: Nilen (Egypt-Etiopia), Jordan (Israel og naboland), Mekong (Kina-Sørøst-Asia). Mineraler: Kobolt i Kongo, sjeldne jordarter (Kina dominerer), diamanter i Afrika. Ressursene er verdifulle, ofte ujevnt fordelt, og kontroll gir makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-23-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser Norges geopolitiske posisjon. Hva er Norges viktigste strategiske interesser?',
        hints: ['Tenk på nordområdene, NATO, Russland, havressurser'],
        solution: 'Norges posisjon: Utkant av Europa, lang kystlinje, grense mot Russland, nær Arktis. Strategiske interesser: 1) Sikkerhet gjennom NATO-medlemskap, balanse mellom avskrekking og beroligelse overfor Russland. 2) Havområder med økonomisk sone på 2 mill km², olje/gass og fiskeri. 3) Nordområdene med økende betydning (klima, ressurser, sjøruter). 4) Svalbard med norsk suverenitet men internasjonal interesse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-23-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-23-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en pågående territoriell konflikt og analyser den geopolitisk. Hvem er partene, hva handler konflikten om, og hvilke interesser står mot hverandre?',
        hints: ['Du kan velge Sør-Kina-havet, Kashmir, eller en annen konflikt'],
        solution: 'Svar bør inneholde: 1) Beskrivelse av konfliktområdet og partene. 2) Historisk bakgrunn for konflikten. 3) Geografiske faktorer (ressurser, beliggenhet, strategisk betydning). 4) De ulike partenes interesser og argumenter. 5) Internasjonale dimensjoner og stormaktsinteresser. 6) Mulige utfall eller løsninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 24: Arktis og Antarktis
// ============================================================================

export const CHAPTER_GEOGRAFI_24: TextbookChapter = {
  id: 'geografi-1-24',
  courseId: 'geografi',
  chapterNumber: '24',
  title: 'Arktis og Antarktis',
  description: 'Laer om polaromraadenes geografi, klima, ressurser og Norges rolle.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte polarområdenes betydning for klima, ressurser og internasjonal politikk',
  ],
  content: [
    {
      id: 'geografi-1-24-intro',
      type: 'text',
      content: `## Polarområdene

Arktis i nord og Antarktis i sør er jordens mest ekstreme områder. De har stor betydning for klima, ressurser og internasjonal politikk.

**Grunnleggende forskjeller:**

*Arktis:*
- Hav omgitt av land
- Innbyggere (urfolk og moderne samfunn)
- Flere land har suverenitet over deler
- Sjøis som smelter

*Antarktis:*
- Land omgitt av hav
- Ingen permanent befolkning (bare forskningsstasjoner)
- Styrt av internasjonal traktat
- Isdekke på land

**Hvorfor er polarområdene viktige?**
- Klimaregulering (reflekterer sollys, lagrer is)
- Indikatorer på klimaendringer
- Store ressurser
- Økende strategisk betydning`,
    },
    {
      id: 'geografi-1-24-def-1',
      type: 'definition',
      title: 'Arktis - geografi og klima',
      content: `**Geografisk avgrensning:**

Arktis defineres på ulike måter:
- Polarsirkelen (66,5° nord) - astronomisk
- 10°C-isotermen for juli - klimatisk
- Tregrensen - økologisk

**Geografi:**
- Nordishavet: Ca. 14 millioner km²
- Omgitt av: Russland, Canada, USA (Alaska), Norge, Danmark (Grønland)
- Øygrupper: Svalbard, Frans Josef Land, Novaja Semlja

**Klima:**
- Ekstremt kaldt om vinteren (-40 til -50°C)
- Korte, kjølige somre
- Midnattssol og mørketid
- Permafrost på land

**Sjøis:**
- Minimum i september (ca. 4-5 millioner km²)
- Maksimum i mars (ca. 15 millioner km²)
- Isutbredelsen har sunket dramatisk (40% mindre enn i 1980)
- Tynn, førsteårsis erstatter tykk, flerårsis

**Økosystemer:**
- Isbjørn, sel, hval, reinsdyr
- Rike fiskebestander
- Trekkfugler fra hele verden`,
    },
    {
      id: 'geografi-1-24-def-2',
      type: 'definition',
      title: 'Antarktis - geografi og klima',
      content: `**Geografi:**
- Kontinent: Ca. 14 millioner km² (større enn Europa)
- 98% dekket av is (gjennomsnittlig 2 km tykt)
- Inneholder 70% av jordens ferskvann
- Ingen land har anerkjent suverenitet

**Klima:**
- Jordens kaldeste sted (rekord: -89,2°C)
- Teknisk sett en ørken (lite nedbør)
- Kraftige vinder
- Seks måneder lys, seks måneder mørke

**Antarktisstraktaten (1959):**
- Forbyr militær aktivitet
- Beskytter vitenskapelig forskning
- Fryser alle territorielle krav
- Miljøprotokollen (1991) forbyr ressursutvinning

**Forskning:**
- Ca. 70 forskningsstasjoner
- Klimaforskning (iskjerner)
- Biologi, geologi, astronomi
- Norge har Troll-stasjonen og Tor-stasjonen

**Økosystemer:**
- Pingviner, sel, hval
- Krill er nøkkelart
- Sårbare systemer`,
    },
    {
      id: 'geografi-1-24-def-3',
      type: 'definition',
      title: 'Ressurser og interesser i Arktis',
      content: `**Fossile brennstoff:**
- Anslagsvis 13% av verdens uoppdagede olje
- 30% av verdens uoppdagede gass
- Russland har store felt i Arktis
- Norge utvinner på norsk sokkel

**Mineralressurser:**
- Grønland har sjeldne jordarter
- Zink, bly, gull på ulike steder
- Havbunnsmineraler potensielt viktige

**Fiskeri:**
- Rike bestander (torsk, hyse, lodde)
- Nye arter trekker nordover med varmere hav
- Forvaltningsutfordringer

**Skipsfart:**
- Nordøstpassasjen langs Russland
- Nordvestpassasjen gjennom Canada
- Kortere rute Asia-Europa (40% kortere)
- Fortsatt utfordrende (is, vær, infrastruktur)

**Geopolitiske interesser:**
- Russland: Største arktiske kystlinje, militær opprusting
- USA: Sikkerhet, ressurser (Alaska)
- Kina: "Nær-arktisk stat", ønsker innflytelse
- NATO-land: Sikkerhet i nordområdene

**Samarbeid og spenning:**
- Arktisk råd (8 land + urfolk)
- Økt spenning etter 2014/2022
- Balanse mellom samarbeid og konkurranse`,
    },
    {
      id: 'geografi-1-24-def-4',
      type: 'definition',
      title: 'Svalbard og norsk polarpolitikk',
      content: `**Svalbard:**

*Geografi:*
- Øygruppe mellom 74° og 81° nord
- Hovedøyer: Spitsbergen, Nordaustlandet, Edgeøya
- Ca. 2700 innbyggere (Longyearbyen, Barentsburg)

*Svalbardtraktaten (1920):*
- Norsk suverenitet
- Andre lands borgere har lik rett til næringsvirksomhet
- Demilitarisert sone
- Miljøbestemmelser må være like for alle

*Aktiviteter:*
- Forskning (klimaforskning, biologi)
- Turisme (økende)
- Kulldrift (avvikles)
- Frøhvelv (global matreserve)

**Norsk polarpolitikk:**

*Hovedlinjer:*
- Håndheve suverenitet
- Fremme bærekraftig utvikling
- Styrke forskning og kunnskap
- Internasjonalt samarbeid

*Norges arktiske interesser:*
- Fiskeriforvaltning
- Petroleumsvirksomhet
- Skipsfart
- Miljøvern
- Sikkerhet

**Dronning Maud Land (Antarktis):**
- Norsk krav siden 1939
- Frosset under Antarktistraktaten
- Forskningsaktivitet (Troll)`,
    },
    {
      id: 'geografi-1-24-example-1',
      type: 'example',
      title: 'Eksempel: Klimaendringer i Arktis',
      problem: `Arktis varmes opp dobbelt så raskt som resten av verden. Hva er årsakene og konsekvensene?`,
      solution: `**Arktisk forsterkning:**

*Mekanisme (is-albedo-tilbakekobling):*
1. Temperaturen øker
2. Sjøis smelter
3. Mørkt hav absorberer mer varme enn hvit is
4. Enda mer oppvarming
5. Sirkelen forsterker seg selv

**Observerte endringer:**
- Temperatur: +3-4°C siden 1980
- Sjøis: 40% reduksjon i minimum
- Permafrost: Smelter og frigjør metan
- Isbreer: Smelter over hele Arktis

**Konsekvenser:**

*Globalt:*
- Havnivåstigning (Grønlandsisen)
- Påvirkning på værsmønstre
- Frigjøring av drivhusgasser

*Lokalt:*
- Endrede leveforhold for urfolk
- Artene må tilpasse seg eller flytte
- Infrastruktur skades av permafrost-smelting

*Muligheter:*
- Nye sjøruter
- Tilgang til ressurser
- Lengre vekstsesong noen steder

**Dilemma:** Klimaendringene gjør det lettere å utvinne fossile brensler som forsterker klimaendringene.`,
    },
    {
      id: 'geografi-1-24-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar de viktigste geografiske og klimatiske forskjellene mellom Arktis og Antarktis.',
        hints: ['Tenk på land vs. hav, befolkning, styresett, temperatur'],
        solution: 'Arktis: Hav omgitt av land, har urfolk og moderne bosetting, flere land har suverenitet, sjøis som smelter. Antarktis: Land omgitt av hav, ingen permanent befolkning (bare forskere), styrt av internasjonal traktat, isdekke på land. Antarktis er kaldere (rekord -89°C) fordi det er et høytliggende kontinent. Antarktis inneholder 70% av jordens ferskvann.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-24-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar is-albedo-tilbakekoblingen og hvorfor Arktis varmes opp raskere enn resten av verden.',
        hints: ['Tenk på hvit is vs. mørkt hav, refleksjon av sollys'],
        solution: 'Albedo er hvor mye sollys som reflekteres. Hvit is har høy albedo (reflekterer 80%), mørkt hav har lav albedo (absorberer 90%). Tilbakekobling: Når temperaturen øker → is smelter → mer mørkt hav eksponeres → mer varme absorberes → temperaturen øker mer → mer is smelter. Dette forsterker oppvarmingen. Derfor varmes Arktis opp 2-3 ganger raskere enn globalt gjennomsnitt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-24-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv Svalbardtraktatens hovedprinsipper og forklar hvorfor traktaten skaper politiske utfordringer.',
        hints: ['Tenk på suverenitet, likebehandling, demilitarisering'],
        solution: 'Hovedprinsipper: 1) Norsk suverenitet, 2) Alle signatarlands borgere har lik rett til næringsvirksomhet, 3) Området er demilitarisert, 4) Miljøregler må gjelde likt for alle. Utfordringer: Uenighet om traktatens rekkevidde (gjelder den havområdene?), fiskevernsonen er omstridt, Russland utfordrer norsk tolkning, Kinas økende interesse, spenning mellom norsk suverenitet og likebehandlingsprinsippet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-24-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke ressurser finnes i Arktis, og hvorfor er det økende internasjonal interesse for regionen?',
        hints: ['Tenk på olje/gass, mineraler, fisk, skipsfart'],
        solution: 'Ressurser: Olje/gass (13% av uoppdaget olje, 30% av gass), mineraler (sjeldne jordarter, metaller), fiskeri (rike bestander), nye skipsleder (Nordøst- og Nordvestpassasjen). Økende interesse fordi: Klimaendringer gjør områdene mer tilgjengelige, global etterspørsel etter ressurser, stormaktsrivalisering, kortere sjøruter Asia-Europa, teknologi gjør utvinning mulig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-24-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-24-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft mulige fremtidsscenarier for Arktis. Vil regionen preges av samarbeid eller konflikt?',
        hints: ['Vurder ulike faktorer: klima, ressurser, stormakter, institusjoner'],
        solution: 'For samarbeid: Arktisk råd har fungert, felles interesse i miljø og sikkerhet, havrettskonvensjonen regulerer, økonomisk samarbeid kan lønne seg. For konflikt: Økt stormaktsrivalisering, Russlands militarisering, ressurskonkurranse, uavklarte grensespørsmål. Usikkerhetsfaktorer: Klimaendringenes tempo, Kinas ambisjoner, politisk utvikling i USA/Russland. Sannsynlig scenario: En blanding - samarbeid på noen områder, spenning på andre. Norges utfordring er å balansere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 25: Geografisk metode - feltarbeid
// ============================================================================

export const CHAPTER_GEOGRAFI_25: TextbookChapter = {
  id: 'geografi-1-25',
  courseId: 'geografi',
  chapterNumber: '25',
  title: 'Geografisk metode - feltarbeid',
  description: 'Laer om planlegging og gjennomforing av geografisk feltarbeid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge, gjennomføre og presentere feltarbeid om geografiske forhold',
  ],
  content: [
    {
      id: 'geografi-1-25-intro',
      type: 'text',
      content: `## Feltarbeid i geografi

Feltarbeid er en sentral metode i geografi. Ved å dra ut i felten kan du studere geografiske fenomener direkte, samle inn data og teste teorier mot virkeligheten.

**Hvorfor feltarbeid?**
- Direkte observasjon av fenomener
- Samle primærdata (data du samler selv)
- Teste hypoteser og teorier
- Koble teori til praksis
- Utvikle geografiske ferdigheter

**Typer geografisk feltarbeid:**
- Naturgeografisk: Elvestudier, kystprosesser, vegetasjon
- Samfunnsgeografisk: Byundersøkelser, næringsanalyse
- Kartlegging: GPS-registrering, dronebilder
- Intervjuer og spørreundersøkelser

**Viktige prinsipper:**
- Grundig planlegging
- Systematisk datainnsamling
- Objektiv observasjon
- Etiske hensyn
- Sikkerhet`,
    },
    {
      id: 'geografi-1-25-def-1',
      type: 'definition',
      title: 'Planlegging av feltarbeid',
      content: `**1. Velg tema og problemstilling:**

*Krav til problemstilling:*
- Relevant for geografi
- Mulig å undersøke i praksis
- Avgrenset (ikke for omfattende)

*Eksempler:*
- "Hvordan har landbruk påvirket kulturlandskapet i bygda?"
- "Hvordan fordeler ulike virksomheter seg i sentrum?"
- "Hvordan påvirker elven landskapet ved ulike vannføring?"

**2. Forberedelse:**
- Les teori om temaet
- Studer kart og flybilder
- Lag hypoteser om hva du forventer å finne
- Planlegg rute og tidspunkt

**3. Metodevalg:**
- Hvilke data trenger du?
- Hvordan skal du samle dem?
- Hvilke verktøy trenger du?

**4. Praktisk planlegging:**
- Utstyr (kart, GPS, kamera, skrivesaker)
- Sikkerhet (klær, mat, kommunikasjon)
- Tillatelser hvis nødvendig
- Værforhold

**5. Etiske hensyn:**
- Respekter privat eiendom
- Spør om tillatelse til fotografering av personer
- Anonymiser personopplysninger
- Ikke forstyrr dyr eller ødelegg natur`,
    },
    {
      id: 'geografi-1-25-def-2',
      type: 'definition',
      title: 'Metoder for datainnsamling',
      content: `**Observasjon:**

*Systematisk observasjon:*
- Bruk observasjonsskjema
- Noter tid, sted, værforhold
- Beskriv objektivt (ikke tolkninger)
- Ta bilder som dokumentasjon

*Telling og registrering:*
- Trafikktelling
- Registrering av arealbruk
- Bygningsregistrering
- Vegetasjonskartlegging

**Målinger:**

*Naturgeografiske målinger:*
- Temperatur, nedbør
- Vannhastighet, vannføring
- Jordprøver, pH
- Helning, retning (kompass)

*Samfunnsgeografiske målinger:*
- Avstander og arealer
- Befolkningstetthet
- Servicetilgjengelighet

**Intervju og spørreundersøkelse:**

*Intervju:*
- Strukturert (faste spørsmål)
- Ustrukturert (åpen samtale)
- God for dybdeforståelse

*Spørreundersøkelse:*
- Mange respondenter
- Standardiserte spørsmål
- God for statistikk

**GPS og GIS:**
- Registrer punkter med koordinater
- Lag digitale kart
- Analyser romlige mønstre`,
    },
    {
      id: 'geografi-1-25-def-3',
      type: 'definition',
      title: 'Analyse og presentasjon',
      content: `**Bearbeiding av data:**

*Sortering og systematisering:*
- Organiser data i tabeller
- Sjekk for feil og mangler
- Grupper lignende data

*Statistisk analyse:*
- Gjennomsnitt og median
- Frekvenstabeller
- Prosentberegninger
- Sammenligning av grupper

**Visualisering:**

*Kart:*
- Temakart med symboler
- Koroplettkart (fargelagte områder)
- Punktkart

*Diagrammer:*
- Søylediagram (sammenligning)
- Linjediagram (endring over tid)
- Sektordiagram (fordeling)

*Bilder og foto:*
- Dokumentasjon av fenomener
- Før/etter-sammenligninger

**Rapport og presentasjon:**

*Struktur:*
1. Innledning (bakgrunn, problemstilling)
2. Metode (hvordan du samlet data)
3. Resultater (hva du fant)
4. Drøfting (hva betyr funnene)
5. Konklusjon (svar på problemstillingen)

*Tips:*
- Bruk geografisk fagspråk
- Vis data med kart og diagrammer
- Vær kritisk til egne funn
- Pek på mulige feilkilder`,
    },
    {
      id: 'geografi-1-25-example-1',
      type: 'example',
      title: 'Eksempel: Feltarbeid om bysentrum',
      problem: `Planlegg og gjennomfør et feltarbeid som undersøker: "Hvordan er ulike funksjoner fordelt i bysentrum?"`,
      solution: `**1. Planlegging:**

*Problemstilling:*
Hvordan er ulike funksjoner (butikker, kontorer, boliger, offentlige tjenester) fordelt i sentrum?

*Hypotese:*
- Butikker konsentrert i gågater
- Kontorer langs hovedgater
- Boliger i utkanten av sentrum

*Metode:*
- Kartlegging av bygningers funksjon
- Registreringsskjema med kategorier

**2. Gjennomføring:**

*Utstyr:*
- Basiskart over sentrum
- Registreringsskjema
- Fargeblyanter for kategorier
- Kamera

*Fremgangsmåte:*
1. Gå systematisk gjennom alle gater
2. Registrer hva hvert bygg brukes til
3. Bruk fargekoder på kartet
4. Ta bilder av typiske eksempler

**3. Analyse:**
- Tell antall av hver funksjon
- Beregn prosenter
- Lag temakart med fargekoder
- Sammenlign med hypotesen

**4. Konklusjon:**
Beskriv hovedmønsteret og forklar hvorfor funksjonene er fordelt slik (husleie, tilgjengelighet, historikk).`,
    },
    {
      id: 'geografi-1-25-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor feltarbeid er viktig i geografi, og beskriv forskjellen mellom primærdata og sekundærdata.',
        hints: ['Tenk på direkte observasjon vs. data andre har samlet'],
        solution: 'Feltarbeid er viktig fordi det gir direkte kontakt med geografiske fenomener, mulighet til å teste teorier mot virkeligheten, og utvikler geografiske ferdigheter. Primærdata er data du samler selv gjennom feltarbeid (målinger, observasjoner, intervjuer). Sekundærdata er data andre har samlet (statistikk, kart, rapporter). Primærdata gir kontroll over kvalitet og relevans, men krever mer arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-25-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en problemstilling for et geografisk feltarbeid i nærmiljøet ditt. Forklar hvorfor den er god og hvordan du vil undersøke den.',
        hints: ['Velg noe du kan observere, avgrenset og geografisk relevant'],
        solution: 'Eksempel: "Hvordan brukes uteområdene i nabolaget på ulike tidspunkt?" God fordi: Avgrenset (ett område), mulig å observere, geografisk (rom og bruk). Undersøkelse: 1) Velg observasjonspunkter, 2) Observer på ulike tidspunkt (morgen, ettermiddag, kveld, hverdag/helg), 3) Registrer antall personer og aktiviteter, 4) Lag kart og diagram. Konklusjon om bruksmønstre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-25-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv tre ulike metoder for datainnsamling i felt og forklar når hver metode egner seg.',
        hints: ['Tenk på observasjon, måling, intervju'],
        solution: 'Observasjon: Egner seg for å registrere synlige fenomener (arealbruk, trafikk, landformer). Systematisk med skjema. Måling: Egner seg for kvantitative data (temperatur, vannhastighet, avstander). Krever utstyr og nøyaktighet. Intervju/spørreskjema: Egner seg for å forstå menneskers oppfatninger og handlinger (hvorfor folk velger bosted, transportvaner). Intervju gir dybde, spørreskjema gir bredde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-25-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke feilkilder kan påvirke resultatene av et feltarbeid? Hvordan kan du redusere feilkildene?',
        hints: ['Tenk på observatør, tidspunkt, metode, representativitet'],
        solution: 'Feilkilder: 1) Observatørfeil (tolker ulikt), 2) Tidspunkt (resultater varierer med tid på døgnet/året), 3) Utvalg (ikke representativt), 4) Målefeil (unøyaktige instrumenter), 5) Påvirkning (respondenter svarer det de tror er forventet). Reduksjon: Bruk standardiserte skjemaer, gjenta målinger, velg representative tidspunkt, kalibrér utstyr, vær kritisk til egne funn, rapporter begrensninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-25-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-25-ex-5',
        number: '5',
        type: 'classic',
        task: 'Planlegg et komplett feltarbeid: Velg tema, lag problemstilling, beskriv metode, planlegg gjennomføring og forklar hvordan du vil presentere resultatene.',
        hints: ['Følg strukturen: tema, problemstilling, metode, utstyr, gjennomføring, analyse, presentasjon'],
        solution: 'Svar bør inneholde: 1) Tema og begrunnelse for valget. 2) Presis problemstilling. 3) Metode for datainnsamling (observasjon, måling, intervju). 4) Utstyrsliste. 5) Plan for gjennomføring (rute, tidspunkt, arbeidsfordeling). 6) Etiske hensyn og sikkerhet. 7) Plan for analyse (sortering, beregninger). 8) Presentasjonsform (rapport med kart og diagrammer).',
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
  CHAPTER_GEOGRAFI_11,
  CHAPTER_GEOGRAFI_12,
  CHAPTER_GEOGRAFI_13,
  CHAPTER_GEOGRAFI_14,
  CHAPTER_GEOGRAFI_15,
  CHAPTER_GEOGRAFI_16,
  CHAPTER_GEOGRAFI_17,
  CHAPTER_GEOGRAFI_18,
  CHAPTER_GEOGRAFI_19,
  CHAPTER_GEOGRAFI_20,
  CHAPTER_GEOGRAFI_21,
  CHAPTER_GEOGRAFI_22,
  CHAPTER_GEOGRAFI_23,
  CHAPTER_GEOGRAFI_24,
  CHAPTER_GEOGRAFI_25,
];
