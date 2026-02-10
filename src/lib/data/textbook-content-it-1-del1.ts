/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 1 (IT 1) VG2
 *
 * Seksjon 1: Digital kompetanse og samfunn (Kapittel 1.1–1.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er digital kompetanse?
// ============================================================================

export const CHAPTER_IT_1_1_1: TextbookChapter = {
  id: 'it-1-1-1',
  courseId: 'it-1',
  chapterNumber: '1.1',
  title: 'Hva er digital kompetanse?',
  description: 'Lær hva digital kompetanse innebærer, de fem dimensjonene i rammeverket for digitale ferdigheter, og hvorfor dette er viktig i skole, arbeidsliv og samfunnsliv.',
  estimatedMinutes: 45,
  prevChapter: undefined,
  nextChapter: 'it-1-1-2',
  competenceGoals: [
    'gjøre rede for begrepet digital kompetanse og hvorfor det er viktig i dagens samfunn',
    'beskrive de ulike dimensjonene av digital kompetanse',
    'reflektere over egen digital kompetanse og utvikling',
  ],
  keyTerms: [
    { term: 'Digital kompetanse', definition: 'Evnen til å bruke digitale verktøy og teknologi på en trygg, kritisk og kreativ måte for å delta i samfunnet, lære og arbeide.' },
    { term: 'Digitale ferdigheter', definition: 'Praktiske ferdigheter knyttet til bruk av digitale verktøy, som å navigere på internett, bruke programvare og håndtere filer.' },
    { term: 'Digital literacy', definition: 'Engelsk begrep for digital kompetanse, som vektlegger evnen til å forstå, vurdere og produsere digital informasjon.' },
    { term: 'Informasjonskompetanse', definition: 'Evnen til å finne, vurdere, organisere og bruke informasjon fra digitale kilder på en hensiktsmessig måte.' },
    { term: 'Kommunikasjonskompetanse', definition: 'Evnen til å kommunisere og samhandle med andre gjennom digitale kanaler på en trygg og respektfull måte.' },
    { term: 'Sikkerhetskompetanse', definition: 'Kunnskap om personvern, datasikkerhet, passord og beskyttelse av egen og andres digitale identitet.' },
    { term: 'Innholdsproduksjon', definition: 'Evnen til å skape digitalt innhold som tekst, bilder, lyd, video og kode, samt forstå opphavsrett og lisensiering.' },
    { term: 'Problemløsning', definition: 'Evnen til å identifisere og løse tekniske problemer, samt bruke digitale verktøy kreativt for å finne nye løsninger.' },
  ],
  content: [
    {
      id: 'it-1-1-1-intro',
      type: 'text',
      content: `## Hva er digital kompetanse?

Tenk deg at du skal søke jobb etter videregående. Du finner en spennende stillingsannonse, men den krever «god digital kompetanse». Hva betyr egentlig det? Er det nok å kunne bruke sosiale medier og sende e-post, eller handler det om noe mer?

I dagens samfunn er digital teknologi overalt — i skolen, på arbeidsplassen, i kontakten med det offentlige og i privatlivet. Å kunne bruke denne teknologien effektivt, trygt og kritisk er ikke lenger en bonus, men en nødvendighet. Vi kaller denne evnen for digital kompetanse.

I dette kapittelet skal du lære:
- Hva digital kompetanse betyr og hvorfor det er viktig
- De fem dimensjonene av digital kompetanse
- Hvordan digital kompetanse er relevant i skole, arbeidsliv og hverdagsliv
- Hvordan du kan vurdere og utvikle din egen digitale kompetanse`,
    },
    {
      id: 'it-1-1-1-def-1',
      type: 'definition',
      title: 'Digital kompetanse',
      content: `**Digital kompetanse** er evnen til å bruke informasjons- og kommunikasjonsteknologi (IKT) på en hensiktsmessig, trygg og kritisk måte. Det handler ikke bare om tekniske ferdigheter, men også om å forstå teknologiens muligheter og begrensninger, vurdere digital informasjon kritisk, og opptre ansvarlig i digitale omgivelser.

EU-kommisjonen definerer digital kompetanse som en av åtte nøkkelkompetanser for livslang læring. I Norge er digitale ferdigheter en av fem grunnleggende ferdigheter i læreplanen (LK20), på linje med lesing, skriving, regning og muntlige ferdigheter.

Digital kompetanse er ikke en statisk egenskap — teknologien utvikler seg raskt, og det kreves kontinuerlig læring for å holde kompetansen oppdatert. En person som var digitalt kompetent i 2010, er ikke nødvendigvis det i dag uten å ha holdt seg oppdatert.`,
    },
    {
      id: 'it-1-1-1-text-1',
      type: 'text',
      title: 'De fem dimensjonene av digital kompetanse',
      content: `## Fem dimensjoner

Utdanningsdirektoratet har definert et rammeverk for digitale ferdigheter i skolen. Dette rammeverket deler digital kompetanse inn i fem dimensjoner:

### 1. Tilegne og behandle digital informasjon
Denne dimensjonen handler om å kunne søke etter, finne og samle inn informasjon fra digitale kilder. Det inkluderer å bruke søkemotorer effektivt, navigere på nettsider, filtrere søkeresultater og lagre informasjon på en organisert måte.

### 2. Produsere og bearbeide digitalt innhold
Her handler det om å kunne lage digitalt innhold ved hjelp av ulike verktøy. Det kan være alt fra å skrive tekster i et tekstbehandlingsprogram, lage presentasjoner, redigere bilder og video, til å programmere enkle programmer.

### 3. Kommunisere digitalt
Denne dimensjonen dekker evnen til å bruke digitale verktøy for å kommunisere, samarbeide og dele informasjon med andre. Det inkluderer e-post, videosamtaler, samskrivingsverktøy som Google Docs, og sosiale medier.

### 4. Utøve digital dømmekraft
Digital dømmekraft handler om å kunne vurdere informasjon kritisk, forstå personvern og opphavsrett, opptre etisk og ansvarlig på nett, og beskytte seg selv og andre i digitale omgivelser.

### 5. Bruke digitale verktøy for problemløsning
Den siste dimensjonen handler om å bruke teknologi kreativt for å løse problemer, automatisere oppgaver og utvikle nye løsninger. Her kommer programmering og algoritmisk tenkning inn.`,
    },
    {
      id: 'it-1-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Digital kompetanse i hverdagen',
      problem: `Marte skal skrive en oppgave om klimaendringer. Hun søker på nettet og finner en artikkel som hevder at klimaendringer ikke er menneskeskapte. Artikkelen er publisert av en organisasjon hun ikke har hørt om. Hvilke dimensjoner av digital kompetanse trenger hun å bruke?`,
      solution: `**Løsning:**

Marte trenger å bruke flere dimensjoner:

1. **Tilegne og behandle informasjon:** Hun har søkt på nettet og funnet en artikkel. For å finne mer pålitelige kilder bør hun bruke avanserte søketeknikker og oppsøke anerkjente vitenskapelige kilder.

2. **Utøve digital dømmekraft:** Hun må vurdere kilden kritisk. Hvem står bak organisasjonen? Har forfatteren faglig bakgrunn? Hva sier andre, anerkjente kilder om samme tema? Finnes det vitenskapelig konsensus?

3. **Produsere innhold:** Når hun skriver oppgaven, må hun referere til kildene sine korrekt og skille mellom fakta og påstander.

4. **Kommunisere:** Hvis hun samarbeider med medelever, må hun dele funnene sine og diskutere kildenes pålitelighet.

Dette eksempelet viser at digital kompetanse sjelden handler om bare én dimensjon — de henger sammen og brukes i kombinasjon.`,
    },
    {
      id: 'it-1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-1-ex-1',
        number: '1.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er digital kompetanse?',
        options: [
          { id: 'a', text: 'Evnen til å bruke sosiale medier', isCorrect: false, feedback: 'Sosiale medier er bare en liten del av digital kompetanse.' },
          { id: 'b', text: 'Evnen til å bruke IKT på en hensiktsmessig, trygg og kritisk måte', isCorrect: true },
          { id: 'c', text: 'Evnen til å programmere i minst tre programmeringsspråk', isCorrect: false, feedback: 'Programmering er en del av digital kompetanse, men det kreves ikke å kunne tre språk.' },
          { id: 'd', text: 'Evnen til å reparere datamaskiner og mobiltelefoner', isCorrect: false, feedback: 'Teknisk reparasjon er ikke en sentral del av digital kompetanse.' },
        ],
        solution: 'Digital kompetanse handler om å bruke informasjons- og kommunikasjonsteknologi (IKT) på en hensiktsmessig, trygg og kritisk måte, ifølge EU-kommisjonens definisjon.',
      },
    },
    {
      id: 'it-1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-1-ex-2',
        number: '1.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken dimensjon av digital kompetanse handler om å vurdere nettkilder kritisk og forstå personvern?',
        options: [
          { id: 'a', text: 'Tilegne og behandle informasjon', isCorrect: false, feedback: 'Den dimensjonen handler om å søke og finne informasjon.' },
          { id: 'b', text: 'Produsere og bearbeide innhold', isCorrect: false, feedback: 'Den handler om å lage digitalt innhold.' },
          { id: 'c', text: 'Digital dømmekraft', isCorrect: true },
          { id: 'd', text: 'Kommunisere digitalt', isCorrect: false, feedback: 'Den handler om samarbeid og kommunikasjon.' },
        ],
        solution: 'Digital dømmekraft handler om kritisk vurdering av informasjon, personvern, opphavsrett og ansvarlig opptreden på nett.',
      },
    },
    {
      id: 'it-1-1-1-def-2',
      type: 'definition',
      title: 'Digital kompetanse i læreplanen (LK20)',
      content: `I den norske læreplanen LK20 er **digitale ferdigheter** definert som en av fem grunnleggende ferdigheter som skal utvikles i alle fag. Rammeverket for digitale ferdigheter beskriver progresjonen fra enkle tekniske ferdigheter til avansert bruk som inkluderer programmering, kritisk vurdering og kreativ problemløsning.

I faget Informasjonsteknologi 1 (IT 1) er digital kompetanse selve kjernen. Læreplanen forventer at elevene skal kunne bruke og forstå ulike digitale verktøy og teknologier, reflektere over teknologiens rolle i samfunnet, og utvikle egne digitale løsninger gjennom programmering og design.`,
    },
    {
      id: 'it-1-1-1-text-2',
      type: 'text',
      title: 'Digital kompetanse i arbeidslivet',
      content: `## Digital kompetanse i arbeidslivet

Nesten alle yrker i dag krever en viss grad av digital kompetanse. En sykepleier må kunne bruke elektroniske pasientjournaler. En snekker bruker digitale tegneprogrammer og bestillingssystemer. En lærer bruker digitale læringsplattformer og presentasjonsverktøy.

Ifølge NHOs kompetansebarometer er digital kompetanse blant de mest etterspurte ferdighetene i norsk arbeidsliv. Bedrifter rapporterer om et stort udekket behov for medarbeidere som kan bruke digitale verktøy effektivt.

### Ulike nivåer av digital kompetanse

I arbeidslivet kan vi skille mellom tre nivåer:

- **Grunnleggende brukerkompetanse:** Alle ansatte trenger å kunne bruke e-post, tekstbehandling, regneark og bedriftens egne systemer. Dette er minstekravet i de fleste yrker.

- **Avansert brukerkompetanse:** Mange stillinger krever evne til å analysere data, bruke spesialisert programvare, eller tilpasse digitale verktøy til egne behov. For eksempel en markedsfører som bruker analyseverktøy for å forstå kundeadferd.

- **Spesialisert IT-kompetanse:** IT-utviklere, systemadministratorer og datasikkerhetsspesialister trenger dyp teknisk kunnskap om programmering, databaser, nettverk og sikkerhet.`,
    },
    {
      id: 'it-1-1-1-example-2',
      type: 'example',
      title: 'Eksempel: Digital kompetanse i ulike yrker',
      problem: 'Beskriv hvilken type digital kompetanse en journalist, en lege og en elektriker trenger i sitt daglige arbeid.',
      solution: `**Journalist:** Trenger informasjonskompetanse for å søke i databaser og arkiver, digital dømmekraft for å vurdere kilder kritisk, innholdsproduksjon for å skrive og redigere artikler i publiseringssystemer, og kommunikasjonskompetanse for å samarbeide med redaksjonen digitalt.

**Lege:** Trenger å beherske elektronisk pasientjournal (EPJ), kunne bruke telemedisin-verktøy for konsultasjoner, forstå personvern og taushetsplikt i digitale systemer (spesielt GDPR og helseregisterloven), og holde seg faglig oppdatert via digitale medisinske databaser.

**Elektriker:** Trenger å bruke digitale tegne- og planleggingsverktøy (BIM), bestille materialer i digitale systemer, dokumentere arbeid digitalt, og kunne programmere smarthus-systemer og automatisering.`,
    },
    {
      id: 'it-1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-1-ex-3',
        number: '1.1.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv de fem dimensjonene av digital kompetanse med egne ord, og gi et konkret eksempel til hver dimensjon fra din egen hverdag.',
        hints: ['Tenk på hva du gjør daglig med digitale verktøy — søke informasjon, kommunisere, lage innhold, vurdere kilder, løse problemer.'],
        solution: `De fem dimensjonene er:

1. **Tilegne og behandle informasjon:** Å søke etter og finne relevant informasjon. Eksempel: Søke etter oppskrifter eller fagstoff til en skoleoppgave.

2. **Produsere og bearbeide innhold:** Å lage digitalt innhold. Eksempel: Redigere et bilde i Photoshop eller skrive en rapport i Word.

3. **Kommunisere digitalt:** Å samhandle med andre via digitale kanaler. Eksempel: Sende melding i Teams eller delta i en videosamtale.

4. **Digital dømmekraft:** Å opptre ansvarlig og vurdere kritisk. Eksempel: Sjekke om en nyhetsartikkel kommer fra en pålitelig kilde før du deler den.

5. **Problemløsning:** Å bruke teknologi kreativt. Eksempel: Lage et regneark med formler for å holde oversikt over personlig økonomi.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-1-ex-4',
        number: '1.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'NHOs kompetansebarometer viser at digital kompetanse er svært etterspurt i norsk arbeidsliv. Velg et yrke du er interessert i, og beskriv hvilken digital kompetanse som kreves, fordelt på de tre nivåene (grunnleggende, avansert, spesialisert).',
        hints: ['Tenk på hvilke digitale verktøy som brukes i yrket, og hva som skiller en nybegynner fra en erfaren bruker.'],
        solution: `Eksempel for sykepleier:

**Grunnleggende:** Bruke e-post, Teams, og grunnleggende funksjoner i elektronisk pasientjournal (EPJ). Logge inn med sikker identifikasjon (BankID/Buypass).

**Avansert:** Bruke EPJ effektivt til å dokumentere behandling, lese blodprøvesvar digitalt, bruke medisinske beslutningsstøttesystemer, og utføre telemedisin-konsultasjoner.

**Spesialisert:** Bidra til utvikling av nye digitale løsninger i helsesektoren, forstå maskinlæring i diagnostikk, eller administrere digitale systemer på avdelingen.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-1-text-3',
      type: 'text',
      title: 'Utvikle egen digital kompetanse',
      content: `## Hvordan utvikle egen digital kompetanse?

Digital kompetanse er ikke noe du enten har eller ikke har — det er en ferdighet som kan utvikles over tid. Her er noen strategier:

**Vær nysgjerrig:** Prøv nye verktøy og tjenester. Utforsk funksjoner du ikke har brukt før i programmer du allerede kjenner.

**Lær av feil:** Når noe ikke fungerer, prøv å forstå hvorfor. Feilsøking er en viktig del av digital kompetanse.

**Hold deg oppdatert:** Teknologien endrer seg raskt. Les nyheter om teknologi, følg relevante blogger eller YouTube-kanaler.

**Øv regelmessig:** Programmering, bilderedigering og andre digitale ferdigheter krever praksis. Jo mer du øver, desto bedre blir du.

**Reflekter over egen praksis:** Tenk over hvordan du bruker teknologi. Er du trygg nok? Vurderer du kilder kritisk? Produserer du innhold av god kvalitet?`,
    },
    {
      id: 'it-1-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Digital kompetanse** er evnen til å bruke IKT på en hensiktsmessig, trygg og kritisk måte
- Det finnes **fem dimensjoner** av digital kompetanse: informasjon, innholdsproduksjon, kommunikasjon, digital dømmekraft og problemløsning
- I **læreplanen (LK20)** er digitale ferdigheter en grunnleggende ferdighet i alle fag
- **Arbeidslivet** krever digital kompetanse på ulike nivåer i nesten alle yrker
- Digital kompetanse er en **ferdighet som utvikles** over tid gjennom praksis og refleksjon

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Digital kompetanse | Evnen til å bruke IKT trygt, kritisk og kreativt |
| Digitale ferdigheter | Praktiske ferdigheter i bruk av digitale verktøy |
| Digital dømmekraft | Kritisk vurdering, personvern, etikk på nett |
| LK20 | Norsk læreplan med digitale ferdigheter som grunnleggende |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'it-1-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-1-ex-5',
        number: '1.1.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken påstand om digital kompetanse er RIKTIG?',
        options: [
          { id: 'a', text: 'Digital kompetanse er en statisk egenskap man enten har eller ikke har', isCorrect: false, feedback: 'Digital kompetanse er dynamisk og kan utvikles over tid.' },
          { id: 'b', text: 'Digital kompetanse er kun viktig for IT-spesialister', isCorrect: false, feedback: 'Nesten alle yrker krever digital kompetanse i dag.' },
          { id: 'c', text: 'Digital kompetanse krever kontinuerlig oppdatering fordi teknologien endrer seg', isCorrect: true },
          { id: 'd', text: 'Digital kompetanse handler kun om tekniske ferdigheter', isCorrect: false, feedback: 'Det handler også om kritisk tenkning, etikk og kommunikasjon.' },
        ],
        solution: 'Digital kompetanse er dynamisk og krever kontinuerlig oppdatering fordi teknologien endrer seg raskt. Det som var tilstrekkelig kunnskap for fem år siden, er kanskje ikke nok i dag.',
      },
    },
    {
      id: 'it-1-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-1-ex-6',
        number: '1.1.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en egenvurdering av din digitale kompetanse. Gi deg selv en karakter fra 1-5 for hver av de fem dimensjonene, og begrunn vurderingen. Identifiser deretter to områder du ønsker å forbedre, og forklar konkret hvordan du kan gjøre det.',
        hints: ['Tenk på hva du mestrer godt og hva du synes er utfordrende. Vær ærlig med deg selv.'],
        solution: `Eksempel: Informasjon 4/5 (er god til å google, men bruker sjelden avanserte søkeoperatorer), Innholdsproduksjon 3/5 (kan tekstbehandling, men har lite erfaring med video), Kommunikasjon 4/5 (bruker Teams/e-post daglig), Dømmekraft 3/5 (sjekker kilder noen ganger, men ikke alltid), Problemløsning 2/5 (kan lite programmering). Forbedring: Lære Python og bli bedre på kildekritikk gjennom bevisst trening.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-1-ex-7',
        number: '1.1.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Ungdom i dag er digitalt innfødte og trenger ikke opplæring i digital kompetanse.» Bruk eksempler og argumenter både for og mot påstanden.',
        hints: ['Begrepet «digital innfødt» (digital native) ble lansert av Marc Prensky. Tenk på forskjellen mellom å bruke teknologi og å bruke den kompetent.'],
        solution: `**For påstanden:** Ungdom vokser opp med teknologi og lærer mye selv. De er ofte raske til å ta i bruk nye apper og plattformer, og kan mer enn mange voksne om sosiale medier og smarttelefoner.

**Mot påstanden:** Forskning viser at ungdom ikke automatisk er digitalt kompetente selv om de bruker mye teknologi. Mange unge er dårlige på kildekritikk, personvern og sikkerhet. Å bruke TikTok er ikke det samme som å kunne vurdere en vitenskapelig kilde. Studier fra PISA og ICILS (International Computer and Information Literacy Study) viser at mange elever mangler grunnleggende evne til kritisk vurdering av nettkilder.

**Konklusjon:** Selv om ungdom er komfortable med teknologi, trenger de opplæring i kritisk tenkning, sikkerhet, personvern og problemløsning — dimensjoner som ikke læres automatisk gjennom daglig bruk av sosiale medier.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-1-ex-8',
        number: '1.1.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en kort undersøkelse blant minst fem medelever om deres digitale kompetanse. Still tre spørsmål som dekker ulike dimensjoner. Presenter resultatene i en tabell og skriv en kort analyse.',
        hints: ['Du kan bruke et enkelt nettskjema (Google Forms, Microsoft Forms) for å samle inn svar.'],
        solution: `Eksempel på spørsmål: 1) Sjekker du hvem som står bak en nettartikkel før du stoler på informasjonen? (dømmekraft) 2) Kan du bruke regneark til å lage diagrammer? (innholdsproduksjon) 3) Vet du hvordan du endrer personverninnstillingene dine på sosiale medier? (sikkerhet). Resultater presenteres i tabell med antall ja/nei/usikker per spørsmål, med kort analyse av funn og eventuelle overraskelser.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Digitaliseringens påvirkning på samfunnet
// ============================================================================

export const CHAPTER_IT_1_1_2: TextbookChapter = {
  id: 'it-1-1-2',
  courseId: 'it-1',
  chapterNumber: '1.2',
  title: 'Digitaliseringens påvirkning på samfunnet',
  description: 'Utforsk hvordan digitaliseringen forandrer ulike sektorer som helse, utdanning, transport og offentlige tjenester, samt konsekvensene av stordata og kunstig intelligens.',
  estimatedMinutes: 45,
  prevChapter: 'it-1-1-1',
  nextChapter: 'it-1-1-3',
  competenceGoals: [
    'gjøre rede for hvordan digitalisering endrer samfunnet',
    'beskrive eksempler på digitalisering i ulike sektorer',
    'reflektere over konsekvenser av stordata og kunstig intelligens',
  ],
  keyTerms: [
    { term: 'Digitalisering', definition: 'Prosessen der analoge prosesser, tjenester og produkter blir erstattet av eller supplert med digitale løsninger.' },
    { term: 'Digital transformasjon', definition: 'En omfattende endring i hvordan organisasjoner bruker teknologi for å forbedre virksomheten, skape nye verdier og endre forretningsmodeller.' },
    { term: 'Stordata (Big Data)', definition: 'Ekstremt store datamengder som samles inn fra ulike kilder og analyseres for å finne mønstre, trender og sammenhenger.' },
    { term: 'Kunstig intelligens (KI)', definition: 'Datasystemer som kan utføre oppgaver som vanligvis krever menneskelig intelligens, som gjenkjenning av bilder, språk og beslutningstaking.' },
    { term: 'Maskinlæring', definition: 'En underkategori av KI der datamaskiner lærer fra data uten å bli eksplisitt programmert for hver oppgave.' },
    { term: 'Automatisering', definition: 'Bruk av teknologi for å utføre oppgaver som tidligere ble gjort manuelt av mennesker, uten eller med minimal menneskelig inngripen.' },
    { term: 'Delingsøkonomi', definition: 'Økonomisk modell der privatpersoner deler ressurser (bil, bolig, utstyr) gjennom digitale plattformer, som Airbnb og Uber.' },
    { term: 'Tingenes internett (IoT)', definition: 'Nettverk av fysiske gjenstander (sensorer, apparater, kjøretøy) som er koblet til internett og kan samle inn og utveksle data.' },
  ],
  content: [
    {
      id: 'it-1-1-2-intro',
      type: 'text',
      content: `## Digitaliseringens påvirkning på samfunnet

For bare 20 år siden bestilte vi flybilletter på reisebyrå, fant veien med papirkart og leverte selvangivelsen på papir. I dag gjør vi alt dette med noen tastetrykk på telefonen. Digitaliseringen har fundamentalt endret måten vi lever, arbeider og samhandler på.

Men digitaliseringen handler om mer enn bare bekvemmelighet. Den endrer hele bransjer, skaper nye yrker og gjør andre overflødige, og reiser viktige spørsmål om personvern, sikkerhet og demokrati.

I dette kapittelet skal du lære:
- Hva digitalisering og digital transformasjon betyr
- Hvordan ulike sektorer påvirkes av digitalisering
- Hva stordata og kunstig intelligens er og hvordan de brukes
- Konsekvenser av digitalisering for samfunn og arbeidsliv`,
    },
    {
      id: 'it-1-1-2-def-1',
      type: 'definition',
      title: 'Digitalisering vs. digital transformasjon',
      content: `**Digitalisering** i snever forstand betyr å gjøre noe analogt digitalt — for eksempel å skanne et papirdokument til en PDF-fil. I bredere forstand handler det om å ta i bruk digital teknologi for å forbedre prosesser, produkter og tjenester.

**Digital transformasjon** går enda lengre. Det handler om å bruke digitalisering til å fundamentalt endre hvordan en organisasjon fungerer. Netflix transformerte filmbransjen fra fysisk utleie til strømming. Vipps transformerte hvordan nordmenn betaler hverandre. Disse endringene er ikke bare tekniske forbedringer — de endrer hele forretningsmodellen.

Et nyttig skille: Digitalisering gjør det samme som før, men digitalt. Digital transformasjon bruker teknologi for å gjøre noe helt nytt.`,
    },
    {
      id: 'it-1-1-2-text-1',
      type: 'text',
      title: 'Digitalisering i ulike sektorer',
      content: `## Digitalisering i ulike sektorer

### Helse
Helsesektoren gjennomgår en digital revolusjon. Elektroniske pasientjournaler har erstattet papirjournaler, noe som gjør det enklere å dele informasjon mellom sykehus og fastleger. E-resept gjør at resepter sendes digitalt rett til apoteket. Helsenorge.no gir pasienter tilgang til egne helseopplysninger.

Kunstig intelligens brukes til å analysere røntgenbilder og oppdage kreft i tidlig stadium. Telemedisin gjør at pasienter kan konsultere legen via videosamtale uten å reise til legekontoret.

### Utdanning
Digitale læremidler, læringsplattformer som Canvas og Teams, og nettbaserte kurs har endret undervisningen. Under pandemien i 2020 ble digital undervisning nødvendig over natten, noe som akselererte digitaliseringen i skolen.

### Transport
Elbiler med avansert programvare, ruter-apper som Ruter og Vy, og arbeidet med selvkjørende biler er eksempler på digitalisering i transportsektoren. Bompenger betales automatisk med AutoPASS.

### Offentlige tjenester
Norge er blant verdens mest digitaliserte land i offentlig sektor. Skattemeldingen er forhåndsutfylt, pass bestilles digitalt, og Altinn samler offentlige tjenester for bedrifter. ID-porten med MinID og BankID gir sikker innlogging.`,
    },
    {
      id: 'it-1-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Vipps — norsk digital transformasjon',
      problem: 'Beskriv hvordan Vipps representerer digital transformasjon, og ikke bare digitalisering.',
      solution: `**Digitalisering** av betaling ville vært å la folk overføre penger via nettbanken — noe som allerede fantes. **Digital transformasjon** er det Vipps gjorde:

1. De skapte en helt ny betalingsopplevelse med mobilnummer i stedet for kontonummer
2. De muliggjorde nye bruksmønstre som spleis (Vipps Spleis), betaling i nettbutikker, og betaling i fysiske butikker
3. De endret sosiale normer — «jeg Vippser deg» ble en del av dagligtalen
4. De konkurrerte med og erstattet kontanter i mange situasjoner

Vipps er nå fusjonert til Vipps MobilePay og brukes i flere nordiske land. Dette viser hvordan digital transformasjon skaper noe helt nytt, ikke bare digitaliserer det gamle.`,
    },
    {
      id: 'it-1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-2-ex-1',
        number: '1.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom digitalisering og digital transformasjon?',
        options: [
          { id: 'a', text: 'De betyr det samme', isCorrect: false, feedback: 'De er beslektede, men ikke identiske begreper.' },
          { id: 'b', text: 'Digitalisering gjør analoge prosesser digitale, mens digital transformasjon fundamentalt endrer forretningsmodeller', isCorrect: true },
          { id: 'c', text: 'Digital transformasjon skjer bare i teknologibedrifter', isCorrect: false, feedback: 'Det skjer i alle bransjer — helse, utdanning, transport osv.' },
          { id: 'd', text: 'Digitalisering er nyere enn digital transformasjon', isCorrect: false, feedback: 'Digitalisering har pågått lenger, transformasjonen er mer grunnleggende.' },
        ],
        solution: 'Digitalisering handler om å gjøre ting digitalt (f.eks. skanne papir). Digital transformasjon bruker teknologi til å skape helt nye måter å arbeide og levere tjenester på (f.eks. Vipps).',
      },
    },
    {
      id: 'it-1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-2-ex-2',
        number: '1.2.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gi to eksempler på digitalisering i helsesektoren og forklar hvordan de har forbedret helsetjenesten.',
        hints: ['Tenk på pasientjournaler, resepter, legebesøk og diagnostikk.'],
        solution: `1. **Elektronisk pasientjournal (EPJ):** Tidligere var journaler på papir og kunne bare leses der de var lagret. Nå kan helsepersonell på tvers av sykehus og legekontor se pasientens historikk, noe som gir bedre og tryggere behandling.

2. **E-resept:** Legen sender resepten digitalt til en sentral database, og pasienten kan hente medisinen på et hvilket som helst apotek i landet. Dette reduserer feil, forhindrer forfalskning og er mer effektivt for alle parter.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-2-def-2',
      type: 'definition',
      title: 'Stordata og kunstig intelligens',
      content: `**Stordata (Big Data)** refererer til svært store mengder data som samles inn fra ulike kilder — sosiale medier, sensorer, transaksjoner, klikk på nettsider og mye mer. Disse datamengdene er så store at tradisjonelle metoder ikke kan håndtere dem. Stordata kjennetegnes ofte av «de tre V-ene»:

- **Volume (mengde):** Enorme datamengder — terabyte og petabyte
- **Velocity (hastighet):** Data strømmer inn i sanntid
- **Variety (variasjon):** Data kommer i mange formater — tekst, bilder, video, sensorsignaler

**Kunstig intelligens (KI)** er systemer som kan utføre oppgaver som normalt krever menneskelig intelligens. KI bruker ofte stordata til å «lære» mønstre. For eksempel kan en KI-modell trenes på millioner av røntgenbilder for å oppdage tegn på lungekreft.`,
    },
    {
      id: 'it-1-1-2-text-2',
      type: 'text',
      title: 'Konsekvenser av digitalisering',
      content: `## Konsekvenser for samfunn og arbeidsliv

Digitaliseringen har mange positive konsekvenser — effektivitet, tilgjengelighet, nye muligheter. Men den har også utfordringer:

### Arbeidsmarkedet endres
McKinsey Global Institute anslår at inntil 30 % av arbeidstimer globalt kan automatiseres med eksisterende teknologi. Yrker som innebærer rutineoppgaver (kassaarbeid, lagerhåndtering, enkel regnskapsføring) er mest utsatt. Samtidig skapes nye yrker som dataingeniør, UX-designer og KI-etiker.

### Personvern under press
Stordata betyr at bedrifter og myndigheter kan samle enorme mengder informasjon om deg — hva du kjøper, hvor du beveger deg, hva du søker etter. Dette reiser viktige spørsmål om personvern og overvåkning.

### Digital sårbarhet
Når hele samfunnet er avhengig av digitale systemer, blir vi sårbare for cyberangrep og tekniske feil. Et angrep på Helse Sør-Øst i 2018 kompromitterte potensielt data om 2,8 millioner nordmenn.

### Demokratisk debatt
Algoritmer i sosiale medier kan forsterke polarisering ved å vise folk innhold de allerede er enige i. Desinformasjon kan spres raskt og påvirke valg og folkeavstemninger.`,
    },
    {
      id: 'it-1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-2-ex-3',
        number: '1.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner stordata (Big Data) ifølge «de tre V-ene»?',
        options: [
          { id: 'a', text: 'Vision, Value, Verify', isCorrect: false },
          { id: 'b', text: 'Volume, Velocity, Variety', isCorrect: true },
          { id: 'c', text: 'Virtual, Valid, Visual', isCorrect: false },
          { id: 'd', text: 'Volume, Version, Validation', isCorrect: false },
        ],
        solution: 'De tre V-ene er Volume (enorme datamengder), Velocity (data strømmer inn i høy hastighet/sanntid) og Variety (data kommer i mange ulike formater).',
      },
    },
    {
      id: 'it-1-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-2-ex-4',
        number: '1.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en bransje (ikke helse eller transport) og beskriv tre konkrete eksempler på hvordan digitalisering har endret den. Vurder om minst ett av eksemplene representerer digital transformasjon snarere enn bare digitalisering.',
        hints: ['Tenk på bransjer som media, bank/finans, handel, landbruk, kultur eller reiseliv.'],
        solution: `Eksempel: Banksektoren.

1. **Nettbank** (digitalisering): Kunder kan sjekke saldo, betale regninger og overføre penger uten å gå i banken. Dette er digitalisering av tradisjonelle tjenester.

2. **Vipps/mobilbetaling** (digital transformasjon): Helt ny betalingsmåte med mobilnummer. Endret forretningsmodellen og skapte nye bruksmønstre.

3. **Robotrådgivere** (digital transformasjon): KI-baserte systemer som gir investeringsrådgivning uten menneskelig rådgiver. Gjør tjenester som tidligere var forbeholdt rike kunder tilgjengelig for alle.

Vipps og robotrådgivere representerer digital transformasjon fordi de skapte fundamentalt nye tjenester.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Digitalisering** gjør analoge prosesser digitale, mens **digital transformasjon** endrer forretningsmodeller fundamentalt
- Digitalisering påvirker alle sektorer: **helse** (EPJ, e-resept), **utdanning** (digitale læringsplattformer), **transport** (Ruter, elbiler) og **offentlige tjenester** (Altinn, skattemeldingen)
- **Stordata** og **kunstig intelligens** gjør det mulig å analysere enorme datamengder og automatisere oppgaver
- Digitalisering har konsekvenser for **arbeidsmarkedet**, **personvern**, **sikkerhet** og **demokrati**

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Digitalisering | Gjøre analoge prosesser digitale |
| Digital transformasjon | Fundamentalt endre virksomhet med teknologi |
| Stordata | Ekstremt store datamengder fra mange kilder |
| Kunstig intelligens | Systemer som utfører oppgaver som krever menneskelig intelligens |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'it-1-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-2-ex-5',
        number: '1.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norges regjering har en digitaliseringsstrategi. Søk opp denne strategien og beskriv tre hovedmål. Diskuter om du mener Norge er godt på vei til å nå disse målene, og begrunn svaret ditt.',
        hints: ['Søk etter «Norges digitaliseringsstrategi» eller «Én digital offentlig sektor».'],
        solution: `Regjeringens digitaliseringsstrategi har blant annet disse målene: 1) Brukervennlige digitale tjenester til innbyggere og næringsliv, 2) Bedre samordning og informasjonsdeling mellom offentlige virksomheter, 3) Styrket digital kompetanse i hele befolkningen. Norge rangerer høyt internasjonalt (f.eks. i EUs Digital Economy and Society Index), men har fremdeles utfordringer med digital inkludering av eldre og innvandrere.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-2-ex-6',
        number: '1.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Kunstig intelligens vil føre til massearbeidsledighet.» Bruk konkrete eksempler og argumenter fra ulike perspektiver.',
        hints: ['Tenk på hvilke yrker som kan automatiseres, hvilke nye yrker som skapes, og hva som skjedde ved tidligere teknologiske revolusjoner.'],
        solution: `**For:** Rutineoppgaver automatiseres (selvbetjeningskasser, chatbotter, selvkjørende transport). McKinsey anslår at 30 % av arbeidstimer kan automatiseres. Lagerjobber erstattes av roboter (Amazon).

**Mot:** Historisk har teknologiske revolusjoner skapt flere jobber enn de fjernet. Nye yrker oppstår (datavitere, KI-trenere, UX-designere). KI kan frigjøre tid til mer meningsfylte oppgaver. Demografisk utvikling (eldrebølgen) betyr at vi faktisk trenger automatisering.

**Balansert vurdering:** KI vil trolig endre arbeidsmarkedet radikalt, men massearbeidsledighet er usannsynlig dersom samfunnet investerer i omskolering og utdanning. Overgangsperioden kan bli utfordrende for dem som mister jobben.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-2-ex-7',
        number: '1.2.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Tingenes internett (IoT) kobler fysiske gjenstander til internett. Hvilken av disse er den STØRSTE bekymringen knyttet til IoT?',
        options: [
          { id: 'a', text: 'IoT-enheter bruker for mye strøm', isCorrect: false, feedback: 'De fleste IoT-enheter bruker svært lite strøm.' },
          { id: 'b', text: 'IoT-enheter er for dyre for vanlige forbrukere', isCorrect: false, feedback: 'Prisene har falt drastisk de siste årene.' },
          { id: 'c', text: 'IoT-enheter kan utgjøre en sikkerhetsrisiko og samle inn sensitive data', isCorrect: true },
          { id: 'd', text: 'IoT-enheter fungerer bare med 5G-nettverk', isCorrect: false, feedback: 'IoT bruker mange ulike teknologier (WiFi, Bluetooth, ZigBee, etc.).' },
        ],
        solution: 'IoT-enheter (smarthjem, wearables, smartklokker) samler kontinuerlig data om vaner og bevegelser. Mange har dårlig sikkerhet og kan hackes. I 2016 ble hundretusener av IoT-enheter kapret i Mirai-botnet-angrepet, som tok ned store deler av internett.',
      },
    },
    {
      id: 'it-1-1-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-2-ex-8',
        number: '1.2.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en presentasjon (3-5 lysbilder) som viser digitaliseringen av en offentlig tjeneste i Norge. Velg én tjeneste (f.eks. skattemeldingen, passbestilling, førerkort), og vis hvordan den har endret seg fra analog til digital. Inkluder fordeler, ulemper og forbedringspotensial.',
        hints: ['Bruk konkrete eksempler. Vis gjerne «før og nå» som kontrast.'],
        solution: `Eksempel for skattemeldingen: Lysbilde 1) Tittel og introduksjon. Lysbilde 2) Før: Papirskjema, manuell utfylling, postlevering, lang behandlingstid. Lysbilde 3) Nå: Forhåndsutfylt, digital levering via Altinn/skatteetaten.no, automatisk behandling, penger på konto innen dager. Lysbilde 4) Fordeler (tidsbesparelse, færre feil, raskere refusjon) og ulemper (digitalt utenforskap, personvernrisiko). Lysbilde 5) Forbedringspotensial (enklere grensesnitt, bedre støtte for selvstendig næringsdrivende).`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: Digital dømmekraft og kildekritikk
// ============================================================================

export const CHAPTER_IT_1_1_3: TextbookChapter = {
  id: 'it-1-1-3',
  courseId: 'it-1',
  chapterNumber: '1.3',
  title: 'Digital dømmekraft og kildekritikk',
  description: 'Lær å vurdere digitale kilder kritisk, gjenkjenne falske nyheter og desinformasjon, forstå algoritmefiltre og ekkokamre, og bruke faktasjekk-metoder.',
  estimatedMinutes: 45,
  prevChapter: 'it-1-1-2',
  nextChapter: 'it-1-1-4',
  competenceGoals: [
    'vurdere digitale kilder kritisk og gjenkjenne desinformasjon',
    'forklare hvordan algoritmer påvirker informasjonsstrømmen',
    'bruke metoder for faktasjekk og kildekritikk',
  ],
  keyTerms: [
    { term: 'Kildekritikk', definition: 'Systematisk vurdering av en kildes troverdighet, hensikt, aktualitet og relevans.' },
    { term: 'Desinformasjon', definition: 'Bevisst feilaktig informasjon som spres med hensikt å villede eller manipulere.' },
    { term: 'Misinformasjon', definition: 'Uriktig informasjon som spres uten bevisst hensikt å villede — avsenderen tror selv informasjonen er sann.' },
    { term: 'Falske nyheter', definition: 'Nyhetsliknende innhold som er helt eller delvis usant, ofte laget for å generere klikk eller påvirke meninger.' },
    { term: 'Filterboble', definition: 'Situasjonen der algoritmer viser deg innhold basert på dine tidligere søk og klikk, slik at du får et ensidig bilde av verden.' },
    { term: 'Ekkokammer', definition: 'Et lukket informasjonsmiljø der folk bare eksponeres for synspunkter som bekrefter det de allerede tror.' },
    { term: 'Algoritme', definition: 'Et sett med regler eller instruksjoner som en datamaskin følger for å løse en oppgave, for eksempel å sortere nyhetsstrømmen din.' },
    { term: 'CRAAP-test', definition: 'En metode for kildekritikk som vurderer Currency (aktualitet), Relevance (relevans), Authority (autoritet), Accuracy (nøyaktighet) og Purpose (hensikt).' },
  ],
  content: [
    {
      id: 'it-1-1-3-intro',
      type: 'text',
      content: `## Digital dømmekraft og kildekritikk

I 2019 spredde det seg en artikkel på norske sosiale medier som hevdet at 5G-stråling var farlig for helsa. Artikkelen så profesjonell ut, hadde et troverdig domenenavn og refererte til «vitenskapelige studier». Tusenvis delte den. Problemet? Artikkelen var full av feilaktige påstander, studiene var tatt ut av kontekst, og nettsiden var eid av en enkeltperson uten medisinsk bakgrunn.

I en verden der hvem som helst kan publisere hva som helst på internett, er evnen til å vurdere informasjon kritisk viktigere enn noen gang. Digital dømmekraft handler om å navigere i et informasjonslandskap der sannhet og løgn lever side om side.

I dette kapittelet skal du lære:
- Forskjellen mellom desinformasjon og misinformasjon
- Hvordan algoritmer skaper filterbobler og ekkokamre
- Praktiske metoder for kildekritikk og faktasjekk
- Hvorfor digital dømmekraft er viktig for demokratiet`,
    },
    {
      id: 'it-1-1-3-def-1',
      type: 'definition',
      title: 'Desinformasjon og misinformasjon',
      content: `Det er viktig å skille mellom **desinformasjon** og **misinformasjon**:

**Desinformasjon** er bevisst usann eller villedende informasjon som spres med en bestemt hensikt — å manipulere, skape forvirring, undergrave tillit eller tjene politiske eller økonomiske interesser. Eksempler: statlig propaganda, koordinerte trollfabrikker, bevisst manipulerte bilder og videoer (deepfakes).

**Misinformasjon** er uriktig informasjon som spres uten ondsinnet hensikt. Avsenderen tror selv at informasjonen er sann. Eksempler: en person som deler en utdatert helseartikkel i god tro, eller en som videreformidler et rykte uten å sjekke fakta.

Begge er problematiske, men desinformasjon er mer alvorlig fordi den er bevisst og ofte systematisk. I praksis kan det være vanskelig å avgjøre om noe er desinformasjon eller misinformasjon, fordi vi sjelden kjenner avsenderens hensikt.`,
    },
    {
      id: 'it-1-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Gjenkjenne desinformasjon',
      problem: 'Du ser en artikkel på sosiale medier med overskriften «Sjokkerende studie: Vaksiner dobler risikoen for autisme». Artikkelen er publisert av «Fritt Helse Forum» og har blitt delt 10 000 ganger. Hvordan vurderer du denne artikkelen?',
      solution: `**Steg 1: Sjekk kilden.** «Fritt Helse Forum» er ikke et anerkjent medisinsk tidsskrift eller nyhetsbyrå. Søk etter hvem som driver nettsiden, og om den er kjent for å publisere upålitelig innhold.

**Steg 2: Sjekk påstanden.** Sammenhengen mellom vaksiner og autisme ble grundig avkreftet allerede i 1998-studien av Andrew Wakefield, som ble trukket tilbake pga. svindel. Verdens helseorganisasjon, norske helsemyndigheter og hundrevis av studier bekrefter at det ikke finnes noen slik sammenheng.

**Steg 3: Sjekk retorikken.** Ordene «sjokkerende» og påstand om dobling av risiko er emosjonelt ladede og sensasjonelle — typiske kjennetegn på desinformasjon.

**Steg 4: Kryssreferanse.** Faktisk.no, Snopes og WHO kan brukes for å verifisere påstanden.

**Konklusjon:** Dette er sannsynligvis desinformasjon — en bevisst villedende artikkel som utnytter frykt.`,
    },
    {
      id: 'it-1-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-3-ex-1',
        number: '1.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom desinformasjon og misinformasjon?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell — begge betyr falsk informasjon', isCorrect: false, feedback: 'Det er en viktig forskjell i hensikten bak.' },
          { id: 'b', text: 'Desinformasjon spres bevisst for å villede, mens misinformasjon spres ubevisst', isCorrect: true },
          { id: 'c', text: 'Misinformasjon er farligere enn desinformasjon', isCorrect: false, feedback: 'Desinformasjon er generelt mer alvorlig fordi den er systematisk og bevisst.' },
          { id: 'd', text: 'Desinformasjon finnes bare på sosiale medier', isCorrect: false, feedback: 'Desinformasjon kan spres via alle kanaler.' },
        ],
        solution: 'Desinformasjon er bevisst usann informasjon spredt med hensikt å villede. Misinformasjon er uriktig informasjon som spres av folk som selv tror den er sann.',
      },
    },
    {
      id: 'it-1-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-3-ex-2',
        number: '1.3.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gi to eksempler på desinformasjon og to eksempler på misinformasjon. Forklar hvorfor du kategoriserer dem slik.',
        hints: ['Tenk på hensikten bak — er informasjonen spredt med vilje for å villede, eller tror avsenderen den er sann?'],
        solution: `**Desinformasjon:** 1) En statlig trollfabrikk som lager falske nyhetsartikler for å påvirke et valg i et annet land — bevisst hensikt. 2) En bedrift som publiserer villedende reklame om produktets miljøeffekt (grønnvasking) — bevisst villedende.

**Misinformasjon:** 1) En bestemor som deler en gammel artikkel om helsekostråd som er motbevist, fordi hun genuint tror det er god informasjon. 2) En elev som skriver i en oppgave at Den store muren i Kina er synlig fra verdensrommet — en vanlig myte som ofte gjengis i god tro.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-3-def-2',
      type: 'definition',
      title: 'Filterbobler og ekkokamre',
      content: `**Filterbobler** oppstår når algoritmer på søkemotorer og sosiale medier tilpasser innholdet du ser basert på dine tidligere handlinger — hva du har søkt på, likt, delt og klikket på. Google gir forskjellige søkeresultater til forskjellige brukere. Facebook og TikTok viser deg innhold de tror du vil engasjere deg med. Resultatet er at du ser et filtrert bilde av verden som bekrefter dine eksisterende meninger.

Begrepet ble introdusert av Eli Pariser i boken *The Filter Bubble* (2011).

**Ekkokamre** er et beslektet fenomen der folk omgir seg med meningsfeller — enten bevisst (ved å følge folk man er enig med) eller ubevisst (gjennom algoritmestyrt innhold). I et ekkokammer hører du bare ditt eget synspunkt gjentatt og forsterket, mens motargumenter filtreres bort. Dette kan føre til polarisering og manglende forståelse for andres perspektiver.`,
    },
    {
      id: 'it-1-1-3-text-1',
      type: 'text',
      title: 'Kildekritikk på nett — CRAAP-testen',
      content: `## Praktisk kildekritikk: CRAAP-testen

En nyttig metode for å vurdere kilder er CRAAP-testen:

### Currency (Aktualitet)
- Når ble informasjonen publisert eller oppdatert?
- Er informasjonen oppdatert nok for ditt formål?
- Fungerer lenkene i artikkelen?

### Relevance (Relevans)
- Er informasjonen relevant for ditt tema?
- Hvem er den tiltenkte målgruppen?
- Er nivået passende (for akademisk, for populært)?

### Authority (Autoritet)
- Hvem er forfatteren? Har de faglig kompetanse?
- Er organisasjonen bak anerkjent?
- Finnes det kontaktinformasjon?

### Accuracy (Nøyaktighet)
- Har informasjonen referanser og kilder?
- Kan påstandene verifiseres av andre kilder?
- Er det åpenbare feil eller selvmotsigelser?

### Purpose (Hensikt)
- Hva er formålet med informasjonen — informere, overtale, selge, underholde?
- Er innholdet objektivt eller preget av en bestemt vinkling?
- Er det tydelig at det er reklame, meningsinnlegg eller nyheter?

Ved å systematisk stille disse spørsmålene kan du raskt vurdere en kildes pålitelighet.`,
    },
    {
      id: 'it-1-1-3-example-2',
      type: 'example',
      title: 'Eksempel: Bruke CRAAP-testen',
      problem: 'Bruk CRAAP-testen på denne kilden: En bloggpost fra 2019 skrevet av en person uten oppgitt fagbakgrunn, på nettsiden «sannhetenomklima.no», som hevder at klimaendringene har stoppet opp.',
      solution: `**Currency:** 2019 — relativt nylig, men klimaforskning oppdateres jevnlig. ✓/✗

**Relevance:** Relevant for klimaspørsmålet. ✓

**Authority:** Forfatteren har ingen oppgitt fagbakgrunn. Nettsiden er ukjent og har ingen redaksjonell policy. ✗

**Accuracy:** Påstanden om at klimaendringene har stoppet motstrider data fra NASA, IPCC og Meteorologisk institutt. Ingen vitenskapelige kilder oppgitt. ✗

**Purpose:** Nettsiden ser ut til å ha som formål å så tvil om klimaforskning. Ensidig vinkling uten motargumenter. ✗

**Vurdering:** Denne kilden scorer dårlig på 3 av 5 kriterier og er ikke pålitelig for faglig bruk. Bruk heller FNs klimapanel (IPCC) eller Meteorologisk institutt.`,
    },
    {
      id: 'it-1-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-3-ex-3',
        number: '1.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en filterboble?',
        options: [
          { id: 'a', text: 'Et antivirusprogram som filtrerer farlige nettsider', isCorrect: false },
          { id: 'b', text: 'En situasjon der algoritmer tilpasser innholdet du ser basert på dine tidligere handlinger', isCorrect: true },
          { id: 'c', text: 'En type spamfilter i e-post', isCorrect: false },
          { id: 'd', text: 'Et verktøy som blokkerer reklame på nettsider', isCorrect: false },
        ],
        solution: 'En filterboble oppstår når algoritmer på søkemotorer og sosiale medier viser deg personalisert innhold basert på dine tidligere søk, klikk og preferanser, slik at du får et filtrert bilde av verden.',
      },
    },
    {
      id: 'it-1-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-3-ex-4',
        number: '1.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn en nyhetsartikkel på nett og anvend CRAAP-testen på den. Skriv ned vurderingen din for hvert av de fem kriteriene og gi en samlet vurdering av kildens pålitelighet.',
        hints: ['Velg en artikkel om et aktuelt tema. Gå systematisk gjennom alle fem kriteriene.'],
        solution: `Eksempelsvar (VG-artikkel om statsbudsjettet): Currency: Publisert i dag, aktuell. ✓ Relevance: Relevant for samfunnskunnskap. ✓ Authority: VG er en etablert riksavis med redaktøransvar. ✓ Accuracy: Artikkelen refererer til konkrete tall fra statsbudsjettet og ekspertkommentarer. ✓ Purpose: Nyhetsformidling, men kan ha politisk vinkling i overskrift. ✓/✗ Samlet: Pålitelig som nyhetskilde, men bør suppleres med flere kilder for et komplett bilde.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-3-text-2',
      type: 'text',
      title: 'Faktasjekk-metoder',
      content: `## Faktasjekk i praksis

Utover CRAAP-testen finnes det flere praktiske metoder og verktøy for faktasjekk:

### Lateralt lesing
I stedet for å lese artikkelen grundig, åpner du nye faner og søker etter hva andre sier om kilden og påstandene. Denne metoden, kalt **lateral lesing**, er det profesjonelle faktasjekkere bruker. Forskere ved Stanford fant at eksperter bruker lateral lesing, mens studenter (og professorer!) ofte leser vertikalt — de bruker for mye tid på å analysere selve nettsiden i stedet for å sjekke hva andre sier om den.

### Norske og internasjonale faktasjekk-tjenester
- **Faktisk.no** — Norges første uavhengige faktasjekk-redaksjon
- **Snopes.com** — Internasjonal faktasjekk
- **Google Reverse Image Search** — Sjekk om et bilde er brukt i andre sammenhenger
- **Wayback Machine (archive.org)** — Se eldre versjoner av nettsider

### SIFT-metoden
En forenklet metode for rask vurdering:
- **S**top — Stopp opp før du deler
- **I**nvestigate the source — Sjekk hvem som står bak
- **F**ind better coverage — Finn andre kilder som dekker samme tema
- **T**race claims — Spor påstandene tilbake til originalkilden`,
    },
    {
      id: 'it-1-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Desinformasjon** spres bevisst for å villede, mens **misinformasjon** spres i god tro
- **Filterbobler** og **ekkokamre** kan gi et ensidig bilde av verden
- **CRAAP-testen** er en systematisk metode for kildekritikk
- **Lateral lesing** og **SIFT-metoden** er effektive strategier for faktasjekk
- Faktasjekk-tjenester som **Faktisk.no** og **Snopes** kan hjelpe med å verifisere påstander

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Desinformasjon | Bevisst usann informasjon spredt for å villede |
| Filterboble | Algoritmer tilpasser innhold basert på dine handlinger |
| CRAAP-test | Kildekritisk metode: aktualitet, relevans, autoritet, nøyaktighet, hensikt |
| Lateral lesing | Søke etter hva andre sier om kilden i stedet for å bare lese kilden selv |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'it-1-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-3-ex-5',
        number: '1.3.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er lateral lesing?',
        options: [
          { id: 'a', text: 'Å lese en artikkel grundig fra topp til bunn', isCorrect: false, feedback: 'Det er vertikal lesing.' },
          { id: 'b', text: 'Å åpne nye faner og søke etter hva andre sier om kilden og påstandene', isCorrect: true },
          { id: 'c', text: 'Å lese artikkelen på et annet språk', isCorrect: false },
          { id: 'd', text: 'Å sammenligne to artikler side om side', isCorrect: false, feedback: 'Det er en del av lateral lesing, men ikke hele definisjonen.' },
        ],
        solution: 'Lateral lesing betyr å forlate kilden og søke etter hva andre — eksperter, faktasjekkere, andre medier — sier om kilden og dens påstander. Det er den metoden profesjonelle faktasjekkere bruker.',
      },
    },
    {
      id: 'it-1-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-3-ex-6',
        number: '1.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan filterbobler og ekkokamre kan påvirke demokratiet. Gi konkrete eksempler og vurder hva som kan gjøres for å motvirke problemet.',
        hints: ['Tenk på politisk polarisering, valgpåvirkning og evnen til å forstå andres synspunkter.'],
        solution: `Filterbobler og ekkokamre kan skade demokratiet ved å: 1) Forsterke politisk polarisering — folk hører bare egne meninger, som blir mer ekstreme over tid. 2) Gjøre det lettere å spre desinformasjon — hvis en usann påstand spres i et ekkokammer, finnes det ingen motargumenter. 3) Undergrave evnen til kompromiss — demokrati krever at folk forstår andres perspektiver.

Eksempler: Russisk valgpåvirkning via sosiale medier i USA (2016). Spredning av vaksinemotstand i lukkede grupper. Brexit-kampanjen med målrettede annonser.

Tiltak: Variere informasjonskilder bevisst, bruke algoritme-bevisste verktøy, regulering av plattformene, økt digital kompetanse i skolen, støtte til uavhengig journalistikk.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-3-ex-7',
        number: '1.3.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et kontroversielt tema (f.eks. kjernekraft, GMO, e-sigaretter) og finn tre kilder med ulike perspektiver. Bruk CRAAP-testen på alle tre og vurder hvilken som er mest pålitelig. Begrunn valget ditt.',
        hints: ['Velg kilder fra ulike typer avsendere — for eksempel en avisartikkel, en fagfellevurdert studie og et blogginnlegg.'],
        solution: `Eksempel for kjernekraft: 1) NRK-artikkel — god autoritet og nøyaktighet, journalistisk balansert. 2) Greenpeace-rapport — tydelig hensikt (mot kjernekraft), men godt dokumentert. 3) Energinorge.no — bransjens perspektiv (for), faglig solid men med interessekonflikt. NRK-artikkelen scorer best samlet fordi den er journalistisk balansert, mens de andre har tydelige perspektiver som bør tas med i beregningen.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-3-ex-8',
        number: '1.3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gå inn på Faktisk.no og finn en påstand som er blitt faktasjekket. Beskriv hvilken påstand som ble sjekket, hvilken metode Faktisk.no brukte, og hva konklusjonen var. Reflekter over hvorfor slik faktasjekk er viktig for demokratiet.',
        hints: ['Faktisk.no har en arkivside der du kan bla i tidligere faktasjekker.'],
        solution: `Eksempelsvar: Faktisk.no sjekket påstanden «Norge bruker mest penger på helse i Europa». De fant kildedata fra OECD og Eurostat, sammenlignet tall justert for kjøpekraft, og konkluderte med at påstanden var «delvis feil» — Norge bruker mye, men ikke mest når tallene justeres korrekt. Slik faktasjekk er viktig fordi politikere og medier ofte bruker tall selektivt, og uavhengig verifisering sikrer at den offentlige debatten baserer seg på korrekt informasjon.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: Digitalt utenforskap og universell utforming
// ============================================================================

export const CHAPTER_IT_1_1_4: TextbookChapter = {
  id: 'it-1-1-4',
  courseId: 'it-1',
  chapterNumber: '1.4',
  title: 'Digitalt utenforskap og universell utforming',
  description: 'Forstå hvem som faller utenfor digitalt, barrierer for digital deltakelse, WCAG-retningslinjer for tilgjengelighet, og tiltak for digital inkludering.',
  estimatedMinutes: 45,
  prevChapter: 'it-1-1-3',
  nextChapter: 'it-1-1-5',
  competenceGoals: [
    'gjøre rede for utfordringer knyttet til digitalt utenforskap',
    'forklare prinsipper for universell utforming av digitale løsninger',
    'vurdere tiltak for å sikre digital inkludering',
  ],
  keyTerms: [
    { term: 'Digitalt utenforskap', definition: 'Situasjonen der mennesker ikke kan delta fullt ut i det digitale samfunnet på grunn av manglende tilgang, kompetanse eller andre barrierer.' },
    { term: 'Universell utforming', definition: 'Design av produkter og tjenester slik at de kan brukes av alle, uavhengig av funksjonsevne, alder, kulturell bakgrunn eller teknisk kompetanse.' },
    { term: 'WCAG', definition: 'Web Content Accessibility Guidelines — internasjonale retningslinjer for tilgjengelighet på nett, utviklet av W3C.' },
    { term: 'Digital inkludering', definition: 'Tiltak og strategier som sikrer at alle kan delta i det digitale samfunnet, uavhengig av bakgrunn og forutsetninger.' },
    { term: 'Skjermleser', definition: 'Hjelpemiddel som leser opp innholdet på skjermen for personer med synshemming. Eksempler: JAWS, VoiceOver, NVDA.' },
    { term: 'Digitalt skille', definition: 'Forskjellen mellom de som har tilgang til og kan bruke digital teknologi, og de som ikke har det.' },
    { term: 'WAI-ARIA', definition: 'Tilleggsattributter som gjør dynamiske nettsider tilgjengelige for hjelpemiddelteknologi.' },
  ],
  content: [
    {
      id: 'it-1-1-4-intro',
      type: 'text',
      content: `## Digitalt utenforskap og universell utforming

Forestill deg at du er 82 år gammel, bor alene på bygda og har dårlig syn. Banken din har lagt ned filialen og krever at du bruker nettbank. Legekontoret har gått over til digital timebestilling. Skattemeldingen er digital. Uten hjelp fra familie risikerer du å stå utenfor viktige tjenester.

I Norge, et av verdens mest digitaliserte land, mangler rundt 600 000 mennesker grunnleggende digitale ferdigheter. Når stadig flere tjenester blir digitale, risikerer disse menneskene å falle utenfor.

I dette kapittelet skal du lære:
- Hvem som rammes av digitalt utenforskap og hvorfor
- Ulike barrierer for digital deltakelse
- Prinsipper for universell utforming (WCAG)
- Tiltak for å sikre at alle kan delta digitalt`,
    },
    {
      id: 'it-1-1-4-def-1',
      type: 'definition',
      title: 'Digitalt utenforskap',
      content: `**Digitalt utenforskap** innebærer at en person ikke kan delta fullt ut i det digitale samfunnet. Kompetanse Norge identifiserer disse hovedgruppene:

- **Eldre:** Mange over 75 år har begrenset digital erfaring
- **Innvandrere:** Språkbarrierer og ulik kulturell bakgrunn
- **Funksjonshemmede:** Synshemming, hørselshemming, motoriske utfordringer
- **Lavtutdannede:** Sterk korrelasjon mellom utdanningsnivå og digitale ferdigheter
- **Økonomisk vanskeligstilte:** Ikke alle har råd til datamaskin og internett

Det digitale utenforskapet er et demokratisk problem: når offentlige tjenester blir digitale, risikerer sårbare grupper å miste tilgang til rettigheter og tjenester de har krav på.`,
    },
    {
      id: 'it-1-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Barrierer i praksis',
      problem: 'Ahmed (68) har bodd i Norge i 15 år og snakker greit norsk muntlig, men sliter med skriftlig norsk. Han trenger å fornye passet sitt, men prosessen er nå digital. Hvilke barrierer møter han?',
      solution: `Ahmed møter flere barrierer:

1. **Språkbarriere:** Nettskjemaer har komplekst byråkratisk norsk
2. **Ferdighetsnivå:** Prosessen krever innlogging med BankID og opplasting av foto
3. **Manglende nettverk:** Uten familie som kan hjelpe har han begrensede muligheter

**Løsninger:** Flerspråklige nettsider, veiledningsvideoer, gratis kurs ved biblioteket, mulighet for personlig oppmøte, klarspråk i offentlige tjenester.`,
    },
    {
      id: 'it-1-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-4-ex-1',
        number: '1.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med digitalt utenforskap?',
        options: [
          { id: 'a', text: 'At man velger å ikke bruke digitale tjenester', isCorrect: false },
          { id: 'b', text: 'At man ikke kan delta fullt ut i det digitale samfunnet pga. manglende tilgang eller kompetanse', isCorrect: true },
          { id: 'c', text: 'At man bor i et land uten internett', isCorrect: false },
          { id: 'd', text: 'At man ikke har konto på sosiale medier', isCorrect: false },
        ],
        solution: 'Digitalt utenforskap betyr at man ikke kan delta fullt ut i det digitale samfunnet, enten på grunn av manglende tilgang, ferdigheter eller utilgjengelige tjenester.',
      },
    },
    {
      id: 'it-1-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-4-ex-2',
        number: '1.4.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv tre ulike barrierer for digital deltakelse og gi et konkret eksempel til hver.',
        hints: ['Tenk på alder, språk, funksjonshemming, økonomi og kompetanse.'],
        solution: `1. **Kompetansebarriere:** Kari (79) har aldri brukt datamaskin og vet ikke hvordan hun logger inn på Helsenorge.no.
2. **Språkbarriere:** Fatima (35) forstår ikke de norske skjemaene på Altinn.
3. **Økonomisk barriere:** Jonas (16) har bare internett via telefon og sliter med skolearbeid som krever datamaskin.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-4-def-2',
      type: 'definition',
      title: 'Universell utforming og WCAG',
      content: `**Universell utforming** (UU) betyr å designe slik at alle kan bruke det uten spesialtilpasning. I Norge er UU av IKT lovpålagt.

**WCAG** er bygget på fire prinsipper:

1. **Mulig å oppfatte (Perceivable):** Bilder trenger alt-tekst. Videoer trenger undertekster.
2. **Mulig å betjene (Operable):** Nettsiden må kunne brukes med tastatur.
3. **Forståelig (Understandable):** Teksten må være lesbar. Feilmeldinger må være tydelige.
4. **Robust:** Innholdet må fungere med ulike nettlesere og hjelpemiddelteknologi.

WCAG har tre nivåer: A (minimum), AA (lovkrav i Norge) og AAA (optimal).`,
    },
    {
      id: 'it-1-1-4-text-1',
      type: 'text',
      title: 'Praktisk universell utforming',
      content: `## Praktisk UU for utviklere

### Bilder og alternativ tekst
\`\`\`html
<img src="graf.png" alt="Søylediagram over internettbruk fordelt på aldersgrupper">
<img src="dekor.png" alt=""> <!-- Dekorativt bilde -->
\`\`\`

### Fargekontrast
WCAG krever minst 4.5:1 kontrast for normal tekst. Bruk ikke farge alene for å formidle informasjon.

### Tastaturnavigasjon
Bruk semantisk HTML (\`<button>\`, \`<a>\`, \`<nav>\`) fremfor generiske \`<div>\`-elementer.

### Skjemaer
Alle felt trenger synlige labels. Feilmeldinger må forklare hva som er galt.

### Testing
- Lighthouse i Chrome DevTools gir tilgjengelighetsscore
- axe DevTools finner WCAG-brudd
- Manuell test: Naviger med kun tastatur, zoom til 200 %`,
    },
    {
      id: 'it-1-1-4-example-2',
      type: 'example',
      title: 'Eksempel: God vs. dårlig tilgjengelighet',
      problem: 'Sammenlign to versjoner av en nettside — en som er universelt utformet og en som ikke er det.',
      solution: `**Dårlig tilgjengelighet:**
\`\`\`html
<div onclick="submit()">Send skjema</div>
<img src="info.jpg">
<span style="color: #aaa">Viktig melding</span>
\`\`\`
Problemer: div er ikke tastatur-tilgjengelig, bildet mangler alt-tekst, teksten har for lav kontrast.

**God tilgjengelighet:**
\`\`\`html
<button type="submit">Send skjema</button>
<img src="info.jpg" alt="Informasjon om søknadsfristen">
<p style="color: #333">Viktig melding</p>
\`\`\`
Button er tastatur-tilgjengelig, bildet har beskrivende alt-tekst, teksten har god kontrast.`,
    },
    {
      id: 'it-1-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-4-ex-3',
        number: '1.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilke fire prinsipper er WCAG bygget på?',
        options: [
          { id: 'a', text: 'Pent, raskt, sikkert, tilgjengelig', isCorrect: false },
          { id: 'b', text: 'Mulig å oppfatte, mulig å betjene, forståelig, robust', isCorrect: true },
          { id: 'c', text: 'Lesbart, klikkbart, søkbart, delbart', isCorrect: false },
          { id: 'd', text: 'Responsivt, semantisk, validert, optimalisert', isCorrect: false },
        ],
        solution: 'WCAG er bygget på POUR: Perceivable, Operable, Understandable og Robust.',
      },
    },
    {
      id: 'it-1-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-4-ex-4',
        number: '1.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test en offentlig nettside med Lighthouse eller WAVE og rapporter tre funn. Vurder hvor godt siden følger WCAG.',
        hints: ['Chrome → Inspiser → Lighthouse → Accessibility.'],
        solution: `Eksempel (nav.no): Score 92/100. Funn: 1) Noen bilder mangler alt-tekst. 2) Enkelte lenker har for lav kontrast. 3) Noen skjemafelt mangler label. Nav scorer generelt høyt som forventet av offentlig nettside.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Digitalt utenforskap** rammer eldre, innvandrere, funksjonshemmede og økonomisk vanskeligstilte
- **Universell utforming** er lovpålagt i Norge og betyr design for alle
- **WCAG** har fire prinsipper (POUR) og tre nivåer (A, AA, AAA)
- Utviklere kan bruke alt-tekst, kontrast, tastaturnavigasjon og semantisk HTML`,
    },
    // --- Samleoppgaver ---
    {
      id: 'it-1-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-4-ex-5',
        number: '1.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor universell utforming ikke bare er viktig for funksjonshemmede, men for alle brukere.',
        hints: ['Tenk på undertekster, stor tekst og tastaturnavigasjon.'],
        solution: `Undertekster hjelper døve, men også alle som ser video uten lyd. Stor tekst hjelper synshemmede, men også alle som leser i sollys. Tastaturnavigasjon er nødvendig for motorisk funksjonshemmede, men nyttig for alle med ødelagt mus. UU er som fortauskanter: laget for rullestolbrukere, men brukes av alle med barnevogn.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-4-ex-6',
        number: '1.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om offentlige tjenester bør tilby analoge alternativer i tillegg til digitale.',
        hints: ['Tenk på effektivitet, kostnader, tilgjengelighet og rettigheter.'],
        solution: `For full digitalisering: Mer effektivt, billigere, tilgjengelig 24/7. Mot: 600 000 nordmenn mangler ferdigheter. Balansert: Digital hovedløsning med analoge alternativer som supplement, kombinert med investering i digital opplæring.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-4-ex-7',
        number: '1.4.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilket WCAG-nivå er lovpålagt for offentlige nettsider i Norge?',
        options: [
          { id: 'a', text: 'Nivå A', isCorrect: false },
          { id: 'b', text: 'Nivå AA', isCorrect: true },
          { id: 'c', text: 'Nivå AAA', isCorrect: false },
          { id: 'd', text: 'Det er ingen krav', isCorrect: false },
        ],
        solution: 'WCAG 2.1 nivå AA er lovpålagt i Norge gjennom likestillings- og diskrimineringsloven.',
      },
    },
    {
      id: 'it-1-1-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-4-ex-8',
        number: '1.4.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en enkel nettside (HTML/CSS) som demonstrerer god universell utforming med overskrift, bilde med alt-tekst, avsnitt og lenke.',
        hints: ['Bruk semantisk HTML, tilstrekkelig kontrast og husk alt-attributtet.'],
        solution: `\`\`\`html
<!DOCTYPE html>
<html lang="no">
<head><title>UU-demo</title>
<style>body{font-family:Arial;color:#333;} a{color:#0056b3;} a:focus{outline:3px solid #0056b3;}</style>
</head>
<body>
<h1>Tilgjengelig nettside</h1>
<img src="elev.jpg" alt="Elev som bruker datamaskin i klasserom">
<p>Denne nettsiden demonstrerer universell utforming.</p>
<a href="https://www.uutilsynet.no">Les mer hos UU-tilsynet</a>
</body></html>
\`\`\``,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5: Teknologi, etikk og bærekraft
// ============================================================================

export const CHAPTER_IT_1_1_5: TextbookChapter = {
  id: 'it-1-1-5',
  courseId: 'it-1',
  chapterNumber: '1.5',
  title: 'Teknologi, etikk og bærekraft',
  description: 'Utforsk etiske problemstillinger ved digital teknologi, personvern vs. overvåkning, KI-etikk og algoritmisk diskriminering, samt teknologiens miljøpåvirkning.',
  estimatedMinutes: 45,
  prevChapter: 'it-1-1-4',
  nextChapter: 'it-1-2-1',
  competenceGoals: [
    'drøfte etiske problemstillinger knyttet til digital teknologi',
    'vurdere personvern opp mot samfunnsnytte',
    'reflektere over teknologiens miljøpåvirkning og bærekraft',
  ],
  keyTerms: [
    { term: 'Teknologietikk', definition: 'Etiske spørsmål som oppstår ved utvikling og bruk av teknologi.' },
    { term: 'Personvern', definition: 'Retten til å kontrollere egne personopplysninger og beskytte sitt privatliv.' },
    { term: 'GDPR', definition: 'EUs personvernforordning som gjelder i Norge gjennom EØS-avtalen.' },
    { term: 'Deepfake', definition: 'Manipulerte bilder, lyd eller video skapt med KI som er vanskelig å skille fra ekte.' },
    { term: 'Algoritmisk diskriminering', definition: 'Når algoritmer forskjellsbehandler grupper basert på skjeve treningsdata.' },
    { term: 'E-avfall', definition: 'Kassert elektronisk utstyr. Verdens raskest voksende avfallsstrøm.' },
    { term: 'Planlagt foreldelse', definition: 'Bevisst design der produkter har begrenset levetid.' },
  ],
  content: [
    {
      id: 'it-1-1-5-intro',
      type: 'text',
      content: `## Teknologi, etikk og bærekraft

Da Cambridge Analytica i 2018 ble avslørt for å ha brukt Facebook-data fra millioner av brukere til politisk manipulasjon, ble det tydelig at teknologi ikke er nøytral. Hvem eier dataene dine? Er det greit at KI avgjør om du får lån? Hva gjør vi med millioner av tonn e-avfall?

I dette kapittelet skal du lære:
- Sentrale etiske problemstillinger knyttet til digital teknologi
- Spenningen mellom personvern og overvåkning
- Utfordringer med KI og algoritmisk diskriminering
- Teknologiens miljøpåvirkning og veien mot bærekraft`,
    },
    {
      id: 'it-1-1-5-def-1',
      type: 'definition',
      title: 'Personvern og GDPR',
      content: `**Personvern** er retten til å bestemme over egne personopplysninger. **GDPR** gir deg:

- **Rett til innsyn:** Se hvilke data en bedrift har om deg
- **Rett til sletting:** Be om at data fjernes
- **Rett til dataportabilitet:** Få dataene i maskinlesbart format
- **Samtykke:** Bedrifter må ha ditt eksplisitte samtykke
- **Formålsbegrensning:** Data skal kun brukes til oppgitt formål

Datatilsynet er tilsynsmyndigheten i Norge og kan ilegge bøter ved brudd.`,
    },
    {
      id: 'it-1-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Smittestopp-appen',
      problem: 'Under koronapandemien utviklet FHI appen Smittestopp med GPS-sporing. Hvilke etiske dilemmaer oppstod?',
      solution: `**For:** Effektiv smittesporing, raskere enn manuell, kan redde liv.
**Mot:** GPS gir detaljert bevegelsesmønster, sentral lagring kan misbrukes, svekker tillit.
**Resultat:** Datatilsynet stoppet første versjon. Ny versjon brukte Bluetooth med anonyme nøkler — bedre balanse mellom folkehelse og personvern.
**Lærdom:** Privacy by design — personvern innebygd fra starten.`,
    },
    {
      id: 'it-1-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-5-ex-1',
        number: '1.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gir GDPR deg rett til?',
        options: [
          { id: 'a', text: 'Gratis tilgang til alle nettsider', isCorrect: false },
          { id: 'b', text: 'Innsyn i, sletting av og overføring av dine personopplysninger', isCorrect: true },
          { id: 'c', text: 'Full anonymitet på internett', isCorrect: false },
          { id: 'd', text: 'Forbud mot all datainnsamling', isCorrect: false },
        ],
        solution: 'GDPR gir rett til innsyn, sletting, dataportabilitet, og krever rettslig grunnlag for behandling av personopplysninger.',
      },
    },
    {
      id: 'it-1-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-5-ex-2',
        number: '1.5.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn personvernerklæringen til en nettside du bruker ofte. Hvilke data samler de inn og hvordan brukes de?',
        hints: ['Sjekk bunnen av nettsiden eller under «om oss/personvern».'],
        solution: `Eksempel (Komplett.no): Samler inn navn, adresse, e-post, betalingsinfo, kjøpshistorikk, IP-adresse. Brukes til ordrebehandling, kundeservice, markedsføring og analyse.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-5-def-2',
      type: 'definition',
      title: 'Algoritmisk diskriminering',
      content: `**Algoritmisk diskriminering** oppstår når KI-systemer behandler grupper forskjellig basert på skjeve treningsdata:

- **Amazons rekrutteringsverktøy (2018):** Rangerte kvinner lavere fordi treningsdataene viste historisk mannsdominans
- **Ansiktsgjenkjenning:** Høyere feilrate for mørkhudede og kvinner enn for hvite menn
- **Kredittvurdering:** Algoritmer kan nekte lån basert på postnummer, som indirekte diskriminerer

Fundamentale spørsmål: Hvem er ansvarlig når en algoritme diskriminerer? Bør KI kunne forklare sine avgjørelser?`,
    },
    {
      id: 'it-1-1-5-text-1',
      type: 'text',
      title: 'Teknologiens miljøpåvirkning',
      content: `## Teknologiens miljøpåvirkning

### Datasentre
Verdens datasentre bruker 1-2 % av verdens strømforbruk — like mye som flyindustrien.

### E-avfall
Over 50 millioner tonn elektronisk avfall genereres årlig, bare 20 % resirkuleres forsvarlig. E-avfall inneholder bly, kvikksølv og kadmium.

### Planlagt foreldelse
Mange produsenter designer produkter med begrenset levetid — batterier som ikke kan byttes, oppdateringer som gjør gamle enheter trege. EU har innført «rett til reparasjon».

### Mineraler
Elektronikk krever kobolt, litium og tantal. Gruvedrift forårsaker miljøødeleggelser og menneskerettighetsbrudd.`,
    },
    {
      id: 'it-1-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-5-ex-3',
        number: '1.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er algoritmisk diskriminering?',
        options: [
          { id: 'a', text: 'Når algoritmer bevisst programmeres til å diskriminere', isCorrect: false },
          { id: 'b', text: 'Når KI-systemer behandler grupper forskjellig basert på skjeve treningsdata', isCorrect: true },
          { id: 'c', text: 'Når nettsider blokkerer brukere fra visse land', isCorrect: false },
          { id: 'd', text: 'Når søkemotorer gir ulike resultater til ulike brukere', isCorrect: false },
        ],
        solution: 'Algoritmisk diskriminering oppstår utilsiktet når KI forskjellsbehandler grupper fordi treningsdataene gjenspeiler historiske skjevheter.',
      },
    },
    {
      id: 'it-1-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-5-ex-4',
        number: '1.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Estimer ditt ukentlige digitale klimafotavtrykk basert på strømming, sosiale medier og e-post.',
        hints: ['1 time Netflix ≈ 36g CO₂. 1 e-post med vedlegg ≈ 50g.'],
        solution: `Eksempel: 2t strømming/dag × 36g = 72g. 3t sosiale medier × 20g = 60g. 10 e-poster × 4g = 40g. Totalt/dag: ~172g. Per uke: ~1,2 kg CO₂. Per år: ~63 kg (nesten like mye som en flytur Oslo-Bergen).`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **GDPR** gir deg kontroll over egne persondata
- **Algoritmisk diskriminering** oppstår når KI viderefoerer historiske skjevheter
- Teknologi har betydelig **miljøfotavtrykk** — datasentre, e-avfall, minerutvinning
- **Privacy by design** og etiske vurderinger bør gjøres FØR teknologien lanseres`,
    },
    // --- Samleoppgaver ---
    {
      id: 'it-1-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-5-ex-5',
        number: '1.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft bruk av ansiktsgjenkjenning i butikker for å identifisere butikktyver. Hvilke etiske argumenter taler for og mot?',
        hints: ['Tenk på personvern, uskyldspresumpsjon, feilrater.'],
        solution: `For: Reduserer tyveri, øker sikkerhet. Mot: Masseovervåking av uskyldige, feilrater rammer minoriteter, bryter personvernloven. Datatilsynet mener det er uforholdsmessig inngripende.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-5-ex-6',
        number: '1.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om KI bør forbys fra å ta viktige avgjørelser som lån, ansettelser og straffedom.',
        hints: ['Vurder effektivitet vs. rettferdighet, transparens vs. kompleksitet.'],
        solution: `For forbud: KI kan diskriminere usynlig, «black box» gir ikke forklaring. Mot: KI kan være mer konsistent enn mennesker. Mellomvei: EUs AI Act regulerer etter risikonivå — høyrisiko-KI krever transparens og menneskelig tilsyn.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'it-1-1-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-5-ex-7',
        number: '1.5.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva menes med planlagt foreldelse?',
        options: [
          { id: 'a', text: 'At eldre teknologi naturlig blir utdatert', isCorrect: false },
          { id: 'b', text: 'At produkter bevisst designes med begrenset levetid', isCorrect: true },
          { id: 'c', text: 'At programvare ikke oppdateres etter en periode', isCorrect: false },
          { id: 'd', text: 'At gamle produkter ikke er kompatible med nye', isCorrect: false },
        ],
        solution: 'Planlagt foreldelse er en bevisst designstrategi der produkter lages med begrenset levetid for å tvinge forbrukere til å kjøpe nytt.',
      },
    },
    {
      id: 'it-1-1-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-1-5-ex-8',
        number: '1.5.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et forslag til etiske retningslinjer for bruk av KI i norsk skole som dekker undervisning, oppgaver og personvern.',
        hints: ['Tenk på transparens, rettferdighet, læringsutbytte og personvern.'],
        solution: `1. Transparens: Elever skal vite når KI brukes. 2. Kritisk bruk: KI som hjelpemiddel, ikke erstatning. 3. Personvern: Elevdata skal ikke trene KI uten samtykke. 4. Rettferdighet: Lik tilgang for alle. 5. Lærerkompetanse: Opplæring før bruk.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const IT_1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_1_1_1,
  CHAPTER_IT_1_1_2,
  CHAPTER_IT_1_1_3,
  CHAPTER_IT_1_1_4,
  CHAPTER_IT_1_1_5,
];
