/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Dokumentasjon i digitale journalsystemer
// ============================================================================

export const CHAPTER_HOV3_6_1: TextbookChapter = {
  id: 'helseoppvekst-vg3-6-1',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '6.1',
  title: 'Dokumentasjon i digitale journalsystemer',
  description: 'Lær om elektronisk pasientjournal (EPJ), VIPS-modellen og krav til journalføring i helse- og omsorgstjenesten. Du får praktisk kunnskap om hvordan dokumentasjon skal gjennomføres i digitale systemer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'dokumentere helsehjelp i tråd med gjeldende regelverk',
    'bruke digitale journalsystemer forsvarlig',
    'ivareta personvern ved dokumentasjon',
  ],
  content: [
    {
      id: 'hov3-6-1-intro',
      type: 'text',
      content: `## Dokumentasjon i en digital hverdag

Dokumentasjon er en hjørnestein i forsvarlig helsehjelp. I dag foregår nesten all dokumentasjon digitalt gjennom elektroniske pasientjournalsystemer (EPJ). Som helsefagarbeider må du kunne bruke disse systemene trygt og effektivt, slik at viktig informasjon om pasienten blir ivaretatt.

I dette kapittelet skal du lære:
- Hva en elektronisk pasientjournal (EPJ) er og hvordan den brukes
- VIPS-modellen for strukturert dokumentasjon
- Krav til innhold og kvalitet i journalføring
- Personvern og informasjonssikkerhet i digitale systemer`,
    },
    {
      id: 'hov3-6-1-def-1',
      type: 'definition',
      title: 'Elektronisk pasientjournal (EPJ)',
      content: `**Elektronisk pasientjournal (EPJ)** er et digitalt system for lagring, deling og gjenfinning av helseopplysninger. EPJ erstatter den gamle papirjournalen og gjør det mulig for autorisert helsepersonell å dokumentere og hente frem opplysninger om pasienter raskt og sikkert. Eksempler på EPJ-systemer i Norge er Gerica, CosDoc, Profil og DIPS.`,
    },
    {
      id: 'hov3-6-1-text-1',
      type: 'text',
      content: `### Hvorfor dokumenterer vi digitalt?

**Kontinuitet i behandlingen**
Når du dokumenterer i EPJ, kan alle som har tjenstlig behov få tilgang til oppdatert informasjon om pasienten. Dette sikrer at:
- Viktige observasjoner ikke går tapt mellom vaktskifter
- Tiltak og behandling kan videreføres uten avbrudd
- Pasienten slipper å gjenta sin sykehistorie til hvert nytt personale

**Juridisk grunnlag**
Helsepersonelloven §§ 39–40 pålegger helsepersonell å føre journal. Dokumentasjonen skal vise at helsehjelpen er gitt forsvarlig og i samsvar med lover og forskrifter.

**Kvalitetssikring**
God dokumentasjon gjør det mulig å evaluere tiltak, avdekke avvik og forbedre praksis over tid. Elektroniske systemer gir i tillegg mulighet for rapporter og statistikk.`,
    },
    {
      id: 'hov3-6-1-def-2',
      type: 'definition',
      title: 'VIPS-modellen',
      content: `**VIPS** er en dokumentasjonsmodell som strukturerer sykepleiedokumentasjon i fire hovedområder: **V**elvære (hvordan pasienten har det), **I**ntegritet (verdighet og autonomi), **P**reventive tiltak (forebygging) og **S**osiale forhold (nettverk og aktivitet). Modellen sikrer at dokumentasjonen dekker hele mennesket, ikke bare medisinske forhold.`,
    },
    {
      id: 'hov3-6-1-text-2',
      type: 'text',
      content: `### Oppbygningen av en EPJ

En elektronisk pasientjournal er organisert i flere moduler:

**Stamdata**
- Personopplysninger, fødselsnummer, adresse
- Pårørende og kontaktpersoner
- Fastlege og andre behandlere
- Allergier og overfølsomhet

**Tiltaksplan**
- Aktuelle helseproblemer og diagnoser
- Mål for helsehjelpen
- Planlagte tiltak og hvem som er ansvarlig
- Evalueringsdato

**Løpende journal (rapport)**
- Daglige observasjoner og tiltak
- Effekt av behandling
- Endringer i pasientens tilstand
- Kommunikasjon med pårørende og andre faggrupper

**Legemiddelmodul**
- Oversikt over faste og behovsmedisiner
- Signering ved utdeling
- Allergier og interaksjoner

**Meldinger og beskjeder**
- Intern kommunikasjon mellom helsepersonell
- Henvisning og epikriser
- Varsler og påminnelser`,
    },
    {
      id: 'hov3-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Journalføring med VIPS-modellen',
      content: `**Situasjon:** En beboer på sykehjem har falt på rommet sitt om natten.

**Dokumentasjon etter VIPS-modellen:**

**V – Velvære:**
Kl. 02:30: Beboer funnet sittende på gulvet ved sengen. Sier hun våknet for å gå på toalettet og mistet balansen. Rapporterer smerter i venstre hofte (VAS 5). Ingen synlige sår eller hevelse.

**I – Integritet:**
Beboer informert om tiltak. Samtykker til observasjon og undersøkelse. Ønsket ikke at pårørende ble kontaktet midt på natten.

**P – Preventive tiltak:**
Kontaktet sykepleier som vurderte hoften. Sengehest satt opp. Nattlys plassert mellom seng og toalett. Tilsyn hver time resten av natten. Fallrisikovurdering planlegges neste dag.

**S – Sosiale forhold:**
Beboer urolig etter fallet, ønsket selskap. Satt med henne i 15 minutter til hun sovnet igjen. Datter informeres ved morgenvisitten.`,
    },
    {
      id: 'hov3-6-1-text-3',
      type: 'text',
      content: `### Krav til god journalføring

God journalføring kjennetegnes av fem prinsipper:

**1. Objektivitet**
Beskriv det du faktisk observerer. Skille mellom fakta og egne tolkninger. Unngå vurderende ord som «sur», «vanskelig» eller «lat».

**2. Relevans**
Dokumenter det som har betydning for videre oppfølging. Spør deg selv: «Hva trenger neste vakt å vite?»

**3. Presisjon**
Bruk konkrete opplysninger. Angi tidspunkt, målte verdier (blodtrykk, temperatur, VAS) og nøyaktige beskrivelser fremfor vage uttrykk.

**4. Aktualitet**
Dokumenter fortløpende, ikke på slutten av vakten. Ved alvorlige hendelser skal dokumentasjon skje umiddelbart.

**5. Etterrettelighet**
Alt skal kunne spores tilbake. Signer med navn, dato og klokkeslett. Rettelser skal gjøres på korrekt måte – aldri slett eller overskrive.`,
    },
    {
      id: 'hov3-6-1-warning-1',
      type: 'warning',
      title: 'Personvern i EPJ',
      content: `Alle oppslag i pasientjournaler logges automatisk. Du har kun lov til å slå opp journalen til pasienter du har tjenstlig behov for å se. Å «snoke» i journaler – for eksempel til naboer, kjendiser, kolleger eller familiemedlemmer – er brudd på taushetsplikten og kan føre til oppsigelse, bøter eller straffansvar. Logg alltid ut av systemet når du forlater arbeidsstasjonen.`,
    },
    {
      id: 'hov3-6-1-text-4',
      type: 'text',
      content: `### Vanlige EPJ-systemer i Norge

| System | Brukes i | Særtrekk |
|--------|----------|----------|
| Gerica | Kommunehelsetjenesten | Bredt brukt i hjemmetjeneste og sykehjem |
| CosDoc | Kommunehelsetjenesten | Brukes mye i Oslo-regionen |
| Profil | Kommunehelsetjenesten | Utbredt i mange kommuner |
| DIPS | Spesialisthelsetjenesten | Brukes på de fleste sykehus |
| Helseplattformen | Midt-Norge | Felles system for kommune og sykehus |

Uansett hvilket system arbeidsplassen din bruker, er prinsippene for god dokumentasjon de samme. Du vil få opplæring i det aktuelle systemet ved ansettelse.`,
    },
    {
      id: 'hov3-6-1-tip-1',
      type: 'tip',
      title: 'Dokumentasjon av avvik',
      content: `Dersom du oppdager noe som avviker fra det normale – for eksempel at en beboer ikke har fått medisinene sine eller at en prosedyre ikke ble fulgt – skal dette dokumenteres som et avvik i virksomhetens avvikssystem. Avviksmeldingen er ikke ment som klage, men som et verktøy for læring og forbedring.`,
    },
    {
      id: 'hov3-6-1-text-5',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **EPJ** er det digitale verktøyet for dokumentasjon i helse- og omsorgstjenesten
- **VIPS-modellen** sikrer helhetlig dokumentasjon gjennom velvære, integritet, preventive tiltak og sosiale forhold
- God journalføring er **objektiv, relevant, presis, aktuell og etterrettelig**
- **Personvern** krever at du kun åpner journaler du har tjenstlig behov for
- Helsepersonelloven §§ 39–40 gir den juridiske rammen for dokumentasjonsplikten`,
    },
  ],
  exercises: [
    {
      id: 'hov3-6-1-ex-1',
      type: 'multiple-choice',
      task: 'Hva står bokstavene i VIPS-modellen for?',
      options: [
        { id: 'a', text: 'Velvære, Integritet, Preventive tiltak, Sosiale forhold', isCorrect: true },
        { id: 'b', text: 'Vurdering, Informasjon, Plan, Samarbeid', isCorrect: false },
        { id: 'c', text: 'Vitale tegn, Individ, Prosedyre, Sikkerhet', isCorrect: false },
        { id: 'd', text: 'Verdighet, Intervensjon, Pasient, System', isCorrect: false },
      ],
      solution: 'VIPS står for Velvære, Integritet, Preventive tiltak og Sosiale forhold. Modellen brukes for å sikre at dokumentasjonen dekker hele mennesket.',
    },
    {
      id: 'hov3-6-1-ex-2',
      type: 'multiple-choice',
      task: 'Hvilken lov pålegger helsepersonell å føre journal?',
      options: [
        { id: 'a', text: 'Pasient- og brukerrettighetsloven', isCorrect: false },
        { id: 'b', text: 'Helsepersonelloven', isCorrect: true },
        { id: 'c', text: 'Kommunehelsetjenesteloven', isCorrect: false },
        { id: 'd', text: 'Personopplysningsloven', isCorrect: false },
      ],
      solution: 'Helsepersonelloven §§ 39–40 regulerer plikten til å føre journal og kravene til journalens innhold.',
    },
    {
      id: 'hov3-6-1-ex-3',
      type: 'multiple-choice',
      task: 'Hva kjennetegner god journalføring?',
      options: [
        { id: 'a', text: 'Kort og uformell beskrivelse av hendelser', isCorrect: false },
        { id: 'b', text: 'Objektiv, relevant, presis, aktuell og etterrettelig', isCorrect: true },
        { id: 'c', text: 'Detaljerte personlige vurderinger av pasienten', isCorrect: false },
        { id: 'd', text: 'Samlet dokumentasjon skrevet ved vaktens slutt', isCorrect: false },
      ],
      solution: 'God journalføring er objektiv (faktabasert), relevant (viktig for oppfølging), presis (konkret med målbare verdier), aktuell (dokumentert fortløpende) og etterrettelig (sporbar med signatur og tidspunkt).',
    },
    {
      id: 'hov3-6-1-ex-4',
      type: 'classic',
      task: 'Forklar forskjellen mellom god og dårlig journalføring. Gi et eksempel på hver.',
      hints: ['Tenk på objektivitet, presisjon og relevans'],
      solution: 'Dårlig journalføring er vag, subjektiv og mangler detaljer. Eksempel: «Pasienten hadde en dårlig dag og var vanskelig.» God journalføring er konkret, objektiv og inneholder relevante opplysninger. Eksempel: «Kl. 08:00: Pasienten rapporterer hodepine (VAS 6) og kvalme. Temperatur 37,9 °C. Avslår frokost, men drikker et glass vann. Kontaktet sykepleier for vurdering. Kl. 09:30: Paracetamol 1 g gitt per os etter ordinasjon. Kl. 10:00: Pasienten rapporterer bedring (VAS 3), spiste yoghurt.»',
    },
    {
      id: 'hov3-6-1-ex-5',
      type: 'classic',
      task: 'Beskriv tre tiltak du kan gjøre for å ivareta personvernet når du bruker EPJ på arbeidsplassen.',
      solution: '1) Logg alltid ut av systemet når du forlater arbeidsstasjonen, slik at uvedkommende ikke får tilgang. 2) Slå kun opp i journaler til pasienter du har tjenstlig behov for å se – alle oppslag logges og kan kontrolleres. 3) Del aldri passord med kolleger, og bruk sterke, unike passord. Andre tiltak kan være å sørge for at skjermen ikke er synlig for besøkende, være forsiktig med utskrifter og papirdokumenter, og ikke diskutere pasienter i offentlige rom.',
    },
    {
      id: 'hov3-6-1-ex-6',
      type: 'classic',
      task: 'Dokumenter følgende situasjon etter VIPS-modellen: En beboer på sykehjem nekter å dusje og virker engstelig.',
      hints: ['Husk å dekke alle fire bokstavene i VIPS'],
      solution: 'V – Velvære: Beboer sier hun føler seg kald og utrygg i dusjen. Virker engstelig og holder seg fast i rullestolen. I – Integritet: Beboers ønske om ikke å dusje respektert. Tilbudt alternativ med kroppsvask på rommet, noe hun takket ja til. P – Preventive tiltak: Planlagt gradvis tilvenning til dusj med fast personale. Temperatur i baderom sjekket (22 °C). Sklisikre matter og håndtak kontrollert. S – Sosiale forhold: Datter informert etter samtykke fra beboer. Datter forteller at mor alltid har vært nervøs for å falle i våte rom.',
    },
  ],
  keyTerms: [
    { term: 'EPJ', definition: 'Elektronisk pasientjournal – digitalt system for dokumentasjon av helseopplysninger' },
    { term: 'VIPS', definition: 'Dokumentasjonsmodell som dekker velvære, integritet, preventive tiltak og sosiale forhold' },
    { term: 'Journalføring', definition: 'Systematisk dokumentasjon av helsehjelp og observasjoner i pasientens journal' },
    { term: 'Tjenstlig behov', definition: 'Kravet om at helsepersonell bare skal ha tilgang til journaler de trenger for å utføre sitt arbeid' },
    { term: 'Tiltaksplan', definition: 'Plan som beskriver pasientens helseproblemer, mål, tiltak og evalueringstidspunkt' },
  ],
};

// ============================================================================
// Kapittel 6.2: Kvalitetsarbeid og pasientsikkerhet
// ============================================================================

export const CHAPTER_HOV3_6_2: TextbookChapter = {
  id: 'helseoppvekst-vg3-6-2',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '6.2',
  title: 'Kvalitetsarbeid og pasientsikkerhet',
  description: 'Lær om avvikshåndtering, internkontroll og systematisk kvalitetsarbeid for å sikre trygge helsetjenester. Du får innsikt i hvordan pasientsikkerheten ivaretas gjennom rutiner og forbedringsarbeid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bidra til kvalitet og pasientsikkerhet i tjenesten',
    'melde avvik og delta i forbedringsarbeid',
    'forstå internkontrollsystemet',
  ],
  content: [
    {
      id: 'hov3-6-2-intro',
      type: 'text',
      content: `## Kvalitet handler om trygghet

Kvalitetsarbeid i helse- og omsorgstjenesten handler om å sikre at pasienter og brukere får trygge, effektive og forsvarlige tjenester. Det er ikke noe som kommer av seg selv – det krever systematisk arbeid, gode rutiner og en kultur der alle tør å si fra.

I dette kapittelet skal du lære:
- Hva kvalitet betyr i helsetjenesten
- Hvordan avvik meldes og håndteres
- Hva internkontroll innebærer
- Hvordan du kan bidra til pasientsikkerhet i hverdagen`,
    },
    {
      id: 'hov3-6-2-def-1',
      type: 'definition',
      title: 'Pasientsikkerhet',
      content: `**Pasientsikkerhet** handler om å forebygge og redusere risiko for unødig skade som følge av helsetjenesten. Det innebærer at organisasjonen har systemer, rutiner og en kultur som minimerer risikoen for at feil og uønskede hendelser oppstår.`,
    },
    {
      id: 'hov3-6-2-text-1',
      type: 'text',
      content: `### De seks kvalitetsdimensjonene

Helsedirektoratet definerer seks dimensjoner for kvalitet i helsetjenesten:

**1. Virkningsfull**
Tjenesten skal bygge på oppdatert fagkunnskap og best tilgjengelig praksis. Tiltak som iverksettes, skal ha dokumentert effekt.

**2. Trygg og sikker**
Tjenesten skal ha systemer som minimerer risiko for uønskede hendelser. Pasienten skal kunne føle seg trygg.

**3. Involverer brukeren**
Pasientens behov, ønsker og verdier skal stå i sentrum. Brukeren skal ha reell medvirkning.

**4. Koordinert og sammenhengende**
Tjenestene skal henge sammen, uavhengig av hvem som leverer dem. Overganger mellom tjenestenivåer skal være trygge.

**5. Utnytter ressursene godt**
Ressursene skal brukes effektivt uten at det går utover kvaliteten. Unødvendig bruk av tid og materiale unngås.

**6. Tilgjengelig og rettferdig**
Alle skal ha lik tilgang til helsetjenester, uavhengig av bosted, alder, kjønn eller bakgrunn.`,
    },
    {
      id: 'hov3-6-2-text-2',
      type: 'text',
      content: `### Avvikshåndtering

Et avvik er et brudd på lover, forskrifter, prosedyrer eller faglige retningslinjer. Avviksmelding er et av de viktigste verktøyene for kvalitetsforbedring.

**Hva skal meldes?**
- Hendelser som har ført til skade på pasient
- Nesten-uhell som kunne ført til skade
- Brudd på prosedyrer og rutiner
- Svikt i utstyr eller systemer
- Bemanningssituasjoner som truer sikkerheten

**Hvordan melde avvik?**
1. Beskriv hva som skjedde – objektivt og konkret
2. Angi tidspunkt, sted og hvem som var involvert
3. Beskriv hvilke umiddelbare tiltak som ble iverksatt
4. Foreslå tiltak for å forebygge gjentakelse
5. Send meldingen til nærmeste leder

**Oppfølging**
- Leder skal kvittere ut og analysere hendelsen
- Tiltak skal iverksettes og forankres
- Melder skal få tilbakemelding
- Erfaringer deles i organisasjonen`,
    },
    {
      id: 'hov3-6-2-warning-1',
      type: 'warning',
      title: 'Meldeplikt for alvorlige hendelser',
      content: `Alvorlige hendelser som har ført til dødsfall eller vesentlig skade skal meldes til Statens helsetilsyn innen 24 timer. Dette er en lovpålagt plikt etter spesialisthelsetjenesteloven § 3-3a og helse- og omsorgstjenesteloven § 12-3a. Det er virksomhetens ledelse som har ansvar for å sende varselet.`,
    },
    {
      id: 'hov3-6-2-def-2',
      type: 'definition',
      title: 'Internkontroll',
      content: `**Internkontroll** er systematiske tiltak som virksomheten gjennomfører for å sikre at aktivitetene planlegges, organiseres, utføres og vedlikeholdes i samsvar med krav fastsatt i lov og forskrift. Forskrift om ledelse og kvalitetsforbedring i helse- og omsorgstjenesten stiller krav til alle virksomheter.`,
    },
    {
      id: 'hov3-6-2-text-3',
      type: 'text',
      content: `### Internkontrollsystemet

Alle virksomheter i helse- og omsorgstjenesten er pålagt å ha et internkontrollsystem. Systemet skal inneholde:

**Planlegge**
- Oversikt over lover og forskrifter som gjelder
- Risikovurderinger av virksomheten
- Klare mål for kvalitet og pasientsikkerhet

**Gjennomføre**
- Prosedyrer og retningslinjer for alle arbeidsoppgaver
- Opplæring og kompetanseplan for ansatte
- System for avviksmelding

**Evaluere**
- Regelmessig gjennomgang av avvik og hendelser
- Bruker- og medarbeiderundersøkelser
- Interne revisjoner og tilsyn

**Korrigere**
- Iverksette tiltak basert på funn
- Justere prosedyrer som ikke fungerer
- Sikre at forbedringer forankres i organisasjonen`,
    },
    {
      id: 'hov3-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Fra avvik til forbedring',
      content: `**Situasjon:** På en sykehjemsavdeling har det vært tre tilfeller av feilmedisinering den siste måneden. Alle skjedde ved kveldsmedisineringen.

**Analyse:** Avviksmeldingene viser at feilene skjedde når det var vikar på vakt, og at vikaren ikke hadde fått opplæring i medisinrutinene. Det manglet også sjekkliste for signering.

**Tiltak:**
1. Obligatorisk opplæring i medisinrutiner for alle vikarer før de kan dele ut medisiner
2. Innføring av dobbeltkontroll ved utdeling av risikomedisiner
3. Sjekkliste for medisinutdeling som signeres for hvert rom
4. Evaluering av tiltakene etter tre måneder

**Resultat:** Ingen nye medisineringsfeil de neste seks månedene. Tiltakene ble innført som fast rutine.`,
    },
    {
      id: 'hov3-6-2-tip-1',
      type: 'tip',
      title: 'PDSA-syklusen for forbedring',
      content: `Bruk PDSA-syklusen for systematisk kvalitetsforbedring:

**P** – Plan: Identifiser problemet og planlegg en endring
**D** – Do: Test endringen i liten skala
**S** – Study: Analyser resultatene – virket det?
**A** – Act: Innfør endringen bredt eller juster og prøv igjen

Ved å teste i liten skala først reduserer du risikoen og lærer raskt hva som fungerer.`,
    },
    {
      id: 'hov3-6-2-text-4',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kvalitet** i helsetjenesten måles gjennom seks dimensjoner: virkningsfull, trygg, brukerinvolverende, koordinert, ressurseffektiv og rettferdig
- **Avvikshåndtering** er et sentralt verktøy for læring og forbedring
- **Internkontroll** sikrer systematisk oppfølging av lover og forskrifter
- **PDSA-syklusen** gir en strukturert metode for forbedringsarbeid
- Alle ansatte har ansvar for å bidra til kvalitet og pasientsikkerhet`,
    },
  ],
  exercises: [
    {
      id: 'hov3-6-2-ex-1',
      type: 'multiple-choice',
      task: 'Hva er hovedformålet med avviksmelding?',
      options: [
        { id: 'a', text: 'Å straffe den som gjorde feil', isCorrect: false },
        { id: 'b', text: 'Læring og forbedring av praksis', isCorrect: true },
        { id: 'c', text: 'Å tilfredsstille tilsynsmyndighetene', isCorrect: false },
        { id: 'd', text: 'Å dokumentere for eventuelle rettssaker', isCorrect: false },
      ],
      solution: 'Hovedformålet med avviksmelding er læring og forbedring. Ved å melde og analysere avvik kan virksomheten identifisere systemsvikt og forebygge gjentakelse.',
    },
    {
      id: 'hov3-6-2-ex-2',
      type: 'multiple-choice',
      task: 'Hva står PDSA for i kvalitetsforbedringsarbeid?',
      options: [
        { id: 'a', text: 'Prioriter, Definer, Sammenlign, Analyser', isCorrect: false },
        { id: 'b', text: 'Plan, Do, Study, Act', isCorrect: true },
        { id: 'c', text: 'Pasient, Dokumentasjon, Sikkerhet, Ansvar', isCorrect: false },
        { id: 'd', text: 'Planlegge, Dokumentere, Sikre, Avslutte', isCorrect: false },
      ],
      solution: 'PDSA står for Plan-Do-Study-Act og er en systematisk metode for kvalitetsforbedring der man planlegger en endring, tester den i liten skala, analyserer resultatene og implementerer eller justerer.',
    },
    {
      id: 'hov3-6-2-ex-3',
      type: 'classic',
      task: 'Forklar hva internkontroll er og beskriv de fire elementene i internkontrollsystemet.',
      hints: ['Tenk på planlegge, gjennomføre, evaluere og korrigere'],
      solution: 'Internkontroll er systematiske tiltak for å sikre at virksomheten drives i samsvar med lov og forskrift. De fire elementene er: 1) Planlegge – kartlegge risiko og sette mål. 2) Gjennomføre – ha prosedyrer, opplæring og avvikssystemer. 3) Evaluere – gjennomgå avvik, undersøkelser og tilsyn. 4) Korrigere – iverksette tiltak og justere praksis. Systemet sikrer kontinuerlig forbedring og at tjenestene er forsvarlige.',
    },
    {
      id: 'hov3-6-2-ex-4',
      type: 'classic',
      task: 'Gi et eksempel på en situasjon der du ville meldt avvik, og beskriv hvordan du ville formulert avviksmeldingen.',
      solution: 'Eksempel: En beboer fikk ikke morgenmedisinen sin fordi dosetten var tom. Avviksmelding: «Kl. 08:00: Oppdaget at dosetten til beboer i rom 5 var tom ved morgenmedisineringen. Undersøkte og fant at medisinene ikke var fylt opp etter siste bestilling fra apotek. Umiddelbare tiltak: Kontaktet sykepleier som ga medisinene fra reservelager. Beboer informert. Forslag til forebygging: Innføre sjekkliste for kontroll av dosetter ved mottak fra apotek, med signering og dato.»',
    },
    {
      id: 'hov3-6-2-ex-5',
      type: 'classic',
      task: 'Beskriv de seks kvalitetsdimensjonene for helsetjenester og gi et eksempel på hvordan en av dem kan brytes i praksis.',
      solution: 'De seks dimensjonene er: 1) Virkningsfull – basert på fagkunnskap. 2) Trygg og sikker – minimere risiko. 3) Involverer brukeren – medvirkning. 4) Koordinert og sammenhengende – gode overganger. 5) Utnytter ressursene godt – effektiv drift. 6) Tilgjengelig og rettferdig – lik tilgang for alle. Eksempel på brudd: En pasient skrives ut fra sykehuset uten at sykehjemmet får beskjed om endringer i medisiner. Dette bryter med dimensjonen om koordinerte og sammenhengende tjenester, og kan føre til feilmedisinering.',
    },
  ],
  keyTerms: [
    { term: 'Avvik', definition: 'Brudd på lover, forskrifter, prosedyrer eller faglige retningslinjer' },
    { term: 'Internkontroll', definition: 'Systematiske tiltak for å sikre at virksomheten drives i samsvar med lover og forskrifter' },
    { term: 'PDSA', definition: 'Plan-Do-Study-Act – metode for systematisk kvalitetsforbedring' },
    { term: 'Pasientsikkerhet', definition: 'Forebygging og reduksjon av risiko for unødig skade fra helsetjenesten' },
    { term: 'Sikkerhetskultur', definition: 'Holdninger og verdier i en organisasjon som fremmer åpenhet om feil og læring' },
  ],
};

// ============================================================================
// Kapittel 6.3: HMS og ergonomi i praksis
// ============================================================================

export const CHAPTER_HOV3_6_3: TextbookChapter = {
  id: 'helseoppvekst-vg3-6-3',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '6.3',
  title: 'HMS og ergonomi i praksis',
  description: 'Lær om helse, miljø og sikkerhet (HMS) i helse- og omsorgssektoren, med vekt på ergonomi, forflytning og forebygging av yrkesskader. Du får praktisk kunnskap om å ta vare på din egen helse i arbeidet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'arbeide i tråd med gjeldende HMS-regelverk',
    'bruke ergonomiske arbeidsteknikker',
    'forebygge yrkesskader og belastningslidelser',
  ],
  content: [
    {
      id: 'hov3-6-3-intro',
      type: 'text',
      content: `## Ta vare på deg selv i jobben

Arbeid i helse- og omsorgssektoren er fysisk og psykisk krevende. Tunge løft, ugunstige arbeidsstillinger og emosjonelle belastninger kan over tid føre til yrkesskader og sykefravær. Godt HMS-arbeid og riktig ergonomi er avgjørende for at du skal holde ut i yrket.

I dette kapittelet skal du lære:
- Hva HMS-arbeid innebærer i helsesektoren
- Ergonomiske prinsipper for forflytning og løft
- Vanlige yrkesskader og hvordan de forebygges
- Dine rettigheter og plikter som arbeidstaker`,
    },
    {
      id: 'hov3-6-3-def-1',
      type: 'definition',
      title: 'HMS',
      content: `**HMS** står for helse, miljø og sikkerhet. HMS-arbeid er systematiske tiltak for å sikre et forsvarlig arbeidsmiljø som ivaretar arbeidstakernes fysiske og psykiske helse. Arbeidsmiljøloven og internkontrollforskriften legger det juridiske grunnlaget for HMS-arbeid i alle norske virksomheter.`,
    },
    {
      id: 'hov3-6-3-text-1',
      type: 'text',
      content: `### HMS i helse- og omsorgssektoren

Helse- og omsorgssektoren har særlige HMS-utfordringer:

**Fysiske belastninger**
- Forflytning og løft av pasienter
- Arbeid i ugunstige stillinger (bøyd, vridd)
- Statisk arbeid (stå, gå, sitte)
- Ensidige, repetitive bevegelser

**Kjemiske og biologiske faktorer**
- Kontakt med kroppsvæsker og smittefarlig materiale
- Bruk av rengjørings- og desinfeksjonsmidler
- Risiko for stikk- og kuttskader
- Allergiutløsende stoffer

**Psykososiale belastninger**
- Tidspress og høyt arbeidspress
- Emosjonelle krav ved arbeid med syke og døende
- Vold og trusler fra brukere
- Nattarbeid og turnusordninger

**Organisatoriske forhold**
- Underbemanning og vikarer
- Manglende opplæring
- Uklare ansvarsforhold
- Lite innflytelse på egen arbeidssituasjon`,
    },
    {
      id: 'hov3-6-3-def-2',
      type: 'definition',
      title: 'Ergonomi',
      content: `**Ergonomi** er læren om tilpasning av arbeid og arbeidsmiljø til menneskets fysiske og psykiske forutsetninger. Målet er å forebygge belastningsskader og sikre at arbeidet kan utføres effektivt uten å skade kroppen.`,
    },
    {
      id: 'hov3-6-3-text-2',
      type: 'text',
      content: `### Ergonomiske prinsipper for forflytning

Forflytning av pasienter er en av de vanligste årsakene til belastningsskader blant helsepersonell. Følgende prinsipper reduserer risikoen:

**1. Vurder situasjonen først**
- Hva kan pasienten gjøre selv?
- Trenger du hjelp fra en kollega?
- Hvilke hjelpemidler er tilgjengelige?
- Er det nok plass?

**2. Bruk kroppen riktig**
- Stå med bena i hoftebredde og knærne lett bøyd
- Hold ryggen rett – bøy i knærne, ikke i ryggen
- Jobb tett inntil pasienten
- Bruk kroppsvekten og tyngdekraften, ikke bare muskelkraft

**3. Bruk hjelpemidler**
- Glidebrett og glidematter
- Personløfter (takløfter, mobil løfter)
- Dreieskive og ståstativ
- Sengemadrass som kan heves og senkes

**4. Samarbeid med pasienten**
- Forklar hva du skal gjøre og hvordan pasienten kan bidra
- Gi tydelige instrukser: «På tre ruller vi»
- Utnytt pasientens restfunksjon
- Gi pasienten tid til å forberede seg`,
    },
    {
      id: 'hov3-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Ergonomisk forflytning fra seng til rullestol',
      content: `**Situasjon:** En beboer med nedsatt bevegelighet skal forflyttes fra seng til rullestol.

**Fremgangsmåte:**
1. Vurder: Beboeren kan støtte noe med bena, men trenger hjelp med overkroppen. Én hjelper er tilstrekkelig med bruk av ståheis.
2. Forbered: Sett rullestolen ved sengen med bremsen på. Hev sengen til riktig høyde. Plasser løfteseilet rundt beboeren.
3. Informer: «Nå skal vi bruke heisen til å flytte deg over i stolen. Prøv å støtte med bena når du kjenner at heisen løfter deg.»
4. Gjennomfør: Aktiver heisen. Drei beboeren sakte over rullestolen. Senk forsiktig ned.
5. Sikre: Sjekk at beboeren sitter godt. Fjern seilet. Sett på fotbrett.

**Viktig:** Uten hjelpemiddel ville denne forflytningen krevd to personer og gitt stor belastning på rygg og skuldre.`,
    },
    {
      id: 'hov3-6-3-text-3',
      type: 'text',
      content: `### Vanlige yrkesskader og forebygging

| Skadetype | Årsak | Forebygging |
|-----------|-------|-------------|
| Ryggplager | Tunge løft, vridning | Bruk hjelpemidler, riktig løfteteknikk |
| Skulder- og nakkeplager | Arbeid over skulderhøyde, statisk belastning | Juster arbeidshøyde, ta pauser |
| Kne- og hofteplager | Mye stående og gående arbeid | Gode sko, variasjon i arbeidet |
| Stikkskader | Kanyler, skarpe gjenstander | Bruk avfallsbokser, aldri sett hetten tilbake |
| Psykiske belastninger | Stress, vold, emosjonelt arbeid | Veiledning, debrifing, gode turnusordninger |

**Forebygging i hverdagen:**
- Bruk alltid tilgjengelige hjelpemidler
- Be om hjelp – det er ikke et svakhetstegn
- Varier arbeidsstillingene dine gjennom dagen
- Ta pauser og strekk deg
- Meld fra om manglende utstyr eller farlige situasjoner`,
    },
    {
      id: 'hov3-6-3-warning-1',
      type: 'warning',
      title: 'Si nei til uforsvarlige løft',
      content: `Du har rett og plikt til å si nei til arbeidsoppgaver som utgjør en alvorlig fare for liv og helse, jf. arbeidsmiljøloven § 2-3. Hvis du blir bedt om å forflytte en tung pasient alene uten hjelpemidler, har du lov til å si fra og be om hjelp eller utstyr. Dokumenter situasjonen som et avvik.`,
    },
    {
      id: 'hov3-6-3-tip-1',
      type: 'tip',
      title: 'Verneombud og tillitsvalgt',
      content: `Verneombudet er arbeidstakernes representant i HMS-spørsmål og har rett til å stanse farlig arbeid. Tillitsvalgt representerer de ansatte i forhandlinger med arbeidsgiver. Begge er viktige støttespillere dersom du opplever problemer med arbeidsmiljøet.`,
    },
    {
      id: 'hov3-6-3-text-4',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **HMS** handler om å sikre et forsvarlig arbeidsmiljø gjennom systematiske tiltak
- **Ergonomi** ved forflytning reduserer risikoen for belastningsskader
- Hjelpemidler som **personløftere, glidematter og dreieskiver** skal alltid brukes når de er tilgjengelige
- Vanlige yrkesskader er ryggplager, skulderplager og stikkskader
- Du har **rett til å si nei** til uforsvarlige arbeidsoppgaver
- **Verneombudet** er din representant i HMS-spørsmål`,
    },
  ],
  exercises: [
    {
      id: 'hov3-6-3-ex-1',
      type: 'multiple-choice',
      task: 'Hva er den vanligste årsaken til yrkesskader blant helsepersonell?',
      options: [
        { id: 'a', text: 'Stikkskader fra kanyler', isCorrect: false },
        { id: 'b', text: 'Tunge løft og forflytning av pasienter', isCorrect: true },
        { id: 'c', text: 'Kontakt med kjemikalier', isCorrect: false },
        { id: 'd', text: 'Vold fra pasienter', isCorrect: false },
      ],
      solution: 'Tunge løft og forflytning av pasienter er den vanligste årsaken til muskel- og skjelettplager blant helsepersonell. Ryggplager er særlig utbredt.',
    },
    {
      id: 'hov3-6-3-ex-2',
      type: 'multiple-choice',
      task: 'Hvilket prinsipp er viktigst ved ergonomisk løfteteknikk?',
      options: [
        { id: 'a', text: 'Løft med armene for å spare ryggen', isCorrect: false },
        { id: 'b', text: 'Bøy i knærne, ikke i ryggen, og hold lasten tett inntil kroppen', isCorrect: true },
        { id: 'c', text: 'Løft raskt for å minimere belastningen', isCorrect: false },
        { id: 'd', text: 'Hold bena samlet for bedre balanse', isCorrect: false },
      ],
      solution: 'Riktig løfteteknikk innebærer å bøye i knærne (ikke i ryggen), holde lasten tett inntil kroppen og bruke beinmuskulaturen. Stå med bena i hoftebredde for god balanse.',
    },
    {
      id: 'hov3-6-3-ex-3',
      type: 'classic',
      task: 'Beskriv fire typer hjelpemidler som kan brukes ved forflytning av pasienter, og forklar når de er aktuelle.',
      hints: ['Tenk på ulike forflytningssituasjoner'],
      solution: '1) Personløfter (takløfter/mobil løfter) – brukes når pasienten ikke kan stå eller støtte med bena, for eksempel ved forflytning fra seng til rullestol. 2) Glidebrett/glidematte – brukes ved sideforflytning, for eksempel fra seng til båre. Reduserer friksjon og behovet for løft. 3) Dreieskive – brukes når pasienten kan stå med støtte og skal dreies, for eksempel fra rullestol til toalett. 4) Ståheis – brukes når pasienten har noe benstyrke og kan stå med støtte, men trenger hjelp til å reise seg og forflytte seg korte avstander.',
    },
    {
      id: 'hov3-6-3-ex-4',
      type: 'classic',
      task: 'Forklar hva verneombudet er og hvilken rolle det har i HMS-arbeidet.',
      solution: 'Verneombudet er arbeidstakernes representant i spørsmål om helse, miljø og sikkerhet. Verneombudet har rett til å stanse farlig arbeid, delta i planlegging av tiltak som angår arbeidsmiljøet, og varsle arbeidsgiver og Arbeidstilsynet ved farlige forhold. Verneombudet velges av og blant de ansatte, og har et særlig vern mot gjengjeldelse. Alle virksomheter med ti eller flere ansatte plikter å ha verneombud.',
    },
    {
      id: 'hov3-6-3-ex-5',
      type: 'classic',
      task: 'Du oppdager at en kollega jevnlig løfter tunge pasienter alene uten hjelpemidler. Hva gjør du?',
      solution: 'Først snakker jeg direkte med kollegaen og uttrykker bekymring for helsen, og minner om at hjelpemidler er tilgjengelige. Dersom kollegaen fortsetter, melder jeg situasjonen som et avvik fordi det er fare for skade. Jeg kan også kontakte verneombudet som kan ta saken videre. Arbeidsgiver har plikt til å sørge for at nødvendige hjelpemidler er tilgjengelige og at ansatte bruker dem. Kollegaen har på sin side plikt til å bruke pålagt verneutstyr etter arbeidsmiljøloven § 2-3.',
    },
  ],
  keyTerms: [
    { term: 'HMS', definition: 'Helse, miljø og sikkerhet – systematisk arbeid for forsvarlig arbeidsmiljø' },
    { term: 'Ergonomi', definition: 'Tilpasning av arbeid til menneskets forutsetninger for å forebygge skader' },
    { term: 'Forflytning', definition: 'Å hjelpe en pasient med å endre stilling eller flytte seg fra ett sted til et annet' },
    { term: 'Verneombud', definition: 'Arbeidstakernes representant i HMS-spørsmål med rett til å stanse farlig arbeid' },
    { term: 'Arbeidsmiljøloven', definition: 'Loven som regulerer arbeidsmiljø, arbeidstid og stillingsvern i Norge' },
  ],
};

// ============================================================================
// Kapittel 6.4: Bærekraft og miljøbevisste valg
// ============================================================================

export const CHAPTER_HOV3_6_4: TextbookChapter = {
  id: 'helseoppvekst-vg3-6-4',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '6.4',
  title: 'Bærekraft og miljøbevisste valg',
  description: 'Lær om bærekraft i helse- og omsorgstjenesten, med fokus på avfallshåndtering, ressursbruk og miljøbevisste valg i den daglige yrkesutøvelsen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjøre miljøbevisste valg i yrkesutøvelsen',
    'sortere avfall etter gjeldende retningslinjer',
    'bidra til bærekraftig drift av tjenesten',
  ],
  content: [
    {
      id: 'hov3-6-4-intro',
      type: 'text',
      content: `## Bærekraft i helsesektoren

Helse- og omsorgssektoren er en stor forbruker av ressurser – energi, vann, engangsutstyr, legemidler og transporttjenester. For å nå FNs bærekraftsmål må også helsetjenesten ta ansvar for å redusere sitt klimaavtrykk, uten å gå på bekostning av kvaliteten på pasientbehandlingen.

I dette kapittelet skal du lære:
- Hva bærekraft betyr i helsetjenesten
- Regler for avfallshåndtering, inkludert smittefarlig avfall
- Hvordan du kan gjøre miljøbevisste valg i hverdagen
- Balansen mellom hygienekrav og miljøhensyn`,
    },
    {
      id: 'hov3-6-4-def-1',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** er utvikling som tilfredsstiller dagens behov uten å ødelegge fremtidige generasjoners muligheter til å tilfredsstille sine behov. I helsesektoren betyr dette å levere gode tjenester med minst mulig negativ påvirkning på miljøet.`,
    },
    {
      id: 'hov3-6-4-text-1',
      type: 'text',
      content: `### Avfallshåndtering i helsesektoren

Helsetjenesten produserer store mengder avfall, og riktig håndtering er avgjørende for både miljø og sikkerhet.

**Avfallskategorier:**

| Kategori | Eksempler | Håndtering |
|----------|-----------|------------|
| Restavfall | Emballasje, bleier (uten smitte) | Vanlig restavfall |
| Smittefarlig avfall | Bandasjer med blod, kontaminert utstyr | Gul boks/pose, forbrenning |
| Stikkende/skjærende | Kanyler, skalpeller, glassamputleer | Gul kanyleboks |
| Kjemisk avfall | Cytostatika, kvikksølv | Spesialmottak |
| Legemiddelrester | Utløpte medisiner, rester | Apotek eller spesialmottak |
| Papp og papir | Kartonger, journalkopier | Resirkuleres |
| Matavfall | Matrester fra kjøkken | Kompost eller biogass |

**Viktig:** Feil håndtering av smittefarlig avfall kan utsette deg selv, kolleger, pasienter og renovasjonsarbeidere for smittefare.`,
    },
    {
      id: 'hov3-6-4-warning-1',
      type: 'warning',
      title: 'Stikkende og skjærende avfall',
      content: `Kanyler, skalpeller og andre skarpe gjenstander skal alltid legges direkte i godkjent kanyleboks uten å sette hetten tilbake på kanylen (recapping). Kanyleboksen skal ikke fylles mer enn 2/3 fulle. Stikkskader er en alvorlig risiko for blodsmitte (hepatitt B, hepatitt C, HIV) og skal alltid meldes som avvik.`,
    },
    {
      id: 'hov3-6-4-text-2',
      type: 'text',
      content: `### Ressursbruk og miljøbevisste valg

Som helsefagarbeider kan du gjøre mange små valg som samlet gir stor effekt:

**Redusere forbruk**
- Unngå unødvendig bruk av engangsutstyr når flergangsutstyr er tilgjengelig
- Bruk riktig mengde rengjørings- og desinfeksjonsmidler – mer er ikke alltid bedre
- Slå av lys og utstyr som ikke er i bruk
- Begrens unødvendig utskrift

**Gjenbruke**
- Bruk flergangstøy og vaskbare forklær der det er forsvarlig
- Gjenbruk møbler og utstyr som fortsatt er funksjonelt
- Del utstyr mellom avdelinger

**Resirkulere**
- Sorter avfall korrekt – papir, plast, glass, metall
- Lever farlig avfall til spesialmottak
- Følg virksomhetens kildesorteringsrutiner

**Balansen mellom hygiene og miljø**
Hygienekrav skal alltid prioriteres over miljøhensyn. Smittevern kan ikke kompromitteres. Men ofte kan man finne løsninger som ivaretar begge hensyn – for eksempel ved å bruke mer miljøvennlige rengjøringsmidler som likevel er effektive mot mikroorganismer.`,
    },
    {
      id: 'hov3-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Miljøbevisste valg på en sykehjemsavdeling',
      content: `En sykehjemsavdeling gjennomgikk sitt forbruk og fant flere forbedringsmuligheter:

**Før:**
- Engangshansker brukt ved all pasientkontakt, også der det ikke var nødvendig
- Lys på i alle fellesarealer hele natten
- Uåpnede matvarer kastet ved utløpsdato

**Etter:**
- Hansker brukes kun ved behov ifølge hygieneprosedyrer – sparer 30 % av forbruket
- Bevegelsessensorer på nattbelysning i fellesarealer – reduserer strømforbruk
- «Først inn, først ut»-system i kjøleskap og bedre planlegging av matinnkjøp – halverer matsvinnet

**Resultat:** Redusert forbruk av materialer og energi, uten at kvaliteten på tjenestene ble svekket.`,
    },
    {
      id: 'hov3-6-4-text-3',
      type: 'text',
      content: `### Grønt sykehus og miljøsertifisering

Mange norske helseinstitusjoner arbeider systematisk med miljø:

**Grønt sykehus**
Spesialisthelsetjenestens miljønettverk som jobber med å redusere klimaavtrykket fra sykehusene. Fokusområder er energi, transport, innkjøp og avfall.

**Miljøfyrtårn**
Norges mest brukte miljøsertifisering for virksomheter. Mange kommunale helse- og omsorgstjenester er miljøfyrtårnsertifisert, noe som innebærer krav til avfallshåndtering, energibruk og innkjøp.

**Din rolle**
Som ansatt kan du bidra ved å:
- Følge virksomhetens miljørutiner
- Foreslå forbedringer du ser i hverdagen
- Være bevisst på eget forbruk
- Inspirere kolleger til miljøbevisste valg`,
    },
    {
      id: 'hov3-6-4-tip-1',
      type: 'tip',
      title: 'Tenk «avfallspyramiden»',
      content: `Avfallspyramiden prioriterer slik: 1) Redusere – bruk mindre. 2) Gjenbruke – bruk om igjen. 3) Resirkulere – sorter og gjenvinne materialet. 4) Energiutnyttelse – forbrenning med energigjenvinning. 5) Deponering – siste utvei. Prøv alltid å starte på toppen av pyramiden.`,
    },
    {
      id: 'hov3-6-4-text-4',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bærekraft** i helsesektoren betyr å levere gode tjenester med minst mulig miljøpåvirkning
- **Avfallshåndtering** krever korrekt sortering, spesielt av smittefarlig og stikkende avfall
- Du kan gjøre **miljøbevisste valg** ved å redusere, gjenbruke og resirkulere
- **Hygienekrav** skal alltid prioriteres over miljøhensyn
- Mange helseinstitusjoner jobber systematisk med miljø gjennom **Grønt sykehus** og **Miljøfyrtårn**`,
    },
  ],
  exercises: [
    {
      id: 'hov3-6-4-ex-1',
      type: 'multiple-choice',
      task: 'Hvordan skal brukte kanyler håndteres?',
      options: [
        { id: 'a', text: 'Sett hetten tilbake på kanylen og kast i restavfall', isCorrect: false },
        { id: 'b', text: 'Legg direkte i godkjent kanyleboks uten å sette hetten tilbake', isCorrect: true },
        { id: 'c', text: 'Pakk inn i papir og kast i smittefarlig avfall', isCorrect: false },
        { id: 'd', text: 'Kast i gul pose sammen med annet smittefarlig avfall', isCorrect: false },
      ],
      solution: 'Brukte kanyler skal legges direkte i godkjent kanyleboks uten å sette hetten tilbake (ingen recapping). Kanyleboksen skal ikke fylles mer enn 2/3. Recapping øker risikoen for stikkskader betydelig.',
    },
    {
      id: 'hov3-6-4-ex-2',
      type: 'multiple-choice',
      task: 'Hva skal prioriteres dersom miljøhensyn og hygienekrav kommer i konflikt?',
      options: [
        { id: 'a', text: 'Miljøhensyn, fordi bærekraft er viktigst', isCorrect: false },
        { id: 'b', text: 'En kompromissløsning som tilfredsstiller begge', isCorrect: false },
        { id: 'c', text: 'Hygienekrav, fordi smittevern ikke kan kompromitteres', isCorrect: true },
        { id: 'd', text: 'Det avhenger av situasjonen og ledelsens vurdering', isCorrect: false },
      ],
      solution: 'Hygienekrav og smittevern skal alltid prioriteres over miljøhensyn. Pasientsikkerheten kan ikke kompromitteres. Men i mange tilfeller finnes det løsninger som ivaretar begge hensyn.',
    },
    {
      id: 'hov3-6-4-ex-3',
      type: 'classic',
      task: 'Beskriv de ulike avfallskategoriene i helsesektoren og gi eksempler på avfall i hver kategori.',
      hints: ['Tenk på restavfall, smittefarlig, stikkende, kjemisk og legemiddelrester'],
      solution: '1) Restavfall – emballasje, bleier uten smitte, vanlig søppel. 2) Smittefarlig avfall – bandasjer med blod, kontaminert utstyr – legges i gul boks/pose for forbrenning. 3) Stikkende/skjærende avfall – kanyler, skalpeller, glassamputleer – legges i kanyleboks. 4) Kjemisk avfall – cytostatika, kvikksølv – sendes til spesialmottak. 5) Legemiddelrester – utløpte medisiner – leveres apotek eller spesialmottak. 6) Papp/papir og matavfall sorteres for resirkulering.',
    },
    {
      id: 'hov3-6-4-ex-4',
      type: 'classic',
      task: 'Gi tre konkrete eksempler på hvordan du som helsefagarbeider kan gjøre miljøbevisste valg i den daglige yrkesutøvelsen.',
      solution: '1) Bruke engangshansker kun når det er nødvendig ifølge hygieneprosedyrer, og ikke «for sikkerhets skyld» – dette reduserer plastforbruk. 2) Sortere avfall korrekt i alle avfallskategorier, og særlig sørge for at resirkulerbart materiale som papp og papir ikke havner i restavfallet. 3) Slå av lys og elektrisk utstyr som ikke er i bruk, for eksempel i rom som står tomme.',
    },
  ],
  keyTerms: [
    { term: 'Bærekraft', definition: 'Utvikling som dekker dagens behov uten å ødelegge for fremtidige generasjoner' },
    { term: 'Smittefarlig avfall', definition: 'Avfall som kan inneholde sykdomsfremkallende mikroorganismer og krever spesiell håndtering' },
    { term: 'Kanyleboks', definition: 'Godkjent beholder for stikkende og skjærende avfall som kanyler og skalpeller' },
    { term: 'Avfallspyramiden', definition: 'Modell som prioriterer å redusere, gjenbruke, resirkulere, energigjenvinne og deponere, i den rekkefølgen' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const HELSEOPPVEKST_VG3_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HOV3_6_1,
  CHAPTER_HOV3_6_2,
  CHAPTER_HOV3_6_3,
  CHAPTER_HOV3_6_4,
];
