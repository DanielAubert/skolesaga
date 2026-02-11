/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Sikkerhetsfag - Del 8: Beredskap og krisehåndtering
 *
 * Dekker LK20-kompetansemål for sikkerhetsfag (VG2/VG3)
 * Delkapitler 8.1 - 8.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Beredskapsplanlegging
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_8_1: TextbookChapter = {
  id: 'sikkerhetsfag-8-1',
  courseId: 'sikkerhetsfag',
  chapterNumber: '8.1',
  title: 'Beredskapsplanlegging',
  description: 'Hvordan virksomheter og organisasjoner planlegger for uforutsette hendelser gjennom beredskapsplaner, rollefordeling, ansvarslinjer og varslingssystemer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for beredskapsplanlegging og risikovurdering',
    'forklare roller og ansvar i en beredskapsorganisasjon',
  ],
  content: [
    {
      id: 'sik-8-1-intro',
      type: 'text',
      content: `# Beredskapsplanlegging

Beredskap handler om evnen til å håndtere uventede og alvorlige hendelser. Enten det gjelder brann, strømbrudd, naturkatastrofer eller sikkerhetstrusler, er det avgjørende at organisasjoner har planer på plass før en krise inntreffer. En god beredskapsplan kan redde liv, begrense skader og sikre at virksomheten kommer raskt tilbake til normal drift.

I dette kapittelet skal du lære:
- Hva en beredskapsplan inneholder
- Hvordan roller og ansvar fordeles i en beredskapsorganisasjon
- Hvordan varslingsrutiner fungerer i praksis
- Sammenhengen mellom risikovurdering og beredskapsplanlegging`,
    },
    {
      id: 'sik-8-1-def-beredskap',
      type: 'definition',
      title: 'Beredskap',
      content: '**Beredskap** er tiltak som planlegges og gjennomføres for å håndtere uventede hendelser som kan true liv, helse, miljø eller materielle verdier. Beredskap omfatter forebygging, forberedelse, respons og gjenoppretting.',
    },
    {
      id: 'sik-8-1-text-beredskapsplan',
      type: 'text',
      content: `## Hva er en beredskapsplan?

En beredskapsplan er et dokument som beskriver hvordan en organisasjon skal håndtere ulike typer uønskede hendelser. Planen utarbeides på grunnlag av en grundig risikovurdering og skal være tilpasset virksomhetens art, størrelse og beliggenhet.

### Hovedinnhold i en beredskapsplan

En god beredskapsplan inneholder som minimum:

**1. Formål og omfang**
- Hva planen dekker og hvem den gjelder for
- Hvilke typer hendelser den omfatter
- Referanse til gjeldende lover og forskrifter

**2. Organisering og ansvarsfordeling**
- Hvem som leder beredskapsarbeidet
- Roller og ansvar for alle involverte
- Stedfortrederordninger

**3. Varslingsrutiner**
- Hvem som varsles ved ulike hendelser
- Varslingskjeder og kontaktinformasjon
- Kommunikasjon med nødetater og myndigheter

**4. Tiltakskort**
- Konkrete handlinger for spesifikke hendelser
- Sjekklister for den enkelte rolle
- Prioritering av tiltak

**5. Ressursoversikt**
- Tilgjengelig utstyr og materiell
- Samarbeidsavtaler med andre virksomheter
- Oversikt over personell og kompetanse`,
    },
    {
      id: 'sik-8-1-def-tiltakskort',
      type: 'definition',
      title: 'Tiltakskort',
      content: '**Tiltakskort** er kortfattede instrukser som beskriver konkrete handlinger som skal utføres ved en bestemt type hendelse. Hvert tiltakskort er knyttet til en bestemt rolle og et bestemt scenario, og gir trinnvise instruksjoner slik at den ansvarlige vet nøyaktig hva som skal gjøres.',
    },
    {
      id: 'sik-8-1-text-roller',
      type: 'text',
      content: `## Roller og ansvar i beredskapsorganisasjonen

En velfungerende beredskapsorganisasjon krever tydelig fordeling av roller og ansvar. Alle må vite hva som forventes av dem før en hendelse inntreffer.

### Beredskapskoordinator
- Har det overordnede ansvaret for beredskapsarbeidet
- Sørger for at planen holdes oppdatert
- Planlegger og gjennomfører øvelser
- Rapporterer til ledelsen

### Innsatsleder
- Leder den operative innsatsen ved en hendelse
- Tar beslutninger om tiltak og prioriteringer
- Koordinerer med nødetater
- Holder beredskapskoordinator informert

### Vaktpersonell og førsterespondere
- Oppdager og melder fra om hendelser
- Iverksetter umiddelbare tiltak (evakuering, førstehjelp)
- Sikrer skadestedet
- Veileder ansatte og besøkende

### Informasjonsansvarlig
- Håndterer intern og ekstern kommunikasjon
- Informerer pårørende og media
- Koordinerer med myndighetenes informasjonsarbeid`,
    },
    {
      id: 'sik-8-1-text-varsling',
      type: 'text',
      content: `## Varsling og varslingskjeder

Rask og korrekt varsling er avgjørende for å håndtere en krise effektivt. En varslingskjede definerer rekkefølgen for hvem som varsles, og hvordan informasjonen formidles.

### Varslingsprinsipper
- **Varsle oppover**: Den som oppdager hendelsen, melder fra til nærmeste leder eller vakt
- **Varsle utover**: Nødetater varsles ved behov (110 brann, 112 politi, 113 ambulanse)
- **Varsle nedover**: Ledelsen informerer ansatte og iverksetter tiltak
- **Dokumenter**: All varsling skal loggføres med tidspunkt og innhold

### Varslingskjeden i praksis
1. Hendelsen oppdages og vurderes
2. Intern varsling til vaktsentral eller innsatsleder
3. Nødetat kontaktes ved behov
4. Beredskapsorganisasjonen aktiveres
5. Ansatte og besøkende informeres
6. Pårørende varsles dersom personer er skadet
7. Myndigheter og tilsynsorganer informeres`,
    },
    {
      id: 'sik-8-1-example-beredskap',
      type: 'example',
      title: 'Beredskapsplan for et kjøpesenter',
      problem: 'Beskriv hvordan en beredskapsplan kan se ut for et mellomstort kjøpesenter.',
      solution: `**Scenario: Brann i kjøpesenteret**

**Tiltakskort for vaktleder:**
1. Bekreft brannen (visuelt eller via brannalarm)
2. Ring 110 og gi nøyaktig adresse og informasjon
3. Iverksett evakuering via høyttaleranlegget
4. Send vektere til utgangene for å lede kunder ut
5. Kontroller at alle butikker er evakuert
6. Møt brannvesenet ved hovedinngang
7. Bistå med informasjon om bygningens planløsning

**Varslingskjede:**
Vakt som oppdager brann → Vaktleder → 110 Brannvesen → Senterledelse → Alle butikksjefer → Informasjonsansvarlig → Media og pårørende

**Ressurser:** Brannslukningsapparat, evakueringsplan, samlingsplass på parkeringsplass P2, førstehjelpsrom ved inngang B.`,
    },
    {
      id: 'sik-8-1-text-risikovurdering',
      type: 'text',
      content: `## Sammenhengen mellom risikovurdering og beredskap

Beredskapsplanen bygger på en systematisk risikovurdering. Gjennom å kartlegge farer, vurdere sannsynlighet og konsekvenser, kan organisasjonen prioritere hvilke hendelser det er viktigst å forberede seg på.

### Fra risikovurdering til beredskapsplan
1. **Identifiser farer**: Hva kan gå galt? (brann, innbrudd, naturhendelser, dataangrep)
2. **Vurder risiko**: Hvor sannsynlig er hendelsen, og hvor alvorlige er konsekvensene?
3. **Prioriter**: Hvilke hendelser krever størst beredskap?
4. **Planlegg**: Utvikle beredskapsplan med tiltakskort for prioriterte hendelser
5. **Implementer**: Tren ansatte og gjennomfør øvelser
6. **Evaluer og forbedre**: Oppdater planen basert på erfaringer og endringer

God beredskapsplanlegging er en kontinuerlig prosess som krever jevnlig revisjon og øving.`,
    },
  ],
  exercises: [
    {
      id: 'sik-8-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformålet med en beredskapsplan?',
      options: [
        { id: 'a', text: 'Å beskrive hvordan en organisasjon skal håndtere uønskede hendelser', isCorrect: true },
        { id: 'b', text: 'Å dokumentere alle ansatte og deres arbeidsoppgaver', isCorrect: false },
        { id: 'c', text: 'Å lage en markedsføringsstrategi for virksomheten', isCorrect: false },
        { id: 'd', text: 'Å tilfredsstille krav fra forsikringsselskapet', isCorrect: false },
      ],
      solution: 'En beredskapsplan har som hovedformål å beskrive hvordan en organisasjon skal forberede seg på og håndtere uventede hendelser som kan true liv, helse, miljø eller verdier.',
    },
    {
      id: 'sik-8-1-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er et tiltakskort?',
      options: [
        { id: 'a', text: 'Et kort som gir rabatt på sikkerhetsutstyr', isCorrect: false },
        { id: 'b', text: 'En kortfattet instruks med konkrete handlinger for en bestemt hendelse', isCorrect: true },
        { id: 'c', text: 'Et adgangskort til beredskapsrommet', isCorrect: false },
        { id: 'd', text: 'En oversikt over alle sikkerhetstiltak i bygningen', isCorrect: false },
      ],
      solution: 'Et tiltakskort er en kortfattet instruks som beskriver konkrete handlinger som skal gjennomføres ved en bestemt type hendelse. Det er knyttet til en bestemt rolle og gir trinnvise instruksjoner.',
    },
    {
      id: 'sik-8-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en varslingskjede er, og beskriv hvorfor rekkefølgen i kjeden er viktig.',
      solution: 'En varslingskjede definerer rekkefølgen for hvem som varsles ved en hendelse og hvordan informasjonen formidles. Rekkefølgen er viktig fordi den sikrer at de som kan iverksette livsviktige tiltak får beskjed først (som nødetater), at ingen ledd overses, og at informasjonen flyter raskt og korrekt gjennom organisasjonen.',
    },
    {
      id: 'sik-8-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv minst fire hovedelementer som en beredskapsplan bør inneholde, og forklar hvorfor hvert element er viktig.',
      solution: '1) Formål og omfang - avgrenser hva planen dekker. 2) Organisering og ansvarsfordeling - sikrer at alle vet sin rolle. 3) Varslingsrutiner - sikrer rask og riktig varsling. 4) Tiltakskort - gir konkrete handlingsinstrukser. 5) Ressursoversikt - sikrer at nødvendig utstyr og personell er tilgjengelig. Alle elementene bidrar til at håndteringen blir systematisk og effektiv.',
    },
    {
      id: 'sik-8-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for sammenhengen mellom risikovurdering og beredskapsplanlegging. Hvorfor er det viktig å gjennomføre en risikovurdering før man lager en beredskapsplan?',
      solution: 'Risikovurderingen identifiserer farer og vurderer sannsynlighet og konsekvenser av ulike hendelser. Denne informasjonen brukes til å prioritere hvilke scenarier beredskapsplanen skal dekke. Uten risikovurdering risikerer man å forberede seg på feil hendelser, bruke ressurser ineffektivt eller overse alvorlige trusler. Beredskapsplanen skal være basert på de faktiske risikoene virksomheten står overfor.',
    },
    {
      id: 'sik-8-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du er beredskapskoordinator på en videregående skole. Lag en oversikt over de viktigste rollene i skolens beredskapsorganisasjon, og beskriv ansvarsområdene til hver rolle.',
      solution: 'Beredskapskoordinator (rektor): Overordnet ansvar, holde planen oppdatert, planlegge øvelser. Innsatsleder (assisterende rektor): Lede operativ innsats, ta beslutninger, koordinere med nødetater. Evakueringsansvarlig (kontaktlærer per klasse): Telle elever, følge evakueringsruter, melde fra om manglende. Førstehjelpsansvarlig (helsesykepleier): Gi akutt behandling, prioritere skadde, bistå ambulanse. Informasjonsansvarlig (avdelingsleder): Kommunisere med foresatte, media og myndigheter. Vaktmester: Sikre tekniske systemer, åpne/stenge dører, bistå nødetater med bygningsinformasjon.',
    },
  ],
};

// ============================================================================
// Kapittel 8.2: Krisehåndtering
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_8_2: TextbookChapter = {
  id: 'sikkerhetsfag-8-2',
  courseId: 'sikkerhetsfag',
  chapterNumber: '8.2',
  title: 'Krisehåndtering',
  description: 'Hvordan organisasjoner håndterer kriser gjennom ulike faser, etablering av krisestab, effektiv kommunikasjon og mediehåndtering under press.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for prinsipper for krisehåndtering',
    'forklare hvordan kommunikasjon og mediehåndtering fungerer i en krise',
  ],
  content: [
    {
      id: 'sik-8-2-intro',
      type: 'text',
      content: `# Krisehåndtering

Når en alvorlig hendelse inntreffer, må organisasjonen gå fra beredskap til aktiv krisehåndtering. Krisehåndtering handler om å ta kontroll over situasjonen, beskytte mennesker og verdier, og gjenopprette normaltilstand så raskt som mulig. God krisehåndtering krever trening, tydelig ledelse og effektiv kommunikasjon.

I dette kapittelet skal du lære:
- Hva som kjennetegner en krise og de ulike krisefasene
- Hvordan en krisestab organiseres og fungerer
- Prinsipper for krisekommunikasjon
- Hvordan mediehåndtering foregår under en krise`,
    },
    {
      id: 'sik-8-2-def-krise',
      type: 'definition',
      title: 'Krise',
      content: '**Krise** er en alvorlig hendelse som truer viktige verdier og krever ekstraordinære tiltak for å håndteres. En krise kjennetegnes av høy grad av usikkerhet, tidspress, behov for raske beslutninger og stor oppmerksomhet fra omgivelsene.',
    },
    {
      id: 'sik-8-2-text-faser',
      type: 'text',
      content: `## Krisens faser

En krise gjennomgår typisk fire faser, og forståelse av disse fasene er viktig for å kunne håndtere krisen på en god måte.

### 1. Førkrisefasen (forebygging og forberedelse)
- Risikovurdering og beredskapsplanlegging
- Opplæring og øvelser
- Vedlikehold av utstyr og systemer
- Etablering av varslingssystemer

### 2. Akuttfasen (respons)
- Hendelsen inntreffer og varsling aktiveres
- Krisestaben samles og tar ledelsen
- Livreddende tiltak iverksettes
- Situasjonen kartlegges og vurderes fortløpende
- Kommunikasjon med nødetater og berørte

### 3. Håndteringsfasen (drift under krisen)
- Vedvarende krisehåndtering over tid
- Koordinering av ressurser og innsats
- Informasjon til ansatte, pårørende og media
- Dokumentering av hendelsesforløpet
- Ivaretakelse av berørte personer

### 4. Etterkrisefasen (normalisering og læring)
- Gjenoppretting av normal drift
- Oppfølging av berørte personer
- Evaluering av håndteringen
- Oppdatering av beredskapsplaner
- Deling av erfaringer og læringspunkter`,
    },
    {
      id: 'sik-8-2-text-krisestab',
      type: 'text',
      content: `## Krisestab

Krisestaben er den gruppen personer som leder krisehåndteringen. Staben etableres når en hendelse er så alvorlig at den ordinære organisasjonen ikke kan håndtere den alene.

### Sammensetning av krisestaben
- **Kriseleder**: Tar overordnede beslutninger og leder stabens arbeid
- **Operasjonsleder**: Koordinerer den praktiske innsatsen
- **Informasjonsansvarlig**: Håndterer all kommunikasjon
- **Loggfører**: Dokumenterer alle hendelser, beslutninger og tiltak
- **Fageksperter**: Innkalles etter behov avhengig av hendelsens art

### Krisestabens arbeidsmetodikk
1. **Situasjonsbilde**: Kartlegg hva som har skjedd og hva som skjer nå
2. **Prognose**: Vurder hvordan situasjonen kan utvikle seg
3. **Handlingsalternativer**: Identifiser mulige tiltak
4. **Beslutning**: Velg tiltak og fordel ansvar
5. **Iverksettelse**: Gjennomfør tiltak
6. **Evaluering**: Vurder effekten av tiltak og juster ved behov

Denne syklusen gjentas fortløpende så lenge krisen pågår.`,
    },
    {
      id: 'sik-8-2-def-krisekommunikasjon',
      type: 'definition',
      title: 'Krisekommunikasjon',
      content: '**Krisekommunikasjon** er den informasjonen som formidles til ulike grupper under og etter en krise. God krisekommunikasjon er rask, ærlig, konsistent og tilpasset mottakeren. Formålet er å sikre at riktig informasjon når de som trenger den, redusere usikkerhet og opprettholde tillit.',
    },
    {
      id: 'sik-8-2-text-kommunikasjon',
      type: 'text',
      content: `## Krisekommunikasjon i praksis

Kommunikasjon under en krise er en av de viktigste og mest krevende oppgavene. Dårlig kommunikasjon kan forsterke krisen, mens god kommunikasjon kan begrense skadeomfanget.

### Prinsipper for krisekommunikasjon
- **Vær raskt ute**: Kommuniser tidlig, selv om du ikke har alle fakta
- **Vær ærlig**: Si hva du vet, hva du ikke vet, og hva du gjør for å finne ut mer
- **Vær konsistent**: Alle talspersoner skal gi samme budskap
- **Vis empati**: Anerkjenn at mennesker er berørt og at situasjonen er alvorlig
- **Oppdater jevnlig**: Gi ny informasjon så snart den er tilgjengelig

### Mediehåndtering
Når en krise oppstår, vil media raskt ønske informasjon. God mediehåndtering innebærer:

- **Utpeke talsperson**: Kun autoriserte personer uttaler seg til media
- **Forberede budskap**: Ha klare hovedbudskap og fakta tilgjengelig
- **Være tilgjengelig**: Gi media tilgang til informasjon gjennom pressekonferanser eller pressemeldinger
- **Kontrollere informasjonsflyten**: Sørg for at korrekt informasjon kommer ut
- **Sosiale medier**: Overvåk og bruk sosiale medier aktivt for å nå publikum raskt`,
    },
    {
      id: 'sik-8-2-example-krise',
      type: 'example',
      title: 'Krisehåndtering ved gasslekkasje',
      problem: 'En gasslekkasje oppdages i en industribedrift. Beskriv hvordan krisehåndteringen kan gjennomføres.',
      solution: `**Akuttfasen:**
- Gassalarm aktiveres automatisk
- Alle ansatte evakueres til samlingsplasser
- Brannvesen varsles (110)
- Krisestaben aktiveres

**Krisestabens arbeid:**
- Kriseleder innhenter situasjonsbilde: Hva slags gass, omfang, vindretning
- Operasjonsleder koordinerer med brannvesenet
- Informasjonsansvarlig varsler nabovirksomheter og sender pressemelding
- Loggfører dokumenterer hendelsesforløpet

**Kommunikasjon:**
- Intern: Alle ansatte informeres via SMS og e-post
- Ekstern: Pressemelding sendes ut innen en time
- Talsperson stiller opp for media
- Sosiale medier oppdateres fortløpende

**Etterkrisefasen:**
- Årsaken til lekkasjen kartlegges
- Berørte ansatte tilbys oppfølging
- Beredskapsplanen evalueres og oppdateres`,
    },
  ],
  exercises: [
    {
      id: 'sik-8-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken fase i krisehåndteringen handler om å kartlegge årsaker og oppdatere beredskapsplaner?',
      options: [
        { id: 'a', text: 'Akuttfasen', isCorrect: false },
        { id: 'b', text: 'Førkrisefasen', isCorrect: false },
        { id: 'c', text: 'Håndteringsfasen', isCorrect: false },
        { id: 'd', text: 'Etterkrisefasen', isCorrect: true },
      ],
      solution: 'Etterkrisefasen handler om normalisering og læring. Her evalueres håndteringen, årsaker kartlegges, beredskapsplaner oppdateres og erfaringer deles for å bli bedre forberedt til neste gang.',
    },
    {
      id: 'sik-8-2-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket av følgende er IKKE et prinsipp for god krisekommunikasjon?',
      options: [
        { id: 'a', text: 'Vær raskt ute med informasjon', isCorrect: false },
        { id: 'b', text: 'Vent til du har fullstendig informasjon før du uttaler deg', isCorrect: true },
        { id: 'c', text: 'Vær ærlig om hva du vet og ikke vet', isCorrect: false },
        { id: 'd', text: 'Oppdater jevnlig med ny informasjon', isCorrect: false },
      ],
      solution: 'Å vente til man har fullstendig informasjon er ikke god krisekommunikasjon. Man bør kommunisere tidlig og si hva man vet, hva man ikke vet, og hva man gjør for å finne ut mer. Taushet skaper usikkerhet og ryktespredning.',
    },
    {
      id: 'sik-8-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de fire fasene i en krise og gi et kort eksempel på hva som skjer i hver fase.',
      solution: '1) Førkrisefasen: Forberedelse gjennom risikovurdering, planlegging og øvelser. 2) Akuttfasen: Hendelsen inntreffer, varsling sendes ut og livreddende tiltak iverksettes. 3) Håndteringsfasen: Vedvarende håndtering med koordinering, informasjon og ivaretakelse. 4) Etterkrisefasen: Gjenoppretting av normal drift, evaluering og oppdatering av planer.',
    },
    {
      id: 'sik-8-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en krisestab er, og beskriv de viktigste rollene i staben.',
      solution: 'En krisestab er gruppen som leder krisehåndteringen når en hendelse er for alvorlig til at den ordinære organisasjonen kan håndtere den alene. Viktige roller er: Kriseleder (tar overordnede beslutninger), operasjonsleder (koordinerer praktisk innsats), informasjonsansvarlig (håndterer kommunikasjon), loggfører (dokumenterer alt) og fageksperter (innkalles etter behov).',
    },
    {
      id: 'sik-8-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvorfor mediehåndtering er viktig under en krise. Hvilke konsekvenser kan dårlig mediehåndtering få?',
      solution: 'Mediehåndtering er viktig fordi media former offentlighetens oppfatning av krisen og organisasjonens håndtering. Dårlig mediehåndtering kan føre til spredning av feilinformasjon, unødvendig panikk, tap av tillit hos kunder og samarbeidspartnere, og forverring av krisen. Organisasjoner som kommuniserer åpent, ærlig og raskt beholder tilliten bedre enn de som forsøker å skjule informasjon eller unngår media.',
    },
    {
      id: 'sik-8-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du er informasjonsansvarlig i en bedrift der det nettopp har skjedd en alvorlig arbeidsulykke. Skriv et utkast til den første pressemeldingen som skal sendes ut.',
      solution: 'Pressemelding bør inneholde: 1) Hva som har skjedd (kort og faktabasert). 2) Når og hvor hendelsen fant sted. 3) Hva som er gjort for å håndtere situasjonen (nødetater er varslet, skadde er under behandling). 4) At organisasjonen tar hendelsen svært alvorlig. 5) Informasjon om pårørendetelefon. 6) At det vil komme oppdateringer. 7) Kontaktinformasjon til talsperson. Pressemeldingen skal være kort, ærlig og vise empati uten å spekulere i årsaker.',
    },
  ],
};

// ============================================================================
// Kapittel 8.3: Terrorisme og alvorlige hendelser
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_8_3: TextbookChapter = {
  id: 'sikkerhetsfag-8-3',
  courseId: 'sikkerhetsfag',
  chapterNumber: '8.3',
  title: 'Terrorisme og alvorlige hendelser',
  description: 'Trusselvurdering, PSTs rolle i det forebyggende arbeidet, og PLIVO-prosedyren som brukes av nødetatene ved pågående livstruende vold.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for trusler knyttet til terrorisme og alvorlige hendelser',
    'forklare hvordan nødetatene samarbeider ved livstruende hendelser',
  ],
  content: [
    {
      id: 'sik-8-3-intro',
      type: 'text',
      content: `# Terrorisme og alvorlige hendelser

Terrorisme og andre former for alvorlig, tilsiktet vold utgjør en av de mest krevende truslene samfunnet står overfor. Slike hendelser stiller ekstraordinære krav til beredskap, samarbeid mellom etater og evne til rask respons. I Norge har hendelsene 22. juli 2011 vist hvor viktig det er å være forberedt på det verst tenkelige.

I dette kapittelet skal du lære:
- Hva terrorisme er og ulike former for terrortrusler
- Hvordan trusselvurderinger gjennomføres
- PSTs rolle i det forebyggende sikkerhetsarbeidet
- Hva PLIVO-prosedyren innebærer og hvordan nødetatene samarbeider`,
    },
    {
      id: 'sik-8-3-def-terrorisme',
      type: 'definition',
      title: 'Terrorisme',
      content: '**Terrorisme** er alvorlige voldshandlinger eller trusler om slike handlinger som har til hensikt å skape frykt i en befolkning, påvirke politiske beslutninger eller destabilisere samfunnsstrukturer. Terrorisme rettes ofte mot sivile mål for å oppnå maksimal medieoppmerksomhet og samfunnsmessig effekt.',
    },
    {
      id: 'sik-8-3-text-trusselvurdering',
      type: 'text',
      content: `## Trusselvurdering

En trusselvurdering er en systematisk analyse av mulige trusler mot et objekt, en person eller et samfunn. Formålet er å kartlegge trusselaktører, deres kapasitet og intensjon, slik at forebyggende tiltak kan settes inn.

### Elementer i en trusselvurdering
- **Trusselaktør**: Hvem utgjør en trussel? (enkeltpersoner, grupper, statlige aktører)
- **Intensjon**: Har aktøren ønske om å gjennomføre en handling?
- **Kapasitet**: Har aktøren evne og midler til å gjennomføre handlingen?
- **Sårbarhet**: Hvor utsatt er målet for angrep?
- **Trusselnivå**: Samlet vurdering av sannsynlighet for at en hendelse kan inntreffe

### Trusselnivåer i Norge
Politiets sikkerhetstjeneste (PST) opererer med fem trusselnivåer:
1. **Lavt**: Lite sannsynlig at en hendelse inntreffer
2. **Moderat**: Mindre sannsynlig, men mulig
3. **Betydelig**: Mulig at en hendelse kan inntreffe
4. **Høyt**: Sannsynlig at en hendelse kan inntreffe
5. **Ekstremt**: Svært sannsynlig at en hendelse kan inntreffe`,
    },
    {
      id: 'sik-8-3-text-pst',
      type: 'text',
      content: `## PST - Politiets sikkerhetstjeneste

PST er Norges sivile innenlands etterretningstjeneste. De har ansvar for å forebygge og etterforske alvorlige trusler mot nasjonal sikkerhet.

### PSTs hovedoppgaver
- **Forebygging**: Avdekke og avverge trusler før de realiseres
- **Etterretning**: Innhente og analysere informasjon om mulige trusselaktører
- **Rådgivning**: Gi trusselvurderinger til myndigheter og virksomheter
- **Etterforskning**: Etterforske saker som gjelder rikets sikkerhet
- **Livvakttjeneste**: Beskytte norske og utenlandske myndighetspersoner

### Samarbeid og informasjonsdeling
PST samarbeider med:
- Nasjonal sikkerhetsmyndighet (NSM)
- Etterretningstjenesten (E-tjenesten)
- Politidistrikter og Kripos
- Utenlandske sikkerhetstjenester
- Forsvarets operative hovedkvarter (FOH)`,
    },
    {
      id: 'sik-8-3-def-plivo',
      type: 'definition',
      title: 'PLIVO',
      content: '**PLIVO** (Pågående Livstruende Vold) er en felles prosedyre for nødetatene (politi, brann og helse) som beskriver hvordan de skal samarbeide ved hendelser med pågående livstruende vold. Prosedyren ble utviklet etter erfaringene fra 22. juli 2011 og sikrer at nødetatene raskt og koordinert kan redde liv ved slike hendelser.',
    },
    {
      id: 'sik-8-3-text-plivo',
      type: 'text',
      content: `## PLIVO-prosedyren

PLIVO-prosedyren er utviklet for situasjoner der en eller flere gjerningspersoner utøver livstruende vold mot sivile, og handlingen pågår eller kan gjenopptas.

### Grunnprinsipper i PLIVO
- **Rask innsats**: Nødetatene rykker ut umiddelbart uten å vente på spesialiserte enheter
- **Samvirke**: Politi, brann og helse jobber sammen i en koordinert innsats
- **Nøytralisere trusselen**: Politiets primæroppgave er å stoppe voldsutøveren
- **Redde liv**: Brann og helse prioriterer å gi livreddende førstehjelp
- **Koordinert inntrenging**: Brannvesen kan bistå med inntrenging i låste rom

### Nødetatenes roller ved PLIVO
**Politi:**
- Første enhet på stedet tar kommando
- Nøytraliserer voldsutøver
- Sikrer skadestedet
- Etablerer indre og ytre sperring

**Brannvesen:**
- Bistår med adkomst og inntrenging
- Hjelper med evakuering
- Utfører livreddende førstehjelp
- Kan eskorteres inn av politi

**Helsevesenet:**
- Triagering (prioritering) av skadde
- Livreddende behandling
- Transport til sykehus
- Etablerer behandlingsplass

### Befolkningens rolle
Ved pågående livstruende vold bør du:
- **Kom deg unna**: Forlat området så raskt som mulig
- **Gjøm deg**: Finn dekning bak solide vegger eller dører
- **Ring 112**: Varsle politiet med informasjon om hva du ser
- **Vær stille**: Ikke gjør deg synlig eller hørbar for gjerningspersonen`,
    },
    {
      id: 'sik-8-3-example-terror',
      type: 'example',
      title: 'Trusselvurdering for et offentlig arrangement',
      problem: 'Hvordan kan man gjennomføre en trusselvurdering for et stort utendørs arrangement med flere tusen deltakere?',
      solution: `**Trusselvurdering for festivalarrangement:**

**1. Identifiser trusselaktører:**
- Radikaliserte enkeltpersoner
- Organiserte kriminelle nettverk
- Utilregnelige personer

**2. Vurder intensjon og kapasitet:**
- Sjekk PSTs gjeldende trusselvurdering for nasjonalt nivå
- Vurder om arrangementet kan være et symbolmål
- Kartlegg tilgjengelighet for potensielle våpen

**3. Kartlegg sårbarheter:**
- Åpne områder uten fysisk sikring
- Begrenset antall inn- og utganger
- Store folkemengder som er vanskelige å evakuere raskt

**4. Foreslå tiltak:**
- Kjøretøysperrer ved innganger
- Bag-kontroll og visitasjon
- Synlig og usynlig politivakt
- Overvåkningskameraer
- Klar evakueringsplan med markerte rømningsveier
- Samband mellom vaktpersonell og politi`,
    },
  ],
  exercises: [
    {
      id: 'sik-8-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva står PLIVO for?',
      options: [
        { id: 'a', text: 'Planlagt Livredning og Voldsforebygging', isCorrect: false },
        { id: 'b', text: 'Pågående Livstruende Vold', isCorrect: true },
        { id: 'c', text: 'Politiets Livvakt- og Voldsavdeling', isCorrect: false },
        { id: 'd', text: 'Profesjonell Livreddende Vaktordning', isCorrect: false },
      ],
      solution: 'PLIVO står for Pågående Livstruende Vold. Det er en felles prosedyre for nødetatene som ble utviklet etter 22. juli 2011 for å sikre koordinert respons ved hendelser med pågående livstruende vold.',
    },
    {
      id: 'sik-8-3-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket trusselnivå bruker PST når det vurderes som mulig at en hendelse kan inntreffe?',
      options: [
        { id: 'a', text: 'Lavt', isCorrect: false },
        { id: 'b', text: 'Moderat', isCorrect: false },
        { id: 'c', text: 'Betydelig', isCorrect: true },
        { id: 'd', text: 'Høyt', isCorrect: false },
      ],
      solution: 'Trusselnivå "Betydelig" betyr at det er mulig at en hendelse kan inntreffe. PST opererer med fem nivåer: Lavt (lite sannsynlig), Moderat (mindre sannsynlig), Betydelig (mulig), Høyt (sannsynlig) og Ekstremt (svært sannsynlig).',
    },
    {
      id: 'sik-8-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en trusselvurdering er, og beskriv de viktigste elementene som inngår.',
      solution: 'En trusselvurdering er en systematisk analyse av mulige trusler mot et mål. De viktigste elementene er: 1) Trusselaktør - hvem som kan utgjøre en trussel, 2) Intensjon - om aktøren har ønske om å handle, 3) Kapasitet - om aktøren har evne og midler, 4) Sårbarhet - hvor utsatt målet er, og 5) Trusselnivå - en samlet vurdering av sannsynligheten.',
    },
    {
      id: 'sik-8-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for PSTs hovedoppgaver og forklar hvorfor PSTs arbeid er viktig for samfunnssikkerheten.',
      solution: 'PSTs hovedoppgaver er: forebygging av trusler, etterretning og informasjonsinnhenting, rådgivning til myndigheter, etterforskning av saker som gjelder rikets sikkerhet, og livvakttjeneste. Arbeidet er viktig fordi det bidrar til å avdekke og avverge trusler før de realiseres, gir beslutningstakere grunnlag for tiltak, og beskytter nasjonale interesser og myndighetspersoner.',
    },
    {
      id: 'sik-8-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv PLIVO-prosedyren og forklar hvordan politi, brannvesen og helsevesen samarbeider ved en hendelse med pågående livstruende vold.',
      solution: 'PLIVO er en felles prosedyre for nødetatene ved pågående livstruende vold. Politiets oppgave er å nøytralisere voldsutøveren, sikre stedet og etablere sperringer. Brannvesenet bistår med inntrenging, evakuering og livreddende førstehjelp, og kan eskorteres inn av politi. Helsevesenet triagerer skadde, gir livreddende behandling og transporterer til sykehus. Grunnprinsippene er rask innsats, samvirke mellom etatene og fokus på å redde liv.',
    },
    {
      id: 'sik-8-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du er sikkerhetsansvarlig for en stor idrettsarena. Lag en kort trusselvurdering som dekker de viktigste truslene og foreslå minst fem konkrete sikkerhetstiltak.',
      solution: 'Trusler: 1) Terrorangrep med kjøretøy mot folkemengder, 2) Skyteangrep, 3) Bombetrussel, 4) Publik uroligheter og vold mellom supportergrupper, 5) Cyberangrep mot styringssystemer. Tiltak: 1) Kjøretøysperrer rundt arenaen, 2) Bag-kontroll og metalldetektorer ved inngangene, 3) Kameraovervåkning med overvåkningssentral, 4) Tydelig sonefordeling med publikumskontroll, 5) Synlig politi og ordensvakter, 6) Klar evakueringsplan med øvde vakter, 7) Samband med politiets operasjonssentral.',
    },
  ],
};

// ============================================================================
// Kapittel 8.4: Naturkatastrofer og ekstremvær
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_8_4: TextbookChapter = {
  id: 'sikkerhetsfag-8-4',
  courseId: 'sikkerhetsfag',
  chapterNumber: '8.4',
  title: 'Naturkatastrofer og ekstremvær',
  description: 'Beredskap knyttet til naturhendelser som flom, skred, storm og ekstremvær. Hvordan samfunnet forbereder seg og håndterer slike hendelser.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for beredskap mot naturkatastrofer og ekstremvær',
    'forklare hvordan klimaendringer påvirker beredskapsbehovet',
  ],
  content: [
    {
      id: 'sik-8-4-intro',
      type: 'text',
      content: `# Naturkatastrofer og ekstremvær

Norge er utsatt for en rekke naturhendelser som kan føre til store skader på mennesker, infrastruktur og miljø. Flom, skred, storm og andre former for ekstremvær er hendelser som kan inntreffe med kort varsel og kreve rask respons. Med klimaendringene øker hyppigheten og intensiteten av slike hendelser, noe som stiller stadig større krav til beredskapen.

I dette kapittelet skal du lære:
- Hvilke naturkatastrofer og ekstremværhendelser Norge er utsatt for
- Hvordan beredskapen mot flom, skred og storm er organisert
- Hvilke aktører som har ansvar for naturberedskap
- Hvordan klimaendringer påvirker beredskapsbehovet`,
    },
    {
      id: 'sik-8-4-def-naturkatastrofe',
      type: 'definition',
      title: 'Naturkatastrofe',
      content: '**Naturkatastrofe** er en hendelse forårsaket av naturkrefter som medfører betydelige skader på mennesker, eiendom eller miljø. I Norge er de vanligste naturkatastrofene knyttet til flom, skred (jord, stein, snø), storm og stormflo.',
    },
    {
      id: 'sik-8-4-text-flom',
      type: 'text',
      content: `## Flom

Flom er en av de mest hyppige og skadelige naturhendelsene i Norge. Flom oppstår når vannstanden i elver, bekker eller innsjøer stiger over det normale nivået og oversvømmer omkringliggende områder.

### Typer flom
- **Vårflom**: Forårsaket av snøsmelting, vanligst i indre strøk
- **Regnflom**: Forårsaket av kraftig nedbør over kort tid
- **Stormflo**: Havnivået stiger på grunn av lavtrykk og kraftig vind
- **Isgang**: Isdammer i elver som plutselig gir etter

### Beredskap mot flom
- **Varsling**: Norges vassdrags- og energidirektorat (NVE) overvåker vannstanden og sender varsel
- **Flomsonekart**: Viser hvilke områder som er utsatt for flom
- **Fysiske tiltak**: Flomvoller, demninger, pumpestasjoner
- **Arealplanlegging**: Byggebegrensninger i flomutsatte områder
- **Beredskapsplaner**: Kommunale planer for evakuering og sikring
- **Egenberedskap**: Borgere i flomutsatte områder bør ha egne beredskapsplaner`,
    },
    {
      id: 'sik-8-4-text-skred',
      type: 'text',
      content: `## Skred

Skred er en plutselig massebevegelse av jord, stein, snø eller is nedover en skråning. Skred kan forårsake store ødeleggelser og tap av liv.

### Typer skred
- **Jordskred**: Løsmasser som sklir ut i bratte skråninger
- **Steinsprang og steinskred**: Steinblokker som løsner fra fjellsider
- **Snøskred**: Store snømasser som raser ned fjellsider
- **Kvikkleireskred**: Leire som mister bæreevnen og flyter ut
- **Fjellskred**: Store fjellpartier som raser ut

### Varsling og forebygging
- **NVE** kartlegger skredutsatte områder
- **Snøskredvarselet** (varsom.no) gir daglige vurderinger av snøskredfare
- **Faresoner**: Kommuner markerer skredutsatte soner i arealplaner
- **Sikringstiltak**: Skredsikring av veier (fangvoller, tunneler, nett)
- **Overvåkning**: Kontinuerlig overvåkning av ustabile fjellpartier (f.eks. Mannen i Romsdal)`,
    },
    {
      id: 'sik-8-4-text-storm',
      type: 'text',
      content: `## Storm og ekstremvær

Storm og ekstremvær kan forårsake omfattende skader på bygninger, infrastruktur og skog, og utgjøre fare for menneskers liv og helse.

### Kategorier av vindstyrke
- **Sterk kuling**: 20-24 m/s - fare for skader på bygninger
- **Storm**: 24-33 m/s - betydelige skader, fare for liv
- **Orkan**: Over 33 m/s - ekstreme ødeleggelser

### Beredskap mot storm
- **Meteorologisk institutt** sender ut farevarsel på yr.no
- **Tre farevarselsnivåer**: Gult (vær oppmerksom), Oransje (vær forberedt), Rødt (ta forholdsregler)
- **Sikring av løse gjenstander** ute
- **Beredskapslagring**: Vann, mat, varme, lommelykt
- **Kommunale beredskapsplaner** for strømbrudd og veibrudd

### Klimaendringer og økt beredskap
Klimaendringene fører til:
- Hyppigere og kraftigere ekstremvær
- Økt nedbør og flere flomhendelser
- Økt skredfare på grunn av mer nedbør og tining av permafrost
- Stigende havnivå og økt stormflofare
- Behov for styrket beredskap og tilpasning av infrastruktur`,
    },
    {
      id: 'sik-8-4-def-egenberedskap',
      type: 'definition',
      title: 'Egenberedskap',
      content: '**Egenberedskap** er tiltak den enkelte borger gjør for å kunne klare seg selv i minst 72 timer ved en alvorlig hendelse. Direktoratet for samfunnssikkerhet og beredskap (DSB) anbefaler at alle husstander har lagret vann, mat, varme, lys og nødvendig medisin for tre døgn.',
    },
    {
      id: 'sik-8-4-text-aktører',
      type: 'text',
      content: `## Aktører i naturberedskapen

Flere aktører har ansvar for beredskap mot naturhendelser i Norge:

### Nasjonalt nivå
- **DSB** (Direktoratet for samfunnssikkerhet og beredskap): Koordinerer nasjonal beredskap
- **NVE** (Norges vassdrags- og energidirektorat): Flom- og skredvarsling, kartlegging
- **Meteorologisk institutt**: Værvarsel og farevarsel
- **NGI** (Norges geotekniske institutt): Forskning og rådgivning om skred

### Regionalt og lokalt nivå
- **Statsforvalteren**: Koordinerer beredskap i fylket
- **Kommunen**: Ansvar for lokal beredskap og arealplanlegging
- **Nødetatene**: Politi, brann og helse håndterer akutte hendelser
- **Sivilforsvaret**: Bistår ved store hendelser
- **Frivillige organisasjoner**: Røde Kors, Norsk Folkehjelp, Redningsselskapet`,
    },
    {
      id: 'sik-8-4-example-flom',
      type: 'example',
      title: 'Flomberedskap i en kommune',
      problem: 'Beskriv hvordan en kommune med kjent flomrisiko bør organisere sin beredskap mot flom.',
      solution: `**Kommunal flomberedskap:**

**Forebygging:**
- Oppdaterte flomsonekart for hele kommunen
- Byggebegrensninger i flomutsatte soner
- Vedlikehold av flomvoller og dreneringssystemer
- Sikring av kritisk infrastruktur (vann, avløp, strøm)

**Forberedelse:**
- Beredskapsplan med tiltakskort for ulike flomnivåer
- Evakueringsplan med definerte ruter og mottakssentre
- Avtale med NVE om varsling og veiledning
- Lager med sandsekker, pumper og annet beredskapsutstyr
- Jevnlig øvelse med alle involverte etater

**Under flom:**
- Aktivere beredskapsplan når NVE sender flomvarsel
- Etablere vaktordning for å overvåke vannstanden
- Varsle og eventuelt evakuere beboere i utsatte områder
- Sikre kritisk infrastruktur
- Informere innbyggerne via SMS, nettside og sosiale medier

**Etter flom:**
- Kartlegge skader og bistå berørte
- Rengjøring og gjenoppbygging
- Evaluere håndteringen og oppdatere planer`,
    },
  ],
  exercises: [
    {
      id: 'sik-8-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva anbefaler DSB at alle husstander bør være forberedt på å klare seg selv i?',
      options: [
        { id: 'a', text: '24 timer', isCorrect: false },
        { id: 'b', text: '48 timer', isCorrect: false },
        { id: 'c', text: '72 timer (tre døgn)', isCorrect: true },
        { id: 'd', text: 'En uke', isCorrect: false },
      ],
      solution: 'DSB anbefaler at alle husstander har egenberedskap for minst 72 timer (tre døgn). Dette inkluderer vann, mat, varme, lys og nødvendig medisin.',
    },
    {
      id: 'sik-8-4-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken etat har hovedansvaret for flom- og skredvarsling i Norge?',
      options: [
        { id: 'a', text: 'Meteorologisk institutt', isCorrect: false },
        { id: 'b', text: 'NVE (Norges vassdrags- og energidirektorat)', isCorrect: true },
        { id: 'c', text: 'DSB (Direktoratet for samfunnssikkerhet og beredskap)', isCorrect: false },
        { id: 'd', text: 'Politiet', isCorrect: false },
      ],
      solution: 'NVE har hovedansvaret for flom- og skredvarsling i Norge. De overvåker vannstander, kartlegger fareområder og sender ut varsler. Meteorologisk institutt har ansvar for værvarsling, mens DSB koordinerer den nasjonale beredskapen.',
    },
    {
      id: 'sik-8-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv fire ulike typer skred og forklar kort hva som kjennetegner hver type.',
      solution: '1) Jordskred: Løsmasser som sklir ut i bratte skråninger, ofte utløst av mye nedbør. 2) Snøskred: Store snømasser som raser ned fjellsider, vanlig i bratt terreng over skoggrensen. 3) Kvikkleireskred: Leire som plutselig mister bæreevnen og flyter ut, kan ta med seg store områder. 4) Steinskred: Steinblokker som løsner fra fjellsider, kan utløses av frost-tine-prosesser eller forvitring.',
    },
    {
      id: 'sik-8-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva de tre farevarselsnivåene (gult, oransje, rødt) betyr, og gi eksempler på hva du bør gjøre på hvert nivå.',
      solution: 'Gult varsel (vær oppmerksom): Følg med på værmeldingen, ta enkle forholdsregler. Oransje varsel (vær forberedt): Sikre løse gjenstander, sjekk at du har nødvendig utstyr, vær klar til å handle. Rødt varsel (ta forholdsregler): Ekstremvær forventes, hold deg innendørs om mulig, følg råd fra myndigheter, vær klar for evakuering om nødvendig.',
    },
    {
      id: 'sik-8-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvordan klimaendringer påvirker beredskapsbehovet i Norge. Hvilke tilpasninger må samfunnet gjøre?',
      solution: 'Klimaendringene gir hyppigere og kraftigere ekstremvær, mer nedbør og flom, økt skredfare og stigende havnivå. Samfunnet må tilpasse seg gjennom: styrket overvåkning og varslingssystemer, oppdaterte risiko- og sårbarhetsanalyser, strengere krav til arealplanlegging og bygging i utsatte områder, oppgradering av infrastruktur (avløpssystemer, veier, broer), økt beredskapskapasitet i kommunene, bedre egenberedskap hos befolkningen og mer forskning på lokale klimaeffekter.',
    },
    {
      id: 'sik-8-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag en egenberedskapsplan for din husstand. Beskriv hva dere trenger å ha tilgjengelig og hva dere bør gjøre for å forberede dere på en langvarig strømstans vinterstid.',
      solution: 'Egenberedskapsplan for strømstans: Behov: Drikkevann (9 liter per person for 3 døgn), mat som ikke krever tilberedning (hermetikk, knekkebrød, tørrvarer), alternativ varmekilde (vedovn, gassovn med ventilasjon), lommelykter og batterier/stearinlys, DAB-radio med batterier, nødvendig medisin for 7 dager, varme klær og soveposer, fyrstikker/lighter, kontanter, ladet batteribank for mobil. Forberedelser: Fylle badekaret med vann, lukke gardiner for å holde på varmen, samle familien i ett rom, holde kjøleskap og fryser lukket, sjekke naboer, følge informasjon på DAB-radio.',
    },
  ],
};

// ============================================================================
// Kapittel 8.5: Øvelser og evaluering
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_8_5: TextbookChapter = {
  id: 'sikkerhetsfag-8-5',
  courseId: 'sikkerhetsfag',
  chapterNumber: '8.5',
  title: 'Øvelser og evaluering',
  description: 'Ulike øvelsestyper, scenariobygging, gjennomføring av beredskapsøvelser og systematisk evaluering for kontinuerlig forbedring av beredskapen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'planlegge og gjennomføre beredskapsøvelser',
    'evaluere beredskapsarbeid og foreslå forbedringer',
  ],
  content: [
    {
      id: 'sik-8-5-intro',
      type: 'text',
      content: `# Øvelser og evaluering

En beredskapsplan er bare et dokument - det er gjennom øvelser at planen blir testet og at mennesker lærer å handle riktig under press. Regelmessige øvelser er avgjørende for å avdekke svakheter i planverket, trene personell og bygge trygghet i organisasjonen. Etter en øvelse eller en reell hendelse er det like viktig med en grundig evaluering, slik at erfaringene kan brukes til å forbedre beredskapen.

I dette kapittelet skal du lære:
- Ulike typer beredskapsøvelser og når de brukes
- Hvordan man bygger et realistisk scenario for en øvelse
- Hvordan gjennomføre en beredskapsøvelse
- Prinsipper for evaluering og læring etter øvelser og hendelser`,
    },
    {
      id: 'sik-8-5-def-beredskapsøvelse',
      type: 'definition',
      title: 'Beredskapsøvelse',
      content: '**Beredskapsøvelse** er en planlagt aktivitet der en organisasjon trener på å håndtere uønskede hendelser i henhold til sin beredskapsplan. Formålet er å teste planverket, trene personell, avdekke svakheter og forbedre beredskapen.',
    },
    {
      id: 'sik-8-5-text-øvelsestyper',
      type: 'text',
      content: `## Øvelsestyper

Det finnes ulike typer beredskapsøvelser, og valget av type avhenger av hva man ønsker å teste og ressursene man har tilgjengelig.

### Tabletop-øvelse (diskusjonsøvelse)
- Deltakerne sitter rundt et bord og diskuterer hvordan de ville håndtert et scenario
- Krever lite ressurser og forberedelse
- God for å teste beredskapsplaner og roller
- Avdekker svakheter i planverket uten fysisk gjennomføring
- Egnet som introduksjonsøvelse for nye medarbeidere

### Funksjonsøvelse
- Tester en spesifikk funksjon eller del av beredskapsplanen
- For eksempel varsling, evakuering eller krisekommunikasjon
- Mer praktisk enn tabletop, men uten full mobilisering
- God for å øve på konkrete ferdigheter

### Fullskalaøvelse
- Mest realistisk og ressurskrevende øvelsestype
- Alle deler av beredskapsorganisasjonen aktiveres
- Inkluderer ofte samarbeid med nødetater
- Bruker markører (personer som spiller roller) for å simulere hendelsen
- Gir best grunnlag for å teste hele beredskapssystemet

### Varslings- og kommunikasjonsøvelse
- Tester om varslingskjedene fungerer
- Måler tidsbruk fra hendelse til alle er varslet
- Kan gjennomføres uten fysisk oppmøte
- Bør gjennomføres regelmessig (minst halvårlig)`,
    },
    {
      id: 'sik-8-5-text-scenario',
      type: 'text',
      content: `## Scenariobygging

Et godt scenario er avgjørende for en vellykket øvelse. Scenarioet beskriver den tenkte hendelsen som øvelsen bygger på, og skal være realistisk nok til at deltakerne tar det på alvor.

### Elementer i et øvelsesscenario
- **Bakgrunn**: Hvilken dag, tid og sesong finner hendelsen sted?
- **Hendelse**: Hva skjer? (brann, gasslekkasje, bombetrussel, flom)
- **Omfang**: Hvor stort er skadeomfanget?
- **Eskalering**: Hvordan utvikler situasjonen seg over tid?
- **Innsprøytninger**: Nye opplysninger som sendes inn underveis for å styre øvelsen
- **Forventet respons**: Hva bør deltakerne gjøre?

### Tips for god scenariobygging
- Bruk risikovurderingen som grunnlag for valg av scenario
- Gjør scenarioet realistisk og relevant for virksomheten
- Tilpass kompleksiteten til deltakernes erfaringsnivå
- Planlegg innsprøytninger som tester ulike deler av planen
- Ha en klar tidslinje for hendelsesforløpet
- Inkluder overraskende elementer som utfordrer deltakerne`,
    },
    {
      id: 'sik-8-5-def-innsprøytning',
      type: 'definition',
      title: 'Innsprøytning',
      content: '**Innsprøytning** (eller inject) er ny informasjon som tilføres underveis i en beredskapsøvelse for å styre hendelsesforløpet og utfordre deltakerne. Innsprøytninger kan være nye meldinger, endrede forutsetninger eller uventede komplikasjoner som krever at deltakerne tilpasser sin respons.',
    },
    {
      id: 'sik-8-5-text-evaluering',
      type: 'text',
      content: `## Evaluering og læring

Evaluering etter en øvelse eller reell hendelse er kanskje den viktigste delen av beredskapsarbeidet. Uten evaluering går verdifull lærdom tapt, og de samme feilene kan gjentas.

### Evalueringsmetoder

**Hot debrief (umiddelbar evaluering)**
- Gjennomføres rett etter øvelsen mens inntrykkene er ferske
- Deltakerne deler sine umiddelbare opplevelser
- Kort og uformell form
- Fanger opp spontane reaksjoner og observasjoner

**Skriftlig evaluering**
- Deltakerne fyller ut evalueringsskjema
- Gir mulighet for anonyme tilbakemeldinger
- Kan brukes til kvantitative målinger (for eksempel tidsbruk)

**Evalueringsmøte (cold debrief)**
- Gjennomføres noen dager etter øvelsen
- Mer strukturert og grundig gjennomgang
- Observatørenes rapporter presenteres
- Identifiserer konkrete forbedringstiltak

### Evalueringsprinsipper
- **Åpenhet**: Alle skal føle seg trygge på å dele erfaringer
- **Faktabasert**: Fokuser på hva som skjedde, ikke hvem som har skyld
- **Konstruktiv**: Fokus på forbedring, ikke kritikk
- **Konkret**: Identifiser spesifikke tiltak med ansvarlig og frist
- **Oppfølging**: Sørg for at forbedringstiltak faktisk gjennomføres`,
    },
    {
      id: 'sik-8-5-text-laering',
      type: 'text',
      content: `## Fra evaluering til forbedring

Evaluering har bare verdi dersom funnene følges opp med konkrete tiltak. En god evalueringsrapport etter en øvelse bør inneholde:

### Struktur for evalueringsrapport
1. **Sammendrag**: Kort beskrivelse av øvelsen og hovedfunn
2. **Øvelsens formål og mål**: Hva skulle testes?
3. **Scenario og hendelsesforløp**: Hva skjedde under øvelsen?
4. **Observasjoner**: Hva fungerte bra og hva fungerte dårlig?
5. **Funn og anbefalinger**: Konkrete forbedringsforslag
6. **Tiltaksplan**: Hvem gjør hva, innen når?

### Læringssirkelen i beredskapsarbeid
Beredskapsarbeid er en kontinuerlig prosess:
1. **Planlegg**: Utarbeid og oppdater beredskapsplaner
2. **Tren**: Gjennomfør opplæring og øvelser
3. **Evaluer**: Vurder øvelsen eller hendelsen
4. **Forbedre**: Oppdater planer basert på erfaringer
5. Gjenta sirkelen

Denne sirkelen sikrer at organisasjonen stadig blir bedre forberedt på å håndtere uønskede hendelser.`,
    },
    {
      id: 'sik-8-5-example-øvelse',
      type: 'example',
      title: 'Planlegging av en tabletop-øvelse',
      problem: 'Planlegg en tabletop-øvelse for beredskapsgruppen ved en videregående skole. Temaet er brann i skolebygningen.',
      solution: `**Øvelsesplan: Tabletop-øvelse - Brann**

**Formål:** Teste skolens beredskapsplan for brann og sikre at alle kjenner sine roller.

**Deltakere:** Rektor, assisterende rektor, avdelingsledere, helsesykepleier, vaktmester, utvalgte lærere.

**Scenario:**
Det er tirsdag kl. 10:30. Alle klasser er i undervisning. En brann oppstår i kjemilaben i 2. etasje. Brannalarmen utløses.

**Innsprøytninger:**
1. Kl. 10:32 - En elev melder at det er kraftig røykutvikling i korridoren
2. Kl. 10:35 - En klasse i 2. etasje kan ikke bruke nærmeste rømningsvei
3. Kl. 10:40 - En elev med rullestol trenger assistanse ned trappen
4. Kl. 10:45 - En lærer savner to elever fra sin klasse
5. Kl. 10:50 - Media ringer og vil ha uttalelse

**Diskusjonsspørsmål:**
- Hvem gjør hva i de første minuttene?
- Hvordan håndteres alternative rømningsveier?
- Hvem informerer pårørende?
- Hva gjør vi med savnede elever?

**Evaluering:** Hot debrief umiddelbart etter, skriftlig rapport innen en uke.`,
    },
  ],
  exercises: [
    {
      id: 'sik-8-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken øvelsestype krever minst ressurser og er best egnet for å teste beredskapsplaner gjennom diskusjon?',
      options: [
        { id: 'a', text: 'Fullskalaøvelse', isCorrect: false },
        { id: 'b', text: 'Funksjonsøvelse', isCorrect: false },
        { id: 'c', text: 'Tabletop-øvelse', isCorrect: true },
        { id: 'd', text: 'Varslings- og kommunikasjonsøvelse', isCorrect: false },
      ],
      solution: 'Tabletop-øvelse (diskusjonsøvelse) krever minst ressurser og forberedelse. Deltakerne sitter rundt et bord og diskuterer hvordan de ville håndtert et scenario, noe som er effektivt for å teste beredskapsplaner og roller.',
    },
    {
      id: 'sik-8-5-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en "innsprøytning" i sammenheng med en beredskapsøvelse?',
      options: [
        { id: 'a', text: 'En vaksine som gis til deltakerne før øvelsen', isCorrect: false },
        { id: 'b', text: 'Ny informasjon som tilføres underveis for å styre øvelsen', isCorrect: true },
        { id: 'c', text: 'En oppsummering av øvelsens formål', isCorrect: false },
        { id: 'd', text: 'Et skjema som fylles ut etter øvelsen', isCorrect: false },
      ],
      solution: 'En innsprøytning (inject) er ny informasjon som tilføres underveis i en beredskapsøvelse. Det kan være nye meldinger, endrede forutsetninger eller uventede komplikasjoner som krever at deltakerne tilpasser sin respons.',
    },
    {
      id: 'sik-8-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de fire øvelsestypene som brukes i beredskapsarbeid, og forklar kort hva som kjennetegner hver type.',
      solution: '1) Tabletop-øvelse: Diskusjonsbasert øvelse rundt et bord, krever lite ressurser, tester planverk. 2) Funksjonsøvelse: Tester en bestemt funksjon som varsling eller evakuering, mer praktisk enn tabletop. 3) Fullskalaøvelse: Mest realistisk, hele organisasjonen aktiveres, ofte med nødetater og markører. 4) Varslings- og kommunikasjonsøvelse: Tester varslingskjeder og tidsbruk, kan gjennomføres uten fysisk oppmøte.',
    },
    {
      id: 'sik-8-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom hot debrief og cold debrief, og beskriv fordelene med hver metode.',
      solution: 'Hot debrief gjennomføres rett etter øvelsen mens inntrykkene er ferske. Fordelen er at man fanger spontane reaksjoner og detaljer som lett glemmes. Cold debrief gjennomføres noen dager senere og er mer strukturert og grundig. Fordelen er at deltakerne har fått tid til å reflektere, observatørrapporter er klare, og man kan gjøre en mer helhetlig vurdering. Ideelt sett bruker man begge metodene.',
    },
    {
      id: 'sik-8-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag et øvelsesscenario for en tabletop-øvelse der temaet er en bombetrussel mot et kontorbygg. Inkluder bakgrunn, hendelsesforløp og minst tre innsprøytninger.',
      solution: 'Scenario: Onsdag kl. 13:00, et kontorbygg med 200 ansatte. Resepsjonen mottar en telefonbeskjed om at det er plassert en bombe i bygget. Hendelsesforløp: Resepsjonen varsler vaktleder, politiet ringes (112), evakuering vurderes. Innsprøytninger: 1) Kl. 13:05 - Politiet ber om evakuering og oppretter sperresone, 2) Kl. 13:15 - En ansatt i rullestol sitter fast i heisen som er stanset, 3) Kl. 13:20 - Media er på plass utenfor bygget og vil ha uttalelse, 4) Kl. 13:30 - Politiet melder at bygget må holdes evakuert i minst to timer. Deltakerne diskuterer beslutninger, roller og kommunikasjon i hver fase.',
    },
    {
      id: 'sik-8-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv læringssirkelen i beredskapsarbeid og forklar hvorfor kontinuerlig forbedring er viktig. Gi eksempler på hva som kan skje dersom evaluering og oppfølging forsømmes.',
      solution: 'Læringssirkelen består av fire steg: Planlegg (utarbeid beredskapsplaner), Tren (gjennomfør opplæring og øvelser), Evaluer (vurder hva som fungerte og hva som ikke fungerte), Forbedre (oppdater planer og prosedyrer). Sirkelen gjentas kontinuerlig. Dersom evaluering forsømmes, risikerer man at de samme feilene gjentas, at planverket blir utdatert og ikke gjenspeiler virkeligheten, at personell ikke lærer av erfaringer, at svakheter i organisasjonen ikke avdekkes, og at tilliten til beredskapssystemet svekkes. Eksempler: Varslingslister med feil telefonnumre oppdages ikke, manglende nøkler til beredskapsrom forblir uløst, nye ansatte kjenner ikke sine roller.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const SIKKERHETSFAG_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SIKKERHETSFAG_8_1,
  CHAPTER_SIKKERHETSFAG_8_2,
  CHAPTER_SIKKERHETSFAG_8_3,
  CHAPTER_SIKKERHETSFAG_8_4,
  CHAPTER_SIKKERHETSFAG_8_5,
];
