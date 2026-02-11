/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 2 (VG3)
 * Seksjon 7: Fremtidens medier og teknologi
 * Kapittel 7.1-7.5
 *
 * Dekker LK20-kompetansemål for medie- og informasjonskunnskap 2
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Kunstig intelligens og medier
// ============================================================================

export const CHAPTER_MEDIEINFO_2_7_1: TextbookChapter = {
  id: 'medieinfo-2-7-1',
  courseId: 'medieinfo-2',
  chapterNumber: '7.1',
  title: 'Kunstig intelligens og medier',
  description: 'AI-generert innhold, automatisert journalistikk, deepfakes og algoritmisk innholdsproduksjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for hvordan kunstig intelligens brukes i medieproduksjon',
    'drøfte etiske utfordringer knyttet til AI-generert innhold',
    'vurdere konsekvensene av automatisert journalistikk for mediebransjen og samfunnet',
  ],
  keyTerms: [
    { term: 'Kunstig intelligens (KI/AI)', definition: 'Datasystemer som kan utføre oppgaver som normalt krever menneskelig intelligens, som å generere tekst, bilder, lyd og video, gjenkjenne mønstre og ta beslutninger.' },
    { term: 'Generativ AI', definition: 'En type kunstig intelligens som kan skape nytt innhold som tekst, bilder, musikk og video basert på mønstre lært fra store datamengder. Eksempler er ChatGPT, DALL-E og Midjourney.' },
    { term: 'Automatisert journalistikk', definition: 'Bruk av algoritmer og kunstig intelligens til å produsere nyhetsartikler uten direkte menneskelig skriving, ofte brukt for sport-, finans- og værrapporter.' },
    { term: 'Deepfake', definition: 'Manipulert video eller lyd der kunstig intelligens brukes til å erstatte en persons ansikt eller stemme med en annens, slik at det ser ut som personen sier eller gjør noe de aldri har gjort.' },
  ],
  content: [
    {
      id: 'mi2-7-1-intro',
      type: 'text',
      content: `## Kunstig intelligens i medielandskapet

Kunstig intelligens (KI) er i ferd med å endre mediebransjen fundamentalt. Algoritmer kan nå skrive nyhetsartikler, generere bilder, produsere musikk og lage realistiske videoer. Grensen mellom menneskeskapt og maskinlaget innhold blir stadig vanskeligere å trekke.

Denne utviklingen reiser grunnleggende spørsmål: Hvem er ansvarlig for AI-generert innhold? Kan vi stole på det vi ser og hører? Og hva skjer med journalistikken og det kreative arbeidet når maskiner kan gjøre deler av jobben?`,
    },
    {
      id: 'mi2-7-1-def-generativ-ai',
      type: 'definition',
      title: 'Generativ AI',
      content: 'Generativ AI er en kategori av kunstig intelligens som kan skape nytt innhold - tekst, bilder, lyd, video og kode - basert på mønstre den har lært fra enorme datamengder. Systemene trenes på milliarder av eksempler og bruker statistiske modeller til å produsere innhold som ligner på treningsdataene. Store språkmodeller (LLM-er) som GPT og Claude er eksempler på generativ AI for tekst, mens Midjourney, DALL-E og Stable Diffusion genererer bilder.',
    },
    {
      id: 'mi2-7-1-text-ai-medier',
      type: 'text',
      content: `### AI i medieproduksjon

**Tekstgenerering:**
- Nyhetsbyråer bruker AI til å skrive rutinemessige artikler (sport, børs, vær)
- NTB og flere norske medier eksperimenterer med AI-assistert journalistikk
- Chatboter kan formulere tekst som er vanskelig å skille fra menneskeskrevet
- AI brukes til å oversette, oppsummere og omskrive artikler

**Bildegenerering:**
- Verktøy som Midjourney og DALL-E kan lage fotorealistiske bilder fra tekstbeskrivelser
- Brukes til illustrasjoner, reklame og konseptkunst
- Reiser spørsmål om opphavsrett og autentisitet
- Kan lage bilder av hendelser som aldri har skjedd

**Lyd og video:**
- AI kan klone stemmer og generere tale fra tekst
- Musikk kan komponeres av algoritmer
- Videoinnhold kan genereres og redigeres med AI
- Deepfake-teknologi kan manipulere video til å vise noe som aldri skjedde

**Redaksjonell bruk:**
- Automatisk tagging og kategorisering av innhold
- Personalisering av nyhetsstrøm
- Faktasjekking og verifisering
- Analyse av leserdata og trender`,
    },
    {
      id: 'mi2-7-1-def-deepfake',
      type: 'definition',
      title: 'Deepfake',
      content: 'Deepfake er en betegnelse på AI-generert eller AI-manipulert video og lyd der en persons ansikt, kropp eller stemme erstattes med en annens. Teknologien bruker dyp læring (deep learning) til å analysere og gjenskape ansiktsuttrykk, munnbevegelser og stemmemønstre. Deepfakes kan brukes til underholdning og kunst, men utgjør også en trussel mot informasjonssamfunnet fordi de kan skape overbevisende falske videoer av offentlige personer.',
    },
    {
      id: 'mi2-7-1-example-deepfake',
      type: 'example',
      title: 'Eksempel: Deepfakes og demokratisk tillit',
      problem: 'Hvordan kan deepfake-teknologi true demokratiske prosesser, og hva kan gjøres for å motvirke dette?',
      solution: `**Trusselbildet:**

1. **Falske politikervideoer**: AI kan lage realistiske videoer der politikere tilsynelatende sier noe de aldri har sagt. Før valg kan slike videoer påvirke velgerne.

2. **Undergraving av tillit**: Når falske videoer blir troverdige nok, risikerer vi at folk slutter å stole på ekte videobevis også - den såkalte «løgnerens utbytte» der alle kan hevde at belastende opptak er deepfakes.

3. **Desinformasjonskampanjer**: Statlige aktører kan bruke deepfakes som del av påvirkningsoperasjoner for å skape forvirring og splittelse.

**Mottiltak:**
- **Teknologisk**: AI-baserte verktøy for å oppdage deepfakes, digitale vannmerker og autentiseringssystemer
- **Juridisk**: Lover mot ondsinnet bruk av deepfakes, krav om merking av AI-generert innhold
- **Mediefaglig**: Styrket kildekritikk, verifiseringsrutiner i redaksjonene, samarbeid mellom medier og teknologiselskaper
- **Utdanning**: Opplæring i kritisk medieforståelse og evne til å gjenkjenne manipulert innhold

**Konklusjon:** Deepfakes utfordrer den grunnleggende tilliten til visuelt bevis. Å møte utfordringen krever en kombinasjon av teknologi, lovgivning, journalistisk kvalitet og mediekompetanse i befolkningen.`,
    },
    {
      id: 'mi2-7-1-text-automatisert-journalistikk',
      type: 'text',
      content: `### Automatisert journalistikk

**Hva kan AI gjøre i journalistikken?**
- Skrive enkle nyhetsartikler basert på strukturerte data (sportsresultater, børstall, kommuneøkonomi)
- Overvåke store datamengder for å oppdage mønstre og nyheter
- Transkribere intervjuer og pressekonferanser
- Foreslå vinkler og kilder basert på dataanalyse

**Hva kan AI foreløpig ikke gjøre?**
- Stille kritiske oppfølgingsspørsmål
- Vurdere kontekst, nyanser og etiske dilemmaer
- Bygge tillitsrelasjoner med kilder
- Utøve journalistisk skjønn om hva som er i offentlighetens interesse

**Etiske utfordringer:**
- Hvem er ansvarlig når en AI-skrevet artikkel inneholder feil?
- Hvordan sikrer vi transparens om AI-bruk i redaksjonene?
- Hva skjer med journalisters arbeidsplasser?
- Kan AI-generert innhold erstatte lokaljournalistikken?
- Treningsdata og opphavsrett: Er det greit å trene AI på andres journalistiske arbeid?`,
    },
    {
      id: 'mi2-7-1-example-automatisert',
      type: 'example',
      title: 'Eksempel: AI-journalistikk i praksis',
      problem: 'NTB har eksperimentert med AI-genererte nyhetsartikler. Hvilke fordeler og utfordringer ser du med dette?',
      solution: `**NTBs bruk av AI:**

NTB og andre nyhetsbyråer har testet AI for å generere artikler om blant annet sportsresultater, værrapporter og kommuneøkonomi. Artiklene baseres på strukturerte data som allerede er tilgjengelige.

**Fordeler:**
- **Hastighet**: Artikler kan publiseres sekunder etter at data er tilgjengelig
- **Dekning**: Kan dekke hendelser det ikke finnes ressurser til å dekke manuelt (for eksempel resultater fra alle breddefotballkamper)
- **Frigjøring av ressurser**: Journalister kan bruke tiden på undersøkende og analytisk journalistikk i stedet for rutinerapportering
- **Konsistens**: Færre tilfeldige feil i tallmateriale

**Utfordringer:**
- **Kvalitet og kontekst**: AI-tekster mangler den konteksten og det skjønnet en journalist tilbyr
- **Ansvar**: Redaksjonen må kvalitetssikre AI-innhold og stå ansvarlig for det som publiseres
- **Transparens**: Leserne bør vite at en artikkel er AI-generert
- **Arbeidsplasser**: Bekymring for at AI erstatter journalister

**Konklusjon:** AI-journalistikk fungerer best som et supplement til menneskelig journalistikk, ikke en erstatning. Den beste bruken er å la AI håndtere rutineoppgaver slik at journalister kan fokusere på det AI ikke kan: kritisk tenkning, kildekontakt og kontekstuell forståelse.`,
    },
    {
      id: 'mi2-7-1-ex-1',
      type: 'exercise',
      title: 'Oppgave 7.1.1',
      exercise: {
        id: 'mi2-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en deepfake?',
        options: [
          { id: 'a', text: 'En artikkel skrevet av en chatbot', isCorrect: false },
          { id: 'b', text: 'AI-manipulert video eller lyd der en persons ansikt eller stemme er erstattet med en annens', isCorrect: true },
          { id: 'c', text: 'En falsk profil på sosiale medier', isCorrect: false },
          { id: 'd', text: 'En nyhetssak som inneholder faktafeil', isCorrect: false },
        ],
        solution: 'En deepfake er AI-generert eller AI-manipulert video og lyd der en persons ansikt, kropp eller stemme erstattes med en annens ved hjelp av dyp læring. Teknologien kan skape svært realistisk falskt innhold som er vanskelig å avsløre.',
      },
    },
    {
      id: 'mi2-7-1-ex-2',
      type: 'exercise',
      title: 'Oppgave 7.1.2',
      exercise: {
        id: 'mi2-7-1-ex-2',
        number: '7.1.2',
        type: 'multiple-choice',
        task: 'Hvilken type journalistisk oppgave er AI best egnet til å utføre i dag?',
        options: [
          { id: 'a', text: 'Undersøkende journalistikk om korrupsjon', isCorrect: false },
          { id: 'b', text: 'Intervjuer med politikere og kilder', isCorrect: false },
          { id: 'c', text: 'Produksjon av rutinemessige artikler basert på strukturerte data', isCorrect: true },
          { id: 'd', text: 'Etiske vurderinger om hva som bør publiseres', isCorrect: false },
        ],
        solution: 'AI er best egnet til å produsere rutinemessige artikler basert på strukturerte data, som sportsresultater, børstall og værrapporter. Oppgaver som krever journalistisk skjønn, kildekontakt, etiske vurderinger og kritisk tenkning er fremdeles avhengig av menneskelige journalister.',
      },
    },
    {
      id: 'mi2-7-1-ex-3',
      type: 'exercise',
      title: 'Oppgave 7.1.3',
      exercise: {
        id: 'mi2-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        task: 'Forklar hva generativ AI er og gi tre eksempler på hvordan teknologien brukes i medieproduksjon.',
        solution: 'Generativ AI er en type kunstig intelligens som kan skape nytt innhold basert på mønstre lært fra store datamengder. Eksempler: 1) Tekstgenerering - chatboter og språkmodeller som kan skrive nyhetsartikler, oppsummeringer og oversettelser. 2) Bildegenerering - verktøy som Midjourney og DALL-E som lager bilder fra tekstbeskrivelser, brukt til illustrasjoner og reklame. 3) Lyd- og videogenerering - AI som kan klone stemmer, komponere musikk og skape videomateriale, inkludert deepfakes.',
      },
    },
    {
      id: 'mi2-7-1-ex-4',
      type: 'exercise',
      title: 'Oppgave 7.1.4',
      exercise: {
        id: 'mi2-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        task: 'Drøft hvem som bør ha det etiske og juridiske ansvaret når en AI-generert nyhetsartikkel inneholder feil som fører til skade for en person.',
        solution: 'Flere aktører kan holdes ansvarlige: Redaksjonen som publiserer innholdet bør ha det overordnede ansvaret, i tråd med redaktøransvaret i norsk presselov. Utviklerne av AI-systemet kan ha ansvar hvis feilen skyldes mangelfull teknologi. Journalisten som eventuelt har bestilt eller godkjent artikkelen har et medansvar. I praksis bør redaktøransvaret gjelde også for AI-generert innhold, noe som betyr at redaksjonen må ha rutiner for kvalitetssikring av alt AI-innhold før publisering.',
      },
    },
    {
      id: 'mi2-7-1-ex-5',
      type: 'exercise',
      title: 'Oppgave 7.1.5',
      exercise: {
        id: 'mi2-7-1-ex-5',
        number: '7.1.5',
        type: 'classic',
        task: 'Forklar begrepet «løgnerens utbytte» (liar\'s dividend) i forbindelse med deepfakes og diskuter hvorfor det er et demokratisk problem.',
        solution: 'Løgnerens utbytte beskriver situasjonen der deepfakes er blitt så utbredt at folk slutter å stole på ekte videobevis. Når alle vet at videoer kan være falske, kan enhver person som fanges på video i en kompromitterende situasjon hevde at opptaket er en deepfake. Dette er et demokratisk problem fordi det undergraver ansvarliggjøring av makthavere, gjør det vanskeligere å dokumentere overgrep og lovbrudd, og svekker den generelle tilliten til informasjon i samfunnet.',
      },
    },
    {
      id: 'mi2-7-1-summary',
      type: 'text',
      content: `## Oppsummering

- **Generativ AI** kan skape tekst, bilder, lyd og video som ligner på menneskeskapt innhold
- **Automatisert journalistikk** egner seg for rutineoppgaver, men kan ikke erstatte journalistisk skjønn
- **Deepfakes** truer tilliten til visuelt bevis og kan utnyttes til desinformasjon
- **Løgnerens utbytte** gjør at ekte opptak også kan avfeies som falske
- Ansvar for AI-innhold må forankres i **redaktøransvaret** og tydelige rutiner
- Mediebransjen trenger en kombinasjon av **teknologi, lovgivning og mediekompetanse** for å møte AI-utfordringene`,
    },
    {
      id: 'mi2-7-1-samleoppgave',
      type: 'exercise',
      title: 'Samleoppgave 7.1',
      exercise: {
        id: 'mi2-7-1-samle',
        number: '7.1.S',
        type: 'classic',
        task: 'Skriv et notat til en avisredaksjon der du anbefaler retningslinjer for bruk av AI i journalistikken. Notatet skal dekke minst tre bruksområder og ta stilling til spørsmål om transparens, kvalitetssikring og ansvar.',
        hints: ['Tenk på hva AI kan brukes til, hva leserne bør vite, og hvem som er ansvarlig.'],
        solution: 'Et godt svar foreslår konkrete retningslinjer som dekker bruksområder (rutineartikler, research, oversettelse), inneholder krav om transparens (merking av AI-generert innhold), definerer ansvarsforhold (redaktøren har overordnet ansvar), og stiller krav til kvalitetssikring (menneskelig gjennomlesning av AI-tekst). Notatet bør også diskutere begrensninger for AI-bruk i sensitive saker.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Immersive medier
// ============================================================================

export const CHAPTER_MEDIEINFO_2_7_2: TextbookChapter = {
  id: 'medieinfo-2-7-2',
  courseId: 'medieinfo-2',
  chapterNumber: '7.2',
  title: 'Immersive medier',
  description: 'VR, AR, metavers og interaktive medieopplevelser som endrer hvordan vi konsumerer innhold.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike former for immersive medieteknologier',
    'analysere hvordan VR, AR og metavers brukes i medier, underholdning og journalistikk',
    'drøfte muligheter og utfordringer knyttet til immersive medieopplevelser',
  ],
  keyTerms: [
    { term: 'Virtual reality (VR)', definition: 'Teknologi som skaper en fullstendig digital, tredimensjonal verden som brukeren kan utforske og samhandle med ved hjelp av spesialutstyr som VR-briller.' },
    { term: 'Augmented reality (AR)', definition: 'Teknologi som legger digitale elementer oppå den virkelige verden, for eksempel gjennom mobilkamera eller AR-briller, slik at digitalt innhold integreres i brukerens fysiske omgivelser.' },
    { term: 'Metavers', definition: 'Et begrep for vedvarende, delte digitale verdener der brukere kan møtes, samhandle, arbeide og underholdes gjennom avatarer, ofte med elementer av VR og AR.' },
    { term: 'Immersjon', definition: 'Følelsen av å være fullstendig innhyllet i og oppslukt av en medieopplevelse, slik at skillet mellom den virkelige og den digitale verden viskes ut.' },
  ],
  content: [
    {
      id: 'mi2-7-2-intro',
      type: 'text',
      content: `## Medier du kan tre inn i

Tradisjonelle medier presenterer innhold på en flat skjerm - vi leser, ser og hører som tilskuere. Immersive medier bryter med denne modellen. Med virtual reality (VR) kan du stå midt i en nyhetshendelse. Med augmented reality (AR) kan du se digital informasjon lagt over den virkelige verden. Og i metaverset kan du møte andre mennesker i delte digitale rom.

Disse teknologiene er i rask utvikling og har potensial til å endre hvordan vi opplever nyheter, underholdning, utdanning og sosial omgang.`,
    },
    {
      id: 'mi2-7-2-def-vr',
      type: 'definition',
      title: 'Virtual reality (VR)',
      content: 'Virtual reality er en teknologi som skaper en fullstendig kunstig, tredimensjonal verden som brukeren kan utforske og samhandle med. Brukeren bærer VR-briller som dekker synsfeltet og viser stereoskopiske bilder, ofte kombinert med hodetelefoner for romlig lyd og håndkontrollere for interaksjon. VR gir en sterk opplevelse av tilstedeværelse - følelsen av virkelig å være til stede i den virtuelle verden.',
    },
    {
      id: 'mi2-7-2-text-vr-bruk',
      type: 'text',
      content: `### VR i medier og journalistikk

**VR-journalistikk:**
- The New York Times har produsert VR-dokumentarer som plasserer seeren midt i flyktningleirer og krigsområder
- NRK har eksperimentert med 360-graders video fra blant annet Nordpolen
- Immersiv journalistikk kan skape sterkere empati ved å «plassere» seeren i situasjonen
- Kritikere advarer mot at den emosjonelle opplevelsen kan overskygge nøktern analyse

**VR i underholdning:**
- Spillindustrien er en av de viktigste driverne for VR-teknologi
- VR-konserter og arrangementer ble populære under pandemien
- Film og serier eksperimenterer med 360-graders formater
- Sosiale VR-plattformer lar brukere møtes i virtuelle rom

**VR i utdanning:**
- Virtuelle laboratorier, operasjonstrening og historiske simuleringer
- Muliggjør opplevelser som er for farlige, dyre eller utilgjengelige i virkeligheten
- Forskning tyder på at VR kan styrke læring gjennom opplevelse
- Utfordring: Kostbart utstyr og risiko for cyberubehag (kvalme, svimmelhet)`,
    },
    {
      id: 'mi2-7-2-def-ar',
      type: 'definition',
      title: 'Augmented reality (AR)',
      content: 'Augmented reality, på norsk utvidet virkelighet, er en teknologi som legger digitale elementer - bilder, tekst, 3D-modeller eller animasjoner - over brukerens opplevelse av den virkelige verden. I motsetning til VR erstatter ikke AR virkeligheten, men beriker den. AR kan oppleves gjennom smarttelefoner, nettbrett eller spesialiserte AR-briller, og brukes i alt fra spill (Pokémon GO) til navigasjon, reklame og journalistikk.',
    },
    {
      id: 'mi2-7-2-text-ar-metavers',
      type: 'text',
      content: `### AR og metavers

**AR i medieproduksjon:**
- Aviser og magasiner bruker AR for å gjøre trykte sider interaktive
- Nyhetskanaler bruker AR-grafikk i TV-sendinger (valgresultater, sportstatistikk)
- Reklame med AR lar forbrukere «prøve» produkter virtuelt
- Snapchat-filtre og Instagram-effekter er hverdagslige eksempler på AR

**Metaverset:**
Begrepet «metavers» ble popularisert av Mark Zuckerberg da Facebook skiftet navn til Meta i 2021. Visjonen er en sammenhengende digital verden der mennesker kan jobbe, sosialisere og underholdes gjennom avatarer.

**Elementer i metaversvisionen:**
- Vedvarende digitale verdener som eksisterer uavhengig av om du er pålogget
- Avatarer som representerer brukerne
- Sosiale funksjoner: møter, konserter, handel
- Integrasjon av VR og AR for en mer immersiv opplevelse
- Egen økonomi med digitale eiendeler og valutaer

**Status i dag:**
- Tidlige plattformer som VRChat, Roblox og Fortnite har metavers-elementer
- Teknologien er fortsatt umoden - briller er klumpete, grafikken begrenset
- Metas Horizon Worlds har fått blandet mottakelse
- Apple Vision Pro representerer en ny tilnærming med «spatial computing»
- Det gjenstår store teknologiske og sosiale utfordringer`,
    },
    {
      id: 'mi2-7-2-example-vr-journalistikk',
      type: 'example',
      title: 'Eksempel: VR-dokumentaren «The Displaced»',
      problem: 'The New York Times produserte i 2015 VR-dokumentaren «The Displaced» om tre barn på flukt fra krig. Hva forteller dette om VR-journalistikkens potensial og begrensninger?',
      solution: `**Om prosjektet:**
The New York Times sendte ut over én million Google Cardboard VR-briller til abonnenter og lanserte VR-dokumentaren «The Displaced», som fulgte tre barn som var fordrevet av krig i Syria, Sør-Sudan og Ukraina.

**Potensial:**
- **Empatisk kraft**: VR plasserer seeren «i» situasjonen, noe som kan skape sterkere innlevelse enn tradisjonell video
- **Innovasjon**: Prosjektet demonstrerte at journalistikk kan ta nye former
- **Oppmerksomhet**: VR-formatet skapte stor medieomtale og nådde nye publikumsgrupper
- **Historiefortelling**: 360-graders opplevelsen gir seeren frihet til å utforske scenen

**Begrensninger:**
- **Tilgjengelighet**: Krevde spesialutstyr (VR-briller), noe som begrenser publikum
- **Manipulasjon**: Den sterke emosjonelle opplevelsen kan overskygge nøktern informasjon
- **Etikk**: Risiko for å «spektakularisere» lidelse, gjøre andres krise til underholdning
- **Kostnader**: VR-produksjon er vesentlig dyrere enn tradisjonell reportasje
- **Redaksjonell kontroll**: Når seeren velger hvor de ser, mister regissøren noe av kontrollen over fortellingen

**Konklusjon:** VR-journalistikk kan være et kraftig verktøy for empati og forståelse, men krever etisk bevissthet om forskjellen mellom å opplyse og å utnytte.`,
    },
    {
      id: 'mi2-7-2-ex-1',
      type: 'exercise',
      title: 'Oppgave 7.2.1',
      exercise: {
        id: 'mi2-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom VR og AR?',
        options: [
          { id: 'a', text: 'VR er billigere enn AR', isCorrect: false },
          { id: 'b', text: 'VR skaper en helt kunstig verden, mens AR legger digitale elementer over den virkelige verden', isCorrect: true },
          { id: 'c', text: 'AR krever internett, VR gjør det ikke', isCorrect: false },
          { id: 'd', text: 'VR brukes bare til spill, AR bare til journalistikk', isCorrect: false },
        ],
        solution: 'VR (virtual reality) skaper en fullstendig kunstig, digital verden som erstatter brukerens fysiske omgivelser. AR (augmented reality) legger derimot digitale elementer oppå den virkelige verden, slik at brukeren fortsatt ser sine fysiske omgivelser med et digitalt lag over.',
      },
    },
    {
      id: 'mi2-7-2-ex-2',
      type: 'exercise',
      title: 'Oppgave 7.2.2',
      exercise: {
        id: 'mi2-7-2-ex-2',
        number: '7.2.2',
        type: 'multiple-choice',
        task: 'Hva menes med begrepet «metavers»?',
        options: [
          { id: 'a', text: 'En type søkemotor for sosiale medier', isCorrect: false },
          { id: 'b', text: 'Et annet ord for internett', isCorrect: false },
          { id: 'c', text: 'Vedvarende, delte digitale verdener der brukere kan møtes og samhandle gjennom avatarer', isCorrect: true },
          { id: 'd', text: 'En ny type mobiltelefon', isCorrect: false },
        ],
        solution: 'Metaverset refererer til vedvarende, delte digitale verdener der brukere kan møtes, samhandle, arbeide og underholdes gjennom avatarer. Visjonen inkluderer ofte VR- og AR-teknologi, digital økonomi og sosiale funksjoner. Begrepet ble særlig populært da Facebook endret navn til Meta i 2021.',
      },
    },
    {
      id: 'mi2-7-2-ex-3',
      type: 'exercise',
      title: 'Oppgave 7.2.3',
      exercise: {
        id: 'mi2-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        task: 'Forklar hva immersjon betyr og diskuter hvorfor denne egenskapen kan være både en styrke og en svakhet for journalistikken.',
        solution: 'Immersjon betyr følelsen av å være fullstendig oppslukt av en medieopplevelse. Styrke: Immersive medier kan skape sterkere empati og forståelse ved å «plassere» publikum i situasjonen, noe som kan gjøre journalistikk mer engasjerende. Svakhet: Den sterke emosjonelle opplevelsen kan overskygge nøktern informasjon og analyse. Det er også en risiko for å spektakularisere lidelse og gjøre andres virkelighet til en underholdningsopplevelse for publikum.',
      },
    },
    {
      id: 'mi2-7-2-ex-4',
      type: 'exercise',
      title: 'Oppgave 7.2.4',
      exercise: {
        id: 'mi2-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        task: 'Gi tre konkrete eksempler på AR i hverdagen og forklar hvordan teknologien fungerer i hvert tilfelle.',
        solution: '1) Snapchat- og Instagram-filtre: Mobilkameraet gjenkjenner ansiktet og legger digitale effekter (ører, solbriller, ansiktsmaling) over det i sanntid. 2) Pokémon GO: Spillet bruker mobilkamera og GPS til å plassere virtuelle figurer i spillerens fysiske omgivelser. 3) IKEA Place-appen: Lar brukere «plassere» virtuelle møbler i sitt eget hjem via mobilkameraet for å se hvordan de passer. I alle tilfellene analyserer teknologien det fysiske miljøet og legger digitale elementer over bildet i sanntid.',
      },
    },
    {
      id: 'mi2-7-2-ex-5',
      type: 'exercise',
      title: 'Oppgave 7.2.5',
      exercise: {
        id: 'mi2-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        task: 'Drøft om metaverset kan bli en viktig arena for medier og kommunikasjon, eller om det bare er en teknologihype. Begrunn svaret ditt.',
        solution: 'Argumenter for: Tidlige plattformer som Roblox og Fortnite viser at delte digitale verdener tiltrekker seg millioner av brukere. Konserter, arrangementer og sosiale møter i virtuelle rom ble vanligere under pandemien. Teknologien utvikler seg raskt. Argumenter mot: Briller er klumpete og dyre, Metas Horizon Worlds har fått lav bruk, de fleste foretrekker enklere sosiale medier, og teknologien er umoden. Et balansert svar anerkjenner at metavers-elementer allerede finnes, men at den store visjonen om et sammenhengende digitalt univers trolig ligger langt frem i tid.',
      },
    },
    {
      id: 'mi2-7-2-summary',
      type: 'text',
      content: `## Oppsummering

- **VR** skaper kunstige verdener som gir sterk opplevelse av tilstedeværelse
- **AR** beriker den virkelige verden med digitale elementer
- **VR-journalistikk** kan skape empati, men reiser etiske spørsmål om manipulasjon
- **Metaverset** er en visjon om delte digitale verdener, men teknologien er ennå umoden
- **Immersive medier** utfordrer grensene mellom tilskuer og deltaker
- Teknologien reiser nye spørsmål om **etikk, tilgjengelighet og digital ulikhet**`,
    },
    {
      id: 'mi2-7-2-samleoppgave',
      type: 'exercise',
      title: 'Samleoppgave 7.2',
      exercise: {
        id: 'mi2-7-2-samle',
        number: '7.2.S',
        type: 'classic',
        task: 'Velg enten VR, AR eller metavers. Lag et konsept for et medieprodukt som bruker den valgte teknologien til journalistikk eller formidling. Beskriv produktet, målgruppen, og diskuter hvilke muligheter og etiske utfordringer det innebærer.',
        hints: ['Tenk på en konkret sak eller et tema som kan formidles bedre med immersiv teknologi enn med tradisjonelle medier.'],
        solution: 'Et godt svar beskriver et konkret og gjennomtenkt medieprodukt, forklarer hvilken teknologi som brukes og hvorfor den passer for det valgte temaet, identifiserer en tydelig målgruppe, og diskuterer både muligheter (sterkere formidling, engasjement) og utfordringer (tilgjengelighet, kostnader, etikk, risiko for spektakularisering).',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Streaming og innholdsplattformer
// ============================================================================

export const CHAPTER_MEDIEINFO_2_7_3: TextbookChapter = {
  id: 'medieinfo-2-7-3',
  courseId: 'medieinfo-2',
  chapterNumber: '7.3',
  title: 'Streaming og innholdsplattformer',
  description: 'Strømmetjenester, innholdsskapere, plattformøkonomi og endringer i mediedistribusjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hvordan strømmetjenester har endret mediekonsum og mediemarkedet',
    'gjøre rede for innholdsskapernes rolle og økonomi i plattformsamfunnet',
    'drøfte konsekvensene av plattformbasert distribusjon for mediemangfold og kulturproduksjon',
  ],
  keyTerms: [
    { term: 'Streaming', definition: 'Distribusjon av medieinnhold (musikk, film, TV-serier, podkast) over internett i sanntid, der innholdet spilles av uten å lastes ned permanent til brukerens enhet.' },
    { term: 'On-demand', definition: 'Medieforbruk der brukeren selv velger hva, når og hvor innholdet konsumeres, i motsetning til tradisjonell lineær kringkasting med faste sendetider.' },
    { term: 'Innholdsskaper (content creator)', definition: 'En person som produserer og publiserer innhold på digitale plattformer som YouTube, TikTok, Twitch eller podkast-plattformer, og som kan tjene penger på innholdet gjennom annonser, sponsing eller direkte støtte.' },
    { term: 'Plattformavhengighet', definition: 'Situasjonen der innholdsskapere er avhengige av en enkelt plattforms algoritmer, regler og inntektsmodeller, noe som gir plattformen stor makt over skapernes inntekter og rekkevidde.' },
  ],
  content: [
    {
      id: 'mi2-7-3-intro',
      type: 'text',
      content: `## Fra sendeskjema til strømming

For bare tjue år siden var mediekonsumet styrt av sendetider og programoversikter. I dag velger de fleste selv hva de vil se, høre og lese, når de vil, og på hvilken enhet de vil. Strømmetjenester som Netflix, Spotify, YouTube og TikTok har fundamentalt endret hvordan medieinnhold produseres, distribueres og konsumeres.

Denne omveltningen har skapt nye muligheter for innholdsskapere, men også nye utfordringer for mediemangfold, kulturproduksjon og arbeidsvilkår i bransjen.`,
    },
    {
      id: 'mi2-7-3-def-streaming',
      type: 'definition',
      title: 'Streaming',
      content: 'Streaming er en teknologi og distribusjonsform der medieinnhold overføres kontinuerlig over internett og spilles av i sanntid. Brukeren trenger ikke laste ned hele filen før avspilling. Streaming finnes i to former: on-demand (brukeren velger selv, f.eks. Netflix og Spotify) og live (direktesendt, f.eks. Twitch og YouTube Live). Streaming har i stor grad erstattet fysiske medier som CD, DVD og Blu-ray.',
    },
    {
      id: 'mi2-7-3-text-strommetjenester',
      type: 'text',
      content: `### Strømmetjenestenes inntog

**Viktige aktører og deres modeller:**

| Tjeneste | Type innhold | Inntektsmodell |
|----------|-------------|----------------|
| Netflix | Film og serier | Abonnement |
| Spotify | Musikk og podkast | Freemium/abonnement |
| YouTube | Video | Annonser + abonnement |
| TikTok | Kortvideo | Annonser |
| Twitch | Livestreaming | Annonser + donasjoner + abonnement |
| Disney+ | Film og serier | Abonnement |
| NRK TV | Film, serier, nyheter | Lisensfinansiert |

**Konsekvenser for mediekonsumet:**
- **Binge-watching**: Hele sesonger slippes samtidig, i motsetning til tradisjonell ukentlig sending
- **Personalisering**: Algoritmer anbefaler innhold basert på brukerhistorikk
- **Globalisering**: Innhold fra hele verden er tilgjengelig overalt
- **Fragmentering**: Publikum spres over mange plattformer og innhold
- **On-demand-kultur**: Forventning om å få alt tilgjengelig umiddelbart

**Utfordringer for tradisjonelle medier:**
- Lineær TV mister seere, spesielt unge
- Reklameinntekter flytter seg til digitale plattformer
- Avisenes betalingsmodeller utfordres av gratis innhold
- Allmennkringkastere som NRK må tilpasse seg nye konsumvaner`,
    },
    {
      id: 'mi2-7-3-def-innholdsskaper',
      type: 'definition',
      title: 'Innholdsskaper (content creator)',
      content: 'En innholdsskaper er en person som produserer og publiserer digitalt innhold på plattformer som YouTube, TikTok, Twitch, podkast-plattformer eller Substack. Innholdsskapere skiller seg fra tradisjonelle mediearbeidere ved at de er selvstendige, jobber direkte med publikum uten redaksjonelle mellomledd, og er avhengige av plattformenes algoritmer og inntektsmodeller. Begrepet rommer alt fra hobbyfilmskapere til profesjonelle produksjoner med millioner av følgere.',
    },
    {
      id: 'mi2-7-3-text-kreatorokonomi',
      type: 'text',
      content: `### Kreatorøkonomien

**Slik tjener innholdsskapere penger:**
- **Annonseinntekter**: Plattformen viser annonser og deler inntektene (YouTube Partner Program)
- **Sponsorater**: Merkevarer betaler for omtale eller produktplassering
- **Direkte støtte**: Fans betaler gjennom Patreon, Ko-fi, YouTube Membership eller Twitch-abonnement
- **Merchandise**: Salg av egne produkter
- **Lisensering**: Salg av bruksrett til innholdet

**Kreatorøkonomiens skyggesider:**
- **Algoritmeavhengighet**: Inntektene avhenger av plattformens algoritmer, som kan endres uten varsel
- **Uforutsigbar inntekt**: Svingninger i visninger gir ustabil økonomi
- **Utbrenthet**: Presset om å publisere hyppig for å holde seg synlig
- **Plattformrisiko**: Kontoen kan stenges eller innhold fjernes etter plattformens skjønn
- **Ulik fordeling**: Et lite mindretall tjener godt, de fleste tjener svært lite

**Maktforholdet mellom skapere og plattformer:**
Plattformene kontrollerer distribusjon, algoritmer og inntektsdeling. Innholdsskapere har liten forhandlingsmakt individuelt. Noen store skapere har begynt å bygge egne plattformer og inntektskilder for å redusere avhengigheten.`,
    },
    {
      id: 'mi2-7-3-example-spotify',
      type: 'example',
      title: 'Eksempel: Spotifys påvirkning på musikkbransjen',
      problem: 'Hvordan har Spotify endret musikkindustrien, og hva betyr strømmemodellen for artistene?',
      solution: `**Spotifys modell:**
Spotify tilbyr en gratisversjon med reklame og en betalversjon uten reklame. Artister betales per avspilling, men beløpet varierer og er kontroversielt lavt.

**Positive endringer:**
- **Tilgjengelighet**: Over 100 millioner låter tilgjengelig for alle
- **Oppdagelse**: Algoritmer som Discover Weekly hjelper lyttere å finne ny musikk
- **Global distribusjon**: Uavhengige artister kan nå et globalt publikum uten plateselskap
- **Redusert piratkopiering**: Enkel tilgang reduserer motivasjonen for ulovlig nedlasting

**Negative konsekvenser:**
- **Lav betaling**: Artister mottar typisk 0,03-0,05 kr per avspilling, noe som gjør det vanskelig å leve av streaming alene
- **Spilleliste-makt**: Å komme på populære spillelister er avgjørende, noe som gir Spotifys kuratorer enorm makt
- **Homogenisering**: Artister tilpasser musikken til algoritmen (korte introen, fengende refreng tidlig)
- **Datakontroll**: Spotify sitter på detaljerte data om lytteratferd som artistene ikke har tilgang til

**Konklusjon:** Spotify har demokratisert tilgangen til musikk, men maktbalansen mellom plattform og artister er skjev. Artister må ofte kombinere streaming med konserter, merchandise og andre inntektskilder for å overleve økonomisk.`,
    },
    {
      id: 'mi2-7-3-example-nrk',
      type: 'example',
      title: 'Eksempel: NRK TV i strømmealderen',
      problem: 'Hvordan tilpasser NRK som allmennkringkaster seg til strømmealderen?',
      solution: `**NRKs utfordring:**
NRK skal oppfylle et allmennkringkasteroppdrag om å nå hele befolkningen med bredt innhold, samtidig som publikum - spesielt unge - i økende grad bruker globale strømmeplattformer.

**NRKs tilpasning:**
- **NRK TV**: On-demand-plattform med alt NRK-innhold tilgjengelig gratis
- **NRK Super**: Eget tilbud rettet mot barn
- **Podkast-satsing**: NRK er Norges største podkast-produsent
- **Sosiale medier**: Tilstedeværelse på TikTok, Instagram og YouTube for å nå unge
- **Publisering før lineær TV**: Noen serier legges ut på NRK TV før de sendes på tradisjonell TV

**Betydning for mediemangfold:**
- NRK sikrer norskspråklig innhold i en strømmeverden dominert av engelskspråklig innhold
- Offentlig finansiering gjør NRK uavhengig av algoritmestyrt innholdsoptimalisering
- NRK kan prioritere smalere innhold som ikke ville vært lønnsomt kommersielt
- Konkurranse med globale aktører skaper debatt om NRKs rolle og omfang`,
    },
    {
      id: 'mi2-7-3-ex-1',
      type: 'exercise',
      title: 'Oppgave 7.3.1',
      exercise: {
        id: 'mi2-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste endringen streaming har skapt for mediekonsumet?',
        options: [
          { id: 'a', text: 'Innholdet har blitt billigere å produsere', isCorrect: false },
          { id: 'b', text: 'Brukerne kan selv velge hva, når og hvor de konsumerer innhold', isCorrect: true },
          { id: 'c', text: 'Alle strømmetjenester er gratis', isCorrect: false },
          { id: 'd', text: 'Tradisjonell TV har blitt mer populært', isCorrect: false },
        ],
        solution: 'Streamings viktigste endring er overgangen fra lineært, tidsbestemt mediekonsum til on-demand, der brukerne selv velger hva de vil se, høre eller lese, når de vil, og på hvilken enhet de ønsker. Dette har fundamentalt endret forventningene til mediekonsum.',
      },
    },
    {
      id: 'mi2-7-3-ex-2',
      type: 'exercise',
      title: 'Oppgave 7.3.2',
      exercise: {
        id: 'mi2-7-3-ex-2',
        number: '7.3.2',
        type: 'multiple-choice',
        task: 'Hva betyr «plattformavhengighet» for en innholdsskaper?',
        options: [
          { id: 'a', text: 'At innholdsskaperen har en fast jobb på plattformen', isCorrect: false },
          { id: 'b', text: 'At skaperen er avhengig av plattformens algoritmer, regler og inntektsmodeller for sin inntekt og rekkevidde', isCorrect: true },
          { id: 'c', text: 'At skaperen må publisere på minst tre plattformer', isCorrect: false },
          { id: 'd', text: 'At plattformen er avhengig av innholdsskaperen', isCorrect: false },
        ],
        solution: 'Plattformavhengighet betyr at innholdsskapere er prisgitt en enkelt plattforms algoritmer, vilkår og inntektsdeling. Plattformen kan endre reglene når som helst, noe som kan påvirke inntekter og synlighet dramatisk. Skaperen har liten forhandlingsmakt overfor plattformen.',
      },
    },
    {
      id: 'mi2-7-3-ex-3',
      type: 'exercise',
      title: 'Oppgave 7.3.3',
      exercise: {
        id: 'mi2-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        task: 'Forklar hva kreatorøkonomien er og beskriv tre ulike inntektskilder for innholdsskapere.',
        solution: 'Kreatorøkonomien er det økonomiske systemet der enkeltpersoner tjener penger på innhold de skaper og publiserer på digitale plattformer. Tre inntektskilder: 1) Annonseinntekter - plattformen viser annonser i innholdet og deler inntektene med skaperen (f.eks. YouTube Partner Program). 2) Sponsorater - merkevarer betaler for at innholdsskaperen omtaler eller viser produktene deres. 3) Direkte støtte fra fans - gjennom plattformer som Patreon eller Twitch-abonnementer betaler publikum direkte til skaperen.',
      },
    },
    {
      id: 'mi2-7-3-ex-4',
      type: 'exercise',
      title: 'Oppgave 7.3.4',
      exercise: {
        id: 'mi2-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        task: 'Diskuter hvordan overgangen til streaming påvirker mediemangfoldet i Norge. Bruk NRKs rolle som eksempel.',
        solution: 'Streaming gir nordmenn tilgang til et enormt internasjonalt innholdstilbud, men kan true norsk innholdsproduksjon fordi globale aktører som Netflix dominerer markedet. NRK spiller en viktig rolle for mediemangfoldet ved å produsere og tilby norskspråklig innhold gratis, uavhengig av kommersielle hensyn. NRK kan prioritere smalt og kulturelt viktig innhold som ikke ville vært lønnsomt på en kommersiell plattform. Samtidig skaper konkurransen debatt om hvor stor NRK bør være og om offentlig finansiering fortrenger kommersielle aktører.',
      },
    },
    {
      id: 'mi2-7-3-ex-5',
      type: 'exercise',
      title: 'Oppgave 7.3.5',
      exercise: {
        id: 'mi2-7-3-ex-5',
        number: '7.3.5',
        type: 'classic',
        task: 'Drøft om det er rettferdig at musikkartister mottar så lite betaling per avspilling på Spotify. Presenter argumenter fra både artistenes og Spotifys perspektiv.',
        solution: 'Artistenes perspektiv: Betalingen er for lav til å leve av streaming alene, store deler av inntektene går til plattformen og plateselskapene, og modellen favoriserer artister med mange avspillinger. Spotifys perspektiv: Plattformen gir artister global distribusjon, eksponering og oppdagelsesverktøy, piratkopiering er redusert, og den totale pengestrømmen til musikkindustrien har økt. Et balansert svar anerkjenner at Spotify har gjort musikk mer tilgjengelig, men at fordelingsnøkkelen er skjev og at det trengs en mer rettferdig modell.',
      },
    },
    {
      id: 'mi2-7-3-summary',
      type: 'text',
      content: `## Oppsummering

- **Streaming** har erstattet lineært mediekonsum med on-demand-tilgang
- Strømmetjenester bruker ulike **inntektsmodeller**: abonnement, annonser og freemium
- **Kreatorøkonomien** gir enkeltpersoner mulighet til å leve av innholdsproduksjon
- **Plattformavhengighet** gir plattformene stor makt over innholdsskapernes økonomi
- **Allmennkringkastere** som NRK spiller en viktig rolle for norsk mediemangfold
- Overgangen til streaming reiser spørsmål om **rettferdig betaling** og kulturelt mangfold`,
    },
    {
      id: 'mi2-7-3-samleoppgave',
      type: 'exercise',
      title: 'Samleoppgave 7.3',
      exercise: {
        id: 'mi2-7-3-samle',
        number: '7.3.S',
        type: 'classic',
        task: 'Kartlegg ditt eget mediekonsum i en uke. Hvilke strømmetjenester bruker du? Hvor mye tid bruker du på ulike plattformer? Analyser funnene i lys av trendene beskrevet i dette kapittelet og diskuter hva ditt konsum sier om utviklingen i medielandskapet.',
        hints: ['Inkluder alle plattformer: musikk, video, podkast, sosiale medier, nyhetsapper.'],
        solution: 'Et godt svar inneholder en konkret oversikt over eget mediekonsum, kobler dette til sentrale begreper fra kapittelet (on-demand, personalisering, fragmentering, plattformavhengighet), reflekterer over hva som styrer valgene (algoritmer, vaner, anbefalinger), og diskuterer bredere implikasjoner for mediemangfold og norsk innholdsproduksjon.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Datajournalistikk og visualisering
// ============================================================================

export const CHAPTER_MEDIEINFO_2_7_4: TextbookChapter = {
  id: 'medieinfo-2-7-4',
  courseId: 'medieinfo-2',
  chapterNumber: '7.4',
  title: 'Datajournalistikk og visualisering',
  description: 'Datavisualisering, åpne data, datadrevne nyheter og visuell formidling av kompleks informasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for hva datajournalistikk er og hvordan det skiller seg fra tradisjonell journalistikk',
    'analysere og vurdere kvaliteten på datavisualiseringer i mediene',
    'drøfte betydningen av åpne data for demokrati og journalistikk',
  ],
  keyTerms: [
    { term: 'Datajournalistikk', definition: 'En form for journalistikk som bruker store datasett, statistisk analyse og databehandling for å avdekke, formidle og dokumentere nyhetshistorier som ikke ville vært mulig å finne med tradisjonelle metoder.' },
    { term: 'Datavisualisering', definition: 'Grafisk fremstilling av data og informasjon ved hjelp av diagrammer, kart, grafer og interaktive elementer for å gjøre komplekse data forståelige og tilgjengelige for publikum.' },
    { term: 'Åpne data', definition: 'Data som er fritt tilgjengelige for alle å bruke, gjenbruke og redistribuere, ofte offentlige data fra stat og kommuner som gjøres tilgjengelig i maskinlesbare formater.' },
    { term: 'Visuell retorikk', definition: 'Bruken av visuelle virkemidler som farger, skala, perspektiv og design for å påvirke hvordan publikum forstår og tolker data og informasjon.' },
  ],
  content: [
    {
      id: 'mi2-7-4-intro',
      type: 'text',
      content: `## Når data blir journalistikk

I en verden full av informasjon er evnen til å finne, analysere og formidle data blitt en nøkkelkompetanse i journalistikken. Datajournalistikk handler om å bruke datasett, statistikk og visualisering til å fortelle historier som ellers ville vært skjult i tallmaterialet.

Fra Panama Papers til valgdekning og pandemistatistikk - de siste årenes mest slagkraftige journalistikk har ofte vært datadrevet. I dette kapittelet lærer du hvordan datajournalistikk fungerer, hva som gjør en god datavisualisering, og hvorfor åpne data er viktig for demokratiet.`,
    },
    {
      id: 'mi2-7-4-def-datajournalistikk',
      type: 'definition',
      title: 'Datajournalistikk',
      content: 'Datajournalistikk er en journalistisk metode som bruker innsamling, analyse og visualisering av store datamengder for å avdekke og formidle nyhetshistorier. Prosessen involverer typisk å skaffe data (fra offentlige registre, lekkasjer eller egen datainnsamling), rense og analysere dataene, og presentere funnene gjennom tekst, grafikk og interaktive visualiseringer. Datajournalistikk kombinerer tradisjonelle journalistiske ferdigheter med teknisk kompetanse i databehandling og programmering.',
    },
    {
      id: 'mi2-7-4-text-metode',
      type: 'text',
      content: `### Datajournalistikkens arbeidsmetode

**Typisk arbeidsprosess:**
1. **Idé og hypotese**: Hva kan dataene fortelle oss? Hvilken historie leter vi etter?
2. **Datainnsamling**: Hente data fra offentlige registre, databaser, innsynsbegjæringer eller egne undersøkelser
3. **Datarensing**: Fjerne feil, fylle inn manglende verdier, standardisere format
4. **Analyse**: Finne mønstre, avvik og sammenhenger i datamaterialet
5. **Verifisering**: Dobbeltsjekke funn, konfrontere kilder, kontekstualise
6. **Formidling**: Presentere funnene gjennom tekst, visualiseringer og interaktive elementer

**Viktige verktøy:**
- **Regneark**: Excel, Google Sheets for enkel dataanalyse
- **Programmering**: Python, R for avansert analyse
- **Visualisering**: D3.js, Flourish, Datawrapper for å lage grafikk
- **Kartlegging**: QGIS, Mapbox for geografiske data
- **Databaseverktøy**: SQL for å spørre mot store databaser

**Berømte eksempler:**
- **Panama Papers** (2016): Lekkasje av 11,5 millioner dokumenter avslørte skatteunndragelse i global skala
- **Pandemidata**: Sanntidsvisualiseringer av smitte, vaksinasjon og dødsfall
- **Valgdekning**: Interaktive kart og prediksjonsmodeller
- **Kommuneøkonomi**: VGs og NRKs bruk av åpne budsjettdata`,
    },
    {
      id: 'mi2-7-4-def-datavisualisering',
      type: 'definition',
      title: 'Datavisualisering',
      content: 'Datavisualisering er kunsten og vitenskapen om å fremstille data grafisk slik at mønstre, trender og sammenhenger blir synlige og forståelige. Gode datavisualiseringer formidler kompleks informasjon raskt og presist. Vanlige former inkluderer stolpediagrammer, linjediagrammer, kakediagrammer, kart, varmekart og interaktive dashbord. Viktige prinsipper er klarhet, ærlighet, proporsjonalitet og tilgjengelighet.',
    },
    {
      id: 'mi2-7-4-text-visualisering',
      type: 'text',
      content: `### God og dårlig datavisualisering

**Kjennetegn på god datavisualisering:**
- **Klar**: Leseren forstår raskt hva som vises
- **Ærlig**: Skalaer og proporsjoner er korrekte og ikke villedende
- **Tilgjengelig**: Fungerer for fargeblinde og kan forstås uten spesialkunnskap
- **Kontekstuell**: Nødvendig bakgrunnsinformasjon er inkludert
- **Fokusert**: Viser det vesentlige uten unødvendig «pynt»

**Vanlige feil og manipulasjonsteknikker:**
- **Avkuttet y-akse**: Starter y-aksen på et annet tall enn null for å overdrive endringer
- **Misvisende skala**: Bruker ulike skalaer som gjør sammenligninger uriktige
- **Cherry-picking**: Velger tidsperioder eller datapunkter som støtter en bestemt konklusjon
- **3D-effekter**: Gjør diagrammer vanskelig å lese nøyaktig
- **Manglende kontekst**: Viser tall uten å forklare hva de betyr eller sammenligne med

**Visuell retorikk:**
Fargevalg, størrelsesforhold og design påvirker hvordan data oppfattes. Rødt signaliserer fare, grønt signaliserer positivt. Større elementer oppfattes som viktigere. Disse virkemidlene kan brukes bevisst eller ubevisst for å styre tolkningen av data.`,
    },
    {
      id: 'mi2-7-4-example-panama',
      type: 'example',
      title: 'Eksempel: Panama Papers',
      problem: 'Hva var Panama Papers og hva forteller saken om datajournalistikkens kraft?',
      solution: `**Bakgrunn:**
I 2016 fikk den tyske avisen Süddeutsche Zeitung tilgang til 11,5 millioner dokumenter fra advokatfirmaet Mossack Fonseca i Panama. Dokumentene avslørte hvordan verdens rikeste og mektigste personer brukte skallselskaper for å skjule formuer og unndra skatt.

**Datajournalistikken:**
- **Omfang**: 2,6 terabyte med data - umulig å analysere manuelt
- **Samarbeid**: Over 370 journalister fra 80 land samarbeidet gjennom ICIJ (International Consortium of Investigative Journalists)
- **Teknologi**: Programmering og maskinlæring ble brukt til å analysere og koble dokumenter
- **Visualisering**: Interaktive nettverksdiagrammer viste forbindelser mellom personer og selskaper

**Konsekvenser:**
- Islands statsminister gikk av
- Flere politikere og kjendiser ble etterforsket
- Over 1,2 milliarder dollar i skatt ble innkrevd globalt
- Debatt om internasjonal skattepolitikk ble satt på dagsordenen

**Lærdommer:**
- Datajournalistikk kan avdekke systemer og mønstre som er usynlige for tradisjonell journalistikk
- Internasjonalt samarbeid er nødvendig for å granske globale nettverk
- Teknologisk kompetanse er blitt en avgjørende journalistisk ferdighet
- Visualisering gjør komplekse sammenhenger tilgjengelige for publikum`,
    },
    {
      id: 'mi2-7-4-text-apne-data',
      type: 'text',
      content: `### Åpne data og demokrati

**Hva er åpne data?**
Åpne data er data som er fritt tilgjengelige for alle å bruke, uten begrensninger som opphavsrett, patenter eller andre kontrollmekanismer. I Norge stiller offentleglova krav om at offentlig informasjon skal være tilgjengelig.

**Eksempler på åpne data i Norge:**
- Stortingets voteringsdata
- Kommunebudsjetter og regnskaper
- Eiendomsregistre og byggesaker
- Miljødata, luftkvalitet og klima
- Trafikkdata og kollektivtransport
- Helsestatistikk og befolkningsdata

**Betydning for demokratiet:**
- **Transparens**: Borgerne kan kontrollere hvordan offentlige midler brukes
- **Ansvarliggjøring**: Journalister kan avdekke misbruk og ineffektivitet
- **Innovasjon**: Utviklere kan lage nye tjenester basert på offentlige data
- **Deltakelse**: Informerte borgere kan delta mer aktivt i demokratiet

**Utfordringer:**
- Ikke alle data er tilgjengelige i brukervennlige formater
- Teknisk kompetanse kreves for å hente ut og analysere data
- Personvern kan begrense hvilke data som bør offentliggjøres
- Ressurskrevende for offentlige organer å tilrettelegge data`,
    },
    {
      id: 'mi2-7-4-ex-1',
      type: 'exercise',
      title: 'Oppgave 7.4.1',
      exercise: {
        id: 'mi2-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Hva er datajournalistikk?',
        options: [
          { id: 'a', text: 'Journalistikk som bare publiseres digitalt', isCorrect: false },
          { id: 'b', text: 'Journalistikk som bruker datasett, analyse og visualisering for å avdekke og formidle nyhetshistorier', isCorrect: true },
          { id: 'c', text: 'Journalistikk som handler om datateknologi', isCorrect: false },
          { id: 'd', text: 'Automatisk genererte nyhetsartikler', isCorrect: false },
        ],
        solution: 'Datajournalistikk er en journalistisk metode som bruker innsamling, analyse og visualisering av store datamengder for å avdekke og formidle nyhetshistorier som ikke ville vært mulig å finne med tradisjonelle metoder alene.',
      },
    },
    {
      id: 'mi2-7-4-ex-2',
      type: 'exercise',
      title: 'Oppgave 7.4.2',
      exercise: {
        id: 'mi2-7-4-ex-2',
        number: '7.4.2',
        type: 'multiple-choice',
        task: 'Hvilken teknikk brukes ofte for å manipulere et stolpediagram slik at endringer virker større enn de er?',
        options: [
          { id: 'a', text: 'Å bruke farger', isCorrect: false },
          { id: 'b', text: 'Å avkutte y-aksen slik at den ikke starter på null', isCorrect: true },
          { id: 'c', text: 'Å legge til en tittel', isCorrect: false },
          { id: 'd', text: 'Å bruke horisontale stolper i stedet for vertikale', isCorrect: false },
        ],
        solution: 'Avkutting av y-aksen er en vanlig manipulasjonsteknikk der y-aksen i et diagram starter på et annet tall enn null. Dette gjør at selv små endringer ser dramatisk store ut visuelt, fordi stolpene vises med overdrevne forskjeller. En ærlig fremstilling starter y-aksen på null med mindre det er en god grunn til noe annet.',
      },
    },
    {
      id: 'mi2-7-4-ex-3',
      type: 'exercise',
      title: 'Oppgave 7.4.3',
      exercise: {
        id: 'mi2-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        task: 'Beskriv arbeidsprosessen i et datajournalistisk prosjekt fra idé til ferdig publisering. Forklar hva som skjer i hvert steg.',
        solution: 'Prosessen har seks hovedsteg: 1) Idé og hypotese - journalisten identifiserer et spørsmål dataene kan besvare. 2) Datainnsamling - data hentes fra offentlige registre, databaser eller innsynsbegjæringer. 3) Datarensing - feil fjernes og formater standardiseres. 4) Analyse - mønstre, avvik og sammenhenger identifiseres gjennom statistisk analyse. 5) Verifisering - funnene dobbeltsjekkes, kilder konfronteres. 6) Formidling - historien presenteres gjennom tekst, visualiseringer og interaktive elementer for publikum.',
      },
    },
    {
      id: 'mi2-7-4-ex-4',
      type: 'exercise',
      title: 'Oppgave 7.4.4',
      exercise: {
        id: 'mi2-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        task: 'Forklar hva åpne data er og gi tre eksempler på hvordan åpne data kan styrke demokratiet.',
        solution: 'Åpne data er data som er fritt tilgjengelige for alle å bruke, gjenbruke og redistribuere. Tre eksempler på demokratisk styrking: 1) Transparens i offentlige budsjetter - borgere kan se hvordan skattepengene brukes og holde politikere ansvarlige. 2) Journalistisk granskning - åpne eiendomsregistre og selskapsdata gjør det mulig å avdekke korrupsjon og interessekonflikter. 3) Borgerlig deltakelse - tilgang til miljødata, trafikkdata og helsestatistikk gjør det mulig for borgere å delta informert i politiske debatter og kommunale prosesser.',
      },
    },
    {
      id: 'mi2-7-4-ex-5',
      type: 'exercise',
      title: 'Oppgave 7.4.5',
      exercise: {
        id: 'mi2-7-4-ex-5',
        number: '7.4.5',
        type: 'classic',
        task: 'Finn en datavisualisering i en nettavis eller et nyhetsmedium. Vurder kvaliteten på visualiseringen: Er den klar og ærlig? Bruker den korrekte skalaer? Er kontekst inkludert? Kunne den vært villedende?',
        solution: 'Et godt svar identifiserer en konkret visualisering med kildehenvisning, vurderer klarhet (er det lett å forstå hva som vises?), ærlighet (er skalaer korrekte og proporsjoner riktige?), kontekst (er nødvendig bakgrunnsinformasjon gitt?), og tilgjengelighet (fungerer den for alle?). Svaret bør også reflektere over om noen aspekter kunne være villedende og hvorfor.',
      },
    },
    {
      id: 'mi2-7-4-summary',
      type: 'text',
      content: `## Oppsummering

- **Datajournalistikk** bruker datasett og analyse for å avdekke historier tradisjonelle metoder ikke kan finne
- Prosessen inkluderer datainnsamling, rensing, analyse, verifisering og **visualisering**
- Gode datavisualiseringer er klare, ærlige, tilgjengelige og kontekstuelle
- **Manipulasjonsteknikker** som avkuttet y-akse og cherry-picking kan gjøre visualiseringer villedende
- **Åpne data** er viktige for demokratisk transparens og ansvarliggjøring
- **Panama Papers** viser datajournalistikkens potensial for å avdekke globale systemer`,
    },
    {
      id: 'mi2-7-4-samleoppgave',
      type: 'exercise',
      title: 'Samleoppgave 7.4',
      exercise: {
        id: 'mi2-7-4-samle',
        number: '7.4.S',
        type: 'classic',
        task: 'Velg et tema du er interessert i (for eksempel klima, helse, økonomi eller sport). Finn et offentlig datasett som er relevant for temaet og lag et forslag til en datajournalistisk sak. Beskriv hvilke data du ville brukt, hvilken historie du ville fortalt, og hvordan du ville visualisert funnene.',
        hints: ['Se på data.norge.no, SSB.no eller Stortingets åpne data for inspirasjon.'],
        solution: 'Et godt svar identifiserer et konkret og tilgjengelig datasett, formulerer en tydelig journalistisk problemstilling, beskriver en realistisk analysemetode, foreslår en eller flere passende visualiseringsformer, og reflekterer over hva dataene kan og ikke kan fortelle oss.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: Medienes fremtid
// ============================================================================

export const CHAPTER_MEDIEINFO_2_7_5: TextbookChapter = {
  id: 'medieinfo-2-7-5',
  courseId: 'medieinfo-2',
  chapterNumber: '7.5',
  title: 'Medienes fremtid',
  description: 'Trender, utfordringer og muligheter for medier i en tid med teknologisk omveltning og endret mediebruk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'identifisere og analysere sentrale trender som former fremtidens medielandskap',
    'drøfte utfordringer mediebransjen står overfor knyttet til teknologi, økonomi og tillit',
    'vurdere medienes rolle i demokratiet i lys av pågående endringer',
  ],
  keyTerms: [
    { term: 'Medieinnovasjon', definition: 'Utvikling og implementering av nye teknologier, formater, forretningsmodeller og praksiser i mediebransjen for å møte endrede behov og muligheter.' },
    { term: 'Nyhetsørken', definition: 'Et geografisk område som har mistet eller mangler lokal nyhetsdekning fordi lokale medier er lagt ned eller sterkt redusert, noe som svekker demokratisk deltakelse og ansvarliggjøring.' },
    { term: 'Tillit til medier', definition: 'Graden av troverdighet og pålitelighet som befolkningen tillegger medieinstitusjoner. Tilliten har falt i mange land og anses som en av de største utfordringene for moderne journalistikk.' },
    { term: 'Medieregulering', definition: 'Lovgivning og regler som styrer medienes virksomhet, inkludert presseetikk, plattformregulering, personvern og ytringsfrihet. Digitaliseringen utfordrer eksisterende regulering.' },
  ],
  content: [
    {
      id: 'mi2-7-5-intro',
      type: 'text',
      content: `## Mediene ved et veiskille

Mediebransjen befinner seg midt i en av de mest omfattende omveltningene i sin historie. Kunstig intelligens, plattformøkonomi, endrede medievaner og fallende tillit utfordrer etablerte forretningsmodeller og journalistisk praksis. Samtidig åpner teknologien nye muligheter for formidling, deltakelse og innovasjon.

Hvordan vil mediene se ut om ti år? Vil det fortsatt finnes aviser? Hvem vil produsere nyheter? Og kan demokratiet fungere uten en sterk og uavhengig presse? I dette kapittelet ser vi på de viktigste trendene, utfordringene og mulighetene som former fremtidens medielandskap.`,
    },
    {
      id: 'mi2-7-5-def-medieinnovasjon',
      type: 'definition',
      title: 'Medieinnovasjon',
      content: 'Medieinnovasjon handler om å utvikle nye måter å produsere, distribuere og finansiere journalistikk og medieinnhold. Dette kan være teknologisk innovasjon (AI, VR, automatisering), formatinnovasjon (nye fortellerformater, interaktivt innhold), modellsinnovasjon (nye forretnings- og inntektsmodeller) eller prosessinnovasjon (nye måter å organisere redaksjonelt arbeid). Medieinnovasjon er avgjørende for at medier skal overleve i et raskt skiftende landskap.',
    },
    {
      id: 'mi2-7-5-text-trender',
      type: 'text',
      content: `### Sentrale trender i medieutviklingen

**1. AI i redaksjonene:**
- Automatisert innholdsproduksjon for rutinesaker
- AI-verktøy for research, faktasjekk og innholdspersonalisering
- Debatt om journalistisk integritet og opphavsrett
- Nye roller: AI-redaktører og promptingeniører i medier

**2. Abonnements- og betalingsmodeller:**
- Overgang fra annonsefinansiering til direktebetaling fra lesere
- Utbredt bruk av betalingsmurer
- Buntingmodeller (flere medier i én pakke)
- Utfordring: Betalingsvilje varierer med alder, inntekt og region

**3. Plattformregulering:**
- EUs Digital Services Act stiller krav til transparens og ansvar
- Debatt om algoritmisk ansvar og innholdsmoderering
- Krav om betaling til medier for nyhetsinnhold (etter australsk modell)
- Balanse mellom ytringsfrihet og beskyttelse mot skadelig innhold

**4. Lokaljournalistikkens krise:**
- Lokalaviser legges ned eller nedbemanner i mange land
- «Nyhetsørkener» oppstår i områder uten lokal dekning
- Konsekvenser for demokratisk deltakelse og lokalt ansvar
- Nye modeller: Ideelle medier, medlemsfinansiert journalistikk

**5. Endret mediebruk blant unge:**
- Unge foretrekker sosiale medier fremfor tradisjonelle nyhetsmedier
- Nyheter konsumeres gjennom TikTok, Instagram og YouTube
- Kortformat dominerer over lange artikler
- Tilliten til tradisjonelle medier er lavere blant unge`,
    },
    {
      id: 'mi2-7-5-def-nyhetsørken',
      type: 'definition',
      title: 'Nyhetsørken',
      content: 'En nyhetsørken er et geografisk område - typisk en kommune eller region - som har mistet sine lokale nyhetsmedier eller der lokal nyhetsdekning er så redusert at viktige saker ikke dekkes. Forskning viser at områder som mister lokal nyhetsdekning opplever lavere valgdeltakelse, mer korrupsjon, høyere kommunale utgifter og svakere borgerlig engasjement. I USA har over 2 500 aviser lagt ned siden 2005, og fenomenet sprer seg til andre land.',
    },
    {
      id: 'mi2-7-5-text-utfordringer',
      type: 'text',
      content: `### Utfordringer for medienes fremtid

**Tillitskrisen:**
- Tilliten til medier har falt i mange land de siste tiårene
- Politisk polarisering fører til at medier oppfattes som partiske
- Desinformasjon og «fake news»-beskyldninger undergraver troverdigheten
- Sosiale medier skaper usikkerhet om hva som er pålitelig informasjon

**Økonomisk press:**
- Annonseinntekter har flyttet til Google og Meta
- Avisopplag og lineær TV-seing synker
- Digital transformasjon krever investeringer mediene ikke alltid har råd til
- Nedbemanninger rammer undersøkende og spesialisert journalistikk

**Teknologisk disrupsjon:**
- AI utfordrer journalisters rolle og arbeidsmåter
- Deepfakes og AI-generert innhold truer tilliten til medier
- Plattformselskapenes makt over distribusjon og inntekter
- Høyt tempo i teknologiutviklingen krever konstant tilpasning

**Fragmentering av offentligheten:**
- Flere kanaler og plattformer betyr at folk konsumerer svært ulikt innhold
- Vanskeligere å skape felles referanserammer i samfunnet
- Risikofor at viktige nyheter «drukner» i underholdningsinnhold
- Utfordring for demokratisk meningsdannelse`,
    },
    {
      id: 'mi2-7-5-example-tillit',
      type: 'example',
      title: 'Eksempel: Tillitskrisen og norske medier',
      problem: 'Hvordan står det til med tilliten til medier i Norge sammenlignet med andre land, og hva kan forklare forskjellene?',
      solution: `**Norsk tillit i et internasjonalt perspektiv:**

**Situasjonen:**
Norge er blant landene med høyest tillit til medier i verden, men tilliten har falt noe de siste årene. Ifølge Reuters Institute Digital News Report stoler rundt 40-50 % av nordmenn på nyheter generelt, mens tilliten til enkeltmedier som NRK er vesentlig høyere.

**Faktorer som forklarer den relativt høye tilliten:**
- **Pressestøtte**: Offentlig støtte sikrer mediemangfold og lokal dekning
- **Selvregulering**: Pressens Faglige Utvalg (PFU) og Vær Varsom-plakaten gir etisk ramme
- **Allmennkringkaster**: NRK har høy tillit som uavhengig, ikke-kommersiell aktør
- **Høy mediekompetanse**: Utdanningsnivå og mediekunnskap er relativt høy
- **Lavere polarisering**: Politisk debatt er mindre polarisert enn i mange land

**Bekymringstegn:**
- Unge har lavere tillit enn eldre
- Politisk høyre-venstre-skille i mediebillit vokser
- Sosiale medier som nyhetskilder utfordrer tradisjonelle mediers posisjon
- Desinformasjon og konspirasjonsteorier når også norske brukere

**Tiltak for å opprettholde tillit:**
- Åpenhet om metoder, kilder og feil (transparens)
- Dialog med publikum og vilje til å rette feil
- Investering i kvalitetsjournalistikk
- Mediekritisk utdanning i skolen`,
    },
    {
      id: 'mi2-7-5-text-muligheter',
      type: 'text',
      content: `### Muligheter for fremtidens medier

Til tross for utfordringene finnes det også grunnlag for optimisme:

**Nye forretningsmodeller:**
- Medlems- og abonnementsmodeller gir stabile inntekter
- Nyhetsbrev (som Substack) lar journalister nå lesere direkte
- Crowdfunding og donasjonsbasert journalistikk
- Offentlig finansiering og mediestøtte

**Teknologiske muligheter:**
- AI kan frigjøre tid til dypere journalistikk
- Nye formater (podkast, visuelt, interaktivt) når nye målgrupper
- Datajournalistikk avdekker historier som aldri før var mulige
- Verktøy for faktasjekking og verifisering blir stadig bedre

**Demokratisk potensial:**
- Borgerjournalistikk og brukergenerert innhold supplerer tradisjonelle medier
- Åpne data styrker transparens og ansvarliggjøring
- Globalt samarbeid mellom journalister (som i Panama Papers)
- Direkte kontakt mellom journalister og publikum gjennom sosiale medier

**Nøkkelen:** Medienes fremtid avhenger av evnen til å kombinere teknologisk innovasjon med journalistiske kjerneverdier: troverdighet, uavhengighet, grundighet og samfunnsansvar.`,
    },
    {
      id: 'mi2-7-5-ex-1',
      type: 'exercise',
      title: 'Oppgave 7.5.1',
      exercise: {
        id: 'mi2-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'Hva er en nyhetsørken?',
        options: [
          { id: 'a', text: 'Et område med svært mange nyhetsmedier', isCorrect: false },
          { id: 'b', text: 'Et geografisk område som har mistet eller mangler lokal nyhetsdekning', isCorrect: true },
          { id: 'c', text: 'En nettside uten oppdatert innhold', isCorrect: false },
          { id: 'd', text: 'Et medieselskap uten digitalt tilbud', isCorrect: false },
        ],
        solution: 'En nyhetsørken er et geografisk område der lokale nyhetsmedier er lagt ned eller sterkt redusert, slik at viktige lokale saker ikke lenger dekkes. Forskning viser at dette fører til lavere valgdeltakelse, mer korrupsjon og svakere demokratisk deltakelse.',
      },
    },
    {
      id: 'mi2-7-5-ex-2',
      type: 'exercise',
      title: 'Oppgave 7.5.2',
      exercise: {
        id: 'mi2-7-5-ex-2',
        number: '7.5.2',
        type: 'multiple-choice',
        task: 'Hvilken faktor bidrar mest til at Norge har relativt høy tillit til medier?',
        options: [
          { id: 'a', text: 'At alle nordmenn bruker sosiale medier', isCorrect: false },
          { id: 'b', text: 'At Norge har få medier', isCorrect: false },
          { id: 'c', text: 'En kombinasjon av pressestøtte, selvregulering og sterk allmennkringkaster', isCorrect: true },
          { id: 'd', text: 'At norske medier aldri gjør feil', isCorrect: false },
        ],
        solution: 'Norges relativt høye tillit til medier forklares av en kombinasjon av faktorer: pressestøtte som sikrer mediemangfold, selvregulering gjennom PFU og Vær Varsom-plakaten, en sterk og uavhengig allmennkringkaster (NRK), relativt høy mediekompetanse i befolkningen, og lavere politisk polarisering enn i mange andre land.',
      },
    },
    {
      id: 'mi2-7-5-ex-3',
      type: 'exercise',
      title: 'Oppgave 7.5.3',
      exercise: {
        id: 'mi2-7-5-ex-3',
        number: '7.5.3',
        type: 'classic',
        task: 'Beskriv tre sentrale trender som former fremtidens medielandskap og forklar hva hver av dem betyr for publikum.',
        solution: 'Tre sentrale trender: 1) AI i redaksjonene - automatisering av rutineoppgaver og AI-generert innhold. For publikum betyr dette raskere nyheter, men også risiko for feil og spørsmål om troverdighet. 2) Overgang til betalingsmodeller - medier bak betalingsmurer. For publikum betyr dette at kvalitetsjournalistikk koster, noe som kan skape et informasjonskille mellom de som betaler og de som ikke gjør det. 3) Plattformenes dominans - nyheter konsumeres gjennom sosiale medier. For publikum betyr dette at algoritmer styrer hva de ser, med risiko for filterbobler og desinformasjon.',
      },
    },
    {
      id: 'mi2-7-5-ex-4',
      type: 'exercise',
      title: 'Oppgave 7.5.4',
      exercise: {
        id: 'mi2-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Forklar hva som menes med fragmentering av offentligheten og drøft om dette er et problem for demokratiet.',
        solution: 'Fragmentering av offentligheten betyr at folk i økende grad konsumerer ulikt medieinnhold på ulike plattformer, slik at felles referanserammer og en felles virkelighetsforståelse svekkes. Argumenter for at det er et problem: Demokratiet er avhengig av at borgerne deler en viss felles kunnskapsbase for å kunne delta i opplyst debatt. Argumenter mot: Mangfold i mediebruk gir tilgang til flere perspektiver. Nyansert vurdering: Noe fragmentering er naturlig og positivt, men ekstrem fragmentering der grupper lever i helt ulike informasjonsunivers kan undergrave demokratisk sameksistens.',
      },
    },
    {
      id: 'mi2-7-5-ex-5',
      type: 'exercise',
      title: 'Oppgave 7.5.5',
      exercise: {
        id: 'mi2-7-5-ex-5',
        number: '7.5.5',
        type: 'classic',
        task: 'Drøft om lokaljournalistikken kan overleve i en digital alder. Presenter både utfordringer og mulige løsninger.',
        solution: 'Utfordringer: Fallende annonse- og abonnementsinntekter, tap av unge lesere til sosiale medier, høye kostnader for digital omstilling, vanskelig å oppnå lønnsom skala i lokale markeder. Mulige løsninger: Offentlig pressestøtte som sikrer lokal dekning, medlemsfinansierte modeller der lokalsamfunnet støtter avisen direkte, samarbeid mellom flere lokalaviser om teknologi og infrastruktur, bruk av AI for å effektivisere rutineoppgaver, og nye digitale formater som nyhetsbrev og lokale podkaster. Konklusjon: Lokaljournalistikken kan overleve, men krever nye forretningsmodeller og trolig en kombinasjon av offentlig støtte og publikumsbetaling.',
      },
    },
    {
      id: 'mi2-7-5-summary',
      type: 'text',
      content: `## Oppsummering

- Mediebransjen er i en **omfattende omveltning** drevet av teknologi, økonomi og endret mediebruk
- **Tillitskrisen** er en av de største utfordringene for moderne journalistikk
- **Nyhetsørkener** truer lokalt demokrati når lokalmedier forsvinner
- **Fragmentering** av offentligheten utfordrer felles referanserammer i samfunnet
- **Nye forretningsmodeller** som abonnement og medlemsfinansiering gir håp
- Medienes fremtid avhenger av å kombinere **teknologisk innovasjon** med **journalistiske kjerneverdier**
- Norge har bedre forutsetninger enn mange land takket være pressestøtte, selvregulering og NRK`,
    },
    {
      id: 'mi2-7-5-samleoppgave',
      type: 'exercise',
      title: 'Samleoppgave 7.5',
      exercise: {
        id: 'mi2-7-5-samle',
        number: '7.5.S',
        type: 'classic',
        task: 'Skriv et essay på 500-800 ord om medienes fremtid. Velg to av følgende utfordringer - AI, tillitskrisen, lokaljournalistikkens krise, plattformenes makt eller endret mediebruk blant unge - og drøft hvordan de kan møtes. Avslutt med din egen vurdering av hva som er viktigst for å sikre et velfungerende medielandskap i fremtiden.',
        hints: ['Bruk begreper og eksempler fra hele seksjon 7 og vis at du kan se sammenhenger mellom temaene.'],
        solution: 'Et godt essay demonstrerer forståelse av de valgte utfordringene, bruker relevante begreper og eksempler, presenterer ulike perspektiver, og avsluttes med en begrunnet egen vurdering. Essayet bør vise evne til analytisk tenkning og koble medieutviklingen til bredere samfunnsspørsmål som demokrati, ytringsfrihet og tilgang til informasjon.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const MEDIEINFO_2_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MEDIEINFO_2_7_1,
  CHAPTER_MEDIEINFO_2_7_2,
  CHAPTER_MEDIEINFO_2_7_3,
  CHAPTER_MEDIEINFO_2_7_4,
  CHAPTER_MEDIEINFO_2_7_5,
];
