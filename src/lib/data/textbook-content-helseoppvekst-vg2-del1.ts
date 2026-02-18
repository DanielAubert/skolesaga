/**
 * Helse- og oppvekstfag VG2 - Del 1: Helsefagarbeideren og helsetjenesten
 * Kapittel 1.1-1.7
 *
 * Dekker LK20 kompetansemål:
 * - reflektere over faglig identitet som helsefagarbeider
 * - gjøre rede for pasient- og brukermedvirkning
 * - gjøre rede for kvalitetsforskrifter og forsvarlig omsorg
 * - gjøre rede for ergonomiske prinsipper
 * - ivareta egne rettigheter og plikter i arbeidsforholdet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Helsetjenestens oppbygning
// ============================================================================

export const CHAPTER_HOV2_1_1: TextbookChapter = {
  id: 'hov2-1-1',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '1.1',
  title: 'Helsetjenestens oppbygning',
  description: 'Oversikt over hvordan den norske helsetjenesten er organisert med primær- og spesialisthelsetjeneste, kommunale og statlige ansvarsområder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over faglig identitet som helsefagarbeider',
  ],
  content: [
    {
      id: 'hov2-1-1-intro',
      type: 'text',
      content: `## Den norske helsetjenesten

Den norske helsetjenesten er bygget opp som et offentlig finansiert system der alle innbyggere har rett til nødvendig helsehjelp. Systemet er delt i to hovednivåer: **primærhelsetjenesten** (kommunene) og **spesialisthelsetjenesten** (sykehusene).

I dette kapittelet lærer du:
- Hvordan helsetjenesten er organisert
- Forskjellen mellom primær- og spesialisthelsetjeneste
- Helsefagarbeiderens plass i systemet
- Samhandlingsreformens betydning`,
    },
    {
      id: 'hov2-1-1-def-1',
      type: 'definition',
      title: 'Primærhelsetjenesten',
      content: `**Primærhelsetjenesten** er den delen av helsetjenesten som kommunene har ansvar for. Den omfatter fastleger, hjemmesykepleie, sykehjem, helsestasjon, psykisk helsetjeneste, fysioterapi og legevakt. Primærhelsetjenesten er regulert av **helse- og omsorgstjenesteloven** og skal være innbyggernes første kontaktpunkt med helsetjenesten.`,
    },
    {
      id: 'hov2-1-1-text-1',
      type: 'text',
      content: `### Kommunale helsetjenester

Kommunene har ansvar for et bredt spekter av helsetjenester:

**Hjemmebaserte tjenester:**
- Hjemmesykepleie og praktisk bistand
- Brukerstyrt personlig assistanse (BPA)
- Hverdagsrehabilitering
- Velferdsteknologi og trygghetsalarmer

**Institusjonsbaserte tjenester:**
- Sykehjem med langtids- og korttidsplasser
- Rehabiliteringsavdelinger
- Lindrende enheter
- Omsorgsboliger med heldøgnsbemanning

**Andre tjenester:**
- Fastlegeordningen
- Helsestasjon og skolehelsetjeneste
- Psykisk helse- og rustjenester
- Legevakt og akuttmedisinsk beredskap`,
    },
    {
      id: 'hov2-1-1-def-2',
      type: 'definition',
      title: 'Spesialisthelsetjenesten',
      content: `**Spesialisthelsetjenesten** er den delen av helsetjenesten som de fire regionale helseforetakene har ansvar for. Den omfatter sykehus, poliklinikker, ambulansetjeneste, laboratorier og spesialisert rehabilitering. Spesialisthelsetjenesten tar imot pasienter som trenger mer avansert behandling enn kommunen kan tilby, vanligvis etter henvisning fra fastlege.`,
    },
    {
      id: 'hov2-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-1-ex-1',
        number: '1.1.1',
        type: 'multiple-choice',
        task: 'Hvilken del av helsetjenesten har kommunen ansvar for?',
        options: [
          { id: 'a', text: 'Spesialisthelsetjenesten', isCorrect: false },
          { id: 'b', text: 'Primærhelsetjenesten', isCorrect: true },
          { id: 'c', text: 'Ambulansetjenesten', isCorrect: false },
          { id: 'd', text: 'Rikshospitalet', isCorrect: false },
        ],
        solution: 'Kommunen har ansvar for primærhelsetjenesten, som inkluderer fastleger, hjemmesykepleie, sykehjem, helsestasjon og legevakt. Spesialisthelsetjenesten drives av de regionale helseforetakene.',
      },
    },
    {
      id: 'hov2-1-1-text-2',
      type: 'text',
      content: `### Samhandlingsreformen

**Samhandlingsreformen** (2012) endret fordelingen av oppgaver mellom kommuner og sykehus. Målet var å:

- **Forebygge mer**: Kommunene skal satse på forebygging fremfor reparasjon
- **Tidligere innsats**: Pasienter skal få hjelp tidlig, før problemene vokser
- **Nærhet til brukeren**: Flere tjenester skal ytes der folk bor
- **Bedre samarbeid**: Koordinerte tjenester mellom kommune og sykehus

Reformen innebar at kommunene overtok ansvar for utskrivningsklare pasienter og fikk plikt til å tilby døgnopphold for øyeblikkelig hjelp. Dette har økt behovet for kompetente helsefagarbeidere i kommunene.`,
    },
    {
      id: 'hov2-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-1-ex-2',
        number: '1.1.2',
        type: 'classic',
        task: 'Forklar med egne ord hva samhandlingsreformen innebar, og hvordan den påvirket helsefagarbeiderens rolle i kommunehelsetjenesten.',
        solution: 'Samhandlingsreformen fra 2012 flyttet flere oppgaver fra sykehus til kommuner. Kommunene fikk ansvar for utskrivningsklare pasienter og plikt til døgnopphold for øyeblikkelig hjelp. For helsefagarbeidere betyr dette mer komplekse arbeidsoppgaver, behov for høyere kompetanse, og flere pasienter med sammensatte behov i kommunehelsetjenesten.',
      },
    },
    {
      id: 'hov2-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-1-ex-3',
        number: '1.1.3',
        type: 'multiple-choice',
        task: 'Hva var et av hovedmålene med samhandlingsreformen?',
        options: [
          { id: 'a', text: 'Legge ned alle kommunale sykehjem', isCorrect: false },
          { id: 'b', text: 'Satse mer på forebygging og tidlig innsats i kommunene', isCorrect: true },
          { id: 'c', text: 'Flytte alle helsetjenester til sykehusene', isCorrect: false },
          { id: 'd', text: 'Redusere antall helsefagarbeidere', isCorrect: false },
        ],
        solution: 'Et hovedmål med samhandlingsreformen var å satse mer på forebygging og tidlig innsats, slik at kommunene kunne gi bedre helsehjelp nær der folk bor.',
      },
    },
    {
      id: 'hov2-1-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Primærhelsetjenesten** er kommunens ansvar og inkluderer fastleger, sykehjem og hjemmesykepleie
- **Spesialisthelsetjenesten** drives av helseforetakene og inkluderer sykehus og poliklinikker
- **Samhandlingsreformen** flyttet oppgaver til kommunene og styrket forebygging
- **Helsefagarbeidere** jobber hovedsakelig i primærhelsetjenesten

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Primærhelsetjeneste | Kommunens helsetjenester (fastlege, sykehjem, hjemmesykepleie) |
| Spesialisthelsetjeneste | Sykehus og spesialiserte behandlingstilbud |
| Samhandlingsreformen | Reform fra 2012 som styrket kommunenes rolle |
| Helse- og omsorgstjenesteloven | Regulerer kommunens helse- og omsorgstjenester |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'hov2-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-1-ex-4',
        number: '1.1.4',
        type: 'classic',
        task: 'Tegn et enkelt organisasjonskart som viser hvordan den norske helsetjenesten er organisert med stat, helseforetak, kommuner og de ulike tjenestetypene.',
        solution: 'Kartet bør vise: Stortinget/Helsedepartementet øverst, deretter to grener: 1) Regionale helseforetak → Sykehus/poliklinikker/ambulanse (spesialisthelsetjeneste), 2) Kommuner → Fastleger, sykehjem, hjemmesykepleie, helsestasjon, legevakt (primærhelsetjeneste).',
      },
    },
    {
      id: 'hov2-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-1-ex-5',
        number: '1.1.5',
        type: 'classic',
        task: 'Drøft fordeler og utfordringer med samhandlingsreformen sett fra helsefagarbeiderens perspektiv.',
        solution: 'Fordeler: Mer varierte arbeidsoppgaver, styrket faglig utvikling, nærhet til pasienter over tid. Utfordringer: Økt ansvar og kompleksitet, sykere pasienter i kommunen, kan mangle ressurser og utstyr sammenlignet med sykehus, behov for kontinuerlig kompetanseheving.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Primærhelsetjeneste', definition: 'Kommunens helsetjenester, inkludert fastleger, sykehjem og hjemmesykepleie' },
    { term: 'Spesialisthelsetjeneste', definition: 'Helseforetakenes tjenester, inkludert sykehus og poliklinikker' },
    { term: 'Samhandlingsreformen', definition: 'Reform fra 2012 som styrket kommunenes rolle i helsetjenesten' },
    { term: 'Helseforetak', definition: 'Statlige organisasjoner som driver sykehus og spesialiserte helsetjenester' },
  ],
};

// ============================================================================
// Kapittel 1.2: Helsefagarbeiderens rolle og ansvar
// ============================================================================

export const CHAPTER_HOV2_1_2: TextbookChapter = {
  id: 'hov2-1-2',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '1.2',
  title: 'Helsefagarbeiderens rolle og ansvar',
  description: 'Helsefagarbeiderens arbeidsoppgaver, yrkesidentitet og profesjonelle ansvar i ulike deler av helsetjenesten.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over faglig identitet som helsefagarbeider',
  ],
  content: [
    {
      id: 'hov2-1-2-intro',
      type: 'text',
      content: `## Helsefagarbeiderens yrkesrolle

Helsefagarbeideren er en viktig yrkesgruppe i den norske helsetjenesten. Du jobber nært pasientene og brukerne, og har ansvar for å gi god omsorg og pleie i tråd med faglige standarder.

I dette kapittelet lærer du:
- Hva en helsefagarbeider gjør
- Hvor helsefagarbeidere jobber
- Faglig ansvar og delegering
- Yrkesidentitet og profesjonalitet`,
    },
    {
      id: 'hov2-1-2-def-1',
      type: 'definition',
      title: 'Helsefagarbeider',
      content: `En **helsefagarbeider** er en autorisert helsearbeider med fagbrev i helsearbeiderfaget. Yrket erstattet de tidligere yrkene hjelpepleier og omsorgsarbeider fra 2006. Helsefagarbeidere har autorisasjon etter **helsepersonelloven** og jobber med grunnleggende pleie, omsorg og miljøarbeid i kommunehelsetjenesten og spesialisthelsetjenesten.`,
    },
    {
      id: 'hov2-1-2-text-1',
      type: 'text',
      content: `### Arbeidsoppgaver

Helsefagarbeideren utfører et bredt spekter av oppgaver:

**Grunnleggende pleie:**
- Personlig hygiene og stell
- Forflytning og mobilisering
- Måltider og ernæring
- Medikamenthåndtering (etter delegering)
- Sårbehandling og observasjon

**Miljøarbeid:**
- Tilrettelegge for aktiviteter
- Sosial kontakt og samtale
- Støtte til hverdagsmestring
- Forebygging av ensomhet

**Dokumentasjon og samarbeid:**
- Rapportering og journalføring
- Samarbeid med sykepleiere og leger
- Samarbeid med pårørende
- Deltakelse i tverrfaglige team`,
    },
    {
      id: 'hov2-1-2-def-2',
      type: 'definition',
      title: 'Delegering',
      content: `**Delegering** betyr at en oppgave som normalt tilhører en yrkesgruppe, overføres til en annen. I helsetjenesten kan sykepleiere eller leger delegere oppgaver til helsefagarbeidere, for eksempel legemiddelhåndtering. Den som delegerer har ansvar for at den som mottar oppgaven har nødvendig kompetanse, og at det gis tilstrekkelig opplæring og veiledning.`,
    },
    {
      id: 'hov2-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-2-ex-1',
        number: '1.2.1',
        type: 'multiple-choice',
        task: 'Hva menes med delegering i helsetjenesten?',
        options: [
          { id: 'a', text: 'At man kan gjøre alle oppgaver uten opplæring', isCorrect: false },
          { id: 'b', text: 'At en oppgave overføres fra en yrkesgruppe til en annen med nødvendig opplæring', isCorrect: true },
          { id: 'c', text: 'At helsefagarbeideren bestemmer selv hvilke oppgaver de vil gjøre', isCorrect: false },
          { id: 'd', text: 'At alle oppgaver må gjøres av sykepleier', isCorrect: false },
        ],
        solution: 'Delegering betyr at en oppgave overføres fra en yrkesgruppe til en annen, for eksempel fra sykepleier til helsefagarbeider. Det krever at mottakeren har kompetanse og har fått opplæring.',
      },
    },
    {
      id: 'hov2-1-2-text-2',
      type: 'text',
      content: `### Yrkesidentitet og profesjonalitet

Som helsefagarbeider har du en viktig profesjonell identitet som bygger på:

**Faglig kompetanse:**
- Kunnskap om kropp, sykdom og helse
- Praktiske ferdigheter i pleie og omsorg
- Evne til observasjon og rapportering

**Etisk bevissthet:**
- Respekt for pasientens autonomi og verdighet
- Taushetsplikt og personvern
- Etisk refleksjon i vanskelige situasjoner

**Samarbeidsevne:**
- Kommunikasjon med pasienter, pårørende og kolleger
- Teamarbeid og tverrfaglig samarbeid
- Evne til å gi og motta veiledning`,
    },
    {
      id: 'hov2-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-2-ex-2',
        number: '1.2.2',
        type: 'classic',
        task: 'Beskriv tre viktige arbeidsoppgaver for en helsefagarbeider på sykehjem, og forklar hvorfor hver av dem er viktig for beboerens livskvalitet.',
        solution: '1) Personlig hygiene – viktig for verdighet, selvfølelse og forebygging av infeksjoner. 2) Måltider og ernæring – viktig for næring, sosialt samvær og trivsel. 3) Aktiviteter og sosial kontakt – viktig for mestring, mental helse og forebygging av ensomhet.',
      },
    },
    {
      id: 'hov2-1-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Helsefagarbeideren** er en autorisert helsearbeider med fagbrev
- **Arbeidsoppgavene** spenner fra grunnleggende pleie til miljøarbeid og dokumentasjon
- **Delegering** krever kompetanse og opplæring
- **Yrkesidentitet** bygger på fagkunnskap, etikk og samarbeidsevne

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Helsefagarbeider | Autorisert helsearbeider med fagbrev i helsearbeiderfaget |
| Delegering | Overføring av oppgaver fra en yrkesgruppe til en annen |
| Autorisasjon | Offentlig godkjenning til å utøve et helseyrke |
| Yrkesidentitet | Opplevelsen av hvem du er i kraft av yrket ditt |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'hov2-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-2-ex-3',
        number: '1.2.3',
        type: 'classic',
        task: 'Reflekter over hva det betyr for deg å være en profesjonell helsefagarbeider. Hva skiller en profesjonell yrkesutøver fra en som bare «gjør jobben»?',
        solution: 'Profesjonalitet innebærer å handle ut fra fagkunnskap og etiske retningslinjer, ikke bare gjøre det man blir bedt om. Det betyr å reflektere over egne handlinger, oppdatere kompetansen, vise respekt for pasienter og pårørende, og ta ansvar for kvaliteten på arbeidet.',
      },
    },
    {
      id: 'hov2-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-2-ex-4',
        number: '1.2.4',
        type: 'classic',
        task: 'Du får delegert ansvaret for å gi insulin til en pasient på sykehjem. Hvilke krav må være oppfylt for at dette skal være forsvarlig?',
        solution: 'Du må ha fått opplæring i insulininjeksjon, dosering og observasjon av bivirkninger. Det må foreligge skriftlig prosedyre. Sykepleier eller lege må ha vurdert at du har nødvendig kompetanse. Du må vite hva du skal gjøre hvis noe går galt (for eksempel tegn på hypoglykemi). Delegeringen bør være dokumentert.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Helsefagarbeider', definition: 'Autorisert helsearbeider med fagbrev i helsearbeiderfaget' },
    { term: 'Delegering', definition: 'Overføring av en oppgave fra en yrkesgruppe til en annen med opplæring' },
    { term: 'Autorisasjon', definition: 'Offentlig godkjenning til å utøve et helseyrke etter helsepersonelloven' },
    { term: 'Yrkesidentitet', definition: 'Den profesjonelle identiteten knyttet til yrket' },
  ],
};

// ============================================================================
// Kapittel 1.3: Pasient- og brukermedvirkning
// ============================================================================

export const CHAPTER_HOV2_1_3: TextbookChapter = {
  id: 'hov2-1-3',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '1.3',
  title: 'Pasient- og brukermedvirkning',
  description: 'Pasientens rett til medvirkning og informasjon, samvalg og brukersentrert omsorg i tråd med lovverket.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for pasient- og brukermedvirkning og anvende dette i praksis',
  ],
  content: [
    {
      id: 'hov2-1-3-intro',
      type: 'text',
      content: `## Pasientens stemme i helsetjenesten

Pasient- og brukermedvirkning er en grunnleggende rettighet og et viktig prinsipp i norsk helsetjeneste. Det betyr at pasienter og brukere skal ha innflytelse over sin egen behandling og omsorg.

I dette kapittelet lærer du:
- Hva brukermedvirkning innebærer
- Lovgrunnlaget for medvirkning
- Samvalg i praksis
- Helsefagarbeiderens rolle i å fremme medvirkning`,
    },
    {
      id: 'hov2-1-3-def-1',
      type: 'definition',
      title: 'Brukermedvirkning',
      content: `**Brukermedvirkning** betyr at pasienter og brukere har rett til å delta i beslutninger om egen helse, behandling og omsorg. Retten er forankret i **pasient- og brukerrettighetsloven** § 3-1. Medvirkning kan skje på individuelt nivå (den enkelte pasient) og systemnivå (brukerråd, pasientorganisasjoner).`,
    },
    {
      id: 'hov2-1-3-text-1',
      type: 'text',
      content: `### Samvalg – å ta beslutninger sammen

**Samvalg** (shared decision-making) er en metode der helsepersonell og pasient sammen kommer frem til den beste løsningen. Det innebærer:

1. **Informasjon**: Pasienten får klar og forståelig informasjon om alternativene
2. **Preferanser**: Pasientens verdier og ønsker kartlegges
3. **Beslutning**: Pasient og helsepersonell blir enige om beste tiltak

**Eksempler på samvalg:**
- Valg mellom hjemmebasert omsorg og sykehjemsplass
- Hvilke aktiviteter som er viktigst for pasienten
- Tidspunkt for stell og måltider
- Ønsker for siste fase av livet`,
    },
    {
      id: 'hov2-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-3-ex-1',
        number: '1.3.1',
        type: 'multiple-choice',
        task: 'Hva innebærer samvalg i helsetjenesten?',
        options: [
          { id: 'a', text: 'At helsepersonell bestemmer det beste for pasienten', isCorrect: false },
          { id: 'b', text: 'At pasienten bestemmer alt selv uten veiledning', isCorrect: false },
          { id: 'c', text: 'At pasient og helsepersonell sammen kommer frem til beste løsning', isCorrect: true },
          { id: 'd', text: 'At pårørende tar alle avgjørelser', isCorrect: false },
        ],
        solution: 'Samvalg betyr at pasient og helsepersonell sammen diskuterer alternativer og kommer frem til den beste løsningen, basert på fagkunnskap og pasientens ønsker og verdier.',
      },
    },
    {
      id: 'hov2-1-3-text-2',
      type: 'text',
      content: `### Helsefagarbeiderens rolle

Som helsefagarbeider kan du fremme medvirkning ved å:

- **Lytte aktivt** til pasientens ønsker og behov
- **Gi informasjon** tilpasset pasientens forutsetninger
- **Tilby valg** der det er mulig (tidspunkt for stell, matvalg, aktiviteter)
- **Respektere beslutninger** selv om du kanskje ville valgt annerledes
- **Rapportere** pasientens ønsker videre til det tverrfaglige teamet
- **Tilpasse** omsorgen til den enkeltes behov og preferanser`,
    },
    {
      id: 'hov2-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-3-ex-2',
        number: '1.3.2',
        type: 'classic',
        task: 'En beboer på sykehjem ønsker å dusje om kvelden i stedet for om morgenen, slik rutinen er. Hvordan vil du håndtere dette som helsefagarbeider?',
        solution: 'Jeg ville respektere beboerens ønske og tilby kveldsdusj. Brukermedvirkning betyr at pasienten skal ha innflytelse over egen hverdag. Jeg ville snakke med avdelingsleder om å tilpasse rutinene, og dokumentere beboerens ønske slik at alle ansatte er informert.',
      },
    },
    {
      id: 'hov2-1-3-summary',
      type: 'text',
      content: `## Oppsummering

- **Brukermedvirkning** er en lovfestet rettighet
- **Samvalg** betyr at pasient og helsepersonell tar beslutninger sammen
- **Helsefagarbeideren** fremmer medvirkning gjennom lytting, informasjon og respekt
- **Individuell tilpasning** er en del av medvirkningsprinsippet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Brukermedvirkning | Pasientens rett til å delta i beslutninger om egen helse |
| Samvalg | At helsepersonell og pasient tar beslutninger sammen |
| Informert samtykke | At pasienten sier ja etter å ha fått tilstrekkelig informasjon |
| Autonomi | Retten til selvbestemmelse |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'hov2-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-3-ex-3',
        number: '1.3.3',
        type: 'classic',
        task: 'En pasient med demens har begrenset evne til å uttrykke sine ønsker. Drøft hvordan du likevel kan ivareta brukermedvirkning for denne pasienten.',
        solution: 'Man kan bruke kjennskap til pasientens livshistorie og tidligere ønsker, observere kroppsspråk og reaksjoner, involvere pårørende som kjenner pasienten godt, tilby enkle valg (to alternativer), bruke bilder eller gjenstander, og dokumentere hva pasienten reagerer positivt og negativt på.',
      },
    },
    {
      id: 'hov2-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-3-ex-4',
        number: '1.3.4',
        type: 'classic',
        task: 'Gi tre konkrete eksempler på hvordan du kan fremme brukermedvirkning i hverdagen på sykehjem.',
        solution: '1) La beboeren velge klær selv fra to-tre alternativer. 2) Spørre om beboeren vil spise frokost på rommet eller i fellesarealet. 3) Kartlegge hvilke aktiviteter beboeren ønsker å delta på og tilpasse tilbudet.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Brukermedvirkning', definition: 'Pasientens rett til å delta i beslutninger om egen behandling og omsorg' },
    { term: 'Samvalg', definition: 'Metode der helsepersonell og pasient sammen kommer frem til beste løsning' },
    { term: 'Informert samtykke', definition: 'At pasienten godkjenner behandling etter å ha fått tilstrekkelig informasjon' },
    { term: 'Autonomi', definition: 'Individets rett til selvbestemmelse' },
  ],
};

// ============================================================================
// Kapittel 1.4: Lovverk i helsetjenesten
// ============================================================================

export const CHAPTER_HOV2_1_4: TextbookChapter = {
  id: 'hov2-1-4',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '1.4',
  title: 'Lovverk i helsetjenesten',
  description: 'Helsepersonelloven, pasientrettighetsloven og andre sentrale lover som regulerer helsetjenesten.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for sentrale lover som regulerer helsetjenesten',
  ],
  content: [
    {
      id: 'hov2-1-4-intro',
      type: 'text',
      content: `## Lovverket som styrer helsetjenesten

Helsetjenesten er regulert av en rekke lover som sikrer pasientenes rettigheter og helsepersonellets plikter. Som helsefagarbeider må du kjenne til de viktigste lovene.

I dette kapittelet lærer du:
- Helsepersonelloven og dine plikter
- Pasient- og brukerrettighetsloven
- Helse- og omsorgstjenesteloven
- Taushetsplikt og dokumentasjonsplikt`,
    },
    {
      id: 'hov2-1-4-def-1',
      type: 'definition',
      title: 'Helsepersonelloven',
      content: `**Helsepersonelloven** regulerer helsepersonells plikter og rettigheter. Loven gjelder alle med autorisasjon, inkludert helsefagarbeidere. Sentrale krav er: forsvarlig yrkesutøvelse (§ 4), taushetsplikt (§ 21), dokumentasjonsplikt (§ 39), opplysningsplikt til barnevernet (§ 33) og meldeplikt ved fare for pasienters sikkerhet.`,
    },
    {
      id: 'hov2-1-4-text-1',
      type: 'text',
      content: `### Sentrale lover

**Pasient- og brukerrettighetsloven:**
- Rett til nødvendig helsehjelp
- Rett til medvirkning og informasjon
- Rett til journalinnsyn
- Regler for samtykke og samtykkekompetanse
- Rett til å klage på helsetjenester

**Helse- og omsorgstjenesteloven:**
- Kommunens ansvar for helsetjenester
- Krav til forsvarlighet og kvalitet
- Koordinering og individuell plan
- Pårørendes rettigheter

**Andre viktige lover:**
- **Spesialisthelsetjenesteloven** – sykehusenes ansvar
- **Psykisk helsevernloven** – regler for tvang i psykisk helsevern
- **Smittevernloven** – forebygging av smittsomme sykdommer
- **Arbeidsmiljøloven** – HMS og arbeidstakerrettigheter`,
    },
    {
      id: 'hov2-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-4-ex-1',
        number: '1.4.1',
        type: 'multiple-choice',
        task: 'Hvilken lov regulerer helsefagarbeiderens taushetsplikt?',
        options: [
          { id: 'a', text: 'Arbeidsmiljøloven', isCorrect: false },
          { id: 'b', text: 'Helsepersonelloven', isCorrect: true },
          { id: 'c', text: 'Pasientrettighetsloven', isCorrect: false },
          { id: 'd', text: 'Smittevernloven', isCorrect: false },
        ],
        solution: 'Taushetsplikten er regulert i helsepersonelloven § 21. Den pålegger alt helsepersonell å hindre at andre får tilgang til opplysninger om pasienters helse og personlige forhold.',
      },
    },
    {
      id: 'hov2-1-4-def-2',
      type: 'definition',
      title: 'Forsvarlighetsplikt',
      content: `**Forsvarlighetsplikten** (helsepersonelloven § 4) innebærer at helsepersonell skal utføre sitt arbeid i samsvar med kravene til faglig forsvarlighet. Det betyr at du skal handle innenfor din kompetanse, be om hjelp når du er usikker, og si fra hvis du opplever at noe er uforsvarlig.`,
    },
    {
      id: 'hov2-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-4-ex-2',
        number: '1.4.2',
        type: 'classic',
        task: 'Hva bør du gjøre som helsefagarbeider dersom du får beskjed om å utføre en oppgave du ikke har kompetanse til?',
        solution: 'Du skal si fra til den som delegerer oppgaven at du ikke har nødvendig kompetanse. Forsvarlighetsplikten pålegger deg å handle innenfor din kompetanse. Du bør be om opplæring eller at oppgaven utføres av en med riktig kompetanse. Dokumenter hendelsen.',
      },
    },
    {
      id: 'hov2-1-4-summary',
      type: 'text',
      content: `## Oppsummering

- **Helsepersonelloven** regulerer plikter som forsvarlighet, taushetsplikt og dokumentasjon
- **Pasientrettighetsloven** sikrer pasientens rett til helsehjelp og medvirkning
- **Forsvarlighetsplikten** betyr at du skal handle innenfor din kompetanse
- **Taushetsplikten** beskytter pasientens personlige opplysninger

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Helsepersonelloven | Lov som regulerer helsepersonells plikter og rettigheter |
| Forsvarlighetsplikt | Plikten til å utføre arbeid innenfor egen kompetanse |
| Taushetsplikt | Plikten til å beskytte pasienters personlige opplysninger |
| Dokumentasjonsplikt | Plikten til å føre journal over helsehjelp som ytes |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'hov2-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-4-ex-3',
        number: '1.4.3',
        type: 'classic',
        task: 'En kollega forteller deg i kantinen at en bestemt pasient har en alvorlig diagnose. Andre kolleger som ikke jobber med pasienten overhører samtalen. Hva er problematisk med denne situasjonen?',
        solution: 'Dette er brudd på taushetsplikten. Helseopplysninger skal ikke deles med andre enn de som trenger informasjonen for å gi helsehjelp. Samtaler om pasienter skal foregå på steder der uvedkommende ikke kan overhøre. Kollegaen bør gjøres oppmerksom på bruddet.',
      },
    },
    {
      id: 'hov2-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-4-ex-4',
        number: '1.4.4',
        type: 'classic',
        task: 'Lag en oversikt over de tre viktigste lovene for helsefagarbeidere, med én sentral paragraf fra hver lov og hva den betyr i praksis.',
        solution: '1) Helsepersonelloven § 4 – forsvarlighetsplikt: betyr at du må handle innenfor din kompetanse. 2) Helsepersonelloven § 21 – taushetsplikt: betyr at du ikke deler pasientinfo med uvedkommende. 3) Pasientrettighetsloven § 3-1 – medvirkning: betyr at pasienten skal delta i beslutninger om egen behandling.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Helsepersonelloven', definition: 'Lov som regulerer helsepersonells plikter og rettigheter' },
    { term: 'Forsvarlighetsplikt', definition: 'Plikten til å utføre arbeid på faglig forsvarlig måte' },
    { term: 'Taushetsplikt', definition: 'Plikten til å beskytte pasientopplysninger mot uvedkommende' },
    { term: 'Dokumentasjonsplikt', definition: 'Plikten til å dokumentere helsehjelp som gis til pasienter' },
  ],
};

// ============================================================================
// Kapittel 1.5: Kvalitetsarbeid og forsvarlig omsorg
// ============================================================================

export const CHAPTER_HOV2_1_5: TextbookChapter = {
  id: 'hov2-1-5',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '1.5',
  title: 'Kvalitetsarbeid og forsvarlig omsorg',
  description: 'Kvalitetssikring, internkontroll og avviksbehandling for å sikre trygge og gode helsetjenester.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for kvalitetsforskrifter i helsetjenesten og drøfte forsvarlig omsorg',
  ],
  content: [
    {
      id: 'hov2-1-5-intro',
      type: 'text',
      content: `## Kvalitet i helsetjenesten

God kvalitet i helsetjenesten betyr at tjenestene er trygge, effektive og tilpasset den enkeltes behov. Kvalitetsarbeid handler om å systematisk sikre at tjenestene holder høy standard.

I dette kapittelet lærer du:
- Hva kvalitet i helsetjenesten betyr
- Internkontroll og kvalitetssystemer
- Avviksbehandling og forbedringsarbeid
- Pasientsikkerhet`,
    },
    {
      id: 'hov2-1-5-def-1',
      type: 'definition',
      title: 'Internkontroll',
      content: `**Internkontroll** er en systematisk tilnærming for å sikre at virksomheten drives i samsvar med lover og forskrifter. I helsetjenesten reguleres dette av **forskrift om ledelse og kvalitetsforbedring**. Internkontroll innebærer at virksomheten planlegger, gjennomfører, evaluerer og korrigerer sine tjenester systematisk.`,
    },
    {
      id: 'hov2-1-5-text-1',
      type: 'text',
      content: `### Avviksbehandling

Et **avvik** er en uønsket hendelse som avviker fra gjeldende prosedyrer, rutiner eller kvalitetskrav. Avviksbehandling er viktig for å lære av feil og forbedre tjenestene.

**Eksempler på avvik:**
- Feil legemiddel gitt til pasient
- Fall uten tilsyn
- Manglende dokumentasjon
- Brudd på hygieneprosedyrer

**Prosessen for avviksbehandling:**
1. **Oppdage** avviket
2. **Melde** avviket i avvikssystemet
3. **Analysere** årsaken til avviket
4. **Iverksette** tiltak for å hindre gjentakelse
5. **Evaluere** om tiltakene virker

Som helsefagarbeider har du **plikt** til å melde avvik – det er ikke sladring, men kvalitetsarbeid.`,
    },
    {
      id: 'hov2-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-5-ex-1',
        number: '1.5.1',
        type: 'multiple-choice',
        task: 'Hva er riktig fremgangsmåte ved et avvik?',
        options: [
          { id: 'a', text: 'Ikke si noe for å unngå bråk', isCorrect: false },
          { id: 'b', text: 'Melde avviket i virksomhetens avvikssystem', isCorrect: true },
          { id: 'c', text: 'Bare snakke med en kollega om det', isCorrect: false },
          { id: 'd', text: 'Vente til neste personaløte', isCorrect: false },
        ],
        solution: 'Avvik skal meldes i virksomhetens avvikssystem snarest mulig. Det er viktig for pasientsikkerheten og for at virksomheten kan lære av hendelsen og iverksette tiltak.',
      },
    },
    {
      id: 'hov2-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-5-ex-2',
        number: '1.5.2',
        type: 'classic',
        task: 'Du oppdager at en pasient har falt på badet uten at det var noen til stede. Beskriv steg for steg hvordan du bør håndtere situasjonen.',
        solution: '1) Sikre pasienten – sjekk for skader og gi førstehjelp. 2) Tilkall hjelp fra sykepleier/lege ved behov. 3) Dokumenter hendelsen i journalen. 4) Meld avviket i avvikssystemet. 5) Vurder om rutinene må endres (f.eks. hyppigere tilsyn, hjelpemidler på badet).',
      },
    },
    {
      id: 'hov2-1-5-summary',
      type: 'text',
      content: `## Oppsummering

- **Kvalitetsarbeid** handler om systematisk forbedring av helsetjenester
- **Internkontroll** sikrer at virksomheten drives forsvarlig
- **Avviksbehandling** er nødvendig for å lære av feil og forbedre
- **Alle ansatte** har plikt til å melde avvik

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Internkontroll | Systematisk arbeid for å sikre forsvarlig drift |
| Avvik | Uønsket hendelse som avviker fra rutiner og prosedyrer |
| Pasientsikkerhet | Tiltak for å hindre skade på pasienter |
| Kvalitetsforbedring | Systematisk arbeid med å forbedre tjenestene |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'hov2-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-5-ex-3',
        number: '1.5.3',
        type: 'classic',
        task: 'Drøft hvorfor det er viktig at avviksmelding ikke fører til straff av den som melder. Hva kan skje hvis ansatte er redde for å melde avvik?',
        solution: 'Hvis ansatte frykter straff, vil avvik underrapporteres. Det betyr at virksomheten ikke får oversikt over problemer og ikke kan forbedre seg. En åpen meldekultur der avvik ses som læringsmuligheter er avgjørende for pasientsikkerheten. Systemfeil, ikke enkeltpersoner, er oftest årsaken til avvik.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Internkontroll', definition: 'Systematisk arbeid for å sikre at virksomheten drives etter lover og forskrifter' },
    { term: 'Avvik', definition: 'Uønsket hendelse som avviker fra gjeldende prosedyrer' },
    { term: 'Pasientsikkerhet', definition: 'Arbeid for å hindre at pasienter utsettes for unødig skade' },
    { term: 'Kvalitetsforbedring', definition: 'Systematisk arbeid med å heve kvaliteten på tjenestene' },
  ],
};

// ============================================================================
// Kapittel 1.6: HMS og ergonomi
// ============================================================================

export const CHAPTER_HOV2_1_6: TextbookChapter = {
  id: 'hov2-1-6',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '1.6',
  title: 'HMS og ergonomi',
  description: 'Helse, miljø og sikkerhet på arbeidsplassen, ergonomiske prinsipper og forebygging av belastningsskader i helsearbeid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for ergonomiske prinsipper og anvende dem i yrkesutøvelsen',
  ],
  content: [
    {
      id: 'hov2-1-6-intro',
      type: 'text',
      content: `## Trygt og godt arbeidsmiljø

Helsearbeid er fysisk krevende, og mange helsefagarbeidere opplever belastningsskader. God ergonomi og HMS-arbeid er avgjørende for å forebygge skader og sikre et bærekraftig arbeidsliv.

I dette kapittelet lærer du:
- HMS i helsetjenesten
- Ergonomiske prinsipper
- Forebygging av belastningsskader
- Forflytningsteknikker`,
    },
    {
      id: 'hov2-1-6-def-1',
      type: 'definition',
      title: 'Ergonomi',
      content: `**Ergonomi** er læren om tilpasning mellom menneske og arbeidsmiljø. I helsearbeid handler ergonomi om å bruke kroppen riktig under forflytning, stell og andre arbeidsoppgaver, samt å bruke hjelpemidler for å redusere belastning. Målet er å forebygge muskel- og skjelettplager.`,
    },
    {
      id: 'hov2-1-6-text-1',
      type: 'text',
      content: `### Ergonomiske prinsipper i praksis

**Grunnregler:**
- Arbeid nær kroppen – unngå å strekke deg
- Bøy i knærne, ikke i ryggen
- Bruk bena som kraftkilde
- Hold ryggen rett og stabil
- Bruk hjelpemidler når de er tilgjengelige
- Unngå vridning i ryggen under løft

**Hjelpemidler:**
- Personløfter (takløfter, mobil løfter)
- Glidemadrass og glidematte
- Dreieskive og belte
- Hev-senk-seng
- Dusjstol og badestol

**Tilrettelegging:**
- Juster sengeneyde til riktig arbeidshøyde
- Sørg for god plass rundt pasienten
- Planlegg forflytningen før du starter
- Samarbeid med kolleger ved tunge forflytninger`,
    },
    {
      id: 'hov2-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-6-ex-1',
        number: '1.6.1',
        type: 'multiple-choice',
        task: 'Hva er det viktigste ergonomiske prinsippet ved forflytning av pasienter?',
        options: [
          { id: 'a', text: 'Løft pasienten fort så det er over raskt', isCorrect: false },
          { id: 'b', text: 'Bruk hjelpemidler og hold ryggen rett', isCorrect: true },
          { id: 'c', text: 'Bøy godt i ryggen for å komme nærmere pasienten', isCorrect: false },
          { id: 'd', text: 'Utfør forflytning alene for å spare tid', isCorrect: false },
        ],
        solution: 'Det viktigste er å bruke hjelpemidler, holde ryggen rett, bøye i knærne og samarbeide med kolleger. Dette forebygger belastningsskader.',
      },
    },
    {
      id: 'hov2-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-6-ex-2',
        number: '1.6.2',
        type: 'classic',
        task: 'Beskriv steg for steg hvordan du ville gjennomført en forflytning av en pasient fra seng til rullestol på en ergonomisk riktig måte.',
        solution: '1) Planlegg forflytningen og snakk med pasienten. 2) Juster sengehøyde til rullestolens sittehøyde. 3) Plasser rullestolen tett inntil sengen med bremsen på. 4) Hjelp pasienten opp i sittende stilling. 5) La pasienten sette føttene på gulvet. 6) Bruk dreieskive eller belte om nødvendig. 7) Støtt pasienten med rett rygg, bøyde knær og kroppen nær. 8) La pasienten dreie og sette seg i stolen.',
      },
    },
    {
      id: 'hov2-1-6-summary',
      type: 'text',
      content: `## Oppsummering

- **Ergonomi** handler om å tilpasse arbeidet til kroppen
- **Hjelpemidler** skal alltid brukes når de er tilgjengelige
- **Belastningsskader** kan forebygges med riktig teknikk
- **HMS-arbeid** er et felles ansvar for ledelse og ansatte

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Ergonomi | Læren om tilpasning mellom menneske og arbeidsmiljø |
| HMS | Helse, miljø og sikkerhet på arbeidsplassen |
| Forflytning | Å hjelpe en pasient fra en stilling/plass til en annen |
| Belastningsskade | Skade som oppstår over tid på grunn av feil belastning |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'hov2-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-6-ex-3',
        number: '1.6.3',
        type: 'classic',
        task: 'Drøft hvorfor det er viktig å ivareta egen helse som helsefagarbeider. Hva kan konsekvensene være av å ikke følge ergonomiske prinsipper?',
        solution: 'Konsekvensene kan være kroniske ryggsmerter, sykemelding, nedsatt arbeidsevne og i verste fall uførhet. Det påvirker ikke bare den enkelte, men også kollegene (økt arbeidsbelastning) og pasientene (dårligere tjenester). Forebygging gjennom ergonomi er en investering i bærekraftig arbeidsliv.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Ergonomi', definition: 'Tilpasning mellom menneske og arbeidsmiljø for å forebygge skader' },
    { term: 'HMS', definition: 'Helse, miljø og sikkerhet – systematisk arbeid for trygt arbeidsmiljø' },
    { term: 'Forflytning', definition: 'Å hjelpe en pasient med å endre stilling eller posisjon' },
    { term: 'Belastningsskade', definition: 'Skade som oppstår over tid grunnet gjentatt feil belastning' },
  ],
};

// ============================================================================
// Kapittel 1.7: Arbeidsliv og den norske modellen
// ============================================================================

export const CHAPTER_HOV2_1_7: TextbookChapter = {
  id: 'hov2-1-7',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '1.7',
  title: 'Arbeidsliv og den norske modellen',
  description: 'Arbeidstakerrettigheter, den norske arbeidslivsmodellen, fagforeninger og tariffavtaler i helsesektoren.',
  estimatedMinutes: 45,
  competenceGoals: [
    'ivareta egne rettigheter og plikter i arbeidsforholdet og beskrive den norske modellen',
  ],
  content: [
    {
      id: 'hov2-1-7-intro',
      type: 'text',
      content: `## Den norske arbeidslivsmodellen

Norge har en unik arbeidslivsmodell med sterke rettigheter for arbeidstakere, aktive fagforeninger og et godt samarbeid mellom partene i arbeidslivet. Som helsefagarbeider er det viktig å kjenne til dine rettigheter og plikter.

I dette kapittelet lærer du:
- Hva den norske modellen innebærer
- Arbeidstakerrettigheter og -plikter
- Fagforeninger og tariffavtaler
- Arbeidsvilkår i helsesektoren`,
    },
    {
      id: 'hov2-1-7-def-1',
      type: 'definition',
      title: 'Den norske modellen',
      content: `**Den norske modellen** (også kalt den nordiske modellen) er en betegnelse på det norske systemet med trepartssamarbeid mellom staten, arbeidsgiverorganisasjoner og arbeidstakerorganisasjoner. Modellen kjennetegnes av sterke fagforeninger, sentrale lønnsforhandlinger, en velferdsstat med universelle ordninger, og et høyt nivå av tillit mellom partene.`,
    },
    {
      id: 'hov2-1-7-text-1',
      type: 'text',
      content: `### Arbeidstakerrettigheter

**Arbeidsmiljøloven** gir deg som arbeidstaker viktige rettigheter:

- **Skriftlig arbeidsavtale** med stillingsbeskrivelse, lønn og arbeidstid
- **Regulert arbeidstid** med overtidsbetaling
- **Rett til pause** og hvile mellom vakter
- **Rett til ferie** (minst 25 virkedager per år)
- **Rett til sykemelding** ved sykdom
- **Vern mot oppsigelse** uten saklig grunn
- **Verneombud** som ivaretar arbeidstakernes interesser

**Plikter:**
- Utføre arbeidet samvittighetsfullt
- Følge instrukser og prosedyrer
- Bruke verneutstyr
- Melde fra om feil og mangler
- Bidra til et godt arbeidsmiljø`,
    },
    {
      id: 'hov2-1-7-def-2',
      type: 'definition',
      title: 'Tariffavtale',
      content: `En **tariffavtale** er en avtale mellom en fagforening og en arbeidsgiver(organisasjon) om lønns- og arbeidsvilkår. I helsesektoren er de viktigste fagforeningene **Fagforbundet**, **Delta** og **Norsk Sykepleierforbund**. Tariffavtalen fastsetter minstelønn, tillegg for kvelds- og nattarbeid, pensjonsordninger og andre rettigheter.`,
    },
    {
      id: 'hov2-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-7-ex-1',
        number: '1.7.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner den norske arbeidslivsmodellen?',
        options: [
          { id: 'a', text: 'Svake fagforeninger og individuelle lønnsforhandlinger', isCorrect: false },
          { id: 'b', text: 'Trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere', isCorrect: true },
          { id: 'c', text: 'At staten bestemmer alt uten innspill fra partene', isCorrect: false },
          { id: 'd', text: 'At det ikke finnes tariffavtaler', isCorrect: false },
        ],
        solution: 'Den norske modellen kjennetegnes av trepartssamarbeid mellom staten, arbeidsgiverorganisasjoner og arbeidstakerorganisasjoner, med sterke fagforeninger og sentrale lønnsforhandlinger.',
      },
    },
    {
      id: 'hov2-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-7-ex-2',
        number: '1.7.2',
        type: 'classic',
        task: 'Nevn tre rettigheter du har som arbeidstaker i helsesektoren, og forklar hvorfor hver av dem er viktig.',
        solution: '1) Rett til skriftlig arbeidsavtale – viktig for å vite hva som er avtalt om lønn, arbeidstid og oppgaver. 2) Rett til ferie – viktig for restitusjon og forebygging av utbrenthet. 3) Rett til verneombud – viktig for å ha noen som ivaretar arbeidsmiljøet.',
      },
    },
    {
      id: 'hov2-1-7-summary',
      type: 'text',
      content: `## Oppsummering

- **Den norske modellen** bygger på samarbeid mellom stat, arbeidsgivere og arbeidstakere
- **Arbeidsmiljøloven** gir rettigheter som arbeidsavtale, ferie og vern mot oppsigelse
- **Fagforeninger** forhandler tariffavtaler som sikrer lønns- og arbeidsvilkår
- **Helsefagarbeidere** har både rettigheter og plikter i arbeidsforholdet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Den norske modellen | Trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere |
| Tariffavtale | Avtale om lønns- og arbeidsvilkår mellom fagforening og arbeidsgiver |
| Arbeidsmiljøloven | Lov som regulerer arbeidstakerrettigheter og HMS |
| Verneombud | Arbeidstakernes representant for HMS |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'hov2-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-7-ex-3',
        number: '1.7.3',
        type: 'classic',
        task: 'Du opplever at arbeidsplassen din jevnlig har for lite bemanning, noe som går ut over pasientsikkerheten. Hvem kan du kontakte, og hvordan kan den norske modellen hjelpe deg?',
        solution: 'Du kan kontakte verneombudet, tillitsvalgt i fagforeningen, eller ledelsen. Gjennom trepartssamarbeidet har fagforeningen rett til å forhandle om arbeidsvilkår, og verneombudet kan kreve tiltak fra arbeidsgiver. Du kan også melde avvik i avvikssystemet og kontakte Arbeidstilsynet i alvorlige tilfeller.',
      },
    },
    {
      id: 'hov2-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-1-7-ex-4',
        number: '1.7.4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper med å organisere seg i en fagforening som helsefagarbeider.',
        solution: 'Fordeler: Juridisk bistand, forhandlingsrett, påvirkning av arbeidsvilkår, fellesskap, forsikringsordninger, tillitsvalgt som taler din sak. Ulemper: Kontingent, kan oppleves byråkratisk, streik kan ramme pasienter. De fleste vil likevel si at fordelene oppveier ulempene, særlig i helsesektoren der tariffavtaler sikrer tillegg for ubekvem arbeidstid.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Den norske modellen', definition: 'Trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere' },
    { term: 'Tariffavtale', definition: 'Avtale om lønns- og arbeidsvilkår mellom fagforening og arbeidsgiver' },
    { term: 'Arbeidsmiljøloven', definition: 'Lov som regulerer arbeidsforhold, HMS og arbeidstakerrettigheter' },
    { term: 'Fagforening', definition: 'Organisasjon som ivaretar arbeidstakernes interesser' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const HELSEOPPVEKST_VG2_DEL1_CHAPTERS = [
  CHAPTER_HOV2_1_1,
  CHAPTER_HOV2_1_2,
  CHAPTER_HOV2_1_3,
  CHAPTER_HOV2_1_4,
  CHAPTER_HOV2_1_5,
  CHAPTER_HOV2_1_6,
  CHAPTER_HOV2_1_7,
];
