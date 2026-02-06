/**
 * Salg, service og reiseliv VG1 - Del 8: Innovasjon og entreprenørskap
 * Kapittel 8.1-8.7
 *
 * Dekker LK20 kompetansemål:
 * - beskrive hva som kjennetegner innovasjon og entreprenørskap
 * - utvikle og presentere en forretningsidé
 * - gjøre rede for hvordan virksomheter kan skape verdier på en bærekraftig måte
 * - planlegge, gjennomføre og vurdere et prosjekt
 * - bruke digitale verktøy i arbeidet med en forretningsidé
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Hva er innovasjon og entreprenørskap?
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_8_1: TextbookChapter = {
  id: 'salg-service-vg1-8-1',
  courseId: 'salg-service-vg1',
  chapterNumber: '8.1',
  title: 'Hva er innovasjon og entreprenørskap?',
  description: 'En introduksjon til begrepene innovasjon og entreprenørskap. Du lærer forskjellen mellom oppfinnelse og innovasjon, ulike typer innovasjon, og hva som kjennetegner en entreprenør.',
  estimatedMinutes: 40,
  competenceGoals: ['beskrive hva som kjennetegner innovasjon og entreprenørskap'],
  content: [
    {
      id: 'salg-service-vg1-8-1-intro',
      type: 'text',
      content: `## Fra idé til virkelighet

Verden endrer seg stadig, og de som lykkes er ofte de som ser muligheter der andre ser problemer. Innovasjon og entreprenørskap handler om å skape noe nytt og verdifullt - enten det er et produkt, en tjeneste, eller en ny måte å gjøre ting på.

I dette kapittelet skal du lære:
- Hva innovasjon betyr og ulike typer innovasjon
- Forskjellen mellom oppfinnelse og innovasjon
- Hva en entreprenør er og hvilke egenskaper som kjennetegner dem
- Hvorfor innovasjon er viktig for samfunnet`,
    },
    {
      id: 'salg-service-vg1-8-1-def-1',
      type: 'definition',
      title: 'Innovasjon',
      content: `**Innovasjon** er å skape noe nytt som har verdi. Det kan være et nytt produkt, en ny tjeneste, en ny prosess eller en ny forretningsmodell. Innovasjon skiller seg fra oppfinnelse ved at det må tas i bruk og skape verdi - ikke bare være en idé.`,
    },
    {
      id: 'salg-service-vg1-8-1-text-1',
      type: 'text',
      content: `### Oppfinnelse vs. innovasjon

**Oppfinnelse:**
- En ny idé, produkt eller metode
- Trenger ikke være tatt i bruk
- Kan ligge i en skuff

**Innovasjon:**
- Oppfinnelse + implementering + verdi
- Må tas i bruk av noen
- Må skape verdi for brukeren

**Eksempel:**
Leonardo da Vinci tegnet helikoptre på 1400-tallet (oppfinnelse), men det ble ikke en innovasjon før noen faktisk bygde og tok i bruk helikoptre 500 år senere.

**iPhone-eksempelet:**
Apple oppfant ikke smarttelefonen, touchskjermen eller apper. Men de kombinerte eksisterende teknologi på en ny måte og skapte et produkt folk ville ha. Det er innovasjon.`,
    },
    {
      id: 'salg-service-vg1-8-1-text-2',
      type: 'text',
      content: `### Typer innovasjon

**Produktinnovasjon:**
- Nye eller forbedrede produkter
- Eksempel: Elektrisk bil, smartklokke

**Tjenesteinnovasjon:**
- Nye eller forbedrede tjenester
- Eksempel: Spotify (streaming), Uber (samkjøring)

**Prosessinnovasjon:**
- Nye måter å produsere eller levere på
- Eksempel: Automatiserte lagre, selvbetjening

**Forretningsmodellinnovasjon:**
- Nye måter å tjene penger på
- Eksempel: Abonnementsmodeller, freemium

**Inkrementell vs. radikal:**
- Inkrementell: Gradvise forbedringer (ny iPhone-modell)
- Radikal: Helt nye løsninger (smarttelefonen i seg selv)`,
    },
    {
      id: 'salg-service-vg1-8-1-def-2',
      type: 'definition',
      title: 'Entreprenør',
      content: `En **entreprenør** er en person som ser muligheter, tar initiativ til å starte nye virksomheter eller prosjekter, og er villig til å ta risiko for å realisere ideene sine. Entreprenørskap handler om å skape noe nytt, ofte under usikre forhold.`,
    },
    {
      id: 'salg-service-vg1-8-1-text-3',
      type: 'text',
      content: `### Kjennetegn ved entreprenører

**Personlige egenskaper:**
- Ser muligheter der andre ser problemer
- Villig til å ta kalkulert risiko
- Utholdenhet - gir ikke opp ved motgang
- Kreativitet og nytenking
- Evne til å handle, ikke bare planlegge

**Ferdigheter:**
- Kommunikasjon og nettverksbygging
- Grunnleggende forretningsforståelse
- Problemløsning
- Tilpasningsevne

**Myter om entreprenører:**
- "Må være risikosøker" → Nei, de tar kalkulert risiko
- "Må være ung" → Gjennomsnittsalder for suksessfulle gründere er 45
- "Må ha en helt unik idé" → Utførelsen er ofte viktigere
- "Må gjøre alt selv" → Team og nettverk er avgjørende`,
    },
    {
      id: 'salg-service-vg1-8-1-text-4',
      type: 'text',
      content: `### Hvorfor innovasjon er viktig

**For bedrifter:**
- Overleve i konkurranseutsatte markeder
- Vokse og utvikle seg
- Tiltrekke talenter
- Møte endrede kundebehov

**For samfunnet:**
- Løse store utfordringer (klima, helse)
- Skape arbeidsplasser
- Øke produktiviteten
- Forbedre livskvalitet

**For Norge:**
- Omstilling fra oljeavhengighet
- Utvikle nye eksportnæringer
- Holde velferdssamfunnet oppe
- Utnytte kompetanse og ressurser`,
    },
    {
      id: 'salg-service-vg1-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Norsk innovasjon - Too Good To Go',
      problem: 'Restauranter og butikker kaster mat som kunne vært spist.',
      solution: `**Problemet:**
Hvert år kastes enorme mengder mat som egentlig er spiselig. Det er dårlig for miljøet og økonomien.

**Innovasjonen:**
Too Good To Go laget en app der spisesteder selger overskuddsmat til redusert pris. Brukere får billig mat, butikkene får inntekt i stedet for tap, og matsvinn reduseres.

**Type innovasjon:**
- Tjenesteinnovasjon (ny tjeneste)
- Forretningsmodellinnovasjon (ny måte å koble tilbud og etterspørsel)

**Hvorfor det fungerer:**
- Løser et reelt problem
- Vinn-vinn for alle parter
- Enkel å bruke (app)
- Spiller på folks ønsker om å være miljøvennlige og spare penger

**Resultat:**
Startet i Danmark 2015, nå i 17 land, har reddet over 200 millioner måltider.`,
    },
    {
      id: 'salg-service-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom oppfinnelse og innovasjon?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
          { id: 'b', text: 'Innovasjon må tas i bruk og skape verdi', isCorrect: true },
          { id: 'c', text: 'Oppfinnelse er alltid teknisk', isCorrect: false },
          { id: 'd', text: 'Innovasjon er alltid digital', isCorrect: false },
        ],
        solution: 'En oppfinnelse er en ny idé, men den blir først en innovasjon når den tas i bruk og skaper verdi for noen. Mange oppfinnelser forblir i skuffen fordi ingen implementerer dem.',
      },
    },
    {
      id: 'salg-service-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        task: 'Forklar hva tjenesteinnovasjon er og gi et eksempel.',
        hints: ['Tenk på nye måter å levere tjenester på'],
        solution: 'Tjenesteinnovasjon er å skape nye eller vesentlig forbedrede tjenester. Eksempler: Spotify endret hvordan vi hører på musikk (fra kjøp til streaming). Vipps endret hvordan vi overfører penger. Airbnb endret hvordan vi finner overnatting. Finn.no endret hvordan vi kjøper og selger brukte ting.',
      },
    },
    {
      id: 'salg-service-vg1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        task: 'Nevn tre egenskaper som kjennetegner en entreprenør, og forklar hvorfor de er viktige.',
        solution: '1) Ser muligheter - viktig fordi innovasjon starter med å se et behov eller problem andre ikke ser. 2) Utholdenhet - viktig fordi de fleste gründere møter motgang og avslag, og må fortsette tross dette. 3) Evne til å ta risiko - viktig fordi å starte noe nytt alltid innebærer usikkerhet, og man må tåle det. 4) Kreativitet - viktig for å finne nye løsninger på problemer.',
      },
    },
    {
      id: 'salg-service-vg1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom inkrementell og radikal innovasjon med eksempler.',
        solution: 'Inkrementell innovasjon er gradvise forbedringer av noe som allerede finnes - for eksempel en ny iPhone-modell med bedre kamera. Radikal innovasjon er noe helt nytt som endrer spillereglene - for eksempel smarttelefonen selv, som erstattet vanlige telefoner, kameraer, GPS og mye annet. Inkrementell skjer oftere og er mindre risikabelt, radikal skjer sjeldnere men kan gi større gevinst.',
      },
    },
    {
      id: 'salg-service-vg1-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        task: 'Hvorfor er innovasjon viktig for Norge som samfunn?',
        solution: 'Norge er avhengig av å omstille seg fra olje og gass til nye næringer. Innovasjon skaper nye arbeidsplasser og eksportinntekter. Det hjelper oss løse samfunnsutfordringer som klimaendringer og eldrebølge. Innovasjon holder produktiviteten opp slik at vi kan opprettholde velferdssamfunnet. Det utnytter den kompetansen og de ressursene vi har.',
      },
    },
    {
      id: 'salg-service-vg1-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Innovasjon** er å skape noe nytt som har verdi og tas i bruk
- **Typer innovasjon:** produkt, tjeneste, prosess, forretningsmodell
- **Entreprenør** er en som ser muligheter og tar initiativ
- **Innovasjon** er viktig for bedrifter og samfunnet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Innovasjon | Skape noe nytt som har verdi |
| Entreprenør | Person som starter nye virksomheter |
| Inkrementell | Gradvis forbedring |
| Radikal | Helt ny løsning |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Fra idé til forretningsidé
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_8_2: TextbookChapter = {
  id: 'salg-service-vg1-8-2',
  courseId: 'salg-service-vg1',
  chapterNumber: '8.2',
  title: 'Fra idé til forretningsidé',
  description: 'Du lærer hvordan gode ideer oppstår og hvordan du utvikler en idé til en forretningsidé. Kapittelet dekker idéutvikling, markedsanalyse og vurdering av om ideen har potensial.',
  estimatedMinutes: 45,
  competenceGoals: ['utvikle og presentere en forretningsidé'],
  content: [
    {
      id: 'salg-service-vg1-8-2-intro',
      type: 'text',
      content: `## Finne og utvikle gode ideer

Alle har ideer, men ikke alle ideer blir til noe. For at en idé skal bli en forretning, må den løse et reelt problem for noen som er villige til å betale for løsningen. I dette kapittelet lærer du å gå fra "det hadde vært kult" til "dette kan bli en forretning".

I dette kapittelet skal du lære:
- Hvor ideer kommer fra
- Hvordan vurdere om en idé har potensial
- Forskjellen på idé og forretningsidé
- Metoder for idéutvikling`,
    },
    {
      id: 'salg-service-vg1-8-2-def-1',
      type: 'definition',
      title: 'Forretningsidé',
      content: `En **forretningsidé** er en idé som beskriver hva du skal tilby, hvem du skal tilby det til, og hvordan du skal tjene penger på det. En god forretningsidé løser et reelt problem for en definert kundegruppe på en måte som er bedre enn eksisterende alternativer.`,
    },
    {
      id: 'salg-service-vg1-8-2-text-1',
      type: 'text',
      content: `### Hvor kommer ideer fra?

**Egne frustrasjoner:**
- "Hvorfor finnes ikke dette?"
- Problemer du selv opplever
- Irritasjon over dårlige løsninger

**Observasjon:**
- Se hvordan folk oppfører seg
- Legge merke til ineffektivitet
- Oppdage behov andre ikke ser

**Kombinasjon:**
- Ta noe som fungerer ett sted til et nytt marked
- Kombinere to eksisterende løsninger
- Bruke teknologi på nye måter

**Endringer i samfunnet:**
- Nye lover og regler
- Demografiske endringer
- Teknologisk utvikling
- Endrede holdninger (f.eks. miljø)

**Spørsmål å stille:**
- Hva irriterer meg i hverdagen?
- Hva skulle jeg ønske fantes?
- Hva gjør folk på tungvinte måter?`,
    },
    {
      id: 'salg-service-vg1-8-2-text-2',
      type: 'text',
      content: `### Fra idé til forretningsidé

En idé: "Det hadde vært kult med en app for matlevering"
En forretningsidé: "Vi leverer varm middag til travle barnefamilier i Oslo sentrum innen 30 minutter, bestilt via app, med fokus på sunn og barnevennlig mat"

**De tre spørsmålene:**
1. **HVA?** - Hva tilbyr du? (produkt/tjeneste)
2. **HVEM?** - Hvem er kunden? (målgruppe)
3. **HVORDAN?** - Hvordan tjener du penger? (inntektsmodell)

**Kundens problem:**
- Hvilket problem løser du?
- Hvor stort er problemet?
- Hvordan løses det i dag?
- Hva er din løsning bedre?`,
    },
    {
      id: 'salg-service-vg1-8-2-text-3',
      type: 'text',
      content: `### Vurdere idéens potensial

**Sjekkliste for idévurdering:**

**Er det et reelt problem?**
- Har folk faktisk dette problemet?
- Er problemet stort nok til at de vil betale for en løsning?
- Er det et "must have" eller "nice to have"?

**Er markedet stort nok?**
- Hvor mange har dette problemet?
- Vil markedet vokse eller krympe?
- Er det rom for flere aktører?

**Kan du løse det?**
- Har du kompetansen?
- Har du ressursene?
- Er det teknisk mulig?

**Er det lønnsomt?**
- Vil folk betale nok?
- Kan du produsere til lav nok kostnad?
- Er marginene gode nok?

**Hva med konkurransen?**
- Hvem tilbyr lignende løsninger?
- Hva gjør deg bedre?
- Er det vanskelig å kopiere deg?`,
    },
    {
      id: 'salg-service-vg1-8-2-tip-1',
      type: 'tip',
      title: 'Snakk med potensielle kunder',
      content: `Den vanligste feilen gründere gjør er å anta at de vet hva kundene vil ha. Gå ut og snakk med folk! Spør om deres problemer, ikke om de liker idéen din. "Ville du brukt dette?" gir ubrukelig svar. "Hvordan løser du dette i dag?" gir innsikt.`,
    },
    {
      id: 'salg-service-vg1-8-2-text-4',
      type: 'text',
      content: `### Metoder for idéutvikling

**Brainstorming:**
- Generer mange ideer uten å vurdere
- Ingen idé er for dum
- Bygg på andres ideer
- Kvantitet først, kvalitet etterpå

**Brukerperspektiv (Design Thinking):**
1. Forstå brukeren (empati)
2. Definer problemet
3. Idégenerer løsninger
4. Lag prototyp
5. Test og forbedre

**SCAMPER:**
- **S**ubstitute - Hva kan erstattes?
- **C**ombine - Hva kan kombineres?
- **A**dapt - Hva kan tilpasses?
- **M**odify - Hva kan endres?
- **P**ut to other use - Annen bruk?
- **E**liminate - Hva kan fjernes?
- **R**everse - Hva kan snus?`,
    },
    {
      id: 'salg-service-vg1-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Utvikle en forretningsidé',
      problem: 'Du ser at mange studenter sliter med å lage sunn og billig mat.',
      solution: `**Idé:** Hjelpe studenter med mat

**Utvikle til forretningsidé:**

**1. Definer problemet:**
- Studenter har lite penger
- Lite tid og kunnskap om matlaging
- Ender opp med usunne valg

**2. Snakk med kunder:**
- Intervjuer viser at de ønsker enkle oppskrifter
- De vil handle på budsjett
- De har begrenset utstyr (kun to kokeplater)

**3. Forretningsidé:**
"En app som gir studenter ukesmenyer med enkle, sunne oppskrifter som kan lages på under 20 minutter med to kokeplater, med automatisk handleliste der alt koster under 400 kr i uken."

**4. Vurdere potensial:**
- Markedet: 300 000 studenter i Norge
- Problem: Reelt, mange sliter med dette
- Betalingsvilje: Må teste - kanskje freemium-modell?
- Konkurranse: Mange oppskriftsapper, men ingen spesialisert på studenter

**5. Neste steg:**
Lag en enkel prototype og test med 20 studenter.`,
    },
    {
      id: 'salg-service-vg1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'Hva må en forretningsidé inneholde?',
        options: [
          { id: 'a', text: 'Bare hva du skal selge', isCorrect: false },
          { id: 'b', text: 'Hva du tilbyr, hvem du tilbyr det til, og hvordan du tjener penger', isCorrect: true },
          { id: 'c', text: 'Bare hvem målgruppen er', isCorrect: false },
          { id: 'd', text: 'Bare en god produktidé', isCorrect: false },
        ],
        solution: 'En forretningsidé må besvare tre spørsmål: HVA tilbyr du (produkt/tjeneste), HVEM er kunden (målgruppe), og HVORDAN tjener du penger (inntektsmodell).',
      },
    },
    {
      id: 'salg-service-vg1-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        task: 'Hvorfor er det viktig å snakke med potensielle kunder tidlig i prosessen?',
        hints: ['Tenk på hva du antar vs. hva som er sant'],
        solution: 'Fordi gründere ofte antar hva kundene vil ha uten å faktisk vite det. Ved å snakke med kunder tidlig kan du: 1) Validere at problemet er reelt. 2) Forstå hvordan de løser problemet i dag. 3) Justere idéen basert på ekte behov. 4) Unngå å bruke tid og penger på noe ingen vil ha.',
      },
    },
    {
      id: 'salg-service-vg1-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        task: 'Beskriv tre kilder til gode forretningsideer.',
        solution: '1) Egne frustrasjoner - problemer du selv opplever og ønsker å løse. 2) Observasjon - se hvordan folk oppfører seg og legge merke til ineffektivitet. 3) Endringer i samfunnet - nye lover, teknologi, demografi eller holdninger skaper nye muligheter. 4) Kombinasjon - ta noe som fungerer ett sted og bruke det i ny sammenheng.',
      },
    },
    {
      id: 'salg-service-vg1-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        task: 'Du har en idé om en app for å finne treningspartnere. Formuler dette som en forretningsidé ved å besvare HVA, HVEM og HVORDAN.',
        solution: 'HVA: En app som matcher folk som vil trene sammen basert på treningsform, nivå, tid og sted. HVEM: Unge voksne (20-35) som vil komme i gang med trening men mangler motivasjon og treningspartnere. HVORDAN: Freemium-modell der basisversjonen er gratis, men premium-abonnement (79 kr/mnd) gir tilgang til flere funksjoner som gruppechat, kalenderintegrasjon og avansert matching.',
      },
    },
    {
      id: 'salg-service-vg1-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Bruk SCAMPER-metoden på en tradisjonell kafé. Kom med to ideer for hvordan kaféen kunne innovere.',
        solution: 'Substitute: Erstatt servitører med selvbetjening via app - kunden bestiller og betaler i appen, henter selv. Combine: Kombiner kafé med kontorplass - "kafé-kontor" der folk kan leie en plass med kaffe inkludert. Adapt: Tilpass åpningstider til nattugler - åpne kafé kl 22-04 for de som jobber sent. Eliminate: Fjern menyen - lag én type kaffe per dag, ekstremt enkel og fokusert. Reverse: I stedet for at folk kommer til kaféen, kom kaféen til folk - mobil kaffevogn.',
      },
    },
    {
      id: 'salg-service-vg1-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Ideer** kan komme fra frustrasjoner, observasjon, kombinasjon eller samfunnsendringer
- **Forretningsidé** besvarer HVA, HVEM og HVORDAN
- **Kundesamtaler** er viktige for å validere ideen
- **Metoder** som brainstorming, Design Thinking og SCAMPER hjelper idéutvikling

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Forretningsidé | Idé som beskriver produkt, kunde og inntekt |
| Validering | Sjekke om ideen har reelt potensial |
| Design Thinking | Brukersentrert metode for idéutvikling |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Forretningsmodell og verdiskaping
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_8_3: TextbookChapter = {
  id: 'salg-service-vg1-8-3',
  courseId: 'salg-service-vg1',
  chapterNumber: '8.3',
  title: 'Forretningsmodell og verdiskaping',
  description: 'Du lærer hva en forretningsmodell er og hvordan bedrifter skaper verdi. Kapittelet introduserer Business Model Canvas som verktøy for å beskrive og analysere forretningsmodeller.',
  estimatedMinutes: 50,
  competenceGoals: ['utvikle og presentere en forretningsidé'],
  content: [
    {
      id: 'salg-service-vg1-8-3-intro',
      type: 'text',
      content: `## Hvordan tjene penger?

En god idé er ikke nok - du må ha en plan for hvordan ideen skal bli til inntekter. Forretningsmodellen beskriver hvordan bedriften skaper, leverer og fanger verdi. I dette kapittelet lærer du å bygge en komplett forretningsmodell.

I dette kapittelet skal du lære:
- Hva en forretningsmodell er
- Business Model Canvas - et verktøy for forretningsmodellering
- Ulike inntektsmodeller
- Hvordan bedrifter skaper verdi`,
    },
    {
      id: 'salg-service-vg1-8-3-def-1',
      type: 'definition',
      title: 'Forretningsmodell',
      content: `En **forretningsmodell** beskriver hvordan en bedrift skaper, leverer og fanger verdi. Den forteller hvem kundene er, hva de får, hvordan det leveres, og hvordan bedriften tjener penger på det.`,
    },
    {
      id: 'salg-service-vg1-8-3-text-1',
      type: 'text',
      content: `### Business Model Canvas

Business Model Canvas er et verktøy for å beskrive forretningsmodeller på én side. Den har ni byggeklosser:

**1. Kundesegmenter**
- Hvem skaper du verdi for?
- Hvem er dine viktigste kunder?

**2. Verdiforslag**
- Hvilken verdi leverer du til kunden?
- Hvilket problem løser du?
- Hvilke behov tilfredsstiller du?

**3. Kanaler**
- Hvordan når du kundene?
- Hvordan leverer du verdiforslaget?

**4. Kunderelasjoner**
- Hvilken type relasjon har du med kundene?
- Personlig, automatisert, selvbetjening?

**5. Inntektsstrømmer**
- Hvordan tjener du penger?
- Hva betaler kundene for?`,
    },
    {
      id: 'salg-service-vg1-8-3-text-2',
      type: 'text',
      content: `### Business Model Canvas (fortsettelse)

**6. Nøkkelressurser**
- Hvilke ressurser trenger du?
- Fysiske, intellektuelle, menneskelige, finansielle

**7. Nøkkelaktiviteter**
- Hva må du gjøre for å levere?
- Produksjon, problemløsning, plattform?

**8. Nøkkelpartnere**
- Hvem samarbeider du med?
- Leverandører, allianser, joint ventures

**9. Kostnadsstruktur**
- Hva koster det å drive?
- Faste og variable kostnader
- Stordriftsfordeler?`,
    },
    {
      id: 'salg-service-vg1-8-3-text-3',
      type: 'text',
      content: `### Vanlige inntektsmodeller

**Produktsalg:**
- Selge fysiske eller digitale produkter
- Engangsinntekt per salg

**Abonnement:**
- Løpende betaling for tilgang
- Forutsigbare inntekter
- Eksempel: Netflix, Spotify

**Freemium:**
- Gratis grunnversjon, betal for mer
- Mange gratisbrukere, få betalende
- Eksempel: Dropbox, Linkedin

**Lisens:**
- Betaling for bruksrett
- Ofte programvare eller teknologi

**Provisjon/megling:**
- Ta prosent av transaksjoner
- Eksempel: Finn.no, Airbnb

**Annonsering:**
- Gratis for brukere, selg oppmerksomhet
- Eksempel: Facebook, Google`,
    },
    {
      id: 'salg-service-vg1-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Business Model Canvas for en matleveringstjeneste',
      problem: 'Fyll ut Business Model Canvas for en matleveringstjeneste.',
      solution: `**1. Kundesegmenter:**
- Travle barnefamilier
- Unge profesjonelle med lite tid

**2. Verdiforslag:**
- Varm middag levert på døren innen 30 min
- Slipper planlegging, handling og matlaging

**3. Kanaler:**
- App og nettside for bestilling
- Egne bud for levering

**4. Kunderelasjoner:**
- Selvbetjening via app
- Kundeservice ved problemer

**5. Inntektsstrømmer:**
- Leveringsavgift (49 kr)
- Provisjon fra restauranter (15-30%)
- Eventuelt abonnement for gratis levering

**6. Nøkkelressurser:**
- App/teknologi
- Budsykler/-biler
- Nettverk av restauranter

**7. Nøkkelaktiviteter:**
- Rekruttere restauranter
- Koordinere leveranser
- Markedsføring

**8. Nøkkelpartnere:**
- Restauranter
- Betalingsløsninger
- Forsikring

**9. Kostnadsstruktur:**
- Teknologiutvikling
- Lønn til bud
- Markedsføring`,
    },
    {
      id: 'salg-service-vg1-8-3-text-4',
      type: 'text',
      content: `### Verdiskaping

**Hva er verdi?**
Verdi er det kunden opplever at de får. Det kan være:
- Funksjonell verdi (løser et problem)
- Emosjonell verdi (føles bra)
- Sosial verdi (status, tilhørighet)
- Økonomisk verdi (sparer penger/tid)

**Verdiforslaget:**
Et godt verdiforslag er:
- Klart og tydelig
- Fokusert på kundens behov
- Differensiert fra konkurrentene
- Troverdig og realistisk

**Eksempler på verdiforslag:**
- Ikea: "Billige, moderne møbler du kan ta med hjem selv"
- Volvo: "Trygge biler for familier"
- Apple: "Teknologi som bare fungerer og ser bra ut"`,
    },
    {
      id: 'salg-service-vg1-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Hva beskriver en forretningsmodell?',
        options: [
          { id: 'a', text: 'Bare hvordan bedriften tjener penger', isCorrect: false },
          { id: 'b', text: 'Hvordan bedriften skaper, leverer og fanger verdi', isCorrect: true },
          { id: 'c', text: 'Bare hvem kundene er', isCorrect: false },
          { id: 'd', text: 'Bare hva produktet koster', isCorrect: false },
        ],
        solution: 'En forretningsmodell beskriver hele bildet: hvordan bedriften skaper verdi (produkt/tjeneste), leverer verdi (kanaler, partnere), og fanger verdi (inntektsmodell).',
      },
    },
    {
      id: 'salg-service-vg1-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        task: 'Forklar hva freemium-modellen er og gi et eksempel.',
        hints: ['Tenk på tjenester som er gratis å starte med'],
        solution: 'Freemium er en inntektsmodell der grunnversjonen av produktet er gratis, men du betaler for premium-funksjoner. Eksempler: Spotify (gratis med reklame, betal for reklamefritt). Dropbox (gratis lagring, betal for mer plass). LinkedIn (gratis profil, betal for InMail og avansert søk). Modellen tiltrekker mange brukere, og noen konverterer til betalende.',
      },
    },
    {
      id: 'salg-service-vg1-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        task: 'Nevn de ni byggesteinene i Business Model Canvas.',
        solution: '1) Kundesegmenter - hvem er kundene. 2) Verdiforslag - hvilken verdi leverer du. 3) Kanaler - hvordan når du kundene. 4) Kunderelasjoner - type relasjon med kundene. 5) Inntektsstrømmer - hvordan du tjener penger. 6) Nøkkelressurser - hva du trenger. 7) Nøkkelaktiviteter - hva du må gjøre. 8) Nøkkelpartnere - hvem du samarbeider med. 9) Kostnadsstruktur - hva det koster.',
      },
    },
    {
      id: 'salg-service-vg1-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        task: 'Velg en bedrift du kjenner (f.eks. Netflix eller en lokal butikk) og beskriv verdiforslaget deres.',
        solution: 'Eksempel Netflix: Verdiforslaget er "Ubegrenset tilgang til tusenvis av filmer og serier, når du vil, hvor du vil, uten reklame, for en lav månedspris." Det løser problemet med dyr kinobilletter/DVD-leie, tilgjengelighet, og reklame på vanlig TV. Differensiering: Eget innhold (Netflix Originals), personlige anbefalinger.',
      },
    },
    {
      id: 'salg-service-vg1-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        task: 'Du skal starte en bruktbokhandel. Fyll ut minst fem av ni felt i Business Model Canvas.',
        solution: 'Kundesegmenter: Bokelsker som vil spare penger, studenter, miljøbevisste. Verdiforslag: Billige bøker i god stand, bærekraftig alternativ til nye bøker, mulighet til å selge egne bøker. Kanaler: Fysisk butikk, nettbutikk, sosiale medier. Inntektsstrømmer: Salg av bøker, provisjon på bøker folk selger inn. Nøkkelressurser: Butikklokale, lager, nettside, kunnskap om bøker. Kostnadsstruktur: Husleie, lønn, innkjøp av bøker, nettside.',
      },
    },
    {
      id: 'salg-service-vg1-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Forretningsmodell** beskriver hvordan bedriften skaper, leverer og fanger verdi
- **Business Model Canvas** har ni byggeklosser som til sammen beskriver modellen
- **Inntektsmodeller** inkluderer salg, abonnement, freemium, provisjon m.m.
- **Verdiforslaget** beskriver hvilken verdi du gir kundene

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Forretningsmodell | Hvordan bedriften tjener penger |
| Business Model Canvas | Verktøy for å beskrive forretningsmodeller |
| Verdiforslag | Verdien du tilbyr kundene |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Bærekraftig innovasjon
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_8_4: TextbookChapter = {
  id: 'salg-service-vg1-8-4',
  courseId: 'salg-service-vg1',
  chapterNumber: '8.4',
  title: 'Bærekraftig innovasjon',
  description: 'Du lærer hvordan bedrifter kan innovere på en bærekraftig måte som tar hensyn til miljø og samfunn. Kapittelet dekker FNs bærekraftsmål, sirkulær økonomi og grønn forretningsutvikling.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for hvordan virksomheter kan skape verdier på en bærekraftig måte'],
  content: [
    {
      id: 'salg-service-vg1-8-4-intro',
      type: 'text',
      content: `## Innovasjon som gjør godt

Fremtidens bedrifter må skape verdi uten å ødelegge for fremtidige generasjoner. Bærekraftig innovasjon handler om å finne løsninger som er bra for både business, mennesker og planet. Det er ikke bare et ansvar - det er også en forretningsmulighet.

I dette kapittelet skal du lære:
- Hva bærekraft betyr for bedrifter
- FNs bærekraftsmål og hvordan de kan inspirere innovasjon
- Sirkulær økonomi og nye forretningsmodeller
- Hvordan unngå greenwashing`,
    },
    {
      id: 'salg-service-vg1-8-4-def-1',
      type: 'definition',
      title: 'Bærekraft',
      content: `**Bærekraft** handler om å dekke dagens behov uten å ødelegge for fremtidige generasjoners mulighet til å dekke sine behov. I næringslivet snakker vi om den tredelte bunnlinjen: økonomisk, sosial og miljømessig bærekraft.`,
    },
    {
      id: 'salg-service-vg1-8-4-text-1',
      type: 'text',
      content: `### Den tredelte bunnlinjen

**Økonomisk bærekraft:**
- Bedriften må være lønnsom over tid
- Skape verdier for eiere, ansatte og samfunn
- Langsiktig tenking, ikke bare kortsiktig profitt

**Sosial bærekraft:**
- Gode arbeidsforhold
- Rettferdig behandling av leverandører
- Bidra positivt til lokalsamfunnet
- Inkludering og mangfold

**Miljømessig bærekraft:**
- Redusere klimautslipp
- Minimere avfall
- Bærekraftig ressursbruk
- Beskytte natur og biologisk mangfold

**Alle tre må henge sammen** - en bedrift som er miljøvennlig men behandler ansatte dårlig, er ikke bærekraftig.`,
    },
    {
      id: 'salg-service-vg1-8-4-text-2',
      type: 'text',
      content: `### FNs bærekraftsmål

FN har definert 17 bærekraftsmål som verden skal nå innen 2030. Mange av dem er relevante for næringslivet:

**Relevante mål for servicenæringen:**
- **Mål 8:** Anstendig arbeid og økonomisk vekst
- **Mål 12:** Ansvarlig forbruk og produksjon
- **Mål 13:** Stoppe klimaendringene
- **Mål 5:** Likestilling mellom kjønnene
- **Mål 10:** Mindre ulikhet

**Hvordan bidra:**
- Identifiser mål som passer din virksomhet
- Sett konkrete delmål
- Mål og rapporter fremgang
- Vær ærlig om utfordringer`,
    },
    {
      id: 'salg-service-vg1-8-4-def-2',
      type: 'definition',
      title: 'Sirkulær økonomi',
      content: `**Sirkulær økonomi** er et alternativ til den tradisjonelle lineære økonomien (produser-bruk-kast). I sirkulærøkonomien designes produkter for å vare, repareres, gjenbrukes og resirkuleres. Avfall blir råvarer i et lukket kretsløp.`,
    },
    {
      id: 'salg-service-vg1-8-4-text-3',
      type: 'text',
      content: `### Sirkulære forretningsmodeller

**Produktet som tjeneste:**
- Leie i stedet for å eie
- Bedriften beholder eierskap og ansvar
- Eksempel: Leie møbler til kontor

**Forlenge levetid:**
- Reparasjonstjenester
- Oppgradering
- Eksempel: Apple Trade-In

**Gjenbruk og videresalg:**
- Bruktmarkeder
- Refurbished produkter
- Eksempel: Fretex, FINN.no

**Deling:**
- Del ressurser mellom brukere
- Eksempel: Bildelering, verktøybibliotek

**Materialgjenvinning:**
- Ta tilbake produkter
- Gjenvinne materialer
- Eksempel: Pantesystemer`,
    },
    {
      id: 'salg-service-vg1-8-4-warning-1',
      type: 'warning',
      title: 'Unngå greenwashing',
      content: `**Greenwashing** er å fremstille bedriften som mer miljøvennlig enn den er. Det er villedende markedsføring som kan straffes. Vær ærlig om hva du faktisk gjør, unngå vage påstander ("miljøvennlig"), og dokumenter det du hevder.`,
    },
    {
      id: 'salg-service-vg1-8-4-text-4',
      type: 'text',
      content: `### Bærekraft som konkurransefordel

**Hvorfor det lønner seg:**
- Kunder etterspør bærekraftige produkter
- Talenter vil jobbe for ansvarlige bedrifter
- Investorer vektlegger ESG (miljø, sosial, styring)
- Nye reguleringer krever bærekraft
- Reduserte kostnader (energi, avfall)

**Eksempler fra servicenæringen:**
- Hoteller: Redusert vann- og energibruk, lokale leverandører
- Restauranter: Matsvinn-reduksjon, sesongbasert meny, plantbasert
- Butikker: Brukt/vintage, reparasjon, pant på emballasje
- Reiseliv: Økoturisme, kompensere for flyreiser`,
    },
    {
      id: 'salg-service-vg1-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Bærekraftig forretningsmodell - Vipps + miljø',
      problem: 'Hvordan kan en digital betalingstjeneste bidra til bærekraft?',
      solution: `**Miljømessig:**
- Erstatter fysiske kvitteringer (papir)
- Mindre kontanthåndtering (transport av verdi)
- Digital infrastruktur vs. fysiske banker

**Sosialt:**
- Forenkler innsamling til veldedige formål
- Gjør det mulig for små aktører å ta betaling
- Inkluderer folk uten bankkort (Vipps til telefon)

**Økonomisk:**
- Reduserer kostnader for bedrifter (mindre kontanthåndtering)
- Effektiv betaling øker handel
- Norsk teknologi som eksporteres

**Lærdommer:**
- Bærekraft trenger ikke være hovedproduktet
- Digitalisering kan være bærekrafttiltak
- Sosial og miljømessig bærekraft kan forsterke hverandre`,
    },
    {
      id: 'salg-service-vg1-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'Hva er den tredelte bunnlinjen?',
        options: [
          { id: 'a', text: 'Tre ulike måter å beregne profitt på', isCorrect: false },
          { id: 'b', text: 'Økonomisk, sosial og miljømessig bærekraft', isCorrect: true },
          { id: 'c', text: 'Tre forskjellige kundegrupper', isCorrect: false },
          { id: 'd', text: 'Tre måter å redusere kostnader', isCorrect: false },
        ],
        solution: 'Den tredelte bunnlinjen handler om at bedrifter må ta hensyn til tre dimensjoner: økonomisk resultat, sosiale forhold, og miljøpåvirkning. Alle tre må være positive for at bedriften skal være virkelig bærekraftig.',
      },
    },
    {
      id: 'salg-service-vg1-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        task: 'Forklar hva sirkulær økonomi er og gi et eksempel.',
        hints: ['Tenk på motsetningen til kast-og-kjøp'],
        solution: 'Sirkulær økonomi er et alternativ til den lineære "produser-bruk-kast"-modellen. I sirkulær økonomi designes produkter for å vare, repareres, gjenbrukes og resirkuleres. Eksempler: Pantesystemer for flasker (materiale gjenbrukes), FINN.no (produkter får nye eiere), bildelingsapper (ressurser deles), Patagonia som reparerer klær.',
      },
    },
    {
      id: 'salg-service-vg1-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        task: 'Hva er greenwashing, og hvordan kan bedrifter unngå det?',
        solution: 'Greenwashing er å fremstille bedriften som mer miljøvennlig enn den faktisk er - villedende miljømarkedsføring. Unngå det ved: 1) Vær ærlig om hva du faktisk gjør og ikke gjør. 2) Unngå vage påstander som "miljøvennlig" uten dokumentasjon. 3) Ha konkrete tall og mål. 4) Være åpen om utfordringer, ikke bare suksesser. 5) Skaff sertifiseringer fra uavhengige aktører.',
      },
    },
    {
      id: 'salg-service-vg1-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Du driver en klesbutikk. Beskriv tre tiltak du kan gjøre for å bli mer bærekraftig.',
        solution: '1) Tilby reparasjonstjenester slik at klær varer lenger. 2) Ta imot brukte klær og selge dem eller donere til gjenbruk. 3) Velge leverandører med dokumentert bærekraft og rettferdige arbeidsforhold. 4) Redusere emballasje og tilby gjenbruksposer. 5) Informere kunder om hvordan de kan ta vare på klærne for lengre levetid.',
      },
    },
    {
      id: 'salg-service-vg1-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        task: 'Velg to av FNs bærekraftsmål og forklar hvordan en kafé kan bidra til dem.',
        solution: 'Mål 12 (Ansvarlig forbruk og produksjon): Kaféen kan redusere matsvinn ved å selge overskuddsmat via Too Good To Go, bruke lokale råvarer for å redusere transport, og kutte engangsplast. Mål 8 (Anstendig arbeid og økonomisk vekst): Kaféen kan sikre anstendig lønn, faste ansettelser fremfor bare deltid, og gode arbeidsforhold inkludert opplæring og utvikling.',
      },
    },
    {
      id: 'salg-service-vg1-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Den tredelte bunnlinjen:** Økonomisk, sosial og miljømessig bærekraft
- **FNs bærekraftsmål** gir retning for bærekraftig innovasjon
- **Sirkulær økonomi** er et alternativ til kast-og-kjøp
- **Bærekraft er en konkurransefordel**, ikke bare et ansvar

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Bærekraft | Dekke behov uten å ødelegge for fremtiden |
| Sirkulær økonomi | Lukket kretsløp for ressurser |
| Greenwashing | Villedende miljømarkedsføring |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Presentasjon og pitch
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_8_5: TextbookChapter = {
  id: 'salg-service-vg1-8-5',
  courseId: 'salg-service-vg1',
  chapterNumber: '8.5',
  title: 'Presentasjon og pitch',
  description: 'Du lærer å presentere forretningsideen din på en overbevisende måte. Kapittelet dekker strukturering av en pitch, presentasjonsteknikk og hvordan du tilpasser budskapet til ulike målgrupper.',
  estimatedMinutes: 45,
  competenceGoals: ['utvikle og presentere en forretningsidé'],
  content: [
    {
      id: 'salg-service-vg1-8-5-intro',
      type: 'text',
      content: `## Få andre til å tro på idéen din

En fantastisk idé som ingen forstår, er ikke mye verdt. Du må kunne formidle idéen din på en måte som engasjerer og overbeviser - enten det er investorer, partnere, kunder eller teammedlemmer.

I dette kapittelet skal du lære:
- Hva en pitch er og ulike pitchformater
- Hvordan strukturere en pitch
- Presentasjonsteknikker
- Tilpasse pitch til ulike målgrupper`,
    },
    {
      id: 'salg-service-vg1-8-5-def-1',
      type: 'definition',
      title: 'Pitch',
      content: `En **pitch** er en kort, overbevisende presentasjon av en forretningsidé. Målet er å vekke interesse og få tilhørerne til å ville vite mer eller handle. Pitchen kan være muntlig, skriftlig, eller begge deler.`,
    },
    {
      id: 'salg-service-vg1-8-5-text-1',
      type: 'text',
      content: `### Ulike pitchformater

**Heispitch (30-60 sekunder):**
- Så kort at du kan si det i en heistur
- Kjernebudskapet i én setning
- Brukes til nettverking, tilfeldige møter

**Kort pitch (3-5 minutter):**
- Utvidet versjon med litt mer detaljer
- Brukes i konkurranser, møter med investorer
- Ofte med noen få slides

**Full pitch (10-20 minutter):**
- Grundig gjennomgang
- Alle deler av forretningsmodellen
- Med presentasjon og demonstrasjon

**Pitch deck:**
- Visuell presentasjon (slides)
- Støtter den muntlige pitchen
- Kan sendes på forhånd eller etterpå`,
    },
    {
      id: 'salg-service-vg1-8-5-text-2',
      type: 'text',
      content: `### Struktur på en pitch

**1. Fang oppmerksomheten (Hook)**
- Start sterkt - du har 10 sekunder
- En overraskende statistikk, et spørsmål, en historie
- "Visste du at nordmenn kaster 400 000 tonn mat hvert år?"

**2. Problemet**
- Hvilket problem løser du?
- Gjør det konkret og relaterbart
- Vis at det er stort nok til å bry seg om

**3. Løsningen**
- Hva er din løsning?
- Hvordan fungerer det?
- Demonstrer hvis mulig

**4. Markedet**
- Hvem er kundene?
- Hvor stort er markedet?
- Hvorfor nå?`,
    },
    {
      id: 'salg-service-vg1-8-5-text-3',
      type: 'text',
      content: `### Struktur på en pitch (fortsettelse)

**5. Forretningsmodellen**
- Hvordan tjener dere penger?
- Hva koster det å skaffe en kunde?
- Hva er livstidsverdien av en kunde?

**6. Konkurranse og differensiering**
- Hvem er konkurrentene?
- Hva gjør deg bedre/annerledes?
- Hva er din "unfair advantage"?

**7. Teamet**
- Hvem står bak?
- Hvorfor er dere rett team?
- Kompetanse og erfaring

**8. Fremdrift og plan**
- Hva har dere oppnådd så langt?
- Hva er neste steg?
- Hva trenger dere for å lykkes?

**9. "The Ask"**
- Hva ber dere om? (penger, partnerskap, råd)
- Vær konkret
- Forklar hva det skal brukes til`,
    },
    {
      id: 'salg-service-vg1-8-5-tip-1',
      type: 'tip',
      title: 'Historiefortelling',
      content: `Mennesker husker historier bedre enn fakta. Start med en konkret person med et konkret problem ("Min bestemor bor alene og..."), vis hvordan løsningen din hjelper dem, og avslutt med visjonen. Fakta og tall støtter historien, de erstatter den ikke.`,
    },
    {
      id: 'salg-service-vg1-8-5-text-4',
      type: 'text',
      content: `### Presentasjonsteknikker

**Visuelt:**
- Enkle slides med lite tekst
- Ett budskap per slide
- Bilder og grafikk > tekst
- Lesbar skrift

**Verbalt:**
- Snakk tydelig og med energi
- Varier tempo og volum
- Pause for effekt
- Øv, øv, øv

**Kroppsspråk:**
- Øyekontakt med tilhørerne
- Åpent kroppsspråk
- Bruk hendene naturlig
- Ikke stå bak PC-en

**Håndtere spørsmål:**
- Lytt til hele spørsmålet
- Svar kort og konkret
- Det er OK å si "godt spørsmål, det må vi undersøke"`,
    },
    {
      id: 'salg-service-vg1-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Heispitch',
      problem: 'Lag en 30-sekunders heispitch for en app som reduserer matsvinn.',
      solution: `**Heispitch:**

"Hvert år kaster norske husholdninger mat verdt 20 milliarder kroner. Tenk deg en app der du scanner matvarene i kjøleskapet, og den foreslår oppskrifter basert på det som snart går ut. Vi hjelper familier spare penger og miljøet. Vi har allerede 5000 brukere i piloten, og søker nå en partner for å skalere nasjonalt. Kan vi ta en kaffe?"

**Elementer:**
- Hook: Statistikk om matsvinn
- Problem: Mat kastes
- Løsning: App som foreslår oppskrifter
- Traction: 5000 brukere
- Ask: Møte/partner`,
    },
    {
      id: 'salg-service-vg1-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'Hva bør du starte en pitch med?',
        options: [
          { id: 'a', text: 'Detaljert forretningsmodell', isCorrect: false },
          { id: 'b', text: 'Noe som fanger oppmerksomheten', isCorrect: true },
          { id: 'c', text: 'Teamets CV-er', isCorrect: false },
          { id: 'd', text: 'Finansielle prognoser', isCorrect: false },
        ],
        solution: 'Du bør starte med en "hook" som fanger oppmerksomheten - en overraskende statistikk, et spørsmål, eller en relaterbar historie. Du har bare sekunder på å fange interessen.',
      },
    },
    {
      id: 'salg-service-vg1-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-5-ex-2',
        number: '8.5.2',
        type: 'classic',
        task: 'Hva er en heispitch, og når bruker du den?',
        hints: ['Tenk på hvor kort den må være'],
        solution: 'En heispitch er en 30-60 sekunders pitch - så kort at du kan si den på en heistur. Den inneholder kjernebudskapet: problemet, løsningen, og hva du trenger. Du bruker den ved nettverksarrangementer, tilfeldige møter, eller når noen spør "hva driver du med?". Målet er å vekke interesse slik at personen vil høre mer.',
      },
    },
    {
      id: 'salg-service-vg1-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        task: 'Nevn de viktigste delene en pitch bør inneholde (minst fem).',
        solution: '1) Hook - noe som fanger oppmerksomheten. 2) Problemet - hva løser du. 3) Løsningen - hvordan du løser det. 4) Markedet - hvem er kundene og hvor stort er det. 5) Forretningsmodellen - hvordan du tjener penger. 6) Teamet - hvem står bak. 7) Fremdrift - hva har dere oppnådd. 8) "The Ask" - hva ber du om.',
      },
    },
    {
      id: 'salg-service-vg1-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Skriv en heispitch (max 60 ord) for en tjeneste som leverer ferdigpakkede piknik-kurver.',
        solution: 'Eksempel: "Nordmenn elsker piknik, men hvem har tid til å planlegge? Vi leverer ferdigpakkede piknik-kurver med lokal mat, drikke og utstyr - bestilt via app, levert på valgt sted. Perfekt for spontane parkdager og romantiske overraskelser. Vi har solgt 200 kurver på én måned i Oslo. Nå søker vi investering for å lansere i Bergen og Trondheim."',
      },
    },
    {
      id: 'salg-service-vg1-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        task: 'Gi tre tips for god presentasjonsteknikk.',
        solution: '1) Øyekontakt - se på tilhørerne, ikke på slides eller notater. Det bygger tillit og kontakt. 2) Energi og variasjon - snakk med entusiasme, varier tempo og volum, bruk pauser for effekt. 3) Enkle slides - lite tekst, ett budskap per slide, bilder > tekst. Slides støtter deg, de skal ikke leses opp. 4) Øv mange ganger - jo bedre du kan materialet, jo mer avslappet blir du.',
      },
    },
    {
      id: 'salg-service-vg1-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Pitch** er en kort, overbevisende presentasjon av en forretningsidé
- **Ulike formater:** Heispitch, kort pitch, full pitch
- **Struktur:** Hook, problem, løsning, marked, modell, team, ask
- **Teknikk:** Historiefortelling, øyekontakt, energi, enkle slides

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Pitch | Kort, overbevisende presentasjon |
| Hook | Åpning som fanger oppmerksomhet |
| The Ask | Det du ber om til slutt |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.6: Prosjektarbeid og samarbeid
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_8_6: TextbookChapter = {
  id: 'salg-service-vg1-8-6',
  courseId: 'salg-service-vg1',
  chapterNumber: '8.6',
  title: 'Prosjektarbeid og samarbeid',
  description: 'Du lærer å planlegge, gjennomføre og vurdere prosjekter. Kapittelet dekker prosjektledelse, teamarbeid, verktøy og metoder for effektivt samarbeid.',
  estimatedMinutes: 45,
  competenceGoals: ['planlegge, gjennomføre og vurdere et prosjekt'],
  content: [
    {
      id: 'salg-service-vg1-8-6-intro',
      type: 'text',
      content: `## Fra plan til resultat

Å ha en god idé er én ting - å gjennomføre den er noe helt annet. De fleste forretningsideer realiseres gjennom prosjekter, og de fleste prosjekter krever at flere mennesker samarbeider. I dette kapittelet lærer du metodene og verktøyene for å lykkes.

I dette kapittelet skal du lære:
- Hva et prosjekt er og prosjektfaser
- Hvordan planlegge og styre et prosjekt
- Effektivt teamarbeid
- Verktøy for prosjektledelse`,
    },
    {
      id: 'salg-service-vg1-8-6-def-1',
      type: 'definition',
      title: 'Prosjekt',
      content: `Et **prosjekt** er en tidsavgrenset innsats for å skape et unikt produkt, tjeneste eller resultat. Det har en definert start og slutt, klare mål, og tildelte ressurser (tid, penger, mennesker).`,
    },
    {
      id: 'salg-service-vg1-8-6-text-1',
      type: 'text',
      content: `### Prosjektfaser

**1. Initiering**
- Definere hva prosjektet skal oppnå
- Avklare ressurser og begrensninger
- Bestemme hvem som er med
- Lage prosjektmandat

**2. Planlegging**
- Bryte ned målet i oppgaver
- Estimere tid og ressurser
- Sette milepæler
- Fordele ansvar
- Identifisere risiko

**3. Gjennomføring**
- Utføre oppgavene
- Koordinere teamet
- Følge opp fremdrift
- Håndtere endringer

**4. Avslutning**
- Levere resultatet
- Evaluere prosjektet
- Dokumentere læring
- Feire suksess`,
    },
    {
      id: 'salg-service-vg1-8-6-text-2',
      type: 'text',
      content: `### Planleggingsverktøy

**Mål og delmål:**
- SMART-mål: Spesifikt, Målbart, Akseptert, Realistisk, Tidsbegrenset
- Bryt ned store mål i mindre delmål
- Ha klare suksesskriterier

**Oppgaveliste:**
- List alle oppgaver som må gjøres
- Estimer tid for hver oppgave
- Sett avhengigheter (hva må gjøres først?)
- Fordel ansvar

**Gantt-diagram:**
- Visualiserer oppgaver over tid
- Viser overlapp og avhengigheter
- Tydeliggjør tidsplan

**Milepæler:**
- Viktige punkter i prosjektet
- Målbare leveranser
- Mulighet for evaluering underveis`,
    },
    {
      id: 'salg-service-vg1-8-6-text-3',
      type: 'text',
      content: `### Effektivt teamarbeid

**Rollefordeling:**
- Tydelig hvem som gjør hva
- Utnytte styrker
- Unngå overlapp og huller
- Én person med overordnet ansvar

**Kommunikasjon:**
- Avtal hvordan dere kommuniserer
- Faste møter (ikke for mange)
- Delte dokumenter
- Raskt svar på spørsmål

**Konflikthåndtering:**
- Uenighet er normalt og kan være positivt
- Ta opp problemer tidlig
- Fokuser på sak, ikke person
- Finn løsninger sammen

**Motivasjon:**
- Felles mål alle er enige om
- Feire fremskritt
- Anerkjenn innsats
- Støtt hverandre ved motgang`,
    },
    {
      id: 'salg-service-vg1-8-6-tip-1',
      type: 'tip',
      title: 'Start møter med status',
      content: `Begynn teammøter med at alle gir en kort status: Hva har jeg gjort siden sist? Hva skal jeg gjøre til neste gang? Er det noe som blokkerer meg? Dette holder alle oppdatert og avdekker problemer tidlig.`,
    },
    {
      id: 'salg-service-vg1-8-6-text-4',
      type: 'text',
      content: `### Digitale verktøy

**Prosjektstyring:**
- Trello, Asana, Monday.com
- Oppgavelister, tildelinger, frister
- Visualisering av fremdrift

**Kommunikasjon:**
- Slack, Microsoft Teams
- Chat, video, fildeling
- Kanaler for ulike temaer

**Dokumenter:**
- Google Docs, Microsoft 365
- Samskriving i sanntid
- Versjonskontroll

**Tidsstyring:**
- Kalender-apper
- Tidssporing
- Påminnelser

**Tips for digitalt samarbeid:**
- Avtal hvilke verktøy dere bruker
- Ikke for mange verktøy
- Hold ting oppdatert
- Svar innen rimelig tid`,
    },
    {
      id: 'salg-service-vg1-8-6-example-1',
      type: 'example',
      title: 'Eksempel: Prosjektplan for lansering av nettbutikk',
      problem: 'Et team på tre skal lansere en nettbutikk om 8 uker.',
      solution: `**Mål:** Lansere fungerende nettbutikk med 20 produkter innen 8 uker

**Team:**
- Sara: Prosjektleder, markedsføring
- Ole: Teknisk, nettside
- Lise: Produkter, leverandører

**Hovedoppgaver og milepæler:**
- Uke 1-2: Planlegging og oppsett
  - Milepæl: Nettside-plattform valgt
- Uke 3-4: Produktutvalg og design
  - Milepæl: 20 produkter klare
- Uke 5-6: Bygging av nettside
  - Milepæl: Nettside ferdig for testing
- Uke 7: Testing og justering
  - Milepæl: Alt fungerer
- Uke 8: Lansering og markedsføring
  - Milepæl: Nettbutikken er åpen!

**Kommunikasjon:**
- Trello for oppgaver
- Slack for daglig chat
- Ukentlig videomøte mandager kl 10

**Risiko:**
- Leverandør forsinket → Ha backup-leverandør
- Tekniske problemer → Ole har kontakt med ekspert`,
    },
    {
      id: 'salg-service-vg1-8-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-6-ex-1',
        number: '8.6.1',
        type: 'multiple-choice',
        task: 'Hva står SMART for i SMART-mål?',
        options: [
          { id: 'a', text: 'Simpelt, Målbart, Attraktivt, Raskt, Trygt', isCorrect: false },
          { id: 'b', text: 'Spesifikt, Målbart, Akseptert, Realistisk, Tidsbegrenset', isCorrect: true },
          { id: 'c', text: 'Strategisk, Motiverende, Ambisiøst, Riktig, Tydelig', isCorrect: false },
          { id: 'd', text: 'Stort, Meningsfullt, Avansert, Risikabelt, Teknisk', isCorrect: false },
        ],
        solution: 'SMART står for Spesifikt (konkret), Målbart (kan måles), Akseptert (teamet er enig), Realistisk (mulig å oppnå), og Tidsbegrenset (har en frist).',
      },
    },
    {
      id: 'salg-service-vg1-8-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-6-ex-2',
        number: '8.6.2',
        type: 'classic',
        task: 'Hva er en milepæl i prosjektsammenheng?',
        hints: ['Tenk på viktige punkter underveis'],
        solution: 'En milepæl er et viktig punkt i prosjektet der noe målbart skal være oppnådd. For eksempel "prototype ferdig" eller "første kunde signert". Milepæler hjelper med å måle fremgang, gir mulighet for evaluering underveis, og motiverer teamet ved å dele opp prosjektet i mindre, håndterbare deler.',
      },
    },
    {
      id: 'salg-service-vg1-8-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-6-ex-3',
        number: '8.6.3',
        type: 'classic',
        task: 'Beskriv de fire hovedfasene i et prosjekt.',
        solution: '1) Initiering - definere mål, avklare ressurser, bestemme team, lage mandat. 2) Planlegging - bryte ned i oppgaver, estimere tid, sette milepæler, fordele ansvar, identifisere risiko. 3) Gjennomføring - utføre oppgavene, koordinere team, følge opp fremdrift, håndtere endringer. 4) Avslutning - levere resultat, evaluere, dokumentere læring, feire.',
      },
    },
    {
      id: 'salg-service-vg1-8-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-6-ex-4',
        number: '8.6.4',
        type: 'classic',
        task: 'Dere er en gruppe på fire som skal lage en presentasjon. Lag en enkel prosjektplan med oppgaver, ansvar og tidsplan.',
        solution: 'Mål: Ferdig 10-minutters presentasjon om bærekraft om 2 uker. Oppgaver: 1) Research (alle, uke 1). 2) Lage disposisjon (person A, dag 4). 3) Skrive innhold (alle, uke 1-2). 4) Lage slides (person B, uke 2). 5) Øve presentasjon (alle, dag 10-13). 6) Holde presentasjon (dag 14). Møter: Kick-off dag 1, statusmøte dag 7, øving dag 12. Milepæler: Disposisjon dag 4, første utkast dag 9, ferdig dag 13.',
      },
    },
    {
      id: 'salg-service-vg1-8-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-6-ex-5',
        number: '8.6.5',
        type: 'classic',
        task: 'Gi tre tips for å unngå eller løse konflikter i et prosjektteam.',
        solution: '1) Ha tydelig rollefordeling fra starten - da vet alle hva de har ansvar for og hva de ikke har. 2) Ta opp problemer tidlig - ikke la små irritasjoner vokse seg store. 3) Fokuser på sak, ikke person - kritiser ideen, ikke mennesket. 4) Lytt aktivt til alle synspunkter før du konkluderer. 5) Finn kompromisser der alle får noe.',
      },
    },
    {
      id: 'salg-service-vg1-8-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Prosjektfaser:** Initiering, planlegging, gjennomføring, avslutning
- **SMART-mål** gir klare, målbare mål
- **Teamarbeid** krever tydelige roller, god kommunikasjon og konflikthåndtering
- **Digitale verktøy** som Trello og Slack støtter samarbeid

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Prosjekt | Tidsavgrenset innsats for et mål |
| Milepæl | Viktig punkt med målbar leveranse |
| SMART-mål | Mål som er spesifikke, målbare, osv. |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.7: Teknologi og fremtidens servicenæring
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_8_7: TextbookChapter = {
  id: 'salg-service-vg1-8-7',
  courseId: 'salg-service-vg1',
  chapterNumber: '8.7',
  title: 'Teknologi og fremtidens servicenæring',
  description: 'Du lærer om hvordan teknologi endrer servicenæringen og hvilke muligheter og utfordringer det skaper. Kapittelet dekker digitalisering, automatisering, kunstig intelligens og fremtidens jobbmarked.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke digitale verktøy i arbeidet med en forretningsidé'],
  content: [
    {
      id: 'salg-service-vg1-8-7-intro',
      type: 'text',
      content: `## Servicenæringen i endring

Teknologi endrer hvordan vi handler, reiser og opplever service. Noen frykter at roboter tar jobbene, andre ser enorme muligheter. Sannheten er at teknologi vil endre servicenæringen dramatisk - og de som forstår endringen, vil kunne utnytte den.

I dette kapittelet skal du lære:
- Hvordan digitalisering endrer servicenæringen
- Kunstig intelligens og automatisering
- Fremtidens kompetansebehov
- Hvordan forberede seg på endring`,
    },
    {
      id: 'salg-service-vg1-8-7-def-1',
      type: 'definition',
      title: 'Digitalisering',
      content: `**Digitalisering** er å ta i bruk digital teknologi for å endre forretningsmodeller, prosesser og kundeopplevelser. Det handler ikke bare om å gjøre analoge ting digitalt, men om å finne helt nye måter å skape verdi på.`,
    },
    {
      id: 'salg-service-vg1-8-7-text-1',
      type: 'text',
      content: `### Digitalisering i servicenæringen

**Handel:**
- Netthandel og omnichannel
- Selvbetjente kasser
- Virtuelle prøverom
- Personaliserte anbefalinger

**Hotell og reiseliv:**
- Booking-apper og prissammenligning
- Digitale nøkler og selvinnsjekking
- Chatbots for kundeservice
- VR-omvisninger før bestilling

**Restaurant:**
- Bestilling via app
- Matleveringstjenester
- Digitale menyer og betaling
- Kjøkkenroboter

**Bank og finans:**
- Mobilbank og Vipps
- Automatisert rådgivning
- Blokkjede og kryptovaluta
- Ansiktssgjenkjenning for betaling`,
    },
    {
      id: 'salg-service-vg1-8-7-def-2',
      type: 'definition',
      title: 'Kunstig intelligens (KI)',
      content: `**Kunstig intelligens** er datasystemer som kan utføre oppgaver som normalt krever menneskelig intelligens - som å forstå språk, gjenkjenne mønstre, ta beslutninger og lære av erfaring. KI brukes allerede i chatbots, anbefalingssystemer og automatisert kundeservice.`,
    },
    {
      id: 'salg-service-vg1-8-7-text-2',
      type: 'text',
      content: `### KI og automatisering i service

**Chatbots og virtuell kundeservice:**
- Svarer på vanlige spørsmål 24/7
- Kan håndtere enkle bestillinger og klager
- Menneskelig kundeservice for komplekse saker

**Personalisering:**
- "Folk som kjøpte dette, kjøpte også..."
- Tilpassede tilbud basert på atferd
- Dynamisk prising

**Automatiserte prosesser:**
- Roboter i lager og logistikk
- Automatisert bokføring og fakturering
- Smarte bestillingssystemer

**Prediktiv analyse:**
- Forutsi etterspørsel
- Identifisere kunder som kan forsvinne
- Optimalisere bemanning`,
    },
    {
      id: 'salg-service-vg1-8-7-text-3',
      type: 'text',
      content: `### Hva skjer med jobbene?

**Jobber som endres:**
- Rutineoppgaver automatiseres
- Nye oppgaver krever ny kompetanse
- Mennesker gjør det teknologi ikke kan

**Jobber som forsvinner:**
- Enkle, repetitive oppgaver
- Datainnsamling og -behandling
- Noe kundeservice

**Jobber som oppstår:**
- Teknologi-utvikling og -vedlikehold
- Data-analyse og innsikt
- Kundekontakt som krever empati
- Kreative oppgaver

**Hva mennesker gjør best:**
- Empati og emosjonell støtte
- Kompleks problemløsning
- Kreativitet og innovasjon
- Etiske vurderinger
- Bygge relasjoner`,
    },
    {
      id: 'salg-service-vg1-8-7-tip-1',
      type: 'tip',
      title: 'Livslang læring',
      content: `Den viktigste ferdigheten i fremtiden er evnen til å lære nye ting. Teknologi endrer seg raskt, og det du lærer i dag kan være utdatert om 10 år. Vær nysgjerrig, prøv nye verktøy, og se på endring som en mulighet, ikke en trussel.`,
    },
    {
      id: 'salg-service-vg1-8-7-text-4',
      type: 'text',
      content: `### Fremtidskompetanse

**Digital kompetanse:**
- Forstå digitale verktøy
- Kunne lære nye systemer raskt
- Grunnleggende forståelse av data

**Sosiale ferdigheter:**
- Kommunikasjon og samarbeid
- Empati og kundeforståelse
- Ledelse og motivasjon

**Problemløsning:**
- Kritisk tenkning
- Kreativitet
- Tilpasningsevne

**Fagkompetanse:**
- Dyp kunnskap i ditt felt
- Kombinasjon av fag og teknologi
- Spesialisering + bredde`,
    },
    {
      id: 'salg-service-vg1-8-7-example-1',
      type: 'example',
      title: 'Eksempel: AI i kundeservice',
      problem: 'En nettbutikk mottar 1000 kundehenvendelser daglig og sliter med å svare raskt nok.',
      solution: `**Situasjon før:**
- Lang ventetid for kunder
- Ansatte svarer på samme spørsmål om og om igjen
- Høye kostnader til kundeservice

**Løsning med KI:**
1. Chatbot på nettside svarer på vanlige spørsmål
   - "Hvor er pakken min?" → Kobles til sporingssystem
   - "Hvordan returnerer jeg?" → Viser steg-for-steg guide
2. E-post sorteres automatisk etter type
3. Komplekse saker sendes til mennesker med all info samlet

**Resultat:**
- 60% av henvendelser løses av chatbot
- Ventetid redusert fra 24 timer til 2 timer
- Ansatte fokuserer på komplekse saker der de gjør forskjell
- Kundene er mer fornøyde

**Menneskelig rolle:**
Kundeservice-ansatte håndterer nå kunder som er frustrerte, har komplekse problemer, eller trenger empati - ting chatboten ikke kan.`,
    },
    {
      id: 'salg-service-vg1-8-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-7-ex-1',
        number: '8.7.1',
        type: 'multiple-choice',
        task: 'Hva gjør mennesker bedre enn maskiner i kundeservice?',
        options: [
          { id: 'a', text: 'Svare på vanlige spørsmål', isCorrect: false },
          { id: 'b', text: 'Jobbe 24/7', isCorrect: false },
          { id: 'c', text: 'Vise empati og håndtere komplekse følelser', isCorrect: true },
          { id: 'd', text: 'Huske all produktinformasjon', isCorrect: false },
        ],
        solution: 'Mennesker er bedre enn maskiner på empati, emosjonell støtte, og håndtering av komplekse situasjoner der kunden er frustrert eller har unike behov. Maskiner kan svare raskt på standardspørsmål, men mangler genuin forståelse.',
      },
    },
    {
      id: 'salg-service-vg1-8-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-7-ex-2',
        number: '8.7.2',
        type: 'classic',
        task: 'Hva er forskjellen mellom digitisering og digitalisering?',
        hints: ['Tenk på omfanget av endringen'],
        solution: 'Digitisering er å gjøre noe analogt digitalt - for eksempel skanne papirdokumenter til PDF. Digitalisering er å bruke digital teknologi til å endre måten man jobber eller skaper verdi på - for eksempel gå fra fysisk butikk til nettbutikk med helt ny forretningsmodell. Digitalisering er mer omfattende og transformerende.',
      },
    },
    {
      id: 'salg-service-vg1-8-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-7-ex-3',
        number: '8.7.3',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan teknologi har endret hotellbransjen.',
        solution: '1) Booking-nettsider og apper som lar gjester sammenligne priser og bestille direkte. 2) Digitale nøkler og selvinnsjekking via app - gjesten trenger ikke gå til resepsjonen. 3) Chatbots som svarer på spørsmål om hotellet 24/7. 4) Personaliserte anbefalinger basert på tidligere opphold. 5) VR-omvisninger så gjester kan "se" rommet før bestilling.',
      },
    },
    {
      id: 'salg-service-vg1-8-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-7-ex-4',
        number: '8.7.4',
        type: 'classic',
        task: 'Hvilke ferdigheter tror du blir viktigst i fremtidens servicenæring? Begrunn svaret.',
        solution: '1) Evne til å lære nye ting - teknologien endres raskt. 2) Sosiale ferdigheter og empati - dette kan ikke automatiseres. 3) Problemløsning og kreativitet - finne løsninger på nye utfordringer. 4) Digital kompetanse - forstå og bruke nye verktøy. 5) Tilpasningsevne - være fleksibel når ting endres. Begrunnelse: Rutineoppgaver automatiseres, så mennesker må gjøre det maskiner ikke kan.',
      },
    },
    {
      id: 'salg-service-vg1-8-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-8-7-ex-5',
        number: '8.7.5',
        type: 'classic',
        task: 'Du starter en liten kafé. Beskriv tre måter du kan bruke teknologi for å forbedre driften eller kundeopplevelsen.',
        solution: '1) Bestillings-app: Kundene bestiller og betaler på forhånd, og henter ferdig kaffe uten kø. 2) Lojalitetsprogram: Digital stempling i app, med personaliserte tilbud basert på hva kunden pleier å bestille. 3) Sosiale medier og digital markedsføring: Instagram for å vise frem produkter, annonsering til folk i nærområdet. 4) Automatisert lagerstyring: System som varsler når du er tom for ingredienser og kanskje automatisk bestiller.',
      },
    },
    {
      id: 'salg-service-vg1-8-7-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Digitalisering** endrer hvordan servicebedrifter opererer og skaper verdi
- **KI og automatisering** tar over rutineoppgaver, mennesker gjør det maskiner ikke kan
- **Fremtidskompetanse** inkluderer digital kompetanse, sosiale ferdigheter og tilpasningsevne
- **Livslang læring** er nøkkelen til å holde seg relevant

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Digitalisering | Bruke teknologi til å endre verdiskaping |
| Kunstig intelligens | Systemer som utfører "intelligente" oppgaver |
| Automatisering | Maskiner utfører oppgaver automatisk |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SALG_SERVICE_VG1_DEL8_CHAPTERS = [
  CHAPTER_SALG_SERVICE_VG1_8_1,
  CHAPTER_SALG_SERVICE_VG1_8_2,
  CHAPTER_SALG_SERVICE_VG1_8_3,
  CHAPTER_SALG_SERVICE_VG1_8_4,
  CHAPTER_SALG_SERVICE_VG1_8_5,
  CHAPTER_SALG_SERVICE_VG1_8_6,
  CHAPTER_SALG_SERVICE_VG1_8_7,
];
