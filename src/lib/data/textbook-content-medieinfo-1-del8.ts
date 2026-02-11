/* eslint-disable */
// @ts-nocheck

/**
 * Medie- og informasjonskunnskap 1 (VG2) - Del 8: Medieproduksjon og informasjonskompetanse
 * Kapittel 8.1-8.5
 *
 * Dekker LK20 kompetansemål:
 * - bruke ulike søkestrategier for å finne relevant og pålitelig informasjon
 * - vurdere kilder kritisk og gjøre rede for kildekritiske metoder
 * - planlegge, gjennomføre og vurdere medieproduksjoner
 * - gjøre rede for opphavsrett og regler for publisering
 * - reflektere over etiske problemstillinger knyttet til medieproduksjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Informasjonssøk og søkestrategier
// ============================================================================

export const CHAPTER_MEDIEINFO_1_8_1: TextbookChapter = {
  id: 'medieinfo-1-8-1',
  courseId: 'medieinfo-1',
  chapterNumber: '8.1',
  title: 'Informasjonssøk og søkestrategier',
  description: 'Lær effektive søkestrategier, bruk av databaser og utvikling av informasjonslitterasitet. Du lærer å finne relevant og pålitelig informasjon raskt og systematisk.',
  estimatedMinutes: 22,
  competenceGoals: ['bruke ulike søkestrategier for å finne relevant og pålitelig informasjon'],
  keyTerms: [
    { term: 'Informasjonslitterasitet', definition: 'Evnen til å finne, vurdere, bruke og formidle informasjon på en kritisk og hensiktsmessig måte.' },
    { term: 'Boolsk søk', definition: 'Søketeknikk som bruker operatorene AND, OR og NOT for å avgrense eller utvide søkeresultater.' },
    { term: 'Trunkering', definition: 'Søketeknikk der man erstatter endelsen av et ord med et tegn (f.eks. *) for å få treff på ulike bøyningsformer.' },
    { term: 'Fagdatabase', definition: 'En spesialisert database med fagfellevurdert eller kvalitetssikret innhold innenfor et bestemt fagfelt.' },
  ],
  content: [
    {
      id: 'mi-8-1-intro',
      type: 'text',
      content: `## Å finne nålen i høystakken

Internett inneholder en ufattelig mengde informasjon, og mengden vokser for hvert sekund. Utfordringen er ikke lenger å finne informasjon, men å finne den *riktige* informasjonen. En som behersker effektive søkestrategier, sparer tid og finner mer pålitelige kilder enn en som bare googler tilfeldig.

I dette kapittelet skal du lære:
- Hva informasjonslitterasitet betyr
- Hvordan du bygger opp gode søk
- Avanserte søketeknikker som boolske søk og trunkering
- Forskjellen mellom åpne søkemotorer og fagdatabaser`,
    },
    {
      id: 'mi-8-1-def-1',
      type: 'definition',
      title: 'Informasjonslitterasitet',
      content: `**Informasjonslitterasitet** (information literacy) er evnen til å erkjenne når man trenger informasjon, og å kunne finne, vurdere, bruke og formidle informasjon på en hensiktsmessig og etisk forsvarlig måte. I en digital verden er dette en av de viktigste kompetansene en medborger kan ha.`,
    },
    {
      id: 'mi-8-1-text-1',
      type: 'text',
      content: `### Søkeprosessen steg for steg

**1. Definer informasjonsbehovet**
- Hva trenger du å finne ut?
- Formuler spørsmålet ditt presist
- Identifiser nøkkelord og synonymer

**2. Velg riktig kilde**
- Generelle søkemotorer (Google, Bing)
- Fagdatabaser (Oria, Atekst, JSTOR)
- Oppslagsverk (Store norske leksikon, Wikipedia)
- Offentlige kilder (SSB, regjeringen.no)

**3. Bygg opp søket**
- Start bredt, avgrens gradvis
- Bruk søketeknikker (boolsk søk, trunkering)
- Kombiner flere nøkkelord

**4. Vurder resultatene**
- Er kildene relevante og pålitelige?
- Trenger du å justere søket?
- Har du nok informasjon?`,
    },
    {
      id: 'mi-8-1-def-2',
      type: 'definition',
      title: 'Boolske søkeoperatorer',
      content: `**Boolske søkeoperatorer** er logiske operatorer som brukes for å kombinere søkeord:\n\n- **AND** (og): Begge ordene må forekomme. Eksempel: *medier AND ungdom* gir treff der begge ordene finnes.\n- **OR** (eller): Minst ett av ordene må forekomme. Eksempel: *ungdom OR tenåring* utvider søket.\n- **NOT** (ikke): Utelukker et ord. Eksempel: *media NOT sosiale* fjerner treff om sosiale medier.`,
    },
    {
      id: 'mi-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Bygge et effektivt søk',
      problem: 'Du skal finne informasjon om hvordan sosiale medier påvirker ungdommers psykiske helse i Norge.',
      solution: `**Steg 1 - Identifiser nøkkelord:**
- sosiale medier, ungdom, psykisk helse, Norge

**Steg 2 - Finn synonymer:**
- sosiale medier / SoMe / Instagram / TikTok
- ungdom / tenåring / unge
- psykisk helse / mental helse / trivsel

**Steg 3 - Bygg boolsk søk:**
\`(sosiale medier OR SoMe) AND (ungdom OR tenåring) AND (psykisk helse OR mental helse)\`

**Steg 4 - Velg kilder:**
- Google Scholar for forskningsartikler
- Atekst for norske nyhetsartikler
- SSB for statistikk
- Oria for fagbøker

**Resultat:** Et systematisk søk gir færre, men mer relevante treff enn å bare skrive «sosiale medier og ungdom» i Google.`,
    },
    {
      id: 'mi-8-1-text-2',
      type: 'text',
      content: `### Avanserte søketeknikker

**Trunkering (*)**
Erstatt endelsen med * for å fange alle bøyningsformer:
- *medie** gir treff på medier, mediene, mediebransjen, medieproduksjon osv.

**Frasesøk (" ")**
Sett anførselstegn rundt en frase for eksakte treff:
- *"sosiale medier"* gir kun treff der ordene står sammen

**Nettstedssøk (site:)**
Avgrens til et bestemt nettsted:
- *klimaendringer site:ssb.no* søker kun på SSB

**Filtype (filetype:)**
Søk etter bestemte filtyper:
- *mediebruk ungdom filetype:pdf* finner PDF-rapporter

**Tidsavgrensning**
De fleste søkemotorer lar deg filtrere på publiseringsdato. Bruk dette for å finne oppdatert informasjon.`,
    },
    {
      id: 'mi-8-1-text-3',
      type: 'text',
      content: `### Søkemotorer vs. fagdatabaser

| Egenskap | Søkemotor (Google) | Fagdatabase (Oria, Atekst) |
|----------|-------------------|---------------------------|
| Innhold | Alt på nettet | Kvalitetssikret materiale |
| Rangering | Algoritmebasert | Relevansbasert |
| Kildekvalitet | Varierer sterkt | Generelt høy |
| Tilgjengelighet | Åpent for alle | Ofte krever pålogging |
| Egnet for | Oversikt, raske søk | Fordypning, forskning |

**Google Scholar** er et godt mellomsteg: det søker i vitenskapelige publikasjoner, men er åpent tilgjengelig.

**Tips:** Bruk generelle søkemotorer for å få oversikt, og fagdatabaser når du trenger pålitelige, fagfellevurderte kilder.`,
    },
    {
      id: 'mi-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Hva gjør den boolske operatoren AND i et søk?',
        options: [
          { id: 'a', text: 'Den utvider søket til å inkludere begge ordene hver for seg', isCorrect: false },
          { id: 'b', text: 'Den krever at begge søkeordene finnes i resultatet', isCorrect: true },
          { id: 'c', text: 'Den fjerner det ene søkeordet fra resultatene', isCorrect: false },
          { id: 'd', text: 'Den sorterer resultatene etter relevans', isCorrect: false },
        ],
        solution: 'AND krever at begge søkeordene må forekomme i resultatet. Det avgrenser søket og gir færre, men mer presise treff. OR utvider søket, mens NOT utelukker.',
      },
    },
    {
      id: 'mi-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        task: 'Du skal skrive en oppgave om pressefrihet i Norge. Lag et boolsk søk med minst tre søkeord og bruk operatorene AND og OR. Forklar hvorfor du valgte disse søkeordene.',
        hints: ['Tenk på synonymer for pressefrihet og Norge'],
        solution: 'Et godt søk kan være: (pressefrihet OR ytringsfrihet OR mediefrihet) AND (Norge OR norsk) AND (demokrati OR lovgivning). Man bruker OR for synonymer for å fange flere relevante treff, og AND for å sikre at alle hovedtemaene er dekket. Synonymer som ytringsfrihet og mediefrihet sikrer at man ikke går glipp av relevante kilder som bruker litt annen terminologi.',
      },
    },
    {
      id: 'mi-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-8-1-ex-3',
        number: '8.1.3',
        type: 'multiple-choice',
        task: 'Hva er trunkering?',
        options: [
          { id: 'a', text: 'Å søke med anførselstegn rundt en frase', isCorrect: false },
          { id: 'b', text: 'Å avgrense søket til et bestemt nettsted', isCorrect: false },
          { id: 'c', text: 'Å erstatte endelsen av et ord med et tegn for å få treff på ulike bøyningsformer', isCorrect: true },
          { id: 'd', text: 'Å sortere søkeresultater etter dato', isCorrect: false },
        ],
        solution: 'Trunkering betyr å kutte endelsen av et søkeord og erstatte med et jokertegn (vanligvis *). For eksempel gir medie* treff på medier, mediene, mediebransjen, medieproduksjon med mer. Det er nyttig for å fange alle bøyningsformer av et ord.',
      },
    },
    {
      id: 'mi-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom å søke i en generell søkemotor som Google og i en fagdatabase som Oria. Når bør du bruke hvilken?',
        solution: 'Google søker i alt som er tilgjengelig på nettet, og resultatene rangeres etter en algoritme som vektlegger popularitet og relevans. Kvaliteten varierer veldig. Fagdatabaser som Oria inneholder kvalitetssikret og fagfellevurdert materiale, noe som gir høyere kildekvalitet. Bruk Google for å få rask oversikt over et tema, og fagdatabaser når du trenger pålitelige kilder til en oppgave eller fordypning.',
      },
    },
    {
      id: 'mi-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        task: 'Hva menes med informasjonslitterasitet, og hvorfor er det viktig i dagens mediesamfunn?',
        hints: ['Tenk på hele prosessen fra å identifisere et informasjonsbehov til å formidle det du har funnet'],
        solution: 'Informasjonslitterasitet er evnen til å erkjenne når man trenger informasjon, og å kunne finne, vurdere, bruke og formidle informasjon hensiktsmessig. Det er viktig fordi vi lever i et samfunn med enormt informasjonstilfang der feilinformasjon og desinformasjon er utbredt. Uten informasjonslitterasitet risikerer man å bli lurt av falske nyheter, bruke upålitelige kilder i skoleoppgaver, eller ta dårlige beslutninger basert på feil grunnlag.',
      },
    },
    {
      id: 'mi-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Informasjonslitterasitet** er evnen til å finne, vurdere og bruke informasjon kritisk
- **Søkeprosessen** går fra å definere behov, velge kilde, bygge søk, til å vurdere resultater
- **Boolske operatorer** (AND, OR, NOT) gjør søk mer presise
- **Trunkering og frasesøk** er nyttige teknikker for å finjustere søkeresultater
- **Fagdatabaser** gir mer pålitelige kilder enn generelle søkemotorer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Informasjonslitterasitet | Evne til å finne, vurdere og bruke informasjon |
| Boolsk søk | Bruk av AND, OR, NOT for å avgrense søk |
| Trunkering | Kutte ordendelse for flere bøyningsformer |
| Fagdatabase | Kvalitetssikret innhold i spesialisert database |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Kildekritikk i praksis
// ============================================================================

export const CHAPTER_MEDIEINFO_1_8_2: TextbookChapter = {
  id: 'medieinfo-1-8-2',
  courseId: 'medieinfo-1',
  chapterNumber: '8.2',
  title: 'Kildekritikk i praksis',
  description: 'Lær å vurdere kilder kritisk ved hjelp av CRAAP-testen, identifiser falske nyheter og desinformasjon, og bruk faktasjekk-verktøy for å skille sant fra usant.',
  estimatedMinutes: 24,
  competenceGoals: ['vurdere kilder kritisk og gjøre rede for kildekritiske metoder'],
  keyTerms: [
    { term: 'CRAAP-testen', definition: 'Kildekritisk metode som vurderer en kilde etter Currency (aktualitet), Relevance (relevans), Authority (autoritet), Accuracy (nøyaktighet) og Purpose (formål).' },
    { term: 'Desinformasjon', definition: 'Feilaktig informasjon som bevisst er laget for å villede eller manipulere mottakeren.' },
    { term: 'Misinformasjon', definition: 'Feilaktig informasjon som spres uten intensjon om å villede, for eksempel ved misforståelser.' },
    { term: 'Faktasjekk', definition: 'Systematisk verifisering av påstander ved å kontrollere dem mot pålitelige kilder og dokumentasjon.' },
  ],
  content: [
    {
      id: 'mi-8-2-intro',
      type: 'text',
      content: `## Kan du stole på det du leser?

I en verden der alle kan publisere innhold på nettet, er kildekritikk viktigere enn noensinne. Falske nyheter, desinformasjon og manipulert innhold florerer i sosiale medier. Å vurdere kilder kritisk er ikke bare en akademisk ferdighet - det er en demokratisk nødvendighet.

I dette kapittelet skal du lære:
- CRAAP-testen som kildekritisk verktøy
- Forskjellen mellom desinformasjon, misinformasjon og satire
- Hvordan falske nyheter lages og spres
- Praktiske metoder for faktasjekk`,
    },
    {
      id: 'mi-8-2-def-1',
      type: 'definition',
      title: 'Kildekritikk',
      content: `**Kildekritikk** er en systematisk metode for å vurdere om en kilde er pålitelig, relevant og troverdig. Det innebærer å stille kritiske spørsmål om hvem som har laget innholdet, hvorfor det ble laget, når det ble publisert, og om informasjonen kan verifiseres gjennom andre kilder.`,
    },
    {
      id: 'mi-8-2-text-1',
      type: 'text',
      content: `### CRAAP-testen

CRAAP-testen er et anerkjent rammeverk for kildekritikk. Hvert bokstav står for et vurderingskriterium:

**C - Currency (Aktualitet)**
- Når ble kilden publisert eller oppdatert?
- Er informasjonen tilstrekkelig oppdatert for ditt formål?
- Fungerer lenkene i kilden?

**R - Relevance (Relevans)**
- Handler kilden om det du undersøker?
- Er informasjonen på riktig nivå (ikke for enkel/avansert)?
- Passer den til målgruppen din?

**A - Authority (Autoritet)**
- Hvem er forfatteren eller utgiveren?
- Har de relevant kompetanse på feltet?
- Er det mulig å kontakte forfatteren?

**A - Accuracy (Nøyaktighet)**
- Er informasjonen understøttet av bevis?
- Kan påstandene verifiseres i andre kilder?
- Er teksten gjennomarbeidet og fri for feil?

**P - Purpose (Formål)**
- Hva er formålet med kilden? Informere, selge, underholde, overbevise?
- Er innholdet objektivt eller preget av meninger?
- Er det tydelig interessekonflikt?`,
    },
    {
      id: 'mi-8-2-example-1',
      type: 'example',
      title: 'Eksempel: CRAAP-test av en nettartikkel',
      problem: 'Du finner en artikkel om helseeffekter av skjermbruk på nettsiden «sunnhelse24.com». Hvordan bruker du CRAAP-testen?',
      solution: `**C - Aktualitet:** Artikkelen har ingen dato. Det er et varselstegn - pålitelige kilder daterer alltid innholdet.

**R - Relevans:** Artikkelen handler om temaet, men er svært generell og mangler detaljer.

**A - Autoritet:** Forfatteren er oppgitt som «Redaksjonen». Ingen navngitte fagpersoner. Nettsiden har ingen informasjon om hvem som står bak.

**A - Nøyaktighet:** Artikkelen inneholder ingen referanser til forskning. Påstandene er vage: «Forskere mener at...» uten å nevne hvilke forskere.

**P - Formål:** Nettsiden har mye reklame for helsekosttilskudd. Artikkelen kan være laget for å drive trafikk til annonsene.

**Konklusjon:** Kilden scorer lavt på alle kriteriene og bør ikke brukes som eneste kilde. Søk heller etter fagfellevurderte artikler eller kilder fra Folkehelseinstituttet.`,
    },
    {
      id: 'mi-8-2-def-2',
      type: 'definition',
      title: 'Desinformasjon vs. misinformasjon',
      content: `**Desinformasjon** er feilaktig informasjon som *bevisst* er laget for å villede, manipulere eller skade. Det kan være fabrikkerte nyheter, manipulerte bilder eller propaganda.\n\n**Misinformasjon** er feilaktig informasjon som spres *uten bevisst intensjon* om å villede. Det kan skyldes misforståelser, dårlig research eller at noen ukritisk deler noe de tror er sant.\n\nForskjellen ligger i intensjonen: Desinformasjon er bevisst løgn, misinformasjon er utilsiktet feil.`,
    },
    {
      id: 'mi-8-2-text-2',
      type: 'text',
      content: `### Hvordan oppdage falske nyheter

**Varselstegn:**
- Dramatiske og følelsesladde overskrifter (clickbait)
- Innholdet bekreftes ikke av andre medier
- Ukjent eller useriøs utgiver
- Manglende forfatter eller kildeangivelser
- Dårlig språk og mange skrivefeil
- Bilder som ikke stemmer med konteksten
- Gamle nyheter presentert som nye

**Faktasjekk-metoder:**
1. Sjekk kilden - hvem står bak?
2. Les hele artikkelen, ikke bare overskriften
3. Sjekk om andre seriøse medier dekker saken
4. Bruk omvendt bildesøk (Google Images) på bilder
5. Sjekk faktasjekktjenester som Faktisk.no
6. Vær skeptisk til kilder som bekrefter det du allerede mener (bekreftelsestendens)`,
    },
    {
      id: 'mi-8-2-text-3',
      type: 'text',
      content: `### Hvorfor spres feilinformasjon?

**Psykologiske mekanismer:**
- **Bekreftelsestendens:** Vi deler innhold som bekrefter det vi allerede tror
- **Følelsesappell:** Innhold som vekker sterke følelser (sinne, frykt, overraskelse) deles oftere
- **Sosial tilhørighet:** Vi stoler på informasjon fra venner og bekjente
- **Gjentakelseseffekten:** Noe som gjentas ofte, føles etter hvert som sant

**Teknologiske mekanismer:**
- Algoritmer viser oss innhold vi engasjerer oss i - uavhengig av sannhetsgehalt
- Filterbobler og ekkokamre begrenser hvilke perspektiver vi eksponeres for
- Automatiserte kontoer (bots) kan spre innhold i stort omfang
- Deling i sosiale medier skjer raskere enn faktasjekking`,
    },
    {
      id: 'mi-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom desinformasjon og misinformasjon?',
        options: [
          { id: 'a', text: 'Desinformasjon spres på nettet, misinformasjon spres muntlig', isCorrect: false },
          { id: 'b', text: 'Desinformasjon er bevisst villedende, misinformasjon er utilsiktet feil', isCorrect: true },
          { id: 'c', text: 'Desinformasjon handler om politikk, misinformasjon om vitenskap', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'Desinformasjon er bevisst skapt for å villede, mens misinformasjon er feilaktig informasjon som spres uten at avsenderen vet at det er feil. Forskjellen er intensjonen bak spredningen.',
      },
    },
    {
      id: 'mi-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        task: 'Bruk CRAAP-testen på en selvvalgt nettartikkel. Vurder alle fem kriteriene og konkluder med om kilden er pålitelig.',
        hints: ['Velg en artikkel du har brukt i en skoleoppgave eller funnet i sosiale medier'],
        solution: 'Besvarelsen bør inneholde en systematisk gjennomgang av alle fem CRAAP-kriteriene: Currency (aktualitet - er kilden oppdatert?), Relevance (er den relevant for formålet?), Authority (har forfatteren relevant kompetanse?), Accuracy (kan informasjonen verifiseres?), Purpose (hva er formålet med kilden?). Konklusjonen bør gi en begrunnet vurdering av kildens pålitelighet basert på disse kriteriene.',
      },
    },
    {
      id: 'mi-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-8-2-ex-3',
        number: '8.2.3',
        type: 'multiple-choice',
        task: 'Hva står P-en for i CRAAP-testen?',
        options: [
          { id: 'a', text: 'Popularity (popularitet)', isCorrect: false },
          { id: 'b', text: 'Publication (publisering)', isCorrect: false },
          { id: 'c', text: 'Purpose (formål)', isCorrect: true },
          { id: 'd', text: 'Precision (presisjon)', isCorrect: false },
        ],
        solution: 'P-en står for Purpose (formål). Man vurderer hva som er formålet med kilden: er det å informere, selge, underholde eller overbevise? Formålet avslører eventuelle interessekonflikter og skjevheter i innholdet.',
      },
    },
    {
      id: 'mi-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        task: 'Forklar begrepet «bekreftelsestendens» og gi et eksempel på hvordan det kan bidra til spredning av falske nyheter.',
        solution: 'Bekreftelsestendens er vår tendens til å søke etter, tolke og huske informasjon som bekrefter det vi allerede mener. Eksempel: En person som tror at vaksiner er farlige, vil lettere legge merke til og dele negative vaksinhistorier, mens positive forskningsresultater overses. I sosiale medier forsterkes dette av algoritmer som viser oss mer av det vi allerede engasjerer oss i, slik at falske nyheter som matcher våre holdninger spres raskere.',
      },
    },
    {
      id: 'mi-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Nevn fire konkrete varselstegn som kan tyde på at en nyhetsartikkel er falsk eller upålitelig.',
        solution: '1) Dramatisk og følelsesladd overskrift (clickbait) som ikke samsvarer med innholdet. 2) Ingen navngitt forfatter eller redaksjon. 3) Manglende kildeangivelser - påstander som «forskere mener» uten å spesifisere hvem. 4) Innholdet dekkes ikke av andre seriøse nyhetsmedier. Andre gyldige tegn: dårlig språk og skrivefeil, bilder som ved omvendt bildesøk viser seg å være fra en annen kontekst, eller en URL som etterligner kjente medier.',
      },
    },
    {
      id: 'mi-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **CRAAP-testen** er et nyttig verktøy for systematisk kildekritikk
- **Desinformasjon** er bevisst villedende, **misinformasjon** er utilsiktet feil
- **Falske nyheter** kan oppdages gjennom kritisk lesing og faktasjekk
- **Bekreftelsestendens** og algoritmer bidrar til spredning av feilinformasjon

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| CRAAP-testen | Fem kriterier for kildekritikk |
| Desinformasjon | Bevisst falsk informasjon |
| Misinformasjon | Utilsiktet feil informasjon |
| Bekreftelsestendens | Tendens til å søke bekreftende informasjon |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Medieproduksjon – planlegging
// ============================================================================

export const CHAPTER_MEDIEINFO_1_8_3: TextbookChapter = {
  id: 'medieinfo-1-8-3',
  courseId: 'medieinfo-1',
  chapterNumber: '8.3',
  title: 'Medieproduksjon – planlegging',
  description: 'Lær å planlegge en medieproduksjon fra idé til ferdig plan. Kapittelet dekker idéutvikling, manus, storyboard og produksjonsplan.',
  estimatedMinutes: 22,
  competenceGoals: ['planlegge, gjennomføre og vurdere medieproduksjoner'],
  keyTerms: [
    { term: 'Manus', definition: 'Et skriftlig dokument som beskriver innholdet i en medieproduksjon, inkludert dialog, handlingsbeskrivelser og tekniske anvisninger.' },
    { term: 'Storyboard', definition: 'En visuell plan der man tegner nøkkelscenene i en produksjon, med informasjon om kameravinkler, bevegelse og lyd.' },
    { term: 'Produksjonsplan', definition: 'En detaljert plan som beskriver hvem som gjør hva, når, hvor og med hvilket utstyr i en medieproduksjon.' },
    { term: 'Målgruppeanalyse', definition: 'En analyse av hvem produksjonen er laget for, inkludert målgruppens alder, interesser, medievaner og behov.' },
  ],
  content: [
    {
      id: 'mi-8-3-intro',
      type: 'text',
      content: `## Godt planlagt er halvt fullført

En medieproduksjon - enten det er en kort film, en podkast, en artikkel eller en kampanje i sosiale medier - starter alltid med en plan. Uten planlegging risikerer du å bruke tid og ressurser på feil ting. Profesjonelle medieprodusenter bruker ofte mer tid på planlegging enn på selve produksjonen.

I dette kapittelet skal du lære:
- Hvordan utvikle og avgrense en idé
- Å skrive manus tilpasset ulike medieformer
- Å lage storyboard for visuell planlegging
- Å sette opp en realistisk produksjonsplan`,
    },
    {
      id: 'mi-8-3-def-1',
      type: 'definition',
      title: 'Preproduksjon',
      content: `**Preproduksjon** er alt planleggingsarbeid som gjøres *før* den faktiske innspillingen eller produksjonen starter. Det inkluderer idéutvikling, research, manusskriving, storyboarding, casting, location scouting, budsjett og produksjonsplan. God preproduksjon er avgjørende for et vellykket resultat.`,
    },
    {
      id: 'mi-8-3-text-1',
      type: 'text',
      content: `### Idéutvikling

**Fra idé til konsept:**

1. **Brainstorming** - Generer mange ideer uten å sensurere
2. **Utvelgelse** - Velg den beste ideen basert på kriterier
3. **Avgrensning** - Gjør ideen spesifikk og gjennomførbar
4. **Konseptutvikling** - Beskriv ideen i en kort tekst (pitch)

**Spørsmål å stille:**
- Hva er budskapet eller historien?
- Hvem er målgruppen?
- Hvilken medieform egner seg best?
- Hvilke ressurser trenger vi?
- Er dette realistisk å gjennomføre?

**Målgruppeanalyse:**
Kjenn målgruppen din. Ulike grupper krever ulik tone, stil og plattform:
- Ungdom → kort format, visuelt, mobiltilpasset
- Voksne → mer detaljert, kan være lengre format
- Fagfolk → presist språk, grundig dokumentasjon`,
    },
    {
      id: 'mi-8-3-text-2',
      type: 'text',
      content: `### Manus

Manuset er produksjonens ryggrad. Det forteller alle involverte hva som skal skje.

**Manus for video/film:**
- Scenenummer og beskrivelse av sted
- Handlingsbeskrivelse (hva skjer i bildet)
- Dialog (hva personene sier)
- Tekniske anvisninger (kameravinkler, musikk)

**Manus for podkast/lyd:**
- Intro og outro
- Overganger mellom segmenter
- Stikkord for samtale eller ferdigskrevet tekst
- Lydeffekter og musikk

**Manus for artikkel/nettinnhold:**
- Vinkling og problemstilling
- Disposisjon med mellomtitler
- Kildeliste og planlagte intervjuer
- Visuelle elementer (bilder, grafikk)

**Tips for manusskriving:**
- Skriv kort og konsist
- Bruk aktive verb
- Les manuset høyt for å sjekke flyten
- Få andre til å lese og gi tilbakemelding`,
    },
    {
      id: 'mi-8-3-def-2',
      type: 'definition',
      title: 'Storyboard',
      content: `Et **storyboard** er en visuell plan for en produksjon, lagt opp som en serie tegninger (ruter) som viser nøkkelscener. Hver rute inneholder et bilde av scenen, informasjon om kameravinkel og bevegelse, dialog eller voice-over, og tekniske noter om lyd og effekter. Storyboard brukes i film, video, animasjon og reklame.`,
    },
    {
      id: 'mi-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Fra idé til produksjonsplan',
      problem: 'Klassen skal lage en kort informasjonsvideo (2 min) om kildesortering for ungdomsskoleelever. Planlegg produksjonen.',
      solution: `**1. Konsept:**
En engasjerende video som viser hvorfor og hvordan man kildesorterer, med humor og gjenkjennelige situasjoner fra skolehverdagen.

**2. Målgruppe:**
Ungdomsskoleelever (13-16 år). Kort format, visuelt engasjerende, lett tone.

**3. Manus (forenklet):**
- Scene 1: En elev kaster alt i restavfall. Voice-over: «Vet du hva som skjer med søpla di?»
- Scene 2: Animasjon som viser hva som skjer med usortert avfall
- Scene 3: Samme elev lærer å sortere. Humor: overraskes over at det er enkelt
- Scene 4: Fakta om effekten av kildesortering. Call to action.

**4. Storyboard:** Tegn 6-8 nøkkelscener med kameravinkler og bevegelse.

**5. Produksjonsplan:**
| Dag | Oppgave | Ansvarlig | Utstyr |
|-----|---------|-----------|--------|
| Man | Ferdigstille manus | Manusgruppa | PC |
| Tir | Innspilling scene 1+3 | Alle | Kamera, lys, mikrofon |
| Ons | Animasjon scene 2 | Animatøren | PC, programvare |
| Tor | Redigering | Redigeringsgruppa | PC, redigeringsprogram |
| Fre | Gjennomgang og korrektur | Alle | Projektor |`,
    },
    {
      id: 'mi-8-3-text-3',
      type: 'text',
      content: `### Produksjonsplan

En god produksjonsplan inneholder:

**Hvem:**
- Roller og ansvar (regissør, fotograf, lydtekniker, redigerer, skuespillere)
- Kontaktinformasjon

**Hva:**
- Detaljert beskrivelse av hver scene/del
- Nødvendig utstyr og rekvisitter

**Når:**
- Tidsplan med frister for hver fase
- Buffer for uforutsette problemer

**Hvor:**
- Innspillingssteder (locations)
- Tillatelser om nødvendig

**Budsjett:**
- Utstyr, transport, mat
- Eventuell lisensiert musikk eller bilder

**Risikovurdering:**
- Hva kan gå galt?
- Plan B for værforhold, utstyrsfeil, sykdom`,
    },
    {
      id: 'mi-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med et storyboard?',
        options: [
          { id: 'a', text: 'Å skrive dialogen til skuespillerne', isCorrect: false },
          { id: 'b', text: 'Å visuelt planlegge scener med kameravinkler og bevegelse', isCorrect: true },
          { id: 'c', text: 'Å beregne budsjettet for produksjonen', isCorrect: false },
          { id: 'd', text: 'Å velge hvilken plattform produksjonen skal publiseres på', isCorrect: false },
        ],
        solution: 'Et storyboard er en visuell plan som viser nøkkelscener i en produksjon gjennom tegninger. Hver rute viser hva som skjer i bildet, kameravinkler, bevegelser og eventuell dialog. Det hjelper hele teamet å forstå den visuelle planen før innspillingen starter.',
      },
    },
    {
      id: 'mi-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        task: 'Forklar hva preproduksjon innebærer og hvorfor det er viktig for en vellykket medieproduksjon.',
        solution: 'Preproduksjon er alt planleggingsarbeid som gjøres før selve produksjonen starter. Det inkluderer idéutvikling, research, manusskriving, storyboard, casting, location scouting, utstyrsplanlegging og produksjonsplan. Det er viktig fordi god planlegging sparer tid og penger under produksjonen, reduserer risikoen for feil, sikrer at alle i teamet vet hva de skal gjøre, og gjør det mulig å oppdage og løse problemer før de oppstår på settet.',
      },
    },
    {
      id: 'mi-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        task: 'Lag en kort produksjonsplan for en podkastepisode (10 minutter) om et valgfritt tema. Inkluder roller, tidsplan, utstyr og et disposisjonsmanus.',
        hints: ['Tenk på intro, hoveddel med 2-3 punkter og outro'],
        solution: 'En god produksjonsplan kan for eksempel se slik ut: Tema: «Stress blant elever». Roller: Programleder, intervjuobjekt (helsesykepleier), tekniker. Tidsplan: Dag 1 - research og manus, Dag 2 - innspilling, Dag 3 - redigering. Utstyr: Mikrofoner, opptaksprogram (f.eks. Audacity), stille rom. Manus: Intro (30 sek) - presentasjon av tema og gjest. Del 1 (3 min) - hva er stress? Del 2 (3 min) - intervju om stressmestring. Del 3 (2 min) - konkrete tips. Outro (1 min) - oppsummering og takk.',
      },
    },
    {
      id: 'mi-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-8-3-ex-4',
        number: '8.3.4',
        type: 'multiple-choice',
        task: 'Hva bør en målgruppeanalyse inneholde?',
        options: [
          { id: 'a', text: 'Kun aldersgruppen til mottakerne', isCorrect: false },
          { id: 'b', text: 'En vurdering av alder, interesser, medievaner og behov hos målgruppen', isCorrect: true },
          { id: 'c', text: 'En liste over konkurrenters produksjoner', isCorrect: false },
          { id: 'd', text: 'Budsjettet for produksjonen', isCorrect: false },
        ],
        solution: 'En målgruppeanalyse bør inkludere informasjon om alder, interesser, medievaner og behov hos de man lager produksjonen for. Dette hjelper deg å tilpasse innhold, tone, format og publiseringskanal. For eksempel krever ungdom kort format og visuelt innhold, mens fagfolk foretrekker presist språk og grundig dokumentasjon.',
      },
    },
    {
      id: 'mi-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        task: 'Forklar forskjellen på manus for video og manus for podkast. Hva er likt og hva er ulikt?',
        solution: 'Likt: Begge inneholder en strukturert plan med intro, hoveddel og avslutning. Begge beskriver innholdet i rekkefølge og inkluderer tekniske anvisninger. Ulikt: Videomanus inneholder handlingsbeskrivelser (hva som skjer visuelt), kameravinkler, scenebeskrivelser og visuell informasjon. Podkastmanus fokuserer kun på lyd: tale, musikk, lydeffekter og pauser. Videomanus er vanligvis mer detaljert fordi det skal koordinere flere elementer (bilde, lyd, bevegelse) samtidig.',
      },
    },
    {
      id: 'mi-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Preproduksjon** er planleggingsfasen som legger grunnlaget for en vellykket produksjon
- **Idéutvikling** handler om å gå fra mange ideer til ett gjennomførbart konsept
- **Manus** tilpasses medieformen (video, lyd, tekst)
- **Storyboard** er et visuelt verktøy for å planlegge scener
- **Produksjonsplanen** beskriver hvem, hva, når, hvor og hvordan

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Preproduksjon | Planlegging før selve produksjonen |
| Manus | Skriftlig plan for innholdet |
| Storyboard | Visuell sceneplan med tegninger |
| Produksjonsplan | Detaljert plan for gjennomføring |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Medieproduksjon – gjennomføring
// ============================================================================

export const CHAPTER_MEDIEINFO_1_8_4: TextbookChapter = {
  id: 'medieinfo-1-8-4',
  courseId: 'medieinfo-1',
  chapterNumber: '8.4',
  title: 'Medieproduksjon – gjennomføring',
  description: 'Lær grunnleggende teknikker for foto, video, lyd og redigering. Kapittelet gir deg praktiske ferdigheter i produksjon og etterarbeid av medieinnhold.',
  estimatedMinutes: 24,
  competenceGoals: ['planlegge, gjennomføre og vurdere medieproduksjoner'],
  keyTerms: [
    { term: 'Komposisjon', definition: 'Måten visuelle elementer er plassert i et bilde eller en filmrute, for eksempel etter tredjedelsregelen.' },
    { term: 'Tredjedelsregelen', definition: 'Et komposisjonsprinsipp der bildet deles i ni like deler med to horisontale og to vertikale linjer, og viktige elementer plasseres langs linjene eller i skjæringspunktene.' },
    { term: 'B-roll', definition: 'Ekstra videoklipp som brukes for å illustrere det som fortelles, dekke klipp eller skape visuell variasjon i en produksjon.' },
    { term: 'Etterarbeid', definition: 'All bearbeiding som skjer etter selve innspillingen, inkludert redigering, fargekorrigering, lydmiks og grafiske elementer.' },
  ],
  content: [
    {
      id: 'mi-8-4-intro',
      type: 'text',
      content: `## Fra plan til produksjon

Nå har du en plan - det er tid for å produsere! I dette kapittelet lærer du grunnleggende teknikker for de vanligste medieformene: foto, video og lyd. Du lærer også om redigering og etterarbeid, som er der produksjonen virkelig tar form.

I dette kapittelet skal du lære:
- Grunnleggende fototeknikk og komposisjon
- Viktige prinsipper for videoopptak
- Lydopptak og vanlige feil
- Redigering og etterarbeid`,
    },
    {
      id: 'mi-8-4-def-1',
      type: 'definition',
      title: 'Komposisjon',
      content: `**Komposisjon** i foto og video handler om hvordan du plasserer elementene i bildet. God komposisjon styrer betrakteren blikk og formidler budskapet effektivt. Det viktigste prinsippet er **tredjedelsregelen**: del bildet i ni deler med to horisontale og to vertikale linjer, og plasser motivet langs linjene eller i krysningspunktene - ikke midt i bildet.`,
    },
    {
      id: 'mi-8-4-text-1',
      type: 'text',
      content: `### Fototeknikk

**Komposisjon:**
- Tredjedelsregelen - plasser hovedmotivet i et krysningspunkt
- Ledende linjer - bruk linjer i bildet til å lede blikket
- Forgrunnsinteresse - inkluder elementer i forgrunnen for dybde
- Negativt rom - la det være plass rundt motivet

**Lys:**
- Naturlig lys er ofte best for nybegynnere
- Unngå hardt middagslys (sterke skygger)
- Vinduslys gir mykt, flatterende lys til portrett
- Fotografer mot lyset kun for spesielle effekter (silhuett)

**Utsnitt:**
- **Totalbilde:** Viser hele scenen og omgivelsene
- **Halvtotalt:** Person fra knærne og opp
- **Halvnært:** Person fra livet og opp
- **Nært:** Ansikt og skuldre
- **Ultranært:** Detalj (øyne, hender)

**Vanlige feil:**
- Skjev horisont
- For mye plass over hodet (headroom)
- Rotete bakgrunn som distraherer
- Dårlig fokus på hovedmotivet`,
    },
    {
      id: 'mi-8-4-text-2',
      type: 'text',
      content: `### Videoteknikk

**Stabilitet:**
- Bruk stativ når mulig
- Hvil albuene mot kroppen ved håndholdt kamera
- Unngå unødvendig zooming og panorering
- Beveg deg heller enn å zoome

**Bildeutsnitt i video:**
- Varier mellom ulike utsnitt for dynamikk
- Bruk 180-graders-regelen ved intervju
- Hold kameraet i øyehøyde som standard
- Froskeperspektiv (nedenfra) og fugleperspektiv (ovenfra) gir ulik effekt

**B-roll:**
Tilleggsklipp som dekker over klipp i hovedopptaket, illustrerer det som fortelles, og gir visuell variasjon. Ta alltid mer B-roll enn du tror du trenger.

**Lyd i video:**
- Lyd er ofte viktigere enn bilde for opplevelsen
- Bruk ekstern mikrofon - innebygd kameramikrofon har for dårlig kvalitet
- Sjekk lydnivåer underveis
- Ta opp romtone (stilheten i rommet) for bruk i redigering`,
    },
    {
      id: 'mi-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Vanlige feil i elevproduksjoner',
      problem: 'Hva er typiske feil elever gjør i sine første videoproduksjoner, og hvordan kan de unngås?',
      solution: `**Feil 1: Dårlig lyd**
Problem: Bruker kun kameraets innebygde mikrofon, som fanger opp støy og gir svak tale.
Løsning: Bruk en ekstern mikrofon (myggmikrofon eller retningsbundet mikrofon). Spill inn i et stille rom.

**Feil 2: For mye kamerabevegelse**
Problem: Håndholdt kamera som rister, unødvendig zooming og panorering.
Løsning: Bruk stativ. Klipp mellom utsnitt i stedet for å zoome. Hold kameraet stabilt.

**Feil 3: Ensidig bildeutsnitt**
Problem: Alle scener er filmet med samme avstand og vinkel.
Løsning: Varier mellom totalt, halvnært og nært. Bruk B-roll for variasjon.

**Feil 4: For lange klipp**
Problem: Scener som varer for lenge, mistet tempo.
Løsning: Klipp bort «dødtid». En scene trenger sjelden å vare mer enn 5-10 sekunder.

**Feil 5: Manglende planlegging**
Problem: Går rett på opptak uten manus eller plan.
Løsning: Bruk tid på preproduksjon. Et enkelt manus og storyboard gjør enorm forskjell.`,
    },
    {
      id: 'mi-8-4-def-2',
      type: 'definition',
      title: 'Etterarbeid (postproduksjon)',
      content: `**Etterarbeid** eller **postproduksjon** er all bearbeiding som skjer etter innspillingen. Det inkluderer videoredigering (klipping, rekkefølge), fargekorrigering, lydmiks (balansere dialog, musikk og effekter), grafiske elementer (tekst, titler, animasjoner) og eksportering til riktig format. Det er i etterarbeidet at de ulike elementene settes sammen til et ferdig produkt.`,
    },
    {
      id: 'mi-8-4-text-3',
      type: 'text',
      content: `### Redigering og etterarbeid

**Videoredigering - grunnprinsipper:**
- Klipp på bevegelse for myke overganger
- Hold et jevnt tempo (ikke for rask eller langsom klipping)
- La klippene «puste» - litt rom før og etter tale
- Bruk overganger med måte (enkle kutt er oftest best)

**Lydmiksing:**
- Dialog bør være tydelig over alt annet
- Bakgrunnsmusikk: senk volumet under tale
- Lydeffekter: bruk sparsomt for effekt
- Normaliser lydnivåene så alt høres jevnt ut

**Gratis redigeringsprogrammer:**
| Program | Brukes til | Plattform |
|---------|-----------|-----------|
| DaVinci Resolve | Videoredigering | PC/Mac |
| Audacity | Lydredigering | PC/Mac |
| GIMP | Bilderedigering | PC/Mac |
| Canva | Grafikk og design | Nettleser |
| CapCut | Enkel videoredigering | Mobil/PC |

**Eksportering:**
- Velg riktig format for plattformen (MP4 er standard for video)
- Sjekk oppløsning (1080p er standard, 4K for høy kvalitet)
- Komprimer til riktig filstørrelse for nett`,
    },
    {
      id: 'mi-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'Hva er tredjedelsregelen?',
        options: [
          { id: 'a', text: 'At man alltid skal bruke tre lyskilder', isCorrect: false },
          { id: 'b', text: 'At man skal ta tre bilder av hvert motiv', isCorrect: false },
          { id: 'c', text: 'At bildet deles i ni deler og motivet plasseres langs linjene eller i krysningspunktene', isCorrect: true },
          { id: 'd', text: 'At man aldri bruker mer enn tre farger i et bilde', isCorrect: false },
        ],
        solution: 'Tredjedelsregelen er et komposisjonsprinsipp der man deler bildet i ni like deler med to horisontale og to vertikale linjer. Hovedmotivet plasseres langs disse linjene eller i krysningspunktene, noe som gir et mer dynamisk og interessant bilde enn å plassere motivet midt i bildet.',
      },
    },
    {
      id: 'mi-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        task: 'Forklar hva B-roll er og hvorfor det er viktig i en videoproduksjon.',
        solution: 'B-roll er tilleggsklipp som supplerer hovedopptaket (A-roll). Det kan være bilder av omgivelsene, detaljer, aktiviteter eller illustrasjoner av det som fortelles. B-roll er viktig fordi det dekker over klipp og overganger i hovedopptaket, illustrerer og forsterker det som sies i voice-over eller intervju, skaper visuell variasjon som holder seeren engasjert, og gir redigereren fleksibilitet til å kutte og justere uten synlige hopp i bildet.',
      },
    },
    {
      id: 'mi-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-8-4-ex-3',
        number: '8.4.3',
        type: 'multiple-choice',
        task: 'Hva er det viktigste å tenke på når det gjelder lyd i en videoproduksjon?',
        options: [
          { id: 'a', text: 'At bakgrunnsmusikken er høy og engasjerende', isCorrect: false },
          { id: 'b', text: 'At dialogen er tydelig og bruker ekstern mikrofon', isCorrect: true },
          { id: 'c', text: 'At man bruker mange forskjellige lydeffekter', isCorrect: false },
          { id: 'd', text: 'At man spiller inn lyd og bilde separat', isCorrect: false },
        ],
        solution: 'Lyd er ofte viktigere enn bildet for seeropplevelsen. Det viktigste er at dialogen er klar og tydelig, noe som krever bruk av ekstern mikrofon fremfor den innebygde kameramikrofonen. Dårlig lyd kan ødelegge en ellers god videoproduksjon, mens godt bilde med dårlig lyd oppleves som uprofesjonelt.',
      },
    },
    {
      id: 'mi-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Beskriv tre vanlige feil i elevproduksjoner og forklar hvordan de kan unngås.',
        hints: ['Tenk på lyd, kamerabevegelse og variasjon i utsnitt'],
        solution: '1) Dårlig lyd: Innebygd kameramikrofon fanger opp støy og gir lav talekvalitet. Unngås ved å bruke ekstern mikrofon og spille inn i stille omgivelser. 2) For mye kamerabevegelse: Håndholdt kamera som rister og unødvendig zooming. Unngås ved å bruke stativ og klippe mellom utsnitt i stedet for å zoome. 3) Monotone bildeutsnitt: Alle scener filmet med samme avstand. Unngås ved å variere mellom totalbilde, halvnært og nært, og bruke B-roll for visuell variasjon.',
      },
    },
    {
      id: 'mi-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom totalbilde, halvnært og nært utsnitt. Når brukes de ulike utsnittene?',
        solution: 'Totalbilde viser hele scenen og omgivelsene, og brukes for å etablere hvor handlingen foregår og gi overblikk. Halvnært utsnitt viser en person fra livet og opp, og er vanlig i intervjuer og samtaler fordi det viser både ansiktsuttrykk og kroppsspråk. Nært utsnitt viser ansikt og skuldre, og brukes for å vise følelser, reaksjoner og intime øyeblikk. Variasjon mellom utsnittene skaper visuell dynamikk og holder seeren engasjert.',
      },
    },
    {
      id: 'mi-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi-8-4-ex-6',
        number: '8.4.6',
        type: 'classic',
        task: 'Hva er etterarbeid (postproduksjon), og hvilke oppgaver inngår i denne fasen?',
        solution: 'Etterarbeid er all bearbeiding som skjer etter selve innspillingen. Det inkluderer videoredigering (klipping og rekkefølge av klipp), fargekorrigering (justere farger og lys), lydmiksing (balansere dialog, musikk og effekter), tillegg av grafiske elementer (tekst, titler, animasjoner) og eksportering til riktig format og oppløsning. Etterarbeidet er fasen der alle enkeltelementene settes sammen til et helhetlig produkt.',
      },
    },
    {
      id: 'mi-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Komposisjon** og tredjedelsregelen gir bedre bilder
- **Lyd** er ofte viktigere enn bilde i videoproduksjon
- **B-roll** skaper variasjon og dekker klipp
- **Etterarbeid** er der produksjonen settes sammen til et ferdig resultat

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Tredjedelsregelen | Komposisjonsprinsipp for plassering av motiv |
| B-roll | Tilleggsklipp for variasjon og dekning |
| Etterarbeid | Redigering, lydmiks og ferdigstilling |
| Komposisjon | Plassering av elementer i bildet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Publisering og opphavsrett
// ============================================================================

export const CHAPTER_MEDIEINFO_1_8_5: TextbookChapter = {
  id: 'medieinfo-1-8-5',
  courseId: 'medieinfo-1',
  chapterNumber: '8.5',
  title: 'Publisering og opphavsrett',
  description: 'Lær om publiseringskanaler, opphavsrett, Creative Commons og åndsverkloven. Forstå hvilke regler som gjelder når du bruker og deler innhold.',
  estimatedMinutes: 20,
  competenceGoals: ['gjøre rede for opphavsrett og regler for publisering', 'reflektere over etiske problemstillinger knyttet til medieproduksjon'],
  keyTerms: [
    { term: 'Opphavsrett', definition: 'Den eneretten en skaper har til sine åndsverk, som tekst, bilder, musikk og film. Retten oppstår automatisk ved skapelsen.' },
    { term: 'Åndsverkloven', definition: 'Den norske loven som regulerer opphavsrett. Den beskytter skaperens rettigheter og setter rammer for bruk av andres verk.' },
    { term: 'Creative Commons', definition: 'Et system med standardiserte lisenser som gjør det enkelt for skapere å gi andre tillatelse til å bruke verkene sine under bestemte vilkår.' },
    { term: 'Sitatretten', definition: 'Retten til å sitere fra offentliggjorte verk i samsvar med god skikk og i den utstrekning formålet betinger, uten å innhente samtykke.' },
  ],
  content: [
    {
      id: 'mi-8-5-intro',
      type: 'text',
      content: `## Når innholdet ditt møter verden

Du har planlagt, produsert og redigert. Nå gjenstår det å publisere. Men før du trykker «del», må du vite hvilke regler som gjelder - både for innhold du har laget selv og for innhold du har brukt fra andre. Opphavsrett er ikke bare juss; det handler om respekt for andres kreative arbeid.

I dette kapittelet skal du lære:
- Ulike publiseringskanaler og deres egenskaper
- Hva opphavsrett og åndsverkloven innebærer
- Hvordan Creative Commons-lisenser fungerer
- Hva du kan og ikke kan bruke av andres innhold`,
    },
    {
      id: 'mi-8-5-def-1',
      type: 'definition',
      title: 'Opphavsrett',
      content: `**Opphavsrett** er den eneretten en person (opphavspersonen) har til et åndsverk de har skapt. Et åndsverk kan være tekst, musikk, bilder, film, dataprogrammer eller andre kreative uttrykk. Opphavsretten oppstår automatisk i det øyeblikket verket skapes - man trenger ikke søke eller registrere den. I Norge er opphavsrett regulert av **åndsverkloven**.`,
    },
    {
      id: 'mi-8-5-text-1',
      type: 'text',
      content: `### Publiseringskanaler

Valg av publiseringskanal avhenger av målgruppe, format og formål:

**Sosiale medier:**
- Instagram, TikTok, YouTube, Facebook
- Rask spredning, stor rekkevidde
- Kort levetid, algoritmestyrt synlighet
- Egnet for: Kort video, bilder, kampanjer

**Egne nettsider/blogger:**
- Full kontroll over innhold og design
- Lengre levetid, bedre for SEO
- Krever vedlikehold
- Egnet for: Artikler, portefølje, dokumentasjon

**Strømmeplattformer:**
- YouTube, Vimeo, Spotify, Apple Podcasts
- Store publikum, inntektsmuligheter
- Plattformen eier distribusjonen
- Egnet for: Video, podkast, musikk

**Trykte medier:**
- Aviser, magasiner, plakater, flyers
- Fysisk tilstedeværelse, troverdighet
- Kostnader for trykking og distribusjon
- Egnet for: Lokalt publikum, formelle sammenhenger

**Tips:** Tilpass innholdet til plattformen. En video for TikTok bør være kort, vertikal og engasjerende fra første sekund. Samme innhold på YouTube kan være lengre og mer utdypende.`,
    },
    {
      id: 'mi-8-5-text-2',
      type: 'text',
      content: `### Åndsverkloven - det du må vite

**Hva beskytter åndsverkloven?**
- Litterære verk (tekst, artikler, bøker)
- Musikk og lydopptak
- Bilder, illustrasjoner og kunstverk
- Film og video
- Dataprogrammer
- Koreografi og scenekunst

**Hovedprinsipper:**
- Opphavsretten varer i 70 år etter opphaverens død
- Du trenger tillatelse for å bruke andres verk
- Kopiering, deling og bearbeiding krever samtykke
- Brudd på opphavsretten kan føre til erstatningskrav og straff

**Unntak - hva du kan gjøre uten tillatelse:**
- **Sitatretten:** Du kan sitere fra offentliggjorte verk i den utstrekning formålet betinger
- **Privat bruk:** Du kan kopiere til eget personlig bruk
- **Undervisning:** Begrenset bruk i undervisningssammenheng
- **Parodier:** Parodier og satire har et visst vern

**Viktig:** Å legge ut noe på sosiale medier er *ikke* privat bruk - det er offentliggjøring.`,
    },
    {
      id: 'mi-8-5-def-2',
      type: 'definition',
      title: 'Creative Commons',
      content: `**Creative Commons (CC)** er et system med standardiserte lisenser som lar skapere gi andre tillatelse til å bruke verkene sine under bestemte vilkår. De fire grunnelementene er:\n\n- **BY** (Navngivelse): Du må kreditere opphavspersonen\n- **SA** (Del på samme vilkår): Bearbeidelser må deles med samme lisens\n- **NC** (Ikke-kommersiell): Kan ikke brukes kommersielt\n- **ND** (Ingen bearbeidelse): Verket kan ikke endres\n\nDisse kombineres til seks lisenser, fra den mest åpne (CC BY) til den mest restriktive (CC BY-NC-ND).`,
    },
    {
      id: 'mi-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Bruk av bilder i en skolepresentasjon',
      problem: 'Du lager en video for et skoleprosjekt og trenger bakgrunnsmusikk og bilder. Hva kan du bruke?',
      solution: `**Bilder:**
- Egne bilder: Alltid lov, men respekter andres personvern (spør om tillatelse til å fotografere personer)
- Creative Commons-bilder: Søk på Unsplash, Pixabay eller Wikimedia Commons. Sjekk lisensen og krediter
- Google Bilder: De fleste bilder er opphavsrettsbeskyttet! Bruk «Avansert søk» og filtrer på Creative Commons-lisens
- Kjøpe lisens: Shutterstock, Getty Images (koster penger)

**Musikk:**
- Egen musikk: Alltid lov
- Royalty-free: YouTube Audio Library, Free Music Archive
- Creative Commons: Jamendo, ccMixter. Sjekk lisensvilkårene
- Kommersiell musikk (Spotify, Apple Music): Kan IKKE brukes uten tillatelse

**I skolesammenheng:**
- Sitatretten gir noe rom for bruk i undervisning
- Men om videoen skal publiseres offentlig (YouTube, sosiale medier), gjelder vanlige opphavsrettsregler
- Best practice: Bruk alltid CC-lisensiert eller royalty-free innhold, og krediter opphavspersonen`,
    },
    {
      id: 'mi-8-5-text-3',
      type: 'text',
      content: `### Etiske hensyn ved publisering

**Personvern:**
- Få samtykke fra alle som kan identifiseres i produksjonen
- For personer under 16 år: foreldresamtykke
- Rett til eget bilde: Du kan ikke publisere gjenkjennelige bilder av andre uten tillatelse
- GDPR gjelder også for elever og privatpersoner

**Etisk ansvar:**
- Presenter informasjon sannferdig og rettferdig
- Ikke manipuler bilder eller video for å villede
- Vær forsiktig med innhold som kan skade eller krenke
- Respekter andres meninger og rett til privatliv

**Konsekvenser av brudd:**
- Juridiske: Erstatningskrav, bøter, fjerning av innhold
- Sosiale: Tap av tillit og omdømme
- Plattformregler: Stenging av konto, fjerning av innhold`,
    },
    {
      id: 'mi-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'Hva betyr CC BY-NC i Creative Commons?',
        options: [
          { id: 'a', text: 'Verket kan brukes fritt uten noen vilkår', isCorrect: false },
          { id: 'b', text: 'Verket kan brukes med navngivelse, men ikke kommersielt', isCorrect: true },
          { id: 'c', text: 'Verket kan kun brukes i undervisning', isCorrect: false },
          { id: 'd', text: 'Verket kan ikke endres eller deles videre', isCorrect: false },
        ],
        solution: 'CC BY-NC betyr at verket kan brukes og bearbeides forutsatt at opphavspersonen krediteres (BY = navngivelse) og at det ikke brukes til kommersielle formål (NC = non-commercial). Du kan altså bruke det i et skoleprosjekt og dele det, men ikke tjene penger på det.',
      },
    },
    {
      id: 'mi-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-8-5-ex-2',
        number: '8.5.2',
        type: 'classic',
        task: 'Forklar hva opphavsrett er, og hvorfor det er viktig for medieprodusenter.',
        solution: 'Opphavsrett er den eneretten en skaper har til sine åndsverk, som tekst, bilder, musikk og film. Retten oppstår automatisk når verket skapes og varer i 70 år etter skaperens død. For medieprodusenter er det viktig av to grunner: 1) Det beskytter dine egne produksjoner mot at andre kopierer eller bruker dem uten tillatelse. 2) Du må respektere andres opphavsrett og ikke bruke bilder, musikk eller tekst uten tillatelse eller riktig lisens. Brudd kan føre til erstatningskrav.',
      },
    },
    {
      id: 'mi-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-8-5-ex-3',
        number: '8.5.3',
        type: 'multiple-choice',
        task: 'Hva er sitatretten?',
        options: [
          { id: 'a', text: 'Retten til å kopiere hele verk for privat bruk', isCorrect: false },
          { id: 'b', text: 'Retten til å sitere fra offentliggjorte verk i den utstrekning formålet betinger', isCorrect: true },
          { id: 'c', text: 'Retten til å publisere andres verk på sosiale medier', isCorrect: false },
          { id: 'd', text: 'Retten til å bruke andres bilder i reklame', isCorrect: false },
        ],
        solution: 'Sitatretten gir deg lov til å sitere fra offentliggjorte verk uten å innhente samtykke, så lenge det skjer i samsvar med god skikk og i den utstrekning formålet betinger. Det betyr at sitatet ikke kan være for langt i forhold til ditt eget verk, og du må oppgi kilde.',
      },
    },
    {
      id: 'mi-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Beskriv de fire grunnelementene i Creative Commons-systemet og forklar hva hvert element betyr.',
        hints: ['Tenk på BY, SA, NC og ND'],
        solution: 'De fire grunnelementene er: 1) BY (Navngivelse/Attribution): Opphavspersonen må krediteres. Dette elementet er med i alle CC-lisenser. 2) SA (Del på samme vilkår/ShareAlike): Hvis du bearbeider verket, må resultatet deles med samme lisens. 3) NC (Ikke-kommersiell/NonCommercial): Verket kan ikke brukes til kommersielle formål. 4) ND (Ingen bearbeidelse/NoDerivatives): Verket kan deles, men ikke endres eller bearbeides. Disse fire elementene kombineres til seks ulike lisenser med ulik grad av åpenhet.',
      },
    },
    {
      id: 'mi-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        task: 'Du skal publisere en video du har laget på YouTube. Beskriv tre etiske hensyn du må ta før publisering.',
        solution: '1) Personvern: Alle personer som er gjenkjennelige i videoen må ha gitt samtykke til at de filmes og publiseres. For mindreårige kreves foreldrenes samtykke. 2) Opphavsrett: All musikk, bilder og andre elementer som er brukt i videoen må enten være dine egne, lisensiert under Creative Commons med korrekt kreditering, eller royalty-free. Kommersiell musikk kan ikke brukes uten tillatelse. 3) Sannferdighet: Innholdet må presenteres ærlig uten manipulering av bilder eller video for å villede seeren, og det bør ikke inneholde materiale som kan skade eller krenke andre.',
      },
    },
    {
      id: 'mi-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Publiseringskanaler** har ulike egenskaper og passer for ulike formål
- **Opphavsrett** oppstår automatisk og beskytter skaperens enerett
- **Creative Commons** gir et system for å dele verk med bestemte vilkår
- **Sitatretten** gir begrenset rett til å bruke andres verk
- **Etiske hensyn** som personvern og sannferdighet er viktige ved publisering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Opphavsrett | Skaperens enerett til eget åndsverk |
| Åndsverkloven | Norsk lov om opphavsrett |
| Creative Commons | Standardiserte lisenser for deling |
| Sitatretten | Rett til å sitere med kildeangivelse |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const MEDIEINFO_1_DEL8_CHAPTERS = [
  CHAPTER_MEDIEINFO_1_8_1,
  CHAPTER_MEDIEINFO_1_8_2,
  CHAPTER_MEDIEINFO_1_8_3,
  CHAPTER_MEDIEINFO_1_8_4,
  CHAPTER_MEDIEINFO_1_8_5,
];
