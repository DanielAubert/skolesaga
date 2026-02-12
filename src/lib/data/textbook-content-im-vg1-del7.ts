/* eslint-disable */
// @ts-nocheck
/**
 * Informasjonsteknologi og medieproduksjon VG1 - Del 7: UX-design og brukeropplevelse
 *
 * Kapittel 7.1-7.6: UX-design og brukeropplevelse
 * Dekker LK20 kompetansemål for UX-design, brukerundersøkelser, prototyping, brukertesting,
 * informasjonsarkitektur og designsystemer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Hva er UX-design?
// ============================================================================

export const CHAPTER_IM_VG1_7_1: TextbookChapter = {
  id: 'im-vg1-7-1',
  courseId: 'im-vg1',
  chapterNumber: '7.1',
  title: 'Hva er UX-design?',
  description: 'Bli introdusert til fagfeltet UX-design, forstå forskjellen mellom UX og UI, og lær om brukersentrert designtenkning.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive sammenhenger mellom løsninger, kundens behov og brukernes forutsetninger og erfaringer',
  ],
  content: [
    {
      id: 'im-7-1-intro',
      type: 'text',
      content: `## Hva er UX-design?

Har du noen gang brukt en app som var så intuitiv at du ikke trengte å tenke over hvordan den fungerte? Eller en nettside som var så forvirrende at du ga opp og lukket den? Forskjellen mellom disse opplevelsene er UX-design. UX (User Experience) handler om å skape produkter som er nyttige, brukbare og behagelige å bruke.

I dette kapittelet skal du lære:
- Hva UX-design er og hvorfor det er viktig
- Forskjellen mellom UX og UI
- Designtenkning som metode
- Brukerreiser og berøringspunkter`,
    },
    {
      id: 'im-7-1-def-1',
      type: 'definition',
      title: 'UX-design',
      content: `**UX-design** (User Experience Design) er prosessen med å skape produkter som gir brukeren en meningsfull, effektiv og positiv opplevelse. Det omfatter hele reisen fra brukerens første møte med produktet til den siste interaksjonen.`,
    },
    {
      id: 'im-7-1-text-1',
      type: 'text',
      content: `### UX vs. UI

**UX (User Experience)** handler om den totale opplevelsen brukeren har med et produkt:
- Er produktet nyttig? Løser det et reelt problem?
- Er det brukbart? Kan brukeren nå målet sitt effektivt?
- Er det tilgjengelig? Kan alle bruke det, uavhengig av funksjonshemninger?
- Er det tilfredsstillende? Gir det en god følelse?

**UI (User Interface)** handler om det visuelle utseendet og interaksjonsdesignet:
- Knapper, farger, typografi og layout
- Hvordan elementer ser ut og animeres
- Visuell kommunikasjon og estetikk

**Analogi**: Hvis et hus er produktet, er UX arkitekturen (romplan, funksjon, flyt), og UI er interiørdesignet (farger, materialer, møbler). Begge er viktige, men UX må komme først.`,
    },
    {
      id: 'im-7-1-text-2',
      type: 'text',
      content: `### Designtenkning (Design Thinking)

Designtenkning er en metode for å løse problemer kreativt med brukeren i sentrum. Den har fem faser:

**1. Empati**: Forstå brukerne gjennom observasjon, intervjuer og innlevelse. Hva er deres behov, frustrasjoner og mål?

**2. Definere**: Definer problemet basert på innsikten. Et godt definert problem er halvt løst. Bruk formuleringen: "[Bruker] trenger [behov] fordi [innsikt]."

**3. Idégenerering**: Generer så mange ideer som mulig uten å sensurere. Kvantitet over kvalitet i denne fasen.

**4. Prototyping**: Bygg raske, enkle prototyper for å teste ideene. Start med papirprototyper.

**5. Testing**: Test prototypene med ekte brukere. Lær av tilbakemeldingene og gjenta prosessen.

Designtenkning er **iterativ** - du går ofte tilbake til tidligere faser basert på det du lærer.`,
    },
    {
      id: 'im-7-1-text-3',
      type: 'text',
      content: `### Brukerreiser og berøringspunkter

En **brukerreise** (user journey) kartlegger alle stegene en bruker går gjennom for å nå et mål. Den inkluderer handlinger, tanker, følelser og smertepunkter.

**Berøringspunkter** (touchpoints) er hvert sted der brukeren interagerer med produktet eller tjenesten:
- Nettsiden, appen, e-poster, kundeservice, butikken, emballasjen

**Hvorfor kartlegge brukerreiser?**
- Avdekker problemer brukeren opplever
- Identifiserer muligheter for forbedring
- Skaper empati for brukeren i hele teamet
- Synliggjør hele opplevelsen, ikke bare enkeltskjermbilder

### UX-designerens rolle

En UX-designer:
- Undersøker og forstår brukerbehov
- Lager wireframes og prototyper
- Gjennomfører brukertester
- Samarbeider med utviklere, grafiske designere og produktledere
- Itererer og forbedrer basert på data og tilbakemeldinger`,
    },
    {
      id: 'im-7-1-example-1',
      type: 'example',
      title: 'Brukerreise for å bestille mat online',
      content: `Brukerreise for "Anna bestiller pizza":

**1. Oppdagelse**: Anna er sulten og søker "bestill pizza" på mobilen. Følelse: Sulten, utålmodig.
**2. Valg av restaurant**: Ser på anmeldelser og menyer. Velger en restaurant. Følelse: Nysgjerrig.
**3. Menynavigasjon**: Blar gjennom menyen, velger pizza og tilbehør. Følelse: Ivrig.
**4. Bestilling**: Legger til i handlekurven, velger levering, oppgir adresse. Følelse: Forventningsfull.
**5. Betaling**: Betaler med Vipps. Følelse: Litt nervøs (fungerer det?).
**6. Venting**: Følger sporingen av leveransen. Følelse: Utålmodig.
**7. Mottak**: Pizzaen leveres. Følelse: Fornøyd (eller skuffet hvis den er kald).

**Smertepunkter**: Treg lasting av menyen, forvirrende navigasjon, uklar leveringstid. Hver av disse er en mulighet for UX-forbedring.`,
    },
    {
      id: 'im-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-7-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom UX og UI?',
        options: [
          'UX handler om koding, UI handler om design',
          'UX handler om den totale brukeropplevelsen, UI handler om det visuelle utseendet',
          'Det er det samme',
          'UI er viktigere enn UX',
        ],
        correctAnswer: 1,
        solution: 'UX (User Experience) handler om den totale opplevelsen brukeren har - er produktet nyttig, brukbart og tilfredsstillende? UI (User Interface) handler om det visuelle utseendet og interaksjonsdesignet - farger, knapper, typografi og layout.',
      },
    },
    {
      id: 'im-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv de fem fasene i designtenkning og forklar kort hva som gjøres i hver fase.',
        solution: '1) Empati: Forstå brukerne gjennom observasjon og intervjuer. 2) Definere: Formuler problemet basert på brukerinnsikten. 3) Idégenerering: Generer mange ideer uten å sensurere - kvantitet over kvalitet. 4) Prototyping: Bygg raske, enkle prototyper for å teste ideene. 5) Testing: Test prototypene med ekte brukere og lær av tilbakemeldingene. Prosessen er iterativ - man går tilbake til tidligere faser basert på det man lærer.',
      },
    },
    {
      id: 'im-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-7-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er en brukerreise (user journey)?',
        options: [
          'En fysisk reise brukeren tar for å kjøpe et produkt',
          'En kartlegging av alle stegene en bruker går gjennom for å nå et mål',
          'En type animasjon i en app',
          'En metode for å teste nettsider',
        ],
        correctAnswer: 1,
        solution: 'En brukerreise kartlegger alle stegene en bruker går gjennom for å nå et mål, inkludert handlinger, tanker, følelser og smertepunkter. Den gir et helhetlig bilde av brukeropplevelsen.',
      },
    },
    {
      id: 'im-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Tenk på en app eller nettside du bruker daglig. Lag en enkel brukerreise for en vanlig oppgave du gjør i den, og identifiser minst ett smertepunkt.',
        solution: 'Eksempel: Instagram - legge ut et bilde. 1) Åpne appen (følelse: vane). 2) Trykke pluss-knappen (handling: enkel). 3) Velge bilde fra kamerarullen (smertepunkt: mange bilder å bla gjennom, treg lasting). 4) Redigere med filter (følelse: kreativ). 5) Skrive bildetekst og legge til hashtags (smertepunkt: ingen foreslåtte hashtags). 6) Dele (følelse: spent). 7) Sjekke likes og kommentarer (følelse: forventningsfull). Smertepunkt: Treg lasting av bilder i velgeren gjør prosessen frustrerende.',
      },
    },
    {
      id: 'im-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-7-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva betyr det at designtenkning er iterativ?',
        options: [
          'Man går gjennom alle fasene én gang',
          'Man gjentar og forbedrer prosessen basert på det man lærer',
          'Man bruker bare datamaskiner',
          'Man jobber alene uten teamsamarbeid',
        ],
        correctAnswer: 1,
        solution: 'At designtenkning er iterativ betyr at man går tilbake til tidligere faser basert på det man lærer underveis. Etter testing kan man oppdage nye brukerbehov (tilbake til empati), redefiner problemet, generere nye ideer og lage nye prototyper.',
      },
    },
    {
      id: 'im-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-7-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Bruk designtenkningens empatifase: Velg en digital tjeneste du kjenner godt, og beskriv tre ulike brukergrupper som bruker den. Hva er deres ulike behov og utfordringer?',
        solution: 'Eksempel: Skolens læringsplattform (f.eks. It\'s Learning). Brukergruppe 1: Elever - behov: rask tilgang til innleveringer og karakterer, utfordring: vanskelig å finne riktig fag og oppgave. Brukergruppe 2: Lærere - behov: effektiv oppgaveadministrasjon og tilbakemelding, utfordring: mange klikk for å gi tilbakemelding til mange elever. Brukergruppe 3: Foreldre - behov: oversikt over barnets skolearbeid, utfordring: forvirrende grensesnitt, vanskelig å finne informasjon om fravær og karakterer.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'UX-design', definition: 'Prosessen med å skape produkter som gir brukeren en positiv opplevelse.' },
    { term: 'UI-design', definition: 'Design av det visuelle utseendet og interaksjonselementene i et produkt.' },
    { term: 'Designtenkning', definition: 'Iterativ metode for kreativ problemløsning med brukeren i sentrum.' },
    { term: 'Brukerreise', definition: 'Kartlegging av alle steg en bruker tar for å nå et mål.' },
    { term: 'Berøringspunkt', definition: 'Hvert sted der brukeren interagerer med produktet eller tjenesten.' },
    { term: 'Iterativ', definition: 'En prosess som gjentas og forbedres basert på tilbakemeldinger.' },
  ],
};

// ============================================================================
// Kapittel 7.2: Brukerundersøkelser og behovsanalyse
// ============================================================================

export const CHAPTER_IM_VG1_7_2: TextbookChapter = {
  id: 'im-vg1-7-2',
  courseId: 'im-vg1',
  chapterNumber: '7.2',
  title: 'Brukerundersøkelser og behovsanalyse',
  description: 'Lær metoder for å kartlegge brukerbehov gjennom intervjuer, spørreundersøkelser, observasjon og personas.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive sammenhenger mellom løsninger, kundens behov og brukernes forutsetninger og erfaringer',
  ],
  content: [
    {
      id: 'im-7-2-intro',
      type: 'text',
      content: `## Brukerundersøkelser og behovsanalyse

Du kan ikke designe for brukerne uten å forstå brukerne. Brukerundersøkelser er grunnlaget for god UX-design - de avdekker reelle behov, frustrasjoner og vaner. Å anta hva brukerne vil ha er risikabelt; å spørre dem og observere dem gir mye bedre resultater.

I dette kapittelet skal du lære:
- Kvalitative og kvantitative undersøkelsesmetoder
- Gjennomføring av brukerintervjuer
- Observasjon og feltarbeid
- Personas og empathy mapping`,
    },
    {
      id: 'im-7-2-text-1',
      type: 'text',
      content: `### Kvalitative vs. kvantitative metoder

**Kvalitative metoder** gir dybdeforståelse:
- Intervjuer: Snakke med brukere en-til-en
- Observasjon: Studere brukere i deres naturlige miljø
- Fokusgrupper: Gruppediskusjoner om et tema
- Dagbokstudier: Brukere logger opplevelser over tid

**Kvantitative metoder** gir bredde og tall:
- Spørreundersøkelser: Mange respondenter, strukturerte spørsmål
- Webanalyse: Data om brukeratferd på nettsider (Google Analytics)
- A/B-testing: Sammenligne to versjoner for å se hvilken som fungerer best

**Begge trengs**: Kvantitative data viser hva som skjer ("70% forlater handlekurven"), kvalitative data forklarer hvorfor ("fraktkostnaden kom overraskende").`,
    },
    {
      id: 'im-7-2-text-2',
      type: 'text',
      content: `### Brukerintervjuer

**Forberedelse:**
- Definer hva du vil lære
- Lag en intervjuguide med 5-10 åpne spørsmål
- Planlegg 30-60 minutter per intervju
- Rekrutter 5-8 deltakere fra målgruppen

**Gode spørsmål:**
- "Kan du fortelle meg om siste gang du...?"
- "Hva var vanskeligst med det?"
- "Hvordan løser du dette i dag?"
- "Hva skulle du ønske var annerledes?"

**Dårlige spørsmål:**
- Ledende: "Synes du ikke det ville vært bedre med...?"
- Ja/nei: "Liker du appen?" (bruk heller: "Beskriv opplevelsen din med appen")
- Hypotetiske: "Ville du brukt en funksjon som...?" (folk er dårlige til å forutsi egen atferd)

**Under intervjuet:**
- Lytt mer enn du snakker
- Følg opp interessante svar med "Kan du utdype?"
- Ta notater eller spill inn (med samtykke)
- Ikke forsvare designet ditt - du er der for å lære`,
    },
    {
      id: 'im-7-2-text-3',
      type: 'text',
      content: `### Personas

En **persona** er en fiktiv, men realistisk representasjon av en brukergruppe, basert på data fra undersøkelser.

**En persona inneholder:**
- Navn, alder og yrke
- Bakgrunn og livssituasjon
- Mål og motivasjoner
- Frustrasjoner og smertepunkter
- Teknisk kompetanse
- Et sitat som oppsummerer holdningen

**Empathy map** er et visuelt verktøy for å organisere innsikt om brukeren i fire kategorier:
- **Sier**: Hva sier brukeren i intervjuer?
- **Tenker**: Hva tenker brukeren men sier ikke høyt?
- **Gjør**: Hva gjør brukeren i praksis?
- **Føler**: Hvilke følelser opplever brukeren?

Personas og empathy maps hjelper teamet å ta brukerens perspektiv i alle designbeslutninger.`,
    },
    {
      id: 'im-7-2-example-1',
      type: 'example',
      title: 'Persona for en skolenettside',
      content: `**Persona: "Mia, 16 år"**

- Elev på VG1, studieretning IT og medieproduksjon
- Teknisk kompetent, bruker mobilen til alt
- Bor hjemme med foreldre og lillebror

**Mål**: Raskt finne informasjon om fag, timeplan og innleveringer.
**Frustrasjoner**: "Jeg finner aldri riktig side. Må klikke fem ganger for å finne karakterene mine." Nettsiden er treg på mobil.
**Sitat**: "Hvorfor kan ikke skolen lage en app som bare viser det jeg trenger?"

**Teknisk nivå**: Høyt - bruker Instagram, TikTok, Discord daglig. Frustrert over utdaterte systemer.

Denne personaen minner teamet på at elever bruker mobil og forventer rask, intuitiv navigasjon.`,
    },
    {
      id: 'im-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-7-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom kvalitative og kvantitative undersøkelsesmetoder?',
        options: [
          'Kvalitative er billigere, kvantitative er dyrere',
          'Kvalitative gir dybdeforståelse om hvorfor, kvantitative gir tall og bredde om hva',
          'Kvantitative gjøres først, kvalitative gjøres sist',
          'Det er ingen vesentlig forskjell',
        ],
        correctAnswer: 1,
        solution: 'Kvalitative metoder (intervjuer, observasjon) gir dybdeforståelse om hvorfor brukerne gjør som de gjør. Kvantitative metoder (spørreundersøkelser, webanalyse) gir tall og bredde om hva som skjer. Begge trengs for et komplett bilde.',
      },
    },
    {
      id: 'im-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv tre gode intervjuspørsmål du ville stilt for å forstå elevers opplevelse av skolens digitale verktøy.',
        solution: '1) "Kan du fortelle meg om den siste gangen du brukte skolens læringsplattform? Hva skulle du gjøre, og hvordan gikk det?" - Åpent spørsmål som avdekker reell bruk og opplevelse. 2) "Hva er det vanskeligste eller mest frustrerende du opplever med de digitale verktøyene på skolen?" - Avdekker smertepunkter direkte. 3) "Hvis du kunne endre én ting med skolens digitale verktøy, hva ville det vært?" - Gir innsikt i prioriteringer og udekkede behov.',
      },
    },
    {
      id: 'im-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-7-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er en persona i UX-design?',
        options: [
          'En ekte bruker som tester produktet',
          'En fiktiv, men realistisk representasjon av en brukergruppe basert på data',
          'En type brukergrensesnitt',
          'Et skjema som brukere fyller ut',
        ],
        correctAnswer: 1,
        solution: 'En persona er en fiktiv, men realistisk karakter som representerer en brukergruppe. Den er basert på data fra undersøkelser og inneholder informasjon om mål, frustrasjoner og atferd. Personas hjelper teamet å holde brukerfokus i designbeslutninger.',
      },
    },
    {
      id: 'im-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-7-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en enkel persona for en bruker av en app du velger selv. Inkluder navn, alder, mål, frustrasjoner og et sitat.',
        solution: 'Eksempel - Persona for Spotify: "Lars, 17 år" - Elev på VG2, hører på musikk hele tiden - på bussen, under lekser og når han trener. Mål: Finne ny musikk han liker, lage spillelister for ulike situasjoner. Frustrasjoner: "Discover Weekly treffer sjelden", vanskelig å organisere mange spillelister, annonser i gratisversjonen avbryter treningen. Sitat: "Musikk er lydreservoen til livet mitt, jeg trenger den riktige låten til riktig øyeblikk."',
      },
    },
    {
      id: 'im-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-7-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvorfor er "Ville du brukt en funksjon som...?" et dårlig intervjuspørsmål?',
        options: [
          'Det er for kort',
          'Folk er dårlige til å forutsi egen atferd med hypotetiske spørsmål',
          'Det er for åpent',
          'Det inneholder for mange ord',
        ],
        correctAnswer: 1,
        solution: 'Hypotetiske spørsmål gir upålitelige svar fordi folk er dårlige til å forutsi hvordan de faktisk vil oppføre seg. De fleste sier "ja, det høres bra ut" uten å virkelig vurdere det. Det er bedre å spørre om faktisk atferd: "Hvordan løser du dette i dag?"',
      },
    },
    {
      id: 'im-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-7-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en empathy map for en elev som bruker skolens nettside. Fyll ut de fire kategoriene: Sier, Tenker, Gjør og Føler.',
        solution: 'Empathy map - Elev på skolens nettside: SIER: "Hvor finner jeg timeplanen?" "Denne siden er treg." "Jeg bruker heller appen." TENKER: "Hvorfor er det så vanskelig å finne enkel informasjon?" "Andre nettsider fungerer mye bedre." "Kanskje jeg bare Google det i stedet." GJØR: Klikker seg gjennom mange sider, bruker søk i stedet for navigasjon, spør medelever i stedet for å lete selv. FØLER: Frustrert over treg lasting, utålmodig, oppgitt over utdatert design, lettet når de endelig finner det de leter etter.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Brukerintervju', definition: 'En-til-en samtale for å forstå brukeres behov og opplevelser.' },
    { term: 'Persona', definition: 'Fiktiv, databasert representasjon av en brukergruppe.' },
    { term: 'Empathy map', definition: 'Visuelt verktøy som organiserer innsikt om brukeren i fire kategorier.' },
    { term: 'Kvalitativ metode', definition: 'Undersøkelsesmetode som gir dybdeforståelse om brukeratferd.' },
    { term: 'Kvantitativ metode', definition: 'Undersøkelsesmetode som gir tall og statistikk om brukeratferd.' },
    { term: 'Smertepunkt', definition: 'Problem eller frustrasjon brukeren opplever i sin interaksjon med produktet.' },
  ],
};

// ============================================================================
// Kapittel 7.3: Wireframing og prototyping
// ============================================================================

export const CHAPTER_IM_VG1_7_3: TextbookChapter = {
  id: 'im-vg1-7-3',
  courseId: 'im-vg1',
  chapterNumber: '7.3',
  title: 'Wireframing og prototyping',
  description: 'Visualiser ideer med wireframes og prototyper, og lær å bruke digitale verktøy for å teste konsepter tidlig i prosessen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'visualisere og utvikle konsepter og ideer tilpasset ulike plattformer',
  ],
  content: [
    {
      id: 'im-7-3-intro',
      type: 'text',
      content: `## Wireframing og prototyping

Før du begynner å kode eller designe i detalj, er det viktig å planlegge strukturen. Wireframes og prototyper lar deg teste ideer raskt og billig, før du investerer tid og penger i utvikling. Å oppdage et problem i en papirskisse tar fem minutter å fikse - å oppdage det i en ferdig app kan ta uker.

I dette kapittelet skal du lære:
- Forskjellen mellom skisser, wireframes og prototyper
- Lo-fi og hi-fi wireframing
- Prototypingverktøy som Figma
- Den iterative designprosessen`,
    },
    {
      id: 'im-7-3-text-1',
      type: 'text',
      content: `### Fra skisse til prototype

**Skisse (sketch)**: Raske tegninger på papir. Brukes til å utforske mange ideer raskt. Ingen detaljer, bare konsepter. En designprosess bør starte med mange skisser.

**Wireframe**: En strukturell plan for en side eller skjerm. Viser plassering av elementer uten visuelt design. Bruker grå bokser, linjer og plassholdertekst.

**Mockup**: Et detaljert visuelt design som viser hvordan det ferdige produktet vil se ut, med farger, bilder og typografi. Ikke interaktiv.

**Prototype**: En interaktiv modell som kan klikkes gjennom. Simulerer brukeropplevelsen uten å faktisk fungere teknisk.

### Lo-fi vs. hi-fi

**Lo-fi (low fidelity)**: Enkle, raske representasjoner. Papirskisser, enkle wireframes. Fordeler: Rask å lage, billig å endre, inviterer til tilbakemeldinger fordi det ser uferdig ut.

**Hi-fi (high fidelity)**: Detaljerte, polerte representasjoner som ligner det ferdige produktet. Fordeler: Realistisk testing, viser visuelt design. Ulemper: Tar lenger tid, folk kan fokusere på detaljer i stedet for konseptet.`,
    },
    {
      id: 'im-7-3-text-2',
      type: 'text',
      content: `### Wireframing i praksis

**Elementer i en wireframe:**
- Rektangler for bilder (med X-kryss for å indikere bilde)
- Horisontale linjer for tekst
- Bokser for navigasjon, knapper og skjemafelter
- Tykke bokser for overskrifter
- Plassholdertekst ("Lorem ipsum" eller ekte tekst)

**Strukturer å planlegge:**
- Navigasjonens plassering (topp, side, bunn)
- Innholdshierarki (hva er viktigst?)
- Handlinger brukeren skal gjøre (knapper, lenker)
- Responsivt design (hvordan ser det ut på mobil vs. desktop?)

**Verktøy:**
- **Papir og blyant**: Raskest for tidlige skisser
- **Figma**: Gratis, nettbasert designverktøy, industristandard
- **Balsamiq**: Spesialisert wireframing-verktøy med skisseaktig stil
- **Adobe XD**: Adobes design- og prototypingsverktøy`,
    },
    {
      id: 'im-7-3-text-3',
      type: 'text',
      content: `### Prototyping

En prototype lar deg teste interaksjoner uten å kode. I Figma eller lignende verktøy kobler du skjermbilder med klikkbare lenker.

**Prototypingens fordeler:**
- Test ideer tidlig og billig
- Avdekk navigasjonsproblemer
- Kommuniser ideen til teamet og oppdragsgivere
- Spar tid og penger ved å fange feil tidlig

### Den iterative designprosessen

1. **Skissere**: Utforsk mange ideer raskt på papir
2. **Wireframe**: Lag strukturerte wireframes av de beste ideene
3. **Prototype**: Gjør wireframene interaktive
4. **Test**: La brukere prøve prototypen
5. **Iterer**: Forbedre basert på tilbakemeldinger
6. **Gjenta** steg 2-5 til løsningen fungerer godt

Hver runde gir ny innsikt som forbedrer designet. Tre raske iterasjoner gir nesten alltid et bedre resultat enn å bruke all tiden på én perfekt versjon.`,
    },
    {
      id: 'im-7-3-example-1',
      type: 'example',
      title: 'Wireframe for en skole-app',
      content: `En wireframe for en skoleapp med tre hovedskjermbilder:

**Skjerm 1 - Hjem:**
- Topplinje med skolens logo og brukernavn
- Dagens timeplan i en liste
- Varsler (innleveringsfrister, beskjeder)
- Hurtigknapper: Fravær, Karakterer, Meldinger

**Skjerm 2 - Timeplan:**
- Ukesvisning med dager som faner
- Fargekodede fag
- Klikk på en time for å se detaljer (rom, lærer, oppgaver)

**Skjerm 3 - Innleveringer:**
- Liste over kommende innleveringer med frist
- Status: Levert / Ikke levert / Under vurdering
- Klikk for å se oppgavedetaljer og laste opp

**Navigasjon:** Bunnmeny med fire ikoner: Hjem, Timeplan, Innleveringer, Profil.

Wireframene viser struktur og funksjon, ikke farger eller detaljert design.`,
    },
    {
      id: 'im-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-7-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom en wireframe og en mockup?',
        options: [
          'En wireframe viser strukturen uten visuelt design, en mockup viser det ferdige visuelle designet',
          'En wireframe er interaktiv, en mockup er ikke det',
          'Det er det samme',
          'En mockup lages først, deretter wireframe',
        ],
        correctAnswer: 0,
        solution: 'En wireframe er en strukturell plan som viser plasseringen av elementer uten visuelt design (grå bokser og plassholdertekst). En mockup er et detaljert visuelt design med farger, bilder og typografi som viser det ferdige utseendet, men uten interaktivitet.',
      },
    },
    {
      id: 'im-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-7-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom lo-fi og hi-fi prototyper, og beskriv når du ville brukt hver type.',
        solution: 'Lo-fi (low fidelity) prototyper er enkle, raske representasjoner som papirskisser eller enkle wireframes. Brukes tidlig i prosessen for å utforske mange ideer raskt og invitere til tilbakemeldinger. Fordel: Rask å endre, folk fokuserer på konseptet. Hi-fi (high fidelity) prototyper er detaljerte, polerte representasjoner som ligner det ferdige produktet. Brukes senere i prosessen for realistisk brukertesting og presentasjoner. Fordel: Gir realistisk bilde av sluttproduktet.',
      },
    },
    {
      id: 'im-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-7-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvorfor bør man starte med skisser på papir i stedet for å gå rett til digitale verktøy?',
        options: [
          'Papir er billigere',
          'Det er raskere å utforske mange ideer, og man blir ikke hengt opp i detaljer',
          'Digitale verktøy fungerer dårlig for design',
          'Det er et krav fra læreplanen',
        ],
        correctAnswer: 1,
        solution: 'Papirskisser er det raskeste måten å utforske mange ideer på. Man bruker sekunder per skisse i stedet for minutter per skjerm. Papir inviterer til endring og lar designeren fokusere på konsept og struktur uten å bli hengt opp i pikseldetaljer.',
      },
    },
    {
      id: 'im-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-7-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Tegn en enkel wireframe (på papir eller digitalt) for en mobilapp som hjelper elever med å holde oversikt over lekser. Beskriv de tre viktigste skjermbildene.',
        solution: 'Eksempel: Skjerm 1 - Hjem: Oversikt over dagens og morgendagens lekser i en liste, med fag, oppgave og frist. Avkrysningsboks for ferdig. Stor pluss-knapp for å legge til ny lekse. Skjerm 2 - Legg til lekse: Skjema med felt for fag (dropdown), oppgavebeskrivelse, frist (datovelger) og prioritet. Lagre-knapp. Skjerm 3 - Kalender: Ukesvisning som viser lekser fordelt på dager, fargekodede etter fag. Trykk på en dag for å se detaljer. Navigasjon: Bunnmeny med Hjem, Kalender og Innstillinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'im-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-7-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er Figma?',
        options: [
          'Et programmeringsspråk',
          'Et nettbasert design- og prototypingsverktøy',
          'En type database',
          'Et operativsystem',
        ],
        correctAnswer: 1,
        solution: 'Figma er et gratis, nettbasert design- og prototypingsverktøy som er industristandard for UX/UI-design. Det lar flere samarbeide i sanntid og brukes til å lage wireframes, mockups og interaktive prototyper.',
      },
    },
    {
      id: 'im-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-7-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv den iterative designprosessen med egne ord. Hvorfor er det bedre å gjøre tre raske iterasjoner enn å bruke all tiden på én perfekt versjon?',
        solution: 'Den iterative designprosessen innebærer å gjenta syklusen med design, prototyping og testing flere ganger. Tre raske iterasjoner er bedre fordi: 1) Du lærer noe nytt i hver runde som forbedrer neste versjon. 2) Første forsøk er sjelden riktig - brukertesting avslører alltid uventede problemer. 3) Det er billigere å fikse feil i en enkel prototype enn i et ferdig produkt. 4) Du kan teste ulike tilnærminger og sammenligne resultater. 5) Rask iterasjon gir mer innsikt per tidsenhet enn å polere én løsning.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Wireframe', definition: 'Strukturell plan for en side som viser plassering uten visuelt design.' },
    { term: 'Prototype', definition: 'Interaktiv modell som simulerer brukeropplevelsen.' },
    { term: 'Lo-fi', definition: 'Lav detaljgrad - enkle, raske representasjoner for tidlig utforsking.' },
    { term: 'Hi-fi', definition: 'Høy detaljgrad - polerte representasjoner nær det ferdige produktet.' },
    { term: 'Figma', definition: 'Nettbasert designverktøy for wireframing, mockups og prototyping.' },
    { term: 'Iterasjon', definition: 'Gjentakelse av designsyklus for gradvis forbedring.' },
  ],
};

// ============================================================================
// Kapittel 7.4: Brukertesting og evaluering
// ============================================================================

export const CHAPTER_IM_VG1_7_4: TextbookChapter = {
  id: 'im-vg1-7-4',
  courseId: 'im-vg1',
  chapterNumber: '7.4',
  title: 'Brukertesting og evaluering',
  description: 'Gjennomfør brukertester for å evaluere løsninger, samle tilbakemeldinger og forbedre design basert på reell brukerdata.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive sammenhenger mellom løsninger, kundens behov og brukernes forutsetninger og erfaringer',
    'bruke dokumentasjon og dokumentere faglige prosesser',
  ],
  content: [
    {
      id: 'im-7-4-intro',
      type: 'text',
      content: `## Brukertesting og evaluering

Brukertesting er det kraftigste verktøyet en UX-designer har. Det avslører problemer du aldri ville oppdaget selv, fordi du som designer er for nær produktet til å se det med friske øyne. Fem brukertester avdekker typisk 85% av brukervennlighetsproblemene.

I dette kapittelet skal du lære:
- Planlegging og gjennomføring av brukertester
- Think-aloud-metoden
- A/B-testing og heuristisk evaluering
- Analyse og rapportering av resultater`,
    },
    {
      id: 'im-7-4-text-1',
      type: 'text',
      content: `### Brukertesting i praksis

**Planlegging:**
1. Definer mål: Hva vil du lære?
2. Lag oppgaver: "Finn kontaktinformasjonen til skolen" (ikke "Klikk på Kontakt-knappen")
3. Rekrutter 5-8 testpersoner fra målgruppen
4. Forbered testmiljø: Stille rom, prototype klar, opptaksutstyr

**Gjennomføring:**
1. Forklar formålet: "Vi tester prototypen, ikke deg"
2. Gi oppgavene én om gangen
3. Observer uten å hjelpe (motstå fristelsen!)
4. Stiløll observasjon: Ta notater om hva brukeren gjør og sier
5. Oppsummeringsspørsmål etter alle oppgaver

**Viktige regler:**
- Det finnes ingen feil svar - alt brukeren gjør er nyttig informasjon
- Ikke forklar designet under testen
- Hvis brukeren sitter fast, noter problemet og gå videre
- Test tidlig og ofte, ikke bare på slutten`,
    },
    {
      id: 'im-7-4-text-2',
      type: 'text',
      content: `### Think-aloud-metoden

**Think-aloud** (tenke høyt) er den mest brukte metoden for brukertesting. Brukeren sier høyt hva de tenker, føler og gjør mens de bruker prototypen.

**Eksempel:**
"Okei, jeg leter etter timeplanen... Jeg ser en meny oppe... Hmm, ingenting som heter 'Timeplan'... Kanskje under 'Min side'? Ja, der er det! Men det tok litt tid å finne."

**Fordeler**: Gir innsikt i brukerens tankeproses, avdekker forvirring og feil antakelser.

### A/B-testing

A/B-testing sammenligner to versjoner av noe for å se hvilken som fungerer best:
- Versjon A: Grønn "Kjøp"-knapp
- Versjon B: Rød "Kjøp"-knapp
- Mål: Hvilken gir flest klikk?

Brukes mest for mindre endringer på nettsider med mange brukere. Krever nok trafikk for statistisk signifikante resultater.

### Heuristisk evaluering

En ekspertvurdering basert på anerkjente brukervennlighetsprinsipper (heuristikker). Nielsens 10 heuristikker inkluderer:
- Synlighet av systemstatus
- Samsvar mellom system og virkeligheten
- Brukerkontroll og frihet
- Konsistens og standarder
- Feilforebygging`,
    },
    {
      id: 'im-7-4-text-3',
      type: 'text',
      content: `### Analyse og rapportering

**Analysering av funn:**
1. Samle alle notater og observasjoner
2. Identifiser mønstre - problemer som flere brukere opplever
3. Kategoriser etter alvorlighet:
   - **Kritisk**: Brukeren kan ikke fullføre oppgaven
   - **Alvorlig**: Brukeren sliter mye, men finner en vei rundt
   - **Mindre**: Irriterende, men påvirker ikke funksjonalitet
4. Prioriter fikser: Kritiske først, deretter alvorlige

**Rapportering:**
- Oppsummer de viktigste funnene
- Beskriv hvert problem med observasjon og anbefalt løsning
- Bruk skjermbilder eller video for å illustrere
- Presenter funnene til teamet og interessenter`,
    },
    {
      id: 'im-7-4-example-1',
      type: 'example',
      title: 'Rapport fra en brukertest',
      content: `**Testrapport - Skolenettside, prototype v2**

**Deltakere**: 5 elever, VG1-VG3
**Oppgave**: "Finn timeplanen for neste uke"

**Funn:**
- 4 av 5 gikk først til "Min side" (der timeplanen ikke var)
- 3 av 5 prøvde søkefeltet og skrev "timeplan"
- Bare 1 av 5 fant timeplanen på første forsøk (via menyvalget "Skoledag")

**Alvorlighet**: Alvorlig - brukerne finner ikke kjerneinnholdet.

**Anbefaling**:
1. Gi menyvalget et tydeligere navn, f.eks. "Timeplan" i stedet for "Skoledag"
2. Legg til et direktelenke til timeplanen på forsiden
3. Sørg for at søk returnerer timeplan som resultat

**Bruker-sitat**: "Jeg hadde aldri gjettet at timeplanen lå under 'Skoledag'."`,
    },
    {
      id: 'im-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-7-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvor mange brukertester trengs typisk for å avdekke 85% av brukervennlighetsproblemene?',
        options: [
          '1-2 tester',
          '5 tester',
          '20 tester',
          '100 tester',
        ],
        correctAnswer: 1,
        solution: 'Forskning av Jakob Nielsen viser at 5 brukertester typisk avdekker ca. 85% av brukervennlighetsproblemene. Etter 5 tester gir hver ny test stadig mindre ny innsikt.',
      },
    },
    {
      id: 'im-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-7-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar think-aloud-metoden og gi et eksempel på hva en bruker kan si under en slik test.',
        solution: `Think-aloud-metoden innebærer at testpersonen sier høyt hva de tenker, føler og gjør mens de bruker prototypen. Eksempel: "Jeg vil finne karakterene mine... Jeg ser menyen oppe til venstre... Her er det mange valg... Hmm, 'Min profil' kanskje? Nei, det var bare kontaktinfo... La meg prøve 'Fagresultater'... Ja, der er karakterene! Men det var forvirrende at det heter 'Fagresultater' og ikke bare 'Karakterer'."`,
      },
    },
    {
      id: 'im-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-7-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva bør du gjøre hvis en bruker sitter fast under en brukertest?',
        options: [
          'Forklare hvordan det fungerer',
          'Notere problemet og gå videre til neste oppgave',
          'Avslutte testen',
          'Endre prototypen med en gang',
        ],
        correctAnswer: 1,
        solution: 'Å hjelpe brukeren ødelegger testresultatene. Noter at brukeren satt fast (dette er verdifull innsikt!), spør om de vil gå videre til neste oppgave. Formålet med testen er å finne problemer - at brukeren sliter er nøyaktig det du trenger å vite.',
      },
    },
    {
      id: 'im-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-7-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Planlegg en brukertest for en nettside eller app du velger selv. Beskriv mål, tre oppgaver, hvem du ville testet med, og hva du ser etter.',
        solution: 'Eksempel - Brukertest for skolens læringsplattform. Mål: Finne ut om elever effektivt kan finne og levere oppgaver. Oppgaver: 1) "Finn oppgaven i norsk som skal leveres denne uken." 2) "Last opp en fil som besvarelse." 3) "Sjekk tilbakemeldingen du fikk på forrige oppgave." Testpersoner: 5 elever fra ulike klassetrinn. Ser etter: Klarer de å finne oppgaven raskt? Er opplastingsprosessen intuitiv? Finner de tilbakemeldingen? Hvor mange klikk bruker de? Uttrykker de frustrasjon?',
      },
    },
    {
      id: 'im-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-7-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er A/B-testing?',
        options: [
          'Testing av to helt forskjellige produkter',
          'Sammenligning av to versjoner av noe for å se hvilken som fungerer best',
          'Testing med to brukere',
          'Å teste på to forskjellige dager',
        ],
        correctAnswer: 1,
        solution: 'A/B-testing sammenligner to versjoner (A og B) av f.eks. en nettside eller knapp for å se hvilken som gir bedre resultater. Halvparten av brukerne ser versjon A, halvparten ser B, og man måler hvilken som presterer best.',
      },
    },
    {
      id: 'im-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-7-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv hvordan du ville kategorisert og prioritert funn fra en brukertest. Gi eksempler på kritiske, alvorlige og mindre problemer.',
        solution: 'Kategorisering: Kritisk - brukeren kan ikke fullføre oppgaven. Eksempel: "Lever oppgave"-knappen virker ikke, eller brukeren finner ikke innloggingssiden. Alvorlig - brukeren sliter mye, men finner en vei. Eksempel: Det tar 7 klikk å finne timeplanen fordi navigasjonen er ulogisk, men brukeren kommer frem til slutt. Mindre - irriterende, men påvirker ikke funksjon. Eksempel: En dato vises i feil format, eller en feilmelding er vanskelig å forstå. Prioritering: Fikse kritiske problemer umiddelbart (blokkerer brukeren), deretter alvorlige (stor innvirkning på brukeropplevelsen), til slutt mindre (polering).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Brukertesting', definition: 'Testing av et produkt med ekte brukere for å avdekke problemer.' },
    { term: 'Think-aloud', definition: 'Metode der brukeren sier høyt hva de tenker under testing.' },
    { term: 'A/B-testing', definition: 'Sammenligning av to versjoner for å se hvilken som fungerer best.' },
    { term: 'Heuristisk evaluering', definition: 'Ekspertvurdering basert på anerkjente brukervennlighetsprinsipper.' },
    { term: 'Alvorlighetsgrad', definition: 'Kategorisering av problemer som kritisk, alvorlig eller mindre.' },
    { term: 'Testoppgave', definition: 'Konkret oppgave brukeren skal utføre under en brukertest.' },
  ],
};

// ============================================================================
// Kapittel 7.5: Informasjonsarkitektur og navigasjon
// ============================================================================

export const CHAPTER_IM_VG1_7_5: TextbookChapter = {
  id: 'im-vg1-7-5',
  courseId: 'im-vg1',
  chapterNumber: '7.5',
  title: 'Informasjonsarkitektur og navigasjon',
  description: 'Forstå hvordan innhold organiseres og struktureres i digitale løsninger for å gi brukerne en intuitiv opplevelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'visualisere og utvikle konsepter og ideer tilpasset ulike plattformer',
    'utforske og beskrive sammenhenger mellom løsninger, kundens behov og brukernes forutsetninger og erfaringer',
  ],
  content: [
    {
      id: 'im-7-5-intro',
      type: 'text',
      content: `## Informasjonsarkitektur og navigasjon

Informasjonsarkitektur (IA) er kunsten å organisere og strukturere innhold slik at brukere finner det de leter etter. Dårlig IA gjør at brukere går seg vill og gir opp. God IA er usynlig - brukeren finner det de trenger uten å tenke over det.

I dette kapittelet skal du lære:
- Hva informasjonsarkitektur er
- Ulike navigasjonsstrukturer
- Kortsortering som metode for å organisere innhold
- Sitemap og innholdsstruktur`,
    },
    {
      id: 'im-7-5-text-1',
      type: 'text',
      content: `### Informasjonsarkitektur

**Informasjonsarkitektur** handler om å organisere innhold i logiske grupper og definere forholdet mellom dem.

**Organisasjonsmønstre:**
- **Hierarkisk**: Innhold organisert i kategorier og underkategorier (nettbutikk: Klær > Herre > Jakker)
- **Sekvensiell**: Innhold presentert i en bestemt rekkefølge (opplæring: Steg 1, 2, 3)
- **Matrise**: Innhold organisert langs flere akser (filtrering: størrelse OG farge OG pris)
- **Database**: Innhold organisert med metadata og søk (YouTube: tags, kategorier, dato)

**Grunnprinsipper:**
- Grupper relatert innhold sammen
- Bruk kjente begreper (unngå intern sjargong)
- Sørg for at viktig innhold er lett tilgjengelig (få klikk)
- Vær konsistent i strukturen gjennom hele produktet`,
    },
    {
      id: 'im-7-5-text-2',
      type: 'text',
      content: `### Navigasjonsstrukturer

**Global navigasjon**: Hovedmenyen som er tilgjengelig på alle sider. Viser de viktigste kategoriene.

**Lokal navigasjon**: Undermeny som viser undersider innenfor en kategori.

**Breadcrumbs (brødsmuler)**: Viser brukeren hvor de er i hierarkiet: Hjem > Klær > Herre > Jakker.

**Søk**: For nettsider med mye innhold er søk en viktig navigasjonsmetode. God søk med forslag og filtrering hjelper brukere som vet hva de leter etter.

**Hamburger-meny**: Skjult meny bak et ikon (tre streker). Vanlig på mobil, men skjuler innhold som brukeren kanskje ikke finner.

**Bunnnavigasjon (tab bar)**: Fast meny nederst på mobilskjermen med 3-5 hovedvalg. Lett tilgjengelig med tommelen.

**Megameny**: Stor dropdown-meny som viser mange kategorier og underkategorier samtidig. Brukes på store nettsider som nettbutikker.`,
    },
    {
      id: 'im-7-5-text-3',
      type: 'text',
      content: `### Kortsortering

**Kortsortering** (card sorting) er en metode for å forstå hvordan brukere grupperer og navngir innhold.

**Åpen kortsortering**: Deltakerne grupperer innholdskort i kategorier de selv velger og navngir. Avdekker brukerens mentale modell.

**Lukket kortsortering**: Deltakerne plasserer innholdskort i forhåndsdefinerte kategorier. Tester om eksisterende kategorier gir mening.

**Gjennomføring:**
1. Skriv hvert innholdselement på et kort
2. Be deltakerne sortere kortene i grupper som gir mening
3. Be dem navngi gruppene
4. Gjenta med 5-10 deltakere
5. Analyser mønstre: Hvilke kort grupperes ofte sammen?

### Sitemap

En **sitemap** er et diagram som viser nettsiden eller appens hierarkiske struktur. Den fungerer som et kart over alt innhold og hvordan sidene henger sammen. Bruk sitemap i planleggingsfasen for å sikre at strukturen er logisk og komplett.`,
    },
    {
      id: 'im-7-5-example-1',
      type: 'example',
      title: 'Navigasjonsstruktur for skolens nettside',
      content: `Sitemap for en skolenettside:

**Nivå 1 (Global navigasjon):**
- Hjem
- Om skolen
- Utdanningsprogram
- For elever
- For foresatte
- Kontakt

**Nivå 2 (Under "For elever"):**
- Timeplan
- Karakterer
- Innleveringer
- Skolerute
- Elevråd
- Rådgivning

**Navigasjonsvalg:**
- Desktop: Horisontal toppmeny med dropdown for underkategorier
- Mobil: Hamburger-meny med alle nivåer
- Breadcrumbs: Hjem > For elever > Timeplan
- Søk: Synlig i topplinje med autofullføring

Denne strukturen er logisk fordi den grupperer innhold etter hvem det er for (elever, foresatte) i stedet for etter avdeling (noe brukerne ikke kjenner).`,
    },
    {
      id: 'im-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-7-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er breadcrumbs (brødsmuler) i navigasjon?',
        options: [
          'En type søkemotor',
          'En sti som viser brukeren hvor de er i hierarkiet',
          'En liste over alle sider',
          'En type animasjon',
        ],
        correctAnswer: 1,
        solution: 'Breadcrumbs (brødsmuler) er en navigasjonskomponent som viser brukeren hvor de befinner seg i hierarkiet, for eksempel: Hjem > Klær > Herre > Jakker. Det gjør det enkelt å navigere tilbake til overordnede kategorier.',
      },
    },
    {
      id: 'im-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-7-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva kortsortering er, og beskriv forskjellen mellom åpen og lukket kortsortering.',
        solution: 'Kortsortering er en UX-metode der deltakere grupperer innholdselementer (skrevet på kort) i kategorier. Åpen kortsortering: Deltakerne lager egne grupper og navngir dem selv. Avdekker brukerens naturlige mentale modell for hvordan innhold hører sammen. Lukket kortsortering: Deltakerne plasserer kort i forhåndsdefinerte kategorier. Tester om eksisterende kategori-inndeling gir mening for brukerne. Åpen sorterer man når man bygger ny struktur, lukket når man tester eksisterende.',
      },
    },
    {
      id: 'im-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-7-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er en sitemap?',
        options: [
          'Et kart over servernes plassering',
          'Et diagram som viser nettsiden eller appens hierarkiske struktur',
          'En liste over GPS-koordinater',
          'En type søkeoptimalisering',
        ],
        correctAnswer: 1,
        solution: 'En sitemap er et visuelt diagram som viser den hierarkiske strukturen til en nettside eller app - hvilke sider som finnes, og hvordan de henger sammen. Den brukes i planleggingsfasen for å sikre logisk og komplett struktur.',
      },
    },
    {
      id: 'im-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-7-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en sitemap med to nivåer for en fiktiv nettbutikk som selger sportsutstyr. Beskriv minst fire hovedkategorier med underkategorier.',
        solution: 'Sitemap for "Sportshjørnet": Nivå 1: Hjem, Klær, Sko, Utstyr, Tilbud, Om oss, Kontakt. Nivå 2 under Klær: Treningstopper, Bukser/Tights, Jakker, Undertøy. Nivå 2 under Sko: Løpesko, Treningssko, Fotballsko, Tursko. Nivå 2 under Utstyr: Treningsutstyr, Ballsport, Friluft, Vannsport. Nivå 2 under Tilbud: Sesongsalg, Outlet, Ukens tilbud. Navigasjon: Toppmeny med megameny for kategorier, filtrering innenfor kategorier (merkevare, størrelse, pris), søk med autofullføring.',
      },
    },
    {
      id: 'im-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-7-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er den viktigste fordelen med bunnnavigasjon (tab bar) på mobil?',
        options: [
          'Den ser pen ut',
          'Den er lett tilgjengelig med tommelen og viser hovedvalgene permanent',
          'Den tar ikke plass på skjermen',
          'Den fungerer bare på iPhone',
        ],
        correctAnswer: 1,
        solution: 'Bunnnavigasjon er lett tilgjengelig med tommelen (som er der hånden naturlig er på en mobiltelefon) og viser hovedvalgene permanent uten å skjule dem. Det gjør navigasjonen synlig og lett å bruke.',
      },
    },
    {
      id: 'im-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-7-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Gjennomfør en enkel åpen kortsortering med en medelev. Skriv 15 innholdselementer fra en nettside du kjenner, la medeleven sortere dem i grupper, og rapporter resultatene.',
        solution: 'Eksempel med skolenettside: Kort: Timeplan, Karakterer, Fravær, Lærere, Kontaktinfo, Skolerute, Elevråd, Kantina, Innleveringer, Bøker, Rådgivning, Parkeringsinfo, Vaktmester, Skoleregler, Faddere. Resultater fra medelev: Gruppe 1 "Mitt skolearbeid": Timeplan, Karakterer, Innleveringer, Bøker, Fravær. Gruppe 2 "Skoleinfo": Skolerute, Skoleregler, Kantina. Gruppe 3 "Hjelp og kontakt": Rådgivning, Kontaktinfo, Lærere, Vaktmester. Gruppe 4 "Sosialt": Elevråd, Faddere. Innsikt: Eleven grupperte primært etter behov, ikke organisatorisk.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Informasjonsarkitektur', definition: 'Organisering og strukturering av innhold slik at brukere finner det de leter etter.' },
    { term: 'Sitemap', definition: 'Diagram som viser nettsiden eller appens hierarkiske struktur.' },
    { term: 'Kortsortering', definition: 'Metode der brukere grupperer innholdselementer for å avdekke deres mentale modell.' },
    { term: 'Breadcrumbs', definition: 'Navigasjonselement som viser brukerens posisjon i hierarkiet.' },
    { term: 'Hamburger-meny', definition: 'Skjult meny bak et trestreks-ikon, vanlig på mobilnettsider.' },
    { term: 'Global navigasjon', definition: 'Hovedmenyen som er tilgjengelig på alle sider i en nettside.' },
  ],
};

// ============================================================================
// Kapittel 7.6: Designsystemer og stilguider
// ============================================================================

export const CHAPTER_IM_VG1_7_6: TextbookChapter = {
  id: 'im-vg1-7-6',
  courseId: 'im-vg1',
  chapterNumber: '7.6',
  title: 'Designsystemer og stilguider',
  description: 'Lær å lage og bruke designsystemer med gjenbrukbare komponenter, stilguider og konsistente designmønstre.',
  estimatedMinutes: 50,
  competenceGoals: [
    'visualisere og utvikle konsepter og ideer tilpasset ulike plattformer',
    'bruke dokumentasjon og dokumentere faglige prosesser',
  ],
  content: [
    {
      id: 'im-7-6-intro',
      type: 'text',
      content: `## Designsystemer og stilguider

Når et team jobber med et digitalt produkt over tid, trenger de et felles språk og felles regler for design. Et designsystem sikrer at alle deler av produktet ser ut og oppfører seg likt, uansett hvem som designer eller utvikler dem. Det gjør arbeidet raskere, mer konsistent og enklere å vedlikeholde.

I dette kapittelet skal du lære:
- Hva et designsystem er og hvorfor det er nyttig
- Komponentbiblioteker og gjenbrukbare elementer
- Stilguider og merkevareretningslinjer
- Dokumentasjon av designvalg`,
    },
    {
      id: 'im-7-6-text-1',
      type: 'text',
      content: `### Hva er et designsystem?

Et **designsystem** er en samling av gjenbrukbare komponenter, retningslinjer og standarder som styrer hvordan et digitalt produkt ser ut og fungerer.

**Bestanddeler:**
- **Designtokens**: Grunnleggende verdier som farger, typografi, avstand og avrundinger
- **Komponentbibliotek**: Ferdige, gjenbrukbare UI-elementer (knapper, skjemafelter, kort, menyer)
- **Mønstre**: Løsninger for vanlige designutfordringer (navigasjon, skjemavalidering, feilmeldinger)
- **Retningslinjer**: Regler for tone, tilgjengelighet, responsivitet og bruk

**Fordeler:**
- **Konsistens**: Produktet ser likt ut overalt
- **Effektivitet**: Designere og utviklere slipper å lage alt fra bunnen
- **Kvalitet**: Komponenter er testet og optimalisert én gang
- **Skalerbarhet**: Endringer gjøres ett sted og oppdateres overalt
- **Samarbeid**: Alle snakker samme språk`,
    },
    {
      id: 'im-7-6-text-2',
      type: 'text',
      content: `### Komponentbibliotek

Et komponentbibliotek inneholder ferdige UI-elementer som kan gjenbrukes:

**Grunnleggende komponenter:**
- Knapper (primær, sekundær, deaktivert)
- Inndatafelt (tekst, passord, søk, dropdown)
- Avkrysningsbokser og radioknapper
- Kort (cards) for innholdsvisning
- Modaler (popup-vinduer)
- Navigasjonselementer

**Hver komponent dokumenteres med:**
- Visuelt utseende i alle tilstander (normal, hover, aktiv, deaktivert)
- Retningslinjer for bruk (når og hvorfor)
- Kodeeksempler for utviklere
- Tilgjengelighetskrav

### Stilguide og merkevare

En **stilguide** dokumenterer det visuelle språket:
- **Fargepalett**: Primærfarge, sekundærfarger, bakgrunnsfarger, tekstfarger med heksadesimale koder
- **Typografi**: Skriftfamilier, størrelser, vekter for hvert bruksområde
- **Avstand**: System for marger og padding (f.eks. 4px, 8px, 16px, 24px, 32px)
- **Ikoner**: Stil og størrelse for ikonsettet
- **Bilder**: Retningslinjer for bildebruk, stil og proporsjoner
- **Tone of voice**: Hvordan tekst skrives (formelt/uformelt, kort/detaljert)`,
    },
    {
      id: 'im-7-6-text-3',
      type: 'text',
      content: `### Designtokens

**Designtokens** er de minste byggesteinene i et designsystem - navngitte verdier som brukes gjennom hele produktet.

**Eksempler:**
- color-primary: #2563EB
- color-text: #1F2937
- font-family-heading: "Inter"
- font-size-body: 16px
- spacing-small: 8px
- border-radius-medium: 8px

Ved å bruke tokens i stedet for faste verdier kan du endre hele produktets utseende ved å oppdatere én verdi.

### Dokumentasjon

God dokumentasjon gjør designsystemet nyttig:
- **Designprinsipper**: Hvorfor vi tar de valgene vi gjør
- **Bruksmønstre**: Når og hvordan hver komponent brukes
- **Do / Don't**: Eksempler på riktig og feil bruk
- **Tilgjengelighet**: Krav til kontrast, tastaturnav og skjermlesere
- **Endringslogg**: Hva som er oppdatert og når`,
    },
    {
      id: 'im-7-6-example-1',
      type: 'example',
      title: 'Enkel stilguide for et skoleprosjekt',
      content: `**Stilguide for "Skoleportalen"**

**Farger:**
- Primær: #1E40AF (mørk blå) - brukes til knapper og lenker
- Sekundær: #059669 (grønn) - brukes til bekreftelser og suksess
- Bakgrunn: #F9FAFB (lys grå) - hovedbakgrunn
- Tekst: #111827 (nesten svart) - brødtekst
- Feil: #DC2626 (rød) - feilmeldinger

**Typografi:**
- Overskrifter: Inter Bold, 24px (H1), 20px (H2), 18px (H3)
- Brødtekst: Inter Regular, 16px, linjeavstand 1.5
- Knappetekst: Inter Medium, 14px

**Knapper:**
- Primær: Blå bakgrunn, hvit tekst, 8px avrunding
- Sekundær: Hvit bakgrunn, blå ramme og tekst
- Deaktivert: Grå bakgrunn, lys grå tekst

**Avstand:**
- XS: 4px, S: 8px, M: 16px, L: 24px, XL: 32px`,
    },
    {
      id: 'im-7-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-7-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedfordelen med et designsystem?',
        options: [
          'Det gjør designet penere',
          'Det sikrer konsistens, effektivitet og kvalitet ved å gjenbruke komponenter',
          'Det ersettar behovet for brukertesting',
          'Det gjør produktet billigere å hoste',
        ],
        correctAnswer: 1,
        solution: 'Et designsystem sikrer konsistens (produktet ser likt ut overalt), effektivitet (slipper å lage alt fra bunnen av), og kvalitet (komponenter er testet og optimalisert). Det gjør også samarbeid lettere fordi alle følger samme regler.',
      },
    },
    {
      id: 'im-7-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-7-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva designtokens er, og gi tre eksempler.',
        solution: 'Designtokens er navngitte verdier som representerer de minste byggesteinene i et designsystem. De brukes konsistent gjennom hele produktet. Eksempler: 1) color-primary: #2563EB - primærfargen brukt til knapper og lenker. 2) font-size-body: 16px - standard tekststrekkstørrelse for brødtekst. 3) spacing-medium: 16px - standard avstand mellom elementer. Fordelen er at du kan endre hele produktets utseende ved å oppdatere token-verdien ett sted.',
      },
    },
    {
      id: 'im-7-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-7-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva bør dokumenteres for hver komponent i et komponentbibliotek?',
        options: [
          'Bare den visuelle designen',
          'Visuelt utseende i alle tilstander, bruksretningslinjer, kode og tilgjengelighetskrav',
          'Bare koden',
          'Bare navnet på komponenten',
        ],
        correctAnswer: 1,
        solution: 'For at et komponentbibliotek skal være nyttig, må hver komponent dokumenteres med: visuelt utseende i alle tilstander (normal, hover, aktiv, deaktivert), retningslinjer for bruk, kodeeksempler for utviklere, og tilgjengelighetskrav.',
      },
    },
    {
      id: 'im-7-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-7-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en enkel stilguide for et fiktivt prosjekt. Definer fargepalett (3-4 farger), typografi (overskrift og brødtekst), og beskriv minst to komponenter (f.eks. knapp og kort).',
        solution: 'Stilguide for "GrønnStart" (miljøapp): Farger: Primær #16A34A (grønn), Sekundær #0EA5E9 (blå), Bakgrunn #F0FDF4 (lys grønn), Tekst #1C1917 (mørk). Typografi: Overskrift - Poppins Bold 22px, Brødtekst - Open Sans Regular 16px, linjeavstand 1.6. Knapp-komponent: Primær - grønn bakgrunn, hvit tekst, 12px padding, 6px avrunding. Hover: mørkere grønn. Deaktivert: grå bakgrunn. Kort-komponent: Hvit bakgrunn, 1px grå ramme, 12px padding, 8px avrunding, valgfritt bilde øverst med overskrift og kort tekst under.',
      },
    },
    {
      id: 'im-7-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-7-6-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er en stilguide?',
        options: [
          'En type kodeeditor',
          'Dokumentasjon av det visuelle språket med farger, typografi og regler',
          'En guide for å skrive essay',
          'Et alternativt navn for et designprogram',
        ],
        correctAnswer: 1,
        solution: 'En stilguide dokumenterer det visuelle språket for et produkt eller en merkevare, inkludert fargepalett, typografi, avstand, ikonstil, bildebruk og tone of voice. Den sikrer konsistens i all visuell kommunikasjon.',
      },
    },
    {
      id: 'im-7-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-7-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor konsistens er viktig i design. Gi et eksempel på hva som skjer når konsistens mangler.',
        solution: 'Konsistens er viktig fordi det gjør produktet forutsigbart og lett å lære. Når brukere ser at en blå knapp betyr "bekreft" på én side, forventer de at alle blå knapper betyr det samme. Eksempel på manglende konsistens: En nettside der "Lagre"-knappen er grønn på én side, blå på en annen, og rød på en tredje. Brukeren blir forvirret: Betyr rød "lagre" eller "slett"? De nøler og stoler ikke på grensesnittet. Konsistens bygger tillit, reduserer kognitivt arbeid og gjør produktet profesjonelt.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Designsystem', definition: 'Samling av gjenbrukbare komponenter, retningslinjer og standarder for et produkt.' },
    { term: 'Designtokens', definition: 'Navngitte verdier (farger, størrelser) som brukes konsistent gjennom et produkt.' },
    { term: 'Komponentbibliotek', definition: 'Samling av ferdige, gjenbrukbare UI-elementer med dokumentasjon.' },
    { term: 'Stilguide', definition: 'Dokumentasjon av det visuelle språket med farger, typografi og regler.' },
    { term: 'Konsistens', definition: 'At like elementer ser ut og oppfører seg likt gjennom hele produktet.' },
    { term: 'UI-komponent', definition: 'Gjenbrukbart brukergrensesnittelement som knapp, kort eller meny.' },
  ],
};

// ============================================================================
// Eksport av del 7 kapitler
// ============================================================================

export const IM_VG1_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IM_VG1_7_1,
  CHAPTER_IM_VG1_7_2,
  CHAPTER_IM_VG1_7_3,
  CHAPTER_IM_VG1_7_4,
  CHAPTER_IM_VG1_7_5,
  CHAPTER_IM_VG1_7_6,
];
