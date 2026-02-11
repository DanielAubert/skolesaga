/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

/**
 * Tekstbok innhold for Kommunikasjon og kultur 3 (VG3) - Del 8: Fordypningsprosjekt
 *
 * Kapittel 8.1–8.5
 *
 * LK20-kompetansemål:
 * - planlegge og gjennomføre et selvstendig fordypningsprosjekt innen kommunikasjon og kultur
 * - bruke relevante forskningsmetoder og kildekritikk i eget arbeid
 * - presentere og formidle faglig innhold skriftlig og muntlig med akademisk presisjon
 */

// ============================================================================
// Kapittel 8.1: Forskningsmetode og problemstilling
// ============================================================================

export const CHAPTER_KOMKULT3_8_1: TextbookChapter = {
  id: 'komkult3-8-1',
  courseId: 'komkult-3',
  chapterNumber: '8.1',
  title: 'Forskningsmetode og problemstilling',
  description: 'Hvordan formulere en presis problemstilling og velge riktig forskningsdesign. Du lærer om ulike problemstillingstyper og hvordan forskningsdesign henger sammen med metodevalg.',
  estimatedMinutes: 22,
  competenceGoals: [
    'planlegge og gjennomføre et selvstendig fordypningsprosjekt innen kommunikasjon og kultur',
    'bruke relevante forskningsmetoder og kildekritikk i eget arbeid',
  ],
  keyTerms: [
    { term: 'Problemstilling', definition: 'Et presist formulert spørsmål som styrer undersøkelsen og avgrenser temaet' },
    { term: 'Beskrivende problemstilling', definition: 'Spørsmål som søker å kartlegge hvordan noe er, uten å forklare årsaker' },
    { term: 'Forklarende problemstilling', definition: 'Spørsmål som søker å finne årsaker og sammenhenger bak et fenomen' },
    { term: 'Vurderende problemstilling', definition: 'Spørsmål som inviterer til kritisk drøfting og vurdering av et fenomen' },
    { term: 'Forskningsdesign', definition: 'Den overordnede planen for hvordan en undersøkelse skal gjennomføres' },
    { term: 'Operasjonalisering', definition: 'Å gjøre abstrakte begreper målbare og undersøkbare' },
  ],
  content: [
    {
      id: 'kk3-8-1-intro',
      type: 'text',
      content: `## Fra tema til forskningsspørsmål

Et godt fordypningsprosjekt begynner med en gjennomtenkt problemstilling. Problemstillingen er kompasset som styrer hele prosjektet: den bestemmer hvilke metoder du velger, hvilke data du samler inn, og hvordan du strukturerer analysen.

I dette kapittelet skal du lære:
- Hva som kjennetegner en god problemstilling
- Forskjellen mellom beskrivende, forklarende og vurderende problemstillinger
- Hvordan du velger et forskningsdesign som passer til problemstillingen
- Hvordan du operasjonaliserer abstrakte begreper`,
    },
    {
      id: 'kk3-8-1-def-1',
      type: 'definition',
      title: 'Problemstilling',
      content: `En **problemstilling** er et presist formulert spørsmål som styrer en undersøkelse. Den avgrenser temaet, gir retning til arbeidet og gjør det mulig å vurdere om prosjektet har lykkes.

**Kjennetegn på en god problemstilling:**
- **Presis:** Klart avgrenset og entydig
- **Forskbar:** Mulig å undersøke med tilgjengelige metoder og ressurser
- **Relevant:** Faglig interessant og knyttet til kompetansemål
- **Åpen nok:** Gir rom for analyse og drøfting, ikke bare ja/nei-svar
- **Avgrenset:** Realistisk å besvare innenfor prosjektets rammer`,
    },
    {
      id: 'kk3-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Fra vagt tema til presis problemstilling',
      problem: 'En elev er interessert i «sosiale medier og ungdom». Hvordan kan dette vage temaet bli til en presis problemstilling?',
      solution: `**Steg 1 – Avgrens temaet:**
Sosiale medier er et enormt felt. Eleven velger å fokusere på Instagram og kroppspress blant jenter i VG2.

**Steg 2 – Velg type spørsmål:**
- Beskrivende: «Hvordan fremstilles kropp i de mest populære norske Instagram-kontoene rettet mot unge jenter?»
- Forklarende: «Hvorfor opplever jenter i VG2 at Instagram påvirker deres kroppsoppfatning?»
- Vurderende: «I hvilken grad bidrar Instagram til kroppspress blant jenter i videregående skole?»

**Steg 3 – Test problemstillingen:**
Alle tre er presise og forskbare, men krever ulike metoder. Den beskrivende kan besvares med innholdsanalyse, den forklarende med intervjuer, og den vurderende med en kombinasjon.`,
    },
    {
      id: 'kk3-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Hvilken type problemstilling er dette: «Hvordan fremstilles innvandrere i norske nettaviser sammenlignet med riksaviser på papir?»',
        options: [
          { id: 'a', text: 'Forklarende problemstilling', isCorrect: false },
          { id: 'b', text: 'Beskrivende problemstilling', isCorrect: true },
          { id: 'c', text: 'Vurderende problemstilling', isCorrect: false },
          { id: 'd', text: 'Normativ problemstilling', isCorrect: false },
        ],
        solution: 'Problemstillingen spør «hvordan» noe fremstilles, altså kartlegger den et fenomen uten å forklare årsaker eller vurdere om det er bra eller dårlig. Det er dermed en beskrivende problemstilling. En forklarende ville spurt «hvorfor», og en vurderende ville spurt «i hvilken grad» eller bedt om en drøfting.',
      },
    },
    {
      id: 'kk3-8-1-def-2',
      type: 'definition',
      title: 'Problemstillingstyper',
      content: `**Beskrivende problemstilling:**
Kartlegger og beskriver et fenomen. Spør gjerne «hva» eller «hvordan». Eksempel: «Hvilke retoriske virkemidler brukes i reklame for energidrikker rettet mot ungdom?»

**Forklarende problemstilling:**
Søker å forstå årsaker og sammenhenger. Spør gjerne «hvorfor» eller «hva er sammenhengen mellom». Eksempel: «Hvorfor velger norske ungdommer å følge amerikanske influensere fremfor norske?»

**Vurderende problemstilling:**
Inviterer til kritisk drøfting og vurdering. Bruker gjerne «i hvilken grad» eller «bør». Eksempel: «I hvilken grad gjenspeiler norsk film et mangfoldig samfunn?»

Valg av problemstillingstype påvirker hele prosjektet: metodevalg, analyseform og konklusjonens karakter.`,
    },
    {
      id: 'kk3-8-1-text-1',
      type: 'text',
      content: `### Forskningsdesign

Forskningsdesign er den overordnede planen for hvordan du skal besvare problemstillingen. Designet binder sammen problemstilling, metode, datainnsamling og analyse.

**Vanlige forskningsdesign i kommunikasjon og kultur:**

| Design | Beskrivelse | Egnet for |
|--------|------------|-----------|
| Casestudie | Dybdestudie av ett enkelt tilfelle | Komplekse fenomener i kontekst |
| Komparativ studie | Sammenligner to eller flere tilfeller | Likheter og forskjeller |
| Tekstanalyse | Systematisk analyse av tekster | Medieinnhold, kulturuttrykk |
| Feltarbeid | Observasjon i naturlig setting | Kommunikasjonspraksis |
| Surveydesign | Spørreskjema til mange respondenter | Holdninger og mønstre |

**Operasjonalisering:**
Abstrakte begreper som «kroppspress» eller «kulturell identitet» må gjøres konkrete og målbare. For eksempel kan «kroppspress» operasjonaliseres som «opplevelsen av at man bør se ut på en bestemt måte, målt gjennom spørsmål om tilfredsstilling med eget utseende».`,
    },
    {
      id: 'kk3-8-1-example-2',
      type: 'example',
      title: 'Eksempel: Velge forskningsdesign',
      problem: 'Du har problemstillingen: «Hvordan bruker ungdomspartiene TikTok til politisk kommunikasjon?» Hvilket forskningsdesign passer best?',
      solution: `**Vurdering av mulige design:**

**Tekstanalyse (innholdsanalyse):**
Passer godt fordi du systematisk kan analysere innholdet ungdomspartiene publiserer. Du kan kategorisere videoer etter tema, virkemidler og stil.

**Komparativ studie:**
Egnet fordi du kan sammenligne flere partier og finne likheter og forskjeller i kommunikasjonsstrategier.

**Anbefalt design:**
En kombinasjon av komparativ studie og tekstanalyse. Velg ut 3–4 ungdomspartier, samle et utvalg TikTok-videoer fra en bestemt periode, og analyser dem systematisk med fokus på innhold, retorikk og visuell stil.

**Operasjonalisering:**
«Politisk kommunikasjon» kan operasjonaliseres som: innhold som omhandler politiske saker, partipromotering, mobilisering, eller angrep på motstandere.`,
    },
    {
      id: 'kk3-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        task: 'Formuler tre ulike problemstillinger om temaet «strømmetjenester og norsk kultur» – én beskrivende, én forklarende og én vurderende. Forklar hvilken metode som ville passe til hver av dem.',
        hints: ['Tenk på hva du kan kartlegge, hva du kan forklare årsaken til, og hva du kan drøfte verdien av'],
        solution: 'Beskrivende: «Hvor stor andel av det mest strømmede innholdet på Netflix i Norge er norskprodusert?» – passer med kvantitativ innholdsanalyse. Forklarende: «Hvorfor velger norske ungdommer engelskspråklige serier fremfor norske på strømmetjenester?» – passer med kvalitative intervjuer. Vurderende: «I hvilken grad truer strømmetjenestenes dominans det norske mediemangfoldet?» – passer med en kombinasjon av dokumentanalyse og drøfting basert på flere kilder.',
      },
    },
    {
      id: 'kk3-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-1-ex-3',
        number: '8.1.3',
        type: 'multiple-choice',
        task: 'Hva betyr det å operasjonalisere et begrep?',
        options: [
          { id: 'a', text: 'Å definere begrepet i en ordbok', isCorrect: false },
          { id: 'b', text: 'Å gjøre et abstrakt begrep målbart og undersøkbart', isCorrect: true },
          { id: 'c', text: 'Å oversette begrepet til et annet språk', isCorrect: false },
          { id: 'd', text: 'Å fjerne begrepet fra problemstillingen', isCorrect: false },
        ],
        solution: 'Operasjonalisering handler om å gjøre abstrakte begreper konkrete og målbare, slik at de kan undersøkes empirisk. For eksempel kan «integrering» operasjonaliseres som deltakelse i arbeidslivet, språkferdigheter og sosiale nettverk – faktorer som kan måles gjennom spørreskjema eller intervju.',
      },
    },
    {
      id: 'kk3-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        task: 'Du skal skrive et fordypningsprosjekt om kulturelle forskjeller i kommunikasjonsstil. Lag en presis problemstilling, begrunn valget av problemstillingstype, og skisser et forskningsdesign med begrunnelse for metodevalg.',
        hints: ['Avgrens til en bestemt kontekst, for eksempel arbeidslivet, skolen eller sosiale medier'],
        solution: 'Eksempel på problemstilling: «Hvordan opplever utvekslingselever ved norske videregående skoler forskjeller i kommunikasjonsstil mellom hjemlandet og Norge?» Dette er en beskrivende problemstilling som kartlegger opplevelser. Forskningsdesign: Casestudie med kvalitative intervjuer av 4–6 utvekslingselever. Metodevalg begrunnes med at opplevelser best fanges gjennom dybdeintervjuer der elevene kan fortelle med egne ord. Komparativt element ved å sammenligne elever fra ulike land.',
      },
    },
    {
      id: 'kk3-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-1-ex-5',
        number: '8.1.5',
        type: 'multiple-choice',
        task: 'Hvilket forskningsdesign passer best til problemstillingen: «Hva kjennetegner representasjonen av samisk kultur i NRK Super-programmer de siste fem årene?»',
        options: [
          { id: 'a', text: 'Surveydesign med spørreskjema', isCorrect: false },
          { id: 'b', text: 'Feltarbeid med deltakende observasjon', isCorrect: false },
          { id: 'c', text: 'Systematisk tekstanalyse (innholdsanalyse)', isCorrect: true },
          { id: 'd', text: 'Eksperimentelt design', isCorrect: false },
        ],
        solution: 'Problemstillingen handler om å kartlegge innholdet i TV-programmer, noe som best undersøkes med systematisk tekstanalyse/innholdsanalyse. Du ville valgt ut et utvalg programmer, utviklet kategorier for analyse (f.eks. type representasjon, roller, temaer) og analysert innholdet systematisk. Surveydesign måler holdninger, ikke innhold. Feltarbeid er for situasjoner i naturlige settinger.',
      },
    },
    {
      id: 'kk3-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **problemstilling** er et presist spørsmål som styrer hele fordypningsprosjektet
- **Beskrivende** problemstillinger kartlegger, **forklarende** søker årsaker, og **vurderende** inviterer til drøfting
- **Forskningsdesign** er den overordnede planen for undersøkelsen
- **Operasjonalisering** gjør abstrakte begreper målbare
- Problemstillingstype og forskningsdesign henger tett sammen med metodevalg

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Problemstilling | Presist spørsmål som styrer undersøkelsen |
| Beskrivende | Kartlegger «hva» og «hvordan» |
| Forklarende | Søker «hvorfor» og årsaker |
| Vurderende | Drøfter «i hvilken grad» |
| Forskningsdesign | Overordnet plan for gjennomføring |
| Operasjonalisering | Å gjøre begreper målbare |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Datainnsamling og kilder
// ============================================================================

export const CHAPTER_KOMKULT3_8_2: TextbookChapter = {
  id: 'komkult3-8-2',
  courseId: 'komkult-3',
  chapterNumber: '8.2',
  title: 'Datainnsamling og kilder',
  description: 'Kvalitative og kvantitative metoder for datainnsamling. Du lærer om intervju, spørreskjema, observasjon og dokumentanalyse som verktøy i fordypningsprosjektet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke relevante forskningsmetoder og kildekritikk i eget arbeid',
    'planlegge og gjennomføre et selvstendig fordypningsprosjekt innen kommunikasjon og kultur',
  ],
  keyTerms: [
    { term: 'Kvalitativ metode', definition: 'Metoder som går i dybden på fenomener, ofte med tekst og tolkning som grunnlag' },
    { term: 'Kvantitativ metode', definition: 'Metoder som kartlegger utbredelse og mønstre, ofte med tall og statistikk som grunnlag' },
    { term: 'Intervju', definition: 'Samtale der forskeren stiller spørsmål for å få innsikt i informantens erfaringer og perspektiver' },
    { term: 'Spørreskjema', definition: 'Standardisert verktøy for å samle inn data fra mange respondenter samtidig' },
    { term: 'Observasjon', definition: 'Systematisk iakttakelse av hendelser, atferd eller kommunikasjon i en naturlig eller arrangert setting' },
    { term: 'Dokumentanalyse', definition: 'Systematisk gjennomgang og analyse av eksisterende tekster, bilder eller andre dokumenter' },
  ],
  content: [
    {
      id: 'kk3-8-2-intro',
      type: 'text',
      content: `## Å samle inn data

Når problemstillingen er på plass, er neste steg å velge metode for datainnsamling. Metoden er verktøyet du bruker for å finne svar. Ulike problemstillinger krever ulike verktøy, og valget mellom kvalitativ og kvantitativ tilnærming er grunnleggende.

I dette kapittelet skal du lære:
- Forskjellen mellom kvalitative og kvantitative metoder
- Hvordan gjennomføre intervju, spørreskjema og observasjon
- Hva dokumentanalyse innebærer
- Styrker og svakheter ved ulike metoder`,
    },
    {
      id: 'kk3-8-2-def-1',
      type: 'definition',
      title: 'Kvalitativ og kvantitativ metode',
      content: `**Kvalitativ metode** går i dybden på få tilfeller for å forstå mening, opplevelser og prosesser. Data er gjerne tekst fra intervjuer, observasjonsnotater eller dokumenter. Målet er forståelse og tolkning.

**Kvantitativ metode** kartlegger utbredelse og mønstre på tvers av mange tilfeller. Data er gjerne tall fra spørreskjemaer eller systematiske registreringer. Målet er å finne mønstre og generalisere.

| | Kvalitativ | Kvantitativ |
|---|---|---|
| Fokus | Dybde og mening | Bredde og mønstre |
| Data | Tekst, bilder, lyd | Tall og statistikk |
| Utvalg | Få, strategisk valgte | Mange, ofte tilfeldig valgte |
| Analyse | Tolkning og kategorisering | Statistisk bearbeidelse |
| Styrke | Rik forståelse | Generaliserbarhet |`,
    },
    {
      id: 'kk3-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Velge metode',
      problem: 'Du skal undersøke hvordan norske podkaster formidler nyheter. Hvilken metode passer best?',
      solution: `**Alternativ 1 – Kvalitativ innholdsanalyse:**
Velg ut 3–4 nyhetspodkaster og analyser et utvalg episoder i dybden. Fokuser på fortellerteknikk, kildebruk og språklig stil. Gir rik forståelse av formidlingsstrategier.

**Alternativ 2 – Kvantitativ innholdsanalyse:**
Kartlegg et stort antall episoder fra mange podkaster. Tell forekomster av bestemte temaer, virkemidler og formater. Gir oversikt over mønstre og trender.

**Vurdering:**
For å forstå *hvordan* noe formidles, egner kvalitativ analyse seg best. For å kartlegge *hvor ofte* bestemte trekk forekommer, passer kvantitativ analyse. En kombinasjon (mixed methods) gir det mest helhetlige bildet.`,
    },
    {
      id: 'kk3-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'Hvilken metode egner seg best når du vil forstå hvordan fem ungdommer opplever å bli fremstilt i lokale medier?',
        options: [
          { id: 'a', text: 'Kvantitativt spørreskjema med mange respondenter', isCorrect: false },
          { id: 'b', text: 'Kvalitativt dybdeintervju med de fem ungdommene', isCorrect: true },
          { id: 'c', text: 'Statistisk analyse av avisopplag', isCorrect: false },
          { id: 'd', text: 'Eksperiment med kontrollgruppe', isCorrect: false },
        ],
        solution: 'Når du vil forstå enkeltpersoners opplevelser i dybden, er kvalitativt dybdeintervju den beste metoden. Intervjuet gir rom for å utforske tanker, følelser og erfaringer som ikke lar seg fange i et standardisert spørreskjema. Med bare fem informanter er kvantitativ tilnærming uhensiktsmessig.',
      },
    },
    {
      id: 'kk3-8-2-def-2',
      type: 'definition',
      title: 'Intervju som metode',
      content: `Et **forskningsintervju** er en planlagt samtale der forskeren stiller spørsmål for å få innsikt i informantens erfaringer, holdninger og perspektiver.

**Intervjutyper:**
- **Strukturert intervju:** Faste spørsmål i fast rekkefølge. Alle informanter får samme spørsmål. Enklere å sammenligne svar.
- **Semistrukturert intervju:** Intervjuguide med hovedtemaer og forslag til spørsmål, men fleksibilitet til å følge opp interessante svar. Den vanligste formen.
- **Ustrukturert intervju:** Åpen samtale rundt et tema. Stor fleksibilitet, men vanskeligere å sammenligne svar.

**Tips for gode intervjuer:**
- Lag en gjennomtenkt intervjuguide
- Still åpne spørsmål som inviterer til utdyping
- Unngå ledende spørsmål
- Lytt aktivt og still oppfølgingsspørsmål
- Ta opp intervjuet (med samtykke) og transkriber etterpå`,
    },
    {
      id: 'kk3-8-2-text-1',
      type: 'text',
      content: `### Spørreskjema

Spørreskjema er et standardisert verktøy for å samle inn data fra mange respondenter. Det egner seg når du vil kartlegge holdninger, vaner eller erfaringer i en større gruppe.

**Spørsmålstyper:**
- **Lukkede spørsmål:** Faste svaralternativer (f.eks. Likert-skala fra 1–5). Enkle å analysere kvantitativt.
- **Åpne spørsmål:** Respondenten svarer fritt med egne ord. Gir rikere data, men vanskeligere å analysere.

**Fallgruver:**
- Ledende spørsmål som styrer svaret i en retning
- Tvetydige spørsmål som kan tolkes ulikt
- For langt skjema som gir frafall
- Skjevt utvalg som ikke representerer målgruppen

### Observasjon

Observasjon innebærer å systematisk iaktta hendelser, atferd eller kommunikasjon. Det er nyttig når du vil studere hva folk faktisk gjør, ikke bare hva de sier at de gjør.

**Observasjonstyper:**
- **Deltakende observasjon:** Forskeren deltar i situasjonen
- **Ikke-deltakende observasjon:** Forskeren observerer fra sidelinjen
- **Strukturert observasjon:** Forhåndsbestemt hva som skal registreres
- **Ustrukturert observasjon:** Åpen registrering av det som skjer`,
    },
    {
      id: 'kk3-8-2-example-2',
      type: 'example',
      title: 'Eksempel: Dokumentanalyse',
      problem: 'Du vil undersøke hvordan norske aviser dekket klimatoppmøtet COP28. Hvordan gjennomfører du en dokumentanalyse?',
      solution: `**Steg for dokumentanalyse:**

**1. Avgrens materialet:**
Velg tre riksaviser (f.eks. VG, Dagbladet, Aftenposten). Bestem tidsperiode (f.eks. to uker under og etter toppmøtet). Søk i mediearkiver etter relevante artikler.

**2. Utvikle analysekategorier:**
- Tema: Hvilke aspekter av klimatoppmøtet dekkes?
- Vinkling: Optimistisk, pessimistisk, nøytral?
- Kilder: Hvem siteres? Politikere, forskere, aktivister, næringslivet?
- Omfang: Hvor mye plass får saken?

**3. Gjennomfør analysen:**
Les artiklene systematisk og registrer funn i hver kategori. Bruk et analyseskjema for å sikre konsistens.

**4. Tolk funnene:**
Sammenlign avisene. Se etter mønstre: Er det forskjeller i vinkling? Dominerer bestemte kilder? Hva sier funnene om norsk mediedekning av klimaspørsmål?`,
    },
    {
      id: 'kk3-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        task: 'Du skal undersøke hvordan elever ved din skole bruker sosiale medier i skoletiden. Beskriv to ulike metoder du kunne brukt (én kvalitativ og én kvantitativ), og vurder styrker og svakheter ved hver metode.',
        hints: ['Tenk på hva du vil finne ut: omfang og mønstre, eller opplevelser og begrunnelser?'],
        solution: 'Kvalitativ metode: Semistrukturerte intervjuer med 6–8 elever om deres bruk av sosiale medier i skoletiden. Styrke: Gir dybdeinnsikt i motivasjon, opplevelser og kontekst. Svakhet: Kan ikke generalisere til alle elever, og informantene kan pynte på sannheten. Kvantitativ metode: Digitalt spørreskjema til hele trinnet med spørsmål om hyppighet, plattformer og formål. Styrke: Gir oversikt over mønstre og kan generaliseres. Svakhet: Fanger ikke opp nyanser, og respondentene kan underrapportere sosialt uønsket atferd.',
      },
    },
    {
      id: 'kk3-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-2-ex-3',
        number: '8.2.3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner et semistrukturert intervju?',
        options: [
          { id: 'a', text: 'Alle spørsmål er fastsatt på forhånd og stilles i fast rekkefølge', isCorrect: false },
          { id: 'b', text: 'Samtalen er helt åpen uten noen form for planlegging', isCorrect: false },
          { id: 'c', text: 'Det finnes en intervjuguide med hovedtemaer, men med fleksibilitet til å følge opp svarene', isCorrect: true },
          { id: 'd', text: 'Intervjuet gjennomføres skriftlig via e-post', isCorrect: false },
        ],
        solution: 'Et semistrukturert intervju har en intervjuguide med forhåndsbestemte temaer og forslag til spørsmål, men intervjueren har frihet til å stille oppfølgingsspørsmål og endre rekkefølge ut fra samtalen. Dette gir en balanse mellom struktur og fleksibilitet, og er den vanligste intervjuformen i kvalitativ forskning.',
      },
    },
    {
      id: 'kk3-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        task: 'Lag en kort intervjuguide (5–6 spørsmål) for et semistrukturert intervju om temaet «ungdom og nyhetsvaner». Begrunn hvorfor du har valgt nettopp disse spørsmålene.',
        hints: ['Begynn med åpne, generelle spørsmål og gå mot mer spesifikke'],
        solution: 'Eksempel: 1) Kan du fortelle om en vanlig dag – hvor og når får du med deg nyheter? (Åpent, kartleggende) 2) Hvilke plattformer eller kanaler bruker du mest til å følge nyheter? (Konkretiserer) 3) Hva gjør at du stopper opp og leser/ser en nyhetssak? (Utforsker motivasjon) 4) Hender det at du sjekker om en nyhet er sann? Hvordan i så fall? (Kildekritikk) 5) Opplever du at nyheter påvirker deg følelsesmessig? Kan du gi et eksempel? (Dybde) 6) Hvis du kunne endre noe med hvordan nyheter formidles til ungdom, hva ville det vært? (Refleksjon). Spørsmålene går fra det generelle til det spesifikke og dekker vaner, motivasjon, kildekritikk og refleksjon.',
      },
    },
    {
      id: 'kk3-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-2-ex-5',
        number: '8.2.5',
        type: 'multiple-choice',
        task: 'Hvilken fallgruve er mest problematisk i et spørreskjema?',
        options: [
          { id: 'a', text: 'At spørreskjemaet er digitalt og ikke på papir', isCorrect: false },
          { id: 'b', text: 'At spørsmålene er ledende og styrer respondentens svar', isCorrect: true },
          { id: 'c', text: 'At spørreskjemaet er anonymt', isCorrect: false },
          { id: 'd', text: 'At det inneholder både lukkede og åpne spørsmål', isCorrect: false },
        ],
        solution: 'Ledende spørsmål er den mest alvorlige fallgruven fordi de systematisk styrer svarene i en bestemt retning, noe som gjør dataene upålitelige. For eksempel er «Er du ikke enig i at sosiale medier er skadelige?» et ledende spørsmål. Et nøytralt alternativ ville vært «Hva tenker du om sosiale mediers påvirkning?» Anonymitet og blanding av spørsmålstyper er derimot gode praksiser.',
      },
    },
    {
      id: 'kk3-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kvalitative metoder** gir dybdeforståelse, **kvantitative metoder** gir bredde og oversikt
- **Intervju** (strukturert, semistrukturert, ustrukturert) gir innsikt i opplevelser og perspektiver
- **Spørreskjema** egner seg for å kartlegge holdninger og mønstre i større grupper
- **Observasjon** avdekker hva folk faktisk gjør i praksis
- **Dokumentanalyse** er systematisk analyse av eksisterende tekster og medieinnhold
- Metodevalg må begrunnes ut fra problemstillingen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kvalitativ metode | Dybde, tolkning, få informanter |
| Kvantitativ metode | Bredde, tall, mange respondenter |
| Semistrukturert intervju | Intervjuguide med fleksibilitet |
| Dokumentanalyse | Systematisk analyse av tekster |
| Ledende spørsmål | Spørsmål som styrer svaret |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Analyse og tolkning
// ============================================================================

export const CHAPTER_KOMKULT3_8_3: TextbookChapter = {
  id: 'komkult3-8-3',
  courseId: 'komkult-3',
  chapterNumber: '8.3',
  title: 'Analyse og tolkning',
  description: 'Analysemetoder for kvalitative data: koding, kategorisering, tematisk analyse, diskursanalyse og semiotisk analyse. Du lærer å bearbeide og tolke data systematisk.',
  estimatedMinutes: 24,
  competenceGoals: [
    'bruke relevante forskningsmetoder og kildekritikk i eget arbeid',
    'analysere kulturelle uttrykk ved hjelp av ulike teoretiske perspektiver',
  ],
  keyTerms: [
    { term: 'Koding', definition: 'Å merke datamaterialet med stikkord eller koder som fanger innholdet i en tekstpassasje' },
    { term: 'Kategorisering', definition: 'Å samle beslektede koder i overordnede kategorier for å finne mønstre' },
    { term: 'Tematisk analyse', definition: 'Analysemetode som identifiserer, organiserer og rapporterer mønstre (temaer) i datamaterialet' },
    { term: 'Diskursanalyse', definition: 'Analyse av hvordan språkbruk former vår forståelse av virkeligheten og skaper maktforhold' },
    { term: 'Semiotisk analyse', definition: 'Analyse av tegn og tegnssystemer – hvordan mening skapes gjennom tekst, bilder og symboler' },
    { term: 'Denotasjon', definition: 'Den bokstavelige, direkte betydningen av et tegn' },
  ],
  content: [
    {
      id: 'kk3-8-3-intro',
      type: 'text',
      content: `## Fra data til innsikt

Etter datainnsamlingen sitter du med råmateriale – intervjutranskripsjoner, spørreskjemasvar, observasjonsnotater eller tekster. Nå begynner det viktigste arbeidet: å analysere og tolke materialet systematisk for å finne svar på problemstillingen.

I dette kapittelet skal du lære:
- Hvordan du koder og kategoriserer kvalitative data
- Hva tematisk analyse innebærer og hvordan den gjennomføres
- Grunnprinsippene i diskursanalyse
- Hvordan semiotisk analyse fungerer
- Forskjellen mellom beskrivelse, tolkning og drøfting`,
    },
    {
      id: 'kk3-8-3-def-1',
      type: 'definition',
      title: 'Koding og kategorisering',
      content: `**Koding** er det første steget i kvalitativ analyse. Du leser gjennom datamaterialet og merker tekstpassasjer med koder – korte stikkord som fanger essensen i det som sies.

**Eksempel på koding av intervjuutdrag:**
«Jeg bruker TikTok mest for underholdning, men noen ganger dukker det opp nyheter også.»
→ Koder: *underholdning*, *nyheter*, *tilfeldig eksponering*

**Kategorisering** er neste steg: du samler beslektede koder i overordnede kategorier.
→ Kategori: *Mediebruksmønstre* (inneholder kodene underholdning, nyheter, tilfeldig eksponering, bevisst søk, etc.)

Gjennom koding og kategorisering reduserer du et stort datamateriale til håndterbare mønstre uten å miste viktig informasjon.`,
    },
    {
      id: 'kk3-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Tematisk analyse',
      problem: 'Du har intervjuet seks ungdommer om deres forhold til norsk og engelsk språk i hverdagen. Hvordan gjennomfører du en tematisk analyse?',
      solution: `**Steg 1 – Bli kjent med materialet:**
Les gjennom alle transkripsjoner flere ganger. Noter førsteinntrykk og foreløpige ideer.

**Steg 2 – Koding:**
Gå systematisk gjennom materialet og merk interessante utsagn med koder:
- «Jeg tenker ofte på engelsk» → *engelsk tankegang*
- «Norsk føles mer ekte» → *autentisitet, norsk*
- «Med venner bytter vi hele tiden» → *kodeveksling*

**Steg 3 – Identifiser temaer:**
Samle kodene i overordnede temaer:
- *Språklig identitet* (autentisitet, tilhørighet, morsmål)
- *Kodeveksling i hverdagen* (kontekstavhengig skifte, sosiale normer)
- *Mediepåvirkning* (engelsk dominans, streaming, musikk)

**Steg 4 – Rapporter:**
Presenter hvert tema med beskrivelse, eksempler fra materialet og tolkning i lys av teori.`,
    },
    {
      id: 'kk3-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Hva er det første steget i en tematisk analyse?',
        options: [
          { id: 'a', text: 'Formulere konklusjonen', isCorrect: false },
          { id: 'b', text: 'Bli kjent med datamaterialet gjennom gjentatt lesing', isCorrect: true },
          { id: 'c', text: 'Lage kategorier basert på teori', isCorrect: false },
          { id: 'd', text: 'Skrive sammendraget', isCorrect: false },
        ],
        solution: 'Det første steget er å bli grundig kjent med datamaterialet ved å lese gjennom det flere ganger. Dette gir et helhetsbilde og danner grunnlaget for kodingen som følger. Å hoppe rett til kategorisering eller konklusjon uten å ha god kjennskap til materialet fører til overfladisk analyse.',
      },
    },
    {
      id: 'kk3-8-3-def-2',
      type: 'definition',
      title: 'Diskursanalyse',
      content: `**Diskursanalyse** undersøker hvordan språkbruk former vår forståelse av virkeligheten. En diskurs er en bestemt måte å snakke om og forstå verden på. Diskurser er ikke nøytrale – de skaper maktforhold og bestemmer hva som anses som «normalt» eller «sant».

**Sentrale spørsmål i diskursanalyse:**
- Hvilke begreper og metaforer brukes?
- Hva tas for gitt, og hva problematiseres?
- Hvem får komme til orde, og hvem blir tause?
- Hvilke virkelighetsbilder konstrueres?
- Hvordan legitimeres bestemte synspunkter?

**Eksempel:**
Når medier omtaler innvandring som en «strøm» eller «bølge», brukes naturkatastrofemetaforer som fremstiller innvandrere som en trussel. Dette er et eksempel på hvordan språkvalg former oppfatninger.`,
    },
    {
      id: 'kk3-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Semiotisk analyse',
      problem: 'Analyser en valgplakat for et fiktivt politisk parti som viser en soloppgang over en norsk fjord med teksten «En ny dag for Norge».',
      solution: `**Denotasjon (det bokstavelige):**
Bildet viser en soloppgang over en fjord med fjell. Teksten sier «En ny dag for Norge».

**Konnotasjon (de kulturelle assosiasjonene):**
- *Soloppgang:* Ny begynnelse, håp, optimisme, lys etter mørke
- *Norsk fjord:* Nasjonal identitet, naturlig skjønnhet, tradisjoner
- *«En ny dag»:* Forandring, brudd med fortiden, lovnader om noe bedre

**Myter og ideologi:**
Plakaten spiller på myten om Norge som naturnasjon og knytter partiets politikk til nasjonale verdier. Soloppgangsmetaforen antyder at nåværende styring representerer «mørke» og at partiet bringer «lys». Det er en kraftig, men implisitt kritikk av sittende regjering.

**Semiotisk analyse** avdekker slik hvordan tegn (bilder, ord, symboler) jobber sammen for å skape mening utover det bokstavelige.`,
    },
    {
      id: 'kk3-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        task: 'Velg en reklame du har sett nylig (trykt, digital eller TV). Gjennomfør en kort semiotisk analyse der du skiller mellom denotasjon (det bokstavelige) og konnotasjon (de kulturelle assosiasjonene). Hva forsøker reklamen å kommunisere utover selve produktet?',
        hints: ['Beskriv først hva du bokstavelig ser og hører, deretter hva det symboliserer'],
        solution: 'Eksempel med bilreklame: Denotasjon – en bil kjører gjennom et dramatisk fjellandskap i solnedgang. Konnotasjon – frihet, eventyr, kontroll over naturen, maskulinitet, suksess. Reklamen selger ikke bare en bil, men en livsstil og identitet. Kjøperen skal assosiere seg med de positive verdiene landskapet og situasjonen representerer. Semiotisk analyse avdekker hvordan reklame bruker kulturelle koder for å skape begjær.',
      },
    },
    {
      id: 'kk3-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-3-ex-3',
        number: '8.3.3',
        type: 'multiple-choice',
        task: 'Hva undersøker diskursanalyse primært?',
        options: [
          { id: 'a', text: 'Grammatiske feil i tekster', isCorrect: false },
          { id: 'b', text: 'Hvordan språkbruk former vår forståelse av virkeligheten og skaper maktforhold', isCorrect: true },
          { id: 'c', text: 'Hvor mange ord en tekst inneholder', isCorrect: false },
          { id: 'd', text: 'Forfatterens intensjon bak teksten', isCorrect: false },
        ],
        solution: 'Diskursanalyse undersøker hvordan språkbruk former virkelighetsforståelse og maktforhold. Det handler ikke om grammatikk eller ordtelling, men om hva språkvalgene gjør – hvilke virkelighetsbilder de skaper, hvem som får definisjonsmakt, og hva som presenteres som normalt eller avvikende.',
      },
    },
    {
      id: 'kk3-8-3-text-1',
      type: 'text',
      content: `### Fra beskrivelse til tolkning

En vanlig feil i fordypningsprosjekter er å stoppe ved beskrivelsen. God analyse krever at du også tolker og drøfter funnene.

**Tre analysenivåer:**

1. **Beskrivelse:** Hva fant du? Presenter data og mønstre. *«Fire av seks informanter oppgir at de får mesteparten av nyhetene sine fra sosiale medier.»*

2. **Tolkning:** Hva betyr funnene? Sett dem i sammenheng med teori. *«Dette kan forstås i lys av begrepet tilfeldig eksponering – ungdommene oppsøker ikke nyheter bevisst, men eksponeres for dem gjennom algoritmestyrte feeder.»*

3. **Drøfting:** Hva er implikasjonene? Diskuter funnene kritisk. *«Hvis nyhetskonsumet i stor grad er algoritmestyrt, reiser dette spørsmål om informasjonsmangfold og ekkokamre. Samtidig kan det demokratisere tilgangen til nyheter for ungdom som ellers ikke ville oppsøkt dem.»*`,
    },
    {
      id: 'kk3-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        task: 'Les følgende intervjuutsagn og foreslå tre koder: «Jeg ser alltid på kommentarfeltet før jeg leser artikkelen. Hvis folk er enige om at det er tull, gidder jeg ikke lese mer. Men hvis det er stor uenighet, da vil jeg vite mer.»',
        hints: ['Tenk på hva utsagnet handler om på et overordnet nivå'],
        solution: 'Mulige koder: 1) *kommentarfelt som filter* – informanten bruker andres reaksjoner til å vurdere om innholdet er verdt å lese. 2) *sosial validering* – andre menneskers meninger styrer leseatferden. 3) *uenighet som interesse-trigger* – konflikt og debatt øker nysgjerrigheten. Disse kodene kunne samles i en overordnet kategori som «andres påvirkning på mediekonsum» eller «sosiale strategier for nyhetsnavigasjon».',
      },
    },
    {
      id: 'kk3-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-3-ex-5',
        number: '8.3.5',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom denotasjon og konnotasjon i semiotisk analyse?',
        options: [
          { id: 'a', text: 'Denotasjon er den kulturelle assosiasjonen, konnotasjon er den bokstavelige betydningen', isCorrect: false },
          { id: 'b', text: 'Denotasjon er den bokstavelige betydningen, konnotasjon er de kulturelle assosiasjonene', isCorrect: true },
          { id: 'c', text: 'De betyr det samme, men brukes i ulike fagtradisjoner', isCorrect: false },
          { id: 'd', text: 'Denotasjon handler om bilder, konnotasjon handler om tekst', isCorrect: false },
        ],
        solution: 'Denotasjon er den bokstavelige, direkte betydningen av et tegn – det du faktisk ser eller leser. Konnotasjon er de kulturelle assosiasjonene tegnet vekker. En rød rose denoterer en blomst (bokstavelig), men konnoterer kjærlighet og romantikk (kulturell assosiasjon). Begge nivåene brukes på alle typer tegn, både bilder og tekst.',
      },
    },
    {
      id: 'kk3-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Koding** og **kategorisering** er grunnleggende teknikker for å bearbeide kvalitative data
- **Tematisk analyse** identifiserer mønstre og temaer i datamaterialet
- **Diskursanalyse** avdekker hvordan språk former virkelighetsforståelse og maktforhold
- **Semiotisk analyse** undersøker hvordan tegn skaper mening gjennom denotasjon og konnotasjon
- God analyse beveger seg fra beskrivelse via tolkning til drøfting

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Koding | Merke data med stikkord som fanger innholdet |
| Kategorisering | Samle koder i overordnede kategorier |
| Tematisk analyse | Finne mønstre og temaer i materialet |
| Diskursanalyse | Undersøke hvordan språk former virkeligheten |
| Denotasjon | Bokstavelig betydning |
| Konnotasjon | Kulturelle assosiasjoner |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Fagskriving og akademisk stil
// ============================================================================

export const CHAPTER_KOMKULT3_8_4: TextbookChapter = {
  id: 'komkult3-8-4',
  courseId: 'komkult-3',
  chapterNumber: '8.4',
  title: 'Fagskriving og akademisk stil',
  description: 'Struktur, kildehenvisning og akademisk språk i fordypningsprosjektet. Du lærer om IMRAD-strukturen, APA-stil, akademisk redelighet og hvordan du skriver presist og argumenterende.',
  estimatedMinutes: 20,
  competenceGoals: [
    'presentere og formidle faglig innhold skriftlig og muntlig med akademisk presisjon',
    'bruke relevante forskningsmetoder og kildekritikk i eget arbeid',
  ],
  keyTerms: [
    { term: 'IMRAD', definition: 'Strukturmodell for faglige tekster: Introduksjon, Metode, Resultater og Diskusjon' },
    { term: 'Kildehenvisning', definition: 'Systematisk referanse til kilder som er brukt i teksten, for å gi kreditering og etterprøvbarhet' },
    { term: 'APA-stil', definition: 'Et mye brukt referansesystem utviklet av American Psychological Association' },
    { term: 'Akademisk redelighet', definition: 'Å være ærlig om egne og andres bidrag, unngå plagiat og forfalskning' },
    { term: 'Plagiat', definition: 'Å presentere andres arbeid eller ideer som sine egne uten tilstrekkelig kildehenvisning' },
    { term: 'Parafrasering', definition: 'Å gjengi andres ideer med egne ord, med tydelig kildehenvisning' },
  ],
  content: [
    {
      id: 'kk3-8-4-intro',
      type: 'text',
      content: `## Å skrive faglig

Et fordypningsprosjekt er en faglig tekst som stiller krav til struktur, språk og kildebruk. Akademisk skriving skiller seg fra dagligdags skriving ved å være presis, systematisk og etterprøvbar. Det handler ikke om å skrive vanskelig, men om å skrive klart og begrunnet.

I dette kapittelet skal du lære:
- Hvordan IMRAD-strukturen organiserer en faglig tekst
- Regler for kildehenvisning og referanselister
- Hva akademisk redelighet innebærer
- Kjennetegn på godt akademisk språk`,
    },
    {
      id: 'kk3-8-4-def-1',
      type: 'definition',
      title: 'IMRAD-strukturen',
      content: `**IMRAD** er en standardstruktur for faglige og vitenskapelige tekster. Bokstavene står for:

**I – Introduksjon (Innledning):**
Presenterer tema, problemstilling og bakgrunn. Forklarer hvorfor temaet er relevant og hva du vil undersøke. Gir en oversikt over oppgavens struktur.

**M – Metode:**
Beskriver hvordan du har gjennomført undersøkelsen. Hvilke metoder brukte du, og hvorfor? Hvem/hva undersøkte du? Gjør det mulig for andre å vurdere og eventuelt gjenta undersøkelsen.

**R – Resultater:**
Presenterer funnene dine systematisk og objektivt. Her beskriver du hva du fant, uten å tolke for mye. Bruk gjerne tabeller, figurer eller sitater.

**A/D – Analyse og Diskusjon:**
Tolker og drøfter funnene i lys av teori og tidligere forskning. Hva betyr funnene? Hva er styrker og svakheter ved undersøkelsen? Hva kan konklusjonen bli?

I tillegg har teksten gjerne et **sammendrag** (abstract), en **litteraturliste** og eventuelt **vedlegg**.`,
    },
    {
      id: 'kk3-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Oppbygging av et fordypningsprosjekt',
      problem: 'Hvordan kan et fordypningsprosjekt om «Klimakommunikasjon i sosiale medier» struktureres etter IMRAD?',
      solution: `**Introduksjon:**
- Bakgrunn: Klimakrisen og sosiale mediers rolle i offentlig debatt
- Problemstilling: «Hvilke retoriske strategier brukes i klimakommunikasjon på norske Instagram-kontoer?»
- Avgrensning: Tre utvalgte kontoer, perioden januar–mars 2025
- Begrepsavklaring: Retorikk, klimakommunikasjon

**Metode:**
- Kvalitativ innholdsanalyse av 30 Instagram-innlegg (10 per konto)
- Utvalg og begrunnelse for valg av kontoer
- Analysekategorier: Etos, patos, logos, visuell retorikk

**Resultater:**
- Presentasjon av funn: Hvilke strategier dominerer?
- Eksempler fra materialet med sitater og billedbeskrivelser
- Tabelloversikt over forekomst av ulike strategier

**Diskusjon:**
- Tolkning: Hvorfor dominerer patosappeller?
- Kobling til teori om retorikk og mediekommunikasjon
- Styrker og svakheter ved egen undersøkelse
- Konklusjon og forslag til videre forskning`,
    },
    {
      id: 'kk3-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'Hva står bokstavene i IMRAD for?',
        options: [
          { id: 'a', text: 'Informasjon, Mål, Resultat, Avslutning, Drøfting', isCorrect: false },
          { id: 'b', text: 'Introduksjon, Metode, Resultater, Analyse/Diskusjon', isCorrect: true },
          { id: 'c', text: 'Innledning, Materiale, Referanser, Argumentasjon, Dokumentasjon', isCorrect: false },
          { id: 'd', text: 'Idé, Metode, Research, Analyse, Data', isCorrect: false },
        ],
        solution: 'IMRAD står for Introduksjon, Metode, Resultater og Analyse/Diskusjon (noen bruker bare D for Diskusjon). Dette er en internasjonal standardstruktur for vitenskapelige og faglige tekster som gjør det lettere for leseren å finne informasjonen de trenger.',
      },
    },
    {
      id: 'kk3-8-4-def-2',
      type: 'definition',
      title: 'Kildehenvisning og referanser',
      content: `**Kildehenvisning** betyr å vise hvor informasjonen i teksten din kommer fra. Det er nødvendig for etterprøvbarhet, for å gi kreditering, og for å unngå plagiat.

**APA-stil (7. utgave) – de viktigste reglene:**

**I teksten:**
- Én forfatter: (Hansen, 2023)
- To forfattere: (Hansen & Johansen, 2023)
- Tre eller flere: (Hansen et al., 2023)
- Direkte sitat: (Hansen, 2023, s. 45)

**I referanselisten:**
- Bok: Hansen, A. (2023). *Mediekultur i Norge*. Universitetsforlaget.
- Artikkel: Johansen, B. (2024). Ungdom og nyheter. *Norsk medietidsskrift*, 31(2), 15–28.
- Nettside: NRK. (2024, 15. mars). *Klimatoppmøte i Dubai*. https://www.nrk.no/...

**Parafrasering vs. direkte sitat:**
- Parafrasering: Gjengi innholdet med egne ord, med kildehenvisning
- Direkte sitat: Bruk ordrett tekst i anførselstegn, med sidetall`,
    },
    {
      id: 'kk3-8-4-text-1',
      type: 'text',
      content: `### Akademisk redelighet

Akademisk redelighet er grunnmuren i all faglig virksomhet. Det handler om ærlighet, etterrettelighet og respekt for andres arbeid.

**Plagiat – den alvorligste formen for uredelighet:**
- Å kopiere tekst uten kildehenvisning
- Å parafrasere uten å oppgi kilde
- Å bruke andres ideer som om de var dine egne
- Å kjøpe eller la andre skrive teksten for deg

**Hvordan unngå plagiat:**
- Noter alltid kildene dine underveis
- Marker tydelig hva som er andres ideer og hva som er dine egne analyser
- Bruk anførselstegn ved direkte sitater
- Parafrasér med egne ord og oppgi kilde
- Bruk plagiatkontrollverktøy

### Akademisk språk

Faglig skriving har bestemte kjennetegn som skiller den fra hverdagsspråk:

- **Presisjon:** Bruk fagbegreper korrekt og definer dem
- **Objektivitet:** Unngå personlige synspunkter uten begrunnelse. Skriv «Analysen viser at...» fremfor «Jeg synes at...»
- **Nøkternhet:** Unngå overdrivelser og følelsesladde uttrykk
- **Belegg:** Påstander skal underbygges med referanser eller data
- **Struktur:** Klare avsnitt med temasetninger og logisk oppbygging`,
    },
    {
      id: 'kk3-8-4-example-2',
      type: 'example',
      title: 'Eksempel: Fra hverdagsspråk til akademisk stil',
      problem: 'Omskriv denne setningen til akademisk stil: «Alle ungdommer er jo avhengige av sosiale medier, og det er kjempeskadelig for dem.»',
      solution: `**Hverdagsspråk:**
«Alle ungdommer er jo avhengige av sosiale medier, og det er kjempeskadelig for dem.»

**Problemer:**
- «Alle» – udokumentert generalisering
- «jo» – antyder at det er opplagt, uten belegg
- «avhengige» – upresist brukt
- «kjempeskadelig» – følelsesladd og udokumentert

**Akademisk versjon:**
«Flere studier indikerer at høyt forbruk av sosiale medier kan ha negative konsekvenser for ungdommers psykiske helse (Twenge, 2017; Orben & Przybylski, 2019). Samtidig er det viktig å nyansere: ikke all bruk er problematisk, og sammenhengen mellom skjermtid og psykisk helse er mer kompleks enn populærdebatten ofte gir inntrykk av (Odgers & Jensen, 2020).»

**Forbedringer:**
- Nyansert i stedet for generaliserende
- Kildehenvist i stedet for påstått
- Fagbegreper i stedet for hverdagsord
- Åpner for kompleksitet`,
    },
    {
      id: 'kk3-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        task: 'Skriv en korrekt APA-referanse for en bok av Helene Uri med tittelen «Hvem sa hva? Kvinner, menn og språk», utgitt av Gyldendal i 2018. Vis også hvordan du ville henvist til boken i en løpende tekst.',
        hints: ['Husk rekkefølgen: Etternavn, Initial. (År). *Tittel*. Forlag.'],
        solution: 'Referanseliste: Uri, H. (2018). *Hvem sa hva? Kvinner, menn og språk*. Gyldendal. I teksten: Ifølge Uri (2018) er det betydelige forskjeller i hvordan menn og kvinner bruker språk. Alternativt: Forskning viser at kjønn påvirker språkbruk på flere nivåer (Uri, 2018).',
      },
    },
    {
      id: 'kk3-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-4-ex-3',
        number: '8.4.3',
        type: 'multiple-choice',
        task: 'Hvilken av disse setningene er et eksempel på plagiat?',
        options: [
          { id: 'a', text: 'Ifølge Hansen (2023, s. 42) er «mediekulturen i stadig endring».', isCorrect: false },
          { id: 'b', text: 'Hansen (2023) argumenterer for at mediekulturen er i stadig endring.', isCorrect: false },
          { id: 'c', text: 'Mediekulturen er i stadig endring, og dette påvirker hvordan vi kommuniserer.', isCorrect: true },
          { id: 'd', text: 'Flere forskere peker på at mediekulturen er i endring (Hansen, 2023; Johansen, 2022).', isCorrect: false },
        ],
        solution: 'Alternativ c er plagiat fordi det presenterer en påstand som bygger på andres forskning uten kildehenvisning. Selv om setningen er omformulert, stammer ideen fra en kilde som ikke krediteres. De andre alternativene viser korrekt bruk av direkte sitat (a), parafrasering med kilde (b) og henvisning til flere kilder (d).',
      },
    },
    {
      id: 'kk3-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Omskriv denne teksten til akademisk stil: «Reklame er overalt og ungdom blir hele tiden lurt til å kjøpe ting de ikke trenger. Det er mega problematisk og noe burde gjøres med det.»',
        hints: ['Tenk på presisjon, nøkternhet, kildebruk og nyansering'],
        solution: 'Eksempel på akademisk versjon: «Ungdom eksponeres for et stort omfang av reklame gjennom digitale kanaler (Medietilsynet, 2023). Forskning tyder på at målrettet reklame kan påvirke forbruksmønstre blant unge (Nairn & Fine, 2008), noe som reiser spørsmål om forbrukervern og regulering av markedsføring rettet mot mindreårige. Problematikken er imidlertid sammensatt, ettersom ungdom også kan utvikle kritisk reklamelitterasitet.» Forbedringer: fjernet «mega», nyansert «hele tiden lurt», lagt til kildehenvisning, formulert akademisk.',
      },
    },
    {
      id: 'kk3-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-4-ex-5',
        number: '8.4.5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner godt akademisk språk?',
        options: [
          { id: 'a', text: 'Lange, kompliserte setninger med mange fagord', isCorrect: false },
          { id: 'b', text: 'Presist, nøkternt og begrunnet språk med kildehenvisninger', isCorrect: true },
          { id: 'c', text: 'Personlige meninger fremstilt med sterke følelsesuttrykk', isCorrect: false },
          { id: 'd', text: 'Uformelt språk som er lett å lese', isCorrect: false },
        ],
        solution: 'Godt akademisk språk er presist, nøkternt og begrunnet. Det bruker fagbegreper korrekt, underbygger påstander med kilder, og unngår generaliseringer og følelsesladde uttrykk. Det betyr ikke at språket skal være unødvendig komplisert – tvert imot er klarhet en dyd. Målet er at leseren skal forstå nøyaktig hva du mener og hvorfor.',
      },
    },
    {
      id: 'kk3-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **IMRAD** (Introduksjon, Metode, Resultater, Analyse/Diskusjon) gir struktur til faglige tekster
- **Kildehenvisning** etter APA-stil sikrer etterprøvbarhet og kreditering
- **Akademisk redelighet** innebærer ærlighet om egne og andres bidrag
- **Plagiat** er å presentere andres arbeid som sitt eget
- **Akademisk språk** er presist, nøkternt, begrunnet og kildebasert

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| IMRAD | Introduksjon, Metode, Resultater, Diskusjon |
| APA-stil | Referansesystem for kildehenvisninger |
| Plagiat | Å bruke andres arbeid uten kildehenvisning |
| Parafrasering | Å gjengi med egne ord, med kilde |
| Akademisk redelighet | Ærlighet i faglig arbeid |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Presentasjon og formidling
// ============================================================================

export const CHAPTER_KOMKULT3_8_5: TextbookChapter = {
  id: 'komkult3-8-5',
  courseId: 'komkult-3',
  chapterNumber: '8.5',
  title: 'Presentasjon og formidling',
  description: 'Ulike formidlingsformer for fordypningsprosjektet: muntlig presentasjon, poster, digital formidling og populærvitenskapelig skriving. Du lærer å tilpasse formidlingen til målgruppe og formål.',
  estimatedMinutes: 18,
  competenceGoals: [
    'presentere og formidle faglig innhold skriftlig og muntlig med akademisk presisjon',
    'planlegge og gjennomføre et selvstendig fordypningsprosjekt innen kommunikasjon og kultur',
  ],
  keyTerms: [
    { term: 'Muntlig presentasjon', definition: 'Formidling av faglig innhold gjennom tale, gjerne med visuelle hjelpemidler' },
    { term: 'Forskningsposter', definition: 'Visuell oppsummering av et forskningsprosjekt i plakatformat, designet for å kommunisere hovedfunn raskt' },
    { term: 'Populærvitenskapelig formidling', definition: 'Å gjøre faglig innhold tilgjengelig og forståelig for et bredt publikum' },
    { term: 'Digital formidling', definition: 'Å bruke digitale plattformer og verktøy til å presentere faglig innhold' },
    { term: 'Retorisk bevissthet', definition: 'Å tilpasse budskap, stil og virkemidler til situasjon, formål og publikum' },
  ],
  content: [
    {
      id: 'kk3-8-5-intro',
      type: 'text',
      content: `## Å formidle det du har funnet

Et fordypningsprosjekt er ikke ferdig før funnene er formidlet. Formidling handler om å gjøre arbeidet ditt tilgjengelig for andre – enten det er medelever, lærere eller et bredere publikum. God formidling krever at du tilpasser budskapet til mottakeren.

I dette kapittelet skal du lære:
- Hvordan du bygger opp en god muntlig presentasjon
- Hva en forskningsposter er og hvordan den lages
- Muligheter for digital formidling
- Prinsipper for populærvitenskapelig skriving`,
    },
    {
      id: 'kk3-8-5-def-1',
      type: 'definition',
      title: 'Muntlig presentasjon',
      content: `En **muntlig presentasjon** av et fordypningsprosjekt er en strukturert fremføring der du formidler problemstilling, metode, funn og konklusjon for et publikum.

**Kjennetegn på en god faglig presentasjon:**
- **Klar struktur:** Innledning med problemstilling, hoveddel med metode og funn, avslutning med konklusjon
- **Tilpasset publikum:** Forklar fagbegreper, bruk eksempler publikum kan relatere til
- **Visuell støtte:** Lysbilder som støtter (ikke erstatter) det du sier – lite tekst, gode bilder og figurer
- **Engasjement:** Blikkontakt, variasjon i stemmen, konkrete eksempler
- **Tidsdisiplin:** Hold deg innenfor tidsrammen

**Vanlige feil:**
- Lese fra manus eller lysbilder
- For mye tekst på lysbildene
- Mangle rød tråd
- Gå over tiden`,
    },
    {
      id: 'kk3-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Strukturere en 10-minutters presentasjon',
      problem: 'Du skal presentere fordypningsprosjektet ditt om «Representasjon av kjønn i norske bildebøker» på 10 minutter. Hvordan disponerer du tiden?',
      solution: `**Tidsplan for 10 minutter:**

**Innledning (2 min):**
- Engasjerende åpning: Vis et bilde fra en typisk bildebok og still et spørsmål til publikum
- Presenter problemstillingen
- Kort om hvorfor temaet er viktig

**Metode (1,5 min):**
- Hvilke bildebøker ble analysert og hvorfor
- Semiotisk analyse som verktøy (forklar kort)

**Hovedfunn (4 min):**
- Funn 1: Kjønnsroller i hovedpersonene (vis eksempler)
- Funn 2: Visuell fremstilling av gutter vs. jenter (vis bilder)
- Funn 3: Endringer over tid

**Diskusjon og konklusjon (2 min):**
- Hva betyr funnene?
- Kobling til teori om representasjon
- Begrensninger ved undersøkelsen

**Avslutning (0,5 min):**
- Oppsummeringspunkt
- Åpne for spørsmål`,
    },
    {
      id: 'kk3-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste funksjonen til lysbilder i en faglig presentasjon?',
        options: [
          { id: 'a', text: 'Å inneholde all teksten du skal si, som en sikkerhet', isCorrect: false },
          { id: 'b', text: 'Å støtte og forsterke det du sier muntlig, med visuelle elementer', isCorrect: true },
          { id: 'c', text: 'Å imponere publikum med flotte animasjoner og effekter', isCorrect: false },
          { id: 'd', text: 'Å erstatte den muntlige fremføringen slik at du ikke trenger å si så mye', isCorrect: false },
        ],
        solution: 'Lysbilder skal støtte og forsterke det du sier muntlig, ikke erstatte det. Gode lysbilder inneholder lite tekst og bruker bilder, figurer eller nøkkelord som hjelper publikum å følge med. Hvis lysbildene inneholder all teksten, vil publikum lese i stedet for å lytte, og presentasjonen mister sitt muntlige preg.',
      },
    },
    {
      id: 'kk3-8-5-def-2',
      type: 'definition',
      title: 'Forskningsposter',
      content: `En **forskningsposter** (akademisk poster) er en visuell oppsummering av et forskningsprosjekt i plakatformat. Den er designet for å kommunisere hovedpunkter raskt og effektivt.

**Typisk innhold på en poster:**
- **Tittel:** Kort og informativ
- **Problemstilling:** Tydelig formulert
- **Metode:** Kort beskrevet
- **Hovedfunn:** Visuelt fremstilt med figurer, tabeller eller bilder
- **Konklusjon:** Kort og poengtert
- **Referanser:** De viktigste kildene

**Designprinsipper:**
- Hierarki: Viktigst informasjon mest fremtredende
- Lesbarhet: Stor nok skrift, god kontrast
- Visuell balanse: Ikke for mye tekst, ikke for mye tomrom
- Logisk leseretning: Fra venstre til høyre, ovenfra og ned`,
    },
    {
      id: 'kk3-8-5-text-1',
      type: 'text',
      content: `### Digital formidling

I dag finnes mange digitale muligheter for å formidle faglig innhold ut over den tradisjonelle skriftlige oppgaven og muntlige presentasjonen.

**Digitale formidlingsformer:**
- **Blogginnlegg eller nettartikkel:** Tilgjengelig format for et bredt publikum
- **Podkast:** Formidling gjennom samtale eller monolog
- **Video/dokumentar:** Visuell formidling med intervjuer, grafikk og fortelling
- **Infografikk:** Visuell fremstilling av data og sammenhenger
- **Interaktiv nettside:** Digital presentasjon med klikkbare elementer

**Fordeler med digital formidling:**
- Når et bredere publikum enn en klasseromspresentasjon
- Kan kombinere tekst, bilde, lyd og video (multimodalitet)
- Kan oppdateres og deles enkelt
- Gir erfaring med digitale verktøy og medieproduksjon

### Populærvitenskapelig formidling

Populærvitenskapelig formidling handler om å gjøre faglig kunnskap forståelig og engasjerende for et bredt publikum som ikke nødvendigvis har faglig bakgrunn.

**Kjennetegn:**
- Unngår eller forklarer fagterminologi
- Bruker konkrete eksempler og fortellinger
- Har en engasjerende inngang (vinkling, spørsmål, overraskende funn)
- Forenkling uten forfalskning – gjør det enkelt, men ikke feil
- Fokuserer på det som er relevant og interessant for leseren`,
    },
    {
      id: 'kk3-8-5-example-2',
      type: 'example',
      title: 'Eksempel: Fra akademisk til populærvitenskapelig tekst',
      problem: 'Gjør dette akademiske sammendraget populærvitenskapelig: «Studien undersøker ungdommers digitale nyhetskonsum gjennom kvalitative intervjuer med 12 informanter i alderen 16–18 år. Funnene indikerer at algoritmisk kurasjon i betydelig grad medierer ungdommers nyhetseksponering.»',
      solution: `**Populærvitenskapelig versjon:**

«Visste du at de fleste ungdommer ikke aktivt oppsøker nyheter? De «snubler» over dem. Vi har snakket med tolv norske ungdommer mellom 16 og 18 år om hvordan de får med seg hva som skjer i verden. Svaret overrasket oss: Det er algoritmene som bestemmer.

Når du scroller gjennom TikTok eller Instagram, velger en datamaskin ut hva du skal se basert på hva du har likt og sett på tidligere. Det betyr at nyhetene finner ungdommene – ikke omvendt. Men hva skjer med demokratiet når en algoritme bestemmer hva vi vet om verden?»

**Endringer:**
- Engasjerende inngang med spørsmål
- Hverdagsspråk i stedet for fagterminologi
- Konkretisering (TikTok, Instagram)
- Avslutter med et tankevekkende spørsmål
- Beholder det faglige innholdet, men i tilgjengelig form`,
    },
    {
      id: 'kk3-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-5-ex-2',
        number: '8.5.2',
        type: 'classic',
        task: 'Velg et faglig tema fra kommunikasjon og kultur (f.eks. retorikk, semiotikk, kulturell identitet) og skriv et kort populærvitenskapelig avsnitt (5–7 setninger) som forklarer temaet for en som ikke har faglig bakgrunn.',
        hints: ['Tenk: Hvordan ville du forklart dette til en besteforelder eller yngre søsken?'],
        solution: 'Eksempel om retorikk: «Hver gang du prøver å overbevise noen om noe – enten det er å få venner med på kino eller å vinne en diskusjon – bruker du retorikk. Retorikk er kunsten å overtale, og den ble utviklet i antikkens Hellas for over 2000 år siden. Aristoteles identifiserte tre grep: Du kan appellere til fornuften med gode argumenter (logos), til følelsene med engasjerende historier (patos), eller til troverdighet ved å vise at du vet hva du snakker om (etos). Politikere, reklamemakere og influensere bruker disse grepene hele tiden. Når du først lærer å gjenkjenne dem, begynner du å se retorikk overalt.» Her forklares fagtermene med hverdagseksempler, og teksten er tilgjengelig uten å miste det faglige innholdet.',
      },
    },
    {
      id: 'kk3-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-5-ex-3',
        number: '8.5.3',
        type: 'multiple-choice',
        task: 'Hva er det viktigste prinsippet i populærvitenskapelig formidling?',
        options: [
          { id: 'a', text: 'Å bruke så mange fagtermer som mulig for å vise kompetanse', isCorrect: false },
          { id: 'b', text: 'Å forenkle innholdet så mye at detaljene forsvinner helt', isCorrect: false },
          { id: 'c', text: 'Å gjøre faglig innhold forståelig og engasjerende uten å forfalske det', isCorrect: true },
          { id: 'd', text: 'Å kopiere akademiske tekster og legge til bilder', isCorrect: false },
        ],
        solution: 'Populærvitenskapelig formidling handler om å gjøre faglig innhold tilgjengelig uten å forfalske det. Forenkling er nødvendig, men den skal ikke gå på bekostning av sannheten. Målet er «forenkling uten forfalskning» – å finne den rette balansen mellom tilgjengelighet og faglig korrekthet.',
      },
    },
    {
      id: 'kk3-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Lag en plan for hvordan du ville formidlet funnene fra et fordypningsprosjekt om «ungdom og falske nyheter» som en kort podkastepisode (5 minutter). Beskriv strukturen og begrunn valgene dine.',
        hints: ['Tenk på hvordan vellykkede podkaster engasjerer lytteren fra første sekund'],
        solution: 'Podkaststruktur: 0:00–0:30 Engasjerende åpning med en konkret falsk nyhet som gikk viralt blant ungdom, og spørsmålet «Ville du trodd på dette?» 0:30–1:30 Bakgrunn: Kort om hva falske nyheter er og hvorfor ungdom er spesielt utsatt (tall fra undersøkelsen). 1:30–3:30 Hovedfunn: Presenter 2–3 sentrale funn med konkrete eksempler og anonymiserte sitater fra intervjuene. Bruk fortellerteknikk. 3:30–4:30 Hva kan gjøres? Diskuter funnene og gi praktiske tips for kildekritikk. 4:30–5:00 Avslutning med et tankevekkende spørsmål til lytteren. Begrunnelse: Podkast egner seg for temaet fordi det er muntlig og uformelt, og unge lyttere er vant til formatet.',
      },
    },
    {
      id: 'kk3-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-8-5-ex-5',
        number: '8.5.5',
        type: 'multiple-choice',
        task: 'Hvilken formidlingsform egner seg best for å nå et ungt publikum utenfor klasserommet med funn fra et fordypningsprosjekt om musikksmak og identitet?',
        options: [
          { id: 'a', text: 'Fagartikkel publisert i et vitenskapelig tidsskrift', isCorrect: false },
          { id: 'b', text: 'Kort video eller podkastepisode med eksempler og intervjuklipp', isCorrect: true },
          { id: 'c', text: 'Forskningsposter hengt opp på skolen', isCorrect: false },
          { id: 'd', text: 'Et langt blogginnlegg med mange fotnoter', isCorrect: false },
        ],
        solution: 'En kort video eller podkastepisode med eksempler og intervjuklipp er best egnet for et ungt publikum utenfor klasserommet. Ungdom konsumerer mye innhold i audio- og videoformat, temaet (musikksmak) kan illustreres med lydeksempler, og formatet gir rom for en engasjerende og uformell tone. En fagartikkel i tidsskrift når ikke målgruppen, en poster er begrenset til fysisk tilstedeværelse, og et langt blogginnlegg konkurrerer dårlig om oppmerksomheten.',
      },
    },
    {
      id: 'kk3-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En god **muntlig presentasjon** har klar struktur, visuell støtte og er tilpasset publikum
- En **forskningsposter** oppsummerer prosjektet visuelt med fokus på hovedfunn
- **Digital formidling** (podkast, video, infografikk) gir nye muligheter for å nå et bredt publikum
- **Populærvitenskapelig formidling** gjør faglig innhold tilgjengelig uten å forfalske det
- **Retorisk bevissthet** – å tilpasse budskap til mottaker – er nøkkelen til god formidling

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Muntlig presentasjon | Strukturert fremføring med visuell støtte |
| Forskningsposter | Visuell plakatoppsummering av prosjektet |
| Digital formidling | Bruk av digitale plattformer for fagformidling |
| Populærvitenskap | Faglig innhold gjort tilgjengelig for alle |
| Retorisk bevissthet | Tilpasning til situasjon og publikum |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 8
// ============================================================================

export const KOMKULT3_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT3_8_1,
  CHAPTER_KOMKULT3_8_2,
  CHAPTER_KOMKULT3_8_3,
  CHAPTER_KOMKULT3_8_4,
  CHAPTER_KOMKULT3_8_5,
];
