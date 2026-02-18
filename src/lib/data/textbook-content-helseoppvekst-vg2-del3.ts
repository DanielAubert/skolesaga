/* eslint-disable */
// @ts-nocheck
/**
 * Helsearbeiderfag VG2 - Del 3: Sykdomslære og observasjon
 * Kapittel 3.1-3.7
 *
 * Dekker LK20 kompetansemål:
 * - observere og rapportere om pasientens helsetilstand
 * - gjøre rede for vanlige sykdommer og lidelser
 * - utføre grunnleggende sykepleie og omsorg
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Allmenntilstand og observasjon
// ============================================================================

export const CHAPTER_HOV2_3_1: TextbookChapter = {
  id: 'hov2-3-1',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '3.1',
  title: 'Allmenntilstand og observasjon',
  description: 'Lær om systematisk observasjon av pasienter, vitale tegn og ABCDE-prinsippet for rask vurdering av helsetilstand.',
  estimatedMinutes: 55,
  competenceGoals: ['observere og rapportere om pasientens helsetilstand'],
  keyTerms: [
    { term: 'Vitale tegn', definition: 'Målbare verdier som puls, blodtrykk, temperatur, respirasjon og oksygenmetning' },
    { term: 'ABCDE-prinsippet', definition: 'Systematisk prioriteringsrekkefølge: Airway, Breathing, Circulation, Disability, Exposure' },
    { term: 'Allmenntilstand', definition: 'En helhetsvurdering av pasientens generelle helsetilstand' },
    { term: 'NEWS2', definition: 'National Early Warning Score - skåringssystem for tidlig oppdagelse av forverring' },
  ],
  content: [
    {
      id: 'hov2-3-1-intro',
      type: 'text',
      content: `## Observasjon av pasienter

Observasjon er en av de viktigste ferdighetene du lærer som helsefagarbeider. Å oppdage endringer i en pasients tilstand tidlig kan være avgjørende for utfallet. God observasjon krever kunnskap om hva som er normalt, slik at du raskt kan gjenkjenne avvik.

I dette kapittelet skal du lære:
- Hva allmenntilstand betyr og hvordan du vurderer den
- De fem vitale tegnene og normalverdier
- ABCDE-prinsippet for systematisk vurdering
- Hvordan du dokumenterer og rapporterer observasjoner`,
    },
    {
      id: 'hov2-3-1-def-1',
      type: 'definition',
      title: 'Allmenntilstand',
      content: `**Allmenntilstand** er en helhetsvurdering av pasientens generelle helsetilstand. Den omfatter bevissthetsnivå, hudfarve, ernæringsstatus, respirasjon, smertetegn og psykisk tilstand. Allmenntilstanden beskrives ofte som god, redusert eller dårlig.`,
    },
    {
      id: 'hov2-3-1-text-1',
      type: 'text',
      content: `### Vitale tegn

De vitale tegnene gir objektive mål på kroppens grunnleggende funksjoner. Som helsefagarbeider må du kunne måle og tolke disse verdiene:

**1. Puls (hjertefrekvens)**
- Normalverdi voksne: 60-100 slag per minutt
- Måles på håndleddet (arteria radialis) eller halsen (arteria carotis)
- Vurder frekvens, rytme og fylde

**2. Blodtrykk**
- Normalverdi voksne: ca. 120/80 mmHg
- Systolisk trykk: trykket når hjertet trekker seg sammen
- Diastolisk trykk: trykket når hjertet slapper av
- Hypertensjon: vedvarende blodtrykk over 140/90 mmHg

**3. Temperatur**
- Normalverdi: 36,5-37,5 °C
- Feber: over 38,0 °C
- Hypotermi: under 35,0 °C
- Måles i øret, munnen, armhulen eller rektalt

**4. Respirasjon (pustefrekvens)**
- Normalverdi voksne: 12-20 pust per minutt
- Vurder frekvens, dybde, rytme og lyder
- Tell uten at pasienten vet det, slik at pustingen er naturlig

**5. Oksygenmetning (SpO2)**
- Normalverdi: 95-100 %
- Måles med pulsoksymeter på fingeren
- Under 90 % er kritisk lavt`,
    },
    {
      id: 'hov2-3-1-def-2',
      type: 'definition',
      title: 'ABCDE-prinsippet',
      content: `**ABCDE-prinsippet** er en systematisk tilnærming til vurdering av akutt syke pasienter. Bokstavene står for: **A** = Airway (luftveier), **B** = Breathing (respirasjon), **C** = Circulation (sirkulasjon), **D** = Disability (bevissthet), **E** = Exposure (undersøkelse/eksponering). Du vurderer alltid i denne rekkefølgen og løser livstruende problemer før du går videre.`,
    },
    {
      id: 'hov2-3-1-text-2',
      type: 'text',
      content: `### ABCDE i praksis

Når du møter en pasient med endret tilstand, bruker du ABCDE systematisk:

**A - Airway (Luftveier)**
- Er luftveiene frie?
- Snakker pasienten normalt?
- Er det stridor (hvesende lyd ved innpust)?

**B - Breathing (Respirasjon)**
- Teller pustefrekvens
- Måler oksygenmetning
- Observerer bruk av hjelpemuskler
- Lytter etter unormale pustelyder

**C - Circulation (Sirkulasjon)**
- Måler puls og blodtrykk
- Vurderer hudfarge og kapillær refill
- Sjekker om huden er kald og klam
- Spør om brystsmerter

**D - Disability (Bevissthet)**
- Bruker AVPU-skala: Alert, Voice, Pain, Unresponsive
- Sjekker pupillreaksjon
- Måler blodsukker

**E - Exposure (Undersøkelse)**
- Måler temperatur
- Ser etter utslett, hevelser eller skader
- Holder pasienten varm`,
    },
    {
      id: 'hov2-3-1-tip-1',
      type: 'tip',
      title: 'Rapportering med ISBAR',
      content: `Når du skal rapportere en endring i pasientens tilstand til sykepleier eller lege, bruk ISBAR-strukturen: **I**dentifikasjon (hvem ringer, hvem gjelder det), **S**ituasjon (hva er problemet nå), **B**akgrunn (relevant sykehistorie), **A**ktuell vurdering (hva finner du), **R**åd (hva trenger du hjelp til). Dette sikrer at viktig informasjon ikke glemmes.`,
    },
    {
      id: 'hov2-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Observasjon av beboer på sykehjem',
      problem: 'Du kommer inn til Astrid (82 år) for morgenstellet og legger merke til at hun virker annerledes enn vanlig. Hvordan gjennomfører du en systematisk observasjon?',
      solution: `**Allmenntilstand:** Astrid virker slapp og svarer sent på tiltale. Hun er blek i ansiktet og har ikke spist frokosten sin.

**Vitale tegn:**
- Puls: 98 slag/min (noe forhøyet)
- Blodtrykk: 100/60 mmHg (lavere enn hennes vanlige 135/80)
- Temperatur: 38,4 °C (feber)
- Respirasjon: 22 pust/min (noe forhøyet)
- SpO2: 93 % (lavere enn normalt)

**ABCDE-vurdering:**
- A: Frie luftveier, snakker med lav stemme
- B: Noe rask respirasjon, SpO2 93 %
- C: Rask puls, lavt blodtrykk, blek
- D: Våken, men slapp og sløv
- E: Feber, ingen synlige skader

**Handling:** Rapporterer til sykepleier med ISBAR. Mistanke om infeksjon.`,
    },
    {
      id: 'hov2-3-1-example-2',
      type: 'example',
      title: 'Eksempel: NEWS2-skåring',
      problem: 'Beregn NEWS2-skår for Astrid basert på observasjonene over.',
      solution: `NEWS2 gir poeng for avvik fra normalverdier:

| Parameter | Verdi | Poeng |
|-----------|-------|-------|
| Respirasjon | 22/min | 2 |
| SpO2 | 93 % | 2 |
| Systolisk BT | 100 mmHg | 2 |
| Puls | 98/min | 1 |
| Temperatur | 38,4 °C | 1 |
| Bevissthet | Sløv (ny forvirring) | 3 |

**Total NEWS2-skår: 11** - Dette er en høy skår som krever umiddelbar vurdering av lege.

En NEWS2-skår på 7 eller mer regnes som kritisk og krever akutt respons.`,
    },
    {
      id: 'hov2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        task: 'Hva er normalverdien for pustefrekvens hos voksne?',
        options: [
          { id: 'a', text: '8-12 pust per minutt', isCorrect: false },
          { id: 'b', text: '12-20 pust per minutt', isCorrect: true },
          { id: 'c', text: '20-30 pust per minutt', isCorrect: false },
          { id: 'd', text: '30-40 pust per minutt', isCorrect: false },
        ],
        solution: 'Normalverdi for pustefrekvens hos voksne er 12-20 pust per minutt. Under 12 kalles bradypné og over 20 kalles takypné.',
      },
    },
    {
      id: 'hov2-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        task: 'Hva står bokstaven C for i ABCDE-prinsippet?',
        options: [
          { id: 'a', text: 'Consciousness (bevissthet)', isCorrect: false },
          { id: 'b', text: 'Circulation (sirkulasjon)', isCorrect: true },
          { id: 'c', text: 'Cardiac (hjerte)', isCorrect: false },
          { id: 'd', text: 'Communication (kommunikasjon)', isCorrect: false },
        ],
        solution: 'C står for Circulation (sirkulasjon). Her vurderer du puls, blodtrykk, hudfarge og kapillær refill for å avdekke sirkulasjonssvikt.',
      },
    },
    {
      id: 'hov2-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        task: 'Forklar hva vitale tegn er, og beskriv normalverdiene for alle fem parameterne.',
        hints: ['Tenk på puls, blodtrykk, temperatur, respirasjon og oksygenmetning'],
        solution: 'Vitale tegn er målbare verdier som viser kroppens grunnleggende funksjoner. De fem parameterne er: Puls (60-100 slag/min), blodtrykk (ca. 120/80 mmHg), temperatur (36,5-37,5 °C), respirasjon (12-20 pust/min) og oksygenmetning (95-100 %). Avvik fra normalverdiene kan indikere sykdom eller forverring.',
      },
    },
    {
      id: 'hov2-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        task: 'Du finner en beboer på gulvet på sykehjemmet. Beskriv hvordan du bruker ABCDE-prinsippet for å vurdere situasjonen.',
        hints: ['Start med A og jobb deg systematisk nedover', 'Hva sjekker du på hvert trinn?'],
        solution: 'A (Airway): Sjekk om luftveiene er frie, snakk til beboeren og se om de svarer. B (Breathing): Tell pustefrekvens, observer brystkassebevegelser, mål SpO2. C (Circulation): Kjenn på pulsen, vurder hudfarge, spør om smerter. D (Disability): Vurder bevissthet med AVPU, mål blodsukker. E (Exposure): Undersøk kroppen forsiktig for skader, mål temperatur, hold beboeren varm. Ring sykepleier og rapporter med ISBAR.',
      },
    },
    {
      id: 'hov2-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-1-ex-5',
        number: '3.1.5',
        type: 'multiple-choice',
        task: 'Hva betyr det at en pasient har SpO2 på 88 %?',
        options: [
          { id: 'a', text: 'Normal oksygenmetning', isCorrect: false },
          { id: 'b', text: 'Lett redusert oksygenmetning, observer videre', isCorrect: false },
          { id: 'c', text: 'Kritisk lav oksygenmetning, krever akutt tiltak', isCorrect: true },
          { id: 'd', text: 'Pulsoksymeteret viser feil verdi', isCorrect: false },
        ],
        solution: 'SpO2 på 88 % er kritisk lavt. Normal verdi er 95-100 %, og verdier under 90 % regnes som alvorlig hypoksi som krever akutte tiltak som oksygentilførsel og varsling av sykepleier eller lege.',
      },
    },
    {
      id: 'hov2-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        task: 'Forklar hva ISBAR står for og hvorfor det er viktig å bruke denne strukturen ved rapportering.',
        solution: 'ISBAR står for Identifikasjon, Situasjon, Bakgrunn, Aktuell vurdering og Råd. Det er viktig å bruke denne strukturen fordi den sikrer at all relevant informasjon formidles på en strukturert måte. Det reduserer risikoen for at viktig informasjon glemmes, gjør kommunikasjonen effektiv og bidrar til pasientsikkerhet.',
      },
    },
    {
      id: 'hov2-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Allmenntilstand** er en helhetsvurdering av pasientens generelle helsetilstand
- **Vitale tegn** omfatter puls, blodtrykk, temperatur, respirasjon og oksygenmetning
- **ABCDE-prinsippet** gir en systematisk tilnærming til akutt vurdering
- **NEWS2** er et skåringssystem for tidlig oppdagelse av forverring
- **ISBAR** brukes til strukturert rapportering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Vitale tegn | Puls, blodtrykk, temperatur, respirasjon, SpO2 |
| ABCDE | Systematisk vurdering: Airway, Breathing, Circulation, Disability, Exposure |
| NEWS2 | National Early Warning Score for tidlig varsling |
| ISBAR | Strukturert rapporteringsverktøy |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Hjerte- og karsykdommer
// ============================================================================

export const CHAPTER_HOV2_3_2: TextbookChapter = {
  id: 'hov2-3-2',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '3.2',
  title: 'Hjerte- og karsykdommer',
  description: 'Lær om de vanligste hjerte- og karsykdommene som hjerteinfarkt, hjertesvikt og hypertensjon, inkludert symptomer, behandling og helsefagarbeiderens rolle.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for vanlige sykdommer og lidelser', 'observere og rapportere om pasientens helsetilstand'],
  keyTerms: [
    { term: 'Hjerteinfarkt', definition: 'Akutt tilstand der blodtilførselen til en del av hjertemuskelen blokkeres' },
    { term: 'Hjertesvikt', definition: 'Kronisk tilstand der hjertet ikke klarer å pumpe nok blod til å dekke kroppens behov' },
    { term: 'Hypertensjon', definition: 'Vedvarende forhøyet blodtrykk over 140/90 mmHg' },
    { term: 'Aterosklerose', definition: 'Åreforkalkning - avleiring av fett og kalk i blodåreveggene' },
  ],
  content: [
    {
      id: 'hov2-3-2-intro',
      type: 'text',
      content: `## Hjerte- og karsykdommer

Hjerte- og karsykdommer er den vanligste dødsårsaken i Norge og en av de hyppigste årsakene til sykehusinnleggelse. Som helsefagarbeider vil du møte mange pasienter med disse sykdommene, og det er viktig at du kjenner til symptomene, behandlingen og din rolle i omsorgen.

I dette kapittelet skal du lære:
- Hva aterosklerose er og hvorfor det er viktig
- Symptomer og behandling ved hjerteinfarkt
- Hva hjertesvikt innebærer for pasienten
- Hypertensjon og forebygging av hjerte- og karsykdom`,
    },
    {
      id: 'hov2-3-2-def-1',
      type: 'definition',
      title: 'Aterosklerose',
      content: `**Aterosklerose** (åreforkalkning) er en gradvis prosess der fett, kalk og bindevev avleires i blodåreveggene. Over tid fører dette til at blodårene blir trangere og stivere, noe som reduserer blodtilførselen til organer og vev. Aterosklerose er den underliggende årsaken til mange hjerte- og karsykdommer.`,
    },
    {
      id: 'hov2-3-2-text-1',
      type: 'text',
      content: `### Risikofaktorer for hjerte- og karsykdom

**Påvirkbare risikofaktorer:**
- Røyking
- Høyt blodtrykk (hypertensjon)
- Høyt kolesterol
- Diabetes
- Overvekt og fedme
- Fysisk inaktivitet
- Usunt kosthold
- Høyt alkoholforbruk
- Stress

**Ikke-påvirkbare risikofaktorer:**
- Alder (risikoen øker med alderen)
- Kjønn (menn har høyere risiko, men forskjellen utjevnes etter menopause)
- Arv (familiær belastning)

Forebygging handler om å redusere de påvirkbare risikofaktorene gjennom livsstilsendringer og eventuelt medikamenter.`,
    },
    {
      id: 'hov2-3-2-def-2',
      type: 'definition',
      title: 'Hjerteinfarkt',
      content: `**Hjerteinfarkt** (myokardinfarkt) oppstår når en blodpropp blokkerer en kransarterie og hindrer blodtilførselen til en del av hjertemuskelen. Uten blodtilførsel vil hjertemuskelcellene dø. Jo raskere behandling settes inn, jo mer hjertemuskel kan reddes. Tid er hjerte!`,
    },
    {
      id: 'hov2-3-2-text-2',
      type: 'text',
      content: `### Symptomer på hjerteinfarkt

**Typiske symptomer:**
- Sterke, klemmende brystsmerter (som et press eller bånd rundt brystet)
- Smerter som stråler til venstre arm, kjeve, rygg eller mage
- Pustebesvær
- Kvalme og kaldsvetting
- Angst og uro

**Obs! Atypiske symptomer:**
- Kvinner og eldre kan ha vagere symptomer
- Tretthet, svimmelhet og generell uvelhet
- Smerter i magen eller mellom skulderbladene
- Noen opplever lite smerter (spesielt diabetikere)

### Behandling av hjerteinfarkt

**Akuttbehandling:**
- Ring 113 umiddelbart
- Pasienten skal sitte eller ligge i behagelig stilling
- Gi acetylsalisylsyre (Aspirin) 300 mg om tilgjengelig
- Overvåk vitale tegn
- Vær forberedt på hjerte-lunge-redning

**Sykehusbehandling:**
- PCI (utblokking) - kateter med ballong som åpner blodåren
- Trombolyse - medikament som løser opp blodproppen
- Hjertekirurgi (bypass) i noen tilfeller`,
    },
    {
      id: 'hov2-3-2-def-3',
      type: 'definition',
      title: 'Hjertesvikt',
      content: `**Hjertesvikt** er en kronisk tilstand der hjertet ikke klarer å pumpe tilstrekkelig med blod til å dekke kroppens behov. Det kan skyldes skade etter hjerteinfarkt, langvarig hypertensjon, hjerteklaffsykdom eller kardiomyopati. Hjertesvikt utvikler seg gradvis og klassifiseres i fire stadier (NYHA I-IV).`,
    },
    {
      id: 'hov2-3-2-text-3',
      type: 'text',
      content: `### Symptomer og omsorg ved hjertesvikt

**Symptomer:**
- Tung pust, spesielt ved anstrengelse og i liggende stilling
- Hevelser (ødemer) i ben, ankler og føtter
- Tretthet og redusert utholdenhet
- Hoste, spesielt om natten
- Vektøkning grunnet væskeopphopning

**Helsefagarbeiderens rolle:**
- Daglig veiing - rapporter vektøkning over 1-2 kg på kort tid
- Observere ødemer i ben og ankler
- Tilpasse aktivitetsnivå til dagsformen
- Hjelpe med elevert sittestilling ved tung pust
- Gi medikamenter som forskrevet (diuretika, ACE-hemmere)
- Væskerestriksjon om ordinert (ofte 1,5-2 liter per dag)
- Saltredusert kost

### Hypertensjon

**Hypertensjon** (høyt blodtrykk) er vedvarende blodtrykk over 140/90 mmHg. Det kalles ofte «den stille morderen» fordi det sjelden gir symptomer, men øker risikoen for hjerteinfarkt, hjerneslag og nyresvikt betydelig.

**Behandling:**
- Livsstilsendringer: kosthold, mosjon, røykeslutt, stressmestring
- Medikamenter: ACE-hemmere, betablokkere, kalsiumkanalblokkere, diuretika
- Regelmessig blodtrykkskontroll`,
    },
    {
      id: 'hov2-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Observasjon av pasient med hjertesvikt',
      problem: 'Gunnar (75 år) har kjent hjertesvikt. Du veier ham om morgenen og ser at han har gått opp 2,5 kg på tre dager. Hva gjør du?',
      solution: `**Observasjoner:**
- Vektøkning på 2,5 kg på tre dager tyder på væskeopphopning
- Sjekk om Gunnar har hevelser i ben og ankler
- Spør om han har hatt mer tung pust enn vanlig
- Mål vitale tegn: blodtrykk, puls, SpO2
- Spør om han har fulgt væskerestriksjon og tatt medisinene sine

**Tiltak:**
- Rapporter vektøkningen til sykepleier umiddelbart
- Dokumenter observasjonene i pasientjournalen
- Hjelp Gunnar opp i en elevert sittestilling om han er tungpustet
- Forvent at lege kan justere diuretikadosen

Rask vektøkning ved hjertesvikt er et alvorlig tegn som krever rask oppfølging.`,
    },
    {
      id: 'hov2-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        task: 'Hva er det første du skal gjøre hvis du mistenker at en pasient har hjerteinfarkt?',
        options: [
          { id: 'a', text: 'Gi pasienten vann og legge ham ned', isCorrect: false },
          { id: 'b', text: 'Ring 113 og la pasienten sitte eller ligge i behagelig stilling', isCorrect: true },
          { id: 'c', text: 'Vente og se om smertene går over av seg selv', isCorrect: false },
          { id: 'd', text: 'Kjøre pasienten til sykehuset selv', isCorrect: false },
        ],
        solution: 'Ved mistanke om hjerteinfarkt skal du ringe 113 umiddelbart. La pasienten sitte eller ligge i behagelig stilling og overvåk vitale tegn. Tid er avgjørende - jo raskere behandling, jo mer hjertemuskel kan reddes.',
      },
    },
    {
      id: 'hov2-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        task: 'Hva er aterosklerose?',
        options: [
          { id: 'a', text: 'Betennelse i leddene', isCorrect: false },
          { id: 'b', text: 'Avleiring av fett og kalk i blodåreveggene', isCorrect: true },
          { id: 'c', text: 'Svekket hjertemuskel', isCorrect: false },
          { id: 'd', text: 'Blodpropp i lungene', isCorrect: false },
        ],
        solution: 'Aterosklerose er avleiring av fett, kalk og bindevev i blodåreveggene. Over tid gjør dette blodårene trangere og stivere, og det er den underliggende årsaken til mange hjerte- og karsykdommer.',
      },
    },
    {
      id: 'hov2-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        task: 'Beskriv minst fem risikofaktorer for hjerte- og karsykdom, og forklar hvilke som er påvirkbare.',
        hints: ['Tenk på livsstilsfaktorer', 'Hva kan du ikke endre?'],
        solution: 'Påvirkbare risikofaktorer inkluderer: røyking, høyt blodtrykk, høyt kolesterol, diabetes, overvekt, fysisk inaktivitet og usunt kosthold. Ikke-påvirkbare risikofaktorer inkluderer alder, kjønn og arv. Forebygging fokuserer på de påvirkbare faktorene gjennom livsstilsendringer og eventuelt medikamenter.',
      },
    },
    {
      id: 'hov2-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        task: 'Forklar hva hjertesvikt er og beskriv helsefagarbeiderens oppgaver i oppfølgingen av en pasient med hjertesvikt.',
        solution: 'Hjertesvikt er en tilstand der hjertet ikke klarer å pumpe nok blod til å dekke kroppens behov. Helsefagarbeiderens oppgaver inkluderer daglig veiing og rapportering av vektøkning, observasjon av ødemer, tilpasning av aktivitet, hjelp med elevert sittestilling ved tung pust, medikamentadministrering, overvåking av væskeinntak og tilberedning av saltredusert kost.',
      },
    },
    {
      id: 'hov2-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-2-ex-5',
        number: '3.2.5',
        type: 'multiple-choice',
        task: 'Hvorfor kalles hypertensjon ofte «den stille morderen»?',
        options: [
          { id: 'a', text: 'Fordi den alltid fører til død', isCorrect: false },
          { id: 'b', text: 'Fordi den sjelden gir symptomer, men øker risikoen for alvorlig sykdom', isCorrect: true },
          { id: 'c', text: 'Fordi den bare rammer eldre mennesker', isCorrect: false },
          { id: 'd', text: 'Fordi den smitter uten at man merker det', isCorrect: false },
        ],
        solution: 'Hypertensjon kalles «den stille morderen» fordi forhøyet blodtrykk sjelden gir merkbare symptomer. Mange lever med uoppdaget høyt blodtrykk i årevis, mens skaden på blodårer, hjerte, nyrer og hjerne gradvis øker.',
      },
    },
    {
      id: 'hov2-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        task: 'Beskriv symptomene på hjerteinfarkt. Forklar også hvorfor symptomene kan være annerledes hos kvinner og eldre.',
        solution: 'Typiske symptomer på hjerteinfarkt er sterke, klemmende brystsmerter som kan stråle til venstre arm, kjeve eller rygg, pustebesvær, kvalme, kaldsvetting og angst. Kvinner og eldre kan ha atypiske symptomer som tretthet, svimmelhet, magesmerter eller generell uvelhet uten de klassiske brystsmertene. Diabetikere kan oppleve lite smerter. Derfor er det viktig å være oppmerksom på endringer i allmenntilstand hos disse gruppene.',
      },
    },
    {
      id: 'hov2-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Aterosklerose** er den underliggende årsaken til mange hjerte- og karsykdommer
- **Hjerteinfarkt** krever rask behandling - ring 113 umiddelbart
- **Hjertesvikt** er kronisk og krever daglig oppfølging med veiing og observasjon
- **Hypertensjon** er ofte symptomfri, men øker risikoen for alvorlig sykdom
- Mange risikofaktorer kan påvirkes gjennom livsstilsendringer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Aterosklerose | Åreforkalkning - avleiring i blodårevegger |
| Hjerteinfarkt | Blokkert blodtilførsel til hjertemuskelen |
| Hjertesvikt | Hjertet pumper ikke nok blod |
| Hypertensjon | Vedvarende forhøyet blodtrykk |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Lungesykdommer og luftveisinfeksjoner
// ============================================================================

export const CHAPTER_HOV2_3_3: TextbookChapter = {
  id: 'hov2-3-3',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '3.3',
  title: 'Lungesykdommer og luftveisinfeksjoner',
  description: 'Lær om vanlige lungesykdommer som KOLS og astma, samt luftveisinfeksjoner som pneumoni. Fokus på observasjon, omsorg og forebygging.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for vanlige sykdommer og lidelser', 'observere og rapportere om pasientens helsetilstand'],
  keyTerms: [
    { term: 'KOLS', definition: 'Kronisk obstruktiv lungesykdom - varig innsnevring av luftveiene' },
    { term: 'Astma', definition: 'Kronisk betennelsessykdom i luftveiene med anfall av tung pust' },
    { term: 'Pneumoni', definition: 'Lungebetennelse - infeksjon i lungevevet' },
    { term: 'Dyspné', definition: 'Subjektiv opplevelse av tung pust eller åndenød' },
  ],
  content: [
    {
      id: 'hov2-3-3-intro',
      type: 'text',
      content: `## Lungesykdommer og luftveisinfeksjoner

Sykdommer i lungene og luftveiene er svært vanlige, spesielt blant eldre. Som helsefagarbeider er det viktig at du kan gjenkjenne tegn på forverring og vet hvordan du kan hjelpe pasienter med pusteproblemer.

I dette kapittelet skal du lære:
- Hva KOLS er og hvordan du ivaretar pasienter med denne sykdommen
- Forskjellen mellom astma og KOLS
- Symptomer og behandling av pneumoni
- Observasjon og tiltak ved pustebesvær`,
    },
    {
      id: 'hov2-3-3-def-1',
      type: 'definition',
      title: 'KOLS - Kronisk obstruktiv lungesykdom',
      content: `**KOLS** er en kronisk lungesykdom som kjennetegnes av varig innsnevring av luftveiene og ødeleggelse av lungevevet. Sykdommen utvikler seg gradvis og er ikke reversibel. Røyking er den viktigste årsaken. Symptomene er langvarig hoste, oppspytt og tiltagende tung pust ved anstrengelse.`,
    },
    {
      id: 'hov2-3-3-text-1',
      type: 'text',
      content: `### KOLS i detalj

**Årsaker:**
- Røyking (80-90 % av tilfellene)
- Langvarig eksponering for støv, gass eller kjemikalier
- Arvelig disposisjon (alfa-1-antitrypsinmangel)
- Gjentatte luftveisinfeksjoner i barndommen

**Stadier (GOLD-klassifisering):**
- GOLD 1 (mild): Lett redusert lungefunksjon, ofte få symptomer
- GOLD 2 (moderat): Merkbar tung pust ved anstrengelse
- GOLD 3 (alvorlig): Tung pust ved lett aktivitet, hyppige forverringer
- GOLD 4 (svært alvorlig): Tung pust i hvile, sterkt nedsatt livskvalitet

**Behandling:**
- Røykeslutt er det viktigste tiltaket
- Inhalasjonsmedisiner (bronkodilatorer og steroider)
- Lungerehabilitering med trening og opplæring
- Oksygenbehandling ved alvorlig sykdom
- Vaksinasjon mot influensa og pneumokokker`,
    },
    {
      id: 'hov2-3-3-text-2',
      type: 'text',
      content: `### Helsefagarbeiderens rolle ved KOLS

**Daglig omsorg:**
- Observer pustefrekvens og pustearbeid
- Mål oksygenmetning (SpO2) regelmessig
- Hjelp pasienten med leppepust-teknikk
- Tilrettelegg for hvile mellom aktiviteter
- Sørg for god sittestilling som letter pustingen

**Ved forverring (eksaserbasjon):**
- Økt hoste og mer oppspytt
- Endret farge på oppspytt (gult/grønt tyder på infeksjon)
- Økende tung pust
- Rapporter endringer til sykepleier umiddelbart

**OBS! Oksygen ved KOLS:**
Pasienter med alvorlig KOLS kan ha tilpasset seg lave oksygenverdier. For høy oksygentilførsel kan i sjeldne tilfeller hemme pustedriven. Følg alltid ordinert oksygendosering.`,
    },
    {
      id: 'hov2-3-3-def-2',
      type: 'definition',
      title: 'Astma',
      content: `**Astma** er en kronisk betennelsessykdom i luftveiene som gir anfallsvis tung pust, piping i brystet, hoste og tetthet. I motsetning til KOLS er astma ofte reversibel - luftveiene kan åpne seg igjen etter behandling. Astma kan utløses av allergener, kulde, anstrengelse, infeksjoner eller irritanter.`,
    },
    {
      id: 'hov2-3-3-text-3',
      type: 'text',
      content: `### Forskjellen mellom astma og KOLS

| | Astma | KOLS |
|---|---|---|
| Debut | Ofte i barne-/ungdomsalder | Vanligvis etter 40 år |
| Årsak | Allergi, arv | Røyking (hovedårsak) |
| Forløp | Anfallsvis | Gradvis forverring |
| Reversibilitet | Ja, med behandling | Nei, varig skade |
| Pustelyder | Piping ved utpust | Piping og knatring |

### Pneumoni - lungebetennelse

**Pneumoni** er en infeksjon i lungevevet som kan skyldes bakterier, virus eller sopp.

**Symptomer:**
- Feber og frysninger
- Hoste med oppspytt (kan være rustfarget)
- Tung pust og brystsmerter ved innpust
- Tretthet og generell sykdomsfølelse
- Eldre kan ha atypiske symptomer: forvirring, nedsatt allmenntilstand

**Behandling:**
- Antibiotika ved bakteriell pneumoni
- Rikelig med væske
- Hvile
- Leieendring og mobilisering for å forebygge komplikasjoner
- Oksygenbehandling ved behov`,
    },
    {
      id: 'hov2-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Forverring av KOLS',
      problem: 'Margit (70 år) har KOLS GOLD 3. De siste dagene har hun hostet mer enn vanlig og oppspyttet har blitt grønnlig. Hun er mer tungpustet og SpO2 har falt fra 92 % til 88 %. Hva gjør du?',
      solution: `**Vurdering:** Margit viser tegn på en KOLS-eksaserbasjon, sannsynligvis utløst av en luftveisinfeksjon (grønt oppspytt).

**Tiltak:**
1. Hjelp Margit opp i god sittestilling med støtte for armene
2. Gi oksygen etter ordinasjon (forsiktig ved alvorlig KOLS)
3. Mål vitale tegn: puls, blodtrykk, temperatur, SpO2
4. Rapporter til sykepleier umiddelbart med ISBAR
5. Oppmuntre til leppepust for å lette ekspirasjon
6. Sørg for ro og trygghet
7. Dokumenter observasjoner og tiltak

Sykepleier eller lege vil vurdere behov for økt inhalasjonsmedisin, antibiotika og eventuelt sykehusinnleggelse.`,
    },
    {
      id: 'hov2-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste årsaken til KOLS?',
        options: [
          { id: 'a', text: 'Allergi', isCorrect: false },
          { id: 'b', text: 'Røyking', isCorrect: true },
          { id: 'c', text: 'Luftforurensning', isCorrect: false },
          { id: 'd', text: 'Arvelig sykdom', isCorrect: false },
        ],
        solution: 'Røyking er årsaken til 80-90 % av alle KOLS-tilfeller. Røykeslutt er derfor det viktigste tiltaket for å bremse sykdomsutviklingen.',
      },
    },
    {
      id: 'hov2-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        task: 'Hva er en viktig forskjell mellom astma og KOLS?',
        options: [
          { id: 'a', text: 'Astma rammer bare barn, KOLS bare voksne', isCorrect: false },
          { id: 'b', text: 'Astma er ofte reversibel, KOLS gir varig skade', isCorrect: true },
          { id: 'c', text: 'Astma skyldes røyking, KOLS skyldes allergi', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell mellom astma og KOLS', isCorrect: false },
        ],
        solution: 'Astma er ofte reversibel - luftveiene kan åpne seg igjen med behandling. KOLS gir derimot varig skade på luftveier og lungevev som ikke kan repareres.',
      },
    },
    {
      id: 'hov2-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        task: 'Beskriv symptomene på pneumoni (lungebetennelse). Forklar også hvorfor eldre kan ha atypiske symptomer.',
        hints: ['Tenk på feber, hoste, pust', 'Hvorfor er eldre annerledes?'],
        solution: 'Typiske symptomer på pneumoni er feber, frysninger, hoste med oppspytt (kan være rustfarget), tung pust, brystsmerter ved innpust og generell sykdomsfølelse. Eldre kan ha atypiske symptomer fordi immunforsvaret er svakere og kroppen ikke alltid reagerer med høy feber. I stedet kan de vise forvirring, falltendens, nedsatt matlyst og generelt redusert allmenntilstand.',
      },
    },
    {
      id: 'hov2-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        task: 'Beskriv helsefagarbeiderens oppgaver i den daglige omsorgen for en pasient med KOLS.',
        solution: 'Helsefagarbeiderens oppgaver inkluderer å observere pustefrekvens og pustearbeid, måle SpO2 regelmessig, hjelpe med leppepust-teknikk, tilrettelegge for hvile mellom aktiviteter, sørge for god sittestilling som letter pusten, gi inhalasjonsmedisiner som ordinert, observere oppspytt (mengde og farge), oppmuntre til væskeinntak og rapportere endringer til sykepleier.',
      },
    },
    {
      id: 'hov2-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-3-ex-5',
        number: '3.3.5',
        type: 'multiple-choice',
        task: 'Hva kan grønnlig oppspytt hos en KOLS-pasient tyde på?',
        options: [
          { id: 'a', text: 'Normal tilstand ved KOLS', isCorrect: false },
          { id: 'b', text: 'At pasienten drikker for lite', isCorrect: false },
          { id: 'c', text: 'Bakteriell infeksjon i luftveiene', isCorrect: true },
          { id: 'd', text: 'At medisinen virker som den skal', isCorrect: false },
        ],
        solution: 'Grønnlig eller gult oppspytt hos en KOLS-pasient tyder på en bakteriell infeksjon i luftveiene (eksaserbasjon). Dette bør rapporteres til sykepleier umiddelbart, da det kan kreve antibiotikabehandling.',
      },
    },
    {
      id: 'hov2-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **KOLS** er en kronisk, irreversibel lungesykdom der røyking er hovedårsaken
- **Astma** er anfallsvis og ofte reversibel med behandling
- **Pneumoni** er en alvorlig infeksjon i lungevevet
- Observasjon av pust, SpO2 og oppspytt er viktige helsefagarbeideroppgaver
- Forverring av KOLS (eksaserbasjon) krever rask rapportering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| KOLS | Kronisk obstruktiv lungesykdom |
| Eksaserbasjon | Forverring av kronisk sykdom |
| Pneumoni | Lungebetennelse |
| Dyspné | Tung pust, åndenød |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Diabetes og stoffskiftesykdommer
// ============================================================================

export const CHAPTER_HOV2_3_4: TextbookChapter = {
  id: 'hov2-3-4',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '3.4',
  title: 'Diabetes og stoffskiftesykdommer',
  description: 'Lær om diabetes type 1 og type 2, insulinbehandling, blodsukkermåling og helsefagarbeiderens rolle i oppfølgingen av pasienter med diabetes.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for vanlige sykdommer og lidelser', 'observere og rapportere om pasientens helsetilstand'],
  keyTerms: [
    { term: 'Diabetes type 1', definition: 'Autoimmun sykdom der kroppen ikke produserer insulin' },
    { term: 'Diabetes type 2', definition: 'Tilstand der kroppen har nedsatt insulinvirkning (insulinresistens)' },
    { term: 'Hypoglykemi', definition: 'For lavt blodsukker (under 4 mmol/L)' },
    { term: 'Hyperglykemi', definition: 'For høyt blodsukker (over 11 mmol/L fastende)' },
    { term: 'HbA1c', definition: 'Langtidsblodsukker som viser gjennomsnittlig blodsukkernivå over 2-3 måneder' },
  ],
  content: [
    {
      id: 'hov2-3-4-intro',
      type: 'text',
      content: `## Diabetes og stoffskiftesykdommer

Diabetes er en av de vanligste kroniske sykdommene i Norge, og antallet som rammes øker. Som helsefagarbeider vil du møte mange pasienter med diabetes, og din rolle i observasjon og oppfølging er svært viktig.

I dette kapittelet skal du lære:
- Forskjellen mellom diabetes type 1 og type 2
- Hvordan insulin regulerer blodsukkeret
- Symptomer på hypo- og hyperglykemi
- Praktisk blodsukkermåling og insulinadministrering
- Helsefagarbeiderens rolle i diabetesomsorgen`,
    },
    {
      id: 'hov2-3-4-def-1',
      type: 'definition',
      title: 'Insulin og blodsukkerregulering',
      content: `**Insulin** er et hormon som produseres i betacellene i bukspyttkjertelen (pankreas). Insulin fungerer som en nøkkel som åpner cellene slik at glukose (sukker) fra blodet kan komme inn i cellene og brukes som energi. Uten tilstrekkelig insulin eller insulinvirkning blir blodsukkeret for høyt.`,
    },
    {
      id: 'hov2-3-4-text-1',
      type: 'text',
      content: `### Diabetes type 1

**Diabetes type 1** er en autoimmun sykdom der immunforsvaret angriper og ødelegger betacellene i bukspyttkjertelen. Kroppen kan dermed ikke produsere insulin.

**Kjennetegn:**
- Debuterer vanligvis i barne- eller ungdomsalder
- Rammer ca. 25 000 personer i Norge
- Krever livslang insulinbehandling
- Kan ikke forebygges

**Symptomer ved debut:**
- Økt tørste og hyppig vannlating
- Vekttap til tross for god appetitt
- Tretthet og slapphet
- Tåkesyn
- Kan utvikle seg til ketoacidose (livstruende tilstand)

### Diabetes type 2

**Diabetes type 2** er den vanligste formen og skyldes en kombinasjon av nedsatt insulinproduksjon og insulinresistens (cellene reagerer dårligere på insulin).

**Kjennetegn:**
- Debuterer vanligvis etter 40 år, men ses i stadig yngre alder
- Rammer ca. 250 000 diagnostiserte i Norge (mange udiagnostiserte)
- Sterk sammenheng med overvekt, inaktivitet og arv
- Kan ofte behandles med livsstilsendringer og tabletter
- Noen trenger insulin etter hvert`,
    },
    {
      id: 'hov2-3-4-def-2',
      type: 'definition',
      title: 'Hypoglykemi',
      content: `**Hypoglykemi** (føling/lavt blodsukker) oppstår når blodsukkeret faller under 4 mmol/L. Dette er en akutt tilstand som krever rask behandling. Symptomer inkluderer skjelving, svetting, hjertebank, sult, svimmelhet, forvirring og i alvorlige tilfeller bevisstløshet. Årsaker kan være for mye insulin, for lite mat eller uvanlig mye fysisk aktivitet.`,
    },
    {
      id: 'hov2-3-4-text-2',
      type: 'text',
      content: `### Hypoglykemi og hyperglykemi

**Symptomer på hypoglykemi (lavt blodsukker < 4 mmol/L):**
- Skjelving og svetting
- Hjertebank og uro
- Sultfølelse
- Svimmelhet og hodepine
- Konsentrasjonsproblemer og forvirring
- I alvorlige tilfeller: kramper og bevisstløshet

**Førstehjelp ved hypoglykemi:**
1. Gi raskt sukker: druesukker, juice, sukkerholdig brus
2. Mål blodsukker
3. Når blodsukkeret stiger: gi et måltid med langsomt karbohydrat
4. Ved bevisstløshet: stabilt sideleie, ring 113, gi aldri mat/drikke

**Symptomer på hyperglykemi (høyt blodsukker > 11 mmol/L):**
- Økt tørste og hyppig vannlating
- Tretthet og slapphet
- Tåkesyn
- Kvalme
- Kan utvikle seg til ketoacidose (type 1) eller hyperosmolær koma (type 2)`,
    },
    {
      id: 'hov2-3-4-text-3',
      type: 'text',
      content: `### Blodsukkermåling og insulinadministrering

**Blodsukkermåling:**
- Fastende normalverdi: 4-7 mmol/L
- 2 timer etter måltid: under 10 mmol/L
- Vask hendene før måling (sukkerholdige rester kan gi feil verdi)
- Stikk i siden av fingertuppen (mindre smertefullt)
- Variér mellom fingre for å unngå hard hud

**Insulinadministrering:**
- Subkutan injeksjon (under huden)
- Vanlige injeksjonssteder: mage, lår, overarm, sete
- Variér injeksjonssted for å unngå fettforandringer (lipodystrofi)
- Insulinpennen holdes i 10 sekunder etter injeksjon
- Uåpnet insulin oppbevares i kjøleskap, åpnet ved romtemperatur

**Insulintyper:**
- Hurtigvirkende: virker etter 10-15 min (til måltider)
- Langtidsvirkende: virker jevnt over 24 timer (basalinsulin)
- Blandingsinsulin: kombinasjon av hurtig- og langtidsvirkende`,
    },
    {
      id: 'hov2-3-4-warning-1',
      type: 'warning',
      title: 'Viktig om insulin',
      content: `Insulin er et høyrisikomedikament. Feil dose kan gi livstruende hypoglykemi. Dobbeltkontroller alltid: riktig pasient, riktig insulintype, riktig dose, riktig tidspunkt og riktig injeksjonsteknikk. Forveksling mellom hurtigvirkende og langtidsvirkende insulin er en kjent feilkilde.`,
    },
    {
      id: 'hov2-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Hypoglykemi hos beboer',
      problem: 'Harald (68 år) har diabetes type 2 og bruker insulin. Under lunsjen legger du merke til at han er blek, svett og skjelver på hendene. Han virker forvirret. Hva gjør du?',
      solution: `**Vurdering:** Symptomene tyder på hypoglykemi (lavt blodsukker).

**Tiltak:**
1. Gi raskt sukker umiddelbart: et glass juice eller 3-4 druesukker
2. Mål blodsukker - verdien er 2,8 mmol/L (bekrefter hypoglykemi)
3. Bli hos Harald og observer
4. Etter 10-15 minutter: mål blodsukker på nytt
5. Blodsukkeret har steget til 5,2 mmol/L - gi Harald lunsjen sin med brødmat
6. Rapporter hendelsen til sykepleier
7. Dokumenter: tidspunkt, symptomer, blodsukkerverdier, tiltak og effekt

**Refleksjon:** Mulige årsaker til hypoglykemien kan være at Harald tok insulin men ikke spiste frokost, eller at han har vært mer fysisk aktiv enn vanlig.`,
    },
    {
      id: 'hov2-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom diabetes type 1 og type 2?',
        options: [
          { id: 'a', text: 'Type 1 rammer bare barn, type 2 bare voksne', isCorrect: false },
          { id: 'b', text: 'Type 1 gir ingen symptomer, type 2 gir mange symptomer', isCorrect: false },
          { id: 'c', text: 'Type 1 skyldes manglende insulinproduksjon, type 2 skyldes nedsatt insulinvirkning', isCorrect: true },
          { id: 'd', text: 'Type 1 behandles med tabletter, type 2 med insulin', isCorrect: false },
        ],
        solution: 'Ved diabetes type 1 ødelegges betacellene av immunforsvaret, slik at kroppen ikke produserer insulin. Ved type 2 produserer kroppen fortsatt noe insulin, men cellene reagerer dårligere på det (insulinresistens), og produksjonen kan også være redusert.',
      },
    },
    {
      id: 'hov2-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        task: 'En pasient med diabetes er blek, svett og skjelver. Hva bør du gjøre først?',
        options: [
          { id: 'a', text: 'Gi insulin', isCorrect: false },
          { id: 'b', text: 'Gi raskt sukker (juice, druesukker)', isCorrect: true },
          { id: 'c', text: 'Legge pasienten ned og vente', isCorrect: false },
          { id: 'd', text: 'Ringe 113 umiddelbart', isCorrect: false },
        ],
        solution: 'Symptomene tyder på hypoglykemi (lavt blodsukker). Det viktigste er å gi raskt sukker som juice eller druesukker. Å gi insulin ville gjøre situasjonen verre. Ring 113 hvis pasienten er bevisstløs.',
      },
    },
    {
      id: 'hov2-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        task: 'Beskriv symptomene på hypoglykemi og hyperglykemi. Forklar også forskjellen i førstehjelp.',
        hints: ['Tenk på lavt vs. høyt blodsukker', 'Hva er akutt farlig?'],
        solution: 'Hypoglykemi (lavt blodsukker) gir skjelving, svetting, hjertebank, sult, forvirring og eventuelt bevisstløshet. Førstehjelp: gi raskt sukker, deretter mat. Hyperglykemi (høyt blodsukker) gir økt tørste, hyppig vannlating, tretthet og kvalme. Førstehjelp: kontakt sykepleier/lege for eventuell insulinjustering. Hypoglykemi er den mest akutte tilstanden og krever rask handling.',
      },
    },
    {
      id: 'hov2-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        task: 'Beskriv korrekt fremgangsmåte for blodsukkermåling og insulininjeksjon.',
        solution: 'Blodsukkermåling: Vask hendene, stikk i siden av fingertuppen, legg bloddråpen på teststripen og les av verdien. Insulininjeksjon: Dobbeltkontroller insulintype og dose, velg injeksjonssted (mage, lår, overarm eller sete), desinfiser huden, sett pennen vinkelrett, injiser insulinet og hold pennen i 10 sekunder før du trekker ut. Variér injeksjonssted for å unngå lipodystrofi.',
      },
    },
    {
      id: 'hov2-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-4-ex-5',
        number: '3.4.5',
        type: 'multiple-choice',
        task: 'Hva er normal fastende blodsukkerverdi?',
        options: [
          { id: 'a', text: '2-4 mmol/L', isCorrect: false },
          { id: 'b', text: '4-7 mmol/L', isCorrect: true },
          { id: 'c', text: '7-10 mmol/L', isCorrect: false },
          { id: 'd', text: '10-14 mmol/L', isCorrect: false },
        ],
        solution: 'Normal fastende blodsukkerverdi er 4-7 mmol/L. Verdier under 4 mmol/L regnes som hypoglykemi, og vedvarende fastende verdier over 7 mmol/L kan tyde på diabetes.',
      },
    },
    {
      id: 'hov2-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        task: 'Forklar hvorfor det er viktig å variere injeksjonssted ved insulininjeksjon, og nevn de vanlige injeksjonsstedene.',
        solution: 'Det er viktig å variere injeksjonssted for å unngå lipodystrofi - fettforandringer i huden som kan oppstå ved gjentatte injeksjoner på samme sted. Lipodystrofi kan påvirke insulinopptaket og gi uforutsigbare blodsukkerverdier. De vanlige injeksjonsstedene er mage (raskest opptak), lår, overarm og sete (tregest opptak).',
      },
    },
    {
      id: 'hov2-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Diabetes type 1** er autoimmun og krever livslang insulinbehandling
- **Diabetes type 2** henger sammen med livsstil og kan ofte behandles med tabletter
- **Hypoglykemi** er akutt farlig og krever rask tilførsel av sukker
- **Hyperglykemi** utvikler seg saktere men kan også bli alvorlig
- Korrekt blodsukkermåling og insulinadministrering er viktige ferdigheter

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Insulin | Hormon som regulerer blodsukkeret |
| Hypoglykemi | For lavt blodsukker (under 4 mmol/L) |
| Hyperglykemi | For høyt blodsukker |
| HbA1c | Langtidsblodsukker over 2-3 måneder |
| Lipodystrofi | Fettforandringer ved gjentatte injeksjoner |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Nevrologiske sykdommer og demens
// ============================================================================

export const CHAPTER_HOV2_3_5: TextbookChapter = {
  id: 'hov2-3-5',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '3.5',
  title: 'Nevrologiske sykdommer og demens',
  description: 'Lær om hjerneslag, demens og Parkinsons sykdom. Fokus på symptomgjenkjennelse, omsorg og kommunikasjon med pasienter med kognitiv svikt.',
  estimatedMinutes: 60,
  competenceGoals: ['gjøre rede for vanlige sykdommer og lidelser', 'utføre grunnleggende sykepleie og omsorg'],
  keyTerms: [
    { term: 'Hjerneslag', definition: 'Akutt skade i hjernen grunnet blødning eller blodpropp' },
    { term: 'Demens', definition: 'Samlebetegnelse for hjernesykdommer med varig kognitiv svikt' },
    { term: 'Alzheimers sykdom', definition: 'Den vanligste formen for demens, med gradvis tap av hukommelse og kognisjon' },
    { term: 'Parkinsons sykdom', definition: 'Nevrodegenerativ sykdom med skjelving, stivhet og langsomme bevegelser' },
    { term: 'Afasi', definition: 'Språkvansker etter hjerneskade' },
  ],
  content: [
    {
      id: 'hov2-3-5-intro',
      type: 'text',
      content: `## Nevrologiske sykdommer og demens

Nevrologiske sykdommer rammer hjernen og nervesystemet og kan gi store konsekvenser for pasientens funksjonsnivå og livskvalitet. Demens er en av de største helseutfordringene i Norge, og med en aldrende befolkning vil behovet for kompetente helsefagarbeidere øke.

I dette kapittelet skal du lære:
- Symptomer på hjerneslag og hvorfor rask behandling er avgjørende
- De ulike formene for demens og hvordan de påvirker pasienten
- Hva Parkinsons sykdom innebærer
- Kommunikasjon og omsorg for pasienter med kognitiv svikt`,
    },
    {
      id: 'hov2-3-5-def-1',
      type: 'definition',
      title: 'Hjerneslag',
      content: `**Hjerneslag** (cerebrovaskulær hendelse) oppstår når blodtilførselen til en del av hjernen plutselig opphører. Det finnes to typer: **Hjerneinfarkt** (ca. 85 %) der en blodpropp blokkerer en blodåre i hjernen, og **hjerneblødning** (ca. 15 %) der en blodåre sprekker. Hjerneslag er en akutt medisinsk nødssituasjon - tid er hjerne!`,
    },
    {
      id: 'hov2-3-5-text-1',
      type: 'text',
      content: `### Gjenkjenne hjerneslag - FAST

Bruk **FAST**-testen for å gjenkjenne hjerneslag raskt:

- **F** - Fjes (Face): Be personen smile. Henger den ene siden av ansiktet?
- **A** - Arm: Be personen løfte begge armene. Synker den ene armen?
- **S** - Språk (Speech): Be personen si en enkel setning. Er talen utydelig?
- **T** - Tid (Time): Ring 113 umiddelbart! Hvert minutt teller

**Andre symptomer:**
- Plutselig kraftig hodepine
- Synsforstyrrelser (dobbeltsyn, synsfeltutfall)
- Svimmelhet og balanseproblemer
- Forvirring

**Behandling:**
- Trombolyse (proppløsende medisin) innen 4,5 timer ved hjerneinfarkt
- Trombektomi (mekanisk fjerning av proppen) innen 6-24 timer
- Rehabilitering: fysioterapi, ergoterapi, logopedi`,
    },
    {
      id: 'hov2-3-5-text-2',
      type: 'text',
      content: `### Konsekvenser etter hjerneslag

Konsekvensene avhenger av hvilken del av hjernen som er skadet:

**Motoriske utfall:**
- Halvsidig lammelse (hemiparese/hemiplegi)
- Nedsatt balanse og koordinasjon
- Svelgvansker (dysfagi)

**Kognitive utfall:**
- Afasi (språkvansker) - vansker med å snakke eller forstå tale
- Nedsatt oppmerksomhet og konsentrasjon
- Hukommelsesproblemer
- Neglekt (manglende oppmerksomhet mot én side)

**Emosjonelle utfall:**
- Depresjon (rammer ca. 30 % etter hjerneslag)
- Emosjonell labilitet (lett for å gråte/le)
- Angst og frustrasjon

### Helsefagarbeiderens rolle etter hjerneslag

- Hjelpe med ADL-aktiviteter på den rammede siden
- Stimulere pasienten til å bruke den rammede siden
- Tilpasse kommunikasjonen ved afasi
- Observere svelgfunksjon ved måltider
- Forebygge fall og trykksår
- Motivere til trening og rehabilitering`,
    },
    {
      id: 'hov2-3-5-def-2',
      type: 'definition',
      title: 'Demens',
      content: `**Demens** er en samlebetegnelse for flere hjernesykdommer som fører til varig og gradvis tap av kognitive funksjoner som hukommelse, orientering, språk og dømmekraft. Sykdommen påvirker etter hvert evnen til å utføre daglige aktiviteter. Over 100 000 personer i Norge lever med demens.`,
    },
    {
      id: 'hov2-3-5-text-3',
      type: 'text',
      content: `### Former for demens

**Alzheimers sykdom (60-70 % av tilfellene)**
- Gradvis start med glemsel og hukommelsestap
- Problemer med orientering i tid og sted
- Språkvansker og ordletingsproblemer
- Endringer i personlighet og atferd
- Utvikler seg over 8-12 år

**Vaskulær demens (15-20 %)**
- Skyldes skader i hjernen grunnet slag eller dårlig blodforsyning
- Kan ha trinnvis forverring
- Varierende symptomer avhengig av skadeområde

**Lewy body-demens (10-15 %)**
- Svingninger i oppmerksomhet og våkenhet
- Synshallusinasjoner
- Parkinsons-lignende symptomer
- Stor følsomhet for antipsykotiske medikamenter

**Frontotemporal demens (5-10 %)**
- Tidlig personlighetsendring og atferdsendring
- Nedsatt sosial dømmekraft
- Rammer ofte yngre (45-65 år)`,
    },
    {
      id: 'hov2-3-5-text-4',
      type: 'text',
      content: `### Kommunikasjon med personer med demens

God kommunikasjon er avgjørende for livskvaliteten:

**Generelle prinsipper:**
- Bruk enkelt, tydelig språk
- Snakk rolig og gi tid til å svare
- Still ett spørsmål om gangen
- Bruk korte setninger
- Oppretthold øyekontakt
- Bruk kroppsspråk og mimikk som støtte

**Viktig å huske:**
- Ikke korriger eller si «husker du ikke?»
- Gå inn i personens virkelighet (validering)
- Bruk minner og kjente gjenstander (reminisens)
- Tilpass kommunikasjonen til sykdomsstadiet
- Vær tålmodig og anerkjennende

### Parkinsons sykdom

**Parkinsons sykdom** skyldes tap av dopaminproduserende celler i hjernen.

**Hovedsymptomer:**
- Skjelving (tremor) - ofte i hvile, starter gjerne i én hånd
- Stivhet (rigiditet) i muskler og ledd
- Langsomme bevegelser (bradykinesi)
- Balanseproblemer og falltendens
- Maskeansikt (redusert mimikk)

**Behandling:**
- Levodopa (omdannes til dopamin i hjernen)
- Fysioterapi og trening
- Tilrettelegging i hverdagen`,
    },
    {
      id: 'hov2-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Kommunikasjon med beboer med demens',
      problem: 'Solveig (84 år) har Alzheimers sykdom i moderat stadium. Hun blir urolig om ettermiddagen og sier at hun må hjem for å lage middag til barna. Barna er voksne og bor for seg selv. Hvordan håndterer du situasjonen?',
      solution: `**Feil tilnærming:** "Solveig, du bor jo her på sykehjemmet. Barna dine er voksne nå, de lager mat selv."

**Riktig tilnærming (validering):**
1. Møt Solveig med rolig kroppsspråk og øyekontakt
2. Anerkjenn følelsen: "Jeg ser at du er opptatt av barna dine. Du er en god mamma."
3. Vis interesse: "Hva pleide du å lage til middag?"
4. Avled forsiktig: "Skal vi gå til stuen? Jeg tror det er kaffe og vafler der."
5. Tilby en meningsfull aktivitet: "Vil du hjelpe meg å dekke bordet?"

**Hvorfor dette virker:**
- Du avviser ikke hennes opplevelse
- Du bekrefter hennes identitet som mor
- Du avleder til noe trygt og kjent
- Du gir henne en oppgave som gir mestring`,
    },
    {
      id: 'hov2-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        task: 'Hva står bokstavene i FAST for ved gjenkjennelse av hjerneslag?',
        options: [
          { id: 'a', text: 'Feber, Arm, Smerter, Temperatur', isCorrect: false },
          { id: 'b', text: 'Fjes, Arm, Språk, Tid', isCorrect: true },
          { id: 'c', text: 'Føtter, Armer, Syn, Tale', isCorrect: false },
          { id: 'd', text: 'Forvirring, Angst, Svimmelhet, Tretthet', isCorrect: false },
        ],
        solution: 'FAST står for Fjes (henger ansiktet?), Arm (synker en arm?), Språk (utydelig tale?) og Tid (ring 113!). Denne testen hjelper deg å gjenkjenne hjerneslag raskt.',
      },
    },
    {
      id: 'hov2-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        task: 'Hvilken er den vanligste formen for demens?',
        options: [
          { id: 'a', text: 'Vaskulær demens', isCorrect: false },
          { id: 'b', text: 'Lewy body-demens', isCorrect: false },
          { id: 'c', text: 'Alzheimers sykdom', isCorrect: true },
          { id: 'd', text: 'Frontotemporal demens', isCorrect: false },
        ],
        solution: 'Alzheimers sykdom utgjør 60-70 % av alle demenstilfeller. Den kjennetegnes av gradvis hukommelsestap, orienteringsvansker og språkproblemer.',
      },
    },
    {
      id: 'hov2-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        task: 'Forklar hva validering betyr i demensomsorgen og gi et eksempel på hvordan du kan bruke det.',
        hints: ['Tenk på å møte personen i deres virkelighet', 'Hva bør du unngå å gjøre?'],
        solution: 'Validering betyr å anerkjenne og bekrefte følelsene til personen med demens, selv om deres oppfatning av virkeligheten ikke stemmer med den faktiske situasjonen. I stedet for å korrigere, møter du personen i deres virkelighet. Eksempel: Hvis en beboer tror hun er på jobb, kan du si "Du har alltid vært flink i jobben din. Fortell meg om hva du gjør" i stedet for "Du er pensjonist nå".',
      },
    },
    {
      id: 'hov2-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        task: 'Beskriv de tre hovedsymptomene ved Parkinsons sykdom og forklar hvordan de påvirker hverdagen.',
        solution: 'De tre hovedsymptomene er: 1) Tremor (skjelving) - ofte i hvile, gjør finmotoriske oppgaver vanskelige som å kneppe knapper eller spise. 2) Rigiditet (stivhet) - gjør bevegelser trege og vanskelige, kan gi smerter. 3) Bradykinesi (langsomme bevegelser) - påvirker gange, mimikk og tale. Sammen fører disse symptomene til at pasienten trenger mer tid til daglige aktiviteter, har økt fallrisiko og kan få vansker med kommunikasjon.',
      },
    },
    {
      id: 'hov2-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        task: 'Beskriv mulige konsekvenser etter hjerneslag og forklar helsefagarbeiderens rolle i rehabiliteringen.',
        solution: 'Konsekvenser kan være motoriske utfall (halvsidig lammelse, svelgvansker), kognitive utfall (afasi, neglekt, hukommelsesproblemer) og emosjonelle utfall (depresjon, labilitet). Helsefagarbeideren hjelper med ADL-aktiviteter, stimulerer bruk av rammet side, tilpasser kommunikasjon ved afasi, observerer svelgfunksjon, forebygger fall og trykksår, og motiverer til trening og rehabilitering.',
      },
    },
    {
      id: 'hov2-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-5-ex-6',
        number: '3.5.6',
        type: 'multiple-choice',
        task: 'Hva er afasi?',
        options: [
          { id: 'a', text: 'Svelgvansker etter hjerneslag', isCorrect: false },
          { id: 'b', text: 'Språkvansker etter hjerneskade', isCorrect: true },
          { id: 'c', text: 'Halvsidig lammelse', isCorrect: false },
          { id: 'd', text: 'Synsforstyrrelser', isCorrect: false },
        ],
        solution: 'Afasi er språkvansker etter hjerneskade, oftest hjerneslag. Det kan gi vansker med å snakke (ekspressiv afasi), forstå tale (impressiv afasi) eller begge deler (global afasi). Personen har ikke mistet intelligensen, men har problemer med å uttrykke seg.',
      },
    },
    {
      id: 'hov2-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Hjerneslag** er en akutt nødssituasjon - bruk FAST-testen og ring 113
- **Demens** er en samlebetegnelse der Alzheimers sykdom er vanligst
- **Validering** er en viktig kommunikasjonsteknikk i demensomsorgen
- **Parkinsons sykdom** gir tremor, rigiditet og bradykinesi
- Rehabilitering og tilpasset kommunikasjon er sentrale oppgaver

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Hjerneslag | Akutt hjerneskade ved blodpropp eller blødning |
| Demens | Varig kognitiv svikt grunnet hjernesykdom |
| Afasi | Språkvansker etter hjerneskade |
| Validering | Kommunikasjonsteknikk som møter pasientens virkelighet |
| Parkinsons | Nevrodegenerativ sykdom med tremor og stivhet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.6: Muskel- og skjelettsykdommer
// ============================================================================

export const CHAPTER_HOV2_3_6: TextbookChapter = {
  id: 'hov2-3-6',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '3.6',
  title: 'Muskel- og skjelettsykdommer',
  description: 'Lær om vanlige muskel- og skjelettsykdommer som artrose, osteoporose og brudd, samt helsefagarbeiderens rolle i forebygging og rehabilitering.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for vanlige sykdommer og lidelser', 'utføre grunnleggende sykepleie og omsorg'],
  keyTerms: [
    { term: 'Artrose', definition: 'Degenerativ leddsykdom med nedbrytning av brusk' },
    { term: 'Osteoporose', definition: 'Benskjørhet - redusert benmasse og økt bruddrisiko' },
    { term: 'Hoftebrudd', definition: 'Brudd i øvre del av lårbenet, vanlig hos eldre med osteoporose' },
    { term: 'Revmatoid artritt', definition: 'Kronisk betennelsessykdom i ledd (leddgikt)' },
  ],
  content: [
    {
      id: 'hov2-3-6-intro',
      type: 'text',
      content: `## Muskel- og skjelettsykdommer

Muskel- og skjelettsykdommer er svært vanlige, spesielt blant eldre. De fører ofte til smerter, nedsatt bevegelighet og redusert livskvalitet. Som helsefagarbeider spiller du en viktig rolle i å hjelpe pasienter med å opprettholde funksjonsnivå og forebygge komplikasjoner.

I dette kapittelet skal du lære:
- Hva artrose er og hvordan den påvirker leddene
- Osteoporose og forebygging av brudd
- Hoftebrudd hos eldre - operasjon og rehabilitering
- Helsefagarbeiderens rolle ved muskel- og skjelettsykdommer`,
    },
    {
      id: 'hov2-3-6-def-1',
      type: 'definition',
      title: 'Artrose',
      content: `**Artrose** (slitasjegikt) er den vanligste leddsykdommen og skyldes gradvis nedbrytning av brusken i leddene. Når brusken slites ned, gnisser bein mot bein, noe som gir smerter, stivhet og nedsatt bevegelighet. Artrose rammer oftest knær, hofter, hender og rygg.`,
    },
    {
      id: 'hov2-3-6-text-1',
      type: 'text',
      content: `### Artrose

**Risikofaktorer:**
- Alder (risikoen øker med alderen)
- Overvekt (spesielt for kne- og hofteartrose)
- Arv
- Tidligere leddskader
- Tungt fysisk arbeid med repetitive belastninger

**Symptomer:**
- Smerter ved belastning som avtar ved hvile
- Stivhet, spesielt om morgenen (under 30 minutter)
- Nedsatt bevegelighet i leddet
- Hevelse og ømhet
- Krepitasjon (knaselydsog knakelyder) i leddet

**Behandling:**
- Fysisk aktivitet og trening (styrke og bevegelighet)
- Vektreduksjon ved overvekt
- Smertelindring (paracetamol, NSAIDs)
- Hjelpemidler (stokk, gåstol, ergonomiske grep)
- Leddprotese (operasjon) i alvorlige tilfeller`,
    },
    {
      id: 'hov2-3-6-def-2',
      type: 'definition',
      title: 'Osteoporose',
      content: `**Osteoporose** (benskjørhet) er en tilstand der benmassen er redusert og benstrukturen er svekket, noe som gir økt risiko for brudd. Sykdommen utvikler seg gradvis og gir sjelden symptomer før det oppstår et brudd. Kvinner etter menopause er spesielt utsatt.`,
    },
    {
      id: 'hov2-3-6-text-2',
      type: 'text',
      content: `### Osteoporose og bruddforebygging

**Risikofaktorer:**
- Alder og kvinnelig kjønn
- Østrogenmangel etter menopause
- Arv
- Røyking og høyt alkoholforbruk
- Mangel på kalsium og vitamin D
- Lite fysisk aktivitet
- Langvarig bruk av kortikosteroider

**Forebygging:**
- Regelmessig fysisk aktivitet med vektbæring
- Tilstrekkelig inntak av kalsium og vitamin D
- Røykeslutt
- Fallforebygging i hjemmet og på institusjon

### Hoftebrudd hos eldre

Hoftebrudd er en alvorlig hendelse hos eldre med osteoporose:

**Fakta:**
- Ca. 9 000 hoftebrudd per år i Norge
- Gjennomsnittsalder ca. 80 år
- 25 % dør innen ett år
- Mange mister evnen til å bo hjemme

**Behandling:**
- Operasjon innen 24-48 timer (hemiprotese eller skruefiksering)
- Tidlig mobilisering etter operasjon
- Smertelindring
- Rehabilitering med fysioterapi

**Helsefagarbeiderens oppgaver etter hofteoperasjon:**
- Hjelpe med tidlig mobilisering (opp av sengen dagen etter operasjon)
- Følge eventuelle restriksioner for bevegelse
- Observere operasjonssår for tegn på infeksjon
- Smertelindring og dokumentering av smertenivå
- Forebygge trykksår og trombose
- Motivere til trening og egenaktivitet`,
    },
    {
      id: 'hov2-3-6-text-3',
      type: 'text',
      content: `### Fallforebygging

Forebygging av fall er avgjørende for å redusere bruddrisikoen:

**Tiltak i institusjon:**
- God belysning, spesielt om natten
- Fjerne løse tepper og snublefarer
- Håndtak og støttestenger på bad og toalett
- Sklisikre gulv
- Gode sko med sklisikre såler
- Hoftebeskyttere til risikopasienter
- Regelmessig trening for styrke og balanse

**Tiltak ved medikamenter:**
- Vær oppmerksom på medisiner som gir svimmelhet
- Blodtrykksmedisin kan gi ortostatisk hypotensjon
- Sovemedisiner øker fallrisikoen om natten

### Revmatoid artritt

**Revmatoid artritt** (leddgikt) er en kronisk autoimmun betennelsessykdom:
- Immunforsvaret angriper leddhinnen
- Gir smertefulle, hovne og stive ledd
- Rammer ofte små ledd i hender og føtter symmetrisk
- Morgenstivhet som varer over 30 minutter
- Behandles med betennelsesdempende og immunhemmende medikamenter`,
    },
    {
      id: 'hov2-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Oppfølging etter hofteoperasjon',
      problem: 'Ingrid (83 år) ble operert for hoftebrudd i går og skal opp av sengen for første gang. Hvordan hjelper du henne?',
      solution: `**Forberedelse:**
- Sjekk operasjonsbeskrivelse for eventuelle bevegelsesrestriksjoner
- Sørg for smertelindring i forkant (medikamenter gitt 30 min før)
- Ha gåstol/rullator klar ved sengen
- Informer Ingrid om hva som skal skje

**Gjennomføring:**
1. Hev sengens hodeende gradvis for å unngå svimmelhet
2. Hjelp Ingrid å sitte på sengekanten noen minutter
3. Sjekk at hun ikke er svimmel eller kvalm
4. Hjelp henne å reise seg med støtte i gåstolen
5. La henne stå noen øyeblikk for å finne balansen
6. Gå noen skritt med støtte, vurder smerte og stabilitet

**Observasjoner:**
- Smertenivå (bruk VAS-skala)
- Svimmelhet eller blodtrykksfall
- Blødning fra operasjonssår
- Dokumenter aktiviteten og pasientens respons`,
    },
    {
      id: 'hov2-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-6-ex-1',
        number: '3.6.1',
        type: 'multiple-choice',
        task: 'Hva er artrose?',
        options: [
          { id: 'a', text: 'En autoimmun sykdom som angriper leddhinnen', isCorrect: false },
          { id: 'b', text: 'En degenerativ leddsykdom med nedbrytning av brusk', isCorrect: true },
          { id: 'c', text: 'En infeksjon i benvevet', isCorrect: false },
          { id: 'd', text: 'En betennelsessykdom i musklene', isCorrect: false },
        ],
        solution: 'Artrose er en degenerativ leddsykdom der brusken i leddene gradvis brytes ned. Det er den vanligste leddsykdommen og rammer spesielt knær, hofter og hender.',
      },
    },
    {
      id: 'hov2-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-6-ex-2',
        number: '3.6.2',
        type: 'classic',
        task: 'Beskriv hva osteoporose er og nevn minst fire tiltak for å forebygge benskjørhet.',
        hints: ['Tenk på livsstil, kosthold og fysisk aktivitet'],
        solution: 'Osteoporose er redusert benmasse som gir økt bruddrisiko. Forebyggende tiltak inkluderer: 1) Regelmessig fysisk aktivitet med vektbæring, 2) Tilstrekkelig inntak av kalsium og vitamin D, 3) Røykeslutt, 4) Moderat alkoholforbruk, 5) Fallforebygging i hjemmet, og 6) Eventuell medikamentell behandling hos dem med høy risiko.',
      },
    },
    {
      id: 'hov2-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-6-ex-3',
        number: '3.6.3',
        type: 'classic',
        task: 'Beskriv helsefagarbeiderens oppgaver etter en hofteoperasjon hos en eldre pasient.',
        solution: 'Helsefagarbeiderens oppgaver inkluderer: tidlig mobilisering (opp av sengen dagen etter), følge bevegelsesrestriksjoner, observere operasjonssår for infeksjon, smertelindring og dokumentering av smertenivå, forebygging av trykksår og trombose, hjelpe med personlig hygiene, motivere til trening og egenaktivitet, og rapportere endringer til sykepleier.',
      },
    },
    {
      id: 'hov2-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-6-ex-4',
        number: '3.6.4',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom artrose og revmatoid artritt?',
        options: [
          { id: 'a', text: 'Artrose gir smerter, revmatoid artritt gjør det ikke', isCorrect: false },
          { id: 'b', text: 'Artrose er slitasje på brusk, revmatoid artritt er autoimmun betennelse', isCorrect: true },
          { id: 'c', text: 'Artrose rammer bare hofter, revmatoid artritt bare hender', isCorrect: false },
          { id: 'd', text: 'Det er ingen vesentlig forskjell mellom dem', isCorrect: false },
        ],
        solution: 'Artrose skyldes slitasje og nedbrytning av brusk i leddene, mens revmatoid artritt er en autoimmun sykdom der immunforsvaret angriper leddhinnen og forårsaker betennelse. Revmatoid artritt gir morgenstivhet over 30 minutter og rammer ofte ledd symmetrisk.',
      },
    },
    {
      id: 'hov2-3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-6-ex-5',
        number: '3.6.5',
        type: 'classic',
        task: 'Gi minst fem konkrete tiltak for fallforebygging på en sykehjemsavdeling.',
        solution: 'Tiltak for fallforebygging: 1) God belysning hele døgnet, spesielt nattlys på veien til toalettet, 2) Fjerne løse tepper og ledninger fra gulvet, 3) Montere håndtak og støttestenger på bad og toalett, 4) Sikre at gulv er sklisikre, 5) Sørge for at beboerne har gode sko med sklisikre såler, 6) Tilby hoftebeskyttere til dem med høy fallrisiko, 7) Gjennomføre regelmessig trening for styrke og balanse, 8) Være oppmerksom på medisiner som kan gi svimmelhet.',
      },
    },
    {
      id: 'hov2-3-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Artrose** er slitasje på brusk og den vanligste leddsykdommen
- **Osteoporose** gir økt bruddrisiko og kan forebygges med aktivitet og kosthold
- **Hoftebrudd** er alvorlig hos eldre og krever tidlig mobilisering etter operasjon
- **Fallforebygging** er en sentral oppgave for å redusere bruddrisiko
- **Revmatoid artritt** er en autoimmun sykdom som krever medisinsk behandling

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Artrose | Degenerativ leddsykdom (slitasjegikt) |
| Osteoporose | Benskjørhet med økt bruddrisiko |
| Hoftebrudd | Vanlig komplikasjon ved osteoporose hos eldre |
| Revmatoid artritt | Autoimmun betennelsessykdom i ledd |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.7: Kreft og palliativ omsorg
// ============================================================================

export const CHAPTER_HOV2_3_7: TextbookChapter = {
  id: 'hov2-3-7',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '3.7',
  title: 'Kreft og palliativ omsorg',
  description: 'Lær om kreftsykdommer, palliativ omsorg og helsefagarbeiderens rolle i møte med alvorlig syke pasienter og deres pårørende.',
  estimatedMinutes: 60,
  competenceGoals: ['gjøre rede for vanlige sykdommer og lidelser', 'utføre grunnleggende sykepleie og omsorg'],
  keyTerms: [
    { term: 'Kreft', definition: 'Ukontrollert celledeling som kan danne svulster og spre seg til andre organer' },
    { term: 'Palliativ omsorg', definition: 'Lindrende behandling og omsorg ved uhelbredelig sykdom' },
    { term: 'Metastaser', definition: 'Spredning av kreftceller til andre organer enn der kreften oppsto' },
    { term: 'Terminal fase', definition: 'Den siste fasen av livet, ofte de siste dagene til ukene' },
  ],
  content: [
    {
      id: 'hov2-3-7-intro',
      type: 'text',
      content: `## Kreft og palliativ omsorg

Kreft er en av de vanligste sykdommene i Norge, og omtrent én av tre vil rammes i løpet av livet. Mange overlever kreft, men for dem med uhelbredelig sykdom er palliativ omsorg avgjørende for livskvaliteten. Som helsefagarbeider kan du gjøre en stor forskjell i denne fasen.

I dette kapittelet skal du lære:
- Hva kreft er og de vanligste krefttypene
- Behandlingsformer og bivirkninger
- Hva palliativ omsorg innebærer
- Helsefagarbeiderens rolle ved alvorlig sykdom og døende pasienter
- Omsorg for pårørende`,
    },
    {
      id: 'hov2-3-7-def-1',
      type: 'definition',
      title: 'Kreft',
      content: `**Kreft** oppstår når celler i kroppen begynner å dele seg ukontrollert. Normalt regulerer kroppen celledeling strengt, men ved kreft er denne kontrollen brutt ned. Kreftcellene kan danne svulster (tumorer) og spre seg til andre deler av kroppen via blod eller lymfesystem (metastasering).`,
    },
    {
      id: 'hov2-3-7-text-1',
      type: 'text',
      content: `### Vanlige kreftsykdommer i Norge

**De fire vanligste:**
1. **Prostatakreft** - vanligst hos menn
2. **Brystkreft** - vanligst hos kvinner
3. **Lungekreft** - rammer begge kjønn, sterk kobling til røyking
4. **Tykk- og endetarmskreft** - kolorektalkreft

**Risikofaktorer:**
- Røyking (den viktigste enkeltårsaken)
- Overvekt og usunt kosthold
- Fysisk inaktivitet
- Alkohol
- UV-stråling (hudkreft)
- Arv og genetisk disposisjon
- Alder (risikoen øker med alderen)

**Varselsignaler (husk: SUKSESS):**
- **S**år som ikke gror
- **U**vanlig blødning
- **K**ul eller hevelse
- **S**velge- eller spisevansker
- **E**ndring i føflekk
- **S**tem som er vedvarende hes
- **S**topp i normal tarm- eller blærefunksjon`,
    },
    {
      id: 'hov2-3-7-text-2',
      type: 'text',
      content: `### Behandlingsformer

**Kirurgi:**
- Fjerning av svulst og eventuelt omkringliggende vev
- Kan være kurativ (helbredende) eller palliativ (lindrende)

**Cellegift (kjemoterapi):**
- Medikamenter som dreper raskt delende celler
- Bivirkninger: kvalme, hårtap, fatigue, nedsatt immunforsvar, munnsår
- Gis ofte i kurer med pauser mellom

**Strålebehandling:**
- Høyenergistråling som skader kreftceller
- Kan gi lokale bivirkninger: hudirritasjon, tretthet
- Kan brukes alene eller sammen med kirurgi/cellegift

**Immunterapi:**
- Stimulerer kroppens eget immunforsvar til å bekjempe kreften
- Nyere behandlingsform med lovende resultater
- Bivirkninger kan ligne autoimmune reaksjoner

**Hormonbehandling:**
- Brukes ved hormonavhengig kreft (bryst, prostata)
- Blokkerer hormonenes stimulering av kreftvekst`,
    },
    {
      id: 'hov2-3-7-def-2',
      type: 'definition',
      title: 'Palliativ omsorg',
      content: `**Palliativ omsorg** er aktiv behandling, pleie og omsorg for pasienter med uhelbredelig sykdom og begrenset levetid. Målet er best mulig livskvalitet gjennom lindring av smerter og andre plagsomme symptomer, samt ivaretakelse av psykiske, sosiale og åndelige/eksistensielle behov. Palliativ omsorg gjelder både pasienten og de pårørende.`,
    },
    {
      id: 'hov2-3-7-text-3',
      type: 'text',
      content: `### Palliativ omsorg i praksis

**De fire dimensjonene i palliativ omsorg:**

1. **Fysisk:** Smertelindring, symptomlindring, god ernæring, komfortabel stilling
2. **Psykisk:** Trygghet, lytte, være tilstede, redusere angst og uro
3. **Sosial:** Tilrettelegge for besøk, ivareta relasjoner, praktisk hjelp
4. **Åndelig/eksistensiell:** Respektere livssynet, tilby samtale, prest eller annen støtte

### Helsefagarbeiderens rolle

**Daglig omsorg:**
- Forsiktig og verdig personlig hygiene
- Munnstell (spesielt viktig ved munntørrhet og sårhet)
- Leieendring og trygg posisjonering
- Tilby mat og drikke etter ønske (ikke press)
- Observere og rapportere smerter og ubehag

**Kommunikasjon:**
- Vær tilstede og lytt
- Tål stillhet - du trenger ikke alltid ha svar
- Berøring kan gi trøst
- Vær ærlig, men skånsom
- La pasienten bestemme tempoet i samtaler`,
    },
    {
      id: 'hov2-3-7-text-4',
      type: 'text',
      content: `### Den terminale fasen

Når pasienten nærmer seg slutten av livet, skjer det graduelle endringer:

**Tegn på at døden nærmer seg:**
- Økende søvnbehov og redusert bevissthet
- Redusert appetitt og væskeinntak
- Endret pustemønster (Cheyne-Stokes respirasjon)
- Urolig pust med surkling (dødsralling)
- Kjølig og marmorert hud, spesielt på føtter og hender
- Svekket puls og lavere blodtrykk

**Omsorg i den terminale fasen:**
- Skape ro og trygghet
- Tilby tilstedeværelse - la pårørende være til stede
- Fuktig munnstell
- Leieendring for komfort
- Smertelindring (ofte subkutant eller via pumpe)
- Reduser unødvendige målinger og tiltak

### Omsorg for pårørende

Pårørende er en viktig del av palliativ omsorg:
- Gi informasjon om sykdomsforløpet
- Tilby samtaler og støtte
- Inviter til å delta i stellet om de ønsker
- Sørg for at de får hvile og mat
- Informer om tilbud som sorggrupper og pårørendeorganisasjoner
- Etter dødsfallet: gi tid til avskjed, vis medfølelse`,
    },
    {
      id: 'hov2-3-7-example-1',
      type: 'example',
      title: 'Eksempel: Palliativ omsorg for beboer med kreft',
      problem: 'Kåre (72 år) har uhelbredelig lungekreft med spredning. Han bor på sykehjem og har tiltagende smerter og tung pust. Familien er mye på besøk. Hvordan ivaretar du Kåre og familien?',
      solution: `**Fysisk omsorg for Kåre:**
- Administrer smertestillende som ordinert, vurder smertenivå med VAS
- Hjelp ham opp i en elevert sittestilling som letter pustingen
- Gi oksygen etter ordinasjon
- Forsiktig munnstell med fuktig svamp
- Tilby små, appetittvekkende porsjoner etter ønske
- Hyppige leieendringer og god hudpleie

**Psykososial omsorg:**
- Sett av tid til å sitte hos Kåre
- Lytt hvis han vil snakke - om livet, bekymringer, ønsker
- Respekter hvis han vil ha stillhet
- Tilrettelegg rommet med personlige gjenstander

**Omsorg for familien:**
- Informer om endringer i tilstanden
- Tilby kaffe, mat og en stol ved sengen
- Vis forståelse for ulike reaksjoner
- Informer om at de kan kontakte prest eller annen støtteperson
- Forbered dem forsiktig på hva som kan komme`,
    },
    {
      id: 'hov2-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-7-ex-1',
        number: '3.7.1',
        type: 'multiple-choice',
        task: 'Hva er palliativ omsorg?',
        options: [
          { id: 'a', text: 'Behandling som helbreder kreftsykdom', isCorrect: false },
          { id: 'b', text: 'Lindrende behandling og omsorg ved uhelbredelig sykdom', isCorrect: true },
          { id: 'c', text: 'Forebyggende tiltak mot kreft', isCorrect: false },
          { id: 'd', text: 'Rehabilitering etter kreftbehandling', isCorrect: false },
        ],
        solution: 'Palliativ omsorg er lindrende behandling og omsorg for pasienter med uhelbredelig sykdom. Målet er best mulig livskvalitet gjennom lindring av fysiske, psykiske, sosiale og åndelige plager.',
      },
    },
    {
      id: 'hov2-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-7-ex-2',
        number: '3.7.2',
        type: 'multiple-choice',
        task: 'Hvilken av disse er den vanligste kreftformen hos kvinner i Norge?',
        options: [
          { id: 'a', text: 'Lungekreft', isCorrect: false },
          { id: 'b', text: 'Tykktarmskreft', isCorrect: false },
          { id: 'c', text: 'Brystkreft', isCorrect: true },
          { id: 'd', text: 'Eggstokkreft', isCorrect: false },
        ],
        solution: 'Brystkreft er den vanligste kreftformen hos kvinner i Norge. Tidlig oppdagelse gjennom mammografiscreening og selvundersøkelse er viktig for prognosen.',
      },
    },
    {
      id: 'hov2-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-7-ex-3',
        number: '3.7.3',
        type: 'classic',
        task: 'Beskriv de fire dimensjonene i palliativ omsorg og gi et eksempel på tiltak innen hver dimensjon.',
        hints: ['Tenk fysisk, psykisk, sosialt og åndelig/eksistensielt'],
        solution: 'De fire dimensjonene er: 1) Fysisk - smertelindring, god ernæring, komfortabel posisjonering. 2) Psykisk - trygghet, lytte til bekymringer, redusere angst gjennom tilstedeværelse. 3) Sosial - tilrettelegge for besøk av familie og venner, opprettholde sosiale relasjoner. 4) Åndelig/eksistensiell - respektere livssynet, tilby samtaler om mening og verdier, kontakte prest eller annen åndelig veileder om ønsket.',
      },
    },
    {
      id: 'hov2-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-7-ex-4',
        number: '3.7.4',
        type: 'classic',
        task: 'Nevn minst fem vanlige bivirkninger av cellegiftbehandling og forklar hvorfor de oppstår.',
        solution: 'Vanlige bivirkninger av cellegift er: 1) Kvalme og oppkast - cellegiften irriterer mage-tarmkanalen. 2) Hårtap - hårfolliklene er raskt delende celler som rammes. 3) Fatigue (utmattelse) - kroppen bruker energi på å reparere skader. 4) Nedsatt immunforsvar - benmarg med blodcelleproduksjon rammes. 5) Munnsår - slimhinneceller fornyes raskt og er sårbare. 6) Diaré eller forstoppelse - tarmslimhinnen påvirkes. Bivirkningene oppstår fordi cellegift angriper alle raskt delende celler, ikke bare kreftceller.',
      },
    },
    {
      id: 'hov2-3-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-3-7-ex-5',
        number: '3.7.5',
        type: 'classic',
        task: 'Beskriv hvordan du som helsefagarbeider kan ivareta pårørende til en døende pasient.',
        solution: 'Du kan ivareta pårørende ved å: gi ærlig og skånsom informasjon om sykdomsforløpet, tilby samtaler og emosjonell støtte, invitere dem til å delta i stellet om de ønsker det, sørge for at de får hvile og mat, tilrettelegge for at de kan være til stede, informere om sorggrupper og pårørendeorganisasjoner, respektere ulike reaksjoner og mestringsstrategier, og etter dødsfallet gi dem tid til avskjed og vise medfølelse.',
      },
    },
    {
      id: 'hov2-3-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kreft** skyldes ukontrollert celledeling og kan ramme alle organer
- Behandling inkluderer kirurgi, cellegift, stråling, immunterapi og hormonbehandling
- **Palliativ omsorg** fokuserer på livskvalitet gjennom fire dimensjoner
- Den **terminale fasen** krever helhetlig omsorg for både pasient og pårørende
- Helsefagarbeiderens nærvær og omsorg er uvurderlig i livets sluttfase

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kreft | Ukontrollert celledeling |
| Metastaser | Spredning av kreftceller til andre organer |
| Palliativ omsorg | Lindrende behandling og omsorg |
| Terminal fase | Den siste fasen av livet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const HELSEOPPVEKST_VG2_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HOV2_3_1,
  CHAPTER_HOV2_3_2,
  CHAPTER_HOV2_3_3,
  CHAPTER_HOV2_3_4,
  CHAPTER_HOV2_3_5,
  CHAPTER_HOV2_3_6,
  CHAPTER_HOV2_3_7,
];
