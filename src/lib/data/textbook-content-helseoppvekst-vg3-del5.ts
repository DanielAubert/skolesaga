/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Helsearbeiderfaget VG3 - Del 5: Palliasjon, sårbare grupper og vold
 *
 * Kapittel 5.1-5.5
 * Dekker LK20 kompetansemål for helsearbeiderfaget VG3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5: Palliasjon, sårbare grupper og vold
// ============================================================================

// ----------------------------------------------------------------------------
// 5.1 Palliativ omsorg og pleie
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_5_1: TextbookChapter = {
  id: 'hov3-5-1',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '5.1',
  title: 'Palliativ omsorg og pleie',
  description: 'Lindrende behandling, livets sluttfase, verdighet og helhetlig omsorg.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utføre lindrende omsorg og pleie for alvorlig syke og døende',
    'ivareta brukerens behov for verdighet og helhetlig omsorg i livets sluttfase',
    'samarbeide tverrfaglig om palliative tiltak',
  ],
  keyTerms: [
    { term: 'Palliasjon', definition: 'Aktiv behandling, pleie og omsorg for pasienter med alvorlig, uhelbredelig sykdom, der målet er best mulig livskvalitet.' },
    { term: 'Terminal fase', definition: 'De siste dagene eller timene av livet, der døden er nært forestående og behandlingen rettes mot lindring og verdighet.' },
    { term: 'Helhetlig omsorg', definition: 'Omsorg som ivaretar fysiske, psykiske, sosiale og åndelige/eksistensielle behov hos pasienten.' },
    { term: 'Liverpool Care Pathway', definition: 'En tiltaksplan for omsorg i livets siste dager, med fokus på symptomlindring, kommunikasjon og støtte til pårørende.' },
  ],
  content: [
    {
      id: 'hov3-5-1-intro',
      type: 'text',
      content: `## Palliativ omsorg og pleie

Palliativ omsorg handler om å gi best mulig livskvalitet til mennesker med alvorlig, uhelbredelig sykdom. Når sykdommen ikke lenger kan kureres, skifter fokuset fra helbredelse til lindring.

Som helsefagarbeider møter du pasienter i palliativ fase både på sykehus, i sykehjem og i hjemmetjenesten. Din rolle er å:

- Observere og rapportere symptomer som smerte, kvalme og uro
- Utføre praktisk pleie som ivaretar verdighet og komfort
- Være til stede som medmenneske i en sårbar tid
- Samarbeide med sykepleier, lege og andre fagpersoner om tiltak

Verdens helseorganisasjon (WHO) definerer palliasjon som en tilnærming som forbedrer livskvaliteten til pasienter og deres familier som står overfor livstruende sykdom. Palliasjon forebygger og lindrer lidelse gjennom tidlig identifisering, grundig vurdering og behandling av smerte og andre fysiske, psykososiale og åndelige problemer.`,
    },
    {
      id: 'hov3-5-1-def-1',
      type: 'definition',
      title: 'Palliasjon og den palliative fasen',
      content: `**Palliasjon** kommer fra det latinske ordet «pallium», som betyr kappe eller beskyttelse. Palliativ behandling handler om å beskytte pasienten mot unødig lidelse.

**Den palliative fasen deles gjerne inn i:**

**1. Tidlig palliativ fase** - pasienten har uhelbredelig sykdom, men kan leve lenge. Fokus på livskvalitet ved siden av livsforlengende behandling.

**2. Sen palliativ fase** - sykdommen progredierer, livsforlengende behandling avsluttes eller trappes ned. Fokus på symptomlindring.

**3. Terminal fase** - de siste dagene/timene av livet. Fokus på lindring, verdighet og ro.

**Grunnprinsipper i palliativ omsorg:**
- Lindrer smerte og andre plagsomme symptomer
- Bekrefter livet og ser døden som en naturlig prosess
- Verken fremskynder eller utsetter døden
- Integrerer psykologiske og åndelige aspekter
- Tilbyr støtte til pårørende under sykdom og i sorgperioden`,
    },
    {
      id: 'hov3-5-1-def-2',
      type: 'definition',
      title: 'Helhetlig omsorg i livets sluttfase',
      content: `Helhetlig omsorg ved livets slutt ivaretar fire dimensjoner:

**Fysiske behov:**
- Smertelindring og symptomkontroll
- Munnstell, hudpleie og stell av kroppen
- Behagelig leie og temperaturregulering
- Tilpasset ernæring og væsketilførsel

**Psykiske behov:**
- Trygghet og forutsigbarhet
- Mulighet til å uttrykke følelser som angst og sorg
- Ærlig og tilpasset informasjon

**Sosiale behov:**
- Nærhet til familie og venner
- Fleksible besøkstider og tilrettelagt rom
- Hjelp til å ordne praktiske forhold

**Åndelige og eksistensielle behov:**
- Mulighet til å snakke om mening, tro og håp
- Kontakt med prest, imam eller annen åndelig veileder ved ønske
- Respekt for kulturelle og religiøse ritualer`,
    },
    {
      id: 'hov3-5-1-text-1',
      type: 'text',
      content: `### Helsefagarbeiderens rolle i palliativ omsorg

I den palliative fasen er den daglige omsorgen avgjørende for pasientens livskvalitet. Helsefagarbeideren har en unik posisjon fordi du er tett på pasienten gjennom hele døgnet.

**Viktige oppgaver:**
- **Observasjon:** Vurder smerte ved hjelp av smerteskala (NRS eller VAS), observer tegn på uro, kvalme, tungpust og andre symptomer
- **Munnstell:** Svært viktig i terminal fase, da munntørrhet og sopp er vanlig. Fukting av lepper og munnhule gir stor lindring
- **Leiring:** Hyppig stillingsendring forebygger trykksår og gir komfort
- **Tilstedeværelse:** Å sitte hos pasienten, holde i hånden og vise at du er der, er like viktig som praktiske tiltak

**Tegn på at døden nærmer seg:**
- Avtagende bevissthet og økt søvnbehov
- Redusert interesse for mat og drikke
- Endret pustemønster, eventuelt surkling
- Kjølige og marmorerte ekstremiteter
- Nedsatt urinproduksjon`,
    },
    {
      id: 'hov3-5-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Palliativ omsorg handler om å gi best mulig livskvalitet når sykdom ikke kan kureres:

- **Palliasjon** betyr lindring og beskyttelse mot unødig lidelse
- Den palliative fasen deles inn i tidlig, sen og terminal fase
- **Helhetlig omsorg** ivaretar fysiske, psykiske, sosiale og åndelige behov
- Helsefagarbeideren bidrar med observasjon, symptomlindring, munnstell og tilstedeværelse
- Verdighet og respekt for pasientens ønsker er grunnleggende gjennom hele forløpet`,
    },
  ],
  exercises: [
    {
      id: 'hov3-5-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedmålet med palliativ omsorg?',
      options: [
        { id: 'a', text: 'Å kurere sykdommen med intensiv behandling', isCorrect: false },
        { id: 'b', text: 'Å gi best mulig livskvalitet for pasienter med uhelbredelig sykdom', isCorrect: true },
        { id: 'c', text: 'Å forlenge livet så lenge som mulig uavhengig av livskvalitet', isCorrect: false },
        { id: 'd', text: 'Å fremskynde døden for å unngå lidelse', isCorrect: false },
      ],
      solution: 'Palliativ omsorg handler om å gi best mulig livskvalitet når sykdommen ikke kan kureres. Målet er verken å fremskynde eller utsette døden, men å lindre symptomer og ivareta pasientens behov i alle dimensjoner.',
    },
    {
      id: 'hov3-5-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke fire dimensjoner inngår i helhetlig omsorg ved livets slutt?',
      options: [
        { id: 'a', text: 'Fysiske, psykiske, sosiale og åndelige/eksistensielle behov', isCorrect: true },
        { id: 'b', text: 'Medisinske, kirurgiske, rehabiliterende og forebyggende behov', isCorrect: false },
        { id: 'c', text: 'Ernæring, aktivitet, søvn og hygiene', isCorrect: false },
        { id: 'd', text: 'Diagnostikk, behandling, oppfølging og evaluering', isCorrect: false },
      ],
      solution: 'Helhetlig omsorg ved livets slutt ivaretar fire dimensjoner: fysiske behov (smertelindring, stell), psykiske behov (trygghet, mulighet til å uttrykke følelser), sosiale behov (nærhet til familie, praktiske forhold) og åndelige/eksistensielle behov (mening, tro, kulturelle ritualer).',
    },
    {
      id: 'hov3-5-1-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv minst fire tegn på at døden nærmer seg, og forklar hvordan du som helsefagarbeider kan ivareta pasienten i denne fasen.',
      solution: 'Tegn på at døden nærmer seg inkluderer: 1) Avtagende bevissthet og økt søvnbehov. 2) Redusert interesse for mat og drikke. 3) Endret pustemønster, eventuelt surkling i luftveiene. 4) Kjølige og marmorerte ekstremiteter. 5) Nedsatt urinproduksjon. Helsefagarbeideren kan ivareta pasienten gjennom godt munnstell for å lindre munntørrhet, hyppig leiring for komfort, å sitte hos pasienten og holde i hånden, informere og støtte pårørende, og rapportere endringer til sykepleier/lege slik at medikamenter for symptomlindring kan justeres.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-5-1-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom tidlig palliativ fase, sen palliativ fase og terminal fase.',
      solution: 'I tidlig palliativ fase har pasienten en uhelbredelig sykdom, men kan leve lenge. Behandlingen er en kombinasjon av livsforlengende tiltak og livskvalitetstiltak. I sen palliativ fase progredierer sykdommen, og livsforlengende behandling avsluttes eller trappes ned. Fokuset skifter helt til symptomlindring og livskvalitet. I terminal fase er døden nært forestående, gjerne de siste dagene eller timene. All behandling rettes mot lindring, verdighet og ro for pasienten og pårørende. Overgangene mellom fasene er ikke alltid tydelige, og det krever tverrfaglig samarbeid å vurdere når fokuset bør endres.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 5.2 Smertebehandling og symptomkontroll
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_5_2: TextbookChapter = {
  id: 'hov3-5-2',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '5.2',
  title: 'Smertebehandling og symptomkontroll',
  description: 'Smertevurdering, medikamentell og ikke-medikamentell lindring, vanlige symptomer i palliativ fase.',
  estimatedMinutes: 55,
  competenceGoals: [
    'observere og vurdere smerte og andre symptomer hos palliative pasienter',
    'bidra i gjennomføring av medikamentell og ikke-medikamentell smertebehandling',
    'dokumentere og rapportere endringer i symptombilde',
  ],
  keyTerms: [
    { term: 'NRS-skala', definition: 'Numerisk smerteskala fra 0 til 10, der 0 er ingen smerte og 10 er verst tenkelige smerte. Brukes for å kartlegge smerteintensitet.' },
    { term: 'Smertetrappen', definition: 'WHOs tretrinnsmodell for smertebehandling som starter med paracetamol/NSAIDs, deretter svake opioider, og til sist sterke opioider som morfin.' },
    { term: 'Gjennombruddssmerter', definition: 'Forbigående smertetopper som oppstår til tross for at pasienten har adekvat grunnleggende smertebehandling.' },
    { term: 'Ikke-medikamentell lindring', definition: 'Tiltak som lindrer smerte og ubehag uten bruk av legemidler, som leiring, massasje, musikk, varme og kulde.' },
    { term: 'Total smerte', definition: 'Et begrep som beskriver at smerte har fysiske, psykiske, sosiale og åndelige komponenter som alle påvirker smerteopplevelsen.' },
  ],
  content: [
    {
      id: 'hov3-5-2-intro',
      type: 'text',
      content: `## Smertebehandling og symptomkontroll

God smertebehandling er en grunnpilar i palliativ omsorg. Mange pasienter med alvorlig sykdom opplever smerte, og utilstrekkelig smertelindring reduserer livskvaliteten dramatisk.

Cicely Saunders, grunnleggeren av den moderne hospicebevegelsen, introduserte begrepet «total smerte». Dette innebærer at smerte ikke bare er en fysisk opplevelse, men påvirkes av:

- **Fysisk smerte** - selve vevsskaden eller sykdomsprosessen
- **Psykisk smerte** - angst, depresjon, frykt for døden
- **Sosial smerte** - isolasjon, tap av roller, økonomisk bekymring
- **Åndelig smerte** - meningsløshet, eksistensielle spørsmål

Effektiv symptomkontroll krever at alle disse dimensjonene adresseres. Som helsefagarbeider har du en nøkkelrolle i å observere, rapportere og gjennomføre tiltak.`,
    },
    {
      id: 'hov3-5-2-def-1',
      type: 'definition',
      title: 'Smertevurdering og smerteskalaer',
      content: `Systematisk smertevurdering er avgjørende for god smertebehandling. Smerte er subjektiv, og pasientens egen opplevelse er alltid utgangspunktet.

**Vanlige smertekartleggingsverktøy:**

**NRS (Numerisk Rating Scale):** Pasienten angir smerte fra 0-10. Enkelt å bruke for de fleste.

**VAS (Visuell Analog Skala):** En linje fra «ingen smerte» til «verst tenkelige smerte». Pasienten markerer et punkt.

**Ansiktsskala:** Brukes for barn eller personer med kommunikasjonsvansker. Ansikter fra smilende til gråtende.

**ESAS (Edmonton Symptom Assessment System):** Kartlegger flere symptomer samtidig: smerte, tretthet, kvalme, depresjon, angst, appetitt, tungpust, velvære.

**Ved smertevurdering bør du kartlegge:**
- Lokalisasjon - hvor gjør det vondt?
- Intensitet - hvor sterkt (NRS 0-10)?
- Karakter - verkende, stikkende, brennende?
- Varighet - konstant eller anfallsvis?
- Hva forverrer og hva lindrer smerten?`,
    },
    {
      id: 'hov3-5-2-def-2',
      type: 'definition',
      title: 'WHOs smertetrapp',
      content: `**WHOs smertetrapp** er en tretrinnsmodell for opptrapping av smertebehandling:

**Trinn 1:** Ikke-opioide analgetika
- Paracetamol og/eller NSAIDs (f.eks. ibuprofen)
- Brukes ved mild smerte (NRS 1-3)

**Trinn 2:** Svake opioider + trinn 1
- Kodein eller tramadol i kombinasjon med paracetamol
- Brukes ved moderat smerte (NRS 4-6)

**Trinn 3:** Sterke opioider + trinn 1
- Morfin, oksykodon eller fentanyl
- Brukes ved sterk smerte (NRS 7-10)
- Kan gis som tabletter, plaster, injeksjon eller subkutan pumpe

**Tilleggsmedikamenter** kan brukes på alle trinn:
- Kortikosteroider mot hevelse og betennelse
- Antidepressiva eller antiepileptika mot nervesmerter
- Anxiolytika mot angstrelatert smerte

Helsefagarbeideren gir medisiner etter delegasjon og observerer effekt og bivirkninger.`,
    },
    {
      id: 'hov3-5-2-text-1',
      type: 'text',
      content: `### Ikke-medikamentell lindring og andre symptomer

Ikke-medikamentelle tiltak er et viktig supplement til medisiner og kan gjøres av helsefagarbeideren på eget initiativ:

- **Leiring:** Riktig stilling kan redusere smerte og lette pusten
- **Varme og kulde:** Varme putetrekk ved muskelsmerter, kalde kluter ved feber
- **Massasje:** Lett massasje av hender, føtter eller rygg kan gi avspenning
- **Musikk og sanseopplevelser:** Kan redusere angst og smerte
- **Tilstedeværelse og berøring:** Trygghet demper smerteopplevelsen

**Andre vanlige symptomer i palliativ fase:**
- **Kvalme:** Kan skyldes medisiner, forstoppelse eller sykdomsprosessen. Tiltak: kvalmestillende medisiner, frisk luft, små måltider
- **Dyspné (tungpust):** Svært plagsomt. Tiltak: hevet overkropp, vifte/åpent vindu, opioider etter ordinasjon
- **Forstoppelse:** Svært vanlig bivirkning av opioider. Forebygg med laksantia
- **Angst og uro:** Tilstedeværelse, rolig miljø og eventuelt beroligende medisiner`,
    },
    {
      id: 'hov3-5-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

God smertebehandling og symptomkontroll er avgjørende for livskvalitet i palliativ fase:

- **Total smerte** omfatter fysiske, psykiske, sosiale og åndelige dimensjoner
- Systematisk smertevurdering med NRS eller andre verktøy gir grunnlag for behandling
- **WHOs smertetrapp** gir en struktur for opptrapping fra mild til sterk smertelindring
- Ikke-medikamentelle tiltak som leiring, massasje og tilstedeværelse er viktige supplement
- Helsefagarbeideren observerer, rapporterer og gjennomfører tiltak etter plan og delegasjon`,
    },
  ],
  exercises: [
    {
      id: 'hov3-5-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva måler NRS-skalaen (Numerisk Rating Scale)?',
      options: [
        { id: 'a', text: 'Pasientens blodtrykk på en skala fra 0 til 10', isCorrect: false },
        { id: 'b', text: 'Smerteintensitet der pasienten angir smerte fra 0 (ingen) til 10 (verst tenkelige)', isCorrect: true },
        { id: 'c', text: 'Antall medisindoser pasienten trenger per døgn', isCorrect: false },
        { id: 'd', text: 'Pasientens bevissthetsnivå etter Glasgow Coma Scale', isCorrect: false },
      ],
      solution: 'NRS er en enkel numerisk skala der pasienten selv angir sin smerteintensitet fra 0 (ingen smerte) til 10 (verst tenkelige smerte). Den brukes til systematisk smertekartlegging og for å evaluere effekten av smertebehandling over tid.',
    },
    {
      id: 'hov3-5-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er riktig rekkefølge i WHOs smertetrapp?',
      options: [
        { id: 'a', text: 'Sterke opioider → svake opioider → paracetamol', isCorrect: false },
        { id: 'b', text: 'Paracetamol/NSAIDs → svake opioider → sterke opioider', isCorrect: true },
        { id: 'c', text: 'Svake opioider → paracetamol → sterke opioider', isCorrect: false },
        { id: 'd', text: 'Kortikosteroider → NSAIDs → opioider', isCorrect: false },
      ],
      solution: 'WHOs smertetrapp har tre trinn: Trinn 1 er ikke-opioide analgetika (paracetamol og/eller NSAIDs) for mild smerte. Trinn 2 er svake opioider (f.eks. kodein, tramadol) i kombinasjon med trinn 1 for moderat smerte. Trinn 3 er sterke opioider (f.eks. morfin) i kombinasjon med trinn 1 for sterk smerte.',
    },
    {
      id: 'hov3-5-2-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar begrepet «total smerte» og beskriv hvordan du som helsefagarbeider kan bidra til å lindre smerte i de ulike dimensjonene.',
      solution: 'Total smerte er et begrep fra Cicely Saunders som beskriver at smerte har fire dimensjoner: 1) Fysisk smerte - her kan helsefagarbeideren bidra med medikamentadministrering etter delegasjon, leiring, varme/kulde og massasje. 2) Psykisk smerte (angst, frykt) - lindres gjennom tilstedeværelse, lytting, trygghet og forutsigbarhet. 3) Sosial smerte (isolasjon, tap av roller) - lindres ved å tilrettelegge for besøk, hjelpe med kommunikasjon og ivareta sosiale behov. 4) Åndelig smerte (meningsløshet) - lindres ved å lytte til eksistensielle tanker, formidle kontakt med prest eller annen åndelig veileder, og vise respekt for tro og verdier.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-5-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er gjennombruddssmerter?',
      options: [
        { id: 'a', text: 'Smerter som oppstår når pasienten glemmer å ta smertestillende', isCorrect: false },
        { id: 'b', text: 'Forbigående smertetopper som oppstår til tross for adekvat grunnleggende smertebehandling', isCorrect: true },
        { id: 'c', text: 'Smerter som kun oppstår om natten', isCorrect: false },
        { id: 'd', text: 'Smerter som forsvinner av seg selv uten behandling', isCorrect: false },
      ],
      solution: 'Gjennombruddssmerter er forbigående episoder med forsterkede smerter som oppstår selv om pasienten har en pågående grunnleggende smertebehandling som ellers gir tilfredsstillende lindring. De kan utløses av bevegelse, hoste eller aktivitet, men kan også komme uten tydelig årsak. Behandling er behovsmedisin (ekstra smertestillende dose) som virker raskt.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 5.3 Omsorg for pårørende
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_5_3: TextbookChapter = {
  id: 'hov3-5-3',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '5.3',
  title: 'Omsorg for pårørende',
  description: 'Pårørendes rolle, sorgprosesser, støtte og kommunikasjon med pårørende.',
  estimatedMinutes: 50,
  competenceGoals: [
    'ivareta pårørende og gi støtte i sorg og krise',
    'kommunisere med pårørende på en empatisk og profesjonell måte',
    'kjenne til pårørendes rettigheter og tilgjengelige støtteordninger',
  ],
  keyTerms: [
    { term: 'Pårørende', definition: 'Den personen pasienten oppgir som sin nærmeste, som har rett til informasjon og medvirkning i helsehjelpen.' },
    { term: 'Anticipatorisk sorg', definition: 'Sorg som oppstår før dødsfallet, når pårørende forstår at den syke kommer til å dø og begynner å bearbeide tapet på forhånd.' },
    { term: 'Sorgprosess', definition: 'Den naturlige psykologiske prosessen med å bearbeide et tap, som kan inkludere sjokk, protest, desorganisering og nyorientering.' },
    { term: 'Pårørendesamtale', definition: 'Planlagt samtale mellom helsepersonell og pårørende for å informere, avklare forventninger og gi rom for spørsmål og følelser.' },
  ],
  content: [
    {
      id: 'hov3-5-3-intro',
      type: 'text',
      content: `## Omsorg for pårørende

Pårørende er en viktig del av pasientens liv og nettverk. Når en person blir alvorlig syk, rammes hele familien. Pårørende kan oppleve angst, sorg, utmattelse og hjelpeløshet.

Pasient- og brukerrettighetsloven gir pårørende rett til informasjon og medvirkning. I palliativ omsorg er pårørendestøtte en integrert del av behandlingen.

Som helsefagarbeider møter du pårørende daglig. Du kan bidra ved å:

- Lytte og vise forståelse for deres situasjon
- Gi praktisk informasjon om pasientens tilstand og hva de kan forvente
- Invitere dem til å delta i omsorgen dersom de ønsker det
- Sørge for at de får ivaretatt egne behov for mat, hvile og pauser
- Formidle kontakt med sosionom, prest eller andre støttepersoner ved behov`,
    },
    {
      id: 'hov3-5-3-def-1',
      type: 'definition',
      title: 'Sorgprosessen',
      content: `**Sorg** er en naturlig reaksjon på tap. Alle sørger på sin egen måte, og det finnes ingen «riktig» måte å sørge på.

**Vanlige sorgreaksjoner:**
- **Sjokk og fornektelse** - «dette kan ikke stemme», følelsesmessig nummenhet
- **Protest og sinne** - frustrasjon, sinne mot sykdommen, helsevesenet eller Gud
- **Fortvilelse og smerte** - dyp tristhet, gråt, søvnproblemer, appetittløshet
- **Nyorientering** - gradvis aksept og tilpasning til ny livssituasjon

**Anticipatorisk sorg** er sorg som oppstår før dødsfallet. Pårørende kan begynne å sørge over tap av den personen de kjente, over fremtidsplaner som aldri blir virkelighet, og over livet slik det var. Dette er en normal reaksjon.

**Komplisert sorg** kan oppstå når sorgen blir fastlåst eller overveldende over lang tid. Tegn kan være langvarig funksjonsnedsettelse, vedvarende fornektelse, eller intens bitterhet. Slike tilfeller bør henvises til profesjonell hjelp.`,
    },
    {
      id: 'hov3-5-3-def-2',
      type: 'definition',
      title: 'Kommunikasjon med pårørende',
      content: `God kommunikasjon med pårørende krever empati, tydelighet og profesjonalitet.

**Viktige prinsipper:**

**1. Vær tilgjengelig:** Vis at du har tid, selv om det bare er noen minutter. Sett deg ned, ha øyekontakt.

**2. Lytt aktivt:** La pårørende snakke ferdig. Still åpne spørsmål som «hvordan har du det?»

**3. Anerkjenn følelser:** «Jeg forstår at dette er veldig vanskelig for dere.» Unngå å bagatellisere.

**4. Gi ærlig informasjon:** Vær ærlig om situasjonen, men tilpass informasjonen. Helsefagarbeideren informerer om daglig stell og observasjoner, mens lege/sykepleier informerer om diagnose og prognose.

**5. Tål stillhet og tårer:** Du trenger ikke å si noe klokt. Å være til stede er nok.

**6. Ivareta taushetsplikten:** Del kun informasjon som pasienten har samtykket til. Pårørende har ikke automatisk rett til all informasjon.`,
    },
    {
      id: 'hov3-5-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

Omsorg for pårørende er en viktig del av helsefagarbeiderens rolle:

- Pårørende rammes også når en person blir alvorlig syk, og har behov for støtte og informasjon
- **Sorgprosessen** er individuell, men kan inkludere sjokk, sinne, fortvilelse og nyorientering
- **Anticipatorisk sorg** er vanlig og normalt hos pårørende til alvorlig syke
- God kommunikasjon med pårørende handler om tilstedeværelse, aktiv lytting og ærlig informasjon
- Helsefagarbeideren kan formidle kontakt med sosionom, prest eller andre ved behov for ekstra støtte`,
    },
  ],
  exercises: [
    {
      id: 'hov3-5-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med anticipatorisk sorg?',
      options: [
        { id: 'a', text: 'Sorg som oppstår mange år etter et dødsfall', isCorrect: false },
        { id: 'b', text: 'Sorg som oppstår før dødsfallet, når pårørende forstår at den syke kommer til å dø', isCorrect: true },
        { id: 'c', text: 'Sorg som oppstår hos helsepersonell etter et dødsfall', isCorrect: false },
        { id: 'd', text: 'Sorg som kun rammer barn som mister foreldre', isCorrect: false },
      ],
      solution: 'Anticipatorisk sorg er sorg som oppstår før selve dødsfallet. Pårørende begynner å bearbeide tapet når de forstår at den syke kommer til å dø. De sørger over den personen de kjente, over fremtidsplaner som aldri blir virkelighet, og over endringer i relasjonen. Dette er en normal og sunn reaksjon.',
    },
    {
      id: 'hov3-5-3-ex-2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Du jobber på sykehjem, og ektefellen til en døende beboer sitter gråtende ved sengen. Beskriv hvordan du ville møtt denne pårørende.',
      solution: 'Jeg ville nærmet meg rolig og satt meg ned ved siden av ektefellen. Først ville jeg bare vært til stede uten å si mye, og tålt stillheten og tårene. Deretter ville jeg sagt noe anerkjennende som «jeg ser at dette er veldig tungt for deg». Jeg ville lyttet til hva ektefellen eventuelt ønsket å fortelle, uten å avbryte eller komme med floskler som «det ordner seg». Jeg ville spurt om det var noe jeg kunne gjøre - kanskje hente et glass vann, en kopp kaffe, eller en ekstra stol. Jeg ville informert om at det er helt greit å være her så lenge man ønsker, og at vi kan tilrettelegge for overnatting hvis ønskelig. Til slutt ville jeg forsikret meg om at ektefellen vet hvem han/hun kan kontakte dersom det trengs noe, og tilbudt å formidle kontakt med prest eller sosionom.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-5-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er det viktigste du kan gjøre for en pårørende som gråter og er fortvilet?',
      options: [
        { id: 'a', text: 'Si at de ikke bør gråte foran pasienten fordi det gjør pasienten urolig', isCorrect: false },
        { id: 'b', text: 'Forsøke å avlede med positivt snakk for å muntre dem opp', isCorrect: false },
        { id: 'c', text: 'Være til stede, lytte og anerkjenne følelsene deres', isCorrect: true },
        { id: 'd', text: 'Gi dem informasjonsbrosjyrer om sorggrupper og forlate rommet', isCorrect: false },
      ],
      solution: 'Det viktigste du kan gjøre er å være til stede, lytte aktivt og anerkjenne følelsene. Du trenger ikke å si noe klokt eller løse situasjonen. Å tåle tårer og stillhet, og vise at du bryr deg, er den mest verdifulle støtten du kan gi. Å bagatellisere, avlede eller forlate rommet kan oppleves som avvisning.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 5.4 Vold, overgrep og omsorgssvikt
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_5_4: TextbookChapter = {
  id: 'hov3-5-4',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '5.4',
  title: 'Vold, overgrep og omsorgssvikt',
  description: 'Typer vold, tegn på overgrep, avvergeplikt, dokumentasjon og oppfølging.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne igjen tegn på vold, overgrep og omsorgssvikt',
    'kjenne til meldeplikt og avvergeplikt ved mistanke om vold og overgrep',
    'handle profesjonelt og ivareta sårbare brukere ved mistanke om vold',
  ],
  keyTerms: [
    { term: 'Omsorgssvikt', definition: 'Når omsorgspersoner ikke gir barnet eller den sårbare personen den omsorgen, tryggheten og beskyttelsen som er nødvendig for helse og utvikling.' },
    { term: 'Avvergeplikt', definition: 'Plikten alle har etter straffeloven til å forsøke å avverge alvorlige straffbare handlinger som vold og overgrep, gjennom å melde fra til politi eller barnevern.' },
    { term: 'Vold i nære relasjoner', definition: 'Vold som utøves av nåværende eller tidligere partner, familiemedlemmer eller andre nære personer. Kan være fysisk, psykisk, seksuell eller økonomisk.' },
    { term: 'Meldeplikt', definition: 'Helsepersonells lovpålagte plikt til å melde fra til barnevernet eller andre myndigheter ved bekymring for et barns omsorgssituasjon.' },
    { term: 'Grooming', definition: 'En prosess der en overgriper bygger tillit og relasjon til et barn eller sårbar person med formål om å utnytte vedkommende seksuelt.' },
  ],
  content: [
    {
      id: 'hov3-5-4-intro',
      type: 'text',
      content: `## Vold, overgrep og omsorgssvikt

Som helsefagarbeider kan du møte brukere som er utsatt for vold, overgrep eller omsorgssvikt. Dette gjelder barn, eldre, personer med funksjonsnedsettelser og andre sårbare grupper. Du har en viktig rolle i å oppdage, handle og melde fra.

**Typer vold:**
- **Fysisk vold** - slag, spark, lugging, klyping, holding, bruk av gjenstander
- **Psykisk vold** - trusler, ydmykelse, kontroll, isolasjon, emosjonell neglekt
- **Seksuell vold** - uønsket seksuell kontakt, overgrep, tvang
- **Økonomisk vold** - kontroll over økonomi, hindre tilgang til egne penger
- **Omsorgssvikt** - manglende ivaretakelse av grunnleggende behov
- **Digital vold** - trakassering, overvåking og kontroll via digitale verktøy

Vold i nære relasjoner er et folkehelseproblem. Forskning viser at kvinner, barn, eldre og personer med funksjonsnedsettelser er særlig utsatte.`,
    },
    {
      id: 'hov3-5-4-def-1',
      type: 'definition',
      title: 'Tegn på vold og overgrep',
      content: `Det er viktig å kjenne til tegn som kan tyde på vold, overgrep eller omsorgssvikt:

**Fysiske tegn:**
- Uforklarte blåmerker, sår, brannskader eller brudd
- Merker etter grep, biting eller gjenstander
- Skader i ulike tilhelingsfaser (tyder på gjentatt vold)
- Underernæring eller dehydrering uten medisinsk forklaring

**Atferdsmessige tegn:**
- Frykt for bestemte personer, skvetter ved berøring
- Tilbaketrekning, depresjon, angst
- Unaturlig lydighet eller underdanighet
- Selvskading eller selvmordstanker
- Endret atferd når bestemt person er til stede

**Tegn i relasjonen:**
- Omsorgsperson som kontrollerer, overvåker eller isolerer
- Motstridende forklaringer på skader fra bruker og pårørende
- Bruker som ikke får snakke alene med helsepersonell
- Uvanlig engstelse hos bruker når pårørende omtales

**Hos barn spesielt:**
- Forsinket utvikling, dårlig vekst
- Hyppige fravær fra skole eller barnehage
- Seksualisert atferd som ikke er aldersadekvat`,
    },
    {
      id: 'hov3-5-4-def-2',
      type: 'definition',
      title: 'Avvergeplikt og meldeplikt',
      content: `**Avvergeplikten** (straffeloven § 196) gjelder alle borgere. Du har plikt til å søke å avverge alvorlige straffbare handlinger som mishandling, voldtekt og drap. Avvergeplikten går foran taushetsplikten.

**Meldeplikten** (helsepersonelloven § 33) gjelder for helsepersonell. Du plikter å melde fra til barnevernet dersom du har grunn til å tro at et barn utsettes for mishandling, alvorlig omsorgssvikt eller andre forhold som kan skade barnets helse og utvikling.

**Hva gjør du ved mistanke?**
1. **Dokumenter observasjoner** - skriv ned hva du ser og hører, objektivt og konkret
2. **Meld videre internt** - informer nærmeste leder eller ansvarlig sykepleier
3. **Ikke konfronter den mistenkte overgriperen** - dette kan sette brukeren i fare
4. **Snakk med brukeren alene** - spør forsiktig om hva som har skjedd, men unngå ledende spørsmål
5. **Kontakt rette instans** - barnevern, politi eller krisetelefon etter situasjonens alvorlighetsgrad

**Viktig:** Du trenger ikke å bevise at overgrep har skjedd. Det er nok at du har grunn til bekymring.`,
    },
    {
      id: 'hov3-5-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Vold, overgrep og omsorgssvikt er alvorlige problemstillinger som helsefagarbeidere må kjenne til:

- Det finnes flere typer vold: fysisk, psykisk, seksuell, økonomisk og omsorgssvikt
- Kjenn til tegn som kan tyde på vold og overgrep, både fysiske og atferdsmessige
- **Avvergeplikten** gjelder alle og går foran taushetsplikten ved alvorlige straffbare handlinger
- **Meldeplikten** pålegger helsepersonell å melde fra til barnevernet ved bekymring for barn
- Dokumenter objektivt, meld internt til leder, og kontakt rette instans
- Du trenger ikke bevise overgrep for å melde fra - det er nok med begrunnet bekymring`,
    },
  ],
  exercises: [
    {
      id: 'hov3-5-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva innebærer avvergeplikten?',
      options: [
        { id: 'a', text: 'At du har plikt til å melde fra til barnevernet om alle bekymringer du har for barn', isCorrect: false },
        { id: 'b', text: 'At alle borgere har plikt til å forsøke å avverge alvorlige straffbare handlinger som mishandling og overgrep', isCorrect: true },
        { id: 'c', text: 'At du som helsepersonell har plikt til å behandle skadene selv', isCorrect: false },
        { id: 'd', text: 'At du har plikt til å konfrontere den mistenkte overgriperen', isCorrect: false },
      ],
      solution: 'Avvergeplikten etter straffeloven § 196 gjelder alle borgere, ikke bare helsepersonell. Den innebærer en plikt til å forsøke å avverge alvorlige straffbare handlinger som mishandling, voldtekt og drap, enten ved å melde fra til politi eller på annen måte gripe inn. Avvergeplikten går foran taushetsplikten.',
    },
    {
      id: 'hov3-5-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Du jobber i hjemmetjenesten og legger merke til at en eldre bruker har flere blåmerker på armene i ulike tilhelingsfaser. Brukeren bor sammen med sin voksne sønn. Hva gjør du?',
      options: [
        { id: 'a', text: 'Spør sønnen direkte om han slår moren sin', isCorrect: false },
        { id: 'b', text: 'Tenker at eldre lett får blåmerker og gjør ingenting', isCorrect: false },
        { id: 'c', text: 'Dokumenterer observasjonene objektivt og melder fra til nærmeste leder', isCorrect: true },
        { id: 'd', text: 'Forteller brukeren at hun bør anmelde sønnen', isCorrect: false },
      ],
      solution: 'Riktig handling er å dokumentere observasjonene objektivt og konkret (hva du ser, hvor, tilhelingsfaser) og melde fra til nærmeste leder. Du skal ikke konfrontere den mistenkte overgriperen, da dette kan sette brukeren i fare. Du skal heller ikke bagatellisere tegn som kan tyde på vold. Blåmerker i ulike tilhelingsfaser er et tegn som bør tas alvorlig.',
    },
    {
      id: 'hov3-5-4-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom avvergeplikt og meldeplikt, og gi eksempler på situasjoner der de utløses.',
      solution: 'Avvergeplikten (straffeloven § 196) gjelder alle borgere og handler om å forsøke å avverge alvorlige straffbare handlinger som mishandling, voldtekt og drap. Eksempel: Du hører en nabo true med å drepe sin partner - da har du plikt til å ringe politiet. Meldeplikten (helsepersonelloven § 33) gjelder spesifikt helsepersonell og handler om plikt til å melde fra til barnevernet ved bekymring for barns omsorgssituasjon. Eksempel: Du observerer at et barn alltid er skittent, underernært og engstelig når foreldrene henter i barnehage - da skal du melde til barnevernet. Begge pliktene går foran taushetsplikten.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-5-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type vold handler om å kontrollere en persons økonomi og hindre tilgang til egne penger?',
      options: [
        { id: 'a', text: 'Fysisk vold', isCorrect: false },
        { id: 'b', text: 'Psykisk vold', isCorrect: false },
        { id: 'c', text: 'Økonomisk vold', isCorrect: true },
        { id: 'd', text: 'Digital vold', isCorrect: false },
      ],
      solution: 'Økonomisk vold innebærer at overgriperen kontrollerer den utsattes økonomi, hindrer tilgang til egne penger, tvinger til økonomiske forpliktelser eller utnytter økonomisk avhengighet. Dette er en form for maktutøvelse som kan gjøre det vanskelig for den utsatte å bryte ut av forholdet.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 5.5 Selvmordsforebygging og krisehåndtering
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_5_5: TextbookChapter = {
  id: 'hov3-5-5',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '5.5',
  title: 'Selvmordsforebygging og krisehåndtering',
  description: 'Risikofaktorer, samtale om selvmordstanker, kriseplaner og oppfølging.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjenkjenne risikofaktorer og varseltegn for selvmord',
    'gjennomføre en ivaretakende samtale ved mistanke om selvmordstanker',
    'kjenne til rutiner for krisehåndtering og varsling ved akutt selvmordsfare',
  ],
  keyTerms: [
    { term: 'Selvmordstanker', definition: 'Tanker om å ta sitt eget liv, som varierer fra vage ønsker om å ikke leve til konkrete planer. Vanligere enn mange tror, og viktig å snakke om.' },
    { term: 'Risikofaktorer', definition: 'Forhold som øker sannsynligheten for selvmordsatferd, som psykisk lidelse, rusmisbruk, tidligere selvmordsforsøk, tap og ensomhet.' },
    { term: 'Beskyttelsesfaktorer', definition: 'Forhold som reduserer risikoen for selvmord, som sosial støtte, mestringsopplevelser, tilhørighet og tilgang til hjelp.' },
    { term: 'Kriseplan', definition: 'En skriftlig plan som beskriver hva personen selv og andre skal gjøre ved forverring av psykisk helse eller selvmordstanker.' },
  ],
  content: [
    {
      id: 'hov3-5-5-intro',
      type: 'text',
      content: `## Selvmordsforebygging og krisehåndtering

Selvmord er et alvorlig folkehelseproblem. I Norge tar rundt 650 mennesker sitt eget liv hvert år, og langt flere gjør selvmordsforsøk eller har selvmordstanker. Som helsefagarbeider kan du møte mennesker i krise, og det er viktig at du tør å spørre og vet hva du skal gjøre.

**Viktige fakta:**
- Å spørre om selvmordstanker øker ikke risikoen - tvert imot kan det oppleves som en lettelse
- De fleste som har selvmordstanker, ønsker egentlig ikke å dø, men å slippe smerten
- Selvmordstanker er ofte forbigående og kan behandles
- Tilgang til hjelp og støtte er avgjørende for å forebygge selvmord

Helsefagarbeidere jobber tett på mennesker i sårbare livssituasjoner - eldre, kronisk syke, personer med psykiske lidelser. Du kan være den som fanger opp varselstegnene og sørger for at personen får hjelp.`,
    },
    {
      id: 'hov3-5-5-def-1',
      type: 'definition',
      title: 'Risikofaktorer og varseltegn',
      content: `**Risikofaktorer for selvmord:**
- Tidligere selvmordsforsøk (den sterkeste enkeltstående risikofaktoren)
- Psykisk lidelse, spesielt depresjon, bipolar lidelse og ruslidelser
- Alvorlig somatisk sykdom med smerte og funksjonstap
- Tap og kriser - samlivsbrudd, dødsfall, jobb, økonomiske problemer
- Ensomhet og sosial isolasjon
- Tilgang til midler (våpen, medikamenter)
- Selvmord i nær familie

**Varseltegn å være oppmerksom på:**
- Uttalelser om håpløshet: «det hadde vært bedre om jeg ikke var her»
- Tilbaketrekning fra sosiale aktiviteter
- Gi bort personlige eiendeler
- Plutselig ro etter en periode med uro (kan tyde på at en beslutning er tatt)
- Økt alkohol- eller rusbruk
- Søking etter metoder for selvmord

**Beskyttelsesfaktorer:**
- Gode sosiale relasjoner og tilhørighet
- Mestringsopplevelser og fremtidshåp
- Tilgang til behandling for psykisk lidelse
- Begrensning av tilgang til farlige midler`,
    },
    {
      id: 'hov3-5-5-def-2',
      type: 'definition',
      title: 'Samtale om selvmordstanker',
      content: `Å snakke om selvmordstanker er vanskelig, men viktig. Du trenger ikke å være terapeut for å gjøre en forskjell.

**Hvordan ta opp temaet:**

**1. Vær direkte men omsorgsfull:**
«Jeg legger merke til at du har det vanskelig. Noen ganger når folk har det så tungt, kan de tenke på å ta livet sitt. Er det noe du tenker på?»

**2. Lytt uten å dømme:**
Ikke si «du har jo så mye å leve for» eller «tenk på familien din». La personen fortelle om sin smerte.

**3. Ta det på alvor:**
Aldri avfei selvmordstanker som oppmerksomhetssøking. Ta alle uttalelser om selvmord på alvor.

**4. Spør om plan:**
«Har du tenkt på hvordan du ville gjort det?» En konkret plan øker alvorlighetsgraden.

**5. Sikre trygghet:**
Ikke la personen være alene. Fjern eventuelt tilgjengelige midler. Kontakt sykepleier, lege eller legevakt.

**6. Formidle håp:**
«Det finnes hjelp. Vi skal sørge for at du får den hjelpen du trenger.»`,
    },
    {
      id: 'hov3-5-5-text-1',
      type: 'text',
      content: `### Krisehåndtering og varsling

Når du oppdager akutt selvmordsfare, er rask handling avgjørende.

**Akutt krisehåndtering:**
1. Forlat ikke personen - sørg for at noen er til stede hele tiden
2. Kontakt ansvarlig sykepleier eller lege umiddelbart
3. Fjern tilgjengelige midler (medikamenter, skarpe gjenstander)
4. Ring 113 ved akutt fare for liv

**Viktige telefonnumre:**
- Nødtelefon: 113
- Mental helse-hjelpetelefonen: 116 123
- Kirkens SOS: 22 40 00 40

**Etter en krise:**
- Dokumenter hendelsen grundig
- Delta i debriefing med teamet
- Sørg for at det lages en kriseplan for brukeren
- Ivareta din egen reaksjon - det er normalt å bli berørt

En **kriseplan** er et viktig verktøy som beskriver varseltegn personen selv skal se etter, mestringsstrategier, kontaktpersoner og hva som skal gjøres ved forverring. Helsefagarbeideren kan bidra i oppfølgingen av kriseplanen.`,
    },
    {
      id: 'hov3-5-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

Selvmordsforebygging er en oppgave som angår alle i helsetjenesten:

- Selvmordstanker er vanligere enn mange tror, og det er trygt å spørre om det
- Kjenn til risikofaktorer (tidligere forsøk, psykisk lidelse, tap) og varseltegn (håpløshet, tilbaketrekning)
- **Beskyttelsesfaktorer** som sosial støtte og tilgang til hjelp er viktige å styrke
- Vær direkte men omsorgsfull i samtalen, og ta alle uttalelser om selvmord på alvor
- Ved akutt fare: ikke forlat personen, kontakt sykepleier/lege, ring 113 ved behov
- Ivareta deg selv etter krevende situasjoner - det er normalt å bli berørt`,
    },
  ],
  exercises: [
    {
      id: 'hov3-5-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Stemmer det at å spørre noen om selvmordstanker kan øke risikoen for at de tar selvmord?',
      options: [
        { id: 'a', text: 'Ja, det kan plante ideen i hodet på dem', isCorrect: false },
        { id: 'b', text: 'Nei, forskning viser at det tvert imot kan oppleves som en lettelse å bli spurt', isCorrect: true },
        { id: 'c', text: 'Ja, man bør aldri snakke om selvmord med noen som er deprimert', isCorrect: false },
        { id: 'd', text: 'Det vet man ikke, forskningen er usikker', isCorrect: false },
      ],
      solution: 'Forskning viser tydelig at å spørre om selvmordstanker ikke øker risikoen for selvmord. Tvert imot opplever mange det som en lettelse å bli spurt direkte, fordi det viser at noen ser dem og bryr seg. Å unngå temaet kan derimot gjøre at personen føler seg enda mer alene med tankene sine.',
    },
    {
      id: 'hov3-5-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den sterkeste enkeltstående risikofaktoren for selvmord?',
      options: [
        { id: 'a', text: 'Ensomhet og sosial isolasjon', isCorrect: false },
        { id: 'b', text: 'Alvorlig somatisk sykdom', isCorrect: false },
        { id: 'c', text: 'Tidligere selvmordsforsøk', isCorrect: true },
        { id: 'd', text: 'Økonomiske problemer', isCorrect: false },
      ],
      solution: 'Tidligere selvmordsforsøk er den sterkeste enkeltstående risikofaktoren for selvmord. Selv om alle alternativene er reelle risikofaktorer, viser forskning at personer som har forsøkt selvmord tidligere, har betydelig høyere risiko for nye forsøk. Derfor er det spesielt viktig med oppfølging etter et selvmordsforsøk.',
    },
    {
      id: 'hov3-5-5-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva du konkret ville gjort dersom en bruker sier til deg: «Jeg orker ikke mer. Det hadde vært bedre for alle om jeg ikke var her.»',
      solution: 'Først ville jeg tatt uttalelsen på alvor og ikke avfeid den. Jeg ville satt meg ned og spurt direkte men omsorgfullt: «Det høres ut som du har det veldig vanskelig. Tenker du på å ta livet ditt?» Deretter ville jeg lyttet uten å dømme eller komme med motargumenter. Hvis personen bekrefter selvmordstanker, ville jeg spurt om vedkommende har en konkret plan. Jeg ville sørget for å ikke la personen være alene og umiddelbart kontaktet ansvarlig sykepleier eller lege. Eventuelle farlige gjenstander eller medikamenter ville jeg fjernet fra omgivelsene. Jeg ville formidlet håp: «Det finnes hjelp, og vi skal sørge for at du får den hjelpen du trenger.» Etterpå ville jeg dokumentert samtalen og hendelsen, og deltatt i eventuelle oppfølgingsmøter.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-5-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva bør du gjøre først dersom du mistenker akutt selvmordsfare hos en bruker?',
      options: [
        { id: 'a', text: 'Dokumentere hendelsen i journalen før du gjør noe annet', isCorrect: false },
        { id: 'b', text: 'Sørge for at personen ikke er alene, og kontakte ansvarlig sykepleier eller lege umiddelbart', isCorrect: true },
        { id: 'c', text: 'Ringe pårørende og be dem komme', isCorrect: false },
        { id: 'd', text: 'Gi personen rom og tid alene til å tenke seg om', isCorrect: false },
      ],
      solution: 'Ved akutt selvmordsfare er det viktigste å sørge for at personen ikke er alene, og umiddelbart kontakte ansvarlig sykepleier eller lege. Å la personen være alene kan være farlig. Dokumentasjon er viktig, men kommer etter at personen er sikret. Ved akutt fare for liv ringer du 113.',
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const HELSEOPPVEKST_VG3_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HOV3_5_1,
  CHAPTER_HOV3_5_2,
  CHAPTER_HOV3_5_3,
  CHAPTER_HOV3_5_4,
  CHAPTER_HOV3_5_5,
];
