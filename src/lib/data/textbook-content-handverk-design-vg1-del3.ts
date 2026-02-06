/**
 * Håndverk, design og produktutvikling VG1 - Del 3: Tradisjoner og kulturarv
 *
 * Dekker LK20 læreplan for Håndverk, design og produktutvikling på VG1
 * Kapitler 3.1-3.7: Tradisjoner og kulturarv
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Norske håndverkstradisjoner
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_3_1: TextbookChapter = {
  id: 'handverk-design-vg1-3-1',
  courseId: 'handverk-design-vg1',
  chapterNumber: '3.1',
  title: 'Norske håndverkstradisjoner',
  description: 'Utforsking av norske håndverkstradisjoner som rosemaling, treskjæring, sølvsmie og bunadsarbeid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere og anvende tradisjonelle teknikker for å gjenskape tradisjonelle håndverksprodukter',
  ],
  content: [
    {
      id: 'handverk-design-vg1-3-1-intro',
      type: 'text',
      content: `Norge har en rik håndverkstradisjon som strekker seg flere hundre år tilbake i tid. Gjennom generasjoner har håndverkere utviklet teknikker og uttrykk som er unikt norske. I dette kapittelet utforsker vi fire sentrale håndverkstradisjoner: rosemaling, treskjæring, sølvsmie og bunadsarbeid. Disse tradisjonene bærer med seg kulturell identitet og forteller historier om hvordan folk levde og uttrykte seg.`,
    },
    {
      id: 'handverk-design-vg1-3-1-def-1',
      type: 'definition',
      title: 'Rosemaling',
      content: `Rosemaling er en dekorativ malingstradisjon som utviklet seg i Norge fra 1700-tallet. Den kjennetegnes av stiliserte blomster, blader og ranker malt med pensel. Ulike distrikter utviklet egne stiler, som Telemark, Hallingdal og Rogaland.`,
    },
    {
      id: 'handverk-design-vg1-3-1-text-1',
      type: 'text',
      content: `**Rosemaling - blomsterspråk på tre**

Rosemalingen blomstret opp i bygde-Norge på 1700- og 1800-tallet. Omreisende malere dekorerte innredning, møbler og bruksgjenstander med fargerike motiver.

**Regionale stiler**:
- **Telemark**: Asymmetriske komposisjoner med C- og S-former, rike farger
- **Hallingdal**: Symmetriske mønstre, kraftige farger, stiliserte blomster
- **Rogaland**: Geometriske elementer, roser i profil, enklere uttrykk
- **Os-stil**: Karakteristisk rødlig bakgrunn, elegante ranker
- **Valdres**: Blanding av Telemark og Hallingdal, egne særtrekk

**Teknikker**:
- Undermalte bakgrunner i en grunnfarge
- Oppbygging av motiver i lag
- Bruk av rundpensel for roser og blader
- Flatpensel for ranker og linjer
- Konturering og skygger for dybde`,
    },
    {
      id: 'handverk-design-vg1-3-1-def-2',
      type: 'definition',
      title: 'Treskjæring',
      content: `Treskjæring er kunsten å forme og dekorere tre med kniver og huggejern. Norsk treskjæring har røtter tilbake til vikingtiden og inkluderer teknikker som flatskurd, relieffskjæring og karveskurd.`,
    },
    {
      id: 'handverk-design-vg1-3-1-text-2',
      type: 'text',
      content: `**Treskjæring - fra viking til i dag**

Treskjæring har vært praktisert i Norge i over tusen år. Fra vikingtidens drageornamentikk til 1800-tallets brukskunst har teknikken utviklet seg, men grunnprinsippene består.

**Hovedteknikker**:
- **Karveskurd**: Geometriske mønstre skåret med kniv, vanlig på mangletrær
- **Flatskurd**: Motiver skåret i relieff med flat bakgrunn
- **Relieffskjæring**: Tredimensjonale motiver som heves fra bakgrunnen
- **Gjennombrutt skurd**: Motiver der bakgrunnen er fjernet helt

**Tradisjonelle motiver**:
- Akantusranker (fra 1700-tallet)
- Drager og fabeldyr
- Geometriske mønstre
- Stiliserte planter og dyr
- Religiøse symboler

**Verktøy**:
- Tollekniv for detaljarbeid
- Huggejern i ulike bredder og profiler
- Klubbe for grovt arbeid
- Slipestein og lærstropp for skarphet`,
    },
    {
      id: 'handverk-design-vg1-3-1-text-3',
      type: 'text',
      content: `**Sølvsmie - edelt håndverk**

Norsk sølvsmedkunst har tradisjoner tilbake til middelalderen. Sølvsmeder laget smykker, beltespenner, knapper og draktsølv som var viktige statusmarkører.

**Teknikker i sølvsmedkunst**:
- **Filigran**: Tynne sølvtråder formet til mønstre
- **Drivning**: Hamring av sølvplater over former
- **Siselering**: Dekorering med punser og hamre
- **Støping**: Smelting og forming i støpeformer
- **Lodding**: Sammenføyning av deler med sølvlodd

**Typiske produkter**:
- Sølje (brosjer til bunad)
- Halsringer og anheng
- Beltespenner og knapper
- Skjeer og bestikk
- Drikkebeger og kanner

Mange sølvsmedtradisjoner lever videre i dag, særlig knyttet til bunadsproduksjon.`,
    },
    {
      id: 'handverk-design-vg1-3-1-text-4',
      type: 'text',
      content: `**Bunadsarbeid - kulturarv i tekstil**

Bunaden er Norges nasjonaldrakt og representerer et sammensatt håndverk med mange teknikker.

**Tekstile teknikker i bunadsarbeid**:
- **Veving**: Bunadsstoffer veves ofte i ull eller lin
- **Broderi**: Plattsøm, korssting, hardangersøm, hvitsøm
- **Perling**: Dekorative perlemønstre på bringeduk og lue
- **Nålebinding**: Eldgammel teknikk for votter og sokker
- **Sying**: Tradisjonelle sømmoner og sammenføyninger

**Regionale særtrekk**:
Hver region har sin bunad med spesifikke farger, mønstre og teknikker. Hardangerbunaden er kjent for hardangersøm, mens Setesdalsbunaden har karakteristisk rosesaum.

**Bunadsarbeid i dag**:
Mange håndverkere spesialiserer seg på bunadsarbeid og holder tradisjonene levende. Det kreves stor kunnskap om lokale tradisjoner og teknikker.`,
    },
    {
      id: 'handverk-design-vg1-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av en rosemalt kiste',
      problem: 'Hvordan kan du identifisere hvilken rosemalingsstil en gammel kiste er dekorert i?',
      solution: `**Analysemetode for rosemaling:**

1. **Se på komposisjonen**
   - Symmetrisk = trolig Hallingdal
   - Asymmetrisk med C-former = trolig Telemark

2. **Undersøk blomstermotivene**
   - Roser sett ovenfra = Telemark
   - Roser i profil = Rogaland
   - Stiliserte tulipaner = Hallingdal

3. **Vurder fargebruken**
   - Rødlig bakgrunn = Os-stil
   - Blå bakgrunn med sterke farger = Hallingdal
   - Mer dempede farger = eldre arbeider

4. **Se på detaljene**
   - Rike skygger og lyseffekter = sen Telemark
   - Geometriske elementer = Rogaland
   - Elegante ranker med mange krøller = Os

5. **Sjekk for signatur**
   - Mange rosemalere signerte arbeidene sine`,
    },
    {
      id: 'handverk-design-vg1-3-1-tip-1',
      type: 'tip',
      title: 'Lær av de gamle mestrene',
      content: `Besøk lokale folkemuseer for å studere originale arbeider. Ta bilder og skisser av mønstre og teknikker. Mange museer har også kurs i tradisjonelle håndverk.`,
    },
    {
      id: 'handverk-design-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken rosemalingsstil kjennetegnes av asymmetriske komposisjoner med C- og S-former?',
        options: [
          { id: 'a', text: 'Hallingdal-stilen', isCorrect: false },
          { id: 'b', text: 'Telemark-stilen', isCorrect: true },
          { id: 'c', text: 'Rogaland-stilen', isCorrect: false },
          { id: 'd', text: 'Os-stilen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Telemark-stilen kjennetegnes av asymmetriske komposisjoner med karakteristiske C- og S-former, rike farger og roser sett ovenfra.',
      },
    },
    {
      id: 'handverk-design-vg1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv tre ulike teknikker som brukes i norsk treskjæring.',
        solution: 'Tre teknikker i norsk treskjæring er: 1) Karveskurd - geometriske mønstre skåret med kniv, vanlig på mangletrær. 2) Flatskurd - motiver skåret i relieff med flat bakgrunn. 3) Relieffskjæring - tredimensjonale motiver som heves fra bakgrunnen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er filigran, og hvordan brukes det i sølvsmedarbeid?',
        solution: 'Filigran er en sølvsmedteknikk der tynne sølvtråder formes til dekorative mønstre. Trådene bøyes, vris og loddes sammen til intrikate design. Teknikken brukes ofte i tradisjonelle søjer (brosjer) og andre bunadssølv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken broderitektnikk er spesielt knyttet til Hardangerbunaden?',
        options: [
          { id: 'a', text: 'Korssting', isCorrect: false },
          { id: 'b', text: 'Plattsøm', isCorrect: false },
          { id: 'c', text: 'Hardangersøm', isCorrect: true },
          { id: 'd', text: 'Rosesaum', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Hardangersøm er spesielt knyttet til Hardangerbunaden. Dette er en hvitsømsteknikk med uttrukne tråder og geometriske mønstre.',
      },
    },
    {
      id: 'handverk-design-vg1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en norsk håndverkstradisjon og lag en enkel skisse eller prøve inspirert av tradisjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken tradisjon valgte du, og hvorfor?',
            solution: 'Svar varierer. Eleven bør begrunne valget basert på interesse eller tilgang til materialer.',
          },
          {
            label: 'b',
            task: 'Hvilke elementer fra tradisjonen har du brukt?',
            solution: 'Eleven bør identifisere konkrete elementer som motiver, farger eller teknikker.',
          },
        ],
        solution: 'Oppgaven vurderes basert på forståelse av den valgte tradisjonen og evne til å anvende karakteristiske elementer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Rosemaling', definition: 'Norsk dekorativ malingstradisjon med stiliserte blomster og ranker' },
    { term: 'Treskjæring', definition: 'Kunsten å forme og dekorere tre med kniver og huggejern' },
    { term: 'Karveskurd', definition: 'Treskjæringsteknikk med geometriske mønstre' },
    { term: 'Filigran', definition: 'Sølvsmedteknikk med tynne sølvtråder formet til mønstre' },
    { term: 'Sølje', definition: 'Tradisjonell brosje i sølv brukt til bunad' },
    { term: 'Hardangersøm', definition: 'Hvitsømsteknikk med uttrukne tråder og geometriske mønstre' },
  ],
};

// ============================================================================
// Kapittel 3.2: Samisk duodji og urfolkshåndverk
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_3_2: TextbookChapter = {
  id: 'handverk-design-vg1-3-2',
  courseId: 'handverk-design-vg1',
  chapterNumber: '3.2',
  title: 'Samisk duodji og urfolkshåndverk',
  description: 'Innføring i samisk duodji med fokus på materialer, teknikker og kulturell betydning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'undersøke og bruke design, kulturuttrykk, stilhistorie og lokale tradisjoner innenfor tradisjonshåndverk som inspirasjon til egen produktutvikling',
  ],
  content: [
    {
      id: 'handverk-design-vg1-3-2-intro',
      type: 'text',
      content: `Duodji er samisk håndverk og kunsthåndverk med røtter tusenvis av år tilbake i tid. Det representerer en levende tradisjon som er tett knyttet til samisk kultur, livsform og identitet. Å forstå duodji handler ikke bare om teknikker og materialer, men også om å respektere den kulturelle konteksten håndverket springer ut fra.`,
    },
    {
      id: 'handverk-design-vg1-3-2-def-1',
      type: 'definition',
      title: 'Duodji',
      content: `Duodji er det samiske ordet for håndverk og kunsthåndverk. Det omfatter all tradisjonell samisk produksjon av bruksgjenstander, klær og dekorative objekter. Duodji er mer enn bare håndverk - det er en kunnskapsform som bærer kulturell identitet.`,
    },
    {
      id: 'handverk-design-vg1-3-2-text-1',
      type: 'text',
      content: `**Materialer fra naturen**

Tradisjonell duodji bruker materialer fra det nordlige naturmiljøet. Materialene høstes bærekraftig og med respekt for naturen.

**Reinsdyr**:
- **Skinn**: Til klær, vesker, sko (skaller)
- **Bein og horn**: Til kniver, smykker, verktøy
- **Sener**: Til sying og binding

**Tre**:
- **Bjørk**: Til kopper, fat, skeider
- **Bjørkeris**: Til kurver og beholdere
- **Rotter**: Røtter til fletting og sying

**Andre materialer**:
- **Tinn og sølv**: Til dekorasjon og smykker
- **Klede og vadmel**: Til kofter og luer
- **Perler**: Til dekorative bånd og mønstre`,
    },
    {
      id: 'handverk-design-vg1-3-2-def-2',
      type: 'definition',
      title: 'Gákti',
      content: `Gákti er den samiske koften, det tradisjonelle plagget som varierer i snitt, farger og dekorasjon mellom ulike samiske områder. Gáktien forteller om bærerens geografiske tilhørighet og kan også vise sivilstand og familietilknytning.`,
    },
    {
      id: 'handverk-design-vg1-3-2-text-2',
      type: 'text',
      content: `**Teknikker i duodji**

**Sying og broderi**:
- Tradisjonell sying med reinsener
- Tinntrådbroderi på lær og klede
- Perlbroderi med glasperler
- Applikasjon med klede i ulike farger

**Trearbeid**:
- Knivmaking med reinhorn og tre
- Uthuling av kopper og fat
- Bending og forming av never
- Kurv- og bøttemaking

**Skinnarbeid**:
- Garving av reinskinn
- Sying av skaller (samiske sko)
- Beltespenner og vesker
- Pelsarbeid og pynting

**Smykker og dekor**:
- Tinntrådsbrodering
- Filigranarbeid i sølv
- Beinrissing (dekorering av bein og horn)
- Vevde bånd til dekorasjon`,
    },
    {
      id: 'handverk-design-vg1-3-2-text-3',
      type: 'text',
      content: `**Kulturell respekt og etikk**

Når vi arbeider med eller blir inspirert av samisk duodji, er det viktig å vise kulturell respekt.

**Viktige prinsipper**:
- **Kunnskap**: Lær om tradisjonene før du bruker elementer fra dem
- **Respekt**: Forstå at duodji har dyp kulturell betydning
- **Samtykke**: Ved direkte kopiering, søk kontakt med samiske miljøer
- **Kontekst**: Ikke bruk hellige eller seremonielle elementer ukritisk
- **Kreditering**: Anerkjenn inspirasjonskilder

**Hva er greit?**:
- La deg inspirere av teknikker og materialer
- Lær om duodji for å forstå kulturarven
- Støtt samiske håndverkere ved å kjøpe originalt håndverk

**Hva bør unngås?**:
- Kopiering av tradisjonelle mønstre uten forståelse
- Masseproduksjon av "samisk-inspirerte" produkter
- Bruk av gákti-elementer i moteplagg
- Framstilling som om du lager autentisk duodji`,
    },
    {
      id: 'handverk-design-vg1-3-2-text-4',
      type: 'text',
      content: `**Duodji i dag**

Samisk duodji er en levende tradisjon som stadig utvikles. Mange samtidskunstnere og håndverkere arbeider med å fornye tradisjonen samtidig som de bevarer kjerneverdier.

**Utdanning**:
Samisk høgskole og andre institusjoner tilbyr utdanning i duodji. Her lærer studenter tradisjonelle teknikker kombinert med samtidsuttrykk.

**Duodjimerket**:
Sámiid Duodji-merket er et kvalitetsmerke som garanterer at produktet er laget av en samisk håndverker etter tradisjonelle prinsipper.

**Urfolkshåndverk globalt**:
Samisk duodji deler mange trekk med andre urfolks håndverkstradisjoner - nær tilknytning til naturen, bruk av lokale materialer, og håndverk som kulturell identitetsbærer.`,
    },
    {
      id: 'handverk-design-vg1-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Respektfull inspirasjon fra duodji',
      problem: 'Hvordan kan du la deg inspirere av samisk duodji på en respektfull måte i et designprosjekt?',
      solution: `**Respektfull tilnærming:**

1. **Studer tradisjonen**
   - Les om duodjis historie og betydning
   - Besøk museer med samiske samlinger
   - Lær om materialbruk og teknikker

2. **Forstå konteksten**
   - Hvilke elementer er hverdagslige vs. hellige?
   - Hva kommuniserer ulike mønstre og farger?
   - Hvordan brukes gjenstandene tradisjonelt?

3. **Velg inspirasjonsnivå**
   - Teknikker (f.eks. fletteteknikker) - ofte uproblematisk
   - Fargekombinasjoner - kan inspirere
   - Spesifikke mønstre - krever forsiktighet

4. **Dokumenter og krediter**
   - Skriv i prosjektbeskrivelsen hva som inspirerte deg
   - Ikke kall produktet "samisk" eller "duodji"
   - Vær ærlig om at dette er din tolkning

5. **Når du er usikker**
   - Søk råd fra samiske miljøer eller institusjoner
   - Velg å ikke bruke elementet hvis du er i tvil`,
    },
    {
      id: 'handverk-design-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr ordet duodji, og hva omfatter det?',
        solution: 'Duodji er det samiske ordet for håndverk og kunsthåndverk. Det omfatter all tradisjonell samisk produksjon av bruksgjenstander, klær og dekorative objekter. Duodji er mer enn håndverk - det er en kunnskapsform som bærer kulturell identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilke materialer fra reinsdyr brukes tradisjonelt i duodji?',
        options: [
          { id: 'a', text: 'Kun skinn til klær', isCorrect: false },
          { id: 'b', text: 'Skinn, bein, horn og sener', isCorrect: true },
          { id: 'c', text: 'Kun horn til smykker', isCorrect: false },
          { id: 'd', text: 'Skinn og ull', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Fra reinsdyret brukes skinn til klær og vesker, bein og horn til kniver og smykker, og sener til sying og binding. Hele dyret utnyttes i tråd med tradisjonell bærekraftig bruk.',
      },
    },
    {
      id: 'handverk-design-vg1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva gákti er og hvilken betydning den har.',
        solution: 'Gákti er den samiske koften, det tradisjonelle plagget som varierer i snitt, farger og dekorasjon mellom ulike samiske områder. Gáktien er viktig fordi den forteller om bærerens geografiske tilhørighet og kan også vise sivilstand og familietilknytning. Den er en viktig kulturell identitetsmarkør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv tre viktige prinsipper for kulturell respekt når man arbeider med eller henter inspirasjon fra duodji.',
        solution: 'Tre viktige prinsipper er: 1) Kunnskap - lær om tradisjonene før du bruker elementer fra dem. 2) Respekt - forstå at duodji har dyp kulturell betydning utover det rent estetiske. 3) Kontekst - ikke bruk hellige eller seremonielle elementer ukritisk, og anerkjenn alltid inspirasjonskilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Duodji', definition: 'Samisk håndverk og kunsthåndverk som bærer kulturell identitet' },
    { term: 'Gákti', definition: 'Samisk kofte som varierer mellom regioner og viser tilhørighet' },
    { term: 'Tinntrådbroderi', definition: 'Samisk broderitektikk med tynn tinntråd på lær eller klede' },
    { term: 'Skaller', definition: 'Tradisjonelle samiske sko laget av reinskinn' },
    { term: 'Sámiid Duodji', definition: 'Kvalitetsmerke for autentisk samisk håndverk' },
  ],
};

// ============================================================================
// Kapittel 3.3: Tradisjonelle teknikker i harde materialer
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_3_3: TextbookChapter = {
  id: 'handverk-design-vg1-3-3',
  courseId: 'handverk-design-vg1',
  chapterNumber: '3.3',
  title: 'Tradisjonelle teknikker i harde materialer',
  description: 'Praktisk opplæring i tradisjonelle håndverksteknikker for bearbeiding av tre, metall og stein.',
  estimatedMinutes: 65,
  competenceGoals: [
    'reflektere og anvende tradisjonelle teknikker for å gjenskape tradisjonelle håndverksprodukter',
  ],
  content: [
    {
      id: 'handverk-design-vg1-3-3-intro',
      type: 'text',
      content: `Tradisjonelle håndverksteknikker for harde materialer har utviklet seg over århundrer. Snekring, smiing og steinarbeid er håndverk der verktøy, teknikker og materialkunnskap går i arv fra mester til lærling. I dette kapittelet utforsker vi de grunnleggende teknikkene som fortsatt er relevante i moderne håndverk.`,
    },
    {
      id: 'handverk-design-vg1-3-3-def-1',
      type: 'definition',
      title: 'Tradisjonell snekring',
      content: `Tradisjonell snekring innebærer å bearbeide og sammenføye tre med håndverktøy og klassiske teknikker som sink, slissing og tapping. Fokuset ligger på håndverkskunst, materialforståelse og varige konstruksjoner.`,
    },
    {
      id: 'handverk-design-vg1-3-3-text-1',
      type: 'text',
      content: `**Tradisjonell snekring**

Før elektriske verktøy kom, utviklet snekkere teknikker for å jobbe presist og effektivt med håndverktøy.

**Grunnleggende håndverktøy**:
- **Høvel**: For å glatte og forme treoverflater
- **Stemmejern**: For å hugge ut fordypninger og former
- **Sag**: Buesag, ryggsag og svansesag for ulike kutt
- **Borr**: Naverbor og drillbor for hull
- **Vinkel og vater**: For presis oppmåling

**Tradisjonelle sammenføyninger**:
- **Sinking**: Tannede sammenføyninger for hjørner
- **Tapp og hull**: Sterk sammenføyning for rammer
- **Slissing**: Spor for å føye deler sammen
- **Gratsammenføyning**: Skrå spor for bordplater
- **Kilesammenføyning**: Tapper som kiles fast

Disse teknikkene skaper sterke forbindelser uten skruer og spiker.`,
    },
    {
      id: 'handverk-design-vg1-3-3-def-2',
      type: 'definition',
      title: 'Smiing',
      content: `Smiing er kunsten å forme metall ved hjelp av varme og hamring. Smeden varmer opp metallet til det blir glødende og formbart, for så å hamre det til ønsket form på en ambolt.`,
    },
    {
      id: 'handverk-design-vg1-3-3-text-2',
      type: 'text',
      content: `**Tradisjonell smiing**

Smeden var en sentral håndverker i tidligere tider. Alt fra verktøy og våpen til beslag og kunstgjenstander ble laget i smia.

**Grunnleggende utstyr**:
- **Esse**: Ildstedet der metallet varmes opp
- **Blåsebelg**: For å øke temperaturen i essen
- **Ambolt**: Arbeidsflaten der metallet formes
- **Hammere**: Ulike typer for forming og finish
- **Tenger**: For å holde varmt metall
- **Kjølebad**: Vann eller olje for herding

**Grunnleggende teknikker**:
- **Uttrekking**: Gjøre metallet lengre og tynnere
- **Stuking**: Gjøre metallet kortere og tykkere
- **Bøying**: Forme vinkler og kurver
- **Vridning**: Dekorativ vriding av stenger
- **Sveising**: Slå sammen to oppvarmede metallstykker
- **Punching**: Lage hull i metallet

**Temperaturkontroll**:
Fargen på glødende metall forteller smeden temperaturen. Fra kirsebærrødt til hvitglødende - ulike temperaturer egner seg til ulike teknikker.`,
    },
    {
      id: 'handverk-design-vg1-3-3-text-3',
      type: 'text',
      content: `**Tradisjonelt steinarbeid**

Steinarbeid er et av menneskehetens eldste håndverk. Fra enkle redskaper til detaljerte skulpturer har stein vært et viktig materiale.

**Typer steinarbeid**:
- **Murerarbeid**: Bygging med naturstein og tilhogd stein
- **Steinhugging**: Forming av bygningsstein og dekor
- **Skulpturarbeid**: Kunstnerisk forming av stein
- **Gravering**: Innskrifter og mønstre i stein

**Tradisjonelle verktøy**:
- **Meisel og klubbe**: Grunnleggende for all steinforming
- **Spett og kiler**: For å splitte stein
- **Filer og rasper**: For finere bearbeiding
- **Slip**: For polering og glatthet

**Teknikker**:
- **Punktteknikk**: Mange små slag som fjerner materiale gradvis
- **Kilehogst**: Bruk av kiler for å splitte langs naturlige linjer
- **Polering**: Gradvis finere slipemidler for blank overflate

Steinarbeid krever tålmodighet og forståelse for materialets struktur.`,
    },
    {
      id: 'handverk-design-vg1-3-3-text-4',
      type: 'text',
      content: `**Sikkerhet ved arbeid med harde materialer**

Tradisjonelt håndverk krever respekt for materialer og verktøy.

**Generelle sikkerhetsregler**:
- Bruk alltid verneutstyr tilpasset arbeidet
- Hold verktøy skarpe og i god stand
- Arbeid i rolige, kontrollerte bevegelser
- Sikre arbeidsstykket før bearbeiding
- Vær oppmerksom på omgivelsene

**Spesielt for snekring**:
- Skarpe verktøy er tryggere enn sløve
- Kutt alltid bort fra kroppen
- Sikre arbeidsstykket i benkehake eller skrustikke

**Spesielt for smiing**:
- Bruk alltid vernebriller og skinnforkle
- Anta at alt metall er varmt
- God ventilasjon er viktig
- Slukk essen forsvarlig etter bruk

**Spesielt for steinarbeid**:
- Vernebriller og støvmaske er påkrevd
- Vær oppmerksom på steinfliser
- Løft riktig - stein er tungt`,
    },
    {
      id: 'handverk-design-vg1-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Lage en enkel sinksammenføyning',
      problem: 'Hvordan lager du en tradisjonell sinksammenføyning for et skuffehjørne?',
      solution: `**Framgangsmåte for sinking:**

1. **Mål og merk opp**
   - Merk tykkelsen på det andre treet på enden
   - Del opp i like store deler for antall sinker
   - Tegn opp sinkene med gradvinkel (1:6 for løvtre, 1:8 for bartre)

2. **Sag sinkene**
   - Sag langs merkene ned til streken
   - Hold saga loddrett
   - Sag på avfallssiden av streken

3. **Fjern avfallstre**
   - Bruk stemmejern til å hugge ut mellom sinkene
   - Arbeid fra begge sider mot midten
   - Rens opp bunnen nøye

4. **Overfør til motstykket**
   - Legg det ferdige stykket på enden av det andre
   - Tegn rundt med en spiss blyant
   - Merk tykkelsen som før

5. **Sag og hugg motstykket**
   - Sag de skrå sidene
   - Hugg ut med stemmejern
   - Test passformen underveis

6. **Monter og lim**
   - Sammenføyningen skal være stram
   - Påfør lim og slå sammen
   - Høvl jevnt når limet har tørket`,
    },
    {
      id: 'handverk-design-vg1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn fem tradisjonelle håndverktøy som brukes i snekring, og forklar kort hva de brukes til.',
        solution: '1) Høvel - for å glatte og forme treoverflater. 2) Stemmejern - for å hugge ut fordypninger og former. 3) Ryggsag - for presise kutt. 4) Naverbor - for å bore hull. 5) Vinkel - for å sikre rette vinkler ved oppmåling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er en esse i smiing?',
        options: [
          { id: 'a', text: 'En type hammer', isCorrect: false },
          { id: 'b', text: 'Ildstedet der metallet varmes opp', isCorrect: true },
          { id: 'c', text: 'En tang for å holde metall', isCorrect: false },
          { id: 'd', text: 'Et vannbad for kjøling', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Essen er ildstedet i smia der metallet varmes opp til det blir glødende og formbart. Blåsebelgen brukes for å øke temperaturen.',
      },
    },
    {
      id: 'handverk-design-vg1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv tre grunnleggende teknikker i smiing.',
        solution: 'Tre grunnleggende smiteknikker er: 1) Uttrekking - å gjøre metallet lengre og tynnere ved å hamre det ut. 2) Stuking - å gjøre metallet kortere og tykkere ved å hamre på enden. 3) Bøying - å forme vinkler og kurver i metallet mens det er varmt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom en tapp-og-hull-sammenføyning og en sinksammenføyning?',
        solution: 'Tapp-og-hull er en sammenføyning der en tap stikkes inn i et hull, ofte brukt i rammekonstruksjoner. Sinking er en tannede sammenføyning der to deler griper inn i hverandre som fingre, vanlig brukt i hjørner på skuffer og kasser. Sinking gir større limflate og er synlig som dekorativt element.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken farge har metall når det er i riktig temperatur for smiing?',
        options: [
          { id: 'a', text: 'Svart', isCorrect: false },
          { id: 'b', text: 'Sølvfarget', isCorrect: false },
          { id: 'c', text: 'Glødende rødt til oransje', isCorrect: true },
          { id: 'd', text: 'Blått', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Metall som er klart for smiing er glødende rødt til oransje (ca. 800-1000°C). Fargen forteller smeden temperaturen - fra kirsebærrødt til hvitglødende representerer stigende temperaturer.',
      },
    },
    {
      id: 'handverk-design-vg1-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'List opp tre viktige sikkerhetsregler for arbeid med harde materialer.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg én regel for hvert materialområde: snekring, smiing og steinarbeid.',
            solution: 'Snekring: Kutt alltid bort fra kroppen med skarpe verktøy. Smiing: Bruk alltid vernebriller og anta at alt metall er varmt. Steinarbeid: Bruk vernebriller og støvmaske for å beskytte mot fliser og støv.',
          },
        ],
        solution: 'Viktige sikkerhetsregler inkluderer: bruk alltid verneutstyr tilpasset arbeidet, hold verktøy i god stand, og sikre arbeidsstykket før bearbeiding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sinking', definition: 'Tannede sammenføyninger i tre for hjørner' },
    { term: 'Tapp og hull', definition: 'Tresammenføyning der en tap stikkes inn i et hull' },
    { term: 'Esse', definition: 'Ildstedet i smia der metallet varmes opp' },
    { term: 'Ambolt', definition: 'Arbeidsflaten der smeden former metallet' },
    { term: 'Uttrekking', definition: 'Smiteknikk for å gjøre metall lengre og tynnere' },
    { term: 'Punktteknikk', definition: 'Steinhuggerteknikk med mange små slag' },
  ],
};

// ============================================================================
// Kapittel 3.4: Tradisjonelle teknikker i myke materialer
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_3_4: TextbookChapter = {
  id: 'handverk-design-vg1-3-4',
  courseId: 'handverk-design-vg1',
  chapterNumber: '3.4',
  title: 'Tradisjonelle teknikker i myke materialer',
  description: 'Innføring i tradisjonelle tekstile teknikker som veving, nålebinding, toving og broderi.',
  estimatedMinutes: 60,
  competenceGoals: [
    'reflektere og anvende tradisjonelle teknikker for å gjenskape tradisjonelle håndverksprodukter',
  ],
  content: [
    {
      id: 'handverk-design-vg1-3-4-intro',
      type: 'text',
      content: `Tekstile håndverkstradisjoner har vært essensielle for overlevelse og kulturell uttrykk gjennom historien. Veving, nålebinding, toving og broderi er teknikker som har kledd og varmet mennesker i tusenvis av år. I dette kapittelet lærer du om disse tradisjonelle teknikkene og deres kulturelle betydning.`,
    },
    {
      id: 'handverk-design-vg1-3-4-def-1',
      type: 'definition',
      title: 'Veving',
      content: `Veving er en tekstil teknikk der tråder (innslag) føres over og under andre tråder (renning) som er spent opp i en vevstol. Mønster skapes gjennom variasjon i trådkrysningene, farger og materialer.`,
    },
    {
      id: 'handverk-design-vg1-3-4-text-1',
      type: 'text',
      content: `**Veving - tråd blir til stoff**

Veving er en av de eldste tekstile teknikkene. I Norge har veving vært sentralt for produksjon av klær, tepper og brukstekstiler.

**Grunnleggende vevbegreper**:
- **Renning**: De vertikale trådene som spennes opp i vevstolen
- **Innslag**: De horisontale trådene som veves gjennom renningen
- **Skaft**: Rammer som løfter ulike renningstråder
- **Skyttel**: Verktøy som fører innslagstråden gjennom
- **Reed (slaginn)**: Kammer som slår innslaget på plass

**Tradisjonelle vevteknikker**:
- **Lerretsbinding**: Enkleste binding, innslag over-under-over
- **Kypertbinding**: Diagonale linjer i stoffet
- **Åklebinding**: Norsk teknikk for tykke tepper
- **Billedvev**: Vevde bilder og mønstre
- **Flamskvev**: Tradisjonell nordisk teknikk med geometriske mønstre

**Tradisjonelle produkter**:
Åklær (tepper), grindvev, bunadsstoffer, løpere og duker.`,
    },
    {
      id: 'handverk-design-vg1-3-4-def-2',
      type: 'definition',
      title: 'Nålebinding',
      content: `Nålebinding er en eldgammel tekstil teknikk der man lager stoff ved å føre en nål med kort tråd gjennom løkker. Teknikken er eldre enn både strikking og hekling, og skaper et tett, elastisk stoff.`,
    },
    {
      id: 'handverk-design-vg1-3-4-text-2',
      type: 'text',
      content: `**Nålebinding - vikingtidenes strikking**

Nålebinding er en teknikk som var utbredt i vikingtiden og middelalderen, før strikkingen overtok. Teknikken gir et varmt, tett og vannavstøtende stoff.

**Kjennetegn ved nålebinding**:
- Bruker korte tråder som skjøtes sammen
- Kan ikke raknes opp som strikking
- Elastisk og formfast
- Tettere enn strikking

**Grunnleggende teknikk**:
1. Lag en startløkke
2. Før nålen gjennom løkker i bestemte mønstre
3. Stram og fortsett
4. Skjøt på ny tråd når den gamle tar slutt

**Tradisjonelle stikktyper**:
- **Oslo-stikk**: Vanlig norsk variant
- **Korgen-stikk**: Finsk tradisjon
- **Mammen-stikk**: Fra danske vikingfunn

**Tradisjonelle produkter**:
Votter, sokker, luer, vesker og belter. Særlig votter i nålebinding er kjent for å være varme og slitesterke.`,
    },
    {
      id: 'handverk-design-vg1-3-4-text-3',
      type: 'text',
      content: `**Toving - fra ull til filt**

Toving er prosessen der løse ullfibre eller strikkede/vevde ullstoffer blir til filt eller krymper og fortettes.

**Typer toving**:
- **Våttoving**: Ull, varmt vann og såpe gnis til fibrene filtes
- **Tørrtoving**: Nålefilt med spesielle nåler
- **Krympetoving**: Strikkede eller vevde produkter toves

**Prosessen ved våttoving**:
1. Legg ut ullfibrene i lag
2. Fuktig med varmt såpevann
3. Gni forsiktig til fibrene begynner å feste seg
4. Øk trykket gradvis
5. Skyll og form
6. Tørk

**Tradisjonelle bruksområder**:
- **Vadmel**: Tovet ullstoff til klær og tepper
- **Filtsåler**: Til sko og støvler
- **Torvluer**: Tradisjonelle hodeplagg
- **Filtdekorasjoner**: Blomster og ornamenter

Toving gjør ullen vannavstøtende og vindtett.`,
    },
    {
      id: 'handverk-design-vg1-3-4-text-4',
      type: 'text',
      content: `**Broderi - dekor med nål og tråd**

Broderi er kunsten å dekorere stoff med nål og tråd. Norge har mange lokale brodertradisjoner knyttet til bunader og hverdagsplagg.

**Norske broderitektikker**:
- **Plattsøm**: Tette sting som dekker flater
- **Korssting**: Kryssede sting som danner mønster
- **Hardangersøm**: Uttrukne tråder og geometriske mønstre
- **Smøygsøm**: Løpesting som følger stoffets tråder
- **Rosesaum**: Setesdalens karakteristiske blomsterbroderi

**Verktøy og materialer**:
- **Broderirammer**: Holder stoffet stramt
- **Broderinåler**: Ulike tykkelser og spisser
- **Broderitråd**: Moulinégarn, perlgarn, silke, ull
- **Stoff**: Linlerret, bomull, ullstoff

**Mønsteroverføring**:
Tradisjonelt ble mønstre overført ved å tegne direkte på stoffet, bruke mønsterpapir med huller, eller strikke/veve inn mønsteret.

Broderi har vært både nødvendig håndverk for merking av tekstiler og dekorativt kunstuttrykk.`,
    },
    {
      id: 'handverk-design-vg1-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Komme i gang med nålebinding',
      problem: 'Hvordan starter du med nålebinding og lager de første stingene?',
      solution: `**Kom i gang med nålebinding:**

**Du trenger:**
- Nålebindingsnål (flat nål med stort øye)
- Ullgarn (myk ull er enklest)
- Ca. 1,5 meter tråd

**Steg for steg (Oslo-stikk):**

1. **Lag startløkke**
   - Lag en løkke i enden av tråden
   - Denne blir grunnlaget for første rad

2. **Første sting**
   - Stikk nålen gjennom startløkken bakfra
   - Dra gjennom, men la det bli en ny løkke
   - Stram forsiktig

3. **Bygg videre**
   - Stikk nålen gjennom den forrige løkken
   - Fang også tråden fra to løkker tilbake
   - Dra gjennom og stram

4. **Fortsett rundt**
   - Gjenta til du har ønsket bredde
   - Arbeid i spiraler for votter
   - Eller i rader for flate stykker

5. **Skjøte tråd**
   - Når tråden tar slutt, fest ny med en knute
   - Eller vri trådene sammen

**Tips:**
- Bruk kontrastfarget tråd til øving
- Hold jevn stramhet
- Se instruksjonsvideoer for å forstå bevegelsene`,
    },
    {
      id: 'handverk-design-vg1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom renning og innslag i veving.',
        solution: 'Renning er de vertikale trådene som spennes opp i vevstolen før vevingen starter. Innslag er de horisontale trådene som veves gjennom renningen, over og under de ulike renningstrådene, for å skape stoffet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva skiller nålebinding fra strikking?',
        options: [
          { id: 'a', text: 'Nålebinding bruker lange tråder', isCorrect: false },
          { id: 'b', text: 'Nålebinding kan raknes opp lett', isCorrect: false },
          { id: 'c', text: 'Nålebinding bruker korte tråder og kan ikke raknes', isCorrect: true },
          { id: 'd', text: 'Nålebinding gir løsere stoff enn strikking', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Nålebinding bruker korte tråder som skjøtes sammen, og stoffet kan ikke raknes opp som strikking. Det gir et tettere og mer elastisk stoff.',
      },
    },
    {
      id: 'handverk-design-vg1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv prosessen ved våttoving.',
        solution: 'Ved våttoving legges ullfibre ut i lag, fuktes med varmt såpevann, og gnis forsiktig til fibrene begynner å feste seg i hverandre. Trykket økes gradvis mens man fortsetter å arbeide, inntil ullen har blitt til sammenhengende filt. Deretter skylles produktet og formes før det tørkes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken broderitektikk er spesielt knyttet til Setesdal?',
        options: [
          { id: 'a', text: 'Hardangersøm', isCorrect: false },
          { id: 'b', text: 'Korssting', isCorrect: false },
          { id: 'c', text: 'Rosesaum', isCorrect: true },
          { id: 'd', text: 'Plattsøm', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Rosesaum er Setesdalens karakteristiske blomsterbroderi, kjent for sine fargerike blomstermotiver på bunadsskjorter og andre tekstiler.',
      },
    },
    {
      id: 'handverk-design-vg1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en av de fire tradisjonelle teknikkene (veving, nålebinding, toving eller broderi) og lag en enkel prøve eller skisse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken teknikk valgte du og hvorfor?',
            solution: 'Svar varierer basert på interesse og tilgang til materialer.',
          },
          {
            label: 'b',
            task: 'Beskriv utfordringer du møtte.',
            solution: 'Eleven bør reflektere over praktiske utfordringer og læring.',
          },
        ],
        solution: 'Oppgaven vurderes basert på forståelse av teknikken og evne til praktisk gjennomføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Renning', definition: 'De vertikale trådene som spennes opp i vevstolen' },
    { term: 'Innslag', definition: 'De horisontale trådene som veves gjennom renningen' },
    { term: 'Nålebinding', definition: 'Eldgammel tekstil teknikk som skaper tett stoff med korte tråder' },
    { term: 'Toving', definition: 'Prosess der ullfibre blir til filt gjennom friksjon' },
    { term: 'Vadmel', definition: 'Tovet ullstoff brukt til klær og tepper' },
    { term: 'Hardangersøm', definition: 'Broderitektikk med uttrukne tråder og geometriske mønstre' },
  ],
};

// ============================================================================
// Kapittel 3.5: Tradisjonelle målemetoder og mønsterkonstruksjon
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_3_5: TextbookChapter = {
  id: 'handverk-design-vg1-3-5',
  courseId: 'handverk-design-vg1',
  chapterNumber: '3.5',
  title: 'Tradisjonelle målemetoder og mønsterkonstruksjon',
  description: 'Utforsking av tradisjonelle metoder for måling, tilpasning og mønsterkonstruksjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke tradisjonelle målemetoder og tilpasse mønstre og maler',
  ],
  content: [
    {
      id: 'handverk-design-vg1-3-5-intro',
      type: 'text',
      content: `Før standardiserte målesystemer og digitale verktøy utviklet håndverkere metoder basert på kroppen, naturlige materialer og praktisk erfaring. Disse tradisjonelle målemetodene og mønsterkonstruksjonsteknikkene er fortsatt relevante og gir verdifull forståelse for proporsjoner og tilpasning.`,
    },
    {
      id: 'handverk-design-vg1-3-5-def-1',
      type: 'definition',
      title: 'Kroppsmål',
      content: `Kroppsmål er måleenheter basert på kroppens dimensjoner. Historisk har enheter som alen (underarm), fot, tomme (tommelfinger) og favn (armspenn) vært brukt. Disse målene varierer fra person til person, men fungerte godt for personlig tilpasning.`,
    },
    {
      id: 'handverk-design-vg1-3-5-text-1',
      type: 'text',
      content: `**Tradisjonelle måleenheter**

Før metersystemet ble innført i Norge i 1875, brukte håndverkere måleenheter basert på kroppen.

**Vanlige kroppsmål**:
- **Tomme**: Bredden av tommelfingeren (ca. 2,5 cm)
- **Fot**: Lengden av foten (ca. 30 cm)
- **Alen**: Fra albue til fingerspiss (ca. 47 cm)
- **Favn**: Fra fingerspiss til fingerspiss med utstrakte armer (ca. 1,8 m)
- **Håndsbredd**: Bredden over fire fingre
- **Spann**: Avstanden fra tommelfinger til lillefinger utstrakt

**Fordeler med kroppsmål**:
- Alltid tilgjengelige
- Naturlig tilpasset brukerens proporsjoner
- Ga personlig tilpasning
- Enkle å huske

**Bruk i tradisjonelt håndverk**:
Snekkere målte i tommer og alen, vevere brukte alenmål for stoffbredder, og skreddere tilpasset klær direkte til kundens kropp.`,
    },
    {
      id: 'handverk-design-vg1-3-5-def-2',
      type: 'definition',
      title: 'Mønsterkonstruksjon',
      content: `Mønsterkonstruksjon er prosessen med å lage maler eller tegninger som brukes som grunnlag for å kutte og forme materialer. Et godt mønster sikrer at delene passer sammen og at produktet får riktige proporsjoner.`,
    },
    {
      id: 'handverk-design-vg1-3-5-text-2',
      type: 'text',
      content: `**Tradisjonell mønsterkonstruksjon**

Håndverkere utviklet metoder for å lage mønstre uten dagens standardiserte systemer.

**Direkte tilpasning**:
- Mål direkte på personen eller gjenstanden
- Marker på stoff eller materiale
- Tilpass underveis i arbeidet

**Bruk av maler**:
- Grunnmønstre i tre, papp eller metall
- Gjenbrukbare fra prosjekt til prosjekt
- Familiens maler gikk i arv

**Proporsjonsbasert konstruksjon**:
- Bruk av forholdstall (f.eks. 1:2, 1:3)
- Det gylne snitt for harmoniske proporsjoner
- Geometriske konstruksjoner med passer og linjal

**Tradisjonelle verktøy**:
- **Tommestokk**: Sammenleggbar målestokk
- **Målsnor**: For lengre mål og buede linjer
- **Passer**: For sirkler og overføring av mål
- **Vinkel**: For rette vinkler
- **Gradvinkel**: For andre vinkler`,
    },
    {
      id: 'handverk-design-vg1-3-5-text-3',
      type: 'text',
      content: `**Mønsterkonstruksjon for tekstil**

Tradisjonell skredderteknikk brukte kroppsmål som utgangspunkt.

**Grunnleggende kroppsmål for klær**:
- **Brystomkrets**: Rundt brystet på det bredeste
- **Livvidde**: Rundt den smaleste delen av livet
- **Hofteomkrets**: Rundt hoftene
- **Skuldermål**: Fra skulder til skulder over ryggen
- **Armlengde**: Fra skulder til håndledd
- **Rygglengde**: Fra nakke til liv
- **Sidlengde**: Fra liv til ønsket lengde

**Grunnmønster**:
Et grunnmønster er et basismønster som passer til en bestemt person. Fra dette kan ulike plaggtyper utvikles.

**Sømmonn**:
I tradisjonell konstruksjon la man til ekstra stoff for sømmer. Standard sømmonn var ofte én tomme (2,5 cm).

**Mønsteroverføring**:
Mønstre ble overført til stoff ved hjelp av kritt, savskurer, eller ved å stikke hull i papiret og prikke gjennom.`,
    },
    {
      id: 'handverk-design-vg1-3-5-text-4',
      type: 'text',
      content: `**Geometrisk konstruksjon**

Tradisjonelle håndverkere brukte geometri for å skape presise mønstre og proporsjoner.

**Grunnleggende konstruksjoner**:
- **Halvering av linjer**: Med passer fra begge endepunkter
- **Rette vinkler**: 3-4-5-metoden eller passerkonstruksjon
- **Regelmessige mangekanter**: Konstrueres i sirkel
- **Spiraler**: For dekorative elementer

**3-4-5-metoden**:
En trekant med sider i forholdet 3:4:5 gir alltid en rett vinkel. Denne metoden har vært brukt siden antikken.

**Eksempel**:
- Mål 3 enheter langs én kant
- Mål 4 enheter langs en annen kant
- Hvis diagonalen er 5 enheter, er vinkelen 90°

**Det gylne snitt i konstruksjon**:
Forholdet 1:1,618 ble brukt for harmoniske proporsjoner i alt fra møbler til arkitektur. Mange tradisjonelle møbler og bygninger viser disse proporsjonene.`,
    },
    {
      id: 'handverk-design-vg1-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Måle og tilpasse med kroppsmål',
      problem: 'Hvordan kan du bruke kroppsmål til å tilpasse et enkelt plagg?',
      solution: `**Tilpasse en enkel vest med kroppsmål:**

1. **Mål brystomkrets**
   - Bruk en målsnor eller remselist
   - Marker lengden på snoren
   - Dette er grunnmålet for vidden

2. **Mål lengden**
   - Fra skulder til ønsket lengde
   - Bruk egen arm som måleenhet
   - F.eks. "2 håndsbredder under liv"

3. **Konstruer grunnformen**
   - Legg stoffet dobbelt
   - Halv brystomkrets + sømmonn = bredde
   - Lengdemål + sømmonn = høyde

4. **Tilpass halsåpning**
   - Legg stoffet på skuldrene
   - Marker der halsen skal være
   - Klipp en enkel bue

5. **Tilpass armhull**
   - Med stoffet på kroppen
   - Marker hvor armene skal gå
   - Klipp ut med god margin

6. **Prøv og juster**
   - Heft sammen midlertidig
   - Se hvordan det faller
   - Marker nødvendige justeringer

**Fordelen med denne metoden:**
Plagget blir tilpasset nettopp deg, ikke et standardmål.`,
    },
    {
      id: 'handverk-design-vg1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn og forklar fire tradisjonelle kroppsmål.',
        solution: 'Fire tradisjonelle kroppsmål er: 1) Tomme - bredden av tommelfingeren, ca. 2,5 cm. 2) Fot - lengden av foten, ca. 30 cm. 3) Alen - fra albue til fingerspiss, ca. 47 cm. 4) Favn - fra fingerspiss til fingerspiss med utstrakte armer, ca. 1,8 m.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er 3-4-5-metoden brukt til?',
        options: [
          { id: 'a', text: 'Å beregne stoffmengde', isCorrect: false },
          { id: 'b', text: 'Å konstruere en rett vinkel', isCorrect: true },
          { id: 'c', text: 'Å måle omkrets', isCorrect: false },
          { id: 'd', text: 'Å beregne det gylne snitt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '3-4-5-metoden brukes til å konstruere en rett vinkel (90 grader). En trekant med sider i forholdet 3:4:5 gir alltid en rett vinkel mellom de to korteste sidene.',
      },
    },
    {
      id: 'handverk-design-vg1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er et grunnmønster, og hvorfor er det nyttig?',
        solution: 'Et grunnmønster er et basismønster som er tilpasset en bestemt person eller standardstørrelse. Det er nyttig fordi man fra dette grunnmønsteret kan utvikle mange ulike plaggtyper uten å måtte starte målingen på nytt hver gang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Mål din egen alen, fot og favn. Sammenlign med de historiske standardmålene.',
        subTasks: [
          {
            label: 'a',
            task: 'Noter dine egne mål i centimeter.',
            solution: 'Svar varierer. Eleven bør måle fra albue til fingerspiss (alen), fotlengde og armspenn (favn).',
          },
          {
            label: 'b',
            task: 'Hvor mye avviker dine mål fra standardmålene?',
            solution: 'Eleven bør sammenligne med alen (ca. 47 cm), fot (ca. 30 cm) og favn (ca. 180 cm).',
          },
        ],
        solution: 'Øvelsen viser hvorfor kroppsmål varierte og ga personlig tilpasning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Bruk 3-4-5-metoden til å konstruere en rett vinkel på et ark. Dokumenter fremgangsmåten.',
        solution: 'Eleven bør: 1) Tegne en linje og måle 3 enheter. 2) Fra endepunktet, måle 4 enheter i en vinkel. 3) Kontrollere at avstanden mellom de to endepunktene er 5 enheter. Hvis ja, er vinkelen 90 grader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kroppsmål', definition: 'Måleenheter basert på kroppens dimensjoner' },
    { term: 'Alen', definition: 'Tradisjonelt mål fra albue til fingerspiss, ca. 47 cm' },
    { term: 'Grunnmønster', definition: 'Basismønster som brukes til å utvikle ulike plagg' },
    { term: 'Sømmonn', definition: 'Ekstra stoff lagt til for sømmer' },
    { term: '3-4-5-metoden', definition: 'Geometrisk metode for å konstruere rette vinkler' },
    { term: 'Det gylne snitt', definition: 'Proporsjon (1:1,618) brukt for harmoniske forhold' },
  ],
};

// ============================================================================
// Kapittel 3.6: Kulturarv som inspirasjon til nyskaping
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_3_6: TextbookChapter = {
  id: 'handverk-design-vg1-3-6',
  courseId: 'handverk-design-vg1',
  chapterNumber: '3.6',
  title: 'Kulturarv som inspirasjon til nyskaping',
  description: 'Utforsking av hvordan kulturarv og tradisjoner kan inspirere til nyskaping og innovative produkter.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske dilemmaer mellom tradisjonell utøvelse og nyskaping',
  ],
  content: [
    {
      id: 'handverk-design-vg1-3-6-intro',
      type: 'text',
      content: `Kulturarv og tradisjonelt håndverk kan være kraftige inspirasjonskilder for moderne design og produktutvikling. Samtidig oppstår det spørsmål om hvor grensen går mellom respektfull inspirasjon og uønsket kopiering. I dette kapittelet utforsker vi hvordan du kan bruke tradisjoner som springbrett for nyskaping.`,
    },
    {
      id: 'handverk-design-vg1-3-6-def-1',
      type: 'definition',
      title: 'Nyskaping',
      content: `Nyskaping innebærer å skape noe nytt, ofte ved å kombinere eksisterende elementer på nye måter eller ved å videreutvikle tradisjoner. I håndverk handler nyskaping om å finne balansen mellom å bevare og å fornye.`,
    },
    {
      id: 'handverk-design-vg1-3-6-text-1',
      type: 'text',
      content: `**Fra tradisjon til innovasjon**

Tradisjoner er ikke statiske. De har alltid utviklet seg gjennom at håndverkere har tilført nye ideer, materialer og teknikker.

**Måter å bruke tradisjoner**:
- **Bevaring**: Gjenskape tradisjonelle produkter autentisk
- **Tilpasning**: Bruke tradisjonelle teknikker til moderne formål
- **Transformasjon**: Ta elementer og sette dem i ny kontekst
- **Inspirasjon**: La tradisjon inspirere helt nye uttrykk

**Hva kan du hente fra tradisjoner?**:
- Teknikker og metoder
- Materialkunnskap
- Farger og mønstre
- Former og proporsjoner
- Funksjonelle løsninger
- Estetiske prinsipper

Nyskapende håndverk respekterer røttene mens det utforsker nye muligheter.`,
    },
    {
      id: 'handverk-design-vg1-3-6-def-2',
      type: 'definition',
      title: 'Kulturell appropriasjon',
      content: `Kulturell appropriasjon er når elementer fra en kultur tas i bruk av noen utenfor den kulturen, ofte uten forståelse eller respekt for den opprinnelige betydningen. Det er viktig å skille mellom respektfull inspirasjon og problematisk tilegnelse.`,
    },
    {
      id: 'handverk-design-vg1-3-6-text-2',
      type: 'text',
      content: `**Dilemmaer i nyskapingsarbeid**

Å arbeide med kulturarv som inspirasjon reiser viktige spørsmål.

**Bevaring vs. fornyelse**:
- Skal tradisjoner bevares uendret?
- Er endring nødvendig for at tradisjoner skal overleve?
- Hvem har rett til å endre tradisjoner?

**Autentisitet vs. tilgjengelighet**:
- Er tradisjonelle teknikker for tidkrevende for moderne liv?
- Kan forenkling gjøre håndverk tilgjengelig for flere?
- Hva går tapt når teknikker forenkles?

**Lokal vs. global**:
- Hvordan påvirkes lokale tradisjoner av globalisering?
- Kan tradisjoner spres uten å miste sin identitet?
- Hva betyr "ekthet" i en global verden?

**Kommersialisering**:
- Kan håndverk selges uten å miste sjelen?
- Hvordan balansere økonomi og kulturverdier?
- Når blir masseproduksjon et problem?`,
    },
    {
      id: 'handverk-design-vg1-3-6-text-3',
      type: 'text',
      content: `**Strategier for respektfull nyskaping**

Det finnes gode tilnærminger for å jobbe nyskapende med kulturarv.

**1. Dybdekunnskap**
Studer tradisjonen grundig før du begynner å fornye. Forstå hvorfor ting ble gjort på bestemte måter.

**2. Transparens**
Vær åpen om hva som er tradisjonelt og hva som er din tolkning. Ikke framstill noe som autentisk når det ikke er det.

**3. Respekt for opprinnelse**
Anerkjenn hvor inspirasjonen kommer fra. Vis respekt for kulturbærerne.

**4. Tilføre verdi**
Sikre at nyskapingen tilfører noe genuint nytt, ikke bare kopierer overfladisk.

**5. Dialog**
Når mulig, samarbeid med eller søk råd fra tradisjonsbærere.

**6. Bevissthet om makt**
Vær klar over maktforhold mellom kulturer. Noen tradisjoner krever ekstra varsomhet.`,
    },
    {
      id: 'handverk-design-vg1-3-6-text-4',
      type: 'text',
      content: `**Eksempler på vellykket nyskaping**

Mange designere har lykkes med å fornye tradisjoner på respektfulle måter.

**Norsk møbeldesign**:
Designere som har brukt tradisjonell treskurd og stavkirkeestetikk som inspirasjon for moderne møbler, uten å kopiere direkte.

**Bunadstilpasninger**:
Noen bunadsprodusenter lager moderne varianter med tradisjonelle teknikker, tydelig merket som ikke-tradisjonelle.

**Samisk samtidskunst**:
Samiske kunstnere som bruker duodji-tradisjoner i moderne kunstuttrykk, og dermed både bevarer og fornyer.

**Internasjonal inspirasjon**:
Norske designere som henter inspirasjon fra japansk håndverk eller skandinavisk minimalisme og skaper noe nytt.

**Materialgjenbruk**:
Bruk av tradisjonelle teknikker på moderne materialer, som å bruke vevteknikker på resirkulert plast.`,
    },
    {
      id: 'handverk-design-vg1-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Utvikle et produkt med tradisjonell inspirasjon',
      problem: 'Hvordan kan du utvikle et moderne produkt inspirert av tradisjonelt norsk håndverk?',
      solution: `**Prosess for tradisjonsinspirert produktutvikling:**

**Steg 1: Utforsk tradisjonen**
- Velg en tradisjon å studere (f.eks. rosemaling)
- Les om historie og teknikker
- Besøk museer eller håndverkere
- Forstå symbolikk og betydning

**Steg 2: Identifiser elementer**
- Hvilke farger er karakteristiske?
- Hvilke former gjentar seg?
- Hvilke teknikker brukes?
- Hva er funksjonelt vs. dekorativt?

**Steg 3: Definer ditt prosjekt**
- Hva skal du lage? (f.eks. moderne lampe)
- Hvilke elementer vil du hente? (f.eks. fargeskala)
- Hvordan skal det være nytt? (moderne form)

**Steg 4: Utforsk kombinasjoner**
- Skisser flere alternativer
- Test ulike grader av tradisjonselementer
- Få tilbakemeldinger

**Steg 5: Dokumenter og presenter**
- Forklar inspirasjonskilden
- Vis hva som er tradisjonelt
- Begrunn dine valg
- Vær ærlig om at dette er din tolkning`,
    },
    {
      id: 'handverk-design-vg1-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom bevaring, tilpasning og transformasjon av tradisjoner.',
        solution: 'Bevaring handler om å gjenskape tradisjonelle produkter autentisk og uendret. Tilpasning innebærer å bruke tradisjonelle teknikker til moderne formål, men beholde kjernen. Transformasjon betyr å ta elementer fra tradisjonen og sette dem i helt ny kontekst, der resultatet kan være svært forskjellig fra originalen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er kulturell appropriasjon?',
        options: [
          { id: 'a', text: 'Å bevare sin egen kultur', isCorrect: false },
          { id: 'b', text: 'Å ta elementer fra en annen kultur uten respekt eller forståelse', isCorrect: true },
          { id: 'c', text: 'Å lære om andre kulturer', isCorrect: false },
          { id: 'd', text: 'Å dele sin kultur med andre', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kulturell appropriasjon er når elementer fra en kultur tas i bruk av noen utenfor den kulturen, ofte uten forståelse eller respekt for den opprinnelige betydningen.',
      },
    },
    {
      id: 'handverk-design-vg1-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre strategier for respektfull nyskaping med kulturarv som inspirasjon.',
        solution: 'Tre strategier er: 1) Dybdekunnskap - studere tradisjonen grundig før man fornyer. 2) Transparens - være åpen om hva som er tradisjonelt og hva som er ens egen tolkning. 3) Respekt for opprinnelse - anerkjenne hvor inspirasjonen kommer fra og vise respekt for kulturbærerne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg en norsk håndverkstradisjon og skisser en ide til et moderne produkt inspirert av tradisjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken tradisjon valgte du, og hvilke elementer vil du bruke?',
            solution: 'Svar varierer. Eleven bør identifisere konkrete elementer som farger, former eller teknikker.',
          },
          {
            label: 'b',
            task: 'Hvordan er produktet ditt forskjellig fra det tradisjonelle?',
            solution: 'Eleven bør forklare hva som er nytt og moderne ved produktet.',
          },
        ],
        solution: 'Oppgaven vurderes på evne til å balansere tradisjon og nyskaping, samt refleksjon over valgene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Nyskaping', definition: 'Å skape noe nytt, ofte ved å videreutvikle tradisjoner' },
    { term: 'Kulturell appropriasjon', definition: 'Å ta elementer fra en kultur uten respekt eller forståelse' },
    { term: 'Transformasjon', definition: 'Å ta tradisjonelle elementer og sette dem i ny kontekst' },
    { term: 'Autentisitet', definition: 'Ekthet og troskap mot opprinnelsen' },
    { term: 'Transparens', definition: 'Åpenhet om inspirasjonskilder og egne tolkninger' },
  ],
};

// ============================================================================
// Kapittel 3.7: Håndverk som politisk og kulturelt uttrykk
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_3_7: TextbookChapter = {
  id: 'handverk-design-vg1-3-7',
  courseId: 'handverk-design-vg1',
  chapterNumber: '3.7',
  title: 'Håndverk som politisk og kulturelt uttrykk',
  description: 'Undersøkelse av hvordan håndverkstradisjoner har blitt brukt til politiske og ideologiske ytringer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'undersøke hvordan håndverkstradisjoner har blitt brukt til politiske og ideologiske ytringer i ulike kulturer og presentere eget arbeid som uttrykker egne følelser og meninger',
  ],
  content: [
    {
      id: 'handverk-design-vg1-3-7-intro',
      type: 'text',
      content: `Håndverk har alltid vært mer enn bare praktisk produksjon. Gjennom historien har mennesker brukt håndverk til å uttrykke tilhørighet, motstand, identitet og politiske standpunkter. I dette kapittelet utforsker vi hvordan håndverkstradisjoner har fungert som kulturelt og politisk uttrykk, og hvordan du kan bruke håndverk til å formidle egne meninger.`,
    },
    {
      id: 'handverk-design-vg1-3-7-def-1',
      type: 'definition',
      title: 'Symbolbruk',
      content: `Symbolbruk i håndverk innebærer at bestemte former, farger, mønstre eller motiver tillegges betydning utover det rent dekorative. Symboler kan kommunisere tilhørighet, status, tro eller politiske standpunkter.`,
    },
    {
      id: 'handverk-design-vg1-3-7-text-1',
      type: 'text',
      content: `**Håndverk og identitet**

Håndverk har alltid vært knyttet til identitet - hvem vi er og hvor vi hører til.

**Nasjonal identitet**:
- Bunader og folkedrakter markerer tilhørighet
- Tradisjonelt håndverk ble viktig i nasjonsbyggingen
- Rosemaling og treskjæring ble symboler på "det norske"

**Lokal identitet**:
- Regionale variasjoner i teknikker og mønstre
- Bygdelag og distrikter med egne tradisjoner
- Håndverk som stedstilknytning

**Personlig identitet**:
- Å lage noe med hendene uttrykker hvem du er
- Valg av teknikker og materialer sier noe om verdier
- Håndverk som personlig signatur

**Gruppeidentitet**:
- Laug og yrkesfellesskap med egne symboler
- Subkulturer med særegne estetiske uttrykk
- Familietradisjoner som går i arv`,
    },
    {
      id: 'handverk-design-vg1-3-7-def-2',
      type: 'definition',
      title: 'Protestkultur',
      content: `Protestkultur refererer til kunstneriske og kulturelle uttrykk som brukes for å formidle kritikk, motstand eller krav om endring. Håndverk kan være en del av protestkultur gjennom symboler, tekst, eller selve handlingen å lage noe.`,
    },
    {
      id: 'handverk-design-vg1-3-7-text-2',
      type: 'text',
      content: `**Håndverk som motstand og protest**

Gjennom historien har håndverk vært brukt som politisk virkemiddel.

**Historiske eksempler**:
- **Spinnebevegelsen i India**: Gandhi oppfordret til hjemmespunnet klede (khadi) som motstand mot britisk kolonialisme
- **Quilttradisjonen i USA**: Afroamerikanske quilts med skjulte budskap og historier
- **Samisk duodji**: Bevaring av kultur som motstand mot fornorsking
- **Arbeiderbevegelsen**: Bannere og faner med håndlagde symboler

**Moderne protesthåndverk**:
- Strikking som protest (yarnbombing, pussyhats)
- Miljøaktivisme gjennom gjenbruk og reparasjon
- Sakte-bevegelsen (slow movement) som kritikk av masseforbruk
- DIY-kultur som alternativ til konsumsamfunnet

Å velge å lage noe selv, i stedet for å kjøpe, kan i seg selv være et politisk standpunkt.`,
    },
    {
      id: 'handverk-design-vg1-3-7-text-3',
      type: 'text',
      content: `**Symboler og deres betydning**

Symboler i håndverk kan ha mange lag av mening.

**Religiøse symboler**:
- Kors, halvmåne, davidsstjerne i dekor
- Akantusranker med kristen symbolikk
- Rituell bruk av bestemte farger og mønstre

**Politiske symboler**:
- Nasjonalflagg og -farger
- Frihetssymboler (f.eks. frigjøringskokarde)
- Arbeiderbevegelsens røde fane
- Fredssymboler i moderne håndverk

**Statussymboler**:
- Kostbare materialer som gull og sølv
- Tidkrevende teknikker som viser rikdom
- Regionale bunadsvariasjoner

**Kulturelle koder**:
- Farger med regional betydning
- Mønstre som forteller historier
- Dekor som markerer livshendelser

Det er viktig å kjenne til symbolers betydning før man bruker dem.`,
    },
    {
      id: 'handverk-design-vg1-3-7-text-4',
      type: 'text',
      content: `**Uttrykke seg gjennom håndverk**

Du kan bruke håndverk til å formidle dine egne meninger og følelser.

**Personlig uttrykk**:
- Velg temaer som engasjerer deg
- Bruk farger og former som kommuniserer følelser
- La teknikken forsterke budskapet
- Kombiner tradisjonelle og personlige elementer

**Etiske vurderinger**:
- Vær bevisst på hvilke symboler du bruker
- Respekter andres kulturelle uttrykk
- Tenk over hvem som kan bli berørt
- Vær forberedt på at kunst kan provosere

**Kommunikasjon gjennom håndverk**:
- Direkte budskap (tekst, tydelige symboler)
- Indirekte budskap (materialer, teknikker, kontekst)
- Prosessen som statement (synlig reparasjon, gjenbruk)
- Deltakelse og fellesskap

Håndverk gir deg mulighet til å si noe uten ord - la hendene dine fortelle din historie.`,
    },
    {
      id: 'handverk-design-vg1-3-7-example-1',
      type: 'example',
      title: 'Eksempel: Skape et håndverksprodukt med budskap',
      problem: 'Hvordan kan du lage et håndverksprodukt som formidler et personlig budskap?',
      solution: `**Prosess for meningsbærende håndverk:**

**1. Velg ditt budskap**
- Hva brenner du for? (miljø, rettferdighet, identitet)
- Hvilken følelse vil du formidle?
- Hvem vil du nå?

**2. Undersøk uttrykksformer**
- Har andre brukt håndverk til lignende budskap?
- Hvilke symboler finnes allerede?
- Hva kan du gjøre annerledes?

**3. Velg teknikk og materiale**
- La valget forsterke budskapet
- Gjenbruksmateriale = miljøbudskap
- Tradisjonelle teknikker = kulturell tilknytning
- Moderne materialer = framtidsorientering

**4. Design produktet**
- Skisser flere alternativer
- Balansér tydelighet og subtilitet
- Tenk på hvor produktet skal brukes

**5. Lag og reflekter**
- Dokumenter prosessen
- Hvordan føles det å uttrykke seg slik?
- Hva kommuniserer produktet?

**Eksempel på gjennomføring:**
Lag en veske av resirkulert tekstil med brodert budskap om bærekraft. Valget av gjenbruk kommuniserer miljøbevissthet, mens broderiet gir personlig preg og direkte budskap.`,
    },
    {
      id: 'handverk-design-vg1-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan håndverk har vært brukt som politisk uttrykk gjennom historien.',
        solution: 'Tre eksempler er: 1) Gandhis spinnebevegelse i India, der hjemmespunnet klede (khadi) var motstand mot britisk kolonialisme. 2) Samisk duodji som bevaring av kulturell identitet under fornorskingspolitikken. 3) Quilt-tradisjonen blant afroamerikanere, der quilts inneholdt skjulte budskap og historier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er symbolbruk i håndverk?',
        options: [
          { id: 'a', text: 'Kun dekorative mønstre uten mening', isCorrect: false },
          { id: 'b', text: 'Former, farger og motiver som kommuniserer betydning utover det dekorative', isCorrect: true },
          { id: 'c', text: 'Bruk av dyre materialer', isCorrect: false },
          { id: 'd', text: 'Tradisjonelle teknikker', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Symbolbruk i håndverk innebærer at bestemte former, farger, mønstre eller motiver tillegges betydning utover det rent dekorative. De kan kommunisere tilhørighet, status, tro eller politiske standpunkter.',
      },
    },
    {
      id: 'handverk-design-vg1-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvordan bunader kan være uttrykk for identitet på flere nivåer.',
        solution: 'Bunader uttrykker identitet på flere nivåer: 1) Nasjonal identitet - bunaden er et norsk symbol og uttrykk for tilhørighet til nasjonen. 2) Regional identitet - hver bunad viser geografisk tilhørighet til et bestemt sted eller distrikt. 3) Personlig identitet - valg av bunad og hvordan den bæres uttrykker personlig tilknytning og familiehistorie.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Planlegg et håndverksprodukt som uttrykker en mening eller følelse du har.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva vil du uttrykke, og hvorfor?',
            solution: 'Eleven bør identifisere et tema som engasjerer og begrunne valget.',
          },
          {
            label: 'b',
            task: 'Hvilke virkemidler vil du bruke (materiale, teknikk, symboler)?',
            solution: 'Eleven bør forklare hvordan valgene forsterker budskapet.',
          },
          {
            label: 'c',
            task: 'Skisser produktet og beskriv hvordan det kommuniserer.',
            solution: 'Eleven bør vise forbindelse mellom valg og budskap.',
          },
        ],
        solution: 'Oppgaven vurderes på evne til å koble budskap med håndverksmessige valg og reflektere over kommunikasjon gjennom håndverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Symbolbruk', definition: 'Bruk av former, farger og motiver som kommuniserer betydning' },
    { term: 'Protestkultur', definition: 'Kulturelle uttrykk som formidler kritikk eller motstand' },
    { term: 'Identitetsmarkør', definition: 'Element som viser tilhørighet til gruppe eller sted' },
    { term: 'Khadi', definition: 'Hjemmespunnet klede brukt i indisk motstandsbevegelse' },
    { term: 'Meningsbærende håndverk', definition: 'Håndverk laget for å formidle budskap eller følelser' },
  ],
};

// Export alle kapitlene som en array
export const HANDVERK_DESIGN_VG1_DEL3_CHAPTERS = [
  CHAPTER_HANDVERK_DESIGN_VG1_3_1,
  CHAPTER_HANDVERK_DESIGN_VG1_3_2,
  CHAPTER_HANDVERK_DESIGN_VG1_3_3,
  CHAPTER_HANDVERK_DESIGN_VG1_3_4,
  CHAPTER_HANDVERK_DESIGN_VG1_3_5,
  CHAPTER_HANDVERK_DESIGN_VG1_3_6,
  CHAPTER_HANDVERK_DESIGN_VG1_3_7,
];
