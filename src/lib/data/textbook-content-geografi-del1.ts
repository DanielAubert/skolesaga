/**
 * Tekstbok innhold for Geografi VG1 - Del 1
 * Kapittel 1-5: Naturgeografi grunnlag
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
  estimatedMinutes: 75,
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
      id: 'geografi-1-1-text-historie',
      type: 'text',
      content: `## Kartets historie

Mennesker har laget kart i tusenvis av år. De eldste kjente kartene er babylonske leirtavler fra ca. 2300 f.Kr. som viser jordbruksarealer og irrigasjonskanaler.

**Antikken:**
Den greske geografen Eratosthenes beregnet jordens omkrets rundt 240 f.Kr. med forbausende nøyaktighet. Ptolemaios (ca. 150 e.Kr.) laget et verdenskart med et koordinatsystem basert på bredde- og lengdegrader.

**Middelalderen:**
I Europa dominerte religiøse verdenskart (mappae mundi) der Jerusalem var sentrum. Arabiske kartografer som al-Idrisi laget mer nøyaktige kart basert på reiser og observasjoner.

**Oppdagelsestiden:**
Gerardus Mercator utviklet i 1569 en kartprojeksjon som ble standard for sjøfart. Denne projeksjonen bevarer vinkler, men forvrenger arealer — Grønland ser like stort ut som Afrika, selv om Afrika er 14 ganger større.

**Moderne tid:**
Fra 1900-tallet revolusjonerte flybilder og senere satellitter kartleggingen. I dag kan vi oppdatere kart i sanntid med GPS og satellittdata.`,
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
      id: 'geografi-1-1-def-projeksjoner',
      type: 'definition',
      title: 'Kartprojeksjoner',
      content: `**Mercator-projeksjonen:**
Vinkelriktig (konform). Bevarer former lokalt, men forvrenger arealer sterkt mot polene. Brukes til sjøfart og navigasjon fordi rette linjer på kartet tilsvarer kurs med konstant kompassretning.

**Peters-projeksjonen:**
Arealriktig (ekvivalent). Viser landområdenes riktige størrelse i forhold til hverandre, men forvrenger former. Ofte brukt for å vise at utviklingsland er større enn Mercator gir inntrykk av.

**UTM (Universal Transverse Mercator):**
Deler jorden inn i 60 soner à 6 lengdegrader. Hvert område får sitt eget koordinatsystem. Brukes til topografiske kart i Norge.

**Stereografisk projeksjon:**
Brukes for polområdene. Bevarer vinkler men forvrenger avstander.

**Viktig poeng:** Det finnes ingen perfekt kartprojeksjon. Valg av projeksjon avhenger av formålet — navigasjon, arealberegning eller tematisk fremstilling.`,
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
      id: 'geografi-1-1-text-fjernanalyse',
      type: 'text',
      content: `## Fjernanalyse og satellittbilder

Fjernanalyse (remote sensing) er innsamling av informasjon om jordoverflaten uten fysisk kontakt. Satellitter og fly utstyrt med sensorer registrerer elektromagnetisk stråling reflektert eller sendt ut fra jordoverflaten.

**Typer satellittbilder:**
- **Optiske bilder:** Registrerer synlig lys og nærinfrarødt. Ligner vanlige fotografier. Begrenset av skydekke.
- **Radarbilder:** Sender ut og mottar mikrobølger. Fungerer gjennom skyer og i mørke. Brukes til å måle terreng og istykkelse.
- **Termiske bilder:** Registrerer varmestråling. Brukes til å kartlegge havtemperatur, byvarmeøyer og vulkanaktivitet.

**Bruksområder:**
- Overvåking av avskoging i Amazonas
- Kartlegging av issmelting i Arktis
- Tidlig varsling av tørke i landbruksområder
- Kartlegging av skader etter naturkatastrofer
- Planlegging av byutvikling

**Norske eksempler:**
Norsk Regnesentral og NIBIO bruker satellittdata for å overvåke skog, jordbruk og arealendringer i Norge. Norges vassdrags- og energidirektorat (NVE) bruker fjernanalyse for å kartlegge flom- og skredfare.`,
    },
    {
      id: 'geografi-1-1-def-gis-analyse',
      type: 'definition',
      title: 'GIS-analysemetoder',
      content: `**Bufferanalyse:**
Oppretter en sone (buffer) rundt et geografisk objekt. Eksempel: Finn alle boliger innenfor 500 meter fra en planlagt motorvei (støysone).

**Overlay-analyse:**
Legger flere kartlag oppå hverandre for å finne sammenhenger. Eksempel: Kombinere jordtype, helning og nedbør for å finne egnede jordbruksarealer.

**Nettverksanalyse:**
Analyserer forbindelser i nettverk (veier, rørledninger). Eksempel: Finn korteste rute mellom to steder, eller beregn kjøretid til nærmeste sykehus.

**Terrenganalyse:**
Beregner helning, eksposisjon og siktlinjer fra digitale høydemodeller. Brukes i arealplanlegging og skredvurdering.

**Romlig statistikk:**
Analyserer mønstre i romlig fordeling. Eksempel: Er sykdomstilfeller klynget i bestemte områder, eller tilfeldig fordelt?`,
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
      id: 'geografi-1-1-example-gis',
      type: 'example',
      title: 'Eksempel: GIS i praksis — plassering av ny skole',
      problem: `En kommune skal bygge en ny barneskole. Hvordan kan GIS brukes til å finne den beste plasseringen?`,
      solution: `**GIS-analyse for skoleplassering:**

1. **Samle kartlag:**
   - Befolkningsdata (hvor bor barn i skolealder?)
   - Eksisterende skoler og kapasitet
   - Veinett og gangavstand
   - Ledig kommunalt areal
   - Støysoner og forurensning

2. **Bufferanalyse:**
   - Finn områder innenfor 2 km gangavstand fra flest barn
   - Finn arealer utenfor støysoner fra motorveier

3. **Overlay-analyse:**
   - Kombiner alle kriteriene for å finne egnede områder
   - Fjern arealer med bratt terreng, flomfare eller vernestatus

4. **Nettverksanalyse:**
   - Beregn gangavstand for alle barn til de mulige tomtene
   - Vurder tilgjengelighet med kollektivtransport

5. **Resultat:**
   - Rangerte alternativer med kart og statistikk
   - Beslutningsgrunnlag for kommunestyret

**Konklusjon:** GIS gjør det mulig å ta kunnskapsbaserte beslutninger ved å analysere mange faktorer samtidig.`,
    },
    {
      id: 'geografi-1-1-tip-1',
      type: 'tip',
      title: 'Studietips: Kart og GIS',
      content: `**Praktisk øvelse:**
- Bruk norgeskart.no til å øve på karttolkning. Du kan velge ulike kartlag og målestokker.
- Google Earth lar deg utforske terreng i 3D og sammenligne satellittbilder over tid.
- QGIS er et gratis GIS-program du kan laste ned og eksperimentere med.

**Til eksamen:**
- Øv på å beregne avstander med målestokk — dette er en typisk eksamensoppgave.
- Forstå forskjellen mellom ulike kartprojeksjoner og når de brukes.
- Kunne forklare hva GIS er og gi konkrete brukseksempler.`,
    },
    {
      id: 'geografi-1-1-tip-2',
      type: 'tip',
      title: 'Digitale kartverktøy',
      content: `**Norgeskart.no:** Kartverkets offisielle karttjeneste med topografiske kart, flybilder og historiske kart. Gratis og detaljert.

**Google Earth:** Utforsking av hele kloden med satellittbilder, 3D-terreng og tidslinjer som viser endringer over tid.

**ArcGIS Online:** Profesjonelt GIS-verktøy med gratis studentlisens. Brukes i forskning og forvaltning.

**QGIS:** Gratis og åpent GIS-program. Godt alternativ for skoleprosjekter og feltarbeid.

**Gapminder:** Interaktive kart og grafer som viser global utvikling over tid. Nyttig for å sammenligne land.`,
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
    {
      id: 'geografi-1-1-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-1-mc-1',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — kartprojeksjoner og GIS:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken kartprojeksjon bevarer riktige vinkler og brukes til sjøfart?',
            solution: 'Mercator-projeksjonen',
            multipleChoiceOptions: ['Peters-projeksjonen', 'Mercator-projeksjonen', 'UTM-projeksjonen', 'Stereografisk projeksjon'],
          },
          {
            label: 'b',
            task: 'Hva er en bufferanalyse i GIS?',
            solution: 'Oppretter en sone rundt et objekt for å finne hva som ligger innenfor',
            multipleChoiceOptions: ['Oppretter en sone rundt et objekt for å finne hva som ligger innenfor', 'Lagrer data midlertidig i minnet', 'Sammenligner to kartvarianter', 'Fjerner feil fra datasett'],
          },
          {
            label: 'c',
            task: 'Hva betyr målestokk 1:50 000?',
            solution: '1 cm på kartet tilsvarer 500 meter i virkeligheten',
            multipleChoiceOptions: ['1 cm på kartet tilsvarer 50 meter i virkeligheten', '1 cm på kartet tilsvarer 500 meter i virkeligheten', '1 cm på kartet tilsvarer 5 km i virkeligheten', '1 cm på kartet tilsvarer 50 km i virkeligheten'],
          },
        ],
        solution: 'a) Mercator-projeksjonen, b) Oppretter en sone rundt et objekt, c) 1 cm = 500 m',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-1-mc-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-1-mc-2',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — fjernanalyse og karthistorie:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type satellittbilder kan se gjennom skyer?',
            solution: 'Radarbilder',
            multipleChoiceOptions: ['Optiske bilder', 'Radarbilder', 'Termiske bilder', 'Infrarøde bilder'],
          },
          {
            label: 'b',
            task: 'Hvem beregnet jordens omkrets med stor nøyaktighet allerede rundt 240 f.Kr.?',
            solution: 'Eratosthenes',
            multipleChoiceOptions: ['Ptolemaios', 'Eratosthenes', 'Mercator', 'Aristoteles'],
          },
          {
            label: 'c',
            task: 'Hva er GPS?',
            solution: 'Et satellittbasert system for posisjonsbestemmelse',
            multipleChoiceOptions: ['Et karttegningsprogram', 'Et satellittbasert system for posisjonsbestemmelse', 'En type kartprojeksjon', 'Et digitalt høydekart'],
          },
        ],
        solution: 'a) Radarbilder, b) Eratosthenes, c) Et satellittbasert system for posisjonsbestemmelse',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-1-mc-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-1-mc-3',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — kartlesing:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva viser tette høydekurver på et topografisk kart?',
            solution: 'Bratt terreng',
            multipleChoiceOptions: ['Flatt terreng', 'Bratt terreng', 'Skog', 'Tettbebyggelse'],
          },
          {
            label: 'b',
            task: 'Hvilket kartverktøy bruker overlay-analyse for å kombinere flere datatemaer?',
            solution: 'GIS',
            multipleChoiceOptions: ['Google Maps', 'GIS', 'GPS', 'Kompass'],
          },
        ],
        solution: 'a) Bratt terreng, b) GIS',
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
  estimatedMinutes: 75,
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
      id: 'geografi-1-2-text-bergarter',
      type: 'text',
      content: `## Bergarter og bergartssyklusen

Alle bergarter tilhører én av tre hovedgrupper, og de omdannes mellom gruppene i et kretsløp som kalles bergartssyklusen.

**Magmatiske bergarter (størkningsbergarter):**
Dannet når smeltet stein (magma) størkner. Deles i to:
- **Plutonske (dypbergarter):** Størknet langsomt dypt nede i jordskorpen. Store krystaller. Eksempel: granitt.
- **Vulkanske (dagbergarter):** Størknet raskt på jordoverflaten. Små krystaller eller glassaktig. Eksempel: basalt, obsidian.

**Sedimentære bergarter (avsetningsbergarter):**
Dannet av sammenpresset og sementert materiale (sedimenter). Kan inneholde fossiler. Eksempler: sandstein, kalkstein, leirskifer.

**Metamorfe bergarter (omdanningsbergarter):**
Dannet når eksisterende bergarter utsettes for høyt trykk og/eller temperatur uten å smelte fullstendig. Eksempler: gneis (av granitt), marmor (av kalkstein), skifer (av leirskifer).

**Bergartssyklusen:**
Magmatiske bergarter forvitres og eroderes → sedimenter avsettes og blir sedimentære bergarter → ved dyp begravelse omdannes de til metamorfe bergarter → ved enda høyere temperatur smelter de til magma → ny størkningsbergart dannes. Syklusen tar millioner av år.`,
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
      id: 'geografi-1-2-def-vulkaner',
      type: 'definition',
      title: 'Vulkantyper',
      content: `**Skjoldvulkan:**
Bred, slak vulkan med tyntflytende basaltisk lava. Ikke-eksplosive utbrudd. Eksempel: Mauna Loa (Hawaii), vulkaner på Island.

**Stratovulkan (sammensatt vulkan):**
Bratt, kjegleformet vulkan bygget av vekslende lag av lava og aske. Kan ha eksplosive utbrudd. Eksempel: Mount Fuji (Japan), Vesuvius (Italia).

**Kaldera:**
Stort, sirkelformet krater dannet når en vulkan kollapser etter et stort utbrudd. Eksempel: Yellowstone (USA), Santorini (Hellas).

**Ildringen (Ring of Fire):**
Sone rundt Stillehavet med intens vulkansk og seismisk aktivitet. Her ligger ca. 75% av verdens aktive vulkaner. Følger konvergerende plategrenser.`,
    },
    {
      id: 'geografi-1-2-def-jordskjelv',
      type: 'definition',
      title: 'Jordskjelv og seismologi',
      content: `**Jordskjelv:**
Plutselig frigjøring av energi i jordskorpen som forårsaker seismiske bølger. Skyldes spenningsoppbygging langs forkastninger.

**Episenter:** Punktet på jordoverflaten rett over jordskjelvets utspring (hyposenteret).

**Richterskalaen (momentmagnitude):**
Logaritmisk skala som måler jordskjelvets styrke. Hvert helt trinn er ca. 32 ganger mer energi. Skjelv over 7,0 er svært ødeleggende.

**Seismograf:** Instrument som registrerer jordskjelvbølger. Brukes til å bestemme styrke og lokalisering.

**Tsunami:**
Enorme havbølger utløst av undersjøiske jordskjelv, vulkanutbrudd eller undersjøiske skred. Kan krysse hele hav og nå kyster med ødeleggende kraft. Tsunamien i Det indiske hav (2004) drepte over 230 000 mennesker.`,
    },
    {
      id: 'geografi-1-2-text-forvitring',
      type: 'text',
      content: `## Forvitring

Forvitring er nedbrytning av bergarter på stedet, uten transport. Det finnes tre hovedtyper:

**Mekanisk (fysisk) forvitring:**
- **Frostsprengning:** Vann trenger inn i sprekker, fryser og utvider seg (9%). Sprengen berget over tid. Viktigst i norske fjell.
- **Rotsprengning:** Planterøtter vokser inn i sprekker og presser berget fra hverandre.
- **Temperaturforvitring:** Gjentatt oppvarming og avkjøling fører til at mineralene utvider og trekker seg sammen ulikt. Viktig i ørkener.

**Kjemisk forvitring:**
- **Oppløsning:** Vann løser opp mineraler. Kalkstein er spesielt utsatt — regnvann (svakt surt) løser opp CaCO₃. Danner grotter og karstlandskap.
- **Oksidasjon:** Jern i bergarter reagerer med oksygen og danner rust. Svekker bergarten.
- **Hydrolyse:** Vann reagerer med mineraler og omdanner dem. Feltspat i granitt omdannes til leirmineraler.

**Biologisk forvitring:**
Organismer bidrar til nedbrytning gjennom rotsprengning, syreproduksjon fra lav og moser, og gravende dyr.`,
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
      id: 'geografi-1-2-example-vulkan',
      type: 'example',
      title: 'Eksempel: Vulkanutbruddet på Eyjafjallajökull 2010',
      problem: `Hvorfor fikk vulkanutbruddet på Island så store konsekvenser for flytrafikken i Europa?`,
      solution: `**Hendelsesforløpet:**

1. **Utbruddet:** Eyjafjallajökull (stratovulkan under en isbre) hadde utbrudd i april 2010.

2. **Askeskyen:** Når varm lava møtte is, dannet det seg en enorm askesky med fine glasspartikler som steg 9 km opp i atmosfæren.

3. **Vindretningen:** Vestavindene førte askeskyen østover mot Europa.

4. **Konsekvenser for fly:** Vulkansk aske kan smelte i flymotorer og forårsake motorhavari. Over 100 000 flyavganger ble kansellert over 6 dager. Ca. 10 millioner passasjerer ble strandet.

5. **Økonomiske tap:** Anslagsvis 1,5-2,5 milliarder euro i tap for flyselskapene.

**Lærdom:** Selv en relativt liten vulkan kan ha globale konsekvenser gjennom atmosfærisk spredning. Episoden viste behovet for bedre beredskap og varslingssystemer.`,
    },
    {
      id: 'geografi-1-2-tip-1',
      type: 'tip',
      title: 'Studietips: Geologi',
      content: `**Husk sammenhengen:**
- Indre krefter **bygger opp** (vulkaner, fjell, jordskjelv)
- Ytre krefter **bryter ned** (forvitring, erosjon, sedimentasjon)
- Bergartssyklusen knytter alt sammen

**Til eksamen:**
- Kunne tegne og forklare plategrenser med eksempler
- Vite forskjellen mellom de tre bergartgruppene
- Kunne forklare fjorddannelse trinn for trinn`,
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
    {
      id: 'geografi-1-2-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-2-mc-1',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — bergarter og geologi:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken bergart dannes når magma størkner langsomt dypt i jordskorpen?',
            solution: 'Granitt',
            multipleChoiceOptions: ['Basalt', 'Granitt', 'Sandstein', 'Marmor'],
          },
          {
            label: 'b',
            task: 'Hva kalles prosessen der en tektonisk plate presses ned under en annen?',
            solution: 'Subduksjon',
            multipleChoiceOptions: ['Divergens', 'Subduksjon', 'Transformasjon', 'Konveksjon'],
          },
          {
            label: 'c',
            task: 'Hvilken type vulkan har en bred, slak form og tyntflytende lava?',
            solution: 'Skjoldvulkan',
            multipleChoiceOptions: ['Stratovulkan', 'Skjoldvulkan', 'Kaldera', 'Spaltevulkan'],
          },
        ],
        solution: 'a) Granitt, b) Subduksjon, c) Skjoldvulkan',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-2-mc-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-2-mc-2',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — forvitring og landformer:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er den viktigste formen for mekanisk forvitring i norske fjell?',
            solution: 'Frostsprengning',
            multipleChoiceOptions: ['Frostsprengning', 'Temperaturforvitring', 'Rotsprengning', 'Oksidasjon'],
          },
          {
            label: 'b',
            task: 'Hva het superkontinentet der alle landmasser var samlet for 200 millioner år siden?',
            solution: 'Pangea',
            multipleChoiceOptions: ['Gondwana', 'Laurasia', 'Pangea', 'Rodinia'],
          },
          {
            label: 'c',
            task: 'Hva dannes når kalkstein løses opp av svakt surt regnvann over lang tid?',
            solution: 'Karstlandskap med grotter',
            multipleChoiceOptions: ['Morener', 'Karstlandskap med grotter', 'U-daler', 'Sanddyner'],
          },
        ],
        solution: 'a) Frostsprengning, b) Pangea, c) Karstlandskap med grotter',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-2-mc-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-2-mc-3',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — platetektonikk:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor ligger ca. 75% av verdens aktive vulkaner?',
            solution: 'Rundt Stillehavet (Ildringen)',
            multipleChoiceOptions: ['I Europa', 'Rundt Stillehavet (Ildringen)', 'I Atlanterhavet', 'I Afrika'],
          },
          {
            label: 'b',
            task: 'Hva er den viktigste forskjellen mellom kontinentalskorpen og havskorpen?',
            solution: 'Kontinentalskorpen er tykkere og lettere, havskorpen er tynnere og tyngre',
            multipleChoiceOptions: ['Kontinentalskorpen er tykkere og lettere, havskorpen er tynnere og tyngre', 'De har samme tykkelse men ulikt materiale', 'Havskorpen er eldre enn kontinentalskorpen', 'Kontinentalskorpen har mer jern'],
          },
        ],
        solution: 'a) Rundt Stillehavet (Ildringen), b) Kontinentalskorpen er tykkere og lettere',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Vær, klima og klimasoner
// ============================================================================

export const CHAPTER_GEOGRAFI_3: TextbookChapter = {
  id: 'geografi-1-3',
  courseId: 'geografi',
  chapterNumber: '3',
  title: 'Vaer, klima og klimasoner',
  description: 'Forstå forskjellen mellom vaer og klima, og jordens klimasoner.',
  estimatedMinutes: 75,
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
      id: 'geografi-1-3-text-skytyper',
      type: 'text',
      content: `## Skytyper og nedbørsformer

Skyer dannes når fuktig luft stiger, avkjøles og vanndamp kondenserer på partikler i atmosfæren. Skytype og skyhøyde forteller mye om kommende vær.

**Høye skyer (over 6000 m):**
- **Cirrus:** Tynne, fjærlignende skyer av iskrystaller. Indikerer ofte fronter på vei.
- **Cirrostratus:** Tynt, hvitt slør som kan gi halo rundt solen. Varsler ofte nedbør innen 12-24 timer.

**Mellomhøye skyer (2000-6000 m):**
- **Altostratus:** Gråhvitt, jevnt skylag. Solen synes svakt gjennom. Ofte forløper for nedbør.
- **Altocumulus:** Hvite eller grå skyflekker i grupper. Kan varsle tordenvær om sommeren.

**Lave skyer (under 2000 m):**
- **Stratus:** Lavt, jevnt, grått skydekke. Gir ofte yr eller lett regn.
- **Nimbostratus:** Tykt, mørkt regnlag. Gir vedvarende nedbør.
- **Cumulus:** Hvite, blomkållignende skyer. Pent vær når de er små.
- **Cumulonimbus:** Mektige tårnskyer som kan nå 12-15 km høyde. Gir kraftig nedbør, lyn og torden.

**Nedbørsformer:**
- **Orografisk nedbør:** Luft presses opp over fjell, avkjøles og gir nedbør på vindsiden. Viktig i Vest-Norge.
- **Konvektiv nedbør:** Oppvarmet luft stiger raskt. Gir kraftige byger og tordenvær. Vanligst om sommeren.
- **Frontalnedbør:** Når kald og varm luft møtes langs en front. Langvarig, moderat nedbør.`,
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
      id: 'geografi-1-3-text-havsirkulasjon',
      type: 'text',
      content: `## Havsirkulasjon

Havstrømmene fungerer som et globalt transportsystem for varme og spiller en avgjørende rolle for klimaet.

**Overflatestrømmer:**
Drives primært av vindene. Coriolis-effekten avbøyer strømmene, og sammen med kontinentenes form dannes store sirkulære strømsystemer (gyrer). Golfstrømmen er den mest kjente og viktigste for Norge.

**Termohalin sirkulasjon (det globale transportbåndet):**
Et dyphavssystem drevet av forskjeller i temperatur (thermo) og saltinnhold (halin). Kaldt, salt vann synker ned i Nord-Atlanteren og strømmer langs havbunnen mot sør. Varmere overflatevann strømmer nordover for å erstatte det. Denne sirkelen tar ca. 1000 år.

**El Niño og La Niña:**
- **El Niño:** Unormal oppvarming av havoverflaten i det østlige Stillehavet. Oppstår med 2-7 års mellomrom. Gir tørke i Australia og Sørøst-Asia, kraftig regn i Sør-Amerika, og påvirker globale værmønstre.
- **La Niña:** Det motsatte — kaldere havoverflate i det østlige Stillehavet. Forsterker normale værmønstre.
- **Konsekvenser:** Disse syklusene påvirker fiskeriene, jordbruk og ekstremvær globalt.

**Golfstrømmens betydning for Norge:**
Golfstrømmen (og dens forlengelse, Den nordatlantiske strømmen) transporterer enorme mengder varme fra tropene til Nord-Europa. Dette er hovedgrunnen til at norskekysten er isfri helt opp til Nordkapp, mens Sibir på samme breddegrad har permafrost.`,
    },
    {
      id: 'geografi-1-3-def-koppen',
      type: 'definition',
      title: 'Köppens klimaklassifisering',
      content: `**Hva er Köppen-systemet?**
Verdens mest brukte klimaklassifisering, utviklet av Wladimir Köppen i 1884 og revidert flere ganger. Baseres på temperatur og nedbør, da dette bestemmer vegetasjonen.

**Hovedgruppene:**
- **A — Tropisk:** Alle måneder over 18°C. Inndeles i regnskogsklima (Af), monsunklima (Am) og savanneklima (Aw).
- **B — Tørt (arid):** Fordampningen overstiger nedbøren. Ørken (BW) og steppe (BS).
- **C — Temperert:** Varmeste måned over 10°C, kaldeste mellom -3°C og 18°C. Norge vest: Cfb (oseanisk).
- **D — Kontinentalt:** Varmeste over 10°C, kaldeste under -3°C. Innlands-Norge: Dfb/Dfc.
- **E — Polart:** Varmeste måned under 10°C. Tundra (ET) og isklima (EF).

**Klimadiagrammer:**
Grafisk fremstilling av gjennomsnittlig temperatur og nedbør for hver måned. Temperatur vises som kurve, nedbør som søyler. Brukes til å bestemme klimatype.`,
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
      id: 'geografi-1-3-example-klimadiagram',
      type: 'example',
      title: 'Eksempel: Tolke et klimadiagram',
      problem: `Et klimadiagram viser: Varmeste måned 22°C (juli), kaldeste måned -5°C (januar). Nedbør jevnt fordelt 40-60 mm/mnd. Hva slags klima er dette?`,
      solution: `**Analyse steg for steg:**

1. **Temperaturspennet:** 22°C - (-5°C) = 27°C forskjell mellom varmeste og kaldeste måned → stort årsspenn → innlandsklima.

2. **Kaldeste måned under -3°C** → Ikke temperert (C), men kontinentalt (D) etter Köppen.

3. **Varmeste måned over 10°C** → Bekrefter D-klima (ikke polart).

4. **Nedbøren er jevnt fordelt** → Ingen tørr sesong → tilleggsbokstav 'f'.

5. **Varmeste måned under 22°C... nei, 22°C** → Akkurat på grensen. Med varm sommer → 'b' (Dfb).

**Svar:** Kontinentalt klima med varm sommer (Dfb). Typisk for innlandet i Sør-Norge, Sverige og Finland, samt store deler av Øst-Europa.`,
    },
    {
      id: 'geografi-1-3-tip-1',
      type: 'tip',
      title: 'Eksamenstips: Vær og klima',
      content: `**Vanlige feil på eksamen:**
- Forveksle vær (korttid) med klima (langtid)
- Glemme at Coriolis-effekten virker motsatt på sørlige halvkule
- Ikke forklare **hvorfor** det er forskjell mellom kyst- og innlandsklima

**Slik leser du klimadiagrammer:**
1. Se på temperaturkurven — identifiser årstider
2. Se på nedbørssøylene — finn tørre og våte perioder
3. Sjekk om nedbør og temperatur samvarierer
4. Bestem klimatype ut fra Köppen-kriteriene`,
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
    {
      id: 'geografi-1-3-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-3-mc-1',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — vær og klima:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er El Niño?',
            solution: 'Unormal oppvarming av havoverflaten i det østlige Stillehavet',
            multipleChoiceOptions: ['En vindtype i Middelhavet', 'Unormal oppvarming av havoverflaten i det østlige Stillehavet', 'En type tropisk storm', 'En havstrøm langs Afrikas kyst'],
          },
          {
            label: 'b',
            task: 'Hvilken skytype varsler kraftig nedbør, lyn og torden?',
            solution: 'Cumulonimbus',
            multipleChoiceOptions: ['Cirrus', 'Stratus', 'Cumulonimbus', 'Altostratus'],
          },
          {
            label: 'c',
            task: 'Hva kalles nedbør som dannes når luft presses opp over fjell?',
            solution: 'Orografisk nedbør',
            multipleChoiceOptions: ['Konvektiv nedbør', 'Frontalnedbør', 'Orografisk nedbør', 'Syklonnedbør'],
          },
        ],
        solution: 'a) Unormal oppvarming i Stillehavet, b) Cumulonimbus, c) Orografisk nedbør',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-3-mc-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-3-mc-2',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — klimasoner og sirkulasjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva driver den termohaline sirkulasjonen i havet?',
            solution: 'Forskjeller i temperatur og saltinnhold',
            multipleChoiceOptions: ['Vindkraft', 'Forskjeller i temperatur og saltinnhold', 'Tidevannskrefter', 'Jordens magnetfelt'],
          },
          {
            label: 'b',
            task: 'I Köppens klimaklassifisering, hva betyr bokstaven D?',
            solution: 'Kontinentalt klima',
            multipleChoiceOptions: ['Tropisk klima', 'Tørt klima', 'Temperert klima', 'Kontinentalt klima'],
          },
          {
            label: 'c',
            task: 'Hva er Hadley-cellen?',
            solution: 'En atmosfærisk sirkulasjonscelle mellom ekvator og ca. 30° bredde',
            multipleChoiceOptions: ['En type sky', 'En atmosfærisk sirkulasjonscelle mellom ekvator og ca. 30° bredde', 'En havstrøm i Stillehavet', 'Et mål på luftfuktighet'],
          },
        ],
        solution: 'a) Temperatur og saltinnhold, b) Kontinentalt klima, c) Sirkulasjonscelle mellom ekvator og 30°',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-3-mc-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-3-mc-3',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — Norges klima:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye synker temperaturen gjennomsnittlig per 100 meters høydeøkning?',
            solution: 'Ca. 0,6°C',
            multipleChoiceOptions: ['Ca. 0,2°C', 'Ca. 0,6°C', 'Ca. 1,0°C', 'Ca. 2,0°C'],
          },
          {
            label: 'b',
            task: 'Hvilket vindsystem er viktigst for klimaet i Norge?',
            solution: 'Vestavindsbeltet',
            multipleChoiceOptions: ['Passatvindene', 'Vestavindsbeltet', 'Monsunvindene', 'Polarøstligheter'],
          },
        ],
        solution: 'a) Ca. 0,6°C, b) Vestavindsbeltet',
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
  estimatedMinutes: 80,
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
      id: 'geografi-1-4-text-historisk',
      type: 'text',
      content: `## Historiske klimaendringer

Jordens klima har variert kraftig gjennom geologisk tid. Å forstå disse naturlige variasjonene er viktig for å vurdere dagens klimaendringer.

**Istidene:**
De siste 2,6 millioner årene (kvartærtiden) har jorden vekslet mellom istider (glasialer) og varmeperioder (interglasialer) i sykluser på ca. 100 000 år. Disse syklusene drives av Milankovitch-sykluser — små variasjoner i jordens bane og aksehelling.

**Middelalderens varmeperiode (ca. 900-1300):**
En relativt varm periode i Nord-Atlanteren. Vikingene koloniserte Grønland og dyrket korn. Temperaturen var trolig 0,5-1°C over gjennomsnittet.

**Den lille istiden (ca. 1300-1850):**
Kaldere periode med fremrykkende breer, dårlige avlinger og hungersnød i Europa. Temperaturen var ca. 1°C lavere enn i dag.

**Isborkjerner:**
Ved å bore dypt ned i innlandsisen på Grønland og Antarktis kan forskere analysere luftbobler fanget i isen. Dette gir informasjon om atmosfærens sammensetning og temperatur hundretusenvis av år tilbake.

**Viktig poeng:** CO₂-nivået i atmosfæren er nå høyere enn på minst 800 000 år, ifølge data fra isborkjerner.`,
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
      id: 'geografi-1-4-def-ipcc',
      type: 'definition',
      title: 'IPCC-scenarier',
      content: `**IPCC (Intergovernmental Panel on Climate Change):**
FNs klimapanel samler og vurderer forskning om klimaendringer. Består av tusenvis av forskere fra hele verden.

**SSP-scenarier (Shared Socioeconomic Pathways):**
IPCCs scenarier for fremtidige utslipp og oppvarming:

- **SSP1-1.9:** Bærekraftig utvikling. Netto nullutslipp rundt 2050. Oppvarming ca. 1,5°C.
- **SSP1-2.6:** Grønt skifte. Betydelige utslippskutt. Oppvarming ca. 1,8°C.
- **SSP2-4.5:** Middelvei. Moderate tiltak. Oppvarming ca. 2,7°C.
- **SSP3-7.0:** Regional rivalitet. Lite samarbeid. Oppvarming ca. 3,6°C.
- **SSP5-8.5:** Fossildriven utvikling. Sterk vekst i utslipp. Oppvarming ca. 4,4°C.

**Vippepunkter:**
Terskler der klimaendringene kan bli selvforsterkende og irreversible. Eksempler: kollaps av Grønlandsisen, opptining av permafrost, død av Amazonas-regnskogen. Det er usikkerhet om nøyaktig hvor disse tersklene ligger.`,
    },
    {
      id: 'geografi-1-4-text-klimapolitikk',
      type: 'text',
      content: `## Klimapolitikk og klimatilpasning

**Internasjonale avtaler:**
- **Kyoto-protokollen (1997):** Første bindende avtale om utslippskutt. Bare industriland forpliktet. Begrenset effekt.
- **Parisavtalen (2015):** Alle land setter egne utslippsmål (NDC). Mål: Godt under 2°C, helst 1,5°C. Skjerpes hvert 5. år.
- **COP-møter:** Årlige FN-klimatoppmøter der land forhandler om tiltak.

**Utslippsreduksjon (mitigasjon):**
- Overgang til fornybar energi
- Energieffektivisering
- Karbonfangst og -lagring (CCS)
- Redusert avskoging
- Endring av transportvaner

**Klimatilpasning (adaptasjon):**
- Flomvern og overvannshåndtering
- Tørkeresistente avlinger
- Flytting av bosetting fra utsatte områder
- Styrket beredskap for ekstremvær

**Debatt om tilnærming:**
Noen mener hovedfokus bør være rask utslippsreduksjon, andre argumenterer for at tilpasning og teknologiutvikling er viktigere fordi konsekvensene allerede er underveis uansett. De fleste fagfolk mener begge deler er nødvendig.`,
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
      id: 'geografi-1-4-tip-1',
      type: 'tip',
      title: 'Eksamenstips: Klimaendringer',
      content: `**Drøftingsoppgaver om klima:**
Vis at du kjenner ulike perspektiver:
- Vitenskapelig konsensus (IPCC) vs. usikkerhetsmomenter
- Utslippsreduksjon vs. tilpasning
- Rike vs. fattige lands ansvar
- Kortsiktige kostnader vs. langsiktige konsekvenser

**Viktige begreper å kunne:**
- Naturlig vs. forsterket drivhuseffekt
- Tilbakekoblingsmekanismer (positiv og negativ)
- Parisavtalen og dens mål
- Forskjellen mellom mitigasjon og adaptasjon`,
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
    {
      id: 'geografi-1-4-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-4-mc-1',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — klimaendringer:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva ville jordens gjennomsnittstemperatur vært uten den naturlige drivhuseffekten?',
            solution: '-18°C',
            multipleChoiceOptions: ['+5°C', '0°C', '-18°C', '-40°C'],
          },
          {
            label: 'b',
            task: 'Hvilken klimagass har sterkest oppvarmingseffekt per molekyl?',
            solution: 'Metan (CH₄)',
            multipleChoiceOptions: ['Karbondioksid (CO₂)', 'Metan (CH₄)', 'Oksygen (O₂)', 'Nitrogen (N₂)'],
          },
          {
            label: 'c',
            task: 'Hva er IPCCs rolle?',
            solution: 'Samle og vurdere forskning om klimaendringer',
            multipleChoiceOptions: ['Vedta klimapolitikk', 'Samle og vurdere forskning om klimaendringer', 'Sette utslippsgrenser for land', 'Drive klimaforskning'],
          },
        ],
        solution: 'a) -18°C, b) Metan, c) Samle og vurdere forskning',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-4-mc-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-4-mc-2',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — klimapolitikk og tilpasning:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er målet i Parisavtalen?',
            solution: 'Begrense oppvarmingen til godt under 2°C',
            multipleChoiceOptions: ['Stoppe alle utslipp innen 2030', 'Begrense oppvarmingen til godt under 2°C', 'Forby fossil energi', 'Redusere utslipp med 10%'],
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom mitigasjon og adaptasjon?',
            solution: 'Mitigasjon reduserer utslipp, adaptasjon tilpasser seg konsekvensene',
            multipleChoiceOptions: ['Mitigasjon reduserer utslipp, adaptasjon tilpasser seg konsekvensene', 'Det er ingen forskjell', 'Mitigasjon er internasjonalt, adaptasjon er lokalt', 'Mitigasjon er billigst'],
          },
          {
            label: 'c',
            task: 'Hvilken historisk periode kalles «Den lille istiden»?',
            solution: 'Ca. 1300-1850',
            multipleChoiceOptions: ['Ca. 500-900', 'Ca. 1300-1850', 'Ca. 1900-1950', 'Ca. 10 000 f.Kr.'],
          },
        ],
        solution: 'a) Under 2°C, b) Mitigasjon = utslipp, adaptasjon = tilpasning, c) Ca. 1300-1850',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-4-mc-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-4-mc-3',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — klimascenarier:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er et vippepunkt i klimasammenheng?',
            solution: 'En terskel der endringene blir selvforsterkende og irreversible',
            multipleChoiceOptions: ['Det punktet der klimaet er varmest', 'En terskel der endringene blir selvforsterkende og irreversible', 'Tidspunktet for maksimale utslipp', 'Temperaturen der is smelter'],
          },
          {
            label: 'b',
            task: 'Hvorfor varmes Arktis opp raskere enn resten av verden?',
            solution: 'På grunn av is-albedo-tilbakekoblingen',
            multipleChoiceOptions: ['Fordi det er mer forurensning der', 'På grunn av is-albedo-tilbakekoblingen', 'Fordi solen skinner mer', 'Fordi det er færre trær'],
          },
        ],
        solution: 'a) Terskel for selvforsterkende endringer, b) Is-albedo-tilbakekoblingen',
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
  estimatedMinutes: 75,
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
      id: 'geografi-1-5-text-fordeling',
      type: 'text',
      content: `## Befolkningsfordeling

Verdens befolkning er svært ujevnt fordelt. Noen områder er tettpakket, andre er nesten ubebodd.

**De mest folkerike områdene:**
- Øst-Asia (Kina, Japan, Korea) — ca. 1,5 milliarder
- Sør-Asia (India, Pakistan, Bangladesh) — ca. 2 milliarder
- Europa — ca. 750 millioner
- Sørøst-Asia — ca. 700 millioner

**Faktorer som bestemmer bosetting:**
- **Klima:** De fleste bor i tempererte og subtropiske soner
- **Vann:** Floddalene i Ganges, Nil og Yangtze er tettest befolket
- **Terreng:** Lavland og kyster foretrekkes fremfor fjell og ørken
- **Jord:** Fruktbar jord tiltrekker jordbruksbefolkning
- **Historie og økonomi:** Gamle sivilisasjoner og moderne byer skaper konsentrasjon

**Befolkningstetthet:**
- Monaco: ca. 26 000 per km² (tettest)
- Mongolia: ca. 2 per km² (mest grisgrendt)
- Norge: ca. 15 per km² (men svært ujevnt fordelt)

**FN-prognoser:**
FN anslår at verdens befolkning vil nå en topp rundt 10,4 milliarder i 2080-årene og deretter sakte synke. Veksten kommer nesten utelukkende i Afrika sør for Sahara. Mange land i Europa og Øst-Asia opplever allerede befolkningsnedgang.`,
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
      id: 'geografi-1-5-def-politikk',
      type: 'definition',
      title: 'Befolkningspolitikk',
      content: `**Antinatalistisk politikk (begrense fødselstall):**
- **Kinas ettbarnspolitikk (1979-2015):** Begrenset de fleste familier til ett barn. Bøter, sosial kontroll, i noen tilfeller tvang. Bremset veksten men skapte skjev kjønnsfordeling og aldrende befolkning. Nå opphevet — Kina oppfordrer til tre barn.
- **Indias steriliseringsprogram (1970-tallet):** Kontroversielt program med tvungen sterilisering. Avbrutt etter motstand.

**Pronatalistisk politikk (øke fødselstall):**
- **Frankrike:** Generøs barnepolitikk med lang fødselspermisjon, barnetrygd og subsidierte barnehager. Har bidratt til høyere fruktbarhet enn de fleste europeiske land.
- **Ungarn:** Tilbyr skatteletter og lån til barnefamilier.
- **Sør-Korea:** Bruker milliarder på tiltak for å øke fødselsraten, men fruktbarheten fortsetter å synke (under 1,0).

**Debatt:** Det er uenighet om hvor effektive slike tiltak er. Noen mener økonomiske insentiver har begrenset effekt på fødselstall, og at kulturelle og sosiale endringer er viktigere.`,
    },
    {
      id: 'geografi-1-5-text-barekraft',
      type: 'text',
      content: `## Befolkning og bærekraft

Forholdet mellom befolkningsstørrelse og bærekraft er komplisert og omdiskutert.

**Bæreevne (carrying capacity):**
Det maksimale antall individer et område kan opprettholde over tid uten å ødelegge ressursgrunnlaget. For mennesker avhenger dette av teknologi, forbruksnivå og fordeling.

**Ulike perspektiver:**
- **Malthusiansk syn:** Thomas Malthus (1798) mente at befolkningen vokser raskere enn matproduksjonen og at hungersnød, sykdom og krig er naturlige korrektiver. Neomalthusianere i dag bekymrer seg for overbefolkning.
- **Boserup-perspektivet:** Ester Boserup mente at befolkningsvekst driver innovasjon — når flere munner skal mettes, finner mennesker nye løsninger. Den grønne revolusjonen støtter dette synet.
- **Forbruksperspektivet:** Problemet er ikke antall mennesker alene, men forbruksnivået. En nordmann har ca. 10 ganger større karbonfotavtrykk enn en person i Bangladesh.

**Demografisk dividende:**
Når et land har stor andel yrkesaktive og færre barn og eldre (midtfasen av den demografiske overgangen), kan det gi økonomisk vekst. Mange asiatiske land har dratt nytte av dette.`,
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
      id: 'geografi-1-5-tip-1',
      type: 'tip',
      title: 'Studietips: Demografi',
      content: `**Forstå modellen:**
Den demografiske overgangen er en sentral modell i geografi. Øv på å plassere land i riktig fase og forklare hva som kjennetegner overgangen mellom fasene.

**Til eksamen:**
- Kunne tegne og forklare en befolkningspyramide
- Vite forskjellen mellom fruktbarhetstall, fødselsrate og naturlig tilvekst
- Drøfte sammenhengen mellom utvikling og fruktbarhet

**Kobling til kapittel 16:**
I kapittel 16 går vi dypere inn i kvantitativ demografi med beregninger og kritisk vurdering av den demografiske overgangen.`,
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
    {
      id: 'geografi-1-5-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-5-mc-1',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — demografi:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er reproduksjonsnivået for fruktbarhetstallet?',
            solution: 'Ca. 2,1 barn per kvinne',
            multipleChoiceOptions: ['Ca. 1,0 barn per kvinne', 'Ca. 2,1 barn per kvinne', 'Ca. 3,0 barn per kvinne', 'Ca. 4,0 barn per kvinne'],
          },
          {
            label: 'b',
            task: 'I hvilken fase av den demografiske overgangen er befolkningsveksten raskest?',
            solution: 'Fase 2',
            multipleChoiceOptions: ['Fase 1', 'Fase 2', 'Fase 3', 'Fase 4'],
          },
          {
            label: 'c',
            task: 'Hva kjennetegner en befolkningspyramide i fase 4?',
            solution: 'Smal bunn og bred midtdel — urneform',
            multipleChoiceOptions: ['Bred bunn og smal topp — pyramideform', 'Smal bunn og bred midtdel — urneform', 'Lik bredde hele veien — søyleform', 'Bred topp og smal bunn — trekantform'],
          },
        ],
        solution: 'a) Ca. 2,1, b) Fase 2, c) Urneform',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-5-mc-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-5-mc-2',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — befolkningspolitikk:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket land innførte ettbarnspolitikk i 1979?',
            solution: 'Kina',
            multipleChoiceOptions: ['India', 'Kina', 'Japan', 'Indonesia'],
          },
          {
            label: 'b',
            task: 'Hva menes med demografisk dividende?',
            solution: 'Økonomisk vekst som følge av stor andel yrkesaktive i befolkningen',
            multipleChoiceOptions: ['Utbytte fra pensjonsfond', 'Økonomisk vekst som følge av stor andel yrkesaktive i befolkningen', 'Overskudd av matproduksjon', 'Inntekter fra innvandring'],
          },
          {
            label: 'c',
            task: 'Hvor forventes nesten all befolkningsvekst å skje fram mot 2100?',
            solution: 'Afrika sør for Sahara',
            multipleChoiceOptions: ['Europa', 'Nord-Amerika', 'Afrika sør for Sahara', 'Øst-Asia'],
          },
        ],
        solution: 'a) Kina, b) Økonomisk vekst fra stor yrkesaktiv andel, c) Afrika sør for Sahara',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-5-mc-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-5-mc-3',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — befolkning og bærekraft:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem mente at befolkningsvekst driver innovasjon og nye løsninger?',
            solution: 'Ester Boserup',
            multipleChoiceOptions: ['Thomas Malthus', 'Ester Boserup', 'Karl Marx', 'Adam Smith'],
          },
          {
            label: 'b',
            task: 'Hva er Norges fruktbarhetstall omtrent i dag?',
            solution: 'Ca. 1,4',
            multipleChoiceOptions: ['Ca. 0,8', 'Ca. 1,4', 'Ca. 2,1', 'Ca. 2,8'],
          },
        ],
        solution: 'a) Ester Boserup, b) Ca. 1,4',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 1
// ============================================================================

export const GEOGRAFI_CHAPTERS_DEL1: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_1,
  CHAPTER_GEOGRAFI_2,
  CHAPTER_GEOGRAFI_3,
  CHAPTER_GEOGRAFI_4,
  CHAPTER_GEOGRAFI_5,
];
