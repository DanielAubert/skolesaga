/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Entreprenørskap og bedriftsutvikling 1 (VG2) - Del 1: Hva er entreprenørskap?
 *
 * Kapittel 1.1–1.5: Definisjon av entreprenørskap, typer entreprenørskap, entreprenørens egenskaper,
 * entreprenørskapets historie og entreprenørskap i Norge.
 *
 * LK20-kompetansemål:
 * - gjøre rede for hva entreprenørskap innebærer
 * - beskrive ulike typer entreprenørskap og entreprenørens egenskaper
 * - forklare entreprenørskapets rolle i samfunnet og norsk næringsliv
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er entreprenørskap?
// ============================================================================

export const CHAPTER_ENTREBED_1_1_1: TextbookChapter = {
  id: 'entrebed-1-1-1',
  courseId: 'entrebed-1',
  chapterNumber: '1.1',
  title: 'Hva er entreprenørskap?',
  description: 'Forstå hva entreprenørskap innebærer, hvordan begrepet defineres, og hvorfor innovasjon og kreativ destruksjon er sentrale begreper.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for hva entreprenørskap innebærer',
    'forklare hvordan innovasjon og verdiskaping henger sammen med entreprenørskap',
  ],
  content: [
    {
      id: 'eb-1-1-intro',
      type: 'text',
      content: `## Hva er entreprenørskap?

Har du noen gang hatt en idé du ønsket å gjøre til virkelighet? Kanskje du har sett et problem i hverdagen og tenkt: «Hvorfor finnes det ikke en bedre løsning på dette?» I så fall har du allerede tatt det første steget mot å tenke som en entreprenør.

**Entreprenørskap** handler om å se muligheter der andre ser problemer, og å omsette ideer til handling. Det dreier seg om mer enn bare å starte en bedrift – det er en tenkemåte og en tilnærming til livet som handler om kreativitet, initiativ og verdiskaping.

I dette kapittelet skal vi utforske:
- Hva entreprenørskap betyr og hvordan det defineres
- Hva innovasjon er og hvorfor det er sentralt
- Joseph Schumpeters teori om kreativ destruksjon
- Forskjellen mellom oppfinnelse og innovasjon
- Hvorfor entreprenørskap er viktig for samfunnet`,
    },
    {
      id: 'eb-1-1-def-entreprenorskap',
      type: 'definition',
      title: 'Entreprenørskap',
      content: `**Entreprenørskap** er prosessen med å identifisere muligheter, mobilisere ressurser og skape verdi gjennom nye eller forbedrede produkter, tjenester eller prosesser.

Ordet «entreprenør» kommer fra det franske verbet *entreprendre*, som betyr «å påta seg» eller «å gjennomføre noe». En entreprenør er altså en person som tar på seg risikoen og ansvaret for å skape noe nytt.

**Tre kjennetegn ved entreprenørskap:**
- **Mulighetsidentifisering:** Å oppdage udekkede behov eller nye måter å løse problemer på
- **Ressursmobilisering:** Å skaffe kapital, kompetanse, nettverk og andre ressurser
- **Verdiskaping:** Å skape økonomisk, sosial eller kulturell verdi for kunder og samfunn`,
    },
    {
      id: 'eb-1-1-innovasjon',
      type: 'text',
      content: `## Innovasjon – kjernen i entreprenørskap

Innovasjon er drivkraften i entreprenørskap. Mens en *oppfinnelse* er noe nytt som skapes, er *innovasjon* det som skjer når oppfinnelsen tas i bruk og skaper verdi.

### Forskjellen mellom oppfinnelse og innovasjon

| | Oppfinnelse | Innovasjon |
|---|-----------|-----------|
| **Hva** | Å skape noe helt nytt | Å ta i bruk noe nytt som skaper verdi |
| **Fokus** | Teknologi og vitenskap | Marked og verdiskaping |
| **Eksempel** | Oppfinnelsen av internett-protokollen | Utviklingen av sosiale medier |
| **Resultat** | En ny idé eller prototype | Et produkt, en tjeneste eller en prosess som brukes |

Det er viktig å forstå at innovasjon ikke nødvendigvis betyr å finne opp noe helt nytt. Det kan også handle om å **kombinere eksisterende elementer på nye måter** eller **forbedre noe som allerede finnes**.

### Typer innovasjon

- **Produktinnovasjon:** Nye eller vesentlig forbedrede produkter/tjenester (f.eks. smarttelefonen)
- **Prosessinnovasjon:** Nye måter å produsere eller levere på (f.eks. netthandel)
- **Markedsinnovasjon:** Nye måter å nå kunder på (f.eks. abonnementsmodeller)
- **Organisatorisk innovasjon:** Nye måter å organisere arbeidet på (f.eks. fjernarbeid)`,
    },
    {
      id: 'eb-1-1-def-innovasjon',
      type: 'definition',
      title: 'Innovasjon',
      content: `**Innovasjon** er å ta i bruk nye ideer, produkter, tjenester eller prosesser som skaper verdi for brukere, kunder eller samfunnet. Innovasjon skiller seg fra oppfinnelse ved at den krever at det nye faktisk blir tatt i bruk og skaper verdi – det holder ikke bare å ha en god idé.`,
    },
    {
      id: 'eb-1-1-schumpeter',
      type: 'text',
      content: `## Joseph Schumpeter og kreativ destruksjon

Den østerriksk-amerikanske økonomen **Joseph Schumpeter** (1883–1950) er en av de mest innflytelsesrike tenkerne innen entreprenørskapsteori. Han argumenterte for at entreprenøren er den viktigste drivkraften i økonomisk utvikling.

### Kreativ destruksjon

Schumpeters mest kjente begrep er **kreativ destruksjon** (*creative destruction*). Det beskriver prosessen der nye innovasjoner ødelegger og erstatter eksisterende produkter, tjenester og forretningsmodeller.

**Slik fungerer kreativ destruksjon:**
1. En entreprenør introduserer en innovasjon i markedet
2. Innovasjonen er bedre, billigere eller mer praktisk enn det som finnes
3. Kunder bytter til det nye tilbudet
4. Eksisterende bedrifter som ikke klarer å tilpasse seg, taper markedsandeler eller går konkurs
5. Nye bedrifter og arbeidsplasser erstatter de gamle

### Eksempler på kreativ destruksjon

- **Strømmetjenester** (Spotify, Netflix) erstattet CD-plater og DVD-utleie
- **Digitale kameraer** erstattet filmbaserte kameraer (Kodak gikk konkurs)
- **Nettbanken** erstattet mange bankfilialer
- **E-bøker** utfordrer tradisjonelle bokhandlere
- **Elbiler** utfordrer tradisjonell bilindustri

Schumpeter mente at denne prosessen, selv om den er smertefull for de som rammes, er avgjørende for økonomisk fremgang og økt levestandard.`,
    },
    {
      id: 'eb-1-1-def-kreativ-destruksjon',
      type: 'definition',
      title: 'Kreativ destruksjon',
      content: `**Kreativ destruksjon** er Joseph Schumpeters begrep for den prosessen der nye innovasjoner ødelegger og erstatter eksisterende produkter, tjenester, bransjer og forretningsmodeller. Det er en «storm av nyskaping» som driver økonomisk utvikling fremover, selv om den medfører at noen bedrifter og næringer forsvinner.`,
    },
    {
      id: 'eb-1-1-example-spotify',
      type: 'example',
      title: 'Eksempel: Spotify og kreativ destruksjon',
      problem: 'Hvordan illustrerer Spotify kreativ destruksjon i musikkindustrien?',
      solution: `**Før Spotify (det gamle):**
- Musikk ble solgt som fysiske CD-plater i butikker
- Platebransjen kontrollerte distribusjon og priser
- En enkelt-CD kostet 150–200 kr
- Ulovlig nedlasting truet hele bransjen

**Etter Spotify (det nye):**
- Musikk strømmes digitalt for en fast månedspris
- Artister kan nå lyttere direkte uten plateselskap
- Tilgang til over 100 millioner sanger for ca. 120 kr/mnd
- Algoritmer gir personlige anbefalinger

**Kreativ destruksjon i praksis:**
- CD-butikker som Platekompaniet måtte legge om driften
- Tradisjonelle plateselskaper mistet kontroll over distribusjon
- Nye rollemodeller i musikkbransjen (uavhengige artister, podcastere)
- Nye jobber: dataspesialister, algoritmeutviklere, spillelisteansvarlige

**Lærdom:** Spotify løste ikke bare et teknisk problem – de endret hele forretningsmodellen for musikkindustrien. Det er essensen av kreativ destruksjon.`,
    },
    {
      id: 'eb-1-1-verdiskaping',
      type: 'text',
      content: `## Hvorfor er entreprenørskap viktig for samfunnet?

Entreprenørskap er en av de viktigste drivkreftene i et moderne samfunn. Her er de viktigste grunnene:

### 1. Økonomisk vekst
Nye bedrifter skaper verdier, genererer inntekter og bidrar til bruttonasjonalproduktet (BNP). Vekstbedrifter – ofte kalt **gaseller** – er spesielt viktige fordi de vokser raskt og skaper mange arbeidsplasser.

### 2. Nye arbeidsplasser
Småbedrifter og oppstartsbedrifter er den viktigste kilden til nye arbeidsplasser i de fleste land. I Norge har bedrifter med færre enn 20 ansatte stått for en stor andel av jobbskapingen de siste tiårene.

### 3. Innovasjon og fornyelse
Entreprenører utfordrer etablerte sannheter og finner nye løsninger. Dette driver teknologisk utvikling og holder næringslivet konkurransedyktig.

### 4. Løsning av samfunnsproblemer
Mange av verdens største utfordringer – klimaendringer, fattigdom, helseutfordringer – krever entreprenørielle løsninger. Sosiale entreprenører kombinerer forretningstenkning med samfunnsengasjement.

### 5. Konkurranse og lavere priser
Nye aktører i markedet skaper konkurranse, som presser priser ned og tvinger eksisterende bedrifter til å forbedre tilbudene sine.`,
    },
    {
      id: 'eb-1-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb-1-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva betyr det franske verbet «entreprendre», som er opphavet til ordet entreprenør?',
        options: [
          { id: 'a', text: 'Å tjene penger', isCorrect: false },
          { id: 'b', text: 'Å påta seg / gjennomføre noe', isCorrect: true },
          { id: 'c', text: 'Å starte en bedrift', isCorrect: false },
          { id: 'd', text: 'Å ta risiko', isCorrect: false },
        ],
        solution: 'Ordet «entreprenør» kommer fra det franske *entreprendre*, som betyr «å påta seg» eller «å gjennomføre noe». Det handler om å ta initiativ og ansvar for å skape noe nytt.',
      },
    },
    {
      id: 'eb-1-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb-1-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom en oppfinnelse og en innovasjon?',
        options: [
          { id: 'a', text: 'En oppfinnelse er billigere enn en innovasjon', isCorrect: false },
          { id: 'b', text: 'En innovasjon er alltid teknologibasert, en oppfinnelse er det ikke', isCorrect: false },
          { id: 'c', text: 'En oppfinnelse er noe nytt som skapes, en innovasjon er noe nytt som tas i bruk og skaper verdi', isCorrect: true },
          { id: 'd', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'En oppfinnelse er å skape noe helt nytt (f.eks. et patent), mens en innovasjon er når det nye faktisk tas i bruk i markedet og skaper verdi for brukere eller samfunn.',
      },
    },
    {
      id: 'eb-1-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb-1-1-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva mente Joseph Schumpeter med «kreativ destruksjon»?',
        options: [
          { id: 'a', text: 'At kreative mennesker ødelegger mer enn de skaper', isCorrect: false },
          { id: 'b', text: 'At nye innovasjoner ødelegger og erstatter eksisterende produkter og forretningsmodeller', isCorrect: true },
          { id: 'c', text: 'At staten bør ødelegge monopoler for å fremme konkurranse', isCorrect: false },
          { id: 'd', text: 'At bedrifter bør ødelegge sine egne produkter før konkurrentene gjør det', isCorrect: false },
        ],
        solution: 'Kreativ destruksjon beskriver prosessen der nye innovasjoner ødelegger og erstatter det gamle. Eksempel: Strømmetjenester erstattet CD-plater. Selv om det er smertefullt for de som rammes, driver det økonomisk fremgang.',
      },
    },
    {
      id: 'eb-1-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb-1-1-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Gi et eksempel på kreativ destruksjon fra de siste 20 årene. Beskriv hva som ble erstattet, hva som erstattet det, og hvilke konsekvenser det fikk for bedrifter og ansatte i den gamle bransjen.',
        hints: ['Tenk på bransjer som har blitt radikalt endret av ny teknologi, for eksempel taxi, hotell, media eller handel.'],
        solution: 'Eksempel: Uber og kreativ destruksjon i taxibransjen. Tradisjonelle taxiselskaper med faste priser, lisenser og telefonsentraler ble utfordret av Uber som tilbyr bestilling via app, dynamisk prising og privatsjåfører. Konsekvenser: Taxiselskaper mistet markedsandeler, sjåfører mistet fast ansettelse, men prisene gikk ned og tilgjengeligheten økte. Tradisjonelle selskaper måtte utvikle egne apper og forbedre service for å overleve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-1-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb-1-1-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva de fire typene innovasjon er (produkt-, prosess-, markeds- og organisatorisk innovasjon) og gi et konkret eksempel på hver type.',
        hints: ['Se tilbake på tabellen om innovasjonstyper. Tenk på eksempler fra bedrifter du kjenner.'],
        solution: 'Produktinnovasjon: AirPods – trådløse ørepropper som kombinerer lyd, mikrofon og sensorer. Prosessinnovasjon: Amazons automatiserte lagre med roboter som plukker varer. Markedsinnovasjon: Dollar Shave Club som solgte barberhøvler via abonnement i stedet for i butikk. Organisatorisk innovasjon: Spotify som bruker «squads» og «tribes» i stedet for tradisjonell hierarkisk organisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'eb-1-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb-1-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Schumpeter mente at kreativ destruksjon er positivt for samfunnet på lang sikt, selv om det skaper tapere på kort sikt. Diskuter denne påstanden. Hvem vinner og hvem taper? Er kreativ destruksjon alltid positivt?',
        hints: ['Tenk på både forbrukere, ansatte i gamle bransjer, nye gründere og samfunnet som helhet.'],
        solution: 'Vinnere: Forbrukere (bedre produkter, lavere priser), nye entreprenører (nye markeder), samfunnet (økt produktivitet og levestandard). Tapere: Ansatte i bransjer som erstattes (jobbtap), bedrifter som ikke klarer å omstille seg, lokalsamfunn avhengige av én næring. Kreativ destruksjon er ikke alltid udelt positivt – den kan øke ulikhet og skape sosial uro. Derfor er det viktig med omstillingsordninger, kompetanseheving og et sosialt sikkerhetsnett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-1-1-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'eb-1-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en bransje du tror vil bli sterkt påvirket av kreativ destruksjon de neste 10 årene. Beskriv hvilke innovasjoner som kan drive endringen, hvem som vil bli påvirket, og hva eksisterende bedrifter kan gjøre for å overleve.',
        hints: ['Tenk på bransjer som allerede er under press fra teknologi, f.eks. bank, transport, utdanning, helse, jordbruk.'],
        solution: 'Eksempel: Banknæringen. Innovasjoner: Kryptovaluta og desentralisert finans (DeFi), AI-drevet rådgivning, mobilbetalingsløsninger fra teknologiselskaper (Apple Pay, Vipps). Hvem påvirkes: Bankansatte (færre filialer), tradisjonelle banker (mister kunder), eiendomsmeglere (digitale boliglånsplattformer). Overlevelsesstrategier: Investere i egen teknologi, samarbeide med fintech-selskaper, fokusere på personlig rådgivning som AI ikke kan erstatte, og tilpasse forretningsmodellen til digitale kundereiser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'eb-1-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 1.1

- **Entreprenørskap** er prosessen med å identifisere muligheter, mobilisere ressurser og skape verdi.
- **Innovasjon** skiller seg fra oppfinnelse ved at den krever at noe nytt faktisk tas i bruk og skaper verdi.
- Det finnes fire typer innovasjon: produkt-, prosess-, markeds- og organisatorisk innovasjon.
- **Joseph Schumpeter** introduserte begrepet **kreativ destruksjon** – nye innovasjoner som erstatter det gamle.
- Entreprenørskap er viktig for økonomisk vekst, jobbskaping, innovasjon og løsning av samfunnsproblemer.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Entreprenørskap', definition: 'Prosessen med å identifisere muligheter, mobilisere ressurser og skape verdi gjennom nye eller forbedrede produkter, tjenester eller prosesser.' },
    { term: 'Innovasjon', definition: 'Å ta i bruk nye ideer, produkter, tjenester eller prosesser som skaper verdi for brukere eller samfunn.' },
    { term: 'Kreativ destruksjon', definition: 'Joseph Schumpeters begrep for prosessen der nye innovasjoner ødelegger og erstatter eksisterende produkter og forretningsmodeller.' },
    { term: 'Oppfinnelse', definition: 'Å skape noe helt nytt, i motsetning til innovasjon som handler om å ta det nye i bruk.' },
    { term: 'Produktinnovasjon', definition: 'Nye eller vesentlig forbedrede produkter eller tjenester.' },
    { term: 'Prosessinnovasjon', definition: 'Nye måter å produsere, levere eller organisere varer og tjenester på.' },
  ],
};

// ============================================================================
// Kapittel 1.2: Typer entreprenørskap
// ============================================================================

export const CHAPTER_ENTREBED_1_1_2: TextbookChapter = {
  id: 'entrebed-1-1-2',
  courseId: 'entrebed-1',
  chapterNumber: '1.2',
  title: 'Typer entreprenørskap',
  description: 'Utforsk de ulike formene for entreprenørskap: kommersielt, sosialt, intraprenørskap, seriell og livsstilsentreprenørskap.',
  estimatedMinutes: 23,
  competenceGoals: [
    'beskrive ulike typer entreprenørskap og forklare forskjellene mellom dem',
    'vurdere hvilken type entreprenørskap som passer i ulike situasjoner',
  ],
  content: [
    {
      id: 'eb-1-2-intro',
      type: 'text',
      content: `## Typer entreprenørskap

Entreprenørskap er ikke én ting. Det finnes mange forskjellige måter å være entreprenør på, og ikke alle handler om å tjene mest mulig penger. Noen entreprenører vil løse samfunnsproblemer, andre vil skape innovasjon i store organisasjoner, og noen vil rett og slett leve det livet de drømmer om.

I dette kapittelet skal vi se på fem hovedtyper av entreprenørskap:
1. Kommersielt entreprenørskap
2. Sosialt entreprenørskap
3. Intraprenørskap
4. Seriell entreprenørskap
5. Livsstilsentreprenørskap

Grensene mellom disse er ikke alltid skarpe – mange entreprenører kombinerer elementer fra flere typer.`,
    },
    {
      id: 'eb-1-2-def-kommersielt',
      type: 'definition',
      title: 'Kommersielt entreprenørskap',
      content: `**Kommersielt entreprenørskap** er den mest tradisjonelle formen for entreprenørskap, der hovedmålet er å skape økonomisk verdi og profitt.

**Kjennetegn:**
- Motivert av profitt og økonomisk vekst
- Skaper produkter eller tjenester som kunder er villige til å betale for
- Tar finansiell risiko med forventning om avkastning
- Suksess måles primært i omsetning, lønnsomhet og markedsandel

**Eksempler:**
- En gründer som starter en teknologibedrift
- En restauranteier som åpner en ny restaurant
- En utvikler som lager en betalingsapp`,
    },
    {
      id: 'eb-1-2-def-sosialt',
      type: 'definition',
      title: 'Sosialt entreprenørskap',
      content: `**Sosialt entreprenørskap** kombinerer forretningsmessige metoder med et mål om å løse sosiale eller miljømessige problemer. Overskuddet reinvesteres ofte i den sosiale misjonen.

**Kjennetegn:**
- Drevet av et sosialt eller miljømessig formål
- Bruker forretningsmodeller for å oppnå sosiale mål
- Økonomisk bærekraft er et middel, ikke et mål i seg selv
- Suksess måles i sosial påvirkning (impact)

**Kjennetegn som skiller sosialt fra kommersielt:**
| | Kommersielt | Sosialt |
|---|-----------|--------|
| **Hovedmål** | Profitt | Sosial/miljømessig endring |
| **Overskudd** | Til eiere/aksjonærer | Reinvesteres i misjonen |
| **Suksessmål** | Lønnsomhet | Sosial påvirkning |
| **Motivasjon** | Økonomisk belønning | Ønske om å gjøre en forskjell |`,
    },
    {
      id: 'eb-1-2-example-sosialt',
      type: 'example',
      title: 'Eksempel: Muhammad Yunus og Grameen Bank',
      problem: 'Hvordan er Grameen Bank et eksempel på sosialt entreprenørskap?',
      solution: `**Bakgrunn:**
Muhammad Yunus, økonomprofessor fra Bangladesh, observerte at fattige mennesker ikke fikk lån fra vanlige banker fordi de manglet sikkerhet. Uten tilgang til kapital kunne de ikke starte småbedrifter og løfte seg ut av fattigdom.

**Løsningen – Grameen Bank (1983):**
- Tilbyr mikrolån (helt ned til noen få dollar) til fattige, spesielt kvinner
- Krever ingen tradisjonell sikkerhet
- Låntakere organiseres i grupper som støtter hverandre
- Tilbakebetaling skjer i små ukentlige avdrag

**Resultater:**
- Over 9 millioner låntakere, 97 % kvinner
- Tilbakebetalingsrate på over 98 %
- Yunus fikk Nobels fredspris i 2006
- Inspirerte mikrofinans-bevegelsen globalt

**Sosialt entreprenørskap i praksis:**
Grameen Bank beviser at forretningstenkning kan løse sosiale problemer. Banken er lønnsom, men målet er å bekjempe fattigdom – ikke å maksimere profitt.`,
    },
    {
      id: 'eb-1-2-def-intraprenorskap',
      type: 'definition',
      title: 'Intraprenørskap',
      content: `**Intraprenørskap** er entreprenørskap innenfor en eksisterende organisasjon. En intraprenør er en ansatt som tenker og handler som en entreprenør, men bruker organisasjonens ressurser til å utvikle nye produkter, tjenester eller prosesser.

**Kjennetegn:**
- Foregår innenfor rammene av en eksisterende bedrift
- Bruker bedriftens ressurser (kapital, teknologi, merkevare)
- Lavere personlig finansiell risiko enn tradisjonelt entreprenørskap
- Krever en bedriftskultur som oppmuntrer til innovasjon og tåler feil

**Forutsetninger for intraprenørskap:**
- Ledelsen må gi frihet til å eksperimentere
- Det må finnes tid og ressurser til innovasjon
- Feil må tolereres som en del av læringsprosessen
- Det må finnes insentiver for innovasjon (bonus, anerkjennelse, karrieremuligheter)`,
    },
    {
      id: 'eb-1-2-example-post-it',
      type: 'example',
      title: 'Eksempel: Post-it og intraprenørskap hos 3M',
      problem: 'Hvordan ble Post-it-lappene et resultat av intraprenørskap?',
      solution: `**Bakgrunn:**
I 1968 forsøkte kjemikeren Spencer Silver hos 3M å lage et superlim. I stedet skapte han et lim som var svakt og lett å fjerne. Limet ble ansett som en mislykket oppfinnelse.

**Intraprenøren:**
I 1974 brukte Art Fry, en annen 3M-ansatt, Silvers lim til å lage bokmerker som ikke falt ut av sangboken hans i koret. Han innså at dette kunne bli et produkt.

**3Ms rolle:**
- 3M hadde en «15 %-regel» der ansatte fikk bruke 15 % av arbeidstiden på egne prosjekter
- Selskapet ga Fry ressurser til å videreutvikle ideen
- Etter mislykket markedstest i 1977 fikk Fry prøve på nytt i 1980

**Resultat:**
Post-it-lapper ble et av 3Ms mest kjente produkter med milliardinntekter. Det hele var mulig fordi 3M hadde en kultur som oppmuntret til eksperimentering og tolererte feil.

**Lærdom:** Intraprenørskap krever ikke bare gode ideer, men også en organisasjonskultur som gir rom for innovasjon.`,
    },
    {
      id: 'eb-1-2-seriell-livsstil',
      type: 'text',
      content: `## Seriell entreprenørskap

En **seriell entreprenør** er en person som starter flere bedrifter over tid. Etter å ha bygget opp én virksomhet, selger de den eller overlater driften til andre, for så å starte noe nytt.

**Kjennetegn:**
- Starter og bygger opp flere bedrifter gjennom karrieren
- Motivert av selve prosessen med å bygge noe nytt
- Bruker erfaring og nettverk fra tidligere bedrifter
- Høy risikotoleranse og evne til å se nye muligheter

**Kjent eksempel:** Elon Musk har startet eller ledet en rekke selskaper: Zip2, PayPal, SpaceX, Tesla, The Boring Company, Neuralink og xAI. Hver gang har han brukt erfaringer og kapital fra tidligere suksesser.

## Livsstilsentreprenørskap

En **livsstilsentreprenør** starter en bedrift primært for å oppnå en bestemt livsstil, ikke nødvendigvis for å maksimere vekst og profitt.

**Kjennetegn:**
- Prioriterer livskvalitet over økonomisk vekst
- Bedriften er tilpasset ønsket livsstil (fleksibilitet, frihet, reising)
- Ofte enmannsforetak eller små bedrifter
- Suksess måles i livskvalitet, ikke i omsetning

**Eksempler:**
- En frilansdesigner som jobber fra hjemme
- En yogainstruktør som driver eget studio
- En fotograf som reiser verden rundt
- En programmerer som jobber som digital nomade`,
    },
    {
      id: 'eb-1-2-note-kombinasjon',
      type: 'note',
      title: 'Entreprenørskap i kombinasjon',
      content: `I praksis kombinerer mange entreprenører elementer fra flere typer. En sosialt bevisst gründer kan starte en kommersiell bedrift med sterk sosialt profil. En livsstilsentreprenør kan utvikle seg til en seriell entreprenør. Og mange intraprenører forlater etter hvert storselskapet for å starte egen bedrift.

Det viktigste er å forstå at det finnes **mange veier til entreprenørskap**, og at alle typene bidrar til verdiskaping og utvikling i samfunnet.`,
    },
    {
      id: 'eb-1-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb-1-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom sosialt og kommersielt entreprenørskap?',
        options: [
          { id: 'a', text: 'Sosialt entreprenørskap bruker aldri forretningsmodeller', isCorrect: false },
          { id: 'b', text: 'Kommersielt entreprenørskap har profitt som hovedmål, sosialt har sosial endring som hovedmål', isCorrect: true },
          { id: 'c', text: 'Sosialt entreprenørskap er alltid ulønnsomt', isCorrect: false },
          { id: 'd', text: 'Kommersielt entreprenørskap er kun for store bedrifter', isCorrect: false },
        ],
        solution: 'Hovedforskjellen ligger i primærmålet: kommersielt entreprenørskap søker profitt, mens sosialt entreprenørskap søker sosial eller miljømessig endring. Sosialt entreprenørskap bruker også forretningsmodeller, men overskuddet reinvesteres typisk i den sosiale misjonen.',
      },
    },
    {
      id: 'eb-1-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb-1-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er intraprenørskap?',
        options: [
          { id: 'a', text: 'Å starte en bedrift alene uten hjelp fra andre', isCorrect: false },
          { id: 'b', text: 'Å investere i andre bedrifter', isCorrect: false },
          { id: 'c', text: 'Entreprenørskap innenfor en eksisterende organisasjon', isCorrect: true },
          { id: 'd', text: 'Å starte en ny bedrift etter at den forrige gikk konkurs', isCorrect: false },
        ],
        solution: 'Intraprenørskap er når ansatte tenker og handler som entreprenører innenfor en eksisterende bedrift. De bruker organisasjonens ressurser til å utvikle nye ideer, som for eksempel Post-it-lappene hos 3M.',
      },
    },
    {
      id: 'eb-1-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb-1-2-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er et godt eksempel på livsstilsentreprenørskap?',
        options: [
          { id: 'a', text: 'En gründer som starter et teknologiselskap og søker investorer for rask vekst', isCorrect: false },
          { id: 'b', text: 'En yogainstruktør som driver eget studio for å ha fleksibel arbeidstid', isCorrect: true },
          { id: 'c', text: 'En ansatt i Google som utvikler et nytt produkt internt', isCorrect: false },
          { id: 'd', text: 'En person som oppretter en veldedig stiftelse', isCorrect: false },
        ],
        solution: 'Livsstilsentreprenørskap handler om å skape en bedrift som støtter ønsket livsstil. En yogainstruktør med eget studio prioriterer fleksibilitet og livsglede over maksimal profitt og vekst.',
      },
    },
    {
      id: 'eb-1-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb-1-2-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva som kjennetegner en seriell entreprenør, og gi minst to eksempler på kjente serielle entreprenører (norske eller internasjonale). Beskriv kort hvilke bedrifter de har startet.',
        hints: ['Tenk på gründere som har startet flere selskaper. Se gjerne på norske som Petter Stordalen eller internasjonale som Elon Musk og Richard Branson.'],
        solution: 'En seriell entreprenør starter flere bedrifter over tid, ofte motivert av selve prosessen med å bygge noe nytt. Eksempler: (1) Elon Musk: Medgrunnlegger av PayPal, grunnlegger av SpaceX, Tesla, The Boring Company og Neuralink. (2) Petter Stordalen: Startet med eiendom, bygde opp Nordic Choice Hotels, investert i matindustrien (Orkla), startet Strawberry Publishing og flere andre selskaper. (3) Richard Branson: Startet Virgin Records, Virgin Atlantic, Virgin Galactic og over 400 selskaper under Virgin-paraplyen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-1-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb-1-2-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Velg en sosial entreprenør eller en sosial virksomhet du kjenner til (norsk eller internasjonal). Beskriv hvilket samfunnsproblem de løser, hvilken forretningsmodell de bruker, og hvorfor dette er et godt eksempel på sosialt entreprenørskap.',
        hints: ['Norske eksempler kan være Fretex, Entur eller Lånekassen. Internasjonale: Grameen Bank, TOMS Shoes, Patagonia.'],
        solution: 'Eksempel: Fretex (Frelsesarmeens gjenbrukskjede). Samfunnsproblem: Arbeidsledighet blant vanskeligstilte grupper og bærekraft/gjenbruk. Forretningsmodell: Samler inn brukte klær og gjenstander som selges i butikker. Gir arbeidsplasser og arbeidstrening til mennesker som står utenfor arbeidslivet. Overskuddet går til Frelsesarmeens sosiale arbeid. Sosialt entreprenørskap fordi: Bruker forretningsdrift (salg av brukte varer) for å oppnå et sosialt mål (inkludering i arbeidslivet og redusert avfall).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'eb-1-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb-1-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du skal starte en virksomhet. Hvilken type entreprenørskap ville du valgt (kommersielt, sosialt, livsstilsentreprenørskap), og hvorfor? Beskriv kort en mulig forretningsidé og forklar hvordan den passer til den valgte typen.',
        hints: ['Det finnes ikke noe fasitsvar her – det handler om å reflektere over egne verdier, mål og interesser.'],
        solution: 'Her vurderes elevens evne til å reflektere over egne mål og koble dem til teori. Et godt svar inneholder: valg av type med begrunnelse knyttet til personlige verdier, en konkret forretningsidé, og en forklaring av hvordan ideen passer inn i den valgte kategorien. Eksempel: «Jeg ville valgt sosialt entreprenørskap og startet en bedrift som lager sunne skolemåltider fra lokale råvarer. Målet er å gi barn bedre ernæring, samtidig som vi støtter lokale bønder. Vi ville brukt en abonnementsmodell der skoler betaler en fast pris per elev.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-1-2-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'eb-1-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter fordeler og ulemper ved intraprenørskap sammenlignet med å starte en helt ny bedrift. Når er intraprenørskap det beste valget, og når bør man heller starte for seg selv?',
        hints: ['Tenk på faktorer som risiko, ressurser, frihet, inntekt og innovasjonstempo.'],
        solution: 'Fordeler med intraprenørskap: Lavere personlig risiko (fast lønn), tilgang til bedriftens ressurser (kapital, teknologi, merkevare, kunder), eksisterende nettverk og infrastruktur. Ulemper: Begrenset frihet (må følge bedriftens regler), kan møte motstand fra konservative krefter i organisasjonen, beholder ikke selv eierskapet til innovasjonen. Intraprenørskap passer best når: Ideen krever store ressurser, man verdsetter trygghet, ideen bygger på bedriftens kjernekompetanse. Starte selv passer best når: Man ønsker full kontroll, ideen ligger utenfor bedriftens kjernevirksomhet, man er villig til å ta finansiell risiko, bedriften ikke har kultur for innovasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'eb-1-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 1.2

- **Kommersielt entreprenørskap** fokuserer på profitt og økonomisk verdiskaping.
- **Sosialt entreprenørskap** bruker forretningsmetoder for å løse samfunnsproblemer.
- **Intraprenørskap** er entreprenørskap innenfor en eksisterende organisasjon, og krever en kultur som tolererer feil og oppmuntrer til innovasjon.
- **Seriell entreprenørskap** betyr å starte flere bedrifter over tid, drevet av gleden ved å bygge noe nytt.
- **Livsstilsentreprenørskap** handler om å skape en bedrift som støtter ønsket livsstil.
- I praksis kombinerer mange entreprenører elementer fra flere typer.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kommersielt entreprenørskap', definition: 'Entreprenørskap med profitt og økonomisk vekst som hovedmål.' },
    { term: 'Sosialt entreprenørskap', definition: 'Entreprenørskap som bruker forretningsmetoder for å løse sosiale eller miljømessige problemer.' },
    { term: 'Intraprenørskap', definition: 'Entreprenørskap innenfor en eksisterende organisasjon, der ansatte utvikler nye produkter eller prosesser.' },
    { term: 'Seriell entreprenørskap', definition: 'En entreprenør som starter flere bedrifter over tid.' },
    { term: 'Livsstilsentreprenørskap', definition: 'Entreprenørskap motivert av ønsket om en bestemt livsstil, ikke nødvendigvis maksimal vekst.' },
    { term: 'Mikrolån', definition: 'Små lån til fattige mennesker som ikke kvalifiserer til vanlige banklån, populært gjennom Grameen Bank.' },
  ],
};

// ============================================================================
// Kapittel 1.3: Entreprenørens egenskaper
// ============================================================================

export const CHAPTER_ENTREBED_1_1_3: TextbookChapter = {
  id: 'entrebed-1-1-3',
  courseId: 'entrebed-1',
  chapterNumber: '1.3',
  title: 'Entreprenørens egenskaper',
  description: 'Lær om de personlige, faglige og sosiale egenskapene som kjennetegner vellykkede entreprenører, og hvordan du kan utvikle disse.',
  estimatedMinutes: 22,
  competenceGoals: [
    'beskrive ulike typer entreprenører og deres egenskaper',
    'reflektere over egne styrker og utviklingsområder i lys av entreprenøregenskaper',
  ],
  content: [
    {
      id: 'eb-1-3-intro',
      type: 'text',
      content: `## Entreprenørens egenskaper

Er det noen bestemte egenskaper som gjør at noen lykkes som entreprenører? Forskning viser at det ikke finnes én «entreprenørpersonlighet», men at visse egenskaper går igjen hos mange vellykkede gründere.

Det viktige er at de fleste av disse egenskapene **kan utvikles og trenes**. Du trenger ikke å være født som entreprenør – du kan bli en.

I dette kapittelet ser vi på tre kategorier av egenskaper:
1. **Personlige egenskaper** – hvordan du tenker og handler
2. **Faglige egenskaper** – hva du kan og vet
3. **Sosiale egenskaper** – hvordan du samhandler med andre`,
    },
    {
      id: 'eb-1-3-personlige',
      type: 'text',
      content: `## Personlige egenskaper

Personlige egenskaper handler om din indre motivasjon, holdninger og tenkemåte. Forskning på entreprenører peker på flere sentrale personlige egenskaper:

### Kreativitet og nytenkning
Evnen til å se ting fra nye vinkler og finne originale løsninger. Kreativitet handler ikke bare om kunst – det handler om å kombinere kjent kunnskap på nye måter.

### Risikovilje
Entreprenører er villige til å ta kalkulert risiko. De er ikke dumdristige – de veier muligheter mot risiko og tør å handle selv om utfallet er usikkert.

### Utholdenhet og motstandskraft
De fleste suksesshistorier inneholder også mange tilbakeslag. Evnen til å stå på tross av motgang – ofte kalt **resiliens** – er avgjørende.

### Selvtillit og mestringstro
**Mestringstro** (self-efficacy) er troen på at du kan lykkes med det du gjør. Entreprenører har gjerne høy mestringstro, men uten å bli overmodige.

### Handlingsorientert
Mange har gode ideer, men entreprenører skiller seg ut ved å faktisk **handle** på ideene sine. De venter ikke på at forholdene skal bli perfekte.

### Evne til å se muligheter
Der andre ser problemer, ser entreprenøren muligheter. Denne «mulighetsorienteringen» er en tenkemåte som kan trenes opp.`,
    },
    {
      id: 'eb-1-3-def-mestringstro',
      type: 'definition',
      title: 'Mestringstro (self-efficacy)',
      content: `**Mestringstro** er troen på egne evner til å gjennomføre handlinger som kreves for å nå bestemte mål. Begrepet ble introdusert av psykologen Albert Bandura (1977). Forskning viser at mestringstro er en av de sterkeste prediktorene for entreprenøriell intensjon – altså sannsynligheten for at noen faktisk starter en bedrift.

Mestringstro kan styrkes gjennom:
- **Mestringsopplevelser:** Å lykkes med oppgaver bygger tro på egne evner
- **Rollemodeller:** Å se andre som lykkes inspirerer
- **Oppmuntring:** Positiv tilbakemelding fra andre
- **Stressmestring:** Å lære å håndtere press og usikkerhet`,
    },
    {
      id: 'eb-1-3-faglige',
      type: 'text',
      content: `## Faglige egenskaper

Faglige egenskaper handler om kunnskap og ferdigheter som er nødvendige for å starte og drive en bedrift.

### Forretningsforståelse
Å forstå hvordan en bedrift fungerer: inntekter, kostnader, lønnsomhet, kontantstrøm og verdiskaping. Du trenger ikke være økonom, men du må forstå grunnleggende forretningslogikk.

### Bransjekunnskap
Kjennskap til bransjen du opererer i – kunder, konkurrenter, leverandører, trender og reguleringer. Mange vellykkede entreprenører har jobbet i bransjen før de starter for seg selv.

### Planleggings- og organiseringsevne
Evnen til å sette mål, lage planer, prioritere oppgaver og holde oversikt. En god entreprenør trenger ikke gjøre alt selv, men må vite hva som må gjøres.

### Kommunikasjons- og salgsferdigheter
Å kunne presentere ideene sine overbevisende – for kunder, investorer, partnere og ansatte. Salg er en kjernekompetanse for enhver entreprenør.

### Økonomistyring
Å forstå regnskap, budsjettering og kontantstrøm. Mange lovende bedrifter går konkurs ikke fordi de mangler kunder, men fordi de går tom for penger.

### Digital kompetanse
I en stadig mer digital verden er evnen til å bruke digitale verktøy, forstå sosiale medier og utnytte teknologi en viktig faglig egenskap.`,
    },
    {
      id: 'eb-1-3-sosiale',
      type: 'text',
      content: `## Sosiale egenskaper

Ingen entreprenør lykkes alene. Sosiale egenskaper handler om hvordan du samhandler med andre mennesker.

### Lederskap og motivasjonsevne
Evnen til å inspirere, motivere og lede andre. En god leder skaper en visjon som andre vil være med å realisere.

### Samarbeidsevne
Å kunne jobbe effektivt med andre – medgründere, ansatte, leverandører og kunder. Entreprenørskap er en lagsport, selv om det ofte starter med én person.

### Nettverksbygging
Å bygge og vedlikeholde relasjoner som kan hjelpe bedriften. Et godt nettverk gir tilgang til kunnskap, ressurser, kunder og samarbeidspartnere.

### Evne til å bygge tillit
Tillit er grunnlaget for alle forretningsrelasjoner. Kunder, investorer og ansatte må stole på deg. Tillit bygges gjennom ærlighet, pålitelighet og å holde det du lover.

### Forhandlingsevner
Evnen til å finne løsninger som begge parter kan akseptere – enten det gjelder kontrakter med leverandører, avtaler med investorer eller lønn til ansatte.

### Empati og kundeforståelse
Å forstå andres behov, ønsker og frustrasjoner. Empatisk forståelse av kundene er grunnlaget for å skape produkter og tjenester som treffer.`,
    },
    {
      id: 'eb-1-3-example-egenskaper',
      type: 'example',
      title: 'Eksempel: Sara Blakely og Spanx',
      problem: 'Hvilke entreprenøregenskaper viste Sara Blakely da hun grunnla Spanx?',
      solution: `**Bakgrunn:**
Sara Blakely var en 27 år gammel dør-til-dør-selger i Florida da hun klippet føttene av en strømpebukse for å få et glattere utseende under hvite bukser. Hun innså at det ikke fantes et slikt produkt i markedet.

**Personlige egenskaper:**
- *Kreativitet:* Så en løsning der ingen andre så den
- *Utholdenhet:* Ble avvist av mange produsenter før én sa ja
- *Handlingsorientert:* Brukte sparepenger (5000 dollar) til å starte selv
- *Mestringstro:* Trodde på ideen selv når andre var skeptiske

**Faglige egenskaper:**
- *Salgsferdigheter:* Lært gjennom dør-til-dør-salg; presenterte Spanx personlig for innkjøpere
- *Bransjekunnskap:* Lærte seg alt om strømpeproduksjon på egenhånd
- *Patentarbeid:* Skrev patentsøknaden selv for å spare penger

**Sosiale egenskaper:**
- *Nettverksbygging:* Fikk produktet inn i Neiman Marcus gjennom å demonstrere det personlig
- *Overbevisningsevne:* Fikk Oprah Winfrey til å kåre Spanx som «Favorite Thing» i 2000

**Resultat:** Spanx ble et milliardselskap, og Blakely ble verdens yngste selvlagde kvinnelige milliardær (ifølge Forbes 2012).`,
    },
    {
      id: 'eb-1-3-tip-utvikle',
      type: 'tip',
      title: 'Entreprenøregenskaper kan utvikles',
      content: `Du trenger ikke være født med alle disse egenskapene. Forskning viser at de fleste kan utvikles gjennom praksis og bevisst trening:

- **Kreativitet** kan trenes gjennom brainstorming, skriving og å eksponere deg for nye perspektiver
- **Risikovilje** kan bygges opp gradvis ved å ta små sjanser og reflektere over resultatene
- **Salgsferdigheter** kan læres gjennom kurs, øvelse og erfaring
- **Nettverksbygging** starter med å delta på arrangementer og vise genuin interesse for andre
- **Mestringstro** styrkes hver gang du klarer noe du trodde var vanskelig

Et godt sted å starte er **ungdomsbedrift (UB)** på skolen, der du kan øve på alle disse egenskapene i praksis.`,
    },
    {
      id: 'eb-1-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb-1-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er mestringstro (self-efficacy)?',
        options: [
          { id: 'a', text: 'Troen på at flaks avgjør om man lykkes', isCorrect: false },
          { id: 'b', text: 'Troen på egne evner til å gjennomføre handlinger som kreves for å nå bestemte mål', isCorrect: true },
          { id: 'c', text: 'En medfødt egenskap som ikke kan endres', isCorrect: false },
          { id: 'd', text: 'Det samme som selvtillit og arroganse', isCorrect: false },
        ],
        solution: 'Mestringstro er troen på egne evner til å lykkes med bestemte oppgaver. Begrepet ble introdusert av Albert Bandura og er en av de sterkeste prediktorene for om noen faktisk starter en bedrift.',
      },
    },
    {
      id: 'eb-1-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb-1-3-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken av disse er en faglig egenskap hos en entreprenør?',
        options: [
          { id: 'a', text: 'Kreativitet', isCorrect: false },
          { id: 'b', text: 'Økonomistyring', isCorrect: true },
          { id: 'c', text: 'Nettverksbygging', isCorrect: false },
          { id: 'd', text: 'Utholdenhet', isCorrect: false },
        ],
        solution: 'Økonomistyring er en faglig egenskap (kunnskap og ferdighet). Kreativitet og utholdenhet er personlige egenskaper, og nettverksbygging er en sosial egenskap.',
      },
    },
    {
      id: 'eb-1-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb-1-3-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva menes med at entreprenører tar «kalkulert risiko»?',
        options: [
          { id: 'a', text: 'De gambler uten å tenke på konsekvensene', isCorrect: false },
          { id: 'b', text: 'De unngår all risiko', isCorrect: false },
          { id: 'c', text: 'De veier muligheter mot risiko og handler selv om utfallet er usikkert', isCorrect: true },
          { id: 'd', text: 'De tar kun risiko når de er 100 % sikre på å lykkes', isCorrect: false },
        ],
        solution: 'Kalkulert risiko betyr å vurdere sannsynligheten for suksess og fiasko, forstå hva man kan tape, og likevel handle fordi mulighetene oppveier risikoen. Det er hverken dumdristighet eller feighet.',
      },
    },
    {
      id: 'eb-1-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb-1-3-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Lag en oversikt over dine egne entreprenøregenskaper. Del dem inn i personlige, faglige og sosiale egenskaper. Hvilke egenskaper er dine styrker, og hvilke ønsker du å utvikle videre? Lag en plan for hvordan du kan jobbe med én egenskap du vil forbedre.',
        hints: ['Bruk de tre kategoriene fra kapittelet. Vær ærlig – alle har styrker og utviklingsområder.'],
        solution: 'Her vurderes elevens evne til selvrefleksjon og kobling til teori. Et godt svar inneholder: ærlig vurdering av egne styrker og svakheter fordelt på de tre kategoriene, konkret plan for utvikling av en egenskap (f.eks. «Jeg vil styrke salgsferdigheter ved å delta på UB og øve på å presentere ideer for andre»), og begrunnelse for valget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-1-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb-1-3-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Velg en kjent entreprenør (norsk eller internasjonal) og analyser hvilke personlige, faglige og sosiale egenskaper som har bidratt til denne personens suksess. Bruk minst to egenskaper fra hver kategori.',
        hints: ['Bruk eksempler som Ingvar Kamprad (IKEA), Sara Blakely (Spanx), Petter Stordalen, Anita Krohn Traaseth, eller andre du kjenner til.'],
        solution: 'Eksempel med Ingvar Kamprad (IKEA): Personlige: Kreativitet (flat-pakk-konseptet, Billy-bokhyllen), utholdenhet (startet som 17-åring, møtte mange motbakker), nøysomhet (levde enkelt tross sin formue). Faglige: Forretningsforståelse (revolusjonerte møbelbransjen med lavpriskonseptet), logistikkunnskap (effektiv distribusjon). Sosiale: Lederskap (inspirerte ansatte med sin lidenskap for demokratisk design), empati (forsto at vanlige familier trengte rimelige møbler), nettverksbygging (bygde relasjoner med leverandører i lavkostland).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'eb-1-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb-1-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Noen mener at entreprenører er «født slik» – at det er en medfødt personlighetstype. Andre mener at entreprenøregenskaper kan læres og utvikles. Diskuter begge synspunktene. Hva sier forskningen?',
        hints: ['Tenk på Albert Banduras teori om mestringstro og forskning på vekstmentalitet (growth mindset).'],
        solution: 'Forskning støtter i hovedsak synet om at entreprenøregenskaper kan utvikles. Argumenter for «født slik»: Noen personlighetstrekk (ekstroversjon, åpenhet) har genetiske komponenter, noen mennesker er naturlig mer risikovillige. Argumenter mot: Mestringstro (Bandura) kan styrkes gjennom erfaring, forskning på vekstmentalitet (Dweck) viser at evner utvikles gjennom innsats, mange vellykkede gründere hadde ikke typiske «entreprenørtrekk» som unge, utdanning og erfaring styrker faglige egenskaper betydelig. Konklusjon: Genetikk kan gi noen et utgangspunkt, men miljø, utdanning, erfaringer og bevisst trening er langt viktigere for å bli en god entreprenør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-1-3-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'eb-1-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Intervju en person du kjenner som har startet en bedrift eller et prosjekt (det kan være en forelder, en nabo, eller en lokal gründer). Still spørsmål om hvilke egenskaper denne personen mener har vært viktigst, og om noe overrasket dem underveis. Skriv et kort referat (200–300 ord).',
        hints: ['Forbered 5–7 spørsmål på forhånd. Spør om utfordringer, egenskaper og hva de ville gjort annerledes.'],
        solution: 'Her vurderes elevens evne til å gjennomføre et intervju, koble det til teori og reflektere. Et godt svar inneholder: kort presentasjon av personen og bedriften, 3–4 konkrete egenskaper som nevnes og kobles til kategoriene fra kapittelet, refleksjon over hva som overrasket, og elevens egen læring fra intervjuet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'eb-1-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 1.3

- Entreprenøregenskaper deles inn i **personlige** (kreativitet, risikovilje, utholdenhet, mestringstro), **faglige** (forretningsforståelse, bransjekunnskap, økonomistyring, salgsferdigheter) og **sosiale** (lederskap, nettverksbygging, samarbeidsevne, empati).
- **Mestringstro** (self-efficacy) er troen på egne evner og en av de sterkeste prediktorene for entreprenøriell intensjon.
- De fleste entreprenøregenskaper **kan utvikles** gjennom praksis, utdanning og bevisst trening.
- Ingen entreprenør har alle egenskapene i perfekt grad – det viktigste er å kjenne sine styrker, jobbe med sine svakheter og omgi seg med folk som utfyller deg.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Mestringstro', definition: 'Troen på egne evner til å gjennomføre handlinger for å nå bestemte mål (Albert Bandura).' },
    { term: 'Resiliens', definition: 'Evnen til å reise seg etter motgang og tilbakeslag, også kalt motstandskraft.' },
    { term: 'Kalkulert risiko', definition: 'Å veie muligheter mot risiko og handle selv om utfallet er usikkert.' },
    { term: 'Nettverksbygging', definition: 'Å bygge og vedlikeholde relasjoner som gir tilgang til kunnskap, ressurser og muligheter.' },
    { term: 'Empati', definition: 'Evnen til å forstå andres behov, ønsker og følelser.' },
    { term: 'Vekstmentalitet', definition: 'Troen på at evner og egenskaper kan utvikles gjennom innsats og læring (Carol Dweck).' },
  ],
};

// ============================================================================
// Kapittel 1.4: Entreprenørskapets historie
// ============================================================================

export const CHAPTER_ENTREBED_1_1_4: TextbookChapter = {
  id: 'entrebed-1-1-4',
  courseId: 'entrebed-1',
  chapterNumber: '1.4',
  title: 'Entreprenørskapets historie',
  description: 'Følg entreprenørskapets utvikling fra den industrielle revolusjonen via masseproduksjon og IT-revolusjonen til dagens digitale transformasjon.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for entreprenørskapets historiske utvikling',
    'forklare hvordan teknologiske endringer har påvirket entreprenørskap gjennom historien',
  ],
  content: [
    {
      id: 'eb-1-4-intro',
      type: 'text',
      content: `## Entreprenørskapets historie

Entreprenørskap er ikke et moderne fenomen. Helt siden mennesker begynte å handle med hverandre, har det eksistert enkeltpersoner som har sett muligheter og tatt initiativ til å skape noe nytt.

Men det er først de siste 250 årene at entreprenørskap har fått den formen vi kjenner i dag. I dette kapittelet følger vi utviklingen gjennom fire store perioder:

1. **Den industrielle revolusjonen** (ca. 1760–1840)
2. **Masseproduksjon og storselskaper** (ca. 1870–1970)
3. **IT-revolusjonen** (ca. 1970–2000)
4. **Digital transformasjon og plattformøkonomi** (2000–i dag)

Gjennom hele denne historien ser vi et gjennomgående mønster: nye teknologier skaper nye muligheter for entreprenører, som igjen endrer samfunnet grunnleggende.`,
    },
    {
      id: 'eb-1-4-industriell',
      type: 'text',
      content: `## Den industrielle revolusjonen (ca. 1760–1840)

Den industrielle revolusjonen startet i England og spredte seg til resten av Europa og Nord-Amerika. Den markerte overgangen fra håndverksproduksjon til maskinbasert industri.

### Hva drev endringen?
- **Dampmaskinen** (James Watt, 1769) erstattet muskelkraft med maskinkraft
- **Spinnemaskinen** og **vevstolen** revolusjonerte tekstilindustrien
- **Jernbanen** åpnet nye muligheter for transport og handel

### Entreprenørene i denne perioden
- **Richard Arkwright** (1732–1792): Bygde den første vannkraftdrevne bomullsfabrikken. Regnes som en av de første moderne industrielle entreprenørene.
- **James Watt** (1736–1819): Forbedret dampmaskinen og kommersialiserte den med forretningspartner Matthew Boulton.
- **Josiah Wedgwood** (1730–1795): Revolusjonerte keramikkindustrien med nye produksjonsmetoder og markedsføring.

### Samfunnsendringer
- Urbanisering: Millioner flyttet fra landsbygda til byene
- Ny arbeiderklasse oppsto i fabrikkene
- Økt levestandard for noen, men også barnearbeid og dårlige arbeidsforhold
- Handel og økonomi ble global i en helt ny skala`,
    },
    {
      id: 'eb-1-4-def-industriell',
      type: 'definition',
      title: 'Den industrielle revolusjonen',
      content: `**Den industrielle revolusjonen** var overgangen fra håndverksproduksjon til maskinbasert fabrikkindustri, som startet i England rundt 1760. Den førte til enorme endringer i produksjon, transport, samfunnsstruktur og økonomi. Dampmaskinen, spinnemaskinen og jernbanen var sentrale teknologier som muliggjorde denne transformasjonen.`,
    },
    {
      id: 'eb-1-4-masseproduksjon',
      type: 'text',
      content: `## Masseproduksjon og storselskaper (ca. 1870–1970)

Den andre industrielle revolusjonen brakte elektrisitet, telefon, bil og fly. Denne perioden ble preget av store selskaper, masseproduksjon og profesjonell ledelse.

### Nøkkelteknologier
- **Elektrisitet** muliggjorde fabrikker overalt (ikke bare ved vannfall)
- **Telefonen** (Alexander Graham Bell, 1876) revolusjonerte kommunikasjon
- **Forbrenningsmotoren** skapte bilindustrien
- **Samlebåndet** (Henry Ford, 1913) revolusjonerte produksjonseffektiviteten

### De store entreprenørene
- **Henry Ford** (1863–1947): Samlebåndsproduksjon av biler, $5-dagslønnen for arbeidere
- **Thomas Edison** (1847–1931): Lyspæren, fonografen, filmindustrien – startet over 100 selskaper
- **Andrew Carnegie** (1835–1919): Bygde opp den amerikanske stålindustrien
- **John D. Rockefeller** (1839–1937): Standard Oil – dominerte olje- og gassindustrien

### Fra gründer til profesjonell ledelse
I denne perioden ble mange bedrifter for store til å ledes av gründeren alene. Profesjonell ledelse (management) ble en egen disiplin. **Frederick Taylor** introduserte vitenskapelig ledelse, og bedrifter fikk avdelinger for markedsføring, økonomi, produksjon og personalforvaltning.

### Velferdsstatens framvekst
Entreprenørskap skapte enorm rikdom, men også ulikhet. Som reaksjon kom arbeiderbevegelsen, fagforeninger og etter hvert velferdsstaten – som igjen skapte nye rammebetingelser for entreprenørskap.`,
    },
    {
      id: 'eb-1-4-it-revolusjon',
      type: 'text',
      content: `## IT-revolusjonen (ca. 1970–2000)

Utviklingen av datamaskinen og senere internett skapte en helt ny bølge av entreprenørskap. Barrierene for å starte en bedrift sank dramatisk.

### Nøkkelteknologier
- **Mikroprosessoren** (Intel, 1971) muliggjorde personlige datamaskiner
- **Personlige datamaskiner** (Apple II 1977, IBM PC 1981) demokratiserte datateknologi
- **Internett** (kommersielt fra ca. 1995) koblet verden sammen
- **E-post, nettsider og netthandel** endret forretningsmodellene

### Garasje-gründerne
IT-revolusjonen skapte en ny type entreprenør – unge mennesker som startet bedrifter fra garasjer og studenthybler:

- **Steve Jobs og Steve Wozniak** (Apple, 1976): Startet i en garasje, revolusjonerte personlige datamaskiner og senere mobiltelefoni
- **Bill Gates og Paul Allen** (Microsoft, 1975): Gjorde programvare til en egen bransje
- **Jeff Bezos** (Amazon, 1994): Startet som nettbokhandel, ble verdens største nettbutikk
- **Larry Page og Sergey Brin** (Google, 1998): Revolusjonerte søk og reklame på nettet

### Hva var nytt?
- Kapital ble mindre viktig – du trengte ikke en fabrikk for å starte
- Kunnskap og kreativitet ble viktigere enn fysiske ressurser
- Venturefond og forretningsengler finansierte innovative oppstartsbedrifter
- **Silicon Valley** i California ble verdens sentrum for teknologientreprenørskap

### Dot-com-boblen (2000)
Den enorme optimismen rundt internett førte til en spekulasjonsboble der mange nettselskaper ble verdsatt til urealistiske verdier. Boblen sprakk i 2000, og mange selskaper gikk konkurs. Men de som overlevde (Amazon, Google, eBay) ble sterkere og la grunnlaget for neste fase.`,
    },
    {
      id: 'eb-1-4-digital',
      type: 'text',
      content: `## Digital transformasjon og plattformøkonomi (2000–i dag)

Etter dot-com-boblen kom en ny æra preget av smarttelefoner, sosiale medier, kunstig intelligens og plattformøkonomien.

### Nøkkelteknologier
- **Smarttelefonen** (iPhone, 2007) ga alle en kraftig datamaskin i lomma
- **Sosiale medier** (Facebook 2004, Instagram 2010, TikTok 2016) skapte nye kommunikasjonskanaler
- **Skytjenester** (AWS, Azure) fjernet behovet for egne servere
- **Kunstig intelligens og maskinlæring** automatiserer og personaliserer

### Plattformøkonomien
De mest vellykkede selskapene i denne perioden er **plattformer** som kobler tilbydere og etterspørrere:

| Plattform | Kobler | Verdi |
|-----------|--------|-------|
| Uber | Sjåfører og passasjerer | Transport uten å eie biler |
| Airbnb | Utleiere og reisende | Overnatting uten å eie hoteller |
| YouTube | Skapere og seere | Underholdning uten å produsere innhold |
| App Store | Utviklere og brukere | Programvare uten å distribuere fysisk |

### Hva kjennetegner moderne entreprenørskap?
- **Lavere oppstartsbarrierer:** Med en laptop og internett kan du starte en global bedrift
- **Skalerbarhet:** Digitale produkter kan kopieres uten ekstra kostnad
- **Nettverkseffekter:** Jo flere brukere, desto mer verdi (f.eks. sosiale medier)
- **Data som ressurs:** Brukerdata gir innsikt for personalisering og innovasjon
- **Bærekraft:** Økende fokus på miljø og samfunnsansvar
- **Kunstig intelligens:** AI som verktøy for innovasjon og effektivisering`,
    },
    {
      id: 'eb-1-4-example-tidslinje',
      type: 'example',
      title: 'Eksempel: Fotobransjen gjennom 150 år av kreativ destruksjon',
      problem: 'Hvordan illustrerer fotobransjens utvikling gjentatt kreativ destruksjon?',
      solution: `**1880-tallet: Kodak skaper fotoindustrien**
George Eastman grunnla Kodak og demokratiserte fotografering med rimelige kameraer og filmruller. Slagordet var «You press the button, we do the rest.»

**1970-tallet: Polaroid utfordrer**
Polaroid introduserte øyeblikkelig fremkalling – du trengte ikke vente dager på bilder. Kreativ destruksjon av den tradisjonelle fotobutikken.

**1990-tallet: Digitalkameraer**
Digitale kameraer eliminerte behovet for filmruller. Ironisk nok oppfant Kodak det første digitalkameraet i 1975, men torde ikke satse på det fordi det ville ødelegge filmforretningen.

**2007: Smarttelefonen**
iPhone og andre smarttelefoner med kamera erstattet kompaktkameraer. «Det beste kameraet er det du har med deg.»

**2010-tallet: Instagram og sosiale medier**
Foto ble sosial valuta. Redigering, filtre og deling ble viktigere enn teknisk kvalitet. Instagram (2010) ble kjøpt av Facebook for 1 milliard dollar i 2012.

**Lærdom:**
Kodak gikk konkurs i 2012 – et selskap som hadde dominert fotobransjen i over 100 år. Hvert teknologisk sprang skapte nye muligheter for entreprenører og gjorde det gamle foreldet.`,
    },
    {
      id: 'eb-1-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb-1-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken teknologi var mest sentral i den industrielle revolusjonen?',
        options: [
          { id: 'a', text: 'Internett', isCorrect: false },
          { id: 'b', text: 'Dampmaskinen', isCorrect: true },
          { id: 'c', text: 'Smarttelefonen', isCorrect: false },
          { id: 'd', text: 'Samlebåndet', isCorrect: false },
        ],
        solution: 'Dampmaskinen var den mest sentrale teknologien i den industrielle revolusjonen (ca. 1760–1840). Samlebåndet kom under den andre industrielle revolusjonen (ca. 1913), mens internett og smarttelefonen kom mye senere.',
      },
    },
    {
      id: 'eb-1-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb-1-4-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner plattformøkonomien?',
        options: [
          { id: 'a', text: 'Store fabrikker med mange ansatte', isCorrect: false },
          { id: 'b', text: 'Selskaper som kobler tilbydere og etterspørrere digitalt', isCorrect: true },
          { id: 'c', text: 'Statlig regulering av all næringsvirksomhet', isCorrect: false },
          { id: 'd', text: 'Tradisjonell butikkhandel med fysiske produkter', isCorrect: false },
        ],
        solution: 'Plattformøkonomien kjennetegnes av selskaper som Uber, Airbnb og YouTube, som kobler tilbydere og etterspørrere digitalt. De skaper verdi uten nødvendigvis å eie de fysiske ressursene (biler, hotellrom, innhold).',
      },
    },
    {
      id: 'eb-1-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb-1-4-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva var dot-com-boblen?',
        options: [
          { id: 'a', text: 'En periode der alle internettselskaper var vellykkede', isCorrect: false },
          { id: 'b', text: 'En spekulasjonsboble der nettselskaper ble verdsatt urealistisk høyt, som sprakk rundt år 2000', isCorrect: true },
          { id: 'c', text: 'En teknologisk revolusjon som erstattet telefonen', isCorrect: false },
          { id: 'd', text: 'Et statlig program for å fremme IT-næringen', isCorrect: false },
        ],
        solution: 'Dot-com-boblen var en spekulasjonsperiode på slutten av 1990-tallet der investorer kastet penger på nettselskaper med urealistiske verdivurderinger. Da boblen sprakk i 2000, gikk mange selskaper konkurs, men overlevere som Amazon og Google ble sterkere.',
      },
    },
    {
      id: 'eb-1-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb-1-4-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Lag en tidslinje som viser de viktigste teknologiene og entreprenørene fra den industrielle revolusjonen til i dag. Inkluder minst to teknologier og to entreprenører fra hver periode.',
        hints: ['Bruk de fire periodene fra kapittelet som rammeverk: industriell revolusjon, masseproduksjon, IT-revolusjon og digital transformasjon.'],
        solution: 'Industriell revolusjon (1760–1840): Dampmaskinen (Watt), spinnemaskinen; Arkwright, Wedgwood. Masseproduksjon (1870–1970): Elektrisitet, samlebåndet; Ford, Edison. IT-revolusjon (1970–2000): Mikroprosessoren, internett; Steve Jobs, Bill Gates. Digital transformasjon (2000–i dag): Smarttelefonen, AI; Mark Zuckerberg, Elon Musk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-1-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb-1-4-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Velg én bransje (f.eks. musikk, transport, varehandel eller media) og beskriv hvordan den har blitt endret av teknologiske revolusjoner gjennom historien. Bruk eksempler fra minst to av de fire periodene i kapittelet.',
        hints: ['Se på eksempelet med fotobransjen for inspirasjon. Tenk på hvilke teknologier som har endret bransjen du velger.'],
        solution: 'Eksempel: Transport. Industriell revolusjon: Jernbanen erstattet hestetrukken transport, skapte nye muligheter for handel over lange avstander. Masseproduksjon: Fords T-Ford gjorde personbiler tilgjengelige for vanlige folk, bilen erstattet hesten og endret byplanlegging. IT-revolusjon: GPS og logistikksystemer effektiviserte varetransport. Digital transformasjon: Uber og Lyft endret taxi med appstyrt bestilling, Tesla og elbiler utfordrer fossilbilindustrien, selvkjørende biler er under utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'eb-1-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb-1-4-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hver teknologisk revolusjon har skapt nye muligheter for entreprenører, men også nye utfordringer for samfunnet (f.eks. barnearbeid under den industrielle revolusjonen, personvern i den digitale æraen). Diskuter: Har entreprenørskap gjennom historien vært mest positivt eller negativt for samfunnet? Begrunn svaret ditt med eksempler fra minst to perioder.',
        hints: ['Tenk på både økt velstand og ulikhet, nye jobber og tapte jobber, innovasjon og miljøkonsekvenser.'],
        solution: 'Et godt svar vurderer begge sider. Positive effekter: Økt levestandard (fra Ford til smarttelefoner), nye arbeidsplasser, medisinske fremskritt, demokratisering av informasjon. Negative effekter: Barnearbeid og dårlige arbeidsforhold (industriell revolusjon), monopolisering og ulikhet (Rockefeller, Big Tech), miljøødeleggelser, tap av personvern, digitalt utenforskap. Konklusjon: Entreprenørskap har overveiende vært positivt for samfunnet på lang sikt, men krever regulering og sosialt sikkerhetsnett for å håndtere utfordringene. Schumpeters kreativ destruksjon er en påminnelse om at fremgang alltid har en pris.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-1-4-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'eb-1-4-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vi lever nå i starten av AI-revolusjonen. Basert på mønstrene fra tidligere teknologiske revolusjoner: Hvilke muligheter og trusler tror du kunstig intelligens vil skape for entreprenører og samfunnet de neste 20 årene?',
        hints: ['Tenk på paralleller til tidligere revolusjoner. Hva skjedde med jobber, bransjer og ulikhet da nye teknologier kom?'],
        solution: 'Et godt svar trekker paralleller til historien. Muligheter: AI kan senke oppstartsbarrierene ytterligere (f.eks. kode, design, markedsføring med AI-verktøy), personalisering av produkter og tjenester, løse komplekse problemer (klima, helse), nye bransjer vi ikke kan forestille oss i dag. Trusler: Automatisering av kunnskapsarbeid kan skape arbeidsledighet, stor maktkonsentrasjon hos få selskaper (som eier AI-modellene), etiske utfordringer (deepfakes, overvåkning), økt ulikhet mellom de som behersker AI og de som ikke gjør det. Historisk parallell: Akkurat som den industrielle revolusjonen til slutt økte velstanden men krevde regulering (arbeidslover, skoleplikt), vil AI-revolusjonen trolig kreve nye reguleringer og omstilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'eb-1-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 1.4

- **Den industrielle revolusjonen** (ca. 1760–1840) skapte fabrikkindustrien gjennom dampmaskinen og nye produksjonsmetoder.
- **Masseproduksjon og storselskaper** (ca. 1870–1970) ga oss samlebåndet, elektrisiteten og profesjonell ledelse.
- **IT-revolusjonen** (ca. 1970–2000) senket oppstartsbarrierene med personlige datamaskiner og internett.
- **Digital transformasjon** (2000–i dag) kjennetegnes av plattformøkonomien, smarttelefoner, sosiale medier og kunstig intelligens.
- Gjennom hele historien ser vi at **nye teknologier skaper nye muligheter** for entreprenører, men også utfordringer for samfunnet.
- Mønsteret med **kreativ destruksjon** gjentar seg i hver periode.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Den industrielle revolusjonen', definition: 'Overgangen fra håndverksproduksjon til maskinbasert fabrikkindustri, startet i England ca. 1760.' },
    { term: 'Masseproduksjon', definition: 'Produksjon av varer i store mengder ved hjelp av standardisering og samlebånd.' },
    { term: 'IT-revolusjonen', definition: 'Perioden fra ca. 1970 da datamaskiner og internett endret økonomi og samfunn fundamentalt.' },
    { term: 'Plattformøkonomi', definition: 'Økonomisk modell der selskaper skaper verdi ved å koble tilbydere og etterspørrere digitalt.' },
    { term: 'Dot-com-boblen', definition: 'Spekulasjonsboble rundt år 2000 der nettselskaper ble verdsatt urealistisk høyt.' },
    { term: 'Digital transformasjon', definition: 'Prosessen der digital teknologi endrer forretningsmodeller, prosesser og kundeopplevelser.' },
  ],
};

// ============================================================================
// Kapittel 1.5: Entreprenørskap i Norge
// ============================================================================

export const CHAPTER_ENTREBED_1_1_5: TextbookChapter = {
  id: 'entrebed-1-1-5',
  courseId: 'entrebed-1',
  chapterNumber: '1.5',
  title: 'Entreprenørskap i Norge',
  description: 'Forstå den norske næringskulturen, virkemiddelapparatet som støtter gründere, og Innovasjon Norges rolle i norsk entreprenørskap.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for rammevilkårene for entreprenørskap i Norge',
    'forklare hvordan virkemiddelapparatet støtter gründere og oppstartsbedrifter',
  ],
  content: [
    {
      id: 'eb-1-5-intro',
      type: 'text',
      content: `## Entreprenørskap i Norge

Norge er et lite land med en åpen økonomi, høyt utdanningsnivå og et solid velferdssystem. Disse faktorene skaper både muligheter og utfordringer for entreprenører.

I dette kapittelet ser vi på:
- Hva som kjennetegner norsk næringskultur
- Hvilken rolle olje og gass har spilt – og hva som skjer etter oljen
- Virkemiddelapparatet: de offentlige ordningene som støtter gründere
- Innovasjon Norge og andre sentrale aktører
- Utfordringer og muligheter for norske entreprenører`,
    },
    {
      id: 'eb-1-5-naeringskultur',
      type: 'text',
      content: `## Norsk næringskultur

Norsk næringskultur er preget av flere unike trekk som påvirker hvordan entreprenørskap utøves:

### Flat organisasjonskultur
Norske bedrifter har tradisjonelt flat struktur med kort avstand mellom ledelse og ansatte. Dette gir rom for at gode ideer kan komme fra alle nivåer i organisasjonen – en fordel for intraprenørskap.

### Trepartssamarbeidet
Samarbeidet mellom arbeidstakere (fagforeningene), arbeidsgivere (NHO) og staten er et norsk særtrekk. Dette skaper forutsigbare rammebetingelser, men kan også gjøre det vanskeligere å innføre raske endringer.

### Høy tillit
Norge er et av verdens mest tillitsbaserte samfunn. Tillit mellom mennesker, og mellom borgere og stat, gjør det lettere å inngå avtaler, samarbeide og gjennomføre transaksjoner. Dette er en stor fordel for entreprenører.

### Janteloven – en utfordring?
Janteloven – ideen om at man ikke skal tro man er bedre enn andre – er ofte diskutert i norsk sammenheng. Noen mener den hemmer entreprenørskap ved å gjøre det ukomfortabelt å skille seg ut. Andre mener den er overdrevet, og at Norge faktisk er et land som verdsetter hardt arbeid og nyskaping.

### Små bedrifter dominerer
Over 99 % av norske bedrifter har færre enn 100 ansatte. Entreprenørskap i Norge handler derfor i stor grad om småbedrifter og mikrobedrifter, ikke om å bygge det neste Google.`,
    },
    {
      id: 'eb-1-5-def-trepartssamarbeid',
      type: 'definition',
      title: 'Trepartssamarbeidet',
      content: `**Trepartssamarbeidet** er den norske modellen for samarbeid mellom tre parter:
- **Arbeidstakerne** (representert ved LO, Unio, YS og andre fagforeninger)
- **Arbeidsgiverne** (representert ved NHO, Virke og andre arbeidsgiverorganisasjoner)
- **Staten** (representert ved regjeringen)

De tre partene forhandler om lønn, arbeidsvilkår og rammebetingelser for næringslivet. Modellen bidrar til lav konflikt, forutsigbarhet og høy produktivitet, og er et kjennetegn ved den nordiske modellen.`,
    },
    {
      id: 'eb-1-5-olje-omstilling',
      type: 'text',
      content: `## Fra olje til grønn omstilling

Norsk økonomi har i over 50 år vært dominert av olje- og gassnæringen. Oljefondet (Statens pensjonsfond utland) er verdens største statlige investeringsfond, og oljeinntektene har finansiert det norske velferdssamfunnet.

### Oljens betydning for entreprenørskap
Oljeeventyret har hatt doble effekter på norsk entreprenørskap:

**Positive effekter:**
- Skapt verdensledende teknologimiljøer innen subsea, bore-teknologi og seismikk
- Finansiert et utdanningssystem i verdensklasse
- Skapt kapitaltilgang gjennom Oljefondet og private investorer
- Bygget opp ingeniørkompetanse som kan overføres til nye bransjer

**Utfordringer (oljeforbannelsen):**
- Høye lønninger gjør det vanskelig å konkurrere i andre bransjer
- Mange dyktige folk har blitt trukket til oljen fremfor å starte egne bedrifter
- Risikoen ved å bli gründer er høyere når alternativet er trygg, godt betalt jobb i oljebransjen

### Det grønne skiftet
Norge er nå i en omstillingsprosess – fra olje og gass til fornybar energi, havvind, hydrogen, karbonfangst og andre grønne teknologier. Dette skaper **enorme muligheter** for norske entreprenører som kan bygge på eksisterende kompetanse fra oljebransjen.`,
    },
    {
      id: 'eb-1-5-virkemiddelapparatet',
      type: 'text',
      content: `## Virkemiddelapparatet

Norge har et omfattende **virkemiddelapparat** – et system av offentlige ordninger som hjelper gründere med finansiering, kompetanse og veiledning. Her er de viktigste aktørene:

### Innovasjon Norge
Den viktigste aktøren for norske gründere. Tilbyr:
- **Oppstartsfinansiering:** Tilskudd og lån til nye bedrifter
- **Mentor- og rådgivningstjenester:** Kobler gründere med erfarne rådgivere
- **Internasjonalisering:** Hjelper norske bedrifter med å entre utenlandske markeder
- **Gründerprogram:** Kurs og nettverk for oppstartsbedrifter

### Forskningsrådet
Finansierer forskningsprosjekter og innovasjon, spesielt for teknologibedrifter. Viktige programmer inkluderer **FORNY** (for kommersialisering av forskning) og **SkatteFUNN** (skattefradrag for FoU-aktiviteter).

### SIVA (Selskapet for industrivekst)
Bygger og driver næringshager og inkubatorer over hele landet. En **inkubator** er et miljø der oppstartsbedrifter får kontorplass, rådgivning og nettverk.

### NAV – støtte til grundere
NAV tilbyr **dagpenger under etablering**, slik at arbeidsledige kan starte egen bedrift uten å miste økonomisk sikkerhet i oppstartsfasen.

### Kommunale næringsfond
Mange kommuner har egne næringsfond som gir tilskudd til lokale gründere.`,
    },
    {
      id: 'eb-1-5-def-virkemiddelapparat',
      type: 'definition',
      title: 'Virkemiddelapparatet',
      content: `**Virkemiddelapparatet** er samlebetegnelsen for de offentlige institusjonene og ordningene som støtter næringsutvikling, innovasjon og entreprenørskap i Norge. De viktigste aktørene er Innovasjon Norge, Norges forskningsråd og SIVA. Virkemidlene inkluderer tilskudd, lån, skattefordeler, rådgivning, inkubatorer og internasjonaliseringstjenester.`,
    },
    {
      id: 'eb-1-5-def-inkubator',
      type: 'definition',
      title: 'Inkubator',
      content: `En **inkubator** er et program eller et fysisk miljø som hjelper oppstartsbedrifter i den tidlige fasen. Inkubatorer tilbyr typisk:
- Rimelig kontorplass og infrastruktur
- Rådgivning og mentorordninger
- Tilgang til nettverk av investorer, kunder og samarbeidspartnere
- Kurs og workshops innen forretningsutvikling
- Et fellesskap av gründere som inspirerer og støtter hverandre

I Norge drives mange inkubatorer av SIVA i samarbeid med lokale aktører.`,
    },
    {
      id: 'eb-1-5-example-innovasjon-norge',
      type: 'example',
      title: 'Eksempel: Norske gründerhistorier',
      problem: 'Hvordan har virkemiddelapparatet bidratt til norske gründersuksesser?',
      solution: `**Kahoot! – fra forskningsprosjekt til globalt selskap**
Kahoot! startet som et forskningsprosjekt ved NTNU, med støtte fra Forskningsrådet. Ideen var å gjøre læring morsomt gjennom interaktive quizer. Med hjelp fra Innovasjon Norge og private investorer ble Kahoot! kommersialisert og vokste til et globalt selskap med over 9 milliarder gjennomførte spill.

**Nofence – verdens første virtuelle gjerde**
Oscar Hovde Berntsen fra Batnfjord i Møre og Romsdal utviklet GPS-baserte virtuelle gjerder for beitedyr. Med støtte fra Innovasjon Norge, SIVA-inkubator og Forskningsrådet (SkatteFUNN) ble ideen kommersialisert. Nofence brukes nå av bønder i flere land.

**Oda (tidligere Kolonial.no) – dagligvarer på nett**
Karl Munthe-Kaas og medgründere startet Norges første nettbaserte dagligvarebutikk. Tidlig støtte fra Innovasjon Norge og venturekapital hjalp selskapet gjennom oppstartsfasen. Oda er nå en av Norges mest verdifulle oppstartsbedrifter.

**Fellesnevner:** Alle disse selskapene har brukt virkemiddelapparatet som springbrett – kombinert med private investorer, god timing og sterk gjennomføringsevne.`,
    },
    {
      id: 'eb-1-5-utfordringer',
      type: 'text',
      content: `## Utfordringer og muligheter for norske entreprenører

### Utfordringer
- **Høyt kostnadsnivå:** Norske lønninger og avgifter er blant de høyeste i verden, noe som gjør det dyrt å drive bedrift
- **Lite hjemmemarked:** Med 5,5 millioner innbyggere er det norske markedet lite. Mange bedrifter må tidlig tenke internasjonalt
- **Risikokulturen:** Med gode velferdsordninger og trygge jobber kan det være vanskelig å motivere folk til å ta den risikoen som entreprenørskap innebærer
- **Tilgang på kompetanse:** Mange bransjer sliter med å finne kvalifiserte medarbeidere
- **Byråkrati:** Selv om Norge scorer bra på «ease of doing business», opplever mange gründere at regelverk og rapportering er tidkrevende

### Muligheter
- **Grønn omstilling:** Norsk kompetanse innen energi kan overføres til fornybar teknologi
- **Høy digital kompetanse:** Norske forbrukere er tidlige brukere av ny teknologi
- **Sterkt virkemiddelapparat:** God tilgang på offentlig støtte og rådgivning
- **Høy tillit:** Gjør det lettere å samarbeide, inngå avtaler og bygge nettverk
- **Velutdannet befolkning:** Norske arbeidstakere har høy kompetanse
- **Havnæringene:** Norge har verdensledende kompetanse innen fiskeri, oppdrett, shipping og havteknologi`,
    },
    {
      id: 'eb-1-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb-1-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er virkemiddelapparatet?',
        options: [
          { id: 'a', text: 'Et privat investeringsfond for oppstartsbedrifter', isCorrect: false },
          { id: 'b', text: 'Samlebetegnelsen for offentlige ordninger som støtter næringsutvikling og entreprenørskap', isCorrect: true },
          { id: 'c', text: 'En type bedrift som kobler gründere med kunder', isCorrect: false },
          { id: 'd', text: 'Et dataprogram for forretningsplanlegging', isCorrect: false },
        ],
        solution: 'Virkemiddelapparatet er samlebetegnelsen for offentlige institusjoner og ordninger som støtter gründere i Norge, inkludert Innovasjon Norge, Forskningsrådet og SIVA.',
      },
    },
    {
      id: 'eb-1-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb-1-5-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er en inkubator?',
        options: [
          { id: 'a', text: 'En type bankkonto for gründere', isCorrect: false },
          { id: 'b', text: 'Et statlig organ som regulerer næringslivet', isCorrect: false },
          { id: 'c', text: 'Et miljø som hjelper oppstartsbedrifter med kontorplass, rådgivning og nettverk', isCorrect: true },
          { id: 'd', text: 'En digital plattform for crowdfunding', isCorrect: false },
        ],
        solution: 'En inkubator er et program eller fysisk miljø som hjelper oppstartsbedrifter i den tidlige fasen med kontorplass, rådgivning, mentorer og nettverk. I Norge drives mange av SIVA.',
      },
    },
    {
      id: 'eb-1-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb-1-5-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvorfor kan janteloven være en utfordring for norsk entreprenørskap?',
        options: [
          { id: 'a', text: 'Den forbyr å starte bedrifter uten tillatelse', isCorrect: false },
          { id: 'b', text: 'Den kan gjøre det ukomfortabelt å skille seg ut og satse på egne ideer', isCorrect: true },
          { id: 'c', text: 'Den krever at alle bedrifter må ha lik omsetning', isCorrect: false },
          { id: 'd', text: 'Den hindrer internasjonalt samarbeid', isCorrect: false },
        ],
        solution: 'Janteloven – ideen om at man ikke skal tro man er bedre enn andre – kan gjøre det ukomfortabelt å stå frem med ambisiøse ideer og feire suksess. Dette kan hemme risikovilje og synlighet hos gründere.',
      },
    },
    {
      id: 'eb-1-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb-1-5-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Gå inn på nettsidene til Innovasjon Norge (innovasjonnorge.no) og finn ut hvilke støtteordninger som er relevante for en som vil starte en bedrift i din region. Beskriv minst tre ordninger og forklar hvem de passer for.',
        hints: ['Se på Innovasjon Norges oversikt over tilskudd, lån, mentorprogrammer og gründerkurs. Sjekk også om det finnes spesielle ordninger for unge gründere.'],
        solution: 'Et godt svar beskriver minst tre ordninger fra Innovasjon Norge, for eksempel: (1) Oppstartslån: lån til nye bedrifter som har vanskeligheter med å få bankfinansiering. (2) Mentortjenesten: kobler gründere med erfarne rådgivere i 1–2 år. (3) Vekstgaranti: garantiordning som gjør det lettere å få banklån. (4) Innovasjonskontrakter: tilskudd til utvikling av nye produkter/tjenester i samarbeid med en pilotkunde. Svaret bør også inkludere hvem ordningene passer for.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
    {
      id: 'eb-1-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb-1-5-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva trepartssamarbeidet er og diskuter hvordan det påvirker norsk entreprenørskap – både positivt og negativt.',
        hints: ['Tenk på forutsigbarhet vs. fleksibilitet, lønnskostnader vs. kompetanse, og tillit vs. regulering.'],
        solution: 'Trepartssamarbeidet er samarbeidet mellom arbeidstakere (fagforeninger), arbeidsgivere (NHO) og staten. Positivt for entreprenørskap: Forutsigbare rammebetingelser (lønnsoppgjør, arbeidsmiljøloven), høy tillit mellom parter, kompetent arbeidsstyrke pga. høy faglig standard, lav korrupsjon. Negativt: Høye lønnskostnader (vanskelig for oppstartsbedrifter), strenge regulering av arbeidsmarkedet (vanskelig å si opp ansatte), kan bremse rask omstilling. Balanse: Trepartssamarbeidet gir stabilitet som er bra for langsiktige investeringer, men kan gjøre det tyngre for bedrifter som trenger rask tilpasning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'eb-1-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb-1-5-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge er i ferd med å omstille seg fra en oljebasert økonomi til en grønnere økonomi. Beskriv tre konkrete muligheter for entreprenører i denne omstillingen. Forklar hvilken kompetanse fra oljebransjen som kan overføres, og hvilke nye kompetanser som trengs.',
        hints: ['Tenk på havvind, hydrogen, karbonfangst og -lagring (CCS), oppdrettsteknologi, og batteriteknologi.'],
        solution: 'Tre muligheter: (1) Havvind: Norsk offshore-kompetanse (installasjon, vedlikehold, subsea-teknologi) kan overføres direkte til havvindparker. Ny kompetanse: vindturbinteknologi, nettinfrastruktur. (2) Hydrogen: Norsk gasskompetanse er relevant for hydrogenproduksjon og -transport. Ny kompetanse: elektrolyse, brenselcelleteknologi. (3) Karbonfangst og -lagring (CCS): Norges erfaring med CO2-lagring under havbunnen (Sleipner-feltet) gir forsprang. Ny kompetanse: CO2-fangst fra industriprosesser, transportlogistikk for CO2. Fellesnevner: Norsk prosjektledelse, ingeniørkompetanse og sikkerhetskunnskap fra oljen er overførbart – men alle områdene krever ny teknologisk spesialisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-1-5-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'eb-1-5-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Norge med et annet land du kjenner til (f.eks. USA, Sverige, eller et land du har tilknytning til). Hva er de viktigste forskjellene i rammevilkår for entreprenørskap? Hvor er det enklere å starte bedrift, og hvorfor?',
        hints: ['Tenk på faktorer som skatt, velferd, tilgang på kapital, kultur, regulering, markedsstørrelse og utdanning.'],
        solution: 'Eksempel: Norge vs. USA. Kapital: USA har et mye større venturekapitalmarked (Silicon Valley), men Norge har godt offentlig virkemiddelapparat. Sikkerhetsnett: Norsk velferd gjør risikoen ved å mislykkes lavere (helseforsikring, dagpenger), mens amerikanske gründere risikerer mer personlig. Skatt: Høyere i Norge, men finansierer infrastruktur og utdanning. Marked: USA har 330 millioner forbrukere vs. Norges 5,5 millioner – norske bedrifter må tenke internasjonalt tidlig. Kultur: USA feirer suksess og aksepterer fiasko («fail fast»), Norge har janteloven men også høy tillit. Regulering: Enklere å registrere bedrift i Norge (Brønnøysundregistrene), men strengere arbeidsregulering. Konklusjon: Begge land har styrker – det avhenger av type bedrift og bransje.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'eb-1-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 1.5

- Norsk næringskultur preges av **flat organisasjonsstruktur**, **trepartssamarbeidet**, **høy tillit** og dominans av **småbedrifter**.
- **Olje og gass** har vært grunnlaget for norsk økonomi, men omstillingen til en grønnere økonomi skaper nye muligheter for entreprenører.
- **Virkemiddelapparatet** (Innovasjon Norge, Forskningsrådet, SIVA) gir norske gründere tilgang til finansiering, rådgivning og nettverk.
- En **inkubator** er et miljø som hjelper oppstartsbedrifter med kontorplass, rådgivning og fellesskap.
- Utfordringer for norske entreprenører inkluderer **høyt kostnadsnivå**, **lite hjemmemarked** og **risikokulturen**.
- Muligheter inkluderer **grønn omstilling**, **høy digital kompetanse** og **verdensledende havnæringer**.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Trepartssamarbeidet', definition: 'Samarbeidet mellom arbeidstakere, arbeidsgivere og staten om lønn, arbeidsvilkår og rammebetingelser.' },
    { term: 'Virkemiddelapparatet', definition: 'Offentlige institusjoner og ordninger som støtter næringsutvikling og entreprenørskap (Innovasjon Norge, Forskningsrådet, SIVA).' },
    { term: 'Innovasjon Norge', definition: 'Statlig aktør som gir gründere tilgang til finansiering, rådgivning, mentorer og internasjonaliseringstjenester.' },
    { term: 'Inkubator', definition: 'Program eller fysisk miljø som hjelper oppstartsbedrifter med kontorplass, rådgivning og nettverk.' },
    { term: 'Janteloven', definition: 'Uformell kulturell norm om at man ikke skal tro man er bedre enn andre – diskutert som mulig hinder for entreprenørskap.' },
    { term: 'Det grønne skiftet', definition: 'Norges omstilling fra fossil energi til fornybare og bærekraftige næringer.' },
  ],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const ENTREBED_1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_ENTREBED_1_1_1,
  CHAPTER_ENTREBED_1_1_2,
  CHAPTER_ENTREBED_1_1_3,
  CHAPTER_ENTREBED_1_1_4,
  CHAPTER_ENTREBED_1_1_5,
];
