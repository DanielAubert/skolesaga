/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 2 (VG3) - Del 8: Fordypningsprosjekt
 *
 * Kapittel 8.1–8.5
 *
 * LK20-kompetansemål:
 * - planlegge, gjennomføre og presentere et fordypningsprosjekt om kommunikasjon og kultur
 * - bruke vitenskapelige metoder og kildekritikk i eget forskningsarbeid
 * - formidle faglig innhold skriftlig og muntlig med presisjon og faglig tyngde
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Problemstilling og forskningsdesign
// ============================================================================

export const CHAPTER_KOMKULT2_8_1: TextbookChapter = {
  id: 'komkult2-8-1',
  courseId: 'komkult-2',
  chapterNumber: '8.1',
  title: 'Problemstilling og forskningsdesign',
  description: 'Hvordan utvikle en presis problemstilling og velge et egnet forskningsdesign for fordypningsprosjektet. Du lærer om ulike problemstillingstyper, avgrensning, og sammenhengen mellom problemstilling og metodevalg.',
  estimatedMinutes: 22,
  competenceGoals: [
    'planlegge, gjennomføre og presentere et fordypningsprosjekt om kommunikasjon og kultur',
    'bruke vitenskapelige metoder og kildekritikk i eget forskningsarbeid',
  ],
  keyTerms: [
    { term: 'Problemstilling', definition: 'Et presist formulert spørsmål som avgrenser temaet og styrer hele undersøkelsen' },
    { term: 'Forskningsdesign', definition: 'Den overordnede planen for hvordan en undersøkelse skal legges opp og gjennomføres' },
    { term: 'Avgrensning', definition: 'Å snevre inn et bredt tema slik at det blir mulig å undersøke grundig innenfor gitte rammer' },
    { term: 'Hypotese', definition: 'En foreløpig antakelse om hva undersøkelsen vil vise, som kan testes empirisk' },
    { term: 'Operasjonalisering', definition: 'Å gjøre abstrakte begreper konkrete og målbare slik at de kan undersøkes i praksis' },
  ],
  content: [
    {
      id: 'kk2-8-1-intro',
      type: 'text',
      content: `## Fra interesse til problemstilling

Et vellykket fordypningsprosjekt starter med en god problemstilling. Problemstillingen er det spørsmålet du ønsker å besvare, og den styrer alt fra metodevalg og datainnsamling til analyse og konklusjon. En uklar problemstilling gir et uklart prosjekt, mens en presis problemstilling gir retning og struktur.

I dette kapittelet skal du lære:
- Hva som kjennetegner en god problemstilling
- Forskjellen mellom beskrivende, forklarende og vurderende problemstillinger
- Hvordan du avgrenser et tema og gjør det forskbart
- Hva et forskningsdesign er og hvordan det henger sammen med problemstillingen`,
    },
    {
      id: 'kk2-8-1-def-1',
      type: 'definition',
      title: 'Problemstilling',
      content: `En **problemstilling** er et presist formulert spørsmål som avgrenser temaet og styrer hele undersøkelsen. Den forteller hva du vil finne ut, og legger føringer for metodevalg og analyse.

**Kjennetegn på en god problemstilling:**
- **Presis:** Tydelig og avgrenset, uten tvetydighet
- **Forskbar:** Mulig å besvare med tilgjengelige metoder og data
- **Relevant:** Knyttet til faglige kompetansemål og faglig interessant
- **Åpen:** Gir rom for drøfting og analyse, ikke bare et ja/nei-svar
- **Realistisk:** Mulig å gjennomføre innenfor prosjektets tidsrammer og ressurser`,
    },
    {
      id: 'kk2-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Fra bredt tema til presis problemstilling',
      problem: 'En elev er interessert i «kulturmøter i Norge». Hvordan kan dette brede temaet bli til en presis problemstilling?',
      solution: `**Steg 1 – Velg et underfelt:**
«Kulturmøter» er svært bredt. Eleven bestemmer seg for å fokusere på kulturmøter i norske TV-serier.

**Steg 2 – Avgrens ytterligere:**
Eleven velger å se på representasjonen av flerkulturelle familier i NRK-serier fra de siste fem årene.

**Steg 3 – Formuler ulike problemstillingstyper:**
- Beskrivende: «Hvordan fremstilles flerkulturelle familier i NRK-dramaseriene Heimebane og Lykkeland?»
- Forklarende: «Hvorfor har NRK økt andelen flerkulturelle karakterer i sine dramaseriene de siste ti årene?»
- Vurderende: «I hvilken grad gir NRK-dramaseriene et realistisk bilde av flerkulturelle familier i Norge?»

**Steg 4 – Vurder gjennomførbarhet:**
Den beskrivende problemstillingen er enklest å gjennomføre med tekstanalyse. Den forklarende krever tilgang til NRKs redaksjonelle vurderinger. Den vurderende krever en kombinasjon av tekstanalyse og bakgrunnsmateriale.`,
    },
    {
      id: 'kk2-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Hvilken av disse er den beste problemstillingen for et fordypningsprosjekt?',
        options: [
          { id: 'a', text: 'Sosiale medier er skadelig for ungdom', isCorrect: false },
          { id: 'b', text: 'Hvordan påvirker TikTok-algoritmen ungdommers nyhetsvaner? En studie av elever ved tre videregående skoler i Oslo', isCorrect: true },
          { id: 'c', text: 'Alt om reklame og ungdom', isCorrect: false },
          { id: 'd', text: 'Er internett bra eller dårlig?', isCorrect: false },
        ],
        solution: 'Alternativ b er best fordi problemstillingen er presis (TikTok-algoritmen), avgrenset (ungdommers nyhetsvaner), forskbar (kan undersøkes med spørreskjema eller intervju), og kontekstualisert (elever ved tre skoler i Oslo). De andre er enten påstander, for brede eller for vage.',
      },
    },
    {
      id: 'kk2-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        task: 'Velg et tema innenfor kommunikasjon og kultur som interesserer deg. Formuler tre ulike problemstillinger om temaet: en beskrivende, en forklarende og en vurderende. Forklar forskjellen mellom de tre typene.',
        hints: ['En beskrivende spør «hvordan» eller «hva», en forklarende spør «hvorfor», og en vurderende spør «i hvilken grad» eller inviterer til drøfting'],
        solution: 'Eksempel med temaet «podkaster og ungdomskultur»: Beskrivende: «Hva kjennetegner de mest populære podkastene blant norske ungdommer i alderen 16–19 år?» – kartlegger kjennetegn ved innholdet. Forklarende: «Hvorfor foretrekker mange unge podkaster fremfor tradisjonelle nyhetsmedier?» – søker årsaker til en trend. Vurderende: «I hvilken grad kan podkaster erstatte tradisjonell journalistikk som informasjonskilde for unge?» – inviterer til drøfting og vurdering. Forskjellen ligger i hva slags kunnskap problemstillingen etterspør: beskrivelse av fenomenet, forklaring av årsaker, eller vurdering av verdi og kvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-1-def-2',
      type: 'definition',
      title: 'Forskningsdesign',
      content: `Et **forskningsdesign** er den overordnede planen for hvordan en undersøkelse skal gjennomføres. Designet binder sammen problemstilling, metode, datainnsamling og analyse til en helhet.

**Vanlige forskningsdesign for fordypningsprosjekter:**
- **Casestudie:** Dybdestudie av ett eller noen få tilfeller, for eksempel én mediekampanje eller én kulturell hendelse
- **Komparativ studie:** Sammenligning av to eller flere tilfeller, for eksempel dekningen av en sak i to ulike aviser
- **Tekstanalyse:** Systematisk analyse av tekster, bilder eller andre kulturuttrykk
- **Surveydesign:** Spørreskjema til mange respondenter for å kartlegge holdninger eller mønstre`,
    },
    {
      id: 'kk2-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        task: 'Forklar hva operasjonalisering betyr, og gi et eksempel der du operasjonaliserer begrepet «mediekompetanse» slik at det kan undersøkes i et spørreskjema.',
        hints: ['Tenk på hvilke konkrete ferdigheter og kunnskaper som inngår i mediekompetanse, og hvordan du kan måle dem'],
        solution: 'Operasjonalisering betyr å gjøre et abstrakt begrep konkret og målbart. «Mediekompetanse» er abstrakt og kan ikke måles direkte. Det kan operasjonaliseres som: evne til å skille reklame fra redaksjonelt innhold (målt med eksempler respondenten skal vurdere), kjennskap til kildekritiske prinsipper (målt med kunnskapsspørsmål), evne til å vurdere troverdigheten til en nettartikkel (målt med en praktisk oppgave), og bevissthet om personvern og digitale spor (målt med holdningsspørsmål). Disse konkrete delene kan formuleres som spørsmål i et spørreskjema.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-1-ex-4',
        number: '8.1.4',
        type: 'multiple-choice',
        task: 'Hva betyr det å avgrense en problemstilling?',
        options: [
          { id: 'a', text: 'Å gjøre problemstillingen så bred som mulig for å dekke flest aspekter', isCorrect: false },
          { id: 'b', text: 'Å snevre inn temaet slik at det blir mulig å undersøke grundig innenfor prosjektets rammer', isCorrect: true },
          { id: 'c', text: 'Å fjerne alle fagbegreper fra problemstillingen', isCorrect: false },
          { id: 'd', text: 'Å bestemme svaret på forhånd', isCorrect: false },
        ],
        solution: 'Å avgrense en problemstilling betyr å snevre inn temaet slik at det blir håndterbart. Et bredt tema som «medier og samfunn» må avgrenses i tid (hvilken periode), rom (hvilket land eller region), objekt (hvilke medier) og fokus (hvilke aspekter). En godt avgrenset problemstilling gjør det mulig å gå i dybden fremfor å skrape overflaten.',
      },
    },
    {
      id: 'kk2-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        task: 'Du planlegger et fordypningsprosjekt om kulturforskjeller i kommunikasjonsstil. Lag en presis problemstilling, begrunn valg av problemstillingstype, og skisser et forskningsdesign som passer til problemstillingen.',
        hints: ['Avgrens til en konkret kontekst, for eksempel arbeidslivet, skolen eller en bestemt mediekanal'],
        solution: 'Eksempel: «Hvordan opplever internasjonale studenter ved Universitetet i Bergen forskjeller i kommunikasjonsstil mellom forelesninger i Norge og i hjemlandet?» Problemstillingstype: Beskrivende, fordi den kartlegger opplevelser. Forskningsdesign: Kvalitativ casestudie med semistrukturerte intervjuer av 5–7 internasjonale studenter fra ulike land. Begrunnelse: Opplevelser og nyanser fanges best gjennom dybdeintervjuer der informantene kan utdype med egne ord. Et komparativt element oppnås ved å intervjue studenter fra ulike kulturbakgrunner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-1-ex-6',
        number: '8.1.6',
        type: 'classic',
        task: 'Forklar hvorfor det er viktig at forskningsdesignet «passer» til problemstillingen. Gi et eksempel der feil designvalg ville gitt dårlige resultater.',
        hints: ['Tenk på hva som skjer om du bruker spørreskjema for å forstå dype personlige opplevelser, eller intervju for å kartlegge holdninger i en stor befolkningsgruppe'],
        solution: 'Forskningsdesignet må passe til problemstillingen fordi ulike spørsmål krever ulike verktøy. Eksempel: Hvis problemstillingen er «Hvordan opplever flyktninger møtet med norsk byråkrati?», ville et spørreskjema med avkrysningsspørsmål gi overfladiske svar fordi opplevelser er sammensatte og personlige. Dybdeintervjuer ville vært mer egnet. Omvendt: Hvis problemstillingen er «Hvor stor andel av norske 17-åringer leser nyheter daglig?», ville dybdeintervjuer med fem personer ikke gi generaliserbare tall. Da trengs et spørreskjema med mange respondenter. Feil designvalg fører til at datamaterialet ikke kan besvare problemstillingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **problemstilling** er et presist spørsmål som styrer hele fordypningsprosjektet
- **Beskrivende** problemstillinger kartlegger, **forklarende** søker årsaker, **vurderende** inviterer til drøfting
- **Avgrensning** er nødvendig for å gjøre et bredt tema håndterbart
- **Forskningsdesign** er den overordnede planen for undersøkelsen
- **Operasjonalisering** gjør abstrakte begreper målbare og forskbare

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Problemstilling | Presist spørsmål som styrer undersøkelsen |
| Forskningsdesign | Overordnet plan for gjennomføring |
| Avgrensning | Å snevre inn temaet til håndterbart omfang |
| Hypotese | Foreløpig antakelse som kan testes |
| Operasjonalisering | Å gjøre abstrakte begreper målbare |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Datainnsamling og metode
// ============================================================================

export const CHAPTER_KOMKULT2_8_2: TextbookChapter = {
  id: 'komkult2-8-2',
  courseId: 'komkult-2',
  chapterNumber: '8.2',
  title: 'Datainnsamling og metode',
  description: 'Kvalitative og kvantitative metoder for datainnsamling i fordypningsprosjektet. Du lærer om intervju, spørreskjema, observasjon, tekstanalyse og hvordan du velger riktig metode for din problemstilling.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke vitenskapelige metoder og kildekritikk i eget forskningsarbeid',
    'planlegge, gjennomføre og presentere et fordypningsprosjekt om kommunikasjon og kultur',
  ],
  keyTerms: [
    { term: 'Kvalitativ metode', definition: 'Metoder som går i dybden på fenomener gjennom tekst, tolkning og forståelse' },
    { term: 'Kvantitativ metode', definition: 'Metoder som kartlegger utbredelse og mønstre gjennom tall og statistikk' },
    { term: 'Semistrukturert intervju', definition: 'Intervju med forhåndsbestemte temaer og åpne spørsmål som gir rom for oppfølging' },
    { term: 'Reliabilitet', definition: 'At undersøkelsen er pålitelig og kan gjennomføres igjen med samme resultat' },
    { term: 'Validitet', definition: 'At undersøkelsen faktisk måler det den er ment å måle' },
  ],
  content: [
    {
      id: 'kk2-8-2-intro',
      type: 'text',
      content: `## Å velge riktig verktøy

Når problemstillingen er klar og forskningsdesignet er valgt, er neste steg å bestemme metode for datainnsamling. Metoden er verktøyet du bruker for å samle inn de dataene som kan besvare problemstillingen. Feil verktøy gir dårlige data, og dårlige data gir svake konklusjoner.

I dette kapittelet skal du lære:
- Forskjellen mellom kvalitative og kvantitative metoder
- Hvordan du gjennomfører intervjuer og lager gode spørreskjemaer
- Hva observasjon og tekstanalyse innebærer
- Hva reliabilitet og validitet betyr for kvaliteten på undersøkelsen`,
    },
    {
      id: 'kk2-8-2-def-1',
      type: 'definition',
      title: 'Kvalitativ og kvantitativ metode',
      content: `**Kvalitativ metode** går i dybden på et fenomen for å forstå mening, opplevelser og prosesser. Data er gjerne tekst fra intervjuer, observasjonsnotater eller dokumenter. Målet er forståelse og tolkning.

**Kvantitativ metode** kartlegger utbredelse og mønstre på tvers av mange tilfeller. Data er gjerne tall fra spørreskjemaer eller systematiske registreringer. Målet er å finne mønstre og kunne generalisere.

| | Kvalitativ | Kvantitativ |
|---|---|---|
| Fokus | Dybde og mening | Bredde og mønstre |
| Data | Tekst, bilder, lyd | Tall og statistikk |
| Utvalg | Få, strategisk valgte | Mange, ofte tilfeldig valgte |
| Analyse | Tolkning og kategorisering | Statistisk bearbeidelse |
| Styrke | Rik forståelse | Generaliserbarhet |`,
    },
    {
      id: 'kk2-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Intervju som metode',
      problem: 'Du skal undersøke hvordan norske ungdommer opplever overgangen fra Snapchat til BeReal. Hvordan planlegger du et godt intervju?',
      solution: `**Steg 1 – Velg intervjuform:**
Et semistrukturert intervju passer best. Det gir struktur gjennom forhåndsbestemte temaer, men rom for å følge opp interessante svar.

**Steg 2 – Lag en intervjuguide:**
- Åpningsspørsmål: «Kan du fortelle litt om hvilke sosiale medier du bruker?»
- Temaspørsmål: «Hva fikk deg til å begynne med BeReal?» / «Hva er forskjellen på hvordan du presenterer deg selv på Snapchat og BeReal?»
- Oppfølgingsspørsmål: «Kan du gi et eksempel?» / «Hvordan opplevde du det?»
- Avslutning: «Er det noe vi ikke har snakket om som du synes er viktig?»

**Steg 3 – Praktiske hensyn:**
- Informert samtykke fra informantene
- Avtale tid og sted (rolig sted uten forstyrrelser)
- Ta opp intervjuet (med samtykke) og transkriber etterpå
- Planlegg 30–45 minutter per intervju
- Anonymiser alle data`,
    },
    {
      id: 'kk2-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom kvalitativ og kvantitativ metode?',
        options: [
          { id: 'a', text: 'Kvalitativ metode er bedre enn kvantitativ metode', isCorrect: false },
          { id: 'b', text: 'Kvalitativ metode går i dybden på få tilfeller, mens kvantitativ kartlegger mønstre blant mange', isCorrect: true },
          { id: 'c', text: 'Kvantitativ metode brukes bare i naturvitenskap', isCorrect: false },
          { id: 'd', text: 'Kvalitativ metode bruker bare skriftlige kilder', isCorrect: false },
        ],
        solution: 'Kvalitativ metode fokuserer på dybde og forståelse gjennom få, grundige undersøkelser (for eksempel intervjuer), mens kvantitativ metode fokuserer på bredde og mønstre gjennom mange observasjoner (for eksempel spørreskjemaer). Ingen av metodene er «bedre» – de svarer på ulike typer spørsmål.',
      },
    },
    {
      id: 'kk2-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        task: 'Du skal undersøke hvordan to riksaviser dekker en aktuell klimasak. Beskriv hvilken metode du ville brukt, hvordan du ville samlet inn data, og hvilke styrker og svakheter metoden har.',
        hints: ['Tenk på innholdsanalyse som metode og hva slags kategorier du ville brukt'],
        solution: 'Metode: Komparativ innholdsanalyse (tekstanalyse). Datainnsamling: Samle alle artikler om klimasaken fra begge aviser i en bestemt periode. Utvikle kategorier for analyse, for eksempel: vinkling (positiv/negativ/nøytral), kilder som siteres, plassering i avisen, bruk av bilder og grafikk. Styrker: Systematisk, transparent og etterprøvbar. Gir god oversikt over dekningsmønstre. Svakheter: Fanger ikke opp lesernes tolkning av innholdet. Kategoriene er forskerens valg og kan være subjektive. Kontekst utover selve teksten fanges ikke opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-2-def-2',
      type: 'definition',
      title: 'Reliabilitet og validitet',
      content: `**Reliabilitet** betyr pålitelighet: at undersøkelsen gir konsistente resultater dersom den gjentas under like betingelser. Høy reliabilitet betyr at resultatene ikke skyldes tilfeldigheter eller feil i metoden.

**Validitet** betyr gyldighet: at undersøkelsen faktisk måler det den er ment å måle. En undersøkelse kan være reliabel (gi konsistente resultater) uten å være valid (måle riktig ting).

**Eksempel:** Et spørreskjema som alltid gir samme svar er reliabelt. Men hvis spørsmålene er uklare og respondentene tolker dem annerledes enn forskeren mente, er det ikke valid – det måler noe annet enn det forskeren tror.`,
    },
    {
      id: 'kk2-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom reliabilitet og validitet med et eget eksempel fra kommunikasjon og kultur-feltet.',
        hints: ['Tenk på et spørreskjema der spørsmålene kan misforstås, eller et intervju der forskeren påvirker svarene'],
        solution: 'Reliabilitet handler om pålitelighet: vil undersøkelsen gi lignende resultater om den gjennomføres igjen? Validitet handler om gyldighet: måler vi det vi tror vi måler? Eksempel: En undersøkelse spør ungdommer «Hvor ofte bruker du sosiale medier?» med svaralternativene «sjelden», «noen ganger» og «ofte». Undersøkelsen kan ha høy reliabilitet fordi alle svarer konsistent ved gjentakelse, men lav validitet fordi «ofte» betyr forskjellige ting for ulike personer (for noen er det daglig, for andre flere ganger om dagen). Bedre operasjonalisering ville vært å spørre om antall minutter per dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-2-ex-4',
        number: '8.2.4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner et semistrukturert intervju?',
        options: [
          { id: 'a', text: 'Alle spørsmål er fastlagt på forhånd og stilles i fast rekkefølge', isCorrect: false },
          { id: 'b', text: 'Det er en uformell samtale uten plan', isCorrect: false },
          { id: 'c', text: 'Det har forhåndsbestemte temaer og åpne spørsmål, men gir rom for oppfølgingsspørsmål', isCorrect: true },
          { id: 'd', text: 'Det gjennomføres alltid med flere informanter samtidig', isCorrect: false },
        ],
        solution: 'Et semistrukturert intervju har en intervjuguide med forhåndsbestemte temaer og åpne spørsmål, men gir forskeren frihet til å følge opp interessante svar og stille tilleggsspørsmål. Det kombinerer struktur (sikrer at viktige temaer dekkes) med fleksibilitet (gir rom for informantens egne perspektiver).',
      },
    },
    {
      id: 'kk2-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Lag et kort spørreskjema (5–6 spørsmål) som kan brukes til å undersøke ungdommers holdninger til reklame på sosiale medier. Inkluder minst ett lukket og ett åpent spørsmål. Begrunn valgene dine.',
        hints: ['Lukkede spørsmål har faste svaralternativer, åpne spørsmål lar respondenten svare fritt'],
        solution: 'Eksempel på spørreskjema: 1) Hvor ofte ser du reklame på sosiale medier? (Daglig / Ukentlig / Sjeldnere) – lukket, kartlegger eksponering. 2) Hvilke sosiale medier bruker du mest? (TikTok / Instagram / Snapchat / YouTube / Annet) – lukket, kartlegger kontekst. 3) Legger du merke til om innhold er merket som reklame? (Alltid / Ofte / Av og til / Sjelden / Aldri) – lukket, måler bevissthet. 4) Stoler du mer på anbefalinger fra influencere eller tradisjonell reklame? (Influencere / Tradisjonell / Ingen av dem / Begge like mye) – lukket, måler tillit. 5) Beskriv en reklame på sosiale medier som du husker godt. Hva var det som gjorde inntrykk? – åpent, gir dybde. 6) Synes du det er greit at influencere reklamerer for produkter? Begrunn svaret. – åpent, kartlegger holdning. Begrunnelse: Kombinasjonen av lukkede og åpne spørsmål gir både kvantifiserbare data og dypere innsikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-2-ex-6',
        number: '8.2.6',
        type: 'classic',
        task: 'Drøft styrker og svakheter ved å bruke intervju sammenlignet med spørreskjema som metode i et fordypningsprosjekt om ungdoms mediebruk.',
        hints: ['Tenk på hva slags data du får, hvor mange du kan nå, og hvilke typer spørsmål du kan stille'],
        solution: 'Intervju – styrker: Gir dybde og nyanser, mulighet for oppfølgingsspørsmål, fanger opp uventede perspektiver, informanten kan utdype med egne ord. Intervju – svakheter: Tidkrevende, få informanter gir lav generaliserbarhet, forskeren kan påvirke svarene, transkripsjon tar lang tid. Spørreskjema – styrker: Når mange respondenter, gir generaliserbare data, er tidseffektivt, anonymitet kan gi ærligere svar. Spørreskjema – svakheter: Overfladisk informasjon, ingen mulighet til oppfølging, spørsmål kan misforstås, lav svarprosent. Konklusjon: Valget avhenger av problemstillingen – vil du forstå dypt (intervju) eller kartlegge bredt (spørreskjema).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kvalitativ metode** går i dybden, **kvantitativ metode** kartlegger bredden
- **Semistrukturert intervju** kombinerer struktur med fleksibilitet
- **Spørreskjemaer** er effektive for å nå mange respondenter
- **Reliabilitet** handler om pålitelighet, **validitet** handler om gyldighet
- Metodevalg må passe til problemstillingen og forskningsdesignet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kvalitativ metode | Dybde, forståelse, tekst som data |
| Kvantitativ metode | Bredde, mønstre, tall som data |
| Semistrukturert intervju | Planlagt, men fleksibelt intervju |
| Reliabilitet | Pålitelighet – kan undersøkelsen gjentas? |
| Validitet | Gyldighet – måler vi det vi tror? |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Analyse og tolkning
// ============================================================================

export const CHAPTER_KOMKULT2_8_3: TextbookChapter = {
  id: 'komkult2-8-3',
  courseId: 'komkult-2',
  chapterNumber: '8.3',
  title: 'Analyse og tolkning',
  description: 'Hvordan bearbeide, analysere og tolke datamaterialet i et fordypningsprosjekt. Du lærer om kvalitativ og kvantitativ analyse, koding, kategorisering og hvordan du trekker slutninger fra datamaterialet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke vitenskapelige metoder og kildekritikk i eget forskningsarbeid',
    'planlegge, gjennomføre og presentere et fordypningsprosjekt om kommunikasjon og kultur',
  ],
  keyTerms: [
    { term: 'Koding', definition: 'Å tilordne merkelapper eller kategorier til deler av datamaterialet for å identifisere mønstre' },
    { term: 'Kategorisering', definition: 'Å samle koder i overordnede temaer eller grupper som danner grunnlag for analysen' },
    { term: 'Hermeneutikk', definition: 'Fortolkningslære som handler om å forstå mening i tekst og handling gjennom del og helhet' },
    { term: 'Induktiv analyse', definition: 'Analyse der man lar kategorier og mønstre vokse frem fra datamaterialet' },
    { term: 'Deduktiv analyse', definition: 'Analyse der man bruker forhåndsbestemte kategorier fra teori til å sortere datamaterialet' },
  ],
  content: [
    {
      id: 'kk2-8-3-intro',
      type: 'text',
      content: `## Fra data til innsikt

Du har samlet inn datamaterialet ditt – intervjuene er transkribert, spørreskjemaene er fylt ut, eller tekstene er samlet inn. Nå begynner det som mange opplever som den mest krevende og samtidig mest spennende delen av prosjektet: analysen. Analyse handler om å bearbeide, sortere og tolke datamaterialet for å besvare problemstillingen.

I dette kapittelet skal du lære:
- Hva analyse og tolkning innebærer i et fordypningsprosjekt
- Hvordan du koder og kategoriserer kvalitative data
- Grunnleggende kvantitativ analyse med tabeller og diagrammer
- Forskjellen mellom induktiv og deduktiv tilnærming
- Hva hermeneutisk tolkning betyr`,
    },
    {
      id: 'kk2-8-3-def-1',
      type: 'definition',
      title: 'Koding og kategorisering',
      content: `**Koding** er det første steget i kvalitativ analyse. Det innebærer å gå gjennom datamaterialet (for eksempel et transkriberte intervju) og merke avsnitt, setninger eller ord med korte merkelapper (koder) som beskriver innholdet.

**Kategorisering** er neste steg: å samle beslektede koder i overordnede temaer eller kategorier. Disse kategoriene danner grunnlaget for analysen.

**Eksempel:**
En informant sier: «Jeg poster aldri bilder uten filter fordi jeg er redd for at folk skal dømme meg.» Mulige koder: «filterbruk», «frykt for andres dom», «selvpresentasjon». Disse kodene kan grupperes under kategorien «kroppspress på sosiale medier».`,
    },
    {
      id: 'kk2-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Kvalitativ analyse av intervjudata',
      problem: 'Du har intervjuet fire elever om hvordan de bruker TikTok til å holde seg oppdatert på nyheter. Hvordan analyserer du intervjuene?',
      solution: `**Steg 1 – Transkribering:**
Skriv ut alt som ble sagt i intervjuene. Inkluder pauser, nøling og følelsesuttrykk der det er relevant.

**Steg 2 – Åpen koding:**
Les gjennom intervjuene og merk viktige utsagn med koder:
- «Jeg scroller TikTok-feeden og stopper når noe virker interessant» → kode: «tilfeldig eksponering»
- «Jeg stoler mer på vanlige folk enn på journalister» → kode: «tillit til avsender»
- «Noen ganger sjekker jeg om nyheten stemmer etterpå» → kode: «kildekritikk»

**Steg 3 – Kategorisering:**
Grupper kodene i overordnede temaer:
- Kategori 1: Nyhetseksponering (tilfeldig eksponering, algoritme, rekommenderte videoer)
- Kategori 2: Tillit og troverdighet (tillit til avsender, kildekritikk, skepsis)
- Kategori 3: Nyhetspraksis (deling, diskusjon med venner, videre søk)

**Steg 4 – Tolkning:**
Se på sammenhenger mellom kategoriene og koble funnene til problemstillingen og teori.`,
    },
    {
      id: 'kk2-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom induktiv og deduktiv analyse?',
        options: [
          { id: 'a', text: 'Induktiv analyse bruker tall, deduktiv analyse bruker tekst', isCorrect: false },
          { id: 'b', text: 'Induktiv analyse lar kategorier vokse frem fra dataene, deduktiv analyse bruker forhåndsbestemte kategorier fra teori', isCorrect: true },
          { id: 'c', text: 'Deduktiv analyse er grundigere enn induktiv analyse', isCorrect: false },
          { id: 'd', text: 'Induktiv analyse brukes bare i naturvitenskap', isCorrect: false },
        ],
        solution: 'Induktiv analyse starter i datamaterialet og lar kategorier og mønstre vokse frem gjennom koding. Forskeren «oppdager» temaer i dataene. Deduktiv analyse starter i teori og bruker forhåndsbestemte kategorier til å sortere datamaterialet. Forskeren «tester» om teorien stemmer med dataene. Begge tilnærmingene har sine styrker, og i praksis brukes ofte en kombinasjon.',
      },
    },
    {
      id: 'kk2-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        task: 'Her er et utdrag fra et intervju med en elev om podkastbruk: «Jeg hører mest på true crime-podkaster. Det er litt som å lese en krimroman, bare at det er ekte. Noen ganger føler jeg meg litt rar fordi jeg synes det er underholdende at noen faktisk har blitt drept.» Foreslå tre koder for dette utdraget og grupper dem i en overordnet kategori.',
        hints: ['Se etter hva informanten sier om sjanger, opplevelse og refleksjon'],
        solution: 'Koder: 1) «True crime som sjanger» – beskriver hva informanten hører på. 2) «Underholdning vs. virkelighet» – informanten sammenligner podkasten med en krimroman. 3) «Etisk refleksjon» – informanten reflekterer over det problematiske i å finne ekte kriminalitet underholdende. Overordnet kategori: «Etiske dimensjoner ved true crime-konsum». Denne kategorien fanger opp spenningen mellom underholdning og moralsk ubehag som informanten uttrykker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-3-def-2',
      type: 'definition',
      title: 'Hermeneutisk tolkning',
      content: `**Hermeneutikk** er fortolkningslære, en tilnærming til analyse som handler om å forstå mening i tekst, tale og handling. Sentralt er den **hermeneutiske sirkelen**: forståelse oppstår gjennom en veksling mellom del og helhet.

**Den hermeneutiske sirkelen:**
Du forstår en enkelt setning i et intervju bedre når du ser den i lys av hele intervjuet. Samtidig forstår du hele intervjuet bedre etter å ha gått grundig inn i hver enkelt del. Forståelsen utvikler seg gjennom en stadig veksling mellom del og helhet.

**I praksis:**
Når du analyserer et intervju, leser du først hele teksten for å få et helhetsinntrykk. Deretter går du inn i enkeltdeler og analyserer dem grundig. Til slutt ser du delene i lys av helheten igjen, med dypere forståelse.`,
    },
    {
      id: 'kk2-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        task: 'Forklar den hermeneutiske sirkelen med egne ord, og gi et eksempel på hvordan den fungerer i praksis når du analyserer et intervju om ungdoms mediebruk.',
        hints: ['Tenk på vekslingen mellom å forstå enkeltdeler og helheten, og hvordan forståelsen utvikler seg underveis'],
        solution: 'Den hermeneutiske sirkelen beskriver hvordan forståelse oppstår gjennom veksling mellom del og helhet. Eksempel: Du leser hele intervjuet og får et inntrykk av at informanten er kritisk til sosiale medier. Når du så analyserer et enkelt utsagn der informanten sier «jeg kan ikke leve uten TikTok», forstår du det i lys av helheten – kanskje det er et uttrykk for ambivalens, ikke entusiasme. Denne nye forståelsen av delen påvirker så din tolkning av helheten: informanten er ikke bare kritisk, men opplever en spenning mellom avhengighet og kritisk bevissthet. Slik utdypes forståelsen gjennom stadige vekslinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-3-ex-4',
        number: '8.3.4',
        type: 'multiple-choice',
        task: 'Hva er formålet med koding i kvalitativ analyse?',
        options: [
          { id: 'a', text: 'Å oversette intervjuet til et annet språk', isCorrect: false },
          { id: 'b', text: 'Å gi karakter på informantens svar', isCorrect: false },
          { id: 'c', text: 'Å tilordne merkelapper til datamaterialet for å identifisere mønstre og temaer', isCorrect: true },
          { id: 'd', text: 'Å kryptere dataene for personvernets skyld', isCorrect: false },
        ],
        solution: 'Koding i kvalitativ analyse handler om å lese gjennom datamaterialet og merke relevante avsnitt med korte merkelapper (koder) som beskriver innholdet. Formålet er å bryte ned datamaterialet i håndterbare enheter og identifisere mønstre, temaer og sammenhenger som kan besvare problemstillingen.',
      },
    },
    {
      id: 'kk2-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        task: 'Du har gjennomført en spørreskjemaundersøkelse blant 80 elever om nyhetslesing. 45 % svarer at de får nyheter fra sosiale medier, 30 % fra nettaviser, 15 % fra TV og 10 % fra andre kilder. Beskriv hvordan du ville presentert og analysert disse tallene i et fordypningsprosjekt.',
        hints: ['Tenk på hvilke diagrammer som passer, hva tallene forteller og ikke forteller, og hvordan du kan tolke resultatene i lys av problemstillingen'],
        solution: 'Presentasjon: Tallene kan fremstilles i et kakediagram som viser fordelingen, eller et søylediagram som gjør sammenligningen tydelig. En tabell gir presis informasjon. Analyse: Hovedfunnet er at sosiale medier er den dominerende nyhetskilden for ungdom i utvalget. Tolkning: Dette samsvarer med forskning som viser at unge i økende grad henter nyheter fra sosiale medier fremfor tradisjonelle medier. Viktig å diskutere: Utvalget på 80 elever fra én skole er for lite til å generalisere. Spørsmålet skiller ikke mellom bevisst nyhetssøk og tilfeldig eksponering. Funnene bør drøftes i lys av relevant medieforskning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-3-ex-6',
        number: '8.3.6',
        type: 'classic',
        task: 'Drøft utfordringer knyttet til tolkning av datamateriale. Hvorfor kan to forskere tolke det samme materialet ulikt, og hva kan man gjøre for å sikre at tolkningen er troverdig?',
        hints: ['Tenk på forskerens forforståelse, valg av teori og perspektiv, og mulige tiltak som åpenhet om metode og bruk av flere analytikere'],
        solution: 'To forskere kan tolke likt materiale ulikt fordi de har ulik forforståelse, fagbakgrunn og teoretisk perspektiv. En sosiolog og en medieforsker kan legge merke til ulike aspekter i det samme intervjuet. Tiltak for å sikre troverdig tolkning: 1) Være åpen om egne antakelser og forforståelse. 2) Begrunne tolkningene med konkrete sitater fra datamaterialet. 3) La andre lese materialet og sammenligne tolkninger. 4) Bruke relevant teori som rammeverk. 5) Være ærlig om tolkningens begrensninger. 6) Skille tydelig mellom beskrivelse og tolkning i teksten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Koding** er å merke datamaterialet med beskrivende merkelapper
- **Kategorisering** samler koder i overordnede temaer
- **Induktiv analyse** lar kategorier vokse frem fra data, **deduktiv** bruker teori
- **Hermeneutisk tolkning** handler om veksling mellom del og helhet
- God analyse krever åpenhet om metode og forskerens forforståelse

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Koding | Merke datamaterialet med beskrivende merkelapper |
| Kategorisering | Samle koder i overordnede temaer |
| Hermeneutikk | Fortolkningslære – veksling del og helhet |
| Induktiv | Kategorier vokser frem fra data |
| Deduktiv | Kategorier hentes fra teori |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Fagskriving og formidling
// ============================================================================

export const CHAPTER_KOMKULT2_8_4: TextbookChapter = {
  id: 'komkult2-8-4',
  courseId: 'komkult-2',
  chapterNumber: '8.4',
  title: 'Fagskriving og formidling',
  description: 'Hvordan strukturere og skrive et faglig fordypningsprosjekt. Du lærer om oppbygging, akademisk skrivestil, kildebruk og referansehåndtering, samt hvordan du formidler funn på en klar og overbevisende måte.',
  estimatedMinutes: 24,
  competenceGoals: [
    'formidle faglig innhold skriftlig og muntlig med presisjon og faglig tyngde',
    'bruke vitenskapelige metoder og kildekritikk i eget forskningsarbeid',
  ],
  keyTerms: [
    { term: 'IMRaD-struktur', definition: 'Standardisert oppbygging av faglige tekster: Innledning, Metode, Resultater og Diskusjon' },
    { term: 'Akademisk skrivestil', definition: 'Saklig, presis og kildestøttet skrivemåte som skiller mellom egne vurderinger og andres bidrag' },
    { term: 'Referansesystem', definition: 'Standardisert system for å vise hvor informasjon er hentet fra, for eksempel APA eller Chicago' },
    { term: 'Plagiat', definition: 'Å presentere andres tekst, ideer eller funn som sine egne uten kildeangivelse' },
    { term: 'Drøfting', definition: 'Å belyse en sak fra flere sider ved å veie ulike argumenter og perspektiver mot hverandre' },
  ],
  content: [
    {
      id: 'kk2-8-4-intro',
      type: 'text',
      content: `## Å skrive faglig og overbevisende

Et fordypningsprosjekt handler ikke bare om å samle inn og analysere data – det handler like mye om å formidle funnene på en klar, strukturert og faglig overbevisende måte. God fagskriving gjør at leseren kan følge resonnementene dine, vurdere argumentasjonen din, og forstå hva du har funnet ut.

I dette kapittelet skal du lære:
- Hvordan du strukturerer et fordypningsprosjekt med IMRaD-modellen
- Hva akademisk skrivestil innebærer i praksis
- Hvordan du bruker og refererer til kilder korrekt
- Hva plagiat er og hvordan du unngår det
- Hvordan du skriver en god drøfting`,
    },
    {
      id: 'kk2-8-4-def-1',
      type: 'definition',
      title: 'IMRaD-strukturen',
      content: `**IMRaD** er en standardisert oppbygging for faglige tekster, mye brukt i akademisk skriving:

- **I – Innledning:** Presenterer temaet, problemstillingen, bakgrunn og relevans. Forklarer hvorfor dette er verdt å undersøke.
- **M – Metode:** Beskriver hvordan undersøkelsen ble gjennomført: valg av metode, utvalg, datainnsamling og analysemåte. Skal være så presis at andre kan vurdere kvaliteten.
- **R – Resultater:** Presenterer funnene fra undersøkelsen, gjerne med sitater, tabeller eller diagrammer. Her tolker du ikke – du beskriver.
- **a – (og)**
- **D – Diskusjon:** Tolker og drøfter resultatene i lys av teori og tidligere forskning. Diskuterer styrker og svakheter ved undersøkelsen. Trekker konklusjoner.`,
    },
    {
      id: 'kk2-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Strukturere et fordypningsprosjekt',
      problem: 'Du har undersøkt hvordan tre norske nettaviser dekket klimatoppmøtet COP28. Hvordan strukturerer du teksten?',
      solution: `**Innledning:**
Presenterer temaet (mediedekning av klima), bakgrunn (medienes rolle i klimadebatten), og problemstillingen: «Hvordan dekket VG, Dagbladet og Aftenposten klimatoppmøtet COP28, og hvilke forskjeller finnes mellom avisenes dekning?»

**Metode:**
Beskriver metodevalg (komparativ innholdsanalyse), utvalg (alle artikler om COP28 i en bestemt uke), og analysekategorier (vinkling, kilder, sjanger, plassering).

**Resultater:**
Presenterer funnene systematisk: «VG publiserte 12 artikler med hovedvekt på konfliktvinkler. Aftenposten publiserte 23 artikler med mer bakgrunnsstoff og ekspertkilder.» Bruk tabeller og sitater.

**Diskusjon:**
Drøfter funnene: Hvorfor dekker avisene klimatoppmøtet ulikt? Koble til teori om nyhetsverdi, tabloidisering og kvalitetsjournalistikk. Diskuter begrensninger i egen studie. Trekk konklusjoner.`,
    },
    {
      id: 'kk2-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'Hva står «D» for i IMRaD-strukturen?',
        options: [
          { id: 'a', text: 'Data', isCorrect: false },
          { id: 'b', text: 'Dokumentasjon', isCorrect: false },
          { id: 'c', text: 'Diskusjon', isCorrect: true },
          { id: 'd', text: 'Definisjon', isCorrect: false },
        ],
        solution: 'D i IMRaD står for Diskusjon (eller Drøfting). Dette er delen der du tolker resultatene, drøfter dem i lys av teori og tidligere forskning, vurderer styrker og svakheter ved egen undersøkelse, og trekker konklusjoner. Diskusjonen er ofte den mest analytisk krevende delen av prosjektet.',
      },
    },
    {
      id: 'kk2-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        task: 'Skriv en kort innledning (ca. 150–200 ord) til et fordypningsprosjekt med problemstillingen: «Hvordan fremstilles kjønn i reklame for treningssentre på Instagram?» Innledningen skal inneholde bakgrunn, relevans og problemstilling.',
        hints: ['Begynn med det brede temaet (reklame og kjønn), snevr inn mot konteksten (Instagram, treningssentre), og avslutt med den presise problemstillingen'],
        solution: 'Eksempel: «Reklame har lenge blitt kritisert for å formidle stereotypiske fremstillinger av kjønn. I en tid der sosiale medier dominerer markedsføringen, har Instagram blitt en viktig reklameplattform – også for treningsbransjen. Treningssentre bruker Instagram aktivt for å tiltrekke kunder, og bildene og videoene de publiserer, formidler bestemte idealer om kropp, trening og kjønn. Forskning viser at reklamens kjønnsfremstillinger kan påvirke selvbilde og kroppsoppfatning, særlig blant unge. Det er derfor interessant å undersøke hvilke kjønnsfremstillinger som finnes i denne typen reklame. I dette fordypningsprosjektet er problemstillingen: Hvordan fremstilles kjønn i reklame for treningssentre på Instagram? Prosjektet analyserer et utvalg innlegg fra tre norske treningssenterkjeder, med fokus på visuell fremstilling, aktivitetstyper og språkbruk.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-4-def-2',
      type: 'definition',
      title: 'Plagiat og kildebruk',
      content: `**Plagiat** er å presentere andres tekst, ideer eller funn som sine egne uten å oppgi kilden. Plagiat er et alvorlig brudd på akademisk redelighet og kan få konsekvenser både i skole- og arbeidssammenheng.

**Former for plagiat:**
- **Direkte avskrift:** Kopiere tekst ord for ord uten sitatmerker og kildeangivelse
- **Parafraseplagiat:** Omformulere andres tekst uten å oppgi kilden
- **Idéplagiat:** Bruke andres ideer, analyser eller argumenter uten kildeangivelse
- **Selvplagiat:** Levere eget arbeid som allerede er brukt i en annen sammenheng

**Korrekt kildebruk:**
- Direkte sitat: Sett teksten i anførselstegn og oppgi kilde med sidetall
- Parafrase: Omformuler med egne ord og oppgi kilden
- Bruk et konsekvent referansesystem (APA 7 er vanligst i norsk skole)`,
    },
    {
      id: 'kk2-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom direkte sitat og parafrase, og gi et eksempel på korrekt bruk av hver. Hvorfor er det viktig å beherske begge teknikkene i fagskriving?',
        hints: ['Tenk på når det passer å sitere direkte og når det er bedre å skrive om med egne ord'],
        solution: 'Direkte sitat: Man gjengir kildens eksakte ordlyd i anførselstegn. Eksempel: Ifølge Hågvar (2013, s. 45) er «mediekompetanse en forutsetning for demokratisk deltakelse i det moderne samfunnet». Parafrase: Man gjengir kildens innhold med egne ord, men oppgir fremdeles kilden. Eksempel: Hågvar (2013) argumenterer for at evnen til å forstå og vurdere medieinnhold er nødvendig for å kunne delta aktivt i et demokrati. Begge teknikkene er viktige: Direkte sitat passer når kildens ordlyd er viktig eller slående. Parafrase viser at du har forstått innholdet og kan integrere det i din egen tekst. En god faglig tekst kombinerer begge, og bruker alltid kildeangivelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-4-ex-4',
        number: '8.4.4',
        type: 'multiple-choice',
        task: 'Hvilken av disse handlingene er et eksempel på plagiat?',
        options: [
          { id: 'a', text: 'Å sitere en forsker med anførselstegn og kildeangivelse', isCorrect: false },
          { id: 'b', text: 'Å skrive om en kildes poeng med egne ord og oppgi kilden', isCorrect: false },
          { id: 'c', text: 'Å omformulere en kildes tekst uten å oppgi kilden', isCorrect: true },
          { id: 'd', text: 'Å bruke fagbegreper som finnes i mange kilder', isCorrect: false },
        ],
        solution: 'Å omformulere en kildes tekst uten å oppgi kilden er parafraseplagiat. Selv om du bruker egne ord, er det kildens ideer og innhold du gjengir, og da må kilden oppgis. Korrekt kildebruk innebærer alltid å vise hvor informasjonen kommer fra, enten du siterer direkte eller parafraserer.',
      },
    },
    {
      id: 'kk2-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        task: 'Skriv et kort drøftingsavsnitt (ca. 100–150 ord) der du diskuterer dette funnet fra et tenkt fordypningsprosjekt: «70 % av de spurte elevene oppgir at de stoler mer på influencere enn på journalister som nyhetskilde.» Trekk inn minst to perspektiver.',
        hints: ['Drøft hva funnet kan bety, hvorfor det kan være slik, og hva det innebærer for samfunnet'],
        solution: 'Eksempel: «Funnet om at 70 % stoler mer på influencere enn journalister, er påfallende og kan tolkes fra flere perspektiver. Én forklaring er at influencere oppleves som mer autentiske og personlige enn tradisjonelle medier. Ungdom har vokst opp med influencere og opplever dem som jevnaldrende de kan identifisere seg med. Fra et demokratiperspektiv er dette bekymringsfullt, fordi influencere sjelden følger journalistiske normer om kildekritikk og balansert fremstilling. Samtidig kan funnet reflektere en sunn skepsis mot etablerte medier, som også gjør feil. Det er imidlertid viktig å understreke at utvalget er begrenset, og at tallet ikke nødvendigvis kan generaliseres til alle norske ungdommer.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-4-ex-6',
        number: '8.4.6',
        type: 'classic',
        task: 'Forklar hva som kjennetegner en god drøfting i et faglig fordypningsprosjekt. Hva er forskjellen mellom å drøfte og å beskrive?',
        hints: ['Tenk på hvordan en drøfting veier ulike perspektiver mot hverandre, mens en beskrivelse bare gjengir informasjon'],
        solution: 'En god drøfting kjennetegnes av at man belyser en sak fra flere sider ved å veie ulike argumenter og perspektiver mot hverandre. Man trekker inn teori, empiriske funn og egne resonnement. Man viser styrker og svakheter i ulike posisjoner, og lander på en begrunnet konklusjon. Forskjellen fra beskrivelse: Å beskrive er å gjengi hva som er observert eller hva kildene sier, uten å vurdere eller tolke. For eksempel: «VG publiserte 12 artikler om saken» er beskrivelse. «At VG publiserte færre artikler enn Aftenposten, kan tyde på lavere prioritering av klimastoff, men det kan også skyldes at VG fokuserte på andre nyhetshendelser den uken» er drøfting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **IMRaD** er en standardisert struktur for faglige tekster: Innledning, Metode, Resultater og Diskusjon
- **Akademisk skrivestil** er saklig, presis og kildestøttet
- **Plagiat** er å bruke andres arbeid uten kildeangivelse og er et alvorlig brudd på redelighet
- Korrekt kildebruk innebærer direkte sitat, parafrase og konsekvent referansesystem
- En god **drøfting** belyser saken fra flere sider og veier argumenter mot hverandre

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| IMRaD | Innledning, Metode, Resultater og Diskusjon |
| Akademisk skrivestil | Saklig, presis, kildestøttet skrivemåte |
| Plagiat | Å bruke andres arbeid uten kildeangivelse |
| Referansesystem | System for kildehenvisning (f.eks. APA) |
| Drøfting | Å belyse en sak fra flere sider |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Presentasjon og vurdering
// ============================================================================

export const CHAPTER_KOMKULT2_8_5: TextbookChapter = {
  id: 'komkult2-8-5',
  courseId: 'komkult-2',
  chapterNumber: '8.5',
  title: 'Presentasjon og vurdering',
  description: 'Hvordan presentere fordypningsprosjektet muntlig og skriftlig, og hvordan vurdere egen og andres forskning. Du lærer om effektiv formidling, bruk av visuelle hjelpemidler, og kriterier for å vurdere kvaliteten i faglig arbeid.',
  estimatedMinutes: 20,
  competenceGoals: [
    'formidle faglig innhold skriftlig og muntlig med presisjon og faglig tyngde',
    'planlegge, gjennomføre og presentere et fordypningsprosjekt om kommunikasjon og kultur',
  ],
  keyTerms: [
    { term: 'Faglig presentasjon', definition: 'Muntlig eller visuell fremlegging av et faglig arbeid for et publikum' },
    { term: 'Formidlingskompetanse', definition: 'Evnen til å tilpasse faglig innhold til ulike mottakere og formidlingskanaler' },
    { term: 'Vurderingskriterier', definition: 'Forhåndsdefinerte standarder som brukes til å bedømme kvaliteten på et faglig arbeid' },
    { term: 'Metarefleksjon', definition: 'Å reflektere over eget arbeid, valg og begrensninger i prosjektet' },
    { term: 'Opponering', definition: 'Å gi en kritisk og konstruktiv vurdering av andres faglige arbeid' },
  ],
  content: [
    {
      id: 'kk2-8-5-intro',
      type: 'text',
      content: `## Å formidle og vurdere faglig arbeid

Et fordypningsprosjekt er ikke ferdig før det er formidlet. Uansett hvor grundig forskningen er, betyr den lite dersom den ikke kommuniseres på en måte som gjør at andre kan forstå, vurdere og lære av den. I tillegg er evnen til å vurdere eget og andres arbeid kritisk en viktig del av den faglige kompetansen.

I dette kapittelet skal du lære:
- Hvordan du forbereder og gjennomfører en god faglig presentasjon
- Hvordan du bruker visuelle hjelpemidler effektivt
- Hva vurderingskriterier for fordypningsprosjekter innebærer
- Hvordan du reflekterer over eget arbeid (metarefleksjon)
- Hvordan du gir konstruktiv tilbakemelding på andres arbeid (opponering)`,
    },
    {
      id: 'kk2-8-5-def-1',
      type: 'definition',
      title: 'Faglig presentasjon',
      content: `En **faglig presentasjon** er en muntlig og/eller visuell fremlegging av et faglig arbeid for et publikum. Formålet er å formidle funn, argumenter og konklusjoner på en klar og engasjerende måte.

**Kjennetegn på en god faglig presentasjon:**
- **Strukturert:** Tydelig innledning, hoveddel og avslutning
- **Tilpasset publikum:** Forklarer fagbegreper og velger riktig nivå
- **Visuelt støttende:** Bruk av bilder, diagrammer og stikkord – ikke lesing av manuskript
- **Tidsstyrt:** Holder seg innenfor tildelt tid
- **Engasjerende:** Varierer stemme, bruker eksempler og holder blikkontakt`,
    },
    {
      id: 'kk2-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Planlegge en presentasjon',
      problem: 'Du skal holde en 10-minutters presentasjon av fordypningsprosjektet ditt om kjønnsrepresentasjon i norsk reklame. Hvordan strukturerer du presentasjonen?',
      solution: `**Tidsplan:**

**1–2 minutter: Innledning**
- Fang oppmerksomheten: Vis et konkret reklameeksempel
- Presenter problemstillingen
- Gi en kort oversikt over presentasjonens oppbygging

**2–3 minutter: Metode**
- Beskriv kort hva du har gjort: Hvilke reklamer du analyserte, hvordan du valgte dem ut, og hvilke analysekategorier du brukte
- Vis eksempler fra materialet

**3–4 minutter: Funn og analyse**
- Presenter hovedfunnene med konkrete eksempler
- Bruk visuelle elementer: bilder fra reklamene, diagrammer med tall
- Trekk linjer til teori

**1–2 minutter: Konklusjon**
- Oppsummer de viktigste funnene
- Reflekter over begrensninger
- Avslutt med et spørsmål eller en tankevekkende observasjon`,
    },
    {
      id: 'kk2-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste funksjonen til visuelle hjelpemidler i en faglig presentasjon?',
        options: [
          { id: 'a', text: 'Å erstatte det muntlige fremlegget slik at man slipper å snakke', isCorrect: false },
          { id: 'b', text: 'Å vise at man har jobbet mye med prosjektet', isCorrect: false },
          { id: 'c', text: 'Å støtte og tydeliggjøre budskapet, ikke erstatte det muntlige', isCorrect: true },
          { id: 'd', text: 'Å fylle tiden slik at presentasjonen blir lang nok', isCorrect: false },
        ],
        solution: 'Visuelle hjelpemidler som lysbilder, bilder, diagrammer og tabeller skal støtte det muntlige fremlegget, ikke erstatte det. De skal tydeliggjøre poenger, vise data på en oversiktlig måte, og hjelpe publikum med å følge resonnementet. En god presentasjon bruker visuelle elementer som supplement – ikke som manuskript å lese fra.',
      },
    },
    {
      id: 'kk2-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-5-ex-2',
        number: '8.5.2',
        type: 'classic',
        task: 'Lag en plan for en 10-minutters presentasjon av et fordypningsprosjekt om ungdoms nyhetsvaner. Beskriv hva du ville tatt med i innledning, hoveddel og avslutning, og hvilke visuelle hjelpemidler du ville brukt.',
        hints: ['Fordel tiden mellom de ulike delene og tenk på hva publikum trenger for å forstå prosjektet'],
        solution: 'Innledning (2 min): Åpning med et spørsmål til publikum: «Hvor fikk dere siste nyhet dere leste?» Presentere problemstillingen og gi veikart for presentasjonen. Visuelt: Lysbilde med problemstillingen. Hoveddel (6 min): 1) Kort om metode (1 min): Lysbilde med oversikt over metodevalg og utvalg. 2) Hovedfunn (3 min): Diagrammer med nøkkeltall, sitater fra intervjuer, sammenligning av ulike grupper. 3) Analyse og drøfting (2 min): Koble funnene til teori. Visuelt: Søylediagrammer, direkte sitater i fargede bokser. Avslutning (2 min): Oppsummering av tre hovedfunn, refleksjon over begrensninger, avslutning med en fremtidsrettet tanke. Visuelt: Oppsummeringslysbilde med tre kulepunkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-5-def-2',
      type: 'definition',
      title: 'Metarefleksjon og opponering',
      content: `**Metarefleksjon** er å reflektere kritisk over eget arbeid, inkludert valg man har tatt, begrensninger i metode og data, og hva man ville gjort annerledes. Metarefleksjon viser faglig modenhet og ærlighet.

**Opponering** er å gi en kritisk og konstruktiv vurdering av andres faglige arbeid. Formålet er å bidra til faglig utvikling gjennom ærlig tilbakemelding.

**Gode opponeringsprinsipper:**
- Start med det positive: Hva er prosjektets styrker?
- Vær konkret i kritikken: Pek på spesifikke punkter, ikke generelle inntrykk
- Skill mellom store og små innvendinger
- Foreslå forbedringer, ikke bare pek på problemer
- Vær respektfull, men ærlig`,
    },
    {
      id: 'kk2-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        task: 'Skriv en kort metarefleksjon (100–150 ord) for et tenkt fordypningsprosjekt der du intervjuet fem elever om deres forhold til nyhetsmedier. Reflekter over styrker og svakheter ved eget arbeid.',
        hints: ['Vurder metodevalg, utvalg, gjennomføring og hva du ville gjort annerledes'],
        solution: 'Eksempel: «En styrke ved prosjektet er at de semistrukturerte intervjuene ga dybde og nyanser som et spørreskjema ikke ville fanget opp. Informantene kunne utdype svarene og komme med eksempler fra egen hverdag. Samtidig er utvalget på fem elever fra én skole for lite til å generalisere. En svakhet er at alle informantene var fra samme studieretning, noe som kan gi et skjevt bilde. Intervjuerens rolle kan også ha påvirket svarene – noen informanter kan ha svart det de trodde var «riktig». Hvis jeg skulle gjort prosjektet på nytt, ville jeg kombinert intervjuer med et spørreskjema for å få bredere data, og rekruttert informanter fra flere skoler og studieretninger.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-5-ex-4',
        number: '8.5.4',
        type: 'multiple-choice',
        task: 'Hva innebærer metarefleksjon i et fordypningsprosjekt?',
        options: [
          { id: 'a', text: 'Å skrive om metadata og tekniske spesifikasjoner', isCorrect: false },
          { id: 'b', text: 'Å reflektere kritisk over egne valg, begrensninger og hva man ville gjort annerledes', isCorrect: true },
          { id: 'c', text: 'Å beskrive andres forskning om samme tema', isCorrect: false },
          { id: 'd', text: 'Å gjenta problemstillingen i konklusjonen', isCorrect: false },
        ],
        solution: 'Metarefleksjon handler om å stille seg kritisk til eget arbeid: Var metodevalget godt nok? Er utvalget representativt? Kan mine egne holdninger ha påvirket tolkningene? Hva ville jeg gjort annerledes? Metarefleksjon viser faglig modenhet og styrker prosjektets troverdighet ved å være ærlig om begrensninger.',
      },
    },
    {
      id: 'kk2-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        task: 'Du skal opponere på en medelevers fordypningsprosjekt om klimajournalistikk. Medeleven har intervjuet tre journalister og konkludert med at «norsk klimajournalistikk er for ensidig.» Skriv tre konkrete opponeringspunkter – ett positivt og to konstruktivt kritiske.',
        hints: ['Vurder om konklusjonen følger av dataene, om metoden er god nok, og hva som er prosjektets styrker'],
        solution: 'Positivt: Prosjektet tar opp et viktig og aktuelt tema, og intervjuer med faktiske journalister gir verdifull innsikt fra innsiden av redaksjonene. Kritisk 1: Konklusjonen om at norsk klimajournalistikk «er for ensidig» er for sterk i lys av at kun tre journalister er intervjuet. Tre informanter fra én redaksjon kan ikke representere hele den norske pressens klimadekning. Det ville styrket prosjektet å nyansere konklusjonen eller begrunne hvorfor tre informanter er tilstrekkelig. Kritisk 2: Prosjektet mangler en drøfting av hva «ensidig» betyr. Er det ensidig å fokusere på vitenskapelig konsensus, eller er det nettopp balansert? Begrepet burde vært operasjonalisert tydeligere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-8-5-ex-6',
        number: '8.5.6',
        type: 'classic',
        task: 'Hvilke vurderingskriterier mener du bør legges til grunn for et fordypningsprosjekt i kommunikasjon og kultur? Lag en liste med minst fem kriterier og begrunn hvert av dem kort.',
        hints: ['Tenk på problemstilling, metode, analyse, formidling og kildekritikk'],
        solution: 'Fem vurderingskriterier: 1) Problemstilling: Er den presis, avgrenset og faglig relevant? En god problemstilling gir retning til hele prosjektet. 2) Metode: Er metodevalget begrunnet og egnet for problemstillingen? Er gjennomføringen beskrevet så andre kan vurdere kvaliteten? 3) Analyse og drøfting: Er funnene analysert i dybden? Er drøftingen nyansert med flere perspektiver? 4) Kildebruk: Er kildene relevante, troverdige og korrekt referert? Er det en god balanse mellom egne resonnementer og kilder? 5) Formidling: Er teksten velstrukturert, klar og språklig presis? Er den tilpasset formålet og publikum? Disse kriteriene vurderer hele forskningsprosessen – fra planlegging til formidling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En god **faglig presentasjon** er strukturert, tilpasset publikum og visuelt støttende
- **Visuelle hjelpemidler** skal støtte, ikke erstatte det muntlige fremlegget
- **Metarefleksjon** er å vurdere eget arbeid kritisk og ærlig
- **Opponering** gir konstruktiv tilbakemelding som styrker faglig utvikling
- **Vurderingskriterier** sikrer at prosjektet bedømmes systematisk og rettferdig

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Faglig presentasjon | Muntlig fremlegging av faglig arbeid |
| Formidlingskompetanse | Evne til å tilpasse innhold til mottakere |
| Metarefleksjon | Kritisk refleksjon over eget arbeid |
| Opponering | Konstruktiv vurdering av andres arbeid |
| Vurderingskriterier | Standarder for å bedømme faglig kvalitet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksportert samling
// ============================================================================

export const KOMKULT2_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT2_8_1,
  CHAPTER_KOMKULT2_8_2,
  CHAPTER_KOMKULT2_8_3,
  CHAPTER_KOMKULT2_8_4,
  CHAPTER_KOMKULT2_8_5,
];
