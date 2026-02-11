/* eslint-disable */
// @ts-nocheck

/**
 * Sikkerhetsfag - Del 4: Adgangskontroll og overvaking
 * Kapittel 4.1-4.5
 *
 * Dekker LK20 kompetansemaal:
 * - gjennomfore adgangskontroll og overvaking i trad med regelverk og virksomhetens rutiner
 * - planlegge og gjennomfore rondering og patruljering
 * - ivareta personvern i samsvar med gjeldende lovverk
 * - haandtere mottak av besoekende og leveranser i trad med virksomhetens prosedyrer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Adgangskontrollsystemer
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_4_1: TextbookChapter = {
  id: 'sikkerhetsfag-4-1',
  courseId: 'sikkerhetsfag',
  chapterNumber: '4.1',
  title: 'Adgangskontrollsystemer',
  description: 'En innforing i ulike adgangskontrollsystemer som kortlesere, biometriske losninger, kodetastatur og soneinndeling. Du laerer hvordan systemer fungerer, hvordan de kombineres og hvordan man sikrer at kun autorisert personell far tilgang til beskyttede omrader.',
  estimatedMinutes: 20,
  competenceGoals: ['gjennomfore adgangskontroll og overvaking i trad med regelverk og virksomhetens rutiner'],
  content: [
    {
      id: 'sik-4-1-intro',
      type: 'text',
      content: `## Kontroll med hvem som kommer inn

Adgangskontroll handler om a regulere hvem som far tilgang til et omrade, et bygg eller en informasjonsressurs. For en vekter eller sikkerhetsmedarbeider er dette en av de viktigste oppgavene i hverdagen.

I dette kapittelet skal du laere:
- Hva adgangskontroll er og hvorfor det er viktig
- Ulike typer adgangskontrollsystemer
- Hvordan soner og sikkerhetsnivaer fungerer
- Kombinasjon av fysiske og elektroniske tiltak`,
    },
    {
      id: 'sik-4-1-def-1',
      type: 'definition',
      title: 'Adgangskontroll',
      content: `**Adgangskontroll** er tiltak og systemer som begrenser og styrer tilgang til bygninger, omrader, rom eller informasjon. Formalet er a sikre at kun autoriserte personer far adgang til omrader der de har rett til a vaere.`,
    },
    {
      id: 'sik-4-1-text-1',
      type: 'text',
      content: `### Hvorfor er adgangskontroll viktig?

Adgangskontroll beskytter mot flere typer trusler:

**Forebygging av tyveri og innbrudd:**
- Hindrer uvedkommende fra a ta seg inn i bygninger
- Beskytter verdifulle eiendeler, utstyr og varer
- Reduserer svinn og internt tyveri

**Personlig sikkerhet:**
- Holder uonsket personell utenfor sensitive omrader
- Beskytter ansatte og besoekende
- Muliggjor evakueringsoversikt ved brann eller ulykke

**Informasjonssikkerhet:**
- Sikrer serverrom og datasentre
- Beskytter konfidensiell dokumentasjon
- Forhindrer industrispionasje

**Lovkrav og forsikring:**
- Mange bransjer har krav til adgangskontroll
- Forsikringsselskaper stiller krav til sikring
- Personvernlovgivningen krever beskyttelse av persondata`,
    },
    {
      id: 'sik-4-1-text-2',
      type: 'text',
      content: `### Typer adgangskontrollsystemer

**1. Kortleser og adgangskort**
Adgangskort med RFID-brikke eller magnetstripe er den vanligste formen for elektronisk adgangskontroll. Kortet holdes opp mot en leser som verifiserer om brukeren har rettigheter.

Fordeler:
- Enkelt a administrere
- Kan sperre og aktivere kort raskt
- Logger hvem som har vaert hvor

Ulemper:
- Kort kan mistes eller stjeles
- Gir ikke sikker identifikasjon av personen
- Krever at ansatte husker kortet

**2. Kodetastatur (PIN-kode)**
Brukeren taster inn en personlig kode for a fa tilgang. Kan brukes alene eller i kombinasjon med kort.

Fordeler:
- Ingen fysisk gjenstand som kan mistes
- Enkelt system a installere
- Relativt lav kostnad

Ulemper:
- Koder kan glemmes eller deles
- Noen bruker enkle koder som er lette a gjette
- Skuldersurf - noen kan se koden din

**3. Biometriske systemer**
Bruker unike kroppslige kjennetegn for a identifisere en person.

Vanlige biometriske metoder:
- Fingeravtrykk - mest utbredt og kostnadseffektivt
- Irisgjenkjenning - svart hoy sikkerhet
- Ansiktsgjenkjenning - praktisk, men kan utfordres
- Handgeometri - brukes i hoyrisikoomrader
- Stemmegjenkjenning - brukes mest for telefonsystemer

Fordeler:
- Kan ikke mistes eller glemmes
- Svart vanskelig a forfalske
- Unik identifikasjon av personen

Ulemper:
- Hoye kostnader for utstyr
- Personvernhensyn og motstand hos ansatte
- Kan svikte ved skader eller endringer pa kroppen

**4. Mekaniske laselosninger**
Tradisjonelle nokler og laser er fortsatt utbredt:
- Sylinderlaser i ulike sikkerhetsklasser
- Hovednokkel-systemer for drift og vedlikehold
- Hengelaser for porter og skap`,
    },
    {
      id: 'sik-4-1-def-2',
      type: 'definition',
      title: 'Tofaktorautentisering',
      content: `**Tofaktorautentisering** (2FA) er en sikkerhetsmetode der brukeren ma bevise sin identitet med to ulike faktorer: noe du **har** (kort, nokkelbrikke), noe du **vet** (PIN-kode, passord), eller noe du **er** (fingeravtrykk, iris). Kombinasjonen gir vesentlig hoyere sikkerhet enn en enkelt faktor.`,
    },
    {
      id: 'sik-4-1-text-3',
      type: 'text',
      content: `### Soner og sikkerhetsnivaer

Et bygg eller omrade deles ofte inn i soner med ulike sikkerhetsnivaer:

**Sone 1 - Offentlig omrade**
- Lobby, resepsjon, felles uteomrade
- Apent for alle, men overvakt
- Eksempel: Inngangspartiet pa et kjopesenter

**Sone 2 - Kontrollert omrade**
- Omrade med begrenset tilgang
- Krever adgangskort eller registrering
- Eksempel: Kontorlandskap, produksjonslokaler

**Sone 3 - Begrenset omrade**
- Kun for spesielt autorisert personell
- Tofaktorautentisering anbefales
- Eksempel: Serverrom, arkivrom med sensitive dokumenter

**Sone 4 - Hoysikkerhetsomrade**
- Strengeste tilgang, ofte med logging og overvaking
- Biometrisk kontroll og personlig godkjenning
- Eksempel: Pengehvelv, forskningslaboratorier, militaere anlegg

Overgangen mellom soner markeres gjerne med fysiske barrierer som dorer, porter, sluser eller dreiesperrer.`,
    },
    {
      id: 'sik-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Soneinndeling pa et sykehus',
      problem: 'Et sykehus skal innfore ny soneinndeling for bedre sikkerhet.',
      solution: `**Sone 1 - Offentlig:**
- Hovedinngang og vestibyle
- Kafeteria og kiosk
- Venteareal og informasjonsskranke

**Sone 2 - Kontrollert:**
- Sengepost med kortleser ved inngangen
- Poliklinikker med innsjekking
- Kontorer for administrasjon

**Sone 3 - Begrenset:**
- Operasjonsstuer med tofaktorautentisering
- Legemiddellager med logging
- Nyfodtavdeling med ekstra sikkerhet

**Sone 4 - Hoysikkerhet:**
- Serverrom for pasientjournaler
- Medisinlager med narkotiske stoffer
- Forskningslaboratorier med biologisk materiale

**Tiltak mellom sonene:**
- Sone 1 til 2: Adgangskort
- Sone 2 til 3: Kort + PIN-kode
- Sone 3 til 4: Kort + fingeravtrykk + PIN`,
    },
    {
      id: 'sik-4-1-text-4',
      type: 'text',
      content: `### Drift og vedlikehold av adgangskontrollsystemer

**Daglige rutiner:**
- Kontrollere at alle lesere fungerer
- Sjekke logg for uregelmessigheter
- Folge opp alarmer og avvik

**Administrasjon:**
- Opprette og deaktivere brukertilganger
- Oppdatere rettigheter ved endret rolle
- Handtere tapte eller stolne kort

**Vedlikehold:**
- Regelmessig service av utstyr
- Batteribytte i tradlose komponenter
- Oppdatering av programvare

**Dokumentasjon:**
- Foring av logg over endringer
- Oversikt over alle utstedte kort og rettigheter
- Rapportering av avvik og hendelser`,
    },
    {
      id: 'sik-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        task: 'Hva menes med tofaktorautentisering?',
        options: [
          { id: 'a', text: 'At man bruker to ulike adgangskort', isCorrect: false },
          { id: 'b', text: 'At man ma identifisere seg med to forskjellige typer faktorer, for eksempel kort og PIN-kode', isCorrect: true },
          { id: 'c', text: 'At to personer ma godkjenne tilgangen samtidig', isCorrect: false },
          { id: 'd', text: 'At systemet har to servere for ekstra sikkerhet', isCorrect: false },
        ],
        solution: 'Tofaktorautentisering betyr at man kombinerer to ulike kategorier av identifikasjon: noe du har (kort), noe du vet (kode) eller noe du er (biometri). Dette gir mye hoyere sikkerhet enn en faktor alene.',
      },
    },
    {
      id: 'sik-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-4-1-ex-2',
        number: '4.1.2',
        type: 'multiple-choice',
        task: 'Hvilken biometrisk metode er den mest utbredte og kostnadseffektive?',
        options: [
          { id: 'a', text: 'Irisgjenkjenning', isCorrect: false },
          { id: 'b', text: 'Ansiktsgjenkjenning', isCorrect: false },
          { id: 'c', text: 'Fingeravtrykk', isCorrect: true },
          { id: 'd', text: 'Stemmegjenkjenning', isCorrect: false },
        ],
        solution: 'Fingeravtrykk er den mest utbredte biometriske metoden. Teknologien er godt utviklet, relativt rimelig og gir god sikkerhet for de fleste formal.',
      },
    },
    {
      id: 'sik-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom sone 2 og sone 4 i et soneinndelingssystem. Gi eksempler pa omrader som typisk tilhorer hver sone.',
        hints: ['Tenk pa hvem som har tilgang, hvilke verdier som beskyttes, og hvilke autentiseringsmetoder som brukes'],
        solution: 'Sone 2 er et kontrollert omrade med begrenset tilgang, for eksempel kontorlandskap og produksjonslokaler. Her kreves typisk adgangskort. Sone 4 er et hoysikkerhetsomrade med strengeste tilgang, for eksempel pengehvelv, serverrom for kritiske systemer eller militaere anlegg. Her kreves gjerne biometrisk kontroll, tofaktorautentisering og personlig godkjenning. Forskjellen ligger i sikkerhetsniva, verdi pa det som beskyttes, og antall autentiseringsfaktorer.',
      },
    },
    {
      id: 'sik-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        task: 'En virksomhet vurderer a erstatte sitt gamle nokkelbaserte system med elektroniske kortlesere. Drofter fordeler og ulemper ved denne overgangen.',
        hints: ['Tenk pa sikkerhet, administrasjon, kostnader og brukeropplevelse'],
        solution: 'Fordeler med kortlesere: Enklere administrasjon - kort kan sperres digitalt uten a skifte lasesilinder. Logging av hvem som har vaert hvor og nar. Mulighet for tidsstyrt tilgang. Raskere a gi tilgang til nye ansatte. Ulemper: Hoy investeringskostnad ved installasjon. Kort kan mistes eller glemmes. Avhengighet av strom og datasystemer. Krever opplaering av ansatte. Totalt sett gir elektroniske systemer bedre kontroll og sporbarhet, men krever storre investering og mer teknisk kompetanse.',
      },
    },
    {
      id: 'sik-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-4-1-ex-5',
        number: '4.1.5',
        type: 'classic',
        task: 'Hva er skuldersurf, og hvordan kan man beskytte seg mot det ved bruk av kodetastatur?',
        solution: 'Skuldersurf er nar noen ser over skulderen din mens du taster inn en PIN-kode. Tiltak mot skuldersurf inkluderer: Bruke kroppen til a skjerme tastaturet. Vaere oppmerksom pa omgivelsene for du taster. Bytte kode regelmessig. Bruke tastatur med skjerming eller avblendet display. Kombinere PIN med andre faktorer som kort, slik at koden alene ikke er nok.',
      },
    },
    {
      id: 'sik-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-4-1-ex-6',
        number: '4.1.6',
        type: 'classic',
        task: 'Lag et forslag til soneinndeling for et kontorbygg med resepsjon, apent kontorlandskap, ledelsens kontorer, serverrom og arkiv med fortrolige dokumenter. Beskriv hvilke adgangskontrolltiltak du vil ha mellom sonene.',
        hints: ['Bruk fire soner og velg riktig autentiseringsmetode for hvert niva'],
        solution: 'Sone 1 (offentlig): Resepsjonen og venteomradet - apen for besoekende, overvakt av resepsjonist. Sone 2 (kontrollert): Apent kontorlandskap - adgangskort ved dor fra resepsjon. Sone 3 (begrenset): Ledelsens kontorer - kort pluss PIN-kode, kun ledere og sekretaerer har tilgang. Sone 4 (hoysikkerhet): Serverrom og fortrolig arkiv - kort pluss fingeravtrykk, full logging av all adgang, kun IT-ansvarlig og arkivleder har tilgang. Mellom sonene installeres dorer med automatisk las og kortleser, og alle hendelser logges sentralt.',
      },
    },
    {
      id: 'sik-4-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Adgangskontroll** regulerer hvem som far tilgang til omrader og informasjon
- **Kortlesere, koder og biometri** er de vanligste elektroniske systemene
- **Tofaktorautentisering** kombinerer to ulike identifikasjonsmetoder
- **Soneinndeling** deler omrader inn etter sikkerhetsniva

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Adgangskontroll | Tiltak som styrer hvem som far tilgang |
| Biometri | Identifikasjon basert pa kroppslige kjennetegn |
| Tofaktorautentisering | Bruk av to ulike identifikasjonstyper |
| Soneinndeling | Inndeling av omrader etter sikkerhetsniva |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Besokshandtering
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_4_2: TextbookChapter = {
  id: 'sikkerhetsfag-4-2',
  courseId: 'sikkerhetsfag',
  chapterNumber: '4.2',
  title: 'Besokshandtering',
  description: 'Hvordan virksomheter handterer besoekende pa en sikker og profesjonell mate. Du laerer om registrering, legitimasjonskontroll, eskortering og rutiner for a ivareta bade sikkerhet og gjestfrihet.',
  estimatedMinutes: 20,
  competenceGoals: ['haandtere mottak av besoekende og leveranser i trad med virksomhetens prosedyrer'],
  content: [
    {
      id: 'sik-4-2-intro',
      type: 'text',
      content: `## Besoekende - gjester eller trusler?

De fleste besoekende kommer med gode hensikter, men virksomheter ma ha systemer for a sikre at alle besok registreres og handteres korrekt. God besokshandtering balanserer sikkerhet med gjestfrihet.

I dette kapittelet skal du laere:
- Hvorfor besokshandtering er viktig
- Registrering og legitimasjonskontroll
- Regler for eskorte av besoekende
- Rutiner for ulike typer besok`,
    },
    {
      id: 'sik-4-2-def-1',
      type: 'definition',
      title: 'Besokshandtering',
      content: `**Besokshandtering** er de rutiner og prosedyrer en virksomhet har for a motta, registrere, folge opp og lose ut besoekende. Malet er a sikre at alle besok er planlagt, at besoekende er identifisert, og at de kun oppholder seg i autoriserte omrader.`,
    },
    {
      id: 'sik-4-2-text-1',
      type: 'text',
      content: `### Hvorfor er besokshandtering viktig?

**Sikkerhetsmessig:**
- Forhindrer uautorisert tilgang til sensitive omrader
- Gir oversikt over hvem som befinner seg i bygget til enhver tid
- Viktig ved evakuering - man ma vite hvem som er inne
- Forebygger tyveri, sabotasje og spionasje

**Juridisk:**
- Virksomheten har ansvar for sikkerheten til alle i bygget
- Forsikringskrav kan stille krav til besoksrutiner
- Personopplysningsloven gjelder ogsa for besoeksregistre

**Profesjonelt:**
- Gir et profesjonelt forsteinntryk
- Viser at virksomheten tar sikkerhet pa alvor
- Sikrer at besoekende far god service`,
    },
    {
      id: 'sik-4-2-text-2',
      type: 'text',
      content: `### Registrering av besoekende

En god registreringsprosess inneholder folgende steg:

**1. Forhåndsregistrering**
- Vertspersonen melder inn besoket pa forhand
- Besoekende far bekreftelse med praktisk informasjon
- Resepsjonen er forberedt pa besoket

**2. Ankomst og identifikasjon**
- Besoekende melder seg i resepsjonen
- Fremviser gyldig legitimasjon (pass, forerkort, ID-kort)
- Navn, firma, formalet med besoket og vertsperson noteres
- Besoekende signerer besoeksprotokoll eller registreres digitalt

**3. Utstedelse av besokskort**
- Besoekende far synlig besokskort eller -oblat
- Kortet viser navn, dato og eventuelt omrade
- Ulike farger kan markere ulike rettigheter

**4. Varsling av vertsperson**
- Vertspersonen varsles om at besoekende har ankommet
- Vertspersonen henter besoekende i resepsjonen
- Besoekende skal aldri vandre rundt pa egen hand i kontrollerte soner

**5. Utsjekking**
- Besoekende leverer tilbake besokskort ved avreise
- Utsjekking registreres i systemet
- Eventuelt utstyr som er laant ut returneres`,
    },
    {
      id: 'sik-4-2-text-3',
      type: 'text',
      content: `### Eskorte av besoekende

I mange virksomheter er det krav om at besoekende eskorteres. Det betyr at en autorisert person folger den besoekende hele tiden.

**Nar er eskorte nodvendig?**
- I omrader med hoyere sikkerhetsniva (sone 2 og oppover)
- Nar besoekende ikke har sikkerhetsklarering
- Ved besok i produksjonsomrader med HMS-risiko
- Nar virksomheten har konfidensiell informasjon synlig

**Eskortens ansvar:**
- Sorge for at besoekende kun oppholder seg i avtalte omrader
- Informere om gjeldende sikkerhets- og HMS-regler
- Folge besoekende til toalett og andre fellesomrader om nodvendig
- Sorge for at besoekende sjekker ut korrekt ved avreise

**Praktiske tips for god eskorte:**
- Vaer hoyflig og imotekommende
- Ga litt foran og hold dorer
- Informer om noulgang og samlingsplass ved evakuering
- Unnga a la besoekende vaere alene i kontrollerte omrader`,
    },
    {
      id: 'sik-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Besokshandtering pa et IT-selskap',
      problem: 'Et IT-selskap med sensitive kundedata skal forbedre sine besoeksrutiner.',
      solution: `**Nye rutiner:**

1. **Forhåndsregistrering (obligatorisk):**
Alle besok meldes inn minst 24 timer for via intranett. Besoekende far e-post med parkeringsinformasjon og besoeks-ID.

2. **Ankomst:**
Besoekende scanner QR-kode fra e-post i resepsjonen. Fremviser ID. Far besokskort med RFID - gir kun tilgang til definerte omrader.

3. **Soneregler:**
- Gront besokskort: Kun resepsjon og moterom
- Gult besokskort: Kontorlandskap med eskorte
- Rodt besokskort: Serverrom - krever eskorte av IT-sjef

4. **Utsjekking:**
Kort returneres i automat. Systemet varsler vakt dersom kort ikke er returnert innen avtalt tidspunkt.

**Resultat:** Full sporbarhet, rask handtering, og sikkerhet for sensitive data.`,
    },
    {
      id: 'sik-4-2-text-4',
      type: 'text',
      content: `### Ulike typer besok

**Planlagte besok:**
- Kundemeter, leverandormeter, jobbintervjuer
- Registreres pa forhand
- Vertsperson er utpekt

**Spontane besok:**
- Uanmeldte besoekende
- Ekstra viktig med identitetskontroll
- Kontakter relevant person for godkjenning
- Kan avvises dersom ingen kan motta dem

**Handverkere og leverandorer:**
- Ma fremvise arbeidsordre og legitimasjon
- Registreres med firmainformasjon
- Far tilgang kun til relevant omrade
- Eventuelt utstyr kontrolleres inn og ut

**Myndighetstilsyn:**
- Politi, brannvesen, arbeidstilsyn
- Har lovhjemlet tilgang i mange tilfeller
- Kontakt ledelse umiddelbart
- Folg virksomhetens rutiner for myndighetskontakt`,
    },
    {
      id: 'sik-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        task: 'Hva er det forste som bor skje nar en besoekende ankommer resepsjonen?',
        options: [
          { id: 'a', text: 'De far utdelt besokskort', isCorrect: false },
          { id: 'b', text: 'De blir bedt om a fremvise gyldig legitimasjon', isCorrect: true },
          { id: 'c', text: 'De far en omvisning i bygget', isCorrect: false },
          { id: 'd', text: 'De sendes direkte til vertspersonen', isCorrect: false },
        ],
        solution: 'Identitetskontroll er det forste trinnet. Man ma bekrefte at den besoekende er den de utgir seg for a vaere, for de registreres og far tilgang til bygget.',
      },
    },
    {
      id: 'sik-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-4-2-ex-2',
        number: '4.2.2',
        type: 'multiple-choice',
        task: 'Hvorfor er det viktig a ha oversikt over besoekende i bygget?',
        options: [
          { id: 'a', text: 'For a kunne sende dem reklame etterpaa', isCorrect: false },
          { id: 'b', text: 'Kun for a tilfredsstille forsikringskrav', isCorrect: false },
          { id: 'c', text: 'For a vite hvem som er i bygget ved evakuering og for a sikre mot uautorisert tilgang', isCorrect: true },
          { id: 'd', text: 'For a kunne fakturere dem for parkeringsplass', isCorrect: false },
        ],
        solution: 'Oversikt over besoekende er avgjorende for sikkerhet. Ved brann eller annen evakuering ma man vite hvem som er i bygget. I tillegg gir det kontroll med hvem som har tilgang til virksomhetens omrader.',
      },
    },
    {
      id: 'sik-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        task: 'En person du ikke kjenner dukker opp i resepsjonen og sier at han er elektriker og skal fikse et problem i serverrommet. Han har ingen forhåndsregistrering. Hva gjor du?',
        hints: ['Tenk pa identitetskontroll, arbeidsordre og kontakt med intern kontaktperson'],
        solution: 'Forst ber du om legitimasjon og arbeidsordre fra firmaet vedkommende representerer. Kontroller at firmaet er kjent og at det faktisk er bestilt arbeid. Ring din kontaktperson i virksomheten (for eksempel driftsleder eller IT-ansvarlig) for a bekrefte oppdraget. Dersom alt stemmer, registrer besoket og sorg for eskorte til serverrommet. Dersom oppdraget ikke kan bekreftes, avvis hoyflig besoket og be vedkommende ta kontakt med sin oppdragsgiver for avklaring.',
      },
    },
    {
      id: 'sik-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        task: 'Forklar hvorfor forhåndsregistrering av besok er viktig, og beskriv hvilke opplysninger som bor registreres pa forhand.',
        solution: 'Forhåndsregistrering er viktig fordi det gir resepsjonen mulighet til a forberede seg, verifisere besokets formal og ha alt klart ved ankomst. Det gir ogsa bedre sikkerhet fordi uventede besok kan identifiseres raskere. Opplysninger som bor registreres: besoekende sitt navn og firma, vertsperson, dato og klokkeslett, formal med besoket, eventuelt antall personer og behov for spesielle tilganger. I tillegg bor besoekende fa praktisk informasjon som adresse, parkering og kontaktperson.',
      },
    },
    {
      id: 'sik-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        task: 'Hva er eskortens ansvar under et besok, og hvorfor er eskorte viktig i kontrollerte soner?',
        solution: 'Eskortens ansvar er a folge den besoekende til enhver tid, sorge for at besoekende kun oppholder seg i avtalte omrader, informere om sikkerhets- og HMS-regler, og sorge for korrekt utsjekking. Eskorte er viktig i kontrollerte soner fordi besoekende ikke har det samme kunnskaps- og sikkerhetsnivaet som ansatte. De kan utilsiktet komme til sensitive omrader, se konfidensiell informasjon, eller utgjore en HMS-risiko. Eskorte sikrer bade den besoekende og virksomheten.',
      },
    },
    {
      id: 'sik-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-4-2-ex-6',
        number: '4.2.6',
        type: 'classic',
        task: 'Lag en sjekkliste med minst atte punkter for en resepsjonist som skal handtere et forhåndsregistrert besok fra ankomst til avreise.',
        hints: ['Tenk pa alle stegene: identifikasjon, registrering, kort, eskorte, utsjekking'],
        solution: 'Sjekkliste for besokshandtering: 1) Ta imot besoekende med et smil og hilsen. 2) Be om legitimasjon og kontroller mot forhåndsregistrering. 3) Registrer besoket i det digitale systemet med navn, firma og klokkeslett. 4) Utsted besokskort med riktig tilgangsrettighet og fest synlig pa besoekende. 5) Informer om sikkerhetsregler og noudganger. 6) Varsle vertspersonen om at besoekende har ankommet. 7) Overfore ansvar til vertsperson eller sorg for eskorte. 8) Ved avreise: ta imot besokskort, registrer utsjekking i systemet. 9) Kontroller at eventuelt utlant utstyr er returnert. 10) Kvitter ut besoket og arkiver informasjonen.',
      },
    },
    {
      id: 'sik-4-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Besokshandtering** sikrer kontroll og profesjonelt mottak av gjester
- **Registrering** inkluderer forhåndsregistrering, legitimasjon og besokskort
- **Eskorte** er nodvendig i kontrollerte soner
- **Ulike besoekstyper** krever tilpassede rutiner

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Forhåndsregistrering | Besok meldes inn for ankomst |
| Besokskort | Synlig kort som viser gjestens rettigheter |
| Eskorte | Autorisert person som folger besoekende |
| Utsjekking | Registrering av avreise og retur av kort |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Patrulje og rondering
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_4_3: TextbookChapter = {
  id: 'sikkerhetsfag-4-3',
  courseId: 'sikkerhetsfag',
  chapterNumber: '4.3',
  title: 'Patrulje og rondering',
  description: 'Hvordan vektere og sikkerhetsmedarbeidere planlegger og gjennomforer ronderinger. Du laerer om ronderingsplaner, observasjonsteknikker, rapportering og hvordan patruljering forebygger uonskte hendelser.',
  estimatedMinutes: 20,
  competenceGoals: ['planlegge og gjennomfore rondering og patruljering'],
  content: [
    {
      id: 'sik-4-3-intro',
      type: 'text',
      content: `## Tilstedevaerelse som forebygging

Rondering og patruljering er blant de mest grunnleggende oppgavene for en vekter. Ved a vaere synlig til stede og systematisk kontrollere et omrade, forebygger man tyveri, haerverk, brann og andre uonskte hendelser.

I dette kapittelet skal du laere:
- Hva rondering og patruljering innebarer
- Hvordan lage og folge en ronderingsplan
- Observasjonsteknikker og oppmerksomhet
- Rapportering av funn og avvik`,
    },
    {
      id: 'sik-4-3-def-1',
      type: 'definition',
      title: 'Rondering',
      content: `**Rondering** er en systematisk kontrollrunde der en sikkerhetsmedarbeider gjennomgar et definert omrade etter en fastsatt plan. Formalet er a oppdage avvik, forebygge uonskte hendelser og sikre at alt er i orden. Rondering folger gjerne faste sjekkpunkter og dokumenteres elektronisk eller skriftlig.`,
    },
    {
      id: 'sik-4-3-text-1',
      type: 'text',
      content: `### Forskjellen mellom rondering og patruljering

**Rondering:**
- Folger en fast rute med definerte sjekkpunkter
- Gjennomfores innenfor en bygning eller et avgrenset omrade
- Tidsangitte kontrollpunkter
- Dokumenteres med elektronisk ronderingssystem (skanning av brikker)

**Patruljering:**
- Mer fleksibel bevegelse over storre omrader
- Kan vaere til fots, med bil eller sykkel
- Tilpasses situasjonen underveis
- Fokus pa synlighet og tilstedevaerelse

Begge har til felles at de handler om forebyggende sikkerhet gjennom fysisk tilstedevaerelse og observasjon.`,
    },
    {
      id: 'sik-4-3-text-2',
      type: 'text',
      content: `### Ronderingsplanen

En ronderingsplan er et dokument som beskriver:

**Rute og sjekkpunkter:**
- Hvilke omrader som skal kontrolleres
- Rekkefolgen pa sjekkpunktene
- Spesifikke punkter a kontrollere (dorer, vinduer, alarmer)
- Forventet tidsbruk mellom punktene

**Hva som skal kontrolleres:**
- Er dorer og vinduer lasst?
- Er alarmer aktivert?
- Er det tegn pa innbrudd eller haerverk?
- Fungerer belysning og tekniske systemer?
- Er brannslokkeutstyr pa plass og godkjent?
- Er romningsveier fri for hindringer?
- Er det uvanlige lukter, lyder eller synsinntrykk?

**Tidsplan:**
- Nar ronderingen skal gjennomfores
- Hvor lang tid den skal ta
- Hvor ofte den skal gjentakes

**Viktig:** Ronderingsruter bor varieres noe i tid og rekkefolge for a unnga forutsigbare monster som kan utnyttes av kriminelle.`,
    },
    {
      id: 'sik-4-3-def-2',
      type: 'definition',
      title: 'Elektronisk ronderingssystem',
      content: `Et **elektronisk ronderingssystem** bestar av ronderingsbrikker (NFC- eller RFID-tagger) plassert ved sjekkpunktene og en handholdt enhet som vekteren bruker til a registrere at hvert punkt er kontrollert. Dataene oversendes til en sentral der de logges og kan kontrolleres av oppdragsgiver.`,
    },
    {
      id: 'sik-4-3-text-3',
      type: 'text',
      content: `### Observasjonsteknikker

God observasjon er en ferdighet som kan trenes opp:

**Systematisk scanning:**
- Del omradet inn i sektorer
- Scan hvert omrade systematisk fra venstre til hoyre
- Se opp, ned og bak gjenstander
- Bruk alle sanser - syn, horsel, lukt

**Hva du ser etter:**
- Apne dorer eller vinduer som skal vaere lasst
- Skader pa laseinnretninger eller beslag
- Ukjente gjenstander eller pakker
- Vandalisering eller graffiti
- Vannlekkasjer eller fuktskader
- Branntillopstegn (lukt, varme, rok)
- Uvedkommende personer

**Nattrondering:**
- Bruk lommelykt systematisk
- La oyene tilpasse seg morket
- Vaer ekstra oppmerksom pa lyder
- Sjekk omrader med darlig belysning grundig
- Vaer bevisst pa egensikkerhet

**Vaerforhold:**
- Vind og storm kan forandre normal lydkulisse
- Sjekk at porter og dorer ikke har blast opp
- Kontroller takflater og takrenner etter kraftig vaer
- Is og sno kan skjule skader`,
    },
    {
      id: 'sik-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Nattrondering pa et industrilager',
      problem: 'En vekter skal gjennomfore nattrondering pa et stort industrilager.',
      solution: `**Ronderingsplan:**

**Punkt 1 - Uteomrade (10 min):**
- Kontroller gjerdet rundt omradet
- Sjekk at alle porter er lasst
- Se etter spor av uvedkommende
- Scan brikke ved hovedporten

**Punkt 2 - Lastebryggene (5 min):**
- Kontroller at alle porter er lukket og lasst
- Se etter tegn pa forsok pa innbrudd
- Sjekk at omradet er ryddig
- Scan brikke ved lasterampe

**Punkt 3 - Lagerhall A (10 min):**
- Kontroller inngangsdorer
- Sjekk brannslokkeutstyr
- Se etter vannlekkasjer fra taket
- Scan brikke inne i hallen

**Punkt 4 - Kontorlokaler (5 min):**
- Sjekk at alle kontordorer er lasst
- Kontroller at vinduer er lukket
- Se etter tegn pa at noen oppholder seg der
- Scan brikke ved kontorfloyen

**Punkt 5 - Teknisk rom (5 min):**
- Kontroller varme- og ventilasjonsanlegg
- Sjekk temperaturer og trykk
- Se etter lekkasjer
- Scan brikke ved teknisk rom

**Total tid:** Ca. 35 minutter
**Gjentakes:** Hver 3. time gjennom natten`,
    },
    {
      id: 'sik-4-3-text-4',
      type: 'text',
      content: `### Rapportering

All rondering skal dokumenteres grundig:

**Under ronderingen:**
- Registrer alle sjekkpunkter i elektronisk system
- Noter avvik umiddelbart
- Ta bilder av skader eller uregelmessigheter
- Meld alvorlige funn til vaktsentral med en gang

**Ronderingsrapporten skal inneholde:**
- Dato, klokkeslett og ronderingsnummer
- Hvem som gjennomforte ronderingen
- Sjekkpunkter som er kontrollert
- Eventuelle avvik og funn
- Tiltak som er iverksatt
- Vaerforhold under ronderingen

**Alvorlige funn som krever umiddelbar handling:**
- Innbrudd eller forsok pa innbrudd - ring politiet
- Brann eller branntillopstegn - ring 110 og iverksett tiltak
- Personskade - ring 113 og gi forstehjelp
- Vannlekkasje - steng hovedkran og varsle driftsansvarlig

**Mindre funn som rapporteres i rapporten:**
- Defekt belysning
- Slitasje pa utstyr
- Smarre forsoplingsproblemer
- Observasjoner om trafikk eller aktivitet`,
    },
    {
      id: 'sik-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom rondering og patruljering?',
        options: [
          { id: 'a', text: 'Rondering gjores om natten, patruljering om dagen', isCorrect: false },
          { id: 'b', text: 'Rondering folger en fast rute med sjekkpunkter, patruljering er mer fleksibel', isCorrect: true },
          { id: 'c', text: 'Rondering gjores av vektere, patruljering av politi', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell, det er to ord for det samme', isCorrect: false },
        ],
        solution: 'Rondering folger en fast, forhåndsdefinert rute med sjekkpunkter som dokumenteres elektronisk. Patruljering er mer fleksibel og tilpasses situasjonen, med fokus pa synlighet og tilstedevaerelse over storre omrader.',
      },
    },
    {
      id: 'sik-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-4-3-ex-2',
        number: '4.3.2',
        type: 'multiple-choice',
        task: 'Hvorfor bor ronderingsruter varieres noe i tid og rekkefolge?',
        options: [
          { id: 'a', text: 'For a gjore jobben mindre kjedelig for vekteren', isCorrect: false },
          { id: 'b', text: 'For a spare strom pa ronderingsutstyret', isCorrect: false },
          { id: 'c', text: 'For a unnga forutsigbare monster som kan utnyttes av kriminelle', isCorrect: true },
          { id: 'd', text: 'Fordi det er lovpalagt a endre ruten daglig', isCorrect: false },
        ],
        solution: 'Dersom ronderingen alltid folger noyaktig samme monster til noyaktig samme tid, kan kriminelle observere monsteret og utnytte tidsvinduer der vekteren ikke er til stede. Variasjon gjor det vanskeligere a forutsi vekterens bevegelser.',
      },
    },
    {
      id: 'sik-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        task: 'Du er pa nattrondering og oppdager at en dor som normalt er last star pa gloett. Det er ingen synlige tegn pa innbrudd. Hva gjor du?',
        hints: ['Tenk pa egensikkerhet, varsling og dokumentasjon'],
        solution: 'Forst ivaretas egensikkerhet - ikke ga inn alene dersom det er mistanke om at noen kan vaere inne. Meld fra til vaktsentralen om funnet. Undersok doren utvendig for tegn pa innbrudd (merker pa las, brukket karm). Dersom det ikke er tegn pa innbrudd, kan det vaere at noen har glemt a lase. Ga forsiktig inn og kontroller rommet dersom vaktsentralen godkjenner det. Las doren og dokumenter hendelsen i ronderingsrapporten med tidspunkt, sted og tiltak. Rapporter til driftsansvarlig slik at det kan folges opp med de ansatte.',
      },
    },
    {
      id: 'sik-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-4-3-ex-4',
        number: '4.3.4',
        type: 'classic',
        task: 'Beskriv hva en ronderingsplan bor inneholde, og forklar hvorfor hvert element er viktig.',
        solution: 'En ronderingsplan bor inneholde: 1) Rute og sjekkpunkter - slik at alle omrader dekkes systematisk. 2) Hva som skal kontrolleres ved hvert punkt - sikrer at ingenting overses. 3) Tidsplan med start- og slutt-tid - gjor det mulig a kontrollere at ronderingen er gjennomfort. 4) Forventet tidsbruk mellom punkter - avdekker avvik og forsinkelser. 5) Instruks for handtering av funn - sikrer riktig respons. 6) Kontaktinformasjon for nodtilfeller - rask varsling ved alvorlige hendelser. Hvert element bidrar til at ronderingen er grundig, etterproveleg og effektiv.',
      },
    },
    {
      id: 'sik-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-4-3-ex-5',
        number: '4.3.5',
        type: 'classic',
        task: 'Nevn minst fem ting du bor sjekke under en rondering i et kontorbygg, og forklar hvorfor hvert punkt er viktig.',
        solution: '1) Dorer og vinduer er lasst - forhindrer innbrudd og tyveri. 2) Brannslokkeutstyr er pa plass og godkjent - sikrer beredskap ved brann. 3) Romningsveier er fri for hindringer - livsviktig ved evakuering. 4) Belysning fungerer - darlig belysning oker risiko for ulykker og kriminalitet. 5) Ingen vannlekkasjer - kan forhindre store vannskader. 6) Ingen uvanlige lukter - kan avdekke branntillopstegn eller gasslekkasje. 7) Ingen uvedkommende i bygget - sikrer mot uautorisert tilgang. 8) Tekniske systemer fungerer normalt - forhindrer driftsavbrudd.',
      },
    },
    {
      id: 'sik-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-4-3-ex-6',
        number: '4.3.6',
        type: 'classic',
        task: 'Lag en kort ronderingsplan med minst fire sjekkpunkter for en skolebygning etter skoletid. Beskriv hva som skal sjekkes ved hvert punkt.',
        hints: ['Tenk pa de vanligste omradene i en skole: klasserom, gymsal, inngangspartier, tekniske rom'],
        solution: 'Ronderingsplan for skolebygning: Punkt 1 - Hovedinngang: Kontroller at alle ytterdorer er lasst, sjekk at alarmsystemet er aktivert, se etter skader pa vinduer og dorer. Punkt 2 - Klasseromfloyen: Ga gjennom korridoren, sjekk at alle klasserom er lasst, se etter apne vinduer, kontroller at ingen personer oppholder seg i bygget. Punkt 3 - Gymsal og garderober: Sjekk alle dorer, kontroller at dusjer og kraner er avstengt, se etter glemte verdisaker, kontroller nodutganger. Punkt 4 - Teknisk rom og kjeller: Kontroller varmesentral og ventilasjonsanlegg, sjekk for vannlekkasjer, se etter uvanlige lyder fra utstyret, kontroller at rommet er lasst etter inspeksjon. Ronderingen gjentakes to ganger pa kvelden og en gang pa natten.',
      },
    },
    {
      id: 'sik-4-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Rondering** er systematisk kontroll med faste sjekkpunkter
- **Ronderingsplanen** beskriver rute, sjekkpunkter og hva som skal kontrolleres
- **God observasjon** krever systematikk og bruk av alle sanser
- **Rapportering** dokumenterer funn og tiltak

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Rondering | Systematisk kontrollrunde etter fastsatt plan |
| Patruljering | Fleksibel bevegelse over storre omrader |
| Elektronisk ronderingssystem | Digital registrering av sjekkpunkter |
| Ronderingsrapport | Skriftlig dokumentasjon av funn |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Resepsjon og mottakskontroll
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_4_4: TextbookChapter = {
  id: 'sikkerhetsfag-4-4',
  courseId: 'sikkerhetsfag',
  chapterNumber: '4.4',
  title: 'Resepsjon og mottakskontroll',
  description: 'Hvordan sikkerhetsmedarbeidere utforer oppgaver knyttet til resepsjon, sikkerhetskontroll, varemottak og posthandtering. Du laerer om kontrollprosedyrer, risikofaktorer og profesjonell handtering av mennesker og varer.',
  estimatedMinutes: 20,
  competenceGoals: ['haandtere mottak av besoekende og leveranser i trad med virksomhetens prosedyrer'],
  content: [
    {
      id: 'sik-4-4-intro',
      type: 'text',
      content: `## Forste forsvarslinje

Resepsjonen er ofte virksomhetens forste motet med omverdenen. Her handteres besoekende, leveranser, post og generelle henvendelser. For en sikkerhetsmedarbeider i resepsjonen er det viktig a balansere god service med effektiv kontroll.

I dette kapittelet skal du laere:
- Resepsjonistens rolle i sikkerhetsarbeidet
- Sikkerhetskontroll av personer og gjenstander
- Varemottak og kontroll av leveranser
- Posthandtering og postscreening`,
    },
    {
      id: 'sik-4-4-def-1',
      type: 'definition',
      title: 'Mottakskontroll',
      content: `**Mottakskontroll** er de prosedyrer og tiltak som gjennomfores ved mottak av personer, varer, post og utstyr til en virksomhet. Malet er a sikre at alt som kommer inn er autorisert, trygt og korrekt, og at ingenting uonskt passerer gjennom mottaket.`,
    },
    {
      id: 'sik-4-4-text-1',
      type: 'text',
      content: `### Resepsjonistens sikkerhetsoppgaver

En sikkerhetsmedarbeider i resepsjonen har mange oppgaver:

**Personkontroll:**
- Ta imot og identifisere besoekende
- Registrere besok i systemet
- Utstede og innhente besokskort
- Kontrollere legitimasjon

**Adgangsstyring:**
- Apne dorer og porter for autoriserte
- Overvake kameraer og alarmsystemer
- Handtere alarmer og avvik
- Koordinere med vaktsentral

**Service og kommunikasjon:**
- Besvare telefoner og henvendelser
- Gi veibeskrivelser og informasjon
- Handtere funnsaker
- Formidle beskjeder

**Oversikt og kontroll:**
- Ha oversikt over hvem som er i bygget
- Overvake inngangspartiet
- Rapportere mistenkelig aktivitet
- Koordinere ved evakuering`,
    },
    {
      id: 'sik-4-4-text-2',
      type: 'text',
      content: `### Sikkerhetskontroll av personer

I noen virksomheter gjennomfores sikkerhetskontroll av personer som skal inn:

**Flyplasser og rettsbygg (hoy sikkerhet):**
- Rontgenkontroll av bagasje og handbagage
- Metalldetektor (portaldetektor)
- Handholdt metalldetektor for naermere sjekk
- Manuell ransaking ved behov

**Kontorbygg og industrianlegg (middels sikkerhet):**
- Visuell kontroll av vesker og bager
- Sporadisk kontroll av medbrakte gjenstander
- Kontroll av verktoy og utstyr inn og ut

**Arrangementer og konserter:**
- Visuell kontroll av vesker ved inngangen
- Gjenstander som kan brukes som vapen fjernes
- Kontroll av billetter og aldersbegrensning

**Viktige prinsipper ved personkontroll:**
- Vaer hoyflig og forklar hensikten
- Behandle alle likt uavhengig av utseende
- Folg prosedyrer konsekvent
- Respekter personlig integritet
- Ha vitne ved inngripende kontroll`,
    },
    {
      id: 'sik-4-4-text-3',
      type: 'text',
      content: `### Varemottak og leveransekontroll

Kontroll av varer og leveranser er viktig for bade sikkerhet og okonomi:

**Mottak av leveranser:**
- Kontroller at leverandor har avtale og arbeidsordre
- Sjekk at varer stemmer med bestilling (folgeseddel)
- Kontroller at emballasje er uskadet
- Tell antall kolli

**Registrering:**
- Loggfor leveransens dato, klokkeslett og leverandor
- Registrer hva som er levert og antall
- Ta kvittering med underskrift
- Registrer eventuelle avvik eller skader

**Spesielle leveranser:**
- Farlig gods krever spesiell handtering og ADR-merking
- Medisiner og legemidler krever temperaturkontroll
- Verdisendinger krever ekstra sikkerhet og kvittering
- IT-utstyr registreres med serienummer

**Varekontroll ut:**
- Ansatte som tar med seg varer eller utstyr ut bor registreres
- Flyttelass og avhending krever godkjenning
- Kontainere og avfallshåndtering kontrolleres for svinn
- Leverandorer som tar med verktoy inn og ut kontrolleres`,
    },
    {
      id: 'sik-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Varemottak pa et sykehus',
      problem: 'Et sykehus far daglig mange leveranser av ulike typer varer. Hvordan bor mottaket organiseres?',
      solution: `**Organisering av varemottaket:**

**Dedikert mottaksomrade:**
- Egen rampe for lastebiler
- Avlast plass og kontrollomrade
- Kjolelager for matvarer og medisiner
- Sikret lager for verdifulle leveranser

**Kontrollprosedyrer:**
1. Leverandor melder ankomst i mottaket
2. Legitimasjon og arbeidsordre kontrolleres
3. Folgeseddel sammenlignes med bestilling
4. Temperatur kontrolleres for temperaturfoelsome varer
5. Emballasje inspiseres for skader
6. Varer flyttes til riktig lagringsomrade

**Spesielle rutiner:**
- Medisiner: Temperaturlogg dokumenteres, farmasoeyt kvitterer
- Blodprodukter: Umiddelbar kontroll og kjolekjede
- Gasser: ADR-kontroll og egne lagringsomrader
- IT-utstyr: Serienummerregistrering

**Avvikshandtering:**
- Skadet emballasje: Fotografer og meld til leverandor
- Feil vare: Nekt mottak og kontakt innkjoper
- Temperaturavvik: Isoleringsprosedyre iverksettes`,
    },
    {
      id: 'sik-4-4-text-4',
      type: 'text',
      content: `### Posthandtering og postscreening

I virksomheter med forhoyede sikkerhetsniva kontrolleres post og pakker:

**Visuell kontroll:**
- Ukjent avsender eller ingen avsender
- Overdreven mengde tape eller emballasje
- Uvanlig tung for storrelsen
- Merker, flekker eller lukt
- Feil staving av navn eller adresse
- Uventet forsendelse

**Teknisk screening:**
- Rontgenmaskiner for pakker
- Sniffehunder for sprengstoffer
- Bombedetektorer
- Stoffidentifikasjon for hvitt pulver

**Prosedyre ved mistenkelig forsendelse:**
1. Ikke apne forsendelsen
2. Legg den forsiktig ned og ga fra omradet
3. Varsle naermeste leder og sikkerhetspersonell
4. Evakuer omradet rundt forsendelsen
5. Ring politiet pa 02800 (eller 112 ved akutt fare)
6. Vent pa instruksjoner fra nodmyndighetene

**Vanlig posthåndtering:**
- Sorter post etter avdeling
- Registrer rekommanderte sendinger
- Handter pakker med sporingsnummer
- Oppbevar post sikkert til henting`,
    },
    {
      id: 'sik-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        task: 'Hva bor du gjore dersom du mottar en mistenkelig pakke i posten?',
        options: [
          { id: 'a', text: 'Apne den forsiktig for a sjekke innholdet', isCorrect: false },
          { id: 'b', text: 'Legge den i vann for a noytralise eventuelt farlig innhold', isCorrect: false },
          { id: 'c', text: 'Ikke apne den, legge den forsiktig fra seg, evakuere omradet og varsle politi', isCorrect: true },
          { id: 'd', text: 'Sende den tilbake til avsender', isCorrect: false },
        ],
        solution: 'Ved mistenkelig post skal man aldri apne forsendelsen. Legg den forsiktig ned, ga fra omradet, evakuer personer i naerheten og varsle politi. Det er nodmyndighetene som skal handtere situasjonen videre.',
      },
    },
    {
      id: 'sik-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-4-4-ex-2',
        number: '4.4.2',
        type: 'multiple-choice',
        task: 'Hva er det viktigste a kontrollere ved mottak av en vareleveranse?',
        options: [
          { id: 'a', text: 'At sjaforen har parkert riktig', isCorrect: false },
          { id: 'b', text: 'At varene stemmer med bestillingen og at emballasjen er uskadet', isCorrect: true },
          { id: 'c', text: 'At leverandoren snakker norsk', isCorrect: false },
          { id: 'd', text: 'At leveransen kommer for lunsjtid', isCorrect: false },
        ],
        solution: 'Det viktigste er a kontrollere at det som leveres stemmer med det som er bestilt (sjekk mot folgeseddel) og at emballasjen er intakt. Skadede varer eller feilsendinger bor avvises eller dokumenteres som avvik.',
      },
    },
    {
      id: 'sik-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        task: 'Beskriv hvordan en sikkerhetsmedarbeider i resepsjonen bor handtere en situasjon der en person insisterer pa a slippe inn uten legitimasjon og sier at det haster veldig.',
        hints: ['Tenk pa balansen mellom service og sikkerhet, og hvilke alternativer du kan tilby'],
        solution: 'Forst vaer rolig, hoyflig og profesjonell. Forklar at det er krav om legitimasjon for alle som skal inn, og at du er bundet av virksomhetens sikkerhetsrutiner. Tilby alternativer: Kan vedkommende ringe kontaktpersonen sin slik at denne kan komme ned og bekrefte identiteten? Kan kontaktpersonen komme ned til resepsjonsomradet for a ta motet der? Har vedkommende annen form for identifikasjon? Dersom ingen losning finnes, hold fast ved rutinene. Det er bedre a forsake et besok enn a kompromittere sikkerheten. Dokumenter hendelsen i loggen.',
      },
    },
    {
      id: 'sik-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        task: 'Forklar hvorfor varekontroll ut av en virksomhet er like viktig som varekontroll inn.',
        solution: 'Varekontroll ut er viktig av flere grunner: 1) Forebygger internt tyveri og svinn - ansatte eller leverandorer kan forsoke a ta med seg verdier ut. 2) Sikrer sporbarhet av utstyr og eiendeler - vet man hva som gar ut, har man kontroll pa virksomhetens verdier. 3) Forhindrer at sensitive dokumenter eller informasjon forlater bygget. 4) Leverandorer som tar verktoy inn ma kontrolleres ut for a sikre at de ikke tar med seg noe ekstra. 5) Avfallskontainere kan brukes til a skjule eiendeler som hentes etter arbeidstid. Uten kontroll ut har man bare halv kontroll pa materialflyt.',
      },
    },
    {
      id: 'sik-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-4-4-ex-5',
        number: '4.4.5',
        type: 'classic',
        task: 'Hvilke kjennetegn pa mistenkelig post bor en sikkerhetsmedarbeider se etter?',
        solution: 'Kjennetegn pa mistenkelig post inkluderer: Ukjent eller manglende avsender. Feil staving av navn eller adresse. Overdreven mengde tape, lim eller emballasje. Uvanlig tung forsendelse i forhold til storrelsen. Merker, flekker, fuktighet eller uvanlig lukt. Ledninger eller folieaktig materiale som er synlig. Uventede forsendelser som ingen har bestilt. Forskjellig stempel og avsender. Poststempel fra et annet land enn avsenderadressen. Ved mistanke skal forsendelsen aldri apnes - folg prosedyren for mistenkelig post.',
      },
    },
    {
      id: 'sik-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-4-4-ex-6',
        number: '4.4.6',
        type: 'classic',
        task: 'Lag en liste over de fem viktigste egenskapene en god sikkerhetsmedarbeider i resepsjonen bor ha, og forklar hvorfor hver egenskap er viktig.',
        hints: ['Tenk pa bade sikkerhetsfaglige og mellommenneskelige egenskaper'],
        solution: '1) Observant og oppmerksom - ma fange opp avvik, mistenkelig atferd og sikkerhetstrusler raskt. 2) Serviceinnstilt og imotekommende - representerer virksomheten og skal gi et godt forsteinntryk til besoekende. 3) Konsekvent og prinsippfast - ma folge sikkerhetsrutinene for alle, uten unntak, selv under press. 4) God kommunikasjonsevne - ma kunne forklare regler hoyflig, handtere vanskelige samtaler og formidle informasjon tydelig. 5) Stresstalende og rolig - ma kunne handtere flere henvendelser samtidig og bevare roen i krevende situasjoner. Kombinasjonen av disse egenskapene gjor at resepsjonen fungerer bade som sikkerhetsbarriere og som profesjonelt mottak.',
      },
    },
    {
      id: 'sik-4-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Resepsjonen** er en sentral sikkerhetspost i virksomheten
- **Sikkerhetskontroll** tilpasses virksomhetens risikobilde
- **Varemottak** krever systematisk kontroll av leveranser
- **Postscreening** er viktig i virksomheter med forhoyede sikkerhetsniva

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Mottakskontroll | Kontrollprosedyrer for alt som ankommer |
| Folgeseddel | Dokument som folger leveransen |
| Postscreening | Kontroll av innkommende post og pakker |
| Varekontroll ut | Kontroll av eiendeler som forlater bygget |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Personvern og overvaking
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_4_5: TextbookChapter = {
  id: 'sikkerhetsfag-4-5',
  courseId: 'sikkerhetsfag',
  chapterNumber: '4.5',
  title: 'Personvern og overvaking',
  description: 'Reglene for overvaking og behandling av personopplysninger i sikkerhetsarbeid. Du laerer om personopplysningsloven, GDPR, Datatilsynets rolle og hvordan sikkerhetsmedarbeidere kan utfore sine oppgaver innenfor lovens rammer.',
  estimatedMinutes: 20,
  competenceGoals: ['ivareta personvern i samsvar med gjeldende lovverk'],
  content: [
    {
      id: 'sik-4-5-intro',
      type: 'text',
      content: `## Sikkerhet innenfor lovens rammer

Overvaking og adgangskontroll innebarer behandling av personopplysninger. Kameraer filmer mennesker, adgangssystemer logger bevegelser, og besoeksregistre lagrer persondata. Alt dette er regulert av strenge lover som sikkerhetsmedarbeidere ma kjenne til og folge.

I dette kapittelet skal du laere:
- Hva personvern og personopplysninger er
- Personopplysningsloven og GDPR
- Regler for kameraovervaking
- Datatilsynets rolle og myndighet
- Sikkerhetsmedarbeiderens plikter`,
    },
    {
      id: 'sik-4-5-def-1',
      type: 'definition',
      title: 'Personopplysninger',
      content: `**Personopplysninger** er enhver opplysning som kan knyttes til en identifiserbar person. Dette inkluderer navn, fodselsnummer, bilder, video, fingeravtrykk, IP-adresser, adgangskortdata og andre opplysninger som alene eller sammen med andre opplysninger kan identifisere en person.`,
    },
    {
      id: 'sik-4-5-text-1',
      type: 'text',
      content: `### Personopplysningsloven og GDPR

**Personopplysningsloven** er den norske loven som regulerer behandling av personopplysninger. Den gjennomforer EUs personvernforordning (GDPR) i norsk rett.

**GDPR (General Data Protection Regulation):**
- EUs personvernforordning, gjeldende i hele EOS-omradet
- Gir enkeltpersoner sterke rettigheter over sine persondata
- Stiller strenge krav til virksomheter som behandler personopplysninger
- Brudd kan gi svart hoye boter

**Grunnleggende prinsipper i GDPR:**

1. **Lovlighet, rettferdighet og apenhet**
   - All behandling ma ha et lovlig grunnlag
   - Personene ma informeres om behandlingen

2. **Formalsbestemmelse**
   - Opplysningene samles inn for spesifikke formal
   - Kan ikke brukes til andre formal enn det opprinnelige

3. **Dataminimering**
   - Bare samle inn det som er nodvendig
   - Ikke samle mer data enn formalet krever

4. **Riktighet**
   - Opplysningene skal vaere korrekte og oppdaterte
   - Uriktige opplysninger skal rettes eller slettes

5. **Lagringsbegrensning**
   - Opplysninger skal ikke lagres lenger enn nodvendig
   - Sletterutiner ma vaere pa plass

6. **Integritet og konfidensialitet**
   - Opplysningene skal beskyttes mot uautorisert tilgang
   - Tekniske og organisatoriske sikkerhetstiltak`,
    },
    {
      id: 'sik-4-5-def-2',
      type: 'definition',
      title: 'Behandlingsgrunnlag',
      content: `Et **behandlingsgrunnlag** er det rettslige grunnlaget virksomheten har for a behandle personopplysninger. Etter GDPR finnes seks mulige grunnlag: samtykke, avtale, rettslig forpliktelse, vitale interesser, allmenhetens interesse, eller berettiget interesse. For overvaking i sikkerhetsarbeid er de vanligste grunnlagene **berettiget interesse** (beskyttelse av eiendom) og **rettslig forpliktelse** (lovpalagte krav).`,
    },
    {
      id: 'sik-4-5-text-2',
      type: 'text',
      content: `### Regler for kameraovervaking

Kameraovervaking er et viktig verktoy i sikkerhetsarbeid, men det er strengt regulert:

**Nar er kameraovervaking tillatt?**
- Nar det foreligger et saklig behov, for eksempel:
  - Forebygging og oppklaring av straffbare handlinger
  - Ivaretakelse av de ansattes sikkerhet
  - Trafikkontroll og parkeringskontroll
  - Beskyttelse av eiendom mot haerverk

**Krav til skilting:**
- Det skal tydelig fremga at omradet er kameraovervakt
- Skiltet skal vaere synlig for du kommer inn i det overvakte omradet
- Skiltet skal opplyse om hvem som er behandlingsansvarlig
- Kontaktinformasjon for sporsmaal om overvakingen

**Lagring av opptak:**
- Opptak skal normalt slettes etter syv dager
- Opptak kan lagres lenger dersom det er nodvendig for a behandle en konkret hendelse
- Lagring utover syv dager krever saklig begrunnelse
- Tilgang til opptak skal vaere begrenset til et fåtall autoriserte personer

**Lydopptak:**
- Kameraovervaking med lyd er generelt ikke tillatt
- Unntak finnes for spesielle tilfeller med hjemmel i lov

**Omrader som ikke kan overvakes:**
- Garderober og toaletter
- Pauserom og hvilerom for ansatte
- Fagforeningskontorer
- Omrader der overvaking krever personvernet uforholdsmessig`,
    },
    {
      id: 'sik-4-5-text-3',
      type: 'text',
      content: `### Datatilsynet

**Datatilsynets rolle:**
Datatilsynet er det norske tilsynsorganet for personvern og har ansvar for a:
- Fure tilsyn med at personvernregelverket folges
- Behandle klager fra borgere
- Gi veiledning til virksomheter og enkeltpersoner
- Ilegge sanksjoner ved brudd pa regelverket
- Godkjenne bindende virksomhetsregler

**Sanksjoner ved brudd:**
- Advarsel og paalegg om endring
- Tvangsmulkt
- Overtredelsesgebyr (boter)
- Forbud mot behandling av personopplysninger
- For alvorlige brudd pa GDPR kan boter bli opp til 20 millioner euro eller 4 prosent av global omsetning

**Nar kontakter man Datatilsynet?**
- Ved brudd pa personopplysningssikkerheten (avviksmeldinger)
- Virksomheter plikter a melde alvorlige avvik innen 72 timer
- Borgere kan klage dersom de mener personvernet er krenket`,
    },
    {
      id: 'sik-4-5-text-4',
      type: 'text',
      content: `### Sikkerhetsmedarbeiderens plikter

Som sikkerhetsmedarbeider handterer du personopplysninger daglig. Her er dine viktigste plikter:

**Taushetsplikt:**
- Du har taushetsplikt om personopplysninger du far tilgang til
- Opplysninger fra kameraovervaking, adgangslogger og besoeksregistre skal ikke deles med uvedkommende
- Taushetsplikten gjelder ogsa etter at arbeidsforholdet er avsluttet

**Bruk av kameraovervaking:**
- Se bare pa opptak nar det er tjenestlig behov
- Ikke bruk kameraer til a overvake enkeltpersoners arbeidsinnsats
- Begrens tilgang til opptak til autoriserte personer
- Slett opptak etter gjeldende regler

**Handtering av adgangsdata:**
- Adgangslogger er personopplysninger
- Skal ikke brukes til a kontrollere ansattes arbeidsmoonstre
- Tilgang kun ved sikkerhetsmessig behov
- Folg virksomhetens retningslinjer for lagring og sletting

**Ved sikkerhetsavvik:**
- Meld fra dersom personopplysninger kan ha kommet pa avveie
- Dokumenter hendelsen noyaktig
- Folg virksomhetens avviksprosedyre
- Ikke forsoek a skjule avvik

**De registrertes rettigheter:**
Enhver person har rett til:
- Innsyn i egne personopplysninger
- Korrigering av feil
- Sletting av personopplysninger (under visse vilkar)
- A protestere mot behandling
- Dataportabilitet`,
    },
    {
      id: 'sik-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Kameraovervaking i et kjopesenter',
      problem: 'Et kjopesenter vurderer a installere kameraovervaking. Hva ma de tenke pa?',
      solution: `**Vurdering for installasjon:**

1. **Formalsbestemmelse:**
Kameraene skal forebygge butikktyveri, haerverk og ivareta kundenes sikkerhet. Formalet dokumenteres skriftlig.

2. **Omrader som overvakes:**
- Inngangspartier: Ja - identifisering ved hendelser
- Fellesomrader og korridorer: Ja - sikkerhet
- Parkeringsanlegg: Ja - forebygge tyveri og haerverk
- Toaletter: Nei - ulovlig
- Butikkenes bakrom: Nei - ansattes pauseomrade

3. **Skilting:**
Godt synlige skilt ved alle innganger med teksten: "Omradet er kameraovervakt. Ansvarlig: Kjopesenter AS. Kontakt: sikkerhet@kjopesenter.no"

4. **Lagring:**
- Opptak slettes automatisk etter syv dager
- Ved hendelse kopieres relevant sekvens og lagres separat
- Kun sikkerhetsleder og stedfortreder har tilgang

5. **Personvernkonsekvensvurdering (DPIA):**
Palagges fordi overvakingen er systematisk og i stor skala i offentlig tilgjengelig omrade. Gjennomfores for installasjon.

**Resultat:** Lovlig overvaking med dokumentert formal og tydelig informasjon til publikum.`,
    },
    {
      id: 'sik-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        task: 'Hvor lenge kan opptak fra kameraovervaking normalt lagres?',
        options: [
          { id: 'a', text: '24 timer', isCorrect: false },
          { id: 'b', text: '7 dager', isCorrect: true },
          { id: 'c', text: '30 dager', isCorrect: false },
          { id: 'd', text: 'Ubegrenset sa lenge det er sikkerhetsformaal', isCorrect: false },
        ],
        solution: 'Etter personopplysningsloven skal opptak fra kameraovervaking normalt slettes etter syv dager. Opptak kan bare lagres lenger dersom det er nodvendig for a behandle en konkret hendelse, for eksempel et tyveri eller innbrudd.',
      },
    },
    {
      id: 'sik-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-4-5-ex-2',
        number: '4.5.2',
        type: 'multiple-choice',
        task: 'Hva star GDPR for?',
        options: [
          { id: 'a', text: 'General Data Privacy Rules', isCorrect: false },
          { id: 'b', text: 'Global Data Processing Requirement', isCorrect: false },
          { id: 'c', text: 'General Data Protection Regulation', isCorrect: true },
          { id: 'd', text: 'Government Data Protection Registry', isCorrect: false },
        ],
        solution: 'GDPR star for General Data Protection Regulation, pa norsk kalt personvernforordningen. Det er EUs regelverk for personvern som ogsa gjelder i Norge gjennom EOS-avtalen.',
      },
    },
    {
      id: 'sik-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-4-5-ex-3',
        number: '4.5.3',
        type: 'classic',
        task: 'En kollega ber deg om a sjekke kameraopptaket fra i gar fordi han vil se om en bestemt ansatt faktisk var pa jobb. Er dette lovlig? Begrunn svaret.',
        hints: ['Tenk pa formalet med kameraovervakingen og hva opptakene kan brukes til'],
        solution: 'Nei, dette er ikke lovlig. Kameraovervaking er installert med et bestemt formal, typisk a forebygge kriminalitet og ivareta sikkerhet. A bruke opptak til a kontrollere enkeltansattes arbeidsmonster eller tilstedevaerelse er et helt annet formal enn det opprinnelige, og bryter med prinsippet om formalsbestemmelse i GDPR. Kontroll av arbeidsfremmote ma handteres gjennom andre lovlige metoder, for eksempel tidsregistreringssystem. Du skal avvise foresprorselen og eventuelt varsle din leder om at det er gjort forsok pa ulovlig bruk av overvakingsopptak.',
      },
    },
    {
      id: 'sik-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        task: 'Forklar de tre viktigste prinsippene i GDPR og gi et eksempel pa hvordan hvert prinsipp pavirker sikkerhetsarbeid.',
        solution: '1) Formalsbestemmelse: Personopplysninger skal samles inn for spesifikke, uttrykkelig angitte formal. I sikkerhetsarbeid betyr dette at kameraovervaking kun kan brukes til det formalet som er oppgitt, for eksempel forebygging av kriminalitet, ikke til a overvake ansattes pauser. 2) Dataminimering: Man skal bare samle inn det som er nodvendig. I sikkerhetsarbeid betyr dette at man ikke installerer kameraer i omrader der det ikke er et saklig behov, og at besoeksregistre ikke samler inn mer informasjon enn det som trengs. 3) Lagringsbegrensning: Data skal ikke lagres lenger enn nodvendig. I sikkerhetsarbeid betyr dette at kameraopptak slettes etter syv dager og at gamle adgangslogger slettes nar de ikke lenger har et formal.',
      },
    },
    {
      id: 'sik-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        task: 'Hva er Datatilsynets rolle, og hvilke sanksjoner kan de gi ved brudd pa personvernregelverket?',
        solution: 'Datatilsynet er Norges uavhengige tilsynsorgan for personvern. De forer tilsyn med at personvernlovgivningen folges, behandler klager fra borgere, gir veiledning og ilegger sanksjoner. Sanksjoner inkluderer: Advarsel og paalegg om a endre praksis. Tvangsmulkt for a sikre at paalegg folges. Overtredelsesgebyr (boter) som kan vaere betydelige. Forbud mot behandling av personopplysninger. For de alvorligste bruddene pa GDPR kan botene bli opp til 20 millioner euro eller 4 prosent av virksomhetens globale omsetning, avhengig av hva som er hoyest.',
      },
    },
    {
      id: 'sik-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-4-5-ex-6',
        number: '4.5.6',
        type: 'classic',
        task: 'En besoekende spor deg om a fa se kameraopptaket av seg selv fra forrige uke da vedkommende var pa besok. Har vedkommende rett til dette? Hvordan bor du handtere foresprorselen?',
        hints: ['Tenk pa innsynsretten i GDPR og virksomhetens prosedyrer'],
        solution: 'Ja, etter GDPR har alle registrerte personer rett til innsyn i personopplysninger som behandles om dem, inkludert kameraopptak. Slik bor du handtere foresprorselen: 1) Bekreft at personen har rett til innsyn. 2) Du kan ikke gi ut opptaket selv - henvis til virksomhetens personvernombud eller behandlingsansvarlig. 3) Be vedkommende om a sende en skriftlig foresprorselen med identifikasjon. 4) Virksomheten har 30 dager pa a svare. 5) Opptak kan bare utleveres dersom det er mulig a skille ut den registrertes opptak uten a krenke andres personvern. 6) Andre personer i opptaket ma sladdes for utlevering. Viktig: Sjekk om opptaket fortsatt eksisterer - normalt slettes det etter syv dager.',
      },
    },
    {
      id: 'sik-4-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Personopplysninger** er all informasjon som kan knyttes til en person
- **GDPR** og personopplysningsloven regulerer all behandling av persondata
- **Kameraovervaking** krever saklig behov, skilting og syvdagers sletting
- **Datatilsynet** forer tilsyn og kan gi hoye boter ved brudd
- **Sikkerhetsmedarbeidere** har taushetsplikt og ma folge regelverket

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Personopplysninger | Opplysninger som kan identifisere en person |
| GDPR | EUs personvernforordning |
| Behandlingsgrunnlag | Rettslig grunnlag for a behandle persondata |
| Datatilsynet | Norsk tilsynsorgan for personvern |
| Taushetsplikt | Plikt til a ikke dele fortrolig informasjon |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SIKKERHETSFAG_DEL4_CHAPTERS = [
  CHAPTER_SIKKERHETSFAG_4_1,
  CHAPTER_SIKKERHETSFAG_4_2,
  CHAPTER_SIKKERHETSFAG_4_3,
  CHAPTER_SIKKERHETSFAG_4_4,
  CHAPTER_SIKKERHETSFAG_4_5,
];
