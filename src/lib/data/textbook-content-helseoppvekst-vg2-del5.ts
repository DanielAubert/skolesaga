/**
 * Helse- og oppvekstfag VG2 - Del 5: Legemidler og medisinsk utstyr
 * Kapittel 5.1-5.6
 *
 * Dekker LK20 kompetansemål:
 * - gjøre rede for legemiddelgrupper og virkningsmekanismer
 * - utføre legemiddelhåndtering i tråd med gjeldende regelverk
 * - bruke medisinsk utstyr og velferdsteknologi
 * - utføre førstehjelp og handle i akutte situasjoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Legemiddelgrupper og virkningsmekanismer
// ============================================================================

export const CHAPTER_HOV2_5_1: TextbookChapter = {
  id: 'hov2-5-1',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '5.1',
  title: 'Legemiddelgrupper og virkningsmekanismer',
  description: 'En innføring i de viktigste legemiddelgruppene, hvordan de virker i kroppen, og hva helsefagarbeidere må vite om bivirkninger og interaksjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for legemiddelgrupper og virkningsmekanismer',
  ],
  content: [
    {
      id: 'hov2-5-1-intro',
      type: 'text',
      content: `## Legemidler i helsetjenesten

Legemidler er en av de viktigste behandlingsformene i moderne helsevesen. Som helsefagarbeider vil du daglig ha kontakt med pasienter som bruker legemidler, og du må forstå hvordan de virker og hvilke observasjoner som er viktige.

I dette kapittelet lærer du:
- Hva et legemiddel er og hvordan det virker
- De viktigste legemiddelgruppene
- Bivirkninger og interaksjoner
- Farmakokinetikk og farmakodynamikk`,
    },
    {
      id: 'hov2-5-1-def-1',
      type: 'definition',
      title: 'Legemiddel',
      content: `Et **legemiddel** er et stoff eller en sammensetning av stoffer som er beregnet til å forebygge, diagnostisere, behandle eller lindre sykdom eller symptomer hos mennesker. Legemidler er regulert av **legemiddelloven** og krever godkjenning fra Statens legemiddelverk før de kan selges.`,
    },
    {
      id: 'hov2-5-1-text-1',
      type: 'text',
      content: `### Farmakokinetikk – hva kroppen gjør med legemiddelet

**Farmakokinetikk** beskriver hva som skjer med et legemiddel fra det tas inn til det skilles ut av kroppen. Prosessen deles inn i fire faser:

**1. Absorpsjon (opptak)**
- Legemiddelet tas opp i blodet fra administrasjonsstedet
- Tabletter absorberes fra mage-tarm-kanalen
- Injeksjoner går direkte i blodet eller vevet
- Salver og plaster absorberes gjennom huden

**2. Distribusjon (fordeling)**
- Legemiddelet transporteres med blodet til ulike organer
- Fettløselige legemidler fordeles til fettvev
- Vannløselige legemidler holder seg i blodbanen
- Proteinbinding påvirker hvor mye fritt legemiddel som er tilgjengelig

**3. Metabolisme (omdanning)**
- Leveren er det viktigste organet for nedbrytning av legemidler
- Leverenzymer bryter ned legemidlene til inaktive metabolitter
- Nedsatt leverfunksjon kan gi økt legemiddeleffekt

**4. Ekskresjon (utskillelse)**
- Nyrene skiller ut de fleste legemidlene via urinen
- Noen legemidler skilles ut via galle, avføring eller utåndingsluft
- Nedsatt nyrefunksjon krever dosejustering`,
    },
    {
      id: 'hov2-5-1-def-2',
      type: 'definition',
      title: 'Farmakodynamikk',
      content: `**Farmakodynamikk** beskriver hva legemiddelet gjør med kroppen – altså hvordan det virker. De fleste legemidler virker ved å binde seg til **reseptorer** på cellene, enten som agonister (aktiverer) eller antagonister (blokkerer). Andre mekanismer inkluderer hemming av enzymer, påvirkning av ionekanaler og erstatning av manglende stoffer.`,
    },
    {
      id: 'hov2-5-1-text-2',
      type: 'text',
      content: `### De viktigste legemiddelgruppene

**Analgetika (smertestillende)**
- **Paracetamol**: Mild smertestillende og febernedsettende, førstevalg ved lett til moderat smerte
- **NSAIDs** (ibuprofen, naproxen): Smertestillende, betennelsesdempende og febernedsettende
- **Opioider** (morfin, kodein): Sterke smertestillende, brukes ved sterk smerte, gir avhengighet

**Antibiotika**
- Dreper eller hemmer vekst av bakterier
- Penicillin er den vanligste gruppen
- Viktig med riktig bruk for å forebygge resistens
- Virker ikke mot virus

**Hjerte- og karlegemidler**
- **Betablokkere**: Senker hjertefrekvens og blodtrykk
- **ACE-hemmere**: Utvider blodkar og senker blodtrykk
- **Statiner**: Senker kolesterolet i blodet
- **Blodfortynnende**: Forebygger blodpropp (warfarin, DOAK)

**Psykofarmaka**
- **Antidepressiva** (SSRI): Øker serotoninnivået i hjernen
- **Antipsykotika**: Brukes ved psykoser og schizofreni
- **Anxiolytika** (benzodiazepiner): Angstdempende, kan gi avhengighet
- **Stemningsstabiliserende**: Brukes ved bipolar lidelse`,
    },
    {
      id: 'hov2-5-1-text-3',
      type: 'text',
      content: `### Administrasjonsformer

Legemidler kan gis på ulike måter avhengig av ønsket effekt:

**Peroral administrasjon (via munnen)**
- Tabletter, kapsler, mikstur, dråper
- Vanligste administrasjonsformen
- Effekten kommer etter 15-60 minutter

**Parenteral administrasjon (injeksjon)**
- Intravenøst (i.v.): Direkte i blodet, raskeste effekt
- Intramuskulært (i.m.): I en muskel
- Subkutant (s.c.): Under huden, f.eks. insulin

**Lokal administrasjon**
- Salver og kremer på huden
- Øyedråper og øresalve
- Inhalasjoner til lungene
- Stikkpiller (rektalt/vaginalt)

**Transdermal administrasjon**
- Depotplaster som avgir legemiddel gjennom huden
- Brukes for smertestillende, nikotin og hormoner`,
    },
    {
      id: 'hov2-5-1-tip-1',
      type: 'tip',
      title: 'Bivirkninger og interaksjoner',
      content: `Alle legemidler kan gi bivirkninger. De vanligste er kvalme, hodepine, svimmelhet og utslett. **Interaksjoner** oppstår når to eller flere legemidler påvirker hverandre. Noen interaksjoner kan være farlige – for eksempel kan blodfortynnende sammen med NSAIDs gi økt blødningsrisiko. Helsefagarbeidere må observere og rapportere bivirkninger til sykepleier eller lege.`,
    },
    {
      id: 'hov2-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Observasjoner ved legemiddelbruk',
      content: `**Situasjon**: Kari, 82 år, bor på sykehjem og bruker flere legemidler: blodtrykksmedisin (amlodipin), blodfortynnende (warfarin), smertestillende (paracetamol) og vanndrivende (furosemid).

**Viktige observasjoner for helsefagarbeideren:**
- Måle blodtrykk regelmessig – amlodipin kan gi for lavt blodtrykk og svimmelhet
- Observere for blødningstegn – warfarin øker blødningsrisiko (blåmerker, blod i avføring)
- Sikre tilstrekkelig væskeinntak – furosemid driver ut væske og kan gi dehydrering
- Observere for tegn på smerte – paracetamol skal tas til faste tider
- Rapportere endringer til sykepleier umiddelbart

**Konklusjon**: Observasjonsevne og kunnskap om legemidler gjør helsefagarbeideren til en viktig del av det tverrfaglige teamet.`,
    },
    {
      id: 'hov2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        task: 'Hva beskriver farmakokinetikk?',
        options: [
          { id: 'a', text: 'Hva legemiddelet gjør med kroppen', isCorrect: false },
          { id: 'b', text: 'Hva kroppen gjør med legemiddelet', isCorrect: true },
          { id: 'c', text: 'Hvordan legemidler produseres', isCorrect: false },
          { id: 'd', text: 'Hvordan legemidler forskrives', isCorrect: false },
        ],
        solution: 'Farmakokinetikk beskriver hva kroppen gjør med legemiddelet – altså opptak, fordeling, omdanning og utskillelse. Farmakodynamikk beskriver det motsatte: hva legemiddelet gjør med kroppen.',
      },
    },
    {
      id: 'hov2-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-1-ex-2',
        number: '5.1.2',
        type: 'multiple-choice',
        task: 'Hvilket organ er viktigst for nedbrytning av legemidler?',
        options: [
          { id: 'a', text: 'Nyrene', isCorrect: false },
          { id: 'b', text: 'Hjertet', isCorrect: false },
          { id: 'c', text: 'Leveren', isCorrect: true },
          { id: 'd', text: 'Lungene', isCorrect: false },
        ],
        solution: 'Leveren er det viktigste organet for metabolisme (nedbrytning) av legemidler. Leverenzymer omdanner legemidlene til inaktive stoffer som kan skilles ut. Nyrene er viktigst for utskillelsen av legemidler og metabolitter.',
      },
    },
    {
      id: 'hov2-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        task: 'Forklar de fire fasene i farmakokinetikken med egne ord.',
        solution: 'De fire fasene er: 1) Absorpsjon – legemiddelet tas opp i blodet fra stedet det ble gitt. 2) Distribusjon – legemiddelet fordeles via blodet til ulike organer og vev. 3) Metabolisme – leveren bryter ned legemiddelet til inaktive stoffer. 4) Ekskresjon – kroppen skiller ut legemiddelet og dets nedbrytningsprodukter, hovedsakelig via nyrene.',
      },
    },
    {
      id: 'hov2-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        task: 'Nevn tre ulike legemiddelgrupper og gi et eksempel på bruksområde for hver.',
        solution: '1) Analgetika (smertestillende) – brukes ved smertetilstander, f.eks. paracetamol ved hodepine. 2) Antibiotika – brukes mot bakterielle infeksjoner, f.eks. penicillin ved lungebetennelse. 3) Hjerte- og karlegemidler – brukes ved hjerte- og karsykdommer, f.eks. statiner ved høyt kolesterol.',
      },
    },
    {
      id: 'hov2-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-1-ex-5',
        number: '5.1.5',
        type: 'multiple-choice',
        task: 'Hva er en interaksjon mellom legemidler?',
        options: [
          { id: 'a', text: 'Når et legemiddel virker raskere enn forventet', isCorrect: false },
          { id: 'b', text: 'Når to eller flere legemidler påvirker hverandre', isCorrect: true },
          { id: 'c', text: 'Når et legemiddel gir allergisk reaksjon', isCorrect: false },
          { id: 'd', text: 'Når et legemiddel slutter å virke', isCorrect: false },
        ],
        solution: 'En interaksjon oppstår når to eller flere legemidler påvirker hverandre slik at effekten endres. Dette kan føre til forsterket eller svekket virkning, eller nye bivirkninger. Et eksempel er at NSAIDs sammen med blodfortynnende øker blødningsrisikoen.',
      },
    },
    {
      id: 'hov2-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-1-ex-6',
        number: '5.1.6',
        type: 'classic',
        task: 'En pasient bruker warfarin (blodfortynnende) og begynner å ta ibuprofen mot hodepine. Hvilke observasjoner bør du gjøre, og hvorfor?',
        solution: 'Du bør observere for tegn på blødning: uvanlige blåmerker, blødning fra tannkjøtt, blod i avføring eller urin, neseblødning. Ibuprofen (NSAID) øker blødningsrisikoen og kan forsterke effekten av warfarin. Du bør rapportere til sykepleier eller lege slik at legemiddelregimet kan vurderes.',
      },
    },
    {
      id: 'hov2-5-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Farmakokinetikk** beskriver hva kroppen gjør med legemiddelet (ADME)
- **Farmakodynamikk** beskriver hvordan legemiddelet virker i kroppen
- De viktigste **legemiddelgruppene** inkluderer analgetika, antibiotika, hjerte-karlegemidler og psykofarmaka
- **Bivirkninger og interaksjoner** krever oppmerksomme observasjoner fra helsefagarbeideren

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Farmakokinetikk | Hva kroppen gjør med legemiddelet |
| Farmakodynamikk | Hva legemiddelet gjør med kroppen |
| Interaksjon | Gjensidig påvirkning mellom legemidler |
| Bivirkning | Uønsket effekt av et legemiddel |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Legemiddel', definition: 'Stoff som forebygger, diagnostiserer, behandler eller lindrer sykdom' },
    { term: 'Farmakokinetikk', definition: 'Hva kroppen gjør med legemiddelet – opptak, fordeling, omdanning og utskillelse' },
    { term: 'Farmakodynamikk', definition: 'Hva legemiddelet gjør med kroppen – virkningsmekanismen' },
    { term: 'Interaksjon', definition: 'Når to eller flere legemidler påvirker hverandres effekt' },
    { term: 'Bivirkning', definition: 'Uønsket effekt av et legemiddel utover tilsiktet virkning' },
  ],
};

// ============================================================================
// Kapittel 5.2: Legemiddelhåndtering i praksis
// ============================================================================

export const CHAPTER_HOV2_5_2: TextbookChapter = {
  id: 'hov2-5-2',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '5.2',
  title: 'Legemiddelhåndtering i praksis',
  description: 'Praktisk legemiddelhåndtering med fokus på de syv R-ene, lovverk, oppbevaring og dokumentasjon. Lær å håndtere legemidler trygt og forsvarlig.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utføre legemiddelhåndtering i tråd med gjeldende regelverk',
  ],
  content: [
    {
      id: 'hov2-5-2-intro',
      type: 'text',
      content: `## Trygg legemiddelhåndtering

Legemiddelhåndtering er en av de viktigste oppgavene i helse- og omsorgstjenesten. Feil i legemiddelhåndteringen kan få alvorlige konsekvenser for pasienten. Derfor er det strenge regler og rutiner for hvordan legemidler skal håndteres.

I dette kapittelet lærer du:
- De syv R-ene for sikker legemiddelhåndtering
- Lovverk og forskrifter
- Praktisk utdeling og oppbevaring
- Dokumentasjon og avvikshåndtering`,
    },
    {
      id: 'hov2-5-2-def-1',
      type: 'definition',
      title: 'De syv R-ene',
      content: `**De syv R-ene** er en huskeregel for sikker legemiddelhåndtering: **Riktig pasient**, **riktig legemiddel**, **riktig dose**, **riktig administrasjonsform**, **riktig tid**, **riktig dokumentasjon** og **riktig observasjon**. Disse skal sjekkes ved hver eneste legemiddelutdeling for å forebygge feil.`,
    },
    {
      id: 'hov2-5-2-text-1',
      type: 'text',
      content: `### De syv R-ene i detalj

**1. Riktig pasient**
- Sjekk at legemiddelet tilhører riktig person
- Bruk to identifiseringsmetoder (navn og fødselsdato)
- Vær ekstra oppmerksom ved navnelikheter

**2. Riktig legemiddel**
- Kontroller legemiddelnavnet mot ordinasjonskortet
- Sjekk at preparatet stemmer med det som er forskrevet
- Vær oppmerksom på generiske navn versus handelsnavn

**3. Riktig dose**
- Kontroller dosen nøye mot ordinasjonskortet
- Vær oppmerksom på desimaler og enheter
- Dobbelsjekk ved uvanlige doser

**4. Riktig administrasjonsform**
- Tabletter skal ikke knuses uten godkjenning
- Depottabletter skal aldri deles eller knuses
- Riktig teknikk ved inhalasjoner, øyedråper osv.

**5. Riktig tid**
- Gi legemiddelet til foreskrevet tidspunkt
- Noen legemidler skal tas med mat, andre fastende
- Tidsintervallene mellom dosene er viktige

**6. Riktig dokumentasjon**
- Dokumenter at legemiddelet er gitt
- Dokumenter eventuelle avvik
- Signering i medisinkort eller elektronisk kurve

**7. Riktig observasjon**
- Observer effekt og eventuelle bivirkninger
- Rapporter endringer til sykepleier
- Følg opp at pasienten faktisk tar legemiddelet`,
    },
    {
      id: 'hov2-5-2-text-2',
      type: 'text',
      content: `### Lovverk og ansvarsfordeling

**Forskrift om legemiddelhåndtering** regulerer hvem som kan gjøre hva:

**Legens ansvar:**
- Foreskrive (ordinere) legemidler
- Vurdere indikasjon og kontraindikasjoner
- Justere doser ved behov

**Sykepleierens ansvar:**
- Istandgjøring av legemidler (gjøre klar doser)
- Utdeling til pasienter
- Delegere oppgaver til helsefagarbeidere
- Observere effekt og bivirkninger

**Helsefagarbeiderens ansvar:**
- Utdeling av ferdig istandgjorte legemidler (etter delegasjon)
- Observasjon av effekt og bivirkninger
- Dokumentasjon av utdeling
- Rapportering av avvik

**Virksomhetsleders ansvar:**
- Sørge for forsvarlige rutiner
- Opplæring og kompetanseutvikling
- System for avvikshåndtering`,
    },
    {
      id: 'hov2-5-2-def-2',
      type: 'definition',
      title: 'Multidose',
      content: `**Multidose** er maskinelt pakkede legemiddelposer der pasientens faste legemidler er pakket i individuelle doseringsposer merket med navn, fødselsdato, legemiddelnavn, dose og tidspunkt. Multidose reduserer risikoen for feilmedisinering og forenkler legemiddeladministrasjonen.`,
    },
    {
      id: 'hov2-5-2-text-3',
      type: 'text',
      content: `### Oppbevaring av legemidler

**Generelle krav:**
- Legemidler skal oppbevares i låst skap eller rom
- Riktig temperatur (romtemperatur, kjøleskap eller fryser)
- Kontroll av holdbarhetsdato
- Separering av sterke legemidler (A- og B-preparater)

**A-preparater (narkotiske stoffer):**
- Oppbevares i eget låst skap med dobbel lås
- Nøye regnskap med telling og signering
- Eksempler: morfin, oksykodon, fentanyl

**B-preparater (vanedannende):**
- Oppbevares i låst skap
- Regnskap og kontroll
- Eksempler: benzodiazepiner (Sobril, Vival)

**Avfallshåndtering:**
- Ubrukte legemidler leveres til apotek
- Narkotika kasseres med vitne og dokumentasjon
- Aldri kast legemidler i vanlig søppel`,
    },
    {
      id: 'hov2-5-2-tip-1',
      type: 'tip',
      title: 'Avvikshåndtering',
      content: `Dersom det oppstår feil i legemiddelhåndteringen, skal det meldes som et avvik. Avviksmelding er ikke straff, men et verktøy for å lære og forbedre rutinene. Alle avvik skal dokumenteres, og det skal iverksettes tiltak for å hindre at samme feil skjer igjen. Åpenhet om feil bidrar til økt pasientsikkerhet.`,
    },
    {
      id: 'hov2-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Legemiddelutdeling i hjemmetjenesten',
      content: `**Situasjon**: Du skal dele ut morgenmedisiner til Olav, 78 år, som bor hjemme og får multidose.

**Fremgangsmåte med de syv R-ene:**
1. **Riktig pasient**: Sjekker navnet og fødselsdatoen på multidoseposen – stemmer med Olav
2. **Riktig legemiddel**: Leser innholdet på posen og sammenligner med medisinkortet
3. **Riktig dose**: Kontrollerer antall tabletter og styrke mot ordinasjonskortet
4. **Riktig administrasjonsform**: Tablettene skal svelges hele med vann
5. **Riktig tid**: Det er morgen, og posen er merket «morgen»
6. **Riktig dokumentasjon**: Signerer i medisinkortet at legemidlene er gitt
7. **Riktig observasjon**: Ser at Olav svelger tablettene, spør om bivirkninger

**Viktig**: Olav nevner at han har vært svimmel de siste dagene. Du noterer dette og rapporterer til sykepleier, da det kan skyldes blodtrykksmedisinen.`,
    },
    {
      id: 'hov2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        task: 'Hvilken av de syv R-ene handler om å kontrollere at pasienten faktisk tar legemiddelet?',
        options: [
          { id: 'a', text: 'Riktig dose', isCorrect: false },
          { id: 'b', text: 'Riktig dokumentasjon', isCorrect: false },
          { id: 'c', text: 'Riktig observasjon', isCorrect: true },
          { id: 'd', text: 'Riktig tid', isCorrect: false },
        ],
        solution: 'Riktig observasjon innebærer blant annet å se at pasienten faktisk tar legemiddelet, observere effekt og bivirkninger, og følge opp at behandlingen fungerer som tiltenkt.',
      },
    },
    {
      id: 'hov2-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        task: 'Forklar alle de syv R-ene med egne ord og gi et praktisk eksempel på hvorfor hver enkelt er viktig.',
        solution: '1) Riktig pasient – forhindrer forveksling, viktig ved navnelikheter. 2) Riktig legemiddel – forhindrer at feil medisin gis, sjekk mot ordinasjonskort. 3) Riktig dose – feil dose kan gi manglende effekt eller overdosering. 4) Riktig administrasjonsform – f.eks. depottabletter som knuses, mister depoteffekten. 5) Riktig tid – noen medisiner krever jevne intervaller for stabil virkning. 6) Riktig dokumentasjon – sikrer at neste vakt vet hva som er gitt. 7) Riktig observasjon – fanger opp bivirkninger og sikrer at medisinen tas.',
      },
    },
    {
      id: 'hov2-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-2-ex-3',
        number: '5.2.3',
        type: 'multiple-choice',
        task: 'Hvordan skal A-preparater (narkotiske stoffer) oppbevares?',
        options: [
          { id: 'a', text: 'I vanlig medisinskap sammen med andre legemidler', isCorrect: false },
          { id: 'b', text: 'I eget låst skap med dobbel lås og nøye regnskap', isCorrect: true },
          { id: 'c', text: 'I kjøleskap med andre legemidler', isCorrect: false },
          { id: 'd', text: 'I pasientens eget nattbordskap', isCorrect: false },
        ],
        solution: 'A-preparater (narkotiske stoffer som morfin og oksykodon) skal oppbevares i eget låst skap med dobbel lås. Det føres nøye regnskap med telling og signering for å forebygge misbruk og svinn.',
      },
    },
    {
      id: 'hov2-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        task: 'Hva er multidose, og hvilke fordeler har dette systemet?',
        solution: 'Multidose er maskinelt pakkede legemiddelposer der pasientens faste legemidler er pakket i individuelle poser merket med navn, fødselsdato og tidspunkt. Fordelene er: redusert risiko for feilmedisinering, enklere legemiddeladministrasjon, bedre oversikt over pasientens legemidler, og mindre svinn.',
      },
    },
    {
      id: 'hov2-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        task: 'Beskriv ansvarsfordelingen mellom lege, sykepleier og helsefagarbeider i legemiddelhåndteringen.',
        solution: 'Legen foreskriver legemidler og har det medisinske ansvaret. Sykepleieren har ansvar for istandgjøring, utdeling og kan delegere oppgaver til helsefagarbeideren. Helsefagarbeideren kan dele ut ferdig istandgjorte legemidler etter delegasjon, observere effekt og bivirkninger, dokumentere og melde avvik. Virksomhetsleder har overordnet ansvar for forsvarlige rutiner.',
      },
    },
    {
      id: 'hov2-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-2-ex-6',
        number: '5.2.6',
        type: 'classic',
        task: 'Du oppdager at en pasient har fått feil dose av et legemiddel. Hva gjør du?',
        solution: 'Først må du sikre pasienten: observer for tegn på bivirkninger og kontakt sykepleier eller lege umiddelbart. Dokumenter hendelsen og meld avvik etter virksomhetens rutiner. Avviksmeldingen skal beskrive hva som skjedde, når det skjedde, og hvilke tiltak som ble iverksatt. Hensikten er å lære av feilen og forbedre rutinene for å forebygge at det skjer igjen.',
      },
    },
    {
      id: 'hov2-5-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **De syv R-ene** er grunnlaget for sikker legemiddelhåndtering
- **Lovverket** regulerer ansvarsfordeling mellom lege, sykepleier og helsefagarbeider
- **Multidose** forenkler og sikrer legemiddelutdeling
- **Avvikshåndtering** er et viktig verktøy for læring og forbedring

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| De syv R-ene | Huskeregel for sikker legemiddelutdeling |
| Multidose | Maskinelt pakkede individuelle legemiddelposer |
| A-preparat | Narkotisk stoff med streng kontroll |
| Avviksmelding | Rapportering av feil for læring og forbedring |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'De syv R-ene', definition: 'Huskeregel for sikker legemiddelhåndtering: riktig pasient, legemiddel, dose, form, tid, dokumentasjon, observasjon' },
    { term: 'Multidose', definition: 'Maskinelt pakkede individuelle legemiddelposer med pasientens faste medisiner' },
    { term: 'A-preparat', definition: 'Narkotisk legemiddel med strenge krav til oppbevaring og regnskap' },
    { term: 'B-preparat', definition: 'Vanedannende legemiddel med krav til kontroll' },
    { term: 'Avviksmelding', definition: 'Rapportering av uønsket hendelse for læring og forebygging' },
  ],
};

// ============================================================================
// Kapittel 5.3: Medisinsk utstyr og teknologi
// ============================================================================

export const CHAPTER_HOV2_5_3: TextbookChapter = {
  id: 'hov2-5-3',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '5.3',
  title: 'Medisinsk utstyr og teknologi',
  description: 'Praktisk bruk av medisinsk utstyr som blodtrykksmåler, pulsoksymeter, blodsukkerapparat og termometer. Lær korrekt teknikk og tolkning av resultater.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke medisinsk utstyr og velferdsteknologi',
  ],
  content: [
    {
      id: 'hov2-5-3-intro',
      type: 'text',
      content: `## Medisinsk utstyr i hverdagen

Helsefagarbeidere bruker daglig ulike typer medisinsk utstyr for å overvåke pasienters helsetilstand. Riktig bruk av utstyret er avgjørende for pålitelige målinger og god pasientomsorg.

I dette kapittelet lærer du:
- Blodtrykksmåling og tolkning
- Pulsoksymetri og oksygenmetning
- Blodsukkerapparat og diabetes
- Temperaturmåling og feber`,
    },
    {
      id: 'hov2-5-3-def-1',
      type: 'definition',
      title: 'Blodtrykk',
      content: `**Blodtrykk** er trykket blodet utøver mot blodkarveggen. Det måles i millimeter kvikksølv (mmHg) og angis med to tall: **systolisk trykk** (når hjertet trekker seg sammen) og **diastolisk trykk** (når hjertet er avslappet). Normalt blodtrykk er under 140/90 mmHg.`,
    },
    {
      id: 'hov2-5-3-text-1',
      type: 'text',
      content: `### Blodtrykksmåling

**Utstyr:**
- Automatisk eller manuelt blodtrykksapparat
- Mansjett i riktig størrelse (dekker 80 % av overarmen)
- Stetoskop (ved manuell måling)

**Fremgangsmåte:**
1. Pasienten skal hvile i minst 5 minutter før måling
2. Pasienten sitter med støtte for ryggen og armen i hjertehøyde
3. Mansjetten plasseres 2-3 cm over albuebøyen
4. Mål på bar arm – ikke over klær
5. Ta gjerne to målinger med 1-2 minutters mellomrom

**Normalverdier:**
- **Normalt**: Under 130/85 mmHg
- **Høyt normalt**: 130-139/85-89 mmHg
- **Hypertensjon grad 1**: 140-159/90-99 mmHg
- **Hypertensjon grad 2**: 160-179/100-109 mmHg
- **Lavt blodtrykk (hypotensjon)**: Under 90/60 mmHg

**Feilkilder:**
- Feil mansjettsize gir feil verdier
- Stress, kaffe og røyking kan gi høyere verdier
- Målinger bør tas til samme tid for sammenligning`,
    },
    {
      id: 'hov2-5-3-def-2',
      type: 'definition',
      title: 'Pulsoksymeter',
      content: `Et **pulsoksymeter** er et lite apparat som måler oksygenmetningen i blodet (SpO2) og pulsfrekvensen. Det klemmes vanligvis på en finger og bruker infrarødt lys for å måle hvor mye oksygen hemoglobinet i blodet bærer. Normal oksygenmetning er 95-100 %.`,
    },
    {
      id: 'hov2-5-3-text-2',
      type: 'text',
      content: `### Pulsoksymetri

**Bruk av pulsoksymeter:**
1. Plasser klipsen på en finger (pekefinger eller langfinger)
2. Sørg for at fingeren er varm og har god sirkulasjon
3. Fjern neglelakk som kan forstyrre målingen
4. Vent til stabil avlesning (10-15 sekunder)

**Tolkning av resultater:**
- **95-100 %**: Normal oksygenmetning
- **90-94 %**: Lett nedsatt, krever oppfølging
- **Under 90 %**: Alvorlig – kontakt sykepleier/lege umiddelbart
- **Under 85 %**: Kritisk – akuttsituasjon

**Feilkilder:**
- Kalde fingre eller dårlig sirkulasjon
- Neglelakk eller kunstige negler
- Bevegelse under måling
- Karbonmonoksidforgiftning gir falskt høye verdier

### Puls

**Normalverdier for hvilepuls:**
- Voksne: 60-100 slag per minutt
- Godt trente: Kan ha under 60
- Eldre: Ofte noe høyere hvilepuls
- Barn: Høyere puls enn voksne`,
    },
    {
      id: 'hov2-5-3-text-3',
      type: 'text',
      content: `### Blodsukkerapparat

**Bruk av blodsukkerapparat:**
1. Vask hendene med varmt vann og tørk godt
2. Sett inn teststrip i apparatet
3. Stikk i siden av fingertuppen med blodsukkerpenn
4. Påfør bloddråpen på teststripen
5. Avles resultatet etter noen sekunder

**Normalverdier:**
- **Fastende**: 4,0-6,0 mmol/l
- **Etter måltid (2 timer)**: Under 7,8 mmol/l
- **Hypoglykemi (lavt blodsukker)**: Under 4,0 mmol/l
- **Hyperglykemi (høyt blodsukker)**: Over 11,0 mmol/l

### Temperaturmåling

**Målemetoder:**
- **Øretemperatur**: Rask og lite ubehagelig, normalt 35,8-38,0 °C
- **Pannetemperatur**: Kontaktfri, praktisk ved smitte
- **Under armen (aksillært)**: Tradisjonell metode, normalt 36,0-37,0 °C
- **Rektalt**: Mest nøyaktig, normalt 36,2-37,8 °C

**Feber:**
- Lett forhøyet: 37,5-38,0 °C
- Feber: 38,0-39,0 °C
- Høy feber: 39,0-41,0 °C
- Livstruende: Over 41,0 °C`,
    },
    {
      id: 'hov2-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Morgenrunde med vitale målinger',
      content: `**Situasjon**: Du gjør morgenrunde på sykehjem og skal måle vitale tegn hos tre beboere.

**Beboer 1 – Anna, 85 år (diabetes og hypertensjon):**
- Blodsukker fastende: 8,2 mmol/l (litt forhøyet – dokumenter og observer)
- Blodtrykk: 155/92 mmHg (forhøyet – rapporter til sykepleier)
- Puls: 72 slag/min (normalt)

**Beboer 2 – Erik, 79 år (KOLS):**
- SpO2: 91 % (nedsatt – vanlig for KOLS, men sjekk om det er lavere enn normalt for ham)
- Puls: 88 slag/min (normalt)
- Temperatur: 38,3 °C (feber – rapporter umiddelbart)

**Beboer 3 – Liv, 90 år (hjertesvikt):**
- Blodtrykk: 105/65 mmHg (normalt for henne)
- Puls: 56 slag/min (bradykardi – kan skyldes betablokker, men rapporter)
- Vekt: Økt 2 kg siste uke (kan tyde på væskeopphopning)

**Handling**: Dokumenter alle målinger, rapporter avvikende verdier til sykepleier.`,
    },
    {
      id: 'hov2-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        task: 'Hva er normal oksygenmetning målt med pulsoksymeter?',
        options: [
          { id: 'a', text: '80-90 %', isCorrect: false },
          { id: 'b', text: '85-95 %', isCorrect: false },
          { id: 'c', text: '95-100 %', isCorrect: true },
          { id: 'd', text: '90-95 %', isCorrect: false },
        ],
        solution: 'Normal oksygenmetning (SpO2) er 95-100 %. Verdier under 90 % regnes som alvorlig og krever umiddelbar handling. Verdier mellom 90-94 % krever oppfølging.',
      },
    },
    {
      id: 'hov2-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        task: 'Beskriv fremgangsmåten for korrekt blodtrykksmåling.',
        solution: 'Pasienten skal hvile i minst 5 minutter. Sitter med støtte for ryggen, armen i hjertehøyde. Mansjetten plasseres 2-3 cm over albuebøyen, på bar arm. Mansjetten må ha riktig størrelse (dekke 80 % av overarmen). Ta gjerne to målinger med 1-2 minutters mellomrom. Unngå måling rett etter kaffe, røyking eller fysisk aktivitet.',
      },
    },
    {
      id: 'hov2-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-3-ex-3',
        number: '5.3.3',
        type: 'multiple-choice',
        task: 'Hva er normalt fastende blodsukker?',
        options: [
          { id: 'a', text: '2,0-4,0 mmol/l', isCorrect: false },
          { id: 'b', text: '4,0-6,0 mmol/l', isCorrect: true },
          { id: 'c', text: '6,0-8,0 mmol/l', isCorrect: false },
          { id: 'd', text: '8,0-10,0 mmol/l', isCorrect: false },
        ],
        solution: 'Normalt fastende blodsukker er 4,0-6,0 mmol/l. Verdier under 4,0 mmol/l regnes som hypoglykemi (lavt blodsukker), mens verdier over 7,0 mmol/l fastende kan tyde på diabetes.',
      },
    },
    {
      id: 'hov2-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        task: 'Nevn tre feilkilder ved bruk av pulsoksymeter og forklar hvordan de kan unngås.',
        solution: '1) Kalde fingre – sørg for at pasienten er varm, gni gjerne fingeren for å bedre sirkulasjonen. 2) Neglelakk – fjern neglelakk før måling, da den kan forstyrre det infrarøde lyset. 3) Bevegelse – sørg for at pasienten holder hånden rolig under målingen for stabil avlesning.',
      },
    },
    {
      id: 'hov2-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        task: 'En pasient har blodtrykk 170/100 mmHg, puls 95 og SpO2 93 %. Vurder disse verdiene og beskriv hva du gjør.',
        solution: 'Blodtrykket er forhøyet (hypertensjon grad 2). Pulsen er i øvre normalområde. SpO2 er lett nedsatt. Tiltak: Dokumenter alle verdiene, rapporter umiddelbart til sykepleier. La pasienten hvile i en behagelig stilling. Observer for symptomer som hodepine, svimmelhet eller tungpustethet. Mål gjerne blodtrykk og SpO2 på nytt etter 15-20 minutter for å se utviklingen.',
      },
    },
    {
      id: 'hov2-5-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Blodtrykk** måles korrekt med riktig teknikk og mansjettsize
- **Pulsoksymeter** måler oksygenmetning – normalt 95-100 %
- **Blodsukkerapparat** brukes for å overvåke diabetes – fastende normalt 4,0-6,0 mmol/l
- **Temperaturmåling** kan gjøres på flere måter – feber er over 38,0 °C

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Blodtrykk | Trykket blodet utøver mot karveggen |
| Pulsoksymeter | Apparat som måler oksygenmetning i blodet |
| SpO2 | Oksygenmetning i blodet |
| Hypoglykemi | For lavt blodsukker (under 4,0 mmol/l) |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Blodtrykk', definition: 'Trykket blodet utøver mot karveggen, måles i mmHg' },
    { term: 'Pulsoksymeter', definition: 'Apparat som måler oksygenmetning og puls via infrarødt lys' },
    { term: 'SpO2', definition: 'Oksygenmetning i blodet, normalt 95-100 %' },
    { term: 'Hypoglykemi', definition: 'Lavt blodsukker, under 4,0 mmol/l' },
    { term: 'Hyperglykemi', definition: 'Høyt blodsukker, over 11,0 mmol/l' },
  ],
};

// ============================================================================
// Kapittel 5.4: Hjelpemidler og velferdsteknologi
// ============================================================================

export const CHAPTER_HOV2_5_4: TextbookChapter = {
  id: 'hov2-5-4',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '5.4',
  title: 'Hjelpemidler og velferdsteknologi',
  description: 'Oversikt over tekniske hjelpemidler og velferdsteknologi som GPS-sporing, trygghetsalarmer, elektroniske medisindispensere og smarthusløsninger i helse- og omsorgstjenesten.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke medisinsk utstyr og velferdsteknologi',
  ],
  content: [
    {
      id: 'hov2-5-4-intro',
      type: 'text',
      content: `## Teknologi for trygghet og mestring

Velferdsteknologi gjør det mulig for flere å bo hjemme lenger og mestre hverdagen selv. For helsefagarbeidere er det viktig å kjenne til hvilke hjelpemidler som finnes, og å kunne veilede brukere i bruken av dem.

I dette kapittelet lærer du:
- Hva velferdsteknologi er og hvorfor det brukes
- Trygghetsalarmer og GPS-sporing
- Elektroniske medisindispensere
- Smarthusløsninger og sensorer`,
    },
    {
      id: 'hov2-5-4-def-1',
      type: 'definition',
      title: 'Velferdsteknologi',
      content: `**Velferdsteknologi** er teknologisk assistanse som bidrar til økt trygghet, sikkerhet, sosial deltakelse, mobilitet og fysisk og kulturell aktivitet. Målet er å styrke den enkeltes evne til å klare seg selv i hverdagen til tross for sykdom eller funksjonsnedsettelse. Velferdsteknologi er en viktig del av fremtidens helsetjenester.`,
    },
    {
      id: 'hov2-5-4-text-1',
      type: 'text',
      content: `### Trygghetsalarmer

**Tradisjonell trygghetsalarm:**
- Bæres som smykke eller armbånd
- Knapp som trykkes ved behov for hjelp
- Kobles til en responssentral som kontakter hjemmetjenesten
- Over 100 000 brukere i Norge

**Digital trygghetsalarm:**
- GPS-basert – fungerer også utenfor hjemmet
- Kan ha fallsensor som varsler automatisk
- Toveis kommunikasjon med responssentral
- Mulighet for geofencing (varsling ved forlating av område)

### GPS-sporing

**Bruksområder:**
- Personer med demens som kan gå seg bort
- Gir trygghet for pårørende og helsetjenesten
- Muliggjør frihet til å bevege seg ute

**Etiske hensyn:**
- Må ha samtykke eller vedtak etter pasient- og brukerrettighetsloven
- Balansegang mellom frihet og sikkerhet
- Brukerens verdighet må ivaretas
- Pårørendes behov vs. brukerens selvbestemmelse`,
    },
    {
      id: 'hov2-5-4-text-2',
      type: 'text',
      content: `### Elektroniske medisindispensere

**Hvordan de fungerer:**
- Forhåndsfylte medisindispensere med tidsinnstilling
- Gir lyd- og lyssignal når det er tid for medisin
- Varsler hjemmetjenesten dersom medisinen ikke tas
- Kan kombineres med multidose

**Fordeler:**
- Økt selvstendighet for brukeren
- Færre besøk fra hjemmetjenesten
- Bedre etterlevelse av medisinregimet
- Redusert risiko for feilmedisinering

### Smarthusløsninger

**Komfyrvakt:**
- Slår av komfyren ved fare for brann
- Sensorer overvåker temperatur og bevegelse
- Kan sende varsel til pårørende eller hjemmetjeneste

**Dørsensorer:**
- Registrerer når ytterdøren åpnes
- Kan kobles til varslingssystem
- Særlig nyttig for personer med demens om natten

**Bevegelsessensorer:**
- Overvåker aktivitetsmønster
- Varsler ved unormale endringer (f.eks. ingen bevegelse om morgenen)
- Kan styre belysning automatisk for fallforebygging`,
    },
    {
      id: 'hov2-5-4-text-3',
      type: 'text',
      content: `### Fysiske hjelpemidler

**Forflytningshjelpemidler:**
- Rullestol (manuell og elektrisk)
- Rollator og gangstativ
- Personløfter (takløfter, mobil løfter)
- Glidebrett og vendeplate

**Hjelpemidler i dagliglivet:**
- Gripetang og åpnere
- Toalettforhøyer og dusjstol
- Elektrisk seng med regulerbar høyde
- Spesialbestikk og drikkebeger

**Søknad om hjelpemidler:**
- NAV Hjelpemiddelsentral formidler hjelpemidler
- Ergoterapeut eller fysioterapeut vurderer behov
- Hjelpemidlene lånes ut – ikke kjøpes
- Opplæring i bruk er en viktig del av tjenesten`,
    },
    {
      id: 'hov2-5-4-tip-1',
      type: 'tip',
      title: 'Brukermedvirkning ved velferdsteknologi',
      content: `Innføring av velferdsteknologi må alltid skje i samråd med brukeren og eventuelt pårørende. Teknologien skal oppleves som en hjelp, ikke som overvåking. God opplæring, tålmodighet og oppfølging er avgjørende for at teknologien skal fungere i praksis. Husk at mange eldre er ukjente med digital teknologi.`,
    },
    {
      id: 'hov2-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Velferdsteknologi for Astrid',
      content: `**Situasjon**: Astrid, 83 år, har begynnende demens og bor alene. Hun ønsker å bli boende hjemme, men datteren er bekymret.

**Tiltak med velferdsteknologi:**
1. **Digital trygghetsalarm med GPS**: Astrid kan gå turer og bli lokalisert ved behov
2. **Elektronisk medisindispenser**: Sikrer at hun tar medisinene til riktig tid
3. **Komfyrvakt**: Forebygger brannfare ved matlaging
4. **Dørsensor**: Varsler om Astrid går ut om natten
5. **Bevegelsessensor**: Registrerer om det ikke er aktivitet om morgenen

**Resultat**: Astrid kan bo hjemme lenger med økt trygghet. Datteren får varsler og ro i sinnet. Hjemmetjenesten kan følge opp mer målrettet.

**Viktig**: Alle tiltak er drøftet med Astrid, og hun har samtykket til bruken.`,
    },
    {
      id: 'hov2-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med velferdsteknologi?',
        options: [
          { id: 'a', text: 'Å erstatte helsepersonell', isCorrect: false },
          { id: 'b', text: 'Å styrke den enkeltes evne til å klare seg selv i hverdagen', isCorrect: true },
          { id: 'c', text: 'Å overvåke brukere uten deres samtykke', isCorrect: false },
          { id: 'd', text: 'Å spare penger i helsetjenesten', isCorrect: false },
        ],
        solution: 'Hovedformålet med velferdsteknologi er å styrke den enkeltes evne til å klare seg selv i hverdagen til tross for sykdom eller funksjonsnedsettelse. Teknologien skal øke trygghet, sikkerhet og mestring, ikke erstatte menneskelig omsorg.',
      },
    },
    {
      id: 'hov2-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        task: 'Forklar hvilke etiske hensyn som er viktige ved bruk av GPS-sporing for personer med demens.',
        solution: 'GPS-sporing reiser flere etiske spørsmål: Samtykke må foreligge (brukeren selv eller vedtak etter loven). Det er en balansegang mellom frihet og sikkerhet – sporingen kan oppleves som overvåking. Brukerens verdighet og selvbestemmelsesrett må respekteres. Pårørendes ønske om trygghet må veies mot brukerens rett til privatliv. Informasjonen må håndteres konfidensielt.',
      },
    },
    {
      id: 'hov2-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-4-ex-3',
        number: '5.4.3',
        type: 'multiple-choice',
        task: 'Hva gjør en elektronisk medisindispenser dersom brukeren ikke tar medisinene sine?',
        options: [
          { id: 'a', text: 'Dispenseren gir ekstra doser', isCorrect: false },
          { id: 'b', text: 'Den varsler hjemmetjenesten', isCorrect: true },
          { id: 'c', text: 'Den ringer ambulansen', isCorrect: false },
          { id: 'd', text: 'Den gjør ingenting', isCorrect: false },
        ],
        solution: 'Elektroniske medisindispensere er programmert til å varsle hjemmetjenesten dersom brukeren ikke tar ut medisinene sine innen et visst tidsrom. Dette sikrer at noen følger opp og at brukeren får medisinene sine.',
      },
    },
    {
      id: 'hov2-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        task: 'En bruker nekter å bruke trygghetsalarm fordi han føler seg overvåket. Hvordan kan du håndtere denne situasjonen?',
        solution: 'Respekter brukerens ønske – selvbestemmelse er en grunnleggende rettighet. Ha en åpen samtale om hva som gjør ham ukomfortabel. Forklar hvordan alarmen fungerer og at den ikke overvåker – den aktiveres kun av brukeren selv. Tilby alternativer eller tilpasninger. Involver pårørende dersom brukeren ønsker det. Dokumenter samtalen og vurderingen. Gjenta tilbudet ved en senere anledning.',
      },
    },
    {
      id: 'hov2-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        task: 'Beskriv tre eksempler på smarthusløsninger og forklar hvordan de kan bidra til økt trygghet.',
        solution: '1) Komfyrvakt – slår av komfyren automatisk ved fare for brann, forebygger husbrann. 2) Dørsensorer – registrerer når dører åpnes, varsler om personer med demens forlater boligen om natten. 3) Bevegelsessensorer – overvåker aktivitetsmønster og varsler om det ikke er bevegelse, kan også styre belysning automatisk for å forebygge fall.',
      },
    },
    {
      id: 'hov2-5-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Velferdsteknologi** skal styrke mestring og trygghet for brukerne
- **Trygghetsalarmer og GPS** gir sikkerhet hjemme og ute
- **Elektroniske medisindispensere** sikrer riktig legemiddelbruk
- **Etiske hensyn** som samtykke og verdighet er sentrale ved innføring

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Velferdsteknologi | Teknologi som styrker mestring og trygghet |
| Trygghetsalarm | Alarm som bruker kan utløse ved behov for hjelp |
| GPS-sporing | Lokaliseringsteknologi for økt sikkerhet |
| Geofencing | Varsling ved forlating av angitt område |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Velferdsteknologi', definition: 'Teknologisk assistanse som styrker mestring, trygghet og selvstendighet' },
    { term: 'Trygghetsalarm', definition: 'Alarm brukeren kan utløse for å tilkalle hjelp' },
    { term: 'GPS-sporing', definition: 'Lokaliseringsteknologi for å finne brukere som har gått seg bort' },
    { term: 'Geofencing', definition: 'Virtuelt gjerde som varsler når brukeren forlater et definert område' },
    { term: 'Medisindispenser', definition: 'Automatisk enhet som minner om og dispenserer legemidler til riktig tid' },
  ],
};

// ============================================================================
// Kapittel 5.5: Førstehjelp og akutte situasjoner
// ============================================================================

export const CHAPTER_HOV2_5_5: TextbookChapter = {
  id: 'hov2-5-5',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '5.5',
  title: 'Førstehjelp og akutte situasjoner',
  description: 'Lær å håndtere akutte situasjoner som hjertestans, slag, anafylaksi og fall. Gjennomgang av HLR, ABCDE-prinsippet og handlingsplaner.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utføre førstehjelp og handle i akutte situasjoner',
  ],
  content: [
    {
      id: 'hov2-5-5-intro',
      type: 'text',
      content: `## Når det haster

Som helsefagarbeider kan du oppleve akutte situasjoner der rask og riktig handling kan redde liv. God opplæring og kjennskap til førstehjelp gir deg trygghet til å handle når det trengs.

I dette kapittelet lærer du:
- ABCDE-prinsippet for systematisk vurdering
- Hjerte-lungeredning (HLR) og bruk av hjertestarter
- Vanlige akutte tilstander i helsetjenesten
- Handlingsplaner og varsling`,
    },
    {
      id: 'hov2-5-5-def-1',
      type: 'definition',
      title: 'ABCDE-prinsippet',
      content: `**ABCDE** er en systematisk tilnærming for vurdering av akutt syke pasienter: **A** – Airway (luftveier), **B** – Breathing (pusting), **C** – Circulation (sirkulasjon), **D** – Disability (bevissthet), **E** – Exposure (eksponering/undersøkelse). Man starter alltid med A og går videre til neste bokstav først når forrige er vurdert og eventuelt behandlet.`,
    },
    {
      id: 'hov2-5-5-text-1',
      type: 'text',
      content: `### ABCDE i praksis

**A – Airway (luftveier)**
- Er luftveiene frie?
- Kan pasienten snakke?
- Tiltak: Bøy hodet bakover og løft haken, fjern fremmedlegemer

**B – Breathing (pusting)**
- Puster pasienten normalt?
- Se, lytt og kjenn etter pust
- Tell pustefrekvens (normalt 12-20 per minutt)
- Tiltak: Gi oksygen, leie for å lette pustingen

**C – Circulation (sirkulasjon)**
- Kjenn etter puls (håndledd eller hals)
- Observer hudfarge (blek, cyanotisk)
- Mål blodtrykk hvis mulig
- Tiltak: Stans blødninger, legg pasienten flatt ved sjokk

**D – Disability (bevissthet)**
- Er pasienten våken og orientert?
- Bruk AVPU-skala: Alert (våken), Voice (reagerer på stemme), Pain (reagerer på smerte), Unresponsive (ikke kontaktbar)
- Sjekk pupillene
- Tiltak: Stabilt sideleie ved bevisstløshet

**E – Exposure (eksponering)**
- Undersøk hele kroppen for skader
- Mål temperatur
- Hold pasienten varm
- Tiltak: Forebygg nedkjøling, behandle underliggende årsak`,
    },
    {
      id: 'hov2-5-5-text-2',
      type: 'text',
      content: `### Hjerte-lungeredning (HLR)

**Når starter du HLR?**
- Pasienten er bevisstløs og puster ikke normalt
- Ring 113 umiddelbart (eller be noen ringe)
- Start HLR innen 1 minutt

**Fremgangsmåte for voksne:**
1. Legg pasienten flatt på hardt underlag
2. Start med **30 brystkompresjoner**
   - Plasser hendene midt på brystet
   - Press brystkassen ned 5-6 cm
   - Frekvens: 100-120 per minutt
3. Gi **2 innblåsninger**
   - Bøy hodet bakover og løft haken
   - Klem nesen og blås luft i munnen
4. Fortsett 30:2 til hjelp ankommer

**Hjertestarter (AED/DAE):**
- Slå på apparatet og følg stemmeinstruksjonene
- Fest elektrodene på bar brystkasse
- Apparatet analyserer hjerterytmen
- Gi støt hvis apparatet anbefaler det
- Fortsett HLR mellom analyser

**Viktig**: HLR som startes innen 3-5 minutter dobler sjansen for overlevelse.`,
    },
    {
      id: 'hov2-5-5-text-3',
      type: 'text',
      content: `### Vanlige akutte tilstander

**Hjerneslag**
- Symptomer huskes med **FAST**: Face (ansiktslammelse), Arm (armsvakhet), Speech (taleforstyrrelser), Time (ring 113 umiddelbart)
- Tid er avgjørende – «time is brain»
- Legg pasienten i behagelig stilling, ikke gi mat eller drikke

**Hypoglykemi (lavt blodsukker)**
- Symptomer: svetting, skjelving, uro, forvirring
- Bevisst pasient: Gi sukkerholdig drikke eller drukkesukker
- Bevisstløs pasient: Stabilt sideleie, ring 113

**Anafylaktisk sjokk**
- Alvorlig allergisk reaksjon med hevelse, pustebesvær og blodtrykksfall
- Gi adrenalin (EpiPen) om tilgjengelig
- Ring 113 umiddelbart
- Legg pasienten flatt med bena hevet

**Fall hos eldre**
- Vanligste årsak til skade hos eldre
- Mistanke om hoftebrudd: sterke smerter, forkortet og utadrotert ben
- Ikke flytt pasienten unødvendig
- Ring 113 ved mistanke om brudd eller hodeskade

**Brystsmerter**
- Kan skyldes hjerteinfarkt – ta alltid alvorlig
- Ring 113 ved vedvarende brystsmerter
- La pasienten sitte oppreist
- Gi acetylsalisylsyre (ASA) 300 mg om tilgjengelig og ordinert`,
    },
    {
      id: 'hov2-5-5-tip-1',
      type: 'tip',
      title: 'Varsling ved akutte situasjoner',
      content: `Ved akutte situasjoner ring **113** (medisinsk nødtelefon). Ha alltid klar: pasientens navn og fødselsdato, hva som har skjedd, bevissthetsnivå, pust og puls, nøyaktig adresse. Mange arbeidsplasser har egne handlingsplaner for akutte situasjoner – sett deg inn i disse fra første dag.`,
    },
    {
      id: 'hov2-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Akutt situasjon på sykehjem',
      content: `**Situasjon**: Du finner beboer Gunnar, 87 år, liggende på gulvet på rommet sitt. Han er bevisstløs.

**Din handling etter ABCDE:**
1. **A – Luftveier**: Bøy hodet forsiktig bakover, sjekk munnen for fremmedlegemer – luftveiene er frie
2. **B – Pust**: Se, lytt, kjenn – Gunnar puster normalt
3. **C – Sirkulasjon**: Kjenn puls på halsen – puls er til stede, regelmessig
4. **D – Bevissthet**: Gunnar reagerer på smerte (AVPU = P) – legg i stabilt sideleie
5. **E – Eksponering**: Observer for skader – ser hevelse ved høyre hofte

**Handling:**
- Sørg for frie luftveier og stabilt sideleie
- Ring etter sykepleier/lege umiddelbart
- Ring 113 – mistenker hoftebrudd og bevisstløshet
- Hold Gunnar varm med teppe
- Ikke flytt ham – vent på hjelp
- Dokumenter hendelsen og observasjoner`,
    },
    {
      id: 'hov2-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        task: 'Hva står A for i ABCDE-prinsippet?',
        options: [
          { id: 'a', text: 'Anamnese', isCorrect: false },
          { id: 'b', text: 'Airway (luftveier)', isCorrect: true },
          { id: 'c', text: 'Analyse', isCorrect: false },
          { id: 'd', text: 'Ambulanse', isCorrect: false },
        ],
        solution: 'A står for Airway (luftveier). Det er det første du sjekker fordi blokkerte luftveier er umiddelbart livstruende. Sikre frie luftveier ved å bøye hodet bakover og løfte haken.',
      },
    },
    {
      id: 'hov2-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-5-ex-2',
        number: '5.5.2',
        type: 'classic',
        task: 'Beskriv fremgangsmåten for HLR (hjerte-lungeredning) på en voksen person.',
        solution: '1) Sjekk at pasienten er bevisstløs og ikke puster normalt. 2) Ring 113 eller be noen ringe. 3) Start med 30 brystkompresjoner – hender midt på brystet, press 5-6 cm ned med frekvens 100-120/min. 4) Gi 2 innblåsninger – bøy hodet bakover, klem nesen, blås luft i munnen. 5) Fortsett 30:2 til hjelp ankommer eller pasienten våkner. 6) Bruk hjertestarter (AED) om tilgjengelig – følg stemmeinstruksjonene.',
      },
    },
    {
      id: 'hov2-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-5-ex-3',
        number: '5.5.3',
        type: 'multiple-choice',
        task: 'Hva betyr FAST i forbindelse med hjerneslag?',
        options: [
          { id: 'a', text: 'First Aid Standard Treatment', isCorrect: false },
          { id: 'b', text: 'Face, Arm, Speech, Time', isCorrect: true },
          { id: 'c', text: 'Find, Assess, Stabilize, Transport', isCorrect: false },
          { id: 'd', text: 'Fever, Allergy, Shock, Trauma', isCorrect: false },
        ],
        solution: 'FAST er en huskeregel for å gjenkjenne hjerneslag: Face (ansiktslammelse – be personen smile), Arm (armsvakhet – be personen løfte begge armer), Speech (taleforstyrrelser – be personen si en setning), Time (ring 113 umiddelbart – tid er avgjørende).',
      },
    },
    {
      id: 'hov2-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        task: 'En pasient med diabetes blir plutselig svett, skjelvende og forvirret. Hva mistenker du, og hva gjør du?',
        solution: 'Symptomene tyder på hypoglykemi (lavt blodsukker). Tiltak: Hvis pasienten er bevisst og kan svelge, gi sukkerholdig drikke (juice, sukker i vann) eller drukkesukker. Mål blodsukkeret for å bekrefte. Hvis pasienten er bevisstløs, legg i stabilt sideleie og ring 113 – gi aldri mat eller drikke til bevisstløse. Rapporter til sykepleier og dokumenter hendelsen.',
      },
    },
    {
      id: 'hov2-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        task: 'Forklar ABCDE-prinsippet med egne ord og gi eksempel på tiltak for hvert punkt.',
        solution: 'A – Luftveier: Sjekk at luftveiene er frie, bøy hodet bakover. B – Pust: Observer om pasienten puster normalt, gi oksygen ved behov. C – Sirkulasjon: Sjekk puls og blodtrykk, stans blødninger. D – Bevissthet: Vurder bevissthetsnivå med AVPU, stabilt sideleie ved bevisstløshet. E – Eksponering: Undersøk hele kroppen for skader, hold pasienten varm.',
      },
    },
    {
      id: 'hov2-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-5-ex-6',
        number: '5.5.6',
        type: 'multiple-choice',
        task: 'Hvor dypt skal brystkassen presses ned ved HLR på voksne?',
        options: [
          { id: 'a', text: '2-3 cm', isCorrect: false },
          { id: 'b', text: '3-4 cm', isCorrect: false },
          { id: 'c', text: '5-6 cm', isCorrect: true },
          { id: 'd', text: '7-8 cm', isCorrect: false },
        ],
        solution: 'Ved HLR på voksne skal brystkassen presses ned 5-6 cm med en frekvens på 100-120 kompresjoner per minutt. Effektive brystkompresjoner er avgjørende for å opprettholde sirkulasjon til hjernen og andre vitale organer.',
      },
    },
    {
      id: 'hov2-5-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **ABCDE-prinsippet** gir systematisk tilnærming til akutte situasjoner
- **HLR** skal startes umiddelbart ved hjertestans – 30 kompresjoner : 2 innblåsninger
- **FAST** hjelper deg å gjenkjenne hjerneslag
- **Varsling via 113** og tydelig kommunikasjon er avgjørende

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| ABCDE | Systematisk vurdering: Airway, Breathing, Circulation, Disability, Exposure |
| HLR | Hjerte-lungeredning ved hjertestans |
| FAST | Huskeregel for hjerneslag: Face, Arm, Speech, Time |
| AED | Automatisk ekstern defibrillator (hjertestarter) |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'ABCDE', definition: 'Systematisk tilnærming for vurdering av akutt syke: Airway, Breathing, Circulation, Disability, Exposure' },
    { term: 'HLR', definition: 'Hjerte-lungeredning – brystkompresjoner og innblåsninger ved hjertestans' },
    { term: 'FAST', definition: 'Huskeregel for å gjenkjenne hjerneslag: Face, Arm, Speech, Time' },
    { term: 'AED', definition: 'Automatisk ekstern defibrillator – hjertestarter som analyserer hjerterytme' },
    { term: 'Anafylaksi', definition: 'Alvorlig, potensielt livstruende allergisk reaksjon' },
    { term: 'Hypoglykemi', definition: 'Farlig lavt blodsukker som krever rask behandling' },
  ],
};

// ============================================================================
// Kapittel 5.6: Universell utforming
// ============================================================================

export const CHAPTER_HOV2_5_6: TextbookChapter = {
  id: 'hov2-5-6',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '5.6',
  title: 'Universell utforming',
  description: 'Lær om universell utforming i helse- og omsorgstjenesten. Hvordan bygninger, utstyr og tjenester kan utformes slik at de er tilgjengelige for alle.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for universell utforming og tilrettelegging i helse- og omsorgstjenesten',
  ],
  content: [
    {
      id: 'hov2-5-6-intro',
      type: 'text',
      content: `## Tilgjengelig for alle

Universell utforming handler om å utforme samfunnet slik at alle kan delta uavhengig av funksjonsevne. I helse- og omsorgstjenesten er dette ekstra viktig, fordi brukerne ofte har nedsatt funksjonsevne.

I dette kapittelet lærer du:
- Hva universell utforming betyr
- Lovverk og krav
- Praktiske eksempler i helsetjenesten
- Individuelle tilpasninger`,
    },
    {
      id: 'hov2-5-6-def-1',
      type: 'definition',
      title: 'Universell utforming',
      content: `**Universell utforming** betyr at produkter, bygninger, uteområder og tjenester utformes slik at de kan brukes av alle mennesker i så stor utstrekning som mulig, uten behov for tilpasning eller spesiell utforming. Prinsippet er forankret i **likestillings- og diskrimineringsloven** og **plan- og bygningsloven**.`,
    },
    {
      id: 'hov2-5-6-text-1',
      type: 'text',
      content: `### De syv prinsippene for universell utforming

**1. Like muligheter for bruk**
- Utformingen skal være brukbar for personer med ulike evner
- Eksempel: Automatiske dører som fungerer for alle

**2. Fleksibel bruk**
- Utformingen skal ivareta ulike preferanser og evner
- Eksempel: Hev-senk-kjøkken som kan brukes stående eller sittende

**3. Enkel og intuitiv bruk**
- Utformingen skal være lett å forstå uavhengig av erfaring og kunnskap
- Eksempel: Tydelige symboler og piktogrammer i tillegg til tekst

**4. Forståelig informasjon**
- Nødvendig informasjon kommuniseres effektivt til brukeren
- Eksempel: Informasjon gitt visuelt, auditivt og taktilt

**5. Toleranse for feil**
- Utformingen minimerer farer ved utilsiktet bruk
- Eksempel: Rekkverk i trapper, myke kanter på møbler

**6. Lav fysisk anstrengelse**
- Utformingen kan brukes effektivt og bekvemt med minst mulig anstrengelse
- Eksempel: Spaker i stedet for runde dørhåndtak

**7. Størrelse og plass for tilgang**
- Tilstrekkelig plass for tilgang, rekkevidde og bruk
- Eksempel: Brede dører og korridorer for rullestolbrukere`,
    },
    {
      id: 'hov2-5-6-text-2',
      type: 'text',
      content: `### Universell utforming i helsetjenesten

**Fysisk tilgjengelighet:**
- Trinnfri inngang og heiser
- Brede dører (minst 90 cm) og korridorer
- Tilgjengelige toaletter og bad
- Gode kontraster mellom gulv, vegg og dør
- Taktile ledelinjer for synshemmede

**Informasjon og kommunikasjon:**
- Lettlest skriftlig informasjon
- Tolk ved behov (tegnspråk, språktolk)
- Nettsider som følger WCAG-standarder
- Informasjon på flere språk
- Bildebasert kommunikasjon for personer med kognitive utfordringer

**Tjenesteutforming:**
- Fleksible åpningstider og besøksordninger
- Mulighet for hjemmebesøk
- Digitale helsetjenester (videokonsultasjon)
- Tilrettelagte aktivitetstilbud
- Individuell tilpasning av pleie og omsorg`,
    },
    {
      id: 'hov2-5-6-text-3',
      type: 'text',
      content: `### Individuelle tilpasninger

Selv med god universell utforming vil noen brukere trenge **individuelle tilpasninger**:

**Tilrettelegging i bolig:**
- Fjerne terskler og legge til ramper
- Installere støttehåndtak på bad
- Tilpasse kjøkken for rullestolbruker
- God belysning for svaksynte

**Tilrettelegging i aktivitet:**
- Tilpasset fysisk aktivitet
- Hjelpemidler for daglige gjøremål
- Tilrettelagt arbeidsplass
- Støtte til sosial deltakelse

**Helsefagarbeiderens rolle:**
- Observere behov for tilrettelegging
- Veilede brukere om hjelpemidler og tilpasninger
- Samarbeide med ergoterapeut og fysioterapeut
- Dokumentere endringsbehov
- Være kreativ i å finne løsninger`,
    },
    {
      id: 'hov2-5-6-tip-1',
      type: 'tip',
      title: 'Tenk universelt',
      content: `Universell utforming handler ikke bare om store ombygginger. Små tiltak kan gjøre stor forskjell: god belysning, ryddig gangareal, tydelig merking og kontraster. Som helsefagarbeider kan du bidra ved å være oppmerksom på barrierer i brukerens miljø og foreslå enkle tiltak.`,
    },
    {
      id: 'hov2-5-6-example-1',
      type: 'example',
      title: 'Eksempel: Tilrettelegging for Magnus',
      content: `**Situasjon**: Magnus, 45 år, er rullestolbruker etter en ulykke og skal flytte inn i ny bolig.

**Vurdering av universell utforming:**
- **Inngang**: Trinnfri adkomst med bred dør – OK
- **Bad**: For lite, toalettet er utilgjengelig fra rullestol – trenger ombygging
- **Kjøkken**: Benkehøyde for høy, kan ikke nå skap – trenger hev-senk-løsning
- **Soverom**: Bred nok dør, men terskel – fjern terskelen
- **Stue**: God plass, men løse tepper – fjern teppene for å forhindre at hjulene setter seg fast

**Tiltak:**
1. Ombygging av bad med tilgjengelig dusj og toalett
2. Hev-senk-kjøkken fra NAV Hjelpemiddelsentral
3. Fjerne terskler og tepper
4. Installere automatisk døråpner
5. Ergoterapeut vurderer videre behov

**Resultat**: Magnus kan bo selvstendig med gode tilpasninger.`,
    },
    {
      id: 'hov2-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-6-ex-1',
        number: '5.6.1',
        type: 'multiple-choice',
        task: 'Hva betyr universell utforming?',
        options: [
          { id: 'a', text: 'Spesialtilpassede løsninger for funksjonshemmede', isCorrect: false },
          { id: 'b', text: 'At produkter og omgivelser kan brukes av alle uten spesiell tilpasning', isCorrect: true },
          { id: 'c', text: 'At alle bygninger må ha heis', isCorrect: false },
          { id: 'd', text: 'Et krav som bare gjelder offentlige bygninger', isCorrect: false },
        ],
        solution: 'Universell utforming betyr at produkter, bygninger og tjenester utformes slik at de kan brukes av alle mennesker i så stor utstrekning som mulig, uten behov for tilpasning eller spesiell utforming.',
      },
    },
    {
      id: 'hov2-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-6-ex-2',
        number: '5.6.2',
        type: 'classic',
        task: 'Nevn tre av de syv prinsippene for universell utforming og gi et praktisk eksempel på hvert.',
        solution: '1) Like muligheter for bruk – automatiske dører som alle kan bruke. 2) Enkel og intuitiv bruk – tydelige symboler og piktogrammer i tillegg til tekst. 3) Størrelse og plass for tilgang – brede dører og korridorer som gir plass for rullestol.',
      },
    },
    {
      id: 'hov2-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-6-ex-3',
        number: '5.6.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom universell utforming og individuell tilpasning.',
        solution: 'Universell utforming er generelle løsninger som er designet for å fungere for alle fra starten av – for eksempel trinnfri inngang. Individuell tilpasning er spesifikke tiltak for å møte den enkeltes behov – for eksempel et hev-senk-kjøkken for en bestemt rullestolbruker. Universell utforming reduserer behovet for individuelle tilpasninger.',
      },
    },
    {
      id: 'hov2-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-5-6-ex-4',
        number: '5.6.4',
        type: 'classic',
        task: 'Gjør en vurdering av et rom du kjenner godt (klasserom, stue, arbeidsrom). Hvilke barrierer finnes for personer med nedsatt funksjonsevne, og hva kan forbedres?',
        solution: 'Svaret vil variere, men gode vurderinger bør inkludere: tilgjengelighet for rullestol (terskler, dørbredde, plass), belysning for svaksynte, lydforhold for hørselshemmede, merking og kontraster, rekkverk og støttehåndtak, og mulige tiltak for forbedring.',
      },
    },
    {
      id: 'hov2-5-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Universell utforming** betyr at omgivelsene skal fungere for alle
- **Syv prinsipper** gir retning for god utforming
- **Helsetjenesten** har særlig ansvar for tilgjengelige tjenester og lokaler
- **Individuelle tilpasninger** supplerer universell utforming ved behov

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Universell utforming | Utforming for bruk av alle uten spesialtilpasning |
| Individuell tilpasning | Spesifikke tiltak for den enkeltes behov |
| Tilgjengelighet | At steder, tjenester og informasjon kan nås av alle |
| WCAG | Standard for tilgjengelige nettsider |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Universell utforming', definition: 'Utforming slik at alle kan bruke produkter og omgivelser uten spesialtilpasning' },
    { term: 'Individuell tilpasning', definition: 'Spesifikke tiltak tilpasset den enkeltes behov' },
    { term: 'Tilgjengelighet', definition: 'At steder, tjenester og informasjon kan nås og brukes av alle' },
    { term: 'WCAG', definition: 'Internasjonal standard for tilgjengelige nettsider og digitalt innhold' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const HELSEOPPVEKST_VG2_DEL5_CHAPTERS = [
  CHAPTER_HOV2_5_1,
  CHAPTER_HOV2_5_2,
  CHAPTER_HOV2_5_3,
  CHAPTER_HOV2_5_4,
  CHAPTER_HOV2_5_5,
  CHAPTER_HOV2_5_6,
];
