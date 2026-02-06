/**
 * Salg, service og reiseliv VG1 - Del 2: Service og kundebehandling
 * Kapittel 2.1-2.7
 *
 * Dekker LK20 kompetansemål:
 * - beskrive administrative funksjoner og rutiner i en virksomhet og drøfte hvordan disse påvirker kvaliteten og servicenivået
 * - planlegge og gjennomføre et arrangement og gjøre rede for betydningen av vertskapsrollen
 * - utforske hvordan ulik kultur og bakgrunn påvirker kommunikasjon og kundebehandling
 * - håndtere klager og beskrive tiltak som forebygger konflikter
 * - gjøre rede for hvilken rolle servicemedarbeideren har i konflikt- og nødssituasjoner
 * - reflektere over ulike former for relasjonsbygging og forklare betydningen av nettverk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Hva er god service?
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_2_1: TextbookChapter = {
  id: 'salg-service-vg1-2-1',
  courseId: 'salg-service-vg1',
  chapterNumber: '2.1',
  title: 'Hva er god service?',
  description: 'En introduksjon til servicebegrepet og hva som kjennetegner god kundebehandling. Du utforsker forskjellen mellom forventet og opplevd service, og hvordan servicekultur påvirker kundeopplevelsen.',
  estimatedMinutes: 35,
  competenceGoals: ['beskrive administrative funksjoner og rutiner i en virksomhet og drøfte hvordan disse påvirker kvaliteten og servicenivået'],
  content: [
    {
      id: 'salg-service-vg1-2-1-intro',
      type: 'text',
      content: `## Service - mer enn bare høflighet

Vi har alle opplevd både god og dårlig service. Den gode servicen får oss til å komme tilbake, den dårlige får oss til å advare andre. Men hva er egentlig god service, og hvordan skaper man det?

I dette kapittelet skal du lære:
- Hva service og kundebehandling innebærer
- Forskjellen mellom forventet og opplevd service
- Hvordan servicekultur formes i en bedrift
- Hva som gjør at kunder føler seg godt behandlet`,
    },
    {
      id: 'salg-service-vg1-2-1-def-1',
      type: 'definition',
      title: 'Service',
      content: `**Service** er all hjelp og støtte en bedrift gir kundene før, under og etter et kjøp. God service handler om å møte eller overgå kundens forventninger gjennom vennlighet, kompetanse, tilgjengelighet og problemløsning.`,
    },
    {
      id: 'salg-service-vg1-2-1-text-1',
      type: 'text',
      content: `### Forventet vs. opplevd service

Kundens tilfredshet handler om gapet mellom forventning og opplevelse:

**Servicegap = Forventet service - Opplevd service**

| Resultat | Kundeopplevelse |
|----------|-----------------|
| Opplevd > Forventet | Begeistring, lojalitet |
| Opplevd = Forventet | Tilfredshet |
| Opplevd < Forventet | Skuffelse, klager |

**Hva påvirker forventningene?**
- Tidligere erfaringer
- Anbefalinger fra andre
- Markedsføring og løfter
- Pris (høy pris = høye forventninger)
- Bedriftens omdømme`,
    },
    {
      id: 'salg-service-vg1-2-1-text-2',
      type: 'text',
      content: `### De fem servicedimensjonene

Forskere har identifisert fem dimensjoner som kunder bruker for å vurdere service:

**1. Pålitelighet**
- Holder bedriften det den lover?
- Er varen tilgjengelig som lovet?
- Kommer leveringen til avtalt tid?

**2. Tillit/troverdighet**
- Stoler kunden på de ansatte?
- Virker de kompetente?
- Er informasjonen de gir korrekt?

**3. Konkrete elementer**
- Hvordan ser lokalet ut?
- Er det rent og ryddig?
- Ser de ansatte profesjonelle ut?

**4. Empati**
- Bryr de ansatte seg om kunden?
- Blir kunden sett og hørt?
- Tilpasses servicen til kundens behov?

**5. Responstid**
- Får kunden hjelp raskt?
- Blir henvendelser besvart?
- Er åpningstider praktiske?`,
    },
    {
      id: 'salg-service-vg1-2-1-def-2',
      type: 'definition',
      title: 'Servicekultur',
      content: `**Servicekultur** er de felles verdier, holdninger og normer i en bedrift som former hvordan de ansatte behandler kundene. En sterk servicekultur gjør at god service skjer naturlig, ikke bare når ledelsen ser på.`,
    },
    {
      id: 'salg-service-vg1-2-1-text-3',
      type: 'text',
      content: `### Bygge en servicekultur

En god servicekultur kjennetegnes av:

**Ledelsens rolle:**
- Ledere som selv gir god service
- Tydelige forventninger
- Ros og anerkjennelse av god service
- Ansatte som føler seg verdsatt

**Opplæring:**
- Alle vet hva god service betyr her
- Trening i vanskelige situasjoner
- Deling av beste praksis
- Nye ansatte læres opp grundig

**Systemer som støtter:**
- Rutiner som gjør det lett å hjelpe
- Ansatte har myndighet til å løse problemer
- Verktøy for å følge opp kunder
- Tid til å gi god service`,
    },
    {
      id: 'salg-service-vg1-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Å overgå forventninger',
      problem: 'En kafé vil skape serviceopplevelser som får kundene til å komme tilbake.',
      solution: `**Forventet service:**
- Få kaffen man bestilte
- Vennlig betjening
- Rent bord

**Opplevd service som overgår:**
- Barista som husker stamkundenes bestilling
- Gratis påfyll av kaffe
- Ansatte som anbefaler noe nytt basert på hva kunden liker
- En liten kjeks ved siden av koppen
- WiFi-passord skrevet pent på et kort

Disse små tingene koster lite, men skaper stor forskjell i kundeopplevelsen.`,
    },
    {
      id: 'salg-service-vg1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        task: 'Når blir en kunde begeistret over servicen?',
        options: [
          { id: 'a', text: 'Når opplevd service er lavere enn forventet', isCorrect: false },
          { id: 'b', text: 'Når opplevd service er høyere enn forventet', isCorrect: true },
          { id: 'c', text: 'Når forventet service er lav', isCorrect: false },
          { id: 'd', text: 'Når servicen er gratis', isCorrect: false },
        ],
        solution: 'Kunder blir begeistret når opplevelsen overgår forventningene. Det handler om gapet mellom hva de forventet og hva de faktisk fikk.',
      },
    },
    {
      id: 'salg-service-vg1-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-1-ex-2',
        number: '2.1.2',
        type: 'classic',
        task: 'Hva er servicekultur, og hvorfor er den viktig?',
        hints: ['Tenk på hvordan den påvirker de ansattes atferd'],
        solution: 'Servicekultur er de felles verdier og holdninger i en bedrift som former hvordan ansatte behandler kunder. Den er viktig fordi den gjør at god service skjer naturlig og konsistent, ikke bare tilfeldig eller når ledelsen ser på. Med en sterk servicekultur oppfører alle seg "riktig" fordi de tror på det, ikke bare fordi de må.',
      },
    },
    {
      id: 'salg-service-vg1-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-1-ex-3',
        number: '2.1.3',
        type: 'classic',
        task: 'Velg en bedrift du kjenner (butikk, kafé, restaurant, etc.) og vurder den på de fem servicedimensjonene.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi bedriften en score fra 1-5 på hver dimensjon med en kort begrunnelse.',
            solution: 'Eksempel: En klesbutikk - Pålitelighet: 4 (varene er der), Tillit: 3 (varierer mellom ansatte), Konkrete elementer: 5 (fin butikk), Empati: 4 (hjelpsomme), Responstid: 3 (noen ganger kø).',
          },
        ],
        solution: 'Denne øvelsen hjelper deg å analysere service systematisk. De fem dimensjonene dekker ulike aspekter av kundeopplevelsen.',
      },
    },
    {
      id: 'salg-service-vg1-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        task: 'Gi tre eksempler på små ting en butikk kan gjøre for å overgå kundens forventninger.',
        solution: '1) Pakke varen pent inn eller legge ved en liten prøve/gave. 2) Huske kundens navn eller preferanser. 3) Følge kunden til varen i stedet for bare å peke. 4) Tilby gratis justering/tilpasning. 5) Ringe/sende SMS når bestilt vare kommer inn.',
      },
    },
    {
      id: 'salg-service-vg1-2-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **God service** handler om å møte eller overgå kundens forventninger
- **Servicegapet** er forskjellen mellom forventet og opplevd service
- **De fem dimensjonene** (pålitelighet, tillit, konkrete elementer, empati, responstid) brukes for å vurdere service
- **Servicekultur** er felles verdier som former ansattes behandling av kunder

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Servicegap | Forskjellen mellom forventning og opplevelse |
| Servicekultur | Felles verdier som former kundebehandling |
| Empati | Evnen til å forstå og bry seg om kunden |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Vertskapsrollen
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_2_2: TextbookChapter = {
  id: 'salg-service-vg1-2-2',
  courseId: 'salg-service-vg1',
  chapterNumber: '2.2',
  title: 'Vertskapsrollen',
  description: 'Du lærer hva det innebærer å være en god vertskap i servicenæringen. Kapittelet dekker førsteinntrykk, gjestfrihet og hvordan man skaper en velkommende atmosfære for kunder og gjester.',
  estimatedMinutes: 40,
  competenceGoals: ['planlegge og gjennomføre et arrangement og gjøre rede for betydningen av vertskapsrollen'],
  content: [
    {
      id: 'salg-service-vg1-2-2-intro',
      type: 'text',
      content: `## Velkommen! Om å være vertskap

Tenk på forskjellen mellom å besøke en venn som inviterer deg inn med et smil, og å stå i en lang kø der ingen ser på deg. Vertskapsrollen handler om å få kunder og gjester til å føle seg velkomne og ivaretatt - akkurat som en god vertskap hjemme.

I dette kapittelet skal du lære:
- Hva vertskapsrollen innebærer
- Viktigheten av førsteinntrykk
- Hvordan skape en velkommende atmosfære
- Gjestfrihet i praksis`,
    },
    {
      id: 'salg-service-vg1-2-2-def-1',
      type: 'definition',
      title: 'Vertskapsrollen',
      content: `**Vertskapsrollen** innebærer å ta imot og ivareta kunder og gjester på en måte som får dem til å føle seg velkomne, trygge og verdsatt. Det handler om å være oppmerksom, imøtekommende og proaktiv i å møte gjestenes behov.`,
    },
    {
      id: 'salg-service-vg1-2-2-text-1',
      type: 'text',
      content: `### Førsteinntrykket

Det tar bare noen sekunder å danne et førsteinntrykk, og det kan være vanskelig å endre. Derfor er de første øyeblikkene kritiske.

**De første 7 sekundene:**
- Kunden scanner omgivelsene
- Registrerer om noen legger merke til dem
- Vurderer om de føler seg velkomne
- Bestemmer seg for en innledende "følelse"

**Hva påvirker førsteinntrykket?**

**Visuelt:**
- Er lokalet rent og innbydende?
- Ser de ansatte profesjonelle ut?
- Er det orden og system?
- Er det plass til å bevege seg?

**Personlig kontakt:**
- Blir kunden sett og anerkjent?
- Smiler de ansatte?
- Hilser noen velkommen?
- Viser kroppsspråket åpenhet?`,
    },
    {
      id: 'salg-service-vg1-2-2-text-2',
      type: 'text',
      content: `### Elementer i god vertskap

**1. Oppmerksomhet**
- Se kunden når de kommer
- Nikk eller smil for å anerkjenne
- Avbryt arbeidsoppgaver for å hjelpe
- Vær til stede mentalt, ikke bare fysisk

**2. Proaktivitet**
- Gå mot kunden, ikke vent på at de skal komme
- Tilby hjelp før de må spørre
- Forutse behov (glass vann, barnesete, etc.)
- Hold øye med signaler på at noen trenger noe

**3. Varme**
- Snakk med vennlig stemme
- Bruk kundens navn hvis du vet det
- Vis genuin interesse
- Små gestuser (holde døren, bære handleposer)

**4. Kompetanse**
- Kjenn stedet og tilbudet
- Svar trygt på spørsmål
- Vit hvor ting er og hvem som kan hjelpe
- Innrøm hvis du ikke vet, men finn ut`,
    },
    {
      id: 'salg-service-vg1-2-2-tip-1',
      type: 'tip',
      title: 'Øyekontakt og smil',
      content: `Et genuint smil og øyekontakt er de kraftigste verktøyene en vertskap har. De signaliserer "jeg ser deg" og "du er velkommen". Øv på å smile med øynene (et ekte smil når øynene og munnen samtidig), ikke bare munnen.`,
    },
    {
      id: 'salg-service-vg1-2-2-text-3',
      type: 'text',
      content: `### Skape atmosfære

Vertskapet former hele opplevelsen, ikke bare møtet med ansatte:

**Fysisk miljø:**
- Temperatur (ikke for varmt/kaldt)
- Belysning (passer til formålet)
- Lyd (musikk, støynivå)
- Dufter (rent, eventuelt behagelig duft)
- Møbler og innredning

**Detaljer som teller:**
- Friske blomster eller planter
- Dagsferske aviser/magasiner
- Oppdaterte skjermer/informasjon
- Sesongbaserte pyntelementer

**Immateriell atmosfære:**
- Hvordan ansatte snakker med hverandre
- Stemningen i lokalet
- Stressnivå som "smitter"
- Følelsen av ro eller kaos`,
    },
    {
      id: 'salg-service-vg1-2-2-example-1',
      type: 'example',
      title: 'Eksempel: God vertskap på restaurant',
      problem: 'Et par ankommer en restaurant for å feire en spesiell anledning.',
      solution: `**Ved ankomst:**
- Døren holdes åpen med et smil
- "God kveld! Velkommen til oss. Har dere reservert bord?"
- "Flott, dere feirer noe spesielt ser jeg. Gratulerer! La meg vise dere til et fint bord."

**Ved bordet:**
- "Her er et bord med god utsikt. Passer dette?"
- Trekker ut stol for gjestene
- "Jeg henter menyer og et glass musserende på huset til dere - dette er jo en spesiell kveld!"

**Underveis:**
- Sjekker bordet uten å forstyrre for mye
- Fyller på vann før glasset er tomt
- "Smaker maten? Er det noe jeg kan hjelpe med?"

**Ved avslutning:**
- "Så hyggelig at dere feiret her hos oss. Håper dere har hatt en fin kveld!"
- Tilbyr å hjelpe med drosje eller jakker`,
    },
    {
      id: 'salg-service-vg1-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        task: 'Hvor lang tid tar det å danne et førsteinntrykk?',
        options: [
          { id: 'a', text: 'Ca. 1 minutt', isCorrect: false },
          { id: 'b', text: 'Ca. 7 sekunder', isCorrect: true },
          { id: 'c', text: 'Ca. 30 sekunder', isCorrect: false },
          { id: 'd', text: 'Ca. 5 minutter', isCorrect: false },
        ],
        solution: 'Førsteinntrykket dannes på bare noen sekunder - ofte rundt 7 sekunder. Derfor er de første øyeblikkene så viktige.',
      },
    },
    {
      id: 'salg-service-vg1-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-2-ex-2',
        number: '2.2.2',
        type: 'classic',
        task: 'Hva menes med å være proaktiv i vertskapsrollen?',
        hints: ['Tenk på hva motsatsen ville være'],
        solution: 'Å være proaktiv betyr å ta initiativ til å hjelpe før kunden må spørre. I stedet for å vente til noen henvender seg, går man mot gjesten, tilbyr hjelp, fyller på vann før glasset er tomt, og forutser behov. Motsatsen er reaktiv service - bare å reagere når kunden aktivt ber om noe.',
      },
    },
    {
      id: 'salg-service-vg1-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-2-ex-3',
        number: '2.2.3',
        type: 'classic',
        task: 'Du jobber i resepsjonen på et hotell. Beskriv hvordan du ville tatt imot en gjest som ankommer.',
        solution: 'Når gjesten kommer inn: Smil, øyekontakt, reis deg om du sitter. "God ettermiddag og velkommen til [hotellnavn]! Har du reservasjon, eller kan jeg hjelpe deg med noe?" Under innsjekkingen: Vær effektiv men vennlig, forklar hotellets fasiliteter. Ved overlevering av nøkkel: "Rommet ditt er i 3. etasje med utsikt mot parken. Heisen er der borte. Frokost serveres fra 07:00 til 10:00. Er det noe annet jeg kan hjelpe med? Velkommen, og ha et fint opphold!"',
      },
    },
    {
      id: 'salg-service-vg1-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-2-ex-4',
        number: '2.2.4',
        type: 'classic',
        task: 'Hva er tre ting du kan gjøre for å skape en god atmosfære i et lokale?',
        subTasks: [
          {
            label: 'a',
            task: 'Fysiske elementer',
            solution: 'Riktig temperatur, behagelig belysning, passe lydnivå, rent og ryddig, friske blomster, god lukt.',
          },
          {
            label: 'b',
            task: 'Personlig atferd',
            solution: 'Ansatte som smiler, rolig stemme, positiv tone mellom kolleger, fokusert oppmerksomhet på gjester.',
          },
        ],
        solution: 'Atmosfæren påvirkes av både fysiske elementer og menneskelig atferd. Alt henger sammen.',
      },
    },
    {
      id: 'salg-service-vg1-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-2-ex-5',
        number: '2.2.5',
        type: 'classic',
        task: 'Hvorfor er det viktig at ansatte smiler og har øyekontakt?',
        solution: 'Smil og øyekontakt sender signaler om at kunden er sett, velkommen og verdsatt. Det skaper en følelse av tillit og varme. Manglende øyekontakt kan tolkes som uinteresse, uhøflighet eller at man har noe å skjule. Et genuint smil er smittsomt og setter tonen for hele interaksjonen.',
      },
    },
    {
      id: 'salg-service-vg1-2-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Vertskapsrollen** handler om å få gjester til å føle seg velkomne og ivaretatt
- **Førsteinntrykket** dannes på sekunder og er vanskelig å endre
- **God vertskap** krever oppmerksomhet, proaktivitet, varme og kompetanse
- **Atmosfæren** påvirkes av både fysiske elementer og menneskelig atferd

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Vertskapsrollen | Å ta imot og ivareta gjester |
| Førsteinntrykk | Den umiddelbare vurderingen |
| Proaktivitet | Ta initiativ før kunden spør |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Kundebehandling i praksis
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_2_3: TextbookChapter = {
  id: 'salg-service-vg1-2-3',
  courseId: 'salg-service-vg1',
  chapterNumber: '2.3',
  title: 'Kundebehandling i praksis',
  description: 'Praktiske øvelser i kundebehandling der du trener på å møte ulike kundetyper. Du lærer om kundetyper, tilpasning av kommunikasjon og hvordan man gir en personlig og profesjonell service.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske hvordan ulik kultur og bakgrunn påvirker kommunikasjon og kundebehandling, og ta hensyn til dette i møte med kunder og gjester'],
  content: [
    {
      id: 'salg-service-vg1-2-3-intro',
      type: 'text',
      content: `## Hver kunde er unik

Alle kunder er forskjellige. Noen vil ha mye hjelp, andre vil se seg om i fred. Noen har god tid, andre har det travelt. En dyktig servicemedarbeider tilpasser seg hver enkelt kunde.

I dette kapittelet skal du lære:
- Ulike kundetyper og hvordan møte dem
- Tilpasning av kommunikasjon
- Kulturelle forskjeller i kundebehandling
- Praktiske teknikker for god kundeservice`,
    },
    {
      id: 'salg-service-vg1-2-3-text-1',
      type: 'text',
      content: `### Vanlige kundetyper

**Den avgjørende kunden**
- Vet hva de vil ha
- Vil ha effektiv service
- Setter pris på direkte svar
- **Tilnærming:** Vær effektiv, ikke mas. Gi konkret informasjon raskt.

**Den usikre kunden**
- Trenger hjelp til å velge
- Stiller mange spørsmål
- Vil gjerne ha råd
- **Tilnærming:** Vær tålmodig, still spørsmål, gi anbefalinger.

**Den kunnskapsrike kunden**
- Har satt seg inn i produktet
- Kan mye og viser det gjerne
- Vil gjerne diskutere detaljer
- **Tilnærming:** Anerkjenn kunnskapen, del faglig informasjon.

**Den sosiale kunden**
- Liker å prate
- Setter pris på personlig kontakt
- Prioriterer relasjonen
- **Tilnærming:** Ta deg tid, lytt, vær personlig - men hold fokus på formålet.`,
    },
    {
      id: 'salg-service-vg1-2-3-text-2',
      type: 'text',
      content: `### Flere kundetyper

**Den travle kunden**
- Har dårlig tid
- Vil ha rask service
- Kan virke utålmodig
- **Tilnærming:** Vær effektiv, tilby løsninger raskt, respekter tiden.

**Den mistroiske kunden**
- Skeptisk til rådene dine
- Tror de blir lurt
- Sjekker informasjon
- **Tilnærming:** Vær ærlig og transparent, gi dokumentasjon, ikke press.

**Den klagende kunden**
- Kommer med problem eller klage
- Kan være frustrert
- Forventer løsning
- **Tilnærming:** Lytt, vis forståelse, fokuser på løsning.

**Den stille kunden**
- Sier lite
- Vanskelig å lese
- Trenger kanskje bare å se seg om
- **Tilnærming:** Vær tilgjengelig, spør åpent, gi rom.`,
    },
    {
      id: 'salg-service-vg1-2-3-tip-1',
      type: 'tip',
      title: 'Les signalene',
      content: `Kundens kroppsspråk forteller mye: Leter de aktivt eller bare kikker? Ser de på klokken? Går de mot utgangen eller videre inn i butikken? Bærer de på mange poser (slitne)? Har de med barn (begrenset tid)? Tilpass servicen etter hva du observerer.`,
    },
    {
      id: 'salg-service-vg1-2-3-text-3',
      type: 'text',
      content: `### Kulturelle forskjeller

Ulik bakgrunn kan påvirke forventninger til service:

**Kommunikasjonsstil:**
- Noen kulturer er mer direkte, andre mer indirekte
- Høflighetsfraser varierer
- Kroppsspråk har ulik betydning

**Personlig rom:**
- Fysisk avstand varierer mellom kulturer
- Berøring (håndtrykk, klem) er ulikt
- Øyekontakt kan tolkes forskjellig

**Tid:**
- Noen kulturer ser tid som eksakt
- Andre er mer fleksible med avtaler
- Tålmodighet og venting varierer

**Tips:**
- Ikke anta - observer og tilpass
- Spør hvis du er usikker
- Vær respektfull og åpen
- Unngå stereotyper`,
    },
    {
      id: 'salg-service-vg1-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Tilpasse seg kundetypen',
      problem: 'To kunder kommer inn i en skobutikk samtidig. Én blar raskt gjennom hyllen, den andre studerer hver sko nøye.',
      solution: `**Kunde 1 (avgjørende/travel):**
"Hei! Leter du etter noe spesielt?"
Kunden: "Ja, svarte joggesko, str 42."
"Der borte! Vi har Nike og Adidas i den størrelsen. Skal jeg hente begge så du kan prøve?"

**Kunde 2 (usikker/grundig):**
"Hei! Ta deg god tid til å se deg om. Gi beskjed hvis du vil prøve noe eller har spørsmål."
(Noen minutter senere)
"Jeg ser du kikker på de hvite skoene. Skal jeg fortelle litt om forskjellene mellom modellene?"

Begge får tilpasset service - den ene effektiv, den andre grundig.`,
    },
    {
      id: 'salg-service-vg1-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-3-ex-1',
        number: '2.3.1',
        type: 'multiple-choice',
        task: 'Hvordan bør du møte en travel kunde?',
        options: [
          { id: 'a', text: 'Fortelle om alle produktene i detalj', isCorrect: false },
          { id: 'b', text: 'Være effektiv og gi rask, relevant hjelp', isCorrect: true },
          { id: 'c', text: 'Ignorere dem til de har bedre tid', isCorrect: false },
          { id: 'd', text: 'Slå av en prat for å bygge relasjon', isCorrect: false },
        ],
        solution: 'Travle kunder setter pris på effektivitet. Gi dem det de trenger raskt og respekter tiden deres.',
      },
    },
    {
      id: 'salg-service-vg1-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-3-ex-2',
        number: '2.3.2',
        type: 'classic',
        task: 'Beskriv hvordan du ville behandlet disse kundene forskjellig:',
        subTasks: [
          {
            label: 'a',
            task: 'En kunde som vet akkurat hva de vil ha',
            solution: 'Vær effektiv: "Flott, da finner vi den raskt for deg." Led dem rett til produktet, gjør kjøpet smidig.',
          },
          {
            label: 'b',
            task: 'En kunde som ikke vet hva de vil ha',
            solution: 'Vær rådgivende: Still spørsmål om behov og preferanser, presenter noen alternativer, forklar forskjeller.',
          },
          {
            label: 'c',
            task: 'En kunde som vil prate mer enn å handle',
            solution: 'Vær vennlig men fokusert: Lytt, anerkjenn det de sier, og led samtalen mot det praktiske: "Det høres interessant ut! Hva kan jeg hjelpe deg med i dag?"',
          },
        ],
        solution: 'Alle kunder fortjener god service, men god service ser forskjellig ut for forskjellige kundetyper.',
      },
    },
    {
      id: 'salg-service-vg1-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-3-ex-3',
        number: '2.3.3',
        type: 'classic',
        task: 'Hvorfor er det viktig å være bevisst på kulturelle forskjeller i kundebehandling?',
        hints: ['Tenk på hvordan misforståelser kan oppstå'],
        solution: 'Kulturelle forskjeller kan påvirke hva kunden forventer og hvordan de tolker din atferd. Det som er høflig i én kultur kan oppfattes som uhøflig i en annen. Ved å være bevisst på dette kan du unngå misforståelser og gi bedre service til alle kunder, uansett bakgrunn.',
      },
    },
    {
      id: 'salg-service-vg1-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-3-ex-4',
        number: '2.3.4',
        type: 'classic',
        task: 'En kunde virker å ha en annen kulturell bakgrunn og du er usikker på hvordan du best kan hjelpe. Hva gjør du?',
        solution: 'Vær åpen og respektfull. Ikke anta basert på utseende - observer signaler som alle andre kunder. Vær tålmodig hvis det er språkbarrierer. Spør høflig om du kan hjelpe. Unngå stereotyper. Snakk tydelig men ikke for høyt. Bruk kroppsspråk og demonstrasjoner hvis ord er vanskelig. Behandle dem med samme respekt som alle andre.',
      },
    },
    {
      id: 'salg-service-vg1-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-3-ex-5',
        number: '2.3.5',
        type: 'classic',
        task: 'Hvilke signaler kan du se etter for å identifisere kundetypen?',
        solution: 'Kroppsspråk: Beveger de seg raskt eller sakte? Leter de aktivt eller kikker? Ser de på klokken? Blikkontakt: Søker de hjelp eller unngår de blikk? Kommunikasjon: Stiller de spørsmål eller er de stille? Korte svar eller utfyllende? Andre tegn: Har de med seg barn (begrenset tid)? Bærer de mange poser (slitne)? Holder de en vare lenge (vurderer kjøp)?',
      },
    },
    {
      id: 'salg-service-vg1-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-3-ex-6',
        number: '2.3.6',
        type: 'classic',
        task: 'Rollespill: Du jobber i en elektronikkbutikk. Skriv en dialog med en mistroisk kunde som tror du prøver å selge dem noe de ikke trenger.',
        solution: 'Kunde: "Dere prøver bare å selge meg det dyreste." Selger: "Jeg forstår at det kan virke sånn. La meg vise deg hva jeg mener: Du sa du trenger en TV til stuen som er 5 meter bred. En liten skjerm vil gi dårlig bilde på den avstanden. Men du trenger ikke den største heller - denne modellen her er faktisk optimal for ditt behov og koster 3000 kr mindre enn toppmodellen." Kunde: "Hm, ok. Hva er forskjellen?" Selger: "Hovedforskjellen er at toppmodellen har 120Hz for gaming. Bruker du den til gaming?" Kunde: "Nei, bare streaming." Selger: "Da trenger du ikke 120Hz. Denne er perfekt for deg."',
      },
    },
    {
      id: 'salg-service-vg1-2-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kundetyper** krever ulik tilnærming (avgjørende, usikker, travel, etc.)
- **Les signaler** fra kroppsspråk og atferd for å tilpasse service
- **Kulturelle forskjeller** påvirker forventninger og kommunikasjon
- **Tilpasning** til den enkelte kunde gir bedre service

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kundetype | Kategorisering basert på atferd og behov |
| Tilpasning | Justere servicen til den enkelte |
| Kulturell bevissthet | Forståelse for ulike bakgrunner |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Klagebehandling og konflikthåndtering
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_2_4: TextbookChapter = {
  id: 'salg-service-vg1-2-4',
  courseId: 'salg-service-vg1',
  chapterNumber: '2.4',
  title: 'Klagebehandling og konflikthåndtering',
  description: 'Hvordan man håndterer klager og konflikter med kunder på en konstruktiv måte. Du lærer teknikker for å snu negative opplevelser til positive, og tiltak som forebygger konflikter.',
  estimatedMinutes: 45,
  competenceGoals: ['håndtere klager og beskrive tiltak som forebygger konflikter'],
  content: [
    {
      id: 'salg-service-vg1-2-4-intro',
      type: 'text',
      content: `## Fra klage til mulighet

En klage er ikke en katastrofe - det er en mulighet. Kunder som klager bryr seg nok til å si fra i stedet for bare å forsvinne. Hvordan du håndterer klagen kan avgjøre om kunden blir en lojal tilhenger eller en bitter kritiker.

I dette kapittelet skal du lære:
- Hvorfor klager er verdifulle
- Teknikker for god klagebehandling
- Hvordan håndtere vanskelige situasjoner
- Forebygging av konflikter`,
    },
    {
      id: 'salg-service-vg1-2-4-def-1',
      type: 'definition',
      title: 'Klagebehandling',
      content: `**Klagebehandling** er prosessen med å ta imot, håndtere og løse kundens misnøye. God klagebehandling handler om å lytte, vise forståelse, ta ansvar og finne en løsning som gjør kunden fornøyd igjen.`,
    },
    {
      id: 'salg-service-vg1-2-4-text-1',
      type: 'text',
      content: `### Hvorfor klager er verdifulle

**De fleste klager ikke:**
- Bare 4% av misfornøyde kunder klager
- Resten forsvinner stille
- En klage representerer mange med samme problem

**Klager gir muligheter:**
- Rette opp feil
- Beholde kunden
- Lære og forbedre seg
- Vise god service

**En godt håndtert klage:**
- Kan gjøre kunden mer lojal enn før klagen
- Viser bedriftens verdier i praksis
- Gir verdifull tilbakemelding`,
    },
    {
      id: 'salg-service-vg1-2-4-text-2',
      type: 'text',
      content: `### LAST-modellen for klagebehandling

**L - Lytt**
- La kunden fortelle ferdig
- Ikke avbryt eller forsvar deg
- Ta notater om nødvendig
- Vis at du hører med kroppsspråk

**A - Anerkjenn**
- "Jeg forstår at dette er frustrerende"
- Vis empati for situasjonen
- Takk for tilbakemeldingen
- Ikke bagatelliser problemet

**S - Spør og kartlegg**
- "Kan du fortelle mer om hva som skjedde?"
- Få alle fakta på bordet
- Sikre at du forstår problemet
- Spør hva kunden ønsker

**T - Ta ansvar og løs**
- Beklag på vegne av bedriften
- Foreslå konkret løsning
- Gjennomfør løsningen raskt
- Følg opp at kunden er fornøyd`,
    },
    {
      id: 'salg-service-vg1-2-4-text-3',
      type: 'text',
      content: `### Håndtere vanskelige situasjoner

**Sinte kunder:**
- Behold roen selv
- Senk stemmen (de tilpasser seg ofte)
- Flytt samtalen til et roligere sted om mulig
- Fokuser på løsning, ikke skyld

**Urimelige krav:**
- Lytt til kravet først
- Forklar hva du kan gjøre
- Tilby alternativer
- Involver leder om nødvendig

**Trusler eller aggresjon:**
- Aldri eskalér
- Sett grenser rolig ("Jeg vil gjerne hjelpe, men ikke når...")
- Tilkall kollega/leder
- Sett sikkerheten først

**Ingen god løsning finnes:**
- Vær ærlig
- Vis at du prøvde
- Beklager genuint
- Tilby det du kan (rabattkode, etc.)`,
    },
    {
      id: 'salg-service-vg1-2-4-tip-1',
      type: 'tip',
      title: 'Ikke ta det personlig',
      content: `Når en kunde er sint, er de vanligvis sint på situasjonen, ikke på deg personlig. Selv om det føles personlig, prøv å skille mellom kundens frustrasjon og deg som person. Dette gjør det lettere å forbli profesjonell og løsningsorientert.`,
    },
    {
      id: 'salg-service-vg1-2-4-text-4',
      type: 'text',
      content: `### Forebygging av konflikter

**Tydelig kommunikasjon:**
- Klar informasjon om priser og vilkår
- Realistiske forventninger om leveringstid
- Proaktiv informasjon ved problemer
- Ingen skjulte kostnader

**God service fra start:**
- Lytt til kundens behov
- Gi riktig produkt/løsning
- Følg opp som lovet
- Vær tilgjengelig

**Rutiner og systemer:**
- Alle vet hvordan håndtere klager
- Ansatte har myndighet til å løse problemer
- Oppfølging sikrer at ting blir gjort
- Læring fra tidligere klager`,
    },
    {
      id: 'salg-service-vg1-2-4-example-1',
      type: 'example',
      title: 'Eksempel: LAST-modellen i praksis',
      problem: 'En kunde kommer tilbake med en jakke som har revnet i sømmen etter 2 uker.',
      solution: `**L - Lytt:**
"Hei! Jakken har revnet her i sømmen allerede, og jeg har bare hatt den i to uker!"
(La kunden fortelle ferdig, nikk, vis interesse)

**A - Anerkjenn:**
"Å nei, det er virkelig dumt. Jeg forstår at du er skuffet - du forventet jo at en ny jakke skulle holde."

**S - Spør:**
"La meg se... Ja, det ser ut som en svakhet i sømmen. Har du kvitteringen?"

**T - Ta ansvar og løs:**
"Dette skal vi ordne opp i. Du kan enten få en ny jakke av samme type, eller pengene tilbake hvis du heller vil det. Hva passer best for deg?"

Kunden velger ny jakke.

"Flott. Her er en ny en - jeg har sjekket sømmene. Beklager så mye bryet. Gi gjerne beskjed hvis det blir noe mer, så fikser vi det."`,
    },
    {
      id: 'salg-service-vg1-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        task: 'Hva står "L" for i LAST-modellen?',
        options: [
          { id: 'a', text: 'Løs', isCorrect: false },
          { id: 'b', text: 'Lytt', isCorrect: true },
          { id: 'c', text: 'Lær', isCorrect: false },
          { id: 'd', text: 'Led', isCorrect: false },
        ],
        solution: 'L står for Lytt. Det er første steg - la kunden fortelle sin historie uten å avbryte.',
      },
    },
    {
      id: 'salg-service-vg1-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-4-ex-2',
        number: '2.4.2',
        type: 'classic',
        task: 'Hvorfor er klager verdifulle for en bedrift?',
        hints: ['Tenk på hva de fleste misfornøyde kunder gjør', 'Hva kan bedriften lære?'],
        solution: 'Klager er verdifulle fordi: 1) De fleste misfornøyde kunder ikke klager, de bare forsvinner - så én klage representerer mange. 2) De gir mulighet til å beholde kunden. 3) De avdekker problemer som kan fikses. 4) En godt håndtert klage kan gjøre kunden mer lojal enn før.',
      },
    },
    {
      id: 'salg-service-vg1-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-4-ex-3',
        number: '2.4.3',
        type: 'classic',
        task: 'En kunde er sint fordi bestillingen deres ikke har kommet til avtalt tid. Skriv hva du ville sagt i hvert steg av LAST-modellen.',
        subTasks: [
          {
            label: 'a',
            task: 'Lytt',
            solution: '(La kunden fortelle ferdig, nikk, vis interesse, ikke avbryt selv om de gjentar seg)',
          },
          {
            label: 'b',
            task: 'Anerkjenn',
            solution: '"Jeg forstår at dette er veldig frustrerende. Du har ventet og planlagt ut fra det vi lovet."',
          },
          {
            label: 'c',
            task: 'Spør',
            solution: '"La meg sjekke status på bestillingen din. Hva er ordrenummeret? Og hva var den opprinnelige leveringsdatoen?"',
          },
          {
            label: 'd',
            task: 'Ta ansvar og løs',
            solution: '"Jeg ser at pakken er forsinket i transporten. Jeg beklager så mye. La meg se hva jeg kan gjøre - jeg kan tilby gratis ekspressfrakt på neste bestilling, eller 10% rabatt på denne ordren som kompensasjon. Hva passer best for deg?"',
          },
        ],
        solution: 'LAST-modellen sikrer at du tar klagen seriøst og arbeider systematisk mot en løsning.',
      },
    },
    {
      id: 'salg-service-vg1-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        task: 'Hvordan kan en butikk forebygge klager? Gi tre eksempler.',
        solution: '1) Tydelig prisinformasjon og ingen skjulte kostnader. 2) Realistisk informasjon om leveringstid ("2-4 dager" i stedet for "kanskje i morgen"). 3) Proaktiv varsling hvis noe blir forsinket (ring før kunden må spørre). 4) God opplæring slik at ansatte gir riktig informasjon. 5) Kvalitetskontroll på produkter før de selges.',
      },
    },
    {
      id: 'salg-service-vg1-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-4-ex-5',
        number: '2.4.5',
        type: 'classic',
        task: 'En kunde hever stemmen og blir sint. Hva gjør du?',
        solution: '1) Behold roen selv - pust rolig, snakk sakte. 2) Senk din egen stemme (det smitter ofte). 3) Anerkjenn frustrasjonen: "Jeg forstår at du er opprørt." 4) Flytt samtalen til et roligere sted om mulig. 5) Fokuser på løsning: "La oss se hva vi kan gjøre for å ordne dette." 6) Tilkall kollega/leder hvis situasjonen eskalerer. 7) Husk at det ikke er personlig - kunden er sint på situasjonen.',
      },
    },
    {
      id: 'salg-service-vg1-2-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Klager er verdifulle** fordi de gir mulighet til å forbedre og beholde kunder
- **LAST-modellen:** Lytt, Anerkjenn, Spør, Ta ansvar
- **Vanskelige situasjoner** krever ro, empati og fokus på løsning
- **Forebygging** gjennom god kommunikasjon og rutiner

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| LAST-modellen | Lytt, Anerkjenn, Spør, Ta ansvar |
| Klagebehandling | Prosessen med å løse kundens misnøye |
| Forebygging | Tiltak som hindrer konflikter fra å oppstå |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Servicemedarbeiderens rolle i nødssituasjoner
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_2_5: TextbookChapter = {
  id: 'salg-service-vg1-2-5',
  courseId: 'salg-service-vg1',
  chapterNumber: '2.5',
  title: 'Servicemedarbeiderens rolle i nødssituasjoner',
  description: 'Du lærer om rollen en servicemedarbeider har når det oppstår konflikter eller nødssituasjoner på arbeidsplassen. Kapittelet dekker handlingskompetanse, varsling og samarbeid med nødetater.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for hvilken rolle servicemedarbeideren har i konflikt- og nødssituasjoner'],
  content: [
    {
      id: 'salg-service-vg1-2-5-intro',
      type: 'text',
      content: `## Når ting blir alvorlig

Som servicemedarbeider møter du vanligvis hyggelige kunder og rutinepregede dager. Men noen ganger oppstår det nødssituasjoner - brann, ulykker, trusler eller medisinske nødsituasjoner. Da er det viktig å vite hva du skal gjøre.

I dette kapittelet skal du lære:
- Din rolle i nødssituasjoner
- Hvordan varsle og handle
- Samarbeid med nødetater
- Ivaretakelse av deg selv og andre`,
    },
    {
      id: 'salg-service-vg1-2-5-def-1',
      type: 'definition',
      title: 'Nødssituasjon',
      content: `En **nødssituasjon** er en situasjon som krever umiddelbar handling for å beskytte liv, helse eller eiendom. Eksempler er brann, alvorlige ulykker, medisinske nødsituasjoner, trusler eller vold.`,
    },
    {
      id: 'salg-service-vg1-2-5-text-1',
      type: 'text',
      content: `### Din rolle som servicemedarbeider

**Før noe skjer:**
- Kjenn beredskapsplanen
- Vit hvor nødutganger og brannslokker er
- Kjenn møteplass ved evakuering
- Delta på brannøvelser

**Under hendelsen:**
- Behold roen
- Varsle riktig instans
- Ivareta kunder og kolleger
- Følg beredskapsplanen

**Etter hendelsen:**
- Snakk med leder
- Dokumenter hendelsen
- Søk støtte hvis du trenger det
- Bidra til evaluering`,
    },
    {
      id: 'salg-service-vg1-2-5-text-2',
      type: 'text',
      content: `### Nødnumre og varsling

| Nummer | Tjeneste | Når ringe |
|--------|----------|-----------|
| 110 | Brann | Brann, røykutvikling |
| 112 | Politi | Trusler, vold, kriminalitet |
| 113 | Ambulanse | Medisinske nødsituasjoner |
| 116 117 | Legevakt | Akutte, men ikke livstruende |

**Ved oppringning:**
1. Si hvem du er og hvor du ringer fra
2. Hva har skjedd?
3. Er noen skadet? Hvor mange?
4. Adressen - vær presis
5. Hold linjen til de sier du kan legge på`,
    },
    {
      id: 'salg-service-vg1-2-5-text-3',
      type: 'text',
      content: `### Vanlige situasjoner

**Brann:**
1. Aktiver brannalarmen
2. Varsle: rope "brann!", ring 110
3. Slokk hvis mulig og trygt
4. Evakuer rolig mot samlingsplass
5. Tell opp - er alle ute?

**Medisinsk nødstilfelle:**
1. Ring 113 umiddelbart ved livstruende
2. Følg instrukser fra AMK
3. Start hjerte-lunge-redning (HLR) om nødvendig
4. Hent hjertestarter om tilgjengelig
5. Hold vedkommende varm og rolig

**Trusler eller vold:**
1. Ikke provosér
2. Varsle kolleger diskret
3. Ring 112 når mulig
4. Hold avstand
5. Prioriter sikkerhet over eiendeler

**Ran:**
1. Ikke gjør motstand
2. Prøv å observere gjerningspersonen
3. Ring 112 så snart det er trygt
4. Sikre vitner og beviser
5. Ikke rør noe på åstedet`,
    },
    {
      id: 'salg-service-vg1-2-5-warning-1',
      type: 'warning',
      title: 'Sikkerhet først',
      content: `Din sikkerhet kommer først. Ikke sett deg selv i fare for å redde eiendeler eller stoppe en gjerningsperson. Penger og varer kan erstattes - menneskeliv kan ikke.`,
    },
    {
      id: 'salg-service-vg1-2-5-text-4',
      type: 'text',
      content: `### Ivaretakelse etterpå

Nødssituasjoner kan være traumatiske. Det er normalt å reagere:

**Vanlige reaksjoner:**
- Sjokk og nummenhet
- Angst eller uro
- Søvnproblemer
- Tankekjør

**Hva kan hjelpe:**
- Snakk med noen om det som skjedde
- Ta vare på grunnleggende behov (søvn, mat)
- Gi deg selv tid
- Søk profesjonell hjelp om reaksjonene vedvarer

**Arbeidsgivers ansvar:**
- Debriefing etter alvorlige hendelser
- Tilbud om oppfølging
- Tilrettelegging ved behov
- Ingen skal stå alene`,
    },
    {
      id: 'salg-service-vg1-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Kunde får illebefinnende',
      problem: 'En kunde i butikken klager på brystsmerter og setter seg ned.',
      solution: `1. **Vurder situasjonen:** Gå bort og spør hvordan det går. Kunden er blek og klam.

2. **Handle:** "Sett deg godt. Puster du ok? Har du vondt i brystet?"
Kunden bekrefter brystsmerter som stråler til armen.

3. **Ring 113:** "Hei, jeg er på [adresse], en kunde har brystsmerter som stråler til venstre arm. Han/hun er ved bevissthet men klam og blek."

4. **Følg instrukser:** AMK gir instruksjoner. Eventuelt gi aspirin hvis tilgjengelig og kunden ikke er allergisk.

5. **Ivareta:** Hold kunden rolig, løsne stramme klær, snakk beroligende. Send en kollega ut for å møte ambulansen.

6. **Dokumenter:** Etter at ambulansen har tatt over, noter hva som skjedde for rapport.`,
    },
    {
      id: 'salg-service-vg1-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        task: 'Hvilket nummer ringer du ved brann?',
        options: [
          { id: 'a', text: '112', isCorrect: false },
          { id: 'b', text: '113', isCorrect: false },
          { id: 'c', text: '110', isCorrect: true },
          { id: 'd', text: '116 117', isCorrect: false },
        ],
        solution: '110 er nummeret til brannvesenet. 112 er politi, 113 er ambulanse, 116 117 er legevakt.',
      },
    },
    {
      id: 'salg-service-vg1-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-5-ex-2',
        number: '2.5.2',
        type: 'classic',
        task: 'Hva bør du si når du ringer nødnummer?',
        solution: '1) Hvem du er og hvor du ringer fra. 2) Hva som har skjedd. 3) Om noen er skadet og hvor mange. 4) Nøyaktig adresse. 5) Hold linjen til de sier du kan legge på. La dem stille spørsmål og svar så godt du kan.',
      },
    },
    {
      id: 'salg-service-vg1-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-5-ex-3',
        number: '2.5.3',
        type: 'classic',
        task: 'Hva bør du gjøre hvis en aggressiv person truer deg på jobb?',
        solution: '1) Behold roen - ikke provosér eller eskalér. 2) Hold avstand og ha ryggdekning/fluktmulighet. 3) Varsle kolleger diskret hvis mulig. 4) Ikke konfronter om eiendeler - la dem ta det. 5) Ring 112 så snart det er trygt. 6) Observer gjerningspersonen for å kunne beskrive dem etterpå. 7) Prioriter din egen og andres sikkerhet.',
      },
    },
    {
      id: 'salg-service-vg1-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-5-ex-4',
        number: '2.5.4',
        type: 'classic',
        task: 'Hvorfor er det viktig å kjenne beredskapsplanen på arbeidsplassen?',
        hints: ['Tenk på hva som skjer i en stresset situasjon'],
        solution: 'I en nødssituasjon er det vanskelig å tenke klart. Hvis du kjenner beredskapsplanen på forhånd, vet du automatisk hva du skal gjøre - hvor nødutgangene er, hvor du skal samles, hvem som har ansvar for hva. Dette sparer verdifull tid og kan redde liv.',
      },
    },
    {
      id: 'salg-service-vg1-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-5-ex-5',
        number: '2.5.5',
        type: 'classic',
        task: 'Beskriv de tre første stegene du ville tatt hvis brannalarmen går på arbeidsplassen din.',
        solution: '1) Se etter tegn på brann (røyk, flammer) og vurder situasjonen raskt. 2) Begynn evakuering rolig - vis kunder og kolleger mot nærmeste nødutgang. 3) Varsle 110 hvis du ikke er sikker på at alarmen er falsk, eller hvis du ser brann. Fortsett evakuering til samlingsplass og tell opp at alle er ute.',
      },
    },
    {
      id: 'salg-service-vg1-2-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Nødnumre:** 110 (brann), 112 (politi), 113 (ambulanse)
- **Din rolle** er å varsle, ivareta og evakuere - ikke å være helt
- **Sikkerhet først** - mennesker over eiendeler
- **Etterpå** er det normalt å reagere - søk støtte

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Beredskapsplan | Plan for handling i nødssituasjoner |
| Evakuering | Organisert tømming av lokale |
| Samlingsplass | Avtalt sted å møtes etter evakuering |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.6: Planlegging og gjennomføring av arrangement
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_2_6: TextbookChapter = {
  id: 'salg-service-vg1-2-6',
  courseId: 'salg-service-vg1',
  chapterNumber: '2.6',
  title: 'Planlegging og gjennomføring av arrangement',
  description: 'Du lærer å planlegge, organisere og gjennomføre arrangementer fra idé til evaluering. Kapittelet dekker prosjektstyring, budsjett, gjennomføring og oppfølging etter arrangementet.',
  estimatedMinutes: 60,
  competenceGoals: ['planlegge og gjennomføre et arrangement og gjøre rede for betydningen av vertskapsrollen'],
  content: [
    {
      id: 'salg-service-vg1-2-6-intro',
      type: 'text',
      content: `## Fra idé til gjennomføring

Enten det er et firmaarrangement, en produktlansering, et bryllup eller en festival - god planlegging er nøkkelen til suksess. Arrangementsplanlegging krever kreativitet, struktur og evnen til å håndtere mange detaljer samtidig.

I dette kapittelet skal du lære:
- Hvordan planlegge et arrangement steg for steg
- Budsjettering og ressursstyring
- Koordinering av mennesker og oppgaver
- Gjennomføring og evaluering`,
    },
    {
      id: 'salg-service-vg1-2-6-text-1',
      type: 'text',
      content: `### De fire fasene i arrangementsplanlegging

**1. Idé og konsept**
- Hva er formålet med arrangementet?
- Hvem er målgruppen?
- Hvilken type arrangement passer?
- Hva er budsjettet?

**2. Planlegging**
- Detaljert program
- Sted og tidspunkt
- Leverandører og samarbeidspartnere
- Markedsføring og invitasjoner

**3. Gjennomføring**
- Oppsett og klargjøring
- Mottak av gjester
- Programmet gjennomføres
- Håndtering av uforutsette ting

**4. Etterarbeid**
- Nedrigging og opprydding
- Betaling av leverandører
- Evaluering og tilbakemelding
- Dokumentasjon for fremtiden`,
    },
    {
      id: 'salg-service-vg1-2-6-text-2',
      type: 'text',
      content: `### Detaljert planlegging

**Sjekkliste for planlegging:**

**Sted:**
- [ ] Kapasitet passer antall gjester
- [ ] Tilgjengelighet (transport, parkering, universell utforming)
- [ ] Teknisk utstyr (lyd, lys, projektor)
- [ ] Catering-muligheter
- [ ] Kontrakt og depositum

**Mat og drikke:**
- [ ] Type servering (sittende middag, stående, buffet)
- [ ] Allergier og spesialkost
- [ ] Alkoholservering (bevilling)
- [ ] Antall servitører

**Program:**
- [ ] Tidsplan minutt for minutt
- [ ] Ansvarlig for hver del
- [ ] Underholdning/innslag
- [ ] Tekniske behov for hvert punkt`,
    },
    {
      id: 'salg-service-vg1-2-6-def-1',
      type: 'definition',
      title: 'Budsjett',
      content: `Et **budsjett** er en økonomisk plan som viser forventede inntekter og utgifter. For et arrangement inkluderer budsjettet alle kostnader (lokale, mat, utstyr, underholdning, markedsføring) og eventuelle inntekter (billetter, sponsorer).`,
    },
    {
      id: 'salg-service-vg1-2-6-text-3',
      type: 'text',
      content: `### Budsjettering

**Vanlige utgiftsposter:**
| Post | Typisk andel |
|------|--------------|
| Lokale/venue | 20-30% |
| Mat og drikke | 30-40% |
| Underholdning | 10-15% |
| Teknikk (lyd/lys) | 5-10% |
| Dekorasjon | 5-10% |
| Markedsføring | 5-10% |
| Buffer/uforutsett | 10-15% |

**Tips for budsjettering:**
- Alltid ha en buffer for uforutsette utgifter
- Få skriftlige tilbud fra leverandører
- Sammenlign priser
- Hold oversikt underveis
- Juster om nødvendig`,
    },
    {
      id: 'salg-service-vg1-2-6-text-4',
      type: 'text',
      content: `### Koordinering og ledelse

**Teamorganisering:**
- Tydelig ansvarsfordeling
- En person med overordnet ansvar
- Alle vet hva de skal gjøre og når
- Kommunikasjonsplan (hvem kontakter hvem)

**Verktøy for koordinering:**
- Detaljert fremdriftsplan
- Sjekklister for hver oppgave
- Felles kontaktliste
- Kort på arrangementsdagen ("run sheet")

**På arrangementsdagen:**
- Alle på plass i god tid
- Briefing før gjestene kommer
- Synlig leder som kan ta beslutninger
- Plan B for vanlige problemer`,
    },
    {
      id: 'salg-service-vg1-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Planlegge firmajulebord',
      problem: 'Du skal planlegge firmajulebord for 80 ansatte.',
      solution: `**1. Konsept:**
- Formål: Takke ansatte, bygge fellesskap
- Budsjett: 800 kr per person = 64 000 kr
- Dato: Første fredag i desember

**2. Planlegging:**
- Lokale: Festsal på lokalt hotell (20 000 kr)
- Mat: 3-retters julemeny inkl. drikke (350 kr/pers = 28 000 kr)
- Underholdning: Quiz og DJ (8 000 kr)
- Dekorasjon: Julepyntet bord (4 000 kr)
- Buffer: 4 000 kr

**3. Tidsplan arrangementsdagen:**
- 16:00 - Oppsett og sjekk
- 18:00 - Velkomstdrink
- 19:00 - Middagsservering
- 21:00 - Tale fra ledelsen + quiz
- 22:00 - Dansegulv åpner
- 01:00 - Slutt

**4. Evaluering:**
- Spørreundersøkelse til ansatte
- Gjennomgang med team
- Dokumentere hva som fungerte`,
    },
    {
      id: 'salg-service-vg1-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-6-ex-1',
        number: '2.6.1',
        type: 'multiple-choice',
        task: 'Hva bør du alltid inkludere i et arrangementsbudsjett?',
        options: [
          { id: 'a', text: 'Kun mat og lokale', isCorrect: false },
          { id: 'b', text: 'En buffer for uforutsette utgifter', isCorrect: true },
          { id: 'c', text: 'Bare de faste kostnadene', isCorrect: false },
          { id: 'd', text: 'Ingenting ekstra', isCorrect: false },
        ],
        solution: 'En buffer (typisk 10-15%) er viktig fordi det alltid dukker opp uforutsette kostnader.',
      },
    },
    {
      id: 'salg-service-vg1-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-6-ex-2',
        number: '2.6.2',
        type: 'classic',
        task: 'Nevn de fire hovedfasene i arrangementsplanlegging.',
        solution: '1) Idé og konsept - bestemme formål, målgruppe og budsjett. 2) Planlegging - detaljert program, sted, leverandører. 3) Gjennomføring - oppsett, mottak, program, håndtering av uforutsett. 4) Etterarbeid - opprydding, betaling, evaluering, dokumentasjon.',
      },
    },
    {
      id: 'salg-service-vg1-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-6-ex-3',
        number: '2.6.3',
        type: 'classic',
        task: 'Du skal planlegge en avdelingsfest for 25 personer med et budsjett på 10 000 kr. Lag et enkelt budsjett.',
        solution: 'Eksempel: Lokale: Firmaets møterom (gratis) eller leid rom (2000 kr). Mat: Catering/pizza (200 kr x 25 = 5000 kr). Drikke: 50 kr/pers = 1250 kr. Dekorasjon: 500 kr. Underholdning (quiz, musikk): 500 kr. Buffer: 750 kr. Totalt: Ca 10 000 kr. (Justeres etter hva man prioriterer)',
      },
    },
    {
      id: 'salg-service-vg1-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-6-ex-4',
        number: '2.6.4',
        type: 'classic',
        task: 'Hvorfor er evaluering viktig etter et arrangement?',
        hints: ['Tenk på læring og forbedring'],
        solution: 'Evaluering er viktig fordi det hjelper deg lære hva som fungerte og hva som kan forbedres til neste gang. Du fanger opp tilbakemeldinger fra gjester og team, dokumenterer erfaringer, og bygger kompetanse. Uten evaluering gjør man ofte de samme feilene igjen.',
      },
    },
    {
      id: 'salg-service-vg1-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-6-ex-5',
        number: '2.6.5',
        type: 'classic',
        task: 'Lag en sjekkliste med minst 8 punkter for valg av lokale til et arrangement.',
        solution: '1) Kapasitet - passer til antall gjester. 2) Beliggenhet - lett tilgjengelig. 3) Parkering - nok plasser. 4) Tilgjengelighet - rullestol, HC-toalett. 5) Teknisk utstyr - lyd, lys, projektor. 6) Catering-muligheter. 7) Pris og hva som er inkludert. 8) Åpningstider/fleksibilitet. 9) Stemning/atmosfære. 10) Garderobe og toaletter.',
      },
    },
    {
      id: 'salg-service-vg1-2-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-6-ex-6',
        number: '2.6.6',
        type: 'classic',
        task: 'Hva er viktig å ha på plass på selve arrangementsdagen?',
        solution: '1) Alle på plass i god tid for oppsett. 2) Briefing med hele teamet før start. 3) Tydelig ansvarsfordeling - hvem gjør hva. 4) Kontaktliste til alle involverte. 5) Detaljert tidsplan ("run sheet"). 6) En person med overordnet ansvar som kan ta beslutninger. 7) Plan B for vanlige problemer (forsinket levering, tekniske problemer, etc.). 8) Vertskapsteam klare til å ta imot gjester.',
      },
    },
    {
      id: 'salg-service-vg1-2-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Fire faser:** Idé, planlegging, gjennomføring, etterarbeid
- **Budsjettering** med alle poster og buffer
- **Koordinering** gjennom tydelig ansvarsfordeling
- **Evaluering** er nøkkelen til å bli bedre

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Budsjett | Økonomisk plan for arrangementet |
| Run sheet | Detaljert tidsplan for dagen |
| Buffer | Ekstra penger til uforutsett |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.7: Relasjonsbygging og nettverk
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_2_7: TextbookChapter = {
  id: 'salg-service-vg1-2-7',
  courseId: 'salg-service-vg1',
  chapterNumber: '2.7',
  title: 'Relasjonsbygging og nettverk',
  description: 'Hvordan man bygger profesjonelle relasjoner og nettverk i servicenæringen. Du lærer om ulike former for nettverksbygging, både digitalt og fysisk, og hvorfor dette er viktig for karrieren.',
  estimatedMinutes: 35,
  competenceGoals: ['reflektere over ulike former for relasjonsbygging og forklare betydningen av nettverk'],
  content: [
    {
      id: 'salg-service-vg1-2-7-intro',
      type: 'text',
      content: `## Ditt nettverk er din ressurs

"Det handler ikke om hva du kan, men hvem du kjenner" er et velkjent uttrykk. I virkeligheten handler det om begge deler - men et godt nettverk åpner dører som kompetanse alene ikke kan. I servicenæringen er relasjoner spesielt viktige.

I dette kapittelet skal du lære:
- Hva relasjonsbygging og nettverk innebærer
- Ulike former for nettverk
- Hvordan bygge og vedlikeholde relasjoner
- Digitale nettverk og sosiale medier`,
    },
    {
      id: 'salg-service-vg1-2-7-def-1',
      type: 'definition',
      title: 'Nettverk',
      content: `Et **nettverk** er summen av dine profesjonelle og personlige relasjoner. Det inkluderer kolleger, tidligere arbeidsgivere, kunder, leverandører, bransjebekjente og venner. Et godt nettverk gir tilgang til informasjon, muligheter, støtte og samarbeid.`,
    },
    {
      id: 'salg-service-vg1-2-7-text-1',
      type: 'text',
      content: `### Hvorfor nettverk er viktig

**Karrieremuligheter:**
- Mange jobber fylles gjennom nettverk
- Anbefalinger fra kjente veier tungt
- Du hører om muligheter tidlig

**Kompetanse og læring:**
- Lære av andres erfaringer
- Få råd og veiledning
- Holde deg oppdatert i bransjen

**Støtte:**
- Noen å snakke med om utfordringer
- Hjelp når du trenger det
- Motivasjon og inspirasjon

**Forretning:**
- Kunder gjennom anbefalinger
- Samarbeidspartnere
- Leverandører og kontakter`,
    },
    {
      id: 'salg-service-vg1-2-7-text-2',
      type: 'text',
      content: `### Former for nettverk

**Sterke bånd:**
- Nære venner og familie
- Kolleger du jobber tett med
- Mentorer og nærmeste
- Gir dyp støtte og tillit

**Svake bånd:**
- Bekjente og perifere kontakter
- Tidligere kolleger du møter sjelden
- Bransjefolk du har møtt
- Gir ofte ny informasjon og muligheter

**Forskning viser:** Svake bånd er ofte viktigere for å finne jobb! De beveger seg i andre miljøer og gir tilgang til informasjon du ikke allerede har.

**Formelle nettverk:**
- Bransjeforeninger
- Alumni-nettverk
- Profesjonelle organisasjoner
- Arrangerte nettverksmøter

**Uformelle nettverk:**
- Kollegaer fra tidligere jobber
- Folk du møter på kurs og konferanser
- Sosiale bekjentskaper med felles interesser`,
    },
    {
      id: 'salg-service-vg1-2-7-text-3',
      type: 'text',
      content: `### Bygge og vedlikeholde nettverk

**Være genuin:**
- Vis ekte interesse for andre
- Ikke bare tenk på hva du kan få
- Hjelp andre uten å forvente noe tilbake

**Ta initiativ:**
- Introduser deg for nye mennesker
- Foreslå å ta en kaffe
- Følg opp etter møter

**Gi verdi:**
- Del nyttig informasjon
- Koble folk som burde kjenne hverandre
- Gratulér ved suksess

**Vedlikehold:**
- Hold kontakten regelmessig
- Husk viktige datoer
- Vær synlig (men ikke masete)`,
    },
    {
      id: 'salg-service-vg1-2-7-tip-1',
      type: 'tip',
      title: 'Gi før du ber',
      content: `Den beste måten å bygge nettverk på er å være hjelpsom uten å forvente noe tilbake. Del en relevant artikkel, koble to mennesker som burde kjenne hverandre, eller gratulér med en forfremmelse. Når du gir først, bygger du goodwill som gjør at andre gjerne hjelper deg tilbake.`,
    },
    {
      id: 'salg-service-vg1-2-7-text-4',
      type: 'text',
      content: `### Digitale nettverk

**LinkedIn:**
- Profesjonell profil med erfaring og kompetanse
- Koble deg til kolleger og kontakter
- Følg bedrifter og bransjer
- Del og kommenter relevant innhold

**Tips for LinkedIn:**
- Profesjonelt bilde
- Tydelig "headline" (hva gjør du)
- Fullstendig profil med erfaring
- Vær aktiv - ikke bare passiv

**Andre plattformer:**
- Facebook-grupper for bransjen
- Instagram for visuell bransje
- Twitter/X for nyheter og diskusjoner
- Bransjespesifikke forum

**Digital nettverksetikette:**
- Personlige meldinger > generiske
- Forklar hvorfor du vil koble
- Vær profesjonell i tonen
- Respekter andres tid`,
    },
    {
      id: 'salg-service-vg1-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Bygge nettverk fra scratch',
      problem: 'Du er ny i bransjen og kjenner nesten ingen.',
      solution: `**Steg 1: Start med det du har**
- Koble med tidligere klassekamerater og lærere på LinkedIn
- Legg til kolleger fra deltidsjobber
- Familie og venner som jobber i relevante bransjer

**Steg 2: Utvid aktivt**
- Meld deg inn i en bransjeforening for studenter/nyutdannede
- Delta på bransjearrangementer og introduser deg
- Spør om du kan bli med på mentorprogram

**Steg 3: Vedlikehold**
- Send en melding etter å ha møtt noen: "Hyggelig å treffe deg i går!"
- Del interessante artikler med kontakter
- Gratulér med jobber, forfremmelser, jubileer

**Steg 4: Gi tilbake**
- Hjelp andre nye i bransjen
- Del dine egne erfaringer
- Koble folk som kan ha nytte av å kjenne hverandre`,
    },
    {
      id: 'salg-service-vg1-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-7-ex-1',
        number: '2.7.1',
        type: 'multiple-choice',
        task: 'Hvorfor er "svake bånd" viktige i nettverk?',
        options: [
          { id: 'a', text: 'Fordi de kjenner deg best', isCorrect: false },
          { id: 'b', text: 'Fordi de gir tilgang til informasjon du ikke allerede har', isCorrect: true },
          { id: 'c', text: 'Fordi de er lettere å kontakte', isCorrect: false },
          { id: 'd', text: 'Fordi de alltid hjelper deg', isCorrect: false },
        ],
        solution: 'Svake bånd beveger seg i andre miljøer enn deg og gir derfor tilgang til ny informasjon og muligheter som dine nære kontakter ikke har.',
      },
    },
    {
      id: 'salg-service-vg1-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-7-ex-2',
        number: '2.7.2',
        type: 'classic',
        task: 'Hva menes med "gi før du ber" i nettverksbygging?',
        hints: ['Tenk på hvordan du bygger goodwill'],
        solution: 'Det betyr å være hjelpsom og gi verdi til andre uten å forvente noe tilbake umiddelbart. Ved å dele nyttig informasjon, koble folk, og gratulere med suksess, bygger du goodwill. Når du senere trenger hjelp, vil folk gjerne hjelpe tilbake.',
      },
    },
    {
      id: 'salg-service-vg1-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-7-ex-3',
        number: '2.7.3',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan du kan vedlikeholde et profesjonelt nettverk.',
        solution: '1) Send en melding når du ser noe relevant: "Så denne artikkelen og tenkte på deg." 2) Gratulér med forfremmelser, nye jobber, eller jubileer. 3) Ta kontakt jevnlig for en kaffe eller lunsj. 4) Kommenter og lik innhold de deler på LinkedIn. 5) Introduser dem for andre i ditt nettverk som de kan ha nytte av å kjenne.',
      },
    },
    {
      id: 'salg-service-vg1-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-2-7-ex-4',
        number: '2.7.4',
        type: 'classic',
        task: 'Hvordan kan du bruke LinkedIn til profesjonell nettverksbygging?',
        solution: '1) Ha en komplett profil med profesjonelt bilde og tydelig beskrivelse. 2) Koble deg til kolleger, klassekamerater og bransjefolk. 3) Følg bedrifter og organisasjoner i din bransje. 4) Del relevant innhold og kommenter på andres innlegg. 5) Send personlige meldinger når du kobler deg til nye - forklar hvorfor. 6) Vær aktiv regelmessig, ikke bare når du trenger noe.',
      },
    },
    {
      id: 'salg-service-vg1-2-7-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Nettverk** gir tilgang til muligheter, informasjon og støtte
- **Svake bånd** kan være viktigere enn sterke for nye muligheter
- **Gi verdi** til andre uten å forvente noe tilbake
- **Digitale plattformer** som LinkedIn er viktige verktøy

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Nettverk | Summen av dine profesjonelle relasjoner |
| Svake bånd | Perifere kontakter som gir ny informasjon |
| LinkedIn | Profesjonell nettverksplattform |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SALG_SERVICE_VG1_DEL2_CHAPTERS = [
  CHAPTER_SALG_SERVICE_VG1_2_1,
  CHAPTER_SALG_SERVICE_VG1_2_2,
  CHAPTER_SALG_SERVICE_VG1_2_3,
  CHAPTER_SALG_SERVICE_VG1_2_4,
  CHAPTER_SALG_SERVICE_VG1_2_5,
  CHAPTER_SALG_SERVICE_VG1_2_6,
  CHAPTER_SALG_SERVICE_VG1_2_7,
];
